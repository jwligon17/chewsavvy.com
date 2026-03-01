import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MainContent } from "@/components/layout/MainContent";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chewsavvy.com"),
  title: {
    default: "Chewsavvy | Consumer Savings, Deals, and Weekly Leaderboards",
    template: "%s | Chewsavvy",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/chewsavvy-favicon.png",
    shortcut: "/chewsavvy-favicon.png",
    apple: "/chewsavvy-favicon.png",
  },
  description:
    "Chewsavvy helps shoppers discover fresh deals, redeem offers, earn stars, and climb weekly savings leaderboards.",
  openGraph: {
    title: "Chewsavvy | Consumer Savings, Deals, and Weekly Leaderboards",
    description:
      "Chewsavvy helps shoppers discover fresh deals, redeem offers, earn stars, and climb weekly savings leaderboards.",
    url: "https://chewsavvy.com",
    siteName: "Chewsavvy",
    type: "website",
    images: [
      {
        url: "/chewsavvy-og.png",
        width: 2813,
        height: 2813,
        alt: "Chewsavvy temporary social preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chewsavvy | Consumer Savings, Deals, and Weekly Leaderboards",
    description:
      "Chewsavvy helps shoppers discover fresh deals, redeem offers, earn stars, and climb weekly savings leaderboards.",
    images: ["/chewsavvy-og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F9F9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${poppins.className} overflow-x-hidden`}>
      <body className="min-h-screen overflow-x-hidden bg-[var(--cs-bg)] text-[var(--cs-text)] antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only rounded-md bg-[var(--cs-primary)] px-3 py-2 text-sm font-bold text-[var(--cs-text-inverse)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to main content
        </a>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
      </body>
    </html>
  );
}
