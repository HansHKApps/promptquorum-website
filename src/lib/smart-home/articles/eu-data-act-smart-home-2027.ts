import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    title: 'The EU Data Act and Your Smart Home (2027)',
    seoTitle: 'EU Data Act: Smart Home Guide (2027)',
    // Verified 2026-07-16 against the European Commission's own Data Act pages
    // (digital-strategy.ec.europa.eu/en/policies/data-act and .../en/factpages/data-act-explained).
    // Legal basis: the data-access-and-portability obligation this article describes is Chapter II
    // of Regulation (EU) 2023/2854 (Articles 3-5 — obligation to make data available by design and
    // default, user access right, right to share with third parties), NOT Article 33 (which covers
    // interoperability requirements for data spaces and data-sharing services — a different, narrower
    // provision unrelated to the individual device-owner right described here).
    intro:
      'The EU Data Act (Regulation (EU) 2023/2854) creates data-access and portability rights for users of connected devices under Chapter II, separate from GDPR\'s personal-data-processing rules — it addresses whether you can get your device\'s generated data out and share it with a different service, not how your personal data is processed. Its main obligations have applied since September 12, 2025, and it explicitly covers consumer smart-home devices as "connected products." This article explains the distinction from GDPR and what to watch for as an EU smart home owner.',
    metaDescription:
      "The EU Data Act's implications for smart home devices in the EU: data portability rights (in force since Sept 12, 2025), distinct from GDPR.",
    twitterDescription:
      "The EU Data Act and smart home devices: data portability rights, and how this differs from GDPR's personal-data rules.",
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    audience: 'EU-based smart home owners and buyers wanting to understand new device-data regulation',
    primaryTerm: 'eu data act smart home',
    targetKeywords: [
      'eu data act smart home',
      'data act connected devices',
      'eu data act vs gdpr',
      'smart home data portability eu',
      'connected device data rights eu',
    ],
    leadAnswerBlock:
      "**The EU Data Act (Chapter II, Articles 3-5) gives users of connected devices rights to access the data their device generates and to have it shared with third parties of their choosing — a data-portability and access right, distinct from GDPR's rules on how personal data is processed.** Its main obligations have applied since September 12, 2025, and smart-home devices are explicitly in scope.",
    quickAnswerTop: {
      en: {
        question: 'What does the EU Data Act mean for my smart home devices?',
        answer:
          "The EU Data Act has given you the right, since September 12, 2025, to access the data your connected devices generate and direct it to a different service provider — for example, sharing your smart thermostat's usage data with a competing energy-management app instead of only the manufacturer's own service. This is separate from GDPR, which governs how personal data is processed rather than data portability between services. Smart-home devices are explicitly named as in-scope \"connected products\" under the regulation.",
        bullets: [
          "Data Act = data access/portability rights for connected-device data",
          'GDPR = separate regulation governing personal-data processing — the two address different questions',
          'In force since September 12, 2025; smart-home devices are explicitly in scope',
          'Relevant mainly if you want to move data between services (e.g., energy monitoring) rather than stay with one manufacturer\'s app',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Data Act vs GDPR', anchor: 'data-act-vs-gdpr' },
      { label: 'What This Could Mean for Smart Home Data', anchor: 'what-it-means' },
      { label: 'What to Check Before Relying on This', anchor: 'what-to-check' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The EU Data Act creates data-access and portability rights for connected-device data, distinct from GDPR\'s personal-data-processing rules.' },
      { type: 'plain-terms', content: 'GDPR is about protecting your personal information and how companies use it. The Data Act is a different, newer EU rule about whether you can get the data your smart devices produce and hand it to a different company or app instead of being stuck with only the manufacturer\'s own service.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'The EU Data Act addresses data access/portability for connected devices — a different question from GDPR\'s personal-data-processing rules',
          "It's aimed at letting you direct your device's generated data to a third-party service, not just the manufacturer's own app",
          'Main obligations have applied since September 12, 2025; smart-home devices are explicitly named as in-scope "connected products" alongside connected cars and health monitors',
          "This article is a general orientation, not legal advice — for a specific compliance question, consult the EU's official Data Act resources or a qualified advisor",
          "See the GDPR-focused smart home guide already on this site for personal-data-processing questions",
        ],
      },
      dataActVsGdpr: {
        id: 'data-act-vs-gdpr',
        title: 'Data Act vs GDPR',
        content:
          "**GDPR governs how personal data is processed, stored, and protected; the Data Act governs access to and portability of the data a connected device generates — the two regulations address related but distinct questions.**",
        items: [
          "GDPR question: is my personal data (name, voice recordings, camera footage) being processed lawfully, and can I access/delete it?",
          "Data Act question: can I get the raw data my device generates (e.g., a thermostat's usage logs) and direct it to a different service, not just the manufacturer's own app?",
          'A device can be fully GDPR-compliant while still limiting data portability under the older rules the Data Act is meant to address — the two obligations are additive, not substitutes for each other.',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'What This Could Mean for Smart Home Data',
        content:
          '**For a local-first smart home owner, the practical relevance is mainly around devices that still rely on a manufacturer cloud service — Data Act-style portability rights could make it easier to redirect that data locally or to a third-party service instead.**',
        items: [
          'If you already run a local-first setup (Home Assistant, local storage, no cloud dependency), you may see less direct benefit since your data already stays local rather than needing a portability right to extract it from a manufacturer.',
          'The more relevant case is hybrid devices that still report some data to a manufacturer cloud service even in a mostly-local setup — portability rights are about that data specifically.',
          'The obligation has been legally in force since September 12, 2025, but this article does not track manufacturer-by-manufacturer compliance — check a specific device\'s current documentation rather than assuming broad industry-wide changes have already rolled out just because the deadline has passed.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'What to Check Before Relying on This',
        content:
          "**This article is a general orientation to the Data Act's relevance to smart homes — for a specific compliance question or legal determination, check the EU's official current guidance rather than relying on this summary alone.**",
        items: [
          'Main obligations have applied since September 12, 2025 (per the European Commission\'s own Data Act pages) — this is already in force, not a future deadline. One related sub-deadline is still pending: full removal of cloud/data-processing-service switching charges by January 12, 2027.',
          'Smart-home devices are explicitly named as an in-scope "connected product" category by the European Commission\'s own guidance, alongside connected cars, health monitoring devices, and industrial equipment — check a specific device\'s own documentation for how its manufacturer has implemented the obligation, since the Commission\'s guidance confirms scope, not per-device compliance.',
          "If you're a manufacturer or run a business handling smart home data, this article is not a substitute for qualified legal advice specific to your situation.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is the EU Data Act the same as GDPR?', a: 'No — GDPR governs personal-data processing; the Data Act governs data access and portability for connected devices. They are separate regulations addressing different questions.' },
          { q: 'Does the Data Act apply outside the EU?', a: 'It is EU regulation, so its direct legal requirements target companies operating in or serving the EU market, not a global mandate. If you buy or use a connected device within the EU market, the obligation applies regardless of where the manufacturer is headquartered.' },
          { q: 'Does this mean I can force my smart thermostat manufacturer to share my data with a competitor?', a: 'Yes, in principle — since September 12, 2025, EU data holders must let users share device-generated data with a third party of their choosing (either directly or by asking the manufacturer to send it), with an exception for Digital Markets Act "gatekeeper" companies as recipients. Whether a specific manufacturer has actually implemented this smoothly for a specific device is a separate question from whether the legal right exists — check that device\'s current documentation.' },
          { q: 'Does a local-first smart home need to worry about the Data Act?', a: 'Less directly — if your setup already keeps data local via Home Assistant rather than a manufacturer cloud service, portability rights matter less since there\'s no cloud silo to extract data from in the first place.' },
          { q: 'Where can I find the official current text of the Data Act?', a: 'Check the European Union\'s official legislative publications directly — this article is a general orientation, not a legal reference.' },
          { q: 'Does this affect the private-smart-home-GDPR guide already on this site?', a: 'No — that guide covers GDPR compliance (personal data processing) specifically. This article covers a separate, newer regulation about data portability.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Building a GDPR-Friendly Private Smart Home (EU)](/smart-home/private-smart-home-gdpr) — the related but distinct personal-data regulation',
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the broader privacy context',
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — the local-first alternative to cloud data dependency',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'The EU Data Act and Your Smart Home (2027)',
      description: "The EU Data Act's implications for smart home devices in the EU: data portability rights, distinct from GDPR.",
      url: 'https://www.promptquorum.com/smart-home/eu-data-act-smart-home-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'EU Data Act' }, { '@type': 'Thing', name: 'Data portability' }, { '@type': 'Thing', name: 'Smart home regulation' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is the EU Data Act the same as GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'No — GDPR governs personal-data processing; the Data Act governs data access and portability for connected devices.' } },
        { '@type': 'Question', name: 'Does a local-first smart home need to worry about the Data Act?', acceptedAnswer: { '@type': 'Answer', text: 'Less directly — if your setup already keeps data local via Home Assistant, portability rights matter less since there\'s no cloud silo to extract data from.' } },
        { '@type': 'Question', name: 'Where can I find the official current text of the Data Act?', acceptedAnswer: { '@type': 'Answer', text: 'Check the European Union\'s official legislative publications directly.' } },
        { '@type': 'Question', name: 'Does this affect the private-smart-home-GDPR guide already on this site?', acceptedAnswer: { '@type': 'Answer', text: 'No — that guide covers GDPR compliance specifically. This article covers a separate, newer regulation about data portability.' } },
      ],
    },
  },
}
