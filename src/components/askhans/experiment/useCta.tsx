'use client'

// Ask Hans button-wording experiment: one hook for every Ask Hans entry button.
//
//   const cta = useCta('header')
//   cta.mode      'off' (original wording, nothing changes) | 'experiment' | 'winner' (rolled-out wording, no tracking)
//   cta.label     wording of the assigned variant, or null while the assignment is still pending (server render)
//   cta.sub       subtitle of the assigned variant (or null)
//   cta.bind       attach to the button as ref (no-op: impressions are no longer tracked)
//   cta.onClick() call from the button's click handler: fires ask_hans_button_click (never throws, never blocks)
//   cta.reserve   min-width in em that fits the longest variant in this language, so swapping text never shifts layout
//
// Nothing here changes what a button does. If the experiment is off, `label`/`sub` are null and `mode` is 'off'.

import { useCallback, useSyncExternalStore } from 'react'
import { useAskCopy } from '../copy'
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
  const winner = ctaWinner()
  const mode: CtaState['mode'] = CTA_EXPERIMENT_ENABLED ? 'experiment' : winner ? 'winner' : 'off'
  const assigned = useSyncExternalStore(noopSubscribe, clientSnapshot, serverSnapshot)
  const variant: CtaVariant | null = mode === 'experiment' ? assigned : mode === 'winner' ? winner : null

  // No impression tracking (removed 2026-11-14, owner decision): `bind` stays so callers keep working, it does nothing.
  const bind = useCallback((_el: HTMLElement | null) => {}, [])

  const onClick = useCallback(() => {
    if (mode === 'experiment') trackCta('ask_hans_button_click', false, { via: placement })
  }, [mode, placement])

  const v = variant ? tx.ctaVariants[variant] : null
  const reserve = mode === 'off' ? 0 : Math.max(...CTA_VARIANTS.map((k) => reserveEm(tx.ctaVariants[k].label)))
  return { mode, variant, label: v?.label ?? null, sub: v?.sub ?? null, reserve, bind, onClick }
}
