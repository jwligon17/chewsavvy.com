import type { MetadataRoute } from "next";

import { chewsavvyContent } from "@/content/chewsavvy";

const siteUrl = "https://chewsavvy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/platform", "/solutions", "/resources", "/company/about", "/contact"];
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const resourceEntries: MetadataRoute.Sitemap = chewsavvyContent.resourcesPage.items.map((item) => ({
    url: `${siteUrl}/resources/${item.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...resourceEntries];
}
