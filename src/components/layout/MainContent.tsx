import type { ReactNode } from "react";

export function MainContent({ children }: { children: ReactNode }) {
  return <main id="main-content">{children}</main>;
}
