'use client'

// Small round logo shown after the window was closed. Same corner and layer as the MCP pill
// (McpFloatingCta: bottom-20/right-4 on mobile, bottom-6/right-6 from md), sitting directly to its LEFT
// on the same baseline: the space above the pill is taken by the table-of-contents button
// (TableOfContentsButton: bottom-40 / md:bottom-24). Double-click / double-tap or Enter reopens the window.

import { forwardRef, useRef } from 'react'
import { Logo } from '@/components/Logo'
import { DE } from './copy'

const DOUBLE_TAP_MS = 350

interface Props {
  onOpen: () => void
}

export const AskHansLogo = forwardRef<HTMLButtonElement, Props>(function AskHansLogo({ onOpen }, ref) {
  const lastTap = useRef(0)

  return (
    <button
      ref={ref}
      type="button"
      aria-label={DE.logoLabel}
      title={DE.logoTitle}
      onDoubleClick={onOpen}
      onPointerUp={(e) => {
        // Touch has no reliable dblclick across browsers: detect the second tap ourselves.
        if (e.pointerType !== 'touch') return
        const now = Date.now()
        if (now - lastTap.current < DOUBLE_TAP_MS) {
          lastTap.current = 0
          onOpen()
        } else lastTap.current = now
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          onOpen()
        }
      }}
      style={{ touchAction: 'manipulation' }}
      className="fixed z-[80] bottom-[4.75rem] right-[6rem] md:bottom-5 md:right-[6.5rem] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg opacity-90 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="rounded-full bg-white p-1.5" aria-hidden="true">
        <Logo size={26} aria-hidden="true" role="presentation" />
      </span>
    </button>
  )
})
