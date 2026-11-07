'use client'

// PromoSlot: one inline slot for Directory, Ask Hans, Ask Hans Power Mode and the MCP server.
//
// Step 1 scope (placeholder content): box, reserved height, provider switch and tracking. It is not placed on any
// page yet. The in-place openers for Ask Hans / Power Mode come in the next PR through `onActivate`; the final
// 9-locale copy and the SVG graphics come after that. Until then the text below is English placeholder text.
//
// - Inline only: no overlay, popup or interstitial. Not dismissible (clean pilot data).
// - Reserved height per variant and breakpoint, so the slot causes no layout shift.
// - Colors come from theme tokens (CSS variables); no hex values. No images: placeholder has no graphic yet.
// - promo_view fires once per page view when >=50% of the slot is visible for >=1 s (not on render).
// - promo_click fires on the CTA for all four targets. Link targets carry `via=promo_<target>_<placement>`.

import { useEffect, useRef } from 'react'
import { useLang } from '@/hooks/useLang'
import { PROMO_PROVIDER, PROMO_RESERVED_HEIGHT, PROMO_VIEW_MIN_MS, PROMO_VIEW_THRESHOLD } from '@/lib/promo/config'
import type { PromoPlacement, PromoTarget, PromoVariant } from '@/lib/promo/types'
import { promoSource, trackPromo } from '@/lib/tracking/promo'

// TODO(step 3): replace with COPY for all 9 locales, approved by Hans and checked against the live /askhans page.
const PLACEHOLDER: Record<PromoTarget, { title: string; cta: string }> = {
  directory: { title: 'Local AI app directory', cta: 'Open directory' },
  'ask-hans': { title: 'Ask Hans', cta: 'Ask Hans' },
  'power-mode': { title: 'Ask Hans Power Mode', cta: 'Open Power Mode' },
  mcp: { title: 'PromptQuorum MCP server', cta: 'About MCP' },
}

const LINK_PATH: Partial<Record<PromoTarget, string>> = { directory: '/directory', mcp: '/mcp-stats' }

export interface PromoSlotProps {
  target: PromoTarget
  placement: PromoPlacement
  variant?: PromoVariant
  /** Opens the tool in place (ask-hans / power-mode). Wired in the next PR; without it those CTAs only track. */
  onActivate?: () => void
  className?: string
}

export function PromoSlot({ target, placement, variant = 'card', onActivate, className = '' }: PromoSlotProps) {
  const lang = useLang()
  const ref = useRef<HTMLElement>(null)
  const ctx = { target, placement, variant, locale: lang }
  const ctxRef = useRef(ctx)
  useEffect(() => {
    ctxRef.current = ctx
  })

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    let timer: ReturnType<typeof setTimeout> | undefined
    let done = false
    const io = new IntersectionObserver(
      ([entry]) => {
        if (done) return
        if (entry.isIntersecting && entry.intersectionRatio >= PROMO_VIEW_THRESHOLD) {
          timer ??= setTimeout(() => {
            done = true
            trackPromo('promo_view', ctxRef.current)
            io.disconnect()
          }, PROMO_VIEW_MIN_MS)
        } else if (timer) {
          clearTimeout(timer)
          timer = undefined
        }
      },
      { threshold: [0, PROMO_VIEW_THRESHOLD, 1] },
    )
    io.observe(el)
    return () => {
      if (timer) clearTimeout(timer)
      io.disconnect()
    }
  }, [])

  const text = PLACEHOLDER[target]
  const [hMobile, hDesktop] = PROMO_RESERVED_HEIGHT[variant]
  const linkPath = LINK_PATH[target]
  const href = linkPath ? `${lang === 'en' ? '' : `/${lang}`}${linkPath}?via=${promoSource(target, placement)}` : undefined
  const ctaClass = 'inline-flex shrink-0 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
  const click = () => {
    trackPromo('promo_click', ctx)
    if (!href) onActivate?.()
  }

  return (
    <aside
      ref={ref}
      dir={lang === 'ar' ? 'rtl' : undefined}
      data-promo-target={target}
      data-promo-placement={placement}
      data-promo-variant={variant}
      aria-label={text.title}
      style={{ ['--promo-h' as string]: `${hMobile}px`, ['--promo-h-sm' as string]: `${hDesktop}px` }}
      className={`my-8 flex min-h-[var(--promo-h)] flex-col justify-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5 sm:min-h-[var(--promo-h-sm)] ${variant === 'strip' ? 'sm:flex-row sm:items-center' : ''} ${className}`}
    >
      {PROMO_PROVIDER === 'ad-tag' ? (
        // Third-party tag mounts here, inside the same reserved box. Wired when real advertising starts.
        <div data-ad-slot={`${target}-${placement}`} className="min-h-[inherit]" />
      ) : (
        <>
          <p className="text-base font-semibold text-foreground">{text.title}</p>
          {href ? (
            <a href={href} onClick={click} className={ctaClass}>{text.cta}</a>
          ) : (
            <button type="button" onClick={click} className={ctaClass}>{text.cta}</button>
          )}
        </>
      )}
    </aside>
  )
}
