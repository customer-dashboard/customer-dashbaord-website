import React, { useEffect } from 'react'
// import ReOrderPage from '../components/ReorderPage';
import RecentlyViewd from '../components/pages/RecentlyViewd';
import TestimonialStyle from '../styles/TestimonialSlider.css';
import PageStyle from '~/styles/Pages.css';
import CarouselStyle from '../styles/Carousel.css';
import { useOutletContext } from '@remix-run/react';

export const links = () =>[
  {rel:'stylesheet', href:PageStyle},
  {rel:'stylesheet', href:TestimonialStyle},
  {rel:'stylesheet', href:CarouselStyle}
]

export const meta = () => {
  return [
    { title: "Recently Viewed Product Shopify App | Customer Dashboard Pro" },
    { name:"description" , content:"Enhance Your Shopping: Navigate effortlessly through your recently viewed products with the intuitive Customer Dashboard Pro on Shopify. Designed for an Amazon-inspired experience, it's now simpler than ever to re-order your favorites. Capture valuable insights effortlessly. Elevate satisfaction and personalize your journey today. Breeze through re-orders on your Shopify store with our efficient and user-friendly dashboard." },
    {property:"og:title", content:"Recentlly View Page | Customer Dashboard Pro"},
    {property:"og:site_name", content:"Recentlly-Viewd Page | Customer Dashboard Pro"},
    {property:"og:url" ,content:"https://customerdashboard.pro/recently-view"},
    {property:"og:description" ,content:"Enhance Your Shopping: Navigate effortlessly through your recently viewed products with the intuitive Customer Dashboard Pro on Shopify. Designed for an Amazon-inspired experience, it's now simpler than ever to re-order your favorites. Capture valuable insights effortlessly."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/recently-view",
    },
  ];
};

function RecentlyViewPage() {
    const { showComponents, setShowComponents } = useOutletContext();
    useEffect(()=>{
      const accountType = localStorage.getItem("AccountType");
      if(accountType){
        setShowComponents(accountType);
      }
    },[])
    return (
        <>
        
            <RecentlyViewd showComponents={showComponents} />
        
        </>
    );
}

export default RecentlyViewPage