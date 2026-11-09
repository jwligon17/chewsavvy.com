"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { APP_HREF, NAV_ITEMS, VENDOR_SIGNUP_URL } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
        <button className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
      {open ? (
        <div id="mobile-navigation" className="mobile-nav">
          <nav className="site-container" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <a href={VENDOR_SIGNUP_URL}>Vendor Portal</a>
            <Link className="button button-primary" href={APP_HREF}>Get the App</Link>
            <a className="button button-secondary" href={VENDOR_SIGNUP_URL}>List Your Restaurant</a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
