import React, { useEffect } from 'react'
import TestimonialStyle from '../styles/TestimonialSlider.css';
import CustomerFieldStyle from '~/styles/Pages.css';
import CarouselStyle from '../styles/Carousel.css';
import CustomerFieldsPage from '../components/pages/CustomerFieldsPage';
import { useOutletContext } from '@remix-run/react';

export const links = () =>[
  {rel:'stylesheet', href:CustomerFieldStyle},
  {rel:'stylesheet', href:TestimonialStyle},
  {rel:'stylesheet', href:CarouselStyle}
]

export const meta = () => {
  return [
    { title: "Custom Fields - Enhance Customer Engagement | Customer Dashboard Pro" },
    { name: "description", content: "Unlock the potential of your Shopify store with custom fields. Collect gender, mobile numbers, and more. Elevate user experience and boost engagement with personalized data." },
    {property:"og:title", content:"Customized Shopify Custom Field Page Shopify App | Customer Dashboard Pro"},
    {property:"og:site_name", content:"Custom field Page Shopify App| Customer Dashboard Pro"},
    {property:"og:url", content:"https://customerdashboard.pro/custom-fields"},
    {property:"keywords", content:"custom fields, customer data, Shopify, user engagement, personalized experience"},
    {property:"og:description", content:"Empower your Shopify store with custom fields. Collect customer data seamlessly. Enhance user experience and boost engagement."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/custom-fields",
    },
  ];
};

function CustomFields() {
  const { showComponents, setShowComponents } = useOutletContext();
  useEffect(()=>{
    const accountType = localStorage.getItem("AccountType");
    if(accountType){
      setShowComponents(accountType);
    }
  },[])
  return (
    <>
    
        <CustomerFieldsPage showComponents={showComponents} />
    
    </>
  )
}

export default CustomFields