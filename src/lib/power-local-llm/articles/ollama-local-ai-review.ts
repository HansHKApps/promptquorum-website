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
}
