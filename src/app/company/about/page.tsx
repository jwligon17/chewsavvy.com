import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { chewsavvyContent } from "@/content/chewsavvy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Chewsavvy mission, values, product approach, and how we make saving more consistent and fun.",
};

export default function AboutPage() {
  const { companyAboutPage } = chewsavvyContent;

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow={companyAboutPage.hero.eyebrow}
          title={companyAboutPage.hero.title}
          description={companyAboutPage.hero.description}
          titleAs="h1"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-[var(--cs-primary)]">{companyAboutPage.mission.title}</h2>
            <p className="mt-3 text-sm text-[var(--cs-muted)]">{companyAboutPage.mission.body}</p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-[var(--cs-primary)]">{companyAboutPage.whyChewsavvy.title}</h2>
            <p className="mt-3 text-sm text-[var(--cs-muted)]">{companyAboutPage.whyChewsavvy.body}</p>
          </Card>
        </div>

        <div className="mt-10">
          <SectionHeading title={companyAboutPage.values.title} />
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {companyAboutPage.values.items.map((value) => (
              <Card key={value.title}>
                <h3 className="text-lg font-bold text-[var(--cs-primary)]">{value.title}</h3>
                <p className="mt-2 text-sm text-[var(--cs-muted)]">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10" id="careers">
          <SectionHeading title={companyAboutPage.howItWorks.title} />
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {companyAboutPage.howItWorks.steps.map((step) => (
              <Card key={step.title}>
                <h3 className="text-lg font-bold text-[var(--cs-primary)]">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--cs-muted)]">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
