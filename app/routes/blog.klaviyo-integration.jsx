import React from 'react'
import KlaviyoFullBlog from '../components/blogs/KlaviyoFullBlog';
import BlogFullPageStyle from '../styles/BlogFullPage.css';
import StartFreeSectionStyle from '../styles/StartFree.css';

export const links = () => [{ rel: "stylesheet", href: BlogFullPageStyle },
  {rel:"stylesheet", href:StartFreeSectionStyle}];

  export const meta = () => {
    return [
      { title: "Klaviyo Integration | Customer Dashboard Pro" },
      { name: "description", content: "Improve your marketing strategies with Klaviyo Integration for Customer Dashboard Pro. Drive sales and engage customers with personalized, targeted emails through our user-friendly platform." },
      { name: "keywords", content: "Klaviyo Integration, Klaviyo Integration With CUstomer Dashboard Pro, Klaviyo With CUstomer Dashboard Pro" },
      {property:"og:title", content:"Klaviyo Integration | Customer Dashboard Pro"},
      {property:"og:description", content:"Improve your marketing strategies with Klaviyo Integration for Customer Dashboard Pro. Drive sales and engage customers with personalized, targeted emails through our user-friendly platform."},
      {
        tagName: "link",
        rel: "canonical",
        href: "https://customerdashboard.pro/blog/klaviyo-integration",
      },
    
    ];
  };

function index() {
  return (
    <>

        <KlaviyoFullBlog/>
    
    </>
  )
}

export default index