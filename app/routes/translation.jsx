import React, { useEffect } from 'react';
import TranslationPage from '../components/pages/TranslationPage';
import TestimonialStyle from '../styles/TestimonialSlider.css';
import CarouselStyle from '../styles/Carousel.css';
import { useOutletContext } from '@remix-run/react';

export const links = () =>[
  {rel:'stylesheet',href:TestimonialStyle},
  {rel:'stylesheet',href:CarouselStyle}
]

export const meta = () => {
  return [
    { title: "Shopify Translate Your Preferences  | Customer Dashboard Pro" },
    { name:"description", content:"Explore our translation page within Customer Dashboard Pro to customize your experience. Translate and personalize the content to match your preferences seamlessly." },
    {property:"og:site_name", content:"Translation page | Customer Dashboard Pro"},
    {property:"og:url", content:"/translation"},
    {property:"og:description", content:"Explore our translation page within Customer Dashboard Pro to customize your experience. Translate and personalize the content to match your preferences seamlessly."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://custlo.com/translation",
    },
  ];
};

function translation() {
  const { showComponents, setShowComponents } = useOutletContext();

  useEffect(()=>{
    const accountType = localStorage.getItem("AccountType");
    if(accountType){
      setShowComponents(accountType);
    }
  },[])
  return (
    <>
    
        <TranslationPage showComponents={showComponents} />    
    

    </>
  )
}

export default translation