'use client'

// Side panel: topic picture (about one third of the height, full width), then the links. Before the visitor has
// asked anything the links are the topic's placeholder cards; once an answer contains links to PromptQuorum pages,
// those links (newest answer first) replace them, so the panel always follows the conversation.
// Links are internal only: same tab. Clicking collapses Ask Hans to the logo (the chat is kept) and navigates.
// `external` / `affiliate` on AskHansLink are reserved in categories.json and not rendered yet.
//
// Topic picture as a clickable link (v1, 2026-11-19): when a category carries `pictureLink`, the picture itself
// becomes an external, non-affiliate price-comparison link (new tab, window stays open). See categories.ts.

import Link from 'next/link'
import { getCategory, type AskHansLink, type AskHansPictureLink } from '@/lib/askhans/categories'
import { useAskCopy, useAskLang, localizeAskPath } from './copy'
import { AskIcon } from './icons'
import type { RelatedLink } from './links'
import { PromoCard, PromoShare, promoImage } from './PromoCard'

interface Props {
  categoryKey: string
  /** links taken from the conversation's answers; empty = show the topic's placeholder links */
  related: RelatedLink[]
  onLinkClick: (categoryKey: string, link: AskHansLink) => void
  onRelatedClick: (href: string) => void
  onPictureClick: (categoryKey: string, link: AskHansPictureLink) => void
  /** hides the whole panel (the chat gets the full width / height) */
  onHide: () => void
  /** compact horizontal strip for phones */
  variant: 'side' | 'strip'
  /** the 2-minute promo is active: promo picture + share card replace the topic picture */
  promo?: boolean
  onPromoClose?: () => void
}

const CARD = 'group flex items-center gap-2 rounded-md border border-border bg-white shadow-sm transition-colors hover:border-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'

function Arrow() {
  return <AskIcon name="ArrowRight" className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary rtl:-scale-x-100" />
}

function LinkCard({ link, categoryKey, onLinkClick, compact }: { link: AskHansLink; categoryKey: string; onLinkClick: Props['onLinkClick']; compact?: boolean }) {
  const lang = useAskLang()
  const text = useAskCopy().categories[categoryKey]?.links[link.id]
  return (
    <Link href={localizeAskPath(link.url, lang)} onClick={() => onLinkClick(categoryKey, link)} className={`${CARD} ${compact ? 'w-52 flex-shrink-0 p-1.5' : 'p-1.5'}`}>
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-secondary text-primary" aria-hidden="true">
        <AskIcon name={link.icon} className="h-3.5 w-3.5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[12px] font-semibold text-foreground">{text?.title ?? link.title}</span>
        <span className="block truncate text-[11px] text-muted-foreground">{text?.description ?? link.description}</span>
      </span>
      <Arrow />
    </Link>
  )
}

function RelatedCard({ link, onClick, compact }: { link: RelatedLink; onClick: (href: string) => void; compact?: boolean }) {
  const old = !link.current
  return (
    <Link href={link.href} onClick={() => onClick(link.href)} className={`${CARD} ${compact ? 'w-52 flex-shrink-0 p-1.5' : 'p-1.5'} ${old ? 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0' : ''}`}>
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-secondary text-primary" aria-hidden="true">
        <AskIcon name="Link2" className="h-3.5 w-3.5" />
      </span>
      <span className="min-w-0 flex-1 text-[12px] font-semibold leading-snug text-foreground line-clamp-2">{link.title}</span>
      <Arrow />
    </Link>
  )
}

/** Side-panel picture: full-size clickable image with a "compare prices" chip and a hover/focus shine sweep. */
function PictureLink({ cat, label, onPictureClick }: { cat: ReturnType<typeof getCategory>; label: string; onPictureClick: Props['onPictureClick'] }) {
  const tx = useAskCopy()
  const link = cat.pictureLink
  if (!link) return null
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={() => onPictureClick(cat.key, link)}
      aria-label={tx.panel.pictureLinkLabel(label)}
      className="group relative block h-full w-full overflow-hidden rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <img src={cat.image} alt={cat.alt} width={1200} height={400} className="h-full w-full select-none object-cover transition-transform duration-300 group-hover:scale-[1.03]" draggable={false} />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -skew-x-[18deg] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 motion-safe:group-hover:animate-pic-shine motion-safe:group-focus-visible:animate-pic-shine"
      />
      <span className="pointer-events-none absolute bottom-1.5 end-1.5 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm">
        {tx.panel.pictureCta}
      </span>
    </a>
  )
}

/** Mobile strip thumbnail: same link, no chip/caption (too small). */
function PictureThumbLink({ cat, label, onPictureClick }: { cat: ReturnType<typeof getCategory>; label: string; onPictureClick: Props['onPictureClick'] }) {
  const tx = useAskCopy()
  const link = cat.pictureLink
  if (!link) return null
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={() => onPictureClick(cat.key, link)}
      aria-label={tx.panel.pictureLinkLabel(label)}
      className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <img src={cat.image} alt={cat.alt} width={56} height={56} className="h-14 w-14 select-none object-cover" draggable={false} />
    </a>
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
      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-border bg-white text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
    >
      <AskIcon name="X" className="h-4 w-4" />
    </button>
  )
}

export function MarketingPanel({ categoryKey, related, onLinkClick, onRelatedClick, onPictureClick, onHide, variant, promo, onPromoClose }: Props) {
  const tx = useAskCopy()
  const lang = useAskLang()
  const cat = getCategory(categoryKey)
  const label = tx.categories[cat.key]?.label ?? cat.label_en
  const hasRelated = related.length > 0
  const currentLinks = related.filter((l) => l.current)
  const earlierLinks = related.filter((l) => !l.current)

  if (variant === 'strip') {
    return (
      <aside aria-label={`${tx.panelLabelPrefix}: ${label}`} className="flex flex-shrink-0 items-stretch gap-2 overflow-x-auto border-t border-border bg-muted/40 px-3 py-2">
        {promo ? (
          <div className="flex flex-shrink-0 items-center gap-2 rounded-lg border border-primary/40 bg-white p-1.5">
            <img src={promoImage(lang)} alt={tx.promo.imageAlt} width={168} height={56} className="h-14 w-auto flex-shrink-0 rounded-md" />
            <div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-primary">{tx.promo.share}</p>
              <PromoShare />
            </div>
            <button type="button" onClick={onPromoClose} aria-label={tx.promo.close} title={tx.promo.close} className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
              <AskIcon name="X" className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : cat.pictureLink ? (
          <PictureThumbLink cat={cat} label={label} onPictureClick={onPictureClick} />
        ) : (
          <img src={cat.image} alt={cat.alt} width={56} height={56} className="h-14 w-14 flex-shrink-0 rounded-md object-cover" />
        )}
        <p className="sr-only">{label}</p>
        {hasRelated
          ? related.map((l) => <RelatedCard key={l.href} link={l} onClick={onRelatedClick} compact />)
          : cat.links.map((l) => <LinkCard key={l.id} link={l} categoryKey={cat.key} onLinkClick={onLinkClick} compact />)}
        <HideButton onHide={onHide} />
      </aside>
    )
  }

  return (
    <aside aria-label={`${tx.panelLabelPrefix}: ${label}`} className="flex min-h-0 flex-col gap-1.5 border-s border-border bg-muted/40 p-2">
      <div className="flex items-center gap-2">
        <p className="min-w-0 flex-1 truncate text-[11px] font-semibold uppercase tracking-wide text-primary">{label}</p>
        <HideButton onHide={onHide} />
      </div>
      {/* Top third: topic picture, full width. Clickable (cursor, chip, shine) only when the category carries pictureLink. */}
      <div className="h-[22%] max-h-28 min-h-[64px] flex-shrink-0 overflow-hidden rounded-lg" style={{ backgroundColor: 'hsl(var(--hero-from))' }}>
        {!promo && cat.pictureLink ? (
          <PictureLink cat={cat} label={label} onPictureClick={onPictureClick} />
        ) : (
          <img src={promo ? promoImage(lang) : cat.image} alt={promo ? tx.promo.imageAlt : cat.alt} width={900} height={300} className="h-full w-full select-none object-contain" draggable={false} />
        )}
      </div>
      {!promo && cat.pictureLink && <p className="text-[10px] leading-snug text-muted-foreground">{tx.panel.pictureCaption}</p>}
      {promo && onPromoClose && <PromoCard onClose={onPromoClose} />}
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
