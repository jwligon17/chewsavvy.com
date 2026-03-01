"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { createPortal } from "react-dom";

import { chewsavvyContent } from "@/content/chewsavvy";
import type { MainNavItem, ChewsavvyContent } from "@/content/chewsavvy";
import {
  homeDesktopNavItems,
  madeForOptions,
} from "@/components/layout/homeNavigation";
import { isMarketingDarkRoute } from "@/components/layout/marketingRoutes";

type HeaderProps = {
  content?: ChewsavvyContent;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function columnsClass(count: number) {
  if (count >= 3) return "md:grid-cols-3";
  if (count === 2) return "md:grid-cols-2";
  return "md:grid-cols-2";
}

function getNavHref(item: MainNavItem) {
  if (item.href) return item.href;
  return item.megaMenu?.groups[0]?.links[0]?.href ?? "#";
}

export function Header({ content = chewsavvyContent }: HeaderProps) {
  const pathname = usePathname();
  const isHomeDark = isMarketingDarkRoute(pathname);
  const desktopNav = useMemo(() => content.mainNav, [content.mainNav]);
  const [isMadeForOpen, setIsMadeForOpen] = useState(false);
  const [openDesktopIndex, setOpenDesktopIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);
  const [mounted] = useState(() => typeof window !== "undefined");
  const mobileMadeForOptions = useMemo(() => madeForOptions.slice(0, 3), []);
  const mobileTopLevelLinks = useMemo(
    () => homeDesktopNavItems.map((item) => ({ label: item.label, href: item.href })),
    [],
  );

  const wrapperRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement | null>(null);
  const prevPath = useRef(pathname);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const panelId = useId();
  const madeForPanelId = useId();

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (wrapperRef.current?.contains(target)) return;

      setOpenDesktopIndex(null);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMadeForOpen(false);
        setOpenDesktopIndex((current) => {
          if (current !== null) triggerRefs.current[current]?.focus();
          return null;
        });
        setMobileOpen(false);
      }
    }

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (openDesktopIndex === null) return;

    function onFocusIn(event: FocusEvent) {
      const target = event.target as Node;
      if (!wrapperRef.current?.contains(target)) {
        setOpenDesktopIndex(null);
      }
    }

    window.addEventListener("focusin", onFocusIn);
    return () => {
      window.removeEventListener("focusin", onFocusIn);
    };
  }, [openDesktopIndex]);

  useEffect(() => {
    if (mobileOpen || isMadeForOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, isMadeForOpen]);

  useEffect(() => {
    if (!isMadeForOpen || !isHomeDark) return;

    requestAnimationFrame(() => {
      const firstLink = document.querySelector<HTMLAnchorElement>(`#${madeForPanelId} a[href]`);
      firstLink?.focus();
    });
  }, [isMadeForOpen, isHomeDark, madeForPanelId]);

  const handleDesktopKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const lastIndex = desktopNav.length - 1;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = index === lastIndex ? 0 : index + 1;
      triggerRefs.current[next]?.focus();
      setOpenDesktopIndex(next);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const prev = index === 0 ? lastIndex : index - 1;
      triggerRefs.current[prev]?.focus();
      setOpenDesktopIndex(prev);
    }
    if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
      event.preventDefault();
      setOpenDesktopIndex(index);
      requestAnimationFrame(() => {
        const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>("a[href]");
        firstLink?.focus();
      });
    }
  };
  const closeMadeForMenu = () => {
    setIsMadeForOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };
  const handleCustomersClick = () => {
    setIsMadeForOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };
  const handleBackdropClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    closeMadeForMenu();
  };
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobileIndex(null);
  };

  useEffect(() => {
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      const timer = window.setTimeout(() => {
        closeMobileMenu();
      }, 0);
      return () => {
        window.clearTimeout(timer);
      };
    }
  }, [pathname]);

  if (isHomeDark) {
    return (
      <header className="fixed inset-x-0 top-0 z-[1200] bg-[#0B0B0D]">
        {isMadeForOpen ? (
          <div
            className="fixed inset-0 z-40 hidden bg-[rgba(0,0,0,0.55)] lg:block"
            aria-hidden
            onClick={handleBackdropClick}
          />
        ) : null}

        <div className="mx-auto flex h-[var(--cs-nav-height)] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:grid lg:grid-cols-[auto_auto_1fr] lg:gap-4 lg:px-8">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center overflow-visible no-underline text-[#8E8E97] visited:text-[#8E8E97] hover:text-white/85"
            aria-label="Chewsavvy"
          >
            <Image
              src="/chewsavvywatermark.png"
              alt="Chewsavvy"
              width={332}
              height={105}
              priority
              className="h-12 w-auto opacity-95 brightness-150 contrast-125 sm:h-14 lg:h-16"
            />
          </Link>

          <nav className="hidden justify-self-start lg:block lg:ml-6" aria-label="Home Navigation">
            <ul className="flex items-center gap-7">
              <li>
                <button
                  type="button"
                  aria-expanded={isMadeForOpen}
                  aria-controls={madeForPanelId}
                  onClick={() => setIsMadeForOpen((value) => !value)}
                  className="group inline-flex min-h-[44px] items-center gap-1 text-[13px] font-medium tracking-[0.02em] text-white transition-colors hover:text-white"
                >
                  <span>Made for</span>
                  <svg
                    aria-hidden
                    viewBox="0 0 10 6"
                    className={cn(
                      "h-[5px] w-[8px] shrink-0 self-center text-current transition-transform duration-150",
                      isMadeForOpen && "rotate-180",
                    )}
                    fill="none"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                </button>
              </li>
              {homeDesktopNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeMadeForMenu}
                    className="group inline-flex min-h-[44px] items-center gap-1 no-underline text-[13px] font-medium tracking-[0.02em] !text-white !visited:text-white transition-colors hover:!text-white"
                  >
                    <span>{item.label}</span>
                    {item.hasChevron ? (
                      <svg
                        aria-hidden
                        viewBox="0 0 10 6"
                        className="h-[5px] w-[8px] shrink-0 self-center text-current"
                        fill="none"
                      >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" />
                      </svg>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex lg:justify-self-end">
            <Link
              href="/coming-soon"
              className="inline-flex min-h-[44px] items-center rounded-xl border-2 border-[#E7CA7D] bg-transparent px-4 no-underline text-sm font-medium !text-white !visited:text-white transition-colors hover:bg-[#E7CA7D]/10 hover:!text-white"
            >
              Vendor Portal
            </Link>
            <Link
              href="/coming-soon"
              className="inline-flex min-h-[44px] items-center rounded-xl bg-[#E7CA7D] px-6 no-underline text-sm font-medium text-[#0B0B0D] visited:text-[#0B0B0D] transition-colors hover:bg-[#f2d894] hover:text-[#0B0B0D]"
            >
              Download Our App
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-home-nav"
            onClick={(event) => {
              event.stopPropagation();
              setMobileOpen((value) => !value);
            }}
            className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-[22px] bg-current transition-transform duration-150" />
              <span className="block h-[2px] w-[22px] bg-current transition-opacity duration-150" />
              <span className="block h-[2px] w-[22px] bg-current transition-transform duration-150" />
            </span>
          </button>
        </div>

        <div className="h-px w-full bg-white/10" />

        {isMadeForOpen ? (
          <div
            id={madeForPanelId}
            role="menu"
            aria-label="Made for options"
            className="pointer-events-auto absolute inset-x-0 top-full z-[60] hidden border-y border-[rgba(255,255,255,0.12)] bg-[#0B0B0D] lg:block"
          >
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
              <div className="grid grid-cols-3 gap-8">
                {madeForOptions.map((option) => (
                  <Link
                    key={option.title}
                    href={option.href}
                    onClick={option.title === "Customers" || option.title === "Employees" || option.title === "Vendors" ? handleCustomersClick : closeMadeForMenu}
                    role="menuitem"
                    className="pointer-events-auto group flex flex-col items-center justify-center rounded-xl bg-transparent px-6 py-5 text-center no-underline"
                  >
                    <p className="mb-0 text-base font-semibold leading-none text-center text-white/90 transition-colors group-hover:text-white">
                      {option.title}
                    </p>
                    <p className="mt-0 max-w-[26ch] whitespace-normal text-center text-sm leading-tight text-white/60 transition-colors group-hover:text-white/70">
                      {option.subtitle}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {mobileOpen ? (
          <div className="lg:hidden">
            <div
              className="fixed inset-0 z-[1000] bg-[#0B0B0D]/80"
              aria-hidden
              onClick={closeMobileMenu}
            />
            <div
              id="mobile-home-nav"
              className="fixed inset-x-0 bottom-0 top-[var(--cs-nav-height)] z-[1100] overflow-y-auto bg-[#0B0B0D] px-4 pb-4 pt-2 text-white sm:px-6"
              onClick={(event) => event.stopPropagation()}
            >
              <ul className="space-y-1 text-white">
                <li>
                  <button
                    type="button"
                    aria-expanded={openMobileIndex === 0}
                    aria-controls="mobile-home-made-for"
                    onClick={() => setOpenMobileIndex(openMobileIndex === 0 ? null : 0)}
                    className="flex min-h-[40px] w-full items-center justify-between text-left text-sm text-white"
                  >
                    <span>Made for</span>
                    <svg
                      aria-hidden
                      viewBox="0 0 10 6"
                      className={cn(
                        "h-[6px] w-[10px] text-current transition-transform",
                        openMobileIndex === 0 && "rotate-180",
                      )}
                      fill="none"
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" />
                    </svg>
                  </button>
                  {openMobileIndex === 0 ? (
                    <ul id="mobile-home-made-for" className="space-y-1 pb-3">
                      {mobileMadeForOptions.map((option) => (
                        <li key={option.title}>
                          <Link
                            href={option.href}
                            className="text-white transition-opacity hover:opacity-80"
                            onClick={closeMobileMenu}
                          >
                            {option.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
                {mobileTopLevelLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white transition-opacity hover:opacity-80"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link
                  href="/coming-soon"
                  className="text-white transition-opacity hover:opacity-80"
                  onClick={closeMobileMenu}
                >
                  Vendor Portal
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-white transition-opacity hover:opacity-80"
                  onClick={closeMobileMenu}
                >
                  Download Our App
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    );
  }

  return (
    <header
      ref={wrapperRef}
      className="sticky top-0 z-50 border-b border-[#E6E8EF] bg-white"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center overflow-visible"
          aria-label={content.brand.name}
        >
          <Image
            src="/chewsavvywatermark.png"
            alt="Chewsavvy"
            width={332}
            height={105}
            priority
            className="h-[44px] w-auto sm:h-[56px] lg:h-[64px]"
          />
        </Link>

        <nav className="hidden justify-self-center lg:block" aria-label="Main Navigation">
          <ul className="flex items-center gap-6">
            {desktopNav.map((item, index) => {
              const hasMegaMenu = Boolean(item.megaMenu?.groups?.length);
              const isOpen = openDesktopIndex === index;
              const controls = `${panelId}-${index}`;

              return (
                <li key={item.label}>
                  {hasMegaMenu ? (
                    <button
                      ref={(element) => {
                        triggerRefs.current[index] = element;
                      }}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={controls}
                      onClick={() => setOpenDesktopIndex(isOpen ? null : index)}
                      onFocus={() => setOpenDesktopIndex(index)}
                      onKeyDown={(event) => handleDesktopKeyDown(event, index)}
                      className={cn(
                        "inline-flex min-h-[44px] items-center border-b-2 border-transparent px-0.5 py-0 text-sm font-normal leading-none transition-colors",
                        isOpen
                          ? "border-[var(--cs-primary)] text-[var(--cs-primary)]"
                          : "text-[var(--cs-primary)] hover:border-[var(--cs-primary)] hover:text-[var(--cs-primary)]",
                      )}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={getNavHref(item)}
                      className="inline-flex min-h-[44px] items-center border-b-2 border-transparent px-0.5 py-0 text-sm font-normal text-[var(--cs-primary)] leading-none transition-colors hover:border-[var(--cs-primary)] hover:text-[var(--cs-primary)]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          onClick={(event) => {
            event.stopPropagation();
            setMobileOpen((value) => !value);
          }}
          className="ml-auto inline-flex shrink-0 items-center rounded-md border border-[var(--cs-border)] px-3 py-2 text-sm font-normal text-[var(--cs-primary-2)] lg:hidden"
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex flex-col gap-[5px]">
            <span className="block h-[2px] w-[22px] rounded bg-white"></span>
            <span className="block h-[2px] w-[22px] rounded bg-white"></span>
            <span className="block h-[2px] w-[22px] rounded bg-white"></span>
          </span>
        </button>
      </div>

      {openDesktopIndex !== null && desktopNav[openDesktopIndex]?.megaMenu ? (
        <div
          id={`${panelId}-${openDesktopIndex}`}
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label={`${desktopNav[openDesktopIndex].label} menu`}
          className="absolute inset-x-0 border-y border-[var(--cs-border)] bg-[var(--cs-surface)] shadow-lg"
        >
          <div
            className={cn(
              "mx-auto grid max-w-7xl gap-6 px-4 py-7 sm:px-6 lg:px-8",
              columnsClass(desktopNav[openDesktopIndex].megaMenu!.groups.length),
            )}
          >
            {desktopNav[openDesktopIndex].megaMenu!.groups.map((group) => (
              <div key={group.title}>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--cs-accent)]">
                  {group.title}
                </p>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block rounded-md px-2 py-2 transition hover:bg-[var(--cs-accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cs-accent)]"
                        onClick={() => setOpenDesktopIndex(null)}
                      >
                        <p className="text-sm font-bold text-[var(--cs-primary)]">{link.label}</p>
                        {link.description ? (
                          <p className="mt-0.5 text-sm text-[var(--cs-muted)]">{link.description}</p>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {mobileOpen && mounted
        ? createPortal(
            <div className="lg:hidden">
              <div
                className="pointer-events-auto fixed inset-0 z-[1000] bg-[#0B0B0D]/80"
                aria-hidden
                onClick={closeMobileMenu}
              />
              <div
                ref={mobileDrawerRef}
                id="mobile-nav-drawer"
                className="pointer-events-auto fixed inset-0 z-[1100] w-full overflow-y-auto bg-[#0B0B0D] p-5 text-white shadow-xl"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                onClick={(event) => event.stopPropagation()}
                onPointerDown={(event) => event.stopPropagation()}
              >
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm font-bold text-white">{content.brand.name}</p>
                  <button
                    type="button"
                    onClick={closeMobileMenu}
                    className="rounded-md border border-white/30 px-3 py-1.5 text-sm text-white hover:text-white/85"
                  >
                    Close
                  </button>
                </div>

                <ul className="pointer-events-auto space-y-2">
                  {content.mainNav.map((item, index) => {
                    const groups = item.megaMenu?.groups ?? [];
                    const isOpen = openMobileIndex === index;
                    const accordionId = `mobile-accordion-${index}`;

                    if (!groups.length) {
                      return (
                        <li key={item.label} className="pointer-events-auto">
                          <Link
                            href={getNavHref(item)}
                            className="text-white transition-opacity hover:opacity-80"
                            onClick={closeMobileMenu}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li
                        key={item.label}
                        className="pointer-events-auto rounded-lg border border-white/20"
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={accordionId}
                          onClick={() => setOpenMobileIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-bold text-white hover:text-white/85"
                        >
                          <span>{item.label}</span>
                          <span aria-hidden>{isOpen ? "−" : "+"}</span>
                        </button>

                        {isOpen ? (
                          <div id={accordionId} className="space-y-4 px-4 pb-4">
                            {groups.map((group) => (
                              <div key={group.title}>
                                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/80">
                                  {group.title}
                                </p>
                                <ul className="pointer-events-auto space-y-1">
                                  {group.links.map((link) => (
                                    <li key={link.label} className="pointer-events-auto">
                                      <Link
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className="text-white transition-opacity hover:opacity-80"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
