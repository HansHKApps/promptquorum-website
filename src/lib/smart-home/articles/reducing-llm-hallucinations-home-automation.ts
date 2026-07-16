import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: 'Reducing LLM Hallucinations in Home Automation (2027)',
    seoTitle: 'Reducing LLM Hallucinations in Home Automation (2027)',
    intro:
      'An LLM hallucination in home automation looks different from a hallucinated fact in a chatbot: it means triggering the wrong device, misreading a sensor\'s actual state, or referencing an entity that doesn\'t exist in your Home Assistant setup. This article covers the smart-home-specific failure modes and the grounding techniques — function-calling schemas and entity-list constraints — that reduce them, building on general hallucination-reduction advice already covered elsewhere on this site.',
    metaDescription:
      "Reducing LLM hallucinations in home automation: why an AI triggers the wrong device or invents entities, and the grounding techniques that fix it.",
    twitterDescription:
      'Why a local LLM sometimes triggers the wrong smart home device — and the entity-constraint techniques that fix it.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users running LLM-driven automations who want fewer misfires',
    primaryTerm: 'llm hallucination home automation',
    targetKeywords: [
      'llm hallucination home automation',
      'ai automation wrong device triggered',
      'home assistant llm entity errors',
      'reduce ai automation mistakes',
      'function calling grounding home assistant',
    ],
    leadAnswerBlock:
      '**In home automation, an LLM hallucination usually means triggering the wrong device, misreading a sensor\'s actual state, or referencing an entity that doesn\'t exist — a different failure mode from a chatbot inventing a fact, and one that\'s reduced by constraining the model to your actual, current entity list rather than letting it reason freely about device names.** Function-calling schemas that only expose real entities are the main fix.',
    quickAnswerTop: {
      en: {
        question: 'Why does my smart home AI sometimes trigger the wrong device?',
        answer:
          'This usually happens when the model is reasoning about device names or states from its general training rather than your actual current entity list — for example, guessing "living room light" exists when your entity is actually named "lounge lamp." The fix is grounding: constrain the model\'s function-calling schema to only the entities that actually exist in your Home Assistant instance, and pass in current entity state directly rather than letting the model infer or remember it. This is a smart-home-specific narrowing of general hallucination-reduction technique, applied to the function-calling layer specifically.',
        bullets: [
          'Root cause: model guesses at device names/states instead of using your actual current entity list',
          'Fix: constrain function-calling schema to only real, current entities — not free-form device names',
          'Pass current sensor/device state into the prompt directly rather than letting the model assume or remember it',
          'Different from general chatbot hallucination — see the general guide for that broader topic',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Hallucination Looks Like in Home Automation', anchor: 'what-it-looks-like' },
      { label: 'Grounding: Constrain to Real Entities', anchor: 'grounding' },
      { label: 'Passing Current State, Not Assumed State', anchor: 'current-state' },
      { label: 'Testing and Catching Errors', anchor: 'testing' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'LLM hallucination in home automation means triggering the wrong device or inventing a nonexistent entity, fixed mainly by constraining the model\'s function-calling schema to your actual current entity list.' },
      { type: 'plain-terms', content: 'A general AI hallucination is making up a wrong fact. In a smart home, the equivalent mistake is the AI turning on the wrong light or thinking a door is locked when it isn\'t, usually because it guessed at a device name instead of checking what actually exists. The main fix is only ever letting the AI choose from a list of your real, current devices, instead of letting it invent or assume one.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home automation hallucination = wrong device triggered, misread state, or a nonexistent entity referenced — not a made-up general fact',
          'Main fix: constrain the model\'s function-calling schema to only your actual, current entity list',
          'Pass current sensor/device state into the prompt directly, rather than letting the model assume or recall it from earlier in a conversation',
          'Small, well-scoped models (see the small language models guide) are inherently less prone to this than general-purpose models given a broad, unconstrained toolset',
          'Test automations against edge cases (renamed entities, offline devices) before trusting them unsupervised',
        ],
      },
      whatItLooksLike: {
        id: 'what-it-looks-like',
        title: 'What Hallucination Looks Like in Home Automation',
        content:
          '**The three common failure modes are: triggering a similarly-named but wrong device, acting on an assumed rather than actual sensor state, and referencing an entity that doesn\'t exist in your setup at all.**',
        items: [
          'Wrong-device triggering: asking to turn off "the lamp" when you have several lamps, and the model picks one based on a guess rather than clarifying or using context correctly.',
          'Assumed state: an automation acting as if a window is closed because that\'s the common case, rather than checking the actual current sensor reading.',
          'Nonexistent entity: the model references a device name that sounds plausible (because it\'s common in training data) but was never actually set up in your Home Assistant instance.',
        ],
      },
      grounding: {
        id: 'grounding',
        title: 'Grounding: Constrain to Real Entities',
        content:
          '**The primary fix is a function-calling schema that only ever exposes your actual, current entity list to the model — it can only call functions for devices that genuinely exist, eliminating the "invented entity" failure mode structurally.**',
        items: [
          'Generate the function-calling schema (or entity list passed to the model) dynamically from Home Assistant\'s actual current entity registry, rather than a hand-written or stale list that can drift out of sync as you add/remove devices.',
          'If your setup has ambiguous entity names (multiple "light" entities), rename them to be more distinct rather than relying on the model to disambiguate correctly — this is a configuration fix, not a prompting fix, and is more reliable.',
          'The home-assistant-ollama-integration guide covers the practical setup of connecting Ollama to Home Assistant\'s conversation agent, which handles much of this schema generation automatically.',
        ],
      },
      currentState: {
        id: 'current-state',
        title: 'Passing Current State, Not Assumed State',
        content:
          '**Automations that depend on sensor state should query the actual current reading at execution time, not rely on the model\'s memory of an earlier conversation turn or an assumption about typical state.**',
        items: [
          'For any automation where "is the window open" or "is the light already on" matters to the decision, fetch that state directly as part of the automation logic, rather than trusting the model to have tracked it correctly across a conversation.',
          'This is a general principle from reducing prompt brittleness (see the cross-cluster guide on that topic), applied specifically to sensor-backed smart home state.',
          'Combining multiple sensor readings (sensor fusion) before acting can also reduce single-sensor misreads feeding into a decision — see the sensor fusion in the smart home guide.',
        ],
      },
      testing: {
        id: 'testing',
        title: 'Testing and Catching Errors',
        content:
          '**Test automations against edge cases — a renamed entity, a temporarily offline device, an ambiguous command — before trusting them to run unsupervised, the same way you\'d test any automation logic.**',
        items: [
          'Deliberately test a command that references a recently renamed or removed entity to confirm the automation fails safely (asks for clarification or does nothing) rather than guessing at a similarly-named device.',
          'Log automation-triggered actions during an initial trial period so you can review what the model actually did versus what you intended, catching silent misfires before they become routine.',
          'Start new LLM-driven automations on low-stakes devices (lighting) before extending the pattern to higher-stakes ones (locks, security systems) where a wrong action has more consequence.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'How is this different from general AI hallucination advice?', a: 'General hallucination-reduction advice (see the AI hallucinations guide) covers made-up facts in open-ended text generation. This article is specific to the function-calling failure modes that occur when an LLM maps a command to a device action.' },
          { q: 'Does a smaller model hallucinate more or less in this context?', a: 'A well-scoped small model constrained to a specific function-calling schema is often less prone to this than a general-purpose model given a broad, unconstrained toolset — see the small language models guide for why.' },
          { q: 'Can I completely eliminate wrong-device triggers?', a: 'Not completely, but constraining the function-calling schema to your real current entity list, using distinct entity names, and testing edge cases significantly reduces the failure rate — treat it as risk reduction, not a guarantee.' },
          { q: 'Should I let an LLM control locks and security systems?', a: 'Start with lower-stakes devices (lighting) to build confidence in your specific setup\'s reliability before extending LLM control to higher-consequence devices like locks — this is a risk-management choice, not a technical requirement.' },
          { q: 'Does Home Assistant\'s Ollama integration handle entity grounding automatically?', a: 'It generates the available-entity list dynamically from your current setup for the conversation agent, which handles much of the grounding described here — see the Home Assistant + Ollama integration guide for the setup details.' },
          { q: 'What should an automation do if it can\'t confidently identify the right entity?', a: 'Fail safely — ask for clarification or take no action — rather than guessing at a similarly-named entity. This is a design choice in how you structure the automation\'s function-calling logic.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smarter Home Automations with a Local LLM](/smart-home/ai-automations-local-llm) — the broader automation pattern this refines',
          '[Connect Ollama to Home Assistant: Local AI Assistant](/smart-home/home-assistant-ollama-integration) — the integration that generates the entity schema',
          '[Small Language Models for Smart Home Control](/smart-home/local-small-language-models-smart-home) — why scoped models help here',
          '[Sensor Fusion in the Smart Home](/smart-home/sensor-fusion-smart-home-2027) — reducing single-sensor state errors',
          '[Reduce AI Hallucinations: A Practical Guide](/prompt-engineering/ai-hallucinations-how-to-stop) — cross-cluster: general hallucination-reduction techniques',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Reducing LLM Hallucinations in Home Automation (2027)',
      description: 'Reducing LLM hallucinations in home automation: why an AI triggers the wrong device or invents entities, and the grounding techniques that fix it.',
      url: 'https://www.promptquorum.com/smart-home/reducing-llm-hallucinations-home-automation',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'LLM hallucination' }, { '@type': 'Thing', name: 'Function calling' }, { '@type': 'Thing', name: 'Home automation reliability' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'How is this different from general AI hallucination advice?', acceptedAnswer: { '@type': 'Answer', text: 'General advice covers made-up facts in open-ended text. This article is specific to function-calling failures when an LLM maps a command to a device action.' } },
        { '@type': 'Question', name: 'Can I completely eliminate wrong-device triggers?', acceptedAnswer: { '@type': 'Answer', text: 'Not completely, but constraining the function-calling schema to your real entity list and testing edge cases significantly reduces the failure rate.' } },
        { '@type': 'Question', name: 'Should I let an LLM control locks and security systems?', acceptedAnswer: { '@type': 'Answer', text: 'Start with lower-stakes devices like lighting before extending LLM control to higher-consequence devices.' } },
        { '@type': 'Question', name: 'What should an automation do if it can\'t confidently identify the right entity?', acceptedAnswer: { '@type': 'Answer', text: 'Fail safely — ask for clarification or take no action — rather than guessing at a similarly-named entity.' } },
      ],
    },
  },
}
