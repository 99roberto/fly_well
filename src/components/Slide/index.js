import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="https://99roberto.github.io/fly_well/flight-4516478.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="https://99roberto.github.io/fly_well/baggage-hall-775540.jpg" alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="https://99roberto.github.io/fly_well/architecture-3337986.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="https://99roberto.github.io/fly_well/airplane-5216583_1920.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="https://99roberto.github.io/fly_well/airplane-4974678.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="https://99roberto.github.io/fly_well/aircraft-take-off-123028.jpg" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}
export default Slide;
