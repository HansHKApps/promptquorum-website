'use client'

// Small round study-hat (graduation cap) button shown after the Academy window was closed (the Academy twin of
// AskHansLogo). It sits one row above the Ask Hans pill, on the same right edge, so the two never overlap.
// One click or tap (Enter / Space) reopens the window.

import { forwardRef } from 'react'
import type { AcademyLang } from '@/lib/academy/types'
import { ACADEMY_COPY } from './copy'

function StudyHat() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 9.5 12 5l10 4.5-10 4.5L2 9.5Z" />
      <path d="M6 11.6V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.4" />
      <path d="M22 9.5V15" />
    </svg>
  )
}

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
      className="fixed z-[80] bottom-[8.5rem] right-[6rem] md:bottom-[5.5rem] md:right-[6.5rem] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <StudyHat />
    </button>
  )
})
