// Slug: is-balcony-solar-legal-utah
// EXCEPTION to PROMPT_BITES_WRITING_GUIDE.md: EN-only (no de/fr/ja/zh/es/pt/ar/ko
// blocks) and single-topic, but otherwise follows the standard Prompt Bite shape
// (600-900 words, max 3 H2s, quickAnswerTop-first). Legal/regulatory tracking
// content doesn't fit the mobile "one-number answer" bite format used elsewhere
// in this cluster, but the compressed structure still applies. See
// BALCONY_SOLAR_STATE_REGULATION_ROUND1.md for the round-1 brief covering this
// and 7 sibling state pages. Facts sourced from US-Balcony-Solar-Regulation-Overview.md.
import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'US Balcony Solar Regulation',
    title: 'Is Balcony Solar Legal in Utah?',
    dateModified: '2026-07-16',
    seoTitle: 'Is Balcony Solar Legal in Utah? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — legal since May 7, 2025 under HB 340. 1,200W cap, no utility fees, but UL 3700 certified products still aren\'t on shelves. Quick answer from PromptQuorum.',
    publishDate: '2026-07-16',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-16',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'US renters and homeowners checking whether balcony solar is legal in Utah',
    parentArticle: '/balcony-solar/balcony-solar-legal-us-states',
    siblingBites: [
      'is-balcony-solar-legal-maine',
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
        question: 'Is balcony solar legal in Utah?',
        answer: 'Yes. Utah HB 340 (the Solar Power Amendments) has been law since May 7, 2025 — the first state law of its kind in the US. It allows plug-in solar devices up to 1,200W with no utility interconnection agreement, fee, or notification required.',
        bullets: [
          'HB 340 signed March 2025, effective May 7, 2025 — the first US state law of its kind',
          '1,200W cap via a standard 120V AC outlet, no utility approval needed',
          'No fully UL 3700-certified system is confirmed available yet, even in Utah',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Utah HB 340 has been law since May 7, 2025 — the pioneer balcony solar law in the US.',
          'Devices up to 1,200W qualify; no interconnection agreement, approval, or utility fee is required.',
          'Net metering does not apply — excess power fed back to the grid earns no compensation.',
          'The certification standard (UL 3700) exists, but no complete system has confirmed full certification yet — check before buying.',
        ],
      },
      body1: {
        title: 'What Does HB 340 Require in Utah?',
        content: [
          '**Utah\'s HB 340 defines a "small portable solar generation device" as one that outputs no more than 1,200 watts, connects via a standard 120V AC outlet, and is certified by a nationally recognized testing laboratory.** Devices meeting that definition are exempt from utility interconnection agreements, approval requirements, and fees — no notification to your utility is required at all. The tradeoff: the device cannot participate in net metering, so any excess power exported to the grid earns no compensation. Rocky Mountain Power, the state\'s largest utility, took no formal position on the bill after Representative Raymond Ward worked directly with them on the safety language.',
          'The law does not include explicit HOA or landlord preemption language — unlike Colorado\'s 2026 law — so a lease or HOA agreement could still restrict where you mount a panel even though the state itself has cleared plug-in solar for use.',
        ],
        columns: ['Field', 'Utah HB 340'],
        rows: [
          { Field: 'Signed / Effective', 'Utah HB 340': 'Mar 2025 / May 7, 2025' },
          { Field: 'Wattage cap', 'Utah HB 340': '1,200W' },
          { Field: 'Utility interconnection', 'Utah HB 340': 'Exempt — no fee or approval' },
          { Field: 'Net metering', 'Utah HB 340': 'Not available' },
        ],
        tableFormat: true,
      },
      body2: {
        title: 'Are Certified Kits Actually Available Yet?',
        content: [
          '**Utah\'s law required UL 3700 certification, but that standard didn\'t exist when HB 340 passed — UL Solutions only published it in December 2025, eight months after the law took effect, and certification testing opened January 2026.** As of write-time, no complete plug-in solar system has confirmed full UL 3700 certification. EcoFlow\'s STREAM Ultra (1.92 kWh, 1,200W, $1,279 list, 10-year LFP warranty) is listed for sale in Utah specifically, but full legal use still depends on completing that certification — don\'t assume a product marketed as "UL 3700 compliant" has finished the process; verify the specific claim.',
          'Average residential electricity in Utah runs about 11.6¢/kWh — among the lowest of the states covered in this series — putting estimated savings from an 800W kit around $175/year. That\'s a real but modest return; Utah\'s significance is being first, not having the strongest economics.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Utah Balcony Solar',
        faqs: [
          {
            q: 'Can my HOA in Utah ban balcony solar?',
            a: 'Possibly. HB 340 legalizes the devices at the state level but does not include HOA or landlord preemption language, so check your lease or HOA covenant before installing. For a state that explicitly blocks HOA bans, see the <a href="/prompt-bites/is-balcony-solar-legal-colorado" class="text-primary hover:underline">Colorado balcony solar law</a>.',
          },
          {
            q: 'Do I need to register my system with my utility in Utah?',
            a: 'No. Devices under 1,200W meeting HB 340\'s requirements are exempt from interconnection agreements, approval, and notification entirely.',
          },
          {
            q: 'Can I get paid for excess power I generate?',
            a: 'No. HB 340 explicitly excludes plug-in solar from net metering — any power exported beyond what you consume earns no compensation.',
          },
          {
            q: 'Is the EcoFlow STREAM Ultra fully legal to use in Utah right now?',
            a: 'It\'s sold for the Utah market, but full legal use depends on completing UL 3700 certification, which no complete system has confirmed as of write-time — verify current certification status before assuming it\'s fully compliant.',
          },
        ],
      },
    },
  },
}
