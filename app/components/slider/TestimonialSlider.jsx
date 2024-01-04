import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import * as Slider from "react-slick";
import { slidesData } from "../../middleware/testimonialData";
import { settings } from "../../middleware/testimonialData";
const Slider2 = Slider.default.default;
import LazyLoadedImage from "../lazyLoadImage/LazyLoadImage";


function TestimonialSlider() {

    return (
        <section className="testimonials_section">
            <div className="testimonial">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="testimonials_heading">
                                <h2>Shopify customer dashboard pro are <span>loved by merchants</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Slider2 {...settings}>
                                {slidesData.map((slide) =>
                                    <div className="d-flex tracks" key={slide.id}>
                                        <div className="slick-slide testimonial_slide" >
                                            <p className="dotable-para-element">{slide.para}</p>
                                            <LazyLoadedImage src={slide.starImage} alt={slide.name} />
                                            <span className="customer_name">{slide.name}</span>
                                            <span className="date_time">{slide.time}</span>
                                        </div>
                                    </div>

                                )}
                            </Slider2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TestimonialSlider;