import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Get the Chewsavvy App", description: "Get truthful prelaunch information for the Chewsavvy restaurant deals app.", alternates: { canonical: "/coming-soon" } };

export default function ComingSoonPage() {
  return <>
    <header className="page-hero"><div className="site-container"><p className="eyebrow">Chewsavvy app</p><h1>Restaurant discovery is getting savvier</h1><p className="lede">Chewsavvy is preparing its public app experience. Verified App Store and Google Play links will be added here only when they are available.</p><div className="button-row"><Link className="button button-primary" href="/contact">Request Launch Updates</Link><Link className="button button-secondary" href="/how-it-works">See How It Works</Link></div></div></header>
    <section className="section"><div className="narrow prose"><h2>What you can expect</h2><p>Create an account to browse participating restaurant information in supported locations. Browsing is free after account creation.</p><p>Redeeming requires eligible membership or other authorized access. The planned membership is $7.99 per month after an eligible seven-day trial; eligibility and terms apply.</p><p>No unverified app marketplace destination is linked from this page.</p></div></section>
  </>;
}
