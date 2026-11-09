import Image from "next/image";
import Link from "next/link";

import { APP_HREF, NAV_ITEMS, VENDOR_SIGNUP_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-pattern" aria-hidden="true" />
      <div className="site-container footer-grid">
        <div>
          <Link href="/" aria-label="Chewsavvy home"><Image src="/brand/chewsavvy-primary-white.svg" width={250} height={88} alt="Chewsavvy" /></Link>
          <p>Discover local restaurant deals, plan a meal, and make more of every dining budget.</p>
        </div>
        <nav aria-label="Explore Chewsavvy"><h2>Explore</h2>{NAV_ITEMS.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        <nav aria-label="Chewsavvy access and support">
          <h2>Access</h2><Link href={APP_HREF}>Get the App</Link><a href={VENDOR_SIGNUP_URL}>List Your Restaurant</a><a href={VENDOR_SIGNUP_URL}>Vendor Portal</a><Link href="/support">Support</Link><Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="site-container footer-bottom">
        <p>© {new Date().getFullYear()} Chewsavvy. All rights reserved.</p>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
    </footer>
  );
}
