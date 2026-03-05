import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-x-hidden overflow-y-visible bg-[#0B0B0D] pb-12 pt-4 md:isolation-auto sm:pb-14 sm:pt-6 lg:pb-16 lg:pt-7">
      <div
        className="pointer-events-none absolute left-[30%] top-[56%] -z-20 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-[96px] sm:h-[320px] sm:w-[320px] lg:h-[340px] lg:w-[340px]"
        style={{ background: "radial-gradient(circle, rgba(97,172,62,0.22) 0%, rgba(11,11,13,0) 72%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[24%] top-[34%] -z-20 h-[280px] w-[280px] translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[92px] sm:h-[300px] sm:w-[300px] lg:h-[320px] lg:w-[320px]"
        style={{ background: "radial-gradient(circle, rgba(227,203,135,0.2) 0%, rgba(11,11,13,0) 74%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        style={{ background: "radial-gradient(120% 90% at 50% 42%, rgba(28,28,31,0.16) 0%, rgba(11,11,13,0) 52%, rgba(0,0,0,0.2) 100%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(130% 115% at 50% 42%, rgba(11,11,13,0) 50%, rgba(0,0,0,0.2) 78%, rgba(0,0,0,0.34) 100%)" }}
        aria-hidden
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-8">
        <div className="relative mx-auto min-w-0 w-full max-w-[420px] overflow-hidden sm:max-w-[520px] lg:ml-auto lg:mr-0 lg:max-w-[560px]">
          <div
            className="pointer-events-none absolute left-[38%] top-[58%] -z-20 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(97,172,62,0.08)] blur-[82px] sm:h-[210px] sm:w-[210px] lg:h-[240px] lg:w-[240px]"
            aria-hidden
          />
          <div className="relative isolate overflow-hidden md:isolation-auto">
            <div
              className="pointer-events-none absolute left-[44%] top-[46%] -z-10 hidden h-[520px] w-[340px] -translate-x-1/2 -translate-y-1/2 rotate-[-20deg] rounded-[32px] border-[18px] border-white bg-transparent shadow-[0_30px_80px_rgba(0,0,0,0.55)] md:block lg:left-[42%] lg:top-[44%] lg:h-[620px] lg:w-[400px]"
              aria-hidden
            />
            <Image
              src="/csphone.png"
              alt="Chewsavvy app preview on phone"
              width={4688}
              height={4688}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 72vw, 52vw"
              unoptimized
              draggable={false}
              className="pointer-events-none select-none relative z-10 mx-auto block w-[520px] max-w-full translate-x-0 translate-y-0 rotate-0 object-contain drop-shadow-[0_38px_62px_rgba(0,0,0,0.48)] md:hidden sm:w-[560px] sm:translate-x-0 sm:translate-y-0 lg:w-[540px] lg:translate-x-0 lg:translate-y-2"
              priority
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[360px] md:hidden"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,11,13,1) 0%, rgba(11,11,13,0.92) 12%, rgba(11,11,13,0.70) 30%, rgba(11,11,13,0.42) 50%, rgba(11,11,13,0.18) 70%, rgba(11,11,13,0) 100%)",
                transform: "translateZ(0)",
              }}
              aria-hidden
            />
            <Image
              src="/csphone.png"
              alt="Chewsavvy app preview on phone"
              width={4688}
              height={4688}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 72vw, 52vw"
              unoptimized
              draggable={false}
              className="pointer-events-none select-none relative z-10 mx-auto hidden w-[520px] max-w-full translate-x-0 translate-y-0 rotate-0 object-contain drop-shadow-[0_38px_62px_rgba(0,0,0,0.48)] md:block sm:w-[560px] sm:translate-x-0 sm:translate-y-0 lg:w-[540px] lg:translate-x-0 lg:translate-y-2"
              priority
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-[-20px] z-20 hidden h-[220px] bg-gradient-to-b from-[#0B0B0D]/85 via-[#0B0B0D]/35 to-transparent md:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-[240px] bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/85 to-transparent md:block"
              aria-hidden
            />
          </div>
        </div>

        <div className="relative z-40 w-full">
          <div className="relative z-40 ml-auto w-full max-w-[560px] text-right lg:pr-0">
            <h1 className="ml-auto overflow-visible pb-3 text-right text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.18] tracking-tight">
              <span className="block pb-[0.08em] bg-gradient-to-r from-[#74C84A] to-[#E3CB87] bg-clip-text text-transparent">
                Your seat at the
              </span>
              <span className="block pb-[0.08em] bg-gradient-to-r from-[#74C84A] to-[#E3CB87] bg-clip-text text-transparent">
                table is waiting.
              </span>
              <span className="block pb-[0.08em] bg-gradient-to-r from-[#74C84A] to-[#E3CB87] bg-clip-text text-transparent">
                Stay exclusive.
              </span>
            </h1>

            <p className="ml-auto mt-6 text-right text-[1.05rem] leading-relaxed text-white/80 sm:text-[1.1rem]">
              The best dining experiences are reserved for those who know where to look.
            </p>

            <p className="ml-auto mt-6 text-right text-[0.95rem] leading-relaxed text-white/55 sm:text-[1rem]">
              Chewsavvy curates the exceptional deals that others miss, separating the diamond from the rough. Using
              anything else isn&apos;t just a choice&mdash;it&apos;s a disservice to your taste and your time.
            </p>
            <p className="ml-auto mt-6 text-right text-base font-bold text-white sm:text-[1.02rem]">
              Join those who refuse to settle.
            </p>

            <div className="mt-6 flex justify-end sm:mt-6">
              <Link
                href="/coming-soon"
                className="inline-flex min-h-[48px] items-center rounded-xl bg-white px-7 py-3 text-[0.95rem] font-semibold text-[#0B0B0D] shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-white/95"
              >
                Download Our App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
