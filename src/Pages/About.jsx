import React from 'react'
import UserCard from '../Components/About/UserCard'
import Heading from '../Components/Heading'
import { Button } from 'react-bootstrap'

const user = [
    {
    name:'Tanuj Malhotra',
    role:'Business + Strategy <br/> Worked with multiple startups <br/> scaling things from scratch',
    imgPath: '/img/tanuj.png'
    },
   
]
function About() {
  return (
     <section className='section-margin container'>
        
        <section className='py-3 py-lg-5 col-12 col-lg-6'>
            <Heading text='Delivering Freshness, Transparency' className='fs-48 font-weight-bold mb-3' />
            <Heading text='VegApp is dedicated to providing the freshest produce using blockchain-based supply chain tracking.' className='fs-18' />
        </section>
        <section className='py-3 py-lg-5'>
            <div className='row'>
                <div className='col-12 col-lg-6  mb-3'>
                    <img className='img-fluid mb-3' src='./img/Relume.png' alt='relume pic' />
                    <Heading text='Our Founding: A Journey of Freshness and Transparency' className='fs-48 font-weight-bold mb-2' />
                    <Heading text='VegApp was founded with a vision to revolutionize the organic produce industry. We believe in providing our customers with the freshest farm-to-table experience, backed by blockchain-based supply chain tracking. Our core values of transparency, sustainability, and direct producer-consumer interactions drive us every day.' className='fs-18 mb-3' />
                    
                    <Button variant="outline-dark">Learn More</Button>
                    <Button className='text-dark ms-3 border-none' variant='outline-none'>Sign up </Button>
                </div>
                <div className='col-12 col-lg-6 '>
                    <img className='img-fluid mb-3' src='https://placehold.co/600x450' alt='relume pic' />
                </div>
            </div>
        </section>
        <section className='py-3 py-lg-5'>
            <div className='row'>
                <div className='col-12 col-lg-6 order-lg-2 mb-3'>
                    <Heading text='Unlocking Transparency and Trust: VegApp Blockchain Technology Revolutionizes the Organic Produce Industry' className='fs-48 font-weight-bold mb-2' />
                    <Heading text='At VegApp, we leverage blockchain technology to provide end-to-end transparency and trust in our organic produce supply chain. Our innovative approach ensures that every step of the process, from farm to table, is tracked and verified, giving our customers peace of mind and a truly farm fresh experience.' className='fs-18 mb-3' />
                </div>
                <div className='col-12 col-lg-6 order-lg-1'>
                    <img className='img-fluid mb-3' src='https://placehold.co/600x450' alt='relume pic' />
                </div>
            </div>
        </section>
        <section className='container my-5'>
            <h3 className='text-center fw-bold'>Meet Us</h3>
            <div className='row justify-content-center'>
                {
                    user.map((value)=>{
                        return(
                            <div className='col col-lg-4'>
                                <UserCard key={value.name} {...value} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
        <section className='py-3 py-lg-5'>
            <div className='row'>
                <div className='col-12 col-lg-6 mb-3 mb-lg-0'>
                    <Heading text='Experience the Freshest Organic Produce Delivered Right to Your Doorstep' className='fs-48 font-weight-bold mb-2' />
                    <Heading text='At VegApp, we are committed to providing our community with the highest quality organic produce. With our blockchain-based supply chain tracking, you can trust that every item you receive is fresh and sustainably sourced.' className='fs-18 mb-3' />
                    <div className='row'>
                        <div className='col-6'>
                            <Heading text='Transparency' className='fs-20 font-weight-bold mb-2 text-dark' />
                            <Heading text='Our blockchain technology allows you to trace the journey of your produce, ensuring transparency and trust.' className='' />

                        </div>
                        <div className='col-6'>
                            <Heading text='Freshness' className='fs-20 font-weight-bold mb-2 text-dark' />
                            <Heading text='We work directly with local farmers to bring you the freshest organic produce available.' className='' />

                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6'>
                    <img className='img-fluid mb-3' src='https://placehold.co/600x450' alt='relume pic' />
                </div>
            </div>
        </section>
    </section>
  )
}

export default About