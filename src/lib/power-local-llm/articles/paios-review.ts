// PAIOS Review: Offline Gemini Nano Chat for Android
// Slug: paios-review
// Companion to: google-ai-edge-gallery-review, layla-review, pocketpal-ai-review, off-grid-ai-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/paios-review-hero-en.webp',
    title: 'PAIOS Review: Offline Gemini Nano Chat for Android',
    seoTitle: 'PAIOS Review: Offline Gemini Nano Chat for Android',
    intro:
      'PAIOS (Personal AI Operating System) is a free, open-source Android app that gives Google\'s on-device Gemini Nano model a chat interface, with multiple chats, custom prompts, and temperature controls. This review covers what it does, which phones it works on, and where it falls short, using the project\'s own README, changelog, and Google Play listing.',
    metaDescription:
      'PAIOS review: free, open-source Android chat app (Unlicense) for Google\'s on-device Gemini Nano. Features, supported devices, privacy details, limits, and how it compares to Layla and PocketPal AI.',
    twitterDescription:
      'PAIOS review: an Android client for Gemini Nano via Google AI Core. Which phones work, what the changelog says about network use, and where it falls short.',
    audience:
      'Android users with a Pixel 9 or newer (or another AICore-supported phone) who want a free, open-source, on-device chat app for Gemini Nano — covers features, device support, privacy, limits, and how PAIOS compares to other Android local-AI apps.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PAIOS review',
    targetKeywords: [
      'paios review',
      'paios android app',
      'gemini nano android app',
      'run gemini nano offline',
      'google ai core chat app',
      'puzzak paios',
      'open source gemini nano client',
      'offline ai chat android pixel',
    ],
    current_hardware_mentioned: ['Pixel 9', 'Pixel 10'],
    leadAnswerBlock:
      '**PAIOS is a chat front end for Google\'s Gemini Nano model that, per its README, runs entirely on an Android phone through Google AI Core, with its code released into the public domain under the [Unlicense](https://github.com/Puzzaks/PAIOS).** It is a client, not a model library: it only works on phones where AI Core is supported (the README names the Pixel 9 and 10 series as examples) and, per its documentation, only with Gemini Nano. The project labels itself alpha, and this review (version 1.1.8) is based on its public documentation, not hands-on device testing.',
    quickAnswerTop: {
      en: {
        question: 'Is PAIOS worth installing on an Android phone?',
        answer:
          'Yes, if you own a phone with Google AI Core support and want a free, open-source way to chat with Gemini Nano offline, with per-chat prompts and temperature control. Skip it if you want to choose between many models or import your own: PAIOS documents support for Gemini Nano only. Layla, PocketPal AI, and Off Grid AI cover broader model choice.',
        bullets: [
          'Free on Google Play and as a GitHub APK; open source under the Unlicense.',
          'Runs Gemini Nano on-device through Google AI Core; no model import or catalogue is documented.',
          'Needs a phone with AI Core support, per the README (Pixel 9/10 series given as examples).',
          'Multiple chats, custom instructions, temperature and token controls, and an editable prompt library.',
          'Self-described alpha software on a developer-preview model: expect rough edges.',
        ],
        updatedDate: '2026-10-02',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get PAIOS', anchor: 'get-it' },
      { label: 'PAIOS at a Glance', anchor: 'at-a-glance' },
      { label: 'What PAIOS Is', anchor: 'what-is-paios' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features and Controls', anchor: 'features' },
      { label: 'Device Requirements', anchor: 'requirements' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'PAIOS vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use PAIOS', anchor: 'who-should-use' },
      { label: 'Who Should Not Use PAIOS', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PAIOS, built by developer Puzzak, lets you chat with Gemini Nano fully on-device through Google AI Core, with multiple chats, custom prompts, and temperature controls; it costs nothing and its source is public.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a chat window for the small AI model that Google already built into supported Android phones: no account, no cloud model, and no model files to manage, but also no choice of model.',
          },
        ],
        items: [
          'Version reviewed: 1.1.8, the latest [GitHub release](https://github.com/Puzzaks/PAIOS/releases).',
          'Price and license: free, with no in-app purchases listed on [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios); the code is public domain under the Unlicense.',
          'Model: Gemini Nano, run by Google AI Core on the phone; the documentation describes no way to load other models.',
          'Platform: Android only, and only on AI Core-supported phones (see Device Requirements).',
          'Maturity: the developer labels it alpha, and the project had its last commit in May 2026.',
        ],
      },
      getItPAIOS: {
        id: 'get-it',
        title: 'Get PAIOS',
        content: [
          '**PAIOS is available from Google Play and as a direct APK on GitHub.** Both are free. Use the Play listing for automatic updates, or the GitHub APK if you prefer to install outside the Play Store.',
          'This review is a companion to PromptQuorum\'s [Local LLM Software Directory](/power-local-llm/local-llm-software-directory), which lists PAIOS alongside other on-device and local AI tools.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            'Channel': 'Google Play',
            'Get It': '[PAIOS - Offline AI on Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)',
          },
          {
            'Channel': 'GitHub APK',
            'Get It': '[PAIOS releases on GitHub](https://github.com/Puzzaks/PAIOS/releases)',
          },
          {
            'Channel': 'Source code',
            'Get It': '[Puzzaks/PAIOS](https://github.com/Puzzaks/PAIOS)',
          },
        ],
        note: 'Since version 1.1.2 the app uses a new package name, and the developer says older versions no longer work because of a Play Store listing issue. Install a current build rather than an old APK.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PAIOS at a Glance',
        columns: ['Attribute', 'PAIOS'],
        rows: [
          { 'Attribute': 'Platform', 'PAIOS': 'Android only' },
          { 'Attribute': 'Price', 'PAIOS': 'Free' },
          { 'Attribute': 'License', 'PAIOS': 'Unlicense (public domain)' },
          { 'Attribute': 'Runs fully offline', 'PAIOS': 'Chat runs on-device; see Privacy for network use' },
          { 'Attribute': 'Import your own models', 'PAIOS': 'Not stated; Gemini Nano is the documented model' },
          { 'Attribute': 'In-app model downloads', 'PAIOS': 'Not stated' },
          { 'Attribute': 'Image input', 'PAIOS': 'Not stated; text interface' },
          { 'Attribute': 'Voice input / output', 'PAIOS': 'Not stated' },
        ],
        note: 'Attributes follow the mobile-chat comparison used in the Local LLM Software Directory. "Not stated" means the README, roadmap, and changelog do not mention the feature, not that it was tested and found missing.',
      },
      whatIsPAIOS: {
        id: 'what-is-paios',
        title: 'What PAIOS Is',
        content: [
          '**PAIOS is a front end for Gemini Nano, not an inference engine.** Google AI Core, the Android system service that hosts Gemini Nano, runs the model. PAIOS adds the chat interface around it: separate conversations, prompts, and generation settings.',
          'It is built mainly by one developer, Puzzak, with community translation contributions, written in Dart, and published as an independent project that is not affiliated with Google. The repository was created in November 2025 and has about 170 GitHub stars.',
          'This review draws on the README, changelog, roadmap, GitHub releases, and the Google Play listing. It does not include hands-on testing on a device, so speed and answer quality are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is a normal app install on a supported phone, with no account.** The README does not describe the first-run flow in detail, so the steps below follow the documented requirements.',
        ],
        numberedItems: [
          {
            title: 'Check that your phone supports AI Core',
            whyItMatters: 'PAIOS only works where Google AI Core is available; confirm your device is supported before installing (see Device Requirements).',
          },
          {
            title: 'Install PAIOS',
            whyItMatters: 'Get it from [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) or the [GitHub releases page](https://github.com/Puzzaks/PAIOS/releases).',
          },
          {
            title: 'Start a chat',
            whyItMatters: 'Create a conversation, then set its temperature, token limit, and prompt if you want something other than the defaults.',
          },
          {
            title: 'Optional: customize prompts',
            whyItMatters: 'Open the prompt manager to pick a system prompt, write your own, or import one from a Markdown file.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features and Controls',
        content: [
          '**PAIOS focuses on controlling how Gemini Nano is prompted, since the model itself is fixed.** Everything below comes from the README and changelog for versions up to 1.1.8.',
        ],
        items: [
          '**Multiple chats.** Create, rename, and pin conversations, each with its own context.',
          '**Generation controls.** Adjust temperature and maximum response tokens; since 1.1.7, temperature can be set per chat.',
          '**Prompt manager.** Since 1.1.6 you can pick, edit, and assign system and user prompts per chat; 1.1.8 added Markdown import and export of prompts.',
          '**Custom instructions.** Steer the model toward a persona or task, and optionally inject the current date, time, and app language.',
          '**Prompt transparency.** You can view the actual system prompt PAIOS sends to the model.',
          '**Auto-continue.** Since 1.1.7, long answers can be continued automatically, a workaround for the roughly 25-second generation limit described in the roadmap.',
          '**Translations.** Community contributors have added Turkish, German, and Chinese interface translations.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Device Requirements',
        content: [
          '**PAIOS needs a phone with Google AI Core support.** The README states that it "requires a supported device with Google AI Core (e.g., Pixel 9/10 series)". It lists no minimum RAM or storage figure, so device support, not specs, is the gate.',
          'Google decides which phones receive AI Core and Gemini Nano, and that list can change. Check Google\'s own device documentation, or try the Play Store install on your phone, before assuming a non-Pixel device will work.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The README says PAIOS runs "entirely on-device using Google\'s AI Core. No data leaves your phone."** The Google Play listing shows the developer\'s data-safety declaration as "No data collected" and "No data shared".',
          'The changelog adds detail worth knowing. Version 1.1.2 introduced optional analytics for debugging and crash reporting, version 1.1.5 added crash reporting, and later versions mention Firebase Remote Config for app settings and prompts downloaded from GitHub. The README and the Play declaration do not mention these, and this review did not inspect the app\'s network traffic.',
          'If you need zero network contact, check the app\'s settings for the analytics option and inspect traffic yourself. The source is public, so the claims can be audited by anyone.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free and public domain',
            'What it means in real use': 'No price, no account, and no license restrictions on the code.',
            'Limitation / caveat': 'Mostly one maintainer; the last commit was in May 2026, so update pace is uncertain.',
          },
          {
            'Benefit': 'No model files to manage',
            'What it means in real use': 'Google AI Core supplies Gemini Nano, so there are no GGUF files or catalogues to deal with.',
            'Limitation / caveat': 'No model switching or import is documented; Gemini Nano is the supported model.',
          },
          {
            'Benefit': 'Strong prompt controls',
            'What it means in real use': 'Per-chat prompts, temperature, and token limits make the small model easier to steer.',
            'Limitation / caveat': 'The README warns Gemini Nano is tuned for summarization and smart reply, and it may hallucinate or lose context.',
          },
          {
            'Benefit': 'Open source, auditable',
            'What it means in real use': 'Anyone can read the code behind the privacy claims.',
            'Limitation / caveat': 'The README says typing curses or slurs can soft-lock the app when auto-retry is on, because of the model\'s own filters.',
          },
          {
            'Benefit': 'Auto-continue for long answers',
            'What it means in real use': 'Responses cut off by the roughly 25-second generation window can be extended.',
            'Limitation / caveat': 'The changelog lists auto-continue as still in testing: it may continue finished answers or miss cut-off ones.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PAIOS vs. Alternatives',
        columns: ['App', 'Platforms', 'Price and license', 'Model flexibility', 'Key difference'],
        rows: [
          {
            'App': 'PAIOS',
            'Platforms': 'Android',
            'Price and license': 'Free, Unlicense',
            'Model flexibility': 'Gemini Nano, via Google AI Core',
            'Key difference': 'Open-source Gemini Nano client with strong prompt controls; needs an AI Core phone',
          },
          {
            'App': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review)',
            'Platforms': 'Android, iOS',
            'Price and license': 'Free, Apache 2.0',
            'Model flexibility': 'Google\'s on-device Gemma models',
            'Key difference': 'Google\'s own on-device app, running Gemma models',
          },
          {
            'App': '[Layla](/power-local-llm/layla-review)',
            'Platforms': 'Android',
            'Price and license': 'Freemium, closed source',
            'Model flexibility': 'GGUF models plus other on-device backends',
            'Key difference': 'Android-first assistant with broader model choice, but not open source',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'Android, iOS',
            'Price and license': 'Free, MIT',
            'Model flexibility': 'GGUF models you download yourself',
            'Key difference': 'Ships its own inference engine instead of using AI Core, but you manage model files yourself',
          },
          {
            'App': '[Off Grid AI](/power-local-llm/off-grid-ai-review)',
            'Platforms': 'Android, iOS, macOS, Windows',
            'Price and license': 'Freemium, MIT',
            'Model flexibility': 'Local models plus Ollama connections',
            'Key difference': 'Cross-platform and feature-rich, but a much larger app than a focused Gemini Nano client',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use PAIOS',
        items: [
          '**Owners of an AI Core-supported phone who want a free chat front end for Gemini Nano.** It is the most direct way to talk to the model Google already ships on the device.',
          '**Privacy-minded users who prefer open source.** The code is public and under a public-domain license, so the data-handling claims can be checked.',
          '**Tinkerers who like to steer a small model.** Per-chat prompts, temperature, and a prompt library with Markdown import and export reward experimentation.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use PAIOS',
        items: [
          '**Anyone whose phone lacks AI Core support.** The app cannot run without it (see Device Requirements above).',
          '**Users who want to choose or import models.** PAIOS documents Gemini Nano only; try [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Layla](/power-local-llm/layla-review) instead.',
          '**People who need depth or reliability.** Gemini Nano is a small on-device model, and the project calls itself alpha.',
          '**iPhone, Mac, or Windows users.** PAIOS is Android-only; [Off Grid AI](/power-local-llm/off-grid-ai-review) covers more platforms.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is PAIOS free?',
            a: 'Yes. The Google Play listing shows no in-app purchases, and the roadmap lists monetization only as a future, unchecked item.',
          },
          {
            q: 'Who makes PAIOS?',
            a: 'An independent developer who publishes as Puzzak (GitHub: Puzzaks). The project states it is not affiliated with, endorsed by, or sponsored by Google.',
          },
          {
            q: 'Does PAIOS work on any Android phone?',
            a: 'No. It needs Google AI Core, which Google enables on selected devices. See Device Requirements for the README wording.',
          },
          {
            q: 'Can I use other models, like Llama or Gemma, in PAIOS?',
            a: 'Not as far as the documentation shows. PAIOS is built as a client for Gemini Nano through AI Core; the README tagline adds "and maybe something else!" and the roadmap\'s first entry also names Flan-T5, but no model picker or import is documented. For other models, see the alternatives table above.',
          },
          {
            q: 'Why do long answers sometimes stop partway?',
            a: 'The roadmap describes a roughly 25-second generation window that can end answers early. Version 1.1.7 added auto-continue as a workaround, and the changelog still lists it as in testing.',
          },
          {
            q: 'Is PAIOS actively maintained?',
            a: 'Releases run from 1.0.0 to 1.1.8, the latest, published on April 21, 2026, and the last commit was in May 2026. The roadmap still lists open items such as AICore version controls and in-app documentation.',
          },
          {
            q: 'Can I install PAIOS without Google Play?',
            a: 'Yes. Each GitHub release includes an APK, and the source is public if you prefer to build it yourself.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'PAIOS does one narrow thing well on paper: it turns the Gemini Nano model already inside supported Android phones into a configurable, open-source chat app, free and without an account.',
          'The same narrowness is the catch. You get one documented small model, a hard dependency on Google AI Core support, and software its own author calls alpha. That makes it a good fit for owners of recent Pixel-class phones who like to experiment, and a poor fit for anyone who wants model choice, broad device support, or polish.',
          'If your phone qualifies, install it and see how Gemini Nano feels with your own prompts. If it does not, or you want more models, start with [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Layla](/power-local-llm/layla-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PAIOS on GitHub](https://github.com/Puzzaks/PAIOS) — README, changelog, roadmap, license, and repository statistics.',
          '[PAIOS releases](https://github.com/Puzzaks/PAIOS/releases) — version 1.1.8 and release assets.',
          '[PAIOS - Offline AI on Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) — listing, price, and data-safety declaration.',
          '[Developer site](https://puzzak.page) — developer homepage linked from the repository.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s own on-device app, also on Android.',
          '[Layla Review](/power-local-llm/layla-review) — an Android-first local assistant with wider model choice.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — the free, open-source GGUF chat client.',
          '[Off Grid AI Review](/power-local-llm/off-grid-ai-review) — a cross-platform local AI app.',
          '[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/paios-review-hero-de.webp',
    title: 'PAIOS Test: Offline-Chat mit Gemini Nano für Android',
    seoTitle: 'PAIOS Test: Offline-Chat mit Gemini Nano',
    intro:
      'PAIOS (Personal AI Operating System) ist eine kostenlose, quelloffene Android-App, die Googles On-Device-Modell Gemini Nano um eine Chat-Oberfläche mit mehreren Chats, eigenen Prompts und Temperaturreglern ergänzt. Dieser Test beschreibt, was die App leistet, auf welchen Smartphones sie läuft und wo ihre Grenzen liegen — auf Grundlage von README, Changelog und Google-Play-Eintrag des Projekts.',
    metaDescription:
      'PAIOS Test: kostenlose, quelloffene Android-Chat-App (Unlicense) für Googles On-Device-Modell Gemini Nano. Funktionen, unterstützte Geräte, Datenschutz, Grenzen und Vergleich mit Layla und PocketPal AI.',
    twitterDescription:
      'PAIOS Test: ein Android-Client für Gemini Nano über Google AI Core. Welche Smartphones funktionieren, was der Changelog zur Netzwerknutzung sagt und wo die App an Grenzen stößt.',
    audience:
      'Android-Nutzer mit einem Pixel 9 oder neuer (oder einem anderen AICore-fähigen Smartphone), die eine kostenlose, quelloffene On-Device-Chat-App für Gemini Nano suchen — behandelt Funktionen, Geräteunterstützung, Datenschutz, Grenzen und den Vergleich von PAIOS mit anderen lokalen KI-Apps für Android.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PAIOS Test',
    targetKeywords: [
      'paios test',
      'paios android app',
      'gemini nano android app',
      'gemini nano offline nutzen',
      'google ai core chat app',
      'puzzak paios',
      'open source gemini nano client',
      'offline ki chat android pixel',
    ],
    current_hardware_mentioned: ['Pixel 9', 'Pixel 10'],
    leadAnswerBlock:
      '**PAIOS ist eine Chat-Oberfläche für Googles Modell Gemini Nano, das laut README über Google AI Core vollständig auf einem Android-Smartphone läuft; der Code ist unter der [Unlicense](https://github.com/Puzzaks/PAIOS) gemeinfrei veröffentlicht.** Die App ist ein Client, keine Modellbibliothek: Sie funktioniert nur auf Smartphones, auf denen AI Core unterstützt wird (die README nennt als Beispiele die Pixel-9- und Pixel-10-Reihe), und laut Dokumentation nur mit Gemini Nano. Das Projekt bezeichnet sich selbst als Alpha, und dieser Test (Version 1.1.8) beruht auf der öffentlichen Dokumentation, nicht auf praktischen Tests auf einem Gerät.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich die Installation von PAIOS auf einem Android-Smartphone?',
        answer:
          'Ja, wenn Sie ein Smartphone mit Google-AI-Core-Unterstützung besitzen und Gemini Nano kostenlos, quelloffen und offline nutzen möchten, mit Prompts und Temperatur pro Chat. Verzichten Sie darauf, wenn Sie zwischen vielen Modellen wählen oder eigene importieren wollen: PAIOS dokumentiert nur Unterstützung für Gemini Nano. Layla, PocketPal AI und Off Grid AI bieten mehr Modellauswahl.',
        bullets: [
          'Kostenlos bei Google Play und als GitHub-APK; quelloffen unter der Unlicense.',
          'Führt Gemini Nano auf dem Gerät über Google AI Core aus; kein Modellimport und kein Modellkatalog dokumentiert.',
          'Benötigt laut README ein Smartphone mit AI-Core-Unterstützung (Pixel-9/10-Reihe als Beispiele genannt).',
          'Mehrere Chats, eigene Anweisungen, Temperatur- und Token-Regler sowie eine bearbeitbare Prompt-Bibliothek.',
          'Laut Eigenbeschreibung Alpha-Software auf einem Modell im Developer-Preview-Status: Rechnen Sie mit Ecken und Kanten.',
        ],
        updatedDate: '2026-10-02',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'PAIOS herunterladen', anchor: 'get-it' },
      { label: 'PAIOS im Überblick', anchor: 'at-a-glance' },
      { label: 'Was PAIOS ist', anchor: 'what-is-paios' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen und Einstellungen', anchor: 'features' },
      { label: 'Geräteanforderungen', anchor: 'requirements' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'PAIOS vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer PAIOS nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer PAIOS nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PAIOS des Entwicklers Puzzak ermöglicht es, über Google AI Core vollständig auf dem Gerät mit Gemini Nano zu chatten, mit mehreren Chats, eigenen Prompts und Temperaturreglern; die App kostet nichts und ihr Quellcode ist öffentlich.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Chatfenster für das kleine KI-Modell vor, das Google bereits in unterstützte Android-Smartphones eingebaut hat: kein Konto, kein Cloud-Modell und keine Modelldateien, die Sie verwalten müssen, aber auch keine Wahl des Modells.',
          },
        ],
        items: [
          'Getestete Version: 1.1.8, das aktuelle [GitHub-Release](https://github.com/Puzzaks/PAIOS/releases).',
          'Preis und Lizenz: kostenlos, ohne gelistete In-App-Käufe bei [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios); der Code ist unter der Unlicense gemeinfrei.',
          'Modell: Gemini Nano, ausgeführt von Google AI Core auf dem Smartphone; die Dokumentation beschreibt keine Möglichkeit, andere Modelle zu laden.',
          'Plattform: nur Android, und nur auf Smartphones mit AI-Core-Unterstützung (siehe Geräteanforderungen).',
          'Reifegrad: Der Entwickler bezeichnet die App als Alpha, und der letzte Commit des Projekts stammt vom Mai 2026.',
        ],
      },
      getItPAIOS: {
        id: 'get-it',
        title: 'PAIOS herunterladen',
        content: [
          '**PAIOS gibt es bei Google Play und als direkte APK auf GitHub.** Beides ist kostenlos. Nutzen Sie den Play-Eintrag für automatische Updates oder die GitHub-APK, wenn Sie lieber außerhalb des Play Stores installieren.',
          'Dieser Test ist ein Begleitartikel zum [Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory) von PromptQuorum, das PAIOS neben anderen On-Device- und lokalen KI-Tools listet.',
        ],
        columns: ['Kanal', 'Download'],
        rows: [
          {
            'Kanal': 'Google Play',
            'Download': '[PAIOS - Offline AI bei Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)',
          },
          {
            'Kanal': 'GitHub-APK',
            'Download': '[PAIOS-Releases auf GitHub](https://github.com/Puzzaks/PAIOS/releases)',
          },
          {
            'Kanal': 'Quellcode',
            'Download': '[Puzzaks/PAIOS](https://github.com/Puzzaks/PAIOS)',
          },
        ],
        note: 'Seit Version 1.1.2 verwendet die App einen neuen Paketnamen, und laut Entwickler funktionieren ältere Versionen wegen eines Problems mit dem Play-Store-Eintrag nicht mehr. Installieren Sie einen aktuellen Build statt einer alten APK.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PAIOS im Überblick',
        columns: ['Merkmal', 'PAIOS'],
        rows: [
          { 'Merkmal': 'Plattform', 'PAIOS': 'Nur Android' },
          { 'Merkmal': 'Preis', 'PAIOS': 'Kostenlos' },
          { 'Merkmal': 'Lizenz', 'PAIOS': 'Unlicense (gemeinfrei)' },
          { 'Merkmal': 'Läuft vollständig offline', 'PAIOS': 'Chat läuft auf dem Gerät; Netzwerknutzung siehe Datenschutz' },
          { 'Merkmal': 'Eigene Modelle importieren', 'PAIOS': 'Nicht angegeben; dokumentiert ist nur Gemini Nano' },
          { 'Merkmal': 'Modell-Downloads in der App', 'PAIOS': 'Nicht angegeben' },
          { 'Merkmal': 'Bildeingabe', 'PAIOS': 'Nicht angegeben; Textoberfläche' },
          { 'Merkmal': 'Spracheingabe / -ausgabe', 'PAIOS': 'Nicht angegeben' },
        ],
        note: 'Die Merkmale folgen dem Vergleichsschema für mobile Chat-Apps im Verzeichnis lokaler LLM-Software. "Nicht angegeben" bedeutet, dass README, Roadmap und Changelog die Funktion nicht erwähnen, nicht dass sie getestet und als fehlend befunden wurde.',
      },
      whatIsPAIOS: {
        id: 'what-is-paios',
        title: 'Was PAIOS ist',
        content: [
          '**PAIOS ist eine Oberfläche für Gemini Nano, keine Inferenz-Engine.** Google AI Core, der Android-Systemdienst, der Gemini Nano bereitstellt, führt das Modell aus. PAIOS ergänzt die Chat-Oberfläche darum herum: getrennte Unterhaltungen, Prompts und Generierungseinstellungen.',
          'Die App wird hauptsächlich von einem Entwickler namens Puzzak, mit Übersetzungsbeiträgen aus der Community, in Dart geschrieben und als unabhängiges Projekt veröffentlicht, das nicht mit Google verbunden ist. Das Repository wurde im November 2025 angelegt und hat etwa 170 GitHub-Sterne.',
          'Dieser Test stützt sich auf README, Changelog, Roadmap, GitHub-Releases und den Google-Play-Eintrag. Praktische Tests auf einem Gerät sind nicht enthalten, daher werden Geschwindigkeit und Antwortqualität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung ist eine normale App-Installation auf einem unterstützten Smartphone, ohne Konto.** Die README beschreibt den ersten Start nicht im Detail, daher folgen die Schritte unten den dokumentierten Anforderungen.',
        ],
        numberedItems: [
          {
            title: 'Prüfen, ob Ihr Smartphone AI Core unterstützt',
            whyItMatters: 'PAIOS funktioniert nur dort, wo Google AI Core verfügbar ist; vergewissern Sie sich vor der Installation, dass Ihr Gerät unterstützt wird (siehe Geräteanforderungen).',
          },
          {
            title: 'PAIOS installieren',
            whyItMatters: 'Laden Sie die App bei [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) oder auf der [GitHub-Releases-Seite](https://github.com/Puzzaks/PAIOS/releases) herunter.',
          },
          {
            title: 'Einen Chat starten',
            whyItMatters: 'Legen Sie eine Unterhaltung an und stellen Sie bei Bedarf Temperatur, Token-Limit und Prompt ein, wenn Sie von den Standardwerten abweichen möchten.',
          },
          {
            title: 'Optional: Prompts anpassen',
            whyItMatters: 'Öffnen Sie die Prompt-Verwaltung, um einen System-Prompt auszuwählen, einen eigenen zu schreiben oder einen aus einer Markdown-Datei zu importieren.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen und Einstellungen',
        content: [
          '**PAIOS konzentriert sich darauf, zu steuern, wie Gemini Nano angesprochen wird, da das Modell selbst festgelegt ist.** Alles Folgende stammt aus README und Changelog für die Versionen bis 1.1.8.',
        ],
        items: [
          '**Mehrere Chats.** Unterhaltungen anlegen, umbenennen und anheften, jede mit eigenem Kontext.',
          '**Generierungseinstellungen.** Temperatur und maximale Antwort-Tokens anpassen; seit 1.1.7 lässt sich die Temperatur pro Chat festlegen.',
          '**Prompt-Verwaltung.** Seit 1.1.6 können Sie System- und Nutzer-Prompts pro Chat auswählen, bearbeiten und zuweisen; 1.1.8 brachte Markdown-Import und -Export für Prompts.',
          '**Eigene Anweisungen.** Das Modell auf eine Persona oder Aufgabe ausrichten und optional aktuelles Datum, Uhrzeit und App-Sprache einfügen.',
          '**Prompt-Transparenz.** Sie können den tatsächlichen System-Prompt einsehen, den PAIOS an das Modell sendet.',
          '**Automatisches Fortsetzen.** Seit 1.1.7 können lange Antworten automatisch fortgesetzt werden, eine Umgehung des in der Roadmap beschriebenen Generierungslimits von etwa 25 Sekunden.',
          '**Übersetzungen.** Community-Beitragende haben Oberflächenübersetzungen für Türkisch, Deutsch und Chinesisch ergänzt.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Geräteanforderungen',
        content: [
          '**PAIOS benötigt ein Smartphone mit Google-AI-Core-Unterstützung.** Die README nennt als Voraussetzung ein "unterstütztes Gerät mit Google AI Core (z. B. Pixel-9/10-Reihe)". Mindestwerte für RAM oder Speicher werden nicht genannt, daher entscheidet die Geräteunterstützung, nicht die Hardwareausstattung.',
          'Google bestimmt, welche Smartphones AI Core und Gemini Nano erhalten, und diese Liste kann sich ändern. Prüfen Sie Googles eigene Gerätedokumentation oder versuchen Sie die Installation über den Play Store auf Ihrem Smartphone, bevor Sie annehmen, dass ein Gerät eines anderen Herstellers als Pixel funktioniert.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Laut README läuft PAIOS "vollständig auf dem Gerät mit Googles AI Core. Keine Daten verlassen Ihr Smartphone."** Der Google-Play-Eintrag zeigt die Datensicherheitsangaben des Entwicklers als "Keine Daten erhoben" und "Keine Daten weitergegeben".',
          'Der Changelog enthält Details, die man kennen sollte. Version 1.1.2 führte optionale Analysen für Fehlersuche und Absturzberichte ein, Version 1.1.5 ergänzte Absturzberichte, und spätere Versionen erwähnen Firebase Remote Config für App-Einstellungen sowie von GitHub heruntergeladene Prompts. README und Play-Angabe erwähnen dies nicht, und dieser Test hat den Netzwerkverkehr der App nicht untersucht.',
          'Wenn Sie keinerlei Netzwerkkontakt wünschen, prüfen Sie die Einstellungen der App auf die Analyse-Option und untersuchen Sie den Datenverkehr selbst. Der Quellcode ist öffentlich, sodass die Angaben von jedem überprüft werden können.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Kostenlos und gemeinfrei',
            'Bedeutung im Alltag': 'Kein Preis, kein Konto und keine Lizenzbeschränkungen für den Code.',
            'Einschränkung / Hinweis': 'Überwiegend ein Maintainer; der letzte Commit stammt vom Mai 2026, das Update-Tempo ist daher unsicher.',
          },
          {
            'Vorteil': 'Keine Modelldateien zu verwalten',
            'Bedeutung im Alltag': 'Google AI Core liefert Gemini Nano, es gibt also keine GGUF-Dateien oder Kataloge.',
            'Einschränkung / Hinweis': 'Modellwechsel oder -import sind nicht dokumentiert; Gemini Nano ist das unterstützte Modell.',
          },
          {
            'Vorteil': 'Umfangreiche Prompt-Steuerung',
            'Bedeutung im Alltag': 'Prompts, Temperatur und Token-Limits pro Chat machen das kleine Modell leichter steuerbar.',
            'Einschränkung / Hinweis': 'Die README warnt, Gemini Nano sei auf Zusammenfassungen und Smart Reply abgestimmt und könne halluzinieren oder den Kontext verlieren.',
          },
          {
            'Vorteil': 'Quelloffen und prüfbar',
            'Bedeutung im Alltag': 'Jeder kann den Code hinter den Datenschutzangaben lesen.',
            'Einschränkung / Hinweis': 'Laut README kann die Eingabe von Flüchen oder Beleidigungen die App bei aktiviertem Auto-Retry blockieren, wegen der eigenen Filter des Modells.',
          },
          {
            'Vorteil': 'Automatisches Fortsetzen langer Antworten',
            'Bedeutung im Alltag': 'Antworten, die das Generierungsfenster von etwa 25 Sekunden abschneidet, lassen sich verlängern.',
            'Einschränkung / Hinweis': 'Der Changelog führt das automatische Fortsetzen weiter als in Erprobung: Es kann fertige Antworten fortsetzen oder abgeschnittene übersehen.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PAIOS vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Modellauswahl', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': 'PAIOS',
            'Plattformen': 'Android',
            'Preis und Lizenz': 'Kostenlos, Unlicense',
            'Modellauswahl': 'Gemini Nano, über Google AI Core',
            'Wichtigster Unterschied': 'Quelloffener Gemini-Nano-Client mit umfangreicher Prompt-Steuerung; benötigt ein AI-Core-Smartphone',
          },
          {
            'App': '[Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review)',
            'Plattformen': 'Android, iOS',
            'Preis und Lizenz': 'Kostenlos, Apache 2.0',
            'Modellauswahl': 'Googles On-Device-Modelle der Gemma-Familie',
            'Wichtigster Unterschied': 'Googles eigene On-Device-App, die Gemma-Modelle ausführt',
          },
          {
            'App': '[Layla](/de/power-local-llm/layla-review)',
            'Plattformen': 'Android',
            'Preis und Lizenz': 'Freemium, Closed Source',
            'Modellauswahl': 'GGUF-Modelle plus weitere On-Device-Backends',
            'Wichtigster Unterschied': 'Android-first-Assistent mit größerer Modellauswahl, aber nicht quelloffen',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'Android, iOS',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Modellauswahl': 'GGUF-Modelle, die Sie selbst herunterladen',
            'Wichtigster Unterschied': 'Bringt eine eigene Inferenz-Engine mit statt AI Core, aber Sie verwalten die Modelldateien selbst',
          },
          {
            'App': '[Off Grid AI](/de/power-local-llm/off-grid-ai-review)',
            'Plattformen': 'Android, iOS, macOS, Windows',
            'Preis und Lizenz': 'Freemium, MIT',
            'Modellauswahl': 'Lokale Modelle plus Ollama-Anbindung',
            'Wichtigster Unterschied': 'Plattformübergreifend und funktionsreich, aber eine deutlich größere App als ein schlanker Gemini-Nano-Client',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Apps Dritter ändern sich häufig. Prüfen Sie die aktuellen Details im jeweiligen App-Eintrag, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer PAIOS nutzen sollte',
        items: [
          '**Besitzer eines AI-Core-fähigen Smartphones, die eine kostenlose Chat-Oberfläche für Gemini Nano wollen.** Es ist der direkteste Weg, mit dem Modell zu sprechen, das Google bereits auf dem Gerät mitliefert.',
          '**Datenschutzbewusste Nutzer, die Open Source bevorzugen.** Der Code ist öffentlich und gemeinfrei lizenziert, sodass sich die Angaben zum Umgang mit Daten prüfen lassen.',
          '**Tüftler, die gern ein kleines Modell steuern.** Prompts und Temperatur pro Chat sowie eine Prompt-Bibliothek mit Markdown-Import und -Export belohnen das Experimentieren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer PAIOS nicht nutzen sollte',
        items: [
          '**Alle, deren Smartphone keine AI-Core-Unterstützung hat.** Die App läuft ohne AI Core nicht (siehe Geräteanforderungen oben).',
          '**Nutzer, die Modelle auswählen oder importieren möchten.** PAIOS dokumentiert nur Gemini Nano; probieren Sie stattdessen [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Layla](/de/power-local-llm/layla-review).',
          '**Menschen, die Tiefe oder Zuverlässigkeit brauchen.** Gemini Nano ist ein kleines On-Device-Modell, und das Projekt bezeichnet sich selbst als Alpha.',
          '**Nutzer von iPhone, Mac oder Windows.** PAIOS gibt es nur für Android; [Off Grid AI](/de/power-local-llm/off-grid-ai-review) deckt mehr Plattformen ab.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist PAIOS kostenlos?',
            a: 'Ja. Der Google-Play-Eintrag zeigt keine In-App-Käufe, und die Roadmap nennt Monetarisierung nur als zukünftigen, nicht abgehakten Punkt.',
          },
          {
            q: 'Wer entwickelt PAIOS?',
            a: 'Ein unabhängiger Entwickler, der als Puzzak veröffentlicht (GitHub: Puzzaks). Das Projekt gibt an, nicht mit Google verbunden zu sein und von Google weder unterstützt noch gesponsert zu werden.',
          },
          {
            q: 'Funktioniert PAIOS auf jedem Android-Smartphone?',
            a: 'Nein. Die App benötigt Google AI Core, das Google auf ausgewählten Geräten aktiviert. Den Wortlaut der README finden Sie unter Geräteanforderungen.',
          },
          {
            q: 'Kann ich in PAIOS andere Modelle wie Llama oder Gemma nutzen?',
            a: 'Soweit die Dokumentation zeigt, nicht. PAIOS ist als Client für Gemini Nano über AI Core gebaut; der README-Slogan ergänzt "and maybe something else!" und der erste Roadmap-Eintrag nennt auch Flan-T5, doch eine Modellauswahl oder ein Import ist nicht dokumentiert. Für andere Modelle siehe die Alternativen-Tabelle oben.',
          },
          {
            q: 'Warum brechen lange Antworten manchmal mittendrin ab?',
            a: 'Die Roadmap beschreibt ein Generierungsfenster von etwa 25 Sekunden, das Antworten vorzeitig beenden kann. Version 1.1.7 brachte als Umgehung das automatische Fortsetzen, das der Changelog weiterhin als in Erprobung führt.',
          },
          {
            q: 'Wird PAIOS aktiv gepflegt?',
            a: 'Die Releases reichen von 1.0.0 bis 1.1.8, das aktuelle, veröffentlicht am 21. April 2026; der letzte Commit stammt vom Mai 2026. Die Roadmap führt weiterhin offene Punkte wie Steuerung der AICore-Version und eine Dokumentation in der App.',
          },
          {
            q: 'Kann ich PAIOS ohne Google Play installieren?',
            a: 'Ja. Jedes GitHub-Release enthält eine APK, und der Quellcode ist öffentlich, falls Sie die App lieber selbst bauen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'PAIOS erledigt auf dem Papier eine einzige Aufgabe gut: Es macht aus dem Modell Gemini Nano, das bereits in unterstützten Android-Smartphones steckt, eine konfigurierbare, quelloffene Chat-App, kostenlos und ohne Konto.',
          'Genau diese Beschränkung ist der Haken. Sie erhalten ein dokumentiertes kleines Modell, eine feste Abhängigkeit von der Google-AI-Core-Unterstützung und Software, die ihr eigener Autor als Alpha bezeichnet. Das passt gut zu Besitzern aktueller Smartphones der Pixel-Klasse, die gern experimentieren, und schlecht zu allen, die Modellauswahl, breite Geräteunterstützung oder Feinschliff erwarten.',
          'Wenn Ihr Smartphone infrage kommt, installieren Sie die App und prüfen Sie mit eigenen Prompts, wie sich Gemini Nano anfühlt. Wenn nicht oder wenn Sie mehr Modelle wollen, beginnen Sie mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Layla](/de/power-local-llm/layla-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[PAIOS auf GitHub](https://github.com/Puzzaks/PAIOS) — README, Changelog, Roadmap, Lizenz und Repository-Statistiken.',
          '[PAIOS-Releases](https://github.com/Puzzaks/PAIOS/releases) — Version 1.1.8 und Release-Dateien.',
          '[PAIOS - Offline AI bei Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) — Eintrag, Preis und Datensicherheitsangaben.',
          '[Website des Entwicklers](https://puzzak.page) — Startseite des Entwicklers, im Repository verlinkt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Google AI Edge Gallery Test](/de/power-local-llm/google-ai-edge-gallery-review) — Googles eigene On-Device-App, ebenfalls für Android.',
          '[Layla Test](/de/power-local-llm/layla-review) — ein Android-first-Assistent mit größerer Modellauswahl.',
          '[PocketPal AI Test](/de/power-local-llm/pocketpal-ai-review) — der kostenlose, quelloffene GGUF-Chat-Client.',
          '[Off Grid AI Test](/de/power-local-llm/off-grid-ai-review) — eine plattformübergreifende lokale KI-App.',
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/power-local-llm/local-llm-software-directory) — ein breiteres Verzeichnis lokaler LLM-Tools über alle Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/paios-review-hero-fr.webp',
    title: 'Avis PAIOS: chat Gemini Nano hors ligne pour Android',
    seoTitle: 'Avis PAIOS: chat Gemini Nano hors ligne sur Android',
    intro:
      'PAIOS (Personal AI Operating System) est une application Android gratuite et open source qui donne une interface de chat au modèle Gemini Nano de Google exécuté sur l\'appareil, avec plusieurs conversations, des prompts personnalisés et des réglages de température. Cet avis couvre ce que fait l\'application, les téléphones compatibles et ses limites, à partir du README du projet, de son journal des modifications et de sa fiche Google Play.',
    metaDescription:
      'Avis PAIOS : application de chat Android gratuite et open source (Unlicense) pour Gemini Nano de Google sur l\'appareil. Fonctionnalités, appareils compatibles, confidentialité, limites et comparaison avec Layla et PocketPal AI.',
    twitterDescription:
      'Avis PAIOS : un client Android pour Gemini Nano via Google AI Core. Quels téléphones sont compatibles, ce que dit le journal des modifications sur l\'usage du réseau, et ses limites.',
    audience:
      'Utilisateurs Android avec un Pixel 9 ou plus récent (ou un autre téléphone compatible AICore) qui veulent une application de chat gratuite, open source et locale pour Gemini Nano — couvre les fonctionnalités, la compatibilité des appareils, la confidentialité, les limites et la comparaison de PAIOS avec d\'autres applications d\'IA locale pour Android.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis PAIOS',
    targetKeywords: [
      'avis paios',
      'application android paios',
      'application gemini nano android',
      'gemini nano hors ligne',
      'application chat google ai core',
      'puzzak paios',
      'client open source gemini nano',
      'chat ia hors ligne android pixel',
    ],
    current_hardware_mentioned: ['Pixel 9', 'Pixel 10'],
    leadAnswerBlock:
      '**PAIOS est une interface de chat pour le modèle Gemini Nano de Google, qui, selon son README, s\'exécute entièrement sur un téléphone Android via Google AI Core, avec un code placé dans le domaine public sous [Unlicense](https://github.com/Puzzaks/PAIOS).** C\'est un client, pas une bibliothèque de modèles : il ne fonctionne que sur les téléphones où AI Core est pris en charge (le README cite les séries Pixel 9 et 10 en exemple) et, selon sa documentation, uniquement avec Gemini Nano. Le projet se déclare en alpha, et cet avis (version 1.1.8) s\'appuie sur sa documentation publique, pas sur des tests pratiques sur un appareil.',
    quickAnswerTop: {
      fr: {
        question: 'PAIOS vaut-elle d\'être installée sur un téléphone Android ?',
        answer:
          'Oui, si vous possédez un téléphone compatible Google AI Core et voulez un moyen gratuit et open source de discuter hors ligne avec Gemini Nano, avec prompts et température réglables par conversation. Passez votre chemin si vous voulez choisir parmi plusieurs modèles ou importer les vôtres : PAIOS ne documente la prise en charge que de Gemini Nano. Layla, PocketPal AI et Off Grid AI offrent un choix de modèles plus large.',
        bullets: [
          'Gratuite sur Google Play et en APK sur GitHub ; open source sous Unlicense.',
          'Exécute Gemini Nano sur l\'appareil via Google AI Core ; ni import de modèles ni catalogue de modèles n\'est documenté.',
          'Nécessite un téléphone compatible AI Core, selon le README (séries Pixel 9/10 données en exemple).',
          'Plusieurs conversations, instructions personnalisées, réglages de température et de tokens, et une bibliothèque de prompts modifiable.',
          'Logiciel alpha de l\'aveu de son auteur, sur un modèle en préversion développeur : attendez-vous à des aspérités.',
        ],
        updatedDate: '2026-10-02',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir PAIOS', anchor: 'get-it' },
      { label: 'PAIOS en bref', anchor: 'at-a-glance' },
      { label: 'Ce qu\'est PAIOS', anchor: 'what-is-paios' },
      { label: 'Comment commencer', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités et réglages', anchor: 'features' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Confidentialité et usage du réseau', anchor: 'privacy' },
      { label: 'Compromis : avantages vs. limites', anchor: 'tradeoffs' },
      { label: 'PAIOS vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser PAIOS', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser PAIOS', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PAIOS, développée par Puzzak, permet de discuter avec Gemini Nano entièrement sur l\'appareil via Google AI Core, avec plusieurs conversations, des prompts personnalisés et des réglages de température ; elle est gratuite et son code source est public.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme une fenêtre de chat pour le petit modèle d\'IA que Google a déjà intégré aux téléphones Android compatibles : ni compte, ni modèle dans le cloud, ni fichiers de modèle à gérer, mais aussi aucun choix de modèle.',
          },
        ],
        items: [
          'Version testée : 1.1.8, la dernière [version GitHub](https://github.com/Puzzaks/PAIOS/releases).',
          'Prix et licence : gratuite, sans achat intégré indiqué sur [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) ; le code est dans le domaine public sous Unlicense.',
          'Modèle : Gemini Nano, exécuté par Google AI Core sur le téléphone ; la documentation ne décrit aucun moyen de charger d\'autres modèles.',
          'Plateforme : Android uniquement, et seulement sur les téléphones compatibles AI Core (voir Configuration requise).',
          'Maturité : le développeur la qualifie d\'alpha, et le dernier commit du projet date de mai 2026.',
        ],
      },
      getItPAIOS: {
        id: 'get-it',
        title: 'Obtenir PAIOS',
        content: [
          '**PAIOS est disponible sur Google Play et en APK direct sur GitHub.** Les deux sont gratuits. Utilisez la fiche Play pour les mises à jour automatiques, ou l\'APK GitHub si vous préférez installer en dehors du Play Store.',
          'Cet avis est un complément au [répertoire des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) de PromptQuorum, qui recense PAIOS aux côtés d\'autres outils d\'IA locale et embarquée.',
        ],
        columns: ['Canal', 'Obtenir'],
        rows: [
          {
            'Canal': 'Google Play',
            'Obtenir': '[PAIOS - Offline AI sur Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)',
          },
          {
            'Canal': 'APK GitHub',
            'Obtenir': '[Versions de PAIOS sur GitHub](https://github.com/Puzzaks/PAIOS/releases)',
          },
          {
            'Canal': 'Code source',
            'Obtenir': '[Puzzaks/PAIOS](https://github.com/Puzzaks/PAIOS)',
          },
        ],
        note: 'Depuis la version 1.1.2, l\'application utilise un nouveau nom de paquet, et le développeur indique que les anciennes versions ne fonctionnent plus à cause d\'un problème de fiche sur le Play Store. Installez une version récente plutôt qu\'un ancien APK.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PAIOS en bref',
        columns: ['Attribut', 'PAIOS'],
        rows: [
          { 'Attribut': 'Plateforme', 'PAIOS': 'Android uniquement' },
          { 'Attribut': 'Prix', 'PAIOS': 'Gratuit' },
          { 'Attribut': 'Licence', 'PAIOS': 'Unlicense (domaine public)' },
          { 'Attribut': 'Fonctionne hors ligne', 'PAIOS': 'Chat sur l\'appareil ; voir Confidentialité pour le réseau' },
          { 'Attribut': 'Import de vos modèles', 'PAIOS': 'Non précisé ; Gemini Nano est le modèle documenté' },
          { 'Attribut': 'Téléchargement de modèles', 'PAIOS': 'Non précisé' },
          { 'Attribut': 'Entrée d\'image', 'PAIOS': 'Non précisé ; interface texte' },
          { 'Attribut': 'Entrée / sortie vocale', 'PAIOS': 'Non précisé' },
        ],
        note: 'Les attributs suivent la comparaison des applications de chat mobiles utilisée dans le répertoire des logiciels LLM locaux. « Non précisé » signifie que le README, la feuille de route et le journal des modifications ne mentionnent pas la fonctionnalité, et non qu\'elle a été testée et jugée absente.',
      },
      whatIsPAIOS: {
        id: 'what-is-paios',
        title: 'Ce qu\'est PAIOS',
        content: [
          '**PAIOS est une interface pour Gemini Nano, pas un moteur d\'inférence.** Google AI Core, le service système Android qui héberge Gemini Nano, exécute le modèle. PAIOS ajoute l\'interface de chat autour : conversations séparées, prompts et réglages de génération.',
          'Elle est développée principalement par un seul développeur, Puzzak, avec des contributions de traduction de la communauté, écrite en Dart, et publiée comme projet indépendant non affilié à Google. Le dépôt a été créé en novembre 2025 et compte environ 170 étoiles GitHub.',
          'Cet avis s\'appuie sur le README, le journal des modifications, la feuille de route, les versions GitHub et la fiche Google Play. Il n\'inclut pas de tests pratiques sur un appareil ; la vitesse et la qualité des réponses ne sont donc pas évaluées ici.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment commencer',
        content: [
          '**La mise en route est une installation d\'application classique sur un téléphone compatible, sans compte.** Le README ne décrit pas en détail le premier lancement ; les étapes ci-dessous suivent donc les prérequis documentés.',
        ],
        numberedItems: [
          {
            title: 'Vérifier que votre téléphone est compatible AI Core',
            whyItMatters: 'PAIOS ne fonctionne que là où Google AI Core est disponible ; confirmez que votre appareil est pris en charge avant d\'installer (voir Configuration requise).',
          },
          {
            title: 'Installer PAIOS',
            whyItMatters: 'Obtenez-la sur [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) ou sur la [page des versions GitHub](https://github.com/Puzzaks/PAIOS/releases).',
          },
          {
            title: 'Démarrer une conversation',
            whyItMatters: 'Créez une conversation, puis réglez sa température, sa limite de tokens et son prompt si vous voulez autre chose que les valeurs par défaut.',
          },
          {
            title: 'Facultatif : personnaliser les prompts',
            whyItMatters: 'Ouvrez le gestionnaire de prompts pour choisir un prompt système, écrire le vôtre ou en importer un depuis un fichier Markdown.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités et réglages',
        content: [
          '**PAIOS se concentre sur le contrôle de la manière dont Gemini Nano est sollicité, puisque le modèle lui-même est fixe.** Tout ce qui suit provient du README et du journal des modifications jusqu\'à la version 1.1.8.',
        ],
        items: [
          '**Plusieurs conversations.** Créez, renommez et épinglez des conversations, chacune avec son propre contexte.',
          '**Réglages de génération.** Ajustez la température et le nombre maximal de tokens de réponse ; depuis la 1.1.7, la température se règle par conversation.',
          '**Gestionnaire de prompts.** Depuis la 1.1.6, vous pouvez choisir, modifier et attribuer des prompts système et utilisateur par conversation ; la 1.1.8 a ajouté l\'import et l\'export de prompts en Markdown.',
          '**Instructions personnalisées.** Orientez le modèle vers un personnage ou une tâche, et injectez au besoin la date, l\'heure et la langue de l\'application.',
          '**Transparence des prompts.** Vous pouvez consulter le prompt système réellement envoyé au modèle par PAIOS.',
          '**Poursuite automatique.** Depuis la 1.1.7, les longues réponses peuvent être poursuivies automatiquement, un contournement de la limite de génération d\'environ 25 secondes décrite dans la feuille de route.',
          '**Traductions.** Des contributeurs de la communauté ont ajouté des traductions de l\'interface en turc, en allemand et en chinois.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**PAIOS nécessite un téléphone compatible Google AI Core.** Le README indique qu\'elle « requiert un appareil compatible avec Google AI Core (par ex. séries Pixel 9/10) ». Il ne donne aucun minimum de RAM ou de stockage : c\'est donc la compatibilité de l\'appareil, et non ses caractéristiques, qui est déterminante.',
          'Google décide quels téléphones reçoivent AI Core et Gemini Nano, et cette liste peut évoluer. Consultez la documentation de Google sur les appareils, ou essayez l\'installation depuis le Play Store sur votre téléphone, avant de supposer qu\'un appareil non Pixel fonctionnera.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Le README indique que PAIOS s\'exécute « entièrement sur l\'appareil grâce à AI Core de Google. Aucune donnée ne quitte votre téléphone. »** La fiche Google Play présente la déclaration de sécurité des données du développeur : « Aucune donnée collectée » et « Aucune donnée partagée ».',
          'Le journal des modifications apporte des précisions utiles. La version 1.1.2 a introduit des statistiques d\'usage facultatives pour le débogage et le rapport de plantage, la version 1.1.5 a ajouté le rapport de plantage, et des versions ultérieures mentionnent Firebase Remote Config pour les paramètres de l\'application et des prompts téléchargés depuis GitHub. Le README et la déclaration Play n\'en font pas mention, et cet avis n\'a pas inspecté le trafic réseau de l\'application.',
          'Si vous exigez zéro contact réseau, vérifiez dans les réglages de l\'application l\'option de statistiques et inspectez vous-même le trafic. Le code source est public : n\'importe qui peut donc auditer ces affirmations.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs. limites',
        columns: ['Avantage', 'Ce que cela signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Gratuite et dans le domaine public',
            'Ce que cela signifie en usage réel': 'Pas de prix, pas de compte, et aucune restriction de licence sur le code.',
            'Limite / réserve': 'Surtout un seul mainteneur ; le dernier commit date de mai 2026, le rythme des mises à jour est donc incertain.',
          },
          {
            'Avantage': 'Aucun fichier de modèle à gérer',
            'Ce que cela signifie en usage réel': 'Google AI Core fournit Gemini Nano : pas de fichiers GGUF ni de catalogues à manipuler.',
            'Limite / réserve': 'Aucun changement ni import de modèle n\'est documenté ; Gemini Nano est le modèle pris en charge.',
          },
          {
            'Avantage': 'Réglages de prompts avancés',
            'Ce que cela signifie en usage réel': 'Prompts, température et limites de tokens par conversation rendent le petit modèle plus facile à orienter.',
            'Limite / réserve': 'Le README avertit que Gemini Nano est optimisé pour le résumé et les réponses suggérées, et qu\'il peut halluciner ou perdre le contexte.',
          },
          {
            'Avantage': 'Open source, auditable',
            'Ce que cela signifie en usage réel': 'N\'importe qui peut lire le code derrière les affirmations de confidentialité.',
            'Limite / réserve': 'Le README indique que saisir des injures ou des insultes peut bloquer l\'application lorsque la nouvelle tentative automatique est activée, à cause des filtres du modèle lui-même.',
          },
          {
            'Avantage': 'Poursuite automatique des longues réponses',
            'Ce que cela signifie en usage réel': 'Les réponses interrompues par la fenêtre de génération d\'environ 25 secondes peuvent être prolongées.',
            'Limite / réserve': 'Le journal des modifications indique que la poursuite automatique est encore en test : elle peut prolonger des réponses terminées ou manquer des réponses coupées.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PAIOS vs. alternatives',
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Flexibilité des modèles', 'Différence clé'],
        rows: [
          {
            'Application': 'PAIOS',
            'Plateformes': 'Android',
            'Prix et licence': 'Gratuit, Unlicense',
            'Flexibilité des modèles': 'Gemini Nano, via Google AI Core',
            'Différence clé': 'Client open source pour Gemini Nano avec de solides réglages de prompts ; nécessite un téléphone compatible AI Core',
          },
          {
            'Application': '[Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review)',
            'Plateformes': 'Android, iOS',
            'Prix et licence': 'Gratuit, Apache 2.0',
            'Flexibilité des modèles': 'Modèles Gemma de Google sur l\'appareil',
            'Différence clé': 'Application propre à Google pour l\'IA sur l\'appareil, exécutant des modèles Gemma',
          },
          {
            'Application': '[Layla](/fr/power-local-llm/layla-review)',
            'Plateformes': 'Android',
            'Prix et licence': 'Freemium, code source fermé',
            'Flexibilité des modèles': 'Modèles GGUF et autres moteurs sur l\'appareil',
            'Différence clé': 'Assistant pensé d\'abord pour Android, avec un choix de modèles plus large, mais non open source',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'Android, iOS',
            'Prix et licence': 'Gratuit, MIT',
            'Flexibilité des modèles': 'Modèles GGUF que vous téléchargez vous-même',
            'Différence clé': 'Embarque son propre moteur d\'inférence au lieu d\'utiliser AI Core, mais vous gérez vous-même les fichiers de modèle',
          },
          {
            'Application': '[Off Grid AI](/fr/power-local-llm/off-grid-ai-review)',
            'Plateformes': 'Android, iOS, macOS, Windows',
            'Prix et licence': 'Freemium, MIT',
            'Flexibilité des modèles': 'Modèles locaux et connexions Ollama',
            'Différence clé': 'Multiplateforme et riche en fonctionnalités, mais une application bien plus volumineuse qu\'un client Gemini Nano ciblé',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment. Vérifiez les spécificités actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser PAIOS',
        items: [
          '**Les propriétaires d\'un téléphone compatible AI Core qui veulent une interface de chat gratuite pour Gemini Nano.** C\'est le moyen le plus direct de dialoguer avec le modèle que Google livre déjà sur l\'appareil.',
          '**Les utilisateurs soucieux de leur vie privée qui préfèrent l\'open source.** Le code est public et sous licence du domaine public ; les affirmations sur le traitement des données peuvent donc être vérifiées.',
          '**Les bricoleurs qui aiment orienter un petit modèle.** Prompts par conversation, température et bibliothèque de prompts avec import et export Markdown récompensent l\'expérimentation.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser PAIOS',
        items: [
          '**Toute personne dont le téléphone n\'est pas compatible AI Core.** L\'application ne peut pas fonctionner sans (voir Configuration requise ci-dessus).',
          '**Les utilisateurs qui veulent choisir ou importer des modèles.** PAIOS ne documente que Gemini Nano ; essayez plutôt [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Layla](/fr/power-local-llm/layla-review).',
          '**Les personnes qui ont besoin de profondeur ou de fiabilité.** Gemini Nano est un petit modèle sur l\'appareil, et le projet se qualifie lui-même d\'alpha.',
          '**Les utilisateurs d\'iPhone, de Mac ou de Windows.** PAIOS est exclusivement Android ; [Off Grid AI](/fr/power-local-llm/off-grid-ai-review) couvre davantage de plateformes.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'PAIOS est-elle gratuite ?',
            a: 'Oui. La fiche Google Play n\'indique aucun achat intégré, et la feuille de route ne mentionne la monétisation que comme un point futur, non coché.',
          },
          {
            q: 'Qui développe PAIOS ?',
            a: 'Un développeur indépendant qui publie sous le nom de Puzzak (GitHub : Puzzaks). Le projet déclare ne pas être affilié à Google, ni approuvé ou sponsorisé par lui.',
          },
          {
            q: 'PAIOS fonctionne-t-elle sur n\'importe quel téléphone Android ?',
            a: 'Non. Elle nécessite Google AI Core, que Google active sur certains appareils sélectionnés. Voir Configuration requise pour la formulation du README.',
          },
          {
            q: 'Puis-je utiliser d\'autres modèles, comme Llama ou Gemma, dans PAIOS ?',
            a: 'Pas d\'après la documentation. PAIOS est conçue comme un client pour Gemini Nano via AI Core ; le slogan du README ajoute « and maybe something else! » et la première entrée de la feuille de route cite aussi Flan-T5, mais aucun sélecteur ni import de modèle n\'est documenté. Pour d\'autres modèles, consultez le tableau des alternatives ci-dessus.',
          },
          {
            q: 'Pourquoi les longues réponses s\'arrêtent-elles parfois en cours de route ?',
            a: 'La feuille de route décrit une fenêtre de génération d\'environ 25 secondes qui peut interrompre les réponses prématurément. La version 1.1.7 a ajouté la poursuite automatique comme contournement, et le journal des modifications la signale toujours comme en test.',
          },
          {
            q: 'PAIOS est-elle activement maintenue ?',
            a: 'Les versions vont de la 1.0.0 à la 1.1.8, la plus récente, publiée le 21 avril 2026, et le dernier commit date de mai 2026. La feuille de route comporte encore des points ouverts, comme les contrôles de version d\'AICore et la documentation intégrée à l\'application.',
          },
          {
            q: 'Puis-je installer PAIOS sans Google Play ?',
            a: 'Oui. Chaque version GitHub inclut un APK, et le code source est public si vous préférez le compiler vous-même.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Sur le papier, PAIOS fait une seule chose précise et la fait bien : elle transforme le modèle Gemini Nano déjà présent dans les téléphones Android compatibles en une application de chat configurable et open source, gratuite et sans compte.',
          'Cette même spécialisation est aussi le revers de la médaille. Vous obtenez un seul petit modèle documenté, une dépendance stricte à la prise en charge de Google AI Core, et un logiciel que son propre auteur qualifie d\'alpha. Elle convient donc aux propriétaires de téléphones récents de la gamme Pixel qui aiment expérimenter, et mal à ceux qui veulent un choix de modèles, une large compatibilité d\'appareils ou une finition soignée.',
          'Si votre téléphone est éligible, installez-la et voyez ce que donne Gemini Nano avec vos propres prompts. Sinon, ou si vous voulez davantage de modèles, commencez par [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Layla](/fr/power-local-llm/layla-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[PAIOS sur GitHub](https://github.com/Puzzaks/PAIOS) — README, journal des modifications, feuille de route, licence et statistiques du dépôt.',
          '[Versions de PAIOS](https://github.com/Puzzaks/PAIOS/releases) — version 1.1.8 et fichiers de la version.',
          '[PAIOS - Offline AI sur Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) — fiche, prix et déclaration de sécurité des données.',
          '[Site du développeur](https://puzzak.page) — page d\'accueil du développeur, liée depuis le dépôt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application de Google pour l\'IA sur l\'appareil, également sur Android.',
          '[Avis Layla](/fr/power-local-llm/layla-review) — un assistant local pensé d\'abord pour Android, avec un choix de modèles plus large.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — le client de chat GGUF gratuit et open source.',
          '[Avis Off Grid AI](/fr/power-local-llm/off-grid-ai-review) — une application d\'IA locale multiplateforme.',
          '[Le répertoire complet des logiciels LLM locaux](/fr/power-local-llm/local-llm-software-directory) — un répertoire plus large d\'outils LLM locaux multiplateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/paios-review-hero-ja.webp',
    title: 'PAIOSレビュー:Android向けオフラインGemini Nanoチャット',
    seoTitle: 'PAIOSレビュー:AndroidのオフラインGemini Nanoチャット',
    intro:
      'PAIOS(Personal AI Operating System)は、Googleのオンデバイスモデル「Gemini Nano」にチャット画面を与える、無料のオープンソースAndroidアプリです。複数のチャット、カスタムプロンプト、temperature設定を備えています。本レビューでは、プロジェクト自身のREADME、変更履歴、Google Playの掲載情報をもとに、PAIOSの機能、対応機種、不足している点を扱います。',
    metaDescription:
      'PAIOSレビュー:Googleのオンデバイス「Gemini Nano」向け無料オープンソース(Unlicense)Androidチャットアプリ。機能、対応機種、プライバシー、制約、LaylaやPocketPal AIとの比較を解説。',
    twitterDescription:
      'PAIOSレビュー:Google AI Core経由でGemini Nanoを使うAndroidクライアント。対応機種、変更履歴に記されたネットワーク利用、足りない点を解説。',
    audience:
      'Pixel 9以降(またはAICore対応のその他の端末)を持ち、Gemini Nano向けの無料・オープンソースのオンデバイスチャットアプリを求めるAndroidユーザー向け——機能、対応機種、プライバシー、制約、他のAndroid向けローカルAIアプリとの比較を扱う。',
    readTime: '7分で読めます',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PAIOSレビュー',
    targetKeywords: [
      'paios レビュー',
      'paios android アプリ',
      'gemini nano android アプリ',
      'gemini nano オフライン 実行',
      'google ai core チャットアプリ',
      'puzzak paios',
      'オープンソース gemini nano クライアント',
      'オフライン ai チャット android pixel',
    ],
    current_hardware_mentioned: ['Pixel 9', 'Pixel 10'],
    leadAnswerBlock:
      '**PAIOSは、READMEによれば、Google AI Core経由でAndroidスマートフォン上だけで動作するGoogleのGemini Nano向けチャットフロントエンドで、コードは[Unlicense](https://github.com/Puzzaks/PAIOS)の下でパブリックドメインとして公開されています。** これはモデルライブラリではなくクライアントです。AI Coreに対応した端末(READMEは例としてPixel 9と10シリーズを挙げています)でのみ、しかもドキュメントによればGemini Nanoだけで動作します。プロジェクト自身はアルファ版と位置づけており、本レビュー(バージョン1.1.8)は端末での実機テストではなく、公開されているドキュメントに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'PAIOSはAndroidスマートフォンにインストールする価値がありますか?',
        answer:
          'はい、Google AI Core対応のスマートフォンを持っていて、チャットごとのプロンプトとtemperature設定を備えた、Gemini Nanoとオフラインで会話できる無料のオープンソースの方法を求めているならおすすめです。複数のモデルから選びたい場合や自分のモデルをインポートしたい場合は見送ってください。PAIOSがドキュメントで対応を挙げているのはGemini Nanoだけです。モデルの選択肢が広いのはLayla、PocketPal AI、Off Grid AIです。',
        bullets: [
          'Google PlayとGitHubのAPKで無料。Unlicenseのオープンソース。',
          'Google AI Core経由でGemini Nanoを端末上で実行。モデルのインポートやカタログの記載はない。',
          'READMEによればAI Core対応の端末が必要(例としてPixel 9/10シリーズ)。',
          '複数のチャット、カスタム指示、temperatureとトークンの設定、編集可能なプロンプトライブラリ。',
          '開発者プレビュー段階のモデル上で動く、自称アルファ版ソフトウェア。粗削りな部分があると想定すべき。',
        ],
        updatedDate: '2026-10-02',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'PAIOSを入手する', anchor: 'get-it' },
      { label: 'PAIOSの概要', anchor: 'at-a-glance' },
      { label: 'PAIOSとは', anchor: 'what-is-paios' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '機能と設定項目', anchor: 'features' },
      { label: '必要な端末要件', anchor: 'requirements' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
      { label: 'トレードオフ:メリットと制約', anchor: 'tradeoffs' },
      { label: 'PAIOS 対 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'PAIOSを使うべき人', anchor: 'who-should-use' },
      { label: 'PAIOSを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '開発者Puzzak氏によるPAIOSは、Google AI Core経由でGemini Nanoと完全に端末上でチャットでき、複数のチャット、カスタムプロンプト、temperature設定を備えており、無料でソースコードも公開されている。',
          },
          {
            type: 'plain-terms',
            text: '対応するAndroidスマートフォンにGoogleがすでに組み込んでいる小型AIモデルのためのチャット画面と考えてください。アカウントもクラウド上のモデルもモデルファイルの管理も不要ですが、モデルを選ぶこともできません。',
          },
        ],
        items: [
          'レビュー対象のバージョン:1.1.8、最新の[GitHubリリース](https://github.com/Puzzaks/PAIOS/releases)。',
          '価格とライセンス:無料で、[Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)にアプリ内課金の記載はなく、コードはUnlicenseのパブリックドメイン。',
          'モデル:端末上のGoogle AI Coreが実行するGemini Nano。他のモデルを読み込む方法はドキュメントに記載がない。',
          'プラットフォーム:Androidのみで、AI Core対応の端末に限られる(必要な端末要件を参照)。',
          '成熟度:開発者はアルファ版としており、プロジェクトの最後のコミットは2026年5月。',
        ],
      },
      getItPAIOS: {
        id: 'get-it',
        title: 'PAIOSを入手する',
        content: [
          '**PAIOSはGoogle Playと、GitHub上の直接配布APKから入手できます。** どちらも無料です。自動更新を使いたい場合はPlayの掲載ページを、Playストア外でインストールしたい場合はGitHubのAPKを使ってください。',
          '本レビューは、PromptQuorumの[ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory)を補完するものです。このディレクトリはPAIOSを他のオンデバイスAIやローカルAIツールと並べて掲載しています。',
        ],
        columns: ['入手経路', '入手方法'],
        rows: [
          {
            '入手経路': 'Google Play',
            '入手方法': '[Google PlayのPAIOS - Offline AI](https://play.google.com/store/apps/details?id=page.puzzak.paios)',
          },
          {
            '入手経路': 'GitHub APK',
            '入手方法': '[GitHubのPAIOSリリース](https://github.com/Puzzaks/PAIOS/releases)',
          },
          {
            '入手経路': 'ソースコード',
            '入手方法': '[Puzzaks/PAIOS](https://github.com/Puzzaks/PAIOS)',
          },
        ],
        note: 'バージョン1.1.2以降、アプリは新しいパッケージ名を使っており、開発者によればPlayストアの掲載上の問題のため、古いバージョンはもう動作しません。古いAPKではなく、現行のビルドをインストールしてください。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PAIOSの概要',
        columns: ['項目', 'PAIOS'],
        rows: [
          { '項目': 'プラットフォーム', 'PAIOS': 'Androidのみ' },
          { '項目': '価格', 'PAIOS': '無料' },
          { '項目': 'ライセンス', 'PAIOS': 'Unlicense(パブリックドメイン)' },
          { '項目': '完全オフラインで動作', 'PAIOS': 'チャットは端末上で実行。通信はプライバシー参照' },
          { '項目': '独自モデルのインポート', 'PAIOS': '記載なし。ドキュメント上のモデルはGemini Nano' },
          { '項目': 'アプリ内モデルダウンロード', 'PAIOS': '記載なし' },
          { '項目': '画像入力', 'PAIOS': '記載なし。テキストのインターフェース' },
          { '項目': '音声入力/出力', 'PAIOS': '記載なし' },
        ],
        note: '各項目は、ローカルLLMソフトウェアディレクトリで使われているモバイルチャットの比較基準に沿っています。「記載なし」は、README、ロードマップ、変更履歴にその機能への言及がないという意味であり、テストして存在しないと確認したという意味ではありません。',
      },
      whatIsPAIOS: {
        id: 'what-is-paios',
        title: 'PAIOSとは',
        content: [
          '**PAIOSはGemini Nano向けのフロントエンドであり、推論エンジンではありません。** モデルを実行するのは、Gemini Nanoをホストするシステムサービスである、AndroidのGoogle AI Coreです。PAIOSはその周囲に、独立した会話、プロンプト、生成設定というチャット画面を追加します。',
          '主にPuzzak氏ひとりが開発しており、コミュニティによる翻訳の貢献もあります。Dartで書かれ、Googleとは無関係の独立したプロジェクトとして公開されています。リポジトリは2025年11月に作成され、GitHubのスターは約170件です。',
          '本レビューは、README、変更履歴、ロードマップ、GitHubのリリース、Google Playの掲載情報に基づいています。端末での実機テストは含まれていないため、速度や回答品質は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**セットアップは、対応するスマートフォンへの通常のアプリのインストールで、アカウントは不要です。** READMEは初回起動時の流れを詳しく説明していないため、以下の手順は記載されている要件に沿っています。',
        ],
        numberedItems: [
          {
            title: 'スマートフォンがAI Coreに対応しているか確認する',
            whyItMatters: 'PAIOSはGoogle AI Coreが利用できる環境でのみ動作します。インストール前に端末が対応していることを確認してください(必要な端末要件を参照)。',
          },
          {
            title: 'PAIOSをインストールする',
            whyItMatters: '[Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)または[GitHubのリリースページ](https://github.com/Puzzaks/PAIOS/releases)から入手します。',
          },
          {
            title: 'チャットを始める',
            whyItMatters: '会話を作成し、デフォルト以外にしたい場合はtemperature、トークン上限、プロンプトを設定します。',
          },
          {
            title: '任意:プロンプトをカスタマイズする',
            whyItMatters: 'プロンプトマネージャーを開き、システムプロンプトを選ぶ、自分で書く、またはMarkdownファイルからインポートします。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能と設定項目',
        content: [
          '**モデル自体は固定されているため、PAIOSはGemini Nanoへの指示の与え方を制御することに重点を置いています。** 以下はすべて、バージョン1.1.8までのREADMEと変更履歴に基づいています。',
        ],
        items: [
          '**複数のチャット。** それぞれ独自のコンテキストを持つ会話を、作成、名前変更、ピン留めできる。',
          '**生成設定。** temperatureと最大応答トークン数を調整できる。1.1.7以降は、チャットごとにtemperatureを設定できる。',
          '**プロンプトマネージャー。** 1.1.6以降は、システムプロンプトとユーザープロンプトをチャットごとに選択、編集、割り当てできる。1.1.8ではプロンプトのMarkdownインポートとエクスポートが追加された。',
          '**カスタム指示。** モデルをペルソナやタスクに向けて誘導でき、必要に応じて現在の日付、時刻、アプリの言語を挿入できる。',
          '**プロンプトの透明性。** PAIOSがモデルに送信する実際のシステムプロンプトを確認できる。',
          '**自動継続。** 1.1.7以降、長い回答を自動的に継続でき、ロードマップに記載された約25秒の生成上限への回避策となっている。',
          '**翻訳。** コミュニティの貢献者が、トルコ語、ドイツ語、中国語のインターフェース翻訳を追加している。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '必要な端末要件',
        content: [
          '**PAIOSにはGoogle AI Core対応のスマートフォンが必要です。** READMEには「Google AI Coreに対応した端末が必要(例:Pixel 9/10シリーズ)」と記されています。最小RAMやストレージの数値は記載されておらず、ハードウェアの仕様ではなく端末の対応状況が条件となります。',
          'どのスマートフォンがAI CoreとGemini Nanoを受け取るかはGoogleが決めており、その一覧は変わる可能性があります。Pixel以外の端末で動くと考える前に、Google自身の端末ドキュメントを確認するか、お使いのスマートフォンでPlayストアからのインストールを試してください。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**READMEには、PAIOSは「Google AI Coreを使って完全に端末上で動作する。データが端末の外に出ることはない」と記されています。** Google Playの掲載情報では、開発者のデータセーフティ申告は「収集されるデータなし」「共有されるデータなし」となっています。',
          '変更履歴には、知っておくべき詳細が追加されています。バージョン1.1.2ではデバッグとクラッシュレポート用の任意の分析機能が導入され、1.1.5ではクラッシュレポートが追加され、それ以降のバージョンではアプリ設定用のFirebase Remote Configと、GitHubからダウンロードされるプロンプトに言及しています。READMEとPlayの申告にはこれらの記載がなく、本レビューではアプリのネットワーク通信を検査していません。',
          'ネットワークへの接続を一切避けたい場合は、アプリの設定で分析オプションを確認し、通信を自分で検査してください。ソースコードは公開されているため、主張は誰でも監査できます。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制約',
        columns: ['メリット', '実際の利用での意味', '制約・注意点'],
        rows: [
          {
            'メリット': '無料でパブリックドメイン',
            '実際の利用での意味': '価格もアカウントもコードのライセンス上の制限もない。',
            '制約・注意点': 'メンテナーはほぼ1人で、最後のコミットは2026年5月のため、更新のペースは不明。',
          },
          {
            'メリット': '管理するモデルファイルがない',
            '実際の利用での意味': 'Gemini NanoはGoogle AI Coreが提供するため、GGUFファイルやカタログを扱う必要がない。',
            '制約・注意点': 'モデル切り替えや独自モデルのインポートの記載はなく、対応モデルはGemini Nano。',
          },
          {
            'メリット': '充実したプロンプト設定',
            '実際の利用での意味': 'チャットごとのプロンプト、temperature、トークン上限により、小型モデルを誘導しやすくなる。',
            '制約・注意点': 'READMEは、Gemini Nanoが要約とスマートリプライ向けに調整されており、幻覚を起こしたりコンテキストを失ったりする可能性があると警告している。',
          },
          {
            'メリット': 'オープンソースで監査可能',
            '実際の利用での意味': 'プライバシーに関する主張の裏付けとなるコードを誰でも読める。',
            '制約・注意点': 'READMEによれば、自動再試行がオンのときに悪口や侮辱語を入力すると、モデル自体のフィルターのためアプリが固まる可能性がある。',
          },
          {
            'メリット': '長い回答のための自動継続',
            '実際の利用での意味': '約25秒の生成ウィンドウで途切れた応答を延長できる。',
            '制約・注意点': '変更履歴は自動継続をまだテスト中としており、完了した回答を継続したり、途切れた回答を見逃したりする可能性がある。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PAIOS 対 代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格とライセンス', 'モデルの柔軟性', '主な違い'],
        rows: [
          {
            'アプリ': 'PAIOS',
            'プラットフォーム': 'Android',
            '価格とライセンス': '無料、Unlicense',
            'モデルの柔軟性': 'Google AI Core経由のGemini Nano',
            '主な違い': '充実したプロンプト設定を備えたオープンソースのGemini Nanoクライアント。AI Core対応の端末が必要',
          },
          {
            'アプリ': '[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)',
            'プラットフォーム': 'Android、iOS',
            '価格とライセンス': '無料、Apache 2.0',
            'モデルの柔軟性': 'GoogleのオンデバイスGemmaモデル',
            '主な違い': 'Gemmaモデルを実行する、Google自身のオンデバイスアプリ',
          },
          {
            'アプリ': '[Layla](/ja/power-local-llm/layla-review)',
            'プラットフォーム': 'Android',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            'モデルの柔軟性': 'GGUFモデルとその他のオンデバイスバックエンド',
            '主な違い': 'モデルの選択肢が広いAndroid優先のアシスタントだが、オープンソースではない',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'Android、iOS',
            '価格とライセンス': '無料、MIT',
            'モデルの柔軟性': 'ユーザーが自分でダウンロードするGGUFモデル',
            '主な違い': 'AI Coreを使わず独自の推論エンジンを搭載するが、モデルファイルは自分で管理する必要がある',
          },
          {
            'アプリ': '[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)',
            'プラットフォーム': 'Android、iOS、macOS、Windows',
            '価格とライセンス': 'フリーミアム、MIT',
            'モデルの柔軟性': 'ローカルモデルとOllama接続',
            '主な違い': 'クロスプラットフォームで高機能だが、Gemini Nanoに特化したクライアントよりはるかに大きなアプリ',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム、価格、機能の詳細は頻繁に変更されます。決定前に各アプリ自体の掲載情報で現在の詳細を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'PAIOSを使うべき人',
        items: [
          '**AI Core対応のスマートフォンを持ち、Gemini Nano向けの無料のチャットフロントエンドを求める人。** Googleが端末にすでに搭載しているモデルと会話する、最も直接的な方法です。',
          '**オープンソースを好むプライバシー重視のユーザー。** コードは公開されパブリックドメインのライセンスの下にあるため、データの取り扱いに関する主張を確認できます。',
          '**小型モデルの誘導を試してみたい人。** チャットごとのプロンプトやtemperature、Markdownでインポート・エクスポートできるプロンプトライブラリは、試行錯誤に向いています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'PAIOSを使うべきでない人',
        items: [
          '**スマートフォンがAI Coreに対応していない人。** AI Coreがなければアプリは動作しません(上記の必要な端末要件を参照)。',
          '**モデルを選んだりインポートしたりしたい人。** PAIOSがドキュメントで挙げているのはGemini Nanoだけです。代わりに[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Layla](/ja/power-local-llm/layla-review)を試してください。',
          '**深さや信頼性を必要とする人。** Gemini Nanoは小型のオンデバイスモデルであり、プロジェクト自身もアルファ版としています。',
          '**iPhone、Mac、Windowsのユーザー。** PAIOSはAndroid専用です。[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)はより多くのプラットフォームに対応しています。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'PAIOSは無料ですか?',
            a: 'はい。Google Playの掲載情報にアプリ内課金はなく、ロードマップでも収益化は将来の未チェックの項目として挙げられているだけです。',
          },
          {
            q: 'PAIOSを開発しているのは誰ですか?',
            a: 'Puzzak(GitHub:Puzzaks)の名前で公開している独立した開発者です。プロジェクトは、Googleと提携しておらず、Googleから承認もスポンサーも受けていないと明記しています。',
          },
          {
            q: 'PAIOSはどのAndroidスマートフォンでも動作しますか?',
            a: 'いいえ。GoogleがAI Coreを有効にしている一部の端末でのみ動作します。READMEの文言については、必要な端末要件を参照してください。',
          },
          {
            q: 'PAIOSでLlamaやGemmaなど他のモデルを使えますか?',
            a: 'ドキュメントを見る限り、使えません。PAIOSはAI Core経由のGemini Nano向けクライアントとして作られています。READMEのタグラインには「and maybe something else!」とあり、ロードマップの最初の項目にもFlan-T5が挙げられていますが、モデルの選択やインポートの機能は記載されていません。他のモデルについては、上の代替アプリの比較を参照してください。',
          },
          {
            q: 'なぜ長い回答が途中で止まることがあるのですか?',
            a: 'ロードマップには、回答を早期に終了させる可能性のある約25秒の生成ウィンドウが記載されています。バージョン1.1.7で回避策として自動継続が追加されましたが、変更履歴ではまだテスト中とされています。',
          },
          {
            q: 'PAIOSは積極的にメンテナンスされていますか?',
            a: 'リリースは1.0.0から最新の1.1.8まであり、1.1.8は2026年4月21日に公開され、最後のコミットは2026年5月でした。ロードマップにはAICoreのバージョン管理やアプリ内ドキュメントといった未完了の項目がまだ残っています。',
          },
          {
            q: 'Google Playを使わずにPAIOSをインストールできますか?',
            a: 'はい。各GitHubリリースにはAPKが含まれており、自分でビルドしたい場合のためにソースコードも公開されています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'PAIOSは、書面上はひとつの狭い役割をうまくこなしています。対応するAndroidスマートフォンにすでに入っているGemini Nanoモデルを、アカウント不要の無料で、設定可能なオープンソースのチャットアプリに変えるものです。',
          'その狭さが同時に難点でもあります。使えるのはドキュメントに記載された1つの小型モデルだけで、Google AI Coreへの対応に完全に依存し、開発者自身がアルファ版と呼ぶソフトウェアです。そのため、最近のPixelクラスのスマートフォンを持ち試行錯誤を楽しむ人には向いていますが、モデルの選択肢、幅広い端末対応、完成度を求める人には向いていません。',
          'お使いのスマートフォンが対応しているなら、インストールして自分のプロンプトでGemini Nanoの感触を確かめてください。対応していない場合や、より多くのモデルを使いたい場合は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)か[Layla](/ja/power-local-llm/layla-review)から始めてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHubのPAIOS](https://github.com/Puzzaks/PAIOS) — README、変更履歴、ロードマップ、ライセンス、リポジトリの統計。',
          '[PAIOSのリリース](https://github.com/Puzzaks/PAIOS/releases) — バージョン1.1.8とリリースアセット。',
          '[Google PlayのPAIOS - Offline AI](https://play.google.com/store/apps/details?id=page.puzzak.paios) — 掲載情報、価格、データセーフティの申告。',
          '[開発者のサイト](https://puzzak.page) — リポジトリからリンクされている開発者のホームページ。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Android向けでもあるGoogle自身のオンデバイスアプリ。',
          '[Laylaレビュー](/ja/power-local-llm/layla-review) — モデルの選択肢が広い、Android優先のローカルアシスタント。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 無料のオープンソースGGUFチャットクライアント。',
          '[Off Grid AIレビュー](/ja/power-local-llm/off-grid-ai-review) — クロスプラットフォームのローカルAIアプリ。',
          '[完全なローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory) — プラットフォームを横断するローカルLLMツールのより広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/paios-review-hero-zh.webp',
    title: 'PAIOS评测：适用于Android的离线Gemini Nano聊天应用',
    seoTitle: 'PAIOS评测：Android离线Gemini Nano聊天应用',
    intro:
      'PAIOS（Personal AI Operating System）是一款免费、开源的Android应用，为Google设备端的Gemini Nano模型提供聊天界面，支持多个对话、自定义提示词和温度控制。本评测依据项目自身的README、更新日志和Google Play页面，介绍它的功能、适用的手机型号以及不足之处。',
    metaDescription:
      'PAIOS评测：面向Google设备端Gemini Nano的免费开源Android聊天应用（Unlicense）。功能、支持的设备、隐私细节、局限，以及与Layla和PocketPal AI的对比。',
    twitterDescription:
      'PAIOS评测：通过Google AI Core调用Gemini Nano的Android客户端。哪些手机可用、更新日志对网络使用的说明，以及它的不足之处。',
    audience:
      '使用Pixel 9或更新机型（或其他支持AICore的手机），想要一款免费、开源、在设备端运行Gemini Nano的聊天应用的Android用户——涵盖功能、设备支持、隐私、局限，以及PAIOS与其他Android本地AI应用的对比。',
    readTime: '7分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PAIOS review',
    targetKeywords: [
      'paios review',
      'paios android app',
      'gemini nano android app',
      'run gemini nano offline',
      'google ai core chat app',
      'puzzak paios',
      'open source gemini nano client',
      'offline ai chat android pixel',
    ],
    current_hardware_mentioned: ['Pixel 9', 'Pixel 10'],
    leadAnswerBlock:
      '**PAIOS是Google的Gemini Nano模型的聊天前端，按其README所述，通过Google AI Core完全在Android手机上运行，其代码以[Unlicense](https://github.com/Puzzaks/PAIOS)发布到公有领域。** 它是客户端，而不是模型库：只能在支持AI Core的手机上使用（README以Pixel 9和10系列为例），并且根据其文档，只能使用Gemini Nano。项目自称处于alpha阶段，本评测（版本1.1.8）基于其公开文档，并未在真机上实际测试。',
    quickAnswerTop: {
      zh: {
        question: '在Android手机上安装PAIOS值得吗？',
        answer:
          '如果您的手机支持Google AI Core，并且想要一种免费、开源的方式离线与Gemini Nano对话，同时使用每个对话独立的提示词和温度控制，那么值得。如果您想在多个模型之间选择或导入自己的模型，则可以跳过：PAIOS在文档中只支持Gemini Nano。Layla、PocketPal AI和Off Grid AI提供更广泛的模型选择。',
        bullets: [
          '可在Google Play免费获取，也可作为GitHub APK安装；以Unlicense开源。',
          '通过Google AI Core在设备端运行Gemini Nano；文档中没有提到模型导入或模型库。',
          '根据README，需要支持AI Core的手机（以Pixel 9/10系列为例）。',
          '支持多个对话、自定义指令、温度和token控制，以及可编辑的提示词库。',
          '自称alpha阶段的软件，运行在开发者预览版模型之上：可能存在不完善之处。',
        ],
        updatedDate: '2026-10-02',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '获取PAIOS', anchor: 'get-it' },
      { label: 'PAIOS概览', anchor: 'at-a-glance' },
      { label: 'PAIOS是什么', anchor: 'what-is-paios' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '功能与控制选项', anchor: 'features' },
      { label: '设备要求', anchor: 'requirements' },
      { label: '隐私与网络使用', anchor: 'privacy' },
      { label: '权衡：优点与局限', anchor: 'tradeoffs' },
      { label: 'PAIOS与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用PAIOS', anchor: 'who-should-use' },
      { label: '谁不适合使用PAIOS', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要点速览',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PAIOS由开发者Puzzak打造，通过Google AI Core完全在设备端与Gemini Nano对话，支持多个对话、自定义提示词和温度控制；它免费，源代码公开。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作Google已内置在受支持Android手机中的小型AI模型的聊天窗口：无需账号，没有云端模型，也不需要管理模型文件，但同样无法选择其他模型。',
          },
        ],
        items: [
          '评测版本：1.1.8，即最新的[GitHub发布版本](https://github.com/Puzzaks/PAIOS/releases)。',
          '价格与许可证：免费，[Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)页面未列出应用内购买；代码以Unlicense进入公有领域。',
          '模型：Gemini Nano，由手机上的Google AI Core运行；文档中没有描述加载其他模型的方式。',
          '平台：仅限Android，且仅限支持AI Core的手机（见“设备要求”）。',
          '成熟度：开发者将其标注为alpha阶段，项目最近一次提交在2026年5月。',
        ],
      },
      getItPAIOS: {
        id: 'get-it',
        title: '获取PAIOS',
        content: [
          '**PAIOS可从Google Play获取，也可作为GitHub上的APK直接安装。** 两种方式都免费。想要自动更新请使用Google Play页面；如果希望在Play商店之外安装，可使用GitHub上的APK。',
          '本评测是PromptQuorum[本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory)的配套文章，该目录将PAIOS与其他设备端和本地AI工具一并列出。',
        ],
        columns: ['渠道', '获取方式'],
        rows: [
          {
            '渠道': 'Google Play',
            '获取方式': '[Google Play上的PAIOS - Offline AI](https://play.google.com/store/apps/details?id=page.puzzak.paios)',
          },
          {
            '渠道': 'GitHub APK',
            '获取方式': '[GitHub上的PAIOS发布版本](https://github.com/Puzzaks/PAIOS/releases)',
          },
          {
            '渠道': '源代码',
            '获取方式': '[Puzzaks/PAIOS](https://github.com/Puzzaks/PAIOS)',
          },
        ],
        note: '自1.1.2版本起，应用使用了新的包名，开发者表示由于Play商店页面的问题，旧版本已无法使用。请安装当前版本，而不要使用旧的APK。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PAIOS概览',
        columns: ['属性', 'PAIOS'],
        rows: [
          { '属性': '平台', 'PAIOS': '仅限Android' },
          { '属性': '价格', 'PAIOS': '免费' },
          { '属性': '许可证', 'PAIOS': 'Unlicense（公有领域）' },
          { '属性': '完全离线运行', 'PAIOS': '聊天在设备端运行；网络使用请见隐私部分' },
          { '属性': '导入自己的模型', 'PAIOS': '未说明；文档中的模型为Gemini Nano' },
          { '属性': '应用内下载模型', 'PAIOS': '未说明' },
          { '属性': '图像输入', 'PAIOS': '未说明；文本界面' },
          { '属性': '语音输入/输出', 'PAIOS': '未说明' },
        ],
        note: '各属性沿用本地LLM软件目录中使用的移动端聊天对比项。“未说明”表示README、路线图和更新日志均未提及该功能，并不表示经过测试后发现它缺失。',
      },
      whatIsPAIOS: {
        id: 'what-is-paios',
        title: 'PAIOS是什么',
        content: [
          '**PAIOS是Gemini Nano的前端，而不是推理引擎。** 运行模型的是Google AI Core，即托管Gemini Nano的Android系统服务。PAIOS在其外围提供聊天界面：独立的对话、提示词和生成设置。',
          '它主要由开发者Puzzak开发，并有社区翻译贡献，使用Dart编写，作为独立项目发布，与Google没有隶属关系。代码仓库创建于2025年11月，GitHub上约有170颗星标。',
          '本评测依据README、更新日志、路线图、GitHub发布版本和Google Play页面，不包含在真机上的实际测试，因此这里不对速度和回答质量进行评价。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**在受支持的手机上，设置过程就是一次普通的应用安装，无需账号。** README没有详细描述首次运行的流程，因此以下步骤依据文档中列出的要求整理。',
        ],
        numberedItems: [
          {
            title: '确认手机支持AI Core',
            whyItMatters: 'PAIOS只能在提供Google AI Core的设备上运行；安装前请先确认您的设备受支持（见“设备要求”）。',
          },
          {
            title: '安装PAIOS',
            whyItMatters: '可从[Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)或[GitHub发布页面](https://github.com/Puzzaks/PAIOS/releases)获取。',
          },
          {
            title: '开始聊天',
            whyItMatters: '创建一个对话，如果不想使用默认设置，可再设置该对话的温度、token上限和提示词。',
          },
          {
            title: '可选：自定义提示词',
            whyItMatters: '打开提示词管理器，选择系统提示词、自己编写，或从Markdown文件导入。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能与控制选项',
        content: [
          '**由于模型本身是固定的，PAIOS的重点在于控制如何向Gemini Nano提供提示。** 以下内容均来自README和截至1.1.8版本的更新日志。',
        ],
        items: [
          '**多个对话。** 可创建、重命名和置顶对话，每个对话拥有独立的上下文。',
          '**生成控制。** 可调整温度和最大回复token数；自1.1.7起，可为每个对话单独设置温度。',
          '**提示词管理器。** 自1.1.6起，可为每个对话选择、编辑并分配系统提示词和用户提示词；1.1.8新增了提示词的Markdown导入与导出。',
          '**自定义指令。** 可引导模型扮演某种角色或完成某类任务，并可选择注入当前日期、时间和应用语言。',
          '**提示词透明。** 可以查看PAIOS实际发送给模型的系统提示词。',
          '**自动续写。** 自1.1.7起，较长的回答可以自动继续，这是针对路线图中所述约25秒生成时限的变通办法。',
          '**翻译。** 社区贡献者已添加土耳其语、德语和中文界面翻译。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '设备要求',
        content: [
          '**PAIOS需要支持Google AI Core的手机。** README写明它“requires a supported device with Google AI Core (e.g., Pixel 9/10 series)”（需要支持Google AI Core的设备，例如Pixel 9/10系列）。README没有列出最低内存或存储容量，因此决定能否使用的是设备是否受支持，而不是硬件规格。',
          '哪些手机能获得AI Core和Gemini Nano由Google决定，而且这份名单可能变化。在假定非Pixel设备可用之前，请查阅Google自己的设备文档，或直接在您的手机上尝试从Play商店安装。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**README称PAIOS“entirely on-device using Google\'s AI Core. No data leaves your phone.”**（完全在设备端通过Google的AI Core运行，没有数据离开您的手机。）Google Play页面上，开发者的数据安全声明为“未收集数据”和“未共享数据”。',
          '更新日志补充了一些值得了解的细节。1.1.2版本引入了用于调试和崩溃报告的可选分析功能，1.1.5版本增加了崩溃报告，后续版本还提到使用Firebase Remote Config获取应用设置，以及从GitHub下载提示词。README和Play页面的声明均未提及这些内容，本评测也没有检查应用的网络流量。',
          '如果您需要完全没有网络接触，请在应用设置中查看分析选项，并自行检查网络流量。源代码是公开的，任何人都可以审查这些说法。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: ['优点', '实际使用中的意义', '局限/注意事项'],
        rows: [
          {
            '优点': '免费且属于公有领域',
            '实际使用中的意义': '无需付费、无需账号，对代码也没有许可证限制。',
            '局限/注意事项': '主要由一位维护者负责；最近一次提交在2026年5月，更新节奏尚不确定。',
          },
          {
            '优点': '无需管理模型文件',
            '实际使用中的意义': 'Gemini Nano由Google AI Core提供，因此无需处理GGUF文件或模型库。',
            '局限/注意事项': '文档中没有提到切换或导入模型；支持的模型是Gemini Nano。',
          },
          {
            '优点': '提示词控制能力强',
            '实际使用中的意义': '每个对话独立的提示词、温度和token上限，使这个小模型更容易引导。',
            '局限/注意事项': 'README警告称，Gemini Nano针对摘要和智能回复进行了调优，可能出现幻觉或丢失上下文。',
          },
          {
            '优点': '开源，可审查',
            '实际使用中的意义': '任何人都可以阅读隐私声明背后的代码。',
            '局限/注意事项': 'README称，开启自动重试时输入脏话或辱骂性词语可能会使应用卡死，原因是模型自带的过滤机制。',
          },
          {
            '优点': '长回答自动续写',
            '实际使用中的意义': '因约25秒生成时限而被截断的回复可以继续扩展。',
            '局限/注意事项': '更新日志将自动续写列为仍在测试中：它可能续写已完成的回答，或遗漏被截断的回答。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PAIOS与替代方案对比',
        columns: ['应用', '平台', '价格与许可证', '模型灵活性', '主要区别'],
        rows: [
          {
            '应用': 'PAIOS',
            '平台': 'Android',
            '价格与许可证': '免费，Unlicense',
            '模型灵活性': 'Gemini Nano，通过Google AI Core',
            '主要区别': '开源的Gemini Nano客户端，提示词控制能力强；需要支持AI Core的手机',
          },
          {
            '应用': '[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)',
            '平台': 'Android、iOS',
            '价格与许可证': '免费，Apache 2.0',
            '模型灵活性': 'Google的设备端Gemma模型',
            '主要区别': 'Google自家的设备端应用，运行Gemma模型',
          },
          {
            '应用': '[Layla](/zh/power-local-llm/layla-review)',
            '平台': 'Android',
            '价格与许可证': '免费增值，闭源',
            '模型灵活性': 'GGUF模型及其他设备端后端',
            '主要区别': 'Android优先的助手，模型选择更广，但不是开源',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'Android、iOS',
            '价格与许可证': '免费，MIT',
            '模型灵活性': '需自行下载的GGUF模型',
            '主要区别': '自带推理引擎而不使用AI Core，但模型文件需自行管理',
          },
          {
            '应用': '[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)',
            '平台': 'Android、iOS、macOS、Windows',
            '价格与许可证': '免费增值，MIT',
            '模型灵活性': '本地模型加Ollama连接',
            '主要区别': '跨平台且功能丰富，但应用体量远大于专注于Gemini Nano的客户端',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化。做决定前，请在各应用自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用PAIOS',
        items: [
          '**拥有支持AI Core的手机、想要免费Gemini Nano聊天前端的用户。** 这是与Google已预装在设备上的模型对话最直接的方式。',
          '**注重隐私、偏好开源的用户。** 代码公开并采用公有领域许可证，因此数据处理方面的说法可以核查。',
          '**喜欢引导小型模型的折腾爱好者。** 每个对话独立的提示词、温度，以及支持Markdown导入导出的提示词库，适合反复试验。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用PAIOS',
        items: [
          '**手机不支持AI Core的用户。** 没有AI Core，应用无法运行（见上文“设备要求”）。',
          '**想要选择或导入模型的用户。** PAIOS在文档中只提供Gemini Nano；可改试[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)或[Layla](/zh/power-local-llm/layla-review)。',
          '**需要深度或可靠性的用户。** Gemini Nano是小型设备端模型，且项目自称处于alpha阶段。',
          '**iPhone、Mac或Windows用户。** PAIOS仅限Android；[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)覆盖更多平台。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'PAIOS免费吗？',
            a: '是的。Google Play页面未显示应用内购买，路线图中只把变现列为未来的、尚未勾选的事项。',
          },
          {
            q: 'PAIOS是谁开发的？',
            a: '一位以Puzzak名义发布的独立开发者（GitHub：Puzzaks）。项目声明与Google没有隶属、背书或赞助关系。',
          },
          {
            q: 'PAIOS能在任何Android手机上使用吗？',
            a: '不能。它需要Google AI Core，而Google只在选定的设备上启用该功能。README的原文表述见“设备要求”。',
          },
          {
            q: '能在PAIOS中使用Llama或Gemma等其他模型吗？',
            a: '就文档所示，不能。PAIOS被设计为通过AI Core调用Gemini Nano的客户端；README标语还写有“and maybe something else!”，路线图的第一项也提到Flan-T5，但文档中没有提到模型选择器或模型导入功能。如需其他模型，请参阅上文的替代方案对比表。',
          },
          {
            q: '为什么较长的回答有时会中途停止？',
            a: '路线图描述了约25秒的生成时限，可能导致回答提前结束。1.1.7版本增加了自动续写作为变通办法，更新日志仍将其列为测试中。',
          },
          {
            q: 'PAIOS还在积极维护吗？',
            a: '发布版本从1.0.0到最新的1.1.8，1.1.8发布于2026年4月21日，最近一次提交在2026年5月。路线图中仍列有AICore版本控制和应用内文档等未完成事项。',
          },
          {
            q: '不用Google Play也能安装PAIOS吗？',
            a: '可以。每个GitHub发布版本都附带APK，如果您愿意，也可以根据公开的源代码自行编译。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '从纸面上看，PAIOS把一件事做得很专注：它把受支持Android手机里已有的Gemini Nano模型变成一款可配置的开源聊天应用，免费且无需账号。',
          '这种专注同时也是它的代价。您只能得到一个文档中记载的小型模型，必须依赖Google AI Core的支持，而且软件的作者自己称之为alpha。因此它适合喜欢尝试的近期Pixel级手机用户，不适合想要模型选择、广泛设备支持或精细体验的人。',
          '如果您的手机符合条件，可以安装后用自己的提示词体验Gemini Nano的表现。如果不符合，或者想要更多模型，请先从[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)或[Layla](/zh/power-local-llm/layla-review)开始。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[GitHub上的PAIOS](https://github.com/Puzzaks/PAIOS) — README、更新日志、路线图、许可证和仓库统计数据。',
          '[PAIOS发布版本](https://github.com/Puzzaks/PAIOS/releases) — 1.1.8版本及发布资源。',
          '[Google Play上的PAIOS - Offline AI](https://play.google.com/store/apps/details?id=page.puzzak.paios) — 应用页面、价格和数据安全声明。',
          '[开发者网站](https://puzzak.page) — 代码仓库中链接的开发者主页。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Google AI Edge Gallery评测](/zh/power-local-llm/google-ai-edge-gallery-review) — Google自家的设备端应用，同样支持Android。',
          '[Layla评测](/zh/power-local-llm/layla-review) — Android优先的本地助手，模型选择更广。',
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review) — 免费、开源的GGUF聊天客户端。',
          '[Off Grid AI评测](/zh/power-local-llm/off-grid-ai-review) — 跨平台本地AI应用。',
          '[完整本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory) — 涵盖多平台本地LLM工具的更全面目录。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/paios-review-hero-es.webp',
    title: 'Reseña de PAIOS: chat offline con Gemini Nano para Android',
    seoTitle: 'Reseña PAIOS: chat offline con Gemini Nano en Android',
    intro:
      'PAIOS (Personal AI Operating System) es una app gratuita y de código abierto para Android que da una interfaz de chat al modelo Gemini Nano de Google que se ejecuta en el dispositivo, con varios chats, prompts personalizados y control de temperatura. Esta reseña explica qué hace, en qué teléfonos funciona y dónde se queda corta, a partir del README, el changelog y la ficha de Google Play del propio proyecto.',
    metaDescription:
      'Reseña de PAIOS: app de chat gratuita y de código abierto (Unlicense) para Android que usa Gemini Nano de Google en el dispositivo. Funciones, dispositivos compatibles, privacidad, límites y comparación con Layla y PocketPal AI.',
    twitterDescription:
      'Reseña de PAIOS: un cliente de Android para Gemini Nano mediante Google AI Core. Qué teléfonos funcionan, qué dice el changelog sobre el uso de red y dónde se queda corto.',
    audience:
      'Usuarios de Android con un Pixel 9 o más reciente (u otro teléfono compatible con AICore) que quieren una app de chat gratuita, de código abierto y en el dispositivo para Gemini Nano — cubre funciones, compatibilidad de dispositivos, privacidad, límites y cómo se compara PAIOS con otras apps de IA local para Android.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PAIOS review',
    targetKeywords: [
      'paios review',
      'paios android app',
      'gemini nano android app',
      'run gemini nano offline',
      'google ai core chat app',
      'puzzak paios',
      'open source gemini nano client',
      'offline ai chat android pixel',
    ],
    current_hardware_mentioned: ['Pixel 9', 'Pixel 10'],
    leadAnswerBlock:
      '**PAIOS es una interfaz de chat para el modelo Gemini Nano de Google que, según su README, se ejecuta íntegramente en un teléfono Android mediante Google AI Core, con su código liberado al dominio público bajo la [Unlicense](https://github.com/Puzzaks/PAIOS).** Es un cliente, no una biblioteca de modelos: solo funciona en teléfonos compatibles con AI Core (el README cita como ejemplo las series Pixel 9 y 10) y, según su documentación, solo con Gemini Nano. El proyecto se define a sí mismo como alfa, y esta reseña (versión 1.1.8) se basa en su documentación pública, no en pruebas prácticas en un dispositivo.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar PAIOS en un teléfono Android?',
        answer:
          'Sí, si tiene un teléfono con soporte de Google AI Core y quiere una forma gratuita y de código abierto de chatear offline con Gemini Nano, con prompts por chat y control de temperatura. Sáltesela si quiere elegir entre muchos modelos o importar los suyos: PAIOS documenta soporte solo para Gemini Nano. Layla, PocketPal AI y Off Grid AI ofrecen más variedad de modelos.',
        bullets: [
          'Gratis en Google Play y como APK de GitHub; código abierto bajo la Unlicense.',
          'Ejecuta Gemini Nano en el dispositivo mediante Google AI Core; no se documenta importación de modelos ni catálogo.',
          'Requiere un teléfono con soporte de AI Core, según el README (series Pixel 9/10 como ejemplo).',
          'Varios chats, instrucciones personalizadas, controles de temperatura y de tokens, y una biblioteca de prompts editable.',
          'Software que se declara alfa, sobre un modelo en vista previa para desarrolladores: espere asperezas.',
        ],
        updatedDate: '2026-10-02',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Cómo conseguir PAIOS', anchor: 'get-it' },
      { label: 'PAIOS de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es PAIOS', anchor: 'what-is-paios' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Funciones y controles', anchor: 'features' },
      { label: 'Requisitos del dispositivo', anchor: 'requirements' },
      { label: 'Privacidad y uso de red', anchor: 'privacy' },
      { label: 'Compensaciones: ventajas frente a limitaciones', anchor: 'tradeoffs' },
      { label: 'PAIOS frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar PAIOS', anchor: 'who-should-use' },
      { label: 'Quién no debería usar PAIOS', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PAIOS, creada por el desarrollador Puzzak, permite chatear con Gemini Nano completamente en el dispositivo mediante Google AI Core, con varios chats, prompts personalizados y control de temperatura; es gratuita y su código fuente es público.',
          },
          {
            type: 'plain-terms',
            text: 'Piense en ella como una ventana de chat para el pequeño modelo de IA que Google ya integró en los teléfonos Android compatibles: sin cuenta, sin modelo en la nube y sin archivos de modelo que gestionar, pero también sin posibilidad de elegir modelo.',
          },
        ],
        items: [
          'Versión reseñada: 1.1.8, la última [versión en GitHub](https://github.com/Puzzaks/PAIOS/releases).',
          'Precio y licencia: gratis, sin compras dentro de la app indicadas en [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios); el código es de dominio público bajo la Unlicense.',
          'Modelo: Gemini Nano, ejecutado por Google AI Core en el teléfono; la documentación no describe ninguna forma de cargar otros modelos.',
          'Plataforma: solo Android, y solo en teléfonos compatibles con AI Core (vea Requisitos del dispositivo).',
          'Madurez: el desarrollador la define como alfa, y el proyecto tuvo su último commit en mayo de 2026.',
        ],
      },
      getItPAIOS: {
        id: 'get-it',
        title: 'Cómo conseguir PAIOS',
        content: [
          '**PAIOS está disponible en Google Play y como APK directo en GitHub.** Ambas opciones son gratuitas. Use la ficha de Play para recibir actualizaciones automáticas, o el APK de GitHub si prefiere instalar fuera de Play Store.',
          'Esta reseña complementa el [directorio de software LLM local](/es/power-local-llm/local-llm-software-directory) de PromptQuorum, que incluye PAIOS junto a otras herramientas de IA local y en el dispositivo.',
        ],
        columns: ['Canal', 'Cómo conseguirla'],
        rows: [
          {
            'Canal': 'Google Play',
            'Cómo conseguirla': '[PAIOS - Offline AI en Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)',
          },
          {
            'Canal': 'APK de GitHub',
            'Cómo conseguirla': '[Versiones de PAIOS en GitHub](https://github.com/Puzzaks/PAIOS/releases)',
          },
          {
            'Canal': 'Código fuente',
            'Cómo conseguirla': '[Puzzaks/PAIOS](https://github.com/Puzzaks/PAIOS)',
          },
        ],
        note: 'Desde la versión 1.1.2 la app usa un nuevo nombre de paquete, y el desarrollador indica que las versiones antiguas ya no funcionan por un problema con la ficha de Play Store. Instale una compilación actual en lugar de un APK antiguo.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PAIOS de un vistazo',
        columns: ['Atributo', 'PAIOS'],
        rows: [
          { 'Atributo': 'Plataforma', 'PAIOS': 'Solo Android' },
          { 'Atributo': 'Precio', 'PAIOS': 'Gratis' },
          { 'Atributo': 'Licencia', 'PAIOS': 'Unlicense (dominio público)' },
          { 'Atributo': 'Funciona totalmente offline', 'PAIOS': 'Chat en el dispositivo; red: ver Privacidad' },
          { 'Atributo': 'Importar modelos propios', 'PAIOS': 'No indicado; Gemini Nano es el modelo documentado' },
          { 'Atributo': 'Descarga de modelos en la app', 'PAIOS': 'No indicado' },
          { 'Atributo': 'Entrada de imagen', 'PAIOS': 'No indicado; interfaz de texto' },
          { 'Atributo': 'Entrada / salida de voz', 'PAIOS': 'No indicado' },
        ],
        note: 'Los atributos siguen la comparación de chats móviles usada en el directorio de software LLM local. "No indicado" significa que el README, la hoja de ruta y el changelog no mencionan la función, no que se haya probado y comprobado que falta.',
      },
      whatIsPAIOS: {
        id: 'what-is-paios',
        title: 'Qué es PAIOS',
        content: [
          '**PAIOS es una interfaz para Gemini Nano, no un motor de inferencia.** Google AI Core, el servicio de sistema de Android que aloja Gemini Nano, ejecuta el modelo. PAIOS añade la interfaz de chat a su alrededor: conversaciones separadas, prompts y ajustes de generación.',
          'La desarrolla principalmente un programador, Puzzak, con contribuciones de traducción de la comunidad, está escrita en Dart y se publica como un proyecto independiente sin vínculo con Google. El repositorio se creó en noviembre de 2025 y tiene unas 170 estrellas en GitHub.',
          'Esta reseña se basa en el README, el changelog, la hoja de ruta, las versiones de GitHub y la ficha de Google Play. No incluye pruebas prácticas en un dispositivo, por lo que aquí no se valoran la velocidad ni la calidad de las respuestas.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración es una instalación normal de app en un teléfono compatible, sin cuenta.** El README no describe con detalle el flujo del primer arranque, así que los pasos siguientes se basan en los requisitos documentados.',
        ],
        numberedItems: [
          {
            title: 'Compruebe que su teléfono es compatible con AI Core',
            whyItMatters: 'PAIOS solo funciona donde Google AI Core está disponible; confirme que su dispositivo es compatible antes de instalar (vea Requisitos del dispositivo).',
          },
          {
            title: 'Instale PAIOS',
            whyItMatters: 'Obtenga la app en [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) o en la [página de versiones de GitHub](https://github.com/Puzzaks/PAIOS/releases).',
          },
          {
            title: 'Inicie un chat',
            whyItMatters: 'Cree una conversación y ajuste su temperatura, el límite de tokens y el prompt si quiere algo distinto de los valores predeterminados.',
          },
          {
            title: 'Opcional: personalice los prompts',
            whyItMatters: 'Abra el gestor de prompts para elegir un prompt de sistema, escribir el suyo o importar uno desde un archivo Markdown.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones y controles',
        content: [
          '**PAIOS se centra en controlar cómo se le da el prompt a Gemini Nano, ya que el modelo en sí es fijo.** Todo lo que sigue procede del README y del changelog de las versiones hasta la 1.1.8.',
        ],
        items: [
          '**Varios chats.** Cree, renombre y fije conversaciones, cada una con su propio contexto.',
          '**Controles de generación.** Ajuste la temperatura y el máximo de tokens de respuesta; desde la 1.1.7, la temperatura se puede fijar por chat.',
          '**Gestor de prompts.** Desde la 1.1.6 puede elegir, editar y asignar prompts de sistema y de usuario por chat; la 1.1.8 añadió la importación y exportación de prompts en Markdown.',
          '**Instrucciones personalizadas.** Oriente el modelo hacia un personaje o una tarea y, opcionalmente, inserte la fecha, la hora y el idioma de la app.',
          '**Transparencia del prompt.** Puede ver el prompt de sistema real que PAIOS envía al modelo.',
          '**Continuación automática.** Desde la 1.1.7, las respuestas largas pueden continuar automáticamente, una solución alternativa al límite de generación de unos 25 segundos descrito en la hoja de ruta.',
          '**Traducciones.** Colaboradores de la comunidad han añadido traducciones de la interfaz al turco, al alemán y al chino.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos del dispositivo',
        content: [
          '**PAIOS necesita un teléfono con soporte de Google AI Core.** El README indica, en inglés, que "requires a supported device with Google AI Core (e.g., Pixel 9/10 series)". No señala ninguna cifra mínima de RAM ni de almacenamiento, así que el requisito decisivo es la compatibilidad del dispositivo, no sus especificaciones.',
          'Google decide qué teléfonos reciben AI Core y Gemini Nano, y esa lista puede cambiar. Consulte la documentación de dispositivos de Google, o pruebe la instalación desde Play Store en su teléfono, antes de dar por hecho que un dispositivo que no sea Pixel funcionará.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de red',
        content: [
          '**El README afirma que PAIOS se ejecuta "entirely on-device using Google\'s AI Core. No data leaves your phone" (íntegramente en el dispositivo mediante AI Core de Google; ningún dato sale del teléfono).** La ficha de Google Play muestra la declaración de seguridad de datos del desarrollador como "No data collected" y "No data shared" (sin datos recopilados ni compartidos).',
          'El changelog añade detalles que conviene conocer. La versión 1.1.2 introdujo analíticas opcionales para depuración y notificación de fallos, la 1.1.5 añadió la notificación de fallos, y versiones posteriores mencionan Firebase Remote Config para ajustes de la app y prompts descargados desde GitHub. El README y la declaración de Play no mencionan esto, y esta reseña no inspeccionó el tráfico de red de la app.',
          'Si necesita cero contacto con la red, revise en los ajustes de la app la opción de analíticas e inspeccione usted mismo el tráfico. El código fuente es público, así que cualquiera puede auditar estas afirmaciones.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compensaciones: ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Gratuita y de dominio público',
            'Qué significa en el uso real': 'Sin precio, sin cuenta y sin restricciones de licencia sobre el código.',
            'Limitación / advertencia': 'Mayormente un solo mantenedor; el último commit fue en mayo de 2026, así que el ritmo de actualización es incierto.',
          },
          {
            'Ventaja': 'Sin archivos de modelo que gestionar',
            'Qué significa en el uso real': 'Google AI Core suministra Gemini Nano, así que no hay archivos GGUF ni catálogos con los que lidiar.',
            'Limitación / advertencia': 'No se documenta cambiar de modelo ni importar los propios; Gemini Nano es el modelo compatible.',
          },
          {
            'Ventaja': 'Controles de prompt potentes',
            'Qué significa en el uso real': 'Los prompts por chat, la temperatura y los límites de tokens facilitan guiar al modelo pequeño.',
            'Limitación / advertencia': 'El README advierte que Gemini Nano está optimizado para resumir y respuestas inteligentes, y que puede alucinar o perder contexto.',
          },
          {
            'Ventaja': 'Código abierto y auditable',
            'Qué significa en el uso real': 'Cualquiera puede leer el código que respalda las afirmaciones de privacidad.',
            'Limitación / advertencia': 'El README indica que escribir insultos u obscenidades puede bloquear la app si el reintento automático está activado, por los filtros del propio modelo.',
          },
          {
            'Ventaja': 'Continuación automática en respuestas largas',
            'Qué significa en el uso real': 'Las respuestas cortadas por la ventana de generación de unos 25 segundos pueden ampliarse.',
            'Limitación / advertencia': 'El changelog indica que la continuación automática sigue en pruebas: puede continuar respuestas ya terminadas o pasar por alto las cortadas.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PAIOS frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Flexibilidad de modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'PAIOS',
            'Plataformas': 'Android',
            'Precio y licencia': 'Gratis, Unlicense',
            'Flexibilidad de modelos': 'Gemini Nano, vía Google AI Core',
            'Diferencia clave': 'Cliente de código abierto para Gemini Nano con potentes controles de prompt; requiere un teléfono con AI Core',
          },
          {
            'App': '[Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'Android, iOS',
            'Precio y licencia': 'Gratis, Apache 2.0',
            'Flexibilidad de modelos': 'Modelos Gemma de Google en el dispositivo',
            'Diferencia clave': 'App propia de Google para el dispositivo, que ejecuta modelos Gemma',
          },
          {
            'App': '[Layla](/es/power-local-llm/layla-review)',
            'Plataformas': 'Android',
            'Precio y licencia': 'Freemium, código cerrado',
            'Flexibilidad de modelos': 'Modelos GGUF y otros backends en el dispositivo',
            'Diferencia clave': 'Asistente centrado en Android con más variedad de modelos, pero sin código abierto',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'Android, iOS',
            'Precio y licencia': 'Gratis, MIT',
            'Flexibilidad de modelos': 'Modelos GGUF que usted mismo descarga',
            'Diferencia clave': 'Incluye su propio motor de inferencia en lugar de usar AI Core, pero usted gestiona los archivos de modelo',
          },
          {
            'App': '[Off Grid AI](/es/power-local-llm/off-grid-ai-review)',
            'Plataformas': 'Android, iOS, macOS, Windows',
            'Precio y licencia': 'Freemium, MIT',
            'Flexibilidad de modelos': 'Modelos locales y conexiones con Ollama',
            'Diferencia clave': 'Multiplataforma y con muchas funciones, pero una app mucho más grande que un cliente específico de Gemini Nano',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia. Verifique los detalles actuales en la ficha propia de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar PAIOS',
        items: [
          '**Propietarios de un teléfono compatible con AI Core que quieren una interfaz de chat gratuita para Gemini Nano.** Es la forma más directa de hablar con el modelo que Google ya incluye en el dispositivo.',
          '**Usuarios atentos a la privacidad que prefieren el código abierto.** El código es público y tiene una licencia de dominio público, así que las afirmaciones sobre el manejo de datos pueden comprobarse.',
          '**Aficionados que disfrutan guiando un modelo pequeño.** Los prompts por chat, la temperatura y una biblioteca de prompts con importación y exportación en Markdown premian la experimentación.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar PAIOS',
        items: [
          '**Cualquiera cuyo teléfono no sea compatible con AI Core.** La app no puede funcionar sin él (vea Requisitos del dispositivo más arriba).',
          '**Usuarios que quieren elegir o importar modelos.** PAIOS documenta solo Gemini Nano; pruebe en su lugar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Layla](/es/power-local-llm/layla-review).',
          '**Personas que necesitan profundidad o fiabilidad.** Gemini Nano es un modelo pequeño en el dispositivo, y el propio proyecto se define como alfa.',
          '**Usuarios de iPhone, Mac o Windows.** PAIOS es exclusiva de Android; [Off Grid AI](/es/power-local-llm/off-grid-ai-review) cubre más plataformas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis PAIOS?',
            a: 'Sí. La ficha de Google Play no muestra compras dentro de la app, y la hoja de ruta menciona la monetización solo como un punto futuro sin marcar.',
          },
          {
            q: '¿Quién desarrolla PAIOS?',
            a: 'Un desarrollador independiente que publica como Puzzak (GitHub: Puzzaks). El proyecto declara que no está afiliado a Google, ni respaldado ni patrocinado por esta.',
          },
          {
            q: '¿Funciona PAIOS en cualquier teléfono Android?',
            a: 'No. Necesita Google AI Core, que Google activa en dispositivos seleccionados. Vea Requisitos del dispositivo para la redacción del README.',
          },
          {
            q: '¿Puedo usar otros modelos, como Llama o Gemma, en PAIOS?',
            a: 'No, según la documentación. PAIOS está diseñada como cliente de Gemini Nano mediante AI Core; el lema del README añade «and maybe something else!» y la primera entrada de la hoja de ruta menciona también Flan-T5, pero no se documenta ningún selector ni importación de modelos. Para otros modelos, vea la tabla de alternativas más arriba.',
          },
          {
            q: '¿Por qué a veces las respuestas largas se detienen a medias?',
            a: 'La hoja de ruta describe una ventana de generación de unos 25 segundos que puede cortar las respuestas antes de tiempo. La versión 1.1.7 añadió la continuación automática como solución alternativa, y el changelog sigue indicándola como en pruebas.',
          },
          {
            q: '¿Tiene PAIOS un mantenimiento activo?',
            a: 'Las versiones van de la 1.0.0 a la 1.1.8, la más reciente, publicada el 21 de abril de 2026, y el último commit fue en mayo de 2026. La hoja de ruta aún incluye puntos abiertos, como controles de versión de AICore y documentación dentro de la app.',
          },
          {
            q: '¿Puedo instalar PAIOS sin Google Play?',
            a: 'Sí. Cada versión de GitHub incluye un APK, y el código fuente es público si prefiere compilarla usted mismo.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'PAIOS hace una sola cosa concreta bien sobre el papel: convierte el modelo Gemini Nano que ya está dentro de los teléfonos Android compatibles en una app de chat configurable y de código abierto, gratuita y sin cuenta.',
          'Esa misma especificidad es el inconveniente. Se obtiene un solo modelo pequeño documentado, una dependencia total del soporte de Google AI Core y un software que su propio autor define como alfa. Eso la hace adecuada para propietarios de teléfonos recientes de la gama Pixel que disfrutan experimentando, y poco adecuada para quien quiere elegir modelos, amplia compatibilidad de dispositivos o un acabado pulido.',
          'Si su teléfono cumple los requisitos, instálela y compruebe cómo responde Gemini Nano a sus propios prompts. Si no los cumple, o si quiere más modelos, empiece con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Layla](/es/power-local-llm/layla-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[PAIOS en GitHub](https://github.com/Puzzaks/PAIOS) — README, changelog, hoja de ruta, licencia y estadísticas del repositorio.',
          '[Versiones de PAIOS](https://github.com/Puzzaks/PAIOS/releases) — versión 1.1.8 y archivos de la versión.',
          '[PAIOS - Offline AI en Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) — ficha, precio y declaración de seguridad de datos.',
          '[Sitio del desarrollador](https://puzzak.page) — página principal del desarrollador enlazada desde el repositorio.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app propia de Google para el dispositivo, también en Android.',
          '[Reseña de Layla](/es/power-local-llm/layla-review) — un asistente local centrado en Android con más variedad de modelos.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — el cliente de chat GGUF gratuito y de código abierto.',
          '[Reseña de Off Grid AI](/es/power-local-llm/off-grid-ai-review) — una app de IA local multiplataforma.',
          '[El directorio completo de software LLM local](/es/power-local-llm/local-llm-software-directory) — un directorio más amplio de herramientas LLM locales en todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/paios-review-hero-pt.webp',
    title: 'Análise do PAIOS: chat offline com Gemini Nano no Android',
    seoTitle: 'Análise do PAIOS: chat offline com Gemini Nano',
    intro:
      'O PAIOS (Personal AI Operating System) é um aplicativo Android gratuito e de código aberto que dá ao modelo Gemini Nano, executado no dispositivo pelo Google, uma interface de chat com várias conversas, prompts personalizados e controle de temperatura. Esta análise explica o que ele faz, em quais celulares funciona e onde fica a desejar, com base no README, no changelog e na ficha do projeto no Google Play.',
    metaDescription:
      'Análise do PAIOS: aplicativo de chat Android gratuito e de código aberto (Unlicense) para o Gemini Nano no dispositivo. Recursos, aparelhos compatíveis, privacidade, limites e comparação com Layla e PocketPal AI.',
    twitterDescription:
      'Análise do PAIOS: um cliente Android para o Gemini Nano via Google AI Core. Quais celulares funcionam, o que o changelog diz sobre uso de rede e onde ele fica a desejar.',
    audience:
      'Usuários de Android com Pixel 9 ou mais recente (ou outro celular compatível com o AICore) que querem um aplicativo de chat gratuito, de código aberto e no dispositivo para o Gemini Nano — aborda recursos, compatibilidade de aparelhos, privacidade, limites e como o PAIOS se compara a outros aplicativos de IA local para Android.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PAIOS review',
    targetKeywords: [
      'paios review',
      'paios android app',
      'gemini nano android app',
      'run gemini nano offline',
      'google ai core chat app',
      'puzzak paios',
      'open source gemini nano client',
      'offline ai chat android pixel',
    ],
    current_hardware_mentioned: ['Pixel 9', 'Pixel 10'],
    leadAnswerBlock:
      '**O PAIOS é uma interface de chat para o modelo Gemini Nano do Google que, segundo o README, roda inteiramente em um celular Android por meio do Google AI Core, com o código liberado em domínio público sob a [Unlicense](https://github.com/Puzzaks/PAIOS).** Ele é um cliente, não uma biblioteca de modelos: só funciona em celulares com suporte ao AI Core (o README cita as linhas Pixel 9 e 10 como exemplos) e, segundo a documentação, somente com o Gemini Nano. O projeto se declara alfa, e esta análise (versão 1.1.8) se baseia na documentação pública, não em testes práticos no aparelho.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o PAIOS em um celular Android?',
        answer:
          'Sim, se você tem um celular com suporte ao Google AI Core e quer uma forma gratuita e de código aberto de conversar offline com o Gemini Nano, com prompts por conversa e controle de temperatura. Não vale a pena se você quer escolher entre vários modelos ou importar os seus: o PAIOS documenta suporte apenas ao Gemini Nano. Layla, PocketPal AI e Off Grid AI oferecem mais opções de modelos.',
        bullets: [
          'Gratuito no Google Play e como APK no GitHub; código aberto sob a Unlicense.',
          'Executa o Gemini Nano no dispositivo via Google AI Core; não há importação de modelos nem catálogo documentados.',
          'Exige um celular com suporte ao AI Core, segundo o README (linhas Pixel 9/10 como exemplos).',
          'Várias conversas, instruções personalizadas, controles de temperatura e de tokens e uma biblioteca de prompts editável.',
          'Software alfa, segundo o próprio autor, sobre um modelo em prévia para desenvolvedores: espere arestas.',
        ],
        updatedDate: '2026-10-02',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Como obter o PAIOS', anchor: 'get-it' },
      { label: 'PAIOS em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o PAIOS', anchor: 'what-is-paios' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Recursos e controles', anchor: 'features' },
      { label: 'Requisitos do aparelho', anchor: 'requirements' },
      { label: 'Privacidade e uso de rede', anchor: 'privacy' },
      { label: 'Prós e contras: benefícios vs. limitações', anchor: 'tradeoffs' },
      { label: 'PAIOS vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o PAIOS', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o PAIOS', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O PAIOS, criado pelo desenvolvedor Puzzak, permite conversar com o Gemini Nano totalmente no dispositivo por meio do Google AI Core, com várias conversas, prompts personalizados e controle de temperatura; é gratuito e o código-fonte é público.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma janela de chat para o pequeno modelo de IA que o Google já embutiu em celulares Android compatíveis: sem conta, sem modelo na nuvem e sem arquivos de modelo para gerenciar, mas também sem escolha de modelo.',
          },
        ],
        items: [
          'Versão analisada: 1.1.8, a [versão mais recente no GitHub](https://github.com/Puzzaks/PAIOS/releases).',
          'Preço e licença: gratuito, sem compras no aplicativo listadas no [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios); o código é de domínio público sob a Unlicense.',
          'Modelo: Gemini Nano, executado pelo Google AI Core no celular; a documentação não descreve nenhuma forma de carregar outros modelos.',
          'Plataforma: somente Android, e apenas em celulares com suporte ao AI Core (veja Requisitos do aparelho).',
          'Maturidade: o desenvolvedor o classifica como alfa, e o último commit do projeto foi em maio de 2026.',
        ],
      },
      getItPAIOS: {
        id: 'get-it',
        title: 'Como obter o PAIOS',
        content: [
          '**O PAIOS está disponível no Google Play e como APK direto no GitHub.** Os dois são gratuitos. Use a ficha do Play para receber atualizações automáticas, ou o APK do GitHub se preferir instalar fora da Play Store.',
          'Esta análise complementa o [diretório de software de LLM local](/pt/power-local-llm/local-llm-software-directory) da PromptQuorum, que lista o PAIOS ao lado de outras ferramentas de IA local e no dispositivo.',
        ],
        columns: ['Canal', 'Como obter'],
        rows: [
          {
            'Canal': 'Google Play',
            'Como obter': '[PAIOS - Offline AI no Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)',
          },
          {
            'Canal': 'APK no GitHub',
            'Como obter': '[Versões do PAIOS no GitHub](https://github.com/Puzzaks/PAIOS/releases)',
          },
          {
            'Canal': 'Código-fonte',
            'Como obter': '[Puzzaks/PAIOS](https://github.com/Puzzaks/PAIOS)',
          },
        ],
        note: 'Desde a versão 1.1.2 o aplicativo usa um novo nome de pacote, e o desenvolvedor diz que versões antigas deixaram de funcionar por causa de um problema na ficha da Play Store. Instale uma versão atual, não um APK antigo.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PAIOS em resumo',
        columns: ['Atributo', 'PAIOS'],
        rows: [
          { 'Atributo': 'Plataforma', 'PAIOS': 'Somente Android' },
          { 'Atributo': 'Preço', 'PAIOS': 'Gratuito' },
          { 'Atributo': 'Licença', 'PAIOS': 'Unlicense (domínio público)' },
          { 'Atributo': 'Funciona totalmente offline', 'PAIOS': 'O chat roda no aparelho; veja Privacidade (uso de rede)' },
          { 'Atributo': 'Importar seus próprios modelos', 'PAIOS': 'Não informado; o Gemini Nano é o modelo documentado' },
          { 'Atributo': 'Download de modelos no app', 'PAIOS': 'Não informado' },
          { 'Atributo': 'Entrada de imagem', 'PAIOS': 'Não informado; interface de texto' },
          { 'Atributo': 'Entrada / saída de voz', 'PAIOS': 'Não informado' },
        ],
        note: 'Os atributos seguem a comparação de chat para celular usada no Diretório de Software de LLM Local. "Não informado" significa que o README, o roadmap e o changelog não mencionam o recurso, não que ele foi testado e considerado ausente.',
      },
      whatIsPAIOS: {
        id: 'what-is-paios',
        title: 'O que é o PAIOS',
        content: [
          '**O PAIOS é uma interface para o Gemini Nano, não um motor de inferência.** Quem executa o modelo é o Google AI Core, o serviço do sistema Android que hospeda o Gemini Nano. O PAIOS acrescenta a interface de chat em volta dele: conversas separadas, prompts e configurações de geração.',
          'Ele é criado principalmente por um desenvolvedor, Puzzak, com contribuições da comunidade em traduções, escrito em Dart e publicado como projeto independente, sem vínculo com o Google. O repositório foi criado em novembro de 2025 e tem cerca de 170 estrelas no GitHub.',
          'Esta análise se baseia no README, no changelog, no roadmap, nas versões do GitHub e na ficha do Google Play. Ela não inclui testes práticos em um aparelho, por isso velocidade e qualidade das respostas não são avaliadas aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**A configuração é uma instalação comum de aplicativo em um celular compatível, sem conta.** O README não descreve em detalhes o fluxo da primeira execução, então os passos abaixo seguem os requisitos documentados.',
        ],
        numberedItems: [
          {
            title: 'Verifique se o seu celular tem suporte ao AI Core',
            whyItMatters: 'O PAIOS só funciona onde o Google AI Core está disponível; confirme que o seu aparelho é compatível antes de instalar (veja Requisitos do aparelho).',
          },
          {
            title: 'Instale o PAIOS',
            whyItMatters: 'Baixe-o no [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) ou na [página de versões do GitHub](https://github.com/Puzzaks/PAIOS/releases).',
          },
          {
            title: 'Inicie uma conversa',
            whyItMatters: 'Crie uma conversa e, se quiser algo diferente do padrão, defina a temperatura, o limite de tokens e o prompt dela.',
          },
          {
            title: 'Opcional: personalize os prompts',
            whyItMatters: 'Abra o gerenciador de prompts para escolher um prompt de sistema, escrever o seu ou importar um a partir de um arquivo Markdown.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos e controles',
        content: [
          '**O PAIOS se concentra em controlar como o Gemini Nano recebe os prompts, já que o modelo em si é fixo.** Tudo abaixo vem do README e do changelog das versões até a 1.1.8.',
        ],
        items: [
          '**Várias conversas.** Crie, renomeie e fixe conversas, cada uma com o próprio contexto.',
          '**Controles de geração.** Ajuste a temperatura e o máximo de tokens de resposta; desde a 1.1.7, a temperatura pode ser definida por conversa.',
          '**Gerenciador de prompts.** Desde a 1.1.6 é possível escolher, editar e atribuir prompts de sistema e de usuário por conversa; a 1.1.8 adicionou importação e exportação de prompts em Markdown.',
          '**Instruções personalizadas.** Direcione o modelo para uma persona ou tarefa e, opcionalmente, inclua a data, a hora e o idioma do aplicativo.',
          '**Transparência dos prompts.** Você pode ver o prompt de sistema real que o PAIOS envia ao modelo.',
          '**Continuação automática.** Desde a 1.1.7, respostas longas podem ser continuadas automaticamente, uma solução alternativa para o limite de geração de cerca de 25 segundos descrito no roadmap.',
          '**Traduções.** Colaboradores da comunidade adicionaram traduções da interface para turco, alemão e chinês.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos do aparelho',
        content: [
          '**O PAIOS exige um celular com suporte ao Google AI Core.** O README afirma que ele "requer um dispositivo compatível com o Google AI Core (por exemplo, linha Pixel 9/10)". Não há valor mínimo de RAM ou armazenamento, então o que decide é a compatibilidade do aparelho, não as especificações.',
          'O Google decide quais celulares recebem o AI Core e o Gemini Nano, e essa lista pode mudar. Consulte a documentação de aparelhos do próprio Google, ou tente instalar pela Play Store no seu celular, antes de presumir que um aparelho que não seja Pixel vai funcionar.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso de rede',
        content: [
          '**O README diz que o PAIOS roda "inteiramente no dispositivo usando o AI Core do Google. Nenhum dado sai do seu celular."** A ficha do Google Play mostra a declaração de segurança de dados do desenvolvedor como "Nenhum dado coletado" e "Nenhum dado compartilhado".',
          'O changelog traz detalhes que vale conhecer. A versão 1.1.2 introduziu análises opcionais para depuração e relatório de falhas, a 1.1.5 adicionou relatório de falhas, e versões posteriores mencionam o Firebase Remote Config para configurações do aplicativo e prompts baixados do GitHub. O README e a declaração do Play não mencionam isso, e esta análise não inspecionou o tráfego de rede do aplicativo.',
          'Se você precisa de zero contato com a rede, verifique nas configurações do aplicativo a opção de análises e inspecione o tráfego por conta própria. O código-fonte é público, então qualquer pessoa pode auditar essas afirmações.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Gratuito e de domínio público',
            'O que significa no uso real': 'Sem preço, sem conta e sem restrições de licença sobre o código.',
            'Limitação / ressalva': 'Em geral um único mantenedor; o último commit foi em maio de 2026, então o ritmo de atualizações é incerto.',
          },
          {
            'Benefício': 'Sem arquivos de modelo para gerenciar',
            'O que significa no uso real': 'O Google AI Core fornece o Gemini Nano, então não há arquivos GGUF nem catálogos para lidar.',
            'Limitação / ressalva': 'Não há troca nem importação de modelos documentada; o Gemini Nano é o modelo suportado.',
          },
          {
            'Benefício': 'Bons controles de prompt',
            'O que significa no uso real': 'Prompts por conversa, temperatura e limites de tokens facilitam direcionar o modelo pequeno.',
            'Limitação / ressalva': 'O README avisa que o Gemini Nano é otimizado para resumo e resposta inteligente, e pode alucinar ou perder contexto.',
          },
          {
            'Benefício': 'Código aberto e auditável',
            'O que significa no uso real': 'Qualquer pessoa pode ler o código por trás das afirmações de privacidade.',
            'Limitação / ressalva': 'O README diz que digitar palavrões ou ofensas pode travar o aplicativo com a nova tentativa automática ativa, por causa dos filtros do próprio modelo.',
          },
          {
            'Benefício': 'Continuação automática de respostas longas',
            'O que significa no uso real': 'Respostas cortadas pela janela de geração de cerca de 25 segundos podem ser estendidas.',
            'Limitação / ressalva': 'O changelog lista a continuação automática como ainda em teste: ela pode continuar respostas já concluídas ou deixar de continuar as cortadas.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PAIOS vs. alternativas',
        columns: ['Aplicativo', 'Plataformas', 'Preço e licença', 'Flexibilidade de modelos', 'Diferença-chave'],
        rows: [
          {
            'Aplicativo': 'PAIOS',
            'Plataformas': 'Android',
            'Preço e licença': 'Gratuito, Unlicense',
            'Flexibilidade de modelos': 'Gemini Nano, via Google AI Core',
            'Diferença-chave': 'Cliente de código aberto para o Gemini Nano com bons controles de prompt; exige um celular com AI Core',
          },
          {
            'Aplicativo': '[Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review)',
            'Plataformas': 'Android, iOS',
            'Preço e licença': 'Gratuito, Apache 2.0',
            'Flexibilidade de modelos': 'Modelos Gemma do Google no dispositivo',
            'Diferença-chave': 'Aplicativo do próprio Google para uso no dispositivo, com modelos Gemma',
          },
          {
            'Aplicativo': '[Layla](/pt/power-local-llm/layla-review)',
            'Plataformas': 'Android',
            'Preço e licença': 'Freemium, código fechado',
            'Flexibilidade de modelos': 'Modelos GGUF e outros backends no dispositivo',
            'Diferença-chave': 'Assistente voltado ao Android com mais opções de modelos, mas sem código aberto',
          },
          {
            'Aplicativo': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'Android, iOS',
            'Preço e licença': 'Gratuito, MIT',
            'Flexibilidade de modelos': 'Modelos GGUF que você mesmo baixa',
            'Diferença-chave': 'Traz o próprio motor de inferência em vez de usar o AI Core, mas você gerencia os arquivos de modelo',
          },
          {
            'Aplicativo': '[Off Grid AI](/pt/power-local-llm/off-grid-ai-review)',
            'Plataformas': 'Android, iOS, macOS, Windows',
            'Preço e licença': 'Freemium, MIT',
            'Flexibilidade de modelos': 'Modelos locais e conexões com o Ollama',
            'Diferença-chave': 'Multiplataforma e rico em recursos, mas um aplicativo bem maior que um cliente enxuto do Gemini Nano',
          },
        ],
        note: 'Os detalhes de plataforma, preço e recursos de aplicativos de terceiros mudam com frequência. Verifique os detalhes atuais na ficha de cada aplicativo antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o PAIOS',
        items: [
          '**Donos de um celular com suporte ao AI Core que querem uma interface de chat gratuita para o Gemini Nano.** É a forma mais direta de conversar com o modelo que o Google já entrega no aparelho.',
          '**Usuários atentos à privacidade que preferem código aberto.** O código é público e está sob licença de domínio público, então as afirmações sobre tratamento de dados podem ser verificadas.',
          '**Entusiastas que gostam de direcionar um modelo pequeno.** Prompts por conversa, temperatura e uma biblioteca de prompts com importação e exportação em Markdown recompensam a experimentação.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o PAIOS',
        items: [
          '**Quem tem um celular sem suporte ao AI Core.** O aplicativo não funciona sem ele (veja Requisitos do aparelho acima).',
          '**Usuários que querem escolher ou importar modelos.** O PAIOS documenta somente o Gemini Nano; experimente o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Layla](/pt/power-local-llm/layla-review).',
          '**Pessoas que precisam de profundidade ou confiabilidade.** O Gemini Nano é um modelo pequeno no dispositivo, e o próprio projeto se declara alfa.',
          '**Usuários de iPhone, Mac ou Windows.** O PAIOS é exclusivo para Android; o [Off Grid AI](/pt/power-local-llm/off-grid-ai-review) cobre mais plataformas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O PAIOS é gratuito?',
            a: 'Sim. A ficha do Google Play não mostra compras no aplicativo, e o roadmap lista a monetização apenas como um item futuro, ainda não marcado.',
          },
          {
            q: 'Quem faz o PAIOS?',
            a: 'Um desenvolvedor independente que publica como Puzzak (GitHub: Puzzaks). O projeto afirma não ter afiliação, aval ou patrocínio do Google.',
          },
          {
            q: 'O PAIOS funciona em qualquer celular Android?',
            a: 'Não. Ele precisa do Google AI Core, que o Google ativa em aparelhos selecionados. Veja Requisitos do aparelho para o texto do README.',
          },
          {
            q: 'Posso usar outros modelos, como Llama ou Gemma, no PAIOS?',
            a: 'Não, até onde a documentação mostra. O PAIOS foi feito como cliente do Gemini Nano via AI Core; o slogan do README acrescenta "and maybe something else!" e a primeira entrada do roadmap também cita o Flan-T5, mas não há seletor nem importação de modelos documentados. Para outros modelos, veja a tabela de alternativas acima.',
          },
          {
            q: 'Por que respostas longas às vezes param no meio?',
            a: 'O roadmap descreve uma janela de geração de cerca de 25 segundos que pode encerrar respostas antes da hora. A versão 1.1.7 adicionou a continuação automática como solução alternativa, e o changelog ainda a lista como em teste.',
          },
          {
            q: 'O PAIOS tem manutenção ativa?',
            a: 'As versões vão da 1.0.0 à 1.1.8, a mais recente, publicada em 21 de abril de 2026, e o último commit foi em maio de 2026. O roadmap ainda lista itens em aberto, como controles de versão do AICore e documentação dentro do aplicativo.',
          },
          {
            q: 'Posso instalar o PAIOS sem o Google Play?',
            a: 'Sim. Cada versão no GitHub inclui um APK, e o código-fonte é público caso você prefira compilá-lo por conta própria.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'No papel, o PAIOS faz bem uma coisa estreita: transforma o modelo Gemini Nano que já está dentro de celulares Android compatíveis em um aplicativo de chat configurável e de código aberto, gratuito e sem conta.',
          'Essa mesma especificidade é o porém. Você tem um único modelo pequeno documentado, uma dependência rígida do suporte ao Google AI Core e um software que o próprio autor chama de alfa. Isso o torna adequado para donos de celulares recentes da classe Pixel que gostam de experimentar, e inadequado para quem quer escolha de modelos, ampla compatibilidade de aparelhos ou acabamento.',
          'Se o seu celular se qualifica, instale e veja como o Gemini Nano se comporta com os seus próprios prompts. Se não, ou se você quer mais modelos, comece pelo [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou pelo [Layla](/pt/power-local-llm/layla-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[PAIOS no GitHub](https://github.com/Puzzaks/PAIOS) — README, changelog, roadmap, licença e estatísticas do repositório.',
          '[Versões do PAIOS](https://github.com/Puzzaks/PAIOS/releases) — versão 1.1.8 e arquivos da versão.',
          '[PAIOS - Offline AI no Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) — ficha, preço e declaração de segurança de dados.',
          '[Site do desenvolvedor](https://puzzak.page) — página inicial do desenvolvedor, indicada no repositório.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o aplicativo do próprio Google para uso no dispositivo, também no Android.',
          '[Análise do Layla](/pt/power-local-llm/layla-review) — um assistente local voltado ao Android, com mais opções de modelos.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — o cliente de chat GGUF gratuito e de código aberto.',
          '[Análise do Off Grid AI](/pt/power-local-llm/off-grid-ai-review) — um aplicativo de IA local multiplataforma.',
          '[O diretório completo de software de LLM local](/pt/power-local-llm/local-llm-software-directory) — um diretório mais amplo de ferramentas de LLM local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/paios-review-hero-ar.webp',
    title: 'مراجعة PAIOS: دردشة Gemini Nano دون إنترنت على أندرويد',
    seoTitle: 'مراجعة PAIOS: دردشة Gemini Nano دون إنترنت لأندرويد',
    intro:
      'PAIOS (اختصار Personal AI Operating System) تطبيق أندرويد مجاني ومفتوح المصدر يمنح نموذج Gemini Nano من جوجل، الذي يعمل على الجهاز نفسه، واجهة دردشة تضم محادثات متعددة وتعليمات مخصصة وضبطًا لدرجة الحرارة (temperature). تتناول هذه المراجعة ما يفعله التطبيق، والهواتف التي يعمل عليها، ومواضع قصوره، استنادًا إلى ملف README الخاص بالمشروع وسجل التغييرات وصفحة التطبيق على Google Play.',
    metaDescription:
      'مراجعة PAIOS: تطبيق دردشة أندرويد مجاني ومفتوح المصدر (Unlicense) لنموذج Gemini Nano من جوجل على الجهاز. الميزات والأجهزة المدعومة وتفاصيل الخصوصية والقيود والمقارنة مع Layla وPocketPal AI.',
    twitterDescription:
      'مراجعة PAIOS: عميل أندرويد لنموذج Gemini Nano عبر Google AI Core. أي الهواتف تعمل، وماذا يقول سجل التغييرات عن استخدام الشبكة، ومواضع القصور.',
    audience:
      'مستخدمو أندرويد الذين يملكون Pixel 9 أو أحدث (أو هاتفًا آخر مدعومًا من AICore) ويريدون تطبيق دردشة مجانيًا ومفتوح المصدر يعمل على الجهاز مع Gemini Nano — يغطي الميزات ودعم الأجهزة والخصوصية والقيود ومقارنة PAIOS بتطبيقات الذكاء الاصطناعي المحلي الأخرى على أندرويد.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PAIOS review',
    targetKeywords: [
      'paios review',
      'paios android app',
      'gemini nano android app',
      'run gemini nano offline',
      'google ai core chat app',
      'puzzak paios',
      'open source gemini nano client',
      'offline ai chat android pixel',
    ],
    current_hardware_mentioned: ['Pixel 9', 'Pixel 10'],
    leadAnswerBlock:
      '**PAIOS واجهة دردشة لنموذج Gemini Nano من جوجل تعمل، بحسب ملف README، بالكامل على هاتف أندرويد عبر Google AI Core، وقد أُتيحت شيفرتها للملكية العامة بموجب ترخيص [Unlicense](https://github.com/Puzzaks/PAIOS).** هي عميل وليست مكتبة نماذج: لا تعمل إلا على الهواتف التي يدعمها AI Core (يذكر ملف README سلسلتي Pixel 9 وPixel 10 مثالين) ومع Gemini Nano وحده بحسب وثائقه. يصف المشروع نفسه بأنه في مرحلة ألفا، وتستند هذه المراجعة (للإصدار 1.1.8) إلى وثائقه العلنية، لا إلى اختبار عملي على جهاز.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق PAIOS التثبيت على هاتف أندرويد؟',
        answer:
          'نعم، إذا كنت تملك هاتفًا يدعم Google AI Core وتريد طريقة مجانية ومفتوحة المصدر للدردشة مع Gemini Nano دون إنترنت، مع تعليمات مستقلة لكل محادثة وتحكم في درجة الحرارة. تجاوزه إذا كنت تريد الاختيار بين نماذج عديدة أو استيراد نماذجك الخاصة: توثّق وثائق PAIOS دعم Gemini Nano فقط. أما Layla وPocketPal AI وOff Grid AI فتوفر خيارات نماذج أوسع.',
        bullets: [
          'مجاني على Google Play وكملف APK من GitHub؛ ومفتوح المصدر بموجب ترخيص Unlicense.',
          'يشغّل Gemini Nano على الجهاز عبر Google AI Core؛ ولا يوثَّق استيراد نماذج ولا كتالوج نماذج.',
          'يتطلب هاتفًا يدعم AI Core وفق ملف README (سلسلتا Pixel 9 وPixel 10 مثالان).',
          'محادثات متعددة، وتعليمات مخصصة، وضبط لدرجة الحرارة وعدد الرموز (tokens)، ومكتبة تعليمات قابلة للتحرير.',
          'برنامج يصف نفسه بأنه في مرحلة ألفا ويعتمد على نموذج في مرحلة المعاينة للمطورين: توقّع بعض الخشونة.',
        ],
        updatedDate: '2026-10-02',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'كيفية الحصول على PAIOS', anchor: 'get-it' },
      { label: 'PAIOS في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو PAIOS', anchor: 'what-is-paios' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات وعناصر التحكم', anchor: 'features' },
      { label: 'متطلبات الجهاز', anchor: 'requirements' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'PAIOS مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم PAIOS', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم PAIOS', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الخلاصة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يتيح PAIOS، من تطوير المطوّر Puzzak، الدردشة مع Gemini Nano بالكامل على الجهاز عبر Google AI Core، مع محادثات متعددة وتعليمات مخصصة وضبط لدرجة الحرارة؛ وهو مجاني ومصدره متاح للعموم.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله نافذة دردشة للنموذج الصغير الذي بنته جوجل أصلًا في هواتف أندرويد المدعومة: دون حساب، ودون نموذج سحابي، ودون ملفات نماذج تُدار يدويًا، لكن أيضًا دون حرية اختيار النموذج.',
          },
        ],
        items: [
          'الإصدار المراجَع: 1.1.8، وهو أحدث [إصدار على GitHub](https://github.com/Puzzaks/PAIOS/releases).',
          'السعر والترخيص: مجاني، ولا مشتريات داخل التطبيق مدرجة على [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)؛ والشيفرة ملكية عامة بموجب Unlicense.',
          'النموذج: Gemini Nano، يشغّله Google AI Core على الهاتف؛ ولا تصف الوثائق أي طريقة لتحميل نماذج أخرى.',
          'المنصة: أندرويد فقط، وعلى الهواتف المدعومة من AI Core فقط (راجع متطلبات الجهاز).',
          'النضج: يصنّفه مطوّره في مرحلة ألفا، وكان آخر إيداع (commit) للمشروع في مايو 2026.',
        ],
      },
      getItPAIOS: {
        id: 'get-it',
        title: 'كيفية الحصول على PAIOS',
        content: [
          '**يتوفر PAIOS على Google Play وكملف APK مباشر على GitHub.** كلاهما مجاني. استخدم صفحة Play للحصول على التحديثات التلقائية، أو ملف APK من GitHub إذا كنت تفضّل التثبيت من خارج متجر Play.',
          'تكمّل هذه المراجعة [دليل برمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) من PromptQuorum، الذي يدرج PAIOS إلى جانب أدوات ذكاء اصطناعي أخرى تعمل على الجهاز وأدوات محلية.',
        ],
        columns: ['القناة', 'كيفية الحصول عليه'],
        rows: [
          {
            'القناة': 'Google Play',
            'كيفية الحصول عليه': '[PAIOS - Offline AI على Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios)',
          },
          {
            'القناة': 'ملف APK من GitHub',
            'كيفية الحصول عليه': '[إصدارات PAIOS على GitHub](https://github.com/Puzzaks/PAIOS/releases)',
          },
          {
            'القناة': 'الشيفرة المصدرية',
            'كيفية الحصول عليه': '[Puzzaks/PAIOS](https://github.com/Puzzaks/PAIOS)',
          },
        ],
        note: 'يستخدم التطبيق منذ الإصدار 1.1.2 اسم حزمة جديدًا، ويقول المطوّر إن الإصدارات الأقدم لم تعد تعمل بسبب مشكلة في صفحة التطبيق على متجر Play. ثبّت بناءً حديثًا بدلًا من ملف APK قديم.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PAIOS في لمحة',
        columns: ['الخاصية', 'PAIOS'],
        rows: [
          { 'الخاصية': 'المنصة', 'PAIOS': 'أندرويد فقط' },
          { 'الخاصية': 'السعر', 'PAIOS': 'مجاني' },
          { 'الخاصية': 'الترخيص', 'PAIOS': 'Unlicense (ملكية عامة)' },
          { 'الخاصية': 'يعمل دون إنترنت بالكامل', 'PAIOS': 'الدردشة على الجهاز؛ راجع الخصوصية لاستخدام الشبكة' },
          { 'الخاصية': 'استيراد نماذجك الخاصة', 'PAIOS': 'غير مذكور؛ النموذج الموثّق هو Gemini Nano' },
          { 'الخاصية': 'تنزيل النماذج داخل التطبيق', 'PAIOS': 'غير مذكور' },
          { 'الخاصية': 'إدخال الصور', 'PAIOS': 'غير مذكور؛ واجهة نصية' },
          { 'الخاصية': 'إدخال/إخراج صوتي', 'PAIOS': 'غير مذكور' },
        ],
        note: 'تتبع الخصائص مقارنة تطبيقات الدردشة على الجوال المعتمدة في دليل برمجيات LLM المحلية. تعني «غير مذكور» أن ملف README وخارطة الطريق وسجل التغييرات لا تذكر الميزة، لا أنها اختُبرت وتبيّن غيابها.',
      },
      whatIsPAIOS: {
        id: 'what-is-paios',
        title: 'ما هو PAIOS',
        content: [
          '**PAIOS واجهة أمامية لنموذج Gemini Nano وليس محرك استدلال.** يشغّل Google AI Core، وهو خدمة نظام أندرويد التي تستضيف Gemini Nano، النموذج. ويضيف PAIOS واجهة الدردشة المحيطة به: محادثات منفصلة وتعليمات وإعدادات توليد.',
          'بناه في الأساس مطوّر واحد هو Puzzak بلغة Dart، مع مساهمات مجتمعية في الترجمة، وينشره كمشروع مستقل لا تربطه علاقة بجوجل. أُنشئ المستودع في نوفمبر 2025 وله نحو 170 نجمة على GitHub.',
          'تعتمد هذه المراجعة على ملف README وسجل التغييرات وخارطة الطريق وإصدارات GitHub وصفحة التطبيق على Google Play. ولا تتضمن اختبارًا عمليًا على جهاز، لذا لا تُقيَّم هنا السرعة ولا جودة الإجابات.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**الإعداد عبارة عن تثبيت عادي لتطبيق على هاتف مدعوم، دون حساب.** لا يصف ملف README تدفق التشغيل الأول بالتفصيل، لذا تتبع الخطوات أدناه المتطلبات الموثقة.',
        ],
        numberedItems: [
          {
            title: 'تحقق من أن هاتفك يدعم AI Core',
            whyItMatters: 'لا يعمل PAIOS إلا حيث يتوفر Google AI Core؛ تأكد من أن جهازك مدعوم قبل التثبيت (راجع متطلبات الجهاز).',
          },
          {
            title: 'ثبّت PAIOS',
            whyItMatters: 'احصل عليه من [Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) أو من [صفحة إصدارات GitHub](https://github.com/Puzzaks/PAIOS/releases).',
          },
          {
            title: 'ابدأ محادثة',
            whyItMatters: 'أنشئ محادثة، ثم اضبط درجة حرارتها وحد الرموز والتعليمات إذا أردت شيئًا غير الإعدادات الافتراضية.',
          },
          {
            title: 'اختياري: خصّص التعليمات',
            whyItMatters: 'افتح مدير التعليمات لاختيار تعليمات نظام، أو اكتب تعليماتك الخاصة، أو استورد واحدة من ملف Markdown.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات وعناصر التحكم',
        content: [
          '**يركّز PAIOS على التحكم في طريقة توجيه Gemini Nano بالتعليمات، لأن النموذج نفسه ثابت.** كل ما يلي مأخوذ من ملف README وسجل التغييرات للإصدارات حتى 1.1.8.',
        ],
        items: [
          '**محادثات متعددة.** أنشئ المحادثات وأعد تسميتها وثبّتها، ولكل منها سياقها الخاص.',
          '**عناصر التحكم في التوليد.** اضبط درجة الحرارة والحد الأقصى لرموز الرد؛ ومنذ الإصدار 1.1.7 يمكن ضبط درجة الحرارة لكل محادثة على حدة.',
          '**مدير التعليمات.** منذ الإصدار 1.1.6 يمكنك اختيار تعليمات النظام والمستخدم وتحريرها وإسنادها لكل محادثة؛ وأضاف 1.1.8 استيراد التعليمات وتصديرها بصيغة Markdown.',
          '**تعليمات مخصصة.** وجّه النموذج نحو شخصية أو مهمة، مع إمكانية إدراج التاريخ والوقت الحاليين ولغة التطبيق.',
          '**شفافية التعليمات.** يمكنك عرض تعليمات النظام الفعلية التي يرسلها PAIOS إلى النموذج.',
          '**المتابعة التلقائية.** منذ الإصدار 1.1.7 يمكن متابعة الإجابات الطويلة تلقائيًا، وهي حل بديل لحد التوليد البالغ نحو 25 ثانية الموصوف في خارطة الطريق.',
          '**الترجمات.** أضاف مساهمون من المجتمع ترجمات للواجهة إلى التركية والألمانية والصينية.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'متطلبات الجهاز',
        content: [
          '**يتطلب PAIOS هاتفًا يدعم Google AI Core.** ينص ملف README على أنه «يتطلب جهازًا مدعومًا مزوّدًا بـ Google AI Core (مثل سلسلة Pixel 9/10)». ولا يذكر حدًا أدنى لسعة الذاكرة العشوائية أو التخزين، فالمعيار الفاصل هو دعم الجهاز لا مواصفاته.',
          'تقرر جوجل أي الهواتف تحصل على AI Core وGemini Nano، وقد تتغير هذه القائمة. راجع وثائق الأجهزة لدى جوجل، أو جرّب التثبيت من متجر Play على هاتفك، قبل افتراض أن جهازًا غير Pixel سيعمل.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**يقول ملف README إن PAIOS يعمل «بالكامل على الجهاز باستخدام AI Core من جوجل. لا تغادر أي بيانات هاتفك».** وتُظهر صفحة Google Play إقرار سلامة البيانات الذي قدّمه المطوّر: «لا تُجمع أي بيانات» و«لا تُشارك أي بيانات».',
          'يضيف سجل التغييرات تفاصيل تستحق الانتباه. أدخل الإصدار 1.1.2 تحليلات اختيارية لأغراض تصحيح الأخطاء والإبلاغ عن الأعطال، وأضاف الإصدار 1.1.5 الإبلاغ عن الأعطال، وتذكر الإصدارات اللاحقة Firebase Remote Config لإعدادات التطبيق وتعليمات تُنزَّل من GitHub. ولا يذكر ملف README ولا إقرار Play هذه الأمور، ولم تفحص هذه المراجعة حركة الشبكة الصادرة من التطبيق.',
          'إذا كنت تحتاج إلى انعدام أي اتصال بالشبكة، فتحقق من خيار التحليلات في إعدادات التطبيق وافحص حركة الشبكة بنفسك. المصدر متاح للعموم، فيمكن لأي شخص تدقيق هذه الادعاءات.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الميزة': 'مجاني وملكية عامة',
            'ما تعنيه في الاستخدام الفعلي': 'دون سعر ودون حساب ودون قيود ترخيص على الشيفرة.',
            'القيد / الملاحظة': 'مشرف واحد في الغالب؛ وكان آخر إيداع في مايو 2026، لذا وتيرة التحديث غير مؤكدة.',
          },
          {
            'الميزة': 'دون ملفات نماذج لإدارتها',
            'ما تعنيه في الاستخدام الفعلي': 'يوفّر Google AI Core نموذج Gemini Nano، فلا ملفات GGUF ولا كتالوجات للتعامل معها.',
            'القيد / الملاحظة': 'لا يوثَّق تبديل النماذج ولا استيرادها؛ Gemini Nano هو النموذج المدعوم.',
          },
          {
            'الميزة': 'تحكم قوي في التعليمات',
            'ما تعنيه في الاستخدام الفعلي': 'تعليمات ودرجة حرارة وحدود رموز لكل محادثة تجعل توجيه النموذج الصغير أسهل.',
            'القيد / الملاحظة': 'يحذّر ملف README من أن Gemini Nano مضبوط للتلخيص والردود الذكية، وقد يهلوس أو يفقد السياق.',
          },
          {
            'الميزة': 'مفتوح المصدر وقابل للتدقيق',
            'ما تعنيه في الاستخدام الفعلي': 'يستطيع أي شخص قراءة الشيفرة التي تقف وراء ادعاءات الخصوصية.',
            'القيد / الملاحظة': 'يذكر ملف README أن كتابة شتائم أو ألفاظ مسيئة قد تجمّد التطبيق عند تفعيل إعادة المحاولة التلقائية، بسبب مرشحات النموذج نفسه.',
          },
          {
            'الميزة': 'متابعة تلقائية للإجابات الطويلة',
            'ما تعنيه في الاستخدام الفعلي': 'يمكن تمديد الردود التي تنقطع بسبب نافذة التوليد البالغة نحو 25 ثانية.',
            'القيد / الملاحظة': 'يدرج سجل التغييرات المتابعة التلقائية على أنها لا تزال قيد الاختبار: قد تتابع إجابات مكتملة أو تفوّت إجابات مقطوعة.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PAIOS مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'مرونة النماذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'PAIOS',
            'المنصات': 'أندرويد',
            'السعر والترخيص': 'مجاني، Unlicense',
            'مرونة النماذج': 'Gemini Nano، عبر Google AI Core',
            'الفرق الرئيسي': 'عميل مفتوح المصدر لـ Gemini Nano مع تحكم قوي في التعليمات؛ يتطلب هاتفًا يدعم AI Core',
          },
          {
            'التطبيق': '[Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review)',
            'المنصات': 'أندرويد، iOS',
            'السعر والترخيص': 'مجاني، Apache 2.0',
            'مرونة النماذج': 'نماذج Gemma من جوجل على الجهاز',
            'الفرق الرئيسي': 'تطبيق جوجل الرسمي الذي يعمل على الجهاز ويشغّل نماذج Gemma',
          },
          {
            'التطبيق': '[Layla](/ar/power-local-llm/layla-review)',
            'المنصات': 'أندرويد',
            'السعر والترخيص': 'مجاني مع ميزات مدفوعة، مغلق المصدر',
            'مرونة النماذج': 'نماذج GGUF إلى جانب محركات أخرى على الجهاز',
            'الفرق الرئيسي': 'مساعد يضع أندرويد أولًا مع خيارات نماذج أوسع، لكنه ليس مفتوح المصدر',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'أندرويد، iOS',
            'السعر والترخيص': 'مجاني، MIT',
            'مرونة النماذج': 'نماذج GGUF تنزّلها بنفسك',
            'الفرق الرئيسي': 'يضم محرك استدلال خاصًا به بدل استخدام AI Core، لكنك تدير ملفات النماذج بنفسك',
          },
          {
            'التطبيق': '[Off Grid AI](/ar/power-local-llm/off-grid-ai-review)',
            'المنصات': 'أندرويد، iOS، macOS، ويندوز',
            'السعر والترخيص': 'مجاني مع ميزات مدفوعة، MIT',
            'مرونة النماذج': 'نماذج محلية إلى جانب اتصالات Ollama',
            'الفرق الرئيسي': 'متعدد المنصات وغني بالميزات، لكنه تطبيق أكبر بكثير من عميل Gemini Nano المتخصص',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات للتطبيقات الخارجية بشكل متكرر. تحقق من التفاصيل الحالية على صفحة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم PAIOS',
        items: [
          '**مالكو هاتف يدعم AI Core ويريدون واجهة دردشة مجانية لـ Gemini Nano.** هو أكثر الطرق مباشرة للتحدث مع النموذج الذي تشحنه جوجل أصلًا على الجهاز.',
          '**المهتمون بالخصوصية الذين يفضلون المصدر المفتوح.** الشيفرة متاحة للعموم وتحت ترخيص ملكية عامة، فيمكن التحقق من ادعاءات التعامل مع البيانات.',
          '**المهتمون بالتجريب الذين يحبون توجيه نموذج صغير.** تكافئ التعليمات ودرجة الحرارة لكل محادثة، ومكتبة التعليمات مع استيراد Markdown وتصديره، من يحب التجريب.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم PAIOS',
        items: [
          '**كل من لا يدعم هاتفه AI Core.** لا يستطيع التطبيق العمل بدونه (راجع متطلبات الجهاز أعلاه).',
          '**المستخدمون الذين يريدون اختيار النماذج أو استيرادها.** توثّق وثائق PAIOS نموذج Gemini Nano فقط؛ جرّب بدلًا منه [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Layla](/ar/power-local-llm/layla-review).',
          '**من يحتاجون إلى العمق أو الموثوقية.** Gemini Nano نموذج صغير يعمل على الجهاز، ويصف المشروع نفسه بأنه في مرحلة ألفا.',
          '**مستخدمو آيفون أو ماك أو ويندوز.** PAIOS لأندرويد فقط؛ ويغطي [Off Grid AI](/ar/power-local-llm/off-grid-ai-review) منصات أكثر.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل PAIOS مجاني؟',
            a: 'نعم. لا تُظهر صفحة Google Play أي مشتريات داخل التطبيق، ولا تدرج خارطة الطريق تحقيق الدخل إلا بندًا مستقبليًا غير محدد.',
          },
          {
            q: 'من يطوّر PAIOS؟',
            a: 'مطوّر مستقل ينشر باسم Puzzak (على GitHub: Puzzaks). ويذكر المشروع أنه غير تابع لجوجل ولا مدعوم منها ولا برعايتها.',
          },
          {
            q: 'هل يعمل PAIOS على أي هاتف أندرويد؟',
            a: 'لا. يحتاج إلى Google AI Core الذي تفعّله جوجل على أجهزة مختارة. راجع متطلبات الجهاز لصياغة ملف README.',
          },
          {
            q: 'هل يمكنني استخدام نماذج أخرى مثل Llama أو Gemma في PAIOS؟',
            a: 'ليس بحسب ما تُظهره الوثائق. صُمّم PAIOS عميلًا لـ Gemini Nano عبر AI Core؛ ويضيف شعار ملف README عبارة "and maybe something else!"، كما يذكر أول بند في خارطة الطريق Flan-T5 أيضًا، لكن لا يوثَّق أي محدد نماذج أو استيراد. للنماذج الأخرى، راجع جدول البدائل أعلاه.',
          },
          {
            q: 'لماذا تتوقف الإجابات الطويلة أحيانًا في منتصفها؟',
            a: 'تصف خارطة الطريق نافذة توليد تبلغ نحو 25 ثانية قد تنهي الإجابات مبكرًا. وأضاف الإصدار 1.1.7 المتابعة التلقائية حلًا بديلًا، ولا يزال سجل التغييرات يدرجها قيد الاختبار.',
          },
          {
            q: 'هل يُصان PAIOS بنشاط؟',
            a: 'تمتد الإصدارات من 1.0.0 إلى 1.1.8، وهو الأحدث ونُشر في 21 أبريل 2026، وكان آخر إيداع في مايو 2026. ولا تزال خارطة الطريق تدرج بنودًا مفتوحة مثل عناصر التحكم في إصدار AICore والوثائق داخل التطبيق.',
          },
          {
            q: 'هل يمكنني تثبيت PAIOS دون Google Play؟',
            a: 'نعم. يتضمن كل إصدار على GitHub ملف APK، والمصدر متاح للعموم إذا كنت تفضّل بناءه بنفسك.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content: [
          'يؤدي PAIOS مهمة ضيقة واحدة بصورة جيدة على الورق: يحوّل نموذج Gemini Nano الموجود أصلًا داخل هواتف أندرويد المدعومة إلى تطبيق دردشة قابل للضبط ومفتوح المصدر، مجاني ودون حساب.',
          'وهذا الضيق نفسه هو المأخذ. تحصل على نموذج صغير واحد موثّق، واعتماد صارم على دعم Google AI Core، وبرنامج يصفه مؤلفه نفسه بأنه في مرحلة ألفا. وهذا يجعله مناسبًا لمالكي هواتف Pixel الحديثة وما يماثلها ممن يحبون التجريب، وغير مناسب لمن يريد حرية اختيار النماذج أو دعمًا واسعًا للأجهزة أو تطبيقًا مصقولًا.',
          'إذا كان هاتفك مؤهلًا، فثبّته وانظر كيف يبدو Gemini Nano مع تعليماتك الخاصة. وإذا لم يكن مؤهلًا، أو أردت نماذج أكثر، فابدأ بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Layla](/ar/power-local-llm/layla-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[PAIOS على GitHub](https://github.com/Puzzaks/PAIOS) — ملف README وسجل التغييرات وخارطة الطريق والترخيص وإحصاءات المستودع.',
          '[إصدارات PAIOS](https://github.com/Puzzaks/PAIOS/releases) — الإصدار 1.1.8 وملفات الإصدار.',
          '[PAIOS - Offline AI على Google Play](https://play.google.com/store/apps/details?id=page.puzzak.paios) — الصفحة والسعر وإقرار سلامة البيانات.',
          '[موقع المطوّر](https://puzzak.page) — الصفحة الرئيسية للمطوّر المرتبطة من المستودع.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق جوجل الرسمي الذي يعمل على الجهاز، وهو متاح أيضًا على أندرويد.',
          '[مراجعة Layla](/ar/power-local-llm/layla-review) — مساعد محلي يضع أندرويد أولًا مع خيارات نماذج أوسع.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة GGUF المجاني ومفتوح المصدر.',
          '[مراجعة Off Grid AI](/ar/power-local-llm/off-grid-ai-review) — تطبيق ذكاء اصطناعي محلي متعدد المنصات.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/power-local-llm/local-llm-software-directory) — دليل أوسع لأدوات LLM المحلية عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/paios-review-hero-ko.webp',
    title: 'PAIOS 리뷰: 안드로이드용 오프라인 Gemini Nano 채팅',
    seoTitle: 'PAIOS 리뷰: 안드로이드 오프라인 Gemini Nano 채팅',
    intro:
      'PAIOS(Personal AI Operating System)는 구글의 온디바이스 Gemini Nano 모델에 채팅 인터페이스를 제공하는 무료 오픈소스 안드로이드 앱으로, 여러 채팅, 사용자 지정 프롬프트, 온도 조절 기능을 갖추고 있습니다. 이 리뷰는 프로젝트의 README, 변경 이력, 구글 플레이 목록을 바탕으로 앱이 무엇을 하는지, 어떤 휴대전화에서 작동하는지, 어떤 점이 부족한지를 다룹니다.',
    metaDescription:
      'PAIOS 리뷰: 구글의 온디바이스 Gemini Nano를 위한 무료 오픈소스(Unlicense) 안드로이드 채팅 앱. 기능, 지원 기기, 개인정보 보호 세부 사항, 한계, 그리고 Layla 및 PocketPal AI와의 비교.',
    twitterDescription:
      'PAIOS 리뷰: Google AI Core를 통해 Gemini Nano를 사용하는 안드로이드 클라이언트. 작동하는 휴대전화, 네트워크 사용에 대한 변경 이력 내용, 그리고 부족한 점.',
    audience:
      '픽셀 9 이상(또는 AICore를 지원하는 다른 휴대전화)을 보유하고 있으며 Gemini Nano를 위한 무료 오픈소스 온디바이스 채팅 앱을 원하는 안드로이드 사용자 대상 — 기능, 기기 지원, 개인정보 보호, 한계, 그리고 PAIOS와 다른 안드로이드 로컬 AI 앱의 비교를 다룹니다.',
    readTime: '7분 소요',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'PAIOS review',
    targetKeywords: [
      'paios review',
      'paios android app',
      'gemini nano android app',
      'run gemini nano offline',
      'google ai core chat app',
      'puzzak paios',
      'open source gemini nano client',
      'offline ai chat android pixel',
    ],
    current_hardware_mentioned: ['Pixel 9', 'Pixel 10'],
    leadAnswerBlock:
      '**PAIOS는 README에 따르면 Google AI Core를 통해 안드로이드 휴대전화에서 완전히 기기 내에서 실행되는 구글의 Gemini Nano 모델용 채팅 프런트엔드이며, 코드는 [Unlicense](https://github.com/Puzzaks/PAIOS)로 퍼블릭 도메인에 공개되어 있습니다.** 모델 라이브러리가 아니라 클라이언트입니다. AI Core가 지원되는 휴대전화(README는 픽셀 9 및 10 시리즈를 예로 듭니다)에서만, 그리고 문서에 따르면 Gemini Nano와만 작동합니다. 프로젝트는 스스로를 알파 단계라고 표시하며, 이 리뷰(버전 1.1.8)는 기기에서 직접 테스트한 결과가 아니라 공개 문서에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'PAIOS를 안드로이드 휴대전화에 설치할 가치가 있나요?',
        answer:
          '네, Google AI Core를 지원하는 휴대전화를 보유하고 있고 채팅별 프롬프트와 온도 조절을 갖춘 무료 오픈소스 방식으로 Gemini Nano와 오프라인 대화를 하고 싶다면 그렇습니다. 여러 모델 중에서 고르거나 직접 가져오고 싶다면 건너뛰세요. PAIOS는 Gemini Nano만 지원한다고 문서에 나와 있습니다. 더 넓은 모델 선택은 Layla, PocketPal AI, Off Grid AI가 제공합니다.',
        bullets: [
          '구글 플레이와 GitHub APK로 무료 제공; Unlicense 오픈소스.',
          'Google AI Core를 통해 Gemini Nano를 기기에서 실행; 모델 가져오기나 모델 카탈로그는 문서에 없음.',
          'README에 따르면 AI Core를 지원하는 휴대전화 필요(픽셀 9/10 시리즈를 예로 제시).',
          '여러 채팅, 사용자 지정 지침, 온도 및 토큰 조절, 편집 가능한 프롬프트 라이브러리.',
          '개발자 프리뷰 모델 위에서 동작하는 스스로 알파라고 밝힌 소프트웨어: 완성도가 거칠 수 있음.',
        ],
        updatedDate: '2026-10-02',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'PAIOS 받기', anchor: 'get-it' },
      { label: 'PAIOS 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'PAIOS란 무엇인가', anchor: 'what-is-paios' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능과 설정', anchor: 'features' },
      { label: '기기 요구 사항', anchor: 'requirements' },
      { label: '개인정보 보호 및 네트워크 사용', anchor: 'privacy' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
      { label: 'PAIOS 대 대안 앱', anchor: 'vs-alternatives' },
      { label: 'PAIOS를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'PAIOS를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '개발자 Puzzak이 만든 PAIOS는 Google AI Core를 통해 Gemini Nano와 완전히 기기 내에서 대화할 수 있게 해 주며, 여러 채팅, 사용자 지정 프롬프트, 온도 조절 기능을 갖추고 있고, 비용이 들지 않으며 소스 코드가 공개되어 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '구글이 지원 대상 안드로이드 휴대전화에 이미 내장한 소형 AI 모델을 위한 채팅 창이라고 생각하면 됩니다. 계정도, 클라우드 모델도, 관리할 모델 파일도 필요 없지만, 모델을 선택할 수도 없습니다.',
          },
        ],
        items: [
          '검토한 버전: 1.1.8, 최신 [GitHub 릴리스](https://github.com/Puzzaks/PAIOS/releases).',
          '가격 및 라이선스: 무료이며 [구글 플레이](https://play.google.com/store/apps/details?id=page.puzzak.paios)에 앱 내 구매 표시가 없음; 코드는 Unlicense로 퍼블릭 도메인.',
          '모델: 휴대전화의 Google AI Core가 실행하는 Gemini Nano; 문서에는 다른 모델을 불러오는 방법이 나와 있지 않음.',
          '플랫폼: 안드로이드 전용이며 AI Core를 지원하는 휴대전화에서만 작동(기기 요구 사항 참고).',
          '성숙도: 개발자는 알파 단계라고 밝히고 있으며, 프로젝트의 마지막 커밋은 2026년 5월.',
        ],
      },
      getItPAIOS: {
        id: 'get-it',
        title: 'PAIOS 받기',
        content: [
          '**PAIOS는 구글 플레이와 GitHub의 직접 APK로 받을 수 있습니다.** 둘 다 무료입니다. 자동 업데이트를 원하면 플레이 스토어 목록을, 플레이 스토어 밖에서 설치하고 싶다면 GitHub APK를 사용하세요.',
          '이 리뷰는 PAIOS를 다른 온디바이스 및 로컬 AI 도구와 함께 소개하는 PromptQuorum의 [로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory)와 짝을 이루는 콘텐츠입니다.',
        ],
        columns: ['경로', '받는 방법'],
        rows: [
          {
            '경로': '구글 플레이',
            '받는 방법': '[구글 플레이의 PAIOS - Offline AI](https://play.google.com/store/apps/details?id=page.puzzak.paios)',
          },
          {
            '경로': 'GitHub APK',
            '받는 방법': '[GitHub의 PAIOS 릴리스](https://github.com/Puzzaks/PAIOS/releases)',
          },
          {
            '경로': '소스 코드',
            '받는 방법': '[Puzzaks/PAIOS](https://github.com/Puzzaks/PAIOS)',
          },
        ],
        note: '버전 1.1.2부터 앱은 새 패키지 이름을 사용하며, 개발자는 플레이 스토어 목록 문제 때문에 이전 버전이 더 이상 작동하지 않는다고 밝혔습니다. 오래된 APK 대신 현재 빌드를 설치하세요.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'PAIOS 한눈에 보기',
        columns: ['항목', 'PAIOS'],
        rows: [
          { '항목': '플랫폼', 'PAIOS': '안드로이드 전용' },
          { '항목': '가격', 'PAIOS': '무료' },
          { '항목': '라이선스', 'PAIOS': 'Unlicense(퍼블릭 도메인)' },
          { '항목': '완전 오프라인 실행', 'PAIOS': '채팅은 기기 내 실행; 네트워크 사용은 개인정보 참조' },
          { '항목': '직접 모델 가져오기', 'PAIOS': '명시 없음; 문서상 모델은 Gemini Nano' },
          { '항목': '앱 내 모델 다운로드', 'PAIOS': '명시 없음' },
          { '항목': '이미지 입력', 'PAIOS': '명시 없음; 텍스트 인터페이스' },
          { '항목': '음성 입력/출력', 'PAIOS': '명시 없음' },
        ],
        note: '항목은 로컬 LLM 소프트웨어 디렉터리에서 사용하는 모바일 채팅 비교 기준을 따릅니다. "명시 없음"은 README, 로드맵, 변경 이력에 해당 기능이 언급되지 않았다는 뜻이며, 테스트해서 없는 것을 확인했다는 뜻이 아닙니다.',
      },
      whatIsPAIOS: {
        id: 'what-is-paios',
        title: 'PAIOS란 무엇인가',
        content: [
          '**PAIOS는 추론 엔진이 아니라 Gemini Nano의 프런트엔드입니다.** Gemini Nano를 호스팅하는 안드로이드 시스템 서비스인 Google AI Core가 모델을 실행합니다. PAIOS는 그 주위에 채팅 인터페이스, 즉 별도의 대화, 프롬프트, 생성 설정을 더합니다.',
          'Dart로 작성되었으며 주로 개발자 한 명(Puzzak)이 만들고 커뮤니티가 번역에 기여했으며, 구글과 제휴 관계가 없는 독립 프로젝트로 배포됩니다. 저장소는 2025년 11월에 생성되었고 GitHub 별은 약 170개입니다.',
          '이 리뷰는 README, 변경 이력, 로드맵, GitHub 릴리스, 구글 플레이 목록에 근거합니다. 기기에서 직접 테스트한 내용은 포함하지 않으므로 속도와 답변 품질은 평가하지 않았습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 지원되는 휴대전화에 일반 앱을 설치하는 것이 전부이며 계정이 필요 없습니다.** README는 첫 실행 과정을 자세히 설명하지 않으므로, 아래 단계는 문서화된 요구 사항을 따릅니다.',
        ],
        numberedItems: [
          {
            title: '휴대전화가 AI Core를 지원하는지 확인하기',
            whyItMatters: 'PAIOS는 Google AI Core를 사용할 수 있는 곳에서만 작동하므로, 설치하기 전에 기기가 지원되는지 확인하세요(기기 요구 사항 참고).',
          },
          {
            title: 'PAIOS 설치하기',
            whyItMatters: '[구글 플레이](https://play.google.com/store/apps/details?id=page.puzzak.paios) 또는 [GitHub 릴리스 페이지](https://github.com/Puzzaks/PAIOS/releases)에서 받으세요.',
          },
          {
            title: '채팅 시작하기',
            whyItMatters: '대화를 만든 다음, 기본값과 다르게 사용하고 싶다면 온도, 토큰 한도, 프롬프트를 설정하세요.',
          },
          {
            title: '선택 사항: 프롬프트 사용자 지정하기',
            whyItMatters: '프롬프트 관리자를 열어 시스템 프롬프트를 고르거나, 직접 작성하거나, Markdown 파일에서 가져오세요.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능과 설정',
        content: [
          '**모델 자체는 고정되어 있으므로 PAIOS는 Gemini Nano에 프롬프트를 주는 방식을 제어하는 데 초점을 맞춥니다.** 아래 내용은 모두 버전 1.1.8까지의 README와 변경 이력에서 가져온 것입니다.',
        ],
        items: [
          '**여러 채팅.** 각각 고유한 컨텍스트를 가진 대화를 만들고, 이름을 바꾸고, 고정할 수 있습니다.',
          '**생성 설정.** 온도와 최대 응답 토큰 수를 조정할 수 있으며, 1.1.7부터 채팅별로 온도를 설정할 수 있습니다.',
          '**프롬프트 관리자.** 1.1.6부터 채팅별로 시스템 및 사용자 프롬프트를 고르고, 편집하고, 지정할 수 있으며, 1.1.8에서 프롬프트의 Markdown 가져오기와 내보내기가 추가되었습니다.',
          '**사용자 지정 지침.** 모델을 특정 페르소나나 작업에 맞게 유도하고, 필요하면 현재 날짜, 시간, 앱 언어를 삽입할 수 있습니다.',
          '**프롬프트 투명성.** PAIOS가 모델에 보내는 실제 시스템 프롬프트를 볼 수 있습니다.',
          '**자동 이어쓰기.** 1.1.7부터 긴 답변을 자동으로 이어 갈 수 있으며, 로드맵에 설명된 약 25초의 생성 제한을 우회하는 방법입니다.',
          '**번역.** 커뮤니티 기여자들이 터키어, 독일어, 중국어 인터페이스 번역을 추가했습니다.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '기기 요구 사항',
        content: [
          '**PAIOS에는 Google AI Core를 지원하는 휴대전화가 필요합니다.** README는 "Google AI Core를 지원하는 기기가 필요합니다(예: 픽셀 9/10 시리즈)"라고 밝힙니다. 최소 RAM이나 저장 공간 수치는 제시하지 않으므로, 관건은 사양이 아니라 기기 지원 여부입니다.',
          '어떤 휴대전화가 AI Core와 Gemini Nano를 받을지는 구글이 결정하며, 그 목록은 바뀔 수 있습니다. 픽셀이 아닌 기기에서 작동하리라 가정하기 전에 구글의 기기 문서를 확인하거나 휴대전화에서 플레이 스토어 설치를 시도해 보세요.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호 및 네트워크 사용',
        content: [
          '**README는 PAIOS가 "Google의 AI Core를 사용해 완전히 기기 내에서 실행되며, 어떤 데이터도 휴대전화 밖으로 나가지 않는다"고 밝힙니다.** 구글 플레이 목록에는 개발자의 데이터 보안 선언이 "수집되는 데이터 없음"과 "공유되는 데이터 없음"으로 표시되어 있습니다.',
          '변경 이력에는 알아 둘 만한 세부 내용이 더 있습니다. 버전 1.1.2에서 디버깅과 충돌 보고를 위한 선택적 분석이 도입되었고, 버전 1.1.5에서 충돌 보고가 추가되었으며, 이후 버전에서는 앱 설정을 위한 Firebase Remote Config와 GitHub에서 내려받는 프롬프트가 언급됩니다. README와 플레이 선언에는 이러한 내용이 없으며, 이 리뷰는 앱의 네트워크 트래픽을 검사하지 않았습니다.',
          '네트워크 접촉이 전혀 없어야 한다면 앱 설정에서 분석 옵션을 확인하고 트래픽을 직접 점검하세요. 소스가 공개되어 있으므로 누구나 이러한 주장을 감사할 수 있습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '이점': '무료이며 퍼블릭 도메인',
            '실제 사용에서의 의미': '가격도, 계정도, 코드에 대한 라이선스 제약도 없습니다.',
            '한계 / 유의 사항': '대체로 유지 관리자 한 명; 마지막 커밋이 2026년 5월이라 업데이트 속도는 불확실',
          },
          {
            '이점': '관리할 모델 파일 없음',
            '실제 사용에서의 의미': 'Google AI Core가 Gemini Nano를 제공하므로 GGUF 파일이나 카탈로그를 다룰 필요가 없습니다.',
            '한계 / 유의 사항': '모델 전환·가져오기는 문서에 없으며 지원 모델은 Gemini Nano입니다.',
          },
          {
            '이점': '강력한 프롬프트 제어',
            '실제 사용에서의 의미': '채팅별 프롬프트, 온도, 토큰 한도 덕분에 소형 모델을 더 쉽게 유도할 수 있습니다.',
            '한계 / 유의 사항': 'README는 Gemini Nano가 요약과 스마트 답장에 맞춰 조정되어 있으며 환각을 일으키거나 맥락을 잃을 수 있다고 경고합니다.',
          },
          {
            '이점': '오픈소스, 감사 가능',
            '실제 사용에서의 의미': '개인정보 보호 주장의 근거가 되는 코드를 누구나 읽을 수 있습니다.',
            '한계 / 유의 사항': 'README에 따르면 자동 재시도가 켜져 있을 때 욕설이나 비속어를 입력하면 모델 자체의 필터 때문에 앱이 멈출 수 있습니다.',
          },
          {
            '이점': '긴 답변을 위한 자동 이어쓰기',
            '실제 사용에서의 의미': '약 25초의 생성 시간 제한 때문에 끊긴 응답을 이어 갈 수 있습니다.',
            '한계 / 유의 사항': '변경 이력은 자동 이어쓰기를 아직 테스트 중으로 표기하며, 이미 끝난 답변을 이어 가거나 끊긴 답변을 놓칠 수 있습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'PAIOS 대 대안 앱',
        columns: ['앱', '플랫폼', '가격 및 라이선스', '모델 유연성', '핵심 차이점'],
        rows: [
          {
            '앱': 'PAIOS',
            '플랫폼': '안드로이드',
            '가격 및 라이선스': '무료, Unlicense',
            '모델 유연성': 'Google AI Core를 통한 Gemini Nano',
            '핵심 차이점': '강력한 프롬프트 제어를 갖춘 오픈소스 Gemini Nano 클라이언트; AI Core 지원 휴대전화 필요',
          },
          {
            '앱': '[Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)',
            '플랫폼': '안드로이드, iOS',
            '가격 및 라이선스': '무료, Apache 2.0',
            '모델 유연성': '구글의 온디바이스 Gemma 모델',
            '핵심 차이점': 'Gemma 모델을 실행하는 구글의 자체 온디바이스 앱',
          },
          {
            '앱': '[Layla](/ko/power-local-llm/layla-review)',
            '플랫폼': '안드로이드',
            '가격 및 라이선스': '프리미엄, 비공개 소스',
            '모델 유연성': 'GGUF 모델과 기타 온디바이스 백엔드',
            '핵심 차이점': '더 넓은 모델 선택을 제공하는 안드로이드 우선 어시스턴트이지만 오픈소스가 아님',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': '안드로이드, iOS',
            '가격 및 라이선스': '무료, MIT',
            '모델 유연성': '직접 다운로드하는 GGUF 모델',
            '핵심 차이점': 'AI Core 대신 자체 추론 엔진을 탑재하지만 모델 파일은 직접 관리해야 함',
          },
          {
            '앱': '[Off Grid AI](/ko/power-local-llm/off-grid-ai-review)',
            '플랫폼': '안드로이드, iOS, macOS, 윈도우',
            '가격 및 라이선스': '프리미엄, MIT',
            '모델 유연성': '로컬 모델과 Ollama 연결',
            '핵심 차이점': '크로스 플랫폼이며 기능이 풍부하지만, 특화된 Gemini Nano 클라이언트보다 훨씬 큰 앱',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 사항은 자주 변경됩니다. 결정하기 전에 각 앱 자체의 목록에서 현재 세부 정보를 확인하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'PAIOS를 사용해야 하는 사람',
        items: [
          '**AI Core를 지원하는 휴대전화를 보유하고 Gemini Nano용 무료 채팅 프런트엔드를 원하는 사용자.** 기기에 이미 탑재된 구글의 모델과 대화하는 가장 직접적인 방법입니다.',
          '**오픈소스를 선호하는 개인정보 보호 중시 사용자.** 코드가 공개되어 있고 퍼블릭 도메인 라이선스이므로 데이터 처리에 관한 주장을 직접 확인할 수 있습니다.',
          '**소형 모델을 직접 다듬어 보기 좋아하는 사용자.** 채팅별 프롬프트, 온도, 그리고 Markdown 가져오기/내보내기를 지원하는 프롬프트 라이브러리가 실험을 뒷받침합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'PAIOS를 사용하지 말아야 하는 사람',
        items: [
          '**휴대전화가 AI Core를 지원하지 않는 사용자.** AI Core 없이는 앱을 실행할 수 없습니다(위의 기기 요구 사항 참고).',
          '**모델을 직접 고르거나 가져오고 싶은 사용자.** PAIOS는 Gemini Nano만 문서화하고 있습니다. 대신 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Layla](/ko/power-local-llm/layla-review)를 사용해 보세요.',
          '**깊이나 안정성이 필요한 사용자.** Gemini Nano는 소형 온디바이스 모델이며, 프로젝트도 스스로를 알파라고 부릅니다.',
          '**아이폰, 맥, 윈도우 사용자.** PAIOS는 안드로이드 전용입니다. [Off Grid AI](/ko/power-local-llm/off-grid-ai-review)가 더 많은 플랫폼을 지원합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'PAIOS는 무료인가요?',
            a: '네. 구글 플레이 목록에는 앱 내 구매가 없다고 표시되어 있으며, 로드맵은 수익화를 체크되지 않은 향후 항목으로만 적고 있습니다.',
          },
          {
            q: 'PAIOS는 누가 만드나요?',
            a: 'Puzzak(GitHub: Puzzaks)이라는 이름으로 활동하는 독립 개발자입니다. 프로젝트는 구글과 제휴하거나, 구글의 승인을 받거나, 후원을 받지 않았다고 밝히고 있습니다.',
          },
          {
            q: 'PAIOS는 모든 안드로이드 휴대전화에서 작동하나요?',
            a: '아니요. 구글이 일부 기기에서 활성화하는 Google AI Core가 필요합니다. README의 표현은 기기 요구 사항을 참고하세요.',
          },
          {
            q: 'PAIOS에서 Llama나 Gemma 같은 다른 모델을 사용할 수 있나요?',
            a: '문서로 확인되는 한 아니요. PAIOS는 AI Core를 통해 Gemini Nano를 사용하는 클라이언트로 만들어졌습니다. README 태그라인에는 "and maybe something else!"가 덧붙어 있고 로드맵의 첫 항목에는 Flan-T5도 언급되지만, 모델 선택기나 가져오기 기능은 문서에 없습니다. 다른 모델은 위의 대안 앱 비교를 참고하세요.',
          },
          {
            q: '긴 답변이 왜 중간에 멈추기도 하나요?',
            a: '로드맵은 약 25초의 생성 시간 제한 때문에 답변이 일찍 끝날 수 있다고 설명합니다. 버전 1.1.7에서 이를 우회하기 위한 자동 이어쓰기가 추가되었고, 변경 이력은 이 기능을 여전히 테스트 중으로 표기합니다.',
          },
          {
            q: 'PAIOS는 활발하게 유지 관리되고 있나요?',
            a: '릴리스는 1.0.0부터 최신 버전인 1.1.8까지 있으며 1.1.8은 2026년 4월 21일에 게시되었고, 마지막 커밋은 2026년 5월입니다. 로드맵에는 AICore 버전 제어와 앱 내 문서 같은 미완료 항목이 아직 남아 있습니다.',
          },
          {
            q: '구글 플레이 없이 PAIOS를 설치할 수 있나요?',
            a: '네. 각 GitHub 릴리스에 APK가 포함되어 있으며, 직접 빌드하고 싶다면 소스가 공개되어 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: [
          'PAIOS는 문서상으로는 한 가지 좁은 일을 잘 해냅니다. 지원되는 안드로이드 휴대전화에 이미 들어 있는 Gemini Nano 모델을 계정 없이 무료로 설정을 바꿀 수 있는 오픈소스 채팅 앱으로 바꿔 줍니다.',
          '그 좁은 범위가 곧 단점이기도 합니다. 문서에 나와 있는 소형 모델 하나, Google AI Core 지원에 대한 필수 의존성, 그리고 개발자 스스로 알파라고 부르는 소프트웨어를 받게 됩니다. 그래서 실험을 즐기는 최신 픽셀급 휴대전화 소유자에게는 잘 맞고, 모델 선택, 폭넓은 기기 지원, 완성도를 원하는 사람에게는 맞지 않습니다.',
          '휴대전화가 조건을 충족한다면 설치해서 자신의 프롬프트로 Gemini Nano가 어떤지 확인해 보세요. 충족하지 않거나 더 많은 모델을 원한다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Layla](/ko/power-local-llm/layla-review)부터 시작하세요.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 PAIOS](https://github.com/Puzzaks/PAIOS) — README, 변경 이력, 로드맵, 라이선스, 저장소 통계.',
          '[PAIOS 릴리스](https://github.com/Puzzaks/PAIOS/releases) — 버전 1.1.8 및 릴리스 자산.',
          '[구글 플레이의 PAIOS - Offline AI](https://play.google.com/store/apps/details?id=page.puzzak.paios) — 목록, 가격, 데이터 보안 선언.',
          '[개발자 사이트](https://puzzak.page) — 저장소에서 링크된 개발자 홈페이지.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — 안드로이드에서도 쓸 수 있는 구글의 자체 온디바이스 앱.',
          '[Layla 리뷰](/ko/power-local-llm/layla-review) — 더 넓은 모델 선택을 제공하는 안드로이드 우선 로컬 어시스턴트.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 무료 오픈소스 GGUF 채팅 클라이언트.',
          '[Off Grid AI 리뷰](/ko/power-local-llm/off-grid-ai-review) — 크로스 플랫폼 로컬 AI 앱.',
          '[완전한 로컬 LLM 소프트웨어 디렉터리](/ko/power-local-llm/local-llm-software-directory) — 플랫폼 전반의 로컬 LLM 도구에 대한 더 광범위한 디렉터리.',
        ],
      },
    },
  },
}
