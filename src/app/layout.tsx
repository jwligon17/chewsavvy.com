import type { Metadata, Viewport } from "next";
import { Grandstander, Jost } from "next/font/google";

import { JsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MainContent } from "@/components/layout/MainContent";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });
const grandstander = Grandstander({ subsets: ["latin"], variable: "--font-grandstander", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Chewsavvy | Local Restaurant Deals", template: "%s | Chewsavvy" },
  description: "Discover restaurant deals, local lunch and dinner savings, and more reasons to enjoy the food you love with Chewsavvy.",
  icons: { icon: "/brand/chewsavvy-mark-orange.svg", apple: "/chewsavvy-favicon.png" },
  openGraph: { title: "Chewsavvy | Discover more. Spend less.", description: "Exclusive restaurant deals, incredible local savings, and more reasons to enjoy the food you love.", url: SITE_URL, siteName: "Chewsavvy", type: "website", images: [{ url: "/og-chewsavvy.png", width: 1200, height: 630, alt: "Chewsavvy" }] },
  twitter: { card: "summary_large_image", images: ["/og-chewsavvy.png"] },
};

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jost.variable} ${grandstander.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <JsonLd data={{ "@context": "https://schema.org", "@graph": [
          { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Chewsavvy", url: SITE_URL, logo: `${SITE_URL}/brand/chewsavvy-primary-teal.svg` },
          { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Chewsavvy", url: SITE_URL, publisher: { "@id": `${SITE_URL}/#organization` } },
        ] }} />
        <Header /><MainContent>{children}</MainContent><Footer />
      </body>
    </html>
  );
}
