import React from 'react'
import BlogFullPageStyle from '../styles/BlogFullPage.css';
import StartFreeSectionStyle from '../styles/StartFree.css';
import CustomerDashboardFullBlog from '../components/blogs/CustomerDashboardFullBlog';

export const links = () =>[{rel:"stylesheet",href:BlogFullPageStyle},
    {rel:"stylesheet", href:StartFreeSectionStyle}]

    export const meta = () => {
      return [
        { title: "Importance Of Customer Account Page | Customer Dashboard Pro" },
        { name: "description", content: "Improve your marketing strategies with Klaviyo Integration for Customer Dashboard Pro. Drive sales and engage customers with personalized, targeted emails through our user-friendly platform." },
        { name: "keywords", content: "customer dashboard blog" },
        {property:"og:title", content:"Improve your marketing strategies with  Customer Dashboard Pro. Drive sales and engage customers with personalized, targeted emails through our user-friendly platform."},
        {property:"og:description", content:"Improve your marketing strategies with  Customer Dashboard Pro. Drive sales and engage customers with personalized, targeted emails through our user-friendly platform."},
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