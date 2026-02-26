export function FaqSupportSection() {
  const faqItems = [
    {
      question: "How do I download the Chewsavvy app?",
      answer: "Use the Download Our App buttons on this page to get access to the latest app release.",
    },
    {
      question: "Can restaurants join as vendors?",
      answer: "Yes. Start from the Vendor Portal and submit your information for onboarding review.",
    },
    {
      question: "Do consumers pay to use Chewsavvy?",
      answer: "Core access is designed to make discovering standout dining deals simple and approachable.",
    },
  ];

  return (
    <section className="bg-[#0B0B0D] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <section id="faq" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            FAQ
          </h2>
          <div className="mt-6 space-y-5">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A7A7AE] sm:text-base">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="support" aria-labelledby="support-heading">
          <h2 id="support-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Support
          </h2>
          <p className="mt-4 text-base text-[#A7A7AE]">
            Questions? Email{" "}
            <a href="mailto:info@chewsavvy.com" className="text-white underline decoration-white/40 underline-offset-4">
              info@chewsavvy.com
            </a>
          </p>
        </section>
      </div>
    </section>
  );
}
