import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
    description: "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML. Building scalable web applications and enterprise solutions with modern technologies.",
    keywords: "Shahid Afridi, Full Stack Engineer, React Developer, Next.js, Python, AI/ML, Web Developer, Portfolio, JavaScript, TypeScript, Node.js",
    authors: [{ name: "Shahid Afridi" }],
    creator: "Shahid Afridi",
    publisher: "Shahid Afridi",
    robots: "index, follow",
    openGraph: {
        title: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
        description: "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML. Building scalable web applications and enterprise solutions.",
        url: "https://shahidafridi.vercel.app",
        siteName: "Shahid Afridi Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Shahid Afridi - Full Stack Engineer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
        description: "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML.",
        images: ["/og-image.png"],
    },
};