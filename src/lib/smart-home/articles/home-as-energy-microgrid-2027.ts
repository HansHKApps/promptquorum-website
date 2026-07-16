import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    // Verified 2026-07-16: battery capacity figures below are cited directly from manufacturer
    // datasheets (Tesla's Energy Library, Enphase's own spec sheet) as anchor examples of what
    // capacity ranges exist today — capacity (kWh) is a stable spec, unlike price. No price or
    // "hours of backup" figure is asserted, following the same standard the balcony-solar
    // cluster's own battery guide already applies (its own tableNote explicitly omits prices as
    // Section-301-tariff-sensitive and tells readers to verify at time of purchase). This article
    // stays informational — no affiliateLinks — per sourcing-pass scope.
    title: 'Turning Your Home Into an Energy Microgrid (2027)',
    seoTitle: 'Home Energy Microgrid Setup (2027)',
    intro:
      'A home energy "microgrid" in the consumer sense means solar generation plus battery storage plus local automation that can keep essential circuits running during a grid outage — not a true islanded utility-scale microgrid, which is a different, commercial-scale engineering problem. This guide scopes what\'s realistically achievable with home battery + inverter + Home Assistant automation, and where to go for the hardware specifics.',
    metaDescription:
      'Home energy microgrid setup in 2027: solar, battery, and local automation for outage backup — scoped to what home hardware actually supports.',
    twitterDescription:
      'What a "home microgrid" actually means: solar + battery + local automation for outage backup, not utility-scale islanding.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners considering battery backup for outage independence',
    primaryTerm: 'home energy microgrid',
    targetKeywords: [
      'home energy microgrid setup',
      'whole home battery backup automation',
      'home battery outage backup',
      'solar battery backup automation',
      'islanded home power system',
    ],
    leadAnswerBlock:
      '**A consumer "home microgrid" is solar generation plus battery storage plus an automatic transfer setup that keeps chosen circuits running during a grid outage — it is not the same as a utility-scale microgrid, which involves multi-building grid islanding and generation coordination that home hardware does not do.** Scope your expectations to essential-circuit backup, not whole-home independence, unless your battery capacity and inverter are sized for that specifically.',
    quickAnswerTop: {
      en: {
        question: 'Can I turn my home into an energy microgrid?',
        answer:
          'In the consumer-hardware sense, yes — solar panels, a home battery, and a compatible inverter with automatic transfer switching can keep chosen circuits (refrigerator, some lighting, internet) running during a grid outage. This is fundamentally different from a true utility-scale microgrid, which involves islanding multiple buildings from the grid with coordinated generation — home hardware provides backup power for your own circuits, not grid independence in that broader sense. Current home battery products span a wide capacity range — Enphase\'s IQ Battery 5P is rated at 5.0 kWh usable, and Tesla\'s Powerwall 3 at 13.5 kWh usable (scalable higher with expansion packs) — so match your essential-circuit load against a specific product\'s datasheet, not a generic assumption, before sizing a system.',
        bullets: [
          'Consumer "microgrid" = solar + battery + automatic transfer switching for backup power',
          'This is essential-circuit backup, not true utility-scale grid islanding',
          'Battery capacity varies widely by product — e.g., Enphase IQ Battery 5P: 5.0 kWh usable; Tesla Powerwall 3: 13.5 kWh usable, scalable higher — check a specific product\'s datasheet against your essential-circuit load',
          'Home Assistant can automate which circuits get priority when running on battery',
          'Scope the project to your actual outage-backup needs, not a whole-home-independence assumption',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What "Home Microgrid" Actually Means', anchor: 'what-it-means' },
      { label: 'Sizing a Backup System', anchor: 'sizing' },
      { label: 'Automating Circuit Priority', anchor: 'automating-priority' },
      { label: 'What This Doesn\'t Do', anchor: 'limits' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A consumer "home microgrid" is solar plus battery plus automatic transfer switching for essential-circuit backup during a grid outage — not utility-scale grid islanding.' },
      { type: 'plain-terms', content: 'People sometimes use "microgrid" to describe a home with solar panels and a battery that can keep the lights and fridge on when the power goes out. That\'s a real and useful setup, but it\'s different from what a "microgrid" means to a utility company — a coordinated power system serving multiple buildings independently of the main grid. This article covers the home version: backup power for your own circuits, sized and automated with Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          '"Home microgrid" here means solar + battery + automatic transfer switching for outage backup — not utility-scale grid islanding',
          'Battery capacity varies significantly by product — e.g., Enphase IQ Battery 5P (5.0 kWh usable) vs. Tesla Powerwall 3 (13.5 kWh usable, expandable) — check a specific datasheet, not a generic figure, against your essential-circuit load',
          'Essential circuits (refrigerator, some lighting, networking/router) are the realistic backup scope for most home battery sizes',
          'Home Assistant can automate load-shedding priority when running on battery, extending backup duration',
          'This is the most speculative of the Energy & Solar articles — scope claims conservatively and avoid implying whole-home independence is typical',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'What "Home Microgrid" Actually Means',
        content:
          '**In the consumer/smart-home context, "microgrid" describes solar generation plus battery storage plus a transfer mechanism that isolates chosen circuits from the grid during an outage — not the utility-industry meaning of a coordinated, multi-building islanded power system.**',
        items: [
          'A true utility microgrid coordinates generation and demand across multiple buildings or a neighborhood, with dedicated control systems — this is commercial/utility engineering, not something home hardware does.',
          'The home version is narrower: your solar + battery + inverter automatically disconnects from the grid during an outage and powers the circuits you\'ve wired to the backup system.',
          'Use "microgrid" loosely here to mean "my home can run on its own power for a while," not a claim of grid-independent, multi-building coordination.',
        ],
      },
      sizing: {
        id: 'sizing',
        title: 'Sizing a Backup System',
        content:
          '**Battery capacity, not solar panel count, is usually the limiting factor for how long and how much you can back up during an outage — size around your actual essential-load wattage, not your whole home\'s peak draw.**',
        items: [
          'List your essential circuits (refrigerator, some lighting, networking equipment, and medical equipment if applicable) and their approximate combined wattage — this is your backup target, not your whole home\'s panel capacity.',
          'Battery capacity spans a wide range by product: Enphase\'s IQ Battery 5P is rated at 5.0 kWh usable (per Enphase\'s own datasheet), while Tesla\'s Powerwall 3 is rated at 13.5 kWh usable and scales to 94.5 kWh with additional expansion packs (per Tesla\'s Energy Library datasheet) — this illustrates the range, not a recommendation of one over the other. Pricing is deliberately not quoted here: the balcony-solar cluster\'s own battery buyer\'s guide omits prices for the same reason (tariff-sensitive, changes significantly) and directs readers to check current manufacturer or retailer pages at time of purchase — the same standard applies here.',
          'An inverter with automatic transfer-switch capability is required to isolate backup circuits from the grid safely during an outage — this is different from a grid-tied-only inverter, which shuts off during an outage for safety and provides no backup power at all.',
        ],
      },
      automatingPriority: {
        id: 'automating-priority',
        title: 'Automating Circuit Priority',
        content:
          '**Home Assistant can shed lower-priority loads automatically when running on battery, stretching a limited battery\'s runtime during an outage — this uses the same automation patterns as the load-shifting examples in the local energy management overview.**',
        items: [
          'An automation triggered by "on battery power" state (available once your inverter/battery integration exposes that status — see the Matter inverter integration guide) can turn off non-essential smart plugs automatically.',
          'Prioritize by importance: keep the refrigerator and networking equipment on battery power, and shed anything discretionary (non-essential lighting, entertainment devices) first.',
          'This extends backup runtime without requiring a larger, more expensive battery — automation substitutes for capacity to a meaningful degree.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'What This Doesn\'t Do',
        content:
          '**A home battery backup setup does not make your home independent of the grid long-term, does not coordinate with neighbors\' systems, and typically cannot power whole-home heating/cooling loads for extended outages.**',
        items: [
          "Most home battery systems are sized for hours to roughly a day of essential-circuit backup, not indefinite off-grid operation — actual runtime depends entirely on your specific battery's capacity (which spans a wide range across products, from roughly 5 kWh usable in a single unit up to 13.5 kWh and beyond with expansion packs, per manufacturer datasheets) against your actual essential-circuit wattage, not a generic multi-day whole-home assumption.",
          'This setup does not connect to or coordinate with a neighbor\'s system — each home\'s backup is independent, unlike a true utility microgrid.',
          'High-draw loads like central air conditioning or electric heating are usually excluded from the backed-up circuit list unless the battery and inverter are specifically sized for them — check your installer\'s sizing recommendation rather than assuming.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is a home microgrid the same as being off-grid?', a: 'No. A home battery backup setup still connects to the grid normally and only isolates during an outage or on-demand — it\'s backup power, not permanent off-grid operation.' },
          { q: 'How long can a home battery back up my house?', a: 'This depends entirely on battery capacity versus your essential-circuit load, and capacity varies widely by product — Enphase\'s IQ Battery 5P is rated at 5.0 kWh usable, Tesla\'s Powerwall 3 at 13.5 kWh usable (scalable higher with expansion packs), per each manufacturer\'s own datasheet. Consult an installer\'s sizing calculation for your specific circuits rather than assuming a fixed duration.' },
          { q: 'Do I need solar panels for battery backup to work?', a: 'No — a battery can be charged from the grid and used purely for outage backup without solar, though pairing with solar lets the battery recharge during a multi-day outage if there\'s daylight.' },
          { q: 'Can Home Assistant control which circuits stay on during an outage?', a: 'Home Assistant can automate which smart-plug-controlled loads shed first once your inverter/battery integration reports "on battery" status, but which circuits are physically wired to the backup panel is an electrical decision made during installation, not something software changes after the fact.' },
          { q: 'Is this legal to install myself?', a: 'Backup power systems that tie into your home\'s electrical panel typically require a licensed electrician and, in many regions, utility notification or permitting — this is not a DIY smart-plug-level project.' },
          { q: 'Does a home microgrid coordinate with my neighbors?', a: 'No — this is one of the key differences from a true utility microgrid. A home battery backup setup is entirely independent of any neighboring system.' },
          { q: 'What\'s the difference between a grid-tied and a hybrid inverter for this?', a: 'A grid-tied-only inverter shuts off during a grid outage for safety and provides no backup power. A hybrid inverter with battery and transfer-switch support can isolate backup circuits and continue powering them — you need the latter for outage backup.' },
          { q: 'Should I size for whole-home backup or just essentials?', a: 'For most home battery budgets, essential-circuit backup (refrigerator, some lighting, networking) is the realistic and cost-effective target — whole-home backup requires substantially more battery capacity and a larger inverter, which is a different sizing conversation with an installer.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Smart Home Energy Management](/smart-home/local-smart-home-energy-management-2027) — the overview this article extends',
          '[Matter Integration for Solar Inverters and Heat Pumps](/smart-home/matter-solar-inverter-heat-pump-integration) — exposing battery/inverter state to Home Assistant',
          '[Best Balcony Solar Home Battery (US)](/balcony-solar/best-balcony-solar-home-battery-us-2026) — cross-cluster: current battery hardware and pricing',
          '[Do You Need a Battery for Balcony Solar?](/balcony-solar/do-you-need-a-battery-balcony-solar) — cross-cluster: battery sizing fundamentals',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Turning Your Home Into an Energy Microgrid (2027)',
      description: 'Home energy microgrid setup in 2027: solar, battery, and local automation for outage backup — scoped to what home hardware actually supports.',
      url: 'https://www.promptquorum.com/smart-home/home-as-energy-microgrid-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home battery backup' }, { '@type': 'Thing', name: 'Solar microgrid' }, { '@type': 'Thing', name: 'Outage automation' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is a home microgrid the same as being off-grid?', acceptedAnswer: { '@type': 'Answer', text: 'No. A home battery backup setup still connects to the grid normally and only isolates during an outage — it\'s backup power, not permanent off-grid operation.' } },
        { '@type': 'Question', name: 'Do I need solar panels for battery backup to work?', acceptedAnswer: { '@type': 'Answer', text: 'No — a battery can be charged from the grid and used purely for outage backup without solar.' } },
        { '@type': 'Question', name: 'Is this legal to install myself?', acceptedAnswer: { '@type': 'Answer', text: 'Backup power systems that tie into your home\'s electrical panel typically require a licensed electrician and utility notification or permitting in many regions.' } },
        { '@type': 'Question', name: 'Does a home microgrid coordinate with my neighbors?', acceptedAnswer: { '@type': 'Answer', text: 'No — a home battery backup setup is entirely independent of any neighboring system, unlike a true utility microgrid.' } },
        { '@type': 'Question', name: 'Should I size for whole-home backup or just essentials?', acceptedAnswer: { '@type': 'Answer', text: 'For most home battery budgets, essential-circuit backup is the realistic and cost-effective target; whole-home backup requires substantially more capacity.' } },
      ],
    },
  },
}
