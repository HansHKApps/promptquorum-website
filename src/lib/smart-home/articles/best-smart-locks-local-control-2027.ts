import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    title: 'Best Smart Locks With Local Control (2027)',
    seoTitle: 'Best Smart Locks, Local Control (2027)',
    intro:
      'The best smart locks for a local-first smart home support Zigbee, Z-Wave, or Matter-over-Thread for basic lock/unlock control without requiring a cloud account, distinct from cloud-dependent lock brands that route every command through a manufacturer server. [VERIFY: current specific lock models, their confirmed local-control support, and pricing] before treating a product recommendation as current — some manufacturers have removed local APIs in firmware updates after launch.',
    metaDescription:
      'Best smart locks with local control in 2027: Zigbee, Z-Wave, or Matter locks that work without a cloud account. Buying guide with what to verify before purchase.',
    twitterDescription:
      'Smart lock buying guide focused on genuine local control — Zigbee, Z-Wave, or Matter locks that don\'t require a cloud account for basic lock/unlock.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Smart home buyers choosing a lock with genuine local control',
    primaryTerm: 'best smart lock local control',
    targetKeywords: [
      'best smart lock local control no cloud',
      'zigbee smart lock 2027',
      'z-wave smart lock home assistant',
      'matter smart lock',
      'smart lock without app subscription',
    ],
    leadAnswerBlock:
      '**The best smart locks for local control use Zigbee, Z-Wave, or Matter-over-Thread and integrate directly with Home Assistant for lock/unlock and status without requiring a manufacturer cloud account.** [VERIFY: current specific models and their confirmed local-control status] before buying — some lock manufacturers have removed local APIs via firmware update after initial launch, so check current, not launch-era, documentation.',
    quickAnswerTop: {
      en: {
        question: 'Which smart locks work locally without a cloud account?',
        answer:
          'Look for locks that use Zigbee, Z-Wave, or Matter-over-Thread — these integrate with Home Assistant directly over your local network for lock/unlock and status, without needing the manufacturer\'s cloud service for basic operation. [VERIFY: the current, confirmed local-control support] for any specific model against its current firmware documentation — this is a category where firmware updates have occasionally removed local APIs after initial launch, so don\'t rely on launch-era reviews alone.',
        bullets: [
          'Look for: Zigbee, Z-Wave, or Matter-over-Thread protocol support',
          'Confirms local control: direct Home Assistant integration without a manufacturer cloud account required',
          '[VERIFY: current firmware behavior] — some manufacturers have removed local APIs after launch',
          'Bluetooth-only locks often still require the manufacturer app as a bridge — check before assuming local control',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Protocols to Look For', anchor: 'protocols' },
      { label: 'What to Verify Before Buying', anchor: 'what-to-verify' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Smart locks with genuine local control use Zigbee, Z-Wave, or Matter-over-Thread and integrate directly with Home Assistant, without needing a manufacturer cloud account for basic operation.' },
      { type: 'plain-terms', content: 'Some smart locks only work through the maker\'s own app and their servers, even for simply locking your door. This guide is about finding locks that talk directly to your own smart home hub instead, so locking and unlocking still works even if the manufacturer\'s app or company goes away.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Look for Zigbee, Z-Wave, or Matter-over-Thread protocol support for direct Home Assistant integration',
          'Bluetooth-only locks often still require the manufacturer app as a bridge — verify before assuming local control',
          '[VERIFY: current firmware behavior for specific models] — some manufacturers have removed local APIs after initial launch',
          'A local-control lock keeps working (lock/unlock, status) even if the manufacturer discontinues its app or cloud service',
        ],
      },
      protocols: {
        id: 'protocols',
        title: 'Protocols to Look For',
        content:
          '**Zigbee and Z-Wave locks have the longest track record of reliable local control through Home Assistant; Matter-over-Thread locks are newer but growing, and Bluetooth-only locks usually need the manufacturer app as an intermediary.**',
        items: [
          'Zigbee/Z-Wave: mature protocols with well-established Home Assistant integrations — generally the safest choice for confirmed local control today.',
          'Matter-over-Thread: increasingly available, and Matter-certified locks are portable between hubs, but [VERIFY: current specific model availability and confirmed local-control depth] before assuming feature parity with established Zigbee/Z-Wave locks.',
          'Bluetooth-only: typically requires the manufacturer\'s app or a bridge device, and often depends on that app remaining supported — check specifically whether a Bluetooth lock has any direct local API before assuming it qualifies here.',
        ],
      },
      whatToVerify: {
        id: 'what-to-verify',
        title: 'What to Verify Before Buying',
        content:
          '**Check the manufacturer\'s current (not launch-era) documentation for local API support, confirm whether firmware updates have changed this, and verify Home Assistant has a maintained integration for the specific model.**',
        items: [
          'Search for the specific lock model plus "Home Assistant integration" in current documentation or community forums, rather than relying only on the manufacturer\'s marketing page.',
          '[VERIFY: whether recent firmware updates have added or removed local-control features] for any specific model — this has happened in this product category before.',
          'Confirm battery life and physical build quality through current independent reviews — this guide focuses on the local-control angle specifically, not general lock hardware quality.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do Bluetooth smart locks work locally?', a: 'Usually not fully — most Bluetooth-only locks rely on the manufacturer\'s app or a bridge device as an intermediary. Check for a confirmed direct local API before assuming otherwise.' },
          { q: 'Is Matter better than Zigbee for smart locks?', a: 'Matter offers hub portability (not locked to one ecosystem), but Zigbee and Z-Wave have a longer track record of confirmed, stable local control through Home Assistant. [VERIFY: current Matter lock model maturity] before choosing.' },
          { q: 'Can a manufacturer remove local control after I buy a lock?', a: 'It has happened in this product category via firmware update — check current documentation and community reports, not just launch-era reviews, before purchasing.' },
          { q: 'Does a local-control lock still need a battery?', a: 'Yes — protocol choice (Zigbee, Z-Wave, Matter) is separate from power source. Nearly all smart locks are battery-powered regardless of local-control support.' },
          { q: 'Can I use a local-control lock with a voice assistant?', a: 'Yes — once integrated with Home Assistant, a lock can be exposed to a local voice assistant (see the local voice assistant guide) the same way any other entity would be.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: Protocols Explained](/smart-home/smart-home-protocols-explained) — the protocol fundamentals',
          '[Best Zigbee and Thread USB Dongles](/smart-home/best-zigbee-thread-dongles-2027) — the radio hardware these locks pair with',
          '[Best Smart Home Devices 2026: A Buyer\'s Guide](/smart-home/best-smart-home-devices-2026) — device picks by category',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Smart Locks With Local Control (2027)',
      description: 'Best smart locks with local control: Zigbee, Z-Wave, or Matter locks that work without a cloud account.',
      url: 'https://www.promptquorum.com/smart-home/best-smart-locks-local-control-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart lock' }, { '@type': 'Thing', name: 'Local control' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do Bluetooth smart locks work locally?', acceptedAnswer: { '@type': 'Answer', text: 'Usually not fully — most rely on the manufacturer\'s app or a bridge device as an intermediary.' } },
        { '@type': 'Question', name: 'Is Matter better than Zigbee for smart locks?', acceptedAnswer: { '@type': 'Answer', text: 'Matter offers hub portability, but Zigbee and Z-Wave have a longer track record of confirmed, stable local control.' } },
        { '@type': 'Question', name: 'Can a manufacturer remove local control after I buy a lock?', acceptedAnswer: { '@type': 'Answer', text: 'It has happened in this category via firmware update — check current documentation before purchasing.' } },
      ],
    },
  },
}
