import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Local Speech-to-Text for Smart Homes: Whisper + HA (2026)',
    seoTitle: 'Whisper + Home Assistant 2026: Local STT Guide',
    intro:
      'Local Whisper gives Home Assistant private speech-to-text with no cloud: you pick a Whisper model size for your accuracy, speed, and hardware trade-off, then connect it to Assist over the Wyoming protocol. This guide covers why local STT matters, the Whisper model sizes, Wyoming setup, hardware needs, and how to tune accuracy.',
    metaDescription:
      'Add local speech-to-text to Home Assistant with Whisper: model sizes, hardware needs, accuracy vs speed, and Wyoming setup. Private, offline transcription.',
    twitterDescription:
      'Private speech-to-text for Home Assistant with local Whisper: pick a model size, connect over Wyoming, tune accuracy. No cloud.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users configuring local speech-to-text',
    primaryTerm: 'local Whisper Home Assistant',
    targetKeywords: [
      'whisper home assistant local stt',
      'home assistant speech to text',
      'local stt home assistant',
      'faster-whisper home assistant',
      'whisper model size home assistant',
    ],
    leadAnswerBlock:
      '**Local Whisper gives Home Assistant private speech-to-text: install the Whisper add-on, pick a model size that fits your hardware, and connect it to Assist over the Wyoming protocol.** Smaller models are faster; larger models are more accurate. Nothing is sent to a cloud service.',
    quickAnswerTop: {
      en: {
        question: 'How do I add local speech-to-text to Home Assistant?',
        answer:
          'Install the Whisper (faster-whisper) add-on in Home Assistant, choose a model size, and it registers as a Wyoming speech-to-text service. Select it in your Assist pipeline. Transcription then runs entirely on your hardware, so no audio leaves the house.',
        bullets: [
          'Install the Whisper add-on (faster-whisper)',
          'Pick a model size: tiny/base/small/medium/large',
          'It connects to Assist via the Wyoming protocol',
          'Smaller = faster on CPU; larger = more accurate',
          'Multilingual transcription with no cloud',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why Local STT', anchor: 'why-local-stt' },
      { label: 'Whisper Model Sizes', anchor: 'model-sizes' },
      { label: 'Wyoming Setup', anchor: 'wyoming-setup' },
      { label: 'Hardware Needs', anchor: 'hardware' },
      { label: 'Tuning Accuracy', anchor: 'tuning' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Install the Whisper add-on in Home Assistant, pick a model size for your hardware, and connect it to Assist over Wyoming for private speech-to-text.' },
      { type: 'plain-terms', content: 'Speech-to-text turns your spoken words into text the assistant can act on. Whisper is an open speech-recognition model that runs locally, so unlike cloud assistants, your voice recordings never leave your hardware. The main choice is model size: bigger is more accurate but needs more compute.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Whisper is an open speech-to-text model that runs locally — no audio leaves your hardware',
          'Use the Whisper (faster-whisper) add-on; it connects to Assist over Wyoming',
          'Model sizes range tiny → base → small → medium → large; bigger is more accurate, slower',
          'On CPU-only hardware, prefer tiny/base/small; a GPU makes medium/large practical',
          'Whisper is multilingual, so non-English commands transcribe without a cloud service',
          'Tune accuracy with a better microphone and the right model before going larger',
        ],
      },
      whyLocalStt: {
        id: 'why-local-stt',
        title: 'Why Use Local Speech-to-Text?',
        content:
          '**Local speech-to-text keeps your voice recordings on your own hardware, so no audio is uploaded to a third party.** It also works offline and has no per-request cost.',
        items: [
          '**Privacy:** cloud assistants transmit and may retain recordings; local Whisper does not — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
          '**Offline:** transcription works during internet outages.',
          '**No fees:** there is no usage charge for local transcription.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Which Whisper Model Size Should You Use?',
        content:
          '**Pick the smallest Whisper model that gives acceptable accuracy on your hardware — tiny/base/small for CPU-only, medium/large when you have a GPU.** Larger models improve accuracy on accents and noisy audio at the cost of speed.',
        columns: ['Model', 'Relative accuracy', 'Relative speed', 'Best for'],
        rows: [
          { 'Model': 'tiny', 'Relative accuracy': 'Lowest', 'Relative speed': 'Fastest', 'Best for': 'Low-power CPU, short commands' },
          { 'Model': 'base', 'Relative accuracy': 'Low', 'Relative speed': 'Very fast', 'Best for': 'Raspberry Pi, simple phrases' },
          { 'Model': 'small', 'Relative accuracy': 'Good', 'Relative speed': 'Fast', 'Best for': 'Mini PC CPU, everyday use' },
          { 'Model': 'medium', 'Relative accuracy': 'High', 'Relative speed': 'Moderate', 'Best for': 'GPU or strong CPU' },
          { 'Model': 'large', 'Relative accuracy': 'Highest', 'Relative speed': 'Slowest', 'Best for': 'GPU, accents/noisy rooms' },
        ],
        items: [
          'Use small as the default on a mini PC CPU; move to medium/large only if accuracy is lacking.',
          'Use tiny/base on a Raspberry Pi to keep latency usable.',
        ],
      },
      wyomingSetup: {
        id: 'wyoming-setup',
        title: 'Wyoming Setup',
        content:
          '**The Whisper add-on exposes a Wyoming endpoint that Assist uses for speech-to-text.** Setup is install → pick model → select in pipeline.',
        numberedItems: [
          'Install the Whisper (faster-whisper) add-on from the add-on store.',
          'Set the model size in the add-on configuration and start it.',
          'The add-on registers as a Wyoming speech-to-text service automatically.',
          'In Settings → Voice assistants, set Whisper as the STT engine for your Assist pipeline.',
          'Test transcription from the Assist debug tools before adding voice hardware.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Needs',
        content:
          '**Whisper runs on CPU for small models and benefits from a GPU for medium/large models.** Match model size to the box that hosts it.',
        items: [
          'Raspberry Pi: stick to tiny/base for acceptable latency.',
          'Mini PC (CPU): small works well; medium is possible but slower — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          'With a GPU/NPU: medium and large become practical for high accuracy.',
          'You can run Whisper on a separate, more powerful machine via Wyoming if your hub is a Pi.',
        ],
      },
      tuning: {
        id: 'tuning',
        title: 'Tuning Accuracy',
        content:
          '**Improve a good microphone and the right model before reaching for the largest Whisper.** Audio quality often matters more than model size for home commands.',
        items: [
          'Use a quality microphone or voice-satellite hardware close to the speaker.',
          'Reduce background noise where the microphone sits.',
          'Set the correct language in the add-on to avoid mis-transcription.',
          'Step up one model size at a time and re-test rather than jumping to large.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Which Whisper model should I use for Home Assistant?', a: 'Use small as the default on a mini PC CPU, tiny or base on a Raspberry Pi, and medium or large only if you have a GPU and need higher accuracy on accents or noisy rooms. Step up one size at a time and re-test.' },
          { q: 'Do I need a GPU for local Whisper?', a: 'No for small and below — those run on CPU. A GPU mainly makes medium and large models fast enough for real-time use. You can also offload Whisper to a more powerful machine over the Wyoming protocol.' },
          { q: 'How accurate is local Whisper offline?', a: 'Accuracy is strong with the right model and a good microphone; larger models handle accents and noise better. For clear home commands, the small model on a mini PC is usually accurate enough, and it runs fully offline.' },
          { q: 'Is local Whisper multilingual?', a: 'Yes. Whisper supports many languages, so non-English commands transcribe locally without any cloud service. Set the language in the add-on configuration for best results.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — the full voice stack Whisper fits into',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — add the LLM brain',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — sizing the box that runs Whisper',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: model and hardware depth',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Speech-to-Text for Smart Homes: Whisper + HA (2026)',
      description: 'Add local speech-to-text to Home Assistant with Whisper: model sizes, hardware needs, accuracy vs speed, and Wyoming setup. Private, offline transcription.',
      url: 'https://www.promptquorum.com/smart-home/local-whisper-home-assistant',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Speech-to-text' }, { '@type': 'Thing', name: 'Home Assistant' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Which Whisper model should I use for Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Use small as the default on a mini PC CPU, tiny or base on a Raspberry Pi, and medium or large only with a GPU when you need higher accuracy on accents or noise.' } },
        { '@type': 'Question', name: 'Do I need a GPU for local Whisper?', acceptedAnswer: { '@type': 'Answer', text: 'No for small and below — those run on CPU. A GPU mainly makes medium and large fast enough for real-time use. You can also offload Whisper over Wyoming.' } },
        { '@type': 'Question', name: 'How accurate is local Whisper offline?', acceptedAnswer: { '@type': 'Answer', text: 'Strong with the right model and microphone; larger models handle accents and noise better. The small model on a mini PC is usually accurate enough for clear home commands, fully offline.' } },
        { '@type': 'Question', name: 'Is local Whisper multilingual?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Whisper supports many languages, so non-English commands transcribe locally with no cloud. Set the language in the add-on configuration.' } },
      ],
    },
  },
}
