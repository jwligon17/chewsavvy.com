import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { chewsavvyContent } from "@/content/chewsavvy";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "See Chewsavvy solutions for cities, counties, and transportation agencies.",
};

export default function SolutionsPage() {
  const { solutionsPage } = chewsavvyContent;

  return (
    <>
      <section className="border-t border-[var(--cs-border)] bg-[var(--cs-surface)] py-16" id="by-organization">
        <Container>
          <SectionHeading
            eyebrow={solutionsPage.byOrganization.eyebrow}
            title={solutionsPage.byOrganization.title}
            description={solutionsPage.byOrganization.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {solutionsPage.byOrganization.organizations.map((organization) => (
              <Card key={organization.name}>
                <h3 className="text-lg font-bold text-[var(--cs-primary)]">{organization.name}</h3>
                <p className="mt-2 text-sm text-[var(--cs-muted)]">{organization.summary}</p>
                <ul className="mt-4 space-y-2">
                  {organization.focusAreas.map((item) => (
                    <li key={item} className="text-sm text-[var(--cs-muted)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
