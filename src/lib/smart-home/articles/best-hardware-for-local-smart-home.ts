import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Best Hardware for a Local Smart Home + Local AI (2026)',
    seoTitle: 'Best Hardware for Local Smart Home + AI (2026)',
    intro:
      'The best hardware for a local smart home depends on whether you also want to run a local LLM: a Raspberry Pi handles the basics, while a mini PC is the better pick if you want Home Assistant plus local AI on one box. This guide compares Pi, mini PC, NAS, and dedicated server, and helps you choose for HA-only versus HA-plus-AI — linking out for VRAM depth.',
    metaDescription:
      'Best hardware for a local smart home plus local AI in 2026: Raspberry Pi vs mini PC vs NAS vs server. Pick for Home Assistant alone or HA plus a local LLM.',
    twitterDescription:
      'Local smart home hardware: Pi vs mini PC vs NAS vs server. Pick a Pi for basics, a mini PC if you also want to run a local LLM. 2026 guide.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers choosing hardware to run Home Assistant and local AI',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'best hardware home assistant local ai',
      'home assistant hardware',
      'mini pc home assistant local llm',
      'raspberry pi vs mini pc home assistant',
      'local smart home server',
    ],
    leadAnswerBlock:
      '**Run a local smart home on a Raspberry Pi for the basics, or a mini PC if you also want to run a local LLM, larger Whisper models, or Frigate on the same box.** A NAS or dedicated server suits larger setups; the deciding factor is whether you want local AI.',
    quickAnswerTop: {
      en: {
        question: 'What hardware do I need for a local smart home with AI?',
        answer:
          'For Home Assistant alone, a Raspberry Pi is enough. To run a local LLM, larger Whisper models, or Frigate camera detection on the same box, choose a mini PC with adequate RAM and a capable integrated GPU or NPU. A NAS or dedicated server fits larger, multi-service setups.',
        bullets: [
          'Home Assistant alone: Raspberry Pi is enough',
          'HA + local LLM: a mini PC with a capable iGPU/NPU',
          'More RAM and a GPU/NPU lower LLM latency',
          'NAS or server: for larger multi-service setups',
          'Decide first: HA-only or HA + local AI',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What the Hub Needs', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Dedicated Server', anchor: 'server' },
      { label: 'HA-only vs HA + AI', anchor: 'picking' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A Raspberry Pi runs a local smart home hub; a mini PC is better if you also want a local LLM, larger Whisper, or Frigate on the same box.' },
      { type: 'plain-terms', content: 'The hub software (Home Assistant) is light and runs on a small computer like a Raspberry Pi. Adding local AI — a language model, bigger speech recognition, or camera detection — needs more power, which is where a mini PC with more RAM and a capable graphics chip comes in.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant alone runs comfortably on a Raspberry Pi',
          'A mini PC is the better pick if you also want a local LLM, larger Whisper, or Frigate',
          'More RAM and a capable iGPU/NPU lower local-AI latency',
          'A NAS can host Home Assistant in a container alongside storage services',
          'A dedicated server suits larger, multi-service local setups',
          'Decide HA-only vs HA + AI before buying — it changes the right box',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'What the Hub Needs',
        content:
          '**Home Assistant itself is lightweight and runs on modest hardware; the heavy demands come from local AI and camera detection.** Size the box for what you will add, not just the hub.',
        items: [
          'The hub needs little compute for device control and automations.',
          'Local LLM inference, larger Whisper, and Frigate are the demanding workloads.',
          'Plan RAM and a GPU/NPU around those add-ons.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**A Raspberry Pi is the cheapest, lowest-power way to run Home Assistant for typical smart home use.** It struggles with LLM inference and large Whisper models.',
        items: [
          'Great for device control, automations, and a small local voice setup.',
          'LLM inference on a Pi is limited to very small, slow models.',
          'Choose a Pi if you want basics at low cost and power.',
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (and Room for an LLM)',
        content:
          '**A mini PC is the best single-box choice for Home Assistant plus local AI, with enough RAM and a capable iGPU or NPU to run a small LLM.** It balances power, size, and cost.',
        items: [
          'Run Home Assistant, a small LLM via Ollama, Whisper, and Frigate together.',
          'Prioritise RAM and a capable integrated GPU or NPU for lower latency.',
          'For specific picks, see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai) and the cross-cluster [best mini PCs for local LLMs](/local-llms/best-mini-pcs-local-llm).',
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**A NAS can host Home Assistant in a container alongside storage and Frigate recordings, if it has enough CPU and RAM.** It is convenient if you already own one.',
        items: [
          'Good for combining storage with home automation services.',
          'Check the NAS has the CPU/RAM headroom for your add-ons.',
          'LLM inference on a NAS depends on its hardware — many lack a capable GPU.',
        ],
      },
      server: {
        id: 'server',
        title: 'Dedicated Server',
        content:
          '**A dedicated server suits larger setups running multiple services and a larger local model.** It offers the most headroom at higher cost and power.',
        items: [
          'Best for many cameras, a larger LLM, and multiple users.',
          'Higher power draw and cost than a mini PC.',
          'Overkill for a basic smart home — reserve for heavy local-AI use.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Picking for HA-only vs HA + AI',
        content:
          '**Choose a Pi for HA-only, and a mini PC for HA plus local AI — that single decision drives the right hardware.** Match the box to the workload.',
        columns: ['Hardware', 'Relative price', 'HA-only', 'Can run a local LLM', 'Notes'],
        rows: [
          { 'Hardware': 'Raspberry Pi', 'Relative price': 'Low', 'HA-only': 'Yes', 'Can run a local LLM': 'Very small only, slow', 'Notes': 'Lowest power' },
          { 'Hardware': 'Mini PC', 'Relative price': 'Medium', 'HA-only': 'Yes', 'Can run a local LLM': 'Yes (small models)', 'Notes': 'Best single-box for HA + AI' },
          { 'Hardware': 'NAS', 'Relative price': 'Medium–High', 'HA-only': 'Yes (container)', 'Can run a local LLM': 'Depends on hardware', 'Notes': 'Combines storage + HA' },
          { 'Hardware': 'Dedicated server', 'Relative price': 'High', 'HA-only': 'Yes', 'Can run a local LLM': 'Yes (larger models)', 'Notes': 'Most headroom, most power' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Can a Raspberry Pi run a local LLM too?', a: 'A Pi can run only very small models, and slowly, so it is not ideal for a responsive local-LLM assistant. It handles Home Assistant and basic voice well, but for local AI a mini PC with a capable iGPU or NPU is the better choice.' },
          { q: 'How much RAM do I need?', a: 'Home Assistant alone runs in a couple of gigabytes. To run a small local LLM and other AI services on the same box, more RAM helps; a mini PC with ample RAM and a capable iGPU/NPU keeps a small model responsive. Match RAM to the model size you plan to run.' },
          { q: 'What mini PC should I get?', a: 'Choose a mini PC with enough RAM and a capable integrated GPU or NPU for the model size you want. See the best mini PCs for Home Assistant + local AI guide for picks matched to HA plus a small LLM.' },
          { q: 'One box or two?', a: 'One box (a mini PC) is simplest and runs Home Assistant plus a small local LLM together. Split into two if you want to keep the hub ultra-reliable on a Pi and offload heavy AI to a separate, more powerful machine.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — specific picks',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the full stack',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — what the AI box runs',
          '[Best Mini PCs for Local LLMs](/local-llms/best-mini-pcs-local-llm) — cross-cluster: VRAM and hardware depth',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Hardware for a Local Smart Home + Local AI (2026)',
      description: 'Best hardware for a local smart home plus local AI in 2026: Raspberry Pi vs mini PC vs NAS vs server. Pick for Home Assistant alone or HA plus a local LLM.',
      url: 'https://www.promptquorum.com/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant hardware' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Local LLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Can a Raspberry Pi run a local LLM too?', acceptedAnswer: { '@type': 'Answer', text: 'A Pi can run only very small models, and slowly. It handles Home Assistant and basic voice well, but for a responsive local-LLM assistant a mini PC with a capable iGPU or NPU is better.' } },
        { '@type': 'Question', name: 'How much RAM do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant alone runs in a couple of gigabytes. To run a small local LLM on the same box, more RAM helps; match RAM to the model size you plan to run.' } },
        { '@type': 'Question', name: 'What mini PC should I get?', acceptedAnswer: { '@type': 'Answer', text: 'One with enough RAM and a capable integrated GPU or NPU for your model size. See the best mini PCs for Home Assistant + local AI guide for picks.' } },
        { '@type': 'Question', name: 'One box or two?', acceptedAnswer: { '@type': 'Answer', text: 'One mini PC runs Home Assistant plus a small local LLM together. Split into two if you want the hub ultra-reliable on a Pi and heavy AI offloaded to a separate machine.' } },
      ],
    },
  },
}
