import Image from "next/image";

import { Container } from "@/components/ui/Container";

export function ProductGuidanceSection() {
  return (
    <section
      id="how-it-works"
      className="overflow-x-hidden bg-[var(--cs-surface)] pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-16"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-start lg:gap-20">
          <div>
            <h2 className="section-h1">
              <span className="block">Guidance where</span>
              <span className="block">you need it</span>
            </h2>

            <div className="mt-5 space-y-5">
              <div>
                <h3 className="text-lg font-medium text-[var(--cs-primary)]">Overview</h3>
                <p className="mt-2 text-base text-[var(--cs-muted)]">
                  Chewsavvy keeps your deal feed fresh so you can spot real opportunities before they disappear.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[var(--cs-primary)]">How it works</h3>
                <p className="mt-2 text-base text-[var(--cs-muted)]">
                  Discover deals, clip and redeem, earn stars, and climb a weekly leaderboard with measurable progress.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[var(--cs-primary)]">What you get</h3>
                <p className="mt-2 text-base text-[var(--cs-muted)]">
                  Verified savings totals, streak tracking, and shareable wins that make smart shopping more fun.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:min-h-[40rem] lg:justify-self-end lg:-mt-10">
            <div className="flex justify-center lg:absolute lg:right-[-24rem] lg:top-1/2 lg:w-[67.2rem] lg:max-w-none lg:-translate-y-1/2 lg:justify-end">
              <Image
                src="/productlaptop.png"
                alt="Chewsavvy dashboard on a laptop"
                width={1600}
                height={1000}
                className="mx-auto h-auto w-full max-w-[360px] object-contain drop-shadow-[0_24px_40px_rgba(15,23,42,0.18)] sm:max-w-[480px] lg:mx-0 lg:w-full lg:max-w-none"
                sizes="(min-width: 1024px) 65vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
