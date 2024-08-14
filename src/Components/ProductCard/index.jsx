import React, { useEffect, useState } from 'react';
import './index.css';
import { addProduct, removeProduct, checkItemExist } from './helper';
import { Link } from 'react-router-dom';


function ProductCard({name ='', thc = '', id = '', price = ''}) {
    const style = {
        backgroundColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    }
    const [isWishList, setIsWishList] = useState(false);
    const [isAddedIntoCart, setIsAddedIntoCart] = useState(false);

    useEffect(()=>{
        setIsAddedIntoCart(checkItemExist('productCart', id));
        setIsWishList(checkItemExist('productWishlist', id));
    },[id])
  return (
    <div className='card card-body product-card rounded-xl d-flex flex-column text-dark justify-content-between align-items-center'>
        <img src="https://placehold.co/150" width={150} height={150} alt={`product ${id}`} />
        <h5 className='fs-5 mb-3'>{name}</h5>
        <p className='fw-bold mb-3'>
            {
                thc ?
                <span className='mb-3'>THC- {thc}</span>
                :
                null
            }
            {
                price ? 
                <div>
                    Price: {price}
                </div>
                :
                null
            }
        </p>
        <div className='d-flex gap-3 justify-content-between shop-action'>
            <button className='wishlist btn btn-rounded btn-outline-dark' 
                onClick={()=>{
                    if(!isWishList){
                        addProduct('productWishlist', {id,name,thc})
                    } else{
                        removeProduct('productWishlist', id)
                    }
                    setIsWishList(!isWishList);
                }}
            >
                {
                    isWishList ?
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill='#000'/></svg>
                    :
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>

                }
            </button>
            <button className='cart btn btn-outline-dark'  onClick={()=>{
                    if(!isAddedIntoCart){
                        addProduct('productCart', {id,name,thc,});
                        setIsAddedIntoCart(!isAddedIntoCart);
                    } 
                }}>
                {
                    isAddedIntoCart ?
                    <Link to="/cart" className='text-dark text-decoration-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
                        <span>View</span>

                    </Link>
                    :
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                        <span>Add to Cart</span>
                    </>
                }
            </button>
        </div>
    </div>
  )
}

export default ProductCard