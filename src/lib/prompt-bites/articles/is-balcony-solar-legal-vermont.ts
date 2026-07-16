// Slug: is-balcony-solar-legal-vermont
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in Vermont?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Vermont? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — in effect since July 1, 2026 under S.202/H.598. 1,200W cap, UL 3700 certification explicitly required, net metering excluded. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Vermont',
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Vermont?',
        answer: 'Yes. Vermont S.202/H.598 took effect July 1, 2026. It caps devices at 1,200W and explicitly requires UL 3700 (or equivalent) certification by statute, with net metering excluded — one of the more explicitly worded laws among the 8 enacted states.',
        bullets: [
          'S.202/H.598 in effect since July 1, 2026',
          '1,200W cap, with UL 3700 (or equivalent) certification explicitly required by the statute\'s own text',
          'No fully UL 3700-certified system is confirmed available yet, so the certification requirement isn\'t fully satisfiable by any product today',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Vermont S.202/H.598 has been in effect since July 1, 2026.',
          'Vermont\'s statute explicitly names UL 3700 (or an equivalent) certification requirement in its own text, more explicitly than some other enacted states.',
          'Net metering is explicitly excluded for balcony solar devices under the law.',
          'No complete system has confirmed full UL 3700 certification yet, meaning Vermont\'s explicit certification requirement isn\'t fully satisfiable by any product as of write-time.',
        ],
      },
      body1: {
        title: 'What Does S.202/H.598 Require in Vermont?',
        content: [
          '**Vermont\'s law caps devices at 1,200W, matching the majority template, but is more explicit than most of the 8 enacted states in naming UL 3700 or an equivalent nationally recognized certification directly in the statutory text.** Net metering is explicitly excluded — excess power exported to the grid earns no compensation under the law.',
          'No HOA or landlord preemption language for Vermont was confirmed in this pass — check your lease or HOA covenant separately, since the state law addresses utility interconnection and certification, not HOA authority.',
        ],
        columns: ['Field', 'Vermont S.202/H.598'],
        rows: [
          { Field: 'Signed / Effective', 'Vermont S.202/H.598': '2026 / Jul 1, 2026' },
          { Field: 'Wattage cap', 'Vermont S.202/H.598': '1,200W' },
          { Field: 'Certification', 'Vermont S.202/H.598': 'UL 3700 or equivalent, explicitly required by statute' },
          { Field: 'Net metering', 'Vermont S.202/H.598': 'Explicitly excluded' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Does Vermont\'s Explicit UL 3700 Requirement Change Anything?',
        content: [
          '**Vermont naming UL 3700 explicitly in its statute doesn\'t change the underlying problem: no complete plug-in solar system has confirmed full UL 3700 certification as of write-time, the same gap facing every other enacted state.** The standard was published December 2025 with testing opening January 2026 — testing takes months, and Vermont\'s explicit statutory language doesn\'t speed that process up. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah, not Vermont.',
          'Vermont wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Vermont-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Vermont estimate.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Vermont Balcony Solar',
        faqs: [
          {
            q: 'Does Vermont require UL 3700 certification specifically?',
            a: 'Yes — Vermont\'s statute explicitly names UL 3700 or an equivalent nationally recognized certification, more directly than some other enacted states. No complete system has confirmed that certification yet, though.',
          },
          {
            q: 'Can I get paid for excess solar power I export in Vermont?',
            a: 'No. Vermont\'s law explicitly excludes balcony solar devices from net metering.',
          },
          {
            q: 'Can my HOA in Vermont ban balcony solar?',
            a: 'No HOA preemption language for Vermont was confirmed in this pass — check your lease or HOA covenant. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Is Vermont\'s law already in effect?',
            a: 'Yes, since July 1, 2026 — unlike Colorado and Connecticut, whose balcony solar laws are signed but not yet in effect.',
          },
        ],
      },
    },
  },
}
