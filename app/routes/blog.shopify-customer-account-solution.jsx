import React from "react";
import CustomerSolutionFullBlog from "../components/blogs/CustomerSolutionFullBlog";
import BlogFullPageStyle from "../styles/BlogFullPage.css";
import StartFreeSectionStyle from "../styles/StartFree.css";
export const links = () => [
  { rel: "stylesheet", href: BlogFullPageStyle },
  { rel: "stylesheet", href: StartFreeSectionStyle },
];
function shopifyCcustomerAccountSolution() {
  return (
    <>
      <CustomerSolutionFullBlog />
    </>
  );
}

export default shopifyCcustomerAccountSolution;
