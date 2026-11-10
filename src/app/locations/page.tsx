import type { Metadata } from "next";
import Link from "next/link";

import { TexasMarketsMap } from "@/components/locations/TexasMarketsMap";

export const metadata: Metadata = {
  title: "Restaurant Deal Locations",
  description: "Explore Chewsavvy's live Abilene market and planned growth across Texas.",
  alternates: { canonical: "/locations" },
};

export default function Page() {
  return <>
    <header className="page-hero locations-hero"><div className="site-container"><p className="eyebrow">Supported markets</p><h1>Chewsavvy across Texas</h1><p className="lede">We are beginning in the Abilene area and exploring thoughtful growth into more Texas communities.</p></div></header>
    <section className="section locations-map-section"><div className="site-container"><TexasMarketsMap /></div></section>
    <section className="section section-soft"><div className="site-container locations-content-grid">
      <div className="prose"><p className="eyebrow">Local participation comes first</p><h2>Built market by market</h2><p>Chewsavvy is live in the Abilene area, where the focus is restaurant discovery and local dining savings. Market coverage depends on restaurant participation and current availability.</p><p>The future-market markers show communities Chewsavvy is exploring, not promised launch dates. San Angelo, Brownwood, Lubbock, Midland, and Odessa remain planned growth opportunities.</p></div>
      <aside className="market-callout"><span className="market-status-badge">Live market</span><h2>Abilene Area</h2><p>Explore market-specific guidance and practical resources for finding restaurant deals around Abilene.</p><Link className="button button-primary" href="/locations/abilene">Explore Abilene</Link></aside>
    </div></section>
    <section className="section"><div className="site-container">
      <div className="section-heading"><p className="eyebrow">Keep exploring</p><h2>Plan your next meal</h2></div>
      <div className="locations-link-grid">
        <Link href="/food-deals-near-me"><strong>Food deals near me</strong><span>Learn how location and participation shape nearby results.</span></Link>
        <Link href="/lunch-specials"><strong>Lunch specials</strong><span>Review practical guidance for planning around lunch deals.</span></Link>
        <Link href="/dinner-specials"><strong>Dinner specials</strong><span>Understand timing, terms, and restaurant participation.</span></Link>
        <Link href="/for-restaurants"><strong>For restaurants</strong><span>See how restaurants can join Chewsavvy through the Vendor Portal.</span></Link>
      </div>
    </div></section>
  </>;
}
