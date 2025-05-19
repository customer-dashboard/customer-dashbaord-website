import React from 'react';
import PrivacyPolicy from '../components/pages/PrivacyPolicy';
import NewPrivacyPolicy from '../components/pages/NewPrivacyPolicy';

export const meta = () => {
  return [
    { title: "privacy Policy - New-Customer-Dashboard" },
    { name: "description", content: "Read Our Privacy Policy for New-Customer-Dashboard to Understand How We Protect Your Personal Information and Ensure Your Privacy. Your Privacy Is Our Top Priority." },
    { name: "keywords", content: "privacy policy, New Customer Dahsboard  Pricvay Policy, SHopify Acustomer Account Privacy Policy" },
    {property:"og:title", content:"privacy Policy - New-Customer-Dashboard"},
    {property:"og:description", content:"Read Our Privacy Policy for New Customer Dashboard to Understand How We Protect Your Personal Information and Ensure Your Privacy. Your Privacy Is Our Top Priority."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://custlo.com/new-privacy-policy",
    },
  ];
};

function NewPrivacyPolicyPage() {
  return (
    <>
    
        <NewPrivacyPolicy/>
    
    </>
  )
}

export default NewPrivacyPolicyPage