// Slug: is-balcony-solar-legal-connecticut
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in Connecticut?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Connecticut? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signed, not yet in effect. HB 5340 takes effect October 1, 2026 as part of a broader omnibus solar bill, with a 1,200W cap. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Connecticut',
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Connecticut?',
        answer: 'Signed, but not yet in effect. Connecticut HB 5340 was signed June 4, 2026 and takes effect October 1, 2026. It\'s part of a broader omnibus solar bill rather than a standalone balcony solar law, with a standard 1,200W cap.',
        bullets: [
          'HB 5340 signed June 4, 2026 — takes effect October 1, 2026, not yet in effect as of write-time',
          'Part of a broader omnibus solar bill, not a standalone balcony solar law',
          '1,200W cap, matching the majority template used by most enacted states',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Connecticut HB 5340 is signed but does not take effect until October 1, 2026 — don\'t treat it as usable law yet.',
          'Unlike most of the other 7 enacted states, Connecticut\'s balcony solar provisions are part of a broader omnibus solar bill, not standalone legislation.',
          'The 1,200W cap matches the majority template used across most enacted states.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Will HB 5340 Require in Connecticut?',
        content: [
          '**Connecticut HB 5340 folds balcony solar provisions into a broader omnibus solar bill, rather than passing standalone legislation the way most of the other 7 enacted states did.** It sets a 1,200W cap matching the majority template, but the law does not take effect until October 1, 2026 — it is not usable yet as of write-time. Once in effect, expect the standard exemption structure: no utility interconnection agreement or fee, with net metering excluded.',
          'No HOA or landlord preemption language for Connecticut was confirmed in this pass — check your lease or HOA covenant separately once the law is in effect.',
        ],
        columns: ['Field', 'Connecticut HB 5340'],
        rows: [
          { Field: 'Signed / Effective', 'Connecticut HB 5340': 'Jun 4, 2026 / Oct 1, 2026 (not yet in effect)' },
          { Field: 'Wattage cap', 'Connecticut HB 5340': '1,200W' },
          { Field: 'Bill structure', 'Connecticut HB 5340': 'Omnibus solar bill, not standalone' },
          { Field: 'Net metering', 'Connecticut HB 5340': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Should I Buy Hardware Now for Connecticut?',
        content: [
          '**Not yet — the law isn\'t in effect until October 1, 2026, and separately, no complete plug-in solar system has confirmed full UL 3700 certification as of write-time.** Both gates need to clear: the legal effective date and product certification. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah, not Connecticut.',
          'Connecticut wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Connecticut-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Connecticut estimate.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Connecticut Balcony Solar',
        faqs: [
          {
            q: 'Is balcony solar legal in Connecticut right now?',
            a: 'HB 5340 is signed but doesn\'t take effect until October 1, 2026. Installing before then means you\'re not yet covered by its exemptions.',
          },
          {
            q: 'Why is Connecticut\'s balcony solar provision part of a bigger bill?',
            a: 'HB 5340 is an omnibus solar bill covering multiple solar policy areas, with balcony solar as one component — unlike most of the other 7 enacted states, which passed dedicated standalone legislation.',
          },
          {
            q: 'Can my HOA in Connecticut ban balcony solar?',
            a: 'No HOA preemption language for Connecticut was confirmed in this pass — check your lease or HOA covenant. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Will I be able to sell excess power back to the grid in Connecticut?',
            a: 'No. Net metering will not apply to balcony solar devices under HB 5340, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
}
