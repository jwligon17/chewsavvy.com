import type { Metadata } from "next";
import { ContactPageForm } from "./ContactPageForm";

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

        <ContactPageForm />
      </div>
    </section>
  );
}
