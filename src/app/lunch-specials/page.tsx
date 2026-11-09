import type { Metadata } from "next";
import { SeoPage } from "@/components/SeoPage";

export const metadata: Metadata = { title: "Lunch Specials", description: "Plan local lunch savings with clear restaurant deal terms and supported-location guidance.", alternates: { canonical: "/lunch-specials" } };
export default function Page() { return <SeoPage eyebrow="Midday dining" title="Lunch specials without the guesswork" description="Explore participating lunch options and verify the meal window before heading out." path="/lunch-specials" sections={[
  { heading: "Plan around the lunch window", paragraphs: ["Lunch specials often depend on a specific time, day, location, or menu. Chewsavvy helps you start with the deal details so your lunch plan is based on what is currently displayed.", "Restaurant participation and availability vary. A listing is not a promise that every menu item or time period is eligible."] },
  { heading: "A quick lunch-special checklist", paragraphs: ["Before you leave or place an order, review the essentials."], bullets: ["Valid day and time window", "Participating restaurant location", "Eligible menu items or purchase conditions", "Dine-in, takeout, or online restrictions", "Redemption and membership requirements"] },
  { heading: "Browse first, redeem when eligible", paragraphs: ["Browsing is free after account creation. If you find a lunch deal you want to use, redemption requires eligible membership or other authorized access."] },
]} related={[{label:"Dinner specials",href:"/dinner-specials"},{label:"Food deals near me",href:"/food-deals-near-me"},{label:"Restaurant discounts",href:"/restaurant-discounts"}]} />; }
