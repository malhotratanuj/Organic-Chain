import React, { useState } from 'react'
import Banner from '../Components/Banner'
import ProductCard from '../Components/ProductCard'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import Loader from '../Components/Loader';
const APIURL = process.env.REACT_APP_API_URL;


const products = [
    {
        id:1,
        name:'Fresh Tomatoes',
    },
    {
        id:2,
        name:'Onion',
    },
    {
        id:3,
        name:'Potato',
    },
    {
        id:4,
        name:'Organic Tomatoes',
    },
    {
        id:5,
        name:'Organic Potato',
    },
   
]

function Product() {
    const [productList, setProductList] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        axios.get(`${APIURL}products`, {
            headers:{
                Authorization: `Bearer ${(Cookies.get('accessToken')) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlZDJmZjJhLWI3OTktNGFlNy05NTE1LWM3NDEyOGUxNTM1MSIsImZpcnN0TmFtZSI6IkpvaG4iLCJsYXN0TmFtZSI6IkRvZSIsImVtYWlsIjoiamF0aW4uMTNkZXN3YWxAZ21haWwuY29tIiwiaWF0IjoxNzExOTA4NDQxLCJleHAiOjE3MTE5MTIwNDF9.ijY4rQREHCilUJSuxJZLu5bfQv9wiQGhtSLZO7iFvLo"}`
            }
          })
          .then(function (response) {
                if(response.status === 200 && response?.data?.length > 0){
                    setProductList(response?.data);
                }
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
            setTimeout(setLoader(false), 2000)
          });
    },[])
  return (
   <>
    {
        loader ?
        <Loader />
        :
        <>
            <section className='bg-light section-margin  text-center text-dark py-5'>
                <div className='container'>
                <h3 className='heading'>Our Feature Products</h3>
                    <div className='row mt-4'>
                    {
                        products.map((val)=>{
                            return(
                                <div className='col col-lg-4 mb-3'>
                                    <ProductCard 
                                        {...val}
                                        key={val.id}
                                    />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    }
   </>
  )
}

export default Product