// Slug: is-balcony-solar-legal-virginia
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in Virginia?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Virginia? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — in effect since July 1, 2026 under HB 395/SB 250. 1,200W cap, and localities cannot ban it within that limit. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Virginia',
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-maine',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Virginia?',
        answer: 'Yes. Virginia HB 395/SB 250 was signed April 22, 2026 and took effect July 1, 2026. Devices up to 1,200W qualify, and localities cannot enact their own ban within that state cap.',
        bullets: [
          'HB 395/SB 250 signed April 22, 2026, effective July 1, 2026 — already in force',
          '1,200W cap; localities cannot ban balcony solar within that cap',
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
          'Virginia HB 395/SB 250 has been in effect since July 1, 2026.',
          'The 1,200W cap matches the majority template used by most of the 8 enacted states.',
          'Localities cannot pass their own ban on balcony solar within the state\'s 1,200W cap — a meaningful protection against city- or county-level restrictions.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Does HB 395/SB 250 Require in Virginia?',
        content: [
          '**Virginia\'s law follows the standard template used by most enacted states: devices up to 1,200W connecting via a standard outlet are exempt from full utility interconnection requirements, with net metering excluded.** The distinguishing provision is local preemption — Virginia\'s law explicitly bars cities and counties from enacting their own restrictions or bans on balcony solar within the state\'s 1,200W cap, closing a gap that exists in states without that language.',
          'That local preemption does not extend to HOAs or private leases — a city cannot ban the devices, but an HOA covenant or a landlord\'s lease terms could still restrict where or whether you install one.',
        ],
        columns: ['Field', 'Virginia HB 395/SB 250'],
        rows: [
          { Field: 'Signed / Effective', 'Virginia HB 395/SB 250': 'Apr 22, 2026 / Jul 1, 2026' },
          { Field: 'Wattage cap', 'Virginia HB 395/SB 250': '1,200W' },
          { Field: 'Local bans', 'Virginia HB 395/SB 250': 'Prohibited within the state cap' },
          { Field: 'Net metering', 'Virginia HB 395/SB 250': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Are Certified Kits Actually Available Yet?',
        content: [
          '**Like every other enacted state, Virginia\'s law references UL 3700 as the safety standard, but no complete plug-in solar system has confirmed full certification as of write-time.** The standard was published December 2025 with testing opening January 2026 — a gap that applies nationally, not specifically to Virginia. EcoFlow\'s STREAM Ultra is the closest product to market but is currently listed for sale specifically in Utah.',
          'Virginia wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Virginia-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Virginia estimate, until state-specific data is confirmed.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Virginia Balcony Solar',
        faqs: [
          {
            q: 'Can my city or county in Virginia ban balcony solar?',
            a: 'No. HB 395/SB 250 explicitly prohibits localities from enacting their own bans within the state\'s 1,200W cap — this is one of Virginia\'s stronger consumer protections compared to states without that language.',
          },
          {
            q: 'Can my HOA in Virginia still restrict balcony solar?',
            a: 'The local-ban prohibition applies to cities and counties, not HOAs or private leases — check your HOA covenant separately. For a state that also blocks HOA bans specifically, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Is Virginia\'s law already in effect?',
            a: 'Yes, since July 1, 2026 — unlike Colorado and Connecticut\'s balcony solar laws, which are signed but not yet in effect.',
          },
          {
            q: 'Do I get paid for excess power exported to the grid in Virginia?',
            a: 'No. Net metering does not apply to balcony solar devices under this law, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
}
