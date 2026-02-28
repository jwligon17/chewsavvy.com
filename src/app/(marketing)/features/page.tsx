import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description: "Chewsavvy features and product highlights.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B0B0D] text-white">
        <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-10 px-4 pb-14 pt-6 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-20 lg:px-8 lg:pb-20">
          {/* LEFT: bleeding phone image */}
          <div className="relative -ml-[180px] w-[760px] max-w-none overflow-visible sm:-ml-[240px] sm:w-[900px] lg:-ml-[420px] lg:w-[1100px]">
            <div className="relative h-[520px] w-full sm:h-[600px] lg:h-[720px]">
              <Image
                src="/savvyfeaturephone.png"
                alt="Chewsavvy app features on phone"
                fill
                priority
                className="object-contain drop-shadow-[0_34px_44px_rgba(0,0,0,0.62)]"
                sizes="(min-width: 1024px) 1100px, (min-width: 640px) 900px, 760px"
              />
              {/* Strong fade into background (bottom) */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[62%] bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/95 to-transparent"
              />
            </div>
          </div>

          {/* RIGHT: text */}
          <div className="relative flex w-full flex-col items-end text-right">
            <p className="mb-6 text-right text-sm font-light tracking-wide text-white/60">
              Better Deals
            </p>

            <h1 className="text-right text-[clamp(2.3rem,4.8vw,3.9rem)] font-light leading-[1.1] tracking-normal text-white">
              <span className="block">Good things come to</span>
              <span className="block">
                those that{" "}
                <span className="bg-[linear-gradient(90deg,#4FA857_0%,#1F5A2C_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  stay savvy.
                </span>
              </span>
            </h1>

            <p className="mt-10 max-w-[560px] text-right text-lg leading-relaxed text-white/85">
              We are very selective for our restaurants and deals we approve. When
              you log in, you know you&apos;ll find the best.
            </p>

            <div className="relative mt-8 max-w-[620px] text-right text-sm leading-relaxed text-white/55">
              Tell us your taste, then sort and filter through the in-app deal
              list. You&apos;ll find a savings amount for each card to help you
              know you&apos;ve{" "}
              <strong className="font-semibold text-white/70">
                found the best value.
              </strong>
              {/* tiny dot on the right */}
              <span
                aria-hidden
                className="absolute -right-6 top-3 h-2 w-2 rounded-full border border-white/40"
              />
            </div>

            <div className="mt-10 flex justify-end">
              <Link
                href="#download"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-5 text-sm font-medium text-[#0B0B0D] shadow-[0_10px_30px_rgba(255,255,255,0.14)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Download Our App
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0D] text-white">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <h2 className="bg-[linear-gradient(90deg,#2E5BFF_0%,#E7CA7D_100%)] bg-clip-text text-left text-[clamp(2.1rem,4vw,3.5rem)] font-light leading-[1.08] tracking-tight text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Attention to detail matters. Period.
            </h2>

            <p className="mt-10 text-base leading-relaxed text-white/80 sm:text-lg">
              The best experiences in dining show themselves in the details.{" "}
              <strong className="font-semibold text-white">
                It&apos;s the same for Chewsavvy.
              </strong>
            </p>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              Seamless navigation to your favorite deals. Info at your fingertips
              for quick dinner decisions. Trending redemptions and in-app scores.
              It&apos;s the experience you&apos;ve asked for.
            </p>

            <div className="mt-10">
              <Link
                href="#download"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-5 text-sm font-medium text-[#0B0B0D] shadow-[0_10px_30px_rgba(255,255,255,0.14)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Download Our App
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[520px] lg:translate-x-6">
            <div className="relative h-[420px] w-full max-w-[420px] sm:h-[520px] sm:max-w-[520px] lg:h-[620px] lg:max-w-[620px]">
              <Image
                src="/mapfeaturephone.png"
                alt="Chewsavvy map and detail features on phone"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 620px, (min-width: 640px) 520px, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0D] text-white">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8 lg:py-24">
          <div className="relative order-1 flex min-h-[420px] items-center justify-center sm:min-h-[520px] lg:-ml-10">
            <div className="relative h-[420px] w-full max-w-[360px] sm:h-[520px] sm:max-w-[420px] lg:h-[640px] lg:max-w-[460px]">
              <Image
                src="/dealfeaturephone.png"
                alt="Chewsavvy SavvyScore on phone"
                fill
                className="object-contain drop-shadow-[0_34px_44px_rgba(0,0,0,0.62)]"
                sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 360px"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[55%] bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/95 to-transparent"
              />
            </div>
          </div>

          <div className="order-2 flex flex-col text-right lg:pl-6">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.08] tracking-tight">
              <span className="block">
                <span className="text-[#E7CA7D]">SavvyScore</span>: a
              </span>
              <span className="block text-white">measure of trust</span>
            </h2>

            <p className="mt-10 max-w-[620px] text-base leading-relaxed text-white/85 sm:text-lg">
              No surprises. No unmet expectations. Our internal SavvyScore is what
              fellow customers think about the restaurant, the deal, and the
              overall experience.
            </p>

            <p className="mt-6 max-w-[620px] text-sm leading-relaxed text-white/45 sm:text-base">
              If something does go wrong, we&apos;ve got your back. report any
              concerns directly in the app.
            </p>

            <div className="mt-10">
              <Link
                href="#download"
                className="ml-auto inline-flex min-h-[42px] items-center rounded-md bg-white px-5 text-sm font-medium text-[#0B0B0D] shadow-[0_10px_24px_rgba(255,255,255,0.14)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Download Our App
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="download" className="h-0" aria-hidden />
    </>
  );
}
