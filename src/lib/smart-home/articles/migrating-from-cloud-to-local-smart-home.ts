import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'How to Migrate from a Cloud Smart Home to Local Control (2026)',
    seoTitle: 'Migrate Alexa to Home Assistant: Local Control (2026)',
    intro:
      'Migrating from a cloud smart home to local control means auditing your cloud dependencies, moving devices to a local hub, and retiring cloud assistants. This step-by-step guide shows how to audit, which devices can go local, when to replace versus re-pair, how to move to Home Assistant, and how to add a local voice assistant in place of Alexa or Google.',
    metaDescription:
      'Migrate from a cloud smart home to local control: audit dependencies, move devices to Home Assistant, retire Alexa/Google, and add local voice. Step by step.',
    twitterDescription:
      'Move from Alexa/Google to a local smart home: audit cloud dependencies, re-pair or replace devices, switch to Home Assistant, add local voice.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Existing cloud smart home users moving to local control',
    primaryTerm: 'migrate cloud to local smart home',
    targetKeywords: [
      'migrate from alexa to home assistant',
      'cloud to local smart home',
      'replace alexa with home assistant',
      'move smart home to local',
      'leave google home',
    ],
    leadAnswerBlock:
      '**Migrate by auditing your cloud dependencies, moving local-capable devices to Home Assistant (re-pairing where possible, replacing where not), and retiring Alexa or Google in favour of a local voice assistant.** Do it room by room so the home keeps working throughout.',
    quickAnswerTop: {
      en: {
        question: 'How do I migrate from a cloud smart home to local control?',
        answer:
          'List your devices and which depend on a cloud, move local-capable devices (Zigbee, Z-Wave, Matter, local Wi-Fi) onto Home Assistant by re-pairing them, replace cloud-only devices over time, and retire Alexa or Google by adding a local voice assistant. Migrate gradually, one room at a time.',
        bullets: [
          'Audit which devices depend on a vendor cloud',
          'Re-pair local-capable devices to Home Assistant',
          'Replace cloud-only devices gradually',
          'Add local voice to replace Alexa/Google',
          'Migrate room by room to avoid downtime',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Audit Cloud Dependencies', anchor: 'audit' },
      { label: 'Which Devices Can Go Local', anchor: 'which-local' },
      { label: 'Replace vs Re-pair', anchor: 'replace-repair' },
      { label: 'Move to Home Assistant', anchor: 'move-ha' },
      { label: 'Retire Alexa/Google', anchor: 'retire' },
      { label: 'Add Local Voice', anchor: 'local-voice' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Migrate to local by auditing cloud dependencies, re-pairing local-capable devices to Home Assistant, replacing cloud-only ones, and adding local voice.' },
      { type: 'plain-terms', content: 'Switching from a cloud smart home to a local one does not mean throwing everything out. Many devices already speak local protocols and just need re-pairing to a local hub. You replace the cloud-only ones over time and swap your cloud voice assistant for a local one.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Start by auditing which devices depend on a vendor cloud',
          'Local-capable devices (Zigbee, Z-Wave, Matter, local Wi-Fi) can re-pair to Home Assistant',
          'Replace cloud-only devices gradually rather than all at once',
          'Move control and automations onto a local Home Assistant hub',
          'Retire Alexa/Google by adding a local voice assistant',
          'Migrate room by room so the home keeps working throughout',
        ],
      },
      audit: {
        id: 'audit',
        title: 'Audit Your Cloud Dependencies',
        content:
          '**List every device and note which need a vendor cloud to function.** This tells you what can re-pair locally and what must be replaced.',
        numberedItems: [
          'Inventory your devices by room and brand.',
          'Note the protocol each uses (Zigbee, Z-Wave, Matter, Wi-Fi).',
          'Flag devices that require a cloud account for basic control.',
          'Identify which automations currently run in a vendor cloud.',
        ],
      },
      whichLocal: {
        id: 'which-local',
        title: 'Which Devices Can Go Local',
        content:
          '**Devices using Zigbee, Z-Wave, Matter, or a local Wi-Fi API can move to local control; cloud-only devices generally cannot without replacement.** Check the protocol first.',
        items: [
          'Zigbee and Z-Wave devices re-pair to a coordinator on your hub.',
          'Matter devices can commission to a local controller — see [Matter local control](/smart-home/matter-local-control-guide).',
          'Local-Wi-Fi devices with a documented local API can be controlled locally.',
        ],
      },
      replaceRepair: {
        id: 'replace-repair',
        title: 'Replace vs Re-pair',
        content:
          '**Re-pair local-capable devices to your hub; replace cloud-only devices over time as budget allows.** Prioritise replacing the highest-privacy-risk cloud devices first.',
        columns: ['Device type', 'Can go local?', 'How' ],
        rows: [
          { 'Device type': 'Zigbee/Z-Wave bulbs & sensors', 'Can go local?': 'Yes', 'How': 'Re-pair to a coordinator on the hub' },
          { 'Device type': 'Matter devices', 'Can go local?': 'Yes', 'How': 'Commission to a local controller' },
          { 'Device type': 'Local-Wi-Fi devices (local API)', 'Can go local?': 'Yes', 'How': 'Add via integration' },
          { 'Device type': 'Cloud-only cameras', 'Can go local?': 'Often no', 'How': 'Replace with local RTSP + Frigate' },
          { 'Device type': 'Cloud voice assistants', 'Can go local?': 'Replace', 'How': 'Add local voice assistant' },
        ],
      },
      moveHa: {
        id: 'move-ha',
        title: 'Move to Home Assistant',
        content:
          '**Set up Home Assistant as your local hub and migrate devices and automations onto it.** This becomes the control plane that replaces the vendor cloud.',
        items: [
          'Install Home Assistant and add a Zigbee/Z-Wave coordinator — see [Home Assistant getting started](/smart-home/home-assistant-getting-started).',
          'Re-pair devices and rebuild automations locally.',
          'Confirm everything works offline before retiring cloud services.',
        ],
      },
      retire: {
        id: 'retire',
        title: 'Retire Alexa/Google',
        content:
          '**Once local control and a local voice assistant work, retire the cloud assistants and accounts.** Do this last so you keep voice control during the transition.',
        items: [
          'Verify local control covers what you used Alexa/Google for.',
          'Remove devices from the vendor apps and disable the accounts.',
          'Keep deterministic safety automations on the local hub.',
        ],
      },
      localVoice: {
        id: 'local-voice',
        title: 'Add Local Voice',
        content:
          '**Replace cloud voice with a local assistant so you keep hands-free control without the cloud.** This is the final step of a full migration.',
        items: [
          'Build a local voice assistant with Assist + Whisper + Piper — see [the local voice assistant guide](/smart-home/local-voice-assistant-smart-home).',
          'Add a local LLM for natural-language understanding — see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
          'For the full destination state, see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Can I keep my existing devices?', a: 'Many of them, yes. Devices using Zigbee, Z-Wave, Matter, or a local Wi-Fi API can re-pair to a local hub like Home Assistant. Only cloud-only devices that require a vendor account for basic control need replacing over time.' },
          { q: 'What can\'t go local?', a: 'Cloud-only devices that depend entirely on a vendor cloud — often some cameras, doorbells, and proprietary ecosystems — generally cannot go local and need replacing with local-capable alternatives such as RTSP cameras paired with Frigate.' },
          { q: 'How long does migration take?', a: 'It varies with the size of your setup, but migrating room by room spreads the work and avoids downtime. Many people move the core hub and a few rooms in a weekend, then replace cloud-only devices gradually over weeks.' },
          { q: 'Do I lose voice control when I migrate?', a: 'No, if you add a local voice assistant before retiring the cloud one. A local stack of Assist, Whisper, and Piper, optionally with a local LLM, replaces Alexa or Google for hands-free control without the cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Home Assistant: Getting-Started Guide](/smart-home/home-assistant-getting-started) — set up the destination hub',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the end state',
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — replace Alexa/Google',
          '[Matter & Local Control](/smart-home/matter-local-control-guide) — commission devices locally',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'How to Migrate from a Cloud Smart Home to Local Control (2026)',
      description: 'Migrate from a cloud smart home to local control: audit dependencies, move devices to Home Assistant, retire Alexa/Google, and add local voice. Step by step.',
      url: 'https://www.promptquorum.com/smart-home/migrating-from-cloud-to-local-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart home migration' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Local control' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Can I keep my existing devices?', acceptedAnswer: { '@type': 'Answer', text: 'Many of them. Devices using Zigbee, Z-Wave, Matter, or a local Wi-Fi API can re-pair to a local hub. Only cloud-only devices that need a vendor account for basic control need replacing.' } },
        { '@type': 'Question', name: 'What can\'t go local?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud-only devices that depend entirely on a vendor cloud — often some cameras and doorbells — generally need replacing with local-capable alternatives like RTSP cameras with Frigate.' } },
        { '@type': 'Question', name: 'How long does migration take?', acceptedAnswer: { '@type': 'Answer', text: 'It varies with setup size, but migrating room by room avoids downtime. Many move the core hub and a few rooms in a weekend, then replace cloud-only devices over weeks.' } },
        { '@type': 'Question', name: 'Do I lose voice control when I migrate?', acceptedAnswer: { '@type': 'Answer', text: 'No, if you add a local voice assistant before retiring the cloud one. Assist, Whisper, and Piper, optionally with a local LLM, replace Alexa or Google without the cloud.' } },
      ],
    },
  },
}
