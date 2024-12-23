import Banner from "../components/Banner";
import BannerStyle from '../styles/Banner.css';
import CarouselStyle from '../styles/Carousel.css';
import Carousel from '../components/slider/Carousel';
import MobileTabReuseStyle from '../styles/MobileTabReuse.css';
import PagesTopSection from "../components/PageTopSection";
import TabsStyle from '../styles/Tabs.css';
import { AccountPageData } from "../middleware/PageTopSectionData";
import KnowlageBase from "../components/KnowlageBase";
import MobiloveStyle from '../styles/Mobilove.css';
import AcountPlayerStyle from '../styles/AccountPlayer.css';
import AccountPlayer from '../components/AccountPlayer';
import TestimonialSliderStyle from '../styles/TestimonialSlider.css';
import TestimonialSlider from "../components/slider/TestimonialSlider";
import Facility from "../components/Facility";
import FacilityStyle from '../styles/Facility.css';
import StartFree from "../components/StartFree";
import StartFreeStyle from '../styles/StartFree.css';
import VerticalTabs from '../components/vertical-tabs/VerticalTabs';
import VerticalTab2 from '../components/vertical-tabs/VerticalTab2';
import VerticalTab3 from '../components/vertical-tabs/VerticalTab3';
import VerticalTabCss from '../styles/VerticalTab.css';
import ImageWithTextS from '../components/new-customer-account/ImageWithTextS';
import FeaturedContent from '../components/FeaturedContent';
import { orderTrackingWidget, customFieldData } from '../middleware/new-customer-account/ImageWithText'
import { HomePageFeatures, homePageHeadings } from "~/middleware/FeaturedContentDataM";

 
export const meta = () => {
  return [
    { title: "Customize Shopify Customer Account Pages | Customer Dashboard Pro : MT" },
    { name: "description", content: "Looking to Take Control Manage and Customize of Your Shopify Customer Account Pages? Look No Further Than Customer Dashboard Pro. Easily Manage and Customize Your Shopify Account Pages With Ease." },
    { name: "keywords", content: "Shopify Customer Accounts Page,customer account shopify, Customer Account Page, Customer Dashboard Pro Account Page, Shopify Account Page" },
    {property:"og:title", content:"Customize Shopify Customer Account Pages | Customer Dashboard Pro : MT"},
    {property:"og:description", content:"Looking to Take Control Manage and Customize of Your Shopify Customer Account Pages? Look No Further Than Customer Dashboard Pro. Easily Manage and Customize Your Shopify Account Pages With Ease."},
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
  {rel:'stylesheet', href:AcountPlayerStyle},
  {rel:'stylesheet', href:TestimonialSliderStyle},
  {rel:'stylesheet', href:FacilityStyle},
  {rel:'stylesheet', href:StartFreeStyle},
  {rel:'stylesheet', href:CarouselStyle},
  {rel:'stylesheet', href:VerticalTabCss}
]



export default function Index() {
  return (
   <>
    <Banner/>
    <Carousel/>
    <div className="pageTopSectionOnHomePage home_page_features_new" >
        <FeaturedContent data={homePageHeadings} features={HomePageFeatures}/>
    </div>
    <ImageWithTextS data={customFieldData} />
    <VerticalTab3/>
    <ImageWithTextS data={orderTrackingWidget} />
    <VerticalTabs/>
    <PagesTopSection data={AccountPageData}/>
    <VerticalTab2/>
    <AccountPlayer/>
    <TestimonialSlider/>
    <Facility/>
    <KnowlageBase/>
    <StartFree/>
 
   </>
  );
}


