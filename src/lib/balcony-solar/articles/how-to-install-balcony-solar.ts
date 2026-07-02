// Slug: how-to-install-balcony-solar
// BSOL-07 — Tier 2 how-to, evergreen, ★ SPOT-CHECK (electrical safety = liability page).
// Country-specific plug-type/price detail intentionally lives in BSOL-08, not here.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Balcony Solar Foundations',
    title: 'How to Install Balcony Solar: A Safety-First Step-by-Step Guide',
    seoTitle: 'How to Install Balcony Solar Safely: Step-by-Step',
    intro: 'Balcony solar is designed for self-installation, but "plug-in" doesn\'t mean "no risk." This guide covers the mounting and electrical steps in order, with the safety warnings placed where they matter — before you start, not buried at the end.',
    metaDescription: 'How to install balcony solar step by step, with the electrical safety warnings and what-not-to-do guidance placed before you start, not as an afterthought.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    audience: 'First-time balcony solar buyers preparing to self-install their system',
    primaryTerm: 'how to install balcony solar',
    targetKeywords: ['how to install balcony solar', 'balcony solar installation steps', 'is balcony solar safe to install', 'balcony solar electrical safety'],
    leadAnswerBlock: '**Installing balcony solar means mounting the panel securely, connecting it to the micro-inverter, and plugging the inverter into a dedicated wall outlet — but confirm legality and any registration requirement in your area before you buy, and never plug the system into an outlet shared with other high-draw devices or an extension cord/power strip.** The mounting is the easy part; the electrical connection is where mistakes carry real safety consequences.',
    quickAnswerTop: {
      en: {
        question: 'Is it safe to install balcony solar yourself?',
        answer: 'Yes, in markets that permit self-installation, provided you follow basic electrical safety practice: plug the micro-inverter directly into a dedicated wall outlet (never a shared power strip or extension cord), mount the panel securely against wind load, and confirm your local legality and registration requirements before buying. The main risks are electrical (improper outlet use) and structural (poor mounting in windy conditions), not the panel or inverter technology itself.',
        bullets: [
          'Confirm legality and any registration requirement for your area before buying, not after',
          'Plug the micro-inverter into a dedicated wall outlet only — never a shared power strip or extension cord',
          'Mount the panel to withstand wind load for your location, not just its own weight',
          'Never open, modify, or attempt to repair the micro-inverter yourself',
          'If anything about the outlet, wiring, or mounting surface seems abnormal, stop and consult a licensed electrician',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Before You Start', anchor: '#before-you-start' },
      { label: 'What You Need', anchor: '#what-you-need' },
      { label: 'Step-by-Step Installation', anchor: '#step-by-step' },
      { label: 'Electrical Safety & What NOT to Do', anchor: '#electrical-safety' },
      { label: 'Plug Types, Simplified', anchor: '#plug-types' },
      { label: 'Troubleshooting', anchor: '#troubleshooting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Confirm legality and registration requirements for your specific area before buying — not after you\'ve already mounted a panel.',
          'The micro-inverter must plug into a dedicated wall outlet — never a shared power strip, extension cord, or an outlet already loaded with other high-draw devices.',
          'Mounting must withstand wind load for your specific location, not just support the panel\'s static weight.',
          'Never open, modify, or attempt to repair the micro-inverter yourself — treat it as a sealed, non-serviceable unit.',
          'If anything about your outlet, wiring, or mounting surface seems abnormal, stop and consult a licensed electrician before proceeding.',
          'Country-specific plug types and per-country hardware costs are covered separately — see the registration and legal guides linked below.',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: 'Before You Start',
        content: [
          '**Confirm two things before you buy anything: whether balcony solar is legal where you live, and whether any registration is required.** Both vary significantly by country and, in the US, by state — check the [legal status guide](/balcony-solar/is-balcony-solar-legal-country-guide) and the [registration how-to](/balcony-solar/how-to-register-balcony-solar) first, since installing before confirming either can mean undoing work later or running afoul of local rules.',
        ],
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'What You Need',
        content: [
          '**Beyond the panel-and-micro-inverter kit itself, you\'ll need a mounting bracket rated for your surface (railing, wall, or ground stand), a dedicated wall outlet within cable reach, and basic hand tools for the mounting hardware.** Most kits include the mounting bracket and cabling; check your specific kit\'s contents before assuming anything is included.',
        ],
        items: [
          'Balcony solar kit (panel + micro-inverter)',
          'Mounting bracket appropriate for your surface (usually included)',
          'A dedicated wall outlet within cable reach — not shared with other devices',
          'Basic hand tools (the specific set depends on your mounting hardware)',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: 'Step-by-Step Installation',
        content: [
          '**The process runs in four stages: mount the panel, connect the cabling, plug in the micro-inverter, and confirm the system is producing power.** Follow your specific kit\'s manual for exact torque specs and cable routing — this sequence covers the general order, not manufacturer-specific detail.',
        ],
        numberedItems: [
          { title: 'Mount the panel securely', whyItMatters: 'A poorly secured panel is a wind-load safety hazard, not just a performance issue — check your bracket\'s rated wind load against typical conditions at your location.' },
          { title: 'Connect the panel to the micro-inverter', whyItMatters: 'Use only the cabling and connectors that came with your kit — mismatched connectors can create a poor electrical connection or a safety risk.' },
          { title: 'Plug the micro-inverter into a dedicated wall outlet', whyItMatters: 'Never use a shared power strip, extension cord, or an outlet already loaded with other high-draw devices — see the electrical safety section below for why this matters.' },
          { title: 'Confirm the system is producing power', whyItMatters: 'Check your inverter\'s status light or app/dashboard to confirm it\'s generating and feeding power correctly before considering the installation complete.' },
        ],
      },
      electricalSafety: {
        id: 'electrical-safety',
        title: 'Electrical Safety & What NOT to Do',
        content: [
          '**The single most important safety rule: plug the micro-inverter into its own dedicated wall outlet, never into a shared power strip, extension cord, or an outlet already carrying other high-draw devices.** This isn\'t a minor best practice — it\'s the difference between a system operating within its designed electrical parameters and one that isn\'t.',
        ],
        items: [
          'Do NOT plug the micro-inverter into a power strip or extension cord',
          'Do NOT share the outlet with other high-draw appliances',
          'Do NOT open, modify, or attempt to repair the micro-inverter — it is a sealed unit',
          'Do NOT install on a mounting surface or outlet that shows signs of damage or wear without professional inspection first',
          'DO stop and consult a licensed electrician if anything about your wiring, outlet, or mounting surface seems abnormal',
        ],
        callouts: [
          { type: 'warning', text: 'These warnings apply regardless of how simple the installation process looks in marketing material. Balcony solar is designed for self-installation, but the electrical connection carries real consequences if done incorrectly.' },
        ],
      },
      plugTypes: {
        id: 'plug-types',
        title: 'Plug Types, Simplified',
        content: [
          '**Plug types vary by country — Schuko in much of continental Europe, NEMA in the US, and other standards elsewhere — and your kit needs to match your local standard.** For the specific plug type, per-country pricing, and hardware cost context for your market, see the [registration guide](/balcony-solar/how-to-register-balcony-solar), which covers this country-by-country detail directly rather than duplicating it here.',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        content: [
          '**If your system isn\'t producing power after installation, the fault is almost always one of three things: a loose connection, insufficient sunlight reaching the panel, or an outlet issue — not a defective unit.** See the [dedicated troubleshooting guide](/balcony-solar/balcony-solar-not-producing-power-fixes) for a full diagnostic walkthrough.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need an electrician to install balcony solar?', a: 'In most markets that permit self-installation, no — but always confirm your specific local requirements first, since some jurisdictions require professional installation above certain power thresholds.' },
          { q: 'Can I plug balcony solar into a power strip?', a: 'No. The micro-inverter must connect to a dedicated wall outlet — never a shared power strip, extension cord, or an outlet already loaded with other high-draw devices.' },
          { q: 'What tools do I need to install balcony solar?', a: 'Basic hand tools for your specific mounting hardware — the exact set depends on your bracket type (railing, wall, or ground stand) and is usually specified in your kit\'s manual.' },
          { q: 'How long does installation take?', a: 'Most self-installations take well under an hour for the mounting and electrical connection, though this varies by mounting surface complexity and your familiarity with basic tools.' },
          { q: 'What should I do if the panel isn\'t producing power after installation?', a: 'Check the connection between panel and inverter, confirm the panel has adequate sunlight exposure, and verify the outlet itself is working. See the dedicated troubleshooting guide for a complete walkthrough.' },
          { q: 'Is it safe to install balcony solar on a windy balcony?', a: 'Only if your mounting hardware is rated for the wind conditions at your location — check the manufacturer\'s wind load rating and consider that a hard requirement, not a suggestion, before mounting in an exposed location.' },
          { q: 'Can I repair or open the micro-inverter myself if something seems wrong?', a: 'No — treat it as a sealed, non-serviceable unit. Opening or modifying it yourself is a safety risk and will likely void any warranty.' },
          { q: 'What plug type does my balcony solar kit need?', a: 'This depends on your country\'s electrical standard — Schuko in much of continental Europe, NEMA in the US, and other standards elsewhere. See the registration guide for country-specific detail.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'How to Install Balcony Solar: A Safety-First Step-by-Step Guide',
      description: 'How to install balcony solar step by step, with the electrical safety warnings and what-not-to-do guidance placed before you start, not as an afterthought.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/how-to-install-balcony-solar',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'First-time balcony solar buyers preparing to self-install their system' },
      about: ['Balcony solar installation', 'Electrical safety', 'Solar mounting'],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Install Balcony Solar',
      step: [
        { '@type': 'HowToStep', name: 'Mount the panel securely', text: 'Secure the panel to a bracket rated for the wind load at your location.' },
        { '@type': 'HowToStep', name: 'Connect the panel to the micro-inverter', text: 'Use only the cabling and connectors included with your kit.' },
        { '@type': 'HowToStep', name: 'Plug the micro-inverter into a dedicated wall outlet', text: 'Never use a shared power strip, extension cord, or already-loaded outlet.' },
        { '@type': 'HowToStep', name: 'Confirm the system is producing power', text: 'Check the inverter status light or app/dashboard before considering installation complete.' },
      ],
    },
  },
};
