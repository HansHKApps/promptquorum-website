'use client'

// "Open Ask Hans" button for the About ecosystem card. Opens the chat window (mounted once in the root
// layout) through the same event the header search uses, and tracks the click like the other About CTAs.

import { ASK_HANS_OPEN_EVENT } from '@/lib/askhans/config'

export function AboutAskHansButton({ label, className }: { label: string; className?: string }) {
  const open = () => {
    try {
      window.umami?.track('about_cta_click', { via: 'part_askhans', source_page: window.location.pathname })
    } catch {
      // analytics must never block opening the chat
    }
    window.dispatchEvent(new CustomEvent(ASK_HANS_OPEN_EVENT, { detail: {} }))
  }
  return (
    <button type="button" onClick={open} className={className}>
      {label}
    </button>
  )
}
