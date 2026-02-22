"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { createPortal } from "react-dom";

import { chewsavvyContent } from "@/content/chewsavvy";
import type { MainNavItem, ChewsavvyContent } from "@/content/chewsavvy";

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
  const desktopNav = useMemo(() => content.mainNav, [content.mainNav]);
  const [openDesktopIndex, setOpenDesktopIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);
  const [mounted] = useState(() => typeof window !== "undefined");

  const wrapperRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const panelId = useId();

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (mobileOpen && mobileDrawerRef.current?.contains(target)) return;
      if (wrapperRef.current?.contains(target)) return;

      setOpenDesktopIndex(null);
      setMobileOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
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
  }, [mobileOpen]);

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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMobileOpen((value) => !value)}
          className="ml-auto inline-flex shrink-0 items-center rounded-md border border-[var(--cs-border)] px-3 py-2 text-sm font-normal text-[var(--cs-primary-2)] lg:hidden"
        >
          Menu
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
                className="pointer-events-auto fixed inset-0 z-[1000] bg-[color:color-mix(in_srgb,var(--cs-primary)_55%,transparent)]"
                aria-hidden
                onClick={() => setMobileOpen(false)}
              />
              <div
                ref={mobileDrawerRef}
                id="mobile-nav-drawer"
                className="pointer-events-auto fixed inset-y-0 right-0 z-[1100] w-full max-w-sm overflow-y-auto border-l border-[var(--cs-border)] bg-[var(--cs-surface)] p-5 shadow-xl"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
              >
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm font-bold text-[var(--cs-primary)]">{content.brand.name}</p>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md border border-[var(--cs-border)] px-3 py-1.5 text-sm text-[var(--cs-muted)]"
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
                            className="pointer-events-auto block rounded-md border border-[var(--cs-border)] px-4 py-3 text-sm font-normal text-[var(--cs-primary-2)]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li
                        key={item.label}
                        className="pointer-events-auto rounded-lg border border-[var(--cs-border)]"
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={accordionId}
                          onClick={() => setOpenMobileIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-bold text-[var(--cs-primary)]"
                        >
                          <span>{item.label}</span>
                          <span aria-hidden>{isOpen ? "−" : "+"}</span>
                        </button>

                        {isOpen ? (
                          <div id={accordionId} className="space-y-4 px-4 pb-4">
                            {groups.map((group) => (
                              <div key={group.title}>
                                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--cs-accent)]">
                                  {group.title}
                                </p>
                                <ul className="pointer-events-auto space-y-1">
                                  {group.links.map((link) => (
                                    <li key={link.label} className="pointer-events-auto">
                                      <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="pointer-events-auto block rounded-md px-2 py-2 text-sm text-[var(--cs-muted)] transition hover:bg-[var(--cs-accent-2)]"
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
