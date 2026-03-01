"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { isMarketingDarkRoute } from "@/components/layout/marketingRoutes";

type MainContentProps = {
  children: ReactNode;
};

export function MainContent({ children }: MainContentProps) {
  const pathname = usePathname();
  const needsOffset = isMarketingDarkRoute(pathname);

  return (
    <main id="main-content" className={needsOffset ? "pt-[var(--cs-nav-height)]" : undefined}>
      {children}
    </main>
  );
}
