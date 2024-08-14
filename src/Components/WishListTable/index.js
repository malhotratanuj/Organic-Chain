import React, { useEffect, useState } from 'react'
import localStorageHandler from '../../utils/localStorage';
import './index.css';
import { addProduct, removeProduct } from '../ProductCard/helper';

function WishlistTable() {
    const [wishlist, setWishList] = useState([]);
    useEffect(()=>{
        const ls = new localStorageHandler();
        setWishList(ls.get('productWishlist') || []);
    },[])
  return (
    <div className='container'>
        {
            wishlist.length > 0 ?
            <div className='table-responsive'>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">Products Name</th>
                        <th scope="col">Product Details</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlist.map((value, index)=>{
                                return(
                                    <tr className='border-bottom py-3' key={value.id}>
                                        <td>
                                            <div className='d-flex gap-3'>
                                                <img src="https://placehold.co/80" width={80} height={80} alt={`product ${value.id}`} />
                                                <span className='fs-3'>{value.name}</span>
                                            </div>    
                                        </td>
                                        <td>
                                            {
                                                value?.quantityTHC
                                                ?
                                                    <span>THC: {value.quantityTHC}</span>
                                                :
                                                    null
                                            }
                                            <br/>
                                             {
                                                value?.quantityCBD
                                                ?
                                                    <span>CBD: {value.quantityCBD}</span>
                                                :
                                                    null
                                            }
                                        </td>
                                        <td className="wishlist-action">
                                            <button className='delete btn btn-outline-danger' onClick={()=>{
                                                let copyWishlist = [...wishlist];
                                                setWishList(copyWishlist.filter((product)=> product.id !== value.id))
                                                removeProduct('productWishlist', value.id);
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
                                            </button>
                                            <button className='cart btn btn-outline-success mx-3' onClick={()=>{
                                                let copyWishlist = [...wishlist];
                                                setWishList(copyWishlist.filter((product)=> product.id !== value.id))
                                                addProduct('productCart', value);
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                        
                    </tbody>
                    </table>
            </div>
            :
            <div className='container text-center py-5'>
                <h2 className='fs-1'>No Items Added Into wishlist</h2>
            </div>
        }
    </div>
  )
}

export default WishlistTable