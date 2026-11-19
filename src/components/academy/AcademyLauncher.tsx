'use client'

// Round-cornered "Academy" pill shown after the window was closed (the Academy twin of AskHansLogo). It sits one
// row above the Ask Hans pill, on the same right edge, so the two never overlap. One click reopens the window.

import { forwardRef } from 'react'
import { Logo } from '@/components/Logo'
import type { AcademyLang } from '@/lib/academy/types'
import { ACADEMY_COPY } from './copy'

export const AcademyLauncher = forwardRef<HTMLButtonElement, { lang: AcademyLang; onOpen: () => void }>(function AcademyLauncher({ lang, onOpen }, ref) {
  const tx = ACADEMY_COPY[lang]
  return (
    <button
      type="button"
      ref={ref}
      aria-label={tx.launcherTitle}
      title={tx.launcherTitle}
      onClick={onOpen}
      style={{ touchAction: 'manipulation' }}
      className="fixed z-[80] bottom-[8.5rem] right-[6rem] md:bottom-[5.5rem] md:right-[6.5rem] flex h-12 items-center gap-2 rounded-full bg-primary pl-1.5 pr-4 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="rounded-full bg-white p-1.5" aria-hidden="true">
        <Logo size={26} aria-hidden="true" role="presentation" />
      </span>
      <span aria-hidden="true" className="whitespace-nowrap">
        Academy
      </span>
    </button>
  )
})
