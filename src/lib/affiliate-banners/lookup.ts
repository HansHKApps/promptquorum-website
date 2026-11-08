import { promoMidArticleIndex } from '@/lib/promo/config'
import { AFF_BANNER_CONTROLS, AFF_BANNER_GROUPS } from './assignment'
import { AFF_BANNERS_ON, AFF_BANNER_OPT_OUT, AFF_BANNER_PHASE } from './config'
import { getBannerOffer } from './offers'
import { AFF_BANNER_PAGE_OFFERS } from './page-offers'
import type { BannerCell, BannerOffer, BannerPlacement } from './types'

const LOCALE_PREFIX = /^\/(?:de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/

/** English path of a URL path: locale prefix, query, hash and trailing slash removed. */
export function bannerGroupKey(pathname: string): string {
  return pathname.split('?')[0].split('#')[0].replace(LOCALE_PREFIX, '').replace(/\/+$/, '')
}

const PHASE2_ROTATION: BannerPlacement[] = ['AP1', 'AP2', 'AP3']
const treatedKeys = Object.keys(AFF_BANNER_GROUPS).sort()

/** Phase 1: every treated group at AP2. Phase 2: placement rotates AP1/AP2/AP3 within each cell (thirds). Later phases keep phase 2's rotation until set. */
export function placementFor(group: string, phase: number): BannerPlacement {
  if (phase <= 1) return 'AP2'
  const inCell = treatedKeys.filter((k) => AFF_BANNER_GROUPS[k].cell === AFF_BANNER_GROUPS[group]?.cell)
  return PHASE2_ROTATION[Math.max(0, inCell.indexOf(group)) % 3]
}

export interface BannerPlan {
  group: string
  cell: BannerCell
  placement: BannerPlacement
  phase: number
  offers: BannerOffer[]
}

/** The banner plan of a page, or null: flag off, control page, opted out, or not in the pilot. */
export function bannerPlanFor(pathname: string): BannerPlan | null {
  if (!AFF_BANNERS_ON) return null
  const group = bannerGroupKey(pathname)
  const entry = AFF_BANNER_GROUPS[group]
  if (!entry || AFF_BANNER_OPT_OUT.has(group) || AFF_BANNER_CONTROLS.includes(group)) return null
  const ids = AFF_BANNER_PAGE_OFFERS[group] ?? []
  const offers = ids.map((id) => getBannerOffer(id)).filter((o): o is BannerOffer => !!o)
  const need = entry.cell.startsWith('B') ? 2 : 1
  if (offers.length < need) return null
  return { group, cell: entry.cell, placement: placementFor(group, AFF_BANNER_PHASE), phase: AFF_BANNER_PHASE, offers: offers.slice(0, need) }
}

/** AP2 position (after the section at this index): ~40% of the body like the promo P2; pages with fewer than 3 sections get it after the first section. */
export function bannerMidIndex(sectionCount: number): number | null {
  if (sectionCount < 1) return null
  return promoMidArticleIndex(sectionCount) ?? Math.max(0, sectionCount - 2)
}
