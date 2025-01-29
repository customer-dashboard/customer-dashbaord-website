import React from "react";
import BlogFullPageStyle from "../styles/BlogFullPage.css";
import StartFreeSectionStyle from "../styles/StartFree.css";

import HistoryEssentialForCustomer from "../components/blogs/HistoryEssentialForCustomer";
export const links = () => [
  { rel: "stylesheet", href: BlogFullPageStyle },
  { rel: "stylesheet", href: StartFreeSectionStyle },
];
function CustomerHistoryEssentail() {
  return (
    <>
      <HistoryEssentialForCustomer />
    </>
  );
}

export default CustomerHistoryEssentail;
