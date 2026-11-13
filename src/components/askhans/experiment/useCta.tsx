'use client'

// Ask Hans button-wording experiment: one hook for every Ask Hans entry button.
//
//   const cta = useCta('header')
//   cta.mode      'off' (original wording, nothing changes) | 'experiment' | 'winner' (rolled-out wording, no tracking)
//   cta.label     wording of the assigned variant, or null while the assignment is still pending (server render)
//   cta.sub       subtitle of the assigned variant (or null)
//   cta.bind       attach to the button: fires ask_hans_button_impression once per page view when >=50% of it has been
//                 visible for >=1 s (same rule as the promo slots; rendered-but-never-seen buttons are not counted)
//   cta.onClick() call from the button's click handler: fires ask_hans_button_click (never throws, never blocks)
//   cta.reserve   min-width in em that fits the longest variant in this language, so swapping text never shifts layout
//
// Nothing here changes what a button does. If the experiment is off, `label`/`sub` are null and `mode` is 'off'.

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import { useAskCopy } from '../copy'
import { PROMO_VIEW_MIN_MS, PROMO_VIEW_THRESHOLD } from '@/lib/promo/config'
import { CTA_EXPERIMENT_ENABLED, CTA_VARIANTS, ctaWinner, type CtaPlacement, type CtaVariant } from '@/lib/askhans/experiment/config'
import { getAssignment } from '@/lib/askhans/experiment/variant'
import { trackCta } from '@/lib/askhans/experiment/track'

const noopSubscribe = () => () => undefined
const serverSnapshot = (): CtaVariant | null => null
const clientSnapshot = (): CtaVariant | null => getAssignment().variant

/** Rough rendered width in em: CJK/Hangul glyphs are full width, Latin/Arabic about 0.58em (bold). */
export function reserveEm(text: string): number {
  let w = 0
  for (const ch of text) w += ch.charCodeAt(0) >= 0x2e80 ? 1 : 0.58
  return Math.ceil(w * 10) / 10
}

export interface CtaState {
  mode: 'off' | 'experiment' | 'winner'
  variant: CtaVariant | null
  label: string | null
  sub: string | null
  /** longest label among the variants in this language, in em (0 when off) */
  reserve: number
  /** pass as the button's `ref` prop (callback ref) */
  bind: (el: HTMLElement | null) => void
  onClick: () => void
}

export function useCta(placement: CtaPlacement): CtaState {
  const tx = useAskCopy()
  const pathname = usePathname() ?? ''
  const winner = ctaWinner()
  const mode: CtaState['mode'] = CTA_EXPERIMENT_ENABLED ? 'experiment' : winner ? 'winner' : 'off'
  const assigned = useSyncExternalStore(noopSubscribe, clientSnapshot, serverSnapshot)
  const variant: CtaVariant | null = mode === 'experiment' ? assigned : mode === 'winner' ? winner : null

  // ---- impression: once per page view and button, only after real visibility ----
  // Callback ref kept in state, so the effect below (re)starts whenever the button element mounts or changes.
  const [el, bind] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (mode !== 'experiment' || !variant || !el || typeof IntersectionObserver === 'undefined') return
    let poll: ReturnType<typeof setInterval> | undefined
    let visibleMs = 0
    let done = false
    const STEP = 250
    const stop = () => {
      if (poll) clearInterval(poll)
      poll = undefined
      visibleMs = 0
    }
    // "Visible" = >=50% inside the viewport, the tab is in the foreground and nothing (cookie dialog, search box, window)
    // sits on top of the button's centre. The time only adds up while all of that holds; it resets otherwise.
    const unobscured = () => {
      const r = el.getBoundingClientRect()
      const top = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2)
      return !!top && (top === el || el.contains(top))
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (done) return
        if (entry.isIntersecting && entry.intersectionRatio >= PROMO_VIEW_THRESHOLD) {
          poll ??= setInterval(() => {
            if (document.visibilityState === 'visible' && unobscured()) visibleMs += STEP
            else visibleMs = 0
            if (visibleMs >= PROMO_VIEW_MIN_MS) {
              done = true
              stop()
              io.disconnect()
              trackCta('ask_hans_button_impression', false, { via: placement })
            }
          }, STEP)
        } else stop()
      },
      { threshold: [0, PROMO_VIEW_THRESHOLD, 1] },
    )
    io.observe(el)
    return () => {
      stop()
      io.disconnect()
    }
    // pathname: a new page view (client-side navigation) is a new impression opportunity
  }, [mode, variant, pathname, placement, el])

  const onClick = useCallback(() => {
    if (mode === 'experiment') trackCta('ask_hans_button_click', false, { via: placement })
  }, [mode, placement])

  const v = variant ? tx.ctaVariants[variant] : null
  const reserve = mode === 'off' ? 0 : Math.max(...CTA_VARIANTS.map((k) => reserveEm(tx.ctaVariants[k].label)))
  return { mode, variant, label: v?.label ?? null, sub: v?.sub ?? null, reserve, bind, onClick }
}
