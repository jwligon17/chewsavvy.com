import type { Metadata } from "next";
import { SeoPage } from "@/components/SeoPage";

export const metadata: Metadata = { title: "How Chewsavvy Works", description: "Learn how to browse restaurant deals for free and redeem with eligible Chewsavvy access.", alternates: { canonical: "/how-it-works" } };
export default function Page() { return <SeoPage eyebrow="How it works" title="From discovery to the table" description="Create an account, explore participating restaurants, and redeem an eligible deal according to its terms." path="/how-it-works" sections={[
  { heading: "1. Create an account and browse", paragraphs: ["Browsing Chewsavvy is free after account creation. Explore supported locations, participating restaurants, and current deal information without paying simply to look."] },
  { heading: "2. Review the deal", paragraphs: ["Choose an available restaurant deal and read the full terms. Confirm the location, meal period, required purchase, dining format, expiration, and redemption instructions."] },
  { heading: "3. Redeem with eligible access", paragraphs: ["Redeeming requires eligible Chewsavvy membership or other authorized access. The planned membership is $7.99 per month after an eligible seven-day trial; eligibility and terms apply."] },
  { heading: "4. Keep availability in mind", paragraphs: ["Restaurant participation and deals vary by location and can change. The current in-product details are the source of truth for a redemption."] },
]} related={[{label:"Restaurant deals",href:"/restaurant-deals"},{label:"Restaurant discounts",href:"/restaurant-discounts"},{label:"Locations",href:"/locations"},{label:"For restaurants",href:"/for-restaurants"}]} />; }
