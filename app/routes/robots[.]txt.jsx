export function loader() {
    const content = `
        User-agent: *
        Allow: /

        Sitemap: https://custlo.com/sitemap.xml
    `.trim();

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
