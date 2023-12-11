import React from "react";
import SendEmailApi from "../api/sendMail";
import COntactUsStyle from "../styles/COntactUs.css";
import { json, redirect } from "@remix-run/node";
import ContactUs from "../components/ContactUs";
// import { redirect } from "@remix-run/node";

export const links = () => [{ rel: "stylesheet", href: COntactUsStyle }];
export const meta = () => {
  return [
    { title: "Contact Us for Shopify Customer Dashboard Pro App" },
    { name: "description", content: "Contact us for more information about shopify customer dashboard pro app" },
    {property:"og:title", content:"Contact us - Customer-Dashboard-Pro Contact us"},
    {property:"og:description", content:"Contact Us for more information about customer dashboard pro shopify app with new feature"}
  ];
};


function contactus() {
 return(
  <>

    <ContactUs/>
  
  </>
 )
}

export async function action({ request }) {
  const data = await request.formData();
  const newUser = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    message: data.get("message")

  };

  const errors = {};
  
  if (!newUser.email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (newUser.firstName.length < 3) {
    errors.firstName =
      "FirstName should be at least 3 characters";
  }
  if (newUser.lastName.length < 3) {
    errors.lastName =
      "LastName should be at least 3 characters";
  }
  if (newUser.message.length < 4) {
    errors.message =
      "Message should be at least 4 characters";
  }


  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  // return redirect('/faqs');
  
  // SendMail Api Calling Here
  SendEmailApi(newUser);
  return json({ok:true});
  
}

export default contactus;
