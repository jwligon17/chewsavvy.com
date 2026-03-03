"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { chewsavvyContent } from "@/content/chewsavvy";
import type { ChewsavvyContent } from "@/content/chewsavvy";
import { homeDesktopNavItems, madeForOptions } from "@/components/layout/homeNavigation";

type FooterProps = {
  content?: ChewsavvyContent;
};

export function Footer({ content = chewsavvyContent }: FooterProps) {
  const pathname = usePathname();
  const isHomeDark =
    pathname === "/" ||
    pathname === "/made-for" ||
    pathname.startsWith("/made-for/") ||
    pathname === "/faq" ||
    pathname === "/features" ||
    pathname === "/support" ||
    pathname === "/contact" ||
    pathname === "/coming-soon";
  const hideStaySavvy = pathname.startsWith("/made-for");
  const showStaySavvy = pathname === "/" && !hideStaySavvy;
  const year = new Date().getFullYear();
  const { footer } = content;
  const consumerDescription =
    "Chewsavvy brings scattered deals into one daily feed so you can clip, redeem, and climb the weekly leaderboard.";
  const hasEmail = footer.contact.email.trim().length > 0;
  const hasLocation = footer.contact.location.trim().length > 0;
  const hasPhone = footer.contact.phone.trim().length > 0;
  const footerLinkClass =
    "font-medium text-[color:color-mix(in_srgb,white_96%,var(--cs-accent-2))] visited:text-[color:color-mix(in_srgb,white_96%,var(--cs-accent-2))] underline decoration-white/35 decoration-1 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cs-accent)]";

  if (isHomeDark) {
    const homeLinks = [
      { label: "Made for", href: madeForOptions[0]?.href ?? "/made-for/customers" },
      ...homeDesktopNavItems.map(({ label, href }) => ({ label, href })),
    ].filter((link) => link.label !== "Blog");

    return (
      <footer className="bg-[#0B0B0D] text-white">
        <div className="border-t border-white/[0.12]">
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8 lg:pb-14">
            {showStaySavvy ? (
              <p className="text-center text-[clamp(2rem,5vw,3.3rem)] font-light tracking-tight text-white">
                stay savvy.
              </p>
            ) : null}

            <div className="mt-10 grid gap-y-3 md:grid-cols-[1fr_auto] md:items-baseline md:gap-x-8">
              <div className="md:hidden">
                <Link
                  href="/"
                  className="-ml-[4px] flex w-fit items-start"
                  aria-label="Chewsavvy home"
                >
                  <Image
                    src="/chewsavvywatermark.png"
                    alt="Chewsavvy"
                    width={332}
                    height={105}
                    className="h-10 w-auto [filter:brightness(0)_invert(1)_contrast(1.15)]"
                  />
                </Link>
                <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-white/85">
                  Curating the best deals and a better experience from app, to table, to &quot;time for the check&quot;.
                </p>
              </div>

              <Link href="/" className="hidden md:mt-2 md:inline-flex md:items-center" aria-label="Chewsavvy home">
                <Image
                  src="/chewsavvywatermark.png"
                  alt="Chewsavvy"
                  width={332}
                  height={105}
                  className="h-10 w-auto sm:h-12 lg:h-14 [filter:brightness(0)_invert(1)_contrast(1.15)]"
                />
              </Link>
              <nav aria-label="Footer links" className="order-2 md:order-none md:justify-self-end">
                <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#A7A7AE] md:justify-end lg:flex-nowrap">
                  {homeLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[#A7A7AE] visited:text-[#A7A7AE] transition-colors hover:text-white/85"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <p className="hidden max-w-[44ch] text-sm leading-relaxed text-[#CFCFD5] md:block">
                Curating the best deals and a better experience
              </p>
              <a
                href="mailto:admin@chewsavvy.com"
                className="order-3 text-sm leading-relaxed text-white/80 transition-colors hover:text-white md:order-none md:justify-self-end"
              >
                admin@chewsavvy.com
              </a>

              <p className="hidden max-w-[44ch] text-sm leading-relaxed text-[#CFCFD5] md:block">
                from app, to table, to &quot;time for the check&quot;.
              </p>
              <p className="order-4 text-sm leading-relaxed text-white/65 md:order-none md:justify-self-end">
                A Texas Limited Liability Corporation
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2E5BFF] to-[#E7CA7D]">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm sm:px-6 lg:px-8">
            <p className="text-white">{`© ${year} Chewsavvy. All rights reserved.`}</p>
            <p className="text-black/80">
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </p>
          </div>
        </div>
      </footer>
    );
  }

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
