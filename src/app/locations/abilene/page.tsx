import type { Metadata } from "next";
import { SeoPage } from "@/components/SeoPage";
import { VENDOR_SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = { title: "Restaurant Deals in Abilene, TX", description: "Explore Chewsavvy restaurant deal guidance for Abilene, Texas.", alternates: { canonical: "/locations/abilene" } };
export default function Page() { return <SeoPage eyebrow="Abilene, Texas" title="Restaurant deals in Abilene" description="Discover participating dining options and current deal information for Chewsavvy’s Abilene market." path="/locations/abilene" sections={[
  { heading: "A local guide, not a generic list", paragraphs: ["Chewsavvy is building a location-aware way to explore restaurant deals in Abilene. The goal is to help diners understand what is available now, rather than publish a static list that quickly becomes outdated.", "Restaurant participation and deal availability vary. Chewsavvy does not claim that every Abilene restaurant has an offer."] },
  { heading: "Plan by meal and location", paragraphs: ["Use the lunch, dinner, and nearby-deal guides to narrow your search, then confirm the current location and redemption terms before visiting."], bullets: ["Confirm the participating Abilene location", "Check date and meal-period eligibility", "Review the required purchase and dining format", "Follow the displayed redemption steps"] },
  { heading: "Are you an Abilene restaurant?", paragraphs: ["Restaurants can create a free listing and begin the participation process through the secure Chewsavvy Vendor Portal. No specific placement, traffic, or sales outcome is promised."] },
]} related={[{label:"Lunch specials",href:"/lunch-specials"},{label:"Dinner specials",href:"/dinner-specials"},{label:"List Your Restaurant",href:VENDOR_SIGNUP_URL}]} />; }
