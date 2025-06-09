import React from 'react';
import BlogsGrid from '../components/BlogsGrid';
import BlogsGridStyle from '../styles/BlogsGrid.css';
import StartFreeSectionStyle from '../styles/StartFree.css';


export const links = () =>[
  {rel:'stylesheet', href:BlogsGridStyle},
  {rel:'stylesheet', href:StartFreeSectionStyle}
] 

export async function loader({ request }) {
  const url = new URL(request.url);
    if (url.hostname === "customerdashboard.pro") {
    return new Response(null, {
      status: 301,
      headers: {
        Location: "https://custlo.com/blog",
      },
    });
  }
  return new Response("This is the partners page on custlo.com");
}

export const meta = () => {
  return [
    { title: "Stay Updated with the Latest Blogs | Customer Dashboard Pro" },
    { name: "description", content: "Stay up to date with the latest blogs on Customer Dashboard Pro. Explore a wide range of informative and insightful blog posts to gain valuable knowledge and stay informed." },
    { name: "keywords", content: "Blogs, Customer Dashboard Pro Blogs, Shopify Account App Blogs" },
    {property:"og:title", content:"Stay Updated with the Latest Blogs | Customer Dashboard Pro"},
    {property:"og:description", content:"Stay up to date with the latest blogs on Customer Dashboard Pro. Explore a wide range of informative and insightful blog posts to gain valuable knowledge and stay informed."},
    {
      tagName: "link", 
      rel: "canonical",
      href: "https://custlo.com/blog",
    },
  ];
}; 

function Blogs(){
    return(
        <>
        
           <BlogsGrid/>
        
        </>
    );
}

export default Blogs