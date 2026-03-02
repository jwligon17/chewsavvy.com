import Image from "next/image";
import Link from "next/link";

export function MadeForSection() {
  const vendorHref = "/coming-soon";

  return (
    <section id="made-for" className="bg-[#0B0B0D] px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative min-h-[500px] overflow-hidden rounded-[22px] md:hidden">
          <Image
            src="/food.png"
            alt=""
            fill
            className="object-cover object-[center_35%]"
            sizes="100vw"
            priority={false}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.58)_42%,rgba(0,0,0,0.68)_100%)]"
            aria-hidden
          />

          <div className="relative z-10 max-w-2xl px-6 py-10">
            <h2 className="text-3xl font-light leading-[1.08] tracking-tight text-white">
              Hey Restaurants,
              <br />
              You deserve better.
            </h2>

            <p className="mt-5 text-[0.97rem] leading-relaxed text-white/90">
              You shouldn&apos;t be paying just for
              <br />
              potential patrons to see a deal, much
              <br />
              less having to train your team on how
              <br />
              to use a complicated deal app.
              <br />
              <br />
              Apply to be a Vendor today. You won&apos;t
              <br />
              be charged. <strong>And you never will.</strong>
            </p>

            <div className="mt-7">
              <Link
                href={vendorHref}
                className="inline-flex min-h-[44px] items-center rounded-[10px] border border-[#E7CA7D] bg-transparent px-5 text-sm font-medium text-white !text-white visited:text-white transition-colors hover:bg-[#E7CA7D]/10 hover:text-white focus:text-white focus-visible:text-white active:text-white"
              >
                Vendor Portal
              </Link>
            </div>
          </div>
        </div>

        <div
          className="relative hidden overflow-hidden rounded-[22px] bg-center bg-[length:105%] sm:bg-[length:110%] md:block lg:min-h-[540px]"
          style={{ backgroundImage: "url('/food.png')" }}
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.55)_52%,rgba(0,0,0,0.14)_100%)]"
            aria-hidden
          />

          <div className="relative z-10 max-w-2xl px-6 py-10 sm:px-9 sm:py-12 lg:px-12 lg:py-16">
            <h2 className="text-3xl font-light leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Hey Restaurants,
              <br />
              You deserve better.
            </h2>

            <p className="mt-5 text-[0.97rem] leading-relaxed text-white/90 sm:text-base">
              You shouldn&apos;t be paying just for
              <br />
              potential patrons to see a deal, much
              <br />
              less having to train your team on how
              <br />
              to use a complicated deal app.
              <br />
              <br />
              Apply to be a Vendor today. You won&apos;t
              <br />
              be charged. <strong>And you never will.</strong>
            </p>

            <div className="mt-7">
              <Link
                href={vendorHref}
                className="inline-flex min-h-[44px] items-center rounded-[10px] border border-[#E7CA7D] bg-transparent px-5 text-sm font-medium text-white !text-white visited:text-white transition-colors hover:bg-[#E7CA7D]/10 hover:text-white focus:text-white focus-visible:text-white active:text-white"
              >
                Vendor Portal
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
