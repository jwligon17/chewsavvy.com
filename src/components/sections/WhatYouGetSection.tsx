import { ChewsavvyDashboardMock } from "@/components/mocks/ChewsavvyDashboardMock";
import { Container } from "@/components/ui/Container";
import type { ChewsavvyContent } from "@/content/chewsavvy";

type WhatYouGetSectionProps = {
  whatYouGet: ChewsavvyContent["homePage"]["whatYouGet"];
};

export function WhatYouGetSection({ whatYouGet }: WhatYouGetSectionProps) {
  return (
    <section className="relative overflow-hidden border-b-0 bg-gradient-to-b from-[var(--cs-bg)] via-[color:color-mix(in_srgb,var(--cs-accent-2)_40%,var(--cs-bg))] to-[var(--cs-bg)] pt-10 pb-0 shadow-none ring-0 sm:pt-12 lg:pt-14">
      <Container>
        <header className="mx-auto mb-6 max-w-4xl text-center sm:mb-7 lg:mb-8">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-[var(--cs-primary)] sm:text-5xl lg:text-6xl">
            <span className="text-gradient-dark">
              {whatYouGet.title}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-base leading-[1.7] text-[var(--cs-primary-2)] sm:text-lg sm:leading-[1.72]">
            The essentials: deal discovery, motivation, and shareable progress.
          </p>
          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
            {whatYouGet.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--cs-border)] bg-[var(--cs-surface)] px-4 py-3 text-sm font-semibold text-[var(--cs-primary-2)]"
              >
                {item.title}
              </div>
            ))}
          </div>
        </header>
      </Container>
      <div className="px-4 pb-6 sm:px-6 lg:px-8">
        <ChewsavvyDashboardMock />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-2px] z-30 h-32 bg-gradient-to-b from-transparent via-[color:color-mix(in_srgb,var(--cs-bg)_60%,transparent)] to-[var(--cs-bg)] sm:h-40 lg:h-48"
        aria-hidden="true"
      />
    </section>
  );
}
