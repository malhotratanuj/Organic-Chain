import Carousel from 'react-bootstrap/Carousel';

function CarouselComp() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className='d-none d-lg-block' src='https://placehold.co/800x400' alt='1' />
        <Carousel.Caption>
          <h3>Fresh & Sustainable Produce</h3>
          <p>Directly sourced from local farmers for ultimate freshness.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-none d-lg-block' src='https://placehold.co/800x400' alt='2'/>
        <Carousel.Caption>
          <h3>Fresh & Sustainable Produce</h3>
          <p>Directly sourced from local farmers for ultimate freshness.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-none d-lg-block' src='https://placehold.co/800x400' alt='2'/>
        <Carousel.Caption>
          <h3>Fresh & Sustainable Produce</h3>
          <p>Directly sourced from local farmers for ultimate freshness.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;