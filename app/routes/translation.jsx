import React from 'react';
import TranslationPage from '../components/TranslationPage';
import TestimonialStyle from '../styles/TestimonialSlider.css';
import CarouselStyle from '../styles/Carousel.css';

export const links = () =>[
  {rel:'stylesheet',href:TestimonialStyle},
  {rel:'stylesheet',href:CarouselStyle}
]

export const meta = () => {
  return [
    { title: "Shopify Translate Your Preferences  | Customer Dashboard Pro" },
    { name:"description", content:"Explore our translation page within Customer Dashboard Pro to customize your experience. Translate and personalize the content to match your preferences seamlessly." },
    {property:"og:site_name", content:"Translation page | Customer Dashboard Pro"},
    {property:"og:url", content:"https://customerdashboard.pro/translation"},
    {property:"og:description", content:"Explore our translation page within Customer Dashboard Pro to customize your experience. Translate and personalize the content to match your preferences seamlessly."}
  ];
};

function translation() {
  return (
    <>
    
        <TranslationPage/>    
    

    </>
  )
}

export default translation