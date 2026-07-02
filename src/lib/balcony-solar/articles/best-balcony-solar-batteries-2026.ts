// Slug: best-balcony-solar-batteries-2026
// BSOL-03 — Tier 1 buyer's guide, semi_annual, ★ MONEY. US-first.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    current_hardware_mentioned: ['EcoFlow STREAM Ultra', 'BigBlue POWAFREE H1', 'Zendure SolarFlow'],
    theme: 'Balcony Solar Money Pages',
    title: 'Best Balcony Solar Batteries (2026): Store Your Surplus Power',
    seoTitle: 'Best Balcony Solar Batteries 2026: Storage Kits Compared',
    intro: 'A battery lets your balcony solar system store daytime surplus for evening use instead of exporting it to the grid at low or no compensation. It\'s an optional add-on, not a requirement — and in the US, it\'s also the most legally restricted part of a balcony solar setup.',
    metaDescription: 'The best balcony solar batteries for 2026 — capacity, local-control support, and current US state legality compared, including why most storage kits are state-restricted.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'US buyers considering battery storage for a balcony solar system',
    primaryTerm: 'balcony solar battery',
    targetKeywords: ['best balcony solar battery', 'ecoflow stream ultra review', 'balcony solar storage', 'zendure solarflow home assistant', 'do i need a balcony solar battery'],
    leadAnswerBlock: '**EcoFlow\'s STREAM Ultra (1.92 kWh, expandable to 11.52 kWh, $1,279) is the best-specced balcony solar battery available, but it\'s currently sold and installable only in Utah under that state\'s legislation.** For local-control priorities, Zendure\'s SolarFlow line has the most mature open-source Home Assistant ecosystem of any balcony battery brand, with fully local REST API integrations requiring no cloud or MQTT bridge.',
    quickAnswerTop: {
      en: {
        question: 'Do I need a battery for balcony solar, and which one should I buy?',
        answer: 'A battery is optional — it only pays off if your utility credits exported solar at meaningfully less than what you pay to import power (guides suggest a gap of $0.15/kWh or more). If you decide you want one, EcoFlow\'s STREAM Ultra has the strongest specs but is Utah-only; Zendure\'s SolarFlow line has the best local-control/Home Assistant support and wider notional availability.',
        bullets: [
          'EcoFlow STREAM Ultra: 1.92 kWh (expandable to 11.52 kWh), $1,279, Utah-only installation',
          'BigBlue POWAFREE H1: 2,560 Wh, legal in ~5 states (Utah, Maryland, Maine, Virginia +1), price unverified',
          'Zendure SolarFlow: strongest local-API/Home Assistant ecosystem via community zenSDK integrations, no cloud required',
          'Anker SOLIX Solarbank models are not sold or certified for the US market — do not recommend them to US buyers',
          'Most 800W-class balcony systems pair well with 1.9–2.5 kWh batteries based on typical daily surplus',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Do You Even Need a Battery?', anchor: '#do-you-need-one' },
      { label: 'How We Chose', anchor: '#how-we-chose' },
      { label: 'Best Overall', anchor: '#best-overall' },
      { label: 'Best Local-Control (Home Assistant-Compatible) Pick', anchor: '#best-local-control' },
      { label: 'Capacity Sizing', anchor: '#capacity-sizing' },
      { label: 'Comparison Table', anchor: '#comparison-table' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A balcony solar battery is optional — it pays off only when your utility\'s export credit is meaningfully lower than your import rate (roughly $0.15/kWh gap or more, per current guides).',
          'EcoFlow STREAM Ultra (1.92 kWh, expandable to 11.52 kWh, $1,279) has the strongest specs of any US-available balcony battery, but installation is currently Utah-only.',
          'BigBlue POWAFREE H1 (2,560 Wh) has wider — though still limited — state legality (roughly 5 states), but its ~$700 sale price could not be independently confirmed.',
          'Zendure\'s SolarFlow line has the most mature local-control ecosystem, with community-built zenSDK REST API integrations for Home Assistant requiring no cloud or MQTT bridge.',
          'Anker SOLIX Solarbank models are not sold or certified for the US market — a common source of confusion since they\'re widely available in Europe.',
          'Most 800W-class balcony kits pair well with 1.9–2.5 kWh of storage based on typical daily surplus generation, though no vendor publishes this as a formal sizing formula.',
        ],
      },
      doYouNeedOne: {
        id: 'do-you-need-one',
        title: 'Do You Even Need a Battery?',
        content: [
          '**No — a battery is an optional add-on, not a requirement, and current buying guides frame it that way explicitly.** Without a battery, balcony solar exports any surplus beyond your home\'s active use back to the grid, typically at low or no compensation. A battery lets you store that surplus and draw it down in the evening instead.',
          'The economics come down to your specific utility\'s rate structure: guides suggest a battery pays off only when your export credit is roughly $0.15/kWh or more below your import rate. If your utility credits exports close to the retail rate, a battery adds cost without adding much value.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A balcony solar battery is worth adding only when your utility pays you significantly less for exported power than it charges you to import it.' },
          { type: 'plain-terms', text: 'If your utility basically gives you full credit for extra solar power, a battery is an expensive way to solve a problem you don\'t have.' },
        ],
      },
      howWeChose: {
        id: 'how-we-chose',
        title: 'How We Chose',
        content: [
          '**We weighted current US state legality as heavily as capacity and price, since storage-inclusive balcony solar hardware faces meaningfully tighter state restrictions than panel-plus-microinverter-only kits.** See BSOL-02\'s [best kits guide](/balcony-solar/best-balcony-solar-kits-2026) for the panel-side comparison this article complements.',
        ],
      },
      bestOverall: {
        id: 'best-overall',
        title: 'Best Overall: EcoFlow STREAM Ultra',
        content: [
          '**EcoFlow\'s STREAM Ultra leads on specs: 1.92 kWh base capacity expandable to 11.52 kWh, a built-in grid-tied micro-inverter, 1,200W AC output, and LFP cells rated for 6,000 cycles at 70% capacity retention with a 10-year warranty.** At $1,279 (list $1,899), it\'s priced roughly in line with its capacity and feature set relative to competitors.',
          'The catch is availability: EcoFlow\'s own product page confirms plug-and-play installation is currently sold and installable only in Utah, which reflects how few US states have passed legislation covering permit-free storage-inclusive plug-in solar so far.',
        ],
        affiliateLinks: [
          { url: 'https://us.ecoflow.com/products/stream-ultra', productName: 'EcoFlow STREAM Ultra', productCategory: 'Balcony solar battery', priceRange: '$1,279', label: 'Check current price' },
        ],
      },
      bestLocalControl: {
        id: 'best-local-control',
        title: 'Best Local-Control (Home Assistant-Compatible) Pick',
        content: [
          '**Zendure\'s SolarFlow line (Hub 1200/2000, SolarFlow 800, Hyper series) has the most mature local-control ecosystem of any balcony battery brand — community-built zenSDK REST API integrations give Home Assistant full local control with no cloud account, MQTT bridge, or HACS dependency required.** This is a meaningfully stronger local-control story than EcoFlow, which generally requires its cloud app with no verified local-API path found.',
          'Bluetti\'s newer Balco series also officially lists Home Assistant compatibility with a manufacturer-published GitHub integration, though it\'s unclear whether that integration operates fully locally or relays through Bluetti\'s cloud — flag this as unverified until confirmed directly.',
        ],
        callouts: [
          { type: 'tip', text: 'If local control is a hard requirement, Zendure\'s community zenSDK integrations are currently the most confidently local-only option among balcony batteries — verify current GitHub integration status before buying, since this ecosystem moves quickly.' },
        ],
      },
      capacitySizing: {
        id: 'capacity-sizing',
        title: 'Capacity Sizing',
        content: [
          '**No manufacturer publishes a formal sizing formula, but real-world product sizing clusters around 1.9–2.5 kWh for 800W-class balcony systems** — consistent with an 800W panel setup producing roughly 4 kWh on a good 5-peak-sun-hour day. A common rule of thumb in current guides is to size battery capacity at roughly 20–30% above your typical daily surplus to buffer inefficiency and cloudy-day shortfalls.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        rows: [
          { battery: 'EcoFlow STREAM Ultra', capacity: '1.92–11.52 kWh', price: '$1,279', control: 'Cloud app (no verified local API)', availability: 'Utah only' },
          { battery: 'BigBlue POWAFREE H1', capacity: '2,560 Wh', price: '~$699.99 (unverified)', control: 'Unverified', availability: '~5 states (UT/MD/ME/VA + 1)' },
          { battery: 'Zendure SolarFlow', capacity: 'Varies by model (Hub 1200/2000, Hyper)', price: 'Not independently priced this pass', control: 'Local zenSDK REST API (no cloud)', availability: 'Check current state legality per model' },
          { battery: 'Anker SOLIX Solarbank', capacity: 'N/A', price: 'N/A', control: 'N/A', availability: 'Not sold/certified for US market' },
        ],
        columns: ['battery', 'capacity', 'price', 'control', 'availability'],
        tableFormat: true,
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need a battery for balcony solar?', a: 'No — it\'s optional. A battery only pays off economically if your utility credits exported solar power significantly less than it charges for imported power, roughly a $0.15/kWh gap or more per current guides.' },
          { q: 'What is the best balcony solar battery overall?', a: 'EcoFlow\'s STREAM Ultra has the strongest specs (1.92 kWh expandable to 11.52 kWh, $1,279), but is currently sold and installable only in Utah — confirm your state\'s legality before choosing it.' },
          { q: 'Which balcony solar battery works best with Home Assistant?', a: 'Zendure\'s SolarFlow line has the most mature local-control ecosystem, with community zenSDK REST API integrations that require no cloud account or MQTT bridge.' },
          { q: 'Can I buy Anker SOLIX for balcony solar in the US?', a: 'No — Anker SOLIX Solarbank models are not sold or certified for the US market, despite being widely available in Europe. This is a common point of confusion for US buyers researching the category.' },
          { q: 'How much battery capacity do I need for an 800W balcony system?', a: 'Real-world product sizing clusters around 1.9–2.5 kWh for 800W-class systems, based on typical daily surplus generation of roughly 4 kWh on a good day. No manufacturer publishes this as a formal sizing formula.' },
          { q: 'Why are so few battery-inclusive balcony solar kits available nationwide?', a: 'US state legislation for balcony solar has moved fastest on panel-plus-microinverter-only systems; storage-inclusive kits face additional state-by-state restrictions that most states haven\'t yet addressed.' },
          { q: 'Is Bluetti Balco a good local-control option?', a: 'It officially lists Home Assistant compatibility with a manufacturer GitHub integration, but it\'s unverified whether that integration is fully local or relays through Bluetti\'s cloud — confirm directly before relying on it for a no-cloud setup.' },
          { q: 'Will battery-inclusive kits become available in more states soon?', a: 'Likely, given the pace of state legislation covering balcony solar generally, but this is genuinely uncertain and moves month to month — check the state-by-state legal guide for current status rather than assuming expansion.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Balcony Solar Batteries (2026): Store Your Surplus Power',
      description: 'The best balcony solar batteries for 2026 — capacity, local-control support, and current US state legality compared, including why most storage kits are state-restricted.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      url: 'https://www.promptquorum.com/balcony-solar/best-balcony-solar-batteries-2026',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'US buyers considering battery storage for a balcony solar system' },
      about: ['Balcony solar battery', 'EcoFlow STREAM Ultra', 'Zendure SolarFlow', 'Home Assistant', 'Energy storage'],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'EcoFlow STREAM Ultra', description: 'Best overall — strongest specs, $1,279, currently Utah-only.' },
        { '@type': 'ListItem', position: 2, name: 'Zendure SolarFlow', description: 'Best local-control — mature local zenSDK Home Assistant integrations, no cloud required.' },
        { '@type': 'ListItem', position: 3, name: 'BigBlue POWAFREE H1', description: 'Wider (but still limited) state availability; price unverified.' },
      ],
    },
  },
};
