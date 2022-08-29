import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://99roberto.github.io/fly_well/slide1.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://99roberto.github.io/fly_well/slide2.jpg"
          alt="Second slide"
          
        />

      </Carousel.Item>
    
    </Carousel>
  );
}

export default Slide;