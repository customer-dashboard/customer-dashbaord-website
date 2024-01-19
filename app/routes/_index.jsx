import Banner from "../components/Banner";
import BannerStyle from '../styles/Banner.css';
import CarouselStyle from '../styles/Carousel.css';
import Carousel from '../components/slider/Carousel';
import TabsReuse from "../components/TabReuse";
import MobileTabReuseStyle from '../styles/MobileTabReuse.css';
import PagesTopSection from "../components/PageTopSection";
import TabsStyle from '../styles/Tabs.css';
import { Tabs } from "../components/Tabs";
import FeaturedContent from "../components/FeaturedContent";
import { AccountPageData } from "../middleware/PageTopSectionData";
import Mobilove from "../components/Mobilove";
import MobiloveStyle from '../styles/Mobilove.css';
import PagesComparison from "../components/PageComparision";
import { AccountPageDataOfComparision } from "../middleware/PageComparisionData";
import FaqStyle from '../styles/Faq.css';
import Faq from '../components/faqs/Faq';
import AcountPlayerStyle from '../styles/AccountPlayer.css';
import AccountPlayer from '../components/AccountPlayer';
import TestimonialSliderStyle from '../styles/TestimonialSlider.css';
import TestimonialSlider from "../components/slider/TestimonialSlider";
import Facility from "../components/Facility";
import FacilityStyle from '../styles/Facility.css';
import StartFree from "../components/StartFree";
import StartFreeStyle from '../styles/StartFree.css';
export const meta = () => {
  return [
    { title: "Manage and Customize Shopify Account Pages | Customer Dashboard Pro" },
    { name: "description", content: "Looking to Take Control Manage and Customize of Your Shopify Account Pages? Look No Further Than Customer Dashboard Pro. Easily Manage and Customize Your Account Pages With Ease." },
    { name: "keywords", content: "Shopify Customer Accounts Page App,customer account shopify, Customer Account Page, Customer Dashboard Pro Account Page, Shopify Account Page" },
    {property:"og:title", content:"Manage and Customize Shopify Account Pages | Customer Dashboard Pro"},
    {property:"og:description", content:"Looking to Take Control Manage and Customize of Your Shopify Account Pages? Look No Further Than Customer Dashboard Pro. Easily Manage and Customize Your Account Pages With Ease."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/",
    },
  ];
};



export const links = () =>[
  {rel:'stylesheet', href:BannerStyle},
  {rel:'stylesheet', href:MobileTabReuseStyle},
  {rel:'stylesheet', href:TabsStyle},
  {rel:'stylesheet', href:MobiloveStyle},
  {rel:'stylesheet', href:FaqStyle},
  {rel:'stylesheet', href:AcountPlayerStyle},
  {rel:'stylesheet', href:TestimonialSliderStyle},
  {rel:'stylesheet', href:FacilityStyle},
  {rel:'stylesheet', href:StartFreeStyle},
  {rel:'stylesheet', href:CarouselStyle}
]



export default function Index() {
  return (
   <>

    <Banner/>
    <Carousel/>
    <TabsReuse/>
    <PagesTopSection data={AccountPageData}/>
    <Tabs/>
    <FeaturedContent/>
    <Mobilove/>
    <PagesComparison pageData={AccountPageDataOfComparision}/>
    <Faq/>
    <AccountPlayer/>
    <TestimonialSlider/>
    <Facility/>
    <StartFree/>
   </>
  );
}

// src/routes/oldUrl.js


