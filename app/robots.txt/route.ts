import { NextResponse } from 'next/server';

export async function GET() {
    const robots = `User-agent: *
Allow: /
Disallow: /api/

# Force recrawl
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Additional sitemaps
Sitemap: https://shahidafridi.vercel.app/sitemap.xml
Sitemap: https://shahidafridi.vercel.app/sitemap`;

    return new NextResponse(robots, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}