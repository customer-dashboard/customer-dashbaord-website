import { useOutletContext } from '@remix-run/react'
import React from 'react'
import Banner from '../components/Banner';
import BannerStyle from '../styles/Banner.css';
import ShopifyPlusIndex from '../components/case-study/ShopifyPlusIndex';
import CaseStudyStyle from '../styles/CaseStudyGrid.css';
import PlusIndexHeroBanner from '../components/case-study/PlusIndexHeroBanner';

export const links = () =>[
    {rel:'stylesheet', href:BannerStyle},
    {rel:'stylesheet', href:CaseStudyStyle},
  ]

// export const meta = () => {
//     return [
//       { title: "Customize Shopify Customer Account Pages | Customer Dashboard Pro : MT",},
//       { name: "description",content: "Looking to Take Control Manage and Customize of Your Shopify Customer Account Pages? Look No Further Than Customer Dashboard Pro. Easily Manage and Customize Your Shopify Account Pages With Ease.",},
//       { name: "keywords", content:  "Shopify Customer Accounts Page,customer account shopify, Customer Account Page, Customer Dashboard Pro Account Page, Shopify Account Page", },
//       { property: "og:title", content: "Customize Shopify Customer Account Pages | Customer Dashboard Pro : MT",},
//       {property: "og:description", content:"Looking to Take Control Manage and Customize of Your Shopify Customer Account Pages? Look No Further Than Customer Dashboard Pro. Easily Manage and Customize Your Shopify Account Pages With Ease.",},
//       {
//         tagName: "link",
//         rel: "canonical",
//         href: "https://custlo.com/",
//       },
//     ];
//   };

function ShopifyPlusCaseStudies() {
const { showComponents } = useOutletContext();
  return (
    <>
    
       {/* <Banner showComponents={showComponents}/> */}
       <PlusIndexHeroBanner/>
       <ShopifyPlusIndex />
    </>
  )
}

export default ShopifyPlusCaseStudies