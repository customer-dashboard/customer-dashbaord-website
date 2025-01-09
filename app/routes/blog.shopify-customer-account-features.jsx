import React from "react";
import BlogFullPageStyle from "../styles/BlogFullPage.css";
import StartFreeSectionStyle from "../styles/StartFree.css";
import CustomerDashBoardAccountFeatureFullBlog from "../components/blogs/CustomerDashBoardAccountFeatureFullBlog";
export const links = () => [
  { rel: "stylesheet", href: BlogFullPageStyle },
  { rel: "stylesheet", href: StartFreeSectionStyle },
];
export default function CustomerDashBoardProFeatures() {
  return <CustomerDashBoardAccountFeatureFullBlog />;
}
