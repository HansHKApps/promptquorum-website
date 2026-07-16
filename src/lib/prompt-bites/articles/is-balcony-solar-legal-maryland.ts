// Slug: is-balcony-solar-legal-maryland
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in Maryland?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Maryland? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — HB 1532 took effect immediately on signing, May 12, 2026, via an emergency clause. 1,200W cap, no waiting period. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Maryland',
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Maryland?',
        answer: 'Yes. Maryland HB 1532 (the Utility RELIEF Act) was signed May 12, 2026 and took effect immediately via an emergency clause — no waiting period before residents could legally install a qualifying device.',
        bullets: [
          'HB 1532 signed May 12, 2026 with an emergency clause — effective immediately, no waiting period',
          '1,200W cap, with a lower 391W sub-threshold called out in the broader regulatory template',
          'No fully UL 3700-certified system is confirmed available yet',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Maryland HB 1532 took effect immediately on signing, May 12, 2026 — no waiting period, unlike most other states.',
          'The 1,200W cap matches the majority template; a separate 391W sub-threshold is also referenced in the regulatory framework.',
          'Maryland\'s DC-adjacent location means many residents pay DC-area electricity rates, relevant context even though a Maryland-specific savings figure isn\'t independently confirmed here.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Does HB 1532 Require in Maryland?',
        content: [
          '**Maryland\'s HB 1532, the Utility RELIEF Act, is the fastest-moving of the 8 enacted state laws — it carried an emergency clause, meaning it took effect immediately on signing rather than after a standard waiting period.** The standard cap is 1,200W, matching the majority template used across most enacted states. A separate 391W sub-threshold also appears in the broader multi-state regulatory framework, which may apply lighter-touch treatment to smaller devices — confirm the exact mechanics against Maryland\'s statutory text before relying on the distinction for a specific device.',
          'Like other enacted states, net metering does not apply — excess power exported to the grid earns no compensation, and the exact cap figures here were not independently re-verified against primary Maryland Public Service Commission text this pass.',
        ],
        columns: ['Field', 'Maryland HB 1532'],
        rows: [
          { Field: 'Signed / Effective', 'Maryland HB 1532': 'May 12, 2026 / Immediate (emergency clause)' },
          { Field: 'Wattage cap', 'Maryland HB 1532': '1,200W (391W sub-threshold referenced)' },
          { Field: 'Net metering', 'Maryland HB 1532': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Are Certified Kits Actually Available Yet?',
        content: [
          '**Maryland\'s law, like every other enacted state\'s, references UL 3700 as the safety benchmark, but no complete plug-in solar system has confirmed full certification as of write-time.** The standard was published December 2025 with testing opening January 2026 — a gap that applies nationally. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah, not Maryland.',
          'Maryland wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Maryland-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — Maryland\'s DC-adjacent electricity rates likely put it toward the higher end of that range, but treat this as a national range, not a confirmed Maryland estimate.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Maryland Balcony Solar',
        faqs: [
          {
            q: 'Did I have to wait after Maryland\'s law was signed to install a device?',
            a: 'No. HB 1532 carried an emergency clause, so it took effect immediately on the May 12, 2026 signing date — unlike states with a standard delayed effective date.',
          },
          {
            q: 'Can my HOA in Maryland ban balcony solar?',
            a: 'HB 1532 doesn\'t include explicit HOA preemption language, so check your lease or HOA covenant separately. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'What is the 391W sub-threshold mentioned for Maryland?',
            a: 'A lower wattage tier referenced in the broader multi-state regulatory framework alongside the standard 1,200W cap — confirm the exact treatment against Maryland\'s statutory text before relying on it for a specific device.',
          },
          {
            q: 'Do I get paid for excess power in Maryland?',
            a: 'No. Net metering does not apply to balcony solar devices under HB 1532, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
}
