'use client'

// Side panel: topic picture (about one third of the height, full width), then the links. Before the visitor has
// asked anything the links are the topic's placeholder cards; once an answer contains links to PromptQuorum pages,
// those links (newest answer first) replace them, so the panel always follows the conversation.
// Links are internal only: same tab. Clicking collapses Ask Hans to the logo (the chat is kept) and navigates.
// `external` / `affiliate` are reserved in categories.json and not rendered yet.

import Link from 'next/link'
import { getCategory, type AskHansLink } from '@/lib/askhans/categories'
import { useAskCopy, useAskLang, localizeAskPath } from './copy'
import { AskIcon } from './icons'
import type { RelatedLink } from './links'

interface Props {
  categoryKey: string
  /** links taken from the conversation's answers; empty = show the topic's placeholder links */
  related: RelatedLink[]
  onLinkClick: (categoryKey: string, link: AskHansLink) => void
  onRelatedClick: (href: string) => void
  /** hides the whole panel (the chat gets the full width / height) */
  onHide: () => void
  /** compact horizontal strip for phones */
  variant: 'side' | 'strip'
}

const CARD = 'group flex items-center gap-2.5 rounded-lg border border-border bg-white shadow-sm transition-colors hover:border-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'

function Arrow() {
  return <AskIcon name="ArrowRight" className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary rtl:-scale-x-100" />
}

function LinkCard({ link, categoryKey, onLinkClick, compact }: { link: AskHansLink; categoryKey: string; onLinkClick: Props['onLinkClick']; compact?: boolean }) {
  const lang = useAskLang()
  const text = useAskCopy().categories[categoryKey]?.links[link.id]
  return (
    <Link href={localizeAskPath(link.url, lang)} onClick={() => onLinkClick(categoryKey, link)} className={`${CARD} ${compact ? 'w-56 flex-shrink-0 p-2' : 'p-2.5'}`}>
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-secondary text-primary" aria-hidden="true">
        <AskIcon name={link.icon} className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-semibold text-foreground">{text?.title ?? link.title}</span>
        <span className="block truncate text-[12px] text-muted-foreground">{text?.description ?? link.description}</span>
      </span>
      <Arrow />
    </Link>
  )
}

function RelatedCard({ link, onClick, compact }: { link: RelatedLink; onClick: (href: string) => void; compact?: boolean }) {
  const old = !link.current
  return (
    <Link href={link.href} onClick={() => onClick(link.href)} className={`${CARD} ${compact ? 'w-56 flex-shrink-0 p-2' : 'p-2.5'} ${old ? 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0' : ''}`}>
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-secondary text-primary" aria-hidden="true">
        <AskIcon name="Link2" className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-foreground line-clamp-2">{link.title}</span>
      <Arrow />
    </Link>
  )
}

function HideButton({ onHide }: { onHide: () => void }) {
  const tx = useAskCopy()
  return (
    <button
      type="button"
      onClick={onHide}
      aria-label={tx.panel.panelHide}
      title={tx.panel.panelHide}
      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
    >
      <AskIcon name="PanelRightClose" className="h-4 w-4 rtl:-scale-x-100" />
    </button>
  )
}

export function MarketingPanel({ categoryKey, related, onLinkClick, onRelatedClick, onHide, variant }: Props) {
  const tx = useAskCopy()
  const cat = getCategory(categoryKey)
  const label = tx.categories[cat.key]?.label ?? cat.label_en
  const hasRelated = related.length > 0
  const currentLinks = related.filter((l) => l.current)
  const earlierLinks = related.filter((l) => !l.current)

  if (variant === 'strip') {
    return (
      <aside aria-label={`${tx.panelLabelPrefix}: ${label}`} className="flex flex-shrink-0 items-stretch gap-2 overflow-x-auto border-t border-border bg-muted/40 px-3 py-2">
        <img src={cat.image} alt={cat.alt} width={56} height={56} className="h-14 w-14 flex-shrink-0 rounded-md object-cover" />
        <p className="sr-only">{label}</p>
        {hasRelated
          ? related.map((l) => <RelatedCard key={l.href} link={l} onClick={onRelatedClick} compact />)
          : cat.links.map((l) => <LinkCard key={l.id} link={l} categoryKey={cat.key} onLinkClick={onLinkClick} compact />)}
        <HideButton onHide={onHide} />
      </aside>
    )
  }

  return (
    <aside aria-label={`${tx.panelLabelPrefix}: ${label}`} className="flex min-h-0 flex-col gap-2 border-s border-border bg-muted/40 p-3">
      <div className="flex items-center gap-2">
        <p className="min-w-0 flex-1 truncate text-[11px] font-semibold uppercase tracking-wide text-primary">{label}</p>
        <HideButton onHide={onHide} />
      </div>
      {/* Top third: topic picture, full width. Inactive in v1 — deliberately no handler, cursor or hover state. */}
      <div className="h-[33%] max-h-48 min-h-[88px] flex-shrink-0 overflow-hidden rounded-lg" style={{ backgroundColor: 'hsl(var(--hero-from))' }}>
        <img src={cat.image} alt={cat.alt} width={900} height={300} className="h-full w-full select-none object-contain" draggable={false} />
      </div>
      {/* Rest: links that fit the conversation. */}
      <nav aria-label={hasRelated ? tx.panel.relatedHeading : tx.panelLinksHeading} className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto">
        {hasRelated && currentLinks.length > 0 && <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{tx.panel.relatedHeading}</p>}
        {hasRelated ? (
          <>
            {currentLinks.map((l) => <RelatedCard key={l.href} link={l} onClick={onRelatedClick} />)}
            {earlierLinks.length > 0 && <p className={`text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/70 ${currentLinks.length > 0 ? 'mt-2' : ''}`}>{tx.panel.relatedEarlier}</p>}
            {earlierLinks.map((l) => <RelatedCard key={l.href} link={l} onClick={onRelatedClick} />)}
          </>
        ) : (
          cat.links.map((l) => <LinkCard key={l.id} link={l} categoryKey={cat.key} onLinkClick={onLinkClick} />)
        )}
      </nav>
    </aside>
  )
}
