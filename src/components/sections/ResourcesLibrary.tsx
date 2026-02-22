"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Card } from "@/components/ui/Card";
import type { ChewsavvyContent } from "@/content/chewsavvy";

type ResourcesLibraryProps = {
  resources: ChewsavvyContent["resourcesPage"];
  initialCategory?: string;
};

export function ResourcesLibrary({ resources, initialCategory }: ResourcesLibraryProps) {
  const initial =
    initialCategory && resources.categories.includes(initialCategory as (typeof resources.categories)[number])
      ? initialCategory
      : resources.allFilterLabel;
  const [activeCategory, setActiveCategory] = useState<string>(initial);

  const filteredResources = useMemo(() => {
    if (activeCategory === resources.allFilterLabel) return resources.items;
    return resources.items.filter((item) => item.category === activeCategory);
  }, [activeCategory, resources]);

  return (
    <>
      <div className="mt-8">
        <p className="mb-3 text-sm font-bold text-[var(--cs-muted)]">{resources.filterLabel}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(resources.allFilterLabel)}
            className={
              activeCategory === resources.allFilterLabel
                ? "rounded-md bg-[var(--cs-primary)] px-3 py-1.5 text-sm font-bold text-[var(--cs-text-inverse)]"
                : "rounded-md border border-[var(--cs-border)] bg-[var(--cs-surface)] px-3 py-1.5 text-sm text-[var(--cs-muted)]"
            }
          >
            {resources.allFilterLabel}
          </button>
          {resources.categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "rounded-md bg-[var(--cs-primary)] px-3 py-1.5 text-sm font-bold text-[var(--cs-text-inverse)]"
                  : "rounded-md border border-[var(--cs-border)] bg-[var(--cs-surface)] px-3 py-1.5 text-sm text-[var(--cs-muted)]"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredResources.map((resource) => (
          <Card key={resource.slug} className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--cs-accent)]">
                {resource.category}
              </p>
              <h2 className="mt-2 text-lg font-bold text-[var(--cs-primary)]">{resource.title}</h2>
              <p className="mt-2 text-sm text-[var(--cs-muted)]">{resource.summary}</p>
            </div>
            <Link
              href={resource.href}
              className="mt-6 inline-flex text-sm font-bold text-[var(--cs-primary)] underline decoration-[var(--cs-accent)] underline-offset-4 transition hover:decoration-[var(--cs-primary)]"
            >
              {resources.cardLinkLabel}
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}

