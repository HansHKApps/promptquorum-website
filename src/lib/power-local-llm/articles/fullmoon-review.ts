// fullmoon Review: Free Offline AI Chat for iPhone, iPad and Mac
// Slug: fullmoon-review
// Companion to: pocketpal-ai-review, private-mind-review, mlc-chat-review, best-local-llm-apps-iphone-2026, local-llm-chat-assistants-compared
// Sources: fullmoon.app (feature list, model sizes, TestFlight link), the App Store listing (apps.apple.com/us/app/id6727014156, iTunes lookup API,
// six storefronts), fullmoon.app/privacy (effective 2024-12-23) and github.com/mainframecomputer/fullmoon-ios (README, MIT LICENSE, releases, commits,
// Models.swift), all checked 2026-10-30 — no hands-on testing. Last upstream update 2025-05-05 (last push), so the stale warning is ON.
// Free everywhere checked: no prices to localize.

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
    heroImage: '/images/fullmoon-review-hero-en.webp',
    title: 'fullmoon Review: Free Offline AI Chat for iPhone, iPad and Mac',
    seoTitle: 'fullmoon Review: Free Offline AI Chat for iPhone and Mac',
    intro:
      'fullmoon is a free chat app from [Mainframe Computer, Inc.](https://mainframe.inc) that runs small language models on an iPhone, iPad or Mac through Apple\'s MLX framework and says it works fully offline. Its source code is published under the MIT license on [GitHub](https://github.com/mainframecomputer/fullmoon-ios). This review is based on the maker\'s website, the App Store listing, the privacy policy and the repository, checked on 30 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'fullmoon review: free, MIT-licensed offline AI chat for iPhone, iPad and Mac on Apple MLX. No release since January 2025, so check before relying on it.',
    twitterDescription:
      'fullmoon review: a free offline AI chat app for Apple devices with no release since early 2025. Models, privacy and what the sources leave unconfirmed.',
    audience:
      'iPhone, iPad and Mac users who want a simple offline chat app and need to know what the sources confirm, what the maker only claims and how long ago it was last updated.',
    readTime: '5 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'fullmoon review',
    targetKeywords: [
      'fullmoon review',
      'fullmoon app ios',
      'offline ai chat iphone',
      'local llm app iphone mlx',
      'open source ai chat ios',
      'fullmoon local intelligence',
    ],
    current_models_mentioned: ['Llama 3.2', 'DeepSeek-R1-Distill-Qwen', 'Qwen3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple silicon'],
    leadAnswerBlock:
      '**Warning: fullmoon has had no release since 28 January 2025 (version 1.2.0 on the App Store) and no code change since 5 May 2025, so it may be unmaintained — check that it works on your device before relying on it.** It is a free chat app by Mainframe Computer, Inc. that runs small language models on an iPhone, iPad or Mac. Every statement here comes from the maker\'s website, the App Store listing, the privacy policy and the public repository.',
    quickAnswerTop: {
      en: {
        question: 'Does fullmoon really run AI chat offline on an iPhone?',
        answer:
          'Per the maker, yes: the models run on the device with Apple\'s MLX and the app works without an internet connection, with chat history stored locally. PromptQuorum has not tested this.',
        bullets: [
          'You choose between small models such as Llama 3.2 and DeepSeek-R1 distills.',
          'The theme, fonts and system prompt can be changed.',
          'A Shortcuts action passes a local model\'s output to other actions.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is fullmoon?', anchor: 'what-is-fullmoon' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Data Flow and Privacy', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Competitors and Alternatives', anchor: 'vs-alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'fullmoon is a free, MIT-licensed iPhone, iPad and Mac app that chats with small language models running on the device through Apple\'s MLX.',
          },
          {
            type: 'plain-terms',
            text: 'You pick one of a few small models and chat with it like any assistant, with the work done on your own device instead of a cloud service.',
          },
        ],
        items: [
          'Maintenance: the repository\'s last change added Qwen3 models, which the 1.2.0 release notes and the website do not list.',
          'License: MIT per the LICENSE file; the website itself says only "open source".',
          'Cost: free to download.',
          'Maker: Mainframe Computer, Inc.; the App Store listing is English only.',
          'Devices: iOS 17.6 or later; the website also names visionOS.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the website, the App Store listing, the privacy policy and the public repository, checked on 30 October 2026. PromptQuorum has not installed or benchmarked the app, so answer quality and speed are not assessed.',
          },
        ],
      },
      overview: {
        id: 'what-is-fullmoon',
        title: 'What Is fullmoon?',
        content: [
          '**fullmoon is a chat app for talking to language models that run on your own Apple device instead of on a server.** The App Store lists it as "fullmoon: local intelligence" in Utilities from the seller Mainframe Computer, Inc., first released on 13 January 2025, and the repository describes it as an app to "chat with private and local large language models".',
          'The repository credits Apple\'s MLX Swift for the inference, and the website says the app is optimized for Apple silicon. The code repository was created in October 2024.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**fullmoon is a free App Store download for iPhone, iPad and Mac; the website names no Android or Windows version.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'iPhone, iPad, Mac', 'How to get it': '[fullmoon on the App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156), free' },
          { 'Option': 'Newer builds', 'How to get it': '[TestFlight](https://testflight.apple.com/join/UdTQvRpf), for newer builds' },
          { 'Option': 'Website', 'How to get it': '[fullmoon.app](https://fullmoon.app)' },
          { 'Option': 'Privacy policy', 'How to get it': '[fullmoon.app/privacy](https://fullmoon.app/privacy)' },
          { 'Option': 'Source code', 'How to get it': '[GitHub](https://github.com/mainframecomputer/fullmoon-ios), MIT license' },
        ],
        note: 'Version reviewed: 1.2.0, released on 28 January 2025 per the App Store; the app is 31.6 MB before any model download, needs iOS 17.6 or later, is rated 17+ and is listed in English only. GitHub shows releases up to 1.2.3 dated 27 January 2025, a day before the App Store date, so the two version numbers do not line up and this review uses the App Store version.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the website, the App Store description or the repository; none has been independently tested.**',
        ],
        items: [
          '**On-device chat.** The models run on the device and the app works without an internet connection, per the website; chat history is stored locally, per the README.',
          '**Model list.** The website names Llama 3.2 1B (0.7 GB) and 3B (1.8 GB) and DeepSeek-R1-Distill-Qwen-1.5B in 4-bit (1.0 GB) and 8-bit (1.9 GB). The repository\'s main branch also lists Qwen3 4B and 8B in 4-bit; whether the 1.2.0 App Store build includes them is not stated.',
          '**Where models come from.** The sources do not say how the models are downloaded; the model IDs in the code point to the mlx-community collection on Hugging Face.',
          '**Personalization.** The theme, fonts and system prompt can be changed in the app.',
          '**Shortcuts.** An action lets you chat with a local model or hand its output to other Shortcuts actions.',
        ],
        note: 'The 1.2.0 release notes mention only added support for the two DeepSeek-R1-Distill-Qwen-1.5B models; the DeepSeek-R1 distills are reasoning models.',
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Privacy',
        content: [
          '**The privacy policy, effective 23 December 2024, says "We do not collect any information from you" and "We do not share your personal information with third parties".** The website calls the app private and says it runs models locally; the README says chat history is saved locally.',
          'The same policy is not consistent, though: it also lists what "the information we collect" is used for, including to "understand and analyze how you use fullmoon", and ends with consent to "our collection, use, and sharing of your information". It does not say what, if anything, is collected, and it does not mention on-device processing at all.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s declarations, not audit results. The source code is public, but PromptQuorum has not read it or inspected the app\'s network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Apple-device owners who want the simplest possible offline chat** and are happy with small models.',
          '**Developers and tinkerers** who want an MIT-licensed Swift app built on MLX Swift to study or fork.',
          '**Anyone comparing offline chat apps for iPhone** who values open source over frequent updates.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Maintenance status.** The warning at the top of the page applies; PromptQuorum found no statement from the maker on whether development continues.',
          '**Answer quality and speed.** Not tested; the sources give model sizes but no RAM needs or tokens per second, so which iPhones run which model is unknown.',
          '**Model licences.** The models carry their own licences (the website links the Meta Llama and DeepSeek model pages); PromptQuorum has not reviewed them.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source chat client with its own model library for iPhone and Android' },
          { 'App': '[Private Mind](/power-local-llm/private-mind-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / MIT', 'Key difference': 'Adds on-device document Q&A and benchmarks; runs on ExecuTorch rather than MLX' },
          { 'App': '[MLC Chat](/power-local-llm/mlc-chat-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / Apache 2.0', 'Key difference': 'Open-source chat app built on MLC LLM; its last update was in September 2024' },
        ],
        note: 'fullmoon is the only one of the four without an Android version; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I try newer builds than the App Store version?',
            a: 'The website offers a TestFlight link for the latest features and models, which may include models the App Store build lacks. PromptQuorum did not join it.',
          },
          {
            q: 'Does fullmoon work on a Mac?',
            a: 'The website lists macOS and the App Store listing shows Mac compatibility. PromptQuorum did not check whether it is a native Mac app or the iPad app running on Apple silicon.',
          },
          {
            q: 'Does it cost anything outside the United States?',
            a: 'On the App Store storefronts checked on 30 October 2026 (Germany, France, Spain, Japan, South Korea and Brazil) it was free and showed the same version, 1.2.0.',
          },
          {
            q: 'Can I load my own models?',
            a: 'The sources describe a fixed in-app model list and do not mention importing other models.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'fullmoon is a clean, free and open-source way to chat with small models offline on an iPhone, iPad or Mac, with useful touches such as a Shortcuts action and an editable system prompt. Against that, it has had no release since January 2025, its privacy policy contradicts itself, the model list is short and the quality and speed of its answers could not be checked here. It suits people who value a simple, MIT-licensed app and accept that it may no longer be maintained; anyone who needs more than basic chat, or regular updates, should compare the alternatives above first.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[fullmoon website](https://fullmoon.app) — feature list, model sizes, platforms and download links, checked 30 October 2026.',
          '[fullmoon on the App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156) — version, release date, size, requirements and storefront prices, checked 30 October 2026.',
          '[fullmoon privacy policy](https://fullmoon.app/privacy) — effective 23 December 2024.',
          '[fullmoon-ios on GitHub](https://github.com/mainframecomputer/fullmoon-ios) — README, MIT license file, releases and commit history, checked 30 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — an open-source offline chat app with on-device document Q&A.',
          '[MLC Chat Review](/power-local-llm/mlc-chat-review) — an open-source on-device chat app built on MLC LLM.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
          '[Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison this review belongs to.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'fullmoon Review: Free Offline AI Chat for iPhone, iPad and Mac',
      description:
        'fullmoon review: a free, MIT-licensed chat app that runs small language models offline on iPhone, iPad and Mac with Apple MLX. Version, privacy, models and the maintenance warning.',
      url: 'https://www.promptquorum.com/power-local-llm/fullmoon-review',
      inLanguage: 'en',
      datePublished: '2026-10-30',
      dateModified: '2026-10-30',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'iPhone, iPad and Mac users evaluating an offline AI chat app' },
      about: [
        { '@type': 'Thing', name: 'fullmoon' },
        { '@type': 'Thing', name: 'Offline AI chat' },
        { '@type': 'Thing', name: 'Apple MLX' },
        { '@type': 'Thing', name: 'iPhone' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/fullmoon-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'fullmoon Review', item: 'https://www.promptquorum.com/power-local-llm/fullmoon-review' },
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
    heroImage: '/images/fullmoon-review-hero-de.webp',
    title: 'fullmoon-Rezension: Kostenloser Offline-KI-Chat für iPhone, iPad und Mac',
    seoTitle: 'fullmoon-Rezension: Offline-KI-Chat für iPhone und Mac',
    intro:
      'fullmoon ist eine kostenlose Chat-App von [Mainframe Computer, Inc.](https://mainframe.inc), die kleine Sprachmodelle über Apples MLX-Framework auf dem iPhone, iPad oder Mac ausführt und laut Hersteller vollständig offline funktioniert. Der Quellcode steht unter der MIT-Lizenz auf [GitHub](https://github.com/mainframecomputer/fullmoon-ios). Diese Rezension stützt sich auf die Website des Herstellers, den App-Store-Eintrag, die Datenschutzerklärung und das Repository, geprüft am 30. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'fullmoon-Rezension: kostenloser Offline-KI-Chat (MIT) für iPhone, iPad und Mac mit Apple MLX. Seit Januar 2025 kein Release – vorher prüfen.',
    twitterDescription:
      'fullmoon-Rezension: kostenlose Offline-KI-Chat-App für Apple-Geräte, seit Anfang 2025 ohne Release. Modelle, Datenschutz und was die Quellen offenlassen.',
    audience:
      'iPhone-, iPad- und Mac-Nutzer, die eine einfache Offline-Chat-App suchen und wissen möchten, was die Quellen bestätigen, was der Hersteller nur behauptet und wie lange das letzte Update zurückliegt.',
    readTime: '5 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'fullmoon review',
    targetKeywords: [
      'fullmoon Rezension',
      'fullmoon App iOS',
      'Offline-KI-Chat iPhone',
      'lokale LLM-App iPhone MLX',
      'Open-Source-KI-Chat iOS',
      'fullmoon local intelligence',
    ],
    current_models_mentioned: ['Llama 3.2', 'DeepSeek-R1-Distill-Qwen', 'Qwen3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple silicon'],
    leadAnswerBlock:
      '**Warnung: fullmoon hat seit dem 28. Januar 2025 (Version 1.2.0 im App Store) kein Release und seit dem 5. Mai 2025 keine Codeänderung mehr erhalten und wird möglicherweise nicht mehr gepflegt – prüfen Sie vor der Nutzung, ob die App auf Ihrem Gerät funktioniert.** Es ist eine kostenlose Chat-App von Mainframe Computer, Inc., die kleine Sprachmodelle auf dem iPhone, iPad oder Mac ausführt. Alle Angaben stammen von der Website des Herstellers, aus dem App-Store-Eintrag, der Datenschutzerklärung und dem öffentlichen Repository.',
    quickAnswerTop: {
      de: {
        question: 'Läuft der KI-Chat von fullmoon auf dem iPhone wirklich offline?',
        answer:
          'Laut Hersteller ja: Die Modelle laufen mit Apples MLX auf dem Gerät, die App funktioniert ohne Internetverbindung und der Chatverlauf wird lokal gespeichert. PromptQuorum hat das nicht getestet.',
        bullets: [
          'Sie wählen zwischen kleinen Modellen wie Llama 3.2 und DeepSeek-R1-Destillaten.',
          'Design, Schriftarten und Systemprompt lassen sich anpassen.',
          'Eine Kurzbefehle-Aktion reicht die Ausgabe eines lokalen Modells an andere Aktionen weiter.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist fullmoon?', anchor: 'what-is-fullmoon' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenfluss und Datenschutz', anchor: 'privacy' },
      { label: 'Für wen sich die App eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Wettbewerber und Alternativen', anchor: 'vs-alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'fullmoon ist eine kostenlose iPhone-, iPad- und Mac-App unter MIT-Lizenz, die mit kleinen, über Apples MLX direkt auf dem Gerät laufenden Sprachmodellen chattet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie wählen eines von wenigen kleinen Modellen und chatten damit wie mit jedem Assistenten – gerechnet wird auf Ihrem eigenen Gerät statt bei einem Cloud-Dienst.',
          },
        ],
        items: [
          'Pflege: Die letzte Änderung im Repository hat Qwen3-Modelle ergänzt, die weder die Versionshinweise zu 1.2.0 noch die Website nennen.',
          'Lizenz: MIT laut LICENSE-Datei; die Website selbst sagt nur „Open Source“.',
          'Kosten: kostenlos herunterladbar.',
          'Hersteller: Mainframe Computer, Inc.; der App-Store-Eintrag ist nur auf Englisch.',
          'Geräte: iOS 17.6 oder neuer; die Website nennt außerdem visionOS.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Website, den App-Store-Eintrag, die Datenschutzerklärung und das öffentliche Repository, geprüft am 30. Oktober 2026. PromptQuorum hat die App weder installiert noch gemessen; Antwortqualität und Geschwindigkeit werden daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-fullmoon',
        title: 'Was ist fullmoon?',
        content: [
          '**fullmoon ist eine Chat-App für Sprachmodelle, die auf Ihrem eigenen Apple-Gerät statt auf einem Server laufen.** Der App Store führt sie als „fullmoon: local intelligence“ in der Kategorie Dienstprogramme vom Anbieter Mainframe Computer, Inc.; erstmals erschien sie am 13. Januar 2025, und das Repository beschreibt sie als App zum Chatten mit „privaten und lokalen großen Sprachmodellen“.',
          'Laut Repository übernimmt Apples MLX Swift die Inferenz, und die Website nennt die App für Apple Silicon optimiert. Das Code-Repository wurde im Oktober 2024 angelegt.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**fullmoon ist ein kostenloser App-Store-Download für iPhone, iPad und Mac; die Website nennt keine Android- oder Windows-Version.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          { 'Option': 'iPhone, iPad, Mac', 'Bezug': '[fullmoon im App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156), kostenlos' },
          { 'Option': 'Neuere Builds', 'Bezug': '[TestFlight](https://testflight.apple.com/join/UdTQvRpf), für neuere Builds' },
          { 'Option': 'Website', 'Bezug': '[fullmoon.app](https://fullmoon.app)' },
          { 'Option': 'Datenschutzerklärung', 'Bezug': '[fullmoon.app/privacy](https://fullmoon.app/privacy)' },
          { 'Option': 'Quellcode', 'Bezug': '[GitHub](https://github.com/mainframecomputer/fullmoon-ios), MIT-Lizenz' },
        ],
        note: 'Geprüfte Version: 1.2.0, laut App Store veröffentlicht am 28. Januar 2025; die App ist vor dem Modell-Download 31,6 MB groß, benötigt iOS 17.6 oder neuer, ist ab 17 Jahren eingestuft und nur auf Englisch gelistet. GitHub zeigt Releases bis 1.2.3 vom 27. Januar 2025, einen Tag vor dem App-Store-Datum; die beiden Versionsnummern passen also nicht zusammen, und diese Rezension nutzt die App-Store-Version.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt von der Website, aus der App-Store-Beschreibung oder aus dem Repository; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Chat auf dem Gerät.** Laut Website laufen die Modelle auf dem Gerät und die App funktioniert ohne Internetverbindung; laut README wird der Chatverlauf lokal gespeichert.',
          '**Modellliste.** Die Website nennt Llama 3.2 1B (0,7 GB) und 3B (1,8 GB) sowie DeepSeek-R1-Distill-Qwen-1.5B in 4-Bit (1,0 GB) und 8-Bit (1,9 GB). Im Haupt-Branch des Repositorys stehen zusätzlich Qwen3 4B und 8B in 4-Bit; ob der App-Store-Build 1.2.0 sie enthält, ist nicht angegeben.',
          '**Herkunft der Modelle.** Die Quellen sagen nicht, wie die Modelle geladen werden; die Modell-IDs im Code verweisen auf die mlx-community-Sammlung auf Hugging Face.',
          '**Anpassung.** Design, Schriftarten und Systemprompt lassen sich in der App ändern.',
          '**Kurzbefehle.** Eine Aktion erlaubt es, mit einem lokalen Modell zu chatten oder dessen Ausgabe an andere Kurzbefehle-Aktionen weiterzugeben.',
        ],
        note: 'Die Versionshinweise zu 1.2.0 nennen nur die ergänzte Unterstützung der beiden DeepSeek-R1-Distill-Qwen-1.5B-Modelle; die DeepSeek-R1-Destillate sind Reasoning-Modelle.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Datenschutz',
        content: [
          '**Die Datenschutzerklärung (gültig ab 23. Dezember 2024) sagt: „Wir erheben keinerlei Informationen von Ihnen“ und „Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter“.** Die Website nennt die App privat und sagt, dass Modelle lokal laufen; laut README wird der Chatverlauf lokal gespeichert.',
          'Die Erklärung ist allerdings nicht widerspruchsfrei: Sie führt auch auf, wofür „die von uns erhobenen Informationen“ genutzt werden, unter anderem um zu „analysieren, wie Sie fullmoon nutzen“, und endet mit der Einwilligung in „unsere Erhebung, Nutzung und Weitergabe Ihrer Informationen“. Sie sagt nicht, was – falls überhaupt – erhoben wird, und erwähnt die Verarbeitung auf dem Gerät gar nicht. (Die Erklärung liegt nur auf Englisch vor; die Zitate sind übersetzt.)',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Angaben des Herstellers, keine Prüfergebnisse. Der Quellcode ist öffentlich, doch PromptQuorum hat ihn weder gelesen noch den Netzwerkverkehr der App untersucht.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Besitzer von Apple-Geräten, die einen möglichst einfachen Offline-Chat wollen** und mit kleinen Modellen zufrieden sind.',
          '**Entwickler und Tüftler**, die eine unter MIT-Lizenz stehende Swift-App auf Basis von MLX Swift studieren oder forken möchten.',
          '**Alle, die Offline-Chat-Apps für das iPhone vergleichen** und Open Source höher gewichten als häufige Updates.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Pflegestatus.** Die Warnung am Seitenanfang gilt; PromptQuorum fand keine Aussage des Herstellers, ob die Entwicklung weitergeht.',
          '**Antwortqualität und Tempo.** Nicht getestet; die Quellen nennen Modellgrößen, aber weder RAM-Bedarf noch Tokens pro Sekunde – welche iPhones welches Modell tragen, ist daher unbekannt.',
          '**Modelllizenzen.** Die Modelle haben eigene Lizenzen (die Website verlinkt die Modellseiten von Meta Llama und DeepSeek); PromptQuorum hat sie nicht geprüft.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          { 'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Quelloffener Chat-Client mit eigener Modellbibliothek für iPhone und Android' },
          { 'App': '[Private Mind](/de/power-local-llm/private-mind-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Kostenlos / MIT', 'Wichtigster Unterschied': 'Bietet zusätzlich Dokumentenfragen auf dem Gerät und Benchmarks; läuft auf ExecuTorch statt MLX' },
          { 'App': '[MLC Chat](/de/power-local-llm/mlc-chat-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Kostenlos / Apache 2.0', 'Wichtigster Unterschied': 'Quelloffene Chat-App auf Basis von MLC LLM; letztes Update im September 2024' },
        ],
        note: 'fullmoon ist die einzige der vier Apps ohne Android-Version; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Store-Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich neuere Builds als die App-Store-Version ausprobieren?',
            a: 'Die Website bietet einen TestFlight-Link für die neuesten Funktionen und Modelle an, der Modelle enthalten kann, die dem App-Store-Build fehlen. PromptQuorum ist nicht beigetreten.',
          },
          {
            q: 'Läuft fullmoon auf dem Mac?',
            a: 'Die Website nennt macOS, und der App-Store-Eintrag zeigt Mac-Kompatibilität. PromptQuorum hat nicht geprüft, ob es eine native Mac-App ist oder die iPad-App auf Apple Silicon.',
          },
          {
            q: 'Kostet die App außerhalb der USA etwas?',
            a: 'In den am 30. Oktober 2026 geprüften App-Store-Ländern (Deutschland, Frankreich, Spanien, Japan, Südkorea und Brasilien) war sie kostenlos und zeigte dieselbe Version 1.2.0.',
          },
          {
            q: 'Kann ich eigene Modelle laden?',
            a: 'Die Quellen beschreiben eine feste Modellliste in der App und erwähnen keinen Import weiterer Modelle.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'fullmoon ist ein aufgeräumter, kostenloser und quelloffener Weg, auf dem iPhone, iPad oder Mac offline mit kleinen Modellen zu chatten – mit nützlichen Details wie einer Kurzbefehle-Aktion und einem editierbaren Systemprompt. Dagegen stehen: kein Release seit Januar 2025, eine in sich widersprüchliche Datenschutzerklärung, eine kurze Modellliste und nicht überprüfbare Qualität und Geschwindigkeit der Antworten. Die App passt zu Menschen, die eine schlichte App unter MIT-Lizenz schätzen und in Kauf nehmen, dass sie womöglich nicht mehr gepflegt wird; wer mehr als einfachen Chat oder regelmäßige Updates braucht, sollte zuerst die obigen Alternativen vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[fullmoon-Website](https://fullmoon.app) — Funktionsliste, Modellgrößen, Plattformen und Download-Links, geprüft am 30. Oktober 2026.',
          '[fullmoon im App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156) — Version, Veröffentlichungsdatum, Größe, Anforderungen und Preise je Land, geprüft am 30. Oktober 2026.',
          '[Datenschutzerklärung von fullmoon](https://fullmoon.app/privacy) — gültig ab 23. Dezember 2024.',
          '[fullmoon-ios auf GitHub](https://github.com/mainframecomputer/fullmoon-ios) — README, MIT-Lizenzdatei, Releases und Commit-Verlauf, geprüft am 30. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät für iOS und Android.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine quelloffene Offline-Chat-App mit Dokumentenfragen auf dem Gerät.',
          '[MLC-Chat-Rezension](/de/power-local-llm/mlc-chat-review) — eine quelloffene Chat-App auf dem Gerät auf Basis von MLC LLM.',
          '[Die besten lokalen LLM-Apps für das iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere iPhone-Übersicht.',
          '[Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich, zu dem diese Rezension gehört.',
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
    heroImage: '/images/fullmoon-review-hero-fr.webp',
    title: 'Test de fullmoon : chat IA gratuit hors ligne pour iPhone, iPad et Mac',
    seoTitle: 'Test de fullmoon : chat IA hors ligne pour iPhone et Mac',
    intro:
      'fullmoon est une application de chat gratuite de [Mainframe Computer, Inc.](https://mainframe.inc) qui exécute de petits modèles de langage sur iPhone, iPad ou Mac grâce au framework MLX d’Apple et, selon l’éditeur, fonctionne entièrement hors ligne. Son code source est publié sous licence MIT sur [GitHub](https://github.com/mainframecomputer/fullmoon-ios). Ce test s’appuie sur le site de l’éditeur, la fiche App Store, la politique de confidentialité et le dépôt, consultés le 30 octobre 2026 ; PromptQuorum n’a pas testé l’application.',
    metaDescription:
      'Test de fullmoon : chat IA hors ligne gratuit (MIT) pour iPhone, iPad et Mac avec Apple MLX. Aucune version depuis janvier 2025 : vérifiez avant usage.',
    twitterDescription:
      'Test de fullmoon : une appli de chat IA hors ligne gratuite pour appareils Apple, sans nouvelle version depuis début 2025. Modèles, confidentialité et zones d’ombre.',
    audience:
      'Utilisateurs d’iPhone, d’iPad et de Mac qui cherchent une appli de chat hors ligne simple et veulent savoir ce que les sources confirment, ce que l’éditeur affirme seulement et depuis quand elle n’a pas été mise à jour.',
    readTime: '5 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'fullmoon review',
    targetKeywords: [
      'test fullmoon',
      'fullmoon app iOS',
      'chat IA hors ligne iPhone',
      'appli LLM locale iPhone MLX',
      'chat IA open source iOS',
      'fullmoon local intelligence',
    ],
    current_models_mentioned: ['Llama 3.2', 'DeepSeek-R1-Distill-Qwen', 'Qwen3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple silicon'],
    leadAnswerBlock:
      '**Avertissement : fullmoon n’a reçu aucune version depuis le 28 janvier 2025 (version 1.2.0 sur l’App Store) ni aucune modification de code depuis le 5 mai 2025 et n’est peut-être plus maintenue — vérifiez qu’elle fonctionne sur votre appareil avant de vous y fier.** C’est une application de chat gratuite de Mainframe Computer, Inc. qui exécute de petits modèles de langage sur iPhone, iPad ou Mac. Toutes les informations proviennent du site de l’éditeur, de la fiche App Store, de la politique de confidentialité et du dépôt public.',
    quickAnswerTop: {
      fr: {
        question: 'fullmoon fait-elle vraiment tourner un chat IA hors ligne sur l’iPhone ?',
        answer:
          'Selon l’éditeur, oui : les modèles tournent sur l’appareil avec MLX d’Apple, l’application fonctionne sans connexion internet et l’historique des conversations est stocké localement. PromptQuorum ne l’a pas testé.',
        bullets: [
          'Vous choisissez parmi de petits modèles comme Llama 3.2 et les versions distillées de DeepSeek-R1.',
          'Le thème, les polices et le prompt système sont modifiables.',
          'Une action Raccourcis transmet la sortie d’un modèle local à d’autres actions.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que fullmoon ?', anchor: 'what-is-fullmoon' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données et confidentialité', anchor: 'privacy' },
      { label: 'À qui elle s’adresse', anchor: 'who-should-use' },
      { label: 'Ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'fullmoon est une application gratuite pour iPhone, iPad et Mac, sous licence MIT, qui dialogue avec de petits modèles de langage exécutés sur l’appareil grâce à MLX d’Apple.',
          },
          {
            type: 'plain-terms',
            text: 'Vous choisissez l’un des quelques petits modèles et discutez avec lui comme avec n’importe quel assistant, le calcul se faisant sur votre appareil plutôt que sur un service cloud.',
          },
        ],
        items: [
          'Maintenance : la dernière modification du dépôt a ajouté des modèles Qwen3, que ni les notes de version 1.2.0 ni le site ne mentionnent.',
          'Licence : MIT d’après le fichier LICENSE ; le site dit seulement « open source ».',
          'Coût : gratuite au téléchargement.',
          'Éditeur : Mainframe Computer, Inc. ; la fiche App Store n’est qu’en anglais.',
          'Appareils : iOS 17.6 ou plus récent ; le site cite aussi visionOS.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur le site, la fiche App Store, la politique de confidentialité et le dépôt public, consultés le 30 octobre 2026. PromptQuorum n’a ni installé ni mesuré l’application : la qualité des réponses et la vitesse ne sont donc pas évaluées.',
          },
        ],
      },
      overview: {
        id: 'what-is-fullmoon',
        title: 'Qu’est-ce que fullmoon ?',
        content: [
          '**fullmoon est une application de chat pour dialoguer avec des modèles de langage exécutés sur votre propre appareil Apple plutôt que sur un serveur.** L’App Store la présente sous le nom « fullmoon: local intelligence » dans la catégorie Utilitaires, éditée par Mainframe Computer, Inc., publiée pour la première fois le 13 janvier 2025 ; le dépôt la décrit comme une appli pour « discuter avec des grands modèles de langage privés et locaux ».',
          'Le dépôt cite MLX Swift d’Apple pour l’inférence, et le site indique que l’application est optimisée pour les puces Apple. Le dépôt de code a été créé en octobre 2024.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**fullmoon se télécharge gratuitement sur l’App Store pour iPhone, iPad et Mac ; le site ne mentionne aucune version Android ou Windows.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          { 'Option': 'iPhone, iPad, Mac', 'Comment l’obtenir': '[fullmoon sur l’App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156), gratuit' },
          { 'Option': 'Versions plus récentes', 'Comment l’obtenir': '[TestFlight](https://testflight.apple.com/join/UdTQvRpf), pour les versions plus récentes' },
          { 'Option': 'Site web', 'Comment l’obtenir': '[fullmoon.app](https://fullmoon.app)' },
          { 'Option': 'Politique de confidentialité', 'Comment l’obtenir': '[fullmoon.app/privacy](https://fullmoon.app/privacy)' },
          { 'Option': 'Code source', 'Comment l’obtenir': '[GitHub](https://github.com/mainframecomputer/fullmoon-ios), licence MIT' },
        ],
        note: 'Version testée : 1.2.0, publiée le 28 janvier 2025 d’après l’App Store ; l’application pèse 31.6 MB avant tout téléchargement de modèle, exige iOS 17.6 ou plus récent, est classée 17+ et n’est listée qu’en anglais. GitHub affiche des versions jusqu’à 1.2.3 datée du 27 janvier 2025, un jour avant la date de l’App Store ; les deux numéros ne concordent donc pas et ce test retient la version de l’App Store.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient du site, de la description App Store ou du dépôt ; aucun n’a été testé de façon indépendante.**',
        ],
        items: [
          '**Chat sur l’appareil.** Les modèles tournent sur l’appareil et l’application fonctionne sans connexion internet, selon le site ; l’historique est stocké localement, selon le README.',
          '**Liste des modèles.** Le site cite Llama 3.2 1B (0.7 GB) et 3B (1.8 GB), ainsi que DeepSeek-R1-Distill-Qwen-1.5B en 4 bits (1.0 GB) et en 8 bits (1.9 GB). La branche principale du dépôt liste aussi Qwen3 4B et 8B en 4 bits ; on ignore si la version 1.2.0 de l’App Store les inclut.',
          '**Origine des modèles.** Les sources ne disent pas comment les modèles sont téléchargés ; les identifiants de modèles dans le code pointent vers la collection mlx-community sur Hugging Face.',
          '**Personnalisation.** Le thème, les polices et le prompt système se modifient dans l’application.',
          '**Raccourcis.** Une action permet de discuter avec un modèle local ou de transmettre sa sortie à d’autres actions Raccourcis.',
        ],
        note: 'Les notes de la version 1.2.0 ne mentionnent que l’ajout de la prise en charge des deux modèles DeepSeek-R1-Distill-Qwen-1.5B ; les versions distillées de DeepSeek-R1 sont des modèles de raisonnement.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et confidentialité',
        content: [
          '**La politique de confidentialité, en vigueur depuis le 23 décembre 2024, indique « Nous ne collectons aucune information vous concernant » et « Nous ne partageons pas vos données personnelles avec des tiers ».** Le site qualifie l’application de privée et dit que les modèles tournent localement ; le README précise que l’historique est enregistré localement.',
          'Cette politique n’est toutefois pas cohérente : elle énumère aussi les usages des « informations que nous collectons », notamment pour « comprendre et analyser la façon dont vous utilisez fullmoon », et se termine par un consentement à « notre collecte, utilisation et partage de vos informations ». Elle ne dit pas ce qui est collecté, le cas échéant, et ne mentionne pas du tout le traitement sur l’appareil. (Le texte n’existe qu’en anglais ; les citations sont traduites.)',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Il s’agit de déclarations de l’éditeur, pas de résultats d’audit. Le code source est public, mais PromptQuorum ne l’a pas lu et n’a pas inspecté le trafic réseau de l’application.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Les propriétaires d’appareils Apple qui veulent un chat hors ligne le plus simple possible** et se contentent de petits modèles.',
          '**Les développeurs et bidouilleurs** qui veulent étudier ou forker une appli Swift sous licence MIT construite sur MLX Swift.',
          '**Ceux qui comparent les applis de chat hors ligne pour iPhone** et préfèrent l’open source aux mises à jour fréquentes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**État de la maintenance.** L’avertissement en haut de page s’applique ; PromptQuorum n’a trouvé aucune déclaration de l’éditeur sur la poursuite du développement.',
          '**Qualité et vitesse des réponses.** Non testées ; les sources donnent la taille des modèles mais ni besoin en RAM ni tokens par seconde, donc on ignore quel iPhone fait tourner quel modèle.',
          '**Licences des modèles.** Les modèles ont leurs propres licences (le site renvoie aux pages de Meta Llama et de DeepSeek) ; PromptQuorum ne les a pas examinées.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Client de chat open source avec sa propre bibliothèque de modèles pour iPhone et Android' },
          { 'Application': '[Private Mind](/fr/power-local-llm/private-mind-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Ajoute des questions sur vos documents sur l’appareil et des benchmarks ; repose sur ExecuTorch plutôt que sur MLX' },
          { 'Application': '[MLC Chat](/fr/power-local-llm/mlc-chat-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / Apache 2.0', 'Différence clé': 'Appli de chat open source basée sur MLC LLM ; dernière mise à jour en septembre 2024' },
        ],
        note: 'fullmoon est la seule des quatre applications sans version Android ; vérifiez le prix, la licence et les plateformes de chacune sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je essayer des versions plus récentes que celle de l’App Store ?',
            a: 'Le site propose un lien TestFlight pour les dernières fonctions et les derniers modèles, qui peut inclure des modèles absents de la version App Store. PromptQuorum ne l’a pas rejoint.',
          },
          {
            q: 'fullmoon fonctionne-t-elle sur Mac ?',
            a: 'Le site cite macOS et la fiche App Store indique une compatibilité Mac. PromptQuorum n’a pas vérifié s’il s’agit d’une vraie appli Mac ou de l’appli iPad exécutée sur puce Apple.',
          },
          {
            q: 'Est-elle payante en dehors des États-Unis ?',
            a: 'Dans les boutiques App Store consultées le 30 octobre 2026 (Allemagne, France, Espagne, Japon, Corée du Sud et Brésil), elle était gratuite et affichait la même version, 1.2.0.',
          },
          {
            q: 'Puis-je charger mes propres modèles ?',
            a: 'Les sources décrivent une liste de modèles figée dans l’application et ne mentionnent pas l’import d’autres modèles.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'fullmoon est un moyen épuré, gratuit et open source de discuter hors ligne avec de petits modèles sur iPhone, iPad ou Mac, avec des atouts comme une action Raccourcis et un prompt système modifiable. En contrepartie, aucune version depuis janvier 2025, une politique de confidentialité contradictoire, une liste de modèles courte et une qualité et une vitesse de réponse impossibles à vérifier ici. Elle convient à ceux qui apprécient une appli simple sous licence MIT et acceptent qu’elle ne soit peut-être plus maintenue ; qui a besoin de plus qu’un chat basique ou de mises à jour régulières devrait d’abord comparer les alternatives ci-dessus.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de fullmoon](https://fullmoon.app) — liste des fonctions, tailles des modèles, plateformes et liens de téléchargement, consulté le 30 octobre 2026.',
          '[fullmoon sur l’App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156) — version, date de sortie, taille, prérequis et prix par boutique, consultés le 30 octobre 2026.',
          '[Politique de confidentialité de fullmoon](https://fullmoon.app/privacy) — en vigueur depuis le 23 décembre 2024.',
          '[fullmoon-ios sur GitHub](https://github.com/mainframecomputer/fullmoon-ios) — README, fichier de licence MIT, versions et historique des commits, consultés le 30 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat open source et gratuit sur l’appareil pour iOS et Android.',
          '[Test de Private Mind](/fr/power-local-llm/private-mind-review) — une appli de chat hors ligne open source avec questions sur vos documents sur l’appareil.',
          '[Test de MLC Chat](/fr/power-local-llm/mlc-chat-review) — une appli de chat open source sur l’appareil basée sur MLC LLM.',
          '[Les meilleures applis LLM locales pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama iPhone plus large.',
          '[Assistants de chat comparés](/fr/power-local-llm/local-llm-chat-assistants-compared) — la comparaison de catégorie à laquelle appartient ce test.',
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
    heroImage: '/images/fullmoon-review-hero-es.webp',
    title: 'Reseña de fullmoon: chat de IA gratis y sin conexión para iPhone, iPad y Mac',
    seoTitle: 'Reseña de fullmoon: chat de IA offline en iPhone y Mac',
    intro:
      'fullmoon es una app de chat gratuita de [Mainframe Computer, Inc.](https://mainframe.inc) que ejecuta modelos de lenguaje pequeños en iPhone, iPad o Mac con el framework MLX de Apple y, según el fabricante, funciona totalmente sin conexión. Su código fuente está publicado con licencia MIT en [GitHub](https://github.com/mainframecomputer/fullmoon-ios). Esta reseña se basa en el sitio web del fabricante, la ficha de la App Store, la política de privacidad y el repositorio, consultados el 30 de octubre de 2026; PromptQuorum no ha probado la app.',
    metaDescription:
      'Reseña de fullmoon: chat de IA gratis (MIT) y sin conexión para iPhone, iPad y Mac con Apple MLX. Sin versiones desde enero de 2025: compruébalo antes.',
    twitterDescription:
      'Reseña de fullmoon: app de chat de IA gratuita y sin conexión para dispositivos Apple, sin versiones desde principios de 2025. Modelos, privacidad y dudas abiertas.',
    audience:
      'Usuarios de iPhone, iPad y Mac que quieren una app de chat sin conexión sencilla y necesitan saber qué confirman las fuentes, qué solo afirma el fabricante y cuánto hace que se actualizó.',
    readTime: '5 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'fullmoon review',
    targetKeywords: [
      'reseña fullmoon',
      'fullmoon app iOS',
      'chat de IA sin conexión iPhone',
      'app LLM local iPhone MLX',
      'chat de IA de código abierto iOS',
      'fullmoon local intelligence',
    ],
    current_models_mentioned: ['Llama 3.2', 'DeepSeek-R1-Distill-Qwen', 'Qwen3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple silicon'],
    leadAnswerBlock:
      '**Aviso: fullmoon no recibe ninguna versión desde el 28 de enero de 2025 (versión 1.2.0 en la App Store) ni cambios de código desde el 5 de mayo de 2025 y puede que ya no tenga mantenimiento; comprueba que funciona en tu dispositivo antes de depender de ella.** Es una app de chat gratuita de Mainframe Computer, Inc. que ejecuta modelos de lenguaje pequeños en iPhone, iPad o Mac. Todo lo que se dice aquí procede del sitio web del fabricante, la ficha de la App Store, la política de privacidad y el repositorio público.',
    quickAnswerTop: {
      es: {
        question: '¿fullmoon ejecuta de verdad un chat de IA sin conexión en el iPhone?',
        answer:
          'Según el fabricante, sí: los modelos se ejecutan en el dispositivo con MLX de Apple, la app funciona sin conexión a internet y el historial de chat se guarda en local. PromptQuorum no lo ha probado.',
        bullets: [
          'Eliges entre modelos pequeños como Llama 3.2 y las destilaciones de DeepSeek-R1.',
          'Se pueden cambiar el tema, las fuentes y el prompt del sistema.',
          'Una acción de Atajos pasa la salida de un modelo local a otras acciones.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es fullmoon?', anchor: 'what-is-fullmoon' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Flujo de datos y privacidad', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Competidores y alternativas', anchor: 'vs-alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'fullmoon es una app gratuita para iPhone, iPad y Mac con licencia MIT que chatea con modelos de lenguaje pequeños que se ejecutan en el dispositivo mediante MLX de Apple.',
          },
          {
            type: 'plain-terms',
            text: 'Eliges uno de unos pocos modelos pequeños y chateas con él como con cualquier asistente, con el trabajo hecho en tu propio dispositivo en lugar de en un servicio en la nube.',
          },
        ],
        items: [
          'Mantenimiento: el último cambio del repositorio añadió modelos Qwen3, que ni las notas de la versión 1.2.0 ni el sitio web mencionan.',
          'Licencia: MIT según el archivo LICENSE; el propio sitio solo dice «código abierto».',
          'Coste: descarga gratuita.',
          'Fabricante: Mainframe Computer, Inc.; la ficha de la App Store está solo en inglés.',
          'Dispositivos: iOS 17.6 o posterior; el sitio nombra también visionOS.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web, la ficha de la App Store, la política de privacidad y el repositorio público, consultados el 30 de octubre de 2026. PromptQuorum no ha instalado ni medido la app, así que no se valora la calidad de las respuestas ni la velocidad.',
          },
        ],
      },
      overview: {
        id: 'what-is-fullmoon',
        title: '¿Qué es fullmoon?',
        content: [
          '**fullmoon es una app de chat para hablar con modelos de lenguaje que se ejecutan en tu propio dispositivo Apple en lugar de en un servidor.** La App Store la lista como «fullmoon: local intelligence» en Utilidades, del vendedor Mainframe Computer, Inc., con primera publicación el 13 de enero de 2025; el repositorio la describe como una app para «chatear con grandes modelos de lenguaje privados y locales».',
          'El repositorio atribuye la inferencia a MLX Swift de Apple y el sitio dice que la app está optimizada para Apple silicon. El repositorio de código se creó en octubre de 2024.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**fullmoon es una descarga gratuita de la App Store para iPhone, iPad y Mac; el sitio web no menciona ninguna versión para Android ni Windows.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          { 'Opción': 'iPhone, iPad, Mac', 'Cómo conseguirlo': '[fullmoon en la App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156), gratis' },
          { 'Opción': 'Versiones más recientes', 'Cómo conseguirlo': '[TestFlight](https://testflight.apple.com/join/UdTQvRpf), para versiones más recientes' },
          { 'Opción': 'Sitio web', 'Cómo conseguirlo': '[fullmoon.app](https://fullmoon.app)' },
          { 'Opción': 'Política de privacidad', 'Cómo conseguirlo': '[fullmoon.app/privacy](https://fullmoon.app/privacy)' },
          { 'Opción': 'Código fuente', 'Cómo conseguirlo': '[GitHub](https://github.com/mainframecomputer/fullmoon-ios), licencia MIT' },
        ],
        note: 'Versión revisada: 1.2.0, publicada el 28 de enero de 2025 según la App Store; la app ocupa 31.6 MB antes de descargar ningún modelo, requiere iOS 17.6 o posterior, tiene clasificación 17+ y está listada solo en inglés. GitHub muestra versiones hasta la 1.2.3, fechada el 27 de enero de 2025, un día antes de la fecha de la App Store; los dos números de versión no coinciden y esta reseña usa la de la App Store.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede del sitio web, de la descripción de la App Store o del repositorio; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Chat en el dispositivo.** Los modelos se ejecutan en el dispositivo y la app funciona sin conexión a internet, según el sitio web; el historial de chat se guarda en local, según el README.',
          '**Lista de modelos.** El sitio nombra Llama 3.2 1B (0.7 GB) y 3B (1.8 GB) y DeepSeek-R1-Distill-Qwen-1.5B en 4 bits (1.0 GB) y 8 bits (1.9 GB). La rama principal del repositorio lista además Qwen3 4B y 8B en 4 bits; no se indica si la versión 1.2.0 de la App Store los incluye.',
          '**De dónde vienen los modelos.** Las fuentes no dicen cómo se descargan los modelos; los identificadores de modelo del código apuntan a la colección mlx-community de Hugging Face.',
          '**Personalización.** El tema, las fuentes y el prompt del sistema se pueden cambiar en la app.',
          '**Atajos.** Una acción permite chatear con un modelo local o pasar su salida a otras acciones de Atajos.',
        ],
        note: 'Las notas de la versión 1.2.0 solo mencionan la compatibilidad añadida con los dos modelos DeepSeek-R1-Distill-Qwen-1.5B; las destilaciones de DeepSeek-R1 son modelos de razonamiento.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y privacidad',
        content: [
          '**La política de privacidad, vigente desde el 23 de diciembre de 2024, dice «No recopilamos ninguna información tuya» y «No compartimos tu información personal con terceros».** El sitio web llama privada a la app y dice que ejecuta los modelos en local; el README indica que el historial de chat se guarda en local.',
          'Esa misma política no es coherente: también enumera para qué se usa «la información que recopilamos», entre otras cosas para «entender y analizar cómo usas fullmoon», y termina con el consentimiento a «nuestra recopilación, uso e intercambio de tu información». No dice qué se recopila, si es que algo, y no menciona en absoluto el procesamiento en el dispositivo. (El texto solo existe en inglés; las citas están traducidas.)',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones del fabricante, no resultados de una auditoría. El código fuente es público, pero PromptQuorum no lo ha leído ni ha inspeccionado el tráfico de red de la app.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes tienen dispositivos Apple y quieren el chat sin conexión más sencillo posible** y se conforman con modelos pequeños.',
          '**Desarrolladores y curiosos** que quieren estudiar o bifurcar una app Swift con licencia MIT basada en MLX Swift.',
          '**Quienes comparan apps de chat sin conexión para iPhone** y valoran el código abierto por encima de las actualizaciones frecuentes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Estado del mantenimiento.** Se aplica el aviso de arriba de la página; PromptQuorum no encontró ninguna declaración del fabricante sobre si el desarrollo continúa.',
          '**Calidad y velocidad de las respuestas.** No se probaron; las fuentes dan tamaños de modelo pero ni la RAM necesaria ni los tokens por segundo, así que no se sabe qué iPhone mueve qué modelo.',
          '**Licencias de los modelos.** Los modelos tienen sus propias licencias (el sitio enlaza las páginas de Meta Llama y DeepSeek); PromptQuorum no las ha revisado.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Cliente de chat de código abierto con su propia biblioteca de modelos para iPhone y Android' },
          { 'App': '[Private Mind](/es/power-local-llm/private-mind-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Añade preguntas sobre documentos en el dispositivo y benchmarks; usa ExecuTorch en lugar de MLX' },
          { 'App': '[MLC Chat](/es/power-local-llm/mlc-chat-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / Apache 2.0', 'Diferencia clave': 'App de chat de código abierto basada en MLC LLM; su última actualización fue en septiembre de 2024' },
        ],
        note: 'fullmoon es la única de las cuatro sin versión para Android; comprueba el precio, la licencia y las plataformas de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo probar versiones más recientes que la de la App Store?',
            a: 'El sitio web ofrece un enlace de TestFlight para las últimas funciones y modelos, que puede incluir modelos que la versión de la App Store no tiene. PromptQuorum no se unió.',
          },
          {
            q: '¿Funciona fullmoon en Mac?',
            a: 'El sitio nombra macOS y la ficha de la App Store muestra compatibilidad con Mac. PromptQuorum no comprobó si es una app nativa de Mac o la app de iPad ejecutándose en Apple silicon.',
          },
          {
            q: '¿Cuesta algo fuera de Estados Unidos?',
            a: 'En las tiendas de la App Store consultadas el 30 de octubre de 2026 (Alemania, Francia, España, Japón, Corea del Sur y Brasil) era gratuita y mostraba la misma versión, 1.2.0.',
          },
          {
            q: '¿Puedo cargar mis propios modelos?',
            a: 'Las fuentes describen una lista fija de modelos dentro de la app y no mencionan la importación de otros modelos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'fullmoon es una forma limpia, gratuita y de código abierto de chatear sin conexión con modelos pequeños en iPhone, iPad o Mac, con detalles útiles como una acción de Atajos y un prompt del sistema editable. En contra: ninguna versión desde enero de 2025, una política de privacidad que se contradice, una lista de modelos corta y una calidad y velocidad de respuestas que no se han podido comprobar aquí. Encaja con quien valora una app sencilla con licencia MIT y acepta que quizá ya no se mantenga; quien necesite algo más que un chat básico o actualizaciones regulares debería comparar primero las alternativas de arriba.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de fullmoon](https://fullmoon.app) — lista de funciones, tamaños de modelo, plataformas y enlaces de descarga, consultado el 30 de octubre de 2026.',
          '[fullmoon en la App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156) — versión, fecha de publicación, tamaño, requisitos y precios por tienda, consultados el 30 de octubre de 2026.',
          '[Política de privacidad de fullmoon](https://fullmoon.app/privacy) — vigente desde el 23 de diciembre de 2024.',
          '[fullmoon-ios en GitHub](https://github.com/mainframecomputer/fullmoon-ios) — README, archivo de licencia MIT, versiones e historial de commits, consultados el 30 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
          '[Reseña de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión y de código abierto con preguntas sobre documentos en el dispositivo.',
          '[Reseña de MLC Chat](/es/power-local-llm/mlc-chat-review) — una app de chat de código abierto en el dispositivo basada en MLC LLM.',
          '[Mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la comparativa más amplia para iPhone.',
          '[Asistentes de chat comparados](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de categoría a la que pertenece esta reseña.',
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
    heroImage: '/images/fullmoon-review-hero-pt.webp',
    title: 'Análise do fullmoon: chat de IA grátis e offline para iPhone, iPad e Mac',
    seoTitle: 'Análise do fullmoon: chat de IA offline no iPhone e Mac',
    intro:
      'O fullmoon é um app de chat gratuito da [Mainframe Computer, Inc.](https://mainframe.inc) que executa modelos de linguagem pequenos no iPhone, iPad ou Mac com o framework MLX da Apple e, segundo o fabricante, funciona totalmente offline. O código-fonte é publicado sob licença MIT no [GitHub](https://github.com/mainframecomputer/fullmoon-ios). Esta análise se baseia no site do fabricante, na página da App Store, na política de privacidade e no repositório, consultados em 30 de outubro de 2026; o PromptQuorum não testou o app.',
    metaDescription:
      'Análise do fullmoon: chat de IA offline e grátis (MIT) para iPhone, iPad e Mac com Apple MLX. Sem versões desde janeiro de 2025: confira antes de usar.',
    twitterDescription:
      'Análise do fullmoon: app de chat de IA offline e gratuito para dispositivos Apple, sem versões desde o início de 2025. Modelos, privacidade e dúvidas em aberto.',
    audience:
      'Usuários de iPhone, iPad e Mac que querem um app de chat offline simples e precisam saber o que as fontes confirmam, o que o fabricante apenas afirma e há quanto tempo o app não é atualizado.',
    readTime: '5 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'fullmoon review',
    targetKeywords: [
      'análise fullmoon',
      'fullmoon app iOS',
      'chat de IA offline iPhone',
      'app de LLM local iPhone MLX',
      'chat de IA de código aberto iOS',
      'fullmoon local intelligence',
    ],
    current_models_mentioned: ['Llama 3.2', 'DeepSeek-R1-Distill-Qwen', 'Qwen3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple silicon'],
    leadAnswerBlock:
      '**Aviso: o fullmoon não recebe nenhuma versão desde 28 de janeiro de 2025 (versão 1.2.0 na App Store) nem alterações de código desde 5 de maio de 2025 e pode estar sem manutenção — confirme que ele funciona no seu dispositivo antes de depender dele.** É um app de chat gratuito da Mainframe Computer, Inc. que executa modelos de linguagem pequenos no iPhone, iPad ou Mac. Tudo o que está aqui vem do site do fabricante, da página da App Store, da política de privacidade e do repositório público.',
    quickAnswerTop: {
      pt: {
        question: 'O fullmoon realmente roda chat de IA offline no iPhone?',
        answer:
          'Segundo o fabricante, sim: os modelos rodam no dispositivo com o MLX da Apple, o app funciona sem conexão com a internet e o histórico de conversas fica armazenado localmente. O PromptQuorum não testou isso.',
        bullets: [
          'Você escolhe entre modelos pequenos como Llama 3.2 e as versões destiladas do DeepSeek-R1.',
          'Tema, fontes e prompt do sistema podem ser alterados.',
          'Uma ação do Atalhos repassa a saída de um modelo local para outras ações.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o fullmoon?', anchor: 'what-is-fullmoon' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Fluxo de dados e privacidade', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O fullmoon é um app gratuito para iPhone, iPad e Mac, com licença MIT, que conversa com modelos de linguagem pequenos executados no dispositivo por meio do MLX da Apple.',
          },
          {
            type: 'plain-terms',
            text: 'Você escolhe um entre poucos modelos pequenos e conversa com ele como com qualquer assistente, com o processamento feito no seu próprio dispositivo em vez de em um serviço na nuvem.',
          },
        ],
        items: [
          'Manutenção: a última alteração do repositório adicionou modelos Qwen3, que nem as notas da versão 1.2.0 nem o site listam.',
          'Licença: MIT, conforme o arquivo LICENSE; o próprio site diz apenas «código aberto».',
          'Custo: download gratuito.',
          'Fabricante: Mainframe Computer, Inc.; a página da App Store está somente em inglês.',
          'Dispositivos: iOS 17.6 ou posterior; o site cita também o visionOS.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site, na página da App Store, na política de privacidade e no repositório público, consultados em 30 de outubro de 2026. O PromptQuorum não instalou nem mediu o app, por isso a qualidade das respostas e a velocidade não são avaliadas.',
          },
        ],
      },
      overview: {
        id: 'what-is-fullmoon',
        title: 'O que é o fullmoon?',
        content: [
          '**O fullmoon é um app de chat para conversar com modelos de linguagem que rodam no seu próprio dispositivo Apple, e não em um servidor.** A App Store o lista como «fullmoon: local intelligence» em Utilitários, do vendedor Mainframe Computer, Inc., lançado pela primeira vez em 13 de janeiro de 2025; o repositório o descreve como um app para «conversar com grandes modelos de linguagem privados e locais».',
          'O repositório credita o MLX Swift da Apple pela inferência, e o site diz que o app é otimizado para Apple silicon. O repositório de código foi criado em outubro de 2024.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O fullmoon é um download gratuito da App Store para iPhone, iPad e Mac; o site não cita versão para Android nem Windows.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'iPhone, iPad, Mac', 'Onde obter': '[fullmoon na App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156), grátis' },
          { 'Opção': 'Versões mais recentes', 'Onde obter': '[TestFlight](https://testflight.apple.com/join/UdTQvRpf), para versões mais novas' },
          { 'Opção': 'Site', 'Onde obter': '[fullmoon.app](https://fullmoon.app)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': '[fullmoon.app/privacy](https://fullmoon.app/privacy)' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[GitHub](https://github.com/mainframecomputer/fullmoon-ios), licença MIT' },
        ],
        note: 'Versão analisada: 1.2.0, lançada em 28 de janeiro de 2025 segundo a App Store; o app tem 31.6 MB antes de qualquer download de modelo, exige iOS 17.6 ou posterior, tem classificação 17+ e está listado somente em inglês. O GitHub mostra versões até a 1.2.3, datada de 27 de janeiro de 2025, um dia antes da data da App Store; os dois números de versão não batem e esta análise usa a da App Store.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do site, da descrição da App Store ou do repositório; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Chat no dispositivo.** Os modelos rodam no dispositivo e o app funciona sem conexão com a internet, segundo o site; o histórico de conversas fica armazenado localmente, segundo o README.',
          '**Lista de modelos.** O site cita Llama 3.2 1B (0.7 GB) e 3B (1.8 GB) e DeepSeek-R1-Distill-Qwen-1.5B em 4 bits (1.0 GB) e 8 bits (1.9 GB). O branch principal do repositório lista ainda Qwen3 4B e 8B em 4 bits; não se informa se a versão 1.2.0 da App Store os inclui.',
          '**De onde vêm os modelos.** As fontes não dizem como os modelos são baixados; os identificadores de modelo no código apontam para a coleção mlx-community no Hugging Face.',
          '**Personalização.** Tema, fontes e prompt do sistema podem ser alterados no app.',
          '**Atalhos.** Uma ação permite conversar com um modelo local ou repassar a saída dele para outras ações do Atalhos.',
        ],
        note: 'As notas da versão 1.2.0 mencionam apenas o suporte adicionado aos dois modelos DeepSeek-R1-Distill-Qwen-1.5B; as versões destiladas do DeepSeek-R1 são modelos de raciocínio.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e privacidade',
        content: [
          '**A política de privacidade, em vigor desde 23 de dezembro de 2024, diz «Não coletamos nenhuma informação sua» e «Não compartilhamos suas informações pessoais com terceiros».** O site chama o app de privado e diz que ele roda os modelos localmente; o README informa que o histórico de conversas é salvo localmente.',
          'A mesma política, porém, não é coerente: ela também lista para que serve «a informação que coletamos», inclusive para «entender e analisar como você usa o fullmoon», e termina com o consentimento a «nossa coleta, uso e compartilhamento de suas informações». Ela não diz o que é coletado, se é que algo é, e não menciona o processamento no dispositivo. (O texto existe só em inglês; as citações estão traduzidas.)',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São declarações do fabricante, não resultados de auditoria. O código-fonte é público, mas o PromptQuorum não o leu nem inspecionou o tráfego de rede do app.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Donos de dispositivos Apple que querem o chat offline mais simples possível** e se contentam com modelos pequenos.',
          '**Desenvolvedores e curiosos** que querem estudar ou fazer um fork de um app Swift com licença MIT baseado no MLX Swift.',
          '**Quem compara apps de chat offline para iPhone** e valoriza o código aberto mais do que atualizações frequentes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Situação da manutenção.** Vale o aviso no topo da página; o PromptQuorum não encontrou nenhuma declaração do fabricante sobre a continuidade do desenvolvimento.',
          '**Qualidade e velocidade das respostas.** Não foram testadas; as fontes dão o tamanho dos modelos, mas não a RAM necessária nem os tokens por segundo, então não se sabe qual iPhone roda qual modelo.',
          '**Licenças dos modelos.** Os modelos têm licenças próprias (o site aponta as páginas da Meta Llama e da DeepSeek); o PromptQuorum não as revisou.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Cliente de chat de código aberto com biblioteca própria de modelos para iPhone e Android' },
          { 'App': '[Private Mind](/pt/power-local-llm/private-mind-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Acrescenta perguntas sobre documentos no dispositivo e benchmarks; roda em ExecuTorch, não em MLX' },
          { 'App': '[MLC Chat](/pt/power-local-llm/mlc-chat-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / Apache 2.0', 'Diferença principal': 'App de chat de código aberto baseado no MLC LLM; a última atualização foi em setembro de 2024' },
        ],
        note: 'O fullmoon é o único dos quatro sem versão para Android; confira preço, licença e plataformas de cada app na própria página.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso testar versões mais novas que a da App Store?',
            a: 'O site oferece um link do TestFlight para os recursos e modelos mais recentes, que pode incluir modelos ausentes da versão da App Store. O PromptQuorum não entrou.',
          },
          {
            q: 'O fullmoon funciona no Mac?',
            a: 'O site cita o macOS e a página da App Store mostra compatibilidade com Mac. O PromptQuorum não verificou se é um app nativo de Mac ou o app de iPad rodando em Apple silicon.',
          },
          {
            q: 'Ele custa algo fora dos Estados Unidos?',
            a: 'Nas lojas da App Store consultadas em 30 de outubro de 2026 (Alemanha, França, Espanha, Japão, Coreia do Sul e Brasil), era gratuito e mostrava a mesma versão, 1.2.0.',
          },
          {
            q: 'Posso carregar meus próprios modelos?',
            a: 'As fontes descrevem uma lista fixa de modelos no app e não mencionam a importação de outros modelos.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O fullmoon é um jeito limpo, gratuito e de código aberto de conversar offline com modelos pequenos no iPhone, iPad ou Mac, com detalhes úteis como uma ação do Atalhos e um prompt do sistema editável. Em contrapartida, não recebe versão desde janeiro de 2025, a política de privacidade se contradiz, a lista de modelos é curta e a qualidade e a velocidade das respostas não puderam ser verificadas aqui. Serve para quem valoriza um app simples com licença MIT e aceita que ele talvez não tenha mais manutenção; quem precisa de mais do que um chat básico, ou de atualizações regulares, deve comparar primeiro as alternativas acima.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do fullmoon](https://fullmoon.app) — lista de recursos, tamanhos dos modelos, plataformas e links de download, consultado em 30 de outubro de 2026.',
          '[fullmoon na App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156) — versão, data de lançamento, tamanho, requisitos e preços por loja, consultados em 30 de outubro de 2026.',
          '[Política de privacidade do fullmoon](https://fullmoon.app/privacy) — em vigor desde 23 de dezembro de 2024.',
          '[fullmoon-ios no GitHub](https://github.com/mainframecomputer/fullmoon-ios) — README, arquivo da licença MIT, versões e histórico de commits, consultados em 30 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no dispositivo para iOS e Android.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline de código aberto com perguntas sobre documentos no dispositivo.',
          '[Análise do MLC Chat](/pt/power-local-llm/mlc-chat-review) — um app de chat de código aberto no dispositivo baseado no MLC LLM.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
          '[Assistentes de chat comparados](/pt/power-local-llm/local-llm-chat-assistants-compared) — a comparação de categoria a que esta análise pertence.',
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
    heroImage: '/images/fullmoon-review-hero-ar.webp',
    title: 'مراجعة fullmoon: دردشة ذكاء اصطناعي مجانية دون اتصال لـ iPhone وiPad وMac',
    seoTitle: 'مراجعة fullmoon: دردشة ذكاء اصطناعي دون اتصال لـ iPhone',
    intro:
      'fullmoon تطبيق دردشة مجاني من [Mainframe Computer, Inc.](https://mainframe.inc) يشغّل نماذج لغوية صغيرة على iPhone أو iPad أو Mac عبر إطار MLX من Apple، ويقول مطوّره إنه يعمل دون اتصال بالكامل. شيفرته المصدرية منشورة على [GitHub](https://github.com/mainframecomputer/fullmoon-ios) بترخيص MIT. تستند هذه المراجعة إلى موقع المطوّر وصفحة App Store وسياسة الخصوصية والمستودع، وقد جرى الاطلاع عليها في 30 أكتوبر 2026؛ ولم يختبر PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'مراجعة fullmoon: دردشة ذكاء اصطناعي مجانية بترخيص MIT دون اتصال لـ iPhone وiPad وMac عبر Apple MLX. لا إصدارات منذ يناير 2025، فتحقق قبل الاعتماد.',
    twitterDescription:
      'مراجعة fullmoon: تطبيق دردشة ذكاء اصطناعي مجاني دون اتصال لأجهزة Apple، بلا إصدارات منذ مطلع 2025. النماذج والخصوصية وما لم تؤكده المصادر.',
    audience:
      'مستخدمو iPhone وiPad وMac الذين يريدون تطبيق دردشة بسيطًا يعمل دون اتصال ويحتاجون إلى معرفة ما تؤكده المصادر وما يدّعيه المطوّر فقط ومنذ متى لم يُحدَّث التطبيق.',
    readTime: '5 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'fullmoon review',
    targetKeywords: [
      'مراجعة fullmoon',
      'تطبيق fullmoon iOS',
      'دردشة ذكاء اصطناعي دون اتصال iPhone',
      'تطبيق LLM محلي iPhone MLX',
      'دردشة ذكاء اصطناعي مفتوحة المصدر iOS',
      'fullmoon local intelligence',
    ],
    current_models_mentioned: ['Llama 3.2', 'DeepSeek-R1-Distill-Qwen', 'Qwen3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple silicon'],
    leadAnswerBlock:
      '**تحذير: لم يتلقَّ fullmoon أي إصدار منذ 28 يناير 2025 (الإصدار 1.2.0 على App Store) ولا أي تغيير في الشيفرة منذ 5 مايو 2025، وقد يكون توقف الاهتمام به — تأكّد من عمله على جهازك قبل الاعتماد عليه.** هو تطبيق دردشة مجاني من Mainframe Computer, Inc. يشغّل نماذج لغوية صغيرة على iPhone أو iPad أو Mac. كل ما يرد هنا مصدره موقع المطوّر وصفحة App Store وسياسة الخصوصية والمستودع العام.',
    quickAnswerTop: {
      ar: {
        question: 'هل يشغّل fullmoon دردشة الذكاء الاصطناعي على iPhone دون اتصال فعلًا؟',
        answer:
          'بحسب المطوّر، نعم: تعمل النماذج على الجهاز عبر MLX من Apple، ويعمل التطبيق دون اتصال بالإنترنت، ويُحفظ سجل الدردشة محليًا. لم يختبر PromptQuorum ذلك.',
        bullets: [
          'تختار بين نماذج صغيرة مثل Llama 3.2 ونسخ DeepSeek-R1 المقطَّرة.',
          'يمكن تغيير السمة والخطوط وموجّه النظام.',
          'إجراء في «الاختصارات» يمرّر مخرجات نموذج محلي إلى إجراءات أخرى.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو fullmoon؟', anchor: 'what-is-fullmoon' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'تدفق البيانات والخصوصية', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'fullmoon تطبيق مجاني بترخيص MIT لأجهزة iPhone وiPad وMac، يتيح الدردشة مع نماذج لغوية صغيرة تعمل على الجهاز عبر MLX من Apple.',
          },
          {
            type: 'plain-terms',
            text: 'تختار نموذجًا من بين عدد قليل من النماذج الصغيرة وتدردش معه كما مع أي مساعد، ويجري العمل على جهازك بدلًا من خدمة سحابية.',
          },
        ],
        items: [
          'الصيانة: آخر تغيير في المستودع أضاف نماذج Qwen3، ولا تذكرها ملاحظات الإصدار 1.2.0 ولا الموقع.',
          'الترخيص: MIT بحسب ملف LICENSE؛ أما الموقع نفسه فيكتفي بعبارة «مفتوح المصدر».',
          'التكلفة: تنزيل مجاني.',
          'المطوّر: Mainframe Computer, Inc.؛ وصفحة App Store بالإنجليزية فقط.',
          'الأجهزة: iOS 17.6 أو أحدث؛ ويذكر الموقع visionOS أيضًا.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى الموقع وصفحة App Store وسياسة الخصوصية والمستودع العام، وقد جرى الاطلاع عليها في 30 أكتوبر 2026. لم يثبّت PromptQuorum التطبيق ولم يقِس أداءه، ولذلك لا تُقيَّم جودة الإجابات ولا السرعة.',
          },
        ],
      },
      overview: {
        id: 'what-is-fullmoon',
        title: 'ما هو fullmoon؟',
        content: [
          '**fullmoon تطبيق دردشة للتحدث مع نماذج لغوية تعمل على جهاز Apple الخاص بك بدلًا من خادم.** يدرجه App Store باسم «fullmoon: local intelligence» ضمن فئة الأدوات من البائع Mainframe Computer, Inc.، وصدر لأول مرة في 13 يناير 2025؛ ويصفه المستودع بأنه تطبيق «للدردشة مع نماذج لغوية كبيرة خاصة ومحلية».',
          'ينسب المستودع الاستدلال إلى MLX Swift من Apple، ويقول الموقع إن التطبيق محسَّن لمعالجات Apple silicon. أُنشئ مستودع الشيفرة في أكتوبر 2024.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**fullmoon تنزيل مجاني من App Store لأجهزة iPhone وiPad وMac؛ ولا يذكر الموقع نسخة لنظام Android أو Windows.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'iPhone وiPad وMac', 'مصدر الحصول عليه': '[fullmoon على App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156)، مجاني' },
          { 'الخيار': 'إصدارات أحدث', 'مصدر الحصول عليه': '[TestFlight](https://testflight.apple.com/join/UdTQvRpf), للإصدارات الأحدث' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[fullmoon.app](https://fullmoon.app)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': '[fullmoon.app/privacy](https://fullmoon.app/privacy)' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[GitHub](https://github.com/mainframecomputer/fullmoon-ios)، ترخيص MIT' },
        ],
        note: 'الإصدار الذي رُوجع: 1.2.0، صدر في 28 يناير 2025 بحسب App Store؛ يبلغ حجم التطبيق 31.6 MB قبل تنزيل أي نموذج، ويتطلب iOS 17.6 أو أحدث، وتصنيفه العمري +17، وهو مدرج بالإنجليزية فقط. يعرض GitHub إصدارات حتى 1.2.3 بتاريخ 27 يناير 2025، أي قبل تاريخ App Store بيوم، فلا يتطابق رقما الإصدار، وتعتمد هذه المراجعة إصدار App Store.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره الموقع أو وصف App Store أو المستودع؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**دردشة على الجهاز.** بحسب الموقع، تعمل النماذج على الجهاز ويعمل التطبيق دون اتصال بالإنترنت؛ وبحسب ملف README يُحفظ سجل الدردشة محليًا.',
          '**قائمة النماذج.** يذكر الموقع Llama 3.2 1B (0.7 GB) و3B (1.8 GB) وDeepSeek-R1-Distill-Qwen-1.5B بدقة 4 بت (1.0 GB) و8 بت (1.9 GB). ويدرج الفرع الرئيسي للمستودع أيضًا Qwen3 4B و8B بدقة 4 بت؛ ولا يُذكر ما إذا كان إصدار App Store 1.2.0 يتضمنها.',
          '**مصدر النماذج.** لا تذكر المصادر كيف تُنزَّل النماذج؛ وتشير معرّفات النماذج في الشيفرة إلى مجموعة mlx-community على Hugging Face.',
          '**التخصيص.** يمكن تغيير السمة والخطوط وموجّه النظام داخل التطبيق.',
          '**الاختصارات.** يتيح إجراء الدردشة مع نموذج محلي أو تمرير مخرجاته إلى إجراءات أخرى في «الاختصارات».',
        ],
        note: 'لا تذكر ملاحظات الإصدار 1.2.0 سوى إضافة دعم نموذجَي DeepSeek-R1-Distill-Qwen-1.5B؛ ونسخ DeepSeek-R1 المقطَّرة نماذج استدلال.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والخصوصية',
        content: [
          '**تقول سياسة الخصوصية، السارية منذ 23 ديسمبر 2024: «لا نجمع أي معلومات منك» و«لا نشارك معلوماتك الشخصية مع أطراف ثالثة».** ويصف الموقع التطبيق بأنه خاص ويقول إن النماذج تعمل محليًا؛ ويذكر ملف README أن سجل الدردشة يُحفظ محليًا.',
          'غير أن السياسة نفسها غير متسقة: فهي تسرد أيضًا أوجه استخدام «المعلومات التي نجمعها»، ومنها «فهم وتحليل كيفية استخدامك fullmoon»، وتنتهي بموافقة على «جمعنا معلوماتك واستخدامها ومشاركتها». ولا تقول ما الذي يُجمع، إن كان يُجمع شيء، ولا تذكر المعالجة على الجهاز إطلاقًا. (النص متاح بالإنجليزية فقط؛ والاقتباسات مترجمة.)',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه إفادات من المطوّر وليست نتائج تدقيق. الشيفرة المصدرية عامة، لكن PromptQuorum لم يقرأها ولم يفحص حركة الشبكة للتطبيق.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**أصحاب أجهزة Apple الذين يريدون أبسط دردشة ممكنة دون اتصال** ويكتفون بنماذج صغيرة.',
          '**المطوّرون والمهتمون بالتجريب** الذين يريدون دراسة تطبيق Swift بترخيص MIT مبني على MLX Swift أو نسخه وتطويره.',
          '**من يقارنون تطبيقات الدردشة دون اتصال لـ iPhone** ويقدّرون المصدر المفتوح أكثر من التحديثات المتكررة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**حالة الصيانة.** ينطبق التحذير في أعلى الصفحة؛ ولم يجد PromptQuorum أي بيان من المطوّر عن استمرار التطوير.',
          '**جودة الإجابات وسرعتها.** لم تُختبر؛ فالمصادر تعطي أحجام النماذج دون الذاكرة المطلوبة ولا عدد الرموز في الثانية، ولذلك لا يُعرف أي iPhone يشغّل أي نموذج.',
          '**تراخيص النماذج.** للنماذج تراخيصها الخاصة (يرتبط الموقع بصفحتي نماذج Meta Llama وDeepSeek)؛ ولم يراجعها PromptQuorum.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)', 'المنصات': 'iOS وAndroid', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'عميل دردشة مفتوح المصدر بمكتبة نماذج خاصة به لـ iPhone وAndroid' },
          { 'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)', 'المنصات': 'iOS وAndroid', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'يضيف أسئلة عن المستندات على الجهاز واختبارات أداء؛ ويعمل على ExecuTorch بدل MLX' },
          { 'التطبيق': '[MLC Chat](/ar/power-local-llm/mlc-chat-review)', 'المنصات': 'iOS وAndroid', 'السعر / الرخصة': 'مجاني / Apache 2.0', 'الفرق الأبرز': 'تطبيق دردشة مفتوح المصدر مبني على MLC LLM؛ وكان آخر تحديث له في سبتمبر 2024' },
        ],
        note: 'fullmoon هو الوحيد بين التطبيقات الأربعة دون نسخة لنظام Android؛ تحقق من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أستطيع تجربة إصدارات أحدث من نسخة App Store؟',
            a: 'يعرض الموقع رابط TestFlight لـ«أحدث الميزات والنماذج»، وقد يتضمن نماذج غير موجودة في نسخة App Store. لم ينضم PromptQuorum إليه.',
          },
          {
            q: 'هل يعمل fullmoon على Mac؟',
            a: 'يذكر الموقع macOS وتُظهر صفحة App Store توافقًا مع Mac. ولم يتحقق PromptQuorum مما إذا كان تطبيق Mac أصليًا أم تطبيق iPad يعمل على Apple silicon.',
          },
          {
            q: 'هل يكلّف شيئًا خارج الولايات المتحدة؟',
            a: 'في متاجر App Store التي جرى الاطلاع عليها في 30 أكتوبر 2026 (ألمانيا وفرنسا وإسبانيا واليابان وكوريا الجنوبية والبرازيل) كان مجانيًا ويعرض الإصدار نفسه 1.2.0.',
          },
          {
            q: 'هل أستطيع تحميل نماذجي الخاصة؟',
            a: 'تصف المصادر قائمة نماذج ثابتة داخل التطبيق ولا تذكر استيراد نماذج أخرى.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'fullmoon طريقة نظيفة ومجانية ومفتوحة المصدر للدردشة دون اتصال مع نماذج صغيرة على iPhone أو iPad أو Mac، مع لمسات مفيدة مثل إجراء في «الاختصارات» وموجّه نظام قابل للتعديل. في المقابل لا إصدارات منذ يناير 2025، وسياسة الخصوصية تناقض نفسها، وقائمة النماذج قصيرة، ولم يمكن التحقق هنا من جودة الإجابات وسرعتها. يناسب من يقدّرون تطبيقًا بسيطًا بترخيص MIT ويقبلون أنه قد لا يكون مصانًا بعد الآن؛ ومن يحتاج إلى أكثر من دردشة أساسية أو إلى تحديثات منتظمة فعليه مقارنة البدائل أعلاه أولًا.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع fullmoon](https://fullmoon.app) — قائمة الميزات وأحجام النماذج والمنصات وروابط التنزيل، جرى الاطلاع عليه في 30 أكتوبر 2026.',
          '[fullmoon على App Store](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156) — الإصدار وتاريخ الصدور والحجم والمتطلبات وأسعار المتاجر، جرى الاطلاع عليها في 30 أكتوبر 2026.',
          '[سياسة خصوصية fullmoon](https://fullmoon.app/privacy) — سارية منذ 23 ديسمبر 2024.',
          '[fullmoon-ios على GitHub](https://github.com/mainframecomputer/fullmoon-ios) — ملف README وملف ترخيص MIT والإصدارات وسجل الالتزامات، جرى الاطلاع عليها في 30 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لنظامي iOS وAndroid.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مفتوح المصدر دون اتصال مع أسئلة عن المستندات على الجهاز.',
          '[مراجعة MLC Chat](/ar/power-local-llm/mlc-chat-review) — تطبيق دردشة مفتوح المصدر على الجهاز مبني على MLC LLM.',
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — قائمة أوسع لـ iPhone.',
          '[مقارنة مساعدي الدردشة](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة الفئة التي تنتمي إليها هذه المراجعة.',
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
    heroImage: '/images/fullmoon-review-hero-ja.webp',
    title: 'fullmoonレビュー：iPhone・iPad・Mac向け無料オフラインAIチャット',
    seoTitle: 'fullmoonレビュー：iPhone・Mac向けAIチャット',
    intro:
      'fullmoonは[Mainframe Computer, Inc.](https://mainframe.inc)が提供する無料のチャットアプリで、AppleのMLXフレームワークを使って小型の言語モデルをiPhone・iPad・Macで実行し、完全オフラインで動作するとしています。ソースコードは[GitHub](https://github.com/mainframecomputer/fullmoon-ios)でMITライセンスのもとに公開されています。本レビューは、提供元のWebサイト、App Storeの掲載情報、プライバシーポリシー、リポジトリを2026年10月30日に確認した内容に基づいており、PromptQuorumはアプリを実機で検証していません。',
    metaDescription:
      'fullmoonレビュー：Apple MLXで動くMITライセンスの無料オフラインAIチャット（iPhone・iPad・Mac）。2025年1月以降リリースなし、利用前に確認を。',
    twitterDescription:
      'fullmoonレビュー：Apple端末向けの無料オフラインAIチャット。2025年初頭以降リリースなし。モデル、プライバシー、未確認の点を整理。',
    audience:
      'シンプルなオフラインチャットアプリを探しているiPhone・iPad・Macユーザーで、情報源が確認していること、提供元が主張しているだけのこと、最終更新からの経過期間を知りたい方。',
    readTime: '5分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'fullmoon review',
    targetKeywords: [
      'fullmoon レビュー',
      'fullmoon アプリ iOS',
      'オフラインAIチャット iPhone',
      'ローカルLLMアプリ iPhone MLX',
      'オープンソース AIチャット iOS',
      'fullmoon local intelligence',
    ],
    current_models_mentioned: ['Llama 3.2', 'DeepSeek-R1-Distill-Qwen', 'Qwen3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple silicon'],
    leadAnswerBlock:
      '**警告：fullmoonは2025年1月28日（App Storeのバージョン1.2.0）以降リリースがなく、2025年5月5日以降コードの変更もないため、メンテナンスが終了している可能性があります。頼る前にお使いのデバイスで動作するかご確認ください。** Mainframe Computer, Inc.が提供する無料のチャットアプリで、小型の言語モデルをiPhone・iPad・Macで実行します。本ページの記述はすべて、提供元のWebサイト、App Storeの掲載情報、プライバシーポリシー、公開リポジトリに基づいています。',
    quickAnswerTop: {
      ja: {
        question: 'fullmoonはiPhoneで本当にオフラインのAIチャットを実行できますか？',
        answer:
          '提供元によれば可能です。モデルはAppleのMLXを使って端末上で動作し、インターネット接続なしで使えて、チャット履歴は端末内に保存されます。PromptQuorumはこれを検証していません。',
        bullets: [
          'Llama 3.2やDeepSeek-R1の蒸留モデルなどの小型モデルから選べます。',
          'テーマ、フォント、システムプロンプトを変更できます。',
          'ショートカットのアクションで、ローカルモデルの出力を他のアクションに渡せます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'fullmoonとは', anchor: 'what-is-fullmoon' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'データの流れとプライバシー', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替ツール', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'fullmoonは、AppleのMLXで端末上で動く小型の言語モデルとチャットできる、MITライセンスの無料iPhone・iPad・Macアプリです。',
          },
          {
            type: 'plain-terms',
            text: '数種類の小型モデルから1つを選び、普通のアシスタントと同じようにチャットします。処理はクラウドではなくお使いの端末で行われます。',
          },
        ],
        items: [
          'メンテナンス：リポジトリの最後の変更でQwen3モデルが追加されましたが、1.2.0のリリースノートとWebサイトには記載がありません。',
          'ライセンス：LICENSEファイルによればMIT。Webサイト自体は「オープンソース」としか書いていません。',
          '費用：ダウンロードは無料です。',
          '提供元：Mainframe Computer, Inc.。App Storeの掲載は英語のみです。',
          '対応端末：iOS 17.6以降。WebサイトはvisionOSにも言及しています。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、Webサイト、App Storeの掲載情報、プライバシーポリシー、公開リポジトリを2026年10月30日に確認した内容に基づいています。PromptQuorumはアプリをインストールも計測もしていないため、回答品質と速度は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-fullmoon',
        title: 'fullmoonとは',
        content: [
          '**fullmoonは、サーバーではなくお使いのApple端末上で動く言語モデルと会話するためのチャットアプリです。** App Storeでは「fullmoon: local intelligence」としてユーティリティに掲載され、販売元はMainframe Computer, Inc.、初回リリースは2025年1月13日です。リポジトリでは「プライベートでローカルな大規模言語モデルとチャットする」アプリと説明されています。',
          'リポジトリは推論にAppleのMLX Swiftを使うと明記しており、Webサイトはアプリが Appleシリコンに最適化されていると述べています。コードのリポジトリは2024年10月に作成されました。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**fullmoonはiPhone・iPad・Mac向けのApp Store無料ダウンロードで、WebサイトにAndroid版やWindows版の記載はありません。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          { '項目': 'iPhone・iPad・Mac', '入手方法': '[App Storeのfullmoon](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156)（無料）' },
          { '項目': '新しいビルド', '入手方法': '[TestFlight](https://testflight.apple.com/join/UdTQvRpf), 新しいビルド向け' },
          { '項目': 'Webサイト', '入手方法': '[fullmoon.app](https://fullmoon.app)' },
          { '項目': 'プライバシーポリシー', '入手方法': '[fullmoon.app/privacy](https://fullmoon.app/privacy)' },
          { '項目': 'ソースコード', '入手方法': '[GitHub](https://github.com/mainframecomputer/fullmoon-ios)（MITライセンス）' },
        ],
        note: '確認したバージョン：1.2.0（App Storeによれば2025年1月28日リリース）。アプリのサイズはモデルをダウンロードする前で31.6 MB、iOS 17.6以降が必要で、年齢区分は17+、掲載言語は英語のみです。GitHubには2025年1月27日付けの1.2.3までのリリースが表示され、App Storeの日付より1日早いため、2つのバージョン番号は一致しません。本レビューはApp Storeのバージョンを採用しています。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべてWebサイト、App Storeの説明、またはリポジトリに基づくもので、独自に検証したものではありません。**',
        ],
        items: [
          '**端末上でのチャット。** Webサイトによれば、モデルは端末上で動作し、インターネット接続なしで使えます。READMEによれば、チャット履歴は端末内に保存されます。',
          '**モデル一覧。** Webサイトに記載されているのは、Llama 3.2 1B（0.7 GB）と3B（1.8 GB）、4ビットのDeepSeek-R1-Distill-Qwen-1.5B（1.0 GB）と8ビット版（1.9 GB）です。リポジトリのmainブランチにはさらに4ビットのQwen3 4Bと8Bが載っていますが、App Storeの1.2.0に含まれるかは不明です。',
          '**モデルの入手元。** モデルのダウンロード方法は情報源に書かれていません。コード内のモデルIDはHugging Faceのmlx-communityコレクションを指しています。',
          '**カスタマイズ。** アプリ内でテーマ、フォント、システムプロンプトを変更できます。',
          '**ショートカット。** ローカルモデルとチャットしたり、その出力を他のショートカットのアクションに渡したりできるアクションがあります。',
        ],
        note: '1.2.0のリリースノートに書かれているのは、2つのDeepSeek-R1-Distill-Qwen-1.5Bモデルへの対応追加のみです。DeepSeek-R1の蒸留モデルは推論モデルです。',
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとプライバシー',
        content: [
          '**プライバシーポリシー（2024年12月23日施行）には「当社はお客様からいかなる情報も収集しません」「個人情報を第三者と共有しません」と書かれています。** Webサイトはアプリを「プライベート」とし、モデルはローカルで動作すると述べ、READMEはチャット履歴が端末内に保存されるとしています。',
          'ただし同じポリシーには矛盾があります。「当社が収集する情報」の利用目的として「fullmoonの利用状況の把握と分析」などが挙げられ、末尾では「情報の収集、利用、共有」への同意が求められています。何が収集されるのか（収集があるとすれば）は書かれておらず、端末内処理にも触れていません。（ポリシーは英語のみで、引用は翻訳です。）',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは提供元の申告であり、監査結果ではありません。ソースコードは公開されていますが、PromptQuorumはコードを読んでおらず、アプリの通信も調査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**できるだけシンプルなオフラインチャットを求めるApple端末ユーザー**で、小型モデルで十分な方。',
          '**開発者や試してみたい方**で、MLX Swiftをベースにした、MITライセンスのSwiftアプリを読んだりフォークしたりしたい方。',
          '**iPhone向けオフラインチャットアプリを比較している方**で、頻繁な更新よりオープンソースを重視する方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**メンテナンスの状況。** ページ冒頭の警告が当てはまります。開発が続くかどうかについて、提供元の声明はPromptQuorumでは見つかりませんでした。',
          '**回答の品質と速度。** 未検証です。情報源にあるのはモデルのサイズだけで、必要なRAMや毎秒トークン数はなく、どのiPhoneでどのモデルが動くかは不明です。',
          '**モデルのライセンス。** 各モデルには独自のライセンスがあります（WebサイトはMeta LlamaとDeepSeekのモデルページにリンクしています）。PromptQuorumは確認していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)', '対応プラットフォーム': 'iOS、Android', '価格／ライセンス': '無料／MIT', '主な違い': '独自のモデルライブラリを持つオープンソースのチャットクライアント（iPhone・Android）' },
          { 'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)', '対応プラットフォーム': 'iOS、Android', '価格／ライセンス': '無料／MIT', '主な違い': '端末内の文書Q&Aとベンチマークを追加。MLXではなくExecuTorchで動作' },
          { 'アプリ': '[MLC Chat](/ja/power-local-llm/mlc-chat-review)', '対応プラットフォーム': 'iOS、Android', '価格／ライセンス': '無料／Apache 2.0', '主な違い': 'MLC LLMベースのオープンソースのチャットアプリ。最終更新は2024年9月' },
        ],
        note: '4つのうち、Android版がないのはfullmoonだけです。各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'App Store版より新しいビルドを試せますか？',
            a: 'Webサイトは「最新の機能とモデル」向けにTestFlightのリンクを案内しており、App Store版にないモデルが含まれる可能性があります。PromptQuorumは参加していません。',
          },
          {
            q: 'fullmoonはMacで動きますか？',
            a: 'WebサイトはmacOSに言及し、App Storeの掲載情報もMac対応を示しています。ネイティブのMacアプリなのか、AppleシリコンでiPad版が動くのかは確認していません。',
          },
          {
            q: '米国以外では料金がかかりますか？',
            a: '2026年10月30日に確認したApp Storeの各ストア（ドイツ、フランス、スペイン、日本、韓国、ブラジル）では、無料で同じ1.2.0が表示されていました。',
          },
          {
            q: '独自のモデルを読み込めますか？',
            a: '情報源はアプリ内の固定のモデル一覧を説明しており、他のモデルをインポートできるとは書いていません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'fullmoonは、iPhone・iPad・Macで小型モデルとオフラインでチャットできる、すっきりした無料のオープンソースアプリで、ショートカットのアクションや編集可能なシステムプロンプトといった便利な機能もあります。一方で、2025年1月以降リリースがなく、プライバシーポリシーは内容が矛盾し、モデル一覧は短く、回答の品質と速度は本レビューでは確認できませんでした。MITライセンスのシンプルなアプリを評価し、メンテナンスが終了している可能性を受け入れられる方に向いています。基本的なチャット以上の機能や定期的な更新が必要な方は、まず上記の代替ツールを比較してください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[fullmoon公式サイト](https://fullmoon.app) — 機能一覧、モデルサイズ、対応プラットフォーム、ダウンロードリンク（2026年10月30日確認）。',
          '[App Storeのfullmoon](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156) — バージョン、リリース日、サイズ、動作要件、各ストアの価格（2026年10月30日確認）。',
          '[fullmoonのプライバシーポリシー](https://fullmoon.app/privacy) — 2024年12月23日施行。',
          '[GitHubのfullmoon-ios](https://github.com/mainframecomputer/fullmoon-ios) — README、MITライセンスファイル、リリース、コミット履歴（2026年10月30日確認）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの無料のオープンソース端末内チャットクライアント。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — 端末内の文書Q&Aを備えたオープンソースのオフラインチャットアプリ。',
          '[MLC Chatレビュー](/ja/power-local-llm/mlc-chat-review) — MLC LLMベースのオープンソースの端末内チャットアプリ。',
          '[iPhone向けローカルLLMアプリ おすすめ2026](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — より広いiPhone向けまとめ。',
          '[チャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared) — 本レビューが属するカテゴリ比較。',
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
    heroImage: '/images/fullmoon-review-hero-zh.webp',
    title: 'fullmoon 评测：适用于 iPhone、iPad 和 Mac 的免费离线 AI 聊天应用',
    seoTitle: 'fullmoon 评测：iPhone 与 Mac 离线聊天',
    intro:
      'fullmoon 是 [Mainframe Computer, Inc.](https://mainframe.inc) 推出的免费聊天应用，借助苹果的 MLX 框架在 iPhone、iPad 或 Mac 上运行小型语言模型，并称可完全离线使用。源代码以 MIT 许可证发布在 [GitHub](https://github.com/mainframecomputer/fullmoon-ios)。本评测基于开发者网站、App Store 页面、隐私政策和代码仓库，核查日期为2026年10月30日；PromptQuorum 未对该应用做实际测试。',
    metaDescription:
      'fullmoon 评测：基于 Apple MLX、MIT 许可的免费离线 AI 聊天应用，支持 iPhone、iPad 和 Mac。2025 年 1 月后无新版本，使用前请先确认。',
    twitterDescription:
      'fullmoon 评测：苹果设备上的免费离线 AI 聊天应用，2025 年初以来无新版本。涵盖模型、隐私以及来源未能证实的内容。',
    audience:
      '想要简单离线聊天应用的 iPhone、iPad 和 Mac 用户，需要了解哪些内容有来源佐证、哪些只是开发者的说法，以及应用多久没有更新。',
    readTime: '阅读约5分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'fullmoon review',
    targetKeywords: [
      'fullmoon 评测',
      'fullmoon 应用 iOS',
      'iPhone 离线 AI 聊天',
      'iPhone 本地 LLM 应用 MLX',
      '开源 AI 聊天 iOS',
      'fullmoon local intelligence',
    ],
    current_models_mentioned: ['Llama 3.2', 'DeepSeek-R1-Distill-Qwen', 'Qwen3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple silicon'],
    leadAnswerBlock:
      '**警告：fullmoon 自2025年1月28日（App Store 1.2.0 版）起未再发布新版本，自2025年5月5日起代码也无更改，可能已无人维护——请先确认它能在你的设备上运行再决定是否依赖。** 这是 Mainframe Computer, Inc. 推出的免费聊天应用，可在 iPhone、iPad 或 Mac 上运行小型语言模型。本文所有说法均来自开发者网站、App Store 页面、隐私政策和公开代码仓库。',
    quickAnswerTop: {
      zh: {
        question: 'fullmoon 真的能在 iPhone 上离线运行 AI 聊天吗？',
        answer:
          '据开发者称可以：模型借助苹果的 MLX 在设备上运行，无需联网即可使用，聊天记录保存在本地。PromptQuorum 未对此进行测试。',
        bullets: [
          '可在 Llama 3.2、DeepSeek-R1 蒸馏版等小型模型中选择。',
          '主题、字体和系统提示词均可修改。',
          '“快捷指令”动作可把本地模型的输出交给其他动作。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'fullmoon 是什么？', anchor: 'what-is-fullmoon' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '数据流向与隐私', anchor: 'privacy' },
      { label: '适合哪些人', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'fullmoon 是一款免费的 MIT 许可 iPhone、iPad 和 Mac 应用，借助苹果的 MLX 与在设备上运行的小型语言模型聊天。',
          },
          {
            type: 'plain-terms',
            text: '你从少数几个小型模型中选一个，像使用普通助手一样与它聊天，运算在你自己的设备上完成，而不是在云服务上。',
          },
        ],
        items: [
          '维护情况：仓库最近一次改动加入了 Qwen3 模型，而 1.2.0 版更新说明和官网均未提及。',
          '许可证：根据 LICENSE 文件为 MIT；官网本身只写“开源”。',
          '费用：可免费下载。',
          '开发者：Mainframe Computer, Inc.；App Store 页面仅提供英文。',
          '设备：需要 iOS 17.6 或更高版本；官网还提到 visionOS。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于官网、App Store 页面、隐私政策和公开代码仓库，核查日期为2026年10月30日。PromptQuorum 未安装也未实测该应用，因此不评价回答质量和速度。',
          },
        ],
      },
      overview: {
        id: 'what-is-fullmoon',
        title: 'fullmoon 是什么？',
        content: [
          '**fullmoon 是一款聊天应用，让你与运行在自己苹果设备上（而非服务器上）的语言模型对话。** App Store 将其列为“fullmoon: local intelligence”，分类为“工具”，销售方为 Mainframe Computer, Inc.，首次发布于2025年1月13日；代码仓库将其描述为可与“私密的本地大语言模型聊天”的应用。',
          '仓库说明推理基于苹果的 MLX Swift，官网称应用针对 Apple 芯片优化。代码仓库创建于 2024 年 10 月。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**fullmoon 可在 App Store 免费下载，适用于 iPhone、iPad 和 Mac；官网未提及 Android 或 Windows 版本。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          { '选项': 'iPhone、iPad、Mac', '获取方式': '[App Store 上的 fullmoon](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156)，免费' },
          { '选项': '较新的构建', '获取方式': '[TestFlight](https://testflight.apple.com/join/UdTQvRpf), 较新的构建' },
          { '选项': '官网', '获取方式': '[fullmoon.app](https://fullmoon.app)' },
          { '选项': '隐私政策', '获取方式': '[fullmoon.app/privacy](https://fullmoon.app/privacy)' },
          { '选项': '源代码', '获取方式': '[GitHub](https://github.com/mainframecomputer/fullmoon-ios)，MIT 许可证' },
        ],
        note: '评测版本：1.2.0，据 App Store 发布于2025年1月28日；下载模型之前应用大小为 31.6 MB，需要 iOS 17.6 或更高版本，年龄分级为 17+，仅提供英文页面。GitHub 显示的版本最高为 1.2.3，日期为2025年1月27日，比 App Store 的日期早一天，两个版本号对不上，因此本评测采用 App Store 的版本。',
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**下列各项均来自官网、App Store 说明或代码仓库，没有一项经过独立测试。**',
        ],
        items: [
          '**设备端聊天。** 据官网，模型在设备上运行，无需联网即可使用；据 README，聊天记录保存在本地。',
          '**模型列表。** 官网列出 Llama 3.2 1B（0.7 GB）和 3B（1.8 GB），以及 4 位（1.0 GB）和 8 位（1.9 GB）的 DeepSeek-R1-Distill-Qwen-1.5B。仓库主分支还列出 4 位的 Qwen3 4B 和 8B；App Store 的 1.2.0 版是否包含它们并未说明。',
          '**模型来源。** 各来源没有说明模型如何下载；代码中的模型 ID 指向 Hugging Face 上的 mlx-community 集合。',
          '**个性化。** 可在应用内修改主题、字体和系统提示词。',
          '**快捷指令。** 提供一个动作，可与本地模型聊天，或把其输出交给其他快捷指令动作。',
        ],
        note: '1.2.0 版的更新说明只提到新增对两个 DeepSeek-R1-Distill-Qwen-1.5B 模型的支持；DeepSeek-R1 蒸馏版属于推理模型。',
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与隐私',
        content: [
          '**隐私政策（自2024年12月23日起生效）写道：“我们不会收集您的任何信息”“我们不会与第三方共享您的个人信息”。** 官网称该应用私密、模型在本地运行；README 称聊天记录保存在本地。',
          '不过这份政策前后并不一致：它还列出了“我们收集的信息”的用途，包括“了解并分析您如何使用 fullmoon”，结尾又要求用户同意“我们对您信息的收集、使用和共享”。它没有说明究竟收集了什么（如果有的话），也完全没有提到设备端处理。（政策只有英文版，引文为译文。）',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是开发者的声明，而非审计结果。源代码是公开的，但 PromptQuorum 没有阅读代码，也没有检查应用的网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**想要尽可能简单的离线聊天的苹果设备用户**，并且能接受小型模型。',
          '**开发者和爱好者**，想研究或复刻一个基于 MLX Swift 的 MIT 许可 Swift 应用。',
          '**正在比较 iPhone 离线聊天应用的人**，更看重开源而非频繁更新。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**维护状态。** 页面顶部的警告适用；PromptQuorum 没有找到开发者关于是否继续开发的任何声明。',
          '**回答质量与速度。** 未测试；来源只给出模型大小，没有所需内存或每秒生成的 token 数，因此不清楚哪些 iPhone 能运行哪个模型。',
          '**模型许可证。** 这些模型各有自己的许可证（官网链接到 Meta Llama 和 DeepSeek 的模型页面）；PromptQuorum 未审阅。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / MIT', '主要区别': '带有自有模型库的开源聊天客户端，支持 iPhone 和 Android' },
          { '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / MIT', '主要区别': '增加设备端文档问答和基准测试；基于 ExecuTorch 而非 MLX' },
          { '应用': '[MLC Chat](/zh/power-local-llm/mlc-chat-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / Apache 2.0', '主要区别': '基于 MLC LLM 的开源聊天应用；最近一次更新在 2024 年 9 月' },
        ],
        note: '四款应用中只有 fullmoon 没有 Android 版本；请在各应用自己的页面上确认最新的价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我能试用比 App Store 版本更新的构建吗？',
            a: '官网提供了 TestFlight 链接，用于体验“最新功能和模型”，其中可能包含 App Store 版本没有的模型。PromptQuorum 未加入。',
          },
          {
            q: 'fullmoon 能在 Mac 上运行吗？',
            a: '官网提到 macOS，App Store 页面也显示兼容 Mac。PromptQuorum 未核实它是原生 Mac 应用，还是在 Apple 芯片上运行的 iPad 版应用。',
          },
          {
            q: '在美国以外使用要付费吗？',
            a: '在2026年10月30日核查的 App Store 各地区商店（德国、法国、西班牙、日本、韩国和巴西）中，它均为免费，且显示同一版本 1.2.0。',
          },
          {
            q: '我能加载自己的模型吗？',
            a: '各来源描述的是应用内固定的模型列表，没有提到导入其他模型。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'fullmoon 是在 iPhone、iPad 或 Mac 上与小型模型离线聊天的一种简洁、免费且开源的方式，还有快捷指令动作和可编辑系统提示词等实用设计。不利之处是：2025 年 1 月以来没有新版本，隐私政策自相矛盾，模型列表很短，回答的质量和速度在此无法核实。它适合看重简单、MIT 许可应用，并接受其可能不再维护的人；如果需要基础聊天以外的功能或定期更新，应先比较上面的替代方案。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[fullmoon 官网](https://fullmoon.app) — 功能列表、模型大小、平台和下载链接，核查于2026年10月30日。',
          '[App Store 上的 fullmoon](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156) — 版本、发布日期、大小、运行要求和各地区商店价格，核查于2026年10月30日。',
          '[fullmoon 隐私政策](https://fullmoon.app/privacy) — 自2024年12月23日起生效。',
          '[GitHub 上的 fullmoon-ios](https://github.com/mainframecomputer/fullmoon-ios) — README、MIT 许可证文件、发布版本和提交历史，核查于2026年10月30日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 面向 iOS 和 Android 的免费开源设备端聊天客户端。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 带有设备端文档问答的开源离线聊天应用。',
          '[MLC Chat 评测](/zh/power-local-llm/mlc-chat-review) — 基于 MLC LLM 的开源设备端聊天应用。',
          '[2026 年 iPhone 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 范围更广的 iPhone 榜单。',
          '[聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared) — 本评测所属的分类对比。',
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
    heroImage: '/images/fullmoon-review-hero-ko.webp',
    title: 'fullmoon 리뷰: iPhone·iPad·Mac용 무료 오프라인 AI 채팅 앱',
    seoTitle: 'fullmoon 리뷰: 무료 오프라인 AI 채팅 앱',
    intro:
      'fullmoon은 [Mainframe Computer, Inc.](https://mainframe.inc)가 만든 무료 채팅 앱으로, Apple의 MLX 프레임워크로 소형 언어 모델을 iPhone, iPad, Mac에서 실행하며 완전한 오프라인 동작을 내세웁니다. 소스 코드는 [GitHub](https://github.com/mainframecomputer/fullmoon-ios)에 MIT 라이선스로 공개되어 있습니다. 이 리뷰는 개발사 웹사이트, App Store 페이지, 개인정보 처리방침, 저장소를 2026년 10월 30일에 확인한 내용을 바탕으로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription:
      'fullmoon 리뷰: Apple MLX 기반 MIT 라이선스 무료 오프라인 AI 채팅 앱(iPhone·iPad·Mac). 2025년 1월 이후 릴리스가 없으니 사용 전 확인하십시오.',
    twitterDescription:
      'fullmoon 리뷰: 2025년 초 이후 릴리스가 없는 Apple 기기용 무료 오프라인 AI 채팅 앱. 모델, 개인정보, 확인되지 않은 사항을 정리했습니다.',
    audience:
      '간단한 오프라인 채팅 앱을 찾는 iPhone·iPad·Mac 사용자로서, 출처가 확인한 내용과 개발사의 주장일 뿐인 내용, 마지막 업데이트 시점을 알고 싶은 분.',
    readTime: '5분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'fullmoon review',
    targetKeywords: [
      'fullmoon 리뷰',
      'fullmoon 앱 iOS',
      'iPhone 오프라인 AI 채팅',
      'iPhone 로컬 LLM 앱 MLX',
      '오픈소스 AI 채팅 iOS',
      'fullmoon local intelligence',
    ],
    current_models_mentioned: ['Llama 3.2', 'DeepSeek-R1-Distill-Qwen', 'Qwen3'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple silicon'],
    leadAnswerBlock:
      '**경고: fullmoon은 2025년 1월 28일(App Store 버전 1.2.0) 이후 릴리스가 없고 2025년 5월 5일 이후 코드 변경도 없어 유지보수가 중단되었을 수 있습니다. 의존하기 전에 사용 중인 기기에서 작동하는지 확인하십시오.** Mainframe Computer, Inc.의 무료 채팅 앱으로, 소형 언어 모델을 iPhone, iPad, Mac에서 실행합니다. 여기 적힌 내용은 모두 개발사 웹사이트, App Store 페이지, 개인정보 처리방침, 공개 저장소에서 가져온 것입니다.',
    quickAnswerTop: {
      ko: {
        question: 'fullmoon은 iPhone에서 정말 오프라인으로 AI 채팅을 실행합니까?',
        answer:
          '개발사에 따르면 그렇습니다. 모델은 Apple의 MLX로 기기에서 실행되고, 인터넷 연결 없이 동작하며, 채팅 기록은 기기에 저장됩니다. PromptQuorum은 이를 테스트하지 않았습니다.',
        bullets: [
          'Llama 3.2, DeepSeek-R1 증류 모델 등 소형 모델 중에서 고를 수 있습니다.',
          '테마, 글꼴, 시스템 프롬프트를 바꿀 수 있습니다.',
          '단축어 동작으로 로컬 모델의 출력을 다른 동작에 넘길 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'fullmoon이란?', anchor: 'what-is-fullmoon' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '데이터 흐름과 개인정보', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 제품과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'fullmoon은 Apple의 MLX로 기기에서 실행되는 소형 언어 모델과 채팅하는, MIT 라이선스의 무료 iPhone·iPad·Mac 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '몇 가지 소형 모델 중 하나를 골라 일반 어시스턴트처럼 채팅하며, 연산은 클라우드 서비스가 아니라 사용자의 기기에서 이루어집니다.',
          },
        ],
        items: [
          '유지보수: 저장소의 마지막 변경은 Qwen3 모델을 추가했으며, 1.2.0 릴리스 노트와 웹사이트에는 이 모델이 없습니다.',
          '라이선스: LICENSE 파일 기준 MIT이며, 웹사이트 자체는 "오픈소스"라고만 적었습니다.',
          '비용: 무료로 내려받을 수 있습니다.',
          '개발사: Mainframe Computer, Inc.이며 App Store 페이지는 영어로만 제공됩니다.',
          '기기: iOS 17.6 이상이며, 웹사이트는 visionOS도 언급합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 웹사이트, App Store 페이지, 개인정보 처리방침, 공개 저장소를 2026년 10월 30일에 확인한 내용을 바탕으로 합니다. PromptQuorum은 앱을 설치하거나 측정하지 않았으므로 답변 품질과 속도는 평가하지 않습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-fullmoon',
        title: 'fullmoon이란?',
        content: [
          '**fullmoon은 서버가 아니라 사용자의 Apple 기기에서 실행되는 언어 모델과 대화하는 채팅 앱입니다.** App Store에는 "fullmoon: local intelligence"라는 이름으로 유틸리티 분류에 올라 있고, 판매자는 Mainframe Computer, Inc.이며 첫 출시일은 2025년 1월 13일입니다. 저장소는 이 앱을 "비공개 로컬 대규모 언어 모델과 채팅"하는 앱으로 설명합니다.',
          '저장소는 추론에 Apple의 MLX Swift를 쓴다고 밝히며, 웹사이트는 앱이 Apple 실리콘에 최적화되어 있다고 설명합니다. 코드 저장소는 2024년 10월에 만들어졌습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**fullmoon은 iPhone, iPad, Mac용 App Store 무료 다운로드이며, 웹사이트에는 Android나 Windows 버전이 언급되어 있지 않습니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          { '옵션': 'iPhone, iPad, Mac', '입수 방법': '[App Store의 fullmoon](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156), 무료' },
          { '옵션': '더 새로운 빌드', '입수 방법': '[TestFlight](https://testflight.apple.com/join/UdTQvRpf), 더 새로운 빌드용' },
          { '옵션': '웹사이트', '입수 방법': '[fullmoon.app](https://fullmoon.app)' },
          { '옵션': '개인정보 처리방침', '입수 방법': '[fullmoon.app/privacy](https://fullmoon.app/privacy)' },
          { '옵션': '소스 코드', '입수 방법': '[GitHub](https://github.com/mainframecomputer/fullmoon-ios), MIT 라이선스' },
        ],
        note: '확인한 버전: 1.2.0(App Store 기준 2025년 1월 28일 출시). 앱 크기는 모델을 내려받기 전 31.6 MB이고, iOS 17.6 이상이 필요하며, 연령 등급은 17+이고, 영어로만 등록되어 있습니다. GitHub에는 2025년 1월 27일 자 1.2.3까지의 릴리스가 보이는데 이는 App Store 날짜보다 하루 앞서므로 두 버전 번호는 맞지 않으며, 이 리뷰는 App Store 버전을 따릅니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 웹사이트, App Store 설명, 저장소에서 가져온 것이며 독립적으로 테스트한 것은 없습니다.**',
        ],
        items: [
          '**기기 내 채팅.** 웹사이트에 따르면 모델은 기기에서 실행되고 인터넷 연결 없이 동작하며, README에 따르면 채팅 기록은 기기에 저장됩니다.',
          '**모델 목록.** 웹사이트에는 Llama 3.2 1B(0.7 GB)와 3B(1.8 GB), 4비트(1.0 GB) 및 8비트(1.9 GB) DeepSeek-R1-Distill-Qwen-1.5B가 나와 있습니다. 저장소 main 브랜치에는 4비트 Qwen3 4B와 8B도 있으나, App Store 1.2.0 빌드에 포함되는지는 밝혀져 있지 않습니다.',
          '**모델 출처.** 모델을 어떻게 내려받는지는 출처에 나와 있지 않으며, 코드의 모델 ID는 Hugging Face의 mlx-community 컬렉션을 가리킵니다.',
          '**개인 설정.** 앱에서 테마, 글꼴, 시스템 프롬프트를 바꿀 수 있습니다.',
          '**단축어.** 로컬 모델과 채팅하거나 그 출력을 다른 단축어 동작에 넘기는 동작이 있습니다.',
        ],
        note: '1.2.0 릴리스 노트에는 두 DeepSeek-R1-Distill-Qwen-1.5B 모델 지원 추가만 적혀 있으며, DeepSeek-R1 증류 모델은 추론 모델입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 개인정보',
        content: [
          '**2024년 12월 23일부터 시행되는 개인정보 처리방침에는 "당사는 귀하로부터 어떤 정보도 수집하지 않습니다"와 "귀하의 개인정보를 제3자와 공유하지 않습니다"라고 적혀 있습니다.** 웹사이트는 앱을 비공개로 소개하며 모델이 로컬에서 실행된다고 하고, README는 채팅 기록이 기기에 저장된다고 합니다.',
          '그러나 같은 방침이 일관되지 않습니다. "당사가 수집하는 정보"의 용도로 "fullmoon 사용 방식의 파악과 분석" 등을 나열하고, 마지막에는 "정보의 수집, 사용 및 공유"에 대한 동의를 요구합니다. 무엇이 수집되는지(수집이 있다면)는 밝히지 않으며 기기 내 처리에 대해서는 전혀 언급하지 않습니다. (방침은 영어로만 제공되며 인용문은 번역입니다.)',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 개발사의 선언이며 감사 결과가 아닙니다. 소스 코드는 공개되어 있지만 PromptQuorum은 코드를 읽지 않았고 앱의 네트워크 트래픽도 점검하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**가능한 한 간단한 오프라인 채팅을 원하는 Apple 기기 사용자**로서 소형 모델로 충분한 분.',
          '**개발자와 실험을 즐기는 분**으로서 MLX Swift 기반의 MIT 라이선스 Swift 앱을 공부하거나 포크하려는 분.',
          '**iPhone용 오프라인 채팅 앱을 비교하는 분**으로서 잦은 업데이트보다 오픈소스를 중시하는 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**유지보수 상태.** 페이지 상단의 경고가 적용됩니다. 개발이 계속되는지에 대한 개발사의 공식 입장은 PromptQuorum이 찾지 못했습니다.',
          '**답변 품질과 속도.** 테스트하지 않았습니다. 출처에는 모델 크기만 있고 필요한 RAM이나 초당 토큰 수는 없어, 어떤 iPhone에서 어떤 모델이 돌아가는지 알 수 없습니다.',
          '**모델 라이선스.** 각 모델에는 자체 라이선스가 있으며(웹사이트는 Meta Llama와 DeepSeek 모델 페이지로 연결됨), PromptQuorum은 이를 검토하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이점'],
        rows: [
          { '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': '자체 모델 라이브러리를 갖춘 iPhone·Android용 오픈소스 채팅 클라이언트' },
          { '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / MIT', '핵심 차이점': '기기 내 문서 Q&A와 벤치마크를 추가하며, MLX가 아닌 ExecuTorch로 동작' },
          { '앱': '[MLC Chat](/ko/power-local-llm/mlc-chat-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / Apache 2.0', '핵심 차이점': 'MLC LLM 기반 오픈소스 채팅 앱이며 마지막 업데이트는 2024년 9월' },
        ],
        note: '네 앱 중 Android 버전이 없는 것은 fullmoon뿐입니다. 각 앱의 최신 가격, 라이선스, 플랫폼은 해당 앱 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'App Store 버전보다 새로운 빌드를 써 볼 수 있습니까?',
            a: '웹사이트는 "최신 기능과 모델"용 TestFlight 링크를 제공하며, App Store 빌드에 없는 모델이 들어 있을 수 있습니다. PromptQuorum은 참여하지 않았습니다.',
          },
          {
            q: 'fullmoon은 Mac에서 작동합니까?',
            a: '웹사이트는 macOS를 언급하고 App Store 페이지도 Mac 호환을 표시합니다. 네이티브 Mac 앱인지, Apple 실리콘에서 실행되는 iPad 앱인지는 PromptQuorum이 확인하지 않았습니다.',
          },
          {
            q: '미국 밖에서는 비용이 듭니까?',
            a: '2026년 10월 30일에 확인한 App Store 스토어(독일, 프랑스, 스페인, 일본, 대한민국, 브라질)에서는 모두 무료였고 같은 버전 1.2.0이 표시되었습니다.',
          },
          {
            q: '내 모델을 불러올 수 있습니까?',
            a: '출처는 앱 안의 고정된 모델 목록을 설명하며 다른 모델을 가져오는 기능은 언급하지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'fullmoon은 iPhone, iPad, Mac에서 소형 모델과 오프라인으로 채팅하는 깔끔한 무료 오픈소스 방법이며, 단축어 동작과 편집 가능한 시스템 프롬프트 같은 유용한 요소도 있습니다. 반면 2025년 1월 이후 릴리스가 없고, 개인정보 처리방침은 스스로 모순되며, 모델 목록은 짧고, 답변의 품질과 속도는 여기서 확인할 수 없었습니다. MIT 라이선스의 단순한 앱을 높이 평가하고 유지보수가 끝났을 수 있음을 받아들이는 분에게 적합하며, 기본 채팅 이상의 기능이나 정기 업데이트가 필요하다면 먼저 위의 대안을 비교하십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[fullmoon 웹사이트](https://fullmoon.app) — 기능 목록, 모델 크기, 플랫폼, 다운로드 링크(2026년 10월 30일 확인).',
          '[App Store의 fullmoon](https://apps.apple.com/us/app/fullmoon-local-intelligence/id6727014156) — 버전, 출시일, 크기, 요구 사항, 스토어별 가격(2026년 10월 30일 확인).',
          '[fullmoon 개인정보 처리방침](https://fullmoon.app/privacy) — 2024년 12월 23일부터 시행.',
          '[GitHub의 fullmoon-ios](https://github.com/mainframecomputer/fullmoon-ios) — README, MIT 라이선스 파일, 릴리스, 커밋 기록(2026년 10월 30일 확인).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 온디바이스 채팅 클라이언트.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — 기기 내 문서 Q&A를 갖춘 오픈소스 오프라인 채팅 앱.',
          '[MLC Chat 리뷰](/ko/power-local-llm/mlc-chat-review) — MLC LLM 기반 오픈소스 온디바이스 채팅 앱.',
          '[2026 iPhone 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — 더 폭넓은 iPhone 모음.',
          '[채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 이 리뷰가 속한 카테고리 비교.',
        ],
      },
    },
  },
}
