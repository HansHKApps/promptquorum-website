// Slug: balcony-solar-not-producing-power-fixes
// BSOL-20 — Tier 4, troubleshooting, evergreen. Support traffic, sticky.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Balcony Solar Foundations',
    title: 'Balcony Solar Not Producing Power? Common Fixes',
    seoTitle: 'Balcony Solar Not Working? Troubleshooting Guide',
    intro: 'A balcony solar system that suddenly stops producing power is almost never a defective unit — the fault is nearly always one of a small number of common, fixable issues. Here\'s how to diagnose it in order, starting with the most likely cause.',
    metaDescription: 'Balcony solar not producing power? A step-by-step diagnostic guide covering the most common causes, in the order you should actually check them.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar owners troubleshooting a system that has stopped producing power',
    primaryTerm: 'balcony solar not producing power',
    targetKeywords: ['balcony solar not producing power', 'balcony solar not working', 'balcony solar troubleshooting', 'solar panel no output fix'],
    leadAnswerBlock: '**A balcony solar system that stops producing power is almost always caused by a loose connection, insufficient sunlight reaching the panel, an outlet or inverter status issue, or a firmware/app problem — not a defective unit.** Work through these causes in order of likelihood before assuming you need a replacement or repair.',
    quickAnswerTop: {
      en: {
        question: 'Why is my balcony solar system not producing power?',
        answer: 'Check these in order: first, confirm the panel-to-inverter connection is secure and undamaged. Second, check whether shading, weather, or time of day explains low or zero output — this is the most common cause and often mistaken for a fault. Third, check the inverter\'s status light or app for an error state. Fourth, confirm the outlet itself is working and hasn\'t tripped a breaker. A genuinely defective unit is the least likely explanation.',
        bullets: [
          'Check the panel-to-inverter connection first — loose or damaged cabling is a common, easily fixed cause',
          'Confirm the panel actually has adequate sunlight — shading, weather, and season all affect output significantly',
          'Check your inverter\'s status light or app/dashboard for an error code before assuming hardware failure',
          'Confirm the outlet is working and hasn\'t tripped a breaker — an outlet issue looks identical to a system fault from the panel\'s perspective',
          'A firmware glitch or app-side monitoring issue can make a working system appear to be producing zero power when it isn\'t',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Check the Connection First', anchor: '#check-connection' },
      { label: 'Rule Out Sunlight and Shading', anchor: '#sunlight-shading' },
      { label: 'Check Your Inverter\'s Status', anchor: '#inverter-status' },
      { label: 'Check the Outlet Itself', anchor: '#outlet-check' },
      { label: 'When It\'s a Monitoring Problem, Not a Power Problem', anchor: '#monitoring-vs-power' },
      { label: 'When to Contact Support', anchor: '#contact-support' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Work through causes in order of likelihood: connection issues, sunlight/shading, inverter status, outlet problems — a defective unit is the least likely explanation.',
          'Loose or damaged panel-to-inverter cabling is a common, easily fixed cause of zero output.',
          'Shading, weather, season, and time of day all significantly affect output and are frequently mistaken for a fault.',
          'An outlet issue (tripped breaker, dead outlet) looks identical to a system fault from the panel\'s perspective — always check this specifically.',
          'A monitoring or app-side glitch can make a genuinely working system appear to be producing zero power — don\'t assume the hardware is at fault based on the app alone.',
          'If you\'ve worked through all common causes and the system still isn\'t producing power, contact the manufacturer\'s support before attempting any repair yourself.',
        ],
      },
      checkConnection: {
        id: 'check-connection',
        title: 'Check the Connection First',
        content: [
          '**Confirm the cabling between your panel and micro-inverter is fully seated and undamaged — this is the single most common cause of a system that produces zero power despite otherwise looking fine.** A connector that\'s worked loose from vibration, weather exposure, or an initial imperfect installation is a simple, safe fix in most cases.',
        ],
      },
      sunlightShading: {
        id: 'sunlight-shading',
        title: 'Rule Out Sunlight and Shading',
        content: [
          '**Low or zero output is frequently just a sunlight problem, not a fault — check the time of day, season, weather, and whether anything (a new tree branch, a parked vehicle, a nearby structure) is newly shading the panel.** This is especially easy to mistake for a hardware issue if the shading pattern changed gradually and you didn\'t notice the cause.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Low balcony solar output is often just insufficient sunlight, not a hardware fault — check shading and weather before assuming something is broken.' },
        ],
      },
      inverterStatus: {
        id: 'inverter-status',
        title: 'Check Your Inverter\'s Status',
        content: [
          '**Most micro-inverters have a status light or an app/dashboard that reports error states — check this before assuming a silent failure.** If you\'ve set up local monitoring through Home Assistant, check there directly rather than relying solely on the vendor\'s app, since [local monitoring can be more reliable during a vendor cloud outage](/balcony-solar/home-assistant-balcony-solar-no-cloud).',
        ],
      },
      outletCheck: {
        id: 'outlet-check',
        title: 'Check the Outlet Itself',
        content: [
          '**Confirm the outlet your micro-inverter is plugged into is actually working and hasn\'t tripped a breaker — from the panel\'s perspective, a dead outlet looks identical to an inverter fault.** Test the outlet with another device if you\'re unsure, rather than assuming the solar hardware is the problem.',
        ],
      },
      monitoringVsPower: {
        id: 'monitoring-vs-power',
        title: 'When It\'s a Monitoring Problem, Not a Power Problem',
        content: [
          '**Sometimes the panel is producing power correctly but your monitoring app or dashboard shows zero — this is a reporting failure, not an actual power problem, and it happens most often with cloud-dependent monitoring during a vendor outage.** If your production seems to have stopped exactly when you noticed an app or website issue, suspect monitoring before suspecting the hardware itself.',
        ],
        callouts: [
          { type: 'tip', text: 'If you can physically observe your panel\'s indicator light showing normal operation while the app shows an error or zero output, the issue is very likely monitoring-side, not the actual power system.' },
        ],
      },
      contactSupport: {
        id: 'contact-support',
        title: 'When to Contact Support',
        content: [
          '**If you\'ve confirmed the connection, ruled out shading and weather, checked the inverter status, and verified the outlet works — and the system still isn\'t producing power — contact the manufacturer\'s support rather than attempting to open or repair the unit yourself.** Never open a micro-inverter; treat it as a sealed, non-serviceable unit per the [installation safety guide](/balcony-solar/how-to-install-balcony-solar).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'My balcony solar panel suddenly stopped producing power — what\'s the most likely cause?', a: 'A loose or damaged connection between the panel and micro-inverter, or a sunlight/shading change, are the two most common causes — check these before assuming a hardware defect.' },
          { q: 'Is a dead outlet a common cause of balcony solar issues?', a: 'Yes — from the panel\'s perspective, a dead outlet or tripped breaker looks identical to an inverter fault. Always test the outlet directly with another device.' },
          { q: 'My app shows zero production but the panel looks fine — what\'s wrong?', a: 'This is likely a monitoring-side issue, not an actual power problem — cloud-dependent apps can show incorrect data during a vendor outage even though the hardware is working normally.' },
          { q: 'Can weather affect my balcony solar output significantly?', a: 'Yes — cloud cover, season, and time of day all meaningfully affect output, and low output during poor weather is normal, not a fault.' },
          { q: 'Should I open my micro-inverter to check for a problem myself?', a: 'No — treat it as a sealed, non-serviceable unit. Opening or modifying it yourself is a safety risk and will likely void your warranty.' },
          { q: 'How do I know if the issue is shading rather than a hardware fault?', a: 'Check whether anything new (a tree branch, a parked vehicle, a nearby structure) is casting shade on the panel, and observe whether output correlates with sun angle throughout the day rather than being consistently zero regardless of conditions.' },
          { q: 'Does local monitoring help with troubleshooting?', a: 'It can — if you\'ve set up local monitoring through Home Assistant, it can remain accessible during a vendor cloud outage, helping you distinguish a monitoring problem from an actual power problem.' },
          { q: 'When should I contact the manufacturer instead of troubleshooting further?', a: 'After you\'ve checked the connection, ruled out shading/weather, confirmed the inverter status, and verified the outlet works — if the system still isn\'t producing power at that point, contact support rather than attempting a repair yourself.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Balcony Solar Not Producing Power? Common Fixes',
      description: 'Balcony solar not producing power? A step-by-step diagnostic guide covering the most common causes, in the order you should actually check them.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/balcony-solar-not-producing-power-fixes',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Balcony solar owners troubleshooting a system that has stopped producing power' },
      about: ['Balcony solar troubleshooting', 'Micro-inverter diagnostics', 'Solar panel output issues'],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Troubleshoot Balcony Solar Not Producing Power',
      step: [
        { '@type': 'HowToStep', name: 'Check the panel-to-inverter connection', text: 'Confirm cabling is fully seated and undamaged.' },
        { '@type': 'HowToStep', name: 'Rule out sunlight and shading', text: 'Check time of day, season, weather, and any new shading sources.' },
        { '@type': 'HowToStep', name: 'Check the inverter status', text: 'Look for a status light or app/dashboard error code.' },
        { '@type': 'HowToStep', name: 'Check the outlet', text: 'Test whether the outlet is working and hasn\'t tripped a breaker.' },
        { '@type': 'HowToStep', name: 'Contact support if unresolved', text: 'Never open the micro-inverter yourself — contact the manufacturer.' },
      ],
    },
  },
};
