import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { APP_HREF, MEMBERSHIP_COPY, SITE_URL, VENDOR_SIGNUP_URL } from "@/lib/site";

type Section = { heading: string; paragraphs: string[]; bullets?: string[] };
type RelatedLink = { label: string; href: string };

export function SeoPage({
  eyebrow,
  title,
  description,
  path,
  sections,
  related,
  vendor = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  sections: Section[];
  related: RelatedLink[];
  vendor?: boolean;
}) {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: title, item: `${SITE_URL}${path}` },
      ] }} />
      <header className="page-hero"><div className="site-container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{description}</p><div className="button-row">{vendor ? <a className="button button-primary" href={VENDOR_SIGNUP_URL}>List Your Restaurant</a> : <Link className="button button-primary" href={APP_HREF}>Get the App</Link>}{path !== "/restaurant-deals" ? <Link className="button button-secondary" href={vendor ? "/how-it-works" : "/restaurant-deals"}>{vendor ? "See How Chewsavvy Works" : "Explore Restaurant Deals"}</Link> : null}</div></div></header>
      <section className="section"><div className="site-container content-grid">
        <div className="prose">{sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</section>)}</div>
        <aside>
          <div className="info-card"><h3>{vendor ? "Restaurant access" : "Membership at a glance"}</h3><p>{vendor ? "Restaurant signup and ongoing access use the secure Chewsavvy Vendor Portal." : MEMBERSHIP_COPY}</p>{vendor ? <a className="button button-secondary" style={{ marginTop: "1.2rem" }} href={VENDOR_SIGNUP_URL}>Open Vendor Portal</a> : null}</div>
          <div className="info-card"><h3>Keep exploring</h3><div className="link-list" style={{ marginTop: "1rem" }}>{related.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div></div>
        </aside>
      </div></section>
      <section className="section section-teal"><div className="site-container cta-band"><div><h2>{vendor ? "Ready to list your restaurant?" : "Ready to discover more?"}</h2><p>{vendor ? "Start with a free restaurant listing through the secure Vendor Portal." : "Get prelaunch access information now. Verified app store links will be added when they are available."}</p></div>{vendor ? <a className="button button-primary" href={VENDOR_SIGNUP_URL}>List Your Restaurant</a> : <Link className="button button-primary" href={APP_HREF}>Get the App</Link>}</div></section>
    </>
  );
}
