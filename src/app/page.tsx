import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { APP_HREF, MEMBERSHIP_COPY, VENDOR_SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Restaurant Deals & Local Dining Savings",
  description: "Discover restaurant deals, lunch and dinner savings, and local dining options with Chewsavvy.",
  alternates: { canonical: "/" },
};

const faqs = [
  ["Is it free to browse Chewsavvy?", "Yes. Browsing is free after account creation. Redeeming a deal requires an eligible membership or other authorized access."],
  ["What will membership cost?", "The planned membership is $7.99 per month after an eligible seven-day trial. Eligibility and terms apply."],
  ["Where is Chewsavvy available?", "Chewsavvy is beginning with supported local markets, including Abilene, Texas. Restaurant and deal availability varies by location."],
  ["Can restaurants join Chewsavvy?", "Yes. Restaurants can start with the List Your Restaurant option, which opens the secure Chewsavvy Vendor Portal signup."],
];

export default function Home() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }} />
      <section className="hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Local dining, made savvier</p>
            <h1>Discover more.<br /><span>Spend less.</span></h1>
            <p className="lede">Exclusive restaurant deals, incredible local savings, and more reasons to enjoy the food you love.</p>
            <div className="button-row">
              <Link className="button button-primary" href={APP_HREF}>Get the App</Link>
              <Link className="button button-secondary" href="/restaurant-deals">Explore Restaurant Deals</Link>
            </div>
            <p className="fine-print">Prelaunch access information is available now. Store download links will be added only when verified.</p>
          </div>
          <div className="hero-image">
            <Image className="food-photo" src="/food.png" width={1400} height={900} alt="A carefully plated restaurant meal" priority sizes="(max-width: 1040px) 90vw, 48vw" />
            <Image className="hero-phone" src="/dealfeaturephone.png" width={350} height={700} alt="Chewsavvy mobile app deal screen preview" priority />
            <p className="hero-note">Find a reason to try somewhere new.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-container">
          <div className="section-heading"><p className="eyebrow">Made for real meal plans</p><h2>More choice for every appetite</h2><p className="lede">Chewsavvy brings discovery and savings together without making the experience feel like coupon hunting.</p></div>
          <div className="benefit-grid">
            <article className="benefit"><span className="icon-number">01</span><h3>Discover nearby restaurants</h3><p>Browse participating options by location and find dining ideas that fit the moment.</p></article>
            <article className="benefit"><span className="icon-number">02</span><h3>Plan lunch or dinner</h3><p>Explore meal-time savings pages before deciding where and when to eat.</p></article>
            <article className="benefit"><span className="icon-number">03</span><h3>Redeem eligible deals</h3><p>Review the terms for an available deal, then redeem with eligible membership or authorized access.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container split">
          <div className="pattern-panel"><Image src="/mapfeaturephone.png" width={350} height={700} alt="Chewsavvy restaurant map interface preview" /></div>
          <div className="split-copy"><p className="eyebrow">Restaurant discovery</p><h2>From “what sounds good?” to a plan</h2><p className="lede">See participating restaurants around supported locations, compare what is available, and choose the meal that fits your day.</p><p className="fine-print">Product interface shown for illustration. Restaurant listings, deals, and availability vary by market.</p><div><Link className="button button-secondary" href="/food-deals-near-me">Find food deals near you</Link></div></div>
        </div>
      </section>

      <section className="section section-soft" id="how-it-works">
        <div className="site-container">
          <div className="section-heading"><p className="eyebrow">How it works</p><h2>A clear path from browse to bite</h2></div>
          <div className="steps">
            <article className="step"><strong>Step one</strong><h3>Create an account</h3><p>Set up access to browse Chewsavvy and see what is available in supported locations.</p></article>
            <article className="step"><strong>Step two</strong><h3>Choose a deal</h3><p>Review the participating restaurant, deal details, availability, and redemption terms.</p></article>
            <article className="step"><strong>Step three</strong><h3>Redeem when eligible</h3><p>Use an eligible membership or other authorized access to redeem according to the displayed terms.</p></article>
          </div>
          <p className="fine-print" style={{ marginTop: "1.5rem" }}>{MEMBERSHIP_COPY}</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container split">
          <div className="split-copy"><p className="eyebrow">Lunch and dinner</p><h2>Savings that fit the way you dine</h2><p className="lede">Use Chewsavvy’s dedicated guides to explore restaurant discounts by meal and location without relying on stale, generic deal lists.</p><div className="button-row"><Link className="button button-secondary" href="/lunch-specials">Lunch specials</Link><Link className="button button-secondary" href="/dinner-specials">Dinner specials</Link></div></div>
          <Image className="split-photo" src="/vendorfood.png" width={750} height={600} alt="A restaurant entrée with vegetables" />
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-container location-strip"><div><p className="eyebrow">Supported locations</p><h2>Starting local in Abilene</h2><p className="lede">Explore Chewsavvy’s location guidance for Abilene, Texas. Participation and deal availability vary.</p></div><Link className="button button-primary" href="/locations/abilene">Explore Abilene</Link></div>
      </section>

      <section className="section" id="faqs">
        <div className="narrow"><div className="section-heading"><p className="eyebrow">Questions, answered</p><h2>Chewsavvy FAQs</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className="section section-teal">
        <div className="site-container cta-band"><div><p className="eyebrow" style={{ color: "#fee8d1" }}>For restaurants</p><h2>Put your restaurant in the discovery flow</h2><p>Create a free restaurant listing, manage participation through the Vendor Portal, and reach guests who are actively deciding where to eat.</p></div><div className="button-row"><a className="button button-primary" href={VENDOR_SIGNUP_URL}>List Your Restaurant</a><a className="button button-light" href={VENDOR_SIGNUP_URL}>Vendor Portal</a></div></div>
      </section>
    </>
  );
}
