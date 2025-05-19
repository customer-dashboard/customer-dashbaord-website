import FeatureItems from "../components/Features/FeatureItems";
import { builtForShopify } from "../middleware/new-customer-account/FeaturesMap";
import BannerCss from "../styles/Banner.css";
import FeaturesStyle from '../styles/FeaturesSTyle.css';
export const links = () => [{ rel: "stylesheet", href: BannerCss },{ rel: "stylesheet", href: FeaturesStyle }];

export const meta = () => {
  return [
    {
      title:
        "Features Regarding Shopify Customer Accounts App | Customer Dashboard Pro",
    },
    {
      name: "description",
      content:
        "Customer Dashboard Pro Features - Get answers to common queries about our advanced customer dashboard.",
    },
    {
      name: "keywords",
      content:
        "Features, Customer Dashboard Pro Features, SHopify Account Page Features",
    },
    { property: "og:title", content: "Features - Customer-Dashboard-Pro" },
    {
      property: "og:description",
      content:
        "Explore answers to common queries about our advanced Customer Dashboard Pro.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://custlo.com/features",
    },
  ];
};

function Features() {
  return (
    <>
      <section className="mt-3 mb-3">
        <div className="container">
          <div className="mb-3 built-for-shopify-button text-center">
            <span className="built-button-wraper">
              <span className="built-shopify-logo">
                <div className="diamond-container">
                  <div className="diamond">
                    {builtForShopify}
                  </div>
                </div>
              </span>
              <span className="built-shopify-text">Built for Shopify</span>
            </span>
          </div>
          <FeatureItems />
        </div>
      </section>
    </>
  );
}

export default Features;
