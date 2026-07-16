// Slug: is-balcony-solar-legal-maine
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only, part of the balcony-solar
// state-regulation round-1 batch. See is-balcony-solar-legal-utah.ts header for
// the full exception rationale. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in Maine?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Maine? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes, since July 15, 2026 under LD 1730 — with a unique two-tier cap: 420W self-install or 1,200W with a licensed electrician. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Maine',
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-utah',
      'is-balcony-solar-legal-virginia',
      'is-balcony-solar-legal-maryland',
      'is-balcony-solar-legal-colorado',
      'is-balcony-solar-legal-new-hampshire',
      'is-balcony-solar-legal-vermont',
      'is-balcony-solar-legal-connecticut',
    ],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Maine?',
        answer: 'Yes. Maine LD 1730 was signed April 6, 2026 and took effect July 15, 2026. Maine is the only one of the 8 enacted states with a two-tier cap: up to 420W as a self-install, or up to 1,200W if a licensed electrician does the connection.',
        bullets: [
          'LD 1730 signed April 6, 2026, effective July 15, 2026',
          'Unique two-tier cap: 420W self-install vs. 1,200W with a licensed electrician',
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
          'Maine LD 1730 has been law since July 15, 2026.',
          'Maine is the only one of the 8 enacted states with a DIY/professional split: 420W self-install, 1,200W with a licensed electrician.',
          'State-specific savings data for Maine wasn\'t in the source tracker used for this series — see the national range below rather than a Maine-specific figure.',
          'No complete system has confirmed full UL 3700 certification yet, same as every other enacted state.',
        ],
      },
      body1: {
        title: 'What Does LD 1730 Require in Maine?',
        content: [
          '**Maine LD 1730 is the only one of the 8 enacted balcony solar laws with a two-tier wattage cap based on who installs the system.** A resident can self-install a device up to 420W without a licensed electrician. To go up to the standard 1,200W cap used by most other states, a licensed electrician must handle the connection. This DIY/professional split doesn\'t appear in any of the other 7 state laws in this series — it\'s Maine\'s distinguishing feature.',
          'Like the other enacted states, devices meeting the requirements are exempt from full utility interconnection agreements, and net metering does not apply to excess exported power.',
        ],
        columns: ['Field', 'Maine LD 1730'],
        rows: [
          { Field: 'Signed / Effective', 'Maine LD 1730': 'Apr 6, 2026 / Jul 15, 2026' },
          { Field: 'Wattage cap', 'Maine LD 1730': '420W self-install; 1,200W with electrician' },
          { Field: 'Net metering', 'Maine LD 1730': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Are Certified Kits Actually Available Yet?',
        content: [
          '**UL 3700, the safety certification standard referenced by every enacted state\'s law including Maine\'s, has not yet been fully achieved by any complete plug-in solar system as of write-time.** The standard was published December 2025 and certification testing opened January 2026 — testing takes months, so the gap between "legal to install" and "certified product available" is a pattern across all 8 states, not a Maine-specific issue. EcoFlow\'s STREAM Ultra is the closest to market but is currently listed for sale specifically in Utah, not nationally.',
          'Maine wasn\'t in the source tracker\'s state-by-state savings table used for this series, so a Maine-specific dollar figure isn\'t available here. Across the states that were tracked, an 800W kit saves roughly $150–$350 per year depending on local electricity rates — treat that as a national range, not a Maine estimate, until state-specific data is confirmed.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Maine Balcony Solar',
        faqs: [
          {
            q: 'Can I install a 1,200W balcony solar kit myself in Maine?',
            a: 'No. Self-install is capped at 420W in Maine. Reaching the 1,200W cap used by most other states requires a licensed electrician to make the connection.',
          },
          {
            q: 'Can my HOA in Maine ban balcony solar?',
            a: 'LD 1730 doesn\'t include explicit HOA preemption language, so check your lease or HOA covenant separately. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Why does Maine have a different cap than other states?',
            a: 'Maine\'s two-tier structure ties the higher 1,200W cap to professional installation, a distinction none of the other 7 enacted states in this series make.',
          },
          {
            q: 'Do I get paid for excess power in Maine?',
            a: 'No. Net metering does not apply to balcony solar devices under LD 1730, consistent with every other enacted state.',
          },
        ],
      },
    },
  },
}
