import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Run Your Smart Home on a Local LLM (2026 Guide)',
    seoTitle: 'Local LLM Smart Home 2026: The Complete Guide',
    intro:
      'A local LLM can now act as the brain of your smart home — interpreting natural-language commands, running context-aware automations, and powering a private voice assistant, all on hardware you own with no cloud. This guide explains what that means, why it became practical in 2026, the Home Assistant + Ollama + local-voice architecture, what it unlocks beyond rule-based automation, and the step-by-step path to build it.',
    metaDescription:
      'Run your smart home on a local LLM: natural-language control, context-aware automations, and private voice via Home Assistant + Ollama. No cloud. 2026 guide.',
    twitterDescription:
      'Use a local LLM as your smart home brain: natural-language control and context-aware automations via Home Assistant + Ollama. Zero cloud.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users adding local AI control to their smart home',
    primaryTerm: 'local LLM smart home',
    targetKeywords: [
      'local llm smart home',
      'home assistant local llm',
      'ollama smart home',
      'natural language home automation',
      'local ai home assistant',
    ],
    leadAnswerBlock:
      '**You can run your smart home on a local LLM by connecting Ollama to Home Assistant and using the model as the conversation agent and automation brain — natural-language device control, all on your own hardware with no cloud.** It became practical in 2026 because small, capable, function-calling models now run on a mini PC.',
    quickAnswerTop: {
      en: {
        question: 'Can you run a smart home on a local LLM?',
        answer:
          'Yes. Home Assistant integrates with Ollama so a locally hosted model acts as the conversation agent, turning plain-language requests into device actions. The model runs on your own hardware, so control and automations work with no cloud and no data leaving the house. A small model on a mini PC is enough for home control.',
        bullets: [
          'Home Assistant + Ollama = local model as conversation agent',
          'Natural-language control: "dim the kitchen and start the kettle"',
          'Context-aware automations beyond rigid if-this-then-that rules',
          'Runs offline on your hardware — no cloud, no usage logging',
          'A small function-calling model on a mini PC handles home control',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What It Means', anchor: 'what-it-means' },
      { label: 'Why It Works in 2026', anchor: 'why-2026' },
      { label: 'The Architecture', anchor: 'architecture' },
      { label: 'What It Unlocks', anchor: 'what-it-unlocks' },
      { label: 'Hardware Reality', anchor: 'hardware' },
      { label: 'Step-by-Step Path', anchor: 'step-by-step' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Connect Ollama to Home Assistant and a locally hosted model becomes your smart home brain — natural-language control and context-aware automations, with no cloud.' },
      { type: 'plain-terms', content: 'Traditional smart home automations are rigid rules: if motion, then light. A local LLM adds a layer that understands plain language and context — you can say "I am heading out" and it can decide what to turn off. The model runs on your own computer through Ollama and plugs into Home Assistant, so none of it depends on a cloud service.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant has a built-in Ollama integration; a local model becomes the conversation agent',
          'You control devices in natural language instead of memorising exact command phrases',
          'The model can run context-aware automations that rigid rules cannot express',
          'Everything runs on your hardware — no cloud, no usage data leaving the house',
          'A small function-calling model on a mini PC is enough; a GPU or capable iGPU/NPU lowers latency',
          'Build order: Home Assistant first, then Ollama, then wire the conversation agent, then add local voice',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'What Running Your Smart Home on a Local LLM Means',
        content:
          '**It means a locally hosted language model sits between you and your devices, translating plain-language intent into Home Assistant actions and making automation decisions a fixed rule could not.** The LLM plays two roles: conversation agent (you talk, it acts) and automation brain (it reasons over context).',
        items: [
          '**Conversation agent:** You say or type "make the living room cosy" and the model maps that intent to concrete device calls — dim lights, set a warm colour, lower the blinds.',
          '**Automation brain:** Instead of one trigger → one action, the model can weigh context: time of day, who is home, sensor states, and a natural-language goal.',
          '**Local by design:** The model runs through Ollama on your own machine, so neither your commands nor your home state are sent to a third party.',
        ],
      },
      why2026: {
        id: 'why-2026',
        title: "Why It's Possible in 2026",
        content:
          '**Three things converged: small models got capable enough for home control, they gained reliable function-calling, and Home Assistant shipped a first-class LLM integration.** None of these existed together for home users a few years ago.',
        items: [
          '**Capable small models:** Models in the 3B–8B range now follow instructions well enough to map intent to device actions, and they fit on modest hardware. For model mechanics and sizing, see [what local LLMs are](/local-llms/what-are-local-llms) — this guide does not re-explain them.',
          '**Function-calling / tool use:** Home control depends on the model emitting structured calls (turn on, set temperature). Modern local models support this, which is what makes reliable control possible.',
          '**Home Assistant integration:** Home Assistant exposes a conversation-agent interface and an Ollama integration, so wiring a local model to your devices is a configuration step, not a custom build.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'The Architecture: Home Assistant + Ollama + Local Voice',
        content:
          '**The stack is three components on your own hardware: Home Assistant (devices + automations), Ollama (the local model runtime), and a local voice pipeline (Assist + Whisper + Piper).** Data flows in a loop that never leaves your network.',
        numberedItems: [
          { title: 'Home Assistant', whyItMatters: 'Owns your devices, entity states, and automations, and exposes the conversation-agent interface. It is the hub the model acts through — start at [Home Assistant getting started](/smart-home/home-assistant-getting-started).' },
          { title: 'Ollama', whyItMatters: 'Runs the local model and serves it to Home Assistant. For installing and choosing models, link out to [how to install Ollama](/local-llms/how-to-install-ollama); this guide stays focused on the smart-home wiring.' },
          { title: 'Conversation agent', whyItMatters: 'The Home Assistant setting that points Assist at the Ollama model so natural language becomes device actions — the step-by-step is in [connecting Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration).' },
          { title: 'Local voice (optional)', whyItMatters: 'Whisper transcribes speech and Piper speaks responses, so you get a fully offline voice assistant — see [build a fully local voice assistant](/smart-home/local-voice-assistant-smart-home).' },
        ],
      },
      whatItUnlocks: {
        id: 'what-it-unlocks',
        title: 'What It Unlocks vs Rule-Based Automation',
        content:
          '**A local LLM adds flexibility, natural language, and context that rule-based automation cannot express — at the cost of more setup and hardware.** Use rules for deterministic triggers; use the LLM where intent and context matter.',
        columns: ['Aspect', 'Rule-based automation', 'Local-LLM automation'],
        rows: [
          { 'Aspect': 'Flexibility', 'Rule-based automation': 'Fixed trigger → fixed action', 'Local-LLM automation': 'Interprets goals and adapts to context' },
          { 'Aspect': 'Natural language', 'Rule-based automation': 'None — you wire exact conditions', 'Local-LLM automation': 'Plain-language commands and intents' },
          { 'Aspect': 'Context-awareness', 'Rule-based automation': 'Only the states you script', 'Local-LLM automation': 'Reasons over time, presence, sensors' },
          { 'Aspect': 'Setup', 'Rule-based automation': 'Simple per rule', 'Local-LLM automation': 'Higher — hub + model + wiring' },
          { 'Aspect': 'Hardware need', 'Rule-based automation': 'Minimal (a Pi)', 'Local-LLM automation': 'A mini PC; GPU/NPU helps latency' },
        ],
        items: [
          'For concrete automation examples and the prompts behind them, see [smarter automations with a local LLM](/smart-home/ai-automations-local-llm).',
          'Keep deterministic safety automations (smoke alarm, door locks) as plain rules — do not route them through the model.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'The Hardware Reality',
        content:
          '**You can run Home Assistant and a small local model on a single mini PC; a GPU, capable iGPU, or NPU lowers response latency.** This guide does not re-explain VRAM or model quantization — link out for that depth.',
        items: [
          '**One box is enough:** A mini PC can host Home Assistant plus a small model via Ollama. For picks, see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai).',
          '**Latency scales with hardware:** Larger models and CPU-only inference respond more slowly; a GPU or modern iGPU/NPU shortens the gap to a snappy assistant. For VRAM and model-sizing depth, see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          '**Pick the model for the job:** Home control rewards small, fast, function-calling models over the largest available — see [best local LLM models for smart home control](/smart-home/best-local-llm-models-smart-home).',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: 'Your Step-by-Step Path',
        content:
          '**Build in order: Home Assistant, then Ollama, then the conversation agent, then voice and automations.** Each step is covered in a focused how-to so this flagship stays a map, not a wall of commands.',
        numberedItems: [
          'Set up Home Assistant on a mini PC — [getting-started guide](/smart-home/home-assistant-getting-started).',
          'Install Ollama and pull a small model — [how to install Ollama](/local-llms/how-to-install-ollama).',
          'Connect Ollama to Home Assistant and set it as the conversation agent — [integration how-to](/smart-home/home-assistant-ollama-integration).',
          'Choose a model tuned for home control — [best local LLM models for smart home](/smart-home/best-local-llm-models-smart-home).',
          'Add a fully local voice front-end — [local voice assistant](/smart-home/local-voice-assistant-smart-home).',
          'Design context-aware automations — [AI automations with a local LLM](/smart-home/ai-automations-local-llm).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Which local model is best for home control?', a: 'A small instruction-following model with reliable function-calling — typically in the 3B to 8B range — is the best fit, because home control needs fast, structured responses rather than the largest model. The right pick depends on your hardware; see the best local LLM models for smart home guide for current options.' },
          { q: 'Do I need a GPU to run a local LLM smart home?', a: 'No, but it helps. A small model runs on a modern CPU or capable integrated GPU; a discrete GPU or NPU mainly lowers response latency so the assistant feels snappier. Match the model size to your hardware rather than buying the biggest GPU.' },
          { q: 'Does a local LLM smart home work offline?', a: 'Yes. The model runs locally through Ollama and Home Assistant controls devices over your LAN, so natural-language control and automations work with no internet. Only remote access from outside the home needs connectivity.' },
          { q: 'Is a local LLM faster than Alexa?', a: 'It depends on hardware and model size. Cloud assistants like Alexa are tuned for low latency, while a local LLM trades some speed for privacy and offline operation; on a GPU-equipped mini PC the gap narrows. The decisive advantage is privacy and control, not raw speed.' },
          { q: 'Can a local LLM smart home run on a Raspberry Pi?', a: 'A Raspberry Pi runs Home Assistant well, but LLM inference on a Pi is limited to very small models and is slow. For a responsive local-LLM assistant, a mini PC with a capable iGPU/NPU or a discrete GPU is the better choice.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — the step-by-step integration',
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — Assist + Whisper + Piper',
          '[Smarter Automations with a Local LLM](/smart-home/ai-automations-local-llm) — context-aware rules and prompts',
          '[Best Local LLM Models for Smart Home Control](/smart-home/best-local-llm-models-smart-home) — model selection',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the local-first pillar',
          '[Autonomous Local Agents That Actually Work](/power-local-llm/autonomous-local-agents-actually-work) — cross-cluster: local AI agents and workflows',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Run Your Smart Home on a Local LLM (2026 Guide)',
      description: 'Run your smart home on a local LLM: natural-language control, context-aware automations, and private voice via Home Assistant + Ollama. No cloud.',
      url: 'https://www.promptquorum.com/smart-home/local-llm-smart-home-complete-guide',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Local LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Home automation' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Which local model is best for home control?', acceptedAnswer: { '@type': 'Answer', text: 'A small instruction-following model with reliable function-calling, typically 3B to 8B, is the best fit because home control needs fast structured responses rather than the largest model.' } },
        { '@type': 'Question', name: 'Do I need a GPU to run a local LLM smart home?', acceptedAnswer: { '@type': 'Answer', text: 'No, but it helps. A small model runs on a modern CPU or capable integrated GPU; a discrete GPU or NPU mainly lowers response latency.' } },
        { '@type': 'Question', name: 'Does a local LLM smart home work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The model runs locally through Ollama and Home Assistant controls devices over your LAN, so control and automations work with no internet.' } },
        { '@type': 'Question', name: 'Is a local LLM faster than Alexa?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on hardware and model size. Cloud assistants are tuned for low latency; a local LLM trades some speed for privacy and offline operation, and the gap narrows on a GPU-equipped mini PC.' } },
        { '@type': 'Question', name: 'Can a local LLM smart home run on a Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'A Pi runs Home Assistant well, but LLM inference on a Pi is limited to very small, slow models. A mini PC with a capable iGPU/NPU or discrete GPU is better for a responsive assistant.' } },
      ],
    },
  },
}
