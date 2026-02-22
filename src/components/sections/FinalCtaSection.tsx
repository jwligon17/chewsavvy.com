import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { chewsavvyContent, type ChewsavvyContent } from "@/content/chewsavvy";

type FinalCtaSectionProps = {
  finalCta: ChewsavvyContent["homePage"]["finalCTA"];
};

export function FinalCtaSection({ finalCta }: FinalCtaSectionProps) {
  const contactHref =
    chewsavvyContent.mainNav.find((item) => item.label === "Contact")?.href ?? finalCta.primaryCta.href;

  return (
    <section className="flex items-start justify-center py-10 sm:py-12" id="platform-overview">
      <Container>
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="max-w-[28ch] text-center text-2xl font-bold leading-tight text-[var(--cs-primary)] sm:text-3xl">
            {finalCta.headline}
          </h2>
          <div className="mt-3 md:mt-5">
            <Link
              href={contactHref}
              className="inline-flex cursor-pointer items-center justify-center rounded-md bg-[var(--cs-primary)] px-5 py-3 text-base font-bold text-white opacity-100 transition hover:bg-[var(--cs-primary-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cs-accent-2)]"
            >
              {finalCta.primaryCta.label}
            </Link>
          </div>
          <p className="text-sm text-[var(--cs-muted)]">{finalCta.supportingText}</p>
        </div>
      </Container>
    </section>
  );
}
