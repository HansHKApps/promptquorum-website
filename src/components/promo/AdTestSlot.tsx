'use client'

// One position of the ad display test (docs/ad-display-test.md). Renders nothing unless the test flag is on,
// the page is a test page and all three advertised tools are enabled. The creative is picked in the browser
// (random rotation per page view, kept in memory only), so a reserved box of the final height renders first.

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AD_TEST_LABEL, AD_TEST_MEASURE_SHARE, adTestCreative, isAdTestPage, type AdTestPosition } from '@/lib/ad-test/config'
import { PROMO_RESERVED_HEIGHT } from '@/lib/promo/config'
import { useLang } from '@/hooks/useLang'
import { trackAdTest, trackAdTestRequest } from '@/lib/tracking/ad-test'
import { PromoSlot } from './PromoSlot'

const AD_TEST_ON =
  process.env.NEXT_PUBLIC_AD_TEST === 'true' &&
  process.env.NEXT_PUBLIC_ASK_HANS_ENABLED === 'true' &&
  process.env.NEXT_PUBLIC_ACADEMY_PROMO_ENABLED === 'true'

interface PageViewDraw {
  path: string
  rotation: number
  measured: boolean
  requested: boolean
  slots: number
}

// Shared by the three slots of one page view; dropped when the last one unmounts.
let draw: PageViewDraw | null = null

function joinPageView(path: string): PageViewDraw {
  if (!draw || draw.path !== path) {
    draw = { path, rotation: Math.floor(Math.random() * 3), measured: Math.random() < AD_TEST_MEASURE_SHARE, requested: false, slots: 0 }
  }
  draw.slots += 1
  return draw
}

function Slot({ position, path }: { position: AdTestPosition; path: string }) {
  const lang = useLang()
  const [view, setView] = useState<PageViewDraw | null>(null)

  useEffect(() => {
    const d = joinPageView(path)
    if (d.measured && !d.requested) {
      d.requested = true
      trackAdTestRequest(d.rotation)
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the random draw exists only in the browser (hydration-safe)
    setView(d)
    return () => {
      d.slots -= 1
      if (d.slots <= 0 && draw === d) draw = null
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
            onView: () => {
              if (view.measured) trackAdTest('impression', position, creative)
            },
            onClick: () => trackAdTest('click', position, creative),
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
