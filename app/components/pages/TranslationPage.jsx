import React from "react";
import PagesTopSection from "../PageTopSection";
import { translationPagedata } from "../../middleware/PageTopSectionData";
import ImageWithText from "../ImageWithText";
import { dataOfTranslationPageImageWithText } from "../../middleware/ImageWithTextData";
import FeaturedContent from "../FeaturedContent";
import { useEffect } from "react";
import TestimonialSlider from '../slider/TestimonialSlider';
import Carousel from '../slider/Carousel';
import TransitionEffect from "../FadeTransition/TransitionEffect";
import KnowlageBase from "../KnowlageBase";

function TranslationPage() {
  useEffect(() => {
   TransitionEffect();
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
      <div className="pageTopSectionOnHomePage" data-aos="fade-up">
            <KnowlageBase/>
            </div>
    </>
  );
}

export default TranslationPage;
