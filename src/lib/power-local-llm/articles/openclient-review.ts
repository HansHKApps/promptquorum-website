// OpenClient Review: Free Apple Chat App for Ollama and LiteLLM
// Slug: openclient-review
// Companion to: enchanted-review, msty-review, librechat-review-2026, best-local-llm-apps-iphone-2026
// Sources: the maker's page and privacy policy (arturocarreterocalvo.com/openclient-llm, policy dated 2026-07-15), the GitHub repo
// artcc/openclient-llm (README, AGPL-3.0 licence field, Releases, contributors) and the App Store listing id6761379499 via the iTunes
// lookup API (free in US/DE/FR/JP/ES/BR/KR storefronts), all read 2026-10-24. No hands-on use; the request came from the site owner and
// no maker comment exists. Last upstream update 2026-10-23 (App Store v1.7.30) => no stale warning. 9 locales.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/openclient-review-hero-en.webp',
    title: 'OpenClient Review: Free Apple Chat App for Ollama and LiteLLM',
    seoTitle: 'OpenClient Review: Free Chat App for Ollama and LiteLLM',
    intro:
      'OpenClient is a free, open-source chat app for iPhone, iPad and Mac from Arturo Carretero Calvo, an independent developer. It contains no AI model of its own: you point it at an Ollama, LiteLLM or other OpenAI-compatible server that you run, and it chats with the models that server offers. This review reflects the maker\'s website and privacy policy, the GitHub repository and the App Store listing, as checked on 24 October 2026.',
    metaDescription:
      'OpenClient review: a free, AGPL-licensed iPhone, iPad and Mac chat app for your own Ollama, LiteLLM or OpenAI-compatible server. Features, privacy, limits.',
    twitterDescription:
      'OpenClient review: a free, open-source Apple chat client that needs your own Ollama or LiteLLM server. What the sources confirm, how it handles data and what was not tested.',
    audience:
      'Apple users who run, or plan to run, their own Ollama or LiteLLM server and want to know what this native client does, what it needs and what the sources do not confirm.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'OpenClient review',
    targetKeywords: [
      'openclient review',
      'openclient llm',
      'ollama client iphone',
      'litellm client ios',
      'native ollama app mac',
      'openai-compatible chat app iphone',
      'openclient vs enchanted',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**OpenClient is a free, open-source chat app for iPhone, iPad and Mac that connects to an Ollama, LiteLLM or OpenAI-compatible server you run — it has no model of its own, so it does nothing without that server.**',
    quickAnswerTop: {
      en: {
        question: 'What do I need to use OpenClient?',
        answer:
          'A server it can talk to and an Apple device running version 26 of the operating system. The app is free; the AI runs wherever your server runs. Speed and privacy of that setup were not tested here.',
        bullets: [
          'Free on the [App Store](https://apps.apple.com/us/app/id6761379499) for iPhone, iPad and Mac.',
          'Works with Ollama, LiteLLM and other servers that follow the OpenAI-compatible API.',
          'Requires iOS, iPadOS or macOS 26 or later.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is OpenClient?', anchor: 'what-is-openclient' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
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
            text: 'OpenClient is an open-source Apple-platform chat client that connects to the Ollama, LiteLLM or OpenAI-compatible server you operate instead of running a model itself.',
          },
          {
            type: 'plain-terms',
            text: 'You install it like any app, enter your server\'s address in Settings and chat with the models that server lists. What happens to your messages after that depends on your server and on any cloud provider it forwards to.',
          },
        ],
        items: [
          'Maker: Arturo Carretero Calvo, an independent developer; the repository dates from 29 March 2026 and the App Store release from 8 April 2026.',
          'License: GNU AGPL v3.0, with the full source public on GitHub.',
          'Pace: the GitHub Releases page shows macOS builds on 2, 14 and 22 October 2026, so the project is actively updated.',
          'Languages: the interface is available in ten languages, including English, German, French, Spanish, Portuguese (Portugal) and Japanese; no Chinese, Arabic or Korean interface is listed.',
        ],
      },
      overview: {
        id: 'what-is-openclient',
        title: 'What Is OpenClient?',
        content: [
          '**OpenClient is a chat front end, not an AI engine: it sends your messages to the server whose address you enter and displays the replies.** The maker describes it as a private AI chat for Apple platforms built around "your server, your models, your choice", with support for LiteLLM proxies, Ollama and other servers that follow the OpenAI-compatible API.',
          'The App Store title is "OpenClient: Private AI Chat" and the seller is Arturo Carretero Calvo, who also publishes the source code on GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**OpenClient installs like any Apple app — App Store or a signed Mac download, no terminal — but it needs a separate server to talk to.** Set up Ollama or a LiteLLM proxy first, then enter its address in the app\'s Settings.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'iPhone and iPad',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/id6761379499) (free, iOS or iPadOS 26 or later)',
          },
          {
            'Platform': 'Mac',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/id6761379499) or the signed [.dmg download](https://github.com/artcc/openclient-llm/releases) (macOS 26 or later)',
          },
          {
            'Platform': 'Beta',
            'Where to get it': '[TestFlight](https://testflight.apple.com/join/MDxfUnGc)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[arturocarreterocalvo.com/openclient-llm](https://www.arturocarreterocalvo.com/openclient-llm/)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[Privacy policy](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) (dated 15 July 2026)',
          },
          {
            'Platform': 'Source code',
            'Where to get it': '[GitHub](https://github.com/artcc/openclient-llm) (AGPL v3.0)',
          },
        ],
        note: 'Version reviewed: 1.7.30, shown on the App Store as updated on 23 October 2026 (the matching GitHub release is dated 22 October). The App Store price is free in the storefronts checked; the privacy policy also mentions voluntary purchases through Apple.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the maker\'s page, the README or the App Store description.**',
        ],
        items: [
          '**Chat.** Streaming Markdown replies, a collapsible "Thinking" block for reasoning models, a system prompt and parameters per conversation, and token and cost estimates when the server returns usage data.',
          '**Attachments and media.** Photos, camera shots and PDFs for multimodal models; image generation with compatible models on your server; speech-to-text dictation and text-to-speech playback.',
          '**Tools.** An agent loop for models that support function calling, web search through your server, and MCP tools exposed by a LiteLLM backend.',
          '**Conversations.** History with search, pins and tags, branching from any message, a private session-only chat, JSON backup and export, and optional iCloud sync.',
          '**Apple integration.** Share Sheet, Shortcuts and Siri actions, a Control Center toggle, widgets and, on the Mac, a menu bar companion.',
          '**Memory and templates.** Notes you save yourself or let the model save, a user profile and reusable system-prompt templates.',
        ],
        note: 'None of these was tested for this review, and several depend on what your server supports.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**According to the privacy policy, OpenClient has no developer-operated backend for conversations, analytics, telemetry or crash reports, and it sends your messages only to the server address you configure.** The server URL and API keys are kept in the device Keychain, and conversations stay on the device or, if you switch sync on, in your own iCloud account.',
          'The policy names the exceptions: anything your server forwards to cloud model or search providers, Apple\'s speech recognition if you choose it for dictation (Apple does not guarantee it runs on the device), purchases handled by Apple, and the optional feedback board built on Votice, which may send a random persistent device identifier and technical data such as platform, language and app version. The policy is dated 15 July 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The source code is public, so the data handling can be inspected, but PromptQuorum did not read the code or monitor network traffic. If your server forwards to a cloud provider, that provider\'s policy applies to your messages.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Apple users who already run Ollama or LiteLLM** and want a native iPhone, iPad and Mac front end.',
          '**People who want to read the source** of the chat app that handles their prompts.',
          '**LiteLLM users** who want MCP tools and cost data in a mobile client.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** Streaming speed, battery use, reliability on mobile networks and answer quality were not tested.',
          '**Server compatibility.** The README says basic chat needs only model listing and chat completions; whether a given server supports every feature was not checked.',
          '**Remote-access security.** How you expose and protect your server is outside the app and was not assessed.',
          '**Long-term support.** GitHub lists a single contributor, and the sources state no roadmap or support commitment.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[Enchanted](/power-local-llm/enchanted-review)',
            'Platforms': 'iOS, macOS',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Minimal Apple client for Ollama only',
          },
          {
            'App': '[Msty](/power-local-llm/msty-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price / license': 'Freemium / closed source',
            'Key difference': 'Desktop chat app for local and cloud models',
          },
          {
            'App': '[LibreChat](/power-local-llm/librechat-review-2026)',
            'Platforms': 'Web (self-hosted)',
            'Price / license': 'Free / MIT',
            'Key difference': 'Self-hosted multi-model chat with team features',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I use OpenClient with only a cloud API key?',
            a: 'The README says it works with any server that implements model listing and chat completions in the OpenAI-compatible format. Whether a particular cloud vendor\'s endpoint qualifies was not tested.',
          },
          {
            q: 'Is there a Windows or Android version?',
            a: 'No. The maker\'s page lists iOS, iPadOS and macOS only, and the app is written in Swift with SwiftUI.',
          },
          {
            q: 'What address do I enter in Settings?',
            a: 'For LiteLLM, your proxy\'s address on port 4000. For Ollama directly, its address on port 11434 including the /v1 path, because the app appends API paths without adding or removing /v1.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'OpenClient suits people who already operate an Ollama or LiteLLM server and want a free, open-source, native client for iPhone, iPad and Mac; it is the wrong choice for anyone hoping for an app that runs a model on the phone. The sources show a feature-rich, frequently updated project, but speed, reliability and the privacy claims were not tested here. Compare [Enchanted](/power-local-llm/enchanted-review) if you only use Ollama, or [Msty](/power-local-llm/msty-review) for a desktop app that covers local and cloud models.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenClient on the App Store](https://apps.apple.com/us/app/id6761379499) — version, update date, price, supported devices and description, checked 24 October 2026.',
          '[OpenClient website](https://www.arturocarreterocalvo.com/openclient-llm/) — the maker\'s product page: features, setup and download links.',
          '[OpenClient privacy policy](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) — data handling, third-party services and permissions; revision dated 15 July 2026.',
          '[artcc/openclient-llm on GitHub](https://github.com/artcc/openclient-llm) — README, AGPL v3.0 license, release history and contributor list, checked 24 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Enchanted Review](/power-local-llm/enchanted-review) — a minimal macOS and iOS client for Ollama.',
          '[Msty Review](/power-local-llm/msty-review) — a cross-platform chat app for local and cloud models.',
          '[LibreChat Review](/power-local-llm/librechat-review-2026) — a self-hosted multi-model chat interface.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
          '[Local LLM Software Directory](/directory) — the full catalog, including OpenClient\'s entry.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'OpenClient Review: Free Apple Chat App for Ollama and LiteLLM',
      description:
        'OpenClient review: a free, open-source Apple chat client that needs your own Ollama or LiteLLM server. What the sources confirm, how it handles data and what was not tested.',
      url: 'https://www.promptquorum.com/power-local-llm/openclient-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Apple users who run their own Ollama or LiteLLM server' },
      about: [
        { '@type': 'Thing', name: 'OpenClient' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LiteLLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/openclient-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'OpenClient Review', item: 'https://www.promptquorum.com/power-local-llm/openclient-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/openclient-review-hero-de.webp',
    title: 'OpenClient-Rezension: Kostenlose Apple-Chat-App für Ollama und LiteLLM',
    seoTitle: 'OpenClient-Rezension: Chat-App für Ollama und LiteLLM',
    intro:
      'OpenClient ist eine kostenlose, quelloffene Chat-App für iPhone, iPad und Mac von Arturo Carretero Calvo, einem unabhängigen Entwickler. Sie enthält kein eigenes KI-Modell: Sie verbinden sie mit einem Ollama-, LiteLLM- oder anderen OpenAI-kompatiblen Server, den Sie selbst betreiben, und chatten mit den Modellen, die dieser Server anbietet. Diese Rezension gibt die Website und die Datenschutzerklärung des Entwicklers, das GitHub-Repository und den App-Store-Eintrag wieder, wie am 24. Oktober 2026 geprüft.',
    metaDescription:
      'OpenClient-Rezension: kostenlose AGPL-Chat-App für iPhone, iPad und Mac, die Ihren eigenen Ollama-, LiteLLM- oder OpenAI-kompatiblen Server nutzt.',
    twitterDescription:
      'OpenClient-Rezension: ein kostenloser, quelloffener Apple-Chat-Client, der einen eigenen Ollama- oder LiteLLM-Server braucht. Was die Quellen bestätigen, wie die App mit Daten umgeht und was nicht getestet wurde.',
    audience:
      'Apple-Nutzer, die einen eigenen Ollama- oder LiteLLM-Server betreiben oder planen und wissen möchten, was dieser native Client kann, was er voraussetzt und was die Quellen nicht bestätigen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'OpenClient Rezension',
    targetKeywords: [
      'openclient rezension',
      'openclient llm',
      'ollama client iphone',
      'litellm client ios',
      'native ollama app mac',
      'openai-kompatible chat app iphone',
      'openclient vs enchanted',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**OpenClient ist eine kostenlose, quelloffene Chat-App für iPhone, iPad und Mac, die sich mit einem von Ihnen betriebenen Ollama-, LiteLLM- oder OpenAI-kompatiblen Server verbindet — sie hat kein eigenes Modell und funktioniert ohne diesen Server nicht.**',
    quickAnswerTop: {
      de: {
        question: 'Was brauche ich, um OpenClient zu nutzen?',
        answer:
          'Einen Server, mit dem die App sprechen kann, und ein Apple-Gerät mit Version 26 des Betriebssystems. Die App ist kostenlos; die KI läuft dort, wo Ihr Server läuft. Tempo und Datenschutz dieses Aufbaus wurden hier nicht getestet.',
        bullets: [
          'Kostenlos im [App Store](https://apps.apple.com/us/app/id6761379499) für iPhone, iPad und Mac.',
          'Funktioniert mit Ollama, LiteLLM und anderen Servern, die der OpenAI-kompatiblen API folgen.',
          'Setzt iOS, iPadOS oder macOS 26 oder neuer voraus.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist OpenClient?', anchor: 'what-is-openclient' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
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
            text: 'OpenClient ist ein quelloffener Chat-Client für Apple-Plattformen, der sich mit dem von Ihnen betriebenen Ollama-, LiteLLM- oder OpenAI-kompatiblen Server verbindet, statt selbst ein Modell auszuführen.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App wie jede andere, tragen die Adresse Ihres Servers in den Einstellungen ein und chatten mit den Modellen, die dieser Server auflistet. Was danach mit Ihren Nachrichten geschieht, hängt von Ihrem Server und von jedem Cloud-Anbieter ab, an den er weiterleitet.',
          },
        ],
        items: [
          'Entwickler: Arturo Carretero Calvo, ein unabhängiger Entwickler; das Repository stammt vom 29. März 2026, die Veröffentlichung im App Store vom 8. April 2026.',
          'Lizenz: GNU AGPL v3.0, der vollständige Quellcode ist auf GitHub öffentlich.',
          'Tempo: Die GitHub-Releases-Seite zeigt macOS-Builds vom 2., 14. und 22. Oktober 2026 — das Projekt wird aktiv aktualisiert.',
          'Sprachen: Die Oberfläche gibt es in zehn Sprachen, darunter Englisch, Deutsch, Französisch, Spanisch, Portugiesisch (Portugal) und Japanisch; Chinesisch, Arabisch oder Koreanisch sind nicht aufgeführt.',
        ],
      },
      overview: {
        id: 'what-is-openclient',
        title: 'Was ist OpenClient?',
        content: [
          '**OpenClient ist eine Chat-Oberfläche, keine KI-Engine: Die App sendet Ihre Nachrichten an den Server, dessen Adresse Sie eintragen, und zeigt die Antworten an.** Der Entwickler beschreibt sie als privaten KI-Chat für Apple-Plattformen nach dem Prinzip „your server, your models, your choice“, mit Unterstützung für LiteLLM-Proxys, Ollama und andere Server, die der OpenAI-kompatiblen API folgen.',
          'Der Titel im App Store lautet „OpenClient: Private AI Chat“, Anbieter ist Arturo Carretero Calvo, der den Quellcode auch auf GitHub veröffentlicht.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**OpenClient wird wie jede Apple-App installiert — über den App Store oder einen signierten Mac-Download, ohne Terminal —, braucht aber einen separaten Server, mit dem es sprechen kann.** Richten Sie zuerst Ollama oder einen LiteLLM-Proxy ein und tragen Sie dessen Adresse dann in den Einstellungen der App ein.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'iPhone und iPad',
            'Bezugsquelle': '[App Store](https://apps.apple.com/us/app/id6761379499) (kostenlos, iOS oder iPadOS 26 oder neuer)',
          },
          {
            'Plattform': 'Mac',
            'Bezugsquelle': '[App Store](https://apps.apple.com/us/app/id6761379499) oder signierter [.dmg-Download](https://github.com/artcc/openclient-llm/releases) (macOS 26 oder neuer)',
          },
          {
            'Plattform': 'Beta',
            'Bezugsquelle': '[TestFlight](https://testflight.apple.com/join/MDxfUnGc)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[arturocarreterocalvo.com/openclient-llm](https://www.arturocarreterocalvo.com/openclient-llm/)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Datenschutzerklärung](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) (Stand 15. Juli 2026)',
          },
          {
            'Plattform': 'Quellcode',
            'Bezugsquelle': '[GitHub](https://github.com/artcc/openclient-llm) (AGPL v3.0)',
          },
        ],
        note: 'Geprüfte Version: 1.7.30, im App Store als am 23. Oktober 2026 aktualisiert angezeigt (das passende GitHub-Release trägt das Datum 22. Oktober). Der App-Store-Preis ist in den geprüften Storefronts kostenlos; die Datenschutzerklärung erwähnt zudem freiwillige Käufe über Apple.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt von der Seite des Entwicklers, aus der README oder aus der App-Store-Beschreibung.**',
        ],
        items: [
          '**Chat.** Gestreamte Markdown-Antworten, ein ausklappbarer „Thinking“-Block für Reasoning-Modelle, ein Systemprompt samt Parametern pro Unterhaltung sowie Token- und Kostenschätzungen, wenn der Server Nutzungsdaten liefert.',
          '**Anhänge und Medien.** Fotos, Kameraaufnahmen und PDFs für multimodale Modelle; Bildgenerierung mit kompatiblen Modellen auf Ihrem Server; Diktat per Spracherkennung und Wiedergabe per Sprachausgabe.',
          '**Werkzeuge.** Eine Agentenschleife für Modelle mit Function Calling, Websuche über Ihren Server und MCP-Werkzeuge, die ein LiteLLM-Backend bereitstellt.',
          '**Unterhaltungen.** Verlauf mit Suche, Anheften und Tags, Verzweigen ab jeder Nachricht, ein privater Chat nur für die Sitzung, JSON-Backup und -Export sowie optionale iCloud-Synchronisierung.',
          '**Apple-Integration.** Share Sheet, Kurzbefehle und Siri-Aktionen, ein Schalter im Kontrollzentrum, Widgets und auf dem Mac ein Begleiter in der Menüleiste.',
          '**Gedächtnis und Vorlagen.** Notizen, die Sie selbst speichern oder vom Modell speichern lassen, ein Nutzerprofil und wiederverwendbare Systemprompt-Vorlagen.',
        ],
        note: 'Keine dieser Funktionen wurde für diese Rezension getestet, und einige hängen davon ab, was Ihr Server unterstützt.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Laut Datenschutzerklärung hat OpenClient kein vom Entwickler betriebenes Backend für Unterhaltungen, Analysen, Telemetrie oder Absturzberichte und sendet Ihre Nachrichten nur an die Serveradresse, die Sie konfigurieren.** Server-URL und API-Schlüssel liegen im Schlüsselbund des Geräts, und Unterhaltungen bleiben auf dem Gerät oder, wenn Sie die Synchronisierung einschalten, in Ihrem eigenen iCloud-Konto.',
          'Die Erklärung nennt die Ausnahmen: alles, was Ihr Server an Cloud-Modell- oder Suchanbieter weiterleitet; die Spracherkennung von Apple, wenn Sie sie fürs Diktat wählen (Apple garantiert nicht, dass sie auf dem Gerät läuft); über Apple abgewickelte Käufe; und das optionale Feedback-Board auf Basis von Votice, das eine zufällige dauerhafte Gerätekennung sowie technische Daten wie Plattform, Sprache und App-Version senden kann. Die Erklärung trägt das Datum 15. Juli 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Der Quellcode ist öffentlich, die Datenverarbeitung lässt sich also prüfen, doch PromptQuorum hat weder den Code gelesen noch den Netzwerkverkehr überwacht. Leitet Ihr Server an einen Cloud-Anbieter weiter, gelten für Ihre Nachrichten dessen Richtlinien.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Apple-Nutzer, die bereits Ollama oder LiteLLM betreiben** und eine native Oberfläche für iPhone, iPad und Mac wollen.',
          '**Menschen, die den Quellcode lesen möchten** der Chat-App, die ihre Prompts verarbeitet.',
          '**LiteLLM-Nutzer,** die MCP-Werkzeuge und Kostendaten in einem mobilen Client wünschen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität im Praxiseinsatz.** Streaming-Tempo, Akkuverbrauch, Zuverlässigkeit in Mobilfunknetzen und Antwortqualität wurden nicht getestet.',
          '**Serverkompatibilität.** Laut README braucht ein einfacher Chat nur Modellliste und Chat-Completions; ob ein bestimmter Server jede Funktion unterstützt, wurde nicht geprüft.',
          '**Sicherheit beim Fernzugriff.** Wie Sie Ihren Server erreichbar machen und schützen, liegt außerhalb der App und wurde nicht bewertet.',
          '**Langfristige Pflege.** GitHub führt einen einzigen Mitwirkenden, und die Quellen nennen weder eine Roadmap noch eine Support-Zusage.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': '[Enchanted](/de/power-local-llm/enchanted-review)',
            'Plattformen': 'iOS, macOS',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Minimaler Apple-Client nur für Ollama',
          },
          {
            'App': '[Msty](/de/power-local-llm/msty-review)',
            'Plattformen': 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Freemium / nicht quelloffen',
            'Wesentlicher Unterschied': 'Desktop-Chat-App für lokale und Cloud-Modelle',
          },
          {
            'App': '[LibreChat](/de/power-local-llm/librechat-review-2026)',
            'Plattformen': 'Web (selbst gehostet)',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Selbst gehosteter Multi-Modell-Chat mit Teamfunktionen',
          },
        ],
        note: 'Details der Wettbewerber ändern sich häufig; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich OpenClient nur mit einem Cloud-API-Schlüssel nutzen?',
            a: 'Laut README funktioniert die App mit jedem Server, der Modellliste und Chat-Completions im OpenAI-kompatiblen Format bereitstellt. Ob der Endpunkt eines bestimmten Cloud-Anbieters dazugehört, wurde nicht getestet.',
          },
          {
            q: 'Gibt es eine Windows- oder Android-Version?',
            a: 'Nein. Die Seite des Entwicklers nennt nur iOS, iPadOS und macOS, und die App ist in Swift mit SwiftUI geschrieben.',
          },
          {
            q: 'Welche Adresse trage ich in den Einstellungen ein?',
            a: 'Bei LiteLLM die Adresse Ihres Proxys auf Port 4000. Bei Ollama direkt dessen Adresse auf Port 11434 samt Pfad /v1, weil die App API-Pfade anhängt, ohne /v1 hinzuzufügen oder zu entfernen.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'OpenClient eignet sich für Menschen, die bereits einen Ollama- oder LiteLLM-Server betreiben und einen kostenlosen, quelloffenen, nativen Client für iPhone, iPad und Mac wollen; für alle, die eine App erwarten, die ein Modell auf dem Telefon ausführt, ist es die falsche Wahl. Die Quellen zeigen ein funktionsreiches, häufig aktualisiertes Projekt, doch Tempo, Zuverlässigkeit und die Datenschutzangaben wurden hier nicht getestet. Vergleichen Sie [Enchanted](/de/power-local-llm/enchanted-review), wenn Sie nur Ollama nutzen, oder [Msty](/de/power-local-llm/msty-review) für eine Desktop-App, die lokale und Cloud-Modelle abdeckt.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[OpenClient im App Store](https://apps.apple.com/us/app/id6761379499) — Version, Update-Datum, Preis, unterstützte Geräte und Beschreibung, geprüft am 24. Oktober 2026.',
          '[OpenClient-Website](https://www.arturocarreterocalvo.com/openclient-llm/) — die Produktseite des Entwicklers: Funktionen, Einrichtung und Download-Links.',
          '[OpenClient-Datenschutzerklärung](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) — Datenverarbeitung, Drittanbieter-Dienste und Berechtigungen; Fassung vom 15. Juli 2026.',
          '[artcc/openclient-llm bei GitHub](https://github.com/artcc/openclient-llm) — README, AGPL-v3.0-Lizenz, Release-Verlauf und Mitwirkendenliste, geprüft am 24. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Enchanted-Rezension](/de/power-local-llm/enchanted-review) — ein minimaler macOS- und iOS-Client für Ollama.',
          '[Msty-Rezension](/de/power-local-llm/msty-review) — eine plattformübergreifende Chat-App für lokale und Cloud-Modelle.',
          '[LibreChat-Rezension](/de/power-local-llm/librechat-review-2026) — eine selbst gehostete Multi-Modell-Chat-Oberfläche.',
          '[Die besten lokalen LLM-Apps für das iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — der breitere iPhone-Überblick.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog samt Eintrag zu OpenClient.',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/openclient-review-hero-es.webp',
    title: 'Análisis de OpenClient: app de chat gratuita de Apple para Ollama y LiteLLM',
    seoTitle: 'Análisis de OpenClient: chat para Ollama y LiteLLM',
    intro:
      'OpenClient es una app de chat gratuita y de código abierto para iPhone, iPad y Mac de Arturo Carretero Calvo, un desarrollador independiente. No incluye ningún modelo de IA propio: la conectas a un servidor Ollama, LiteLLM u otro compatible con OpenAI que tú mismo ejecutas, y chatea con los modelos que ese servidor ofrece. Este análisis recoge el sitio web y la política de privacidad del desarrollador, el repositorio de GitHub y la ficha de la App Store, revisados el 24 de octubre de 2026.',
    metaDescription:
      'Análisis de OpenClient: app de chat gratuita con licencia AGPL para iPhone, iPad y Mac que usa tu propio servidor Ollama, LiteLLM o compatible con OpenAI.',
    twitterDescription:
      'Análisis de OpenClient: un cliente de chat de Apple gratuito y de código abierto que necesita tu propio servidor Ollama o LiteLLM. Qué confirman las fuentes, cómo trata los datos y qué no se probó.',
    audience:
      'Usuarios de Apple que ejecutan, o piensan ejecutar, su propio servidor Ollama o LiteLLM y quieren saber qué hace este cliente nativo, qué necesita y qué no confirman las fuentes.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de OpenClient',
    targetKeywords: [
      'análisis openclient',
      'openclient llm',
      'cliente ollama iphone',
      'cliente litellm ios',
      'app nativa ollama mac',
      'app de chat iphone compatible con openai',
      'openclient vs enchanted',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**OpenClient es una app de chat gratuita y de código abierto para iPhone, iPad y Mac que se conecta a un servidor Ollama, LiteLLM o compatible con OpenAI que tú ejecutas; no tiene modelo propio, así que sin ese servidor no hace nada.**',
    quickAnswerTop: {
      es: {
        question: '¿Qué necesito para usar OpenClient?',
        answer:
          'Un servidor con el que pueda comunicarse y un dispositivo Apple con la versión 26 del sistema operativo. La app es gratuita; la IA se ejecuta donde se ejecute tu servidor. La velocidad y la privacidad de esa configuración no se probaron aquí.',
        bullets: [
          'Gratis en la [App Store](https://apps.apple.com/us/app/id6761379499) para iPhone, iPad y Mac.',
          'Funciona con Ollama, LiteLLM y otros servidores que siguen la API compatible con OpenAI.',
          'Requiere iOS, iPadOS o macOS 26 o posterior.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es OpenClient?', anchor: 'what-is-openclient' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y uso de la red', anchor: 'privacy' },
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
            text: 'OpenClient es un cliente de chat de código abierto para plataformas Apple que se conecta al servidor Ollama, LiteLLM o compatible con OpenAI que tú gestionas, en lugar de ejecutar un modelo por sí mismo.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas como cualquier app, escribes la dirección de tu servidor en Ajustes y chateas con los modelos que ese servidor lista. Lo que pase después con tus mensajes depende de tu servidor y de cualquier proveedor en la nube al que reenvíe.',
          },
        ],
        items: [
          'Desarrollador: Arturo Carretero Calvo, un desarrollador independiente; el repositorio es del 29 de marzo de 2026 y la versión en la App Store, del 8 de abril de 2026.',
          'Licencia: GNU AGPL v3.0, con todo el código fuente público en GitHub.',
          'Ritmo: la página de versiones de GitHub muestra compilaciones para macOS del 2, el 14 y el 22 de octubre de 2026, así que el proyecto se actualiza de forma activa.',
          'Idiomas: la interfaz está disponible en diez idiomas, entre ellos inglés, alemán, francés, español, portugués (Portugal) y japonés; no figura interfaz en chino, árabe ni coreano.',
        ],
      },
      overview: {
        id: 'what-is-openclient',
        title: '¿Qué es OpenClient?',
        content: [
          '**OpenClient es una interfaz de chat, no un motor de IA: envía tus mensajes al servidor cuya dirección introduces y muestra las respuestas.** El desarrollador lo describe como un chat de IA privado para plataformas Apple basado en «your server, your models, your choice», con compatibilidad con proxies LiteLLM, Ollama y otros servidores que siguen la API compatible con OpenAI.',
          'El título en la App Store es «OpenClient: Private AI Chat» y el vendedor es Arturo Carretero Calvo, quien también publica el código fuente en GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**OpenClient se instala como cualquier app de Apple —desde la App Store o con una descarga firmada para Mac, sin terminal—, pero necesita un servidor aparte con el que comunicarse.** Configura primero Ollama o un proxy LiteLLM y luego introduce su dirección en los Ajustes de la app.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'iPhone y iPad',
            'Dónde obtenerla': '[App Store](https://apps.apple.com/us/app/id6761379499) (gratis, iOS o iPadOS 26 o posterior)',
          },
          {
            'Plataforma': 'Mac',
            'Dónde obtenerla': '[App Store](https://apps.apple.com/us/app/id6761379499) o la [descarga .dmg](https://github.com/artcc/openclient-llm/releases) firmada (macOS 26 o posterior)',
          },
          {
            'Plataforma': 'Beta',
            'Dónde obtenerla': '[TestFlight](https://testflight.apple.com/join/MDxfUnGc)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[arturocarreterocalvo.com/openclient-llm](https://www.arturocarreterocalvo.com/openclient-llm/)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[Política de privacidad](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) (del 15 de julio de 2026)',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde obtenerla': '[GitHub](https://github.com/artcc/openclient-llm) (AGPL v3.0)',
          },
        ],
        note: 'Versión analizada: 1.7.30, que la App Store muestra como actualizada el 23 de octubre de 2026 (la versión correspondiente de GitHub es del 22 de octubre). El precio en la App Store es gratuito en las tiendas consultadas; la política de privacidad menciona además compras voluntarias a través de Apple.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Todos los puntos siguientes proceden de la página del desarrollador, del README o de la descripción de la App Store.**',
        ],
        items: [
          '**Chat.** Respuestas en Markdown con streaming, un bloque «Thinking» plegable para modelos de razonamiento, prompt de sistema y parámetros por conversación, y estimaciones de tokens y coste cuando el servidor devuelve datos de uso.',
          '**Adjuntos y multimedia.** Fotos, capturas de cámara y PDF para modelos multimodales; generación de imágenes con modelos compatibles de tu servidor; dictado por voz y lectura en voz alta.',
          '**Herramientas.** Un bucle de agente para modelos con llamada a funciones, búsqueda web a través de tu servidor y herramientas MCP que expone un backend LiteLLM.',
          '**Conversaciones.** Historial con búsqueda, fijado y etiquetas, ramificación desde cualquier mensaje, un chat privado solo de sesión, copia y exportación en JSON y sincronización opcional con iCloud.',
          '**Integración con Apple.** Hoja de compartir, acciones de Atajos y Siri, un control en el Centro de control, widgets y, en el Mac, un acompañante en la barra de menús.',
          '**Memoria y plantillas.** Notas que guardas tú o deja guardar al modelo, un perfil de usuario y plantillas reutilizables de prompt de sistema.',
        ],
        note: 'Ninguna de estas funciones se probó para este análisis, y varias dependen de lo que admita tu servidor.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**Según la política de privacidad, OpenClient no tiene un backend operado por el desarrollador para conversaciones, analítica, telemetría ni informes de fallos, y envía tus mensajes solo a la dirección de servidor que configuras.** La URL del servidor y las claves de API se guardan en el llavero del dispositivo, y las conversaciones permanecen en el dispositivo o, si activas la sincronización, en tu propia cuenta de iCloud.',
          'La política menciona las excepciones: todo lo que tu servidor reenvíe a proveedores de modelos o de búsqueda en la nube; el reconocimiento de voz de Apple si lo eliges para dictar (Apple no garantiza que se ejecute en el dispositivo); las compras gestionadas por Apple; y el tablón de comentarios opcional basado en Votice, que puede enviar un identificador de dispositivo aleatorio y persistente y datos técnicos como plataforma, idioma y versión de la app. La política tiene fecha del 15 de julio de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El código fuente es público, así que el tratamiento de datos se puede inspeccionar, pero PromptQuorum no leyó el código ni monitorizó el tráfico de red. Si tu servidor reenvía a un proveedor en la nube, a tus mensajes se aplica la política de ese proveedor.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Apple que ya ejecutan Ollama o LiteLLM** y quieren una interfaz nativa para iPhone, iPad y Mac.',
          '**Quienes quieren leer el código fuente** de la app de chat que gestiona sus prompts.',
          '**Usuarios de LiteLLM** que quieren herramientas MCP y datos de coste en un cliente móvil.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en el uso real.** No se probaron la velocidad de streaming, el consumo de batería, la fiabilidad en redes móviles ni la calidad de las respuestas.',
          '**Compatibilidad con servidores.** Según el README, el chat básico solo necesita la lista de modelos y chat completions; no se comprobó si un servidor concreto admite todas las funciones.',
          '**Seguridad del acceso remoto.** Cómo expones y proteges tu servidor queda fuera de la app y no se evaluó.',
          '**Soporte a largo plazo.** GitHub muestra un único colaborador y las fuentes no indican hoja de ruta ni compromiso de soporte.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': '[Enchanted](/es/power-local-llm/enchanted-review)',
            'Plataformas': 'iOS, macOS',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Cliente Apple mínimo solo para Ollama',
          },
          {
            'App': '[Msty](/es/power-local-llm/msty-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Precio / licencia': 'Freemium / código cerrado',
            'Diferencia clave': 'App de chat de escritorio para modelos locales y en la nube',
          },
          {
            'App': '[LibreChat](/es/power-local-llm/librechat-review-2026)',
            'Plataformas': 'Web (autoalojado)',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat multimodelo autoalojado con funciones de equipo',
          },
        ],
        note: 'Los detalles de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo usar OpenClient solo con una clave de API en la nube?',
            a: 'El README dice que funciona con cualquier servidor que implemente la lista de modelos y chat completions en formato compatible con OpenAI. No se probó si el endpoint de un proveedor concreto en la nube cumple ese requisito.',
          },
          {
            q: '¿Hay versión para Windows o Android?',
            a: 'No. La página del desarrollador solo menciona iOS, iPadOS y macOS, y la app está escrita en Swift con SwiftUI.',
          },
          {
            q: '¿Qué dirección introduzco en Ajustes?',
            a: 'Para LiteLLM, la dirección de tu proxy en el puerto 4000. Para Ollama directamente, su dirección en el puerto 11434 con la ruta /v1, porque la app añade las rutas de la API sin agregar ni quitar /v1.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'OpenClient encaja con quienes ya gestionan un servidor Ollama o LiteLLM y quieren un cliente nativo, gratuito y de código abierto para iPhone, iPad y Mac; es la opción equivocada para quien espere una app que ejecute un modelo en el teléfono. Las fuentes muestran un proyecto con muchas funciones y actualizaciones frecuentes, pero la velocidad, la fiabilidad y las afirmaciones de privacidad no se probaron aquí. Compara [Enchanted](/es/power-local-llm/enchanted-review) si solo usas Ollama, o [Msty](/es/power-local-llm/msty-review) para una app de escritorio que cubre modelos locales y en la nube.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[OpenClient en la App Store](https://apps.apple.com/us/app/id6761379499) — versión, fecha de actualización, precio, dispositivos compatibles y descripción, revisados el 24 de octubre de 2026.',
          '[Sitio web de OpenClient](https://www.arturocarreterocalvo.com/openclient-llm/) — la página del producto del desarrollador: funciones, configuración y enlaces de descarga.',
          '[Política de privacidad de OpenClient](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) — tratamiento de datos, servicios de terceros y permisos; revisión del 15 de julio de 2026.',
          '[artcc/openclient-llm en GitHub](https://github.com/artcc/openclient-llm) — README, licencia AGPL v3.0, historial de versiones y lista de colaboradores, revisados el 24 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Enchanted](/es/power-local-llm/enchanted-review) — un cliente mínimo de macOS e iOS para Ollama.',
          '[Análisis de Msty](/es/power-local-llm/msty-review) — una app de chat multiplataforma para modelos locales y en la nube.',
          '[Análisis de LibreChat](/es/power-local-llm/librechat-review-2026) — una interfaz de chat multimodelo autoalojada.',
          '[Las mejores apps de LLM locales para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el repaso más amplio para iPhone.',
          '[Directorio de software de LLM locales](/es/directory) — el catálogo completo, con la ficha de OpenClient.',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/openclient-review-hero-fr.webp',
    title: 'Avis OpenClient : appli de chat Apple gratuite pour Ollama et LiteLLM',
    seoTitle: 'Avis OpenClient : chat gratuit pour Ollama et LiteLLM',
    intro:
      'OpenClient est une appli de chat gratuite et open source pour iPhone, iPad et Mac, signée Arturo Carretero Calvo, développeur indépendant. Elle ne contient aucun modèle d\'IA : vous la reliez à un serveur Ollama, LiteLLM ou autre serveur compatible OpenAI que vous exploitez, et elle dialogue avec les modèles que ce serveur propose. Cet avis reflète le site et la politique de confidentialité du développeur, le dépôt GitHub et la fiche App Store, consultés le 24 octobre 2026.',
    metaDescription:
      'Avis OpenClient : appli de chat gratuite sous licence AGPL pour iPhone, iPad et Mac, qui utilise votre serveur Ollama, LiteLLM ou compatible OpenAI.',
    twitterDescription:
      'Avis OpenClient : un client de chat Apple gratuit et open source qui exige votre propre serveur Ollama ou LiteLLM. Ce que confirment les sources, la gestion des données et ce qui n\'a pas été testé.',
    audience:
      'Utilisateurs Apple qui exploitent, ou comptent exploiter, leur propre serveur Ollama ou LiteLLM et veulent savoir ce que fait ce client natif, ce qu\'il exige et ce que les sources ne confirment pas.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis OpenClient',
    targetKeywords: [
      'avis openclient',
      'openclient llm',
      'client ollama iphone',
      'client litellm ios',
      'appli ollama native mac',
      'appli de chat iphone compatible openai',
      'openclient vs enchanted',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**OpenClient est une appli de chat gratuite et open source pour iPhone, iPad et Mac qui se connecte à un serveur Ollama, LiteLLM ou compatible OpenAI que vous exploitez — elle n\'a pas de modèle propre et ne fait rien sans ce serveur.**',
    quickAnswerTop: {
      fr: {
        question: 'De quoi ai-je besoin pour utiliser OpenClient ?',
        answer:
          'D\'un serveur avec lequel dialoguer et d\'un appareil Apple sous la version 26 du système. L\'appli est gratuite ; l\'IA tourne là où tourne votre serveur. La vitesse et la confidentialité de cette configuration n\'ont pas été testées ici.',
        bullets: [
          'Gratuite sur l\'[App Store](https://apps.apple.com/us/app/id6761379499) pour iPhone, iPad et Mac.',
          'Fonctionne avec Ollama, LiteLLM et d\'autres serveurs qui suivent l\'API compatible OpenAI.',
          'Exige iOS, iPadOS ou macOS 26 ou version ultérieure.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce qu\'OpenClient ?', anchor: 'what-is-openclient' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Confidentialité et usage du réseau', anchor: 'privacy' },
      { label: 'À qui elle convient', anchor: 'who-should-use' },
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
            text: 'OpenClient est un client de chat open source pour les plateformes Apple qui se connecte au serveur Ollama, LiteLLM ou compatible OpenAI que vous exploitez, au lieu d\'exécuter lui-même un modèle.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez comme n\'importe quelle appli, saisissez l\'adresse de votre serveur dans les Réglages et dialoguez avec les modèles que ce serveur liste. Ce qu\'il advient ensuite de vos messages dépend de votre serveur et de tout fournisseur cloud vers lequel il les transmet.',
          },
        ],
        items: [
          'Développeur : Arturo Carretero Calvo, développeur indépendant ; le dépôt date du 29 mars 2026 et la sortie sur l\'App Store du 8 avril 2026.',
          'Licence : GNU AGPL v3.0, avec tout le code source public sur GitHub.',
          'Rythme : la page des versions GitHub montre des builds macOS les 2, 14 et 22 octobre 2026 ; le projet est donc activement mis à jour.',
          'Langues : l\'interface existe en dix langues, dont l\'anglais, l\'allemand, le français, l\'espagnol, le portugais (Portugal) et le japonais ; aucune interface en chinois, arabe ou coréen n\'est indiquée.',
        ],
      },
      overview: {
        id: 'what-is-openclient',
        title: 'Qu\'est-ce qu\'OpenClient ?',
        content: [
          '**OpenClient est une interface de chat, pas un moteur d\'IA : elle envoie vos messages au serveur dont vous saisissez l\'adresse et affiche les réponses.** Le développeur la décrit comme un chat IA privé pour les plateformes Apple, bâti sur « your server, your models, your choice », compatible avec les proxys LiteLLM, Ollama et d\'autres serveurs qui suivent l\'API compatible OpenAI.',
          'Le titre sur l\'App Store est « OpenClient: Private AI Chat » et le vendeur est Arturo Carretero Calvo, qui publie aussi le code source sur GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**OpenClient s\'installe comme toute appli Apple — App Store ou téléchargement Mac signé, sans terminal — mais il lui faut un serveur distinct avec lequel dialoguer.** Configurez d\'abord Ollama ou un proxy LiteLLM, puis saisissez son adresse dans les Réglages de l\'appli.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'iPhone et iPad',
            'Où la trouver': '[App Store](https://apps.apple.com/us/app/id6761379499) (gratuite, iOS ou iPadOS 26 ou version ultérieure)',
          },
          {
            'Plateforme': 'Mac',
            'Où la trouver': '[App Store](https://apps.apple.com/us/app/id6761379499) ou [téléchargement .dmg](https://github.com/artcc/openclient-llm/releases) signé (macOS 26 ou version ultérieure)',
          },
          {
            'Plateforme': 'Bêta',
            'Où la trouver': '[TestFlight](https://testflight.apple.com/join/MDxfUnGc)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[arturocarreterocalvo.com/openclient-llm](https://www.arturocarreterocalvo.com/openclient-llm/)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) (datée du 15 juillet 2026)',
          },
          {
            'Plateforme': 'Code source',
            'Où la trouver': '[GitHub](https://github.com/artcc/openclient-llm) (AGPL v3.0)',
          },
        ],
        note: 'Version examinée : 1.7.30, affichée sur l\'App Store comme mise à jour le 23 octobre 2026 (la version GitHub correspondante date du 22 octobre). Le prix sur l\'App Store est gratuit dans les boutiques consultées ; la politique de confidentialité mentionne aussi des achats facultatifs via Apple.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la page du développeur, du README ou de la description de l\'App Store.**',
        ],
        items: [
          '**Chat.** Réponses Markdown en streaming, un bloc « Thinking » repliable pour les modèles de raisonnement, un prompt système et des paramètres par conversation, et des estimations de jetons et de coût lorsque le serveur renvoie des données d\'usage.',
          '**Pièces jointes et médias.** Photos, prises de vue et PDF pour les modèles multimodaux ; génération d\'images avec des modèles compatibles de votre serveur ; dictée vocale et lecture à voix haute.',
          '**Outils.** Une boucle d\'agent pour les modèles qui gèrent l\'appel de fonctions, la recherche web via votre serveur et les outils MCP exposés par un backend LiteLLM.',
          '**Conversations.** Historique avec recherche, épingles et étiquettes, ramification à partir de n\'importe quel message, un chat privé limité à la session, sauvegarde et export JSON, et synchronisation iCloud facultative.',
          '**Intégration Apple.** Feuille de partage, actions Raccourcis et Siri, une commande du Centre de contrôle, des widgets et, sur Mac, un compagnon dans la barre des menus.',
          '**Mémoire et modèles.** Notes que vous enregistrez vous-même ou que le modèle enregistre, un profil utilisateur et des modèles de prompt système réutilisables.',
        ],
        note: 'Aucune de ces fonctions n\'a été testée pour cet avis, et plusieurs dépendent de ce que gère votre serveur.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Selon la politique de confidentialité, OpenClient n\'a aucun backend exploité par le développeur pour les conversations, l\'analytique, la télémétrie ou les rapports de plantage, et n\'envoie vos messages qu\'à l\'adresse de serveur que vous configurez.** L\'URL du serveur et les clés d\'API sont conservées dans le trousseau de l\'appareil, et les conversations restent sur l\'appareil ou, si vous activez la synchronisation, dans votre propre compte iCloud.',
          'La politique cite les exceptions : tout ce que votre serveur transmet à des fournisseurs de modèles ou de recherche dans le cloud ; la reconnaissance vocale d\'Apple si vous la choisissez pour la dictée (Apple ne garantit pas qu\'elle s\'exécute sur l\'appareil) ; les achats gérés par Apple ; et le forum de retours facultatif fondé sur Votice, qui peut envoyer un identifiant d\'appareil aléatoire et persistant ainsi que des données techniques comme la plateforme, la langue et la version de l\'appli. La politique est datée du 15 juillet 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le code source est public, le traitement des données peut donc être inspecté, mais PromptQuorum n\'a ni lu le code ni surveillé le trafic réseau. Si votre serveur transmet à un fournisseur cloud, la politique de ce fournisseur s\'applique à vos messages.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Utilisateurs Apple qui exploitent déjà Ollama ou LiteLLM** et veulent une interface native pour iPhone, iPad et Mac.',
          '**Ceux qui veulent lire le code source** de l\'appli de chat qui traite leurs prompts.',
          '**Utilisateurs de LiteLLM** qui veulent les outils MCP et les données de coût dans un client mobile.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Qualité à l\'usage.** La vitesse de streaming, la consommation de batterie, la fiabilité sur réseau mobile et la qualité des réponses n\'ont pas été testées.',
          '**Compatibilité des serveurs.** Selon le README, un chat de base n\'exige que la liste des modèles et les chat completions ; la prise en charge de chaque fonction par un serveur donné n\'a pas été vérifiée.',
          '**Sécurité de l\'accès distant.** La manière d\'exposer et de protéger votre serveur sort du cadre de l\'appli et n\'a pas été évaluée.',
          '**Soutien à long terme.** GitHub indique un seul contributeur, et les sources ne mentionnent ni feuille de route ni engagement de support.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': '[Enchanted](/fr/power-local-llm/enchanted-review)',
            'Plateformes': 'iOS, macOS',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Client Apple minimal pour Ollama uniquement',
          },
          {
            'Application': '[Msty](/fr/power-local-llm/msty-review)',
            'Plateformes': 'Windows, macOS, Linux',
            'Prix / licence': 'Freemium / code fermé',
            'Différence clé': 'Appli de chat de bureau pour modèles locaux et cloud',
          },
          {
            'Application': '[LibreChat](/fr/power-local-llm/librechat-review-2026)',
            'Plateformes': 'Web (auto-hébergé)',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat multi-modèles auto-hébergé avec fonctions d\'équipe',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque appli.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Puis-je utiliser OpenClient avec une simple clé d\'API cloud ?',
            a: 'Le README indique qu\'il fonctionne avec tout serveur qui propose la liste des modèles et les chat completions au format compatible OpenAI. Le fait que le point d\'accès d\'un fournisseur cloud précis convienne n\'a pas été testé.',
          },
          {
            q: 'Existe-t-il une version Windows ou Android ?',
            a: 'Non. La page du développeur ne mentionne qu\'iOS, iPadOS et macOS, et l\'appli est écrite en Swift avec SwiftUI.',
          },
          {
            q: 'Quelle adresse saisir dans les Réglages ?',
            a: 'Pour LiteLLM, l\'adresse de votre proxy sur le port 4000. Pour Ollama directement, son adresse sur le port 11434 avec le chemin /v1, car l\'appli ajoute les chemins d\'API sans ajouter ni retirer /v1.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'OpenClient convient à ceux qui exploitent déjà un serveur Ollama ou LiteLLM et veulent un client natif, gratuit et open source pour iPhone, iPad et Mac ; c\'est le mauvais choix pour qui espère une appli exécutant un modèle sur le téléphone. Les sources montrent un projet riche en fonctions et fréquemment mis à jour, mais la vitesse, la fiabilité et les affirmations de confidentialité n\'ont pas été testées ici. Comparez [Enchanted](/fr/power-local-llm/enchanted-review) si vous n\'utilisez qu\'Ollama, ou [Msty](/fr/power-local-llm/msty-review) pour une appli de bureau couvrant modèles locaux et cloud.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenClient sur l\'App Store](https://apps.apple.com/us/app/id6761379499) — version, date de mise à jour, prix, appareils pris en charge et description, consultés le 24 octobre 2026.',
          '[Site web d\'OpenClient](https://www.arturocarreterocalvo.com/openclient-llm/) — la page produit du développeur : fonctions, configuration et liens de téléchargement.',
          '[Politique de confidentialité d\'OpenClient](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) — traitement des données, services tiers et autorisations ; révision du 15 juillet 2026.',
          '[artcc/openclient-llm sur GitHub](https://github.com/artcc/openclient-llm) — README, licence AGPL v3.0, historique des versions et liste des contributeurs, consultés le 24 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Enchanted](/fr/power-local-llm/enchanted-review) — un client macOS et iOS minimal pour Ollama.',
          '[Avis Msty](/fr/power-local-llm/msty-review) — une appli de chat multiplateforme pour modèles locaux et cloud.',
          '[Avis LibreChat](/fr/power-local-llm/librechat-review-2026) — une interface de chat multi-modèles auto-hébergée.',
          '[Les meilleures applis de LLM locaux pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama plus large pour iPhone.',
          '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet, avec la fiche d\'OpenClient.',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/openclient-review-hero-ja.webp',
    title: 'OpenClientレビュー:OllamaとLiteLLM向けの無料Appleチャットアプリ',
    seoTitle: 'OpenClientレビュー:Ollama・LiteLLM向け無料チャット',
    intro:
      'OpenClientは、独立開発者Arturo Carretero Calvo氏によるiPhone・iPad・Mac向けの無料オープンソースのチャットアプリです。AIモデルは内蔵しておらず、ご自身で運用するOllama、LiteLLM、またはOpenAI互換サーバーに接続し、そのサーバーが提供するモデルと会話します。このレビューは、開発者のサイトとプライバシーポリシー、GitHubリポジトリ、App Storeの掲載情報を2026年10月24日に確認した内容に基づいています。',
    metaDescription:
      'OpenClientレビュー:自分のOllama・LiteLLM・OpenAI互換サーバーにつなぐ、AGPLライセンスの無料iPhone/iPad/Mac用チャットアプリ。機能、プライバシー、制限。',
    twitterDescription:
      'OpenClientレビュー:自分のOllamaまたはLiteLLMサーバーが必要な、無料のオープンソースAppleチャットクライアント。情報源が確認していること、データの扱い、未検証の点。',
    audience:
      '自分のOllamaまたはLiteLLMサーバーを運用中、または運用予定のAppleユーザーで、このネイティブクライアントができること、必要なもの、情報源が確認していない点を知りたい方。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'OpenClient レビュー',
    targetKeywords: [
      'openclient レビュー',
      'openclient llm',
      'ollama クライアント iphone',
      'litellm クライアント ios',
      'ollama ネイティブアプリ mac',
      'openai互換 チャットアプリ iphone',
      'openclient vs enchanted',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**OpenClientは、ご自身で運用するOllama、LiteLLM、またはOpenAI互換サーバーに接続する、iPhone・iPad・Mac向けの無料オープンソースのチャットアプリです。独自のモデルは持たないため、そのサーバーがなければ何もできません。**',
    quickAnswerTop: {
      ja: {
        question: 'OpenClientを使うには何が必要ですか?',
        answer:
          '接続先のサーバーと、OSのバージョン26を搭載したAppleデバイスが必要です。アプリは無料で、AIはサーバーが動いている場所で実行されます。この構成の速度とプライバシーは、ここでは検証していません。',
        bullets: [
          'iPhone・iPad・Mac向けに[App Store](https://apps.apple.com/us/app/id6761379499)で無料。',
          'Ollama、LiteLLM、OpenAI互換APIに従うその他のサーバーに対応。',
          'iOS、iPadOS、macOSのいずれも26以降が必要。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'OpenClientとは?', anchor: 'what-is-openclient' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
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
            text: 'OpenClientは、モデルを自分では実行せず、ご自身で運用するOllama、LiteLLM、またはOpenAI互換サーバーに接続する、Apple向けのオープンソースのチャットクライアントです。',
          },
          {
            type: 'plain-terms',
            text: '他のアプリと同じようにインストールし、設定でサーバーのアドレスを入力して、そのサーバーが一覧に出すモデルと会話します。その後メッセージがどう扱われるかは、サーバーと、サーバーが転送するクラウド事業者によって決まります。',
          },
        ],
        items: [
          '開発者:独立開発者のArturo Carretero Calvo氏。リポジトリは2026年3月29日、App Storeでの公開は2026年4月8日です。',
          'ライセンス:GNU AGPL v3.0で、ソースコードはすべてGitHubで公開されています。',
          '更新ペース:GitHubのリリースページには2026年10月2日、14日、22日のmacOSビルドがあり、活発に更新されています。',
          '言語:インターフェースは英語、ドイツ語、フランス語、スペイン語、ポルトガル語(ポルトガル)、日本語を含む10言語で、中国語・アラビア語・韓国語は記載がありません。',
        ],
      },
      overview: {
        id: 'what-is-openclient',
        title: 'OpenClientとは?',
        content: [
          '**OpenClientはチャットの画面であり、AIエンジンではありません。入力したアドレスのサーバーにメッセージを送り、返信を表示します。** 開発者はこれを「your server, your models, your choice」を掲げるApple向けのプライベートAIチャットと説明しており、LiteLLMプロキシ、Ollama、OpenAI互換APIに従うその他のサーバーに対応します。',
          'App Storeでの名称は「OpenClient: Private AI Chat」、販売元はArturo Carretero Calvo氏で、同氏はソースコードもGitHubで公開しています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**OpenClientは、App Storeまたは署名済みのMac用ダウンロードから、ターミナルなしで他のAppleアプリと同じようにインストールできますが、接続先となる別のサーバーが必要です。** 先にOllamaまたはLiteLLMプロキシを用意し、そのアドレスをアプリの設定に入力してください。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'iPhoneとiPad',
            '入手先': '[App Store](https://apps.apple.com/us/app/id6761379499)(無料、iOSまたはiPadOS 26以降)',
          },
          {
            'プラットフォーム': 'Mac',
            '入手先': '[App Store](https://apps.apple.com/us/app/id6761379499)または署名済みの[.dmgダウンロード](https://github.com/artcc/openclient-llm/releases)(macOS 26以降)',
          },
          {
            'プラットフォーム': 'ベータ版',
            '入手先': '[TestFlight](https://testflight.apple.com/join/MDxfUnGc)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[arturocarreterocalvo.com/openclient-llm](https://www.arturocarreterocalvo.com/openclient-llm/)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[プライバシーポリシー](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html)(2026年7月15日付)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[GitHub](https://github.com/artcc/openclient-llm)(AGPL v3.0)',
          },
        ],
        note: '確認したバージョン:1.7.30。App Storeでは2026年10月23日更新と表示されています(対応するGitHubのリリースは10月22日付)。確認したストアではApp Storeの価格は無料で、プライバシーポリシーにはAppleを通じた任意の購入にも言及があります。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべて、開発者のページ、README、App Storeの説明に基づいています。**',
        ],
        items: [
          '**チャット。** Markdown形式のストリーミング返信、推論モデル向けの折りたたみ式「Thinking」ブロック、会話ごとのシステムプロンプトとパラメータ、サーバーが使用量データを返す場合のトークン数とコストの目安。',
          '**添付とメディア。** マルチモーダルモデル向けの写真、カメラ撮影、PDF。サーバー上の対応モデルによる画像生成。音声入力と読み上げ。',
          '**ツール。** 関数呼び出しに対応するモデル向けのエージェントループ、サーバー経由のWeb検索、LiteLLMバックエンドが公開するMCPツール。',
          '**会話。** 検索・ピン留め・タグ付きの履歴、任意のメッセージからの分岐、セッション限定のプライベートチャット、JSONでのバックアップとエクスポート、任意のiCloud同期。',
          '**Appleとの連携。** 共有シート、ショートカットとSiriのアクション、コントロールセンターのスイッチ、ウィジェット、Macではメニューバーのコンパニオン。',
          '**メモリとテンプレート。** 自分で保存する、またはモデルに保存させるメモ、ユーザープロフィール、再利用できるシステムプロンプトのテンプレート。',
        ],
        note: 'これらの機能はいずれもこのレビューのために試していません。また、一部はサーバーが対応しているかどうかに左右されます。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**プライバシーポリシーによると、OpenClientには会話、分析、テレメトリ、クラッシュレポートのための開発者運営のバックエンドがなく、メッセージは設定したサーバーのアドレスにのみ送信されます。** サーバーURLとAPIキーは端末のキーチェーンに保存され、会話は端末内に、同期をオンにした場合はご自身のiCloudアカウントに保存されます。',
          'ポリシーが挙げる例外は次のとおりです。サーバーがクラウドのモデルや検索事業者に転送する内容、音声入力にAppleの音声認識を選んだ場合(Appleは端末内で実行されることを保証していません)、Appleが処理する購入、そしてVoticeを使った任意のフィードバックボード。フィードバックボードでは、ランダムで永続的な端末識別子と、プラットフォーム、言語、アプリのバージョンなどの技術データが送信されることがあります。ポリシーは2026年7月15日付です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ソースコードは公開されているためデータの扱いは確認できますが、PromptQuorumはコードを読んでおらず、ネットワーク通信も監視していません。サーバーがクラウド事業者に転送する場合、そのメッセージにはその事業者のポリシーが適用されます。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**すでにOllamaやLiteLLMを運用しているAppleユーザー**で、iPhone・iPad・Mac用のネイティブな画面がほしい人。',
          '**ソースコードを読みたい人。** プロンプトを扱うチャットアプリの中身を確認できます。',
          '**LiteLLMユーザー**で、MCPツールとコスト情報をモバイルクライアントで使いたい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の使い心地。** ストリーミング速度、バッテリー消費、モバイル回線での安定性、回答の質は試していません。',
          '**サーバーとの互換性。** READMEによると基本のチャットにはモデル一覧とチャット補完だけが必要ですが、特定のサーバーがすべての機能に対応するかは確認していません。',
          '**リモート接続の安全性。** サーバーの公開方法と保護はアプリの範囲外であり、評価していません。',
          '**長期的なサポート。** GitHubの貢献者は1人のみで、ロードマップやサポートの約束は情報源に記載がありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格 / ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Enchanted](/ja/power-local-llm/enchanted-review)',
            'プラットフォーム': 'iOS、macOS',
            '価格 / ライセンス': '無料 / Apache 2.0',
            '主な違い': 'Ollama専用の最小限のAppleクライアント',
          },
          {
            'アプリ': '[Msty](/ja/power-local-llm/msty-review)',
            'プラットフォーム': 'Windows、macOS、Linux',
            '価格 / ライセンス': 'フリーミアム / クローズドソース',
            '主な違い': 'ローカルとクラウドのモデル向けデスクトップチャット',
          },
          {
            'アプリ': '[LibreChat](/ja/power-local-llm/librechat-review-2026)',
            'プラットフォーム': 'Web(セルフホスト)',
            '価格 / ライセンス': '無料 / MIT',
            '主な違い': 'チーム機能付きのセルフホスト型マルチモデルチャット',
          },
        ],
        note: '競合の情報は頻繁に変わります。各アプリの最新の価格、ライセンス、対応プラットフォームは、それぞれの掲載ページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'クラウドのAPIキーだけでOpenClientを使えますか?',
            a: 'READMEによると、モデル一覧とチャット補完をOpenAI互換の形式で提供するサーバーであれば動作します。特定のクラウド事業者のエンドポイントが該当するかは検証していません。',
          },
          {
            q: 'WindowsやAndroid版はありますか?',
            a: 'ありません。開発者のページに記載があるのはiOS、iPadOS、macOSのみで、アプリはSwiftとSwiftUIで書かれています。',
          },
          {
            q: '設定にはどのアドレスを入力しますか?',
            a: 'LiteLLMの場合は、ポート4000のプロキシのアドレスです。Ollamaに直接接続する場合は、ポート11434のアドレスに/v1パスを含めます。アプリはAPIパスを追加するだけで、/v1を足したり削ったりしないためです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'OpenClientは、すでにOllamaやLiteLLMのサーバーを運用していて、iPhone・iPad・Mac向けの無料のオープンソースのネイティブクライアントがほしい人に向いています。スマートフォン上でモデルを動かすアプリを期待する人には向きません。情報源からは、機能が豊富で頻繁に更新されているプロジェクトであることがわかりますが、速度、安定性、プライバシーに関する記述は、ここでは検証していません。Ollamaだけを使うなら[Enchanted](/ja/power-local-llm/enchanted-review)、ローカルとクラウドのモデルを扱うデスクトップアプリなら[Msty](/ja/power-local-llm/msty-review)と比較してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのOpenClient](https://apps.apple.com/us/app/id6761379499) — バージョン、更新日、価格、対応デバイス、説明。2026年10月24日確認。',
          '[OpenClientのウェブサイト](https://www.arturocarreterocalvo.com/openclient-llm/) — 開発者の製品ページ:機能、セットアップ、ダウンロードリンク。',
          '[OpenClientのプライバシーポリシー](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) — データの扱い、第三者サービス、権限。2026年7月15日改訂。',
          '[GitHubのartcc/openclient-llm](https://github.com/artcc/openclient-llm) — README、AGPL v3.0ライセンス、リリース履歴、貢献者一覧。2026年10月24日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Enchantedレビュー](/ja/power-local-llm/enchanted-review) — Ollama向けの最小限のmacOS・iOSクライアント。',
          '[Mstyレビュー](/ja/power-local-llm/msty-review) — ローカルとクラウドのモデル向けのクロスプラットフォームのチャットアプリ。',
          '[LibreChatレビュー](/ja/power-local-llm/librechat-review-2026) — セルフホスト型のマルチモデルチャット画面。',
          '[2026年版 iPhone向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより広い比較。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — OpenClientの掲載を含む全カタログ。',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/openclient-review-hero-pt.webp',
    title: 'Análise do OpenClient: app de chat gratuito da Apple para Ollama e LiteLLM',
    seoTitle: 'Análise do OpenClient: chat para Ollama e LiteLLM',
    intro:
      'O OpenClient é um app de chat gratuito e de código aberto para iPhone, iPad e Mac, de Arturo Carretero Calvo, um desenvolvedor independente. Ele não traz nenhum modelo de IA próprio: você o conecta a um servidor Ollama, LiteLLM ou outro compatível com OpenAI que você mesmo opera, e ele conversa com os modelos que esse servidor oferece. Esta análise reflete o site e a política de privacidade do desenvolvedor, o repositório do GitHub e a página da App Store, verificados em 24 de outubro de 2026.',
    metaDescription:
      'Análise do OpenClient: app de chat gratuito sob licença AGPL para iPhone, iPad e Mac que usa o seu servidor Ollama, LiteLLM ou compatível com OpenAI.',
    twitterDescription:
      'Análise do OpenClient: um cliente de chat da Apple gratuito e de código aberto que exige o seu próprio servidor Ollama ou LiteLLM. O que as fontes confirmam, como trata os dados e o que não foi testado.',
    audience:
      'Usuários da Apple que operam, ou pretendem operar, o próprio servidor Ollama ou LiteLLM e querem saber o que este cliente nativo faz, o que ele exige e o que as fontes não confirmam.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do OpenClient',
    targetKeywords: [
      'análise openclient',
      'openclient llm',
      'cliente ollama iphone',
      'cliente litellm ios',
      'app nativo ollama mac',
      'app de chat iphone compatível com openai',
      'openclient vs enchanted',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**O OpenClient é um app de chat gratuito e de código aberto para iPhone, iPad e Mac que se conecta a um servidor Ollama, LiteLLM ou compatível com OpenAI que você opera — ele não tem modelo próprio, então não faz nada sem esse servidor.**',
    quickAnswerTop: {
      pt: {
        question: 'O que preciso para usar o OpenClient?',
        answer:
          'De um servidor com o qual ele possa se comunicar e de um dispositivo Apple com a versão 26 do sistema operacional. O app é gratuito; a IA roda onde o seu servidor roda. A velocidade e a privacidade dessa configuração não foram testadas aqui.',
        bullets: [
          'Grátis na [App Store](https://apps.apple.com/us/app/id6761379499) para iPhone, iPad e Mac.',
          'Funciona com Ollama, LiteLLM e outros servidores que seguem a API compatível com OpenAI.',
          'Exige iOS, iPadOS ou macOS 26 ou posterior.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o OpenClient?', anchor: 'what-is-openclient' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e uso da rede', anchor: 'privacy' },
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
            text: 'O OpenClient é um cliente de chat de código aberto para plataformas Apple que se conecta ao servidor Ollama, LiteLLM ou compatível com OpenAI que você opera, em vez de executar um modelo por conta própria.',
          },
          {
            type: 'plain-terms',
            text: 'Você o instala como qualquer app, digita o endereço do seu servidor nos Ajustes e conversa com os modelos que esse servidor lista. O que acontece depois com as suas mensagens depende do seu servidor e de qualquer provedor de nuvem para o qual ele as encaminhe.',
          },
        ],
        items: [
          'Desenvolvedor: Arturo Carretero Calvo, um desenvolvedor independente; o repositório é de 29 de março de 2026 e o lançamento na App Store, de 8 de abril de 2026.',
          'Licença: GNU AGPL v3.0, com todo o código-fonte público no GitHub.',
          'Ritmo: a página de versões do GitHub mostra builds para macOS de 2, 14 e 22 de outubro de 2026, então o projeto é atualizado ativamente.',
          'Idiomas: a interface está disponível em dez idiomas, incluindo inglês, alemão, francês, espanhol, português (Portugal) e japonês; não há interface em chinês, árabe ou coreano na lista.',
        ],
      },
      overview: {
        id: 'what-is-openclient',
        title: 'O que é o OpenClient?',
        content: [
          '**O OpenClient é uma interface de chat, não um motor de IA: ele envia as suas mensagens ao servidor cujo endereço você digita e exibe as respostas.** O desenvolvedor o descreve como um chat de IA privado para plataformas Apple, baseado em "your server, your models, your choice", com suporte a proxies LiteLLM, Ollama e outros servidores que seguem a API compatível com OpenAI.',
          'O título na App Store é "OpenClient: Private AI Chat" e o vendedor é Arturo Carretero Calvo, que também publica o código-fonte no GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O OpenClient é instalado como qualquer app da Apple — pela App Store ou por um download assinado para Mac, sem terminal —, mas precisa de um servidor separado com o qual se comunicar.** Configure primeiro o Ollama ou um proxy LiteLLM e depois digite o endereço dele nos Ajustes do app.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'iPhone e iPad',
            'Onde obter': '[App Store](https://apps.apple.com/us/app/id6761379499) (grátis, iOS ou iPadOS 26 ou posterior)',
          },
          {
            'Plataforma': 'Mac',
            'Onde obter': '[App Store](https://apps.apple.com/us/app/id6761379499) ou o [download .dmg](https://github.com/artcc/openclient-llm/releases) assinado (macOS 26 ou posterior)',
          },
          {
            'Plataforma': 'Beta',
            'Onde obter': '[TestFlight](https://testflight.apple.com/join/MDxfUnGc)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[arturocarreterocalvo.com/openclient-llm](https://www.arturocarreterocalvo.com/openclient-llm/)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Política de privacidade](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) (de 15 de julho de 2026)',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde obter': '[GitHub](https://github.com/artcc/openclient-llm) (AGPL v3.0)',
          },
        ],
        note: 'Versão analisada: 1.7.30, exibida na App Store como atualizada em 23 de outubro de 2026 (a versão correspondente no GitHub é de 22 de outubro). O preço na App Store é gratuito nas lojas consultadas; a política de privacidade também menciona compras voluntárias pela Apple.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da página do desenvolvedor, do README ou da descrição da App Store.**',
        ],
        items: [
          '**Chat.** Respostas em Markdown com streaming, um bloco "Thinking" recolhível para modelos de raciocínio, prompt de sistema e parâmetros por conversa, e estimativas de tokens e custo quando o servidor devolve dados de uso.',
          '**Anexos e mídia.** Fotos, capturas da câmera e PDFs para modelos multimodais; geração de imagens com modelos compatíveis no seu servidor; ditado por voz e leitura em voz alta.',
          '**Ferramentas.** Um ciclo de agente para modelos com chamada de funções, busca na web pelo seu servidor e ferramentas MCP expostas por um backend LiteLLM.',
          '**Conversas.** Histórico com busca, fixação e tags, ramificação a partir de qualquer mensagem, um chat privado só da sessão, backup e exportação em JSON e sincronização opcional com o iCloud.',
          '**Integração com a Apple.** Folha de compartilhamento, ações de Atalhos e Siri, um controle na Central de Controle, widgets e, no Mac, um acompanhante na barra de menus.',
          '**Memória e modelos.** Notas que você salva ou deixa o modelo salvar, um perfil de usuário e modelos reutilizáveis de prompt de sistema.',
        ],
        note: 'Nenhum desses recursos foi testado para esta análise, e vários dependem do que o seu servidor suporta.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**Segundo a política de privacidade, o OpenClient não tem backend operado pelo desenvolvedor para conversas, análises, telemetria ou relatórios de falhas, e envia as suas mensagens apenas ao endereço de servidor que você configura.** A URL do servidor e as chaves de API ficam no chaveiro do dispositivo, e as conversas ficam no dispositivo ou, se você ativar a sincronização, na sua própria conta do iCloud.',
          'A política cita as exceções: tudo o que o seu servidor encaminha a provedores de modelos ou de busca na nuvem; o reconhecimento de fala da Apple, se você o escolher para o ditado (a Apple não garante que ele rode no dispositivo); compras processadas pela Apple; e o quadro de feedback opcional baseado no Votice, que pode enviar um identificador aleatório e persistente do dispositivo e dados técnicos como plataforma, idioma e versão do app. A política é datada de 15 de julho de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O código-fonte é público, então o tratamento de dados pode ser inspecionado, mas a PromptQuorum não leu o código nem monitorou o tráfego de rede. Se o seu servidor encaminha a um provedor de nuvem, a política desse provedor se aplica às suas mensagens.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Usuários da Apple que já operam Ollama ou LiteLLM** e querem uma interface nativa para iPhone, iPad e Mac.',
          '**Quem quer ler o código-fonte** do app de chat que lida com os seus prompts.',
          '**Usuários de LiteLLM** que querem ferramentas MCP e dados de custo em um cliente móvel.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade no uso real.** Velocidade de streaming, consumo de bateria, confiabilidade em redes móveis e qualidade das respostas não foram testados.',
          '**Compatibilidade com servidores.** Segundo o README, o chat básico precisa apenas da lista de modelos e de chat completions; não foi verificado se um servidor específico suporta todos os recursos.',
          '**Segurança do acesso remoto.** Como você expõe e protege o seu servidor está fora do app e não foi avaliado.',
          '**Suporte a longo prazo.** O GitHub lista um único colaborador, e as fontes não indicam roteiro nem compromisso de suporte.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            'App': '[Enchanted](/pt/power-local-llm/enchanted-review)',
            'Plataformas': 'iOS, macOS',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Cliente Apple mínimo só para Ollama',
          },
          {
            'App': '[Msty](/pt/power-local-llm/msty-review)',
            'Plataformas': 'Windows, macOS, Linux',
            'Preço / licença': 'Freemium / código fechado',
            'Diferença principal': 'App de chat para desktop com modelos locais e na nuvem',
          },
          {
            'App': '[LibreChat](/pt/power-local-llm/librechat-review-2026)',
            'Plataformas': 'Web (auto-hospedado)',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Chat multimodelo auto-hospedado com recursos de equipe',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme o preço, a licença e as plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar o OpenClient só com uma chave de API na nuvem?',
            a: 'O README diz que ele funciona com qualquer servidor que implemente a lista de modelos e chat completions no formato compatível com OpenAI. Não foi testado se o endpoint de um provedor de nuvem específico atende a esse requisito.',
          },
          {
            q: 'Existe versão para Windows ou Android?',
            a: 'Não. A página do desenvolvedor lista apenas iOS, iPadOS e macOS, e o app é escrito em Swift com SwiftUI.',
          },
          {
            q: 'Que endereço digito nos Ajustes?',
            a: 'Para o LiteLLM, o endereço do seu proxy na porta 4000. Para o Ollama diretamente, o endereço dele na porta 11434 com o caminho /v1, porque o app acrescenta os caminhos da API sem adicionar nem remover /v1.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O OpenClient serve para quem já opera um servidor Ollama ou LiteLLM e quer um cliente nativo, gratuito e de código aberto para iPhone, iPad e Mac; é a escolha errada para quem espera um app que execute um modelo no celular. As fontes mostram um projeto rico em recursos e atualizado com frequência, mas velocidade, confiabilidade e as afirmações de privacidade não foram testadas aqui. Compare o [Enchanted](/pt/power-local-llm/enchanted-review) se você usa apenas Ollama, ou o [Msty](/pt/power-local-llm/msty-review) para um app de desktop que cobre modelos locais e na nuvem.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[OpenClient na App Store](https://apps.apple.com/us/app/id6761379499) — versão, data de atualização, preço, dispositivos compatíveis e descrição, verificados em 24 de outubro de 2026.',
          '[Site do OpenClient](https://www.arturocarreterocalvo.com/openclient-llm/) — a página do produto do desenvolvedor: recursos, configuração e links de download.',
          '[Política de privacidade do OpenClient](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) — tratamento de dados, serviços de terceiros e permissões; revisão de 15 de julho de 2026.',
          '[artcc/openclient-llm no GitHub](https://github.com/artcc/openclient-llm) — README, licença AGPL v3.0, histórico de versões e lista de colaboradores, verificados em 24 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Enchanted](/pt/power-local-llm/enchanted-review) — um cliente mínimo de macOS e iOS para Ollama.',
          '[Análise do Msty](/pt/power-local-llm/msty-review) — um app de chat multiplataforma para modelos locais e na nuvem.',
          '[Análise do LibreChat](/pt/power-local-llm/librechat-review-2026) — uma interface de chat multimodelo auto-hospedada.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo, com a página do OpenClient.',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/openclient-review-hero-ar.webp',
    title: 'مراجعة OpenClient: تطبيق دردشة مجاني من Apple لـ Ollama وLiteLLM',
    seoTitle: 'مراجعة OpenClient: دردشة مجانية لـ Ollama وLiteLLM',
    intro:
      'OpenClient تطبيق دردشة مجاني ومفتوح المصدر لأجهزة iPhone وiPad وMac من أرتورو كاريتيرو كالفو، وهو مطوّر مستقل. لا يتضمن أي نموذج ذكاء اصطناعي خاص به: توصله بخادم Ollama أو LiteLLM أو أي خادم آخر متوافق مع OpenAI تديره بنفسك، فيتحدث مع النماذج التي يوفرها ذلك الخادم. تعكس هذه المراجعة موقع المطوّر وسياسة الخصوصية ومستودع GitHub وصفحة App Store، وقد جرى التحقق منها في 24 أكتوبر 2026.',
    metaDescription:
      'مراجعة OpenClient: تطبيق دردشة مجاني بترخيص AGPL لأجهزة iPhone وiPad وMac يستخدم خادم Ollama أو LiteLLM أو خادمًا متوافقًا مع OpenAI تديره بنفسك.',
    twitterDescription:
      'مراجعة OpenClient: عميل دردشة مجاني ومفتوح المصدر من Apple يحتاج إلى خادم Ollama أو LiteLLM خاص بك. ما تؤكده المصادر وكيف يتعامل مع البيانات وما لم يُختبر.',
    audience:
      'مستخدمو Apple الذين يديرون أو ينوون إدارة خادم Ollama أو LiteLLM خاص بهم، ويريدون معرفة ما يفعله هذا العميل الأصلي وما يحتاجه وما لا تؤكده المصادر.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة OpenClient',
    targetKeywords: [
      'مراجعة openclient',
      'openclient llm',
      'عميل ollama لـ iphone',
      'عميل litellm لـ ios',
      'تطبيق ollama أصلي لـ mac',
      'تطبيق دردشة متوافق مع openai على iphone',
      'openclient vs enchanted',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**OpenClient تطبيق دردشة مجاني ومفتوح المصدر لأجهزة iPhone وiPad وMac، يتصل بخادم Ollama أو LiteLLM أو خادم متوافق مع OpenAI تديره بنفسك — ليس له نموذج خاص، لذلك لا يفعل شيئًا من دون ذلك الخادم.**',
    quickAnswerTop: {
      ar: {
        question: 'ماذا أحتاج لاستخدام OpenClient؟',
        answer:
          'خادمًا يستطيع التطبيق التواصل معه، وجهاز Apple يعمل بالإصدار 26 من نظام التشغيل. التطبيق مجاني، ويعمل الذكاء الاصطناعي حيث يعمل خادمك. لم تُختبر هنا سرعة هذا الإعداد ولا خصوصيته.',
        bullets: [
          'مجاني على [App Store](https://apps.apple.com/us/app/id6761379499) لأجهزة iPhone وiPad وMac.',
          'يعمل مع Ollama وLiteLLM وخوادم أخرى تتبع واجهة API المتوافقة مع OpenAI.',
          'يتطلب iOS أو iPadOS أو macOS بالإصدار 26 أو أحدث.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو OpenClient؟', anchor: 'what-is-openclient' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
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
            text: 'OpenClient عميل دردشة مفتوح المصدر لمنصات Apple يتصل بخادم Ollama أو LiteLLM أو خادم متوافق مع OpenAI تديره بنفسك، بدلًا من تشغيل نموذج بنفسه.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته كأي تطبيق، وتُدخل عنوان خادمك في الإعدادات، ثم تتحدث مع النماذج التي يعرضها ذلك الخادم. ما يحدث لرسائلك بعد ذلك يعتمد على خادمك وعلى أي مزوّد سحابي يحوّل إليه الرسائل.',
          },
        ],
        items: [
          'المطوّر: أرتورو كاريتيرو كالفو، وهو مطوّر مستقل؛ أُنشئ المستودع في 29 مارس 2026 وصدر التطبيق على App Store في 8 أبريل 2026.',
          'الترخيص: GNU AGPL v3.0، مع إتاحة الشيفرة المصدرية كاملة على GitHub.',
          'وتيرة التحديث: تعرض صفحة الإصدارات على GitHub نسخًا لنظام macOS في 2 و14 و22 أكتوبر 2026، فالمشروع يُحدَّث بنشاط.',
          'اللغات: الواجهة متاحة بعشر لغات، منها الإنجليزية والألمانية والفرنسية والإسبانية والبرتغالية (البرتغال) واليابانية؛ ولا تُذكر واجهة بالصينية أو العربية أو الكورية.',
        ],
      },
      overview: {
        id: 'what-is-openclient',
        title: 'ما هو OpenClient؟',
        content: [
          '**OpenClient واجهة دردشة وليس محرك ذكاء اصطناعي: يرسل رسائلك إلى الخادم الذي تُدخل عنوانه ويعرض الردود.** يصفه المطوّر بأنه دردشة ذكاء اصطناعي خاصة لمنصات Apple تقوم على مبدأ "your server, your models, your choice"، مع دعم وكلاء LiteLLM وOllama وخوادم أخرى تتبع واجهة API المتوافقة مع OpenAI.',
          'عنوانه على App Store هو "OpenClient: Private AI Chat" والبائع هو Arturo Carretero Calvo، الذي ينشر الشيفرة المصدرية أيضًا على GitHub.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت OpenClient كأي تطبيق من Apple — من App Store أو بتنزيل موقّع لنظام Mac، دون الحاجة إلى الطرفية — لكنه يحتاج إلى خادم منفصل يتواصل معه.** جهّز Ollama أو وكيل LiteLLM أولًا، ثم أدخل عنوانه في إعدادات التطبيق.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'iPhone وiPad',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/id6761379499) (مجاني، iOS أو iPadOS بالإصدار 26 أو أحدث)',
          },
          {
            'المنصة': 'Mac',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/id6761379499) أو [تنزيل .dmg](https://github.com/artcc/openclient-llm/releases) الموقّع (macOS بالإصدار 26 أو أحدث)',
          },
          {
            'المنصة': 'النسخة التجريبية',
            'مكان الحصول عليه': '[TestFlight](https://testflight.apple.com/join/MDxfUnGc)',
          },
          {
            'المنصة': 'الموقع الإلكتروني',
            'مكان الحصول عليه': '[arturocarreterocalvo.com/openclient-llm](https://www.arturocarreterocalvo.com/openclient-llm/)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) (بتاريخ 15 يوليو 2026)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مكان الحصول عليه': '[GitHub](https://github.com/artcc/openclient-llm) (AGPL v3.0)',
          },
        ],
        note: 'الإصدار الذي روجع: 1.7.30، ويظهر على App Store بأنه حُدّث في 23 أكتوبر 2026 (وإصدار GitHub المطابق بتاريخ 22 أكتوبر). السعر على App Store مجاني في المتاجر التي جرى فحصها؛ وتذكر سياسة الخصوصية أيضًا مشتريات اختيارية عبر Apple.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مصدره صفحة المطوّر أو ملف README أو وصف App Store.**',
        ],
        items: [
          '**الدردشة.** ردود Markdown متدفقة، وكتلة "Thinking" قابلة للطي لنماذج الاستدلال، وموجّه نظام ومعلمات لكل محادثة، وتقديرات للرموز والتكلفة عندما يعيد الخادم بيانات الاستخدام.',
          '**المرفقات والوسائط.** صور ولقطات كاميرا وملفات PDF للنماذج متعددة الوسائط؛ وتوليد صور بنماذج متوافقة على خادمك؛ وإملاء صوتي وقراءة بصوت عالٍ.',
          '**الأدوات.** حلقة وكيل للنماذج التي تدعم استدعاء الدوال، وبحث على الويب عبر خادمك، وأدوات MCP التي يوفرها خادم LiteLLM.',
          '**المحادثات.** سجل مع بحث وتثبيت ووسوم، والتفرع من أي رسالة، ومحادثة خاصة تقتصر على الجلسة، ونسخ احتياطي وتصدير بصيغة JSON، ومزامنة اختيارية عبر iCloud.',
          '**التكامل مع Apple.** ورقة المشاركة، وإجراءات الاختصارات وSiri، ومفتاح في مركز التحكم، وودجات، وعلى Mac مساعد في شريط القوائم.',
          '**الذاكرة والقوالب.** ملاحظات تحفظها بنفسك أو تتيح للنموذج حفظها، وملف مستخدم، وقوالب موجّه نظام قابلة لإعادة الاستخدام.',
        ],
        note: 'لم تُختبر أي من هذه الميزات لأجل هذه المراجعة، ويعتمد بعضها على ما يدعمه خادمك.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**وفق سياسة الخصوصية، لا يملك OpenClient خادمًا خلفيًا يديره المطوّر للمحادثات أو التحليلات أو القياس عن بُعد أو تقارير الأعطال، ولا يرسل رسائلك إلا إلى عنوان الخادم الذي تضبطه.** يُحفظ عنوان الخادم ومفاتيح API في سلسلة مفاتيح الجهاز، وتبقى المحادثات على الجهاز أو، إذا فعّلت المزامنة، في حسابك الشخصي على iCloud.',
          'تذكر السياسة الاستثناءات: كل ما يحوّله خادمك إلى مزوّدي نماذج أو بحث سحابيين؛ وتمييز الكلام من Apple إذا اخترته للإملاء (لا تضمن Apple تشغيله على الجهاز)؛ والمشتريات التي تعالجها Apple؛ ولوحة الملاحظات الاختيارية المبنية على Votice، وقد ترسل معرّف جهاز عشوائيًا ودائمًا وبيانات تقنية مثل المنصة واللغة وإصدار التطبيق. السياسة بتاريخ 15 يوليو 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الشيفرة المصدرية متاحة للعموم، لذا يمكن فحص طريقة التعامل مع البيانات، لكن PromptQuorum لم تقرأ الشيفرة ولم ترصد حركة الشبكة. إذا كان خادمك يحوّل إلى مزوّد سحابي، فتنطبق سياسة ذلك المزوّد على رسائلك.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Apple الذين يشغّلون Ollama أو LiteLLM بالفعل** ويريدون واجهة أصلية لأجهزة iPhone وiPad وMac.',
          '**من يريدون قراءة الشيفرة المصدرية** لتطبيق الدردشة الذي يتعامل مع مطالباتهم.',
          '**مستخدمو LiteLLM** الذين يريدون أدوات MCP وبيانات التكلفة في عميل للجوال.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة في الاستخدام الفعلي.** لم تُختبر سرعة البث ولا استهلاك البطارية ولا الموثوقية على شبكات الجوال ولا جودة الإجابات.',
          '**توافق الخوادم.** يذكر README أن الدردشة الأساسية لا تحتاج إلا إلى قائمة النماذج وإكمال الدردشة؛ ولم يُتحقق مما إذا كان خادم معيّن يدعم كل الميزات.',
          '**أمان الوصول عن بُعد.** كيفية إتاحة خادمك وحمايته خارج نطاق التطبيق ولم تُقيَّم.',
          '**الدعم على المدى الطويل.** يُدرج GitHub مساهمًا واحدًا فقط، ولا تذكر المصادر خارطة طريق ولا التزامًا بالدعم.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Enchanted](/ar/power-local-llm/enchanted-review)',
            'المنصات': 'iOS وmacOS',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'عميل Apple بسيط لـ Ollama فقط',
          },
          {
            'التطبيق': '[Msty](/ar/power-local-llm/msty-review)',
            'المنصات': 'Windows وmacOS وLinux',
            'السعر / الترخيص': 'مجاني جزئيًا / مغلق المصدر',
            'الفرق الرئيسي': 'تطبيق دردشة لسطح المكتب للنماذج المحلية والسحابية',
          },
          {
            'التطبيق': '[LibreChat](/ar/power-local-llm/librechat-review-2026)',
            'المنصات': 'ويب (استضافة ذاتية)',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة متعددة النماذج بالاستضافة الذاتية مع ميزات للفرق',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكنني استخدام OpenClient بمفتاح API سحابي فقط؟',
            a: 'يذكر README أنه يعمل مع أي خادم يوفر قائمة النماذج وإكمال الدردشة بصيغة متوافقة مع OpenAI. ولم يُختبر ما إذا كانت نقطة النهاية لمزوّد سحابي معيّن تستوفي ذلك.',
          },
          {
            q: 'هل توجد نسخة لنظام Windows أو Android؟',
            a: 'لا. تذكر صفحة المطوّر iOS وiPadOS وmacOS فقط، والتطبيق مكتوب بلغة Swift مع SwiftUI.',
          },
          {
            q: 'ما العنوان الذي أُدخله في الإعدادات؟',
            a: 'في LiteLLM، عنوان الوكيل على المنفذ 4000. وفي Ollama مباشرةً، عنوانه على المنفذ 11434 مع المسار /v1، لأن التطبيق يُلحق مسارات API دون أن يضيف /v1 أو يزيله.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يناسب OpenClient من يشغّلون بالفعل خادم Ollama أو LiteLLM ويريدون عميلًا أصليًا ومجانيًا ومفتوح المصدر لأجهزة iPhone وiPad وMac؛ وهو الخيار الخطأ لمن يتوقع تطبيقًا يشغّل نموذجًا على الهاتف. تُظهر المصادر مشروعًا غنيًا بالميزات ويُحدَّث باستمرار، لكن السرعة والموثوقية وادعاءات الخصوصية لم تُختبر هنا. قارن [Enchanted](/ar/power-local-llm/enchanted-review) إذا كنت تستخدم Ollama فقط، أو [Msty](/ar/power-local-llm/msty-review) لتطبيق سطح مكتب يغطي النماذج المحلية والسحابية.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[OpenClient على App Store](https://apps.apple.com/us/app/id6761379499) — الإصدار وتاريخ التحديث والسعر والأجهزة المدعومة والوصف، جرى التحقق منها في 24 أكتوبر 2026.',
          '[موقع OpenClient](https://www.arturocarreterocalvo.com/openclient-llm/) — صفحة المنتج لدى المطوّر: الميزات والإعداد وروابط التنزيل.',
          '[سياسة خصوصية OpenClient](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) — معالجة البيانات والخدمات الخارجية والأذونات؛ المراجعة بتاريخ 15 يوليو 2026.',
          '[artcc/openclient-llm على GitHub](https://github.com/artcc/openclient-llm) — README وترخيص AGPL v3.0 وسجل الإصدارات وقائمة المساهمين، جرى التحقق منها في 24 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Enchanted](/ar/power-local-llm/enchanted-review) — عميل بسيط لنظامي macOS وiOS لـ Ollama.',
          '[مراجعة Msty](/ar/power-local-llm/msty-review) — تطبيق دردشة متعدد المنصات للنماذج المحلية والسحابية.',
          '[مراجعة LibreChat](/ar/power-local-llm/librechat-review-2026) — واجهة دردشة متعددة النماذج بالاستضافة الذاتية.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — نظرة أوسع على تطبيقات iPhone.',
          '[دليل برامج النماذج اللغوية المحلية](/ar/directory) — الفهرس الكامل، ويشمل صفحة OpenClient.',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/openclient-review-hero-zh.webp',
    title: 'OpenClient 评测：适用于 Ollama 和 LiteLLM 的免费 Apple 聊天应用',
    seoTitle: 'OpenClient 评测：Ollama 与 LiteLLM 免费聊天应用',
    intro:
      'OpenClient 是独立开发者 Arturo Carretero Calvo 推出的免费开源聊天应用，支持 iPhone、iPad 和 Mac。它本身不含任何 AI 模型：你需要把它连接到自己运行的 Ollama、LiteLLM 或其他兼容 OpenAI 的服务器，再与该服务器提供的模型对话。本评测依据开发者的网站和隐私政策、GitHub 仓库以及 App Store 页面，核查日期为 2026 年 10 月 24 日。',
    metaDescription:
      'OpenClient 评测：采用 AGPL 许可证的免费 iPhone、iPad 和 Mac 聊天应用，连接你自己的 Ollama、LiteLLM 或兼容 OpenAI 的服务器。功能、隐私与局限。',
    twitterDescription:
      'OpenClient 评测：一款免费开源的 Apple 聊天客户端，需要你自己的 Ollama 或 LiteLLM 服务器。来源确认了什么、如何处理数据，以及哪些内容未经测试。',
    audience:
      '已经运行或打算运行自己的 Ollama 或 LiteLLM 服务器的 Apple 用户，想了解这款原生客户端能做什么、需要什么，以及来源没有确认哪些内容。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'OpenClient 评测',
    targetKeywords: [
      'openclient 评测',
      'openclient llm',
      'ollama 客户端 iphone',
      'litellm 客户端 ios',
      'ollama 原生应用 mac',
      '兼容 openai 的聊天应用 iphone',
      'openclient vs enchanted',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**OpenClient 是一款免费开源的 iPhone、iPad 和 Mac 聊天应用，可连接你自己运行的 Ollama、LiteLLM 或兼容 OpenAI 的服务器——它没有自带模型，没有这台服务器就什么也做不了。**',
    quickAnswerTop: {
      zh: {
        question: '使用 OpenClient 需要准备什么？',
        answer:
          '需要一台它能连接的服务器，以及运行系统版本 26 的 Apple 设备。应用本身免费；AI 在你的服务器所在的位置运行。这种配置的速度和隐私在此未经测试。',
        bullets: [
          '在 [App Store](https://apps.apple.com/us/app/id6761379499) 免费提供，支持 iPhone、iPad 和 Mac。',
          '可配合 Ollama、LiteLLM 以及其他遵循兼容 OpenAI 接口的服务器使用。',
          '需要 iOS、iPadOS 或 macOS 26 及以上版本。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'OpenClient 是什么？', anchor: 'what-is-openclient' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: '隐私与网络使用', anchor: 'privacy' },
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
            text: 'OpenClient 是一款面向 Apple 平台的开源聊天客户端，它连接你自己运行的 Ollama、LiteLLM 或兼容 OpenAI 的服务器，而不是自己运行模型。',
          },
          {
            type: 'plain-terms',
            text: '你像安装其他应用一样安装它，在设置中填入服务器地址，然后与该服务器列出的模型对话。此后你的消息会如何处理，取决于你的服务器，以及它转发到的任何云服务商。',
          },
        ],
        items: [
          '开发者：独立开发者 Arturo Carretero Calvo；仓库创建于 2026 年 3 月 29 日，App Store 版本发布于 2026 年 4 月 8 日。',
          '许可证：GNU AGPL v3.0，完整源代码在 GitHub 公开。',
          '更新节奏：GitHub 发布页显示 2026 年 10 月 2 日、14 日和 22 日均有 macOS 版本，项目更新活跃。',
          '语言：界面提供十种语言，包括英语、德语、法语、西班牙语、葡萄牙语（葡萄牙）和日语；未列出中文、阿拉伯语或韩语界面。',
        ],
      },
      overview: {
        id: 'what-is-openclient',
        title: 'OpenClient 是什么？',
        content: [
          '**OpenClient 是聊天界面，而不是 AI 引擎：它把你的消息发送到你填写地址的服务器，并显示回复。** 开发者把它描述为面向 Apple 平台的私人 AI 聊天应用，主张“your server, your models, your choice”，支持 LiteLLM 代理、Ollama 以及其他遵循兼容 OpenAI 接口的服务器。',
          '它在 App Store 的标题是“OpenClient: Private AI Chat”，卖家为 Arturo Carretero Calvo，他同时在 GitHub 公开源代码。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**OpenClient 和其他 Apple 应用一样安装——通过 App Store 或已签名的 Mac 下载，无需终端——但它需要另一台服务器来连接。** 请先搭建 Ollama 或 LiteLLM 代理，再把其地址填入应用的设置。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'iPhone 和 iPad',
            '获取方式': '[App Store](https://apps.apple.com/us/app/id6761379499)（免费，iOS 或 iPadOS 26 及以上）',
          },
          {
            '平台': 'Mac',
            '获取方式': '[App Store](https://apps.apple.com/us/app/id6761379499) 或已签名的 [.dmg 下载](https://github.com/artcc/openclient-llm/releases)（macOS 26 及以上）',
          },
          {
            '平台': '测试版',
            '获取方式': '[TestFlight](https://testflight.apple.com/join/MDxfUnGc)',
          },
          {
            '平台': '官方网站',
            '获取方式': '[arturocarreterocalvo.com/openclient-llm](https://www.arturocarreterocalvo.com/openclient-llm/)',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[隐私政策](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html)（日期为 2026 年 7 月 15 日）',
          },
          {
            '平台': '源代码',
            '获取方式': '[GitHub](https://github.com/artcc/openclient-llm)（AGPL v3.0）',
          },
        ],
        note: '评测版本：1.7.30，App Store 显示更新于 2026 年 10 月 23 日（对应的 GitHub 发布日期为 10 月 22 日）。在已核查的商店区域，App Store 价格为免费；隐私政策还提到通过 Apple 进行的自愿购买。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项均来自开发者页面、README 或 App Store 描述。**',
        ],
        items: [
          '**聊天。** 流式 Markdown 回复、面向推理模型的可折叠“Thinking”区块、每个对话独立的系统提示词和参数，以及服务器返回用量数据时的 token 与费用估算。',
          '**附件与多媒体。** 为多模态模型提供照片、相机拍摄和 PDF；使用服务器上兼容模型生成图片；语音听写与朗读播放。',
          '**工具。** 面向支持函数调用的模型的代理循环、通过你的服务器进行的网页搜索，以及 LiteLLM 后端提供的 MCP 工具。',
          '**对话。** 带搜索、置顶和标签的历史记录、从任意消息分支、仅限当前会话的私密聊天、JSON 备份与导出，以及可选的 iCloud 同步。',
          '**Apple 集成。** 共享面板、快捷指令与 Siri 操作、控制中心开关、小组件，以及 Mac 上的菜单栏助手。',
          '**记忆与模板。** 你自己保存或让模型保存的笔记、用户资料，以及可复用的系统提示词模板。',
        ],
        note: '以上功能均未在本评测中测试，其中一些还取决于你的服务器支持什么。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**根据隐私政策，OpenClient 没有由开发者运营的后端来处理对话、分析、遥测或崩溃报告，只会把你的消息发送到你配置的服务器地址。** 服务器地址和 API 密钥保存在设备钥匙串中，对话保存在设备上，开启同步后则保存在你自己的 iCloud 账户中。',
          '政策列出了例外情况：你的服务器转发给云端模型或搜索服务商的内容；你选择用于听写的 Apple 语音识别（Apple 不保证其在设备上运行）；由 Apple 处理的购买；以及基于 Votice 的可选反馈板，它可能发送随机的持久设备标识符，以及平台、语言和应用版本等技术数据。该政策的日期为 2026 年 7 月 15 日。',
        ],
        callouts: [
          {
            type: 'note',
            text: '源代码是公开的，因此数据处理方式可以检查，但 PromptQuorum 没有阅读代码，也没有监测网络流量。如果你的服务器转发到云服务商，你的消息适用该服务商的政策。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**已经在运行 Ollama 或 LiteLLM 的 Apple 用户**，想要 iPhone、iPad 和 Mac 上的原生界面。',
          '**想阅读源代码的人**——处理你提示词的聊天应用，其代码可供查看。',
          '**LiteLLM 用户**，想在移动客户端中使用 MCP 工具和费用数据。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际使用质量。** 流式速度、耗电、移动网络下的稳定性和回答质量均未测试。',
          '**服务器兼容性。** README 称基础聊天只需要模型列表和聊天补全；某台服务器是否支持全部功能，未做检查。',
          '**远程访问的安全性。** 如何开放和保护你的服务器超出应用范围，未做评估。',
          '**长期维护。** GitHub 仅列出一位贡献者，来源中没有路线图或支持承诺。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': '[Enchanted](/zh/power-local-llm/enchanted-review)',
            '平台': 'iOS、macOS',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '仅支持 Ollama 的极简 Apple 客户端',
          },
          {
            '应用': '[Msty](/zh/power-local-llm/msty-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费增值 / 闭源',
            '主要区别': '面向本地和云端模型的桌面聊天应用',
          },
          {
            '应用': '[LibreChat](/zh/power-local-llm/librechat-review-2026)',
            '平台': 'Web（自托管）',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '带团队功能的自托管多模型聊天',
          },
        ],
        note: '竞品信息经常变化；请在各应用自己的页面确认当前的价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '只有云端 API 密钥也能使用 OpenClient 吗？',
            a: 'README 称，只要服务器以兼容 OpenAI 的格式提供模型列表和聊天补全即可使用。某个具体云服务商的端点是否符合，未经测试。',
          },
          {
            q: '有 Windows 或 Android 版本吗？',
            a: '没有。开发者页面只列出 iOS、iPadOS 和 macOS，应用使用 Swift 和 SwiftUI 编写。',
          },
          {
            q: '在设置里应该填写什么地址？',
            a: '使用 LiteLLM 时，填写代理在 4000 端口的地址。直接连接 Ollama 时，填写其 11434 端口的地址并带上 /v1 路径，因为应用只追加 API 路径，不会添加或去掉 /v1。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'OpenClient 适合已经运行 Ollama 或 LiteLLM 服务器、想要免费开源的 iPhone、iPad 和 Mac 原生客户端的人；如果你期待一款在手机上运行模型的应用，它就不合适。来源显示这是一个功能丰富、更新频繁的项目，但速度、稳定性和隐私方面的说法在此均未测试。如果你只用 Ollama，可对比 [Enchanted](/zh/power-local-llm/enchanted-review)；如果想要涵盖本地和云端模型的桌面应用，可对比 [Msty](/zh/power-local-llm/msty-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 OpenClient](https://apps.apple.com/us/app/id6761379499) — 版本、更新日期、价格、支持的设备和描述，核查于 2026 年 10 月 24 日。',
          '[OpenClient 网站](https://www.arturocarreterocalvo.com/openclient-llm/) — 开发者的产品页面：功能、设置和下载链接。',
          '[OpenClient 隐私政策](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) — 数据处理、第三方服务和权限；修订日期为 2026 年 7 月 15 日。',
          '[GitHub 上的 artcc/openclient-llm](https://github.com/artcc/openclient-llm) — README、AGPL v3.0 许可证、发布历史和贡献者列表，核查于 2026 年 10 月 24 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Enchanted 评测](/zh/power-local-llm/enchanted-review) — 面向 Ollama 的极简 macOS 和 iOS 客户端。',
          '[Msty 评测](/zh/power-local-llm/msty-review) — 面向本地和云端模型的跨平台聊天应用。',
          '[LibreChat 评测](/zh/power-local-llm/librechat-review-2026) — 自托管的多模型聊天界面。',
          '[2026 年最佳 iPhone 本地大模型应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更全面的 iPhone 应用盘点。',
          '[本地大模型软件目录](/zh/directory) — 完整目录，包含 OpenClient 的条目。',
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
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/openclient-review-hero-ko.webp',
    title: 'OpenClient 리뷰: Ollama·LiteLLM용 무료 Apple 채팅 앱',
    seoTitle: 'OpenClient 리뷰: Ollama·LiteLLM용 무료 채팅 앱',
    intro:
      'OpenClient는 독립 개발자 Arturo Carretero Calvo가 만든 iPhone·iPad·Mac용 무료 오픈소스 채팅 앱입니다. 자체 AI 모델은 들어 있지 않으며, 직접 운영하는 Ollama, LiteLLM 또는 OpenAI 호환 서버에 연결해 그 서버가 제공하는 모델과 대화합니다. 이 리뷰는 개발자의 웹사이트와 개인정보 처리방침, GitHub 저장소, App Store 게재 정보를 2026년 10월 24일에 확인한 내용을 바탕으로 합니다.',
    metaDescription:
      'OpenClient 리뷰: 직접 운영하는 Ollama, LiteLLM, OpenAI 호환 서버에 연결하는 AGPL 라이선스 무료 iPhone·iPad·Mac 채팅 앱. 기능, 개인정보, 한계.',
    twitterDescription:
      'OpenClient 리뷰: 직접 운영하는 Ollama 또는 LiteLLM 서버가 필요한 무료 오픈소스 Apple 채팅 클라이언트. 출처가 확인한 내용, 데이터 처리 방식, 검증하지 못한 부분.',
    audience:
      '직접 Ollama나 LiteLLM 서버를 운영 중이거나 운영할 계획인 Apple 사용자로, 이 네이티브 클라이언트가 무엇을 하는지, 무엇이 필요한지, 출처가 확인해 주지 않는 것이 무엇인지 알고 싶은 분.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'OpenClient 리뷰',
    targetKeywords: [
      'openclient 리뷰',
      'openclient llm',
      'ollama 클라이언트 iphone',
      'litellm 클라이언트 ios',
      'ollama 네이티브 앱 mac',
      'openai 호환 채팅 앱 iphone',
      'openclient vs enchanted',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**OpenClient는 직접 운영하는 Ollama, LiteLLM 또는 OpenAI 호환 서버에 연결하는 무료 오픈소스 iPhone·iPad·Mac 채팅 앱입니다. 자체 모델이 없으므로 그 서버 없이는 아무것도 하지 못합니다.**',
    quickAnswerTop: {
      ko: {
        question: 'OpenClient를 쓰려면 무엇이 필요합니까?',
        answer:
          '연결할 서버와 운영체제 버전 26을 쓰는 Apple 기기가 필요합니다. 앱은 무료이며, AI는 서버가 돌아가는 곳에서 실행됩니다. 이 구성의 속도와 개인정보 보호는 여기서 검증하지 않았습니다.',
        bullets: [
          'iPhone·iPad·Mac용으로 [App Store](https://apps.apple.com/us/app/id6761379499)에서 무료입니다.',
          'Ollama, LiteLLM 및 OpenAI 호환 API를 따르는 다른 서버와 함께 작동합니다.',
          'iOS, iPadOS, macOS 26 이상이 필요합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'OpenClient란 무엇인가?', anchor: 'what-is-openclient' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: '개인정보와 네트워크 사용', anchor: 'privacy' },
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
            text: 'OpenClient는 모델을 직접 실행하는 대신, 직접 운영하는 Ollama, LiteLLM 또는 OpenAI 호환 서버에 연결하는 Apple 플랫폼용 오픈소스 채팅 클라이언트입니다.',
          },
          {
            type: 'plain-terms',
            text: '다른 앱처럼 설치한 뒤 설정에 서버 주소를 입력하면, 그 서버가 목록으로 보여 주는 모델과 대화할 수 있습니다. 그 이후 메시지가 어떻게 처리되는지는 서버와, 서버가 메시지를 전달하는 클라우드 업체에 달려 있습니다.',
          },
        ],
        items: [
          '개발자: 독립 개발자 Arturo Carretero Calvo입니다. 저장소는 2026년 3월 29일, App Store 출시는 2026년 4월 8일입니다.',
          '라이선스: GNU AGPL v3.0이며, 전체 소스 코드가 GitHub에 공개되어 있습니다.',
          '업데이트 속도: GitHub 릴리스 페이지에 2026년 10월 2일, 14일, 22일의 macOS 빌드가 있어 활발히 업데이트되고 있습니다.',
          '언어: 인터페이스는 영어, 독일어, 프랑스어, 스페인어, 포르투갈어(포르투갈), 일본어 등 10개 언어로 제공되며, 중국어·아랍어·한국어 인터페이스는 목록에 없습니다.',
        ],
      },
      overview: {
        id: 'what-is-openclient',
        title: 'OpenClient란 무엇인가?',
        content: [
          '**OpenClient는 채팅 화면일 뿐 AI 엔진이 아닙니다. 입력한 주소의 서버로 메시지를 보내고 답변을 표시합니다.** 개발자는 이를 "your server, your models, your choice"를 내세우는 Apple 플랫폼용 비공개 AI 채팅 앱으로 소개하며, LiteLLM 프록시, Ollama 및 OpenAI 호환 API를 따르는 다른 서버를 지원합니다.',
          'App Store의 제목은 "OpenClient: Private AI Chat"이고 판매자는 Arturo Carretero Calvo이며, 같은 개발자가 소스 코드도 GitHub에 공개하고 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**OpenClient는 App Store나 서명된 Mac용 다운로드로, 터미널 없이 다른 Apple 앱처럼 설치합니다. 다만 연결할 별도의 서버가 필요합니다.** 먼저 Ollama나 LiteLLM 프록시를 준비한 뒤 그 주소를 앱 설정에 입력하십시오.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'iPhone·iPad',
            '받는 곳': '[App Store](https://apps.apple.com/us/app/id6761379499) (무료, iOS 또는 iPadOS 26 이상)',
          },
          {
            '플랫폼': 'Mac',
            '받는 곳': '[App Store](https://apps.apple.com/us/app/id6761379499) 또는 서명된 [.dmg 다운로드](https://github.com/artcc/openclient-llm/releases) (macOS 26 이상)',
          },
          {
            '플랫폼': '베타',
            '받는 곳': '[TestFlight](https://testflight.apple.com/join/MDxfUnGc)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[arturocarreterocalvo.com/openclient-llm](https://www.arturocarreterocalvo.com/openclient-llm/)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[개인정보 처리방침](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) (2026년 7월 15일자)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[GitHub](https://github.com/artcc/openclient-llm) (AGPL v3.0)',
          },
        ],
        note: '확인한 버전: 1.7.30으로, App Store에는 2026년 10월 23일 업데이트로 표시됩니다(대응하는 GitHub 릴리스는 10월 22일자). 확인한 스토어에서는 App Store 가격이 무료이며, 개인정보 처리방침에는 Apple을 통한 자발적 구매도 언급되어 있습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 개발자 페이지, README 또는 App Store 설명에서 나온 것입니다.**',
        ],
        items: [
          '**채팅.** Markdown 스트리밍 답변, 추론 모델용 접이식 "Thinking" 블록, 대화별 시스템 프롬프트와 매개변수, 서버가 사용량 데이터를 돌려줄 때의 토큰·비용 추정.',
          '**첨부와 미디어.** 멀티모달 모델용 사진, 카메라 촬영, PDF. 서버의 호환 모델로 이미지 생성. 음성 받아쓰기와 음성 읽기.',
          '**도구.** 함수 호출을 지원하는 모델을 위한 에이전트 루프, 서버를 통한 웹 검색, LiteLLM 백엔드가 제공하는 MCP 도구.',
          '**대화.** 검색·고정·태그가 있는 기록, 모든 메시지에서 분기, 세션 한정 비공개 채팅, JSON 백업과 내보내기, 선택형 iCloud 동기화.',
          '**Apple 연동.** 공유 시트, 단축어와 Siri 동작, 제어 센터 토글, 위젯, Mac에서는 메뉴 막대 도우미.',
          '**메모리와 템플릿.** 직접 저장하거나 모델이 저장하게 하는 메모, 사용자 프로필, 재사용할 수 있는 시스템 프롬프트 템플릿.',
        ],
        note: '이 기능들은 이번 리뷰를 위해 시험하지 않았으며, 일부는 서버가 무엇을 지원하는지에 따라 달라집니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**개인정보 처리방침에 따르면 OpenClient에는 대화, 분석, 원격 측정, 충돌 보고를 위한 개발자 운영 백엔드가 없으며, 메시지는 사용자가 설정한 서버 주소로만 전송됩니다.** 서버 URL과 API 키는 기기의 키체인에 저장되고, 대화는 기기에 남거나 동기화를 켠 경우 본인의 iCloud 계정에 저장됩니다.',
          '방침이 밝히는 예외는 다음과 같습니다. 서버가 클라우드 모델이나 검색 업체로 전달하는 내용, 받아쓰기에 선택한 경우의 Apple 음성 인식(Apple은 기기 내 실행을 보장하지 않습니다), Apple이 처리하는 구매, 그리고 Votice 기반의 선택형 피드백 게시판입니다. 피드백 게시판은 무작위로 생성된 영구 기기 식별자와 플랫폼, 언어, 앱 버전 같은 기술 데이터를 보낼 수 있습니다. 방침은 2026년 7월 15일자입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '소스 코드가 공개되어 있어 데이터 처리 방식을 직접 확인할 수 있지만, PromptQuorum은 코드를 읽지도 네트워크 트래픽을 감시하지도 않았습니다. 서버가 클라우드 업체로 전달하는 경우 그 메시지에는 해당 업체의 정책이 적용됩니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**이미 Ollama나 LiteLLM을 운영하는 Apple 사용자**로, iPhone·iPad·Mac용 네이티브 화면을 원하는 분.',
          '**소스 코드를 직접 읽고 싶은 분.** 내 프롬프트를 다루는 채팅 앱의 코드를 확인할 수 있습니다.',
          '**LiteLLM 사용자**로, 모바일 클라이언트에서 MCP 도구와 비용 데이터를 쓰고 싶은 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 사용 품질.** 스트리밍 속도, 배터리 소모, 모바일 네트워크에서의 안정성, 답변 품질은 시험하지 않았습니다.',
          '**서버 호환성.** README에 따르면 기본 채팅에는 모델 목록과 채팅 완성만 필요하지만, 특정 서버가 모든 기능을 지원하는지는 확인하지 않았습니다.',
          '**원격 접속 보안.** 서버를 외부에 노출하고 보호하는 방법은 앱의 범위 밖이며 평가하지 않았습니다.',
          '**장기 지원.** GitHub에는 기여자가 한 명만 표시되며, 출처에는 로드맵이나 지원 약속이 없습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Enchanted](/ko/power-local-llm/enchanted-review)',
            '플랫폼': 'iOS, macOS',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': 'Ollama 전용 최소형 Apple 클라이언트',
          },
          {
            '앱': '[Msty](/ko/power-local-llm/msty-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '프리미엄 / 비공개 소스',
            '핵심 차이': '로컬·클라우드 모델용 데스크톱 채팅 앱',
          },
          {
            '앱': '[LibreChat](/ko/power-local-llm/librechat-review-2026)',
            '플랫폼': '웹(셀프 호스팅)',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '팀 기능이 있는 셀프 호스팅 멀티 모델 채팅',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀝니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '클라우드 API 키만으로 OpenClient를 쓸 수 있습니까?',
            a: 'README에 따르면 모델 목록과 채팅 완성을 OpenAI 호환 형식으로 제공하는 서버라면 작동합니다. 특정 클라우드 업체의 엔드포인트가 이에 해당하는지는 시험하지 않았습니다.',
          },
          {
            q: 'Windows나 Android 버전이 있습니까?',
            a: '없습니다. 개발자 페이지에는 iOS, iPadOS, macOS만 나와 있으며, 앱은 Swift와 SwiftUI로 작성되었습니다.',
          },
          {
            q: '설정에는 어떤 주소를 입력합니까?',
            a: 'LiteLLM의 경우 4000번 포트의 프록시 주소를 입력합니다. Ollama에 직접 연결할 때는 11434번 포트 주소에 /v1 경로를 포함합니다. 앱은 API 경로를 덧붙일 뿐 /v1을 더하거나 빼지 않기 때문입니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'OpenClient는 이미 Ollama나 LiteLLM 서버를 운영하며 iPhone·iPad·Mac용 무료 오픈소스 네이티브 클라이언트를 원하는 분께 맞습니다. 휴대폰에서 모델을 직접 실행하는 앱을 기대하는 분께는 맞지 않습니다. 출처로 보면 기능이 풍부하고 자주 업데이트되는 프로젝트이지만, 속도, 안정성, 개인정보 관련 설명은 여기서 검증하지 않았습니다. Ollama만 쓴다면 [Enchanted](/ko/power-local-llm/enchanted-review)를, 로컬·클라우드 모델을 함께 다루는 데스크톱 앱을 원한다면 [Msty](/ko/power-local-llm/msty-review)를 비교해 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 OpenClient](https://apps.apple.com/us/app/id6761379499) — 버전, 업데이트 날짜, 가격, 지원 기기, 설명. 2026년 10월 24일 확인.',
          '[OpenClient 웹사이트](https://www.arturocarreterocalvo.com/openclient-llm/) — 개발자의 제품 페이지: 기능, 설정, 다운로드 링크.',
          '[OpenClient 개인정보 처리방침](https://www.arturocarreterocalvo.com/openclient-llm/privacy.html) — 데이터 처리, 제3자 서비스, 권한. 2026년 7월 15일 개정.',
          '[GitHub의 artcc/openclient-llm](https://github.com/artcc/openclient-llm) — README, AGPL v3.0 라이선스, 릴리스 기록, 기여자 목록. 2026년 10월 24일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Enchanted 리뷰](/ko/power-local-llm/enchanted-review) — Ollama용 최소형 macOS·iOS 클라이언트.',
          '[Msty 리뷰](/ko/power-local-llm/msty-review) — 로컬·클라우드 모델용 크로스 플랫폼 채팅 앱.',
          '[LibreChat 리뷰](/ko/power-local-llm/librechat-review-2026) — 셀프 호스팅 멀티 모델 채팅 인터페이스.',
          '[2026년 iPhone용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone용 더 넓은 비교.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — OpenClient 항목을 포함한 전체 카탈로그.',
        ],
      },
    },
  },
}
