// Rin Chat Review: free desktop app for AI roleplay and character chat with encrypted cards, local backends or any OpenAI-compatible API
// Slug: rin-chat-review
// Companion to: risuai-review, agnai-review, backyard-ai-review-local-roleplay
// Facts verified 2026-11-21 against rin.chat (home, download, changelog 1.0.4 dated 20 Nov 2026, features, quickstart, choosing-a-provider, privacy policy, terms effective 12 Nov 2026, license, contact).
// No hands-on test by PromptQuorum. Stale-project warning is OFF (version 1.0.4 released 2026-11-20). HQ country US (Rin Chat LLC, Utah).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Creative & Roleplay',
    heroImage: '/images/rin-chat-review-hero-en.webp',
    title: 'Rin Chat Review: Free Desktop App for AI Roleplay and Character Chat',
    seoTitle: 'Rin Chat Review: Free AI Roleplay App for Desktop',
    intro: "Rin Chat is a free desktop app for AI roleplay and character chat on Windows and Linux. It connects to a local backend such as Ollama, KoboldCpp or LM Studio, or to any OpenAI-compatible API, and it opens SillyTavern and AI Character Cards character cards and lorebooks directly. This review covers the downloads, features, privacy, limits and alternatives; PromptQuorum read the maker's pages but did not test the app.",
    metaDescription: 'Rin Chat review: free Windows and Linux roleplay app with encrypted cards, game-master dice and a card forge, using Ollama or any API. Limits inside.',
    twitterDescription: 'Rin Chat review: a free desktop roleplay app for Windows and Linux with encrypted character cards, adventure dice and a card forge. Privacy, limits and alternatives.',
    audience: 'Roleplayers and character-chat users who want a ready-made desktop app instead of a self-hosted frontend, with local or cloud models — covers downloads, features, privacy, limits and alternatives.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rin Chat review',
    targetKeywords: [
      'rin chat review',
      'rin chat ai roleplay',
      'sillytavern alternative desktop app',
      'ai character chat windows linux',
      'roleplay app ollama koboldcpp',
      'encrypted ai roleplay app',
      'character card app lorebooks',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: "**Rin Chat is a free desktop app for Windows and Linux that runs AI roleplay and character chat on top of a model you connect, local or cloud.** It reads SillyTavern and AI Character Cards files, adds a game-master mode with dice and stats, and, per the maker, stores cards and chats encrypted on your computer. It is closed source and labelled an open beta, the terms say usage statistics cannot be switched off, and PromptQuorum did not test it.",
    quickAnswerTop: {
      en: {
        question: 'Is Rin Chat a local AI roleplay app?',
        answer: "Partly. The app itself runs on your computer and stores its data there, but it ships no model: you connect Ollama, KoboldCpp, LM Studio or any OpenAI-compatible service. With a local backend the chat stays on your machine; with a cloud API the prompts go from your device to that provider, per the maker's privacy policy.",
        bullets: [
          'It opens V1, V2 and V3 character cards, including cards embedded in PNG images, and lorebooks.',
          'Cards and chats are stored with AES-256-GCM encryption on your computer, per the maker.',
          'Windows 10 or 11 and 64-bit Linux builds exist; macOS has no release date and no Android build is offered yet.',
          'The app is closed source, so its claims cannot be checked in code.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Rin Chat', anchor: 'get-it' },
      { label: 'Rin Chat at a Glance', anchor: 'at-a-glance' },
      { label: 'What Rin Chat Is', anchor: 'what-is-rin-chat' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features', anchor: 'features' },
      { label: 'Backends and Hardware', anchor: 'backends-hardware' },
      { label: 'Privacy, License and Cost', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Rin Chat vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Rin Chat', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Rin Chat', anchor: 'who-should-not-use' },
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
            text: 'Rin Chat is a free desktop app where you chat with AI characters from card files and run light role-playing-game rules, using a local or cloud model that you connect yourself.',
          },
          {
            type: 'plain-terms',
            text: 'Think of a ready-to-install version of the SillyTavern idea: you download it, point it at Ollama or an API key, and open a character card.',
          },
        ],
        items: [
          'Local claim: the app and its data stay on your computer; whether the chat itself stays local depends on the backend you choose.',
          'Maker: Rin Chat LLC, a company in Utah, United States, per its contact page.',
          'Maintenance: version 1.0.4 is dated 20 November 2026, which shows active development, but the site still calls it an open beta.',
          'Cost: free for personal, non-commercial use under a proprietary license.',
          'Gaps: closed source, mandatory usage statistics, an unsigned Windows installer, no macOS or released Android build and no hands-on test by PromptQuorum.',
        ],
      },
      getItRinChat: {
        id: 'get-it',
        title: 'Get Rin Chat',
        content: [
          '**Rin Chat installs like any desktop app, so no terminal is needed.** Download the build for your system from the official site; the app then updates itself.',
        ],
        columns: ['Platform', 'Get It'],
        rows: [
          {
            Platform: 'Windows',
            'Get It': '[Download for Windows](https://rin.chat/download/) — Windows 10 or 11, 64-bit installer; not code-signed, so SmartScreen warns',
          },
          {
            Platform: 'Linux',
            'Get It': '[Download the AppImage or .deb](https://rin.chat/download/) — 64-bit x86 (amd64)',
          },
          {
            Platform: 'Mac and Android',
            'Get It': 'No download yet; macOS has no date, and Android has no download page or store listing',
          },
          {
            Platform: 'Website',
            'Get It': '[rin.chat](https://rin.chat/)',
          },
          {
            Platform: 'Privacy policy',
            'Get It': '[Rin Chat privacy policy](https://rin.chat/privacy/)',
          },
        ],
        note: 'The download page says the app is an open beta. No public source repository was found.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Rin Chat at a Glance',
        columns: ['Attribute', 'Rin Chat'],
        rows: [
          { Attribute: 'Platform', 'Rin Chat': 'Windows 10/11, 64-bit Linux desktop' },
          { Attribute: 'Price', 'Rin Chat': 'Free for personal use' },
          { Attribute: 'License', 'Rin Chat': 'Proprietary, closed source' },
          { Attribute: 'Model', 'Rin Chat': 'None bundled; local backend or any OpenAI-compatible API' },
          { Attribute: 'Card formats', 'Rin Chat': 'V1, V2, V3 cards (PNG), lorebooks' },
          { Attribute: 'Group chats', 'Rin Chat': 'Yes, per the maker' },
          { Attribute: 'Storage', 'Rin Chat': 'AES-256-GCM encrypted, on your computer' },
          { Attribute: 'Maker', 'Rin Chat': 'Rin Chat LLC (United States)' },
        ],
        note: 'A missing statement on the maker\'s site means unknown, not unsupported.',
      },
      whatIsRinChat: {
        id: 'what-is-rin-chat',
        title: 'What Rin Chat Is',
        content: [
          '**Rin Chat is a desktop frontend for character chat and roleplay: it holds the characters, lorebooks and chat history, and a model you connect writes the replies.** It does not include a language model. The maker, Rin Chat LLC, also runs [AI Character Cards](https://aicharactercards.com/), a site where people share character cards, which the app can import from.',
          'It targets the same readers as SillyTavern, but as a packaged app with an installer, built-in updates and a guided backend setup instead of a self-hosted web interface.',
          'This review draws on the maker\'s website, policies and changelog. PromptQuorum did not install or test Rin Chat, so how well any feature works is the maker\'s statement.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an install, a backend choice and a character card.** The steps follow the maker\'s quickstart.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download the build from the Get Rin Chat table above. On Windows the installer is not code-signed, so SmartScreen shows a warning; install it only if you trust the source.',
          },
          {
            title: 'Pick a backend',
            whyItMatters: 'Choose a local app (Ollama, KoboldCpp or LM Studio, none of which needs a key) or an OpenAI-compatible service with your own API key. The app can install Ollama or download and run KoboldCpp for you.',
          },
          {
            title: 'Open or import a character',
            whyItMatters: 'Open a SillyTavern or AI Character Cards file, or import a card by link from a supported site.',
          },
          {
            title: 'Review the data settings',
            whyItMatters: 'Check Settings, then Data and Backup, for the optional statistics, and write down the 24-word recovery phrase for your encrypted library.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**The feature set centres on cards, game mechanics and privacy.** Everything below comes from the maker\'s features page and changelog.',
        ],
        items: [
          '**Card and lorebook import.** It reads V1, V2 and V3 character cards, including cards embedded in a PNG, plus standalone lorebooks; links work from Chub, RisuRealm, Pygmalion, Perchance and AI Character Cards.',
          '**Adventure mode.** The model plays game master while the app acts as referee: it rolls the dice, tracks stats and reverses them cleanly when you edit or reroll a message.',
          '**Document styles.** Cards can define styled in-chat documents such as notices, letters, bounty posters and terminal screens; thirty styles are built in.',
          '**Card forge.** A conversational editor, run on your connected model, that helps you create and edit cards, lorebooks and other app elements.',
          '**Groups, voice and images.** Group chats, bundled offline text-to-speech (Piper, Kokoro, Pocket TTS), offline dictation with Whisper, and image generation through tools such as Automatic1111, Forge, SwarmUI and ComfyUI.',
          '**Reach.** A Discord bot, and remote access from a phone browser.',
          '**Languages.** The features page lists seven interface languages: English, Simplified Chinese, Japanese, Spanish, German, French and Russian; the homepage FAQ lists five.',
        ],
      },
      backendsHardware: {
        id: 'backends-hardware',
        title: 'Backends and Hardware',
        content: [
          '**Rin Chat ships no model; it needs a backend.** Local options are LM Studio, Ollama and KoboldCpp on their default local ports, and any OpenAI-compatible endpoint works with an API key. Presets exist for Z.AI, OpenRouter, NanoGPT, OpenAI, DeepSeek and xAI Grok.',
          'The site states no RAM or GPU minimum for the app itself, so the hardware you need depends on the model you run. PromptQuorum did not measure performance.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy, License and Cost',
        content: [
          '**The maker says cards and chats are encrypted with AES-256-GCM on your computer, protected by your password or operating-system keychain, with a 24-word recovery phrase.** Per the privacy policy, requests go directly from your device to the provider you choose and do not pass through the maker\'s servers.',
          'The terms say the app sends usage statistics at install and launch (a random installation ID, version, operating system, architecture, package format and language) and that this "cannot be switched off"; the policy says it never includes prompts or characters. Further statistics, such as providers used, are optional. The website uses Google Analytics, with consent in the EU, UK and Switzerland. The policy also mentions an optional Rin Chat subscription and account; PromptQuorum found no price for it.',
          'The license makes Rin Chat proprietary and free for personal, non-commercial use, and users must be at least 18. The app is closed source and PromptQuorum did not inspect its storage or network traffic, so none of this is verified.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            Benefit: 'Packaged desktop app',
            'What it means in real use': 'Install, connect a backend and chat, with built-in updates.',
            'Limitation / caveat': 'Windows and Linux only for now; the Windows installer is unsigned.',
          },
          {
            Benefit: 'Opens existing cards',
            'What it means in real use': 'SillyTavern and AI Character Cards files and lorebooks work as they are.',
            'Limitation / caveat': 'Import quality was not tested here.',
          },
          {
            Benefit: 'Adventure mode',
            'What it means in real use': 'The app rolls dice and tracks stats, so the model does not invent them.',
            'Limitation / caveat': 'Set up per card; PromptQuorum did not try it.',
          },
          {
            Benefit: 'Encrypted storage',
            'What it means in real use': 'Per the maker, cards and chats are unreadable without your password or key.',
            'Limitation / caveat': 'Closed source, so the encryption cannot be audited.',
          },
          {
            Benefit: 'Flexible backends',
            'What it means in real use': 'Use Ollama, KoboldCpp, LM Studio or a cloud API.',
            'Limitation / caveat': 'No model is included; cloud APIs send prompts off your machine.',
          },
          {
            Benefit: 'Free to use',
            'What it means in real use': 'No trial or account is needed, per the maker.',
            'Limitation / caveat': 'Personal use only; usage statistics are mandatory.',
          },
          {
            Benefit: 'Active development',
            'What it means in real use': 'Version 1.0.4 is dated 20 November 2026.',
            'Limitation / caveat': 'Still labelled an open beta, so expect rough edges.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Rin Chat vs. Alternatives',
        content: [
          'These are the closest roleplay frontends in the directory: the most customizable self-hosted option, one with a shared-server mode, a lighter multi-platform client and a desktop app with a built-in character hub.',
        ],
        columns: ['App', 'Platforms', 'Price and license', 'Role', 'Key difference'],
        rows: [
          {
            App: 'Rin Chat',
            Platforms: 'Windows, Linux',
            'Price and license': 'Free, proprietary',
            Role: 'Desktop roleplay app',
            'Key difference': 'Encrypted storage, dice and stats; closed source',
          },
          {
            App: 'SillyTavern',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free, AGPL-3.0',
            Role: 'Self-hosted roleplay frontend',
            'Key difference': 'Deepest customization; needs Node.js setup',
          },
          {
            App: '[RisuAI](/power-local-llm/risuai-review)',
            Platforms: 'Web, desktop, mobile',
            'Price and license': 'Free, GPL-3.0',
            Role: 'Roleplay frontend',
            'Key difference': 'Mobile-friendly; open source',
          },
          {
            App: '[Agnai](/power-local-llm/agnai-review)',
            Platforms: 'Web',
            'Price and license': 'Free, AGPL-3.0',
            Role: 'Multi-user roleplay frontend',
            'Key difference': 'Shared-server mode; open source',
          },
          {
            App: '[Backyard AI](/power-local-llm/backyard-ai-review-local-roleplay)',
            Platforms: 'Windows, Mac, Linux',
            'Price and license': 'Free tier, proprietary',
            Role: 'Desktop character chat',
            'Key difference': 'Built-in character hub',
          },
        ],
        note: "Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each project's own page before deciding.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Rin Chat',
        items: [
          '**Roleplayers who want an installer.** No Node.js or server setup is needed.',
          '**People with existing character cards.** SillyTavern and AI Character Cards files open directly.',
          '**Privacy-minded users on Windows or Linux.** Encrypted local storage, with a local backend for fully local chat.',
          '**Game-master style players.** The app handles dice and stats.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Rin Chat',
        items: [
          '**Anyone who needs open-source code.** The app is proprietary.',
          '**Mac and phone users.** No macOS or released Android build exists yet.',
          '**Commercial users.** The license covers personal, non-commercial use.',
          '**Anyone who needs zero telemetry.** The terms say the basic usage statistics cannot be switched off.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Rin Chat work offline?',
            a: 'Only with a local backend such as Ollama, KoboldCpp or LM Studio running on your computer; the app ships no model. It also sends usage statistics at install and launch, so PromptQuorum cannot call it fully offline.',
          },
          {
            q: 'Is Rin Chat free?',
            a: 'The homepage says every feature is unlocked with no trial or account. A Rin Chat subscription appears in the policy, with no price found.',
          },
          {
            q: 'Can I use my SillyTavern cards?',
            a: 'The maker says SillyTavern cards work as they are, and the app opens AI Character Cards files as well.',
          },
          {
            q: 'Is there a Mac or Android version?',
            a: 'Not yet. The maker says macOS is in progress without a date, and Android is announced but has no download page or store listing.',
          },
          {
            q: 'Who makes Rin Chat?',
            a: 'Rin Chat LLC, a United States company with a Utah address on its contact page; the terms are governed by Utah law.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Rin Chat is a good fit if you want a packaged Windows or Linux app for character chat that opens SillyTavern and AI Character Cards files, keeps its data encrypted on your computer, and adds dice and stats. It shipped version 1.0.4 on 20 November 2026.',
          'The caveats are closed source, mandatory usage statistics, an unsigned Windows installer, no Mac or released Android build, an open-beta label and claims PromptQuorum could not check. Try it with one card and a local backend before moving a large library.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Rin Chat website](https://rin.chat/) — overview, features and FAQ.',
          '[Download page](https://rin.chat/download/) — platforms and installers.',
          '[Changelog](https://rin.chat/changelog) — version 1.0.4 and release dates.',
          '[Features](https://rin.chat/features/) and [quickstart](https://rin.chat/quickstart/) — card formats, backends and setup.',
          '[Privacy policy](https://rin.chat/privacy/), [terms](https://rin.chat/terms/) and [license](https://rin.chat/license/) — data handling, statistics, governing law and licensing.',
          '[Contact page](https://rin.chat/contact/) — company details.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[RisuAI Review](/power-local-llm/risuai-review) — an open-source roleplay frontend for web, desktop and mobile.',
          '[Agnai Review](/power-local-llm/agnai-review) — a multi-user roleplay frontend.',
          '[Backyard AI Review](/power-local-llm/backyard-ai-review-local-roleplay) — a desktop character-chat app with a built-in character hub.',
          '[SillyTavern vs Agnai vs RisuAI](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — the three main roleplay frontends compared.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local AI tools across platforms.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Creative & Roleplay',
    heroImage: '/images/rin-chat-review-hero-de.webp',
    title: 'Rin Chat Rezension: Gratis-Desktop-App für KI-Rollenspiel und Charakter-Chat',
    seoTitle: 'Rin Chat Rezension: Gratis-App für KI-Rollenspiel',
    intro: 'Rin Chat ist eine kostenlose Desktop-App für KI-Rollenspiel und Charakter-Chat unter Windows und Linux. Sie verbindet sich mit einem lokalen Backend wie Ollama, KoboldCpp oder LM Studio oder mit jeder OpenAI-kompatiblen API und öffnet Charakterkarten und Lorebooks von SillyTavern und AI Character Cards direkt. Diese Rezension behandelt Downloads, Funktionen, Datenschutz, Grenzen und Alternativen; PromptQuorum hat die Seiten des Herstellers gelesen, die App aber nicht getestet.',
    metaDescription: 'Rin Chat Rezension: Gratis-Rollenspiel-App für Windows und Linux mit verschlüsselten Karten, Spielleiter-Würfeln und Karten-Schmiede, mit Ollama oder API.',
    twitterDescription: 'Rin Chat Rezension: eine kostenlose Desktop-App für Rollenspiel unter Windows und Linux mit verschlüsselten Charakterkarten, Abenteuer-Würfeln und Karten-Schmiede. Datenschutz, Grenzen und Alternativen.',
    audience: 'Rollenspieler und Nutzer von Charakter-Chats, die statt eines selbst gehosteten Frontends eine fertige Desktop-App mit lokalen oder Cloud-Modellen wollen — behandelt Downloads, Funktionen, Datenschutz, Grenzen und Alternativen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rin Chat review',
    targetKeywords: [
      'rin chat rezension',
      'rin chat ki rollenspiel',
      'sillytavern alternative desktop-app',
      'ki charakter-chat windows linux',
      'rollenspiel-app ollama koboldcpp',
      'verschlüsselte ki rollenspiel-app',
      'charakterkarten app lorebooks',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**Rin Chat ist eine kostenlose Desktop-App für Windows und Linux, die KI-Rollenspiel und Charakter-Chat auf einem von Ihnen verbundenen Modell ausführt, lokal oder in der Cloud.** Sie liest Dateien von SillyTavern und AI Character Cards, ergänzt einen Spielleiter-Modus mit Würfeln und Werten und speichert Karten und Chats laut Hersteller verschlüsselt auf Ihrem Computer. Sie ist Closed Source und als offene Beta gekennzeichnet, laut den Nutzungsbedingungen lassen sich Nutzungsstatistiken nicht abschalten, und PromptQuorum hat sie nicht getestet.',
    quickAnswerTop: {
      de: {
        question: 'Ist Rin Chat eine lokale KI-Rollenspiel-App?',
        answer: 'Teilweise. Die App selbst läuft auf Ihrem Computer und speichert ihre Daten dort, bringt aber kein Modell mit: Sie verbinden Ollama, KoboldCpp, LM Studio oder einen beliebigen OpenAI-kompatiblen Dienst. Mit einem lokalen Backend bleibt der Chat auf Ihrem Rechner; bei einer Cloud-API gehen die Prompts laut Datenschutzerklärung des Herstellers von Ihrem Gerät an diesen Anbieter.',
        bullets: [
          'Sie öffnet Charakterkarten der Versionen V1, V2 und V3, auch in PNG-Bilder eingebettete Karten, sowie Lorebooks.',
          'Karten und Chats werden laut Hersteller mit AES-256-GCM verschlüsselt auf Ihrem Computer gespeichert.',
          'Es gibt Builds für Windows 10 oder 11 und für 64-Bit-Linux; für macOS gibt es kein Veröffentlichungsdatum, und ein Android-Build wird noch nicht angeboten.',
          'Die App ist Closed Source, ihre Aussagen lassen sich daher nicht im Code prüfen.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Rin Chat herunterladen', anchor: 'get-it' },
      { label: 'Rin Chat im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Rin Chat ist', anchor: 'what-is-rin-chat' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Backends und Hardware', anchor: 'backends-hardware' },
      { label: 'Datenschutz, Lizenz und Kosten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile und Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Rin Chat im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen Rin Chat geeignet ist', anchor: 'who-should-use' },
      { label: 'Für wen Rin Chat nicht geeignet ist', anchor: 'who-should-not-use' },
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
            text: 'Rin Chat ist eine kostenlose Desktop-App, in der Sie mit KI-Charakteren aus Kartendateien chatten und einfache Rollenspiel-Regeln nutzen, mit einem lokalen oder Cloud-Modell, das Sie selbst verbinden.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich die SillyTavern-Idee als fertig installierbare App vor: Sie laden sie herunter, verweisen sie auf Ollama oder einen API-Schlüssel und öffnen eine Charakterkarte.',
          },
        ],
        items: [
          'Lokal-Aussage: Die App und ihre Daten bleiben auf dem Computer; ob der Chat selbst lokal bleibt, hängt vom gewählten Backend ab.',
          'Hersteller: Rin Chat LLC, ein Unternehmen in Utah, USA, laut Kontaktseite.',
          'Pflege: Version 1.0.4 stammt vom 20. November 2026, was auf aktive Entwicklung hindeutet, die Website nennt sie aber weiterhin eine offene Beta.',
          'Kosten: kostenlos für die private, nichtkommerzielle Nutzung unter einer proprietären Lizenz.',
          'Lücken: Closed Source, verpflichtende Nutzungsstatistiken, ein nicht signierter Windows-Installer, kein macOS- und kein veröffentlichter Android-Build und kein Praxistest durch PromptQuorum.',
        ],
      },
      getItRinChat: {
        id: 'get-it',
        title: 'Rin Chat herunterladen',
        content: [
          '**Rin Chat wird wie jede Desktop-App installiert, ein Terminal ist nicht nötig.** Laden Sie den Build für Ihr System von der offiziellen Website herunter; danach aktualisiert sich die App selbst.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            Plattform: 'Windows',
            Bezugsquelle: '[Download für Windows](https://rin.chat/download/) — Windows 10 oder 11, 64-Bit-Installer; nicht signiert, daher warnt SmartScreen',
          },
          {
            Plattform: 'Linux',
            Bezugsquelle: '[AppImage oder .deb herunterladen](https://rin.chat/download/) — 64-Bit x86 (amd64)',
          },
          {
            Plattform: 'Mac und Android',
            Bezugsquelle: 'Noch kein Download; laut Hersteller ist macOS in Arbeit, ohne Termin, und Android ist angekündigt, hat aber weder Download-Seite noch Store-Eintrag',
          },
          {
            Plattform: 'Website',
            Bezugsquelle: '[rin.chat](https://rin.chat/)',
          },
          {
            Plattform: 'Datenschutzerklärung',
            Bezugsquelle: '[Rin-Chat-Datenschutzerklärung](https://rin.chat/privacy/)',
          },
        ],
        note: 'Die Download-Seite nennt die App eine offene Beta. Ein öffentliches Quellcode-Repository wurde nicht gefunden.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Rin Chat im Überblick',
        columns: ['Merkmal', 'Rin Chat'],
        rows: [
          { Merkmal: 'Plattform', 'Rin Chat': 'Windows 10/11, 64-Bit-Linux-Desktop' },
          { Merkmal: 'Preis', 'Rin Chat': 'Gratis für private Nutzung' },
          { Merkmal: 'Lizenz', 'Rin Chat': 'Proprietär, Closed Source' },
          { Merkmal: 'Modell', 'Rin Chat': 'Keins enthalten; lokales Backend oder OpenAI-kompatible API' },
          { Merkmal: 'Kartenformate', 'Rin Chat': 'V1-, V2-, V3-Karten (PNG), Lorebooks' },
          { Merkmal: 'Gruppenchats', 'Rin Chat': 'Ja, laut Hersteller' },
          { Merkmal: 'Speicher', 'Rin Chat': 'AES-256-GCM-verschlüsselt, auf Ihrem Computer' },
          { Merkmal: 'Hersteller', 'Rin Chat': 'Rin Chat LLC (USA)' },
        ],
        note: 'Eine fehlende Angabe auf der Website des Herstellers bedeutet unbekannt, nicht nicht unterstützt.',
      },
      whatIsRinChat: {
        id: 'what-is-rin-chat',
        title: 'Was Rin Chat ist',
        content: [
          '**Rin Chat ist ein Desktop-Frontend für Charakter-Chat und Rollenspiel: Es hält die Charaktere, Lorebooks und den Chatverlauf, und ein von Ihnen verbundenes Modell schreibt die Antworten.** Es enthält kein Sprachmodell. Der Hersteller Rin Chat LLC betreibt auch [AI Character Cards](https://aicharactercards.com/), eine Seite, auf der Menschen Charakterkarten teilen und aus der die App importieren kann.',
          'Die App richtet sich an dieselben Leser wie SillyTavern, aber als fertiges Programm mit Installer, eingebauten Updates und geführter Backend-Einrichtung statt einer selbst gehosteten Weboberfläche.',
          'Diese Rezension stützt sich auf die Website, die Richtlinien und das Changelog des Herstellers. PromptQuorum hat Rin Chat weder installiert noch getestet; wie gut eine Funktion arbeitet, ist daher eine Aussage des Herstellers.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus Installation, Backend-Wahl und einer Charakterkarte.** Die Schritte folgen der Kurzanleitung des Herstellers.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie den Build aus der Tabelle „Rin Chat herunterladen“ oben herunter. Unter Windows ist der Installer nicht signiert, daher zeigt SmartScreen eine Warnung; installieren Sie ihn nur, wenn Sie der Quelle vertrauen.',
          },
          {
            title: 'Backend wählen',
            whyItMatters: 'Wählen Sie eine lokale App (Ollama, KoboldCpp oder LM Studio, keine davon braucht einen Schlüssel) oder einen OpenAI-kompatiblen Dienst mit eigenem API-Schlüssel. Die App kann Ollama installieren oder KoboldCpp für Sie herunterladen und starten.',
          },
          {
            title: 'Charakter öffnen oder importieren',
            whyItMatters: 'Öffnen Sie eine Datei von SillyTavern oder AI Character Cards oder importieren Sie eine Karte per Link von einer unterstützten Seite.',
          },
          {
            title: 'Datenoptionen prüfen',
            whyItMatters: 'Prüfen Sie unter Einstellungen, Daten und Sicherung, die optionalen Statistiken, und notieren Sie die Wiederherstellungsphrase aus 24 Wörtern für Ihre verschlüsselte Bibliothek.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Der Funktionsumfang dreht sich um Karten, Spielmechanik und Datenschutz.** Alles Folgende stammt von der Funktionsseite und dem Changelog des Herstellers.',
        ],
        items: [
          '**Import von Karten und Lorebooks.** Sie liest Charakterkarten der Versionen V1, V2 und V3, auch in ein PNG eingebettete Karten, sowie eigenständige Lorebooks; Links funktionieren von Chub, RisuRealm, Pygmalion, Perchance und AI Character Cards.',
          '**Abenteuer-Modus.** Das Modell spielt den Spielleiter, während die App als Schiedsrichter fungiert: Sie würfelt, verfolgt Werte und macht sie sauber rückgängig, wenn Sie eine Nachricht bearbeiten oder neu würfeln.',
          '**Dokumentstile.** Karten können gestaltete Dokumente im Chat festlegen, etwa Mitteilungen, Briefe, Steckbriefe und Terminal-Bildschirme; dreißig Stile sind eingebaut.',
          '**Karten-Schmiede.** Ein dialogbasierter Editor, der auf Ihrem verbundenen Modell läuft und beim Erstellen und Bearbeiten von Karten, Lorebooks und anderen App-Elementen hilft.',
          '**Gruppen, Sprache und Bilder.** Gruppenchats, mitgelieferte Offline-Sprachausgabe (Piper, Kokoro, Pocket TTS), Offline-Diktat mit Whisper und Bilderzeugung über Werkzeuge wie Automatic1111, Forge, SwarmUI und ComfyUI.',
          '**Reichweite.** Ein Discord-Bot und Fernzugriff aus dem Browser eines Smartphones.',
          '**Sprachen.** Die Funktionsseite nennt sieben Oberflächensprachen: Englisch, vereinfachtes Chinesisch, Japanisch, Spanisch, Deutsch, Französisch und Russisch; die FAQ der Startseite nennt fünf.',
        ],
      },
      backendsHardware: {
        id: 'backends-hardware',
        title: 'Backends und Hardware',
        content: [
          '**Rin Chat bringt kein Modell mit; es braucht ein Backend.** Lokale Optionen sind LM Studio, Ollama und KoboldCpp auf ihren lokalen Standard-Ports, und jeder OpenAI-kompatible Endpunkt funktioniert mit einem API-Schlüssel. Voreinstellungen gibt es für Z.AI, OpenRouter, NanoGPT, OpenAI, DeepSeek und xAI Grok.',
          'Die Website nennt für die App selbst keine Mindestanforderung an RAM oder GPU; welche Hardware Sie brauchen, hängt also vom ausgeführten Modell ab. PromptQuorum hat keine Leistungswerte nachgemessen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz, Lizenz und Kosten',
        content: [
          '**Laut Hersteller werden Karten und Chats auf Ihrem Computer mit AES-256-GCM verschlüsselt, geschützt durch Ihr Passwort oder den Schlüsselbund des Betriebssystems, mit einer Wiederherstellungsphrase aus 24 Wörtern.** Laut Datenschutzerklärung gehen Anfragen direkt von Ihrem Gerät an den gewählten Anbieter und laufen nicht über die Server des Herstellers.',
          'Die Nutzungsbedingungen sagen, die App sende bei Installation und Start Nutzungsstatistiken (eine zufällige Installations-ID, Version, Betriebssystem, Architektur, Paketformat und Sprache) und das lasse sich „nicht abschalten“; die Datenschutzerklärung sagt, dass sie nie Prompts oder Charaktere enthalten. Weitere Statistiken, etwa zu genutzten Anbietern, sind optional. Die Website nutzt Google Analytics, in der EU, im Vereinigten Königreich und in der Schweiz mit Einwilligung. Die Erklärung erwähnt zudem ein optionales Rin-Chat-Abonnement mit Konto; PromptQuorum hat dafür keinen Preis gefunden.',
          'Die Lizenz macht Rin Chat proprietär und kostenlos für die private, nichtkommerzielle Nutzung, und Nutzer müssen mindestens 18 Jahre alt sein. Die App ist Closed Source, und PromptQuorum hat weder ihre Speicherung noch ihren Netzwerkverkehr untersucht, nichts davon ist also überprüft.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile und Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            Vorteil: 'Fertige Desktop-App',
            'Bedeutung im Alltag': 'Installieren, Backend verbinden, chatten; mit Auto-Updates.',
            'Einschränkung / Hinweis': 'Vorerst nur Windows und Linux; der Windows-Installer ist nicht signiert.',
          },
          {
            Vorteil: 'Öffnet vorhandene Karten',
            'Bedeutung im Alltag': 'SillyTavern- und AI-Character-Cards-Dateien laufen unverändert.',
            'Einschränkung / Hinweis': 'Die Importqualität wurde hier nicht getestet.',
          },
          {
            Vorteil: 'Abenteuer-Modus',
            'Bedeutung im Alltag': 'Die App würfelt und verfolgt Werte, das Modell erfindet sie nicht.',
            'Einschränkung / Hinweis': 'Pro Karte einzurichten; nicht von PromptQuorum getestet.',
          },
          {
            Vorteil: 'Verschlüsselter Speicher',
            'Bedeutung im Alltag': 'Laut Hersteller sind Karten und Chats ohne Passwort oder Schlüssel unlesbar.',
            'Einschränkung / Hinweis': 'Closed Source, die Verschlüsselung lässt sich nicht prüfen.',
          },
          {
            Vorteil: 'Flexible Backends',
            'Bedeutung im Alltag': 'Ollama, KoboldCpp, LM Studio oder eine Cloud-API nutzen.',
            'Einschränkung / Hinweis': 'Kein Modell enthalten; Cloud-APIs senden Prompts vom Rechner.',
          },
          {
            Vorteil: 'Kostenlos nutzbar',
            'Bedeutung im Alltag': 'Laut Hersteller sind weder Test noch Konto nötig.',
            'Einschränkung / Hinweis': 'Nur private Nutzung; Nutzungsstatistiken sind verpflichtend.',
          },
          {
            Vorteil: 'Aktive Entwicklung',
            'Bedeutung im Alltag': 'Version 1.0.4 stammt vom 20. November 2026.',
            'Einschränkung / Hinweis': 'Noch offene Beta, Ecken und Kanten sind möglich.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Rin Chat im Vergleich zu Alternativen',
        content: [
          'Das sind die nächstliegenden Rollenspiel-Frontends im Verzeichnis: die am stärksten anpassbare selbst gehostete Option, eine mit Server-Modus für mehrere Nutzer, ein schlankerer Multiplattform-Client und eine Desktop-App mit eingebautem Charakter-Hub.',
        ],
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Rolle', 'Wichtigster Unterschied'],
        rows: [
          {
            App: 'Rin Chat',
            Plattformen: 'Windows, Linux',
            'Preis und Lizenz': 'Gratis, proprietär',
            Rolle: 'Desktop-Rollenspiel-App',
            'Wichtigster Unterschied': 'Verschlüsselter Speicher, Würfel, Werte; Closed Source',
          },
          {
            App: 'SillyTavern',
            Plattformen: 'Windows, Mac, Linux',
            'Preis und Lizenz': 'Gratis, AGPL-3.0',
            Rolle: 'Selbst gehostetes Rollenspiel-Frontend',
            'Wichtigster Unterschied': 'Größte Anpassbarkeit; Node.js-Einrichtung nötig',
          },
          {
            App: '[RisuAI](/de/power-local-llm/risuai-review)',
            Plattformen: 'Web, Desktop, Mobil',
            'Preis und Lizenz': 'Gratis, GPL-3.0',
            Rolle: 'Rollenspiel-Frontend',
            'Wichtigster Unterschied': 'Mobilfreundlich; Open Source',
          },
          {
            App: '[Agnai](/de/power-local-llm/agnai-review)',
            Plattformen: 'Web',
            'Preis und Lizenz': 'Gratis, AGPL-3.0',
            Rolle: 'Rollenspiel-Frontend für mehrere Nutzer',
            'Wichtigster Unterschied': 'Gemeinsamer Server-Modus; Open Source',
          },
          {
            App: '[Backyard AI](/de/power-local-llm/backyard-ai-review-local-roleplay)',
            Plattformen: 'Windows, Mac, Linux',
            'Preis und Lizenz': 'Gratis-Tarif, proprietär',
            Rolle: 'Desktop-Charakter-Chat',
            'Wichtigster Unterschied': 'Eingebauter Charakter-Hub',
          },
        ],
        note: 'Plattform-, Preis- und Funktionsangaben zu Apps von Drittanbietern ändern sich häufig. Prüfen Sie die aktuellen Angaben auf der Seite des jeweiligen Projekts, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen Rin Chat geeignet ist',
        items: [
          '**Rollenspieler, die einen Installer wollen.** Weder Node.js noch eine Server-Einrichtung ist nötig.',
          '**Menschen mit vorhandenen Charakterkarten.** Dateien von SillyTavern und AI Character Cards öffnen sich direkt.',
          '**Datenschutzbewusste Nutzer unter Windows oder Linux.** Verschlüsselter lokaler Speicher, mit einem lokalen Backend für einen vollständig lokalen Chat.',
          '**Spieler im Spielleiter-Stil.** Die App übernimmt Würfel und Werte.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen Rin Chat nicht geeignet ist',
        items: [
          '**Alle, die Open-Source-Code brauchen.** Die App ist proprietär.',
          '**Mac- und Smartphone-Nutzer.** Es gibt noch keinen macOS- und keinen veröffentlichten Android-Build.',
          '**Kommerzielle Nutzer.** Die Lizenz deckt die private, nichtkommerzielle Nutzung ab.',
          '**Alle, die keinerlei Telemetrie wollen.** Laut Nutzungsbedingungen lassen sich die grundlegenden Nutzungsstatistiken nicht abschalten.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Rin Chat offline?',
            a: 'Nur mit einem lokalen Backend wie Ollama, KoboldCpp oder LM Studio, das auf Ihrem Computer läuft; die App bringt kein Modell mit. Sie sendet außerdem bei Installation und Start Nutzungsstatistiken, daher kann PromptQuorum sie nicht als vollständig offline bezeichnen.',
          },
          {
            q: 'Ist Rin Chat kostenlos?',
            a: 'Die Startseite sagt, alle Funktionen seien ohne Test und ohne Konto freigeschaltet. Ein Rin-Chat-Abonnement taucht in der Datenschutzerklärung auf, ein Preis wurde nicht gefunden.',
          },
          {
            q: 'Kann ich meine SillyTavern-Karten verwenden?',
            a: 'Laut Hersteller funktionieren SillyTavern-Karten unverändert, und die App öffnet auch Dateien von AI Character Cards.',
          },
          {
            q: 'Gibt es eine Mac- oder Android-Version?',
            a: 'Noch nicht. Laut Hersteller ist macOS in Arbeit, ohne Termin, und Android ist angekündigt, hat aber weder Download-Seite noch Store-Eintrag.',
          },
          {
            q: 'Wer macht Rin Chat?',
            a: 'Rin Chat LLC, ein US-Unternehmen mit einer Adresse in Utah auf der Kontaktseite; die Nutzungsbedingungen unterliegen dem Recht von Utah.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Rin Chat passt, wenn Sie eine fertige Windows- oder Linux-App für Charakter-Chat wollen, die Dateien von SillyTavern und AI Character Cards öffnet, ihre Daten verschlüsselt auf Ihrem Computer hält und Würfel und Werte ergänzt. Am 20. November 2026 erschien Version 1.0.4.',
          'Die Vorbehalte sind Closed Source, verpflichtende Nutzungsstatistiken, ein nicht signierter Windows-Installer, kein Mac- und kein veröffentlichter Android-Build, die Kennzeichnung als offene Beta und Aussagen, die PromptQuorum nicht prüfen konnte. Probieren Sie es mit einer Karte und einem lokalen Backend aus, bevor Sie eine große Bibliothek umziehen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Rin-Chat-Website](https://rin.chat/) — Überblick, Funktionen und FAQ.',
          '[Download-Seite](https://rin.chat/download/) — Plattformen und Installer.',
          '[Changelog](https://rin.chat/changelog) — Version 1.0.4 und Veröffentlichungsdaten.',
          '[Funktionen](https://rin.chat/features/) und [Kurzanleitung](https://rin.chat/quickstart/) — Kartenformate, Backends und Einrichtung.',
          '[Datenschutzerklärung](https://rin.chat/privacy/), [Nutzungsbedingungen](https://rin.chat/terms/) und [Lizenz](https://rin.chat/license/) — Datenverarbeitung, Statistiken, anwendbares Recht und Lizenzierung.',
          '[Kontaktseite](https://rin.chat/contact/) — Unternehmensangaben.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[RisuAI Rezension](/de/power-local-llm/risuai-review) — ein Open-Source-Rollenspiel-Frontend für Web, Desktop und Mobilgeräte.',
          '[Agnai Rezension](/de/power-local-llm/agnai-review) — ein Rollenspiel-Frontend für mehrere Nutzer.',
          '[Backyard AI Rezension](/de/power-local-llm/backyard-ai-review-local-roleplay) — eine Desktop-App für Charakter-Chat mit eingebautem Charakter-Hub.',
          '[SillyTavern vs Agnai vs RisuAI](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — die drei wichtigsten Rollenspiel-Frontends im Vergleich.',
          '[Das vollständige Local LLM Software Directory](/de/directory) — ein breiteres Verzeichnis lokaler KI-Werkzeuge über Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Creative & Roleplay',
    heroImage: '/images/rin-chat-review-hero-fr.webp',
    title: 'Test de Rin Chat : application de bureau gratuite pour le jeu de rôle IA',
    seoTitle: 'Test de Rin Chat : application gratuite de jeu de rôle IA',
    intro: "Rin Chat est une application de bureau gratuite pour le jeu de rôle avec l'IA et la discussion avec des personnages, sous Windows et Linux. Elle se connecte à un backend local comme Ollama, KoboldCpp ou LM Studio, ou à toute API compatible OpenAI, et ouvre directement les cartes de personnage et les lorebooks de SillyTavern et d'AI Character Cards. Ce test couvre les téléchargements, les fonctionnalités, la confidentialité, les limites et les alternatives ; PromptQuorum a lu les pages de l'éditeur mais n'a pas testé l'application.",
    metaDescription: "Test de Rin Chat : application gratuite de jeu de rôle pour Windows et Linux, cartes chiffrées, dés de maître du jeu et forge de cartes, avec Ollama.",
    twitterDescription: "Test de Rin Chat : une application de bureau gratuite de jeu de rôle pour Windows et Linux, avec cartes de personnage chiffrées, dés d'aventure et forge de cartes. Confidentialité, limites et alternatives.",
    audience: "Joueurs de rôle et utilisateurs de discussions avec personnages qui veulent une application de bureau prête à l'emploi plutôt qu'une interface auto-hébergée, avec des modèles locaux ou cloud — couvre les téléchargements, les fonctionnalités, la confidentialité, les limites et les alternatives.",
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rin Chat review',
    targetKeywords: [
      'test rin chat',
      'rin chat jeu de rôle ia',
      'alternative sillytavern application de bureau',
      'discussion avec personnages ia windows linux',
      'application jeu de rôle ollama koboldcpp',
      'application de jeu de rôle ia chiffrée',
      'application cartes de personnage lorebooks',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: "**Rin Chat est une application de bureau gratuite pour Windows et Linux qui fait tourner le jeu de rôle IA et la discussion avec des personnages sur un modèle que vous connectez, local ou cloud.** Elle lit les fichiers de SillyTavern et d'AI Character Cards, ajoute un mode maître du jeu avec dés et statistiques et, selon l'éditeur, stocke cartes et conversations chiffrées sur votre ordinateur. Elle est à code fermé et présentée comme une bêta ouverte, les conditions d'utilisation indiquent que les statistiques d'usage ne peuvent pas être désactivées, et PromptQuorum ne l'a pas testée.",
    quickAnswerTop: {
      fr: {
        question: 'Rin Chat est-elle une application locale de jeu de rôle IA ?',
        answer: "En partie. L'application s'exécute sur votre ordinateur et y stocke ses données, mais elle n'embarque aucun modèle : vous connectez Ollama, KoboldCpp, LM Studio ou tout service compatible OpenAI. Avec un backend local, la conversation reste sur votre machine ; avec une API cloud, les prompts partent de votre appareil vers ce fournisseur, selon la politique de confidentialité de l'éditeur.",
        bullets: [
          "Elle ouvre les cartes de personnage V1, V2 et V3, y compris celles intégrées dans des images PNG, ainsi que les lorebooks.",
          "Cartes et conversations sont stockées avec un chiffrement AES-256-GCM sur votre ordinateur, selon l'éditeur.",
          "Des versions existent pour Windows 10 ou 11 et pour Linux 64 bits ; macOS n'a pas de date de sortie et aucune version Android n'est encore proposée.",
          "L'application est à code fermé : ses affirmations ne peuvent pas être vérifiées dans le code.",
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Rin Chat', anchor: 'get-it' },
      { label: "Rin Chat en un coup d'œil", anchor: 'at-a-glance' },
      { label: "Ce qu'est Rin Chat", anchor: 'what-is-rin-chat' },
      { label: 'Premiers pas', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Backends et matériel', anchor: 'backends-hardware' },
      { label: 'Confidentialité, licence et coût', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
      { label: 'Rin Chat face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Pour qui Rin Chat est adapté', anchor: 'who-should-use' },
      { label: "Pour qui Rin Chat n'est pas adapté", anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "Rin Chat est une application de bureau gratuite où vous discutez avec des personnages IA issus de fichiers de cartes et jouez avec des règles de jeu de rôle simples, grâce à un modèle local ou cloud que vous connectez vous-même.",
          },
          {
            type: 'plain-terms',
            text: "Imaginez l'idée de SillyTavern sous forme d'application prête à installer : vous la téléchargez, la pointez vers Ollama ou une clé d'API, et ouvrez une carte de personnage.",
          },
        ],
        items: [
          "Affirmation locale : l'application et ses données restent sur l'ordinateur ; que la conversation elle-même reste locale dépend du backend choisi.",
          "Éditeur : Rin Chat LLC, une société de l'Utah, aux États-Unis, selon sa page de contact.",
          "Maintenance : la version 1.0.4 date du 20 novembre 2026, ce qui indique un développement actif, mais le site la présente toujours comme une bêta ouverte.",
          "Coût : gratuit pour un usage personnel non commercial, sous licence propriétaire.",
          "Lacunes : code fermé, statistiques d'usage obligatoires, installateur Windows non signé, pas de version macOS ni de version Android publiée, et pas de test pratique par PromptQuorum.",
        ],
      },
      getItRinChat: {
        id: 'get-it',
        title: 'Obtenir Rin Chat',
        content: [
          "**Rin Chat s'installe comme n'importe quelle application de bureau, aucun terminal n'est donc nécessaire.** Téléchargez la version de votre système sur le site officiel ; l'application se met ensuite à jour toute seule.",
        ],
        columns: ['Plateforme', 'Où le trouver'],
        rows: [
          {
            Plateforme: 'Windows',
            'Où le trouver': '[Télécharger pour Windows](https://rin.chat/download/) — Windows 10/11, 64 bits ; non signé, SmartScreen avertit',
          },
          {
            Plateforme: 'Linux',
            'Où le trouver': "[Télécharger l'AppImage ou le .deb](https://rin.chat/download/) — x86 64 bits (amd64)",
          },
          {
            Plateforme: 'Mac et Android',
            'Où le trouver': "Pas encore de téléchargement ; selon l'éditeur, macOS est en cours, sans date, et Android est annoncé mais n'a ni page de téléchargement ni fiche de boutique",
          },
          {
            Plateforme: 'Site web',
            'Où le trouver': '[rin.chat](https://rin.chat/)',
          },
          {
            Plateforme: 'Politique de confidentialité',
            'Où le trouver': '[Confidentialité de Rin Chat](https://rin.chat/privacy/)',
          },
        ],
        note: "La page de téléchargement indique que l'application est une bêta ouverte. Aucun dépôt de code source public n'a été trouvé.",
      },
      atAGlance: {
        id: 'at-a-glance',
        title: "Rin Chat en un coup d'œil",
        columns: ['Attribut', 'Rin Chat'],
        rows: [
          { Attribut: 'Plateforme', 'Rin Chat': 'Windows 10/11, bureau Linux 64 bits' },
          { Attribut: 'Prix', 'Rin Chat': 'Gratuit pour un usage personnel' },
          { Attribut: 'Licence', 'Rin Chat': 'Propriétaire, code fermé' },
          { Attribut: 'Modèle', 'Rin Chat': 'Aucun fourni ; backend local ou API compatible OpenAI' },
          { Attribut: 'Formats de cartes', 'Rin Chat': 'Cartes V1, V2, V3 (PNG), lorebooks' },
          { Attribut: 'Discussions de groupe', 'Rin Chat': "Oui, selon l'éditeur" },
          { Attribut: 'Stockage', 'Rin Chat': 'Chiffré AES-256-GCM, sur votre ordinateur' },
          { Attribut: 'Éditeur', 'Rin Chat': 'Rin Chat LLC (États-Unis)' },
        ],
        note: "Une absence de mention sur le site de l'éditeur signifie « inconnu », pas « non pris en charge ».",
      },
      whatIsRinChat: {
        id: 'what-is-rin-chat',
        title: "Ce qu'est Rin Chat",
        content: [
          "**Rin Chat est une interface de bureau pour la discussion avec des personnages et le jeu de rôle : elle conserve les personnages, les lorebooks et l'historique des conversations, et un modèle que vous connectez écrit les réponses.** Elle n'inclut aucun modèle de langage. L'éditeur, Rin Chat LLC, exploite aussi [AI Character Cards](https://aicharactercards.com/), un site où l'on partage des cartes de personnage et depuis lequel l'application peut importer.",
          "Elle s'adresse aux mêmes lecteurs que SillyTavern, mais sous forme d'application toute prête, avec installateur, mises à jour intégrées et configuration guidée du backend, plutôt qu'une interface web auto-hébergée.",
          "Ce test s'appuie sur le site, les politiques et le journal des modifications de l'éditeur. PromptQuorum n'a ni installé ni testé Rin Chat ; la qualité de chaque fonction est donc une déclaration de l'éditeur.",
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Premiers pas',
        content: [
          "**La mise en route tient en une installation, un choix de backend et une carte de personnage.** Les étapes suivent le guide de démarrage de l'éditeur.",
        ],
        numberedItems: [
          {
            title: "Installer l'application",
            whyItMatters: "Téléchargez la version indiquée dans le tableau « Obtenir Rin Chat » ci-dessus. Sous Windows, l'installateur n'est pas signé, SmartScreen affiche donc un avertissement ; ne l'installez que si vous faites confiance à la source.",
          },
          {
            title: 'Choisir un backend',
            whyItMatters: "Choisissez une application locale (Ollama, KoboldCpp ou LM Studio, aucune ne demande de clé) ou un service compatible OpenAI avec votre propre clé d'API. L'application peut installer Ollama ou télécharger et lancer KoboldCpp pour vous.",
          },
          {
            title: 'Ouvrir ou importer un personnage',
            whyItMatters: "Ouvrez un fichier SillyTavern ou AI Character Cards, ou importez une carte par lien depuis un site pris en charge.",
          },
          {
            title: 'Vérifier les paramètres de données',
            whyItMatters: "Consultez Paramètres, puis Données et sauvegarde, pour les statistiques facultatives, et notez la phrase de récupération de 24 mots de votre bibliothèque chiffrée.",
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          "**L'ensemble des fonctions tourne autour des cartes, de la mécanique de jeu et de la confidentialité.** Tout ce qui suit provient de la page des fonctionnalités et du journal des modifications de l'éditeur.",
        ],
        items: [
          "**Import de cartes et de lorebooks.** Elle lit les cartes de personnage V1, V2 et V3, y compris celles intégrées dans un PNG, ainsi que des lorebooks autonomes ; les liens fonctionnent depuis Chub, RisuRealm, Pygmalion, Perchance et AI Character Cards.",
          "**Mode aventure.** Le modèle joue le maître du jeu pendant que l'application fait office d'arbitre : elle lance les dés, suit les statistiques et les annule proprement quand vous modifiez ou relancez un message.",
          "**Styles de documents.** Les cartes peuvent définir des documents mis en forme dans la conversation, comme des avis, des lettres, des avis de recherche et des écrans de terminal ; trente styles sont intégrés.",
          "**Forge de cartes.** Un éditeur conversationnel, exécuté sur votre modèle connecté, qui aide à créer et modifier des cartes, des lorebooks et d'autres éléments de l'application.",
          "**Groupes, voix et images.** Discussions de groupe, synthèse vocale hors ligne incluse (Piper, Kokoro, Pocket TTS), dictée hors ligne avec Whisper et génération d'images via des outils comme Automatic1111, Forge, SwarmUI et ComfyUI.",
          "**Portée.** Un bot Discord et un accès à distance depuis le navigateur d'un téléphone.",
          "**Langues.** La page des fonctionnalités liste sept langues d'interface : anglais, chinois simplifié, japonais, espagnol, allemand, français et russe ; la FAQ de la page d'accueil en liste cinq.",
        ],
      },
      backendsHardware: {
        id: 'backends-hardware',
        title: 'Backends et matériel',
        content: [
          "**Rin Chat n'embarque aucun modèle ; il lui faut un backend.** Les options locales sont LM Studio, Ollama et KoboldCpp sur leurs ports locaux par défaut, et tout point d'accès compatible OpenAI fonctionne avec une clé d'API. Des préréglages existent pour Z.AI, OpenRouter, NanoGPT, OpenAI, DeepSeek et xAI Grok.",
          "Le site n'indique aucun minimum de RAM ou de GPU pour l'application elle-même ; le matériel nécessaire dépend donc du modèle que vous exécutez. PromptQuorum n'a pas mesuré les performances.",
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité, licence et coût',
        content: [
          "**L'éditeur indique que cartes et conversations sont chiffrées avec AES-256-GCM sur votre ordinateur, protégées par votre mot de passe ou le trousseau du système, avec une phrase de récupération de 24 mots.** Selon la politique de confidentialité, les requêtes partent directement de votre appareil vers le fournisseur choisi et ne transitent pas par les serveurs de l'éditeur.",
          "Les conditions d'utilisation indiquent que l'application envoie des statistiques d'usage à l'installation et au lancement (un identifiant d'installation aléatoire, la version, le système d'exploitation, l'architecture, le format de paquet et la langue) et que cela « ne peut pas être désactivé » ; la politique précise qu'elles n'incluent jamais de prompts ni de personnages. D'autres statistiques, comme les fournisseurs utilisés, sont facultatives. Le site utilise Google Analytics, avec consentement dans l'UE, au Royaume-Uni et en Suisse. La politique mentionne aussi un abonnement Rin Chat facultatif et un compte ; PromptQuorum n'en a trouvé aucun prix.",
          "La licence rend Rin Chat propriétaire et gratuit pour un usage personnel non commercial, et les utilisateurs doivent avoir au moins 18 ans. L'application est à code fermé et PromptQuorum n'a inspecté ni son stockage ni son trafic réseau : rien de tout cela n'est vérifié.",
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', "En pratique", 'Limite / réserve'],
        rows: [
          {
            Avantage: 'Application de bureau prête à l\'emploi',
            "En pratique": 'Installer, connecter un backend, discuter ; MàJ auto.',
            'Limite / réserve': "Windows et Linux seulement ; installateur Windows non signé.",
          },
          {
            Avantage: 'Ouvre les cartes existantes',
            "En pratique": 'Fichiers SillyTavern et AI Character Cards : tels quels.',
            'Limite / réserve': "La qualité de l'import n'a pas été testée ici.",
          },
          {
            Avantage: 'Mode aventure',
            "En pratique": "L'application lance les dés et suit les statistiques, le modèle ne les invente pas.",
            'Limite / réserve': "À configurer par carte ; PromptQuorum ne l'a pas essayé.",
          },
          {
            Avantage: 'Stockage chiffré',
            "En pratique": 'Selon l\'éditeur, cartes et conversations illisibles sans mot de passe ou clé.',
            'Limite / réserve': 'Code fermé : le chiffrement ne peut pas être audité.',
          },
          {
            Avantage: 'Backends flexibles',
            "En pratique": 'Utiliser Ollama, KoboldCpp, LM Studio ou une API cloud.',
            'Limite / réserve': "Aucun modèle fourni ; l'API cloud fait sortir les prompts.",
          },
          {
            Avantage: 'Utilisation gratuite',
            "En pratique": "Ni essai ni compte requis, selon l'éditeur.",
            'Limite / réserve': "Usage personnel ; statistiques d'usage obligatoires.",
          },
          {
            Avantage: 'Développement actif',
            "En pratique": 'La version 1.0.4 date du 20 novembre 2026.',
            'Limite / réserve': 'Encore une bêta ouverte : des aspérités possibles.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Rin Chat face aux alternatives',
        content: [
          "Voici les interfaces de jeu de rôle les plus proches du répertoire : l'option auto-hébergée la plus personnalisable, une avec un mode serveur partagé, un client multiplateforme plus léger et une application de bureau avec un hub de personnages intégré.",
        ],
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Rôle', 'Différence clé'],
        rows: [
          {
            Application: 'Rin Chat',
            Plateformes: 'Windows, Linux',
            'Prix et licence': 'Gratuit, propriétaire',
            Rôle: 'Application de bureau de jeu de rôle',
            'Différence clé': 'Stockage chiffré, dés et statistiques ; code fermé',
          },
          {
            Application: 'SillyTavern',
            Plateformes: 'Windows, Mac, Linux',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            Rôle: 'Interface de jeu de rôle auto-hébergée',
            'Différence clé': 'Personnalisation maximale ; Node.js requis',
          },
          {
            Application: '[RisuAI](/fr/power-local-llm/risuai-review)',
            Plateformes: 'Web, bureau, mobile',
            'Prix et licence': 'Gratuit, GPL-3.0',
            Rôle: 'Interface de jeu de rôle',
            'Différence clé': 'Adapté au mobile ; open source',
          },
          {
            Application: '[Agnai](/fr/power-local-llm/agnai-review)',
            Plateformes: 'Web',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            Rôle: 'Interface de jeu de rôle multi-utilisateurs',
            'Différence clé': 'Mode serveur partagé ; open source',
          },
          {
            Application: '[Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay)',
            Plateformes: 'Windows, Mac, Linux',
            'Prix et licence': 'Offre gratuite, propriétaire',
            Rôle: 'Discussion de personnages sur le bureau',
            'Différence clé': 'Hub de personnages intégré',
          },
        ],
        note: "Les plateformes, les prix et les fonctions des applications tierces changent fréquemment. Vérifiez les détails actuels sur la page de chaque projet avant de décider.",
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui Rin Chat est adapté',
        items: [
          "**Les joueurs de rôle qui veulent un installateur.** Aucune configuration Node.js ni serveur n'est nécessaire.",
          "**Les personnes qui ont déjà des cartes de personnage.** Les fichiers SillyTavern et AI Character Cards s'ouvrent directement.",
          "**Les utilisateurs soucieux de confidentialité sous Windows ou Linux.** Stockage local chiffré, avec un backend local pour une discussion entièrement locale.",
          "**Les joueurs de style maître du jeu.** L'application gère les dés et les statistiques.",
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: "Pour qui Rin Chat n'est pas adapté",
        items: [
          "**Ceux qui ont besoin d'un code open source.** L'application est propriétaire.",
          "**Les utilisateurs de Mac et de téléphone.** Il n'existe pas encore de version macOS ni de version Android publiée.",
          "**Les utilisateurs professionnels.** La licence couvre l'usage personnel non commercial.",
          "**Ceux qui veulent zéro télémétrie.** Les conditions d'utilisation indiquent que les statistiques d'usage de base ne peuvent pas être désactivées.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Rin Chat fonctionne-t-elle hors ligne ?',
            a: "Seulement avec un backend local comme Ollama, KoboldCpp ou LM Studio exécuté sur votre ordinateur ; l'application n'embarque aucun modèle. Elle envoie aussi des statistiques d'usage à l'installation et au lancement, PromptQuorum ne peut donc pas la qualifier de totalement hors ligne.",
          },
          {
            q: 'Rin Chat est-elle gratuite ?',
            a: "La page d'accueil indique que toutes les fonctions sont débloquées, sans essai ni compte. Un abonnement Rin Chat apparaît dans la politique, sans prix trouvé.",
          },
          {
            q: 'Puis-je utiliser mes cartes SillyTavern ?',
            a: "L'éditeur indique que les cartes SillyTavern fonctionnent telles quelles, et l'application ouvre aussi les fichiers d'AI Character Cards.",
          },
          {
            q: 'Existe-t-il une version Mac ou Android ?',
            a: "Pas encore. Selon l'éditeur, macOS est en cours, sans date, et Android est annoncé mais n'a ni page de téléchargement ni fiche de boutique.",
          },
          {
            q: 'Qui édite Rin Chat ?',
            a: "Rin Chat LLC, une société américaine dont la page de contact indique une adresse dans l'Utah ; les conditions d'utilisation sont régies par le droit de l'Utah.",
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          "Rin Chat convient si vous voulez une application Windows ou Linux toute prête pour discuter avec des personnages, qui ouvre les fichiers SillyTavern et AI Character Cards, garde ses données chiffrées sur votre ordinateur et ajoute dés et statistiques. Elle a publié la version 1.0.4 le 20 novembre 2026.",
          "Les réserves tiennent au code fermé, aux statistiques d'usage obligatoires, à l'installateur Windows non signé, à l'absence de version Mac et de version Android publiée, à l'étiquette de bêta ouverte et à des affirmations que PromptQuorum n'a pas pu vérifier. Essayez-la avec une carte et un backend local avant de déplacer une grande bibliothèque.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          "[Site de Rin Chat](https://rin.chat/) — présentation, fonctions et FAQ.",
          "[Page de téléchargement](https://rin.chat/download/) — plateformes et installateurs.",
          "[Journal des modifications](https://rin.chat/changelog) — version 1.0.4 et dates de publication.",
          "[Fonctionnalités](https://rin.chat/features/) et [guide de démarrage](https://rin.chat/quickstart/) — formats de cartes, backends et mise en route.",
          "[Politique de confidentialité](https://rin.chat/privacy/), [conditions d'utilisation](https://rin.chat/terms/) et [licence](https://rin.chat/license/) — traitement des données, statistiques, droit applicable et licence.",
          "[Page de contact](https://rin.chat/contact/) — coordonnées de l'entreprise.",
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          "[Test de RisuAI](/fr/power-local-llm/risuai-review) — une interface de jeu de rôle open source pour le web, le bureau et le mobile.",
          "[Test d'Agnai](/fr/power-local-llm/agnai-review) — une interface de jeu de rôle multi-utilisateurs.",
          "[Test de Backyard AI](/fr/power-local-llm/backyard-ai-review-local-roleplay) — une application de bureau de discussion avec personnages et hub de personnages intégré.",
          "[SillyTavern vs Agnai vs RisuAI](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — les trois principales interfaces de jeu de rôle comparées.",
          "[Le répertoire complet des logiciels de LLM locaux](/fr/directory) — un répertoire plus large des outils d'IA locale, toutes plateformes.",
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Creative & Roleplay',
    heroImage: '/images/rin-chat-review-hero-ja.webp',
    title: 'Rin Chat レビュー：AIロールプレイとキャラクターチャットの無料デスクトップアプリ',
    seoTitle: 'Rin Chat レビュー：無料のAIロールプレイデスクトップアプリ',
    intro: 'Rin Chatは、WindowsとLinuxで使える、AIロールプレイとキャラクターチャット向けの無料デスクトップアプリです。Ollama、KoboldCpp、LM Studioなどのローカルバックエンド、またはOpenAI互換のAPIに接続でき、SillyTavernとAI Character Cardsのキャラクターカードやロアブックをそのまま開けます。このレビューでは、ダウンロード、機能、プライバシー、制限、代替ツールをまとめます。PromptQuorumは開発元のページを読みましたが、アプリ自体は試していません。',
    metaDescription: 'Rin Chatのレビュー：暗号化カード、ダイス付きゲームマスター、カードフォージを備えた、Windows・Linux向けの無料ロールプレイアプリ。OllamaやAPIに対応。制限も解説。',
    twitterDescription: 'Rin Chatのレビュー：暗号化されたキャラクターカード、アドベンチャーのダイス、カードフォージを備えた、WindowsとLinux向けの無料デスクトップロールプレイアプリ。プライバシー、制限、代替ツールを解説します。',
    audience: '自己ホスト型のフロントエンドではなく、すぐ使えるデスクトップアプリで、ローカルまたはクラウドのモデルを使ってロールプレイやキャラクターチャットをしたい方向け。ダウンロード、機能、プライバシー、制限、代替ツールを扱います。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rin Chat review',
    targetKeywords: [
      'rin chat レビュー',
      'rin chat ai ロールプレイ',
      'sillytavern 代替 デスクトップアプリ',
      'ai キャラクターチャット windows linux',
      'ロールプレイ アプリ ollama koboldcpp',
      '暗号化 ai ロールプレイ アプリ',
      'キャラクターカード アプリ ロアブック',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**Rin Chatは、WindowsとLinux向けの無料デスクトップアプリで、ローカルまたはクラウドで接続したモデルを使って、AIロールプレイとキャラクターチャットを行います。** SillyTavernとAI Character Cardsのファイルを読み込み、ダイスとステータスを備えたゲームマスターモードを追加し、開発元によると、カードとチャットは暗号化してお使いのコンピューターに保存されます。クローズドソースでオープンベータと表示されており、利用規約には利用統計をオフにできないとあり、PromptQuorumは試していません。',
    quickAnswerTop: {
      ja: {
        question: 'Rin ChatはローカルのAIロールプレイアプリですか？',
        answer: '一部はそうです。アプリ自体はお使いのコンピューター上で動作してデータもそこに保存しますが、モデルは付属しないため、Ollama、KoboldCpp、LM Studio、またはOpenAI互換のサービスに接続します。ローカルのバックエンドならチャットはお使いのマシンにとどまり、クラウドAPIでは、開発元のプライバシーポリシーによると、プロンプトがお使いのデバイスからそのプロバイダーへ送られます。',
        bullets: [
          'PNG画像に埋め込まれたカードを含むV1、V2、V3のキャラクターカードと、ロアブックを開けます。',
          '開発元によると、カードとチャットはAES-256-GCM暗号化で、お使いのコンピューターに保存されます。',
          'Windows 10または11と64ビットLinuxのビルドがあります。macOSは公開日未定で、Android版はまだありません。',
          'アプリはクローズドソースのため、その主張をコードで確認することはできません。',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Rin Chatの入手方法', anchor: 'get-it' },
      { label: 'Rin Chatの概要', anchor: 'at-a-glance' },
      { label: 'Rin Chatとは', anchor: 'what-is-rin-chat' },
      { label: 'はじめ方', anchor: 'how-to-get-started' },
      { label: '機能', anchor: 'features' },
      { label: 'バックエンドとハードウェア', anchor: 'backends-hardware' },
      { label: 'プライバシー・ライセンス・費用', anchor: 'privacy' },
      { label: 'メリットと制限', anchor: 'tradeoffs' },
      { label: 'Rin Chatと代替ツールの比較', anchor: 'vs-alternatives' },
      { label: 'Rin Chatが向いている人', anchor: 'who-should-use' },
      { label: 'Rin Chatが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Rin Chatは、カードファイルのAIキャラクターとチャットし、軽いロールプレイングゲームのルールも使える無料のデスクトップアプリで、ご自身で接続したローカルまたはクラウドのモデルを使います。',
          },
          {
            type: 'plain-terms',
            text: 'SillyTavernの発想をすぐインストールできる形にしたものだと考えてください。ダウンロードして、OllamaまたはAPIキーを指定し、キャラクターカードを開きます。',
          },
        ],
        items: [
          'ローカルの主張：アプリとそのデータはコンピューター内にとどまります。チャット自体がローカルにとどまるかどうかは、選ぶバックエンド次第です。',
          '開発元：連絡先ページによると、米国ユタ州の企業Rin Chat LLCです。',
          'メンテナンス：バージョン1.0.4は2026年11月20日付で、開発が活発であることがわかりますが、サイトはまだオープンベータと表示しています。',
          '費用：プロプライエタリのライセンスで、個人の非商用利用なら無料です。',
          '不足点：クローズドソースであること、必須の利用統計、署名のないWindowsインストーラー、macOS版とリリース済みのAndroid版がないこと、PromptQuorumによる実機テストがないことです。',
        ],
      },
      getItRinChat: {
        id: 'get-it',
        title: 'Rin Chatの入手方法',
        content: [
          '**Rin Chatはほかのデスクトップアプリと同じようにインストールできるため、ターミナルは不要です。** 公式サイトからお使いのシステム用のビルドをダウンロードします。その後、アプリは自動的に更新されます。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Windows',
            '入手先': '[Windows版をダウンロード](https://rin.chat/download/) — Windows 10または11、64ビットのインストーラー。コード署名なしのためSmartScreenが警告を表示',
          },
          {
            'プラットフォーム': 'Linux',
            '入手先': '[AppImageまたは.debをダウンロード](https://rin.chat/download/) — 64ビットx86（amd64）',
          },
          {
            'プラットフォーム': 'MacとAndroid',
            '入手先': 'ダウンロードはまだありません。開発元によるとmacOSは開発中で日程未定、Androidは発表済みですがダウンロードページもストア掲載もありません',
          },
          {
            'プラットフォーム': '公式サイト',
            '入手先': '[rin.chat](https://rin.chat/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[Rin Chatのプライバシーポリシー](https://rin.chat/privacy/)',
          },
        ],
        note: 'ダウンロードページには、アプリがオープンベータだと書かれています。公開されたソースリポジトリは見つかりませんでした。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Rin Chatの概要',
        columns: ['項目', 'Rin Chat'],
        rows: [
          { '項目': 'プラットフォーム', 'Rin Chat': 'Windows 10/11、64ビットLinuxのデスクトップ' },
          { '項目': '価格', 'Rin Chat': '個人利用は無料' },
          { '項目': 'ライセンス', 'Rin Chat': 'プロプライエタリ、クローズドソース' },
          { '項目': 'モデル', 'Rin Chat': '同梱なし。ローカルバックエンドまたはOpenAI互換API' },
          { '項目': 'カード形式', 'Rin Chat': 'V1、V2、V3カード（PNG）、ロアブック' },
          { '項目': 'グループチャット', 'Rin Chat': '開発元によると対応' },
          { '項目': '保存', 'Rin Chat': 'AES-256-GCM暗号化、お使いのコンピューター内' },
          { '項目': '開発元', 'Rin Chat': 'Rin Chat LLC（米国）' },
        ],
        note: '開発元のサイトに記載がない項目は、未対応ではなく不明という意味です。',
      },
      whatIsRinChat: {
        id: 'what-is-rin-chat',
        title: 'Rin Chatとは',
        content: [
          '**Rin Chatは、キャラクターチャットとロールプレイのためのデスクトップ用フロントエンドです。キャラクター、ロアブック、チャット履歴を管理し、返信は接続したモデルが書きます。** 言語モデルは含まれていません。開発元のRin Chat LLCは、キャラクターカードを共有するサイト[AI Character Cards](https://aicharactercards.com/)も運営しており、アプリはそこからインポートできます。',
          'SillyTavernと同じ層の人を対象にしていますが、自己ホスト型のWebインターフェースではなく、インストーラー、内蔵の更新、案内付きのバックエンド設定を備えたパッケージ版のアプリです。',
          'このレビューは、開発元のウェブサイト、ポリシー、変更履歴に基づいています。PromptQuorumはRin Chatをインストールも試用もしていないため、各機能の出来は開発元の説明です。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'はじめ方',
        content: [
          '**セットアップは、インストール、バックエンドの選択、キャラクターカードの3段階です。** 手順は開発元のクイックスタートに沿っています。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '上の「Rin Chatの入手方法」の表からビルドをダウンロードします。Windowsのインストーラーはコード署名されていないため、SmartScreenが警告を表示します。提供元を信頼できる場合にのみインストールしてください。',
          },
          {
            title: 'バックエンドを選ぶ',
            whyItMatters: 'ローカルのアプリ（Ollama、KoboldCpp、LM Studio。いずれもキー不要）か、ご自身のAPIキーを使うOpenAI互換のサービスを選びます。アプリはOllamaのインストールや、KoboldCppのダウンロードと実行も代行できます。',
          },
          {
            title: 'キャラクターを開く、またはインポートする',
            whyItMatters: 'SillyTavernまたはAI Character Cardsのファイルを開くか、対応サイトのリンクからカードをインポートします。',
          },
          {
            title: 'データの設定を確認する',
            whyItMatters: '設定の「データとバックアップ」で任意の利用統計を確認し、暗号化されたライブラリ用の24語のリカバリーフレーズを書き留めておきます。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**機能の中心は、カード、ゲームの仕組み、プライバシーです。** 以下はすべて、開発元の機能ページと変更履歴に基づいています。',
        ],
        items: [
          '**カードとロアブックのインポート。** PNGに埋め込まれたカードを含むV1、V2、V3のキャラクターカードと、単体のロアブックを読み込めます。Chub、RisuRealm、Pygmalion、Perchance、AI Character Cardsからはリンクで取り込めます。',
          '**アドベンチャーモード。** モデルがゲームマスターを務め、アプリが審判としてダイスを振り、ステータスを管理し、メッセージを編集したり再生成したりしたときにはきれいに元へ戻します。',
          '**ドキュメントスタイル。** カードは、通知、手紙、賞金首のポスター、ターミナル画面など、スタイル付きのチャット内ドキュメントを定義できます。30種類のスタイルが内蔵されています。',
          '**カードフォージ。** 接続したモデルで動く対話型のエディターで、カード、ロアブック、そのほかのアプリ要素の作成と編集を手伝います。',
          '**グループ、音声、画像。** グループチャット、同梱のオフライン音声合成（Piper、Kokoro、Pocket TTS）、Whisperによるオフラインの音声入力、そしてAutomatic1111、Forge、SwarmUI、ComfyUIなどのツールを使った画像生成に対応します。',
          '**利用の幅。** Discordボットと、スマートフォンのブラウザーからのリモートアクセスがあります。',
          '**言語。** 機能ページには7つのインターフェース言語（英語、簡体字中国語、日本語、スペイン語、ドイツ語、フランス語、ロシア語）が挙げられていますが、ホームページのFAQでは5つです。',
        ],
      },
      backendsHardware: {
        id: 'backends-hardware',
        title: 'バックエンドとハードウェア',
        content: [
          '**Rin Chatにはモデルが付属せず、バックエンドが必要です。** ローカルの選択肢はLM Studio、Ollama、KoboldCppで、それぞれの既定のローカルポートに接続します。OpenAI互換のエンドポイントなら、APIキーで利用できます。Z.AI、OpenRouter、NanoGPT、OpenAI、DeepSeek、xAI Grok用のプリセットがあります。',
          'サイトにはアプリ自体に必要なRAMやGPUの最小要件が書かれていないため、必要なハードウェアは動かすモデル次第です。PromptQuorumは性能を測定していません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー・ライセンス・費用',
        content: [
          '**開発元によると、カードとチャットはAES-256-GCMで暗号化されてお使いのコンピューターに保存され、パスワードまたはOSのキーチェーンで保護され、24語のリカバリーフレーズが付きます。** ポリシーによると、リクエストはお使いのデバイスから選んだプロバイダーへ直接送られ、開発元のサーバーを経由しません。',
          '利用規約には、アプリはインストール時と起動時に利用統計（ランダムなインストールID、バージョン、オペレーティングシステム、アーキテクチャ、パッケージ形式、言語）を送信し、これは「オフにできない」と書かれています。ポリシーによると、プロンプトやキャラクターが含まれることはありません。使用したプロバイダーなどのさらなる統計は任意です。ウェブサイトではGoogle Analyticsを使っており、EU、英国、スイスでは同意を得ています。ポリシーには、任意のRin Chatのサブスクリプションとアカウントにも触れられていますが、PromptQuorumは価格を見つけられませんでした。',
          'ライセンス上、Rin Chatはプロプライエタリで、個人の非商用利用なら無料であり、利用者は18歳以上である必要があります。アプリはクローズドソースで、PromptQuorumはそのストレージもネットワーク通信も調べていないため、これらはいずれも未確認です。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'メリットと制限',
        columns: ['メリット', '実際の使い勝手', '制限・注意点'],
        rows: [
          {
            'メリット': 'パッケージ版のデスクトップアプリ',
            '実際の使い勝手': 'インストールしてバックエンドを接続すればチャットでき、更新も内蔵です。',
            '制限・注意点': '今のところWindowsとLinuxのみで、Windowsのインストーラーは署名なしです。',
          },
          {
            'メリット': '既存のカードを開ける',
            '実際の使い勝手': 'SillyTavernとAI Character Cardsのファイルやロアブックがそのまま使えます。',
            '制限・注意点': 'インポートの質はここでは試していません。',
          },
          {
            'メリット': 'アドベンチャーモード',
            '実際の使い勝手': 'アプリがダイスを振りステータスを管理するため、モデルが数値を作り出しません。',
            '制限・注意点': 'カードごとに設定が必要で、PromptQuorumは試していません。',
          },
          {
            'メリット': '暗号化された保存',
            '実際の使い勝手': '開発元によると、パスワードまたはキーがなければ、カードとチャットは読めません。',
            '制限・注意点': 'クローズドソースのため、暗号化を監査できません。',
          },
          {
            'メリット': '柔軟なバックエンド',
            '実際の使い勝手': 'Ollama、KoboldCpp、LM Studio、またはクラウドAPIを使えます。',
            '制限・注意点': 'モデルは含まれず、クラウドAPIではプロンプトがお使いのマシンの外へ送られます。',
          },
          {
            'メリット': '無料で利用可能',
            '実際の使い勝手': '開発元によると、試用期間もアカウントも不要です。',
            '制限・注意点': '個人利用のみで、利用統計は必須です。',
          },
          {
            'メリット': '活発な開発',
            '実際の使い勝手': 'バージョン1.0.4は2026年11月20日付です。',
            '制限・注意点': 'まだオープンベータと表示されているため、粗い部分があると考えてください。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Rin Chatと代替ツールの比較',
        content: [
          'ディレクトリ内で最も近いロールプレイ用フロントエンドは、最もカスタマイズしやすい自己ホスト型、共有サーバーモードを備えたもの、より軽量なマルチプラットフォームのクライアント、そしてキャラクターハブを内蔵したデスクトップアプリです。',
        ],
        columns: ['アプリ', '対応', '価格とライセンス', '役割', '主な違い'],
        rows: [
          {
            'アプリ': 'Rin Chat',
            '対応': 'Windows、Linux',
            '価格とライセンス': '無料、プロプライエタリ',
            '役割': 'デスクトップのロールプレイアプリ',
            '主な違い': '暗号化保存、ダイスとステータス。クローズドソース',
          },
          {
            'アプリ': 'SillyTavern',
            '対応': 'Windows、Mac、Linux',
            '価格とライセンス': '無料、AGPL-3.0',
            '役割': '自己ホスト型のロールプレイ用フロントエンド',
            '主な違い': '最も深いカスタマイズ。Node.jsの設定が必要',
          },
          {
            'アプリ': '[RisuAI](/ja/power-local-llm/risuai-review)',
            '対応': 'Web、デスクトップ、モバイル',
            '価格とライセンス': '無料、GPL-3.0',
            '役割': 'ロールプレイ用フロントエンド',
            '主な違い': 'モバイル対応。オープンソース',
          },
          {
            'アプリ': '[Agnai](/ja/power-local-llm/agnai-review)',
            '対応': 'Web',
            '価格とライセンス': '無料、AGPL-3.0',
            '役割': 'マルチユーザー対応のロールプレイ用フロントエンド',
            '主な違い': '共有サーバーモード。オープンソース',
          },
          {
            'アプリ': '[Backyard AI](/ja/power-local-llm/backyard-ai-review-local-roleplay)',
            '対応': 'Windows、Mac、Linux',
            '価格とライセンス': '無料枠あり、プロプライエタリ',
            '役割': 'デスクトップのキャラクターチャット',
            '主な違い': 'キャラクターハブを内蔵',
          },
        ],
        note: 'サードパーティ製アプリの対応環境、価格、機能は頻繁に変わります。決める前に各プロジェクトの公式ページで最新情報をご確認ください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Rin Chatが向いている人',
        items: [
          '**インストーラーで手軽に始めたいロールプレイヤー。** Node.jsやサーバーの設定は不要です。',
          '**既存のキャラクターカードを持っている人。** SillyTavernとAI Character Cardsのファイルをそのまま開けます。',
          '**プライバシーを重視するWindowsまたはLinuxのユーザー。** 暗号化されたローカル保存に加え、ローカルのバックエンドを使えば完全にローカルでチャットできます。',
          '**ゲームマスター形式で遊びたい人。** ダイスとステータスはアプリが処理します。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Rin Chatが向いていない人',
        items: [
          '**オープンソースのコードが必要な人。** アプリはプロプライエタリです。',
          '**Macやスマートフォンのユーザー。** macOS版もリリース済みのAndroid版も、まだありません。',
          '**商用で使いたい人。** ライセンスは個人の非商用利用が対象です。',
          '**テレメトリーをまったく送りたくない人。** 利用規約には、基本の利用統計はオフにできないと書かれています。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Rin Chatはオフラインで動作しますか？',
            a: 'お使いのコンピューターでOllama、KoboldCpp、LM Studioなどのローカルバックエンドを動かしている場合だけです。アプリにモデルは付属しません。またインストール時と起動時に利用統計を送信するため、PromptQuorumは完全なオフラインとは言えません。',
          },
          {
            q: 'Rin Chatは無料ですか？',
            a: 'ホームページには、試用期間もアカウントもなく、すべての機能が使えると書かれています。ポリシーにはRin Chatのサブスクリプションが登場しますが、価格は見つかりませんでした。',
          },
          {
            q: 'SillyTavernのカードは使えますか？',
            a: '開発元によると、SillyTavernのカードはそのまま使え、アプリはAI Character Cardsのファイルも開けます。',
          },
          {
            q: 'MacやAndroidのバージョンはありますか？',
            a: 'まだありません。開発元によるとmacOSは開発中で日程未定、Androidは発表済みですが、ダウンロードページもストア掲載もありません。',
          },
          {
            q: 'Rin Chatは誰が作っていますか？',
            a: '米国の企業Rin Chat LLCで、連絡先ページにはユタ州の住所が記載されており、利用規約はユタ州法に準拠します。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          'Rin Chatは、SillyTavernとAI Character Cardsのファイルを開け、データを暗号化してコンピューターに保存し、ダイスとステータスも使える、キャラクターチャット向けのパッケージ版WindowsまたはLinuxアプリがほしい方に向いています。2026年11月20日にバージョン1.0.4が公開されました。',
          '注意点は、クローズドソースであること、必須の利用統計、署名のないWindowsインストーラー、MacとリリースされたAndroid版がないこと、オープンベータという表示、そしてPromptQuorumが確認できなかった主張です。大きなライブラリを移す前に、まず1枚のカードとローカルのバックエンドで試してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Rin Chat公式サイト](https://rin.chat/) — 概要、機能、FAQ。',
          '[ダウンロードページ](https://rin.chat/download/) — 対応プラットフォームとインストーラー。',
          '[変更履歴](https://rin.chat/changelog) — バージョン1.0.4とリリース日。',
          '[機能ページ](https://rin.chat/features/)と[クイックスタート](https://rin.chat/quickstart/) — カード形式、バックエンド、セットアップ。',
          '[プライバシーポリシー](https://rin.chat/privacy/)、[利用規約](https://rin.chat/terms/)、[ライセンス](https://rin.chat/license/) — データの扱い、利用統計、準拠法、ライセンス。',
          '[お問い合わせページ](https://rin.chat/contact/) — 企業情報。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[RisuAIレビュー](/ja/power-local-llm/risuai-review) — Web、デスクトップ、モバイル向けのオープンソースのロールプレイ用フロントエンド。',
          '[Agnaiレビュー](/ja/power-local-llm/agnai-review) — マルチユーザー対応のロールプレイ用フロントエンド。',
          '[Backyard AIレビュー](/ja/power-local-llm/backyard-ai-review-local-roleplay) — キャラクターハブを内蔵したデスクトップのキャラクターチャットアプリ。',
          '[SillyTavern vs Agnai vs RisuAI](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 主要な3つのロールプレイ用フロントエンドの比較。',
          '[Local LLM Software Directory全体](/ja/directory) — プラットフォームを横断してローカルAIツールを集めた、より広いディレクトリ。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Creative & Roleplay',
    heroImage: '/images/rin-chat-review-hero-zh.webp',
    title: 'Rin Chat评测：用于AI角色扮演和角色聊天的免费桌面应用',
    seoTitle: 'Rin Chat评测：免费的桌面AI角色扮演与角色聊天应用',
    intro: 'Rin Chat是一款适用于Windows和Linux的免费桌面应用，用于AI角色扮演和角色聊天。它可以连接Ollama、KoboldCpp或LM Studio等本地后端，也可以连接任何兼容OpenAI的API，并能直接打开SillyTavern和AI Character Cards的角色卡与世界书。本评测涵盖下载、功能、隐私、限制和替代方案；PromptQuorum阅读了开发者的网页，但没有测试这款应用。',
    metaDescription: 'Rin Chat评测：适用于Windows和Linux的免费角色扮演应用，带加密角色卡、游戏主持骰子和角色卡工坊，可搭配Ollama或任意API。含限制说明。',
    twitterDescription: 'Rin Chat评测：适用于Windows和Linux的免费桌面角色扮演应用，带加密角色卡、冒险骰子和角色卡工坊。隐私、限制与替代方案。',
    audience: '想要现成的桌面应用、而不是自行托管前端，并使用本地或云端模型进行角色扮演和角色聊天的用户——涵盖下载、功能、隐私、限制和替代方案。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rin Chat review',
    targetKeywords: [
      'rin chat 评测',
      'rin chat ai 角色扮演',
      'sillytavern 替代 桌面应用',
      'ai 角色聊天 windows linux',
      '角色扮演应用 ollama koboldcpp',
      '加密 ai 角色扮演应用',
      '角色卡应用 世界书',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**Rin Chat是一款适用于Windows和Linux的免费桌面应用，基于你连接的本地或云端模型运行AI角色扮演和角色聊天。** 它能读取SillyTavern和AI Character Cards的文件，增加带骰子和属性的游戏主持模式，据开发者称，角色卡和聊天记录加密保存在你的电脑上。它是闭源的，并标注为公开测试版；条款称使用统计“无法关闭”，PromptQuorum没有测试这款应用。',
    quickAnswerTop: {
      zh: {
        question: 'Rin Chat是本地AI角色扮演应用吗？',
        answer: '部分是。应用本身在你的电脑上运行并把数据保存在本机，但它不附带模型：你需要连接Ollama、KoboldCpp、LM Studio或任何兼容OpenAI的服务。使用本地后端时，聊天内容留在你的电脑上；使用云端API时，据开发者的隐私政策，提示词会从你的设备发送到该服务商。',
        bullets: [
          '它可以打开V1、V2和V3角色卡（包括嵌入PNG图片中的角色卡）以及世界书。',
          '据开发者称，角色卡和聊天记录以AES-256-GCM加密保存在你的电脑上。',
          '提供Windows 10或11以及64位Linux版本；macOS没有发布日期，目前也没有Android版本。',
          '应用是闭源的，因此其说法无法通过代码核实。',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: '获取Rin Chat', anchor: 'get-it' },
      { label: 'Rin Chat概览', anchor: 'at-a-glance' },
      { label: 'Rin Chat是什么', anchor: 'what-is-rin-chat' },
      { label: '入门步骤', anchor: 'how-to-get-started' },
      { label: '功能', anchor: 'features' },
      { label: '后端与硬件', anchor: 'backends-hardware' },
      { label: '隐私、许可与费用', anchor: 'privacy' },
      { label: '优势与局限', anchor: 'tradeoffs' },
      { label: 'Rin Chat与替代方案对比', anchor: 'vs-alternatives' },
      { label: '适合使用Rin Chat的人', anchor: 'who-should-use' },
      { label: '不适合使用Rin Chat的人', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Rin Chat是一款免费桌面应用，可以与角色卡文件中的AI角色聊天，并运行轻量的角色扮演游戏规则，使用的是你自己连接的本地或云端模型。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作SillyTavern理念的即装即用版本：下载后指向Ollama或填入API密钥，再打开一张角色卡即可。',
          },
        ],
        items: [
          '本地说法：应用及其数据保留在你的电脑上；聊天本身是否留在本地，取决于你选择的后端。',
          '开发者：据其联系页面，为美国犹他州的公司Rin Chat LLC。',
          '维护状态：版本1.0.4的日期为2026年11月20日，表明仍在积极开发，但官网仍称其为公开测试版。',
          '费用：采用专有许可，个人非商业使用免费。',
          '不足：闭源、强制的使用统计、未签名的Windows安装程序、没有macOS版本和已发布的Android版本，以及PromptQuorum没有实测。',
        ],
      },
      getItRinChat: {
        id: 'get-it',
        title: '获取Rin Chat',
        content: [
          '**Rin Chat的安装方式与其他桌面应用相同，无需使用终端。** 从官网下载适合你系统的版本，之后应用会自行更新。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Windows',
            '获取方式': '[下载Windows版](https://rin.chat/download/) — Windows 10或11，64位安装程序；未做代码签名，SmartScreen会发出警告',
          },
          {
            '平台': 'Linux',
            '获取方式': '[下载AppImage或.deb](https://rin.chat/download/) — 64位x86（amd64）',
          },
          {
            '平台': 'Mac和Android',
            '获取方式': '暂无下载；开发者称macOS正在开发中，没有日期，Android已宣布但没有下载页面或应用商店页面',
          },
          {
            '平台': '官网',
            '获取方式': '[rin.chat](https://rin.chat/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[Rin Chat隐私政策](https://rin.chat/privacy/)',
          },
        ],
        note: '下载页面称该应用为公开测试版。没有找到公开的源代码仓库。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Rin Chat概览',
        columns: ['属性', 'Rin Chat'],
        rows: [
          { '属性': '平台', 'Rin Chat': 'Windows 10/11、64位Linux桌面版' },
          { '属性': '价格', 'Rin Chat': '个人使用免费' },
          { '属性': '许可', 'Rin Chat': '专有，闭源' },
          { '属性': '模型', 'Rin Chat': '不附带；本地后端或任何兼容OpenAI的API' },
          { '属性': '角色卡格式', 'Rin Chat': 'V1、V2、V3角色卡（PNG）、世界书' },
          { '属性': '群聊', 'Rin Chat': '据开发者称支持' },
          { '属性': '存储', 'Rin Chat': 'AES-256-GCM加密，保存在你的电脑上' },
          { '属性': '开发者', 'Rin Chat': 'Rin Chat LLC（美国）' },
        ],
        note: '开发者网站上没有说明的项目表示未知，而不是不支持。',
      },
      whatIsRinChat: {
        id: 'what-is-rin-chat',
        title: 'Rin Chat是什么',
        content: [
          '**Rin Chat是一款用于角色聊天和角色扮演的桌面前端：它保存角色、世界书和聊天记录，回复则由你连接的模型来写。** 它不包含语言模型。开发者Rin Chat LLC还运营着[AI Character Cards](https://aicharactercards.com/)，这是一个供人们分享角色卡的网站，应用可以从中导入。',
          '它面向与SillyTavern相同的读者，但它是一款打包好的应用，带有安装程序、内置更新和引导式的后端设置，而不是自行托管的网页界面。',
          '本评测依据开发者的网站、政策和更新日志。PromptQuorum没有安装或测试Rin Chat，因此各项功能效果如何，均为开发者的说法。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '入门步骤',
        content: [
          '**设置包括安装、选择后端和打开一张角色卡。** 步骤依据开发者的快速入门。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从上面的“获取Rin Chat”表格中下载适合你系统的版本。Windows安装程序未做代码签名，因此SmartScreen会显示警告；只有在信任来源时才安装。',
          },
          {
            title: '选择后端',
            whyItMatters: '选择本地应用（Ollama、KoboldCpp或LM Studio，均无需密钥），或使用你自己API密钥的兼容OpenAI的服务。应用可以为你安装Ollama，或下载并运行KoboldCpp。',
          },
          {
            title: '打开或导入角色',
            whyItMatters: '打开SillyTavern或AI Character Cards的文件，或通过链接从受支持的网站导入角色卡。',
          },
          {
            title: '检查数据设置',
            whyItMatters: '在“设置”的“数据与备份”中查看可选的统计项，并记下加密资料库的24个单词的恢复短语。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**功能集中在角色卡、游戏机制和隐私上。** 以下内容均来自开发者的功能页面和更新日志。',
        ],
        items: [
          '**角色卡和世界书导入。** 可读取V1、V2和V3角色卡（包括嵌入PNG的角色卡）以及独立的世界书；可通过链接从Chub、RisuRealm、Pygmalion、Perchance和AI Character Cards导入。',
          '**冒险模式。** 模型担任游戏主持人，应用担任裁判：掷骰子、记录属性，并在你编辑或重新生成消息时干净地撤销这些变化。',
          '**文档样式。** 角色卡可以定义带样式的聊天内文档，例如通知、信件、悬赏海报和终端屏幕；内置三十种样式。',
          '**角色卡工坊。** 一个基于你所连接模型运行的对话式编辑器，帮助你创建和编辑角色卡、世界书及其他应用元素。',
          '**群聊、语音和图像。** 支持群聊、内置的离线文字转语音（Piper、Kokoro、Pocket TTS）、使用Whisper的离线听写，以及通过Automatic1111、Forge、SwarmUI和ComfyUI等工具生成图像。',
          '**使用范围。** 提供Discord机器人，并支持通过手机浏览器远程访问。',
          '**语言。** 功能页面列出七种界面语言：英语、简体中文、日语、西班牙语、德语、法语和俄语；首页的常见问题则列出五种。',
        ],
      },
      backendsHardware: {
        id: 'backends-hardware',
        title: '后端与硬件',
        content: [
          '**Rin Chat不附带模型，需要后端。** 本地选项是使用默认本地端口的LM Studio、Ollama和KoboldCpp，任何兼容OpenAI的端点配合API密钥也可使用。内置了Z.AI、OpenRouter、NanoGPT、OpenAI、DeepSeek和xAI Grok的预设。',
          '官网没有说明应用本身所需的最低内存或GPU，因此所需硬件取决于你运行的模型。PromptQuorum没有测量性能。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私、许可与费用',
        content: [
          '**开发者称，角色卡和聊天记录以AES-256-GCM加密保存在你的电脑上，由你的密码或操作系统钥匙串保护，并附带24个单词的恢复短语。** 据隐私政策，请求直接从你的设备发送到你选择的服务商，不经过开发者的服务器。',
          '条款称，应用在安装和启动时会发送使用统计（随机的安装ID、版本、操作系统、架构、安装包格式和语言），并且这“无法关闭”；政策称其中绝不包含提示词或角色。其他统计（例如使用过的服务商）是可选的。网站使用Google Analytics，在欧盟、英国和瑞士需经同意。政策还提到一项可选的Rin Chat订阅和账号；PromptQuorum没有找到其价格。',
          '许可使Rin Chat成为专有软件，个人非商业使用免费，用户必须年满18岁。应用是闭源的，PromptQuorum没有检查其存储或网络流量，因此以上说法均未经核实。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '优势与局限',
        columns: ['优势', '实际使用中的意义', '局限 / 注意事项'],
        rows: [
          {
            '优势': '打包好的桌面应用',
            '实际使用中的意义': '安装、连接后端即可聊天，并内置更新。',
            '局限 / 注意事项': '目前仅支持Windows和Linux；Windows安装程序未签名。',
          },
          {
            '优势': '可打开现有角色卡',
            '实际使用中的意义': 'SillyTavern和AI Character Cards的文件及世界书可直接使用。',
            '局限 / 注意事项': '这里没有测试导入质量。',
          },
          {
            '优势': '冒险模式',
            '实际使用中的意义': '应用负责掷骰子和记录属性，不需要模型自行编造。',
            '局限 / 注意事项': '需要按角色卡设置；PromptQuorum没有试用。',
          },
          {
            '优势': '加密存储',
            '实际使用中的意义': '据开发者称，没有你的密码或密钥，角色卡和聊天记录无法读取。',
            '局限 / 注意事项': '闭源，因此无法审计其加密。',
          },
          {
            '优势': '灵活的后端',
            '实际使用中的意义': '可使用Ollama、KoboldCpp、LM Studio或云端API。',
            '局限 / 注意事项': '不含模型；云端API会把提示词发送到你的电脑之外。',
          },
          {
            '优势': '免费使用',
            '实际使用中的意义': '据开发者称，无需试用或账号。',
            '局限 / 注意事项': '仅限个人使用；使用统计是强制的。',
          },
          {
            '优势': '积极开发',
            '实际使用中的意义': '版本1.0.4的日期为2026年11月20日。',
            '局限 / 注意事项': '仍标注为公开测试版，可能有不完善之处。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Rin Chat与替代方案对比',
        content: [
          '以下是目录中最接近的角色扮演前端：可定制性最强的自行托管方案、带共享服务器模式的方案、更轻量的多平台客户端，以及内置角色中心的桌面应用。',
        ],
        columns: ['应用', '平台', '价格与许可', '定位', '主要区别'],
        rows: [
          {
            '应用': 'Rin Chat',
            '平台': 'Windows、Linux',
            '价格与许可': '免费，专有',
            '定位': '桌面角色扮演应用',
            '主要区别': '加密存储、骰子和属性；闭源',
          },
          {
            '应用': 'SillyTavern',
            '平台': 'Windows、Mac、Linux',
            '价格与许可': '免费，AGPL-3.0',
            '定位': '自行托管的角色扮演前端',
            '主要区别': '定制性最深；需要配置Node.js',
          },
          {
            '应用': '[RisuAI](/zh/power-local-llm/risuai-review)',
            '平台': '网页、桌面、移动',
            '价格与许可': '免费，GPL-3.0',
            '定位': '角色扮演前端',
            '主要区别': '适合移动端；开源',
          },
          {
            '应用': '[Agnai](/zh/power-local-llm/agnai-review)',
            '平台': '网页',
            '价格与许可': '免费，AGPL-3.0',
            '定位': '多用户角色扮演前端',
            '主要区别': '共享服务器模式；开源',
          },
          {
            '应用': '[Backyard AI](/zh/power-local-llm/backyard-ai-review-local-roleplay)',
            '平台': 'Windows、Mac、Linux',
            '价格与许可': '有免费版，专有',
            '定位': '桌面角色聊天',
            '主要区别': '内置角色中心',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化。决定之前，请到各项目自己的页面核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合使用Rin Chat的人',
        items: [
          '**想要安装程序的角色扮演玩家。** 无需配置Node.js或服务器。',
          '**已有角色卡的用户。** SillyTavern和AI Character Cards的文件可直接打开。',
          '**注重隐私的Windows或Linux用户。** 本地加密存储，搭配本地后端即可完全在本地聊天。',
          '**喜欢游戏主持风格的玩家。** 骰子和属性由应用处理。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '不适合使用Rin Chat的人',
        items: [
          '**需要开源代码的人。** 该应用是专有的。',
          '**Mac和手机用户。** 目前还没有macOS版本，也没有已发布的Android版本。',
          '**商业用户。** 许可仅涵盖个人非商业使用。',
          '**需要零遥测的人。** 条款称基本的使用统计无法关闭。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Rin Chat可以离线使用吗？',
            a: '只有在你的电脑上运行Ollama、KoboldCpp或LM Studio等本地后端时才可以；应用本身不附带模型。它还会在安装和启动时发送使用统计，因此PromptQuorum不能称其完全离线。',
          },
          {
            q: 'Rin Chat是免费的吗？',
            a: '首页称所有功能均已解锁，无需试用或账号。政策中出现了Rin Chat订阅，但没有找到价格。',
          },
          {
            q: '我可以使用SillyTavern的角色卡吗？',
            a: '开发者称SillyTavern的角色卡可直接使用，应用也能打开AI Character Cards的文件。',
          },
          {
            q: '有Mac或Android版本吗？',
            a: '暂时没有。开发者称macOS正在开发中，没有日期；Android已宣布，但没有下载页面或应用商店页面。',
          },
          {
            q: 'Rin Chat是谁开发的？',
            a: 'Rin Chat LLC，一家美国公司，其联系页面上有犹他州的地址；条款受犹他州法律管辖。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你想要一款打包好的Windows或Linux角色聊天应用，能打开SillyTavern和AI Character Cards的文件，把数据加密保存在你的电脑上，并提供骰子和属性，那么Rin Chat是不错的选择。它于2026年11月20日发布了1.0.4版本。',
          '需要注意的是：闭源、强制的使用统计、未签名的Windows安装程序、没有Mac版本和已发布的Android版本、公开测试版的标注，以及PromptQuorum无法核实的说法。在迁移大型资料库之前，请先用一张角色卡和一个本地后端试用。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Rin Chat官网](https://rin.chat/) — 概览、功能和常见问题。',
          '[下载页面](https://rin.chat/download/) — 平台和安装程序。',
          '[更新日志](https://rin.chat/changelog) — 版本1.0.4和发布日期。',
          '[功能页面](https://rin.chat/features/)和[快速入门](https://rin.chat/quickstart/) — 角色卡格式、后端和设置。',
          '[隐私政策](https://rin.chat/privacy/)、[条款](https://rin.chat/terms/)和[许可](https://rin.chat/license/) — 数据处理、使用统计、适用法律和许可。',
          '[联系页面](https://rin.chat/contact/) — 公司信息。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[RisuAI评测](/zh/power-local-llm/risuai-review) — 适用于网页、桌面和移动端的开源角色扮演前端。',
          '[Agnai评测](/zh/power-local-llm/agnai-review) — 一款多用户角色扮演前端。',
          '[Backyard AI评测](/zh/power-local-llm/backyard-ai-review-local-roleplay) — 内置角色中心的桌面角色聊天应用。',
          '[SillyTavern vs Agnai vs RisuAI](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 三大主要角色扮演前端的对比。',
          '[完整的Local LLM Software Directory](/zh/directory) — 涵盖多个平台的本地AI工具的更广泛目录。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Creative & Roleplay',
    heroImage: '/images/rin-chat-review-hero-es.webp',
    title: 'Reseña de Rin Chat: app de escritorio gratis para rol con IA y chat con personajes',
    seoTitle: 'Reseña de Rin Chat: app gratis de rol con IA para PC',
    intro: "Rin Chat es una app de escritorio gratis para rol con IA y chat con personajes en Windows y Linux. Se conecta a un backend local como Ollama, KoboldCpp o LM Studio, o a cualquier API compatible con OpenAI, y abre directamente las tarjetas de personaje y los lorebooks de SillyTavern y AI Character Cards. Esta reseña cubre las descargas, las funciones, la privacidad, los límites y las alternativas; PromptQuorum leyó las páginas del fabricante, pero no probó la app.",
    metaDescription: 'Reseña de Rin Chat: app gratis de rol para Windows y Linux con tarjetas cifradas, dados de director de juego y creador de tarjetas, con Ollama o API.',
    twitterDescription: 'Reseña de Rin Chat: una app de rol de escritorio gratis para Windows y Linux con tarjetas de personaje cifradas, dados de aventura y un creador de tarjetas. Privacidad, límites y alternativas.',
    audience: 'Jugadores de rol y usuarios de chat con personajes que quieren una app de escritorio lista para usar en lugar de un frontend autoalojado, con modelos locales o en la nube — cubre descargas, funciones, privacidad, límites y alternativas.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rin Chat review',
    targetKeywords: [
      'reseña rin chat',
      'rin chat rol con ia',
      'alternativa a sillytavern app de escritorio',
      'chat con personajes ia windows linux',
      'app de rol ollama koboldcpp',
      'app de rol con ia cifrada',
      'app de tarjetas de personaje lorebooks',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**Rin Chat es una app de escritorio gratis para Windows y Linux que ejecuta rol con IA y chat con personajes sobre un modelo que tú conectas, local o en la nube.** Lee archivos de SillyTavern y AI Character Cards, añade un modo de director de juego con dados y estadísticas y, según el fabricante, guarda las tarjetas y los chats cifrados en tu ordenador. Es de código cerrado y se presenta como una beta abierta, las condiciones dicen que las estadísticas de uso "no se pueden desactivar" y PromptQuorum no la probó.',
    quickAnswerTop: {
      es: {
        question: '¿Es Rin Chat una app de rol con IA local?',
        answer: 'En parte. La app se ejecuta en tu ordenador y guarda allí sus datos, pero no incluye ningún modelo: conectas Ollama, KoboldCpp, LM Studio o cualquier servicio compatible con OpenAI. Con un backend local el chat se queda en tu equipo; con una API en la nube, los prompts van desde tu dispositivo a ese proveedor, según la política de privacidad del fabricante.',
        bullets: [
          'Abre tarjetas de personaje V1, V2 y V3, incluidas las incrustadas en imágenes PNG, y lorebooks.',
          'Las tarjetas y los chats se guardan con cifrado AES-256-GCM en tu ordenador, según el fabricante.',
          'Existen versiones para Windows 10 u 11 y Linux de 64 bits; macOS no tiene fecha de lanzamiento y aún no hay versión para Android.',
          'La app es de código cerrado, así que sus afirmaciones no se pueden comprobar en el código.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Conseguir Rin Chat', anchor: 'get-it' },
      { label: 'Rin Chat de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Rin Chat', anchor: 'what-is-rin-chat' },
      { label: 'Primeros pasos', anchor: 'how-to-get-started' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Backends y hardware', anchor: 'backends-hardware' },
      { label: 'Privacidad, licencia y coste', anchor: 'privacy' },
      { label: 'Equilibrio: ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Rin Chat frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Rin Chat', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Rin Chat', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Rin Chat es una app de escritorio gratis en la que chateas con personajes de IA a partir de archivos de tarjeta y juegas con reglas ligeras de juego de rol, usando un modelo local o en la nube que conectas tú mismo.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en una versión lista para instalar de la idea de SillyTavern: la descargas, la apuntas a Ollama o a una clave de API y abres una tarjeta de personaje.',
          },
        ],
        items: [
          'Afirmación de uso local: la app y sus datos se quedan en tu ordenador; que el chat en sí sea local depende del backend que elijas.',
          'Fabricante: Rin Chat LLC, una empresa de Utah, Estados Unidos, según su página de contacto.',
          'Mantenimiento: la versión 1.0.4 está fechada el 20 de noviembre de 2026, lo que indica desarrollo activo, pero el sitio sigue llamándola beta abierta.',
          'Coste: gratis para uso personal y no comercial bajo una licencia propietaria.',
          'Carencias: código cerrado, estadísticas de uso obligatorias, un instalador de Windows sin firmar, ninguna versión para macOS ni Android publicada y ninguna prueba práctica de PromptQuorum.',
        ],
      },
      getItRinChat: {
        id: 'get-it',
        title: 'Conseguir Rin Chat',
        content: [
          '**Rin Chat se instala como cualquier app de escritorio, así que no hace falta terminal.** Descarga la versión para tu sistema desde el sitio oficial; después la app se actualiza sola.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          {
            Plataforma: 'Windows',
            'Dónde conseguirla': '[Descargar para Windows](https://rin.chat/download/) — Windows 10/11, 64 bits; sin firma, SmartScreen avisa',
          },
          {
            Plataforma: 'Linux',
            'Dónde conseguirla': '[Descargar el AppImage o el .deb](https://rin.chat/download/) — x86 de 64 bits (amd64)',
          },
          {
            Plataforma: 'Mac y Android',
            'Dónde conseguirla': 'Aún sin descarga; macOS sin fecha y Android sin página de descarga ni ficha en tienda',
          },
          {
            Plataforma: 'Sitio web',
            'Dónde conseguirla': '[rin.chat](https://rin.chat/)',
          },
          {
            Plataforma: 'Política de privacidad',
            'Dónde conseguirla': '[Política de privacidad](https://rin.chat/privacy/)',
          },
        ],
        note: 'La página de descarga dice que la app es una beta abierta. No se encontró ningún repositorio público de código fuente.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Rin Chat de un vistazo',
        columns: ['Atributo', 'Rin Chat'],
        rows: [
          { Atributo: 'Plataforma', 'Rin Chat': 'Windows 10/11, escritorio Linux de 64 bits' },
          { Atributo: 'Precio', 'Rin Chat': 'Gratis para uso personal' },
          { Atributo: 'Licencia', 'Rin Chat': 'Propietaria, código cerrado' },
          { Atributo: 'Modelo', 'Rin Chat': 'Ninguno incluido; backend local o API compatible con OpenAI' },
          { Atributo: 'Formatos de tarjeta', 'Rin Chat': 'Tarjetas V1, V2, V3 (PNG), lorebooks' },
          { Atributo: 'Chats de grupo', 'Rin Chat': 'Sí, según el fabricante' },
          { Atributo: 'Almacenamiento', 'Rin Chat': 'Cifrado AES-256-GCM, en tu ordenador' },
          { Atributo: 'Fabricante', 'Rin Chat': 'Rin Chat LLC (Estados Unidos)' },
        ],
        note: 'Que falte una afirmación en el sitio del fabricante significa desconocido, no no compatible.',
      },
      whatIsRinChat: {
        id: 'what-is-rin-chat',
        title: 'Qué es Rin Chat',
        content: [
          '**Rin Chat es un frontend de escritorio para chat con personajes y rol: guarda los personajes, los lorebooks y el historial de chat, y un modelo que tú conectas escribe las respuestas.** No incluye ningún modelo de lenguaje. El fabricante, Rin Chat LLC, también gestiona [AI Character Cards](https://aicharactercards.com/), un sitio donde la gente comparte tarjetas de personaje y desde el que la app puede importarlas.',
          'Se dirige al mismo público que SillyTavern, pero como app empaquetada con instalador, actualizaciones integradas y una configuración guiada del backend, en lugar de una interfaz web autoalojada.',
          'Esta reseña se basa en el sitio web, las políticas y el registro de cambios del fabricante. PromptQuorum no instaló ni probó Rin Chat, así que cómo de bien funcione cada función es una afirmación del fabricante.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeros pasos',
        content: [
          '**La puesta en marcha consiste en instalar, elegir un backend y abrir una tarjeta de personaje.** Los pasos siguen la guía de inicio rápido del fabricante.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga la versión de la tabla Conseguir Rin Chat de arriba. En Windows el instalador no tiene firma de código, así que SmartScreen muestra una advertencia; instálalo solo si confías en la fuente.',
          },
          {
            title: 'Elige un backend',
            whyItMatters: 'Elige una app local (Ollama, KoboldCpp o LM Studio, ninguna necesita clave) o un servicio compatible con OpenAI con tu propia clave de API. La app puede instalar Ollama o descargar y ejecutar KoboldCpp por ti.',
          },
          {
            title: 'Abre o importa un personaje',
            whyItMatters: 'Abre un archivo de SillyTavern o de AI Character Cards, o importa una tarjeta mediante un enlace de un sitio compatible.',
          },
          {
            title: 'Revisa los ajustes de datos',
            whyItMatters: 'Mira Ajustes y luego Datos y copia de seguridad para las estadísticas opcionales, y anota la frase de recuperación de 24 palabras de tu biblioteca cifrada.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**El conjunto de funciones gira en torno a las tarjetas, la mecánica de juego y la privacidad.** Todo lo siguiente procede de la página de funciones y del registro de cambios del fabricante.',
        ],
        items: [
          '**Importación de tarjetas y lorebooks.** Lee tarjetas de personaje V1, V2 y V3, incluidas las incrustadas en un PNG, además de lorebooks independientes; los enlaces funcionan desde Chub, RisuRealm, Pygmalion, Perchance y AI Character Cards.',
          '**Modo aventura.** El modelo hace de director de juego mientras la app actúa como árbitro: tira los dados, lleva las estadísticas y las revierte limpiamente cuando editas o repites un mensaje.',
          '**Estilos de documento.** Las tarjetas pueden definir documentos con estilo dentro del chat, como avisos, cartas, carteles de recompensa y pantallas de terminal; incluye treinta estilos.',
          '**Creador de tarjetas.** Un editor conversacional, ejecutado con el modelo que conectas, que te ayuda a crear y editar tarjetas, lorebooks y otros elementos de la app.',
          '**Grupos, voz e imágenes.** Chats de grupo, texto a voz sin conexión incluido (Piper, Kokoro, Pocket TTS), dictado sin conexión con Whisper y generación de imágenes mediante herramientas como Automatic1111, Forge, SwarmUI y ComfyUI.',
          '**Alcance.** Un bot de Discord y acceso remoto desde el navegador de un teléfono.',
          '**Idiomas.** La página de funciones enumera siete idiomas de interfaz: inglés, chino simplificado, japonés, español, alemán, francés y ruso; las preguntas frecuentes de la página de inicio enumeran cinco.',
        ],
      },
      backendsHardware: {
        id: 'backends-hardware',
        title: 'Backends y hardware',
        content: [
          '**Rin Chat no incluye ningún modelo; necesita un backend.** Las opciones locales son LM Studio, Ollama y KoboldCpp en sus puertos locales por defecto, y cualquier endpoint compatible con OpenAI funciona con una clave de API. Hay preajustes para Z.AI, OpenRouter, NanoGPT, OpenAI, DeepSeek y xAI Grok.',
          'El sitio no indica un mínimo de RAM ni de GPU para la propia app, así que el hardware que necesitas depende del modelo que ejecutes. PromptQuorum no midió el rendimiento.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad, licencia y coste',
        content: [
          '**El fabricante dice que las tarjetas y los chats se cifran con AES-256-GCM en tu ordenador, protegidos por tu contraseña o por el llavero del sistema operativo, con una frase de recuperación de 24 palabras.** Según la política de privacidad, las solicitudes van directamente desde tu dispositivo al proveedor que elijas y no pasan por los servidores del fabricante.',
          'Las condiciones dicen que la app envía estadísticas de uso al instalar y al iniciar (un identificador de instalación aleatorio, la versión, el sistema operativo, la arquitectura, el formato del paquete y el idioma) y que esto "no se puede desactivar"; la política dice que nunca incluye prompts ni personajes. Otras estadísticas, como los proveedores usados, son opcionales. El sitio web usa Google Analytics, con consentimiento en la UE, el Reino Unido y Suiza. La política también menciona una suscripción y una cuenta opcionales de Rin Chat; PromptQuorum no encontró ningún precio.',
          'La licencia hace que Rin Chat sea propietaria y gratis para uso personal y no comercial, y los usuarios deben tener al menos 18 años. La app es de código cerrado y PromptQuorum no inspeccionó su almacenamiento ni su tráfico de red, así que nada de esto está verificado.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Equilibrio: ventajas y limitaciones',
        columns: ['Ventaja', 'Qué implica en uso real', 'Limitación / advertencia'],
        rows: [
          {
            Ventaja: 'App de escritorio empaquetada',
            'Qué implica en uso real': 'Instalas, conectas un backend y chateas; se actualiza sola.',
            'Limitación / advertencia': 'Por ahora solo Windows y Linux; el instalador de Windows no está firmado.',
          },
          {
            Ventaja: 'Abre tarjetas existentes',
            'Qué implica en uso real': 'Los archivos y lorebooks de SillyTavern y AI Character Cards funcionan tal cual.',
            'Limitación / advertencia': 'La calidad de la importación no se probó aquí.',
          },
          {
            Ventaja: 'Modo aventura',
            'Qué implica en uso real': 'La app tira los dados y lleva las estadísticas, así que el modelo no las inventa.',
            'Limitación / advertencia': 'Se configura por tarjeta; PromptQuorum no lo probó.',
          },
          {
            Ventaja: 'Almacenamiento cifrado',
            'Qué implica en uso real': 'Según el fabricante, tarjetas y chats ilegibles sin tu contraseña o clave.',
            'Limitación / advertencia': 'Código cerrado, así que el cifrado no se puede auditar.',
          },
          {
            Ventaja: 'Backends flexibles',
            'Qué implica en uso real': 'Usa Ollama, KoboldCpp, LM Studio o una API en la nube.',
            'Limitación / advertencia': 'No incluye modelo; las API en la nube envían prompts fuera de tu equipo.',
          },
          {
            Ventaja: 'Uso gratuito',
            'Qué implica en uso real': 'No hace falta prueba ni cuenta, según el fabricante.',
            'Limitación / advertencia': 'Solo uso personal; las estadísticas de uso son obligatorias.',
          },
          {
            Ventaja: 'Desarrollo activo',
            'Qué implica en uso real': 'La versión 1.0.4 está fechada el 20 de noviembre de 2026.',
            'Limitación / advertencia': 'Sigue como beta abierta, así que espera asperezas.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Rin Chat frente a alternativas',
        content: [
          'Estos son los frontends de rol más cercanos del directorio: la opción autoalojada más personalizable, una con modo de servidor compartido, un cliente multiplataforma más ligero y una app de escritorio con un centro de personajes integrado.',
        ],
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Papel', 'Diferencia clave'],
        rows: [
          {
            App: 'Rin Chat',
            Plataformas: 'Windows, Linux',
            'Precio y licencia': 'Gratis, propietaria',
            Papel: 'App de rol de escritorio',
            'Diferencia clave': 'Almacenamiento cifrado, dados y estadísticas; código cerrado',
          },
          {
            App: 'SillyTavern',
            Plataformas: 'Windows, Mac, Linux',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            Papel: 'Frontend de rol autoalojado',
            'Diferencia clave': 'La personalización más profunda; requiere configurar Node.js',
          },
          {
            App: '[RisuAI](/es/power-local-llm/risuai-review)',
            Plataformas: 'Web, escritorio, móvil',
            'Precio y licencia': 'Gratis, GPL-3.0',
            Papel: 'Frontend de rol',
            'Diferencia clave': 'Apto para móvil; código abierto',
          },
          {
            App: '[Agnai](/es/power-local-llm/agnai-review)',
            Plataformas: 'Web',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            Papel: 'Frontend de rol multiusuario',
            'Diferencia clave': 'Modo de servidor compartido; código abierto',
          },
          {
            App: '[Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay)',
            Plataformas: 'Windows, Mac, Linux',
            'Precio y licencia': 'Plan gratis, propietaria',
            Papel: 'Chat con personajes de escritorio',
            'Diferencia clave': 'Centro de personajes integrado',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de las apps de terceros cambian con frecuencia. Comprueba los datos actuales en la página de cada proyecto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Rin Chat',
        items: [
          '**Jugadores de rol que quieren un instalador.** No hace falta Node.js ni configurar un servidor.',
          '**Personas con tarjetas de personaje existentes.** Los archivos de SillyTavern y AI Character Cards se abren directamente.',
          '**Usuarios preocupados por la privacidad en Windows o Linux.** Almacenamiento local cifrado, con un backend local para un chat totalmente local.',
          '**Jugadores al estilo director de juego.** La app se encarga de los dados y las estadísticas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Rin Chat',
        items: [
          '**Quien necesite código abierto.** La app es propietaria.',
          '**Usuarios de Mac y de móvil.** Aún no existe ninguna versión para macOS ni Android publicada.',
          '**Usuarios comerciales.** La licencia cubre el uso personal y no comercial.',
          '**Quien necesite cero telemetría.** Las condiciones dicen que las estadísticas básicas de uso no se pueden desactivar.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Rin Chat sin conexión?',
            a: 'Solo con un backend local como Ollama, KoboldCpp o LM Studio ejecutándose en tu ordenador; la app no incluye ningún modelo. Además envía estadísticas de uso al instalar y al iniciar, así que PromptQuorum no puede calificarla de totalmente sin conexión.',
          },
          {
            q: '¿Es gratis Rin Chat?',
            a: 'La página de inicio dice que todas las funciones están desbloqueadas, sin prueba ni cuenta. En la política aparece una suscripción a Rin Chat, sin precio encontrado.',
          },
          {
            q: '¿Puedo usar mis tarjetas de SillyTavern?',
            a: 'El fabricante dice que las tarjetas de SillyTavern funcionan tal cual, y la app también abre archivos de AI Character Cards.',
          },
          {
            q: '¿Hay una versión para Mac o Android?',
            a: 'Todavía no. El fabricante dice que macOS está en curso sin fecha, y Android está anunciado pero no tiene página de descarga ni ficha en una tienda.',
          },
          {
            q: '¿Quién hace Rin Chat?',
            a: 'Rin Chat LLC, una empresa estadounidense con dirección en Utah en su página de contacto; las condiciones se rigen por la ley de Utah.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Rin Chat es una buena opción si quieres una app empaquetada para Windows o Linux para chatear con personajes, que abre archivos de SillyTavern y AI Character Cards, guarda sus datos cifrados en tu ordenador y añade dados y estadísticas. Publicó la versión 1.0.4 el 20 de noviembre de 2026.',
          'Las advertencias son el código cerrado, las estadísticas de uso obligatorias, un instalador de Windows sin firmar, la ausencia de versión para Mac y de una versión de Android publicada, la etiqueta de beta abierta y afirmaciones que PromptQuorum no pudo comprobar. Pruébala con una tarjeta y un backend local antes de mover una biblioteca grande.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Rin Chat](https://rin.chat/) — resumen, funciones y preguntas frecuentes.',
          '[Página de descarga](https://rin.chat/download/) — plataformas e instaladores.',
          '[Registro de cambios](https://rin.chat/changelog) — versión 1.0.4 y fechas de lanzamiento.',
          '[Funciones](https://rin.chat/features/) y [inicio rápido](https://rin.chat/quickstart/) — formatos de tarjeta, backends y configuración.',
          '[Política de privacidad](https://rin.chat/privacy/), [condiciones](https://rin.chat/terms/) y [licencia](https://rin.chat/license/) — tratamiento de datos, estadísticas, ley aplicable y licencia.',
          '[Página de contacto](https://rin.chat/contact/) — datos de la empresa.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de RisuAI](/es/power-local-llm/risuai-review) — un frontend de rol de código abierto para web, escritorio y móvil.',
          '[Reseña de Agnai](/es/power-local-llm/agnai-review) — un frontend de rol multiusuario.',
          '[Reseña de Backyard AI](/es/power-local-llm/backyard-ai-review-local-roleplay) — una app de chat con personajes de escritorio con un centro de personajes integrado.',
          '[SillyTavern vs Agnai vs RisuAI](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparación de los tres frontends de rol principales.',
          '[El Local LLM Software Directory completo](/es/directory) — un directorio más amplio de herramientas de IA local para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Creative & Roleplay',
    heroImage: '/images/rin-chat-review-hero-pt.webp',
    title: 'Análise do Rin Chat: app de desktop grátis para roleplay com IA e chat com personagens',
    seoTitle: 'Análise do Rin Chat: app grátis de roleplay com IA no PC',
    intro: "O Rin Chat é um app de desktop grátis para roleplay com IA e chat com personagens no Windows e no Linux. Ele se conecta a um backend local, como Ollama, KoboldCpp ou LM Studio, ou a qualquer API compatível com OpenAI, e abre diretamente os cartões de personagem e os lorebooks do SillyTavern e do AI Character Cards. Esta análise cobre downloads, recursos, privacidade, limites e alternativas; o PromptQuorum leu as páginas do fabricante, mas não testou o app.",
    metaDescription: 'Análise do Rin Chat: app grátis de roleplay para Windows e Linux com cartões criptografados, dados de mestre de jogo e criador de cartões. Limites.',
    twitterDescription: 'Análise do Rin Chat: um app de roleplay de desktop grátis para Windows e Linux com cartões de personagem criptografados, dados de aventura e um criador de cartões. Privacidade, limites e alternativas.',
    audience: 'Jogadores de roleplay e usuários de chat com personagens que querem um app de desktop pronto para usar em vez de um frontend auto-hospedado, com modelos locais ou na nuvem — cobre downloads, recursos, privacidade, limites e alternativas.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rin Chat review',
    targetKeywords: [
      'análise rin chat',
      'rin chat roleplay com ia',
      'alternativa ao sillytavern app de desktop',
      'chat com personagens ia windows linux',
      'app de roleplay ollama koboldcpp',
      'app de roleplay com ia criptografado',
      'app de cartões de personagem lorebooks',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**O Rin Chat é um app de desktop grátis para Windows e Linux que roda roleplay com IA e chat com personagens sobre um modelo que você conecta, local ou na nuvem.** Ele lê arquivos do SillyTavern e do AI Character Cards, adiciona um modo de mestre de jogo com dados e estatísticas e, segundo o fabricante, guarda os cartões e os chats criptografados no seu computador. É de código fechado e rotulado como beta aberto, os termos dizem que as estatísticas de uso "não podem ser desativadas" e o PromptQuorum não o testou.',
    quickAnswerTop: {
      pt: {
        question: 'O Rin Chat é um app de roleplay com IA local?',
        answer: 'Em parte. O app roda no seu computador e guarda os dados lá, mas não inclui nenhum modelo: você conecta Ollama, KoboldCpp, LM Studio ou qualquer serviço compatível com OpenAI. Com um backend local, o chat fica na sua máquina; com uma API na nuvem, os prompts vão do seu dispositivo para esse provedor, segundo a política de privacidade do fabricante.',
        bullets: [
          'Abre cartões de personagem V1, V2 e V3, inclusive os embutidos em imagens PNG, e lorebooks.',
          'Cartões e chats são guardados com criptografia AES-256-GCM no seu computador, segundo o fabricante.',
          'Existem versões para Windows 10 ou 11 e Linux de 64 bits; o macOS não tem data de lançamento e ainda não há versão para Android.',
          'O app é de código fechado, então suas afirmações não podem ser verificadas no código.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Obter o Rin Chat', anchor: 'get-it' },
      { label: 'Rin Chat em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Rin Chat', anchor: 'what-is-rin-chat' },
      { label: 'Primeiros passos', anchor: 'how-to-get-started' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Backends e hardware', anchor: 'backends-hardware' },
      { label: 'Privacidade, licença e custo', anchor: 'privacy' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Rin Chat e as alternativas', anchor: 'vs-alternatives' },
      { label: 'Para quem o Rin Chat serve', anchor: 'who-should-use' },
      { label: 'Para quem o Rin Chat não serve', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Rin Chat é um app de desktop grátis em que você conversa com personagens de IA a partir de arquivos de cartão e joga com regras leves de RPG, usando um modelo local ou na nuvem que você mesmo conecta.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em uma versão pronta para instalar da ideia do SillyTavern: você baixa, aponta para o Ollama ou para uma chave de API e abre um cartão de personagem.',
          },
        ],
        items: [
          'Afirmação de uso local: o app e seus dados ficam no seu computador; se o chat em si é local depende do backend que você escolher.',
          'Fabricante: Rin Chat LLC, uma empresa em Utah, nos Estados Unidos, segundo sua página de contato.',
          'Manutenção: a versão 1.0.4 é datada de 20 de novembro de 2026, o que indica desenvolvimento ativo, mas o site ainda a chama de beta aberto.',
          'Custo: grátis para uso pessoal e não comercial, sob uma licença proprietária.',
          'Lacunas: código fechado, estatísticas de uso obrigatórias, um instalador do Windows sem assinatura, nenhuma versão publicada para macOS ou Android e nenhum teste prático do PromptQuorum.',
        ],
      },
      getItRinChat: {
        id: 'get-it',
        title: 'Obter o Rin Chat',
        content: [
          '**O Rin Chat se instala como qualquer app de desktop, então não é preciso usar o terminal.** Baixe a versão para o seu sistema no site oficial; depois o app se atualiza sozinho.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            Plataforma: 'Windows',
            'Onde obter': '[Baixar para Windows](https://rin.chat/download/) — Windows 10/11, 64 bits; sem assinatura, SmartScreen avisa',
          },
          {
            Plataforma: 'Linux',
            'Onde obter': '[Baixar o AppImage ou o .deb](https://rin.chat/download/) — x86 de 64 bits (amd64)',
          },
          {
            Plataforma: 'Mac e Android',
            'Onde obter': 'Ainda sem download; macOS sem data e Android sem página de download nem página em loja',
          },
          {
            Plataforma: 'Site',
            'Onde obter': '[rin.chat](https://rin.chat/)',
          },
          {
            Plataforma: 'Política de privacidade',
            'Onde obter': '[Política de privacidade](https://rin.chat/privacy/)',
          },
        ],
        note: 'A página de download diz que o app é um beta aberto. Nenhum repositório público de código-fonte foi encontrado.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Rin Chat em resumo',
        columns: ['Atributo', 'Rin Chat'],
        rows: [
          { Atributo: 'Plataforma', 'Rin Chat': 'Windows 10/11, desktop Linux de 64 bits' },
          { Atributo: 'Preço', 'Rin Chat': 'Grátis para uso pessoal' },
          { Atributo: 'Licença', 'Rin Chat': 'Proprietária, código fechado' },
          { Atributo: 'Modelo', 'Rin Chat': 'Nenhum incluído; backend local ou API compatível com OpenAI' },
          { Atributo: 'Formatos de cartão', 'Rin Chat': 'Cartões V1, V2, V3 (PNG), lorebooks' },
          { Atributo: 'Chats em grupo', 'Rin Chat': 'Sim, segundo o fabricante' },
          { Atributo: 'Armazenamento', 'Rin Chat': 'Criptografado com AES-256-GCM, no seu computador' },
          { Atributo: 'Fabricante', 'Rin Chat': 'Rin Chat LLC (Estados Unidos)' },
        ],
        note: 'A ausência de uma afirmação no site do fabricante significa desconhecido, não sem suporte.',
      },
      whatIsRinChat: {
        id: 'what-is-rin-chat',
        title: 'O que é o Rin Chat',
        content: [
          '**O Rin Chat é um frontend de desktop para chat com personagens e roleplay: ele guarda os personagens, os lorebooks e o histórico de chat, e um modelo que você conecta escreve as respostas.** Ele não inclui um modelo de linguagem. O fabricante, a Rin Chat LLC, também mantém o [AI Character Cards](https://aicharactercards.com/), um site onde as pessoas compartilham cartões de personagem e de onde o app pode importá-los.',
          'Ele mira o mesmo público do SillyTavern, mas como um app empacotado, com instalador, atualizações integradas e configuração guiada do backend, em vez de uma interface web auto-hospedada.',
          'Esta análise se baseia no site, nas políticas e no registro de alterações do fabricante. O PromptQuorum não instalou nem testou o Rin Chat, então o quão bem cada recurso funciona é uma afirmação do fabricante.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Primeiros passos',
        content: [
          '**A configuração consiste em instalar, escolher um backend e abrir um cartão de personagem.** Os passos seguem o guia de início rápido do fabricante.',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Baixe a versão na tabela Obter o Rin Chat acima. No Windows, o instalador não tem assinatura de código, então o SmartScreen exibe um aviso; instale só se você confiar na fonte.',
          },
          {
            title: 'Escolha um backend',
            whyItMatters: 'Escolha um app local (Ollama, KoboldCpp ou LM Studio, nenhum precisa de chave) ou um serviço compatível com OpenAI com sua própria chave de API. O app pode instalar o Ollama ou baixar e rodar o KoboldCpp para você.',
          },
          {
            title: 'Abra ou importe um personagem',
            whyItMatters: 'Abra um arquivo do SillyTavern ou do AI Character Cards, ou importe um cartão por link de um site compatível.',
          },
          {
            title: 'Revise as configurações de dados',
            whyItMatters: 'Veja Configurações, depois Dados e backup, para as estatísticas opcionais, e anote a frase de recuperação de 24 palavras da sua biblioteca criptografada.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O conjunto de recursos gira em torno de cartões, mecânicas de jogo e privacidade.** Tudo abaixo vem da página de recursos e do registro de alterações do fabricante.',
        ],
        items: [
          '**Importação de cartões e lorebooks.** Lê cartões de personagem V1, V2 e V3, inclusive os embutidos em um PNG, além de lorebooks avulsos; links funcionam a partir de Chub, RisuRealm, Pygmalion, Perchance e AI Character Cards.',
          '**Modo aventura.** O modelo faz o papel de mestre de jogo enquanto o app atua como árbitro: rola os dados, acompanha as estatísticas e as reverte corretamente quando você edita ou refaz uma mensagem.',
          '**Estilos de documento.** Os cartões podem definir documentos estilizados dentro do chat, como avisos, cartas, cartazes de recompensa e telas de terminal; trinta estilos já vêm incluídos.',
          '**Criador de cartões.** Um editor conversacional, executado no modelo que você conectou, que ajuda a criar e editar cartões, lorebooks e outros elementos do app.',
          '**Grupos, voz e imagens.** Chats em grupo, texto para fala offline incluído (Piper, Kokoro, Pocket TTS), ditado offline com Whisper e geração de imagens por ferramentas como Automatic1111, Forge, SwarmUI e ComfyUI.',
          '**Alcance.** Um bot do Discord e acesso remoto pelo navegador do celular.',
          '**Idiomas.** A página de recursos lista sete idiomas de interface: inglês, chinês simplificado, japonês, espanhol, alemão, francês e russo; as perguntas frequentes da página inicial listam cinco.',
        ],
      },
      backendsHardware: {
        id: 'backends-hardware',
        title: 'Backends e hardware',
        content: [
          '**O Rin Chat não inclui modelo; ele precisa de um backend.** As opções locais são LM Studio, Ollama e KoboldCpp nas portas locais padrão, e qualquer endpoint compatível com OpenAI funciona com uma chave de API. Há predefinições para Z.AI, OpenRouter, NanoGPT, OpenAI, DeepSeek e xAI Grok.',
          'O site não informa um mínimo de RAM ou de GPU para o app em si, então o hardware de que você precisa depende do modelo que rodar. O PromptQuorum não mediu o desempenho.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade, licença e custo',
        content: [
          '**O fabricante diz que cartões e chats são criptografados com AES-256-GCM no seu computador, protegidos pela sua senha ou pelo chaveiro do sistema operacional, com uma frase de recuperação de 24 palavras.** Segundo a política de privacidade, as requisições vão direto do seu dispositivo para o provedor que você escolher e não passam pelos servidores do fabricante.',
          'Os termos dizem que o app envia estatísticas de uso na instalação e na abertura (um ID de instalação aleatório, versão, sistema operacional, arquitetura, formato do pacote e idioma) e que isso "não pode ser desativado"; a política diz que nunca inclui prompts nem personagens. Outras estatísticas, como os provedores usados, são opcionais. O site usa o Google Analytics, com consentimento na UE, no Reino Unido e na Suíça. A política também menciona uma assinatura e uma conta opcionais do Rin Chat; o PromptQuorum não encontrou nenhum preço.',
          'A licença torna o Rin Chat proprietário e grátis para uso pessoal e não comercial, e os usuários devem ter pelo menos 18 anos. O app é de código fechado e o PromptQuorum não inspecionou seu armazenamento nem seu tráfego de rede, então nada disso foi verificado.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Vantagem', 'Significado na prática', 'Limitação / ressalva'],
        rows: [
          {
            Vantagem: 'App de desktop empacotado',
            'Significado na prática': 'Instale, conecte um backend e converse; ele se atualiza.',
            'Limitação / ressalva': 'Por enquanto só Windows e Linux; o instalador do Windows não é assinado.',
          },
          {
            Vantagem: 'Abre cartões existentes',
            'Significado na prática': 'Arquivos e lorebooks do SillyTavern e do AI Character Cards funcionam como estão.',
            'Limitação / ressalva': 'A qualidade da importação não foi testada aqui.',
          },
          {
            Vantagem: 'Modo aventura',
            'Significado na prática': 'O app rola os dados e acompanha as estatísticas, então o modelo não as inventa.',
            'Limitação / ressalva': 'Configurado por cartão; o PromptQuorum não o testou.',
          },
          {
            Vantagem: 'Armazenamento criptografado',
            'Significado na prática': 'Segundo o fabricante, cartões e chats ficam ilegíveis sem sua senha ou chave.',
            'Limitação / ressalva': 'Código fechado, então a criptografia não pode ser auditada.',
          },
          {
            Vantagem: 'Backends flexíveis',
            'Significado na prática': 'Use Ollama, KoboldCpp, LM Studio ou uma API na nuvem.',
            'Limitação / ressalva': 'Sem modelo incluído; APIs na nuvem enviam prompts para fora da sua máquina.',
          },
          {
            Vantagem: 'Uso gratuito',
            'Significado na prática': 'Sem teste nem conta, segundo o fabricante.',
            'Limitação / ressalva': 'Só uso pessoal; as estatísticas de uso são obrigatórias.',
          },
          {
            Vantagem: 'Desenvolvimento ativo',
            'Significado na prática': 'A versão 1.0.4 é datada de 20 de novembro de 2026.',
            'Limitação / ressalva': 'Ainda rotulado como beta aberto, então espere arestas.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Rin Chat e as alternativas',
        content: [
          'Estes são os frontends de roleplay mais próximos do diretório: a opção auto-hospedada mais personalizável, uma com modo de servidor compartilhado, um cliente multiplataforma mais leve e um app de desktop com um hub de personagens integrado.',
        ],
        columns: ['App', 'Plataformas', 'Preço e licença', 'Função', 'Diferença principal'],
        rows: [
          {
            App: 'Rin Chat',
            Plataformas: 'Windows, Linux',
            'Preço e licença': 'Grátis, proprietário',
            Função: 'App de roleplay de desktop',
            'Diferença principal': 'Criptografia, dados e estatísticas; código fechado',
          },
          {
            App: 'SillyTavern',
            Plataformas: 'Windows, Mac, Linux',
            'Preço e licença': 'Grátis, AGPL-3.0',
            Função: 'Frontend de roleplay auto-hospedado',
            'Diferença principal': 'Personalização mais profunda; exige configurar o Node.js',
          },
          {
            App: '[RisuAI](/pt/power-local-llm/risuai-review)',
            Plataformas: 'Web, desktop, celular',
            'Preço e licença': 'Grátis, GPL-3.0',
            Função: 'Frontend de roleplay',
            'Diferença principal': 'Bom no celular; código aberto',
          },
          {
            App: '[Agnai](/pt/power-local-llm/agnai-review)',
            Plataformas: 'Web',
            'Preço e licença': 'Grátis, AGPL-3.0',
            Função: 'Frontend de roleplay multiusuário',
            'Diferença principal': 'Modo de servidor compartilhado; código aberto',
          },
          {
            App: '[Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay)',
            Plataformas: 'Windows, Mac, Linux',
            'Preço e licença': 'Plano grátis, proprietário',
            Função: 'Chat com personagens de desktop',
            'Diferença principal': 'Hub de personagens integrado',
          },
        ],
        note: 'Os detalhes de plataforma, preço e recursos dos apps de terceiros mudam com frequência. Confira os dados atuais na página de cada projeto antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o Rin Chat serve',
        items: [
          '**Jogadores de roleplay que querem um instalador.** Não é preciso Node.js nem configurar servidor.',
          '**Pessoas com cartões de personagem existentes.** Arquivos do SillyTavern e do AI Character Cards abrem diretamente.',
          '**Usuários preocupados com privacidade no Windows ou no Linux.** Armazenamento local criptografado, com um backend local para um chat totalmente local.',
          '**Jogadores no estilo mestre de jogo.** O app cuida dos dados e das estatísticas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o Rin Chat não serve',
        items: [
          '**Quem precisa de código aberto.** O app é proprietário.',
          '**Usuários de Mac e de celular.** Ainda não existe versão publicada para macOS nem para Android.',
          '**Usuários comerciais.** A licença cobre uso pessoal e não comercial.',
          '**Quem precisa de zero telemetria.** Os termos dizem que as estatísticas básicas de uso não podem ser desativadas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Rin Chat funciona offline?',
            a: 'Só com um backend local, como Ollama, KoboldCpp ou LM Studio, rodando no seu computador; o app não inclui modelo. Ele também envia estatísticas de uso na instalação e na abertura, então o PromptQuorum não pode chamá-lo de totalmente offline.',
          },
          {
            q: 'O Rin Chat é grátis?',
            a: 'A página inicial diz que todos os recursos estão liberados, sem período de teste nem conta. Uma assinatura do Rin Chat aparece na política, sem preço encontrado.',
          },
          {
            q: 'Posso usar meus cartões do SillyTavern?',
            a: 'O fabricante diz que os cartões do SillyTavern funcionam como estão, e o app também abre arquivos do AI Character Cards.',
          },
          {
            q: 'Existe versão para Mac ou Android?',
            a: 'Ainda não. O fabricante diz que o macOS está em andamento, sem data, e o Android foi anunciado, mas não tem página de download nem página em loja.',
          },
          {
            q: 'Quem faz o Rin Chat?',
            a: 'A Rin Chat LLC, uma empresa dos Estados Unidos com endereço em Utah na página de contato; os termos são regidos pela lei de Utah.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Rin Chat é uma boa escolha se você quer um app empacotado para Windows ou Linux para conversar com personagens, que abre arquivos do SillyTavern e do AI Character Cards, guarda seus dados criptografados no seu computador e acrescenta dados e estatísticas. Ele lançou a versão 1.0.4 em 20 de novembro de 2026.',
          'As ressalvas são o código fechado, as estatísticas de uso obrigatórias, um instalador do Windows sem assinatura, a ausência de versão para Mac e de uma versão publicada para Android, o rótulo de beta aberto e afirmações que o PromptQuorum não pôde verificar. Teste com um cartão e um backend local antes de migrar uma biblioteca grande.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Rin Chat](https://rin.chat/) — visão geral, recursos e perguntas frequentes.',
          '[Página de download](https://rin.chat/download/) — plataformas e instaladores.',
          '[Registro de alterações](https://rin.chat/changelog) — versão 1.0.4 e datas de lançamento.',
          '[Recursos](https://rin.chat/features/) e [início rápido](https://rin.chat/quickstart/) — formatos de cartão, backends e configuração.',
          '[Política de privacidade](https://rin.chat/privacy/), [termos](https://rin.chat/terms/) e [licença](https://rin.chat/license/) — tratamento de dados, estatísticas, lei aplicável e licenciamento.',
          '[Página de contato](https://rin.chat/contact/) — dados da empresa.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do RisuAI](/pt/power-local-llm/risuai-review) — um frontend de roleplay de código aberto para web, desktop e celular.',
          '[Análise do Agnai](/pt/power-local-llm/agnai-review) — um frontend de roleplay multiusuário.',
          '[Análise do Backyard AI](/pt/power-local-llm/backyard-ai-review-local-roleplay) — um app de chat com personagens de desktop com um hub de personagens integrado.',
          '[SillyTavern vs Agnai vs RisuAI](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparação dos três principais frontends de roleplay.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de IA local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Creative & Roleplay',
    heroImage: '/images/rin-chat-review-hero-ar.webp',
    title: 'مراجعة Rin Chat: تطبيق مكتبي مجاني للعب الأدوار والمحادثة مع الشخصيات بالذكاء الاصطناعي',
    seoTitle: 'مراجعة Rin Chat: تطبيق لعب أدوار مجاني بالذكاء الاصطناعي',
    intro: 'Rin Chat تطبيق مكتبي مجاني للعب الأدوار والمحادثة مع الشخصيات بالذكاء الاصطناعي على Windows وLinux. يتصل بواجهة خلفية محلية مثل Ollama أو KoboldCpp أو LM Studio، أو بأي واجهة API متوافقة مع OpenAI، ويفتح مباشرةً بطاقات الشخصيات وكتب المعرفة (lorebooks) الخاصة بـ SillyTavern وAI Character Cards. تغطي هذه المراجعة التنزيلات والميزات والخصوصية والقيود والبدائل؛ وقد قرأت PromptQuorum صفحات المطوّر لكنها لم تختبر التطبيق.',
    metaDescription: 'مراجعة Rin Chat: تطبيق مجاني للعب الأدوار على Windows وLinux ببطاقات مشفّرة ونرد لمدير اللعبة ومحرر بطاقات، مع Ollama أو أي API. القيود داخل المراجعة.',
    twitterDescription: 'مراجعة Rin Chat: تطبيق مكتبي مجاني للعب الأدوار على Windows وLinux ببطاقات شخصيات مشفّرة ونرد للمغامرات ومحرر بطاقات. الخصوصية والقيود والبدائل.',
    audience: 'محبو لعب الأدوار والمحادثة مع الشخصيات الذين يريدون تطبيقًا مكتبيًا جاهزًا بدل واجهة تستضيفها بنفسك، مع نماذج محلية أو سحابية — يغطي التنزيلات والميزات والخصوصية والقيود والبدائل.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rin Chat review',
    targetKeywords: [
      'مراجعة rin chat',
      'rin chat لعب أدوار بالذكاء الاصطناعي',
      'بديل sillytavern تطبيق مكتبي',
      'محادثة شخصيات بالذكاء الاصطناعي windows linux',
      'تطبيق لعب أدوار ollama koboldcpp',
      'تطبيق لعب أدوار مشفّر بالذكاء الاصطناعي',
      'تطبيق بطاقات شخصيات وكتب معرفة',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**Rin Chat تطبيق مكتبي مجاني لأنظمة Windows وLinux يشغّل لعب الأدوار والمحادثة مع الشخصيات فوق نموذج تتصل به أنت، محلي أو سحابي.** يقرأ ملفات SillyTavern وAI Character Cards، ويضيف وضع مدير اللعبة بالنرد والإحصاءات، ويخزّن البطاقات والمحادثات مشفّرة على حاسوبك بحسب المطوّر. وهو مغلق المصدر ويوصف بأنه نسخة تجريبية مفتوحة، وتذكر الشروط أن إحصاءات الاستخدام «لا يمكن إيقافها»، ولم تختبره PromptQuorum.',
    quickAnswerTop: {
      ar: {
        question: 'هل Rin Chat تطبيق محلي للعب الأدوار بالذكاء الاصطناعي؟',
        answer: 'جزئيًا. التطبيق نفسه يعمل على حاسوبك ويخزّن بياناته عليه، لكنه لا يأتي بأي نموذج: تتصل بـ Ollama أو KoboldCpp أو LM Studio أو أي خدمة متوافقة مع OpenAI. مع واجهة خلفية محلية تبقى المحادثة على جهازك؛ ومع واجهة API سحابية تنتقل الرسائل من جهازك إلى ذلك المزوّد، بحسب سياسة الخصوصية لدى المطوّر.',
        bullets: [
          'يفتح بطاقات الشخصيات بصيغ V1 وV2 وV3، ومنها البطاقات المضمّنة في صور PNG، وكتب المعرفة (lorebooks).',
          'تُخزَّن البطاقات والمحادثات بتشفير AES-256-GCM على حاسوبك، بحسب المطوّر.',
          'تتوفر نسخ لنظام Windows 10 أو 11 ولنظام Linux بمعمارية 64 بت؛ ولا يوجد موعد لإصدار macOS ولا نسخة لـ Android حتى الآن.',
          'التطبيق مغلق المصدر، فلا يمكن التحقق من ادعاءاته في الشيفرة.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'الحصول على Rin Chat', anchor: 'get-it' },
      { label: 'Rin Chat في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Rin Chat', anchor: 'what-is-rin-chat' },
      { label: 'البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الواجهات الخلفية والعتاد', anchor: 'backends-hardware' },
      { label: 'الخصوصية والترخيص والتكلفة', anchor: 'privacy' },
      { label: 'المزايا والقيود', anchor: 'tradeoffs' },
      { label: 'Rin Chat مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Rin Chat', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Rin Chat', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Rin Chat تطبيق مكتبي مجاني تحاور فيه شخصيات ذكاء اصطناعي من ملفات بطاقات وتشغّل قواعد خفيفة للعب الأدوار، بنموذج محلي أو سحابي تتصل به بنفسك.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله نسخة جاهزة للتثبيت من فكرة SillyTavern: تنزّله، وتوجّهه إلى Ollama أو إلى مفتاح API، ثم تفتح بطاقة شخصية.',
          },
        ],
        items: [
          'الادعاء المحلي: يبقى التطبيق وبياناته على حاسوبك؛ أما بقاء المحادثة نفسها محليًا فيتوقف على الواجهة الخلفية التي تختارها.',
          'المطوّر: Rin Chat LLC، شركة في ولاية يوتا بالولايات المتحدة، بحسب صفحة التواصل لديها.',
          'الصيانة: الإصدار 1.0.4 مؤرخ في 20 نوفمبر 2026، ما يدل على تطوير نشط، لكن الموقع ما زال يسميه نسخة تجريبية مفتوحة.',
          'التكلفة: مجاني للاستخدام الشخصي غير التجاري بموجب رخصة مملوكة.',
          'الثغرات: مغلق المصدر، وإحصاءات استخدام إلزامية، ومثبّت Windows غير موقَّع، ولا نسخة لـ macOS ولا نسخة منشورة لـ Android، ولا اختبار عملي من PromptQuorum.',
        ],
      },
      getItRinChat: {
        id: 'get-it',
        title: 'الحصول على Rin Chat',
        content: [
          '**يُثبَّت Rin Chat مثل أي تطبيق مكتبي، فلا حاجة إلى الطرفية.** نزّل النسخة المناسبة لنظامك من الموقع الرسمي؛ ثم يحدّث التطبيق نفسه.',
        ],
        columns: ['المنصة', 'مصدر الحصول'],
        rows: [
          {
            'المنصة': 'Windows',
            'مصدر الحصول': '[التنزيل لـ Windows](https://rin.chat/download/) — Windows 10 أو 11، مثبّت 64 بت؛ غير موقَّع بالشيفرة، لذا يحذّر SmartScreen',
          },
          {
            'المنصة': 'Linux',
            'مصدر الحصول': '[تنزيل AppImage أو .deb](https://rin.chat/download/) — x86 بمعمارية 64 بت (amd64)',
          },
          {
            'المنصة': 'Mac وAndroid',
            'مصدر الحصول': 'لا تنزيل حتى الآن؛ macOS بلا موعد، وAndroid بلا صفحة تنزيل أو صفحة في المتجر',
          },
          {
            'المنصة': 'الموقع',
            'مصدر الحصول': '[rin.chat](https://rin.chat/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مصدر الحصول': '[سياسة خصوصية Rin Chat](https://rin.chat/privacy/)',
          },
        ],
        note: 'تقول صفحة التنزيل إن التطبيق نسخة تجريبية مفتوحة. ولم يُعثر على مستودع شيفرة عام.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Rin Chat في لمحة',
        columns: ['الخاصية', 'Rin Chat'],
        rows: [
          { 'الخاصية': 'المنصة', 'Rin Chat': 'Windows 10/11 وسطح مكتب Linux بمعمارية 64 بت' },
          { 'الخاصية': 'السعر', 'Rin Chat': 'مجاني للاستخدام الشخصي' },
          { 'الخاصية': 'الرخصة', 'Rin Chat': 'مملوك، مغلق المصدر' },
          { 'الخاصية': 'النموذج', 'Rin Chat': 'لا يوجد مضمّن؛ واجهة محلية أو أي API متوافق مع OpenAI' },
          { 'الخاصية': 'صيغ البطاقات', 'Rin Chat': 'بطاقات V1 وV2 وV3 (PNG)، وlorebooks' },
          { 'الخاصية': 'المحادثات الجماعية', 'Rin Chat': 'نعم، بحسب المطوّر' },
          { 'الخاصية': 'التخزين', 'Rin Chat': 'مشفّر بـ AES-256-GCM على حاسوبك' },
          { 'الخاصية': 'المطوّر', 'Rin Chat': 'Rin Chat LLC (الولايات المتحدة)' },
        ],
        note: 'غياب الذكر في موقع المطوّر يعني غير معروف، لا غير مدعوم.',
      },
      whatIsRinChat: {
        id: 'what-is-rin-chat',
        title: 'ما هو Rin Chat',
        content: [
          '**Rin Chat واجهة مكتبية للمحادثة مع الشخصيات ولعب الأدوار: تحفظ الشخصيات وكتب المعرفة وسجل المحادثات، ويكتب الردود نموذج تتصل به.** ولا يتضمن نموذجًا لغويًا. ويدير المطوّر، Rin Chat LLC، موقع [AI Character Cards](https://aicharactercards.com/) أيضًا، وهو موقع يتبادل فيه الناس بطاقات الشخصيات، ويمكن للتطبيق الاستيراد منه.',
          'يستهدف القرّاء أنفسهم الذين يستهدفهم SillyTavern، لكن في صورة تطبيق جاهز بمثبّت وتحديثات مدمجة وإعداد موجَّه للواجهة الخلفية بدل واجهة ويب تستضيفها بنفسك.',
          'تعتمد هذه المراجعة على موقع المطوّر وسياساته وسجل التغييرات. ولم تثبّت PromptQuorum تطبيق Rin Chat ولم تختبره، لذا فمدى جودة أي ميزة هو قول المطوّر.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'البدء',
        content: [
          '**الإعداد هو تثبيت واختيار واجهة خلفية وبطاقة شخصية.** تتبع الخطوات دليل البدء السريع لدى المطوّر.',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'نزّل النسخة من جدول «الحصول على Rin Chat» أعلاه. على Windows المثبّت غير موقَّع بالشيفرة، فيعرض SmartScreen تحذيرًا؛ فلا تثبّته إلا إذا كنت تثق بالمصدر.',
          },
          {
            title: 'اختر واجهة خلفية',
            whyItMatters: 'اختر تطبيقًا محليًا (Ollama أو KoboldCpp أو LM Studio، ولا يحتاج أي منها إلى مفتاح) أو خدمة متوافقة مع OpenAI بمفتاح API خاص بك. يمكن للتطبيق أن يثبّت Ollama أو أن ينزّل KoboldCpp ويشغّله عنك.',
          },
          {
            title: 'افتح شخصية أو استوردها',
            whyItMatters: 'افتح ملف SillyTavern أو AI Character Cards، أو استورد بطاقة عبر رابط من موقع مدعوم.',
          },
          {
            title: 'راجع إعدادات البيانات',
            whyItMatters: 'افتح الإعدادات ثم «البيانات والنسخ الاحتياطي» لمراجعة الإحصاءات الاختيارية، ودوّن عبارة الاسترداد المكوّنة من 24 كلمة لمكتبتك المشفّرة.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**تتمحور الميزات حول البطاقات وآليات اللعب والخصوصية.** كل ما يلي مصدره صفحة الميزات وسجل التغييرات لدى المطوّر.',
        ],
        items: [
          '**استيراد البطاقات وكتب المعرفة.** يقرأ بطاقات الشخصيات V1 وV2 وV3، ومنها المضمّنة في PNG، إضافةً إلى كتب المعرفة المستقلة؛ وتعمل الروابط من Chub وRisuRealm وPygmalion وPerchance وAI Character Cards.',
          '**وضع المغامرة.** يؤدي النموذج دور مدير اللعبة بينما يعمل التطبيق حكَمًا: يرمي النرد ويتتبع الإحصاءات ويعكسها بسلاسة عند تعديل رسالة أو إعادة توليدها.',
          '**أنماط المستندات.** يمكن للبطاقات تعريف مستندات منسّقة داخل المحادثة مثل الإشعارات والرسائل وملصقات المكافآت وشاشات الطرفية؛ وفيه ثلاثون نمطًا مدمجًا.',
          '**محرر البطاقات.** محرر حواري يعمل على النموذج الذي تتصل به، يساعدك على إنشاء البطاقات وكتب المعرفة وعناصر التطبيق الأخرى وتعديلها.',
          '**المجموعات والصوت والصور.** محادثات جماعية، وتحويل نص إلى كلام مضمّن يعمل دون اتصال (Piper وKokoro وPocket TTS)، وإملاء دون اتصال بـ Whisper، وتوليد صور عبر أدوات مثل Automatic1111 وForge وSwarmUI وComfyUI.',
          '**الوصول.** بوت Discord، ووصول عن بُعد من متصفح الهاتف.',
          '**اللغات.** تسرد صفحة الميزات سبع لغات للواجهة: الإنجليزية والصينية المبسطة واليابانية والإسبانية والألمانية والفرنسية والروسية؛ وتسرد الأسئلة الشائعة في الصفحة الرئيسية خمس لغات.',
        ],
      },
      backendsHardware: {
        id: 'backends-hardware',
        title: 'الواجهات الخلفية والعتاد',
        content: [
          '**لا يأتي Rin Chat بأي نموذج؛ إنه يحتاج إلى واجهة خلفية.** الخيارات المحلية هي LM Studio وOllama وKoboldCpp على منافذها المحلية الافتراضية، ويعمل أي نقطة نهاية متوافقة مع OpenAI بمفتاح API. وتوجد إعدادات جاهزة لـ Z.AI وOpenRouter وNanoGPT وOpenAI وDeepSeek وxAI Grok.',
          'لا يذكر الموقع حدًا أدنى للذاكرة RAM أو لوحدة GPU للتطبيق نفسه، لذا يتوقف العتاد الذي تحتاجه على النموذج الذي تشغّله. ولم تقِس PromptQuorum الأداء.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والترخيص والتكلفة',
        content: [
          '**يقول المطوّر إن البطاقات والمحادثات مشفّرة بـ AES-256-GCM على حاسوبك، ومحمية بكلمة المرور أو بسلسلة مفاتيح نظام التشغيل، مع عبارة استرداد من 24 كلمة.** وبحسب سياسة الخصوصية، تنتقل الطلبات مباشرةً من جهازك إلى المزوّد الذي تختاره ولا تمر عبر خوادم المطوّر.',
          'تقول الشروط إن التطبيق يرسل إحصاءات استخدام عند التثبيت وعند التشغيل (معرّف تثبيت عشوائي والإصدار ونظام التشغيل والمعمارية وصيغة الحزمة واللغة) وإن هذا «لا يمكن إيقافه»؛ وتقول السياسة إنها لا تتضمن أبدًا الرسائل ولا الشخصيات. أما الإحصاءات الإضافية، مثل المزوّدين المستخدمين، فاختيارية. ويستخدم الموقع Google Analytics، بموافقة المستخدم في الاتحاد الأوروبي والمملكة المتحدة وسويسرا. وتذكر السياسة أيضًا اشتراكًا وحسابًا اختياريين في Rin Chat؛ ولم تجد PromptQuorum له سعرًا.',
          'تجعل الرخصة Rin Chat مملوكًا ومجانيًا للاستخدام الشخصي غير التجاري، ويجب ألا يقل عمر المستخدم عن 18 عامًا. والتطبيق مغلق المصدر ولم تفحص PromptQuorum تخزينه ولا حركة الشبكة فيه، لذا لا شيء من هذا موثّق.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المزايا والقيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / التنبيه'],
        rows: [
          {
            'الميزة': 'تطبيق مكتبي جاهز',
            'ما تعنيه في الاستخدام الفعلي': 'ثبّت واتصل بواجهة خلفية وابدأ المحادثة، مع تحديثات مدمجة.',
            'القيد / التنبيه': 'Windows وLinux فقط حاليًا؛ ومثبّت Windows غير موقَّع.',
          },
          {
            'الميزة': 'يفتح البطاقات الموجودة',
            'ما تعنيه في الاستخدام الفعلي': 'تعمل ملفات SillyTavern وAI Character Cards وكتب المعرفة كما هي.',
            'القيد / التنبيه': 'لم تُختبر جودة الاستيراد هنا.',
          },
          {
            'الميزة': 'وضع المغامرة',
            'ما تعنيه في الاستخدام الفعلي': 'يرمي التطبيق النرد ويتتبع الإحصاءات، فلا يختلقها النموذج.',
            'القيد / التنبيه': 'يُعدّ لكل بطاقة؛ ولم تجرّبه PromptQuorum.',
          },
          {
            'الميزة': 'تخزين مشفّر',
            'ما تعنيه في الاستخدام الفعلي': 'بحسب المطوّر، البطاقات والمحادثات غير مقروءة دون كلمة المرور أو المفتاح.',
            'القيد / التنبيه': 'مغلق المصدر، فلا يمكن تدقيق التشفير.',
          },
          {
            'الميزة': 'واجهات خلفية مرنة',
            'ما تعنيه في الاستخدام الفعلي': 'استخدم Ollama أو KoboldCpp أو LM Studio أو API سحابية.',
            'القيد / التنبيه': 'لا نموذج مضمّن؛ وواجهات API السحابية ترسل الرسائل خارج جهازك.',
          },
          {
            'الميزة': 'مجاني',
            'ما تعنيه في الاستخدام الفعلي': 'لا تجربة محدودة ولا حساب، بحسب المطوّر.',
            'القيد / التنبيه': 'للاستخدام الشخصي فقط؛ وإحصاءات الاستخدام إلزامية.',
          },
          {
            'الميزة': 'تطوير نشط',
            'ما تعنيه في الاستخدام الفعلي': 'الإصدار 1.0.4 مؤرخ في 20 نوفمبر 2026.',
            'القيد / التنبيه': 'ما زال موصوفًا بأنه نسخة تجريبية مفتوحة، فتوقّع بعض الخشونة.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Rin Chat مقابل البدائل',
        content: [
          'هذه أقرب واجهات لعب الأدوار في الدليل: الخيار المستضاف ذاتيًا الأكثر قابلية للتخصيص، وخيار بوضع خادم مشترك، وعميل أخف متعدد المنصات، وتطبيق مكتبي بمركز شخصيات مدمج.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'الدور', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Rin Chat',
            'المنصات': 'Windows وLinux',
            'السعر والترخيص': 'مجاني، مملوك',
            'الدور': 'تطبيق مكتبي للعب الأدوار',
            'الفرق الرئيسي': 'تخزين مشفّر ونرد وإحصاءات؛ مغلق المصدر',
          },
          {
            'التطبيق': 'SillyTavern',
            'المنصات': 'Windows وMac وLinux',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'الدور': 'واجهة لعب أدوار مستضافة ذاتيًا',
            'الفرق الرئيسي': 'أعمق تخصيص؛ يحتاج إعداد Node.js',
          },
          {
            'التطبيق': '[RisuAI](/ar/power-local-llm/risuai-review)',
            'المنصات': 'ويب وسطح مكتب وجوال',
            'السعر والترخيص': 'مجاني، GPL-3.0',
            'الدور': 'واجهة للعب الأدوار',
            'الفرق الرئيسي': 'مناسب للجوال؛ مفتوح المصدر',
          },
          {
            'التطبيق': '[Agnai](/ar/power-local-llm/agnai-review)',
            'المنصات': 'ويب',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'الدور': 'واجهة لعب أدوار متعددة المستخدمين',
            'الفرق الرئيسي': 'وضع خادم مشترك؛ مفتوح المصدر',
          },
          {
            'التطبيق': '[Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay)',
            'المنصات': 'Windows وMac وLinux',
            'السعر والترخيص': 'نسخة مجانية، مملوك',
            'الدور': 'محادثة شخصيات مكتبية',
            'الفرق الرئيسي': 'مركز شخصيات مدمج',
          },
        ],
        note: 'تتغير منصات التطبيقات الخارجية وأسعارها وميزاتها كثيرًا. تحقق من التفاصيل الحالية في صفحة كل مشروع قبل أن تقرر.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Rin Chat',
        items: [
          '**محبو لعب الأدوار الذين يريدون مثبّتًا.** لا حاجة إلى Node.js ولا إلى إعداد خادم.',
          '**من لديهم بطاقات شخصيات جاهزة.** تُفتح ملفات SillyTavern وAI Character Cards مباشرةً.',
          '**المهتمون بالخصوصية على Windows أو Linux.** تخزين محلي مشفّر، مع واجهة خلفية محلية لمحادثة محلية بالكامل.',
          '**من يحبون أسلوب مدير اللعبة.** يتولى التطبيق النرد والإحصاءات.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Rin Chat',
        items: [
          '**من يحتاجون إلى شيفرة مفتوحة المصدر.** التطبيق مملوك.',
          '**مستخدمو Mac والهاتف.** لا توجد نسخة لـ macOS ولا نسخة منشورة لـ Android حتى الآن.',
          '**المستخدمون التجاريون.** تغطي الرخصة الاستخدام الشخصي غير التجاري.',
          '**من يحتاجون إلى تتبّع صفري.** تقول الشروط إن إحصاءات الاستخدام الأساسية لا يمكن إيقافها.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Rin Chat دون اتصال بالإنترنت؟',
            a: 'فقط مع واجهة خلفية محلية مثل Ollama أو KoboldCpp أو LM Studio تعمل على حاسوبك؛ فالتطبيق لا يأتي بأي نموذج. وهو يرسل أيضًا إحصاءات استخدام عند التثبيت وعند التشغيل، لذا لا تستطيع PromptQuorum وصفه بأنه يعمل دون اتصال تمامًا.',
          },
          {
            q: 'هل Rin Chat مجاني؟',
            a: 'تقول الصفحة الرئيسية إن كل الميزات مفتوحة دون تجربة محدودة ودون حساب. ويظهر اشتراك Rin Chat في السياسة، دون العثور على سعر له.',
          },
          {
            q: 'هل يمكنني استخدام بطاقات SillyTavern الخاصة بي؟',
            a: 'يقول المطوّر إن بطاقات SillyTavern تعمل كما هي، ويفتح التطبيق ملفات AI Character Cards أيضًا.',
          },
          {
            q: 'هل توجد نسخة لـ Mac أو Android؟',
            a: 'ليس بعد. يقول المطوّر إن macOS قيد العمل دون موعد، وإن Android معلن لكن بلا صفحة تنزيل أو صفحة في المتجر.',
          },
          {
            q: 'من يصنع Rin Chat؟',
            a: 'Rin Chat LLC، شركة أمريكية بعنوان في ولاية يوتا في صفحة التواصل لديها؛ والشروط تخضع لقانون ولاية يوتا.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'Rin Chat خيار جيد إن أردت تطبيقًا جاهزًا لنظام Windows أو Linux للمحادثة مع الشخصيات، يفتح ملفات SillyTavern وAI Character Cards ويُبقي بياناته مشفّرة على حاسوبك ويضيف النرد والإحصاءات. وقد صدر له الإصدار 1.0.4 في 20 نوفمبر 2026.',
          'التنبيهات هي: مغلق المصدر، وإحصاءات استخدام إلزامية، ومثبّت Windows غير موقَّع، ولا نسخة لـ Mac ولا نسخة منشورة لـ Android، ووصف النسخة التجريبية المفتوحة، وادعاءات لم تستطع PromptQuorum التحقق منها. جرّبه ببطاقة واحدة وواجهة خلفية محلية قبل نقل مكتبة كبيرة.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Rin Chat](https://rin.chat/) — نظرة عامة والميزات والأسئلة الشائعة.',
          '[صفحة التنزيل](https://rin.chat/download/) — المنصات والمثبّتات.',
          '[سجل التغييرات](https://rin.chat/changelog) — الإصدار 1.0.4 وتواريخ الإصدارات.',
          '[الميزات](https://rin.chat/features/) و[البدء السريع](https://rin.chat/quickstart/) — صيغ البطاقات والواجهات الخلفية والإعداد.',
          '[سياسة الخصوصية](https://rin.chat/privacy/) و[الشروط](https://rin.chat/terms/) و[الرخصة](https://rin.chat/license/) — التعامل مع البيانات والإحصاءات والقانون الحاكم والترخيص.',
          '[صفحة التواصل](https://rin.chat/contact/) — بيانات الشركة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة RisuAI](/ar/power-local-llm/risuai-review) — واجهة لعب أدوار مفتوحة المصدر للويب وسطح المكتب والجوال.',
          '[مراجعة Agnai](/ar/power-local-llm/agnai-review) — واجهة لعب أدوار متعددة المستخدمين.',
          '[مراجعة Backyard AI](/ar/power-local-llm/backyard-ai-review-local-roleplay) — تطبيق مكتبي لمحادثة الشخصيات بمركز شخصيات مدمج.',
          '[SillyTavern مقابل Agnai مقابل RisuAI](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — مقارنة بين أهم ثلاث واجهات للعب الأدوار.',
          '[دليل برمجيات النماذج اللغوية المحلية الكامل](/ar/directory) — دليل أوسع لأدوات الذكاء الاصطناعي المحلي عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-21',
    dateModified: '2026-11-21',
    next_refresh_due: '2027-05-21',
    theme: 'Creative & Roleplay',
    heroImage: '/images/rin-chat-review-hero-ko.webp',
    title: 'Rin Chat 리뷰: AI 롤플레이와 캐릭터 채팅을 위한 무료 데스크톱 앱',
    seoTitle: 'Rin Chat 리뷰: 무료 AI 롤플레이 데스크톱 앱',
    intro: 'Rin Chat은 Windows와 Linux에서 AI 롤플레이와 캐릭터 채팅을 할 수 있는 무료 데스크톱 앱입니다. Ollama, KoboldCpp, LM Studio 같은 로컬 백엔드나 OpenAI 호환 API에 연결하며, SillyTavern과 AI Character Cards의 캐릭터 카드와 로어북을 바로 열 수 있습니다. 이 리뷰는 다운로드, 기능, 개인정보 보호, 한계, 대안을 다룹니다. PromptQuorum은 개발사의 페이지를 읽었지만 앱을 직접 테스트하지는 않았습니다.',
    metaDescription: 'Rin Chat 리뷰: 암호화 카드, 게임 마스터 주사위, 카드 포지를 갖춘 Windows·Linux용 무료 롤플레이 앱. Ollama나 API 사용, 한계 정리.',
    twitterDescription: 'Rin Chat 리뷰: 암호화된 캐릭터 카드, 모험 주사위, 카드 포지를 갖춘 Windows·Linux용 무료 데스크톱 롤플레이 앱. 개인정보 보호, 한계, 대안을 정리했습니다.',
    audience: '직접 서버를 운영하는 프런트엔드 대신 바로 쓸 수 있는 데스크톱 앱으로 로컬 또는 클라우드 모델과 롤플레이, 캐릭터 채팅을 하려는 사용자를 위한 글입니다. 다운로드, 기능, 개인정보 보호, 한계, 대안을 다룹니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Rin Chat review',
    targetKeywords: [
      'rin chat 리뷰',
      'rin chat ai 롤플레이',
      'sillytavern 대안 데스크톱 앱',
      'ai 캐릭터 채팅 windows linux',
      '롤플레이 앱 ollama koboldcpp',
      '암호화 ai 롤플레이 앱',
      '캐릭터 카드 로어북 앱',
    ],
    current_hardware_mentioned: [
      'Windows PC',
      'Linux PC',
    ],
    leadAnswerBlock: '**Rin Chat은 Windows와 Linux용 무료 데스크톱 앱으로, 사용자가 연결한 로컬 또는 클라우드 모델 위에서 AI 롤플레이와 캐릭터 채팅을 실행합니다.** SillyTavern과 AI Character Cards 파일을 읽고, 주사위와 능력치를 갖춘 게임 마스터 모드를 더하며, 개발사에 따르면 카드와 채팅을 컴퓨터에 암호화해 저장합니다. 비공개 소스이고 오픈 베타로 표시되어 있으며, 약관은 사용 통계를 "끌 수 없다"고 밝히고, PromptQuorum은 앱을 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Rin Chat은 로컬 AI 롤플레이 앱입니까?',
        answer: '부분적으로 그렇습니다. 앱 자체는 사용자의 컴퓨터에서 실행되고 데이터도 그곳에 저장하지만, 모델은 포함되어 있지 않아 Ollama, KoboldCpp, LM Studio 또는 OpenAI 호환 서비스에 연결해야 합니다. 로컬 백엔드를 쓰면 채팅이 기기에 남고, 클라우드 API를 쓰면 개발사의 개인정보 처리방침에 따라 프롬프트가 기기에서 해당 제공업체로 전송됩니다.',
        bullets: [
          'PNG 이미지에 내장된 카드를 포함한 V1, V2, V3 캐릭터 카드와 로어북을 엽니다.',
          '개발사에 따르면 카드와 채팅은 컴퓨터에 AES-256-GCM 암호화로 저장됩니다.',
          'Windows 10 또는 11과 64비트 Linux 빌드가 있으며, macOS는 출시일이 없고 Android 빌드는 아직 제공되지 않습니다.',
          '앱은 비공개 소스이므로 그 주장을 코드로 확인할 수 없습니다.',
        ],
        updatedDate: '2026-11-21',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Rin Chat 받기', anchor: 'get-it' },
      { label: 'Rin Chat 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Rin Chat이란', anchor: 'what-is-rin-chat' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능', anchor: 'features' },
      { label: '백엔드와 하드웨어', anchor: 'backends-hardware' },
      { label: '개인정보 보호, 라이선스, 비용', anchor: 'privacy' },
      { label: '장점과 한계', anchor: 'tradeoffs' },
      { label: 'Rin Chat과 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Rin Chat을 쓰면 좋은 사용자', anchor: 'who-should-use' },
      { label: 'Rin Chat을 쓰지 말아야 할 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Rin Chat은 카드 파일의 AI 캐릭터와 대화하고 가벼운 롤플레잉 게임 규칙을 돌릴 수 있는 무료 데스크톱 앱이며, 로컬 또는 클라우드 모델은 사용자가 직접 연결합니다.',
          },
          {
            type: 'plain-terms',
            text: 'SillyTavern의 아이디어를 바로 설치해 쓸 수 있게 만든 버전이라고 생각하면 됩니다. 내려받아 Ollama나 API 키에 연결한 뒤 캐릭터 카드를 열면 됩니다.',
          },
        ],
        items: [
          '로컬 주장: 앱과 데이터는 컴퓨터에 남으며, 채팅 자체가 로컬에 남는지는 선택한 백엔드에 달려 있습니다.',
          '개발사: 연락처 페이지에 따르면 미국 유타주의 회사인 Rin Chat LLC입니다.',
          '유지보수: 버전 1.0.4가 2026년 11월 20일자로 개발이 활발함을 보여 주지만, 사이트는 여전히 오픈 베타라고 부릅니다.',
          '비용: 독점 라이선스 아래 개인용, 비상업적 용도로 무료입니다.',
          '공백: 비공개 소스, 필수 사용 통계, 서명되지 않은 Windows 설치 파일, macOS와 정식 출시된 Android 빌드 없음, PromptQuorum의 직접 테스트 없음.',
        ],
      },
      getItRinChat: {
        id: 'get-it',
        title: 'Rin Chat 받기',
        content: [
          '**Rin Chat은 다른 데스크톱 앱처럼 설치하므로 터미널이 필요 없습니다.** 공식 사이트에서 사용 중인 시스템용 빌드를 내려받으면 되고, 이후에는 앱이 스스로 업데이트됩니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Windows',
            '받는 곳': '[Windows용 다운로드](https://rin.chat/download/) — Windows 10 또는 11, 64비트 설치 파일, 코드 서명 없음으로 SmartScreen 경고',
          },
          {
            '플랫폼': 'Linux',
            '받는 곳': '[AppImage 또는 .deb 다운로드](https://rin.chat/download/) — 64비트 x86(amd64)',
          },
          {
            '플랫폼': 'Mac과 Android',
            '받는 곳': '아직 다운로드 없음, 개발사에 따르면 macOS는 일정 없이 작업 중이며 Android는 예고되었으나 다운로드 페이지나 스토어 등록이 없음',
          },
          {
            '플랫폼': '공식 사이트',
            '받는 곳': '[rin.chat](https://rin.chat/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[Rin Chat 개인정보 처리방침](https://rin.chat/privacy/)',
          },
        ],
        note: '다운로드 페이지는 앱이 오픈 베타라고 밝힙니다. 공개 소스 저장소는 찾지 못했습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Rin Chat 한눈에 보기',
        columns: ['항목', 'Rin Chat'],
        rows: [
          { '항목': '플랫폼', 'Rin Chat': 'Windows 10/11, 64비트 Linux 데스크톱' },
          { '항목': '가격', 'Rin Chat': '개인용 무료' },
          { '항목': '라이선스', 'Rin Chat': '독점, 비공개 소스' },
          { '항목': '모델', 'Rin Chat': '내장 없음, 로컬 백엔드 또는 OpenAI 호환 API' },
          { '항목': '카드 형식', 'Rin Chat': 'V1, V2, V3 카드(PNG), 로어북' },
          { '항목': '그룹 채팅', 'Rin Chat': '예, 개발사에 따름' },
          { '항목': '저장 방식', 'Rin Chat': '컴퓨터에 AES-256-GCM 암호화 저장' },
          { '항목': '개발사', 'Rin Chat': 'Rin Chat LLC(미국)' },
        ],
        note: '개발사 사이트에 언급이 없는 항목은 지원하지 않는다는 뜻이 아니라 알 수 없다는 뜻입니다.',
      },
      whatIsRinChat: {
        id: 'what-is-rin-chat',
        title: 'Rin Chat이란',
        content: [
          '**Rin Chat은 캐릭터 채팅과 롤플레이를 위한 데스크톱 프런트엔드로, 캐릭터, 로어북, 채팅 기록을 보관하고 답변은 사용자가 연결한 모델이 작성합니다.** 언어 모델은 포함되어 있지 않습니다. 개발사인 Rin Chat LLC는 사람들이 캐릭터 카드를 공유하는 사이트인 [AI Character Cards](https://aicharactercards.com/)도 운영하며, 앱은 이곳에서 카드를 가져올 수 있습니다.',
          'SillyTavern과 같은 독자층을 겨냥하지만, 자체 호스팅 웹 인터페이스 대신 설치 파일, 내장 업데이트, 안내형 백엔드 설정을 갖춘 패키지 앱입니다.',
          '이 리뷰는 개발사의 웹사이트, 정책, 변경 기록에 근거합니다. PromptQuorum은 Rin Chat을 설치하거나 테스트하지 않았으므로, 각 기능이 얼마나 잘 작동하는지는 개발사의 설명입니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 설치, 백엔드 선택, 캐릭터 카드로 이루어집니다.** 단계는 개발사의 빠른 시작 안내를 따릅니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: '위의 Rin Chat 받기 표에서 빌드를 내려받습니다. Windows 설치 파일은 코드 서명이 없어 SmartScreen이 경고를 표시하므로, 출처를 신뢰할 때만 설치하십시오.',
          },
          {
            title: '백엔드 선택',
            whyItMatters: '로컬 앱(Ollama, KoboldCpp, LM Studio, 모두 키가 필요 없음) 또는 본인의 API 키로 쓰는 OpenAI 호환 서비스를 고릅니다. 앱이 Ollama를 설치하거나 KoboldCpp를 내려받아 실행해 줄 수 있습니다.',
          },
          {
            title: '캐릭터 열기 또는 가져오기',
            whyItMatters: 'SillyTavern 또는 AI Character Cards 파일을 열거나, 지원되는 사이트의 링크로 카드를 가져옵니다.',
          },
          {
            title: '데이터 설정 확인',
            whyItMatters: '설정의 데이터 및 백업 항목에서 선택형 통계를 확인하고, 암호화된 라이브러리의 24단어 복구 문구를 적어 두십시오.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**기능은 카드, 게임 메커니즘, 개인정보 보호를 중심으로 구성되어 있습니다.** 아래 내용은 모두 개발사의 기능 페이지와 변경 기록에서 가져왔습니다.',
        ],
        items: [
          '**카드와 로어북 가져오기.** PNG에 내장된 카드를 포함한 V1, V2, V3 캐릭터 카드와 단독 로어북을 읽으며, Chub, RisuRealm, Pygmalion, Perchance, AI Character Cards의 링크가 작동합니다.',
          '**모험 모드.** 모델이 게임 마스터를 맡고 앱이 심판 역할을 합니다. 주사위를 굴리고 능력치를 추적하며, 메시지를 수정하거나 다시 생성할 때 깔끔하게 되돌립니다.',
          '**문서 스타일.** 카드는 공지, 편지, 현상금 포스터, 터미널 화면 같은 채팅 안의 스타일 문서를 정의할 수 있으며, 서른 가지 스타일이 내장되어 있습니다.',
          '**카드 포지.** 연결한 모델로 실행되는 대화형 편집기로, 카드, 로어북, 기타 앱 요소를 만들고 편집하도록 돕습니다.',
          '**그룹, 음성, 이미지.** 그룹 채팅, 내장 오프라인 음성 합성(Piper, Kokoro, Pocket TTS), Whisper 기반 오프라인 받아쓰기, Automatic1111, Forge, SwarmUI, ComfyUI 같은 도구를 통한 이미지 생성을 지원합니다.',
          '**접근성.** Discord 봇과 휴대폰 브라우저에서의 원격 접속을 지원합니다.',
          '**언어.** 기능 페이지는 인터페이스 언어 일곱 가지(영어, 중국어 간체, 일본어, 스페인어, 독일어, 프랑스어, 러시아어)를 나열하고, 홈페이지 FAQ는 다섯 가지를 나열합니다.',
        ],
      },
      backendsHardware: {
        id: 'backends-hardware',
        title: '백엔드와 하드웨어',
        content: [
          '**Rin Chat은 모델을 포함하지 않으므로 백엔드가 필요합니다.** 로컬 옵션은 기본 로컬 포트의 LM Studio, Ollama, KoboldCpp이며, OpenAI 호환 엔드포인트는 API 키와 함께 사용할 수 있습니다. Z.AI, OpenRouter, NanoGPT, OpenAI, DeepSeek, xAI Grok용 프리셋이 있습니다.',
          '사이트는 앱 자체에 필요한 RAM이나 GPU 최소 사양을 밝히지 않으므로, 필요한 하드웨어는 실행하는 모델에 따라 달라집니다. PromptQuorum은 성능을 측정하지 않았습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호, 라이선스, 비용',
        content: [
          '**개발사는 카드와 채팅이 컴퓨터에 AES-256-GCM으로 암호화되고, 비밀번호 또는 운영체제 키체인으로 보호되며, 24단어 복구 문구가 있다고 밝힙니다.** 방침에 따르면 요청은 기기에서 선택한 제공업체로 직접 전송되며 개발사의 서버를 거치지 않습니다.',
          '약관에 따르면 앱은 설치 시와 실행 시 사용 통계(무작위 설치 ID, 버전, 운영체제, 아키텍처, 패키지 형식, 언어)를 보내며 이를 "끌 수 없습니다". 방침은 여기에 프롬프트나 캐릭터가 포함되지 않는다고 설명합니다. 사용 중인 제공업체 같은 추가 통계는 선택 사항입니다. 웹사이트는 Google Analytics를 사용하며, EU, 영국, 스위스에서는 동의를 받습니다. 방침에는 선택형 Rin Chat 구독과 계정도 언급되어 있으나, PromptQuorum은 그 가격을 찾지 못했습니다.',
          '라이선스상 Rin Chat은 독점 소프트웨어이며 개인용, 비상업적 용도로 무료이고, 사용자는 만 18세 이상이어야 합니다. 앱은 비공개 소스이고 PromptQuorum은 저장 방식이나 네트워크 트래픽을 점검하지 않았으므로, 이 중 어느 것도 확인된 것이 아닙니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장점과 한계',
        columns: ['장점', '실제 사용에서의 의미', '한계 / 주의점'],
        rows: [
          {
            '장점': '패키지형 데스크톱 앱',
            '실제 사용에서의 의미': '설치하고 백엔드를 연결해 채팅하며, 업데이트가 내장되어 있습니다.',
            '한계 / 주의점': '현재는 Windows와 Linux만 지원하며 Windows 설치 파일은 서명되지 않았습니다.',
          },
          {
            '장점': '기존 카드 열기',
            '실제 사용에서의 의미': 'SillyTavern과 AI Character Cards 파일, 로어북이 그대로 작동합니다.',
            '한계 / 주의점': '가져오기 품질은 여기서 테스트하지 않았습니다.',
          },
          {
            '장점': '모험 모드',
            '실제 사용에서의 의미': '앱이 주사위를 굴리고 능력치를 추적하므로 모델이 임의로 지어내지 않습니다.',
            '한계 / 주의점': '카드마다 설정해야 하며 PromptQuorum은 써 보지 않았습니다.',
          },
          {
            '장점': '암호화 저장',
            '실제 사용에서의 의미': '개발사에 따르면 비밀번호나 키 없이는 카드와 채팅을 읽을 수 없습니다.',
            '한계 / 주의점': '비공개 소스라 암호화를 감사할 수 없습니다.',
          },
          {
            '장점': '유연한 백엔드',
            '실제 사용에서의 의미': 'Ollama, KoboldCpp, LM Studio 또는 클라우드 API를 쓸 수 있습니다.',
            '한계 / 주의점': '모델이 포함되지 않으며, 클라우드 API는 프롬프트를 기기 밖으로 보냅니다.',
          },
          {
            '장점': '무료 사용',
            '실제 사용에서의 의미': '개발사에 따르면 체험판이나 계정이 필요 없습니다.',
            '한계 / 주의점': '개인용으로만 가능하며 사용 통계는 필수입니다.',
          },
          {
            '장점': '활발한 개발',
            '실제 사용에서의 의미': '버전 1.0.4가 2026년 11월 20일자입니다.',
            '한계 / 주의점': '여전히 오픈 베타로 표시되어 있어 미흡한 부분이 있을 수 있습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Rin Chat과 대안 비교',
        content: [
          '디렉터리에서 가장 가까운 롤플레이 프런트엔드입니다. 가장 맞춤화가 자유로운 자체 호스팅 옵션, 공유 서버 모드를 갖춘 옵션, 더 가벼운 멀티 플랫폼 클라이언트, 캐릭터 허브가 내장된 데스크톱 앱입니다.',
        ],
        columns: ['앱', '플랫폼', '가격과 라이선스', '역할', '주요 차이'],
        rows: [
          {
            '앱': 'Rin Chat',
            '플랫폼': 'Windows, Linux',
            '가격과 라이선스': '무료, 독점',
            '역할': '데스크톱 롤플레이 앱',
            '주요 차이': '암호화 저장, 주사위와 능력치, 비공개 소스',
          },
          {
            '앱': 'SillyTavern',
            '플랫폼': 'Windows, Mac, Linux',
            '가격과 라이선스': '무료, AGPL-3.0',
            '역할': '자체 호스팅 롤플레이 프런트엔드',
            '주요 차이': '가장 깊은 맞춤화, Node.js 설정 필요',
          },
          {
            '앱': '[RisuAI](/ko/power-local-llm/risuai-review)',
            '플랫폼': '웹, 데스크톱, 모바일',
            '가격과 라이선스': '무료, GPL-3.0',
            '역할': '롤플레이 프런트엔드',
            '주요 차이': '모바일 친화적, 오픈 소스',
          },
          {
            '앱': '[Agnai](/ko/power-local-llm/agnai-review)',
            '플랫폼': '웹',
            '가격과 라이선스': '무료, AGPL-3.0',
            '역할': '다중 사용자 롤플레이 프런트엔드',
            '주요 차이': '공유 서버 모드, 오픈 소스',
          },
          {
            '앱': '[Backyard AI](/ko/power-local-llm/backyard-ai-review-local-roleplay)',
            '플랫폼': 'Windows, Mac, Linux',
            '가격과 라이선스': '무료 플랜, 독점',
            '역할': '데스크톱 캐릭터 채팅',
            '주요 차이': '내장 캐릭터 허브',
          },
        ],
        note: '서드파티 앱의 플랫폼, 가격, 기능은 자주 바뀝니다. 결정하기 전에 각 프로젝트의 공식 페이지에서 최신 정보를 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Rin Chat을 쓰면 좋은 사용자',
        items: [
          '**설치 파일로 편하게 쓰고 싶은 롤플레이어.** Node.js나 서버 설정이 필요 없습니다.',
          '**기존 캐릭터 카드가 있는 사용자.** SillyTavern과 AI Character Cards 파일을 바로 열 수 있습니다.',
          '**Windows나 Linux에서 개인정보를 중시하는 사용자.** 암호화된 로컬 저장을 제공하며, 로컬 백엔드를 쓰면 완전히 로컬로 채팅할 수 있습니다.',
          '**게임 마스터 방식을 즐기는 플레이어.** 앱이 주사위와 능력치를 처리합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Rin Chat을 쓰지 말아야 할 사용자',
        items: [
          '**오픈 소스 코드가 필요한 사용자.** 앱은 독점 소프트웨어입니다.',
          '**Mac과 스마트폰 사용자.** macOS 빌드와 정식 출시된 Android 빌드가 아직 없습니다.',
          '**상업적 사용자.** 라이선스는 개인용, 비상업적 용도만 허용합니다.',
          '**텔레메트리가 전혀 없어야 하는 사용자.** 약관은 기본 사용 통계를 끌 수 없다고 밝힙니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Rin Chat은 오프라인에서 작동합니까?',
            a: '컴퓨터에서 실행 중인 Ollama, KoboldCpp, LM Studio 같은 로컬 백엔드를 쓸 때만 가능하며, 앱에는 모델이 포함되어 있지 않습니다. 또한 설치 시와 실행 시 사용 통계를 보내므로 PromptQuorum은 완전한 오프라인 앱이라고 말할 수 없습니다.',
          },
          {
            q: 'Rin Chat은 무료입니까?',
            a: '홈페이지는 체험판이나 계정 없이 모든 기능이 열려 있다고 밝힙니다. 방침에 Rin Chat 구독이 나오지만 가격은 찾지 못했습니다.',
          },
          {
            q: 'SillyTavern 카드를 쓸 수 있습니까?',
            a: '개발사는 SillyTavern 카드가 그대로 작동한다고 밝히며, 앱은 AI Character Cards 파일도 엽니다.',
          },
          {
            q: 'Mac이나 Android 버전이 있습니까?',
            a: '아직 없습니다. 개발사에 따르면 macOS는 일정 없이 작업 중이고, Android는 예고되었으나 다운로드 페이지나 스토어 등록이 없습니다.',
          },
          {
            q: 'Rin Chat은 누가 만듭니까?',
            a: '연락처 페이지에 유타주 주소가 있는 미국 회사 Rin Chat LLC이며, 약관은 유타주 법을 준거법으로 합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          'Rin Chat은 SillyTavern과 AI Character Cards 파일을 열고, 데이터를 컴퓨터에 암호화해 보관하며, 주사위와 능력치까지 더한 캐릭터 채팅용 패키지 앱을 Windows나 Linux에서 쓰고 싶다면 잘 맞습니다. 2026년 11월 20일에 버전 1.0.4를 출시했습니다.',
          '주의할 점은 비공개 소스, 필수 사용 통계, 서명되지 않은 Windows 설치 파일, Mac과 정식 출시된 Android 빌드 없음, 오픈 베타 표시, 그리고 PromptQuorum이 확인하지 못한 주장입니다. 큰 라이브러리를 옮기기 전에 카드 하나와 로컬 백엔드로 먼저 써 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Rin Chat 웹사이트](https://rin.chat/) — 개요, 기능, FAQ.',
          '[다운로드 페이지](https://rin.chat/download/) — 플랫폼과 설치 파일.',
          '[변경 기록](https://rin.chat/changelog) — 버전 1.0.4와 릴리스 날짜.',
          '[기능](https://rin.chat/features/) 및 [빠른 시작](https://rin.chat/quickstart/) — 카드 형식, 백엔드, 설정.',
          '[개인정보 처리방침](https://rin.chat/privacy/), [약관](https://rin.chat/terms/), [라이선스](https://rin.chat/license/) — 데이터 처리, 통계, 준거법, 라이선스.',
          '[문의 페이지](https://rin.chat/contact/) — 회사 정보.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[RisuAI 리뷰](/ko/power-local-llm/risuai-review) — 웹, 데스크톱, 모바일용 오픈 소스 롤플레이 프런트엔드.',
          '[Agnai 리뷰](/ko/power-local-llm/agnai-review) — 다중 사용자 롤플레이 프런트엔드.',
          '[Backyard AI 리뷰](/ko/power-local-llm/backyard-ai-review-local-roleplay) — 캐릭터 허브가 내장된 데스크톱 캐릭터 채팅 앱.',
          '[SillyTavern vs Agnai vs RisuAI](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 세 가지 주요 롤플레이 프런트엔드 비교.',
          '[로컬 LLM 소프트웨어 종합 디렉터리](/ko/directory) — 여러 플랫폼의 로컬 AI 도구를 폭넓게 모은 디렉터리.',
        ],
      },
    },
  },
}
