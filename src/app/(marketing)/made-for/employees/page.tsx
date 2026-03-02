import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Made for Employees",
  description:
    "Chewsavvy gives every approved restaurant team member free access while your deal is live.",
};

export default function MadeForEmployeesPage() {
  return (
    <section className="relative overflow-x-visible bg-[#0B0B0D] text-white md:overflow-x-hidden">
      <div className="relative min-h-[calc(100vh-76px)]">
        <div className="absolute left-0 top-[46%] z-0 hidden h-[520px] w-[340px] -translate-x-[40%] -translate-y-1/2 lg:block lg:h-[620px] lg:w-[420px] xl:h-[680px] xl:w-[460px]">
          <div className="relative h-full w-full rounded-2xl">
            <Image src="/FOH.png?v=4" alt="Front-of-house team member" fill className="h-full w-full rounded-2xl object-cover" priority />
          </div>
        </div>

        <div className="absolute right-0 top-[46%] z-0 hidden h-[520px] w-[340px] translate-x-[40%] -translate-y-1/2 lg:block lg:h-[620px] lg:w-[420px] xl:h-[680px] xl:w-[460px]">
          <div className="relative h-full w-full rounded-2xl">
            <Image src="/BOH.png?v=4" alt="Back-of-house team member" fill className="h-full w-full rounded-2xl object-cover" priority />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-0 max-w-7xl items-start justify-center px-6 pt-0 pb-10 sm:px-8 md:min-h-[calc(100vh-76px)] md:items-center md:pt-8 lg:px-12">
          <div className="relative z-10 mx-auto mt-0 flex w-full max-w-3xl flex-col items-center text-center md:mt-0 lg:-translate-y-6">
            <p className="text-sm font-light tracking-wide text-white/60">Made for Employees</p>

            <h1 className="mt-4 bg-gradient-to-r from-[#61AC3E] to-[#E7CA7D] bg-clip-text text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[0.98] text-transparent">
              FOH, BOH, or Management.
              <br />
              You deserve it.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85">
              When your restaurant gets approved as a vendor with Chewsavvy, your entire team gets access to Chewsavvy.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">
              You put in the work to make every shift run well. Enjoy a free Chewsavvy membership while your restaurant has an active
              deal listed in the app.
            </p>

            <div className="mt-10">
              <Link
                href="/vendor"
                className="inline-flex min-h-[48px] items-center rounded-full border border-[#E7CA7D] px-8 text-sm font-medium tracking-wide !text-white transition-colors duration-200 hover:!text-white hover:bg-[#E7CA7D]/10"
              >
                Vendor Portal
              </Link>
            </div>

            <div className="mx-auto mt-8 w-[108%] -translate-x-[4%] md:hidden">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <Image
                    src="/FOH.png?v=4"
                    alt="Front-of-house team member"
                    fill
                    className="object-cover"
                    sizes="54vw"
                  />
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <Image
                    src="/BOH.png?v=4"
                    alt="Back-of-house team member"
                    fill
                    className="object-cover"
                    sizes="54vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
