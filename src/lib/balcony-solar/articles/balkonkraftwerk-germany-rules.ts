// Slug: balkonkraftwerk-germany-rules
// BSOL-13 — Tier 3, DE reference market, semi_annual.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";
import { getCountryData } from "@/lib/shared/balcony-solar-country-data";

const de = getCountryData('de')!;

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    theme: 'Balcony Solar Legislation',
    title: 'Balkonkraftwerk Rules in Germany: The Complete 2026 Guide',
    seoTitle: 'Balkonkraftwerk Germany: Rules, Limits & Registration',
    intro: 'Germany is the origin market for balcony solar — the "Balkonkraftwerk" — and has the most established regulatory framework of any country this guide covers. This page tracks the current 800W inverter cap, the single-registration process, and a newer product standard that took effect in December 2025.',
    metaDescription: 'Balkonkraftwerk rules in Germany: 800W inverter cap, Marktstammdatenregister registration, and the new DIN VDE V 0126-95 standard — verified against primary legal text, July 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'German balcony solar buyers and renters confirming current legal requirements',
    primaryTerm: 'Balkonkraftwerk Regeln',
    targetKeywords: ['balkonkraftwerk regeln 2026', 'balkonkraftwerk 800 watt', 'marktstammdatenregister balkonkraftwerk', 'balkonkraftwerk anmeldung'],
    leadAnswerBlock: '**Germany permits balcony solar (Balkonkraftwerk) up to 800W inverter AC output with a single Marktstammdatenregister (MaStR) registration — no separate grid-operator notification required — confirmed against primary § 8 EEG 2023 legal text.** A newer safety standard, DIN VDE V 0126-95, took effect December 1, 2025, adding installation and connector requirements on top of the existing wattage limits; it explicitly excludes battery-equipped systems, which remain outside this simplified regime entirely.',
    quickAnswerTop: {
      en: {
        question: 'What are the current rules for Balkonkraftwerk in Germany?',
        answer: 'An 800W inverter AC output cap applies, confirmed against § 8 EEG 2023. Registration is a single Marktstammdatenregister (MaStR) entry — no separate grid-operator notification needed. Total panel capacity can reach 2,000 Wp, though a newer standard (DIN VDE V 0126-95, effective December 2025) caps module power at 960 Wp specifically for standard Schuko-socket connections. Battery-equipped balcony systems fall outside this simplified regime and need full grid-operator registration plus a licensed electrician.',
        bullets: [
          '800W inverter AC output cap — unchanged since the May 2024 Solarpaket I reform',
          'Single MaStR registration only — no separate Netzbetreiber (grid operator) notification required',
          'Panel capacity up to 2,000 Wp, but capped at 960 Wp specifically via a standard Schuko socket connection under DIN VDE V 0126-95',
          'DIN VDE V 0126-95 (effective 2025-12-01) is the first dedicated EU product safety standard for plug-in solar',
          'Storage-equipped (battery) balcony systems are excluded from this simplified regime entirely',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: '800W Inverter Limit', anchor: '#800w-limit' },
      { label: 'Registration: Marktstammdatenregister', anchor: '#registration' },
      { label: 'Schuko vs. Wieland: Plug Types and Panel Capacity', anchor: '#plug-types' },
      { label: 'The Meter Question', anchor: '#meter-question' },
      { label: 'Tenant Rights', anchor: '#tenant-rights' },
      { label: 'Grants', anchor: '#grants' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '800W inverter AC output cap, confirmed current against primary § 8 EEG 2023 legal text — unchanged since the May 2024 Solarpaket I reform.',
          'A single Marktstammdatenregister (MaStR) registration is the only step required — no separate grid-operator notification, confirmed against the same primary source.',
          'Panel capacity can reach 2,000 Wp, but DIN VDE V 0126-95 (effective December 1, 2025) caps module power at 960 Wp specifically when connecting via a standard Schuko socket — the full 2,000 Wp needs a dedicated energy connector.',
          'DIN VDE V 0126-95 is the first dedicated EU product safety standard for plug-in solar, mandating pre-assembled cables and rapid shutoff for shock protection.',
          'Battery-equipped balcony systems are excluded from this entire simplified regime — full grid-operator registration and a licensed electrician are required for those specifically.',
          'The old Ferraris (backward-spinning) meter is still temporarily tolerated pending a swap by the Messstellenbetreiber — the exact statutory swap deadline is commonly cited as roughly 4 months but was not independently confirmed against primary statute text.',
        ],
      },
      inverterLimit: {
        id: '800w-limit',
        title: '800W Inverter Limit',
        content: [
          `**The inverter AC output cap is ${de.powerLimitW}W, unchanged since the May 2024 Solarpaket I reform.** It's now anchored in two sources: § 8 EEG 2023 sets the legal ceiling, and DIN VDE V 0126-95 — a technical/safety product standard effective December 1, 2025 — reinforces it as the first dedicated EU product standard for plug-in solar devices.`,
        ],
      },
      registration: {
        id: 'registration',
        title: 'Registration: Marktstammdatenregister',
        content: [
          '**A single Marktstammdatenregister (MaStR) entry is the only registration step required — no separate grid-operator notification is needed.** § 8 EEG 2023 text states no additional Netzbetreiber notification can be demanded beyond MaStR; the grid operator is informed automatically via MaStR data-sharing.',
        ],
      },
      plugTypes: {
        id: 'plug-types',
        title: 'Schuko vs. Wieland: Plug Types and Panel Capacity',
        content: [
          `**Total panel (module) capacity can reach ${de.panelWattageCapWp!.toLocaleString("en-US")} Wp, independent of and separate from the ${de.powerLimitW}W inverter/AC limit.** DIN VDE V 0126-95 adds a plug-type-dependent sub-limit: module power is capped at 960 Wp when connected via a standard household Schuko socket, with the full ${de.panelWattageCapWp!.toLocaleString("en-US")} Wp requiring a dedicated energy connector such as Wieland.`,
          'In practice: if you\'re installing through a standard household Schuko outlet, plan around the 960 Wp module sub-limit. Reaching the full 2,000 Wp module capacity requires a dedicated energy connector (such as Wieland), which is a different — and more involved — installation than a simple Schuko plug-in.',
        ],
      },
      meterQuestion: {
        id: 'meter-question',
        title: 'The Meter Question',
        content: [
          '**A digital or bidirectional meter is not mandatory to operate a Balkonkraftwerk — an old backward-spinning Ferraris meter is still tolerated temporarily, contingent on MaStR registration.** The exact statutory window for the Messstellenbetreiber to install a two-way meter is commonly cited as roughly four months, but this specific figure was not independently confirmed against primary MessEG/MsbG statute text — treat it as a secondary-sourced estimate, not confirmed law.',
        ],
        callouts: [
          { type: 'tip', text: 'You are not required to wait for a new meter before operating your system — the old meter is tolerated temporarily as long as your MaStR registration is complete.' },
        ],
      },
      tenantRights: {
        id: 'tenant-rights',
        title: 'Tenant Rights',
        content: [
          '**Germany has moved toward treating balcony solar as a privileged home-improvement measure for tenants in recent reforms, similar in spirit to satellite dishes, though landlord/HOA approval processes and specifics can still vary by building.** Confirm your specific building\'s rules, particularly for anything mounted visibly on a railing or exterior wall, since aesthetic and structural conditions can still apply even where the underlying right to install is protected.',
        ],
      },
      grants: {
        id: 'grants',
        title: 'Grants',
        content: [
          '**Some German states and municipalities offer balcony solar subsidies (Förderprogramme), but availability, amount, and eligibility vary significantly by region and change over time — check your specific state or city\'s current program directly rather than assuming a subsidy applies nationally.**',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What is the current wattage limit for Balkonkraftwerk in Germany?', a: '800W inverter AC output, confirmed against primary § 8 EEG 2023 text — unchanged since the May 2024 Solarpaket I reform.' },
          { q: 'Do I need to register my Balkonkraftwerk with my grid operator?', a: 'No — a single Marktstammdatenregister (MaStR) entry is the only registration step required. No separate Netzbetreiber notification is needed; the grid operator is informed automatically via MaStR data-sharing.' },
          { q: 'What is DIN VDE V 0126-95?', a: 'The first dedicated EU product safety standard for plug-in solar devices, effective December 1, 2025. It mandates pre-assembled connection cables, clear installation instructions, and rapid voltage shutoff for shock protection, and explicitly excludes battery-equipped systems.' },
          { q: 'Can I install more than 800W of panels?', a: 'Yes — total panel (module) capacity can reach 2,000 Wp even though the inverter output stays capped at 800W. A standard Schuko socket connection caps module power at 960 Wp specifically; the full 2,000 Wp requires a dedicated energy connector.' },
          { q: 'Do I need a new digital meter to use a Balkonkraftwerk?', a: 'Not immediately — an old backward-spinning Ferraris meter is still tolerated temporarily, contingent on MaStR registration. The exact statutory swap deadline is commonly cited as roughly 4 months but wasn\'t independently confirmed against primary statute text.' },
          { q: 'Are battery-equipped balcony systems covered by the simplified regime?', a: 'No — storage-equipped balcony systems are explicitly excluded and still require full grid-operator registration and a licensed electrician, unlike standard plug-in units.' },
          { q: 'Can renters install a Balkonkraftwerk without landlord approval?', a: 'Germany has moved toward treating balcony solar as a privileged tenant right in recent reforms, but building-specific approval processes and conditions (particularly for visible exterior mounting) can still apply — confirm with your specific landlord or HOA.' },
          { q: 'Are there subsidies for Balkonkraftwerk in Germany?', a: 'Some states and municipalities offer subsidies, but availability and amount vary significantly by region — check your specific state or city\'s current program rather than assuming a nationwide subsidy applies.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Balkonkraftwerk Rules in Germany: The Complete 2026 Guide',
      description: 'Balkonkraftwerk rules in Germany: 800W inverter cap, Marktstammdatenregister registration, and the new DIN VDE V 0126-95 standard — verified against primary legal text, July 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/balkonkraftwerk-germany-rules',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'German balcony solar buyers and renters confirming current legal requirements' },
      about: ['Balkonkraftwerk', 'EEG 2023', 'Marktstammdatenregister', 'DIN VDE V 0126-95'],
    },
  },
};
