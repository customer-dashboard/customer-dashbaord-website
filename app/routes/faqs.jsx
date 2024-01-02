import React from 'react'
import AllFaqs from '../components/pages/AllFaqs';
import AllFaqsStyle from '../styles/Faq.css';
import faqData from '../middleware/FaqsData';
export const links = () =>[
    {rel:'stylesheet', href:AllFaqsStyle}
]

export const meta = () => {
  return [
    { title: "Faqs - Customer-Dashboard-Pro" },
    { name: "description", content: "Customer Dashboard Pro FAQ - Get answers to common queries about our advanced customer dashboard." },
    {property:"og:title", content:"Faqs - Customer-Dashboard-Pro"},
    {property:"og:description", content:"Explore answers to common queries about our advanced Customer Dashboard Pro."}
  ];
};

function faqs() {
  return (
  <>
    
    <AllFaqs data={faqData}/>

  </>
  )
}

export default faqs