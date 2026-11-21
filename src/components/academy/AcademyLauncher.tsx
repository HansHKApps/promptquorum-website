'use client'

// Round study-hat (graduation cap) button shown to EVERY visitor whenever the Academy window is closed (the Academy
// twin of AskHansLogo). It sits one row above the Ask Hans pill, on the same right edge, so the two never overlap.
// Made to stand out: purple-to-pink gradient, glow, a pulsing ring and a light sweep (the motion is off for
// prefers-reduced-motion). One click or tap (Enter / Space) opens the window; every click is counted (Umami + Redis).

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

/** Anonymous click counters: Umami event (like ask_hans_button_click) + a plain Redis total shown by `npm run academy:stats`. */
function trackLauncherClick(): void {
  try {
    window.umami?.track('academy_launcher_click', { source_page: window.location.pathname })
  } catch {
    /* tracking must never block opening the Academy */
  }
  void fetch('/api/academy/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'launcher_click' }) }).catch(() => {})
}

export const AcademyLauncher = forwardRef<HTMLButtonElement, { lang: AcademyLang; onOpen: () => void }>(function AcademyLauncher({ lang, onOpen }, ref) {
  const tx = ACADEMY_COPY[lang]
  return (
    <button
      type="button"
      ref={ref}
      aria-label={tx.launcherTitle}
      title={tx.launcherTitle}
      onClick={() => {
        trackLauncherClick()
        onOpen()
      }}
      style={{ touchAction: 'manipulation' }}
      className="group fixed z-[80] bottom-[8.5rem] right-[6rem] md:bottom-[5.5rem] md:right-[6.5rem] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-500 text-white shadow-[0_0_18px_rgba(168,85,247,0.65)] ring-2 ring-white/80 transition-transform duration-200 hover:scale-110 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-fuchsia-400/60 motion-safe:animate-ping" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent motion-safe:animate-academy-shine" />
      </span>
      <span className="relative">
        <StudyHat />
      </span>
    </button>
  )
})
