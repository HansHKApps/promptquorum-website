'use client'

// AffiliateBanner: high-impact product-link banner for the affiliate-banner pilot (docs/affiliate-banner-pilot.md).
//
// Honest by construction: plain product links, no affiliate tag, no commission. The disclosure is always visible under the
// buttons. No fake urgency, no ratings, no photos, no brand logos (typeset vendor names, our own category symbols).
// - Formats: single (A) = one offer; compare (B) = two options side by side. 1 or 3 merchant buttons per offer.
// - Motion: one shine sweep, one icon pop, two glow pulses when first in view; then still. transform/opacity only.
//   motion-safe: only; reduced-motion users get a static banner with a stronger border. Max 1 flash per 1.2 s (WCAG 2.3.1).
// - Reserved height per cell and breakpoint, so the banner causes no layout shift. Colors from hub tokens (no hex).
// - aff_banner_view fires once per page view at >=50% visible for >=1 s; aff_banner_click fires before navigation.

import { useEffect, useRef, useState } from 'react'
import { AFF_RESERVED_HEIGHT, AFF_VIEW_MIN_MS, AFF_VIEW_THRESHOLD } from '@/lib/affiliate-banners/config'
import { BANNER_UI } from '@/lib/affiliate-banners/copy'
import { buildMerchantUrl, merchantRel, priceIsShowable } from '@/lib/affiliate-banners/link'
import type { BannerPlan } from '@/lib/affiliate-banners/lookup'
import { CELL_FORMAT, CELL_MERCHANTS, type BannerLocale, type BannerOffer, type MerchantLink } from '@/lib/affiliate-banners/types'
import { trackAffBanner, type AffBannerContext } from '@/lib/tracking/affiliate-banner'
import { CategoryIcon } from './CategoryIcon'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 shrink-0 rtl:rotate-180">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
const StoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 shrink-0">
    <path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6" />
  </svg>
)

interface OfferBlockProps {
  offer: BannerOffer
  locale: BannerLocale
  count: 1 | 3
  compare: boolean
  played: boolean
  onClick: (offer: BannerOffer, link: MerchantLink, slot: number) => void
}

function OfferBlock({ offer, locale, count, compare, played, onClick }: OfferBlockProps) {
  const ui = BANNER_UI[locale]
  const copy = offer.copy[locale]
  const links = offer.merchantsByLocale[locale].slice(0, count)
  const anyPrice = links.find((l) => priceIsShowable(l))
  return (
    <div className={compare ? 'flex flex-col gap-3 rounded-xl bg-black/25 p-4 ring-1 ring-white/20' : 'flex flex-col gap-4'}>
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-hub-orange shadow-lg sm:h-[72px] sm:w-[72px] ${played ? 'motion-safe:animate-aff-icon-pop' : ''}`}>
          <CategoryIcon category={offer.category} />
        </div>
        <div className="min-w-0 flex-1">
          {compare && copy.bestFor && (
            <span className="mb-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">{copy.bestFor}</span>
          )}
          <p className="text-lg font-extrabold leading-tight sm:text-2xl">{copy.headline}</p>
          <p className={`mt-1.5 text-sm leading-relaxed text-white sm:text-base ${compare ? 'hidden sm:block' : ''}`}>{copy.reason}</p>
          {anyPrice?.priceRange && <span className="mt-2 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold">{anyPrice.priceRange}</span>}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {links.map((link, i) => {
          const primary = i === 0
          const label = ui.cta.replace('{vendor}', link.vendor)
          return (
            <a
              key={link.vendor}
              href={buildMerchantUrl(link)}
              target="_blank"
              rel={merchantRel(link)}
              onClick={() => onClick(offer, link, i + 1)}
              className={`group/cta inline-flex items-center justify-center gap-2 rounded-xl px-4 font-extrabold transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:hover:scale-[1.03] sm:px-5 ${
                primary
                  ? 'w-full bg-white py-3 text-base text-hub-indigo-ink shadow-lg hover:bg-white/95 sm:w-auto'
                  : 'basis-[calc(50%-0.25rem)] border-2 border-white/80 bg-white/10 py-2 text-sm text-white hover:bg-white/20 sm:basis-auto sm:py-3 sm:text-base'
              }`}
            >
              <StoreIcon />
              <span>{label}</span>
              <ArrowIcon />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export function AffiliateBanner({ plan, locale }: { plan: BannerPlan; locale: BannerLocale }) {
  const ref = useRef<HTMLElement>(null)
  const [played, setPlayed] = useState(false)
  const format = CELL_FORMAT[plan.cell]
  const count = CELL_MERCHANTS[plan.cell]
  const compare = format === 'compare'
  const ui = BANNER_UI[locale]
  const ctxFor = (offer: BannerOffer): AffBannerContext => ({
    bannerId: `${plan.group.split('/').pop()}:${offer.id}`,
    cell: plan.cell,
    format,
    merchantCount: count,
    placement: plan.placement,
    phase: plan.phase,
    category: offer.category,
  })
  const ctxRef = useRef(ctxFor(plan.offers[0]))
  useEffect(() => {
    ctxRef.current = ctxFor(plan.offers[0])
  })

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    let timer: ReturnType<typeof setTimeout> | undefined
    let done = false
    const io = new IntersectionObserver(
      ([entry]) => {
        if (done) return
        if (entry.isIntersecting && entry.intersectionRatio >= AFF_VIEW_THRESHOLD) {
          setPlayed(true)
          timer ??= setTimeout(() => {
            done = true
            trackAffBanner('aff_banner_view', ctxRef.current)
            io.disconnect()
          }, AFF_VIEW_MIN_MS)
        } else if (timer) {
          clearTimeout(timer)
          timer = undefined
        }
      },
      { threshold: [0, AFF_VIEW_THRESHOLD, 1] },
    )
    io.observe(el)
    return () => {
      if (timer) clearTimeout(timer)
      io.disconnect()
    }
  }, [])

  const onClick = (offer: BannerOffer, link: MerchantLink, slot: number) =>
    trackAffBanner('aff_banner_click', ctxFor(offer), {
      vendor: link.vendor,
      url: link.url,
      slot,
      market: link.market,
      productKey: offer.productKeys[0],
      priceShown: priceIsShowable(link),
    })

  const key = `${compare ? 'compare' : 'single'}${count}` as keyof typeof AFF_RESERVED_HEIGHT
  const [hMobile, hDesktop] = AFF_RESERVED_HEIGHT[key]

  return (
    <aside
      ref={ref}
      dir={locale === 'ar' ? 'rtl' : undefined}
      lang={locale === 'pt' ? 'pt-BR' : locale}
      data-aff-banner={plan.group}
      data-aff-cell={plan.cell}
      data-aff-placement={plan.placement}
      aria-label={ui.label}
      style={{ ['--aff-h' as string]: `${hMobile}px`, ['--aff-h-sm' as string]: `${hDesktop}px` }}
      className="relative my-8 flex min-h-[var(--aff-h)] flex-col justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-hub-indigo to-hub-indigo-ink p-4 text-white shadow-xl ring-1 ring-hub-indigo-edge motion-reduce:ring-2 motion-reduce:ring-white/80 sm:min-h-[var(--aff-h-sm)] sm:p-7"
    >
      {/* One-shot effects (transform/opacity only). Hidden from assistive tech, never block clicks. */}
      <span aria-hidden="true" className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-white/80 ${played ? 'motion-safe:animate-aff-glow' : ''}`} />
      <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 start-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 ${played ? 'motion-safe:animate-aff-shine' : ''}`} />

      <div className={compare ? 'grid gap-4 sm:grid-cols-2' : ''}>
        {plan.offers.map((offer) => (
          <OfferBlock key={offer.id} offer={offer} locale={locale} count={count} compare={compare} played={played} onClick={onClick} />
        ))}
      </div>

      <p className="text-xs leading-relaxed text-white">
        <span className="me-2 inline-block rounded-full bg-white/20 px-2 py-0.5 font-bold uppercase tracking-wide">{ui.tag}</span>
        {ui.disclosure}
      </p>
    </aside>
  )
}
