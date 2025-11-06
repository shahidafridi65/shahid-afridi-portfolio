import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
    template: "%s | Shahid Afridi"
  },
  description: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist specializing in React, Next.js, Node.js, Python, Machine Learning. Building scalable web applications, mobile apps, and enterprise solutions. Available for opportunities.",
  keywords: [
    "Shahid Afridi",
    "Shahid Afridi developer",
    "Shahid Afridi portfolio",
    "Full Stack Developer",
    "Full Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "AI ML Specialist",
    "Web Developer",
    "Software Engineer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile App Developer",
    "Machine Learning Engineer",
    "India Developer",
    "Vercel Portfolio",
    "Hire Full Stack Developer"
  ],
  authors: [{ name: "Shahid Afridi" }],
  creator: "Shahid Afridi",
  publisher: "Shahid Afridi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahidafridi.vercel.app",
    siteName: "Shahid Afridi - Full Stack Engineer Portfolio",
    title: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
    description: "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML. Building scalable web applications and enterprise solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
    description: "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML. Available for opportunities.",
    creator: "@shahidafridi",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "0y9BnL5MJ5zI3MpTTe9oXe6L4ePQGhq4VvOQxeQ7CVE",
  },
  metadataBase: new URL('https://shahidafridi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://shahidafridi.vercel.app" />
        <meta name="theme-color" content="#0066cc" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Structured Data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shahid Afridi",
              "jobTitle": "Full Stack Engineer & AI/ML Specialist",
              "url": "https://shahidafridi.vercel.app",
              "sameAs": [
                "https://github.com/shahidafridi",
                "https://linkedin.com/in/shahidafridi",
                "https://twitter.com/shahidafridi"
              ],
              "knowsAbout": [
                "React", "Next.js", "Python", "AI/ML", "JavaScript",
                "TypeScript", "Node.js", "Web Development", "Mobile Development",
                "Machine Learning", "Artificial Intelligence", "Full Stack Development"
              ],
              "description": "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML. Building scalable web applications and enterprise solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "email": "shahidafrid825@gmail.com",
              "availableForHire": true
            })
          }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}