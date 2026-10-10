'use client'

// Non-blocking "Looking for more local AI apps?" card for review pages.
//
// Not a modal and not an interstitial: a small dismissible card (bottom sheet
// on narrow screens) that appears only after 30 s of *active* time and 25 %
// scroll, once per session, and never again for 14 days after a dismissal or a
// click on its CTA. Nothing runs, is read, or is written until the visitor has
// granted analytics consent (the dismissal key and the events are tracking-
// adjacent state under TDDDG §25), and it shares the site's single prompt slot
// so it never stacks with the push / Google-preferred-source prompts.

import { useCallback, useEffect, useRef, useState } from 'react'
import { claimPromptSlot, releasePromptSlot } from '@/lib/promptSlot'
import type { DirectoryFunnelData } from '@/lib/power-local-llm/directory-funnel'
import {
  POPUP_DELAY_MS,
  POPUP_DISMISS_DAYS,
  POPUP_DISMISS_KEY,
  POPUP_MIN_SCROLL,
  POPUP_SESSION_KEY,
  POPUP_SLOT_ID,
  POPUP_TICK_MS,
  hasAnalyticsConsent,
  looksAutomated,
} from './directoryPopupConfig'

interface Props {
  popup: DirectoryFunnelData['popup']
  dir: 'ltr' | 'rtl'
}

const DIRECTORY_PATH = /^(?:\/(?:de|fr|es|ja|zh|pt|ar|ko))?\/directory(?:\/|$)/

function track(name: string): void {
  try {
    window.umami?.track(name, { page: window.location.pathname })
  } catch {
    // analytics blocked — fine
  }
}

function dismissedUntil(): number {
  try {
    return Number(window.localStorage.getItem(POPUP_DISMISS_KEY)) || 0
  } catch {
    return Number.POSITIVE_INFINITY // unreadable storage: fail silently = don't show
  }
}

export default function DirectoryPopup({ popup, dir }: Props) {
  const [consented, setConsented] = useState(false)
  const [visible, setVisible] = useState(false)
  const [entered, setEntered] = useState(false)
  const suppressed = useRef(false) // a directory link was clicked, or the card was closed
  const closeRef = useRef<HTMLButtonElement>(null)

  // 1. Consent gate: nothing below starts without it; follows later changes.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('nopopup') === '1') return
    if (looksAutomated()) return
    const sync = () => {
      const ok = hasAnalyticsConsent()
      setConsented(ok)
      if (!ok) {
        suppressed.current = true
        setVisible(false)
      }
    }
    sync()
    window.addEventListener('consent-changed', sync)
    return () => window.removeEventListener('consent-changed', sync)
  }, [])

  const close = useCallback((reason: 'dismiss' | 'click') => {
    suppressed.current = true
    try {
      window.localStorage.setItem(POPUP_DISMISS_KEY, String(Date.now() + POPUP_DISMISS_DAYS * 86_400_000))
    } catch {
      // storage blocked — session flag below still prevents a repeat
    }
    track(reason === 'click' ? 'directory_popup_click' : 'directory_popup_dismiss')
    releasePromptSlot(POPUP_SLOT_ID)
    setVisible(false)
  }, [])

  // 2. Active-time + scroll trigger.
  useEffect(() => {
    if (!consented) return
    if (Date.now() < dismissedUntil()) return
    try {
      if (window.sessionStorage.getItem(POPUP_SESSION_KEY) === '1') return
    } catch {
      return
    }

    let activeMs = 0
    let interacted = false
    const markInteracted = () => { interacted = true }
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]')
      if (!a) return
      try {
        if (DIRECTORY_PATH.test(new URL((a as HTMLAnchorElement).href, window.location.href).pathname)) suppressed.current = true
      } catch {
        // malformed href — ignore
      }
    }
    const events: Array<keyof WindowEventMap> = ['scroll', 'pointerdown', 'pointermove', 'keydown', 'touchstart']
    for (const ev of events) window.addEventListener(ev, markInteracted, { passive: true, once: false })
    document.addEventListener('click', onClick, true)

    const scrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      return max > 0 ? window.scrollY / max : 0
    }

    const timer = window.setInterval(() => {
      if (suppressed.current) return window.clearInterval(timer)
      // Active = tab visible, window focused, and the visitor has done something.
      if (document.visibilityState !== 'visible' || !document.hasFocus() || !interacted) return
      activeMs += POPUP_TICK_MS
      if (activeMs < POPUP_DELAY_MS || scrollProgress() < POPUP_MIN_SCROLL) return
      if (!claimPromptSlot(POPUP_SLOT_ID)) return // another prompt is up; try again next tick
      window.clearInterval(timer)
      try {
        window.sessionStorage.setItem(POPUP_SESSION_KEY, '1')
      } catch {
        // ignore
      }
      track('directory_popup_shown')
      setVisible(true)
    }, POPUP_TICK_MS)

    return () => {
      window.clearInterval(timer)
      for (const ev of events) window.removeEventListener(ev, markInteracted)
      document.removeEventListener('click', onClick, true)
    }
  }, [consented])

  // 3. Slide-in (skipped by CSS under prefers-reduced-motion) and ESC.
  useEffect(() => {
    if (!visible) return // shown at most once per page view, so `entered` never needs resetting
    const raf = window.requestAnimationFrame(() => setEntered(true))
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close('dismiss')
    }
    document.addEventListener('keydown', onKey)
    return () => {
      window.cancelAnimationFrame(raf)
      document.removeEventListener('keydown', onKey)
      releasePromptSlot(POPUP_SLOT_ID)
    }
  }, [visible, close])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="directory-popup-title"
      aria-describedby="directory-popup-body"
      dir={dir}
      data-directory-popup
      className={[
        'fixed z-40 print:hidden',
        'bottom-0 inset-x-0 rounded-t-2xl sm:inset-x-auto sm:bottom-4 sm:end-4 sm:w-[22rem] sm:rounded-2xl',
        'border border-border bg-white p-4 text-start shadow-lg',
        'transition duration-300 ease-out motion-reduce:transition-none',
        entered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
      ].join(' ')}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={() => close('dismiss')}
        aria-label={popup.close}
        className="absolute end-2 top-2 flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-text-secondary hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <span aria-hidden="true">×</span>
      </button>
      <p id="directory-popup-title" className="pe-8 text-base font-bold text-text-primary">
        {popup.headline}
      </p>
      <p id="directory-popup-body" className="mt-1 text-sm leading-relaxed text-text-secondary">
        {popup.body}
      </p>
      {popup.similar && <p className="mt-2 text-xs leading-relaxed text-text-muted">{popup.similar}</p>}
      {/* A plain <a>: a full navigation to the directory, and the click is recorded before it. */}
      <a
        href={popup.href}
        onClick={() => close('click')}
        className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {popup.cta}
      </a>
    </div>
  )
}
