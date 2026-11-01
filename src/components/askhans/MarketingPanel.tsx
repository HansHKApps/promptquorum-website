'use client'

// Marketing panel: category label (HTML text, not part of the picture), picture (inactive in v1:
// no click handler, no pointer cursor, no hover effect), and ~3 link cards.
// v1 links are internal only: same tab. Clicking collapses Ask Hans to the logo (the chat is kept)
// and navigates. `external` / `affiliate` are reserved in categories.json and not rendered yet.

import Link from 'next/link'
import { getCategory, type AskHansLink } from '@/lib/askhans/categories'
import { useAskCopy, useAskLang, localizeAskPath } from './copy'
import { AskIcon } from './icons'

interface Props {
  categoryKey: string
  onLinkClick: (categoryKey: string, link: AskHansLink) => void
  /** compact horizontal strip for phones */
  variant: 'side' | 'strip'
}

function LinkCard({ link, categoryKey, onLinkClick, compact }: { link: AskHansLink; categoryKey: string; onLinkClick: Props['onLinkClick']; compact?: boolean }) {
  const lang = useAskLang()
  const text = useAskCopy().categories[categoryKey]?.links[link.id]
  return (
    <Link
      href={localizeAskPath(link.url, lang)}
      onClick={() => onLinkClick(categoryKey, link)}
      className={`group flex items-center gap-2.5 rounded-lg border border-border bg-white shadow-sm transition-colors hover:border-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${compact ? 'w-56 flex-shrink-0 p-2' : 'p-2.5'}`}
    >
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-secondary text-primary" aria-hidden="true">
        <AskIcon name={link.icon} className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-semibold text-foreground">{text?.title ?? link.title}</span>
        <span className="block truncate text-[12px] text-muted-foreground">{text?.description ?? link.description}</span>
      </span>
      <AskIcon name="ArrowRight" className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
    </Link>
  )
}

export function MarketingPanel({ categoryKey, onLinkClick, variant }: Props) {
  const tx = useAskCopy()
  const cat = getCategory(categoryKey)
  const label = tx.categories[cat.key]?.label ?? cat.label_en

  if (variant === 'strip') {
    return (
      <aside aria-label={`${tx.panelLabelPrefix}: ${label}`} className="flex items-stretch gap-2 overflow-x-auto border-t border-border bg-muted/40 px-3 py-2">
        <div className="flex w-14 flex-shrink-0 flex-col items-center gap-1">
          <img src={cat.image} alt={cat.alt} width={42} height={56} className="h-14 w-[42px] rounded-md object-cover" />
        </div>
        <p className="sr-only">{label}</p>
        {cat.links.map((l) => (
          <LinkCard key={l.id} link={l} categoryKey={cat.key} onLinkClick={onLinkClick} compact />
        ))}
      </aside>
    )
  }

  return (
    <aside aria-label={`${tx.panelLabelPrefix}: ${label}`} className="flex min-h-0 flex-col gap-2 border-l border-border bg-muted/40 p-3">
      <p className="truncate text-[11px] font-semibold uppercase tracking-wide text-primary">{label}</p>
      {/* Top two-thirds: picture. Inactive in v1 — deliberately no handler, cursor or hover state. */}
      <div className="flex min-h-0 flex-[2] items-center justify-center overflow-hidden rounded-lg">
        <img src={cat.image} alt={cat.alt} width={600} height={800} className="h-full max-h-full w-auto max-w-full select-none object-contain" draggable={false} />
      </div>
      {/* Bottom one-third: link cards. */}
      <nav aria-label={tx.panelLinksHeading} className="flex min-h-0 flex-[1] flex-col gap-1.5 overflow-y-auto">
        {cat.links.map((l) => (
          <LinkCard key={l.id} link={l} categoryKey={cat.key} onLinkClick={onLinkClick} />
        ))}
      </nav>
    </aside>
  )
}
