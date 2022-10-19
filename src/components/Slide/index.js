import Carousel from 'react-bootstrap/Carousel';
import { AppName, SubTitulo } from '../../constantes';
import './index.css';
import { Link } from 'react-router-dom';

function Slide() {
  return (
    // <Carousel>
    //   <Carousel.Item className="slide">
    //     <img style={{ height: 600, maxHeight: 600, width: "100%" }} src="https://99roberto.github.io/fly_well/flight-4516478.jpg" alt="First slide" />
    //   </Carousel.Item>

    // </Carousel>
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>{AppName}</h1>
              <h2>{SubTitulo}</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                
                <Link to={`/question`} activeClassName="active" >
                  <button className="btn-get-started scrollto">
                    <img src="https://99roberto.github.io/fly_well/av_icon.png" width="20" /> Questionário
                  </button>
                </Link>
                <Link to={`/#saibamais`} activeClassName="active">
                  <button className="btn-get-started scrollto">
                    <img src="https://99roberto.github.io/fly_well/Info.png" width="20" /> Saiba mais
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="/logo512.png" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </>
  );
}
export default Slide;
