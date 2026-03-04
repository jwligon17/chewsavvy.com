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
};

export default nextConfig;
