import { Container } from "@/components/ui/Container";
import { PageTitle } from "@/components/PageTitle";
import type { ChewsavvyContent } from "@/content/chewsavvy";

type CoreCapabilitiesSectionProps = {
  coreCapabilities: ChewsavvyContent["homePage"]["coreCapabilities"];
};

export function CoreCapabilitiesSection({ coreCapabilities }: CoreCapabilitiesSectionProps) {
  return (
    <section className="relative overflow-x-clip bg-[var(--cs-surface)] py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <PageTitle>{coreCapabilities.title}</PageTitle>
          <p className="mx-auto mt-6 max-w-[56ch] text-pretty text-base leading-[1.7] text-[var(--cs-primary-2)] sm:text-lg sm:leading-[1.72]">
            {coreCapabilities.description}
          </p>
        </div>

        <div className="relative mt-12 sm:mt-14">
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-3 w-screen -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[var(--cs-accent-2)] via-[var(--cs-accent)] to-[var(--cs-muted)]" />
          <div className="relative z-10 mx-auto max-w-6xl rounded-3xl bg-[var(--cs-primary)] px-8 py-14 shadow-2xl sm:px-10 lg:px-14 lg:py-16">
            <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8">
              {coreCapabilities.cards.map((card, index) => {
                const headingGradient =
                  index === 0
                    ? "bg-gradient-to-r from-[var(--cs-accent-2)] to-[var(--cs-accent)] bg-clip-text text-transparent"
                    : index === 1
                      ? "bg-gradient-to-r from-[var(--cs-accent)] to-[var(--cs-muted)] bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-[var(--cs-accent)] to-[var(--cs-accent-2)] bg-clip-text text-transparent";

                return (
                  <div key={card.title}>
                    <h3 className={`text-xl font-bold tracking-tight ${headingGradient}`}>{card.title}</h3>
                    <p className="mx-auto mt-5 max-w-[34ch] text-base leading-[1.68] text-[color:color-mix(in_srgb,white_92%,transparent)]">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
