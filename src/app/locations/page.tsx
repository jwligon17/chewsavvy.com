import type { Metadata } from "next";
import { SeoPage } from "@/components/SeoPage";

export const metadata: Metadata = { title: "Restaurant Deal Locations", description: "Explore Chewsavvy supported locations and local restaurant deal guidance.", alternates: { canonical: "/locations" } };
export default function Page() { return <SeoPage eyebrow="Supported markets" title="Chewsavvy locations" description="Explore local dining discovery in supported markets, beginning with Abilene, Texas." path="/locations" sections={[
  { heading: "Local participation comes first", paragraphs: ["Chewsavvy’s location pages are designed around real market support and restaurant participation. A city page explains where discovery is focused without claiming every local restaurant or neighborhood is included."] },
  { heading: "Abilene, Texas", paragraphs: ["Chewsavvy is building local restaurant discovery for Abilene. Visit the Abilene page for market-specific guidance and links to lunch, dinner, and nearby-deal resources."] },
  { heading: "Availability changes by market", paragraphs: ["Restaurant participation, deal inventory, and redemption access vary. Check the app experience for current availability after creating an account."] },
]} related={[{label:"Restaurant deals in Abilene",href:"/locations/abilene"},{label:"Food deals near me",href:"/food-deals-near-me"},{label:"For restaurants",href:"/for-restaurants"}]} />; }
