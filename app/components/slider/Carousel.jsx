// import Slider from 'react-slick';
import { Col, Container, Row } from "react-bootstrap";
import * as Slider from "react-slick";
const Slider2 = Slider.default.default;
import Images from "../../middleware/CarouselData.jsx";

// import {FaAngleLeft,FaAngleRight} from 'react-icons/fa6';



const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,

  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {

        autoplaySpeed: 3000,
        slidesToShow: 2
      }
    }
  ]
};

function Carousel() {
  return (
    <>  
      <section className="carousel_logo">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="carousel_heading"><h2>TRUSTED BY <strong className="new_color">1500+ SHOPIFY MERCHANTS</strong></h2></div>
              <Slider2 {...settings} className="my-track">
                {Images.map((item) => (
                  <div  key={item.id}>
                    <div key={item.id}>
                      <img src={item.src} alt={item.alt} className="img" />
                      {item.caseStuday ?  <a href={item.caseStuday} className="brand-case-study" target="_blank" rel="noopener noreferrer">Case study</a> : null}
                    </div>
                  </div>
                ))}
              </Slider2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Carousel;