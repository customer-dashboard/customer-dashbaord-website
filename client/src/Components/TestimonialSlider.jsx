import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Assets/css/TestimonialSlider.css';
import { Col, Container, Image, Row } from "react-bootstrap";
import StarImage from '../Assets/Images/Star_image.png';

function TestimonialSlider() {
    // Date object

// Getting full month name (e.g. "June")


const date = new Date();
var month = date.toLocaleString('default', { month: 'long' });
let currentDay= String(date.getDate()).padStart(2, '0');
let currentMonth = month;
let currentYear = date.getFullYear();
// we will display the date as DD-MM-YYYY 
let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;


    const slidesData = [
        {
            id: 1,
            para:`“It’s a nice app, has the features your customers and you need and is easy
            to navigate. Integrated very quickly and easily with my Shopify site.”`,
            starImage: StarImage,
            name:"Nikhil Mehta",
            time:currentDate
        },
        {
            id: 2,
            para:`“This is by far the best app we've tried for this and its affordable! Does what
            it says and runs smoothly on our site. Really Excellent!”`,
            starImage: StarImage,
            name:"Anshul Jain",
            time: currentDate
        },
        {
            id: 3,
            para:`“A very good app, easy to use, navigate, nice design, very
            customisable; and helpful customer service!”`,
            starImage: StarImage,
            name:"Lokesh Naphade",
            time:currentDate
        },
        {
            id: 4,
            para:`“This is by far the best app we've tried for this and its affordable! Does what
            it says and runs smoothly on our site. Really Excellent!”`,
            starImage: StarImage,
            name:"Prajjwal Wanjari",
            time: currentDate
        },
        {
            id: 5,
            para:`“A very good app, easy to use, navigate, nice design, very
            customisable; and helpful customer service!”`,
            starImage: StarImage,
            name:"Animesh Jain",
            time: currentDate
        },
        {
            id: 6,
            para:`“A very good app, easy to use, navigate, nice design, very
            customisable; and helpful customer service!”`,
            starImage: StarImage,
            name:"Rahul Chouhan",
            time:currentDate
        }
    ];
    const settings = {
        arrows: false,
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 500,
        lazyLoad: 'progressive',
        slidesToShow:3,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              arrows: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
        ]
    };

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
                        <Slider {...settings}>
                            {slidesData.map((slide) =>
                                <div className="d-flex tracks" key={slide.id}>
                                <div className="slick-slide testimonial_slide" >
                                    <p className="dotable-para-element">{slide.para}</p>
                                    <Image src={slide.starImage}></Image>
                                    <span className="customer_name">{slide.name}</span>
                                    <span className="date_time">{slide.time}</span>
                                </div>
                                </div>

                            )}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
      </section>
    );
}

export default TestimonialSlider;