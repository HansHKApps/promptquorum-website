// Slug: is-balcony-solar-legal-country-guide
// BSOL-11 — Tier 3 tracker master, semi_annual, ★ SPOT-CHECK (legal/moat). Links to BSOL-12..16.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";
import { COUNTRY_DATA } from "@/lib/shared/balcony-solar-country-data";

const statusRows = COUNTRY_DATA.map((c) => ({
  country: c.country,
  status: c.legalStatus,
  powerLimit: c.powerLimitW ? `${c.powerLimitW}W` : (c.powerLimitNote || 'No fixed limit found'),
}));

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    theme: 'Balcony Solar Legislation',
    title: 'Is Balcony Solar Legal? Country-by-Country Status Guide',
    seoTitle: 'Is Balcony Solar Legal? Global Status Guide (2026)',
    intro: 'Balcony solar\'s legal status ranges from a codified, well-defined simplified regime to genuine regulatory silence — and the difference matters more than any spec sheet before you buy anything. This guide tracks current status across every major market this site covers, with links to the full detail for each.',
    metaDescription: 'Is balcony solar legal in your country? Global status tracker covering the US, Germany, Spain, Portugal, Brazil, Mexico, and the Gulf/MENA region, verified July 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Prospective balcony solar buyers needing to confirm legal status before purchasing',
    primaryTerm: 'is balcony solar legal',
    targetKeywords: ['is balcony solar legal', 'balcony solar legal status by country', 'plug in solar legality', 'where is balcony solar legal'],
    leadAnswerBlock: '**Balcony solar\'s legal status varies enormously by country: Portugal has a clearly codified simplified regime, Germany has a well-established one, the US varies entirely by state with no federal framework, and Brazil, Mexico, and the Gulf/MENA region currently have no dedicated small-system exemption at all.** There is no default assumption that\'s safe to make — confirm your specific country\'s (and in the US, state\'s) status before buying.',
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal where I live?',
        answer: 'It depends entirely on your country, and in the US, your state. Portugal and Germany have the clearest, most established simplified regimes. The US has no federal framework — legality is determined state by state, with only a handful of states having passed dedicated legislation. Brazil, Mexico, and the Gulf/MENA region have no small-system exemption; standard interconnection rules apply regardless of size. Spain\'s status is genuinely ambiguous.',
        bullets: [
          'Portugal: explicitly legal, codified simplified regime for systems ≤700W with no grid export',
          'Germany: explicitly legal, established simplified regime (MaStR-only registration, 800W inverter cap)',
          'United States: varies by state, no federal framework — check the dedicated state-by-state guide',
          'Spain: ambiguous — conflicting vendor vs. legal sources on whether a simplified exemption exists',
          'Brazil, Mexico, Gulf/MENA: no small-system exemption — standard interconnection rules apply to any size',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Global Status Overview', anchor: '#global-status' },
      { label: 'What Does "Legal" Actually Mean?', anchor: '#what-legal-means' },
      { label: 'Country Pages', anchor: '#country-pages' },
      { label: 'How These Rules Are Changing', anchor: '#how-rules-are-changing' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Legal status ranges from a codified simplified regime (Portugal, Germany) to genuine regulatory silence (parts of the Gulf/MENA region) — there is no safe default assumption.',
          'The US has no federal framework — legality is entirely state-determined, and most states haven\'t addressed balcony solar specifically at all yet.',
          'Brazil and Mexico both apply their standard full interconnection process regardless of system size — no small-system carve-out exists in either country.',
          'Spain\'s status is a genuine open question — sources conflict on whether small kits get a simplified exemption.',
          'This tracker and every linked country page pull from a single shared data source, so a status change in one place updates everywhere consistently.',
          'Rules change fastest in the US, where new states are actively passing balcony solar legislation — check the dedicated US page for current month-to-month status.',
        ],
      },
      globalStatus: {
        id: 'global-status',
        title: 'Global Status Overview',
        content: [
          '**This table summarizes current legal status and power limits across every market this site covers — click through to each country page for full detail, sourcing, and registration steps.**',
        ],
        rows: statusRows,
        columns: ['country', 'status', 'powerLimit'],
        tableFormat: true,
      },
      whatLegalMeans: {
        id: 'what-legal-means',
        title: 'What Does "Legal" Actually Mean?',
        content: [
          '**"Legal" for balcony solar usually means one of three distinct things, and conflating them is a common source of confusion: explicitly permitted under a dedicated simplified regime with a defined power limit, legal only in the sense that it falls under the same rules as any other grid-tied solar system with no lighter-touch path, or genuinely unaddressed by current regulation (neither permitted nor banned).** The country pages below specify which of these three applies to your market, since the practical difference — self-install with a simple form vs. a full formal interconnection process — is significant.',
          'One more thing worth knowing before you shop: most widely available balcony solar hardware reports production data to the manufacturer\'s cloud by default, regardless of which country\'s legal regime you\'re under — local-only monitoring is the exception you have to specifically look for, not the default you can assume. See [running balcony solar without the cloud](/balcony-solar/home-assistant-balcony-solar-no-cloud) if that matters to you.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '"Legal" balcony solar can mean anything from a codified simplified regime to genuine regulatory silence — check which applies to your specific country.' },
          { type: 'plain-terms', text: 'Some countries have made a special, easy path just for small plug-in systems. Others just apply the same rules as a full rooftop install, no matter how small your system is. A few haven\'t addressed it at all.' },
        ],
      },
      countryPages: {
        id: 'country-pages',
        title: 'Country Pages',
        content: [
          '**Each market below has a dedicated page with full legal detail, registration steps, and sourcing.**',
        ],
        links: [
          { url: '/balcony-solar/balcony-solar-legal-us-states', title: 'Is Balcony Solar Legal in the US? State-by-State Guide', description: 'Signed and pending state legislation, updated regularly' },
          { url: '/balcony-solar/balkonkraftwerk-germany-rules', title: 'Balkonkraftwerk: Germany Rules Explained', description: '800W cap, MaStR registration, and the new DIN VDE V 0126-95 standard' },
          { url: '/balcony-solar/balcony-solar-spain-latam', title: 'Balcony Solar in Spain & Latin America', description: 'Spain\'s ambiguous status explained' },
          { url: '/balcony-solar/balcony-solar-portugal-brazil', title: 'Balcony Solar in Portugal & Brazil', description: 'Portugal\'s codified regime vs. Brazil\'s regulatory gap' },
          { url: '/balcony-solar/balcony-solar-gulf-mena', title: 'Balcony Solar in the Gulf & MENA Region', description: 'Nascent regulation in the UAE and Saudi Arabia' },
        ],
      },
      howRulesAreChanging: {
        id: 'how-rules-are-changing',
        title: 'How These Rules Are Changing',
        content: [
          '**US state legislation is the fastest-moving part of this landscape — several states have signed dedicated balcony solar bills within the past year, and more are actively moving through state legislatures.** Outside the US, changes are less frequent but not absent: Germany\'s DIN VDE V 0126-95 product standard took effect as recently as December 2025, showing that even established markets continue to refine their rules.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Which countries have the clearest balcony solar laws?', a: 'Portugal and Germany both have well-established, codified simplified regimes with clear power limits and registration processes — the clearest status of any markets covered here.' },
          { q: 'Is balcony solar legal everywhere in the US?', a: 'No — there is no federal framework. Legality is determined entirely at the state level, and only a handful of states have passed dedicated legislation so far. See the state-by-state guide for current status.' },
          { q: 'Do any countries explicitly ban balcony solar?', a: 'None of the markets covered in this guide have an explicit ban — status ranges from clearly permitted to ambiguous to unaddressed, but not outright prohibited.' },
          { q: 'Why is Spain\'s status listed as ambiguous rather than a clear yes or no?', a: 'Sources genuinely conflict — vendor and press sources claim a simplified exemption for small kits, while a detailed legal-focused source says full formalities still apply. This guide reports that conflict rather than picking a side without confirmation.' },
          { q: 'Do Brazil and Mexico allow balcony solar?', a: 'It\'s not banned, but neither country has a small-system exemption — the same full interconnection registration process applies regardless of system size, which is a meaningfully different situation from a dedicated simplified regime.' },
          { q: 'How often does this legal status information change?', a: 'This page and its linked country pages are on a 6-month refresh cycle, though the US state page refreshes faster (60 days) given how quickly US state legislation is moving.' },
          { q: 'What should I do if my country isn\'t listed here?', a: 'Check your national or regional energy regulator directly — this guide covers the markets this site currently tracks, not every country worldwide.' },
          { q: 'Is unregulated the same as legal?', a: 'Not necessarily — genuinely unaddressed regulation (as in parts of the Gulf/MENA region) means neither explicit permission nor prohibition exists, which carries different practical risk than a market with a clear simplified legal framework.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Is Balcony Solar Legal? Country-by-Country Status Guide',
      description: 'Is balcony solar legal in your country? Global status tracker covering the US, Germany, Spain, Portugal, Brazil, Mexico, and the Gulf/MENA region, verified July 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/is-balcony-solar-legal-country-guide',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Prospective balcony solar buyers needing to confirm legal status before purchasing' },
      about: ['Balcony solar legality', 'Solar regulation', 'Steckersolargeräte', 'Plug-in solar law'],
    },
  },
};
