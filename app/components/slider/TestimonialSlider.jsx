import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import * as Slider from "react-slick";
import { slidesData, starIcon } from "../../middleware/testimonialData";
import { settings } from "../../middleware/testimonialData";
const Slider2 = Slider.default.default;
import parse from "html-react-parser";

function TestimonialSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleRemoveClonesForSEO = () => {
      const sliderElement = sliderRef.current.querySelectorAll(".slick-cloned");
      sliderElement.forEach((slide) => {
        slide.setAttribute("aria-hidden", "true");
        slide.style.visibility = "hidden"; 
      });
    };
    sliderRef.current.addEventListener("init", handleRemoveClonesForSEO);
    return () => {
      sliderRef.current?.removeEventListener("init", handleRemoveClonesForSEO);
    };
  }, []);

  return (
    <section className="testimonials_section">
      <div className="testimonial">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="testimonials_heading">
                <h2>
                  Shopify customer dashboard pro are{" "}
                  <span className="app-color">loved by Merchants</span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div ref={sliderRef}>
                <Slider2 {...settings}>
                  {slidesData.map((slide) => (
                    <div className="d-flex tracks pb-3" key={slide.id}>
                      <div className="slick-slide testimonial_slide">
                        <p className="fw-600 dotable-para-element">
                          {parse(slide.para)}
                        </p>
                        <div className="d-flex mt-3 mb-3 justify-content-center">
                          {starIcon}
                          {starIcon}
                          {starIcon}
                          {starIcon}
                          {starIcon}
                        </div>
                        <div>
                          <span className="customer_name">{slide.name}</span>
                        </div>
                        <span className="date_time">{slide.time}</span>
                      </div>
                    </div>
                  ))}
                </Slider2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default TestimonialSlider;
