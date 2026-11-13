'use client'

// Round-cornered "Ask Hans" pill shown after the window was closed. Same corner and layer as the MCP pill
// (McpFloatingCta: bottom-20/right-4 on mobile, bottom-6/right-6 from md), sitting directly to its LEFT
// on the same baseline: the space above the pill is taken by the table-of-contents button
// (TableOfContentsButton: bottom-40 / md:bottom-24). A single click / tap (or Enter / Space) reopens the window.

import { forwardRef } from 'react'
import { Logo } from '@/components/Logo'
import { useAskCopy } from './copy'
import { useCta } from './experiment/useCta'

interface Props {
  onOpen: () => void
}

export const AskHansLogo = forwardRef<HTMLButtonElement, Props>(function AskHansLogo({ onOpen }, ref) {
  const tx = useAskCopy()
  // Button-wording experiment (askhans-cta-v1): wording + tooltip only; the click still just reopens the window.
  const cta = useCta('floating')
  const named = cta.label ? (cta.sub ? `${cta.label} — ${cta.sub}` : cta.label) : null

  return (
    <button
      type="button"
      ref={(el) => {
        cta.bind(el)
        if (typeof ref === 'function') ref(el)
        else if (ref) ref.current = el
      }}
      aria-label={named ?? tx.logoLabel}
      title={named ?? tx.logoTitle}
      onClick={() => {
        cta.onClick()
        onOpen()
      }}
      style={{ touchAction: 'manipulation' }}
      className="fixed z-[80] bottom-[4.75rem] right-[6rem] md:bottom-5 md:right-[6.5rem] flex h-12 items-center gap-2 rounded-full bg-primary pl-1.5 pr-4 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="rounded-full bg-white p-1.5" aria-hidden="true">
        <Logo size={26} aria-hidden="true" role="presentation" />
      </span>
      {cta.label ? (
        // experiment/winner wording: up to two small lines on phones (never wider than the space left of the MCP pill), one line from md
        <span aria-hidden="true" className="max-w-[calc(100vw-9.5rem)] text-start text-xs leading-tight sm:text-sm md:max-w-none md:whitespace-nowrap">{cta.label}</span>
      ) : (
        <span aria-hidden="true" className="whitespace-nowrap">Ask Hans</span>
      )}
    </button>
  )
})
