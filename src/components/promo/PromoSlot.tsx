'use client'

// PromoSlot: one inline slot for Directory, Ask Hans, Ask Hans Power Mode and the MCP server.
//
// Box, reserved height, provider switch, tracking, 9-locale copy and the SVG graphic per target.
// Ask Hans / Power Mode open in place through lib/promo/open.ts (existing event, no navigation).
//
// - Inline only: no overlay, popup or interstitial. Not dismissible (clean pilot data).
// - Reserved height per variant and breakpoint, so the slot causes no layout shift.
// - Colors come from theme tokens (CSS variables); no hex values. Graphics are inline SVG without text.
// - promo_view fires once per page view when >=50% of the slot is visible for >=1 s (not on render).
// - promo_click fires on the CTA for all four targets. Link targets carry `via=promo_<target>_<placement>`.

import { useEffect, useRef } from 'react'
import { useLang } from '@/hooks/useLang'
import facts from '@/generated/promo-facts.json'
import { openAskHansFromPromo } from '@/lib/promo/open'
import { PROMO_PROVIDER, PROMO_RESERVED_HEIGHT, PROMO_VIEW_MIN_MS, PROMO_VIEW_THRESHOLD } from '@/lib/promo/config'
import type { PromoPlacement, PromoTarget, PromoVariant } from '@/lib/promo/types'
import { promoSource, trackPromo } from '@/lib/tracking/promo'
import { PromoGraphic } from './PromoGraphics'
import { PROMO_COPY } from './promo-copy'

const LINK_PATH: Partial<Record<PromoTarget, string>> = { directory: '/directory', mcp: '/mcp-stats' }

export interface PromoSlotProps {
  target: PromoTarget
  placement: PromoPlacement
  variant?: PromoVariant
  className?: string
}

export function PromoSlot({ target, placement, variant = 'card', className = '' }: PromoSlotProps) {
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

  const text = (PROMO_COPY[lang] ?? PROMO_COPY.en)[target]
  const count = facts.directoryToolCount
  const hook = target === 'directory' ? (count > 0 ? text.hook.replace('{count}', count.toLocaleString(lang)) : (text.hookNoCount ?? text.hook)) : text.hook
  const showSnippet = target === 'mcp' && variant === 'callout'
  const snippet = JSON.stringify({ mcpServers: { promptquorum: { url: facts.mcpServerUrl } } })
  const [hMobile, hDesktop] = PROMO_RESERVED_HEIGHT[variant]
  const linkPath = LINK_PATH[target]
  const href = linkPath ? `${lang === 'en' ? '' : `/${lang}`}${linkPath}?via=${promoSource(target, placement)}` : undefined
  const ctaClass = 'inline-flex shrink-0 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
  const click = (e: React.MouseEvent<HTMLElement>) => {
    trackPromo('promo_click', ctx)
    // Ask Hans / Power Mode open in place (real <button>, focus returns to it on close); the others are links.
    if (!href && (target === 'ask-hans' || target === 'power-mode')) openAskHansFromPromo(target, placement, e.currentTarget)
  }

  const cta =
    href ? (
      <a href={href} onClick={click} className={ctaClass}>{text.cta}</a>
    ) : (
      <button type="button" onClick={click} className={ctaClass}>{text.cta}</button>
    )

  return (
    <aside
      ref={ref}
      dir={lang === 'ar' ? 'rtl' : undefined}
      lang={lang === 'pt' ? 'pt-BR' : lang}
      data-promo-target={target}
      data-promo-placement={placement}
      data-promo-variant={variant}
      aria-label={hook}
      style={{ ['--promo-h' as string]: `${hMobile}px`, ['--promo-h-sm' as string]: `${hDesktop}px` }}
      className={`my-8 flex min-h-[var(--promo-h)] flex-col justify-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5 sm:min-h-[var(--promo-h-sm)] ${className}`}
    >
      {PROMO_PROVIDER === 'ad-tag' ? (
        // Third-party tag mounts here, inside the same reserved box. Wired when real advertising starts.
        <div data-ad-slot={`${target}-${placement}`} className="min-h-[inherit]" />
      ) : (
        <>
          <div className="flex items-center gap-4">
            {variant !== 'strip' && <PromoGraphic target={target} />}
            <div className="min-w-0 flex-1">
              <p className="text-base font-semibold leading-snug text-foreground">{hook}</p>
              {text.note && <p className="mt-1 text-xs text-muted-foreground">{text.note}</p>}
            </div>
            {variant === 'strip' && cta}
          </div>
          {showSnippet && (
            <div>
              {text.snippetLabel && <p className="mb-1 text-xs text-muted-foreground">{text.snippetLabel}</p>}
              <code dir="ltr" className="block overflow-x-auto whitespace-nowrap rounded-md bg-background px-3 py-2 text-left text-xs text-foreground">{snippet}</code>
            </div>
          )}
          {variant !== 'strip' && <div>{cta}</div>}
        </>
      )}
    </aside>
  )
}
