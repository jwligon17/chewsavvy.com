const dealFeed = [
  { store: "FreshMart", title: "30% off snack bundle", stars: "+42 stars", savings: "$12.40" },
  { store: "HomeSupply", title: "Buy 1 get 1 pantry staples", stars: "+30 stars", savings: "$18.00" },
  { store: "UrbanMarket", title: "2x points on produce", stars: "+24 stars", savings: "$8.70" },
  { store: "PetCorner", title: "15% off pet food", stars: "+16 stars", savings: "$9.10" },
];

export function ChewsavvyPhoneMock() {
  return (
    <article
      aria-label="Chewsavvy mobile deal feed preview"
      className="mx-auto w-full max-w-[20rem] rounded-[2.25rem] border border-[var(--cs-border)] bg-[var(--cs-primary)] p-2.5 shadow-2xl sm:max-w-[22rem]"
    >
      <div className="rounded-[1.7rem] bg-[var(--cs-surface)] p-4">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--cs-muted)]">App</p>
            <h3 className="text-lg font-bold leading-tight text-[var(--cs-primary)]">Chewsavvy</h3>
          </div>
          <span className="inline-flex rounded-full bg-[color:color-mix(in_srgb,var(--cs-accent)_55%,white)] px-3 py-1 text-xs font-semibold text-[var(--cs-primary)]">
            7-day streak
          </span>
        </div>

        <ul className="space-y-2.5">
          {dealFeed.map((deal) => (
            <li key={`${deal.store}-${deal.title}`} className="rounded-xl border border-[var(--cs-border)] bg-[var(--cs-bg)] p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--cs-muted)]">{deal.store}</p>
              <p className="mt-1 text-sm font-semibold leading-snug text-[var(--cs-primary)]">{deal.title}</p>
              <div className="mt-2 flex items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-[var(--cs-primary-2)]">{deal.stars}</span>
                <span className="rounded-full bg-[color:color-mix(in_srgb,var(--cs-accent-2)_55%,white)] px-2.5 py-1 font-semibold text-[var(--cs-primary)]">
                  Save {deal.savings}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-xl border border-[var(--cs-border)] bg-[var(--cs-primary)] p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:color-mix(in_srgb,white_82%,var(--cs-accent-2))]">
            Stars this week
          </p>
          <p className="mt-1 text-2xl font-bold leading-none text-white">1,240</p>
        </div>
      </div>
    </article>
  );
}
