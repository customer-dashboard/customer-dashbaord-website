import React from 'react'
import ReOrderPage from '../components/pages/ReorderPage';
import TestimonialStyle from '../styles/TestimonialSlider.css';
import reoderPageStyle from '~/styles/Pages.css';
import CarouselStyle from '../styles/Carousel.css';

export const links = () =>[
  {rel:'stylesheet', href:reoderPageStyle},
  {rel:'stylesheet', href:TestimonialStyle},
  {rel:'stylesheet', href:CarouselStyle}
]

export const meta = () => {
  return [
    { title: "Re-order Page Shopify App | Customer Dashboard Pro" },
    { name: "description", content: "Optimize your shopping experience with the Customer Dashboard Pro on Shopify, offering an Amazon-inspired design. Seamlessly re-order your favorite products and effortlessly capture valuable shopper data. Elevate satisfaction as customers navigate this intuitive dashboard to browse and re-order with ease. Transform your Shopify store today for a personalized and efficient shopping journey, making re-ordering a breeze." },
    {property:"og:title", content:"Customized Shopify Re-order Page | Customer Dashboard Pro"},
    {property:"og:site_name", content:"Re-order Page | Customer Dashboard Pro"},
    {property:"og:url", content:"https://customerdashboard.pro/re-order"},
    {property:"og:description", content:"Optimize your shopping experience with the Customer Dashboard Pro on Shopify, offering an Amazon-inspired design. Seamlessly re-order your favorite products and effortlessly capture valuable shopper data."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/re-order",
    },
  ];
};

function reorderPage() {
  return (
    <>
    
        <ReOrderPage/>
    
    </>
  )
}

export default reorderPage