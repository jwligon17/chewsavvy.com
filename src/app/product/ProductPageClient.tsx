"use client";

import Image from "next/image";

import { ProductGuidanceSection } from "@/components/sections/ProductGuidanceSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ProductPageClient() {
  return (
    <section className="overflow-x-hidden lg:overflow-x-visible pt-10 sm:pt-12 lg:pt-16">
      <Container>
        <header className="max-w-3xl">
          <h1 className="section-h1">
            Savings Health Matters
          </h1>
          <p className="mt-3 text-pretty text-base text-[var(--cs-muted)]">
            Timely deal discovery helps you make better shopping decisions and turn intent into verified savings.
          </p>
        </header>
      </Container>

      <div className="pointer-events-none relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-x-hidden">
        <div aria-hidden="true" className="pointer-events-none h-[90px] sm:h-[104px] lg:h-[152px]" />
      </div>

      <Container>
        <div className="py-10 sm:py-12 lg:py-16">
          <div className="mx-auto w-full max-w-6xl px-0 lg:px-10">
            <div className="grid grid-cols-1 items-center gap-y-10 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-20">
              <div className="mx-auto flex w-[220px] justify-center sm:w-[240px] md:w-[280px] lg:mx-0 lg:w-[300px] lg:justify-end">
                <Image
                  src="/productphone.png"
                  alt="Chewsavvy product interface on mobile"
                  width={520}
                  height={940}
                  className="w-full h-auto object-contain"
                  sizes="(min-width: 1024px) 300px, (min-width: 768px) 280px, 240px"
                  priority
                />
              </div>
              <div className="w-full text-left lg:justify-self-end lg:text-right">
                <div className="mx-auto max-w-[640px] lg:ml-auto lg:mr-0">
                  <h2 className="section-h1">
                    Better Deals,<br className="hidden lg:block" /> Better Decisions
                  </h2>
                  <div className="ml-auto mt-6 max-w-[560px] space-y-4 text-base text-[var(--cs-muted)] sm:mt-8 sm:space-y-6 md:text-lg">
                    <p>Great savings decisions come from a few key ingredients.</p>
                    <p className="font-semibold text-[var(--cs-primary-2)]">Freshness, verification, and motivation.</p>
                    <p>
                      Chewsavvy is designed to help you discover, redeem, and prove savings in a loop that keeps getting
                      better each week.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>

      <ProductGuidanceSection />

      <Container>
        <div className="flex justify-center py-10 sm:py-12">
          <Button href="/contact" variant="ink" size="md" className="w-full sm:w-auto">
            Get early access
          </Button>
        </div>
      </Container>
    </section>
  );
}
