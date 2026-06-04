import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Local vs Cloud Voice Assistants: Privacy, Cost & Capability (2026)',
    seoTitle: 'Local vs Cloud Voice Assistant (2026)',
    intro:
      'Local voice assistants win on privacy and cost; cloud assistants still lead on out-of-box polish and broad skills. This decision guide compares a local stack (Home Assistant Assist + Whisper + a local LLM) against cloud assistants (Alexa, Google) across privacy, cost, accuracy, skills, offline operation, and effort, and says when each wins.',
    metaDescription:
      'Local vs cloud voice assistants: privacy, cost, accuracy, skills, offline, and effort compared. When a local stack wins and when cloud still leads.',
    twitterDescription:
      'Local vs cloud voice assistants: local wins on privacy and cost, cloud leads on polish and skills. When each one wins in 2026.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'People deciding between local and cloud voice control',
    primaryTerm: 'local vs cloud voice assistant',
    targetKeywords: [
      'local vs cloud voice assistant',
      'private voice assistant vs alexa',
      'home assistant voice vs alexa',
      'offline voice assistant comparison',
      'replace alexa privacy',
    ],
    leadAnswerBlock:
      '**A local voice assistant wins on privacy, cost, and offline operation; a cloud assistant like Alexa or Google still wins on out-of-box polish and the breadth of third-party skills.** Choose local for privacy and control, cloud for zero-effort convenience.',
    quickAnswerTop: {
      en: {
        question: 'Should I use a local or cloud voice assistant?',
        answer:
          'Use a local voice assistant (Home Assistant Assist + Whisper + Piper + a local LLM) if you want privacy, no subscriptions, and offline operation. Use a cloud assistant like Alexa or Google if you want the easiest setup and the widest third-party skills, and accept that your voice data is processed in the cloud.',
        bullets: [
          'Local: private, no fees, works offline, more setup',
          'Cloud: easiest, widest skills, polished, but cloud-processed',
          'Local accuracy depends on your Whisper model and hardware',
          'Cloud leads on broad third-party skills and zero setup',
          'Choose by privacy/control vs convenience',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Two Approaches', anchor: 'two-approaches' },
      { label: 'The Comparison', anchor: 'comparison' },
      { label: 'The Case for Local', anchor: 'case-local' },
      { label: 'Where Cloud Still Wins', anchor: 'cloud-wins' },
      { label: 'Recommendation', anchor: 'recommendation' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Local voice assistants win on privacy, cost, and offline operation; cloud assistants win on out-of-box polish and the breadth of third-party skills.' },
      { type: 'plain-terms', content: 'A cloud voice assistant like Alexa is easy and feature-rich but sends your voice to a company server. A local voice assistant runs on your own hardware, so it is private and works offline, but you set it up yourself and it has fewer third-party "skills".' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Local (Assist + Whisper + Piper + a local LLM): private, no fees, offline, more setup',
          'Cloud (Alexa, Google): easiest, widest third-party skills, polished, cloud-processed',
          'Local accuracy depends on your Whisper model size and microphone',
          'Cloud leads on zero setup and broad skills; local leads on privacy and cost',
          'A GPU-equipped mini PC narrows the latency gap for local',
          'Choose local for privacy and control, cloud for convenience',
        ],
      },
      twoApproaches: {
        id: 'two-approaches',
        title: 'The Two Approaches',
        content:
          '**A local assistant runs speech, understanding, and responses on your hardware; a cloud assistant runs them on a vendor server.** That single difference drives the trade-offs.',
        items: [
          '**Local:** Home Assistant Assist + Whisper (STT) + Piper (TTS) + an optional local LLM — see [build a fully local voice assistant](/smart-home/local-voice-assistant-smart-home).',
          '**Cloud:** Alexa or Google process your voice on their servers.',
          'The choice mirrors the broader local-vs-cloud decision — see [why local beats cloud](/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'The Comparison',
        content:
          '**Local wins privacy, cost, and offline; cloud wins skills and effort.** Use the table to match your priority.',
        columns: ['Criterion', 'Local (Assist + Whisper + LLM)', 'Cloud (Alexa / Google)'],
        rows: [
          { 'Criterion': 'Privacy', 'Local (Assist + Whisper + LLM)': 'On-device, private', 'Cloud (Alexa / Google)': 'Voice processed in cloud' },
          { 'Criterion': 'Cost', 'Local (Assist + Whisper + LLM)': 'One-time hardware', 'Cloud (Alexa / Google)': 'Cheap hardware, possible fees' },
          { 'Criterion': 'Accuracy', 'Local (Assist + Whisper + LLM)': 'Depends on model/hardware', 'Cloud (Alexa / Google)': 'Polished, consistent' },
          { 'Criterion': 'Skills', 'Local (Assist + Whisper + LLM)': 'Home control focus', 'Cloud (Alexa / Google)': 'Broad third-party skills' },
          { 'Criterion': 'Offline', 'Local (Assist + Whisper + LLM)': 'Works offline', 'Cloud (Alexa / Google)': 'Needs internet' },
          { 'Criterion': 'Effort', 'Local (Assist + Whisper + LLM)': 'Higher setup', 'Cloud (Alexa / Google)': 'Plug-and-play' },
        ],
      },
      caseLocal: {
        id: 'case-local',
        title: 'The Privacy and Cost Case for Local',
        content:
          '**Local voice keeps recordings on your hardware and avoids subscriptions, which is the strongest reason to choose it.** It also works during internet outages.',
        items: [
          'No voice recordings sent to a vendor — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
          'No subscription; you pay one-time hardware.',
          'Add a local LLM for natural-language understanding — see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      cloudWins: {
        id: 'cloud-wins',
        title: 'Where Cloud Still Wins',
        content:
          '**Cloud assistants still win on zero-effort setup, consistent accuracy, and the breadth of third-party skills.** If you want shopping, broad app integrations, and no configuration, cloud leads.',
        items: [
          'Out-of-box setup with no hardware to manage.',
          'Wide third-party skill ecosystems beyond home control.',
          'Consistent recognition without tuning a model or microphone.',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Recommendation',
        content:
          '**Choose local if privacy, cost, or offline operation matter; choose cloud if you want zero setup and the widest skills.** If unsure and you value privacy, start local with a mini PC.',
        items: [
          '**Privacy / offline / no fees:** local stack.',
          '**Zero setup / broadest skills:** Alexa or Google.',
          '**Unsure but privacy-leaning:** start local on a GPU-equipped mini PC — see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Is local voice as good as cloud now?', a: 'For home control and natural-language commands, a local stack with a good Whisper model and a local LLM is highly capable. Cloud assistants still lead on consistent accuracy out of the box and on broad third-party skills beyond home control.' },
          { q: 'Is a local voice assistant fully offline?', a: 'Yes. Speech-to-text, text-to-speech, intent handling, and an optional local LLM all run on your hardware, so a local voice assistant works with no internet. Only remote access from outside the home needs connectivity.' },
          { q: 'What is the cost difference?', a: 'Local voice has a one-time hardware cost and no subscription, while cloud assistants have cheap hardware but may attach fees to premium features. Over time, local is typically cheaper and keeps your voice data private.' },
          { q: 'How much setup effort does local voice take?', a: 'More than a cloud assistant: you install Home Assistant, add Whisper and Piper, connect them over Wyoming, and optionally add a local LLM. It is a weekend project rather than a few taps, but it is well-documented.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — how to build the local stack',
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — the broader local case',
          '[Local Whisper + Home Assistant](/smart-home/local-whisper-home-assistant) — local speech-to-text',
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — hardware for local voice',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local vs Cloud Voice Assistants: Privacy, Cost & Capability (2026)',
      description: 'Local vs cloud voice assistants: privacy, cost, accuracy, skills, offline, and effort compared. When a local stack wins and when cloud still leads.',
      url: 'https://www.promptquorum.com/smart-home/local-vs-cloud-voice-assistant',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Voice assistant' }, { '@type': 'Thing', name: 'Local AI' }, { '@type': 'Thing', name: 'Privacy' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is local voice as good as cloud now?', acceptedAnswer: { '@type': 'Answer', text: 'For home control, a local stack with a good Whisper model and a local LLM is highly capable. Cloud still leads on consistent out-of-box accuracy and broad third-party skills.' } },
        { '@type': 'Question', name: 'Is a local voice assistant fully offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. STT, TTS, intent handling, and an optional local LLM all run on your hardware, so it works with no internet. Only remote access needs connectivity.' } },
        { '@type': 'Question', name: 'What is the cost difference?', acceptedAnswer: { '@type': 'Answer', text: 'Local has a one-time hardware cost and no subscription; cloud has cheap hardware but may attach fees to premium features. Over time local is typically cheaper and private.' } },
        { '@type': 'Question', name: 'How much setup effort does local voice take?', acceptedAnswer: { '@type': 'Answer', text: 'More than cloud: install Home Assistant, add Whisper and Piper over Wyoming, and optionally a local LLM. A weekend project rather than a few taps.' } },
      ],
    },
  },
}
