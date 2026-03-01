import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This Chewsavvy page is coming soon.",
};

export default function ComingSoonPage() {
  return (
    <section className="bg-[#0B0B0D] text-white">
      <div className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <p
          className="max-w-4xl text-[clamp(2rem,5.5vw,4.75rem)] font-light leading-[1.05] tracking-tight"
          style={{
            background: "linear-gradient(90deg, #2E5BFF, #E7CA7D)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span className="md:block">We&apos;re cooking </span>
          <span className="md:block">this up. We&apos;ll have </span>
          <span className="md:block">this one ready soon</span>
        </p>
      </div>
    </section>
  );
}
