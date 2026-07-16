import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    title: "IKEA's Matter Ecosystem: Complete Guide (2027)",
    seoTitle: 'IKEA Matter Ecosystem Guide (2027)',
    // Verified 2026-07-16 against IKEA's own US product listing (ikea.com/us/en/cat/smart-home-products-36812/)
    // and Home Assistant's own product page (home-assistant.io/green/) for the price comparison.
    intro:
      "IKEA sells a Matter-compatible smart home lineup — the DIRIGERA hub ($119.99), plus sensors and lighting — positioned as a lower-cost entry point to local-first smart home control compared to dedicated hub appliances. This guide explains what the ecosystem is for and how it compares to other hub options already covered on this site.",
    metaDescription:
      "IKEA's Matter smart home lineup in 2027: the DIRIGERA hub, sensors, and lighting as a budget entry point to local control.",
    twitterDescription:
      "IKEA's Matter-compatible smart home products as a budget entry point to local control, compared to Home Assistant Green and other hub options.",
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Smart home beginners considering IKEA hardware as an entry point',
    primaryTerm: 'ikea matter smart home',
    targetKeywords: [
      'ikea matter smart home',
      'ikea dirigera matter devices',
      'ikea smart home hub',
      'budget matter smart home',
      'ikea vs home assistant',
    ],
    leadAnswerBlock:
      "**IKEA's Matter-compatible smart home lineup — the DIRIGERA hub ($119.99) plus sensors and lighting — is positioned as a lower-cost, off-the-shelf entry point to local device control, an alternative to dedicated hub appliances like Home Assistant Green ($199) for buyers who want retail-available hardware.**",
    quickAnswerTop: {
      en: {
        question: 'Is IKEA a good starting point for a Matter smart home?',
        answer:
          "Yes, via the DIRIGERA hub ($119.99) — a lower-cost, widely available entry point compared to dedicated hub appliances, useful if you want retail-store hardware and basic lighting/sensor automation without researching individual component compatibility. DIRIGERA became a full Matter controller and Thread Border Router through a 2025 firmware update, so it can also onboard some third-party Matter devices, not just IKEA's own.",
        bullets: [
          "IKEA's positioning: budget, retail-available entry point to Matter/local control",
          'Best fit: buyers wanting basic lighting/sensor automation without researching individual components',
          'DIRIGERA hub: $119.99, Matter controller + Thread Border Router (2025 firmware update)',
          "Compare against Home Assistant Green ($199, see the hub buyer's guide) for a fuller-featured alternative",
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What the Ecosystem Covers', anchor: 'what-it-covers' },
      { label: 'Who This Fits', anchor: 'who-it-fits' },
      { label: 'How It Compares to Other Hubs', anchor: 'how-it-compares' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "IKEA's Matter-compatible smart home lineup (hub, sensors, lighting) is a budget, retail-available entry point to local device control." },
      { type: 'plain-terms', content: 'IKEA sells its own smart home hub and Matter-compatible devices in-store, which makes it an easy first step for someone who wants basic smart lighting and sensors without researching compatibility between different brands.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          "IKEA's smart home lineup is positioned as a budget, widely available entry point to Matter-based local control",
          'DIRIGERA (model E2315) hub is Matter-certified and a Thread Border Router, priced at $119.99 as of write-time',
          "Best fit for buyers wanting basic lighting/sensor automation without researching individual component compatibility",
          "Compare against Home Assistant Green and other dedicated hubs (see the hub buyer's guide) for more advanced automation needs",
        ],
      },
      whatItCovers: {
        id: 'what-it-covers',
        title: 'What the Ecosystem Covers',
        content:
          "**IKEA's smart home lineup typically spans a hub, lighting (bulbs and fixtures), and sensors (motion, contact, temperature), sold as retail products alongside its furniture range.**",
        items: [
          "The hub acts as the local controller and, in many configurations, a Matter bridge for the ecosystem's own devices and some third-party Matter devices.",
          'Lighting and sensors are the core of the lineup — this is not a full-featured hub for complex multi-brand automation the way Home Assistant is.',
          "DIRIGERA is certified for Ethernet and Thread connectivity in the Border Router (FTD) role, and gained Matter-controller functionality via a 2025 firmware update, letting it onboard third-party Matter devices through the IKEA Home Smart app rather than only its own product line.",
        ],
      },
      whoItFits: {
        id: 'who-it-fits',
        title: 'Who This Fits',
        content:
          '**IKEA\'s ecosystem fits buyers who want basic, reliable smart lighting and sensors without researching cross-brand compatibility — it is not aimed at buyers who want deep automation logic or many device types.**',
        items: [
          'Good fit: first-time smart home buyers who want lighting automation and basic sensors from one retail source.',
          'Less of a fit: buyers who want Home Assistant-level automation flexibility, many device types, or non-lighting integrations like cameras and energy monitoring.',
          "If you outgrow the ecosystem's built-in hub, its Matter-certified devices can typically be re-paired to a more capable hub like Home Assistant, since Matter devices aren't locked to one specific hub.",
        ],
      },
      howItCompares: {
        id: 'how-it-compares',
        title: 'How It Compares to Other Hubs',
        content:
          "**Compared to Home Assistant Green or other dedicated hub appliances (see the hub buyer's guide), IKEA's hub trades automation depth and device-type breadth for retail availability and a lower starting price.**",
        items: [
          'Home Assistant Green offers broader device-type support and deeper automation logic, at a different price point and without the retail-store convenience.',
          "IKEA's devices being Matter-certified means they aren't locked into the ecosystem's own hub — this reduces the switching cost if you later move to a more capable hub.",
          "IKEA's DIRIGERA hub ($119.99) is about $80 cheaper than Home Assistant Green ($199) as of write-time — HA Green's price rose twice in 2026 (from an original $99 at 2023 launch) citing higher component costs, while IKEA's hub has stayed at retail pricing.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: "Is IKEA's smart home hub Matter-certified?", a: "Yes — DIRIGERA (model E2315) is certified for Ethernet and Thread connectivity in the Border Router role, and became a full Matter controller via a 2025 firmware update." },
          { q: 'Can I use IKEA Matter devices with Home Assistant instead of the IKEA hub?', a: "Generally yes — Matter-certified devices aren't locked to one hub, so IKEA's Matter devices can typically be re-paired to Home Assistant or another Matter controller, though check the specific device's documentation for any limitations first." },
          { q: 'Is IKEA a good long-term smart home platform?', a: 'It works well as a low-cost entry point for lighting and basic sensors. For more advanced automation, many buyers migrate their Matter devices to a more capable hub like Home Assistant later.' },
          { q: 'Does IKEA support cameras or energy monitoring?', a: "No, as of write-time. IKEA's current US smart home lineup covers lighting, motion/contact/temperature/water-leak/air-quality sensors, remotes, and smart plugs — no cameras or dedicated energy-monitoring hardware." },
          { q: "How does this compare to the general hub buyer's guide on this site?", a: "The hub buyer's guide compares dedicated hub appliances (Home Assistant Green, Hubitat, Homey). This article focuses specifically on IKEA's retail ecosystem as a budget alternative." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          "[Best Smart Home Hubs for Local Control](/smart-home/best-smart-home-hubs-2027) — dedicated hub appliances compared",
          '[Matter 1.6 Explained: What\'s New](/smart-home/matter-1-6-explained) — the spec IKEA\'s devices implement',
          '[Smart Home for Beginners: Where to Start](/smart-home/smart-home-for-beginners-where-to-start) — the broader beginner path',
          '[Best Smart Home Devices 2026: A Buyer\'s Guide](/smart-home/best-smart-home-devices-2026) — device picks by category',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: "IKEA's Matter Ecosystem: Complete Guide (2027)",
      description: "IKEA's Matter smart home lineup: hub, sensors, and lighting as a budget entry point to local control.",
      url: 'https://www.promptquorum.com/smart-home/ikea-matter-ecosystem-guide-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'IKEA smart home' }, { '@type': 'Thing', name: 'Matter ecosystem' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Can I use IKEA Matter devices with Home Assistant instead of the IKEA hub?', acceptedAnswer: { '@type': 'Answer', text: "Generally yes — Matter-certified devices aren't locked to one hub, so they can typically be re-paired to Home Assistant or another Matter controller." } },
        { '@type': 'Question', name: 'Is IKEA a good long-term smart home platform?', acceptedAnswer: { '@type': 'Answer', text: 'It works well as a low-cost entry point for lighting and basic sensors; many buyers migrate to a more capable hub later for advanced automation.' } },
        { '@type': 'Question', name: "How does this compare to the general hub buyer's guide on this site?", acceptedAnswer: { '@type': 'Answer', text: "The hub buyer's guide compares dedicated hub appliances. This article focuses specifically on IKEA's retail ecosystem as a budget alternative." } },
      ],
    },
  },
}
