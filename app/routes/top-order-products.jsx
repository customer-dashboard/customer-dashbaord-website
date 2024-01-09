import React from 'react'
import TestimonialStyle from '../styles/TestimonialSlider.css';
import topOrderPageStyle from '~/styles/Pages.css';
import CarouselStyle from '../styles/Carousel.css';
import TopOrderProductPage from '../components/pages/TopOrderProductPage';

export const links = () =>[
  {rel:'stylesheet', href:topOrderPageStyle},
  {rel:'stylesheet', href:TestimonialStyle},
  {rel:'stylesheet', href:CarouselStyle}
]

export const meta = () => {
  return [
    { title: "Top Order Product Page Shopify App | Customer Dashboard Pro" },
    { name: "description", content: "Discover the top-selling products on our Shopify app. Explore our selection of high-demand items that customers love. Boost your sales with our top order products." },
    {property:"og:title", content:"Top Order Product Page Shopify App | Customer Dashboard Pro"},
    {property:"og:site_name", content:"Top Order Product Page Shopify App | Customer Dashboard Pro"},
    {property:"og:url", content:"https://customerdashboard.pro/top-order-products"},
    { name: "keywords", content: "top order products, top order, top order product account page" },
    {property:"og:description", content:"Discover the top-selling products on our Shopify app. Explore our selection of high-demand items that customers love. Boost your sales with our top order products."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/top-order-products",
    },
  ];
};

function reorderPage() {
  return (
    <>
    
        <TopOrderProductPage/>
    
    </>
  )
}

export default reorderPage