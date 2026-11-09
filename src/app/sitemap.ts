import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

const routes = [
  "", "/about", "/restaurant-deals", "/food-deals-near-me", "/lunch-specials",
  "/dinner-specials", "/restaurant-discounts", "/locations", "/locations/abilene",
  "/for-restaurants", "/how-it-works", "/blog", "/coming-soon", "/support",
  "/contact", "/privacy", "/terms", "/security-privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" || path === "/restaurant-deals" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/restaurant-deals" ? 0.9 : 0.7,
  }));
}
