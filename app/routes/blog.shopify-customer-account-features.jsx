import React from "react";
import BlogFullPageStyle from "../styles/BlogFullPage.css";
import StartFreeSectionStyle from "../styles/StartFree.css";
import CustomerDashBoardAccountFeatureFullBlog from "../components/blogs/CustomerDashBoardAccountFeatureFullBlog";


export const links = () => [
  { rel: "stylesheet", href: BlogFullPageStyle },
  { rel: "stylesheet", href: StartFreeSectionStyle },
];

export const meta = () => {
  return [
    { title: "Enhance Your Shopify Account Page with Customer Dashboard Pro" },
    { name: "description", content: "Learn how Customer Dashboard Pro transforms Shopify account pages into seamless, engaging experiences. Boost customer satisfaction and build lasting relationships effortlessly!" },
    { name: "keywords", content: "Shopify account page features, Customer Dashboard Pro benefits, enhance Shopify experience, Shopify customer experience tools, e-commerce customer retention" },
    {property:"og:title", content:"What Customer Dashboard Pro Can Do for Your Shopify Account Page?"},
    {property:"og:description", content:"Discover how Customer Dashboard Pro can revolutionize your Shopify account page. Offer seamless shopping experiences, foster loyalty, and stay ahead in the competitive e-commerce landscape."},
    {property:"og:url", content:"https://customerdashboard.pro/blog/shopify-customer-account-features"},
    {property:"og:type", content:"article"},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/blog/shopify-customer-account-features",
    },
  ];
};



export default function CustomerDashBoardProFeatures() {
  return <CustomerDashBoardAccountFeatureFullBlog />;
}
