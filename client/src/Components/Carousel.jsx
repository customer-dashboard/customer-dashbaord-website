import React from "react";
import Slider from "react-slick";
import '../Assets/css/Carousel.css';
import Images from "../Middleware/Images.js";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";



const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  nextArrow: <FaAngleRight />,
  prevArrow: <FaAngleLeft />,
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
              <div className="carousel_heading"><h2>TRUSTED BY <strong>1100+</strong> SHOPIFY MERCHANTS</h2></div>
              <Slider {...settings} className="my-track">
                {Images.map((item) => (
                  <div className="images_padding" key={item.id}>
                    <div key={item.id}>
                      <img src={item.src} alt={item.alt} className="img" />
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Carousel;