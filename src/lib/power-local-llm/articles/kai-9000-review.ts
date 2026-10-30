// Kai 9000 Review: Free Open-Source AI Assistant, Cloud or On-Device
// Slug: kai-9000-review
// Companion to: pocketpal-ai-review, jan-review, msty-review, openclaw-review (chat assistants)
// Sources: kai9000.com (home, /docs), github.com/SimonSchubert/Kai (README, LICENSE, CHANGELOG, docs/features/*, Releases API), the privacy policy at schubert-simon.de/privacy/kai.txt,
// the App Store and F-Droid listings, all checked 2026-10-30 — no hands-on testing. No maker contact (no founder block).
// geo-translation: APPLIED (docs/geo-translation.md read 2026-10-30; per-language tables used for register, decimals, tldr titles, readTime).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/kai-9000-review-hero-en.webp',
    title: 'Kai 9000 Review: Free Open-Source AI Assistant, Cloud or On-Device',
    seoTitle: 'Kai 9000 Review: Open-Source AI Assistant, Cloud or Local',
    intro: 'Kai 9000 is a free, Apache-2.0 AI assistant from Berlin developer Simon Schubert that runs on Android, iOS, Windows, macOS, Linux and in the browser. It talks to cloud providers by default and can optionally run downloaded models on the device. This review sticks to the project\'s website, documentation, repository and store listings, checked on 30 October 2026; PromptQuorum has not run it.',
    metaDescription: 'Kai 9000 review: free open-source AI assistant for phone, desktop and web. Cloud by default, optional on-device Gemma 4. Data flow and limits.',
    twitterDescription: 'Kai 9000 review: a free open-source assistant on every platform. Cloud by default, optional on-device models. What leaves the device and what we could not verify.',
    audience: 'People who want one free, open-source AI assistant across phone, desktop and browser and need to know what is local, what goes to the cloud, what it costs and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Kai 9000 review',
    targetKeywords: [
      'kai 9000 review',
      'kai 9000 ai',
      'open source ai assistant with memory',
      'free ai assistant android ios desktop',
      'on-device gemma 4 app',
      'openclaw alternative phone',
    ],
    current_hardware_mentioned: [
      'Android phone',
      'iPhone',
      'Windows PC',
      'Mac',
      'Gemma 4',
    ],
    leadAnswerBlock: '**Kai 9000 (version 3.3.0, released 2 October 2026) is an open-source assistant with persistent memory that only runs locally if you download an on-device model.** By default it sends your messages to a cloud service. PromptQuorum has not installed or tested it; every statement here comes from the project\'s own sources.',
    quickAnswerTop: {
      en: {
        question: 'Does Kai 9000 run offline?',
        answer: 'Only with a downloaded on-device model, according to the project\'s documentation: Gemma 4 and a few smaller models run through Google\'s LiteRT on Android, iOS and desktop and need no internet after the download. Everything else, including the built-in Free tier that needs no API key, goes to a remote service.',
        bullets: [
          'The browser version has no local engine.',
          'On-device models cannot use interactive screens, email, tasks or MCP tools.',
          'The app is free; cloud providers you add bill you on their own terms.',
          'It is an assistant with memory and tools, not only a chat window.',
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
        label: 'What Is Kai 9000?',
        anchor: 'what-is-kai-9000',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'On-Device Models and Limits',
        anchor: 'requirements',
      },
      {
        label: 'How to Get Started',
        anchor: 'getting-started',
      },
      {
        label: 'Features Listed in the Docs',
        anchor: 'key-features',
      },
      {
        label: 'Data Flow and Storage',
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
            text: 'Kai 9000 is a free, open-source AI assistant for phones, desktops and the browser that uses cloud providers by default and can run downloaded Gemma 4 models on the device.',
          },
          {
            type: 'plain-terms',
            text: 'You install it from a store or installer, chat at once on a built-in free tier or add your own provider keys, and only switch to offline use if you download a model in settings.',
          },
        ],
        items: [
          'Maintenance: GitHub shows release 3.3.0 on 2 October 2026 and a code push on 24 October 2026, so no stale-project warning applies.',
          'Cost and licence: free under Apache 2.0, with no account; cloud providers you add charge you directly.',
          'Reach: Android, iOS, Windows, macOS, Linux and a web app, each with a store listing, installer or browser link.',
          'Local option: five catalogued on-device models, from Qwen3 0.6B to Gemma 4 12B, downloaded on demand.',
          'Pace: four 3.x releases between 2 August and 2 October 2026, per the changelog.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the project\'s website, documentation, repository, privacy policy and store listings, checked on 30 October 2026. PromptQuorum has not installed, tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-kai-9000',
        title: 'What Is Kai 9000?',
        content: [
          '**Kai 9000 is an AI assistant that remembers things between chats and can act through tools, not only reply with text.** The documentation lists persistent memory, an editable system prompt the project calls a soul, a background heartbeat that checks in periodically, tools such as web search, calendar events, notifications and shell commands, MCP server support, and an interactive mode in which the model builds screens such as quizzes or dashboards.',
          'It is published by Simon Schubert of Berlin under the Apache 2.0 licence on [GitHub](https://github.com/SimonSchubert/Kai), as Kai 9000 on the [website](https://kai9000.com) and as "Kai - AI" in the app stores. The repository describes it as an OpenClaw alternative for your pocket.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Kai 9000 is a normal download on every platform: store apps for phones, installers for desktop and a browser version, with no terminal step needed.**',
        ],
        columns: [
          'Item',
          'Details',
        ],
        rows: [
          {
            Item: 'Android',
            Details: '[Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.kai), [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) or APK on [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            Item: 'iPhone and iPad',
            Details: '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023), iOS 15.3 or later; Apple-silicon Macs too',
          },
          {
            Item: 'Windows',
            Details: 'MSI on [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) or winget',
          },
          {
            Item: 'macOS',
            Details: 'DMG on [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) or Homebrew',
          },
          {
            Item: 'Linux',
            Details: 'DEB, RPM, AppImage, Flatpak or tarball on [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            Item: 'Browser',
            Details: '[kai9000.com/app](https://kai9000.com/app/)',
          },
          {
            Item: 'Price',
            Details: 'Free (Apache 2.0)',
          },
          {
            Item: 'Website',
            Details: '[kai9000.com](https://kai9000.com)',
          },
          {
            Item: 'Documentation',
            Details: '[kai9000.com/docs](https://kai9000.com/docs/)',
          },
          {
            Item: 'Privacy policy',
            Details: '[Kai privacy policy](https://schubert-simon.de/privacy/kai.txt)',
          },
          {
            Item: 'Source code',
            Details: '[GitHub repository](https://github.com/SimonSchubert/Kai)',
          },
        ],
        note: 'Version reviewed: 3.3.0, released on 2 October 2026 per [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) and listed on [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/); the repository\'s latest code push was on 24 October 2026. The App Store listing showed 3.0.0 when checked, so iPhone users may be on an older build. Command-line installs from the README: brew install --cask simonschubert/tap/kai, winget install SimonSchubert.Kai, yay -S kai-bin.',
      },
      requirements: {
        id: 'requirements',
        title: 'On-Device Models and Limits',
        content: [
          '**On-device use is optional and limited to a short catalogue of models that the app downloads from Hugging Face; the project\'s [documentation](https://github.com/SimonSchubert/Kai/blob/main/docs/features/on-device-inference.md), last verified 21 October 2026, lists them.**',
        ],
        columns: [
          'Model',
          'Download',
          'Note from the docs',
        ],
        rows: [
          {
            Model: 'Gemma 4 E2B IT',
            Download: '2.59 GB',
            'Note from the docs': 'Tool calling reliable',
          },
          {
            Model: 'Gemma 4 E4B IT',
            Download: '3.66 GB',
            'Note from the docs': 'Tool calling reliable',
          },
          {
            Model: 'Gemma 4 12B IT',
            Download: '6.88 GB',
            'Note from the docs': 'Cannot load on iOS',
          },
          {
            Model: 'LFM2.5 1.2B Instruct',
            Download: '736 MB',
            'Note from the docs': 'Smallest model with a tool template',
          },
          {
            Model: 'Qwen3 0.6B',
            Download: '614 MB',
            'Note from the docs': 'Chat only in practice',
          },
        ],
        note: 'Limits named in the docs: text input only on the device, no interactive screens, a shortened tool list, a 64-bit Android device or, on Linux, a CPU with AVX2, and no local engine in the web build. The docs give no minimum RAM figure.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the project\'s getting-started page; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Pick the store app or installer for your device from the Get It table.',
          },
          {
            title: 'Chat on the Free tier',
            whyItMatters: 'Open the app and chat at once on the built-in Free tier, which needs no API key.',
          },
          {
            title: 'Add a provider',
            whyItMatters: 'In Settings add a service such as OpenAI, Gemini or Anthropic, or an OpenAI-compatible address; several can be ordered into a fallback chain.',
          },
          {
            title: 'Optionally go local',
            whyItMatters: 'In the Local Model card download a catalogue model or import a .litertlm file; only then does chat run on the device.',
          },
          {
            title: 'Decide about tools',
            whyItMatters: 'Switch on tools such as shell, email or the Android Linux sandbox only if you want the assistant to act; the privacy policy says tools are off by default and need your permission.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Listed in the Docs',
        content: [
          '**Every item below comes from the project\'s README and documentation.**',
        ],
        items: [
          '**Memory and personality.** Persistent memory that the assistant stores and recalls, plus an editable system prompt.',
          '**Tools and MCP.** Web search, notifications, calendar events, shell commands, email and scheduled tasks on remote models, plus connections to MCP servers.',
          '**Interactive screens.** The model can build quizzes, dashboards and recipe cards that you navigate by tapping; remote models only.',
          '**Providers and fallback.** Around 30 cloud providers and any OpenAI-compatible address, tried in the order you set.',
          '**Android Linux sandbox.** An optional Alpine or Debian environment where the assistant can run commands and scripts without root.',
          '**Extras.** Text to speech and image attachments to remote models.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Storage',
        content: [
          '**What leaves the device depends on the model you pick.** With a cloud provider or the built-in Free tier, your messages and the memories added to each prompt go to that service. The [privacy policy](https://schubert-simon.de/privacy/kai.txt) says Kai has no account, no analytics and no servers of its own that receive your data, that the provider\'s terms apply, and it names Mistral AI\'s free tier as an example, saying that under that tier\'s terms inputs and outputs may be used for training. It adds that the location tool sends your IP address to ip-api.com and that tools reading SMS or calendar data pass that data to the AI service. With an on-device model, the docs say inference stays on the device.',
          'On storage, the README and website say conversations are encrypted, while the project\'s [encryption documentation](https://github.com/SimonSchubert/Kai/blob/main/docs/features/encryption.md) says that on Android, iOS and desktop they sit in a local SQLite database protected by the operating system\'s app sandbox, with API keys and passwords in encrypted settings. [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) labels the app with the anti-feature Non-Free Network Services. The policy is dated 3 February 2026, before the 3.x releases, and the sources we read do not say who runs the Free tier\'s proxy or what it retains.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the project\'s own statements; PromptQuorum has not audited the app\'s network traffic or storage.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who want one assistant on every device** with a free open-source licence and the choice of cloud, their own server or an on-device model.',
          '**Tinkerers who like memory, tools and MCP** and will read the docs to switch features on.',
          '**Ollama or LM Studio users** who want a phone or desktop front end for their own server, since a custom base address is supported.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run the app, so answer quality, speed, battery and memory use of the on-device models are not assessed.',
          '**The Free tier.** Its operator, data retention, usage limits and models are not described in the sources we read.',
          '**The iPhone build.** The App Store showed 3.0.0 while other channels showed 3.3.0, so which features iPhone users get is unclear.',
          '**Independent checks.** We found no third-party security or privacy audit of the app.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: [
          'App',
          'Platforms',
          'Price / license',
          'Key difference',
        ],
        rows: [
          {
            App: '[Jan](/power-local-llm/jan-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / Apache 2.0 (variant)',
            'Key difference': 'Privacy-focused open-source desktop chat client with its own local engine',
          },
          {
            App: '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            Platforms: 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source phone app built around models running on the device',
          },
          {
            App: '[Msty](/power-local-llm/msty-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Freemium / closed source',
            'Key difference': 'Closed-source desktop client for local and cloud models',
          },
          {
            App: '[OpenClaw](/power-local-llm/openclaw-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source agent framework; Kai\'s repository calls itself a pocket-sized alternative',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can it use my own Ollama server?',
            a: 'Yes. The OpenAI-compatible service defaults to localhost:11434/v1, the usual Ollama address, and accepts any custom base address; on Android 17 or later the app asks for local-network permission before reaching a LAN host.',
          },
          {
            q: 'What happens when a provider fails?',
            a: 'Kai retries twice, then tries the next configured service and shows which one answered. An on-device failure is never silently handed to the cloud, and a local model is never used as a fallback target.',
          },
          {
            q: 'Is there a hosted web version?',
            a: 'Yes, at [kai9000.com/app](https://kai9000.com/app/); because the web build has no local engine, it needs a remote provider or the Free tier.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Kai 9000 is a free, Apache-2.0 assistant for phones, desktops and the browser that treats memory and tools as core features and lets you choose between cloud providers, your own server and downloaded on-device models. The trade-offs are that the local path is optional and narrower than the cloud path, the project\'s own pages differ on how conversations are stored, and PromptQuorum could not test it. It suits people who want one open-source assistant across devices; readers who want a phone app built around local models can compare [PocketPal AI](/power-local-llm/pocketpal-ai-review), and desktop users [Jan](/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Kai 9000 website](https://kai9000.com) — overview, platforms and download links, checked 30 October 2026.',
          '[Kai documentation](https://kai9000.com/docs/) — features, on-device inference, providers and encryption pages.',
          '[GitHub repository and releases](https://github.com/SimonSchubert/Kai) — Apache 2.0 licence, version 3.3.0 released 2 October 2026, changelog.',
          '[Kai privacy policy](https://schubert-simon.de/privacy/kai.txt) — data handling, effective 3 February 2026.',
          '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023) and [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) listings — iOS version and requirements, anti-feature label.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — an open-source phone app for local models.',
          '[Jan Review](/power-local-llm/jan-review) — an open-source desktop app with its own engine.',
          '[OpenClaw Review](/power-local-llm/openclaw-review) — the agent framework Kai positions itself against.',
          '[Local LLM Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison for chat apps.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Kai 9000 Review: Free Open-Source AI Assistant, Cloud or On-Device',
      description: 'Kai 9000 review: free open-source AI assistant for phone, desktop and web. Cloud by default, optional on-device Gemma 4. Data flow and limits.',
      url: 'https://www.promptquorum.com/power-local-llm/kai-9000-review',
      inLanguage: 'en',
      datePublished: '2026-10-30',
      dateModified: '2026-10-30',
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
        audienceType: 'People choosing a free open-source AI assistant for phone, desktop and web',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Kai 9000',
        },
        {
          '@type': 'Thing',
          name: 'AI assistant',
        },
        {
          '@type': 'Thing',
          name: 'On-device inference',
        },
        {
          '@type': 'Thing',
          name: 'Gemma 4',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/kai-9000-review',
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
          name: 'Kai 9000 Review',
          item: 'https://www.promptquorum.com/power-local-llm/kai-9000-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/kai-9000-review-hero-de.webp',
    title: 'Kai-9000-Rezension: Kostenloser Open-Source-KI-Assistent für Cloud und Gerät',
    seoTitle: 'Kai-9000-Rezension: Open-Source-KI, Cloud oder lokal',
    intro: 'Kai 9000 ist ein kostenloser KI-Assistent unter Apache-2.0-Lizenz des Berliner Entwicklers Simon Schubert, der auf Android, iOS, Windows, macOS, Linux und im Browser läuft. Standardmäßig spricht er mit Cloud-Anbietern und kann optional heruntergeladene Modelle direkt auf dem Gerät ausführen. Diese Rezension beschränkt sich auf Website, Dokumentation, Repository und Store-Einträge des Projekts, geprüft am 30. Oktober 2026; PromptQuorum hat die App nicht ausgeführt.',
    metaDescription: 'Kai-9000-Rezension: kostenloser Open-Source-KI-Assistent für Handy, Desktop und Web. Cloud als Standard, Gemma 4 optional lokal. Datenfluss, Grenzen.',
    twitterDescription: 'Kai-9000-Rezension: ein kostenloser Open-Source-Assistent für jede Plattform. Standardmäßig Cloud, optional lokale Modelle. Was das Gerät verlässt und was wir nicht prüfen konnten.',
    audience: 'Menschen, die einen kostenlosen Open-Source-KI-Assistenten für Handy, Desktop und Browser suchen und wissen müssen, was lokal läuft, was in die Cloud geht, was er kostet und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Kai 9000 Rezension',
    targetKeywords: [
      'kai 9000 rezension',
      'kai 9000 ki',
      'open source ki assistent mit gedächtnis',
      'kostenloser ki assistent android ios desktop',
      'gemma 4 auf dem gerät app',
      'openclaw alternative handy',
    ],
    current_hardware_mentioned: [
      'Android-Handy',
      'iPhone',
      'Windows-PC',
      'Mac',
      'Gemma 4',
    ],
    leadAnswerBlock: '**Kai 9000 (Version 3.3.0, veröffentlicht am 2. Oktober 2026) ist ein quelloffener Assistent mit dauerhaftem Gedächtnis, der nur dann lokal läuft, wenn Sie ein Modell auf das Gerät laden.** Standardmäßig schickt er Ihre Nachrichten an einen Cloud-Dienst. PromptQuorum hat ihn weder installiert noch getestet; jede Angabe hier stammt aus den eigenen Quellen des Projekts.',
    quickAnswerTop: {
      de: {
        question: 'Funktioniert Kai 9000 offline?',
        answer: 'Laut Dokumentation des Projekts nur mit einem heruntergeladenen Modell auf dem Gerät: Gemma 4 und einige kleinere Modelle laufen über Googles LiteRT auf Android, iOS und Desktop und brauchen nach dem Download kein Internet. Alles andere, auch die eingebaute Free-Stufe ohne API-Schlüssel, geht an einen entfernten Dienst.',
        bullets: [
          'Die Browser-Version hat keine lokale Engine.',
          'Modelle auf dem Gerät können keine interaktiven Bildschirme, E-Mail, Aufgaben oder MCP-Tools nutzen.',
          'Die App ist kostenlos; hinzugefügte Cloud-Anbieter rechnen zu eigenen Bedingungen ab.',
          'Es ist ein Assistent mit Gedächtnis und Tools, nicht nur ein Chatfenster.',
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
        label: 'Was ist Kai 9000?',
        anchor: 'what-is-kai-9000',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Modelle auf dem Gerät und Grenzen',
        anchor: 'requirements',
      },
      {
        label: 'So starten Sie',
        anchor: 'getting-started',
      },
      {
        label: 'Durch die Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Datenfluss und Speicherung',
        anchor: 'privacy',
      },
      {
        label: 'Für wen es sich eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Alternativen und Mitbewerber',
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
            text: 'Kai 9000 ist ein kostenloser Open-Source-KI-Assistent für Handy, Desktop und Browser, der standardmäßig Cloud-Anbieter nutzt und heruntergeladene Gemma-4-Modelle auf dem Gerät ausführen kann.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren ihn über einen Store oder Installer, chatten sofort in einer eingebauten kostenlosen Stufe oder tragen eigene Anbieter-Schlüssel ein und nutzen ihn nur offline, wenn Sie in den Einstellungen ein Modell herunterladen.',
          },
        ],
        items: [
          'Pflege: GitHub zeigt Release 3.3.0 vom 2. Oktober 2026 und einen Code-Push vom 24. Oktober 2026; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Kosten und Lizenz: kostenlos unter Apache 2.0, ohne Konto; hinzugefügte Cloud-Anbieter berechnen Ihnen direkt.',
          'Reichweite: Android, iOS, Windows, macOS, Linux und eine Web-App, jeweils mit Store-Eintrag, Installer oder Browser-Link.',
          'Lokale Option: fünf katalogisierte Modelle für das Gerät, von Qwen3 0.6B bis Gemma 4 12B, bei Bedarf heruntergeladen.',
          'Tempo: laut Changelog vier 3.x-Releases zwischen dem 2. August und dem 2. Oktober 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension basiert auf Website, Dokumentation, Repository, Datenschutzerklärung und Store-Einträgen des Projekts, geprüft am 30. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-kai-9000',
        title: 'Was ist Kai 9000?',
        content: [
          '**Kai 9000 ist ein KI-Assistent, der sich Dinge über einzelne Chats hinaus merkt und über Tools handeln kann, statt nur Text zu liefern.** Die Dokumentation nennt dauerhaftes Gedächtnis, einen bearbeitbaren Systemprompt, den das Projekt „Seele“ nennt, einen Hintergrund-„Heartbeat“, der regelmäßig nachsieht, Tools wie Websuche, Kalendereinträge, Benachrichtigungen und Shell-Befehle, MCP-Server-Unterstützung sowie einen interaktiven Modus, in dem das Modell Bildschirme wie Quizze oder Dashboards baut.',
          'Herausgeber ist Simon Schubert aus Berlin unter der Apache-2.0-Lizenz auf [GitHub](https://github.com/SimonSchubert/Kai), als Kai 9000 auf der [Website](https://kai9000.com) und als „Kai - AI“ in den App-Stores. Das Repository beschreibt es als OpenClaw-Alternative für die Hosentasche.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Kai 9000 ist auf jeder Plattform ein normaler Download: Store-Apps für Handys, Installer für den Desktop und eine Browser-Version, ganz ohne Terminal-Schritt.**',
        ],
        columns: [
          'Punkt',
          'Details',
        ],
        rows: [
          {
            Punkt: 'Android',
            Details: '[Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.kai), [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) oder APK auf [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            Punkt: 'iPhone und iPad',
            Details: '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023), ab iOS 15.3; auch Macs mit Apple-Chip',
          },
          {
            Punkt: 'Windows',
            Details: 'MSI auf [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) oder winget',
          },
          {
            Punkt: 'macOS',
            Details: 'DMG auf [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) oder Homebrew',
          },
          {
            Punkt: 'Linux',
            Details: 'DEB, RPM, AppImage, Flatpak oder Tarball auf [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            Punkt: 'Browser',
            Details: '[kai9000.com/app](https://kai9000.com/app/)',
          },
          {
            Punkt: 'Preis',
            Details: 'Kostenlos (Apache 2.0)',
          },
          {
            Punkt: 'Website',
            Details: '[kai9000.com](https://kai9000.com)',
          },
          {
            Punkt: 'Dokumentation',
            Details: '[kai9000.com/docs](https://kai9000.com/docs/)',
          },
          {
            Punkt: 'Datenschutzerklärung',
            Details: '[Datenschutzerklärung von Kai](https://schubert-simon.de/privacy/kai.txt)',
          },
          {
            Punkt: 'Quellcode',
            Details: '[GitHub-Repository](https://github.com/SimonSchubert/Kai)',
          },
        ],
        note: 'Geprüfte Version: 3.3.0, laut [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) am 2. Oktober 2026 veröffentlicht und bei [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) gelistet; der letzte Code-Push im Repository war am 24. Oktober 2026. Der App-Store-Eintrag zeigte bei der Prüfung 3.0.0, iPhone-Nutzer haben daher womöglich einen älteren Build. Installationen per Kommandozeile laut README: brew install --cask simonschubert/tap/kai, winget install SimonSchubert.Kai, yay -S kai-bin.',
      },
      requirements: {
        id: 'requirements',
        title: 'Modelle auf dem Gerät und Grenzen',
        content: [
          '**Die Nutzung auf dem Gerät ist optional und auf einen kurzen Katalog von Modellen beschränkt, die die App von Hugging Face lädt; die [Dokumentation](https://github.com/SimonSchubert/Kai/blob/main/docs/features/on-device-inference.md) des Projekts, zuletzt am 21. Oktober 2026 geprüft, listet sie auf.**',
        ],
        columns: [
          'Modell',
          'Download',
          'Hinweis aus der Doku',
        ],
        rows: [
          {
            Modell: 'Gemma 4 E2B IT',
            Download: '2,59 GB',
            'Hinweis aus der Doku': 'Tool-Aufrufe zuverlässig',
          },
          {
            Modell: 'Gemma 4 E4B IT',
            Download: '3,66 GB',
            'Hinweis aus der Doku': 'Tool-Aufrufe zuverlässig',
          },
          {
            Modell: 'Gemma 4 12B IT',
            Download: '6,88 GB',
            'Hinweis aus der Doku': 'Unter iOS nicht ladbar',
          },
          {
            Modell: 'LFM2.5 1.2B Instruct',
            Download: '736 MB',
            'Hinweis aus der Doku': 'Kleinstes Modell mit Tool-Vorlage',
          },
          {
            Modell: 'Qwen3 0.6B',
            Download: '614 MB',
            'Hinweis aus der Doku': 'In der Praxis nur Chat',
          },
        ],
        note: 'In der Doku genannte Grenzen: auf dem Gerät nur Texteingabe, keine interaktiven Bildschirme, eine verkürzte Tool-Liste, ein 64-Bit-Android-Gerät beziehungsweise unter Linux eine CPU mit AVX2 und keine lokale Engine in der Web-Version. Einen Mindest-RAM nennt die Doku nicht.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So starten Sie',
        content: [
          '**Die Schritte folgen der Einstiegsseite des Projekts; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Wählen Sie aus der Tabelle „Bezugsquelle“ die Store-App oder den Installer für Ihr Gerät.',
          },
          {
            title: 'In der Free-Stufe chatten',
            whyItMatters: 'Öffnen Sie die App und chatten Sie sofort in der eingebauten Free-Stufe, die keinen API-Schlüssel braucht.',
          },
          {
            title: 'Anbieter hinzufügen',
            whyItMatters: 'Fügen Sie in den Einstellungen einen Dienst wie OpenAI, Gemini oder Anthropic oder eine OpenAI-kompatible Adresse hinzu; mehrere lassen sich zu einer Ausweichkette ordnen.',
          },
          {
            title: 'Optional lokal gehen',
            whyItMatters: 'Laden Sie in der Karte „Local Model“ ein Katalogmodell herunter oder importieren Sie eine .litertlm-Datei; erst dann läuft der Chat auf dem Gerät.',
          },
          {
            title: 'Über Tools entscheiden',
            whyItMatters: 'Aktivieren Sie Tools wie Shell, E-Mail oder die Linux-Sandbox unter Android nur, wenn der Assistent handeln soll; laut Datenschutzerklärung sind Tools standardmäßig aus und brauchen Ihre Erlaubnis.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Durch die Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus README und Dokumentation des Projekts.**',
        ],
        items: [
          '**Gedächtnis und Persönlichkeit.** Dauerhaftes Gedächtnis, das der Assistent speichert und abruft, plus ein bearbeitbarer Systemprompt.',
          '**Tools und MCP.** Websuche, Benachrichtigungen, Kalendereinträge, Shell-Befehle, E-Mail und geplante Aufgaben bei Remote-Modellen sowie Verbindungen zu MCP-Servern.',
          '**Interaktive Bildschirme.** Das Modell kann Quizze, Dashboards und Rezeptkarten bauen, die Sie per Tippen bedienen; nur mit Remote-Modellen.',
          '**Anbieter und Ausweichkette.** Rund 30 Cloud-Anbieter und jede OpenAI-kompatible Adresse, in der von Ihnen festgelegten Reihenfolge angefragt.',
          '**Linux-Sandbox unter Android.** Eine optionale Alpine- oder Debian-Umgebung, in der der Assistent ohne Root Befehle und Skripte ausführen kann.',
          '**Extras.** Sprachausgabe und Bildanhänge an Remote-Modelle.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Speicherung',
        content: [
          '**Was das Gerät verlässt, hängt vom gewählten Modell ab.** Bei einem Cloud-Anbieter oder der eingebauten Free-Stufe gehen Ihre Nachrichten und die jedem Prompt beigefügten Erinnerungen an diesen Dienst. Die [Datenschutzerklärung](https://schubert-simon.de/privacy/kai.txt) sagt, Kai habe kein Konto, keine Analyse und keine eigenen Server, die Ihre Daten erhalten; es gälten die Bedingungen des Anbieters, und sie nennt beispielhaft die Free-Stufe von Mistral AI und gibt an, dass nach deren Bedingungen Ein- und Ausgaben für das Training verwendet werden können. Außerdem sende das Standort-Tool Ihre IP-Adresse an ip-api.com, und Tools, die SMS- oder Kalenderdaten lesen, gäben diese an den KI-Dienst weiter. Bei einem Modell auf dem Gerät bleibt die Inferenz laut Doku auf dem Gerät.',
          'Zur Speicherung sagen README und Website, Unterhaltungen seien verschlüsselt, während die [Verschlüsselungsdokumentation](https://github.com/SimonSchubert/Kai/blob/main/docs/features/encryption.md) des Projekts angibt, dass sie unter Android, iOS und Desktop in einer lokalen SQLite-Datenbank liegen, die durch die App-Sandbox des Betriebssystems geschützt ist; API-Schlüssel und Passwörter liegen in verschlüsselten Einstellungen. [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) kennzeichnet die App mit dem Anti-Feature „Non-Free Network Services“. Die Erklärung datiert vom 3. Februar 2026, also vor den 3.x-Releases, und die von uns gelesenen Quellen sagen nicht, wer den Proxy der Free-Stufe betreibt oder was er speichert.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind die eigenen Aussagen des Projekts; PromptQuorum hat weder den Netzwerkverkehr noch die Speicherung der App geprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen es sich eignet',
        items: [
          '**Menschen, die einen Assistenten für alle Geräte wollen,** mit freier Open-Source-Lizenz und der Wahl zwischen Cloud, eigenem Server oder Modell auf dem Gerät.',
          '**Tüftler, die Gedächtnis, Tools und MCP mögen** und die Doku lesen, um Funktionen einzuschalten.',
          '**Nutzer von Ollama oder LM Studio,** die ein Handy- oder Desktop-Frontend für den eigenen Server wollen, da eine eigene Basisadresse unterstützt wird.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität im Praxistest.** PromptQuorum hat die App nicht ausgeführt; Antwortqualität, Geschwindigkeit, Akku- und Speicherverbrauch der Modelle auf dem Gerät sind nicht bewertet.',
          '**Die Free-Stufe.** Betreiber, Datenspeicherung, Nutzungsgrenzen und Modelle werden in den von uns gelesenen Quellen nicht beschrieben.',
          '**Der iPhone-Build.** Der App Store zeigte 3.0.0, andere Kanäle 3.3.0; welche Funktionen iPhone-Nutzer erhalten, bleibt unklar.',
          '**Unabhängige Prüfungen.** Ein Sicherheits- oder Datenschutz-Audit der App durch Dritte haben wir nicht gefunden.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Alternativen und Mitbewerber',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Wichtigster Unterschied',
        ],
        rows: [
          {
            App: '[Jan](/de/power-local-llm/jan-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0 (Variante)',
            'Wichtigster Unterschied': 'Datenschutzorientierter Open-Source-Desktop-Chat mit eigener lokaler Engine',
          },
          {
            App: '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            Plattformen: 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Open-Source-Handy-App, die auf Modelle auf dem Gerät ausgerichtet ist',
          },
          {
            App: '[Msty](/de/power-local-llm/msty-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Freemium / Closed Source',
            'Wichtigster Unterschied': 'Desktop-Client mit Closed Source für lokale und Cloud-Modelle',
          },
          {
            App: '[OpenClaw](/de/power-local-llm/openclaw-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Open-Source-Agent-Framework; das Kai-Repository nennt sich eine Alternative im Taschenformat',
          },
        ],
        note: 'Details der Mitbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen jeder App auf deren eigener Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann es meinen eigenen Ollama-Server nutzen?',
            a: 'Ja. Der OpenAI-kompatible Dienst verwendet standardmäßig localhost:11434/v1, die übliche Ollama-Adresse, und akzeptiert jede eigene Basisadresse; ab Android 17 fragt die App vor dem Zugriff auf einen Host im lokalen Netz nach der Berechtigung.',
          },
          {
            q: 'Was passiert, wenn ein Anbieter ausfällt?',
            a: 'Kai versucht es zweimal erneut, probiert dann den nächsten konfigurierten Dienst und zeigt, welcher geantwortet hat. Ein Fehler beim Modell auf dem Gerät wird nie stillschweigend an die Cloud weitergereicht, und ein lokales Modell dient nie als Ausweichziel.',
          },
          {
            q: 'Gibt es eine gehostete Web-Version?',
            a: 'Ja, unter [kai9000.com/app](https://kai9000.com/app/); da die Web-Version keine lokale Engine hat, braucht sie einen entfernten Anbieter oder die Free-Stufe.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Kai 9000 ist ein kostenloser Assistent unter Apache 2.0 für Handy, Desktop und Browser, der Gedächtnis und Tools zum Kern macht und die Wahl zwischen Cloud-Anbietern, eigenem Server und heruntergeladenen Modellen auf dem Gerät lässt. Dem stehen gegenüber: Der lokale Weg ist optional und enger als der Cloud-Weg, die eigenen Seiten des Projekts widersprechen sich bei der Speicherung von Unterhaltungen, und PromptQuorum konnte die App nicht testen. Er passt zu Menschen, die einen quelloffenen Assistenten für alle Geräte wollen; wer eine Handy-App rund um lokale Modelle sucht, kann [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen, Desktop-Nutzer [Jan](/de/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Kai-9000-Website](https://kai9000.com) — Überblick, Plattformen und Download-Links, geprüft am 30. Oktober 2026.',
          '[Kai-Dokumentation](https://kai9000.com/docs/) — Funktionen, Inferenz auf dem Gerät, Anbieter und Verschlüsselung.',
          '[GitHub-Repository und Releases](https://github.com/SimonSchubert/Kai) — Apache-2.0-Lizenz, Version 3.3.0 vom 2. Oktober 2026, Changelog.',
          '[Datenschutzerklärung von Kai](https://schubert-simon.de/privacy/kai.txt) — Datenverarbeitung, gültig ab 3. Februar 2026.',
          'Einträge im [App Store](https://apps.apple.com/us/app/kai-ai/id6758148023) und bei [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) — iOS-Version und Anforderungen, Anti-Feature-Kennzeichnung.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — eine Open-Source-Handy-App für lokale Modelle.',
          '[Jan-Rezension](/de/power-local-llm/jan-review) — eine Open-Source-Desktop-App mit eigener Engine.',
          '[OpenClaw-Rezension](/de/power-local-llm/openclaw-review) — das Agent-Framework, gegen das sich Kai positioniert.',
          '[Lokale Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich für Chat-Apps.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/kai-9000-review-hero-es.webp',
    title: 'Reseña de Kai 9000: asistente de IA gratuito y de código abierto, en la nube o en el dispositivo',
    seoTitle: 'Reseña de Kai 9000: asistente de IA abierto, nube o local',
    intro: 'Kai 9000 es un asistente de IA gratuito con licencia Apache 2.0 del desarrollador berlinés Simon Schubert que funciona en Android, iOS, Windows, macOS, Linux y en el navegador. Por defecto habla con proveedores en la nube y, de forma opcional, puede ejecutar en el dispositivo modelos descargados. Esta reseña se limita al sitio web, la documentación, el repositorio y las fichas de tienda del proyecto, revisados el 30 de octubre de 2026; PromptQuorum no lo ha ejecutado.',
    metaDescription: 'Reseña de Kai 9000: asistente de IA gratuito y abierto para móvil, escritorio y web. Nube por defecto, Gemma 4 local opcional. Datos y límites.',
    twitterDescription: 'Reseña de Kai 9000: un asistente abierto y gratuito para todas las plataformas. Nube por defecto, modelos locales opcionales. Qué sale del dispositivo y qué no pudimos verificar.',
    audience: 'Personas que quieren un asistente de IA gratuito y de código abierto para móvil, escritorio y navegador y necesitan saber qué es local, qué va a la nube, cuánto cuesta y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Kai 9000',
    targetKeywords: [
      'reseña kai 9000',
      'kai 9000 ia',
      'asistente ia código abierto con memoria',
      'asistente ia gratis android ios escritorio',
      'gemma 4 en el dispositivo app',
      'alternativa a openclaw móvil',
    ],
    current_hardware_mentioned: [
      'móvil Android',
      'iPhone',
      'PC con Windows',
      'Mac',
      'Gemma 4',
    ],
    leadAnswerBlock: '**Kai 9000 (versión 3.3.0, publicada el 2 de octubre de 2026) es un asistente de código abierto con memoria persistente que solo funciona en local si descargas un modelo para el dispositivo.** Por defecto envía tus mensajes a un servicio en la nube. PromptQuorum no lo ha instalado ni probado; todo lo que se afirma aquí procede de las fuentes del propio proyecto.',
    quickAnswerTop: {
      es: {
        question: '¿Kai 9000 funciona sin conexión?',
        answer: 'Según la documentación del proyecto, solo con un modelo descargado en el dispositivo: Gemma 4 y algunos modelos más pequeños se ejecutan con LiteRT de Google en Android, iOS y escritorio y no necesitan internet tras la descarga. Todo lo demás, incluido el nivel Free integrado que no pide clave de API, va a un servicio remoto.',
        bullets: [
          'La versión de navegador no tiene motor local.',
          'Los modelos del dispositivo no pueden usar pantallas interactivas, correo, tareas ni herramientas MCP.',
          'La app es gratuita; los proveedores en la nube que añadas te cobran según sus propias condiciones.',
          'Es un asistente con memoria y herramientas, no solo una ventana de chat.',
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
        label: '¿Qué es Kai 9000?',
        anchor: 'what-is-kai-9000',
      },
      {
        label: 'Cómo obtenerla',
        anchor: 'get-it',
      },
      {
        label: 'Modelos en el dispositivo y límites',
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
        label: 'Flujo de datos y almacenamiento',
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
            text: 'Kai 9000 es un asistente de IA gratuito y de código abierto para móvil, escritorio y navegador que usa proveedores en la nube por defecto y puede ejecutar modelos Gemma 4 descargados en el dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'Lo instalas desde una tienda o un instalador, chateas al instante en un nivel gratuito integrado o añades tus propias claves de proveedor, y solo pasas a uso sin conexión si descargas un modelo en los ajustes.',
          },
        ],
        items: [
          'Mantenimiento: GitHub muestra la versión 3.3.0 del 2 de octubre de 2026 y un push de código del 24 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Coste y licencia: gratuito con Apache 2.0, sin cuenta; los proveedores en la nube que añadas te cobran directamente.',
          'Alcance: Android, iOS, Windows, macOS, Linux y una app web, cada uno con ficha de tienda, instalador o enlace de navegador.',
          'Opción local: cinco modelos de catálogo para el dispositivo, de Qwen3 0.6B a Gemma 4 12B, descargados bajo demanda.',
          'Ritmo: cuatro versiones 3.x entre el 2 de agosto y el 2 de octubre de 2026, según el registro de cambios.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, la documentación, el repositorio, la política de privacidad y las fichas de tienda del proyecto, revisados el 30 de octubre de 2026. PromptQuorum no ha instalado, probado ni medido la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-kai-9000',
        title: '¿Qué es Kai 9000?',
        content: [
          '**Kai 9000 es un asistente de IA que recuerda cosas entre conversaciones y puede actuar mediante herramientas, no solo responder con texto.** La documentación enumera memoria persistente, un prompt de sistema editable que el proyecto llama alma, un «latido» en segundo plano que revisa pendientes cada cierto tiempo, herramientas como búsqueda web, eventos de calendario, notificaciones y comandos de shell, compatibilidad con servidores MCP y un modo interactivo en el que el modelo construye pantallas como cuestionarios o paneles.',
          'Lo publica Simon Schubert, de Berlín, con licencia Apache 2.0 en [GitHub](https://github.com/SimonSchubert/Kai), como Kai 9000 en el [sitio web](https://kai9000.com) y como «Kai - AI» en las tiendas de apps. El repositorio lo describe como una alternativa a OpenClaw para el bolsillo.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**Kai 9000 es una descarga normal en cada plataforma: apps de tienda para móviles, instaladores para escritorio y una versión de navegador, sin pasos en la terminal.**',
        ],
        columns: [
          'Elemento',
          'Detalles',
        ],
        rows: [
          {
            Elemento: 'Android',
            Detalles: '[Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.kai), [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) o APK en [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            Elemento: 'iPhone y iPad',
            Detalles: '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023), iOS 15.3 o posterior; también Mac con chip Apple',
          },
          {
            Elemento: 'Windows',
            Detalles: 'MSI en [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) o winget',
          },
          {
            Elemento: 'macOS',
            Detalles: 'DMG en [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) o Homebrew',
          },
          {
            Elemento: 'Linux',
            Detalles: 'DEB, RPM, AppImage, Flatpak o tarball en [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            Elemento: 'Navegador',
            Detalles: '[kai9000.com/app](https://kai9000.com/app/)',
          },
          {
            Elemento: 'Precio',
            Detalles: 'Gratis (Apache 2.0)',
          },
          {
            Elemento: 'Sitio web',
            Detalles: '[kai9000.com](https://kai9000.com)',
          },
          {
            Elemento: 'Documentación',
            Detalles: '[kai9000.com/docs](https://kai9000.com/docs/)',
          },
          {
            Elemento: 'Política de privacidad',
            Detalles: '[Política de privacidad de Kai](https://schubert-simon.de/privacy/kai.txt)',
          },
          {
            Elemento: 'Código fuente',
            Detalles: '[Repositorio de GitHub](https://github.com/SimonSchubert/Kai)',
          },
        ],
        note: 'Versión revisada: 3.3.0, publicada el 2 de octubre de 2026 según [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) y listada en [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/); el último push de código del repositorio fue el 24 de octubre de 2026. La ficha de la App Store mostraba 3.0.0 al revisarla, así que los usuarios de iPhone podrían tener una compilación anterior. Instalación por línea de comandos según el README: brew install --cask simonschubert/tap/kai, winget install SimonSchubert.Kai, yay -S kai-bin.',
      },
      requirements: {
        id: 'requirements',
        title: 'Modelos en el dispositivo y límites',
        content: [
          '**El uso en el dispositivo es opcional y se limita a un catálogo corto de modelos que la app descarga de Hugging Face; la [documentación](https://github.com/SimonSchubert/Kai/blob/main/docs/features/on-device-inference.md) del proyecto, verificada por última vez el 21 de octubre de 2026, los enumera.**',
        ],
        columns: [
          'Modelo',
          'Descarga',
          'Nota de la doc',
        ],
        rows: [
          {
            Modelo: 'Gemma 4 E2B IT',
            Descarga: '2.59 GB',
            'Nota de la doc': 'Llamadas a herramientas fiables',
          },
          {
            Modelo: 'Gemma 4 E4B IT',
            Descarga: '3.66 GB',
            'Nota de la doc': 'Llamadas a herramientas fiables',
          },
          {
            Modelo: 'Gemma 4 12B IT',
            Descarga: '6.88 GB',
            'Nota de la doc': 'No se puede cargar en iOS',
          },
          {
            Modelo: 'LFM2.5 1.2B Instruct',
            Descarga: '736 MB',
            'Nota de la doc': 'El modelo más pequeño con plantilla de herramientas',
          },
          {
            Modelo: 'Qwen3 0.6B',
            Descarga: '614 MB',
            'Nota de la doc': 'En la práctica, solo chat',
          },
        ],
        note: 'Límites que cita la doc: solo entrada de texto en el dispositivo, sin pantallas interactivas, una lista de herramientas reducida, un dispositivo Android de 64 bits o, en Linux, una CPU con AVX2, y ningún motor local en la versión web. La doc no da una cifra mínima de RAM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen la página de primeros pasos del proyecto; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Elige en la tabla «Cómo obtenerla» la app de tienda o el instalador para tu dispositivo.',
          },
          {
            title: 'Chatea en el nivel Free',
            whyItMatters: 'Abre la app y chatea de inmediato en el nivel Free integrado, que no necesita clave de API.',
          },
          {
            title: 'Añade un proveedor',
            whyItMatters: 'En Ajustes añade un servicio como OpenAI, Gemini o Anthropic, o una dirección compatible con OpenAI; varios pueden ordenarse en una cadena de respaldo.',
          },
          {
            title: 'Pasa a local si quieres',
            whyItMatters: 'En la tarjeta Local Model descarga un modelo del catálogo o importa un archivo .litertlm; solo entonces el chat se ejecuta en el dispositivo.',
          },
          {
            title: 'Decide sobre las herramientas',
            whyItMatters: 'Activa herramientas como shell, correo o el sandbox de Linux en Android solo si quieres que el asistente actúe; según la política de privacidad, las herramientas vienen desactivadas y necesitan tu permiso.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede del README y la documentación del proyecto.**',
        ],
        items: [
          '**Memoria y personalidad.** Memoria persistente que el asistente guarda y recupera, más un prompt de sistema editable.',
          '**Herramientas y MCP.** Búsqueda web, notificaciones, eventos de calendario, comandos de shell, correo y tareas programadas con modelos remotos, además de conexiones a servidores MCP.',
          '**Pantallas interactivas.** El modelo puede construir cuestionarios, paneles y fichas de recetas que manejas con toques; solo con modelos remotos.',
          '**Proveedores y respaldo.** Unos 30 proveedores en la nube y cualquier dirección compatible con OpenAI, consultados en el orden que definas.',
          '**Sandbox de Linux en Android.** Un entorno opcional Alpine o Debian donde el asistente puede ejecutar comandos y scripts sin root.',
          '**Extras.** Lectura de texto en voz alta y adjuntos de imagen para modelos remotos.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y almacenamiento',
        content: [
          '**Lo que sale del dispositivo depende del modelo que elijas.** Con un proveedor en la nube o el nivel Free integrado, tus mensajes y los recuerdos añadidos a cada prompt van a ese servicio. La [política de privacidad](https://schubert-simon.de/privacy/kai.txt) dice que Kai no tiene cuenta, ni analítica, ni servidores propios que reciban tus datos, que se aplican las condiciones del proveedor, y nombra como ejemplo el nivel gratuito de Mistral AI, indicando que, según las condiciones de ese nivel, las entradas y salidas pueden usarse para entrenar. Añade que la herramienta de ubicación envía tu dirección IP a ip-api.com y que las herramientas que leen SMS o datos del calendario pasan esos datos al servicio de IA. Con un modelo en el dispositivo, la doc dice que la inferencia se queda en el dispositivo.',
          'En cuanto al almacenamiento, el README y el sitio web dicen que las conversaciones están cifradas, mientras que la [documentación de cifrado](https://github.com/SimonSchubert/Kai/blob/main/docs/features/encryption.md) del proyecto indica que en Android, iOS y escritorio se guardan en una base de datos SQLite local protegida por el sandbox de apps del sistema operativo, con las claves de API y contraseñas en ajustes cifrados. [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) etiqueta la app con la antifunción Non-Free Network Services. La política es del 3 de febrero de 2026, anterior a las versiones 3.x, y las fuentes que leímos no dicen quién opera el proxy del nivel Free ni qué conserva.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del propio proyecto; PromptQuorum no ha auditado el tráfico de red ni el almacenamiento de la app.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas que quieren un asistente en todos sus dispositivos,** con licencia abierta y gratuita y la opción de nube, servidor propio o modelo en el dispositivo.',
          '**Aficionados a la memoria, las herramientas y MCP** que leerán la doc para activar funciones.',
          '**Usuarios de Ollama o LM Studio** que quieren un cliente móvil o de escritorio para su propio servidor, ya que admite una dirección base personalizada.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en la práctica.** PromptQuorum no ejecutó la app, así que no se evalúan la calidad de respuesta, la velocidad, la batería ni el uso de memoria de los modelos del dispositivo.',
          '**El nivel Free.** Su operador, la conservación de datos, los límites de uso y los modelos no se describen en las fuentes que leímos.',
          '**La compilación de iPhone.** La App Store mostraba 3.0.0 y otros canales 3.3.0, así que no queda claro qué funciones tienen los usuarios de iPhone.',
          '**Comprobaciones independientes.** No encontramos ninguna auditoría de seguridad o privacidad de la app por terceros.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: [
          'App',
          'Plataformas',
          'Precio / licencia',
          'Diferencia clave',
        ],
        rows: [
          {
            App: '[Jan](/es/power-local-llm/jan-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / Apache 2.0 (variante)',
            'Diferencia clave': 'Cliente de chat de escritorio abierto y centrado en la privacidad, con motor local propio',
          },
          {
            App: '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'App móvil abierta pensada para modelos que se ejecutan en el dispositivo',
          },
          {
            App: '[Msty](/es/power-local-llm/msty-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Freemium / código cerrado',
            'Diferencia clave': 'Cliente de escritorio de código cerrado para modelos locales y en la nube',
          },
          {
            App: '[OpenClaw](/es/power-local-llm/openclaw-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Framework de agentes abierto; el repositorio de Kai se presenta como alternativa de bolsillo',
          },
        ],
        note: 'Los detalles de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas de cada app en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puede usar mi propio servidor Ollama?',
            a: 'Sí. El servicio compatible con OpenAI usa por defecto localhost:11434/v1, la dirección habitual de Ollama, y acepta cualquier dirección base personalizada; desde Android 17 la app pide permiso de red local antes de llegar a un host de la LAN.',
          },
          {
            q: '¿Qué pasa cuando falla un proveedor?',
            a: 'Kai reintenta dos veces, prueba después el siguiente servicio configurado y muestra cuál respondió. Un fallo del modelo en el dispositivo nunca se pasa en silencio a la nube, y un modelo local nunca se usa como destino de respaldo.',
          },
          {
            q: '¿Hay una versión web alojada?',
            a: 'Sí, en [kai9000.com/app](https://kai9000.com/app/); como la versión web no tiene motor local, necesita un proveedor remoto o el nivel Free.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Kai 9000 es un asistente gratuito con licencia Apache 2.0 para móviles, escritorio y navegador que pone la memoria y las herramientas en el centro y deja elegir entre proveedores en la nube, tu propio servidor y modelos descargados en el dispositivo. A cambio, la vía local es opcional y más estrecha que la de la nube, las propias páginas del proyecto discrepan sobre cómo se guardan las conversaciones y PromptQuorum no pudo probarlo. Encaja con quienes quieren un asistente abierto para todos sus dispositivos; quien busque una app móvil centrada en modelos locales puede comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review), y en escritorio [Jan](/es/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Kai 9000](https://kai9000.com) — resumen, plataformas y enlaces de descarga, revisado el 30 de octubre de 2026.',
          '[Documentación de Kai](https://kai9000.com/docs/) — funciones, inferencia en el dispositivo, proveedores y cifrado.',
          '[Repositorio de GitHub y versiones](https://github.com/SimonSchubert/Kai) — licencia Apache 2.0, versión 3.3.0 del 2 de octubre de 2026, registro de cambios.',
          '[Política de privacidad de Kai](https://schubert-simon.de/privacy/kai.txt) — tratamiento de datos, vigente desde el 3 de febrero de 2026.',
          'Fichas de la [App Store](https://apps.apple.com/us/app/kai-ai/id6758148023) y de [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) — versión y requisitos de iOS, etiqueta de antifunción.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — una app móvil abierta para modelos locales.',
          '[Reseña de Jan](/es/power-local-llm/jan-review) — una app de escritorio abierta con motor propio.',
          '[Reseña de OpenClaw](/es/power-local-llm/openclaw-review) — el framework de agentes frente al que se posiciona Kai.',
          '[Asistentes de chat con LLM locales: comparativa](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de la categoría de apps de chat.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/kai-9000-review-hero-fr.webp',
    title: 'Test de Kai 9000 : assistant IA gratuit et open source, cloud ou sur l\'appareil',
    seoTitle: 'Test de Kai 9000 : assistant IA libre, cloud ou local',
    intro: 'Kai 9000 est un assistant IA gratuit sous licence Apache 2.0, créé par le développeur berlinois Simon Schubert, qui fonctionne sur Android, iOS, Windows, macOS, Linux et dans le navigateur. Par défaut, il passe par des fournisseurs cloud et peut, en option, exécuter des modèles téléchargés sur l\'appareil. Ce test s\'en tient au site web, à la documentation, au dépôt et aux fiches de boutique du projet, consultés le 30 octobre 2026 ; PromptQuorum ne l\'a pas exécuté.',
    metaDescription: 'Test de Kai 9000 : assistant IA gratuit et open source pour mobile, bureau et web. Cloud par défaut, Gemma 4 local en option. Données et limites.',
    twitterDescription: 'Test de Kai 9000 : un assistant open source gratuit pour toutes les plateformes. Cloud par défaut, modèles locaux en option. Ce qui quitte l\'appareil et ce que nous n\'avons pas pu vérifier.',
    audience: 'Les personnes qui cherchent un assistant IA gratuit et open source pour mobile, bureau et navigateur et veulent savoir ce qui est local, ce qui part dans le cloud, ce qu\'il coûte et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Kai 9000',
    targetKeywords: [
      'test kai 9000',
      'kai 9000 ia',
      'assistant ia open source avec mémoire',
      'assistant ia gratuit android ios bureau',
      'gemma 4 sur appareil application',
      'alternative openclaw mobile',
    ],
    current_hardware_mentioned: [
      'téléphone Android',
      'iPhone',
      'PC Windows',
      'Mac',
      'Gemma 4',
    ],
    leadAnswerBlock: '**Kai 9000 (version 3.3.0, publiée le 2 octobre 2026) est un assistant open source à mémoire persistante qui ne tourne en local que si vous téléchargez un modèle sur l\'appareil.** Par défaut, il envoie vos messages à un service cloud. PromptQuorum ne l\'a ni installé ni testé ; chaque affirmation ici provient des sources du projet lui-même.',
    quickAnswerTop: {
      fr: {
        question: 'Kai 9000 fonctionne-t-il hors ligne ?',
        answer: 'D\'après la documentation du projet, seulement avec un modèle téléchargé sur l\'appareil : Gemma 4 et quelques modèles plus petits tournent via LiteRT de Google sur Android, iOS et bureau, sans internet après le téléchargement. Tout le reste, y compris l\'offre Free intégrée qui n\'exige pas de clé d\'API, passe par un service distant.',
        bullets: [
          'La version navigateur n\'a pas de moteur local.',
          'Les modèles sur l\'appareil ne peuvent pas utiliser les écrans interactifs, l\'e-mail, les tâches ni les outils MCP.',
          'L\'application est gratuite ; les fournisseurs cloud que vous ajoutez facturent selon leurs propres conditions.',
          'C\'est un assistant avec mémoire et outils, pas seulement une fenêtre de discussion.',
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
        label: 'Qu\'est-ce que Kai 9000 ?',
        anchor: 'what-is-kai-9000',
      },
      {
        label: 'Où l\'obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Modèles sur l\'appareil et limites',
        anchor: 'requirements',
      },
      {
        label: 'Pour démarrer',
        anchor: 'getting-started',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Flux de données et stockage',
        anchor: 'privacy',
      },
      {
        label: 'À qui il s\'adresse',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n\'avons pas pu vérifier',
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
            text: 'Kai 9000 est un assistant IA gratuit et open source pour mobile, bureau et navigateur, qui utilise des fournisseurs cloud par défaut et peut exécuter des modèles Gemma 4 téléchargés sur l\'appareil.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez depuis une boutique ou un installateur, discutez aussitôt avec une offre gratuite intégrée ou ajoutez vos propres clés de fournisseur, et ne passez en mode hors ligne que si vous téléchargez un modèle dans les réglages.',
          },
        ],
        items: [
          'Maintenance : GitHub affiche la version 3.3.0 du 2 octobre 2026 et un push de code du 24 octobre 2026 ; aucun avertissement de projet abandonné ne s\'applique donc.',
          'Coût et licence : gratuit sous Apache 2.0, sans compte ; les fournisseurs cloud que vous ajoutez vous facturent directement.',
          'Portée : Android, iOS, Windows, macOS, Linux et une application web, chacun avec une fiche de boutique, un installateur ou un lien navigateur.',
          'Option locale : cinq modèles de catalogue pour l\'appareil, de Qwen3 0.6B à Gemma 4 12B, téléchargés à la demande.',
          'Rythme : quatre versions 3.x entre le 2 août et le 2 octobre 2026, selon le journal des modifications.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur le site web, la documentation, le dépôt, la politique de confidentialité et les fiches de boutique du projet, consultés le 30 octobre 2026. PromptQuorum n\'a ni installé, ni testé, ni mesuré l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-kai-9000',
        title: 'Qu\'est-ce que Kai 9000 ?',
        content: [
          '**Kai 9000 est un assistant IA qui retient des informations d\'une conversation à l\'autre et peut agir grâce à des outils, au lieu de se limiter à répondre par du texte.** La documentation cite une mémoire persistante, un prompt système modifiable que le projet appelle l\'âme, un « battement de cœur » en arrière-plan qui fait régulièrement le point, des outils comme la recherche web, les événements d\'agenda, les notifications et les commandes shell, la prise en charge des serveurs MCP et un mode interactif où le modèle construit des écrans tels que des quiz ou des tableaux de bord.',
          'Il est publié par Simon Schubert, de Berlin, sous licence Apache 2.0 sur [GitHub](https://github.com/SimonSchubert/Kai), sous le nom Kai 9000 sur le [site web](https://kai9000.com) et « Kai - AI » dans les boutiques d\'applications. Le dépôt le présente comme une alternative à OpenClaw de poche.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**Kai 9000 se télécharge normalement sur chaque plateforme : applications de boutique pour les mobiles, installateurs pour le bureau et version navigateur, sans aucune étape dans le terminal.**',
        ],
        columns: [
          'Élément',
          'Détails',
        ],
        rows: [
          {
            'Élément': 'Android',
            'Détails': '[Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.kai), [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) ou APK sur [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            'Élément': 'iPhone et iPad',
            'Détails': '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023), iOS 15.3 ou ultérieur ; Mac Apple silicon aussi',
          },
          {
            'Élément': 'Windows',
            'Détails': 'MSI sur [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) ou winget',
          },
          {
            'Élément': 'macOS',
            'Détails': 'DMG sur [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) ou Homebrew',
          },
          {
            'Élément': 'Linux',
            'Détails': 'DEB, RPM, AppImage, Flatpak ou archive sur [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            'Élément': 'Navigateur',
            'Détails': '[kai9000.com/app](https://kai9000.com/app/)',
          },
          {
            'Élément': 'Prix',
            'Détails': 'Gratuit (Apache 2.0)',
          },
          {
            'Élément': 'Site web',
            'Détails': '[kai9000.com](https://kai9000.com)',
          },
          {
            'Élément': 'Documentation',
            'Détails': '[kai9000.com/docs](https://kai9000.com/docs/)',
          },
          {
            'Élément': 'Politique de confidentialité',
            'Détails': '[Politique de confidentialité de Kai](https://schubert-simon.de/privacy/kai.txt)',
          },
          {
            'Élément': 'Code source',
            'Détails': '[Dépôt GitHub](https://github.com/SimonSchubert/Kai)',
          },
        ],
        note: 'Version testée : 3.3.0, publiée le 2 octobre 2026 selon [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) et listée sur [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) ; le dernier push de code du dépôt date du 24 octobre 2026. La fiche App Store affichait 3.0.0 lors de la vérification ; les utilisateurs d\'iPhone peuvent donc avoir une version plus ancienne. Installations en ligne de commande d\'après le README : brew install --cask simonschubert/tap/kai, winget install SimonSchubert.Kai, yay -S kai-bin.',
      },
      requirements: {
        id: 'requirements',
        title: 'Modèles sur l\'appareil et limites',
        content: [
          '**L\'usage sur l\'appareil est facultatif et limité à un court catalogue de modèles que l\'application télécharge depuis Hugging Face ; la [documentation](https://github.com/SimonSchubert/Kai/blob/main/docs/features/on-device-inference.md) du projet, vérifiée pour la dernière fois le 21 octobre 2026, les énumère.**',
        ],
        columns: [
          'Modèle',
          'Téléchargement',
          'Remarque de la doc',
        ],
        rows: [
          {
            'Modèle': 'Gemma 4 E2B IT',
            'Téléchargement': '2.59 GB',
            'Remarque de la doc': 'Appels d\'outils fiables',
          },
          {
            'Modèle': 'Gemma 4 E4B IT',
            'Téléchargement': '3.66 GB',
            'Remarque de la doc': 'Appels d\'outils fiables',
          },
          {
            'Modèle': 'Gemma 4 12B IT',
            'Téléchargement': '6.88 GB',
            'Remarque de la doc': 'Ne se charge pas sur iOS',
          },
          {
            'Modèle': 'LFM2.5 1.2B Instruct',
            'Téléchargement': '736 MB',
            'Remarque de la doc': 'Plus petit modèle avec modèle d\'outils',
          },
          {
            'Modèle': 'Qwen3 0.6B',
            'Téléchargement': '614 MB',
            'Remarque de la doc': 'Discussion seule en pratique',
          },
        ],
        note: 'Limites citées par la doc : saisie texte uniquement sur l\'appareil, pas d\'écrans interactifs, une liste d\'outils réduite, un appareil Android 64 bits ou, sous Linux, un processeur avec AVX2, et aucun moteur local dans la version web. La doc ne donne pas de RAM minimale.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour démarrer',
        content: [
          '**Les étapes suivent la page de prise en main du projet ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Choisissez dans le tableau « Où l\'obtenir » l\'application de boutique ou l\'installateur pour votre appareil.',
          },
          {
            title: 'Discuter avec l\'offre Free',
            whyItMatters: 'Ouvrez l\'application et discutez aussitôt avec l\'offre Free intégrée, qui n\'exige pas de clé d\'API.',
          },
          {
            title: 'Ajouter un fournisseur',
            whyItMatters: 'Dans les réglages, ajoutez un service comme OpenAI, Gemini ou Anthropic, ou une adresse compatible OpenAI ; plusieurs peuvent être ordonnés en chaîne de repli.',
          },
          {
            title: 'Passer en local si besoin',
            whyItMatters: 'Dans la carte Local Model, téléchargez un modèle du catalogue ou importez un fichier .litertlm ; ce n\'est qu\'alors que la discussion s\'exécute sur l\'appareil.',
          },
          {
            title: 'Décider pour les outils',
            whyItMatters: 'N\'activez des outils comme le shell, l\'e-mail ou le bac à sable Linux sous Android que si vous voulez que l\'assistant agisse ; selon la politique de confidentialité, les outils sont désactivés par défaut et exigent votre autorisation.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient du README et de la documentation du projet.**',
        ],
        items: [
          '**Mémoire et personnalité.** Une mémoire persistante que l\'assistant enregistre et rappelle, plus un prompt système modifiable.',
          '**Outils et MCP.** Recherche web, notifications, événements d\'agenda, commandes shell, e-mail et tâches planifiées avec les modèles distants, ainsi que des connexions à des serveurs MCP.',
          '**Écrans interactifs.** Le modèle peut construire des quiz, des tableaux de bord et des fiches de recettes que vous parcourez en touchant l\'écran ; modèles distants uniquement.',
          '**Fournisseurs et repli.** Environ 30 fournisseurs cloud et toute adresse compatible OpenAI, essayés dans l\'ordre que vous définissez.',
          '**Bac à sable Linux sous Android.** Un environnement Alpine ou Debian facultatif où l\'assistant peut exécuter des commandes et des scripts sans root.',
          '**Extras.** Synthèse vocale et pièces jointes image pour les modèles distants.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et stockage',
        content: [
          '**Ce qui quitte l\'appareil dépend du modèle choisi.** Avec un fournisseur cloud ou l\'offre Free intégrée, vos messages et les souvenirs ajoutés à chaque prompt partent vers ce service. La [politique de confidentialité](https://schubert-simon.de/privacy/kai.txt) indique que Kai n\'a ni compte, ni outil d\'analyse, ni serveur propre recevant vos données, que les conditions du fournisseur s\'appliquent, et cite à titre d\'exemple l\'offre gratuite de Mistral AI, en précisant que, selon les conditions de cette offre, les entrées et sorties peuvent servir à l\'entraînement. Elle ajoute que l\'outil de localisation envoie votre adresse IP à ip-api.com et que les outils lisant des SMS ou des données d\'agenda transmettent ces données au service d\'IA. Avec un modèle sur l\'appareil, la doc affirme que l\'inférence reste sur l\'appareil.',
          'Côté stockage, le README et le site web disent que les conversations sont chiffrées, alors que la [documentation sur le chiffrement](https://github.com/SimonSchubert/Kai/blob/main/docs/features/encryption.md) du projet précise que sous Android, iOS et bureau, elles se trouvent dans une base SQLite locale protégée par le bac à sable d\'applications du système, les clés d\'API et mots de passe étant dans des réglages chiffrés. [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) étiquette l\'application avec l\'anti-fonctionnalité Non-Free Network Services. La politique date du 3 février 2026, avant les versions 3.x, et les sources que nous avons lues ne disent pas qui exploite le proxy de l\'offre Free ni ce qu\'il conserve.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont les déclarations du projet lui-même ; PromptQuorum n\'a audité ni le trafic réseau ni le stockage de l\'application.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s\'adresse',
        items: [
          '**Les personnes qui veulent un seul assistant sur tous leurs appareils,** avec une licence open source gratuite et le choix entre cloud, serveur personnel ou modèle sur l\'appareil.',
          '**Les bricoleurs qui aiment la mémoire, les outils et MCP** et liront la doc pour activer les fonctions.',
          '**Les utilisateurs d\'Ollama ou de LM Studio** qui veulent une interface mobile ou bureau pour leur propre serveur, puisqu\'une adresse de base personnalisée est prise en charge.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**La qualité à l\'usage.** PromptQuorum n\'a pas exécuté l\'application ; la qualité des réponses, la vitesse, la batterie et la mémoire utilisée par les modèles sur l\'appareil ne sont pas évaluées.',
          '**L\'offre Free.** Son exploitant, la conservation des données, les limites d\'usage et les modèles ne sont pas décrits dans les sources que nous avons lues.',
          '**La version iPhone.** L\'App Store affichait 3.0.0 alors que les autres canaux affichaient 3.3.0 ; les fonctions dont disposent les utilisateurs d\'iPhone restent floues.',
          '**Vérifications indépendantes.** Nous n\'avons trouvé aucun audit de sécurité ou de confidentialité de l\'application par un tiers.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'App',
          'Plateformes',
          'Prix / licence',
          'Différence clé',
        ],
        rows: [
          {
            App: '[Jan](/fr/power-local-llm/jan-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / Apache 2.0 (variante)',
            'Différence clé': 'Client de discussion de bureau open source axé sur la confidentialité, avec son propre moteur local',
          },
          {
            App: '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            Plateformes: 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Application mobile open source conçue autour de modèles exécutés sur l\'appareil',
          },
          {
            App: '[Msty](/fr/power-local-llm/msty-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Freemium / code fermé',
            'Différence clé': 'Client de bureau à code fermé pour modèles locaux et cloud',
          },
          {
            App: '[OpenClaw](/fr/power-local-llm/openclaw-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Framework d\'agents open source ; le dépôt de Kai se présente comme une alternative de poche',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes de chaque application sur sa propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Peut-il utiliser mon propre serveur Ollama ?',
            a: 'Oui. Le service compatible OpenAI utilise par défaut localhost:11434/v1, l\'adresse habituelle d\'Ollama, et accepte toute adresse de base personnalisée ; à partir d\'Android 17, l\'application demande l\'autorisation réseau local avant d\'atteindre un hôte du réseau local.',
          },
          {
            q: 'Que se passe-t-il quand un fournisseur échoue ?',
            a: 'Kai réessaie deux fois, essaie ensuite le service configuré suivant et indique lequel a répondu. Un échec du modèle sur l\'appareil n\'est jamais transmis silencieusement au cloud, et un modèle local n\'est jamais utilisé comme cible de repli.',
          },
          {
            q: 'Existe-t-il une version web hébergée ?',
            a: 'Oui, sur [kai9000.com/app](https://kai9000.com/app/) ; comme la version web n\'a pas de moteur local, elle exige un fournisseur distant ou l\'offre Free.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Kai 9000 est un assistant gratuit sous Apache 2.0 pour mobile, bureau et navigateur, qui place la mémoire et les outils au cœur du produit et laisse le choix entre fournisseurs cloud, serveur personnel et modèles téléchargés sur l\'appareil. En contrepartie, la voie locale est facultative et plus étroite que la voie cloud, les pages du projet divergent sur le stockage des conversations et PromptQuorum n\'a pas pu le tester. Il convient à ceux qui veulent un assistant open source sur tous leurs appareils ; pour une application mobile centrée sur les modèles locaux, comparez [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), et sur bureau [Jan](/fr/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de Kai 9000](https://kai9000.com) — présentation, plateformes et liens de téléchargement, consultés le 30 octobre 2026.',
          '[Documentation de Kai](https://kai9000.com/docs/) — fonctions, inférence sur l\'appareil, fournisseurs et chiffrement.',
          '[Dépôt GitHub et versions](https://github.com/SimonSchubert/Kai) — licence Apache 2.0, version 3.3.0 du 2 octobre 2026, journal des modifications.',
          '[Politique de confidentialité de Kai](https://schubert-simon.de/privacy/kai.txt) — traitement des données, en vigueur depuis le 3 février 2026.',
          'Fiches [App Store](https://apps.apple.com/us/app/kai-ai/id6758148023) et [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) — version et prérequis iOS, étiquette d\'anti-fonctionnalité.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — une application mobile open source pour modèles locaux.',
          '[Test de Jan](/fr/power-local-llm/jan-review) — une application de bureau open source avec son propre moteur.',
          '[Test d\'OpenClaw](/fr/power-local-llm/openclaw-review) — le framework d\'agents auquel Kai se compare.',
          '[Assistants de discussion LLM locaux comparés](/fr/power-local-llm/local-llm-chat-assistants-compared) — le comparatif de la catégorie des applications de discussion.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/kai-9000-review-hero-ja.webp',
    title: 'Kai 9000レビュー:クラウドも端末内も使える無料オープンソースAIアシスタント',
    seoTitle: 'Kai 9000レビュー:無料のオープンソースAIアシスタント',
    intro: 'Kai 9000は、ベルリンの開発者Simon Schubert氏が公開しているApache 2.0ライセンスの無料AIアシスタントで、Android、iOS、Windows、macOS、Linux、ブラウザで動作します。標準ではクラウドのプロバイダーと通信し、任意でダウンロードしたモデルを端末上で実行できます。このレビューは、2026年10月30日に確認したプロジェクトの公式サイト、ドキュメント、リポジトリ、ストア掲載情報の範囲にとどめています。PromptQuorumでは実際に動かしていません。',
    metaDescription: 'Kai 9000レビュー:スマホ・PC・Webで使える無料のオープンソースAIアシスタント。標準はクラウド、任意で端末内Gemma 4。データの流れと制約を解説します。',
    twitterDescription: 'Kai 9000レビュー:全プラットフォーム対応の無料オープンソースAI。標準はクラウド、任意で端末内モデル。端末外に出る情報と未確認点。',
    audience: 'スマホ・PC・ブラウザで使える無料のオープンソースAIアシスタントを探していて、何がローカルで動き、何がクラウドに送られ、費用はいくらで、何が情報源で確認できないのかを知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Kai 9000 レビュー',
    targetKeywords: [
      'kai 9000 レビュー',
      'kai 9000 ai',
      'オープンソース aiアシスタント 記憶',
      '無料 aiアシスタント android ios',
      'gemma 4 端末内 アプリ',
      'openclaw 代替 スマホ',
    ],
    current_hardware_mentioned: [
      'Androidスマホ',
      'iPhone',
      'Windows PC',
      'Mac',
      'Gemma 4',
    ],
    leadAnswerBlock: '**Kai 9000(バージョン3.3.0、2026年10月2日公開)は、永続メモリを備えたオープンソースのアシスタントで、端末内モデルをダウンロードした場合にだけローカルで動作します。** 標準ではメッセージをクラウドサービスに送信します。PromptQuorumはインストールも検証もしておらず、ここに書いた内容はすべてプロジェクト自身の情報源によるものです。',
    quickAnswerTop: {
      ja: {
        question: 'Kai 9000はオフラインで動きますか?',
        answer: 'プロジェクトのドキュメントによると、端末にモデルをダウンロードした場合のみです。Gemma 4と小型モデルがGoogleのLiteRT経由でAndroid、iOS、デスクトップ上で動作し、ダウンロード後はインターネットが不要です。APIキー不要の内蔵Free枠を含め、それ以外はすべてリモートのサービスに送られます。',
        bullets: [
          'ブラウザ版にはローカルエンジンがありません。',
          '端末内モデルでは、インタラクティブ画面、メール、タスク、MCPツールは使えません。',
          'アプリは無料です。追加したクラウドプロバイダーは各社の条件で課金されます。',
          '単なるチャット画面ではなく、記憶とツールを備えたアシスタントです。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '簡単な回答',
        anchor: 'quick-answer',
      },
      {
        label: 'Kai 9000とは',
        anchor: 'what-is-kai-9000',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '端末内モデルと制約',
        anchor: 'requirements',
      },
      {
        label: '使い始める手順',
        anchor: 'getting-started',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'データの流れと保存',
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
        label: '競合・代替アプリ',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '結論',
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
            text: 'Kai 9000は、スマホ・PC・ブラウザで使える無料のオープンソースAIアシスタントで、標準ではクラウドのプロバイダーを使い、ダウンロードしたGemma 4モデルを端末上で実行することもできます。',
          },
          {
            type: 'plain-terms',
            text: 'ストアまたはインストーラーから入れ、内蔵の無料枠ですぐに会話するか、自分のプロバイダーキーを追加します。オフラインで使うのは、設定でモデルをダウンロードした場合だけです。',
          },
        ],
        items: [
          'メンテナンス:GitHubでは2026年10月2日にリリース3.3.0、2026年10月24日にコードのプッシュが確認でき、放置プロジェクトの警告は該当しません。',
          '費用とライセンス:Apache 2.0で無料、アカウント不要。追加したクラウドプロバイダーには直接料金がかかります。',
          '対応範囲:Android、iOS、Windows、macOS、Linux、Webアプリ。それぞれストア掲載、インストーラー、ブラウザ用リンクがあります。',
          'ローカル選択肢:Qwen3 0.6BからGemma 4 12Bまで、カタログ掲載の端末内モデル5種を必要に応じてダウンロードします。',
          'ペース:変更履歴では、2026年8月2日から10月2日までに3.xが4回リリースされています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月30日に確認したプロジェクトの公式サイト、ドキュメント、リポジトリ、プライバシーポリシー、ストア掲載情報に基づいています。PromptQuorumはアプリをインストール・テスト・ベンチマークしていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-kai-9000',
        title: 'Kai 9000とは',
        content: [
          '**Kai 9000は、会話をまたいで内容を覚え、テキストで返すだけでなくツールを通じて行動できるAIアシスタントです。** ドキュメントには、永続メモリ、プロジェクトが「ソウル」と呼ぶ編集可能なシステムプロンプト、定期的に確認を行うバックグラウンドの「ハートビート」、Web検索・カレンダー予定・通知・シェルコマンドなどのツール、MCPサーバー対応、クイズやダッシュボードのような画面をモデルが組み立てるインタラクティブモードが挙げられています。',
          '公開しているのはベルリンのSimon Schubert氏で、Apache 2.0ライセンスで[GitHub](https://github.com/SimonSchubert/Kai)に置かれています。[公式サイト](https://kai9000.com)ではKai 9000、アプリストアでは「Kai - AI」の名前です。リポジトリでは、ポケットサイズのOpenClaw代替と説明されています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Kai 9000はどのプラットフォームでも通常のダウンロードで入手でき、スマホはストアアプリ、PCはインストーラー、さらにブラウザ版もあり、ターミナル操作は不要です。**',
        ],
        columns: [
          '項目',
          '内容',
        ],
        rows: [
          {
            '項目': 'Android',
            '内容': '[Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.kai)、[F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/)、または[GitHub](https://github.com/SimonSchubert/Kai/releases)のAPK',
          },
          {
            '項目': 'iPhone・iPad',
            '内容': '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023)、iOS 15.3以降。Appleシリコン搭載Macにも対応',
          },
          {
            '項目': 'Windows',
            '内容': '[GitHub Releases](https://github.com/SimonSchubert/Kai/releases)のMSI、またはwinget',
          },
          {
            '項目': 'macOS',
            '内容': '[GitHub Releases](https://github.com/SimonSchubert/Kai/releases)のDMG、またはHomebrew',
          },
          {
            '項目': 'Linux',
            '内容': '[GitHub](https://github.com/SimonSchubert/Kai/releases)のDEB・RPM・AppImage・Flatpak・tarball',
          },
          {
            '項目': 'ブラウザ',
            '内容': '[kai9000.com/app](https://kai9000.com/app/)',
          },
          {
            '項目': '価格',
            '内容': '無料(Apache 2.0)',
          },
          {
            '項目': '公式サイト',
            '内容': '[kai9000.com](https://kai9000.com)',
          },
          {
            '項目': 'ドキュメント',
            '内容': '[kai9000.com/docs](https://kai9000.com/docs/)',
          },
          {
            '項目': 'プライバシーポリシー',
            '内容': '[Kaiのプライバシーポリシー](https://schubert-simon.de/privacy/kai.txt)',
          },
          {
            '項目': 'ソースコード',
            '内容': '[GitHubリポジトリ](https://github.com/SimonSchubert/Kai)',
          },
        ],
        note: '確認したバージョン:3.3.0。[GitHub Releases](https://github.com/SimonSchubert/Kai/releases)では2026年10月2日の公開で、[F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/)にも掲載されています。リポジトリの最新のコードプッシュは2026年10月24日です。確認時点のApp Store掲載は3.0.0だったため、iPhoneでは古いビルドの可能性があります。READMEに記載のコマンド:brew install --cask simonschubert/tap/kai、winget install SimonSchubert.Kai、yay -S kai-bin。',
      },
      requirements: {
        id: 'requirements',
        title: '端末内モデルと制約',
        content: [
          '**端末内での利用は任意で、アプリがHugging Faceからダウンロードする少数のカタログモデルに限られます。2026年10月21日に最終確認されたプロジェクトの[ドキュメント](https://github.com/SimonSchubert/Kai/blob/main/docs/features/on-device-inference.md)に一覧があります。**',
        ],
        columns: [
          'モデル',
          'ダウンロード',
          'ドキュメントの注記',
        ],
        rows: [
          {
            'モデル': 'Gemma 4 E2B IT',
            'ダウンロード': '2.59 GB',
            'ドキュメントの注記': 'ツール呼び出しは安定',
          },
          {
            'モデル': 'Gemma 4 E4B IT',
            'ダウンロード': '3.66 GB',
            'ドキュメントの注記': 'ツール呼び出しは安定',
          },
          {
            'モデル': 'Gemma 4 12B IT',
            'ダウンロード': '6.88 GB',
            'ドキュメントの注記': 'iOSでは読み込めない',
          },
          {
            'モデル': 'LFM2.5 1.2B Instruct',
            'ダウンロード': '736 MB',
            'ドキュメントの注記': 'ツールテンプレート付きで最小',
          },
          {
            'モデル': 'Qwen3 0.6B',
            'ダウンロード': '614 MB',
            'ドキュメントの注記': '実際にはチャット専用',
          },
        ],
        note: 'ドキュメントに書かれた制約:端末内ではテキスト入力のみ、インタラクティブ画面なし、ツール一覧は縮小、64ビットのAndroid端末(Linuxでは AVX2 対応CPU)が必要、Web版にはローカルエンジンなし。最小RAMの記載はありません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '使い始める手順',
        content: [
          '**手順はプロジェクトのスタートガイドに沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリを入れる',
            whyItMatters: '「入手方法」の表から、お使いの端末向けのストアアプリまたはインストーラーを選びます。',
          },
          {
            title: 'Free枠で会話する',
            whyItMatters: 'アプリを開き、APIキー不要の内蔵Free枠ですぐに会話できます。',
          },
          {
            title: 'プロバイダーを追加する',
            whyItMatters: '設定でOpenAI、Gemini、Anthropicなどのサービス、またはOpenAI互換のアドレスを追加します。複数を並べてフォールバックの順序を決められます。',
          },
          {
            title: '必要ならローカルへ',
            whyItMatters: 'Local Modelカードでカタログのモデルをダウンロードするか、.litertlmファイルをインポートします。そのときに初めて、チャットが端末上で動きます。',
          },
          {
            title: 'ツールを使うか決める',
            whyItMatters: 'シェル、メール、AndroidのLinuxサンドボックスなどのツールは、アシスタントに操作させたい場合だけ有効にします。プライバシーポリシーによると、ツールは初期状態でオフで、許可が必要です。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて、プロジェクトのREADMEとドキュメントに基づいています。**',
        ],
        items: [
          '**記憶と個性。** アシスタントが保存・呼び出す永続メモリと、編集できるシステムプロンプト。',
          '**ツールとMCP。** リモートモデルでのWeb検索、通知、カレンダー予定、シェルコマンド、メール、スケジュールタスクと、MCPサーバーへの接続。',
          '**インタラクティブ画面。** モデルがクイズ、ダッシュボード、レシピカードを組み立て、タップで操作できます。リモートモデルのみです。',
          '**プロバイダーとフォールバック。** 約30のクラウドプロバイダーと任意のOpenAI互換アドレスを、設定した順に試します。',
          '**AndroidのLinuxサンドボックス。** root権限なしで、アシスタントがコマンドやスクリプトを実行できる、AlpineまたはDebianの任意環境。',
          '**その他。** 音声読み上げと、リモートモデルへの画像添付。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れと保存',
        content: [
          '**端末の外に出る情報は、選ぶモデルによって変わります。** クラウドプロバイダーや内蔵Free枠を使うと、メッセージと各プロンプトに加えられた記憶がそのサービスに送られます。[プライバシーポリシー](https://schubert-simon.de/privacy/kai.txt)には、Kaiにはアカウントも分析もなく、データを受け取る独自サーバーもないこと、プロバイダーの規約が適用されることが書かれ、例としてMistral AIの無料枠が挙げられ、その規約では入力と出力が学習に使われる可能性があると記されています。位置情報ツールはIPアドレスをip-api.comに送り、SMSやカレンダーのデータを読むツールはそのデータをAIサービスに渡すとも記されています。端末内モデルでは、ドキュメントによると推論は端末内にとどまります。',
          '保存については、READMEと公式サイトは会話が暗号化されていると説明していますが、プロジェクトの[暗号化ドキュメント](https://github.com/SimonSchubert/Kai/blob/main/docs/features/encryption.md)では、Android・iOS・デスクトップでは会話はOSのアプリサンドボックスで保護されたローカルのSQLiteデータベースにあり、APIキーとパスワードは暗号化された設定に保存されると説明しています。[F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/)では、アンチ機能「Non-Free Network Services」が付けられています。ポリシーの日付は2026年2月3日で、3.xのリリースより前です。Free枠のプロキシを誰が運用し、何を保持するのかは、確認した情報源には書かれていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはプロジェクト自身の説明です。PromptQuorumはアプリの通信や保存内容を監査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**すべての端末で1つのアシスタントを使いたい人。** 無料のオープンソースライセンスで、クラウド・自前サーバー・端末内モデルから選べます。',
          '**記憶、ツール、MCPが好きな人。** ドキュメントを読んで機能を有効にできる方に向いています。',
          '**OllamaやLM Studioを使っている人。** 独自のベースアドレスに対応しているため、自分のサーバー用のスマホ・PCフロントエンドになります。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の品質。** PromptQuorumはアプリを動かしていないため、回答の質、速度、バッテリーやメモリ使用量は評価していません。',
          '**Free枠。** 運営者、データの保持、利用上限、使われるモデルは、確認した情報源に記載がありません。',
          '**iPhone版。** App Storeは3.0.0、他の配布先は3.3.0で、iPhoneでどの機能が使えるかは不明です。',
          '**第三者による検証。** アプリのセキュリティやプライバシーに関する第三者の監査は見つかりませんでした。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合・代替アプリ',
        columns: [
          'アプリ',
          '対応OS',
          '価格／ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[Jan](/ja/power-local-llm/jan-review)',
            '対応OS': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料/Apache 2.0(派生)',
            '主な違い': '独自のローカルエンジンを持つ、プライバシー重視のオープンソースのデスクトップチャット',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            '対応OS': 'iOS、Android',
            '価格／ライセンス': '無料/MIT',
            '主な違い': '端末上で動くモデルを軸にしたオープンソースのスマホアプリ',
          },
          {
            'アプリ': '[Msty](/ja/power-local-llm/msty-review)',
            '対応OS': 'Windows、macOS、Linux',
            '価格／ライセンス': 'フリーミアム/クローズドソース',
            '主な違い': 'ローカルとクラウドのモデルに対応するクローズドソースのデスクトップクライアント',
          },
          {
            'アプリ': '[OpenClaw](/ja/power-local-llm/openclaw-review)',
            '対応OS': 'Windows、macOS、Linux',
            '価格／ライセンス': '無料/MIT',
            '主な違い': 'オープンソースのエージェント基盤。Kaiのリポジトリは自らをポケット版の代替と説明',
          },
        ],
        note: '競合の情報は頻繁に変わります。各アプリの最新の価格・ライセンス・対応OSは、それぞれのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '自分のOllamaサーバーを使えますか?',
            a: 'はい。OpenAI互換サービスの初期値はOllamaの標準アドレスであるlocalhost:11434/v1で、任意のベースアドレスも指定できます。Android 17以降では、LAN上のホストに接続する前にローカルネットワークの権限を求められます。',
          },
          {
            q: 'プロバイダーが失敗するとどうなりますか?',
            a: 'Kaiは2回再試行し、次に設定済みの次のサービスを試し、どのサービスが答えたかを表示します。端末内モデルの失敗が黙ってクラウドに引き継がれることはなく、ローカルモデルがフォールバック先として使われることもありません。',
          },
          {
            q: 'ホスト型のWeb版はありますか?',
            a: 'はい、[kai9000.com/app](https://kai9000.com/app/)にあります。Web版にはローカルエンジンがないため、リモートのプロバイダーまたはFree枠が必要です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: 'Kai 9000は、記憶とツールを中核に据えた、スマホ・PC・ブラウザ向けのApache 2.0の無料アシスタントで、クラウドのプロバイダー、自前のサーバー、ダウンロードした端末内モデルのいずれかを選べます。一方で、ローカルの経路は任意でクラウドより狭く、会話の保存方法についてプロジェクト自身のページの説明が食い違い、PromptQuorumは実際に試せていません。すべての端末でオープンソースのアシスタントを使いたい人に向いています。ローカルモデル中心のスマホアプリなら[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)、デスクトップなら[Jan](/ja/power-local-llm/jan-review)と比べてみてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Kai 9000公式サイト](https://kai9000.com) — 概要、対応プラットフォーム、ダウンロードリンク(2026年10月30日確認)。',
          '[Kaiドキュメント](https://kai9000.com/docs/) — 機能、端末内推論、プロバイダー、暗号化。',
          '[GitHubリポジトリとリリース](https://github.com/SimonSchubert/Kai) — Apache 2.0ライセンス、2026年10月2日公開のバージョン3.3.0、変更履歴。',
          '[Kaiのプライバシーポリシー](https://schubert-simon.de/privacy/kai.txt) — データの取り扱い、2026年2月3日施行。',
          '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023)と[F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/)の掲載情報 — iOS版のバージョンと要件、アンチ機能の表示。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — ローカルモデル向けのオープンソースのスマホアプリ。',
          '[Janレビュー](/ja/power-local-llm/jan-review) — 独自エンジンを持つオープンソースのデスクトップアプリ。',
          '[OpenClawレビュー](/ja/power-local-llm/openclaw-review) — Kaiが比較対象とするエージェント基盤。',
          '[ローカルLLMチャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared) — チャットアプリのカテゴリ比較。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/kai-9000-review-hero-pt.webp',
    title: 'Análise do Kai 9000: assistente de IA gratuito e de código aberto, na nuvem ou no dispositivo',
    seoTitle: 'Análise do Kai 9000: IA aberta, na nuvem ou local',
    intro: 'O Kai 9000 é um assistente de IA gratuito, com licença Apache 2.0, do desenvolvedor berlinense Simon Schubert, que roda em Android, iOS, Windows, macOS, Linux e no navegador. Por padrão ele conversa com provedores na nuvem e, de forma opcional, pode executar no dispositivo modelos baixados. Esta análise se limita ao site, à documentação, ao repositório e às páginas de loja do projeto, verificados em 30 de outubro de 2026; o PromptQuorum não o executou.',
    metaDescription: 'Análise do Kai 9000: assistente de IA gratuito e aberto para celular, desktop e web. Nuvem por padrão, Gemma 4 local opcional. Dados e limites.',
    twitterDescription: 'Análise do Kai 9000: um assistente aberto e gratuito para todas as plataformas. Nuvem por padrão, modelos locais opcionais. O que sai do dispositivo e o que não conseguimos verificar.',
    audience: 'Pessoas que querem um assistente de IA gratuito e de código aberto para celular, desktop e navegador e precisam saber o que é local, o que vai para a nuvem, quanto custa e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Kai 9000',
    targetKeywords: [
      'análise kai 9000',
      'kai 9000 ia',
      'assistente de ia código aberto com memória',
      'assistente de ia grátis android ios desktop',
      'gemma 4 no dispositivo app',
      'alternativa ao openclaw celular',
    ],
    current_hardware_mentioned: [
      'celular Android',
      'iPhone',
      'PC com Windows',
      'Mac',
      'Gemma 4',
    ],
    leadAnswerBlock: '**O Kai 9000 (versão 3.3.0, lançada em 2 de outubro de 2026) é um assistente de código aberto com memória persistente que só roda localmente se você baixar um modelo para o dispositivo.** Por padrão, ele envia suas mensagens a um serviço na nuvem. O PromptQuorum não o instalou nem o testou; tudo o que está aqui vem das fontes do próprio projeto.',
    quickAnswerTop: {
      pt: {
        question: 'O Kai 9000 funciona offline?',
        answer: 'Segundo a documentação do projeto, só com um modelo baixado no dispositivo: o Gemma 4 e alguns modelos menores rodam pelo LiteRT do Google em Android, iOS e desktop e não precisam de internet depois do download. Todo o resto, inclusive o nível Free embutido que dispensa chave de API, vai para um serviço remoto.',
        bullets: [
          'A versão de navegador não tem mecanismo local.',
          'Modelos no dispositivo não conseguem usar telas interativas, e-mail, tarefas nem ferramentas MCP.',
          'O app é gratuito; os provedores na nuvem que você adicionar cobram conforme os próprios termos.',
          'É um assistente com memória e ferramentas, não apenas uma janela de chat.',
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
        label: 'O que é o Kai 9000?',
        anchor: 'what-is-kai-9000',
      },
      {
        label: 'Como obter',
        anchor: 'get-it',
      },
      {
        label: 'Modelos no dispositivo e limites',
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
        label: 'Fluxo de dados e armazenamento',
        anchor: 'privacy',
      },
      {
        label: 'Para quem é',
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
        label: 'Veredito',
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
            text: 'O Kai 9000 é um assistente de IA gratuito e de código aberto para celular, desktop e navegador que usa provedores na nuvem por padrão e pode executar modelos Gemma 4 baixados no dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'Você o instala por uma loja ou instalador, conversa de imediato num nível gratuito embutido ou adiciona suas próprias chaves de provedor, e só passa a usar offline se baixar um modelo nas configurações.',
          },
        ],
        items: [
          'Manutenção: o GitHub mostra a versão 3.3.0 de 2 de outubro de 2026 e um push de código de 24 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Custo e licença: gratuito sob Apache 2.0, sem conta; os provedores na nuvem que você adicionar cobram diretamente de você.',
          'Alcance: Android, iOS, Windows, macOS, Linux e um app web, cada um com página de loja, instalador ou link de navegador.',
          'Opção local: cinco modelos de catálogo para o dispositivo, do Qwen3 0.6B ao Gemma 4 12B, baixados sob demanda.',
          'Ritmo: quatro versões 3.x entre 2 de agosto e 2 de outubro de 2026, segundo o registro de mudanças.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, na documentação, no repositório, na política de privacidade e nas páginas de loja do projeto, verificados em 30 de outubro de 2026. O PromptQuorum não instalou, testou nem mediu o app.',
          },
        ],
      },
      overview: {
        id: 'what-is-kai-9000',
        title: 'O que é o Kai 9000?',
        content: [
          '**O Kai 9000 é um assistente de IA que lembra de coisas entre conversas e pode agir por meio de ferramentas, em vez de apenas responder com texto.** A documentação lista memória persistente, um prompt de sistema editável que o projeto chama de alma, um «batimento cardíaco» em segundo plano que confere pendências periodicamente, ferramentas como busca na web, eventos de calendário, notificações e comandos de shell, suporte a servidores MCP e um modo interativo em que o modelo monta telas como questionários ou painéis.',
          'Ele é publicado por Simon Schubert, de Berlim, sob a licença Apache 2.0 no [GitHub](https://github.com/SimonSchubert/Kai), como Kai 9000 no [site](https://kai9000.com) e como «Kai - AI» nas lojas de apps. O repositório o descreve como uma alternativa ao OpenClaw para o bolso.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Kai 9000 é um download comum em todas as plataformas: apps de loja para celulares, instaladores para desktop e uma versão de navegador, sem nenhuma etapa no terminal.**',
        ],
        columns: [
          'Item',
          'Detalhes',
        ],
        rows: [
          {
            Item: 'Android',
            Detalhes: '[Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.kai), [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) ou APK no [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            Item: 'iPhone e iPad',
            Detalhes: '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023), iOS 15.3 ou superior; também Macs com chip Apple',
          },
          {
            Item: 'Windows',
            Detalhes: 'MSI no [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) ou winget',
          },
          {
            Item: 'macOS',
            Detalhes: 'DMG no [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) ou Homebrew',
          },
          {
            Item: 'Linux',
            Detalhes: 'DEB, RPM, AppImage, Flatpak ou tarball no [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            Item: 'Navegador',
            Detalhes: '[kai9000.com/app](https://kai9000.com/app/)',
          },
          {
            Item: 'Preço',
            Detalhes: 'Grátis (Apache 2.0)',
          },
          {
            Item: 'Site',
            Detalhes: '[kai9000.com](https://kai9000.com)',
          },
          {
            Item: 'Documentação',
            Detalhes: '[kai9000.com/docs](https://kai9000.com/docs/)',
          },
          {
            Item: 'Política de privacidade',
            Detalhes: '[Política de privacidade do Kai](https://schubert-simon.de/privacy/kai.txt)',
          },
          {
            Item: 'Código-fonte',
            Detalhes: '[Repositório no GitHub](https://github.com/SimonSchubert/Kai)',
          },
        ],
        note: 'Versão analisada: 3.3.0, lançada em 2 de outubro de 2026 segundo o [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) e listada no [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/); o último push de código do repositório foi em 24 de outubro de 2026. A página da App Store mostrava 3.0.0 na verificação, então usuários de iPhone podem estar numa versão mais antiga. Instalação por linha de comando conforme o README: brew install --cask simonschubert/tap/kai, winget install SimonSchubert.Kai, yay -S kai-bin.',
      },
      requirements: {
        id: 'requirements',
        title: 'Modelos no dispositivo e limites',
        content: [
          '**O uso no dispositivo é opcional e limitado a um catálogo curto de modelos que o app baixa do Hugging Face; a [documentação](https://github.com/SimonSchubert/Kai/blob/main/docs/features/on-device-inference.md) do projeto, verificada pela última vez em 21 de outubro de 2026, os lista.**',
        ],
        columns: [
          'Modelo',
          'Download',
          'Nota da doc',
        ],
        rows: [
          {
            Modelo: 'Gemma 4 E2B IT',
            Download: '2.59 GB',
            'Nota da doc': 'Chamada de ferramentas confiável',
          },
          {
            Modelo: 'Gemma 4 E4B IT',
            Download: '3.66 GB',
            'Nota da doc': 'Chamada de ferramentas confiável',
          },
          {
            Modelo: 'Gemma 4 12B IT',
            Download: '6.88 GB',
            'Nota da doc': 'Não carrega no iOS',
          },
          {
            Modelo: 'LFM2.5 1.2B Instruct',
            Download: '736 MB',
            'Nota da doc': 'Menor modelo com modelo de ferramentas',
          },
          {
            Modelo: 'Qwen3 0.6B',
            Download: '614 MB',
            'Nota da doc': 'Na prática, só chat',
          },
        ],
        note: 'Limites citados na doc: apenas entrada de texto no dispositivo, sem telas interativas, uma lista de ferramentas reduzida, um dispositivo Android de 64 bits ou, no Linux, uma CPU com AVX2, e nenhum mecanismo local na versão web. A doc não informa um mínimo de RAM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem a página de primeiros passos do projeto; o PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Escolha na tabela «Como obter» o app de loja ou o instalador para o seu dispositivo.',
          },
          {
            title: 'Converse no nível Free',
            whyItMatters: 'Abra o app e converse de imediato no nível Free embutido, que não exige chave de API.',
          },
          {
            title: 'Adicione um provedor',
            whyItMatters: 'Em Configurações, adicione um serviço como OpenAI, Gemini ou Anthropic, ou um endereço compatível com OpenAI; vários podem ser ordenados numa cadeia de reserva.',
          },
          {
            title: 'Se quiser, vá para o local',
            whyItMatters: 'No cartão Local Model, baixe um modelo do catálogo ou importe um arquivo .litertlm; só então o chat roda no dispositivo.',
          },
          {
            title: 'Decida sobre as ferramentas',
            whyItMatters: 'Ative ferramentas como shell, e-mail ou o sandbox Linux no Android apenas se quiser que o assistente aja; segundo a política de privacidade, as ferramentas vêm desativadas e exigem sua permissão.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do README e da documentação do projeto.**',
        ],
        items: [
          '**Memória e personalidade.** Memória persistente que o assistente guarda e recupera, mais um prompt de sistema editável.',
          '**Ferramentas e MCP.** Busca na web, notificações, eventos de calendário, comandos de shell, e-mail e tarefas agendadas com modelos remotos, além de conexões com servidores MCP.',
          '**Telas interativas.** O modelo pode montar questionários, painéis e cartões de receita que você usa com toques; somente com modelos remotos.',
          '**Provedores e reserva.** Cerca de 30 provedores na nuvem e qualquer endereço compatível com OpenAI, consultados na ordem que você definir.',
          '**Sandbox Linux no Android.** Um ambiente Alpine ou Debian opcional em que o assistente pode executar comandos e scripts sem root.',
          '**Extras.** Leitura em voz alta e anexos de imagem para modelos remotos.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e armazenamento',
        content: [
          '**O que sai do dispositivo depende do modelo que você escolher.** Com um provedor na nuvem ou o nível Free embutido, suas mensagens e as lembranças adicionadas a cada prompt vão para esse serviço. A [política de privacidade](https://schubert-simon.de/privacy/kai.txt) diz que o Kai não tem conta, análise de uso nem servidores próprios que recebam seus dados, que valem os termos do provedor, e cita como exemplo o nível gratuito da Mistral AI, dizendo que, pelos termos desse nível, entradas e saídas podem ser usadas para treinamento. Acrescenta que a ferramenta de localização envia seu endereço IP ao ip-api.com e que ferramentas que leem SMS ou dados do calendário repassam esses dados ao serviço de IA. Com um modelo no dispositivo, a doc diz que a inferência fica no dispositivo.',
          'Quanto ao armazenamento, o README e o site dizem que as conversas são criptografadas, enquanto a [documentação de criptografia](https://github.com/SimonSchubert/Kai/blob/main/docs/features/encryption.md) do projeto afirma que em Android, iOS e desktop elas ficam num banco SQLite local protegido pelo sandbox de apps do sistema operacional, com chaves de API e senhas em configurações criptografadas. O [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) marca o app com a antifuncionalidade Non-Free Network Services. A política é de 3 de fevereiro de 2026, anterior às versões 3.x, e as fontes que lemos não dizem quem opera o proxy do nível Free nem o que ele retém.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do próprio projeto; o PromptQuorum não auditou o tráfego de rede nem o armazenamento do app.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Quem quer um assistente em todos os dispositivos,** com licença aberta e gratuita e a escolha entre nuvem, servidor próprio ou modelo no dispositivo.',
          '**Entusiastas de memória, ferramentas e MCP** que vão ler a doc para ativar recursos.',
          '**Usuários de Ollama ou LM Studio** que querem um cliente de celular ou desktop para o próprio servidor, já que há suporte a endereço base personalizado.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade na prática.** O PromptQuorum não executou o app, então qualidade das respostas, velocidade, bateria e uso de memória dos modelos no dispositivo não foram avaliados.',
          '**O nível Free.** Seu operador, a retenção de dados, os limites de uso e os modelos não são descritos nas fontes que lemos.',
          '**A versão para iPhone.** A App Store mostrava 3.0.0 e os outros canais 3.3.0, então não está claro quais recursos os usuários de iPhone recebem.',
          '**Verificações independentes.** Não encontramos nenhuma auditoria de segurança ou privacidade do app feita por terceiros.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: [
          'App',
          'Plataformas',
          'Preço / licença',
          'Diferença principal',
        ],
        rows: [
          {
            App: '[Jan](/pt/power-local-llm/jan-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / Apache 2.0 (variante)',
            'Diferença principal': 'Cliente de chat para desktop, aberto e voltado à privacidade, com mecanismo local próprio',
          },
          {
            App: '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            Plataformas: 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'App de celular aberto, construído em torno de modelos executados no dispositivo',
          },
          {
            App: '[Msty](/pt/power-local-llm/msty-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Freemium / código fechado',
            'Diferença principal': 'Cliente de desktop de código fechado para modelos locais e na nuvem',
          },
          {
            App: '[OpenClaw](/pt/power-local-llm/openclaw-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Framework de agentes aberto; o repositório do Kai se apresenta como alternativa de bolso',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Ele pode usar meu próprio servidor Ollama?',
            a: 'Sim. O serviço compatível com OpenAI usa por padrão localhost:11434/v1, o endereço comum do Ollama, e aceita qualquer endereço base personalizado; a partir do Android 17, o app pede permissão de rede local antes de acessar um host da LAN.',
          },
          {
            q: 'O que acontece quando um provedor falha?',
            a: 'O Kai tenta de novo duas vezes, depois passa para o próximo serviço configurado e mostra qual respondeu. Uma falha do modelo no dispositivo nunca é repassada em silêncio à nuvem, e um modelo local nunca é usado como destino de reserva.',
          },
          {
            q: 'Existe uma versão web hospedada?',
            a: 'Sim, em [kai9000.com/app](https://kai9000.com/app/); como a versão web não tem mecanismo local, ela precisa de um provedor remoto ou do nível Free.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Kai 9000 é um assistente gratuito com licença Apache 2.0 para celular, desktop e navegador, que põe memória e ferramentas no centro e deixa escolher entre provedores na nuvem, seu próprio servidor e modelos baixados no dispositivo. Em contrapartida, o caminho local é opcional e mais estreito que o da nuvem, as páginas do próprio projeto divergem sobre como as conversas são armazenadas e o PromptQuorum não pôde testá-lo. Serve a quem quer um assistente aberto em todos os dispositivos; quem busca um app de celular centrado em modelos locais pode comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), e no desktop o [Jan](/pt/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Kai 9000](https://kai9000.com) — visão geral, plataformas e links de download, verificados em 30 de outubro de 2026.',
          '[Documentação do Kai](https://kai9000.com/docs/) — recursos, inferência no dispositivo, provedores e criptografia.',
          '[Repositório no GitHub e versões](https://github.com/SimonSchubert/Kai) — licença Apache 2.0, versão 3.3.0 de 2 de outubro de 2026, registro de mudanças.',
          '[Política de privacidade do Kai](https://schubert-simon.de/privacy/kai.txt) — tratamento de dados, em vigor desde 3 de fevereiro de 2026.',
          'Páginas da [App Store](https://apps.apple.com/us/app/kai-ai/id6758148023) e do [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) — versão e requisitos do iOS, marcação de antifuncionalidade.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um app de celular aberto para modelos locais.',
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um app de desktop aberto com mecanismo próprio.',
          '[Análise do OpenClaw](/pt/power-local-llm/openclaw-review) — o framework de agentes ao qual o Kai se compara.',
          '[Assistentes de chat com LLM local: comparativo](/pt/power-local-llm/local-llm-chat-assistants-compared) — o comparativo da categoria de apps de chat.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/kai-9000-review-hero-ar.webp',
    title: 'مراجعة Kai 9000: مساعد ذكاء اصطناعي مجاني ومفتوح المصدر على السحابة أو الجهاز',
    seoTitle: 'مراجعة Kai 9000: مساعد ذكاء اصطناعي مجاني ومفتوح',
    intro: 'Kai 9000 مساعد ذكاء اصطناعي مجاني بترخيص Apache 2.0 من المطوّر البرليني Simon Schubert، ويعمل على Android وiOS وWindows وmacOS وLinux وفي المتصفح. يتحدث افتراضيًا مع مزودي السحابة، ويمكنه اختياريًا تشغيل نماذج منزّلة على الجهاز نفسه. تقتصر هذه المراجعة على الموقع الرسمي للمشروع ووثائقه ومستودعه وصفحات المتاجر، وقد فُحصت في 30 أكتوبر 2026؛ ولم يشغّله PromptQuorum.',
    metaDescription: 'مراجعة Kai 9000: مساعد ذكاء اصطناعي مجاني ومفتوح المصدر للهاتف والحاسوب والويب. سحابي افتراضيًا وGemma 4 محلي اختياريًا. تدفق البيانات والحدود.',
    twitterDescription: 'مراجعة Kai 9000: مساعد مجاني ومفتوح المصدر لكل المنصات. سحابي افتراضيًا ونماذج محلية اختيارية. ما الذي يغادر الجهاز وما لم نتمكن من التحقق منه.',
    audience: 'من يبحثون عن مساعد ذكاء اصطناعي مجاني ومفتوح المصدر للهاتف وسطح المكتب والمتصفح، ويريدون معرفة ما يعمل محليًا وما يُرسل إلى السحابة وكم يكلّف وما الذي لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Kai 9000',
    targetKeywords: [
      'مراجعة kai 9000',
      'kai 9000 ذكاء اصطناعي',
      'مساعد ذكاء اصطناعي مفتوح المصدر بذاكرة',
      'مساعد ذكاء اصطناعي مجاني android ios',
      'تطبيق gemma 4 على الجهاز',
      'بديل openclaw للهاتف',
    ],
    current_hardware_mentioned: [
      'هاتف Android',
      'iPhone',
      'حاسوب Windows',
      'Mac',
      'Gemma 4',
    ],
    leadAnswerBlock: '**Kai 9000 (الإصدار 3.3.0، صدر في 2 أكتوبر 2026) مساعد مفتوح المصدر بذاكرة دائمة، ولا يعمل محليًا إلا إذا نزّلت نموذجًا على الجهاز.** يرسل رسائلك افتراضيًا إلى خدمة سحابية. لم يثبّته PromptQuorum ولم يختبره، وكل ما هنا مستمد من مصادر المشروع نفسه.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Kai 9000 دون اتصال؟',
        answer: 'بحسب وثائق المشروع، لا يحدث ذلك إلا مع نموذج منزَّل على الجهاز: يعمل Gemma 4 وبعض النماذج الأصغر عبر LiteRT من Google على Android وiOS وسطح المكتب ولا تحتاج إلى الإنترنت بعد التنزيل. أما كل ما عدا ذلك، بما فيه فئة Free المدمجة التي لا تتطلب مفتاح API، فيُرسل إلى خدمة بعيدة.',
        bullets: [
          'نسخة المتصفح لا تحتوي على محرك محلي.',
          'لا تستطيع النماذج على الجهاز استخدام الشاشات التفاعلية أو البريد أو المهام أو أدوات MCP.',
          'التطبيق مجاني؛ ويحاسبك مزودو السحابة الذين تضيفهم وفق شروطهم.',
          'هو مساعد بذاكرة وأدوات، لا مجرد نافذة محادثة.',
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
        label: 'ما هو Kai 9000؟',
        anchor: 'what-is-kai-9000',
      },
      {
        label: 'كيفية الحصول عليه',
        anchor: 'get-it',
      },
      {
        label: 'النماذج على الجهاز وحدودها',
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
        label: 'تدفق البيانات والتخزين',
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
            text: 'Kai 9000 مساعد ذكاء اصطناعي مجاني ومفتوح المصدر للهاتف وسطح المكتب والمتصفح، يستخدم مزودي السحابة افتراضيًا ويمكنه تشغيل نماذج Gemma 4 المنزّلة على الجهاز.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته من متجر أو ملف تثبيت، وتتحدث فورًا عبر فئة مجانية مدمجة أو تضيف مفاتيح مزوّدك الخاصة، ولا تستخدمه دون اتصال إلا إذا نزّلت نموذجًا من الإعدادات.',
          },
        ],
        items: [
          'الصيانة: يعرض GitHub الإصدار 3.3.0 بتاريخ 2 أكتوبر 2026 ودفعة شيفرة في 24 أكتوبر 2026، فلا ينطبق تحذير المشروع المهمل.',
          'التكلفة والترخيص: مجاني بترخيص Apache 2.0 ودون حساب؛ ويحاسبك مزودو السحابة الذين تضيفهم مباشرة.',
          'النطاق: Android وiOS وWindows وmacOS وLinux وتطبيق ويب، لكلٍّ منها صفحة متجر أو ملف تثبيت أو رابط متصفح.',
          'الخيار المحلي: خمسة نماذج مدرجة في الفهرس للجهاز، من Qwen3 0.6B إلى Gemma 4 12B، تُنزَّل عند الطلب.',
          'الوتيرة: أربعة إصدارات 3.x بين 2 أغسطس و2 أكتوبر 2026 بحسب سجل التغييرات.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى الموقع الرسمي للمشروع ووثائقه ومستودعه وسياسة الخصوصية وصفحات المتاجر، وقد فُحصت في 30 أكتوبر 2026. لم يثبّت PromptQuorum التطبيق ولم يختبره أو يقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-kai-9000',
        title: 'ما هو Kai 9000؟',
        content: [
          '**Kai 9000 مساعد ذكاء اصطناعي يتذكر المعلومات بين المحادثات ويستطيع التصرف عبر الأدوات، لا الاكتفاء بالرد نصًا.** تذكر الوثائق ذاكرة دائمة، وموجّه نظام قابلًا للتعديل يسميه المشروع «الروح»، و«نبضًا» في الخلفية يتفقد الأمور دوريًا، وأدوات مثل البحث على الويب وأحداث التقويم والإشعارات وأوامر shell، ودعم خوادم MCP، ووضعًا تفاعليًا يبني فيه النموذج شاشات مثل الاختبارات أو لوحات المعلومات.',
          'ينشره Simon Schubert من برلين بترخيص Apache 2.0 على [GitHub](https://github.com/SimonSchubert/Kai)، باسم Kai 9000 على [الموقع الرسمي](https://kai9000.com) وباسم «Kai - AI» في متاجر التطبيقات. ويصفه المستودع بأنه بديل لـ OpenClaw في جيبك.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**يُنزَّل Kai 9000 بالطريقة المعتادة على كل منصة: تطبيقات متاجر للهواتف، وملفات تثبيت لسطح المكتب، ونسخة متصفح، دون أي خطوة في الطرفية.**',
        ],
        columns: [
          'البند',
          'التفاصيل',
        ],
        rows: [
          {
            'البند': 'Android',
            'التفاصيل': '[Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.kai) أو [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) أو ملف APK على [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            'البند': 'iPhone وiPad',
            'التفاصيل': '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023)، من iOS 15.3 فما فوق؛ وأجهزة Mac بمعالج Apple أيضًا',
          },
          {
            'البند': 'Windows',
            'التفاصيل': 'ملف MSI على [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) أو winget',
          },
          {
            'البند': 'macOS',
            'التفاصيل': 'ملف DMG على [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) أو Homebrew',
          },
          {
            'البند': 'Linux',
            'التفاصيل': 'DEB وRPM وAppImage وFlatpak أو أرشيف على [GitHub](https://github.com/SimonSchubert/Kai/releases)',
          },
          {
            'البند': 'المتصفح',
            'التفاصيل': '[kai9000.com/app](https://kai9000.com/app/)',
          },
          {
            'البند': 'السعر',
            'التفاصيل': 'مجاني (Apache 2.0)',
          },
          {
            'البند': 'الموقع',
            'التفاصيل': '[kai9000.com](https://kai9000.com)',
          },
          {
            'البند': 'الوثائق',
            'التفاصيل': '[kai9000.com/docs](https://kai9000.com/docs/)',
          },
          {
            'البند': 'سياسة الخصوصية',
            'التفاصيل': '[سياسة خصوصية Kai](https://schubert-simon.de/privacy/kai.txt)',
          },
          {
            'البند': 'الشيفرة المصدرية',
            'التفاصيل': '[مستودع GitHub](https://github.com/SimonSchubert/Kai)',
          },
        ],
        note: 'الإصدار الذي راجعناه: 3.3.0، صدر في 2 أكتوبر 2026 بحسب [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) ومدرج على [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/)؛ وكانت آخر دفعة شيفرة في المستودع بتاريخ 24 أكتوبر 2026. عرضت صفحة App Store الإصدار 3.0.0 عند الفحص، لذا قد يستخدم مستخدمو iPhone بناءً أقدم. أوامر التثبيت من README: brew install --cask simonschubert/tap/kai وwinget install SimonSchubert.Kai وyay -S kai-bin.',
      },
      requirements: {
        id: 'requirements',
        title: 'النماذج على الجهاز وحدودها',
        content: [
          '**الاستخدام على الجهاز اختياري ومقتصر على فهرس قصير من النماذج ينزّلها التطبيق من Hugging Face؛ وتسردها [وثائق](https://github.com/SimonSchubert/Kai/blob/main/docs/features/on-device-inference.md) المشروع التي روجعت آخر مرة في 21 أكتوبر 2026.**',
        ],
        columns: [
          'النموذج',
          'التنزيل',
          'ملاحظة من الوثائق',
        ],
        rows: [
          {
            'النموذج': 'Gemma 4 E2B IT',
            'التنزيل': '2.59 GB',
            'ملاحظة من الوثائق': 'استدعاء الأدوات موثوق',
          },
          {
            'النموذج': 'Gemma 4 E4B IT',
            'التنزيل': '3.66 GB',
            'ملاحظة من الوثائق': 'استدعاء الأدوات موثوق',
          },
          {
            'النموذج': 'Gemma 4 12B IT',
            'التنزيل': '6.88 GB',
            'ملاحظة من الوثائق': 'لا يُحمَّل على iOS',
          },
          {
            'النموذج': 'LFM2.5 1.2B Instruct',
            'التنزيل': '736 MB',
            'ملاحظة من الوثائق': 'أصغر نموذج بقالب أدوات',
          },
          {
            'النموذج': 'Qwen3 0.6B',
            'التنزيل': '614 MB',
            'ملاحظة من الوثائق': 'للمحادثة فقط عمليًا',
          },
        ],
        note: 'الحدود المذكورة في الوثائق: إدخال نصي فقط على الجهاز، ولا شاشات تفاعلية، وقائمة أدوات مختصرة، وجهاز Android بمعمارية 64 بت (أو معالج يدعم AVX2 على Linux)، ولا محرك محلي في نسخة الويب. ولا تذكر الوثائق حدًا أدنى للذاكرة العشوائية.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات صفحة البدء في المشروع؛ ولم ينفذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'اختر من جدول «كيفية الحصول عليه» تطبيق المتجر أو ملف التثبيت المناسب لجهازك.',
          },
          {
            title: 'تحدث عبر فئة Free',
            whyItMatters: 'افتح التطبيق وتحدث فورًا عبر فئة Free المدمجة التي لا تتطلب مفتاح API.',
          },
          {
            title: 'أضف مزوّدًا',
            whyItMatters: 'أضف من الإعدادات خدمة مثل OpenAI أو Gemini أو Anthropic أو عنوانًا متوافقًا مع OpenAI؛ ويمكن ترتيب عدة خدمات في سلسلة احتياطية.',
          },
          {
            title: 'انتقل إلى المحلي إن رغبت',
            whyItMatters: 'نزّل من بطاقة Local Model نموذجًا من الفهرس أو استورد ملف .litertlm؛ وعندها فقط تعمل المحادثة على الجهاز.',
          },
          {
            title: 'قرّر بشأن الأدوات',
            whyItMatters: 'فعّل أدوات مثل shell أو البريد أو صندوق Linux الرملي على Android فقط إذا أردت أن يتصرف المساعد؛ وبحسب سياسة الخصوصية تكون الأدوات معطلة افتراضيًا وتحتاج إلى إذنك.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره README ووثائق المشروع.**',
        ],
        items: [
          '**الذاكرة والشخصية.** ذاكرة دائمة يخزنها المساعد ويستدعيها، إضافة إلى موجّه نظام قابل للتعديل.',
          '**الأدوات وMCP.** البحث على الويب والإشعارات وأحداث التقويم وأوامر shell والبريد والمهام المجدولة مع النماذج البعيدة، إضافة إلى الاتصال بخوادم MCP.',
          '**الشاشات التفاعلية.** يستطيع النموذج بناء اختبارات ولوحات معلومات وبطاقات وصفات تتنقل فيها باللمس؛ مع النماذج البعيدة فقط.',
          '**المزودون والاحتياط.** نحو 30 مزود سحابة وأي عنوان متوافق مع OpenAI، يُجرَّبون بالترتيب الذي تحدده.',
          '**صندوق Linux الرملي على Android.** بيئة Alpine أو Debian اختيارية يشغّل فيها المساعد الأوامر والسكربتات دون صلاحيات root.',
          '**إضافات.** قراءة النص بصوت مسموع ومرفقات الصور للنماذج البعيدة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والتخزين',
        content: [
          '**ما يغادر الجهاز يعتمد على النموذج الذي تختاره.** مع مزود سحابي أو فئة Free المدمجة تذهب رسائلك والذكريات المضافة إلى كل موجّه إلى تلك الخدمة. تقول [سياسة الخصوصية](https://schubert-simon.de/privacy/kai.txt) إن Kai بلا حساب ولا تحليلات ولا خوادم خاصة تستلم بياناتك، وإن شروط المزود هي المطبقة، وتذكر مثالًا الفئة المجانية من Mistral AI، وتقول إن المدخلات والمخرجات قد تُستخدم في التدريب وفق شروط تلك الفئة. وتضيف أن أداة الموقع ترسل عنوان IP الخاص بك إلى ip-api.com، وأن الأدوات التي تقرأ الرسائل النصية أو بيانات التقويم تمرر هذه البيانات إلى خدمة الذكاء الاصطناعي. ومع نموذج على الجهاز تقول الوثائق إن الاستدلال يبقى على الجهاز.',
          'أما التخزين فيقول README والموقع إن المحادثات مشفرة، بينما تذكر [وثائق التشفير](https://github.com/SimonSchubert/Kai/blob/main/docs/features/encryption.md) في المشروع أنها على Android وiOS وسطح المكتب موجودة في قاعدة بيانات SQLite محلية يحميها صندوق التطبيقات الرملي في نظام التشغيل، مع حفظ مفاتيح API وكلمات المرور في إعدادات مشفرة. ويصنّف [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) التطبيق بميزة سلبية هي Non-Free Network Services. وتاريخ السياسة 3 فبراير 2026، أي قبل إصدارات 3.x، ولا تذكر المصادر التي قرأناها من يشغّل وكيل فئة Free ولا ما يحتفظ به.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه تصريحات المشروع نفسه؛ ولم يدقق PromptQuorum حركة الشبكة ولا التخزين في التطبيق.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من يريدون مساعدًا واحدًا على كل أجهزتهم،** بترخيص مفتوح مجاني وخيار بين السحابة وخادمهم الخاص ونموذج على الجهاز.',
          '**المولعون بالذاكرة والأدوات وMCP** ممن سيقرؤون الوثائق لتفعيل الميزات.',
          '**مستخدمو Ollama أو LM Studio** الراغبون في واجهة للهاتف أو سطح المكتب لخادمهم الخاص، إذ يدعم التطبيق عنوانًا أساسيًا مخصصًا.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة في الاستخدام الفعلي.** لم يشغّل PromptQuorum التطبيق، لذا لم نقيّم جودة الإجابات ولا السرعة ولا استهلاك البطارية والذاكرة للنماذج على الجهاز.',
          '**فئة Free.** لا تصف المصادر التي قرأناها مشغّلها ولا مدة الاحتفاظ بالبيانات ولا حدود الاستخدام ولا النماذج.',
          '**نسخة iPhone.** عرض App Store الإصدار 3.0.0 بينما عرضت القنوات الأخرى 3.3.0، فلا يتضح أي الميزات يحصل عليها مستخدمو iPhone.',
          '**التحقق المستقل.** لم نجد أي تدقيق أمني أو خاص بالخصوصية للتطبيق من طرف ثالث.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الترخيص',
          'الفرق الرئيسي',
        ],
        rows: [
          {
            'التطبيق': '[Jan](/ar/power-local-llm/jan-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الترخيص': 'مجاني / Apache 2.0 (نسخة معدلة)',
            'الفرق الرئيسي': 'عميل محادثة مفتوح المصدر لسطح المكتب يركز على الخصوصية بمحرك محلي خاص به',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'تطبيق هاتف مفتوح المصدر مبني حول نماذج تعمل على الجهاز',
          },
          {
            'التطبيق': '[Msty](/ar/power-local-llm/msty-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الترخيص': 'مجاني جزئيًا / مغلق المصدر',
            'الفرق الرئيسي': 'عميل سطح مكتب مغلق المصدر للنماذج المحلية والسحابية',
          },
          {
            'التطبيق': '[OpenClaw](/ar/power-local-llm/openclaw-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'إطار وكلاء مفتوح المصدر؛ ويصف مستودع Kai نفسه بأنه بديل بحجم الجيب',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يستطيع استخدام خادم Ollama الخاص بي؟',
            a: 'نعم. تستخدم الخدمة المتوافقة مع OpenAI افتراضيًا العنوان localhost:11434/v1 وهو عنوان Ollama المعتاد، وتقبل أي عنوان أساسي مخصص؛ ومنذ Android 17 يطلب التطبيق إذن الشبكة المحلية قبل الوصول إلى مضيف في الشبكة المحلية.',
          },
          {
            q: 'ماذا يحدث عند فشل مزود؟',
            a: 'يعيد Kai المحاولة مرتين ثم يجرّب الخدمة التالية المضبوطة ويعرض أيها أجابت. ولا يُمرَّر فشل النموذج على الجهاز بصمت إلى السحابة، ولا يُستخدم نموذج محلي هدفًا احتياطيًا أبدًا.',
          },
          {
            q: 'هل توجد نسخة ويب مستضافة؟',
            a: 'نعم، على [kai9000.com/app](https://kai9000.com/app/)؛ ولأن نسخة الويب بلا محرك محلي فهي تحتاج إلى مزود بعيد أو فئة Free.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Kai 9000 مساعد مجاني بترخيص Apache 2.0 للهاتف وسطح المكتب والمتصفح، يجعل الذاكرة والأدوات في صلب التجربة ويتيح الاختيار بين مزودي السحابة وخادمك الخاص ونماذج منزّلة على الجهاز. وفي المقابل، المسار المحلي اختياري وأضيق من المسار السحابي، وتختلف صفحات المشروع نفسه في وصف كيفية تخزين المحادثات، ولم يتمكن PromptQuorum من اختباره. يناسب من يريدون مساعدًا مفتوح المصدر على جميع أجهزتهم؛ ومن يريد تطبيق هاتف قائمًا على النماذج المحلية يمكنه مقارنته بـ [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)، ومستخدمو سطح المكتب بـ [Jan](/ar/power-local-llm/jan-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[الموقع الرسمي لـ Kai 9000](https://kai9000.com) — نظرة عامة والمنصات وروابط التنزيل، فُحص في 30 أكتوبر 2026.',
          '[وثائق Kai](https://kai9000.com/docs/) — الميزات والاستدلال على الجهاز والمزودون والتشفير.',
          '[مستودع GitHub والإصدارات](https://github.com/SimonSchubert/Kai) — ترخيص Apache 2.0 والإصدار 3.3.0 الصادر في 2 أكتوبر 2026 وسجل التغييرات.',
          '[سياسة خصوصية Kai](https://schubert-simon.de/privacy/kai.txt) — معالجة البيانات، سارية منذ 3 فبراير 2026.',
          'صفحتا [App Store](https://apps.apple.com/us/app/kai-ai/id6758148023) و[F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) — إصدار iOS ومتطلباته ووسم الميزة السلبية.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — تطبيق هاتف مفتوح المصدر للنماذج المحلية.',
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — تطبيق سطح مكتب مفتوح المصدر بمحرك خاص.',
          '[مراجعة OpenClaw](/ar/power-local-llm/openclaw-review) — إطار الوكلاء الذي يقارن Kai نفسه به.',
          '[مقارنة مساعدي الدردشة بنماذج LLM المحلية](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة فئة تطبيقات الدردشة.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/kai-9000-review-hero-zh.webp',
    title: 'Kai 9000 评测：免费开源 AI 助手，云端或本机运行',
    seoTitle: 'Kai 9000 评测：免费开源 AI 助手，云端与本机均可用',
    intro: 'Kai 9000 是柏林开发者 Simon Schubert 发布的免费 AI 助手，采用 Apache 2.0 许可证，可在 Android、iOS、Windows、macOS、Linux 和浏览器中运行。默认通过云端服务商对话，也可以选择在设备上运行下载的模型。本评测仅依据项目官网、文档、代码仓库和应用商店页面（核对于 2026 年 10 月 30 日），PromptQuorum 没有实际运行过它。',
    metaDescription: 'Kai 9000 评测：支持手机、桌面和网页的免费开源 AI 助手，带记忆和工具。默认使用云端，可选在本机运行 Gemma 4。数据流向与限制一览。',
    twitterDescription: 'Kai 9000 评测：覆盖所有平台的免费开源助手。默认云端，可选本机模型。哪些数据会离开设备，哪些我们无法核实。',
    audience: '想找一款覆盖手机、桌面和浏览器的免费开源 AI 助手，并想弄清哪些在本机运行、哪些发往云端、费用多少、哪些内容资料无法证实的读者。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Kai 9000 评测',
    targetKeywords: [
      'kai 9000 评测',
      'kai 9000 ai',
      '开源 ai 助手 记忆',
      '免费 ai 助手 android ios 桌面',
      'gemma 4 本机 应用',
      'openclaw 替代 手机',
    ],
    current_hardware_mentioned: [
      'Android 手机',
      'iPhone',
      'Windows 电脑',
      'Mac',
      'Gemma 4',
    ],
    leadAnswerBlock: '**Kai 9000（3.3.0 版，2026 年 10 月 2 日发布）是一款带持久记忆的开源助手，只有在下载设备端模型后才会在本机运行。** 默认情况下，它会把你的消息发送到云端服务。PromptQuorum 没有安装或测试过它，这里的所有说法都来自项目自身的资料。',
    quickAnswerTop: {
      zh: {
        question: 'Kai 9000 能离线使用吗？',
        answer: '根据项目文档，只有下载了设备端模型才可以：Gemma 4 和几款更小的模型通过 Google 的 LiteRT 在 Android、iOS 和桌面端运行，下载完成后无需联网。其余情况，包括无需 API 密钥的内置 Free 档，都会发往远程服务。',
        bullets: [
          '浏览器版没有本地引擎。',
          '设备端模型无法使用交互式界面、邮件、任务或 MCP 工具。',
          '应用本身免费；你另外添加的云端服务商按各自条款收费。',
          '它是带记忆和工具的助手，而不只是一个聊天窗口。',
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
        label: 'Kai 9000 是什么？',
        anchor: 'what-is-kai-9000',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '设备端模型与限制',
        anchor: 'requirements',
      },
      {
        label: '上手步骤',
        anchor: 'getting-started',
      },
      {
        label: '资料已确认的功能',
        anchor: 'key-features',
      },
      {
        label: '数据流向与存储',
        anchor: 'privacy',
      },
      {
        label: '适合谁',
        anchor: 'who-should-use',
      },
      {
        label: '我们无法核实的内容',
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
        label: '资料来源',
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
            text: 'Kai 9000 是一款面向手机、桌面和浏览器的免费开源 AI 助手，默认使用云端服务商，也可以在设备上运行下载的 Gemma 4 模型。',
          },
          {
            type: 'plain-terms',
            text: '你从应用商店或安装包安装，立刻在内置免费档中聊天，或填入自己的服务商密钥；只有在设置里下载了模型，才会切换到离线使用。',
          },
        ],
        items: [
          '维护情况：GitHub 显示 2026 年 10 月 2 日发布了 3.3.0 版，2026 年 10 月 24 日仍有代码推送，因此不适用停更警告。',
          '费用与许可：Apache 2.0 免费开源，无需账号；另外添加的云端服务商会直接向你收费。',
          '覆盖范围：Android、iOS、Windows、macOS、Linux 和网页版，各自有商店页面、安装包或浏览器链接。',
          '本地选项：目录中有五款设备端模型，从 Qwen3 0.6B 到 Gemma 4 12B，按需下载。',
          '更新节奏：据更新日志，2026 年 8 月 2 日至 10 月 2 日之间发布了四个 3.x 版本。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于项目官网、文档、代码仓库、隐私政策和应用商店页面，核对于 2026 年 10 月 30 日。PromptQuorum 没有安装、测试或评测该应用。',
          },
        ],
      },
      overview: {
        id: 'what-is-kai-9000',
        title: 'Kai 9000 是什么？',
        content: [
          '**Kai 9000 是一款能跨对话记住信息、并能通过工具采取行动的 AI 助手，而不只是回复文字。** 文档列出了持久记忆、项目称为“灵魂”的可编辑系统提示词、定期自查的后台“心跳”、网页搜索、日历事件、通知和 shell 命令等工具、MCP 服务器支持，以及由模型生成测验或仪表盘等界面的交互模式。',
          '它由柏林的 Simon Schubert 以 Apache 2.0 许可证发布在 [GitHub](https://github.com/SimonSchubert/Kai)，在[官网](https://kai9000.com)上叫 Kai 9000，在应用商店中叫“Kai - AI”。代码仓库把它描述为口袋里的 OpenClaw 替代品。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Kai 9000 在每个平台上都是常规下载：手机用商店应用，桌面用安装包，另有浏览器版，无需任何终端操作。**',
        ],
        columns: [
          '项目',
          '详情',
        ],
        rows: [
          {
            '项目': 'Android',
            '详情': '[Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.kai)、[F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/)或 [GitHub](https://github.com/SimonSchubert/Kai/releases) 上的 APK',
          },
          {
            '项目': 'iPhone 和 iPad',
            '详情': '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023)，iOS 15.3 或更高；Apple 芯片 Mac 也可用',
          },
          {
            '项目': 'Windows',
            '详情': '[GitHub Releases](https://github.com/SimonSchubert/Kai/releases) 上的 MSI，或 winget',
          },
          {
            '项目': 'macOS',
            '详情': '[GitHub Releases](https://github.com/SimonSchubert/Kai/releases) 上的 DMG，或 Homebrew',
          },
          {
            '项目': 'Linux',
            '详情': '[GitHub](https://github.com/SimonSchubert/Kai/releases) 上的 DEB、RPM、AppImage、Flatpak 或压缩包',
          },
          {
            '项目': '浏览器',
            '详情': '[kai9000.com/app](https://kai9000.com/app/)',
          },
          {
            '项目': '价格',
            '详情': '免费（Apache 2.0）',
          },
          {
            '项目': '官网',
            '详情': '[kai9000.com](https://kai9000.com)',
          },
          {
            '项目': '文档',
            '详情': '[kai9000.com/docs](https://kai9000.com/docs/)',
          },
          {
            '项目': '隐私政策',
            '详情': '[Kai 隐私政策](https://schubert-simon.de/privacy/kai.txt)',
          },
          {
            '项目': '源代码',
            '详情': '[GitHub 仓库](https://github.com/SimonSchubert/Kai)',
          },
        ],
        note: '评测版本：3.3.0，据 [GitHub Releases](https://github.com/SimonSchubert/Kai/releases) 发布于 2026 年 10 月 2 日，[F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) 也已收录；仓库最近一次代码推送在 2026 年 10 月 24 日。核对时 App Store 页面显示 3.0.0，因此 iPhone 用户的版本可能较旧。README 中的命令行安装方式：brew install --cask simonschubert/tap/kai、winget install SimonSchubert.Kai、yay -S kai-bin。',
      },
      requirements: {
        id: 'requirements',
        title: '设备端模型与限制',
        content: [
          '**设备端使用是可选的，仅限应用从 Hugging Face 下载的少量目录模型；项目[文档](https://github.com/SimonSchubert/Kai/blob/main/docs/features/on-device-inference.md)（最近核实于 2026 年 10 月 21 日）列出了这些模型。**',
        ],
        columns: [
          '模型',
          '下载大小',
          '文档备注',
        ],
        rows: [
          {
            '模型': 'Gemma 4 E2B IT',
            '下载大小': '2.59 GB',
            '文档备注': '工具调用可靠',
          },
          {
            '模型': 'Gemma 4 E4B IT',
            '下载大小': '3.66 GB',
            '文档备注': '工具调用可靠',
          },
          {
            '模型': 'Gemma 4 12B IT',
            '下载大小': '6.88 GB',
            '文档备注': '无法在 iOS 上加载',
          },
          {
            '模型': 'LFM2.5 1.2B Instruct',
            '下载大小': '736 MB',
            '文档备注': '带工具模板的最小模型',
          },
          {
            '模型': 'Qwen3 0.6B',
            '下载大小': '614 MB',
            '文档备注': '实际上只能聊天',
          },
        ],
        note: '文档提到的限制：设备端仅支持文字输入，没有交互式界面，工具列表被缩减，需要 64 位 Android 设备（Linux 上需支持 AVX2 的 CPU），网页版没有本地引擎。文档没有给出最低内存数字。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据项目的入门页面，PromptQuorum 没有实际操作过。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从“获取方式”表中选择适合你设备的商店应用或安装包。',
          },
          {
            title: '先用 Free 档聊天',
            whyItMatters: '打开应用，即可在无需 API 密钥的内置 Free 档立即聊天。',
          },
          {
            title: '添加服务商',
            whyItMatters: '在设置中添加 OpenAI、Gemini、Anthropic 等服务或兼容 OpenAI 的地址；可以把多个服务排成备用链。',
          },
          {
            title: '需要时切换到本地',
            whyItMatters: '在 Local Model 卡片中下载目录中的模型或导入 .litertlm 文件；这样聊天才会在设备上运行。',
          },
          {
            title: '决定是否启用工具',
            whyItMatters: '只有想让助手执行操作时，才开启 shell、邮件或 Android Linux 沙盒等工具；据隐私政策，工具默认关闭，需要你授权。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '资料已确认的功能',
        content: [
          '**以下每一项都来自项目的 README 和文档。**',
        ],
        items: [
          '**记忆与个性。** 助手保存并调用的持久记忆，加上可编辑的系统提示词。',
          '**工具与 MCP。** 使用远程模型时可用网页搜索、通知、日历事件、shell 命令、邮件和定时任务，并可连接 MCP 服务器。',
          '**交互式界面。** 模型可以生成测验、仪表盘和食谱卡片，点按即可操作；仅限远程模型。',
          '**服务商与备用。** 约 30 家云端服务商，以及任意兼容 OpenAI 的地址，按你设定的顺序尝试。',
          '**Android 上的 Linux 沙盒。** 可选的 Alpine 或 Debian 环境，助手无需 root 即可运行命令和脚本。',
          '**其他。** 朗读功能，以及向远程模型添加图片附件。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与存储',
        content: [
          '**哪些数据会离开设备，取决于你选择的模型。** 使用云端服务商或内置 Free 档时，你的消息以及加入每条提示的记忆会发送给该服务。[隐私政策](https://schubert-simon.de/privacy/kai.txt)称，Kai 没有账号、没有统计分析，也没有接收你数据的自有服务器，适用的是服务商的条款，并以 Mistral AI 的免费档为例，称按该档条款，输入和输出可能被用于训练。政策还说，位置工具会把你的 IP 地址发给 ip-api.com，读取短信或日历数据的工具会把这些数据传给 AI 服务。使用设备端模型时，文档称推理留在设备上。',
          '关于存储，README 和官网说对话经过加密，而项目的[加密文档](https://github.com/SimonSchubert/Kai/blob/main/docs/features/encryption.md)写明，在 Android、iOS 和桌面端，对话保存在受操作系统应用沙盒保护的本地 SQLite 数据库中，API 密钥和密码则存放在加密设置里。[F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) 给该应用标注了反功能“Non-Free Network Services”。政策日期为 2026 年 2 月 3 日，早于 3.x 版本；我们阅读的资料也没有说明谁在运营 Free 档的代理，以及它会保留什么。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是项目自己的说法；PromptQuorum 没有审计该应用的网络流量或存储。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁',
        items: [
          '**想在所有设备上用同一个助手的人：** 免费开源许可，可选云端、自有服务器或设备端模型。',
          '**喜欢记忆、工具和 MCP 的折腾党：** 愿意读文档来开启功能。',
          '**Ollama 或 LM Studio 用户：** 想要一个连接自有服务器的手机或桌面前端，因为它支持自定义基础地址。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际体验质量。** PromptQuorum 没有运行该应用，因此没有评估设备端模型的回答质量、速度、耗电和内存占用。',
          '**Free 档。** 我们阅读的资料没有说明其运营方、数据保留、使用上限和所用模型。',
          '**iPhone 版本。** App Store 显示 3.0.0，其他渠道是 3.3.0，iPhone 用户能用哪些功能并不清楚。',
          '**独立核查。** 我们没有找到第三方对该应用的安全或隐私审计。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: [
          '应用',
          '平台',
          '价格/许可证',
          '主要区别',
        ],
        rows: [
          {
            '应用': '[Jan](/zh/power-local-llm/jan-review)',
            '平台': 'Windows、macOS、Linux',
            '价格/许可证': '免费/Apache 2.0（变体）',
            '主要区别': '注重隐私的开源桌面聊天客户端，自带本地引擎',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格/许可证': '免费/MIT',
            '主要区别': '围绕设备端模型打造的开源手机应用',
          },
          {
            '应用': '[Msty](/zh/power-local-llm/msty-review)',
            '平台': 'Windows、macOS、Linux',
            '价格/许可证': '免费增值/闭源',
            '主要区别': '支持本地与云端模型的闭源桌面客户端',
          },
          {
            '应用': '[OpenClaw](/zh/power-local-llm/openclaw-review)',
            '平台': 'Windows、macOS、Linux',
            '价格/许可证': '免费/MIT',
            '主要区别': '开源智能体框架；Kai 的仓库自称是它的口袋版替代品',
          },
        ],
        note: '竞品信息经常变动；请在各应用自己的页面确认最新的价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '它能连接我自己的 Ollama 服务器吗？',
            a: '可以。兼容 OpenAI 的服务默认使用 Ollama 的常用地址 localhost:11434/v1，也接受任意自定义基础地址；在 Android 17 及以上，访问局域网主机前应用会请求本地网络权限。',
          },
          {
            q: '服务商失败时会怎样？',
            a: 'Kai 会重试两次，然后尝试下一个已配置的服务，并显示由哪个服务回答。设备端模型出错时不会悄悄转交给云端，本地模型也不会被用作备用目标。',
          },
          {
            q: '有托管的网页版吗？',
            a: '有，地址是 [kai9000.com/app](https://kai9000.com/app/)；由于网页版没有本地引擎，需要使用远程服务商或 Free 档。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Kai 9000 是一款面向手机、桌面和浏览器的 Apache 2.0 免费助手，把记忆和工具作为核心功能，让你在云端服务商、自有服务器和下载的设备端模型之间选择。代价是：本地路径是可选的，比云端路径更受限；项目自己的页面对对话如何存储说法不一；PromptQuorum 也无法实际测试。它适合想在所有设备上使用同一个开源助手的人；想要围绕本地模型的手机应用，可以对比 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)，桌面用户可以对比 [Jan](/zh/power-local-llm/jan-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Kai 9000 官网](https://kai9000.com) — 概览、平台和下载链接，核对于 2026 年 10 月 30 日。',
          '[Kai 文档](https://kai9000.com/docs/) — 功能、设备端推理、服务商和加密页面。',
          '[GitHub 仓库与发布](https://github.com/SimonSchubert/Kai) — Apache 2.0 许可证，2026 年 10 月 2 日发布的 3.3.0 版，更新日志。',
          '[Kai 隐私政策](https://schubert-simon.de/privacy/kai.txt) — 数据处理方式，自 2026 年 2 月 3 日起生效。',
          '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023) 与 [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) 页面 — iOS 版本与要求，反功能标注。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 面向本地模型的开源手机应用。',
          '[Jan 评测](/zh/power-local-llm/jan-review) — 自带引擎的开源桌面应用。',
          '[OpenClaw 评测](/zh/power-local-llm/openclaw-review) — Kai 对标的智能体框架。',
          '[本地 LLM 聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared) — 聊天应用类别的对比。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-30',
    dateModified: '2026-10-30',
    next_refresh_due: '2027-04-30',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/kai-9000-review-hero-ko.webp',
    title: 'Kai 9000 리뷰: 클라우드와 기기 내 실행을 모두 지원하는 무료 오픈소스 AI 어시스턴트',
    seoTitle: 'Kai 9000 리뷰: 무료 오픈소스 AI 어시스턴트',
    intro: 'Kai 9000은 베를린 개발자 Simon Schubert가 공개한 Apache 2.0 라이선스의 무료 AI 어시스턴트로, Android, iOS, Windows, macOS, Linux, 브라우저에서 실행됩니다. 기본적으로 클라우드 제공자와 통신하며, 선택적으로 내려받은 모델을 기기에서 직접 실행할 수 있습니다. 이 리뷰는 2026년 10월 30일에 확인한 프로젝트의 공식 웹사이트, 문서, 저장소, 스토어 페이지 범위로 한정하며, PromptQuorum은 직접 실행해 보지 않았습니다.',
    metaDescription: 'Kai 9000 리뷰: 휴대폰·PC·웹에서 쓰는 무료 오픈소스 AI 어시스턴트. 기본은 클라우드, 선택 시 기기 내 Gemma 4. 데이터 흐름과 한계를 정리했습니다.',
    twitterDescription: 'Kai 9000 리뷰: 모든 플랫폼을 지원하는 무료 오픈소스 어시스턴트. 기본은 클라우드, 선택 시 기기 내 모델. 기기 밖으로 나가는 정보와 미확인 사항.',
    audience: '휴대폰, PC, 브라우저에서 쓸 무료 오픈소스 AI 어시스턴트를 찾으며 무엇이 로컬에서 실행되고, 무엇이 클라우드로 전송되고, 비용은 얼마이며, 무엇이 자료로 확인되지 않는지 알고 싶은 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Kai 9000 리뷰',
    targetKeywords: [
      'kai 9000 리뷰',
      'kai 9000 ai',
      '오픈소스 ai 어시스턴트 메모리',
      '무료 ai 어시스턴트 android ios',
      'gemma 4 기기 내 앱',
      'openclaw 대안 휴대폰',
    ],
    current_hardware_mentioned: [
      'Android 휴대폰',
      'iPhone',
      'Windows PC',
      'Mac',
      'Gemma 4',
    ],
    leadAnswerBlock: '**Kai 9000(버전 3.3.0, 2026년 10월 2일 출시)은 영구 메모리를 갖춘 오픈소스 어시스턴트이며, 기기 내 모델을 내려받은 경우에만 로컬에서 실행됩니다.** 기본적으로는 메시지를 클라우드 서비스로 보냅니다. PromptQuorum은 설치하거나 테스트하지 않았으며, 여기 적은 내용은 모두 프로젝트 자체 자료에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Kai 9000은 오프라인에서 작동합니까?',
        answer: '프로젝트 문서에 따르면 기기에 모델을 내려받은 경우에만 가능합니다. Gemma 4와 몇몇 소형 모델이 Google의 LiteRT를 통해 Android, iOS, 데스크톱에서 실행되며, 내려받은 뒤에는 인터넷이 필요 없습니다. API 키가 필요 없는 내장 Free 등급을 포함해 그 외의 경우는 모두 원격 서비스로 전송됩니다.',
        bullets: [
          '브라우저 버전에는 로컬 엔진이 없습니다.',
          '기기 내 모델에서는 인터랙티브 화면, 이메일, 작업, MCP 도구를 사용할 수 없습니다.',
          '앱은 무료이며, 추가한 클라우드 제공자는 각자의 약관에 따라 요금을 청구합니다.',
          '단순한 채팅창이 아니라 메모리와 도구를 갖춘 어시스턴트입니다.',
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
        label: 'Kai 9000이란?',
        anchor: 'what-is-kai-9000',
      },
      {
        label: '받는 방법',
        anchor: 'get-it',
      },
      {
        label: '기기 내 모델과 한계',
        anchor: 'requirements',
      },
      {
        label: '시작하는 방법',
        anchor: 'getting-started',
      },
      {
        label: '자료로 확인된 기능',
        anchor: 'key-features',
      },
      {
        label: '데이터 흐름과 저장',
        anchor: 'privacy',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 점',
        anchor: 'who-should-not-use',
      },
      {
        label: '경쟁 앱과 대안',
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
            text: 'Kai 9000은 휴대폰, PC, 브라우저에서 쓰는 무료 오픈소스 AI 어시스턴트로, 기본적으로 클라우드 제공자를 사용하며 내려받은 Gemma 4 모델을 기기에서 실행할 수도 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '스토어나 설치 파일로 설치한 뒤 내장 무료 등급으로 바로 대화하거나 직접 가진 제공자 키를 추가합니다. 오프라인 사용은 설정에서 모델을 내려받았을 때만 가능합니다.',
          },
        ],
        items: [
          '유지 관리: GitHub에는 2026년 10월 2일 릴리스 3.3.0과 2026년 10월 24일 코드 푸시가 표시되어 있어 방치 프로젝트 경고는 해당하지 않습니다.',
          '비용과 라이선스: Apache 2.0 무료, 계정 불필요이며, 추가한 클라우드 제공자는 사용자에게 직접 요금을 청구합니다.',
          '지원 범위: Android, iOS, Windows, macOS, Linux, 웹 앱이며 각각 스토어 페이지, 설치 파일 또는 브라우저 링크가 있습니다.',
          '로컬 옵션: Qwen3 0.6B부터 Gemma 4 12B까지 카탈로그에 등록된 기기 내 모델 5종을 필요할 때 내려받습니다.',
          '속도: 변경 이력에 따르면 2026년 8월 2일부터 10월 2일 사이에 3.x 버전이 네 번 출시되었습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 30일에 확인한 프로젝트의 공식 웹사이트, 문서, 저장소, 개인정보 처리방침, 스토어 페이지를 바탕으로 합니다. PromptQuorum은 앱을 설치, 테스트, 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-kai-9000',
        title: 'Kai 9000이란?',
        content: [
          '**Kai 9000은 대화가 바뀌어도 내용을 기억하고, 텍스트로 답하는 데 그치지 않고 도구를 통해 행동할 수 있는 AI 어시스턴트입니다.** 문서에는 영구 메모리, 프로젝트가 소울이라고 부르는 편집 가능한 시스템 프롬프트, 주기적으로 점검하는 백그라운드 하트비트, 웹 검색·캘린더 일정·알림·셸 명령 같은 도구, MCP 서버 지원, 모델이 퀴즈나 대시보드 같은 화면을 직접 만드는 인터랙티브 모드가 나와 있습니다.',
          '베를린의 Simon Schubert가 Apache 2.0 라이선스로 [GitHub](https://github.com/SimonSchubert/Kai)에 공개하고 있으며, [공식 웹사이트](https://kai9000.com)에서는 Kai 9000, 앱 스토어에서는 "Kai - AI"라는 이름을 씁니다. 저장소는 이를 주머니 속 OpenClaw 대안이라고 설명합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**Kai 9000은 모든 플랫폼에서 일반적인 방식으로 받을 수 있습니다. 휴대폰은 스토어 앱, 데스크톱은 설치 파일, 그리고 브라우저 버전이 있으며 터미널 작업은 필요 없습니다.**',
        ],
        columns: [
          '항목',
          '세부 내용',
        ],
        rows: [
          {
            '항목': 'Android',
            '세부 내용': '[Google Play](https://play.google.com/store/apps/details?id=com.inspiredandroid.kai), [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) 또는 [GitHub](https://github.com/SimonSchubert/Kai/releases)의 APK',
          },
          {
            '항목': 'iPhone·iPad',
            '세부 내용': '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023), iOS 15.3 이상, Apple 실리콘 Mac도 지원',
          },
          {
            '항목': 'Windows',
            '세부 내용': '[GitHub Releases](https://github.com/SimonSchubert/Kai/releases)의 MSI 또는 winget',
          },
          {
            '항목': 'macOS',
            '세부 내용': '[GitHub Releases](https://github.com/SimonSchubert/Kai/releases)의 DMG 또는 Homebrew',
          },
          {
            '항목': 'Linux',
            '세부 내용': '[GitHub](https://github.com/SimonSchubert/Kai/releases)의 DEB, RPM, AppImage, Flatpak, tarball',
          },
          {
            '항목': '브라우저',
            '세부 내용': '[kai9000.com/app](https://kai9000.com/app/)',
          },
          {
            '항목': '가격',
            '세부 내용': '무료(Apache 2.0)',
          },
          {
            '항목': '웹사이트',
            '세부 내용': '[kai9000.com](https://kai9000.com)',
          },
          {
            '항목': '문서',
            '세부 내용': '[kai9000.com/docs](https://kai9000.com/docs/)',
          },
          {
            '항목': '개인정보 처리방침',
            '세부 내용': '[Kai 개인정보 처리방침](https://schubert-simon.de/privacy/kai.txt)',
          },
          {
            '항목': '소스 코드',
            '세부 내용': '[GitHub 저장소](https://github.com/SimonSchubert/Kai)',
          },
        ],
        note: '확인한 버전: 3.3.0. [GitHub Releases](https://github.com/SimonSchubert/Kai/releases)에 따르면 2026년 10월 2일에 출시되었고 [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/)에도 올라 있습니다. 저장소의 가장 최근 코드 푸시는 2026년 10월 24일입니다. 확인 시점의 App Store 페이지는 3.0.0이었으므로 iPhone 사용자는 이전 빌드일 수 있습니다. README의 명령줄 설치: brew install --cask simonschubert/tap/kai, winget install SimonSchubert.Kai, yay -S kai-bin.',
      },
      requirements: {
        id: 'requirements',
        title: '기기 내 모델과 한계',
        content: [
          '**기기 내 사용은 선택 사항이며, 앱이 Hugging Face에서 내려받는 소수의 카탈로그 모델로 한정됩니다. 2026년 10월 21일에 마지막으로 확인된 프로젝트 [문서](https://github.com/SimonSchubert/Kai/blob/main/docs/features/on-device-inference.md)에 목록이 있습니다.**',
        ],
        columns: [
          '모델',
          '다운로드',
          '문서의 비고',
        ],
        rows: [
          {
            '모델': 'Gemma 4 E2B IT',
            '다운로드': '2.59 GB',
            '문서의 비고': '도구 호출이 안정적',
          },
          {
            '모델': 'Gemma 4 E4B IT',
            '다운로드': '3.66 GB',
            '문서의 비고': '도구 호출이 안정적',
          },
          {
            '모델': 'Gemma 4 12B IT',
            '다운로드': '6.88 GB',
            '문서의 비고': 'iOS에서는 로드 불가',
          },
          {
            '모델': 'LFM2.5 1.2B Instruct',
            '다운로드': '736 MB',
            '문서의 비고': '도구 템플릿이 있는 가장 작은 모델',
          },
          {
            '모델': 'Qwen3 0.6B',
            '다운로드': '614 MB',
            '문서의 비고': '실제로는 채팅 전용',
          },
        ],
        note: '문서에 적힌 한계: 기기에서는 텍스트 입력만 가능, 인터랙티브 화면 없음, 축소된 도구 목록, 64비트 Android 기기(Linux에서는 AVX2 지원 CPU) 필요, 웹 버전에는 로컬 엔진 없음. 최소 RAM 수치는 문서에 없습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 프로젝트의 시작 가이드를 따른 것이며, PromptQuorum은 직접 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '"받는 방법" 표에서 사용하는 기기에 맞는 스토어 앱이나 설치 파일을 고릅니다.',
          },
          {
            title: 'Free 등급으로 대화',
            whyItMatters: '앱을 열고 API 키가 필요 없는 내장 Free 등급으로 바로 대화합니다.',
          },
          {
            title: '제공자 추가',
            whyItMatters: '설정에서 OpenAI, Gemini, Anthropic 같은 서비스나 OpenAI 호환 주소를 추가합니다. 여러 개를 폴백 순서로 정렬할 수 있습니다.',
          },
          {
            title: '원하면 로컬로 전환',
            whyItMatters: 'Local Model 카드에서 카탈로그 모델을 내려받거나 .litertlm 파일을 가져옵니다. 그때부터 채팅이 기기에서 실행됩니다.',
          },
          {
            title: '도구 사용 결정',
            whyItMatters: '셸, 이메일, Android Linux 샌드박스 같은 도구는 어시스턴트가 직접 행동하길 원할 때만 켭니다. 개인정보 처리방침에 따르면 도구는 기본적으로 꺼져 있으며 사용자의 허가가 필요합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '자료로 확인된 기능',
        content: [
          '**아래 항목은 모두 프로젝트의 README와 문서에서 가져왔습니다.**',
        ],
        items: [
          '**메모리와 개성.** 어시스턴트가 저장하고 불러오는 영구 메모리와 편집 가능한 시스템 프롬프트.',
          '**도구와 MCP.** 원격 모델에서 웹 검색, 알림, 캘린더 일정, 셸 명령, 이메일, 예약 작업을 쓰고 MCP 서버에 연결할 수 있습니다.',
          '**인터랙티브 화면.** 모델이 퀴즈, 대시보드, 레시피 카드를 만들고 탭으로 조작합니다. 원격 모델에서만 가능합니다.',
          '**제공자와 폴백.** 약 30개의 클라우드 제공자와 모든 OpenAI 호환 주소를 설정한 순서대로 시도합니다.',
          '**Android Linux 샌드박스.** 어시스턴트가 root 없이 명령과 스크립트를 실행할 수 있는 선택적 Alpine 또는 Debian 환경.',
          '**기타.** 음성 읽기와 원격 모델용 이미지 첨부.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 저장',
        content: [
          '**기기 밖으로 나가는 정보는 선택한 모델에 따라 달라집니다.** 클라우드 제공자나 내장 Free 등급을 쓰면 메시지와 각 프롬프트에 더해진 기억이 해당 서비스로 전송됩니다. [개인정보 처리방침](https://schubert-simon.de/privacy/kai.txt)은 Kai에 계정도, 분석도, 사용자 데이터를 받는 자체 서버도 없고 제공자의 약관이 적용된다고 밝히며, 예로 Mistral AI 무료 등급을 들며, 해당 등급의 약관에 따라 입력과 출력이 학습에 쓰일 수 있다고 적고 있습니다. 또한 위치 도구는 IP 주소를 ip-api.com으로 보내고, SMS나 캘린더 데이터를 읽는 도구는 그 데이터를 AI 서비스에 전달한다고 적혀 있습니다. 기기 내 모델에서는 문서에 따르면 추론이 기기 안에 머뭅니다.',
          '저장 방식에 대해 README와 웹사이트는 대화가 암호화된다고 설명하지만, 프로젝트의 [암호화 문서](https://github.com/SimonSchubert/Kai/blob/main/docs/features/encryption.md)에는 Android, iOS, 데스크톱에서 대화가 운영체제 앱 샌드박스로 보호되는 로컬 SQLite 데이터베이스에 저장되고 API 키와 비밀번호는 암호화된 설정에 보관된다고 되어 있습니다. [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/)는 이 앱에 Non-Free Network Services 반기능 표시를 달았습니다. 방침의 날짜는 2026년 2월 3일로 3.x 릴리스보다 앞서며, 확인한 자료에는 Free 등급의 프록시를 누가 운영하고 무엇을 보관하는지가 나와 있지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 프로젝트 자체의 설명이며, PromptQuorum은 앱의 네트워크 트래픽이나 저장 방식을 감사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**모든 기기에서 하나의 어시스턴트를 쓰고 싶은 분.** 무료 오픈소스 라이선스이며 클라우드, 자체 서버, 기기 내 모델 중 선택할 수 있습니다.',
          '**메모리, 도구, MCP를 좋아하는 분.** 문서를 읽고 기능을 직접 켤 수 있는 분께 맞습니다.',
          '**Ollama나 LM Studio 사용자.** 사용자 지정 기본 주소를 지원하므로 자체 서버용 휴대폰·PC 프런트엔드로 쓸 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 점',
        items: [
          '**실사용 품질.** PromptQuorum이 앱을 실행하지 않았으므로 기기 내 모델의 답변 품질, 속도, 배터리와 메모리 사용량은 평가하지 않았습니다.',
          '**Free 등급.** 운영 주체, 데이터 보관, 사용 한도, 사용 모델은 확인한 자료에 설명되어 있지 않습니다.',
          '**iPhone 빌드.** App Store는 3.0.0, 다른 경로는 3.3.0으로 표시되어 iPhone 사용자가 어떤 기능을 받는지 불분명합니다.',
          '**독립적 검증.** 제3자의 앱 보안·개인정보 감사는 찾지 못했습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '주요 차이점',
        ],
        rows: [
          {
            '앱': '[Jan](/ko/power-local-llm/jan-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0(변형)',
            '주요 차이점': '자체 로컬 엔진을 갖춘, 개인정보 중심의 오픈소스 데스크톱 채팅 클라이언트',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '주요 차이점': '기기에서 실행되는 모델을 중심으로 만든 오픈소스 휴대폰 앱',
          },
          {
            '앱': '[Msty](/ko/power-local-llm/msty-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '프리미엄 / 비공개 소스',
            '주요 차이점': '로컬과 클라우드 모델을 지원하는 비공개 소스 데스크톱 클라이언트',
          },
          {
            '앱': '[OpenClaw](/ko/power-local-llm/openclaw-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '주요 차이점': '오픈소스 에이전트 프레임워크. Kai 저장소는 스스로를 주머니 속 대안이라고 소개',
          },
        ],
        note: '경쟁 앱의 세부 정보는 자주 바뀝니다. 각 앱의 최신 가격, 라이선스, 지원 플랫폼은 해당 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '내 Ollama 서버를 쓸 수 있습니까?',
            a: '예. OpenAI 호환 서비스의 기본값은 Ollama의 일반 주소인 localhost:11434/v1이며 사용자 지정 기본 주소도 받습니다. Android 17 이상에서는 LAN 호스트에 접속하기 전에 앱이 로컬 네트워크 권한을 요청합니다.',
          },
          {
            q: '제공자가 실패하면 어떻게 됩니까?',
            a: 'Kai는 두 번 재시도한 뒤 설정된 다음 서비스를 시도하고 어느 서비스가 답했는지 표시합니다. 기기 내 모델의 실패가 조용히 클라우드로 넘겨지는 일은 없으며, 로컬 모델이 폴백 대상으로 쓰이는 일도 없습니다.',
          },
          {
            q: '호스팅되는 웹 버전이 있습니까?',
            a: '예, [kai9000.com/app](https://kai9000.com/app/)에 있습니다. 웹 버전에는 로컬 엔진이 없으므로 원격 제공자나 Free 등급이 필요합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Kai 9000은 메모리와 도구를 핵심으로 삼은, 휴대폰·PC·브라우저용 Apache 2.0 무료 어시스턴트이며 클라우드 제공자, 자체 서버, 내려받은 기기 내 모델 중에서 고를 수 있습니다. 반면 로컬 경로는 선택 사항이고 클라우드 경로보다 좁으며, 대화 저장 방식에 대한 프로젝트 자체 페이지의 설명이 서로 다르고, PromptQuorum은 직접 테스트하지 못했습니다. 모든 기기에서 오픈소스 어시스턴트 하나를 쓰고 싶은 분께 맞습니다. 로컬 모델 중심의 휴대폰 앱을 원하면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review), 데스크톱이라면 [Jan](/ko/power-local-llm/jan-review)과 비교해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Kai 9000 웹사이트](https://kai9000.com) — 개요, 플랫폼, 다운로드 링크 (2026년 10월 30일 확인).',
          '[Kai 문서](https://kai9000.com/docs/) — 기능, 기기 내 추론, 제공자, 암호화 페이지.',
          '[GitHub 저장소와 릴리스](https://github.com/SimonSchubert/Kai) — Apache 2.0 라이선스, 2026년 10월 2일 출시 버전 3.3.0, 변경 이력.',
          '[Kai 개인정보 처리방침](https://schubert-simon.de/privacy/kai.txt) — 데이터 처리, 2026년 2월 3일 시행.',
          '[App Store](https://apps.apple.com/us/app/kai-ai/id6758148023)와 [F-Droid](https://f-droid.org/en/packages/com.inspiredandroid.kai/) 페이지 — iOS 버전과 요구 사항, 반기능 표시.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 로컬 모델용 오픈소스 휴대폰 앱.',
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 자체 엔진을 갖춘 오픈소스 데스크톱 앱.',
          '[OpenClaw 리뷰](/ko/power-local-llm/openclaw-review) — Kai가 비교 대상으로 삼는 에이전트 프레임워크.',
          '[로컬 LLM 채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 채팅 앱 카테고리 비교.',
        ],
      },
    },
  },
}
