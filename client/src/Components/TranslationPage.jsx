import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import { Helmet } from 'react-helmet';
import PagesTopSection from './PagesTopSection';
import { translationPagedata } from '../Middleware/PagesTopSectiondata';
import Carousel from './Carousel';
import ImageWithText from './ImageWithText';
import FeaturedContent from './FeaturedContent';
import { dataOfTranslationPageImageWithText } from '../Middleware/ImageWithTextData';
import TestimonialSlider from './TestimonialSlider';

function TranslationPage() {


  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
    Aos.refreshHard();
  }, []);


  return (
    <>


      <Helmet>
        <title>Shopify Translate Your Preferences  | Customer Dashboard Pro</title>
        <meta name="description" content="Explore our translation page within Customer Dashboard Pro to customize your experience. Translate and personalize the content to match your preferences seamlessly." />
        <meta property="og:title" content="Translate Your Preferences | Customer Dashboard Pro"></meta>
        <meta property="og:site_name" content="Customer Account Page | Customer Dashboard Pro"></meta>
        <meta property="og:url" content="https://customerdashboard.pro/pages/customer-account"></meta>
        <meta property="og:description" content="Explore our translation page within Customer Dashboard Pro to customize your experience. Translate and personalize the content to match your preferences seamlessly." />
      </Helmet>

      {/* Page Top Component Calling Here */}
      <div className="pageTopSectionOnTranslationPage" data-aos="fade-up">
      <PagesTopSection data={translationPagedata} />
      </div>
      {/* Carousel Component Calling Here */}
      <div className="carousel-section-on-account-page" data-aos='fade-up'>
        <Carousel />
      </div>

      {/* Image With Text Component Calling Here */}
      <ImageWithText imageWithTextData={dataOfTranslationPageImageWithText} />

      {/* Featured Content component calling here */}
      <div className="pageTopSectionOnHomePage" data-aos="fade-up">
      <FeaturedContent />
      </div>
      {/* Testimonial Component Calling Here */}
      <div className="testimonialOnTranslationPage" data-aos="fade-up">
        <TestimonialSlider />
      </div>
    </>
  )
}

export default TranslationPage