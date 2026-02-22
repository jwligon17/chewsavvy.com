import { Container } from "@/components/ui/Container";
import type { ChewsavvyContent } from "@/content/chewsavvy";

type StatsStripProps = {
  stats: ChewsavvyContent["homePage"]["stats"];
};

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <section className="border-b border-[var(--cs-border)] bg-[var(--cs-primary)] py-12 text-[var(--cs-text-inverse)]">
      <Container>
        <h2 className="text-balance text-2xl font-bold md:text-3xl">{stats.heading}</h2>
        <p className="mt-3 text-[var(--cs-accent-2)]">{stats.description}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.items.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-[color:color-mix(in_srgb,var(--cs-bg)_20%,transparent)] bg-[color:color-mix(in_srgb,var(--cs-surface)_8%,transparent)] p-5"
            >
              <p className="text-3xl font-bold text-[var(--cs-accent)]">{item.value}</p>
              <p className="mt-2 text-sm text-[var(--cs-text-inverse)]">{item.label}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
