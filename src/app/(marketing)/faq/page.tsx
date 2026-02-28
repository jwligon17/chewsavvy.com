import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about how Chewsavvy works and support details.",
};

type FaqItem = {
  question: string;
  answer: string;
};

const introFaqs: FaqItem[] = [
  {
    question: "What makes this app different from other deal platforms?",
    answer:
      "Most platforms focus on volume, blasting you with mediocre discounts for places you wouldn't normally eat. We focus entirely on value and quality. We partner exclusively with top-tier, highly-rated restaurants to offer curated deals that are actually worth your time and money. It's about dining better, not just eating cheaper.",
  },
  {
    question: "How do you choose which restaurants are featured?",
    answer:
      "We have a strict vetting process. We only partner with establishments known for exceptional food, great atmosphere, and reliable service. If a restaurant doesn't meet our standard for a high-quality dining experience, you won't find them on our platform.",
  },
  {
    question: "Are these deals available to everyone?",
    answer:
      "While the app is free to download, the deals themselves are often limited in quantity or time to protect the premium experience for both our users and our restaurant partners. Checking the app regularly ensures you don't miss out on the best offers before they are claimed.",
  },
];

const usingAppFaqs: FaqItem[] = [
  {
    question: "How do I redeem a deal at the restaurant?",
    answer:
      "We've made the process completely frictionless. No printing vouchers or awkward conversations. Simply claim the deal in the app, and when it's time to pay, show your server the active redemption screen.",
  },
  {
    question: "Are there restrictions on when I can use the deals?",
    answer:
      "To offer these high-value experiences, some restaurants may have specific redemption windows (like excluding major holidays or peak weekend hours). However, we require all our partners to be completely transparent. Any specific times or restrictions are always clearly stated upfront on the deal's page.",
  },
  {
    question: "Do I have to pay a subscription fee to access the best deals?",
    answer:
      "Our core platform is completely free to use. You only pay for the food you order at the restaurant. (Note: If you plan to add a premium tier later, you can adjust this to: \"We offer a free tier with incredible value, as well as a premium membership for users who want first access to highly exclusive, limited-run offers.\")",
  },
];

const supportFaqs: FaqItem[] = [
  {
    question: "What happens if a restaurant won't honor the deal?",
    answer:
      "We hold our restaurant partners to the same high standards we hold ourselves. If you ever experience an issue redeeming a valid offer, reach out to our support team immediately through the app. We will make it right and review the partner's status on our platform.",
  },
  {
    question: "How often are new deals added?",
    answer:
      "Our curated list is updated constantly. As deals are claimed, new ones take their place. We recommend turning on push notifications so you are the first to know when a highly anticipated restaurant drops a new offer.",
  },
];

function FaqBlock({ question, answer }: FaqItem) {
  return (
    <article className="space-y-3">
      <h2 className="text-2xl font-light leading-tight tracking-tight text-white sm:text-[1.75rem]">
        {question}
      </h2>
      <p className="text-sm leading-relaxed text-white/80 sm:text-base">{answer}</p>
    </article>
  );
}

export default function FaqPage() {
  return (
    <section className="bg-[#0B0B0D] text-white">
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-20">
        <h1 className="text-center text-[clamp(2rem,4vw,3.2rem)] font-light tracking-tight text-white">
          Frequently Asked Questions
        </h1>

        <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
          {introFaqs.map((item) => (
            <FaqBlock key={item.question} question={item.question} answer={item.answer} />
          ))}

          <h2 className="pt-2 text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">Using the App</h2>

          {usingAppFaqs.map((item) => (
            <FaqBlock key={item.question} question={item.question} answer={item.answer} />
          ))}

          <h2 className="pt-2 text-2xl font-light tracking-tight text-white sm:text-[1.75rem]">
            Troubleshooting &amp; Support
          </h2>

          {supportFaqs.map((item) => (
            <FaqBlock key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="mt-14 flex justify-center sm:mt-16">
          <Link
            href="#download"
            className="inline-flex min-h-[48px] items-center rounded-full bg-white px-7 text-sm font-semibold tracking-[0.01em] text-[#0B0B0D] no-underline shadow-[0_8px_24px_rgba(255,255,255,0.16)] transition-transform duration-200 hover:-translate-y-0.5 hover:text-[#0B0B0D]"
          >
            Download Our App
          </Link>
        </div>
      </div>

      <div id="download" className="h-0" aria-hidden />
    </section>
  );
}
