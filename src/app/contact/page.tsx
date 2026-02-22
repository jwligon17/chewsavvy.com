import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Chewsavvy about beta / early access, leaderboard features, and verified savings tools.",
};

export default function ContactPage() {
  return (
    <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-12 lg:pb-16">
      <Container className="max-w-5xl">
        <header className="mx-auto max-w-[960px] text-center">
          <PageTitle as="h1" variant="default">
            Let&apos;s Chat.
          </PageTitle>
          <p className="mt-3 text-base leading-7 text-[var(--cs-muted)] sm:text-lg sm:leading-8 lg:text-xl">
            If you&apos;d like access to our <strong className="font-bold">Beta / Early Access</strong> program (while
            available), please fill out the information below.
          </p>
        </header>
        <div className="mx-auto w-full md:max-w-3xl">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
