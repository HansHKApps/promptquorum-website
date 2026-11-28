// Valo Review: closed-source desktop workspace for hosted AI assistants and local models (Charm Works Ltd)
// Slug: valo-review
// Companion to: orca-review, openwork-review, openmausbot-review, myagents-review
// Facts verified 2026-11-28 against getvalo.dev (home, download, features, pricing, faq, about, privacy, terms); v1.4.2 (2026-11-26).
// Not hands-on tested. Stale-project warning is OFF.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-28',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-05-28',
    theme: 'Overview & Reference',
    heroImage: '/images/valo-review-hero-en.webp',
    title: 'Valo Review: One Desktop Workspace for Claude, Codex and Local AI',
    seoTitle: 'Valo Review: Desktop Workspace for Claude and Local AI',
    intro: 'Valo is a desktop app that puts hosted AI assistants and local models into one workspace. This review separates what stays on your computer from what goes to a provider, and flags where the maker’s own pages do not match.',
    metaDescription: 'Valo review: a closed-source desktop workspace for Claude, Codex and local models. Hybrid privacy, free and Pro tiers, open questions. Not hands-on tested.',
    twitterDescription: 'Valo review: one desktop workspace for hosted assistants and local models. What stays local, what goes to a provider, and what is still unclear.',
    audience: 'People who use several AI assistants for code or other project work and want them in one desktop app.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Valo review',
    targetKeywords: [
      'valo review',
      'getvalo',
      'valo ai workspace',
      'claude code desktop app',
      'codex desktop workspace',
      'local ai desktop workspace',
    ],
    current_hardware_mentioned: [
      'Mac',
    ],
    leadAnswerBlock: '**Valo is a closed-source desktop workspace for Windows, macOS and Linux that is hybrid: the maker says projects and chats are stored on your computer, while requests to hosted assistants go to their providers.** This review covers version 1.4.2, released on 26 November 2026, and rests on public pages, not on hands-on testing.',
    quickAnswerTop: {
      en: {
        question: 'Is Valo a local AI app?',
        answer: 'Only partly. It can be set up around local models, but its main use is hosted assistants, so check which one a chat uses.',
        bullets: [
          'For sensitive work, check the provider of each chat before you type.',
          'If you want only local models, confirm Ollama support in your installed version first.',
          'If you want open source, pick one of the alternatives below.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'Get Valo',
        anchor: 'get-it',
      },
      {
        label: 'At a Glance',
        anchor: 'at-a-glance',
      },
      {
        label: 'What Valo Is',
        anchor: 'what-is-valo',
      },
      {
        label: 'Local vs. Cloud',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'Data and Open Questions',
        anchor: 'data',
      },
      {
        label: 'Free, Pro and Price',
        anchor: 'pricing',
      },
      {
        label: 'Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'FAQ',
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
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Valo is one desktop window for several AI assistants.',
          },
          {
            type: 'plain-terms',
            text: 'You pick which AI answers in each chat, and the app keeps your work in one place.',
          },
        ],
        items: [
          'Price model: a free plan plus an optional Pro subscription.',
          'Local route: the maker names Ollama; no other local runtime is named on the pages checked.',
          'Accounts: hosted assistants need your own plan or API credits.',
          'Maker: the website footer names Charm Works Ltd, registered in the United Kingdom.',
          'Source code: closed, according to the terms of service.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get Valo',
        content: [
          '**Valo offers installer files on its download page, so the app itself does not need to be built from source.**',
        ],
        columns: [
          'Item',
          'Link',
        ],
        rows: [
          {
            Item: 'macOS',
            Link: '[Apple Silicon / Intel (.dmg)](https://getvalo.dev/download)',
          },
          {
            Item: 'Windows',
            Link: '[Setup (.exe)](https://getvalo.dev/download)',
          },
          {
            Item: 'Linux',
            Link: '[.deb / .rpm / AppImage](https://getvalo.dev/download)',
          },
          {
            Item: 'Website',
            Link: '[getvalo.dev](https://getvalo.dev/)',
          },
          {
            Item: 'Privacy policy',
            Link: '[Valo privacy policy](https://getvalo.dev/privacy)',
          },
        ],
        note: 'The maker says Mac and Windows builds are signed by CHARM WORKS LTD. The pages checked state no hardware requirements. The privacy policy mentions a setup step for installing Node.js, so first-run setup may need more than the installer.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'At a Glance',
        columns: [
          'Attribute',
          'Valo',
        ],
        rows: [
          {
            Attribute: 'Version',
            Valo: '1.4.2 (last update 26 November 2026)',
          },
          {
            Attribute: 'Type',
            Valo: 'Desktop app',
          },
          {
            Attribute: 'Runs',
            Valo: 'Hybrid: local app, hosted or local AI',
          },
          {
            Attribute: 'Works with local LLMs',
            Valo: 'Yes via Ollama, per maker; see below',
          },
          {
            Attribute: 'Code editing and terminal',
            Valo: 'Yes, per maker',
          },
          {
            Attribute: 'MCP support',
            Valo: 'Not stated',
          },
          {
            Attribute: 'RAM / VRAM requirement',
            Valo: 'Not stated',
          },
          {
            Attribute: 'License',
            Valo: 'Proprietary, closed source',
          },
        ],
      },
      whatIs: {
        id: 'what-is-valo',
        title: 'What Valo Is',
        content: [
          '**It is a front end over assistants you already use, not a model of its own.** The terms say it connects to supported AI engines through their command-line tools. The maker names Claude, Codex, Gemini, Cursor, GLM and local models, chosen per chat.',
          'The features the maker describes include:',
        ],
        items: [
          'A map of your project files, a live preview, and saved, searchable chats.',
          'Per-tool permissions, so you set where an assistant must ask before acting.',
          'Keyguard, an encrypted vault. The maker says assistants use stored credentials without seeing their values.',
          'Voice input, with transcription on your machine according to the maker.',
          'Phone access through Telegram, video generation through Seedance, and ValoLink to connect assistants across machines.',
          'Browser add-ons that let the assistant read and act in your browser when you ask it to.',
        ],
      },
      localCloud: {
        id: 'local-vs-cloud',
        title: 'Local vs. Cloud: What Runs Where',
        content: [
          '**Storage is local by the maker’s account; the AI answer is local only if the chat runs on a local model.** The terms say project data, conversations and files stay on your machine and are not uploaded to Valo’s servers. A prompt to Claude, Codex, GLM or another hosted assistant is processed by that provider, under its terms.',
          '**The pages disagree on local models.** The pricing page and FAQ say local models run through Ollama on your computer. The privacy policy, dated 25 November 2026, says "when local-model support is enabled" and adds that this support is in active development. This review did not run version 1.4.2, so check that Ollama works for you before you rely on it.',
        ],
      },
      dataSent: {
        id: 'data',
        title: 'What Leaves Your Computer, and Open Questions',
        content: [
          '**The privacy policy lists a launch ping, update checks and licence checks as the app’s own traffic to the maker.** It says the ping carries app version, platform, processor type, a random install ID, the furthest setup step and the setup route. Activating Pro also involves your email address, licence key and a machine identifier. The policy says there is no ongoing in-app usage analytics. The FAQ says the Claude command-line tool also sends Anthropic’s own telemetry, which you can switch off with the setting CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1. Website advertising cookies are described separately from the desktop app.',
          'These are the maker’s statements; this review did not inspect network traffic. Points to check:',
        ],
        items: [
          'The privacy policy’s list of AI providers names Anthropic, OpenAI and Z.AI. We found no entry for Gemini, Cursor, Seedance or Telegram, which other Valo pages mention.',
          'The FAQ says bug reports are sent encrypted through Valo Mail after you review them. We found no description of that feature in the privacy policy.',
          'The FAQ points questions to YouTube, while the privacy policy gives Discord for privacy requests.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Free Plan, Pro and Price',
        content: [
          '**The free plan includes the choice of assistants, code editing and terminal, per-tool permissions, Keyguard, voice and saved chats.** Valo Pro costs US$12.99 per month, billed through Paddle, and covers up to 3 machines. It adds Context Control, Valo Search, Cross-Chat, Scheduled Tasks and priority support.',
          'The maker describes a 14-day Pro trial with no account or card; afterwards the app stays usable on the free plan. The price does not include AI access: for hosted assistants you need your own plan or API credits.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Valo vs. Alternatives',
        content: [
          'Four other agent workspaces from the directory are the natural comparison.',
        ],
        columns: [
          'App',
          'Platforms',
          'Price and license',
          'Key difference',
        ],
        rows: [
          {
            App: 'Valo',
            Platforms: 'Windows, macOS, Linux',
            'Price and license': 'Freemium, proprietary',
            'Key difference': 'Vault and permissions in the free plan',
          },
          {
            App: '[Orca](/power-local-llm/orca-review)',
            Platforms: 'Desktop, iOS, Android',
            'Price and license': 'Free, MIT',
            'Key difference': 'Open source; runs no model itself',
          },
          {
            App: '[OpenWork](/power-local-llm/openwork-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price and license': 'Freemium, MIT plus EE parts',
            'Key difference': 'Connects to Ollama',
          },
          {
            App: '[OpenMausBot](/power-local-llm/openmausbot-review)',
            Platforms: 'Windows, macOS, Linux',
            'Price and license': 'Free app, Apache 2.0 core',
            'Key difference': 'Local models via compatible endpoints',
          },
          {
            App: '[MyAgents](/power-local-llm/myagents-review)',
            Platforms: 'Windows, macOS',
            'Price and license': 'Free, AGPL-3.0',
            'Key difference': 'No local-model path documented',
          },
        ],
        note: 'Third-party details come from our directory entries and can change; check each project.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need a Valo account to start?',
            a: 'No for the free plan, the maker says. Buying Pro involves an email address and a licence key.',
          },
          {
            q: 'Does Valo include model usage?',
            a: 'No. The maker says it does not resell AI access, so provider limits and bills still apply to you.',
          },
          {
            q: 'Can I move my work to another computer?',
            a: 'The maker says you can copy the Valo data folder, point the app to it, sign in to your providers again and unlock the vault.',
          },
          {
            q: 'Can I check where the app connects?',
            a: 'The FAQ suggests a network monitor and names the domains to expect. Doing that on your own machine is the direct way to test the claims.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Valo looks worth a trial if you switch between several coding assistants and want one place for chats, permissions and stored credentials. The free plan lets you judge that before paying.',
          'Be careful if your reason is privacy: the app is closed source, hosted assistants receive your prompts, and the maker’s pages do not agree on how ready local model support is. For a strictly local setup, verify that route first or compare the alternatives.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Valo website](https://getvalo.dev/) — product summary and company footer.',
          '[Valo download page](https://getvalo.dev/download) — version, release date, installers.',
          '[Valo features](https://getvalo.dev/features) — feature descriptions.',
          '[Valo pricing](https://getvalo.dev/pricing) — free and Pro split, price, trial.',
          '[Valo FAQ](https://getvalo.dev/faq) — connections, local models, bug reports.',
          '[Valo privacy policy](https://getvalo.dev/privacy) — data handling and providers.',
          '[Valo terms of service](https://getvalo.dev/terms) — licence and closed-source statement.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Orca Review](/power-local-llm/orca-review) — an open-source app for running several coding agents.',
          '[OpenWork Review](/power-local-llm/openwork-review) — a desktop agent app that can use Ollama.',
          '[OpenMausBot Review](/power-local-llm/openmausbot-review) — a desktop chat app that drives agent tools.',
          '[The Complete Local LLM Software Directory](/directory) — more local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-28',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-05-28',
    theme: 'Overview & Reference',
    heroImage: '/images/valo-review-hero-de.webp',
    title: 'Valo Rezension: Ein Desktop-Arbeitsbereich für Claude, Codex und lokale KI',
    seoTitle: 'Valo Rezension: Desktop-App für Claude und lokale KI',
    intro: 'Valo ist eine Desktop-App, die gehostete KI-Assistenten und lokale Modelle in einem Arbeitsbereich bündelt. Diese Rezension trennt, was auf Ihrem Rechner bleibt und was an einen Anbieter geht, und zeigt, wo die Seiten des Herstellers nicht übereinstimmen.',
    metaDescription: 'Valo Rezension: Desktop-Arbeitsbereich für Claude, Codex und lokale Modelle, mit geschlossenem Code. Hybrid, Gratis und Pro, offene Fragen. Ungetestet.',
    twitterDescription: 'Valo Rezension: ein Desktop-Arbeitsbereich für gehostete Assistenten und lokale Modelle. Was lokal bleibt, was zum Anbieter geht und was unklar ist.',
    audience: 'Personen, die mehrere KI-Assistenten für Code oder Projektarbeit nutzen und sie in einer Desktop-App bündeln möchten.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Valo review',
    targetKeywords: [
      'valo test',
      'getvalo',
      'valo ki arbeitsbereich',
      'claude code desktop app',
      'codex desktop app',
      'lokale ki desktop arbeitsbereich',
    ],
    current_hardware_mentioned: [
      'Mac',
    ],
    leadAnswerBlock: '**Valo ist ein Desktop-Arbeitsbereich für Windows, macOS und Linux mit geschlossenem Quellcode und arbeitet hybrid: Laut Anbieter liegen Projekte und Chats auf Ihrem Rechner, während Anfragen an gehostete Assistenten an deren Anbieter gehen.** Diese Rezension bezieht sich auf Version 1.4.2, veröffentlicht am 26. November 2026, und stützt sich auf öffentliche Seiten, nicht auf einen eigenen Praxistest.',
    quickAnswerTop: {
      de: {
        question: 'Ist Valo eine App für lokale KI?',
        answer: 'Nur teilweise. Sie lässt sich mit lokalen Modellen nutzen, ist aber vor allem für gehostete Assistenten gedacht. Prüfen Sie also, welches Modell ein Chat verwendet.',
        bullets: [
          'Prüfen Sie bei sensiblen Aufgaben vor dem Tippen den Anbieter jedes Chats.',
          'Wenn Sie nur lokale Modelle wollen, testen Sie zuerst die Ollama-Anbindung in Ihrer Version.',
          'Wenn Sie Open Source wollen, wählen Sie eine der Alternativen unten.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Valo laden',
        anchor: 'get-it',
      },
      {
        label: 'Auf einen Blick',
        anchor: 'at-a-glance',
      },
      {
        label: 'Was Valo ist',
        anchor: 'what-is-valo',
      },
      {
        label: 'Lokal vs. Cloud',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'Daten und offene Fragen',
        anchor: 'data',
      },
      {
        label: 'Gratis, Pro und Preis',
        anchor: 'pricing',
      },
      {
        label: 'Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'FAQ',
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
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Valo ist ein einziges Desktop-Fenster für mehrere KI-Assistenten.',
          },
          {
            type: 'plain-terms',
            text: 'Sie wählen in jedem Chat, welche KI antwortet, und die App hält Ihre Arbeit an einem Ort zusammen.',
          },
        ],
        items: [
          'Preismodell: ein Gratis-Tarif und ein optionales Pro-Abo.',
          'Lokaler Weg: Der Anbieter nennt Ollama; eine andere lokale Laufzeit wird auf den geprüften Seiten nicht genannt.',
          'Zugänge: Für gehostete Assistenten brauchen Sie einen eigenen Tarif oder API-Guthaben.',
          'Hersteller: Die Fußzeile der Website nennt Charm Works Ltd, registriert im Vereinigten Königreich.',
          'Quellcode: laut Nutzungsbedingungen nicht offen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Valo laden',
        content: [
          '**Valo bietet auf der Download-Seite Installationsdateien an; die App selbst muss also nicht aus dem Quellcode gebaut werden.**',
        ],
        columns: [
          'Element',
          'Link',
        ],
        rows: [
          {
            Element: 'macOS',
            Link: '[Apple Silicon / Intel (.dmg)](https://getvalo.dev/download)',
          },
          {
            Element: 'Windows',
            Link: '[Setup (.exe)](https://getvalo.dev/download)',
          },
          {
            Element: 'Linux',
            Link: '[.deb / .rpm / AppImage](https://getvalo.dev/download)',
          },
          {
            Element: 'Website',
            Link: '[getvalo.dev](https://getvalo.dev/)',
          },
          {
            Element: 'Datenschutzerklärung',
            Link: '[Datenschutzerklärung von Valo](https://getvalo.dev/privacy)',
          },
        ],
        note: 'Laut Anbieter sind die Mac- und Windows-Builds von CHARM WORKS LTD signiert. Die geprüften Seiten nennen keine Hardwareanforderungen. Die Datenschutzerklärung erwähnt einen Einrichtungsschritt zur Installation von Node.js; für die Ersteinrichtung kann also mehr als das Installationsprogramm nötig sein.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Auf einen Blick',
        columns: [
          'Merkmal',
          'Valo',
        ],
        rows: [
          {
            Merkmal: 'Version',
            Valo: '1.4.2 (letztes Update 26. November 2026)',
          },
          {
            Merkmal: 'Typ',
            Valo: 'Desktop-App',
          },
          {
            Merkmal: 'Betrieb',
            Valo: 'Hybrid: lokale App, KI gehostet oder lokal',
          },
          {
            Merkmal: 'Lokale LLMs',
            Valo: 'Ja, laut Anbieter über Ollama; siehe unten',
          },
          {
            Merkmal: 'Code-Bearbeitung und Terminal',
            Valo: 'Ja, laut Anbieter',
          },
          {
            Merkmal: 'MCP-Unterstützung',
            Valo: 'Nicht angegeben',
          },
          {
            Merkmal: 'RAM-/VRAM-Bedarf',
            Valo: 'Nicht angegeben',
          },
          {
            Merkmal: 'Lizenz',
            Valo: 'Proprietär, Quellcode geschlossen',
          },
        ],
      },
      whatIs: {
        id: 'what-is-valo',
        title: 'Was Valo ist',
        content: [
          '**Valo ist eine Oberfläche für Assistenten, die Sie bereits nutzen, kein eigenes Modell.** Laut Nutzungsbedingungen verbindet sich die App über Kommandozeilenwerkzeuge mit unterstützten KI-Engines. Der Anbieter nennt Claude, Codex, Gemini, Cursor, GLM und lokale Modelle, wählbar pro Chat.',
          'Zu den Funktionen, die der Anbieter beschreibt, gehören:',
        ],
        items: [
          'Eine Karte Ihrer Projektdateien, eine Live-Vorschau und gespeicherte, durchsuchbare Chats.',
          'Berechtigungen je Werkzeug: Sie legen fest, wo ein Assistent vor dem Handeln fragen muss.',
          'Keyguard, ein verschlüsselter Tresor. Laut Anbieter nutzen Assistenten gespeicherte Zugangsdaten, ohne deren Werte zu sehen.',
          'Spracheingabe, laut Anbieter mit Transkription auf Ihrem Rechner.',
          'Zugriff vom Smartphone über Telegram, Videoerzeugung über Seedance und ValoLink zum Verbinden von Assistenten über mehrere Rechner.',
          'Browser-Add-ons, mit denen der Assistent auf Ihre Bitte hin in Ihrem Browser liest und handelt.',
        ],
      },
      localCloud: {
        id: 'local-vs-cloud',
        title: 'Lokal vs. Cloud: Was wo läuft',
        content: [
          '**Die Speicherung ist nach Angaben des Anbieters lokal; die KI-Antwort ist nur dann lokal, wenn der Chat mit einem lokalen Modell läuft.** Laut Nutzungsbedingungen bleiben Projektdaten, Unterhaltungen und Dateien auf Ihrem Rechner und werden nicht auf Server von Valo geladen. Eine Eingabe an Claude, Codex, GLM oder einen anderen gehosteten Assistenten verarbeitet der jeweilige Anbieter zu seinen Bedingungen.',
          '**Bei lokalen Modellen widersprechen sich die Seiten.** Preisseite und FAQ sagen, lokale Modelle laufen über Ollama auf Ihrem Rechner. Die Datenschutzerklärung vom 25. November 2026 schreibt "when local-model support is enabled" (wenn die Unterstützung für lokale Modelle aktiviert ist) und ergänzt, diese sei in aktiver Entwicklung. Version 1.4.2 wurde für diese Rezension nicht ausgeführt; prüfen Sie daher, ob Ollama bei Ihnen funktioniert, bevor Sie sich darauf verlassen.',
        ],
      },
      dataSent: {
        id: 'data',
        title: 'Was Ihren Rechner verlässt – und offene Fragen',
        content: [
          '**Als eigenen Datenverkehr der App an den Hersteller nennt die Datenschutzerklärung ein Signal beim Start, Update-Prüfungen und Lizenzprüfungen.** Laut Erklärung enthält das Startsignal App-Version, Plattform, Prozessortyp, eine zufällige Installations-ID, den am weitesten erreichten Einrichtungsschritt und den Einrichtungsweg. Bei der Pro-Aktivierung kommen E-Mail-Adresse, Lizenzschlüssel und eine Gerätekennung hinzu. Eine laufende Nutzungsanalyse in der App gibt es laut Erklärung nicht. Laut FAQ sendet das Claude-Kommandozeilenwerkzeug zusätzlich Telemetrie von Anthropic, die sich mit der Einstellung CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1 abschalten lässt. Werbe-Cookies der Website werden getrennt von der Desktop-App beschrieben.',
          'Das sind Angaben des Herstellers; der Netzwerkverkehr wurde für diese Rezension nicht untersucht. Diese Punkte sollten Sie prüfen:',
        ],
        items: [
          'Die Liste der KI-Anbieter in der Datenschutzerklärung nennt Anthropic, OpenAI und Z.AI. Einen Eintrag zu Gemini, Cursor, Seedance oder Telegram, die andere Valo-Seiten erwähnen, haben wir nicht gefunden.',
          'Laut FAQ werden Fehlerberichte nach Ihrer Prüfung verschlüsselt über Valo Mail gesendet. Eine Beschreibung dieser Funktion haben wir in der Datenschutzerklärung nicht gefunden.',
          'Die FAQ verweist Fragen an YouTube, die Datenschutzerklärung nennt für Datenschutzanliegen Discord.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Gratis-Tarif, Pro und Preis',
        content: [
          '**Der Gratis-Tarif umfasst die Wahl der Assistenten, Code-Bearbeitung und Terminal, Berechtigungen je Werkzeug, Keyguard, Sprache und gespeicherte Chats.** Valo Pro kostet 12,99 US-Dollar pro Monat (Preis laut Website in US-Dollar), wird über Paddle abgerechnet und gilt für bis zu 3 Rechner. Pro ergänzt Context Control, Valo Search, Cross-Chat, Scheduled Tasks und bevorzugten Support.',
          'Der Anbieter beschreibt eine 14-tägige Pro-Testphase ohne Konto oder Karte; danach bleibt die App im Gratis-Tarif nutzbar. Der KI-Zugang ist im Preis nicht enthalten: Für gehostete Assistenten brauchen Sie einen eigenen Tarif oder API-Guthaben.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Valo vs. Alternativen',
        content: [
          'Vier weitere Agenten-Arbeitsbereiche aus dem Verzeichnis bieten sich zum Vergleich an.',
        ],
        columns: [
          'App',
          'Plattformen',
          'Preis und Lizenz',
          'Wichtigster Unterschied',
        ],
        rows: [
          {
            App: 'Valo',
            Plattformen: 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Freemium, proprietär',
            'Wichtigster Unterschied': 'Tresor und Berechtigungen schon im Gratis-Tarif',
          },
          {
            App: '[Orca](/de/power-local-llm/orca-review)',
            Plattformen: 'Desktop, iOS, Android',
            'Preis und Lizenz': 'Gratis, MIT',
            'Wichtigster Unterschied': 'Open Source; führt selbst kein Modell aus',
          },
          {
            App: '[OpenWork](/de/power-local-llm/openwork-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Freemium, MIT plus EE-Teile',
            'Wichtigster Unterschied': 'Verbindet sich mit Ollama',
          },
          {
            App: '[OpenMausBot](/de/power-local-llm/openmausbot-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis und Lizenz': 'Gratis-App, Apache-2.0-Kern',
            'Wichtigster Unterschied': 'Lokale Modelle über kompatible Endpunkte',
          },
          {
            App: '[MyAgents](/de/power-local-llm/myagents-review)',
            Plattformen: 'Windows, macOS',
            'Preis und Lizenz': 'Gratis, AGPL-3.0',
            'Wichtigster Unterschied': 'Kein Weg für lokale Modelle dokumentiert',
          },
        ],
        note: 'Angaben zu anderen Apps stammen aus unseren Verzeichniseinträgen und können sich ändern; prüfen Sie das jeweilige Projekt.',
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          {
            q: 'Brauche ich zum Start ein Valo-Konto?',
            a: 'Für den Gratis-Tarif laut Anbieter nicht. Beim Kauf von Pro kommen eine E-Mail-Adresse und ein Lizenzschlüssel ins Spiel.',
          },
          {
            q: 'Ist die Modellnutzung in Valo enthalten?',
            a: 'Nein. Der Anbieter verkauft nach eigenen Angaben keinen KI-Zugang weiter; Limits und Rechnungen der Anbieter gelten also weiterhin.',
          },
          {
            q: 'Kann ich meine Arbeit auf einen anderen Rechner mitnehmen?',
            a: 'Laut Anbieter kopieren Sie den Valo-Datenordner, wählen ihn in der App aus, melden sich erneut bei Ihren Anbietern an und entsperren den Tresor.',
          },
          {
            q: 'Kann ich prüfen, wohin sich die App verbindet?',
            a: 'Die FAQ empfiehlt einen Netzwerkmonitor und nennt die zu erwartenden Domains. Ein eigener Test auf Ihrem Rechner ist der direkte Weg, die Angaben zu überprüfen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Ein Versuch mit Valo lohnt sich offenbar, wenn Sie zwischen mehreren Coding-Assistenten wechseln und Chats, Berechtigungen und gespeicherte Zugangsdaten an einem Ort haben möchten. Mit dem Gratis-Tarif können Sie das vor dem Bezahlen beurteilen.',
          'Seien Sie vorsichtig, wenn Datenschutz Ihr Grund ist: Der Quellcode ist geschlossen, gehostete Assistenten erhalten Ihre Eingaben, und die Seiten des Herstellers sind sich nicht einig, wie weit die Unterstützung lokaler Modelle ist. Für einen streng lokalen Aufbau prüfen Sie diesen Weg zuerst oder vergleichen Sie die Alternativen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Valo-Website](https://getvalo.dev/) — Produktübersicht und Firmenangabe in der Fußzeile.',
          '[Valo-Download-Seite](https://getvalo.dev/download) — Version, Veröffentlichungsdatum, Installationsdateien.',
          '[Valo-Funktionen](https://getvalo.dev/features) — Funktionsbeschreibungen.',
          '[Valo-Preise](https://getvalo.dev/pricing) — Gratis-/Pro-Aufteilung, Preis, Testphase.',
          '[Valo-FAQ](https://getvalo.dev/faq) — Verbindungen, lokale Modelle, Fehlerberichte.',
          '[Datenschutzerklärung von Valo](https://getvalo.dev/privacy) — Datenverarbeitung und Anbieter.',
          '[Nutzungsbedingungen von Valo](https://getvalo.dev/terms) — Lizenz und Angabe zum geschlossenen Quellcode.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Orca Rezension](/de/power-local-llm/orca-review) — eine Open-Source-App für mehrere Coding-Agenten.',
          '[OpenWork Rezension](/de/power-local-llm/openwork-review) — eine Desktop-Agenten-App, die Ollama nutzen kann.',
          '[OpenMausBot Rezension](/de/power-local-llm/openmausbot-review) — eine Desktop-Chat-App, die Agentenwerkzeuge steuert.',
          '[Das komplette Verzeichnis für lokale LLM-Software](/de/directory) — weitere Tools für lokale KI.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-28',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-05-28',
    theme: 'Overview & Reference',
    heroImage: '/images/valo-review-hero-fr.webp',
    title: 'Test de Valo : un seul espace de bureau pour Claude, Codex et l’IA locale',
    seoTitle: 'Test de Valo : un bureau pour Claude et l’IA locale',
    intro: 'Valo est une application de bureau qui réunit des assistants IA hébergés et des modèles locaux. Ce test distingue ce qui reste sur votre ordinateur de ce qui part chez un fournisseur, et signale les pages de l’éditeur qui ne concordent pas.',
    metaDescription: 'Test de Valo : un espace de bureau propriétaire pour Claude, Codex et des modèles locaux. Fonctionnement hybride, offres gratuite et Pro. Non testé.',
    twitterDescription: 'Test de Valo : un espace de bureau pour assistants hébergés et modèles locaux. Ce qui reste local, ce qui part chez un fournisseur et ce qui reste flou.',
    audience: 'Les personnes qui utilisent plusieurs assistants IA pour du code ou des projets et les veulent dans une seule application de bureau.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Valo review',
    targetKeywords: [
      'test valo',
      'getvalo',
      'valo espace de travail ia',
      'application bureau claude code',
      'application bureau codex',
      'ia locale application de bureau',
    ],
    current_hardware_mentioned: [
      'Mac',
    ],
    leadAnswerBlock: '**Valo est un espace de travail de bureau propriétaire pour Windows, macOS et Linux, au fonctionnement hybride : selon l’éditeur, projets et conversations sont stockés sur votre ordinateur, tandis que les requêtes aux assistants hébergés partent chez leurs fournisseurs.** Ce test porte sur la version 1.4.2, publiée le 26 novembre 2026, et s’appuie sur des pages publiques, non sur un essai pratique.',
    quickAnswerTop: {
      fr: {
        question: 'Valo est-elle une application d’IA locale ?',
        answer: 'Seulement en partie. Elle peut fonctionner avec des modèles locaux, mais sert surtout aux assistants hébergés : vérifiez le modèle utilisé par chaque conversation.',
        bullets: [
          'Pour un travail sensible, vérifiez le fournisseur de la conversation avant de saisir.',
          'Pour des modèles uniquement locaux, testez d’abord Ollama dans votre version.',
          'Si vous voulez de l’open source, choisissez une alternative ci-dessous.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Obtenir Valo',
        anchor: 'get-it',
      },
      {
        label: 'En bref',
        anchor: 'at-a-glance',
      },
      {
        label: 'Qu’est-ce que Valo',
        anchor: 'what-is-valo',
      },
      {
        label: 'Local ou cloud',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'Données et questions ouvertes',
        anchor: 'data',
      },
      {
        label: 'Offre gratuite, Pro et prix',
        anchor: 'pricing',
      },
      {
        label: 'Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'FAQ',
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
        label: 'À lire aussi',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Valo est une seule fenêtre de bureau pour plusieurs assistants IA.',
          },
          {
            type: 'plain-terms',
            text: 'Vous choisissez quelle IA répond dans chaque conversation, et l’application garde votre travail au même endroit.',
          },
        ],
        items: [
          'Modèle tarifaire : une offre gratuite et un abonnement Pro facultatif.',
          'Voie locale : l’éditeur cite Ollama ; aucun autre moteur local n’est nommé sur les pages consultées.',
          'Accès : les assistants hébergés exigent votre propre abonnement ou des crédits API.',
          'Éditeur : le pied de page du site cite Charm Works Ltd, société immatriculée au Royaume-Uni.',
          'Code source : fermé, selon les conditions d’utilisation.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Obtenir Valo',
        content: [
          '**Valo propose des fichiers d’installation sur sa page de téléchargement : inutile de compiler l’application.**',
        ],
        columns: [
          'Élément',
          'Lien',
        ],
        rows: [
          {
            'Élément': 'macOS',
            Lien: '[Apple Silicon / Intel (.dmg)](https://getvalo.dev/download)',
          },
          {
            'Élément': 'Windows',
            Lien: '[Setup (.exe)](https://getvalo.dev/download)',
          },
          {
            'Élément': 'Linux',
            Lien: '[.deb / .rpm / AppImage](https://getvalo.dev/download)',
          },
          {
            'Élément': 'Site web',
            Lien: '[getvalo.dev](https://getvalo.dev/)',
          },
          {
            'Élément': 'Confidentialité',
            Lien: '[Politique de confidentialité de Valo](https://getvalo.dev/privacy)',
          },
        ],
        note: 'Selon l’éditeur, les versions Mac et Windows sont signées par CHARM WORKS LTD. Les pages consultées n’indiquent aucune configuration matérielle requise. La politique de confidentialité mentionne une étape d’installation de Node.js : la première configuration peut donc demander plus que le seul installateur.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'En bref',
        columns: [
          'Critère',
          'Valo',
        ],
        rows: [
          {
            Critère: 'Version',
            Valo: '1.4.2 (dernière mise à jour : 26 novembre 2026)',
          },
          {
            Critère: 'Type',
            Valo: 'Application de bureau',
          },
          {
            Critère: 'Exécution',
            Valo: 'Hybride : app locale, IA hébergée ou locale',
          },
          {
            Critère: 'LLM locaux',
            Valo: 'Oui via Ollama, selon l’éditeur ; voir plus bas',
          },
          {
            Critère: 'Édition de code et terminal',
            Valo: 'Oui, selon l’éditeur',
          },
          {
            Critère: 'Prise en charge de MCP',
            Valo: 'Non indiquée',
          },
          {
            Critère: 'RAM / VRAM requise',
            Valo: 'Non indiquée',
          },
          {
            Critère: 'Licence',
            Valo: 'Propriétaire, code fermé',
          },
        ],
      },
      whatIs: {
        id: 'what-is-valo',
        title: 'Qu’est-ce que Valo',
        content: [
          '**C’est une interface pour des assistants que vous utilisez déjà, pas un modèle en soi.** Selon les conditions d’utilisation, elle se connecte aux moteurs d’IA pris en charge par leurs outils en ligne de commande. L’éditeur cite Claude, Codex, Gemini, Cursor, GLM et des modèles locaux, au choix par conversation.',
          'Fonctions décrites par l’éditeur :',
        ],
        items: [
          'Une carte des fichiers du projet, un aperçu en direct et des conversations enregistrées et consultables par recherche.',
          'Des autorisations par outil : vous fixez quand l’assistant doit demander avant d’agir.',
          'Keyguard, un coffre chiffré. Selon l’éditeur, les assistants utilisent les identifiants enregistrés sans en voir les valeurs.',
          'La saisie vocale, avec transcription sur votre machine selon l’éditeur.',
          'L’accès depuis le téléphone via Telegram, la génération de vidéo via Seedance et ValoLink pour relier des assistants entre machines.',
          'Des extensions de navigateur qui permettent à l’assistant de lire et d’agir dans votre navigateur à votre demande.',
        ],
      },
      localCloud: {
        id: 'local-vs-cloud',
        title: 'Local ou cloud : ce qui s’exécute où',
        content: [
          '**D’après l’éditeur, le stockage est local ; la réponse de l’IA ne l’est que si la conversation utilise un modèle local.** Les conditions indiquent que données de projet, conversations et fichiers restent sur votre machine et ne sont pas envoyés aux serveurs de Valo. Une requête à Claude, Codex, GLM ou un autre assistant hébergé est traitée par ce fournisseur, selon ses conditions.',
          '**Les pages divergent sur les modèles locaux.** La page des tarifs et la FAQ disent que les modèles locaux s’exécutent via Ollama sur votre ordinateur. La politique de confidentialité du 25 novembre 2026 écrit "when local-model support is enabled" (quand la prise en charge des modèles locaux est activée) et précise qu’elle est en cours de développement. La version 1.4.2 n’a pas été exécutée pour ce test : vérifiez qu’Ollama fonctionne chez vous avant de vous y fier.',
        ],
      },
      dataSent: {
        id: 'data',
        title: 'Ce qui quitte votre ordinateur, et les questions ouvertes',
        content: [
          '**Comme trafic propre à l’application vers l’éditeur, la politique de confidentialité cite un signal au lancement, la recherche de mises à jour et la vérification de licence.** Selon elle, ce signal contient la version, la plateforme, le type de processeur, un identifiant d’installation aléatoire, l’étape de configuration la plus avancée et la voie de configuration. L’activation de Pro implique aussi votre adresse e-mail, la clé de licence et un identifiant de machine. Elle indique qu’il n’y a pas d’analyse d’usage continue dans l’application. D’après la FAQ, l’outil en ligne de commande de Claude envoie en plus la télémétrie d’Anthropic, désactivable avec le réglage CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1. Les cookies publicitaires du site sont décrits séparément de l’application.',
          'Il s’agit des déclarations de l’éditeur ; le trafic réseau n’a pas été inspecté pour ce test. Points à vérifier :',
        ],
        items: [
          'La liste des fournisseurs d’IA de la politique de confidentialité cite Anthropic, OpenAI et Z.AI. Nous n’y avons trouvé aucune entrée pour Gemini, Cursor, Seedance ou Telegram, mentionnés sur d’autres pages de Valo.',
          'Selon la FAQ, les rapports de bogue sont envoyés chiffrés via Valo Mail après votre relecture. Nous n’avons pas trouvé de description de cette fonction dans la politique de confidentialité.',
          'La FAQ renvoie les questions vers YouTube, tandis que la politique de confidentialité indique Discord pour les demandes relatives aux données.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Offre gratuite, Pro et prix',
        content: [
          '**L’offre gratuite comprend le choix des assistants, l’édition de code et le terminal, les autorisations par outil, Keyguard, la voix et les conversations enregistrées.** Valo Pro coûte 12,99 $ US par mois (le site affiche le prix en dollars), facturé via Paddle, pour 3 machines au maximum. Pro ajoute Context Control, Valo Search, Cross-Chat, Scheduled Tasks et une assistance prioritaire.',
          'L’éditeur décrit un essai Pro de 14 jours sans compte ni carte ; ensuite, l’application reste utilisable avec l’offre gratuite. Le prix n’inclut pas l’accès à l’IA : pour les assistants hébergés, il faut votre propre abonnement ou des crédits API.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Valo face aux alternatives',
        content: [
          'Quatre autres espaces de travail pour agents de l’annuaire se prêtent à la comparaison.',
        ],
        columns: [
          'App',
          'Plateformes',
          'Prix et licence',
          'Différence principale',
        ],
        rows: [
          {
            App: 'Valo',
            Plateformes: 'Windows, macOS, Linux',
            'Prix et licence': 'Freemium, propriétaire',
            'Différence principale': 'Coffre et autorisations dès l’offre gratuite',
          },
          {
            App: '[Orca](/fr/power-local-llm/orca-review)',
            Plateformes: 'Bureau, iOS, Android',
            'Prix et licence': 'Gratuit, MIT',
            'Différence principale': 'Open source ; n’exécute aucun modèle',
          },
          {
            App: '[OpenWork](/fr/power-local-llm/openwork-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix et licence': 'Freemium, MIT et parties EE',
            'Différence principale': 'Se connecte à Ollama',
          },
          {
            App: '[OpenMausBot](/fr/power-local-llm/openmausbot-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix et licence': 'App gratuite, cœur Apache 2.0',
            'Différence principale': 'Modèles locaux via points d’accès compatibles',
          },
          {
            App: '[MyAgents](/fr/power-local-llm/myagents-review)',
            Plateformes: 'Windows, macOS',
            'Prix et licence': 'Gratuit, AGPL-3.0',
            'Différence principale': 'Aucune voie locale documentée',
          },
        ],
        note: 'Les informations sur les autres apps proviennent de nos fiches d’annuaire et peuvent changer ; vérifiez chaque projet.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Faut-il un compte Valo pour commencer ?',
            a: 'Pas pour l’offre gratuite, selon l’éditeur. L’achat de Pro implique une adresse e-mail et une clé de licence.',
          },
          {
            q: 'L’usage des modèles est-il compris ?',
            a: 'Non. L’éditeur dit ne pas revendre d’accès à l’IA : les limites et factures des fournisseurs s’appliquent toujours.',
          },
          {
            q: 'Puis-je transférer mon travail sur un autre ordinateur ?',
            a: 'Selon l’éditeur, copiez le dossier de données de Valo, indiquez-le à l’application, reconnectez vos fournisseurs et déverrouillez le coffre.',
          },
          {
            q: 'Puis-je vérifier où l’application se connecte ?',
            a: 'La FAQ conseille un moniteur réseau et liste les domaines attendus. Le faire sur votre machine est le moyen direct de tester ces affirmations.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Valo semble mériter un essai si vous passez d’un assistant de code à l’autre et voulez regrouper conversations, autorisations et identifiants. L’offre gratuite permet d’en juger avant de payer.',
          'Soyez prudent si la confidentialité motive votre choix : le code est fermé, les assistants hébergés reçoivent vos requêtes et les pages de l’éditeur ne s’accordent pas sur la maturité de la prise en charge des modèles locaux. Pour une installation strictement locale, vérifiez d’abord cette voie ou comparez les alternatives.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Valo](https://getvalo.dev/) — présentation du produit et mention de la société en pied de page.',
          '[Page de téléchargement](https://getvalo.dev/download) — version, date de publication, installateurs.',
          '[Fonctions de Valo](https://getvalo.dev/features) — description des fonctions.',
          '[Tarifs de Valo](https://getvalo.dev/pricing) — répartition gratuit/Pro, prix, essai.',
          '[FAQ de Valo](https://getvalo.dev/faq) — connexions, modèles locaux, rapports de bogue.',
          '[Politique de confidentialité](https://getvalo.dev/privacy) — traitement des données et fournisseurs.',
          '[Conditions d’utilisation](https://getvalo.dev/terms) — licence et mention du code fermé.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          '[Test d’Orca](/fr/power-local-llm/orca-review) — une app open source pour piloter plusieurs agents de code.',
          '[Test d’OpenWork](/fr/power-local-llm/openwork-review) — une app d’agent de bureau qui peut utiliser Ollama.',
          '[Test d’OpenMausBot](/fr/power-local-llm/openmausbot-review) — une app de chat de bureau qui pilote des outils d’agents.',
          '[L’annuaire complet des logiciels LLM locaux](/fr/directory) — d’autres outils d’IA locale.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-28',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-05-28',
    theme: 'Overview & Reference',
    heroImage: '/images/valo-review-hero-es.webp',
    title: 'Reseña de Valo: un solo espacio de escritorio para Claude, Codex e IA local',
    seoTitle: 'Reseña de Valo: escritorio para Claude e IA local',
    intro: 'Valo es una app de escritorio que reúne asistentes de IA alojados y modelos locales en un solo espacio de trabajo. Esta reseña separa lo que se queda en tu equipo de lo que llega a un proveedor y señala dónde las páginas del creador no coinciden.',
    metaDescription: 'Reseña de Valo: espacio de escritorio de código cerrado para Claude, Codex y modelos locales. Funciona en híbrido, con planes gratis y Pro. Sin probar.',
    twitterDescription: 'Reseña de Valo: un espacio de escritorio para asistentes alojados y modelos locales. Qué se queda en local, qué va al proveedor y qué no está claro.',
    audience: 'Quienes usan varios asistentes de IA para programar o llevar proyectos y los quieren en una sola app de escritorio.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Valo review',
    targetKeywords: [
      'reseña valo',
      'getvalo',
      'valo espacio de trabajo ia',
      'app escritorio claude code',
      'app escritorio codex',
      'ia local app de escritorio',
    ],
    current_hardware_mentioned: [
      'Mac',
    ],
    leadAnswerBlock: '**Valo es un espacio de trabajo de escritorio de código cerrado para Windows, macOS y Linux que funciona en modo híbrido: según el creador, los proyectos y chats se guardan en tu equipo, mientras que las peticiones a asistentes alojados van a sus proveedores.** Esta reseña trata la versión 1.4.2, publicada el 26 de noviembre de 2026, y se basa en páginas públicas, no en pruebas propias.',
    quickAnswerTop: {
      es: {
        question: '¿Es Valo una app de IA local?',
        answer: 'Solo en parte. Puede usarse con modelos locales, pero su uso principal son los asistentes alojados, así que comprueba cuál usa cada chat.',
        bullets: [
          'Si el trabajo es sensible, revisa el proveedor de cada chat antes de escribir.',
          'Si solo quieres modelos locales, prueba primero Ollama en tu versión.',
          'Si quieres código abierto, elige una de las alternativas de abajo.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'Descargar Valo',
        anchor: 'get-it',
      },
      {
        label: 'De un vistazo',
        anchor: 'at-a-glance',
      },
      {
        label: 'Qué es Valo',
        anchor: 'what-is-valo',
      },
      {
        label: 'Local o nube',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'Datos y dudas abiertas',
        anchor: 'data',
      },
      {
        label: 'Plan gratis, Pro y precio',
        anchor: 'pricing',
      },
      {
        label: 'Alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'FAQ',
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
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Valo es una sola ventana de escritorio para varios asistentes de IA.',
          },
          {
            type: 'plain-terms',
            text: 'Eliges qué IA responde en cada chat y la app mantiene tu trabajo en un mismo sitio.',
          },
        ],
        items: [
          'Modelo de precio: un plan gratis y una suscripción Pro opcional.',
          'Vía local: el creador menciona Ollama; las páginas revisadas no nombran otro motor local.',
          'Cuentas: los asistentes alojados requieren tu propio plan o créditos de API.',
          'Creador: el pie de la web nombra a Charm Works Ltd, registrada en el Reino Unido.',
          'Código fuente: cerrado, según los términos del servicio.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Descargar Valo',
        content: [
          '**Valo ofrece instaladores en su página de descarga, así que no hace falta compilar la app.**',
        ],
        columns: [
          'Elemento',
          'Enlace',
        ],
        rows: [
          {
            Elemento: 'macOS',
            Enlace: '[Apple Silicon / Intel (.dmg)](https://getvalo.dev/download)',
          },
          {
            Elemento: 'Windows',
            Enlace: '[Setup (.exe)](https://getvalo.dev/download)',
          },
          {
            Elemento: 'Linux',
            Enlace: '[.deb / .rpm / AppImage](https://getvalo.dev/download)',
          },
          {
            Elemento: 'Sitio web',
            Enlace: '[getvalo.dev](https://getvalo.dev/)',
          },
          {
            Elemento: 'Privacidad',
            Enlace: '[Política de privacidad de Valo](https://getvalo.dev/privacy)',
          },
        ],
        note: 'Según el creador, las versiones para Mac y Windows están firmadas por CHARM WORKS LTD. Las páginas revisadas no indican requisitos de hardware. La política de privacidad menciona un paso para instalar Node.js, así que la primera configuración puede requerir algo más que el instalador.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'De un vistazo',
        columns: [
          'Característica',
          'Valo',
        ],
        rows: [
          {
            Característica: 'Versión',
            Valo: '1.4.2 (última actualización: 26 de noviembre de 2026)',
          },
          {
            Característica: 'Tipo',
            Valo: 'App de escritorio',
          },
          {
            Característica: 'Ejecución',
            Valo: 'Híbrida: app local, IA alojada o local',
          },
          {
            Característica: 'LLM locales',
            Valo: 'Sí con Ollama, según el creador; ver abajo',
          },
          {
            Característica: 'Edición de código y terminal',
            Valo: 'Sí, según el creador',
          },
          {
            Característica: 'Compatibilidad con MCP',
            Valo: 'No indicada',
          },
          {
            Característica: 'RAM / VRAM necesaria',
            Valo: 'No indicada',
          },
          {
            Característica: 'Licencia',
            Valo: 'Propietaria, código cerrado',
          },
        ],
      },
      whatIs: {
        id: 'what-is-valo',
        title: 'Qué es Valo',
        content: [
          '**Es una interfaz para asistentes que ya usas, no un modelo propio.** Según los términos, se conecta a los motores de IA compatibles mediante sus herramientas de línea de comandos. El creador nombra Claude, Codex, Gemini, Cursor, GLM y modelos locales, a elegir en cada chat.',
          'Entre las funciones que describe el creador están:',
        ],
        items: [
          'Un mapa de los archivos del proyecto, vista previa en vivo y chats guardados que se pueden buscar.',
          'Permisos por herramienta: decides cuándo el asistente debe preguntar antes de actuar.',
          'Keyguard, una bóveda cifrada. Según el creador, los asistentes usan las credenciales guardadas sin ver sus valores.',
          'Entrada por voz, con transcripción en tu equipo según el creador.',
          'Acceso desde el móvil por Telegram, generación de vídeo con Seedance y ValoLink para conectar asistentes entre equipos.',
          'Complementos de navegador que permiten al asistente leer y actuar en tu navegador cuando se lo pides.',
        ],
      },
      localCloud: {
        id: 'local-vs-cloud',
        title: 'Local o nube: qué se ejecuta dónde',
        content: [
          '**Según el creador, el almacenamiento es local; la respuesta de la IA solo es local si el chat usa un modelo local.** Los términos indican que los datos de proyecto, las conversaciones y los archivos se quedan en tu equipo y no se suben a los servidores de Valo. Una petición a Claude, Codex, GLM u otro asistente alojado la procesa ese proveedor según sus condiciones.',
          '**Las páginas no coinciden sobre los modelos locales.** La página de precios y las FAQ dicen que los modelos locales se ejecutan con Ollama en tu equipo. La política de privacidad, del 25 de noviembre de 2026, escribe "when local-model support is enabled" (cuando la compatibilidad con modelos locales esté activada) y añade que está en desarrollo activo. Para esta reseña no se ejecutó la versión 1.4.2, así que comprueba que Ollama te funcione antes de depender de él.',
        ],
      },
      dataSent: {
        id: 'data',
        title: 'Qué sale de tu equipo y qué queda por aclarar',
        content: [
          '**Como tráfico propio de la app hacia el creador, la política de privacidad cita un aviso al arrancar, la búsqueda de actualizaciones y la comprobación de licencias.** Según la política, ese aviso incluye versión, plataforma, tipo de procesador, un ID de instalación aleatorio, el paso de configuración más avanzado y la ruta de configuración. Activar Pro implica además tu correo, la clave de licencia y un identificador del equipo. La política afirma que no hay analítica de uso continua dentro de la app. Según las FAQ, la herramienta de línea de comandos de Claude envía además telemetría propia de Anthropic, que puedes desactivar con el ajuste CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1. Las cookies publicitarias de la web se describen aparte de la app.',
          'Son declaraciones del creador; para esta reseña no se inspeccionó el tráfico de red. Puntos que conviene revisar:',
        ],
        items: [
          'La lista de proveedores de IA de la política de privacidad nombra Anthropic, OpenAI y Z.AI. No encontramos ninguna entrada sobre Gemini, Cursor, Seedance ni Telegram, que sí aparecen en otras páginas de Valo.',
          'Las FAQ dicen que los informes de errores se envían cifrados por Valo Mail después de que los revises. No encontramos una descripción de esa función en la política de privacidad.',
          'Las FAQ dirigen las preguntas a YouTube, mientras que la política de privacidad indica Discord para las solicitudes de privacidad.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Plan gratis, Pro y precio',
        content: [
          '**El plan gratis incluye la elección de asistentes, edición de código y terminal, permisos por herramienta, Keyguard, voz y chats guardados.** Valo Pro cuesta 12,99 US$ al mes (la web muestra el precio en dólares), se cobra a través de Paddle y vale para hasta 3 equipos. Añade Context Control, Valo Search, Cross-Chat, Scheduled Tasks y soporte prioritario.',
          'El creador describe una prueba Pro de 14 días sin cuenta ni tarjeta; después, la app sigue funcionando con el plan gratis. El precio no incluye acceso a la IA: para los asistentes alojados necesitas tu propio plan o créditos de API.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Valo frente a las alternativas',
        content: [
          'Otros cuatro espacios de trabajo para agentes del directorio son la comparación natural.',
        ],
        columns: [
          'App',
          'Plataformas',
          'Precio y licencia',
          'Diferencia clave',
        ],
        rows: [
          {
            App: 'Valo',
            Plataformas: 'Windows, macOS, Linux',
            'Precio y licencia': 'Freemium, propietaria',
            'Diferencia clave': 'Bóveda y permisos en el plan gratis',
          },
          {
            App: '[Orca](/es/power-local-llm/orca-review)',
            Plataformas: 'Escritorio, iOS, Android',
            'Precio y licencia': 'Gratis, MIT',
            'Diferencia clave': 'Código abierto; no ejecuta modelos',
          },
          {
            App: '[OpenWork](/es/power-local-llm/openwork-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio y licencia': 'Freemium, MIT y partes EE',
            'Diferencia clave': 'Se conecta a Ollama',
          },
          {
            App: '[OpenMausBot](/es/power-local-llm/openmausbot-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio y licencia': 'App gratis, núcleo Apache 2.0',
            'Diferencia clave': 'Modelos locales vía endpoints compatibles',
          },
          {
            App: '[MyAgents](/es/power-local-llm/myagents-review)',
            Plataformas: 'Windows, macOS',
            'Precio y licencia': 'Gratis, AGPL-3.0',
            'Diferencia clave': 'Sin vía local documentada',
          },
        ],
        note: 'Los datos de terceros proceden de nuestras fichas del directorio y pueden cambiar; revisa cada proyecto.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesito una cuenta de Valo para empezar?',
            a: 'No para el plan gratis, según el creador. Comprar Pro implica un correo y una clave de licencia.',
          },
          {
            q: '¿Valo incluye el uso de los modelos?',
            a: 'No. El creador dice que no revende acceso a la IA, así que siguen aplicándose los límites y cobros de cada proveedor.',
          },
          {
            q: '¿Puedo llevar mi trabajo a otro equipo?',
            a: 'Según el creador, copias la carpeta de datos de Valo, la indicas en la app, vuelves a iniciar sesión en tus proveedores y desbloqueas la bóveda.',
          },
          {
            q: '¿Puedo comprobar adónde se conecta la app?',
            a: 'Las FAQ proponen un monitor de red y enumeran los dominios esperables. Hacerlo en tu propio equipo es la forma directa de comprobar lo que afirman.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Valo parece merecer una prueba si saltas entre varios asistentes de programación y quieres chats, permisos y credenciales en un mismo lugar. El plan gratis permite valorarlo antes de pagar.',
          'Ten cuidado si lo eliges por privacidad: el código es cerrado, los asistentes alojados reciben tus peticiones y las páginas del creador no coinciden sobre el estado de la compatibilidad con modelos locales. Para una instalación estrictamente local, comprueba primero esa vía o compara las alternativas.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Web de Valo](https://getvalo.dev/) — resumen del producto y dato de la empresa en el pie.',
          '[Página de descarga](https://getvalo.dev/download) — versión, fecha de publicación, instaladores.',
          '[Funciones de Valo](https://getvalo.dev/features) — descripción de las funciones.',
          '[Precios de Valo](https://getvalo.dev/pricing) — reparto gratis/Pro, precio, prueba.',
          '[FAQ de Valo](https://getvalo.dev/faq) — conexiones, modelos locales, informes de errores.',
          '[Política de privacidad](https://getvalo.dev/privacy) — tratamiento de datos y proveedores.',
          '[Términos del servicio](https://getvalo.dev/terms) — licencia y declaración de código cerrado.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Orca](/es/power-local-llm/orca-review) — una app de código abierto para varios agentes de programación.',
          '[Reseña de OpenWork](/es/power-local-llm/openwork-review) — una app de agentes de escritorio que puede usar Ollama.',
          '[Reseña de OpenMausBot](/es/power-local-llm/openmausbot-review) — una app de chat de escritorio que maneja herramientas de agentes.',
          '[El directorio completo de software para LLM locales](/es/directory) — más herramientas de IA local.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-28',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-05-28',
    theme: 'Overview & Reference',
    heroImage: '/images/valo-review-hero-pt.webp',
    title: 'Análise do Valo: um só ambiente de desktop para Claude, Codex e IA local',
    seoTitle: 'Análise do Valo: app desktop para Claude e IA local',
    intro: 'O Valo é um aplicativo de desktop que reúne assistentes de IA hospedados e modelos locais em um só ambiente. Esta análise separa o que fica no seu computador do que vai para um provedor e mostra onde as páginas do fabricante não batem.',
    metaDescription: 'Análise do Valo: ambiente de desktop de código fechado para Claude, Codex e modelos locais. Funciona em modo híbrido, com grátis e Pro. Sem teste.',
    twitterDescription: 'Análise do Valo: um ambiente de desktop para assistentes hospedados e modelos locais. O que fica local, o que vai ao provedor e o que não está claro.',
    audience: 'Quem usa vários assistentes de IA para código ou projetos e quer todos em um só aplicativo de desktop.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Valo review',
    targetKeywords: [
      'análise valo',
      'getvalo',
      'valo ambiente de trabalho ia',
      'app desktop claude code',
      'app desktop codex',
      'ia local aplicativo desktop',
    ],
    current_hardware_mentioned: [
      'Mac',
    ],
    leadAnswerBlock: '**O Valo é um ambiente de trabalho para desktop, de código fechado, para Windows, macOS e Linux, e funciona em modo híbrido: segundo o fabricante, projetos e chats ficam no seu computador, enquanto os pedidos a assistentes hospedados vão para os provedores deles.** Esta análise trata da versão 1.4.2, lançada em 26 de novembro de 2026, e se baseia em páginas públicas, não em testes práticos.',
    quickAnswerTop: {
      pt: {
        question: 'O Valo é um aplicativo de IA local?',
        answer: 'Só em parte. Dá para usá-lo com modelos locais, mas o uso principal são assistentes hospedados; confira qual deles cada chat usa.',
        bullets: [
          'Em trabalhos sensíveis, confira o provedor de cada chat antes de digitar.',
          'Se você quer só modelos locais, teste primeiro o Ollama na sua versão.',
          'Se quer código aberto, escolha uma das alternativas abaixo.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'Baixar o Valo',
        anchor: 'get-it',
      },
      {
        label: 'Visão geral',
        anchor: 'at-a-glance',
      },
      {
        label: 'O que é o Valo',
        anchor: 'what-is-valo',
      },
      {
        label: 'Local ou nuvem',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'Dados e dúvidas em aberto',
        anchor: 'data',
      },
      {
        label: 'Plano grátis, Pro e preço',
        anchor: 'pricing',
      },
      {
        label: 'Alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'FAQ',
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
        label: 'Leia também',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Valo é uma única janela de desktop para vários assistentes de IA.',
          },
          {
            type: 'plain-terms',
            text: 'Você escolhe qual IA responde em cada chat, e o aplicativo mantém seu trabalho em um só lugar.',
          },
        ],
        items: [
          'Modelo de preço: um plano grátis e uma assinatura Pro opcional.',
          'Caminho local: o fabricante cita o Ollama; as páginas consultadas não nomeiam outro motor local.',
          'Contas: assistentes hospedados exigem seu próprio plano ou créditos de API.',
          'Fabricante: o rodapé do site cita a Charm Works Ltd, registrada no Reino Unido.',
          'Código-fonte: fechado, segundo os termos de serviço.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Baixar o Valo',
        content: [
          '**O Valo oferece instaladores na página de download, então não é preciso compilar o aplicativo.**',
        ],
        columns: [
          'Item',
          'Link',
        ],
        rows: [
          {
            Item: 'macOS',
            Link: '[Apple Silicon / Intel (.dmg)](https://getvalo.dev/download)',
          },
          {
            Item: 'Windows',
            Link: '[Setup (.exe)](https://getvalo.dev/download)',
          },
          {
            Item: 'Linux',
            Link: '[.deb / .rpm / AppImage](https://getvalo.dev/download)',
          },
          {
            Item: 'Site',
            Link: '[getvalo.dev](https://getvalo.dev/)',
          },
          {
            Item: 'Privacidade',
            Link: '[Política de privacidade do Valo](https://getvalo.dev/privacy)',
          },
        ],
        note: 'Segundo o fabricante, as versões para Mac e Windows são assinadas pela CHARM WORKS LTD. As páginas consultadas não informam requisitos de hardware. A política de privacidade menciona uma etapa de instalação do Node.js, então a primeira configuração pode exigir mais do que o instalador.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Visão geral',
        columns: [
          'Atributo',
          'Valo',
        ],
        rows: [
          {
            Atributo: 'Versão',
            Valo: '1.4.2 (última atualização: 26 de novembro de 2026)',
          },
          {
            Atributo: 'Tipo',
            Valo: 'Aplicativo de desktop',
          },
          {
            Atributo: 'Execução',
            Valo: 'Híbrida: app local, IA hospedada ou local',
          },
          {
            Atributo: 'LLMs locais',
            Valo: 'Sim via Ollama, segundo o fabricante; veja abaixo',
          },
          {
            Atributo: 'Edição de código e terminal',
            Valo: 'Sim, segundo o fabricante',
          },
          {
            Atributo: 'Suporte a MCP',
            Valo: 'Não informado',
          },
          {
            Atributo: 'RAM / VRAM necessária',
            Valo: 'Não informado',
          },
          {
            Atributo: 'Licença',
            Valo: 'Proprietária, código fechado',
          },
        ],
      },
      whatIs: {
        id: 'what-is-valo',
        title: 'O que é o Valo',
        content: [
          '**É uma interface para assistentes que você já usa, e não um modelo próprio.** Segundo os termos, ele se conecta aos motores de IA compatíveis pelas ferramentas de linha de comando deles. O fabricante cita Claude, Codex, Gemini, Cursor, GLM e modelos locais, escolhidos por chat.',
          'Entre os recursos descritos pelo fabricante estão:',
        ],
        items: [
          'Um mapa dos arquivos do projeto, pré-visualização ao vivo e chats salvos e pesquisáveis.',
          'Permissões por ferramenta: você define quando o assistente precisa perguntar antes de agir.',
          'Keyguard, um cofre criptografado. Segundo o fabricante, os assistentes usam as credenciais salvas sem ver os valores.',
          'Entrada por voz, com transcrição no seu computador, segundo o fabricante.',
          'Acesso pelo celular via Telegram, geração de vídeo com o Seedance e o ValoLink para conectar assistentes entre máquinas.',
          'Extensões de navegador que permitem ao assistente ler e agir no seu navegador quando você pede.',
        ],
      },
      localCloud: {
        id: 'local-vs-cloud',
        title: 'Local ou nuvem: o que roda onde',
        content: [
          '**Segundo o fabricante, o armazenamento é local; a resposta da IA só é local se o chat usar um modelo local.** Os termos dizem que dados de projeto, conversas e arquivos ficam na sua máquina e não são enviados aos servidores do Valo. Um pedido ao Claude, ao Codex, ao GLM ou a outro assistente hospedado é processado por aquele provedor, nos termos dele.',
          '**As páginas divergem sobre modelos locais.** A página de preços e o FAQ dizem que os modelos locais rodam pelo Ollama no seu computador. A política de privacidade, de 25 de novembro de 2026, diz "when local-model support is enabled" (quando o suporte a modelos locais estiver ativado) e acrescenta que ele está em desenvolvimento ativo. A versão 1.4.2 não foi executada nesta análise, então confirme que o Ollama funciona para você antes de depender dele.',
        ],
      },
      dataSent: {
        id: 'data',
        title: 'O que sai do seu computador e dúvidas em aberto',
        content: [
          '**Como tráfego do próprio aplicativo para o fabricante, a política de privacidade cita um aviso na inicialização, a busca por atualizações e a verificação de licença.** Segundo a política, o aviso leva versão, plataforma, tipo de processador, um ID de instalação aleatório, a etapa de configuração mais avançada e o caminho de configuração. Ativar o Pro envolve ainda seu e-mail, a chave de licença e um identificador da máquina. A política afirma que não há análise de uso contínua dentro do aplicativo. Segundo o FAQ, a ferramenta de linha de comando do Claude envia também telemetria da própria Anthropic, que você pode desligar com a configuração CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1. Os cookies de publicidade do site são descritos separadamente do aplicativo.',
          'São declarações do fabricante; o tráfego de rede não foi inspecionado nesta análise. Pontos a conferir:',
        ],
        items: [
          'A lista de provedores de IA da política de privacidade cita Anthropic, OpenAI e Z.AI. Não encontramos entrada para Gemini, Cursor, Seedance ou Telegram, mencionados em outras páginas do Valo.',
          'O FAQ diz que relatórios de erro são enviados criptografados pelo Valo Mail depois que você os revisa. Não encontramos descrição desse recurso na política de privacidade.',
          'O FAQ direciona perguntas ao YouTube, enquanto a política de privacidade indica o Discord para pedidos sobre privacidade.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Plano grátis, Pro e preço',
        content: [
          '**O plano grátis inclui a escolha de assistentes, edição de código e terminal, permissões por ferramenta, Keyguard, voz e chats salvos.** O Valo Pro custa US$ 12,99 por mês (o site mostra o preço em dólar), é cobrado pela Paddle e vale para até 3 máquinas. Ele acrescenta Context Control, Valo Search, Cross-Chat, Scheduled Tasks e suporte prioritário.',
          'O fabricante descreve um teste Pro de 14 dias sem conta nem cartão; depois, o aplicativo continua utilizável no plano grátis. O preço não inclui acesso à IA: para assistentes hospedados, você precisa do seu próprio plano ou de créditos de API.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Valo x alternativas',
        content: [
          'Outros quatro ambientes para agentes do diretório são a comparação natural.',
        ],
        columns: [
          'App',
          'Plataformas',
          'Preço e licença',
          'Principal diferença',
        ],
        rows: [
          {
            App: 'Valo',
            Plataformas: 'Windows, macOS, Linux',
            'Preço e licença': 'Freemium, proprietária',
            'Principal diferença': 'Cofre e permissões já no plano grátis',
          },
          {
            App: '[Orca](/pt/power-local-llm/orca-review)',
            Plataformas: 'Desktop, iOS, Android',
            'Preço e licença': 'Grátis, MIT',
            'Principal diferença': 'Código aberto; não roda modelos',
          },
          {
            App: '[OpenWork](/pt/power-local-llm/openwork-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço e licença': 'Freemium, MIT e partes EE',
            'Principal diferença': 'Conecta-se ao Ollama',
          },
          {
            App: '[OpenMausBot](/pt/power-local-llm/openmausbot-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço e licença': 'App grátis, núcleo Apache 2.0',
            'Principal diferença': 'Modelos locais via endpoints compatíveis',
          },
          {
            App: '[MyAgents](/pt/power-local-llm/myagents-review)',
            Plataformas: 'Windows, macOS',
            'Preço e licença': 'Grátis, AGPL-3.0',
            'Principal diferença': 'Sem caminho local documentado',
          },
        ],
        note: 'Os dados de terceiros vêm das nossas fichas no diretório e podem mudar; confira cada projeto.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso de uma conta Valo para começar?',
            a: 'Não no plano grátis, segundo o fabricante. Comprar o Pro envolve um e-mail e uma chave de licença.',
          },
          {
            q: 'O Valo inclui o uso dos modelos?',
            a: 'Não. O fabricante diz que não revende acesso à IA; os limites e as cobranças de cada provedor continuam valendo.',
          },
          {
            q: 'Posso levar meu trabalho para outro computador?',
            a: 'Segundo o fabricante, você copia a pasta de dados do Valo, aponta o aplicativo para ela, entra de novo nos provedores e destrava o cofre.',
          },
          {
            q: 'Dá para conferir onde o aplicativo se conecta?',
            a: 'O FAQ sugere um monitor de rede e lista os domínios esperados. Fazer isso na sua máquina é o jeito direto de testar as afirmações.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Valo parece valer um teste se você alterna entre vários assistentes de código e quer chats, permissões e credenciais em um só lugar. O plano grátis permite avaliar antes de pagar.',
          'Tenha cautela se o seu motivo for privacidade: o código é fechado, os assistentes hospedados recebem seus pedidos e as páginas do fabricante não concordam sobre o estágio do suporte a modelos locais. Para um uso estritamente local, verifique primeiro esse caminho ou compare as alternativas.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Valo](https://getvalo.dev/) — resumo do produto e dado da empresa no rodapé.',
          '[Página de download](https://getvalo.dev/download) — versão, data de lançamento, instaladores.',
          '[Recursos do Valo](https://getvalo.dev/features) — descrição dos recursos.',
          '[Preços do Valo](https://getvalo.dev/pricing) — divisão grátis/Pro, preço, teste.',
          '[FAQ do Valo](https://getvalo.dev/faq) — conexões, modelos locais, relatórios de erro.',
          '[Política de privacidade](https://getvalo.dev/privacy) — tratamento de dados e provedores.',
          '[Termos de serviço](https://getvalo.dev/terms) — licença e declaração de código fechado.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leia também',
        items: [
          '[Análise do Orca](/pt/power-local-llm/orca-review) — um app de código aberto para vários agentes de programação.',
          '[Análise do OpenWork](/pt/power-local-llm/openwork-review) — um app de agentes para desktop que pode usar o Ollama.',
          '[Análise do OpenMausBot](/pt/power-local-llm/openmausbot-review) — um app de chat para desktop que comanda ferramentas de agentes.',
          '[O diretório completo de software para LLMs locais](/pt/directory) — mais ferramentas de IA local.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-28',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-05-28',
    theme: 'Overview & Reference',
    heroImage: '/images/valo-review-hero-ja.webp',
    title: 'Valoレビュー：Claude・Codex・ローカルAIを一つにまとめるデスクトップ作業環境',
    seoTitle: 'Valoレビュー：ClaudeとローカルAIのデスクトップ環境',
    intro: 'Valoは、ホスト型のAIアシスタントとローカルモデルを一つの作業環境にまとめるデスクトップアプリです。このレビューでは、パソコンに残るものとプロバイダーに送られるものを分けて整理し、開発元のページ間で食い違う点も示します。',
    metaDescription: 'ValoはClaude・Codex・ローカルモデルをまとめる非公開ソースのデスクトップアプリです。ハイブリッド構成、無料版とPro版、未解決の点を整理します。実機テストは未実施。',
    twitterDescription: 'Valoレビュー：ホスト型アシスタントとローカルモデルをまとめるデスクトップ環境。何がローカルに残り、何が送られ、何が不明かを整理します。',
    audience: 'コードやプロジェクト作業で複数のAIアシスタントを使い、一つのデスクトップアプリにまとめたい人。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Valo review',
    targetKeywords: [
      'Valo レビュー',
      'getvalo',
      'Valo AI ワークスペース',
      'Claude Code デスクトップアプリ',
      'Codex デスクトップアプリ',
      'ローカルAI デスクトップ',
    ],
    current_hardware_mentioned: [
      'Mac',
    ],
    leadAnswerBlock: '**ValoはWindows・macOS・Linux向けの非公開ソースのデスクトップ作業環境で、構成はハイブリッドです。開発元によるとプロジェクトとチャットはパソコンに保存され、ホスト型アシスタントへのリクエストは各プロバイダーに送られます。** このレビューは2026年11月26日公開のバージョン1.4.2が対象で、公開ページに基づくものです。実機テストは行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'ValoはローカルAIアプリですか？',
        answer: '一部だけです。ローカルモデルでも使える設計ですが、主な用途はホスト型アシスタントなので、各チャットがどれを使うか確認してください。',
        bullets: [
          '機密性の高い作業では、入力前に各チャットのプロバイダーを確認しましょう。',
          'ローカルモデルだけを使いたい場合は、まず手元のバージョンでOllama対応を確認してください。',
          'オープンソースを重視するなら、下の代替アプリを選んでください。',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      {
        label: 'すぐわかる答え',
        anchor: 'quick-answer',
      },
      {
        label: 'Valoの入手',
        anchor: 'get-it',
      },
      {
        label: '早わかり',
        anchor: 'at-a-glance',
      },
      {
        label: 'Valoとは',
        anchor: 'what-is-valo',
      },
      {
        label: 'ローカルとクラウド',
        anchor: 'local-vs-cloud',
      },
      {
        label: '送信データと未解決の点',
        anchor: 'data',
      },
      {
        label: '無料版・Pro・料金',
        anchor: 'pricing',
      },
      {
        label: '代替アプリ',
        anchor: 'vs-alternatives',
      },
      {
        label: 'FAQ',
        anchor: 'faq',
      },
      {
        label: '結論',
        anchor: 'verdict',
      },
      {
        label: '出典',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Valoは複数のAIアシスタントを扱う一つのデスクトップ画面です。',
          },
          {
            type: 'plain-terms',
            text: 'チャットごとに回答するAIを選び、作業はアプリの中にまとまります。',
          },
        ],
        items: [
          '料金体系：無料プランと任意のProサブスクリプション。',
          'ローカル利用：開発元が挙げるのはOllamaです。確認したページに他のローカル実行環境の記載はありません。',
          'アカウント：ホスト型アシスタントには自分の契約かAPIクレジットが必要です。',
          '開発元：サイトのフッターは英国で登記されたCharm Works Ltdを記載しています。',
          'ソースコード：利用規約によると非公開です。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Valoの入手',
        content: [
          '**Valoはダウンロードページでインストーラーを配布しているため、アプリ自体をソースからビルドする必要はありません。**',
        ],
        columns: [
          '項目',
          'リンク',
        ],
        rows: [
          {
            '項目': 'macOS',
            'リンク': '[Apple Silicon / Intel (.dmg)](https://getvalo.dev/download)',
          },
          {
            '項目': 'Windows',
            'リンク': '[Setup (.exe)](https://getvalo.dev/download)',
          },
          {
            '項目': 'Linux',
            'リンク': '[.deb / .rpm / AppImage](https://getvalo.dev/download)',
          },
          {
            '項目': '公式サイト',
            'リンク': '[getvalo.dev](https://getvalo.dev/)',
          },
          {
            '項目': 'プライバシー',
            'リンク': '[Valoのプライバシーポリシー](https://getvalo.dev/privacy)',
          },
        ],
        note: '開発元によると、Mac版とWindows版はCHARM WORKS LTDの署名付きです。確認したページにハードウェア要件の記載はありません。プライバシーポリシーはNode.jsをインストールするセットアップ手順に触れているため、初回設定にはインストーラー以外の作業が必要になる可能性があります。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: '早わかり',
        columns: [
          '項目',
          'Valo',
        ],
        rows: [
          {
            '項目': 'バージョン',
            Valo: '1.4.2（最終更新：2026年11月26日）',
          },
          {
            '項目': '種類',
            Valo: 'デスクトップアプリ',
          },
          {
            '項目': '動作',
            Valo: 'ハイブリッド：アプリは端末、AIはクラウドかローカル',
          },
          {
            '項目': 'ローカルLLM',
            Valo: '開発元によるとOllamaで対応（下記参照）',
          },
          {
            '項目': 'コード編集とターミナル',
            Valo: '対応（開発元の説明）',
          },
          {
            '項目': 'MCP対応',
            Valo: '記載なし',
          },
          {
            '項目': '必要RAM／VRAM',
            Valo: '記載なし',
          },
          {
            '項目': 'ライセンス',
            Valo: 'プロプライエタリ（非公開ソース）',
          },
        ],
      },
      whatIs: {
        id: 'what-is-valo',
        title: 'Valoとは',
        content: [
          '**Valoは独自モデルではなく、すでに使っているアシスタントの操作画面です。** 利用規約によると、対応するAIエンジンにコマンドラインツール経由で接続します。開発元はClaude、Codex、Gemini、Cursor、GLM、ローカルモデルを挙げ、チャットごとに選べるとしています。',
          '開発元が説明する主な機能は次のとおりです。',
        ],
        items: [
          'プロジェクトのファイルマップ、ライブプレビュー、保存され検索できるチャット。',
          'ツール単位の権限設定。アシスタントが実行前に確認すべき場面を指定できます。',
          '暗号化ボルトのKeyguard。開発元によると、アシスタントは値を見ずに保存済みの認証情報を使います。',
          '音声入力。開発元によると文字起こしは端末上で行われます。',
          'Telegram経由のスマートフォンからの操作、Seedanceによる動画生成、複数マシンのアシスタントをつなぐValoLink。',
          '依頼したときにアシスタントがブラウザーを読み取り操作できる拡張機能。',
        ],
      },
      localCloud: {
        id: 'local-vs-cloud',
        title: 'ローカルとクラウド：どこで何が動くか',
        content: [
          '**開発元の説明では保存はローカルですが、AIの回答がローカルになるのはチャットがローカルモデルで動く場合だけです。** 利用規約は、プロジェクトのデータ、会話、ファイルは端末に残り、Valoのサーバーにはアップロードされないとしています。Claude、Codex、GLMなどホスト型アシスタントへの入力は、各プロバイダーがその規約のもとで処理します。',
          '**ローカルモデルについてはページ間で説明が異なります。** 料金ページとFAQは、ローカルモデルはOllamaを通じて端末上で動くとしています。一方、2026年11月25日付のプライバシーポリシーは「when local-model support is enabled」（ローカルモデル対応が有効になった場合）と書き、この対応は開発中だと述べています。このレビューではバージョン1.4.2を実行していないため、頼る前にOllamaが手元で動くか確認してください。',
        ],
      },
      dataSent: {
        id: 'data',
        title: '端末の外に出るデータと未解決の点',
        content: [
          '**アプリから開発元への通信としてプライバシーポリシーが挙げるのは、起動時の通知、更新確認、ライセンス確認です。** ポリシーによると、起動時の通知にはアプリのバージョン、OS、CPUの種類、ランダムなインストールID、到達した設定ステップ、設定経路が含まれます。Proの有効化では、メールアドレス、ライセンスキー、端末識別子も扱われます。アプリ内の継続的な利用分析はないとしています。FAQによると、ClaudeのコマンドラインツールはAnthropic独自のテレメトリーも送信し、CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1の設定で無効にできます。サイトの広告Cookieはデスクトップアプリとは別に説明されています。',
          'これらは開発元の説明で、このレビューでは通信内容を調べていません。確認したい点は次のとおりです。',
        ],
        items: [
          'プライバシーポリシーのAIプロバイダー一覧はAnthropic、OpenAI、Z.AIを挙げています。Valoの他のページに登場するGemini、Cursor、Seedance、Telegramの項目は見つかりませんでした。',
          'FAQによると、バグ報告は内容を確認した後、Valo Mailで暗号化して送られます。この機能の説明はプライバシーポリシーに見つかりませんでした。',
          'FAQは質問先をYouTubeとし、プライバシーポリシーはプライバシー関連の窓口をDiscordとしています。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '無料プラン・Pro・料金',
        content: [
          '**無料プランには、アシスタントの選択、コード編集とターミナル、ツール単位の権限、Keyguard、音声、チャット保存が含まれます。** Valo Proは月額12.99米ドル（公式サイトは米ドル表示）で、Paddle経由の請求、最大3台まで利用できます。ProではContext Control、Valo Search、Cross-Chat、Scheduled Tasks、優先サポートが加わります。',
          '開発元は、アカウントもカードも不要な14日間のPro試用があり、終了後も無料プランで使い続けられるとしています。料金にAIの利用権は含まれないため、ホスト型アシスタントには自分の契約かAPIクレジットが必要です。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Valoと代替アプリの比較',
        content: [
          'ディレクトリ内のエージェント向け作業環境4つが自然な比較対象です。',
        ],
        columns: [
          'アプリ',
          '対応環境',
          '料金とライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': 'Valo',
            '対応環境': 'Windows, macOS, Linux',
            '料金とライセンス': 'フリーミアム、非公開',
            '主な違い': '無料版にボルトと権限設定',
          },
          {
            'アプリ': '[Orca](/ja/power-local-llm/orca-review)',
            '対応環境': 'デスクトップ、iOS、Android',
            '料金とライセンス': '無料、MIT',
            '主な違い': 'オープンソース。モデルは実行しない',
          },
          {
            'アプリ': '[OpenWork](/ja/power-local-llm/openwork-review)',
            '対応環境': 'Windows, macOS, Linux',
            '料金とライセンス': 'フリーミアム、MIT＋EE部分',
            '主な違い': 'Ollamaに接続できる',
          },
          {
            'アプリ': '[OpenMausBot](/ja/power-local-llm/openmausbot-review)',
            '対応環境': 'Windows, macOS, Linux',
            '料金とライセンス': 'アプリ無料、本体はApache 2.0',
            '主な違い': '互換エンドポイントでローカルモデル',
          },
          {
            'アプリ': '[MyAgents](/ja/power-local-llm/myagents-review)',
            '対応環境': 'Windows, macOS',
            '料金とライセンス': '無料、AGPL-3.0',
            '主な違い': 'ローカル利用の経路は記載なし',
          },
        ],
        note: '他アプリの情報は当サイトのディレクトリ掲載内容に基づき、変わることがあります。各プロジェクトで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '始めるのにValoのアカウントは必要ですか？',
            a: '開発元によると無料プランでは不要です。Proの購入にはメールアドレスとライセンスキーが関わります。',
          },
          {
            q: 'モデルの利用料は含まれますか？',
            a: '含まれません。開発元はAIの利用権を再販していないとしており、各プロバイダーの上限と請求はそのまま適用されます。',
          },
          {
            q: '作業を別のパソコンに移せますか？',
            a: '開発元によると、Valoのデータフォルダーをコピーしてアプリで指定し、プロバイダーに再ログインしてボルトを解除します。',
          },
          {
            q: 'アプリの接続先は確認できますか？',
            a: 'FAQはネットワークモニターの利用を勧め、想定されるドメインを挙げています。自分の端末で確かめるのが直接の検証方法です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          '複数のコーディングアシスタントを行き来し、チャット・権限・認証情報を一か所にまとめたいなら、Valoは試す価値がありそうです。支払う前に無料プランで判断できます。',
          'プライバシー目的の場合は注意してください。ソースは非公開で、ホスト型アシスタントには入力内容が届き、ローカルモデル対応の完成度についてページ間の説明が一致しません。完全にローカルな構成が必要なら、先にその経路を確認するか、代替アプリと比べてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Valo公式サイト](https://getvalo.dev/) — 製品概要とフッターの会社表記。',
          '[ダウンロードページ](https://getvalo.dev/download) — バージョン、公開日、インストーラー。',
          '[機能ページ](https://getvalo.dev/features) — 機能の説明。',
          '[料金ページ](https://getvalo.dev/pricing) — 無料とProの区分、料金、試用。',
          '[FAQ](https://getvalo.dev/faq) — 接続先、ローカルモデル、バグ報告。',
          '[プライバシーポリシー](https://getvalo.dev/privacy) — データの扱いとプロバイダー。',
          '[利用規約](https://getvalo.dev/terms) — ライセンスと非公開ソースの記載。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Orcaレビュー](/ja/power-local-llm/orca-review) — 複数のコーディングエージェントを扱うオープンソースアプリ。',
          '[OpenWorkレビュー](/ja/power-local-llm/openwork-review) — Ollamaを使えるデスクトップ型エージェントアプリ。',
          '[OpenMausBotレビュー](/ja/power-local-llm/openmausbot-review) — エージェントツールを操作するデスクトップチャットアプリ。',
          '[ローカルLLMソフトウェア総合ディレクトリ](/ja/directory) — ほかのローカルAIツール。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-28',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-05-28',
    theme: 'Overview & Reference',
    heroImage: '/images/valo-review-hero-zh.webp',
    title: 'Valo评测：把Claude、Codex和本地AI放进同一个桌面工作台',
    seoTitle: 'Valo评测：整合Claude与本地AI的桌面工作台应用',
    intro: 'Valo是一款桌面应用，把云端AI助手和本地模型放进同一个工作台。本评测分清哪些内容留在你的电脑上、哪些会发给服务商，并指出开发者各页面说法不一致的地方。',
    metaDescription: 'Valo评测：闭源桌面工作台，整合Claude、Codex与本地模型。采用混合模式，提供免费版和Pro版。本文说明数据去向、价格和待确认的问题，未做实机测试。',
    twitterDescription: 'Valo评测：整合云端助手与本地模型的桌面工作台。哪些留在本地、哪些发给服务商、哪些还不清楚。',
    audience: '在编程或项目工作中使用多个AI助手、希望集中到一个桌面应用里的用户。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Valo review',
    targetKeywords: [
      'Valo 评测',
      'getvalo',
      'Valo AI 工作台',
      'Claude Code 桌面应用',
      'Codex 桌面应用',
      '本地AI 桌面工作台',
    ],
    current_hardware_mentioned: [
      'Mac',
    ],
    leadAnswerBlock: '**Valo是一款面向Windows、macOS和Linux的闭源桌面工作台，采用混合模式：开发者称项目和聊天保存在你的电脑上，而发给云端助手的请求会传到各自的服务商。** 本评测针对2026年11月26日发布的1.4.2版本，依据公开网页撰写，未做实机测试。',
    quickAnswerTop: {
      zh: {
        question: 'Valo算本地AI应用吗？',
        answer: '只能算一部分。它可以配合本地模型使用，但主要用途是云端助手，请确认每个聊天用的是哪一个。',
        bullets: [
          '处理敏感内容时，输入前先确认该聊天的服务商。',
          '如果只想用本地模型，先在你安装的版本上验证Ollama支持。',
          '如果你看重开源，请选择下文的替代方案。',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer',
      },
      {
        label: '获取Valo',
        anchor: 'get-it',
      },
      {
        label: '一览',
        anchor: 'at-a-glance',
      },
      {
        label: 'Valo是什么',
        anchor: 'what-is-valo',
      },
      {
        label: '本地与云端',
        anchor: 'local-vs-cloud',
      },
      {
        label: '数据去向与待确认问题',
        anchor: 'data',
      },
      {
        label: '免费版、Pro与价格',
        anchor: 'pricing',
      },
      {
        label: '替代方案',
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
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Valo用一个桌面窗口管理多个AI助手。',
          },
          {
            type: 'plain-terms',
            text: '每个聊天由你选择哪个AI回答，工作内容集中保存在应用里。',
          },
        ],
        items: [
          '收费方式：有免费方案，另有可选的Pro订阅。',
          '本地途径：开发者提到的是Ollama，所查页面未列出其他本地运行环境。',
          '账户要求：使用云端助手需要你自己的订阅或API额度。',
          '开发者：网站页脚标明在英国注册的Charm Works Ltd。',
          '源代码：服务条款称不开源。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取Valo',
        content: [
          '**Valo在下载页提供安装包，应用本身无需从源码编译。**',
        ],
        columns: [
          '项目',
          '链接',
        ],
        rows: [
          {
            '项目': 'macOS',
            '链接': '[Apple Silicon / Intel (.dmg)](https://getvalo.dev/download)',
          },
          {
            '项目': 'Windows',
            '链接': '[Setup (.exe)](https://getvalo.dev/download)',
          },
          {
            '项目': 'Linux',
            '链接': '[.deb / .rpm / AppImage](https://getvalo.dev/download)',
          },
          {
            '项目': '官方网站',
            '链接': '[getvalo.dev](https://getvalo.dev/)',
          },
          {
            '项目': '隐私政策',
            '链接': '[Valo隐私政策](https://getvalo.dev/privacy)',
          },
        ],
        note: '开发者称Mac和Windows版本由CHARM WORKS LTD签名。所查页面未说明硬件要求。隐私政策提到安装Node.js的设置步骤，因此首次配置可能不只是运行安装包。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: '一览',
        columns: [
          '项目',
          'Valo',
        ],
        rows: [
          {
            '项目': '版本',
            Valo: '1.4.2（最近更新：2026年11月26日）',
          },
          {
            '项目': '类型',
            Valo: '桌面应用',
          },
          {
            '项目': '运行方式',
            Valo: '混合：应用在本机，AI在云端或本地',
          },
          {
            '项目': '本地LLM',
            Valo: '开发者称通过Ollama支持，见下文',
          },
          {
            '项目': '代码编辑与终端',
            Valo: '支持（开发者说明）',
          },
          {
            '项目': 'MCP支持',
            Valo: '未说明',
          },
          {
            '项目': '内存／显存要求',
            Valo: '未说明',
          },
          {
            '项目': '许可证',
            Valo: '专有，闭源',
          },
        ],
      },
      whatIs: {
        id: 'what-is-valo',
        title: 'Valo是什么',
        content: [
          '**它是你现有助手的操作界面，本身并不是模型。** 服务条款称它通过命令行工具连接受支持的AI引擎。开发者列出Claude、Codex、Gemini、Cursor、GLM和本地模型，可按聊天选择。',
          '开发者介绍的主要功能包括：',
        ],
        items: [
          '项目文件地图、实时预览，以及可保存和搜索的聊天记录。',
          '按工具设置权限：由你决定助手在哪些操作前必须先询问。',
          '加密保险库Keyguard。开发者称助手使用已保存的凭据时看不到具体值。',
          '语音输入，开发者称转写在本机完成。',
          '通过Telegram用手机访问、用Seedance生成视频，以及用ValoLink连接不同机器上的助手。',
          '浏览器扩展：在你要求时，让助手读取并操作你的浏览器。',
        ],
      },
      localCloud: {
        id: 'local-vs-cloud',
        title: '本地与云端：哪些在哪里运行',
        content: [
          '**按开发者的说法，存储在本地；只有当聊天使用本地模型时，AI回答才在本地生成。** 服务条款称项目数据、对话和文件留在你的电脑上，不会上传到Valo的服务器。发给Claude、Codex、GLM或其他云端助手的内容，由相应服务商按其条款处理。',
          '**关于本地模型，各页面说法不一。** 价格页和常见问题称本地模型通过Ollama在你的电脑上运行。2026年11月25日的隐私政策则写着“when local-model support is enabled”（当本地模型支持启用时），并称该功能仍在积极开发中。本评测没有运行1.4.2版本，依赖该功能前请先确认Ollama在你的电脑上可用。',
        ],
      },
      dataSent: {
        id: 'data',
        title: '哪些数据会离开电脑，以及待确认问题',
        content: [
          '**隐私政策列出的应用发往开发者的自身流量是启动上报、更新检查和许可证校验。** 政策称启动上报包含应用版本、系统平台、处理器架构、随机安装ID、已到达的最远设置步骤和设置途径。激活Pro还涉及邮箱、许可证密钥和设备标识。政策称应用内没有持续的使用分析。常见问题称Claude命令行工具还会发送Anthropic自己的遥测数据，可通过设置CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1关闭。网站广告Cookie与桌面应用分开说明。',
          '以上均为开发者的说法，本评测未检查网络流量。建议核实以下几点：',
        ],
        items: [
          '隐私政策的AI服务商清单列出了Anthropic、OpenAI和Z.AI。Valo其他页面提到的Gemini、Cursor、Seedance和Telegram，我们在其中未找到对应条目。',
          '常见问题称错误报告在你审阅后通过Valo Mail加密发送。我们在隐私政策中未找到对该功能的说明。',
          '常见问题让用户到YouTube提问，隐私政策则指定通过Discord处理隐私请求。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '免费版、Pro与价格',
        content: [
          '**免费版包含助手选择、代码编辑与终端、按工具授权、Keyguard、语音和聊天保存。** Valo Pro每月12.99美元（官网以美元标价），经Paddle收费，最多可用于3台电脑。Pro增加Context Control、Valo Search、Cross-Chat、Scheduled Tasks和优先支持。',
          '开发者称提供14天Pro试用，无需账户或银行卡，到期后仍可用免费版。价格不含AI使用额度：云端助手需要你自己的订阅或API额度。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Valo与替代方案',
        content: [
          '目录中另外四款智能体工作台适合拿来比较。',
        ],
        columns: [
          '应用',
          '平台',
          '价格与许可证',
          '主要区别',
        ],
        rows: [
          {
            '应用': 'Valo',
            '平台': 'Windows, macOS, Linux',
            '价格与许可证': '免费增值，专有',
            '主要区别': '免费版即有保险库和权限控制',
          },
          {
            '应用': '[Orca](/zh/power-local-llm/orca-review)',
            '平台': '桌面端、iOS、Android',
            '价格与许可证': '免费，MIT',
            '主要区别': '开源；自身不运行模型',
          },
          {
            '应用': '[OpenWork](/zh/power-local-llm/openwork-review)',
            '平台': 'Windows, macOS, Linux',
            '价格与许可证': '免费增值，MIT加EE部分',
            '主要区别': '可连接Ollama',
          },
          {
            '应用': '[OpenMausBot](/zh/power-local-llm/openmausbot-review)',
            '平台': 'Windows, macOS, Linux',
            '价格与许可证': '应用免费，核心Apache 2.0',
            '主要区别': '通过兼容接口使用本地模型',
          },
          {
            '应用': '[MyAgents](/zh/power-local-llm/myagents-review)',
            '平台': 'Windows, macOS',
            '价格与许可证': '免费，AGPL-3.0',
            '主要区别': '未记载本地模型途径',
          },
        ],
        note: '其他应用的信息来自本站目录条目，可能变化，请以各项目为准。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '开始使用需要Valo账户吗？',
            a: '开发者称免费版不需要。购买Pro会涉及邮箱和许可证密钥。',
          },
          {
            q: '价格包含模型使用费吗？',
            a: '不包含。开发者称不转售AI访问权限，各服务商的限额和账单照常适用。',
          },
          {
            q: '可以把工作迁移到另一台电脑吗？',
            a: '开发者称可复制Valo数据文件夹，让应用指向它，重新登录服务商并解锁保险库。',
          },
          {
            q: '能否查看应用连接到哪里？',
            a: '常见问题建议使用网络监控工具，并列出了预期域名。在自己电脑上检查是验证这些说法的直接办法。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '如果你经常在多个编程助手之间切换，又希望把聊天、权限和凭据集中管理，Valo看起来值得一试。付费前可先用免费版判断。',
          '如果你是出于隐私考虑，请谨慎：应用闭源，云端助手会收到你的输入，而开发者各页面对本地模型支持的成熟度说法不一。如需完全本地的方案，请先验证该途径，或比较替代方案。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Valo官网](https://getvalo.dev/) — 产品概述和页脚公司信息。',
          '[下载页](https://getvalo.dev/download) — 版本、发布日期、安装包。',
          '[功能页](https://getvalo.dev/features) — 功能说明。',
          '[价格页](https://getvalo.dev/pricing) — 免费版与Pro划分、价格、试用。',
          '[常见问题页](https://getvalo.dev/faq) — 连接对象、本地模型、错误报告。',
          '[隐私政策](https://getvalo.dev/privacy) — 数据处理与服务商。',
          '[服务条款](https://getvalo.dev/terms) — 许可和闭源声明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Orca评测](/zh/power-local-llm/orca-review) — 可同时运行多个编程智能体的开源应用。',
          '[OpenWork评测](/zh/power-local-llm/openwork-review) — 可使用Ollama的桌面智能体应用。',
          '[OpenMausBot评测](/zh/power-local-llm/openmausbot-review) — 驱动智能体工具的桌面聊天应用。',
          '[本地LLM软件完整目录](/zh/directory) — 更多本地AI工具。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-28',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-05-28',
    theme: 'Overview & Reference',
    heroImage: '/images/valo-review-hero-ar.webp',
    title: 'مراجعة Valo: مساحة عمل مكتبية واحدة لـ Claude وCodex والذكاء الاصطناعي المحلي',
    seoTitle: 'مراجعة Valo: مساحة عمل لـ Claude والنماذج المحلية',
    intro: 'Valo تطبيق مكتبي يجمع المساعدين المستضافين والنماذج المحلية في مساحة عمل واحدة. تفصل هذه المراجعة بين ما يبقى على حاسوبك وما يصل إلى مزوّد خارجي، وتشير إلى المواضع التي لا تتطابق فيها صفحات المطوّر.',
    metaDescription: 'مراجعة Valo: مساحة عمل مكتبية مغلقة المصدر لـ Claude وCodex والنماذج المحلية. عمل هجين وخطتان مجانية وPro وأسئلة مفتوحة. لم نختبر التطبيق عمليًا.',
    twitterDescription: 'مراجعة Valo: مساحة عمل مكتبية للمساعدين المستضافين والنماذج المحلية. ما يبقى محليًا وما يُرسل إلى المزوّد وما يظل غير واضح.',
    audience: 'من يستخدمون عدة مساعدين بالذكاء الاصطناعي للبرمجة أو المشاريع ويريدون جمعهم في تطبيق مكتبي واحد.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Valo review',
    targetKeywords: [
      'مراجعة Valo',
      'getvalo',
      'مساحة عمل Valo',
      'تطبيق مكتبي Claude Code',
      'تطبيق مكتبي Codex',
      'ذكاء اصطناعي محلي للحاسوب',
    ],
    current_hardware_mentioned: [
      'Mac',
    ],
    leadAnswerBlock: '**Valo مساحة عمل مكتبية مغلقة المصدر لأنظمة Windows وmacOS وLinux تعمل بنمط هجين: يقول المطوّر إن المشاريع والمحادثات تُحفظ على حاسوبك، بينما تذهب الطلبات الموجّهة إلى المساعدين المستضافين إلى مزوّديهم.** تتناول هذه المراجعة الإصدار 1.4.2 الصادر في 26 نوفمبر 2026، وتستند إلى صفحات منشورة لا إلى اختبار عملي.',
    quickAnswerTop: {
      ar: {
        question: 'هل Valo تطبيق ذكاء اصطناعي محلي؟',
        answer: 'جزئيًا فقط. يمكن استخدامه مع نماذج محلية، لكن استخدامه الأساسي هو المساعدون المستضافون، فتحقّق مما تستخدمه كل محادثة.',
        bullets: [
          'في الأعمال الحساسة، تحقّق من مزوّد كل محادثة قبل الكتابة.',
          'إذا أردت نماذج محلية فقط، فتأكد أولًا من دعم Ollama في إصدارك.',
          'إذا أردت برنامجًا مفتوح المصدر، فاختر أحد البدائل أدناه.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      {
        label: 'الإجابة السريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'الحصول على Valo',
        anchor: 'get-it',
      },
      {
        label: 'نظرة سريعة',
        anchor: 'at-a-glance',
      },
      {
        label: 'ما هو Valo',
        anchor: 'what-is-valo',
      },
      {
        label: 'محلي أم سحابي',
        anchor: 'local-vs-cloud',
      },
      {
        label: 'البيانات والأسئلة المفتوحة',
        anchor: 'data',
      },
      {
        label: 'المجاني وPro والسعر',
        anchor: 'pricing',
      },
      {
        label: 'البدائل',
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
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Valo نافذة مكتبية واحدة لعدة مساعدين بالذكاء الاصطناعي.',
          },
          {
            type: 'plain-terms',
            text: 'تختار أي ذكاء اصطناعي يجيب في كل محادثة، ويبقى عملك مجموعًا في مكان واحد.',
          },
        ],
        items: [
          'نموذج التسعير: خطة مجانية واشتراك Pro اختياري.',
          'المسار المحلي: يذكر المطوّر Ollama، ولا تسمّي الصفحات التي راجعناها محرّكًا محليًا آخر.',
          'الحسابات: يحتاج المساعدون المستضافون إلى خطتك الخاصة أو رصيد API.',
          'المطوّر: يذكر تذييل الموقع شركة Charm Works Ltd المسجّلة في المملكة المتحدة.',
          'الشيفرة المصدرية: مغلقة وفق شروط الخدمة.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'الحصول على Valo',
        content: [
          '**يوفّر Valo ملفات تثبيت في صفحة التنزيل، لذا لا حاجة إلى بناء التطبيق من الشيفرة المصدرية.**',
        ],
        columns: [
          'العنصر',
          'الرابط',
        ],
        rows: [
          {
            'العنصر': 'macOS',
            'الرابط': '[Apple Silicon / Intel (.dmg)](https://getvalo.dev/download)',
          },
          {
            'العنصر': 'Windows',
            'الرابط': '[Setup (.exe)](https://getvalo.dev/download)',
          },
          {
            'العنصر': 'Linux',
            'الرابط': '[.deb / .rpm / AppImage](https://getvalo.dev/download)',
          },
          {
            'العنصر': 'الموقع',
            'الرابط': '[getvalo.dev](https://getvalo.dev/)',
          },
          {
            'العنصر': 'الخصوصية',
            'الرابط': '[سياسة خصوصية Valo](https://getvalo.dev/privacy)',
          },
        ],
        note: 'يقول المطوّر إن نسختي Mac وWindows موقّعتان من CHARM WORKS LTD. لا تذكر الصفحات التي راجعناها متطلبات للعتاد. تشير سياسة الخصوصية إلى خطوة إعداد لتثبيت Node.js، فقد يتطلب الإعداد الأول أكثر من ملف التثبيت.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'نظرة سريعة',
        columns: [
          'الخاصية',
          'Valo',
        ],
        rows: [
          {
            'الخاصية': 'الإصدار',
            Valo: '1.4.2 (آخر تحديث: 26 نوفمبر 2026)',
          },
          {
            'الخاصية': 'النوع',
            Valo: 'تطبيق مكتبي',
          },
          {
            'الخاصية': 'طريقة التشغيل',
            Valo: 'هجين: التطبيق محلي والذكاء مستضاف أو محلي',
          },
          {
            'الخاصية': 'النماذج المحلية',
            Valo: 'نعم عبر Ollama حسب المطوّر، انظر أدناه',
          },
          {
            'الخاصية': 'تحرير الشيفرة والطرفية',
            Valo: 'نعم حسب المطوّر',
          },
          {
            'الخاصية': 'دعم MCP',
            Valo: 'غير مذكور',
          },
          {
            'الخاصية': 'متطلبات RAM / VRAM',
            Valo: 'غير مذكورة',
          },
          {
            'الخاصية': 'الترخيص',
            Valo: 'مملوك ومغلق المصدر',
          },
        ],
      },
      whatIs: {
        id: 'what-is-valo',
        title: 'ما هو Valo',
        content: [
          '**هو واجهة لمساعدين تستخدمهم بالفعل، وليس نموذجًا بحد ذاته.** تقول شروط الخدمة إنه يتصل بمحرّكات الذكاء الاصطناعي المدعومة عبر أدوات سطر الأوامر الخاصة بها. يذكر المطوّر Claude وCodex وGemini وCursor وGLM والنماذج المحلية، مع الاختيار لكل محادثة.',
          'من الميزات التي يصفها المطوّر:',
        ],
        items: [
          'خريطة لملفات المشروع ومعاينة مباشرة ومحادثات محفوظة قابلة للبحث.',
          'أذونات لكل أداة: تحدد متى يجب على المساعد أن يسألك قبل التنفيذ.',
          'خزنة مشفّرة باسم Keyguard. يقول المطوّر إن المساعدين يستخدمون بيانات الاعتماد المحفوظة دون رؤية قيمها.',
          'إدخال صوتي، ويقول المطوّر إن التفريغ النصي يتم على جهازك.',
          'الوصول من الهاتف عبر Telegram، وتوليد الفيديو عبر Seedance، وValoLink لربط المساعدين بين الأجهزة.',
          'إضافات للمتصفح تتيح للمساعد القراءة والتصرف داخل متصفحك عندما تطلب منه ذلك.',
        ],
      },
      localCloud: {
        id: 'local-vs-cloud',
        title: 'محلي أم سحابي: ماذا يعمل وأين',
        content: [
          '**التخزين محلي حسب المطوّر، أما إجابة الذكاء الاصطناعي فلا تكون محلية إلا إذا عملت المحادثة بنموذج محلي.** تنص الشروط على أن بيانات المشاريع والمحادثات والملفات تبقى على جهازك ولا تُرفع إلى خوادم Valo. أما ما تكتبه إلى Claude أو Codex أو GLM أو أي مساعد مستضاف آخر فيعالجه ذلك المزوّد وفق شروطه.',
          '**تختلف الصفحات بشأن النماذج المحلية.** تقول صفحة الأسعار والأسئلة الشائعة إن النماذج المحلية تعمل عبر Ollama على حاسوبك. أما سياسة الخصوصية المؤرخة في 25 نوفمبر 2026 فتقول "when local-model support is enabled" (عند تفعيل دعم النماذج المحلية) وتضيف أن هذا الدعم قيد التطوير النشط. لم نشغّل الإصدار 1.4.2 في هذه المراجعة، فتأكد من أن Ollama يعمل لديك قبل الاعتماد عليه.',
        ],
      },
      dataSent: {
        id: 'data',
        title: 'ما يغادر حاسوبك والأسئلة المفتوحة',
        content: [
          '**تذكر سياسة الخصوصية أن اتصالات التطبيق الخاصة بالمطوّر هي إشعار عند التشغيل وفحص التحديثات والتحقق من الترخيص.** ووفق السياسة يتضمن الإشعار إصدار التطبيق والمنصة ومعمارية المعالج ومعرّف تثبيت عشوائيًا وأبعد خطوة إعداد بلغتَها ومسار الإعداد. ويشمل تفعيل Pro أيضًا بريدك الإلكتروني ومفتاح الترخيص ومعرّف الجهاز. وتقول السياسة إنه لا توجد تحليلات استخدام مستمرة داخل التطبيق. وتقول الأسئلة الشائعة إن أداة Claude لسطر الأوامر ترسل كذلك بيانات قياس خاصة بشركة Anthropic، ويمكن إيقافها بالإعداد CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1. وتوصف ملفات تعريف الارتباط الإعلانية للموقع بمعزل عن التطبيق المكتبي.',
          'هذه تصريحات المطوّر، ولم نفحص حركة الشبكة في هذه المراجعة. نقاط ينبغي التحقق منها:',
        ],
        items: [
          'تسمّي قائمة مزوّدي الذكاء الاصطناعي في سياسة الخصوصية Anthropic وOpenAI وZ.AI. ولم نجد فيها بندًا عن Gemini أو Cursor أو Seedance أو Telegram المذكورة في صفحات أخرى من Valo.',
          'تقول الأسئلة الشائعة إن تقارير الأخطاء تُرسل مشفّرة عبر Valo Mail بعد أن تراجعها. ولم نجد وصفًا لهذه الميزة في سياسة الخصوصية.',
          'توجّه الأسئلة الشائعة الاستفسارات إلى YouTube، بينما تحدد سياسة الخصوصية Discord لطلبات الخصوصية.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'الخطة المجانية وPro والسعر',
        content: [
          '**تشمل الخطة المجانية اختيار المساعدين وتحرير الشيفرة والطرفية والأذونات لكل أداة وKeyguard والصوت وحفظ المحادثات.** يبلغ سعر Valo Pro‏ 12.99 دولارًا أمريكيًا شهريًا (يعرض الموقع السعر بالدولار)، ويُحصَّل عبر Paddle، ويشمل حتى 3 أجهزة. ويضيف Context Control وValo Search وCross-Chat وScheduled Tasks ودعمًا ذا أولوية.',
          'يصف المطوّر فترة تجريبية لـ Pro مدتها 14 يومًا دون حساب أو بطاقة، ويبقى التطبيق صالحًا للاستخدام بعدها على الخطة المجانية. لا يشمل السعر الوصول إلى الذكاء الاصطناعي: للمساعدين المستضافين تحتاج إلى خطتك الخاصة أو رصيد API.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Valo مقابل البدائل',
        content: [
          'أربع مساحات عمل أخرى للوكلاء في الدليل هي المقارنة الطبيعية.',
        ],
        columns: [
          'التطبيق',
          'المنصات',
          'السعر والترخيص',
          'الفرق الأبرز',
        ],
        rows: [
          {
            'التطبيق': 'Valo',
            'المنصات': 'Windows, macOS, Linux',
            'السعر والترخيص': 'مجاني جزئيًا، مملوك',
            'الفرق الأبرز': 'خزنة وأذونات في الخطة المجانية',
          },
          {
            'التطبيق': '[Orca](/ar/power-local-llm/orca-review)',
            'المنصات': 'سطح المكتب وiOS وAndroid',
            'السعر والترخيص': 'مجاني، MIT',
            'الفرق الأبرز': 'مفتوح المصدر ولا يشغّل نماذج',
          },
          {
            'التطبيق': '[OpenWork](/ar/power-local-llm/openwork-review)',
            'المنصات': 'Windows, macOS, Linux',
            'السعر والترخيص': 'مجاني جزئيًا، MIT وأجزاء EE',
            'الفرق الأبرز': 'يتصل بـ Ollama',
          },
          {
            'التطبيق': '[OpenMausBot](/ar/power-local-llm/openmausbot-review)',
            'المنصات': 'Windows, macOS, Linux',
            'السعر والترخيص': 'تطبيق مجاني، نواة Apache 2.0',
            'الفرق الأبرز': 'نماذج محلية عبر نقاط وصول متوافقة',
          },
          {
            'التطبيق': '[MyAgents](/ar/power-local-llm/myagents-review)',
            'المنصات': 'Windows, macOS',
            'السعر والترخيص': 'مجاني، AGPL-3.0',
            'الفرق الأبرز': 'لا مسار محليًا موثقًا',
          },
        ],
        note: 'معلومات التطبيقات الأخرى مأخوذة من مداخل دليلنا وقد تتغير، فتحقّق من كل مشروع.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى حساب Valo للبدء؟',
            a: 'لا في الخطة المجانية حسب المطوّر. أما شراء Pro فيتطلب بريدًا إلكترونيًا ومفتاح ترخيص.',
          },
          {
            q: 'هل يشمل Valo استخدام النماذج؟',
            a: 'لا. يقول المطوّر إنه لا يعيد بيع الوصول إلى الذكاء الاصطناعي، لذا تبقى حدود كل مزوّد وفواتيره سارية.',
          },
          {
            q: 'هل يمكنني نقل عملي إلى حاسوب آخر؟',
            a: 'يقول المطوّر إنك تنسخ مجلد بيانات Valo وتوجّه التطبيق إليه، ثم تسجّل الدخول إلى المزوّدين من جديد وتفتح الخزنة.',
          },
          {
            q: 'هل يمكنني التحقق من وجهات اتصال التطبيق؟',
            a: 'تقترح الأسئلة الشائعة استخدام مراقب للشبكة وتسرد النطاقات المتوقعة. ويظل الفحص على جهازك هو الطريقة المباشرة لاختبار هذه التصريحات.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          'يبدو Valo جديرًا بالتجربة إذا كنت تتنقل بين عدة مساعدين للبرمجة وتريد المحادثات والأذونات وبيانات الاعتماد في مكان واحد. وتتيح لك الخطة المجانية الحكم قبل الدفع.',
          'توخَّ الحذر إذا كانت الخصوصية دافعك: الشيفرة مغلقة، والمساعدون المستضافون يتلقون ما تكتبه، وصفحات المطوّر لا تتفق على مدى جاهزية دعم النماذج المحلية. وإذا أردت إعدادًا محليًا خالصًا فتحقّق من هذا المسار أولًا أو قارن البدائل.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Valo](https://getvalo.dev/) — ملخص المنتج وبيان الشركة في التذييل.',
          '[صفحة التنزيل](https://getvalo.dev/download) — الإصدار وتاريخه وملفات التثبيت.',
          '[صفحة الميزات](https://getvalo.dev/features) — وصف الميزات.',
          '[صفحة الأسعار](https://getvalo.dev/pricing) — توزيع المجاني وPro والسعر والتجربة.',
          '[الأسئلة الشائعة](https://getvalo.dev/faq) — الاتصالات والنماذج المحلية وتقارير الأخطاء.',
          '[سياسة الخصوصية](https://getvalo.dev/privacy) — معالجة البيانات والمزوّدون.',
          '[شروط الخدمة](https://getvalo.dev/terms) — الترخيص وبيان المصدر المغلق.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Orca](/ar/power-local-llm/orca-review) — تطبيق مفتوح المصدر لتشغيل عدة وكلاء برمجة.',
          '[مراجعة OpenWork](/ar/power-local-llm/openwork-review) — تطبيق وكلاء مكتبي يمكنه استخدام Ollama.',
          '[مراجعة OpenMausBot](/ar/power-local-llm/openmausbot-review) — تطبيق محادثة مكتبي يشغّل أدوات الوكلاء.',
          '[الدليل الكامل لبرامج LLM المحلية](/ar/directory) — مزيد من أدوات الذكاء الاصطناعي المحلي.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-28',
    dateModified: '2026-11-28',
    next_refresh_due: '2027-05-28',
    theme: 'Overview & Reference',
    heroImage: '/images/valo-review-hero-ko.webp',
    title: 'Valo 리뷰: Claude, Codex, 로컬 AI를 한곳에 모은 데스크톱 작업 공간',
    seoTitle: 'Valo 리뷰: Claude와 로컬 AI 데스크톱 작업 공간',
    intro: 'Valo는 호스팅 AI 어시스턴트와 로컬 모델을 하나의 작업 공간에 모은 데스크톱 앱입니다. 이 리뷰는 컴퓨터에 남는 것과 제공업체로 전송되는 것을 구분하고, 개발사 페이지끼리 설명이 어긋나는 부분을 짚습니다.',
    metaDescription: 'Valo 리뷰: Claude, Codex, 로컬 모델을 묶는 비공개 소스 데스크톱 작업 공간입니다. 하이브리드 구조, 무료와 Pro, 확인할 점을 정리했습니다. 직접 테스트하지 않았습니다.',
    twitterDescription: 'Valo 리뷰: 호스팅 어시스턴트와 로컬 모델용 데스크톱 작업 공간. 로컬에 남는 것, 전송되는 것, 불분명한 점을 정리합니다.',
    audience: '코드나 프로젝트 작업에 여러 AI 어시스턴트를 쓰며 하나의 데스크톱 앱으로 모으려는 사용자.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Valo review',
    targetKeywords: [
      'Valo 리뷰',
      'getvalo',
      'Valo AI 작업 공간',
      'Claude Code 데스크톱 앱',
      'Codex 데스크톱 앱',
      '로컬 AI 데스크톱',
    ],
    current_hardware_mentioned: [
      'Mac',
    ],
    leadAnswerBlock: '**Valo는 Windows, macOS, Linux용 비공개 소스 데스크톱 작업 공간이며 하이브리드 방식입니다. 개발사에 따르면 프로젝트와 채팅은 컴퓨터에 저장되고, 호스팅 어시스턴트로 보내는 요청은 각 제공업체로 전송됩니다.** 이 리뷰는 2026년 11월 26일 출시된 버전 1.4.2를 다루며, 직접 테스트가 아닌 공개 페이지를 바탕으로 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Valo는 로컬 AI 앱입니까?',
        answer: '일부만 그렇습니다. 로컬 모델로도 쓸 수 있지만 주 용도는 호스팅 어시스턴트이므로, 각 채팅이 무엇을 사용하는지 확인하십시오.',
        bullets: [
          '민감한 작업은 입력하기 전에 채팅별 제공업체를 확인하십시오.',
          '로컬 모델만 원한다면 설치한 버전에서 Ollama 지원부터 확인하십시오.',
          '오픈 소스를 원한다면 아래 대안 중에서 고르십시오.',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Valo 받기',
        anchor: 'get-it',
      },
      {
        label: '한눈에 보기',
        anchor: 'at-a-glance',
      },
      {
        label: 'Valo란',
        anchor: 'what-is-valo',
      },
      {
        label: '로컬과 클라우드',
        anchor: 'local-vs-cloud',
      },
      {
        label: '전송 데이터와 남은 의문',
        anchor: 'data',
      },
      {
        label: '무료, Pro, 가격',
        anchor: 'pricing',
      },
      {
        label: '대안 앱',
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
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Valo는 여러 AI 어시스턴트를 위한 하나의 데스크톱 창입니다.',
          },
          {
            type: 'plain-terms',
            text: '채팅마다 어떤 AI가 답할지 고르면, 작업은 앱 한곳에 모입니다.',
          },
        ],
        items: [
          '요금 방식: 무료 플랜과 선택형 Pro 구독.',
          '로컬 경로: 개발사는 Ollama를 언급합니다. 확인한 페이지에는 다른 로컬 런타임이 나오지 않습니다.',
          '계정: 호스팅 어시스턴트는 본인의 요금제나 API 크레딧이 필요합니다.',
          '개발사: 웹사이트 하단에는 영국에 등록된 Charm Works Ltd가 표기되어 있습니다.',
          '소스 코드: 이용약관에 따르면 비공개입니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Valo 받기',
        content: [
          '**Valo는 다운로드 페이지에서 설치 파일을 제공하므로 앱을 소스에서 빌드할 필요가 없습니다.**',
        ],
        columns: [
          '항목',
          '링크',
        ],
        rows: [
          {
            '항목': 'macOS',
            '링크': '[Apple Silicon / Intel (.dmg)](https://getvalo.dev/download)',
          },
          {
            '항목': 'Windows',
            '링크': '[Setup (.exe)](https://getvalo.dev/download)',
          },
          {
            '항목': 'Linux',
            '링크': '[.deb / .rpm / AppImage](https://getvalo.dev/download)',
          },
          {
            '항목': '웹사이트',
            '링크': '[getvalo.dev](https://getvalo.dev/)',
          },
          {
            '항목': '개인정보',
            '링크': '[Valo 개인정보처리방침](https://getvalo.dev/privacy)',
          },
        ],
        note: '개발사에 따르면 Mac과 Windows 빌드는 CHARM WORKS LTD가 서명했습니다. 확인한 페이지에는 하드웨어 요구 사항이 없습니다. 개인정보처리방침에 Node.js를 설치하는 설정 단계가 언급되므로, 첫 설정에는 설치 파일 외의 작업이 필요할 수 있습니다.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: '한눈에 보기',
        columns: [
          '항목',
          'Valo',
        ],
        rows: [
          {
            '항목': '버전',
            Valo: '1.4.2 (마지막 업데이트: 2026년 11월 26일)',
          },
          {
            '항목': '유형',
            Valo: '데스크톱 앱',
          },
          {
            '항목': '실행 방식',
            Valo: '하이브리드: 앱은 로컬, AI는 호스팅 또는 로컬',
          },
          {
            '항목': '로컬 LLM',
            Valo: '개발사에 따르면 Ollama로 지원, 아래 참고',
          },
          {
            '항목': '코드 편집과 터미널',
            Valo: '지원 (개발사 설명)',
          },
          {
            '항목': 'MCP 지원',
            Valo: '명시되지 않음',
          },
          {
            '항목': 'RAM/VRAM 요구량',
            Valo: '명시되지 않음',
          },
          {
            '항목': '라이선스',
            Valo: '독점, 비공개 소스',
          },
        ],
      },
      whatIs: {
        id: 'what-is-valo',
        title: 'Valo란',
        content: [
          '**Valo는 자체 모델이 아니라 이미 쓰는 어시스턴트를 위한 인터페이스입니다.** 이용약관에 따르면 지원하는 AI 엔진에 명령줄 도구를 통해 연결합니다. 개발사는 Claude, Codex, Gemini, Cursor, GLM, 로컬 모델을 언급하며 채팅별로 선택할 수 있다고 설명합니다.',
          '개발사가 설명하는 주요 기능은 다음과 같습니다.',
        ],
        items: [
          '프로젝트 파일 맵, 실시간 미리보기, 저장되고 검색되는 채팅.',
          '도구별 권한: 어시스턴트가 실행 전에 물어야 할 범위를 직접 정합니다.',
          '암호화 보관함 Keyguard. 개발사에 따르면 어시스턴트는 값을 보지 않고 저장된 자격 증명을 사용합니다.',
          '음성 입력. 개발사에 따르면 전사는 사용자 컴퓨터에서 이루어집니다.',
          'Telegram을 통한 휴대폰 접속, Seedance 영상 생성, 여러 컴퓨터의 어시스턴트를 연결하는 ValoLink.',
          '요청하면 어시스턴트가 브라우저를 읽고 조작할 수 있는 브라우저 확장 기능.',
        ],
      },
      localCloud: {
        id: 'local-vs-cloud',
        title: '로컬과 클라우드: 어디서 무엇이 실행되나',
        content: [
          '**개발사 설명상 저장은 로컬이며, AI 답변은 채팅이 로컬 모델로 실행될 때만 로컬입니다.** 이용약관은 프로젝트 데이터, 대화, 파일이 사용자 컴퓨터에 남고 Valo 서버로 업로드되지 않는다고 밝힙니다. Claude, Codex, GLM 등 호스팅 어시스턴트에 입력한 내용은 해당 제공업체가 자체 약관에 따라 처리합니다.',
          '**로컬 모델에 대해서는 페이지마다 설명이 다릅니다.** 가격 페이지와 FAQ는 로컬 모델이 Ollama를 통해 사용자 컴퓨터에서 실행된다고 합니다. 2026년 11월 25일자 개인정보처리방침은 "when local-model support is enabled"(로컬 모델 지원이 활성화되면)라고 쓰고, 이 지원이 개발 중이라고 덧붙입니다. 이 리뷰에서는 버전 1.4.2를 실행하지 않았으므로, 의존하기 전에 Ollama가 실제로 작동하는지 확인하십시오.',
        ],
      },
      dataSent: {
        id: 'data',
        title: '컴퓨터 밖으로 나가는 데이터와 남은 의문',
        content: [
          '**개인정보처리방침이 앱에서 개발사로 가는 자체 통신으로 드는 것은 실행 시 신호, 업데이트 확인, 라이선스 확인입니다.** 방침에 따르면 실행 신호에는 앱 버전, 플랫폼, CPU 아키텍처, 임의 설치 ID, 가장 멀리 도달한 설정 단계, 설정 경로가 담깁니다. Pro를 활성화하면 이메일 주소, 라이선스 키, 기기 식별자도 처리됩니다. 앱 안의 지속적인 사용 분석은 없다고 밝힙니다. FAQ에 따르면 Claude 명령줄 도구는 Anthropic 자체 원격 측정 데이터도 보내며, CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1 설정으로 끌 수 있습니다. 웹사이트 광고 쿠키는 데스크톱 앱과 별도로 설명됩니다.',
          '이는 개발사의 설명이며, 이 리뷰에서는 네트워크 통신을 검사하지 않았습니다. 확인할 점은 다음과 같습니다.',
        ],
        items: [
          '개인정보처리방침의 AI 제공업체 목록에는 Anthropic, OpenAI, Z.AI가 있습니다. 다른 Valo 페이지에 나오는 Gemini, Cursor, Seedance, Telegram 항목은 찾지 못했습니다.',
          'FAQ는 버그 보고가 사용자의 검토 후 Valo Mail로 암호화되어 전송된다고 합니다. 개인정보처리방침에서는 이 기능에 대한 설명을 찾지 못했습니다.',
          'FAQ는 질문 창구로 YouTube를 안내하고, 개인정보처리방침은 개인정보 요청 창구로 Discord를 안내합니다.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '무료 플랜, Pro, 가격',
        content: [
          '**무료 플랜에는 어시스턴트 선택, 코드 편집과 터미널, 도구별 권한, Keyguard, 음성, 채팅 저장이 포함됩니다.** Valo Pro는 월 12.99달러(웹사이트는 미국 달러로 표시)이며 Paddle로 결제하고 최대 3대에서 쓸 수 있습니다. Pro에는 Context Control, Valo Search, Cross-Chat, Scheduled Tasks, 우선 지원이 추가됩니다.',
          '개발사는 계정이나 카드 없이 14일간 Pro를 체험할 수 있고 이후에도 무료 플랜으로 계속 사용할 수 있다고 설명합니다. 가격에 AI 이용권은 포함되지 않으므로, 호스팅 어시스턴트에는 본인의 요금제나 API 크레딧이 필요합니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Valo와 대안 비교',
        content: [
          '디렉터리에 있는 다른 에이전트 작업 공간 네 가지가 자연스러운 비교 대상입니다.',
        ],
        columns: [
          '앱',
          '플랫폼',
          '가격과 라이선스',
          '주요 차이',
        ],
        rows: [
          {
            '앱': 'Valo',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '부분 유료, 독점',
            '주요 차이': '무료 플랜에 보관함과 권한 제공',
          },
          {
            '앱': '[Orca](/ko/power-local-llm/orca-review)',
            '플랫폼': '데스크톱, iOS, Android',
            '가격과 라이선스': '무료, MIT',
            '주요 차이': '오픈 소스, 모델은 직접 실행 안 함',
          },
          {
            '앱': '[OpenWork](/ko/power-local-llm/openwork-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '부분 유료, MIT + EE 부분',
            '주요 차이': 'Ollama에 연결',
          },
          {
            '앱': '[OpenMausBot](/ko/power-local-llm/openmausbot-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격과 라이선스': '앱 무료, 핵심은 Apache 2.0',
            '주요 차이': '호환 엔드포인트로 로컬 모델 사용',
          },
          {
            '앱': '[MyAgents](/ko/power-local-llm/myagents-review)',
            '플랫폼': 'Windows, macOS',
            '가격과 라이선스': '무료, AGPL-3.0',
            '주요 차이': '로컬 모델 경로 문서 없음',
          },
        ],
        note: '다른 앱의 정보는 이 사이트 디렉터리 항목에 근거하며 바뀔 수 있으니 각 프로젝트에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '시작하려면 Valo 계정이 필요합니까?',
            a: '개발사에 따르면 무료 플랜에는 필요 없습니다. Pro를 구매하면 이메일 주소와 라이선스 키가 필요합니다.',
          },
          {
            q: '모델 이용료가 포함됩니까?',
            a: '아니요. 개발사는 AI 접근권을 재판매하지 않는다고 하므로 각 제공업체의 한도와 요금은 그대로 적용됩니다.',
          },
          {
            q: '작업을 다른 컴퓨터로 옮길 수 있습니까?',
            a: '개발사에 따르면 Valo 데이터 폴더를 복사해 앱에서 지정하고, 제공업체에 다시 로그인한 뒤 보관함을 잠금 해제하면 됩니다.',
          },
          {
            q: '앱이 어디에 연결되는지 확인할 수 있습니까?',
            a: 'FAQ는 네트워크 모니터 사용을 권하고 예상 도메인을 안내합니다. 본인 컴퓨터에서 확인하는 것이 설명을 검증하는 직접적인 방법입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '여러 코딩 어시스턴트를 오가며 채팅, 권한, 자격 증명을 한곳에 두고 싶다면 Valo는 써 볼 만해 보입니다. 결제 전에 무료 플랜으로 판단할 수 있습니다.',
          '개인정보 보호가 선택 이유라면 주의하십시오. 소스는 비공개이고, 호스팅 어시스턴트는 입력 내용을 받으며, 로컬 모델 지원 수준에 대한 개발사 페이지의 설명이 서로 다릅니다. 완전한 로컬 구성이 필요하다면 그 경로를 먼저 확인하거나 대안을 비교하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Valo 웹사이트](https://getvalo.dev/) — 제품 개요와 하단의 회사 표기.',
          '[다운로드 페이지](https://getvalo.dev/download) — 버전, 출시일, 설치 파일.',
          '[기능 페이지](https://getvalo.dev/features) — 기능 설명.',
          '[가격 페이지](https://getvalo.dev/pricing) — 무료와 Pro 구분, 가격, 체험.',
          '[FAQ](https://getvalo.dev/faq) — 연결 대상, 로컬 모델, 버그 보고.',
          '[개인정보처리방침](https://getvalo.dev/privacy) — 데이터 처리와 제공업체.',
          '[이용약관](https://getvalo.dev/terms) — 라이선스와 비공개 소스 명시.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Orca 리뷰](/ko/power-local-llm/orca-review) — 여러 코딩 에이전트를 다루는 오픈 소스 앱.',
          '[OpenWork 리뷰](/ko/power-local-llm/openwork-review) — Ollama를 쓸 수 있는 데스크톱 에이전트 앱.',
          '[OpenMausBot 리뷰](/ko/power-local-llm/openmausbot-review) — 에이전트 도구를 구동하는 데스크톱 채팅 앱.',
          '[로컬 LLM 소프트웨어 전체 디렉터리](/ko/directory) — 더 많은 로컬 AI 도구.',
        ],
      },
    },
  },
}
