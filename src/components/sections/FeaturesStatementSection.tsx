import Link from "next/link";

export function FeaturesStatementSection() {
  return (
    <section id="features" className="bg-[#0B0B0D]">
      <div id="download" aria-hidden className="h-0" />
      <div className="mx-auto max-w-7xl border-t border-white/[0.12] px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center">
            <h2 className="mx-auto text-center text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-[1.1] tracking-tight whitespace-normal break-words">
              <span className="block bg-gradient-to-r from-[#2E5BFF] via-[#6A5BFF] to-[#E7CA7D] bg-clip-text text-transparent lg:whitespace-nowrap">
                We don&apos;t save the best bite for last.
              </span>
              <span className="block bg-gradient-to-r from-[#2E5BFF] via-[#6A5BFF] to-[#E7CA7D] bg-clip-text text-transparent lg:whitespace-nowrap">
                It&apos;s time for better food and the
              </span>
              <span className="block bg-gradient-to-r from-[#2E5BFF] via-[#6A5BFF] to-[#E7CA7D] bg-clip-text text-transparent">
                best deals.
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/coming-soon"
            className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] border border-[#E7CA7D] bg-transparent px-5 text-sm font-medium text-white !text-white visited:text-white hover:text-white transition-colors hover:bg-[#E7CA7D]/10"
          >
            Vendor Portal
          </Link>
          <Link
            href="/coming-soon"
            className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-[#E7CA7D] px-5 text-sm font-medium text-[#0B0B0D] transition-colors hover:bg-[#f2d894]"
          >
            Download Our App
          </Link>
        </div>
      </div>
    </section>
  );
}
