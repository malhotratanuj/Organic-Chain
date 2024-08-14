import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import axios from 'axios'
import Cookies from 'js-cookie'
import Loader from '../Components/Loader'
import SectionCard from '../Components/SectionCard'
import Heading from '../Components/Heading'
import { Button } from 'react-bootstrap'
// import SubscribeForm from '../Components/SubscribeForm'

const APIURL = process.env.REACT_APP_API_URL;

function Home() {
    const [productList, setProductList] = useState([]);
    const [loader, setLoader] = useState(false);
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
            <>
                <Loader />
            </>
            :
            <div className='section-margin container'>
                <Banner />
                <SectionCard />
                <section className='py-3 py-lg-5 col-12 col-lg-6'>
                    <Heading text='Experience farm fresh produce like never before' className='fs-48 font-weight-bold mb-3' />
                    <Heading text='VegApp offers a unique farm fresh experience to its customers through its organic produce delivery app. With Blockchain-based supply chain tracking, we ensure end-to-end transparency, smart contracts for transactions, dynamic pricing, sustainability tracking, temperature monitoring, and product provenance verification.' className='fs-18' />
                </section>
                <section className='py-3 py-lg-5'>
                    <div className='row gy-2'>
                        <div className='col-12 col-lg-4'>
                            <img className='img-fluid mb-3' src='./img/Relume.png' alt='relume pic' />
                            <Heading text='Blockchain-based Supply Chain Tracking' className='fs-32 font-weight-bold mb-3' />
                            <Heading text='Track the journey of your produce from farm to table.' className='' />
                        </div>
                        <div className='col-12 col-lg-4'>
                            <img className='img-fluid mb-3' src='./img/Relume.png' alt='relume pic' />
                            <Heading text='Smart Contracts for Transactions' className='fs-32 font-weight-bold mb-3' />
                            <Heading text='Secure and transparent transactions powered by blockchain technology.' className='' />
                        </div>
                        <div className='col-12 col-lg-4'>
                            <img className='img-fluid mb-3' src='./img/Relume.png' alt='relume pic' />
                            <Heading text='Dynamic Pricing' className='fs-32 font-weight-bold mb-3' />
                            <Heading text='Get the best value for your organic produce.' className='' />
                        </div>
                    </div>
                    
                </section>
                <section className='py-3 py-lg-5'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 mb-3 mb-lg-0'>
                            <Heading text='Experience the Freshness and Value of Veg Apps Organic Produce Delivery' className='fs-48 font-weight-bold mb-2' />
                            <Heading text='VegApp brings you the freshest organic produce directly from local farmers, ensuring transparency and value for both producers and consumers.' className='fs-18 mb-3' />
                            <div className='row'>
                                <div className='col-6'>
                                    <Heading text='Transparency' className='fs-20 font-weight-bold mb-2 text-dark' />
                                    <Heading text='Track the journey of your food from farm to table with Veg Apps blockchain-based supply chain tracking.' className='' />

                                </div>
                                <div className='col-6'>
                                    <Heading text='Freshness' className='fs-20 font-weight-bold mb-2 text-dark' />
                                    <Heading text='Enjoy farm-fresh produce delivered to your doorstep, ensuring the highest quality and taste.' className='' />

                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <img className='img-fluid mb-3' src='https://placehold.co/600x450' alt='relume pic' />
                        </div>
                    </div>
                </section>
                <section className='py-3 py-lg-5'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 order-lg-2 mb-3'>
                            <Heading text='Delivering Fresh Organic Produce to Your Doorstep' className='fs-48 font-weight-bold mb-2' />
                            <Heading text='Experience the farm-to-table difference with VegApp. We use blockchain-based supply chain tracking to ensure the freshest produce at the best value.' className='fs-18 mb-3' />
                            <div className='row mb-2'>
                                <div className='col-6'>
                                    <Heading text='50%' className='fs-20 font-weight-bold mb-2 text-dark' />
                                    <Heading text='Number of Users: 10,000+' className='' />

                                </div>
                                <div className='col-6'>
                                    <Heading text='50%' className='fs-20 font-weight-bold mb-2 text-dark' />
                                    <Heading text='Deliveries Completed: 50,000+' className='' />

                                </div>
                            </div>
                            <Button variant="outline-dark">Learn More</Button>
                            <Button className='text-dark ms-3 border-none' variant='outline-none'>Sign up </Button>
                        </div>
                        <div className='col-12 col-lg-6 order-lg-1'>
                            <img className='img-fluid mb-3' src='https://placehold.co/600x450' alt='relume pic' />
                        </div>
                    </div>
                </section>
                 <section className='py-3 py-lg-5 col-12 col-lg-6'>
                    <Heading text='Get Fresh Organic Produce Today' className='fs-48 font-weight-bold mb-3' />
                    <Heading text='Experience the farm-to-table difference with VegApps blockchain-based supply chain tracking.' className='fs-18 mb-3' />
                    <Button className='bg-dark text-white border-none' variant='outline-none'>Download</Button>
                    <Button className=' ms-3' variant="outline-dark">Sign up</Button>
                </section>
            </div>
        }
    </>
  )
}

export default Home