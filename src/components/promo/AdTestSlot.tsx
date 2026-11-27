'use client'

// One position of the ad display test (docs/ad-display-test.md). Renders nothing unless the test flag is on,
// the page is a test page and all three advertised tools are enabled. The creative is picked in the browser
// (random rotation per page view, kept in memory only), so a reserved box of the final height renders first.

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AD_TEST_LABEL, adTestCreative, isAdTestPage, type AdTestPosition } from '@/lib/ad-test/config'
import { PROMO_RESERVED_HEIGHT } from '@/lib/promo/config'
import { useLang } from '@/hooks/useLang'
import { countPageEvent, pageViewSource } from '@/lib/tracking/page-check'
import type { PvSource } from '@/lib/ad-test/events'
import { PromoSlot } from './PromoSlot'

const AD_TEST_ON =
  process.env.NEXT_PUBLIC_AD_TEST === 'true' &&
  process.env.NEXT_PUBLIC_ASK_HANS_ENABLED === 'true' &&
  process.env.NEXT_PUBLIC_ACADEMY_PROMO_ENABLED === 'true'

interface PageViewDraw {
  path: string
  rotation: number
  source: PvSource
  slots: number
  adShown: boolean
  input: boolean
  humanSent: boolean
  stopListening: () => void
}

const INPUT_EVENTS = ['pointerdown', 'pointermove', 'wheel', 'touchstart', 'keydown'] as const

// Shared by the three slots of one page view; dropped when the last one unmounts.
let draw: PageViewDraw | null = null

function countHumanOnce(d: PageViewDraw): void {
  if (d.humanSent || !d.adShown || !d.input) return
  d.humanSent = true
  countPageEvent('human', d.source)
}

function countAdShown(d: PageViewDraw, ad: string): void {
  if (!d.adShown) {
    d.adShown = true
    countPageEvent('first', d.source)
  }
  countPageEvent(`ad:${ad}`, d.source)
  countHumanOnce(d)
}

function startPageView(path: string): PageViewDraw {
  const d: PageViewDraw = { path, rotation: Math.floor(Math.random() * 3), source: pageViewSource(), slots: 0, adShown: false, input: false, humanSent: false, stopListening: () => {} }
  const onInput = (e: Event) => {
    if (!e.isTrusted) return // script-generated events are not a visitor
    d.input = true
    d.stopListening()
    countHumanOnce(d)
  }
  d.stopListening = () => INPUT_EVENTS.forEach((n) => window.removeEventListener(n, onInput, true))
  INPUT_EVENTS.forEach((n) => window.addEventListener(n, onInput, { capture: true, passive: true }))
  countPageEvent('load', d.source)
  return d
}

function joinPageView(path: string): PageViewDraw {
  if (!draw || draw.path !== path) {
    draw?.stopListening()
    draw = startPageView(path)
  }
  draw.slots += 1
  return draw
}

function Slot({ position, path }: { position: AdTestPosition; path: string }) {
  const lang = useLang()
  const [view, setView] = useState<PageViewDraw | null>(null)

  useEffect(() => {
    const d = joinPageView(path)
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the random draw exists only in the browser (hydration-safe)
    setView(d)
    return () => {
      d.slots -= 1
      if (d.slots <= 0 && draw === d) {
        d.stopListening()
        draw = null
      }
    }
  }, [path])

  const variant = position === 'P1' ? 'strip' : 'card'
  const label = AD_TEST_LABEL[lang] ?? AD_TEST_LABEL.en
  const [hMobile, hDesktop] = PROMO_RESERVED_HEIGHT[variant]
  const creative = view ? adTestCreative(position, view.rotation) : null

  return (
    <div className="my-8" data-adtest-position={position}>
      <p className="mb-1 text-xs opacity-70" dir={lang === 'ar' ? 'rtl' : undefined}>{label}</p>
      {view && creative ? (
        <PromoSlot
          target={creative}
          placement={position}
          variant={variant}
          className="!my-0"
          test={{
            source: `adtest_${creative.replace('-', '_')}_${position.toLowerCase()}`,
            onView: () => countAdShown(view, `${position}:${creative}`),
            onClick: () => countPageEvent(`click:${position}:${creative}`, view.source),
          }}
        />
      ) : (
        <div
          aria-hidden="true"
          style={{ ['--promo-h' as string]: `${hMobile}px`, ['--promo-h-sm' as string]: `${hDesktop}px` }}
          className="min-h-[var(--promo-h)] sm:min-h-[var(--promo-h-sm)]"
        />
      )}
    </div>
  )
}

export function AdTestSlot({ at }: { at: AdTestPosition }) {
  const pathname = usePathname() ?? ''
  if (!AD_TEST_ON || !isAdTestPage(pathname)) return null
  return <Slot key={pathname} position={at} path={pathname} />
}
