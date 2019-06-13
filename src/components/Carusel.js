import React from 'react';
import '../App.css';
import { Button, Carousel } from 'react-bootstrap';
import slider from '../img/slider.png'
import image from '../img/image.png'
// import image1 from './image1.png'
// import image1 from './img/image1.png'
class Carusel extends React.Component {
  render(){
    return (
      <div className="Carusel">
          <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="Third slide"

    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
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
  }
  
}

export default Carusel;