import React, { useCallback, useEffect, useState } from 'react';
import COntactUs from '../styles/COntactUs.css';
import BecomePartners from '../components/pages/BecomePartners';
import { useActionData } from '@remix-run/react';
import PartnerMail from '../api/PartnerMail';
import { json } from '@remix-run/node';
import { AppProvider, Frame, Toast } from '@shopify/polaris';


export const links = () =>[
  {rel:'stylesheet', href:COntactUs}
]
export async function action({request}) {
  const body = await request.formData();
  const firstName = body.get('name');
  const websiteName = body.get('url');
  const chooseType = body.get('type');
  const email = body.get('email');
  const message = body.get('info');
  const data = await PartnerMail(firstName, websiteName, chooseType, email, message);
  console.log("data",data); 
  
  return json({data: true});
}


export const meta = () => {
  return [
    { title: "Stay Updated with the Latest Blogs | Customer Dashboard Pro" },
    { name: "description", content: "Stay up to date with the latest blogs on Customer Dashboard Pro. Explore a wide range of informative and insightful blog posts to gain valuable knowledge and stay informed." },
    { name: "keywords", content: "Blogs, Customer Dashboard Pro Blogs, Shopify Account App Blogs" },
    {property:"og:title", content:"Stay Updated with the Latest Blogs | Customer Dashboard Pro"},
    {property:"og:description", content:"Stay up to date with the latest blogs on Customer Dashboard Pro. Explore a wide range of informative and insightful blog posts to gain valuable knowledge and stay informed."},
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/become-a-partner",
    },
  ];
};

function BecomePartner(){
  const formActionData = useActionData();
  const [active, setActive] = useState(false);
  const [fieldType, setFieldType] = useState({
    name:'',
    url:'',
    email:'',
    type:'Shopify App',
    info:''

  });
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const toastMarkup = active ? (
    <Toast content="Message sent" onDismiss={toggleActive} duration={3000} />
  ) : null;
  const handleFieldChange = (name, value) => {
    setFieldType((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  console.log("formActionData: ", formActionData);
  useEffect(()=>{ 
    setActive(true);
  },[formActionData])
  console.log("fieldType",fieldType);
  
    return(
        <>
         {
          formActionData?.data === true ?<AppProvider>  <div style={{height:'0', width:'0'}}><Frame>{toastMarkup}</Frame></div> </AppProvider>: ''
         }
            <BecomePartners formActionData={formActionData} handleFieldChange={handleFieldChange} fieldType={fieldType} />
        </>
    );
}

export default BecomePartner