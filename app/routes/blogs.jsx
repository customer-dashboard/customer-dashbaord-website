import React from 'react';
import BlogsGrid from '../components/BlogsGrid';
import BlogsGridStyle from '../styles/BlogsGrid.css';
import StartFreeSectionStyle from '../styles/StartFree.css';


export const links = () =>[
  {rel:'stylesheet', href:BlogsGridStyle},
  {rel:'stylesheet', href:StartFreeSectionStyle}
]

export const meta = () => {
  return [
    { title: "Blogs - Customer Dashboard Pro" },
    { name: "description", content: "Customer Dashboard Pro Shopify App Blogs" },
    {property:"og:title", content:"Blogs - Customer Dashboard Pro"},
    {property:"og:description", content:"Explore Our Customer Dashboard Pro Blogs."}
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