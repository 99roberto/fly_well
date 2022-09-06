import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="/flight-4516478.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="/baggage-hall-775540.jpg" alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="/architecture-3337986.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="/airplane-5216583_1920.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="/airplane-4974678.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="/aircraft-take-off-123028.jpg" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}
export default Slide;
