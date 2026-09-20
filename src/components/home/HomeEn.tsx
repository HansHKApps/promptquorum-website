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
    <main className="container mx-auto px-4 py-10 max-w-7xl">
      <h1 className="text-2xl font-bold text-text-primary mb-8">PromptQuorum: Local LLM Directory &amp; Guides</h1>

      {/* Tier 1 — large, top of page */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <IntentSearchBlock />
        <ComparisonToolShell />
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
    </main>
  )
}
