import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Made for Customers",
  description:
    "Chewsavvy is the deal app designed around better food and better experiences for customers.",
};

export default function MadeForCustomersPage() {
  const MASK_BLACK_START = 45;
  const TEXT_PR = 6;

  return (
    <section className="relative overflow-x-hidden bg-[#0B0B0D] text-white">
      <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-start gap-10 px-4 pb-8 pt-4 sm:px-6 sm:pb-16 sm:pt-6 lg:grid-cols-[1.05fr_1.15fr] lg:gap-16 lg:px-8 lg:pb-16 lg:pt-6">
        <div className="relative mx-auto flex min-w-0 w-full max-w-[520px] self-center items-center justify-center overflow-visible lg:mx-0 lg:max-w-[520px] lg:-mt-2 lg:justify-start lg:-ml-10">
          <div className="relative h-[520px] w-[420px] origin-left overflow-hidden sm:h-[620px] sm:w-[520px] lg:h-[680px] lg:w-[520px] lg:-translate-x-8 lg:translate-y-2">
            <Image
              src="/dealphone-v2.png"
              alt="Chewsavvy app on phone"
              fill
              priority
              sizes="(min-width: 1024px) 640px, (min-width: 640px) 520px, 420px"
              className="z-10 object-contain drop-shadow-[0_34px_44px_rgba(0,0,0,0.62)]"
              style={{
                transform: "translate(1%, -4%) scale(1.35)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, transparent 34%, black 70%, black 100%)",
                maskImage: "linear-gradient(to top, transparent 0%, transparent 34%, black 70%, black 100%)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[55%] bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/95 to-transparent"
            />
          </div>
        </div>

        <div
          className="ml-auto flex min-w-0 w-full max-w-[760px] flex-col items-end text-right lg:max-w-[760px] lg:justify-self-end lg:pr-6"
          style={{ ["--text-pr" as string]: `${TEXT_PR * 0.25}rem` }}
        >
          <div className="ml-auto w-full max-w-[860px] text-right">
            <p className="mb-6 w-full text-sm font-light tracking-wide text-white/60">Made for Customers</p>

            <h1 className="w-full break-normal text-[clamp(2rem,4vw,3.6rem)] font-light leading-[1.15] tracking-normal text-white lg:text-[clamp(2.4rem,3.6vw,3.25rem)]">
              <span className="block">The deal app designed around</span>
              <span className="block">
                better food, and <span className="text-[#2E5BFF]">you.</span>
              </span>
            </h1>

            <p className="mt-8 w-full text-lg leading-relaxed text-white/80">
              Pick your taste profile and we&apos;ll deliver
              <br className="hidden sm:block" />
              top deals at your fingertips.
            </p>

            <p className="mt-6 w-full text-[0.98rem] leading-relaxed text-white/68 sm:text-base">
              Deal apps don&apos;t have to feel like deal apps. We pictured an app
              <br className="hidden sm:block" />
              that feels premium, only has the best deals, focuses on higher
              <br className="hidden sm:block" />
              quality restaurants, and is easy to use. We couldn&apos;t find one,
              <br className="hidden sm:block" />
              <strong className="font-semibold text-white"> so we just made it.</strong>
            </p>

            <div className="mt-8 flex w-full justify-end">
              <Link
                href="#download"
                className="inline-flex min-h-[48px] items-center rounded-full bg-white px-7 text-sm font-semibold tracking-[0.01em] text-[#0B0B0D] no-underline shadow-[0_8px_24px_rgba(255,255,255,0.16)] transition-transform duration-200 hover:-translate-y-0.5 hover:text-[#0B0B0D]"
              >
                Download Our App
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="download" className="h-0" aria-hidden />
      <div className="fixed bottom-16 right-3 z-50 rounded bg-white/10 px-2 py-1 text-[10px] font-medium tracking-wide text-white/80 backdrop-blur">
        customers-page v4
      </div>
      <div className="fixed bottom-10 right-3 z-50 rounded bg-white/10 px-2 py-1 text-[10px] font-medium tracking-wide text-white/80 backdrop-blur">
        rotate=0 mask={MASK_BLACK_START} pr={TEXT_PR}
      </div>
    </section>
  );
}
