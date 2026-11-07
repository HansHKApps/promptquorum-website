'use client'

// Renders the pilot slot of the current page, at one insertion point of a template. Looks the page up in
// lib/promo/pilot.ts (all locales share the English entry), so the templates only say WHERE a slot may go.
// Returns nothing on every page that is not in the pilot, when the pilot flag is off, and for control pages.
//
//   at = 'P1' after the intro, before the first section | 'P2' after ~40% of the sections | 'P3' before related links
//        'P4' desktop sticky side rail (needs >= 1360px; narrower screens use the P2 spot instead) | 'P5' hub/index pages

import { usePathname } from 'next/navigation'
import { pilotEntryFor } from '@/lib/promo/pilot'
import type { PromoPlacement, PromoVariant } from '@/lib/promo/types'
import { PromoSlot } from './PromoSlot'

export type PilotSpot = 'P1' | 'P2' | 'P3' | 'P4' | 'P5'

const PILOT_ON = process.env.NEXT_PUBLIC_PROMO_PILOT === 'true'

export function PilotPromoSlot({ at }: { at: PilotSpot }) {
  const pathname = usePathname() ?? ''
  const entry = PILOT_ON ? pilotEntryFor(pathname) : null
  if (!entry) return null

  const variantFor = (p: PromoPlacement): PromoVariant => (p === 'P1' ? (entry.target === 'mcp' ? 'card' : 'strip') : entry.target === 'mcp' ? 'callout' : 'card')

  // P4 group: side rail on wide screens, the P2 spot (reported as P2) everywhere else.
  if (entry.placement === 'P4') {
    if (at === 'P4') {
      return (
        <div className="absolute bottom-0 left-full top-0 ms-8 hidden w-64 min-[1360px]:block rtl:left-auto rtl:right-full rtl:me-8 rtl:ms-0">
          <div className="sticky top-24">
            <PromoSlot target={entry.target} placement="P4" variant={variantFor('P4')} stack className="my-0" />
          </div>
        </div>
      )
    }
    if (at === 'P2') return <PromoSlot target={entry.target} placement="P2" variant={variantFor('P2')} className="min-[1360px]:hidden" />
    return null
  }

  if (at !== entry.placement) return null
  return <PromoSlot target={entry.target} placement={entry.placement} variant={variantFor(entry.placement)} />
}
