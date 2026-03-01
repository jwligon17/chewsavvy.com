export type HomeNavLink = {
  label: string;
  href: string;
  hasChevron?: boolean;
};

export const homeDesktopNavItems: HomeNavLink[] = [
  { label: "Features", href: "/features", hasChevron: true },
  { label: "FAQ", href: "/faq", hasChevron: false },
  { label: "Support", href: "/support", hasChevron: false },
];

export const madeForOptions = [
  {
    title: "Customers",
    subtitle: "Sort through deals, find your taste, save money",
    href: "/made-for/customers",
  },
  {
    title: "Employees",
    subtitle: "Enjoy the perks, and keep updated",
    href: "/made-for/employees",
  },
  {
    title: "Vendors",
    subtitle: "Stay organized, fill seats, see insights",
    href: "/made-for/vendors",
  },
];
