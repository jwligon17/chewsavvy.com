import { Container } from "@/components/ui/Container";

const steps = [
  {
    title: "Pick your stores",
    description: "Tell us where you shop so your feed is relevant.",
  },
  {
    title: "Clip deals",
    description: "Save offers you want in one place.",
  },
  {
    title: "Redeem & earn stars",
    description: "Track verified savings and climb the weekly leaderboard.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-b border-[var(--cs-border)] bg-[var(--cs-bg)] py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--cs-primary)] sm:text-4xl lg:text-5xl">How it works</h2>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-[var(--cs-border)] bg-[var(--cs-surface)] p-5 text-left shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--cs-muted)]">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-bold leading-tight text-[var(--cs-primary)]">{step.title}</h3>
                <p className="mt-2 max-w-[34ch] text-sm leading-[1.65] text-[var(--cs-primary-2)] sm:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-[var(--cs-primary-2)] sm:text-base">
            The more you save, the more stars you earn.
          </p>
        </div>
      </Container>
    </section>
  );
}
