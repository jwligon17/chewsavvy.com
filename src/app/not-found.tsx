import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--cs-border)] bg-[var(--cs-surface)] p-8 text-center shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--cs-accent)]">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--cs-primary)] sm:text-4xl">
          This page could not be found.
        </h1>
        <p className="mx-auto mt-3 text-sm text-[var(--cs-muted)] sm:text-base">
          The link may be outdated or the page may have moved. Return to the Chewsavvy homepage
          to continue.
        </p>
        <div className="mt-7">
          <Link
            href="/"
            className="inline-flex rounded-md bg-[var(--cs-primary)] px-5 py-2.5 text-sm font-bold text-[var(--cs-text-inverse)] transition hover:bg-[var(--cs-primary-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cs-accent)]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
