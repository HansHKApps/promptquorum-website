// Slug: balcony-solar-portugal-brazil
// BSOL-15 — Tier 3, PT sun market, semi_annual. Flagship page for the site's largest
// identified localization gap (pt-BR).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";
import { getCountryData } from "@/lib/shared/balcony-solar-country-data";

const pt = getCountryData('pt')!;
// Brazil has no clean numeric anchor (powerLimitW is null — no wattage carve-out
// exists) so its section is hand-authored rather than interpolated; see
// balcony-solar-spain-latam.ts for the same reasoning applied to Spain/Mexico.

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    theme: 'Balcony Solar Legislation',
    title: 'Balcony Solar in Portugal & Brazil: Legal Status Compared',
    seoTitle: 'Balcony Solar Legal: Portugal vs. Brazil (2026)',
    intro: 'Portugal and Brazil offer a sharp contrast: Portugal has one of the most clearly codified simplified regimes of any country in this guide, while Brazil has no dedicated framework at all — small plug-in kits exist there in an informally tolerated gray zone rather than a legal exemption.',
    metaDescription: 'Balcony solar in Portugal (explicitly legal, 700W exemption) vs. Brazil (no dedicated framework, informal gray zone) — verified against primary sources, July 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Balcony solar buyers in Portugal and Brazil researching legal status',
    primaryTerm: 'energia solar de varanda',
    targetKeywords: ['energia solar de varanda legal portugal', 'placas solares plug and play portugal', 'energia solar de tomada brasil', 'balcony solar legal portugal'],
    leadAnswerBlock: '**Portugal explicitly permits balcony solar under a codified simplified regime: systems up to 700W AC output with no grid export need no registration at all, per Decreto-Lei n.º 15/2022.** Brazil has no comparable framework — small plug-in kits are not banned, but ANEEL\'s formal micro-geração process technically applies uniformly up to 75kW with no documented wattage carve-out, and press coverage explicitly confirms plug-in kits still have no specific regulation, existing in an informally tolerated gray zone rather than a legal exemption.',
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Portugal and Brazil?',
        answer: 'Portugal: yes, explicitly, with one of the clearest simplified regimes covered in this guide — systems up to 700W AC output with no grid export need no registration at all. Brazil: not banned, but no dedicated framework exists either — small plug-in kits operate in an informally tolerated gray zone under ANEEL\'s general rules, which technically apply the same formal process regardless of system size.',
        bullets: [
          'Portugal: ≤700W AC, no grid export → no registration needed at all, per Decreto-Lei n.º 15/2022',
          'Portugal 700W–30kW: simplified online notification (Mera Comunicação Prévia) via DGEG',
          'Brazil: no dedicated plug-in-solar law — ANEEL\'s REN 1.059/2023 micro-geração rules technically apply uniformly, with no wattage carve-out',
          'Brazil: press explicitly confirms plug-in kits "ainda não conta[m] com uma regulamentação específica" (still have no specific regulation)',
          'When Brazilian Portuguese content is authored for this cluster, it must be pt-BR specifically — não português europeu',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Portugal: A Codified Simplified Regime', anchor: '#portugal' },
      { label: 'Brazil: No Dedicated Framework', anchor: '#brazil' },
      { label: 'Side-by-Side Comparison', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Portugal has one of the clearest, most confidently sourced simplified regimes in this guide — statutory text (Decreto-Lei n.º 15/2022), not just vendor claims.',
          'Systems up to 700W AC output with no grid export need no registration in Portugal at all; 700W–30kW needs only a simplified online notification.',
          'Brazil has no dedicated plug-in-solar law — press coverage explicitly confirms this rather than leaving it as an inference.',
          'Brazil\'s ANEEL REN 1.059/2023 micro-geração process technically applies uniformly regardless of system size, with no documented small-system exemption — small kits exist in informal tolerance, not codified permission.',
          'This is a genuinely different risk profile than Portugal\'s codified exemption, even though neither country bans balcony solar outright.',
          'Any future pt-BR (Brazilian Portuguese) content for this cluster must use Brazilian Portuguese specifically, not European Portuguese, per this site\'s translation standard.',
        ],
      },
      portugal: {
        id: 'portugal',
        title: 'Portugal: A Codified Simplified Regime',
        content: [
          `**Portugal has one of the most clearly codified simplified regimes of any country in this guide: systems up to ${pt.powerLimitW}W AC output with no grid export need no registration at all, per Decreto-Lei n.º 15/2022.** Plug-in kits are treated as UPAC (self-consumption units) under this law, but the lowest power tier functions as a genuine simplified regime specifically for them — this is primary statutory text, not a vendor claim.`,
          `Systems between ${pt.powerLimitW}W and 30kW require only a simplified online notification ("Mera Comunicação Prévia") through DGEG rather than full registration — a meaningfully lighter process than what most other countries in this guide require.`,
        ],
      },
      brazil: {
        id: 'brazil',
        title: 'Brazil: No Dedicated Framework',
        content: [
          '**Brazil has no dedicated plug-in-solar law — press coverage explicitly confirms this rather than leaving it as an inference.** Everything falls under ANEEL\'s general micro-geração framework (REN 1.059/2023), which technically applies the same formal interconnection process — connection request, technical study, bidirectional meter, INMETRO-certified inverter documentation — uniformly up to 75kW, with no documented wattage carve-out for small plug-in kits.',
        ],
        callouts: [
          { type: 'warning', text: 'Do not describe Brazil\'s situation as "legal" in the same sense as Portugal\'s codified exemption — informal tolerance under an unaddressed regulatory gap carries meaningfully different risk than a statutory carve-out.' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Side-by-Side Comparison',
        rows: [
          { factor: 'Legal framework', portugal: 'Codified statute (Decreto-Lei n.º 15/2022)', brazil: 'No dedicated law — general ANEEL micro-geração rules apply' },
          { factor: 'Small-system exemption', portugal: 'Yes — ≤700W AC, no export, zero registration', brazil: 'No documented exemption — full process technically applies to any size' },
          { factor: 'Registration', portugal: 'None below 700W; simplified notification 700W–30kW', brazil: 'Standard micro-geração connection request via local utility' },
          { factor: 'Practical reality for small kits', portugal: 'Clear legal certainty', brazil: 'Informally tolerated gray zone, not codified permission' },
        ],
        columns: ['factor', 'portugal', 'brazil'],
        tableFormat: true,
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need to register balcony solar in Portugal?', a: 'Not if your system is 700W AC output or less with no grid export — that tier is exempt from prior control entirely under Decreto-Lei n.º 15/2022. Systems between 700W and 30kW need only a simplified online notification.' },
          { q: 'Is balcony solar illegal in Brazil?', a: 'No, it\'s not banned — but there\'s also no dedicated law permitting it with a simplified process. Small kits currently exist in an informally tolerated gray zone under ANEEL\'s general rules, which is a different situation from Portugal\'s codified exemption.' },
          { q: 'What certification do I need in Brazil for a balcony solar system?', a: 'INMETRO certification for the inverter and ABNT technical compliance, per the general ANEEL framework — the same requirements that apply to any grid-tied solar system regardless of size.' },
          { q: 'Which is safer to buy into: Portugal or Brazil?', a: 'Portugal offers clearer legal certainty due to its codified exemption. Brazil\'s situation carries more regulatory ambiguity since no dedicated small-system framework exists, even though enforcement against tiny plug-in kits is not currently reported as active.' },
          { q: 'Is there a wattage carve-out for small systems in Brazil?', a: 'No documented one — ANEEL\'s formal micro-geração process technically applies uniformly up to 75kW, with no confirmed exemption threshold for very small plug-in kits specifically.' },
          { q: 'What does "vertido cero" or zero-export mean in Portugal\'s exemption?', a: 'It refers to systems configured not to export surplus power to the grid — a common configuration for small plug-in kits generally, and specifically required to qualify for Portugal\'s no-registration tier under 700W.' },
          { q: 'Will pt-BR content on this site use European or Brazilian Portuguese?', a: 'Brazilian Portuguese specifically (você form, BR vocabulary, LGPD/ANPD references) — this is a firm standard for this site\'s translation process, not a stylistic preference.' },
          { q: 'How confident is the sourcing for Portugal vs. Brazil in this article?', a: 'Portugal\'s figures are sourced directly from primary statutory text (the Decreto-Lei itself) — high confidence. Brazil\'s "no dedicated framework" finding is also well-sourced, including a direct press confirmation, but pricing and enforcement-in-practice details for Brazil carry lower confidence.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Balcony Solar in Portugal & Brazil: Legal Status Compared',
      description: 'Balcony solar in Portugal (explicitly legal, 700W exemption) vs. Brazil (no dedicated framework, informal gray zone) — verified against primary sources, July 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/balcony-solar-portugal-brazil',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Balcony solar buyers in Portugal and Brazil researching legal status' },
      about: ['Balcony solar Portugal', 'Decreto-Lei 15/2022', 'ANEEL REN 1.059/2023', 'Energia solar de varanda'],
    },
  },
};
