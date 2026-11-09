import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "About", description: "Chewsavvy helps people discover local restaurant deals and make more of their dining budget.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <>
    <header className="page-hero"><div className="site-container"><p className="eyebrow">About Chewsavvy</p><h1>Built for better local dining decisions</h1><p className="lede">Chewsavvy connects restaurant discovery with clear savings information, helping diners explore more while staying thoughtful about what they spend.</p></div></header>
    <section className="section"><div className="site-container split"><div className="split-copy"><p className="eyebrow">Our focus</p><h2>Make local discovery more useful</h2><p className="lede">Restaurant decisions often begin with the same questions: what is nearby, what sounds good, and what fits the budget? Chewsavvy brings those questions into one focused experience.</p><p>We prioritize clear participation, current deal terms, and straightforward membership language. We do not promise that every restaurant has an offer or that every market has the same availability.</p></div><Image className="split-photo" src="/food.png" width={1200} height={850} alt="A plated restaurant meal" /></div></section>
    <section className="section section-soft"><div className="site-container"><div className="section-heading"><p className="eyebrow">What guides us</p><h2>Clear, local, and worth the visit</h2></div><div className="card-grid"><article className="benefit"><h3>Clarity first</h3><p>Deal details and access requirements should be understandable before a diner commits.</p></article><article className="benefit"><h3>Local relevance</h3><p>Supported-market pages should reflect actual participation, not generic nationwide lists.</p></article><article className="benefit"><h3>Restaurant respect</h3><p>Vendor participation belongs in a secure, dedicated portal with its existing workflows preserved.</p></article></div></div></section>
    <section className="section section-teal"><div className="site-container cta-band"><div><h2>See how Chewsavvy works</h2><p>Learn what is free to browse, what requires eligible access, and what to check before redeeming.</p></div><Link className="button button-primary" href="/how-it-works">How It Works</Link></div></section>
  </>;
}
