import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Best Mini PCs for Home Assistant + Local AI (2026)',
    seoTitle: 'Best Mini PC for Home Assistant + AI (2026)',
    intro:
      'The best mini PCs for running Home Assistant plus a local LLM on one box prioritise RAM and a capable integrated GPU or NPU. This buyer\'s guide explains what you need for HA plus AI on a single machine, compares the main mini PC classes, weighs budget against performance, and covers setup notes — cross-linking to the local-llms hardware guide for VRAM depth.',
    metaDescription:
      'Best mini PCs for Home Assistant plus a local LLM in 2026: prioritise RAM and a capable iGPU/NPU. Classes compared, budget vs performance, and setup notes.',
    twitterDescription:
      'Best mini PCs to run Home Assistant + a local LLM on one box: prioritise RAM and a capable iGPU/NPU. Classes compared, picks by budget.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers choosing a mini PC for Home Assistant and local AI',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'best mini pc home assistant local ai',
      'mini pc home assistant llm',
      'home assistant local ai hardware',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**The best mini PC for Home Assistant plus a local LLM has ample RAM and a capable integrated GPU or NPU, so it runs the hub and a small model on one box.** Prioritise RAM and the graphics/NPU over raw CPU clock for AI latency.',
    quickAnswerTop: {
      en: {
        question: 'What mini PC is best for Home Assistant and local AI?',
        answer:
          'Choose a mini PC with enough RAM (more is better for running a model alongside Home Assistant) and a capable integrated GPU or NPU to keep a small LLM responsive. A low-power Intel N-series box runs Home Assistant and a tiny model; an AMD Ryzen or Core i-series mini PC with a strong iGPU handles a 7B model better.',
        bullets: [
          'Prioritise RAM and a capable iGPU/NPU over CPU clock',
          'Low-power N-series: HA + a very small model',
          'Ryzen / Core i-series with strong iGPU: HA + a 7B model',
          'One box runs HA, Ollama, Whisper, and Frigate together',
          'See the local-llms hardware guide for VRAM depth',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What You Need for HA + LLM', anchor: 'what-you-need' },
      { label: 'The Mini PC Classes', anchor: 'classes' },
      { label: 'Comparison', anchor: 'comparison' },
      { label: 'Budget vs Performance', anchor: 'budget-performance' },
      { label: 'Setup Notes', anchor: 'setup-notes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The best mini PC for Home Assistant plus a local LLM has ample RAM and a capable iGPU or NPU to run the hub and a small model on one box.' },
      { type: 'plain-terms', content: 'A mini PC is a small, low-power computer that can run your whole smart home plus a local AI model. The two things that matter most are RAM (enough to hold the model and the hub) and a capable graphics chip or NPU (to keep the AI responsive). CPU clock speed matters less.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Prioritise RAM and a capable integrated GPU or NPU over raw CPU clock',
          'A low-power Intel N-series mini PC runs Home Assistant and a very small model',
          'An AMD Ryzen or Intel Core i-series mini PC with a strong iGPU handles a 7B model',
          'One mini PC can run Home Assistant, Ollama, Whisper, and Frigate together',
          'More RAM lets you run a larger model alongside the hub',
          'See the cross-cluster local-llms hardware guide for VRAM specifics',
        ],
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'What You Need for HA + LLM on One Box',
        content:
          '**You need enough RAM to hold the model plus Home Assistant, and a capable iGPU or NPU to keep the model responsive.** CPU clock is secondary for this workload.',
        items: [
          'RAM: enough headroom for the model size you want plus the hub and add-ons.',
          'Graphics/NPU: a capable integrated GPU or NPU lowers LLM and Whisper latency.',
          'Storage: room for recordings if you also run Frigate — see [local AI security cameras](/smart-home/local-ai-security-camera).',
        ],
      },
      classes: {
        id: 'classes',
        title: 'The Mini PC Classes',
        content:
          '**Three classes cover most needs: low-power N-series for light AI, Ryzen/Core i-series with a strong iGPU for a 7B model, and NPU-equipped mini PCs for efficient on-device AI.** Pick by the model size you want.',
        items: [
          '**Low-power Intel N-series:** efficient and cheap; runs Home Assistant and a very small model, slower on AI.',
          '**AMD Ryzen / Intel Core i-series with strong iGPU:** more RAM and graphics headroom for a 7B model at usable latency.',
          '**NPU-equipped mini PCs:** newer machines with a neural processing unit accelerate on-device AI efficiently.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparison',
        content:
          '**Match the class to your target model: N-series for a tiny model, Ryzen/Core i with a strong iGPU for a 7B model.** Prices are relative.',
        columns: ['Mini PC class', 'CPU', 'RAM guidance', 'Runs a local LLM', 'Relative price'],
        rows: [
          { 'Mini PC class': 'Low-power N-series', 'CPU': 'Intel N-series', 'RAM guidance': 'Moderate', 'Runs a local LLM': 'Very small models, slower', 'Relative price': 'Low' },
          { 'Mini PC class': 'Ryzen / Core i (strong iGPU)', 'CPU': 'AMD Ryzen / Intel Core i', 'RAM guidance': 'Ample', 'Runs a local LLM': 'Up to ~7B at usable latency', 'Relative price': 'Medium' },
          { 'Mini PC class': 'NPU-equipped', 'CPU': 'Modern CPU + NPU', 'RAM guidance': 'Ample', 'Runs a local LLM': 'Efficient small/medium models', 'Relative price': 'Medium–High' },
        ],
        items: [
          'For VRAM and quantization depth, see the cross-cluster [best mini PCs for local LLMs](/local-llms/best-mini-pcs-local-llm).',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Budget vs Performance',
        content:
          '**Buy the cheapest box that runs your target model at acceptable latency — usually a Ryzen/Core i mini PC with a strong iGPU for a 7B model.** Do not overspend on CPU you will not use.',
        items: [
          'Budget: a low-power N-series box for HA plus a tiny model.',
          'Balanced: a Ryzen/Core i mini PC with a strong iGPU for a 7B model.',
          'For the broader hardware decision (Pi vs mini PC vs NAS), see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Setup Notes',
        content:
          '**Run Home Assistant OS or a container, install Ollama, and confirm the iGPU/NPU is used for inference.** Keep the box wired to your network for reliability.',
        items: [
          'Install Home Assistant — see [getting started](/smart-home/home-assistant-getting-started).',
          'Install Ollama and pull a small model — see [how to install Ollama](/local-llms/how-to-install-ollama).',
          'Wire Ollama into Home Assistant — see [the Ollama integration guide](/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Can one mini PC do both Home Assistant and a local LLM?', a: 'Yes. A mini PC with enough RAM and a capable integrated GPU or NPU runs Home Assistant and a small local LLM together, and can add Whisper and Frigate. This single-box approach is the simplest way to get a local-AI smart home.' },
          { q: 'How much RAM do I need?', a: 'Enough to hold your target model plus Home Assistant and any add-ons. A small model needs only modest RAM, while running a 7B model comfortably alongside the hub benefits from ample RAM. Match RAM to the largest model you plan to run.' },
          { q: 'Intel or AMD for a Home Assistant mini PC?', a: 'Both work. A low-power Intel N-series box is cheapest for light use; an AMD Ryzen or Intel Core i mini PC with a strong integrated GPU handles a 7B model better. Choose based on the model size and latency you want.' },
          { q: 'What is the cheapest mini PC that runs a local LLM?', a: 'A low-power Intel N-series mini PC is the cheapest that can run Home Assistant plus a very small model, though responses are slower. For a snappier 7B-class assistant, step up to a Ryzen or Core i mini PC with a strong iGPU.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS vs server',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — what the box runs',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — wire the model in',
          '[Best Mini PCs for Local LLMs](/local-llms/best-mini-pcs-local-llm) — cross-cluster: VRAM and hardware depth',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Mini PCs for Home Assistant + Local AI (2026)',
      description: 'Best mini PCs for Home Assistant plus a local LLM in 2026: prioritise RAM and a capable iGPU/NPU. Classes compared, budget vs performance, and setup notes.',
      url: 'https://www.promptquorum.com/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Local LLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Can one mini PC do both Home Assistant and a local LLM?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A mini PC with enough RAM and a capable iGPU or NPU runs Home Assistant and a small local LLM together, and can add Whisper and Frigate.' } },
        { '@type': 'Question', name: 'How much RAM do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Enough to hold your target model plus Home Assistant and add-ons. A small model needs modest RAM; running a 7B model comfortably benefits from ample RAM.' } },
        { '@type': 'Question', name: 'Intel or AMD for a Home Assistant mini PC?', acceptedAnswer: { '@type': 'Answer', text: 'Both work. A low-power Intel N-series box is cheapest for light use; an AMD Ryzen or Intel Core i mini PC with a strong iGPU handles a 7B model better.' } },
        { '@type': 'Question', name: 'What is the cheapest mini PC that runs a local LLM?', acceptedAnswer: { '@type': 'Answer', text: 'A low-power Intel N-series mini PC can run Home Assistant plus a very small model, though slower. For a snappier 7B assistant, step up to a Ryzen or Core i box with a strong iGPU.' } },
      ],
    },
  },
}
