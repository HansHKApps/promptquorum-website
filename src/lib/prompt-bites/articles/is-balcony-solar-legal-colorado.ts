// Slug: is-balcony-solar-legal-colorado
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in Colorado?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Colorado? | Prompt Bites | PromptQuorum',
    metaDescription: 'Signed, not yet in effect. HB26-1007 takes effect January 1, 2027 with the highest US cap (1,920W) and an explicit HOA-ban prohibition. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-01',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Colorado',
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Colorado?',
        answer: 'Signed, but not yet in effect. Colorado HB26-1007 was signed May 7, 2026 and takes effect January 1, 2027. It sets the highest wattage cap of any enacted state (1,920W) and is the only one that explicitly bars HOAs and landlords from banning balcony solar.',
        bullets: [
          'HB26-1007 signed May 7, 2026 — takes effect January 1, 2027, not yet in effect as of write-time',
          '1,920W cap — the highest of any US state balcony solar law found',
          'Explicit HOA/landlord ban prohibition — the strongest such protection among the 8 enacted states',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Colorado HB26-1007 is signed but does not take effect until January 1, 2027 — don\'t treat it as usable law yet.',
          'At 1,920W, Colorado allows the highest wattage cap of any enacted US state.',
          'Colorado is the only one of the 8 enacted states that explicitly prohibits HOAs and landlords from banning balcony solar.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Will HB26-1007 Require in Colorado?',
        content: [
          '**Colorado HB26-1007 sets a 1,920W cap — the highest of any enacted US balcony solar law — but the law does not take effect until January 1, 2027, so it is not usable yet as of write-time.** Once in effect, it will follow the standard exemption template (no utility interconnection agreement or fee, net metering excluded) with one major addition: explicit language prohibiting HOAs and landlords from banning balcony solar outright.',
          'That HOA/landlord provision makes Colorado\'s law the strongest consumer protection among the 8 enacted states — every other state in this series either has no such language or hasn\'t been independently confirmed to include it.',
        ],
        columns: ['Field', 'Colorado HB26-1007'],
        rows: [
          { Field: 'Signed / Effective', 'Colorado HB26-1007': 'May 7, 2026 / Jan 1, 2027 (not yet in effect)' },
          { Field: 'Wattage cap', 'Colorado HB26-1007': '1,920W — highest of any state found' },
          { Field: 'HOA / landlord bans', 'Colorado HB26-1007': 'Explicitly prohibited' },
          { Field: 'Net metering', 'Colorado HB26-1007': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Should I Buy Hardware Now for Colorado?',
        content: [
          '**Not yet — the law isn\'t in effect until January 1, 2027, and separately, no complete plug-in solar system has confirmed full UL 3700 certification as of write-time.** Both gates need to clear before a purchase makes sense: the legal effective date, and product certification. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah, not Colorado.',
          'Colorado wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Colorado-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Colorado estimate, and note Colorado\'s 1,920W cap means a full-size system there could exceed what an 800W-kit estimate reflects.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Colorado Balcony Solar',
        faqs: [
          {
            q: 'Can I install balcony solar in Colorado right now?',
            a: 'The law is signed but doesn\'t take effect until January 1, 2027. Installing before then means you\'re not yet covered by HB26-1007\'s protections and exemptions.',
          },
          {
            q: 'Can my HOA in Colorado ban balcony solar once the law takes effect?',
            a: 'No. Colorado\'s law explicitly prohibits HOAs and landlords from banning balcony solar — the strongest such protection among the 8 enacted states in this series.',
          },
          {
            q: 'Why is Colorado\'s wattage cap higher than other states?',
            a: 'At 1,920W, Colorado set the highest cap of any enacted US balcony solar law found in this tracking — well above the 1,200W standard used by most other states.',
          },
          {
            q: 'Will I be able to sell excess power back to the grid in Colorado?',
            a: 'No. Net metering will not apply to balcony solar devices under HB26-1007, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
}
