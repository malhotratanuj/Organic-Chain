import React from 'react'
import './index.css';
import Card from './Card';

const data = [
    {
        heading:'Direct from Farms to Your Doorstep for Ultimate Freshness',
        text:'VegApp ensures the freshest produce by using blockchain-based supply chain tracking. We connect you directly with local farmers, ensuring transparency and quality every step of the way.',
        btnText:'Learn More',
        img:'',
        btnLink:''
    },
    {
        heading:'Discover the Provenance of Your Produce and Support Local Farmers',
        text:'With VegApp, you can trace the journey of your produce from farm to table. By supporting local farmers, you contribute to a sustainable and transparent food ecosystem.',
        btnText:'Sign up',
        img:'',
        btnLink:''
    },
    {
        heading:'Unlock the Power of Blockchain for a Trust-Based Food System',
        text:'VegApp leverages blockchain technology to create a trust-based food system. Join us in revolutionizing the way we produce, distribute, and consume food.',
        btnText:'Get Started',
        img:'',
        btnLink:''
    },
]
function SectionCard() {
  return (
    <section className='py-lg-3 py-lg-5'>
        <div className='section-heading text-center font-weight-bold mb-3'>
            Experience the Freshest Organic Produce with<br/> Blockchain-Based Supply Chain Tracking
        </div>
        <div className='container'>
            <div className='row gy-4  justify-content-between'>
                {
                    data.map((val)=>{
                        return <Card {...val} className='col-12 col-lg-4' key={val.heading} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default SectionCard