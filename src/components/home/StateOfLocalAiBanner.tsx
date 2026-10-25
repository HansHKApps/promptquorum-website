import { LATEST, issuePath, kicker } from '@/lib/state-of-local-ai/issues'

/** Homepage banner for the latest State of Local AI issue (English homepage only). Data-driven from the registry. */
export function StateOfLocalAiBanner() {
  return (
    <section aria-labelledby="sola-banner-h" className="border-b border-hub-violet-edge bg-white">
      <div className="container mx-auto px-4 py-6 max-w-7xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[820px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-hub-violet-ink mb-1">{kicker(LATEST)}</p>
          <h2 id="sola-banner-h" className="text-xl font-bold leading-snug text-text-primary sm:text-2xl">{LATEST.title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-text-secondary">{LATEST.summary}</p>
        </div>
        <a
          href={issuePath(LATEST)}
          className="shrink-0 self-start rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 md:self-auto"
        >
          Read the report
        </a>
      </div>
    </section>
  )
}
