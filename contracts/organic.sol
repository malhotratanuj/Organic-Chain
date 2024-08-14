// SPDX-License-Identifier: MIT

pragma solidity 0.8.26;

import "contracts/ReentrancyGuard.sol";

contract Organic is ReentrancyGuard{

    //////////////////
    //Errors        //
    //////////////////
    error NotOwner(address sender);
    error AlreadyFarmer(address farmer);
    error NotFarmer(address farmer);
    error ListingFeeNotPaid(uint256 listingFee, uint256 paidFee);
    error NegativeIndex(uint256 idx);
    error TooLargeIndex(uint256 idx);


    //////////////////
    //Events        //
    //////////////////
    event AddFarmer(address farmer);
    event CreateSellOffer(uint256 indexed idx, address lister, string item, uint256 price);
    event CreateBuyOffer(uint256 indexed idx, address lister, string item, uint256 price);
    event FulfillSellOffer(uint256 idx);
    event FulfillBuyOffer(uint256 idx);
    event Approvefulfillment(uint256 idx);
    event CancelOffer(uint idx);


    //////////////////
    //Types         //
    //////////////////
    enum OfferType {Buy, Sell}
    enum OfferStatus {Live, SoldNotApproved, SoldApproved, Cancelled}
    
    //1. farmer created an offer of SELLING 5 kg of tomato - farmer pay nothing but the listing fee - listing is LIVE
    //2. a buyer will fulfill this offer - The buyer will transfer the prive of the offer to ORGANIC(contract) - listing is SoldNotApproved
    //3. Organic foundation will find a way to confirm that the farmer has indeed transmitted the tomatos to the buyer - listing is SoldApproved BY organic -
    // money will be trsnferred from the contract to the lister

    struct Offer{
        address lister; //the creator of the offer.
        string item; //description of the offered item.
        OfferType offerType; //Buy or Sell.
        uint256 price; //The total price of the item.
        OfferStatus status; //Where exactly is the offer in its lifecycle.
        address fulfiller; //starts as address(0). Gets updated once the offer is fulfilled.
        uint256 moneyInThisOffer; //initially, holds the money that a user sends. initial values: 0 in sell offers. price in buy offers.
    }


    ///////////////////////
    //State Variables    //
    ///////////////////////
    address public owner; //the owner of the contract
    uint256 numberOfOffers=0; //total number of offers of all types
    uint256 listingFee=1000000000; //1 Gwei //the fee that should be paid when someone is creating a listing
    uint256 withdrawable=0; //the whthdrawable profit of the owner - the total sum of the listing fees.
    Offer[] offers; // an array to keep track of the offers
    mapping (address=>bool) public isFarmer; //check whether an address is a farmer or not.
    address[] farmers; //an array of the farmers addresses.


    ///////////////////////
    //Constructor        //
    ///////////////////////
    constructor(){
        owner=msg.sender;
    }


    ///////////////////////
    //Modifiers          //
    ///////////////////////
    modifier onlyOwner(){
        require(msg.sender==owner,NotOwner(msg.sender));
        _;
    }


    ///////////////////////
    //Public Functions   //
    ///////////////////////
    //Add a farmer to the system. This is an owner-only function. The owner can add farmers after verifiying (off-chain) that they are farmers.
    function addFarmer(address farmer) onlyOwner public{
        require(isFarmer[farmer]==false, AlreadyFarmer(farmer));
        
        isFarmer[farmer]=true;
        farmers.push(farmer);

        emit AddFarmer(farmer);
    }

    //A function to create a sell offer. Callable only be approved farmers.
    function createSellOffer(string memory _item, uint256 _price) public payable{
        require(isFarmer[msg.sender]==true,NotFarmer(msg.sender));
        require(msg.value==listingFee, ListingFeeNotPaid(listingFee,msg.value));
        
        withdrawable+=listingFee;
        offers.push(Offer({
            lister: msg.sender,
            item: _item,
            offerType: OfferType.Sell,
            price: _price,
            status: OfferStatus.Live,
            fulfiller: address(0),
            moneyInThisOffer: 0
            }));
        numberOfOffers+=1;
        
        emit CreateSellOffer(numberOfOffers-1, msg.sender, _item, _price);
    }

    //A function to create a buy offer. Callable by anyone.
    function createBuyOffer(string memory _item, uint256 _price) public payable{      
        require(msg.value==listingFee+_price, ListingFeeNotPaid(listingFee,msg.value));
        
        withdrawable+=listingFee;
        offers.push(Offer({
            lister: msg.sender,
            item: _item,
            offerType: OfferType.Buy,
            price: _price,
            status: OfferStatus.Live,
            fulfiller: address(0),
            moneyInThisOffer: _price
            }));
        numberOfOffers+=1;
        
        emit CreateBuyOffer(numberOfOffers-1, msg.sender, _item, _price);
    }

    // a function to fulfill a sell offer. Callable by anyone. takes the index of the offer as input.
    function fulfillSellOffer(uint256 idx) public payable nonReentrant{
        require(idx<numberOfOffers, TooLargeIndex(idx));
        require(offers[idx].lister!=msg.sender);
        require(msg.value==offers[idx].price);
        require(offers[idx].status==OfferStatus.Live);

        offers[idx].status=OfferStatus.SoldNotApproved;
        offers[idx].fulfiller=msg.sender;
        offers[idx].moneyInThisOffer=msg.value;

        emit FulfillSellOffer(idx);
    }

    // a function to fulfill a buy offer. Callable by anyone. takes the index of the offer as input.
    function fulfillBuyOffer(uint256 idx) public{
        require(idx<numberOfOffers, TooLargeIndex(idx));
        require(offers[idx].lister!=msg.sender);
        require(isFarmer[msg.sender]==true);
        require(offers[idx].status==OfferStatus.Live);

        offers[idx].status=OfferStatus.SoldNotApproved;
        offers[idx].fulfiller=msg.sender;

        emit FulfillBuyOffer(idx);
    }

    //an only-owner function. Gets called after verifying the delivery of goods (off-chain).
    function approveFulfillment(uint256 idx) public onlyOwner{
        require(idx<numberOfOffers, TooLargeIndex(idx));
        require(offers[idx].status==OfferStatus.SoldNotApproved);

        offers[idx].status=OfferStatus.SoldApproved;
        address recep;
        uint256 toBeTransferred=offers[idx].moneyInThisOffer;
        if (offers[idx].offerType==OfferType.Sell){
            recep=offers[idx].lister;
        }
        else{
            recep=offers[idx].fulfiller;
        }
        offers[idx].moneyInThisOffer=0;

        payable(recep).transfer(toBeTransferred);

        emit Approvefulfillment(idx);
    }

    //a function to cancel an offer. callable by the creator of that offer. You can cancel only a LIVE offer.
    function cancelOffer(uint256 idx) public nonReentrant{
        require(idx<numberOfOffers, TooLargeIndex(idx));
        require(offers[idx].lister==msg.sender);
        require(offers[idx].status==OfferStatus.Live);

        offers[idx].status=OfferStatus.Cancelled;

        if (offers[idx].offerType==OfferType.Buy){
            uint256 moneyToRefund=offers[idx].moneyInThisOffer;
            offers[idx].moneyInThisOffer=0;
            payable(offers[idx].lister).transfer(moneyToRefund);
        }

        emit CancelOffer(idx);
    }

    //an owner-only function. Used to withdraw the profits.
    function withdrawProfit() public onlyOwner{
        payable(owner).transfer(withdrawable);
        withdrawable=0;
    }

    //an owner function. Used to change the listing fee.
    function setListingFee(uint256 _listingFee) public onlyOwner{
        require(_listingFee>0);
        listingFee=_listingFee;
    }

    ///////////////////////
    //View Functions     //
    ///////////////////////
    //Get all offers in details.
    function getOffers() public view returns(Offer[] memory){
        return offers;
    }

    //Get the addresses of all farmers.
    function getFarmers() public view returns(address[] memory){
        return farmers;
    }

    //Get the details of a single offer via its index.
    function getOffer(uint256 idx) public view returns(Offer memory){
        require(idx>=0, NegativeIndex(idx));
        require(idx<numberOfOffers, TooLargeIndex(idx));
        
        return offers[idx];
    }
}