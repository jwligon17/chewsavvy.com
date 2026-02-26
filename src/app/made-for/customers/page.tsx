import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Made for Customers",
  description:
    "Chewsavvy is the deal app designed around better food and better experiences for customers.",
};

export default function MadeForCustomersPage() {
  return (
    <section className="relative bg-[#0B0B0D] text-white">
      <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-10 px-4 pb-14 pt-4 sm:px-6 sm:pb-16 sm:pt-6 lg:grid-cols-[1fr_1.2fr] lg:gap-24 lg:px-8 lg:pb-24 lg:pt-6">
        <div className="relative mx-auto flex w-full max-w-[860px] self-center items-center justify-center overflow-visible lg:mx-0 lg:justify-start lg:-ml-10">
          <div className="relative -rotate-[6deg] overflow-visible drop-shadow-[0_34px_44px_rgba(0,0,0,0.62)]">
            <div className="relative overflow-visible">
              <Image
                src="/dealphone.png"
                alt="Chewsavvy app on phone"
                width={840}
                height={1660}
                priority
                className="relative z-0 h-auto w-[380px] sm:w-[560px] lg:w-[780px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[240px] bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/85 to-transparent"
              />
            </div>
          </div>
        </div>

        <div className="ml-auto max-w-[720px] text-right lg:max-w-[820px]">
          <p className="mb-6 text-sm font-light tracking-wide text-white/60">Made for Customers</p>

          <h1 className="max-w-[820px] text-[clamp(2.1rem,4.3vw,4.2rem)] font-light leading-[1.15] tracking-normal text-white">
            <span className="block lg:whitespace-nowrap">The deal app designed around</span>
            <span className="block lg:whitespace-nowrap">
              better food, and{" "}
              <span className="bg-gradient-to-r from-[#2E5BFF] to-[#E7CA7D] bg-clip-text text-transparent">
                you.
              </span>
            </span>
          </h1>

          <p className="mt-8 max-w-[650px] text-lg leading-relaxed text-white/80">
            Pick your taste profile and we&apos;ll deliver
            <br className="hidden sm:block" />
            top deals at your fingertips.
          </p>

          <p className="mt-6 max-w-[54ch] text-[0.98rem] leading-relaxed text-white/68 sm:text-base">
            Deal apps don&apos;t have to feel like deal apps. We pictured an app
            <br className="hidden sm:block" />
            that feels premium, only has the best deals, focuses on higher
            <br className="hidden sm:block" />
            quality restaurants, and is easy to use. We couldn&apos;t find one,
            <br className="hidden sm:block" />
            <strong className="font-semibold text-white"> so we just made it.</strong>
          </p>

          <div className="mt-8 flex justify-end">
            <Link
              href="#download"
              className="inline-flex min-h-[48px] items-center rounded-full bg-white px-7 text-sm font-semibold tracking-[0.01em] text-[#0B0B0D] no-underline shadow-[0_8px_24px_rgba(255,255,255,0.16)] transition-transform duration-200 hover:-translate-y-0.5 hover:text-[#0B0B0D]"
            >
              Download Our App
            </Link>
          </div>
        </div>
      </div>

      <div id="download" className="h-0" aria-hidden />
    </section>
  );
}
