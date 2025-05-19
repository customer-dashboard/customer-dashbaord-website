import React from "react";
import CustomerSolutionFullBlog from "../components/blogs/CustomerSolutionFullBlog";
import BlogFullPageStyle from "../styles/BlogFullPage.css";
import StartFreeSectionStyle from "../styles/StartFree.css";
export const links = () => [
  { rel: "stylesheet", href: BlogFullPageStyle },
  { rel: "stylesheet", href: StartFreeSectionStyle },
];

export const meta = () => {
  return [
    { title: "Supercharge Your Shopify Store | Customer Dashboard Pro" },
    { name: "description", content: "Discover how Customer Dashboard Pro enhances Shopify stores by offering a seamless customer account experience. Boost conversions and build lasting relationships effortlessly!" },
    { name: "keywords", content: "Shopify customer dashboard, Shopify customer account solution, enhance Shopify store, e-commerce customer experience, Shopify tools" },
    {property:"og:title", content:"Supercharge Your Shopify Store with Customer Dashboard Pro"},
    {property:"og:description", content:"Transform your Shopify store with Customer Dashboard Pro! Elevate buyer experiences, boost conversions, and nurture long-term customer loyalty in the competitive e-commerce landscape."},
    {property:"og:url", content:"/blog/shopify-customer-account-solution"},
    {property:"og:type", content:"article"},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://custlo.com/blog/shopify-customer-account-solution",
    },
  ];
};
function shopifyCcustomerAccountSolution() {
  return (
    <>
      <CustomerSolutionFullBlog />
    </>
  );
}

export default shopifyCcustomerAccountSolution;
