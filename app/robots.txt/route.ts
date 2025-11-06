import { NextResponse } from 'next/server';

export async function GET() {
    const robots = `User-agent: *
Allow: /
Disallow: /api/
    
Sitemap: https://shahidafridi.vercel.app/sitemap.xml`;

    return new NextResponse(robots, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}