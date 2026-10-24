// Home Assistant Assist Review: Local Voice Control and LLM Agents
// Slug: home-assistant-assist-review
// Companion to: piper-tts-review, whisper-cpp-review, ollama-review, local-llm-voice-audio-compared
// Sources: home-assistant.io documentation (voice_control, local/cloud assistant guides, Ollama, OpenAI Conversation, Wyoming,
// Voice Preview Edition, installation, privacy policy), nabucasa.com/pricing and the GitHub release 2026.10.3 (home-assistant/core),
// all checked 2026-10-24 — no hands-on testing. Prices are as listed on the vendor pages (USD/EUR as stated), never converted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/home-assistant-assist-review-hero-en.webp',
    title: 'Home Assistant Assist Review: Local Voice Control and LLM Agents',
    seoTitle: 'Home Assistant Assist Review: Local Voice and LLMs',
    intro:
      'Assist is the voice assistant built into [Home Assistant](https://www.home-assistant.io/voice_control/), the open-source smart-home software. It can run entirely on your own hardware, with Whisper or Speech-to-Phrase for speech recognition and Piper for speech output connected through the Wyoming protocol, and it can hand requests to an LLM such as one served by Ollama. This review covers only that voice and LLM pipeline, not Home Assistant as a whole, and it is based on the project documentation rather than hands-on testing.',
    metaDescription:
      'Home Assistant Assist review: the built-in voice assistant runs locally with Whisper and Piper and can use Ollama LLM agents. Based on the docs, untested.',
    twitterDescription:
      'Home Assistant Assist review: local voice control with Whisper, Piper and Wyoming, plus Ollama LLM agents. What the docs confirm and what they leave open.',
    audience:
      'Home Assistant users and smart-home builders who want voice control that does not leave the home and need to know what the documentation confirms, what is experimental and what the cloud option costs.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Home Assistant Assist review',
    targetKeywords: [
      'home assistant assist review',
      'home assistant local voice assistant',
      'assist whisper piper wyoming',
      'home assistant ollama conversation agent',
      'offline voice control smart home',
      'home assistant voice preview edition',
      'home assistant llm voice assistant',
    ],
    current_models_mentioned: ['Whisper', 'Piper', 'Ollama'],
    current_hardware_mentioned: [
      'Raspberry Pi 4',
      'Intel NUC',
      'Home Assistant Green',
      'Voice Preview Edition',
    ],
    leadAnswerBlock:
      '**Assist (part of Home Assistant Core 2026.10.3, released on 23 October 2026) is the voice assistant inside the Home Assistant smart-home platform, and it can run fully on your own hardware.** It is not a standalone app: the full local pipeline needs Home Assistant OS, and an LLM agent is an optional, partly experimental add-on. Every statement here comes from the project documentation, not from testing.',
    quickAnswerTop: {
      en: {
        question: 'Can Assist run completely offline?',
        answer:
          'According to the documentation, yes: speech recognition, speech output and wake word detection can all run on your own hardware, and the local guide says "Your spoken commands never leave your home." Home Assistant Cloud and cloud LLMs are optional alternatives.',
        bullets: [
          'Built-in sentences control devices and areas without any LLM.',
          'Speech-to-Phrase is the fast, limited local recognizer; Whisper is the open-ended one.',
          'The Wyoming protocol connects recognizers, voices and wake word engines, including ones on another machine.',
          'Ollama and OpenAI can act as conversation agents on top of this.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is Assist?',
        anchor: 'what-is-assist',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Requirements',
        anchor: 'requirements',
      },
      {
        label: 'How to Get Started',
        anchor: 'getting-started',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Data Flow and Privacy',
        anchor: 'privacy',
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use',
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Frequently Asked Questions',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Assist is the open-source voice assistant inside Home Assistant that turns spoken or typed commands into smart-home actions, locally or with cloud and LLM help.',
          },
          {
            type: 'plain-terms',
            text:
              'You speak to a microphone device, a speech engine turns your words into text, Home Assistant matches the text to a device action or asks an LLM, and a voice reads the answer back.',
          },
        ],
        items: [
          'Maintenance: the repository was last pushed to on 24 October 2026, so no stale-project warning applies.',
          'License: Apache-2.0 open source, free to run; only Home Assistant Cloud and some voice hardware cost money.',
          'History: Assist was introduced in Home Assistant 2023.2; the Ollama integration followed in 2024.4.',
          'Scope: a voice layer inside a larger platform, so you run (or already run) a Home Assistant server.',
          'LLM control of the home is experimental and works only with models that support tools.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'This review is based on the Home Assistant documentation, the GitHub release page and the Nabu Casa pages, checked on 24 October 2026. PromptQuorum has not installed or timed the pipeline, so recognition quality, latency and LLM reliability are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-assist',
        title: 'What Is Assist?',
        content: [
          '**Assist is the voice and text assistant built into Home Assistant that maps commands to smart-home actions.** The documentation says it was introduced in Home Assistant 2023.2 and works in the companion app, on the Home Assistant Voice Preview Edition and on devices built with ESPHome.',
          'This review covers the Assist pipeline only: wake word, speech-to-text, conversation agent and text-to-speech. Home Assistant itself, with its device integrations and automations, is out of scope. The Wyoming Protocol integration, introduced in 2023.5, lets Home Assistant use local speech and wake word services.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Assist is not a separate download: you get it by installing Home Assistant, then adding speech services as apps.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          {
            Option: 'Home Assistant OS',
            'How to get it': '[Installation guide](https://www.home-assistant.io/installation/): Green, Raspberry Pi, Odroid, x86-64, VMs',
          },
          {
            Option: 'Container',
            'How to get it': 'Docker or similar on Linux; no access to apps, so no Whisper or Piper apps',
          },
          {
            Option: 'Companion app',
            'How to get it':
              '[Google Play](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android), [F-Droid](https://f-droid.org/packages/io.homeassistant.companion.android.minimal), [App Store](https://apps.apple.com/app/home-assistant/id1099568401)',
          },
          {
            Option: 'Voice hardware',
            'How to get it': '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/): $69 excl. tax or €59 incl. tax (MSRP)',
          },
          {
            Option: 'Home Assistant Cloud',
            'How to get it': '[Nabu Casa](https://www.nabucasa.com/pricing/): €7.50/month or €75/year excl. tax; 31-day trial',
          },
          {
            Option: 'Website',
            'How to get it': '[home-assistant.io/voice_control](https://www.home-assistant.io/voice_control/)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': '[home-assistant.io/privacy](https://www.home-assistant.io/privacy/)',
          },
          {
            Option: 'Source code',
            'How to get it': '[home-assistant/core](https://github.com/home-assistant/core), Apache-2.0',
          },
        ],
        note:
          'Version reviewed: Home Assistant Core 2026.10.3, released on 23 October 2026 per GitHub. Prices are as listed on the Voice Preview Edition and Nabu Casa pages on 24 October 2026; the Nabu Casa page also offers other currencies that were not checked.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The documentation gives timings for only a few reference devices, so sizing beyond them is guesswork.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          {
            Item: 'Operating system',
            'What the sources say': 'Home Assistant OS for the full pipeline; Container installs have no apps',
          },
          {
            Item: 'Speech-to-text',
            'What the sources say':
              'Speech-to-Phrase: under 1 second on a Green or Pi 4. Whisper: about 8 seconds on a Pi 4, under 1 second on an Intel NUC',
          },
          {
            Item: 'Text-to-speech',
            'What the sources say': 'Piper, optimized for the Pi 4: 1.6 seconds of speech per second with medium-quality models',
          },
          {
            Item: 'LLM agent',
            'What the sources say': 'An Ollama server reachable over the network; only models that support tools can control the home',
          },
          {
            Item: 'Exposed entities',
            'What the sources say': 'Fewer than 25 recommended for Ollama; context window defaults to 8k in Home Assistant, 2k in Ollama',
          },
          {
            Item: 'Wake word',
            'What the sources say':
              'Voice Preview Edition: on-device "Okay Nabu", "Hey Jarvis" or "Hey Mycroft"; openWakeWord is listed for Wyoming',
          },
        ],
        note: 'Quality varies by language, so check the language table for each option before you buy hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow the documentation; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install Home Assistant OS',
            whyItMatters: 'Use Home Assistant OS on a Green, Raspberry Pi, x86-64 machine or VM if you want the apps for local speech.',
          },
          {
            title: 'Add the speech services',
            whyItMatters:
              'Start the Whisper, Piper or Speech-to-Phrase apps; the Wyoming integration discovers them and you add them from there.',
          },
          {
            title: 'Create a voice assistant',
            whyItMatters:
              'Under Settings, Voice assistants, choose the speech engines and the conversation agent: the built-in one or an LLM such as Ollama.',
          },
          {
            title: 'Add a microphone',
            whyItMatters:
              'Use the companion app, a Voice Preview Edition or an ESPHome device, and expose only the entities you want controlled.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Everything below comes from the Home Assistant documentation; none of it has been independently tested.**',
        ],
        items: [
          '**Built-in and custom sentences.** Community-contributed sentences handle commands such as turning on a light; you can add your own under custom_sentences and handle them with intent_script, or start automations with sentence triggers.',
          '**Wyoming services.** The Wyoming Protocol integration connects Speech-to-Phrase, Whisper, Piper and openWakeWord, and can point to a service on another device on your network, which helps for heavy engines such as Whisper.',
          '**LLM conversation agents.** Ollama and OpenAI can answer through the Assist API and, with control enabled, act on the entities you expose.',
          '**Voice hardware.** Besides the Voice Preview Edition, the voice page lists ESPHome ESP32 satellites (a $13 build), an experimental Linux-Voice-Assistant for x64 or ARM64 systems, and an analog phone setup.',
          '**Tuning.** Fine-tuning options for Whisper and Piper are documented on each app\'s page.',
        ],
        note: 'Per the voice page, scripts can be exposed to LLMs and AI personalities can be configured.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**With Home Assistant Cloud, only the audio is sent to Nabu Casa for speech-to-text and text-to-speech, while the actions themselves still run on your own Home Assistant, per the documentation.** An Ollama agent talks to a server you host, and the Ollama page adds no privacy statement. The OpenAI integration is a cloud service that works only with the official OpenAI endpoint, and the entities you expose are what the model can control or report on.',
          'The Home Assistant privacy policy, last updated on 27 August 2026, says nothing is sent to Analytics unless you opt in, and it does not mention voice data. It states that Home Assistant Cloud is a separate commercial service under its provider\'s own privacy policy, which PromptQuorum did not review.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'These are the project\'s declarations, not audit results. PromptQuorum has not inspected network traffic or the source code of the voice pipeline.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Existing Home Assistant users** who want voice control without sending audio to a cloud service.',
          '**Tinkerers with a spare server or Raspberry Pi** who accept choosing and tuning speech engines per language.',
          '**People already running Ollama** who want to try an LLM agent on their home entities and accept its experimental status.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Recognition quality and speed.** The timings above are the documentation\'s; PromptQuorum measured nothing.',
          '**LLM reliability.** The documentation warns that smaller models make more mistakes with control enabled; how often is untested here.',
          '**Hardware sizing.** No minimum RAM or CPU is stated for Whisper or for Ollama models, and no model is recommended.',
          '**Cloud data handling.** The Nabu Casa privacy policy and retention terms were not reviewed.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[Jarvis](/power-local-llm/jarvis-mac-review)',
            Platforms: 'macOS',
            'Price / license': 'Free / open source',
            'Key difference': 'Single-computer desktop assistant with bundled Llama, Whisper and Kokoro, per its listing',
          },
          {
            App: '[Voxa](/power-local-llm/voxa-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Local-first desktop voice assistant with optional cloud voice',
          },
          {
            App: '[Dograh](/power-local-llm/dograh-review)',
            Platforms: 'Web (self-hosted)',
            'Price / license': 'Free self-hosted / BSD-2-Clause',
            'Key difference': 'Voice-agent platform with telephony and bring-your-own model',
          },
        ],
        note:
          'Assist is a pipeline inside a home-automation server, so these are the nearest voice assistants in the directory rather than direct substitutes; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need an LLM to use Assist?',
            a:
              'No. The built-in sentence matching handles device commands without one; an LLM agent is optional, and the Ollama page calls its control of Home Assistant experimental.',
          },
          {
            q: 'What can Speech-to-Phrase not do?',
            a:
              'It is a close-ended model that understands only a subset of Assist commands, so shopping lists, timers and broadcasts are not usable out of the box; Whisper tries to transcribe everything but is slower.',
          },
          {
            q: 'Does Ollama work with sentence triggers?',
            a:
              'No, the Ollama page says the integration does not work with sentence triggers. For small models it suggests two Ollama integrations on the same model, one without control for conversation and one with control for commands.',
          },
          {
            q: 'Will Assist work in my language?',
            a:
              'Language support is rated separately for local processing and for Home Assistant Cloud on a four-step scale from Not supported to Fully supported, so check the table for your language and engine first.',
          },
          {
            q: 'Can a phone listen for a wake word?',
            a:
              'The voice page says Android phones can use wake word detection, with "Hey Jarvis" and "Hey Nabu" as examples, and it does not describe the feature for iPhone.',
          },
          {
            q: 'Is the OpenAI integration free?',
            a:
              'No. The documentation calls it a paid service that needs an API key and advises monitoring costs and setting usage limits.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Assist is an actively developed way to add voice control to a Home Assistant system, with an offline route described in the documentation plus optional cloud and LLM routes. Against that, it needs a Home Assistant installation, the full local pipeline needs Home Assistant OS, Whisper is slower on small boards per the documentation, and LLM control is experimental. It suits existing Home Assistant users who want voice that stays in the house and are willing to tune it; anyone who wants a standalone voice assistant should look at the alternatives above.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Assist voice control](https://www.home-assistant.io/voice_control/) — overview, supported devices and languages.',
          '[Local voice assistant guide](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) — Speech-to-Phrase, Whisper, Piper and timings.',
          '[Home Assistant Cloud voice setup](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) — what is sent to the cloud.',
          '[Ollama integration](https://www.home-assistant.io/integrations/ollama/) — requirements, tools support and caveats.',
          '[OpenAI Conversation integration](https://www.home-assistant.io/integrations/openai_conversation/) — cloud service and paid API.',
          '[Wyoming Protocol integration](https://www.home-assistant.io/integrations/wyoming/) — supported voice services and setup.',
          '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/) — price, wake words and local processing.',
          '[Installation](https://www.home-assistant.io/installation/) — Home Assistant OS and Container.',
          '[Nabu Casa pricing](https://www.nabucasa.com/pricing/) — Home Assistant Cloud price and trial.',
          '[Home Assistant privacy policy](https://www.home-assistant.io/privacy/) — analytics and cloud scope.',
          '[Home Assistant Core 2026.10.3](https://github.com/home-assistant/core/releases/tag/2026.10.3) — release date and license.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Piper TTS Review](/power-local-llm/piper-tts-review) — the speech-output engine Assist offers for local voices.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — another way to run Whisper speech recognition locally.',
          '[Ollama Review](/power-local-llm/ollama-review) — the local LLM server the Ollama integration connects to.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant Assist Review: Local Voice Control and LLM Agents',
      description:
        'Home Assistant Assist review: the voice assistant built into Home Assistant, with a documented fully local pipeline (Whisper, Piper, Wyoming) and Ollama LLM agents. Requirements, privacy and what the documentation leaves unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/home-assistant-assist-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Home Assistant users evaluating a local voice assistant and LLM agents',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Home Assistant Assist',
        },
        {
          '@type': 'Thing',
          name: 'Local voice assistant',
        },
        {
          '@type': 'Thing',
          name: 'Wyoming protocol',
        },
        {
          '@type': 'Thing',
          name: 'Smart home',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/home-assistant-assist-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Home Assistant Assist Review',
          item: 'https://www.promptquorum.com/power-local-llm/home-assistant-assist-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/home-assistant-assist-review-hero-de.webp',
    title: 'Home-Assistant-Assist-Rezension: lokale Sprachsteuerung und LLM-Agenten',
    seoTitle: 'Home Assistant Assist: lokale Sprachsteuerung & LLMs',
    intro:
      'Assist ist der Sprachassistent in [Home Assistant](https://www.home-assistant.io/voice_control/), der Open-Source-Software für das Smart Home. Er kann vollständig auf Ihrer eigenen Hardware laufen: Whisper oder Speech-to-Phrase übernehmen die Spracherkennung, Piper die Sprachausgabe, verbunden über das Wyoming-Protokoll. Anfragen lassen sich zudem an ein LLM weitergeben, etwa an eines, das Ollama bereitstellt. Diese Rezension behandelt nur diese Sprach- und LLM-Pipeline, nicht Home Assistant insgesamt, und stützt sich auf die Projektdokumentation statt auf eigene Tests.',
    metaDescription:
      'Home-Assistant-Assist-Rezension: Der integrierte Sprachassistent läuft lokal mit Whisper und Piper, auf Wunsch mit Ollama-LLM-Agenten. Aus der Doku.',
    twitterDescription:
      'Home-Assistant-Assist-Rezension: lokale Sprachsteuerung mit Whisper, Piper und Wyoming sowie Ollama-LLM-Agenten. Was die Doku bestätigt und was offen bleibt.',
    audience:
      'Home-Assistant-Nutzer und Smart-Home-Bastler, die eine Sprachsteuerung wünschen, die im Haus bleibt, und wissen müssen, was die Dokumentation bestätigt, was experimentell ist und was die Cloud-Option kostet.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Home Assistant Assist Rezension',
    targetKeywords: [
      'home assistant assist rezension',
      'home assistant lokaler sprachassistent',
      'assist whisper piper wyoming',
      'home assistant ollama konversationsagent',
      'offline sprachsteuerung smart home',
      'home assistant voice preview edition',
      'home assistant llm sprachassistent',
    ],
    current_models_mentioned: ['Whisper', 'Piper', 'Ollama'],
    current_hardware_mentioned: [
      'Raspberry Pi 4',
      'Intel NUC',
      'Home Assistant Green',
      'Voice Preview Edition',
    ],
    leadAnswerBlock:
      '**Assist (Teil von Home Assistant Core 2026.10.3, veröffentlicht am 23. Oktober 2026) ist der Sprachassistent der Smart-Home-Plattform Home Assistant und kann vollständig auf Ihrer eigenen Hardware laufen.** Es ist keine eigenständige App: Die komplette lokale Pipeline setzt Home Assistant OS voraus, und ein LLM-Agent ist eine optionale, teils experimentelle Ergänzung. Jede Aussage hier stammt aus der Projektdokumentation, nicht aus Tests.',
    quickAnswerTop: {
      de: {
        question: 'Kann Assist komplett offline laufen?',
        answer:
          'Laut Dokumentation ja: Spracherkennung, Sprachausgabe und Wake-Word-Erkennung können auf Ihrer eigenen Hardware laufen, und die Anleitung für lokale Nutzung schreibt: „Your spoken commands never leave your home.“ Home Assistant Cloud und Cloud-LLMs sind optionale Alternativen.',
        bullets: [
          'Eingebaute Sätze steuern Geräte und Bereiche ganz ohne LLM.',
          'Speech-to-Phrase ist die schnelle, begrenzte lokale Erkennung; Whisper ist die offene.',
          'Das Wyoming-Protokoll verbindet Erkennung, Stimmen und Wake-Word-Engines, auch auf einem anderen Rechner.',
          'Ollama und OpenAI können darauf aufbauend als Konversationsagenten dienen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist Assist?',
        anchor: 'what-is-assist',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Anforderungen',
        anchor: 'requirements',
      },
      {
        label: 'So gelingt der Einstieg',
        anchor: 'getting-started',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Datenfluss und Datenschutz',
        anchor: 'privacy',
      },
      {
        label: 'Für wen sich die App eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Wettbewerber und Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq',
      },
      {
        label: 'Fazit',
        anchor: 'verdict',
      },
      {
        label: 'Quellen',
        anchor: 'sources',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Assist ist der Open-Source-Sprachassistent in Home Assistant, der gesprochene oder getippte Befehle in Smart-Home-Aktionen umsetzt, lokal oder mit Cloud- und LLM-Hilfe.',
          },
          {
            type: 'plain-terms',
            text:
              'Sie sprechen in ein Mikrofongerät, eine Sprach-Engine wandelt Ihre Worte in Text um, Home Assistant ordnet den Text einer Geräteaktion zu oder fragt ein LLM, und eine Stimme liest die Antwort vor.',
          },
        ],
        items: [
          'Pflege: Im Repository wurde zuletzt am 24. Oktober 2026 gepusht; ein Hinweis auf ein verwaistes Projekt entfällt.',
          'Lizenz: Open Source unter Apache-2.0, kostenlos nutzbar; nur Home Assistant Cloud und einige Sprach-Hardware kosten Geld.',
          'Geschichte: Assist kam mit Home Assistant 2023.2, die Ollama-Integration folgte mit 2024.4.',
          'Umfang: eine Sprachschicht innerhalb einer größeren Plattform, Sie betreiben also einen Home-Assistant-Server (oder tun es bereits).',
          'Die LLM-Steuerung des Hauses ist experimentell und funktioniert nur mit Modellen, die Tools unterstützen.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Diese Rezension stützt sich auf die Dokumentation von Home Assistant, die GitHub-Release-Seite und die Seiten von Nabu Casa, geprüft am 24. Oktober 2026. PromptQuorum hat die Pipeline weder installiert noch gemessen; Erkennungsqualität, Latenz und Zuverlässigkeit der LLMs werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-assist',
        title: 'Was ist Assist?',
        content: [
          '**Assist ist der in Home Assistant integrierte Sprach- und Textassistent, der Befehle in Smart-Home-Aktionen übersetzt.** Laut Dokumentation kam er mit Home Assistant 2023.2 und läuft in der Companion-App, auf der Home Assistant Voice Preview Edition und auf Geräten, die mit ESPHome gebaut sind.',
          'Diese Rezension behandelt nur die Assist-Pipeline: Wake Word, Spracherkennung, Konversationsagent und Sprachausgabe. Home Assistant selbst mit seinen Geräteintegrationen und Automatisierungen bleibt außen vor. Die Wyoming-Protocol-Integration, eingeführt mit 2023.5, lässt Home Assistant lokale Sprach- und Wake-Word-Dienste nutzen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Assist ist kein separater Download: Sie erhalten es mit der Installation von Home Assistant und ergänzen Sprachdienste anschließend als Apps.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          {
            Option: 'Home Assistant OS',
            Bezug:
              '[Installationsanleitung](https://www.home-assistant.io/installation/): Green, Raspberry Pi, Odroid, x86-64, VMs',
          },
          {
            Option: 'Container',
            Bezug: 'Docker o. Ä. unter Linux; kein Zugriff auf Apps, also keine Whisper- oder Piper-Apps',
          },
          {
            Option: 'Companion-App',
            Bezug:
              '[Google Play](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android), [F-Droid](https://f-droid.org/packages/io.homeassistant.companion.android.minimal), [App Store](https://apps.apple.com/app/home-assistant/id1099568401)',
          },
          {
            Option: 'Sprach-Hardware',
            Bezug: '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/): UVP 69 $ ohne Steuer oder 59 € inkl. Steuer',
          },
          {
            Option: 'Home Assistant Cloud',
            Bezug: '[Nabu Casa](https://www.nabucasa.com/pricing/): 7,50 €/Monat oder 75 €/Jahr ohne Steuer; 31 Tage Test',
          },
          {
            Option: 'Website',
            Bezug: '[home-assistant.io/voice_control](https://www.home-assistant.io/voice_control/)',
          },
          {
            Option: 'Datenschutzerklärung',
            Bezug: '[home-assistant.io/privacy](https://www.home-assistant.io/privacy/)',
          },
          {
            Option: 'Quellcode',
            Bezug: '[home-assistant/core](https://github.com/home-assistant/core), Apache-2.0',
          },
        ],
        note:
          'Geprüfte Version: Home Assistant Core 2026.10.3, laut GitHub am 23. Oktober 2026 veröffentlicht. Die Preise entsprechen den Angaben auf den Seiten zur Voice Preview Edition und von Nabu Casa am 24. Oktober 2026; die Nabu-Casa-Seite bietet weitere Währungen an, die nicht geprüft wurden.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Die Dokumentation nennt Zeiten nur für wenige Referenzgeräte; alles darüber hinaus ist Schätzarbeit.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          {
            Punkt: 'Betriebssystem',
            'Angaben der Quellen': 'Home Assistant OS für die komplette Pipeline; Container-Installationen haben keine Apps',
          },
          {
            Punkt: 'Spracherkennung',
            'Angaben der Quellen':
              'Speech-to-Phrase: unter 1 Sekunde auf Green oder Pi 4. Whisper: etwa 8 Sekunden auf dem Pi 4, unter 1 Sekunde auf einem Intel NUC',
          },
          {
            Punkt: 'Sprachausgabe',
            'Angaben der Quellen': 'Piper, für den Pi 4 optimiert: 1,6 Sekunden Sprache pro Sekunde bei Modellen mittlerer Qualität',
          },
          {
            Punkt: 'LLM-Agent',
            'Angaben der Quellen': 'Ein Ollama-Server im Netzwerk; nur Modelle mit Tool-Unterstützung können das Haus steuern',
          },
          {
            Punkt: 'Freigegebene Entitäten',
            'Angaben der Quellen': 'Für Ollama weniger als 25 empfohlen; Kontextfenster standardmäßig 8k in Home Assistant, 2k in Ollama',
          },
          {
            Punkt: 'Wake Word',
            'Angaben der Quellen':
              'Voice Preview Edition: „Okay Nabu“, „Hey Jarvis“ oder „Hey Mycroft“ auf dem Gerät; openWakeWord ist für Wyoming aufgeführt',
          },
        ],
        note:
          'Die Qualität hängt von der Sprache ab; prüfen Sie daher vor dem Hardwarekauf die Sprachtabelle für jede Option.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der Dokumentation; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Home Assistant OS installieren',
            whyItMatters:
              'Nutzen Sie Home Assistant OS auf einem Green, Raspberry Pi, x86-64-Rechner oder in einer VM, wenn Sie die Apps für lokale Sprache möchten.',
          },
          {
            title: 'Sprachdienste hinzufügen',
            whyItMatters:
              'Starten Sie die Apps Whisper, Piper oder Speech-to-Phrase; die Wyoming-Integration erkennt sie, und Sie fügen sie dort hinzu.',
          },
          {
            title: 'Sprachassistenten anlegen',
            whyItMatters:
              'Wählen Sie unter Einstellungen, Sprachassistenten die Sprach-Engines und den Konversationsagenten: den eingebauten oder ein LLM wie Ollama.',
          },
          {
            title: 'Mikrofon ergänzen',
            whyItMatters:
              'Nutzen Sie die Companion-App, eine Voice Preview Edition oder ein ESPHome-Gerät, und geben Sie nur die Entitäten frei, die gesteuert werden sollen.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alles Folgende stammt aus der Home-Assistant-Dokumentation; nichts davon wurde unabhängig getestet.**',
        ],
        items: [
          '**Eingebaute und eigene Sätze.** Von der Community beigetragene Sätze verarbeiten Befehle wie das Einschalten eines Lichts; eigene Sätze fügen Sie unter custom_sentences hinzu und verarbeiten sie mit intent_script, oder Sie starten Automatisierungen per Sentence-Trigger.',
          '**Wyoming-Dienste.** Die Wyoming-Protocol-Integration verbindet Speech-to-Phrase, Whisper, Piper und openWakeWord und kann auf einen Dienst auf einem anderen Gerät im Netzwerk verweisen, was bei aufwendigen Engines wie Whisper hilft.',
          '**LLM-Konversationsagenten.** Ollama und OpenAI können über die Assist-API antworten und bei aktivierter Steuerung auf die von Ihnen freigegebenen Entitäten zugreifen.',
          '**Sprach-Hardware.** Neben der Voice Preview Edition nennt die Sprachseite ESPHome-ESP32-Satelliten (ein Eigenbau für 13 $), ein experimentelles Linux-Voice-Assistant für x64- oder ARM64-Systeme und einen analogen Telefonaufbau.',
          '**Feinabstimmung.** Optionen zur Feinabstimmung von Whisper und Piper sind auf der Seite der jeweiligen App dokumentiert.',
        ],
        note: 'Laut Sprachseite lassen sich Skripte für LLMs freigeben und KI-Persönlichkeiten konfigurieren.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Bei Home Assistant Cloud wird laut Dokumentation nur das Audio zur Spracherkennung und Sprachausgabe an Nabu Casa gesendet, während die Aktionen selbst weiter auf Ihrem eigenen Home Assistant laufen.** Ein Ollama-Agent spricht mit einem Server, den Sie selbst betreiben, und die Ollama-Seite enthält keine Datenschutzaussage. Die OpenAI-Integration ist ein Cloud-Dienst, der nur mit dem offiziellen OpenAI-Endpunkt funktioniert; die freigegebenen Entitäten sind das, was das Modell steuern oder abfragen kann.',
          'Die Datenschutzerklärung von Home Assistant, zuletzt am 27. August 2026 aktualisiert, besagt, dass nichts an Analytics gesendet wird, solange Sie nicht zustimmen, und erwähnt keine Sprachdaten. Sie nennt Home Assistant Cloud einen eigenständigen kommerziellen Dienst, für den die Datenschutzerklärung des Anbieters gilt; PromptQuorum hat diese nicht geprüft.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Dies sind Erklärungen des Projekts, keine Prüfergebnisse. PromptQuorum hat weder den Netzwerkverkehr noch den Quellcode der Sprach-Pipeline untersucht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Bestehende Home-Assistant-Nutzer**, die Sprachsteuerung ohne Audio-Upload in eine Cloud wünschen.',
          '**Bastler mit einem freien Server oder Raspberry Pi**, die Sprach-Engines je Sprache auswählen und abstimmen möchten.',
          '**Wer bereits Ollama betreibt** und einen LLM-Agenten an den eigenen Hausentitäten ausprobieren will, trotz des experimentellen Status.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Erkennungsqualität und Tempo.** Die obigen Zeiten stammen aus der Dokumentation; PromptQuorum hat nichts gemessen.',
          '**Zuverlässigkeit der LLMs.** Die Dokumentation warnt, dass kleinere Modelle bei aktivierter Steuerung mehr Fehler machen; wie oft, wurde hier nicht getestet.',
          '**Hardware-Dimensionierung.** Für Whisper oder Ollama-Modelle ist weder ein Mindest-RAM noch eine Mindest-CPU genannt, und kein Modell wird empfohlen.',
          '**Umgang mit Cloud-Daten.** Die Datenschutzerklärung und die Aufbewahrungsfristen von Nabu Casa wurden nicht geprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          {
            App: '[Jarvis](/de/power-local-llm/jarvis-mac-review)',
            Plattformen: 'macOS',
            'Preis / Lizenz': 'Kostenlos / Open Source',
            'Wichtigster Unterschied': 'Desktop-Assistent für einen Rechner mit mitgeliefertem Llama, Whisper und Kokoro, laut Eintrag',
          },
          {
            App: '[Voxa](/de/power-local-llm/voxa-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Lokaler Desktop-Sprachassistent mit optionaler Cloud-Stimme',
          },
          {
            App: '[Dograh](/de/power-local-llm/dograh-review)',
            Plattformen: 'Web (selbst gehostet)',
            'Preis / Lizenz': 'Selbst gehostet kostenlos / BSD-2-Clause',
            'Wichtigster Unterschied': 'Plattform für Sprachagenten mit Telefonie und eigenem Modell',
          },
        ],
        note:
          'Assist ist eine Pipeline innerhalb eines Hausautomations-Servers; die Tabelle nennt daher die nächstliegenden Sprachassistenten im Verzeichnis, keine direkten Ersatzlösungen. Prüfen Sie Preis, Lizenz und Plattformen jeweils auf der Seite der App.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Brauche ich ein LLM, um Assist zu nutzen?',
            a:
              'Nein. Die eingebaute Satzerkennung verarbeitet Gerätebefehle auch ohne; ein LLM-Agent ist optional, und die Ollama-Seite nennt dessen Steuerung von Home Assistant experimentell.',
          },
          {
            q: 'Was kann Speech-to-Phrase nicht?',
            a:
              'Es ist ein geschlossenes Modell, das nur einen Teil der Assist-Befehle versteht; Einkaufslisten, Timer und Durchsagen sind daher ab Werk nicht nutzbar. Whisper versucht alles zu transkribieren, ist aber langsamer.',
          },
          {
            q: 'Funktioniert Ollama mit Sentence-Triggern?',
            a:
              'Nein, laut Ollama-Seite funktioniert die Integration nicht mit Sentence-Triggern. Für kleine Modelle wird empfohlen, zwei Ollama-Integrationen mit demselben Modell anzulegen: eine ohne Steuerung für Gespräche und eine mit Steuerung für Befehle.',
          },
          {
            q: 'Funktioniert Assist in meiner Sprache?',
            a:
              'Die Sprachunterstützung wird für lokale Verarbeitung und für Home Assistant Cloud getrennt auf einer vierstufigen Skala von „Nicht unterstützt“ bis „Vollständig unterstützt“ bewertet; prüfen Sie zuerst die Tabelle für Ihre Sprache und Engine.',
          },
          {
            q: 'Kann ein Smartphone auf ein Wake Word hören?',
            a:
              'Laut Sprachseite können Android-Telefone Wake-Word-Erkennung nutzen, Beispiele sind „Hey Jarvis“ und „Hey Nabu“; für das iPhone beschreibt sie die Funktion nicht.',
          },
          {
            q: 'Ist die OpenAI-Integration kostenlos?',
            a:
              'Nein. Die Dokumentation nennt sie einen kostenpflichtigen Dienst, der einen API-Schlüssel braucht, und rät dazu, die Kosten zu beobachten und Nutzungslimits zu setzen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Assist ist ein aktiv weiterentwickelter Weg, ein Home-Assistant-System um Sprachsteuerung zu ergänzen, mit dokumentierter vollständig lokaler Route sowie optionalen Cloud- und LLM-Routen. Dem stehen gegenüber: Es braucht eine Home-Assistant-Installation, die komplette lokale Pipeline setzt Home Assistant OS voraus, Whisper ist laut Dokumentation auf kleinen Boards langsamer, und die LLM-Steuerung ist experimentell. Es eignet sich für bestehende Home-Assistant-Nutzer, die Sprache im Haus halten und bereit sind, sie abzustimmen; wer einen eigenständigen Sprachassistenten sucht, sollte sich die Alternativen oben ansehen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Assist-Sprachsteuerung](https://www.home-assistant.io/voice_control/) — Überblick, unterstützte Geräte und Sprachen.',
          '[Anleitung für den lokalen Sprachassistenten](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) — Speech-to-Phrase, Whisper, Piper und Zeitangaben.',
          '[Sprach-Einrichtung mit Home Assistant Cloud](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) — was an die Cloud gesendet wird.',
          '[Ollama-Integration](https://www.home-assistant.io/integrations/ollama/) — Voraussetzungen, Tool-Unterstützung und Einschränkungen.',
          '[OpenAI-Conversation-Integration](https://www.home-assistant.io/integrations/openai_conversation/) — Cloud-Dienst und kostenpflichtige API.',
          '[Wyoming-Protocol-Integration](https://www.home-assistant.io/integrations/wyoming/) — unterstützte Sprachdienste und Einrichtung.',
          '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/) — Preis, Wake Words und lokale Verarbeitung.',
          '[Installation](https://www.home-assistant.io/installation/) — Home Assistant OS und Container.',
          '[Preise von Nabu Casa](https://www.nabucasa.com/pricing/) — Preis und Testzeitraum von Home Assistant Cloud.',
          '[Datenschutzerklärung von Home Assistant](https://www.home-assistant.io/privacy/) — Analytics und Geltungsbereich der Cloud.',
          '[Home Assistant Core 2026.10.3](https://github.com/home-assistant/core/releases/tag/2026.10.3) — Veröffentlichungsdatum und Lizenz.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Piper-TTS-Rezension](/de/power-local-llm/piper-tts-review) — die Sprachausgabe-Engine, die Assist für lokale Stimmen anbietet.',
          '[Whisper.cpp-Rezension](/de/power-local-llm/whisper-cpp-review) — eine weitere Möglichkeit, Whisper-Spracherkennung lokal zu betreiben.',
          '[Ollama-Rezension](/de/power-local-llm/ollama-review) — der lokale LLM-Server, mit dem sich die Ollama-Integration verbindet.',
          '[Sprach- und Audio-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) — der Kategorievergleich, zu dem diese Rezension gehört.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/home-assistant-assist-review-hero-es.webp',
    title: 'Reseña de Home Assistant Assist: control por voz local y agentes LLM',
    seoTitle: 'Reseña de Home Assistant Assist: voz local y agentes LLM',
    intro:
      'Assist es el asistente de voz integrado en [Home Assistant](https://www.home-assistant.io/voice_control/), el software de código abierto para el hogar inteligente. Puede funcionar por completo en tu propio hardware: Whisper o Speech-to-Phrase se encargan del reconocimiento de voz y Piper de la salida de voz, conectados mediante el protocolo Wyoming. También puede pasar las peticiones a un LLM, por ejemplo uno servido con Ollama. Esta reseña cubre solo esa canalización de voz y LLM, no Home Assistant en conjunto, y se basa en la documentación del proyecto y no en pruebas prácticas.',
    metaDescription:
      'Reseña de Home Assistant Assist: asistente de voz integrado que funciona en local con Whisper y Piper y admite agentes LLM de Ollama. Sin pruebas.',
    twitterDescription:
      'Reseña de Home Assistant Assist: control por voz local con Whisper, Piper y Wyoming, más agentes LLM de Ollama. Lo que confirma la documentación y lo que deja abierto.',
    audience:
      'Usuarios de Home Assistant y aficionados al hogar inteligente que quieren un control por voz que se quede en casa y necesitan saber qué confirma la documentación, qué es experimental y cuánto cuesta la opción en la nube.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Home Assistant Assist',
    targetKeywords: [
      'reseña home assistant assist',
      'asistente de voz local home assistant',
      'assist whisper piper wyoming',
      'agente de conversación ollama home assistant',
      'control por voz sin conexión hogar inteligente',
      'home assistant voice preview edition',
      'asistente de voz llm home assistant',
    ],
    current_models_mentioned: ['Whisper', 'Piper', 'Ollama'],
    current_hardware_mentioned: [
      'Raspberry Pi 4',
      'Intel NUC',
      'Home Assistant Green',
      'Voice Preview Edition',
    ],
    leadAnswerBlock:
      '**Assist (parte de Home Assistant Core 2026.10.3, publicado el 23 de octubre de 2026) es el asistente de voz de la plataforma de hogar inteligente Home Assistant y puede funcionar por completo en tu propio hardware.** No es una app independiente: la canalización local completa necesita Home Assistant OS, y un agente LLM es un complemento opcional y en parte experimental. Todo lo que aparece aquí procede de la documentación del proyecto, no de pruebas.',
    quickAnswerTop: {
      es: {
        question: '¿Puede Assist funcionar totalmente sin conexión?',
        answer:
          'Según la documentación, sí: el reconocimiento de voz, la salida de voz y la detección de la palabra de activación pueden ejecutarse en tu propio hardware, y la guía local dice «Your spoken commands never leave your home.». Home Assistant Cloud y los LLM en la nube son alternativas opcionales.',
        bullets: [
          'Las frases integradas controlan dispositivos y zonas sin ningún LLM.',
          'Speech-to-Phrase es el reconocimiento local rápido pero limitado; Whisper es el abierto.',
          'El protocolo Wyoming conecta reconocimiento, voces y motores de palabra de activación, también en otra máquina.',
          'Ollama y OpenAI pueden actuar como agentes de conversación encima de todo esto.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es Assist?',
        anchor: 'what-is-assist',
      },
      {
        label: 'Dónde conseguirlo',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
      },
      {
        label: 'Cómo empezar',
        anchor: 'getting-started',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Flujo de datos y privacidad',
        anchor: 'privacy',
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use',
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fuentes',
        anchor: 'sources',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Assist es el asistente de voz de código abierto de Home Assistant que convierte órdenes habladas o escritas en acciones del hogar inteligente, en local o con ayuda de la nube y de un LLM.',
          },
          {
            type: 'plain-terms',
            text:
              'Hablas a un dispositivo con micrófono, un motor de voz convierte tus palabras en texto, Home Assistant lo asocia a una acción o consulta a un LLM, y una voz lee la respuesta.',
          },
        ],
        items: [
          'Mantenimiento: el repositorio recibió su último push el 24 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Licencia: código abierto Apache-2.0, gratis de ejecutar; solo Home Assistant Cloud y algún hardware de voz cuestan dinero.',
          'Historia: Assist se introdujo en Home Assistant 2023.2; la integración con Ollama llegó con 2024.4.',
          'Alcance: una capa de voz dentro de una plataforma mayor, así que necesitas (o ya tienes) un servidor Home Assistant.',
          'El control de la casa mediante LLM es experimental y solo funciona con modelos compatibles con herramientas.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Esta reseña se basa en la documentación de Home Assistant, la página de versiones de GitHub y las páginas de Nabu Casa, consultadas el 24 de octubre de 2026. PromptQuorum no ha instalado ni cronometrado la canalización, por lo que no se evalúan la calidad del reconocimiento, la latencia ni la fiabilidad de los LLM.',
          },
        ],
      },
      overview: {
        id: 'what-is-assist',
        title: '¿Qué es Assist?',
        content: [
          '**Assist es el asistente de voz y texto integrado en Home Assistant que asocia órdenes con acciones del hogar inteligente.** Según la documentación, se introdujo en Home Assistant 2023.2 y funciona en la app complementaria, en la Home Assistant Voice Preview Edition y en dispositivos creados con ESPHome.',
          'Esta reseña cubre solo la canalización de Assist: palabra de activación, voz a texto, agente de conversación y texto a voz. Home Assistant en sí, con sus integraciones de dispositivos y automatizaciones, queda fuera. La integración Wyoming Protocol, introducida en 2023.5, permite a Home Assistant usar servicios locales de voz y de palabra de activación.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Assist no es una descarga aparte: se obtiene instalando Home Assistant y añadiendo después los servicios de voz como apps.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          {
            'Opción': 'Home Assistant OS',
            'Cómo conseguirlo':
              '[Guía de instalación](https://www.home-assistant.io/installation/): Green, Raspberry Pi, Odroid, x86-64, máquinas virtuales',
          },
          {
            'Opción': 'Contenedor',
            'Cómo conseguirlo': 'Docker o similar en Linux; sin acceso a apps, así que sin las apps de Whisper ni Piper',
          },
          {
            'Opción': 'App complementaria',
            'Cómo conseguirlo':
              '[Google Play](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android), [F-Droid](https://f-droid.org/packages/io.homeassistant.companion.android.minimal), [App Store](https://apps.apple.com/app/home-assistant/id1099568401)',
          },
          {
            'Opción': 'Hardware de voz',
            'Cómo conseguirlo':
              '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/): 69 $ sin impuestos o 59 € con impuestos (PVP recomendado)',
          },
          {
            'Opción': 'Home Assistant Cloud',
            'Cómo conseguirlo': '[Nabu Casa](https://www.nabucasa.com/pricing/): 7,50 €/mes o 75 €/año sin impuestos; 31 días de prueba',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[home-assistant.io/voice_control](https://www.home-assistant.io/voice_control/)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': '[home-assistant.io/privacy](https://www.home-assistant.io/privacy/)',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[home-assistant/core](https://github.com/home-assistant/core), Apache-2.0',
          },
        ],
        note:
          'Versión revisada: Home Assistant Core 2026.10.3, publicada el 23 de octubre de 2026 según GitHub. Los precios son los que figuran en las páginas de Voice Preview Edition y de Nabu Casa el 24 de octubre de 2026; la página de Nabu Casa ofrece otras monedas que no se comprobaron.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**La documentación solo da tiempos para unos pocos dispositivos de referencia; el dimensionamiento más allá es una estimación.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          {
            Elemento: 'Sistema operativo',
            'Qué dicen las fuentes': 'Home Assistant OS para la canalización completa; las instalaciones en contenedor no tienen apps',
          },
          {
            Elemento: 'Voz a texto',
            'Qué dicen las fuentes':
              'Speech-to-Phrase: menos de 1 segundo en Green o Pi 4. Whisper: unos 8 segundos en Pi 4, menos de 1 segundo en un Intel NUC',
          },
          {
            Elemento: 'Texto a voz',
            'Qué dicen las fuentes': 'Piper, optimizado para la Pi 4: 1,6 segundos de voz por segundo con modelos de calidad media',
          },
          {
            Elemento: 'Agente LLM',
            'Qué dicen las fuentes': 'Un servidor Ollama accesible por red; solo los modelos compatibles con herramientas pueden controlar la casa',
          },
          {
            Elemento: 'Entidades expuestas',
            'Qué dicen las fuentes': 'Se recomiendan menos de 25 para Ollama; ventana de contexto de 8k por defecto en Home Assistant, 2k en Ollama',
          },
          {
            Elemento: 'Palabra de activación',
            'Qué dicen las fuentes':
              'Voice Preview Edition: «Okay Nabu», «Hey Jarvis» o «Hey Mycroft» en el dispositivo; openWakeWord figura para Wyoming',
          },
        ],
        note:
          'La calidad varía según el idioma, así que consulta la tabla de idiomas de cada opción antes de comprar hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Estos pasos siguen la documentación; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala Home Assistant OS',
            whyItMatters:
              'Usa Home Assistant OS en un Green, una Raspberry Pi, un equipo x86-64 o una máquina virtual si quieres las apps para voz local.',
          },
          {
            title: 'Añade los servicios de voz',
            whyItMatters: 'Inicia las apps Whisper, Piper o Speech-to-Phrase; la integración Wyoming las descubre y las añades desde ahí.',
          },
          {
            title: 'Crea un asistente de voz',
            whyItMatters:
              'En Ajustes, Asistentes de voz, elige los motores de voz y el agente de conversación: el integrado o un LLM como Ollama.',
          },
          {
            title: 'Añade un micrófono',
            whyItMatters:
              'Usa la app complementaria, una Voice Preview Edition o un dispositivo ESPHome, y expón solo las entidades que quieras controlar.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo siguiente procede de la documentación de Home Assistant; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Frases integradas y personalizadas.** Frases aportadas por la comunidad gestionan órdenes como encender una luz; puedes añadir las tuyas en custom_sentences y tratarlas con intent_script, o iniciar automatizaciones con disparadores de frase (sentence triggers).',
          '**Servicios Wyoming.** La integración Wyoming Protocol conecta Speech-to-Phrase, Whisper, Piper y openWakeWord, y puede apuntar a un servicio en otro dispositivo de tu red, lo que ayuda con motores pesados como Whisper.',
          '**Agentes de conversación LLM.** Ollama y OpenAI pueden responder a través de la API de Assist y, con el control activado, actuar sobre las entidades que expongas.',
          '**Hardware de voz.** Además de la Voice Preview Edition, la página de voz menciona satélites ESPHome ESP32 (un montaje de 13 $), un Linux-Voice-Assistant experimental para sistemas x64 o ARM64 y un montaje con teléfono analógico.',
          '**Ajustes.** Las opciones de ajuste fino de Whisper y Piper están documentadas en la página de cada app.',
        ],
        note: 'Según la página de voz, se pueden exponer scripts a los LLM y configurar personalidades de IA.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**Con Home Assistant Cloud, solo el audio se envía a Nabu Casa para el reconocimiento y la síntesis de voz, mientras que las acciones se siguen ejecutando en tu propio Home Assistant, según la documentación.** Un agente Ollama habla con un servidor que alojas tú, y la página de Ollama no añade ninguna declaración de privacidad. La integración de OpenAI es un servicio en la nube que solo funciona con el punto de acceso oficial de OpenAI; las entidades que expones son las que el modelo puede controlar o consultar.',
          'La política de privacidad de Home Assistant, actualizada el 27 de agosto de 2026, afirma que no se envía nada a Analytics salvo que lo aceptes, y no menciona datos de voz. Indica que Home Assistant Cloud es un servicio comercial independiente sujeto a la política de privacidad de su proveedor, que PromptQuorum no revisó.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Son declaraciones del proyecto, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red ni el código fuente de la canalización de voz.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios actuales de Home Assistant** que quieren control por voz sin enviar audio a un servicio en la nube.',
          '**Aficionados con un servidor o una Raspberry Pi libres** que aceptan elegir y ajustar los motores de voz idioma por idioma.',
          '**Quienes ya usan Ollama** y quieren probar un agente LLM sobre las entidades de su casa, aceptando su estado experimental.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad y velocidad de reconocimiento.** Los tiempos anteriores son los de la documentación; PromptQuorum no midió nada.',
          '**Fiabilidad de los LLM.** La documentación advierte de que los modelos pequeños cometen más errores con el control activado; con qué frecuencia no se ha probado aquí.',
          '**Dimensionamiento del hardware.** No se indica RAM ni CPU mínimas para Whisper ni para los modelos de Ollama, y no se recomienda ningún modelo.',
          '**Tratamiento de datos en la nube.** La política de privacidad y los plazos de conservación de Nabu Casa no se revisaron.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[Jarvis](/es/power-local-llm/jarvis-mac-review)',
            Plataformas: 'macOS',
            'Precio / licencia': 'Gratis / código abierto',
            'Diferencia clave': 'Asistente de escritorio para un solo equipo con Llama, Whisper y Kokoro incluidos, según su ficha',
          },
          {
            App: '[Voxa](/es/power-local-llm/voxa-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Asistente de voz de escritorio local primero, con voz en la nube opcional',
          },
          {
            App: '[Dograh](/es/power-local-llm/dograh-review)',
            Plataformas: 'Web (autoalojado)',
            'Precio / licencia': 'Gratis autoalojado / BSD-2-Clause',
            'Diferencia clave': 'Plataforma de agentes de voz con telefonía y modelo propio',
          },
        ],
        note:
          'Assist es una canalización dentro de un servidor de domótica, así que estos son los asistentes de voz más cercanos del directorio y no sustitutos directos; confirma el precio, la licencia y las plataformas actuales en la página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesito un LLM para usar Assist?',
            a:
              'No. El reconocimiento de frases integrado gestiona las órdenes de dispositivos sin él; un agente LLM es opcional, y la página de Ollama califica de experimental su control de Home Assistant.',
          },
          {
            q: '¿Qué no puede hacer Speech-to-Phrase?',
            a:
              'Es un modelo cerrado que solo entiende una parte de las órdenes de Assist, así que las listas de la compra, los temporizadores y los anuncios no se pueden usar de serie. Whisper intenta transcribirlo todo, pero es más lento.',
          },
          {
            q: '¿Funciona Ollama con los disparadores de frase?',
            a:
              'No, la página de Ollama indica que la integración no funciona con disparadores de frase. Para modelos pequeños sugiere dos integraciones de Ollama con el mismo modelo: una sin control para conversar y otra con control para órdenes.',
          },
          {
            q: '¿Funcionará Assist en mi idioma?',
            a:
              'La compatibilidad de idiomas se califica por separado para el procesamiento local y para Home Assistant Cloud, en una escala de cuatro niveles desde «No compatible» hasta «Totalmente compatible»; consulta primero la tabla para tu idioma y motor.',
          },
          {
            q: '¿Puede un teléfono escuchar una palabra de activación?',
            a:
              'La página de voz dice que los teléfonos Android pueden usar la detección de palabra de activación, con «Hey Jarvis» y «Hey Nabu» como ejemplos, y no describe la función para iPhone.',
          },
          {
            q: '¿Es gratuita la integración de OpenAI?',
            a:
              'No. La documentación la describe como un servicio de pago que requiere una clave de API y aconseja vigilar los costes y fijar límites de uso.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Assist es una forma de desarrollo activo de añadir control por voz a un sistema Home Assistant, con una ruta totalmente local documentada y rutas opcionales en la nube y con LLM. A cambio, necesita una instalación de Home Assistant, la canalización local completa requiere Home Assistant OS, Whisper es más lento en placas pequeñas según la documentación y el control con LLM es experimental. Encaja con usuarios de Home Assistant que quieren que la voz se quede en casa y están dispuestos a ajustarla; quien busque un asistente de voz independiente debería mirar las alternativas de arriba.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Control por voz de Assist](https://www.home-assistant.io/voice_control/) — visión general, dispositivos e idiomas compatibles.',
          '[Guía del asistente de voz local](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) — Speech-to-Phrase, Whisper, Piper y tiempos.',
          '[Configuración de voz con Home Assistant Cloud](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) — qué se envía a la nube.',
          '[Integración de Ollama](https://www.home-assistant.io/integrations/ollama/) — requisitos, compatibilidad con herramientas y limitaciones.',
          '[Integración OpenAI Conversation](https://www.home-assistant.io/integrations/openai_conversation/) — servicio en la nube y API de pago.',
          '[Integración Wyoming Protocol](https://www.home-assistant.io/integrations/wyoming/) — servicios de voz compatibles y configuración.',
          '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/) — precio, palabras de activación y procesamiento local.',
          '[Instalación](https://www.home-assistant.io/installation/) — Home Assistant OS y contenedor.',
          '[Precios de Nabu Casa](https://www.nabucasa.com/pricing/) — precio y prueba de Home Assistant Cloud.',
          '[Política de privacidad de Home Assistant](https://www.home-assistant.io/privacy/) — analítica y alcance de la nube.',
          '[Home Assistant Core 2026.10.3](https://github.com/home-assistant/core/releases/tag/2026.10.3) — fecha de publicación y licencia.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Piper TTS](/es/power-local-llm/piper-tts-review) — el motor de salida de voz que Assist ofrece para voces locales.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — otra forma de ejecutar el reconocimiento de voz Whisper en local.',
          '[Reseña de Ollama](/es/power-local-llm/ollama-review) — el servidor LLM local al que se conecta la integración de Ollama.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/home-assistant-assist-review-hero-fr.webp',
    title: 'Avis Home Assistant Assist : commande vocale locale et agents LLM',
    seoTitle: 'Home Assistant Assist : voix locale et agents LLM',
    intro:
      'Assist est l’assistant vocal intégré à [Home Assistant](https://www.home-assistant.io/voice_control/), le logiciel domotique open source. Il peut fonctionner entièrement sur votre propre matériel : Whisper ou Speech-to-Phrase assurent la reconnaissance vocale et Piper la synthèse, reliés par le protocole Wyoming. Il peut aussi transmettre les demandes à un LLM, par exemple servi par Ollama. Cet avis ne couvre que ce pipeline vocal et LLM, pas Home Assistant dans son ensemble, et s’appuie sur la documentation du projet plutôt que sur des tests pratiques.',
    metaDescription:
      'Avis Home Assistant Assist : l’assistant vocal intégré tourne en local avec Whisper et Piper et gère les agents LLM Ollama. Basé sur la documentation.',
    twitterDescription:
      'Avis Home Assistant Assist : commande vocale locale avec Whisper, Piper et Wyoming, plus agents LLM Ollama. Ce que la documentation confirme et ce qu’elle laisse ouvert.',
    audience:
      'Utilisateurs de Home Assistant et bricoleurs domotiques qui veulent une commande vocale qui reste à la maison et doivent savoir ce que la documentation confirme, ce qui est expérimental et ce que coûte l’option cloud.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis Home Assistant Assist',
    targetKeywords: [
      'avis home assistant assist',
      'assistant vocal local home assistant',
      'assist whisper piper wyoming',
      'agent conversationnel ollama home assistant',
      'commande vocale hors ligne maison connectée',
      'home assistant voice preview edition',
      'assistant vocal llm home assistant',
    ],
    current_models_mentioned: ['Whisper', 'Piper', 'Ollama'],
    current_hardware_mentioned: [
      'Raspberry Pi 4',
      'Intel NUC',
      'Home Assistant Green',
      'Voice Preview Edition',
    ],
    leadAnswerBlock:
      '**Assist (intégré à Home Assistant Core 2026.10.3, publié le 23 octobre 2026) est l’assistant vocal de la plateforme domotique Home Assistant, et il peut fonctionner entièrement sur votre propre matériel.** Ce n’est pas une application autonome : le pipeline local complet exige Home Assistant OS, et un agent LLM est un module complémentaire facultatif, en partie expérimental. Chaque affirmation ici provient de la documentation du projet, pas de tests.',
    quickAnswerTop: {
      fr: {
        question: 'Assist peut-il fonctionner entièrement hors ligne ?',
        answer:
          'Selon la documentation, oui : la reconnaissance vocale, la synthèse vocale et la détection du mot d’activation peuvent toutes tourner sur votre propre matériel, et le guide local indique « Your spoken commands never leave your home. » Home Assistant Cloud et les LLM cloud sont des alternatives facultatives.',
        bullets: [
          'Les phrases intégrées commandent appareils et pièces sans aucun LLM.',
          'Speech-to-Phrase est la reconnaissance locale rapide mais limitée ; Whisper est l’option ouverte.',
          'Le protocole Wyoming relie reconnaissance, voix et moteurs de mot d’activation, y compris sur une autre machine.',
          'Ollama et OpenAI peuvent servir d’agents conversationnels par-dessus.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu’est-ce que Assist ?',
        anchor: 'what-is-assist',
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Prérequis',
        anchor: 'requirements',
      },
      {
        label: 'Premiers pas',
        anchor: 'getting-started',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Flux de données et confidentialité',
        anchor: 'privacy',
      },
      {
        label: 'À qui elle s’adresse',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n’avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Lectures associées',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Assist est l’assistant vocal open source de Home Assistant qui transforme des commandes dites ou saisies en actions domotiques, en local ou avec l’aide du cloud et d’un LLM.',
          },
          {
            type: 'plain-terms',
            text:
              'Vous parlez à un appareil doté d’un micro, un moteur vocal convertit vos mots en texte, Home Assistant associe le texte à une action ou interroge un LLM, et une voix lit la réponse.',
          },
        ],
        items: [
          'Maintenance : le dépôt a reçu son dernier push le 24 octobre 2026, donc aucun avertissement de projet délaissé ne s’applique.',
          'Licence : open source Apache-2.0, gratuit à exécuter ; seuls Home Assistant Cloud et certains appareils vocaux sont payants.',
          'Historique : Assist est apparu avec Home Assistant 2023.2 ; l’intégration Ollama a suivi avec 2024.4.',
          'Périmètre : une couche vocale dans une plateforme plus vaste, donc vous exploitez (ou exploitez déjà) un serveur Home Assistant.',
          'Le pilotage de la maison par LLM est expérimental et ne fonctionne qu’avec des modèles compatibles avec les outils.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Cet avis repose sur la documentation de Home Assistant, la page de version GitHub et les pages de Nabu Casa, consultées le 24 octobre 2026. PromptQuorum n’a ni installé ni chronométré le pipeline ; la qualité de reconnaissance, la latence et la fiabilité des LLM ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-assist',
        title: 'Qu’est-ce que Assist ?',
        content: [
          '**Assist est l’assistant vocal et textuel intégré à Home Assistant qui associe des commandes à des actions domotiques.** Selon la documentation, il est apparu avec Home Assistant 2023.2 et fonctionne dans l’application compagnon, sur la Home Assistant Voice Preview Edition et sur des appareils conçus avec ESPHome.',
          'Cet avis couvre uniquement le pipeline Assist : mot d’activation, reconnaissance vocale, agent conversationnel et synthèse vocale. Home Assistant lui-même, avec ses intégrations d’appareils et ses automatisations, est hors sujet. L’intégration Wyoming Protocol, introduite avec 2023.5, permet à Home Assistant d’utiliser des services vocaux et de mot d’activation locaux.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Assist n’est pas un téléchargement séparé : on l’obtient en installant Home Assistant, puis en ajoutant des services vocaux sous forme d’applications.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          {
            Option: 'Home Assistant OS',
            'Comment l’obtenir': '[Guide d’installation](https://www.home-assistant.io/installation/) : Green, Raspberry Pi, Odroid, x86-64, VM',
          },
          {
            Option: 'Conteneur',
            'Comment l’obtenir': 'Docker ou équivalent sous Linux ; pas d’accès aux applications, donc ni Whisper ni Piper',
          },
          {
            Option: 'Application compagnon',
            'Comment l’obtenir':
              '[Google Play](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android), [F-Droid](https://f-droid.org/packages/io.homeassistant.companion.android.minimal), [App Store](https://apps.apple.com/app/home-assistant/id1099568401)',
          },
          {
            Option: 'Matériel vocal',
            'Comment l’obtenir':
              '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/) : 69 $ hors taxes ou 59 € TTC (prix conseillé)',
          },
          {
            Option: 'Home Assistant Cloud',
            'Comment l’obtenir': '[Nabu Casa](https://www.nabucasa.com/pricing/) : 7,50 €/mois ou 75 €/an hors taxes ; essai de 31 jours',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[home-assistant.io/voice_control](https://www.home-assistant.io/voice_control/)',
          },
          {
            Option: 'Politique de confidentialité',
            'Comment l’obtenir': '[home-assistant.io/privacy](https://www.home-assistant.io/privacy/)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[home-assistant/core](https://github.com/home-assistant/core), Apache-2.0',
          },
        ],
        note:
          'Version examinée : Home Assistant Core 2026.10.3, publiée le 23 octobre 2026 selon GitHub. Les prix sont ceux affichés sur les pages Voice Preview Edition et Nabu Casa le 24 octobre 2026 ; la page Nabu Casa propose d’autres devises qui n’ont pas été vérifiées.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**La documentation ne donne des durées que pour quelques appareils de référence ; au-delà, le dimensionnement relève de l’estimation.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          {
            'Élément': 'Système d’exploitation',
            'Ce que disent les sources': 'Home Assistant OS pour le pipeline complet ; les installations Container n’ont pas d’applications',
          },
          {
            'Élément': 'Reconnaissance vocale',
            'Ce que disent les sources':
              'Speech-to-Phrase : moins d’1 seconde sur Green ou Pi 4. Whisper : environ 8 secondes sur Pi 4, moins d’1 seconde sur un Intel NUC',
          },
          {
            'Élément': 'Synthèse vocale',
            'Ce que disent les sources': 'Piper, optimisé pour le Pi 4 : 1,6 seconde de parole par seconde avec des modèles de qualité moyenne',
          },
          {
            'Élément': 'Agent LLM',
            'Ce que disent les sources':
              'Un serveur Ollama accessible sur le réseau ; seuls les modèles compatibles avec les outils peuvent piloter la maison',
          },
          {
            'Élément': 'Entités exposées',
            'Ce que disent les sources':
              'Moins de 25 recommandées pour Ollama ; fenêtre de contexte par défaut de 8k dans Home Assistant, 2k dans Ollama',
          },
          {
            'Élément': 'Mot d’activation',
            'Ce que disent les sources':
              'Voice Preview Edition : « Okay Nabu », « Hey Jarvis » ou « Hey Mycroft » sur l’appareil ; openWakeWord est listé pour Wyoming',
          },
        ],
        note:
          'La qualité varie selon la langue ; consultez donc le tableau des langues pour chaque option avant d’acheter du matériel.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent la documentation ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer Home Assistant OS',
            whyItMatters:
              'Utilisez Home Assistant OS sur un Green, un Raspberry Pi, une machine x86-64 ou une VM si vous voulez les applications pour la voix locale.',
          },
          {
            title: 'Ajouter les services vocaux',
            whyItMatters:
              'Démarrez les applications Whisper, Piper ou Speech-to-Phrase ; l’intégration Wyoming les découvre et vous les ajoutez à partir de là.',
          },
          {
            title: 'Créer un assistant vocal',
            whyItMatters:
              'Dans Paramètres, Assistants vocaux, choisissez les moteurs vocaux et l’agent conversationnel : celui intégré ou un LLM comme Ollama.',
          },
          {
            title: 'Ajouter un micro',
            whyItMatters:
              'Utilisez l’application compagnon, une Voice Preview Edition ou un appareil ESPHome, et n’exposez que les entités que vous voulez piloter.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tout ce qui suit provient de la documentation de Home Assistant ; rien n’a été testé de façon indépendante.**',
        ],
        items: [
          '**Phrases intégrées et personnalisées.** Des phrases fournies par la communauté gèrent des commandes comme allumer une lumière ; vous pouvez ajouter les vôtres dans custom_sentences et les traiter avec intent_script, ou lancer des automatisations avec des déclencheurs de phrase (sentence triggers).',
          '**Services Wyoming.** L’intégration Wyoming Protocol relie Speech-to-Phrase, Whisper, Piper et openWakeWord, et peut pointer vers un service sur un autre appareil du réseau, ce qui aide pour les moteurs lourds comme Whisper.',
          '**Agents conversationnels LLM.** Ollama et OpenAI peuvent répondre via l’API Assist et, si le contrôle est activé, agir sur les entités que vous exposez.',
          '**Matériel vocal.** Outre la Voice Preview Edition, la page vocale cite des satellites ESPHome ESP32 (un montage à 13 $), un Linux-Voice-Assistant expérimental pour systèmes x64 ou ARM64 et un montage téléphonique analogique.',
          '**Réglages.** Les options de réglage fin de Whisper et de Piper sont documentées sur la page de chaque application.',
        ],
        note:
          'Selon la page vocale, des scripts peuvent être exposés aux LLM et des personnalités d’IA peuvent être configurées.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**Avec Home Assistant Cloud, seul l’audio est envoyé à Nabu Casa pour la reconnaissance et la synthèse vocales, tandis que les actions elles-mêmes s’exécutent toujours sur votre propre Home Assistant, selon la documentation.** Un agent Ollama dialogue avec un serveur que vous hébergez, et la page Ollama n’ajoute aucune déclaration de confidentialité. L’intégration OpenAI est un service cloud qui ne fonctionne qu’avec le point d’accès officiel d’OpenAI ; les entités exposées sont celles que le modèle peut piloter ou consulter.',
          'La politique de confidentialité de Home Assistant, mise à jour le 27 août 2026, indique que rien n’est envoyé à Analytics sans votre accord et ne mentionne pas les données vocales. Elle précise que Home Assistant Cloud est un service commercial distinct, régi par la politique de confidentialité de son fournisseur, que PromptQuorum n’a pas examinée.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Il s’agit de déclarations du projet, pas de résultats d’audit. PromptQuorum n’a inspecté ni le trafic réseau ni le code source du pipeline vocal.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Les utilisateurs actuels de Home Assistant** qui veulent une commande vocale sans envoyer d’audio vers un service cloud.',
          '**Les bricoleurs disposant d’un serveur ou d’un Raspberry Pi libre** et prêts à choisir et régler les moteurs vocaux langue par langue.',
          '**Ceux qui font déjà tourner Ollama** et veulent essayer un agent LLM sur les entités de leur maison, malgré son statut expérimental.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité et vitesse de reconnaissance.** Les durées ci-dessus viennent de la documentation ; PromptQuorum n’a rien mesuré.',
          '**Fiabilité des LLM.** La documentation avertit que les petits modèles font davantage d’erreurs lorsque le contrôle est activé ; leur fréquence n’a pas été testée ici.',
          '**Dimensionnement du matériel.** Aucune RAM ni aucun processeur minimal n’est indiqué pour Whisper ou les modèles Ollama, et aucun modèle n’est recommandé.',
          '**Traitement des données dans le cloud.** La politique de confidentialité et les durées de conservation de Nabu Casa n’ont pas été examinées.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Application: '[Jarvis](/fr/power-local-llm/jarvis-mac-review)',
            Plateformes: 'macOS',
            'Prix / licence': 'Gratuit / open source',
            'Différence clé': 'Assistant de bureau pour un seul ordinateur, avec Llama, Whisper et Kokoro intégrés, selon sa fiche',
          },
          {
            Application: '[Voxa](/fr/power-local-llm/voxa-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Assistant vocal de bureau local d’abord, avec voix cloud en option',
          },
          {
            Application: '[Dograh](/fr/power-local-llm/dograh-review)',
            Plateformes: 'Web (auto-hébergé)',
            'Prix / licence': 'Gratuit en auto-hébergement / BSD-2-Clause',
            'Différence clé': 'Plateforme d’agents vocaux avec téléphonie et modèle de votre choix',
          },
        ],
        note:
          'Assist est un pipeline au sein d’un serveur domotique ; ce sont donc les assistants vocaux les plus proches du répertoire, pas des substituts directs. Vérifiez le prix, la licence et les plateformes sur la page de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Faut-il un LLM pour utiliser Assist ?',
            a:
              'Non. La reconnaissance de phrases intégrée traite les commandes d’appareils sans LLM ; un agent LLM est facultatif, et la page Ollama qualifie d’expérimental son pilotage de Home Assistant.',
          },
          {
            q: 'Que ne sait pas faire Speech-to-Phrase ?',
            a:
              'C’est un modèle fermé qui ne comprend qu’une partie des commandes Assist : listes de courses, minuteurs et diffusions ne sont donc pas utilisables d’emblée. Whisper tente de tout transcrire mais est plus lent.',
          },
          {
            q: 'Ollama fonctionne-t-il avec les déclencheurs de phrase ?',
            a:
              'Non, la page Ollama indique que l’intégration ne fonctionne pas avec les déclencheurs de phrase. Pour les petits modèles, elle suggère deux intégrations Ollama avec le même modèle : l’une sans contrôle pour la conversation, l’autre avec contrôle pour les commandes.',
          },
          {
            q: 'Assist fonctionnera-t-il dans ma langue ?',
            a:
              'La prise en charge des langues est évaluée séparément pour le traitement local et pour Home Assistant Cloud, sur une échelle à quatre niveaux allant de « Non pris en charge » à « Entièrement pris en charge » ; consultez d’abord le tableau pour votre langue et votre moteur.',
          },
          {
            q: 'Un téléphone peut-il écouter un mot d’activation ?',
            a:
              'La page vocale indique que les téléphones Android peuvent détecter un mot d’activation, avec « Hey Jarvis » et « Hey Nabu » en exemples, et ne décrit pas cette fonction pour l’iPhone.',
          },
          {
            q: 'L’intégration OpenAI est-elle gratuite ?',
            a:
              'Non. La documentation la décrit comme un service payant qui exige une clé d’API et conseille de surveiller les coûts et de fixer des limites d’utilisation.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Assist est une façon activement développée d’ajouter la commande vocale à un système Home Assistant, avec une voie entièrement locale documentée et des voies cloud et LLM facultatives. En contrepartie, il faut une installation Home Assistant, le pipeline local complet exige Home Assistant OS, Whisper est plus lent sur les petites cartes selon la documentation et le pilotage par LLM est expérimental. Il convient aux utilisateurs de Home Assistant qui veulent garder la voix à la maison et acceptent de la régler ; qui cherche un assistant vocal autonome regardera plutôt les alternatives ci-dessus.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Commande vocale Assist](https://www.home-assistant.io/voice_control/) — présentation, appareils et langues pris en charge.',
          '[Guide de l’assistant vocal local](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) — Speech-to-Phrase, Whisper, Piper et durées.',
          '[Configuration vocale avec Home Assistant Cloud](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) — ce qui est envoyé au cloud.',
          '[Intégration Ollama](https://www.home-assistant.io/integrations/ollama/) — prérequis, prise en charge des outils et limites.',
          '[Intégration OpenAI Conversation](https://www.home-assistant.io/integrations/openai_conversation/) — service cloud et API payante.',
          '[Intégration Wyoming Protocol](https://www.home-assistant.io/integrations/wyoming/) — services vocaux pris en charge et configuration.',
          '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/) — prix, mots d’activation et traitement local.',
          '[Installation](https://www.home-assistant.io/installation/) — Home Assistant OS et Container.',
          '[Tarifs Nabu Casa](https://www.nabucasa.com/pricing/) — prix et essai de Home Assistant Cloud.',
          '[Politique de confidentialité de Home Assistant](https://www.home-assistant.io/privacy/) — analytique et périmètre du cloud.',
          '[Home Assistant Core 2026.10.3](https://github.com/home-assistant/core/releases/tag/2026.10.3) — date de publication et licence.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Avis Piper TTS](/fr/power-local-llm/piper-tts-review) — le moteur de synthèse vocale qu’Assist propose pour les voix locales.',
          '[Avis Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — une autre façon d’exécuter la reconnaissance vocale Whisper en local.',
          '[Avis Ollama](/fr/power-local-llm/ollama-review) — le serveur LLM local auquel se connecte l’intégration Ollama.',
          '[Outils vocaux et audio comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — la comparaison de catégorie à laquelle appartient cet avis.',
          '[Répertoire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/home-assistant-assist-review-hero-ja.webp',
    title: 'Home Assistant Assist レビュー：ローカル音声操作とLLMエージェント',
    seoTitle: 'Home Assistant Assist レビュー：ローカル音声とLLM',
    intro:
      'Assistは、オープンソースのスマートホームソフト[Home Assistant](https://www.home-assistant.io/voice_control/)に組み込まれた音声アシスタントです。音声認識にWhisperまたはSpeech-to-Phrase、音声出力にPiperを使い、Wyomingプロトコルで接続して、すべて自分のハードウェア上で動かせます。Ollamaなどが提供するLLMへ依頼を渡すこともできます。本レビューが扱うのはこの音声・LLMパイプラインだけで、Home Assistant全体ではありません。実機での検証ではなく、プロジェクトのドキュメントに基づいています。',
    metaDescription: 'Home Assistant Assistのレビュー。WhisperとPiperでローカル動作し、OllamaのLLMエージェントも使える内蔵音声アシスタントを解説。ドキュメントに基づく内容です。',
    twitterDescription: 'Home Assistant Assistのレビュー。Whisper・Piper・Wyomingによるローカル音声操作とOllama LLMエージェント。ドキュメントで確認できたことと未確認の点。',
    audience: '家の中で完結する音声操作を求めるHome Assistantユーザーやスマートホーム自作派で、ドキュメントが確認していること、実験的な部分、クラウド版の費用を知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Home Assistant Assist レビュー',
    targetKeywords: [
      'home assistant assist レビュー',
      'home assistant ローカル音声アシスタント',
      'assist whisper piper wyoming',
      'home assistant ollama 会話エージェント',
      'オフライン音声操作 スマートホーム',
      'home assistant voice preview edition',
      'home assistant llm 音声アシスタント',
    ],
    current_models_mentioned: ['Whisper', 'Piper', 'Ollama'],
    current_hardware_mentioned: [
      'Raspberry Pi 4',
      'Intel NUC',
      'Home Assistant Green',
      'Voice Preview Edition',
    ],
    leadAnswerBlock:
      '**Assist（2026年10月23日公開のHome Assistant Core 2026.10.3に含まれる）は、スマートホーム基盤Home Assistantの音声アシスタントで、すべて自分のハードウェア上で動かせます。** 単体のアプリではありません。ローカル構成を完全に組むにはHome Assistant OSが必要で、LLMエージェントは任意の、一部実験的な追加機能です。本稿の記述はすべてプロジェクトのドキュメントに基づき、テスト結果ではありません。',
    quickAnswerTop: {
      ja: {
        question: 'Assistは完全にオフラインで動きますか？',
        answer:
          'ドキュメントによれば可能です。音声認識、音声出力、ウェイクワード検出のすべてを自分のハードウェアで動かせ、ローカル向けガイドには「Your spoken commands never leave your home.」とあります。Home Assistant CloudやクラウドLLMは任意の代替手段です。',
        bullets: [
          '内蔵のフレーズだけで、LLMなしに機器やエリアを操作できます。',
          'Speech-to-Phraseは高速だが対応が限られるローカル認識、Whisperは自由に聞き取る方式です。',
          'Wyomingプロトコルが認識・音声・ウェイクワードの各エンジンを、別のマシン上のものも含めて接続します。',
          'その上でOllamaやOpenAIを会話エージェントとして使えます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'Assistとは',
        anchor: 'what-is-assist',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '動作要件',
        anchor: 'requirements',
      },
      {
        label: '始め方',
        anchor: 'getting-started',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'データの流れとプライバシー',
        anchor: 'privacy',
      },
      {
        label: '向いている人',
        anchor: 'who-should-use',
      },
      {
        label: '確認できなかった点',
        anchor: 'who-should-not-use',
      },
      {
        label: '競合と代替ツール',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '総評',
        anchor: 'verdict',
      },
      {
        label: '情報源',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Assistは、Home Assistantに組み込まれたオープンソースの音声アシスタントで、話した、または入力したコマンドを、ローカルまたはクラウドやLLMの助けを借りてスマートホーム操作に変えます。',
          },
          {
            type: 'plain-terms',
            text: 'マイク付きの機器に話しかけると、音声エンジンが言葉をテキストにし、Home Assistantがそれを機器の操作に当てはめるかLLMに尋ね、音声が答えを読み上げます。',
          },
        ],
        items: [
          '保守状況：リポジトリへの最新のプッシュは2026年10月24日で、放置プロジェクトの警告は該当しません。',
          'ライセンス：Apache-2.0のオープンソースで、利用は無料。有料なのはHome Assistant Cloudと一部の音声ハードウェアのみです。',
          '経緯：AssistはHome Assistant 2023.2で導入され、Ollama連携は2024.4で続きました。',
          '位置づけ：大きなプラットフォームの中の音声レイヤーであり、Home Assistantサーバーを運用している（またはこれから運用する）ことが前提です。',
          'LLMによる家の操作は実験的で、ツール対応のモデルでしか動きません。',
        ],
        callouts: [
          {
            type: 'note',
            text:
              '本レビューは、2026年10月24日に確認したHome Assistantのドキュメント、GitHubのリリースページ、Nabu Casaのページに基づいています。PromptQuorumはパイプラインを導入も計測もしておらず、認識精度、遅延、LLMの信頼性は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-assist',
        title: 'Assistとは',
        content: [
          '**Assistは、Home Assistantに組み込まれた音声・テキストのアシスタントで、コマンドをスマートホームの操作に結び付けます。** ドキュメントによれば、Home Assistant 2023.2で導入され、コンパニオンアプリ、Home Assistant Voice Preview Edition、ESPHomeで作った機器で動作します。',
          '本レビューの対象はAssistのパイプライン、つまりウェイクワード、音声認識、会話エージェント、音声合成だけです。機器連携やオートメーションを含むHome Assistant本体は対象外です。2023.5で導入されたWyoming Protocol連携により、Home Assistantはローカルの音声サービスやウェイクワードサービスを利用できます。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Assistは単独のダウンロードではありません。Home Assistantをインストールし、そこに音声サービスをアプリとして追加して使います。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          {
            '項目': 'Home Assistant OS',
            '入手方法': '[インストールガイド](https://www.home-assistant.io/installation/)：Green、Raspberry Pi、Odroid、x86-64、仮想マシン',
          },
          {
            '項目': 'コンテナ',
            '入手方法': 'Linux上のDockerなど。アプリを使えないため、WhisperやPiperのアプリは不可',
          },
          {
            '項目': 'コンパニオンアプリ',
            '入手方法':
              '[Google Play](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android)、[F-Droid](https://f-droid.org/packages/io.homeassistant.companion.android.minimal)、[App Store](https://apps.apple.com/app/home-assistant/id1099568401)',
          },
          {
            '項目': '音声ハードウェア',
            '入手方法': '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/)：希望小売価格 税別69ドル、または税込59ユーロ',
          },
          {
            '項目': 'Home Assistant Cloud',
            '入手方法': '[Nabu Casa](https://www.nabucasa.com/pricing/)：税別で月額7.50ユーロ、または年額75ユーロ。31日間のお試し',
          },
          {
            '項目': 'ウェブサイト',
            '入手方法': '[home-assistant.io/voice_control](https://www.home-assistant.io/voice_control/)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '[home-assistant.io/privacy](https://www.home-assistant.io/privacy/)',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[home-assistant/core](https://github.com/home-assistant/core)、Apache-2.0',
          },
        ],
        note:
          '確認したバージョン：Home Assistant Core 2026.10.3（GitHubによれば2026年10月23日公開）。価格は2026年10月24日時点のVoice Preview EditionおよびNabu Casaのページの表記で、Nabu Casaのページが提示する他の通貨は確認していません。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: ['**ドキュメントが所要時間を示すのは少数の基準機器だけで、それ以外の見積もりは推測になります。**'],
        columns: ['項目', '情報源の記載'],
        rows: [
          {
            '項目': 'OS',
            '情報源の記載': '完全なパイプラインにはHome Assistant OS。コンテナ版にはアプリがない',
          },
          {
            '項目': '音声認識',
            '情報源の記載': 'Speech-to-Phrase：GreenまたはPi 4で1秒未満。Whisper：Pi 4で約8秒、Intel NUCで1秒未満',
          },
          {
            '項目': '音声合成',
            '情報源の記載': 'Piper（Pi 4向けに最適化）：中品質モデルで1秒あたり1.6秒分の音声を生成',
          },
          {
            '項目': 'LLMエージェント',
            '情報源の記載': 'ネットワーク経由で接続できるOllamaサーバー。家を操作できるのはツール対応モデルのみ',
          },
          {
            '項目': '公開するエンティティ',
            '情報源の記載': 'Ollamaでは25未満を推奨。コンテキストウィンドウの既定はHome Assistantが8k、Ollamaが2k',
          },
          {
            '項目': 'ウェイクワード',
            '情報源の記載': 'Voice Preview Edition：「Okay Nabu」「Hey Jarvis」「Hey Mycroft」を機器上で検出。Wyoming向けにはopenWakeWordも記載',
          },
        ],
        note: '品質は言語によって異なるため、ハードウェアを買う前に各オプションの言語対応表を確認してください。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: ['**以下の手順はドキュメントに沿ったもので、PromptQuorumは実行していません。**'],
        numberedItems: [
          {
            title: 'Home Assistant OSを入れる',
            whyItMatters: 'ローカル音声用のアプリを使うなら、Green、Raspberry Pi、x86-64機、または仮想マシンにHome Assistant OSを導入します。',
          },
          {
            title: '音声サービスを追加する',
            whyItMatters: 'Whisper、Piper、Speech-to-Phraseのアプリを起動すると、Wyoming連携が検出するので、そこから追加します。',
          },
          {
            title: '音声アシスタントを作る',
            whyItMatters: '設定の音声アシスタントで、音声エンジンと会話エージェント（内蔵のもの、またはOllamaなどのLLM）を選びます。',
          },
          {
            title: 'マイクを用意する',
            whyItMatters: 'コンパニオンアプリ、Voice Preview Edition、ESPHome機器のいずれかを使い、操作させたいエンティティだけを公開します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: ['**以下はすべてHome Assistantのドキュメントに基づいており、独自に検証したものはありません。**'],
        items: [
          '**内蔵・カスタムのフレーズ。** コミュニティ提供のフレーズが「照明をつける」などのコマンドを処理します。custom_sentencesに独自のフレーズを追加してintent_scriptで処理したり、文トリガー（sentence trigger）でオートメーションを起動したりできます。',
          '**Wyomingサービス。** Wyoming Protocol連携はSpeech-to-Phrase、Whisper、Piper、openWakeWordを接続し、ネットワーク上の別の機器にあるサービスも指定できるため、Whisperのような重いエンジンに役立ちます。',
          '**LLM会話エージェント。** OllamaとOpenAIはAssist APIを通じて応答でき、制御を有効にすると、公開したエンティティに対して操作を行えます。',
          '**音声ハードウェア。** 音声ページには、Voice Preview Editionのほか、ESPHomeのESP32サテライト（13ドルで自作する構成）、x64またはARM64向けの実験的なLinux-Voice-Assistant、アナログ電話を使う構成が挙げられています。',
          '**チューニング。** WhisperとPiperの微調整オプションは、各アプリのドキュメントページに記載されています。',
        ],
        note: '音声ページによれば、スクリプトをLLMに公開したり、AIの人格を設定したりできます。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**ドキュメントによれば、Home Assistant Cloudでは音声認識と音声合成のために音声データだけがNabu Casaに送られ、操作そのものは引き続き自分のHome Assistant上で実行されます。** Ollamaエージェントは自分でホストするサーバーと通信し、Ollamaのページにはプライバシーに関する記述がありません。OpenAI連携はクラウドサービスで、OpenAI公式のエンドポイントでのみ動作し、公開したエンティティがモデルの操作・照会の対象になります。',
          '2026年8月27日更新のHome Assistantのプライバシーポリシーは、オプトインしない限りAnalyticsには何も送られないとし、音声データには触れていません。また、Home Assistant Cloudは提供元自身のプライバシーポリシーに従う別の商用サービスだとしており、PromptQuorumはそのポリシーを確認していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクト側の申告であり、監査結果ではありません。PromptQuorumは、ネットワーク通信も音声パイプラインのソースコードも検査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**既存のHome Assistantユーザー**で、音声をクラウドに送らずに音声操作したい方。',
          '**余ったサーバーやRaspberry Piを持つ自作派**で、言語ごとに音声エンジンを選んで調整することを厭わない方。',
          '**すでにOllamaを動かしている方**で、実験的な位置づけを理解したうえで、自宅のエンティティにLLMエージェントを試したい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**認識の品質と速度。** 上記の所要時間はドキュメントの値で、PromptQuorumは何も計測していません。',
          '**LLMの信頼性。** 制御を有効にすると小さいモデルは誤りが増えるとドキュメントは警告していますが、その頻度はここでは検証していません。',
          '**ハードウェアの目安。** WhisperやOllamaのモデルに必要な最小RAMやCPUは示されておらず、推奨モデルもありません。',
          '**クラウドでのデータ取り扱い。** Nabu Casaのプライバシーポリシーと保持期間は確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Jarvis](/ja/power-local-llm/jarvis-mac-review)',
            '対応プラットフォーム': 'macOS',
            '価格／ライセンス': '無料／オープンソース',
            '主な違い': '掲載情報によれば、Llama・Whisper・Kokoroを同梱した1台完結のデスクトップアシスタント',
          },
          {
            'アプリ': '[Voxa](/ja/power-local-llm/voxa-review)',
            '対応プラットフォーム': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'ローカル優先のデスクトップ音声アシスタント。クラウド音声は任意',
          },
          {
            'アプリ': '[Dograh](/ja/power-local-llm/dograh-review)',
            '対応プラットフォーム': 'Web（セルフホスト）',
            '価格／ライセンス': 'セルフホストは無料／BSD-2-Clause',
            '主な違い': '電話連携と独自モデルの持ち込みに対応した音声エージェント基盤',
          },
        ],
        note:
          'Assistはホームオートメーションサーバー内のパイプラインなので、これらはディレクトリ内で最も近い音声アシスタントであり、直接の代替品ではありません。最新の価格、ライセンス、対応プラットフォームは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Assistを使うのにLLMは必要ですか？',
            a: 'いいえ。内蔵のフレーズ認識がLLMなしで機器のコマンドを処理します。LLMエージェントは任意で、Ollamaのページはそのホーム操作を実験的としています。',
          },
          {
            q: 'Speech-to-Phraseにできないことは？',
            a: '対応コマンドが限られたクローズド型のモデルで、Assistのコマンドの一部しか理解しません。そのため買い物リスト、タイマー、一斉放送は初期状態では使えません。Whisperは何でも書き起こそうとしますが、遅くなります。',
          },
          {
            q: 'Ollamaは文トリガーと併用できますか？',
            a: 'いいえ。Ollamaのページによれば、この連携は文トリガーに対応していません。小さなモデル向けには、同じモデルで2つのOllama連携を作り、会話用は制御なし、コマンド用は制御ありにする方法が示されています。',
          },
          {
            q: '自分の言語でAssistは動きますか？',
            a: '言語対応は、ローカル処理とHome Assistant Cloudで別々に、「非対応」から「完全対応」までの4段階で評価されています。まず自分の言語とエンジンの表を確認してください。',
          },
          {
            q: 'スマートフォンでウェイクワードを待ち受けられますか？',
            a: '音声ページによれば、Androidスマートフォンはウェイクワード検出を使え、例として「Hey Jarvis」と「Hey Nabu」が挙げられています。iPhoneについてはこの機能の説明がありません。',
          },
          {
            q: 'OpenAI連携は無料ですか？',
            a: 'いいえ。ドキュメントは有料サービスでAPIキーが必要だとし、コストの監視と利用上限の設定を勧めています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Assistは、Home Assistantに音声操作を加える、活発に開発されている手段であり、ドキュメント化された完全ローカルの経路と、任意のクラウド・LLM経路があります。一方で、Home Assistantの環境が必要で、完全なローカル構成にはHome Assistant OSが必要です。ドキュメントによれば小型ボードではWhisperが遅く、LLMによる制御は実験的です。音声を家の中にとどめ、調整にも付き合える既存ユーザー向けです。単体の音声アシスタントを探す方は、上記の代替ツールを検討してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Assist音声操作](https://www.home-assistant.io/voice_control/) — 概要、対応機器と言語.',
          '[ローカル音声アシスタントのガイド](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) — Speech-to-Phrase、Whisper、Piperと所要時間.',
          '[Home Assistant Cloudでの音声設定](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) — クラウドに送られるデータ.',
          '[Ollama連携](https://www.home-assistant.io/integrations/ollama/) — 要件、ツール対応、制約.',
          '[OpenAI Conversation連携](https://www.home-assistant.io/integrations/openai_conversation/) — クラウドサービスと有料API.',
          '[Wyoming Protocol連携](https://www.home-assistant.io/integrations/wyoming/) — 対応する音声サービスと設定.',
          '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/) — 価格、ウェイクワード、ローカル処理.',
          '[インストール](https://www.home-assistant.io/installation/) — Home Assistant OSとコンテナ.',
          '[Nabu Casaの料金](https://www.nabucasa.com/pricing/) — Home Assistant Cloudの価格とお試し期間.',
          '[Home Assistantのプライバシーポリシー](https://www.home-assistant.io/privacy/) — アナリティクスとクラウドの適用範囲.',
          '[Home Assistant Core 2026.10.3](https://github.com/home-assistant/core/releases/tag/2026.10.3) — 公開日とライセンス.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Piper TTS レビュー](/ja/power-local-llm/piper-tts-review) — Assistがローカル音声用に提供する音声出力エンジン。',
          '[Whisper.cpp レビュー](/ja/power-local-llm/whisper-cpp-review) — Whisperの音声認識をローカルで動かすもう一つの方法。',
          '[Ollama レビュー](/ja/power-local-llm/ollama-review) — Ollama連携が接続するローカルLLMサーバー。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared) — 本レビューが属するカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/home-assistant-assist-review-hero-pt.webp',
    title: 'Análise do Home Assistant Assist: controle por voz local e agentes LLM',
    seoTitle: 'Análise do Home Assistant Assist: voz local e agentes LLM',
    intro:
      'O Assist é o assistente de voz integrado ao [Home Assistant](https://www.home-assistant.io/voice_control/), o software de código aberto para casa inteligente. Ele pode rodar inteiramente no seu próprio hardware: Whisper ou Speech-to-Phrase cuidam do reconhecimento de voz e o Piper da saída de voz, conectados pelo protocolo Wyoming. Também pode repassar pedidos a um LLM, por exemplo um servido pelo Ollama. Esta análise cobre apenas esse pipeline de voz e LLM, não o Home Assistant como um todo, e se baseia na documentação do projeto, não em testes práticos.',
    metaDescription:
      'Análise do Home Assistant Assist: assistente de voz integrado que roda local com Whisper e Piper e aceita agentes LLM do Ollama. Da documentação.',
    twitterDescription:
      'Análise do Home Assistant Assist: controle por voz local com Whisper, Piper e Wyoming, mais agentes LLM do Ollama. O que a documentação confirma e o que deixa em aberto.',
    audience:
      'Usuários do Home Assistant e entusiastas de casa inteligente que querem controle por voz que fique dentro de casa e precisam saber o que a documentação confirma, o que é experimental e quanto custa a opção em nuvem.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise Home Assistant Assist',
    targetKeywords: [
      'análise home assistant assist',
      'assistente de voz local home assistant',
      'assist whisper piper wyoming',
      'agente de conversa ollama home assistant',
      'controle por voz offline casa inteligente',
      'home assistant voice preview edition',
      'assistente de voz llm home assistant',
    ],
    current_models_mentioned: ['Whisper', 'Piper', 'Ollama'],
    current_hardware_mentioned: [
      'Raspberry Pi 4',
      'Intel NUC',
      'Home Assistant Green',
      'Voice Preview Edition',
    ],
    leadAnswerBlock:
      '**O Assist (parte do Home Assistant Core 2026.10.3, lançado em 23 de outubro de 2026) é o assistente de voz da plataforma de casa inteligente Home Assistant e pode rodar totalmente no seu próprio hardware.** Não é um app independente: o pipeline local completo exige o Home Assistant OS, e um agente LLM é um complemento opcional e em parte experimental. Cada afirmação aqui vem da documentação do projeto, não de testes.',
    quickAnswerTop: {
      pt: {
        question: 'O Assist pode rodar totalmente offline?',
        answer:
          'Segundo a documentação, sim: reconhecimento de voz, saída de voz e detecção da palavra de ativação podem rodar no seu próprio hardware, e o guia local diz «Your spoken commands never leave your home.». O Home Assistant Cloud e os LLMs em nuvem são alternativas opcionais.',
        bullets: [
          'Frases integradas controlam dispositivos e ambientes sem nenhum LLM.',
          'O Speech-to-Phrase é o reconhecimento local rápido, porém limitado; o Whisper é o aberto.',
          'O protocolo Wyoming conecta reconhecimento, vozes e motores de palavra de ativação, inclusive em outra máquina.',
          'Ollama e OpenAI podem atuar como agentes de conversa por cima disso.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o Assist?',
        anchor: 'what-is-assist',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
      },
      {
        label: 'Como começar',
        anchor: 'getting-started',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Fluxo de dados e privacidade',
        anchor: 'privacy',
      },
      {
        label: 'Para quem serve',
        anchor: 'who-should-use',
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fontes',
        anchor: 'sources',
      },
      {
        label: 'Leituras relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'O Assist é o assistente de voz de código aberto do Home Assistant que transforma comandos falados ou digitados em ações de casa inteligente, localmente ou com ajuda da nuvem e de um LLM.',
          },
          {
            type: 'plain-terms',
            text:
              'Você fala com um dispositivo com microfone, um motor de voz converte suas palavras em texto, o Home Assistant associa o texto a uma ação ou consulta um LLM, e uma voz lê a resposta.',
          },
        ],
        items: [
          'Manutenção: o repositório recebeu o último push em 24 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Licença: código aberto Apache-2.0, gratuito para executar; só o Home Assistant Cloud e alguns equipamentos de voz custam dinheiro.',
          'Histórico: o Assist foi lançado no Home Assistant 2023.2; a integração com o Ollama veio na 2024.4.',
          'Escopo: uma camada de voz dentro de uma plataforma maior, então você roda (ou já roda) um servidor Home Assistant.',
          'O controle da casa por LLM é experimental e só funciona com modelos que oferecem suporte a ferramentas.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'Esta análise se baseia na documentação do Home Assistant, na página de versões do GitHub e nas páginas da Nabu Casa, consultadas em 24 de outubro de 2026. A PromptQuorum não instalou nem cronometrou o pipeline, portanto qualidade de reconhecimento, latência e confiabilidade dos LLMs não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-assist',
        title: 'O que é o Assist?',
        content: [
          '**O Assist é o assistente de voz e texto integrado ao Home Assistant que associa comandos a ações de casa inteligente.** Segundo a documentação, foi lançado no Home Assistant 2023.2 e funciona no app complementar, no Home Assistant Voice Preview Edition e em dispositivos criados com ESPHome.',
          'Esta análise cobre somente o pipeline do Assist: palavra de ativação, fala para texto, agente de conversa e texto para fala. O Home Assistant em si, com suas integrações de dispositivos e automações, fica de fora. A integração Wyoming Protocol, introduzida na 2023.5, permite que o Home Assistant use serviços locais de voz e de palavra de ativação.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Assist não é um download separado: você o obtém instalando o Home Assistant e depois adicionando serviços de voz como apps.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          {
            'Opção': 'Home Assistant OS',
            'Onde obter': '[Guia de instalação](https://www.home-assistant.io/installation/): Green, Raspberry Pi, Odroid, x86-64, VMs',
          },
          {
            'Opção': 'Contêiner',
            'Onde obter': 'Docker ou similar no Linux; sem acesso a apps, portanto sem os apps Whisper e Piper',
          },
          {
            'Opção': 'App complementar',
            'Onde obter':
              '[Google Play](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android), [F-Droid](https://f-droid.org/packages/io.homeassistant.companion.android.minimal), [App Store](https://apps.apple.com/app/home-assistant/id1099568401)',
          },
          {
            'Opção': 'Hardware de voz',
            'Onde obter':
              '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/): US$ 69 sem impostos ou € 59 com impostos (preço sugerido)',
          },
          {
            'Opção': 'Home Assistant Cloud',
            'Onde obter': '[Nabu Casa](https://www.nabucasa.com/pricing/): € 7,50/mês ou € 75/ano sem impostos; teste de 31 dias',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[home-assistant.io/voice_control](https://www.home-assistant.io/voice_control/)',
          },
          {
            'Opção': 'Política de privacidade',
            'Onde obter': '[home-assistant.io/privacy](https://www.home-assistant.io/privacy/)',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[home-assistant/core](https://github.com/home-assistant/core), Apache-2.0',
          },
        ],
        note:
          'Versão analisada: Home Assistant Core 2026.10.3, lançada em 23 de outubro de 2026 segundo o GitHub. Os preços são os exibidos nas páginas da Voice Preview Edition e da Nabu Casa em 24 de outubro de 2026; a página da Nabu Casa oferece outras moedas que não foram verificadas.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A documentação informa tempos apenas para alguns dispositivos de referência; o dimensionamento além deles é estimativa.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          {
            Item: 'Sistema operacional',
            'O que dizem as fontes': 'Home Assistant OS para o pipeline completo; instalações em contêiner não têm apps',
          },
          {
            Item: 'Fala para texto',
            'O que dizem as fontes':
              'Speech-to-Phrase: menos de 1 segundo no Green ou Pi 4. Whisper: cerca de 8 segundos no Pi 4, menos de 1 segundo em um Intel NUC',
          },
          {
            Item: 'Texto para fala',
            'O que dizem as fontes': 'Piper, otimizado para o Pi 4: 1,6 segundo de fala por segundo com modelos de qualidade média',
          },
          {
            Item: 'Agente LLM',
            'O que dizem as fontes': 'Um servidor Ollama acessível pela rede; só modelos com suporte a ferramentas podem controlar a casa',
          },
          {
            Item: 'Entidades expostas',
            'O que dizem as fontes': 'Menos de 25 recomendadas para o Ollama; janela de contexto padrão de 8k no Home Assistant, 2k no Ollama',
          },
          {
            Item: 'Palavra de ativação',
            'O que dizem as fontes':
              'Voice Preview Edition: «Okay Nabu», «Hey Jarvis» ou «Hey Mycroft» no dispositivo; openWakeWord consta para o Wyoming',
          },
        ],
        note: 'A qualidade varia conforme o idioma; consulte a tabela de idiomas de cada opção antes de comprar hardware.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Estes passos seguem a documentação; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instale o Home Assistant OS',
            whyItMatters: 'Use o Home Assistant OS em um Green, Raspberry Pi, máquina x86-64 ou VM se quiser os apps para voz local.',
          },
          {
            title: 'Adicione os serviços de voz',
            whyItMatters:
              'Inicie os apps Whisper, Piper ou Speech-to-Phrase; a integração Wyoming os descobre e você os adiciona a partir dela.',
          },
          {
            title: 'Crie um assistente de voz',
            whyItMatters:
              'Em Configurações, Assistentes de voz, escolha os motores de voz e o agente de conversa: o integrado ou um LLM como o Ollama.',
          },
          {
            title: 'Adicione um microfone',
            whyItMatters:
              'Use o app complementar, uma Voice Preview Edition ou um dispositivo ESPHome, e exponha apenas as entidades que deseja controlar.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo abaixo vem da documentação do Home Assistant; nada foi testado de forma independente.**',
        ],
        items: [
          '**Frases integradas e personalizadas.** Frases contribuídas pela comunidade tratam comandos como acender uma luz; você pode adicionar as suas em custom_sentences e tratá-las com intent_script, ou iniciar automações com gatilhos de frase (sentence triggers).',
          '**Serviços Wyoming.** A integração Wyoming Protocol conecta Speech-to-Phrase, Whisper, Piper e openWakeWord e pode apontar para um serviço em outro dispositivo da sua rede, o que ajuda com motores pesados como o Whisper.',
          '**Agentes de conversa LLM.** Ollama e OpenAI podem responder pela API do Assist e, com o controle ativado, agir sobre as entidades que você expõe.',
          '**Hardware de voz.** Além da Voice Preview Edition, a página de voz cita satélites ESPHome ESP32 (uma montagem de US$ 13), um Linux-Voice-Assistant experimental para sistemas x64 ou ARM64 e uma montagem com telefone analógico.',
          '**Ajustes.** As opções de ajuste fino do Whisper e do Piper estão documentadas na página de cada app.',
        ],
        note: 'Segundo a página de voz, scripts podem ser expostos a LLMs e personalidades de IA podem ser configuradas.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**Com o Home Assistant Cloud, apenas o áudio é enviado à Nabu Casa para reconhecimento e síntese de voz, enquanto as ações em si continuam rodando no seu próprio Home Assistant, segundo a documentação.** Um agente Ollama conversa com um servidor que você hospeda, e a página do Ollama não traz declaração de privacidade. A integração com a OpenAI é um serviço em nuvem que só funciona com o endpoint oficial da OpenAI; as entidades que você expõe são o que o modelo pode controlar ou consultar.',
          'A política de privacidade do Home Assistant, atualizada em 27 de agosto de 2026, diz que nada é enviado ao Analytics sem a sua adesão e não menciona dados de voz. Ela afirma que o Home Assistant Cloud é um serviço comercial separado, regido pela política de privacidade do seu provedor, que a PromptQuorum não analisou.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'São declarações do projeto, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede nem o código-fonte do pipeline de voz.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Usuários atuais do Home Assistant** que querem controle por voz sem enviar áudio para um serviço em nuvem.',
          '**Entusiastas com um servidor ou Raspberry Pi sobrando** que aceitam escolher e ajustar os motores de voz idioma por idioma.',
          '**Quem já roda o Ollama** e quer testar um agente LLM nas entidades da casa, aceitando o status experimental.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade e velocidade de reconhecimento.** Os tempos acima são os da documentação; a PromptQuorum não mediu nada.',
          '**Confiabilidade dos LLMs.** A documentação avisa que modelos menores cometem mais erros com o controle ativado; com que frequência não foi testado aqui.',
          '**Dimensionamento do hardware.** Não há RAM nem CPU mínimas indicadas para o Whisper ou para modelos do Ollama, e nenhum modelo é recomendado.',
          '**Tratamento de dados na nuvem.** A política de privacidade e os prazos de retenção da Nabu Casa não foram analisados.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Jarvis](/pt/power-local-llm/jarvis-mac-review)',
            Plataformas: 'macOS',
            'Preço / licença': 'Grátis / código aberto',
            'Diferença principal': 'Assistente de desktop para um só computador com Llama, Whisper e Kokoro incluídos, segundo a ficha',
          },
          {
            App: '[Voxa](/pt/power-local-llm/voxa-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Assistente de voz de desktop com prioridade local e voz em nuvem opcional',
          },
          {
            App: '[Dograh](/pt/power-local-llm/dograh-review)',
            Plataformas: 'Web (auto-hospedado)',
            'Preço / licença': 'Grátis auto-hospedado / BSD-2-Clause',
            'Diferença principal': 'Plataforma de agentes de voz com telefonia e modelo próprio',
          },
        ],
        note:
          'O Assist é um pipeline dentro de um servidor de automação residencial, então estes são os assistentes de voz mais próximos do diretório, não substitutos diretos; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso de um LLM para usar o Assist?',
            a:
              'Não. O reconhecimento de frases integrado trata comandos de dispositivos sem LLM; um agente LLM é opcional, e a página do Ollama chama de experimental o controle do Home Assistant por ele.',
          },
          {
            q: 'O que o Speech-to-Phrase não faz?',
            a:
              'É um modelo fechado que entende só parte dos comandos do Assist, então listas de compras, temporizadores e avisos gerais não funcionam de fábrica. O Whisper tenta transcrever tudo, mas é mais lento.',
          },
          {
            q: 'O Ollama funciona com gatilhos de frase?',
            a:
              'Não, a página do Ollama diz que a integração não funciona com gatilhos de frase. Para modelos pequenos, sugere duas integrações do Ollama com o mesmo modelo: uma sem controle para conversar e outra com controle para comandos.',
          },
          {
            q: 'O Assist vai funcionar no meu idioma?',
            a:
              'O suporte a idiomas é avaliado separadamente para o processamento local e para o Home Assistant Cloud, em uma escala de quatro níveis de «Sem suporte» a «Totalmente suportado»; consulte primeiro a tabela do seu idioma e motor.',
          },
          {
            q: 'Um celular pode ouvir uma palavra de ativação?',
            a:
              'A página de voz diz que celulares Android podem usar detecção de palavra de ativação, com «Hey Jarvis» e «Hey Nabu» como exemplos, e não descreve o recurso para iPhone.',
          },
          {
            q: 'A integração com a OpenAI é gratuita?',
            a:
              'Não. A documentação a descreve como um serviço pago que exige uma chave de API e recomenda acompanhar os custos e definir limites de uso.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Assist é um caminho em desenvolvimento ativo para adicionar controle por voz a um sistema Home Assistant, com uma rota totalmente local documentada e rotas opcionais de nuvem e LLM. Em contrapartida, exige uma instalação do Home Assistant, o pipeline local completo requer o Home Assistant OS, o Whisper é mais lento em placas pequenas segundo a documentação e o controle por LLM é experimental. Serve para usuários do Home Assistant que querem a voz dentro de casa e aceitam ajustá-la; quem busca um assistente de voz independente deve olhar as alternativas acima.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Controle por voz do Assist](https://www.home-assistant.io/voice_control/) — visão geral, dispositivos e idiomas suportados.',
          '[Guia do assistente de voz local](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) — Speech-to-Phrase, Whisper, Piper e tempos.',
          '[Configuração de voz com o Home Assistant Cloud](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) — o que é enviado à nuvem.',
          '[Integração com o Ollama](https://www.home-assistant.io/integrations/ollama/) — requisitos, suporte a ferramentas e limitações.',
          '[Integração OpenAI Conversation](https://www.home-assistant.io/integrations/openai_conversation/) — serviço em nuvem e API paga.',
          '[Integração Wyoming Protocol](https://www.home-assistant.io/integrations/wyoming/) — serviços de voz suportados e configuração.',
          '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/) — preço, palavras de ativação e processamento local.',
          '[Instalação](https://www.home-assistant.io/installation/) — Home Assistant OS e contêiner.',
          '[Preços da Nabu Casa](https://www.nabucasa.com/pricing/) — preço e teste do Home Assistant Cloud.',
          '[Política de privacidade do Home Assistant](https://www.home-assistant.io/privacy/) — analytics e alcance da nuvem.',
          '[Home Assistant Core 2026.10.3](https://github.com/home-assistant/core/releases/tag/2026.10.3) — data de lançamento e licença.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Piper TTS](/pt/power-local-llm/piper-tts-review) — o motor de saída de voz que o Assist oferece para vozes locais.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — outra forma de rodar o reconhecimento de voz Whisper localmente.',
          '[Análise do Ollama](/pt/power-local-llm/ollama-review) — o servidor LLM local ao qual a integração com o Ollama se conecta.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação de categoria à qual esta análise pertence.',
          '[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/home-assistant-assist-review-hero-ar.webp',
    title: 'مراجعة Home Assistant Assist: تحكم صوتي محلي ووكلاء LLM',
    seoTitle: 'مراجعة Home Assistant Assist: صوت محلي ووكلاء LLM',
    intro:
      'Assist هو المساعد الصوتي المدمج في [Home Assistant](https://www.home-assistant.io/voice_control/)، برنامج المنزل الذكي مفتوح المصدر. يمكنه العمل بالكامل على جهازك الخاص: يتولى Whisper أو Speech-to-Phrase التعرف على الكلام ويتولى Piper إخراج الصوت، ويتصلان عبر بروتوكول Wyoming، كما يمكنه تمرير الطلبات إلى نموذج LLM مثل نموذج تقدمه Ollama. تغطي هذه المراجعة خط المعالجة الصوتي وLLM هذا فقط، لا Home Assistant ككل، وتستند إلى وثائق المشروع لا إلى تجربة عملية.',
    metaDescription:
      'مراجعة Home Assistant Assist: مساعد صوتي مدمج يعمل محليًا مع Whisper وPiper ويمكنه استخدام وكلاء LLM من Ollama. تستند إلى الوثائق ولم تُختبر.',
    twitterDescription:
      'مراجعة Home Assistant Assist: تحكم صوتي محلي عبر Whisper وPiper وWyoming مع وكلاء LLM من Ollama. ما تؤكده الوثائق وما تتركه مفتوحًا.',
    audience:
      'مستخدمو Home Assistant وهواة المنزل الذكي الذين يريدون تحكمًا صوتيًا يبقى داخل المنزل ويحتاجون إلى معرفة ما تؤكده الوثائق وما هو تجريبي وكم تكلف خيار السحابة.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Home Assistant Assist',
    targetKeywords: [
      'مراجعة home assistant assist',
      'مساعد صوتي محلي home assistant',
      'assist whisper piper wyoming',
      'وكيل محادثة ollama home assistant',
      'تحكم صوتي دون اتصال المنزل الذكي',
      'home assistant voice preview edition',
      'مساعد صوتي llm home assistant',
    ],
    current_models_mentioned: ['Whisper', 'Piper', 'Ollama'],
    current_hardware_mentioned: [
      'Raspberry Pi 4',
      'Intel NUC',
      'Home Assistant Green',
      'Voice Preview Edition',
    ],
    leadAnswerBlock:
      '**Assist (ضمن Home Assistant Core 2026.10.3 الصادر في 23 أكتوبر 2026) هو المساعد الصوتي في منصة المنزل الذكي Home Assistant، ويمكنه العمل بالكامل على جهازك الخاص.** وهو ليس تطبيقًا مستقلًا: فخط المعالجة المحلي الكامل يتطلب Home Assistant OS، ووكيل LLM إضافة اختيارية وتجريبية جزئيًا. كل عبارة هنا مصدرها وثائق المشروع لا الاختبار.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Assist دون اتصال بالإنترنت تمامًا؟',
        answer:
          'بحسب الوثائق نعم: يمكن تشغيل التعرف على الكلام وإخراج الصوت واكتشاف كلمة التنبيه على جهازك الخاص، ويقول الدليل المحلي: "Your spoken commands never leave your home." أما Home Assistant Cloud ونماذج LLM السحابية فهي بدائل اختيارية.',
        bullets: [
          'تتحكم الجمل المدمجة في الأجهزة والمناطق دون أي LLM.',
          'Speech-to-Phrase تعرّف محلي سريع لكنه محدود، أما Whisper فمفتوح.',
          'يربط بروتوكول Wyoming محركات التعرف والأصوات وكلمة التنبيه، حتى على جهاز آخر.',
          'يمكن لـ Ollama وOpenAI العمل كوكلاء محادثة فوق ذلك.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'ما هو Assist؟',
        anchor: 'what-is-assist',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'المتطلبات',
        anchor: 'requirements',
      },
      {
        label: 'كيف تبدأ',
        anchor: 'getting-started',
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'تدفق البيانات والخصوصية',
        anchor: 'privacy',
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use',
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
        anchor: 'who-should-not-use',
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq',
      },
      {
        label: 'الخلاصة',
        anchor: 'verdict',
      },
      {
        label: 'المصادر',
        anchor: 'sources',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Assist هو المساعد الصوتي مفتوح المصدر داخل Home Assistant، يحوّل الأوامر المنطوقة أو المكتوبة إلى إجراءات في المنزل الذكي، محليًا أو بمساعدة السحابة وLLM.',
          },
          {
            type: 'plain-terms',
            text:
              'تتحدث إلى جهاز مزود بميكروفون، فيحوّل محرك صوتي كلامك إلى نص، ويطابق Home Assistant النص مع إجراء على جهاز أو يسأل LLM، ثم يقرأ صوتٌ الإجابة.',
          },
        ],
        items: [
          'الصيانة: آخر دفع إلى المستودع كان في 24 أكتوبر 2026، فلا ينطبق تحذير المشروع المهمل.',
          'الرخصة: مفتوح المصدر بترخيص Apache-2.0 ومجاني التشغيل؛ يكلّف فقط Home Assistant Cloud وبعض أجهزة الصوت.',
          'التاريخ: أُدخل Assist في Home Assistant 2023.2، وتبعه تكامل Ollama في 2024.4.',
          'النطاق: طبقة صوتية داخل منصة أكبر، فأنت تشغّل (أو تشغّل بالفعل) خادم Home Assistant.',
          'التحكم في المنزل عبر LLM تجريبي ولا يعمل إلا مع النماذج التي تدعم الأدوات.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              'تستند هذه المراجعة إلى وثائق Home Assistant وصفحة إصدارات GitHub وصفحات Nabu Casa، وقد روجعت في 24 أكتوبر 2026. لم تثبّت PromptQuorum خط المعالجة ولم تقِس زمنه، لذا لا تُقيَّم جودة التعرف ولا زمن الاستجابة ولا موثوقية LLM.',
          },
        ],
      },
      overview: {
        id: 'what-is-assist',
        title: 'ما هو Assist؟',
        content: [
          '**Assist هو المساعد الصوتي والنصي المدمج في Home Assistant الذي يربط الأوامر بإجراءات المنزل الذكي.** تقول الوثائق إنه أُدخل في Home Assistant 2023.2 ويعمل في التطبيق المرافق وعلى Home Assistant Voice Preview Edition وعلى أجهزة مبنية بـ ESPHome.',
          'تغطي هذه المراجعة خط معالجة Assist فقط: كلمة التنبيه وتحويل الكلام إلى نص ووكيل المحادثة وتحويل النص إلى كلام. أما Home Assistant نفسه بتكاملاته مع الأجهزة وأتمتته فخارج النطاق. ويتيح تكامل Wyoming Protocol، الذي أُدخل في 2023.5، لـ Home Assistant استخدام خدمات الصوت وكلمة التنبيه المحلية.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Assist ليس تنزيلًا منفصلًا: تحصل عليه بتثبيت Home Assistant ثم تضيف خدمات الصوت كتطبيقات.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          {
            'الخيار': 'Home Assistant OS',
            'مصدر الحصول عليه':
              '[دليل التثبيت](https://www.home-assistant.io/installation/): Green وRaspberry Pi وOdroid وx86-64 وآلات افتراضية',
          },
          {
            'الخيار': 'الحاوية',
            'مصدر الحصول عليه': 'Docker أو ما يشبهه على Linux؛ لا وصول إلى التطبيقات، فلا تطبيقا Whisper وPiper',
          },
          {
            'الخيار': 'التطبيق المرافق',
            'مصدر الحصول عليه':
              '[Google Play](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android) و[F-Droid](https://f-droid.org/packages/io.homeassistant.companion.android.minimal) و[App Store](https://apps.apple.com/app/home-assistant/id1099568401)',
          },
          {
            'الخيار': 'عتاد الصوت',
            'مصدر الحصول عليه':
              '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/): السعر الموصى به 69 دولارًا دون ضريبة أو 59 يورو شاملة الضريبة',
          },
          {
            'الخيار': 'Home Assistant Cloud',
            'مصدر الحصول عليه': '[Nabu Casa](https://www.nabucasa.com/pricing/): 7.50 يورو شهريًا أو 75 يورو سنويًا دون ضريبة؛ تجربة 31 يومًا',
          },
          {
            'الخيار': 'الموقع',
            'مصدر الحصول عليه': '[home-assistant.io/voice_control](https://www.home-assistant.io/voice_control/)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'مصدر الحصول عليه': '[home-assistant.io/privacy](https://www.home-assistant.io/privacy/)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[home-assistant/core](https://github.com/home-assistant/core)، Apache-2.0',
          },
        ],
        note:
          'الإصدار المراجَع: Home Assistant Core 2026.10.3، صدر في 23 أكتوبر 2026 بحسب GitHub. الأسعار كما وردت في صفحتي Voice Preview Edition وNabu Casa في 24 أكتوبر 2026؛ وتعرض صفحة Nabu Casa عملات أخرى لم تُفحص.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**لا تذكر الوثائق أزمنة إلا لبضعة أجهزة مرجعية، وما عداها تقدير بالتخمين.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          {
            'البند': 'نظام التشغيل',
            'ما تقوله المصادر': 'Home Assistant OS للخط الكامل؛ تثبيتات الحاويات بلا تطبيقات',
          },
          {
            'البند': 'الكلام إلى نص',
            'ما تقوله المصادر': 'Speech-to-Phrase: أقل من ثانية على Green أو Pi 4. Whisper: نحو 8 ثوانٍ على Pi 4 وأقل من ثانية على Intel NUC',
          },
          {
            'البند': 'النص إلى كلام',
            'ما تقوله المصادر': 'Piper المحسَّن لـ Pi 4: 1.6 ثانية من الكلام في كل ثانية مع نماذج متوسطة الجودة',
          },
          {
            'البند': 'وكيل LLM',
            'ما تقوله المصادر': 'خادم Ollama يمكن الوصول إليه عبر الشبكة؛ لا يتحكم في المنزل إلا النماذج التي تدعم الأدوات',
          },
          {
            'البند': 'الكيانات المكشوفة',
            'ما تقوله المصادر': 'يوصى بأقل من 25 مع Ollama؛ نافذة السياق الافتراضية 8k في Home Assistant و2k في Ollama',
          },
          {
            'البند': 'كلمة التنبيه',
            'ما تقوله المصادر': 'Voice Preview Edition: "Okay Nabu" أو "Hey Jarvis" أو "Hey Mycroft" على الجهاز؛ وopenWakeWord مذكور لـ Wyoming',
          },
        ],
        note: 'تختلف الجودة باختلاف اللغة، فراجع جدول اللغات لكل خيار قبل شراء العتاد.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: ['**تتبع هذه الخطوات الوثائق؛ ولم تنفذها PromptQuorum.**'],
        numberedItems: [
          {
            title: 'ثبّت Home Assistant OS',
            whyItMatters:
              'استخدم Home Assistant OS على Green أو Raspberry Pi أو جهاز x86-64 أو آلة افتراضية إن أردت تطبيقات الصوت المحلي.',
          },
          {
            title: 'أضف خدمات الصوت',
            whyItMatters: 'شغّل تطبيقات Whisper أو Piper أو Speech-to-Phrase؛ يكتشفها تكامل Wyoming وتضيفها من هناك.',
          },
          {
            title: 'أنشئ مساعدًا صوتيًا',
            whyItMatters: 'من الإعدادات ثم المساعدات الصوتية، اختر محركات الصوت ووكيل المحادثة: المدمج أو LLM مثل Ollama.',
          },
          {
            title: 'أضف ميكروفونًا',
            whyItMatters: 'استخدم التطبيق المرافق أو Voice Preview Edition أو جهاز ESPHome، واكشف فقط الكيانات التي تريد التحكم فيها.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل ما يلي مصدره وثائق Home Assistant؛ ولم يُختبر أي منه بشكل مستقل.**',
        ],
        items: [
          '**جمل مدمجة ومخصصة.** تعالج جمل أسهم بها المجتمع أوامر مثل تشغيل ضوء؛ ويمكنك إضافة جملك في custom_sentences ومعالجتها عبر intent_script، أو تشغيل الأتمتة بمحفزات الجمل (sentence triggers).',
          '**خدمات Wyoming.** يربط تكامل Wyoming Protocol بين Speech-to-Phrase وWhisper وPiper وopenWakeWord، ويمكنه الإشارة إلى خدمة على جهاز آخر في شبكتك، وهو ما يفيد مع المحركات الثقيلة مثل Whisper.',
          '**وكلاء محادثة LLM.** يمكن لـ Ollama وOpenAI الرد عبر واجهة Assist API، وعند تفعيل التحكم يعملان على الكيانات التي تكشفها.',
          '**عتاد الصوت.** إضافة إلى Voice Preview Edition، تذكر صفحة الصوت أقمار ESPHome ESP32 (تجميعة بـ 13 دولارًا) وLinux-Voice-Assistant التجريبي لأنظمة x64 أو ARM64 وإعدادًا بهاتف تناظري.',
          '**الضبط.** خيارات الضبط الدقيق لـ Whisper وPiper موثقة في صفحة كل تطبيق.',
        ],
        note: 'بحسب صفحة الصوت، يمكن كشف النصوص البرمجية لنماذج LLM وإعداد شخصيات الذكاء الاصطناعي.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**مع Home Assistant Cloud، لا يُرسل إلى Nabu Casa سوى الصوت لتحويل الكلام إلى نص والنص إلى كلام، بينما تُنفَّذ الإجراءات نفسها على Home Assistant الخاص بك، بحسب الوثائق.** يتحدث وكيل Ollama إلى خادم تستضيفه بنفسك، ولا تضيف صفحة Ollama أي بيان عن الخصوصية. أما تكامل OpenAI فهو خدمة سحابية لا تعمل إلا مع نقطة OpenAI الرسمية، والكيانات التي تكشفها هي ما يستطيع النموذج التحكم فيه أو الاستعلام عنه.',
          'تنص سياسة خصوصية Home Assistant، المحدَّثة في 27 أغسطس 2026، على أنه لا يُرسل شيء إلى Analytics ما لم توافق، ولا تذكر بيانات الصوت. وتصف Home Assistant Cloud بأنها خدمة تجارية منفصلة تخضع لسياسة خصوصية مزوّدها، وهي سياسة لم تراجعها PromptQuorum.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إقرارات المشروع لا نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة ولا الشيفرة المصدرية لخط المعالجة الصوتي.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Home Assistant الحاليون** الذين يريدون تحكمًا صوتيًا دون إرسال الصوت إلى خدمة سحابية.',
          '**الهواة الذين لديهم خادم أو Raspberry Pi فائض** ويقبلون اختيار محركات الصوت وضبطها لكل لغة.',
          '**من يشغّل Ollama بالفعل** ويريد تجربة وكيل LLM على كيانات منزله مع قبول وضعه التجريبي.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**جودة التعرف وسرعته.** الأزمنة أعلاه من الوثائق؛ ولم تقس PromptQuorum شيئًا.',
          '**موثوقية LLM.** تحذر الوثائق من أن النماذج الأصغر ترتكب أخطاء أكثر عند تفعيل التحكم؛ أما مدى تكرار ذلك فلم يُختبر هنا.',
          '**تحديد حجم العتاد.** لا يُذكر حد أدنى للذاكرة أو المعالج لـ Whisper أو لنماذج Ollama، ولا يُوصى بأي نموذج.',
          '**التعامل مع البيانات السحابية.** لم تُراجع سياسة خصوصية Nabu Casa ولا مدد الاحتفاظ.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          {
            'التطبيق': '[Jarvis](/ar/power-local-llm/jarvis-mac-review)',
            'المنصات': 'macOS',
            'السعر / الرخصة': 'مجاني / مفتوح المصدر',
            'الفرق الأبرز': 'مساعد سطح مكتب لجهاز واحد مع Llama وWhisper وKokoro المضمّنة، بحسب بطاقته',
          },
          {
            'التطبيق': '[Voxa](/ar/power-local-llm/voxa-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'مساعد صوتي لسطح المكتب يبدأ محليًا مع صوت سحابي اختياري',
          },
          {
            'التطبيق': '[Dograh](/ar/power-local-llm/dograh-review)',
            'المنصات': 'ويب (استضافة ذاتية)',
            'السعر / الرخصة': 'مجاني عند الاستضافة الذاتية / BSD-2-Clause',
            'الفرق الأبرز': 'منصة وكلاء صوتيين مع اتصال هاتفي ونموذج من اختيارك',
          },
        ],
        note:
          'Assist خط معالجة داخل خادم أتمتة منزلية، لذا فهذه أقرب المساعدات الصوتية في الدليل وليست بدائل مباشرة؛ تأكد من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى LLM لاستخدام Assist؟',
            a:
              'لا. تعالج مطابقة الجمل المدمجة أوامر الأجهزة بدونه؛ ووكيل LLM اختياري، وتصف صفحة Ollama تحكمه في Home Assistant بأنه تجريبي.',
          },
          {
            q: 'ما الذي لا يستطيع Speech-to-Phrase فعله؟',
            a:
              'إنه نموذج مغلق لا يفهم إلا جزءًا من أوامر Assist، لذا لا تعمل قوائم التسوق والمؤقتات والإذاعات الداخلية مباشرة بعد التثبيت. يحاول Whisper تفريغ كل شيء لكنه أبطأ.',
          },
          {
            q: 'هل يعمل Ollama مع محفزات الجمل؟',
            a:
              'لا، تقول صفحة Ollama إن التكامل لا يعمل مع محفزات الجمل. وللنماذج الصغيرة تقترح تكاملين لـ Ollama بالنموذج نفسه: أحدهما بلا تحكم للمحادثة والآخر مع تحكم للأوامر.',
          },
          {
            q: 'هل سيعمل Assist بلغتي؟',
            a:
              'يُقيَّم دعم اللغات بشكل منفصل للمعالجة المحلية ولـ Home Assistant Cloud على مقياس من أربع درجات من "غير مدعومة" إلى "مدعومة بالكامل"؛ فراجع أولًا الجدول الخاص بلغتك ومحركك.',
          },
          {
            q: 'هل يستطيع الهاتف الاستماع إلى كلمة تنبيه؟',
            a:
              'تقول صفحة الصوت إن هواتف Android يمكنها استخدام اكتشاف كلمة التنبيه، مع "Hey Jarvis" و"Hey Nabu" مثالين، ولا تصف الميزة لهاتف iPhone.',
          },
          {
            q: 'هل تكامل OpenAI مجاني؟',
            a: 'لا. تصفه الوثائق بأنه خدمة مدفوعة تتطلب مفتاح API، وتنصح بمراقبة التكاليف وتحديد حدود للاستخدام.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Assist طريقة نشطة التطوير لإضافة التحكم الصوتي إلى نظام Home Assistant، مع مسار محلي كامل موثق ومسارين اختياريين للسحابة وLLM. في المقابل يحتاج إلى تثبيت Home Assistant، ويتطلب خطه المحلي الكامل Home Assistant OS، ويبطؤ Whisper على اللوحات الصغيرة بحسب الوثائق، والتحكم عبر LLM تجريبي. يناسب مستخدمي Home Assistant الحاليين الذين يريدون إبقاء الصوت داخل المنزل ولا يمانعون ضبطه؛ ومن يريد مساعدًا صوتيًا مستقلًا فعليه النظر في البدائل أعلاه.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[التحكم الصوتي في Assist](https://www.home-assistant.io/voice_control/) — نظرة عامة والأجهزة واللغات المدعومة.',
          '[دليل المساعد الصوتي المحلي](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) — Speech-to-Phrase وWhisper وPiper والأزمنة.',
          '[إعداد الصوت مع Home Assistant Cloud](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) — ما يُرسل إلى السحابة.',
          '[تكامل Ollama](https://www.home-assistant.io/integrations/ollama/) — المتطلبات ودعم الأدوات والقيود.',
          '[تكامل OpenAI Conversation](https://www.home-assistant.io/integrations/openai_conversation/) — خدمة سحابية وواجهة API مدفوعة.',
          '[تكامل Wyoming Protocol](https://www.home-assistant.io/integrations/wyoming/) — خدمات الصوت المدعومة والإعداد.',
          '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/) — السعر وكلمات التنبيه والمعالجة المحلية.',
          '[التثبيت](https://www.home-assistant.io/installation/) — Home Assistant OS والحاوية.',
          '[أسعار Nabu Casa](https://www.nabucasa.com/pricing/) — سعر Home Assistant Cloud والتجربة.',
          '[سياسة خصوصية Home Assistant](https://www.home-assistant.io/privacy/) — التحليلات ونطاق السحابة.',
          '[Home Assistant Core 2026.10.3](https://github.com/home-assistant/core/releases/tag/2026.10.3) — تاريخ الإصدار والرخصة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Piper TTS](/ar/power-local-llm/piper-tts-review) — محرك إخراج الصوت الذي يقدمه Assist للأصوات المحلية.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — طريقة أخرى لتشغيل التعرف على الكلام Whisper محليًا.',
          '[مراجعة Ollama](/ar/power-local-llm/ollama-review) — خادم LLM المحلي الذي يتصل به تكامل Ollama.',
          '[مقارنة أدوات الصوت والأوديو](/ar/power-local-llm/local-llm-voice-audio-compared) — المقارنة الفئوية التي تنتمي إليها هذه المراجعة.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/home-assistant-assist-review-hero-zh.webp',
    title: 'Home Assistant Assist 评测：本地语音控制与 LLM 智能体',
    seoTitle: 'Home Assistant Assist 评测：本地语音与 LLM',
    intro:
      'Assist 是开源智能家居软件 [Home Assistant](https://www.home-assistant.io/voice_control/) 内置的语音助手。它可以完全运行在你自己的硬件上：用 Whisper 或 Speech-to-Phrase 做语音识别，用 Piper 做语音输出，并通过 Wyoming 协议连接；它还能把请求交给 LLM，例如由 Ollama 提供的模型。本文只评测这条语音与 LLM 流水线，不涉及 Home Assistant 的其他部分，内容依据项目文档，而非亲自动手测试。',
    metaDescription: 'Home Assistant Assist 评测：内置语音助手可借助 Whisper 与 Piper 在本地运行，也能接入 Ollama LLM 智能体。内容基于官方文档，未经实测。',
    twitterDescription: 'Home Assistant Assist 评测：用 Whisper、Piper 和 Wyoming 实现本地语音控制，并可接入 Ollama LLM 智能体。文档已确认与未说明的内容。',
    audience: '希望语音控制数据留在家中的 Home Assistant 用户和智能家居玩家，他们需要知道文档确认了什么、哪些功能仍是实验性的，以及云端选项的费用。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Home Assistant Assist 评测',
    targetKeywords: [
      'home assistant assist 评测',
      'home assistant 本地语音助手',
      'assist whisper piper wyoming',
      'home assistant ollama 对话智能体',
      '智能家居离线语音控制',
      'home assistant voice preview edition',
      'home assistant llm 语音助手',
    ],
    current_models_mentioned: ['Whisper', 'Piper', 'Ollama'],
    current_hardware_mentioned: [
      'Raspberry Pi 4',
      'Intel NUC',
      'Home Assistant Green',
      'Voice Preview Edition',
    ],
    leadAnswerBlock:
      '**Assist（包含在 2026 年 10 月 23 日发布的 Home Assistant Core 2026.10.3 中）是智能家居平台 Home Assistant 的语音助手，可以完全运行在你自己的硬件上。** 它不是独立应用：完整的本地流水线需要 Home Assistant OS，LLM 智能体则是可选且部分处于实验阶段的附加功能。本文所有表述均来自项目文档，而非测试结果。',
    quickAnswerTop: {
      zh: {
        question: 'Assist 可以完全离线运行吗？',
        answer:
          '按文档所述可以：语音识别、语音输出和唤醒词检测都能在你自己的硬件上运行，本地指南写道“Your spoken commands never leave your home.”。Home Assistant Cloud 和云端 LLM 是可选的替代方案。',
        bullets: [
          '内置语句无需任何 LLM 即可控制设备和区域。',
          'Speech-to-Phrase 是速度快但范围有限的本地识别，Whisper 则是开放式识别。',
          'Wyoming 协议把识别、语音和唤醒词引擎连接起来，也包括位于另一台机器上的引擎。',
          'Ollama 和 OpenAI 可在此基础上充当对话智能体。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer',
      },
      {
        label: 'Assist 是什么？',
        anchor: 'what-is-assist',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '运行要求',
        anchor: 'requirements',
      },
      {
        label: '上手步骤',
        anchor: 'getting-started',
      },
      {
        label: '来源已证实的功能',
        anchor: 'key-features',
      },
      {
        label: '数据流向与隐私',
        anchor: 'privacy',
      },
      {
        label: '适合哪些人',
        anchor: 'who-should-use',
      },
      {
        label: '我们未能核实的内容',
        anchor: 'who-should-not-use',
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives',
      },
      {
        label: '常见问题',
        anchor: 'faq',
      },
      {
        label: '结论',
        anchor: 'verdict',
      },
      {
        label: '来源',
        anchor: 'sources',
      },
      {
        label: '相关阅读',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Assist 是 Home Assistant 内置的开源语音助手，可把口述或键入的指令变成智能家居操作，既可本地运行，也可借助云端和 LLM。',
          },
          {
            type: 'plain-terms',
            text: '你对带麦克风的设备说话，语音引擎把话转成文字，Home Assistant 将文字匹配到设备操作或交给 LLM，再由语音把回答读出来。',
          },
        ],
        items: [
          '维护情况：仓库最近一次推送是在 2026 年 10 月 24 日，因此不适用“项目停更”警告。',
          '许可证：Apache-2.0 开源，可免费运行；只有 Home Assistant Cloud 和部分语音硬件需要付费。',
          '历史：Assist 随 Home Assistant 2023.2 推出，Ollama 集成在 2024.4 加入。',
          '范围：它是更大平台中的语音层，因此你需要运行（或已在运行）Home Assistant 服务器。',
          '用 LLM 控制家居属于实验性功能，只适用于支持工具调用的模型。',
        ],
        callouts: [
          {
            type: 'note',
            text:
              '本文依据 2026 年 10 月 24 日查阅的 Home Assistant 文档、GitHub 发布页和 Nabu Casa 页面。PromptQuorum 没有安装或计时该流水线，因此不评估识别质量、延迟和 LLM 的可靠性。',
          },
        ],
      },
      overview: {
        id: 'what-is-assist',
        title: 'Assist 是什么？',
        content: [
          '**Assist 是 Home Assistant 内置的语音与文字助手，把指令对应到智能家居操作。** 文档称它随 Home Assistant 2023.2 推出，可在配套应用、Home Assistant Voice Preview Edition 以及用 ESPHome 制作的设备上使用。',
          '本文只涵盖 Assist 流水线：唤醒词、语音转文字、对话智能体和文字转语音。Home Assistant 本身及其设备集成与自动化不在范围内。2023.5 引入的 Wyoming Protocol 集成让 Home Assistant 能使用本地的语音和唤醒词服务。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: ['**Assist 不是单独下载的软件：先安装 Home Assistant，再以应用形式添加语音服务。**'],
        columns: ['选项', '获取方式'],
        rows: [
          {
            '选项': 'Home Assistant OS',
            '获取方式': '[安装指南](https://www.home-assistant.io/installation/)：Green、Raspberry Pi、Odroid、x86-64、虚拟机',
          },
          {
            '选项': '容器',
            '获取方式': 'Linux 上的 Docker 等；无法使用应用，因此没有 Whisper 和 Piper 应用',
          },
          {
            '选项': '配套应用',
            '获取方式':
              '[Google Play](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android)、[F-Droid](https://f-droid.org/packages/io.homeassistant.companion.android.minimal)、[App Store](https://apps.apple.com/app/home-assistant/id1099568401)',
          },
          {
            '选项': '语音硬件',
            '获取方式': '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/)：建议零售价 $69（不含税）或 €59（含税）',
          },
          {
            '选项': 'Home Assistant Cloud',
            '获取方式': '[Nabu Casa](https://www.nabucasa.com/pricing/)：€7.50/月或 €75/年（不含税）；31 天试用',
          },
          {
            '选项': '官方网站',
            '获取方式': '[home-assistant.io/voice_control](https://www.home-assistant.io/voice_control/)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '[home-assistant.io/privacy](https://www.home-assistant.io/privacy/)',
          },
          {
            '选项': '源代码',
            '获取方式': '[home-assistant/core](https://github.com/home-assistant/core)，Apache-2.0',
          },
        ],
        note:
          '评测版本：Home Assistant Core 2026.10.3，据 GitHub 于 2026 年 10 月 23 日发布。价格为 2026 年 10 月 24 日 Voice Preview Edition 和 Nabu Casa 页面所列；Nabu Casa 页面还提供其他货币，未核对。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: ['**文档只给出了少数参考设备的耗时，超出这些设备的配置只能靠估计。**'],
        columns: ['项目', '来源说明'],
        rows: [
          {
            '项目': '操作系统',
            '来源说明': '完整流水线需要 Home Assistant OS；容器安装没有应用',
          },
          {
            '项目': '语音转文字',
            '来源说明': 'Speech-to-Phrase：Green 或 Pi 4 上不到 1 秒。Whisper：Pi 4 上约 8 秒，Intel NUC 上不到 1 秒',
          },
          {
            '项目': '文字转语音',
            '来源说明': 'Piper，针对 Pi 4 优化：中等质量模型每秒生成 1.6 秒语音',
          },
          {
            '项目': 'LLM 智能体',
            '来源说明': '需要网络可达的 Ollama 服务器；只有支持工具调用的模型才能控制家居',
          },
          {
            '项目': '开放的实体',
            '来源说明': 'Ollama 建议少于 25 个；上下文窗口默认值在 Home Assistant 中为 8k，在 Ollama 中为 2k',
          },
          {
            '项目': '唤醒词',
            '来源说明': 'Voice Preview Edition：设备端检测“Okay Nabu”“Hey Jarvis”或“Hey Mycroft”；Wyoming 另列有 openWakeWord',
          },
        ],
        note: '质量因语言而异，购买硬件前请先查看各选项的语言支持表。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: ['**以下步骤依据文档整理，PromptQuorum 并未实际运行。**'],
        numberedItems: [
          {
            title: '安装 Home Assistant OS',
            whyItMatters: '若想使用本地语音所需的应用，请在 Green、Raspberry Pi、x86-64 机器或虚拟机上使用 Home Assistant OS。',
          },
          {
            title: '添加语音服务',
            whyItMatters: '启动 Whisper、Piper 或 Speech-to-Phrase 应用；Wyoming 集成会发现它们，再从那里添加。',
          },
          {
            title: '创建语音助手',
            whyItMatters: '在“设置”的“语音助手”中选择语音引擎和对话智能体：内置的，或 Ollama 等 LLM。',
          },
          {
            title: '准备麦克风',
            whyItMatters: '使用配套应用、Voice Preview Edition 或 ESPHome 设备，并只开放你希望被控制的实体。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: ['**以下内容均来自 Home Assistant 文档，没有一项经过独立测试。**'],
        items: [
          '**内置与自定义语句。** 社区贡献的语句可处理“开灯”之类的指令；你可以在 custom_sentences 下添加自己的语句并用 intent_script 处理，也可用语句触发器（sentence trigger）启动自动化。',
          '**Wyoming 服务。** Wyoming Protocol 集成连接 Speech-to-Phrase、Whisper、Piper 和 openWakeWord，还可指向网络中另一台设备上的服务，这对 Whisper 这类吃资源的引擎很有帮助。',
          '**LLM 对话智能体。** Ollama 和 OpenAI 可通过 Assist API 作答，并在启用控制后对你开放的实体执行操作。',
          '**语音硬件。** 除 Voice Preview Edition 外，语音页面还列出 ESPHome ESP32 卫星设备（一种 13 美元的自制方案）、面向 x64 或 ARM64 系统的实验性 Linux-Voice-Assistant，以及模拟电话方案。',
          '**调优。** Whisper 和 Piper 的微调选项记录在各自应用的文档页面中。',
        ],
        note: '据语音页面，脚本可以开放给 LLM，也可以配置 AI 个性。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**据文档所述，使用 Home Assistant Cloud 时，只有音频会发送到 Nabu Casa 做语音转文字和文字转语音，而具体操作仍在你自己的 Home Assistant 上执行。** Ollama 智能体与你自己托管的服务器通信，Ollama 页面没有给出隐私声明。OpenAI 集成是云服务，只能用于 OpenAI 官方端点；你开放的实体就是模型可以控制或查询的对象。',
          'Home Assistant 隐私政策最近更新于 2026 年 8 月 27 日，称除非你选择加入，否则不会向 Analytics 发送任何数据，并且未提及语音数据。它指出 Home Assistant Cloud 是独立的商业服务，适用其提供方自己的隐私政策，PromptQuorum 没有审阅该政策。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是项目方的声明，而非审计结果。PromptQuorum 没有检查网络流量，也没有检查语音流水线的源代码。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**现有的 Home Assistant 用户**，希望语音控制而不把音频发送到云服务。',
          '**有闲置服务器或 Raspberry Pi 的折腾党**，愿意按语言挑选并调校语音引擎。',
          '**已经在运行 Ollama 的用户**，想在自家实体上试用 LLM 智能体，并接受其实验性质。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**识别质量与速度。** 上文的耗时来自文档，PromptQuorum 没有测量任何数据。',
          '**LLM 的可靠性。** 文档警告启用控制后较小的模型更容易出错，但出错频率在此未经测试。',
          '**硬件规格。** 文档没有给出运行 Whisper 或 Ollama 模型所需的最低内存或 CPU，也没有推荐具体模型。',
          '**云端数据处理。** 未审阅 Nabu Casa 的隐私政策和数据保留条款。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Jarvis](/zh/power-local-llm/jarvis-mac-review)',
            '平台': 'macOS',
            '价格 / 许可证': '免费 / 开源',
            '主要区别': '据其条目，单机桌面助手，内置 Llama、Whisper 和 Kokoro',
          },
          {
            '应用': '[Voxa](/zh/power-local-llm/voxa-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '本地优先的桌面语音助手，云端语音为可选项',
          },
          {
            '应用': '[Dograh](/zh/power-local-llm/dograh-review)',
            '平台': 'Web（自托管）',
            '价格 / 许可证': '自托管免费 / BSD-2-Clause',
            '主要区别': '支持电话接入和自带模型的语音智能体平台',
          },
        ],
        note: 'Assist 是家庭自动化服务器内的一条流水线，所以上面列的是目录中最接近的语音助手，而非直接替代品；请在各应用页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '使用 Assist 需要 LLM 吗？',
            a: '不需要。内置的语句匹配无需 LLM 就能处理设备指令；LLM 智能体是可选的，Ollama 页面称其控制 Home Assistant 的功能属于实验性质。',
          },
          {
            q: 'Speech-to-Phrase 有哪些做不到的事？',
            a: '它是封闭式模型，只能理解 Assist 指令的一部分，所以购物清单、定时器和广播开箱即用时都无法使用。Whisper 会尽量转写所有内容，但速度更慢。',
          },
          {
            q: 'Ollama 能和语句触发器一起用吗？',
            a: '不能，Ollama 页面说明该集成不支持语句触发器。对于小模型，它建议用同一模型建立两个 Ollama 集成：一个不带控制用于对话，一个带控制用于指令。',
          },
          {
            q: 'Assist 支持我的语言吗？',
            a: '语言支持分别针对本地处理和 Home Assistant Cloud 评级，分“不支持”到“完全支持”四档；请先查看你的语言与引擎对应的表格。',
          },
          {
            q: '手机能监听唤醒词吗？',
            a: '语音页面称 Android 手机可使用唤醒词检测，示例为“Hey Jarvis”和“Hey Nabu”，并未描述 iPhone 上的该功能。',
          },
          {
            q: 'OpenAI 集成是免费的吗？',
            a: '不是。文档称它是需要 API 密钥的付费服务，并建议关注费用、设置用量上限。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Assist 是为 Home Assistant 系统添加语音控制的一种持续活跃开发的方式，既有文档完备的纯本地路线，也有可选的云端和 LLM 路线。代价是需要先有 Home Assistant 安装，完整的本地流水线要求 Home Assistant OS，据文档，Whisper 在小型开发板上较慢，LLM 控制仍属实验性。它适合希望语音留在家中、并愿意调校的现有 Home Assistant 用户；如果你想要独立的语音助手，请看上面的替代方案。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Assist 语音控制](https://www.home-assistant.io/voice_control/) — 概览、支持的设备和语言.',
          '[本地语音助手指南](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) — Speech-to-Phrase、Whisper、Piper 与耗时.',
          '[Home Assistant Cloud 语音设置](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) — 哪些数据会发送到云端.',
          '[Ollama 集成](https://www.home-assistant.io/integrations/ollama/) — 要求、工具支持与限制.',
          '[OpenAI Conversation 集成](https://www.home-assistant.io/integrations/openai_conversation/) — 云服务与付费 API.',
          '[Wyoming Protocol 集成](https://www.home-assistant.io/integrations/wyoming/) — 支持的语音服务与设置.',
          '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/) — 价格、唤醒词与本地处理.',
          '[安装](https://www.home-assistant.io/installation/) — Home Assistant OS 与容器.',
          '[Nabu Casa 定价](https://www.nabucasa.com/pricing/) — Home Assistant Cloud 价格与试用.',
          '[Home Assistant 隐私政策](https://www.home-assistant.io/privacy/) — 分析数据与云服务适用范围.',
          '[Home Assistant Core 2026.10.3](https://github.com/home-assistant/core/releases/tag/2026.10.3) — 发布日期与许可证.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Piper TTS 评测](/zh/power-local-llm/piper-tts-review) — Assist 为本地声音提供的语音输出引擎。',
          '[Whisper.cpp 评测](/zh/power-local-llm/whisper-cpp-review) — 在本地运行 Whisper 语音识别的另一种方式。',
          '[Ollama 评测](/zh/power-local-llm/ollama-review) — Ollama 集成所连接的本地 LLM 服务器。',
          '[语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 本文所属的类别对比。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/home-assistant-assist-review-hero-ko.webp',
    title: 'Home Assistant Assist 리뷰: 로컬 음성 제어와 LLM 에이전트',
    seoTitle: 'Home Assistant Assist 리뷰: 로컬 음성과 LLM',
    intro:
      'Assist는 오픈소스 스마트홈 소프트웨어 [Home Assistant](https://www.home-assistant.io/voice_control/)에 내장된 음성 비서입니다. 음성 인식에는 Whisper 또는 Speech-to-Phrase, 음성 출력에는 Piper를 쓰고 Wyoming 프로토콜로 연결하면 모든 것을 내 하드웨어에서 돌릴 수 있으며, 요청을 Ollama 등이 제공하는 LLM에 넘길 수도 있습니다. 이 리뷰는 Home Assistant 전체가 아니라 이 음성·LLM 파이프라인만 다루며, 직접 테스트가 아니라 프로젝트 문서를 근거로 합니다.',
    metaDescription: 'Home Assistant Assist 리뷰: Whisper와 Piper로 로컬에서 동작하고 Ollama LLM 에이전트도 쓸 수 있는 내장 음성 비서를 문서 기준으로 정리했습니다.',
    twitterDescription: 'Home Assistant Assist 리뷰: Whisper, Piper, Wyoming 기반 로컬 음성 제어와 Ollama LLM 에이전트. 문서가 확인한 내용과 남겨 둔 부분을 정리했습니다.',
    audience: '음성 제어를 집 안에서만 처리하고 싶은 Home Assistant 사용자와 스마트홈 제작자로, 문서가 확인한 내용과 실험적인 부분, 클라우드 옵션의 비용을 알아야 하는 분.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Home Assistant Assist 리뷰',
    targetKeywords: [
      'home assistant assist 리뷰',
      'home assistant 로컬 음성 비서',
      'assist whisper piper wyoming',
      'home assistant ollama 대화 에이전트',
      '오프라인 음성 제어 스마트홈',
      'home assistant voice preview edition',
      'home assistant llm 음성 비서',
    ],
    current_models_mentioned: ['Whisper', 'Piper', 'Ollama'],
    current_hardware_mentioned: [
      'Raspberry Pi 4',
      'Intel NUC',
      'Home Assistant Green',
      'Voice Preview Edition',
    ],
    leadAnswerBlock:
      '**Assist(2026년 10월 23일 출시된 Home Assistant Core 2026.10.3에 포함)는 스마트홈 플랫폼 Home Assistant의 음성 비서이며, 모든 것을 내 하드웨어에서 실행할 수 있습니다.** 독립 실행형 앱이 아닙니다. 완전한 로컬 파이프라인에는 Home Assistant OS가 필요하고, LLM 에이전트는 선택 사항이자 일부는 실험 단계인 추가 기능입니다. 여기의 모든 서술은 테스트가 아니라 프로젝트 문서에서 나온 것입니다.',
    quickAnswerTop: {
      ko: {
        question: 'Assist는 완전히 오프라인으로 동작하나요?',
        answer:
          '문서에 따르면 그렇습니다. 음성 인식, 음성 출력, 웨이크 워드 감지를 모두 내 하드웨어에서 실행할 수 있으며, 로컬 가이드에는 "Your spoken commands never leave your home."라고 적혀 있습니다. Home Assistant Cloud와 클라우드 LLM은 선택 가능한 대안입니다.',
        bullets: [
          '내장 문장만으로 LLM 없이 기기와 구역을 제어합니다.',
          'Speech-to-Phrase는 빠르지만 범위가 제한된 로컬 인식이고, Whisper는 개방형 인식입니다.',
          'Wyoming 프로토콜이 인식·음성·웨이크 워드 엔진을 다른 컴퓨터에 있는 것까지 포함해 연결합니다.',
          '그 위에서 Ollama와 OpenAI를 대화 에이전트로 쓸 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Assist란?',
        anchor: 'what-is-assist',
      },
      {
        label: '입수 방법',
        anchor: 'get-it',
      },
      {
        label: '요구 사항',
        anchor: 'requirements',
      },
      {
        label: '시작하는 방법',
        anchor: 'getting-started',
      },
      {
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '데이터 흐름과 개인정보',
        anchor: 'privacy',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 사항',
        anchor: 'who-should-not-use',
      },
      {
        label: '경쟁 제품과 대안',
        anchor: 'vs-alternatives',
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq',
      },
      {
        label: '결론',
        anchor: 'verdict',
      },
      {
        label: '출처',
        anchor: 'sources',
      },
      {
        label: '관련 글',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Assist는 Home Assistant에 내장된 오픈소스 음성 비서로, 말하거나 입력한 명령을 로컬 또는 클라우드·LLM의 도움으로 스마트홈 동작으로 바꿉니다.',
          },
          {
            type: 'plain-terms',
            text: '마이크가 달린 기기에 말하면 음성 엔진이 말을 텍스트로 바꾸고, Home Assistant가 그것을 기기 동작에 연결하거나 LLM에 묻고, 음성이 답을 읽어 줍니다.',
          },
        ],
        items: [
          '유지 관리: 저장소의 마지막 푸시는 2026년 10월 24일이어서 방치된 프로젝트 경고는 해당하지 않습니다.',
          '라이선스: Apache-2.0 오픈소스로 무료로 실행할 수 있으며, 비용이 드는 것은 Home Assistant Cloud와 일부 음성 하드웨어뿐입니다.',
          '이력: Assist는 Home Assistant 2023.2에서 도입되었고, Ollama 연동은 2024.4에서 이어졌습니다.',
          '범위: 더 큰 플랫폼 안의 음성 계층이므로 Home Assistant 서버를 운영하고 있거나 운영해야 합니다.',
          'LLM으로 집을 제어하는 기능은 실험적이며 도구를 지원하는 모델에서만 동작합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text:
              '이 리뷰는 2026년 10월 24일에 확인한 Home Assistant 문서, GitHub 릴리스 페이지, Nabu Casa 페이지를 근거로 합니다. PromptQuorum은 이 파이프라인을 설치하거나 시간을 측정하지 않았으므로 인식 품질, 지연 시간, LLM 신뢰도는 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-assist',
        title: 'Assist란?',
        content: [
          '**Assist는 Home Assistant에 내장된 음성·텍스트 비서로, 명령을 스마트홈 동작에 연결합니다.** 문서에 따르면 Home Assistant 2023.2에서 도입되었으며 컴패니언 앱, Home Assistant Voice Preview Edition, ESPHome으로 만든 기기에서 동작합니다.',
          '이 리뷰는 웨이크 워드, 음성 인식, 대화 에이전트, 음성 합성으로 이루어진 Assist 파이프라인만 다룹니다. 기기 연동과 자동화를 포함한 Home Assistant 자체는 범위 밖입니다. 2023.5에서 도입된 Wyoming Protocol 연동 덕분에 Home Assistant는 로컬 음성 및 웨이크 워드 서비스를 사용할 수 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Assist는 별도로 내려받는 프로그램이 아닙니다. Home Assistant를 설치한 뒤 음성 서비스를 앱으로 추가해 사용합니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          {
            '옵션': 'Home Assistant OS',
            '입수 방법': '[설치 가이드](https://www.home-assistant.io/installation/): Green, Raspberry Pi, Odroid, x86-64, 가상 머신',
          },
          {
            '옵션': '컨테이너',
            '입수 방법': 'Linux의 Docker 등. 앱을 쓸 수 없어 Whisper·Piper 앱이 없음',
          },
          {
            '옵션': '컴패니언 앱',
            '입수 방법':
              '[Google Play](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android), [F-Droid](https://f-droid.org/packages/io.homeassistant.companion.android.minimal), [App Store](https://apps.apple.com/app/home-assistant/id1099568401)',
          },
          {
            '옵션': '음성 하드웨어',
            '입수 방법': '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/): 권장 소비자가 세금 별도 69달러 또는 세금 포함 59유로',
          },
          {
            '옵션': 'Home Assistant Cloud',
            '입수 방법': '[Nabu Casa](https://www.nabucasa.com/pricing/): 세금 별도 월 7.50유로 또는 연 75유로, 31일 체험',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[home-assistant.io/voice_control](https://www.home-assistant.io/voice_control/)',
          },
          {
            '옵션': '개인정보 처리방침',
            '입수 방법': '[home-assistant.io/privacy](https://www.home-assistant.io/privacy/)',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[home-assistant/core](https://github.com/home-assistant/core), Apache-2.0',
          },
        ],
        note:
          '검토한 버전: Home Assistant Core 2026.10.3, GitHub 기준 2026년 10월 23일 출시. 가격은 2026년 10월 24일 기준 Voice Preview Edition 및 Nabu Casa 페이지의 표기이며, Nabu Casa 페이지가 제공하는 다른 통화는 확인하지 않았습니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: ['**문서가 소요 시간을 제시하는 것은 소수의 기준 기기뿐이므로 그 밖의 사양은 추정에 의존해야 합니다.**'],
        columns: ['항목', '출처의 설명'],
        rows: [
          {
            '항목': '운영체제',
            '출처의 설명': '전체 파이프라인은 Home Assistant OS 필요, 컨테이너 설치에는 앱이 없음',
          },
          {
            '항목': '음성 인식',
            '출처의 설명': 'Speech-to-Phrase: Green 또는 Pi 4에서 1초 미만. Whisper: Pi 4에서 약 8초, Intel NUC에서 1초 미만',
          },
          {
            '항목': '음성 합성',
            '출처의 설명': 'Piper(Pi 4에 최적화): 중간 품질 모델로 초당 1.6초 분량의 음성 생성',
          },
          {
            '항목': 'LLM 에이전트',
            '출처의 설명': '네트워크로 접근 가능한 Ollama 서버. 도구를 지원하는 모델만 집을 제어 가능',
          },
          {
            '항목': '노출 엔티티',
            '출처의 설명': 'Ollama는 25개 미만 권장. 컨텍스트 창 기본값은 Home Assistant 8k, Ollama 2k',
          },
          {
            '항목': '웨이크 워드',
            '출처의 설명': 'Voice Preview Edition: 기기에서 "Okay Nabu", "Hey Jarvis", "Hey Mycroft" 감지. Wyoming용으로 openWakeWord도 명시',
          },
        ],
        note: '품질은 언어마다 다르므로 하드웨어를 구입하기 전에 각 옵션의 언어 지원표를 확인하세요.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: ['**아래 단계는 문서를 따른 것이며, PromptQuorum이 직접 실행한 것은 아닙니다.**'],
        numberedItems: [
          {
            title: 'Home Assistant OS 설치',
            whyItMatters: '로컬 음성용 앱을 쓰려면 Green, Raspberry Pi, x86-64 PC 또는 가상 머신에 Home Assistant OS를 사용하세요.',
          },
          {
            title: '음성 서비스 추가',
            whyItMatters: 'Whisper, Piper 또는 Speech-to-Phrase 앱을 시작하면 Wyoming 연동이 이를 찾아내며, 거기서 추가합니다.',
          },
          {
            title: '음성 비서 만들기',
            whyItMatters: '설정의 음성 비서에서 음성 엔진과 대화 에이전트(내장 또는 Ollama 같은 LLM)를 고릅니다.',
          },
          {
            title: '마이크 추가',
            whyItMatters: '컴패니언 앱, Voice Preview Edition 또는 ESPHome 기기를 쓰고, 제어하려는 엔티티만 노출하세요.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 내용은 모두 Home Assistant 문서에서 나온 것이며, 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**내장 및 사용자 지정 문장.** 커뮤니티가 기여한 문장이 조명 켜기 같은 명령을 처리하며, custom_sentences에 직접 문장을 추가해 intent_script로 처리하거나 문장 트리거(sentence trigger)로 자동화를 시작할 수 있습니다.',
          '**Wyoming 서비스.** Wyoming Protocol 연동은 Speech-to-Phrase, Whisper, Piper, openWakeWord를 연결하고 네트워크의 다른 기기에 있는 서비스를 가리킬 수도 있어 Whisper처럼 무거운 엔진에 도움이 됩니다.',
          '**LLM 대화 에이전트.** Ollama와 OpenAI는 Assist API를 통해 응답할 수 있고, 제어를 켜면 노출한 엔티티에 대해 동작할 수 있습니다.',
          '**음성 하드웨어.** 음성 페이지에는 Voice Preview Edition 외에 ESPHome ESP32 위성 기기(13달러짜리 자작 구성), x64 또는 ARM64 시스템용 실험적 Linux-Voice-Assistant, 아날로그 전화 구성이 소개되어 있습니다.',
          '**튜닝.** Whisper와 Piper의 미세 조정 옵션은 각 앱의 문서 페이지에 있습니다.',
        ],
        note: '음성 페이지에 따르면 스크립트를 LLM에 노출하고 AI 성격을 설정할 수 있습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**문서에 따르면 Home Assistant Cloud를 쓸 때 음성 인식과 음성 합성을 위해 오디오만 Nabu Casa로 전송되고, 실제 동작은 계속 내 Home Assistant에서 실행됩니다.** Ollama 에이전트는 직접 호스팅하는 서버와 통신하며 Ollama 페이지에는 개인정보 관련 설명이 없습니다. OpenAI 연동은 OpenAI 공식 엔드포인트에서만 동작하는 클라우드 서비스이며, 노출한 엔티티가 모델이 제어하거나 조회할 수 있는 대상입니다.',
          '2026년 8월 27일에 업데이트된 Home Assistant 개인정보 처리방침은 동의하지 않는 한 Analytics로 아무것도 전송되지 않는다고 하며 음성 데이터는 언급하지 않습니다. 또한 Home Assistant Cloud는 제공업체 자체의 개인정보 처리방침을 따르는 별도의 상용 서비스라고 밝히며, PromptQuorum은 그 방침을 검토하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트 측의 선언이며 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽도 음성 파이프라인의 소스 코드도 검사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**기존 Home Assistant 사용자**로, 오디오를 클라우드 서비스로 보내지 않고 음성으로 제어하고 싶은 분.',
          '**남는 서버나 Raspberry Pi가 있는 제작자**로, 언어별로 음성 엔진을 고르고 조정할 의향이 있는 분.',
          '**이미 Ollama를 운영 중인 분**으로, 실험 단계라는 점을 감수하고 집 안 엔티티에 LLM 에이전트를 시험해 보려는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**인식 품질과 속도.** 위의 소요 시간은 문서의 수치이며 PromptQuorum은 아무것도 측정하지 않았습니다.',
          '**LLM 신뢰도.** 제어를 켜면 작은 모델이 더 많이 실수한다고 문서가 경고하지만, 그 빈도는 여기서 테스트하지 않았습니다.',
          '**하드웨어 사양.** Whisper나 Ollama 모델에 필요한 최소 RAM이나 CPU가 제시되지 않았고 권장 모델도 없습니다.',
          '**클라우드 데이터 처리.** Nabu Casa의 개인정보 처리방침과 보관 조건은 검토하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          {
            '앱': '[Jarvis](/ko/power-local-llm/jarvis-mac-review)',
            '플랫폼': 'macOS',
            '가격 / 라이선스': '무료 / 오픈소스',
            '핵심 차이점': '항목 정보에 따르면 Llama, Whisper, Kokoro를 포함한 단일 컴퓨터용 데스크톱 비서',
          },
          {
            '앱': '[Voxa](/ko/power-local-llm/voxa-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이점': '로컬 우선 데스크톱 음성 비서이며 클라우드 음성은 선택 사항',
          },
          {
            '앱': '[Dograh](/ko/power-local-llm/dograh-review)',
            '플랫폼': '웹(자체 호스팅)',
            '가격 / 라이선스': '자체 호스팅 무료 / BSD-2-Clause',
            '핵심 차이점': '전화 연동과 자체 모델 사용을 지원하는 음성 에이전트 플랫폼',
          },
        ],
        note: 'Assist는 홈 오토메이션 서버 안의 파이프라인이므로, 이들은 디렉터리에서 가장 가까운 음성 비서일 뿐 직접적인 대체품이 아닙니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Assist를 쓰려면 LLM이 필요한가요?',
            a: '아니요. 내장 문장 매칭이 LLM 없이 기기 명령을 처리합니다. LLM 에이전트는 선택 사항이며, Ollama 페이지는 Home Assistant 제어 기능을 실험적이라고 설명합니다.',
          },
          {
            q: 'Speech-to-Phrase가 못 하는 것은 무엇인가요?',
            a: '폐쇄형 모델이라 Assist 명령의 일부만 이해하므로, 쇼핑 목록, 타이머, 방송은 기본 상태에서 쓸 수 없습니다. Whisper는 무엇이든 받아쓰려고 하지만 더 느립니다.',
          },
          {
            q: 'Ollama는 문장 트리거와 함께 쓸 수 있나요?',
            a:
              '아니요. Ollama 페이지에 따르면 이 연동은 문장 트리거와 함께 동작하지 않습니다. 작은 모델의 경우 같은 모델로 Ollama 연동을 두 개 만들어, 하나는 제어 없이 대화용으로, 다른 하나는 제어를 켜서 명령용으로 쓰도록 제안합니다.',
          },
          {
            q: 'Assist가 내 언어에서 동작하나요?',
            a: '언어 지원은 로컬 처리와 Home Assistant Cloud를 각각 따로 "지원 안 함"부터 "완전 지원"까지 4단계로 평가합니다. 먼저 내 언어와 엔진에 해당하는 표를 확인하세요.',
          },
          {
            q: '스마트폰이 웨이크 워드를 들을 수 있나요?',
            a: '음성 페이지에 따르면 Android 폰은 웨이크 워드 감지를 사용할 수 있고 예로 "Hey Jarvis"와 "Hey Nabu"가 나오지만, iPhone에 대해서는 이 기능을 설명하지 않습니다.',
          },
          {
            q: 'OpenAI 연동은 무료인가요?',
            a: '아니요. 문서는 API 키가 필요한 유료 서비스라고 설명하며 비용을 모니터링하고 사용량 한도를 설정하라고 권합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Assist는 Home Assistant 시스템에 음성 제어를 더하는, 활발히 개발되는 방법으로, 문서화된 완전 로컬 경로와 선택 가능한 클라우드·LLM 경로를 갖추고 있습니다. 반면 Home Assistant 설치가 필요하고, 완전한 로컬 파이프라인에는 Home Assistant OS가 필요하며, 문서에 따르면 작은 보드에서는 Whisper가 느리고, LLM 제어는 실험적입니다. 음성을 집 안에 두고 조정할 의향이 있는 기존 Home Assistant 사용자에게 맞고, 독립형 음성 비서를 찾는다면 위의 대안을 살펴보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Assist 음성 제어](https://www.home-assistant.io/voice_control/) — 개요, 지원 기기 및 언어.',
          '[로컬 음성 비서 가이드](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) — Speech-to-Phrase, Whisper, Piper 및 소요 시간.',
          '[Home Assistant Cloud 음성 설정](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) — 클라우드로 전송되는 데이터.',
          '[Ollama 연동](https://www.home-assistant.io/integrations/ollama/) — 요구 사항, 도구 지원, 제약.',
          '[OpenAI Conversation 연동](https://www.home-assistant.io/integrations/openai_conversation/) — 클라우드 서비스와 유료 API.',
          '[Wyoming Protocol 연동](https://www.home-assistant.io/integrations/wyoming/) — 지원 음성 서비스와 설정.',
          '[Voice Preview Edition](https://www.home-assistant.io/voice-pe/) — 가격, 웨이크 워드, 로컬 처리.',
          '[설치](https://www.home-assistant.io/installation/) — Home Assistant OS와 컨테이너.',
          '[Nabu Casa 요금](https://www.nabucasa.com/pricing/) — Home Assistant Cloud 가격과 체험.',
          '[Home Assistant 개인정보 처리방침](https://www.home-assistant.io/privacy/) — 분석 데이터와 클라우드 적용 범위.',
          '[Home Assistant Core 2026.10.3](https://github.com/home-assistant/core/releases/tag/2026.10.3) — 출시일과 라이선스.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Piper TTS 리뷰](/ko/power-local-llm/piper-tts-review) — Assist가 로컬 음성용으로 제공하는 음성 출력 엔진.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — Whisper 음성 인식을 로컬에서 실행하는 또 다른 방법.',
          '[Ollama 리뷰](/ko/power-local-llm/ollama-review) — Ollama 연동이 접속하는 로컬 LLM 서버.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 목록.',
        ],
      },
    },
  },
}
