import { NextResponse } from 'next/server';

export async function GET() {
    const robots = `User-agent: *
Allow: /
Disallow: /api/

# Multiple sitemap references
Sitemap: https://shahidafridi.vercel.app/sitemap.xml
Sitemap: https://shahidafridi.vercel.app/sitemap
Sitemap: https://shahidafridi.vercel.app/api/sitemap`;

    return new NextResponse(robots, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}