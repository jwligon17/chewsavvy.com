import type { Metadata } from "next";
import { SeoPage } from "@/components/SeoPage";

export const metadata: Metadata = { title: "Restaurant Discounts", description: "Understand restaurant discount terms, eligibility, and Chewsavvy redemption access.", alternates: { canonical: "/restaurant-discounts" } };
export default function Page() { return <SeoPage eyebrow="Savings guide" title="Restaurant discounts, clearly explained" description="Know what to review so a restaurant discount works the way you expect." path="/restaurant-discounts" sections={[
  { heading: "Not every discount works the same way", paragraphs: ["Restaurant discounts can apply to a meal period, a menu selection, a minimum purchase, or a specific dining channel. The details matter more than the headline.", "Chewsavvy does not guarantee an offer beyond the current terms shown for a participating restaurant."] },
  { heading: "Terms worth checking", paragraphs: ["Read the full deal before you plan around it."], bullets: ["Validity dates and hours", "Participating locations", "Required purchase and eligible items", "One-time or account-level limits", "Whether the deal can be combined with another promotion", "How and when to redeem"] },
  { heading: "Membership and authorized access", paragraphs: ["Browsing is free after account creation. Redeeming requires an eligible Chewsavvy membership or another authorized access path. The planned membership is $7.99 per month after an eligible seven-day trial; eligibility and terms apply."] },
]} related={[{label:"Restaurant deals",href:"/restaurant-deals"},{label:"Lunch specials",href:"/lunch-specials"},{label:"Dinner specials",href:"/dinner-specials"}]} />; }
