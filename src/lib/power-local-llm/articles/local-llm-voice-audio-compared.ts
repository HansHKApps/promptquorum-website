// Local Voice & Audio Tools Compared: text-to-speech, speech-to-text and real-time voice agents
// Slug: local-llm-voice-audio-compared
// Category comparison guide for the `voice-audio` group. The comparison table is NOT written here:
// it is generated from the tool records (src/lib/power-local-llm/apps/*.ts) by the section whose
// `component` is 'CategoryCompareTable', so this article can never contradict the tool data.
// Every per-tool statement below must also hold in that tool's own review (see docs/PAGE_UPDATER.md
// Step 4.5, category<->review rule). EN only for now; not in published.ts until translated.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'Voice, Speech & Multimodal',
    title: 'Local Voice & Speech Tools Compared (2026): Text-to-Speech, Speech-to-Text and Voice Agents',
    seoTitle: 'Local Voice & Speech Tools Compared 2026',
    intro:
      'Local voice tools fall into three different jobs — turning text into speech, turning speech into text, and running a spoken conversation with an AI — and no single feature list compares them fairly. This guide compares 17 free and freemium tools that run on your own hardware, one job at a time, using a comparison table generated from the same data as each tool\'s own PromptQuorum review, so the table and the reviews cannot disagree.',
    metaDescription:
      'Compare 17 local voice tools side by side: text-to-speech, speech-to-text and real-time voice agents. Licenses, platforms, CPU use, API servers, voice cloning and more, from official project documentation.',
    twitterDescription:
      'Local voice tools compared by job: text-to-speech, speech-to-text and voice agents — licenses, platforms, CPU use, API servers, voice cloning, from official docs.',
    audience:
      'Developers, makers and privacy-conscious users choosing a local (offline-capable) text-to-speech, transcription or voice-assistant tool and who want the differences laid out per job, not one blended list.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local voice tools compared',
    targetKeywords: [
      'local text to speech comparison',
      'local speech to text comparison',
      'best local voice tools',
      'offline voice assistant tools',
      'whisper cpp vs faster whisper',
      'piper vs xtts',
    ],
    current_models_mentioned: ['Whisper', 'XTTS-v2'],
    current_hardware_mentioned: ['CPU', 'NVIDIA GPU'],
    leadAnswerBlock:
      '**The 17 local voice tools in the PromptQuorum directory split into three jobs that should be compared separately: text-to-speech (8 tools), speech-to-text (7) and real-time voice agents (4).** Within text-to-speech, voice cloning is stated in the official documentation of Coqui TTS, XTTS-v2, Izwi and Willow Inference Server; for speech-to-text, whisper.cpp and Willow Inference Server document real-time transcription; and Dograh, Jarvis, Parlor and Voxa are the voice agents. Use the comparison table below, and read each tool\'s own review before you install it.',
    quickAnswerTop: {
      en: {
        question: 'Which local voice tool should I use?',
        answer:
          'It depends on the job, so compare within one job at a time. Pick by the constraint that matters most — license, platform, CPU-only use, a local API server, voice cloning, real-time transcription — and use the table below, which is generated from each tool\'s official documentation.',
        bullets: [
          'Text-to-speech: 8 tools compared on languages, voice cloning, streaming, CPU use and API server.',
          'Speech-to-text: 7 tools compared on real-time use, speaker labels, CPU use and API server.',
          'Voice agents: 4 tools compared on fully-local operation, interruption, bring-your-own LLM and telephony.',
          'A dash (—) means the project\'s documentation does not state it, not that the feature is missing.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'How We Compared', anchor: 'how-we-compared' },
      { label: 'Comparison Table', anchor: 'comparison-table' },
      { label: 'Text-to-Speech: What Differs', anchor: 'tts-differences' },
      { label: 'Speech-to-Text: What Differs', anchor: 'stt-differences' },
      { label: 'Voice Agents: What Differs', anchor: 'agent-differences' },
      { label: 'What This Comparison Cannot Tell You', anchor: 'limitations' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Local voice tools are three different jobs — text-to-speech, speech-to-text and real-time voice agents — so the 17 tools in the PromptQuorum directory are compared within each job, using a table generated from the same tool data as each tool\'s own review.',
          },
          {
            type: 'plain-terms',
            text: 'Some tools read text aloud, some write down what you say, and some hold a spoken conversation with an AI. Comparing a reader with a transcriber on "voice cloning" makes no sense, so this guide compares like with like.',
          },
        ],
        items: [
          '17 tools, three jobs: text-to-speech (8), speech-to-text (7), real-time voice agents (4). Izwi and Willow Inference Server do both text-to-speech and speech-to-text, so they appear in both tables.',
          'The table is generated from each tool\'s record and checked against its official README or site; a dash means "not stated in the documentation", never "no".',
          'Licenses differ in ways that matter: for example Piper and OpenAI Edge TTS are GPL-3.0, Coqui TTS is MPL-2.0, XTTS-v2 uses the Coqui Public Model License, and Bark, StyleTTS 2, whisper.cpp and faster-whisper are MIT.',
          'Every tool name in the table links to its own PromptQuorum review, which is where installation steps and limits are covered.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'How We Compared',
        content: [
          'Each tool\'s facts — price, license, platforms, hardware needs and category-specific attributes — are stored once, in that tool\'s directory record. The comparison table below is generated from those records, and the tool\'s own review draws on the same record, so the two cannot state different values.',
          'Category-specific attributes (for example voice cloning or real-time transcription) were taken from each project\'s official README or website and checked against the exact wording there. Where the documentation is silent, the table shows a dash rather than guessing; where a claim is qualified (experimental, paid tier only, or dependent on a GPU), the attribute is left out of the table and covered in the tool\'s review instead.',
          'The comparison lists tools that run on your own hardware. It does not rank them: which one is right depends on your constraint, and the sections below point out where the real differences are.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        content:
          'Choose a job below, then read across a row. Click a tool name to open its full PromptQuorum review.',
        component: 'CategoryCompareTable',
      },
      ttsDifferences: {
        id: 'tts-differences',
        title: 'Text-to-Speech: What Differs',
        items: [
          '**License.** Bark and StyleTTS 2 are MIT-licensed. Coqui TTS is MPL-2.0. XTTS-v2 uses the Coqui Public Model License (CPML), a custom license with its own terms rather than a standard open-source one — read it before any commercial use. Piper and OpenAI Edge TTS are GPL-3.0, which places conditions on distributing modified versions. Check the license before building a product on any of them — see [Piper TTS](/power-local-llm/piper-tts-review) and [XTTS v2](/power-local-llm/xtts-v2-review).',
          '**Voice cloning.** Coqui TTS ([review](/power-local-llm/coqui-tts-review)), XTTS-v2 ([review](/power-local-llm/xtts-v2-review)), Izwi ([review](/power-local-llm/izwi-review)) and Willow Inference Server ([review](/power-local-llm/willow-inference-server-review)) document voice cloning or custom voices. [Bark](/power-local-llm/bark-tts-review) states that it does not support custom voice cloning.',
          '**Local API server.** Coqui TTS, Izwi, OpenAI Edge TTS, Piper and Willow Inference Server document a server component, so other apps can call them over HTTP; [OpenAI Edge TTS](/power-local-llm/openai-edge-tts-review) is built around that.',
          '**Languages.** Bark documents 13 languages and XTTS-v2 documents 17. The other tools do not state a comparable count, so the table shows a dash rather than a number.',
        ],
      },
      sttDifferences: {
        id: 'stt-differences',
        title: 'Speech-to-Text: What Differs',
        items: [
          '**Real-time transcription.** [whisper.cpp](/power-local-llm/whisper-cpp-review) documents a real-time streaming example, and Izwi and Willow Inference Server document real-time use. [faster-whisper](/power-local-llm/faster-whisper-review) is a transcription library; its own README does not document a real-time mode.',
          '**Speaker labels.** Izwi and FunClip document speaker labelling. [Meetily](/power-local-llm/meetily-review) offers speaker diarization only in its paid Pro tier. whisper.cpp\'s speaker-turn marking is experimental and is covered in its review rather than in the table.',
          '**Price and platform.** [MacWhisper](/power-local-llm/macwhisper-review) is a proprietary macOS app with a free tier and a paid upgrade; most other tools here are free and open source. Meetily\'s Community Edition is free and MIT-licensed, with a paid Pro tier.',
          '**Local API server.** whisper.cpp ships a server, and Izwi and Willow Inference Server document HTTP APIs.',
        ],
      },
      agentDifferences: {
        id: 'agent-differences',
        title: 'Voice Agents: What Differs',
        items: [
          '**Fully local versus optional cloud.** [Jarvis](/power-local-llm/jarvis-mac-review) documents a local speech-in, LLM, speech-out stack; [Parlor](/power-local-llm/parlor-review) documents a local pipeline with an optional cloud research feature. [Voxa](/power-local-llm/voxa-review) can use a local voice provider or cloud providers, so it is fully local only if you choose the local one.',
          '**Interruption (barge-in).** Jarvis, Parlor and Voxa document that you can interrupt the agent while it speaks.',
          '**Bring your own LLM and phone calls.** [Dograh](/power-local-llm/dograh-review) documents a choice of LLM and telephony integrations; [Voxa](/power-local-llm/voxa-review) documents connecting your own model through a local daemon.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What This Comparison Cannot Tell You',
        items: [
          'It compares documented capabilities, not quality. It says nothing about how natural a voice sounds or how accurate a transcript is — that needs your own audio and your own hardware.',
          'It does not include speed benchmarks: PromptQuorum has not measured them for these tools.',
          'Dashes are gaps in the projects\' documentation, not negative findings. Some tools may support a feature that their README does not mention.',
          'Tools change quickly. Each tool\'s review states the version it was checked against, and this guide is refreshed when a review is.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Why are text-to-speech, speech-to-text and voice agents compared separately?',
            a: 'They do different jobs, so most attributes only make sense within one job — voice cloning applies to text-to-speech, speaker labels to transcription, interruption to voice agents. Comparing them in one table would leave most cells empty or meaningless.',
          },
          {
            q: 'What does a dash in the comparison table mean?',
            a: 'It means the project\'s own documentation does not state that attribute. It does not mean the feature is missing; check the tool\'s review or its repository.',
          },
          {
            q: 'Are these tools really local?',
            a: 'They are designed to run on your own hardware, but some offer optional cloud features — for example Parlor\'s optional cloud research, or Voxa\'s cloud voice providers — and some need internet on first run to download models. Each tool\'s review covers this.',
          },
          {
            q: 'Do any of these tools have an affiliate link?',
            a: 'No. PromptQuorum has no affiliate relationship with any tool in this comparison at the time of writing, and no link here earns a commission.',
          },
          {
            q: 'How often is this comparison updated?',
            a: 'It is refreshed twice a year and whenever one of the listed tools\' reviews is updated, because the table is generated from the same data as those reviews.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Each tool\'s official README or website, listed in that tool\'s PromptQuorum review (linked from the comparison table).',
          '[PromptQuorum local AI app directory](/directory) — the record each row of the table is generated from.',
          '[AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained) — what the license families named above mean.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Software Directory](/directory) — browse all 200+ local AI apps and filter by category.',
          '[AI Tool Licenses Explained](/power-local-llm/ai-tool-licenses-explained) — how to read MIT, GPL, MPL and custom licenses.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Voice & Speech Tools Compared (2026): Text-to-Speech, Speech-to-Text and Voice Agents',
      description:
        'Compare 17 local voice tools side by side: text-to-speech, speech-to-text and real-time voice agents, from official project documentation.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
      inLanguage: 'en',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers and users choosing local voice tools' },
      about: [
        { '@type': 'Thing', name: 'Text-to-speech' },
        { '@type': 'Thing', name: 'Speech-to-text' },
        { '@type': 'Thing', name: 'Voice agents' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Local Voice & Speech Tools Compared (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-voice-audio-compared',
        },
      ],
    },
  },
}
