// Slug: is-balcony-solar-legal-new-hampshire
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
//
// NOTE: the source doc's own summary says only Colorado and Connecticut are
// "not yet in effect" among the 8 signed states, but its own state table lists
// New Hampshire's effective date as Jul 27, 2026 — after this batch's write-time
// (2026-07-16). Treated here as "signed, not yet in effect" for accuracy rather
// than following the doc's 2-state count, consistent with the doc's own stated
// standard of not rounding up to "legal now." Flag this discrepancy if the
// source doc is revised.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in New Hampshire?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in New Hampshire? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signed, taking effect July 27, 2026. SB 540 makes New Hampshire the first Northeast state, with a 1,200W cap. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-07-27',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in New Hampshire',
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in New Hampshire?',
        answer: 'Signed, but not yet in effect as of write-time. New Hampshire SB 540 was signed May 28, 2026 and takes effect July 27, 2026 — making New Hampshire the first Northeast state to enact a balcony solar law, with a standard 1,200W cap.',
        bullets: [
          'SB 540 signed May 28, 2026 — takes effect July 27, 2026',
          'First Northeast state to enact a balcony solar law',
          'New Hampshire has the highest electricity rate of the 8 enacted states, at 28.1¢/kWh',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'New Hampshire SB 540 is signed but takes effect July 27, 2026 — check the date before assuming it applies today.',
          'New Hampshire is the first Northeast state to enact a dedicated balcony solar law.',
          'At 28.1¢/kWh, New Hampshire has the highest average residential electricity rate of the 8 enacted states — a strong economics story once hardware is available.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Will SB 540 Require in New Hampshire?',
        content: [
          '**New Hampshire SB 540 follows the standard 1,200W cap used by most enacted states, and makes New Hampshire the first Northeast state to pass dedicated balcony solar legislation.** It was signed May 28, 2026 and takes effect July 27, 2026 — check today\'s date against that effective date before assuming the law already applies to you. Once in effect, it will follow the standard exemption template: no utility interconnection agreement or fee, with net metering excluded for exported power.',
          'No HOA or landlord preemption language for New Hampshire was confirmed in this pass — check your lease or HOA covenant separately once the law is in effect.',
        ],
        columns: ['Field', 'New Hampshire SB 540'],
        rows: [
          { Field: 'Signed / Effective', 'New Hampshire SB 540': 'May 28, 2026 / Jul 27, 2026' },
          { Field: 'Wattage cap', 'New Hampshire SB 540': '1,200W' },
          { Field: 'Net metering', 'New Hampshire SB 540': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Is the Economics Story Strong in New Hampshire?',
        content: [
          '**New Hampshire has the highest average residential electricity rate of the 8 enacted states, at 28.1¢/kWh — more than double Utah\'s 11.6¢/kWh.** That means once compliant hardware is available, the return on an 800W kit should be meaningfully better than in lower-rate states, though a New Hampshire-specific dollar figure wasn\'t in the source tracker\'s state-by-state savings table used for this series. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local rates — New Hampshire\'s high rate likely puts it toward the top of that range, but treat this as a national range, not a confirmed New Hampshire estimate.',
          'Certification is the other gate: no complete plug-in solar system has confirmed full UL 3700 certification as of write-time, a nationwide gap that applies regardless of New Hampshire\'s effective date. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About New Hampshire Balcony Solar',
        faqs: [
          {
            q: 'Is balcony solar legal in New Hampshire right now?',
            a: 'SB 540 is signed but doesn\'t take effect until July 27, 2026. Check today\'s date against that before assuming the law already covers you.',
          },
          {
            q: 'Why does New Hampshire matter for balcony solar?',
            a: 'It\'s the first Northeast state to pass dedicated legislation, and it has the highest electricity rate (28.1¢/kWh) of the 8 enacted states — a strong potential return once compliant hardware ships.',
          },
          {
            q: 'Can my HOA in New Hampshire ban balcony solar?',
            a: 'No HOA preemption language for New Hampshire was confirmed in this pass — check your lease or HOA covenant. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Do I get paid for excess power in New Hampshire?',
            a: 'No. Net metering does not apply to balcony solar devices under SB 540, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
}
