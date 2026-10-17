// "Part of the Local AI Directory" funnel block for single-app review pages.
//
// Presentational and hook-free: it is rendered inside the review renderers
// (PowerLocalLLMPostClient / LocalLLMsPostClient), which are server-rendered
// on first paint, so every link below is in the crawled HTML. All data —
// strings, hrefs, similar tools, the {N} count — arrives pre-resolved from
// buildDirectoryFunnel() (src/lib/power-local-llm/directory-funnel.ts).
//
// Layout uses logical utilities (text-start, ms-*, gap) and an explicit
// `dir` on the root: the server <html dir> is still hard-coded ltr.

import { AppLink as Link } from '@/components/AppLink'
import type { DirectoryFunnelData } from '@/lib/power-local-llm/directory-funnel'

interface Props {
  data: DirectoryFunnelData
  /** `start`: directly after the Quick Answer. `end`: directly before Related Reading. */
  position: 'start' | 'end'
}

const LINK = 'font-medium text-primary underline underline-offset-2 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm'

function Arrow() {
  return (
    <span aria-hidden="true" className="ms-1 inline-block rtl:rotate-180">
      →
    </span>
  )
}

export function DirectoryBlock({ data, position }: Props) {
  const headingId = `directory-block-${position}-heading`
  return (
    <aside
      dir={data.dir}
      aria-labelledby={headingId}
      data-directory-block={position}
      className="not-prose my-6 rounded-xl border border-border bg-surface p-4 text-start"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p id={headingId} className="text-sm font-bold text-text-primary">
          {data.heading}
        </p>
        {data.entry && (
          <Link href={data.entry.href} className={`${LINK} text-sm`}>
            {data.entry.label}
            <Arrow />
          </Link>
        )}
      </div>

      {data.similar.length > 0 && (
        <>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-text-muted">{data.similarLabel}</p>
          <ul className="mt-2 grid list-none grid-cols-1 gap-2 p-0 sm:grid-cols-3">
            {data.similar.map((card) => (
              <li key={card.href} className="m-0">
                <Link
                  href={card.href}
                  className="block h-full rounded-lg border border-border bg-card px-3 py-2 no-underline transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span className="block text-sm font-semibold text-text-primary">{card.name}</span>
                  {(card.platforms || card.license) && (
                    <span className="mt-0.5 block text-xs text-text-secondary" title={card.licenseFull}>
                      {[card.platforms, card.license].filter(Boolean).join(' — ')}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="mt-3 text-sm">
        <Link href={data.compareAll.href} className={LINK}>
          {data.compareAll.label}
          <Arrow />
        </Link>
      </p>
      {position === 'end' && data.otherPlatform && (
        <p className="mt-1 text-sm">
          <Link href={data.otherPlatform.href} className={LINK}>
            {data.otherPlatform.label}
            <Arrow />
          </Link>
        </p>
      )}
    </aside>
  )
}
