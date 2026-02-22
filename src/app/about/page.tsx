import type { Metadata } from "next";
import Image from "next/image";

import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: "About Chewsavvy mission, values, and product focus.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-[calc(100svh-64px)] flex-col">
      <section className="flex flex-1 items-center bg-[var(--cs-surface)] py-6 sm:py-8">
        <Container>
          <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
            <p className="inline-flex max-w-full items-center justify-center gap-2 whitespace-nowrap px-2 text-sm sm:text-base">
              <span className="whitespace-nowrap font-medium text-[var(--cs-muted)]">Incubated at</span>
              <span className="inline-flex items-center">
                <Image
                  src="/rice.png"
                  alt="Rice University"
                  width={140}
                  height={24}
                  className="w-auto shrink-0"
                  style={{ height: "3.8em", width: "auto" }}
                />
              </span>
            </p>

            <PageTitle
              as="h1"
              variant="default"
              className="mt-4 max-w-[1200px] overflow-visible pb-[0.12em] sm:mt-5"
            >
              <span className="block md:whitespace-nowrap">Turn Everyday Shopping into</span>
              <span className="block">Actionable Savings.</span>
            </PageTitle>

            <p className="mt-4 max-w-4xl text-base leading-7 text-[var(--cs-muted)] sm:mt-6 sm:text-lg sm:leading-8">
              Our mission is to bridge scattered deals and real savings outcomes. Chewsavvy helps people make better
              purchase choices with verified savings totals they can trust, track, and share over time.
            </p>

            <div className="mt-6 flex w-full justify-center px-2 sm:mt-7">
              <Button
                href="/contact"
                variant="primary"
                className="h-14 w-full max-w-md rounded-2xl bg-[var(--cs-primary)] px-8 text-base font-semibold text-[var(--cs-text-inverse)] hover:bg-[var(--cs-primary-2)] sm:w-auto"
              >
                Get early access
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative w-full flex-none overflow-hidden border-t-[6px] border-[var(--cs-primary-2)] bg-[var(--cs-primary)] py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--cs-accent-2)_36%,transparent)_0%,color-mix(in_srgb,var(--cs-primary-2)_24%,transparent)_38%,transparent_72%)]"
        />
        <Container>
          <div className="relative mx-auto max-w-[900px] text-center">
            <h2 className="mx-auto mb-6 text-[clamp(40px,4.2vw,72px)] font-bold leading-[1.05] tracking-tight text-[var(--cs-text-inverse)]">
              Built on Motivation, Not Just Coupons.
            </h2>
            <p className="mx-auto max-w-[960px] text-base leading-7 text-[color:color-mix(in_srgb,var(--cs-text-inverse)_85%,transparent)] sm:text-lg sm:leading-8">
              Chewsavvy combines behavioral design with real verification. Streaks, stars, and weekly leaderboards
              keep momentum high, while verified redemptions ensure savings totals reflect what users actually earned.
            </p>
          </div>
        </Container>
      </section>

      <section id="network-scale-daily" className="w-full bg-[var(--cs-surface)] py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[var(--cs-primary)]">
            <span className="text-gradient-dark">Millions of Deals, Daily.</span>
          </h2>

          <div className="mt-8 md:mt-10 grid items-center gap-10 md:gap-12 md:grid-cols-2">
            <div className="max-w-[520px] space-y-6 text-lg leading-relaxed text-[var(--cs-primary-2)]">
              <p>
                Deal freshness drives better outcomes. Chewsavvy updates constantly so users can find high-value offers
                before they expire and make decisions on what is true right now.
              </p>
              <p>
                High-frequency updates reduce deal decay. By aggregating and verifying large volumes of offers daily,
                Chewsavvy keeps leaderboards fair and savings reports accurate.
              </p>
            </div>

            <div className="w-full justify-self-center md:justify-self-end">
              {/* TODO: Add /public/about-deals-daily.png asset. */}
              <Image
                src="/about-deals-daily.png"
                alt="Daily network-scale analytics"
                width={700}
                height={506}
                className="w-full h-auto max-w-[460px] md:max-w-[500px] rounded-2xl object-cover md:ml-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
