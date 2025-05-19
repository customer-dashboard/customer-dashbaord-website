import { useOutletContext } from '@remix-run/react';
import React, { useEffect } from 'react'
// import ImageWithTextS from '../components/new-customer-account/ImageWithTextS';
import ImageWithTextS from '../components/new-customer-account/ImageWithTextS';
import { PageCustomFields } from '../middleware/new-customer-account/ImageWithText';
import NewAccountPagesStyle from '../styles/NewAccountPagesStyle.css';
import UniImageWithText from '../components/new-customer-account/components/UniImageWithText';
import { CustomFieldsFrontend, CustomFieldsBackend, CustomFieldsVideos, NewCustomerAccountCustomFieldsAfterBefor } from '../components/new-customer-account/components/UniImageWithTextJson';
import VideoCard from '../components/new-customer-account/components/VideoCard';
import TestimonialSlider from '../components/slider/TestimonialSlider';
import TestimonialSliderStyle from "../styles/TestimonialSlider.css";
import KnowlageBase from '../components/KnowlageBase';
import MainBanner from '../components/case-study/shopify-plus-study-main-content/MainBanner';
import CaseStudyStatusPage from '../styles/CaseStudySinglePage.css';
import BannerStyle from '../styles/Banner.css';
import { Container } from 'react-bootstrap';


export const meta = () => {
    return [
        {
          title: "Custom Fields for Shopify Customer Accounts | Gather Customer Information & Boost Engagement"
        },
        {
          name: "description",
          content: "Effortlessly gather customer information with custom fields on Shopify. Build personalized profiles, improve user engagement, and increase sales."
        },
        {
          property: "og:title",
          content: "Custom Fields for Shopify | Gather Customer Information & Boost Engagement"
        },
        {
          property: "og:site_name",
          content: "Customer Dashboard Pro"
        },
        {property:"og:url", content:"/customer-accounts/custom-fields"},
        {
          property: "keywords",
          content: "Shopify custom fields, customer information, data collection, personalized profiles, user engagement, sales boost"
        },
        {
          property: "og:description",
          content: "Streamline customer data collection with Shopify custom fields. Customize, manage, and display fields to enhance personalization and trust."
        },
        {
         tagName: "link",
         rel: "canonical",
         href: "https://custlo.com/customer-accounts/custom-fields",
      },
    ];
  };
  
  export const links = () =>[
    {rel:'stylesheet', href:NewAccountPagesStyle},
    {rel:'stylesheet', href:TestimonialSliderStyle},
    {rel:'stylesheet', href:CaseStudyStatusPage},
    {rel:'stylesheet', href:BannerStyle},
  ]
function CustomFieldsPage() {
    const { showComponents, setShowComponents } = useOutletContext();
    useEffect(()=>{
      const accountType = localStorage.getItem("AccountType");
      if(accountType){
        setShowComponents(accountType);
      }
    },[])
  return (
    <>
       <section>
        <ImageWithTextS seperatePage={true}  accountType="new" data={PageCustomFields} showComponents={showComponents} />
       </section>
       <section className='mt-5'>
        <Container>
        <div><h2 className='text-center mb-5'><span>Customer Account Profile Page:</span> Before & After</h2></div>
        <MainBanner dataValue={NewCustomerAccountCustomFieldsAfterBefor} />
        </Container>
       </section>
       <section className='mt-3 mb-3 mb-lg-5 mt-lg-5 pt-5 pb-5 custom_account_pages_section custom_fields_account_page '>
        <div className='mt-4 mb-4'>
          <UniImageWithText accountType="new" data={CustomFieldsBackend}  showComponents={showComponents} />
          <UniImageWithText accountType="new" data={CustomFieldsFrontend}  showComponents={showComponents} />
        </div>
       </section>
       <section className='mb-lg-5 mb-4 pb-lg-3 '>
       <VideoCard CustomFieldsVideos={CustomFieldsVideos} />
       </section>
       
       <TestimonialSlider/>
       <KnowlageBase/>
    </>
  )
}

export default CustomFieldsPage