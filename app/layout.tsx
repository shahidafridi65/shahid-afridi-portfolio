"use client";

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="0y9BnL5MJ5zI3MpTTe9oXe6L4ePQGhq4VvOQxeQ7CVE" />

        {/* Essential Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://shahidafridi.vercel.app" />
        <meta name="theme-color" content="#0066cc" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data - CRITICAL for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shahid Afridi",
              "jobTitle": "Full Stack Engineer",
              "url": "https://shahidafridi.vercel.app",
              "sameAs": [
                "https://github.com/shahidafridi65",
                "https://linkedin.com/in/shahid--afridi/",
                "https://hashnode.com/@shahidafridii"
              ],
              "knowsAbout": [
                "React", "Next.js", "TypeScript", "Python",
                "Node.js", "AI/ML", "Full Stack Development",
                "Web Development", "Software Engineering"
              ],
              "description": "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML development.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              }
            })
          }}
        />
      </head>
      <body className="font-sans theme-transition">
        <ThemeProvider>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Navigation />
              {children}
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}