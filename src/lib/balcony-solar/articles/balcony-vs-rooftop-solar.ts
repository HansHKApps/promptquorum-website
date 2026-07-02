// Slug: balcony-vs-rooftop-solar
// BSOL-06 — Tier 2 decision page, evergreen. Captures rooftop searchers, routes correctly.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Balcony Solar Foundations',
    title: 'Balcony Solar vs. Rooftop Solar: Which Should You Choose?',
    seoTitle: 'Balcony Solar vs. Rooftop Solar: Key Differences Explained',
    intro: 'Balcony solar and rooftop solar solve different problems — one is a small, self-installed, low-commitment system; the other is a large, professionally installed, long-term investment. Choosing between them starts with what you actually own and control, not which produces more power.',
    metaDescription: 'Balcony solar vs. rooftop solar compared on installation, ownership, scale, and who each option actually suits — a decision framework, not a spec-sheet showdown.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    audience: 'Anyone deciding between balcony solar and a full rooftop solar installation',
    primaryTerm: 'balcony solar vs rooftop solar',
    targetKeywords: ['balcony solar vs rooftop solar', 'plug in solar vs rooftop', 'is balcony solar worth it vs rooftop', 'small solar system vs full installation'],
    leadAnswerBlock: '**Balcony solar suits renters, condo owners, and anyone without roof access or long-term tenure at a property; rooftop solar suits homeowners with roof access who plan to stay long enough to recoup a larger upfront investment.** The two aren\'t really competing for the same buyer — the deciding factor is what you\'re legally and practically able to install, not which technology performs better in the abstract.',
    quickAnswerTop: {
      en: {
        question: 'Should I get balcony solar or rooftop solar?',
        answer: 'Choose balcony solar if you rent, live in a condo without roof access, or want to test solar with minimal commitment and no professional installation. Choose rooftop solar if you own your home, have usable roof space, and plan to stay long enough to recoup a larger upfront investment through utility bill savings.',
        bullets: [
          'Balcony solar: self-installed, owned outright, portable, small scale',
          'Rooftop solar: professionally installed, often financed, large scale, tied to the property',
          'Balcony solar is the only realistic option for most renters and many condo owners',
          'Rooftop solar generally produces far more total power, better suited to offsetting a whole home\'s usage',
          'The two can combine: rooftop for base capacity, balcony as a supplement on a separate structure',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Answer', anchor: '#quick-answer' },
      { label: 'Cost Comparison', anchor: '#cost-comparison' },
      { label: 'Who Should Pick Which?', anchor: '#who-should-pick' },
      { label: 'A Second Selection Criterion: Cloud vs. Local Monitoring', anchor: '#cloud-dependency' },
      { label: 'A Note on Rooftop Solar Sales Calls', anchor: '#rooftop-lead-gen' },
      { label: 'When Should You Combine Both?', anchor: '#when-to-combine' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Balcony solar and rooftop solar serve different buyers, not the same buyer choosing on price or performance alone.',
          'Balcony solar is self-installed, owned outright from day one, and portable — you take it when you move.',
          'Rooftop solar is professionally installed, often financed over years, and tied to the property.',
          'Rooftop solar produces far more total power and is the better fit for offsetting a whole home\'s electricity use.',
          'Most rooftop solar sales interactions start with a quote request that becomes a recurring sales-lead relationship — go in aware of that dynamic.',
          'The two aren\'t mutually exclusive: a homeowner can install rooftop for base capacity and add balcony panels on a separate wall or structure the rooftop system doesn\'t cover.',
        ],
      },
      quickAnswer: {
        id: 'quick-answer',
        title: 'Quick Answer',
        content: [
          '**If you don\'t own your roof — or own it but don\'t want a multi-year commitment — balcony solar is the realistic option; rooftop solar is for homeowners planning to stay long enough to recoup a larger investment.** The decision is less about which produces more power (rooftop wins that comparison easily) and more about what you\'re actually able and willing to commit to.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Cost Comparison',
        content: [
          '**Balcony solar costs a small fraction of rooftop solar upfront, because it covers far less generating capacity and needs no professional installation, permits, or structural work.** Rooftop solar costs substantially more upfront but is sized to meaningfully offset — sometimes fully offset — a home\'s total electricity use, which balcony solar was never designed to do.',
          'For current pricing specific to your market, see the [balcony solar kit buyer\'s guide](/balcony-solar/best-balcony-solar-kits-2026) and the [payback estimator](/balcony-solar/balcony-solar-payback-worth-it-2026) — this page intentionally avoids citing specific dollar figures since rooftop quotes vary enormously by installer, region, and system size, and would date quickly.',
        ],
      },
      whoShouldPick: {
        id: 'who-should-pick',
        title: 'Who Should Pick Which?',
        content: [
          '**Balcony solar fits renters, condo and apartment owners without roof access, and anyone wanting to try solar with minimal commitment.** Rooftop solar fits homeowners with usable roof space and enough remaining tenure at the property to recoup the investment through utility savings.',
        ],
        rows: [
          { profile: 'Renter', recommendation: 'Balcony solar — the only realistic option in most cases' },
          { profile: 'Condo/apartment owner without roof access', recommendation: 'Balcony solar' },
          { profile: 'Homeowner planning to move within a few years', recommendation: 'Balcony solar, or a cautious approach to rooftop given the payback timeline' },
          { profile: 'Homeowner with usable roof space and long tenure plans', recommendation: 'Rooftop solar, potentially supplemented by balcony panels' },
          { profile: 'Anyone testing whether solar suits their usage pattern before a bigger commitment', recommendation: 'Balcony solar as a low-risk starting point' },
        ],
        columns: ['profile', 'recommendation'],
        tableFormat: true,
      },
      cloudDependency: {
        id: 'cloud-dependency',
        title: 'A Second Selection Criterion: Cloud vs. Local Monitoring',
        content: [
          '**Whichever scale you choose, monitoring is a separate decision worth making deliberately — rooftop installers commonly lock you into their own cloud platform, while balcony solar\'s DIY nature gives you more freedom to pick hardware that keeps monitoring local instead.** If avoiding a permanent cloud dependency matters to you as much as system scale does, that\'s a point in balcony solar\'s favor even for buyers who could otherwise afford rooftop — see [running balcony solar without the cloud](/balcony-solar/home-assistant-balcony-solar-no-cloud) for what to look for.',
        ],
      },
      rooftopLeadGen: {
        id: 'rooftop-lead-gen',
        title: 'A Note on Rooftop Solar Sales Calls',
        content: [
          '**Requesting a rooftop solar quote typically starts an ongoing sales relationship, not a one-time price check** — many installers and lead-generation sites share your contact information with multiple companies, generating follow-up calls for months. This isn\'t true of balcony solar, which you can research and buy directly without triggering a sales pipeline.',
        ],
        callouts: [
          { type: 'tip', text: 'If you\'re only exploring rooftop solar out of curiosity, be selective about which sites you submit contact information to — some are direct installers, others are lead-generation aggregators that sell your details to several companies at once.' },
        ],
      },
      whenToCombine: {
        id: 'when-to-combine',
        title: 'When Should You Combine Both?',
        content: [
          '**Combining both makes sense when a homeowner has installed rooftop solar sized to typical usage but has additional wall, railing, or ground space that a balcony system could use to add incremental capacity without expanding the rooftop installation.** This is a supplemental strategy, not a replacement for sizing your rooftop system correctly in the first place.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is balcony solar cheaper than rooftop solar?', a: 'Yes, substantially — balcony solar costs a small fraction of rooftop solar upfront, though it also produces far less power. The two aren\'t directly comparable on a cost-per-watt basis alone since they serve different scales of need.' },
          { q: 'Can renters get rooftop solar?', a: 'Rarely, since rooftop solar requires ownership of the roof and typically a long-term commitment to the property, which most rental arrangements don\'t provide. Balcony solar is the realistic option for most renters.' },
          { q: 'Does rooftop solar always produce more power than balcony solar?', a: 'Yes — rooftop systems are sized with many more panels covering significantly more area, so they produce substantially more total power than a balcony system\'s one or two panels.' },
          { q: 'Will balcony solar reduce my electricity bill as much as rooftop solar?', a: 'No. Balcony solar offsets a portion of baseline usage; rooftop solar is sized to offset a much larger share, sometimes all, of a home\'s electricity consumption.' },
          { q: 'Can I install both balcony and rooftop solar?', a: 'Yes — homeowners with rooftop solar can add balcony panels on separate wall or railing space to add incremental capacity, though this is a supplemental strategy rather than a substitute for proper rooftop sizing.' },
          { q: 'Do I need a professional installer for balcony solar like I do for rooftop?', a: 'In most markets that permit balcony solar, no — it\'s designed for self-installation. Rooftop solar virtually always requires a licensed installer due to its scale, electrical complexity, and structural considerations.' },
          { q: 'Is balcony solar a stepping stone to rooftop solar?', a: 'For some buyers, yes — it lets you test whether solar suits your usage pattern and home orientation before committing to a much larger rooftop investment.' },
          { q: 'Which has a better return on investment?', a: 'This depends heavily on your specific electricity rates, usage pattern, and how long you\'ll own the property — there\'s no universal answer. See the payback estimator for a country-specific calculation rather than relying on a generic comparison.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Balcony Solar vs. Rooftop Solar: Which Should You Choose?',
      description: 'Balcony solar vs. rooftop solar compared on installation, ownership, scale, and who each option actually suits — a decision framework, not a spec-sheet showdown.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/balcony-vs-rooftop-solar',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Anyone deciding between balcony solar and a full rooftop solar installation' },
      about: ['Balcony solar', 'Rooftop solar', 'Solar decision guide'],
    },
  },
};
