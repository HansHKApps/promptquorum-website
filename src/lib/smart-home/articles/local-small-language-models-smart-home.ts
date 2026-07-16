import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: 'Small Language Models for Smart Home Control (2027)',
    seoTitle: 'Small Language Models for Smart Home (2027)',
    intro:
      'Small language models — roughly 1B to 4B parameters — are the practical choice for smart home voice and automation control, not because they are less capable in general but because they run fast enough on modest local hardware and specialize well at the narrow task of turning a spoken command into a device action. This article explains why smart home control favors small over large models, the architecture trade-offs involved, and how this differs from a model-picks shortlist already on this site.',
    metaDescription:
      'Why smart home voice and automation control favors small language models over large general-purpose LLMs — latency, on-device feasibility, and function-calling trade-offs.',
    twitterDescription:
      'Small language models for smart home control: why 1-4B parameter models beat large LLMs for latency and on-device feasibility.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners and Home Assistant users evaluating which model size to run for local voice/automation control',
    primaryTerm: 'small language models smart home',
    targetKeywords: [
      'small language models smart home',
      'slm home assistant control',
      'small llm voice assistant local',
      'function calling model smart home',
      'local model size home automation',
    ],
    leadAnswerBlock:
      '**Smart home voice and automation control favors small language models (roughly 1B–4B parameters) over large general-purpose LLMs because the task is narrow — parse a command, call the right function — and small models handle it with far lower latency on modest local hardware.** A larger model isn\'t wasted, it\'s simply unnecessary overhead for this specific job.',
    quickAnswerTop: {
      en: {
        question: 'Why do smart homes use small language models instead of large ones?',
        answer:
          'Smart home control is a narrow task — interpreting a spoken or typed command and mapping it to a specific device action — which small, fast, function-calling models handle well without needing the broad general knowledge a large model carries. Running a small model locally means lower latency (the light turns on faster) and lower hardware requirements (a mini PC\'s integrated GPU is enough, rather than needing a discrete GPU). For open-ended questions or complex reasoning, a smart home setup can still route to a larger model — the small model handles the common, latency-sensitive case.',
        bullets: [
          'Task is narrow: parse command → call device function, not open-ended reasoning',
          'Small models (roughly 1B-4B parameters) run with much lower latency on modest hardware',
          'A capable integrated GPU/NPU is enough — no discrete GPU required for this specific task',
          'Larger models remain useful for open-ended questions, routed to separately if needed',
          'See the model-picks shortlist for specific current model recommendations',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why Small Beats Large Here', anchor: 'why-small' },
      { label: 'Function Calling Is the Key Capability', anchor: 'function-calling' },
      { label: 'Where Small Models Fall Short', anchor: 'limits' },
      { label: 'How This Differs From the Model-Picks Guide', anchor: 'differs' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Small language models (roughly 1B–4B parameters) handle smart home command parsing and function calling with lower latency than large general-purpose LLMs, which matters more for this narrow task than broad knowledge does.' },
      { type: 'plain-terms', content: 'A big AI model is like a generalist who knows a lot about everything but takes longer to answer. A small model is like a specialist trained for one job — turning "turn off the lights" into the actual command your smart home understands. For that one job, the specialist is faster and needs less powerful hardware, even though the generalist would win at answering a broad trivia question.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Smart home control is a narrow task (parse command → call function), which small models handle well',
          'Small models (roughly 1B–4B parameters) run with lower latency on modest local hardware — a capable iGPU/NPU is enough',
          'Function-calling accuracy matters more than general knowledge breadth for this specific job',
          'Larger models remain useful for open-ended questions — a setup can route to one separately if needed',
          'For specific current model recommendations, see the best local LLM models for smart home control shortlist',
        ],
      },
      whySmall: {
        id: 'why-small',
        title: 'Why Small Beats Large Here',
        content:
          '**Latency is the deciding factor for voice control — a smart home command needs to execute in close to real time, and a small model on local hardware responds faster than a large model would on the same hardware.**',
        items: [
          'A large model needs substantially more compute per token generated, which translates directly into slower responses on the same local hardware — noticeable as lag between speaking a command and the light actually turning on.',
          'Smart home commands are typically short and structured ("turn off the bedroom lights," "set the thermostat to 68"), which doesn\'t require the broader reasoning or knowledge base a large model provides.',
          'Running a small model locally also means lower hardware requirements — see the best hardware for a local smart home guide for what a small-model-capable box looks like versus what a larger-model box would need.',
        ],
      },
      functionCalling: {
        id: 'function-calling',
        title: 'Function Calling Is the Key Capability',
        content:
          '**The capability that actually matters for smart home control is reliable function calling — turning natural language into a correctly-structured call to a specific Home Assistant service, not general conversational ability.**',
        items: [
          'A model fine-tuned or specifically capable at function calling can map "make the living room warmer" to the correct climate-control service call reliably, which is a narrower and more measurable skill than open-ended chat quality.',
          'This is also where hallucination risk shows up specifically for smart homes — see the reducing LLM hallucinations in home automation guide for how to constrain a model to the actual available entities.',
          'Evaluate a candidate model on function-calling accuracy for your specific entity list, not on general benchmark scores, when choosing between small models.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'Where Small Models Fall Short',
        content:
          '**Small models are the right choice for structured command parsing, not for open-ended questions, complex multi-step reasoning, or tasks requiring broad world knowledge.**',
        items: [
          'If you want your smart home assistant to also answer general questions well, a hybrid setup that routes command-like input to a small model and open-ended questions to a larger model (local or otherwise) is a common pattern.',
          'Small models are more prone to misinterpreting ambiguous phrasing than larger models — clear, consistent command phrasing and well-scoped entity names reduce this risk more than upgrading model size does.',
          'For automations beyond simple command parsing — reasoning across multiple sensors, deciding whether an unusual pattern warrants a notification — a larger model may genuinely be worth the added latency, depending on how time-sensitive the automation is.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'How This Differs From the Model-Picks Guide',
        content:
          '**This article explains why small models are the right architecture choice for smart home control; the model-picks shortlist recommends specific current models to run.**',
        items: [
          'Read this article first if you want to understand the reasoning behind the small-model recommendation.',
          'Go to the best local LLM models for smart home control guide for specific, currently-recommended models and their hardware requirements.',
          'For mobile-device-specific small language model options (a different hardware context), see the cross-cluster guide on mobile LLM models.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is a small language model less accurate than a large one for smart home control?', a: 'Not necessarily for this specific task — function-calling accuracy for structured commands depends more on how well a model is suited to that narrow task than on overall parameter count. A large general-purpose model isn\'t automatically better at parsing "turn off the lights" than a small model tuned for it.' },
          { q: 'What size counts as a "small" language model here?', a: 'Roughly 1B to 4B parameters is the practical range discussed in this article — small enough to run responsively on a mini PC\'s integrated GPU or NPU, without needing a discrete GPU.' },
          { q: 'Can I run a small model on a Raspberry Pi?', a: 'Very small models can run on a Pi, though slowly — see the best hardware for a local smart home guide for the trade-offs between a Pi and a mini PC for this workload.' },
          { q: 'Do I need a different model for open-ended questions vs. commands?', a: 'Many setups route the two differently — a small model handles command parsing quickly, while open-ended questions can go to a larger local or cloud model if you want broader conversational ability. This is an architecture choice, not a requirement.' },
          { q: 'How does this relate to reducing hallucinations in home automation?', a: 'A smaller, well-scoped model that only needs to map commands to a known entity list is inherently less prone to inventing devices or misreading state than a general-purpose model asked to reason more broadly — see the hallucination-reduction guide for the specific techniques.' },
          { q: 'Which specific small models should I use?', a: 'See the best local LLM models for smart home control guide for current, specific recommendations — this article covers the reasoning behind the size choice, not a model list.' },
          { q: 'Does a small model need less RAM?', a: 'Yes — smaller parameter counts translate directly into lower memory requirements, which is part of why they run well on a mini PC\'s integrated hardware rather than requiring a discrete GPU.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLM Models for Smart Home Control](/smart-home/best-local-llm-models-smart-home) — specific current model picks',
          '[Reducing LLM Hallucinations in Home Automation](/smart-home/reducing-llm-hallucinations-home-automation) — constraining models to avoid errors',
          '[Run Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the full local-LLM stack',
          '[Mobile LLM Models: Phi, Gemma, SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — cross-cluster: small language models on mobile hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Small Language Models for Smart Home Control (2027)',
      description: 'Why smart home voice and automation control favors small language models over large general-purpose LLMs.',
      url: 'https://www.promptquorum.com/smart-home/local-small-language-models-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Small language models' }, { '@type': 'Thing', name: 'Function calling' }, { '@type': 'Thing', name: 'Home automation AI' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is a small language model less accurate than a large one for smart home control?', acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily — function-calling accuracy for structured commands depends more on task-fit than overall parameter count.' } },
        { '@type': 'Question', name: 'What size counts as a "small" language model here?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 1B to 4B parameters — small enough to run responsively on a mini PC\'s integrated GPU or NPU.' } },
        { '@type': 'Question', name: 'Which specific small models should I use?', acceptedAnswer: { '@type': 'Answer', text: 'See the best local LLM models for smart home control guide for current, specific recommendations.' } },
        { '@type': 'Question', name: 'Does a small model need less RAM?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — smaller parameter counts translate directly into lower memory requirements.' } },
      ],
    },
  },
}
