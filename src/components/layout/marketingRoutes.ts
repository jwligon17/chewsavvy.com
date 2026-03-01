export function isMarketingDarkRoute(pathname: string | null): boolean {
  if (!pathname) return false;

  return (
    pathname === "/" ||
    pathname === "/made-for" ||
    pathname.startsWith("/made-for/") ||
    pathname === "/faq" ||
    pathname === "/features" ||
    pathname === "/support" ||
    pathname === "/contact" ||
    pathname === "/coming-soon"
  );
}
