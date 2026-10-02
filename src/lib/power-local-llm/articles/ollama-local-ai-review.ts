// Ollama Local AI Review: Android app that runs GGUF models on-device and serves an OpenAI-compatible API on your LAN
// Slug: ollama-local-ai-review
// Companion to: pocketpal-ai-review, layla-review, maid-review, rikkahub-review, litellm-review,
// best-local-llm-apps-android-2026
// Sources: the app's Google Play listing only (checked 2026-10-02) — no hands-on testing, no public repository found.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ollama-local-ai-review-hero-en.webp',
    title: 'Ollama Local AI Review: Android LLM Runner and LAN API Proxy',
    seoTitle: 'Ollama Local AI Review: Android LLM Runner & Proxy',
    intro:
      'Ollama Local AI is an Android app by a developer listed on Google Play as [FreeRouter Team](https://play.google.com/store/apps/details?id=com.llmproxy) that does two jobs: it runs GGUF language models on the phone through an embedded llama.cpp engine, and it exposes an OpenAI-compatible API on your Wi-Fi so tools such as Cursor, VS Code extensions, and Windsurf can use the phone as their model endpoint. It is free to install with in-app purchases, and despite its name it is not made by, or affiliated with, the Ollama project. This review is based only on the app\'s Google Play listing, because no public source repository, developer website, or documentation was found, and PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'Ollama Local AI review: an Android app that runs GGUF models on-device and serves an OpenAI-compatible API on your LAN. What the listing confirms, and what it leaves unverified.',
    twitterDescription:
      'Ollama Local AI review: an Android app that turns your phone into an on-device LLM runner and OpenAI-compatible LAN gateway. Not the Ollama project — and what the Play listing does not say.',
    audience:
      'Android users and developers who want to run GGUF models on a phone or point desktop coding tools at their phone over local Wi-Fi, and who need to know exactly what the public listing does and does not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Ollama Local AI review',
    targetKeywords: [
      'ollama local ai android',
      'ollama local ai app review',
      'com.llmproxy',
      'android openai compatible server',
      'run llm on android phone lan',
      'android llm proxy cursor vs code',
      'freerouter team android app',
    ],
    current_models_mentioned: ['Llama 3', 'Mistral', 'Phi', 'Gemma', 'Qwen'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Ollama Local AI is a free-to-install Android app (Google Play package com.llmproxy, listed under the developer name FreeRouter Team) that runs GGUF models on-device via llama.cpp and serves an OpenAI-compatible API to other devices on your Wi-Fi.** It can also forward requests to a self-hosted Ollama instance, a llama.cpp server, or cloud APIs such as OpenAI and Anthropic. It is not part of the Ollama project — the listing itself says so — and no license, source code, or version number is published, so treat it as a closed, unaudited utility until the developer says otherwise.',
    quickAnswerTop: {
      en: {
        question: 'Is Ollama Local AI the official Ollama app for Android?',
        answer:
          'No. The app\'s own Google Play description states it is an independent developer utility and is not affiliated with, sponsored by, or endorsed by Ollama, OpenAI, Anthropic, or any other named provider. It shares the name but runs its own embedded llama.cpp engine and can optionally connect to an Ollama server you host yourself.',
        bullets: [
          'Two functions: run GGUF models on the phone, and serve an OpenAI-compatible API (/v1/chat/completions, /v1/models, /health) to devices on the same network.',
          'Android only, free to install with in-app purchases; what the purchases unlock is not stated in the listing.',
          'Google Play shows 10K+ downloads and a 4.2 rating from 267 reviews, last updated 1 October 2026.',
          'The developer\'s Data safety section declares no data collected and no data shared with third parties — a self-declaration PromptQuorum has not audited.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Ollama Local AI?', anchor: 'what-is-ollama-local-ai' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Connect Your IDE Over Wi-Fi', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Listing', anchor: 'key-features' },
      { label: 'Privacy and Data Safety', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
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
            text: 'Ollama Local AI is an Android app by FreeRouter Team that runs GGUF models on-device via llama.cpp and serves an OpenAI-compatible API on your local network, and it is not affiliated with the Ollama project.',
          },
          {
            type: 'plain-terms',
            text: 'You install it on an Android phone, load a model or add your cloud API keys, tap Start Server, and then point tools like Cursor or VS Code at the phone\'s local address instead of at OpenAI — so the phone does the work, or relays the request, instead of your computer.',
          },
        ],
        items: [
          'Developer: listed on [Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) as FreeRouter Team, category Productivity; no website or repository is linked from the listing.',
          'Price: free to install, with in-app purchases whose contents are not described.',
          'On-device models: GGUF files run through an embedded llama.cpp engine; the listing names Llama 3, Mistral, Phi, Gemma, and Qwen as examples.',
          'LAN gateway: exposes OpenAI-style endpoints to other devices on your Wi-Fi and can route to local models, self-hosted Ollama, llama.cpp servers, OpenAI, Anthropic, NVIDIA NIM, and Hugging Face.',
          'Store signals on 2 October 2026: 10K+ downloads, 4.2 stars from 267 reviews, last updated 1 October 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based only on the Google Play listing, checked on 2 October 2026. PromptQuorum found no public source code, license, documentation, or version number for the app and has not tested or benchmarked it.',
          },
        ],
      },
      overview: {
        id: 'what-is-ollama-local-ai',
        title: 'What Is Ollama Local AI?',
        content: [
          '**Ollama Local AI is an Android app that combines an on-device model runner with a local-network API gateway.** According to its [Google Play listing](https://play.google.com/store/apps/details?id=com.llmproxy), it runs quantized GGUF models directly on the phone\'s CPU or GPU through an embedded [llama.cpp](https://github.com/ggml-org/llama.cpp) engine, and it can also act as a router that forwards requests to other backends you configure.',
          'The name is the main source of confusion. The listing\'s closing disclaimer says the app is an independent developer utility and not affiliated with, sponsored by, or endorsed by Ollama, OpenAI, Anthropic, or any mentioned provider. The app can connect to an [Ollama](https://ollama.com) server that you host elsewhere, but it does not embed Ollama itself. Search results and the Play package name (com.llmproxy) refer to the same app.',
        ],
        note: 'GGUF is a file format for quantized open-weight language models that runtimes such as llama.cpp can load on consumer hardware, including phones.',
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**The only official channel the listing points to is Google Play; no iOS build, desktop build, APK mirror, or GitHub release is linked.**',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)',
          },
          {
            'Platform': 'iOS / desktop',
            'Where to get it': 'Not offered, per the listing',
          },
        ],
        note: 'This page is companion material to the app\'s entry in the [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). No version number is shown in the listing text PromptQuorum could read, so none is stated here; check the Play page for the current build.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Connect Your IDE Over Wi-Fi',
        content: [
          '**The listing\'s own quick start has four steps, all done on the phone and the same private network.** PromptQuorum has not run these steps.',
        ],
        numberedItems: [
          {
            title: 'Launch the server',
            whyItMatters: 'Open the app, pick a local GGUF model or enter cloud provider keys, and tap "Start Server".',
          },
          {
            title: 'Note the endpoint',
            whyItMatters: 'The app displays the phone\'s local IP and port, for example http://192.168.1.50:8080/v1 in the listing\'s own example.',
          },
          {
            title: 'Point your tool at it',
            whyItMatters: 'In Cursor, enter any placeholder as the OpenAI key and override the base URL. In VS Code extensions such as Continue, Cline, or Roo Code, set the provider type to openai and the apiBase or baseUrl to the phone\'s address. In Windsurf, point custom OpenAI model endpoints at it.',
          },
          {
            title: 'Start coding',
            whyItMatters: 'Requests and agent loops from the desktop tool are then handled by the phone, either by the on-device model or by the provider it routes to.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Listing',
        content: [
          '**Every item below comes from the developer\'s own Play description; none has been independently tested.**',
        ],
        items: [
          '**OpenAI-style endpoints.** /v1/chat/completions, /v1/models, and /health, reachable by any machine on the same Wi-Fi or LAN subnet.',
          '**Multi-provider routing.** Switch between on-device models, self-hosted Ollama instances, llama.cpp servers, and direct cloud APIs (OpenAI, Anthropic Claude, NVIDIA NIM, Hugging Face).',
          '**Proxy controls.** Request pools, provider timeouts, rate limiting, automatic failover, and round-robin distribution.',
          '**LAN Master/Worker clustering.** Pair several Android devices on one network to pool memory and compute into an inference cluster.',
          '**Cross-device WebUI.** A chat interface and server management console reachable from a PC or tablet browser on the same network.',
          '**WebX Live Canvas.** Generate and preview HTML, Tailwind CSS, and JavaScript inside the chat.',
          '**Traffic Observatory.** Token-generation speed, latency metrics, and request payloads shown as proxy diagnostics.',
          '**Compatible clients named.** Cursor, VS Code, Windsurf, JetBrains, LangChain, LlamaIndex, LiteLLM, AutoGen, CrewAI, Continue.dev, Cline, Roo Code, Aider, and Open WebUI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Safety',
        content: [
          '**The app\'s Google Play Data safety section declares that no data is collected and no data is shared with third parties.** That is a self-declaration by the developer, not an audit result, and PromptQuorum has not inspected the app\'s network traffic or code.',
          'The description adds specific claims: provider credentials are stored on-device with AES-256 EncryptedSharedPreferences, and requests to custom cloud endpoints travel directly from the phone to the provider with no intermediary server. The privacy picture also depends on routing: a request sent to OpenAI, Anthropic, or another cloud provider leaves your network and is governed by that provider\'s terms, regardless of the app\'s own declaration. Only requests answered by an on-device model stay on the phone.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app is closed source as far as PromptQuorum could find, so the claims above cannot be checked against code. Anyone handling regulated or confidential data should verify behavior themselves before relying on them.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Phone as an API endpoint',
            'What it means in real use': 'Desktop coding tools can use the phone\'s model or routes without a separate server.',
            'Limitation / caveat': 'Speed is bounded by phone hardware, and the listing gives no benchmarks.',
          },
          {
            'Benefit': 'On-device GGUF models',
            'What it means in real use': 'Chats with local models need no internet connection, per the listing.',
            'Limitation / caveat': 'Usable model size depends on the phone\'s RAM; the listing states no minimum.',
          },
          {
            'Benefit': 'One gateway, many backends',
            'What it means in real use': 'Local models, Ollama, llama.cpp servers, and cloud APIs sit behind one address.',
            'Limitation / caveat': 'Cloud-routed requests leave your network and follow the provider\'s data terms.',
          },
          {
            'Benefit': 'Free to install',
            'What it means in real use': 'You can try the core flow without paying first.',
            'Limitation / caveat': 'In-app purchases exist and their contents are not described in the listing.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Developers with a spare Android phone.** The Cursor, VS Code, and Windsurf quick start is the app\'s central use case, and the phone offloads work from the main PC.',
          '**Users who want one OpenAI-style address in front of several backends.** The routing, failover, and rate-limit controls target that setup.',
          '**Home-lab users comfortable testing an unaudited utility on a private network.** A free install makes a trial cheap.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**License and source code.** Neither is stated on the listing and no public repository was found, so the app is treated as closed source; readers who need auditable code should choose an open-source app from the alternatives below.',
          '**Version number.** The listing text PromptQuorum could read shows no version, so this page cannot tie its claims to a specific build.',
          '**In-app purchases.** The listing says they exist but not what they unlock or what they cost.',
          '**Hardware floor and performance.** No minimum RAM, Android version, or speed figures are published.',
          '**Developer identity.** The listing shows the name FreeRouter Team and a contact email, with no website or company details.',
          '**Not for iOS or desktop users.** The app is Android-only.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': 'Ollama Local AI',
            'Platforms': 'Android',
            'Price / license': 'Free + IAP / not stated',
            'Key difference': 'Serves an OpenAI-compatible API to your LAN and routes to cloud and self-hosted backends',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'Android, iOS',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source on-device chat client; no LAN API server in its core design',
          },
          {
            'App': '[Maid](/power-local-llm/maid-review)',
            'Platforms': 'Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source chat app for local GGUF or remote providers; a client, not a network gateway',
          },
          {
            'App': '[RikkaHub](/power-local-llm/rikkahub-review)',
            'Platforms': 'Android',
            'Price / license': 'Free / open source',
            'Key difference': 'Multi-provider chat client rather than a server for other devices',
          },
          {
            'App': '[Layla](/power-local-llm/layla-review)',
            'Platforms': 'Android, iOS',
            'Price / license': 'Paid / closed source',
            'Key difference': 'Companion and roleplay focus with an optional cloud mode',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price and license on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Ollama Local AI made by the Ollama team?',
            a: 'No. The listing\'s disclaimer says the app is independent and not affiliated with or endorsed by Ollama. It can connect to an Ollama server you run yourself, but it ships its own llama.cpp engine.',
          },
          {
            q: 'What is the Google Play package name?',
            a: 'The package ID is com.llmproxy, which is why the app turns up under "LLM Proxy" searches although its store name is Ollama Local AI.',
          },
          {
            q: 'Does it work on iPhone or desktop?',
            a: 'Not according to the listing: Google Play is the only channel it links, and no iOS or desktop build is mentioned.',
          },
          {
            q: 'Which models can it run on the phone?',
            a: 'GGUF-format models through llama.cpp. The listing names Llama 3, Mistral, Phi, Gemma, and Qwen as examples; which sizes fit depends on your phone\'s RAM, which the listing does not specify.',
          },
          {
            q: 'Can I use it with Cursor or VS Code?',
            a: 'The listing describes exactly that: start the server on the phone, then set the tool\'s OpenAI base URL to the phone\'s local address. PromptQuorum has not tested the steps.',
          },
          {
            q: 'Does my data stay on the phone?',
            a: 'Only for requests answered by an on-device model. Requests routed to OpenAI, Anthropic, NVIDIA NIM, or Hugging Face go to those providers, and the developer\'s no-data-collected declaration is unaudited.',
          },
          {
            q: 'Is it open source?',
            a: 'No license or repository is stated, and none was found, so PromptQuorum lists it as closed source. If the developer publishes one, this review will be updated.',
          },
          {
            q: 'What do the in-app purchases unlock?',
            a: 'The listing does not say. Check inside the app before buying, and use Google Play\'s refund window if the result is not what you expected.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Ollama Local AI addresses a narrow, real need: using an Android phone as an OpenAI-compatible endpoint for desktop coding tools while also running GGUF models on the device. The Play listing describes a feature set that goes further than most phone chat apps — LAN serving, multi-provider routing, failover, clustering, and traffic diagnostics — and store signals of 10K+ downloads and a 4.2 rating suggest real use. Against that, the app is a closed, unaudited utility from a developer with no visible website, its version, license, hardware floor, and purchase scope are all unpublished, and its name invites confusion with the Ollama project. It suits developers who want to experiment with a phone-as-gateway setup on a private network; readers who need auditable code or iOS support should start with [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Maid](/power-local-llm/maid-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama Local AI on Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) — description, developer name, Data safety declaration, download count, rating, and last-updated date, checked 2 October 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for Android and iOS.',
          '[Maid Review](/power-local-llm/maid-review) — an open-source Android app for local GGUF or remote providers.',
          '[RikkaHub Review](/power-local-llm/rikkahub-review) — a multi-provider Android client.',
          '[Layla Review](/power-local-llm/layla-review) — a paid companion-style on-device app.',
          '[LiteLLM Review](/power-local-llm/litellm-review) — the desktop and server-side route to the same one-endpoint idea.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ollama Local AI Review: Android LLM Runner and LAN API Proxy',
      description:
        'Ollama Local AI review: an Android app that runs GGUF models on-device and serves an OpenAI-compatible API on your LAN. What the Google Play listing confirms and what it leaves unverified.',
      url: 'https://promptquorum.com/power-local-llm/ollama-local-ai-review',
      inLanguage: 'en',
      datePublished: '2026-10-02',
      dateModified: '2026-10-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android users and developers evaluating an on-device LLM runner and local-network OpenAI-compatible gateway' },
      about: [
        { '@type': 'Thing', name: 'Ollama Local AI' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'OpenAI-compatible API' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/ollama-local-ai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Ollama Local AI Review', item: 'https://promptquorum.com/power-local-llm/ollama-local-ai-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-02',
    dateModified: '2026-10-02',
    next_refresh_due: '2027-04-02',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/ollama-local-ai-review-hero-de.webp',
    title: 'Ollama Local AI im Test: Android-LLM-Runner und LAN-API-Proxy',
    seoTitle: 'Ollama Local AI Test: Android-LLM-Runner & Proxy',
    intro:
      'Ollama Local AI ist eine Android-App eines Entwicklers, der bei Google Play als [FreeRouter Team](https://play.google.com/store/apps/details?id=com.llmproxy) geführt wird und zwei Aufgaben erfüllt: Sie führt GGUF-Sprachmodelle über eine eingebettete llama.cpp-Engine auf dem Smartphone aus, und sie stellt in Ihrem WLAN eine OpenAI-kompatible API bereit, sodass Tools wie Cursor, VS-Code-Erweiterungen und Windsurf das Smartphone als Modell-Endpunkt nutzen können. Die Installation ist kostenlos, mit In-App-Käufen, und trotz des Namens stammt die App nicht vom Ollama-Projekt und steht in keiner Verbindung zu ihm. Dieser Test stützt sich ausschließlich auf den Google-Play-Eintrag der App, weil weder ein öffentliches Quellcode-Repository noch eine Entwickler-Website oder Dokumentation gefunden wurde und PromptQuorum die App nicht praktisch getestet hat.',
    metaDescription:
      'Ollama Local AI im Test: Android-App führt GGUF-Modelle lokal aus und bietet im LAN eine OpenAI-kompatible API. Was der Eintrag bestätigt und was offen bleibt.',
    twitterDescription:
      'Ollama Local AI im Test: eine Android-App, die das Smartphone zum LLM-Runner auf dem Gerät und zum OpenAI-kompatiblen LAN-Gateway macht. Nicht das Ollama-Projekt — und was der Play-Eintrag nicht verrät.',
    audience:
      'Android-Nutzer und Entwickler, die GGUF-Modelle auf einem Smartphone ausführen oder Desktop-Coding-Tools über das lokale WLAN auf ihr Smartphone richten möchten und genau wissen müssen, was der öffentliche Eintrag bestätigt und was nicht.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Ollama Local AI Test',
    targetKeywords: [
      'ollama local ai android',
      'ollama local ai app test',
      'com.llmproxy',
      'android openai-kompatibler server',
      'llm auf android smartphone im lan ausführen',
      'android llm proxy cursor vs code',
      'freerouter team android app',
    ],
    current_models_mentioned: ['Llama 3', 'Mistral', 'Phi', 'Gemma', 'Qwen'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Ollama Local AI ist eine kostenlos installierbare Android-App (Google-Play-Paket com.llmproxy, geführt unter dem Entwicklernamen FreeRouter Team), die GGUF-Modelle über llama.cpp auf dem Gerät ausführt und anderen Geräten in Ihrem WLAN eine OpenAI-kompatible API bereitstellt.** Sie kann Anfragen außerdem an eine selbst gehostete Ollama-Instanz, einen llama.cpp-Server oder Cloud-APIs wie OpenAI und Anthropic weiterleiten. Sie ist nicht Teil des Ollama-Projekts — der Eintrag selbst sagt das — und weder Lizenz noch Quellcode noch Versionsnummer sind veröffentlicht; behandeln Sie sie daher als geschlossenes, ungeprüftes Hilfsprogramm, bis der Entwickler etwas anderes belegt.',
    quickAnswerTop: {
      de: {
        question: 'Ist Ollama Local AI die offizielle Ollama-App für Android?',
        answer:
          'Nein. Die Google-Play-Beschreibung der App selbst gibt an, dass es sich um ein unabhängiges Hilfsprogramm eines Entwicklers handelt, das nicht mit Ollama, OpenAI, Anthropic oder einem anderen genannten Anbieter verbunden ist und von diesen weder gesponsert noch unterstützt wird. Sie teilt den Namen, nutzt aber ihre eigene eingebettete llama.cpp-Engine und kann optional eine Verbindung zu einem von Ihnen selbst gehosteten Ollama-Server herstellen.',
        bullets: [
          'Zwei Funktionen: GGUF-Modelle auf dem Smartphone ausführen und eine OpenAI-kompatible API (/v1/chat/completions, /v1/models, /health) für Geräte im selben Netzwerk bereitstellen.',
          'Nur Android, kostenlos installierbar mit In-App-Käufen; was die Käufe freischalten, steht nicht im Eintrag.',
          'Google Play zeigt 10K+ Downloads und eine Bewertung von 4,2 aus 267 Rezensionen, zuletzt aktualisiert am 1. Oktober 2026.',
          'Der Abschnitt „Datensicherheit“ des Entwicklers gibt an, dass keine Daten erhoben und keine Daten an Dritte weitergegeben werden — eine Selbstauskunft, die PromptQuorum nicht geprüft hat.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Ollama Local AI?', anchor: 'what-is-ollama-local-ai' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So verbinden Sie Ihre IDE über WLAN', anchor: 'getting-started' },
      { label: 'Vom Eintrag bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Datensicherheit', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
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
            text: 'Ollama Local AI ist eine Android-App des FreeRouter Team, die GGUF-Modelle über llama.cpp auf dem Gerät ausführt und in Ihrem lokalen Netzwerk eine OpenAI-kompatible API bereitstellt; sie steht in keiner Verbindung zum Ollama-Projekt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App auf einem Android-Smartphone, laden ein Modell oder hinterlegen Ihre Cloud-API-Schlüssel, tippen auf „Start Server“ und richten dann Tools wie Cursor oder VS Code statt auf OpenAI auf die lokale Adresse des Smartphones — das Smartphone erledigt also die Arbeit oder leitet die Anfrage weiter, statt Ihres Computers.',
          },
        ],
        items: [
          'Entwickler: bei [Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) als FreeRouter Team geführt, Kategorie Produktivität; im Eintrag ist weder eine Website noch ein Repository verlinkt.',
          'Preis: kostenlos installierbar, mit In-App-Käufen, deren Inhalt nicht beschrieben ist.',
          'Modelle auf dem Gerät: GGUF-Dateien, ausgeführt über eine eingebettete llama.cpp-Engine; der Eintrag nennt Llama 3, Mistral, Phi, Gemma und Qwen als Beispiele.',
          'LAN-Gateway: stellt anderen Geräten in Ihrem WLAN OpenAI-artige Endpunkte bereit und kann an lokale Modelle, selbst gehostetes Ollama, llama.cpp-Server, OpenAI, Anthropic, NVIDIA NIM und Hugging Face weiterleiten.',
          'Store-Signale am 2. Oktober 2026: 10K+ Downloads, 4,2 Sterne aus 267 Rezensionen, zuletzt aktualisiert am 1. Oktober 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test stützt sich ausschließlich auf den Google-Play-Eintrag, geprüft am 2. Oktober 2026. PromptQuorum hat weder öffentlichen Quellcode noch eine Lizenz, Dokumentation oder Versionsnummer für die App gefunden und sie weder getestet noch einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-ollama-local-ai',
        title: 'Was ist Ollama Local AI?',
        content: [
          '**Ollama Local AI ist eine Android-App, die einen Modell-Runner auf dem Gerät mit einem API-Gateway im lokalen Netzwerk verbindet.** Laut ihrem [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=com.llmproxy) führt sie quantisierte GGUF-Modelle direkt auf der CPU oder GPU des Smartphones über eine eingebettete [llama.cpp](https://github.com/ggml-org/llama.cpp)-Engine aus und kann zusätzlich als Router arbeiten, der Anfragen an andere von Ihnen konfigurierte Backends weiterleitet.',
          'Der Name ist die Hauptquelle von Verwechslungen. Der abschließende Haftungsausschluss des Eintrags besagt, dass die App ein unabhängiges Hilfsprogramm eines Entwicklers ist und nicht mit Ollama, OpenAI, Anthropic oder einem erwähnten Anbieter verbunden ist und von diesen weder gesponsert noch unterstützt wird. Die App kann eine Verbindung zu einem [Ollama](https://ollama.com)-Server herstellen, den Sie anderswo hosten, bettet Ollama selbst aber nicht ein. Suchergebnisse und der Play-Paketname (com.llmproxy) beziehen sich auf dieselbe App.',
        ],
        note: 'GGUF ist ein Dateiformat für quantisierte Open-Weight-Sprachmodelle, das Laufzeitumgebungen wie llama.cpp auf handelsüblicher Hardware, einschließlich Smartphones, laden können.',
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Der einzige offizielle Kanal, auf den der Eintrag verweist, ist Google Play; weder eine iOS-Version noch eine Desktop-Version, ein APK-Mirror oder ein GitHub-Release ist verlinkt.**',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)',
          },
          {
            'Plattform': 'iOS / Desktop',
            'Bezugsquelle': 'Laut Eintrag nicht angeboten',
          },
        ],
        note: 'Diese Seite ist Begleitmaterial zum Eintrag der App im [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Im Eintragstext, den PromptQuorum lesen konnte, ist keine Versionsnummer angegeben, daher wird hier keine genannt; die aktuelle Version finden Sie auf der Play-Seite.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So verbinden Sie Ihre IDE über WLAN',
        content: [
          '**Die eigene Kurzanleitung des Eintrags umfasst vier Schritte, die alle auf dem Smartphone und im selben privaten Netzwerk erfolgen.** PromptQuorum hat diese Schritte nicht ausgeführt.',
        ],
        numberedItems: [
          {
            title: 'Server starten',
            whyItMatters: 'Öffnen Sie die App, wählen Sie ein lokales GGUF-Modell oder geben Sie Schlüssel von Cloud-Anbietern ein und tippen Sie auf „Start Server“.',
          },
          {
            title: 'Endpunkt notieren',
            whyItMatters: 'Die App zeigt die lokale IP-Adresse und den Port des Smartphones an, im Beispiel des Eintrags etwa http://192.168.1.50:8080/v1.',
          },
          {
            title: 'Ihr Tool darauf richten',
            whyItMatters: 'Geben Sie in Cursor einen beliebigen Platzhalter als OpenAI-Schlüssel ein und überschreiben Sie die Basis-URL. Setzen Sie in VS-Code-Erweiterungen wie Continue, Cline oder Roo Code den Anbietertyp auf openai und apiBase bzw. baseUrl auf die Adresse des Smartphones. Richten Sie in Windsurf benutzerdefinierte OpenAI-Modell-Endpunkte darauf.',
          },
          {
            title: 'Mit dem Programmieren beginnen',
            whyItMatters: 'Anfragen und Agenten-Schleifen des Desktop-Tools werden dann vom Smartphone bearbeitet, entweder vom Modell auf dem Gerät oder von dem Anbieter, an den es weiterleitet.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Vom Eintrag bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus der Play-Beschreibung des Entwicklers selbst; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**OpenAI-artige Endpunkte.** /v1/chat/completions, /v1/models und /health, erreichbar von jedem Rechner im selben WLAN oder LAN-Subnetz.',
          '**Routing über mehrere Anbieter.** Umschalten zwischen Modellen auf dem Gerät, selbst gehosteten Ollama-Instanzen, llama.cpp-Servern und direkten Cloud-APIs (OpenAI, Anthropic Claude, NVIDIA NIM, Hugging Face).',
          '**Proxy-Steuerung.** Anfragepools, Anbieter-Timeouts, Ratenbegrenzung, automatisches Failover und Round-Robin-Verteilung.',
          '**LAN-Master/Worker-Clustering.** Mehrere Android-Geräte in einem Netzwerk koppeln, um Speicher und Rechenleistung zu einem Inferenz-Cluster zu bündeln.',
          '**Geräteübergreifende WebUI.** Eine Chat-Oberfläche und Server-Verwaltungskonsole, erreichbar über den Browser eines PCs oder Tablets im selben Netzwerk.',
          '**WebX Live Canvas.** HTML, Tailwind CSS und JavaScript im Chat erzeugen und in der Vorschau ansehen.',
          '**Traffic Observatory.** Token-Generierungsgeschwindigkeit, Latenzmetriken und Anfrage-Payloads als Proxy-Diagnose.',
          '**Genannte kompatible Clients.** Cursor, VS Code, Windsurf, JetBrains, LangChain, LlamaIndex, LiteLLM, AutoGen, CrewAI, Continue.dev, Cline, Roo Code, Aider und Open WebUI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datensicherheit',
        content: [
          '**Der Abschnitt „Datensicherheit“ im Google-Play-Eintrag der App gibt an, dass keine Daten erhoben und keine Daten an Dritte weitergegeben werden.** Das ist eine Selbstauskunft des Entwicklers, kein Prüfergebnis, und PromptQuorum hat weder den Netzwerkverkehr noch den Code der App untersucht.',
          'Die Beschreibung ergänzt konkrete Angaben: Zugangsdaten von Anbietern werden auf dem Gerät mit AES-256 EncryptedSharedPreferences gespeichert, und Anfragen an benutzerdefinierte Cloud-Endpunkte gehen direkt vom Smartphone zum Anbieter, ohne zwischengeschalteten Server. Das Datenschutzbild hängt außerdem vom Routing ab: Eine Anfrage an OpenAI, Anthropic oder einen anderen Cloud-Anbieter verlässt Ihr Netzwerk und unterliegt den Bedingungen dieses Anbieters, unabhängig von der Erklärung der App selbst. Nur Anfragen, die ein Modell auf dem Gerät beantwortet, bleiben auf dem Smartphone.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Soweit PromptQuorum feststellen konnte, ist die App Closed Source, sodass sich die obigen Angaben nicht am Code überprüfen lassen. Wer regulierte oder vertrauliche Daten verarbeitet, sollte das Verhalten selbst verifizieren, bevor er sich darauf verlässt.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung in der Praxis', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Smartphone als API-Endpunkt',
            'Bedeutung in der Praxis': 'Desktop-Coding-Tools können das Modell oder die Routen des Smartphones ohne separaten Server nutzen.',
            'Einschränkung / Hinweis': 'Die Geschwindigkeit ist durch die Smartphone-Hardware begrenzt, und der Eintrag nennt keine Benchmarks.',
          },
          {
            'Vorteil': 'GGUF-Modelle auf dem Gerät',
            'Bedeutung in der Praxis': 'Chats mit lokalen Modellen benötigen laut Eintrag keine Internetverbindung.',
            'Einschränkung / Hinweis': 'Die nutzbare Modellgröße hängt vom RAM des Smartphones ab; der Eintrag nennt kein Minimum.',
          },
          {
            'Vorteil': 'Ein Gateway, viele Backends',
            'Bedeutung in der Praxis': 'Lokale Modelle, Ollama, llama.cpp-Server und Cloud-APIs liegen hinter einer Adresse.',
            'Einschränkung / Hinweis': 'Über die Cloud geleitete Anfragen verlassen Ihr Netzwerk und unterliegen den Datenbedingungen des Anbieters.',
          },
          {
            'Vorteil': 'Kostenlos installierbar',
            'Bedeutung in der Praxis': 'Sie können den Kernablauf ausprobieren, ohne vorher zu zahlen.',
            'Einschränkung / Hinweis': 'In-App-Käufe existieren, und ihr Inhalt wird im Eintrag nicht beschrieben.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Entwickler mit einem übrigen Android-Smartphone.** Die Kurzanleitung für Cursor, VS Code und Windsurf ist der zentrale Anwendungsfall der App, und das Smartphone entlastet den Haupt-PC.',
          '**Nutzer, die eine OpenAI-artige Adresse vor mehreren Backends wollen.** Die Steuerung für Routing, Failover und Ratenbegrenzung zielt auf genau diesen Aufbau.',
          '**Home-Lab-Nutzer, die ein ungeprüftes Hilfsprogramm in einem privaten Netzwerk testen möchten.** Die kostenlose Installation macht einen Versuch günstig.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Lizenz und Quellcode.** Beides ist im Eintrag nicht angegeben, und es wurde kein öffentliches Repository gefunden; die App wird daher als Closed Source behandelt. Leser, die prüfbaren Code benötigen, sollten sich für eine Open-Source-App aus den unten genannten Alternativen entscheiden.',
          '**Versionsnummer.** Der Eintragstext, den PromptQuorum lesen konnte, zeigt keine Version, daher kann diese Seite ihre Aussagen keinem bestimmten Build zuordnen.',
          '**In-App-Käufe.** Der Eintrag besagt, dass sie existieren, aber nicht, was sie freischalten oder was sie kosten.',
          '**Hardware-Untergrenze und Leistung.** Es werden weder ein Mindest-RAM noch eine Mindest-Android-Version noch Geschwindigkeitswerte veröffentlicht.',
          '**Identität des Entwicklers.** Der Eintrag zeigt den Namen FreeRouter Team und eine Kontakt-E-Mail, jedoch weder eine Website noch Firmenangaben.',
          '**Nicht für iOS- oder Desktop-Nutzer.** Die App ist nur für Android verfügbar.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wesentlicher Unterschied'],
        rows: [
          {
            'App': 'Ollama Local AI',
            'Plattformen': 'Android',
            'Preis / Lizenz': 'Kostenlos + IAP / nicht angegeben',
            'Wesentlicher Unterschied': 'Stellt dem LAN eine OpenAI-kompatible API bereit und leitet an Cloud- und selbst gehostete Backends weiter',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'Android, iOS',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffener Chat-Client auf dem Gerät; kein LAN-API-Server im Kerndesign',
          },
          {
            'App': '[Maid](/de/power-local-llm/maid-review)',
            'Plattformen': 'Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffene Chat-App für lokale GGUF-Modelle oder Remote-Anbieter; ein Client, kein Netzwerk-Gateway',
          },
          {
            'App': '[RikkaHub](/de/power-local-llm/rikkahub-review)',
            'Plattformen': 'Android',
            'Preis / Lizenz': 'Kostenlos / Open Source',
            'Wesentlicher Unterschied': 'Multi-Provider-Chat-Client statt eines Servers für andere Geräte',
          },
          {
            'App': '[Layla](/de/power-local-llm/layla-review)',
            'Plattformen': 'Android, iOS',
            'Preis / Lizenz': 'Kostenpflichtig / Closed Source',
            'Wesentlicher Unterschied': 'Fokus auf Begleiter und Rollenspiel mit optionalem Cloud-Modus',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis und Lizenz jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Stammt Ollama Local AI vom Ollama-Team?',
            a: 'Nein. Der Haftungsausschluss des Eintrags besagt, dass die App unabhängig ist und nicht mit Ollama verbunden ist oder von Ollama unterstützt wird. Sie kann sich mit einem Ollama-Server verbinden, den Sie selbst betreiben, bringt aber ihre eigene llama.cpp-Engine mit.',
          },
          {
            q: 'Wie lautet der Google-Play-Paketname?',
            a: 'Die Paket-ID lautet com.llmproxy, weshalb die App bei Suchen nach „LLM Proxy“ auftaucht, obwohl ihr Store-Name Ollama Local AI ist.',
          },
          {
            q: 'Funktioniert sie auf dem iPhone oder dem Desktop?',
            a: 'Laut Eintrag nicht: Google Play ist der einzige verlinkte Kanal, und weder eine iOS- noch eine Desktop-Version wird erwähnt.',
          },
          {
            q: 'Welche Modelle kann sie auf dem Smartphone ausführen?',
            a: 'Modelle im GGUF-Format über llama.cpp. Der Eintrag nennt Llama 3, Mistral, Phi, Gemma und Qwen als Beispiele; welche Größen passen, hängt vom RAM Ihres Smartphones ab, den der Eintrag nicht angibt.',
          },
          {
            q: 'Kann ich sie mit Cursor oder VS Code nutzen?',
            a: 'Der Eintrag beschreibt genau das: den Server auf dem Smartphone starten und dann die OpenAI-Basis-URL des Tools auf die lokale Adresse des Smartphones setzen. PromptQuorum hat die Schritte nicht getestet.',
          },
          {
            q: 'Bleiben meine Daten auf dem Smartphone?',
            a: 'Nur bei Anfragen, die ein Modell auf dem Gerät beantwortet. Anfragen, die an OpenAI, Anthropic, NVIDIA NIM oder Hugging Face geleitet werden, gehen an diese Anbieter, und die Erklärung des Entwicklers, keine Daten zu erheben, ist ungeprüft.',
          },
          {
            q: 'Ist sie Open Source?',
            a: 'Es ist weder eine Lizenz noch ein Repository angegeben, und es wurde keines gefunden; PromptQuorum führt die App daher als Closed Source. Sollte der Entwickler eines veröffentlichen, wird dieser Test aktualisiert.',
          },
          {
            q: 'Was schalten die In-App-Käufe frei?',
            a: 'Der Eintrag sagt es nicht. Prüfen Sie es in der App, bevor Sie kaufen, und nutzen Sie das Rückgabefenster von Google Play, falls das Ergebnis nicht Ihren Erwartungen entspricht.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Ollama Local AI adressiert einen engen, realen Bedarf: ein Android-Smartphone als OpenAI-kompatiblen Endpunkt für Desktop-Coding-Tools zu nutzen und zugleich GGUF-Modelle auf dem Gerät auszuführen. Der Play-Eintrag beschreibt einen Funktionsumfang, der weiter geht als bei den meisten Smartphone-Chat-Apps — LAN-Serving, Routing über mehrere Anbieter, Failover, Clustering und Traffic-Diagnose —, und Store-Signale von 10K+ Downloads und einer Bewertung von 4,2 deuten auf reale Nutzung hin. Dem steht gegenüber, dass die App ein geschlossenes, ungeprüftes Hilfsprogramm eines Entwicklers ohne sichtbare Website ist, dass Version, Lizenz, Hardware-Untergrenze und Umfang der Käufe allesamt unveröffentlicht sind und dass ihr Name zur Verwechslung mit dem Ollama-Projekt einlädt. Sie eignet sich für Entwickler, die in einem privaten Netzwerk mit einem Smartphone-als-Gateway-Aufbau experimentieren möchten; Leser, die prüfbaren Code oder iOS-Unterstützung benötigen, sollten mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Maid](/de/power-local-llm/maid-review) beginnen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Ollama Local AI bei Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) — Beschreibung, Entwicklername, Erklärung zur Datensicherheit, Download-Zahl, Bewertung und Datum der letzten Aktualisierung, geprüft am 2. Oktober 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal AI Test](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät für Android und iOS.',
          '[Maid Test](/de/power-local-llm/maid-review) — eine quelloffene Android-App für lokale GGUF-Modelle oder Remote-Anbieter.',
          '[RikkaHub Test](/de/power-local-llm/rikkahub-review) — ein Android-Client für mehrere Anbieter.',
          '[Layla Test](/de/power-local-llm/layla-review) — eine kostenpflichtige App auf dem Gerät im Begleiter-Stil.',
          '[LiteLLM Test](/de/power-local-llm/litellm-review) — der Desktop- und serverseitige Weg zur selben Idee eines einzigen Endpunkts.',
          '[Beste lokale LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
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
    heroImage: '/images/ollama-local-ai-review-hero-es.webp',
    title: 'Análisis de Ollama Local AI: ejecutor de LLM y proxy de API en la LAN para Android',
    seoTitle: 'Análisis de Ollama Local AI: LLM y proxy en Android',
    intro:
      'Ollama Local AI es una app de Android de un desarrollador que figura en Google Play como [FreeRouter Team](https://play.google.com/store/apps/details?id=com.llmproxy) y que cumple dos funciones: ejecuta modelos de lenguaje GGUF en el teléfono mediante un motor llama.cpp integrado, y expone una API compatible con OpenAI en tu Wi-Fi para que herramientas como Cursor, extensiones de VS Code y Windsurf puedan usar el teléfono como su punto de acceso a modelos. Es gratis de instalar con compras dentro de la app y, pese a su nombre, no ha sido creada por el proyecto Ollama ni está afiliada a él. Este análisis se basa únicamente en la ficha de Google Play de la app, porque no se encontró ningún repositorio de código fuente público, sitio web del desarrollador ni documentación, y PromptQuorum no ha probado la app de forma práctica.',
    metaDescription:
      'Análisis de Ollama Local AI: app Android que ejecuta modelos GGUF en el dispositivo y sirve una API compatible con OpenAI en tu LAN. Qué confirma la ficha.',
    twitterDescription:
      'Análisis de Ollama Local AI: una app de Android que convierte tu teléfono en un ejecutor de LLM en el dispositivo y pasarela LAN compatible con OpenAI. No es el proyecto Ollama, y lo que la ficha de Play no dice.',
    audience:
      'Usuarios y desarrolladores de Android que quieren ejecutar modelos GGUF en un teléfono o apuntar herramientas de programación de escritorio a su teléfono por Wi-Fi local, y que necesitan saber con exactitud qué confirma y qué no confirma la ficha pública.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de Ollama Local AI',
    targetKeywords: [
      'ollama local ai android',
      'ollama local ai opiniones app',
      'com.llmproxy',
      'servidor compatible con openai en android',
      'ejecutar llm en teléfono android en la red local',
      'proxy llm android cursor vs code',
      'app android freerouter team',
    ],
    current_models_mentioned: ['Llama 3', 'Mistral', 'Phi', 'Gemma', 'Qwen'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Ollama Local AI es una app de Android gratuita de instalar (paquete de Google Play com.llmproxy, listada bajo el nombre de desarrollador FreeRouter Team) que ejecuta modelos GGUF en el dispositivo mediante llama.cpp y sirve una API compatible con OpenAI a otros dispositivos de tu Wi-Fi.** También puede reenviar solicitudes a una instancia de Ollama autoalojada, a un servidor llama.cpp o a APIs en la nube como OpenAI y Anthropic. No forma parte del proyecto Ollama —la propia ficha lo indica— y no se publica ninguna licencia, código fuente ni número de versión, por lo que conviene tratarla como una utilidad cerrada y sin auditar hasta que el desarrollador diga lo contrario.',
    quickAnswerTop: {
      es: {
        question: '¿Es Ollama Local AI la app oficial de Ollama para Android?',
        answer:
          'No. La propia descripción de la app en Google Play indica que es una utilidad de un desarrollador independiente y que no está afiliada, patrocinada ni respaldada por Ollama, OpenAI, Anthropic ni ningún otro proveedor mencionado. Comparte el nombre, pero ejecuta su propio motor llama.cpp integrado y, opcionalmente, puede conectarse a un servidor Ollama que alojes tú mismo.',
        bullets: [
          'Dos funciones: ejecutar modelos GGUF en el teléfono y servir una API compatible con OpenAI (/v1/chat/completions, /v1/models, /health) a los dispositivos de la misma red.',
          'Solo Android, gratis de instalar con compras dentro de la app; la ficha no indica qué desbloquean las compras.',
          'Google Play muestra más de 10 mil descargas y una calificación de 4.2 con 267 reseñas, con última actualización el 1 de octubre de 2026.',
          'La sección Seguridad de los datos del desarrollador declara que no se recopilan datos ni se comparten con terceros: es una autodeclaración que PromptQuorum no ha auditado.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Ollama Local AI?', anchor: 'what-is-ollama-local-ai' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Cómo conectar tu IDE por Wi-Fi', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por la ficha', anchor: 'key-features' },
      { label: 'Privacidad y seguridad de los datos', anchor: 'privacy' },
      { label: 'Ventajas y limitaciones', anchor: 'tradeoffs' },
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
        title: 'Resumen',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama Local AI es una app de Android de FreeRouter Team que ejecuta modelos GGUF en el dispositivo mediante llama.cpp y sirve una API compatible con OpenAI en tu red local, y no está afiliada al proyecto Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas en un teléfono Android, cargas un modelo o añades tus claves de API en la nube, pulsas Start Server y luego apuntas herramientas como Cursor o VS Code a la dirección local del teléfono en lugar de a OpenAI: así el teléfono hace el trabajo, o retransmite la solicitud, en lugar de tu ordenador.',
          },
        ],
        items: [
          'Desarrollador: figura en [Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) como FreeRouter Team, categoría Productividad; la ficha no enlaza ningún sitio web ni repositorio.',
          'Precio: gratis de instalar, con compras dentro de la app cuyo contenido no se describe.',
          'Modelos en el dispositivo: archivos GGUF ejecutados mediante un motor llama.cpp integrado; la ficha menciona Llama 3, Mistral, Phi, Gemma y Qwen como ejemplos.',
          'Pasarela LAN: expone endpoints de estilo OpenAI a otros dispositivos de tu Wi-Fi y puede enrutar a modelos locales, Ollama autoalojado, servidores llama.cpp, OpenAI, Anthropic, NVIDIA NIM y Hugging Face.',
          'Indicadores de la tienda el 2 de octubre de 2026: más de 10 mil descargas, 4.2 estrellas con 267 reseñas, última actualización el 1 de octubre de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa únicamente en la ficha de Google Play, consultada el 2 de octubre de 2026. PromptQuorum no encontró código fuente público, licencia, documentación ni número de versión de la app, y no la ha probado ni evaluado con pruebas comparativas.',
          },
        ],
      },
      overview: {
        id: 'what-is-ollama-local-ai',
        title: '¿Qué es Ollama Local AI?',
        content: [
          '**Ollama Local AI es una app de Android que combina un ejecutor de modelos en el dispositivo con una pasarela de API para la red local.** Según su [ficha de Google Play](https://play.google.com/store/apps/details?id=com.llmproxy), ejecuta modelos GGUF cuantizados directamente en la CPU o GPU del teléfono mediante un motor [llama.cpp](https://github.com/ggml-org/llama.cpp) integrado, y también puede actuar como enrutador que reenvía solicitudes a otros backends que configures.',
          'El nombre es la principal fuente de confusión. El aviso final de la ficha indica que la app es una utilidad de un desarrollador independiente y que no está afiliada, patrocinada ni respaldada por Ollama, OpenAI, Anthropic ni ningún proveedor mencionado. La app puede conectarse a un servidor [Ollama](https://ollama.com) que alojes en otro lugar, pero no integra Ollama en sí. Los resultados de búsqueda y el nombre de paquete de Play (com.llmproxy) se refieren a la misma app.',
        ],
        note: 'GGUF es un formato de archivo para modelos de lenguaje de peso abierto cuantizados que entornos de ejecución como llama.cpp pueden cargar en hardware de consumo, incluidos los teléfonos.',
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**El único canal oficial al que apunta la ficha es Google Play; no se enlaza ninguna versión para iOS ni de escritorio, ningún espejo de APK ni ninguna publicación de GitHub.**',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)',
          },
          {
            'Plataforma': 'iOS / escritorio',
            'Dónde obtenerla': 'No disponible, según la ficha',
          },
        ],
        note: 'Esta página es material complementario de la entrada de la app en el [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). En el texto de la ficha que PromptQuorum pudo leer no aparece ningún número de versión, por lo que aquí no se indica ninguno; consulta la página de Play para ver la compilación actual.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo conectar tu IDE por Wi-Fi',
        content: [
          '**El inicio rápido de la propia ficha tiene cuatro pasos, todos realizados en el teléfono y en la misma red privada.** PromptQuorum no ha ejecutado estos pasos.',
        ],
        numberedItems: [
          {
            title: 'Iniciar el servidor',
            whyItMatters: 'Abre la app, elige un modelo GGUF local o introduce claves de proveedores en la nube y pulsa "Start Server".',
          },
          {
            title: 'Anotar el endpoint',
            whyItMatters: 'La app muestra la IP local y el puerto del teléfono, por ejemplo http://192.168.1.50:8080/v1 en el ejemplo de la propia ficha.',
          },
          {
            title: 'Apuntar tu herramienta al teléfono',
            whyItMatters: 'En Cursor, introduce cualquier valor de relleno como clave de OpenAI y sustituye la URL base. En extensiones de VS Code como Continue, Cline o Roo Code, establece el tipo de proveedor en openai y apiBase o baseUrl en la dirección del teléfono. En Windsurf, apunta los endpoints personalizados de modelos OpenAI hacia ella.',
          },
          {
            title: 'Empezar a programar',
            whyItMatters: 'Las solicitudes y los bucles de agente de la herramienta de escritorio los gestiona entonces el teléfono, ya sea con el modelo del dispositivo o con el proveedor al que enruta.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por la ficha',
        content: [
          '**Todo lo que figura a continuación proviene de la propia descripción de Play del desarrollador; nada se ha probado de forma independiente.**',
        ],
        items: [
          '**Endpoints de estilo OpenAI.** /v1/chat/completions, /v1/models y /health, accesibles desde cualquier equipo de la misma subred Wi-Fi o LAN.',
          '**Enrutamiento multiproveedor.** Cambia entre modelos en el dispositivo, instancias de Ollama autoalojadas, servidores llama.cpp y APIs directas en la nube (OpenAI, Anthropic Claude, NVIDIA NIM, Hugging Face).',
          '**Controles de proxy.** Pools de solicitudes, tiempos de espera por proveedor, limitación de tasa, conmutación por error automática y distribución round-robin.',
          '**Clústeres LAN Master/Worker.** Empareja varios dispositivos Android de una misma red para sumar memoria y capacidad de cálculo en un clúster de inferencia.',
          '**WebUI entre dispositivos.** Una interfaz de chat y una consola de gestión del servidor accesibles desde el navegador de un PC o una tableta de la misma red.',
          '**WebX Live Canvas.** Genera y previsualiza HTML, Tailwind CSS y JavaScript dentro del chat.',
          '**Traffic Observatory.** Velocidad de generación de tokens, métricas de latencia y contenido de las solicitudes mostrados como diagnósticos del proxy.',
          '**Clientes compatibles citados.** Cursor, VS Code, Windsurf, JetBrains, LangChain, LlamaIndex, LiteLLM, AutoGen, CrewAI, Continue.dev, Cline, Roo Code, Aider y Open WebUI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y seguridad de los datos',
        content: [
          '**La sección Seguridad de los datos de Google Play de la app declara que no se recopilan datos ni se comparten con terceros.** Es una autodeclaración del desarrollador, no el resultado de una auditoría, y PromptQuorum no ha inspeccionado el tráfico de red ni el código de la app.',
          'La descripción añade afirmaciones concretas: las credenciales de los proveedores se almacenan en el dispositivo con AES-256 EncryptedSharedPreferences, y las solicitudes a endpoints personalizados en la nube viajan directamente del teléfono al proveedor, sin servidor intermediario. El panorama de privacidad también depende del enrutamiento: una solicitud enviada a OpenAI, Anthropic u otro proveedor en la nube sale de tu red y se rige por los términos de ese proveedor, con independencia de la declaración de la propia app. Solo las solicitudes respondidas por un modelo en el dispositivo permanecen en el teléfono.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Hasta donde PromptQuorum pudo comprobar, la app es de código cerrado, por lo que las afirmaciones anteriores no pueden contrastarse con el código. Quien maneje datos regulados o confidenciales debería verificar el comportamiento por su cuenta antes de confiar en ellas.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'Uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'El teléfono como endpoint de API',
            'Uso real': 'Las herramientas de programación de escritorio pueden usar el modelo o las rutas del teléfono sin un servidor aparte.',
            'Limitación / advertencia': 'La velocidad está limitada por el hardware del teléfono y la ficha no ofrece pruebas comparativas.',
          },
          {
            'Ventaja': 'Modelos GGUF en el dispositivo',
            'Uso real': 'Los chats con modelos locales no necesitan conexión a internet, según la ficha.',
            'Limitación / advertencia': 'El tamaño de modelo utilizable depende de la RAM del teléfono; la ficha no indica ningún mínimo.',
          },
          {
            'Ventaja': 'Una pasarela, muchos backends',
            'Uso real': 'Modelos locales, Ollama, servidores llama.cpp y APIs en la nube quedan tras una sola dirección.',
            'Limitación / advertencia': 'Las solicitudes enrutadas a la nube salen de tu red y siguen los términos de datos del proveedor.',
          },
          {
            'Ventaja': 'Gratis de instalar',
            'Uso real': 'Puedes probar el flujo principal sin pagar primero.',
            'Limitación / advertencia': 'Existen compras dentro de la app y la ficha no describe su contenido.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Desarrolladores con un teléfono Android de sobra.** El inicio rápido con Cursor, VS Code y Windsurf es el caso de uso central de la app, y el teléfono descarga trabajo del PC principal.',
          '**Usuarios que quieren una única dirección estilo OpenAI frente a varios backends.** Los controles de enrutamiento, conmutación por error y límite de tasa apuntan a esa configuración.',
          '**Usuarios de laboratorio doméstico que se sienten cómodos probando una utilidad sin auditar en una red privada.** Una instalación gratuita hace que la prueba sea barata.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Licencia y código fuente.** Ninguno figura en la ficha y no se encontró ningún repositorio público, por lo que la app se trata como de código cerrado; quienes necesiten código auditable deberían elegir una app de código abierto de las alternativas siguientes.',
          '**Número de versión.** El texto de la ficha que PromptQuorum pudo leer no muestra ninguna versión, por lo que esta página no puede vincular sus afirmaciones a una compilación concreta.',
          '**Compras dentro de la app.** La ficha dice que existen, pero no qué desbloquean ni cuánto cuestan.',
          '**Requisitos de hardware y rendimiento.** No se publica ninguna RAM mínima, versión de Android ni cifras de velocidad.',
          '**Identidad del desarrollador.** La ficha muestra el nombre FreeRouter Team y un correo de contacto, sin sitio web ni datos de empresa.',
          '**No es para usuarios de iOS ni de escritorio.** La app es solo para Android.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            'App': 'Ollama Local AI',
            'Plataformas': 'Android',
            'Precio / licencia': 'Gratis + compras / no indicada',
            'Diferencia clave': 'Sirve una API compatible con OpenAI a tu LAN y enruta a backends en la nube y autoalojados',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'Android, iOS',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Cliente de chat de código abierto en el dispositivo; sin servidor de API LAN en su diseño central',
          },
          {
            'App': '[Maid](/es/power-local-llm/maid-review)',
            'Plataformas': 'Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'App de chat de código abierto para GGUF locales o proveedores remotos; un cliente, no una pasarela de red',
          },
          {
            'App': '[RikkaHub](/es/power-local-llm/rikkahub-review)',
            'Plataformas': 'Android',
            'Precio / licencia': 'Gratis / código abierto',
            'Diferencia clave': 'Cliente de chat multiproveedor, en lugar de un servidor para otros dispositivos',
          },
          {
            'App': '[Layla](/es/power-local-llm/layla-review)',
            'Plataformas': 'Android, iOS',
            'Precio / licencia': 'De pago / código cerrado',
            'Diferencia clave': 'Enfoque en compañero y rol, con un modo en la nube opcional',
          },
        ],
        note: 'Los detalles de los competidores cambian a menudo; confirma el precio y la licencia actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Ollama Local AI está hecha por el equipo de Ollama?',
            a: 'No. El aviso de la ficha indica que la app es independiente y que no está afiliada ni respaldada por Ollama. Puede conectarse a un servidor Ollama que ejecutes tú mismo, pero incluye su propio motor llama.cpp.',
          },
          {
            q: '¿Cuál es el nombre de paquete en Google Play?',
            a: 'El ID del paquete es com.llmproxy, por lo que la app aparece en búsquedas de "LLM Proxy" aunque su nombre en la tienda sea Ollama Local AI.',
          },
          {
            q: '¿Funciona en iPhone o en escritorio?',
            a: 'No según la ficha: Google Play es el único canal que enlaza y no se menciona ninguna versión para iOS ni de escritorio.',
          },
          {
            q: '¿Qué modelos puede ejecutar en el teléfono?',
            a: 'Modelos en formato GGUF mediante llama.cpp. La ficha menciona Llama 3, Mistral, Phi, Gemma y Qwen como ejemplos; los tamaños que caben dependen de la RAM de tu teléfono, algo que la ficha no especifica.',
          },
          {
            q: '¿Puedo usarla con Cursor o VS Code?',
            a: 'La ficha describe exactamente eso: inicia el servidor en el teléfono y luego establece la URL base de OpenAI de la herramienta en la dirección local del teléfono. PromptQuorum no ha probado los pasos.',
          },
          {
            q: '¿Mis datos permanecen en el teléfono?',
            a: 'Solo en el caso de las solicitudes respondidas por un modelo en el dispositivo. Las solicitudes enrutadas a OpenAI, Anthropic, NVIDIA NIM o Hugging Face van a esos proveedores, y la declaración del desarrollador de que no recopila datos no está auditada.',
          },
          {
            q: '¿Es de código abierto?',
            a: 'No se indica ninguna licencia ni repositorio, y no se encontró ninguno, por lo que PromptQuorum la clasifica como de código cerrado. Si el desarrollador publica alguno, este análisis se actualizará.',
          },
          {
            q: '¿Qué desbloquean las compras dentro de la app?',
            a: 'La ficha no lo indica. Compruébalo dentro de la app antes de comprar y usa el plazo de reembolso de Google Play si el resultado no es el esperado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Ollama Local AI responde a una necesidad concreta y real: usar un teléfono Android como endpoint compatible con OpenAI para herramientas de programación de escritorio y, a la vez, ejecutar modelos GGUF en el dispositivo. La ficha de Play describe un conjunto de funciones que va más allá de la mayoría de las apps de chat para teléfono —servicio en la LAN, enrutamiento multiproveedor, conmutación por error, clústeres y diagnósticos de tráfico—, y los indicadores de la tienda, con más de 10 mil descargas y una calificación de 4.2, sugieren un uso real. En contra, la app es una utilidad cerrada y sin auditar de un desarrollador sin sitio web visible, su versión, licencia, requisitos de hardware y alcance de las compras no están publicados, y su nombre invita a confundirla con el proyecto Ollama. Es adecuada para desarrolladores que quieran experimentar con una configuración de teléfono como pasarela en una red privada; quienes necesiten código auditable o compatibilidad con iOS deberían empezar por [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Maid](/es/power-local-llm/maid-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Ollama Local AI en Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) — descripción, nombre del desarrollador, declaración de Seguridad de los datos, número de descargas, calificación y fecha de última actualización, consultados el 2 de octubre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para Android e iOS.',
          '[Análisis de Maid](/es/power-local-llm/maid-review) — una app de Android de código abierto para GGUF locales o proveedores remotos.',
          '[Análisis de RikkaHub](/es/power-local-llm/rikkahub-review) — un cliente multiproveedor para Android.',
          '[Análisis de Layla](/es/power-local-llm/layla-review) — una app de pago en el dispositivo con enfoque de compañero.',
          '[Análisis de LiteLLM](/es/power-local-llm/litellm-review) — la vía de escritorio y de servidor hacia la misma idea de un único endpoint.',
          '[Mejores apps de LLM locales para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el resumen más amplio para Android.',
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
    heroImage: '/images/ollama-local-ai-review-hero-fr.webp',
    title: 'Ollama Local AI : Avis — Exécuteur de LLM Android et Proxy d\'API sur le LAN',
    seoTitle: 'Avis Ollama Local AI : LLM Android et proxy d\'API',
    intro:
      'Ollama Local AI est une application Android d\'un développeur répertorié sur Google Play sous le nom [FreeRouter Team](https://play.google.com/store/apps/details?id=com.llmproxy), qui remplit deux fonctions : elle exécute des modèles de langage GGUF sur le téléphone grâce à un moteur llama.cpp embarqué, et elle expose une API compatible OpenAI sur votre Wi-Fi afin que des outils comme Cursor, des extensions VS Code et Windsurf puissent utiliser le téléphone comme point de terminaison de modèle. Elle est gratuite à installer avec des achats intégrés et, malgré son nom, elle n\'est ni créée par le projet Ollama ni affiliée à celui-ci. Cet avis se fonde uniquement sur la fiche Google Play de l\'application, car aucun dépôt de code source public, site web de développeur ni documentation n\'a été trouvé, et PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription:
      'Avis Ollama Local AI : app Android qui exécute des modèles GGUF sur l\'appareil et sert une API compatible OpenAI sur votre LAN. Ce que la fiche confirme ou non.',
    twitterDescription:
      'Avis Ollama Local AI : une app Android qui transforme votre téléphone en exécuteur de LLM local et en passerelle LAN compatible OpenAI. Ce n\'est pas le projet Ollama — et ce que la fiche Play ne dit pas.',
    audience:
      'Utilisateurs et développeurs Android qui veulent exécuter des modèles GGUF sur un téléphone ou diriger leurs outils de codage de bureau vers leur téléphone via le Wi-Fi local, et qui ont besoin de savoir précisément ce que la fiche publique confirme et ne confirme pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis Ollama Local AI',
    targetKeywords: [
      'ollama local ai android',
      'avis application ollama local ai',
      'com.llmproxy',
      'serveur compatible openai android',
      'exécuter un llm sur téléphone android en réseau local',
      'proxy llm android cursor vs code',
      'application android freerouter team',
    ],
    current_models_mentioned: ['Llama 3', 'Mistral', 'Phi', 'Gemma', 'Qwen'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Ollama Local AI est une application Android gratuite à installer (paquet Google Play com.llmproxy, répertoriée sous le nom de développeur FreeRouter Team) qui exécute des modèles GGUF sur l\'appareil via llama.cpp et sert une API compatible OpenAI aux autres appareils de votre Wi-Fi.** Elle peut aussi transmettre des requêtes à une instance Ollama auto-hébergée, à un serveur llama.cpp ou à des API cloud comme OpenAI et Anthropic. Elle ne fait pas partie du projet Ollama — la fiche l\'indique elle-même — et aucune licence, aucun code source ni aucun numéro de version n\'est publié ; il convient donc de la traiter comme un utilitaire fermé et non audité jusqu\'à nouvel ordre du développeur.',
    quickAnswerTop: {
      fr: {
        question: 'Ollama Local AI est-elle l\'application Ollama officielle pour Android ?',
        answer:
          'Non. La description Google Play de l\'application indique elle-même qu\'il s\'agit d\'un utilitaire de développeur indépendant, non affilié, non sponsorisé et non approuvé par Ollama, OpenAI, Anthropic ou tout autre fournisseur cité. Elle partage le nom mais exécute son propre moteur llama.cpp embarqué et peut, en option, se connecter à un serveur Ollama que vous hébergez vous-même.',
        bullets: [
          'Deux fonctions : exécuter des modèles GGUF sur le téléphone, et servir une API compatible OpenAI (/v1/chat/completions, /v1/models, /health) aux appareils du même réseau.',
          'Android uniquement, gratuite à installer avec des achats intégrés ; la fiche n\'indique pas ce que ces achats débloquent.',
          'Google Play affiche plus de 10 000 téléchargements et une note de 4,2 sur 267 avis, dernière mise à jour le 1er octobre 2026.',
          'La section Sécurité des données du développeur déclare qu\'aucune donnée n\'est collectée et qu\'aucune n\'est partagée avec des tiers — une déclaration que PromptQuorum n\'a pas auditée.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce qu\'Ollama Local AI ?', anchor: 'what-is-ollama-local-ai' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Connecter votre IDE via le Wi-Fi', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par la fiche', anchor: 'key-features' },
      { label: 'Confidentialité et sécurité des données', anchor: 'privacy' },
      { label: 'Compromis : avantages et limites', anchor: 'tradeoffs' },
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
            text: 'Ollama Local AI est une application Android de FreeRouter Team qui exécute des modèles GGUF sur l\'appareil via llama.cpp et sert une API compatible OpenAI sur votre réseau local, sans être affiliée au projet Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'On l\'installe sur un téléphone Android, on charge un modèle ou on ajoute ses clés d\'API cloud, on appuie sur « Start Server », puis on dirige des outils comme Cursor ou VS Code vers l\'adresse locale du téléphone au lieu d\'OpenAI — c\'est donc le téléphone qui fait le travail, ou qui relaie la requête, à la place de votre ordinateur.',
          },
        ],
        items: [
          'Développeur : répertorié sur [Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) sous le nom FreeRouter Team, catégorie Productivité ; aucun site web ni dépôt n\'est lié depuis la fiche.',
          'Prix : gratuite à installer, avec des achats intégrés dont le contenu n\'est pas décrit.',
          'Modèles sur l\'appareil : des fichiers GGUF exécutés par un moteur llama.cpp embarqué ; la fiche cite Llama 3, Mistral, Phi, Gemma et Qwen comme exemples.',
          'Passerelle LAN : expose des points de terminaison de type OpenAI aux autres appareils de votre Wi-Fi et peut router vers des modèles locaux, Ollama auto-hébergé, des serveurs llama.cpp, OpenAI, Anthropic, NVIDIA NIM et Hugging Face.',
          'Indicateurs de la boutique au 2 octobre 2026 : plus de 10 000 téléchargements, 4,2 étoiles sur 267 avis, dernière mise à jour le 1er octobre 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde uniquement sur la fiche Google Play, consultée le 2 octobre 2026. PromptQuorum n\'a trouvé ni code source public, ni licence, ni documentation, ni numéro de version pour l\'application, et ne l\'a ni testée ni évaluée par benchmark.',
          },
        ],
      },
      overview: {
        id: 'what-is-ollama-local-ai',
        title: 'Qu\'est-ce qu\'Ollama Local AI ?',
        content: [
          '**Ollama Local AI est une application Android qui combine un exécuteur de modèles sur l\'appareil et une passerelle d\'API pour réseau local.** Selon sa [fiche Google Play](https://play.google.com/store/apps/details?id=com.llmproxy), elle exécute des modèles GGUF quantifiés directement sur le CPU ou le GPU du téléphone grâce à un moteur [llama.cpp](https://github.com/ggml-org/llama.cpp) embarqué, et peut aussi servir de routeur qui transmet les requêtes à d\'autres backends que vous configurez.',
          'Le nom est la principale source de confusion. L\'avertissement final de la fiche indique que l\'application est un utilitaire de développeur indépendant, non affilié, non sponsorisé et non approuvé par Ollama, OpenAI, Anthropic ni aucun fournisseur mentionné. L\'application peut se connecter à un serveur [Ollama](https://ollama.com) que vous hébergez ailleurs, mais elle n\'embarque pas Ollama lui-même. Les résultats de recherche et le nom de paquet Play (com.llmproxy) désignent la même application.',
        ],
        note: 'GGUF est un format de fichier pour modèles de langage à poids ouverts quantifiés, que des moteurs d\'exécution comme llama.cpp peuvent charger sur du matériel grand public, y compris des téléphones.',
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**Le seul canal officiel vers lequel la fiche renvoie est Google Play ; aucune version iOS, aucune version de bureau, aucun miroir d\'APK ni aucune release GitHub n\'est lié.**',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)',
          },
          {
            'Plateforme': 'iOS / bureau',
            'Où la trouver': 'Non proposée, selon la fiche',
          },
        ],
        note: 'Cette page est un complément à l\'entrée de l\'application dans le [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Aucun numéro de version n\'apparaît dans le texte de la fiche que PromptQuorum a pu lire ; il n\'en est donc indiqué aucun ici — consultez la page Play pour la version actuelle.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Connecter votre IDE via le Wi-Fi',
        content: [
          '**Le démarrage rapide de la fiche comporte quatre étapes, toutes réalisées sur le téléphone et sur le même réseau privé.** PromptQuorum n\'a pas exécuté ces étapes.',
        ],
        numberedItems: [
          {
            title: 'Lancer le serveur',
            whyItMatters: 'Ouvrez l\'application, choisissez un modèle GGUF local ou saisissez des clés de fournisseurs cloud, puis appuyez sur « Start Server ».',
          },
          {
            title: 'Noter le point de terminaison',
            whyItMatters: 'L\'application affiche l\'IP locale et le port du téléphone, par exemple http://192.168.1.50:8080/v1 dans l\'exemple de la fiche elle-même.',
          },
          {
            title: 'Diriger votre outil vers lui',
            whyItMatters: 'Dans Cursor, saisissez n\'importe quelle valeur factice comme clé OpenAI et remplacez l\'URL de base. Dans les extensions VS Code comme Continue, Cline ou Roo Code, réglez le type de fournisseur sur openai et apiBase ou baseUrl sur l\'adresse du téléphone. Dans Windsurf, dirigez les points de terminaison de modèles OpenAI personnalisés vers lui.',
          },
          {
            title: 'Commencer à coder',
            whyItMatters: 'Les requêtes et les boucles d\'agent de l\'outil de bureau sont alors traitées par le téléphone, soit par le modèle sur l\'appareil, soit par le fournisseur vers lequel il route.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par la fiche',
        content: [
          '**Chaque élément ci-dessous provient de la description Play du développeur ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Points de terminaison de type OpenAI.** /v1/chat/completions, /v1/models et /health, accessibles depuis toute machine du même Wi-Fi ou sous-réseau LAN.',
          '**Routage multi-fournisseurs.** Bascule entre modèles sur l\'appareil, instances Ollama auto-hébergées, serveurs llama.cpp et API cloud directes (OpenAI, Anthropic Claude, NVIDIA NIM, Hugging Face).',
          '**Contrôles du proxy.** Files de requêtes, délais d\'expiration par fournisseur, limitation de débit, basculement automatique et répartition en round-robin.',
          '**Clustering LAN Master/Worker.** Associez plusieurs appareils Android d\'un même réseau pour mutualiser mémoire et puissance de calcul en un cluster d\'inférence.',
          '**WebUI multi-appareils.** Une interface de chat et une console de gestion du serveur accessibles depuis le navigateur d\'un PC ou d\'une tablette sur le même réseau.',
          '**WebX Live Canvas.** Génère et prévisualise du HTML, du Tailwind CSS et du JavaScript directement dans le chat.',
          '**Traffic Observatory.** Vitesse de génération de tokens, métriques de latence et contenus des requêtes affichés comme diagnostics du proxy.',
          '**Clients compatibles cités.** Cursor, VS Code, Windsurf, JetBrains, LangChain, LlamaIndex, LiteLLM, AutoGen, CrewAI, Continue.dev, Cline, Roo Code, Aider et Open WebUI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et sécurité des données',
        content: [
          '**La section Sécurité des données de Google Play de l\'application déclare qu\'aucune donnée n\'est collectée et qu\'aucune n\'est partagée avec des tiers.** Il s\'agit d\'une déclaration du développeur, non d\'un résultat d\'audit, et PromptQuorum n\'a inspecté ni le trafic réseau ni le code de l\'application.',
          'La description ajoute des affirmations précises : les identifiants des fournisseurs sont stockés sur l\'appareil avec AES-256 EncryptedSharedPreferences, et les requêtes vers des points de terminaison cloud personnalisés vont directement du téléphone au fournisseur, sans serveur intermédiaire. Le tableau de la confidentialité dépend aussi du routage : une requête envoyée à OpenAI, Anthropic ou un autre fournisseur cloud quitte votre réseau et relève des conditions de ce fournisseur, quelle que soit la déclaration de l\'application. Seules les requêtes traitées par un modèle sur l\'appareil restent sur le téléphone.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'À notre connaissance, l\'application est à code source fermé, de sorte que les affirmations ci-dessus ne peuvent pas être vérifiées par rapport au code. Quiconque traite des données réglementées ou confidentielles doit vérifier lui-même le comportement avant de s\'y fier.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: ['Avantage', 'En pratique', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Téléphone comme point de terminaison d\'API',
            'En pratique': 'Les outils de codage de bureau peuvent utiliser le modèle ou les routes du téléphone sans serveur distinct.',
            'Limite / réserve': 'La vitesse est limitée par le matériel du téléphone, et la fiche ne donne aucun benchmark.',
          },
          {
            'Avantage': 'Modèles GGUF sur l\'appareil',
            'En pratique': 'Les conversations avec des modèles locaux ne nécessitent aucune connexion internet, selon la fiche.',
            'Limite / réserve': 'La taille de modèle utilisable dépend de la RAM du téléphone ; la fiche n\'indique aucun minimum.',
          },
          {
            'Avantage': 'Une passerelle, plusieurs backends',
            'En pratique': 'Modèles locaux, Ollama, serveurs llama.cpp et API cloud sont regroupés derrière une seule adresse.',
            'Limite / réserve': 'Les requêtes routées vers le cloud quittent votre réseau et suivent les conditions de données du fournisseur.',
          },
          {
            'Avantage': 'Gratuite à installer',
            'En pratique': 'Vous pouvez essayer le flux principal sans payer d\'abord.',
            'Limite / réserve': 'Des achats intégrés existent et leur contenu n\'est pas décrit dans la fiche.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Développeurs disposant d\'un téléphone Android de rechange.** Le démarrage rapide avec Cursor, VS Code et Windsurf est le cas d\'usage central de l\'application, et le téléphone décharge le PC principal.',
          '**Utilisateurs qui veulent une seule adresse de type OpenAI devant plusieurs backends.** Les contrôles de routage, de basculement et de limitation de débit visent cette configuration.',
          '**Utilisateurs de home lab à l\'aise pour tester un utilitaire non audité sur un réseau privé.** Une installation gratuite rend l\'essai peu coûteux.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Licence et code source.** Ni l\'une ni l\'autre n\'est indiquée sur la fiche et aucun dépôt public n\'a été trouvé ; l\'application est donc traitée comme étant à code source fermé ; les lecteurs qui ont besoin d\'un code auditable devraient choisir une application open source parmi les alternatives ci-dessous.',
          '**Numéro de version.** Le texte de la fiche que PromptQuorum a pu lire n\'indique aucune version ; cette page ne peut donc pas rattacher ses affirmations à une build précise.',
          '**Achats intégrés.** La fiche indique qu\'ils existent, mais pas ce qu\'ils débloquent ni ce qu\'ils coûtent.',
          '**Matériel minimal et performances.** Aucune RAM minimale, version d\'Android ni chiffre de vitesse n\'est publié.',
          '**Identité du développeur.** La fiche indique le nom FreeRouter Team et une adresse e-mail de contact, sans site web ni informations sur une société.',
          '**Pas pour les utilisateurs d\'iOS ou de bureau.** L\'application est réservée à Android.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            'Application': 'Ollama Local AI',
            'Plateformes': 'Android',
            'Prix / licence': 'Gratuite + achats intégrés / non indiquée',
            'Différence clé': 'Sert une API compatible OpenAI sur votre LAN et route vers des backends cloud et auto-hébergés',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'Android, iOS',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Client de chat open source sur l\'appareil ; pas de serveur d\'API LAN dans sa conception de base',
          },
          {
            'Application': '[Maid](/fr/power-local-llm/maid-review)',
            'Plateformes': 'Android',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Application de chat open source pour GGUF local ou fournisseurs distants ; un client, pas une passerelle réseau',
          },
          {
            'Application': '[RikkaHub](/fr/power-local-llm/rikkahub-review)',
            'Plateformes': 'Android',
            'Prix / licence': 'Gratuite / open source',
            'Différence clé': 'Client de chat multi-fournisseurs plutôt qu\'un serveur pour d\'autres appareils',
          },
          {
            'Application': '[Layla](/fr/power-local-llm/layla-review)',
            'Plateformes': 'Android, iOS',
            'Prix / licence': 'Payante / code source fermé',
            'Différence clé': 'Orientée compagnon et jeu de rôle, avec un mode cloud optionnel',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix et la licence actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Ollama Local AI est-elle créée par l\'équipe Ollama ?',
            a: 'Non. L\'avertissement de la fiche indique que l\'application est indépendante et non affiliée ni approuvée par Ollama. Elle peut se connecter à un serveur Ollama que vous exploitez vous-même, mais elle embarque son propre moteur llama.cpp.',
          },
          {
            q: 'Quel est le nom de paquet sur Google Play ?',
            a: 'L\'identifiant du paquet est com.llmproxy, ce qui explique que l\'application apparaisse dans les recherches « LLM Proxy » alors que son nom dans la boutique est Ollama Local AI.',
          },
          {
            q: 'Fonctionne-t-elle sur iPhone ou sur ordinateur ?',
            a: 'Pas d\'après la fiche : Google Play est le seul canal qu\'elle indique, et aucune version iOS ou de bureau n\'est mentionnée.',
          },
          {
            q: 'Quels modèles peut-elle exécuter sur le téléphone ?',
            a: 'Des modèles au format GGUF via llama.cpp. La fiche cite Llama 3, Mistral, Phi, Gemma et Qwen comme exemples ; les tailles qui conviennent dépendent de la RAM de votre téléphone, que la fiche ne précise pas.',
          },
          {
            q: 'Puis-je l\'utiliser avec Cursor ou VS Code ?',
            a: 'La fiche décrit exactement cela : démarrer le serveur sur le téléphone, puis régler l\'URL de base OpenAI de l\'outil sur l\'adresse locale du téléphone. PromptQuorum n\'a pas testé ces étapes.',
          },
          {
            q: 'Mes données restent-elles sur le téléphone ?',
            a: 'Seulement pour les requêtes traitées par un modèle sur l\'appareil. Les requêtes routées vers OpenAI, Anthropic, NVIDIA NIM ou Hugging Face vont chez ces fournisseurs, et la déclaration de non-collecte de données du développeur n\'est pas auditée.',
          },
          {
            q: 'Est-elle open source ?',
            a: 'Aucune licence ni aucun dépôt n\'est indiqué, et aucun n\'a été trouvé ; PromptQuorum la répertorie donc comme étant à code source fermé. Si le développeur en publie un, cet avis sera mis à jour.',
          },
          {
            q: 'Que débloquent les achats intégrés ?',
            a: 'La fiche ne le dit pas. Vérifiez dans l\'application avant d\'acheter, et utilisez le délai de remboursement de Google Play si le résultat ne correspond pas à vos attentes.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Ollama Local AI répond à un besoin étroit mais réel : utiliser un téléphone Android comme point de terminaison compatible OpenAI pour des outils de codage de bureau, tout en exécutant des modèles GGUF sur l\'appareil. La fiche Play décrit un ensemble de fonctions qui va plus loin que la plupart des applications de chat pour téléphone — service LAN, routage multi-fournisseurs, basculement, clustering et diagnostics de trafic — et les indicateurs de la boutique, plus de 10 000 téléchargements et une note de 4,2, laissent penser à un usage réel. En face, l\'application est un utilitaire fermé et non audité, d\'un développeur sans site web visible, dont la version, la licence, le matériel minimal et la portée des achats ne sont pas publiés, et son nom prête à confusion avec le projet Ollama. Elle convient aux développeurs qui veulent expérimenter une configuration téléphone-passerelle sur un réseau privé ; les lecteurs qui ont besoin d\'un code auditable ou d\'une prise en charge d\'iOS devraient commencer par [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Maid](/fr/power-local-llm/maid-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama Local AI sur Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) — description, nom du développeur, déclaration de sécurité des données, nombre de téléchargements, note et date de dernière mise à jour, consultés le 2 octobre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l\'appareil pour Android et iOS.',
          '[Avis Maid](/fr/power-local-llm/maid-review) — une application Android open source pour GGUF local ou fournisseurs distants.',
          '[Avis RikkaHub](/fr/power-local-llm/rikkahub-review) — un client Android multi-fournisseurs.',
          '[Avis Layla](/fr/power-local-llm/layla-review) — une application payante sur l\'appareil de type compagnon.',
          '[Avis LiteLLM](/fr/power-local-llm/litellm-review) — la voie côté bureau et serveur vers la même idée de point de terminaison unique.',
          '[Meilleures applications LLM locales pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama Android plus large.',
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
    heroImage: '/images/ollama-local-ai-review-hero-ja.webp',
    title: 'Ollama Local AI レビュー:Android向けLLM実行アプリ兼LAN APIプロキシ',
    seoTitle: 'Ollama Local AI レビュー:AndroidのLLM実行・プロキシ',
    intro:
      'Ollama Local AIは、Google Playで[FreeRouter Team](https://play.google.com/store/apps/details?id=com.llmproxy)という開発者名で掲載されているAndroidアプリで、2つの役割を担います。1つは、組み込みのllama.cppエンジンを通じてスマートフォン上でGGUF形式の言語モデルを動かすこと、もう1つは、Wi-Fi上にOpenAI互換APIを公開し、Cursor、VS Code拡張機能、Windsurfなどのツールがスマートフォンをモデルのエンドポイントとして使えるようにすることです。インストールは無料でアプリ内課金があり、名前に反してOllamaプロジェクトが開発したものでも、同プロジェクトと提携しているものでもありません。公開ソースリポジトリ、開発者のウェブサイト、ドキュメントのいずれも見つからず、PromptQuorumもアプリを実際には試していないため、本レビューはGoogle Playの掲載情報のみに基づいています。',
    metaDescription:
      'Ollama Local AIレビュー:GGUFモデルを端末上で動かし、LAN上にOpenAI互換APIを公開するAndroidアプリ。Google Playの掲載情報で確認できる点と、未確認の点を整理して解説します。',
    twitterDescription:
      'Ollama Local AIレビュー:スマートフォンをオンデバイスLLM実行環境兼OpenAI互換LANゲートウェイに変えるAndroidアプリ。Ollamaプロジェクトとは無関係で、Play掲載情報に記載のない点も解説します。',
    audience:
      'GGUFモデルをスマートフォンで動かしたい、またはローカルWi-Fi経由でデスクトップのコーディングツールをスマートフォンに接続したいAndroidユーザーと開発者で、公開されている掲載情報が何を確認し何を確認していないのかを正確に知りたい方向け。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Ollama Local AI レビュー',
    targetKeywords: [
      'ollama local ai android',
      'ollama local ai アプリ レビュー',
      'com.llmproxy',
      'android openai互換 サーバー',
      'androidスマホ llm lan 公開',
      'android llm プロキシ cursor vs code',
      'freerouter team androidアプリ',
    ],
    current_models_mentioned: ['Llama 3', 'Mistral', 'Phi', 'Gemma', 'Qwen'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Ollama Local AIは、インストール無料のAndroidアプリ(Google Playのパッケージ名はcom.llmproxy、開発者名はFreeRouter Team)で、llama.cppを使ってGGUFモデルを端末上で動かし、Wi-Fi上の他のデバイスにOpenAI互換APIを提供します。** リクエストを、自己ホスト型のOllamaインスタンス、llama.cppサーバー、OpenAIやAnthropicなどのクラウドAPIに転送することもできます。Ollamaプロジェクトの一部ではなく(掲載情報自体がそう明記しています)、ライセンス、ソースコード、バージョン番号も公開されていないため、開発者が別途示すまでは、クローズドで監査されていないユーティリティとして扱ってください。',
    quickAnswerTop: {
      ja: {
        question: 'Ollama Local AIはAndroid向けの公式Ollamaアプリですか?',
        answer:
          'いいえ。アプリ自身のGoogle Play説明には、独立した開発者のユーティリティであり、Ollama、OpenAI、Anthropic、その他の名前が挙がっているプロバイダーのいずれとも提携・後援・推奨関係にないと記載されています。名前は共通していますが、独自の組み込みllama.cppエンジンを動かし、ユーザーが自分でホストするOllamaサーバーにオプションで接続できます。',
        bullets: [
          '2つの機能:端末上でGGUFモデルを動かすことと、同じネットワーク上のデバイスにOpenAI互換API(/v1/chat/completions、/v1/models、/health)を提供すること。',
          'Android専用、インストール無料でアプリ内課金あり。課金で何が解放されるかは掲載情報に記載されていない。',
          'Google Playでは10K+ダウンロード、267件のレビューで4.2の評価、最終更新は2026年10月1日と表示されている。',
          '開発者のデータセーフティのセクションには、収集するデータなし、第三者と共有するデータなしと申告されている — PromptQuorumが監査していない自己申告である。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Ollama Local AIとは?', anchor: 'what-is-ollama-local-ai' },
      { label: '入手方法', anchor: 'get-it' },
      { label: 'Wi-FiでIDEを接続する方法', anchor: 'getting-started' },
      { label: '掲載情報で確認できる機能', anchor: 'key-features' },
      { label: 'プライバシーとデータセーフティ', anchor: 'privacy' },
      { label: 'トレードオフ:利点と制約', anchor: 'tradeoffs' },
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
            text: 'Ollama Local AIは、FreeRouter Teamが開発したAndroidアプリで、llama.cppを使ってGGUFモデルを端末上で動かし、ローカルネットワーク上にOpenAI互換APIを提供するもので、Ollamaプロジェクトとは提携していない。',
          },
          {
            type: 'plain-terms',
            text: 'Androidスマートフォンにインストールし、モデルを読み込むかクラウドのAPIキーを追加して「Start Server」をタップすると、CursorやVS Codeなどのツールの接続先をOpenAIではなくスマートフォンのローカルアドレスに向けられます。つまり、パソコンの代わりにスマートフォンが処理を行うか、リクエストを中継します。',
          },
        ],
        items: [
          '開発者:[Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)ではFreeRouter Team、カテゴリは仕事効率化(Productivity)として掲載。掲載情報からウェブサイトやリポジトリへのリンクはない。',
          '料金:インストール無料、アプリ内課金あり(内容は説明されていない)。',
          'オンデバイスモデル:GGUFファイルを組み込みのllama.cppエンジンで実行。掲載情報ではLlama 3、Mistral、Phi、Gemma、Qwenが例として挙げられている。',
          'LANゲートウェイ:Wi-Fi上の他のデバイスにOpenAI形式のエンドポイントを公開し、ローカルモデル、自己ホスト型Ollama、llama.cppサーバー、OpenAI、Anthropic、NVIDIA NIM、Hugging Faceへ振り分けられる。',
          '2026年10月2日時点のストア指標:10K+ダウンロード、267件のレビューで星4.2、最終更新は2026年10月1日。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月2日に確認したGoogle Playの掲載情報のみに基づいています。PromptQuorumは、このアプリの公開ソースコード、ライセンス、ドキュメント、バージョン番号を見つけられず、テストやベンチマークも行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-ollama-local-ai',
        title: 'Ollama Local AIとは?',
        content: [
          '**Ollama Local AIは、オンデバイスのモデル実行機能とローカルネットワーク向けAPIゲートウェイを組み合わせたAndroidアプリです。** [Google Playの掲載情報](https://play.google.com/store/apps/details?id=com.llmproxy)によれば、組み込みの[llama.cpp](https://github.com/ggml-org/llama.cpp)エンジンを通じて、量子化されたGGUFモデルをスマートフォンのCPUまたはGPU上で直接実行し、設定した他のバックエンドへリクエストを転送するルーターとしても動作できます。',
          '混乱の主な原因は名前です。掲載情報の末尾にある免責事項には、このアプリは独立した開発者のユーティリティであり、Ollama、OpenAI、Anthropic、または言及されているプロバイダーのいずれとも提携・後援・推奨関係にないと記載されています。アプリは別の場所でホストしている[Ollama](https://ollama.com)サーバーに接続できますが、Ollama自体は組み込まれていません。検索結果とGoogle Playのパッケージ名(com.llmproxy)は、同じアプリを指しています。',
        ],
        note: 'GGUFは、量子化されたオープンウェイトの言語モデルを、llama.cppなどのランタイムがスマートフォンを含む一般向けハードウェア上で読み込めるようにするためのファイル形式です。',
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**掲載情報が示している唯一の公式な入手経路はGoogle Playで、iOS版、デスクトップ版、APKミラー、GitHubリリースへのリンクはありません。**',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)',
          },
          {
            'プラットフォーム': 'iOS / デスクトップ',
            '入手先': '提供なし(掲載情報による)',
          },
        ],
        note: 'このページは、[Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)にある本アプリの項目の補足資料です。PromptQuorumが読み取れた掲載情報のテキストにはバージョン番号が示されていないため、ここでも記載していません。現在のビルドはPlayのページで確認してください。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Wi-FiでIDEを接続する方法',
        content: [
          '**掲載情報自体のクイックスタートは4つのステップで、すべてスマートフォン上と同じプライベートネットワーク内で行います。** PromptQuorumはこれらの手順を実行していません。',
        ],
        numberedItems: [
          {
            title: 'サーバーを起動する',
            whyItMatters: 'アプリを開き、ローカルのGGUFモデルを選ぶかクラウドプロバイダーのキーを入力して、「Start Server」をタップします。',
          },
          {
            title: 'エンドポイントを確認する',
            whyItMatters: 'アプリにはスマートフォンのローカルIPとポートが表示されます。掲載情報自体の例ではhttp://192.168.1.50:8080/v1です。',
          },
          {
            title: 'ツールの接続先を向ける',
            whyItMatters: 'Cursorでは、OpenAIキーに任意のプレースホルダーを入力し、ベースURLを上書きします。Continue、Cline、Roo CodeなどのVS Code拡張機能では、プロバイダータイプをopenaiに設定し、apiBaseまたはbaseUrlをスマートフォンのアドレスにします。Windsurfでは、カスタムOpenAIモデルのエンドポイントをスマートフォンに向けます。',
          },
          {
            title: 'コーディングを始める',
            whyItMatters: 'デスクトップツールからのリクエストやエージェントのループは、オンデバイスモデル、または振り分け先のプロバイダーを通じて、スマートフォンが処理します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '掲載情報で確認できる機能',
        content: [
          '**以下の項目はすべて開発者自身のPlay説明に由来するもので、いずれも独自にテストされていません。**',
        ],
        items: [
          '**OpenAI形式のエンドポイント。** /v1/chat/completions、/v1/models、/healthに、同じWi-FiまたはLANサブネット上のどのマシンからでもアクセスできる。',
          '**マルチプロバイダーのルーティング。** オンデバイスモデル、自己ホスト型Ollamaインスタンス、llama.cppサーバー、クラウドAPI(OpenAI、Anthropic Claude、NVIDIA NIM、Hugging Face)を直接切り替えられる。',
          '**プロキシの制御機能。** リクエストプール、プロバイダーのタイムアウト、レート制限、自動フェイルオーバー、ラウンドロビン分散。',
          '**LAN Master/Workerクラスタリング。** 同じネットワーク上の複数のAndroid端末をペアリングし、メモリと計算資源を推論クラスターにまとめる。',
          '**クロスデバイスWebUI。** 同じネットワーク上のPCやタブレットのブラウザからアクセスできるチャットインターフェースとサーバー管理コンソール。',
          '**WebX Live Canvas。** チャット内でHTML、Tailwind CSS、JavaScriptを生成してプレビューできる。',
          '**Traffic Observatory。** トークン生成速度、レイテンシ指標、リクエストのペイロードをプロキシの診断情報として表示する。',
          '**対応クライアントとして記載。** Cursor、VS Code、Windsurf、JetBrains、LangChain、LlamaIndex、LiteLLM、AutoGen、CrewAI、Continue.dev、Cline、Roo Code、Aider、Open WebUI。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータセーフティ',
        content: [
          '**このアプリのGoogle Playデータセーフティのセクションには、データを収集せず、第三者とも共有しないと申告されています。** これは開発者による自己申告であり、監査の結果ではなく、PromptQuorumはアプリのネットワーク通信やコードを調べていません。',
          '説明にはさらに具体的な主張が追加されています。プロバイダーの認証情報はAES-256のEncryptedSharedPreferencesで端末内に保存され、カスタムのクラウドエンドポイントへのリクエストは中間サーバーを介さずスマートフォンからプロバイダーへ直接送信されるとしています。プライバシーの実態はルーティングにも左右されます。OpenAI、Anthropic、その他のクラウドプロバイダーに送られたリクエストは、アプリ自身の申告にかかわらず、あなたのネットワークの外に出て、そのプロバイダーの規約の対象となります。スマートフォンの外に出ないのは、オンデバイスモデルが応答するリクエストだけです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumが確認できた範囲では、このアプリはクローズドソースであり、上記の主張をコードと照らして検証することはできません。規制対象データや機密データを扱う場合は、これらに頼る前に、ご自身で挙動を確認してください。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:利点と制約',
        columns: ['利点', '実際の利用での意味', '制約・注意点'],
        rows: [
          {
            '利点': 'スマートフォンがAPIエンドポイントになる',
            '実際の利用での意味': '別途サーバーを用意しなくても、デスクトップのコーディングツールがスマートフォンのモデルやルートを使える。',
            '制約・注意点': '速度はスマートフォンのハードウェアに制約され、掲載情報にはベンチマークがない。',
          },
          {
            '利点': 'オンデバイスのGGUFモデル',
            '実際の利用での意味': '掲載情報によれば、ローカルモデルとのチャットにインターネット接続は不要。',
            '制約・注意点': '使えるモデルサイズはスマートフォンのRAM次第で、掲載情報には最小要件の記載がない。',
          },
          {
            '利点': '1つのゲートウェイで複数のバックエンド',
            '実際の利用での意味': 'ローカルモデル、Ollama、llama.cppサーバー、クラウドAPIが1つのアドレスの背後にまとまる。',
            '制約・注意点': 'クラウドに振り分けられたリクエストはネットワークの外に出て、プロバイダーのデータ規約に従う。',
          },
          {
            '利点': 'インストール無料',
            '実際の利用での意味': '先に支払わなくても、基本的な使い方を試せる。',
            '制約・注意点': 'アプリ内課金があり、その内容は掲載情報に説明されていない。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**使っていないAndroidスマートフォンがある開発者。** Cursor、VS Code、Windsurfのクイックスタートがこのアプリの中心的な用途で、スマートフォンがメインPCの負荷を肩代わりする。',
          '**複数のバックエンドの前に1つのOpenAI形式のアドレスを置きたいユーザー。** ルーティング、フェイルオーバー、レート制限の機能は、そのような構成を想定している。',
          '**プライベートネットワーク上で、監査されていないユーティリティを試すことに抵抗がないホームラボのユーザー。** インストールが無料なので、試すコストは低い。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**ライセンスとソースコード。** 掲載情報にはどちらも記載がなく、公開リポジトリも見つからなかったため、クローズドソースとして扱っている。監査可能なコードが必要な読者は、下記の代替アプリからオープンソースのものを選ぶこと。',
          '**バージョン番号。** PromptQuorumが読み取れた掲載情報のテキストにはバージョンが示されておらず、このページの記述を特定のビルドに結び付けることができない。',
          '**アプリ内課金。** 掲載情報には課金が存在するとあるが、何が解放されるのか、いくらかかるのかは記載されていない。',
          '**ハードウェアの下限と性能。** 最小RAM、Androidのバージョン、速度の数値はいずれも公開されていない。',
          '**開発者の身元。** 掲載情報にはFreeRouter Teamという名前と連絡先メールアドレスが示されているが、ウェブサイトや企業情報はない。',
          '**iOSやデスクトップのユーザーには不向き。** このアプリはAndroid専用である。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '料金/ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': 'Ollama Local AI',
            'プラットフォーム': 'Android',
            '料金/ライセンス': '無料+アプリ内課金/記載なし',
            '主な違い': 'OpenAI互換APIをLANに提供し、クラウドや自己ホスト型のバックエンドへ振り分ける',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'Android、iOS',
            '料金/ライセンス': '無料/MIT',
            '主な違い': 'オープンソースのオンデバイスチャットクライアント。基本設計にLAN向けAPIサーバーはない',
          },
          {
            'アプリ': '[Maid](/ja/power-local-llm/maid-review)',
            'プラットフォーム': 'Android',
            '料金/ライセンス': '無料/MIT',
            '主な違い': 'ローカルGGUFまたはリモートプロバイダー向けのオープンソースチャットアプリ。クライアントであり、ネットワークゲートウェイではない',
          },
          {
            'アプリ': '[RikkaHub](/ja/power-local-llm/rikkahub-review)',
            'プラットフォーム': 'Android',
            '料金/ライセンス': '無料/オープンソース',
            '主な違い': '他のデバイス向けのサーバーではなく、マルチプロバイダー対応のチャットクライアント',
          },
          {
            'アプリ': '[Layla](/ja/power-local-llm/layla-review)',
            'プラットフォーム': 'Android、iOS',
            '料金/ライセンス': '有料/クローズドソース',
            '主な違い': 'コンパニオン・ロールプレイ重視で、オプションのクラウドモードがある',
          },
        ],
        note: '競合アプリの詳細は頻繁に変わります。各アプリの現在の料金とライセンスは、それぞれの掲載情報で確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Ollama Local AIはOllamaチームが開発したものですか?',
            a: 'いいえ。掲載情報の免責事項には、このアプリは独立したもので、Ollamaとは提携も推奨関係もないと記載されています。自分で運用するOllamaサーバーに接続することはできますが、独自のllama.cppエンジンを同梱しています。',
          },
          {
            q: 'Google Playのパッケージ名は何ですか?',
            a: 'パッケージIDはcom.llmproxyで、ストア上の名前はOllama Local AIですが、「LLM Proxy」の検索で見つかるのはこのためです。',
          },
          {
            q: 'iPhoneやデスクトップで使えますか?',
            a: '掲載情報による限り使えません。リンクされている入手経路はGoogle Playのみで、iOS版やデスクトップ版への言及はありません。',
          },
          {
            q: 'スマートフォン上でどのモデルを動かせますか?',
            a: 'llama.cpp経由のGGUF形式モデルです。掲載情報ではLlama 3、Mistral、Phi、Gemma、Qwenが例として挙げられています。どのサイズが動くかはスマートフォンのRAMによりますが、掲載情報には明記されていません。',
          },
          {
            q: 'CursorやVS Codeと一緒に使えますか?',
            a: '掲載情報はまさにその使い方を説明しています。スマートフォンでサーバーを起動し、ツールのOpenAIベースURLをスマートフォンのローカルアドレスに設定します。PromptQuorumはこの手順をテストしていません。',
          },
          {
            q: 'データはスマートフォンの外に出ませんか?',
            a: 'オンデバイスモデルが応答するリクエストに限ります。OpenAI、Anthropic、NVIDIA NIM、Hugging Faceに振り分けられたリクエストはそれらのプロバイダーに送られ、開発者の「データ収集なし」という申告は監査されていません。',
          },
          {
            q: 'オープンソースですか?',
            a: 'ライセンスもリポジトリも記載がなく、見つかってもいないため、PromptQuorumはクローズドソースとして扱っています。開発者が公開した場合は、このレビューを更新します。',
          },
          {
            q: 'アプリ内課金では何が解放されますか?',
            a: '掲載情報には記載がありません。購入前にアプリ内で確認し、期待と違った場合はGoogle Playの返金期間を利用してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Ollama Local AIは、AndroidスマートフォンをデスクトップのコーディングツールのOpenAI互換エンドポイントとして使いつつ、端末上でGGUFモデルも動かす、という限られてはいるが実在するニーズに応えるアプリです。Playの掲載情報が説明する機能は、LAN上での提供、マルチプロバイダーのルーティング、フェイルオーバー、クラスタリング、トラフィック診断と、一般的なスマートフォン向けチャットアプリより幅広く、10K+ダウンロードと4.2の評価というストア指標は、実際に使われていることを示唆しています。一方で、このアプリはウェブサイトの見当たらない開発者によるクローズドで監査されていないユーティリティであり、バージョン、ライセンス、ハードウェアの下限、課金の範囲はいずれも公開されておらず、名前がOllamaプロジェクトと混同されやすいという問題もあります。プライベートネットワーク上でスマートフォンをゲートウェイにする構成を試したい開発者には向いています。監査可能なコードやiOS対応が必要な読者は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)か[Maid](/ja/power-local-llm/maid-review)から始めてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google Play上のOllama Local AI](https://play.google.com/store/apps/details?id=com.llmproxy) — 説明、開発者名、データセーフティの申告、ダウンロード数、評価、最終更新日(2026年10月2日確認)。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — AndroidとiOS向けの、無料でオープンソースのオンデバイスチャットクライアント。',
          '[Maidレビュー](/ja/power-local-llm/maid-review) — ローカルGGUFまたはリモートプロバイダー向けのオープンソースのAndroidアプリ。',
          '[RikkaHubレビュー](/ja/power-local-llm/rikkahub-review) — マルチプロバイダー対応のAndroidクライアント。',
          '[Laylaレビュー](/ja/power-local-llm/layla-review) — 有料のコンパニオン型オンデバイスアプリ。',
          '[LiteLLMレビュー](/ja/power-local-llm/litellm-review) — 同じ「1つのエンドポイント」という発想を、デスクトップやサーバー側で実現する手段。',
          '[2026年版 Android向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-android-2026) — Androidアプリの総合ラウンドアップ。',
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
    heroImage: '/images/ollama-local-ai-review-hero-pt.webp',
    title: 'Ollama Local AI: Análise do Executor de LLM para Android e Proxy de API na LAN',
    seoTitle: 'Ollama Local AI Análise: LLM no Android e Proxy',
    intro:
      'O Ollama Local AI é um app para Android de um desenvolvedor listado no Google Play como [FreeRouter Team](https://play.google.com/store/apps/details?id=com.llmproxy) que faz duas coisas: executa modelos de linguagem GGUF no celular por meio de um motor llama.cpp embutido e expõe uma API compatível com a OpenAI na sua rede Wi-Fi, para que ferramentas como Cursor, extensões do VS Code e Windsurf usem o celular como endpoint de modelo. A instalação é gratuita, com compras dentro do app, e, apesar do nome, ele não é feito pelo projeto Ollama nem tem qualquer afiliação com ele. Esta análise se baseia somente na ficha do app no Google Play, porque não foram encontrados repositório de código-fonte público, site do desenvolvedor nem documentação, e a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do Ollama Local AI: app Android que roda modelos GGUF no dispositivo e serve uma API compatível com a OpenAI na LAN. O que a ficha confirma e o que não.',
    twitterDescription:
      'Análise do Ollama Local AI: um app Android que transforma o celular em executor de LLM no dispositivo e gateway da LAN compatível com a OpenAI. Não é o projeto Ollama — e o que a ficha do Play não informa.',
    audience:
      'Usuários e desenvolvedores de Android que querem rodar modelos GGUF no celular ou apontar ferramentas de programação do desktop para o celular pelo Wi-Fi local, e que precisam saber exatamente o que a ficha pública confirma e o que não confirma.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Ollama Local AI',
    targetKeywords: [
      'ollama local ai android',
      'ollama local ai análise do app',
      'com.llmproxy',
      'servidor compatível com openai no android',
      'rodar llm no celular android na rede local',
      'proxy de llm android cursor vs code',
      'app android freerouter team',
    ],
    current_models_mentioned: ['Llama 3', 'Mistral', 'Phi', 'Gemma', 'Qwen'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**O Ollama Local AI é um app para Android de instalação gratuita (pacote com.llmproxy no Google Play, listado sob o nome de desenvolvedor FreeRouter Team) que roda modelos GGUF no dispositivo via llama.cpp e serve uma API compatível com a OpenAI para outros dispositivos na sua rede Wi-Fi.** Ele também pode encaminhar solicitações para uma instância própria do Ollama, um servidor llama.cpp ou APIs na nuvem, como OpenAI e Anthropic. Ele não faz parte do projeto Ollama — a própria ficha diz isso — e não há licença, código-fonte nem número de versão publicados, então trate-o como um utilitário fechado e não auditado até que o desenvolvedor informe o contrário.',
    quickAnswerTop: {
      pt: {
        question: 'O Ollama Local AI é o app oficial do Ollama para Android?',
        answer:
          'Não. A própria descrição do app no Google Play afirma que ele é um utilitário de um desenvolvedor independente e que não é afiliado, patrocinado nem endossado pelo Ollama, pela OpenAI, pela Anthropic ou por qualquer outro provedor citado. Ele tem o mesmo nome, mas executa seu próprio motor llama.cpp embutido e pode, opcionalmente, se conectar a um servidor Ollama que você hospeda por conta própria.',
        bullets: [
          'Duas funções: rodar modelos GGUF no celular e servir uma API compatível com a OpenAI (/v1/chat/completions, /v1/models, /health) para dispositivos na mesma rede.',
          'Apenas Android, instalação gratuita com compras dentro do app; o que as compras liberam não é informado na ficha.',
          'O Google Play mostra mais de 10 mil downloads e nota 4,2 em 267 avaliações, com última atualização em 1º de outubro de 2026.',
          'A seção Segurança dos dados do desenvolvedor declara que nenhum dado é coletado e nenhum dado é compartilhado com terceiros — uma autodeclaração que a PromptQuorum não auditou.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Ollama Local AI?', anchor: 'what-is-ollama-local-ai' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Como conectar sua IDE pelo Wi-Fi', anchor: 'getting-started' },
      { label: 'Recursos confirmados pela ficha', anchor: 'key-features' },
      { label: 'Privacidade e segurança dos dados', anchor: 'privacy' },
      { label: 'Prós e contras: benefícios vs. limitações', anchor: 'tradeoffs' },
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
            text: 'O Ollama Local AI é um app para Android da FreeRouter Team que roda modelos GGUF no dispositivo via llama.cpp e serve uma API compatível com a OpenAI na sua rede local, e não é afiliado ao projeto Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app em um celular Android, carrega um modelo ou adiciona suas chaves de API na nuvem, toca em Start Server e então aponta ferramentas como Cursor ou VS Code para o endereço local do celular em vez da OpenAI — assim, o celular faz o trabalho, ou repassa a solicitação, no lugar do seu computador.',
          },
        ],
        items: [
          'Desenvolvedor: listado no [Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) como FreeRouter Team, categoria Produtividade; a ficha não traz link para site nem repositório.',
          'Preço: instalação gratuita, com compras dentro do app cujo conteúdo não é descrito.',
          'Modelos no dispositivo: arquivos GGUF executados por um motor llama.cpp embutido; a ficha cita Llama 3, Mistral, Phi, Gemma e Qwen como exemplos.',
          'Gateway na LAN: expõe endpoints no estilo OpenAI para outros dispositivos no seu Wi-Fi e pode encaminhar para modelos locais, Ollama próprio, servidores llama.cpp, OpenAI, Anthropic, NVIDIA NIM e Hugging Face.',
          'Sinais da loja em 2 de outubro de 2026: mais de 10 mil downloads, 4,2 estrelas em 267 avaliações, última atualização em 1º de outubro de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia somente na ficha do Google Play, consultada em 2 de outubro de 2026. A PromptQuorum não encontrou código-fonte público, licença, documentação nem número de versão do app e não o testou nem fez benchmarks.',
          },
        ],
      },
      overview: {
        id: 'what-is-ollama-local-ai',
        title: 'O que é o Ollama Local AI?',
        content: [
          '**O Ollama Local AI é um app para Android que combina um executor de modelos no dispositivo com um gateway de API para a rede local.** Segundo sua [ficha no Google Play](https://play.google.com/store/apps/details?id=com.llmproxy), ele roda modelos GGUF quantizados diretamente na CPU ou na GPU do celular por meio de um motor [llama.cpp](https://github.com/ggml-org/llama.cpp) embutido, e também pode atuar como roteador que encaminha solicitações para outros backends que você configurar.',
          'O nome é a principal fonte de confusão. O aviso final da ficha diz que o app é um utilitário de desenvolvedor independente e não é afiliado, patrocinado nem endossado pelo Ollama, pela OpenAI, pela Anthropic ou por qualquer provedor mencionado. O app pode se conectar a um servidor [Ollama](https://ollama.com) que você hospede em outro lugar, mas não embute o Ollama em si. Os resultados de busca e o nome do pacote no Play (com.llmproxy) se referem ao mesmo app.',
        ],
        note: 'GGUF é um formato de arquivo para modelos de linguagem de peso aberto quantizados que runtimes como o llama.cpp conseguem carregar em hardware de consumo, inclusive em celulares.',
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O único canal oficial indicado pela ficha é o Google Play; não há link para versão de iOS, versão para desktop, espelho de APK nem release no GitHub.**',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)',
          },
          {
            'Plataforma': 'iOS / desktop',
            'Onde obter': 'Não oferecido, segundo a ficha',
          },
        ],
        note: 'Esta página é material complementar à entrada do app no [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). O texto da ficha que a PromptQuorum conseguiu ler não mostra número de versão, então nenhum é informado aqui; confira a página do Play para ver a build atual.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como conectar sua IDE pelo Wi-Fi',
        content: [
          '**O guia rápido da própria ficha tem quatro passos, todos feitos no celular e na mesma rede privada.** A PromptQuorum não executou esses passos.',
        ],
        numberedItems: [
          {
            title: 'Iniciar o servidor',
            whyItMatters: 'Abra o app, escolha um modelo GGUF local ou informe chaves de provedores na nuvem e toque em "Start Server".',
          },
          {
            title: 'Anotar o endpoint',
            whyItMatters: 'O app exibe o IP local e a porta do celular, por exemplo http://192.168.1.50:8080/v1 no exemplo da própria ficha.',
          },
          {
            title: 'Apontar sua ferramenta para ele',
            whyItMatters: 'No Cursor, informe qualquer valor provisório como chave da OpenAI e substitua a URL base. Em extensões do VS Code como Continue, Cline ou Roo Code, defina o tipo de provedor como openai e o apiBase ou baseUrl como o endereço do celular. No Windsurf, aponte os endpoints personalizados de modelos OpenAI para ele.',
          },
          {
            title: 'Começar a programar',
            whyItMatters: 'As solicitações e os loops de agente da ferramenta do desktop passam então a ser tratados pelo celular, seja pelo modelo no dispositivo, seja pelo provedor para o qual ele encaminha.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pela ficha',
        content: [
          '**Todos os itens abaixo vêm da própria descrição do desenvolvedor no Play; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Endpoints no estilo OpenAI.** /v1/chat/completions, /v1/models e /health, acessíveis por qualquer máquina no mesmo Wi-Fi ou sub-rede da LAN.',
          '**Roteamento entre vários provedores.** Alterne entre modelos no dispositivo, instâncias próprias do Ollama, servidores llama.cpp e APIs diretas na nuvem (OpenAI, Anthropic Claude, NVIDIA NIM, Hugging Face).',
          '**Controles de proxy.** Pools de solicitações, timeouts por provedor, limitação de taxa, failover automático e distribuição round-robin.',
          '**Clustering Master/Worker na LAN.** Pareie vários dispositivos Android na mesma rede para reunir memória e capacidade de processamento em um cluster de inferência.',
          '**WebUI entre dispositivos.** Uma interface de chat e um console de gerenciamento do servidor acessíveis pelo navegador de um PC ou tablet na mesma rede.',
          '**WebX Live Canvas.** Gere e visualize HTML, Tailwind CSS e JavaScript dentro do chat.',
          '**Traffic Observatory.** Velocidade de geração de tokens, métricas de latência e payloads de solicitações exibidos como diagnósticos do proxy.',
          '**Clientes compatíveis citados.** Cursor, VS Code, Windsurf, JetBrains, LangChain, LlamaIndex, LiteLLM, AutoGen, CrewAI, Continue.dev, Cline, Roo Code, Aider e Open WebUI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e segurança dos dados',
        content: [
          '**A seção Segurança dos dados do app no Google Play declara que nenhum dado é coletado e nenhum dado é compartilhado com terceiros.** Isso é uma autodeclaração do desenvolvedor, não o resultado de uma auditoria, e a PromptQuorum não inspecionou o tráfego de rede nem o código do app.',
          'A descrição acrescenta afirmações específicas: as credenciais dos provedores são armazenadas no dispositivo com AES-256 EncryptedSharedPreferences, e as solicitações para endpoints personalizados na nuvem vão diretamente do celular para o provedor, sem servidor intermediário. O quadro de privacidade também depende do roteamento: uma solicitação enviada à OpenAI, à Anthropic ou a outro provedor na nuvem sai da sua rede e passa a ser regida pelos termos desse provedor, independentemente da declaração do próprio app. Somente as solicitações respondidas por um modelo no dispositivo permanecem no celular.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Até onde a PromptQuorum conseguiu apurar, o app é de código fechado, então as afirmações acima não podem ser conferidas no código. Quem lida com dados regulados ou confidenciais deve verificar o comportamento por conta própria antes de confiar nelas.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'Na prática', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Celular como endpoint de API',
            'Na prática': 'Ferramentas de programação do desktop podem usar o modelo ou as rotas do celular sem um servidor separado.',
            'Limitação / ressalva': 'A velocidade é limitada pelo hardware do celular, e a ficha não traz benchmarks.',
          },
          {
            'Benefício': 'Modelos GGUF no dispositivo',
            'Na prática': 'Conversas com modelos locais não precisam de conexão com a internet, segundo a ficha.',
            'Limitação / ressalva': 'O tamanho de modelo utilizável depende da RAM do celular; a ficha não informa mínimo.',
          },
          {
            'Benefício': 'Um gateway, vários backends',
            'Na prática': 'Modelos locais, Ollama, servidores llama.cpp e APIs na nuvem ficam atrás de um único endereço.',
            'Limitação / ressalva': 'Solicitações roteadas para a nuvem saem da sua rede e seguem os termos de dados do provedor.',
          },
          {
            'Benefício': 'Instalação gratuita',
            'Na prática': 'Você pode testar o fluxo principal sem pagar antes.',
            'Limitação / ressalva': 'Existem compras dentro do app e o conteúdo delas não é descrito na ficha.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Desenvolvedores com um celular Android sobrando.** O guia rápido para Cursor, VS Code e Windsurf é o caso de uso central do app, e o celular tira carga do PC principal.',
          '**Usuários que querem um único endereço no estilo OpenAI na frente de vários backends.** Os controles de roteamento, failover e limite de taxa visam esse cenário.',
          '**Usuários de home lab à vontade para testar um utilitário não auditado em uma rede privada.** Como a instalação é gratuita, experimentar sai barato.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Licença e código-fonte.** Nenhum dos dois consta na ficha e nenhum repositório público foi encontrado, então o app é tratado como de código fechado; quem precisa de código auditável deve escolher um app de código aberto entre as alternativas abaixo.',
          '**Número da versão.** O texto da ficha que a PromptQuorum conseguiu ler não mostra versão, então esta página não pode vincular suas afirmações a uma build específica.',
          '**Compras dentro do app.** A ficha diz que existem, mas não o que liberam nem quanto custam.',
          '**Requisitos de hardware e desempenho.** Não há mínimo de RAM, versão do Android nem números de velocidade publicados.',
          '**Identidade do desenvolvedor.** A ficha mostra o nome FreeRouter Team e um e-mail de contato, sem site nem dados da empresa.',
          '**Não é para usuários de iOS ou desktop.** O app é exclusivo para Android.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Principal diferença'],
        rows: [
          {
            'App': 'Ollama Local AI',
            'Plataformas': 'Android',
            'Preço / licença': 'Grátis + compras no app / não informada',
            'Principal diferença': 'Serve uma API compatível com a OpenAI para a sua LAN e roteia para backends na nuvem e próprios',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'Android, iOS',
            'Preço / licença': 'Grátis / MIT',
            'Principal diferença': 'Cliente de chat de código aberto no dispositivo; sem servidor de API na LAN no design principal',
          },
          {
            'App': '[Maid](/pt/power-local-llm/maid-review)',
            'Plataformas': 'Android',
            'Preço / licença': 'Grátis / MIT',
            'Principal diferença': 'App de chat de código aberto para GGUF local ou provedores remotos; um cliente, não um gateway de rede',
          },
          {
            'App': '[RikkaHub](/pt/power-local-llm/rikkahub-review)',
            'Plataformas': 'Android',
            'Preço / licença': 'Grátis / código aberto',
            'Principal diferença': 'Cliente de chat com vários provedores, e não um servidor para outros dispositivos',
          },
          {
            'App': '[Layla](/pt/power-local-llm/layla-review)',
            'Plataformas': 'Android, iOS',
            'Preço / licença': 'Pago / código fechado',
            'Principal diferença': 'Foco em companheiro e roleplay, com modo opcional na nuvem',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme o preço e a licença atuais de cada app na própria ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Ollama Local AI é feito pela equipe do Ollama?',
            a: 'Não. O aviso da ficha diz que o app é independente e não é afiliado nem endossado pelo Ollama. Ele pode se conectar a um servidor Ollama que você mesmo executa, mas traz o seu próprio motor llama.cpp.',
          },
          {
            q: 'Qual é o nome do pacote no Google Play?',
            a: 'O ID do pacote é com.llmproxy, e por isso o app aparece em buscas por "LLM Proxy", embora o nome na loja seja Ollama Local AI.',
          },
          {
            q: 'Funciona no iPhone ou no desktop?',
            a: 'Não, segundo a ficha: o Google Play é o único canal que ela indica, e não há menção a versão para iOS ou desktop.',
          },
          {
            q: 'Quais modelos ele consegue rodar no celular?',
            a: 'Modelos no formato GGUF por meio do llama.cpp. A ficha cita Llama 3, Mistral, Phi, Gemma e Qwen como exemplos; os tamanhos que cabem dependem da RAM do seu celular, que a ficha não especifica.',
          },
          {
            q: 'Posso usá-lo com o Cursor ou o VS Code?',
            a: 'A ficha descreve exatamente isso: inicie o servidor no celular e depois defina a URL base da OpenAI da ferramenta como o endereço local do celular. A PromptQuorum não testou esses passos.',
          },
          {
            q: 'Meus dados ficam no celular?',
            a: 'Somente nas solicitações respondidas por um modelo no dispositivo. As solicitações roteadas para OpenAI, Anthropic, NVIDIA NIM ou Hugging Face vão para esses provedores, e a declaração do desenvolvedor de que não coleta dados não foi auditada.',
          },
          {
            q: 'É de código aberto?',
            a: 'Nenhuma licença ou repositório é informado, e nenhum foi encontrado, então a PromptQuorum o classifica como de código fechado. Se o desenvolvedor publicar um, esta análise será atualizada.',
          },
          {
            q: 'O que as compras dentro do app liberam?',
            a: 'A ficha não diz. Confira dentro do app antes de comprar e use a janela de reembolso do Google Play se o resultado não for o esperado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Ollama Local AI atende a uma necessidade estreita e real: usar um celular Android como endpoint compatível com a OpenAI para ferramentas de programação do desktop, ao mesmo tempo em que roda modelos GGUF no próprio dispositivo. A ficha do Play descreve um conjunto de recursos que vai além da maioria dos apps de chat para celular — serviço na LAN, roteamento entre vários provedores, failover, clustering e diagnósticos de tráfego —, e os sinais da loja, com mais de 10 mil downloads e nota 4,2, sugerem uso real. Em contrapartida, o app é um utilitário fechado e não auditado, de um desenvolvedor sem site visível; sua versão, licença, requisitos de hardware e escopo das compras não são publicados; e o nome convida à confusão com o projeto Ollama. Ele serve a desenvolvedores que querem experimentar uma configuração de celular como gateway em uma rede privada; quem precisa de código auditável ou de suporte a iOS deve começar pelo [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou pelo [Maid](/pt/power-local-llm/maid-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Ollama Local AI no Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) — descrição, nome do desenvolvedor, declaração de Segurança dos dados, número de downloads, nota e data da última atualização, consultados em 2 de outubro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no dispositivo para Android e iOS.',
          '[Análise do Maid](/pt/power-local-llm/maid-review) — um app Android de código aberto para GGUF local ou provedores remotos.',
          '[Análise do RikkaHub](/pt/power-local-llm/rikkahub-review) — um cliente Android com vários provedores.',
          '[Análise da Layla](/pt/power-local-llm/layla-review) — um app pago no dispositivo, no estilo companheiro.',
          '[Análise do LiteLLM](/pt/power-local-llm/litellm-review) — o caminho no desktop e no lado do servidor para a mesma ideia de endpoint único.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo do Android.',
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
    heroImage: '/images/ollama-local-ai-review-hero-ar.webp',
    title: 'مراجعة Ollama Local AI: مشغّل نماذج لغوية لأندرويد ووكيل API على الشبكة المحلية',
    seoTitle: 'مراجعة Ollama Local AI: مشغّل نماذج ووكيل لأندرويد',
    intro:
      'Ollama Local AI تطبيق لأندرويد من مطوّر مُدرَج في Google Play باسم [FreeRouter Team](https://play.google.com/store/apps/details?id=com.llmproxy)، ويؤدي مهمتين: يشغّل نماذج لغوية بصيغة GGUF على الهاتف عبر محرك llama.cpp مدمج، ويتيح واجهة API متوافقة مع OpenAI على شبكة Wi-Fi لديك بحيث تستطيع أدوات مثل Cursor وإضافات VS Code و Windsurf استخدام الهاتف كنقطة نهاية للنموذج. التطبيق مجاني التثبيت مع مشتريات داخل التطبيق، ورغم اسمه فهو ليس من تطوير مشروع Ollama ولا تابعاً له. تستند هذه المراجعة إلى صفحة التطبيق في Google Play فقط، لأنه لم يُعثر على مستودع مصدر عام أو موقع للمطوّر أو وثائق، ولم تختبر PromptQuorum التطبيق عملياً.',
    metaDescription:
      'مراجعة Ollama Local AI: تطبيق أندرويد يشغّل نماذج GGUF على الجهاز ويوفّر واجهة API متوافقة مع OpenAI على شبكتك المحلية. ما تؤكده الصفحة وما تتركه دون تحقق.',
    twitterDescription:
      'مراجعة Ollama Local AI: تطبيق أندرويد يحوّل هاتفك إلى مشغّل نماذج لغوية على الجهاز وبوابة متوافقة مع OpenAI على الشبكة المحلية. ليس مشروع Ollama — وما لا تذكره صفحة Play.',
    audience:
      'مستخدمو أندرويد والمطوّرون الذين يريدون تشغيل نماذج GGUF على هاتف أو توجيه أدوات البرمجة على الحاسوب إلى هاتفهم عبر Wi-Fi محلي، ويحتاجون إلى معرفة بدقة ما تؤكده الصفحة العامة وما لا تؤكده.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Ollama Local AI',
    targetKeywords: [
      'ollama local ai أندرويد',
      'مراجعة تطبيق ollama local ai',
      'com.llmproxy',
      'خادم أندرويد متوافق مع openai',
      'تشغيل نموذج لغوي على هاتف أندرويد عبر الشبكة المحلية',
      'وكيل نماذج لغوية أندرويد cursor vs code',
      'تطبيق freerouter team أندرويد',
    ],
    current_models_mentioned: ['Llama 3', 'Mistral', 'Phi', 'Gemma', 'Qwen'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Ollama Local AI تطبيق أندرويد مجاني التثبيت (حزمة Google Play باسم com.llmproxy، ومُدرَج باسم المطوّر FreeRouter Team) يشغّل نماذج GGUF على الجهاز عبر llama.cpp ويقدّم واجهة API متوافقة مع OpenAI للأجهزة الأخرى على شبكة Wi-Fi لديك.** ويمكنه أيضاً تمرير الطلبات إلى خادم Ollama مستضاف ذاتياً، أو خادم llama.cpp، أو واجهات سحابية مثل OpenAI و Anthropic. وهو ليس جزءاً من مشروع Ollama — تذكر الصفحة نفسها ذلك — ولا يُنشر له ترخيص أو كود مصدري أو رقم إصدار، لذا تعامل معه كأداة مغلقة غير مدقَّقة إلى أن يوضح المطوّر خلاف ذلك.',
    quickAnswerTop: {
      ar: {
        question: 'هل Ollama Local AI هو تطبيق Ollama الرسمي لأندرويد؟',
        answer:
          'لا. يذكر وصف التطبيق نفسه في Google Play أنه أداة من مطوّر مستقل وأنه غير تابع لـ Ollama أو OpenAI أو Anthropic أو أي مزوّد مذكور آخر، ولا برعايتها أو بتأييدها. يشترك معها في الاسم لكنه يشغّل محرك llama.cpp المدمج الخاص به، ويمكنه اختيارياً الاتصال بخادم Ollama تستضيفه بنفسك.',
        bullets: [
          'وظيفتان: تشغيل نماذج GGUF على الهاتف، وتقديم واجهة API متوافقة مع OpenAI (/v1/chat/completions و /v1/models و /health) للأجهزة على الشبكة نفسها.',
          'لأندرويد فقط، مجاني التثبيت مع مشتريات داخل التطبيق؛ ولا تذكر الصفحة ما الذي تفتحه هذه المشتريات.',
          'يعرض Google Play أكثر من 10 آلاف عملية تنزيل وتقييماً قدره 4.2 من 267 مراجعة، وآخر تحديث في 1 أكتوبر 2026.',
          'يعلن قسم أمان البيانات لدى المطوّر عدم جمع أي بيانات وعدم مشاركتها مع أطراف ثالثة — وهو إعلان ذاتي لم تدققه PromptQuorum.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Ollama Local AI؟', anchor: 'what-is-ollama-local-ai' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيفية ربط بيئة التطوير عبر Wi-Fi', anchor: 'getting-started' },
      { label: 'الميزات التي تؤكدها الصفحة', anchor: 'key-features' },
      { label: 'الخصوصية وأمان البيانات', anchor: 'privacy' },
      { label: 'المقايضات: المزايا مقابل القيود', anchor: 'tradeoffs' },
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
            text: 'Ollama Local AI تطبيق أندرويد من FreeRouter Team يشغّل نماذج GGUF على الجهاز عبر llama.cpp ويقدّم واجهة API متوافقة مع OpenAI على شبكتك المحلية، وهو غير تابع لمشروع Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته على هاتف أندرويد، وتحمّل نموذجاً أو تضيف مفاتيح واجهاتك السحابية، ثم تضغط "Start Server"، وبعدها توجّه أدوات مثل Cursor أو VS Code إلى العنوان المحلي للهاتف بدلاً من OpenAI — فيتولى الهاتف العمل، أو يمرّر الطلب، بدلاً من حاسوبك.',
          },
        ],
        items: [
          'المطوّر: مُدرَج في [Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) باسم FreeRouter Team ضمن فئة الإنتاجية؛ ولا يرتبط في الصفحة أي موقع أو مستودع.',
          'السعر: مجاني التثبيت، مع مشتريات داخل التطبيق لا يُوصف محتواها.',
          'النماذج على الجهاز: تُشغَّل ملفات GGUF عبر محرك llama.cpp مدمج؛ وتذكر الصفحة Llama 3 و Mistral و Phi و Gemma و Qwen كأمثلة.',
          'بوابة الشبكة المحلية: تتيح نقاط نهاية بأسلوب OpenAI للأجهزة الأخرى على شبكة Wi-Fi لديك، ويمكنها التوجيه إلى النماذج المحلية، و Ollama المستضاف ذاتياً، وخوادم llama.cpp، و OpenAI، و Anthropic، و NVIDIA NIM، و Hugging Face.',
          'مؤشرات المتجر في 2 أكتوبر 2026: أكثر من 10 آلاف تنزيل، و4.2 نجمة من 267 مراجعة، وآخر تحديث في 1 أكتوبر 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة Google Play فقط، التي جرى التحقق منها في 2 أكتوبر 2026. لم تعثر PromptQuorum على كود مصدري عام أو ترخيص أو وثائق أو رقم إصدار للتطبيق، ولم تختبره أو تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-ollama-local-ai',
        title: 'ما هو Ollama Local AI؟',
        content: [
          '**Ollama Local AI تطبيق أندرويد يجمع بين مشغّل نماذج على الجهاز وبوابة API على الشبكة المحلية.** وفقاً لـ[صفحته في Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)، يشغّل نماذج GGUF المكمَّمة مباشرة على معالج الهاتف أو معالجه الرسومي عبر محرك [llama.cpp](https://github.com/ggml-org/llama.cpp) مدمج، ويمكنه أيضاً العمل كموجِّه يمرّر الطلبات إلى واجهات خلفية أخرى تضبطها أنت.',
          'الاسم هو المصدر الرئيسي للالتباس. يذكر إخلاء المسؤولية الختامي في الصفحة أن التطبيق أداة من مطوّر مستقل وغير تابع لـ Ollama أو OpenAI أو Anthropic أو أي مزوّد مذكور، ولا برعايتها أو بتأييدها. يستطيع التطبيق الاتصال بخادم [Ollama](https://ollama.com) تستضيفه في مكان آخر، لكنه لا يدمج Ollama نفسه. تشير نتائج البحث واسم حزمة Play (com.llmproxy) إلى التطبيق نفسه.',
        ],
        note: 'GGUF صيغة ملف لنماذج لغوية ذات أوزان مفتوحة ومكمَّمة (quantized) تستطيع بيئات تشغيل مثل llama.cpp تحميلها على عتاد المستهلك، بما في ذلك الهواتف.',
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**القناة الرسمية الوحيدة التي تشير إليها الصفحة هي Google Play؛ ولا يرتبط أي إصدار لـ iOS أو لسطح المكتب أو نسخة APK مرآة أو إصدار على GitHub.**',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'أندرويد',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)',
          },
          {
            'المنصة': 'iOS / سطح المكتب',
            'مكان الحصول عليه': 'غير متوفر، وفقاً للصفحة',
          },
        ],
        note: 'هذه الصفحة مادة مرافقة لإدخال التطبيق في [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). لا يظهر رقم إصدار في نص الصفحة الذي استطاعت PromptQuorum قراءته، لذا لا يُذكر هنا أي رقم؛ راجع صفحة Play لمعرفة الإصدار الحالي.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيفية ربط بيئة التطوير عبر Wi-Fi',
        content: [
          '**للبدء السريع الوارد في الصفحة أربع خطوات، تُنفَّذ كلها على الهاتف وعلى الشبكة الخاصة نفسها.** لم تجرِّب PromptQuorum هذه الخطوات.',
        ],
        numberedItems: [
          {
            title: 'تشغيل الخادم',
            whyItMatters: 'افتح التطبيق، واختر نموذج GGUF محلياً أو أدخل مفاتيح مزوّد سحابي، ثم اضغط "Start Server".',
          },
          {
            title: 'تدوين نقطة النهاية',
            whyItMatters: 'يعرض التطبيق عنوان IP المحلي للهاتف والمنفذ، مثل http://192.168.1.50:8080/v1 في المثال الوارد في الصفحة نفسها.',
          },
          {
            title: 'توجيه أداتك إليه',
            whyItMatters: 'في Cursor، أدخل أي قيمة بديلة كمفتاح OpenAI وغيّر عنوان base URL. وفي إضافات VS Code مثل Continue أو Cline أو Roo Code، اضبط نوع المزوّد على openai وقيمة apiBase أو baseUrl على عنوان الهاتف. وفي Windsurf، وجّه نقاط نهاية نماذج OpenAI المخصّصة إليه.',
          },
          {
            title: 'ابدأ البرمجة',
            whyItMatters: 'تُعالَج بعد ذلك طلبات أداة سطح المكتب وحلقات الوكلاء على الهاتف، إما بالنموذج الموجود على الجهاز أو بالمزوّد الذي يوجّه إليه الطلبات.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها الصفحة',
        content: [
          '**كل عنصر أدناه مأخوذ من وصف المطوّر نفسه في Play؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**نقاط نهاية بأسلوب OpenAI.** /v1/chat/completions و /v1/models و /health، يمكن الوصول إليها من أي جهاز على شبكة Wi-Fi أو الشبكة الفرعية المحلية نفسها.',
          '**توجيه متعدد المزوّدين.** التبديل بين النماذج على الجهاز، ونُسخ Ollama المستضافة ذاتياً، وخوادم llama.cpp، وواجهات سحابية مباشرة (OpenAI و Anthropic Claude و NVIDIA NIM و Hugging Face).',
          '**أدوات التحكم في الوكيل.** مجموعات الطلبات، ومهلات المزوّدين، وتحديد المعدّل، والتحويل التلقائي عند الفشل، والتوزيع الدوري (round-robin).',
          '**تجميع Master/Worker على الشبكة المحلية.** اقتران عدة أجهزة أندرويد على شبكة واحدة لدمج الذاكرة والحوسبة في عنقود استدلال.',
          '**واجهة WebUI عبر الأجهزة.** واجهة دردشة ولوحة إدارة للخادم يمكن الوصول إليها من متصفح حاسوب أو جهاز لوحي على الشبكة نفسها.',
          '**WebX Live Canvas.** توليد HTML و Tailwind CSS و JavaScript ومعاينتها داخل الدردشة.',
          '**Traffic Observatory.** سرعة توليد الرموز (tokens)، ومقاييس زمن الاستجابة، وحمولات الطلبات تُعرض كتشخيصات للوكيل.',
          '**العملاء المتوافقون المذكورون.** Cursor و VS Code و Windsurf و JetBrains و LangChain و LlamaIndex و LiteLLM و AutoGen و CrewAI و Continue.dev و Cline و Roo Code و Aider و Open WebUI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وأمان البيانات',
        content: [
          '**يعلن قسم أمان البيانات (Data safety) في Google Play للتطبيق أنه لا تُجمع أي بيانات ولا تُشارك أي بيانات مع أطراف ثالثة.** وهذا إعلان ذاتي من المطوّر وليس نتيجة تدقيق، ولم تفحص PromptQuorum حركة الشبكة في التطبيق أو كوده.',
          'يضيف الوصف ادعاءات محددة: تُخزَّن بيانات اعتماد المزوّدين على الجهاز باستخدام AES-256 EncryptedSharedPreferences، وتنتقل الطلبات إلى نقاط النهاية السحابية المخصّصة مباشرة من الهاتف إلى المزوّد دون خادم وسيط. كما تعتمد صورة الخصوصية على التوجيه: فالطلب المرسَل إلى OpenAI أو Anthropic أو مزوّد سحابي آخر يغادر شبكتك ويخضع لشروط ذلك المزوّد، بصرف النظر عن إعلان التطبيق نفسه. أما الطلبات التي يجيب عنها نموذج على الجهاز وحدها فتبقى على الهاتف.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'حسب ما استطاعت PromptQuorum العثور عليه، التطبيق مغلق المصدر، لذا لا يمكن التحقق من الادعاءات أعلاه مقابل الكود. على من يتعامل مع بيانات خاضعة للتنظيم أو سرية أن يتحقق من السلوك بنفسه قبل الاعتماد عليها.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: ['الميزة', 'المعنى في الاستخدام', 'القيد / التحفّظ'],
        rows: [
          {
            'الميزة': 'الهاتف كنقطة نهاية API',
            'المعنى في الاستخدام': 'تستطيع أدوات البرمجة على الحاسوب استخدام نموذج الهاتف أو مساراته دون خادم منفصل.',
            'القيد / التحفّظ': 'السرعة محدودة بعتاد الهاتف، ولا تقدّم الصفحة أي قياسات أداء.',
          },
          {
            'الميزة': 'نماذج GGUF على الجهاز',
            'المعنى في الاستخدام': 'الدردشة مع النماذج المحلية لا تحتاج إلى اتصال بالإنترنت، وفقاً للصفحة.',
            'القيد / التحفّظ': 'يعتمد حجم النموذج الممكن على ذاكرة RAM في الهاتف؛ ولا تذكر الصفحة حداً أدنى.',
          },
          {
            'الميزة': 'بوابة واحدة، واجهات خلفية متعددة',
            'المعنى في الاستخدام': 'النماذج المحلية و Ollama وخوادم llama.cpp والواجهات السحابية خلف عنوان واحد.',
            'القيد / التحفّظ': 'الطلبات الموجَّهة إلى السحابة تغادر شبكتك وتخضع لشروط بيانات المزوّد.',
          },
          {
            'الميزة': 'مجاني التثبيت',
            'المعنى في الاستخدام': 'يمكنك تجربة المسار الأساسي دون الدفع أولاً.',
            'القيد / التحفّظ': 'توجد مشتريات داخل التطبيق ولا يُوصف محتواها في الصفحة.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المطوّرون الذين لديهم هاتف أندرويد احتياطي.** البدء السريع مع Cursor و VS Code و Windsurf هو حالة الاستخدام المركزية للتطبيق، ويخفّف الهاتف العبء عن الحاسوب الرئيسي.',
          '**المستخدمون الذين يريدون عنواناً واحداً بأسلوب OpenAI أمام عدة واجهات خلفية.** تستهدف أدوات التوجيه والتحويل عند الفشل وتحديد المعدّل هذا الإعداد.',
          '**مستخدمو المختبرات المنزلية المرتاحون لتجربة أداة غير مدقَّقة على شبكة خاصة.** التثبيت المجاني يجعل التجربة قليلة التكلفة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الترخيص والكود المصدري.** لا يُذكر أي منهما في الصفحة ولم يُعثر على مستودع عام، لذا يُعامل التطبيق كمغلق المصدر؛ والقراء الذين يحتاجون إلى كود قابل للتدقيق عليهم اختيار تطبيق مفتوح المصدر من البدائل أدناه.',
          '**رقم الإصدار.** لا يظهر إصدار في نص الصفحة الذي استطاعت PromptQuorum قراءته، لذا لا تستطيع هذه الصفحة ربط ادعاءاتها بإصدار محدد.',
          '**المشتريات داخل التطبيق.** تذكر الصفحة أنها موجودة لكن دون بيان ما تفتحه أو كم تكلّف.',
          '**الحد الأدنى للعتاد والأداء.** لا يُنشر حد أدنى لـ RAM أو لإصدار أندرويد ولا أي أرقام للسرعة.',
          '**هوية المطوّر.** تعرض الصفحة الاسم FreeRouter Team وبريداً إلكترونياً للتواصل، دون موقع إلكتروني أو تفاصيل عن شركة.',
          '**غير مناسب لمستخدمي iOS أو سطح المكتب.** التطبيق لأندرويد فقط.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Ollama Local AI',
            'المنصات': 'أندرويد',
            'السعر / الترخيص': 'مجاني + مشتريات / غير مذكور',
            'الفرق الرئيسي': 'يقدّم واجهة API متوافقة مع OpenAI لشبكتك المحلية ويوجّه إلى واجهات سحابية ومستضافة ذاتياً',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'أندرويد، iOS',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر على الجهاز؛ دون خادم API للشبكة المحلية في تصميمه الأساسي',
          },
          {
            'التطبيق': '[Maid](/ar/power-local-llm/maid-review)',
            'المنصات': 'أندرويد',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'تطبيق دردشة مفتوح المصدر لنماذج GGUF المحلية أو المزوّدين البعيدين؛ عميل وليس بوابة شبكة',
          },
          {
            'التطبيق': '[RikkaHub](/ar/power-local-llm/rikkahub-review)',
            'المنصات': 'أندرويد',
            'السعر / الترخيص': 'مجاني / مفتوح المصدر',
            'الفرق الرئيسي': 'عميل دردشة متعدد المزوّدين وليس خادماً لأجهزة أخرى',
          },
          {
            'التطبيق': '[Layla](/ar/power-local-llm/layla-review)',
            'المنصات': 'أندرويد، iOS',
            'السعر / الترخيص': 'مدفوع / مغلق المصدر',
            'الفرق الرئيسي': 'تركيز على الرفيق ولعب الأدوار مع وضع سحابي اختياري',
          },
        ],
        note: 'تفاصيل المنافسين تتغير كثيراً؛ تأكد من السعر والترخيص الحاليين لكل تطبيق من صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Ollama Local AI من تطوير فريق Ollama؟',
            a: 'لا. يذكر إخلاء المسؤولية في الصفحة أن التطبيق مستقل وغير تابع لـ Ollama ولا مؤيَّد منها. يمكنه الاتصال بخادم Ollama تشغّله بنفسك، لكنه يأتي بمحرك llama.cpp الخاص به.',
          },
          {
            q: 'ما اسم حزمة Google Play؟',
            a: 'معرّف الحزمة هو com.llmproxy، ولهذا يظهر التطبيق في عمليات البحث عن "LLM Proxy" مع أن اسمه في المتجر هو Ollama Local AI.',
          },
          {
            q: 'هل يعمل على iPhone أو سطح المكتب؟',
            a: 'ليس وفقاً للصفحة: Google Play هي القناة الوحيدة التي ترتبط بها، ولا يُذكر أي إصدار لـ iOS أو لسطح المكتب.',
          },
          {
            q: 'ما النماذج التي يمكنه تشغيلها على الهاتف؟',
            a: 'نماذج بصيغة GGUF عبر llama.cpp. تذكر الصفحة Llama 3 و Mistral و Phi و Gemma و Qwen كأمثلة؛ أما الأحجام التي تناسب هاتفك فتعتمد على ذاكرة RAM فيه، وهو ما لا تحدده الصفحة.',
          },
          {
            q: 'هل يمكنني استخدامه مع Cursor أو VS Code؟',
            a: 'تصف الصفحة ذلك تماماً: شغّل الخادم على الهاتف، ثم اضبط عنوان OpenAI الأساسي في الأداة على العنوان المحلي للهاتف. لم تختبر PromptQuorum هذه الخطوات.',
          },
          {
            q: 'هل تبقى بياناتي على الهاتف؟',
            a: 'فقط بالنسبة للطلبات التي يجيب عنها نموذج على الجهاز. أما الطلبات الموجَّهة إلى OpenAI أو Anthropic أو NVIDIA NIM أو Hugging Face فتذهب إلى هؤلاء المزوّدين، وإعلان المطوّر بعدم جمع البيانات غير مدقَّق.',
          },
          {
            q: 'هل هو مفتوح المصدر؟',
            a: 'لا يُذكر ترخيص أو مستودع ولم يُعثر على أي منهما، لذا تُدرجه PromptQuorum كمغلق المصدر. وإذا نشر المطوّر واحداً فستُحدَّث هذه المراجعة.',
          },
          {
            q: 'ما الذي تفتحه المشتريات داخل التطبيق؟',
            a: 'لا تذكر الصفحة ذلك. تحقق داخل التطبيق قبل الشراء، واستفد من فترة الاسترداد في Google Play إذا لم تكن النتيجة كما توقعت.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يلبّي Ollama Local AI حاجة ضيقة وحقيقية: استخدام هاتف أندرويد كنقطة نهاية متوافقة مع OpenAI لأدوات البرمجة على الحاسوب، مع تشغيل نماذج GGUF على الجهاز في الوقت نفسه. تصف صفحة Play مجموعة ميزات تتجاوز معظم تطبيقات الدردشة على الهواتف — خدمة الشبكة المحلية، والتوجيه متعدد المزوّدين، والتحويل عند الفشل، والتجميع، وتشخيصات الحركة — وتوحي مؤشرات المتجر، أكثر من 10 آلاف تنزيل وتقييم 4.2، باستخدام حقيقي. في المقابل، التطبيق أداة مغلقة غير مدقَّقة من مطوّر بلا موقع ظاهر، وإصداره وترخيصه وحدّه الأدنى للعتاد ونطاق مشترياته كلها غير منشورة، واسمه يدعو إلى الخلط بينه وبين مشروع Ollama. يناسب المطوّرين الذين يريدون تجربة إعداد الهاتف كبوابة على شبكة خاصة؛ أما القراء الذين يحتاجون إلى كود قابل للتدقيق أو إلى دعم iOS فعليهم البدء بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Maid](/ar/power-local-llm/maid-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Ollama Local AI على Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) — الوصف، واسم المطوّر، وإعلان أمان البيانات، وعدد التنزيلات، والتقييم، وتاريخ آخر تحديث، جرى التحقق منها في 2 أكتوبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لأندرويد و iOS.',
          '[مراجعة Maid](/ar/power-local-llm/maid-review) — تطبيق أندرويد مفتوح المصدر لنماذج GGUF المحلية أو المزوّدين البعيدين.',
          '[مراجعة RikkaHub](/ar/power-local-llm/rikkahub-review) — عميل أندرويد متعدد المزوّدين.',
          '[مراجعة Layla](/ar/power-local-llm/layla-review) — تطبيق مدفوع على الجهاز بأسلوب الرفيق.',
          '[مراجعة LiteLLM](/ar/power-local-llm/litellm-review) — المسار المقابل على سطح المكتب وجهة الخادم لفكرة نقطة النهاية الواحدة نفسها.',
          '[أفضل تطبيقات LLM المحلية لأندرويد في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — نظرة أوسع على تطبيقات أندرويد.',
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
    heroImage: '/images/ollama-local-ai-review-hero-zh.webp',
    title: 'Ollama Local AI 评测:Android 端 LLM 运行器与局域网 API 代理',
    seoTitle: 'Ollama Local AI 评测:Android LLM 运行器与代理',
    intro:
      'Ollama Local AI 是一款 Android 应用,其开发者在 Google Play 上的署名为 [FreeRouter Team](https://play.google.com/store/apps/details?id=com.llmproxy)。它承担两项功能:一是通过内嵌的 llama.cpp 引擎在手机上运行 GGUF 语言模型;二是在你的 Wi-Fi 网络中提供与 OpenAI 兼容的 API,让 Cursor、VS Code 扩展和 Windsurf 等工具可以把手机当作模型端点来使用。该应用可免费安装,含应用内购买;尽管名称如此,它并非由 Ollama 项目开发,也与 Ollama 项目没有关联。本评测仅基于该应用的 Google Play 页面信息,因为我们没有找到公开的源代码仓库、开发者网站或文档,且 PromptQuorum 并未对该应用进行实测。',
    metaDescription:
      'Ollama Local AI 评测:一款在设备上运行 GGUF 模型、并在局域网中提供 OpenAI 兼容 API 的 Android 应用。梳理 Google Play 页面已确认的内容,以及仍未经验证的部分。',
    twitterDescription:
      'Ollama Local AI 评测:这款 Android 应用让手机成为设备端 LLM 运行器和 OpenAI 兼容的局域网网关。它并非 Ollama 项目的产品——以及 Play 页面没有说明的内容。',
    audience:
      '希望在手机上运行 GGUF 模型,或通过本地 Wi-Fi 让桌面编程工具连接手机的 Android 用户和开发者,并且需要准确了解公开页面信息究竟确认了什么、没有确认什么。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Ollama Local AI 评测',
    targetKeywords: [
      'ollama local ai android',
      'ollama local ai 应用评测',
      'com.llmproxy',
      'android openai 兼容服务器',
      '在 android 手机上运行 llm 局域网',
      'android llm 代理 cursor vs code',
      'freerouter team android 应用',
    ],
    current_models_mentioned: ['Llama 3', 'Mistral', 'Phi', 'Gemma', 'Qwen'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Ollama Local AI 是一款可免费安装的 Android 应用(Google Play 包名 com.llmproxy,开发者署名为 FreeRouter Team),通过 llama.cpp 在设备上运行 GGUF 模型,并向你 Wi-Fi 中的其他设备提供与 OpenAI 兼容的 API。** 它还可以把请求转发到你自托管的 Ollama 实例、llama.cpp 服务器,或 OpenAI、Anthropic 等云端 API。它不属于 Ollama 项目——页面本身就是这么说明的——而且既没有公布许可证、源代码,也没有公布版本号,因此在开发者另行说明之前,应将其视为一款闭源、未经审计的工具。',
    quickAnswerTop: {
      zh: {
        question: 'Ollama Local AI 是 Ollama 官方推出的 Android 应用吗?',
        answer:
          '不是。该应用自己的 Google Play 描述明确称其为独立开发者的工具,与 Ollama、OpenAI、Anthropic 或任何其他提及的服务商均无关联,也未获得它们的赞助或认可。它与 Ollama 同名,但运行的是自带的内嵌 llama.cpp 引擎,并可选择连接你自己托管的 Ollama 服务器。',
        bullets: [
          '两项功能:在手机上运行 GGUF 模型,以及向同一网络中的设备提供与 OpenAI 兼容的 API(/v1/chat/completions、/v1/models、/health)。',
          '仅支持 Android,可免费安装,含应用内购买;页面信息未说明这些购买项解锁了什么。',
          'Google Play 显示下载量 10K+,评分 4.2(267 条评价),最近更新于 2026 年 10 月 1 日。',
          '开发者的"数据安全"部分声明未收集任何数据,也未与第三方共享任何数据——这是一项自我声明,PromptQuorum 并未对其进行审计。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Ollama Local AI 是什么?', anchor: 'what-is-ollama-local-ai' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '如何通过 Wi-Fi 连接你的 IDE', anchor: 'getting-started' },
      { label: '页面信息已确认的功能', anchor: 'key-features' },
      { label: '隐私与数据安全', anchor: 'privacy' },
      { label: '权衡:优点与局限', anchor: 'tradeoffs' },
      { label: '适合谁使用', anchor: 'who-should-use' },
      { label: '我们无法验证的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
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
            text: 'Ollama Local AI 是 FreeRouter Team 开发的一款 Android 应用,通过 llama.cpp 在设备上运行 GGUF 模型,并在本地网络中提供与 OpenAI 兼容的 API;它与 Ollama 项目没有关联。',
          },
          {
            type: 'plain-terms',
            text: '你把它安装到 Android 手机上,加载一个模型或添加你的云端 API 密钥,点击 Start Server,然后让 Cursor 或 VS Code 等工具指向手机的本地地址,而不是指向 OpenAI——这样就由手机来完成工作或转发请求,而不是你的电脑。',
          },
        ],
        items: [
          '开发者:在 [Google Play](https://play.google.com/store/apps/details?id=com.llmproxy) 上署名为 FreeRouter Team,分类为"效率";页面信息中没有链接任何网站或代码仓库。',
          '价格:可免费安装,含应用内购买,其具体内容未作说明。',
          '设备端模型:GGUF 文件通过内嵌的 llama.cpp 引擎运行;页面信息列举了 Llama 3、Mistral、Phi、Gemma 和 Qwen 作为示例。',
          '局域网网关:向 Wi-Fi 中的其他设备提供 OpenAI 风格的端点,并可路由到本地模型、自托管的 Ollama、llama.cpp 服务器、OpenAI、Anthropic、NVIDIA NIM 和 Hugging Face。',
          '2026 年 10 月 2 日的商店信号:下载量 10K+,评分 4.2 星(267 条评价),最近更新于 2026 年 10 月 1 日。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测仅基于 Google Play 页面信息,核实于 2026 年 10 月 2 日。PromptQuorum 没有找到该应用的公开源代码、许可证、文档或版本号,也未对其进行实测或基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-ollama-local-ai',
        title: 'Ollama Local AI 是什么?',
        content: [
          '**Ollama Local AI 是一款 Android 应用,将设备端模型运行器与本地网络 API 网关结合在一起。** 根据其 [Google Play 页面](https://play.google.com/store/apps/details?id=com.llmproxy),它通过内嵌的 [llama.cpp](https://github.com/ggml-org/llama.cpp) 引擎,直接在手机的 CPU 或 GPU 上运行量化后的 GGUF 模型,同时还可以充当路由器,把请求转发到你配置的其他后端。',
          '名称是造成困惑的主要原因。该页面末尾的免责声明称,该应用是独立开发者的工具,与 Ollama、OpenAI、Anthropic 或任何提及的服务商均无关联,也未获得它们的赞助或认可。该应用可以连接你在别处托管的 [Ollama](https://ollama.com) 服务器,但并未内嵌 Ollama 本身。搜索结果与 Play 包名(com.llmproxy)指向的是同一个应用。',
        ],
        note: 'GGUF 是一种文件格式,用于打包经过量化的开放权重语言模型,使 llama.cpp 等运行时能够在包括手机在内的消费级硬件上加载这些模型。',
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**页面信息指向的唯一官方渠道是 Google Play;页面中没有链接任何 iOS 版本、桌面版本、APK 镜像或 GitHub 发布页。**',
        ],
        columns: ['平台', '获取渠道'],
        rows: [
          {
            '平台': 'Android',
            '获取渠道': '[Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)',
          },
          {
            '平台': 'iOS / 桌面端',
            '获取渠道': '据页面信息,未提供',
          },
        ],
        note: '本页是该应用在[本地 LLM 软件目录](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)中条目的配套资料。PromptQuorum 能读取到的页面文字中没有显示版本号,因此本文不作说明;请在 Play 页面查看当前版本。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何通过 Wi-Fi 连接你的 IDE',
        content: [
          '**页面自带的快速入门共有四个步骤,全部在手机和同一个私有网络上完成。** PromptQuorum 并未实际执行过这些步骤。',
        ],
        numberedItems: [
          {
            title: '启动服务器',
            whyItMatters: '打开应用,选择一个本地 GGUF 模型或输入云端服务商的密钥,然后点击"Start Server"。',
          },
          {
            title: '记下端点地址',
            whyItMatters: '应用会显示手机的本地 IP 和端口,例如页面自带示例中的 http://192.168.1.50:8080/v1。',
          },
          {
            title: '让你的工具指向它',
            whyItMatters: '在 Cursor 中,填入任意占位符作为 OpenAI 密钥,并覆盖基础 URL。在 Continue、Cline 或 Roo Code 等 VS Code 扩展中,将服务商类型设为 openai,并把 apiBase 或 baseUrl 设为手机的地址。在 Windsurf 中,把自定义 OpenAI 模型端点指向它。',
          },
          {
            title: '开始编码',
            whyItMatters: '随后,桌面工具发出的请求和智能体循环就由手机处理,要么由设备端模型完成,要么由它所路由到的服务商完成。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '页面信息已确认的功能',
        content: [
          '**以下每一项都来自开发者自己的 Play 描述;均未经过独立测试。**',
        ],
        items: [
          '**OpenAI 风格的端点。** /v1/chat/completions、/v1/models 和 /health,同一 Wi-Fi 或局域网子网内的任何机器都可访问。',
          '**多服务商路由。** 可在设备端模型、自托管的 Ollama 实例、llama.cpp 服务器以及云端 API 直连(OpenAI、Anthropic Claude、NVIDIA NIM、Hugging Face)之间切换。',
          '**代理控制。** 请求池、服务商超时、限流、自动故障转移和轮询分发。',
          '**局域网 Master/Worker 集群。** 将同一网络中的多台 Android 设备配对,把内存和算力汇集成一个推理集群。',
          '**跨设备 WebUI。** 在同一网络中的电脑或平板浏览器上即可访问的聊天界面和服务器管理控制台。',
          '**WebX Live Canvas。** 在聊天中生成并预览 HTML、Tailwind CSS 和 JavaScript。',
          '**Traffic Observatory。** 以代理诊断的形式显示令牌生成速度、延迟指标和请求负载。',
          '**列出的兼容客户端。** Cursor、VS Code、Windsurf、JetBrains、LangChain、LlamaIndex、LiteLLM、AutoGen、CrewAI、Continue.dev、Cline、Roo Code、Aider 和 Open WebUI。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据安全',
        content: [
          '**该应用的 Google Play"数据安全"部分声明未收集任何数据,也未与第三方共享任何数据。** 这是开发者的自我声明,而非审计结果,PromptQuorum 并未检查该应用的网络流量或代码。',
          '描述中还补充了一些具体说法:服务商凭据通过 AES-256 EncryptedSharedPreferences 存储在设备上,发往自定义云端端点的请求则直接从手机发送给服务商,中间没有任何中转服务器。隐私状况还取决于路由方式:发送给 OpenAI、Anthropic 或其他云端服务商的请求会离开你的网络,并受该服务商条款的约束,无论该应用自身如何声明。只有由设备端模型应答的请求才会留在手机上。',
        ],
        callouts: [
          {
            type: 'note',
            text: '据 PromptQuorum 所能找到的信息,该应用是闭源的,因此上述说法无法对照代码进行核查。处理受监管或机密数据的用户,在依赖这些说法之前应自行验证其行为。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡:优点与局限',
        columns: ['优点', '实际使用中的含义', '局限 / 提醒'],
        rows: [
          {
            '优点': '手机充当 API 端点',
            '实际使用中的含义': '桌面编程工具无需另外搭建服务器,即可使用手机上的模型或路由。',
            '局限 / 提醒': '速度受限于手机硬件,页面信息未给出任何基准数据。',
          },
          {
            '优点': '设备端 GGUF 模型',
            '实际使用中的含义': '据页面信息,与本地模型聊天无需联网。',
            '局限 / 提醒': '可用的模型大小取决于手机内存;页面信息未说明最低要求。',
          },
          {
            '优点': '一个网关,多个后端',
            '实际使用中的含义': '本地模型、Ollama、llama.cpp 服务器和云端 API 都位于同一个地址之后。',
            '局限 / 提醒': '路由到云端的请求会离开你的网络,并遵循服务商的数据条款。',
          },
          {
            '优点': '可免费安装',
            '实际使用中的含义': '无需先付费即可体验核心流程。',
            '局限 / 提醒': '存在应用内购买,页面信息未说明其具体内容。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**手头有闲置 Android 手机的开发者。** Cursor、VS Code 和 Windsurf 的快速入门是该应用的核心使用场景,手机可以分担主力电脑的工作。',
          '**希望在多个后端前面放一个 OpenAI 风格地址的用户。** 路由、故障转移和限流控制正是面向这种配置。',
          '**愿意在私有网络中试用未经审计工具的家庭实验室用户。** 免费安装让试用成本很低。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法验证的内容',
        items: [
          '**许可证与源代码。** 页面信息中两者均未说明,也没有找到公开的代码仓库,因此该应用被视为闭源;需要可审计代码的读者,应从下方的替代方案中选择开源应用。',
          '**版本号。** PromptQuorum 能读取到的页面文字中没有显示版本,因此本文无法将各项说法对应到某个具体版本。',
          '**应用内购买。** 页面信息称存在应用内购买,但没有说明它们解锁了什么,也没有说明价格。',
          '**硬件门槛与性能。** 未公布最低内存、Android 版本或速度数据。',
          '**开发者身份。** 页面信息显示的是 FreeRouter Team 这一名称和一个联系邮箱,没有网站或公司信息。',
          '**不适合 iOS 或桌面端用户。** 该应用仅支持 Android。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          {
            '应用': 'Ollama Local AI',
            '平台': 'Android',
            '价格 / 许可证': '免费 + 内购 / 未说明',
            '主要区别': '向局域网提供与 OpenAI 兼容的 API,并路由到云端和自托管后端',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'Android, iOS',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源的设备端聊天客户端;其核心设计中没有局域网 API 服务器',
          },
          {
            '应用': '[Maid](/zh/power-local-llm/maid-review)',
            '平台': 'Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '面向本地 GGUF 或远程服务商的开源聊天应用;是客户端,而非网络网关',
          },
          {
            '应用': '[RikkaHub](/zh/power-local-llm/rikkahub-review)',
            '平台': 'Android',
            '价格 / 许可证': '免费 / 开源',
            '主要区别': '多服务商聊天客户端,而不是为其他设备提供服务的服务器',
          },
          {
            '应用': '[Layla](/zh/power-local-llm/layla-review)',
            '平台': 'Android, iOS',
            '价格 / 许可证': '付费 / 闭源',
            '主要区别': '主打伴侣与角色扮演,并提供可选的云端模式',
          },
        ],
        note: '竞品的详细信息经常变化;请在各应用自己的页面上确认其当前价格和许可证。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Ollama Local AI 是 Ollama 团队开发的吗?',
            a: '不是。该页面的免责声明称,该应用是独立的,与 Ollama 没有关联,也未获得其认可。它可以连接你自己运行的 Ollama 服务器,但自带 llama.cpp 引擎。',
          },
          {
            q: 'Google Play 包名是什么?',
            a: '包名 ID 是 com.llmproxy,所以尽管它在商店中的名称是 Ollama Local AI,在搜索"LLM Proxy"时也会出现这款应用。',
          },
          {
            q: '它能在 iPhone 或桌面端使用吗?',
            a: '据页面信息,不能:Google Play 是它链接的唯一渠道,也没有提到任何 iOS 或桌面版本。',
          },
          {
            q: '它能在手机上运行哪些模型?',
            a: '通过 llama.cpp 运行 GGUF 格式的模型。页面信息列举了 Llama 3、Mistral、Phi、Gemma 和 Qwen 作为示例;能容纳多大的模型取决于你手机的内存,而页面信息并未说明这一点。',
          },
          {
            q: '我可以把它和 Cursor 或 VS Code 一起使用吗?',
            a: '页面信息描述的正是这种用法:在手机上启动服务器,然后把工具的 OpenAI 基础 URL 设为手机的本地地址。PromptQuorum 并未测试过这些步骤。',
          },
          {
            q: '我的数据会留在手机上吗?',
            a: '仅限由设备端模型应答的请求。路由到 OpenAI、Anthropic、NVIDIA NIM 或 Hugging Face 的请求会发送给这些服务商,而开发者"未收集数据"的声明未经审计。',
          },
          {
            q: '它是开源的吗?',
            a: '页面中没有说明许可证或代码仓库,我们也没有找到,因此 PromptQuorum 将其列为闭源。如果开发者日后公开,本评测会随之更新。',
          },
          {
            q: '应用内购买解锁了什么?',
            a: '页面信息没有说明。购买前请先在应用内查看,如果结果不符合预期,可使用 Google Play 的退款期限。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Ollama Local AI 满足的是一个狭窄但真实的需求:把 Android 手机用作桌面编程工具的 OpenAI 兼容端点,同时在设备上运行 GGUF 模型。Play 页面描述的功能集比大多数手机聊天应用走得更远——局域网服务、多服务商路由、故障转移、集群和流量诊断——10K+ 的下载量和 4.2 的评分也表明确实有人在使用。但另一方面,这是一款闭源、未经审计的工具,开发者没有可见的网站,其版本、许可证、硬件门槛和购买范围均未公布,而且它的名称容易让人与 Ollama 项目混淆。它适合想在私有网络中尝试"手机即网关"配置的开发者;需要可审计代码或 iOS 支持的读者,应先从 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review) 或 [Maid](/zh/power-local-llm/maid-review) 入手。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Google Play 上的 Ollama Local AI](https://play.google.com/store/apps/details?id=com.llmproxy) — 描述、开发者名称、数据安全声明、下载量、评分和最近更新日期,核实于 2026 年 10 月 2 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 一款适用于 Android 和 iOS 的免费开源设备端聊天客户端。',
          '[Maid 评测](/zh/power-local-llm/maid-review) — 一款面向本地 GGUF 或远程服务商的开源 Android 应用。',
          '[RikkaHub 评测](/zh/power-local-llm/rikkahub-review) — 一款多服务商 Android 客户端。',
          '[Layla 评测](/zh/power-local-llm/layla-review) — 一款付费的伴侣式设备端应用。',
          '[LiteLLM 评测](/zh/power-local-llm/litellm-review) — 实现同一"单一端点"理念的桌面端和服务器端方案。',
          '[2026 年最佳 Android 本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用汇总。',
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
    heroImage: '/images/ollama-local-ai-review-hero-ko.webp',
    title: 'Ollama Local AI 리뷰: Android LLM 실행기 겸 LAN API 프록시',
    seoTitle: 'Ollama Local AI 리뷰: Android LLM 실행기·프록시',
    intro:
      'Ollama Local AI는 Google Play에 [FreeRouter Team](https://play.google.com/store/apps/details?id=com.llmproxy)이라는 이름으로 등록된 개발자가 만든 Android 앱으로, 두 가지 역할을 합니다. 내장된 llama.cpp 엔진으로 휴대폰에서 GGUF 언어 모델을 실행하고, Wi-Fi에서 OpenAI 호환 API를 제공하여 Cursor, VS Code 확장 프로그램, Windsurf 같은 도구가 휴대폰을 모델 엔드포인트로 사용할 수 있게 합니다. 설치는 무료이며 앱 내 구매가 있고, 이름과 달리 Ollama 프로젝트가 만들었거나 Ollama와 제휴한 앱이 아닙니다. 공개 소스 저장소, 개발자 웹사이트, 문서를 찾을 수 없었고 PromptQuorum이 앱을 직접 테스트하지도 않았기 때문에, 이 리뷰는 앱의 Google Play 게재 정보만을 근거로 합니다.',
    metaDescription:
      'Ollama Local AI 리뷰: GGUF 모델을 기기에서 실행하고 LAN에 OpenAI 호환 API를 제공하는 Android 앱입니다. Ollama 프로젝트와는 무관하며, Google Play 게재 정보로 확인되는 내용과 확인되지 않은 내용을 정리했습니다.',
    twitterDescription:
      'Ollama Local AI 리뷰: 휴대폰을 온디바이스 LLM 실행기이자 OpenAI 호환 LAN 게이트웨이로 바꿔 주는 Android 앱. Ollama 프로젝트와는 무관하며, Play 게재 정보에 나와 있지 않은 내용도 다룹니다.',
    audience:
      '휴대폰에서 GGUF 모델을 실행하거나 로컬 Wi-Fi를 통해 데스크톱 코딩 도구를 휴대폰에 연결하려는 Android 이용자와 개발자로, 공개된 게재 정보가 무엇을 확인해 주고 무엇을 확인해 주지 않는지 정확히 알아야 하는 분들.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Ollama Local AI 리뷰',
    targetKeywords: [
      'ollama local ai 안드로이드',
      'ollama local ai 앱 리뷰',
      'com.llmproxy',
      '안드로이드 openai 호환 서버',
      '안드로이드 폰에서 llm 실행 lan',
      '안드로이드 llm 프록시 cursor vs code',
      'freerouter team 안드로이드 앱',
    ],
    current_models_mentioned: ['Llama 3', 'Mistral', 'Phi', 'Gemma', 'Qwen'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Ollama Local AI는 llama.cpp를 통해 GGUF 모델을 기기에서 실행하고 같은 Wi-Fi의 다른 기기에 OpenAI 호환 API를 제공하는, 설치 무료 Android 앱(Google Play 패키지 com.llmproxy, 개발자명 FreeRouter Team)입니다.** 자체 호스팅한 Ollama 인스턴스, llama.cpp 서버, OpenAI·Anthropic 같은 클라우드 API로 요청을 전달할 수도 있습니다. 게재 정보 자체에 명시되어 있듯이 Ollama 프로젝트의 일부가 아니며, 라이선스, 소스 코드, 버전 번호도 공개되어 있지 않으므로 개발자가 달리 밝히기 전까지는 감사되지 않은 클로즈드 유틸리티로 간주해야 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Ollama Local AI는 Android용 공식 Ollama 앱입니까?',
        answer:
          '아닙니다. 앱의 Google Play 설명에는 이 앱이 독립 개발자의 유틸리티이며 Ollama, OpenAI, Anthropic 또는 그 밖에 언급된 어떤 제공업체와도 제휴, 후원, 보증 관계가 없다고 명시되어 있습니다. 이름은 같지만 자체 내장 llama.cpp 엔진을 실행하며, 이용자가 직접 호스팅하는 Ollama 서버에 선택적으로 연결할 수 있습니다.',
        bullets: [
          '두 가지 기능: 휴대폰에서 GGUF 모델 실행, 그리고 같은 네트워크의 기기에 OpenAI 호환 API(/v1/chat/completions, /v1/models, /health) 제공.',
          'Android 전용이며 설치는 무료, 앱 내 구매 있음. 구매로 무엇이 열리는지는 게재 정보에 나와 있지 않음.',
          'Google Play 기준 다운로드 1만 회 이상, 267건의 리뷰에서 평점 4.2, 최종 업데이트 2026년 10월 1일.',
          '개발자의 데이터 보안 섹션에는 수집하는 데이터도, 제3자와 공유하는 데이터도 없다고 선언되어 있으며, 이는 PromptQuorum이 감사하지 않은 자체 선언임.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Ollama Local AI란 무엇인가?', anchor: 'what-is-ollama-local-ai' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: 'Wi-Fi로 IDE를 연결하는 방법', anchor: 'getting-started' },
      { label: '게재 정보로 확인되는 기능', anchor: 'key-features' },
      { label: '개인정보와 데이터 보안', anchor: 'privacy' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
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
            text: 'Ollama Local AI는 FreeRouter Team이 만든 Android 앱으로, llama.cpp를 통해 GGUF 모델을 기기에서 실행하고 로컬 네트워크에 OpenAI 호환 API를 제공하며, Ollama 프로젝트와는 제휴 관계가 없습니다.',
          },
          {
            type: 'plain-terms',
            text: 'Android 휴대폰에 설치하고, 모델을 불러오거나 클라우드 API 키를 추가한 뒤 Start Server를 누르면, Cursor나 VS Code 같은 도구를 OpenAI 대신 휴대폰의 로컬 주소로 연결할 수 있습니다. 즉 컴퓨터가 아니라 휴대폰이 작업을 처리하거나 요청을 중계합니다.',
          },
        ],
        items: [
          '개발자: [Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)에 FreeRouter Team으로 등록, 카테고리는 생산성이며 게재 정보에서 연결되는 웹사이트나 저장소는 없음.',
          '가격: 설치 무료, 앱 내 구매가 있으나 구매 내용은 설명되어 있지 않음.',
          '온디바이스 모델: 내장 llama.cpp 엔진으로 GGUF 파일을 실행하며, 게재 정보에는 Llama 3, Mistral, Phi, Gemma, Qwen이 예로 언급됨.',
          'LAN 게이트웨이: 같은 Wi-Fi의 다른 기기에 OpenAI 방식 엔드포인트를 제공하며, 로컬 모델, 자체 호스팅 Ollama, llama.cpp 서버, OpenAI, Anthropic, NVIDIA NIM, Hugging Face로 라우팅할 수 있음.',
          '2026년 10월 2일 기준 스토어 지표: 다운로드 1만 회 이상, 267건의 리뷰에서 별 4.2개, 최종 업데이트 2026년 10월 1일.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 2일에 확인한 Google Play 게재 정보만을 근거로 합니다. PromptQuorum은 이 앱의 공개 소스 코드, 라이선스, 문서, 버전 번호를 찾지 못했으며 앱을 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-ollama-local-ai',
        title: 'Ollama Local AI란 무엇인가?',
        content: [
          '**Ollama Local AI는 온디바이스 모델 실행기와 로컬 네트워크 API 게이트웨이를 결합한 Android 앱입니다.** [Google Play 게재 정보](https://play.google.com/store/apps/details?id=com.llmproxy)에 따르면, 내장된 [llama.cpp](https://github.com/ggml-org/llama.cpp) 엔진을 통해 양자화된 GGUF 모델을 휴대폰의 CPU 또는 GPU에서 직접 실행하며, 이용자가 설정한 다른 백엔드로 요청을 전달하는 라우터 역할도 할 수 있습니다.',
          '혼동의 가장 큰 원인은 이름입니다. 게재 정보 마지막의 면책 문구에는 이 앱이 독립 개발자의 유틸리티이며 Ollama, OpenAI, Anthropic 또는 언급된 어떤 제공업체와도 제휴, 후원, 보증 관계가 없다고 되어 있습니다. 이 앱은 다른 곳에서 이용자가 호스팅하는 [Ollama](https://ollama.com) 서버에 연결할 수 있지만 Ollama 자체를 내장하고 있지는 않습니다. 검색 결과와 Play 패키지 이름(com.llmproxy)은 모두 같은 앱을 가리킵니다.',
        ],
        note: 'GGUF는 양자화된 오픈 웨이트 언어 모델을 담는 파일 형식으로, llama.cpp 같은 런타임이 휴대폰을 포함한 소비자용 하드웨어에서 불러올 수 있습니다.',
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**게재 정보가 안내하는 공식 채널은 Google Play뿐이며, iOS 빌드, 데스크톱 빌드, APK 미러, GitHub 릴리스는 연결되어 있지 않습니다.**',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.llmproxy)',
          },
          {
            '플랫폼': 'iOS / 데스크톱',
            '받는 곳': '게재 정보 기준 미제공',
          },
        ],
        note: '이 페이지는 [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)에 있는 이 앱 항목의 보조 자료입니다. PromptQuorum이 읽을 수 있었던 게재 정보 텍스트에는 버전 번호가 없어 여기에도 버전을 적지 않았으니, 현재 빌드는 Play 페이지에서 확인하세요.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Wi-Fi로 IDE를 연결하는 방법',
        content: [
          '**게재 정보 자체의 빠른 시작 안내는 네 단계이며, 모두 휴대폰과 같은 사설 네트워크에서 진행합니다.** PromptQuorum은 이 단계를 직접 실행해 보지 않았습니다.',
        ],
        numberedItems: [
          {
            title: '서버 시작',
            whyItMatters: '앱을 열고 로컬 GGUF 모델을 고르거나 클라우드 제공업체 키를 입력한 다음 "Start Server"를 누릅니다.',
          },
          {
            title: '엔드포인트 확인',
            whyItMatters: '앱에 휴대폰의 로컬 IP와 포트가 표시되며, 게재 정보 자체의 예시는 http://192.168.1.50:8080/v1 입니다.',
          },
          {
            title: '도구를 연결',
            whyItMatters: 'Cursor에서는 OpenAI 키에 아무 임시 값을 입력하고 base URL을 덮어씁니다. Continue, Cline, Roo Code 같은 VS Code 확장 프로그램에서는 제공업체 유형을 openai로 설정하고 apiBase 또는 baseUrl을 휴대폰 주소로 지정합니다. Windsurf에서는 커스텀 OpenAI 모델 엔드포인트가 휴대폰을 가리키도록 설정합니다.',
          },
          {
            title: '코딩 시작',
            whyItMatters: '이후 데스크톱 도구의 요청과 에이전트 루프는 온디바이스 모델 또는 라우팅 대상 제공업체를 통해 휴대폰이 처리합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '게재 정보로 확인되는 기능',
        content: [
          '**아래 항목은 모두 개발자 본인의 Play 설명에서 가져온 것이며, 어느 것도 독립적으로 테스트되지 않았습니다.**',
        ],
        items: [
          '**OpenAI 방식 엔드포인트.** /v1/chat/completions, /v1/models, /health이며, 같은 Wi-Fi 또는 LAN 서브넷의 모든 기기에서 접근할 수 있음.',
          '**멀티 제공업체 라우팅.** 온디바이스 모델, 자체 호스팅 Ollama 인스턴스, llama.cpp 서버, 직접 클라우드 API(OpenAI, Anthropic Claude, NVIDIA NIM, Hugging Face) 사이를 전환.',
          '**프록시 제어.** 요청 풀, 제공업체 타임아웃, 속도 제한, 자동 페일오버, 라운드 로빈 분배.',
          '**LAN 마스터/워커 클러스터링.** 같은 네트워크의 Android 기기 여러 대를 연결해 메모리와 연산 자원을 추론 클러스터로 통합.',
          '**크로스 디바이스 WebUI.** 같은 네트워크의 PC나 태블릿 브라우저에서 접근할 수 있는 채팅 인터페이스와 서버 관리 콘솔.',
          '**WebX Live Canvas.** 채팅 안에서 HTML, Tailwind CSS, JavaScript를 생성하고 미리 보기.',
          '**Traffic Observatory.** 토큰 생성 속도, 지연 시간 지표, 요청 페이로드를 프록시 진단 정보로 표시.',
          '**호환 클라이언트로 명시된 도구.** Cursor, VS Code, Windsurf, JetBrains, LangChain, LlamaIndex, LiteLLM, AutoGen, CrewAI, Continue.dev, Cline, Roo Code, Aider, Open WebUI.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 데이터 보안',
        content: [
          '**앱의 Google Play 데이터 보안 섹션에는 수집하는 데이터가 없고 제3자와 공유하는 데이터도 없다고 선언되어 있습니다.** 이는 개발자의 자체 선언이지 감사 결과가 아니며, PromptQuorum은 앱의 네트워크 트래픽이나 코드를 검사하지 않았습니다.',
          '설명에는 구체적인 주장이 더 있습니다. 제공업체 자격 증명은 AES-256 EncryptedSharedPreferences로 기기에 저장되고, 커스텀 클라우드 엔드포인트로 가는 요청은 중간 서버 없이 휴대폰에서 제공업체로 직접 전달된다는 것입니다. 개인정보 보호 수준은 라우팅에도 좌우됩니다. OpenAI, Anthropic 등 클라우드 제공업체로 보낸 요청은 앱 자체의 선언과 관계없이 이용자의 네트워크를 벗어나며 해당 제공업체의 약관을 따릅니다. 온디바이스 모델이 응답하는 요청만 휴대폰 안에 머뭅니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum이 확인한 바로는 이 앱은 클로즈드 소스이므로 위 주장을 코드로 검증할 수 없습니다. 규제 대상 데이터나 기밀 데이터를 다루는 경우, 이를 신뢰하기 전에 동작을 직접 검증해야 합니다.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의사항'],
        rows: [
          {
            '이점': '휴대폰이 API 엔드포인트',
            '실제 사용에서의 의미': '별도 서버 없이 데스크톱 코딩 도구가 휴대폰의 모델이나 라우트를 사용할 수 있음.',
            '한계 / 유의사항': '속도는 휴대폰 하드웨어에 좌우되며 게재 정보에는 벤치마크가 없음.',
          },
          {
            '이점': '온디바이스 GGUF 모델',
            '실제 사용에서의 의미': '게재 정보에 따르면 로컬 모델과의 채팅에는 인터넷 연결이 필요 없음.',
            '한계 / 유의사항': '사용 가능한 모델 크기는 휴대폰 RAM에 좌우되며 게재 정보에는 최소 사양이 없음.',
          },
          {
            '이점': '하나의 게이트웨이, 여러 백엔드',
            '실제 사용에서의 의미': '로컬 모델, Ollama, llama.cpp 서버, 클라우드 API를 하나의 주소 뒤에서 사용.',
            '한계 / 유의사항': '클라우드로 라우팅된 요청은 네트워크를 벗어나 제공업체의 데이터 약관을 따름.',
          },
          {
            '이점': '설치 무료',
            '실제 사용에서의 의미': '먼저 결제하지 않고도 핵심 흐름을 시험해 볼 수 있음.',
            '한계 / 유의사항': '앱 내 구매가 있으며 구매 내용은 게재 정보에 설명되어 있지 않음.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**여유 Android 휴대폰이 있는 개발자.** Cursor, VS Code, Windsurf 빠른 시작이 앱의 핵심 사용 사례이며, 휴대폰이 메인 PC의 작업 일부를 덜어 줍니다.',
          '**여러 백엔드 앞에 OpenAI 방식 주소 하나를 두려는 이용자.** 라우팅, 페일오버, 속도 제한 제어는 이런 구성을 겨냥한 것입니다.',
          '**감사되지 않은 유틸리티를 사설 네트워크에서 기꺼이 시험해 볼 홈랩 이용자.** 설치가 무료라 시험 비용이 낮습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**라이선스와 소스 코드.** 게재 정보에 둘 다 명시되어 있지 않고 공개 저장소도 찾지 못했으므로 클로즈드 소스로 간주합니다. 감사 가능한 코드가 필요한 독자는 아래 대안 중 오픈소스 앱을 선택하세요.',
          '**버전 번호.** PromptQuorum이 읽을 수 있었던 게재 정보 텍스트에는 버전이 없어, 이 페이지의 설명을 특정 빌드와 연결할 수 없습니다.',
          '**앱 내 구매.** 게재 정보에는 구매가 있다고만 되어 있고 무엇이 열리는지, 비용이 얼마인지는 나와 있지 않습니다.',
          '**하드웨어 최소 사양과 성능.** 최소 RAM, Android 버전, 속도 수치가 공개되어 있지 않습니다.',
          '**개발자 신원.** 게재 정보에는 FreeRouter Team이라는 이름과 연락처 이메일만 있고 웹사이트나 회사 정보는 없습니다.',
          '**iOS 또는 데스크톱 이용자에게는 적합하지 않음.** 이 앱은 Android 전용입니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': 'Ollama Local AI',
            '플랫폼': 'Android',
            '가격 / 라이선스': '무료 + 앱 내 구매 / 미명시',
            '핵심 차이': 'LAN에 OpenAI 호환 API를 제공하고 클라우드·자체 호스팅 백엔드로 라우팅',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'Android, iOS',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '오픈소스 온디바이스 채팅 클라이언트, 핵심 설계에 LAN API 서버는 없음',
          },
          {
            '앱': '[Maid](/ko/power-local-llm/maid-review)',
            '플랫폼': 'Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '로컬 GGUF 또는 원격 제공업체용 오픈소스 채팅 앱, 네트워크 게이트웨이가 아닌 클라이언트',
          },
          {
            '앱': '[RikkaHub](/ko/power-local-llm/rikkahub-review)',
            '플랫폼': 'Android',
            '가격 / 라이선스': '무료 / 오픈소스',
            '핵심 차이': '다른 기기를 위한 서버가 아닌 멀티 제공업체 채팅 클라이언트',
          },
          {
            '앱': '[Layla](/ko/power-local-llm/layla-review)',
            '플랫폼': 'Android, iOS',
            '가격 / 라이선스': '유료 / 클로즈드 소스',
            '핵심 차이': '컴패니언·롤플레이 중심, 선택적 클라우드 모드 제공',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀌므로 각 앱의 현재 가격과 라이선스는 해당 앱의 게재 정보에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Ollama Local AI는 Ollama 팀이 만든 앱입니까?',
            a: '아닙니다. 게재 정보의 면책 문구에는 이 앱이 독립적이며 Ollama와 제휴하거나 Ollama의 보증을 받은 것이 아니라고 되어 있습니다. 이용자가 직접 운영하는 Ollama 서버에 연결할 수 있지만 자체 llama.cpp 엔진을 포함하고 있습니다.',
          },
          {
            q: 'Google Play 패키지 이름은 무엇입니까?',
            a: '패키지 ID는 com.llmproxy이며, 그래서 스토어 이름은 Ollama Local AI인데도 "LLM Proxy" 검색에서 이 앱이 나타납니다.',
          },
          {
            q: 'iPhone이나 데스크톱에서도 작동합니까?',
            a: '게재 정보 기준으로는 아닙니다. Google Play가 연결된 유일한 채널이며 iOS나 데스크톱 빌드는 언급되어 있지 않습니다.',
          },
          {
            q: '휴대폰에서 어떤 모델을 실행할 수 있습니까?',
            a: 'llama.cpp를 통한 GGUF 형식 모델입니다. 게재 정보에는 Llama 3, Mistral, Phi, Gemma, Qwen이 예로 언급되어 있으며, 어떤 크기가 들어가는지는 게재 정보에 명시되지 않은 휴대폰 RAM에 따라 달라집니다.',
          },
          {
            q: 'Cursor나 VS Code와 함께 사용할 수 있습니까?',
            a: '게재 정보가 바로 그 방식을 설명합니다. 휴대폰에서 서버를 시작한 다음 도구의 OpenAI base URL을 휴대폰의 로컬 주소로 설정하는 것입니다. PromptQuorum은 이 단계를 테스트하지 않았습니다.',
          },
          {
            q: '내 데이터는 휴대폰에 머뭅니까?',
            a: '온디바이스 모델이 응답하는 요청에 한해서만 그렇습니다. OpenAI, Anthropic, NVIDIA NIM, Hugging Face로 라우팅된 요청은 해당 제공업체로 전달되며, 개발자의 데이터 미수집 선언은 감사되지 않았습니다.',
          },
          {
            q: '오픈소스입니까?',
            a: '라이선스나 저장소가 명시되어 있지 않고 찾을 수도 없었으므로 PromptQuorum은 클로즈드 소스로 분류합니다. 개발자가 공개하면 이 리뷰를 업데이트하겠습니다.',
          },
          {
            q: '앱 내 구매로는 무엇이 열립니까?',
            a: '게재 정보에는 나와 있지 않습니다. 구매 전에 앱 안에서 확인하고, 결과가 기대와 다르면 Google Play의 환불 기간을 활용하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Ollama Local AI는 좁지만 실재하는 필요를 겨냥합니다. Android 휴대폰을 데스크톱 코딩 도구용 OpenAI 호환 엔드포인트로 쓰면서 기기에서 GGUF 모델도 실행하려는 경우입니다. Play 게재 정보에 설명된 기능은 LAN 서비스, 멀티 제공업체 라우팅, 페일오버, 클러스터링, 트래픽 진단 등 대부분의 휴대폰 채팅 앱보다 폭이 넓고, 다운로드 1만 회 이상과 평점 4.2라는 스토어 지표는 실제 사용이 있음을 시사합니다. 반면 이 앱은 보이는 웹사이트가 없는 개발자의 클로즈드 소스이자 감사되지 않은 유틸리티이고, 버전, 라이선스, 하드웨어 최소 사양, 구매 범위가 모두 공개되어 있지 않으며, 이름 때문에 Ollama 프로젝트와 혼동하기 쉽습니다. 사설 네트워크에서 휴대폰을 게이트웨이로 쓰는 구성을 실험해 보려는 개발자에게는 맞지만, 감사 가능한 코드나 iOS 지원이 필요한 독자는 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Maid](/ko/power-local-llm/maid-review)부터 시작하는 것이 좋습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 Ollama Local AI](https://play.google.com/store/apps/details?id=com.llmproxy) — 설명, 개발자 이름, 데이터 보안 선언, 다운로드 수, 평점, 최종 업데이트 날짜. 2026년 10월 2일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — Android·iOS용 무료 오픈소스 온디바이스 채팅 클라이언트.',
          '[Maid 리뷰](/ko/power-local-llm/maid-review) — 로컬 GGUF 또는 원격 제공업체용 오픈소스 Android 앱.',
          '[RikkaHub 리뷰](/ko/power-local-llm/rikkahub-review) — 멀티 제공업체 Android 클라이언트.',
          '[Layla 리뷰](/ko/power-local-llm/layla-review) — 유료 컴패니언형 온디바이스 앱.',
          '[LiteLLM 리뷰](/ko/power-local-llm/litellm-review) — 같은 단일 엔드포인트 개념을 데스크톱·서버 쪽에서 구현하는 방법.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — 더 폭넓은 Android 종합 정리.',
        ],
      },
    },
  },
}
