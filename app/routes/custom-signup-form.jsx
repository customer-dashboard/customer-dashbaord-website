import React, { useEffect } from 'react'
import TestimonialStyle from '../styles/TestimonialSlider.css';
import reoderPageStyle from '~/styles/Pages.css';
import CarouselStyle from '../styles/Carousel.css';
import RegistrationFormPage from '../components/pages/RegistrationFormPage';
import { useOutletContext } from '@remix-run/react';

export const links = () =>[
  {rel:'stylesheet', href:reoderPageStyle},
  {rel:'stylesheet', href:TestimonialStyle},
  {rel:'stylesheet', href:CarouselStyle}
]

export const meta = () => {
  return [
    { title: "Registration Form Shopify App | Customer Dashboard Pro" },
    { name: "description", content: "Enhance customer registration on your Shopify store with Customer Dashboard Pro. Add custom fields, streamline the registration process, and capture important customer data effortlessly. Offer a personalized registration experience that goes beyond the default Shopify setup, empowering your store to grow with enriched customer insights." },
    { property: "og:title", content: "Customized Shopify Registration Form | Customer Dashboard Pro" },
    { property: "og:site_name", content: "Registration Form | Customer Dashboard Pro" },
    { property: "og:url", content: "/registration-form" },
    { property: "og:description", content: "Enhance customer registration on your Shopify store with Customer Dashboard Pro. Add custom fields, streamline the registration process, and capture important customer data effortlessly." },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://custlo.com/registration-form",
    }
  ];
};

function RegistrationForm() {
  const { showComponents, setShowComponents } = useOutletContext();

  useEffect(()=>{
    const accountType = localStorage.getItem("AccountType");
    if(accountType){
      setShowComponents(accountType);
    }
  },[])
  return (
    <>
    
        <RegistrationFormPage showComponents={showComponents}  />
    
    </>
  )
}

export default RegistrationForm