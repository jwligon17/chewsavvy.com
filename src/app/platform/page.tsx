import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { chewsavvyContent } from "@/content/chewsavvy";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Explore Chewsavvy deal discovery, competition mechanics, integrations, and security controls.",
};

export default function PlatformPage() {
  const { platformPage, homePage } = chewsavvyContent;

  return (
    <>
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow={platformPage.overview.eyebrow}
            title={platformPage.overview.title}
            description={platformPage.overview.description}
            titleAs="h1"
          />
        </Container>
      </section>

      <section className="border-y border-[var(--cs-border)] bg-[var(--cs-surface)] py-16" id="capabilities">
        <Container>
          <SectionHeading title={platformPage.modules.title} description={platformPage.modules.description} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {homePage.coreCapabilities.cards.map((card) => (
              <Card key={card.title}>
                <h3 className="text-lg font-bold text-[var(--cs-primary)]">{card.title}</h3>
                <p className="mt-2 text-sm text-[var(--cs-muted)]">{card.description}</p>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--cs-muted)]">{homePage.coreCapabilities.roadmapNote}</p>
        </Container>
      </section>

      <section className="py-16" id="integrations">
        <Container>
          <SectionHeading
            title={platformPage.integrationsTeaser.title}
            description={platformPage.integrationsTeaser.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {platformPage.integrationsTeaser.links.map((link) => (
              <Card key={link.label}>
                <h3 className="text-lg font-bold text-[var(--cs-primary)]">{link.label}</h3>
                <p className="mt-2 text-sm text-[var(--cs-muted)]">{link.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--cs-border)] bg-[var(--cs-primary)] py-16 text-[var(--cs-text-inverse)]" id="security">
        <Container>
          <SectionHeading
            title={platformPage.securityTeaser.title}
            description={platformPage.securityTeaser.description}
            className="[&_*]:text-inherit [&_p]:text-[var(--cs-accent-2)]"
          />
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {platformPage.securityTeaser.bullets.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[color:color-mix(in_srgb,var(--cs-bg)_20%,transparent)] bg-[color:color-mix(in_srgb,var(--cs-surface)_8%,transparent)] p-4 text-sm text-[var(--cs-text-inverse)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
