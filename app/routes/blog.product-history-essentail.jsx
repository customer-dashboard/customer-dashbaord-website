import React from "react";
import BlogFullPageStyle from "../styles/BlogFullPage.css";
import StartFreeSectionStyle from "../styles/StartFree.css";
import ProductHistoryEssentail from "../components/blogs/ProductHistoryEssentail";

export const links = () => [
  { rel: "stylesheet", href: BlogFullPageStyle },
  { rel: "stylesheet", href: StartFreeSectionStyle },
];
export default function productHistoryEssentail() {
  return (
    <>
      <ProductHistoryEssentail />
    </>
  );
}
