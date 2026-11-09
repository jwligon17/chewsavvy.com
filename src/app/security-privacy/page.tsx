import type { Metadata } from "next";

import { SecurityPrivacySection } from "@/components/sections/SecurityPrivacySection";

export const metadata: Metadata = {
  title: "Security & Privacy",
  description: "Security and privacy overview for Chewsavvy.",
  alternates: { canonical: "/security-privacy" },
};

export default function SecurityPrivacyPage() {
  return <SecurityPrivacySection />;
}
