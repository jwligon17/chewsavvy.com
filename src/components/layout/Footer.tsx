import Link from "next/link";

import { chewsavvyContent } from "@/content/chewsavvy";
import type { ChewsavvyContent } from "@/content/chewsavvy";

type FooterProps = {
  content?: ChewsavvyContent;
};

export function Footer({ content = chewsavvyContent }: FooterProps) {
  const year = new Date().getFullYear();
  const { footer } = content;
  const consumerDescription =
    "Chewsavvy brings scattered deals into one daily feed so you can clip, redeem, and climb the weekly leaderboard.";
  const hasEmail = footer.contact.email.trim().length > 0;
  const hasLocation = footer.contact.location.trim().length > 0;
  const hasPhone = footer.contact.phone.trim().length > 0;
  const footerLinkClass =
    "font-medium text-[color:color-mix(in_srgb,white_96%,var(--cs-accent-2))] visited:text-[color:color-mix(in_srgb,white_96%,var(--cs-accent-2))] underline decoration-white/35 decoration-1 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cs-accent)]";

  return (
    <footer className="bg-[var(--cs-primary)] text-[var(--cs-text-inverse)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <section aria-label={`${content.brand.name} overview`}>
          <Link
            href="/"
            className="inline-flex text-[1.7rem] font-bold tracking-tight leading-none text-[var(--cs-text-inverse)] no-underline hover:no-underline"
            aria-label={`${content.brand.name} home`}
          >
            Chewsavvy
          </Link>
          <p className="mt-3 max-w-[58ch] text-sm leading-7 text-[color:color-mix(in_srgb,white_92%,var(--cs-accent-2))]">
            {consumerDescription}
          </p>
          {hasEmail || hasLocation || hasPhone ? (
            <ul className="mt-6 space-y-3 text-sm text-[color:color-mix(in_srgb,white_90%,var(--cs-accent-2))]">
              {hasEmail ? (
                <li>
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className={`${footerLinkClass} text-base`}
                  >
                    {footer.contact.email}
                  </a>
                </li>
              ) : null}
              {hasLocation ? <li>{footer.contact.location}</li> : null}
              {hasPhone ? (
                <li>
                  <a
                    href={`tel:${footer.contact.phone}`}
                    className={footerLinkClass}
                  >
                    {footer.contact.phone}
                  </a>
                </li>
              ) : null}
            </ul>
          ) : null}
        </section>

        <nav aria-label="Footer links">
          <ul className="grid gap-3 sm:grid-cols-2">
            {footer.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-sm ${footerLinkClass}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-[color:color-mix(in_srgb,white_90%,var(--cs-accent-2))] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>{`© ${year} ${content.brand.name}. All rights reserved.`}</p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center gap-4 text-sm">
              {footer.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${footerLinkClass} font-medium`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
