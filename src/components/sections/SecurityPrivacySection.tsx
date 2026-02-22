import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SecurityPrivacySection() {
  return (
    <section className="overflow-x-hidden lg:overflow-visible py-10 sm:py-12 lg:py-20">
      <Container className="overflow-x-hidden lg:overflow-visible">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="page-title text-transparent bg-gradient-to-r from-[var(--cs-primary)] to-[var(--cs-muted)] bg-clip-text">
            Privacy & Security
          </h1>
          <p className="mx-auto mt-3 max-w-4xl text-base leading-7 text-[var(--cs-muted)] md:text-lg">
            Your savings journey should be fun without sacrificing trust.{" "}
            <span className="lg:whitespace-nowrap">Privacy and security are built in from day one.</span>
          </p>
        </div>

        <div className="complianceBox relative z-0 mx-auto mt-6 w-full overflow-visible px-4 pt-6 pb-8 sm:mt-8 sm:px-6 sm:pt-8 sm:pb-10 md:px-8 md:pt-10 md:pb-12 lg:mt-3 lg:px-10">
          <div className="pointer-events-none absolute left-0 top-0 z-0 h-[2px] w-full bg-[linear-gradient(90deg,var(--cs-accent)_0%,var(--cs-accent)_52%,color-mix(in_srgb,var(--cs-accent)_42%,transparent)_74%,transparent_100%)]" />
          <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-[2px] bg-gradient-to-b from-[var(--cs-accent)] to-transparent" />

          <div className="relative z-10 flex flex-col space-y-12">
            <div className="space-y-3">
              <h3 className="m-0 text-lg font-bold leading-tight text-[var(--cs-primary)]">Data Handling</h3>
              <p className="m-0 text-sm leading-normal text-[var(--cs-muted)]">
                We collect minimal data and use it only for clearly defined product features like account access,
                deal personalization, and verified savings reporting.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="m-0 text-lg font-bold leading-tight text-[var(--cs-primary)]">Access Controls</h3>
              <p className="m-0 text-sm leading-normal text-[var(--cs-muted)]">
                Account security includes modern authentication controls, and internal access follows least-privilege
                principles with strict role boundaries.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="m-0 text-lg font-bold leading-tight text-[var(--cs-primary)]">Hosting</h3>
              <p className="m-0 text-sm leading-normal text-[var(--cs-muted)]">
                We run on reliable hosted infrastructure with routine backups and monitoring designed for availability,
                resilience, and fast recovery.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="m-0 text-lg font-bold leading-tight text-[var(--cs-primary)]">Support</h3>
              <p className="m-0 text-sm leading-normal text-[var(--cs-muted)]">
                Clear support channels and response expectations make it easy to report issues, get help, and stay
                informed through resolution.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-10 flex justify-center overflow-visible sm:mt-12 lg:mt-16">
          <Button href="/contact" size="lg" variant="ink">
            Get early access
          </Button>
        </div>
      </Container>
    </section>
  );
}
