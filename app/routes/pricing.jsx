import React from 'react'
import PricingpageStyle from '../styles/PricingPage.css';
import Pricing from '../components/pages/Pricing';
import PlanPage from '../components/pages/PlanPage';


export const links = () =>[
  {rel:'stylesheet', href:PricingpageStyle}
]

export const meta = () => {
  return [
    { title: "Pricing - Customer-Dashboard-Pro" },
    { name: "description", content: "Find the Perfect Pricing Plan for Your Shopify App With Customer Dashboard Pro. Get All the Tools You Need to Manage and Grow Your Business at an Affordable Price." },
    { name: "keywords", content: "App Prices, Customer Dashboard Pro Pricing Plan, Customer Dashboard Pro Pricing, Shopify Account App Pricing" },
    {property:"og:title", content:"Pricing - Customer-Dashboard-Pro"},
    {property:"og:description", content:"Find the Perfect Pricing Plan for Your Shopify App With Customer Dashboard Pro. Get All the Tools You Need to Manage and Grow Your Business at an Affordable Price."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/pricing",
    },
  ];
};


function pricing() {
  return (
  <>
  
    {/* <Pricing/> */}
    <PlanPage/>
  
  </>
  )
}

export default pricing