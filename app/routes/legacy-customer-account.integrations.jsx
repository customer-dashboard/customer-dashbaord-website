import React from 'react'
import { integrationdata } from '../middleware/IntegrationsData'
import IntegrationsAndPartners from '../components/pages/IntegrationsAndPartners';
import IntegrationPagesStyle from '../styles/Integration.css';

export const links = () => [{ rel: "stylesheet", href: IntegrationPagesStyle }];
export const meta = () => {
  return [
    { title: "Integrations: Integrations with Customer Dashboard Pro Shopify App" },
    { name: "description", content: "Take Your App to the Next Level by Integrating it With Customer Dashboard Pro. Become Partners and Unlock New Opportunities for Growth and Success With Our Powerful Integration Capabilities." },
    { name: "keywords", content: "Integrations, Customer Dashboard Pro Partners, CUstomer Dahsboard Pro Integrations" },
    {property:"og:title", content:"Integrations: Integrations with Customer Dashboard Pro Shopify App"},
    {property:"og:description", content:"Take Your App to the Next Level by Integrating it With Customer Dashboard Pro. Become Partners and Unlock New Opportunities for Growth and Success With Our Powerful Integration Capabilities."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/legacy-customer-account/integrations",
    },
  ];
};

function Index() {
  return (
    <>
    
    <IntegrationsAndPartners data={integrationdata} heading="Integrations" />
    
    </>
  )
}

export default Index