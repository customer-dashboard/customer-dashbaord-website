import Banner from "../components/Banner";
import BannerStyle from '../styles/Banner.css';
import CarouselStyle from '../styles/Carousel.css';
import Carousel from "../components/Carousel";
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
import Faq from "../components/Faq";
import AcountPlayerStyle from '../styles/AccountPlayer.css';
import AccountPlayer from '../components/AccountPlayer';
import TestimonialSliderStyle from '../styles/TestimonialSlider.css';
import TestimonialSlider from "../components/TestimonialSlider";
import Facility from "../components/Facility";
import FacilityStyle from '../styles/Facility.css';
import StartFree from "../components/StartFree";
import StartFreeStyle from '../styles/StartFree.css';
export const meta = () => {
  return [
    { title: "Customer Dashbaord   Home - Customer-Dashboard-Pro Shopify App" },
    { name: "description", content: "Customer Dashboard Pro Shopify App For Customer Account Page" },
    {property:"og:title", content:"Customer Dashbaord Home - Customer-Dashboard-Pro Shopify App"},
    {property:"og:description", content:"Customer Dashboard Og Description"}
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
