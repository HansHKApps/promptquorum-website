'use client'

// Opens the Ask Hans chat window (mounted once in the root layout) via the same event the header search uses.

import { ASK_HANS_OPEN_EVENT } from '@/lib/askhans/config'

export function AskHansOpenButton({ label, className }: { label: string; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new CustomEvent(ASK_HANS_OPEN_EVENT, { detail: {} }))}>
      {label}
    </button>
  )
}
