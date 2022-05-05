import React from 'react';
import { Carousel } from 'react-bootstrap';
import wholesalestore1 from '../../../Image/wholesalestore1.png'
import wholesalestore2 from '../../../Image/wholesalestore2.png'
import wholesalestore3 from '../../../Image/wholesalestore3.png'
const Banner = () => {
    return (
        <div className='mt-5 w-75 container'>
            <Carousel>
  <Carousel.Item>
    <img
    height="750px"
      className="d-block w-100"
      src={wholesalestore1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="750px"
      className="d-block w-100"
      src={wholesalestore2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="750px"
      className="d-block w-100"
      src={ wholesalestore3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;