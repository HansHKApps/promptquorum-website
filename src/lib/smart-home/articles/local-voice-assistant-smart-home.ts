import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Build a Fully Local Voice Assistant for Your Smart Home (2026)',
    seoTitle: 'Local Voice Assistant 2026: Replace Alexa Privately',
    intro:
      'You can replace Alexa or Google with a fully local voice assistant built from Home Assistant Assist, local Whisper for speech-to-text, Piper for text-to-speech, and a local LLM as the brain. This guide covers the offline voice stack, each component, the Wyoming protocol that connects them, and the hardware you need — all private and working without the cloud.',
    metaDescription:
      'Replace Alexa with a fully local voice assistant: Home Assistant Assist + Whisper + Piper + a local LLM over the Wyoming protocol. Private and offline.',
    twitterDescription:
      'Build a private voice assistant that replaces Alexa: Assist + Whisper (STT) + Piper (TTS) + a local LLM. Fully offline, over Wyoming.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    audience: 'Privacy-conscious Home Assistant users replacing cloud voice assistants',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'local voice assistant home assistant',
      'replace alexa home assistant',
      'private voice assistant',
      'home assistant assist whisper piper',
      'offline voice assistant',
    ],
    leadAnswerBlock:
      '**A fully local voice assistant combines Home Assistant Assist (intent), local Whisper (speech-to-text), Piper (text-to-speech), and a local LLM (reasoning) — all connected over the Wyoming protocol and running on your own hardware.** No audio or commands leave the house, and it works offline.',
    quickAnswerTop: {
      en: {
        question: 'How do I build a fully local voice assistant?',
        answer:
          'Use Home Assistant Assist as the pipeline, add the Whisper add-on for speech-to-text and the Piper add-on for text-to-speech, connect them via the Wyoming protocol, add a wake-word engine, and optionally set a local LLM as the conversation agent. Everything runs on your hardware with no cloud.',
        bullets: [
          'Assist = the voice pipeline inside Home Assistant',
          'Whisper = local speech-to-text; Piper = local text-to-speech',
          'Wyoming protocol connects the speech services',
          'Add a wake word engine for hands-free use',
          'Optional: a local LLM as the conversation agent',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Local Voice Stack', anchor: 'voice-stack' },
      { label: 'Home Assistant Assist', anchor: 'assist' },
      { label: 'Whisper for STT', anchor: 'whisper' },
      { label: 'Piper for TTS', anchor: 'piper' },
      { label: 'The Wyoming Protocol', anchor: 'wyoming' },
      { label: 'Adding the LLM Brain', anchor: 'llm-brain' },
      { label: 'Hardware Needs', anchor: 'hardware' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A fully local voice assistant is Home Assistant Assist + Whisper (STT) + Piper (TTS) + an optional local LLM, connected over Wyoming and running offline.' },
      { type: 'plain-terms', content: 'A voice assistant has three jobs: hear you (speech-to-text), understand and act (intent or an LLM), and speak back (text-to-speech). Home Assistant can do all three on your own hardware using Whisper, Piper, and Assist, so unlike Alexa, no recording is sent to a company server.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant Assist is the local voice pipeline that ties everything together',
          'Whisper handles speech-to-text locally; pick a model size for your accuracy/speed/hardware trade-off',
          'Piper handles text-to-speech locally with natural-sounding voices',
          'The Wyoming protocol connects Assist to the Whisper and Piper services',
          'Add a wake-word engine (such as openWakeWord) for hands-free triggering',
          'Optional: set a local LLM as the conversation agent for natural-language understanding',
        ],
      },
      voiceStack: {
        id: 'voice-stack',
        title: 'The Fully-Local Voice Stack',
        content:
          '**A local voice assistant is four roles on your own hardware: capture and transcribe (Whisper), understand (Assist intents or a local LLM), respond (Piper), and trigger (wake word).** Each runs offline; the Wyoming protocol wires them together.',
        columns: ['Component', 'Role', 'Local?', 'Notes'],
        rows: [
          { 'Component': 'Assist', 'Role': 'Pipeline + intent', 'Local?': 'Yes', 'Notes': 'Built into Home Assistant' },
          { 'Component': 'Whisper', 'Role': 'Speech-to-text', 'Local?': 'Yes', 'Notes': 'Model size sets accuracy/speed' },
          { 'Component': 'Piper', 'Role': 'Text-to-speech', 'Local?': 'Yes', 'Notes': 'Natural local voices' },
          { 'Component': 'Wake word', 'Role': 'Hands-free trigger', 'Local?': 'Yes', 'Notes': 'e.g. openWakeWord' },
          { 'Component': 'Local LLM', 'Role': 'Understanding (optional)', 'Local?': 'Yes', 'Notes': 'Via Ollama as conversation agent' },
        ],
      },
      assist: {
        id: 'assist',
        title: 'Home Assistant Assist',
        content:
          '**Assist is the built-in voice pipeline that routes audio through speech-to-text, an agent, and text-to-speech.** It is configured under Settings → Voice assistants.',
        items: [
          'Assist works with built-in intents out of the box (no LLM required) for common commands.',
          'You select the STT engine (Whisper), the TTS engine (Piper), and the conversation agent.',
          'Use multiple pipelines if you want a fast intent-only assistant and a separate LLM-powered one.',
        ],
      },
      whisper: {
        id: 'whisper',
        title: 'Whisper for Local Speech-to-Text',
        content:
          '**Whisper transcribes your speech locally; larger Whisper models are more accurate but need more compute.** Add it as the Whisper (faster-whisper) add-on and connect via Wyoming.',
        items: [
          'Whisper ships in sizes from tiny to large — smaller is faster, larger is more accurate.',
          'For a focused STT setup (models, hardware, accuracy), see [local Whisper + Home Assistant](/smart-home/local-whisper-home-assistant).',
          'Whisper is multilingual, so non-English commands transcribe without a cloud service.',
        ],
      },
      piper: {
        id: 'piper',
        title: 'Piper for Local Text-to-Speech',
        content:
          '**Piper generates spoken responses locally with natural-sounding voices, fast enough for real-time replies on modest hardware.** Add it as the Piper add-on and select a voice.',
        items: [
          'Piper offers multiple languages and voices; pick one per pipeline.',
          'It runs well on a Raspberry Pi for typical response lengths.',
          'No audio is sent anywhere — the speech is synthesised on your device.',
        ],
      },
      wyoming: {
        id: 'wyoming',
        title: 'The Wyoming Protocol',
        content:
          '**Wyoming is the protocol Home Assistant uses to connect Assist to local voice services like Whisper and Piper.** It lets the speech services run as separate add-ons or on separate machines.',
        items: [
          'Each service (Whisper, Piper, wake word) runs as a Wyoming endpoint.',
          'Assist discovers and uses them through the Wyoming integration.',
          'This modularity means you can offload Whisper to a more powerful box if needed.',
        ],
      },
      llmBrain: {
        id: 'llm-brain',
        title: 'Adding the LLM Brain',
        content:
          '**Set a local LLM as the conversation agent to understand natural language instead of only fixed intents.** This is optional but unlocks flexible phrasing.',
        items: [
          'Wire Ollama into Home Assistant first — see [the Ollama integration guide](/smart-home/home-assistant-ollama-integration).',
          'Use a small function-calling model so voice responses stay snappy.',
          'For the end-to-end picture, see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Needs',
        content:
          '**A mini PC comfortably runs Assist, Whisper, Piper, and a small LLM; a Raspberry Pi handles intent-only voice but struggles with large Whisper models and LLM inference.** Microphone hardware (voice satellites) captures audio around the house.',
        items: [
          'Use a mini PC if you want the LLM brain and larger Whisper models — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          'Use a Pi for a lightweight, intent-only assistant.',
          'Add voice-satellite hardware (microphone + speaker endpoints) for room coverage.',
          'Compare local vs cloud voice trade-offs in [local vs cloud voice assistants](/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Can a local voice assistant fully replace Alexa?', a: 'For smart-home control and many routines, yes — Assist with Whisper, Piper, and a local LLM covers natural-language device control and responses. It does not replicate every third-party Alexa skill or cloud shopping feature, but it covers the core home-control use case privately.' },
          { q: 'Does a local voice assistant work offline?', a: 'Yes. Speech-to-text (Whisper), text-to-speech (Piper), intent handling, and an optional local LLM all run on your hardware, so the assistant works with no internet. Only remote access from outside the home needs connectivity.' },
          { q: 'How accurate is local speech recognition?', a: 'Accuracy depends on the Whisper model size and your microphone. Larger Whisper models are more accurate but slower; a mid-size model on a mini PC gives a good balance for home commands. See the local Whisper guide for sizing.' },
          { q: 'What hardware do I need for a local voice assistant?', a: 'A mini PC for the full stack (LLM + larger Whisper), or a Raspberry Pi for an intent-only assistant, plus microphone/speaker voice-satellite hardware for room coverage. A GPU or NPU lowers LLM and large-Whisper latency.' },
          { q: 'Can I use a custom wake word?', a: 'Yes. A local wake-word engine such as openWakeWord supports custom wake words and runs on your hardware, so hands-free triggering needs no cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — add the LLM conversation agent',
          '[Local Whisper + Home Assistant](/smart-home/local-whisper-home-assistant) — pick and tune speech-to-text',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the full local-AI architecture',
          '[Local vs Cloud Voice Assistants](/smart-home/local-vs-cloud-voice-assistant) — the decision and trade-offs',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: run a local model',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Build a Fully Local Voice Assistant for Your Smart Home (2026)',
      description: 'Replace Alexa with a fully local voice assistant: Home Assistant Assist + Whisper + Piper + a local LLM over the Wyoming protocol. Private and offline.',
      url: 'https://www.promptquorum.com/smart-home/local-voice-assistant-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Voice assistant' }, { '@type': 'Thing', name: 'Home Assistant Assist' }, { '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Piper' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Can a local voice assistant fully replace Alexa?', acceptedAnswer: { '@type': 'Answer', text: 'For smart-home control and many routines, yes — Assist with Whisper, Piper, and a local LLM covers natural-language device control privately. It does not replicate every third-party Alexa skill.' } },
        { '@type': 'Question', name: 'Does a local voice assistant work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Whisper, Piper, intent handling, and an optional local LLM all run on your hardware, so it works with no internet.' } },
        { '@type': 'Question', name: 'How accurate is local speech recognition?', acceptedAnswer: { '@type': 'Answer', text: 'Accuracy depends on Whisper model size and microphone. Larger models are more accurate but slower; a mid-size model on a mini PC balances both for home commands.' } },
        { '@type': 'Question', name: 'What hardware do I need for a local voice assistant?', acceptedAnswer: { '@type': 'Answer', text: 'A mini PC for the full stack, or a Raspberry Pi for an intent-only assistant, plus microphone/speaker voice-satellite hardware. A GPU or NPU lowers latency.' } },
        { '@type': 'Question', name: 'Can I use a custom wake word?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A local wake-word engine such as openWakeWord supports custom wake words and runs on your hardware with no cloud.' } },
      ],
    },
  },
}
