// LocalMind Review: Free Android and iPhone Chat App for On-Device and Self-Hosted Models
// Slug: localmind-review
// Companion to: enchanted-review, pocketpal-ai-review, lm-playground-review, private-mind-review,
// best-local-llm-apps-android-2026, best-local-llm-apps-iphone-2026
// Sources: Google Play listing, App Store listing, public GitHub repository (README, MIT license, releases),
// privacy policy and developer site, all checked 2026-10-17 — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmind-review-hero-en.webp',
    title: 'LocalMind Review: Free Chat App for On-Device and Self-Hosted Models',
    seoTitle: 'LocalMind Review: Free Android and iPhone LLM Chat App',
    intro:
      'LocalMind is a free, MIT-licensed chat app for Android and iPhone by the independent developer [Abdul Momin Sakib](https://momin.pro). It sends prompts to a model on the phone or to a server or provider you choose: Ollama, LM Studio, OpenRouter, or any OpenAI-compatible endpoint. This review is based on the [Google Play listing](https://play.google.com/store/apps/details?id=pro.momin.localmind), the [App Store listing](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480), the [privacy policy](https://momin.pro/privacy-policy-localmind), and the public [GitHub repository](https://github.com/abdulmominsakib/localmind), checked on 17 October 2026; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'LocalMind review: free MIT-licensed Android and iPhone chat app for on-device models, Ollama, LM Studio and OpenRouter. Backends, privacy, limits.',
    twitterDescription:
      'LocalMind review: an open-source Android and iPhone chat app for on-device models and your own Ollama or LM Studio server, plus MCP tools and open questions.',
    audience:
      'Android and iPhone users who want a free, open-source chat app for local or self-hosted language models, and who need to know which backends it supports, what stays on the device, and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMind review',
    targetKeywords: [
      'localmind app review',
      'localmind ollama android',
      'ollama client for iphone',
      'lm studio mobile app',
      'open source local llm app android ios',
      'run llm on phone offline',
      'mcp client android app',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'DeepSeek R1', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMind (version 1.9.0, released on 14 October 2026) is a free, MIT-licensed chat app that can run small models on the phone and also connect to a server you control.** It needs no account; the connection options are Ollama, LM Studio, any OpenAI-compatible server, and OpenRouter or Requesty with your own API key. One caveat shapes how to read the store pages: the Google Play description presents it as a remote client only.',
    quickAnswerTop: {
      en: {
        question: 'Is LocalMind free, open source, and private?',
        answer:
          'Per its listings and repository, yes: the app is free with no ads or purchases shown, the code is under the MIT license, and both stores declare that no data is collected. Network traffic goes only to the server or provider you configure.',
        bullets: [
          'Free on [Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) and the [App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480); APK and source on [GitHub](https://github.com/abdulmominsakib/localmind).',
          'Backends: on-device GGUF and LiteRT models, Ollama, LM Studio, OpenRouter, Requesty, and OpenAI-compatible servers.',
          'Chat extras: reasoning display, voice dictation and playback, file and photo attachments, personas, and MCP tools.',
          'Store signals as checked on 17 October 2026: 10K+ Google Play downloads at 4.4 stars from 279 reviews, 4.7 stars from 13 US App Store ratings, 281 GitHub stars.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is LocalMind?', anchor: 'what-is-localmind' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Which Models and Servers Can It Use?', anchor: 'backends' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Privacy and Network Use', anchor: 'privacy' },
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
            text: 'LocalMind turns an Android phone or iPhone into one chat front end for small on-device models, your own Ollama or LM Studio server, and cloud models reached with your own key.',
          },
          {
            type: 'plain-terms',
            text: 'You install it from a store, choose where the model runs, and chat without creating an account; only the server or provider you pick receives your prompts.',
          },
        ],
        items: [
          'Developer: Abdul Momin Sakib, an independent Flutter developer; the public repository dates from April 2026 and credits six contributors, so the project is young.',
          'Platforms: Android and iPhone, installed from Google Play or the App Store; an APK is also attached to each GitHub release.',
          'Recency: GitHub release 1.9.0 appeared on 14 October 2026 and the App Store lists the same version updated on 15 October 2026, which points to active maintenance.',
          'Models: small GGUF and LiteRT models on the device, or any model your server or provider exposes.',
          'Open question: the store pages and the README describe the app differently; see the verification list below.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Google Play and App Store listings, the privacy policy, the developer site, and the public GitHub repository (README, license, releases, and release notes), checked on 17 October 2026. PromptQuorum has not tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmind',
        title: 'What Is LocalMind?',
        content: [
          '**LocalMind is a Flutter-built chat app that sends your prompts either to a model on the phone or to a server or provider you choose.** According to the [README](https://github.com/abdulmominsakib/localmind), on-device models are GGUF files run through llama.cpp and LiteRT models such as Gemma, while remote options include [Ollama](https://ollama.com/), [LM Studio](https://lmstudio.ai/), [OpenRouter](https://openrouter.ai/), and [Requesty](https://www.requesty.ai/).',
          'The developer, Abdul Momin Sakib, lists LocalMind on his [portfolio site](https://momin.pro) and publishes it on both stores as "LocalMind: Ollama & LM Studio". Other products may share the name LocalMind; this review covers only the app with the Android package name pro.momin.localmind.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**LocalMind is a store app: install it from Google Play or the App Store, or sideload the APK from GitHub.** The source code lives in the same repository as the releases.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) (free; minimum Android version not shown)',
          },
          {
            'Platform': 'iPhone / iPad',
            'Where to get it': '[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) (free; iOS 17.6 or later)',
          },
          {
            'Platform': 'Android APK',
            'Where to get it': '[GitHub Releases](https://github.com/abdulmominsakib/localmind/releases) (app-release.apk)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[momin.pro](https://momin.pro) (developer portfolio)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[Privacy Policy for LocalMind](https://momin.pro/privacy-policy-localmind)',
          },
          {
            'Platform': 'Source code',
            'Where to get it': '[GitHub](https://github.com/abdulmominsakib/localmind) (MIT)',
          },
        ],
        note: 'Version and recency as verified on 17 October 2026: the latest GitHub release is 1.9.0 (build 95), published on 14 October 2026; the App Store lists 1.9.0 as updated on 15 October 2026; Google Play shows an update on 14 October 2026 without a build number. No dedicated product website was found: the developer link on Google Play leads to the portfolio above and the repository has no homepage field.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**Setup follows the order described in the README and store listings; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Install LocalMind from Google Play or the App Store; no account is mentioned in any of the sources.',
          },
          {
            title: 'Choose where the model runs',
            whyItMatters: 'Download a model to the phone for offline use, or add the address of your Ollama or LM Studio server, or an OpenRouter or Requesty API key. The Play listing suggests Wi-Fi or a secure tunnel such as Tailscale for reaching a home server.',
          },
          {
            title: 'Chat, attach, or dictate',
            whyItMatters: 'Start a chat, attach photos or files for vision-capable models, or dictate a prompt; temporary chats run in memory and are not saved to history.',
          },
          {
            title: 'Optionally connect MCP tools',
            whyItMatters: 'MCP servers can be switched on globally or per chat in Settings. Leave them off to keep the model to plain conversation.',
          },
        ],
      },
      modelsSupported: {
        id: 'backends',
        title: 'Which Models and Servers Can It Use?',
        itemHeadings: true,
        columns: ['Backend', 'Type', 'Notes'],
        rows: [
          {
            'Backend': 'On-device',
            'Type': 'Offline',
            'Notes': 'GGUF models via llama.cpp (llamadart) and LiteRT models (flutter_gemma)',
          },
          {
            'Backend': 'Ollama',
            'Type': 'Local or cloud',
            'Notes': 'Your own server; the README says Ollama Cloud is also supported',
          },
          {
            'Backend': 'LM Studio',
            'Type': 'Local',
            'Notes': 'Includes the LM Studio model catalog',
          },
          {
            'Backend': 'OpenRouter / Requesty',
            'Type': 'Cloud',
            'Notes': 'Bring your own API key',
          },
          {
            'Backend': 'OpenAI-compatible',
            'Type': 'Local or cloud',
            'Notes': 'llama.cpp server, vLLM, LocalAI, Jan, and similar',
          },
        ],
        note: 'Source: the README "Supported Backends" table on 17 October 2026. The README names Gemma, Qwen, and DeepSeek R1 as example on-device models and the App Store text names Gemma and Llama; no complete model list was found.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the README, the App Store text, or the 1.9.0 release notes; none has been independently tested.**',
        ],
        items: [
          '**Chat basics.** Streaming replies, markdown with syntax-highlighted code, LaTeX math, collapsible reasoning logs for models such as DeepSeek R1, edit-and-regenerate, alternative replies, saved prompts, and suggested follow-ups.',
          '**Voice.** Speech-to-text dictation and text-to-speech playback with adjustable speed and background play.',
          '**Attachments and export.** Photos, documents, and other files for vision-capable models, and chat export to Markdown or PDF.',
          '**MCP tools.** Local or remote MCP servers with global and per-chat toggles; version 1.9.0 added parallel MCP tool calls in on-device Gemma sessions.',
          '**Personas and parameters.** Custom system prompts, adjustable temperature, top_p, token limit, and context size, and model swapping in the middle of a conversation.',
          '**Background generation.** Added in 1.9.0: replies keep streaming when you switch chats.',
          '**History, backup, and sync.** Searchable local history with folders and pinning, a backup archive, optional end-to-end encrypted sync to an S3 bucket you control, and an interface in 15 languages.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The privacy claims agree across the sources: the policy says LocalMind uses no analytics or tracking tools and has no central server, Google Play\'s Data safety section declares "No data collected" and "No data shared with third parties," and the App Store privacy label reads "Data Not Collected."** The [privacy policy](https://momin.pro/privacy-policy-localmind) states that conversations, settings, and personas stay on the device.',
          'Requests go directly to the server or provider you configure: the policy says local-server traffic never leaves your network, while for cloud providers keys and requests go straight to the provider, which handles them under its own terms.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The source code is public, so these claims can be checked by anyone who builds the app, but PromptQuorum has not audited the code or the network traffic.',
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
            'Benefit': 'Free and open source',
            'What it means in real use': 'No account or subscription, and the MIT-licensed code can be read and built.',
            'Limitation / caveat': 'One main developer and a repository from April 2026; the sources state no support commitment.',
          },
          {
            'Benefit': 'Three ways to run a model',
            'What it means in real use': 'Use the phone, a home server, or a cloud key from the same app and switch mid-chat.',
            'Limitation / caveat': 'On-device quality depends on the phone and model; remote modes need a reachable server or key.',
          },
          {
            'Benefit': 'Fast release pace',
            'What it means in real use': 'GitHub shows releases on 9 September, 30 September, and 14 October 2026.',
            'Limitation / caveat': 'Fast change means the store descriptions can lag the README.',
          },
          {
            'Benefit': 'MCP tool support',
            'What it means in real use': 'Models can call tools exposed by MCP servers you connect.',
            'Limitation / caveat': 'The README mentions file access, web APIs, and shell actions as examples; enable only servers you trust.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Owners of an Ollama or LM Studio server** who want a phone front end for it.',
          '**People who want small-model chat on the phone** without creating an account.',
          '**Tinkerers who want MCP tools on a phone** and prefer an app whose source they can read.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** PromptQuorum did not run the app, so speed, battery use, and answer quality are not assessed.',
          '**What each store build contains.** The Google Play description presents a client that needs Ollama, LM Studio, or an OpenRouter key and mentions no on-device models, while the README and App Store text describe them; the sources do not say how the Android and iPhone builds differ.',
          '**Which database stores chats.** The privacy policy names Hive CE and the README names ObjectBox.',
          '**Whether the policy covers newer features.** It is dated 1 April 2026 and does not mention on-device models, MCP tools, or S3 sync.',
          '**Not for desktop users.** No Mac, Windows, or Linux build is offered in the store links or releases.',
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
            'Platforms': 'macOS, iOS',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Minimal Ollama client with no inference engine of its own',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'On-device chat client with its own model library',
          },
          {
            'App': '[LM Playground](/power-local-llm/lm-playground-review)',
            'Platforms': 'Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'llama.cpp app with document Q&A and dictation',
          },
          {
            'App': '[Private Mind](/power-local-llm/private-mind-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / MIT',
            'Key difference': 'Offline chat on ExecuTorch with document Q&A',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is there a desktop version?',
            a: 'No Mac, Windows, or Linux download is offered. The README lists a split-view layout for large screens, but you can still reach Ollama or LM Studio running on a desktop from the phone.',
          },
          {
            q: 'How do I reach my home server when I am away?',
            a: 'The Play listing names secure tunnels such as Tailscale as an option; the sources do not describe any built-in remote access.',
          },
          {
            q: 'Does it work with reasoning models?',
            a: 'The README describes collapsible reasoning logs for models such as DeepSeek R1, and the 1.9.0 notes add an option to omit temperature and top_p for reasoning models that reject them.',
          },
          {
            q: 'What happens to my chats if I delete the app?',
            a: 'The policy says there is no central server, so conversations are gone unless you backed them up manually; the README describes export and import of a backup archive.',
          },
          {
            q: 'Where can I read the source?',
            a: 'The full code is in the [LocalMind repository](https://github.com/abdulmominsakib/localmind) on GitHub under the MIT license.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LocalMind is a free, MIT-licensed way to chat with small on-device models or with your own Ollama, LM Studio, or OpenRouter setup from Android or iPhone, with MCP tools, voice, and attachments on top, and its public repository means its privacy claims can in principle be checked. Against that, it is a young one-developer project, its Google Play description lags the README, and its privacy policy does not mention the newer features. It suits people who already run a server or want one app for several backends; those who only want offline chat can compare [PocketPal AI](/power-local-llm/pocketpal-ai-review), and iPhone users who only need an Ollama front end can look at [Enchanted](/power-local-llm/enchanted-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LocalMind on Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) — description, developer link, download count, rating, Data safety section, and update date, checked 17 October 2026.',
          '[LocalMind on the App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) — description, version, update date, requirements, and privacy label.',
          '[LocalMind on GitHub](https://github.com/abdulmominsakib/localmind) — README, MIT license, releases, and release notes.',
          '[Privacy Policy for LocalMind](https://momin.pro/privacy-policy-localmind) — data-handling and storage statements, effective 1 April 2026.',
          '[Abdul Momin Sakib](https://momin.pro) — developer portfolio that lists LocalMind.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Enchanted Review](/power-local-llm/enchanted-review) — a minimal Ollama client for iPhone and Mac.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[LM Playground Review](/power-local-llm/lm-playground-review) — a free llama.cpp chat app for Android.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — an open-source offline chat app with document Q&A.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LocalMind Review: Free Chat App for On-Device and Self-Hosted Models',
      description:
        'LocalMind review: a free, MIT-licensed Android and iPhone chat app for on-device models, Ollama, LM Studio, and OpenRouter. Backends, privacy, versions, and what the sources do not confirm.',
      url: 'https://www.promptquorum.com/power-local-llm/localmind-review',
      inLanguage: 'en',
      datePublished: '2026-10-17',
      dateModified: '2026-10-17',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Android and iPhone users evaluating a free, open-source chat app for local and self-hosted LLMs' },
      about: [
        { '@type': 'Thing', name: 'LocalMind' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Model Context Protocol' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/localmind-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LocalMind Review', item: 'https://www.promptquorum.com/power-local-llm/localmind-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmind-review-hero-de.webp',
    title: 'LocalMind-Rezension: Kostenlose Chat-App für lokale und selbst gehostete Modelle',
    seoTitle: 'LocalMind-Rezension: Gratis-Chat-App für Android/iPhone',
    intro:
      'LocalMind ist eine kostenlose, MIT-lizenzierte Chat-App für Android und iPhone des unabhängigen Entwicklers [Abdul Momin Sakib](https://momin.pro). Sie schickt Eingaben an ein Modell auf dem Smartphone oder an einen Server bzw. Anbieter Ihrer Wahl: Ollama, LM Studio, OpenRouter oder jeden OpenAI-kompatiblen Endpunkt. Diese Rezension stützt sich auf den [Google-Play-Eintrag](https://play.google.com/store/apps/details?id=pro.momin.localmind), den [App-Store-Eintrag](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480), die [Datenschutzerklärung](https://momin.pro/privacy-policy-localmind) und das öffentliche [GitHub-Repository](https://github.com/abdulmominsakib/localmind), geprüft am 17. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.',
    metaDescription:
      'LocalMind-Rezension: kostenlose Chat-App (MIT) für Android und iPhone mit lokalen Modellen, Ollama, LM Studio und OpenRouter. Datenschutz, Grenzen.',
    twitterDescription:
      'LocalMind-Rezension: eine quelloffene Chat-App für Android und iPhone mit Modellen auf dem Gerät oder Ihrem Ollama-/LM-Studio-Server, dazu MCP-Tools und offene Fragen.',
    audience:
      'Android- und iPhone-Nutzer, die eine kostenlose, quelloffene Chat-App für lokale oder selbst gehostete Sprachmodelle suchen und wissen müssen, welche Backends sie unterstützt, was auf dem Gerät bleibt und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMind Rezension',
    targetKeywords: [
      'localmind app test',
      'localmind ollama android',
      'ollama client für iphone',
      'lm studio mobile app',
      'open source lokale llm app android ios',
      'llm auf dem handy offline ausführen',
      'mcp client android app',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'DeepSeek R1', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMind (Version 1.9.0, veröffentlicht am 14. Oktober 2026) ist eine kostenlose, MIT-lizenzierte Chat-App, die kleine Modelle auf dem Smartphone ausführen und sich zusätzlich mit einem Server unter Ihrer Kontrolle verbinden kann.** Sie braucht kein Konto; als Verbindungen stehen Ollama, LM Studio, jeder OpenAI-kompatible Server sowie OpenRouter oder Requesty mit eigenem API-Schlüssel zur Verfügung. Ein Vorbehalt prägt das Lesen der Store-Seiten: Die Google-Play-Beschreibung stellt die App nur als Remote-Client dar.',
    quickAnswerTop: {
      de: {
        question: 'Ist LocalMind kostenlos, quelloffen und privat?',
        answer:
          'Laut Einträgen und Repository ja: Die App ist kostenlos, es werden keine Werbung und keine Käufe angezeigt, der Code steht unter der MIT-Lizenz, und beide Stores geben an, dass keine Daten erhoben werden. Netzwerkverkehr geht nur an den Server oder Anbieter, den Sie einrichten.',
        bullets: [
          'Kostenlos bei [Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) und im [App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480); APK und Quellcode auf [GitHub](https://github.com/abdulmominsakib/localmind).',
          'Backends: GGUF- und LiteRT-Modelle auf dem Gerät, Ollama, LM Studio, OpenRouter, Requesty und OpenAI-kompatible Server.',
          'Chat-Extras: Anzeige des Denkprozesses, Sprachdiktat und Vorlesen, Datei- und Foto-Anhänge, Personas und MCP-Tools.',
          'Store-Signale, geprüft am 17. Oktober 2026: über 10K Downloads bei Google Play mit 4,4 Sternen aus 279 Bewertungen, 4,7 Sterne aus 13 Bewertungen im US-App-Store, 281 GitHub-Sterne.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist LocalMind?', anchor: 'what-is-localmind' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Welche Modelle und Server lassen sich nutzen?', anchor: 'backends' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenschutz und Netzwerknutzung', anchor: 'privacy' },
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
            text: 'LocalMind macht aus einem Android-Smartphone oder iPhone eine gemeinsame Chat-Oberfläche für kleine Modelle auf dem Gerät, Ihren eigenen Ollama- oder LM-Studio-Server und Cloud-Modelle mit eigenem Schlüssel.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App aus einem Store, legen fest, wo das Modell läuft, und chatten ohne Konto; nur der gewählte Server oder Anbieter erhält Ihre Eingaben.',
          },
        ],
        items: [
          'Entwickler: Abdul Momin Sakib, ein unabhängiger Flutter-Entwickler; das öffentliche Repository stammt vom April 2026 und nennt sechs Mitwirkende, das Projekt ist also jung.',
          'Plattformen: Android und iPhone, Installation über Google Play oder den App Store; an jedem GitHub-Release hängt außerdem eine APK.',
          'Aktualität: Das GitHub-Release 1.9.0 erschien am 14. Oktober 2026, und der App Store führt dieselbe Version mit Update vom 15. Oktober 2026, was auf aktive Pflege hindeutet.',
          'Modelle: kleine GGUF- und LiteRT-Modelle auf dem Gerät oder jedes Modell, das Ihr Server oder Anbieter bereitstellt.',
          'Offene Frage: Die Store-Seiten und das README beschreiben die App unterschiedlich; siehe die Liste der nicht überprüften Punkte weiter unten.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Einträge bei Google Play und im App Store, die Datenschutzerklärung, die Entwickler-Website und das öffentliche GitHub-Repository (README, Lizenz, Releases und Release Notes), geprüft am 17. Oktober 2026. PromptQuorum hat die App weder getestet noch Benchmarks durchgeführt.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmind',
        title: 'Was ist LocalMind?',
        content: [
          '**LocalMind ist eine mit Flutter entwickelte Chat-App, die Ihre Eingaben entweder an ein Modell auf dem Smartphone oder an einen Server bzw. Anbieter Ihrer Wahl schickt.** Laut [README](https://github.com/abdulmominsakib/localmind) sind die Modelle auf dem Gerät GGUF-Dateien, die über llama.cpp laufen, sowie LiteRT-Modelle wie Gemma; als entfernte Optionen nennt es [Ollama](https://ollama.com/), [LM Studio](https://lmstudio.ai/), [OpenRouter](https://openrouter.ai/) und [Requesty](https://www.requesty.ai/).',
          'Der Entwickler Abdul Momin Sakib führt LocalMind auf seiner [Portfolio-Website](https://momin.pro) und veröffentlicht die App in beiden Stores als „LocalMind: Ollama & LM Studio“. Andere Produkte könnten ebenfalls den Namen LocalMind tragen; diese Rezension behandelt nur die App mit dem Android-Paketnamen pro.momin.localmind.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**LocalMind ist eine Store-App: Installieren Sie sie über Google Play oder den App Store oder laden Sie die APK von GitHub.** Der Quellcode liegt im selben Repository wie die Releases.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) (kostenlos; Mindestversion von Android nicht angegeben)',
          },
          {
            'Plattform': 'iPhone / iPad',
            'Bezugsquelle': '[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) (kostenlos; ab iOS 17.6)',
          },
          {
            'Plattform': 'Android-APK',
            'Bezugsquelle': '[GitHub Releases](https://github.com/abdulmominsakib/localmind/releases) (app-release.apk)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[momin.pro](https://momin.pro) (Portfolio des Entwicklers)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Datenschutzerklärung für LocalMind](https://momin.pro/privacy-policy-localmind)',
          },
          {
            'Plattform': 'Quellcode',
            'Bezugsquelle': '[GitHub](https://github.com/abdulmominsakib/localmind) (MIT)',
          },
        ],
        note: 'Version und Aktualität, geprüft am 17. Oktober 2026: Das neueste GitHub-Release ist 1.9.0 (Build 95), veröffentlicht am 14. Oktober 2026; der App Store führt 1.9.0 mit Update vom 15. Oktober 2026; Google Play zeigt ein Update vom 14. Oktober 2026 ohne Build-Nummer. Eine eigene Produkt-Website wurde nicht gefunden: Der Entwicklerlink bei Google Play führt zum oben genannten Portfolio, und das Repository hat kein Homepage-Feld.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Einrichtung folgt der Reihenfolge aus README und Store-Einträgen; PromptQuorum hat diese Schritte nicht selbst ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Installieren Sie LocalMind über Google Play oder den App Store; ein Konto wird in keiner der Quellen erwähnt.',
          },
          {
            title: 'Festlegen, wo das Modell läuft',
            whyItMatters: 'Laden Sie ein Modell für die Offline-Nutzung auf das Smartphone, oder tragen Sie die Adresse Ihres Ollama- oder LM-Studio-Servers bzw. einen API-Schlüssel von OpenRouter oder Requesty ein. Der Play-Eintrag nennt WLAN oder einen sicheren Tunnel wie Tailscale, um einen Heimserver zu erreichen.',
          },
          {
            title: 'Chatten, anhängen oder diktieren',
            whyItMatters: 'Starten Sie einen Chat, hängen Sie Fotos oder Dateien für Modelle mit Bildverständnis an oder diktieren Sie Ihre Eingabe; temporäre Chats laufen im Arbeitsspeicher und landen nicht im Verlauf.',
          },
          {
            title: 'Optional MCP-Tools verbinden',
            whyItMatters: 'MCP-Server lassen sich in den Einstellungen global oder pro Chat einschalten. Lassen Sie sie aus, damit das Modell bei reiner Konversation bleibt.',
          },
        ],
      },
      modelsSupported: {
        id: 'backends',
        title: 'Welche Modelle und Server lassen sich nutzen?',
        itemHeadings: true,
        columns: ['Backend', 'Art', 'Hinweise'],
        rows: [
          {
            'Backend': 'Auf dem Gerät',
            'Art': 'Offline',
            'Hinweise': 'GGUF-Modelle über llama.cpp (llamadart) und LiteRT-Modelle (flutter_gemma)',
          },
          {
            'Backend': 'Ollama',
            'Art': 'Lokal oder Cloud',
            'Hinweise': 'Ihr eigener Server; laut README wird auch Ollama Cloud unterstützt',
          },
          {
            'Backend': 'LM Studio',
            'Art': 'Lokal',
            'Hinweise': 'Enthält den Modellkatalog von LM Studio',
          },
          {
            'Backend': 'OpenRouter / Requesty',
            'Art': 'Cloud',
            'Hinweise': 'Eigener API-Schlüssel erforderlich',
          },
          {
            'Backend': 'OpenAI-kompatibel',
            'Art': 'Lokal oder Cloud',
            'Hinweise': 'llama.cpp-Server, vLLM, LocalAI, Jan und ähnliche',
          },
        ],
        note: 'Quelle: die Tabelle „Supported Backends“ im README vom 17. Oktober 2026. Das README nennt Gemma, Qwen und DeepSeek R1 als Beispielmodelle auf dem Gerät, der App-Store-Text nennt Gemma und Llama; eine vollständige Modellliste wurde nicht gefunden.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus dem README, dem App-Store-Text oder den Release Notes zu 1.9.0; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Chat-Grundlagen.** Streaming-Antworten, Markdown mit farbig hervorgehobenem Code, LaTeX-Formeln, einklappbare Denkprotokolle für Modelle wie DeepSeek R1, Bearbeiten und Neu generieren, alternative Antworten, gespeicherte Prompts und vorgeschlagene Folgefragen.',
          '**Sprache.** Diktat per Spracherkennung und Vorlesen per Sprachausgabe mit einstellbarer Geschwindigkeit und Wiedergabe im Hintergrund.',
          '**Anhänge und Export.** Fotos, Dokumente und andere Dateien für Modelle mit Bildverständnis sowie Chat-Export als Markdown oder PDF.',
          '**MCP-Tools.** Lokale oder entfernte MCP-Server mit globalen und chatbezogenen Schaltern; Version 1.9.0 brachte parallele MCP-Tool-Aufrufe in Gemma-Sitzungen auf dem Gerät.',
          '**Personas und Parameter.** Eigene System-Prompts, einstellbare Werte für temperature, top_p, Token-Limit und Kontextgröße sowie Modellwechsel mitten im Gespräch.',
          '**Generierung im Hintergrund.** Neu in 1.9.0: Antworten laufen weiter, wenn Sie den Chat wechseln.',
          '**Verlauf, Backup und Sync.** Durchsuchbarer lokaler Verlauf mit Ordnern und Anheften, ein Backup-Archiv, optionale Ende-zu-Ende-verschlüsselte Synchronisation mit einem S3-Bucket unter Ihrer Kontrolle und eine Oberfläche in 15 Sprachen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Die Datenschutzaussagen stimmen in den Quellen überein: Laut Erklärung nutzt LocalMind keine Analyse- oder Tracking-Tools und hat keinen zentralen Server, der Bereich „Datensicherheit“ bei Google Play gibt „Keine Daten erhoben“ und „Keine Daten an Dritte weitergegeben“ an, und das Datenschutzlabel im App Store lautet „Daten werden nicht erfasst“.** Die [Datenschutzerklärung](https://momin.pro/privacy-policy-localmind) hält fest, dass Unterhaltungen, Einstellungen und Personas auf dem Gerät bleiben.',
          'Anfragen gehen direkt an den Server oder Anbieter, den Sie einrichten: Laut Erklärung verlässt der Verkehr zu lokalen Servern Ihr Netzwerk nicht, bei Cloud-Anbietern gehen Schlüssel und Anfragen direkt an den Anbieter, der sie nach eigenen Bedingungen verarbeitet.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Der Quellcode ist öffentlich, die Aussagen lassen sich also von jedem prüfen, der die App selbst baut; PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft.',
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
            'Vorteil': 'Kostenlos und quelloffen',
            'Bedeutung in der Praxis': 'Kein Konto, kein Abonnement, und der MIT-lizenzierte Code lässt sich lesen und selbst bauen.',
            'Einschränkung / Hinweis': 'Ein Hauptentwickler und ein Repository vom April 2026; die Quellen nennen keine Support-Zusage.',
          },
          {
            'Vorteil': 'Drei Wege, ein Modell auszuführen',
            'Bedeutung in der Praxis': 'Smartphone, Heimserver oder Cloud-Schlüssel in derselben App nutzen und mitten im Chat wechseln.',
            'Einschränkung / Hinweis': 'Die Qualität auf dem Gerät hängt von Smartphone und Modell ab; entfernte Modi brauchen einen erreichbaren Server oder Schlüssel.',
          },
          {
            'Vorteil': 'Schnelles Release-Tempo',
            'Bedeutung in der Praxis': 'GitHub zeigt Releases am 9. September, 30. September und 14. Oktober 2026.',
            'Einschränkung / Hinweis': 'Schnelle Änderungen bedeuten, dass die Store-Beschreibungen dem README hinterherhinken können.',
          },
          {
            'Vorteil': 'MCP-Tool-Unterstützung',
            'Bedeutung in der Praxis': 'Modelle können Tools aufrufen, die von verbundenen MCP-Servern bereitgestellt werden.',
            'Einschränkung / Hinweis': 'Das README nennt Dateizugriff, Web-APIs und Shell-Aktionen als Beispiele; aktivieren Sie nur vertrauenswürdige Server.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Betreiber eines Ollama- oder LM-Studio-Servers**, die eine Smartphone-Oberfläche dafür wünschen.',
          '**Menschen, die kleine Modelle auf dem Smartphone nutzen wollen**, ohne ein Konto anzulegen.',
          '**Tüftler, die MCP-Tools auf dem Smartphone wollen** und eine App bevorzugen, deren Quellcode sie lesen können.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Leistung in der Praxis.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Akkuverbrauch und Antwortqualität sind nicht bewertet.',
          '**Was die jeweiligen Store-Versionen enthalten.** Die Google-Play-Beschreibung nennt einen Client, der Ollama, LM Studio oder einen OpenRouter-Schlüssel braucht, und erwähnt keine Modelle auf dem Gerät, während README und App-Store-Text sie beschreiben; die Quellen sagen nicht, wie sich die Android- und die iPhone-Version unterscheiden.',
          '**Welche Datenbank die Chats speichert.** Die Datenschutzerklärung nennt Hive CE, das README nennt ObjectBox.',
          '**Ob die Erklärung neuere Funktionen abdeckt.** Sie ist auf den 1. April 2026 datiert und erwähnt weder Modelle auf dem Gerät noch MCP-Tools oder S3-Sync.',
          '**Nicht für Desktop-Nutzer.** In den Store-Links und Releases wird keine Version für Mac, Windows oder Linux angeboten.',
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
            'Plattformen': 'macOS, iOS',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wesentlicher Unterschied': 'Minimaler Ollama-Client ohne eigene Inferenz-Engine',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Chat-Client auf dem Gerät mit eigener Modellbibliothek',
          },
          {
            'App': '[LM Playground](/de/power-local-llm/lm-playground-review)',
            'Plattformen': 'Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'llama.cpp-App mit Dokumenten-Q&A und Diktat',
          },
          {
            'App': '[Private Mind](/de/power-local-llm/private-mind-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Offline-Chat auf ExecuTorch mit Dokumenten-Q&A',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Gibt es eine Desktop-Version?',
            a: 'Es wird kein Download für Mac, Windows oder Linux angeboten. Das README nennt eine geteilte Ansicht für große Bildschirme, doch ein auf dem Desktop laufendes Ollama oder LM Studio lässt sich vom Smartphone aus trotzdem erreichen.',
          },
          {
            q: 'Wie erreiche ich meinen Heimserver unterwegs?',
            a: 'Der Play-Eintrag nennt sichere Tunnel wie Tailscale als Möglichkeit; einen eingebauten Fernzugriff beschreiben die Quellen nicht.',
          },
          {
            q: 'Funktioniert die App mit Reasoning-Modellen?',
            a: 'Das README beschreibt einklappbare Denkprotokolle für Modelle wie DeepSeek R1, und die Notes zu 1.9.0 ergänzen eine Option, temperature und top_p für Reasoning-Modelle wegzulassen, die sie ablehnen.',
          },
          {
            q: 'Was passiert mit meinen Chats, wenn ich die App lösche?',
            a: 'Laut Erklärung gibt es keinen zentralen Server; Unterhaltungen sind daher weg, sofern Sie sie nicht manuell gesichert haben. Das README beschreibt Export und Import eines Backup-Archivs.',
          },
          {
            q: 'Wo kann ich den Quellcode lesen?',
            a: 'Der vollständige Code liegt im [LocalMind-Repository](https://github.com/abdulmominsakib/localmind) auf GitHub unter der MIT-Lizenz.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'LocalMind ist ein kostenloser, MIT-lizenzierter Weg, von Android oder iPhone aus mit kleinen Modellen auf dem Gerät oder mit der eigenen Ollama-, LM-Studio- oder OpenRouter-Umgebung zu chatten, ergänzt um MCP-Tools, Sprache und Anhänge; das öffentliche Repository erlaubt es, die Datenschutzaussagen im Prinzip zu überprüfen. Dagegen steht, dass es ein junges Ein-Mann-Projekt ist, die Google-Play-Beschreibung dem README hinterherhinkt und die Datenschutzerklärung die neueren Funktionen nicht erwähnt. Geeignet ist es für Menschen, die bereits einen Server betreiben oder eine App für mehrere Backends wollen; wer nur Offline-Chat sucht, kann [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen, und iPhone-Nutzer, die nur eine Oberfläche für Ollama brauchen, können sich [Enchanted](/de/power-local-llm/enchanted-review) ansehen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LocalMind bei Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) — Beschreibung, Entwicklerlink, Download-Zahl, Bewertung, Bereich „Datensicherheit“ und Update-Datum, geprüft am 17. Oktober 2026.',
          '[LocalMind im App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) — Beschreibung, Version, Update-Datum, Voraussetzungen und Datenschutzlabel.',
          '[LocalMind auf GitHub](https://github.com/abdulmominsakib/localmind) — README, MIT-Lizenz, Releases und Release Notes.',
          '[Datenschutzerklärung für LocalMind](https://momin.pro/privacy-policy-localmind) — Aussagen zu Datenverarbeitung und Speicherung, gültig seit 1. April 2026.',
          '[Abdul Momin Sakib](https://momin.pro) — Portfolio des Entwicklers, das LocalMind aufführt.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Enchanted-Rezension](/de/power-local-llm/enchanted-review) — ein minimaler Ollama-Client für iPhone und Mac.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener Chat-Client auf dem Gerät für iOS und Android.',
          '[LM-Playground-Rezension](/de/power-local-llm/lm-playground-review) — eine kostenlose llama.cpp-Chat-App für Android.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine quelloffene Offline-Chat-App mit Dokumenten-Q&A.',
          '[Die besten lokalen LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
          '[Die besten lokalen LLM-Apps für das iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — der breitere iPhone-Überblick.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmind-review-hero-es.webp',
    title: 'Análisis de LocalMind: app de chat gratuita para modelos locales y autoalojados',
    seoTitle: 'Análisis de LocalMind: chat con IA para Android e iPhone',
    intro:
      'LocalMind es una app de chat gratuita con licencia MIT para Android e iPhone, del desarrollador independiente [Abdul Momin Sakib](https://momin.pro). Envía tus mensajes a un modelo del teléfono o a un servidor o proveedor que elijas: Ollama, LM Studio, OpenRouter o cualquier endpoint compatible con OpenAI. Este análisis se basa en la [ficha de Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind), la [ficha de la App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480), la [política de privacidad](https://momin.pro/privacy-policy-localmind) y el [repositorio público de GitHub](https://github.com/abdulmominsakib/localmind), consultados el 17 de octubre de 2026; PromptQuorum no ha probado la app en la práctica.',
    metaDescription:
      'Análisis de LocalMind: app de chat gratuita (MIT) para Android e iPhone con modelos en el dispositivo, Ollama, LM Studio y OpenRouter. Privacidad.',
    twitterDescription:
      'Análisis de LocalMind: una app de chat de código abierto para Android e iPhone con modelos en el dispositivo o tu propio servidor Ollama o LM Studio, más herramientas MCP y dudas abiertas.',
    audience:
      'Usuarios de Android e iPhone que quieren una app de chat gratuita y de código abierto para modelos de lenguaje locales o autoalojados, y que necesitan saber qué backends admite, qué se queda en el dispositivo y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de LocalMind',
    targetKeywords: [
      'localmind app opiniones',
      'localmind ollama android',
      'cliente ollama para iphone',
      'app móvil lm studio',
      'app llm local código abierto android ios',
      'ejecutar llm en el móvil sin conexión',
      'cliente mcp app android',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'DeepSeek R1', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMind (versión 1.9.0, publicada el 14 de octubre de 2026) es una app de chat gratuita con licencia MIT que puede ejecutar modelos pequeños en el teléfono y también conectarse a un servidor que controlas tú.** No requiere cuenta; las conexiones disponibles son Ollama, LM Studio, cualquier servidor compatible con OpenAI y OpenRouter o Requesty con tu propia clave de API. Una salvedad condiciona cómo leer las fichas de las tiendas: la descripción de Google Play la presenta solo como cliente remoto.',
    quickAnswerTop: {
      es: {
        question: '¿LocalMind es gratuita, de código abierto y privada?',
        answer:
          'Según sus fichas y su repositorio, sí: la app es gratuita y no muestra anuncios ni compras, el código tiene licencia MIT y ambas tiendas declaran que no se recopilan datos. El tráfico de red va solo al servidor o proveedor que configures.',
        bullets: [
          'Gratuita en [Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) y en la [App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480); APK y código en [GitHub](https://github.com/abdulmominsakib/localmind).',
          'Backends: modelos GGUF y LiteRT en el dispositivo, Ollama, LM Studio, OpenRouter, Requesty y servidores compatibles con OpenAI.',
          'Extras de chat: visualización del razonamiento, dictado y lectura en voz alta, archivos y fotos adjuntos, personas y herramientas MCP.',
          'Señales de las tiendas al 17 de octubre de 2026: más de 10K descargas en Google Play con 4.4 estrellas en 279 reseñas, 4.7 estrellas en 13 valoraciones de la App Store de EE. UU. y 281 estrellas en GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es LocalMind?', anchor: 'what-is-localmind' },
      { label: 'Cómo obtenerla', anchor: 'get-it' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: '¿Qué modelos y servidores admite?', anchor: 'backends' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y uso de la red', anchor: 'privacy' },
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
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LocalMind convierte un teléfono Android o un iPhone en una interfaz de chat única para modelos pequeños en el dispositivo, tu propio servidor Ollama o LM Studio y modelos en la nube con tu propia clave.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas desde una tienda, eliges dónde se ejecuta el modelo y chateas sin crear una cuenta; solo el servidor o proveedor que elijas recibe tus mensajes.',
          },
        ],
        items: [
          'Desarrollador: Abdul Momin Sakib, desarrollador independiente de Flutter; el repositorio público data de abril de 2026 y reconoce a seis colaboradores, así que el proyecto es joven.',
          'Plataformas: Android e iPhone, con instalación desde Google Play o la App Store; cada versión de GitHub incluye además un APK.',
          'Actualidad: la versión 1.9.0 de GitHub apareció el 14 de octubre de 2026 y la App Store muestra la misma versión actualizada el 15 de octubre de 2026, lo que apunta a un mantenimiento activo.',
          'Modelos: modelos GGUF y LiteRT pequeños en el dispositivo, o cualquier modelo que ofrezca tu servidor o proveedor.',
          'Duda abierta: las fichas de las tiendas y el README describen la app de forma distinta; consulta la lista de puntos sin verificar más abajo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en las fichas de Google Play y de la App Store, la política de privacidad, el sitio del desarrollador y el repositorio público de GitHub (README, licencia, versiones y notas de versión), consultados el 17 de octubre de 2026. PromptQuorum no ha probado ni medido el rendimiento de la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmind',
        title: '¿Qué es LocalMind?',
        content: [
          '**LocalMind es una app de chat creada con Flutter que envía tus mensajes a un modelo del teléfono o a un servidor o proveedor que elijas.** Según el [README](https://github.com/abdulmominsakib/localmind), los modelos en el dispositivo son archivos GGUF que se ejecutan con llama.cpp y modelos LiteRT como Gemma, mientras que entre las opciones remotas figuran [Ollama](https://ollama.com/), [LM Studio](https://lmstudio.ai/), [OpenRouter](https://openrouter.ai/) y [Requesty](https://www.requesty.ai/).',
          'El desarrollador, Abdul Momin Sakib, incluye LocalMind en su [sitio de portafolio](https://momin.pro) y la publica en ambas tiendas como «LocalMind: Ollama & LM Studio». Es posible que otros productos compartan el nombre LocalMind; este análisis cubre solo la app con el nombre de paquete de Android pro.momin.localmind.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**LocalMind es una app de tienda: instálala desde Google Play o la App Store, o instala el APK desde GitHub.** El código fuente está en el mismo repositorio que las versiones.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) (gratis; no se muestra la versión mínima de Android)',
          },
          {
            'Plataforma': 'iPhone / iPad',
            'Dónde obtenerla': '[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) (gratis; iOS 17.6 o posterior)',
          },
          {
            'Plataforma': 'APK de Android',
            'Dónde obtenerla': '[GitHub Releases](https://github.com/abdulmominsakib/localmind/releases) (app-release.apk)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[momin.pro](https://momin.pro) (portafolio del desarrollador)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[Política de privacidad de LocalMind](https://momin.pro/privacy-policy-localmind)',
          },
          {
            'Plataforma': 'Código fuente',
            'Dónde obtenerla': '[GitHub](https://github.com/abdulmominsakib/localmind) (MIT)',
          },
        ],
        note: 'Versión y actualidad verificadas el 17 de octubre de 2026: la última versión de GitHub es la 1.9.0 (compilación 95), publicada el 14 de octubre de 2026; la App Store muestra la 1.9.0 actualizada el 15 de octubre de 2026; Google Play indica una actualización del 14 de octubre de 2026 sin número de compilación. No se encontró un sitio web propio del producto: el enlace del desarrollador en Google Play lleva al portafolio indicado arriba y el repositorio no tiene campo de página de inicio.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración sigue el orden descrito en el README y en las fichas de las tiendas; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Instala LocalMind desde Google Play o la App Store; ninguna de las fuentes menciona una cuenta.',
          },
          {
            title: 'Elige dónde se ejecuta el modelo',
            whyItMatters: 'Descarga un modelo al teléfono para usarlo sin conexión, o añade la dirección de tu servidor Ollama o LM Studio, o una clave de API de OpenRouter o Requesty. La ficha de Play sugiere Wi-Fi o un túnel seguro como Tailscale para llegar a un servidor doméstico.',
          },
          {
            title: 'Chatea, adjunta o dicta',
            whyItMatters: 'Inicia un chat, adjunta fotos o archivos para modelos con visión o dicta tu mensaje; los chats temporales se ejecutan en memoria y no se guardan en el historial.',
          },
          {
            title: 'Conecta herramientas MCP (opcional)',
            whyItMatters: 'Los servidores MCP se pueden activar de forma global o por chat en Ajustes. Déjalos desactivados para que el modelo se limite a la conversación.',
          },
        ],
      },
      modelsSupported: {
        id: 'backends',
        title: '¿Qué modelos y servidores admite?',
        itemHeadings: true,
        columns: ['Backend', 'Tipo', 'Notas'],
        rows: [
          {
            'Backend': 'En el dispositivo',
            'Tipo': 'Sin conexión',
            'Notas': 'Modelos GGUF con llama.cpp (llamadart) y modelos LiteRT (flutter_gemma)',
          },
          {
            'Backend': 'Ollama',
            'Tipo': 'Local o nube',
            'Notas': 'Tu propio servidor; el README indica que también admite Ollama Cloud',
          },
          {
            'Backend': 'LM Studio',
            'Tipo': 'Local',
            'Notas': 'Incluye el catálogo de modelos de LM Studio',
          },
          {
            'Backend': 'OpenRouter / Requesty',
            'Tipo': 'Nube',
            'Notas': 'Requiere tu propia clave de API',
          },
          {
            'Backend': 'Compatible con OpenAI',
            'Tipo': 'Local o nube',
            'Notas': 'Servidor llama.cpp, vLLM, LocalAI, Jan y similares',
          },
        ],
        note: 'Fuente: la tabla «Supported Backends» del README, el 17 de octubre de 2026. El README cita Gemma, Qwen y DeepSeek R1 como ejemplos de modelos en el dispositivo y el texto de la App Store cita Gemma y Llama; no se encontró una lista completa de modelos.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede del README, del texto de la App Store o de las notas de la versión 1.9.0; ninguno se ha probado de forma independiente.**',
        ],
        items: [
          '**Chat básico.** Respuestas en streaming, markdown con código resaltado, fórmulas LaTeX, registros de razonamiento plegables para modelos como DeepSeek R1, editar y regenerar, respuestas alternativas, prompts guardados y sugerencias de seguimiento.',
          '**Voz.** Dictado por voz y lectura de respuestas en voz alta, con velocidad ajustable y reproducción en segundo plano.',
          '**Adjuntos y exportación.** Fotos, documentos y otros archivos para modelos con visión, y exportación de chats a Markdown o PDF.',
          '**Herramientas MCP.** Servidores MCP locales o remotos con interruptores globales y por chat; la versión 1.9.0 añadió llamadas paralelas a herramientas MCP en sesiones de Gemma en el dispositivo.',
          '**Personas y parámetros.** Prompts de sistema personalizados, temperature, top_p, límite de tokens y tamaño de contexto ajustables, y cambio de modelo en mitad de una conversación.',
          '**Generación en segundo plano.** Novedad de la 1.9.0: las respuestas siguen llegando al cambiar de chat.',
          '**Historial, copia de seguridad y sincronización.** Historial local con búsqueda, carpetas y fijados, un archivo de copia de seguridad, sincronización opcional con cifrado de extremo a extremo hacia un bucket S3 que controlas tú y una interfaz en 15 idiomas.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**Las afirmaciones de privacidad coinciden en todas las fuentes: la política dice que LocalMind no usa herramientas de analítica ni de seguimiento y no tiene servidor central, la sección «Seguridad de los datos» de Google Play declara «No se recopilan datos» y «No se comparten datos con terceros», y la etiqueta de privacidad de la App Store dice «Datos no recopilados».** La [política de privacidad](https://momin.pro/privacy-policy-localmind) afirma que las conversaciones, los ajustes y las personas permanecen en el dispositivo.',
          'Las solicitudes van directamente al servidor o proveedor que configures: según la política, el tráfico hacia servidores locales no sale de tu red, mientras que con proveedores en la nube las claves y las solicitudes van directamente al proveedor, que las trata según sus propias condiciones.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'El código fuente es público, así que cualquiera que compile la app puede comprobar estas afirmaciones, pero PromptQuorum no ha auditado el código ni el tráfico de red.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'En el uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Ventaja': 'Gratuita y de código abierto',
            'En el uso real': 'Sin cuenta ni suscripción, y el código con licencia MIT se puede leer y compilar.',
            'Limitación / salvedad': 'Un desarrollador principal y un repositorio de abril de 2026; las fuentes no indican ningún compromiso de soporte.',
          },
          {
            'Ventaja': 'Tres formas de ejecutar un modelo',
            'En el uso real': 'Usa el teléfono, un servidor doméstico o una clave en la nube desde la misma app y cambia en mitad del chat.',
            'Limitación / salvedad': 'La calidad en el dispositivo depende del teléfono y del modelo; los modos remotos necesitan un servidor o clave accesibles.',
          },
          {
            'Ventaja': 'Ritmo rápido de versiones',
            'En el uso real': 'GitHub muestra versiones el 9 de septiembre, el 30 de septiembre y el 14 de octubre de 2026.',
            'Limitación / salvedad': 'El cambio rápido hace que las descripciones de las tiendas puedan ir por detrás del README.',
          },
          {
            'Ventaja': 'Compatibilidad con herramientas MCP',
            'En el uso real': 'Los modelos pueden llamar a herramientas expuestas por los servidores MCP que conectes.',
            'Limitación / salvedad': 'El README menciona acceso a archivos, API web y acciones de shell como ejemplos; activa solo servidores de confianza.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes tienen un servidor Ollama o LM Studio** y quieren una interfaz móvil para él.',
          '**Quienes quieren chatear con modelos pequeños en el teléfono** sin crear una cuenta.',
          '**Aficionados que quieren herramientas MCP en el móvil** y prefieren una app cuyo código puedan leer.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en la práctica.** PromptQuorum no ejecutó la app, así que no se evalúan la velocidad, el consumo de batería ni la calidad de las respuestas.',
          '**Qué contiene cada versión de las tiendas.** La descripción de Google Play presenta un cliente que necesita Ollama, LM Studio o una clave de OpenRouter y no menciona modelos en el dispositivo, mientras que el README y el texto de la App Store sí los describen; las fuentes no indican en qué se diferencian las versiones de Android y de iPhone.',
          '**Qué base de datos guarda los chats.** La política de privacidad nombra Hive CE y el README nombra ObjectBox.',
          '**Si la política cubre las funciones más recientes.** Está fechada el 1 de abril de 2026 y no menciona los modelos en el dispositivo, las herramientas MCP ni la sincronización S3.',
          '**No es para usuarios de escritorio.** Los enlaces de las tiendas y las versiones no ofrecen ninguna compilación para Mac, Windows o Linux.',
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
            'Plataformas': 'macOS, iOS',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Cliente mínimo de Ollama sin motor de inferencia propio',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Cliente de chat en el dispositivo con biblioteca de modelos propia',
          },
          {
            'App': '[LM Playground](/es/power-local-llm/lm-playground-review)',
            'Plataformas': 'Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'App con llama.cpp, preguntas sobre documentos y dictado',
          },
          {
            'App': '[Private Mind](/es/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Chat sin conexión con ExecuTorch y preguntas sobre documentos',
          },
        ],
        note: 'Los datos de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Hay versión de escritorio?',
            a: 'No se ofrece ninguna descarga para Mac, Windows o Linux. El README menciona una vista dividida para pantallas grandes, pero desde el teléfono se puede acceder igualmente a un Ollama o LM Studio que se ejecute en un ordenador.',
          },
          {
            q: '¿Cómo llego a mi servidor doméstico cuando estoy fuera?',
            a: 'La ficha de Play menciona túneles seguros como Tailscale como opción; las fuentes no describen ningún acceso remoto integrado.',
          },
          {
            q: '¿Funciona con modelos de razonamiento?',
            a: 'El README describe registros de razonamiento plegables para modelos como DeepSeek R1, y las notas de la 1.9.0 añaden una opción para omitir temperature y top_p en los modelos de razonamiento que los rechazan.',
          },
          {
            q: '¿Qué pasa con mis chats si borro la app?',
            a: 'Según la política no hay servidor central, así que las conversaciones se pierden salvo que las hayas guardado a mano; el README describe la exportación e importación de un archivo de copia de seguridad.',
          },
          {
            q: '¿Dónde puedo leer el código fuente?',
            a: 'El código completo está en el [repositorio de LocalMind](https://github.com/abdulmominsakib/localmind) en GitHub, con licencia MIT.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'LocalMind es una forma gratuita y con licencia MIT de chatear desde Android o iPhone con modelos pequeños en el dispositivo o con tu propio entorno de Ollama, LM Studio u OpenRouter, con herramientas MCP, voz y adjuntos además, y su repositorio público permite comprobar en principio sus afirmaciones de privacidad. En contra, es un proyecto joven de un solo desarrollador, su descripción de Google Play va por detrás del README y su política de privacidad no menciona las funciones más recientes. Encaja con quienes ya tienen un servidor o quieren una sola app para varios backends; quien solo busque chat sin conexión puede comparar [PocketPal AI](/es/power-local-llm/pocketpal-ai-review), y en iPhone, quien solo necesite una interfaz para Ollama puede mirar [Enchanted](/es/power-local-llm/enchanted-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[LocalMind en Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) — descripción, enlace del desarrollador, número de descargas, valoración, sección de seguridad de los datos y fecha de actualización, consultados el 17 de octubre de 2026.',
          '[LocalMind en la App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) — descripción, versión, fecha de actualización, requisitos y etiqueta de privacidad.',
          '[LocalMind en GitHub](https://github.com/abdulmominsakib/localmind) — README, licencia MIT, versiones y notas de versión.',
          '[Política de privacidad de LocalMind](https://momin.pro/privacy-policy-localmind) — declaraciones sobre tratamiento y almacenamiento de datos, en vigor desde el 1 de abril de 2026.',
          '[Abdul Momin Sakib](https://momin.pro) — portafolio del desarrollador que incluye LocalMind.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Enchanted](/es/power-local-llm/enchanted-review) — un cliente mínimo de Ollama para iPhone y Mac.',
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat gratuito y de código abierto en el dispositivo para iOS y Android.',
          '[Análisis de LM Playground](/es/power-local-llm/lm-playground-review) — una app de chat gratuita con llama.cpp para Android.',
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat sin conexión de código abierto con preguntas sobre documentos.',
          '[Las mejores apps de LLM locales para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el resumen más amplio para Android.',
          '[Las mejores apps de LLM locales para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el resumen más amplio para iPhone.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmind-review-hero-fr.webp',
    title: 'Avis sur LocalMind : appli de chat gratuite pour modèles locaux et auto-hébergés',
    seoTitle: 'Avis LocalMind : appli de chat IA gratuite Android/iPhone',
    intro:
      'LocalMind est une application de chat gratuite sous licence MIT pour Android et iPhone, créée par le développeur indépendant [Abdul Momin Sakib](https://momin.pro). Elle envoie vos messages à un modèle présent sur le téléphone ou à un serveur ou fournisseur de votre choix : Ollama, LM Studio, OpenRouter ou tout point d\'accès compatible OpenAI. Cet avis s\'appuie sur la [fiche Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind), la [fiche App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480), la [politique de confidentialité](https://momin.pro/privacy-policy-localmind) et le [dépôt GitHub public](https://github.com/abdulmominsakib/localmind), consultés le 17 octobre 2026 ; PromptQuorum n\'a pas testé l\'application en conditions réelles.',
    metaDescription:
      'Avis LocalMind : appli de chat gratuite (MIT) pour Android et iPhone, avec modèles sur l\'appareil, Ollama, LM Studio, OpenRouter. Confidentialité.',
    twitterDescription:
      'Avis LocalMind : une appli de chat open source pour Android et iPhone, avec modèles sur l\'appareil ou votre serveur Ollama ou LM Studio, outils MCP et questions ouvertes.',
    audience:
      'Utilisateurs d\'Android et d\'iPhone qui cherchent une appli de chat gratuite et open source pour des modèles de langage locaux ou auto-hébergés, et qui veulent savoir quels backends elle gère, ce qui reste sur l\'appareil et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis LocalMind',
    targetKeywords: [
      'localmind appli avis',
      'localmind ollama android',
      'client ollama pour iphone',
      'appli mobile lm studio',
      'appli llm locale open source android ios',
      'exécuter un llm sur téléphone hors ligne',
      'client mcp appli android',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'DeepSeek R1', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMind (version 1.9.0, publiée le 14 octobre 2026) est une appli de chat gratuite sous licence MIT qui peut exécuter de petits modèles sur le téléphone et se connecter aussi à un serveur que vous contrôlez.** Elle ne demande aucun compte ; les connexions possibles sont Ollama, LM Studio, tout serveur compatible OpenAI, ainsi qu\'OpenRouter ou Requesty avec votre propre clé d\'API. Une réserve conditionne la lecture des fiches des boutiques : la description Google Play la présente uniquement comme un client distant.',
    quickAnswerTop: {
      fr: {
        question: 'LocalMind est-elle gratuite, open source et privée ?',
        answer:
          'D\'après ses fiches et son dépôt, oui : l\'appli est gratuite, sans publicité ni achat affichés, son code est sous licence MIT et les deux boutiques déclarent qu\'aucune donnée n\'est collectée. Le trafic réseau ne va qu\'au serveur ou au fournisseur que vous configurez.',
        bullets: [
          'Gratuite sur [Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) et l\'[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) ; APK et code source sur [GitHub](https://github.com/abdulmominsakib/localmind).',
          'Backends : modèles GGUF et LiteRT sur l\'appareil, Ollama, LM Studio, OpenRouter, Requesty et serveurs compatibles OpenAI.',
          'Extras de chat : affichage du raisonnement, dictée et lecture vocale, pièces jointes (fichiers et photos), personas et outils MCP.',
          'Signaux des boutiques au 17 octobre 2026 : plus de 10K téléchargements sur Google Play avec 4.4 étoiles pour 279 avis, 4.7 étoiles pour 13 notes sur l\'App Store américain, 281 étoiles GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que LocalMind ?', anchor: 'what-is-localmind' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Pour bien démarrer', anchor: 'getting-started' },
      { label: 'Quels modèles et serveurs gère-t-elle ?', anchor: 'backends' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Confidentialité et usage du réseau', anchor: 'privacy' },
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
            text: 'LocalMind transforme un téléphone Android ou un iPhone en interface de chat unique pour de petits modèles sur l\'appareil, votre propre serveur Ollama ou LM Studio et des modèles cloud accessibles avec votre propre clé.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez depuis une boutique, vous choisissez où tourne le modèle et vous discutez sans créer de compte ; seul le serveur ou le fournisseur choisi reçoit vos messages.',
          },
        ],
        items: [
          'Développeur : Abdul Momin Sakib, développeur Flutter indépendant ; le dépôt public date d\'avril 2026 et cite six contributeurs, le projet est donc jeune.',
          'Plateformes : Android et iPhone, installation via Google Play ou l\'App Store ; un APK est aussi joint à chaque version GitHub.',
          'Actualité : la version 1.9.0 de GitHub est parue le 14 octobre 2026 et l\'App Store affiche la même version mise à jour le 15 octobre 2026, ce qui laisse penser que le projet est activement maintenu.',
          'Modèles : petits modèles GGUF et LiteRT sur l\'appareil, ou tout modèle exposé par votre serveur ou fournisseur.',
          'Question ouverte : les fiches des boutiques et le README décrivent l\'appli différemment ; voir la liste des points non vérifiés plus bas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur les fiches Google Play et App Store, la politique de confidentialité, le site du développeur et le dépôt GitHub public (README, licence, versions et notes de version), consultés le 17 octobre 2026. PromptQuorum n\'a ni testé ni évalué l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmind',
        title: 'Qu\'est-ce que LocalMind ?',
        content: [
          '**LocalMind est une appli de chat développée avec Flutter qui envoie vos messages soit à un modèle présent sur le téléphone, soit à un serveur ou fournisseur de votre choix.** D\'après le [README](https://github.com/abdulmominsakib/localmind), les modèles sur l\'appareil sont des fichiers GGUF exécutés via llama.cpp et des modèles LiteRT comme Gemma, tandis que les options distantes comprennent [Ollama](https://ollama.com/), [LM Studio](https://lmstudio.ai/), [OpenRouter](https://openrouter.ai/) et [Requesty](https://www.requesty.ai/).',
          'Le développeur, Abdul Momin Sakib, présente LocalMind sur son [site portfolio](https://momin.pro) et la publie sur les deux boutiques sous le nom « LocalMind: Ollama & LM Studio ». D\'autres produits peuvent porter le nom LocalMind ; cet avis ne couvre que l\'appli dont le nom de paquet Android est pro.momin.localmind.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**LocalMind est une appli de boutique : installez-la depuis Google Play ou l\'App Store, ou installez l\'APK depuis GitHub.** Le code source se trouve dans le même dépôt que les versions.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) (gratuite ; version minimale d\'Android non indiquée)',
          },
          {
            'Plateforme': 'iPhone / iPad',
            'Où la trouver': '[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) (gratuite ; iOS 17.6 ou ultérieur)',
          },
          {
            'Plateforme': 'APK Android',
            'Où la trouver': '[GitHub Releases](https://github.com/abdulmominsakib/localmind/releases) (app-release.apk)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[momin.pro](https://momin.pro) (portfolio du développeur)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où la trouver': '[Politique de confidentialité de LocalMind](https://momin.pro/privacy-policy-localmind)',
          },
          {
            'Plateforme': 'Code source',
            'Où la trouver': '[GitHub](https://github.com/abdulmominsakib/localmind) (MIT)',
          },
        ],
        note: 'Version et actualité vérifiées le 17 octobre 2026 : la dernière version GitHub est la 1.9.0 (build 95), publiée le 14 octobre 2026 ; l\'App Store affiche la 1.9.0 mise à jour le 15 octobre 2026 ; Google Play indique une mise à jour du 14 octobre 2026 sans numéro de build. Aucun site produit dédié n\'a été trouvé : le lien développeur de Google Play mène au portfolio ci-dessus et le dépôt n\'a pas de champ page d\'accueil.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**La mise en route suit l\'ordre décrit dans le README et les fiches des boutiques ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Installer l\'appli',
            whyItMatters: 'Installez LocalMind depuis Google Play ou l\'App Store ; aucune des sources ne mentionne de compte.',
          },
          {
            title: 'Choisir où tourne le modèle',
            whyItMatters: 'Téléchargez un modèle sur le téléphone pour un usage hors ligne, ou saisissez l\'adresse de votre serveur Ollama ou LM Studio, ou une clé d\'API OpenRouter ou Requesty. La fiche Play suggère le Wi-Fi ou un tunnel sécurisé comme Tailscale pour joindre un serveur domestique.',
          },
          {
            title: 'Discuter, joindre ou dicter',
            whyItMatters: 'Lancez une conversation, joignez des photos ou des fichiers pour les modèles avec vision, ou dictez votre message ; les conversations temporaires restent en mémoire et ne sont pas enregistrées dans l\'historique.',
          },
          {
            title: 'Connecter des outils MCP (facultatif)',
            whyItMatters: 'Les serveurs MCP peuvent être activés globalement ou par conversation dans les réglages. Laissez-les désactivés pour que le modèle s\'en tienne à la conversation.',
          },
        ],
      },
      modelsSupported: {
        id: 'backends',
        title: 'Quels modèles et serveurs gère-t-elle ?',
        itemHeadings: true,
        columns: ['Backend', 'Type', 'Remarques'],
        rows: [
          {
            'Backend': 'Sur l\'appareil',
            'Type': 'Hors ligne',
            'Remarques': 'Modèles GGUF via llama.cpp (llamadart) et modèles LiteRT (flutter_gemma)',
          },
          {
            'Backend': 'Ollama',
            'Type': 'Local ou cloud',
            'Remarques': 'Votre propre serveur ; le README indique qu\'Ollama Cloud est aussi pris en charge',
          },
          {
            'Backend': 'LM Studio',
            'Type': 'Local',
            'Remarques': 'Inclut le catalogue de modèles de LM Studio',
          },
          {
            'Backend': 'OpenRouter / Requesty',
            'Type': 'Cloud',
            'Remarques': 'Votre propre clé d\'API est requise',
          },
          {
            'Backend': 'Compatible OpenAI',
            'Type': 'Local ou cloud',
            'Remarques': 'Serveur llama.cpp, vLLM, LocalAI, Jan et similaires',
          },
        ],
        note: 'Source : le tableau « Supported Backends » du README au 17 octobre 2026. Le README cite Gemma, Qwen et DeepSeek R1 comme exemples de modèles sur l\'appareil et le texte de l\'App Store cite Gemma et Llama ; aucune liste complète de modèles n\'a été trouvée.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient du README, du texte de l\'App Store ou des notes de la version 1.9.0 ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Bases du chat.** Réponses en streaming, markdown avec code coloré, formules LaTeX, journaux de raisonnement repliables pour des modèles comme DeepSeek R1, modification et régénération, réponses alternatives, prompts enregistrés et suggestions de suite.',
          '**Voix.** Dictée vocale et lecture à voix haute des réponses, avec vitesse réglable et lecture en arrière-plan.',
          '**Pièces jointes et export.** Photos, documents et autres fichiers pour les modèles avec vision, et export des conversations en Markdown ou PDF.',
          '**Outils MCP.** Serveurs MCP locaux ou distants avec interrupteurs globaux et par conversation ; la version 1.9.0 a ajouté des appels d\'outils MCP en parallèle dans les sessions Gemma sur l\'appareil.',
          '**Personas et paramètres.** Prompts système personnalisés, réglage de temperature, top_p, limite de tokens et taille de contexte, et changement de modèle en pleine conversation.',
          '**Génération en arrière-plan.** Nouveauté de la 1.9.0 : les réponses continuent d\'arriver quand vous changez de conversation.',
          '**Historique, sauvegarde et synchronisation.** Historique local avec recherche, dossiers et épinglage, archive de sauvegarde, synchronisation facultative chiffrée de bout en bout vers un bucket S3 que vous contrôlez, et interface en 15 langues.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Les déclarations de confidentialité concordent entre les sources : la politique indique que LocalMind n\'utilise ni outil d\'analyse ni outil de suivi et n\'a pas de serveur central, la section « Sécurité des données » de Google Play déclare « Aucune donnée collectée » et « Aucune donnée partagée avec des tiers », et l\'étiquette de confidentialité de l\'App Store indique « Données non collectées ».** La [politique de confidentialité](https://momin.pro/privacy-policy-localmind) précise que les conversations, les réglages et les personas restent sur l\'appareil.',
          'Les requêtes partent directement vers le serveur ou le fournisseur que vous configurez : selon la politique, le trafic vers les serveurs locaux ne quitte pas votre réseau, tandis qu\'avec les fournisseurs cloud, les clés et les requêtes vont directement au fournisseur, qui les traite selon ses propres conditions.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le code source est public, ces déclarations peuvent donc être vérifiées par quiconque compile l\'appli, mais PromptQuorum n\'a audité ni le code ni le trafic réseau.',
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
            'Avantage': 'Gratuite et open source',
            'En pratique': 'Pas de compte ni d\'abonnement, et le code sous licence MIT peut être lu et compilé.',
            'Limite / réserve': 'Un développeur principal et un dépôt d\'avril 2026 ; les sources n\'indiquent aucun engagement de support.',
          },
          {
            'Avantage': 'Trois façons d\'exécuter un modèle',
            'En pratique': 'Utilisez le téléphone, un serveur domestique ou une clé cloud depuis la même appli et changez en cours de conversation.',
            'Limite / réserve': 'La qualité sur l\'appareil dépend du téléphone et du modèle ; les modes distants exigent un serveur ou une clé accessibles.',
          },
          {
            'Avantage': 'Rythme de versions soutenu',
            'En pratique': 'GitHub montre des versions les 9 septembre, 30 septembre et 14 octobre 2026.',
            'Limite / réserve': 'Ce rythme fait que les descriptions des boutiques peuvent être en retard sur le README.',
          },
          {
            'Avantage': 'Prise en charge des outils MCP',
            'En pratique': 'Les modèles peuvent appeler les outils exposés par les serveurs MCP que vous connectez.',
            'Limite / réserve': 'Le README cite l\'accès aux fichiers, les API web et les actions shell en exemple ; n\'activez que des serveurs de confiance.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les propriétaires d\'un serveur Ollama ou LM Studio** qui veulent une interface mobile pour celui-ci.',
          '**Ceux qui veulent discuter avec de petits modèles sur le téléphone** sans créer de compte.',
          '**Les bidouilleurs qui veulent des outils MCP sur mobile** et préfèrent une appli dont ils peuvent lire le code.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Performances en pratique.** PromptQuorum n\'a pas exécuté l\'appli : vitesse, consommation de batterie et qualité des réponses ne sont pas évaluées.',
          '**Ce que contient chaque version des boutiques.** La description Google Play présente un client qui exige Ollama, LM Studio ou une clé OpenRouter et ne mentionne aucun modèle sur l\'appareil, alors que le README et le texte de l\'App Store en parlent ; les sources n\'indiquent pas en quoi les versions Android et iPhone diffèrent.',
          '**Quelle base de données stocke les conversations.** La politique de confidentialité cite Hive CE et le README cite ObjectBox.',
          '**Si la politique couvre les fonctions récentes.** Elle est datée du 1er avril 2026 et ne mentionne ni les modèles sur l\'appareil, ni les outils MCP, ni la synchronisation S3.',
          '**Pas pour les utilisateurs de bureau.** Les liens des boutiques et les versions ne proposent aucune version pour Mac, Windows ou Linux.',
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
            'Plateformes': 'macOS, iOS',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Client Ollama minimal sans moteur d\'inférence propre',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Client de chat sur l\'appareil avec sa propre bibliothèque de modèles',
          },
          {
            'Application': '[LM Playground](/fr/power-local-llm/lm-playground-review)',
            'Plateformes': 'Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Appli llama.cpp avec questions sur documents et dictée',
          },
          {
            'Application': '[Private Mind](/fr/power-local-llm/private-mind-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Chat hors ligne sur ExecuTorch avec questions sur documents',
          },
        ],
        note: 'Les informations sur les concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Existe-t-il une version de bureau ?',
            a: 'Aucun téléchargement pour Mac, Windows ou Linux n\'est proposé. Le README mentionne une vue partagée pour les grands écrans, mais un Ollama ou un LM Studio tournant sur un ordinateur reste accessible depuis le téléphone.',
          },
          {
            q: 'Comment joindre mon serveur domestique en déplacement ?',
            a: 'La fiche Play cite les tunnels sécurisés comme Tailscale en option ; les sources ne décrivent aucun accès distant intégré.',
          },
          {
            q: 'Fonctionne-t-elle avec les modèles de raisonnement ?',
            a: 'Le README décrit des journaux de raisonnement repliables pour des modèles comme DeepSeek R1, et les notes de la 1.9.0 ajoutent une option pour omettre temperature et top_p pour les modèles de raisonnement qui les refusent.',
          },
          {
            q: 'Que deviennent mes conversations si je supprime l\'appli ?',
            a: 'Selon la politique, il n\'y a pas de serveur central : les conversations sont perdues sauf sauvegarde manuelle ; le README décrit l\'export et l\'import d\'une archive de sauvegarde.',
          },
          {
            q: 'Où puis-je lire le code source ?',
            a: 'Le code complet se trouve dans le [dépôt LocalMind](https://github.com/abdulmominsakib/localmind) sur GitHub, sous licence MIT.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LocalMind est un moyen gratuit et sous licence MIT de discuter depuis Android ou iPhone avec de petits modèles sur l\'appareil ou avec votre propre environnement Ollama, LM Studio ou OpenRouter, avec en plus des outils MCP, la voix et les pièces jointes ; son dépôt public permet en principe de vérifier ses déclarations de confidentialité. En revanche, c\'est un projet jeune porté par un seul développeur, sa description Google Play est en retard sur le README et sa politique de confidentialité ne mentionne pas les fonctions récentes. Elle convient à ceux qui font déjà tourner un serveur ou veulent une seule appli pour plusieurs backends ; ceux qui ne veulent que du chat hors ligne peuvent comparer [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), et les utilisateurs d\'iPhone qui n\'ont besoin que d\'une interface pour Ollama peuvent regarder [Enchanted](/fr/power-local-llm/enchanted-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LocalMind sur Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) — description, lien développeur, nombre de téléchargements, note, section Sécurité des données et date de mise à jour, consultés le 17 octobre 2026.',
          '[LocalMind sur l\'App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) — description, version, date de mise à jour, prérequis et étiquette de confidentialité.',
          '[LocalMind sur GitHub](https://github.com/abdulmominsakib/localmind) — README, licence MIT, versions et notes de version.',
          '[Politique de confidentialité de LocalMind](https://momin.pro/privacy-policy-localmind) — déclarations sur le traitement et le stockage des données, en vigueur depuis le 1er avril 2026.',
          '[Abdul Momin Sakib](https://momin.pro) — portfolio du développeur qui présente LocalMind.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis sur Enchanted](/fr/power-local-llm/enchanted-review) — un client Ollama minimal pour iPhone et Mac.',
          '[Avis sur PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l\'appareil pour iOS et Android.',
          '[Avis sur LM Playground](/fr/power-local-llm/lm-playground-review) — une appli de chat gratuite basée sur llama.cpp pour Android.',
          '[Avis sur Private Mind](/fr/power-local-llm/private-mind-review) — une appli de chat hors ligne open source avec questions sur documents.',
          '[Les meilleures applis de LLM locaux pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le panorama plus large pour Android.',
          '[Les meilleures applis de LLM locaux pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama plus large pour iPhone.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmind-review-hero-ja.webp',
    title: 'LocalMindレビュー:オンデバイスと自前サーバーのモデルに使える無料チャットアプリ',
    seoTitle: 'LocalMindレビュー:無料Android/iPhone LLMチャット',
    intro:
      'LocalMindは、個人開発者の[Abdul Momin Sakib](https://momin.pro)氏が公開している、AndroidとiPhone向けの無料のMITライセンスのチャットアプリです。入力はスマートフォン上のモデル、またはOllama、LM Studio、OpenRouter、OpenAI互換エンドポイントなど、利用者が選んだサーバーやプロバイダーに送られます。本レビューは、2026年10月17日に確認した[Google Playの掲載情報](https://play.google.com/store/apps/details?id=pro.momin.localmind)、[App Storeの掲載情報](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480)、[プライバシーポリシー](https://momin.pro/privacy-policy-localmind)、公開[GitHubリポジトリ](https://github.com/abdulmominsakib/localmind)に基づいており、PromptQuorumは実機での検証を行っていません。',
    metaDescription:
      'LocalMindレビュー:オンデバイスモデル、Ollama、LM Studio、OpenRouterに対応する無料のAndroid/iPhoneチャットアプリ(MIT)。バックエンド、プライバシー、制約。',
    twitterDescription:
      'LocalMindレビュー:端末内モデルや自前のOllama・LM Studioサーバーで使える、オープンソースのAndroid/iPhoneチャットアプリ。MCPツールと未確認点も紹介。',
    audience:
      'ローカルまたは自前ホストの言語モデル向けに、無料のオープンソースのチャットアプリを探しているAndroid・iPhoneユーザー。対応バックエンド、端末内に残るデータ、情報源で確認できなかった点を知りたい方向けです。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMind レビュー',
    targetKeywords: [
      'localmind アプリ レビュー',
      'localmind ollama android',
      'iphone ollama クライアント',
      'lm studio モバイルアプリ',
      'オープンソース ローカルllm アプリ android ios',
      'スマホ llm オフライン 実行',
      'mcp クライアント android アプリ',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'DeepSeek R1', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMind(バージョン1.9.0、2026年10月14日リリース)は、小型モデルをスマートフォン上で動かせるうえ、自分で管理するサーバーにも接続できる、無料のMITライセンスのチャットアプリです。** アカウントは不要で、接続先はOllama、LM Studio、OpenAI互換サーバー、そして自分のAPIキーを使うOpenRouterやRequestyです。ストアの説明を読む際の注意点が一つあります。Google Playの説明文は、リモート接続専用のクライアントとして紹介しています。',
    quickAnswerTop: {
      ja: {
        question: 'LocalMindは無料で、オープンソースで、プライバシーは守られますか?',
        answer:
          '掲載情報とリポジトリによれば、はい。アプリは無料で広告や課金の表示はなく、コードはMITライセンスで、両ストアともデータは収集されないと表示しています。通信先は、利用者が設定したサーバーまたはプロバイダーのみです。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind)と[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480)で無料配布。APKとソースコードは[GitHub](https://github.com/abdulmominsakib/localmind)にあります。',
          '対応バックエンド:端末内のGGUF/LiteRTモデル、Ollama、LM Studio、OpenRouter、Requesty、OpenAI互換サーバー。',
          'チャット機能:推論過程の表示、音声入力と読み上げ、ファイルや写真の添付、ペルソナ、MCPツール。',
          '2026年10月17日時点のストア指標:Google Playは10K+ダウンロード、279件のレビューで4.4つ星。米国App Storeは13件の評価で4.7つ星。GitHubスターは281。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'LocalMindとは?', anchor: 'what-is-localmind' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '使えるモデルとサーバー', anchor: 'backends' },
      { label: '情報源で確認できる機能', anchor: 'key-features' },
      { label: 'プライバシーとネットワークの利用', anchor: 'privacy' },
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
            text: 'LocalMindは、AndroidスマートフォンやiPhoneを、端末内の小型モデル、自前のOllamaやLM Studioサーバー、自分のキーで使うクラウドモデルに共通のチャット画面へと変えるアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'ストアからインストールし、モデルを動かす場所を選べば、アカウントなしでチャットできます。入力を受け取るのは、選んだサーバーまたはプロバイダーだけです。',
          },
        ],
        items: [
          '開発者:個人のFlutter開発者Abdul Momin Sakib氏。公開リポジトリは2026年4月の作成でコントリビューターは6人と記載されており、プロジェクトはまだ新しいものです。',
          '対応プラットフォーム:AndroidとiPhone。Google PlayまたはApp Storeからインストールでき、GitHubの各リリースにもAPKが添付されています。',
          '更新状況:GitHubのリリース1.9.0は2026年10月14日に公開され、App Storeも同じバージョンを2026年10月15日更新として掲載しており、活発にメンテナンスされているとみられます。',
          'モデル:端末内の小型GGUF/LiteRTモデル、またはサーバーやプロバイダーが提供する任意のモデル。',
          '未解決の点:ストアの説明文とREADMEでアプリの紹介内容が異なります。詳しくは下の「確認できなかった点」をご覧ください。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月17日に確認したGoogle PlayとApp Storeの掲載情報、プライバシーポリシー、開発者のサイト、公開GitHubリポジトリ(README、ライセンス、リリース、リリースノート)に基づいています。PromptQuorumはこのアプリのテストやベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-localmind',
        title: 'LocalMindとは?',
        content: [
          '**LocalMindは、Flutterで作られたチャットアプリで、入力をスマートフォン上のモデル、または利用者が選んだサーバーやプロバイダーに送ります。** [README](https://github.com/abdulmominsakib/localmind)によると、端末内モデルはllama.cppで動くGGUFファイルとGemmaなどのLiteRTモデルで、リモートの選択肢には[Ollama](https://ollama.com/)、[LM Studio](https://lmstudio.ai/)、[OpenRouter](https://openrouter.ai/)、[Requesty](https://www.requesty.ai/)が挙げられています。',
          '開発者のAbdul Momin Sakib氏は、自身の[ポートフォリオサイト](https://momin.pro)でLocalMindを紹介し、両ストアに「LocalMind: Ollama & LM Studio」の名前で公開しています。LocalMindという名前の製品が他にある可能性があります。本レビューが扱うのは、Androidのパッケージ名がpro.momin.localmindのアプリのみです。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**LocalMindはストアアプリです。Google PlayまたはApp Storeからインストールするか、GitHubからAPKを入手できます。** ソースコードはリリースと同じリポジトリにあります。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind)(無料。必要なAndroidの最低バージョンは記載なし)',
          },
          {
            'プラットフォーム': 'iPhone / iPad',
            '入手先': '[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480)(無料。iOS 17.6以降)',
          },
          {
            'プラットフォーム': 'Android APK',
            '入手先': '[GitHub Releases](https://github.com/abdulmominsakib/localmind/releases)(app-release.apk)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[momin.pro](https://momin.pro)(開発者のポートフォリオ)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[LocalMindのプライバシーポリシー](https://momin.pro/privacy-policy-localmind)',
          },
          {
            'プラットフォーム': 'ソースコード',
            '入手先': '[GitHub](https://github.com/abdulmominsakib/localmind)(MIT)',
          },
        ],
        note: '2026年10月17日時点で確認したバージョンと更新状況:GitHubの最新リリースは1.9.0(ビルド95)で2026年10月14日に公開。App Storeは1.9.0を2026年10月15日更新として掲載。Google Playはビルド番号なしで2026年10月14日の更新を表示しています。専用の製品サイトは見つかりませんでした。Google Playの開発者リンクは上記のポートフォリオにつながり、リポジトリにもホームページの設定はありません。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**セットアップはREADMEとストア掲載情報の記載順に沿っています。PromptQuorumはこれらの手順を実行していません。**',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'Google PlayまたはApp StoreからLocalMindをインストールします。いずれの情報源にもアカウントの記載はありません。',
          },
          {
            title: 'モデルを動かす場所を選ぶ',
            whyItMatters: 'オフラインで使うならモデルをスマートフォンにダウンロードします。または、OllamaやLM Studioサーバーのアドレス、もしくはOpenRouterやRequestyのAPIキーを入力します。自宅サーバーへの接続には、Wi-FiまたはTailscaleなどの安全なトンネルが使えるとPlayの掲載情報に書かれています。',
          },
          {
            title: 'チャット、添付、音声入力',
            whyItMatters: 'チャットを始め、画像対応モデル向けに写真やファイルを添付するか、音声で入力します。一時チャットはメモリ上でのみ動作し、履歴には保存されません。',
          },
          {
            title: '必要ならMCPツールを接続する',
            whyItMatters: 'MCPサーバーは設定でグローバルまたはチャットごとにオンにできます。通常の会話だけにしたい場合はオフのままにします。',
          },
        ],
      },
      modelsSupported: {
        id: 'backends',
        title: '使えるモデルとサーバー',
        itemHeadings: true,
        columns: ['バックエンド', '種別', '備考'],
        rows: [
          {
            'バックエンド': '端末内',
            '種別': 'オフライン',
            '備考': 'llama.cpp(llamadart)経由のGGUFモデルとLiteRTモデル(flutter_gemma)',
          },
          {
            'バックエンド': 'Ollama',
            '種別': 'ローカルまたはクラウド',
            '備考': '自前のサーバー。READMEではOllama Cloudにも対応と記載',
          },
          {
            'バックエンド': 'LM Studio',
            '種別': 'ローカル',
            '備考': 'LM Studioのモデルカタログを含む',
          },
          {
            'バックエンド': 'OpenRouter / Requesty',
            '種別': 'クラウド',
            '備考': '自分のAPIキーが必要',
          },
          {
            'バックエンド': 'OpenAI互換',
            '種別': 'ローカルまたはクラウド',
            '備考': 'llama.cppサーバー、vLLM、LocalAI、Janなど',
          },
        ],
        note: '出典:2026年10月17日時点のREADMEの「Supported Backends」表。READMEは端末内モデルの例としてGemma、Qwen、DeepSeek R1を挙げ、App Storeの説明文はGemmaとLlamaを挙げています。完全なモデル一覧は見つかりませんでした。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべてREADME、App Storeの説明文、または1.9.0のリリースノートに基づくもので、独自のテストは行っていません。**',
        ],
        items: [
          '**チャットの基本機能。** ストリーミング表示、コードのシンタックスハイライト付きMarkdown、LaTeX数式、DeepSeek R1などの推論過程を折りたためるログ、編集と再生成、別の返答の切り替え、保存済みプロンプト、フォローアップの提案。',
          '**音声。** 音声入力と、速度調整やバックグラウンド再生に対応した読み上げ。',
          '**添付とエクスポート。** 画像対応モデル向けの写真、文書、その他のファイルの添付と、チャットのMarkdownまたはPDFへの書き出し。',
          '**MCPツール。** ローカルまたはリモートのMCPサーバーを、グローバルとチャットごとのスイッチで管理。バージョン1.9.0で、端末内のGemmaセッションでMCPツールの並列呼び出しに対応。',
          '**ペルソナとパラメーター。** カスタムのシステムプロンプト、temperature、top_p、トークン上限、コンテキストサイズの調整、会話の途中でのモデル切り替え。',
          '**バックグラウンド生成。** 1.9.0で追加。チャットを切り替えても返答の生成が続きます。',
          '**履歴、バックアップ、同期。** フォルダ分けやピン留めに対応した検索可能なローカル履歴、バックアップアーカイブ、自分で管理するS3バケットへの任意のエンドツーエンド暗号化同期、15言語のインターフェース。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワークの利用',
        content: [
          '**プライバシーに関する記載は情報源の間で一致しています。ポリシーは、LocalMindが分析・追跡ツールを使わず中央サーバーも持たないとしており、Google Playの「データセーフティ」は「収集されるデータなし」「第三者と共有されるデータなし」、App Storeのプライバシーラベルは「データ非収集」と表示しています。** [プライバシーポリシー](https://momin.pro/privacy-policy-localmind)は、会話、設定、ペルソナが端末内にのみ保存されると述べています。',
          'リクエストは、利用者が設定したサーバーまたはプロバイダーに直接送られます。ポリシーによれば、ローカルサーバーへの通信はネットワークの外に出ず、クラウドプロバイダーの場合はキーとリクエストがプロバイダーに直接送られ、プロバイダー側の規約に従って処理されます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ソースコードは公開されているため、アプリをビルドすれば誰でもこれらの記載を検証できます。ただしPromptQuorumは、コードやネットワーク通信の監査を行っていません。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:利点と制約',
        columns: ['利点', '実際の使用での意味', '制約・注意点'],
        rows: [
          {
            '利点': '無料でオープンソース',
            '実際の使用での意味': 'アカウントも購読も不要で、MITライセンスのコードは誰でも読んでビルドできます。',
            '制約・注意点': '主な開発者は1人で、リポジトリは2026年4月の作成です。サポートの約束は情報源に記載がありません。',
          },
          {
            '利点': 'モデルの動かし方が3通り',
            '実際の使用での意味': 'スマートフォン、自宅サーバー、クラウドキーを同じアプリで使い、チャットの途中でも切り替えられます。',
            '制約・注意点': '端末内の品質は機種とモデル次第で、リモート利用には接続可能なサーバーまたはキーが必要です。',
          },
          {
            '利点': 'リリースの頻度が高い',
            '実際の使用での意味': 'GitHubには2026年9月9日、9月30日、10月14日のリリースが並んでいます。',
            '制約・注意点': '変化が速いため、ストアの説明文がREADMEより遅れることがあります。',
          },
          {
            '利点': 'MCPツールに対応',
            '実際の使用での意味': '接続したMCPサーバーが提供するツールを、モデルが呼び出せます。',
            '制約・注意点': 'READMEは例としてファイルアクセス、ウェブAPI、シェル操作を挙げています。信頼できるサーバーだけを有効にしてください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**OllamaまたはLM Studioサーバーの所有者**で、スマートフォンから使う画面が欲しい人。',
          '**アカウントなしで、スマートフォン上の小型モデルとチャットしたい人。**',
          '**スマートフォンでMCPツールを試したい人**で、ソースが読めるアプリを好む人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の性能。** PromptQuorumはアプリを実行していないため、速度、バッテリー消費、回答品質は評価していません。',
          '**各ストア版の内容。** Google Playの説明文は、OllamaやLM Studio、OpenRouterのキーが必要なクライアントとして紹介し、端末内モデルには触れていませんが、READMEとApp Storeの説明文は端末内モデルを説明しています。AndroidとiPhoneでビルドがどう違うかは、情報源に記載がありません。',
          '**チャットを保存するデータベース。** プライバシーポリシーはHive CE、READMEはObjectBoxと記載しています。',
          '**ポリシーが新しい機能を対象にしているか。** ポリシーの日付は2026年4月1日で、端末内モデル、MCPツール、S3同期には触れていません。',
          '**デスクトップ利用者には不向きです。** ストアのリンクとリリースには、Mac、Windows、Linux向けのビルドがありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '料金/ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Enchanted](/ja/power-local-llm/enchanted-review)',
            'プラットフォーム': 'macOS、iOS',
            '料金/ライセンス': '無料 / Apache 2.0',
            '主な違い': '独自の推論エンジンを持たない、最小限のOllamaクライアント',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iOS、Android',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': '独自のモデルライブラリを持つ端末内チャットクライアント',
          },
          {
            'アプリ': '[LM Playground](/ja/power-local-llm/lm-playground-review)',
            'プラットフォーム': 'Android',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': '文書Q&Aと音声入力を備えたllama.cppアプリ',
          },
          {
            'アプリ': '[Private Mind](/ja/power-local-llm/private-mind-review)',
            'プラットフォーム': 'iOS、Android',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': '文書Q&Aを備えた、ExecuTorchベースのオフラインチャット',
          },
        ],
        note: '競合の情報は変わりやすいため、各アプリの最新の料金、ライセンス、対応プラットフォームはそれぞれの掲載ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'デスクトップ版はありますか?',
            a: 'Mac、Windows、Linux向けのダウンロードは提供されていません。READMEは大画面向けの分割表示を挙げていますが、デスクトップで動くOllamaやLM Studioにはスマートフォンから接続できます。',
          },
          {
            q: '外出先から自宅のサーバーに接続するには?',
            a: 'Playの掲載情報は、Tailscaleなどの安全なトンネルを選択肢として挙げています。アプリ内蔵のリモートアクセス機能については、情報源に記載がありません。',
          },
          {
            q: '推論モデルでも使えますか?',
            a: 'READMEはDeepSeek R1などの推論過程を折りたためるログを挙げており、1.9.0のノートには、temperatureとtop_pを受け付けない推論モデル向けにそれらを省略するオプションの追加が記載されています。',
          },
          {
            q: 'アプリを削除するとチャットはどうなりますか?',
            a: 'ポリシーによれば中央サーバーはないため、手動でバックアップしていない限り会話は失われます。READMEには、バックアップアーカイブの書き出しと読み込みが記載されています。',
          },
          {
            q: 'ソースコードはどこで読めますか?',
            a: '全コードはGitHubの[LocalMindリポジトリ](https://github.com/abdulmominsakib/localmind)にMITライセンスで公開されています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'LocalMindは、AndroidやiPhoneから、端末内の小型モデルや自分のOllama、LM Studio、OpenRouter環境とチャットできる、無料のMITライセンスのアプリです。MCPツール、音声、添付ファイルにも対応し、公開リポジトリがあるため、プライバシーに関する記載は原理的に検証できます。一方で、開発者1人の新しいプロジェクトであり、Google Playの説明文はREADMEより遅れていて、プライバシーポリシーは新しい機能に触れていません。すでにサーバーを運用している人や、複数のバックエンドを1つのアプリで使いたい人に向いています。オフラインのチャットだけが目的なら[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)、iPhoneでOllama用の画面だけが必要なら[Enchanted](/ja/power-local-llm/enchanted-review)も比較してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのLocalMind](https://play.google.com/store/apps/details?id=pro.momin.localmind) — 説明文、開発者リンク、ダウンロード数、評価、データセーフティ、更新日。2026年10月17日確認。',
          '[App StoreのLocalMind](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) — 説明文、バージョン、更新日、動作要件、プライバシーラベル。',
          '[GitHubのLocalMind](https://github.com/abdulmominsakib/localmind) — README、MITライセンス、リリース、リリースノート。',
          '[LocalMindのプライバシーポリシー](https://momin.pro/privacy-policy-localmind) — データの取り扱いと保存に関する記載。2026年4月1日施行。',
          '[Abdul Momin Sakib](https://momin.pro) — LocalMindを掲載している開発者のポートフォリオ。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Enchantedレビュー](/ja/power-local-llm/enchanted-review) — iPhoneとMac向けの最小限のOllamaクライアント。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの、無料でオープンソースの端末内チャットクライアント。',
          '[LM Playgroundレビュー](/ja/power-local-llm/lm-playground-review) — Android向けの無料のllama.cppチャットアプリ。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — 文書Q&Aを備えたオープンソースのオフラインチャットアプリ。',
          '[2026年版 Android向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けのより広い比較記事。',
          '[2026年版 iPhone向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより広い比較記事。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmind-review-hero-pt.webp',
    title: 'Análise do LocalMind: app de chat gratuito para modelos locais e auto-hospedados',
    seoTitle: 'Análise do LocalMind: chat com IA para Android e iPhone',
    intro:
      'O LocalMind é um app de chat gratuito, com licença MIT, para Android e iPhone, do desenvolvedor independente [Abdul Momin Sakib](https://momin.pro). Ele envia suas mensagens para um modelo no celular ou para um servidor ou provedor que você escolher: Ollama, LM Studio, OpenRouter ou qualquer endpoint compatível com OpenAI. Esta análise se baseia na [ficha do Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind), na [ficha da App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480), na [política de privacidade](https://momin.pro/privacy-policy-localmind) e no [repositório público do GitHub](https://github.com/abdulmominsakib/localmind), consultados em 17 de outubro de 2026; a PromptQuorum não testou o app na prática.',
    metaDescription:
      'Análise do LocalMind: app de chat gratuito (MIT) para Android e iPhone com modelos no dispositivo, Ollama, LM Studio e OpenRouter. Privacidade e limites.',
    twitterDescription:
      'Análise do LocalMind: um app de chat de código aberto para Android e iPhone com modelos no dispositivo ou seu próprio servidor Ollama ou LM Studio, mais ferramentas MCP e dúvidas em aberto.',
    audience:
      'Usuários de Android e iPhone que querem um app de chat gratuito e de código aberto para modelos de linguagem locais ou auto-hospedados, e que precisam saber quais backends ele aceita, o que fica no dispositivo e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do LocalMind',
    targetKeywords: [
      'localmind app avaliação',
      'localmind ollama android',
      'cliente ollama para iphone',
      'app mobile lm studio',
      'app llm local código aberto android ios',
      'executar llm no celular offline',
      'cliente mcp app android',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'DeepSeek R1', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**O LocalMind (versão 1.9.0, lançada em 14 de outubro de 2026) é um app de chat gratuito, com licença MIT, que pode executar modelos pequenos no celular e também se conectar a um servidor que você controla.** Ele não exige conta; as conexões disponíveis são Ollama, LM Studio, qualquer servidor compatível com OpenAI e OpenRouter ou Requesty com sua própria chave de API. Uma ressalva influencia a leitura das páginas das lojas: a descrição do Google Play o apresenta apenas como cliente remoto.',
    quickAnswerTop: {
      pt: {
        question: 'O LocalMind é gratuito, de código aberto e privado?',
        answer:
          'Segundo as fichas e o repositório, sim: o app é gratuito, sem anúncios nem compras exibidos, o código tem licença MIT e as duas lojas declaram que nenhum dado é coletado. O tráfego de rede vai apenas para o servidor ou provedor que você configurar.',
        bullets: [
          'Gratuito no [Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) e na [App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480); APK e código-fonte no [GitHub](https://github.com/abdulmominsakib/localmind).',
          'Backends: modelos GGUF e LiteRT no dispositivo, Ollama, LM Studio, OpenRouter, Requesty e servidores compatíveis com OpenAI.',
          'Extras do chat: exibição do raciocínio, ditado e leitura em voz alta, anexos de arquivos e fotos, personas e ferramentas MCP.',
          'Sinais das lojas em 17 de outubro de 2026: mais de 10K downloads no Google Play com 4.4 estrelas em 279 avaliações, 4.7 estrelas em 13 notas na App Store dos EUA e 281 estrelas no GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o LocalMind?', anchor: 'what-is-localmind' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Quais modelos e servidores ele aceita?', anchor: 'backends' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e uso da rede', anchor: 'privacy' },
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
            text: 'O LocalMind transforma um celular Android ou um iPhone em uma interface de chat única para modelos pequenos no dispositivo, seu próprio servidor Ollama ou LM Studio e modelos na nuvem acessados com sua própria chave.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala pela loja, escolhe onde o modelo roda e conversa sem criar conta; só o servidor ou provedor escolhido recebe suas mensagens.',
          },
        ],
        items: [
          'Desenvolvedor: Abdul Momin Sakib, desenvolvedor Flutter independente; o repositório público é de abril de 2026 e cita seis colaboradores, então o projeto é jovem.',
          'Plataformas: Android e iPhone, com instalação pelo Google Play ou pela App Store; cada versão no GitHub também traz um APK anexado.',
          'Atualidade: a versão 1.9.0 no GitHub saiu em 14 de outubro de 2026 e a App Store mostra a mesma versão atualizada em 15 de outubro de 2026, o que indica manutenção ativa.',
          'Modelos: modelos GGUF e LiteRT pequenos no dispositivo, ou qualquer modelo que seu servidor ou provedor ofereça.',
          'Dúvida em aberto: as páginas das lojas e o README descrevem o app de formas diferentes; veja a lista de pontos não verificados mais abaixo.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia nas fichas do Google Play e da App Store, na política de privacidade, no site do desenvolvedor e no repositório público do GitHub (README, licença, versões e notas de versão), consultados em 17 de outubro de 2026. A PromptQuorum não testou nem mediu o desempenho do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmind',
        title: 'O que é o LocalMind?',
        content: [
          '**O LocalMind é um app de chat feito com Flutter que envia suas mensagens para um modelo no celular ou para um servidor ou provedor que você escolher.** Segundo o [README](https://github.com/abdulmominsakib/localmind), os modelos no dispositivo são arquivos GGUF executados via llama.cpp e modelos LiteRT como o Gemma, enquanto as opções remotas incluem [Ollama](https://ollama.com/), [LM Studio](https://lmstudio.ai/), [OpenRouter](https://openrouter.ai/) e [Requesty](https://www.requesty.ai/).',
          'O desenvolvedor, Abdul Momin Sakib, lista o LocalMind em seu [site de portfólio](https://momin.pro) e o publica nas duas lojas como "LocalMind: Ollama & LM Studio". Outros produtos podem ter o mesmo nome LocalMind; esta análise cobre apenas o app com o nome de pacote Android pro.momin.localmind.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O LocalMind é um app de loja: instale pelo Google Play ou pela App Store, ou instale o APK pelo GitHub.** O código-fonte fica no mesmo repositório das versões.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) (grátis; versão mínima do Android não informada)',
          },
          {
            'Plataforma': 'iPhone / iPad',
            'Onde obter': '[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) (grátis; iOS 17.6 ou posterior)',
          },
          {
            'Plataforma': 'APK para Android',
            'Onde obter': '[GitHub Releases](https://github.com/abdulmominsakib/localmind/releases) (app-release.apk)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[momin.pro](https://momin.pro) (portfólio do desenvolvedor)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Política de privacidade do LocalMind](https://momin.pro/privacy-policy-localmind)',
          },
          {
            'Plataforma': 'Código-fonte',
            'Onde obter': '[GitHub](https://github.com/abdulmominsakib/localmind) (MIT)',
          },
        ],
        note: 'Versão e atualidade verificadas em 17 de outubro de 2026: a versão mais recente no GitHub é a 1.9.0 (build 95), publicada em 14 de outubro de 2026; a App Store mostra a 1.9.0 atualizada em 15 de outubro de 2026; o Google Play indica uma atualização em 14 de outubro de 2026 sem número de build. Não foi encontrado um site próprio do produto: o link do desenvolvedor no Google Play leva ao portfólio acima e o repositório não tem campo de página inicial.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**A configuração segue a ordem descrita no README e nas fichas das lojas; a PromptQuorum não executou estas etapas.**',
        ],
        numberedItems: [
          {
            title: 'Instale o app',
            whyItMatters: 'Instale o LocalMind pelo Google Play ou pela App Store; nenhuma das fontes menciona conta.',
          },
          {
            title: 'Escolha onde o modelo roda',
            whyItMatters: 'Baixe um modelo para o celular para usar offline, ou informe o endereço do seu servidor Ollama ou LM Studio, ou uma chave de API do OpenRouter ou Requesty. A ficha do Play sugere Wi-Fi ou um túnel seguro como o Tailscale para chegar a um servidor doméstico.',
          },
          {
            title: 'Converse, anexe ou dite',
            whyItMatters: 'Inicie uma conversa, anexe fotos ou arquivos para modelos com visão ou dite sua mensagem; os chats temporários rodam na memória e não vão para o histórico.',
          },
          {
            title: 'Conecte ferramentas MCP (opcional)',
            whyItMatters: 'Os servidores MCP podem ser ativados de forma global ou por chat nas configurações. Deixe-os desativados para que o modelo fique só na conversa.',
          },
        ],
      },
      modelsSupported: {
        id: 'backends',
        title: 'Quais modelos e servidores ele aceita?',
        itemHeadings: true,
        columns: ['Backend', 'Tipo', 'Observações'],
        rows: [
          {
            'Backend': 'No dispositivo',
            'Tipo': 'Offline',
            'Observações': 'Modelos GGUF via llama.cpp (llamadart) e modelos LiteRT (flutter_gemma)',
          },
          {
            'Backend': 'Ollama',
            'Tipo': 'Local ou nuvem',
            'Observações': 'Seu próprio servidor; o README diz que o Ollama Cloud também é aceito',
          },
          {
            'Backend': 'LM Studio',
            'Tipo': 'Local',
            'Observações': 'Inclui o catálogo de modelos do LM Studio',
          },
          {
            'Backend': 'OpenRouter / Requesty',
            'Tipo': 'Nuvem',
            'Observações': 'Exige sua própria chave de API',
          },
          {
            'Backend': 'Compatível com OpenAI',
            'Tipo': 'Local ou nuvem',
            'Observações': 'Servidor llama.cpp, vLLM, LocalAI, Jan e similares',
          },
        ],
        note: 'Fonte: a tabela "Supported Backends" do README em 17 de outubro de 2026. O README cita Gemma, Qwen e DeepSeek R1 como exemplos de modelos no dispositivo e o texto da App Store cita Gemma e Llama; não foi encontrada uma lista completa de modelos.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do README, do texto da App Store ou das notas da versão 1.9.0; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Básico do chat.** Respostas em streaming, markdown com código realçado, fórmulas LaTeX, registros de raciocínio recolhíveis para modelos como o DeepSeek R1, editar e regenerar, respostas alternativas, prompts salvos e sugestões de continuação.',
          '**Voz.** Ditado por voz e leitura das respostas em voz alta, com velocidade ajustável e reprodução em segundo plano.',
          '**Anexos e exportação.** Fotos, documentos e outros arquivos para modelos com visão, e exportação de chats para Markdown ou PDF.',
          '**Ferramentas MCP.** Servidores MCP locais ou remotos com chaves globais e por chat; a versão 1.9.0 adicionou chamadas paralelas de ferramentas MCP em sessões do Gemma no dispositivo.',
          '**Personas e parâmetros.** Prompts de sistema personalizados, temperature, top_p, limite de tokens e tamanho de contexto ajustáveis, e troca de modelo no meio da conversa.',
          '**Geração em segundo plano.** Novidade da 1.9.0: as respostas continuam chegando quando você troca de chat.',
          '**Histórico, backup e sincronização.** Histórico local com busca, pastas e fixação, um arquivo de backup, sincronização opcional com criptografia de ponta a ponta para um bucket S3 que você controla e interface em 15 idiomas.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**As declarações de privacidade coincidem entre as fontes: a política diz que o LocalMind não usa ferramentas de análise nem de rastreamento e não tem servidor central, a seção "Segurança dos dados" do Google Play declara "Nenhum dado coletado" e "Nenhum dado compartilhado com terceiros", e o rótulo de privacidade da App Store diz "Dados não coletados".** A [política de privacidade](https://momin.pro/privacy-policy-localmind) afirma que conversas, configurações e personas ficam no dispositivo.',
          'As solicitações vão diretamente para o servidor ou provedor que você configurar: segundo a política, o tráfego para servidores locais não sai da sua rede, enquanto, com provedores na nuvem, chaves e solicitações vão direto ao provedor, que as trata conforme os próprios termos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O código-fonte é público, então quem compilar o app pode verificar essas declarações, mas a PromptQuorum não auditou o código nem o tráfego de rede.',
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
            'Benefício': 'Gratuito e de código aberto',
            'Na prática': 'Sem conta nem assinatura, e o código com licença MIT pode ser lido e compilado.',
            'Limitação / ressalva': 'Um desenvolvedor principal e um repositório de abril de 2026; as fontes não indicam compromisso de suporte.',
          },
          {
            'Benefício': 'Três formas de executar um modelo',
            'Na prática': 'Use o celular, um servidor doméstico ou uma chave na nuvem no mesmo app e troque no meio do chat.',
            'Limitação / ressalva': 'A qualidade no dispositivo depende do celular e do modelo; os modos remotos exigem um servidor ou chave acessíveis.',
          },
          {
            'Benefício': 'Ritmo rápido de versões',
            'Na prática': 'O GitHub mostra versões em 9 de setembro, 30 de setembro e 14 de outubro de 2026.',
            'Limitação / ressalva': 'A mudança rápida faz com que as descrições das lojas possam ficar atrás do README.',
          },
          {
            'Benefício': 'Suporte a ferramentas MCP',
            'Na prática': 'Os modelos podem chamar ferramentas expostas pelos servidores MCP que você conectar.',
            'Limitação / ressalva': 'O README cita acesso a arquivos, APIs web e ações de shell como exemplos; ative apenas servidores de confiança.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Quem tem um servidor Ollama ou LM Studio** e quer uma interface de celular para ele.',
          '**Quem quer conversar com modelos pequenos no celular** sem criar conta.',
          '**Entusiastas que querem ferramentas MCP no celular** e preferem um app cujo código possam ler.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** A PromptQuorum não executou o app, então velocidade, consumo de bateria e qualidade das respostas não foram avaliados.',
          '**O que cada versão das lojas contém.** A descrição do Google Play apresenta um cliente que precisa de Ollama, LM Studio ou uma chave do OpenRouter e não menciona modelos no dispositivo, enquanto o README e o texto da App Store os descrevem; as fontes não dizem em que as versões de Android e iPhone diferem.',
          '**Qual banco de dados guarda os chats.** A política de privacidade cita o Hive CE e o README cita o ObjectBox.',
          '**Se a política cobre os recursos mais novos.** Ela é datada de 1º de abril de 2026 e não menciona modelos no dispositivo, ferramentas MCP nem sincronização S3.',
          '**Não é para quem usa desktop.** Os links das lojas e as versões não oferecem build para Mac, Windows ou Linux.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Principal diferença'],
        rows: [
          {
            'App': '[Enchanted](/pt/power-local-llm/enchanted-review)',
            'Plataformas': 'macOS, iOS',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Principal diferença': 'Cliente Ollama mínimo, sem motor de inferência próprio',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Principal diferença': 'Cliente de chat no dispositivo com biblioteca de modelos própria',
          },
          {
            'App': '[LM Playground](/pt/power-local-llm/lm-playground-review)',
            'Plataformas': 'Android',
            'Preço / licença': 'Grátis / MIT',
            'Principal diferença': 'App com llama.cpp, perguntas sobre documentos e ditado',
          },
          {
            'App': '[Private Mind](/pt/power-local-llm/private-mind-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Principal diferença': 'Chat offline com ExecuTorch e perguntas sobre documentos',
          },
        ],
        note: 'Os dados da concorrência mudam com frequência; confirme preço, licença e plataformas atuais de cada app na própria ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Existe versão para desktop?',
            a: 'Não é oferecido download para Mac, Windows ou Linux. O README cita uma visualização dividida para telas grandes, mas o Ollama ou o LM Studio rodando em um computador ainda pode ser acessado pelo celular.',
          },
          {
            q: 'Como acesso meu servidor doméstico quando estou fora?',
            a: 'A ficha do Play cita túneis seguros como o Tailscale como opção; as fontes não descrevem nenhum acesso remoto integrado.',
          },
          {
            q: 'Funciona com modelos de raciocínio?',
            a: 'O README descreve registros de raciocínio recolhíveis para modelos como o DeepSeek R1, e as notas da 1.9.0 acrescentam uma opção para omitir temperature e top_p em modelos de raciocínio que os rejeitam.',
          },
          {
            q: 'O que acontece com meus chats se eu apagar o app?',
            a: 'Segundo a política não há servidor central, então as conversas se perdem a menos que você as tenha salvo manualmente; o README descreve a exportação e a importação de um arquivo de backup.',
          },
          {
            q: 'Onde posso ler o código-fonte?',
            a: 'O código completo está no [repositório do LocalMind](https://github.com/abdulmominsakib/localmind) no GitHub, com licença MIT.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O LocalMind é uma forma gratuita, com licença MIT, de conversar pelo Android ou iPhone com modelos pequenos no dispositivo ou com o seu próprio ambiente Ollama, LM Studio ou OpenRouter, com ferramentas MCP, voz e anexos além disso, e o repositório público permite, em princípio, verificar suas declarações de privacidade. Em contrapartida, é um projeto jovem de um único desenvolvedor, a descrição no Google Play está atrás do README e a política de privacidade não menciona os recursos mais novos. Serve para quem já tem um servidor ou quer um único app para vários backends; quem busca só chat offline pode comparar o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), e no iPhone, quem só precisa de uma interface para o Ollama pode olhar o [Enchanted](/pt/power-local-llm/enchanted-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[LocalMind no Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) — descrição, link do desenvolvedor, número de downloads, avaliação, seção de segurança dos dados e data de atualização, consultados em 17 de outubro de 2026.',
          '[LocalMind na App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) — descrição, versão, data de atualização, requisitos e rótulo de privacidade.',
          '[LocalMind no GitHub](https://github.com/abdulmominsakib/localmind) — README, licença MIT, versões e notas de versão.',
          '[Política de privacidade do LocalMind](https://momin.pro/privacy-policy-localmind) — declarações sobre tratamento e armazenamento de dados, em vigor desde 1º de abril de 2026.',
          '[Abdul Momin Sakib](https://momin.pro) — portfólio do desenvolvedor que lista o LocalMind.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Enchanted](/pt/power-local-llm/enchanted-review) — um cliente Ollama mínimo para iPhone e Mac.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no dispositivo para iOS e Android.',
          '[Análise do LM Playground](/pt/power-local-llm/lm-playground-review) — um app de chat gratuito com llama.cpp para Android.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline de código aberto com perguntas sobre documentos.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo para Android.',
          '[Melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmind-review-hero-ar.webp',
    title: 'مراجعة LocalMind: تطبيق دردشة مجاني للنماذج على الجهاز والخوادم الخاصة',
    seoTitle: 'مراجعة LocalMind: تطبيق دردشة مجاني لـ Android وiPhone',
    intro:
      'LocalMind تطبيق دردشة مجاني بترخيص MIT لأجهزة Android وiPhone من المطوّر المستقل [Abdul Momin Sakib](https://momin.pro). يرسل رسائلك إلى نموذج على الهاتف أو إلى خادم أو مزوّد تختاره: Ollama أو LM Studio أو OpenRouter أو أي نقطة اتصال متوافقة مع OpenAI. تستند هذه المراجعة إلى [صفحة Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) و[صفحة App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) و[سياسة الخصوصية](https://momin.pro/privacy-policy-localmind) و[مستودع GitHub العام](https://github.com/abdulmominsakib/localmind)، وقد جرى الاطلاع عليها في 17 أكتوبر 2026؛ ولم تجرّب PromptQuorum التطبيق عمليًا.',
    metaDescription:
      'مراجعة LocalMind: تطبيق دردشة مجاني (MIT) لـ Android وiPhone مع نماذج على الجهاز وOllama وLM Studio وOpenRouter. الخلفيات والخصوصية والقيود.',
    twitterDescription:
      'مراجعة LocalMind: تطبيق دردشة مفتوح المصدر لـ Android وiPhone مع نماذج على الجهاز أو على خادم Ollama أو LM Studio الخاص بك، مع أدوات MCP وأسئلة مفتوحة.',
    audience:
      'مستخدمو Android وiPhone الذين يريدون تطبيق دردشة مجانيًا ومفتوح المصدر لنماذج لغوية محلية أو مستضافة ذاتيًا، ويحتاجون إلى معرفة الخلفيات التي يدعمها، وما الذي يبقى على الجهاز، وما الذي لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة LocalMind',
    targetKeywords: [
      'مراجعة تطبيق localmind',
      'localmind ollama android',
      'عميل ollama لـ iphone',
      'تطبيق lm studio للجوال',
      'تطبيق llm محلي مفتوح المصدر android ios',
      'تشغيل llm على الهاتف دون اتصال',
      'عميل mcp تطبيق android',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'DeepSeek R1', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMind (الإصدار 1.9.0، صدر في 14 أكتوبر 2026) تطبيق دردشة مجاني بترخيص MIT يمكنه تشغيل نماذج صغيرة على الهاتف، كما يتصل بخادم تتحكم فيه.** لا يتطلب حسابًا؛ وخيارات الاتصال هي Ollama وLM Studio وأي خادم متوافق مع OpenAI، وكذلك OpenRouter أو Requesty بمفتاح API خاص بك. وثمة تحفّظ يؤثر في قراءة صفحات المتجرين: فوصف Google Play يقدّمه بوصفه عميلًا عن بُعد فقط.',
    quickAnswerTop: {
      ar: {
        question: 'هل LocalMind مجاني ومفتوح المصدر وخاص؟',
        answer:
          'وفق صفحاته ومستودعه، نعم: التطبيق مجاني دون إعلانات أو مشتريات معروضة، والشيفرة بترخيص MIT، ويعلن المتجران أنه لا تُجمع أي بيانات. وتتجه حركة الشبكة فقط إلى الخادم أو المزوّد الذي تضبطه.',
        bullets: [
          'مجاني على [Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) و[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480)؛ وملف APK والشيفرة المصدرية على [GitHub](https://github.com/abdulmominsakib/localmind).',
          'الخلفيات: نماذج GGUF وLiteRT على الجهاز، وOllama، وLM Studio، وOpenRouter، وRequesty، وخوادم متوافقة مع OpenAI.',
          'إضافات الدردشة: عرض خطوات التفكير، والإملاء الصوتي والقراءة بصوت مسموع، ومرفقات الملفات والصور، والشخصيات، وأدوات MCP.',
          'مؤشرات المتجرين حتى 17 أكتوبر 2026: أكثر من 10K تنزيل على Google Play بتقييم 4.4 نجمة من 279 مراجعة، و4.7 نجمة من 13 تقييمًا في App Store الأمريكي، و281 نجمة على GitHub.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو LocalMind؟', anchor: 'what-is-localmind' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'ما النماذج والخوادم التي يدعمها؟', anchor: 'backends' },
      { label: 'الميزات التي تؤكدها المصادر', anchor: 'key-features' },
      { label: 'الخصوصية واستخدام الشبكة', anchor: 'privacy' },
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
            text: 'يحوّل LocalMind هاتف Android أو iPhone إلى واجهة دردشة واحدة للنماذج الصغيرة على الجهاز، وخادم Ollama أو LM Studio الخاص بك، والنماذج السحابية التي تصل إليها بمفتاحك الخاص.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته من المتجر، وتختار أين يعمل النموذج، ثم تدردش دون إنشاء حساب؛ ولا يتلقى رسائلك سوى الخادم أو المزوّد الذي تختاره.',
          },
        ],
        items: [
          'المطوّر: Abdul Momin Sakib، مطوّر Flutter مستقل؛ يعود المستودع العام إلى أبريل 2026 ويذكر ستة مساهمين، فالمشروع حديث.',
          'المنصات: Android وiPhone، ويُثبَّت من Google Play أو App Store؛ كما يُرفق ملف APK بكل إصدار على GitHub.',
          'الحداثة: ظهر الإصدار 1.9.0 على GitHub في 14 أكتوبر 2026، ويعرض App Store الإصدار نفسه محدَّثًا في 15 أكتوبر 2026، ما يشير إلى صيانة نشطة.',
          'النماذج: نماذج GGUF وLiteRT صغيرة على الجهاز، أو أي نموذج يتيحه خادمك أو مزوّدك.',
          'سؤال مفتوح: تصف صفحات المتجرين والملف README التطبيق بصورة مختلفة؛ راجع قائمة النقاط غير المؤكدة أدناه.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحتي Google Play وApp Store وسياسة الخصوصية وموقع المطوّر ومستودع GitHub العام (README والترخيص والإصدارات وملاحظات الإصدار)، وقد جرى الاطلاع عليها في 17 أكتوبر 2026. ولم تختبر PromptQuorum التطبيق ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmind',
        title: 'ما هو LocalMind؟',
        content: [
          '**LocalMind تطبيق دردشة مبني بـ Flutter يرسل رسائلك إما إلى نموذج على الهاتف أو إلى خادم أو مزوّد تختاره.** وفق [README](https://github.com/abdulmominsakib/localmind)، فإن النماذج على الجهاز هي ملفات GGUF تعمل عبر llama.cpp ونماذج LiteRT مثل Gemma، بينما تشمل الخيارات البعيدة [Ollama](https://ollama.com/) و[LM Studio](https://lmstudio.ai/) و[OpenRouter](https://openrouter.ai/) و[Requesty](https://www.requesty.ai/).',
          'يعرض المطوّر Abdul Momin Sakib تطبيق LocalMind في [موقع أعماله](https://momin.pro) وينشره في المتجرين باسم "LocalMind: Ollama & LM Studio". وقد تحمل منتجات أخرى الاسم LocalMind؛ وتغطي هذه المراجعة فقط التطبيق الذي اسم حزمته على Android هو pro.momin.localmind.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**LocalMind تطبيق متجر: ثبّته من Google Play أو App Store، أو نزّل ملف APK من GitHub.** وتوجد الشيفرة المصدرية في المستودع نفسه الذي توجد فيه الإصدارات.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'Android',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) (مجاني؛ الحد الأدنى لإصدار Android غير معروض)',
          },
          {
            'المنصة': 'iPhone / iPad',
            'مكان الحصول عليه': '[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) (مجاني؛ يتطلب iOS 17.6 أو أحدث)',
          },
          {
            'المنصة': 'ملف APK لـ Android',
            'مكان الحصول عليه': '[GitHub Releases](https://github.com/abdulmominsakib/localmind/releases) (app-release.apk)',
          },
          {
            'المنصة': 'الموقع الإلكتروني',
            'مكان الحصول عليه': '[momin.pro](https://momin.pro) (موقع أعمال المطوّر)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[سياسة الخصوصية لتطبيق LocalMind](https://momin.pro/privacy-policy-localmind)',
          },
          {
            'المنصة': 'الشيفرة المصدرية',
            'مكان الحصول عليه': '[GitHub](https://github.com/abdulmominsakib/localmind) (MIT)',
          },
        ],
        note: 'الإصدار والحداثة كما جرى التحقق منهما في 17 أكتوبر 2026: أحدث إصدار على GitHub هو 1.9.0 (البناء 95)، نُشر في 14 أكتوبر 2026؛ ويعرض App Store الإصدار 1.9.0 محدَّثًا في 15 أكتوبر 2026؛ ويُظهر Google Play تحديثًا في 14 أكتوبر 2026 دون رقم بناء. لم يُعثر على موقع منتج مخصص: فرابط المطوّر في Google Play يقود إلى موقع الأعمال المذكور أعلاه، وليس للمستودع حقل صفحة رئيسية.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**يتبع الإعداد الترتيب الوارد في README وصفحات المتجرين؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'ثبّت LocalMind من Google Play أو App Store؛ ولا يذكر أي من المصادر حسابًا.',
          },
          {
            title: 'اختر أين يعمل النموذج',
            whyItMatters: 'نزّل نموذجًا على الهاتف للاستخدام دون اتصال، أو أدخل عنوان خادم Ollama أو LM Studio، أو مفتاح API من OpenRouter أو Requesty. وتقترح صفحة Play استخدام Wi-Fi أو نفق آمن مثل Tailscale للوصول إلى خادم منزلي.',
          },
          {
            title: 'دردش أو أرفق أو أملِ',
            whyItMatters: 'ابدأ محادثة، أو أرفق صورًا أو ملفات للنماذج التي تفهم الصور، أو أملِ رسالتك صوتيًا؛ وتعمل المحادثات المؤقتة في الذاكرة ولا تُحفظ في السجل.',
          },
          {
            title: 'اربط أدوات MCP عند الحاجة',
            whyItMatters: 'يمكن تفعيل خوادم MCP عامًا أو لكل محادثة من الإعدادات. اتركها معطّلة ليقتصر النموذج على المحادثة العادية.',
          },
        ],
      },
      modelsSupported: {
        id: 'backends',
        title: 'ما النماذج والخوادم التي يدعمها؟',
        itemHeadings: true,
        columns: ['الخلفية', 'النوع', 'ملاحظات'],
        rows: [
          {
            'الخلفية': 'على الجهاز',
            'النوع': 'دون اتصال',
            'ملاحظات': 'نماذج GGUF عبر llama.cpp (llamadart) ونماذج LiteRT (flutter_gemma)',
          },
          {
            'الخلفية': 'Ollama',
            'النوع': 'محلي أو سحابي',
            'ملاحظات': 'خادمك الخاص؛ ويذكر README دعم Ollama Cloud أيضًا',
          },
          {
            'الخلفية': 'LM Studio',
            'النوع': 'محلي',
            'ملاحظات': 'يشمل كتالوج نماذج LM Studio',
          },
          {
            'الخلفية': 'OpenRouter / Requesty',
            'النوع': 'سحابي',
            'ملاحظات': 'يتطلب مفتاح API خاصًا بك',
          },
          {
            'الخلفية': 'متوافق مع OpenAI',
            'النوع': 'محلي أو سحابي',
            'ملاحظات': 'خادم llama.cpp وvLLM وLocalAI وJan وما شابهها',
          },
        ],
        note: 'المصدر: جدول "Supported Backends" في README بتاريخ 17 أكتوبر 2026. يذكر README النماذج Gemma وQwen وDeepSeek R1 أمثلةً على النماذج على الجهاز، ويذكر نص App Store النموذجين Gemma وLlama؛ ولم يُعثر على قائمة كاملة بالنماذج.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل عنصر أدناه مأخوذ من README أو نص App Store أو ملاحظات الإصدار 1.9.0؛ ولم يُختبر أي منها بصورة مستقلة.**',
        ],
        items: [
          '**أساسيات الدردشة.** ردود متدفقة، وmarkdown مع تلوين الشيفرة، ومعادلات LaTeX، وسجلات تفكير قابلة للطي لنماذج مثل DeepSeek R1، وتعديل الرسالة وإعادة التوليد، وردود بديلة، ومطالبات محفوظة، واقتراحات متابعة.',
          '**الصوت.** إملاء صوتي وقراءة الردود بصوت مسموع مع سرعة قابلة للضبط وتشغيل في الخلفية.',
          '**المرفقات والتصدير.** صور ومستندات وملفات أخرى للنماذج التي تفهم الصور، وتصدير المحادثات إلى Markdown أو PDF.',
          '**أدوات MCP.** خوادم MCP محلية أو بعيدة مع مفاتيح تبديل عامة ولكل محادثة؛ وأضاف الإصدار 1.9.0 استدعاءات متوازية لأدوات MCP في جلسات Gemma على الجهاز.',
          '**الشخصيات والمعاملات.** مطالبات نظام مخصّصة، وضبط temperature وtop_p وحد الرموز وحجم السياق، وتبديل النموذج في منتصف المحادثة.',
          '**التوليد في الخلفية.** أُضيف في 1.9.0: تستمر الردود في الوصول عند التنقل بين المحادثات.',
          '**السجل والنسخ الاحتياطي والمزامنة.** سجل محلي قابل للبحث مع مجلدات وتثبيت، وأرشيف نسخ احتياطي، ومزامنة اختيارية مشفّرة من طرف إلى طرف مع حاوية S3 تتحكم فيها، وواجهة بـ 15 لغة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**تتفق إفادات الخصوصية عبر المصادر: تقول السياسة إن LocalMind لا يستخدم أدوات تحليل أو تتبّع وليس له خادم مركزي، ويعلن قسم "أمان البيانات" في Google Play "لا تُجمع أي بيانات" و"لا تُشارك أي بيانات مع جهات خارجية"، وتقرأ بطاقة الخصوصية في App Store "البيانات غير مجمَّعة".** وتنص [سياسة الخصوصية](https://momin.pro/privacy-policy-localmind) على أن المحادثات والإعدادات والشخصيات تبقى على الجهاز.',
          'تذهب الطلبات مباشرة إلى الخادم أو المزوّد الذي تضبطه: فحسب السياسة لا تغادر حركة الخوادم المحلية شبكتك، أما مع المزوّدين السحابيين فتذهب المفاتيح والطلبات مباشرة إلى المزوّد الذي يعالجها وفق شروطه الخاصة.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الشيفرة المصدرية عامة، فيمكن لأي شخص يبني التطبيق التحقق من هذه الإفادات، لكن PromptQuorum لم تدقّق الشيفرة ولا حركة الشبكة.',
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
            'الميزة': 'مجاني ومفتوح المصدر',
            'المعنى في الاستخدام': 'دون حساب أو اشتراك، ويمكن قراءة الشيفرة بترخيص MIT وبناؤها.',
            'القيد / التحفّظ': 'مطوّر رئيسي واحد ومستودع يعود إلى أبريل 2026؛ ولا تذكر المصادر أي التزام بالدعم.',
          },
          {
            'الميزة': 'ثلاث طرق لتشغيل النموذج',
            'المعنى في الاستخدام': 'استخدم الهاتف أو خادمًا منزليًا أو مفتاحًا سحابيًا من التطبيق نفسه، وبدّل بينها في منتصف الدردشة.',
            'القيد / التحفّظ': 'تعتمد الجودة على الجهاز على الهاتف والنموذج؛ وتحتاج الأوضاع البعيدة إلى خادم أو مفتاح يمكن الوصول إليه.',
          },
          {
            'الميزة': 'وتيرة إصدارات سريعة',
            'المعنى في الاستخدام': 'يُظهر GitHub إصدارات في 9 سبتمبر و30 سبتمبر و14 أكتوبر 2026.',
            'القيد / التحفّظ': 'يعني التغيّر السريع أن أوصاف المتجرين قد تتأخر عن README.',
          },
          {
            'الميزة': 'دعم أدوات MCP',
            'المعنى في الاستخدام': 'يمكن للنماذج استدعاء أدوات تتيحها خوادم MCP التي تربطها.',
            'القيد / التحفّظ': 'يذكر README الوصول إلى الملفات وواجهات الويب وإجراءات الصدفة أمثلةً؛ فعّل الخوادم الموثوقة فقط.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**أصحاب خادم Ollama أو LM Studio** الذين يريدون واجهة هاتف له.',
          '**من يريدون الدردشة مع نماذج صغيرة على الهاتف** دون إنشاء حساب.',
          '**الهواة الذين يريدون أدوات MCP على الهاتف** ويفضّلون تطبيقًا يمكنهم قراءة شيفرته.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء في الاستخدام الفعلي.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم السرعة ولا استهلاك البطارية ولا جودة الإجابات.',
          '**ما تحتويه نسخة كل متجر.** يقدّم وصف Google Play عميلًا يحتاج إلى Ollama أو LM Studio أو مفتاح OpenRouter ولا يذكر نماذج على الجهاز، بينما يصفها README ونص App Store؛ ولا تذكر المصادر كيف تختلف نسختا Android وiPhone.',
          '**أي قاعدة بيانات تخزّن المحادثات.** تذكر سياسة الخصوصية Hive CE ويذكر README ObjectBox.',
          '**هل تغطي السياسة الميزات الأحدث.** تاريخها 1 أبريل 2026 ولا تذكر النماذج على الجهاز ولا أدوات MCP ولا مزامنة S3.',
          '**ليس لمستخدمي سطح المكتب.** لا تقدّم روابط المتجرين ولا الإصدارات نسخة لـ Mac أو Windows أو Linux.',
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
            'المنصات': 'macOS وiOS',
            'السعر / الترخيص': 'مجاني / Apache 2.0',
            'الفرق الرئيسي': 'عميل Ollama بسيط دون محرك استدلال خاص به',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة على الجهاز مع مكتبة نماذج خاصة به',
          },
          {
            'التطبيق': '[LM Playground](/ar/power-local-llm/lm-playground-review)',
            'المنصات': 'Android',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'تطبيق llama.cpp مع أسئلة عن المستندات وإملاء صوتي',
          },
          {
            'التطبيق': '[Private Mind](/ar/power-local-llm/private-mind-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة دون اتصال على ExecuTorch مع أسئلة عن المستندات',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل توجد نسخة لسطح المكتب؟',
            a: 'لا يتوفر تنزيل لـ Mac أو Windows أو Linux. يذكر README تخطيط شاشة منقسمة للشاشات الكبيرة، لكن يمكن من الهاتف الوصول إلى Ollama أو LM Studio العاملين على حاسوب مكتبي.',
          },
          {
            q: 'كيف أصل إلى خادمي المنزلي وأنا خارج المنزل؟',
            a: 'تذكر صفحة Play الأنفاق الآمنة مثل Tailscale خيارًا؛ ولا تصف المصادر أي وصول عن بُعد مدمجًا.',
          },
          {
            q: 'هل يعمل مع نماذج الاستدلال؟',
            a: 'يصف README سجلات تفكير قابلة للطي لنماذج مثل DeepSeek R1، وتضيف ملاحظات 1.9.0 خيارًا لحذف temperature وtop_p مع نماذج الاستدلال التي ترفضهما.',
          },
          {
            q: 'ماذا يحدث لمحادثاتي إذا حذفت التطبيق؟',
            a: 'تقول السياسة إنه لا يوجد خادم مركزي، فتضيع المحادثات ما لم تكن قد نسختها احتياطيًا يدويًا؛ ويصف README تصدير أرشيف النسخ الاحتياطي واستيراده.',
          },
          {
            q: 'أين أقرأ الشيفرة المصدرية؟',
            a: 'الشيفرة الكاملة في [مستودع LocalMind](https://github.com/abdulmominsakib/localmind) على GitHub بترخيص MIT.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'LocalMind طريقة مجانية بترخيص MIT للدردشة من Android أو iPhone مع نماذج صغيرة على الجهاز أو مع بيئة Ollama أو LM Studio أو OpenRouter الخاصة بك، مع أدوات MCP والصوت والمرفقات، ويتيح مستودعه العام التحقق من إفادات الخصوصية من حيث المبدأ. في المقابل هو مشروع حديث لمطوّر واحد، ووصفه على Google Play متأخر عن README، وسياسة الخصوصية لا تذكر الميزات الأحدث. يناسب من يشغّلون خادمًا بالفعل أو يريدون تطبيقًا واحدًا لعدة خلفيات؛ ومن يريد دردشة دون اتصال فحسب يمكنه مقارنة [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)، وعلى iPhone يمكن لمن يحتاج واجهة لـ Ollama فقط أن ينظر في [Enchanted](/ar/power-local-llm/enchanted-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[LocalMind على Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) — الوصف ورابط المطوّر وعدد التنزيلات والتقييم وقسم أمان البيانات وتاريخ التحديث، بتاريخ الاطلاع 17 أكتوبر 2026.',
          '[LocalMind على App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) — الوصف والإصدار وتاريخ التحديث والمتطلبات وبطاقة الخصوصية.',
          '[LocalMind على GitHub](https://github.com/abdulmominsakib/localmind) — README وترخيص MIT والإصدارات وملاحظات الإصدار.',
          '[سياسة الخصوصية لتطبيق LocalMind](https://momin.pro/privacy-policy-localmind) — إفادات معالجة البيانات وتخزينها، سارية منذ 1 أبريل 2026.',
          '[Abdul Momin Sakib](https://momin.pro) — موقع أعمال المطوّر الذي يعرض LocalMind.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Enchanted](/ar/power-local-llm/enchanted-review) — عميل Ollama بسيط لـ iPhone وMac.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لـ iOS وAndroid.',
          '[مراجعة LM Playground](/ar/power-local-llm/lm-playground-review) — تطبيق دردشة مجاني قائم على llama.cpp لـ Android.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مفتوح المصدر دون اتصال مع أسئلة عن المستندات.',
          '[أفضل تطبيقات LLM المحلية لـ Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — الاستعراض الأوسع لـ Android.',
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — الاستعراض الأوسع لـ iPhone.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmind-review-hero-zh.webp',
    title: 'LocalMind 评测：支持设备端与自建服务器模型的免费聊天应用',
    seoTitle: 'LocalMind 评测：免费 Android/iPhone 大模型聊天应用',
    intro:
      'LocalMind 是独立开发者 [Abdul Momin Sakib](https://momin.pro) 推出的免费聊天应用，采用 MIT 许可证，支持 Android 和 iPhone。它会把你的输入发送到手机上的模型，或发送到你自己选择的服务器或服务商：Ollama、LM Studio、OpenRouter，或任何兼容 OpenAI 的端点。本评测基于 [Google Play 页面](https://play.google.com/store/apps/details?id=pro.momin.localmind)、[App Store 页面](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480)、[隐私政策](https://momin.pro/privacy-policy-localmind)以及公开的 [GitHub 代码仓库](https://github.com/abdulmominsakib/localmind)，核实于 2026 年 10 月 17 日；PromptQuorum 未对该应用进行实际测试。',
    metaDescription:
      'LocalMind 评测：免费的 MIT 许可 Android/iPhone 聊天应用，支持设备端模型、Ollama、LM Studio 和 OpenRouter。后端、隐私、局限一览。',
    twitterDescription:
      'LocalMind 评测：开源的 Android/iPhone 聊天应用，支持设备端模型或你自己的 Ollama、LM Studio 服务器，另有 MCP 工具与待证实事项。',
    audience:
      '想为本地或自建语言模型寻找免费开源聊天应用的 Android 和 iPhone 用户，需要了解它支持哪些后端、哪些数据留在设备上，以及哪些内容来源并未证实。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMind 评测',
    targetKeywords: [
      'localmind 应用评测',
      'localmind ollama android',
      'iphone ollama 客户端',
      'lm studio 手机应用',
      '开源 本地llm 应用 android ios',
      '手机 离线 运行 llm',
      'mcp 客户端 android 应用',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'DeepSeek R1', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMind（版本 1.9.0，2026 年 10 月 14 日发布）是一款免费的 MIT 许可聊天应用，既能在手机上运行小型模型，也能连接你自己掌控的服务器。** 它无需账号；可连接的对象包括 Ollama、LM Studio、任何兼容 OpenAI 的服务器，以及使用你自己 API 密钥的 OpenRouter 或 Requesty。有一点会影响你阅读应用商店页面的方式：Google Play 的描述只把它说成一个远程客户端。',
    quickAnswerTop: {
      zh: {
        question: 'LocalMind 免费、开源且注重隐私吗？',
        answer:
          '根据其页面和代码仓库，是的：应用免费，未显示广告或内购，代码采用 MIT 许可证，两家应用商店都声明不收集数据。网络流量只会发往你所配置的服务器或服务商。',
        bullets: [
          '在 [Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) 和 [App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) 免费提供；APK 和源代码在 [GitHub](https://github.com/abdulmominsakib/localmind)。',
          '后端：设备端 GGUF 与 LiteRT 模型、Ollama、LM Studio、OpenRouter、Requesty，以及兼容 OpenAI 的服务器。',
          '聊天功能：推理过程显示、语音输入与朗读、文件和照片附件、角色设定以及 MCP 工具。',
          '截至 2026 年 10 月 17 日的商店数据：Google Play 下载量 10K+，279 条评价共 4.4 星；美国 App Store 13 个评分共 4.7 星；GitHub 281 星。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'LocalMind 是什么？', anchor: 'what-is-localmind' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '如何开始使用', anchor: 'getting-started' },
      { label: '支持哪些模型和服务器？', anchor: 'backends' },
      { label: '来源已确认的功能', anchor: 'key-features' },
      { label: '隐私与网络使用', anchor: 'privacy' },
      { label: '权衡：优点与局限', anchor: 'tradeoffs' },
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
            text: 'LocalMind 把 Android 手机或 iPhone 变成统一的聊天入口，可对接设备端的小型模型、你自己的 Ollama 或 LM Studio 服务器，以及用你自己的密钥访问的云端模型。',
          },
          {
            type: 'plain-terms',
            text: '从应用商店安装，选择模型运行的位置，无需注册账号即可聊天；只有你选定的服务器或服务商会收到你的输入。',
          },
        ],
        items: [
          '开发者：Abdul Momin Sakib，独立的 Flutter 开发者；公开仓库创建于 2026 年 4 月，列出六位贡献者，项目还很年轻。',
          '平台：Android 和 iPhone，可从 Google Play 或 App Store 安装；GitHub 的每个发布版本也附带 APK。',
          '更新情况：GitHub 版本 1.9.0 发布于 2026 年 10 月 14 日，App Store 显示同一版本于 2026 年 10 月 15 日更新，表明项目可能仍在积极维护。',
          '模型：设备端的小型 GGUF 与 LiteRT 模型，或你的服务器、服务商提供的任何模型。',
          '待证实事项：应用商店页面与 README 对该应用的描述不一致；详见下方“无法验证的内容”。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 Google Play 和 App Store 页面、隐私政策、开发者网站以及公开的 GitHub 仓库（README、许可证、版本发布和发布说明），核实于 2026 年 10 月 17 日。PromptQuorum 未对该应用进行测试或基准评测。',
          },
        ],
      },
      overview: {
        id: 'what-is-localmind',
        title: 'LocalMind 是什么？',
        content: [
          '**LocalMind 是一款用 Flutter 开发的聊天应用，会把你的输入发送到手机上的模型，或发送到你自己选择的服务器或服务商。** 据 [README](https://github.com/abdulmominsakib/localmind) 介绍，设备端模型是通过 llama.cpp 运行的 GGUF 文件，以及 Gemma 等 LiteRT 模型；远程选项包括 [Ollama](https://ollama.com/)、[LM Studio](https://lmstudio.ai/)、[OpenRouter](https://openrouter.ai/) 和 [Requesty](https://www.requesty.ai/)。',
          '开发者 Abdul Momin Sakib 在他的[作品集网站](https://momin.pro)上介绍了 LocalMind，并在两家应用商店以“LocalMind: Ollama & LM Studio”之名发布。可能还有其他产品也叫 LocalMind；本评测只涉及 Android 包名为 pro.momin.localmind 的这款应用。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**LocalMind 是应用商店应用：可从 Google Play 或 App Store 安装，也可从 GitHub 下载 APK。** 源代码与发布版本位于同一个仓库。',
        ],
        columns: ['平台', '获取途径'],
        rows: [
          {
            '平台': 'Android',
            '获取途径': '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind)（免费；未显示最低 Android 版本）',
          },
          {
            '平台': 'iPhone / iPad',
            '获取途径': '[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480)（免费；需要 iOS 17.6 或更高版本）',
          },
          {
            '平台': 'Android APK',
            '获取途径': '[GitHub Releases](https://github.com/abdulmominsakib/localmind/releases)（app-release.apk）',
          },
          {
            '平台': '网站',
            '获取途径': '[momin.pro](https://momin.pro)（开发者作品集）',
          },
          {
            '平台': '隐私政策',
            '获取途径': '[LocalMind 隐私政策](https://momin.pro/privacy-policy-localmind)',
          },
          {
            '平台': '源代码',
            '获取途径': '[GitHub](https://github.com/abdulmominsakib/localmind)（MIT）',
          },
        ],
        note: '2026 年 10 月 17 日核实的版本与更新情况：GitHub 最新发布版本为 1.9.0（构建 95），发布于 2026 年 10 月 14 日；App Store 显示 1.9.0 于 2026 年 10 月 15 日更新；Google Play 显示 2026 年 10 月 14 日有更新，但未给出构建号。未找到专门的产品网站：Google Play 上的开发者链接指向上述作品集，仓库也没有设置主页字段。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用',
        content: [
          '**设置顺序依据 README 和应用商店页面的描述；PromptQuorum 并未实际执行这些步骤。**',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从 Google Play 或 App Store 安装 LocalMind；所有来源都没有提到需要账号。',
          },
          {
            title: '选择模型运行的位置',
            whyItMatters: '把模型下载到手机上离线使用，或填入你的 Ollama 或 LM Studio 服务器地址，或 OpenRouter、Requesty 的 API 密钥。Play 页面建议通过 Wi-Fi 或 Tailscale 等安全隧道连接家中的服务器。',
          },
          {
            title: '聊天、添加附件或语音输入',
            whyItMatters: '开始聊天，为支持图像的模型添加照片或文件，或用语音输入；临时聊天只在内存中运行，不会保存到历史记录。',
          },
          {
            title: '按需连接 MCP 工具',
            whyItMatters: '可在设置中全局或按聊天开启 MCP 服务器。保持关闭则模型只做普通对话。',
          },
        ],
      },
      modelsSupported: {
        id: 'backends',
        title: '支持哪些模型和服务器？',
        itemHeadings: true,
        columns: ['后端', '类型', '说明'],
        rows: [
          {
            '后端': '设备端',
            '类型': '离线',
            '说明': '通过 llama.cpp（llamadart）运行 GGUF 模型，以及 LiteRT 模型（flutter_gemma）',
          },
          {
            '后端': 'Ollama',
            '类型': '本地或云端',
            '说明': '你自己的服务器；README 称也支持 Ollama Cloud',
          },
          {
            '后端': 'LM Studio',
            '类型': '本地',
            '说明': '包含 LM Studio 模型目录',
          },
          {
            '后端': 'OpenRouter / Requesty',
            '类型': '云端',
            '说明': '需自备 API 密钥',
          },
          {
            '后端': '兼容 OpenAI',
            '类型': '本地或云端',
            '说明': 'llama.cpp 服务器、vLLM、LocalAI、Jan 等',
          },
        ],
        note: '来源：README 中 2026 年 10 月 17 日的“Supported Backends”表。README 以 Gemma、Qwen 和 DeepSeek R1 作为设备端模型的示例，App Store 文字提到 Gemma 和 Llama；未找到完整的模型列表。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项都来自 README、App Store 文字或 1.9.0 版本的发布说明；均未经我们独立测试。**',
        ],
        items: [
          '**聊天基础功能。** 流式回复、带语法高亮代码的 Markdown、LaTeX 公式、可折叠的推理日志（适用于 DeepSeek R1 等模型）、编辑并重新生成、备选回复、已保存的提示词，以及追问建议。',
          '**语音。** 语音输入和朗读回复，朗读速度可调，并支持后台播放。',
          '**附件与导出。** 为支持图像的模型添加照片、文档和其他文件，并可将聊天导出为 Markdown 或 PDF。',
          '**MCP 工具。** 本地或远程 MCP 服务器，带全局和按聊天的开关；1.9.0 版本为设备端 Gemma 会话新增了并行 MCP 工具调用。',
          '**角色设定与参数。** 自定义系统提示词，可调 temperature、top_p、token 上限和上下文大小，并可在对话中途切换模型。',
          '**后台生成。** 1.9.0 新增：切换聊天时回复仍会继续生成。',
          '**历史记录、备份与同步。** 可搜索的本地历史记录，支持文件夹和置顶；备份归档；可选的端到端加密同步，目标为你自己掌控的 S3 存储桶；界面支持 15 种语言。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**各来源的隐私说法一致：政策称 LocalMind 不使用分析或跟踪工具，也没有中央服务器；Google Play 的“数据安全”栏声明“未收集任何数据”和“未与第三方共享数据”，App Store 的隐私标签显示“未收集数据”。** [隐私政策](https://momin.pro/privacy-policy-localmind)指出，对话、设置和角色设定都保存在设备上。',
          '请求会直接发往你所配置的服务器或服务商：按政策所述，发往本地服务器的流量不会离开你的网络；使用云服务商时，密钥和请求直接发给该服务商，由其按自身条款处理。',
        ],
        callouts: [
          {
            type: 'note',
            text: '源代码是公开的，任何自行构建该应用的人都可以核实这些说法，但 PromptQuorum 并未审计代码或网络流量。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: ['优点', '实际使用中的含义', '局限 / 注意事项'],
        rows: [
          {
            '优点': '免费且开源',
            '实际使用中的含义': '无需账号或订阅，MIT 许可的代码可以阅读和自行构建。',
            '局限 / 注意事项': '主要开发者只有一位，仓库创建于 2026 年 4 月；来源未说明任何支持承诺。',
          },
          {
            '优点': '三种运行模型的方式',
            '实际使用中的含义': '在同一个应用里使用手机、家中服务器或云端密钥，并可在聊天中途切换。',
            '局限 / 注意事项': '设备端效果取决于手机和模型；远程模式需要可访问的服务器或密钥。',
          },
          {
            '优点': '发布节奏快',
            '实际使用中的含义': 'GitHub 上有 2026 年 9 月 9 日、9 月 30 日和 10 月 14 日的发布版本。',
            '局限 / 注意事项': '变化快意味着应用商店的描述可能落后于 README。',
          },
          {
            '优点': '支持 MCP 工具',
            '实际使用中的含义': '模型可以调用你所连接的 MCP 服务器提供的工具。',
            '局限 / 注意事项': 'README 以文件访问、网页 API 和 shell 操作为例；只启用你信任的服务器。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**已有 Ollama 或 LM Studio 服务器的用户**，想要一个手机端界面。',
          '**想在手机上用小型模型聊天的人**，不想注册账号。',
          '**想在手机上试用 MCP 工具的爱好者**，并且偏好可以阅读源代码的应用。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法验证的内容',
        items: [
          '**实际表现。** PromptQuorum 没有运行该应用，因此未评估速度、耗电和回答质量。',
          '**各应用商店版本包含什么。** Google Play 的描述把它说成需要 Ollama、LM Studio 或 OpenRouter 密钥的客户端，没有提到设备端模型，而 README 和 App Store 文字则有描述；来源没有说明 Android 版与 iPhone 版有何不同。',
          '**聊天记录用哪种数据库存储。** 隐私政策写的是 Hive CE，README 写的是 ObjectBox。',
          '**政策是否涵盖较新的功能。** 政策日期为 2026 年 4 月 1 日，未提及设备端模型、MCP 工具或 S3 同步。',
          '**不适合桌面端用户。** 应用商店链接和发布版本中都没有 Mac、Windows 或 Linux 版本。',
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
            '平台': 'macOS、iOS',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '极简 Ollama 客户端，自身不带推理引擎',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '设备端聊天客户端，自带模型库',
          },
          {
            '应用': '[LM Playground](/zh/power-local-llm/lm-playground-review)',
            '平台': 'Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '基于 llama.cpp，支持文档问答和语音输入',
          },
          {
            '应用': '[Private Mind](/zh/power-local-llm/private-mind-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '基于 ExecuTorch 的离线聊天，支持文档问答',
          },
        ],
        note: '竞品信息变化频繁；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '有桌面版吗？',
            a: '没有提供 Mac、Windows 或 Linux 的下载。README 提到了面向大屏的分屏布局，但在桌面电脑上运行的 Ollama 或 LM Studio 仍可从手机访问。',
          },
          {
            q: '外出时如何连接家里的服务器？',
            a: 'Play 页面提到可以使用 Tailscale 等安全隧道；来源没有描述任何内置的远程访问功能。',
          },
          {
            q: '支持推理模型吗？',
            a: 'README 介绍了适用于 DeepSeek R1 等模型的可折叠推理日志，1.9.0 的说明还新增了一个选项，可对拒绝 temperature 和 top_p 的推理模型省略这两个参数。',
          },
          {
            q: '删除应用后聊天记录会怎样？',
            a: '按政策所述没有中央服务器，因此除非你手动备份过，否则对话会丢失；README 介绍了备份归档的导出和导入。',
          },
          {
            q: '在哪里可以阅读源代码？',
            a: '完整代码位于 GitHub 的 [LocalMind 仓库](https://github.com/abdulmominsakib/localmind)，采用 MIT 许可证。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'LocalMind 是一个免费、MIT 许可的选择，可在 Android 或 iPhone 上与设备端小型模型聊天，或接入你自己的 Ollama、LM Studio 或 OpenRouter 环境，并附带 MCP 工具、语音和附件功能；公开的代码仓库也使其隐私说法原则上可以核查。另一方面，它是只有一位开发者的新项目，Google Play 的描述落后于 README，隐私政策也没有提到较新的功能。它适合已经运行服务器、或想用一个应用对接多个后端的人；只想要离线聊天的人可以对比 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)，在 iPhone 上只需要 Ollama 界面的人可以看看 [Enchanted](/zh/power-local-llm/enchanted-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Google Play 上的 LocalMind](https://play.google.com/store/apps/details?id=pro.momin.localmind) — 描述、开发者链接、下载量、评分、数据安全栏目和更新日期，核实于 2026 年 10 月 17 日。',
          '[App Store 上的 LocalMind](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) — 描述、版本、更新日期、系统要求和隐私标签。',
          '[GitHub 上的 LocalMind](https://github.com/abdulmominsakib/localmind) — README、MIT 许可证、版本发布和发布说明。',
          '[LocalMind 隐私政策](https://momin.pro/privacy-policy-localmind) — 数据处理与存储说明，2026 年 4 月 1 日起生效。',
          '[Abdul Momin Sakib](https://momin.pro) — 介绍 LocalMind 的开发者作品集。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Enchanted 评测](/zh/power-local-llm/enchanted-review) — 适用于 iPhone 和 Mac 的极简 Ollama 客户端。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 面向 iOS 和 Android 的免费开源设备端聊天客户端。',
          '[LM Playground 评测](/zh/power-local-llm/lm-playground-review) — 面向 Android 的免费 llama.cpp 聊天应用。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 支持文档问答的开源离线聊天应用。',
          '[2026 年 Android 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 盘点。',
          '[2026 年 iPhone 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更全面的 iPhone 盘点。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-17',
    dateModified: '2026-10-17',
    next_refresh_due: '2027-04-17',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/localmind-review-hero-ko.webp',
    title: 'LocalMind 리뷰: 기기 내 모델과 자체 서버 모델용 무료 채팅 앱',
    seoTitle: 'LocalMind 리뷰: 무료 Android·iPhone LLM 채팅',
    intro:
      'LocalMind는 독립 개발자 [Abdul Momin Sakib](https://momin.pro)이 만든 Android·iPhone용 무료 MIT 라이선스 채팅 앱입니다. 입력한 내용을 휴대폰 안의 모델이나 사용자가 고른 서버 또는 제공업체(Ollama, LM Studio, OpenRouter, OpenAI 호환 엔드포인트)로 보냅니다. 이 리뷰는 2026년 10월 17일에 확인한 [Google Play 정보](https://play.google.com/store/apps/details?id=pro.momin.localmind), [App Store 정보](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480), [개인정보 처리방침](https://momin.pro/privacy-policy-localmind), 공개 [GitHub 저장소](https://github.com/abdulmominsakib/localmind)를 바탕으로 하며, PromptQuorum은 앱을 직접 사용해 보지 않았습니다.',
    metaDescription:
      'LocalMind 리뷰: 기기 내 모델, Ollama, LM Studio, OpenRouter를 지원하는 무료 MIT 라이선스 Android·iPhone 채팅 앱. 백엔드, 개인정보, 한계.',
    twitterDescription:
      'LocalMind 리뷰: 기기 내 모델이나 직접 운영하는 Ollama·LM Studio 서버와 쓰는 오픈 소스 Android·iPhone 채팅 앱. MCP 도구와 미확인 사항도 다룹니다.',
    audience:
      '로컬 또는 자체 호스팅 언어 모델용 무료 오픈 소스 채팅 앱을 찾는 Android·iPhone 사용자로, 지원하는 백엔드, 기기에 남는 데이터, 출처로 확인되지 않는 내용을 알고 싶은 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'LocalMind 리뷰',
    targetKeywords: [
      'localmind 앱 리뷰',
      'localmind ollama android',
      'iphone ollama 클라이언트',
      'lm studio 모바일 앱',
      '오픈 소스 로컬 llm 앱 android ios',
      '휴대폰 오프라인 llm 실행',
      'mcp 클라이언트 android 앱',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'DeepSeek R1', 'Llama'],
    current_hardware_mentioned: ['Android', 'iPhone', 'iPad'],
    leadAnswerBlock:
      '**LocalMind(버전 1.9.0, 2026년 10월 14일 출시)는 휴대폰에서 작은 모델을 실행할 수 있고 사용자가 직접 관리하는 서버에도 연결할 수 있는 무료 MIT 라이선스 채팅 앱입니다.** 계정이 필요 없으며, 연결 대상은 Ollama, LM Studio, OpenAI 호환 서버, 그리고 본인 API 키를 쓰는 OpenRouter 또는 Requesty입니다. 스토어 페이지를 읽을 때 염두에 둘 점이 하나 있습니다. Google Play 설명은 이 앱을 원격 클라이언트로만 소개합니다.',
    quickAnswerTop: {
      ko: {
        question: 'LocalMind는 무료이고 오픈 소스이며 개인정보가 보호됩니까?',
        answer:
          '게시 정보와 저장소에 따르면 그렇습니다. 앱은 무료이고 광고나 구매 항목이 표시되지 않으며, 코드는 MIT 라이선스이고, 두 스토어 모두 데이터를 수집하지 않는다고 표시합니다. 네트워크 트래픽은 사용자가 설정한 서버 또는 제공업체로만 갑니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind)와 [App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480)에서 무료. APK와 소스 코드는 [GitHub](https://github.com/abdulmominsakib/localmind)에 있습니다.',
          '백엔드: 기기 내 GGUF·LiteRT 모델, Ollama, LM Studio, OpenRouter, Requesty, OpenAI 호환 서버.',
          '채팅 부가 기능: 추론 과정 표시, 음성 입력과 읽어 주기, 파일·사진 첨부, 페르소나, MCP 도구.',
          '2026년 10월 17일 기준 스토어 지표: Google Play 다운로드 10K+, 리뷰 279건에서 4.4점, 미국 App Store 평점 13건에서 4.7점, GitHub 별 281개.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'LocalMind란 무엇인가?', anchor: 'what-is-localmind' },
      { label: '어디서 받나요?', anchor: 'get-it' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '어떤 모델과 서버를 쓸 수 있나요?', anchor: 'backends' },
      { label: '출처로 확인되는 기능', anchor: 'key-features' },
      { label: '개인정보와 네트워크 사용', anchor: 'privacy' },
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
            text: 'LocalMind는 Android 휴대폰이나 iPhone을 기기 내 소형 모델, 직접 운영하는 Ollama·LM Studio 서버, 본인 키로 쓰는 클라우드 모델을 한 화면에서 쓰는 채팅 앱으로 바꿔 줍니다.',
          },
          {
            type: 'plain-terms',
            text: '스토어에서 설치하고 모델을 실행할 위치를 고르면 계정 없이 채팅할 수 있으며, 입력 내용은 선택한 서버 또는 제공업체만 받습니다.',
          },
        ],
        items: [
          '개발자: 독립 Flutter 개발자 Abdul Momin Sakib. 공개 저장소는 2026년 4월에 만들어졌고 기여자 여섯 명이 표기되어 있어, 아직 젊은 프로젝트입니다.',
          '플랫폼: Android와 iPhone. Google Play 또는 App Store에서 설치하며, GitHub의 각 릴리스에도 APK가 첨부됩니다.',
          '최신성: GitHub 릴리스 1.9.0이 2026년 10월 14일에 나왔고 App Store도 같은 버전을 2026년 10월 15일 업데이트로 표시해, 활발히 관리되고 있는 것으로 보입니다.',
          '모델: 기기 내 소형 GGUF·LiteRT 모델, 또는 서버나 제공업체가 노출하는 모든 모델.',
          '미해결 사항: 스토어 페이지와 README가 앱을 서로 다르게 설명합니다. 아래 확인하지 못한 사항을 참고하세요.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 17일에 확인한 Google Play·App Store 정보, 개인정보 처리방침, 개발자 사이트, 공개 GitHub 저장소(README, 라이선스, 릴리스, 릴리스 노트)를 바탕으로 합니다. PromptQuorum은 앱을 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-localmind',
        title: 'LocalMind란 무엇인가?',
        content: [
          '**LocalMind는 Flutter로 만든 채팅 앱으로, 입력 내용을 휴대폰 안의 모델이나 사용자가 고른 서버 또는 제공업체로 보냅니다.** [README](https://github.com/abdulmominsakib/localmind)에 따르면 기기 내 모델은 llama.cpp로 실행하는 GGUF 파일과 Gemma 같은 LiteRT 모델이며, 원격 옵션으로는 [Ollama](https://ollama.com/), [LM Studio](https://lmstudio.ai/), [OpenRouter](https://openrouter.ai/), [Requesty](https://www.requesty.ai/)가 있습니다.',
          '개발자 Abdul Momin Sakib은 자신의 [포트폴리오 사이트](https://momin.pro)에 LocalMind를 소개하고 두 스토어에 "LocalMind: Ollama & LM Studio"라는 이름으로 게시했습니다. LocalMind라는 이름을 쓰는 다른 제품이 있을 수 있으며, 이 리뷰는 Android 패키지 이름이 pro.momin.localmind인 앱만 다룹니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**LocalMind는 스토어 앱입니다. Google Play나 App Store에서 설치하거나 GitHub에서 APK를 받을 수 있습니다.** 소스 코드는 릴리스와 같은 저장소에 있습니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=pro.momin.localmind) (무료, 최소 Android 버전은 표시되지 않음)',
          },
          {
            '플랫폼': 'iPhone / iPad',
            '받는 곳': '[App Store](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) (무료, iOS 17.6 이상)',
          },
          {
            '플랫폼': 'Android APK',
            '받는 곳': '[GitHub Releases](https://github.com/abdulmominsakib/localmind/releases) (app-release.apk)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[momin.pro](https://momin.pro) (개발자 포트폴리오)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[LocalMind 개인정보 처리방침](https://momin.pro/privacy-policy-localmind)',
          },
          {
            '플랫폼': '소스 코드',
            '받는 곳': '[GitHub](https://github.com/abdulmominsakib/localmind) (MIT)',
          },
        ],
        note: '2026년 10월 17일에 확인한 버전과 최신성: GitHub 최신 릴리스는 1.9.0(빌드 95)로 2026년 10월 14일에 게시되었고, App Store는 1.9.0을 2026년 10월 15일 업데이트로 표시하며, Google Play는 빌드 번호 없이 2026년 10월 14일 업데이트를 표시합니다. 별도의 제품 웹사이트는 찾지 못했습니다. Google Play의 개발자 링크는 위 포트폴리오로 연결되고, 저장소에도 홈페이지 항목이 없습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**설정은 README와 스토어 정보에 설명된 순서를 따릅니다. PromptQuorum은 이 단계를 직접 실행하지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: 'Google Play 또는 App Store에서 LocalMind를 설치합니다. 어느 출처에도 계정 관련 언급은 없습니다.',
          },
          {
            title: '모델을 실행할 위치 선택',
            whyItMatters: '오프라인으로 쓰려면 모델을 휴대폰에 내려받고, 그렇지 않으면 Ollama나 LM Studio 서버 주소 또는 OpenRouter·Requesty API 키를 입력합니다. Play 정보에는 집 서버에 접속할 때 Wi-Fi나 Tailscale 같은 보안 터널을 쓸 수 있다고 나와 있습니다.',
          },
          {
            title: '채팅, 첨부, 음성 입력',
            whyItMatters: '채팅을 시작하고, 이미지를 이해하는 모델에는 사진이나 파일을 첨부하거나 음성으로 입력합니다. 임시 채팅은 메모리에서만 실행되며 기록에 저장되지 않습니다.',
          },
          {
            title: '필요하면 MCP 도구 연결',
            whyItMatters: 'MCP 서버는 설정에서 전체 또는 채팅별로 켤 수 있습니다. 끄고 두면 모델은 일반 대화만 합니다.',
          },
        ],
      },
      modelsSupported: {
        id: 'backends',
        title: '어떤 모델과 서버를 쓸 수 있나요?',
        itemHeadings: true,
        columns: ['백엔드', '유형', '비고'],
        rows: [
          {
            '백엔드': '기기 내',
            '유형': '오프라인',
            '비고': 'llama.cpp(llamadart)로 실행하는 GGUF 모델과 LiteRT 모델(flutter_gemma)',
          },
          {
            '백엔드': 'Ollama',
            '유형': '로컬 또는 클라우드',
            '비고': '직접 운영하는 서버. README는 Ollama Cloud도 지원한다고 명시',
          },
          {
            '백엔드': 'LM Studio',
            '유형': '로컬',
            '비고': 'LM Studio 모델 카탈로그 포함',
          },
          {
            '백엔드': 'OpenRouter / Requesty',
            '유형': '클라우드',
            '비고': '본인 API 키 필요',
          },
          {
            '백엔드': 'OpenAI 호환',
            '유형': '로컬 또는 클라우드',
            '비고': 'llama.cpp 서버, vLLM, LocalAI, Jan 등',
          },
        ],
        note: '출처: 2026년 10월 17일 기준 README의 "Supported Backends" 표. README는 기기 내 모델 예시로 Gemma, Qwen, DeepSeek R1을 들고, App Store 설명은 Gemma와 Llama를 언급합니다. 전체 모델 목록은 찾지 못했습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 README, App Store 설명 또는 1.9.0 릴리스 노트에서 가져왔으며, 직접 테스트한 것은 없습니다.**',
        ],
        items: [
          '**채팅 기본 기능.** 스트리밍 응답, 구문 강조 코드가 있는 마크다운, LaTeX 수식, DeepSeek R1 같은 모델용 접이식 추론 로그, 수정 후 다시 생성, 대체 응답, 저장한 프롬프트, 후속 질문 제안.',
          '**음성.** 음성 입력과 응답 읽어 주기(속도 조절 및 백그라운드 재생 지원).',
          '**첨부와 내보내기.** 이미지를 이해하는 모델용 사진·문서·기타 파일 첨부, 채팅을 마크다운이나 PDF로 내보내기.',
          '**MCP 도구.** 로컬 또는 원격 MCP 서버를 전체·채팅별 스위치로 관리. 1.9.0에서 기기 내 Gemma 세션의 병렬 MCP 도구 호출이 추가되었습니다.',
          '**페르소나와 파라미터.** 사용자 지정 시스템 프롬프트, temperature·top_p·토큰 한도·컨텍스트 크기 조절, 대화 도중 모델 교체.',
          '**백그라운드 생성.** 1.9.0에서 추가: 채팅을 전환해도 응답이 계속 생성됩니다.',
          '**기록, 백업, 동기화.** 폴더와 고정을 지원하는 검색 가능한 로컬 기록, 백업 아카이브, 직접 관리하는 S3 버킷으로의 선택적 종단간 암호화 동기화, 15개 언어 인터페이스.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**개인정보 관련 표시는 출처 간에 일치합니다. 처리방침은 LocalMind가 분석·추적 도구를 쓰지 않고 중앙 서버도 없다고 밝히고, Google Play의 "데이터 보안" 항목은 "수집되는 데이터 없음"과 "제3자와 공유되는 데이터 없음"을, App Store 개인정보 라벨은 "데이터 수집 안 함"을 표시합니다.** [개인정보 처리방침](https://momin.pro/privacy-policy-localmind)은 대화, 설정, 페르소나가 기기에만 저장된다고 밝힙니다.',
          '요청은 사용자가 설정한 서버나 제공업체로 직접 갑니다. 처리방침에 따르면 로컬 서버로 가는 트래픽은 사용자의 네트워크를 벗어나지 않으며, 클라우드 제공업체의 경우 키와 요청이 제공업체로 바로 전달되어 해당 업체의 약관에 따라 처리됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '소스 코드가 공개되어 있으므로 앱을 직접 빌드하면 누구나 이러한 표시를 확인할 수 있습니다. 다만 PromptQuorum은 코드나 네트워크 트래픽을 감사하지 않았습니다.',
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
            '이점': '무료 오픈 소스',
            '실제 사용에서의 의미': '계정이나 구독이 필요 없고, MIT 라이선스 코드를 읽고 직접 빌드할 수 있습니다.',
            '한계 / 유의사항': '주 개발자가 한 명이고 저장소는 2026년 4월에 만들어졌습니다. 출처에는 지원 약속이 명시되어 있지 않습니다.',
          },
          {
            '이점': '모델을 실행하는 세 가지 방법',
            '실제 사용에서의 의미': '같은 앱에서 휴대폰, 집 서버, 클라우드 키를 쓰고 채팅 도중에 바꿀 수 있습니다.',
            '한계 / 유의사항': '기기 내 품질은 휴대폰과 모델에 달려 있고, 원격 모드는 접속 가능한 서버나 키가 필요합니다.',
          },
          {
            '이점': '빠른 릴리스 주기',
            '실제 사용에서의 의미': 'GitHub에는 2026년 9월 9일, 9월 30일, 10월 14일 릴리스가 있습니다.',
            '한계 / 유의사항': '변화가 빨라 스토어 설명이 README보다 늦을 수 있습니다.',
          },
          {
            '이점': 'MCP 도구 지원',
            '실제 사용에서의 의미': '모델이 연결한 MCP 서버가 제공하는 도구를 호출할 수 있습니다.',
            '한계 / 유의사항': 'README는 예로 파일 접근, 웹 API, 셸 작업을 듭니다. 신뢰하는 서버만 켜세요.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**Ollama나 LM Studio 서버를 운영하는 분**으로, 휴대폰용 화면이 필요한 경우.',
          '**계정 없이 휴대폰에서 소형 모델과 채팅하고 싶은 분.**',
          '**휴대폰에서 MCP 도구를 써 보고 싶은 분**으로, 소스를 읽을 수 있는 앱을 선호하는 경우.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 성능.** PromptQuorum이 앱을 실행하지 않았으므로 속도, 배터리 사용량, 답변 품질은 평가하지 않았습니다.',
          '**스토어별 빌드의 내용.** Google Play 설명은 Ollama, LM Studio 또는 OpenRouter 키가 필요한 클라이언트로 소개하며 기기 내 모델은 언급하지 않지만, README와 App Store 설명은 기기 내 모델을 설명합니다. Android와 iPhone 빌드가 어떻게 다른지는 출처에 나와 있지 않습니다.',
          '**채팅을 저장하는 데이터베이스.** 개인정보 처리방침은 Hive CE를, README는 ObjectBox를 언급합니다.',
          '**처리방침이 최신 기능을 포함하는지.** 처리방침의 날짜는 2026년 4월 1일이며 기기 내 모델, MCP 도구, S3 동기화는 언급하지 않습니다.',
          '**데스크톱 사용자에게는 맞지 않습니다.** 스토어 링크와 릴리스에는 Mac, Windows, Linux용 빌드가 없습니다.',
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
            '플랫폼': 'macOS, iOS',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': '자체 추론 엔진이 없는 최소한의 Ollama 클라이언트',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '자체 모델 라이브러리를 갖춘 기기 내 채팅 클라이언트',
          },
          {
            '앱': '[LM Playground](/ko/power-local-llm/lm-playground-review)',
            '플랫폼': 'Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '문서 질의응답과 음성 입력을 갖춘 llama.cpp 앱',
          },
          {
            '앱': '[Private Mind](/ko/power-local-llm/private-mind-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '문서 질의응답을 갖춘 ExecuTorch 기반 오프라인 채팅',
          },
        ],
        note: '경쟁 앱 정보는 자주 바뀌므로 각 앱의 최신 가격, 라이선스, 플랫폼은 해당 앱의 게시 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '데스크톱 버전이 있나요?',
            a: 'Mac, Windows, Linux용 다운로드는 제공되지 않습니다. README는 대화면용 분할 보기를 언급하지만, 데스크톱에서 실행 중인 Ollama나 LM Studio에는 휴대폰에서 접속할 수 있습니다.',
          },
          {
            q: '밖에서 집 서버에 접속하려면 어떻게 하나요?',
            a: 'Play 정보는 Tailscale 같은 보안 터널을 선택지로 듭니다. 앱에 내장된 원격 접속 기능은 출처에 설명되어 있지 않습니다.',
          },
          {
            q: '추론 모델에서도 동작하나요?',
            a: 'README는 DeepSeek R1 같은 모델용 접이식 추론 로그를 설명하며, 1.9.0 노트에는 temperature와 top_p를 거부하는 추론 모델에서 이를 생략하는 옵션이 추가되었다고 나와 있습니다.',
          },
          {
            q: '앱을 삭제하면 채팅은 어떻게 되나요?',
            a: '처리방침에 따르면 중앙 서버가 없으므로 수동으로 백업하지 않았다면 대화는 사라집니다. README는 백업 아카이브 내보내기와 가져오기를 설명합니다.',
          },
          {
            q: '소스 코드는 어디서 읽을 수 있나요?',
            a: '전체 코드는 GitHub의 [LocalMind 저장소](https://github.com/abdulmominsakib/localmind)에 MIT 라이선스로 공개되어 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'LocalMind는 Android나 iPhone에서 기기 내 소형 모델 또는 본인의 Ollama, LM Studio, OpenRouter 환경과 채팅할 수 있는 무료 MIT 라이선스 앱이며, MCP 도구, 음성, 첨부 기능을 더했습니다. 공개 저장소가 있어 개인정보 관련 표시를 원칙적으로 확인할 수 있습니다. 반면 개발자 한 명의 젊은 프로젝트이고, Google Play 설명이 README보다 늦으며, 개인정보 처리방침은 최신 기능을 언급하지 않습니다. 이미 서버를 운영하거나 여러 백엔드를 한 앱에서 쓰고 싶은 분에게 맞으며, 오프라인 채팅만 원한다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를, iPhone에서 Ollama용 화면만 필요하다면 [Enchanted](/ko/power-local-llm/enchanted-review)를 비교해 보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 LocalMind](https://play.google.com/store/apps/details?id=pro.momin.localmind) — 설명, 개발자 링크, 다운로드 수, 평점, 데이터 보안 항목, 업데이트 날짜. 2026년 10월 17일 확인.',
          '[App Store의 LocalMind](https://apps.apple.com/us/app/localmind-ollama-lm-studio/id6777025480) — 설명, 버전, 업데이트 날짜, 요구 사항, 개인정보 라벨.',
          '[GitHub의 LocalMind](https://github.com/abdulmominsakib/localmind) — README, MIT 라이선스, 릴리스, 릴리스 노트.',
          '[LocalMind 개인정보 처리방침](https://momin.pro/privacy-policy-localmind) — 데이터 처리와 저장에 관한 설명. 2026년 4월 1일부터 시행.',
          '[Abdul Momin Sakib](https://momin.pro) — LocalMind를 소개하는 개발자 포트폴리오.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Enchanted 리뷰](/ko/power-local-llm/enchanted-review) — iPhone과 Mac용 최소한의 Ollama 클라이언트.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈 소스 기기 내 채팅 클라이언트.',
          '[LM Playground 리뷰](/ko/power-local-llm/lm-playground-review) — Android용 무료 llama.cpp 채팅 앱.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — 문서 질의응답을 갖춘 오픈 소스 오프라인 채팅 앱.',
          '[2026년 Android용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android용 더 폭넓은 정리.',
          '[2026년 iPhone용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone용 더 폭넓은 정리.',
        ],
      },
    },
  },
}
