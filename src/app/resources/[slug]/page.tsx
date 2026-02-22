import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { chewsavvyContent } from "@/content/chewsavvy";

type ResourceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return chewsavvyContent.resourcesPage.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ResourceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = chewsavvyContent.resourcesPage.items.find((item) => item.slug === slug);

  if (!resource) {
    return {
      title: "Resource Not Found",
      description: "The requested Chewsavvy resource could not be found.",
    };
  }

  return {
    title: resource.title,
    description: resource.summary,
  };
}

export default async function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const { slug } = await params;

  const resource = chewsavvyContent.resourcesPage.items.find((item) => item.slug === slug);
  if (!resource) notFound();

  return (
    <section className="py-16">
      <Container className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--cs-accent)]">{resource.category}</p>
        <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-[var(--cs-primary)]">
          {resource.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--cs-muted)]">{resource.summary}</p>

        <article className="mt-8 space-y-4 rounded-2xl border border-[var(--cs-border)] bg-[var(--cs-surface)] p-8 shadow-sm">
          {resource.body.map((paragraph) => (
            <p key={paragraph} className="text-sm text-[var(--cs-muted)]">
              {paragraph}
            </p>
          ))}
        </article>

        <Link
          href="/resources"
          className="mt-8 inline-flex text-sm font-bold text-[var(--cs-primary)] underline decoration-[var(--cs-accent)] underline-offset-4 transition hover:decoration-[var(--cs-primary)]"
        >
          Back to resources
        </Link>
      </Container>
    </section>
  );
}
