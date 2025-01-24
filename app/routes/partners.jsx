import React from 'react'
import IntegrationPagesStyle from '../styles/Integration.css';
import IntegrationsAndPartners from '../components/pages/IntegrationsAndPartners';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { GetCollectionMongoDB } from '../utils/Mongo';
export const links = () => [{ rel: "stylesheet", href: IntegrationPagesStyle }];

export const loader = async () =>{
 try {
  const posts = await GetCollectionMongoDB("cdp_partners");
  return json(posts);
  
 } catch (error) {
  return json(error);
 }
} 
export const meta = () => {
  return [
    { title: "Partners: Partners with Customer Dashboard Pro Shopify App" },
    { name: "description", content: "Take Your App to the Next Level by Integrating it With Customer Dashboard Pro. Become Partners and Unlock New Opportunities for Growth and Success With Our Powerful Integration Capabilities." },
    { name: "keywords", content: "Partners, Customer Dashboard Pro Partners, CUstomer Dahsboard Pro Integrations" },
    {property:"og:title", content:"Partners: Partners & Integrations with Customer Dashboard Pro Shopify App"},
    {property:"og:description", content:"Take Your App to the Next Level by Integrating it With Customer Dashboard Pro. Become Partners and Unlock New Opportunities for Growth and Success With Our Powerful Integration Capabilities."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/partners",
    },
  ];
};

function IntegrationsPartners() {
  const partner = useLoaderData();
  return (
    <>
        
        <IntegrationsAndPartners propMain="partners" data={partner} heading="Partners" />
    
    </>
  )
}

export default IntegrationsPartners