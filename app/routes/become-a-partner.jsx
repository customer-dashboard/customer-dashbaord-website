import React from "react";
// import SendEmailApi from "../api/sendMail";
import COntactUsStyle from "../styles/COntactUs.css";
import { json } from "@remix-run/node";
import BecomePartners from "../components/pages/BecomePartners";
import PartnerMail from "../api/PartnerMail";

export const links = () => [{ rel: "stylesheet", href: COntactUsStyle }];
export const meta = () => {
  return [
    { title: "become-a-partner | Customer Dashboard Pro" },
    { name: "description", content: "Explore rewarding partnership opportunities with Customer Dashboard Pro! Join forces with us to empower businesses, enhance customer experiences, and drive mutual success. Become a valued partner and unlock a world of collaboration, innovation, and growth in the realm of customer-centric solutions. Let's build the future together! " },
    {property:"og:title", content:"Become a partner - Customer-Dashboard-Pro"},
    {property:"og:description", content:"Explore rewarding partnership opportunities with Customer Dashboard Pro! Join forces with us to empower businesses, enhance customer experiences, and drive mutual success. Become a valued partner and unlock a world of collaboration, innovation, and growth in the realm of customer-centric solutions. Let's build the future together!"}
  ];
};


function contactus() {
 return(
  <>

    <BecomePartners/>
  
  </>
 )
}

export async function action({ request }) {
  const data = await request.formData();
  const newUser = {
    firstName: data.get("firstName"),
    websiteName: data.get("websiteName"),
    chooseType: data.get("chooseType"),
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
  if (newUser.websiteName.length < 3) {
    errors.websiteName =
      "Website Name should be at least 3 characters";
  }
  if (newUser.message.length < 4) {
    errors.message =
      "Message should be at least 4 characters";
  }


  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  PartnerMail(newUser)
  return json({ok:true});
  
}

export default contactus;
