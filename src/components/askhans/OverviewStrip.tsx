'use client'

// Closing block of Ask Hans answers and Power Mode reports: what PromptQuorum is plus the same real-size numbers
// as the homepage "By the Numbers" strip. The data (already localized) comes from the server's `done` event.

import type { SiteOverview } from '@/lib/home/overview'

export function OverviewStrip({ overview, className = '' }: { overview: SiteOverview; className?: string }) {
  return (
    <aside aria-label={overview.title} className={`rounded-xl border border-border bg-secondary/40 p-3 ${className}`}>
      <h3 className="text-[13px] font-bold text-foreground">{overview.title}</h3>
      <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground">{overview.blurb}</p>
      <dl className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        {overview.tiles.map((t) => (
          <div key={t.label} className="rounded-lg border border-border bg-white px-2 py-1.5">
            <dd className="text-[16px] font-bold leading-none text-foreground">{t.value}</dd>
            <dt className="mt-1 text-[11px] leading-tight text-muted-foreground">{t.label}</dt>
          </div>
        ))}
      </dl>
      <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[12px]">
        {overview.links.map((k) => (
          <a key={k.href} href={k.href} className="font-medium text-primary underline underline-offset-2">
            {k.label}
          </a>
        ))}
      </p>
    </aside>
  )
}
