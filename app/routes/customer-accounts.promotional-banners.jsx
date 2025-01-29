import { useOutletContext } from '@remix-run/react';
import React, { useEffect } from 'react'
// import ImageWithTextS from '../components/new-customer-account/ImageWithTextS';
import ImageWithTextS from '../components/new-customer-account/ImageWithTextS';
import { PagePromotionalBanners } from '../middleware/new-customer-account/ImageWithText';
import NewAccountPagesStyle from '../styles/NewAccountPagesStyle.css';
import UniImageWithText from '../components/new-customer-account/components/UniImageWithText';
import { CustomFieldsFrontend, CustomFieldsBackend, CustomFieldsVideos, NewCustomerAccountCustomFieldsAfterBefor, TextBannerWidget, TextBannerVideo, ImageBannerWidger, PromotionalBannerBeforAfter } from '../components/new-customer-account/components/UniImageWithTextJson';
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
            "title": "Customizable Promotional Banners | Shopify Customer Account | Enhance Customer Communication"
        },
        {
            "name": "description",
            "content": "Display customizable promotional banners on customer profile pages, order status pages, and order index pages."
        },
        {
            "property": "og:title",
            "content": "Customizable Promotional Banners | Shopify Customer Account | Enhance Customer Communication"
        },
        {
            "property": "og:site_name",
            "content": "Customer Dashboard Pro"
        },
        {
            "property": "og:url",
            "content": "https://customerdashboard.pro/customer-accounts/promotional-banners"
        },
        {
            "property": "keywords",
            "content": "Shopify promotional banners, customer communication, success banner, info banner, warning banner, critical banner, customer engagement"
        },
        {
            "property": "og:description",
            "content": "Customize and display promotional banners in various types (success, info, warning, critical) across Shopify customer profile, order status, and order index pages."
        },
        {
            "tagName": "link",
            "rel": "canonical",
            "href": "https://customerdashboard.pro/customer-accounts/promotional-banners"
        }
    ]
    
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
        <ImageWithTextS accountType="new" seperatePage={true} data={PagePromotionalBanners} showComponents={showComponents} />
       </section>
       <section className='mt-5'>
        <Container>
        <div><h2 className='text-center mb-5'><span>Customer Account </span> Profile Page : Before & After with Promotional Banners </h2></div>
         <MainBanner dataValue={PromotionalBannerBeforAfter} />
        </Container>
       </section>
       <section className='mt-3 mb-3 mb-lg-5 mt-lg-5 pt-5 pb-5 custom_account_pages_section custom_fields_account_page '>
        <div className='mt-4 mb-4'>
            <UniImageWithText accountType="new" data={ImageBannerWidger}  showComponents={showComponents} />
            <UniImageWithText accountType="new" data={TextBannerWidget}  showComponents={showComponents} />
        </div>
       </section>
       <section className='mb-lg-5 mb-4 pb-lg-3 '>
       <VideoCard CustomFieldsVideos={TextBannerVideo} />
       </section>
       
       <TestimonialSlider/>
       <KnowlageBase/>
    </>
  )
}

export default CustomFieldsPage