import Carousel from 'react-bootstrap/Carousel';
import { AppName, SubTitulo } from '../../constantes';
import './index.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
function SlideQuestionario({titulo}) { 
  return (
    // <Carousel>
    //   <Carousel.Item className="slide">
    //     <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="https://99roberto.github.io/fly_well/flight-4516478.jpg" alt="First slide" />
    //   </Carousel.Item>

    // </Carousel>
    <>
      {/* <!-- ======= slide-quest Section ======= --> */}
      <section id="slide-quest" className="d-flex align-items-center" style={{backgroundImage:'/slideaviao.jpg'}} >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>{titulo}</h1> 
              <div className="d-flex justify-content-center justify-content-lg-start">
               
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 slide-quest-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="/airplane.png" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End slide-quest --> */}
      <div></div>
    </>
  );
}
export default SlideQuestionario;
