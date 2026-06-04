import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Home Assistant vs Alexa vs Google Home: Which Is Right? (2026)',
    seoTitle: 'Home Assistant vs Alexa vs Google Home (2026)',
    intro:
      'Home Assistant, Amazon Alexa, and Google Home suit different priorities: Home Assistant wins on privacy and local control, while Alexa and Google win on plug-and-play convenience. This head-to-head compares privacy, local control, device support, voice, AI, cost, and effort, and recommends the right choice by user type.',
    metaDescription:
      'Home Assistant vs Alexa vs Google Home: privacy, local control, devices, voice, AI, cost, and effort compared. Which smart home platform is right for you?',
    twitterDescription:
      'Home Assistant vs Alexa vs Google Home: privacy and local control vs plug-and-play convenience. The 2026 head-to-head and who each fits.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'People choosing between Home Assistant, Alexa, and Google Home',
    primaryTerm: 'Home Assistant vs Alexa vs Google Home',
    targetKeywords: [
      'home assistant vs alexa vs google home',
      'home assistant vs alexa',
      'alexa vs google home',
      'best smart home platform 2026',
      'private smart home platform',
    ],
    leadAnswerBlock:
      '**Choose Home Assistant for privacy and full local control, and Amazon Alexa or Google Home for the easiest plug-and-play start.** Home Assistant takes more setup but keeps data local and runs offline; Alexa and Google are simpler but cloud-dependent.',
    quickAnswerTop: {
      en: {
        question: 'Should I choose Home Assistant, Alexa, or Google Home?',
        answer:
          'Choose Home Assistant if you value privacy, local control, and flexibility and accept more setup. Choose Amazon Alexa or Google Home if you want the easiest setup, broad device and voice support, and do not mind cloud dependence. Home Assistant can also bridge Alexa and Google, so the choice is not strictly exclusive.',
        bullets: [
          'Home Assistant: most private, local, flexible; most effort',
          'Alexa: easiest start, widest voice device support',
          'Google Home: strong voice, broad support, cloud-first',
          'Privacy and local control vs plug-and-play convenience',
          'Home Assistant can bridge the cloud assistants',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Three Options', anchor: 'three-options' },
      { label: 'The Comparison', anchor: 'comparison' },
      { label: 'Privacy Winner', anchor: 'privacy-winner' },
      { label: 'Convenience Winner', anchor: 'convenience-winner' },
      { label: 'AI and Voice', anchor: 'ai-voice' },
      { label: 'Recommendation by User', anchor: 'recommendation' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant wins on privacy and local control; Alexa and Google Home win on plug-and-play convenience and broad voice support.' },
      { type: 'plain-terms', content: 'These three are the common smart home choices. Alexa and Google Home are the easiest to set up but run through company clouds. Home Assistant takes more effort but keeps everything local and private — and it can even tie Alexa and Google in if you want.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant: most private, full local control, most flexible, most setup effort',
          'Amazon Alexa: easiest start, widest voice and device support, cloud-first',
          'Google Home: strong voice assistant, broad support, cloud-first',
          'Privacy and local control are the deciding factors',
          'Home Assistant adds local AI (Ollama + voice) that the cloud assistants do not match privately',
          'Home Assistant can bridge Alexa and Google, lowering the cost of choosing it',
        ],
      },
      threeOptions: {
        id: 'three-options',
        title: 'The Three Options',
        content:
          '**Home Assistant is local-first and private; Alexa and Google Home are cloud-first and convenient.** Each fits a different priority.',
        items: [
          '**Home Assistant:** open-source, local-first, the most flexible and private — see [getting started](/smart-home/home-assistant-getting-started).',
          '**Amazon Alexa:** widest device and voice-skill support, easiest start, cloud-first.',
          '**Google Home:** strong voice and broad support, cloud-first.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'The Comparison',
        content:
          '**Home Assistant leads on privacy, local control, and AI; Alexa and Google lead on ease and voice breadth.** Use the table to match a platform to your priority.',
        columns: ['Criterion', 'Home Assistant', 'Amazon Alexa', 'Google Home'],
        rows: [
          { 'Criterion': 'Privacy', 'Home Assistant': 'Best (local)', 'Amazon Alexa': 'Cloud data', 'Google Home': 'Cloud data' },
          { 'Criterion': 'Local control', 'Home Assistant': 'Full', 'Amazon Alexa': 'Limited', 'Google Home': 'Limited' },
          { 'Criterion': 'Device support', 'Home Assistant': 'Widest via integrations', 'Amazon Alexa': 'Widest voice', 'Google Home': 'Broad' },
          { 'Criterion': 'Voice', 'Home Assistant': 'Local (Assist)', 'Amazon Alexa': 'Strong (cloud)', 'Google Home': 'Strong (cloud)' },
          { 'Criterion': 'AI', 'Home Assistant': 'Local LLM (Ollama)', 'Amazon Alexa': 'Cloud assistant', 'Google Home': 'Cloud assistant' },
          { 'Criterion': 'Cost', 'Home Assistant': 'Hardware + effort', 'Amazon Alexa': 'Low hardware', 'Google Home': 'Low hardware' },
          { 'Criterion': 'Effort', 'Home Assistant': 'Higher', 'Amazon Alexa': 'Low', 'Google Home': 'Low' },
        ],
      },
      privacyWinner: {
        id: 'privacy-winner',
        title: 'Privacy Winner: Home Assistant',
        content:
          '**Home Assistant wins on privacy because control, voice, and AI all run locally with no vendor data collection.** Choose it if privacy is your top priority.',
        items: [
          'No usage data, recordings, or footage leaves your home — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
          'Add a local voice assistant and LLM for private natural-language control.',
          'Accept more setup effort in exchange.',
        ],
      },
      convenienceWinner: {
        id: 'convenience-winner',
        title: 'Convenience Winner: Alexa or Google',
        content:
          '**Amazon Alexa and Google Home win on convenience because setup is app-guided and devices are widely supported out of the box.** Choose them if minimal effort matters most.',
        items: [
          'Use Alexa for the widest voice-skill ecosystem.',
          'Use Google Home if you prefer Google\'s assistant and services.',
          'Accept cloud dependence and the privacy trade-off — see [why local beats cloud](/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      aiVoice: {
        id: 'ai-voice',
        title: 'AI and Voice',
        content:
          '**Alexa and Google offer polished cloud voice; Home Assistant offers private local voice and a local LLM brain.** The choice is cloud polish versus private control.',
        items: [
          'Cloud assistants are tuned for low-latency, broad voice skills.',
          'Home Assistant runs Assist + Whisper + Piper + a local LLM privately — see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
          'Compare voice approaches in [local vs cloud voice assistants](/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Recommendation by User',
        content:
          '**Privacy-focused or tinkerer → Home Assistant; convenience-first beginner → Alexa or Google; unsure but privacy matters → start with Home Assistant.** You can bridge the cloud assistants into Home Assistant later.',
        items: [
          '**Privacy / control:** Home Assistant.',
          '**Easiest start:** Amazon Alexa or Google Home.',
          '**Best private AI:** Home Assistant with a local LLM.',
          '**Want the full platform comparison?** See [smart home ecosystems compared](/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Which is most private?', a: 'Home Assistant is the most private because control, voice, and AI run locally on your own hardware with no vendor data collection. Alexa and Google Home are cloud-first and send usage and voice data to vendor servers.' },
          { q: 'Which is easiest?', a: 'Amazon Alexa and Google Home are easiest because setup is app-guided and cloud-managed, with broad out-of-the-box device support. Home Assistant offers more privacy and control but takes more setup effort.' },
          { q: 'Which has the best AI?', a: 'For private AI, Home Assistant leads because it can run a local LLM as a conversation agent with no cloud. Alexa and Google have polished cloud assistants, but those process your data on vendor servers.' },
          { q: 'Can I switch platforms later?', a: 'Yes, though it takes effort. Home Assistant can integrate and bridge Alexa and Google, so you can adopt it gradually. Moving from a cloud ecosystem to local control is a manageable, room-by-room migration.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smart Home Ecosystems Compared](/smart-home/smart-home-ecosystems-compared) — the full four-platform comparison',
          '[Home Assistant: Getting-Started Guide](/smart-home/home-assistant-getting-started) — set up the private option',
          '[Local vs Cloud Voice Assistants](/smart-home/local-vs-cloud-voice-assistant) — the voice decision',
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — the local case',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant vs Alexa vs Google Home: Which Is Right? (2026)',
      description: 'Home Assistant vs Alexa vs Google Home: privacy, local control, devices, voice, AI, cost, and effort compared. Which smart home platform is right for you?',
      url: 'https://www.promptquorum.com/smart-home/home-assistant-vs-alexa-vs-google',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Amazon Alexa' }, { '@type': 'Thing', name: 'Google Home' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Which is most private?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant, because control, voice, and AI run locally with no vendor data collection. Alexa and Google Home are cloud-first and send usage and voice data to vendor servers.' } },
        { '@type': 'Question', name: 'Which is easiest?', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Alexa and Google Home, because setup is app-guided and cloud-managed with broad out-of-the-box support. Home Assistant offers more control but takes more effort.' } },
        { '@type': 'Question', name: 'Which has the best AI?', acceptedAnswer: { '@type': 'Answer', text: 'For private AI, Home Assistant, because it can run a local LLM as a conversation agent with no cloud. Alexa and Google have polished cloud assistants that process data on vendor servers.' } },
        { '@type': 'Question', name: 'Can I switch platforms later?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, with effort. Home Assistant can integrate and bridge Alexa and Google, so you can adopt it gradually in a room-by-room migration.' } },
      ],
    },
  },
}
