// Obscurify Review: Anonymous AI Chat with an Optional Local Mode
// Slug: obscurify-review
// Companion to: librechat-review, lobechat-review, open-webui-review, big-agi-review, local-llm-chat-assistants-compared
// Sources: the official website obscurify.ai (home, pricing, about, privacy policy, blog, tutorials) and the public GitHub
// organisation Obscurify-ai (web client, Android app), all checked 2026-10-23 — no hands-on use. The request came from the site
// owner, not from the operator: no maker comment exists, so there is no fromTheMaker section and no founder badge.
// Last upstream update 2026-10-21 (Android v0.4.1) => no stale warning (owner rule 2026-10-16).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/obscurify-review-hero-en.webp',
    title: 'Obscurify Review: Anonymous AI Chat With an Optional Local Mode',
    seoTitle: 'Obscurify Review: Anonymous AI Chat With a Local Mode',
    intro:
      'Obscurify is an AI chat service at [obscurify.ai](https://obscurify.ai) that describes itself as "your VPN for AI": you sign up with a random account number instead of an email address, pay with vouchers the operator says it cannot link to you, and reach 200+ cloud models. An optional local mode runs GGUF models inside the browser. This review reflects the website, its privacy policy and the public GitHub code, as checked on 23 October 2026; PromptQuorum did not test the service hands-on.',
    metaDescription:
      'Obscurify review: anonymous AI chat with random account numbers, blind-voucher payments and an optional in-browser local mode. Plans and privacy claims.',
    twitterDescription:
      'Obscurify review: anonymous AI chat in the browser and on Android, with an optional in-browser local mode. What the site and its privacy policy claim, what the code shows, and what stays unverified.',
    audience:
      'People who want to use cloud AI models without an email, phone number or identity, and who need to know what the sources confirm, what is only the operator\'s claim and what is unknown.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Obscurify review',
    targetKeywords: [
      'obscurify review',
      'obscurify ai',
      'anonymous ai chat',
      'private ai chat no email',
      'run gguf models in browser',
      'ai chat paid with bitcoin monero',
      'obscurify vs librechat',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Obscurify is a web and Android service that, by its own description, lets you chat with 200+ AI models through a random account number, with no email, phone number or identity.** Its "no logs" label comes with a 30-day IP retention period, and the operator is not named.',
    quickAnswerTop: {
      en: {
        question: 'Is Obscurify really anonymous and private?',
        answer:
          'According to its privacy policy, chat prompts and replies are not saved on its servers and no identity is required. Neither claim was tested, and the server code is not published.',
        bullets: [
          'Guests can chat without signing up; paid plans unlock more models.',
          'Optional local mode: GGUF models run inside the browser, so prompts stay on the device.',
          'Payments use blind vouchers via Monero, Bitcoin, Lightning or card.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Obscurify?', anchor: 'what-is-obscurify' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Plans and Pricing', anchor: 'plans-and-pricing' },
      { label: 'Features and Local Mode', anchor: 'key-features' },
      { label: 'Privacy and Data Flow', anchor: 'privacy' },
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
            text: 'Obscurify is an AI chat service that sells access to cloud models without an email or identity and adds an optional mode that runs open models in the browser.',
          },
          {
            type: 'plain-terms',
            text: 'You open the website, chat as a guest or create an account that is only a 16-digit number, and top up a balance with vouchers; the local mode downloads a model once and then runs it on your own device.',
          },
        ],
        items: [
          'Reach: the site lists 200+ models from major providers, including frontier and uncensored ones, behind one account.',
          'Code: the web client and the Android app are published under GPL-3.0 since 21 October 2026; the server is not.',
          'Platforms: any browser, a Tor hidden service and an Android APK (version 0.4.1, last updated 21 October 2026).',
          'Operator: no company, person or jurisdiction is named anywhere on the site.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the official website, its privacy policy and the public GitHub repositories, checked on 23 October 2026. It involved no hands-on use, traffic analysis or benchmarking.',
          },
        ],
      },
      overview: {
        id: 'what-is-obscurify',
        title: 'What Is Obscurify?',
        content: [
          '**According to its website, Obscurify is a private AI chat service that sits between you and the model providers, strips identifying details from each request and forwards it under its own credentials.** The site calls this "your VPN for AI". You sign up with a random 16-digit account number, with no email, phone number, username or password, and chat with models from major AI providers.',
          'A second mode runs open-source GGUF models directly in the browser through a WebAssembly build of llama.cpp, with no request to Obscurify\'s servers. An Android app is a separate native client of the same service. This review covers only [obscurify.ai](https://obscurify.ai) and its Android app.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**There is nothing to install for the web version: open the website and chat as a guest.** The Android app is a separate APK that has to be installed manually, because no Google Play or App Store listing was found.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Web (any browser)',
            'Where to get it': '[obscurify.ai](https://obscurify.ai) (guest chat, no sign-up)',
          },
          {
            'Platform': 'Android',
            'Where to get it': '[GitHub Releases](https://github.com/Obscurify-ai/obscurify-android/releases) (APK, sideload)',
          },
          {
            'Platform': 'Source code',
            'Where to get it': '[Obscurify-ai on GitHub](https://github.com/Obscurify-ai) (web client and Android app, GPL-3.0)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[obscurify.ai](https://obscurify.ai) (also offers a Tor hidden service)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[obscurify.ai/privacy](https://obscurify.ai/privacy) (last updated 22 October 2026)',
          },
        ],
        note: 'Version reviewed: Android app 0.4.1, published on GitHub Releases on 21 October 2026. The website and web client carry no version number. Installing the APK requires allowing installs from your browser or file manager; no terminal is needed.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Plans and Pricing',
        content: [
          '**Obscurify is freemium: guests chat for free, everything else is prepaid.** Prices are in US dollars; no local-currency prices were found.',
        ],
        columns: ['Plan', 'Price', 'What it includes'],
        rows: [
          {
            'Plan': 'Guest',
            'Price': 'Free',
            'What it includes': 'No account, 30 messages an hour, one open model',
          },
          {
            'Plan': 'Pay As You Go',
            'Price': '$0 a month',
            'What it includes': 'Prepaid balance, most models, 1M tokens a month',
          },
          {
            'Plan': 'Casual',
            'Price': '$20 a month',
            'What it includes': 'Frontier models, $15 usage, 10M tokens a month',
          },
          {
            'Plan': 'Pro',
            'Price': '$45 a month',
            'What it includes': 'Uncensored models, API, $35 usage, no token cap',
          },
        ],
        note: 'Plans renew monthly from your balance while it covers them; deposits are non-refundable and expire five years after they are made, according to the pricing page.',
      },
      features: {
        id: 'key-features',
        title: 'Features and Local Mode',
        content: [
          '**Cloud chat is the main product; local mode is an extra for people who want nothing to leave the device.** The items below come from the website, the pricing page and the GitHub READMEs.',
        ],
        items: [
          '**Chat.** Streaming answers, web search, image attachments, collapsible reasoning, and conversations stored only in your browser or, on Android, on the phone.',
          '**Local mode.** Open GGUF models download once and run in the browser through llama.cpp compiled to WebAssembly; the site says prompts never leave the device. The model catalog loads in the browser and was not readable for this review.',
          '**Payments.** According to the site, vouchers are blind-signed (RFC 9474), so the operator can check a voucher is genuine but not which payment it came from. You can buy them with Monero, Bitcoin, Lightning or card.',
          '**API.** The Pro plan includes an OpenAI-compatible API; the site has tutorials for the OpenAI client and curl.',
          '**Tor.** The site offers a hidden service, and the privacy policy recommends Tor or a VPN for stronger privacy.',
        ],
        note: 'Tutorials on the site also cover image generation and coding setups; this review did not test them.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**According to the privacy policy, chat prompts and replies "are not saved on our servers", guests receive no cookies and no email is collected.** Conversation history is optional and stored in your browser\'s local storage. Server-side, it keeps a keyed hash of your account number and a random handle, billing records (user ID, cost, token count, model name, timestamp) and a login cookie for 30 days.',
          'The "No Logs" label has a limit: IP address and browser user agent are kept for abuse prevention and "deleted after 30 days". In cloud mode the request still reaches a model provider; the policy names OpenRouter (zero-data-retention routes only) and NanoGPT (content logging disabled), uses Stripe for card payments and the operator\'s own BTCPay server for crypto, and states that no third-party analytics or advertising trackers are used. Uncensored models are offered; what you generate with them is your responsibility.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The server code is not published and PromptQuorum has not audited network traffic, so these statements are the operator\'s claims. Anyone with a serious threat model should verify them independently.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**People who dislike giving an email or phone number to AI services.** An account number is enough.',
          '**Readers who want cloud models and a local option in one tool.**',
          '**Developers who want one OpenAI-compatible endpoint for many models.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**The operator.** No company name, address or jurisdiction is stated on the site or in the privacy policy; the only contact is an email address.',
          '**The server.** Only the browser client and the Android app are published; the code that handles requests and payments is not, and the repositories were created on 21 October 2026.',
          '**Anonymity in practice.** Whether the blind-voucher design and the no-storage claim hold was not tested; a provider or a network observer may still learn something from traffic.',
          '**The model count and local catalog.** The 200+ figure comes from the site, and the local model list did not load, so no local model, size or hardware requirement is stated.',
          '**Hands-on quality.** Speed, answer quality, local-mode performance and the Android app were not tested.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[LibreChat](/power-local-llm/librechat-review)',
            'Platforms': 'Web',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source multi-model chat with team features that you host yourself',
          },
          {
            'App': '[LobeChat](/local-llms/lobechat-review)',
            'Platforms': 'Web',
            'Price / license': 'Freemium / MIT',
            'Key difference': 'Polished chat interface with a plugin marketplace',
          },
          {
            'App': '[Open WebUI](/local-llms/open-webui-review)',
            'Platforms': 'Web, desktop',
            'Price / license': 'Free / BSD 3-Clause',
            'Key difference': 'Self-hosted ChatGPT-like interface with built-in RAG, typically run with local models',
          },
          {
            'App': '[Big-AGI](/local-llms/big-agi-review)',
            'Platforms': 'Web',
            'Price / license': 'Free / MIT',
            'Key difference': 'Multi-provider front end with personas; you bring your own API keys',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own page. Unlike these, Obscurify is a hosted service that sells model access itself.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I use Obscurify without any account?',
            a: 'Yes, as a guest with one open model and a limit of 30 messages an hour; frontier and uncensored models need a paid plan.',
          },
          {
            q: 'How do I pay without linking the payment to my account?',
            a: 'You buy blind vouchers with Monero, Bitcoin, Lightning or card and add them to your balance; the policy recommends Tor or a VPN and keeping the default redemption delay for more privacy.',
          },
          {
            q: 'Is Obscurify open source?',
            a: 'The web client and the Android app are GPL-3.0; no server repository was found, so the service as a whole is not fully open.',
          },
          {
            q: 'Does Obscurify work offline?',
            a: 'Only local mode can, after a model has been downloaded in the browser; this was not tested, and cloud chat needs an internet connection.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Obscurify is an unusual hosted AI chat built around not knowing who you are, with a local mode as a fallback. Its design is documented and its client code is public, but the operator is unnamed, the server code is unpublished and the "no logs" claim keeps IP addresses for 30 days. It suits readers who want cloud models without an email and accept that trust; anyone who needs a verifiable setup should compare self-hosted options such as [LibreChat](/power-local-llm/librechat-review) or [Open WebUI](/local-llms/open-webui-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Obscurify website](https://obscurify.ai) — product description, local mode and links, checked 23 October 2026.',
          '[Obscurify pricing](https://obscurify.ai/pricing) — guest limits, plans and billing, checked 23 October 2026.',
          '[Obscurify about page](https://obscurify.ai/about) — anonymity, payments and logging statements, checked 23 October 2026.',
          '[Obscurify privacy policy](https://obscurify.ai/privacy) — data collected, retention, providers and payments; last updated 22 October 2026.',
          '[Obscurify-ai on GitHub](https://github.com/Obscurify-ai) — web client and Android app, license, releases and README, checked 23 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[LibreChat Review](/power-local-llm/librechat-review) — an open-source multi-model chat interface you host yourself.',
          '[Open WebUI Review](/local-llms/open-webui-review) — a self-hosted interface for local models with built-in RAG.',
          '[LobeChat Review](/local-llms/lobechat-review) — a polished chat interface with a plugin marketplace.',
          '[Big-AGI Review](/local-llms/big-agi-review) — a multi-provider chat front end with personas.',
          '[Local LLM Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Obscurify Review: Anonymous AI Chat With an Optional Local Mode',
      description:
        'Obscurify review: anonymous AI chat in the browser and on Android with an optional in-browser local mode. What the website and privacy policy claim, what the code shows, and what stays unverified.',
      url: 'https://promptquorum.com/power-local-llm/obscurify-review',
      inLanguage: 'en',
      datePublished: '2026-10-23',
      dateModified: '2026-10-23',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'People evaluating an anonymous AI chat service' },
      about: [
        { '@type': 'Thing', name: 'Obscurify' },
        { '@type': 'Thing', name: 'Anonymous AI chat' },
        { '@type': 'Thing', name: 'In-browser local models' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/obscurify-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Obscurify Review', item: 'https://promptquorum.com/power-local-llm/obscurify-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/obscurify-review-hero-de.webp',
    title: 'Obscurify-Rezension: Anonymer KI-Chat mit optionalem lokalem Modus',
    seoTitle: 'Obscurify-Rezension: Anonymer KI-Chat mit lokalem Modus',
    intro:
      'Obscurify ist ein KI-Chat-Dienst unter [obscurify.ai](https://obscurify.ai), der sich selbst als „VPN für KI“ beschreibt: Sie registrieren sich mit einer zufälligen Kontonummer statt mit einer E-Mail-Adresse, zahlen mit Gutscheinen, die der Betreiber nach eigener Aussage nicht mit Ihnen verknüpfen kann, und erreichen über 200 Cloud-Modelle. Ein optionaler lokaler Modus führt GGUF-Modelle im Browser aus. Diese Rezension gibt die Website, die Datenschutzerklärung und den öffentlichen GitHub-Code wieder, wie am 23. Oktober 2026 geprüft; PromptQuorum hat den Dienst nicht praktisch getestet.',
    metaDescription:
      'Obscurify-Rezension: anonymer KI-Chat mit zufälliger Kontonummer, Blind-Gutscheinen und optionalem lokalem Modus im Browser. Tarife und Datenschutz.',
    twitterDescription:
      'Obscurify-Rezension: anonymer KI-Chat im Browser und auf Android mit optionalem lokalem Modus. Was Website und Datenschutzerklärung behaupten, was der Code zeigt und was ungeprüft bleibt.',
    audience:
      'Menschen, die Cloud-KI-Modelle ohne E-Mail-Adresse, Telefonnummer oder Identität nutzen möchten und wissen müssen, was die Quellen bestätigen, was nur der Betreiber behauptet und was unbekannt ist.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Obscurify Rezension',
    targetKeywords: [
      'obscurify rezension',
      'obscurify ai',
      'anonymer ki chat',
      'privater ki chat ohne e-mail',
      'gguf modelle im browser ausführen',
      'ki chat mit bitcoin monero bezahlen',
      'obscurify vs librechat',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Obscurify ist ein Web- und Android-Dienst, der laut eigener Beschreibung den Chat mit über 200 KI-Modellen über eine zufällige Kontonummer ermöglicht, ohne E-Mail, Telefonnummer oder Identität.** Das Label „No Logs“ geht mit 30 Tagen IP-Speicherung einher, und der Betreiber wird nicht genannt.',
    quickAnswerTop: {
      de: {
        question: 'Ist Obscurify wirklich anonym und privat?',
        answer:
          'Laut Datenschutzerklärung werden Chat-Eingaben und Antworten nicht auf den Servern gespeichert, und es ist keine Identität nötig. Beide Angaben wurden nicht getestet, und der Servercode ist nicht veröffentlicht.',
        bullets: [
          'Gäste können ohne Registrierung chatten; Bezahltarife schalten weitere Modelle frei.',
          'Optionaler lokaler Modus: GGUF-Modelle laufen im Browser, die Eingaben bleiben auf dem Gerät.',
          'Zahlung mit Blind-Gutscheinen per Monero, Bitcoin, Lightning oder Karte.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Obscurify?', anchor: 'what-is-obscurify' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Tarife und Preise', anchor: 'plans-and-pricing' },
      { label: 'Funktionen und lokaler Modus', anchor: 'key-features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
      { label: 'Für wen sich der Dienst eignet', anchor: 'who-should-use' },
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
            text: 'Obscurify ist ein KI-Chat-Dienst, der Zugang zu Cloud-Modellen ohne E-Mail und Identität verkauft und einen optionalen Modus ergänzt, der offene Modelle im Browser ausführt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie öffnen die Website, chatten als Gast oder legen ein Konto an, das nur aus einer 16-stelligen Nummer besteht, und laden ein Guthaben mit Gutscheinen auf; der lokale Modus lädt ein Modell einmal herunter und führt es dann auf Ihrem eigenen Gerät aus.',
          },
        ],
        items: [
          'Reichweite: Die Website nennt über 200 Modelle großer Anbieter, darunter Frontier- und unzensierte Modelle, hinter einem Konto.',
          'Code: Der Web-Client und die Android-App sind seit dem 21. Oktober 2026 unter GPL-3.0 veröffentlicht; der Server nicht.',
          'Plattformen: jeder Browser, ein Tor-Hidden-Service und eine Android-APK (Version 0.4.1, zuletzt aktualisiert am 21. Oktober 2026).',
          'Betreiber: Weder ein Unternehmen noch eine Person oder Rechtsordnung wird auf der Website genannt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension beruht auf der offiziellen Website, der Datenschutzerklärung und den öffentlichen GitHub-Repositories, geprüft am 23. Oktober 2026. Sie umfasste keine praktische Nutzung, Datenverkehrsanalyse oder Benchmarks.',
          },
        ],
      },
      overview: {
        id: 'what-is-obscurify',
        title: 'Was ist Obscurify?',
        content: [
          '**Laut seiner Website ist Obscurify ein privater KI-Chat-Dienst, der zwischen Ihnen und den Modellanbietern sitzt, identifizierende Angaben aus jeder Anfrage entfernt und sie unter eigenen Zugangsdaten weiterleitet.** Die Website nennt das „Ihr VPN für KI“. Sie registrieren sich mit einer zufälligen 16-stelligen Kontonummer, ohne E-Mail, Telefonnummer, Benutzernamen oder Passwort, und chatten mit Modellen großer KI-Anbieter.',
          'Ein zweiter Modus führt quelloffene GGUF-Modelle direkt im Browser über einen WebAssembly-Build von llama.cpp aus, ohne Anfrage an die Server von Obscurify. Eine Android-App ist ein eigener nativer Client desselben Dienstes. Diese Rezension behandelt nur [obscurify.ai](https://obscurify.ai) und die zugehörige Android-App.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Für die Webversion ist nichts zu installieren: Öffnen Sie die Website und chatten Sie als Gast.** Die Android-App ist eine separate APK, die manuell installiert werden muss, weil weder bei Google Play noch im App Store ein Eintrag gefunden wurde.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Web (jeder Browser)',
            'Bezugsquelle': '[obscurify.ai](https://obscurify.ai) (Gast-Chat, keine Registrierung)',
          },
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[GitHub Releases](https://github.com/Obscurify-ai/obscurify-android/releases) (APK, Sideloading)',
          },
          {
            'Plattform': 'Quellcode',
            'Bezugsquelle': '[Obscurify-ai auf GitHub](https://github.com/Obscurify-ai) (Web-Client und Android-App, GPL-3.0)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[obscurify.ai](https://obscurify.ai) (bietet auch einen Tor-Hidden-Service)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[obscurify.ai/privacy](https://obscurify.ai/privacy) (zuletzt aktualisiert am 22. Oktober 2026)',
          },
        ],
        note: 'Geprüfte Version: Android-App 0.4.1, am 21. Oktober 2026 bei GitHub Releases veröffentlicht. Website und Web-Client tragen keine Versionsnummer. Für die APK müssen Sie Installationen aus Ihrem Browser oder Dateimanager erlauben; ein Terminal ist nicht nötig.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Tarife und Preise',
        content: [
          '**Obscurify arbeitet nach dem Freemium-Modell: Gäste chatten kostenlos, alles andere wird im Voraus bezahlt.** Die Preise gelten in US-Dollar; Preise in Landeswährung wurden nicht gefunden.',
        ],
        columns: ['Tarif', 'Preis', 'Enthalten'],
        rows: [
          {
            'Tarif': 'Gast',
            'Preis': 'Kostenlos',
            'Enthalten': 'Kein Konto, 30 Nachrichten pro Stunde, ein offenes Modell',
          },
          {
            'Tarif': 'Pay As You Go',
            'Preis': '0 $ im Monat',
            'Enthalten': 'Guthaben, die meisten Modelle, 1 Mio. Token im Monat',
          },
          {
            'Tarif': 'Casual',
            'Preis': '20 $ im Monat',
            'Enthalten': 'Frontier-Modelle, 15 $ Nutzung, 10 Mio. Token im Monat',
          },
          {
            'Tarif': 'Pro',
            'Preis': '45 $ im Monat',
            'Enthalten': 'Unzensierte Modelle, API, 35 $ Nutzung, ohne Token-Limit',
          },
        ],
        note: 'Laut Preisseite verlängern sich die Tarife monatlich aus Ihrem Guthaben, solange es sie deckt; Einzahlungen sind nicht erstattungsfähig und verfallen fünf Jahre nach der Einzahlung.',
      },
      features: {
        id: 'key-features',
        title: 'Funktionen und lokaler Modus',
        content: [
          '**Der Cloud-Chat ist das Hauptprodukt; der lokale Modus ist ein Zusatz für alle, bei denen nichts das Gerät verlassen soll.** Die folgenden Punkte stammen von der Website, der Preisseite und den GitHub-READMEs.',
        ],
        items: [
          '**Chat.** Streaming-Antworten, Websuche, Bildanhänge, einklappbare Denkschritte und Unterhaltungen, die nur in Ihrem Browser oder unter Android auf dem Telefon gespeichert werden.',
          '**Lokaler Modus.** Offene GGUF-Modelle werden einmal heruntergeladen und laufen im Browser über llama.cpp, kompiliert zu WebAssembly; laut Website verlassen die Eingaben das Gerät nie. Der Modellkatalog wird im Browser geladen und war für diese Rezension nicht lesbar.',
          '**Zahlung.** Laut Website werden Gutscheine blind signiert (RFC 9474), sodass der Betreiber prüfen kann, ob ein Gutschein echt ist, aber nicht, von welcher Zahlung er stammt. Sie können sie mit Monero, Bitcoin, Lightning oder Karte kaufen.',
          '**API.** Der Pro-Tarif enthält eine OpenAI-kompatible API; die Website bietet Anleitungen für den OpenAI-Client und curl.',
          '**Tor.** Die Website bietet einen Hidden Service, und die Datenschutzerklärung empfiehlt Tor oder ein VPN für mehr Privatsphäre.',
        ],
        note: 'Anleitungen auf der Website behandeln außerdem Bilderzeugung und Entwicklungsumgebungen; diese Rezension hat sie nicht getestet.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Datenschutzerklärung werden Chat-Eingaben und Antworten „nicht auf unseren Servern gespeichert“, Gäste erhalten keine Cookies, und es wird keine E-Mail-Adresse erfasst.** Der Unterhaltungsverlauf ist optional und liegt im lokalen Speicher Ihres Browsers. Serverseitig bleiben ein verschlüsselter Hash (Keyed Hash) Ihrer Kontonummer samt zufälligem Kürzel, Abrechnungsdaten (Nutzer-ID, Kosten, Token-Anzahl, Modellname, Zeitstempel) und ein Login-Cookie für 30 Tage.',
          'Das Label „No Logs“ hat eine Grenze: IP-Adresse und Browser-User-Agent werden zur Missbrauchsabwehr gespeichert und „nach 30 Tagen gelöscht“. Im Cloud-Modus erreicht die Anfrage weiterhin einen Modellanbieter; die Erklärung nennt OpenRouter (nur Routen ohne Datenspeicherung) und NanoGPT (Inhaltsprotokollierung deaktiviert), verwendet Stripe für Kartenzahlungen und den eigenen BTCPay-Server für Kryptozahlungen und erklärt, dass keine Analyse- oder Werbe-Tracker von Dritten eingesetzt werden. Unzensierte Modelle werden angeboten; für die damit erzeugten Inhalte sind Sie selbst verantwortlich.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Der Servercode ist nicht veröffentlicht, und PromptQuorum hat den Netzwerkverkehr nicht geprüft; diese Aussagen sind daher Angaben des Betreibers. Wer ein ernsthaftes Bedrohungsmodell hat, sollte sie unabhängig überprüfen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich der Dienst eignet',
        items: [
          '**Menschen, die KI-Diensten ungern E-Mail-Adresse oder Telefonnummer geben.** Eine Kontonummer genügt.',
          '**Leser, die Cloud-Modelle und eine lokale Option in einem Werkzeug wollen.**',
          '**Entwickler, die einen OpenAI-kompatiblen Endpunkt für viele Modelle wünschen.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Den Betreiber.** Weder auf der Website noch in der Datenschutzerklärung stehen Firmenname, Adresse oder Rechtsordnung; als Kontakt dient nur eine E-Mail-Adresse.',
          '**Den Server.** Veröffentlicht sind nur der Browser-Client und die Android-App; der Code für Anfragen und Zahlungen ist es nicht, und die Repositories wurden am 21. Oktober 2026 angelegt.',
          '**Anonymität in der Praxis.** Ob das Blind-Gutschein-Design und das Versprechen, nichts zu speichern, halten, wurde nicht getestet; ein Anbieter oder ein Netzwerkbeobachter erfährt womöglich trotzdem etwas aus dem Datenverkehr.',
          '**Modellanzahl und lokalen Katalog.** Die Zahl von über 200 stammt von der Website, und die Liste der lokalen Modelle wurde nicht geladen; daher sind weder lokale Modelle noch Größen oder Hardwareanforderungen genannt.',
          '**Qualität in der Praxis.** Geschwindigkeit, Antwortqualität, Leistung des lokalen Modus und die Android-App wurden nicht getestet.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': '[LibreChat](/de/power-local-llm/librechat-review)',
            'Plattformen': 'Web',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Multimodell-Chat mit Teamfunktionen, den Sie selbst hosten',
          },
          {
            'App': '[LobeChat](/de/local-llms/lobechat-review)',
            'Plattformen': 'Web',
            'Preis / Lizenz': 'Freemium / MIT',
            'Wesentlicher Unterschied': 'Ausgereifte Chat-Oberfläche mit Plugin-Marktplatz',
          },
          {
            'App': '[Open WebUI](/de/local-llms/open-webui-review)',
            'Plattformen': 'Web, Desktop',
            'Preis / Lizenz': 'Kostenlos / BSD 3-Clause',
            'Wesentlicher Unterschied': 'Selbst gehostete ChatGPT-ähnliche Oberfläche mit integriertem RAG, meist mit lokalen Modellen betrieben',
          },
          {
            'App': '[Big-AGI](/de/local-llms/big-agi-review)',
            'Plattformen': 'Web',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Multi-Provider-Frontend mit Personas; Sie bringen eigene API-Schlüssel mit',
          },
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie aktuellen Preis, Lizenz und Plattformen auf der jeweiligen Seite. Anders als diese ist Obscurify ein gehosteter Dienst, der den Modellzugang selbst verkauft.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich Obscurify ganz ohne Konto nutzen?',
            a: 'Ja, als Gast mit einem offenen Modell und höchstens 30 Nachrichten pro Stunde; Frontier- und unzensierte Modelle erfordern einen Bezahltarif.',
          },
          {
            q: 'Wie bezahle ich, ohne die Zahlung mit meinem Konto zu verknüpfen?',
            a: 'Sie kaufen Blind-Gutscheine mit Monero, Bitcoin, Lightning oder Karte und buchen sie auf Ihr Guthaben; für mehr Privatsphäre empfiehlt die Erklärung Tor oder ein VPN und die Standardverzögerung bei der Einlösung.',
          },
          {
            q: 'Ist Obscurify Open Source?',
            a: 'Der Web-Client und die Android-App stehen unter GPL-3.0; ein Server-Repository wurde nicht gefunden, der Dienst als Ganzes ist also nicht vollständig offen.',
          },
          {
            q: 'Funktioniert Obscurify offline?',
            a: 'Nur der lokale Modus kann das, nachdem ein Modell im Browser heruntergeladen wurde; das wurde nicht getestet, und der Cloud-Chat braucht eine Internetverbindung.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Obscurify ist ein ungewöhnlicher gehosteter KI-Chat, der darauf ausgelegt ist, nicht zu wissen, wer Sie sind, mit einem lokalen Modus als Rückfallebene. Das Konzept ist dokumentiert und der Client-Code öffentlich, doch der Betreiber bleibt namenlos, der Servercode ist nicht veröffentlicht, und das „No Logs“-Versprechen speichert IP-Adressen 30 Tage lang. Der Dienst eignet sich für Leser, die Cloud-Modelle ohne E-Mail wollen und dieses Vertrauen aufbringen; wer ein überprüfbares Setup braucht, sollte selbst gehostete Optionen wie [LibreChat](/de/power-local-llm/librechat-review) oder [Open WebUI](/de/local-llms/open-webui-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Obscurify-Website](https://obscurify.ai) — Produktbeschreibung, lokaler Modus und Links, geprüft am 23. Oktober 2026.',
          '[Obscurify-Preise](https://obscurify.ai/pricing) — Gast-Limits, Tarife und Abrechnung, geprüft am 23. Oktober 2026.',
          '[Obscurify-Seite „About“](https://obscurify.ai/about) — Aussagen zu Anonymität, Zahlungen und Protokollierung, geprüft am 23. Oktober 2026.',
          '[Obscurify-Datenschutzerklärung](https://obscurify.ai/privacy) — erhobene Daten, Speicherdauer, Anbieter und Zahlungen; zuletzt aktualisiert am 22. Oktober 2026.',
          '[Obscurify-ai auf GitHub](https://github.com/Obscurify-ai) — Web-Client und Android-App, Lizenz, Releases und README, geprüft am 23. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[LibreChat-Rezension](/de/power-local-llm/librechat-review) — eine quelloffene Multimodell-Chat-Oberfläche zum Selbsthosten.',
          '[Open-WebUI-Rezension](/de/local-llms/open-webui-review) — eine selbst gehostete Oberfläche für lokale Modelle mit integriertem RAG.',
          '[LobeChat-Rezension](/de/local-llms/lobechat-review) — eine ausgereifte Chat-Oberfläche mit Plugin-Marktplatz.',
          '[Big-AGI-Rezension](/de/local-llms/big-agi-review) — ein Multi-Provider-Chat-Frontend mit Personas.',
          '[Lokale LLM-Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/obscurify-review-hero-es.webp',
    title: 'Reseña de Obscurify: chat de IA anónimo con modo local opcional',
    seoTitle: 'Reseña de Obscurify: chat de IA anónimo con modo local',
    intro:
      'Obscurify es un servicio de chat de IA en [obscurify.ai](https://obscurify.ai) que se describe como «tu VPN para la IA»: te registras con un número de cuenta aleatorio en lugar de un correo electrónico, pagas con vales que el operador dice no poder vincular contigo y accedes a más de 200 modelos en la nube. Un modo local opcional ejecuta modelos GGUF dentro del navegador. Esta reseña refleja el sitio web, su política de privacidad y el código público de GitHub, consultados el 23 de octubre de 2026; PromptQuorum no probó el servicio en la práctica.',
    metaDescription:
      'Reseña de Obscurify: chat de IA anónimo con número de cuenta aleatorio, vales ciegos y modo local opcional en el navegador. Planes y privacidad.',
    twitterDescription:
      'Reseña de Obscurify: chat de IA anónimo en el navegador y en Android, con modo local opcional. Lo que afirman el sitio y su política de privacidad, lo que muestra el código y lo que sigue sin verificar.',
    audience:
      'Personas que quieren usar modelos de IA en la nube sin correo electrónico, teléfono ni identidad, y necesitan saber qué confirman las fuentes, qué es solo una afirmación del operador y qué se desconoce.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Obscurify',
    targetKeywords: [
      'reseña obscurify',
      'obscurify ai',
      'chat de ia anónimo',
      'chat de ia privado sin correo',
      'ejecutar modelos gguf en el navegador',
      'chat de ia pagado con bitcoin monero',
      'obscurify vs librechat',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Obscurify es un servicio web y para Android que, según su propia descripción, permite chatear con más de 200 modelos de IA mediante un número de cuenta aleatorio, sin correo, teléfono ni identidad.** Su etiqueta «sin registros» convive con 30 días de conservación de la IP, y el operador no figura por su nombre.',
    quickAnswerTop: {
      es: {
        question: '¿Es Obscurify realmente anónimo y privado?',
        answer:
          'Según su política de privacidad, los mensajes y las respuestas del chat no se guardan en sus servidores y no hace falta ninguna identidad. Ninguna de las dos afirmaciones se probó, y el código del servidor no es público.',
        bullets: [
          'Los invitados pueden chatear sin registrarse; los planes de pago desbloquean más modelos.',
          'Modo local opcional: los modelos GGUF se ejecutan en el navegador y los mensajes se quedan en el dispositivo.',
          'Los pagos usan vales ciegos con Monero, Bitcoin, Lightning o tarjeta.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Obscurify?', anchor: 'what-is-obscurify' },
      { label: 'Cómo obtenerlo', anchor: 'get-it' },
      { label: 'Planes y precios', anchor: 'plans-and-pricing' },
      { label: 'Funciones y modo local', anchor: 'key-features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
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
            text: 'Obscurify es un servicio de chat de IA que vende acceso a modelos en la nube sin correo ni identidad y añade un modo opcional que ejecuta modelos abiertos en el navegador.',
          },
          {
            type: 'plain-terms',
            text: 'Abres el sitio web, chateas como invitado o creas una cuenta que es solo un número de 16 dígitos, y recargas un saldo con vales; el modo local descarga un modelo una vez y luego lo ejecuta en tu propio dispositivo.',
          },
        ],
        items: [
          'Alcance: el sitio enumera más de 200 modelos de grandes proveedores, incluidos modelos de vanguardia y sin censura, tras una sola cuenta.',
          'Código: el cliente web y la app de Android se publican bajo GPL-3.0 desde el 21 de octubre de 2026; el servidor no.',
          'Plataformas: cualquier navegador, un servicio oculto de Tor y un APK de Android (versión 0.4.1, última actualización el 21 de octubre de 2026).',
          'Operador: el sitio no nombra ninguna empresa, persona ni jurisdicción.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el sitio web oficial, su política de privacidad y los repositorios públicos de GitHub, consultados el 23 de octubre de 2026. No incluyó uso práctico, análisis de tráfico ni pruebas comparativas.',
          },
        ],
      },
      overview: {
        id: 'what-is-obscurify',
        title: '¿Qué es Obscurify?',
        content: [
          '**Según su sitio web, Obscurify es un servicio privado de chat de IA que se sitúa entre tú y los proveedores de modelos, elimina los datos identificativos de cada solicitud y la reenvía con sus propias credenciales.** El sitio lo llama «tu VPN para la IA». Te registras con un número de cuenta aleatorio de 16 dígitos, sin correo, teléfono, nombre de usuario ni contraseña, y chateas con modelos de grandes proveedores de IA.',
          'Un segundo modo ejecuta modelos GGUF de código abierto directamente en el navegador mediante una compilación de llama.cpp en WebAssembly, sin enviar solicitudes a los servidores de Obscurify. Una app de Android es un cliente nativo independiente del mismo servicio. Esta reseña cubre solo [obscurify.ai](https://obscurify.ai) y su app de Android.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerlo',
        content: [
          '**La versión web no requiere instalar nada: abre el sitio y chatea como invitado.** La app de Android es un APK aparte que hay que instalar manualmente, porque no se encontró ninguna ficha en Google Play ni en la App Store.',
        ],
        columns: ['Plataforma', 'Dónde obtenerlo'],
        rows: [
          {
            'Plataforma': 'Web (cualquier navegador)',
            'Dónde obtenerlo': '[obscurify.ai](https://obscurify.ai) (chat de invitado, sin registro)',
          },
          {
            'Plataforma': 'Android',
            'Dónde obtenerlo': '[GitHub Releases](https://github.com/Obscurify-ai/obscurify-android/releases) (APK, instalación manual)',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde obtenerlo': '[Obscurify-ai en GitHub](https://github.com/Obscurify-ai) (cliente web y app de Android, GPL-3.0)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerlo': '[obscurify.ai](https://obscurify.ai) (ofrece también un servicio oculto de Tor)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerlo': '[obscurify.ai/privacy](https://obscurify.ai/privacy) (última actualización: 22 de octubre de 2026)',
          },
        ],
        note: 'Versión revisada: app de Android 0.4.1, publicada en GitHub Releases el 21 de octubre de 2026. El sitio web y el cliente web no llevan número de versión. Para instalar el APK debes permitir instalaciones desde tu navegador o gestor de archivos; no hace falta terminal.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Planes y precios',
        content: [
          '**Obscurify es freemium: los invitados chatean gratis y todo lo demás es de prepago.** Los precios están en dólares estadounidenses; no se encontraron precios en moneda local.',
        ],
        columns: ['Plan', 'Precio', 'Qué incluye'],
        rows: [
          {
            'Plan': 'Invitado',
            'Precio': 'Gratis',
            'Qué incluye': 'Sin cuenta, 30 mensajes por hora, un modelo abierto',
          },
          {
            'Plan': 'Pay As You Go',
            'Precio': '0 $ al mes',
            'Qué incluye': 'Saldo prepago, casi todos los modelos, 1 M de tokens al mes',
          },
          {
            'Plan': 'Casual',
            'Precio': '20 $ al mes',
            'Qué incluye': 'Modelos de vanguardia, 15 $ de uso, 10 M de tokens al mes',
          },
          {
            'Plan': 'Pro',
            'Precio': '45 $ al mes',
            'Qué incluye': 'Modelos sin censura, API, 35 $ de uso, sin tope de tokens',
          },
        ],
        note: 'Según la página de precios, los planes se renuevan cada mes con cargo a tu saldo mientras lo cubra; los depósitos no son reembolsables y caducan cinco años después de hacerse.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones y modo local',
        content: [
          '**El chat en la nube es el producto principal; el modo local es un extra para quien no quiere que nada salga del dispositivo.** Los puntos siguientes proceden del sitio web, de la página de precios y de los README de GitHub.',
        ],
        items: [
          '**Chat.** Respuestas en streaming, búsqueda web, imágenes adjuntas, razonamiento plegable y conversaciones guardadas solo en tu navegador o, en Android, en el teléfono.',
          '**Modo local.** Los modelos GGUF abiertos se descargan una vez y se ejecutan en el navegador mediante llama.cpp compilado a WebAssembly; el sitio afirma que los mensajes nunca salen del dispositivo. El catálogo de modelos se carga en el navegador y no pudo leerse para esta reseña.',
          '**Pagos.** Según el sitio, los vales se firman a ciegas (RFC 9474), de modo que el operador puede comprobar que un vale es auténtico pero no de qué pago procede. Puedes comprarlos con Monero, Bitcoin, Lightning o tarjeta.',
          '**API.** El plan Pro incluye una API compatible con OpenAI; el sitio ofrece tutoriales para el cliente de OpenAI y curl.',
          '**Tor.** El sitio ofrece un servicio oculto, y la política de privacidad recomienda Tor o una VPN para mayor privacidad.',
        ],
        note: 'Los tutoriales del sitio también cubren la generación de imágenes y los entornos de desarrollo; esta reseña no los probó.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Según la política de privacidad, los mensajes y las respuestas del chat «no se guardan en nuestros servidores», los invitados no reciben cookies y no se recoge ningún correo.** El historial de conversaciones es opcional y se guarda en el almacenamiento local de tu navegador. En el servidor se conservan un hash con clave de tu número de cuenta y un alias aleatorio, datos de facturación (ID de usuario, coste, número de tokens, nombre del modelo, marca de tiempo) y una cookie de inicio de sesión durante 30 días.',
          'La etiqueta «No Logs» tiene un límite: la dirección IP y el user agent del navegador se conservan para prevenir abusos y se «eliminan tras 30 días». En el modo en la nube la solicitud sigue llegando a un proveedor de modelos; la política nombra a OpenRouter (solo rutas sin retención de datos) y NanoGPT (registro de contenido desactivado), usa Stripe para pagos con tarjeta y su propio servidor BTCPay para pagos en criptomonedas, y afirma que no se usan rastreadores de análisis ni publicidad de terceros. Se ofrecen modelos sin censura; lo que generes con ellos es responsabilidad tuya.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El código del servidor no es público y PromptQuorum no auditó el tráfico de red, así que estas afirmaciones son del operador. Quien tenga un modelo de amenazas serio debería verificarlas por su cuenta.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas a quienes no les gusta dar correo o teléfono a servicios de IA.** Basta un número de cuenta.',
          '**Lectores que quieren modelos en la nube y una opción local en una sola herramienta.**',
          '**Desarrolladores que quieren un único endpoint compatible con OpenAI para muchos modelos.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**El operador.** Ni el sitio ni la política de privacidad indican nombre de empresa, dirección ni jurisdicción; el único contacto es una dirección de correo.',
          '**El servidor.** Solo se publican el cliente del navegador y la app de Android; el código que gestiona solicitudes y pagos no, y los repositorios se crearon el 21 de octubre de 2026.',
          '**El anonimato en la práctica.** No se probó si el diseño de vales ciegos y la promesa de no almacenar nada se cumplen; un proveedor o un observador de la red aún podría deducir algo del tráfico.',
          '**El número de modelos y el catálogo local.** La cifra de más de 200 procede del sitio y la lista de modelos locales no cargó, así que no se indican modelos locales, tamaños ni requisitos de hardware.',
          '**La calidad en uso real.** No se probaron la velocidad, la calidad de las respuestas, el rendimiento del modo local ni la app de Android.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[LibreChat](/es/power-local-llm/librechat-review)',
            'Plataformas': 'Web',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat multimodelo de código abierto con funciones de equipo que alojas tú mismo',
          },
          {
            'App': '[LobeChat](/es/local-llms/lobechat-review)',
            'Plataformas': 'Web',
            'Precio / licencia': 'Freemium / MIT',
            'Diferencia clave': 'Interfaz de chat pulida con mercado de plugins',
          },
          {
            'App': '[Open WebUI](/es/local-llms/open-webui-review)',
            'Plataformas': 'Web, escritorio',
            'Precio / licencia': 'Gratis / BSD 3-Clause',
            'Diferencia clave': 'Interfaz autoalojada tipo ChatGPT con RAG integrado, normalmente usada con modelos locales',
          },
          {
            'App': '[Big-AGI](/es/local-llms/big-agi-review)',
            'Plataformas': 'Web',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Interfaz multiproveedor con personas; traes tus propias claves de API',
          },
        ],
        note: 'Los detalles de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la página de cada app. A diferencia de ellas, Obscurify es un servicio alojado que vende el acceso a los modelos por sí mismo.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usar Obscurify sin ninguna cuenta?',
            a: 'Sí, como invitado, con un modelo abierto y un límite de 30 mensajes por hora; los modelos de vanguardia y sin censura requieren un plan de pago.',
          },
          {
            q: '¿Cómo pago sin vincular el pago a mi cuenta?',
            a: 'Compras vales ciegos con Monero, Bitcoin, Lightning o tarjeta y los añades a tu saldo; para mayor privacidad, la política recomienda Tor o una VPN y mantener el retraso de canje predeterminado.',
          },
          {
            q: '¿Es Obscurify de código abierto?',
            a: 'El cliente web y la app de Android son GPL-3.0; no se encontró ningún repositorio del servidor, así que el servicio en conjunto no es totalmente abierto.',
          },
          {
            q: '¿Funciona Obscurify sin conexión?',
            a: 'Solo el modo local puede hacerlo, una vez descargado un modelo en el navegador; no se probó, y el chat en la nube necesita conexión a internet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Obscurify es un chat de IA alojado poco habitual, diseñado para no saber quién eres, con un modo local como alternativa. Su diseño está documentado y el código del cliente es público, pero el operador no tiene nombre, el código del servidor no es público y la promesa de «no logs» conserva las direcciones IP durante 30 días. Encaja con quien quiere modelos en la nube sin correo y acepta esa confianza; quien necesite una configuración verificable debería comparar opciones autoalojadas como [LibreChat](/es/power-local-llm/librechat-review) o [Open WebUI](/es/local-llms/open-webui-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Obscurify](https://obscurify.ai) — descripción del producto, modo local y enlaces, consultado el 23 de octubre de 2026.',
          '[Precios de Obscurify](https://obscurify.ai/pricing) — límites para invitados, planes y facturación, consultado el 23 de octubre de 2026.',
          '[Página «About» de Obscurify](https://obscurify.ai/about) — afirmaciones sobre anonimato, pagos y registros, consultado el 23 de octubre de 2026.',
          '[Política de privacidad de Obscurify](https://obscurify.ai/privacy) — datos recogidos, conservación, proveedores y pagos; última actualización el 22 de octubre de 2026.',
          '[Obscurify-ai en GitHub](https://github.com/Obscurify-ai) — cliente web y app de Android, licencia, versiones y README, consultado el 23 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de LibreChat](/es/power-local-llm/librechat-review) — una interfaz de chat multimodelo de código abierto que alojas tú mismo.',
          '[Reseña de Open WebUI](/es/local-llms/open-webui-review) — una interfaz autoalojada para modelos locales con RAG integrado.',
          '[Reseña de LobeChat](/es/local-llms/lobechat-review) — una interfaz de chat pulida con mercado de plugins.',
          '[Reseña de Big-AGI](/es/local-llms/big-agi-review) — una interfaz de chat multiproveedor con personas.',
          '[Asistentes de chat con LLM locales: comparativa](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de la categoría.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/obscurify-review-hero-fr.webp',
    title: 'Test d\'Obscurify : chat IA anonyme avec mode local optionnel',
    seoTitle: 'Test d\'Obscurify : chat IA anonyme avec mode local',
    intro:
      'Obscurify est un service de chat IA accessible sur [obscurify.ai](https://obscurify.ai), qui se présente comme « votre VPN pour l\'IA » : vous vous inscrivez avec un numéro de compte aléatoire plutôt qu\'une adresse e-mail, vous payez avec des bons que l\'opérateur dit ne pas pouvoir relier à vous, et vous accédez à plus de 200 modèles cloud. Un mode local optionnel exécute des modèles GGUF dans le navigateur. Ce test reflète le site web, sa politique de confidentialité et le code public sur GitHub, consultés le 23 octobre 2026 ; PromptQuorum n\'a pas essayé le service en pratique.',
    metaDescription:
      'Test d\'Obscurify : chat IA anonyme, compte aléatoire, bons aveugles et mode local optionnel dans le navigateur. Offres, confidentialité et limites.',
    twitterDescription:
      'Test d\'Obscurify : chat IA anonyme dans le navigateur et sur Android, avec mode local optionnel. Ce qu\'affirment le site et sa politique de confidentialité, ce que montre le code et ce qui reste non vérifié.',
    audience:
      'Les personnes qui veulent utiliser des modèles d\'IA cloud sans e-mail, numéro de téléphone ni identité, et qui doivent savoir ce que confirment les sources, ce qui relève de la seule déclaration de l\'opérateur et ce qui reste inconnu.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Obscurify',
    targetKeywords: [
      'test obscurify',
      'obscurify ai',
      'chat ia anonyme',
      'chat ia privé sans e-mail',
      'exécuter des modèles gguf dans le navigateur',
      'chat ia payé en bitcoin monero',
      'obscurify vs librechat',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Obscurify est un service web et Android qui, selon sa propre description, permet de discuter avec plus de 200 modèles d\'IA via un numéro de compte aléatoire, sans e-mail, numéro de téléphone ni identité.** Son libellé « No Logs » s\'accompagne de 30 jours de conservation de l\'adresse IP, et l\'opérateur n\'est pas nommé.',
    quickAnswerTop: {
      fr: {
        question: 'Obscurify est-il vraiment anonyme et privé ?',
        answer:
          'Selon sa politique de confidentialité, les messages et les réponses du chat ne sont pas enregistrés sur ses serveurs et aucune identité n\'est requise. Aucune de ces affirmations n\'a été testée, et le code du serveur n\'est pas publié.',
        bullets: [
          'Les invités peuvent discuter sans inscription ; les offres payantes débloquent davantage de modèles.',
          'Mode local optionnel : des modèles GGUF s\'exécutent dans le navigateur, les messages restent sur l\'appareil.',
          'Paiement par bons aveugles via Monero, Bitcoin, Lightning ou carte.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce qu\'Obscurify ?', anchor: 'what-is-obscurify' },
      { label: 'Où le trouver', anchor: 'get-it' },
      { label: 'Offres et tarifs', anchor: 'plans-and-pricing' },
      { label: 'Fonctions et mode local', anchor: 'key-features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'À qui il convient', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obscurify est un service de chat IA qui vend l\'accès à des modèles cloud sans e-mail ni identité et ajoute un mode optionnel exécutant des modèles ouverts dans le navigateur.',
          },
          {
            type: 'plain-terms',
            text: 'Vous ouvrez le site, discutez en tant qu\'invité ou créez un compte qui n\'est qu\'un numéro à 16 chiffres, et rechargez un solde avec des bons ; le mode local télécharge un modèle une fois, puis l\'exécute sur votre propre appareil.',
          },
        ],
        items: [
          'Étendue : le site annonce plus de 200 modèles de grands fournisseurs, dont des modèles de pointe et non censurés, derrière un seul compte.',
          'Code : le client web et l\'application Android sont publiés sous GPL-3.0 depuis le 21 octobre 2026 ; le serveur ne l\'est pas.',
          'Plateformes : tout navigateur, un service caché Tor et un APK Android (version 0.4.1, dernière mise à jour le 21 octobre 2026).',
          'Opérateur : aucune société, personne ni juridiction n\'est nommée sur le site.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur le site officiel, sa politique de confidentialité et les dépôts GitHub publics, consultés le 23 octobre 2026. Il n\'a comporté ni utilisation pratique, ni analyse du trafic, ni mesures de performance.',
          },
        ],
      },
      overview: {
        id: 'what-is-obscurify',
        title: 'Qu\'est-ce qu\'Obscurify ?',
        content: [
          '**Selon son site web, Obscurify est un service de chat IA privé qui s\'interpose entre vous et les fournisseurs de modèles, retire les éléments d\'identification de chaque requête et la transmet avec ses propres identifiants.** Le site le décrit comme « votre VPN pour l\'IA ». Vous vous inscrivez avec un numéro de compte aléatoire à 16 chiffres, sans e-mail, numéro de téléphone, nom d\'utilisateur ni mot de passe, et vous discutez avec des modèles de grands fournisseurs d\'IA.',
          'Un second mode exécute des modèles GGUF open source directement dans le navigateur, via une version WebAssembly de llama.cpp, sans requête vers les serveurs d\'Obscurify. Une application Android est un client natif distinct du même service. Ce test ne couvre que [obscurify.ai](https://obscurify.ai) et son application Android.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où le trouver',
        content: [
          '**La version web ne demande aucune installation : ouvrez le site et discutez en tant qu\'invité.** L\'application Android est un APK distinct à installer manuellement, car aucune fiche Google Play ni App Store n\'a été trouvée.',
        ],
        columns: ['Plateforme', 'Où le trouver'],
        rows: [
          {
            'Plateforme': 'Web (tout navigateur)',
            'Où le trouver': '[obscurify.ai](https://obscurify.ai) (chat invité, sans inscription)',
          },
          {
            'Plateforme': 'Android',
            'Où le trouver': '[GitHub Releases](https://github.com/Obscurify-ai/obscurify-android/releases) (APK, installation manuelle)',
          },
          {
            'Plateforme': 'Code source',
            'Où le trouver': '[Obscurify-ai sur GitHub](https://github.com/Obscurify-ai) (client web et application Android, GPL-3.0)',
          },
          {
            'Plateforme': 'Site web',
            'Où le trouver': '[obscurify.ai](https://obscurify.ai) (propose aussi un service caché Tor)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où le trouver': '[obscurify.ai/privacy](https://obscurify.ai/privacy) (dernière mise à jour : 22 octobre 2026)',
          },
        ],
        note: 'Version testée : application Android 0.4.1, publiée sur GitHub Releases le 21 octobre 2026. Le site web et le client web n\'ont pas de numéro de version. Pour installer l\'APK, il faut autoriser les installations depuis votre navigateur ou gestionnaire de fichiers ; aucun terminal n\'est nécessaire.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Offres et tarifs',
        content: [
          '**Obscurify fonctionne en freemium : les invités discutent gratuitement, tout le reste est prépayé.** Les prix sont en dollars américains ; aucun prix en monnaie locale n\'a été trouvé.',
        ],
        columns: ['Offre', 'Prix', 'Contenu'],
        rows: [
          {
            'Offre': 'Invité',
            'Prix': 'Gratuit',
            'Contenu': 'Sans compte, 30 messages par heure, un modèle ouvert',
          },
          {
            'Offre': 'Pay As You Go',
            'Prix': '0 $ par mois',
            'Contenu': 'Solde prépayé, presque tous les modèles, 1 M de jetons/mois',
          },
          {
            'Offre': 'Casual',
            'Prix': '20 $ par mois',
            'Contenu': 'Modèles de pointe, 15 $ d\'usage, 10 M de jetons par mois',
          },
          {
            'Offre': 'Pro',
            'Prix': '45 $ par mois',
            'Contenu': 'Non censurés, API, 35 $ d\'usage, sans plafond de jetons',
          },
        ],
        note: 'Selon la page des tarifs, les offres se renouvellent chaque mois depuis votre solde tant qu\'il les couvre ; les dépôts ne sont pas remboursables et expirent cinq ans après leur versement.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions et mode local',
        content: [
          '**Le chat cloud est le produit principal ; le mode local est un complément pour ceux qui veulent que rien ne quitte l\'appareil.** Les points ci-dessous proviennent du site, de la page des tarifs et des README GitHub.',
        ],
        items: [
          '**Chat.** Réponses en streaming, recherche web, images jointes, raisonnement repliable et conversations conservées uniquement dans votre navigateur ou, sur Android, sur le téléphone.',
          '**Mode local.** Des modèles GGUF ouverts se téléchargent une fois et s\'exécutent dans le navigateur via llama.cpp compilé en WebAssembly ; le site affirme que les messages ne quittent jamais l\'appareil. Le catalogue de modèles se charge dans le navigateur et n\'a pas pu être lu pour ce test.',
          '**Paiements.** Selon le site, les bons sont signés à l\'aveugle (RFC 9474) : l\'opérateur peut vérifier qu\'un bon est authentique, mais pas de quel paiement il provient. Vous pouvez les acheter avec Monero, Bitcoin, Lightning ou carte.',
          '**API.** L\'offre Pro inclut une API compatible OpenAI ; le site propose des tutoriels pour le client OpenAI et curl.',
          '**Tor.** Le site propose un service caché, et la politique de confidentialité recommande Tor ou un VPN pour une meilleure protection.',
        ],
        note: 'Les tutoriels du site couvrent aussi la génération d\'images et les environnements de développement ; ce test ne les a pas essayés.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**Selon la politique de confidentialité, les messages et les réponses du chat « ne sont pas enregistrés sur nos serveurs », les invités ne reçoivent aucun cookie et aucune adresse e-mail n\'est collectée.** L\'historique des conversations est facultatif et reste dans le stockage local de votre navigateur. Côté serveur sont conservés un hachage à clé de votre numéro de compte avec un identifiant aléatoire, des données de facturation (identifiant utilisateur, coût, nombre de jetons, nom du modèle, horodatage) et un cookie de connexion pendant 30 jours.',
          'Le libellé « No Logs » a une limite : l\'adresse IP et le user agent du navigateur sont conservés pour prévenir les abus et « supprimés après 30 jours ». En mode cloud, la requête atteint toujours un fournisseur de modèles ; la politique cite OpenRouter (uniquement des routes sans conservation des données) et NanoGPT (journalisation du contenu désactivée), utilise Stripe pour les paiements par carte et son propre serveur BTCPay pour les cryptomonnaies, et indique qu\'aucun outil tiers d\'analyse ou de publicité n\'est utilisé. Des modèles non censurés sont proposés ; ce que vous générez avec eux relève de votre responsabilité.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le code du serveur n\'est pas publié et PromptQuorum n\'a pas audité le trafic réseau : ces affirmations sont donc celles de l\'opérateur. Toute personne ayant un modèle de menace sérieux devrait les vérifier de son côté.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il convient',
        items: [
          '**Les personnes qui n\'aiment pas donner e-mail ou téléphone aux services d\'IA.** Un numéro de compte suffit.',
          '**Les lecteurs qui veulent des modèles cloud et une option locale dans un seul outil.**',
          '**Les développeurs qui veulent un seul point d\'accès compatible OpenAI pour de nombreux modèles.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**L\'opérateur.** Ni le site ni la politique de confidentialité n\'indiquent de nom de société, d\'adresse ou de juridiction ; le seul contact est une adresse e-mail.',
          '**Le serveur.** Seuls le client navigateur et l\'application Android sont publiés ; le code qui traite les requêtes et les paiements ne l\'est pas, et les dépôts ont été créés le 21 octobre 2026.',
          '**L\'anonymat en pratique.** Nous n\'avons pas testé si la conception à bons aveugles et l\'absence de stockage tiennent ; un fournisseur ou un observateur du réseau peut encore déduire quelque chose du trafic.',
          '**Le nombre de modèles et le catalogue local.** Le chiffre de plus de 200 vient du site et la liste des modèles locaux ne s\'est pas chargée : aucun modèle local, aucune taille ni aucune exigence matérielle n\'est donc indiqué.',
          '**La qualité à l\'usage.** La vitesse, la qualité des réponses, les performances du mode local et l\'application Android n\'ont pas été testées.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': '[LibreChat](/fr/power-local-llm/librechat-review)',
            'Plateformes': 'Web',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat multimodèle open source avec fonctions d\'équipe, que vous hébergez vous-même',
          },
          {
            'Application': '[LobeChat](/fr/local-llms/lobechat-review)',
            'Plateformes': 'Web',
            'Prix / licence': 'Freemium / MIT',
            'Différence clé': 'Interface de chat soignée avec une place de marché de plugins',
          },
          {
            'Application': '[Open WebUI](/fr/local-llms/open-webui-review)',
            'Plateformes': 'Web, bureau',
            'Prix / licence': 'Gratuit / BSD 3-Clause',
            'Différence clé': 'Interface auto-hébergée de type ChatGPT avec RAG intégré, généralement utilisée avec des modèles locaux',
          },
          {
            'Application': '[Big-AGI](/fr/local-llms/big-agi-review)',
            'Plateformes': 'Web',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Interface multifournisseur avec personas ; vous apportez vos propres clés d\'API',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la page de chaque application. Contrairement à elles, Obscurify est un service hébergé qui vend lui-même l\'accès aux modèles.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je utiliser Obscurify sans aucun compte ?',
            a: 'Oui, en tant qu\'invité, avec un modèle ouvert et une limite de 30 messages par heure ; les modèles de pointe et non censurés exigent une offre payante.',
          },
          {
            q: 'Comment payer sans relier le paiement à mon compte ?',
            a: 'Vous achetez des bons aveugles avec Monero, Bitcoin, Lightning ou carte et les ajoutez à votre solde ; pour plus de confidentialité, la politique recommande Tor ou un VPN et de conserver le délai d\'utilisation par défaut.',
          },
          {
            q: 'Obscurify est-il open source ?',
            a: 'Le client web et l\'application Android sont sous GPL-3.0 ; aucun dépôt du serveur n\'a été trouvé, le service dans son ensemble n\'est donc pas entièrement ouvert.',
          },
          {
            q: 'Obscurify fonctionne-t-il hors ligne ?',
            a: 'Seul le mode local le peut, une fois un modèle téléchargé dans le navigateur ; cela n\'a pas été testé, et le chat cloud exige une connexion internet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Obscurify est un chat IA hébergé inhabituel, conçu pour ne pas savoir qui vous êtes, avec un mode local en secours. Sa conception est documentée et le code du client est public, mais l\'opérateur n\'est pas nommé, le code du serveur n\'est pas publié et la promesse « no logs » conserve les adresses IP pendant 30 jours. Il convient aux lecteurs qui veulent des modèles cloud sans e-mail et acceptent cette confiance ; ceux qui ont besoin d\'une configuration vérifiable devraient comparer des solutions auto-hébergées comme [LibreChat](/fr/power-local-llm/librechat-review) ou [Open WebUI](/fr/local-llms/open-webui-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web d\'Obscurify](https://obscurify.ai) — description du produit, mode local et liens, consulté le 23 octobre 2026.',
          '[Tarifs d\'Obscurify](https://obscurify.ai/pricing) — limites invité, offres et facturation, consulté le 23 octobre 2026.',
          '[Page « About » d\'Obscurify](https://obscurify.ai/about) — déclarations sur l\'anonymat, les paiements et les journaux, consulté le 23 octobre 2026.',
          '[Politique de confidentialité d\'Obscurify](https://obscurify.ai/privacy) — données collectées, conservation, fournisseurs et paiements ; dernière mise à jour le 22 octobre 2026.',
          '[Obscurify-ai sur GitHub](https://github.com/Obscurify-ai) — client web et application Android, licence, versions et README, consulté le 23 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de LibreChat](/fr/power-local-llm/librechat-review) — une interface de chat multimodèle open source à héberger soi-même.',
          '[Test d\'Open WebUI](/fr/local-llms/open-webui-review) — une interface auto-hébergée pour modèles locaux avec RAG intégré.',
          '[Test de LobeChat](/fr/local-llms/lobechat-review) — une interface de chat soignée avec une place de marché de plugins.',
          '[Test de Big-AGI](/fr/local-llms/big-agi-review) — une interface de chat multifournisseur avec personas.',
          '[Assistants de chat LLM locaux comparés](/fr/power-local-llm/local-llm-chat-assistants-compared) — la comparaison de la catégorie.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/obscurify-review-hero-ja.webp',
    title: 'Obscurifyレビュー：ローカルモードも使える匿名AIチャット',
    seoTitle: 'Obscurifyレビュー：匿名AIチャットとローカルモード',
    intro:
      'Obscurifyは、[obscurify.ai](https://obscurify.ai)で提供されるAIチャットサービスで、自らを「AI向けのVPN」と説明しています。メールアドレスの代わりにランダムなアカウント番号で登録し、運営者が自分には紐づけられないと述べるバウチャーで支払い、200以上のクラウドモデルを利用できます。任意のローカルモードでは、ブラウザ内でGGUFモデルを実行します。このレビューは、2026年10月23日時点のウェブサイト、プライバシーポリシー、公開GitHubコードの内容に基づいており、PromptQuorumは実際の使用テストを行っていません。',
    metaDescription:
      'Obscurifyレビュー：ランダムなアカウント番号、ブラインドバウチャー決済、ブラウザ内ローカルモードを備えた匿名AIチャット。料金、プライバシー、未検証の点を解説します。',
    twitterDescription:
      'Obscurifyレビュー：ブラウザとAndroidで使える匿名AIチャット。ローカルモードも任意で利用可能。サイトとポリシーの主張、コードで確認できること、未検証の点を整理します。',
    audience:
      'メールアドレス・電話番号・身元を明かさずにクラウドAIモデルを使いたい人で、情報源が確認していること、運営者の主張にすぎないこと、不明な点を知りたい人。',
    readTime: '7分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Obscurify レビュー',
    targetKeywords: [
      'obscurify レビュー',
      'obscurify ai',
      '匿名 ai チャット',
      'メール不要 ai チャット',
      'ブラウザで gguf モデルを実行',
      'ビットコイン モネロ で支払う ai チャット',
      'obscurify vs librechat',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Obscurifyは、公式の説明によると、メール・電話番号・身元なしで、ランダムなアカウント番号から200以上のAIモデルとチャットできるウェブ／Androidサービスです。** 「ノーログ」の表示がある一方でIPアドレスは30日間保持され、運営者の名前は明示されていません。',
    quickAnswerTop: {
      ja: {
        question: 'Obscurifyは本当に匿名でプライベートですか？',
        answer:
          'プライバシーポリシーによると、チャットの入力と応答はサーバーに保存されず、身元の提示も不要です。どちらの主張も検証しておらず、サーバーのコードは公開されていません。',
        bullets: [
          'ゲストは登録なしでチャットでき、有料プランでモデルが増えます。',
          '任意のローカルモード：GGUFモデルをブラウザ内で実行し、入力は端末内に留まります。',
          '支払いはブラインドバウチャーで、Monero・Bitcoin・Lightning・カードに対応します。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Obscurifyとは?', anchor: 'what-is-obscurify' },
      { label: '入手方法', anchor: 'get-it' },
      { label: 'プランと料金', anchor: 'plans-and-pricing' },
      { label: '機能とローカルモード', anchor: 'key-features' },
      { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替アプリ', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
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
            text: 'Obscurifyは、メールや身元なしでクラウドモデルを利用できるAIチャットサービスで、オープンモデルをブラウザ内で動かす任意モードも備えています。',
          },
          {
            type: 'plain-terms',
            text: 'サイトを開き、ゲストとしてチャットするか、16桁の番号だけのアカウントを作成して、バウチャーで残高をチャージします。ローカルモードはモデルを一度ダウンロードすると、自分の端末上で実行します。',
          },
        ],
        items: [
          '対応範囲：サイトによると、大手プロバイダーの200以上のモデル（最先端モデルや無検閲モデルを含む）を1つのアカウントで利用できます。',
          'コード：ウェブクライアントとAndroidアプリは2026年10月21日からGPL-3.0で公開されています。サーバーは非公開です。',
          'プラットフォーム：任意のブラウザ、Torの隠しサービス、AndroidのAPK（バージョン0.4.1、最終更新2026年10月21日）。',
          '運営者：サイト上に企業名・個人名・管轄は記載されていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月23日に確認した公式サイト、プライバシーポリシー、公開GitHubリポジトリに基づいています。実際の使用、通信解析、ベンチマークは行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-obscurify',
        title: 'Obscurifyとは?',
        content: [
          '**公式サイトによると、ObscurifyはプライベートなAIチャットサービスで、利用者とモデル提供元の間に入り、各リクエストから識別情報を取り除いて自社の認証情報で転送します。** サイトはこれを「AI向けのVPN」と呼んでいます。メール、電話番号、ユーザー名、パスワードは不要で、ランダムな16桁のアカウント番号で登録し、大手AIプロバイダーのモデルとチャットします。',
          '2つ目のモードでは、llama.cppのWebAssembly版を使い、オープンソースのGGUFモデルをブラウザ内で直接実行します。Obscurifyのサーバーへのリクエストは発生しません。Androidアプリは同じサービスの別のネイティブクライアントです。このレビューの対象は[obscurify.ai](https://obscurify.ai)とそのAndroidアプリのみです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**ウェブ版はインストール不要です。サイトを開いてゲストとしてチャットできます。** Androidアプリは別のAPKで、手動でインストールする必要があります。Google PlayやApp Storeの掲載は見つかりませんでした。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'ウェブ（任意のブラウザ）',
            '入手先': '[obscurify.ai](https://obscurify.ai)（ゲストチャット、登録不要）',
          },
          {
            'プラットフォーム': 'Android',
            '入手先': '[GitHub Releases](https://github.com/Obscurify-ai/obscurify-android/releases)（APK、手動インストール）',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[GitHubのObscurify-ai](https://github.com/Obscurify-ai)（ウェブクライアントとAndroidアプリ、GPL-3.0）',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[obscurify.ai](https://obscurify.ai)（Torの隠しサービスも提供）',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[obscurify.ai/privacy](https://obscurify.ai/privacy)（最終更新：2026年10月22日）',
          },
        ],
        note: '確認したバージョン：Androidアプリ0.4.1（2026年10月21日にGitHub Releasesで公開）。ウェブサイトとウェブクライアントにバージョン番号はありません。APKのインストールには、ブラウザやファイルマネージャーからのインストール許可が必要で、ターミナルは不要です。',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'プランと料金',
        content: [
          '**Obscurifyはフリーミアムです。ゲストは無料でチャットでき、それ以外は前払い制です。** 価格は米ドル表記で、現地通貨の価格は見つかりませんでした。',
        ],
        columns: ['プラン', '価格', '含まれる内容'],
        rows: [
          {
            'プラン': 'ゲスト',
            '価格': '無料',
            '含まれる内容': 'アカウント不要、1時間30メッセージ、オープンモデル1つ',
          },
          {
            'プラン': 'Pay As You Go',
            '価格': '月額$0',
            '含まれる内容': '前払い残高、大半のモデル、月100万トークン',
          },
          {
            'プラン': 'Casual',
            '価格': '月額$20',
            '含まれる内容': '最先端モデル、$15分の利用、月1,000万トークン',
          },
          {
            'プラン': 'Pro',
            '価格': '月額$45',
            '含まれる内容': '無検閲モデル、API、$35分の利用、トークン上限なし',
          },
        ],
        note: '料金ページによると、プランは残高で賄える限り毎月更新されます。入金は返金不可で、入金から5年後に失効します。',
      },
      features: {
        id: 'key-features',
        title: '機能とローカルモード',
        content: [
          '**クラウドチャットが主要機能で、ローカルモードは端末から何も外に出したくない人向けの追加機能です。** 以下の項目は、ウェブサイト、料金ページ、GitHubのREADMEに基づきます。',
        ],
        items: [
          '**チャット。** ストリーミング応答、ウェブ検索、画像の添付、折りたたみ可能な推論表示に対応し、会話はブラウザ内、Androidでは端末内にのみ保存されます。',
          '**ローカルモード。** オープンなGGUFモデルを一度ダウンロードし、WebAssemblyにコンパイルしたllama.cppでブラウザ内実行します。サイトによると、入力は端末の外に出ません。モデルカタログはブラウザ内で読み込まれ、このレビューでは確認できませんでした。',
          '**支払い。** サイトによると、バウチャーはブラインド署名（RFC 9474）されるため、運営者はバウチャーが本物であることは確認できても、どの支払いに由来するかは分かりません。Monero、Bitcoin、Lightning、カードで購入できます。',
          '**API。** ProプランにはOpenAI互換APIが含まれ、サイトにはOpenAIクライアントとcurlのチュートリアルがあります。',
          '**Tor。** サイトは隠しサービスを提供しており、プライバシーポリシーはより高いプライバシーのためにTorまたはVPNの利用を推奨しています。',
        ],
        note: 'サイトのチュートリアルには画像生成や開発環境の設定も含まれますが、このレビューでは試していません。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**プライバシーポリシーによると、チャットの入力と応答は「当社のサーバーには保存されず」、ゲストにはCookieが発行されず、メールアドレスも収集されません。** 会話履歴は任意で、ブラウザのローカルストレージに保存されます。サーバー側には、アカウント番号の鍵付きハッシュとランダムなハンドル、課金記録（ユーザーID、費用、トークン数、モデル名、タイムスタンプ）、30日間有効なログインCookieが残ります。',
          '「No Logs」の表示には限界があります。IPアドレスとブラウザのユーザーエージェントは不正防止のため保持され、「30日後に削除」されます。クラウドモードでは、リクエストは引き続きモデル提供元に届きます。ポリシーはOpenRouter（データ保持なしのルートのみ）とNanoGPT（コンテンツのログ記録を無効化）を挙げ、カード決済にStripe、暗号資産の決済に自社のBTCPayサーバーを使用し、第三者の分析・広告トラッカーは使わないと述べています。無検閲モデルも提供されており、それらで生成した内容の責任は利用者にあります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'サーバーのコードは公開されておらず、PromptQuorumはネットワーク通信を監査していません。これらの記述は運営者の主張です。厳しい脅威モデルを想定する場合は、独自に検証してください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**AIサービスにメールや電話番号を渡したくない人。** アカウント番号だけで足ります。',
          '**クラウドモデルとローカル実行を1つのツールで使いたい人。**',
          '**多数のモデルに1つのOpenAI互換エンドポイントで接続したい開発者。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**運営者。** サイトにもプライバシーポリシーにも、会社名・住所・管轄の記載がなく、連絡先はメールアドレスのみです。',
          '**サーバー。** 公開されているのはブラウザクライアントとAndroidアプリのみで、リクエストと決済を処理するコードは非公開です。リポジトリは2026年10月21日に作成されました。',
          '**実際の匿名性。** ブラインドバウチャーの設計や「保存しない」という主張が成り立つかは検証していません。提供元やネットワーク上の観測者が通信から何かを推測できる可能性は残ります。',
          '**モデル数とローカルカタログ。** 200以上という数字はサイトの記載で、ローカルモデルの一覧は読み込まれませんでした。そのためローカルモデル、サイズ、ハードウェア要件は記載していません。',
          '**実際の品質。** 速度、回答品質、ローカルモードの性能、Androidアプリは検証していません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[LibreChat](/ja/power-local-llm/librechat-review)',
            'プラットフォーム': 'ウェブ',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': 'チーム機能を備えた、自分でホストするオープンソースのマルチモデルチャット',
          },
          {
            'アプリ': '[LobeChat](/ja/local-llms/lobechat-review)',
            'プラットフォーム': 'ウェブ',
            '価格 / ライセンス': 'フリーミアム / MIT',
            '主な違い': 'プラグインマーケットプレイスを備えた洗練されたチャット画面',
          },
          {
            'アプリ': '[Open WebUI](/ja/local-llms/open-webui-review)',
            'プラットフォーム': 'ウェブ、デスクトップ',
            '価格 / ライセンス': '無料 / BSD 3-Clause',
            '主な違い': 'RAG内蔵のセルフホスト型ChatGPT風画面で、通常はローカルモデルと併用',
          },
          {
            'アプリ': '[Big-AGI](/ja/local-llms/big-agi-review)',
            'プラットフォーム': 'ウェブ',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': 'ペルソナ付きのマルチプロバイダー対応フロントエンドで、自分のAPIキーを使用',
          },
        ],
        note: '競合の詳細は変わりやすいため、各アプリのページで最新の価格・ライセンス・対応プラットフォームを確認してください。これらと異なり、Obscurifyはモデルへのアクセス自体を販売するホスト型サービスです。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'アカウントなしでObscurifyを使えますか？',
            a: 'はい。ゲストとして、オープンモデル1つを1時間30メッセージまで利用できます。最先端モデルや無検閲モデルには有料プランが必要です。',
          },
          {
            q: '支払いをアカウントに紐づけずに払うには？',
            a: 'Monero、Bitcoin、Lightning、カードでブラインドバウチャーを購入し、残高に追加します。より高いプライバシーのため、ポリシーはTorまたはVPNの利用と、既定の利用遅延を維持することを推奨しています。',
          },
          {
            q: 'Obscurifyはオープンソースですか？',
            a: 'ウェブクライアントとAndroidアプリはGPL-3.0です。サーバーのリポジトリは見つからなかったため、サービス全体が完全にオープンというわけではありません。',
          },
          {
            q: 'Obscurifyはオフラインで使えますか？',
            a: 'ブラウザにモデルをダウンロードした後のローカルモードだけが可能ですが、検証していません。クラウドチャットにはインターネット接続が必要です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Obscurifyは、利用者が誰かを知らないことを前提に作られた珍しいホスト型AIチャットで、予備としてローカルモードを備えています。設計は文書化されクライアントのコードも公開されていますが、運営者は名前が不明で、サーバーのコードは非公開、「ノーログ」の主張でもIPアドレスは30日間保持されます。メールなしでクラウドモデルを使いたく、その信頼を受け入れられる人に向いています。検証可能な構成が必要なら、[LibreChat](/ja/power-local-llm/librechat-review)や[Open WebUI](/ja/local-llms/open-webui-review)などのセルフホスト型を比較してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Obscurify公式サイト](https://obscurify.ai) — 製品説明、ローカルモード、リンク。2026年10月23日に確認。',
          '[Obscurifyの料金ページ](https://obscurify.ai/pricing) — ゲストの制限、プラン、課金。2026年10月23日に確認。',
          '[Obscurifyのaboutページ](https://obscurify.ai/about) — 匿名性、支払い、ログに関する記述。2026年10月23日に確認。',
          '[Obscurifyのプライバシーポリシー](https://obscurify.ai/privacy) — 収集データ、保持期間、提供元、支払い。最終更新2026年10月22日。',
          '[GitHubのObscurify-ai](https://github.com/Obscurify-ai) — ウェブクライアントとAndroidアプリ、ライセンス、リリース、README。2026年10月23日に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[LibreChatレビュー](/ja/power-local-llm/librechat-review) — 自分でホストするオープンソースのマルチモデルチャット画面。',
          '[Open WebUIレビュー](/ja/local-llms/open-webui-review) — RAG内蔵のローカルモデル向けセルフホスト画面。',
          '[LobeChatレビュー](/ja/local-llms/lobechat-review) — プラグインマーケットプレイスを備えた洗練されたチャット画面。',
          '[Big-AGIレビュー](/ja/local-llms/big-agi-review) — ペルソナ付きのマルチプロバイダー対応チャットフロントエンド。',
          '[ローカルLLMチャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared) — カテゴリ比較。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/obscurify-review-hero-pt.webp',
    title: 'Análise do Obscurify: chat de IA anônimo com modo local opcional',
    seoTitle: 'Análise do Obscurify: chat de IA anônimo com modo local',
    intro:
      'O Obscurify é um serviço de chat de IA em [obscurify.ai](https://obscurify.ai) que se descreve como "a sua VPN para a IA": você se cadastra com um número de conta aleatório em vez de um e-mail, paga com vouchers que o operador diz não conseguir vincular a você e acessa mais de 200 modelos na nuvem. Um modo local opcional executa modelos GGUF dentro do navegador. Esta análise reflete o site, a política de privacidade e o código público no GitHub, verificados em 23 de outubro de 2026; a PromptQuorum não testou o serviço na prática.',
    metaDescription:
      'Análise do Obscurify: chat de IA anônimo com conta aleatória, vouchers cegos e modo local opcional no navegador. Planos, privacidade, limites.',
    twitterDescription:
      'Análise do Obscurify: chat de IA anônimo no navegador e no Android, com modo local opcional. O que o site e a política de privacidade afirmam, o que o código mostra e o que continua sem verificação.',
    audience:
      'Pessoas que querem usar modelos de IA na nuvem sem e-mail, telefone ou identidade e precisam saber o que as fontes confirmam, o que é apenas afirmação do operador e o que é desconhecido.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Obscurify',
    targetKeywords: [
      'análise obscurify',
      'obscurify ai',
      'chat de ia anônimo',
      'chat de ia privado sem e-mail',
      'executar modelos gguf no navegador',
      'chat de ia pago com bitcoin monero',
      'obscurify vs librechat',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**O Obscurify é um serviço web e para Android que, segundo a própria descrição, permite conversar com mais de 200 modelos de IA por meio de um número de conta aleatório, sem e-mail, telefone ou identidade.** O rótulo "sem logs" convive com 30 dias de retenção do IP, e o operador não é nomeado.',
    quickAnswerTop: {
      pt: {
        question: 'O Obscurify é realmente anônimo e privado?',
        answer:
          'Segundo a política de privacidade, as mensagens e respostas do chat não são salvas nos servidores e nenhuma identidade é exigida. Nenhuma das afirmações foi testada, e o código do servidor não é público.',
        bullets: [
          'Convidados podem conversar sem cadastro; os planos pagos liberam mais modelos.',
          'Modo local opcional: modelos GGUF rodam no navegador, e as mensagens ficam no dispositivo.',
          'Pagamentos usam vouchers cegos via Monero, Bitcoin, Lightning ou cartão.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Obscurify?', anchor: 'what-is-obscurify' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Planos e preços', anchor: 'plans-and-pricing' },
      { label: 'Recursos e modo local', anchor: 'key-features' },
      { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
      { label: 'Para quem é indicado', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
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
            text: 'O Obscurify é um serviço de chat de IA que vende acesso a modelos na nuvem sem e-mail nem identidade e acrescenta um modo opcional que executa modelos abertos no navegador.',
          },
          {
            type: 'plain-terms',
            text: 'Você abre o site, conversa como convidado ou cria uma conta que é só um número de 16 dígitos e recarrega o saldo com vouchers; o modo local baixa um modelo uma vez e depois o executa no seu próprio dispositivo.',
          },
        ],
        items: [
          'Alcance: o site lista mais de 200 modelos de grandes provedores, incluindo modelos de ponta e sem censura, atrás de uma única conta.',
          'Código: o cliente web e o app Android são publicados sob GPL-3.0 desde 21 de outubro de 2026; o servidor não.',
          'Plataformas: qualquer navegador, um serviço oculto do Tor e um APK para Android (versão 0.4.1, última atualização em 21 de outubro de 2026).',
          'Operador: nenhuma empresa, pessoa ou jurisdição é citada no site.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no site oficial, na política de privacidade e nos repositórios públicos do GitHub, verificados em 23 de outubro de 2026. Não envolveu uso prático, análise de tráfego nem benchmarks.',
          },
        ],
      },
      overview: {
        id: 'what-is-obscurify',
        title: 'O que é o Obscurify?',
        content: [
          '**Segundo o site, o Obscurify é um serviço de chat de IA privado que fica entre você e os provedores de modelos, remove os dados de identificação de cada solicitação e a repassa com as próprias credenciais.** O site chama isso de "a sua VPN para a IA". Você se cadastra com um número de conta aleatório de 16 dígitos, sem e-mail, telefone, nome de usuário ou senha, e conversa com modelos de grandes provedores de IA.',
          'Um segundo modo executa modelos GGUF de código aberto diretamente no navegador, por meio de uma versão do llama.cpp em WebAssembly, sem enviar solicitações aos servidores do Obscurify. Um app Android é um cliente nativo separado do mesmo serviço. Esta análise cobre apenas [obscurify.ai](https://obscurify.ai) e o app Android.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**A versão web não exige instalação: abra o site e converse como convidado.** O app Android é um APK separado que precisa ser instalado manualmente, porque não foi encontrada página no Google Play nem na App Store.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Web (qualquer navegador)',
            'Onde obter': '[obscurify.ai](https://obscurify.ai) (chat de convidado, sem cadastro)',
          },
          {
            'Plataforma': 'Android',
            'Onde obter': '[GitHub Releases](https://github.com/Obscurify-ai/obscurify-android/releases) (APK, instalação manual)',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde obter': '[Obscurify-ai no GitHub](https://github.com/Obscurify-ai) (cliente web e app Android, GPL-3.0)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[obscurify.ai](https://obscurify.ai) (também oferece um serviço oculto do Tor)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[obscurify.ai/privacy](https://obscurify.ai/privacy) (última atualização: 22 de outubro de 2026)',
          },
        ],
        note: 'Versão analisada: app Android 0.4.1, publicado no GitHub Releases em 21 de outubro de 2026. O site e o cliente web não têm número de versão. Para instalar o APK, é preciso permitir instalações pelo navegador ou gerenciador de arquivos; não é necessário terminal.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'Planos e preços',
        content: [
          '**O Obscurify é freemium: convidados conversam de graça e todo o resto é pré-pago.** Os preços são em dólares americanos; não foram encontrados preços em moeda local.',
        ],
        columns: ['Plano', 'Preço', 'O que inclui'],
        rows: [
          {
            'Plano': 'Convidado',
            'Preço': 'Grátis',
            'O que inclui': 'Sem conta, 30 mensagens por hora, um modelo aberto',
          },
          {
            'Plano': 'Pay As You Go',
            'Preço': 'US$ 0 por mês',
            'O que inclui': 'Saldo pré-pago, a maioria dos modelos, 1 mi de tokens/mês',
          },
          {
            'Plano': 'Casual',
            'Preço': 'US$ 20 por mês',
            'O que inclui': 'Modelos de ponta, US$ 15 de uso, 10 mi de tokens/mês',
          },
          {
            'Plano': 'Pro',
            'Preço': 'US$ 45 por mês',
            'O que inclui': 'Sem censura, API, US$ 35 de uso, sem limite de tokens',
          },
        ],
        note: 'Segundo a página de preços, os planos são renovados todo mês a partir do seu saldo enquanto ele os cobrir; os depósitos não são reembolsáveis e expiram cinco anos depois de feitos.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos e modo local',
        content: [
          '**O chat na nuvem é o produto principal; o modo local é um extra para quem não quer que nada saia do dispositivo.** Os itens abaixo vêm do site, da página de preços e dos READMEs do GitHub.',
        ],
        items: [
          '**Chat.** Respostas em streaming, busca na web, anexos de imagem, raciocínio recolhível e conversas guardadas apenas no seu navegador ou, no Android, no celular.',
          '**Modo local.** Modelos GGUF abertos são baixados uma vez e executados no navegador por meio do llama.cpp compilado para WebAssembly; o site afirma que as mensagens nunca saem do dispositivo. O catálogo de modelos é carregado no navegador e não pôde ser lido para esta análise.',
          '**Pagamentos.** Segundo o site, os vouchers são assinados às cegas (RFC 9474); assim, o operador pode verificar se um voucher é genuíno, mas não de qual pagamento ele veio. Você pode comprá-los com Monero, Bitcoin, Lightning ou cartão.',
          '**API.** O plano Pro inclui uma API compatível com a OpenAI; o site traz tutoriais para o cliente da OpenAI e para o curl.',
          '**Tor.** O site oferece um serviço oculto, e a política de privacidade recomenda Tor ou uma VPN para mais privacidade.',
        ],
        note: 'Os tutoriais do site também abordam geração de imagens e ambientes de desenvolvimento; esta análise não os testou.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Segundo a política de privacidade, as mensagens e respostas do chat "não são salvas em nossos servidores", convidados não recebem cookies e nenhum e-mail é coletado.** O histórico de conversas é opcional e fica no armazenamento local do seu navegador. No servidor ficam um hash com chave do seu número de conta e um identificador aleatório, dados de cobrança (ID do usuário, custo, número de tokens, nome do modelo, carimbo de data e hora) e um cookie de login por 30 dias.',
          'O rótulo "No Logs" tem um limite: o endereço IP e o user agent do navegador são guardados para evitar abusos e "excluídos após 30 dias". No modo nuvem, a solicitação ainda chega a um provedor de modelos; a política cita OpenRouter (somente rotas sem retenção de dados) e NanoGPT (registro de conteúdo desativado), usa o Stripe para pagamentos com cartão e o servidor BTCPay próprio para criptomoedas, e declara que não usa rastreadores de análise ou publicidade de terceiros. Modelos sem censura são oferecidos; o que você gerar com eles é responsabilidade sua.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O código do servidor não é público e a PromptQuorum não auditou o tráfego de rede; portanto, estas afirmações são do operador. Quem tem um modelo de ameaça sério deve verificá-las por conta própria.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Quem não gosta de dar e-mail ou telefone a serviços de IA.** Um número de conta basta.',
          '**Leitores que querem modelos na nuvem e uma opção local numa só ferramenta.**',
          '**Desenvolvedores que querem um único endpoint compatível com a OpenAI para muitos modelos.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**O operador.** Nem o site nem a política de privacidade informam nome da empresa, endereço ou jurisdição; o único contato é um endereço de e-mail.',
          '**O servidor.** Só o cliente do navegador e o app Android são publicados; o código que trata solicitações e pagamentos não é, e os repositórios foram criados em 21 de outubro de 2026.',
          '**O anonimato na prática.** Não foi testado se o desenho dos vouchers cegos e a promessa de não armazenar nada se sustentam; um provedor ou um observador da rede ainda pode inferir algo do tráfego.',
          '**O número de modelos e o catálogo local.** O número de mais de 200 vem do site e a lista de modelos locais não carregou, então não há modelo local, tamanho nem requisito de hardware informado.',
          '**A qualidade no uso real.** Velocidade, qualidade das respostas, desempenho do modo local e o app Android não foram testados.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[LibreChat](/pt/power-local-llm/librechat-review)',
            'Plataformas': 'Web',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat multimodelo de código aberto com recursos de equipe, hospedado por você',
          },
          {
            'App': '[LobeChat](/pt/local-llms/lobechat-review)',
            'Plataformas': 'Web',
            'Preço / licença': 'Freemium / MIT',
            'Diferença principal': 'Interface de chat refinada com marketplace de plugins',
          },
          {
            'App': '[Open WebUI](/pt/local-llms/open-webui-review)',
            'Plataformas': 'Web, desktop',
            'Preço / licença': 'Grátis / BSD 3-Clause',
            'Diferença principal': 'Interface autohospedada estilo ChatGPT com RAG integrado, normalmente usada com modelos locais',
          },
          {
            'App': '[Big-AGI](/pt/local-llms/big-agi-review)',
            'Plataformas': 'Web',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Front-end multiprovedor com personas; você traz suas próprias chaves de API',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app. Ao contrário deles, o Obscurify é um serviço hospedado que vende o próprio acesso aos modelos.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar o Obscurify sem nenhuma conta?',
            a: 'Sim, como convidado, com um modelo aberto e limite de 30 mensagens por hora; modelos de ponta e sem censura exigem um plano pago.',
          },
          {
            q: 'Como pagar sem vincular o pagamento à minha conta?',
            a: 'Você compra vouchers cegos com Monero, Bitcoin, Lightning ou cartão e os adiciona ao saldo; para mais privacidade, a política recomenda Tor ou uma VPN e manter o atraso de resgate padrão.',
          },
          {
            q: 'O Obscurify é de código aberto?',
            a: 'O cliente web e o app Android são GPL-3.0; nenhum repositório do servidor foi encontrado, portanto o serviço como um todo não é totalmente aberto.',
          },
          {
            q: 'O Obscurify funciona offline?',
            a: 'Só o modo local pode, depois que um modelo for baixado no navegador; isso não foi testado, e o chat na nuvem precisa de conexão com a internet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Obscurify é um chat de IA hospedado incomum, construído para não saber quem você é, com um modo local como alternativa. O desenho está documentado e o código do cliente é público, mas o operador não tem nome, o código do servidor não é público e a promessa de "sem logs" guarda endereços IP por 30 dias. Serve a quem quer modelos na nuvem sem e-mail e aceita essa confiança; quem precisa de uma configuração verificável deve comparar opções autohospedadas como [LibreChat](/pt/power-local-llm/librechat-review) ou [Open WebUI](/pt/local-llms/open-webui-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Obscurify](https://obscurify.ai) — descrição do produto, modo local e links, verificado em 23 de outubro de 2026.',
          '[Preços do Obscurify](https://obscurify.ai/pricing) — limites para convidados, planos e cobrança, verificado em 23 de outubro de 2026.',
          '[Página "About" do Obscurify](https://obscurify.ai/about) — afirmações sobre anonimato, pagamentos e logs, verificado em 23 de outubro de 2026.',
          '[Política de privacidade do Obscurify](https://obscurify.ai/privacy) — dados coletados, retenção, provedores e pagamentos; última atualização em 22 de outubro de 2026.',
          '[Obscurify-ai no GitHub](https://github.com/Obscurify-ai) — cliente web e app Android, licença, versões e README, verificado em 23 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do LibreChat](/pt/power-local-llm/librechat-review) — uma interface de chat multimodelo de código aberto que você hospeda.',
          '[Análise do Open WebUI](/pt/local-llms/open-webui-review) — uma interface autohospedada para modelos locais com RAG integrado.',
          '[Análise do LobeChat](/pt/local-llms/lobechat-review) — uma interface de chat refinada com marketplace de plugins.',
          '[Análise do Big-AGI](/pt/local-llms/big-agi-review) — um front-end de chat multiprovedor com personas.',
          '[Assistentes de chat com LLMs locais comparados](/pt/power-local-llm/local-llm-chat-assistants-compared) — a comparação da categoria.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/obscurify-review-hero-ar.webp',
    title: 'مراجعة Obscurify: دردشة ذكاء اصطناعي مجهولة الهوية مع وضع محلي اختياري',
    seoTitle: 'مراجعة Obscurify: دردشة ذكاء اصطناعي مجهولة مع وضع محلي',
    intro:
      'Obscurify خدمة دردشة بالذكاء الاصطناعي على [obscurify.ai](https://obscurify.ai) تصف نفسها بأنها «VPN الخاص بك للذكاء الاصطناعي»: تسجّل برقم حساب عشوائي بدلاً من البريد الإلكتروني، وتدفع بقسائم يقول المشغّل إنه لا يستطيع ربطها بك، وتصل إلى أكثر من 200 نموذج سحابي. ويشغّل وضع محلي اختياري نماذج GGUF داخل المتصفح. تعكس هذه المراجعة الموقع وسياسة الخصوصية وشيفرة GitHub العامة كما جرى التحقق منها في 23 أكتوبر 2026، ولم تختبر PromptQuorum الخدمة عملياً.',
    metaDescription:
      'مراجعة Obscurify: دردشة ذكاء اصطناعي مجهولة برقم حساب عشوائي ودفع بقسائم عمياء ووضع محلي اختياري في المتصفح. الخطط والخصوصية وما لم يُتحقق منه.',
    twitterDescription:
      'مراجعة Obscurify: دردشة ذكاء اصطناعي مجهولة في المتصفح وعلى Android مع وضع محلي اختياري. ما يزعمه الموقع وسياسة الخصوصية، وما تُظهره الشيفرة، وما يبقى غير مؤكد.',
    audience:
      'من يريدون استخدام نماذج ذكاء اصطناعي سحابية دون بريد إلكتروني أو رقم هاتف أو هوية، ويحتاجون إلى معرفة ما تؤكده المصادر وما هو مجرد ادعاء من المشغّل وما هو مجهول.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Obscurify',
    targetKeywords: [
      'مراجعة obscurify',
      'obscurify ai',
      'دردشة ذكاء اصطناعي مجهولة',
      'دردشة ذكاء اصطناعي خاصة دون بريد إلكتروني',
      'تشغيل نماذج gguf في المتصفح',
      'دردشة ذكاء اصطناعي بالدفع ببيتكوين مونيرو',
      'obscurify vs librechat',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Obscurify خدمة ويب وAndroid تتيح، بحسب وصفها الذاتي، الدردشة مع أكثر من 200 نموذج ذكاء اصطناعي عبر رقم حساب عشوائي، دون بريد إلكتروني أو رقم هاتف أو هوية.** وتقترن عبارة «بلا سجلات» بالاحتفاظ بعنوان IP لمدة 30 يوماً، ولا يُذكر اسم المشغّل.',
    quickAnswerTop: {
      ar: {
        question: 'هل Obscurify مجهول الهوية وخاص فعلاً؟',
        answer:
          'بحسب سياسة الخصوصية، لا تُحفظ مدخلات الدردشة وردودها على خوادمها ولا تُطلب أي هوية. لم يُختبر أي من الادعاءين، وشيفرة الخادم غير منشورة.',
        bullets: [
          'يمكن للزوار الدردشة دون تسجيل، وتتيح الخطط المدفوعة نماذج أكثر.',
          'وضع محلي اختياري: تعمل نماذج GGUF داخل المتصفح وتبقى المدخلات على الجهاز.',
          'يتم الدفع بقسائم عمياء عبر Monero أو Bitcoin أو Lightning أو بالبطاقة.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Obscurify؟', anchor: 'what-is-obscurify' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الخطط والأسعار', anchor: 'plans-and-pricing' },
      { label: 'الميزات والوضع المحلي', anchor: 'key-features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
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
            text: 'Obscurify خدمة دردشة بالذكاء الاصطناعي تبيع الوصول إلى نماذج سحابية دون بريد إلكتروني أو هوية، وتضيف وضعاً اختيارياً يشغّل نماذج مفتوحة داخل المتصفح.',
          },
          {
            type: 'plain-terms',
            text: 'تفتح الموقع وتدردش كزائر أو تنشئ حساباً ليس سوى رقم من 16 خانة، وتشحن رصيدك بقسائم؛ أما الوضع المحلي فينزّل نموذجاً مرة واحدة ثم يشغّله على جهازك.',
          },
        ],
        items: [
          'النطاق: يعرض الموقع أكثر من 200 نموذج من مزوّدين كبار، بينها نماذج متقدمة وأخرى بلا رقابة، خلف حساب واحد.',
          'الشيفرة: عميل الويب وتطبيق Android منشوران بترخيص GPL-3.0 منذ 21 أكتوبر 2026، أما الخادم فلا.',
          'المنصات: أي متصفح، وخدمة Tor مخفية، وملف APK لنظام Android (الإصدار 0.4.1، آخر تحديث في 21 أكتوبر 2026).',
          'المشغّل: لا يُذكر في الموقع أي اسم لشركة أو شخص أو ولاية قضائية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى الموقع الرسمي وسياسة الخصوصية ومستودعات GitHub العامة التي جرى التحقق منها في 23 أكتوبر 2026. ولم تشمل استخداماً عملياً أو تحليلاً لحركة الشبكة أو اختبارات أداء.',
          },
        ],
      },
      overview: {
        id: 'what-is-obscurify',
        title: 'ما هو Obscurify؟',
        content: [
          '**بحسب موقعها، Obscurify خدمة دردشة خاصة بالذكاء الاصطناعي تقف بينك وبين مزوّدي النماذج، وتزيل التفاصيل المعرِّفة من كل طلب، ثم تمرّره ببيانات اعتمادها الخاصة.** ويسمّي الموقع ذلك «VPN الخاص بك للذكاء الاصطناعي». تسجّل برقم حساب عشوائي من 16 خانة، دون بريد إلكتروني أو رقم هاتف أو اسم مستخدم أو كلمة مرور، وتدردش مع نماذج مزوّدي ذكاء اصطناعي كبار.',
          'ويشغّل وضع ثانٍ نماذج GGUF مفتوحة المصدر مباشرة داخل المتصفح عبر نسخة WebAssembly من llama.cpp، دون أي طلب إلى خوادم Obscurify. أما تطبيق Android فهو عميل أصلي منفصل لنفس الخدمة. تغطي هذه المراجعة [obscurify.ai](https://obscurify.ai) وتطبيق Android فقط.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**لا يتطلب إصدار الويب أي تثبيت: افتح الموقع وادردش كزائر.** أما تطبيق Android فهو ملف APK منفصل يجب تثبيته يدوياً، لأنه لم يُعثر على صفحة له في Google Play أو App Store.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'الويب (أي متصفح)',
            'مكان الحصول عليه': '[obscurify.ai](https://obscurify.ai) (دردشة الزائر، دون تسجيل)',
          },
          {
            'المنصة': 'Android',
            'مكان الحصول عليه': '[GitHub Releases](https://github.com/Obscurify-ai/obscurify-android/releases) (APK، تثبيت يدوي)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مكان الحصول عليه': '[Obscurify-ai على GitHub](https://github.com/Obscurify-ai) (عميل الويب وتطبيق Android، GPL-3.0)',
          },
          {
            'المنصة': 'الموقع الإلكتروني',
            'مكان الحصول عليه': '[obscurify.ai](https://obscurify.ai) (يقدّم أيضاً خدمة Tor مخفية)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[obscurify.ai/privacy](https://obscurify.ai/privacy) (آخر تحديث: 22 أكتوبر 2026)',
          },
        ],
        note: 'الإصدار الذي رُوجع: تطبيق Android 0.4.1، نُشر على GitHub Releases في 21 أكتوبر 2026. ولا يحمل الموقع ولا عميل الويب رقم إصدار. يتطلب تثبيت APK السماح بالتثبيت من المتصفح أو مدير الملفات؛ ولا حاجة إلى طرفية.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: 'الخطط والأسعار',
        content: [
          '**Obscurify بنموذج «فريميوم»: يدردش الزوار مجاناً وكل ما عدا ذلك مدفوع مسبقاً.** الأسعار بالدولار الأمريكي، ولم تُعثر على أسعار بالعملة المحلية.',
        ],
        columns: ['الخطة', 'السعر', 'ما تشمله'],
        rows: [
          {
            'الخطة': 'زائر',
            'السعر': 'مجاناً',
            'ما تشمله': 'دون حساب، 30 رسالة في الساعة، نموذج مفتوح واحد',
          },
          {
            'الخطة': 'Pay As You Go',
            'السعر': '$0 شهرياً',
            'ما تشمله': 'رصيد مسبق، معظم النماذج، مليون رمز شهرياً',
          },
          {
            'الخطة': 'Casual',
            'السعر': '$20 شهرياً',
            'ما تشمله': 'نماذج متقدمة، استخدام بـ$15، 10 ملايين رمز شهرياً',
          },
          {
            'الخطة': 'Pro',
            'السعر': '$45 شهرياً',
            'ما تشمله': 'نماذج بلا رقابة، API، استخدام بـ$35، دون سقف رموز',
          },
        ],
        note: 'بحسب صفحة الأسعار، تتجدد الخطط شهرياً من رصيدك ما دام يغطيها؛ والإيداعات غير قابلة للاسترداد وتنتهي صلاحيتها بعد خمس سنوات من إجرائها.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات والوضع المحلي',
        content: [
          '**الدردشة السحابية هي المنتج الرئيسي، أما الوضع المحلي فإضافة لمن لا يريدون أن يغادر شيء جهازهم.** تأتي البنود التالية من الموقع وصفحة الأسعار وملفات README على GitHub.',
        ],
        items: [
          '**الدردشة.** ردود متدفقة، وبحث في الويب، ومرفقات صور، وتفكير قابل للطي، ومحادثات تُحفظ في متصفحك فقط أو على الهاتف في Android.',
          '**الوضع المحلي.** تُنزَّل نماذج GGUF المفتوحة مرة واحدة وتعمل في المتصفح عبر llama.cpp المترجم إلى WebAssembly؛ ويقول الموقع إن المدخلات لا تغادر الجهاز. يُحمَّل كتالوج النماذج داخل المتصفح ولم يكن مقروءاً لهذه المراجعة.',
          '**الدفع.** بحسب الموقع، تُوقَّع القسائم توقيعاً أعمى (RFC 9474)، فيستطيع المشغّل التحقق من أصالة القسيمة لكن ليس من أي دفعة جاءت. يمكن شراؤها بـ Monero أو Bitcoin أو Lightning أو بالبطاقة.',
          '**واجهة API.** تتضمن خطة Pro واجهة API متوافقة مع OpenAI؛ ويقدّم الموقع شروحات لعميل OpenAI وcurl.',
          '**Tor.** يقدّم الموقع خدمة مخفية، وتوصي سياسة الخصوصية باستخدام Tor أو VPN لمزيد من الخصوصية.',
        ],
        note: 'تغطي شروحات الموقع أيضاً توليد الصور وإعدادات التطوير؛ ولم تختبرها هذه المراجعة.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**بحسب سياسة الخصوصية، فإن مدخلات الدردشة وردودها «لا تُحفظ على خوادمنا»، ولا يتلقى الزوار ملفات تعريف ارتباط، ولا يُجمع أي بريد إلكتروني.** سجل المحادثات اختياري ويُخزَّن في التخزين المحلي لمتصفحك. وعلى الخادم يبقى تجزئة بمفتاح لرقم حسابك مع معرّف عشوائي، وسجلات الفوترة (معرّف المستخدم، التكلفة، عدد الرموز، اسم النموذج، الطابع الزمني)، وملف تعريف ارتباط لتسجيل الدخول لمدة 30 يوماً.',
          'لعبارة «No Logs» حدّ: يُحتفظ بعنوان IP ووكيل مستخدم المتصفح لمنع إساءة الاستخدام و«يُحذفان بعد 30 يوماً». وفي الوضع السحابي يصل الطلب مع ذلك إلى مزوّد نماذج؛ وتذكر السياسة OpenRouter (مسارات دون الاحتفاظ بالبيانات فقط) وNanoGPT (تسجيل المحتوى معطّل)، وتستخدم Stripe لمدفوعات البطاقات وخادم BTCPay الخاص بها للعملات المشفرة، وتنص على عدم استخدام أدوات تتبّع تحليلية أو إعلانية من أطراف ثالثة. وتُعرض نماذج بلا رقابة؛ وما تولّده بها مسؤوليتك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'شيفرة الخادم غير منشورة ولم تدقّق PromptQuorum حركة الشبكة، لذا فهذه العبارات ادعاءات من المشغّل. على من لديه نموذج تهديد جاد أن يتحقق منها بنفسه.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**من لا يحبون تسليم بريدهم أو هاتفهم لخدمات الذكاء الاصطناعي.** يكفي رقم حساب.',
          '**القرّاء الذين يريدون نماذج سحابية وخياراً محلياً في أداة واحدة.**',
          '**المطوّرون الذين يريدون نقطة وصول واحدة متوافقة مع OpenAI لعدة نماذج.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**المشغّل.** لا يذكر الموقع ولا سياسة الخصوصية اسم شركة أو عنواناً أو ولاية قضائية؛ والاتصال الوحيد عنوان بريد إلكتروني.',
          '**الخادم.** المنشور هو عميل المتصفح وتطبيق Android فقط؛ أما الشيفرة التي تعالج الطلبات والمدفوعات فغير منشورة، وقد أُنشئت المستودعات في 21 أكتوبر 2026.',
          '**إخفاء الهوية عملياً.** لم يُختبر ما إذا كان تصميم القسائم العمياء ووعد عدم التخزين يصمدان؛ وقد يستنتج مزوّد أو مراقب للشبكة شيئاً من حركة البيانات.',
          '**عدد النماذج والكتالوج المحلي.** رقم أكثر من 200 مصدره الموقع، ولم تُحمَّل قائمة النماذج المحلية، لذا لا يُذكر أي نموذج محلي أو حجم أو متطلب عتادي.',
          '**الجودة في الاستخدام الفعلي.** لم تُختبر السرعة ولا جودة الإجابات ولا أداء الوضع المحلي ولا تطبيق Android.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[LibreChat](/ar/power-local-llm/librechat-review)',
            'المنصات': 'الويب',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة متعددة النماذج مفتوحة المصدر بميزات للفرق تستضيفها بنفسك',
          },
          {
            'التطبيق': '[LobeChat](/ar/local-llms/lobechat-review)',
            'المنصات': 'الويب',
            'السعر / الترخيص': 'فريميوم / MIT',
            'الفرق الرئيسي': 'واجهة دردشة أنيقة مع سوق للإضافات',
          },
          {
            'التطبيق': '[Open WebUI](/ar/local-llms/open-webui-review)',
            'المنصات': 'الويب، سطح المكتب',
            'السعر / الترخيص': 'مجاني / BSD 3-Clause',
            'الفرق الرئيسي': 'واجهة مستضافة ذاتياً شبيهة بـ ChatGPT مع RAG مدمج، وتُستخدم عادةً مع نماذج محلية',
          },
          {
            'التطبيق': '[Big-AGI](/ar/local-llms/big-agi-review)',
            'المنصات': 'الويب',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'واجهة أمامية متعددة المزوّدين مع شخصيات؛ تستخدم مفاتيح API الخاصة بك',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق. وعلى خلافها، Obscurify خدمة مستضافة تبيع الوصول إلى النماذج بنفسها.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني استخدام Obscurify دون أي حساب؟',
            a: 'نعم، كزائر مع نموذج مفتوح واحد وبحد أقصى 30 رسالة في الساعة؛ أما النماذج المتقدمة والنماذج بلا رقابة فتتطلب خطة مدفوعة.',
          },
          {
            q: 'كيف أدفع دون ربط الدفعة بحسابي؟',
            a: 'تشتري قسائم عمياء بـ Monero أو Bitcoin أو Lightning أو بالبطاقة وتضيفها إلى رصيدك؛ ولمزيد من الخصوصية توصي السياسة باستخدام Tor أو VPN وإبقاء تأخير الاسترداد الافتراضي.',
          },
          {
            q: 'هل Obscurify مفتوح المصدر؟',
            a: 'عميل الويب وتطبيق Android بترخيص GPL-3.0؛ ولم يُعثر على مستودع للخادم، لذا فالخدمة ككل ليست مفتوحة بالكامل.',
          },
          {
            q: 'هل يعمل Obscurify دون اتصال بالإنترنت؟',
            a: 'الوضع المحلي وحده يستطيع ذلك بعد تنزيل نموذج في المتصفح؛ ولم يُختبر هذا، والدردشة السحابية تحتاج إلى اتصال بالإنترنت.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Obscurify دردشة ذكاء اصطناعي مستضافة غير معتادة، مبنية على ألا تعرف من أنت، مع وضع محلي كخيار احتياطي. تصميمها موثّق وشيفرة العميل علنية، لكن المشغّل بلا اسم، وشيفرة الخادم غير منشورة، ووعد «بلا سجلات» يحتفظ بعناوين IP لمدة 30 يوماً. تناسب من يريد نماذج سحابية دون بريد إلكتروني ويقبل هذه الثقة؛ ومن يحتاج إلى إعداد يمكن التحقق منه فعليه مقارنة خيارات مستضافة ذاتياً مثل [LibreChat](/ar/power-local-llm/librechat-review) أو [Open WebUI](/ar/local-llms/open-webui-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Obscurify](https://obscurify.ai) — وصف المنتج والوضع المحلي والروابط، جرى التحقق منه في 23 أكتوبر 2026.',
          '[أسعار Obscurify](https://obscurify.ai/pricing) — حدود الزوار والخطط والفوترة، جرى التحقق منها في 23 أكتوبر 2026.',
          '[صفحة About في Obscurify](https://obscurify.ai/about) — العبارات المتعلقة بإخفاء الهوية والمدفوعات والسجلات، جرى التحقق منها في 23 أكتوبر 2026.',
          '[سياسة خصوصية Obscurify](https://obscurify.ai/privacy) — البيانات المجموعة ومدد الاحتفاظ والمزوّدون والمدفوعات؛ آخر تحديث في 22 أكتوبر 2026.',
          '[Obscurify-ai على GitHub](https://github.com/Obscurify-ai) — عميل الويب وتطبيق Android والترخيص والإصدارات وREADME، جرى التحقق منها في 23 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة LibreChat](/ar/power-local-llm/librechat-review) — واجهة دردشة متعددة النماذج مفتوحة المصدر تستضيفها بنفسك.',
          '[مراجعة Open WebUI](/ar/local-llms/open-webui-review) — واجهة مستضافة ذاتياً للنماذج المحلية مع RAG مدمج.',
          '[مراجعة LobeChat](/ar/local-llms/lobechat-review) — واجهة دردشة أنيقة مع سوق للإضافات.',
          '[مراجعة Big-AGI](/ar/local-llms/big-agi-review) — واجهة دردشة أمامية متعددة المزوّدين مع شخصيات.',
          '[مقارنة مساعدات الدردشة بنماذج LLM محلية](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة الفئة.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/obscurify-review-hero-zh.webp',
    title: 'Obscurify 评测：支持可选本地模式的匿名 AI 聊天',
    seoTitle: 'Obscurify 评测：匿名 AI 聊天与可选的浏览器本地模式',
    intro:
      'Obscurify 是 [obscurify.ai](https://obscurify.ai) 上的 AI 聊天服务，自称“AI 的 VPN”：用随机账号而非邮箱注册，用运营方称无法与你关联的代金券付款，可访问 200 多个云端模型。可选的本地模式在浏览器内运行 GGUF 模型。本评测反映 2026 年 10 月 23 日核查时的网站、隐私政策和 GitHub 公开代码；PromptQuorum 未对该服务做实际使用测试。',
    metaDescription:
      'Obscurify 评测：随机账号、盲代金券付款、可选浏览器本地模式的匿名 AI 聊天。含套餐价格、隐私声明，并列出尚未核实的事项与潜在风险。',
    twitterDescription:
      'Obscurify 评测：浏览器和 Android 上的匿名 AI 聊天，另有可选本地模式。网站与隐私政策的说法、代码所能证实的内容，以及仍未核实的部分。',
    audience:
      '想在不提供邮箱、手机号或身份的情况下使用云端 AI 模型，并需要了解来源已证实什么、哪些只是运营方的说法、哪些尚不清楚的读者。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Obscurify 评测',
    targetKeywords: [
      'obscurify 评测',
      'obscurify ai',
      '匿名 ai 聊天',
      '无需邮箱的 ai 聊天',
      '在浏览器中运行 gguf 模型',
      '用比特币门罗币付款的 ai 聊天',
      'obscurify vs librechat',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Obscurify 是一项网页和 Android 服务，按其自述，可通过随机账号与 200 多个 AI 模型聊天，无需邮箱、手机号或身份。** 其“无日志”标注附带 30 天的 IP 保留期，且运营方未具名。',
    quickAnswerTop: {
      zh: {
        question: 'Obscurify 真的匿名且私密吗？',
        answer:
          '据其隐私政策，聊天提示词和回复不会保存在其服务器上，也无需提供身份。这两点均未经测试，服务器代码也未公开。',
        bullets: [
          '访客无需注册即可聊天；付费套餐可解锁更多模型。',
          '可选本地模式：GGUF 模型在浏览器内运行，输入内容留在设备上。',
          '付款使用盲代金券，支持 Monero、Bitcoin、Lightning 或银行卡。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Obscurify 是什么？', anchor: 'what-is-obscurify' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '套餐与价格', anchor: 'plans-and-pricing' },
      { label: '功能与本地模式', anchor: 'key-features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '适合哪些人使用', anchor: 'who-should-use' },
      { label: '我们无法核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obscurify 是一项 AI 聊天服务，提供无需邮箱和身份的云端模型访问，并附带可在浏览器内运行开源模型的可选模式。',
          },
          {
            type: 'plain-terms',
            text: '你打开网站，以访客身份聊天，或创建只有 16 位数字的账号，并用代金券给余额充值；本地模式只需下载一次模型，之后在你自己的设备上运行。',
          },
        ],
        items: [
          '覆盖范围：网站称在一个账号下提供 200 多个来自主要供应商的模型，包括前沿模型和无审查模型。',
          '代码：网页客户端和 Android 应用自 2026 年 10 月 21 日起以 GPL-3.0 发布；服务器端未公开。',
          '平台：任意浏览器、Tor 隐藏服务和 Android APK（版本 0.4.1，最近更新于 2026 年 10 月 21 日）。',
          '运营方：网站上没有公布任何公司、个人或司法辖区。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 23 日核查的官方网站、隐私政策和 GitHub 公开仓库，未进行实际使用、流量分析或基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-obscurify',
        title: 'Obscurify 是什么？',
        content: [
          '**据其网站介绍，Obscurify 是一项私密 AI 聊天服务，位于你与模型供应商之间，去除每个请求中的身份信息，再以自己的凭据转发。** 网站称之为“AI 的 VPN”。你用随机的 16 位账号注册，无需邮箱、手机号、用户名或密码，即可与主要 AI 供应商的模型聊天。',
          '第二种模式通过 llama.cpp 的 WebAssembly 版本，直接在浏览器内运行开源 GGUF 模型，不会向 Obscurify 的服务器发送请求。Android 应用是同一服务的独立原生客户端。本评测仅涵盖 [obscurify.ai](https://obscurify.ai) 及其 Android 应用。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**网页版无需安装：打开网站，以访客身份聊天即可。** Android 应用是单独的 APK，需要手动安装，因为未找到 Google Play 或 App Store 的上架页面。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': '网页（任意浏览器）',
            '获取方式': '[obscurify.ai](https://obscurify.ai)（访客聊天，无需注册）',
          },
          {
            '平台': 'Android',
            '获取方式': '[GitHub Releases](https://github.com/Obscurify-ai/obscurify-android/releases)（APK，手动安装）',
          },
          {
            '平台': '源代码',
            '获取方式': '[GitHub 上的 Obscurify-ai](https://github.com/Obscurify-ai)（网页客户端和 Android 应用，GPL-3.0）',
          },
          {
            '平台': '官方网站',
            '获取方式': '[obscurify.ai](https://obscurify.ai)（同时提供 Tor 隐藏服务）',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[obscurify.ai/privacy](https://obscurify.ai/privacy)（最近更新：2026 年 10 月 22 日）',
          },
        ],
        note: '评测版本：Android 应用 0.4.1，于 2026 年 10 月 21 日发布在 GitHub Releases。网站和网页客户端没有版本号。安装 APK 需要允许从浏览器或文件管理器安装应用，无需终端。',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: '套餐与价格',
        content: [
          '**Obscurify 采用免费增值模式：访客可免费聊天，其余均为预付费。** 价格以美元计，未找到本地货币价格。',
        ],
        columns: ['套餐', '价格', '包含内容'],
        rows: [
          {
            '套餐': '访客',
            '价格': '免费',
            '包含内容': '无需账号，每小时 30 条消息，1 个开放模型',
          },
          {
            '套餐': 'Pay As You Go',
            '价格': '每月 $0',
            '包含内容': '预付余额，多数模型，每月 100 万 token',
          },
          {
            '套餐': 'Casual',
            '价格': '每月 $20',
            '包含内容': '前沿模型，含 $15 用量，每月 1000 万 token',
          },
          {
            '套餐': 'Pro',
            '价格': '每月 $45',
            '包含内容': '无审查模型，API，含 $35 用量，无 token 上限',
          },
        ],
        note: '据价格页面，只要余额足够，套餐每月从余额中自动续费；充值款不可退还，并在充值五年后过期。',
      },
      features: {
        id: 'key-features',
        title: '功能与本地模式',
        content: [
          '**云端聊天是主要产品；本地模式是为不希望任何内容离开设备的用户准备的附加选项。** 以下内容来自网站、价格页面和 GitHub README。',
        ],
        items: [
          '**聊天。** 流式回复、网页搜索、图片附件、可折叠的推理过程；对话只保存在你的浏览器中，在 Android 上则保存在手机里。',
          '**本地模式。** 开放的 GGUF 模型下载一次后，通过编译为 WebAssembly 的 llama.cpp 在浏览器内运行；网站称输入内容不会离开设备。模型目录在浏览器中加载，本评测未能读取。',
          '**付款。** 据网站介绍，代金券采用盲签名（RFC 9474），运营方能验证代金券是否有效，却无法得知它来自哪笔付款。可用 Monero、Bitcoin、Lightning 或银行卡购买。',
          '**API。** Pro 套餐包含兼容 OpenAI 的 API；网站提供 OpenAI 客户端和 curl 的使用教程。',
          '**Tor。** 网站提供隐藏服务，隐私政策建议使用 Tor 或 VPN 以获得更强的隐私保护。',
        ],
        note: '网站教程还涵盖图像生成和开发环境配置；本评测未对其测试。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**据隐私政策，聊天提示词和回复“不会保存在我们的服务器上”，访客不会收到 Cookie，也不收集邮箱。** 对话历史为可选，保存在浏览器的本地存储中。服务器端会保留账号的带密钥哈希和一个随机标识、计费记录（用户 ID、费用、token 数、模型名称、时间戳），以及有效期 30 天的登录 Cookie。',
          '“No Logs”标注是有限度的：IP 地址和浏览器 User-Agent 为防滥用而保留，并“在 30 天后删除”。在云端模式下，请求仍会到达模型供应商；政策点名了 OpenRouter（仅限零数据留存路由）和 NanoGPT（内容日志已关闭），银行卡支付使用 Stripe，加密货币支付使用其自有 BTCPay 服务器，并称不使用第三方分析或广告追踪器。平台提供无审查模型，用其生成的内容由你自行负责。',
        ],
        callouts: [
          {
            type: 'note',
            text: '服务器代码未公开，PromptQuorum 也未审计网络流量，因此这些说法均为运营方的声明。威胁模型严苛的用户应自行核实。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**不愿向 AI 服务提供邮箱或手机号的人。** 一个账号数字就够了。',
          '**希望在一个工具里同时使用云端模型和本地选项的读者。**',
          '**希望用一个兼容 OpenAI 的端点访问众多模型的开发者。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**运营方。** 网站和隐私政策都没有公司名称、地址或司法辖区，唯一的联系方式是一个邮箱地址。',
          '**服务器。** 只公开了浏览器客户端和 Android 应用；处理请求和付款的代码未公开，且相关仓库创建于 2026 年 10 月 21 日。',
          '**实际匿名性。** 盲代金券设计和“不存储”的说法是否成立未经测试；供应商或网络观察者仍可能从流量中推断出信息。',
          '**模型数量与本地目录。** 200 多个的数字来自网站，本地模型列表未能加载，因此未给出任何本地模型、大小或硬件要求。',
          '**实际使用质量。** 速度、回答质量、本地模式性能和 Android 应用均未测试。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[LibreChat](/zh/power-local-llm/librechat-review)',
            '平台': '网页',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源多模型聊天，带团队功能，需自行托管',
          },
          {
            '应用': '[LobeChat](/zh/local-llms/lobechat-review)',
            '平台': '网页',
            '价格 / 许可证': '免费增值 / MIT',
            '主要区别': '界面精致，带插件市场',
          },
          {
            '应用': '[Open WebUI](/zh/local-llms/open-webui-review)',
            '平台': '网页、桌面',
            '价格 / 许可证': '免费 / BSD 3-Clause',
            '主要区别': '自托管的类 ChatGPT 界面，内置 RAG，通常搭配本地模型使用',
          },
          {
            '应用': '[Big-AGI](/zh/local-llms/big-agi-review)',
            '平台': '网页',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '支持多家供应商并带角色设定的前端，需自备 API 密钥',
          },
        ],
        note: '竞品信息经常变化，请到各应用页面确认当前价格、许可证和平台。与它们不同，Obscurify 是自己出售模型访问权限的托管服务。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '不注册账号也能使用 Obscurify 吗？',
            a: '可以，以访客身份使用一个开放模型，每小时最多 30 条消息；前沿模型和无审查模型需要付费套餐。',
          },
          {
            q: '怎样付款才不会把付款与账号关联？',
            a: '用 Monero、Bitcoin、Lightning 或银行卡购买盲代金券并加到余额中；为获得更强的隐私，政策建议使用 Tor 或 VPN，并保留默认的兑换延迟。',
          },
          {
            q: 'Obscurify 是开源的吗？',
            a: '网页客户端和 Android 应用采用 GPL-3.0；未找到服务器仓库，因此整个服务并非完全开源。',
          },
          {
            q: 'Obscurify 可以离线使用吗？',
            a: '只有在浏览器中下载模型后的本地模式才可能离线使用，但未经测试；云端聊天需要联网。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Obscurify 是一款少见的托管式 AI 聊天，设计目标就是不知道你是谁，并以本地模式作为备选。其设计有文档说明，客户端代码也已公开，但运营方未具名、服务器代码未公开，“无日志”的说法下仍保留 IP 地址 30 天。它适合想要免邮箱使用云端模型并接受这种信任的读者；需要可验证部署的人应比较 [LibreChat](/zh/power-local-llm/librechat-review) 或 [Open WebUI](/zh/local-llms/open-webui-review) 等自托管方案。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Obscurify 官方网站](https://obscurify.ai) — 产品介绍、本地模式和链接，2026 年 10 月 23 日核查。',
          '[Obscurify 价格页面](https://obscurify.ai/pricing) — 访客限制、套餐和计费，2026 年 10 月 23 日核查。',
          '[Obscurify About 页面](https://obscurify.ai/about) — 关于匿名性、付款和日志的说法，2026 年 10 月 23 日核查。',
          '[Obscurify 隐私政策](https://obscurify.ai/privacy) — 收集的数据、保留期限、供应商和付款；最近更新于 2026 年 10 月 22 日。',
          '[GitHub 上的 Obscurify-ai](https://github.com/Obscurify-ai) — 网页客户端和 Android 应用、许可证、版本发布和 README，2026 年 10 月 23 日核查。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[LibreChat 评测](/zh/power-local-llm/librechat-review) — 可自行托管的开源多模型聊天界面。',
          '[Open WebUI 评测](/zh/local-llms/open-webui-review) — 内置 RAG、面向本地模型的自托管界面。',
          '[LobeChat 评测](/zh/local-llms/lobechat-review) — 带插件市场的精致聊天界面。',
          '[Big-AGI 评测](/zh/local-llms/big-agi-review) — 支持多家供应商并带角色设定的聊天前端。',
          '[本地 LLM 聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared) — 该类别的对比文章。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/obscurify-review-hero-ko.webp',
    title: 'Obscurify 리뷰: 로컬 모드를 갖춘 익명 AI 채팅',
    seoTitle: 'Obscurify 리뷰: 익명 AI 채팅과 로컬 모드',
    intro:
      'Obscurify는 [obscurify.ai](https://obscurify.ai)에서 제공하는 AI 채팅 서비스로, 스스로를 "AI를 위한 VPN"이라고 소개합니다. 이메일 대신 무작위 계정 번호로 가입하고, 운영자가 사용자와 연결할 수 없다고 밝히는 바우처로 결제하며, 200개 이상의 클라우드 모델을 사용할 수 있습니다. 선택 사항인 로컬 모드는 브라우저 안에서 GGUF 모델을 실행합니다. 이 리뷰는 2026년 10월 23일에 확인한 웹사이트, 개인정보 처리방침, 공개 GitHub 코드를 바탕으로 하며, PromptQuorum은 서비스를 직접 사용해 테스트하지 않았습니다.',
    metaDescription:
      'Obscurify 리뷰: 무작위 계정 번호, 블라인드 바우처 결제, 브라우저 로컬 모드를 갖춘 익명 AI 채팅. 요금제, 개인정보 보호, 미확인 사항을 정리했습니다.',
    twitterDescription:
      'Obscurify 리뷰: 브라우저와 Android에서 쓰는 익명 AI 채팅과 선택형 로컬 모드. 사이트와 정책의 주장, 코드로 확인되는 내용, 아직 확인되지 않은 부분을 다룹니다.',
    audience:
      '이메일, 전화번호, 신원 없이 클라우드 AI 모델을 쓰고 싶으며, 출처가 확인한 내용과 운영자의 주장일 뿐인 내용, 알 수 없는 내용을 구분해 알고 싶은 분.',
    readTime: '7분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Obscurify 리뷰',
    targetKeywords: [
      'obscurify 리뷰',
      'obscurify ai',
      '익명 ai 채팅',
      '이메일 없는 ai 채팅',
      '브라우저에서 gguf 모델 실행',
      '비트코인 모네로로 결제하는 ai 채팅',
      'obscurify vs librechat',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Obscurify는 운영자의 설명에 따르면 이메일, 전화번호, 신원 없이 무작위 계정 번호로 200개 이상의 AI 모델과 채팅할 수 있는 웹·Android 서비스입니다.** "노로그" 표기와 달리 IP 주소를 30일간 보관하며, 운영자의 이름은 밝혀져 있지 않습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Obscurify는 정말 익명이고 비공개입니까?',
        answer:
          '개인정보 처리방침에 따르면 채팅 프롬프트와 응답은 서버에 저장되지 않으며 신원도 요구하지 않습니다. 두 주장 모두 테스트하지 않았고, 서버 코드는 공개되어 있지 않습니다.',
        bullets: [
          '게스트는 가입 없이 채팅할 수 있으며, 유료 요금제에서 더 많은 모델을 쓸 수 있습니다.',
          '선택형 로컬 모드: GGUF 모델이 브라우저 안에서 실행되어 입력이 기기에 머뭅니다.',
          '결제는 Monero, Bitcoin, Lightning 또는 카드로 구매하는 블라인드 바우처를 사용합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Obscurify란 무엇인가?', anchor: 'what-is-obscurify' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '요금제와 가격', anchor: 'plans-and-pricing' },
      { label: '기능과 로컬 모드', anchor: 'key-features' },
      { label: '개인정보와 데이터 흐름', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obscurify는 이메일이나 신원 없이 클라우드 모델을 쓸 수 있게 해 주는 AI 채팅 서비스이며, 오픈 모델을 브라우저 안에서 실행하는 선택 모드를 더했습니다.',
          },
          {
            type: 'plain-terms',
            text: '웹사이트를 열어 게스트로 채팅하거나 16자리 번호뿐인 계정을 만들고, 바우처로 잔액을 충전합니다. 로컬 모드는 모델을 한 번 내려받은 뒤 사용자의 기기에서 실행합니다.',
          },
        ],
        items: [
          '범위: 사이트는 주요 제공업체의 모델 200개 이상(최신 상위 모델과 무검열 모델 포함)을 계정 하나로 쓸 수 있다고 밝힙니다.',
          '코드: 웹 클라이언트와 Android 앱은 2026년 10월 21일부터 GPL-3.0으로 공개되어 있으며, 서버는 공개되지 않았습니다.',
          '플랫폼: 모든 브라우저, Tor 히든 서비스, Android APK(버전 0.4.1, 마지막 업데이트 2026년 10월 21일).',
          '운영자: 사이트 어디에도 회사, 개인, 관할권이 명시되어 있지 않습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 23일에 확인한 공식 웹사이트, 개인정보 처리방침, 공개 GitHub 저장소를 바탕으로 합니다. 직접 사용, 트래픽 분석, 벤치마크는 하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-obscurify',
        title: 'Obscurify란 무엇인가?',
        content: [
          '**웹사이트에 따르면 Obscurify는 비공개 AI 채팅 서비스로, 사용자와 모델 제공업체 사이에서 각 요청의 식별 정보를 제거하고 자체 자격 증명으로 전달합니다.** 사이트는 이를 "AI를 위한 VPN"이라고 부릅니다. 이메일, 전화번호, 사용자 이름, 비밀번호 없이 무작위 16자리 계정 번호로 가입하고 주요 AI 제공업체의 모델과 채팅합니다.',
          '두 번째 모드는 llama.cpp의 WebAssembly 빌드로 오픈소스 GGUF 모델을 브라우저 안에서 직접 실행하며, Obscurify 서버로 요청을 보내지 않습니다. Android 앱은 같은 서비스의 별도 네이티브 클라이언트입니다. 이 리뷰는 [obscurify.ai](https://obscurify.ai)와 해당 Android 앱만 다룹니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**웹 버전은 설치할 것이 없습니다. 사이트를 열고 게스트로 채팅하면 됩니다.** Android 앱은 별도의 APK이며 직접 설치해야 합니다. Google Play나 App Store 등록 정보는 찾지 못했습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': '웹(모든 브라우저)',
            '받는 곳': '[obscurify.ai](https://obscurify.ai)(게스트 채팅, 가입 불필요)',
          },
          {
            '플랫폼': 'Android',
            '받는 곳': '[GitHub Releases](https://github.com/Obscurify-ai/obscurify-android/releases)(APK, 직접 설치)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[GitHub의 Obscurify-ai](https://github.com/Obscurify-ai)(웹 클라이언트와 Android 앱, GPL-3.0)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[obscurify.ai](https://obscurify.ai)(Tor 히든 서비스도 제공)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[obscurify.ai/privacy](https://obscurify.ai/privacy)(마지막 업데이트 2026년 10월 22일)',
          },
        ],
        note: '확인한 버전: Android 앱 0.4.1, 2026년 10월 21일 GitHub Releases에 게시. 웹사이트와 웹 클라이언트에는 버전 번호가 없습니다. APK를 설치하려면 브라우저나 파일 관리자에서 설치를 허용해야 하며 터미널은 필요하지 않습니다.',
      },
      pricing: {
        id: 'plans-and-pricing',
        title: '요금제와 가격',
        content: [
          '**Obscurify는 프리미엄 모델입니다. 게스트는 무료로 채팅하고, 나머지는 선불입니다.** 가격은 미국 달러 기준이며 현지 통화 가격은 확인하지 못했습니다.',
        ],
        columns: ['요금제', '가격', '포함 내용'],
        rows: [
          {
            '요금제': '게스트',
            '가격': '무료',
            '포함 내용': '계정 불필요, 시간당 30개 메시지, 오픈 모델 1개',
          },
          {
            '요금제': 'Pay As You Go',
            '가격': '월 $0',
            '포함 내용': '선불 잔액, 대부분의 모델, 월 100만 토큰',
          },
          {
            '요금제': 'Casual',
            '가격': '월 $20',
            '포함 내용': '최신 모델, $15 사용량, 월 1,000만 토큰',
          },
          {
            '요금제': 'Pro',
            '가격': '월 $45',
            '포함 내용': '무검열 모델, API, $35 사용량, 토큰 한도 없음',
          },
        ],
        note: '요금 페이지에 따르면 요금제는 잔액이 충당되는 한 매월 잔액에서 갱신됩니다. 입금액은 환불되지 않으며 입금 5년 후 만료됩니다.',
      },
      features: {
        id: 'key-features',
        title: '기능과 로컬 모드',
        content: [
          '**클라우드 채팅이 주된 제품이며, 로컬 모드는 아무것도 기기 밖으로 나가지 않기를 원하는 사용자를 위한 추가 기능입니다.** 아래 항목은 웹사이트, 요금 페이지, GitHub README에서 가져왔습니다.',
        ],
        items: [
          '**채팅.** 스트리밍 응답, 웹 검색, 이미지 첨부, 접을 수 있는 추론 표시를 지원하며 대화는 브라우저에만, Android에서는 휴대폰에만 저장됩니다.',
          '**로컬 모드.** 공개 GGUF 모델을 한 번 내려받아 WebAssembly로 컴파일한 llama.cpp로 브라우저 안에서 실행합니다. 사이트는 입력이 기기를 벗어나지 않는다고 밝힙니다. 모델 카탈로그는 브라우저에서 로드되며 이 리뷰에서는 읽을 수 없었습니다.',
          '**결제.** 사이트에 따르면 바우처는 블라인드 서명(RFC 9474)되므로 운영자는 바우처가 진짜인지는 확인할 수 있어도 어떤 결제에서 나왔는지는 알 수 없습니다. Monero, Bitcoin, Lightning 또는 카드로 구매할 수 있습니다.',
          '**API.** Pro 요금제에는 OpenAI 호환 API가 포함되며, 사이트에 OpenAI 클라이언트와 curl 튜토리얼이 있습니다.',
          '**Tor.** 사이트는 히든 서비스를 제공하며, 개인정보 처리방침은 더 강한 프라이버시를 위해 Tor 또는 VPN 사용을 권장합니다.',
        ],
        note: '사이트 튜토리얼에는 이미지 생성과 개발 환경 설정도 있지만, 이 리뷰에서는 테스트하지 않았습니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 데이터 흐름',
        content: [
          '**개인정보 처리방침에 따르면 채팅 프롬프트와 응답은 "당사 서버에 저장되지 않으며", 게스트에게는 쿠키가 발급되지 않고 이메일도 수집하지 않습니다.** 대화 기록은 선택 사항이며 브라우저의 로컬 스토리지에 저장됩니다. 서버에는 계정 번호의 키 해시와 무작위 핸들, 청구 기록(사용자 ID, 비용, 토큰 수, 모델 이름, 타임스탬프), 30일간 유효한 로그인 쿠키가 남습니다.',
          '"No Logs" 표기에는 한계가 있습니다. IP 주소와 브라우저 사용자 에이전트는 남용 방지를 위해 보관되며 "30일 후 삭제"됩니다. 클라우드 모드에서도 요청은 여전히 모델 제공업체에 도달합니다. 정책은 OpenRouter(데이터 보존 없는 경로만)와 NanoGPT(콘텐츠 로깅 비활성화)를 명시하고, 카드 결제에는 Stripe, 암호화폐 결제에는 자체 BTCPay 서버를 사용하며, 제3자 분석·광고 트래커는 사용하지 않는다고 밝힙니다. 무검열 모델도 제공되며, 이를 통해 생성한 내용에 대한 책임은 사용자에게 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '서버 코드는 공개되지 않았고 PromptQuorum은 네트워크 트래픽을 감사하지 않았으므로 이 내용은 운영자의 주장입니다. 위협 모델이 엄격한 경우 직접 검증하시기 바랍니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**AI 서비스에 이메일이나 전화번호를 주기 싫은 분.** 계정 번호만으로 충분합니다.',
          '**클라우드 모델과 로컬 옵션을 한 도구에서 쓰고 싶은 분.**',
          '**여러 모델을 하나의 OpenAI 호환 엔드포인트로 쓰고 싶은 개발자.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**운영자.** 사이트와 개인정보 처리방침 어디에도 회사 이름, 주소, 관할권이 없으며 연락처는 이메일 주소뿐입니다.',
          '**서버.** 브라우저 클라이언트와 Android 앱만 공개되어 있고, 요청과 결제를 처리하는 코드는 공개되지 않았습니다. 저장소는 2026년 10월 21일에 만들어졌습니다.',
          '**실제 익명성.** 블라인드 바우처 설계와 "저장하지 않는다"는 주장이 성립하는지는 테스트하지 않았습니다. 제공업체나 네트워크 관찰자가 트래픽에서 무언가를 알아낼 수 있습니다.',
          '**모델 수와 로컬 카탈로그.** 200개 이상이라는 수치는 사이트의 설명이며 로컬 모델 목록은 로드되지 않았으므로 로컬 모델, 크기, 하드웨어 요구 사항은 적지 않았습니다.',
          '**실제 사용 품질.** 속도, 답변 품질, 로컬 모드 성능, Android 앱은 테스트하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[LibreChat](/ko/power-local-llm/librechat-review)',
            '플랫폼': '웹',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '팀 기능을 갖춘 오픈소스 멀티모델 채팅으로, 직접 호스팅',
          },
          {
            '앱': '[LobeChat](/ko/local-llms/lobechat-review)',
            '플랫폼': '웹',
            '가격 / 라이선스': '프리미엄 / MIT',
            '핵심 차이': '플러그인 마켓이 있는 세련된 채팅 화면',
          },
          {
            '앱': '[Open WebUI](/ko/local-llms/open-webui-review)',
            '플랫폼': '웹, 데스크톱',
            '가격 / 라이선스': '무료 / BSD 3-Clause',
            '핵심 차이': 'RAG 내장 자체 호스팅 ChatGPT형 화면으로, 보통 로컬 모델과 함께 사용',
          },
          {
            '앱': '[Big-AGI](/ko/local-llms/big-agi-review)',
            '플랫폼': '웹',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '페르소나를 지원하는 멀티 제공업체 프런트엔드로, 자신의 API 키 사용',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀌므로 각 앱의 페이지에서 현재 가격, 라이선스, 플랫폼을 확인하십시오. 이들과 달리 Obscurify는 모델 접근 자체를 판매하는 호스팅 서비스입니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '계정 없이도 Obscurify를 쓸 수 있습니까?',
            a: '예. 게스트로 오픈 모델 1개를 시간당 30개 메시지까지 쓸 수 있으며, 최신 모델과 무검열 모델에는 유료 요금제가 필요합니다.',
          },
          {
            q: '결제를 계정과 연결하지 않고 지불하려면 어떻게 합니까?',
            a: 'Monero, Bitcoin, Lightning 또는 카드로 블라인드 바우처를 구매해 잔액에 추가합니다. 더 강한 프라이버시를 위해 정책은 Tor 또는 VPN 사용과 기본 사용 지연 유지를 권장합니다.',
          },
          {
            q: 'Obscurify는 오픈소스입니까?',
            a: '웹 클라이언트와 Android 앱은 GPL-3.0입니다. 서버 저장소는 찾지 못했으므로 서비스 전체가 완전히 공개된 것은 아닙니다.',
          },
          {
            q: 'Obscurify는 오프라인에서 작동합니까?',
            a: '브라우저에 모델을 내려받은 뒤의 로컬 모드만 가능하지만 테스트하지 않았습니다. 클라우드 채팅에는 인터넷 연결이 필요합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Obscurify는 사용자가 누구인지 알지 못하도록 설계된 독특한 호스팅형 AI 채팅이며, 로컬 모드를 대안으로 갖추고 있습니다. 설계는 문서화되어 있고 클라이언트 코드도 공개되어 있지만, 운영자는 이름이 없고 서버 코드는 공개되지 않았고 "노로그" 주장에도 IP 주소를 30일간 보관합니다. 이메일 없이 클라우드 모델을 쓰고 싶고 그 신뢰를 받아들이는 분께 적합합니다. 검증 가능한 구성이 필요하다면 [LibreChat](/ko/power-local-llm/librechat-review)이나 [Open WebUI](/ko/local-llms/open-webui-review) 같은 자체 호스팅 옵션을 비교하십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Obscurify 웹사이트](https://obscurify.ai) — 제품 설명, 로컬 모드, 링크. 2026년 10월 23일 확인.',
          '[Obscurify 요금 페이지](https://obscurify.ai/pricing) — 게스트 제한, 요금제, 청구. 2026년 10월 23일 확인.',
          '[Obscurify About 페이지](https://obscurify.ai/about) — 익명성, 결제, 로그에 관한 설명. 2026년 10월 23일 확인.',
          '[Obscurify 개인정보 처리방침](https://obscurify.ai/privacy) — 수집 데이터, 보관 기간, 제공업체, 결제. 마지막 업데이트 2026년 10월 22일.',
          '[GitHub의 Obscurify-ai](https://github.com/Obscurify-ai) — 웹 클라이언트와 Android 앱, 라이선스, 릴리스, README. 2026년 10월 23일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[LibreChat 리뷰](/ko/power-local-llm/librechat-review) — 직접 호스팅하는 오픈소스 멀티모델 채팅 화면.',
          '[Open WebUI 리뷰](/ko/local-llms/open-webui-review) — RAG를 내장한 로컬 모델용 자체 호스팅 화면.',
          '[LobeChat 리뷰](/ko/local-llms/lobechat-review) — 플러그인 마켓이 있는 세련된 채팅 화면.',
          '[Big-AGI 리뷰](/ko/local-llms/big-agi-review) — 페르소나를 지원하는 멀티 제공업체 채팅 프런트엔드.',
          '[로컬 LLM 채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 카테고리 비교.',
        ],
      },
    },
  },
}
