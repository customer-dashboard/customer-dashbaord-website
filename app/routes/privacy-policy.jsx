import React from 'react';
import PrivacyPolicy from '../components/pages/PrivacyPolicy';

export const meta = () => {
  return [
    { title: "privacy Policy - Customer-Dashboard-Pro" },
    { name: "description", content: "Read Our Privacy Policy for Customer Dashboard Pro to Understand How We Protect Your Personal Information and Ensure Your Privacy. Your Privacy Is Our Top Priority." },
    { name: "keywords", content: "privacy policy, Customer Dahsboard Pro Pricvay Policy, SHopify Acustomer Account Privacy Policy" },
    {property:"og:title", content:"privacy Policy - Customer-Dashboard-Pro"},
    {property:"og:description", content:"Read Our Privacy Policy for Customer Dashboard Pro to Understand How We Protect Your Personal Information and Ensure Your Privacy. Your Privacy Is Our Top Priority."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://custlo.com/privacy-policy",
    },
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