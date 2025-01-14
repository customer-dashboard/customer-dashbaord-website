import React from 'react'
import BlogFullPageStyle from '../styles/BlogFullPage.css';
import StartFreeSectionStyle from '../styles/StartFree.css';
import CustomerDashboardFullBlog from '../components/blogs/CustomerDashboardFullBlog';

export const links = () =>[{rel:"stylesheet",href:BlogFullPageStyle},
    {rel:"stylesheet", href:StartFreeSectionStyle}]

    export const meta = () => {
      return [
        { title: "The Importance of Customer Account Page | Enhance Shopping Experience" },
        { name: "description", content: "Discover how a tailored customer account page boosts satisfaction and engagement with personalized recommendations and efficient wishlist management." },
        { name: "keywords", content: "Customer account page benefits, personalized shopping experience, wishlist management tools, customer satisfaction Shopify, enhance e-commerce engagement" },
        {property:"og:title", content:"The Importance of Customer Account Page: Enhancing the Shopping Experience."},
        {property:"og:description", content:"Transform shopping experiences with a powerful customer account page! Provide personalized recommendations, streamline wishlist management, and boost customer satisfaction and engagement."},
        {property:"og:url", content:"https://customerdashboard.pro/blog/customer-dashboard-pro"},
        {property:"og:type", content:"article"},
        {
          tagName: "link",
          rel: "canonical",
          href: "https://customerdashboard.pro/blog/customer-dashboard-pro",
        },
      ];
    };

function index() {
  return (
   <>
    
       <CustomerDashboardFullBlog/>
   
   </>
  )
}

export default index