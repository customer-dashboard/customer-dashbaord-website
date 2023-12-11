import React from 'react';
import { Image } from 'react-bootstrap';
import { slidesData } from '../middleware/testimonialData';
import { settings } from '../middleware/testimonialData';
import Slider from 'react-slick';
const aa= <Slider {...settings}>
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
function Test() {
  return (
   <>
   
  {
    aa
  }
   
   </>
  )
}

export default Test