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
import { BANNER_UI, type OfferId } from '@/lib/affiliate-banners/copy'
import { BANNER_IMAGES, PHOTO_CREDIT } from '@/lib/affiliate-banners/images'
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

/** The product photo (real, freely licensed, credited) on a white stage; offers without a photo get a large category symbol. */
function PhotoStage({ offer, locale, compare, played }: { offer: BannerOffer; locale: BannerLocale; compare: boolean; played: boolean }) {
  const img = BANNER_IMAGES[offer.id as OfferId]
  const copy = offer.copy[locale]
  const badge = copy.bestFor && (
    <span className="absolute start-3 top-3 z-10 rounded-full bg-hub-amber-tint px-3 py-1 text-xs font-black uppercase tracking-wide text-hub-amber-ink shadow-lg">{copy.bestFor}</span>
  )
  return (
    <div className={`relative ${compare ? '' : 'sm:rotate-2'} ${played ? 'motion-safe:animate-aff-icon-pop' : ''}`}>
      {badge}
      <div className="overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl ring-1 ring-white/60">
        <div className={`relative overflow-hidden rounded-xl bg-white ${compare ? 'aspect-[2/1] sm:aspect-[3/2]' : 'aspect-[4/3]'}`}>
          {img ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} width={960} height={720} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              <a
                href={img.page}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-1.5 end-1.5 max-w-[92%] truncate rounded bg-black/60 px-1.5 py-0.5 text-[11px] leading-tight text-white hover:bg-black/80"
              >
                {PHOTO_CREDIT[locale] ?? 'Photo'}: {img.author}, {img.license}
              </a>
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-hub-orange to-hub-indigo text-white">
              <CategoryIcon category={offer.category} className="h-20 w-20 sm:h-28 sm:w-28" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function OfferBlock({ offer, locale, count, compare, played, onClick }: OfferBlockProps) {
  const ui = BANNER_UI[locale]
  const copy = offer.copy[locale]
  const links = offer.merchantsByLocale[locale].slice(0, count)
  const anyPrice = links.find((l) => priceIsShowable(l))
  const buttons = (
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
            className={`group/cta inline-flex items-center justify-center gap-2 rounded-xl font-black transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:hover:scale-[1.03] ${
              primary
                ? `w-full bg-hub-orange px-5 py-3.5 text-base text-white shadow-xl ring-2 ring-white/70 hover:brightness-110 sm:w-auto ${compare ? '' : 'sm:px-7 sm:py-4 sm:text-lg'}`
                : 'basis-[calc(50%-0.25rem)] border-2 border-white/80 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 sm:basis-auto sm:px-5 sm:py-3 sm:text-base'
            }`}
          >
            <span className={primary ? '' : 'hidden sm:inline'}><StoreIcon /></span>
            <span>{label}</span>
            <ArrowIcon />
          </a>
        )
      })}
    </div>
  )
  const text = (
    <div className="flex min-w-0 flex-col gap-3">
      <p className={`font-black leading-tight tracking-tight ${compare ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-4xl'}`}>{copy.headline}</p>
      <p className={`leading-relaxed text-white ${compare ? 'hidden text-base sm:block' : 'text-base sm:text-lg'}`}>{copy.reason}</p>
      {anyPrice?.priceRange && <span className="inline-block w-fit rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold">{anyPrice.priceRange}</span>}
      {buttons}
    </div>
  )
  if (compare) {
    return (
      <div className="flex flex-col gap-4 rounded-2xl bg-black/25 p-3 ring-1 ring-white/25 sm:p-4">
        <PhotoStage offer={offer} locale={locale} compare played={played} />
        {text}
      </div>
    )
  }
  return (
    <div className="grid items-center gap-5 sm:grid-cols-[1.15fr_1fr] sm:gap-8">
      <div className="order-2 sm:order-1">{text}</div>
      <div className="order-1 sm:order-2">
        <PhotoStage offer={offer} locale={locale} compare={false} played={played} />
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
      className="relative my-10 flex min-h-[var(--aff-h)] flex-col justify-center gap-4 overflow-hidden rounded-3xl bg-gradient-to-br from-hub-indigo via-hub-violet to-hub-indigo-ink p-4 text-white shadow-2xl ring-2 ring-hub-indigo-edge motion-reduce:ring-white/80 sm:min-h-[var(--aff-h-sm)] sm:p-8"
    >
      {/* One-shot effects (transform/opacity only). Hidden from assistive tech, never block clicks. */}
      <span aria-hidden="true" className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-white/80 ${played ? 'motion-safe:animate-aff-glow' : ''}`} />
      <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 start-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 ${played ? 'motion-safe:animate-aff-shine' : ''}`} />

      {/* Decorative depth: soft light blobs and a faint grid (pure CSS, no assets). */}
      <span aria-hidden="true" className="pointer-events-none absolute -start-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-28 -end-20 h-80 w-80 rounded-full bg-hub-orange/40 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className={`relative ${compare ? 'grid gap-4 sm:grid-cols-2 sm:gap-6' : ''}`}>
        {compare && (
          <span aria-hidden="true" className="absolute start-1/2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-black uppercase text-hub-indigo-ink shadow-xl ring-4 ring-hub-orange ltr:-translate-x-1/2 rtl:translate-x-1/2 sm:flex">vs</span>
        )}
        {plan.offers.map((offer) => (
          <OfferBlock key={offer.id} offer={offer} locale={locale} count={count} compare={compare} played={played} onClick={onClick} />
        ))}
      </div>

      <p className="relative text-xs leading-relaxed text-white">
        <span className="me-2 inline-block rounded-full bg-white/20 px-2 py-0.5 font-bold uppercase tracking-wide">{ui.tag}</span>
        {ui.disclosure}
      </p>
    </aside>
  )
}
