'use client'

// "Open Ask Hans" button for the About ecosystem card. Opens the chat window (mounted once in the root
// layout) through the same event the header search uses, and tracks the click like the other About CTAs.
// Button-wording experiment (askhans-cta-v1): shows the visitor's variant (label + subtitle); off = the passed label.

import { ASK_HANS_OPEN_EVENT } from '@/lib/askhans/config'
import { useCta } from '@/components/askhans/experiment/useCta'

export function AboutAskHansButton({ label, className, arrow }: { label: string; className?: string; arrow: string }) {
  const { bind, mode, label: ctaLabel, sub, reserve, onClick } = useCta('about')
  const experimental = mode !== 'off'
  const open = () => {
    onClick()
    try {
      window.umami?.track('about_cta_click', { via: 'part_askhans', source_page: window.location.pathname })
    } catch {
      // analytics must never block opening the chat
    }
    window.dispatchEvent(new CustomEvent(ASK_HANS_OPEN_EVENT, { detail: experimental ? { cta: 'about' } : {} }))
  }
  if (!experimental) {
    return (
      <button type="button" onClick={open} className={`${className ?? ''} mt-auto`}>
        {`${label} ${arrow}`}
      </button>
    )
  }
  return (
    <span className="mt-auto flex flex-col items-start gap-1">
      <button
        ref={bind}
        type="button"
        onClick={open}
        className={className}
        aria-label={ctaLabel ? (sub ? `${ctaLabel} — ${sub}` : ctaLabel) : undefined}
      >
        <span className={ctaLabel ? undefined : 'invisible'} style={{ display: 'inline-block', minWidth: `min(100%, ${reserve}em)` }}>{`${ctaLabel ?? label} ${arrow}`}</span>
      </button>
      <span className="block min-h-[2.5rem] text-xs text-text-secondary sm:min-h-[1.25rem]">{sub}</span>
    </span>
  )
}
