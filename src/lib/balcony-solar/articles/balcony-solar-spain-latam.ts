// Slug: balcony-solar-spain-latam
// BSOL-14 — Tier 3, ES sun market, semi_annual. Spain's status is genuinely
// unresolved — this article does not soften that into a clean yes/no.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";
// Note: this article intentionally does NOT import COUNTRY_DATA for narrative prose.
// Spain's status is genuinely unresolved and Mexico's has no clean numeric anchor —
// forcing programmatic interpolation here produced audit-trail-style fragments
// (see BSOL-08/13 fix, 2026-07-02). Hand-authored prose is the correct choice for
// qualitative/ambiguous legal findings; only reach for interpolation when a field
// is a genuine standalone value (a wattage number, a date), not a full descriptive note.

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    theme: 'Balcony Solar Legislation',
    title: 'Balcony Solar in Spain & Latin America: Legal Status Explained',
    seoTitle: 'Balcony Solar Legal Status: Spain & Latin America',
    intro: 'Spain\'s balcony solar legal status is genuinely unresolved — sources conflict, and this guide isn\'t going to paper over that to give you a tidier answer. Mexico, covered here as a Latin American reference point, has a clearer but less favorable picture: no small-system exemption exists at all.',
    metaDescription: 'Is balcony solar legal in Spain? The honest answer is unresolved — conflicting sources on an 800W exemption, explained. Plus Mexico\'s no-exemption interconnection rules.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Balcony solar buyers in Spain and Latin American markets researching legal status',
    primaryTerm: 'energía solar de balcón España',
    targetKeywords: ['balcony solar legal spain', 'placas solares balcon españa legal', 'energia solar balcon mexico', 'plug in solar spain regulation'],
    leadAnswerBlock: '**Spain\'s legal status for small balcony solar kits is genuinely unresolved — vendor and press sources claim systems under roughly 800W need no registration, while a detailed legal-focused source states Spain has not adopted a dedicated simplified regime and full self-consumption formalities still apply.** This page reports that conflict rather than resolving it artificially. Mexico, by contrast, has a clear but less favorable answer: no small-system exemption exists at all — the same full CFE interconnection process applies to any grid-tied system regardless of size.',
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar legal in Spain?',
        answer: 'This is genuinely unresolved, not a clean yes or no. Vendor and press sources say systems under roughly 800W can be installed without a project, installer certificate, or registration. A detailed legal-focused source disagrees, stating Spain has not adopted a dedicated balcony-solar regime and that full RD 244/2019 self-consumption formalities (CIE certificate, REBT compliance, regional registry, distributor notification) still apply. Confirm with your specific autonomous community before assuming either answer.',
        bullets: [
          'Spain: genuinely unresolved — conflicting vendor vs. legal sources on an 800W exemption',
          'The 800W figure commonly cited for Spain appears to be EU/marketing-derived rather than a codified Spanish statutory threshold',
          '"Vertido cero" (zero-export) self-consumption is exempt from access/connection permits under RD 244/2019, but it\'s unclear whether this functions as a true simplified path for balcony kits specifically',
          'Mexico: clear but unfavorable — no small-system exemption, full CFE interconnection process applies to any size',
          'This page will not present Spain\'s status as settled in either direction until better primary-source confirmation exists',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Spain: The Unresolved Question', anchor: '#spain-unresolved' },
      { label: 'What the Conflicting Sources Actually Say', anchor: '#conflicting-sources' },
      { label: 'Mexico: No Small-System Exemption', anchor: '#mexico' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Spain\'s status is genuinely unresolved — this guide does not present a settled answer because the underlying sources conflict.',
          'The commonly cited 800W Spanish exemption threshold appears to be EU/marketing-derived rather than a codified statutory figure specific to Spain.',
          '"Vertido cero" (zero-export) self-consumption is exempt from access/connection permits under RD 244/2019, but its applicability as a true simplified path for balcony kits specifically is unclear.',
          'A detailed legal-focused source states full RD 244/2019 formalities (CIE certificate, REBT compliance, regional registry, distributor notification) still apply in Spain regardless of small system size.',
          'Mexico has a clear answer, just not a favorable one: no small-system exemption exists — the same full CFE interconnection process applies whether you\'re installing 300W or 300kW.',
          'Confirm directly with your specific Spanish autonomous community or Mexican CFE region before proceeding — general national-level guidance genuinely can\'t resolve this for you given the source conflict.',
        ],
      },
      spainUnresolved: {
        id: 'spain-unresolved',
        title: 'Spain: The Unresolved Question',
        content: [
          '**Spain\'s legal status for small balcony solar kits is genuinely unresolved, not a settled fact this guide can report either way.** RD 244/2019 legalized self-consumption broadly, but sources actively conflict on whether small plug-in kits get a genuine simplified exemption — vendor and press sources claim systems under roughly 800W need no project, installer certificate, or registration, while a detailed legal-focused source states Spain has not adopted a dedicated balcony-solar regime and full formalities still apply regardless of size.',
        ],
        callouts: [
          { type: 'warning', text: 'This guide is deliberately not resolving Spain\'s status into a clean yes/no. Presenting an unconfirmed exemption as settled fact would be worse than admitting the genuine ambiguity — verify directly with your autonomous community\'s energy authority before installing.' },
        ],
      },
      conflictingSources: {
        id: 'conflicting-sources',
        title: 'What the Conflicting Sources Actually Say',
        content: [
          '**One set of sources — vendor sites and general press coverage — states that plug-in kits under roughly 800W can be installed without a formal project, installer certificate, or registration, treating "vertido cero" (zero-export) self-consumption as a practical simplified path.** A separate, more detailed legal-focused source disputes this directly, stating that Spain has not adopted a dedicated balcony-solar regime comparable to Germany, Austria, or the Netherlands, and that full RD 244/2019 formalities still apply regardless of system size: a CIE (Certificado de Instalación Eléctrica) certificate, REBT (electrical safety code) compliance, registration with your regional Comunidad Autónoma, and notification to your electricity distributor.',
          'The 800W figure itself is also suspect as a Spain-specific threshold — it closely mirrors thresholds used in other European markets, suggesting it may have been generalized rather than sourced from Spanish statutory text specifically.',
        ],
      },
      mexico: {
        id: 'mexico',
        title: 'Mexico: No Small-System Exemption',
        content: [
          '**Mexico has no plug-in-solar-specific framework — every grid-tied system, from the smallest plug-in unit up to 700kW, goes through the identical formal CFE interconnection contract process with a CRE-certified installer.** The 700kW "trámite simplificado" threshold, raised from 500kW under Mexico\'s Ley del Sector Eléctrico (effective March 19, 2025), is a permitting-complexity boundary, not a small-system exemption — a 300W balcony kit and a 690kW system face the same paperwork.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is balcony solar definitely legal in Spain?', a: 'This cannot be answered with confidence — sources conflict on whether small kits get a simplified exemption or need the full RD 244/2019 formal process. Confirm directly with your regional energy authority.' },
          { q: 'Is the 800W exemption for Spain confirmed?', a: 'No — it appears to be a commonly repeated figure that may originate from other European markets rather than codified Spanish statutory text specifically.' },
          { q: 'What is "vertido cero" and does it help balcony solar buyers in Spain?', a: 'It\'s a zero-export self-consumption category exempt from access/connection permits under RD 244/2019. Whether it functions as a genuine simplified path for balcony kits specifically, versus a general practical safeguard, is unclear from available sources.' },
          { q: 'Does Mexico allow balcony solar?', a: 'It\'s not banned, but there\'s no small-system exemption — the same full CFE interconnection process (contract, CRE-certified installer) applies to any grid-tied system size, from 1kW up to 700kW.' },
          { q: 'What documentation might I need in Spain for a small balcony kit?', a: 'If the stricter legal-source interpretation applies, potentially a CIE certificate, REBT compliance documentation, regional Comunidad Autónoma registration, and distributor notification — confirm which of these actually apply to your specific system size and region.' },
          { q: 'Is Latin America generally covered by this page?', a: 'Only Mexico is covered here with verified data. Other Latin American countries were not independently researched for this guide — do not assume Mexico\'s status applies elsewhere in the region.' },
          { q: 'Why doesn\'t this page just pick a side on Spain\'s legality?', a: 'Because the underlying sources genuinely disagree, and asserting a confident answer either way would be presenting unverified information as fact — a direct violation of this site\'s sourcing standard.' },
          { q: 'When will Spain\'s status be resolved on this page?', a: 'When a primary regulatory source (rather than vendor or general press coverage) can confirm or deny a codified simplified exemption — this page is on a 6-month refresh cycle and will update if that clarity emerges.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Balcony Solar in Spain & Latin America: Legal Status Explained',
      description: 'Is balcony solar legal in Spain? The honest answer is unresolved — conflicting sources on an 800W exemption, explained. Plus Mexico\'s no-exemption interconnection rules.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/balcony-solar-spain-latam',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Balcony solar buyers in Spain and Latin American markets researching legal status' },
      about: ['Balcony solar Spain', 'RD 244/2019', 'Mexico CFE interconnection', 'Vertido cero'],
    },
  },
};
