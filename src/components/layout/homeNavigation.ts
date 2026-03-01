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

export type HomeMobileNavItem = {
  label: string;
  href?: string;
  hasChevron?: boolean;
  children?: Array<{
    label: string;
    href: string;
  }>;
};

export const homeMobileNavItems: HomeMobileNavItem[] = [
  {
    label: "Made for",
    hasChevron: true,
    children: madeForOptions.map((option) => ({
      label: option.title,
      href: option.href,
    })),
  },
  ...homeDesktopNavItems.map((item) => ({
    label: item.label,
    href: item.href,
    hasChevron: item.hasChevron,
  })),
];
