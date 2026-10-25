// OpenWhispr Review: open-source dictation and meeting-notes app (macOS, Windows, Linux, iPhone, iPad) with on-device or cloud speech-to-text
// Slug: openwhispr-review
// Companion to: handy-review, macwhisper-review, aquavoice-review, local-llm-voice-audio-compared
// Sources: openwhispr.com (home, /pricing, /privacy last updated 2026-10-12), github.com/OpenWhispr/openwhispr (README, MIT licence, Releases v1.10.4 published
// 2026-10-22, default-branch commits up to 2026-10-23), docs.openwhispr.com (local models, system requirements), App Store listing id6763804420 (v1.2.4, free), all checked 2026-10-24 — no hands-on testing.

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
    heroImage: '/images/openwhispr-review-hero-en.webp',
    title: 'OpenWhispr Review: Open-Source Dictation and Meeting Notes App',
    seoTitle: 'OpenWhispr Review: Open-Source Dictation and Meeting Notes',
    intro: 'OpenWhispr is an open-source voice-to-text app for macOS, Windows, Linux, iPhone and iPad: you press a hotkey, speak, and the text is pasted where your cursor is, with optional meeting transcription and notes. You choose between speech models that run on your own device and cloud processing, and that choice decides where your voice goes. This review is based on the website, its privacy policy, the documentation and the GitHub repository, checked on 24 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription: 'OpenWhispr review: MIT-licensed dictation and meeting-notes app for Mac, Windows, Linux and iPhone with on-device or cloud speech-to-text. Untested.',
    twitterDescription: 'Voice typing and meeting transcription from an MIT-licensed app, run locally or through the cloud. What the sources confirm about plans, privacy and installers, and what they do not.',
    audience: 'Writers, developers and professionals who want voice dictation and meeting notes and need to know what the sources confirm, where the audio goes in each mode and what the paid plans add.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWhispr review',
    targetKeywords: [
      'openwhispr review',
      'openwhispr',
      'open source dictation app',
      'wispr flow alternative open source',
      'local speech to text mac windows linux',
      'meeting transcription app local',
      'openwhispr.com',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**OpenWhispr (version 1.10.4) is an MIT-licensed voice-to-text app that pastes your dictation into any app, and whether your voice stays on your device depends on whether you pick a local or a cloud speech model.** It adds meeting transcription, notes and an AI assistant, and every statement here comes from the maker\'s website, privacy policy, documentation and GitHub repository.',
    quickAnswerTop: {
      en: {
        question: 'Does OpenWhispr keep my voice on my computer?',
        answer: 'Only in local mode: the privacy policy says that when speech-to-text runs on your device, no audio is transmitted anywhere. With OpenWhispr Cloud or your own API key, the audio is sent to a transcription provider for processing.',
        bullets: [
          'A global hotkey dictates into any app, and a second hotkey translates while you speak.',
          'Meeting detection for Zoom, Teams and FaceTime calls, with speaker labels worked out on the device.',
          'Notes with folders and local semantic search, plus audio and video import.',
          'A voice-assistant hotkey that sends what you say to an AI model you choose.',
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
        label: 'What Is OpenWhispr?',
        anchor: 'what-is-openwhispr',
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
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Plans',
        anchor: 'plans',
      },
      {
        label: 'Data Flow and Privacy',
        anchor: 'privacy',
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
            text: 'OpenWhispr is an open-source desktop and mobile app that turns speech into text with on-device or cloud models, pastes it into the active app and can record and label meetings.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a voice keyboard for your whole computer, with a notebook that can also listen to your meetings.',
          },
        ],
        items: [
          'Maintenance: the main branch last changed on 23 October 2026 and version 1.10.4 was released on 22 October 2026, so no stale-project warning applies.',
          'Cost: local dictation is free and unlimited; cloud and team features sit behind paid plans.',
          'Engines: whisper.cpp runs the Whisper models and sherpa-onnx runs the other local models.',
          'Platforms: desktop installers for macOS, Windows and Linux, plus a free iPhone and iPad app.',
          'Operator: Gizmo Labs Inc., a Delaware company; the code is open under the MIT license.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on [openwhispr.com](https://openwhispr.com), its privacy policy, the documentation and the GitHub repository, checked on 24 October 2026. PromptQuorum has not installed or timed the app, so accuracy and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-openwhispr',
        title: 'What Is OpenWhispr?',
        content: [
          '**OpenWhispr is a voice-to-text app that records while you press a hotkey, transcribes the audio and pastes the text into the focused app.** The README calls it "the open-source and free alternative to WisprFlow and Granola", and the website adds meeting notes, an AI assistant and 100+ languages. The repository was created in June 2025.',
          '**The app is published by Gizmo Labs Inc., a Delaware corporation, which also runs the paid OpenWhispr Cloud.** The desktop app is built with Electron; the iPhone and iPad app is a separate Expo project in the same repository.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**OpenWhispr is a download for macOS, Windows and Linux, plus an iPhone and iPad app on the App Store; the documentation says there is no web version and no browser extension.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          {
            Option: 'macOS',
            'How to get it': '.dmg (Apple silicon, Intel): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            Option: 'Windows',
            'How to get it': '.exe installer (x64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            Option: 'Linux',
            'How to get it': '.AppImage, .deb, .rpm, .tar.gz (x86_64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            Option: 'iPhone and iPad',
            'How to get it': '[App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420), iOS 17.0 or later',
          },
          {
            Option: 'Website',
            'How to get it': '[openwhispr.com](https://openwhispr.com)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': '[openwhispr.com/privacy](https://openwhispr.com/privacy)',
          },
          {
            Option: 'Source code',
            'How to get it': '[github.com/OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr), MIT license',
          },
        ],
        note: 'Version reviewed: 1.10.4, published on 22 October 2026 per the [GitHub Releases page](https://github.com/OpenWhispr/openwhispr/releases/latest), which lists every desktop installer; the iPhone and iPad app is version 1.2.4 in its App Store listing and showed as free in the US, German, French, Spanish, Brazilian, Japanese and Korean storefronts. A community-maintained Homebrew cask (`brew install --cask openwhispr`) also exists. Paid plans are covered under Plans.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requirements',
        content: [
          '**The documentation lists macOS 12, Windows 10 and a 64-bit Linux as the minimum; running speech models on your own device is the demanding part.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          {
            Item: 'Operating system',
            'What the sources say': 'macOS 12 or later (Apple silicon or Intel), Windows 10 or later (64-bit x64), Linux 64-bit x86-64 with PulseAudio or PipeWire; no ARM builds for Windows or Linux',
          },
          {
            Item: 'Speech models',
            'What the sources say': 'Downloaded in the app: Orukeet about 672 MB (the recommended default), Whisper from about 75 MB (tiny) to about 3 GB (large), Parakeet about 631 to 680 MB, Cohere Transcribe about 1.7 GB',
          },
          {
            Item: 'Hardware',
            'What the sources say': 'Local Whisper can use Metal on Apple silicon, CUDA on NVIDIA GPUs or Vulkan on AMD and Intel GPUs, and falls back to the CPU if the GPU runtime fails; no RAM figure is given',
          },
          {
            Item: 'Permissions',
            'What the sources say': 'Microphone and accessibility access for pasting text; macOS 14.2 or later plus the System Audio Recording permission to capture the other side of a meeting',
          },
          {
            Item: 'Intel Macs',
            'What the sources say': 'Live speaker identification and voice fingerprinting are unavailable; meetings still record and transcribe, and note search falls back to keywords (README)',
          },
          {
            Item: 'Internet',
            'What the sources say': 'Needed to download models and for cloud features; local transcription works offline once the model is on disk',
          },
        ],
        note: 'Model sizes are the figures in the documentation\'s local-models guide; the in-app list may differ.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the website, the documentation or the README; none has been independently tested.**',
        ],
        items: [
          '**Dictation anywhere.** A global hotkey records, transcribes and pastes into the focused app; a dedicated hotkey dictates in one language and pastes in another.',
          '**Two local engines.** Whisper runs through whisper.cpp, while the Orukeet, Parakeet and Nemotron families run through sherpa-onnx; the streaming Nemotron models can show partial text as you speak.',
          '**Meetings.** The app detects Zoom, Teams and FaceTime calls, labels speakers on the device and can link Google, Microsoft or Apple Calendar events to notes.',
          '**Notes and import.** Notes have folders and a local embedding model for semantic search; audio and video files, or a pasted YouTube or audio URL, can be transcribed.',
          '**Assistant and integrations.** A voice-assistant hotkey sends what you say to a model you pick, cloud or local; a public API and an MCP server connect other tools.',
        ],
        note: 'The desktop settings keep a separate engine choice for dictation, note recording and audio upload.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Plans',
        content: [
          '**Local dictation is free and unlimited on every plan; the paid plans add cloud transcription, more meeting hours and team features.** All figures are the US-dollar prices on the pricing page.',
        ],
        columns: ['Plan', 'What the pricing page lists'],
        rows: [
          {
            Plan: 'Free',
            'What the pricing page lists': '$0: unlimited local models, unlimited cloud transcription with your own API keys, 2,000 words per week of OpenWhispr Cloud transcription, 5 hours of meeting recordings per month',
          },
          {
            Plan: 'Pro',
            'What the pricing page lists': '$80 per user per year billed annually ($6.67 per month shown): unlimited cloud transcription, agent mode, 20 hours of meetings per month, sync, API and MCP access, iPhone and iPad app',
          },
          {
            Plan: 'Business',
            'What the pricing page lists': '$160 per user per year ($13.33 per month shown): everything in Pro plus unlimited meeting recordings, chat over your data and priority support',
          },
          {
            Plan: 'Enterprise',
            'What the pricing page lists': 'Custom: SSO, SAML and SCIM, audit logs, retention controls, dedicated support',
          },
        ],
        note: 'Figures as shown on 24 October 2026; no other currency or regional price was checked, and taxes are not included.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The privacy policy, last updated 12 October 2026, describes three transcription modes on the desktop: local processing, where no audio is transmitted anywhere; your own API key, where audio goes directly to the provider you chose; and OpenWhispr Cloud, where audio is sent to its API or a speech-to-text provider, processed in real time and not stored by OpenWhispr.** Cloud usage records (word count, provider, model, length) are kept for billing, and the policy says your data is not used to train models. Transcribed text lives in a local SQLite database, and the desktop app keeps dictation audio on your device for 30 days by default (up to 90, or off).',
          'Cloud backup is off by default on the desktop and on by default for paid plans in the mobile app. Notes stored in OpenWhispr\'s cloud are sent to OpenAI for search indexing, and web searches run by the assistant go through the search provider Exa. The README says "no telemetry", while the policy lists analytics, attribution and purchase SDKs in the mobile app (AppsFlyer, RevenueCat, Superwall), with usage analytics switchable off.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results. The code is public under the MIT license, but PromptQuorum has not read it or inspected the app\'s network traffic.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Accuracy and speed.** PromptQuorum did not measure word error rates, latency or language coverage on any model.',
          '**Compliance badges.** The website shows HIPAA, ISO 27001, SOC 2 Type II and GDPR badges and links a Trust Center; we did not read any audit report or certificate.',
          '**Download figure.** The website says "Downloaded by 150k+ users"; we have no way to check that.',
          '**Which iPhone features need a plan.** The App Store listing offers a free download, while the pricing page lists the mobile app under the paid plans.',
          '**Installer signing.** Whether the macOS and Windows installers are notarized or code-signed was not checked.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[Handy](/power-local-llm/handy-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Narrower free dictation tool: no meeting notes, no paid cloud plan',
          },
          {
            App: '[MacWhisper](/power-local-llm/macwhisper-review)',
            Platforms: 'macOS',
            'Price / license': 'Freemium / Proprietary',
            'Key difference': 'Mac-only app with a one-time purchase for local Whisper and Parakeet transcription; closed source',
          },
          {
            App: '[AquaVoice](/power-local-llm/aquavoice-review)',
            Platforms: 'macOS, Windows, iOS, Android',
            'Price / license': 'Freemium / Proprietary',
            'Key difference': 'Cloud dictation service that types into the active app, so it is not an offline option',
          },
        ],
        note: 'These are same-category apps from the PromptQuorum directory; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Which local model should I start with?',
            a: 'The documentation recommends Orukeet, a multilingual Parakeet fine-tune from Oruk, and a fresh install lands on it when you choose the local route; for Whisper it recommends the base size. It calls Cohere Transcribe its most accurate offline model, at a 5.42% average word error rate across 14 languages, a project figure we did not check.',
          },
          {
            q: 'Does it support languages other than English?',
            a: 'The website claims 100+ languages with auto-detection, but local coverage depends on the model: the documentation lists 25 languages for Parakeet v3, 15 for one Nemotron model and English only for two others. We did not verify the 100+ figure.',
          },
          {
            q: 'Can I use my own API keys?',
            a: 'Yes on the desktop: the Free plan lists unlimited cloud transcription with your own API keys, and the privacy policy says that audio then goes directly to your provider without passing through OpenWhispr. The iPhone listing also mentions connecting your own provider.',
          },
          {
            q: 'Is there a command line or a developer API?',
            a: 'The pricing page lists a command-line interface that works locally on the Free plan and locally and remotely on paid plans, and API and MCP access from Pro upward; the documentation links an API overview.',
          },
          {
            q: 'How often is it updated?',
            a: 'Version 1.10.3 was published on 12 October 2026 and 1.10.4 on 22 October 2026, and the repository keeps a changelog. Releases that frequent mean settings and plan limits can change, so check the pricing page before relying on a figure here.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'OpenWhispr is an actively updated, MIT-licensed way to dictate into any app and record meetings on macOS, Windows, Linux and iPhone, with speech models you can run on your own device or swap for a cloud provider. Its privacy story is only as strong as the mode you pick, the paid plans and the mobile app add cloud services and analytics that the README\'s "no telemetry" line does not describe, and none of its accuracy, speed or compliance badges could be checked here. It suits people who want one app for dictation and meeting notes and will keep to local models if privacy matters; anyone who needs proven accuracy or certified compliance should test it and request the audit reports first.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenWhispr website](https://openwhispr.com) — description, platforms and compliance badges.',
          '[OpenWhispr pricing](https://openwhispr.com/pricing) — plan prices and limits.',
          '[OpenWhispr privacy policy](https://openwhispr.com/privacy) — data handling, retention and subprocessors, last updated 12 October 2026.',
          '[OpenWhispr on GitHub](https://github.com/OpenWhispr/openwhispr) — README, MIT license and tech stack.',
          '[OpenWhispr releases](https://github.com/OpenWhispr/openwhispr/releases) — version 1.10.4 and installer files.',
          '[OpenWhispr changelog](https://github.com/OpenWhispr/openwhispr/blob/main/CHANGELOG.md) — release history.',
          '[OpenWhispr docs: local models](https://docs.openwhispr.com/guides/local-models) — engines, model sizes and GPU acceleration.',
          '[OpenWhispr docs: system requirements](https://docs.openwhispr.com/platform/system-requirements) — operating systems and permissions.',
          '[OpenWhispr on the App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420) — iPhone and iPad listing, version 1.2.4.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Handy Review](/power-local-llm/handy-review) — a free, MIT-licensed push-to-talk dictation app that runs on your own computer.',
          '[MacWhisper Review](/power-local-llm/macwhisper-review) — a Mac app for local Whisper and Parakeet transcription.',
          '[Whisper.cpp Review](/power-local-llm/whisper-cpp-review) — the C++ port of Whisper that many local dictation tools build on.',
          '[Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) — the category comparison this review belongs to.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'OpenWhispr Review: Open-Source Dictation and Meeting Notes App',
      description: 'Review of OpenWhispr, an MIT-licensed voice-to-text app that runs speech models on your device or in the cloud: plans, privacy and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/openwhispr-review',
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
        audienceType: 'Writers, developers and professionals evaluating a local or cloud dictation and meeting-notes app',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'OpenWhispr',
        },
        {
          '@type': 'Thing',
          name: 'Speech-to-text',
        },
        {
          '@type': 'Thing',
          name: 'Voice dictation',
        },
        {
          '@type': 'Thing',
          name: 'Whisper',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/openwhispr-review',
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
          name: 'OpenWhispr Review',
          item: 'https://www.promptquorum.com/power-local-llm/openwhispr-review',
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
    heroImage: '/images/openwhispr-review-hero-de.webp',
    title: 'OpenWhispr-Rezension: Open-Source-App für Diktat und Meeting-Notizen',
    seoTitle: 'OpenWhispr-Rezension: Open-Source-Diktat und Meeting-Notes',
    intro: 'OpenWhispr ist eine quelloffene Sprache-zu-Text-App für macOS, Windows, Linux, iPhone und iPad: Sie drücken ein Tastenkürzel, sprechen, und der Text wird dort eingefügt, wo Ihr Cursor steht; optional kommen Meeting-Transkription und Notizen hinzu. Sie wählen zwischen Sprachmodellen, die auf Ihrem eigenen Gerät laufen, und Cloud-Verarbeitung, und diese Wahl entscheidet, wohin Ihre Stimme gelangt. Diese Rezension stützt sich auf die Website, die Datenschutzerklärung, die Dokumentation und das GitHub-Repository, geprüft am 24. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription: 'OpenWhispr-Rezension: Diktier- und Meeting-Notizen-App unter MIT-Lizenz für Mac, Windows, Linux und iPhone, lokal oder per Cloud. Nicht selbst getestet.',
    twitterDescription: 'OpenWhispr-Rezension: Open-Source-Diktat und Meeting-Notizen mit lokalen oder Cloud-Sprachmodellen. Was die Quellen zu Tarifen, Datenschutz und Installern bestätigen und was nicht.',
    audience: 'Autoren, Entwickler und Berufstätige, die Sprachdiktat und Meeting-Notizen wollen und wissen müssen, was die Quellen bestätigen, wohin das Audio in jedem Modus gelangt und was die Bezahltarife ergänzen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWhispr Rezension',
    targetKeywords: [
      'openwhispr rezension',
      'openwhispr',
      'open source diktier app',
      'wispr flow alternative open source',
      'lokale spracherkennung mac windows linux',
      'meeting transkription app lokal',
      'openwhispr.com',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**OpenWhispr (Version 1.10.4) ist eine Sprache-zu-Text-App unter MIT-Lizenz, die Ihr Diktat in jede App einfügt; ob Ihre Stimme auf dem Gerät bleibt, hängt davon ab, ob Sie ein lokales oder ein Cloud-Sprachmodell wählen.** Sie ergänzt Meeting-Transkription, Notizen und einen KI-Assistenten, und jede Aussage hier stammt aus der Website des Herstellers, seiner Datenschutzerklärung, der Dokumentation und dem GitHub-Repository.',
    quickAnswerTop: {
      de: {
        question: 'Bleibt meine Stimme bei OpenWhispr auf meinem Rechner?',
        answer: 'Nur im lokalen Modus: Laut Datenschutzerklärung wird kein Audio irgendwohin übertragen, wenn die Spracherkennung auf Ihrem Gerät läuft. Bei OpenWhispr Cloud oder mit Ihrem eigenen API-Schlüssel geht das Audio zur Verarbeitung an einen Transkriptionsanbieter.',
        bullets: [
          'Ein globales Tastenkürzel diktiert in jede App, ein zweites übersetzt beim Sprechen.',
          'Erkennung von Zoom-, Teams- und FaceTime-Gesprächen, mit Sprecherlabels, die auf dem Gerät berechnet werden.',
          'Notizen mit Ordnern und lokaler semantischer Suche sowie Import von Audio und Video.',
          'Ein Tastenkürzel für den Sprachassistenten, das Gesagtes an ein von Ihnen gewähltes KI-Modell sendet.',
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
        label: 'Was ist OpenWhispr?',
        anchor: 'what-is-openwhispr',
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
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Tarife',
        anchor: 'plans',
      },
      {
        label: 'Datenfluss und Datenschutz',
        anchor: 'privacy',
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
            text: 'OpenWhispr ist eine quelloffene Desktop- und Mobil-App, die Sprache mit Modellen auf dem Gerät oder in der Cloud in Text umwandelt, ihn in die aktive App einfügt und Meetings aufnehmen und beschriften kann.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Sprachtastatur für den ganzen Computer vor, mit einem Notizbuch, das auch Ihren Meetings zuhören kann.',
          },
        ],
        items: [
          'Pflege: Der Hauptzweig wurde zuletzt am 23. Oktober 2026 geändert, und Version 1.10.4 erschien am 22. Oktober 2026; eine Warnung vor einem veralteten Projekt entfällt.',
          'Kosten: Lokales Diktat ist kostenlos und unbegrenzt; Cloud- und Team-Funktionen liegen hinter Bezahltarifen.',
          'Engines: whisper.cpp führt die Whisper-Modelle aus, sherpa-onnx die übrigen lokalen Modelle.',
          'Plattformen: Desktop-Installer für macOS, Windows und Linux sowie eine kostenlose App für iPhone und iPad.',
          'Betreiber: Gizmo Labs Inc., ein Unternehmen aus Delaware; der Code ist unter der MIT-Lizenz offen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf [openwhispr.com](https://openwhispr.com), die Datenschutzerklärung, die Dokumentation und das GitHub-Repository, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch gemessen; Genauigkeit und Geschwindigkeit werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-openwhispr',
        title: 'Was ist OpenWhispr?',
        content: [
          '**OpenWhispr ist eine Sprache-zu-Text-App, die aufnimmt, solange Sie ein Tastenkürzel drücken, das Audio transkribiert und den Text in die App mit Fokus einfügt.** Die README nennt sie „die quelloffene und kostenlose Alternative zu WisprFlow und Granola“, und die Website ergänzt Meeting-Notizen, einen KI-Assistenten und über 100 Sprachen. Das Repository wurde im Juni 2025 angelegt.',
          '**Die App wird von Gizmo Labs Inc. herausgegeben, einer Gesellschaft aus Delaware, die auch die kostenpflichtige OpenWhispr Cloud betreibt.** Die Desktop-App ist mit Electron gebaut; die App für iPhone und iPad ist ein eigenes Expo-Projekt im selben Repository.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**OpenWhispr gibt es als Download für macOS, Windows und Linux sowie als App für iPhone und iPad im App Store; laut Dokumentation gibt es weder eine Web-Version noch eine Browser-Erweiterung.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          {
            Option: 'macOS',
            Bezug: '.dmg (Apple Silicon, Intel): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            Option: 'Windows',
            Bezug: '.exe-Installer (x64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            Option: 'Linux',
            Bezug: '.AppImage, .deb, .rpm, .tar.gz (x86_64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            Option: 'iPhone und iPad',
            Bezug: '[App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420), ab iOS 17.0',
          },
          {
            Option: 'Website',
            Bezug: '[openwhispr.com](https://openwhispr.com)',
          },
          {
            Option: 'Datenschutzerklärung',
            Bezug: '[openwhispr.com/privacy](https://openwhispr.com/privacy)',
          },
          {
            Option: 'Quellcode',
            Bezug: '[github.com/OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr), MIT-Lizenz',
          },
        ],
        note: 'Geprüfte Version: 1.10.4, laut [GitHub-Releases-Seite](https://github.com/OpenWhispr/openwhispr/releases/latest) am 22. Oktober 2026 veröffentlicht; dort sind alle Desktop-Installer aufgeführt. Die App für iPhone und iPad hat in ihrem App-Store-Eintrag die Version 1.2.4 und wurde in den Stores der USA, Deutschlands, Frankreichs, Spaniens, Brasiliens, Japans und Koreas als kostenlos angezeigt. Ein von der Community gepflegter Homebrew-Cask (`brew install --cask openwhispr`) existiert ebenfalls. Die Bezahltarife stehen unter Tarife.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Anforderungen',
        content: [
          '**Die Dokumentation nennt macOS 12, Windows 10 und ein 64-Bit-Linux als Minimum; der anspruchsvolle Teil ist, Sprachmodelle auf dem eigenen Gerät auszuführen.**',
        ],
        columns: ['Punkt', 'Angaben der Quellen'],
        rows: [
          {
            Punkt: 'Betriebssystem',
            'Angaben der Quellen': 'macOS 12 oder neuer (Apple Silicon oder Intel), Windows 10 oder neuer (64 Bit, x64), Linux 64 Bit x86-64 mit PulseAudio oder PipeWire; keine ARM-Builds für Windows oder Linux',
          },
          {
            Punkt: 'Sprachmodelle',
            'Angaben der Quellen': 'In der App geladen: Orukeet etwa 672 MB (empfohlene Voreinstellung), Whisper von etwa 75 MB (tiny) bis etwa 3 GB (large), Parakeet etwa 631 bis 680 MB, Cohere Transcribe etwa 1,7 GB',
          },
          {
            Punkt: 'Hardware',
            'Angaben der Quellen': 'Lokales Whisper kann Metal auf Apple Silicon, CUDA auf NVIDIA-GPUs oder Vulkan auf AMD- und Intel-GPUs nutzen und weicht auf die CPU aus, falls die GPU-Laufzeit scheitert; ein RAM-Wert wird nicht genannt',
          },
          {
            Punkt: 'Berechtigungen',
            'Angaben der Quellen': 'Mikrofon- und Bedienungshilfen-Zugriff zum Einfügen von Text; macOS 14.2 oder neuer plus die Berechtigung „Systemaudioaufnahme“, um die Gegenseite eines Meetings aufzunehmen',
          },
          {
            Punkt: 'Intel-Macs',
            'Angaben der Quellen': 'Live-Sprechererkennung und Stimm-Fingerabdrücke sind nicht verfügbar; Meetings werden weiterhin aufgenommen und transkribiert, und die Notizsuche weicht auf Stichwörter aus (README)',
          },
          {
            Punkt: 'Internet',
            'Angaben der Quellen': 'Nötig für den Modell-Download und für Cloud-Funktionen; lokale Transkription funktioniert offline, sobald das Modell auf der Festplatte liegt',
          },
        ],
        note: 'Die Modellgrößen sind die Angaben aus der Local-Models-Anleitung der Dokumentation; die Liste in der App kann abweichen.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Alle folgenden Punkte stammen aus der Website, der Dokumentation oder der README; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Diktat überall.** Ein globales Tastenkürzel nimmt auf, transkribiert und fügt in die App mit Fokus ein; ein eigenes Kürzel diktiert in einer Sprache und fügt in einer anderen ein.',
          '**Zwei lokale Engines.** Whisper läuft über whisper.cpp, die Familien Orukeet, Parakeet und Nemotron laufen über sherpa-onnx; die Streaming-Modelle von Nemotron können beim Sprechen Teiltext anzeigen.',
          '**Meetings.** Die App erkennt Zoom-, Teams- und FaceTime-Gespräche, beschriftet Sprecher auf dem Gerät und kann Termine aus Google-, Microsoft- oder Apple-Kalender mit Notizen verknüpfen.',
          '**Notizen und Import.** Notizen haben Ordner und ein lokales Embedding-Modell für die semantische Suche; Audio- und Videodateien oder eine eingefügte YouTube- oder Audio-URL lassen sich transkribieren.',
          '**Assistent und Integrationen.** Ein Tastenkürzel für den Sprachassistenten sendet Gesagtes an ein von Ihnen gewähltes Modell, Cloud oder lokal; eine öffentliche API und ein MCP-Server verbinden andere Werkzeuge.',
        ],
        note: 'Die Desktop-Einstellungen führen eine eigene Engine-Auswahl für Diktat, Notizaufnahme und Audio-Upload.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Tarife',
        content: [
          '**Lokales Diktat ist in jedem Tarif kostenlos und unbegrenzt; die Bezahltarife ergänzen Cloud-Transkription, mehr Meeting-Stunden und Team-Funktionen.** Alle Angaben sind die US-Dollar-Preise der Preisseite.',
        ],
        columns: ['Tarif', 'Angaben der Preisseite'],
        rows: [
          {
            Tarif: 'Free',
            'Angaben der Preisseite': '0 $: unbegrenzt lokale Modelle, unbegrenzte Cloud-Transkription mit eigenen API-Schlüsseln, 2.000 Wörter pro Woche OpenWhispr-Cloud-Transkription, 5 Stunden Meeting-Aufnahmen pro Monat',
          },
          {
            Tarif: 'Pro',
            'Angaben der Preisseite': '80 $ pro Nutzer und Jahr bei jährlicher Zahlung (6,67 $ pro Monat angezeigt): unbegrenzte Cloud-Transkription, Agent-Modus, 20 Stunden Meetings pro Monat, Synchronisierung, API- und MCP-Zugang, App für iPhone und iPad',
          },
          {
            Tarif: 'Business',
            'Angaben der Preisseite': '160 $ pro Nutzer und Jahr (13,33 $ pro Monat angezeigt): alles aus Pro plus unbegrenzte Meeting-Aufnahmen, Chat über Ihre Daten und bevorzugter Support',
          },
          {
            Tarif: 'Enterprise',
            'Angaben der Preisseite': 'Individuell: SSO, SAML und SCIM, Audit-Logs, Aufbewahrungsregeln, persönlicher Support',
          },
        ],
        note: 'Angaben vom 24. Oktober 2026; andere Währungen oder regionale Preise wurden nicht geprüft, Steuern sind nicht enthalten.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Die Datenschutzerklärung, zuletzt aktualisiert am 12. Oktober 2026, beschreibt auf dem Desktop drei Transkriptionsmodi: lokale Verarbeitung, bei der kein Audio irgendwohin übertragen wird; Ihr eigener API-Schlüssel, bei dem das Audio direkt an den von Ihnen gewählten Anbieter geht; und OpenWhispr Cloud, bei der das Audio an die eigene API oder einen Spracherkennungsanbieter gesendet, in Echtzeit verarbeitet und von OpenWhispr nicht gespeichert wird.** Cloud-Nutzungsdaten (Wortzahl, Anbieter, Modell, Länge) werden für die Abrechnung geführt, und laut Erklärung werden Ihre Daten nicht zum Training von Modellen genutzt. Transkribierter Text liegt in einer lokalen SQLite-Datenbank, und die Desktop-App behält Diktat-Audio standardmäßig 30 Tage auf Ihrem Gerät (bis zu 90 oder aus).',
          'Das Cloud-Backup ist auf dem Desktop standardmäßig aus und in der mobilen App für Bezahltarife standardmäßig an. Notizen in der Cloud von OpenWhispr werden zur Suchindizierung an OpenAI gesendet, und Websuchen des Assistenten laufen über den Suchanbieter Exa. Die README sagt „no telemetry“, während die Erklärung für die mobile App Analyse-, Attributions- und Kauf-SDKs nennt (AppsFlyer, RevenueCat, Superwall); die Nutzungsanalyse lässt sich abschalten.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Erklärungen des Herstellers, keine Prüfergebnisse. Der Code ist unter MIT-Lizenz öffentlich, doch PromptQuorum hat ihn weder gelesen noch den Netzwerkverkehr der App untersucht.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Genauigkeit und Geschwindigkeit.** PromptQuorum hat bei keinem Modell Wortfehlerraten, Latenz oder Sprachabdeckung gemessen.',
          '**Compliance-Siegel.** Die Website zeigt Siegel für HIPAA, ISO 27001, SOC 2 Type II und DSGVO und verlinkt ein Trust Center; einen Prüfbericht oder ein Zertifikat haben wir nicht gelesen.',
          '**Download-Zahl.** Die Website nennt „Downloaded by 150k+ users“; wir können das nicht prüfen.',
          '**Welche iPhone-Funktionen einen Tarif brauchen.** Der App-Store-Eintrag bietet einen kostenlosen Download, während die Preisseite die mobile App unter den Bezahltarifen aufführt.',
          '**Signierung der Installer.** Ob die Installer für macOS und Windows notarisiert oder per Code-Signatur signiert sind, wurde nicht geprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          {
            App: '[Handy](/de/power-local-llm/handy-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Schlankeres kostenloses Diktierwerkzeug: keine Meeting-Notizen, kein bezahlter Cloud-Tarif',
          },
          {
            App: '[MacWhisper](/de/power-local-llm/macwhisper-review)',
            Plattformen: 'macOS',
            'Preis / Lizenz': 'Freemium / Proprietär',
            'Wichtigster Unterschied': 'Reine Mac-App mit Einmalkauf für lokale Whisper- und Parakeet-Transkription; Closed Source',
          },
          {
            App: '[AquaVoice](/de/power-local-llm/aquavoice-review)',
            Plattformen: 'macOS, Windows, iOS, Android',
            'Preis / Lizenz': 'Freemium / Proprietär',
            'Wichtigster Unterschied': 'Cloud-Diktierdienst, der in die aktive App tippt, also keine Offline-Option',
          },
        ],
        note: 'Das sind Apps derselben Kategorie aus dem PromptQuorum-Verzeichnis; prüfen Sie aktuellen Preis, Lizenz und Plattformen auf der jeweiligen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Mit welchem lokalen Modell sollte ich beginnen?',
            a: 'Die Dokumentation empfiehlt Orukeet, eine mehrsprachige Parakeet-Feinabstimmung von Oruk, und eine frische Installation landet bei der lokalen Variante dort; bei Whisper empfiehlt sie die Größe base. Cohere Transcribe nennt sie ihr genauestes Offline-Modell mit einer durchschnittlichen Wortfehlerrate von 5,42 % über 14 Sprachen, eine Projektangabe, die wir nicht geprüft haben.',
          },
          {
            q: 'Unterstützt die App andere Sprachen als Englisch?',
            a: 'Die Website behauptet über 100 Sprachen mit automatischer Erkennung, doch die lokale Abdeckung hängt vom Modell ab: Die Dokumentation nennt 25 Sprachen für Parakeet v3, 15 für ein Nemotron-Modell und nur Englisch für zwei weitere. Die Zahl „über 100“ haben wir nicht überprüft.',
          },
          {
            q: 'Kann ich eigene API-Schlüssel verwenden?',
            a: 'Ja auf dem Desktop: Der Free-Tarif nennt unbegrenzte Cloud-Transkription mit eigenen API-Schlüsseln, und laut Datenschutzerklärung geht das Audio dann direkt an Ihren Anbieter, ohne über OpenWhispr zu laufen. Der iPhone-Eintrag erwähnt ebenfalls die Anbindung eines eigenen Anbieters.',
          },
          {
            q: 'Gibt es eine Kommandozeile oder eine Entwickler-API?',
            a: 'Die Preisseite nennt eine Kommandozeilenschnittstelle, die im Free-Tarif lokal und in Bezahltarifen lokal und remote funktioniert, sowie API- und MCP-Zugang ab Pro; die Dokumentation verlinkt eine API-Übersicht.',
          },
          {
            q: 'Wie oft wird die App aktualisiert?',
            a: 'Version 1.10.3 erschien am 12. Oktober 2026 und 1.10.4 am 22. Oktober 2026, und das Repository führt ein Änderungsprotokoll. Bei so häufigen Releases können sich Einstellungen und Tariflimits ändern; prüfen Sie die Preisseite, bevor Sie sich auf eine Zahl hier verlassen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'OpenWhispr ist ein aktiv gepflegter Weg unter MIT-Lizenz, unter macOS, Windows, Linux und iPhone in jede App zu diktieren und Meetings aufzunehmen, mit Sprachmodellen, die Sie auf dem eigenen Gerät ausführen oder gegen einen Cloud-Anbieter tauschen können. Der Datenschutz ist nur so stark wie der gewählte Modus, die Bezahltarife und die mobile App bringen Cloud-Dienste und Analysen mit, die die README-Zeile „no telemetry“ nicht erwähnt, und weder Genauigkeit, Geschwindigkeit noch Compliance-Siegel ließen sich hier prüfen. Sie passt zu Menschen, die eine App für Diktat und Meeting-Notizen wollen und bei Datenschutzbedarf bei lokalen Modellen bleiben; wer belegte Genauigkeit oder zertifizierte Compliance braucht, sollte testen und zuerst die Prüfberichte anfordern.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Website von OpenWhispr](https://openwhispr.com) — Beschreibung, Plattformen und Compliance-Siegel.',
          '[Preise von OpenWhispr](https://openwhispr.com/pricing) — Tarifpreise und Limits.',
          '[Datenschutzerklärung von OpenWhispr](https://openwhispr.com/privacy) — Datenverarbeitung, Aufbewahrung und Unterauftragsverarbeiter, zuletzt aktualisiert am 12. Oktober 2026.',
          '[OpenWhispr auf GitHub](https://github.com/OpenWhispr/openwhispr) — README, MIT-Lizenz und Tech-Stack.',
          '[OpenWhispr-Releases](https://github.com/OpenWhispr/openwhispr/releases) — Version 1.10.4 und Installer-Dateien.',
          '[OpenWhispr-Changelog](https://github.com/OpenWhispr/openwhispr/blob/main/CHANGELOG.md) — Release-Verlauf.',
          '[OpenWhispr-Dokumentation: lokale Modelle](https://docs.openwhispr.com/guides/local-models) — Engines, Modellgrößen und GPU-Beschleunigung.',
          '[OpenWhispr-Dokumentation: Systemanforderungen](https://docs.openwhispr.com/platform/system-requirements) — Betriebssysteme und Berechtigungen.',
          '[OpenWhispr im App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420) — Eintrag für iPhone und iPad, Version 1.2.4.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Handy-Rezension](/de/power-local-llm/handy-review) — eine kostenlose Push-to-Talk-Diktier-App unter MIT-Lizenz, die auf dem eigenen Rechner läuft.',
          '[MacWhisper-Rezension](/de/power-local-llm/macwhisper-review) — eine Mac-App für lokale Whisper- und Parakeet-Transkription.',
          '[Whisper.cpp-Rezension](/de/power-local-llm/whisper-cpp-review) — die C++-Portierung von Whisper, auf der viele lokale Diktier-Werkzeuge aufbauen.',
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
    heroImage: '/images/openwhispr-review-hero-es.webp',
    title: 'Reseña de OpenWhispr: app de código abierto para dictado y notas de reuniones',
    seoTitle: 'Reseña de OpenWhispr: dictado y notas de reuniones',
    intro: 'OpenWhispr es una app de voz a texto de código abierto para macOS, Windows, Linux, iPhone y iPad: pulsas un atajo, hablas y el texto se pega donde tienes el cursor, con transcripción de reuniones y notas como extra opcional. Eliges entre modelos de voz que se ejecutan en tu propio dispositivo y el procesamiento en la nube, y esa elección decide adónde va tu voz. Esta reseña parte del sitio web, la política de privacidad, la documentación y el repositorio, consultados el 24 de octubre de 2026; PromptQuorum no ha probado la app en persona.',
    metaDescription: 'Reseña de OpenWhispr: app MIT de dictado y notas de reuniones para Mac, Windows, Linux e iPhone, con voz a texto local o en la nube. Sin probar.',
    twitterDescription: 'Reseña de OpenWhispr: dictado y notas de reuniones de código abierto con modelos de voz locales o en la nube. Qué confirman las fuentes sobre planes, privacidad e instaladores, y qué no.',
    audience: 'Redactores, desarrolladores y profesionales que quieren dictado por voz y notas de reuniones y necesitan saber qué confirman las fuentes, adónde va el audio en cada modo y qué añaden los planes de pago.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de OpenWhispr',
    targetKeywords: [
      'reseña openwhispr',
      'openwhispr',
      'app de dictado código abierto',
      'alternativa a wispr flow código abierto',
      'voz a texto local mac windows linux',
      'app transcripción de reuniones local',
      'openwhispr.com',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**OpenWhispr (versión 1.10.4) es una app de voz a texto con licencia MIT que pega tu dictado en cualquier aplicación, y que tu voz se quede en el dispositivo depende de si eliges un modelo de voz local o uno en la nube.** Añade transcripción de reuniones, notas y un asistente de IA, y cada afirmación de aquí procede del sitio web del desarrollador, su política de privacidad, su documentación y su repositorio.',
    quickAnswerTop: {
      es: {
        question: '¿OpenWhispr mantiene mi voz en mi ordenador?',
        answer: 'Solo en modo local: la política de privacidad dice que, cuando la voz a texto se ejecuta en tu dispositivo, no se transmite ningún audio a ninguna parte. Con OpenWhispr Cloud o con tu propia clave de API, el audio se envía a un proveedor de transcripción para procesarlo.',
        bullets: [
          'Un atajo global dicta en cualquier app y un segundo atajo traduce mientras hablas.',
          'Detección de llamadas de Zoom, Teams y FaceTime, con etiquetas de hablante calculadas en el dispositivo.',
          'Notas con carpetas y búsqueda semántica local, además de importación de audio y vídeo.',
          'Un atajo de asistente de voz que envía lo que dices a un modelo de IA que tú eliges.',
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
        label: '¿Qué es OpenWhispr?',
        anchor: 'what-is-openwhispr',
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
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Planes',
        anchor: 'plans',
      },
      {
        label: 'Flujo de datos y privacidad',
        anchor: 'privacy',
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
            text: 'OpenWhispr es una app de código abierto para escritorio y móvil que convierte la voz en texto con modelos locales o en la nube, lo pega en la app activa y puede grabar y etiquetar reuniones.',
          },
          {
            type: 'plain-terms',
            text: 'Piénsalo como un teclado de voz para todo el ordenador, con un cuaderno que también puede escuchar tus reuniones.',
          },
        ],
        items: [
          'Mantenimiento: la rama principal cambió por última vez el 23 de octubre de 2026 y la versión 1.10.4 salió el 22 de octubre de 2026, así que no aplica ningún aviso de proyecto abandonado.',
          'Coste: el dictado local es gratuito e ilimitado; las funciones de nube y de equipo están en planes de pago.',
          'Motores: whisper.cpp ejecuta los modelos Whisper y sherpa-onnx ejecuta los demás modelos locales.',
          'Plataformas: instaladores de escritorio para macOS, Windows y Linux, y una app gratuita para iPhone y iPad.',
          'Responsable: Gizmo Labs Inc., una empresa de Delaware; el código es abierto con licencia MIT.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en [openwhispr.com](https://openwhispr.com), su política de privacidad, la documentación y el repositorio de GitHub, consultados el 24 de octubre de 2026. PromptQuorum no ha instalado ni cronometrado la app, así que no se evalúan la precisión ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-openwhispr',
        title: '¿Qué es OpenWhispr?',
        content: [
          '**OpenWhispr graba mientras pulsas un atajo, transcribe el audio y pega el texto en la app con el foco.** El README la llama «la alternativa gratuita y de código abierto a WisprFlow y Granola», y el sitio web añade notas de reuniones, un asistente de IA y más de 100 idiomas. El repositorio se creó en junio de 2025.',
          '**La app la publica Gizmo Labs Inc., una sociedad de Delaware que también gestiona el servicio de pago OpenWhispr Cloud.** La app de escritorio está hecha con Electron; la de iPhone y iPad es un proyecto Expo independiente dentro del mismo repositorio.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**OpenWhispr se descarga para macOS, Windows y Linux, y hay una app para iPhone y iPad en el App Store; según la documentación, no existe versión web ni extensión de navegador.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          {
            'Opción': 'macOS',
            'Cómo conseguirlo': '.dmg (Apple silicon, Intel): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            'Opción': 'Windows',
            'Cómo conseguirlo': 'instalador .exe (x64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            'Opción': 'Linux',
            'Cómo conseguirlo': '.AppImage, .deb, .rpm, .tar.gz (x86_64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            'Opción': 'iPhone y iPad',
            'Cómo conseguirlo': '[App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420), iOS 17.0 o posterior',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[openwhispr.com](https://openwhispr.com)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': '[openwhispr.com/privacy](https://openwhispr.com/privacy)',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': '[github.com/OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr), licencia MIT',
          },
        ],
        note: 'Versión analizada: 1.10.4, publicada el 22 de octubre de 2026 según la [página de Releases de GitHub](https://github.com/OpenWhispr/openwhispr/releases/latest), que lista todos los instaladores de escritorio; la app de iPhone y iPad es la versión 1.2.4 en su ficha del App Store y aparecía como gratuita en las tiendas de EE. UU., Alemania, Francia, España, Brasil, Japón y Corea. También existe un cask de Homebrew mantenido por la comunidad (`brew install --cask openwhispr`). Los planes de pago se tratan en Planes.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**La documentación indica macOS 12, Windows 10 y un Linux de 64 bits como mínimo; lo exigente es ejecutar los modelos de voz en tu propio dispositivo.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          {
            Elemento: 'Sistema operativo',
            'Qué dicen las fuentes': 'macOS 12 o posterior (Apple silicon o Intel), Windows 10 o posterior (64 bits, x64), Linux de 64 bits x86-64 con PulseAudio o PipeWire; sin compilaciones ARM para Windows ni Linux',
          },
          {
            Elemento: 'Modelos de voz',
            'Qué dicen las fuentes': 'Se descargan en la app: Orukeet unos 672 MB (el predeterminado recomendado), Whisper desde unos 75 MB (tiny) hasta unos 3 GB (large), Parakeet unos 631 a 680 MB, Cohere Transcribe unos 1.7 GB',
          },
          {
            Elemento: 'Hardware',
            'Qué dicen las fuentes': 'Whisper local puede usar Metal en Apple silicon, CUDA en GPU NVIDIA o Vulkan en GPU AMD e Intel, y vuelve a la CPU si falla el entorno de la GPU; no se da una cifra de RAM',
          },
          {
            Elemento: 'Permisos',
            'Qué dicen las fuentes': 'Acceso al micrófono y de accesibilidad para pegar texto; macOS 14.2 o posterior más el permiso «Grabación de audio del sistema» para capturar la otra parte de una reunión',
          },
          {
            Elemento: 'Mac con Intel',
            'Qué dicen las fuentes': 'La identificación de hablantes en vivo y las huellas de voz no están disponibles; las reuniones se siguen grabando y transcribiendo, y la búsqueda de notas pasa a palabras clave (README)',
          },
          {
            Elemento: 'Internet',
            'Qué dicen las fuentes': 'Necesario para descargar modelos y para las funciones en la nube; la transcripción local funciona sin conexión una vez que el modelo está en el disco',
          },
        ],
        note: 'Los tamaños de modelo son las cifras de la guía de modelos locales de la documentación; la lista de la app puede diferir.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todo lo que sigue procede del sitio web, la documentación o el README; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Dictado en cualquier sitio.** Un atajo global graba, transcribe y pega en la app con el foco; un atajo específico dicta en un idioma y pega en otro.',
          '**Dos motores locales.** Whisper funciona con whisper.cpp, mientras que las familias Orukeet, Parakeet y Nemotron funcionan con sherpa-onnx; los modelos Nemotron de streaming pueden mostrar texto parcial mientras hablas.',
          '**Reuniones.** La app detecta llamadas de Zoom, Teams y FaceTime, etiqueta a los hablantes en el dispositivo y puede vincular eventos de Google, Microsoft o Apple Calendar a las notas.',
          '**Notas e importación.** Las notas tienen carpetas y un modelo de embeddings local para la búsqueda semántica; se pueden transcribir archivos de audio y vídeo o una URL de YouTube o de audio pegada.',
          '**Asistente e integraciones.** Un atajo de asistente de voz envía lo que dices a un modelo que eliges, en la nube o local; una API pública y un servidor MCP conectan otras herramientas.',
        ],
        note: 'Los ajustes de escritorio guardan una elección de motor distinta para dictado, grabación de notas y subida de audio.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Planes',
        content: [
          '**El dictado local es gratuito e ilimitado en todos los planes; los planes de pago añaden transcripción en la nube, más horas de reuniones y funciones de equipo.** Todas las cifras son los precios en dólares de la página de precios.',
        ],
        columns: ['Plan', 'Qué indica la página de precios'],
        rows: [
          {
            Plan: 'Free',
            'Qué indica la página de precios': '0 $: modelos locales ilimitados, transcripción en la nube ilimitada con tus propias claves de API, 2000 palabras por semana de transcripción en OpenWhispr Cloud, 5 horas de grabaciones de reuniones al mes',
          },
          {
            Plan: 'Pro',
            'Qué indica la página de precios': '80 $ por usuario al año con facturación anual (se muestran 6.67 $ al mes): transcripción en la nube ilimitada, modo agente, 20 horas de reuniones al mes, sincronización, acceso a API y MCP, app para iPhone y iPad',
          },
          {
            Plan: 'Business',
            'Qué indica la página de precios': '160 $ por usuario al año (se muestran 13.33 $ al mes): todo lo de Pro más grabaciones de reuniones ilimitadas, chat sobre tus datos y soporte prioritario',
          },
          {
            Plan: 'Enterprise',
            'Qué indica la página de precios': 'A medida: SSO, SAML y SCIM, registros de auditoría, controles de retención, soporte dedicado',
          },
        ],
        note: 'Cifras vistas el 24 de octubre de 2026; no se comprobó ninguna otra moneda ni precio regional, y los impuestos no están incluidos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La política de privacidad, actualizada por última vez el 12 de octubre de 2026, describe tres modos de transcripción en el escritorio: procesamiento local, en el que no se transmite ningún audio a ninguna parte; tu propia clave de API, en la que el audio va directamente al proveedor que elegiste; y OpenWhispr Cloud, en la que el audio se envía a su API o a un proveedor de voz a texto, se procesa en tiempo real y OpenWhispr no lo almacena.** Se guardan registros de uso en la nube (número de palabras, proveedor, modelo, duración) para facturar, y la política dice que tus datos no se usan para entrenar modelos. El texto transcrito vive en una base de datos SQLite local, y la app de escritorio conserva el audio del dictado en tu dispositivo durante 30 días por defecto (hasta 90, o desactivado).',
          'La copia de seguridad en la nube está desactivada por defecto en el escritorio y activada por defecto para los planes de pago en la app móvil. Las notas guardadas en la nube de OpenWhispr se envían a OpenAI para indexarlas en la búsqueda, y las búsquedas web del asistente pasan por el proveedor Exa. El README dice «no telemetry», mientras que la política enumera SDK de analítica, atribución y compras en la app móvil (AppsFlyer, RevenueCat, Superwall); la analítica de uso se puede desactivar.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del desarrollador, no resultados de una auditoría. El código es público con licencia MIT, pero PromptQuorum no lo ha leído ni ha inspeccionado el tráfico de red de la app.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Precisión y velocidad.** PromptQuorum no midió tasas de error de palabras, latencia ni cobertura de idiomas en ningún modelo.',
          '**Sellos de cumplimiento.** El sitio web muestra sellos de HIPAA, ISO 27001, SOC 2 Type II y RGPD y enlaza un Trust Center; no leímos ningún informe de auditoría ni certificado.',
          '**Cifra de descargas.** El sitio web dice «Downloaded by 150k+ users»; no tenemos forma de comprobarlo.',
          '**Qué funciones del iPhone requieren un plan.** La ficha del App Store ofrece una descarga gratuita, mientras que la página de precios incluye la app móvil en los planes de pago.',
          '**Firma de los instaladores.** No se comprobó si los instaladores de macOS y Windows están notarizados o firmados con certificado de desarrollador.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[Handy](/es/power-local-llm/handy-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Herramienta de dictado gratuita más reducida: sin notas de reuniones ni plan de nube de pago',
          },
          {
            App: '[MacWhisper](/es/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Precio / licencia': 'Freemium / Propietaria',
            'Diferencia clave': 'App solo para Mac con compra única para transcripción local con Whisper y Parakeet; código cerrado',
          },
          {
            App: '[AquaVoice](/es/power-local-llm/aquavoice-review)',
            Plataformas: 'macOS, Windows, iOS, Android',
            'Precio / licencia': 'Freemium / Propietaria',
            'Diferencia clave': 'Servicio de dictado en la nube que escribe en la app activa, por lo que no es una opción sin conexión',
          },
        ],
        note: 'Son apps de la misma categoría del directorio de PromptQuorum; confirma el precio, la licencia y las plataformas actuales en la página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Con qué modelo local debería empezar?',
            a: 'La documentación recomienda Orukeet, un ajuste fino multilingüe de Parakeet de Oruk, y una instalación nueva cae en él cuando eliges la vía local; para Whisper recomienda el tamaño base. Llama a Cohere Transcribe su modelo sin conexión más preciso, con una tasa media de error de palabras del 5.42 % en 14 idiomas, una cifra del proyecto que no hemos comprobado.',
          },
          {
            q: '¿Admite otros idiomas además del inglés?',
            a: 'El sitio web afirma más de 100 idiomas con detección automática, pero la cobertura local depende del modelo: la documentación indica 25 idiomas para Parakeet v3, 15 para un modelo Nemotron y solo inglés para otros dos. No verificamos la cifra de más de 100.',
          },
          {
            q: '¿Puedo usar mis propias claves de API?',
            a: 'Sí en el escritorio: el plan Free indica transcripción en la nube ilimitada con tus propias claves de API, y la política de privacidad dice que entonces el audio va directamente a tu proveedor sin pasar por OpenWhispr. La ficha del iPhone también menciona conectar tu propio proveedor.',
          },
          {
            q: '¿Hay línea de comandos o una API para desarrolladores?',
            a: 'La página de precios indica una interfaz de línea de comandos que funciona en local en el plan Free y en local y remoto en los planes de pago, además de acceso a API y MCP desde Pro; la documentación enlaza una descripción general de la API.',
          },
          {
            q: '¿Con qué frecuencia se actualiza?',
            a: 'La versión 1.10.3 se publicó el 12 de octubre de 2026 y la 1.10.4 el 22 de octubre de 2026, y el repositorio mantiene un registro de cambios. Con lanzamientos tan frecuentes, los ajustes y los límites de los planes pueden cambiar; consulta la página de precios antes de fiarte de una cifra de aquí.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'OpenWhispr es una forma activa y con licencia MIT de dictar en cualquier app y grabar reuniones en macOS, Windows, Linux e iPhone, con modelos de voz que puedes ejecutar en tu propio dispositivo o sustituir por un proveedor en la nube. Su privacidad es tan sólida como el modo que elijas, los planes de pago y la app móvil añaden servicios en la nube y analítica que la línea «no telemetry» del README no menciona, y ni la precisión, ni la velocidad ni los sellos de cumplimiento se pudieron comprobar aquí. Encaja con quien quiere una sola app para dictado y notas de reuniones y se ciñe a los modelos locales si la privacidad importa; quien necesite precisión demostrada o cumplimiento certificado debería probarla y pedir antes los informes de auditoría.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de OpenWhispr](https://openwhispr.com) — descripción, plataformas y sellos de cumplimiento.',
          '[Precios de OpenWhispr](https://openwhispr.com/pricing) — precios y límites de los planes.',
          '[Política de privacidad de OpenWhispr](https://openwhispr.com/privacy) — tratamiento de datos, retención y subencargados, actualizada por última vez el 12 de octubre de 2026.',
          '[OpenWhispr en GitHub](https://github.com/OpenWhispr/openwhispr) — README, licencia MIT y pila tecnológica.',
          '[Releases de OpenWhispr](https://github.com/OpenWhispr/openwhispr/releases) — versión 1.10.4 y archivos de instalación.',
          '[Registro de cambios de OpenWhispr](https://github.com/OpenWhispr/openwhispr/blob/main/CHANGELOG.md) — historial de versiones.',
          '[Documentación de OpenWhispr: modelos locales](https://docs.openwhispr.com/guides/local-models) — motores, tamaños de modelo y aceleración por GPU.',
          '[Documentación de OpenWhispr: requisitos del sistema](https://docs.openwhispr.com/platform/system-requirements) — sistemas operativos y permisos.',
          '[OpenWhispr en el App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420) — ficha para iPhone y iPad, versión 1.2.4.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Handy](/es/power-local-llm/handy-review) — una app de dictado pulsar para hablar, gratuita y con licencia MIT, que se ejecuta en tu propio ordenador.',
          '[Reseña de MacWhisper](/es/power-local-llm/macwhisper-review) — una app para Mac de transcripción local con Whisper y Parakeet.',
          '[Reseña de Whisper.cpp](/es/power-local-llm/whisper-cpp-review) — el port en C++ de Whisper en el que se basan muchas herramientas locales de dictado.',
          '[Herramientas de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) — la comparativa de categoría a la que pertenece esta reseña.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA local.',
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
    heroImage: '/images/openwhispr-review-hero-fr.webp',
    title: 'Test d’OpenWhispr : appli open source de dictée et de notes de réunion',
    seoTitle: 'Test d’OpenWhispr : dictée et notes de réunion open source',
    intro: 'OpenWhispr est une application open source de reconnaissance vocale pour macOS, Windows, Linux, iPhone et iPad : vous appuyez sur un raccourci, vous parlez, et le texte est collé là où se trouve votre curseur, avec en option la transcription de réunions et des notes. Vous choisissez entre des modèles vocaux exécutés sur votre propre appareil et un traitement dans le cloud, et ce choix détermine où va votre voix. Ce test s’appuie sur le site web, sa politique de confidentialité, la documentation et le dépôt GitHub, consultés le 24 octobre 2026 ; PromptQuorum n’a pas testé l’application lui-même.',
    metaDescription: 'Test d’OpenWhispr : appli MIT de dictée et de notes de réunion pour Mac, Windows, Linux et iPhone, avec voix locale ou cloud. Non testée en pratique.',
    twitterDescription: 'Test d’OpenWhispr : dictée et notes de réunion open source avec modèles vocaux locaux ou cloud. Ce que les sources confirment sur les offres, la confidentialité et les installateurs, et ce qu’elles ne confirment pas.',
    audience: 'Rédacteurs, développeurs et professionnels qui veulent de la dictée vocale et des notes de réunion et doivent savoir ce que confirment les sources, où va l’audio dans chaque mode et ce qu’ajoutent les offres payantes.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test OpenWhispr',
    targetKeywords: [
      'test openwhispr',
      'openwhispr',
      'application de dictée open source',
      'alternative open source à wispr flow',
      'reconnaissance vocale locale mac windows linux',
      'transcription de réunions locale',
      'openwhispr.com',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**OpenWhispr (version 1.10.4) est une application de reconnaissance vocale sous licence MIT qui colle votre dictée dans n’importe quelle application ; que votre voix reste sur l’appareil dépend du choix d’un modèle vocal local ou cloud.** Elle ajoute la transcription de réunions, des notes et un assistant IA, et chaque affirmation ici provient du site web de l’éditeur, de sa politique de confidentialité, de la documentation et du dépôt GitHub.',
    quickAnswerTop: {
      fr: {
        question: 'OpenWhispr garde-t-il ma voix sur mon ordinateur ?',
        answer: 'Seulement en mode local : la politique de confidentialité indique qu’aucun audio n’est transmis nulle part lorsque la reconnaissance vocale s’exécute sur votre appareil. Avec OpenWhispr Cloud ou votre propre clé d’API, l’audio est envoyé à un prestataire de transcription pour être traité.',
        bullets: [
          'Un raccourci global dicte dans n’importe quelle appli, et un second traduit pendant que vous parlez.',
          'Détection des appels Zoom, Teams et FaceTime, avec des étiquettes de locuteurs calculées sur l’appareil.',
          'Notes avec dossiers et recherche sémantique locale, plus import d’audio et de vidéo.',
          'Un raccourci d’assistant vocal qui envoie ce que vous dites à un modèle d’IA de votre choix.',
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
        label: 'Qu’est-ce qu’OpenWhispr ?',
        anchor: 'what-is-openwhispr',
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
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Offres',
        anchor: 'plans',
      },
      {
        label: 'Flux de données et confidentialité',
        anchor: 'privacy',
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
            text: 'OpenWhispr est une application open source pour ordinateur et mobile qui transforme la voix en texte avec des modèles locaux ou cloud, le colle dans l’appli active et peut enregistrer et étiqueter des réunions.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme un clavier vocal pour tout l’ordinateur, avec un carnet qui peut aussi écouter vos réunions.',
          },
        ],
        items: [
          'Maintenance : la branche principale a changé pour la dernière fois le 23 octobre 2026 et la version 1.10.4 est sortie le 22 octobre 2026, donc aucun avertissement de projet abandonné ne s’applique.',
          'Coût : la dictée locale est gratuite et illimitée ; les fonctions cloud et d’équipe relèvent d’offres payantes.',
          'Moteurs : whisper.cpp exécute les modèles Whisper et sherpa-onnx les autres modèles locaux.',
          'Plateformes : installateurs de bureau pour macOS, Windows et Linux, plus une appli gratuite pour iPhone et iPad.',
          'Éditeur : Gizmo Labs Inc., une société du Delaware ; le code est ouvert sous licence MIT.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur [openwhispr.com](https://openwhispr.com), sa politique de confidentialité, la documentation et le dépôt GitHub, consultés le 24 octobre 2026. PromptQuorum n’a ni installé ni chronométré l’application ; la précision et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-openwhispr',
        title: 'Qu’est-ce qu’OpenWhispr ?',
        content: [
          '**OpenWhispr est une application de reconnaissance vocale qui enregistre tant que vous appuyez sur un raccourci, transcrit l’audio et colle le texte dans l’appli qui a le focus.** Le README la présente comme « l’alternative open source et gratuite à WisprFlow et Granola », et le site web y ajoute des notes de réunion, un assistant IA et plus de 100 langues. Le dépôt a été créé en juin 2025.',
          '**L’appli est publiée par Gizmo Labs Inc., une société du Delaware qui exploite aussi le service payant OpenWhispr Cloud.** L’appli de bureau est construite avec Electron ; l’appli iPhone et iPad est un projet Expo distinct dans le même dépôt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**OpenWhispr se télécharge pour macOS, Windows et Linux, avec une appli iPhone et iPad sur l’App Store ; selon la documentation, il n’existe ni version web ni extension de navigateur.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          {
            Option: 'macOS',
            'Comment l’obtenir': '.dmg (Apple silicon, Intel) : [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            Option: 'Windows',
            'Comment l’obtenir': 'installateur .exe (x64) : [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            Option: 'Linux',
            'Comment l’obtenir': '.AppImage, .deb, .rpm, .tar.gz (x86_64) : [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            Option: 'iPhone et iPad',
            'Comment l’obtenir': '[App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420), iOS 17.0 ou ultérieur',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[openwhispr.com](https://openwhispr.com)',
          },
          {
            Option: 'Politique de confidentialité',
            'Comment l’obtenir': '[openwhispr.com/privacy](https://openwhispr.com/privacy)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': '[github.com/OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr), licence MIT',
          },
        ],
        note: 'Version testée : 1.10.4, publiée le 22 octobre 2026 selon la [page Releases de GitHub](https://github.com/OpenWhispr/openwhispr/releases/latest), qui liste tous les installateurs de bureau ; l’appli iPhone et iPad est en version 1.2.4 dans sa fiche App Store et s’affichait gratuite dans les boutiques des États-Unis, d’Allemagne, de France, d’Espagne, du Brésil, du Japon et de Corée. Un cask Homebrew maintenu par la communauté (`brew install --cask openwhispr`) existe aussi. Les offres payantes sont traitées dans Offres.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Prérequis',
        content: [
          '**La documentation indique macOS 12, Windows 10 et un Linux 64 bits comme minimum ; la partie exigeante est l’exécution des modèles vocaux sur votre propre appareil.**',
        ],
        columns: ['Élément', 'Ce que disent les sources'],
        rows: [
          {
            'Élément': 'Système d’exploitation',
            'Ce que disent les sources': 'macOS 12 ou ultérieur (Apple silicon ou Intel), Windows 10 ou ultérieur (64 bits, x64), Linux 64 bits x86-64 avec PulseAudio ou PipeWire ; pas de versions ARM pour Windows ni Linux',
          },
          {
            'Élément': 'Modèles vocaux',
            'Ce que disent les sources': 'Téléchargés dans l’appli : Orukeet environ 672 Mo (le choix par défaut recommandé), Whisper d’environ 75 Mo (tiny) à environ 3 Go (large), Parakeet environ 631 à 680 Mo, Cohere Transcribe environ 1.7 Go',
          },
          {
            'Élément': 'Matériel',
            'Ce que disent les sources': 'Whisper local peut utiliser Metal sur Apple silicon, CUDA sur les GPU NVIDIA ou Vulkan sur les GPU AMD et Intel, et bascule sur le CPU si l’environnement GPU échoue ; aucun chiffre de RAM n’est donné',
          },
          {
            'Élément': 'Autorisations',
            'Ce que disent les sources': 'Accès au micro et à l’accessibilité pour coller le texte ; macOS 14.2 ou ultérieur et l’autorisation « Enregistrement audio du système » pour capter l’autre côté d’une réunion',
          },
          {
            'Élément': 'Mac Intel',
            'Ce que disent les sources': 'L’identification des locuteurs en direct et les empreintes vocales sont indisponibles ; les réunions sont toujours enregistrées et transcrites, et la recherche de notes se rabat sur les mots-clés (README)',
          },
          {
            'Élément': 'Internet',
            'Ce que disent les sources': 'Nécessaire pour télécharger les modèles et pour les fonctions cloud ; la transcription locale fonctionne hors ligne une fois le modèle sur le disque',
          },
        ],
        note: 'Les tailles de modèles sont les chiffres du guide des modèles locaux de la documentation ; la liste dans l’appli peut différer.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Tout ce qui suit provient du site web, de la documentation ou du README ; rien n’a été testé de façon indépendante.**',
        ],
        items: [
          '**Dictée partout.** Un raccourci global enregistre, transcrit et colle dans l’appli qui a le focus ; un raccourci dédié dicte dans une langue et colle dans une autre.',
          '**Deux moteurs locaux.** Whisper passe par whisper.cpp, tandis que les familles Orukeet, Parakeet et Nemotron passent par sherpa-onnx ; les modèles Nemotron en streaming peuvent afficher du texte partiel pendant que vous parlez.',
          '**Réunions.** L’appli détecte les appels Zoom, Teams et FaceTime, étiquette les locuteurs sur l’appareil et peut lier des événements Google, Microsoft ou Apple Calendar aux notes.',
          '**Notes et import.** Les notes ont des dossiers et un modèle d’embeddings local pour la recherche sémantique ; on peut transcrire des fichiers audio et vidéo ou une URL YouTube ou audio collée.',
          '**Assistant et intégrations.** Un raccourci d’assistant vocal envoie ce que vous dites à un modèle de votre choix, cloud ou local ; une API publique et un serveur MCP relient d’autres outils.',
        ],
        note: 'Les réglages de bureau conservent un choix de moteur distinct pour la dictée, l’enregistrement de notes et l’import audio.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Offres',
        content: [
          '**La dictée locale est gratuite et illimitée dans toutes les offres ; les offres payantes ajoutent la transcription cloud, plus d’heures de réunion et des fonctions d’équipe.** Tous les chiffres sont les prix en dollars américains de la page des tarifs.',
        ],
        columns: ['Offre', 'Ce qu’indique la page des tarifs'],
        rows: [
          {
            Offre: 'Free',
            'Ce qu’indique la page des tarifs': '0 $ : modèles locaux illimités, transcription cloud illimitée avec vos propres clés d’API, 2 000 mots par semaine de transcription OpenWhispr Cloud, 5 heures d’enregistrements de réunion par mois',
          },
          {
            Offre: 'Pro',
            'Ce qu’indique la page des tarifs': '80 $ par utilisateur et par an, facturés annuellement (6.67 $ par mois affichés) : transcription cloud illimitée, mode agent, 20 heures de réunions par mois, synchronisation, accès API et MCP, appli iPhone et iPad',
          },
          {
            Offre: 'Business',
            'Ce qu’indique la page des tarifs': '160 $ par utilisateur et par an (13.33 $ par mois affichés) : tout Pro plus enregistrements de réunion illimités, chat sur vos données et support prioritaire',
          },
          {
            Offre: 'Enterprise',
            'Ce qu’indique la page des tarifs': 'Sur mesure : SSO, SAML et SCIM, journaux d’audit, contrôles de rétention, support dédié',
          },
        ],
        note: 'Chiffres affichés le 24 octobre 2026 ; aucune autre devise ni aucun prix régional n’a été vérifié, et les taxes ne sont pas incluses.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La politique de confidentialité, mise à jour le 12 octobre 2026, décrit trois modes de transcription sur le bureau : le traitement local, où aucun audio n’est transmis nulle part ; votre propre clé d’API, où l’audio va directement au prestataire que vous avez choisi ; et OpenWhispr Cloud, où l’audio est envoyé à son API ou à un prestataire de reconnaissance vocale, traité en temps réel et non stocké par OpenWhispr.** Des enregistrements d’usage cloud (nombre de mots, prestataire, modèle, durée) sont conservés pour la facturation, et la politique indique que vos données ne servent pas à entraîner des modèles. Le texte transcrit réside dans une base SQLite locale, et l’appli de bureau conserve l’audio de dictée sur votre appareil pendant 30 jours par défaut (jusqu’à 90, ou désactivé).',
          'La sauvegarde cloud est désactivée par défaut sur le bureau et activée par défaut pour les offres payantes dans l’appli mobile. Les notes stockées dans le cloud d’OpenWhispr sont envoyées à OpenAI pour l’indexation de la recherche, et les recherches web de l’assistant passent par le prestataire Exa. Le README dit « no telemetry », alors que la politique recense des SDK d’analyse, d’attribution et d’achat dans l’appli mobile (AppsFlyer, RevenueCat, Superwall) ; l’analyse d’usage peut être désactivée.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’éditeur, pas des résultats d’audit. Le code est public sous licence MIT, mais PromptQuorum ne l’a ni lu ni inspecté le trafic réseau de l’appli.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Précision et vitesse.** PromptQuorum n’a mesuré ni taux d’erreur de mots, ni latence, ni couverture linguistique sur aucun modèle.',
          '**Badges de conformité.** Le site web affiche des badges HIPAA, ISO 27001, SOC 2 Type II et RGPD et renvoie vers un Trust Center ; nous n’avons lu aucun rapport d’audit ni certificat.',
          '**Chiffre de téléchargements.** Le site web indique « Downloaded by 150k+ users » ; nous n’avons aucun moyen de le vérifier.',
          '**Quelles fonctions de l’iPhone exigent une offre.** La fiche App Store propose un téléchargement gratuit, tandis que la page des tarifs range l’appli mobile parmi les offres payantes.',
          '**Signature des installateurs.** Nous n’avons pas vérifié si les installateurs macOS et Windows sont notarisés ou signés avec un certificat de développeur.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Application: '[Handy](/fr/power-local-llm/handy-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Outil de dictée gratuit plus restreint : pas de notes de réunion ni d’offre cloud payante',
          },
          {
            Application: '[MacWhisper](/fr/power-local-llm/macwhisper-review)',
            Plateformes: 'macOS',
            'Prix / licence': 'Freemium / Propriétaire',
            'Différence clé': 'Appli réservée au Mac avec achat unique pour la transcription locale Whisper et Parakeet ; code fermé',
          },
          {
            Application: '[AquaVoice](/fr/power-local-llm/aquavoice-review)',
            Plateformes: 'macOS, Windows, iOS, Android',
            'Prix / licence': 'Freemium / Propriétaire',
            'Différence clé': 'Service de dictée cloud qui saisit dans l’appli active, donc pas une option hors ligne',
          },
        ],
        note: 'Ce sont des applications de la même catégorie du répertoire PromptQuorum ; vérifiez le prix, la licence et les plateformes actuels sur la page de chacune.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Par quel modèle local commencer ?',
            a: 'La documentation recommande Orukeet, un affinage multilingue de Parakeet par Oruk, et une installation neuve y aboutit quand vous choisissez la voie locale ; pour Whisper, elle recommande la taille base. Elle présente Cohere Transcribe comme son modèle hors ligne le plus précis, avec un taux d’erreur de mots moyen de 5.42 % sur 14 langues, un chiffre du projet que nous n’avons pas vérifié.',
          },
          {
            q: 'Prend-elle en charge d’autres langues que l’anglais ?',
            a: 'Le site web annonce plus de 100 langues avec détection automatique, mais la couverture locale dépend du modèle : la documentation indique 25 langues pour Parakeet v3, 15 pour un modèle Nemotron et l’anglais seul pour deux autres. Nous n’avons pas vérifié le chiffre de plus de 100.',
          },
          {
            q: 'Puis-je utiliser mes propres clés d’API ?',
            a: 'Oui sur le bureau : l’offre Free indique la transcription cloud illimitée avec vos propres clés d’API, et la politique de confidentialité précise que l’audio va alors directement à votre prestataire sans passer par OpenWhispr. La fiche iPhone mentionne aussi la connexion de votre propre prestataire.',
          },
          {
            q: 'Existe-t-il une ligne de commande ou une API pour développeurs ?',
            a: 'La page des tarifs mentionne une interface en ligne de commande qui fonctionne en local dans l’offre Free et en local et à distance dans les offres payantes, ainsi qu’un accès API et MCP à partir de Pro ; la documentation renvoie vers une présentation de l’API.',
          },
          {
            q: 'À quelle fréquence est-elle mise à jour ?',
            a: 'La version 1.10.3 a été publiée le 12 octobre 2026 et la 1.10.4 le 22 octobre 2026, et le dépôt tient un journal des modifications. Avec des versions aussi fréquentes, les réglages et les limites des offres peuvent changer ; consultez la page des tarifs avant de vous fier à un chiffre d’ici.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'OpenWhispr est un moyen activement mis à jour et sous licence MIT de dicter dans n’importe quelle appli et d’enregistrer des réunions sur macOS, Windows, Linux et iPhone, avec des modèles vocaux que vous pouvez exécuter sur votre appareil ou remplacer par un prestataire cloud. Sa confidentialité vaut ce que vaut le mode choisi, les offres payantes et l’appli mobile ajoutent des services cloud et des analyses que la ligne « no telemetry » du README ne mentionne pas, et ni la précision, ni la vitesse, ni les badges de conformité n’ont pu être vérifiés ici. Elle convient à ceux qui veulent une seule appli pour la dictée et les notes de réunion et s’en tiennent aux modèles locaux si la confidentialité compte ; qui a besoin d’une précision prouvée ou d’une conformité certifiée devrait la tester et demander d’abord les rapports d’audit.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web d’OpenWhispr](https://openwhispr.com) — description, plateformes et badges de conformité.',
          '[Tarifs d’OpenWhispr](https://openwhispr.com/pricing) — prix et limites des offres.',
          '[Politique de confidentialité d’OpenWhispr](https://openwhispr.com/privacy) — traitement des données, rétention et sous-traitants, mise à jour le 12 octobre 2026.',
          '[OpenWhispr sur GitHub](https://github.com/OpenWhispr/openwhispr) — README, licence MIT et pile technique.',
          '[Versions d’OpenWhispr](https://github.com/OpenWhispr/openwhispr/releases) — version 1.10.4 et fichiers d’installation.',
          '[Journal des modifications d’OpenWhispr](https://github.com/OpenWhispr/openwhispr/blob/main/CHANGELOG.md) — historique des versions.',
          '[Documentation d’OpenWhispr : modèles locaux](https://docs.openwhispr.com/guides/local-models) — moteurs, tailles de modèles et accélération GPU.',
          '[Documentation d’OpenWhispr : configuration requise](https://docs.openwhispr.com/platform/system-requirements) — systèmes d’exploitation et autorisations.',
          '[OpenWhispr sur l’App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420) — fiche iPhone et iPad, version 1.2.4.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Handy](/fr/power-local-llm/handy-review) — une appli de dictée gratuite sous licence MIT, en appui-pour-parler, qui s’exécute sur votre propre ordinateur.',
          '[Test de MacWhisper](/fr/power-local-llm/macwhisper-review) — une appli Mac de transcription locale avec Whisper et Parakeet.',
          '[Test de Whisper.cpp](/fr/power-local-llm/whisper-cpp-review) — le portage C++ de Whisper sur lequel reposent beaucoup d’outils de dictée locaux.',
          '[Outils vocaux et audio comparés](/fr/power-local-llm/local-llm-voice-audio-compared) — la comparaison de catégorie à laquelle appartient ce test.',
          '[Répertoire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
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
    heroImage: '/images/openwhispr-review-hero-ja.webp',
    title: 'OpenWhisprレビュー：音声入力と会議メモのオープンソースアプリ',
    seoTitle: 'OpenWhisprレビュー：音声入力と会議メモのOSSアプリ',
    intro: 'OpenWhisprは、オープンソースの音声入力アプリで、macOS、Windows、Linux、iPhone、iPadに対応します。ショートカットを押して話すと、カーソル位置にテキストが貼り付けられ、会議の文字起こしやメモも任意で使えます。音声認識モデルは自分の端末で動かすか、クラウドで処理するかを選べ、その選択によって音声の送信先が決まります。このレビューは、公式サイト、プライバシーポリシー、ドキュメント、GitHubリポジトリ（2026年10月24日確認）に基づいており、PromptQuorumはアプリを実際には試していません。',
    metaDescription: 'OpenWhisprのレビュー。MIT、Mac・Windows・Linux・iPhone対応の音声入力と会議メモのアプリで、ローカルまたはクラウドの音声認識を選べます。実機未検証です。',
    twitterDescription: 'OpenWhisprのレビュー。ローカルまたはクラウドの音声認識に対応するオープンソースの音声入力・会議メモアプリについて、プラン、プライバシー、インストーラーで情報源が確認できた点とできなかった点を整理しました。',
    audience: '音声入力と会議メモを使いたい執筆者、開発者、社会人のうち、情報源が確認している内容、各モードで音声がどこへ送られるか、有料プランで何が増えるかを知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWhispr レビュー',
    targetKeywords: [
      'openwhispr レビュー',
      'openwhispr',
      'オープンソース 音声入力 アプリ',
      'wispr flow 代替 オープンソース',
      'ローカル 音声認識 mac windows linux',
      '会議 文字起こし アプリ ローカル',
      'openwhispr.com',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**OpenWhispr（バージョン1.10.4）はMITライセンスの音声入力アプリで、入力内容を任意のアプリに貼り付けます。音声が端末内にとどまるかどうかは、ローカルとクラウドのどちらの音声認識モデルを選ぶかで決まります。** 会議の文字起こし、ノート、AIアシスタントも備えており、ここに書いた内容はすべて開発元の公式サイト、プライバシーポリシー、ドキュメント、GitHubリポジトリに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'OpenWhisprは音声を自分のパソコン内にとどめますか。',
        answer: 'ローカルモードの場合に限ります。プライバシーポリシーによると、音声認識を端末上で実行するときは、音声がどこにも送信されません。OpenWhispr Cloudや自分のAPIキーを使う場合は、処理のために音声が文字起こしプロバイダーへ送られます。',
        bullets: [
          'グローバルショートカットで任意のアプリに入力でき、もう一つのショートカットで話しながら翻訳できます。',
          'Zoom、Teams、FaceTimeの通話を検出し、話者ラベルは端末上で付けます。',
          'フォルダ付きのノートとローカルのセマンティック検索に加え、音声・動画ファイルの取り込みもできます。',
          '話した内容を自分で選んだAIモデルに送る、音声アシスタント用のショートカットがあります。',
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
        label: 'OpenWhisprとは',
        anchor: 'what-is-openwhispr',
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
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'プラン',
        anchor: 'plans',
      },
      {
        label: 'データの流れとプライバシー',
        anchor: 'privacy',
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
            text: 'OpenWhisprは、端末上またはクラウドのモデルで音声をテキストに変換して使用中のアプリに貼り付け、会議の録音と話者ラベル付けもできるオープンソースのデスクトップ／モバイルアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'パソコン全体で使える音声キーボードに、会議も聞き取れるノートがついたものと考えてください。',
          },
        ],
        items: [
          'メンテナンス：メインブランチは2026年10月23日に最後に更新され、バージョン1.10.4は2026年10月22日にリリースされたため、放置プロジェクトの警告は該当しません。',
          '費用：ローカルでの音声入力は無料で無制限です。クラウドとチーム向けの機能は有料プランに含まれます。',
          'エンジン：Whisperモデルはwhisper.cpp、それ以外のローカルモデルはsherpa-onnxで実行します。',
          '対応環境：macOS、Windows、Linux向けのデスクトップ用インストーラーと、無料のiPhone・iPadアプリがあります。',
          '運営元：米デラウェア州の企業Gizmo Labs Inc.で、コードはMITライセンスで公開されています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、[openwhispr.com](https://openwhispr.com)、プライバシーポリシー、ドキュメント、GitHubリポジトリ（2026年10月24日確認）に基づいています。PromptQuorumはアプリのインストールや計測を行っていないため、精度と速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-openwhispr',
        title: 'OpenWhisprとは',
        content: [
          '**OpenWhisprは、複数のOSに対応した音声入力アプリで、ショートカットを押している間だけ録音し、音声を文字起こしして、フォーカスのあるアプリにテキストを貼り付けます。** READMEは自らを「WisprFlowとGranolaのオープンソースで無料の代替」と説明し、公式サイトでは会議メモ、AIアシスタント、100以上の言語への対応も挙げています。リポジトリは2025年6月に作成されました。',
          '**アプリを公開しているのは米デラウェア州の企業Gizmo Labs Inc.で、有料のOpenWhispr Cloudも運営しています。** デスクトップアプリはElectronで作られており、iPhone・iPadアプリは同じリポジトリ内の別のExpoプロジェクトです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**OpenWhisprはmacOS、Windows、Linux向けにダウンロードでき、iPhoneとiPad向けにはApp Storeのアプリがあります。ドキュメントによると、Web版とブラウザ拡張はありません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          {
            '項目': 'macOS',
            '入手方法': '.dmg（Apple silicon、Intel）：[openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            '項目': 'Windows',
            '入手方法': '.exeインストーラー（x64）：[openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            '項目': 'Linux',
            '入手方法': '.AppImage、.deb、.rpm、.tar.gz（x86_64）：[openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            '項目': 'iPhone・iPad',
            '入手方法': '[App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420)、iOS 17.0以降',
          },
          {
            '項目': '公式サイト',
            '入手方法': '[openwhispr.com](https://openwhispr.com)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '[openwhispr.com/privacy](https://openwhispr.com/privacy)',
          },
          {
            '項目': 'ソースコード',
            '入手方法': '[github.com/OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr)、MITライセンス',
          },
        ],
        note: '確認したバージョン：1.10.4。[GitHubのReleasesページ](https://github.com/OpenWhispr/openwhispr/releases/latest)によると2026年10月22日に公開され、デスクトップ用インストーラーはすべてそこに掲載されています。iPhone・iPadアプリはApp Storeの掲載情報でバージョン1.2.4で、米国、ドイツ、フランス、スペイン、ブラジル、日本、韓国のストアでは無料と表示されていました。コミュニティが保守するHomebrew Cask（`brew install --cask openwhispr`）もあります。有料プランは「プラン」で扱います。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '動作要件',
        content: [
          '**ドキュメントが挙げる最低条件はmacOS 12、Windows 10、64ビットLinuxです。負荷が大きいのは、音声認識モデルを自分の端末で動かす部分です。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          {
            '項目': 'OS',
            '情報源の記載': 'macOS 12以降（Apple siliconまたはIntel）、Windows 10以降（64ビットx64）、PulseAudioまたはPipeWireを備えた64ビットx86-64のLinux。WindowsとLinuxのARM版はありません',
          },
          {
            '項目': '音声モデル',
            '情報源の記載': 'アプリ内でダウンロード：Orukeetは約672 MB（推奨の既定）、Whisperは約75 MB（tiny）から約3 GB（large）、Parakeetは約631〜680 MB、Cohere Transcribeは約1.7 GB',
          },
          {
            '項目': 'ハードウェア',
            '情報源の記載': 'ローカルのWhisperは、Apple siliconのMetal、NVIDIA GPUのCUDA、AMDとIntel GPUのVulkanを使え、GPUランタイムが失敗するとCPUに切り替わります。RAMの目安は示されていません',
          },
          {
            '項目': '権限',
            '情報源の記載': 'テキストの貼り付けにマイクとアクセシビリティの許可が必要です。会議の相手側の音声を取り込むにはmacOS 14.2以降と「システムオーディオ録音」の許可が必要です',
          },
          {
            '項目': 'IntelのMac',
            '情報源の記載': 'ライブの話者識別と声紋認識は使えません。会議の録音と文字起こしは可能で、ノート検索はキーワード検索に切り替わります（README）',
          },
          {
            '項目': 'インターネット',
            '情報源の記載': 'モデルのダウンロードとクラウド機能に必要です。モデルがディスクにあれば、ローカルの文字起こしはオフラインで動作します',
          },
        ],
        note: 'モデルサイズはドキュメントのローカルモデル解説にある数値です。アプリ内の一覧とは異なる場合があります。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: ['**以下はすべて公式サイト、ドキュメント、READMEに基づく内容で、独自に検証したものはありません。**'],
        items: [
          '**どこでも音声入力。** グローバルショートカットで録音・文字起こし・貼り付けを行います。専用のショートカットでは、ある言語で話して別の言語で貼り付けられます。',
          '**2つのローカルエンジン。** Whisperはwhisper.cpp、OrukeetとParakeetとNemotronの系統はsherpa-onnxで動きます。ストリーミング型のNemotronモデルは、話している間に途中のテキストを表示できます。',
          '**会議。** Zoom、Teams、FaceTimeの通話を検出し、話者ラベルを端末上で付け、Google、Microsoft、Appleカレンダーの予定をノートに紐付けられます。',
          '**ノートと取り込み。** ノートにはフォルダと、セマンティック検索用のローカル埋め込みモデルがあります。音声・動画ファイルや、貼り付けたYouTubeまたは音声のURLも文字起こしできます。',
          '**アシスタントと連携。** 音声アシスタント用のショートカットは、話した内容をクラウドまたはローカルの任意のモデルに送ります。公開APIとMCPサーバーで他のツールと連携できます。',
        ],
        note: 'デスクトップの設定では、音声入力、ノート録音、音声アップロードごとにエンジンを別々に選べます。',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'プラン',
        content: [
          '**ローカルでの音声入力はどのプランでも無料・無制限で、有料プランではクラウド文字起こし、会議時間の増加、チーム機能が加わります。** 数値はすべて料金ページの米ドル表示です。',
        ],
        columns: ['プラン', '料金ページの記載'],
        rows: [
          {
            'プラン': 'Free',
            '料金ページの記載': '$0：ローカルモデルは無制限、自分のAPIキーでのクラウド文字起こしは無制限、OpenWhispr Cloudの文字起こしは週2,000語、会議録音は月5時間',
          },
          {
            'プラン': 'Pro',
            '料金ページの記載': '年払いで1ユーザーあたり年$80（月額換算$6.67と表示）：クラウド文字起こし無制限、エージェントモード、会議は月20時間、同期、APIとMCPへのアクセス、iPhone・iPadアプリ',
          },
          {
            'プラン': 'Business',
            '料金ページの記載': '1ユーザーあたり年$160（月額換算$13.33と表示）：Proのすべてに加え、会議録音無制限、データに対するチャット、優先サポート',
          },
          {
            'プラン': 'Enterprise',
            '料金ページの記載': '個別見積もり：SSO、SAML、SCIM、監査ログ、保持期間の管理、専任サポート',
          },
        ],
        note: '2026年10月24日時点の表示です。ほかの通貨や地域別の価格は確認しておらず、税は含まれていません。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**2026年10月12日に更新されたプライバシーポリシーは、デスクトップの文字起こしを3つのモードで説明しています。音声がどこにも送信されないローカル処理、音声が選んだプロバイダーに直接送られる自分のAPIキー、音声が同社のAPIまたは音声認識プロバイダーに送られてリアルタイムで処理され、OpenWhisprには保存されないOpenWhispr Cloudです。** 課金のためにクラウドの利用記録（語数、プロバイダー、モデル、長さ）は保持され、ポリシーによればデータはモデルの学習に使われません。文字起こしされたテキストはローカルのSQLiteデータベースに保存され、デスクトップアプリは音声入力の録音データを既定で30日間（最長90日、または無効）端末に保持します。',
          'クラウドバックアップは、デスクトップでは既定でオフ、モバイルアプリでは有料プランで既定でオンです。OpenWhisprのクラウドに保存されたノートは検索用の索引作成のためにOpenAIへ送られ、アシスタントが行うWeb検索は検索プロバイダーのExaを経由します。READMEは「no telemetry」と述べていますが、ポリシーにはモバイルアプリの分析・計測・課金SDK（AppsFlyer、RevenueCat、Superwall）が挙げられており、利用状況の分析はオフにできます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元の表明であり、監査結果ではありません。コードはMITライセンスで公開されていますが、PromptQuorumはコードを読んだり、アプリの通信を調べたりしていません。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**精度と速度。** どのモデルについても、単語誤り率、遅延、対応言語の範囲をPromptQuorumは測定していません。',
          '**コンプライアンスのバッジ。** 公式サイトにはHIPAA、ISO 27001、SOC 2 Type II、GDPRのバッジとTrust Centerへのリンクがありますが、監査報告書や認証書は確認していません。',
          '**ダウンロード数。** 公式サイトは「Downloaded by 150k+ users」と記載していますが、確認する手段がありません。',
          '**iPhoneのどの機能にプランが必要か。** App Storeの掲載情報は無料ダウンロードですが、料金ページはモバイルアプリを有料プランの項目に入れています。',
          '**インストーラーの署名。** macOSとWindowsのインストーラーが公証済みか、開発者証明書で署名されているかは確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Handy](/ja/power-local-llm/handy-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'より機能を絞った無料の音声入力ツールで、会議メモや有料のクラウドプランはありません',
          },
          {
            'アプリ': '[MacWhisper](/ja/power-local-llm/macwhisper-review)',
            '対応プラットフォーム': 'macOS',
            '価格／ライセンス': 'フリーミアム／プロプライエタリ',
            '主な違い': 'ローカルのWhisperとParakeetによる文字起こしを買い切りで提供するMac専用アプリで、クローズドソースです',
          },
          {
            'アプリ': '[AquaVoice](/ja/power-local-llm/aquavoice-review)',
            '対応プラットフォーム': 'macOS、Windows、iOS、Android',
            '価格／ライセンス': 'フリーミアム／プロプライエタリ',
            '主な違い': '使用中のアプリに入力するクラウド型の音声入力サービスで、オフラインでは使えません',
          },
        ],
        note: 'いずれもPromptQuorumディレクトリにある同カテゴリのアプリです。現在の価格、ライセンス、対応プラットフォームは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '最初に使うローカルモデルはどれがよいですか。',
            a: 'ドキュメントは、Orukによる多言語のParakeetファインチューンであるOrukeetを推奨しており、ローカルを選んだ新規インストールではこれが選ばれます。Whisperではbaseサイズを推奨しています。Cohere Transcribeは最も精度の高いオフラインモデルとされ、14言語平均の単語誤り率は5.42%ですが、これはプロジェクトの数値で、当方では確認していません。',
          },
          {
            q: '英語以外の言語にも対応していますか。',
            a: '公式サイトは自動検出で100以上の言語に対応すると述べていますが、ローカルでの対応範囲はモデルによります。ドキュメントではParakeet v3が25言語、Nemotronの1モデルが15言語、ほかの2モデルは英語のみです。100以上という数字は確認していません。',
          },
          {
            q: '自分のAPIキーは使えますか。',
            a: 'デスクトップでは使えます。Freeプランには自分のAPIキーでのクラウド文字起こしが無制限と記載されており、プライバシーポリシーによると、その場合の音声はOpenWhisprを経由せずに直接プロバイダーへ送られます。iPhoneの掲載情報にも、自分のプロバイダーを接続できるとあります。',
          },
          {
            q: 'コマンドラインや開発者向けAPIはありますか。',
            a: '料金ページには、Freeではローカル、有料プランではローカルとリモートで動くコマンドラインインターフェースと、Pro以上でのAPIおよびMCPアクセスが記載されています。ドキュメントにはAPIの概要ページへのリンクがあります。',
          },
          {
            q: 'どのくらいの頻度で更新されますか。',
            a: 'バージョン1.10.3は2026年10月12日、1.10.4は2026年10月22日に公開され、リポジトリには変更履歴があります。リリースがこれだけ頻繁だと設定やプランの上限が変わることもあるため、ここにある数値を信頼する前に料金ページを確認してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'OpenWhisprは、MITライセンスで活発に更新されており、macOS、Windows、Linux、iPhoneで任意のアプリへの音声入力と会議の録音ができます。音声認識モデルは自分の端末で動かすことも、クラウドのプロバイダーに切り替えることもできます。プライバシーは選んだモードの範囲でしか守られず、有料プランとモバイルアプリにはREADMEの「no telemetry」では触れられていないクラウドサービスと分析が加わり、精度、速度、コンプライアンスのバッジはここでは確認できませんでした。音声入力と会議メモを1つのアプリで済ませたく、プライバシーが重要ならローカルモデルにとどめる方に向いています。実証済みの精度や認証済みのコンプライアンスが必要な場合は、まず試用し、監査報告書を請求してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[OpenWhispr公式サイト](https://openwhispr.com)：概要、対応プラットフォーム、コンプライアンスのバッジ。',
          '[OpenWhisprの料金](https://openwhispr.com/pricing)：プランの価格と上限。',
          '[OpenWhisprのプライバシーポリシー](https://openwhispr.com/privacy)：データの取り扱い、保持、委託先。2026年10月12日更新。',
          '[GitHubのOpenWhispr](https://github.com/OpenWhispr/openwhispr)：README、MITライセンス、技術スタック。',
          '[OpenWhisprのリリース](https://github.com/OpenWhispr/openwhispr/releases)：バージョン1.10.4とインストーラー。',
          '[OpenWhisprの変更履歴](https://github.com/OpenWhispr/openwhispr/blob/main/CHANGELOG.md)：リリース履歴。',
          '[OpenWhisprドキュメント：ローカルモデル](https://docs.openwhispr.com/guides/local-models)：エンジン、モデルサイズ、GPU高速化。',
          '[OpenWhisprドキュメント：システム要件](https://docs.openwhispr.com/platform/system-requirements)：対応OSと権限。',
          '[App StoreのOpenWhispr](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420)：iPhone・iPadの掲載情報、バージョン1.2.4。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Handyレビュー](/ja/power-local-llm/handy-review)：自分のパソコン上で動く、MITライセンスの無料プッシュトゥトーク音声入力アプリ。',
          '[MacWhisperレビュー](/ja/power-local-llm/macwhisper-review)：WhisperとParakeetでローカル文字起こしを行うMacアプリ。',
          '[Whisper.cppレビュー](/ja/power-local-llm/whisper-cpp-review)：多くのローカル音声入力ツールの基盤となっているWhisperのC++ポート。',
          '[音声・オーディオツール比較](/ja/power-local-llm/local-llm-voice-audio-compared)：このレビューが属するカテゴリ比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory)：ローカルAIツールの全カタログ。',
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
    heroImage: '/images/openwhispr-review-hero-pt.webp',
    title: 'Análise do OpenWhispr: app de código aberto para ditado e notas de reuniões',
    seoTitle: 'Análise do OpenWhispr: ditado e notas de reuniões',
    intro: 'O OpenWhispr é um app de voz para texto de código aberto para macOS, Windows, Linux, iPhone e iPad: você aperta um atalho, fala, e o texto é colado onde está o cursor, com transcrição de reuniões e notas como extras opcionais. Você escolhe entre modelos de voz que rodam no seu próprio dispositivo e o processamento na nuvem, e essa escolha decide para onde vai a sua voz. Esta análise parte do site, da política de privacidade, da documentação e do repositório, consultados em 24 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription: 'Análise do OpenWhispr: app MIT de ditado e notas de reuniões para Mac, Windows, Linux e iPhone, com voz local ou na nuvem. Não testado na prática.',
    twitterDescription: 'Análise do OpenWhispr: ditado e notas de reuniões de código aberto com modelos de voz locais ou na nuvem. O que as fontes confirmam sobre planos, privacidade e instaladores, e o que não confirmam.',
    audience: 'Redatores, desenvolvedores e profissionais que querem ditado por voz e notas de reuniões e precisam saber o que as fontes confirmam, para onde vai o áudio em cada modo e o que os planos pagos acrescentam.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do OpenWhispr',
    targetKeywords: [
      'análise openwhispr',
      'openwhispr',
      'app de ditado código aberto',
      'alternativa ao wispr flow código aberto',
      'voz para texto local mac windows linux',
      'app de transcrição de reuniões local',
      'openwhispr.com',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**O OpenWhispr (versão 1.10.4) é um app de voz para texto com licença MIT que cola o seu ditado em qualquer aplicativo, e a sua voz ficar ou não no dispositivo depende de você escolher um modelo de voz local ou na nuvem.** Ele acrescenta transcrição de reuniões, notas e um assistente de IA, e cada afirmação aqui vem do site do desenvolvedor, da política de privacidade, da documentação e do repositório.',
    quickAnswerTop: {
      pt: {
        question: 'O OpenWhispr mantém a minha voz no meu computador?',
        answer: 'Só no modo local: a política de privacidade diz que, quando o voz para texto roda no seu dispositivo, nenhum áudio é transmitido para lugar nenhum. Com o OpenWhispr Cloud ou com a sua própria chave de API, o áudio é enviado a um provedor de transcrição para ser processado.',
        bullets: [
          'Um atalho global dita em qualquer app, e um segundo atalho traduz enquanto você fala.',
          'Detecção de chamadas do Zoom, Teams e FaceTime, com rótulos de falantes calculados no dispositivo.',
          'Notas com pastas e busca semântica local, além de importação de áudio e vídeo.',
          'Um atalho de assistente de voz que envia o que você diz a um modelo de IA que você escolhe.',
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
        label: 'O que é o OpenWhispr?',
        anchor: 'what-is-openwhispr',
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
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Planos',
        anchor: 'plans',
      },
      {
        label: 'Fluxo de dados e privacidade',
        anchor: 'privacy',
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
            text: 'O OpenWhispr é um app de código aberto para desktop e celular que converte voz em texto com modelos locais ou na nuvem, cola o texto no app ativo e consegue gravar e rotular reuniões.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como um teclado de voz para o computador inteiro, com um caderno que também consegue ouvir as suas reuniões.',
          },
        ],
        items: [
          'Manutenção: o branch principal mudou pela última vez em 23 de outubro de 2026 e a versão 1.10.4 saiu em 22 de outubro de 2026, então não se aplica aviso de projeto abandonado.',
          'Custo: o ditado local é gratuito e ilimitado; os recursos de nuvem e de equipe ficam em planos pagos.',
          'Motores: whisper.cpp roda os modelos Whisper e sherpa-onnx roda os demais modelos locais.',
          'Plataformas: instaladores de desktop para macOS, Windows e Linux, mais um app gratuito para iPhone e iPad.',
          'Responsável: Gizmo Labs Inc., uma empresa de Delaware; o código é aberto sob a licença MIT.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia em [openwhispr.com](https://openwhispr.com), na política de privacidade, na documentação e no repositório do GitHub, consultados em 24 de outubro de 2026. A PromptQuorum não instalou nem cronometrou o app, então precisão e velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-openwhispr',
        title: 'O que é o OpenWhispr?',
        content: [
          '**O OpenWhispr grava enquanto você aperta um atalho, transcreve o áudio e cola o texto no app em foco.** O README o chama de “a alternativa gratuita e de código aberto ao WisprFlow e ao Granola”, e o site acrescenta notas de reuniões, um assistente de IA e mais de 100 idiomas. O repositório foi criado em junho de 2025.',
          '**O app é publicado pela Gizmo Labs Inc., uma empresa de Delaware que também opera o serviço pago OpenWhispr Cloud.** O app de desktop é feito com Electron; o app de iPhone e iPad é um projeto Expo separado no mesmo repositório.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O OpenWhispr é um download para macOS, Windows e Linux, mais um app para iPhone e iPad na App Store; segundo a documentação, não existe versão web nem extensão de navegador.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          {
            'Opção': 'macOS',
            'Onde obter': '.dmg (Apple silicon, Intel): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            'Opção': 'Windows',
            'Onde obter': 'instalador .exe (x64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            'Opção': 'Linux',
            'Onde obter': '.AppImage, .deb, .rpm, .tar.gz (x86_64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            'Opção': 'iPhone e iPad',
            'Onde obter': '[App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420), iOS 17.0 ou posterior',
          },
          {
            'Opção': 'Site',
            'Onde obter': '[openwhispr.com](https://openwhispr.com)',
          },
          {
            'Opção': 'Política de privacidade',
            'Onde obter': '[openwhispr.com/privacy](https://openwhispr.com/privacy)',
          },
          {
            'Opção': 'Código-fonte',
            'Onde obter': '[github.com/OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr), licença MIT',
          },
        ],
        note: 'Versão analisada: 1.10.4, publicada em 22 de outubro de 2026 segundo a [página de Releases do GitHub](https://github.com/OpenWhispr/openwhispr/releases/latest), que lista todos os instaladores de desktop; o app de iPhone e iPad está na versão 1.2.4 na sua página da App Store e aparecia como gratuito nas lojas dos EUA, Alemanha, França, Espanha, Brasil, Japão e Coreia. Também existe um cask do Homebrew mantido pela comunidade (`brew install --cask openwhispr`). Os planos pagos são tratados em Planos.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'Requisitos',
        content: [
          '**A documentação cita macOS 12, Windows 10 e um Linux de 64 bits como mínimo; a parte exigente é rodar os modelos de voz no seu próprio dispositivo.**',
        ],
        columns: ['Item', 'O que dizem as fontes'],
        rows: [
          {
            Item: 'Sistema operacional',
            'O que dizem as fontes': 'macOS 12 ou posterior (Apple silicon ou Intel), Windows 10 ou posterior (64 bits, x64), Linux de 64 bits x86-64 com PulseAudio ou PipeWire; sem versões ARM para Windows ou Linux',
          },
          {
            Item: 'Modelos de voz',
            'O que dizem as fontes': 'Baixados no app: Orukeet cerca de 672 MB (o padrão recomendado), Whisper de cerca de 75 MB (tiny) a cerca de 3 GB (large), Parakeet cerca de 631 a 680 MB, Cohere Transcribe cerca de 1.7 GB',
          },
          {
            Item: 'Hardware',
            'O que dizem as fontes': 'O Whisper local pode usar Metal no Apple silicon, CUDA em GPUs NVIDIA ou Vulkan em GPUs AMD e Intel, e volta para a CPU se o ambiente da GPU falhar; nenhum valor de RAM é informado',
          },
          {
            Item: 'Permissões',
            'O que dizem as fontes': 'Acesso ao microfone e de acessibilidade para colar texto; macOS 14.2 ou posterior e a permissão “Gravação de áudio do sistema” para captar o outro lado de uma reunião',
          },
          {
            Item: 'Macs Intel',
            'O que dizem as fontes': 'A identificação de falantes ao vivo e as impressões de voz não estão disponíveis; as reuniões continuam sendo gravadas e transcritas, e a busca de notas recorre a palavras-chave (README)',
          },
          {
            Item: 'Internet',
            'O que dizem as fontes': 'Necessária para baixar modelos e para os recursos de nuvem; a transcrição local funciona offline depois que o modelo está no disco',
          },
        ],
        note: 'Os tamanhos de modelo são os valores do guia de modelos locais da documentação; a lista no app pode ser diferente.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Tudo o que segue vem do site, da documentação ou do README; nada foi testado de forma independente.**',
        ],
        items: [
          '**Ditado em qualquer lugar.** Um atalho global grava, transcreve e cola no app em foco; um atalho dedicado dita em um idioma e cola em outro.',
          '**Dois motores locais.** O Whisper roda pelo whisper.cpp, enquanto as famílias Orukeet, Parakeet e Nemotron rodam pelo sherpa-onnx; os modelos Nemotron de streaming podem mostrar texto parcial enquanto você fala.',
          '**Reuniões.** O app detecta chamadas do Zoom, Teams e FaceTime, rotula os falantes no dispositivo e pode vincular eventos do Google, Microsoft ou Apple Calendar às notas.',
          '**Notas e importação.** As notas têm pastas e um modelo de embeddings local para a busca semântica; arquivos de áudio e vídeo, ou uma URL colada do YouTube ou de áudio, podem ser transcritos.',
          '**Assistente e integrações.** Um atalho de assistente de voz envia o que você diz a um modelo que você escolhe, na nuvem ou local; uma API pública e um servidor MCP conectam outras ferramentas.',
        ],
        note: 'As configurações do desktop guardam uma escolha de motor separada para ditado, gravação de notas e envio de áudio.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'Planos',
        content: [
          '**O ditado local é gratuito e ilimitado em todos os planos; os planos pagos acrescentam transcrição na nuvem, mais horas de reuniões e recursos de equipe.** Todos os valores são os preços em dólares americanos da página de preços.',
        ],
        columns: ['Plano', 'O que a página de preços lista'],
        rows: [
          {
            Plano: 'Free',
            'O que a página de preços lista': 'US$ 0: modelos locais ilimitados, transcrição na nuvem ilimitada com suas próprias chaves de API, 2.000 palavras por semana de transcrição no OpenWhispr Cloud, 5 horas de gravações de reuniões por mês',
          },
          {
            Plano: 'Pro',
            'O que a página de preços lista': 'US$ 80 por usuário por ano com cobrança anual (US$ 6.67 por mês exibidos): transcrição na nuvem ilimitada, modo agente, 20 horas de reuniões por mês, sincronização, acesso a API e MCP, app de iPhone e iPad',
          },
          {
            Plano: 'Business',
            'O que a página de preços lista': 'US$ 160 por usuário por ano (US$ 13.33 por mês exibidos): tudo do Pro mais gravações de reuniões ilimitadas, chat sobre os seus dados e suporte prioritário',
          },
          {
            Plano: 'Enterprise',
            'O que a página de preços lista': 'Sob consulta: SSO, SAML e SCIM, logs de auditoria, controles de retenção, suporte dedicado',
          },
        ],
        note: 'Valores exibidos em 24 de outubro de 2026; nenhuma outra moeda nem preço regional foi verificado, e os impostos não estão incluídos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A política de privacidade, atualizada pela última vez em 12 de outubro de 2026, descreve três modos de transcrição no desktop: processamento local, em que nenhum áudio é transmitido para lugar nenhum; a sua própria chave de API, em que o áudio vai direto ao provedor que você escolheu; e o OpenWhispr Cloud, em que o áudio é enviado à sua API ou a um provedor de voz para texto, processado em tempo real e não armazenado pelo OpenWhispr.** Registros de uso da nuvem (contagem de palavras, provedor, modelo, duração) são mantidos para a cobrança, e a política diz que seus dados não são usados para treinar modelos. O texto transcrito fica em um banco SQLite local, e o app de desktop guarda o áudio do ditado no seu dispositivo por 30 dias por padrão (até 90, ou desativado).',
          'O backup na nuvem vem desativado por padrão no desktop e ativado por padrão para os planos pagos no app de celular. As notas guardadas na nuvem do OpenWhispr são enviadas à OpenAI para indexação da busca, e as buscas na web feitas pelo assistente passam pelo provedor Exa. O README diz “no telemetry”, enquanto a política lista SDKs de análise, atribuição e compras no app de celular (AppsFlyer, RevenueCat, Superwall); a análise de uso pode ser desativada.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do desenvolvedor, não resultados de auditoria. O código é público sob a licença MIT, mas a PromptQuorum não o leu nem inspecionou o tráfego de rede do app.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Precisão e velocidade.** A PromptQuorum não mediu taxas de erro de palavras, latência nem cobertura de idiomas em nenhum modelo.',
          '**Selos de conformidade.** O site mostra selos de HIPAA, ISO 27001, SOC 2 Type II e GDPR e liga a um Trust Center; não lemos nenhum relatório de auditoria nem certificado.',
          '**Número de downloads.** O site diz “Downloaded by 150k+ users”; não temos como conferir.',
          '**Quais recursos do iPhone exigem um plano.** A página da App Store oferece um download gratuito, enquanto a página de preços lista o app de celular nos planos pagos.',
          '**Assinatura dos instaladores.** Não verificamos se os instaladores de macOS e Windows são notarizados ou assinados com certificado de desenvolvedor.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Handy](/pt/power-local-llm/handy-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Ferramenta de ditado gratuita mais enxuta: sem notas de reuniões e sem plano de nuvem pago',
          },
          {
            App: '[MacWhisper](/pt/power-local-llm/macwhisper-review)',
            Plataformas: 'macOS',
            'Preço / licença': 'Freemium / Proprietária',
            'Diferença principal': 'App só para Mac com compra única para transcrição local com Whisper e Parakeet; código fechado',
          },
          {
            App: '[AquaVoice](/pt/power-local-llm/aquavoice-review)',
            Plataformas: 'macOS, Windows, iOS, Android',
            'Preço / licença': 'Freemium / Proprietária',
            'Diferença principal': 'Serviço de ditado na nuvem que digita no app ativo, portanto não é uma opção offline',
          },
        ],
        note: 'São apps da mesma categoria do diretório da PromptQuorum; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Com qual modelo local devo começar?',
            a: 'A documentação recomenda o Orukeet, um ajuste fino multilíngue do Parakeet feito pela Oruk, e uma instalação nova cai nele quando você escolhe o caminho local; para o Whisper, recomenda o tamanho base. Ela chama o Cohere Transcribe de seu modelo offline mais preciso, com taxa média de erro de palavras de 5.42% em 14 idiomas, um número do projeto que não verificamos.',
          },
          {
            q: 'Ele aceita outros idiomas além do inglês?',
            a: 'O site afirma mais de 100 idiomas com detecção automática, mas a cobertura local depende do modelo: a documentação lista 25 idiomas para o Parakeet v3, 15 para um modelo Nemotron e apenas inglês para outros dois. Não verificamos o número de mais de 100.',
          },
          {
            q: 'Posso usar minhas próprias chaves de API?',
            a: 'Sim no desktop: o plano Free lista transcrição na nuvem ilimitada com suas próprias chaves de API, e a política de privacidade diz que o áudio vai então direto ao seu provedor, sem passar pelo OpenWhispr. A página do iPhone também menciona conectar o seu próprio provedor.',
          },
          {
            q: 'Existe linha de comando ou uma API para desenvolvedores?',
            a: 'A página de preços lista uma interface de linha de comando que funciona localmente no plano Free e local e remotamente nos planos pagos, além de acesso a API e MCP a partir do Pro; a documentação liga a uma visão geral da API.',
          },
          {
            q: 'Com que frequência ele é atualizado?',
            a: 'A versão 1.10.3 foi publicada em 12 de outubro de 2026 e a 1.10.4 em 22 de outubro de 2026, e o repositório mantém um registro de mudanças. Com lançamentos tão frequentes, configurações e limites dos planos podem mudar; confira a página de preços antes de confiar em um valor daqui.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O OpenWhispr é um jeito ativo e com licença MIT de ditar em qualquer app e gravar reuniões no macOS, Windows, Linux e iPhone, com modelos de voz que você pode rodar no seu próprio dispositivo ou trocar por um provedor na nuvem. A privacidade dele é tão forte quanto o modo escolhido, os planos pagos e o app de celular trazem serviços de nuvem e análises que a linha “no telemetry” do README não menciona, e nem precisão, nem velocidade, nem os selos de conformidade puderam ser verificados aqui. Ele serve para quem quer um só app para ditado e notas de reuniões e fica nos modelos locais quando a privacidade importa; quem precisa de precisão comprovada ou de conformidade certificada deve testá-lo e pedir antes os relatórios de auditoria.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do OpenWhispr](https://openwhispr.com) — descrição, plataformas e selos de conformidade.',
          '[Preços do OpenWhispr](https://openwhispr.com/pricing) — preços e limites dos planos.',
          '[Política de privacidade do OpenWhispr](https://openwhispr.com/privacy) — tratamento de dados, retenção e subprocessadores, atualizada em 12 de outubro de 2026.',
          '[OpenWhispr no GitHub](https://github.com/OpenWhispr/openwhispr) — README, licença MIT e stack técnica.',
          '[Releases do OpenWhispr](https://github.com/OpenWhispr/openwhispr/releases) — versão 1.10.4 e arquivos de instalação.',
          '[Registro de mudanças do OpenWhispr](https://github.com/OpenWhispr/openwhispr/blob/main/CHANGELOG.md) — histórico de versões.',
          '[Documentação do OpenWhispr: modelos locais](https://docs.openwhispr.com/guides/local-models) — motores, tamanhos de modelo e aceleração por GPU.',
          '[Documentação do OpenWhispr: requisitos do sistema](https://docs.openwhispr.com/platform/system-requirements) — sistemas operacionais e permissões.',
          '[OpenWhispr na App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420) — página para iPhone e iPad, versão 1.2.4.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Handy](/pt/power-local-llm/handy-review) — um app de ditado gratuito, com licença MIT e apertar para falar, que roda no seu próprio computador.',
          '[Análise do MacWhisper](/pt/power-local-llm/macwhisper-review) — um app de Mac para transcrição local com Whisper e Parakeet.',
          '[Análise do Whisper.cpp](/pt/power-local-llm/whisper-cpp-review) — o port em C++ do Whisper em que muitas ferramentas locais de ditado se baseiam.',
          '[Ferramentas de voz e áudio comparadas](/pt/power-local-llm/local-llm-voice-audio-compared) — a comparação de categoria a que esta análise pertence.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
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
    heroImage: '/images/openwhispr-review-hero-ar.webp',
    title: 'مراجعة OpenWhispr: تطبيق مفتوح المصدر للإملاء الصوتي وملاحظات الاجتماعات',
    seoTitle: 'مراجعة OpenWhispr: إملاء صوتي مفتوح وملاحظات اجتماعات',
    intro: 'OpenWhispr تطبيق مفتوح المصدر لتحويل الكلام إلى نص يعمل على macOS وWindows وLinux وiPhone وiPad: تضغط اختصارًا وتتحدث، فيُلصق النص حيث يوجد المؤشر، مع نسخ اجتماعات وملاحظات اختياريين. تختار بين نماذج كلام تعمل على جهازك ومعالجة سحابية، وهذا الاختيار يحدد وجهة صوتك. تستند هذه المراجعة إلى الموقع وسياسة الخصوصية والتوثيق ومستودع GitHub التي راجعناها في 24 أكتوبر 2026، ولم تختبر PromptQuorum التطبيق عمليًا.',
    metaDescription: 'مراجعة OpenWhispr: تطبيق بترخيص MIT للإملاء وملاحظات الاجتماعات على Mac وWindows وLinux وiPhone بنسخ محلي أو سحابي. لم تختبره PromptQuorum عمليًا.',
    twitterDescription: 'مراجعة OpenWhispr: إملاء صوتي وملاحظات اجتماعات مفتوحة المصدر بنماذج كلام محلية أو سحابية. ما تؤكده المصادر عن الخطط والخصوصية وملفات التثبيت، وما لا تؤكده.',
    audience: 'الكتّاب والمطورون والمهنيون الذين يريدون إملاءً صوتيًا وملاحظات اجتماعات ويحتاجون إلى معرفة ما تؤكده المصادر، وإلى أين يذهب الصوت في كل وضع، وما تضيفه الخطط المدفوعة.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة OpenWhispr',
    targetKeywords: [
      'مراجعة openwhispr',
      'openwhispr',
      'تطبيق إملاء مفتوح المصدر',
      'بديل wispr flow مفتوح المصدر',
      'تحويل الكلام إلى نص محلي mac windows linux',
      'تطبيق نسخ اجتماعات محلي',
      'openwhispr.com',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**OpenWhispr (الإصدار 1.10.4) تطبيق لتحويل الكلام إلى نص بترخيص MIT يلصق إملاءك في أي تطبيق، وبقاء صوتك على جهازك من عدمه يتوقف على اختيارك نموذج كلام محليًا أو سحابيًا.** ويضيف نسخ الاجتماعات والملاحظات ومساعد ذكاء اصطناعي، وكل عبارة هنا مصدرها موقع الجهة المطورة وسياسة الخصوصية والتوثيق ومستودع GitHub.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي OpenWhispr صوتي على حاسوبي؟',
        answer: 'في الوضع المحلي فقط: تقول سياسة الخصوصية إنه عندما يعمل تحويل الكلام إلى نص على جهازك لا يُرسل أي صوت إلى أي جهة. أما مع OpenWhispr Cloud أو مفتاح API الخاص بك فيُرسل الصوت إلى مزوّد نسخ لمعالجته.',
        bullets: [
          'اختصار عام يملي في أي تطبيق، واختصار ثانٍ يترجم أثناء حديثك.',
          'اكتشاف مكالمات Zoom وTeams وFaceTime، مع وسوم المتحدثين المحسوبة على الجهاز.',
          'ملاحظات بمجلدات وبحث دلالي محلي، إضافة إلى استيراد الصوت والفيديو.',
          'اختصار لمساعد صوتي يرسل ما تقوله إلى نموذج ذكاء اصطناعي تختاره.',
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
        label: 'ما هو OpenWhispr؟',
        anchor: 'what-is-openwhispr',
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
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'الخطط',
        anchor: 'plans',
      },
      {
        label: 'تدفق البيانات والخصوصية',
        anchor: 'privacy',
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
            text: 'OpenWhispr تطبيق مفتوح المصدر لسطح المكتب والجوال يحوّل الكلام إلى نص بنماذج على الجهاز أو سحابية، ويلصقه في التطبيق النشط، ويستطيع تسجيل الاجتماعات ووسم المتحدثين.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله لوحة مفاتيح صوتية للحاسوب كله، مع دفتر ملاحظات يستطيع أن يستمع إلى اجتماعاتك أيضًا.',
          },
        ],
        items: [
          'الصيانة: آخر تغيير على الفرع الرئيسي كان في 23 أكتوبر 2026 وصدر الإصدار 1.10.4 في 22 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.',
          'التكلفة: الإملاء المحلي مجاني وبلا حد؛ أما ميزات السحابة والفرق فتقع ضمن خطط مدفوعة.',
          'المحركات: يشغّل whisper.cpp نماذج Whisper ويشغّل sherpa-onnx بقية النماذج المحلية.',
          'المنصات: ملفات تثبيت لسطح المكتب على macOS وWindows وLinux، إضافة إلى تطبيق مجاني لـ iPhone وiPad.',
          'الجهة المشغّلة: Gizmo Labs Inc. وهي شركة في ولاية ديلاوير؛ والشيفرة مفتوحة بترخيص MIT.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [openwhispr.com](https://openwhispr.com) وسياسة الخصوصية والتوثيق ومستودع GitHub التي راجعناها في 24 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تقِس أداءه، لذلك لا تُقيَّم الدقة ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-openwhispr',
        title: 'ما هو OpenWhispr؟',
        content: [
          '**OpenWhispr تطبيق لتحويل الكلام إلى نص يسجّل ما دمت تضغط الاختصار، ثم ينسخ الصوت نصًا ويلصقه في التطبيق الذي عليه التركيز.** يصفه ملف README بأنه «البديل المفتوح المصدر والمجاني لـ WisprFlow وGranola»، ويضيف الموقع ملاحظات الاجتماعات ومساعد ذكاء اصطناعي ودعم أكثر من 100 لغة. أُنشئ المستودع في يونيو 2025.',
          '**ينشر التطبيق شركة Gizmo Labs Inc. وهي شركة في ولاية ديلاوير تدير أيضًا خدمة OpenWhispr Cloud المدفوعة.** تطبيق سطح المكتب مبني بـ Electron، أما تطبيق iPhone وiPad فمشروع Expo منفصل داخل المستودع نفسه.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يتوفر OpenWhispr للتنزيل على macOS وWindows وLinux، مع تطبيق لـ iPhone وiPad على App Store؛ وتقول الوثائق إنه لا توجد نسخة ويب ولا إضافة متصفح.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          {
            'الخيار': 'macOS',
            'مصدر الحصول عليه': '‏.dmg ‏(Apple silicon وIntel): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            'الخيار': 'Windows',
            'مصدر الحصول عليه': 'مثبّت ‏.exe ‏(x64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            'الخيار': 'Linux',
            'مصدر الحصول عليه': '‏.AppImage و.deb و.rpm و.tar.gz ‏(x86_64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            'الخيار': 'iPhone وiPad',
            'مصدر الحصول عليه': '[App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420)، يتطلب iOS 17.0 أو أحدث',
          },
          {
            'الخيار': 'الموقع',
            'مصدر الحصول عليه': '[openwhispr.com](https://openwhispr.com)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'مصدر الحصول عليه': '[openwhispr.com/privacy](https://openwhispr.com/privacy)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': '[github.com/OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr)، ترخيص MIT',
          },
        ],
        note: 'الإصدار الذي راجعناه: 1.10.4، نُشر في 22 أكتوبر 2026 بحسب [صفحة Releases على GitHub](https://github.com/OpenWhispr/openwhispr/releases/latest) التي تسرد كل مثبّتات سطح المكتب؛ وتطبيق iPhone وiPad هو الإصدار 1.2.4 في صفحته على App Store وظهر مجانيًا في متاجر الولايات المتحدة وألمانيا وفرنسا وإسبانيا والبرازيل واليابان وكوريا. وتوجد أيضًا حزمة Homebrew cask تصونها المجتمع (`brew install --cask openwhispr`). وتُعالَج الخطط المدفوعة في قسم الخطط.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: 'المتطلبات',
        content: [
          '**تذكر الوثائق macOS 12 وWindows 10 ونظام Linux بـ 64 بت حدًا أدنى؛ والجزء المرهق هو تشغيل نماذج الكلام على جهازك.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          {
            'البند': 'نظام التشغيل',
            'ما تقوله المصادر': 'macOS 12 أو أحدث (Apple silicon أو Intel)، وWindows 10 أو أحدث (64 بت x64)، وLinux بـ 64 بت x86-64 مع PulseAudio أو PipeWire؛ ولا توجد إصدارات ARM لـ Windows أو Linux',
          },
          {
            'البند': 'نماذج الكلام',
            'ما تقوله المصادر': 'تُنزَّل داخل التطبيق: Orukeet نحو 672 MB (الافتراضي الموصى به)، وWhisper من نحو 75 MB (tiny) إلى نحو 3 GB (large)، وParakeet نحو 631 إلى 680 MB، وCohere Transcribe نحو 1.7 GB',
          },
          {
            'البند': 'العتاد',
            'ما تقوله المصادر': 'يمكن لـ Whisper المحلي استخدام Metal على Apple silicon أو CUDA على بطاقات NVIDIA أو Vulkan على بطاقات AMD وIntel، ويعود إلى المعالج إذا فشلت بيئة تشغيل البطاقة؛ ولا يُذكر رقم للذاكرة RAM',
          },
          {
            'البند': 'الأذونات',
            'ما تقوله المصادر': 'الوصول إلى الميكروفون وإمكانية الوصول لِلصق النص؛ وmacOS 14.2 أو أحدث مع إذن «تسجيل صوت النظام» لالتقاط الطرف الآخر من الاجتماع',
          },
          {
            'البند': 'أجهزة Mac بمعالج Intel',
            'ما تقوله المصادر': 'التعرف المباشر على المتحدثين وبصمات الصوت غير متاحَين؛ وتستمر الاجتماعات في التسجيل والنسخ، ويعود بحث الملاحظات إلى الكلمات المفتاحية (README)',
          },
          {
            'البند': 'الإنترنت',
            'ما تقوله المصادر': 'مطلوب لتنزيل النماذج وللميزات السحابية؛ ويعمل النسخ المحلي دون اتصال بعد أن يصبح النموذج على القرص',
          },
        ],
        note: 'أحجام النماذج هي الأرقام الواردة في دليل النماذج المحلية في الوثائق؛ وقد تختلف القائمة داخل التطبيق.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل ما يلي مأخوذ من الموقع أو الوثائق أو ملف README؛ ولم يُختبر شيء منه بشكل مستقل.**',
        ],
        items: [
          '**إملاء في كل مكان.** اختصار عام يسجّل وينسخ ويلصق في التطبيق الذي عليه التركيز؛ واختصار مخصص يملي بلغة ويلصق بلغة أخرى.',
          '**محركان محليان.** يعمل Whisper عبر whisper.cpp، بينما تعمل عائلات Orukeet وParakeet وNemotron عبر sherpa-onnx؛ ويمكن لنماذج Nemotron المتدفقة عرض نص جزئي أثناء حديثك.',
          '**الاجتماعات.** يكتشف التطبيق مكالمات Zoom وTeams وFaceTime، ويضع وسوم المتحدثين على الجهاز، ويستطيع ربط أحداث تقويم Google أو Microsoft أو Apple بالملاحظات.',
          '**الملاحظات والاستيراد.** للملاحظات مجلدات ونموذج تضمين محلي للبحث الدلالي؛ ويمكن نسخ ملفات الصوت والفيديو أو رابط YouTube أو رابط صوتي ملصق.',
          '**المساعد والتكاملات.** اختصار المساعد الصوتي يرسل ما تقوله إلى نموذج تختاره، سحابي أو محلي؛ وتربط واجهة API عامة وخادم MCP أدوات أخرى.',
        ],
        note: 'تحتفظ إعدادات سطح المكتب باختيار محرك منفصل للإملاء وتسجيل الملاحظات ورفع الصوت.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: 'الخطط',
        content: [
          '**الإملاء المحلي مجاني وبلا حد في كل الخطط؛ وتضيف الخطط المدفوعة النسخ السحابي وساعات اجتماعات أكثر وميزات للفرق.** كل الأرقام هي أسعار الدولار الأمريكي في صفحة الأسعار.',
        ],
        columns: ['الخطة', 'ما تذكره صفحة الأسعار'],
        rows: [
          {
            'الخطة': 'Free',
            'ما تذكره صفحة الأسعار': '0 $: نماذج محلية بلا حد، ونسخ سحابي بلا حد بمفاتيح API الخاصة بك، و2,000 كلمة أسبوعيًا من نسخ OpenWhispr Cloud، و5 ساعات من تسجيلات الاجتماعات شهريًا',
          },
          {
            'الخطة': 'Pro',
            'ما تذكره صفحة الأسعار': '80 $ لكل مستخدم سنويًا بفوترة سنوية (يظهر 6.67 $ شهريًا): نسخ سحابي بلا حد، ووضع الوكيل، و20 ساعة اجتماعات شهريًا، ومزامنة، ووصول إلى API وMCP، وتطبيق iPhone وiPad',
          },
          {
            'الخطة': 'Business',
            'ما تذكره صفحة الأسعار': '160 $ لكل مستخدم سنويًا (يظهر 13.33 $ شهريًا): كل ما في Pro إضافة إلى تسجيلات اجتماعات بلا حد، ومحادثة حول بياناتك، ودعم ذي أولوية',
          },
          {
            'الخطة': 'Enterprise',
            'ما تذكره صفحة الأسعار': 'حسب الاتفاق: SSO وSAML وSCIM، وسجلات تدقيق، وضوابط احتفاظ، ودعم مخصص',
          },
        ],
        note: 'الأرقام كما ظهرت في 24 أكتوبر 2026؛ ولم نتحقق من أي عملة أخرى أو أسعار إقليمية، والضرائب غير مشمولة.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تصف سياسة الخصوصية، المحدّثة آخر مرة في 12 أكتوبر 2026، ثلاثة أوضاع للنسخ على سطح المكتب: المعالجة المحلية التي لا يُرسل فيها أي صوت إلى أي جهة؛ ومفتاح API الخاص بك الذي يذهب فيه الصوت مباشرة إلى المزوّد الذي اخترته؛ وOpenWhispr Cloud الذي يُرسل فيه الصوت إلى واجهته أو إلى مزوّد لتحويل الكلام إلى نص، ويُعالَج في الوقت الفعلي ولا يخزنه OpenWhispr.** وتُحفظ سجلات استخدام السحابة (عدد الكلمات والمزوّد والنموذج والمدة) لأغراض الفوترة، وتقول السياسة إن بياناتك لا تُستخدم لتدريب النماذج. ويُحفظ النص المنسوخ في قاعدة بيانات SQLite محلية، ويُبقي تطبيق سطح المكتب صوت الإملاء على جهازك 30 يومًا افتراضيًا (حتى 90 يومًا أو إيقافه).',
          'النسخ الاحتياطي السحابي متوقف افتراضيًا على سطح المكتب ومفعّل افتراضيًا للخطط المدفوعة في تطبيق الجوال. وتُرسل الملاحظات المخزنة في سحابة OpenWhispr إلى OpenAI لفهرسة البحث، وتمر عمليات البحث على الويب التي يجريها المساعد عبر مزوّد البحث Exa. يقول README عبارة «no telemetry»، بينما تسرد السياسة حزم SDK للتحليلات والإسناد والمشتريات في تطبيق الجوال (AppsFlyer وRevenueCat وSuperwall)، ويمكن إيقاف تحليلات الاستخدام.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات من الجهة المطورة وليست نتائج تدقيق. الشيفرة عامة بترخيص MIT، لكن PromptQuorum لم تقرأها ولم تفحص حركة الشبكة الخاصة بالتطبيق.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الدقة والسرعة.** لم تقِس PromptQuorum معدلات أخطاء الكلمات ولا زمن الاستجابة ولا تغطية اللغات لأي نموذج.',
          '**شارات الامتثال.** يعرض الموقع شارات HIPAA وISO 27001 وSOC 2 Type II وGDPR ويربط بمركز ثقة؛ ولم نقرأ أي تقرير تدقيق أو شهادة.',
          '**رقم التنزيلات.** يقول الموقع «Downloaded by 150k+ users»؛ ولا سبيل لنا إلى التحقق من ذلك.',
          '**أي ميزات في iPhone تحتاج إلى خطة.** تعرض صفحة App Store تنزيلًا مجانيًا، بينما تدرج صفحة الأسعار تطبيق الجوال ضمن الخطط المدفوعة.',
          '**توقيع المثبّتات.** لم نتحقق مما إذا كانت مثبّتات macOS وWindows موثّقة أو موقّعة بشهادة مطوّر.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          {
            'التطبيق': '[Handy](/ar/power-local-llm/handy-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'أداة إملاء مجانية أضيق نطاقًا: بلا ملاحظات اجتماعات وبلا خطة سحابية مدفوعة',
          },
          {
            'التطبيق': '[MacWhisper](/ar/power-local-llm/macwhisper-review)',
            'المنصات': 'macOS',
            'السعر / الرخصة': 'مجاني جزئيًا / مملوك',
            'الفرق الأبرز': 'تطبيق لنظام Mac فقط بشراء لمرة واحدة للنسخ المحلي بـ Whisper وParakeet؛ مغلق المصدر',
          },
          {
            'التطبيق': '[AquaVoice](/ar/power-local-llm/aquavoice-review)',
            'المنصات': 'macOS وWindows وiOS وAndroid',
            'السعر / الرخصة': 'مجاني جزئيًا / مملوك',
            'الفرق الأبرز': 'خدمة إملاء سحابية تكتب في التطبيق النشط، لذلك ليست خيارًا يعمل دون اتصال',
          },
        ],
        note: 'هذه تطبيقات من الفئة نفسها في دليل PromptQuorum؛ تحقق من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'بأي نموذج محلي أبدأ؟',
            a: 'توصي الوثائق بـ Orukeet، وهو ضبط دقيق متعدد اللغات لـ Parakeet من Oruk، وتستقر عليه أي تثبيتة جديدة عند اختيار المسار المحلي؛ وتوصي بحجم base لـ Whisper. وتصف Cohere Transcribe بأنه أدق نموذج دون اتصال لديها بمعدل خطأ كلمات متوسط 5.42% عبر 14 لغة، وهو رقم من المشروع لم نتحقق منه.',
          },
          {
            q: 'هل يدعم لغات غير الإنجليزية؟',
            a: 'يزعم الموقع دعم أكثر من 100 لغة مع الكشف التلقائي، لكن التغطية المحلية تتوقف على النموذج: تذكر الوثائق 25 لغة لـ Parakeet v3 و15 لغة لنموذج Nemotron واحد، والإنجليزية فقط لنموذجين آخرين. ولم نتحقق من رقم أكثر من 100.',
          },
          {
            q: 'هل يمكنني استخدام مفاتيح API الخاصة بي؟',
            a: 'نعم على سطح المكتب: تذكر الخطة Free نسخًا سحابيًا بلا حد بمفاتيح API الخاصة بك، وتقول سياسة الخصوصية إن الصوت يذهب حينئذٍ مباشرة إلى مزوّدك دون المرور عبر OpenWhispr. وتشير صفحة iPhone أيضًا إلى إمكانية ربط مزوّدك الخاص.',
          },
          {
            q: 'هل توجد واجهة سطر أوامر أو API للمطورين؟',
            a: 'تذكر صفحة الأسعار واجهة سطر أوامر تعمل محليًا في الخطة Free ومحليًا وعن بُعد في الخطط المدفوعة، ووصولًا إلى API وMCP من Pro فما فوق؛ وتربط الوثائق بنظرة عامة على API.',
          },
          {
            q: 'كم مرة يُحدَّث؟',
            a: 'نُشر الإصدار 1.10.3 في 12 أكتوبر 2026 والإصدار 1.10.4 في 22 أكتوبر 2026، ويحتفظ المستودع بسجل تغييرات. ومع إصدارات بهذا التواتر قد تتغير الإعدادات وحدود الخطط، فراجع صفحة الأسعار قبل الاعتماد على رقم هنا.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'OpenWhispr طريقة نشطة التحديث وبترخيص MIT للإملاء في أي تطبيق وتسجيل الاجتماعات على macOS وWindows وLinux وiPhone، بنماذج كلام يمكنك تشغيلها على جهازك أو استبدالها بمزوّد سحابي. وخصوصيته بقدر قوة الوضع الذي تختاره، وتجلب الخطط المدفوعة وتطبيق الجوال خدمات سحابية وتحليلات لا تذكرها عبارة «no telemetry» في README، ولم نتمكن هنا من التحقق من الدقة ولا السرعة ولا شارات الامتثال. يناسب من يريد تطبيقًا واحدًا للإملاء وملاحظات الاجتماعات ويبقى على النماذج المحلية حين تهمه الخصوصية؛ ومن يحتاج إلى دقة مثبتة أو امتثال معتمد فعليه أن يجرّبه وأن يطلب تقارير التدقيق أولًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع OpenWhispr](https://openwhispr.com) — الوصف والمنصات وشارات الامتثال، روجع في 24 أكتوبر 2026.',
          '[أسعار OpenWhispr](https://openwhispr.com/pricing) — أسعار الخطط وحدودها، روجعت في 24 أكتوبر 2026.',
          '[سياسة خصوصية OpenWhispr](https://openwhispr.com/privacy) — معالجة البيانات والاحتفاظ بها والمعالجون الفرعيون، حُدّثت في 12 أكتوبر 2026.',
          '[OpenWhispr على GitHub](https://github.com/OpenWhispr/openwhispr) — README وترخيص MIT والحزمة التقنية، روجع في 24 أكتوبر 2026.',
          '[إصدارات OpenWhispr](https://github.com/OpenWhispr/openwhispr/releases) — الإصدار 1.10.4 وملفات التثبيت، روجعت في 24 أكتوبر 2026.',
          '[سجل تغييرات OpenWhispr](https://github.com/OpenWhispr/openwhispr/blob/main/CHANGELOG.md) — تاريخ الإصدارات، روجع في 24 أكتوبر 2026.',
          '[وثائق OpenWhispr: النماذج المحلية](https://docs.openwhispr.com/guides/local-models) — المحركات وأحجام النماذج وتسريع GPU، روجعت في 24 أكتوبر 2026.',
          '[وثائق OpenWhispr: متطلبات النظام](https://docs.openwhispr.com/platform/system-requirements) — أنظمة التشغيل والأذونات، روجعت في 24 أكتوبر 2026.',
          '[OpenWhispr على App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420) — صفحة iPhone وiPad، الإصدار 1.2.4، روجعت في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Handy](/ar/power-local-llm/handy-review) — تطبيق إملاء مجاني بترخيص MIT يعمل بالضغط للتحدث على حاسوبك.',
          '[مراجعة MacWhisper](/ar/power-local-llm/macwhisper-review) — تطبيق Mac للنسخ المحلي بـ Whisper وParakeet.',
          '[مراجعة Whisper.cpp](/ar/power-local-llm/whisper-cpp-review) — نسخة C++ من Whisper تعتمد عليها أدوات إملاء محلية كثيرة.',
          '[مقارنة أدوات الصوت والكلام](/ar/power-local-llm/local-llm-voice-audio-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
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
    heroImage: '/images/openwhispr-review-hero-zh.webp',
    title: 'OpenWhispr 评测：开源语音听写与会议笔记应用',
    seoTitle: 'OpenWhispr 评测：支持本地与云端的开源语音听写和会议笔记',
    intro: 'OpenWhispr 是开源语音转文字应用，支持 macOS、Windows、Linux、iPhone 和 iPad：按下快捷键说话，文字会粘贴到光标所在处，还可选用会议转写和笔记。你可以在本机运行的语音模型和云端处理之间选择，这个选择决定了你的语音去向。本评测基于官网、隐私政策、文档和 GitHub 仓库（2026年10月24日查阅）；PromptQuorum 没有实际测试过这款应用。',
    metaDescription: 'OpenWhispr 评测：MIT 许可的听写与会议笔记应用，支持 Mac、Windows、Linux 和 iPhone，可选本地或云端语音转文字。未经实测，来源已核对。',
    twitterDescription: 'OpenWhispr 评测：支持本地或云端语音模型的开源听写与会议笔记应用。来源对套餐、隐私和安装包能确认什么、不能确认什么。',
    audience: '想用语音听写和会议笔记的写作者、开发者和职场人士，需要了解来源能确认什么、各模式下音频去向何处，以及付费套餐增加了什么。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWhispr 评测',
    targetKeywords: [
      'openwhispr 评测',
      'openwhispr',
      '开源语音听写应用',
      'wispr flow 开源替代',
      '本地语音转文字 mac windows linux',
      '本地会议转写应用',
      'openwhispr.com',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**OpenWhispr（版本 1.10.4）是一款 MIT 许可的语音转文字应用，可把听写内容粘贴到任何应用中；你的语音是否留在设备上，取决于选择本地还是云端语音模型。** 它还提供会议转写、笔记和 AI 助手，本文所有说法均来自开发方的官网、隐私政策、文档和 GitHub 仓库。',
    quickAnswerTop: {
      zh: {
        question: 'OpenWhispr 会把我的语音留在本机吗？',
        answer: '只有在本地模式下才会：隐私政策称，语音转文字在你的设备上运行时，不会向任何地方传输音频。使用 OpenWhispr Cloud 或你自己的 API 密钥时，音频会发送给转写服务商处理。',
        bullets: [
          '全局快捷键可在任何应用中听写，另一个快捷键可边说边翻译。',
          '可检测 Zoom、Teams 和 FaceTime 通话，说话人标签在设备上生成。',
          '笔记支持文件夹和本地语义搜索，还可导入音频和视频。',
          '语音助手快捷键会把你说的话发送给你选定的 AI 模型。',
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
        label: 'OpenWhispr 是什么？',
        anchor: 'what-is-openwhispr',
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
        label: '来源已证实的功能',
        anchor: 'key-features',
      },
      {
        label: '套餐',
        anchor: 'plans',
      },
      {
        label: '数据流向与隐私',
        anchor: 'privacy',
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
            text: 'OpenWhispr 是一款开源的桌面和移动应用，用本机或云端模型把语音转成文字并粘贴到当前应用，还能录制会议并标注说话人。',
          },
          {
            type: 'plain-terms',
            text: '可以把它想成整台电脑通用的语音键盘，外加一个也能旁听会议的笔记本。',
          },
        ],
        items: [
          '维护情况：主分支最近一次更改在 2026年10月23日，版本 1.10.4 于 2026年10月22日发布，因此不适用停更警告。',
          '费用：本地听写免费且不限量；云端和团队功能在付费套餐中。',
          '引擎：Whisper 模型由 whisper.cpp 运行，其他本地模型由 sherpa-onnx 运行。',
          '平台：提供 macOS、Windows 和 Linux 桌面安装包，另有免费的 iPhone 和 iPad 应用。',
          '运营方：特拉华州公司 Gizmo Labs Inc.；代码以 MIT 许可开源。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 [openwhispr.com](https://openwhispr.com)、隐私政策、文档和 GitHub 仓库（2026年10月24日查阅）。PromptQuorum 没有安装或计时测试这款应用，因此未评估准确度和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-openwhispr',
        title: 'OpenWhispr 是什么？',
        content: [
          '**OpenWhispr 是一款跨平台语音转文字应用：按住快捷键时录音，转写音频，并把文字粘贴到当前获得焦点的应用中。** README 称它是“WisprFlow 和 Granola 的开源免费替代品”，官网还提到会议笔记、AI 助手和 100 多种语言。仓库创建于 2025年6月。',
          '**该应用由特拉华州公司 Gizmo Labs Inc. 发布，该公司同时运营付费的 OpenWhispr Cloud。** 桌面应用基于 Electron 构建；iPhone 和 iPad 应用是同一仓库中独立的 Expo 项目。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**OpenWhispr 提供 macOS、Windows 和 Linux 下载，iPhone 和 iPad 应用在 App Store 上架；文档称没有网页版，也没有浏览器扩展。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          {
            '选项': 'macOS',
            '获取方式': '.dmg（Apple silicon、Intel）：[openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            '选项': 'Windows',
            '获取方式': '.exe 安装程序（x64）：[openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            '选项': 'Linux',
            '获取方式': '.AppImage、.deb、.rpm、.tar.gz（x86_64）：[openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            '选项': 'iPhone 和 iPad',
            '获取方式': '[App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420)，需要 iOS 17.0 或更高版本',
          },
          {
            '选项': '官方网站',
            '获取方式': '[openwhispr.com](https://openwhispr.com)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '[openwhispr.com/privacy](https://openwhispr.com/privacy)',
          },
          {
            '选项': '源代码',
            '获取方式': '[github.com/OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr)，MIT 许可证',
          },
        ],
        note: '评测版本：1.10.4，据 [GitHub Releases 页面](https://github.com/OpenWhispr/openwhispr/releases/latest) 于 2026年10月22日发布，该页面列出了全部桌面安装包；iPhone 和 iPad 应用在 App Store 页面上为 1.2.4 版，在美国、德国、法国、西班牙、巴西、日本和韩国的商店中显示为免费。另有社区维护的 Homebrew cask（`brew install --cask openwhispr`）。付费套餐见“套餐”一节。',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '运行要求',
        content: [
          '**文档列出的最低要求是 macOS 12、Windows 10 和 64 位 Linux；真正吃资源的是在本机运行语音模型。**',
        ],
        columns: ['项目', '来源说明'],
        rows: [
          {
            '项目': '操作系统',
            '来源说明': 'macOS 12 或更高（Apple silicon 或 Intel），Windows 10 或更高（64 位 x64），带 PulseAudio 或 PipeWire 的 64 位 x86-64 Linux；Windows 和 Linux 没有 ARM 版本',
          },
          {
            '项目': '语音模型',
            '来源说明': '在应用内下载：Orukeet 约 672 MB（推荐默认），Whisper 从约 75 MB（tiny）到约 3 GB（large），Parakeet 约 631 至 680 MB，Cohere Transcribe 约 1.7 GB',
          },
          {
            '项目': '硬件',
            '来源说明': '本地 Whisper 可在 Apple silicon 上用 Metal、在 NVIDIA 显卡上用 CUDA、在 AMD 和 Intel 显卡上用 Vulkan；GPU 运行时失败时回退到 CPU；未给出内存数值',
          },
          {
            '项目': '权限',
            '来源说明': '粘贴文字需要麦克风和辅助功能权限；捕获会议对方的声音需要 macOS 14.2 或更高版本以及“系统音频录制”权限',
          },
          {
            '项目': 'Intel 版 Mac',
            '来源说明': '无法使用实时说话人识别和声纹识别；会议仍可录音和转写，笔记搜索退回到关键词匹配（README）',
          },
          {
            '项目': '网络',
            '来源说明': '下载模型和使用云端功能时需要；模型下载到磁盘后，本地转写可离线运行',
          },
        ],
        note: '模型大小取自文档中本地模型指南的数据；应用内列表可能有所不同。',
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: ['**以下内容均来自官网、文档或 README，均未经独立测试。**'],
        items: [
          '**随处听写。** 全局快捷键负责录音、转写并粘贴到当前焦点应用；专用快捷键可用一种语言说话、以另一种语言粘贴。',
          '**两种本地引擎。** Whisper 通过 whisper.cpp 运行，Orukeet、Parakeet 和 Nemotron 系列通过 sherpa-onnx 运行；流式的 Nemotron 模型可在说话时显示部分文字。',
          '**会议。** 应用可检测 Zoom、Teams 和 FaceTime 通话，在设备上标注说话人，并可把 Google、Microsoft 或 Apple 日历事件关联到笔记。',
          '**笔记与导入。** 笔记支持文件夹，并用本地嵌入模型做语义搜索；音频和视频文件，或粘贴的 YouTube 或音频链接，都可以转写。',
          '**助手与集成。** 语音助手快捷键把你说的话发送给你选定的云端或本地模型；公开 API 和 MCP 服务器可连接其他工具。',
        ],
        note: '桌面端设置为听写、笔记录音和音频上传分别保留各自的引擎选择。',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: '套餐',
        content: [
          '**本地听写在所有套餐中都免费且不限量；付费套餐增加云端转写、更多会议时长和团队功能。** 所有数字均为定价页上的美元价格。',
        ],
        columns: ['套餐', '定价页所列内容'],
        rows: [
          {
            '套餐': 'Free',
            '定价页所列内容': '$0：本地模型不限量，使用自己的 API 密钥时云端转写不限量，OpenWhispr Cloud 转写每周 2,000 词，会议录音每月 5 小时',
          },
          {
            '套餐': 'Pro',
            '定价页所列内容': '每用户每年 $80，按年计费（显示为每月 $6.67）：云端转写不限量、代理模式、每月 20 小时会议、同步、API 和 MCP 访问、iPhone 和 iPad 应用',
          },
          {
            '套餐': 'Business',
            '定价页所列内容': '每用户每年 $160（显示为每月 $13.33）：包含 Pro 的全部功能，另加不限量会议录音、基于你的数据的聊天和优先支持',
          },
          {
            '套餐': 'Enterprise',
            '定价页所列内容': '定制：SSO、SAML 和 SCIM、审计日志、保留期限控制、专属支持',
          },
        ],
        note: '数字为 2026年10月24日所见；未核对其他货币或地区价格，且不含税费。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**隐私政策（最近更新于 2026年10月12日）介绍了桌面端的三种转写模式：本地处理，不向任何地方传输音频；你自己的 API 密钥，音频直接发送给你选定的服务商；以及 OpenWhispr Cloud，音频发送到其 API 或语音转文字服务商，实时处理，OpenWhispr 不存储。** 云端使用记录（词数、服务商、模型、时长）为计费而保留，政策称你的数据不会用于训练模型。转写文本保存在本地 SQLite 数据库中，桌面应用默认在你的设备上保留听写音频 30 天（最长 90 天，或关闭）。',
          '云端备份在桌面端默认关闭，在移动端的付费套餐中默认开启。存放在 OpenWhispr 云端的笔记会发送给 OpenAI 用于搜索索引，助手执行的网页搜索经由搜索服务商 Exa。README 写着“no telemetry”，而政策列出了移动应用中的分析、归因和购买 SDK（AppsFlyer、RevenueCat、Superwall），使用情况分析可以关闭。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是开发方的声明，不是审计结果。代码以 MIT 许可公开，但 PromptQuorum 没有阅读代码，也没有检查应用的网络流量。',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**准确度和速度。** PromptQuorum 没有测量任何模型的词错误率、延迟或语言覆盖范围。',
          '**合规徽章。** 官网展示了 HIPAA、ISO 27001、SOC 2 Type II 和 GDPR 徽章，并链接到信任中心；我们没有阅读任何审计报告或证书。',
          '**下载量。** 官网写着“Downloaded by 150k+ users”；我们无从核实。',
          '**iPhone 的哪些功能需要套餐。** App Store 页面提供免费下载，而定价页把移动应用列在付费套餐中。',
          '**安装包签名。** 未检查 macOS 和 Windows 安装包是否经过公证或用开发者证书签名。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Handy](/zh/power-local-llm/handy-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '功能更精简的免费听写工具：没有会议笔记，也没有付费云端套餐',
          },
          {
            '应用': '[MacWhisper](/zh/power-local-llm/macwhisper-review)',
            '平台': 'macOS',
            '价格 / 许可证': '免费增值 / 专有',
            '主要区别': '仅限 Mac 的应用，本地 Whisper 和 Parakeet 转写可一次性买断；闭源',
          },
          {
            '应用': '[AquaVoice](/zh/power-local-llm/aquavoice-review)',
            '平台': 'macOS、Windows、iOS、Android',
            '价格 / 许可证': '免费增值 / 专有',
            '主要区别': '在当前应用中输入文字的云端听写服务，因此不是离线选项',
          },
        ],
        note: '这些是 PromptQuorum 目录中同类别的应用；请在各应用页面确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我应该先用哪个本地模型？',
            a: '文档推荐 Orukeet（Oruk 对 Parakeet 做的多语言微调），选择本地方式的全新安装会默认落到它；Whisper 则推荐 base 尺寸。文档称 Cohere Transcribe 是其最准确的离线模型，在 14 种语言上的平均词错误率为 5.42%，这是项目给出的数字，我们没有核实。',
          },
          {
            q: '是否支持英语以外的语言？',
            a: '官网声称支持 100 多种语言并可自动检测，但本地覆盖范围取决于模型：文档列出 Parakeet v3 支持 25 种语言，一个 Nemotron 模型支持 15 种，另外两个仅支持英语。我们没有核实“100 多种”这个数字。',
          },
          {
            q: '可以使用我自己的 API 密钥吗？',
            a: '桌面端可以：Free 套餐列出使用自己的 API 密钥时云端转写不限量，隐私政策称此时音频直接发送给你的服务商，不经过 OpenWhispr。iPhone 页面也提到可以连接自己的服务商。',
          },
          {
            q: '有命令行或开发者 API 吗？',
            a: '定价页列出命令行界面，在 Free 套餐中仅限本地，在付费套餐中可本地和远程使用；Pro 及以上可使用 API 和 MCP，文档链接了 API 概览。',
          },
          {
            q: '更新频率如何？',
            a: '版本 1.10.3 发布于 2026年10月12日，1.10.4 发布于 2026年10月22日，仓库维护着更新日志。发布如此频繁，设置和套餐限额可能会变，引用本文数字前请先查看定价页。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'OpenWhispr 是一款更新活跃、MIT 许可的工具，可在 macOS、Windows、Linux 和 iPhone 上向任何应用听写并录制会议，语音模型既可在本机运行，也可换成云端服务商。它的隐私水平取决于你选择的模式；付费套餐和移动应用带来了云端服务和分析，而 README 的“no telemetry”并未提及，准确度、速度和合规徽章在此都无法核实。适合想用一个应用同时完成听写和会议笔记、并在重视隐私时坚持使用本地模型的人；需要经证实的准确度或经认证的合规性的用户，应先试用并索取审计报告。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[OpenWhispr 官网](https://openwhispr.com) — 介绍、平台和合规徽章。',
          '[OpenWhispr 定价](https://openwhispr.com/pricing) — 套餐价格和限额。',
          '[OpenWhispr 隐私政策](https://openwhispr.com/privacy) — 数据处理、保留期限和子处理方，最近更新于 2026年10月12日。',
          '[GitHub 上的 OpenWhispr](https://github.com/OpenWhispr/openwhispr) — README、MIT 许可证和技术栈。',
          '[OpenWhispr 发布页](https://github.com/OpenWhispr/openwhispr/releases) — 版本 1.10.4 和安装包。',
          '[OpenWhispr 更新日志](https://github.com/OpenWhispr/openwhispr/blob/main/CHANGELOG.md) — 发布历史。',
          '[OpenWhispr 文档：本地模型](https://docs.openwhispr.com/guides/local-models) — 引擎、模型大小和 GPU 加速。',
          '[OpenWhispr 文档：系统要求](https://docs.openwhispr.com/platform/system-requirements) — 操作系统和权限。',
          '[App Store 上的 OpenWhispr](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420) — iPhone 和 iPad 页面，版本 1.2.4。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Handy 评测](/zh/power-local-llm/handy-review) — 一款在自己电脑上运行、MIT 许可的免费按键说话听写应用。',
          '[MacWhisper 评测](/zh/power-local-llm/macwhisper-review) — 用 Whisper 和 Parakeet 做本地转写的 Mac 应用。',
          '[Whisper.cpp 评测](/zh/power-local-llm/whisper-cpp-review) — 许多本地听写工具所基于的 Whisper C++ 移植版。',
          '[语音与音频工具对比](/zh/power-local-llm/local-llm-voice-audio-compared) — 本评测所属的类别对比。',
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
    heroImage: '/images/openwhispr-review-hero-ko.webp',
    title: 'OpenWhispr 리뷰: 오픈소스 음성 받아쓰기·회의 노트 앱',
    seoTitle: 'OpenWhispr 리뷰: 오픈소스 받아쓰기·회의 노트',
    intro: 'OpenWhispr는 오픈소스 음성 인식 앱으로 macOS, Windows, Linux, iPhone, iPad에서 쓸 수 있습니다. 단축키를 누르고 말하면 커서 위치에 텍스트가 붙여지며, 회의 받아쓰기와 노트 기능을 선택적으로 쓸 수 있습니다. 음성 모델은 내 기기에서 실행하거나 클라우드로 처리할 수 있고, 이 선택이 음성의 행선지를 결정합니다. 이 리뷰는 웹사이트, 개인정보 처리방침, 문서, GitHub 저장소(2026년 10월 24일 확인)에 근거하며, PromptQuorum은 앱을 직접 사용해 보지 않았습니다.',
    metaDescription: 'OpenWhispr 리뷰: Mac, Windows, Linux, iPhone용 MIT 라이선스 받아쓰기·회의 노트 앱. 로컬 또는 클라우드 음성 인식을 고릅니다. 직접 테스트 안 함.',
    twitterDescription: 'OpenWhispr 리뷰: 로컬 또는 클라우드 음성 모델을 쓰는 오픈소스 받아쓰기·회의 노트 앱. 요금제, 개인정보, 설치 파일에서 출처가 확인한 것과 확인하지 못한 것.',
    audience: '음성 받아쓰기와 회의 노트가 필요한 작성자, 개발자, 직장인 중 출처가 확인한 내용, 모드별 음성의 행선지, 유료 요금제가 더하는 기능을 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'OpenWhispr 리뷰',
    targetKeywords: [
      'openwhispr 리뷰',
      'openwhispr',
      '오픈소스 받아쓰기 앱',
      'wispr flow 오픈소스 대안',
      '로컬 음성 인식 mac windows linux',
      '회의 받아쓰기 앱 로컬',
      'openwhispr.com',
    ],
    current_models_mentioned: ['Whisper', 'Parakeet'],
    current_hardware_mentioned: ['Apple silicon', 'GPU'],
    leadAnswerBlock: '**OpenWhispr(버전 1.10.4)는 입력한 내용을 어떤 앱에든 붙여 넣는 MIT 라이선스 음성 인식 앱이며, 음성이 기기에 남는지는 로컬 모델과 클라우드 모델 중 무엇을 고르느냐에 달려 있습니다.** 회의 받아쓰기, 노트, AI 어시스턴트도 더해지며, 이 글의 모든 내용은 개발사의 웹사이트, 개인정보 처리방침, 문서, GitHub 저장소에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'OpenWhispr는 내 음성을 내 컴퓨터에만 보관합니까?',
        answer: '로컬 모드에서만 그렇습니다. 개인정보 처리방침에 따르면 음성 인식을 기기에서 실행할 때는 어떤 오디오도 외부로 전송되지 않습니다. OpenWhispr Cloud나 본인의 API 키를 쓰면 처리를 위해 오디오가 받아쓰기 제공업체로 전송됩니다.',
        bullets: [
          '전역 단축키로 어떤 앱에든 받아쓰고, 다른 단축키로 말하는 동안 번역할 수 있습니다.',
          'Zoom, Teams, FaceTime 통화를 감지하고, 화자 라벨은 기기에서 만듭니다.',
          '폴더가 있는 노트와 로컬 의미 검색, 그리고 오디오·영상 가져오기를 지원합니다.',
          '말한 내용을 직접 고른 AI 모델로 보내는 음성 어시스턴트 단축키가 있습니다.',
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
        label: 'OpenWhispr란?',
        anchor: 'what-is-openwhispr',
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
        label: '출처로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '요금제',
        anchor: 'plans',
      },
      {
        label: '데이터 흐름과 개인정보',
        anchor: 'privacy',
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
            text: 'OpenWhispr는 기기 내 모델이나 클라우드 모델로 음성을 텍스트로 바꿔 사용 중인 앱에 붙여 넣고, 회의를 녹음하고 화자를 구분할 수 있는 오픈소스 데스크톱·모바일 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '컴퓨터 전체에서 쓰는 음성 키보드에, 회의도 들어 주는 노트가 붙어 있다고 생각하시면 됩니다.',
          },
        ],
        items: [
          '유지 관리: 메인 브랜치는 2026년 10월 23일에 마지막으로 바뀌었고 버전 1.10.4는 2026년 10월 22일에 출시되어, 방치 프로젝트 경고는 해당되지 않습니다.',
          '비용: 로컬 받아쓰기는 무료이며 제한이 없고, 클라우드와 팀 기능은 유료 요금제에 있습니다.',
          '엔진: Whisper 모델은 whisper.cpp가, 나머지 로컬 모델은 sherpa-onnx가 실행합니다.',
          '플랫폼: macOS, Windows, Linux용 데스크톱 설치 파일과 무료 iPhone·iPad 앱이 있습니다.',
          '운영사: 미국 델라웨어주 회사 Gizmo Labs Inc.이며, 코드는 MIT 라이선스로 공개되어 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 [openwhispr.com](https://openwhispr.com), 개인정보 처리방침, 문서, GitHub 저장소(2026년 10월 24일 확인)에 근거합니다. PromptQuorum은 앱을 설치하거나 시간을 재 보지 않았으므로 정확도와 속도는 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-openwhispr',
        title: 'OpenWhispr란?',
        content: [
          '**OpenWhispr는 음성 인식 앱으로, 단축키를 누르는 동안 녹음하고 음성을 텍스트로 바꿔 포커스가 있는 앱에 붙여 넣습니다.** README는 이 앱을 “WisprFlow와 Granola의 오픈소스 무료 대안”이라고 소개하며, 웹사이트는 회의 노트, AI 어시스턴트, 100개 이상의 언어를 추가로 언급합니다. 저장소는 2025년 6월에 만들어졌습니다.',
          '**앱을 배포하는 곳은 델라웨어주 법인 Gizmo Labs Inc.로, 유료 서비스인 OpenWhispr Cloud도 운영합니다.** 데스크톱 앱은 Electron으로 만들어졌고, iPhone·iPad 앱은 같은 저장소 안의 별도 Expo 프로젝트입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**OpenWhispr는 macOS, Windows, Linux용으로 내려받을 수 있고, iPhone·iPad용 앱은 App Store에 있습니다. 문서에 따르면 웹 버전과 브라우저 확장 프로그램은 없습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          {
            '옵션': 'macOS',
            '입수 방법': '.dmg(Apple silicon, Intel): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            '옵션': 'Windows',
            '입수 방법': '.exe 설치 파일(x64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            '옵션': 'Linux',
            '입수 방법': '.AppImage, .deb, .rpm, .tar.gz(x86_64): [openwhispr.com/download](https://openwhispr.com/download)',
          },
          {
            '옵션': 'iPhone·iPad',
            '입수 방법': '[App Store](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420), iOS 17.0 이상',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[openwhispr.com](https://openwhispr.com)',
          },
          {
            '옵션': '개인정보 처리방침',
            '입수 방법': '[openwhispr.com/privacy](https://openwhispr.com/privacy)',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': '[github.com/OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr), MIT 라이선스',
          },
        ],
        note: '확인한 버전: 1.10.4. [GitHub Releases 페이지](https://github.com/OpenWhispr/openwhispr/releases/latest)에 따르면 2026년 10월 22일에 공개되었고, 모든 데스크톱 설치 파일이 그곳에 나열되어 있습니다. iPhone·iPad 앱은 App Store 페이지에서 버전 1.2.4이며 미국, 독일, 프랑스, 스페인, 브라질, 일본, 한국 스토어에서 무료로 표시되었습니다. 커뮤니티가 관리하는 Homebrew cask(`brew install --cask openwhispr`)도 있습니다. 유료 요금제는 요금제 항목에서 다룹니다.',
      },
      requirements: {
        id: 'requirements',
        itemHeadings: true,
        title: '요구 사항',
        content: [
          '**문서가 제시하는 최소 조건은 macOS 12, Windows 10, 64비트 Linux이며, 부담이 큰 부분은 음성 모델을 내 기기에서 실행하는 일입니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          {
            '항목': '운영체제',
            '출처의 설명': 'macOS 12 이상(Apple silicon 또는 Intel), Windows 10 이상(64비트 x64), PulseAudio 또는 PipeWire가 있는 64비트 x86-64 Linux이며, Windows와 Linux용 ARM 빌드는 없습니다',
          },
          {
            '항목': '음성 모델',
            '출처의 설명': '앱 안에서 내려받음: Orukeet 약 672 MB(권장 기본값), Whisper는 약 75 MB(tiny)에서 약 3 GB(large), Parakeet 약 631~680 MB, Cohere Transcribe 약 1.7 GB',
          },
          {
            '항목': '하드웨어',
            '출처의 설명': '로컬 Whisper는 Apple silicon에서 Metal, NVIDIA GPU에서 CUDA, AMD·Intel GPU에서 Vulkan을 쓸 수 있고, GPU 런타임이 실패하면 CPU로 전환합니다. RAM 수치는 제시되지 않습니다',
          },
          {
            '항목': '권한',
            '출처의 설명': '텍스트를 붙여 넣으려면 마이크와 손쉬운 사용 권한이 필요하며, 회의 상대방의 소리를 잡으려면 macOS 14.2 이상과 “시스템 오디오 녹음” 권한이 필요합니다',
          },
          {
            '항목': 'Intel Mac',
            '출처의 설명': '실시간 화자 식별과 음성 지문은 쓸 수 없고, 회의 녹음과 받아쓰기는 계속 되며 노트 검색은 키워드 검색으로 바뀝니다(README)',
          },
          {
            '항목': '인터넷',
            '출처의 설명': '모델 내려받기와 클라우드 기능에 필요하며, 모델이 디스크에 있으면 로컬 받아쓰기는 오프라인에서 작동합니다',
          },
        ],
        note: '모델 크기는 문서의 로컬 모델 안내에 나온 수치이며, 앱 안의 목록과 다를 수 있습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 웹사이트, 문서 또는 README에서 가져왔으며, 어느 것도 독자적으로 테스트하지 않았습니다.**',
        ],
        items: [
          '**어디서나 받아쓰기.** 전역 단축키가 녹음, 받아쓰기, 붙여 넣기를 처리하며, 전용 단축키로는 한 언어로 말하고 다른 언어로 붙여 넣을 수 있습니다.',
          '**두 가지 로컬 엔진.** Whisper는 whisper.cpp로, Orukeet, Parakeet, Nemotron 계열은 sherpa-onnx로 실행되며, 스트리밍 Nemotron 모델은 말하는 동안 부분 텍스트를 보여 줄 수 있습니다.',
          '**회의.** 앱이 Zoom, Teams, FaceTime 통화를 감지하고, 기기에서 화자 라벨을 붙이며, Google, Microsoft, Apple 캘린더 일정을 노트에 연결할 수 있습니다.',
          '**노트와 가져오기.** 노트에는 폴더와 의미 검색용 로컬 임베딩 모델이 있고, 오디오·영상 파일이나 붙여 넣은 YouTube 또는 오디오 URL도 받아쓸 수 있습니다.',
          '**어시스턴트와 연동.** 음성 어시스턴트 단축키는 말한 내용을 클라우드 또는 로컬의 선택한 모델로 보내며, 공개 API와 MCP 서버로 다른 도구와 연결합니다.',
        ],
        note: '데스크톱 설정은 받아쓰기, 노트 녹음, 오디오 업로드마다 엔진 선택을 따로 보관합니다.',
      },
      pricing: {
        id: 'plans',
        itemHeadings: true,
        title: '요금제',
        content: [
          '**로컬 받아쓰기는 모든 요금제에서 무료이며 제한이 없고, 유료 요금제는 클라우드 받아쓰기, 더 많은 회의 시간, 팀 기능을 더합니다.** 모든 수치는 요금 페이지에 표시된 미국 달러 가격입니다.',
        ],
        columns: ['요금제', '요금 페이지의 기재 내용'],
        rows: [
          {
            '요금제': 'Free',
            '요금 페이지의 기재 내용': '$0: 로컬 모델 무제한, 본인 API 키로 쓰는 클라우드 받아쓰기 무제한, OpenWhispr Cloud 받아쓰기 주당 2,000단어, 회의 녹음 월 5시간',
          },
          {
            '요금제': 'Pro',
            '요금 페이지의 기재 내용': '연간 결제 시 사용자당 연 $80(월 $6.67로 표시): 클라우드 받아쓰기 무제한, 에이전트 모드, 회의 월 20시간, 동기화, API·MCP 접근, iPhone·iPad 앱',
          },
          {
            '요금제': 'Business',
            '요금 페이지의 기재 내용': '사용자당 연 $160(월 $13.33으로 표시): Pro의 모든 기능에 더해 회의 녹음 무제한, 내 데이터 대상 채팅, 우선 지원',
          },
          {
            '요금제': 'Enterprise',
            '요금 페이지의 기재 내용': '맞춤 견적: SSO, SAML, SCIM, 감사 로그, 보존 기간 제어, 전담 지원',
          },
        ],
        note: '2026년 10월 24일에 표시된 수치이며, 다른 통화나 지역별 가격은 확인하지 않았고 세금은 포함되지 않습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**2026년 10월 12일에 갱신된 개인정보 처리방침은 데스크톱의 받아쓰기 모드를 세 가지로 설명합니다. 오디오가 어디로도 전송되지 않는 로컬 처리, 오디오가 선택한 제공업체로 직접 가는 본인의 API 키, 오디오가 자사 API 또는 음성 인식 제공업체로 보내져 실시간으로 처리되고 OpenWhispr에는 저장되지 않는 OpenWhispr Cloud입니다.** 청구를 위해 클라우드 사용 기록(단어 수, 제공업체, 모델, 길이)은 보관되며, 방침은 데이터를 모델 학습에 쓰지 않는다고 밝힙니다. 받아쓴 텍스트는 로컬 SQLite 데이터베이스에 저장되고, 데스크톱 앱은 받아쓰기 녹음을 기본 30일 동안(최대 90일, 또는 끔) 기기에 보관합니다.',
          '클라우드 백업은 데스크톱에서는 기본으로 꺼져 있고, 모바일 앱에서는 유료 요금제에서 기본으로 켜져 있습니다. OpenWhispr 클라우드에 저장된 노트는 검색 색인을 위해 OpenAI로 전송되며, 어시스턴트가 수행하는 웹 검색은 검색 제공업체 Exa를 거칩니다. README는 “no telemetry”라고 쓰지만, 방침에는 모바일 앱의 분석, 어트리뷰션, 구매 SDK(AppsFlyer, RevenueCat, Superwall)가 나열되어 있으며 사용 분석은 끌 수 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발사의 선언일 뿐 감사 결과가 아닙니다. 코드는 MIT 라이선스로 공개되어 있지만 PromptQuorum은 코드를 읽거나 앱의 네트워크 트래픽을 검사하지 않았습니다.',
          },
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**정확도와 속도.** PromptQuorum은 어떤 모델에 대해서도 단어 오류율, 지연 시간, 언어 지원 범위를 측정하지 않았습니다.',
          '**규정 준수 배지.** 웹사이트에는 HIPAA, ISO 27001, SOC 2 Type II, GDPR 배지와 Trust Center 링크가 있지만, 감사 보고서나 인증서는 확인하지 못했습니다.',
          '**다운로드 수.** 웹사이트는 “Downloaded by 150k+ users”라고 쓰지만 이를 확인할 방법이 없습니다.',
          '**iPhone의 어떤 기능에 요금제가 필요한지.** App Store 페이지는 무료 다운로드를 제공하지만, 요금 페이지는 모바일 앱을 유료 요금제 항목에 넣고 있습니다.',
          '**설치 파일 서명.** macOS와 Windows 설치 파일이 공증되었는지, 개발자 인증서로 서명되었는지는 확인하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          {
            '앱': '[Handy](/ko/power-local-llm/handy-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이점': '기능이 더 단출한 무료 받아쓰기 도구로, 회의 노트와 유료 클라우드 요금제가 없습니다',
          },
          {
            '앱': '[MacWhisper](/ko/power-local-llm/macwhisper-review)',
            '플랫폼': 'macOS',
            '가격 / 라이선스': '프리미엄 / 독점',
            '핵심 차이점': '로컬 Whisper·Parakeet 받아쓰기를 1회 구매로 제공하는 Mac 전용 앱이며 비공개 소스입니다',
          },
          {
            '앱': '[AquaVoice](/ko/power-local-llm/aquavoice-review)',
            '플랫폼': 'macOS, Windows, iOS, Android',
            '가격 / 라이선스': '프리미엄 / 독점',
            '핵심 차이점': '사용 중인 앱에 입력해 주는 클라우드 받아쓰기 서비스라서 오프라인 선택지가 아닙니다',
          },
        ],
        note: '모두 PromptQuorum 디렉터리의 같은 카테고리 앱입니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '어떤 로컬 모델로 시작해야 합니까?',
            a: '문서는 Oruk가 Parakeet을 다국어로 미세 조정한 Orukeet를 권장하며, 로컬 경로를 고른 새 설치는 이 모델로 시작됩니다. Whisper는 base 크기를 권장합니다. 문서는 Cohere Transcribe를 가장 정확한 오프라인 모델로 소개하며 14개 언어 평균 단어 오류율은 5.42%라고 하는데, 이는 프로젝트가 제시한 수치이며 저희가 확인한 것은 아닙니다.',
          },
          {
            q: '영어 외의 언어도 지원합니까?',
            a: '웹사이트는 자동 감지로 100개 이상의 언어를 지원한다고 주장하지만, 로컬 지원 범위는 모델에 따라 다릅니다. 문서에는 Parakeet v3가 25개 언어, Nemotron 모델 하나가 15개 언어, 나머지 두 모델은 영어만 지원한다고 되어 있습니다. 100개 이상이라는 수치는 확인하지 못했습니다.',
          },
          {
            q: '내 API 키를 쓸 수 있습니까?',
            a: '데스크톱에서는 가능합니다. Free 요금제에는 본인 API 키로 쓰는 클라우드 받아쓰기가 무제한이라고 적혀 있고, 개인정보 처리방침은 이 경우 오디오가 OpenWhispr를 거치지 않고 제공업체로 직접 간다고 밝힙니다. iPhone 페이지에도 본인의 제공업체를 연결할 수 있다는 언급이 있습니다.',
          },
          {
            q: '명령줄이나 개발자용 API가 있습니까?',
            a: '요금 페이지에는 Free에서는 로컬로, 유료 요금제에서는 로컬과 원격으로 작동하는 명령줄 인터페이스와 Pro 이상의 API·MCP 접근이 나와 있으며, 문서에는 API 개요 링크가 있습니다.',
          },
          {
            q: '얼마나 자주 업데이트됩니까?',
            a: '버전 1.10.3은 2026년 10월 12일에, 1.10.4는 2026년 10월 22일에 공개되었고 저장소에는 변경 기록이 있습니다. 릴리스가 이렇게 잦으면 설정과 요금제 한도가 바뀔 수 있으므로, 이 글의 수치를 믿기 전에 요금 페이지를 확인하십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'OpenWhispr는 활발히 업데이트되는 MIT 라이선스 앱으로, macOS, Windows, Linux, iPhone에서 어떤 앱에든 받아쓰고 회의를 녹음할 수 있으며, 음성 모델을 내 기기에서 실행하거나 클라우드 제공업체로 바꿀 수 있습니다. 개인정보 보호 수준은 고른 모드만큼이고, 유료 요금제와 모바일 앱에는 README의 “no telemetry”가 언급하지 않는 클라우드 서비스와 분석이 따라오며, 정확도, 속도, 규정 준수 배지는 여기서 확인할 수 없었습니다. 받아쓰기와 회의 노트를 한 앱으로 해결하고 개인정보가 중요할 때는 로컬 모델만 쓰려는 분에게 적합합니다. 검증된 정확도나 인증된 규정 준수가 필요한 분은 먼저 직접 써 보고 감사 보고서를 요청하십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[OpenWhispr 웹사이트](https://openwhispr.com) — 소개, 플랫폼, 규정 준수 배지.',
          '[OpenWhispr 요금](https://openwhispr.com/pricing) — 요금제 가격과 한도.',
          '[OpenWhispr 개인정보 처리방침](https://openwhispr.com/privacy) — 데이터 처리, 보존, 하위 처리자. 2026년 10월 12일 갱신.',
          '[GitHub의 OpenWhispr](https://github.com/OpenWhispr/openwhispr) — README, MIT 라이선스, 기술 스택.',
          '[OpenWhispr 릴리스](https://github.com/OpenWhispr/openwhispr/releases) — 버전 1.10.4와 설치 파일.',
          '[OpenWhispr 변경 기록](https://github.com/OpenWhispr/openwhispr/blob/main/CHANGELOG.md) — 릴리스 이력.',
          '[OpenWhispr 문서: 로컬 모델](https://docs.openwhispr.com/guides/local-models) — 엔진, 모델 크기, GPU 가속.',
          '[OpenWhispr 문서: 시스템 요구 사항](https://docs.openwhispr.com/platform/system-requirements) — 운영체제와 권한.',
          '[App Store의 OpenWhispr](https://apps.apple.com/us/app/openwhispr-voice-to-text/id6763804420) — iPhone·iPad 페이지, 버전 1.2.4.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Handy 리뷰](/ko/power-local-llm/handy-review) — 내 컴퓨터에서 실행되는 MIT 라이선스 무료 푸시투토크 받아쓰기 앱.',
          '[MacWhisper 리뷰](/ko/power-local-llm/macwhisper-review) — Whisper와 Parakeet으로 로컬 받아쓰기를 하는 Mac 앱.',
          '[Whisper.cpp 리뷰](/ko/power-local-llm/whisper-cpp-review) — 많은 로컬 받아쓰기 도구의 기반이 되는 Whisper의 C++ 포트.',
          '[음성·오디오 도구 비교](/ko/power-local-llm/local-llm-voice-audio-compared) — 이 리뷰가 속한 카테고리 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
