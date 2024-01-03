import React from 'react'
import IntegrationPagesStyle from '../styles/Integration.css';
import IntegrationsAndPartners from '../components/pages/IntegrationsAndPartners';
export const links = () => [{ rel: "stylesheet", href: IntegrationPagesStyle }];
export const meta = () => {
  return [
    { title: "Integrations And Partners: Integrations And Partners with Customer Dashboard Pro Shopify App" },
    { name: "description", content: "Take Your App to the Next Level by Integrating it With Customer Dashboard Pro. Become Partners and Unlock New Opportunities for Growth and Success With Our Powerful Integration Capabilities." },
    { name: "keywords", content: "integrations and partners, Customer Dashboard Pro Partners, CUstomer Dahsboard Pro Integrations" },
    {property:"og:title", content:"Integrations And Partners: Integrations & partners with Customer Dashboard Pro Shopify App"},
    {property:"og:description", content:"Take Your App to the Next Level by Integrating it With Customer Dashboard Pro. Become Partners and Unlock New Opportunities for Growth and Success With Our Powerful Integration Capabilities."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/integrations-partners",
    },
  ];
};

function IntegrationsPartners() {
  return (
    <>
        
        <IntegrationsAndPartners/>
    
    </>
  )
}

export default IntegrationsPartners