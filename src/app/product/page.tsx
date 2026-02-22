import type { Metadata } from "next";

import ProductPageClient from "./ProductPageClient";

export const metadata: Metadata = {
  title: "Product",
  description: "Overview of Chewsavvy deal discovery, verified savings, and weekly leaderboard features.",
};

export default function ProductPage() {
  return <ProductPageClient />;
}
