export function loader() {
    const content = `
        User-agent: *
        Allow: /

        Sitemap: https://customerdashboard.pro/sitemap.xml
    `.trim();

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
