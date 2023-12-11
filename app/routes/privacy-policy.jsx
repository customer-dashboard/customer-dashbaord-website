import React from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy';

export const meta = () => {
  return [
    { title: "privacy Policy - Customer-Dashboard-Pro" },
    { name: "description", content: "Customer Dashboard Pro Shopify App Privacy Policy" },
    {property:"og:title", content:"privacy Policy - Customer-Dashboard-Pro"},
    {property:"og:description", content:"Explore Our Customer Dashboard Pro Privacy Policy."}
  ];
};

function privacyPolicy() {
  return (
    <>
    
        <PrivacyPolicy/>
    
    </>
  )
}

export default privacyPolicy