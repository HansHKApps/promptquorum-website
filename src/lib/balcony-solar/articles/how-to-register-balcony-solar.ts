// Slug: how-to-register-balcony-solar
// BSOL-08 — Tier 2 how-to (localization-heavy), semi_annual. Now also owns the
// per-country plug-type/price detail shed from BSOL-07's evergreen prose.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";
import { COUNTRY_DATA, getCountryData } from "@/lib/shared/balcony-solar-country-data";

const de = getCountryData('de')!;

const registrationRows = COUNTRY_DATA.map((c) => ({
  country: c.country,
  registration: c.registrationRequired,
  powerLimit: c.powerLimitW ? `${c.powerLimitW}W` : (c.powerLimitNote || 'No fixed limit found'),
}));

const priceRows = COUNTRY_DATA.map((c) => ({
  country: c.country,
  typicalPrice: c.typicalPrice,
  verified: c.typicalPriceVerified ? 'Verified' : 'Unverified — treat as approximate',
}));

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    theme: 'Balcony Solar Foundations',
    title: 'How to Register Balcony Solar: Country-by-Country Requirements',
    seoTitle: 'Balcony Solar Registration Requirements by Country (2026)',
    intro: 'Registration requirements for balcony solar range from "none at all" to a full formal application process — and the difference depends entirely on which country and, in the US, which state you\'re in. This guide also covers plug type and typical hardware cost by market, detail that used to live in the installation guide before we split it out here to keep that page durably evergreen.',
    metaDescription: 'Balcony solar registration requirements by country, plus plug type and typical hardware cost per market — verified against primary regulatory sources as of July 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    audience: 'Balcony solar buyers needing to confirm registration requirements for their specific country',
    primaryTerm: 'balcony solar registration',
    targetKeywords: ['balcony solar registration', 'do i need to register balcony solar', 'marktstammdatenregister balkonkraftwerk', 'balcony solar registration by country'],
    leadAnswerBlock: '**Registration requirements for balcony solar range from none at all (Portugal, for systems under 700W with no grid export) to a full standard interconnection process with no small-system exemption (Brazil, Mexico) — there is no universal rule, so check your specific country before assuming either extreme.** This page also covers plug type and typical hardware pricing by market, since both vary enough by country that a single global figure would be misleading.',
    quickAnswerTop: {
      en: {
        question: 'Do I need to register my balcony solar system?',
        answer: 'It depends entirely on your country. Portugal exempts systems under 700W with no grid export from any registration. Germany uses a single simplified Marktstammdatenregister registration. The US varies by state with no federal registration. Brazil and Mexico have no small-system exemption at all — full standard interconnection registration applies regardless of system size.',
        bullets: [
          'Portugal: no registration needed for systems ≤700W with no grid export',
          'Germany: single Marktstammdatenregister registration, no separate grid-operator notification needed — verified against primary EEG text, storage-equipped kits excepted',
          'US: varies by state, no federal registration requirement',
          'Brazil and Mexico: no small-system exemption — full standard registration applies to any size',
          'Spain: conflicting sources on whether small kits get a simplified path — treat as unresolved, not confirmed either way',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Do You Need to Register?', anchor: '#do-you-need-to-register' },
      { label: 'Germany: Marktstammdatenregister', anchor: '#germany' },
      { label: 'United States: Varies by State', anchor: '#united-states' },
      { label: 'Spain', anchor: '#spain' },
      { label: 'Portugal', anchor: '#portugal' },
      { label: 'Step-by-Step Per Market', anchor: '#step-by-step' },
      { label: 'Plug Type & Hardware Cost by Country', anchor: '#plug-type-cost' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Registration requirements range from none (Portugal, ≤700W no-export) to full standard interconnection with no small-system exemption (Brazil, Mexico) — there is no universal default.',
          'Germany uses a single Marktstammdatenregister registration with no separate grid-operator notification — confirmed against primary § 8 EEG 2023 text. Storage-equipped balcony systems are the exception: they fall outside this simplified regime entirely and need full grid-operator registration plus a licensed electrician.',
          'US registration requirements vary by state with no federal standard — check your specific state.',
          'Spain\'s status is genuinely unresolved: vendor sources claim a simplified exemption for small kits, but a detailed legal source says full formalities still apply — this page does not assert either as settled.',
          'Plug type and typical hardware price both vary meaningfully by country — see the dedicated table below rather than assuming your home market\'s numbers apply elsewhere.',
          'This data traces back to a single shared source-of-truth module — if a figure here looks outdated, the underlying data file is what needs updating, not this article\'s prose independently.',
        ],
      },
      doYouNeedToRegister: {
        id: 'do-you-need-to-register',
        title: 'Do You Need to Register?',
        content: [
          '**Whether you need to register depends entirely on your country\'s regulatory approach — some have a dedicated lightweight tier for small systems, others apply the same registration process regardless of size.** The table below summarizes current registration requirements by country; see each market\'s dedicated section for detail.',
        ],
        rows: registrationRows,
        columns: ['country', 'registration', 'powerLimit'],
        tableFormat: true,
      },
      germany: {
        id: 'germany',
        title: 'Germany: Marktstammdatenregister',
        content: [
          `**Germany requires a single Marktstammdatenregister (MaStR) entry for standard plug-in balcony solar — no separate grid-operator notification is required, since the grid operator is informed automatically via MaStR data-sharing.** The inverter AC output cap is ${de.powerLimitW}W, reinforced by DIN VDE V 0126-95, a dedicated EU product safety standard for plug-in solar that took effect December 1, 2025.`,
          `Total panel (module) capacity can reach ${de.panelWattageCapWp!.toLocaleString("en-US")} Wp even though the inverter output is capped at ${de.powerLimitW}W — but DIN VDE V 0126-95 caps module power at 960 Wp specifically when connecting through a standard household Schuko socket, with the full ${de.panelWattageCapWp!.toLocaleString("en-US")} Wp requiring a dedicated energy connector instead. Any storage-equipped balcony system falls outside this simplified regime — battery-equipped kits still require full grid-operator registration and a licensed electrician in Germany, unlike standard plug-in units.`,
        ],
      },
      unitedStates: {
        id: 'united-states',
        title: 'United States: Varies by State',
        content: [
          '**There is no federal balcony solar registration requirement in the US — legality and any registration process is determined entirely at the state level, and most states have no framework addressing balcony solar specifically at all.** See the [state-by-state legal guide](/balcony-solar/balcony-solar-legal-us-states) for current per-state status, since this changes month to month as legislatures act.',
        ],
      },
      spain: {
        id: 'spain',
        title: 'Spain',
        content: [
          '**Spain\'s registration status for small balcony solar kits is genuinely unresolved — vendor and press sources claim systems under roughly 800W need no project, installer certificate, or registration, while a detailed legal-focused source states Spain has not adopted a dedicated balcony-solar regime and full RD 244/2019 formalities (CIE certificate, REBT compliance, regional registry, distributor notification) still apply.** Treat this as an open question requiring direct confirmation for your specific region, not a settled fact in either direction.',
        ],
      },
      portugal: {
        id: 'portugal',
        title: 'Portugal',
        content: [
          '**Portugal has the clearest, most confidently sourced simplified regime of any country covered here: systems up to 700W AC output with no grid export are exempt from prior control entirely, per Decreto-Lei n.º 15/2022.** Systems between 700W and 30kW require only a simplified online notification ("Mera Comunicação Prévia") through DGEG rather than full registration.',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: 'Step-by-Step Per Market',
        content: [
          '**The general pattern across markets with a registration requirement: confirm your system falls within any applicable power limit, gather the documentation your specific market requires (which varies from none to a full technical application), and submit through the designated authority — a utility, a national energy regulator, or both.** Because the exact steps differ so much by country, always follow your market\'s official process directly rather than assuming another country\'s steps transfer over.',
        ],
      },
      plugTypeCost: {
        id: 'plug-type-cost',
        title: 'Plug Type & Hardware Cost by Country',
        content: [
          '**Typical hardware pricing varies substantially by market — treat the figures below as a starting reference, not a quote, and note that several are flagged unverified where no reliable local-currency price was found.**',
        ],
        rows: priceRows,
        columns: ['country', 'typicalPrice', 'verified'],
        tableFormat: true,
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Which country has the simplest balcony solar registration?', a: 'Portugal — systems up to 700W AC output with no grid export require no registration at all, per Decreto-Lei n.º 15/2022, one of the most clearly codified exemptions found across the markets covered here.' },
          { q: 'Do I need to register balcony solar in Germany?', a: 'Yes, via a single Marktstammdatenregister (MaStR) entry — no separate grid-operator notification is required for standard plug-in units. Storage-equipped balcony systems are an exception and still require full grid-operator registration plus a licensed electrician.' },
          { q: 'Is there a federal registration requirement in the US?', a: 'No — registration requirements, where they exist at all, are determined entirely at the state level. Most states have no dedicated balcony solar framework yet.' },
          { q: 'Do Brazil and Mexico have a simplified registration path for small systems?', a: 'No — both countries apply their standard full interconnection/registration process regardless of system size, with no documented small-system exemption found.' },
          { q: 'Is Spain\'s 800W exemption confirmed?', a: 'No — this is genuinely unresolved. Some sources claim an exemption for systems under roughly 800W; a detailed legal source disputes this and says full formalities still apply. Treat it as an open question.' },
          { q: 'What plug type do I need for my country?', a: 'This varies by country — check the table above for your specific market rather than assuming a single global standard applies.' },
          { q: 'Why does hardware pricing vary so much by country?', a: 'Local retail markups, import costs, and market maturity all vary — several figures in the table above are flagged unverified precisely because reliable local pricing wasn\'t consistently found.' },
          { q: 'How often does this registration information change?', a: 'Frequently enough that this page is on a 6-month refresh cycle — legislatures and regulators actively amend these rules, particularly in the US where new states are adding balcony solar legislation regularly.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'How to Register Balcony Solar: Country-by-Country Requirements',
      description: 'Balcony solar registration requirements by country, plus plug type and typical hardware cost per market — verified against primary regulatory sources as of July 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/how-to-register-balcony-solar',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Balcony solar buyers needing to confirm registration requirements for their specific country' },
      about: ['Balcony solar registration', 'Marktstammdatenregister', 'DGEG', 'Solar regulation by country'],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Register Balcony Solar in Your Country',
      step: [
        { '@type': 'HowToStep', name: 'Confirm your country\'s power limit for the simplified tier, if one exists', text: 'Check whether your system falls under any lightweight registration threshold.' },
        { '@type': 'HowToStep', name: 'Gather required documentation', text: 'Requirements range from none to a full technical application depending on your market.' },
        { '@type': 'HowToStep', name: 'Submit through the designated authority', text: 'This may be a utility, a national energy regulator, or both, depending on your country.' },
      ],
    },
  },
};
