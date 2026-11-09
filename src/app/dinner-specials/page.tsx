import type { Metadata } from "next";
import { SeoPage } from "@/components/SeoPage";

export const metadata: Metadata = { title: "Dinner Specials", description: "Explore local dinner deal guidance and verify restaurant participation before dining.", alternates: { canonical: "/dinner-specials" } };
export default function Page() { return <SeoPage eyebrow="Evening dining" title="Dinner specials for a savvier night out" description="Find participating dinner options, understand the terms, and choose what fits your evening." path="/dinner-specials" sections={[
  { heading: "Make the deal part of the plan", paragraphs: ["Dinner can involve more people, a tighter schedule, and a larger check. Reviewing the deal in advance helps you understand whether it fits the restaurant, location, timing, and dining format you have in mind.", "Chewsavvy presents participating opportunities without claiming every restaurant has a deal or that an offer is always available."] },
  { heading: "Review the details before the check", paragraphs: ["Use the current deal terms as the source of truth."], bullets: ["Eligible location and meal period", "Required purchase or menu conditions", "Party-size or redemption limits", "Dine-in, takeout, or online restrictions", "Expiration and redemption instructions"] },
  { heading: "From discovery to redemption", paragraphs: ["Create an account to browse, select an available deal, and follow its instructions. Eligible membership or other authorized access is required to redeem."] },
]} related={[{label:"Lunch specials",href:"/lunch-specials"},{label:"Restaurant deals",href:"/restaurant-deals"},{label:"How it works",href:"/how-it-works"}]} />; }
