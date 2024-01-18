export const loader = () => {
  // handle "GET" request
// separating xml content from Response to keep clean code. 
    const content = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
        <loc>https://customerdashboard.pro/</loc>
        <lastmod>2023-11-09T08:20:09+01:00</lastmod>
        <priority>0.6</priority>
      </url>
      <url>
      <loc>https://customerdashboard.pro/pricing</loc>
      <lastmod>2023-11-09T08:20:09+01:00</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
	<loc>https://customerdashboard.pro/features</loc>
	<lastmod>2023-11-09T08:20:09+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://customerdashboard.pro/Resources</loc>
	<lastmod>2023-11-09T08:20:09+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://customerdashboard.pro/faqs</loc>
	<lastmod>2023-11-09T08:20:09+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://customerdashboard.pro/contact-us</loc>
	<lastmod>2023-11-09T08:20:09+01:00</lastmod>
	<priority>1.0</priority>    
</url>
<url>
	<loc>https://customerdashboard.pro/privacy-policy</loc>
	<lastmod>2023-11-09T08:20:09+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
<loc>https://customerdashboard.pro/blogs</loc>
<lastmod>2023-11-09T08:20:09+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://customerdashboard.pro/re-order</loc>
<lastmod>2023-11-09T08:20:09+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://customerdashboard.pro/recently-view</loc>
<lastmod>2023-11-09T08:20:09+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://customerdashboard.pro/top-order-products</loc>
<lastmod>2023-11-09T08:20:09+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://customerdashboard.pro/navigation-builder</loc>
<lastmod>2023-11-09T08:20:09+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://customerdashboard.pro/custom-field</loc>
<lastmod>2023-11-09T08:20:09+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://customerdashboard.pro/translation</loc>
<lastmod>2023-11-09T08:20:09+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://customerdashboard.pro/become-a-partner</loc>
<lastmod>2023-11-09T08:20:09+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://customerdashboard.pro/partners-and-integrations</loc>
<lastmod>2023-11-09T08:20:09+01:00</lastmod>
<priority>1.0</priority>
</url>
    </urlset>
    `
    // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
    return new Response(content,{
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "xml-version": "1.0",
        "encoding": "UTF-8"
      }
    });
};