import React from 'react'
import { integrationdata } from '../middleware/IntegrationsData'
import IntegrationsAndPartners from '../components/pages/IntegrationsAndPartners';
import IntegrationPagesStyle from '../styles/Integration.css';
import DATABASE from '../utils/Mongo';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

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

export const loader = async () =>{
  const Database = await DATABASE;
  const collection = Database.collection("all_partners");
  const data = await collection.find().toArray();
  // const { db } = await connectToDatabase();
  // console.log("db",db);
  // // const posts = await db.collection("all_partners").find();
  // // return json(posts);
  return json(data);
} 

function Index() {
    const Integrations = useLoaderData();
  return (
    <>
    
    <IntegrationsAndPartners data={integrationdata} propMain="integrations" heading="Integrations" />
    
    </>
  )
}

export default Index