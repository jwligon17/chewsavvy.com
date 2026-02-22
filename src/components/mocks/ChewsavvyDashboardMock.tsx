const leaderboard = [
  { name: "Ava R.", stars: "1,420", savings: "$63.10" },
  { name: "Noah T.", stars: "1,365", savings: "$57.40" },
  { name: "Mia C.", stars: "1,300", savings: "$54.25" },
  { name: "Liam P.", stars: "1,248", savings: "$49.90" },
  { name: "Zoe M.", stars: "1,205", savings: "$46.70" },
];

const topDeals = [
  "40% off frozen meals at FreshMart",
  "$5 back on coffee pods at HomeSupply",
  "2-for-1 protein bars at UrbanMarket",
];

export function ChewsavvyDashboardMock() {
  return (
    <article
      aria-label="Chewsavvy dashboard with leaderboard and verified savings"
      className="mx-auto w-full max-w-5xl rounded-3xl border border-[var(--cs-border)] bg-[var(--cs-surface)] p-4 shadow-xl sm:p-6"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--cs-muted)]">Chewsavvy dashboard</p>
          <h3 className="text-xl font-bold leading-tight text-[var(--cs-primary)]">Weekly leaderboard</h3>
        </div>
        <span className="rounded-full bg-[color:color-mix(in_srgb,var(--cs-accent)_45%,white)] px-3 py-1 text-xs font-semibold text-[var(--cs-primary)]">
          Updated today
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border border-[var(--cs-border)] bg-[var(--cs-bg)] p-4">
          <table className="w-full table-fixed text-left">
            <thead>
              <tr className="text-xs uppercase tracking-[0.09em] text-[var(--cs-muted)]">
                <th className="pb-2 pr-2">Name</th>
                <th className="pb-2 pr-2">Stars</th>
                <th className="pb-2">Savings</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((row) => (
                <tr key={row.name} className="border-t border-[var(--cs-border)] text-sm text-[var(--cs-primary)]">
                  <td className="py-2.5 pr-2 font-semibold">{row.name}</td>
                  <td className="py-2.5 pr-2">{row.stars}</td>
                  <td className="py-2.5 font-semibold text-[var(--cs-primary-2)]">{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="grid gap-4">
          <section className="rounded-2xl border border-[var(--cs-border)] bg-[var(--cs-bg)] p-4">
            <h4 className="text-sm font-bold text-[var(--cs-primary)]">Top deals today</h4>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[var(--cs-primary-2)]">
              {topDeals.map((deal) => (
                <li key={deal} className="rounded-lg bg-white px-3 py-2">
                  {deal}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-[var(--cs-border)] bg-[var(--cs-primary)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:color-mix(in_srgb,white_82%,var(--cs-accent-2))]">
              Verified savings
            </p>
            <p className="mt-1 text-3xl font-bold leading-none text-white">$48.20</p>
            <p className="mt-1 text-sm text-[color:color-mix(in_srgb,white_88%,var(--cs-accent-2))]">saved this month</p>
          </section>
        </div>
      </div>
    </article>
  );
}
