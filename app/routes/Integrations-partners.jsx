import React from 'react'
import IntegrationPagesStyle from '../styles/Integration.css';
import IntegrationsAndPartners from '../components/pages/IntegrationsAndPartners';
export const links = () => [{ rel: "stylesheet", href: IntegrationPagesStyle }];
export const meta = () => {
  return [
    { title: "Integrations And Partners: Integrations And Partners with Customer Dashboard Pro Shopify App" },
    { name: "description", content: "Now integrate the app with Customer Dashboard Pro and become partners" },
    {property:"og:title", content:"Integrations And Partners: Integrations & partners with Customer Dashboard Pro Shopify App"},
    {property:"og:description", content:"Now integrate the app with Customer Dashboard Pro and become partners"}
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