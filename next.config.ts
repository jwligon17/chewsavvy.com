import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostnames only (no protocol/port) for Next.js dev origin checks.
  allowedDevOrigins: ["192.168.1.164", "192.168.5.254"],
  images: {
    localPatterns: [
      {
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/company/about", destination: "/about", permanent: true },
      { source: "/platform", destination: "/how-it-works", permanent: true },
      { source: "/product", destination: "/how-it-works", permanent: true },
      { source: "/solutions", destination: "/restaurant-deals", permanent: true },
      { source: "/features", destination: "/how-it-works", permanent: true },
      { source: "/faq", destination: "/#faqs", permanent: true },
      { source: "/made-for/customers", destination: "/restaurant-deals", permanent: true },
      { source: "/made-for/employees", destination: "/restaurant-deals", permanent: true },
      { source: "/made-for/vendors", destination: "/for-restaurants", permanent: true },
      { source: "/resources/:path*", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
