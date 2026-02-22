"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { ChewsavvyContent } from "@/content/chewsavvy";

type HeroSectionProps = {
  hero: ChewsavvyContent["homePage"]["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      className="relative overflow-x-hidden border-b border-[var(--cs-border)] bg-[var(--cs-surface)] pt-12 pb-12 sm:pt-14 sm:pb-14 lg:overflow-visible lg:pt-16 lg:pb-16"
    >
      <div
        className="pointer-events-none absolute top-1/2 right-8 hidden h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--cs-accent-2)] via-[var(--cs-bg)] to-[var(--cs-accent)] opacity-20 blur-lg lg:block"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:translate-x-10 xl:translate-x-12">
          <div className="mb-6 max-w-xl lg:mb-0 lg:max-w-2xl">
            <h1 className="text-shadow-soft text-balance text-[clamp(2.4rem,9vw,3.0rem)] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              <span className="whitespace-nowrap text-[#101536] supports-[background-clip:text]:bg-gradient-to-r supports-[background-clip:text]:from-[#547791] supports-[background-clip:text]:to-[#C0D8E0] supports-[background-clip:text]:bg-clip-text supports-[background-clip:text]:text-transparent">
                {hero.headline}
              </span>
            </h1>
            {hero.supportingLine ? (
              <p className="mt-5 max-w-[58ch] text-pretty text-base leading-[1.72] text-[var(--cs-primary-2)] sm:text-lg sm:leading-[1.72] lg:text-xl lg:leading-[1.68]">
                {hero.supportingLine}
              </p>
            ) : null}

            <ul className="mt-5 max-w-[60ch] list-disc space-y-3 pl-5 text-sm leading-[1.65] text-[var(--cs-primary-2)] marker:text-[var(--cs-primary)] marker:font-semibold sm:text-base">
              {hero.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div id="download" className="mt-7 flex flex-wrap gap-3 lg:mt-8">
              <Button
                href={hero.primaryCta.href}
                size="lg"
                variant="ink"
                className="!text-[#FFFFFF] hover:!text-[#FFFFFF] focus-visible:!text-[#FFFFFF] visited:!text-[#FFFFFF] no-underline hover:no-underline"
              >
                {hero.primaryCta.label}
              </Button>
            </div>
            <a
              href="#how-it-works"
              className="mt-3 inline-flex text-sm font-semibold text-[var(--cs-link)] transition hover:text-[var(--cs-link-hover)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cs-accent)]"
            >
              See how it works
            </a>
          </div>

          <div className="relative mx-auto mt-2 w-full max-w-xl overflow-visible sm:mt-4 lg:mt-0">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-l from-[var(--cs-accent)] via-transparent to-[var(--cs-accent-2)] opacity-20 blur-lg sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]"
              aria-hidden
            />
            <Image
              src="/csphone.png"
              alt="Chewsavvy app deal feed preview"
              width={2944}
              height={6400}
              sizes="(max-width: 768px) 90vw, 352px"
              className="mx-auto block h-auto w-full max-w-[20rem] sm:max-w-[22rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
