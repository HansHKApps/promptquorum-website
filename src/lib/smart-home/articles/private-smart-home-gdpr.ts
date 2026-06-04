import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Building a GDPR-Friendly Private Smart Home (EU, 2026)',
    seoTitle: 'GDPR-Friendly Private Smart Home (EU 2026)',
    intro:
      'A local smart home keeps all processing on your own hardware in your home, supporting GDPR data-minimization and residency by design because no third-party processor is involved. This EU-focused guide explains how GDPR applies to connected devices, where cloud devices send data, how local processing achieves residency, and a buyer checklist for a private, GDPR-friendly setup.',
    metaDescription:
      'Build a GDPR-friendly private smart home: data residency, no cloud processing, local voice and AI. An EU guide to keeping connected-home data on your hardware.',
    twitterDescription:
      'A GDPR-friendly smart home keeps processing local: data residency by design, no third-party processor, local voice and AI. An EU guide.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'EU homeowners wanting a privacy-compliant smart home',
    primaryTerm: 'GDPR private smart home',
    targetKeywords: [
      'gdpr smart home privacy',
      'private smart home eu',
      'gdpr connected devices',
      'data residency smart home',
      'local smart home gdpr',
    ],
    leadAnswerBlock:
      '**A local smart home supports GDPR by design: processing happens on your own hardware in your home, so device, voice, and camera data are minimized and kept in your jurisdiction with no third-party processor.** Local voice and local AI remove the cloud processor entirely.',
    quickAnswerTop: {
      en: {
        question: 'Is a local smart home GDPR-friendly?',
        answer:
          'Yes. Because a local smart home processes device, voice, and camera data on your own hardware, it supports GDPR principles of data minimization and residency by design, and there is no external processor handling your household data. Cloud devices, by contrast, send personal data to vendor servers that act as processors.',
        bullets: [
          'Local processing keeps data in your home and jurisdiction',
          'No third-party processor for your household data',
          'Local voice (Whisper/Piper) avoids cloud voice processing',
          'Supports data-minimization and residency by design',
          'Cloud devices send personal data to vendor processors',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'GDPR and the Connected Home', anchor: 'gdpr-home' },
      { label: 'Where Cloud Devices Send Data', anchor: 'cloud-data' },
      { label: 'Data Residency via Local Processing', anchor: 'residency' },
      { label: 'Local Voice and AI', anchor: 'local-voice-ai' },
      { label: 'EU Buyer Checklist', anchor: 'checklist' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A local smart home processes device, voice, and camera data on your own hardware, supporting GDPR data-minimization and residency with no third-party processor.' },
      { type: 'plain-terms', content: 'Under GDPR, sending your household data to a company cloud makes that company a data processor. A local smart home avoids this by keeping all processing on hardware in your home, so the data stays in your jurisdiction and no outside party handles it.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Local processing keeps device, voice, and camera data in your home and jurisdiction',
          'With no cloud, there is no third-party processor handling your household data',
          'Local voice (Whisper + Piper) and a local LLM avoid cloud voice/AI processing',
          'This supports GDPR data-minimization and residency by design',
          'Cloud devices send personal data to vendor servers acting as processors',
          'For specifics, consult a data-protection professional for your situation',
        ],
      },
      gdprHome: {
        id: 'gdpr-home',
        title: 'GDPR and the Connected Home',
        content:
          '**GDPR governs personal data, and a smart home generates plenty: presence, routines, voice, and video.** Where that data is processed determines who is involved and how exposed it is.',
        items: [
          'Smart home data (presence, recordings, footage) is personal data under GDPR.',
          'Cloud processing introduces a third-party processor handling that data.',
          'Local processing keeps you in control with no external processor.',
        ],
      },
      cloudData: {
        id: 'cloud-data',
        title: 'Where Cloud Devices Send Data',
        content:
          '**Cloud smart home devices transmit usage data, voice queries, and camera footage to vendor servers, sometimes outside the EU.** That makes the vendor a processor and can raise data-transfer questions.',
        items: [
          'Usage and telemetry flow to vendor analytics systems.',
          'Voice assistants process recordings in the cloud.',
          'Camera footage is stored on vendor servers — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
        ],
      },
      residency: {
        id: 'residency',
        title: 'Data Residency via Local Processing',
        content:
          '**Local processing achieves data residency by default: the data never leaves your home, so it stays in your jurisdiction.** This directly supports GDPR residency and minimization principles.',
        items: [
          'A local hub (Home Assistant) processes automations on-site — see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
          'No cross-border transfer occurs because no data is sent off-device.',
          'You minimize data collection to what stays in your home.',
        ],
      },
      localVoiceAi: {
        id: 'local-voice-ai',
        title: 'Local Voice and AI = No Third-Party Processor',
        content:
          '**Local voice and a local LLM remove the cloud processor for your most sensitive data — your speech and home context.** Everything is computed on your hardware.',
        items: [
          'Local Whisper and Piper keep voice processing on-device — see [build a fully local voice assistant](/smart-home/local-voice-assistant-smart-home).',
          'A local LLM via the [Ollama integration](/smart-home/home-assistant-ollama-integration) keeps natural-language processing local.',
          'For private local AI generally, see [what local LLMs are](/local-llms/what-are-local-llms) (cross-cluster).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'EU Buyer Checklist',
        content:
          '**Favour local-capable devices, a local hub, and local voice/AI to keep your household data in your home.** The table contrasts cloud and local on GDPR-relevant points.',
        columns: ['Factor', 'Cloud device', 'Local setup'],
        rows: [
          { 'Factor': 'Data location', 'Cloud device': 'Vendor data centre', 'Local setup': 'Your home' },
          { 'Factor': 'Processor', 'Cloud device': 'Vendor (third party)', 'Local setup': 'None external' },
          { 'Factor': 'Voice data', 'Cloud device': 'Processed in cloud', 'Local setup': 'On-device (Whisper/Piper)' },
          { 'Factor': 'GDPR posture', 'Cloud device': 'Transfer/processor questions', 'Local setup': 'Residency by design' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Are smart home devices GDPR-relevant?', a: 'Yes. Smart home devices generate personal data such as presence, routines, voice, and video. Under GDPR, how and where that data is processed matters, and cloud devices that send it to vendor servers introduce a third-party processor.' },
          { q: 'Does local mean there is no processor?', a: 'For your household data, yes — local processing keeps everything on your own hardware, so no external party processes it. You remain in control of the data, which supports GDPR data-minimization and residency principles.' },
          { q: 'Is voice data a particular GDPR issue?', a: 'Voice recordings are sensitive personal data, and cloud assistants process them on vendor servers. Using local speech-to-text (Whisper) and text-to-speech (Piper) keeps voice processing on-device, avoiding a cloud processor for your speech.' },
          { q: 'Are there EU-hosted smart home options?', a: 'A local-first setup is the strongest privacy option because data never leaves your home, removing hosting-location questions entirely. For any cloud features you do use, check where the provider processes data and consult a data-protection professional for your specific needs.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the risks GDPR-friendly setups avoid',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — building the private stack',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — local AI, no cloud processor',
          '[What Local LLMs Are](/local-llms/what-are-local-llms) — cross-cluster: private local AI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Building a GDPR-Friendly Private Smart Home (EU, 2026)',
      description: 'Build a GDPR-friendly private smart home: data residency, no cloud processing, local voice and AI. An EU guide to keeping connected-home data on your hardware.',
      url: 'https://www.promptquorum.com/smart-home/private-smart-home-gdpr',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'GDPR' }, { '@type': 'Thing', name: 'Smart home privacy' }, { '@type': 'Thing', name: 'Data residency' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Are smart home devices GDPR-relevant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. They generate personal data such as presence, routines, voice, and video. Cloud devices that send it to vendor servers introduce a third-party processor under GDPR.' } },
        { '@type': 'Question', name: 'Does local mean there is no processor?', acceptedAnswer: { '@type': 'Answer', text: 'For your household data, yes — local processing keeps everything on your hardware, so no external party processes it, supporting GDPR minimization and residency.' } },
        { '@type': 'Question', name: 'Is voice data a particular GDPR issue?', acceptedAnswer: { '@type': 'Answer', text: 'Voice recordings are sensitive data, and cloud assistants process them on vendor servers. Local Whisper and Piper keep voice processing on-device.' } },
        { '@type': 'Question', name: 'Are there EU-hosted smart home options?', acceptedAnswer: { '@type': 'Answer', text: 'A local-first setup is the strongest option because data never leaves your home. For any cloud features, check where the provider processes data and consult a professional.' } },
      ],
    },
  },
}
