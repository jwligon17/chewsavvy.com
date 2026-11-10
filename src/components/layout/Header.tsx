"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { APP_HREF, NAV_ITEMS, VENDOR_SIGNUP_URL } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1041px)");
    const closeAtDesktopWidth = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktopQuery.addEventListener("change", closeAtDesktopWidth);
    return () => desktopQuery.removeEventListener("change", closeAtDesktopWidth);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="/" className="brand-link" aria-label="Chewsavvy home">
          <Image src="/brand/chewsavvy-primary-teal.svg" width={240} height={84} alt="Chewsavvy" priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="portal-link" href={VENDOR_SIGNUP_URL}>Vendor Portal</a>
          <Link className="button button-primary button-small" href={APP_HREF}>Get the App</Link>
          <a className="button button-secondary button-small" href={VENDOR_SIGNUP_URL}>List Your Restaurant</a>
        </div>
        <button ref={menuButtonRef} className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
      {open && typeof document !== "undefined" ? createPortal(
        <div id="mobile-navigation" className="mobile-nav">
          <button className="mobile-nav-backdrop" type="button" aria-label="Close navigation" onClick={closeMenu} />
          <nav className="site-container" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item, index) => <Link ref={index === 0 ? firstMobileLinkRef : undefined} key={item.href} href={item.href} onClick={closeMenu}>{item.label}</Link>)}
            <a href={VENDOR_SIGNUP_URL} onClick={closeMenu}>Vendor Portal</a>
            <Link className="button button-primary" href={APP_HREF} onClick={closeMenu}>Get the App</Link>
            <a className="button button-secondary" href={VENDOR_SIGNUP_URL} onClick={closeMenu}>List Your Restaurant</a>
          </nav>
        </div>,
        document.body,
      ) : null}
    </header>
  );
}
