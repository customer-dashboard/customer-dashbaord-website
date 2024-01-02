import React from 'react'
import TestimonialStyle from '../styles/TestimonialSlider.css';
import PageStyle from '~/styles/Pages.css';
import CarouselStyle from '../styles/Carousel.css';
import CustomerAccountPage from '../components/pages/CustomerAccountPage';

export const links = () =>[
  {rel:'stylesheet', href:PageStyle},
  {rel:'stylesheet', href:TestimonialStyle},
  {rel:'stylesheet', href:CarouselStyle}
]

export const meta = () => {
  return [
    { title: "Shopify Customer Account Page | Customer Dashboard Pro" },
    { name:"description" ,content:"Enhance the shopping experience you offer and capture more shopper data with Amazon-like Customer Account Pages on your Shopify store." },
    {property:"og:title" ,content:"Customized Shopify Customer Account Page | Customer Dashboard Pro"},
    {property:"og:site_name" ,content:"Customer Account Page | Customer Dashboard Pro"},
    {property:"og:url" ,content:"https://customerdashboard.pro/customer-account"},
    {property:"og:description" ,content:"Enhance the shopping experience you offer and capture more shopper data with Amazon and Flipcart-like Customer Account Pages on your Shopify store."}
  ];
};

function customerAccount() {

    return (
        <>
        
            <CustomerAccountPage/>
        
        </>
    );
}

export default customerAccount