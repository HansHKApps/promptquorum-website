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
import { getComparableGroups } from '@/lib/power-local-llm/compare-data'

/**
 * The English-only dynamic homepage. Every block surfaces existing content
 * in a fresh arrangement — no new content is authored for this page. Layout
 * follows importance (3 uneven tiers), not a uniform grid; every block goes
 * through the shared HomeCard primitive so the page reads as one coherent
 * system despite the uneven sizing.
 *
 * The hero/product-pitch/waitlist-CTA and the Features/How-It-Works/FAQ
 * sections that used to live here are gone (redundant with /pq-apps now,
 * and the signup funnel lives on at /download and /waitlist) — this
 * component owns the page's <h1> instead, since nothing else does anymore.
 */
export function HomeEn() {
  return (
    <main>
      <div className="border-b border-hero-edge bg-linear-to-r from-hero-from to-hero-to">
        <h1 className="container mx-auto px-4 py-5 max-w-7xl text-2xl font-bold text-text-primary">
          PromptQuorum: Local LLM Directory &amp; Guides
        </h1>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Tier 1 — large, top of page */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <IntentSearchBlock />
          <ComparisonToolShell groups={getComparableGroups()} />
        </section>

        {/* Tier 2 — medium */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
          <LatestPostsBlock />
          <LatestAppsBlock />
          <FounderReviewsBlock />
          <TrendingBlock />
          <RecentlyUpdatedBlock />
        </section>

        {/* Tier 3 — small/compact */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <ByTheNumbersBlock />
          <RecentMentionsBlock />
          <FeedbackBlock />
          <QuickTipBlock />
        </section>
      </div>
    </main>
  )
}
