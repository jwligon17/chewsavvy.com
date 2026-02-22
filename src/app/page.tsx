import type { Metadata } from "next";

import { CoreCapabilitiesSection } from "@/components/sections/CoreCapabilitiesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhatYouGetSection } from "@/components/sections/WhatYouGetSection";
import { chewsavvyContent } from "@/content/chewsavvy";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Chewsavvy is a consumer savings and deals app with stars, streaks, and weekly leaderboard competition.",
};

export default function Home() {
  const { homePage } = chewsavvyContent;

  return (
    <>
      <HeroSection hero={homePage.hero} />
      <HowItWorksSection />
      <WhatYouGetSection whatYouGet={homePage.whatYouGet} />
      <CoreCapabilitiesSection coreCapabilities={homePage.coreCapabilities} />
      <FinalCtaSection finalCta={homePage.finalCTA} />
    </>
  );
}
