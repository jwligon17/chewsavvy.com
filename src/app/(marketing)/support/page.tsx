import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Support and troubleshooting for Chewsavvy.",
};

export default function SupportPage() {
  return (
    <section className="bg-[#0B0B0D] text-white">
      <div className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl flex-col items-center px-4 pb-14 pt-10 text-center sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <h1 className="text-[clamp(2rem,4.6vw,4.1rem)] font-light leading-[1.1] tracking-tight text-white">
          Support and Troubleshooting
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
          Drop us an email. We&apos;ll contact you as soon as possible to answer any questions you have.
        </p>

        <a
          href="mailto:info@chewsavvy.com?subject=Support%20Request"
          className="mt-12 inline-flex h-20 w-full max-w-2xl items-center justify-center rounded-xl bg-white px-8 text-lg font-medium text-[#0B0B0D] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
