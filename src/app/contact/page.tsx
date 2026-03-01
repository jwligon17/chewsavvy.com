import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Chewsavvy for vendor program and onboarding information.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#0B0B0D] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <header className="mx-auto max-w-5xl text-center">
          <h1 className="text-[clamp(2.2rem,4.5vw,4rem)] font-light leading-[1.1] tracking-tight text-white">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 text-base leading-relaxed text-white/70 sm:text-lg lg:max-w-[58rem]">
            <span>If you&apos;d like more information about our Vendor Program (while available in your area)</span>
            <br className="hidden lg:block" />
            <span>or general information about onboarding, please fill out the information below.</span>
          </p>
        </header>

        <form className="mx-auto mt-12 w-full max-w-[980px] rounded-2xl border border-white/20 bg-[#101014] p-6 sm:p-8 lg:p-10">
          <div className="space-y-6 text-left">
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium text-white/85">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                className="mt-2 h-12 w-full rounded-lg border border-white/25 bg-[#0B0B0D] px-4 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/50"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="text-sm font-medium text-white/85">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className="mt-2 h-12 w-full rounded-lg border border-white/25 bg-[#0B0B0D] px-4 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/50"
              />
            </div>

            <div>
              <label htmlFor="contact-organization" className="text-sm font-medium text-white/85">
                Organization
              </label>
              <input
                id="contact-organization"
                type="text"
                className="mt-2 h-12 w-full rounded-lg border border-white/25 bg-[#0B0B0D] px-4 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/50"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="text-sm font-medium text-white/85">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={6}
                className="mt-2 w-full rounded-lg border border-white/25 bg-[#0B0B0D] px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/50"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-start">
            <button
              type="button"
              className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-5 text-sm font-medium text-[#0B0B0D] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
