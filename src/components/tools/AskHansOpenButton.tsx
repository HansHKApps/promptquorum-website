'use client'

// Opens the Ask Hans chat window (mounted once in the root layout) via the same event the header search uses.
// Button-wording experiment (askhans-cta-v1): the label shown is the visitor's variant (with its subtitle below);
// with the experiment off the passed label is used unchanged. What the button does never changes.

import { ASK_HANS_OPEN_EVENT } from '@/lib/askhans/config'
import { useCta } from '@/components/askhans/experiment/useCta'

export function AskHansOpenButton({ label, className }: { label: string; className?: string }) {
  const { bind, mode, label: ctaLabel, sub, reserve, onClick } = useCta('page')
  const experimental = mode !== 'off'
  const shown = ctaLabel ?? label
  if (!experimental) {
    // experiment off: exactly the original button
    return (
      <button type="button" className={className} onClick={() => window.dispatchEvent(new CustomEvent(ASK_HANS_OPEN_EVENT, { detail: {} }))}>
        {label}
      </button>
    )
  }
  return (
    <span className="inline-flex flex-col items-start gap-1">
      <button
        ref={bind}
        type="button"
        className={className}
        aria-label={ctaLabel ? (sub ? `${ctaLabel} — ${sub}` : ctaLabel) : undefined}
        onClick={() => {
          onClick()
          window.dispatchEvent(new CustomEvent(ASK_HANS_OPEN_EVENT, { detail: { cta: 'page' } }))
        }}
      >
        {/* keeps the original text (invisible) until the variant is known, so the swap never shifts the layout */}
        <span className={ctaLabel ? undefined : 'invisible'} style={{ display: 'inline-block', minWidth: `min(100%, ${reserve}em)` }}>{shown}</span>
      </button>
      <span className="block min-h-[2.5rem] text-[13px] text-text-secondary sm:min-h-[1.25rem]">{sub}</span>
    </span>
  )
}
