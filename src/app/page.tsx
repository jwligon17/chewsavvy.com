import type { Metadata } from "next";

import { FeaturesStatementSection } from "@/components/sections/FeaturesStatementSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MadeForSection } from "@/components/sections/MadeForSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Chewsavvy is a consumer savings and deals app with stars, streaks, and weekly leaderboard competition.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MadeForSection />
      <FeaturesStatementSection />
    </>
  );
}
