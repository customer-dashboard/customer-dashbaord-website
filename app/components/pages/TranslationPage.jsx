import React from "react";
import PagesTopSection from "../PageTopSection";
import { translationPagedata } from "../../middleware/PageTopSectionData";
import ImageWithText from "../ImageWithText";
import { dataOfTranslationPageImageWithText } from "../../middleware/ImageWithTextData";
import FeaturedContent from "../FeaturedContent";
import Carousel from "../Carousel";
import { useEffect } from "react";
import Aos from "aos";
import TestimonialSlider from "../TestimonialSlider";

function TranslationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
    Aos.refreshHard();
  }, []);

  return (
    <>
    <div data-aos="fade-up">
      <PagesTopSection data={translationPagedata} />
      </div>
      {/* Carousel Component Calling Here */}
      <div className="carousel-section-on-re-order--page" data-aos="fade-up">
        <Carousel />
      </div>
      <ImageWithText imageWithTextData={dataOfTranslationPageImageWithText} />
      <div className="pageTopSectionOnHomePage" data-aos="fade-up">
        <FeaturedContent />
      </div>
      <div className="testimonialOnReOrderPage" data-aos="fade-up">
        <TestimonialSlider />
      </div>
    </>
  );
}

export default TranslationPage;
