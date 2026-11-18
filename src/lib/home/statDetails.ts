// Per-app detail lists behind the "Apps verified by their makers" and "Apps
// tested hands-on" homepage stat tiles (src/components/home/StatListDrawer.tsx).
// Kept out of stats.ts so the count-only call sites there stay cheap — these
// helpers build the full row list only when a visitor actually opens a drawer.

import type { Language } from '@/lib/blog/blogContent'
import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import { getFounderReviewDates } from '@/components/local-ai-directory/founderStar'
import { featureReviewUrl } from '@/components/local-ai-directory/reviewLinks'
import { HANDS_ON_TEST_SLUGS, handsOnTestUrl, getHandsOnTest } from '@/lib/hands-on-tests'

export interface FounderVerifiedAppRow {
  slug: string
  name: string
  tagline: string
  date: string
  reviewCount: number
  href: string
}

export interface HandsOnTestedAppRow {
  slug: string
  name: string
  dek: string
  date: string
  href: string | null
}

function directoryToolHref(slug: string, lang: Language): string {
  const prefix = lang === 'en' ? '' : `/${lang}`
  return `${prefix}/directory?tool=${slug}`
}

/** Rows for the "Apps verified by their makers" drawer, most recent review first. */
export function getFounderVerifiedApps(lang: Language): FounderVerifiedAppRow[] {
  return localAiApps
    .filter((app) => app.founder != null || app.founderReviewedDate != null)
    .map((app) => {
      const dates = getFounderReviewDates(app)
      return {
        slug: app.slug,
        name: app.name,
        tagline: app.tagline[lang] ?? app.tagline.en ?? '',
        date: dates[dates.length - 1] ?? app.founderReviewedDate ?? app.addedDate ?? '',
        reviewCount: dates.length,
        href: featureReviewUrl(app.slug, lang) ?? directoryToolHref(app.slug, lang),
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

/** Rows for the "Apps tested hands-on" drawer, most recently published test first. */
export function getHandsOnTestedApps(lang: Language): HandsOnTestedAppRow[] {
  return HANDS_ON_TEST_SLUGS.map((slug) => {
    // Falls back to EN when this locale has no translation yet (handsOnTestUrl below returns
    // null in that case — the row still renders, just without a working link for this locale).
    const test = getHandsOnTest(slug, lang) ?? getHandsOnTest(slug, 'en')
    return {
      slug,
      name: test?.app.name ?? slug,
      dek: test?.dek ?? '',
      date: test?.published ?? '',
      href: handsOnTestUrl(slug, lang),
    }
  }).sort((a, b) => b.date.localeCompare(a.date))
}
