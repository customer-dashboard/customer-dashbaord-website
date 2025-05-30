import Banner from "../components/Banner";
import BannerStyle from "../styles/Banner.css";
import CarouselStyle from "../styles/Carousel.css";
import Carousel from "../components/slider/Carousel";
import MobileTabReuseStyle from "../styles/MobileTabReuse.css";
import PagesTopSection from "../components/PageTopSection";
import TabsStyle from "../styles/Tabs.css";
import { AccountPageData } from "../middleware/PageTopSectionData";
import KnowlageBase from "../components/KnowlageBase";
import MobiloveStyle from "../styles/Mobilove.css";
import HomePricing from '../styles/HomePricing.css';
import AcountPlayerStyle from "../styles/AccountPlayer.css";
import AccountPlayer from "../components/AccountPlayer";
import TestimonialSliderStyle from "../styles/TestimonialSlider.css";
import TestimonialSlider from "../components/slider/TestimonialSlider";
import Facility from "../components/Facility";
import FacilityStyle from "../styles/Facility.css";
import StartFree from "../components/StartFree";
import StartFreeStyle from '../styles/StartFree.css';
import VerticalTabs from '../components/vertical-tabs/VerticalTabs';
import VerticalTab2 from '../components/vertical-tabs/VerticalTab2';
import VerticalTab3 from '../components/vertical-tabs/VerticalTab3';
import VerticalTabCss from '../styles/VerticalTab.css';
import ImageWithTextS from '../components/new-customer-account/ImageWithTextS';
import { orderTrackingWidget, customFieldData } from '../middleware/new-customer-account/ImageWithText'
import IntegrationStyle from '../styles/Integration.css';
import ChooseAccountType from '../components/Modals/ChooseAccountType';
import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import HomePlan from '../components/new-customer-account/components/HomePlan';
 
export const meta = () => {
  return [
    { title: "Shopify Customer Account App | Customer Dashboard Pro",},
    { name: "description",content: "Boost your Shopify store with the Customer Account app. Let customers create accounts, track orders, and enjoy a personalized shopping experience.",},
    { name: "keywords", content:  "Shopify customer accounts, Customer login Shopify, Shopify account app, Personalized shopping Shopify, Shopify order tracking", },
    { property: "og:title", content: "Shopify Customer Account App | Customer Dashboard Pro",},
    {property: "og:description", content:"Boost your Shopify store with the Customer Account app. Let customers create accounts, track orders, and enjoy a personalized shopping experience.",},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://custlo.com/",
    },
  ];
};

export const links = () =>[
  {rel:'stylesheet', href:BannerStyle},
  {rel:'stylesheet', href:MobileTabReuseStyle},
  {rel:'stylesheet', href:TabsStyle},
  {rel:'stylesheet', href:MobiloveStyle},
  {rel:'stylesheet', href:AcountPlayerStyle},
  {rel:'stylesheet', href:TestimonialSliderStyle},
  {rel:'stylesheet', href:FacilityStyle},
  {rel:'stylesheet', href:StartFreeStyle},
  {rel:'stylesheet', href:CarouselStyle},
  {rel:'stylesheet', href:VerticalTabCss},
  {rel:'stylesheet', href:HomePricing},
  {rel:'stylesheet', href:IntegrationStyle}

]

export default function Index() {
  const { showComponents, setShowComponents } = useOutletContext();

  useEffect(()=>{
    const accountType = localStorage.getItem("AccountType");
    if(accountType){
      setShowComponents(accountType);
    }
  },[])

  return (
   <>
    <ChooseAccountType showComponents={showComponents} setShowComponents={setShowComponents} />
    <Banner showComponents={showComponents} />
    <Carousel/>
    <HomePlan/>
    {
       showComponents == 'New Customer Account' ? <>
       <ImageWithTextS data={customFieldData} showComponents={showComponents} />
       <VerticalTab3 showComponents={showComponents} />
       <ImageWithTextS data={orderTrackingWidget} showComponents={showComponents} />
       </> : ''
    }
    {
       showComponents == 'Classic Customer Account' ? <>
          <VerticalTabs showComponents={showComponents} />
          <PagesTopSection showComponents={showComponents} data={AccountPageData} />
          <VerticalTab2 showComponents={showComponents} />
       </> : ''
     }
    <AccountPlayer/>
    <TestimonialSlider/>
    <Facility/>
    {/* <KnowlageBase/> */}
    <StartFree/>
   </>
  );
}
