import React from 'react'
import PricingpageStyle from '../styles/PricingPage.css';
import Pricing from '../components/pages/Pricing';


export const links = () =>[
  {rel:'stylesheet', href:PricingpageStyle}
]

export const meta = () => {
  return [
    { title: "Pricing - Customer-Dashboard-Pro" },
    { name: "description", content: "Customer Dashboard Pro Shopify App Pricing Plan" },
    {property:"og:title", content:"Pricing - Customer-Dashboard-Pro"},
    {property:"og:description", content:"Explore Our Customer Dashboard Pro Pricing Plan."}
  ];
};


function pricing() {
  return (
  <>
  
    <Pricing/>
  
  </>
  )
}

export default pricing