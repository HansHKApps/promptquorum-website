// Slug: eu-800w-balcony-solar-standard-2027
// BSOL-27 — Tier 5 (2027 Trends), legislation, semi_annual.
// NOTE (Phase 3 scope): balkonkraftwerk-germany-rules.ts already covers the German
// 800W/DIN VDE V 0126-95/Schuko facts in depth — this article must scope to the
// CROSS-BORDER harmonization angle (Greece and other EU states adopting the German
// standard), treating Germany as a brief reference-out, not a re-explainer.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-18',
    theme: 'Balcony Solar Legislation',
    title: 'The 800W Balcony Solar Standard: EU Harmonization Explained (2027)',
    seoTitle: 'The 800W Balcony Solar Standard: EU Harmonization Explained (2027)',
    intro: 'Germany\'s 800W balcony solar cap, finalized under DIN VDE V 0126-95 in December 2025, brings the country in line with a de facto EU standard already used by France, Austria, and the Netherlands — rather than setting a new precedent others are following. This page tracks how that convergence is spreading, led by Greece\'s 2026 legislative push and the EU\'s Energy Performance of Buildings Directive.',
    metaDescription: 'France, Austria, and the Netherlands already allow 800W balcony solar with simple notification-only registration. Germany joined that standard in December 2025 — now Greece is following via 2026 legislation, driven by the EPBD\'s extension to facades and balconies.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'EU balcony solar buyers outside Germany tracking 800W standard adoption',
    primaryTerm: 'eu 800w balcony solar standard',
    targetKeywords: ['800w balcony solar eu', 'greece balcony solar 800w', 'eu balcony solar harmonization 2027'],
    leadAnswerBlock: '**Germany\'s 800W balcony solar cap, finalized under DIN VDE V 0126-95 in December 2025, brings the country in line with a de facto EU standard already used by France, Austria, and the Netherlands — rather than setting a new precedent others are following.** Greece is the newest entrant: a RES bill submitted to the Greek Parliament by the Ministry of Environment and Energy (YPEN) on April 21, 2026 opens the door to an 800W, notification-only framework via grid operator DEDDIE\'s digital platform, with a ministerial decision expected to finalize details. The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, is the structural driver — it explicitly extends building-solar mandates to facades, balconies, and terraces, giving member states a directive-level reason to formalize rules on a predictable timeline.',
    quickAnswerTop: {
      en: {
        question: 'Is the 800W balcony solar standard spreading across the EU?',
        answer: 'Yes — but Germany is joining an existing convergence, not leading one. France, Austria, and the Netherlands already permit 800W balcony solar with simple notification-only registration; Germany\'s DIN VDE V 0126-95 (December 2025) brought it in line with that norm. Greece is the newest country moving toward the same 800W, notification-only model, via a RES bill submitted to parliament in April 2026. The EU\'s revised Energy Performance of Buildings Directive (EPBD), which extends building-solar mandates to facades and balconies, is the structural driver behind the wider trend.',
        bullets: [
          'France, Austria, and the Netherlands already allow up to 800W balcony solar with simple grid-operator notification — Germany joined this norm in December 2025, it did not set it',
          'Greece: RES bill submitted to parliament April 21, 2026, opening an 800W, notification-only framework via grid operator DEDDIE\'s digital platform — a ministerial decision on final details was expected May 2026 and should be reconfirmed before publish',
          'The EPBD (entering into force gradually from 2026) is the structural driver — it extends building-solar mandates to facades, balconies, and terraces, not just rooftops',
          'For Germany\'s own 800W mechanics (DIN VDE V 0126-95, the 960 Wp Schuko sub-cap, § 8 EEG 2023), see the dedicated Germany guide rather than this cross-border overview',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'The EPBD Is Driving Convergence', anchor: '#epbd-driver' },
      { label: 'Greece: The Newest Entrant', anchor: '#greece' },
      { label: 'What This Means Outside Germany', anchor: '#what-this-means' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'France, Austria, and the Netherlands already permit balcony solar up to 800W with simple grid-operator notification — Germany\'s DIN VDE V 0126-95 (December 2025) brought it in line with that existing norm, not the other way around.',
          'Greece submitted a RES bill to parliament on April 21, 2026 opening an 800W, notification-only framework via grid operator DEDDIE\'s digital platform; a ministerial decision finalizing details was expected in May 2026 and should be reconfirmed before this page is treated as current.',
          'The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, is the structural driver — it extends building-solar mandates to facades, balconies, and terraces, not just rooftops.',
          'The pattern across these countries: an 800W cap plus notification-only registration, rather than full electrician-installed permitting.',
          'For Germany\'s specific mechanics — the 800W inverter cap, DIN VDE V 0126-95, the 960 Wp Schuko sub-cap, and § 8 EEG 2023 — see the dedicated Germany guide rather than this cross-border overview.',
        ],
      },
      epbdDriver: {
        id: 'epbd-driver',
        title: 'The EPBD Is Driving Convergence',
        content: [
          '**The revised Energy Performance of Buildings Directive (EPBD), entering into force gradually from 2026, explicitly extends solar-installation mandates to facades, balconies, and terraces — not just rooftops.** This reframes balcony solar from a consumer lifestyle choice into a compliance mechanism for member states\' building-decarbonization obligations. Countries that previously treated plug-in solar as a regulatory afterthought now have a directive-level reason to formalize rules quickly, which is the immediate context for Greece\'s 2026 legislative push.',
          'France, Austria, and the Netherlands already permit balcony solar up to 800W with only a simple grid-operator notification requirement, predating Germany\'s own finalization. Germany\'s DIN VDE V 0126-95, finalized in December 2025, brought it in line with that existing de facto standard rather than establishing a new one — the EPBD is now extending the same underlying logic to the rest of the bloc.',
        ],
      },
      greece: {
        id: 'greece',
        title: 'Greece: The Newest Entrant',
        content: [
          '**A new RES bill was submitted to the Greek Parliament by the Ministry of Environment and Energy (YPEN) on April 21, 2026, explicitly opening the door for plug-in solar systems for the first time.** Until now, Greece — despite being one of the sunniest countries in Europe — had no clear legal framework for balcony solar, leaving installations in a grey zone.',
          'The bill points toward an 800W cap with notification-only registration through grid operator DEDDIE\'s new digital platform, with a ministerial decision expected to finalize the detailed framework.',
        ],
        callouts: [
          { type: 'warning', text: 'As of the April 2026 source, the Greek ministerial decision finalizing the 800W framework was "expected in May 2026" but not yet confirmed published — verify current status before citing this as finalized law.' },
        ],
      },
      whatThisMeans: {
        id: 'what-this-means',
        title: 'What This Means Outside Germany',
        content: [
          '**If your country doesn\'t yet have explicit balcony solar rules, the direction of travel is now predictable: expect an 800W cap, simplified notification-based registration rather than full electrician-installed permitting, and a timeline tied to your country\'s EPBD transposition deadline rather than open-ended uncertainty.** Greece is the clearest current example of a country moving from grey-zone to formalized rules under this pattern — additional EU member states are likely to follow the same template as EPBD transposition deadlines approach, though this page currently documents only the confirmed Greek case.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Did Germany set the EU\'s 800W balcony solar standard?', a: 'No — France, Austria, and the Netherlands already permitted balcony solar up to 800W with simple notification-only registration before Germany finalized its own DIN VDE V 0126-95 standard in December 2025. Germany joined an existing de facto EU norm rather than creating a new one.' },
          { q: 'What is Greece doing about balcony solar in 2026?', a: 'Greece\'s Ministry of Environment and Energy (YPEN) submitted a RES bill to parliament on April 21, 2026, opening the door to an 800W, notification-only framework via grid operator DEDDIE\'s digital platform. A ministerial decision finalizing details was expected in May 2026 — confirm current status before treating it as final.' },
          { q: 'What is the EPBD and why does it matter for balcony solar?', a: 'The revised Energy Performance of Buildings Directive (EPBD) enters into force gradually from 2026 and extends EU building-solar mandates to facades, balconies, and terraces, not just rooftops — turning balcony solar into a compliance mechanism for member states rather than a discretionary policy choice.' },
          { q: 'Where can I find Germany\'s specific balcony solar rules?', a: 'See the dedicated Germany guide, which covers the 800W inverter cap, DIN VDE V 0126-95, the 960 Wp Schuko-socket sub-cap, and the § 8 EEG 2023 legal text in full — this page focuses on cross-border harmonization rather than repeating those mechanics.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Balkonkraftwerk: Germany\'s Balcony Solar Rules](/balcony-solar/balkonkraftwerk-germany-rules) — the full German 800W/DIN VDE V 0126-95 deep-dive this article references rather than repeats',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
        ],
      },
    },
  },
}
