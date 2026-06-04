import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Smart Home Privacy Risks (2026): What Your Devices Know',
    seoTitle: 'Smart Home Privacy Risks 2026: What Devices Know',
    intro:
      'Cloud smart home devices collect usage patterns, voice recordings, and camera feeds on company servers — and the fix is local control. This guide covers the real privacy risks, what cloud ecosystems collect, why breaches and data sharing matter, and how a local-first setup with local AI removes the third-party processor entirely.',
    metaDescription:
      'Smart home privacy risks: cloud data collection, always-listening mics, camera feeds, breaches, and third-party sharing — and how local control fixes them.',
    twitterDescription:
      'What your smart home devices know about you: cloud usage data, voice recordings, camera feeds. The fix is local control and local AI.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Privacy-conscious smart home owners',
    primaryTerm: 'smart home privacy risks',
    targetKeywords: [
      'smart home privacy risks',
      'smart home data collection',
      'are smart speakers listening',
      'smart home security risks',
      'private smart home',
    ],
    leadAnswerBlock:
      '**Cloud smart home devices collect usage patterns, voice recordings, and camera feeds on company servers, where they are exposed to breaches and third-party sharing — and the fix is local control that keeps data in your home.** A local-first setup removes the third-party processor entirely.',
    quickAnswerTop: {
      en: {
        question: 'What are the privacy risks of a smart home?',
        answer:
          'Cloud-connected smart home devices send usage data, voice recordings, and camera footage to company servers, where it can be retained, shared with third parties, or exposed in a breach. Always-listening assistants and cloud cameras are the highest-risk devices. Moving to local control keeps that data on your own hardware.',
        bullets: [
          'Cloud usage data reveals routines and presence',
          'Voice assistants process recordings in the cloud',
          'Cloud cameras store footage on vendor servers',
          'Breaches and third-party sharing expose the data',
          'Local control removes the third-party processor',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Real Risks', anchor: 'real-risks' },
      { label: 'What Each Ecosystem Collects', anchor: 'what-collected' },
      { label: 'Breaches and Exposure', anchor: 'breaches' },
      { label: 'The Fix: Local-First', anchor: 'the-fix' },
      { label: 'Your Action Checklist', anchor: 'checklist' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Cloud smart home devices collect usage data, voice recordings, and camera feeds on company servers; local control keeps that data in your home.' },
      { type: 'plain-terms', content: 'Smart home devices that rely on the cloud send information about your home to company servers — when you come and go, what you say to a speaker, and what your cameras see. That data can be retained, shared, or leaked. Running everything locally means none of it leaves your house.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Cloud usage data reveals your routines, presence, and habits',
          'Voice assistants send recordings to the cloud for processing',
          'Cloud cameras store footage on vendor servers, often behind a subscription',
          'Stored data is exposed to breaches and third-party sharing',
          'Local control keeps data on your hardware and removes the third-party processor',
          'Local AI (voice and LLM) lets you keep smart features without the cloud',
        ],
      },
      realRisks: {
        id: 'real-risks',
        title: 'The Real Privacy Risks',
        content:
          '**The real risks are cloud data collection, always-listening assistants, camera feeds, breaches, and third-party sharing.** Each stems from data leaving your home and living on someone else\'s servers.',
        items: [
          '**Usage data:** device logs reveal when you wake, leave, and return.',
          '**Always-listening assistants:** voice queries are processed and may be retained in the cloud.',
          '**Camera feeds:** cloud cameras upload footage to vendor servers.',
          '**Breaches and sharing:** stored data can be exposed or shared with third parties.',
        ],
      },
      whatCollected: {
        id: 'what-collected',
        title: 'What Each Ecosystem Collects',
        content:
          '**Cloud-first ecosystems collect more than local ones: usage, voice, and sometimes video; local setups collect none of it off-device.** Privacy posture tracks how much runs in the cloud.',
        items: [
          'Cloud-first ecosystems (Alexa, Google Home) process voice and store usage data on their servers.',
          'Apple Home is more privacy-leaning but still cloud-connected for some features.',
          'Home Assistant keeps data local by default — see [smart home ecosystems compared](/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      breaches: {
        id: 'breaches',
        title: 'Breaches and Exposure',
        content:
          '**Any data stored on company servers is exposed to breaches, policy changes, and third-party sharing you cannot control.** The only data that cannot leak from a vendor is data the vendor never receives.',
        items: [
          'Centralised footage and recordings are attractive breach targets.',
          'Privacy policies can change, expanding how your data is used.',
          'Local processing avoids the issue entirely by never sending the data.',
        ],
      },
      theFix: {
        id: 'the-fix',
        title: 'The Fix: Local-First and Local AI',
        content:
          '**The fix is local control: run the hub, voice, and AI on your own hardware so no data leaves the house.** You keep smart features without the third-party processor.',
        items: [
          'Move to a local hub and local devices — see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
          'Replace cloud voice with a local assistant — see [connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration).',
          'For the EU/GDPR angle, see [building a GDPR-friendly private smart home](/smart-home/private-smart-home-gdpr).',
          'For private local AI generally, see [what local LLMs are](/local-llms/what-are-local-llms) (cross-cluster).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'Your Privacy Action Checklist',
        content:
          '**Reduce risk by replacing the highest-exposure cloud devices with local ones, starting with cameras and voice.** Each swap removes a stream of data leaving your home.',
        columns: ['Risk', 'Cloud setup', 'Local setup'],
        rows: [
          { 'Risk': 'Voice', 'Cloud setup': 'Recordings processed in cloud', 'Local setup': 'Local Whisper + Piper, on-device' },
          { 'Risk': 'Cameras', 'Cloud setup': 'Footage on vendor servers', 'Local setup': 'Frigate, footage stays home' },
          { 'Risk': 'Usage data', 'Cloud setup': 'Logged by vendor', 'Local setup': 'Stays on your hub' },
          { 'Risk': 'Automations', 'Cloud setup': 'Run in cloud', 'Local setup': 'Run on local hub' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Do smart speakers always listen?', a: 'Cloud voice assistants listen for a wake word locally, then send the following audio to the cloud for processing. That means your spoken queries are transmitted and may be retained. A local voice assistant processes everything on your hardware instead.' },
          { q: 'Where do my camera feeds go?', a: 'Cloud cameras upload footage to the vendor\'s servers, where it is stored and often gated behind a subscription. A local setup with Frigate keeps footage on your own hardware, so it never leaves the house.' },
          { q: 'Can I stop the data collection?', a: 'For cloud devices, you can limit but rarely eliminate collection through settings. The reliable fix is to switch to local-capable devices and a local hub, so the data is never sent to a vendor in the first place.' },
          { q: 'Is a local smart home actually private?', a: 'Yes. With a local hub, local voice, and local AI, device data, recordings, and automations stay on your hardware with no third-party processor. This is what makes a local-first setup private by design.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the fix in full',
          '[Building a GDPR-Friendly Private Smart Home](/smart-home/private-smart-home-gdpr) — the EU privacy angle',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — private local AI control',
          '[What Local LLMs Are](/local-llms/what-are-local-llms) — cross-cluster: private local AI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smart Home Privacy Risks (2026): What Your Devices Know',
      description: 'Smart home privacy risks: cloud data collection, always-listening mics, camera feeds, breaches, and third-party sharing — and how local control fixes them.',
      url: 'https://www.promptquorum.com/smart-home/smart-home-privacy-risks',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart home privacy' }, { '@type': 'Thing', name: 'Data collection' }, { '@type': 'Thing', name: 'Local control' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do smart speakers always listen?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud voice assistants listen for a wake word locally, then send the following audio to the cloud for processing, so queries are transmitted and may be retained. A local voice assistant processes everything on your hardware.' } },
        { '@type': 'Question', name: 'Where do my camera feeds go?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud cameras upload footage to the vendor\'s servers, often behind a subscription. A local setup with Frigate keeps footage on your own hardware.' } },
        { '@type': 'Question', name: 'Can I stop the data collection?', acceptedAnswer: { '@type': 'Answer', text: 'For cloud devices you can limit but rarely eliminate collection. The reliable fix is switching to local-capable devices and a local hub so data is never sent to a vendor.' } },
        { '@type': 'Question', name: 'Is a local smart home actually private?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. With a local hub, local voice, and local AI, device data, recordings, and automations stay on your hardware with no third-party processor.' } },
      ],
    },
  },
}
