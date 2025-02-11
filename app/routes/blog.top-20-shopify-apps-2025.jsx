import React from "react";
import BlogFullPageStyle from "../styles/BlogFullPage.css";
import StartFreeSectionStyle from "../styles/StartFree.css";
import ShopifyTopAppsContent from "../components/blogs/ShopifyTopAppsContent";
export const links = () => [
  { rel: "stylesheet", href: BlogFullPageStyle },
  { rel: "stylesheet", href: StartFreeSectionStyle },
];

export const meta = () => {
  return [
    { title: "Top 20 Shopify Apps of 2025 | Elevate Customer Engagement & Growth" },
    { name: "description", content: "Discover the top 20 Shopify apps of 2025, including Gojiberry and Customer Dashboard Pro, to boost customer engagement, collect actionable data, and grow your store with ease." },
    { name: "keywords", content: "Shopify apps 2025, best Shopify apps, customer engagement, data-driven growth, Shopify tools, e-commerce solutions" },
    { property: "og:title", content: "Top 20 Shopify Apps of 2025 to Elevate Customer Engagement & Growth" },
    { property: "og:description", content: "Explore the best Shopify apps of 2025 designed to enhance customer experience and boost store growth. Stay ahead in e-commerce with these must-have tools!" },
    { property: "og:url", content: "https://customerdashboard.pro/blog/top-20-shopify-apps-2025" },
    { property: "og:type", content: "article" },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://customerdashboard.pro/blog/top-20-shopify-apps-2025",
    },
  ];
};
function shopifyCcustomerAccountSolution() {
  return (
    <>
      <ShopifyTopAppsContent />
    </>
  );
}

export default shopifyCcustomerAccountSolution;
