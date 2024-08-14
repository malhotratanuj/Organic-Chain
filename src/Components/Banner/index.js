import React from 'react'
import './index.css';
import CarouselComp from './Carousel';
import Button from 'react-bootstrap/Button';
function Banner() {
  return (
    <div className='container py-5'>
        <div className='row justify-content-between'>
            <div className='col-12 col-lg-5'>
                <div className='custom-heading'>
                    Experience the Freshest Organic Produce with VegApp
                </div>
                <p>Discover a unique farm fresh experience with VegApp. Download the app today and enjoy the best value in organic produce, backed by blockchain-based supply chain tracking.</p>
                <div className='d-flex gap-4 mb-4'>
                    <Button variant="outline-dark">Download</Button>
                    <Button className='bg-dark text-white ms-3 border-none' variant='outline-dark'>Learn More</Button>
                </div>
            </div>
            <div className='col-12 col-lg-7 mt-3'>
                <CarouselComp />
            </div>
        </div>
    </div>
  )
}

export default Banner