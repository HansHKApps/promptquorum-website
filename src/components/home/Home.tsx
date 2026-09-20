import type { Language } from '@/lib/blog/blogContent'
import { getLangDir } from '@/lib/i18n/constants'
import { getComparableGroups } from '@/lib/power-local-llm/compare-data'
import { ComparisonToolShell } from './ComparisonToolShell'
import { IntentSearchBlock } from './IntentSearchBlock'
import { LatestPostsBlock } from './LatestPostsBlock'
import { LatestAppsBlock } from './LatestAppsBlock'
import { FounderReviewsBlock } from './FounderReviewsBlock'
import { TrendingBlock } from './TrendingBlock'
import { RecentlyUpdatedBlock } from './RecentlyUpdatedBlock'
import { ByTheNumbersBlock } from './ByTheNumbersBlock'
import { RecentMentionsBlock } from './RecentMentionsBlock'
import { FeedbackBlock } from './FeedbackBlock'
import { QuickTipBlock } from './QuickTipBlock'
import { t } from './home-i18n'

/**
 * The dynamic homepage, shared across all 9 locales. Every block surfaces
 * existing content in a fresh arrangement — no new content is authored for
 * this page. Layout follows importance (3 uneven tiers), not a uniform grid;
 * every block goes through the shared HomeCard primitive so the page reads
 * as one coherent system despite the uneven sizing.
 *
 * The hero/product-pitch/waitlist-CTA and the Features/How-It-Works/FAQ
 * sections that used to live here are gone (redundant with /pq-apps now,
 * and the signup funnel lives on at /download and /waitlist) — this
 * component owns the page's <h1> instead, since nothing else does anymore.
 */
export function Home({ lang }: { lang: Language }) {
  return (
    <main dir={getLangDir(lang)}>
      <div className="border-b border-hero-edge bg-linear-to-r from-hero-from to-hero-to">
        <div className="container mx-auto px-4 py-5 max-w-7xl">
          <h1 className="text-2xl font-bold text-text-primary">{t('pageH1', lang)}</h1>
          <p className="mt-1.5 text-base font-semibold text-primary">{t('heroTagline', lang)}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Tier 1 — large, top of page */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <IntentSearchBlock lang={lang} />
          <ComparisonToolShell groups={getComparableGroups(lang)} lang={lang} />
        </section>

        {/* Tier 2 — medium */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
          <LatestPostsBlock lang={lang} />
          <LatestAppsBlock lang={lang} />
          <FounderReviewsBlock lang={lang} />
          <TrendingBlock lang={lang} />
          <RecentlyUpdatedBlock lang={lang} />
        </section>

        {/* Tier 3 — small/compact */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <ByTheNumbersBlock lang={lang} />
          <RecentMentionsBlock lang={lang} />
          <FeedbackBlock lang={lang} />
          <QuickTipBlock lang={lang} />
        </section>
      </div>
    </main>
  )
}
