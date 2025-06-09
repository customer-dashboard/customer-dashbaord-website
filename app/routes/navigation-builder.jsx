import React, { useEffect } from 'react'
import TestimonialStyle from '../styles/TestimonialSlider.css';
import navigationBuilderStyle from '~/styles/Pages.css';
import CarouselStyle from '../styles/Carousel.css';
import NavigationBuilderPage from '../components/pages/NavigationBuilderPage';
import { useOutletContext } from '@remix-run/react';

export const links = () =>[
  {rel:'stylesheet', href:navigationBuilderStyle},
  {rel:'stylesheet', href:TestimonialStyle},
  {rel:'stylesheet', href:CarouselStyle}
]

export const meta = () => {
  return [
    { title: "Navigation-Builder Page Shopify App | Customer Dashboard Pro" },
    { name: "description", content: "Explore our Navigation Builder feature and create customized navigation menus for your Shopify store. Easy-to-use and powerful navigation tools for your convenience." },
    {property:"og:title", content:"Customized Shopify Navigation-Builder Page Shopify App | Customer Dashboard Pro"},
    {property:"og:site_name", content:"Navigation-Builder Page Shopify App| Customer Dashboard Pro"},
    {property:"og:url", content:"/navigation-builder"},
    {property:"keywords", content:"navigation builder, menu builder, custome menu, exstra account page menu"},
    {property:"og:description", content:"Explore our Navigation Builder feature and create customized navigation menus for your Shopify store. Easy-to-use and powerful navigation tools for your convenience."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://custlo.com/navigation-builder",
    },
  ];
};

export async function loader({ request }) {
  const url = new URL(request.url);
    if (url.hostname === "customerdashboard.pro") {
    return new Response(null, {
      status: 301,
      headers: {
        Location: "https://custlo.com/navigation-builder",
      },
    });
  }
  return new Response("This is the partners page on custlo.com");
}

function NavigationBuilder() {
  const { showComponents, setShowComponents } = useOutletContext();
  useEffect(()=>{
    const accountType = localStorage.getItem("AccountType");
    if(accountType){
      setShowComponents(accountType);
    }
  },[])
  return (
    <>
    
        <NavigationBuilderPage showComponents={showComponents} />
    
    </>
  )
}

export default NavigationBuilder