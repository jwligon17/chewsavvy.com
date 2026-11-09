import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Restaurant Deals Blog", description: "Practical Chewsavvy guides for evaluating restaurant deals, planning meal savings, and understanding redemption terms.", alternates: { canonical: "/blog" } };

const guides = [
  { tag: "Deal basics", title: "How to evaluate a restaurant deal", text: "A practical checklist for timing, location, eligible purchases, dining format, and redemption limits.", href: "/restaurant-discounts" },
  { tag: "Lunch planning", title: "What to check before choosing a lunch special", text: "Use the meal window, participating location, and purchase terms to avoid surprises.", href: "/lunch-specials" },
  { tag: "Dinner planning", title: "Make a dinner discount part of the plan", text: "Confirm party, timing, purchase, and redemption requirements before the check arrives.", href: "/dinner-specials" },
  { tag: "Local discovery", title: "Finding useful food deals near you", text: "Why current location and participation details matter more than a long generic list.", href: "/food-deals-near-me" },
  { tag: "Abilene", title: "Exploring restaurant deals in Abilene", text: "Start with supported local discovery and confirm availability in the current Chewsavvy experience.", href: "/locations/abilene" },
  { tag: "For restaurants", title: "How restaurant participation works", text: "Understand the free listing path and why vendor access stays in the secure Vendor Portal.", href: "/for-restaurants" },
];

export default function BlogPage() { return <>
  <header className="page-hero"><div className="site-container"><p className="eyebrow">Chewsavvy guides</p><h1>Make every deal easier to understand</h1><p className="lede">Practical, no-hype guidance for evaluating restaurant savings and planning a meal around the terms that matter.</p></div></header>
  <section className="section"><div className="site-container card-grid">{guides.map((guide) => <article className="benefit" key={guide.href}><p className="eyebrow">{guide.tag}</p><h2 style={{ fontSize: "1.55rem" }}>{guide.title}</h2><p>{guide.text}</p><Link className="button button-secondary" style={{ marginTop: "1.4rem" }} href={guide.href}>Read the guide</Link></article>)}</div></section>
  <section className="section section-teal"><div className="site-container cta-band"><div><h2>Start with the current deals</h2><p>Explore the restaurant-deals hub and follow the current terms for any available offer.</p></div><Link className="button button-primary" href="/restaurant-deals">Restaurant Deals</Link></div></section>
  </>; }
