export function loader() {
  const BASE_URL = "https://custlo.com"; // Replace with your site's URL

  const urls = [
    `${BASE_URL}/`,
    `${BASE_URL}/pricing`,
    `${BASE_URL}/faqs`,
    `${BASE_URL}/privacy-policy`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/become-a-partner`,
    `${BASE_URL}/blog/klaviyo-integration`,
    `${BASE_URL}/re-order`,
    `${BASE_URL}/recently-view`,
    `${BASE_URL}/top-order-products`,
    `${BASE_URL}/navigation-builder`,
    `${BASE_URL}/custom-fields`,
    `${BASE_URL}/translation`,
    `${BASE_URL}/custom-signup-form`,
    `${BASE_URL}/partners`,
    `${BASE_URL}/legacy-customer-account/integrations`,
    `${BASE_URL}/blog/shopify-customer-account-solution`,
    `${BASE_URL}/blog/shopify-customer-account-features`,
    `${BASE_URL}/blog/how-customer-accounts-app-boosts-shopify-conversions`,
    `${BASE_URL}/case-study/shopify-plus-stores-succes-stories`,
    `${BASE_URL}/case-study/verlas`,
    `${BASE_URL}/case-study/hulala-home`,
    `${BASE_URL}/customer-accounts/custom-fields`,
  ];

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(
            (url) => `
            <url>
              <loc>${url}</loc>
              <lastmod>2023-11-09T08:20:09+01:00</lastmod>
              <priority>1.0</priority>
            </url>`
          )
          .join("")}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
}

