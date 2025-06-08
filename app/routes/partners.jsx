import React from 'react'
import IntegrationPagesStyle from '../styles/Integration.css';
import IntegrationsAndPartners from '../components/pages/IntegrationsAndPartners';
import { partnerData } from '../middleware/IntegrationsData';
// import { connectToDatabase } from '../utils/Mongo';
import { useLoaderData } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
// import { getDatabase } from '../../db.server';
import DATABASE from '../utils/Mongo';
export const links = () => [{ rel: "stylesheet", href: IntegrationPagesStyle }];

// export const loader = async () =>{
//   const Database = await DATABASE;
//   const collection = Database.collection("all_partners");
//   const data = await collection.find().toArray();
//   // const { db } = await connectToDatabase();
//   // console.log("db",db);
//   // // const posts = await db.collection("all_partners").find();
//   // // return json(posts);
//   return json(data);
// } 


export async function loader({ request }) {
  const url = new URL(request.url);
  console.log("url",url);
  // Only redirect if the request comes from customerdashboard.pro
  
  if (url.hostname === "customerdashboard.pro") {
    return redirect("https://custlo.com/partners");
  }
  //   if (url.hostname === "localhost") {
  //   return redirect("https://custlo.com/partners");
  // }

  // Otherwise, continue as normal (e.g., render content)
  return new Response("This is the partners page on custlo.com");
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
      href: "https://custlo.com/partners",
    },
  ];
};

function IntegrationsPartners() {
  // const partner = useLoaderData();
  // console.log("partner",partner);
  return (
    <>
        
        <IntegrationsAndPartners propMain="partners__" data={partnerData} heading="Partners" />
    
    </>
  )
}

export default IntegrationsPartners