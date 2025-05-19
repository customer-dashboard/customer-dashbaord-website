import React from 'react'
import KlaviyoFullBlog from '../components/blogs/KlaviyoFullBlog';
import BlogFullPageStyle from '../styles/BlogFullPage.css';
import StartFreeSectionStyle from '../styles/StartFree.css';

export const links = () => [{ rel: "stylesheet", href: BlogFullPageStyle },
  {rel:"stylesheet", href:StartFreeSectionStyle}];

  export const meta = () => {
    return [
      { title: "Klaviyo Integration with Customer Dashboard Pro | No-Code Setup" },
      { name: "description", content: "Effortlessly integrate Klaviyo with Customer Dashboard Pro. Automatically collect and sync customer data when they log in, no coding required!" },
      { name: "keywords", content: "Klaviyo integration Shopify, no-code Klaviyo setup, Customer Dashboard Pro features, automate customer data sync, e-commerce email marketing tools" },
      {property:"og:title", content:"Klaviyo Integration with Customer Dashboard Pro"},
      {property:"og:description", content:"Simplify your Shopify store's email marketing with Klaviyo integration in Customer Dashboard Pro. Automatically sync customer data during login without writing a single line of code."},
      {property:"og:url", content:"/blog/klaviyo-integration"},
      {property:"og:type", content:"article"},
      {
        tagName: "link",
        rel: "canonical",
        href: "https://custlo.com/blog/klaviyo-integration",
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