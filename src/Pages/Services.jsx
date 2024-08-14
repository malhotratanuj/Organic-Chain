import React from 'react'
import Heading from '../Components/Heading'
import { Button } from 'react-bootstrap';


function Services() {
  return (
     <section className='section-margin container'>
        
        <section className='py-3 py-lg-5 col-12 col-lg-6'>
            <Heading text='Discover Our Services' className='fs-40 font-weight-bold mb-3' />
            <Heading text='Explore the wide range of services offered by VegApp for a farm fresh experience.' className='fs-18' />
        </section>
         <section className='py-3 py-lg-5'>
            <div className='row'>
                <div className='col-12 col-lg-6 mb-3 mb-lg-0'>
                    <Heading text='Blockchain-based Supply Chain Tracking: Ensuring Transparency and Freshness' className='fs-40 font-weight-bold mb-2' />
                    <Heading text='Our innovative Blockchain-based supply chain tracking system guarantees end-to-end transparency and ensures the freshest produce for our customers.' className='fs-18 mb-3' />
                    <div className='row'>
                        <div className='col-6'>
                            <Heading text='50% off' className='fs-48 font-weight-bold mb-2 text-dark' />
                            <Heading text='Directly trace the journey of your organic produce.' className='' />

                        </div>
                        <div className='col-6'>
                            <Heading text='50% off' className='fs-48 font-weight-bold mb-2 text-dark' />
                            <Heading text='Experience farm-to-table freshness like never before.' className='' />

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
                <div className='col-12 col-lg-6  mb-3'>
                    <Heading text='Efficient and Secure Smart Contract Transactions' className='fs-48 font-weight-bold mb-2' />
                    <Heading text='Our smart contracts ensure secure and efficient transactions, providing peace of mind for both buyers and sellers.' className='fs-18 mb-3' />
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <Heading text='Secure Transactions' className='fs-20 font-weight-bold mb-2 text-dark' />
                            <Heading text='Experience hassle-free and secure transactions with our blockchain-based smart contracts.' className='' />

                        </div>
                        <div className='col-6'>
                            <Heading text='Efficient Transactions' className='fs-20 font-weight-bold mb-2 text-dark' />
                            <Heading text='Save time and resources with our efficient blockchain-powered transaction system.' className='' />
                        </div>
                    </div>
                    <Button className='' variant="outline-dark">Learn More</Button>
                    <Button className='text-dark border-none' variant='outline-none'>Sign up</Button>
                    
                </div>
                <div className='col-12 col-lg-6 mt-3'>
                    <img className='img-fluid mb-3' src='https://placehold.co/600x450' alt='relume pic' />
                </div>
            </div>
        </section>
  
        <section className='py-3 py-lg-5'>
            <div className='row'>
                 <div className='col-12 col-lg-6'>
                    <Heading text='Experience the Fastest Delivery Times and Highest Customer Satisfaction Rates' className='fs-40 font-weight-bold mb-2' />
                </div>
                <div className='col-12 col-lg-6 mb-3 mb-lg-0'>
                    <Heading text='At VegApp, we pride ourselves on delivering your organic produce quickly and ensuring your satisfaction. Our average delivery time is unmatched in the industry, and our customers consistently rate us as the best in terms of service.' className='fs-18 mb-3' />
                    <div className='row'>
                        <div className='col-6'>
                            <Heading text='50%' className='fs-48 font-weight-bold mb-2 text-dark' />
                            <Heading text='Faster Delivery Times than Competitors' className='' />

                        </div>
                        <div className='col-6'>
                            <Heading text='50%' className='fs-48 font-weight-bold mb-2 text-dark' />
                            <Heading text='Higher Customer Satisfaction Rates than Competitors' className='' />

                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    </section>
  )
}

export default Services;