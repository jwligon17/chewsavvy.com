import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Made for Vendors",
  description: "Chewsavvy helps approved restaurants track performance and grow with real, trackable insights.",
};

export default function MadeForVendorsPage() {
  return (
    <section className="relative overflow-x-hidden bg-[#0B0B0D] text-white">
      <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-10 px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-10">
        <div className="mx-auto flex w-full max-w-2xl flex-col lg:mx-0">
          <p className="text-sm font-light tracking-wide text-white/60">Made for Vendors</p>

          <h1 className="mt-5 text-[clamp(2.2rem,5.2vw,4.2rem)] font-light leading-[1.05] tracking-tight text-white">
            <span className="block">Your bottom line is</span>
            <span className="block">
              our{" "}
              <span className="bg-gradient-to-r from-[#61AC3E] to-[#E7CA7D] bg-clip-text text-transparent">bottom line.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85">
            When your restaurant gets approved to be a vendor with Chewsavvy, we focus on giving you real, trackable insights.
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
            Perks for your team, insights, and scalable solution to acquiring new customers is just the beginning. Our software lets you
            stay in control.
          </p>

          <div className="mt-10">
            <Link
              href="/vendor"
              className="inline-flex min-h-[48px] items-center rounded-full border border-[#E7CA7D] px-8 text-sm font-medium tracking-wide !text-white transition-colors duration-200 hover:!text-white hover:bg-[#E7CA7D]/10"
            >
              Vendor Portal
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl lg:mx-0 lg:justify-self-end">
          <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[460px] lg:h-[560px]">
            <Image
              src="/vendorfood.png"
              alt="Prepared restaurant dishes for vendor partners"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, (min-width: 640px) 92vw, 96vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
