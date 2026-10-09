// FriedrichAI Review: Offline Windows AI Assistant Sold on Steam
// Slug: friedrichai-review
// Companion to: jan-review, gpt4all-review, lm-studio-review, hilbertraum-review
// Sources: the Steam store page, the Steam news feed and the Steam DLC pages for FriedrichAI, checked 2026-10-09,
// plus a maker comment from Randolph Smith (2026-10-09) — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/friedrichai-review-hero-en.webp',
    title: 'FriedrichAI Review: Offline Windows AI Assistant Sold on Steam',
    seoTitle: 'FriedrichAI Review: Offline Windows AI on Steam',
    intro:
      'FriedrichAI is a Windows desktop app by the solo developer Randolph Smith that runs a language model on your own PC and adds persistent local memory, saved chats, a project board, local text-to-speech and speech-to-text, and optional image, video, and audio generation packs. It is sold on [Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) rather than through GitHub or an app store, and version 1.0 left Early Access on 18 September 2026. The source code is not published. This review is based on the Steam store page, its news feed and the DLC pages, checked on 9 October 2026, plus a comment from the developer; PromptQuorum has not tested the app hands-on.',
    metaDescription:
      'FriedrichAI review: a paid offline AI assistant for Windows sold on Steam, with local memory, image/video/audio packs, no account. Hardware, privacy, limits.',
    twitterDescription:
      'FriedrichAI review: an offline Windows AI assistant you buy once on Steam, with local memory and optional image, video, and audio packs. Closed source, Windows only.',
    audience:
      'Windows users who want a bought-once, offline AI assistant without a Python or command-line setup, and who need to know what the sources confirm and what could not be verified.',
    readTime: '9 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'FriedrichAI review',
    targetKeywords: [
      'friedrichai review',
      'friedrichai offline ai',
      'friedrichai steam',
      'offline ai assistant windows steam',
      'local ai app no subscription windows',
      'local ai with memory windows',
      'friedrichai vs lm studio',
    ],
    current_models_mentioned: ['Qwen', 'GGUF models'],
    current_hardware_mentioned: ['Windows 10/11', 'NVIDIA RTX', 'AMD Radeon', 'Ryzen 7 5700X'],
    leadAnswerBlock:
      '**FriedrichAI (version 1.0 as of 9 October 2026) is a Windows-only AI assistant that you buy once on Steam and that runs a local model with no account, no subscription, and no required API key.** It targets people who would rather install an app than assemble a local-AI stack, and it adds optional image, video, and audio packs. The code is closed, the review base on Steam is still very small, and the best-supported media path is NVIDIA.',
    quickAnswerTop: {
      en: {
        question: 'Does FriedrichAI work without an internet connection?',
        answer:
          'Per the Steam page and the developer, yes: the base assistant, memory, saved chats, and text-to-speech run locally after installation. Web search is optional and off unless you configure it, and the optional media packs are separate downloads.',
        bullets: [
          'Sold on Steam as a one-time purchase; a free demo and three free media packs exist as separate Steam entries.',
          'Windows 10/11 only, with a CPU fallback for chat and an NVIDIA GPU recommended.',
          'Version 1.0 was announced on 18 September 2026 after Early Access that began on 30 April 2026.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is FriedrichAI?', anchor: 'what-is-friedrichai' },
      { label: 'Why the Maker Chose Steam', anchor: 'why-steam' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Hardware Requirements', anchor: 'hardware-requirements' },
      { label: 'Privacy and Online Features', anchor: 'privacy' },
      { label: 'From the Maker', anchor: 'from-the-maker' },
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
            text: 'FriedrichAI is a closed-source Windows AI assistant, sold on Steam by a solo developer, that runs a local model with persistent memory and optional image, video, and audio packs and needs no account.',
          },
          {
            type: 'plain-terms',
            text: 'You buy it on Steam like a game, install it, and talk to it; the chat, memory, and voice features keep working with the network switched off, while heavier media generation needs a strong graphics card.',
          },
        ],
        items: [
          'Developer: Randolph Smith, listed as both developer and publisher on Steam; a self-described software-QA professional rather than an AI researcher.',
          'Price and license: $9.99 USD one-time on Steam, no subscription; proprietary, with no public source repository found.',
          'Scope: local chat, memory, saved-chat search, a Todo/Doing/Blocked/Done project board, Model Manager for GGUF models, and optional web search.',
          'Signals as checked on 9 October 2026: 13 of 14 Steam user reviews positive, full release on 18 September 2026, latest patch on 6 October 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Steam store page, its news feed, and the DLC pages, checked on 9 October 2026, plus a comment from the developer. PromptQuorum has not tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-friedrichai',
        title: 'What Is FriedrichAI?',
        content: [
          '**FriedrichAI is an offline-first AI workspace for Windows that packages a local model runner, memory, and project tools into one installable app.** According to its [Steam page](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), the core assistant needs no cloud account or API key, and chats, memory, and project data stay on the PC.',
          'The name honors the philosopher Friedrich Nietzsche, not Frederick the Great, according to the developer. Randolph Smith describes the app as aimed at people who should not need to know what a Python environment or a CUDA wheel is, in the maker comment further below.',
        ],
      },
      whySteam: {
        id: 'why-steam',
        title: 'Why the Maker Chose Steam',
        content: [
          '**Randolph Smith picked Steam on purpose: he wanted local AI to feel like software you buy and own, and Steam already gives Windows users the payment, update, and refund system they trust.** FriedrichAI is an unusual case of serious local-AI software sold there instead of on GitHub or in an app store. His reasons, summarized from the maker comment below:',
        ],
        items: [
          '**An underused audience.** Millions of Windows users are already on Steam with a distribution and update system they trust, yet few developers treat it as a home for serious local-AI software.',
          '**Buy and own, not rent.** He wanted a one-time purchase that stays in your library, rather than another AI service rented every month. Steam supplies payments, automatic updates, refunds, and user reviews.',
          '**Why not GitHub.** GitHub suits developers, he says, but FriedrichAI targets people who should not need to know what a Python environment, a CUDA wheel, or a command line is.',
          '**No dependency on his servers.** The software should keep working even if the developer\'s servers go away.',
        ],
        callouts: [
          {
            type: 'insight',
            text: 'The maker names the cost himself: Steam was designed for games, so he had to work around unusual distribution and packaging problems, and local AI adds hardware-support challenges that a normal desktop app does not have. What Steam provides is visible on the listing: a free demo as a separate entry, free add-on packs as DLC, and public user reviews.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**FriedrichAI is distributed through Steam for Windows 10/11 (64-bit) at $9.99 USD; the base app has a free demo, and the media packs are free add-ons.**',
        ],
        columns: ['Item', 'Where to get it'],
        rows: [
          {
            'Item': 'Full version',
            'Where to get it': '[Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), $9.99 USD',
          },
          {
            'Item': 'Free demo',
            'Where to get it': '[Steam demo](https://store.steampowered.com/app/4861210/)',
          },
          {
            'Item': 'Media packs',
            'Where to get it': 'Free Steam add-ons: image, video, audio',
          },
          {
            'Item': 'Website',
            'Where to get it': '[Steam store page](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) (no separate site found)',
          },
          {
            'Item': 'Other listing',
            'Where to get it': '[itch.io page](https://rdub77.itch.io/friedrichai)',
          },
          {
            'Item': 'Source code',
            'Where to get it': 'Not published',
          },
        ],
        note: 'This page is companion material to the app\'s entry in the [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Version as verified on 9 October 2026: 1.0, from the Steam news post "FriedrichAI 1.0 Is Here". No dedicated product website or privacy-policy page was found; the Steam page is the official listing.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The Steam page recommends testing in stages; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Try the free demo first',
            whyItMatters: 'The demo is a frozen compatibility snapshot, not a trial, and the developer asks buyers not to purchase the full version if it does not run well.',
          },
          {
            title: 'Install the base assistant and confirm chat works',
            whyItMatters: 'The Steam page advises confirming local chat before adding media packs or changing models.',
          },
          {
            title: 'Add optional packs only if your hardware allows',
            whyItMatters: 'Image, video, and audio generation need large extra downloads and far more GPU power than chat.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Steam page, news posts, or DLC listings; none has been independently tested.**',
        ],
        items: [
          '**Chat and memory.** Local chat with persistent memory, saved conversations that can be reopened and searched, and a plain-conversation interface that no longer requires slash commands.',
          '**Project tools.** A Project Board (Todo, Doing, Blocked, Done), Project Chronicle for preserving project context, and import of local text and Markdown files.',
          '**Models.** A bundled default model, plus a Model Manager that scans for and switches between user-supplied GGUF models. The Steam page says the app uses Qwen models under the Apache License 2.0.',
          '**Voice.** Local text-to-speech that can be disabled, and local speech-to-text through a microphone button, added in an August 2026 update.',
          '**Optional media.** Image generation (with variations), text-to-video, and audio and music generation as separate free packs.',
          '**Interface.** Eight interface languages: English, Ukrainian, German, French, Spanish, Brazilian Portuguese, Korean, and Japanese.',
        ],
        note: 'The Steam page lists full audio support only for English, so speech features in the other seven languages should be checked in the demo.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Hardware Requirements',
        content: [
          '**Steam lists Windows 10/11, 16 GB of RAM and 20 GB of storage as the minimum, with an NVIDIA GPU recommended and a CPU fallback for chat.** The recommended setup is a Ryzen 7 5700X-class processor, 32 GB of RAM, and an NVIDIA RTX card with 10 GB or more of VRAM.',
          'Media generation is much heavier than chat: the page recommends 12 GB or more of VRAM for video and 16 GB or more for longer clips, and calls video, image-to-video, and morph workflows experimental. NVIDIA is the best-supported media path; AMD support is a separate Radeon-compatible build in beta, and a September 2026 patch added older Intel processors. The page also warns Norton users to update their antivirus first, because older definitions may flag parts of the app.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Online Features',
        content: [
          '**The Steam page states that chats, memory, saved conversations, and project data stay on the user\'s machine, and that no API key is required for the core assistant.** Speech generation and speech recognition are described as running locally.',
          'Optional web search is the exception: it is off unless configured and may need the user\'s own provider account or API key. Because the source is not published, none of this can be checked against code, and these are the developer\'s declarations, not audit results.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not inspected the app\'s network traffic. Anyone handling confidential data should verify behavior with web search off and with the network disconnected.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'From the Maker',
        content: [
          'Randolph Smith, the solo developer behind FriedrichAI, shared the following about the app and why he built it and chose Steam. It is presented as the developer\'s own words, lightly edited for readability, not as PromptQuorum\'s independent editorial assessment:',
          '"FriedrichAI actually started almost by accident. I\'m a longtime software QA guy, not an AI researcher. I was laid off in 2022, and when I eventually started experimenting with AI, I was very new to it. Originally I was using AI to help me build a fairly simple card game. That led me further down the local-AI rabbit hole, and I kept running into the same problem: local AI was incredibly interesting, but getting everything installed, configured and working could be a project in itself.',
          'So FriedrichAI gradually became an attempt to package that experience into something normal people could actually use. The basic philosophy is still pretty simple: install it, run it, and talk to it. No cloud account, no API subscription required for the core product, no tracking, and no dependency on my servers. You can literally disconnect the computer from the internet and Friedrich keeps working.',
          'It has grown considerably from there. Friedrich can now handle local chat with persistent local memory, image generation, video and audio generation through optional media components, speech-to-text and text-to-speech, user-supplied GGUF models, and optional web search for people who want it. I\'m also working on MCP integration so Friedrich can interact with applications such as Blender while still keeping the human in control.',
          'As for Steam, that choice was very deliberate. I thought Steam was vastly underutilized for the kind of software I was building. There are millions of Windows users already there, with a distribution and update system they already trust, but very few people seemed to be looking at Steam as a place to distribute serious local AI software. To me, that looked less like a limitation and more like an opportunity.',
          'I also wanted FriedrichAI to feel like software you buy and own, rather than another AI service you\'re renting every month. Steam already has distribution, automatic updates, payments, refunds, user reviews and an enormous installed Windows audience. More importantly, people understand the transaction: you buy something, download it, and it stays in your library. GitHub is fantastic for developers, but I\'m specifically trying to make local AI accessible to people who shouldn\'t need to know what a Python environment, CUDA wheel or command line is just to use it.',
          'There are definitely tradeoffs. Steam was designed for games, not AI applications, so I\'ve had to work around some unusual distribution and packaging problems. Local AI also creates hardware-support challenges that a normal desktop application doesn\'t have. But overall I still think it was the right choice.',
          'Long term, my goal isn\'t simply to put a chat interface around a local model. I want FriedrichAI to become a genuinely useful local AI environment while keeping the things that made me build it in the first place: local ownership, privacy, accessibility, and no requirement that the developer\'s servers remain alive forever for the software you bought to continue working.',
          'And one funny correction: Friedrich is actually a nod to Friedrich Nietzsche, not Frederick the Great. The inspiration was Nietzsche\'s \'gaze into the abyss,\' which seemed particularly appropriate given that humanity now appears to be gazing into the AI abyss."',
        ],
        note: '— Randolph Smith, developer',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Buy once, no account',
            'What it means in real use': 'No subscription, sign-up, or API key for the core assistant.',
            'Limitation / caveat': 'Closed source; the license is proprietary.',
          },
          {
            'Benefit': 'Installable like a game',
            'What it means in real use': 'Steam handles payment, updates, and a free demo.',
            'Limitation / caveat': 'Windows only, and tied to a Steam account.',
          },
          {
            'Benefit': 'Persistent local memory',
            'What it means in real use': 'Context carries across sessions on your own PC.',
            'Limitation / caveat': 'Memory quality is untested here.',
          },
          {
            'Benefit': 'Image, video, audio packs',
            'What it means in real use': 'Media generation without a cloud service.',
            'Limitation / caveat': 'Large downloads; NVIDIA-first, AMD in beta.',
          },
          {
            'Benefit': 'Full 1.0 release',
            'What it means in real use': 'Out of Early Access since 18 September 2026.',
            'Limitation / caveat': 'Only 14 public Steam reviews so far.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Windows users who want an offline assistant without a technical setup.** The Steam install-and-talk flow is the main design goal.',
          '**People who prefer paying once over subscriptions.** The core assistant needs no account or API key.',
          '**Users with an NVIDIA GPU who want local media generation.** Image, video, and audio packs are free add-ons for it.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**License and source code.** No public repository or open-source license was found, so behavior cannot be checked against code.',
          '**Hands-on performance and quality.** PromptQuorum did not run the app, so speed, memory quality, and media output are not assessed.',
          '**Install base.** Steam publishes no sales figures, so the number of paying users is not independently confirmed.',
          '**MCP and Blender integration.** The developer says it is in progress; no public documentation of it was found.',
          '**Not for Mac, Linux, or mobile users.** Only Windows 10/11 is listed.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            'App': '[Jan](/power-local-llm/jan-review)',
            'Platforms': 'macOS, Windows, Linux',
            'Price / license': 'Free / Apache 2.0 (variant)',
            'Key difference': 'Open-source desktop chat with MCP and a local API server',
          },
          {
            'App': '[GPT4All](/power-local-llm/gpt4all-review)',
            'Platforms': 'macOS, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source desktop app with local document chat',
          },
          {
            'App': '[LM Studio](/power-local-llm/lm-studio-review)',
            'Platforms': 'macOS, Windows, Linux',
            'Price / license': 'Free / proprietary',
            'Key difference': 'Model-discovery-first runner with a local server',
          },
          {
            'App': '[HilbertRaum](/power-local-llm/hilbertraum-review)',
            'Platforms': 'Windows, macOS, Linux',
            'Price / license': 'Free / GPL-3.0',
            'Key difference': 'Portable, no-install workspace with document Q&A',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license, and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is FriedrichAI open source?',
            a: 'No. Steam shows a proprietary copyright notice, and no public source repository was found.',
          },
          {
            q: 'Do I need a subscription or an account?',
            a: 'No. The Steam page states there is no subscription, account, or API key for the core assistant; you do need a Steam account to buy it.',
          },
          {
            q: 'Can I use my own models?',
            a: 'Yes, supported GGUF models can be placed in the local model workspace, scanned, and switched through the Model Manager. Different models have very different RAM and VRAM needs.',
          },
          {
            q: 'Does it work on Mac or Linux?',
            a: 'Not according to the Steam page, which lists Windows 10/11 (64-bit) only.',
          },
          {
            q: 'Can I try it before buying?',
            a: 'Yes. A free demo exists as a separate Steam entry; it is a frozen compatibility snapshot rather than a time-limited trial and may run slower than the full version.',
          },
          {
            q: 'Does it work with an AMD graphics card?',
            a: 'AMD support is a separate Radeon-compatible build in beta, and AMD media generation is described as still under development.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'FriedrichAI is a notable attempt to ship local AI as a bought-once Windows application, with local memory, voice, project tools, and optional media packs in one install. Against that, the code is closed, the Steam review base is only 14 reviews, the best media path is NVIDIA-only, and nothing here has been tested hands-on. It suits Windows users who want a packaged offline assistant and accept those terms; readers who want auditable code can compare [Jan](/power-local-llm/jan-review) or [GPT4All](/power-local-llm/gpt4all-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[FriedrichAI: Offline AI on Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) — price, requirements, features, languages, demo, and reviews, checked 9 October 2026.',
          '[Steam news for FriedrichAI](https://store.steampowered.com/news/app/4111530) — the "FriedrichAI 1.0 Is Here" post and later patch notes, checked 9 October 2026.',
          '[FriedrichAI Text To Image Pack](https://store.steampowered.com/app/4702720/), [Video Generation](https://store.steampowered.com/app/4765280/), and [Audio Generation](https://store.steampowered.com/app/4765290/) — the free media packs.',
          '[FriedrichAI on itch.io](https://rdub77.itch.io/friedrichai) — the developer\'s secondary listing.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Jan Review](/power-local-llm/jan-review) — a free, open-source desktop chat app.',
          '[GPT4All Review](/power-local-llm/gpt4all-review) — an MIT-licensed desktop app with document chat.',
          '[LM Studio Review](/power-local-llm/lm-studio-review) — a model-discovery-first desktop runner.',
          '[HilbertRaum Review](/power-local-llm/hilbertraum-review) — a portable, no-install offline workspace.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'FriedrichAI Review: Offline Windows AI Assistant Sold on Steam',
      description:
        'FriedrichAI review: a paid offline AI assistant for Windows sold on Steam, with local memory, image, video, and audio packs. Privacy, hardware, and what the sources do not confirm.',
      url: 'https://promptquorum.com/power-local-llm/friedrichai-review',
      inLanguage: 'en',
      datePublished: '2026-10-09',
      dateModified: '2026-10-09',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Windows users evaluating a paid, offline AI assistant sold on Steam' },
      about: [
        { '@type': 'Thing', name: 'FriedrichAI' },
        { '@type': 'Thing', name: 'Steam' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/friedrichai-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'FriedrichAI Review', item: 'https://promptquorum.com/power-local-llm/friedrichai-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/friedrichai-review-hero-de.webp',
    title: 'FriedrichAI-Rezension: Offline-KI-Assistent für Windows, verkauft auf Steam',
    seoTitle: 'FriedrichAI-Rezension: Offline-KI für Windows auf Steam',
    intro: 'FriedrichAI ist eine Windows-Desktop-App des Einzelentwicklers Randolph Smith, die ein Sprachmodell auf Ihrem eigenen PC ausführt und dauerhaftes lokales Gedächtnis, gespeicherte Chats, ein Projektboard, lokale Sprachausgabe und Spracherkennung sowie optionale Pakete für Bild-, Video- und Audiogenerierung ergänzt. Verkauft wird sie auf [Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) statt über GitHub oder einen App-Store, und Version 1.0 hat den Early Access am 18. September 2026 verlassen. Der Quellcode ist nicht veröffentlicht. Diese Rezension stützt sich auf die Steam-Store-Seite, deren Neuigkeiten-Feed und die DLC-Seiten, geprüft am 9. Oktober 2026, sowie einen Kommentar des Entwicklers; PromptQuorum hat die App nicht praktisch getestet.',
    metaDescription: 'FriedrichAI-Rezension: ein kostenpflichtiger Offline-KI-Assistent für Windows auf Steam mit lokalem Gedächtnis, Bild-/Video-/Audiopaketen, ohne Konto. Hardware, Datenschutz, Grenzen.',
    twitterDescription: 'FriedrichAI-Rezension: ein Offline-KI-Assistent für Windows, der auf Steam einmalig gekauft wird, mit lokalem Gedächtnis und optionalen Bild-, Video- und Audiopaketen. Closed Source, nur Windows.',
    audience: 'Windows-Nutzer, die einen einmalig gekauften Offline-KI-Assistenten ohne Python- oder Kommandozeilen-Setup suchen und wissen müssen, was die Quellen bestätigen und was sich nicht überprüfen ließ.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'FriedrichAI Rezension',
    targetKeywords: [
      'friedrichai test',
      'friedrichai offline ki',
      'friedrichai steam',
      'offline ki assistent windows steam',
      'lokale ki app ohne abo windows',
      'lokale ki mit gedächtnis windows',
      'friedrichai vs lm studio',
    ],
    current_models_mentioned: [
      'Qwen',
      'GGUF models',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA RTX',
      'AMD Radeon',
      'Ryzen 7 5700X',
    ],
    leadAnswerBlock: '**FriedrichAI (Version 1.0, Stand 9. Oktober 2026) ist ein reiner Windows-KI-Assistent, den Sie einmalig auf Steam kaufen und der ein lokales Modell ohne Konto, ohne Abo und ohne erforderlichen API-Schlüssel ausführt.** Er richtet sich an Menschen, die lieber eine App installieren, als einen lokalen KI-Stack zusammenzubauen, und ergänzt optionale Bild-, Video- und Audiopakete. Der Code ist geschlossen, die Zahl der Steam-Bewertungen ist noch sehr klein, und der am besten unterstützte Medienpfad ist NVIDIA.',
    quickAnswerTop: {
      de: {
        question: 'Funktioniert FriedrichAI ohne Internetverbindung?',
        answer: 'Laut Steam-Seite und Entwickler ja: Der Basis-Assistent, das Gedächtnis, die gespeicherten Chats und die Sprachausgabe laufen nach der Installation lokal. Die Websuche ist optional und aus, solange Sie sie nicht einrichten, und die optionalen Medienpakete sind separate Downloads.',
        bullets: [
          'Auf Steam als Einmalkauf erhältlich; eine kostenlose Demo und drei kostenlose Medienpakete gibt es als separate Steam-Einträge.',
          'Nur Windows 10/11, mit CPU-Fallback für den Chat und empfohlener NVIDIA-Grafikkarte.',
          'Version 1.0 wurde am 18. September 2026 angekündigt, nach einem Early Access, der am 30. April 2026 begann.',
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
        label: 'Was ist FriedrichAI?',
        anchor: 'what-is-friedrichai',
      },
      {
        label: 'Warum der Entwickler Steam gewählt hat',
        anchor: 'why-steam',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'So gelingt der Einstieg',
        anchor: 'getting-started',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Hardware-Anforderungen',
        anchor: 'hardware-requirements',
      },
      {
        label: 'Datenschutz und Online-Funktionen',
        anchor: 'privacy',
      },
      {
        label: 'Vom Entwickler',
        anchor: 'from-the-maker',
      },
      {
        label: 'Abwägungen: Vorteile vs. Einschränkungen',
        anchor: 'tradeoffs',
      },
      {
        label: 'Für wen sich die App eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Wettbewerber und Alternativen',
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
            text: 'FriedrichAI ist ein Closed-Source-KI-Assistent für Windows, den ein Einzelentwickler auf Steam verkauft und der ein lokales Modell mit dauerhaftem Gedächtnis und optionalen Bild-, Video- und Audiopaketen ausführt und kein Konto braucht.',
          },
          {
            type: 'plain-terms',
            text: 'Sie kaufen die App auf Steam wie ein Spiel, installieren sie und sprechen mit ihr; Chat, Gedächtnis und Sprachfunktionen laufen auch bei ausgeschaltetem Netzwerk weiter, während aufwendigere Mediengenerierung eine leistungsstarke Grafikkarte braucht.',
          },
        ],
        items: [
          'Entwickler: Randolph Smith, auf Steam sowohl als Entwickler als auch als Publisher geführt; nach eigener Darstellung ein Profi für Software-Qualitätssicherung und kein KI-Forscher.',
          'Preis und Lizenz: einmalig 9,99 $ USD auf Steam, ohne Abo; proprietär, ein öffentliches Quellcode-Repository wurde nicht gefunden.',
          'Umfang: lokaler Chat, Gedächtnis, Suche in gespeicherten Chats, ein Projektboard (Todo/Doing/Blocked/Done), der Model Manager für GGUF-Modelle und optionale Websuche.',
          'Signale, Stand der Prüfung am 9. Oktober 2026: 13 von 14 Steam-Nutzerbewertungen positiv, Vollversion am 18. September 2026, letzter Patch am 6. Oktober 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf die Steam-Store-Seite, deren Neuigkeiten-Feed und die DLC-Seiten, geprüft am 9. Oktober 2026, sowie einen Kommentar des Entwicklers. PromptQuorum hat die App weder getestet noch einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-friedrichai',
        title: 'Was ist FriedrichAI?',
        content: [
          '**FriedrichAI ist ein Offline-first-KI-Arbeitsbereich für Windows, der einen lokalen Modell-Runner, Gedächtnis und Projektwerkzeuge in einer installierbaren App bündelt.** Laut [Steam-Seite](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) braucht der Kern-Assistent weder ein Cloud-Konto noch einen API-Schlüssel, und Chats, Gedächtnis und Projektdaten bleiben auf dem PC.',
          'Der Name ehrt laut Entwickler den Philosophen Friedrich Nietzsche und nicht Friedrich den Großen. Randolph Smith beschreibt die App im weiter unten folgenden Kommentar als Angebot für Menschen, die nicht wissen müssen sollten, was eine Python-Umgebung oder ein CUDA-Wheel ist.',
        ],
      },
      whySteam: {
        id: 'why-steam',
        title: 'Warum der Entwickler Steam gewählt hat',
        content: [
          '**Randolph Smith hat sich bewusst für Steam entschieden: Lokale KI sollte sich wie Software anfühlen, die man kauft und besitzt, und Steam bietet Windows-Nutzern bereits das Zahlungs-, Update- und Rückerstattungssystem, dem sie vertrauen.** FriedrichAI ist ein ungewöhnlicher Fall: ernstzunehmende Software für lokale KI, die dort statt auf GitHub verkauft wird. Seine Gründe, zusammengefasst aus dem Entwicklerkommentar weiter unten:',
        ],
        items: [
          '**Ein unterschätztes Publikum.** Millionen Windows-Nutzer sind bereits auf Steam, mit einem Vertriebs- und Update-System, dem sie vertrauen, doch kaum ein Entwickler sieht darin eine Heimat für ernstzunehmende Software für lokale KI.',
          '**Kaufen und besitzen statt mieten.** Er wollte einen Einmalkauf, der in der Bibliothek bleibt, statt eines weiteren KI-Dienstes, den man jeden Monat mietet. Steam liefert Zahlungen, automatische Updates, Rückerstattungen und Nutzerbewertungen.',
          '**Warum nicht GitHub.** GitHub eigne sich für Entwickler, sagt er, doch FriedrichAI richte sich an Menschen, die nicht wissen müssen sollten, was eine Python-Umgebung, ein CUDA-Wheel oder eine Kommandozeile ist.',
          '**Keine Abhängigkeit von seinen Servern.** Die Software soll weiterlaufen, auch wenn die Server des Entwicklers wegfallen.',
        ],
        callouts: [
          {
            type: 'insight',
            text: 'Der Entwickler nennt den Preis selbst: Steam wurde für Spiele entwickelt, daher musste er ungewöhnliche Probleme bei Vertrieb und Paketierung umgehen, und lokale KI bringt Herausforderungen bei der Hardware-Unterstützung mit sich, die eine normale Desktop-Anwendung nicht hat. Was Steam bietet, ist im Eintrag sichtbar: eine kostenlose Demo als separater Eintrag, kostenlose Add-on-Pakete als DLC und öffentliche Nutzerbewertungen.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**FriedrichAI wird über Steam für Windows 10/11 (64 Bit) für 9,99 $ USD vertrieben; die Basis-App hat eine kostenlose Demo, und die Medienpakete sind kostenlose Add-ons.**',
        ],
        columns: [
          'Angebot',
          'Bezugsquelle',
        ],
        rows: [
          {
            Angebot: 'Vollversion',
            Bezugsquelle: '[Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), 9,99 $ USD',
          },
          {
            Angebot: 'Kostenlose Demo',
            Bezugsquelle: '[Steam-Demo](https://store.steampowered.com/app/4861210/)',
          },
          {
            Angebot: 'Medienpakete',
            Bezugsquelle: 'Kostenlose Steam-Add-ons: Bild, Video, Audio',
          },
          {
            Angebot: 'Website',
            Bezugsquelle: '[Steam-Store-Seite](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) (keine eigene Website gefunden)',
          },
          {
            Angebot: 'Weiterer Eintrag',
            Bezugsquelle: '[itch.io-Seite](https://rdub77.itch.io/friedrichai)',
          },
          {
            Angebot: 'Quellcode',
            Bezugsquelle: 'Nicht veröffentlicht',
          },
        ],
        note: 'Diese Seite ist Begleitmaterial zum Eintrag der App im [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Version, geprüft am 9. Oktober 2026: 1.0, laut Steam-Neuigkeitenbeitrag „FriedrichAI 1.0 Is Here“. Es wurden weder eine eigene Produkt-Website noch eine Datenschutzerklärung gefunden; die Steam-Seite ist der offizielle Eintrag.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Steam-Seite empfiehlt, in Etappen zu testen; PromptQuorum hat diese Schritte nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Zuerst die kostenlose Demo ausprobieren',
            whyItMatters: 'Die Demo ist ein eingefrorener Kompatibilitäts-Snapshot und keine Testversion; der Entwickler bittet Käufer, die Vollversion nicht zu kaufen, wenn sie nicht gut läuft.',
          },
          {
            title: 'Den Basis-Assistenten installieren und prüfen, ob der Chat funktioniert',
            whyItMatters: 'Die Steam-Seite rät, den lokalen Chat zu bestätigen, bevor Sie Medienpakete hinzufügen oder Modelle wechseln.',
          },
          {
            title: 'Optionale Pakete nur hinzufügen, wenn Ihre Hardware es zulässt',
            whyItMatters: 'Bild-, Video- und Audiogenerierung brauchen große zusätzliche Downloads und weit mehr GPU-Leistung als der Chat.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt von der Steam-Seite, aus Neuigkeitenbeiträgen oder DLC-Einträgen; keiner wurde unabhängig getestet.**',
        ],
        items: [
          '**Chat und Gedächtnis.** Lokaler Chat mit dauerhaftem Gedächtnis, gespeicherte Unterhaltungen, die sich wieder öffnen und durchsuchen lassen, und eine Oberfläche für normale Gespräche, die keine Slash-Befehle mehr erfordert.',
          '**Projektwerkzeuge.** Ein Project Board (Todo, Doing, Blocked, Done), Project Chronicle zum Bewahren des Projektkontexts und der Import lokaler Text- und Markdown-Dateien.',
          '**Modelle.** Ein mitgeliefertes Standardmodell sowie ein Model Manager, der vom Nutzer bereitgestellte GGUF-Modelle sucht und zwischen ihnen wechselt. Laut Steam-Seite nutzt die App Qwen-Modelle unter der Apache License 2.0.',
          '**Sprache.** Lokale Sprachausgabe, die sich deaktivieren lässt, und lokale Spracherkennung über eine Mikrofon-Schaltfläche, in einem Update vom August 2026 hinzugefügt.',
          '**Optionale Medien.** Bildgenerierung (mit Varianten), Text-zu-Video sowie Audio- und Musikgenerierung als separate kostenlose Pakete.',
          '**Oberfläche.** Acht Oberflächensprachen: Englisch, Ukrainisch, Deutsch, Französisch, Spanisch, brasilianisches Portugiesisch, Koreanisch und Japanisch.',
        ],
        note: 'Die Steam-Seite nennt volle Audio-Unterstützung nur für Englisch; die Sprachfunktionen in den anderen sieben Sprachen sollten daher in der Demo geprüft werden.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Hardware-Anforderungen',
        content: [
          '**Steam nennt als Minimum Windows 10/11, 16 GB RAM und 20 GB Speicherplatz, mit empfohlener NVIDIA-Grafikkarte und einem CPU-Fallback für den Chat.** Das empfohlene Setup ist ein Prozessor der Klasse Ryzen 7 5700X, 32 GB RAM und eine NVIDIA-RTX-Karte mit 10 GB oder mehr VRAM.',
          'Die Mediengenerierung ist deutlich anspruchsvoller als der Chat: Die Seite empfiehlt 12 GB oder mehr VRAM für Video und 16 GB oder mehr für längere Clips und bezeichnet Video-, Bild-zu-Video- und Morph-Workflows als experimentell. NVIDIA ist der am besten unterstützte Medienpfad; die AMD-Unterstützung ist ein separater, Radeon-kompatibler Build in der Beta, und ein Patch vom September 2026 brachte Unterstützung für ältere Intel-Prozessoren. Die Seite warnt außerdem Norton-Nutzer, zuerst ihr Antivirenprogramm zu aktualisieren, da ältere Definitionen Teile der App melden könnten.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Online-Funktionen',
        content: [
          '**Die Steam-Seite erklärt, dass Chats, Gedächtnis, gespeicherte Unterhaltungen und Projektdaten auf dem Rechner des Nutzers bleiben und dass für den Kern-Assistenten kein API-Schlüssel erforderlich ist.** Sprachausgabe und Spracherkennung laufen laut Beschreibung lokal.',
          'Die optionale Websuche ist die Ausnahme: Sie ist aus, solange sie nicht eingerichtet wird, und braucht möglicherweise ein eigenes Anbieterkonto oder einen eigenen API-Schlüssel des Nutzers. Da der Quellcode nicht veröffentlicht ist, lässt sich nichts davon am Code prüfen, und es handelt sich um Erklärungen des Entwicklers, nicht um Prüfergebnisse.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat den Netzwerkverkehr der App nicht geprüft. Wer vertrauliche Daten verarbeitet, sollte das Verhalten bei ausgeschalteter Websuche und bei getrennter Netzwerkverbindung überprüfen.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Vom Entwickler',
        content: [
          'Randolph Smith, der Einzelentwickler hinter FriedrichAI, hat Folgendes zur App und zu den Gründen für ihre Entwicklung und die Wahl von Steam mitgeteilt. Es wird als eigene Worte des Entwicklers wiedergegeben, zur besseren Lesbarkeit leicht redigiert, nicht als unabhängige redaktionelle Einschätzung von PromptQuorum:',
          '"FriedrichAI ist eigentlich fast zufällig entstanden. Ich bin ein langjähriger Software-QA-Mann, kein KI-Forscher. 2022 wurde ich entlassen, und als ich schließlich anfing, mit KI zu experimentieren, war ich ein absoluter Neuling. Ursprünglich wollte ich mit KI ein ziemlich einfaches Kartenspiel bauen. Das führte mich immer tiefer in den Kaninchenbau der lokalen KI, und ich stieß immer wieder auf dasselbe Problem: Lokale KI war unglaublich spannend, aber alles zu installieren, zu konfigurieren und zum Laufen zu bringen konnte ein eigenes Projekt sein.',
          'So wurde FriedrichAI nach und nach zu dem Versuch, diese Erfahrung in etwas zu verpacken, das normale Menschen tatsächlich nutzen können. Die Grundphilosophie ist weiterhin ziemlich einfach: installieren, starten und mit ihm reden. Kein Cloud-Konto, kein API-Abo für das Kernprodukt, kein Tracking und keine Abhängigkeit von meinen Servern. Man kann den Computer buchstäblich vom Internet trennen, und Friedrich arbeitet weiter.',
          'Seitdem ist die App erheblich gewachsen. Friedrich beherrscht inzwischen lokalen Chat mit dauerhaftem lokalem Gedächtnis, Bildgenerierung, Video- und Audiogenerierung über optionale Medienkomponenten, Spracherkennung und Sprachausgabe, vom Nutzer bereitgestellte GGUF-Modelle und optionale Websuche für alle, die sie möchten. Außerdem arbeite ich an einer MCP-Integration, damit Friedrich mit Anwendungen wie Blender interagieren kann, während der Mensch die Kontrolle behält.',
          'Zu Steam: Diese Entscheidung war ganz bewusst. Ich fand, dass Steam für die Art von Software, die ich baute, enorm unterschätzt wird. Dort sind bereits Millionen Windows-Nutzer, mit einem Vertriebs- und Update-System, dem sie vertrauen, aber kaum jemand schien Steam als Ort für den Vertrieb ernstzunehmender lokaler KI-Software zu betrachten. Für mich sah das weniger nach einer Einschränkung als nach einer Chance aus.',
          'Außerdem sollte sich FriedrichAI wie Software anfühlen, die man kauft und besitzt, und nicht wie ein weiterer KI-Dienst, den man jeden Monat mietet. Steam bietet bereits Vertrieb, automatische Updates, Zahlungen, Rückerstattungen, Nutzerbewertungen und ein riesiges installiertes Windows-Publikum. Wichtiger noch: Die Leute verstehen die Transaktion. Man kauft etwas, lädt es herunter, und es bleibt in der Bibliothek. GitHub ist fantastisch für Entwickler, aber ich versuche gezielt, lokale KI für Menschen zugänglich zu machen, die nicht wissen müssen sollten, was eine Python-Umgebung, ein CUDA-Wheel oder eine Kommandozeile ist, nur um sie zu nutzen.',
          'Es gibt definitiv Kompromisse. Steam wurde für Spiele entwickelt, nicht für KI-Anwendungen, daher musste ich einige ungewöhnliche Probleme bei Vertrieb und Paketierung umgehen. Lokale KI bringt außerdem Herausforderungen bei der Hardware-Unterstützung mit sich, die eine normale Desktop-Anwendung nicht hat. Insgesamt halte ich es aber weiterhin für die richtige Entscheidung.',
          'Langfristig ist mein Ziel nicht, bloß eine Chat-Oberfläche um ein lokales Modell zu legen. FriedrichAI soll zu einer wirklich nützlichen lokalen KI-Umgebung werden und dabei das bewahren, weshalb ich es überhaupt gebaut habe: lokaler Besitz, Datenschutz, Zugänglichkeit und keine Voraussetzung, dass die Server des Entwicklers ewig laufen müssen, damit die gekaufte Software weiter funktioniert.',
          'Und noch eine lustige Richtigstellung: Friedrich ist tatsächlich eine Hommage an Friedrich Nietzsche und nicht an Friedrich den Großen. Die Inspiration war Nietzsches „Blick in den Abgrund“, was besonders passend schien, da die Menschheit heute offenbar in den KI-Abgrund blickt."',
        ],
        note: '— Randolph Smith, Entwickler',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: [
          'Vorteil',
          'Bedeutung in der Praxis',
          'Einschränkung / Hinweis',
        ],
        rows: [
          {
            Vorteil: 'Einmal kaufen, kein Konto',
            'Bedeutung in der Praxis': 'Kein Abo, keine Registrierung, kein API-Schlüssel für den Kern-Assistenten.',
            'Einschränkung / Hinweis': 'Closed Source; die Lizenz ist proprietär.',
          },
          {
            Vorteil: 'Installierbar wie ein Spiel',
            'Bedeutung in der Praxis': 'Steam übernimmt Zahlung, Updates und eine kostenlose Demo.',
            'Einschränkung / Hinweis': 'Nur Windows und an ein Steam-Konto gebunden.',
          },
          {
            Vorteil: 'Dauerhaftes lokales Gedächtnis',
            'Bedeutung in der Praxis': 'Kontext bleibt über Sitzungen hinweg auf Ihrem eigenen PC erhalten.',
            'Einschränkung / Hinweis': 'Die Qualität des Gedächtnisses wurde hier nicht getestet.',
          },
          {
            Vorteil: 'Bild-, Video-, Audiopakete',
            'Bedeutung in der Praxis': 'Mediengenerierung ohne Cloud-Dienst.',
            'Einschränkung / Hinweis': 'Große Downloads; NVIDIA zuerst, AMD in der Beta.',
          },
          {
            Vorteil: 'Vollständige Version 1.0',
            'Bedeutung in der Praxis': 'Seit dem 18. September 2026 nicht mehr im Early Access.',
            'Einschränkung / Hinweis': 'Bisher nur 14 öffentliche Steam-Bewertungen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Windows-Nutzer, die einen Offline-Assistenten ohne technisches Setup wollen.** Der Ablauf „bei Steam installieren und loslegen“ ist das zentrale Designziel.',
          '**Menschen, die lieber einmal zahlen als Abos abzuschließen.** Der Kern-Assistent braucht kein Konto und keinen API-Schlüssel.',
          '**Nutzer mit NVIDIA-Grafikkarte, die lokale Mediengenerierung wollen.** Die Bild-, Video- und Audiopakete sind dafür kostenlose Add-ons.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Lizenz und Quellcode.** Es wurden weder ein öffentliches Repository noch eine Open-Source-Lizenz gefunden; das Verhalten lässt sich daher nicht am Code prüfen.',
          '**Praktische Leistung und Qualität.** PromptQuorum hat die App nicht ausgeführt; Geschwindigkeit, Qualität des Gedächtnisses und Medienausgabe sind daher nicht bewertet.',
          '**Nutzerbasis.** Steam veröffentlicht keine Verkaufszahlen, daher ist die Zahl der zahlenden Nutzer nicht unabhängig bestätigt.',
          '**MCP- und Blender-Integration.** Der Entwickler sagt, sie sei in Arbeit; eine öffentliche Dokumentation dazu wurde nicht gefunden.',
          '**Nichts für Mac-, Linux- oder Mobilnutzer.** Aufgeführt ist nur Windows 10/11.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Wesentlicher Unterschied',
        ],
        rows: [
          {
            App: '[Jan](/de/power-local-llm/jan-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0 (Variante)',
            'Wesentlicher Unterschied': 'Quelloffener Desktop-Chat mit MCP und lokalem API-Server',
          },
          {
            App: '[GPT4All](/de/power-local-llm/gpt4all-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wesentlicher Unterschied': 'Quelloffene Desktop-App mit lokalem Dokumenten-Chat',
          },
          {
            App: '[LM Studio](/de/power-local-llm/lm-studio-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / proprietär',
            'Wesentlicher Unterschied': 'Runner mit Fokus auf Modellsuche und lokalem Server',
          },
          {
            App: '[HilbertRaum](/de/power-local-llm/hilbertraum-review)',
            Plattformen: 'Windows, macOS, Linux',
            'Preis / Lizenz': 'Kostenlos / GPL-3.0',
            'Wesentlicher Unterschied': 'Portabler Arbeitsbereich ohne Installation mit Dokumenten-Q&A',
          },
        ],
        note: 'Details zu Wettbewerbern ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen jeder App in ihrem eigenen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist FriedrichAI Open Source?',
            a: 'Nein. Steam zeigt einen proprietären Urheberrechtshinweis, und ein öffentliches Quellcode-Repository wurde nicht gefunden.',
          },
          {
            q: 'Brauche ich ein Abo oder ein Konto?',
            a: 'Nein. Laut Steam-Seite gibt es für den Kern-Assistenten kein Abo, kein Konto und keinen API-Schlüssel; zum Kauf brauchen Sie allerdings ein Steam-Konto.',
          },
          {
            q: 'Kann ich eigene Modelle verwenden?',
            a: 'Ja, unterstützte GGUF-Modelle lassen sich im lokalen Modell-Arbeitsbereich ablegen, durchsuchen und über den Model Manager wechseln. Verschiedene Modelle haben sehr unterschiedlichen RAM- und VRAM-Bedarf.',
          },
          {
            q: 'Läuft sie auf Mac oder Linux?',
            a: 'Laut Steam-Seite nicht; sie nennt ausschließlich Windows 10/11 (64 Bit).',
          },
          {
            q: 'Kann ich sie vor dem Kauf ausprobieren?',
            a: 'Ja. Eine kostenlose Demo gibt es als separaten Steam-Eintrag; sie ist ein eingefrorener Kompatibilitäts-Snapshot und keine zeitlich begrenzte Testversion und läuft möglicherweise langsamer als die Vollversion.',
          },
          {
            q: 'Funktioniert sie mit einer AMD-Grafikkarte?',
            a: 'Die AMD-Unterstützung ist ein separater, Radeon-kompatibler Build in der Beta, und die Mediengenerierung auf AMD wird als noch in Entwicklung beschrieben.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'FriedrichAI ist ein bemerkenswerter Versuch, lokale KI als einmalig gekaufte Windows-Anwendung auszuliefern, mit lokalem Gedächtnis, Sprache, Projektwerkzeugen und optionalen Medienpaketen in einer Installation. Dem stehen gegenüber: Der Code ist geschlossen, die Steam-Bewertungsbasis umfasst nur 14 Bewertungen, der beste Medienpfad ist NVIDIA-exklusiv, und nichts davon wurde praktisch getestet. Die App eignet sich für Windows-Nutzer, die einen fertig verpackten Offline-Assistenten wollen und diese Bedingungen akzeptieren; wer prüfbaren Code möchte, kann [Jan](/de/power-local-llm/jan-review) oder [GPT4All](/de/power-local-llm/gpt4all-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[FriedrichAI: Offline AI auf Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) — Preis, Anforderungen, Funktionen, Sprachen, Demo und Bewertungen, geprüft am 9. Oktober 2026.',
          '[Steam-Neuigkeiten zu FriedrichAI](https://store.steampowered.com/news/app/4111530) — der Beitrag „FriedrichAI 1.0 Is Here“ und spätere Patch-Notizen, geprüft am 9. Oktober 2026.',
          '[FriedrichAI Text To Image Pack](https://store.steampowered.com/app/4702720/), [Video Generation](https://store.steampowered.com/app/4765280/) und [Audio Generation](https://store.steampowered.com/app/4765290/) — die kostenlosen Medienpakete.',
          '[FriedrichAI auf itch.io](https://rdub77.itch.io/friedrichai) — der zweite Eintrag des Entwicklers.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Jan-Rezension](/de/power-local-llm/jan-review) — eine kostenlose, quelloffene Desktop-Chat-App.',
          '[GPT4All-Rezension](/de/power-local-llm/gpt4all-review) — eine MIT-lizenzierte Desktop-App mit Dokumenten-Chat.',
          '[LM-Studio-Rezension](/de/power-local-llm/lm-studio-review) — ein Desktop-Runner mit Fokus auf Modellsuche.',
          '[HilbertRaum-Rezension](/de/power-local-llm/hilbertraum-review) — ein portabler Offline-Arbeitsbereich ohne Installation.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/friedrichai-review-hero-es.webp',
    title: 'Análisis de FriedrichAI: asistente de IA offline para Windows que se vende en Steam',
    seoTitle: 'Análisis de FriedrichAI: IA offline para Windows en Steam',
    intro: 'FriedrichAI es una app de escritorio para Windows del desarrollador independiente Randolph Smith que ejecuta un modelo de lenguaje en tu propio PC y añade memoria local persistente, conversaciones guardadas, un tablero de proyectos, texto a voz y voz a texto locales, y paquetes opcionales de generación de imágenes, vídeo y audio. Se vende en [Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) en lugar de GitHub o una tienda de apps, y la versión 1.0 salió del acceso anticipado el 18 de septiembre de 2026. El código fuente no está publicado. Este análisis se basa en la página de Steam, su feed de noticias y las páginas de DLC, consultados el 9 de octubre de 2026, además de un comentario del desarrollador; PromptQuorum no ha probado la app de forma práctica.',
    metaDescription: 'Análisis de FriedrichAI: asistente de IA offline de pago para Windows en Steam, con memoria local, paquetes de imagen/vídeo/audio y sin cuenta. Hardware y privacidad.',
    twitterDescription: 'Análisis de FriedrichAI: un asistente de IA offline para Windows que se compra una vez en Steam, con memoria local y paquetes opcionales de imagen, vídeo y audio. Código cerrado, solo Windows.',
    audience: 'Usuarios de Windows que quieren un asistente de IA offline de pago único, sin instalación de Python ni línea de comandos, y que necesitan saber qué confirman las fuentes y qué no se pudo verificar.',
    readTime: '9 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de FriedrichAI',
    targetKeywords: [
      'opiniones friedrichai',
      'friedrichai ia offline',
      'friedrichai steam',
      'asistente de ia offline windows steam',
      'app de ia local sin suscripción windows',
      'ia local con memoria windows',
      'friedrichai vs lm studio',
    ],
    current_models_mentioned: [
      'Qwen',
      'GGUF models',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA RTX',
      'AMD Radeon',
      'Ryzen 7 5700X',
    ],
    leadAnswerBlock: '**FriedrichAI (versión 1.0 a fecha del 9 de octubre de 2026) es un asistente de IA solo para Windows que se compra una vez en Steam y ejecuta un modelo local sin cuenta, sin suscripción y sin clave de API obligatoria.** Está pensado para quienes prefieren instalar una app antes que montar un entorno de IA local, y añade paquetes opcionales de imagen, vídeo y audio. El código es cerrado, la base de reseñas en Steam sigue siendo muy pequeña y la vía multimedia mejor compatible es NVIDIA.',
    quickAnswerTop: {
      es: {
        question: '¿FriedrichAI funciona sin conexión a internet?',
        answer: 'Según la página de Steam y el desarrollador, sí: el asistente base, la memoria, las conversaciones guardadas y el texto a voz se ejecutan en local tras la instalación. La búsqueda web es opcional y está desactivada salvo que la configures, y los paquetes multimedia opcionales son descargas aparte.',
        bullets: [
          'Se vende en Steam con pago único; existen una demo gratuita y tres paquetes multimedia gratuitos como entradas separadas de Steam.',
          'Solo Windows 10/11, con CPU como alternativa para el chat y una GPU NVIDIA recomendada.',
          'La versión 1.0 se anunció el 18 de septiembre de 2026, tras un acceso anticipado que comenzó el 30 de abril de 2026.',
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
        label: '¿Qué es FriedrichAI?',
        anchor: 'what-is-friedrichai',
      },
      {
        label: 'Por qué el creador eligió Steam',
        anchor: 'why-steam',
      },
      {
        label: 'Cómo obtenerla',
        anchor: 'get-it',
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
        label: 'Requisitos de hardware',
        anchor: 'hardware-requirements',
      },
      {
        label: 'Privacidad y funciones en línea',
        anchor: 'privacy',
      },
      {
        label: 'La voz del creador',
        anchor: 'from-the-maker',
      },
      {
        label: 'Ventajas y limitaciones',
        anchor: 'tradeoffs',
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
        title: 'Resumen',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'FriedrichAI es un asistente de IA de código cerrado para Windows, que un desarrollador independiente vende en Steam, y que ejecuta un modelo local con memoria persistente y paquetes opcionales de imagen, vídeo y audio, sin necesidad de cuenta.',
          },
          {
            type: 'plain-terms',
            text: 'Lo compras en Steam como un juego, lo instalas y hablas con él; el chat, la memoria y las funciones de voz siguen funcionando con la red desconectada, mientras que la generación multimedia más pesada necesita una tarjeta gráfica potente.',
          },
        ],
        items: [
          'Desarrollador: Randolph Smith, que figura como desarrollador y editor en Steam; se describe a sí mismo como profesional del control de calidad de software, no como investigador de IA.',
          'Precio y licencia: $9.99 USD de pago único en Steam, sin suscripción; propietaria, sin repositorio de código público conocido.',
          'Alcance: chat local, memoria, búsqueda en conversaciones guardadas, un tablero de proyectos Todo/Doing/Blocked/Done, Model Manager para modelos GGUF y búsqueda web opcional.',
          'Indicadores según la consulta del 9 de octubre de 2026: 13 de 14 reseñas de usuarios de Steam positivas, versión completa el 18 de septiembre de 2026 y último parche el 6 de octubre de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en la página de Steam, su feed de noticias y las páginas de DLC, consultados el 9 de octubre de 2026, además de un comentario del desarrollador. PromptQuorum no ha probado ni evaluado con pruebas comparativas la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-friedrichai',
        title: '¿Qué es FriedrichAI?',
        content: [
          '**FriedrichAI es un espacio de trabajo de IA para Windows, pensado para funcionar sin conexión, que reúne un ejecutor de modelos locales, memoria y herramientas de proyecto en una sola app instalable.** Según su [página de Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), el asistente principal no necesita cuenta en la nube ni clave de API, y las conversaciones, la memoria y los datos de proyecto se quedan en el PC.',
          'El nombre rinde homenaje al filósofo Friedrich Nietzsche, y no a Federico el Grande, según el desarrollador. Randolph Smith describe la app, en el comentario del creador más abajo, como dirigida a personas que no deberían tener que saber qué es un entorno de Python o una rueda de CUDA.',
        ],
      },
      whySteam: {
        id: 'why-steam',
        title: 'Por qué el creador eligió Steam',
        content: [
          '**Randolph Smith eligió Steam a propósito: quería que la IA local se sintiera como un software que compras y es tuyo, y Steam ya ofrece a los usuarios de Windows el sistema de pagos, actualizaciones y reembolsos en el que confían.** FriedrichAI es un caso poco habitual de software serio de IA local que se vende allí en lugar de en GitHub. Sus motivos, resumidos a partir del comentario del creador más abajo:',
        ],
        items: [
          '**Un público infrautilizado.** Millones de usuarios de Windows ya están en Steam, con un sistema de distribución y actualización en el que confían, pero pocos desarrolladores lo ven como un lugar para software serio de IA local.',
          '**Comprar y poseer, no alquilar.** Quería una compra única que se quede en la biblioteca, en lugar de otro servicio de IA que se alquila cada mes. Steam aporta pagos, actualizaciones automáticas, reembolsos y reseñas de usuarios.',
          '**Por qué no GitHub.** GitHub es adecuado para desarrolladores, dice, pero FriedrichAI está pensado para personas que no deberían necesitar saber qué es un entorno de Python, un paquete wheel de CUDA o una línea de comandos.',
          '**Sin depender de sus servidores.** El software debería seguir funcionando aunque los servidores del desarrollador dejen de existir.',
        ],
        callouts: [
          {
            type: 'insight',
            text: 'El creador menciona el coste él mismo: Steam se diseñó para juegos, así que tuvo que sortear problemas poco habituales de distribución y empaquetado, y la IA local añade desafíos de compatibilidad de hardware que una aplicación de escritorio normal no tiene. Lo que aporta Steam se ve en la ficha: una demo gratuita como entrada aparte, paquetes complementarios gratuitos como DLC y reseñas públicas de usuarios.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**FriedrichAI se distribuye a través de Steam para Windows 10/11 (64 bits) por $9.99 USD; la app base tiene una demo gratuita y los paquetes multimedia son complementos gratuitos.**',
        ],
        columns: [
          'Elemento',
          'Dónde obtenerla',
        ],
        rows: [
          {
            Elemento: 'Versión completa',
            'Dónde obtenerla': '[Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), $9.99 USD',
          },
          {
            Elemento: 'Demo gratuita',
            'Dónde obtenerla': '[Demo en Steam](https://store.steampowered.com/app/4861210/)',
          },
          {
            Elemento: 'Paquetes multimedia',
            'Dónde obtenerla': 'Complementos gratuitos de Steam: imagen, vídeo, audio',
          },
          {
            Elemento: 'Sitio web',
            'Dónde obtenerla': '[Página de Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) (sin sitio propio)',
          },
          {
            Elemento: 'Otra ficha',
            'Dónde obtenerla': '[Página de itch.io](https://rdub77.itch.io/friedrichai)',
          },
          {
            Elemento: 'Código fuente',
            'Dónde obtenerla': 'No publicado',
          },
        ],
        note: 'Esta página es material complementario de la entrada de la app en el [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versión verificada el 9 de octubre de 2026: 1.0, según la publicación de noticias de Steam «FriedrichAI 1.0 Is Here». No se encontró un sitio web de producto propio ni una página de política de privacidad; la página de Steam es la ficha oficial.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**La página de Steam recomienda probar por fases; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Prueba primero la demo gratuita',
            whyItMatters: 'La demo es una instantánea congelada de compatibilidad, no una prueba, y el desarrollador pide no comprar la versión completa si no funciona bien.',
          },
          {
            title: 'Instala el asistente base y confirma que el chat funciona',
            whyItMatters: 'La página de Steam aconseja confirmar el chat local antes de añadir paquetes multimedia o cambiar de modelo.',
          },
          {
            title: 'Añade paquetes opcionales solo si tu hardware lo permite',
            whyItMatters: 'La generación de imágenes, vídeo y audio requiere descargas adicionales grandes y mucha más potencia de GPU que el chat.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de la página de Steam, las noticias o las fichas de DLC; ninguno ha sido probado de forma independiente.**',
        ],
        items: [
          '**Chat y memoria.** Chat local con memoria persistente, conversaciones guardadas que se pueden reabrir y buscar, y una interfaz de conversación normal que ya no exige comandos con barra.',
          '**Herramientas de proyecto.** Un Project Board (Todo, Doing, Blocked, Done), Project Chronicle para conservar el contexto del proyecto e importación de archivos locales de texto y Markdown.',
          '**Modelos.** Un modelo predeterminado incluido, además de un Model Manager que busca y cambia entre modelos GGUF aportados por el usuario. La página de Steam dice que la app usa modelos Qwen con licencia Apache License 2.0.',
          '**Voz.** Texto a voz local que se puede desactivar y voz a texto local mediante un botón de micrófono, añadido en una actualización de agosto de 2026.',
          '**Multimedia opcional.** Generación de imágenes (con variaciones), texto a vídeo y generación de audio y música como paquetes gratuitos independientes.',
          '**Interfaz.** Ocho idiomas de interfaz: inglés, ucraniano, alemán, francés, español, portugués de Brasil, coreano y japonés.',
        ],
        note: 'La página de Steam indica compatibilidad completa de audio solo para el inglés, así que conviene comprobar en la demo las funciones de voz en los otros siete idiomas.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Requisitos de hardware',
        content: [
          '**Steam indica como mínimo Windows 10/11, 16 GB de RAM y 20 GB de almacenamiento, con una GPU NVIDIA recomendada y la CPU como alternativa para el chat.** La configuración recomendada es un procesador de clase Ryzen 7 5700X, 32 GB de RAM y una tarjeta NVIDIA RTX con 10 GB o más de VRAM.',
          'La generación multimedia es mucho más exigente que el chat: la página recomienda 12 GB o más de VRAM para vídeo y 16 GB o más para clips más largos, y califica de experimentales los flujos de vídeo, imagen a vídeo y morph. NVIDIA es la vía multimedia mejor compatible; la compatibilidad con AMD es una compilación aparte compatible con Radeon en beta, y un parche de septiembre de 2026 añadió procesadores Intel más antiguos. La página también advierte a los usuarios de Norton que actualicen primero el antivirus, porque las definiciones antiguas pueden marcar partes de la app.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y funciones en línea',
        content: [
          '**La página de Steam afirma que las conversaciones, la memoria, las conversaciones guardadas y los datos de proyecto se quedan en el equipo del usuario, y que el asistente principal no requiere clave de API.** La generación y el reconocimiento de voz se describen como locales.',
          'La búsqueda web opcional es la excepción: está desactivada salvo que se configure y puede requerir la propia cuenta de proveedor o clave de API del usuario. Como el código fuente no está publicado, nada de esto puede comprobarse con el código, y se trata de declaraciones del desarrollador, no de resultados de una auditoría.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha inspeccionado el tráfico de red de la app. Quien maneje datos confidenciales debería verificar el comportamiento con la búsqueda web desactivada y con la red desconectada.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'La voz del creador',
        content: [
          'Randolph Smith, el desarrollador independiente detrás de FriedrichAI, compartió lo siguiente sobre la app y los motivos por los que la creó y eligió Steam. Se presenta como las propias palabras del desarrollador, ligeramente editadas para facilitar la lectura, no como una evaluación editorial independiente de PromptQuorum:',
          '"FriedrichAI en realidad empezó casi por accidente. Soy un veterano del QA de software, no un investigador de IA. Me despidieron en 2022 y, cuando por fin empecé a experimentar con IA, era muy novato en el tema. Al principio usaba la IA para ayudarme a crear un juego de cartas bastante sencillo. Eso me llevó cada vez más hondo en la madriguera de la IA local, y siempre me topaba con el mismo problema: la IA local me parecía fascinante, pero instalar, configurar y poner en marcha todo podía ser un proyecto en sí mismo.',
          'Así que FriedrichAI se fue convirtiendo poco a poco en un intento de empaquetar esa experiencia en algo que la gente normal pudiera usar de verdad. La filosofía básica sigue siendo bastante simple: lo instalas, lo ejecutas y hablas con él. Sin cuenta en la nube, sin suscripción a una API para el producto principal, sin seguimiento y sin depender de mis servidores. Literalmente puedes desconectar el ordenador de internet y Friedrich sigue funcionando.',
          'Desde entonces ha crecido bastante. Friedrich ahora puede encargarse de un chat local con memoria local persistente, generación de imágenes, generación de vídeo y audio mediante componentes multimedia opcionales, voz a texto y texto a voz, modelos GGUF aportados por el usuario y búsqueda web opcional para quien la quiera. También estoy trabajando en una integración con MCP para que Friedrich pueda interactuar con aplicaciones como Blender sin que la persona deje de tener el control.',
          'En cuanto a Steam, fue una decisión muy deliberada. Pensaba que Steam estaba muy infrautilizado para el tipo de software que estaba creando. Allí ya hay millones de usuarios de Windows, con un sistema de distribución y actualización en el que ya confían, pero muy poca gente parecía mirar Steam como un lugar donde distribuir software serio de IA local. Para mí, eso parecía menos una limitación y más una oportunidad.',
          'Además quería que FriedrichAI se sintiera como un software que compras y es tuyo, y no como otro servicio de IA que alquilas cada mes. Steam ya ofrece distribución, actualizaciones automáticas, pagos, reembolsos, reseñas de usuarios y una enorme base instalada de usuarios de Windows. Y lo más importante: la gente entiende la transacción: compras algo, lo descargas y se queda en tu biblioteca. GitHub es fantástico para los desarrolladores, pero yo intento específicamente que la IA local sea accesible para personas que no deberían necesitar saber qué es un entorno de Python, un paquete wheel de CUDA o una línea de comandos solo para usarla.',
          'Sin duda hay contrapartidas. Steam se diseñó para juegos, no para aplicaciones de IA, así que he tenido que sortear algunos problemas poco habituales de distribución y empaquetado. La IA local también plantea desafíos de compatibilidad de hardware que una aplicación de escritorio normal no tiene. Pero, en general, sigo pensando que fue la decisión correcta.',
          'A largo plazo, mi objetivo no es simplemente poner una interfaz de chat alrededor de un modelo local. Quiero que FriedrichAI se convierta en un entorno de IA local realmente útil, conservando lo que me llevó a crearlo en un primer momento: la propiedad local, la privacidad, la accesibilidad y que no haga falta que los servidores del desarrollador sigan en pie para siempre para que el software que compraste siga funcionando.',
          'Y una corrección divertida: Friedrich es en realidad un guiño a Friedrich Nietzsche, no a Federico el Grande. La inspiración fue el «mirar al abismo» de Nietzsche, que parecía especialmente apropiado dado que la humanidad ahora parece estar mirando al abismo de la IA."',
        ],
        note: '— Randolph Smith, desarrollador',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: [
          'Ventaja',
          'En el uso real',
          'Limitación / salvedad',
        ],
        rows: [
          {
            Ventaja: 'Pago único y sin cuenta',
            'En el uso real': 'Sin suscripción, registro ni clave de API para el asistente principal.',
            'Limitación / salvedad': 'Código cerrado; la licencia es propietaria.',
          },
          {
            Ventaja: 'Se instala como un juego',
            'En el uso real': 'Steam gestiona el pago, las actualizaciones y una demo gratuita.',
            'Limitación / salvedad': 'Solo Windows y ligada a una cuenta de Steam.',
          },
          {
            Ventaja: 'Memoria local persistente',
            'En el uso real': 'El contexto se conserva entre sesiones en tu propio PC.',
            'Limitación / salvedad': 'La calidad de la memoria no se ha probado aquí.',
          },
          {
            Ventaja: 'Paquetes de imagen, vídeo y audio',
            'En el uso real': 'Generación multimedia sin un servicio en la nube.',
            'Limitación / salvedad': 'Descargas grandes; NVIDIA primero, AMD en beta.',
          },
          {
            Ventaja: 'Versión 1.0 completa',
            'En el uso real': 'Fuera del acceso anticipado desde el 18 de septiembre de 2026.',
            'Limitación / salvedad': 'Solo 14 reseñas públicas en Steam por ahora.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Windows que quieren un asistente offline sin configuración técnica.** El flujo de instalar y hablar de Steam es el objetivo principal del diseño.',
          '**Personas que prefieren pagar una vez antes que suscribirse.** El asistente principal no necesita cuenta ni clave de API.',
          '**Usuarios con una GPU NVIDIA que quieren generación multimedia local.** Los paquetes de imagen, vídeo y audio son complementos gratuitos para ella.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Licencia y código fuente.** No se encontró ningún repositorio público ni licencia de código abierto, por lo que el comportamiento no puede comprobarse con el código.',
          '**Rendimiento y calidad en uso real.** PromptQuorum no ejecutó la app, así que no se evalúan la velocidad, la calidad de la memoria ni los resultados multimedia.',
          '**Base de instalaciones.** Steam no publica cifras de ventas, por lo que el número de usuarios de pago no está confirmado de forma independiente.',
          '**Integración con MCP y Blender.** El desarrollador dice que está en curso; no se encontró documentación pública al respecto.',
          '**No es para usuarios de Mac, Linux ni móvil.** Solo figura Windows 10/11.',
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
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / Apache 2.0 (variante)',
            'Diferencia clave': 'Chat de escritorio de código abierto con MCP y servidor de API local',
          },
          {
            App: '[GPT4All](/es/power-local-llm/gpt4all-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'App de escritorio de código abierto con chat sobre documentos locales',
          },
          {
            App: '[LM Studio](/es/power-local-llm/lm-studio-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / propietaria',
            'Diferencia clave': 'Ejecutor centrado en descubrir modelos, con servidor local',
          },
          {
            App: '[HilbertRaum](/es/power-local-llm/hilbertraum-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Precio / licencia': 'Gratis / GPL-3.0',
            'Diferencia clave': 'Espacio de trabajo portátil, sin instalación, con preguntas sobre documentos',
          },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿FriedrichAI es de código abierto?',
            a: 'No. Steam muestra un aviso de copyright propietario y no se encontró ningún repositorio de código público.',
          },
          {
            q: '¿Necesito una suscripción o una cuenta?',
            a: 'No. La página de Steam indica que el asistente principal no requiere suscripción, cuenta ni clave de API; sí necesitas una cuenta de Steam para comprarla.',
          },
          {
            q: '¿Puedo usar mis propios modelos?',
            a: 'Sí, los modelos GGUF compatibles se pueden colocar en el espacio de trabajo local de modelos, buscar y cambiar mediante el Model Manager. Cada modelo tiene necesidades de RAM y VRAM muy distintas.',
          },
          {
            q: '¿Funciona en Mac o Linux?',
            a: 'No, según la página de Steam, que lista solo Windows 10/11 (64 bits).',
          },
          {
            q: '¿Puedo probarla antes de comprar?',
            a: 'Sí. Existe una demo gratuita como entrada aparte de Steam; es una instantánea congelada de compatibilidad y no una prueba por tiempo limitado, y puede ir más lenta que la versión completa.',
          },
          {
            q: '¿Funciona con una tarjeta gráfica AMD?',
            a: 'La compatibilidad con AMD es una compilación aparte compatible con Radeon en beta, y la generación multimedia en AMD se describe como aún en desarrollo.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'FriedrichAI es un intento notable de ofrecer la IA local como una aplicación de Windows de pago único, con memoria local, voz, herramientas de proyecto y paquetes multimedia opcionales en una sola instalación. En contra, el código es cerrado, la base de reseñas de Steam es de solo 14 reseñas, la mejor vía multimedia es exclusiva de NVIDIA y nada de esto se ha probado de forma práctica. Encaja con quienes usan Windows y quieren un asistente offline ya empaquetado y aceptan esas condiciones; quienes quieran código auditable pueden comparar [Jan](/es/power-local-llm/jan-review) o [GPT4All](/es/power-local-llm/gpt4all-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[FriedrichAI: Offline AI en Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) — precio, requisitos, funciones, idiomas, demo y reseñas, consultados el 9 de octubre de 2026.',
          '[Noticias de Steam sobre FriedrichAI](https://store.steampowered.com/news/app/4111530) — la publicación «FriedrichAI 1.0 Is Here» y las notas de parches posteriores, consultadas el 9 de octubre de 2026.',
          '[FriedrichAI Text To Image Pack](https://store.steampowered.com/app/4702720/), [Video Generation](https://store.steampowered.com/app/4765280/) y [Audio Generation](https://store.steampowered.com/app/4765290/) — los paquetes multimedia gratuitos.',
          '[FriedrichAI en itch.io](https://rdub77.itch.io/friedrichai) — la ficha secundaria del desarrollador.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de Jan](/es/power-local-llm/jan-review) — una app de chat de escritorio gratuita y de código abierto.',
          '[Análisis de GPT4All](/es/power-local-llm/gpt4all-review) — una app de escritorio con licencia MIT y chat sobre documentos.',
          '[Análisis de LM Studio](/es/power-local-llm/lm-studio-review) — un ejecutor de escritorio centrado en descubrir modelos.',
          '[Análisis de HilbertRaum](/es/power-local-llm/hilbertraum-review) — un espacio de trabajo offline portátil y sin instalación.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/friedrichai-review-hero-fr.webp',
    title: 'Avis FriedrichAI : assistant IA hors ligne pour Windows, vendu sur Steam',
    seoTitle: 'Avis FriedrichAI : IA hors ligne pour Windows sur Steam',
    intro: 'FriedrichAI est une application de bureau Windows du développeur indépendant Randolph Smith, qui exécute un modèle de langage sur votre propre PC et y ajoute une mémoire locale persistante, des conversations enregistrées, un tableau de projet, la synthèse et la reconnaissance vocales en local, ainsi que des packs facultatifs de génération d\'images, de vidéo et d\'audio. Elle est vendue sur [Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) plutôt que via GitHub ou une boutique d\'applications, et la version 1.0 est sortie de l\'accès anticipé le 18 septembre 2026. Le code source n\'est pas publié. Cet avis se fonde sur la page Steam, son fil d\'actualités et les pages de DLC, consultés le 9 octobre 2026, ainsi que sur un commentaire du développeur ; PromptQuorum n\'a pas testé l\'application en pratique.',
    metaDescription: 'Avis FriedrichAI : assistant IA hors ligne payant pour Windows, vendu sur Steam, avec mémoire locale, packs image/vidéo/audio, sans compte. Matériel, confidentialité, limites.',
    twitterDescription: 'Avis FriedrichAI : un assistant IA hors ligne pour Windows, acheté une seule fois sur Steam, avec mémoire locale et packs facultatifs d\'images, de vidéo et d\'audio. Code fermé, Windows uniquement.',
    audience: 'Utilisateurs de Windows qui veulent un assistant IA hors ligne, acheté une fois, sans configuration Python ni ligne de commande, et qui ont besoin de savoir ce que les sources confirment et ce qui n\'a pas pu être vérifié.',
    readTime: '9 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis FriedrichAI',
    targetKeywords: [
      'avis friedrichai',
      'friedrichai ia hors ligne',
      'friedrichai steam',
      'assistant ia hors ligne windows steam',
      'application ia locale sans abonnement windows',
      'ia locale avec mémoire windows',
      'friedrichai vs lm studio',
    ],
    current_models_mentioned: [
      'Qwen',
      'GGUF models',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA RTX',
      'AMD Radeon',
      'Ryzen 7 5700X',
    ],
    leadAnswerBlock: '**FriedrichAI (version 1.0 au 9 octobre 2026) est un assistant IA réservé à Windows, que l\'on achète une seule fois sur Steam et qui exécute un modèle local, sans compte, sans abonnement et sans clé API obligatoire.** Elle s\'adresse à ceux qui préfèrent installer une application plutôt que monter eux-mêmes une pile d\'IA locale, et ajoute des packs facultatifs d\'images, de vidéo et d\'audio. Le code est fermé, la base d\'avis sur Steam reste très réduite, et la voie multimédia la mieux prise en charge est celle de NVIDIA.',
    quickAnswerTop: {
      fr: {
        question: 'FriedrichAI fonctionne-t-elle sans connexion Internet ?',
        answer: 'Selon la page Steam et le développeur, oui : l\'assistant de base, la mémoire, les conversations enregistrées et la synthèse vocale s\'exécutent en local après l\'installation. La recherche web est facultative et désactivée tant que vous ne la configurez pas, et les packs multimédias facultatifs sont des téléchargements distincts.',
        bullets: [
          'Vendue sur Steam en achat unique ; une démo gratuite et trois packs multimédias gratuits existent sous forme d\'entrées Steam distinctes.',
          'Windows 10/11 uniquement, avec un repli sur le CPU pour le chat et un GPU NVIDIA recommandé.',
          'La version 1.0 a été annoncée le 18 septembre 2026, après un accès anticipé commencé le 30 avril 2026.',
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
        label: 'Qu\'est-ce que FriedrichAI ?',
        anchor: 'what-is-friedrichai',
      },
      {
        label: 'Pourquoi le développeur a choisi Steam',
        anchor: 'why-steam',
      },
      {
        label: 'Où l\'obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Pour bien démarrer',
        anchor: 'getting-started',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Configuration requise',
        anchor: 'hardware-requirements',
      },
      {
        label: 'Confidentialité et fonctions en ligne',
        anchor: 'privacy',
      },
      {
        label: 'Le mot du développeur',
        anchor: 'from-the-maker',
      },
      {
        label: 'Compromis : avantages et limites',
        anchor: 'tradeoffs',
      },
      {
        label: 'À qui elle convient',
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
        label: 'Lectures complémentaires',
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
            text: 'FriedrichAI est un assistant IA Windows à code fermé, vendu sur Steam par un développeur indépendant, qui exécute un modèle local avec mémoire persistante et packs facultatifs d\'images, de vidéo et d\'audio, sans compte.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'achetez sur Steam comme un jeu, vous l\'installez et vous lui parlez ; le chat, la mémoire et la voix continuent de fonctionner réseau coupé, tandis que la génération multimédia plus lourde exige une carte graphique puissante.',
          },
        ],
        items: [
          'Développeur : Randolph Smith, indiqué à la fois comme développeur et éditeur sur Steam ; il se décrit comme un professionnel de l\'assurance qualité logicielle plutôt que comme un chercheur en IA.',
          'Prix et licence : $9.99 USD en achat unique sur Steam, sans abonnement ; propriétaire, aucun dépôt de code public n\'a été trouvé.',
          'Périmètre : chat local, mémoire, recherche dans les conversations enregistrées, tableau de projet À faire/En cours/Bloqué/Terminé, Model Manager pour les modèles GGUF et recherche web facultative.',
          'Indicateurs au 9 octobre 2026 : 13 avis d\'utilisateurs Steam positifs sur 14, version complète le 18 septembre 2026, dernier correctif le 6 octobre 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur la page Steam, son fil d\'actualités et les pages de DLC, consultés le 9 octobre 2026, ainsi que sur un commentaire du développeur. PromptQuorum n\'a ni testé ni évalué par benchmark l\'application.',
          },
        ],
      },
      overview: {
        id: 'what-is-friedrichai',
        title: 'Qu\'est-ce que FriedrichAI ?',
        content: [
          '**FriedrichAI est un espace de travail IA axé sur le hors ligne pour Windows, qui réunit dans une seule application installable un exécuteur de modèles locaux, une mémoire et des outils de projet.** D\'après sa [page Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), l\'assistant de base n\'exige ni compte cloud ni clé API, et les conversations, la mémoire et les données de projet restent sur le PC.',
          'Selon le développeur, le nom rend hommage au philosophe Friedrich Nietzsche, et non à Frédéric le Grand. Dans le commentaire du développeur plus bas, Randolph Smith décrit l\'application comme destinée à des personnes qui ne devraient pas avoir besoin de savoir ce qu\'est un environnement Python ou une roue CUDA.',
        ],
      },
      whySteam: {
        id: 'why-steam',
        title: 'Pourquoi le développeur a choisi Steam',
        content: [
          '**Randolph Smith a choisi Steam délibérément : il voulait que l\'IA locale ressemble à un logiciel que l\'on achète et que l\'on possède, et Steam offre déjà aux utilisateurs de Windows le système de paiement, de mises à jour et de remboursement en lequel ils ont confiance.** FriedrichAI est un cas inhabituel de logiciel d\'IA locale sérieux vendu là plutôt que sur GitHub. Ses raisons, résumées à partir du commentaire du développeur ci-dessous :',
        ],
        items: [
          '**Un public sous-exploité.** Des millions d\'utilisateurs de Windows sont déjà sur Steam, avec un système de distribution et de mises à jour en lequel ils ont confiance, mais peu de développeurs y voient un lieu pour des logiciels d\'IA locale sérieux.',
          '**Acheter et posséder, pas louer.** Il voulait un achat unique qui reste dans la bibliothèque, plutôt qu\'un énième service d\'IA loué chaque mois. Steam fournit les paiements, les mises à jour automatiques, les remboursements et les avis d\'utilisateurs.',
          '**Pourquoi pas GitHub.** GitHub convient aux développeurs, dit-il, mais FriedrichAI vise des personnes qui ne devraient pas avoir besoin de savoir ce qu\'est un environnement Python, une roue CUDA ou une ligne de commande.',
          '**Aucune dépendance à ses serveurs.** Le logiciel doit continuer à fonctionner même si les serveurs du développeur disparaissent.',
        ],
        callouts: [
          {
            type: 'insight',
            text: 'Le développeur nomme lui-même le coût : Steam a été conçu pour les jeux, il a donc dû contourner des problèmes inhabituels de distribution et d\'empaquetage, et l\'IA locale ajoute des difficultés de prise en charge du matériel qu\'une application de bureau classique ne connaît pas. Ce qu\'apporte Steam est visible sur la fiche : une démo gratuite sous forme d\'entrée distincte, des packs gratuits en DLC et des avis publics d\'utilisateurs.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l\'obtenir',
        content: [
          '**FriedrichAI est distribuée via Steam pour Windows 10/11 (64 bits) au prix de $9.99 USD ; l\'application de base dispose d\'une démo gratuite, et les packs multimédias sont des extensions gratuites.**',
        ],
        columns: [
          'Élément',
          'Où l\'obtenir',
        ],
        rows: [
          {
            'Élément': 'Version complète',
            'Où l\'obtenir': '[Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), $9.99 USD',
          },
          {
            'Élément': 'Démo gratuite',
            'Où l\'obtenir': '[Démo Steam](https://store.steampowered.com/app/4861210/)',
          },
          {
            'Élément': 'Packs multimédias',
            'Où l\'obtenir': 'Extensions Steam gratuites : image, vidéo, audio',
          },
          {
            'Élément': 'Site web',
            'Où l\'obtenir': '[Page Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) (aucun site distinct trouvé)',
          },
          {
            'Élément': 'Autre fiche',
            'Où l\'obtenir': '[Page itch.io](https://rdub77.itch.io/friedrichai)',
          },
          {
            'Élément': 'Code source',
            'Où l\'obtenir': 'Non publié',
          },
        ],
        note: 'Cette page est un complément à l\'entrée de l\'application dans le [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Version vérifiée le 9 octobre 2026 : 1.0, d\'après l\'article d\'actualités Steam « FriedrichAI 1.0 Is Here ». Aucun site produit dédié ni page de politique de confidentialité n\'a été trouvé ; la page Steam est la fiche officielle.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**La page Steam recommande de tester par étapes ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Essayer d\'abord la démo gratuite',
            whyItMatters: 'La démo est un instantané figé destiné à vérifier la compatibilité, et non une version d\'essai ; le développeur demande de ne pas acheter la version complète si elle ne fonctionne pas bien.',
          },
          {
            title: 'Installer l\'assistant de base et vérifier que le chat fonctionne',
            whyItMatters: 'La page Steam conseille de vérifier le chat local avant d\'ajouter des packs multimédias ou de changer de modèle.',
          },
          {
            title: 'N\'ajouter les packs facultatifs que si votre matériel le permet',
            whyItMatters: 'La génération d\'images, de vidéo et d\'audio exige de gros téléchargements supplémentaires et bien plus de puissance GPU que le chat.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la page Steam, des articles d\'actualités ou des fiches de DLC ; aucun n\'a été testé de façon indépendante.**',
        ],
        items: [
          '**Chat et mémoire.** Chat local avec mémoire persistante, conversations enregistrées que l\'on peut rouvrir et rechercher, et une interface de conversation simple qui n\'exige plus de commandes slash.',
          '**Outils de projet.** Un Project Board (À faire, En cours, Bloqué, Terminé), Project Chronicle pour conserver le contexte du projet, et l\'import de fichiers texte et Markdown locaux.',
          '**Modèles.** Un modèle par défaut fourni, ainsi qu\'un Model Manager qui détecte les modèles GGUF fournis par l\'utilisateur et permet de passer de l\'un à l\'autre. La page Steam indique que l\'application utilise des modèles Qwen sous licence Apache 2.0.',
          '**Voix.** Synthèse vocale locale que l\'on peut désactiver, et reconnaissance vocale locale via un bouton de microphone, ajoutée lors d\'une mise à jour d\'août 2026.',
          '**Multimédia facultatif.** Génération d\'images (avec variations), texte vers vidéo, et génération d\'audio et de musique sous forme de packs gratuits distincts.',
          '**Interface.** Huit langues d\'interface : anglais, ukrainien, allemand, français, espagnol, portugais brésilien, coréen et japonais.',
        ],
        note: 'La page Steam n\'indique une prise en charge audio complète que pour l\'anglais ; les fonctions vocales dans les sept autres langues sont donc à vérifier dans la démo.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Configuration requise',
        content: [
          '**Steam indique comme minimum Windows 10/11, 16 GB de RAM et 20 GB d\'espace de stockage, avec un GPU NVIDIA recommandé et un repli sur le CPU pour le chat.** La configuration recommandée est un processeur de classe Ryzen 7 5700X, 32 GB de RAM et une carte NVIDIA RTX avec 10 GB ou plus de VRAM.',
          'La génération multimédia est bien plus lourde que le chat : la page recommande 12 GB ou plus de VRAM pour la vidéo et 16 GB ou plus pour des clips plus longs, et qualifie d\'expérimentaux les flux de travail vidéo, image vers vidéo et morphing. NVIDIA est la voie multimédia la mieux prise en charge ; la prise en charge d\'AMD passe par une version distincte compatible Radeon, en bêta, et un correctif de septembre 2026 a ajouté les anciens processeurs Intel. La page avertit aussi les utilisateurs de Norton de mettre d\'abord à jour leur antivirus, car d\'anciennes définitions peuvent signaler certaines parties de l\'application.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et fonctions en ligne',
        content: [
          '**La page Steam indique que les conversations, la mémoire, les conversations enregistrées et les données de projet restent sur la machine de l\'utilisateur, et qu\'aucune clé API n\'est nécessaire pour l\'assistant de base.** La synthèse vocale et la reconnaissance vocale sont décrites comme s\'exécutant en local.',
          'La recherche web facultative fait exception : elle est désactivée tant qu\'elle n\'est pas configurée et peut exiger le compte ou la clé API de votre propre fournisseur. Le code source n\'étant pas publié, rien de tout cela ne peut être vérifié dans le code, et ce sont des déclarations du développeur, et non des résultats d\'audit.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n\'a pas inspecté le trafic réseau de l\'application. Quiconque traite des données confidentielles devrait vérifier le comportement avec la recherche web désactivée et le réseau déconnecté.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Le mot du développeur',
        content: [
          'Randolph Smith, le développeur indépendant de FriedrichAI, a partagé ce qui suit au sujet de l\'application et des raisons pour lesquelles il l\'a créée et a choisi Steam. Ce texte est présenté comme les propres mots du développeur, légèrement retouchés pour la lisibilité, et non comme une évaluation éditoriale indépendante de PromptQuorum :',
          '"FriedrichAI est né presque par hasard. Je travaille depuis longtemps dans l\'assurance qualité logicielle, je ne suis pas chercheur en IA. J\'ai été licencié en 2022 et, quand j\'ai fini par commencer à expérimenter avec l\'IA, j\'étais complètement novice. Au départ, j\'utilisais l\'IA pour m\'aider à créer un jeu de cartes assez simple. Cela m\'a entraîné de plus en plus loin dans le terrier de l\'IA locale, et je butais toujours sur le même problème : l\'IA locale était incroyablement intéressante, mais tout installer, configurer et faire fonctionner pouvait être un projet à part entière.',
          'FriedrichAI est donc peu à peu devenu une tentative d\'empaqueter cette expérience dans quelque chose que des gens ordinaires pourraient vraiment utiliser. La philosophie de base reste assez simple : on l\'installe, on la lance et on lui parle. Pas de compte cloud, pas d\'abonnement à une API nécessaire pour le produit de base, pas de suivi, et aucune dépendance envers mes serveurs. On peut littéralement déconnecter l\'ordinateur d\'Internet et Friedrich continue de fonctionner.',
          'Il a beaucoup évolué depuis. Friedrich sait désormais gérer le chat local avec une mémoire locale persistante, la génération d\'images, la génération de vidéo et d\'audio via des composants multimédias facultatifs, la reconnaissance vocale et la synthèse vocale, les modèles GGUF fournis par l\'utilisateur, ainsi que la recherche web facultative pour ceux qui la souhaitent. Je travaille aussi sur une intégration MCP afin que Friedrich puisse interagir avec des applications comme Blender, tout en laissant l\'humain aux commandes.',
          'Quant à Steam, ce choix était très délibéré. Je trouvais que Steam était largement sous-exploité pour le type de logiciel que je créais. Des millions d\'utilisateurs de Windows s\'y trouvent déjà, avec un système de distribution et de mises à jour en lequel ils ont confiance, mais très peu de gens semblaient voir Steam comme un endroit où distribuer de vrais logiciels d\'IA locale. Pour moi, c\'était moins une limite qu\'une opportunité.',
          'Je voulais aussi que FriedrichAI soit un logiciel que l\'on achète et que l\'on possède, plutôt qu\'un énième service d\'IA que l\'on loue chaque mois. Steam offre déjà la distribution, les mises à jour automatiques, les paiements, les remboursements, les avis d\'utilisateurs et un énorme public installé sous Windows. Surtout, les gens comprennent la transaction : on achète quelque chose, on le télécharge, et cela reste dans sa bibliothèque. GitHub est formidable pour les développeurs, mais j\'essaie précisément de rendre l\'IA locale accessible à des personnes qui ne devraient pas avoir besoin de savoir ce qu\'est un environnement Python, une roue CUDA ou une ligne de commande pour s\'en servir.',
          'Il y a bien sûr des compromis. Steam a été conçu pour les jeux, pas pour les applications d\'IA, et j\'ai donc dû contourner des problèmes inhabituels de distribution et d\'empaquetage. L\'IA locale pose aussi des difficultés de prise en charge du matériel qu\'une application de bureau classique ne connaît pas. Mais dans l\'ensemble, je pense toujours que c\'était le bon choix.',
          'À long terme, mon objectif n\'est pas simplement de mettre une interface de chat autour d\'un modèle local. Je veux que FriedrichAI devienne un véritable environnement d\'IA locale utile, tout en conservant ce qui m\'a poussé à le créer au départ : la propriété locale, la confidentialité, l\'accessibilité, et aucune obligation que les serveurs du développeur restent en ligne pour toujours afin que le logiciel que vous avez acheté continue de fonctionner.',
          'Et une petite correction amusante : Friedrich est en fait un clin d\'œil à Friedrich Nietzsche, pas à Frédéric le Grand. L\'inspiration vient du « regard dans l\'abîme » de Nietzsche, qui m\'a semblé particulièrement approprié à l\'heure où l\'humanité semble contempler l\'abîme de l\'IA."',
        ],
        note: '— Randolph Smith, développeur',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Compromis : avantages et limites',
        columns: [
          'Avantage',
          'En pratique',
          'Limite / réserve',
        ],
        rows: [
          {
            Avantage: 'Achat unique, sans compte',
            'En pratique': 'Ni abonnement, ni inscription, ni clé API pour l\'assistant de base.',
            'Limite / réserve': 'Code fermé ; la licence est propriétaire.',
          },
          {
            Avantage: 'S\'installe comme un jeu',
            'En pratique': 'Steam gère le paiement, les mises à jour et une démo gratuite.',
            'Limite / réserve': 'Windows uniquement, et lié à un compte Steam.',
          },
          {
            Avantage: 'Mémoire locale persistante',
            'En pratique': 'Le contexte se conserve d\'une session à l\'autre sur votre PC.',
            'Limite / réserve': 'La qualité de la mémoire n\'a pas été testée ici.',
          },
          {
            Avantage: 'Packs image, vidéo, audio',
            'En pratique': 'Génération multimédia sans service cloud.',
            'Limite / réserve': 'Gros téléchargements ; NVIDIA d\'abord, AMD en bêta.',
          },
          {
            Avantage: 'Version 1.0 complète',
            'En pratique': 'Sortie de l\'accès anticipé depuis le 18 septembre 2026.',
            'Limite / réserve': 'Seulement 14 avis publics sur Steam à ce jour.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle convient',
        items: [
          '**Les utilisateurs de Windows qui veulent un assistant hors ligne sans configuration technique.** Le parcours Steam « on installe et on parle » est l\'objectif principal de conception.',
          '**Ceux qui préfèrent payer une fois plutôt que s\'abonner.** L\'assistant de base n\'exige ni compte ni clé API.',
          '**Les utilisateurs d\'un GPU NVIDIA qui veulent générer des médias en local.** Les packs image, vidéo et audio sont des extensions gratuites pour cela.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Licence et code source.** Aucun dépôt public ni licence open source n\'a été trouvé ; le comportement ne peut donc pas être vérifié dans le code.',
          '**Performances et qualité en conditions réelles.** PromptQuorum n\'a pas exécuté l\'application : la vitesse, la qualité de la mémoire et les résultats multimédias ne sont donc pas évalués.',
          '**Base d\'utilisateurs.** Steam ne publie pas de chiffres de ventes ; le nombre d\'utilisateurs payants n\'est donc pas confirmé de façon indépendante.',
          '**Intégration MCP et Blender.** Le développeur indique qu\'elle est en cours ; aucune documentation publique à ce sujet n\'a été trouvée.',
          '**Pas pour les utilisateurs de Mac, de Linux ou de mobiles.** Seul Windows 10/11 est indiqué.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'Application',
          'Plateformes',
          'Prix / licence',
          'Différence clé',
        ],
        rows: [
          {
            Application: '[Jan](/fr/power-local-llm/jan-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuite / Apache 2.0 (variante)',
            'Différence clé': 'Chat de bureau open source avec MCP et serveur API local',
          },
          {
            Application: '[GPT4All](/fr/power-local-llm/gpt4all-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuite / MIT',
            'Différence clé': 'Application de bureau open source avec chat sur documents locaux',
          },
          {
            Application: '[LM Studio](/fr/power-local-llm/lm-studio-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuite / propriétaire',
            'Différence clé': 'Exécuteur centré sur la découverte de modèles, avec serveur local',
          },
          {
            Application: '[HilbertRaum](/fr/power-local-llm/hilbertraum-review)',
            Plateformes: 'Windows, macOS, Linux',
            'Prix / licence': 'Gratuite / GPL-3.0',
            'Différence clé': 'Espace de travail portable, sans installation, avec questions-réponses sur documents',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre fiche.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'FriedrichAI est-elle open source ?',
            a: 'Non. Steam affiche une mention de droits d\'auteur propriétaire, et aucun dépôt de code public n\'a été trouvé.',
          },
          {
            q: 'Faut-il un abonnement ou un compte ?',
            a: 'Non. La page Steam indique qu\'il n\'y a ni abonnement, ni compte, ni clé API pour l\'assistant de base ; en revanche, il faut un compte Steam pour l\'acheter.',
          },
          {
            q: 'Puis-je utiliser mes propres modèles ?',
            a: 'Oui, les modèles GGUF pris en charge peuvent être placés dans l\'espace de travail local des modèles, détectés et permutés via le Model Manager. Les besoins en RAM et en VRAM varient beaucoup d\'un modèle à l\'autre.',
          },
          {
            q: 'Fonctionne-t-elle sur Mac ou Linux ?',
            a: 'Pas d\'après la page Steam, qui n\'indique que Windows 10/11 (64 bits).',
          },
          {
            q: 'Puis-je l\'essayer avant d\'acheter ?',
            a: 'Oui. Une démo gratuite existe sous forme d\'entrée Steam distincte ; c\'est un instantané figé destiné à vérifier la compatibilité, et non une version d\'essai limitée dans le temps, et elle peut être plus lente que la version complète.',
          },
          {
            q: 'Fonctionne-t-elle avec une carte graphique AMD ?',
            a: 'La prise en charge d\'AMD passe par une version distincte compatible Radeon, en bêta, et la génération multimédia sur AMD est décrite comme encore en développement.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'FriedrichAI est une tentative notable de proposer l\'IA locale sous forme d\'application Windows achetée une seule fois, avec mémoire locale, voix, outils de projet et packs multimédias facultatifs dans une seule installation. En face, le code est fermé, la base d\'avis Steam ne compte que 14 avis, la meilleure voie multimédia est réservée à NVIDIA, et rien ici n\'a été testé en pratique. Elle convient aux utilisateurs de Windows qui veulent un assistant hors ligne tout prêt et acceptent ces conditions ; ceux qui veulent un code vérifiable peuvent comparer [Jan](/fr/power-local-llm/jan-review) ou [GPT4All](/fr/power-local-llm/gpt4all-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[FriedrichAI: Offline AI sur Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) — prix, configuration requise, fonctions, langues, démo et avis, consultés le 9 octobre 2026.',
          '[Actualités Steam de FriedrichAI](https://store.steampowered.com/news/app/4111530) — l\'article « FriedrichAI 1.0 Is Here » et les notes de correctifs suivantes, consultés le 9 octobre 2026.',
          '[FriedrichAI Text To Image Pack](https://store.steampowered.com/app/4702720/), [Video Generation](https://store.steampowered.com/app/4765280/) et [Audio Generation](https://store.steampowered.com/app/4765290/) — les packs multimédias gratuits.',
          '[FriedrichAI sur itch.io](https://rdub77.itch.io/friedrichai) — la fiche secondaire du développeur.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Jan](/fr/power-local-llm/jan-review) — une application de chat de bureau gratuite et open source.',
          '[Avis GPT4All](/fr/power-local-llm/gpt4all-review) — une application de bureau sous licence MIT avec chat sur documents.',
          '[Avis LM Studio](/fr/power-local-llm/lm-studio-review) — un exécuteur de bureau centré sur la découverte de modèles.',
          '[Avis HilbertRaum](/fr/power-local-llm/hilbertraum-review) — un espace de travail hors ligne portable, sans installation.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/friedrichai-review-hero-ja.webp',
    title: 'FriedrichAIレビュー:Steamで販売されるオフラインのWindows向けAIアシスタント',
    seoTitle: 'FriedrichAIレビュー:SteamのオフラインWindows向けAI',
    intro: 'FriedrichAIは、個人開発者のRandolph Smith氏によるWindowsデスクトップアプリで、お使いのPC上で言語モデルを動かし、永続的なローカルメモリ、保存されたチャット、プロジェクトボード、ローカルの音声読み上げと音声入力、そしてオプションの画像・動画・音声生成パックを加えています。GitHubやアプリストアではなく[Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI)で販売されており、バージョン1.0は2026年9月18日にアーリーアクセスを終了しました。ソースコードは公開されていません。本レビューは、2026年10月9日に確認したSteamのストアページ、ニュースフィード、DLCページと、開発者のコメントに基づいており、PromptQuorumはアプリを実際には試していません。',
    metaDescription: 'FriedrichAIレビュー:Steamで販売される、Windows向けの有料オフラインAIアシスタント。ローカルメモリ、画像・動画・音声パック、アカウント不要。ハードウェア、プライバシー、制約を解説します。',
    twitterDescription: 'FriedrichAIレビュー:Steamで一度購入すれば使える、ローカルメモリとオプションの画像・動画・音声パックを備えたオフラインのWindows向けAIアシスタント。クローズドソースで、Windows専用。',
    audience: 'PythonやコマンドラインのセットアップなしでWindowsで使える、買い切りのオフラインAIアシスタントを求める方で、情報源が何を確認しているのか、確認できなかった点は何かを知りたい方向け。',
    readTime: '9分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'FriedrichAI レビュー',
    targetKeywords: [
      'friedrichai レビュー',
      'friedrichai オフライン ai',
      'friedrichai steam',
      'オフライン aiアシスタント windows steam',
      'サブスクなし ローカルaiアプリ windows',
      'メモリ付き ローカルai windows',
      'friedrichai lm studio 比較',
    ],
    current_models_mentioned: [
      'Qwen',
      'GGUF models',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA RTX',
      'AMD Radeon',
      'Ryzen 7 5700X',
    ],
    leadAnswerBlock: '**FriedrichAI(2026年10月9日時点のバージョン1.0)は、Steamで一度購入すれば使えるWindows専用のAIアシスタントで、ローカルモデルを動かし、アカウントもサブスクリプションもAPIキーも必須ではありません。** ローカルAIの環境を自分で組み上げるより、アプリをインストールしたい人向けで、オプションの画像・動画・音声パックも加わります。コードはクローズドで、Steamのレビュー数はまだごくわずかであり、メディア生成で最も対応が進んでいるのはNVIDIAの経路です。',
    quickAnswerTop: {
      ja: {
        question: 'FriedrichAIはインターネット接続なしで動きますか?',
        answer: 'Steamのページと開発者によれば、はい。基本のアシスタント、メモリ、保存されたチャット、音声読み上げは、インストール後にローカルで動作します。Web検索はオプションで、設定しない限りオフであり、オプションのメディアパックは別のダウンロードです。',
        bullets: [
          'Steamで買い切りとして販売。無料のデモと3つの無料メディアパックは、別々のSteamの項目として存在します。',
          'Windows 10/11専用で、チャットにはCPUへのフォールバックがあり、NVIDIAのGPUが推奨されています。',
          'バージョン1.0は、2026年4月30日に始まったアーリーアクセスを経て、2026年9月18日に発表されました。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'FriedrichAIとは?',
        anchor: 'what-is-friedrichai',
      },
      {
        label: '開発者がSteamを選んだ理由',
        anchor: 'why-steam',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '始め方',
        anchor: 'getting-started',
      },
      {
        label: '情報源で確認できる機能',
        anchor: 'key-features',
      },
      {
        label: 'ハードウェア要件',
        anchor: 'hardware-requirements',
      },
      {
        label: 'プライバシーとオンライン機能',
        anchor: 'privacy',
      },
      {
        label: '開発者から',
        anchor: 'from-the-maker',
      },
      {
        label: 'トレードオフ:利点と制約',
        anchor: 'tradeoffs',
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
        label: '競合と代替アプリ',
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
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'FriedrichAIは、個人開発者がSteamで販売するクローズドソースのWindows向けAIアシスタントで、永続的なメモリとオプションの画像・動画・音声パックを備えたローカルモデルを動かし、アカウントは不要である。',
          },
          {
            type: 'plain-terms',
            text: 'ゲームのようにSteamで購入してインストールし、話しかけて使います。チャット、メモリ、音声の機能はネットワークをオフにしても動き続けますが、負荷の大きいメディア生成には高性能なグラフィックスカードが必要です。',
          },
        ],
        items: [
          '開発者:Randolph Smith氏。Steamでは開発元と販売元の両方に表記されており、AIの研究者ではなく、ソフトウェアQAの専門家だと自称している。',
          '料金とライセンス:Steamで買い切りの$9.99 USDで、サブスクリプションなし。プロプライエタリで、公開ソースリポジトリは見つからなかった。',
          '機能の範囲:ローカルチャット、メモリ、保存したチャットの検索、Todo/Doing/Blocked/Doneのプロジェクトボード、GGUFモデル用のModel Manager、オプションのWeb検索。',
          '2026年10月9日の確認時点の指標:Steamのユーザーレビュー14件のうち13件が好評、2026年9月18日に正式リリース、最新パッチは2026年10月6日。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月9日に確認したSteamのストアページ、ニュースフィード、DLCページと、開発者のコメントに基づいています。PromptQuorumはアプリのテストやベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-friedrichai',
        title: 'FriedrichAIとは?',
        content: [
          '**FriedrichAIは、ローカルのモデル実行環境、メモリ、プロジェクトツールをインストール可能な1つのアプリにまとめた、オフライン優先のWindows向けAIワークスペースです。** [Steamのページ](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI)によれば、コアのアシスタントにクラウドのアカウントもAPIキーも不要で、チャット、メモリ、プロジェクトのデータはPC上に残ります。',
          '開発者によれば、名前は「フリードリヒ大王」ではなく、哲学者Friedrich Nietzscheにちなんだものです。Randolph Smith氏は、後述の開発者のコメントの中で、このアプリはPython環境やCUDA wheelが何かを知る必要のない人向けだと説明しています。',
        ],
      },
      whySteam: {
        id: 'why-steam',
        title: '開発者がSteamを選んだ理由',
        content: [
          '**Randolph Smithは意図的にSteamを選びました。ローカルAIを「買って自分のものにするソフトウェア」と感じてもらいたかったからであり、Steamにはすでに、Windowsユーザーが信頼する決済・アップデート・返金の仕組みがあります。** FriedrichAIは、本格的なローカルAIソフトウェアがGitHubではなくSteamで販売されている珍しい例です。以下の開発者コメントから要約した、彼の理由です。',
        ],
        items: [
          '**十分に活用されていない層。** すでに何百万人ものWindowsユーザーが、信頼する配布・アップデートの仕組みとともにSteamにいますが、本格的なローカルAIソフトウェアの拠点としてSteamを考える開発者はほとんどいません。',
          '**借りるのではなく、買って所有する。** 毎月借りる別のAIサービスではなく、ライブラリに残る買い切りを望みました。Steamは決済、自動アップデート、返金、ユーザーレビューを提供します。',
          '**GitHubを選ばなかった理由。** GitHubは開発者に向いているが、FriedrichAIが対象とするのはPython環境やCUDA wheel、コマンドラインが何かを知らなくてもよいはずの人々だ、と彼は述べています。',
          '**彼のサーバーに依存しない。** 開発者のサーバーがなくなっても、ソフトウェアは動き続けるべきだとしています。',
        ],
        callouts: [
          {
            type: 'insight',
            text: '開発者自身がコストにも触れています。Steamはゲームのために作られているため、配布やパッケージングで珍しい問題を回避する工夫が必要で、ローカルAIには通常のデスクトップアプリケーションにはないハードウェア対応の難しさも加わるといいます。Steamが提供するものは掲載から見て取れます。別項目としての無料デモ、DLCとしての無料アドオンパック、そして公開のユーザーレビューです。',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**FriedrichAIはSteam経由でWindows 10/11(64ビット)向けに$9.99 USDで配布されており、基本アプリには無料のデモがあり、メディアパックは無料のアドオンです。**',
        ],
        columns: [
          '項目',
          '入手先',
        ],
        rows: [
          {
            '項目': '製品版',
            '入手先': '[Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI)、$9.99 USD',
          },
          {
            '項目': '無料デモ',
            '入手先': '[Steamのデモ](https://store.steampowered.com/app/4861210/)',
          },
          {
            '項目': 'メディアパック',
            '入手先': 'Steamの無料アドオン:画像、動画、音声',
          },
          {
            '項目': 'ウェブサイト',
            '入手先': '[Steamのストアページ](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI)(独立したサイトは見つからず)',
          },
          {
            '項目': 'その他の掲載',
            '入手先': '[itch.ioのページ](https://rdub77.itch.io/friedrichai)',
          },
          {
            '項目': 'ソースコード',
            '入手先': '非公開',
          },
        ],
        note: 'このページは、[Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)にある本アプリの項目の補足資料です。2026年10月9日に確認したバージョン:1.0(Steamのニュース投稿「FriedrichAI 1.0 Is Here」による)。専用の製品ウェブサイトもプライバシーポリシーのページも見つからず、Steamのページが公式の掲載です。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**Steamのページは段階的に試すことを勧めていますが、PromptQuorumはこれらの手順を実行していません。**',
        ],
        numberedItems: [
          {
            title: 'まず無料のデモを試す',
            whyItMatters: 'デモは体験版ではなく、互換性を確認するための固定されたスナップショットで、開発者は、うまく動かない場合は製品版を購入しないよう呼びかけています。',
          },
          {
            title: '基本のアシスタントをインストールして、チャットが動くことを確認する',
            whyItMatters: 'Steamのページは、メディアパックを追加したりモデルを変更したりする前に、ローカルチャットが動くことを確認するよう勧めています。',
          },
          {
            title: 'ハードウェアが許す場合に限り、オプションのパックを追加する',
            whyItMatters: '画像、動画、音声の生成には、大きな追加ダウンロードと、チャットよりはるかに高いGPU性能が必要です。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべてSteamのページ、ニュース投稿、またはDLCの掲載に基づくもので、独自にテストしたものはありません。**',
        ],
        items: [
          '**チャットとメモリ。** 永続的なメモリを持つローカルチャット、再び開いて検索できる保存済みの会話、スラッシュコマンドが不要になった通常の会話形式のインターフェース。',
          '**プロジェクトツール。** プロジェクトボード(Todo、Doing、Blocked、Done)、プロジェクトの文脈を保つProject Chronicle、ローカルのテキストおよびMarkdownファイルの取り込み。',
          '**モデル。** 標準で同梱されるモデルに加え、ユーザーが用意したGGUFモデルを検索して切り替えるModel Manager。Steamのページによれば、アプリはApache License 2.0のQwenモデルを使用している。',
          '**音声。** 無効にもできるローカルの音声読み上げと、2026年8月のアップデートで追加された、マイクボタンによるローカルの音声入力。',
          '**オプションのメディア。** 画像生成(バリエーション付き)、テキストからの動画生成、音声・音楽の生成が、別々の無料パックとして提供されている。',
          '**インターフェース。** 英語、ウクライナ語、ドイツ語、フランス語、スペイン語、ブラジルポルトガル語、韓国語、日本語の8つの表示言語。',
        ],
        note: 'Steamのページが音声を全面的に対応と記載しているのは英語のみのため、他の7言語での音声機能はデモで確認してください。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'ハードウェア要件',
        content: [
          '**Steamは最小要件としてWindows 10/11、16 GBのRAM、20 GBのストレージを挙げ、NVIDIAのGPUを推奨し、チャットにはCPUへのフォールバックがあります。** 推奨構成は、Ryzen 7 5700Xクラスのプロセッサ、32 GBのRAM、10 GB以上のVRAMを持つNVIDIA RTXカードです。',
          'メディア生成はチャットよりずっと負荷が高く、ページは動画に12 GB以上、より長いクリップには16 GB以上のVRAMを推奨し、動画、画像から動画、モーフのワークフローは実験的だと説明しています。最も対応が進んでいるメディアの経路はNVIDIAで、AMDの対応はRadeon互換のベータ版ビルドが別にあり、2026年9月のパッチで古いIntelプロセッサへの対応が追加されました。ページはNortonのユーザーにも、古い定義ファイルがアプリの一部を検出する可能性があるため、先にアンチウイルスを更新するよう注意を促しています。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとオンライン機能',
        content: [
          '**Steamのページは、チャット、メモリ、保存された会話、プロジェクトのデータはユーザーのマシンに残り、コアのアシスタントにAPIキーは不要だと述べています。** 音声の生成と音声認識は、ローカルで動作すると説明されています。',
          'オプションのWeb検索は例外で、設定しない限りオフであり、ユーザー自身のプロバイダーのアカウントやAPIキーが必要になる場合があります。ソースコードが公開されていないため、これらをコードと照らして確認することはできず、いずれも開発者による申告であり、監査の結果ではありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはアプリのネットワーク通信を調べていません。機密データを扱う方は、Web検索をオフにした場合と、ネットワークを切断した場合の動作をご自身で確認してください。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '開発者から',
        content: [
          '個人開発者としてFriedrichAIを手がけるRandolph Smith氏が、このアプリと、開発とSteamを選んだ理由について次のように述べています。以下は、読みやすさのために軽く編集した開発者自身の言葉として提示するものであり、PromptQuorumによる独立した編集上の評価ではありません:',
          '"FriedrichAIは、実のところほとんど偶然のようにして始まりました。私は長年ソフトウェアQAに携わってきた人間で、AIの研究者ではありません。2022年にレイオフされ、やがてAIを試し始めたときには、まったくの初心者でした。最初は、かなり単純なカードゲームを作るのにAIを使っていました。そこからローカルAIという深みにはまっていき、そのたびに同じ問題にぶつかりました。ローカルAIは非常に興味深いのに、すべてをインストールし、設定し、動かすこと自体がひとつのプロジェクトになりかねない、という問題です。',
          'そこでFriedrichAIは、その体験を普通の人が実際に使えるものにまとめる試みへと、少しずつ育っていきました。基本的な考え方は今もとてもシンプルです。インストールして、起動して、話しかける。クラウドのアカウントも、コア製品に必要なAPIのサブスクリプションも、トラッキングも、私のサーバーへの依存もありません。文字どおり、コンピューターをインターネットから切断しても、Friedrichは動き続けます。',
          'そこからかなり大きく成長しました。現在のFriedrichは、永続的なローカルメモリを備えたローカルチャット、画像生成、オプションのメディアコンポーネントによる動画と音声の生成、音声入力(speech-to-text)と音声読み上げ(text-to-speech)、ユーザーが用意するGGUFモデル、そして希望する人向けのオプションのWeb検索に対応しています。また、FriedrichがBlenderのようなアプリケーションと連携しつつ、人間が主導権を握り続けられるように、MCP連携にも取り組んでいます。',
          'Steamについては、その選択は非常に意図的なものでした。私が作っていたようなソフトウェアにとって、Steamは大きく活用されていないと考えたのです。そこにはすでに何百万人ものWindowsユーザーがいて、彼らが信頼している配布と更新の仕組みがありますが、本格的なローカルAIソフトウェアの配布先としてSteamに目を向けている人はほとんどいないようでした。私には、それは制約というより、むしろ好機に見えました。',
          'また、FriedrichAIを、毎月借りて使う別のAIサービスではなく、買って自分のものにするソフトウェアとして感じてもらいたいとも思いました。Steamには、配布、自動アップデート、決済、返金、ユーザーレビュー、そして巨大なWindowsユーザー層がすでにあります。さらに大事なのは、この取引が誰にとっても分かりやすいことです。何かを買い、ダウンロードすれば、それはライブラリに残ります。GitHubは開発者にとって素晴らしい場所ですが、私が目指しているのは、Python環境やCUDA wheel、コマンドラインが何かを知らなくても使えるローカルAIです。',
          'たしかにトレードオフはあります。Steamはゲームのために作られたもので、AIアプリケーションのためではないため、配布やパッケージングで珍しい問題を回避する工夫が必要でした。ローカルAIには、通常のデスクトップアプリケーションにはないハードウェア対応の難しさもあります。それでも全体としては、今でも正しい選択だったと思っています。',
          '長期的な目標は、ローカルモデルにチャットインターフェースをかぶせることだけではありません。FriedrichAIを、本当に役立つローカルAI環境へと育てたいのです。そのとき、そもそも私がこれを作った理由、つまりローカルでの所有、プライバシー、使いやすさ、そして、購入したソフトウェアが動き続けるために開発者のサーバーが永遠に稼働している必要はない、という条件を保ち続けます。',
          'それと、ひとつ面白い訂正があります。Friedrichという名前は、フリードリヒ大王ではなく、Friedrich Nietzscheへのオマージュです。着想の元は、Nietzscheの「深淵をのぞき込む」という言葉でした。人類が今まさにAIという深淵をのぞき込んでいるように見えることを考えると、とりわけふさわしいと感じたのです。"',
        ],
        note: '— Randolph Smith氏、開発者',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'トレードオフ:利点と制約',
        columns: [
          '利点',
          '実際の使用での意味',
          '制約・注意点',
        ],
        rows: [
          {
            '利点': '買い切りでアカウント不要',
            '実際の使用での意味': 'コアのアシスタントにサブスクリプション、登録、APIキーは不要。',
            '制約・注意点': 'クローズドソースで、ライセンスはプロプライエタリ。',
          },
          {
            '利点': 'ゲームのようにインストールできる',
            '実際の使用での意味': 'Steamが支払い、アップデート、無料デモを担う。',
            '制約・注意点': 'Windows専用で、Steamアカウントが必要。',
          },
          {
            '利点': '永続的なローカルメモリ',
            '実際の使用での意味': '文脈がセッションをまたいで自分のPCに残る。',
            '制約・注意点': 'メモリの品質はここでは未検証。',
          },
          {
            '利点': '画像・動画・音声パック',
            '実際の使用での意味': 'クラウドサービスなしでメディアを生成できる。',
            '制約・注意点': '大容量のダウンロード。NVIDIA優先で、AMDはベータ。',
          },
          {
            '利点': '正式版の1.0リリース',
            '実際の使用での意味': '2026年9月18日にアーリーアクセスを終了。',
            '制約・注意点': 'Steamの公開レビューはこれまで14件のみ。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**技術的なセットアップなしで、オフラインのアシスタントを使いたいWindowsユーザー。** Steamでインストールして話しかけるという流れが、設計上の主な目標。',
          '**サブスクリプションより買い切りを好む人。** コアのアシスタントにアカウントもAPIキーも不要。',
          '**NVIDIAのGPUを持ち、ローカルでメディアを生成したい人。** 画像、動画、音声のパックは、そのための無料アドオン。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**ライセンスとソースコード。** 公開リポジトリもオープンソースライセンスも見つからず、動作をコードと照らして確認することはできない。',
          '**実機での性能と品質。** PromptQuorumはアプリを実行していないため、速度、メモリの品質、メディアの出力は評価していない。',
          '**インストール数。** Steamは販売数を公表していないため、有料ユーザーの数は独自には確認できていない。',
          '**MCPとBlenderの連携。** 開発者は取り組み中だと述べているが、公開されたドキュメントは見つからなかった。',
          '**Mac、Linux、モバイルのユーザーには向かない。** 掲載されているのはWindows 10/11のみ。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替アプリ',
        columns: [
          'アプリ',
          'プラットフォーム',
          '料金/ライセンス',
          '主な違い',
        ],
        rows: [
          {
            'アプリ': '[Jan](/ja/power-local-llm/jan-review)',
            'プラットフォーム': 'macOS、Windows、Linux',
            '料金/ライセンス': '無料 / Apache 2.0(派生版)',
            '主な違い': 'MCPとローカルAPIサーバーを備えた、オープンソースのデスクトップチャット',
          },
          {
            'アプリ': '[GPT4All](/ja/power-local-llm/gpt4all-review)',
            'プラットフォーム': 'macOS、Windows、Linux',
            '料金/ライセンス': '無料 / MIT',
            '主な違い': 'ローカルのドキュメントチャットを備えた、オープンソースのデスクトップアプリ',
          },
          {
            'アプリ': '[LM Studio](/ja/power-local-llm/lm-studio-review)',
            'プラットフォーム': 'macOS、Windows、Linux',
            '料金/ライセンス': '無料 / プロプライエタリ',
            '主な違い': 'モデル探しを中心にした、ローカルサーバー付きの実行環境',
          },
          {
            'アプリ': '[HilbertRaum](/ja/power-local-llm/hilbertraum-review)',
            'プラットフォーム': 'Windows、macOS、Linux',
            '料金/ライセンス': '無料 / GPL-3.0',
            '主な違い': 'ドキュメントQ&Aを備えた、インストール不要のポータブルなワークスペース',
          },
        ],
        note: '競合の詳細は頻繁に変わります。各アプリの現在の料金、ライセンス、対応プラットフォームは、それぞれの掲載情報で確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'FriedrichAIはオープンソースですか?',
            a: 'いいえ。Steamにはプロプライエタリの著作権表示があり、公開ソースリポジトリは見つかりませんでした。',
          },
          {
            q: 'サブスクリプションやアカウントは必要ですか?',
            a: 'いいえ。Steamのページは、コアのアシスタントにサブスクリプション、アカウント、APIキーは不要と述べています。ただし、購入にはSteamアカウントが必要です。',
          },
          {
            q: '自分のモデルを使えますか?',
            a: 'はい。対応するGGUFモデルをローカルのモデル用ワークスペースに置けば、Model Managerで検索して切り替えられます。モデルによって、必要なRAMとVRAMは大きく異なります。',
          },
          {
            q: 'MacやLinuxで動きますか?',
            a: 'Steamのページによれば、動きません。掲載されているのはWindows 10/11(64ビット)のみです。',
          },
          {
            q: '購入前に試せますか?',
            a: 'はい。無料のデモが別のSteamの項目として用意されています。期間限定の体験版ではなく、互換性を確認するための固定されたスナップショットで、製品版より動作が遅い場合があります。',
          },
          {
            q: 'AMDのグラフィックスカードで動きますか?',
            a: 'AMDの対応は、Radeon互換のベータ版ビルドが別にある形で、AMDでのメディア生成はまだ開発中と説明されています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content: 'FriedrichAIは、ローカルのメモリ、音声、プロジェクトツール、オプションのメディアパックを1回のインストールにまとめ、ローカルAIを買い切りのWindowsアプリとして届けようとする注目すべき試みです。その一方で、コードはクローズドで、Steamのレビューはわずか14件、最も対応が進んだメディアの経路はNVIDIAのみで、ここで述べた内容は実機でテストされていません。パッケージ化されたオフラインのアシスタントを求め、これらの条件を受け入れられるWindowsユーザーに向いています。検証可能なコードを求める読者は、[Jan](/ja/power-local-llm/jan-review)や[GPT4All](/ja/power-local-llm/gpt4all-review)と比較できます。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[SteamのFriedrichAI: Offline AI](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) — 価格、要件、機能、言語、デモ、レビュー。2026年10月9日確認。',
          '[FriedrichAIのSteamニュース](https://store.steampowered.com/news/app/4111530) — 「FriedrichAI 1.0 Is Here」の投稿とその後のパッチノート。2026年10月9日確認。',
          '[FriedrichAI Text To Image Pack](https://store.steampowered.com/app/4702720/)、[Video Generation](https://store.steampowered.com/app/4765280/)、[Audio Generation](https://store.steampowered.com/app/4765290/) — 無料のメディアパック。',
          '[itch.ioのFriedrichAI](https://rdub77.itch.io/friedrichai) — 開発者によるもう1つの掲載。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Janレビュー](/ja/power-local-llm/jan-review) — 無料のオープンソースのデスクトップチャットアプリ。',
          '[GPT4Allレビュー](/ja/power-local-llm/gpt4all-review) — ドキュメントチャットを備えた、MITライセンスのデスクトップアプリ。',
          '[LM Studioレビュー](/ja/power-local-llm/lm-studio-review) — モデル探しを中心にしたデスクトップ実行環境。',
          '[HilbertRaumレビュー](/ja/power-local-llm/hilbertraum-review) — インストール不要でポータブルなオフラインワークスペース。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/friedrichai-review-hero-pt.webp',
    title: 'FriedrichAI: Análise do Assistente de IA Offline para Windows Vendido na Steam',
    seoTitle: 'FriedrichAI Análise: IA Offline para Windows na Steam',
    intro: 'O FriedrichAI é um app de desktop para Windows, criado pelo desenvolvedor solo Randolph Smith, que roda um modelo de linguagem no seu próprio PC e acrescenta memória local persistente, conversas salvas, um quadro de projetos, síntese e reconhecimento de voz locais e pacotes opcionais de geração de imagem, vídeo e áudio. Ele é vendido na [Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), e não pelo GitHub nem por uma loja de apps, e a versão 1.0 saiu do Acesso Antecipado em 18 de setembro de 2026. O código-fonte não é publicado. Esta análise se baseia na página da loja na Steam, no seu feed de notícias e nas páginas de DLC, consultados em 9 de outubro de 2026, além de um comentário do desenvolvedor; a PromptQuorum não testou o app na prática.',
    metaDescription: 'Análise do FriedrichAI: assistente de IA offline para Windows vendido na Steam, com memória local, pacotes de imagem/vídeo/áudio e sem conta. Hardware, privacidade e limites.',
    twitterDescription: 'Análise do FriedrichAI: um assistente de IA offline para Windows que você compra uma vez na Steam, com memória local e pacotes opcionais de imagem, vídeo e áudio. Código fechado, só para Windows.',
    audience: 'Usuários de Windows que querem um assistente de IA offline, comprado uma única vez e sem configuração com Python ou linha de comando, e que precisam saber o que as fontes confirmam e o que não pôde ser verificado.',
    readTime: '9 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do FriedrichAI',
    targetKeywords: [
      'friedrichai análise',
      'friedrichai ia offline',
      'friedrichai steam',
      'assistente de ia offline windows steam',
      'app de ia local sem assinatura windows',
      'ia local com memória windows',
      'friedrichai vs lm studio',
    ],
    current_models_mentioned: [
      'Qwen',
      'GGUF models',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA RTX',
      'AMD Radeon',
      'Ryzen 7 5700X',
    ],
    leadAnswerBlock: '**O FriedrichAI (versão 1.0 em 9 de outubro de 2026) é um assistente de IA exclusivo para Windows, que você compra uma vez na Steam e que roda um modelo local, sem conta, sem assinatura e sem exigir chave de API.** Ele é voltado a quem prefere instalar um app a montar uma pilha de IA local por conta própria, e acrescenta pacotes opcionais de imagem, vídeo e áudio. O código é fechado, a base de avaliações na Steam ainda é muito pequena e o caminho de mídia mais bem suportado é o da NVIDIA.',
    quickAnswerTop: {
      pt: {
        question: 'O FriedrichAI funciona sem conexão com a internet?',
        answer: 'Segundo a página da Steam e o desenvolvedor, sim: o assistente básico, a memória, as conversas salvas e a síntese de voz rodam localmente depois da instalação. A busca na web é opcional e fica desligada, a menos que você a configure, e os pacotes de mídia opcionais são downloads separados.',
        bullets: [
          'Vendido na Steam como compra única; uma demo gratuita e três pacotes de mídia gratuitos existem como entradas separadas na Steam.',
          'Somente Windows 10/11, com alternativa por CPU para o chat e GPU NVIDIA recomendada.',
          'A versão 1.0 foi anunciada em 18 de setembro de 2026, após um Acesso Antecipado iniciado em 30 de abril de 2026.',
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
        label: 'O que é o FriedrichAI?',
        anchor: 'what-is-friedrichai',
      },
      {
        label: 'Por que o criador escolheu a Steam',
        anchor: 'why-steam',
      },
      {
        label: 'Como obter',
        anchor: 'get-it',
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
        label: 'Requisitos de hardware',
        anchor: 'hardware-requirements',
      },
      {
        label: 'Privacidade e recursos online',
        anchor: 'privacy',
      },
      {
        label: 'A palavra do criador',
        anchor: 'from-the-maker',
      },
      {
        label: 'Prós e contras: benefícios vs. limitações',
        anchor: 'tradeoffs',
      },
      {
        label: 'Para quem é indicado',
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
            text: 'O FriedrichAI é um assistente de IA de código fechado para Windows, vendido na Steam por um desenvolvedor solo, que roda um modelo local com memória persistente e pacotes opcionais de imagem, vídeo e áudio, e não exige conta.',
          },
          {
            type: 'plain-terms',
            text: 'Você o compra na Steam como se fosse um jogo, instala e conversa com ele; o chat, a memória e os recursos de voz continuam funcionando com a rede desligada, enquanto a geração de mídia mais pesada exige uma placa de vídeo potente.',
          },
        ],
        items: [
          'Desenvolvedor: Randolph Smith, listado na Steam como desenvolvedor e publicador; ele se descreve como profissional de QA de software, e não como pesquisador de IA.',
          'Preço e licença: $9.99 USD, pagamento único na Steam, sem assinatura; proprietário, sem repositório de código público encontrado.',
          'Escopo: chat local, memória, busca nas conversas salvas, um quadro de projetos Todo/Doing/Blocked/Done, Model Manager para modelos GGUF e busca na web opcional.',
          'Sinais conforme consultados em 9 de outubro de 2026: 13 de 14 avaliações de usuários na Steam positivas, lançamento completo em 18 de setembro de 2026, último patch em 6 de outubro de 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página da loja na Steam, no seu feed de notícias e nas páginas de DLC, consultados em 9 de outubro de 2026, além de um comentário do desenvolvedor. A PromptQuorum não testou nem fez benchmarks do app.',
          },
        ],
      },
      overview: {
        id: 'what-is-friedrichai',
        title: 'O que é o FriedrichAI?',
        content: [
          '**O FriedrichAI é um espaço de trabalho de IA offline em primeiro lugar para Windows, que reúne um executor de modelos locais, memória e ferramentas de projeto em um único app instalável.** Segundo sua [página na Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), o assistente básico não precisa de conta na nuvem nem de chave de API, e as conversas, a memória e os dados de projeto ficam no PC.',
          'O nome homenageia o filósofo Friedrich Nietzsche, e não Frederico, o Grande, segundo o desenvolvedor. No comentário do criador, mais abaixo, Randolph Smith descreve o app como voltado a pessoas que não deveriam precisar saber o que é um ambiente Python ou um wheel de CUDA.',
        ],
      },
      whySteam: {
        id: 'why-steam',
        title: 'Por que o criador escolheu a Steam',
        content: [
          '**Randolph Smith escolheu a Steam de propósito: queria que a IA local parecesse um software que você compra e possui, e a Steam já oferece aos usuários de Windows o sistema de pagamento, atualização e reembolso em que eles confiam.** O FriedrichAI é um caso incomum de software sério de IA local vendido ali em vez de no GitHub. Os motivos dele, resumidos a partir do comentário do criador abaixo:',
        ],
        items: [
          '**Um público subutilizado.** Milhões de usuários de Windows já estão na Steam, com um sistema de distribuição e atualização em que confiam, mas poucos desenvolvedores a tratam como um lugar para software sério de IA local.',
          '**Comprar e possuir, não alugar.** Ele queria uma compra única que fica na biblioteca, em vez de mais um serviço de IA alugado todo mês. A Steam oferece pagamentos, atualizações automáticas, reembolsos e avaliações de usuários.',
          '**Por que não o GitHub.** O GitHub serve para desenvolvedores, diz ele, mas o FriedrichAI se destina a pessoas que não deveriam precisar saber o que é um ambiente Python, um wheel de CUDA ou uma linha de comando.',
          '**Sem depender dos servidores dele.** O software deve continuar funcionando mesmo que os servidores do desenvolvedor saiam do ar.',
        ],
        callouts: [
          {
            type: 'insight',
            text: 'O próprio criador cita o custo: a Steam foi projetada para jogos, então ele teve de contornar problemas incomuns de distribuição e empacotamento, e a IA local traz desafios de suporte a hardware que um aplicativo de desktop comum não tem. O que a Steam oferece está visível na listagem: uma demo gratuita como entrada separada, pacotes complementares gratuitos como DLC e avaliações públicas de usuários.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O FriedrichAI é distribuído pela Steam para Windows 10/11 (64 bits) por $9.99 USD; o app básico tem uma demo gratuita, e os pacotes de mídia são complementos gratuitos.**',
        ],
        columns: [
          'Item',
          'Onde obter',
        ],
        rows: [
          {
            Item: 'Versão completa',
            'Onde obter': '[Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), $9.99 USD',
          },
          {
            Item: 'Demo gratuita',
            'Onde obter': '[Demo na Steam](https://store.steampowered.com/app/4861210/)',
          },
          {
            Item: 'Pacotes de mídia',
            'Onde obter': 'Complementos gratuitos na Steam: imagem, vídeo, áudio',
          },
          {
            Item: 'Site',
            'Onde obter': '[Página da loja na Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) (nenhum site separado encontrado)',
          },
          {
            Item: 'Outra listagem',
            'Onde obter': '[Página no itch.io](https://rdub77.itch.io/friedrichai)',
          },
          {
            Item: 'Código-fonte',
            'Onde obter': 'Não publicado',
          },
        ],
        note: 'Esta página é material complementar à entrada do app no [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). Versão conforme verificada em 9 de outubro de 2026: 1.0, a partir do post de notícias da Steam "FriedrichAI 1.0 Is Here". Nenhum site de produto próprio nem página de política de privacidade foi encontrado; a página da Steam é a listagem oficial.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**A página da Steam recomenda testar em etapas; a PromptQuorum não executou esses passos.**',
        ],
        numberedItems: [
          {
            title: 'Experimentar primeiro a demo gratuita',
            whyItMatters: 'A demo é um retrato congelado de compatibilidade, e não um período de teste, e o desenvolvedor pede que quem a vir rodar mal não compre a versão completa.',
          },
          {
            title: 'Instalar o assistente básico e confirmar que o chat funciona',
            whyItMatters: 'A página da Steam aconselha confirmar o chat local antes de adicionar pacotes de mídia ou trocar de modelo.',
          },
          {
            title: 'Adicionar pacotes opcionais apenas se o seu hardware permitir',
            whyItMatters: 'A geração de imagem, vídeo e áudio exige downloads extras grandes e muito mais potência de GPU do que o chat.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm da página da Steam, dos posts de notícias ou das listagens de DLC; nenhum foi testado de forma independente.**',
        ],
        items: [
          '**Chat e memória.** Chat local com memória persistente, conversas salvas que podem ser reabertas e pesquisadas e uma interface de conversa simples que não exige mais comandos com barra.',
          '**Ferramentas de projeto.** Um Project Board (Todo, Doing, Blocked, Done), o Project Chronicle para preservar o contexto do projeto e importação de arquivos locais de texto e Markdown.',
          '**Modelos.** Um modelo padrão incluso e um Model Manager que procura e alterna entre modelos GGUF fornecidos pelo usuário. A página da Steam diz que o app usa modelos Qwen sob a Apache License 2.0.',
          '**Voz.** Síntese de voz local que pode ser desativada e reconhecimento de voz local por um botão de microfone, adicionado em uma atualização de agosto de 2026.',
          '**Mídia opcional.** Geração de imagens (com variações), texto para vídeo e geração de áudio e música como pacotes gratuitos separados.',
          '**Interface.** Oito idiomas de interface: inglês, ucraniano, alemão, francês, espanhol, português do Brasil, coreano e japonês.',
        ],
        note: 'A página da Steam lista suporte completo de áudio apenas para o inglês, então os recursos de voz nos outros sete idiomas devem ser conferidos na demo.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Requisitos de hardware',
        content: [
          '**A Steam lista Windows 10/11, 16 GB de RAM e 20 GB de armazenamento como o mínimo, com GPU NVIDIA recomendada e alternativa por CPU para o chat.** A configuração recomendada é um processador da classe Ryzen 7 5700X, 32 GB de RAM e uma placa NVIDIA RTX com 10 GB ou mais de VRAM.',
          'A geração de mídia é bem mais pesada do que o chat: a página recomenda 12 GB ou mais de VRAM para vídeo e 16 GB ou mais para clipes mais longos, e classifica os fluxos de vídeo, imagem para vídeo e morph como experimentais. A NVIDIA é o caminho de mídia mais bem suportado; o suporte à AMD é uma build separada, compatível com Radeon, em beta, e um patch de setembro de 2026 acrescentou processadores Intel mais antigos. A página também avisa os usuários do Norton para atualizar o antivírus antes, porque definições antigas podem sinalizar partes do app.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e recursos online',
        content: [
          '**A página da Steam afirma que as conversas, a memória, as conversas salvas e os dados de projeto ficam na máquina do usuário e que nenhuma chave de API é necessária para o assistente básico.** A geração e o reconhecimento de voz são descritos como locais.',
          'A busca opcional na web é a exceção: ela fica desligada, a menos que seja configurada, e pode exigir a conta ou a chave de API de um provedor do próprio usuário. Como o código-fonte não é publicado, nada disso pode ser conferido no código, e essas são declarações do desenvolvedor, não resultados de auditoria.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não inspecionou o tráfego de rede do app. Quem lida com dados confidenciais deve verificar o comportamento com a busca na web desligada e com a rede desconectada.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'A palavra do criador',
        content: [
          'Randolph Smith, o desenvolvedor solo por trás do FriedrichAI, compartilhou o seguinte sobre o app e os motivos de tê-lo criado e de ter escolhido a Steam. É apresentado como as próprias palavras do desenvolvedor, levemente editadas para facilitar a leitura, não como uma avaliação editorial independente da PromptQuorum:',
          '"O FriedrichAI começou quase por acaso. Sou um profissional de QA de software de longa data, não um pesquisador de IA. Fui demitido em 2022 e, quando acabei começando a experimentar com IA, eu era muito iniciante. No começo eu usava a IA para me ajudar a criar um jogo de cartas bem simples. Isso me levou cada vez mais fundo no mundo da IA local, e eu esbarrava sempre no mesmo problema: a IA local era incrivelmente interessante, mas instalar, configurar e fazer tudo funcionar podia ser um projeto por si só.',
          'Então o FriedrichAI foi se tornando, aos poucos, uma tentativa de empacotar essa experiência em algo que gente comum pudesse realmente usar. A filosofia básica continua bem simples: instale, execute e converse com ele. Sem conta na nuvem, sem assinatura de API para o produto principal, sem rastreamento e sem depender dos meus servidores. Dá para literalmente desconectar o computador da internet e o Friedrich continua funcionando.',
          'Desde então ele cresceu bastante. O Friedrich agora cuida de chat local com memória local persistente, geração de imagens, geração de vídeo e áudio por meio de componentes de mídia opcionais, reconhecimento e síntese de voz, modelos GGUF fornecidos pelo usuário e busca opcional na web para quem quiser. Também estou trabalhando na integração com MCP para que o Friedrich possa interagir com aplicativos como o Blender, sem que o ser humano perca o controle.',
          'Quanto à Steam, essa escolha foi bem deliberada. Achei que a Steam era muito subutilizada para o tipo de software que eu estava criando. Há milhões de usuários de Windows lá, com um sistema de distribuição e atualização em que já confiam, mas pouquíssima gente parecia enxergar a Steam como um lugar para distribuir software sério de IA local. Para mim, isso parecia menos uma limitação e mais uma oportunidade.',
          'Eu também queria que o FriedrichAI parecesse um software que você compra e possui, e não mais um serviço de IA que você aluga todo mês. A Steam já tem distribuição, atualizações automáticas, pagamentos, reembolsos, avaliações de usuários e um enorme público de Windows instalado. Mais importante: as pessoas entendem a transação, você compra algo, baixa, e isso fica na sua biblioteca. O GitHub é fantástico para desenvolvedores, mas estou tentando justamente tornar a IA local acessível a pessoas que não deveriam precisar saber o que é um ambiente Python, um wheel de CUDA ou uma linha de comando só para usá-la.',
          'Existem, sim, desvantagens. A Steam foi projetada para jogos, não para aplicativos de IA, então tive de contornar alguns problemas incomuns de distribuição e empacotamento. A IA local também traz desafios de suporte a hardware que um aplicativo de desktop comum não tem. Mas, no geral, ainda acho que foi a escolha certa.',
          'A longo prazo, meu objetivo não é simplesmente colocar uma interface de chat em volta de um modelo local. Quero que o FriedrichAI se torne um ambiente de IA local genuinamente útil, mantendo o que me levou a criá-lo: propriedade local, privacidade, acessibilidade e nenhuma exigência de que os servidores do desenvolvedor continuem no ar para sempre para que o software que você comprou continue funcionando.',
          'E uma correção engraçada: Friedrich, na verdade, é uma homenagem a Friedrich Nietzsche, e não a Frederico, o Grande. A inspiração foi o ‘olhar para o abismo’ de Nietzsche, que pareceu especialmente apropriado, já que a humanidade agora parece estar olhando para o abismo da IA."',
        ],
        note: '— Randolph Smith, desenvolvedor',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: [
          'Benefício',
          'Na prática',
          'Limitação / ressalva',
        ],
        rows: [
          {
            'Benefício': 'Compra única, sem conta',
            'Na prática': 'Sem assinatura, cadastro nem chave de API para o assistente básico.',
            'Limitação / ressalva': 'Código fechado; a licença é proprietária.',
          },
          {
            'Benefício': 'Instala como um jogo',
            'Na prática': 'A Steam cuida do pagamento, das atualizações e de uma demo gratuita.',
            'Limitação / ressalva': 'Só para Windows e vinculado a uma conta Steam.',
          },
          {
            'Benefício': 'Memória local persistente',
            'Na prática': 'O contexto passa de uma sessão para outra no seu próprio PC.',
            'Limitação / ressalva': 'A qualidade da memória não foi testada aqui.',
          },
          {
            'Benefício': 'Pacotes de imagem, vídeo e áudio',
            'Na prática': 'Geração de mídia sem um serviço na nuvem.',
            'Limitação / ressalva': 'Downloads grandes; NVIDIA primeiro, AMD em beta.',
          },
          {
            'Benefício': 'Versão 1.0 completa',
            'Na prática': 'Fora do Acesso Antecipado desde 18 de setembro de 2026.',
            'Limitação / ressalva': 'Apenas 14 avaliações públicas na Steam até agora.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Usuários de Windows que querem um assistente offline sem configuração técnica.** O fluxo de instalar e conversar da Steam é o principal objetivo do projeto.',
          '**Pessoas que preferem pagar uma vez a assinar.** O assistente básico não exige conta nem chave de API.',
          '**Usuários com GPU NVIDIA que querem geração de mídia local.** Os pacotes de imagem, vídeo e áudio são complementos gratuitos para ela.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Licença e código-fonte.** Nenhum repositório público nem licença open source foi encontrado, então o comportamento não pode ser conferido no código.',
          '**Desempenho e qualidade na prática.** A PromptQuorum não executou o app, então velocidade, qualidade da memória e resultado das mídias não foram avaliados.',
          '**Base de instalações.** A Steam não publica números de vendas, então a quantidade de usuários pagantes não é confirmada de forma independente.',
          '**Integração com MCP e Blender.** O desenvolvedor diz que está em andamento; nenhuma documentação pública sobre ela foi encontrada.',
          '**Não é para usuários de Mac, Linux ou celular.** Apenas Windows 10/11 é listado.',
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
          'Principal diferença',
        ],
        rows: [
          {
            App: '[Jan](/pt/power-local-llm/jan-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Gratuito / Apache 2.0 (variante)',
            'Principal diferença': 'Chat de desktop open source com MCP e servidor de API local',
          },
          {
            App: '[GPT4All](/pt/power-local-llm/gpt4all-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Gratuito / MIT',
            'Principal diferença': 'App de desktop open source com chat com documentos local',
          },
          {
            App: '[LM Studio](/pt/power-local-llm/lm-studio-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Gratuito / proprietário',
            'Principal diferença': 'Executor focado na descoberta de modelos, com servidor local',
          },
          {
            App: '[HilbertRaum](/pt/power-local-llm/hilbertraum-review)',
            Plataformas: 'Windows, macOS, Linux',
            'Preço / licença': 'Gratuito / GPL-3.0',
            'Principal diferença': 'Espaço de trabalho portátil, sem instalação, com perguntas sobre documentos',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais de cada app na própria ficha.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O FriedrichAI é open source?',
            a: 'Não. A Steam mostra um aviso de direitos autorais proprietário, e nenhum repositório de código público foi encontrado.',
          },
          {
            q: 'Preciso de assinatura ou de conta?',
            a: 'Não. A página da Steam informa que não há assinatura, conta nem chave de API para o assistente básico; você precisa, sim, de uma conta Steam para comprá-lo.',
          },
          {
            q: 'Posso usar meus próprios modelos?',
            a: 'Sim, modelos GGUF compatíveis podem ser colocados no espaço de trabalho local de modelos, detectados e alternados pelo Model Manager. Cada modelo tem necessidades muito diferentes de RAM e VRAM.',
          },
          {
            q: 'Funciona em Mac ou Linux?',
            a: 'Não, segundo a página da Steam, que lista apenas Windows 10/11 (64 bits).',
          },
          {
            q: 'Posso testar antes de comprar?',
            a: 'Sim. Existe uma demo gratuita como entrada separada na Steam; ela é um retrato congelado de compatibilidade, e não um período de teste limitado, e pode rodar mais devagar do que a versão completa.',
          },
          {
            q: 'Funciona com placa de vídeo AMD?',
            a: 'O suporte à AMD é uma build separada, compatível com Radeon, em beta, e a geração de mídia na AMD é descrita como ainda em desenvolvimento.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O FriedrichAI é uma tentativa notável de entregar IA local como um aplicativo de Windows de compra única, com memória local, voz, ferramentas de projeto e pacotes opcionais de mídia em uma só instalação. Em contrapartida, o código é fechado, a base de avaliações na Steam tem apenas 14 avaliações, o melhor caminho de mídia é exclusivo da NVIDIA e nada aqui foi testado na prática. Ele serve a usuários de Windows que querem um assistente offline já empacotado e aceitam esses termos; quem quer código auditável pode comparar o [Jan](/pt/power-local-llm/jan-review) ou o [GPT4All](/pt/power-local-llm/gpt4all-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[FriedrichAI: Offline AI na Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) — preço, requisitos, recursos, idiomas, demo e avaliações, consultados em 9 de outubro de 2026.',
          '[Notícias da Steam sobre o FriedrichAI](https://store.steampowered.com/news/app/4111530) — o post "FriedrichAI 1.0 Is Here" e as notas de patch posteriores, consultados em 9 de outubro de 2026.',
          '[FriedrichAI Text To Image Pack](https://store.steampowered.com/app/4702720/), [Video Generation](https://store.steampowered.com/app/4765280/) e [Audio Generation](https://store.steampowered.com/app/4765290/) — os pacotes de mídia gratuitos.',
          '[FriedrichAI no itch.io](https://rdub77.itch.io/friedrichai) — a listagem secundária do desenvolvedor.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um app de chat de desktop gratuito e open source.',
          '[Análise do GPT4All](/pt/power-local-llm/gpt4all-review) — um app de desktop com licença MIT e chat com documentos.',
          '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review) — um executor de desktop focado na descoberta de modelos.',
          '[Análise do HilbertRaum](/pt/power-local-llm/hilbertraum-review) — um espaço de trabalho offline portátil, sem instalação.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/friedrichai-review-hero-ar.webp',
    title: 'مراجعة FriedrichAI: مساعد ذكاء اصطناعي لويندوز يعمل دون اتصال ويُباع على Steam',
    seoTitle: 'مراجعة FriedrichAI: ذكاء اصطناعي لويندوز دون اتصال على Steam',
    intro: 'FriedrichAI تطبيق سطح مكتب لويندوز من المطوّر المنفرد Randolph Smith، يشغّل نموذجاً لغوياً على حاسوبك الشخصي ويضيف ذاكرة محلية دائمة، ومحادثات محفوظة، ولوحة مشاريع، وتحويل النص إلى كلام والكلام إلى نص محلياً، وحزماً اختيارية لتوليد الصور والفيديو والصوت. يُباع عبر [Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) لا عبر GitHub ولا عبر متجر تطبيقات، وقد خرج الإصدار 1.0 من مرحلة الوصول المبكر في 18 سبتمبر 2026. والكود المصدري غير منشور. تستند هذه المراجعة إلى صفحة المتجر على Steam وموجز أخبارها وصفحات المحتوى الإضافي (DLC)، جرى التحقق منها في 9 أكتوبر 2026، إضافة إلى تعليق من المطوّر؛ ولم تختبر PromptQuorum التطبيق عملياً.',
    metaDescription: 'مراجعة FriedrichAI: مساعد ذكاء اصطناعي مدفوع لويندوز دون اتصال يُباع على Steam بذاكرة محلية وحزم صور وفيديو وصوت ودون حساب. العتاد والخصوصية والقيود.',
    twitterDescription: 'مراجعة FriedrichAI: مساعد ذكاء اصطناعي لويندوز دون اتصال تشتريه مرة واحدة على Steam، بذاكرة محلية وحزم اختيارية للصور والفيديو والصوت. مغلق المصدر ولويندوز فقط.',
    audience: 'مستخدمو ويندوز الذين يريدون مساعد ذكاء اصطناعي يُشترى مرة واحدة ويعمل دون اتصال وبلا إعداد عبر Python أو سطر الأوامر، ويحتاجون إلى معرفة ما تؤكده المصادر وما تعذّر التحقق منه.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة FriedrichAI',
    targetKeywords: [
      'مراجعة friedrichai',
      'friedrichai ذكاء اصطناعي دون اتصال',
      'friedrichai على steam',
      'مساعد ذكاء اصطناعي دون اتصال لويندوز steam',
      'تطبيق ذكاء اصطناعي محلي دون اشتراك لويندوز',
      'ذكاء اصطناعي محلي بذاكرة لويندوز',
      'friedrichai مقابل lm studio',
    ],
    current_models_mentioned: [
      'Qwen',
      'GGUF models',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA RTX',
      'AMD Radeon',
      'Ryzen 7 5700X',
    ],
    leadAnswerBlock: '**FriedrichAI (الإصدار 1.0 اعتباراً من 9 أكتوبر 2026) مساعد ذكاء اصطناعي لويندوز فقط، تشتريه مرة واحدة على Steam ويشغّل نموذجاً محلياً دون حساب ودون اشتراك ودون مفتاح API إلزامي.** وهو موجّه إلى من يفضّلون تثبيت تطبيق جاهز على تجميع منظومة ذكاء اصطناعي محلية بأنفسهم، ويضيف حزماً اختيارية للصور والفيديو والصوت. الكود مغلق، وقاعدة المراجعات على Steam لا تزال صغيرة جداً، وأفضل مسار مدعوم للوسائط هو مسار NVIDIA.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل FriedrichAI دون اتصال بالإنترنت؟',
        answer: 'بحسب صفحة Steam والمطوّر، نعم: يعمل المساعد الأساسي والذاكرة والمحادثات المحفوظة وتحويل النص إلى كلام محلياً بعد التثبيت. البحث على الويب اختياري ومعطَّل ما لم تهيّئه، وحزم الوسائط الاختيارية تنزيلات منفصلة.',
        bullets: [
          'يُباع على Steam بدفعة واحدة؛ وتوجد نسخة تجريبية مجانية وثلاث حزم وسائط مجانية كإدخالات منفصلة على Steam.',
          'لويندوز 10/11 فقط، مع الاعتماد على المعالج المركزي كحل بديل للدردشة، ويوصى ببطاقة NVIDIA.',
          'أُعلن الإصدار 1.0 في 18 سبتمبر 2026 بعد مرحلة وصول مبكر بدأت في 30 أبريل 2026.',
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
        label: 'ما هو FriedrichAI؟',
        anchor: 'what-is-friedrichai',
      },
      {
        label: 'لماذا اختار المطوّر Steam',
        anchor: 'why-steam',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'كيف تبدأ',
        anchor: 'getting-started',
      },
      {
        label: 'الميزات التي تؤكدها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'متطلبات العتاد',
        anchor: 'hardware-requirements',
      },
      {
        label: 'الخصوصية والميزات عبر الإنترنت',
        anchor: 'privacy',
      },
      {
        label: 'من صانع التطبيق',
        anchor: 'from-the-maker',
      },
      {
        label: 'المقايضات: المزايا مقابل القيود',
        anchor: 'tradeoffs',
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
            text: 'FriedrichAI مساعد ذكاء اصطناعي مغلق المصدر لويندوز، يبيعه مطوّر منفرد على Steam، ويشغّل نموذجاً محلياً بذاكرة دائمة وحزم اختيارية للصور والفيديو والصوت ولا يحتاج إلى حساب.',
          },
          {
            type: 'plain-terms',
            text: 'تشتريه على Steam كما تشتري لعبة، وتثبّته وتتحدث إليه؛ وتواصل الدردشة والذاكرة والميزات الصوتية عملها مع فصل الشبكة، بينما يحتاج توليد الوسائط الأثقل إلى بطاقة رسومات قوية.',
          },
        ],
        items: [
          'المطوّر: Randolph Smith، مدرج بوصفه المطوّر والناشر على Steam؛ ويصف نفسه بأنه محترف في ضمان جودة البرمجيات لا باحث في الذكاء الاصطناعي.',
          'السعر والترخيص: $9.99 USD لمرة واحدة على Steam دون اشتراك؛ الترخيص مملوك (proprietary) ولم يُعثر على مستودع كود مصدري عام.',
          'النطاق: دردشة محلية، وذاكرة، وبحث في المحادثات المحفوظة، ولوحة مشاريع (Todo/Doing/Blocked/Done)، ومدير نماذج (Model Manager) لنماذج GGUF، وبحث اختياري على الويب.',
          'المؤشرات بحسب ما جرى التحقق منه في 9 أكتوبر 2026: 13 من 14 مراجعة مستخدمين على Steam إيجابية، والإصدار الكامل في 18 سبتمبر 2026، وآخر تحديث في 6 أكتوبر 2026.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة المتجر على Steam وموجز أخبارها وصفحات المحتوى الإضافي (DLC)، جرى التحقق منها في 9 أكتوبر 2026، إضافة إلى تعليق من المطوّر. لم تختبر PromptQuorum التطبيق ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-friedrichai',
        title: 'ما هو FriedrichAI؟',
        content: [
          '**FriedrichAI مساحة عمل للذكاء الاصطناعي تعمل دون اتصال أولاً على ويندوز، وتجمع مشغّل نماذج محلياً وذاكرة وأدوات مشاريع في تطبيق واحد قابل للتثبيت.** وبحسب [صفحته على Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI)، لا يحتاج المساعد الأساسي إلى حساب سحابي ولا إلى مفتاح API، وتبقى المحادثات والذاكرة وبيانات المشاريع على الحاسوب.',
          'الاسم تكريم للفيلسوف Friedrich Nietzsche وليس لـ Frederick the Great، بحسب المطوّر. ويصف Randolph Smith التطبيق في تعليقه أدناه بأنه موجّه إلى من لا ينبغي أن يحتاجوا إلى معرفة ما هي بيئة Python أو حزمة CUDA.',
        ],
      },
      whySteam: {
        id: 'why-steam',
        title: 'لماذا اختار المطوّر Steam',
        content: [
          '**اختار Randolph Smith منصة Steam عن قصد: أراد أن يبدو الذكاء الاصطناعي المحلي كبرنامج تشتريه وتمتلكه، وتوفّر Steam أصلًا لمستخدمي ويندوز نظام الدفع والتحديث واسترداد المبالغ الذي يثقون به.** ويُعدّ FriedrichAI حالة غير معتادة لبرنامج ذكاء اصطناعي محلي جاد يُباع هناك بدلًا من GitHub. وفيما يلي أسبابه، ملخّصة من تعليق المطوّر أدناه:',
        ],
        items: [
          '**جمهور لا يُستفاد منه كفاية.** ملايين من مستخدمي ويندوز موجودون أصلًا على Steam مع نظام توزيع وتحديث يثقون به، ومع ذلك قلّما ينظر مطوّرون إليها بوصفها موطنًا لبرمجيات ذكاء اصطناعي محلي جادة.',
          '**الشراء والامتلاك لا الاستئجار.** أراد عملية شراء لمرة واحدة تبقى في المكتبة، بدلًا من خدمة ذكاء اصطناعي أخرى تُستأجر كل شهر. وتوفّر Steam الدفع والتحديثات التلقائية واسترداد المبالغ ومراجعات المستخدمين.',
          '**لماذا ليس GitHub.** يقول إن GitHub مناسب للمطوّرين، لكن FriedrichAI يستهدف أشخاصًا لا ينبغي أن يحتاجوا إلى معرفة ما هي بيئة Python أو حزمة CUDA أو سطر الأوامر.',
          '**لا اعتماد على خوادمه.** ينبغي أن يواصل البرنامج العمل حتى لو اختفت خوادم المطوّر.',
        ],
        callouts: [
          {
            type: 'insight',
            text: 'يذكر المطوّر الكلفة بنفسه: صُمّمت Steam للألعاب، لذا اضطر إلى معالجة مشكلات توزيع وتغليف غير معتادة، كما يفرض الذكاء الاصطناعي المحلي تحديات في دعم العتاد لا يواجهها تطبيق سطح مكتب عادي. وما توفّره Steam ظاهر في الإدراج: نسخة تجريبية مجانية كإدخال منفصل، وحزم إضافية مجانية كمحتوى إضافي (DLC)، ومراجعات مستخدمين علنية.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُوزَّع FriedrichAI عبر Steam لويندوز 10/11 (64 بت) بسعر $9.99 USD؛ وللتطبيق الأساسي نسخة تجريبية مجانية، وحزم الوسائط إضافات مجانية.**',
        ],
        columns: [
          'العنصر',
          'مكان الحصول عليه',
        ],
        rows: [
          {
            'العنصر': 'النسخة الكاملة',
            'مكان الحصول عليه': '[Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI)، $9.99 USD',
          },
          {
            'العنصر': 'نسخة تجريبية مجانية',
            'مكان الحصول عليه': '[النسخة التجريبية على Steam](https://store.steampowered.com/app/4861210/)',
          },
          {
            'العنصر': 'حزم الوسائط',
            'مكان الحصول عليه': 'إضافات Steam مجانية: صور وفيديو وصوت',
          },
          {
            'العنصر': 'الموقع',
            'مكان الحصول عليه': '[صفحة المتجر على Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) (لا موقع مستقل)',
          },
          {
            'العنصر': 'إدراج آخر',
            'مكان الحصول عليه': '[صفحة itch.io](https://rdub77.itch.io/friedrichai)',
          },
          {
            'العنصر': 'الكود المصدري',
            'مكان الحصول عليه': 'غير منشور',
          },
        ],
        note: 'هذه الصفحة مادة مرافقة لإدخال التطبيق في [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory). الإصدار بحسب ما جرى التحقق منه في 9 أكتوبر 2026: 1.0، من منشور أخبار Steam بعنوان "FriedrichAI 1.0 Is Here". لم يُعثر على موقع منتج مخصص ولا على صفحة سياسة خصوصية؛ وصفحة Steam هي الإدراج الرسمي.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**توصي صفحة Steam بالاختبار على مراحل؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'جرّب النسخة التجريبية المجانية أولاً',
            whyItMatters: 'النسخة التجريبية لقطة ثابتة للتحقق من التوافق وليست فترة تجريبية، ويطلب المطوّر ألا يشتري المستخدمون النسخة الكاملة إذا لم تعمل جيداً لديهم.',
          },
          {
            title: 'ثبّت المساعد الأساسي وتأكد من عمل الدردشة',
            whyItMatters: 'تنصح صفحة Steam بالتأكد من عمل الدردشة المحلية قبل إضافة حزم الوسائط أو تغيير النماذج.',
          },
          {
            title: 'أضف الحزم الاختيارية فقط إذا سمح عتادك',
            whyItMatters: 'يحتاج توليد الصور والفيديو والصوت إلى تنزيلات إضافية كبيرة وإلى قدرة GPU أكبر بكثير من الدردشة.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل عنصر أدناه مأخوذ من صفحة Steam أو من منشورات الأخبار أو من إدراجات المحتوى الإضافي (DLC)؛ ولم يُختبر أي منها بشكل مستقل.**',
        ],
        items: [
          '**الدردشة والذاكرة.** دردشة محلية بذاكرة دائمة، ومحادثات محفوظة يمكن إعادة فتحها والبحث فيها، وواجهة محادثة عادية لم تعد تتطلب أوامر بشرطة مائلة.',
          '**أدوات المشاريع.** لوحة مشاريع (Project Board) بأعمدة Todo وDoing وBlocked وDone، وProject Chronicle للحفاظ على سياق المشروع، واستيراد ملفات النصوص وMarkdown المحلية.',
          '**النماذج.** نموذج افتراضي مضمَّن، إضافة إلى مدير نماذج (Model Manager) يفحص نماذج GGUF التي يوفّرها المستخدم ويبدّل بينها. وتذكر صفحة Steam أن التطبيق يستخدم نماذج Qwen بترخيص Apache License 2.0.',
          '**الصوت.** تحويل النص إلى كلام محلي يمكن تعطيله، وتحويل الكلام إلى نص محلي عبر زر الميكروفون، أُضيف في تحديث أغسطس 2026.',
          '**الوسائط الاختيارية.** توليد الصور (مع الاختلافات)، وتحويل النص إلى فيديو، وتوليد الصوت والموسيقى، في حزم مجانية منفصلة.',
          '**الواجهة.** ثماني لغات للواجهة: الإنجليزية والأوكرانية والألمانية والفرنسية والإسبانية والبرتغالية البرازيلية والكورية واليابانية.',
        ],
        note: 'تدرج صفحة Steam دعماً صوتياً كاملاً للإنجليزية فقط، لذا ينبغي التحقق من الميزات الصوتية في اللغات السبع الأخرى عبر النسخة التجريبية.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'متطلبات العتاد',
        content: [
          '**تذكر Steam حداً أدنى هو ويندوز 10/11 و16 GB من الذاكرة RAM و20 GB من التخزين، مع التوصية ببطاقة NVIDIA واستخدام المعالج المركزي بديلاً للدردشة.** أما الإعداد الموصى به فمعالج بمستوى Ryzen 7 5700X و32 GB من الذاكرة RAM وبطاقة NVIDIA RTX بذاكرة VRAM لا تقل عن 10 GB.',
          'توليد الوسائط أثقل بكثير من الدردشة: توصي الصفحة بـ12 GB أو أكثر من VRAM للفيديو و16 GB أو أكثر للمقاطع الأطول، وتصف مسارات الفيديو وتحويل الصورة إلى فيديو والتحويل التدريجي (morph) بأنها تجريبية. ومسار NVIDIA هو الأفضل دعماً للوسائط؛ أما دعم AMD فعبارة عن إصدار منفصل متوافق مع Radeon في مرحلة تجريبية (beta)، وأضاف تحديث في سبتمبر 2026 دعم معالجات Intel الأقدم. وتحذّر الصفحة أيضاً مستخدمي Norton من تحديث برنامج مكافحة الفيروسات أولاً، لأن التعريفات الأقدم قد تُبلغ عن أجزاء من التطبيق.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والميزات عبر الإنترنت',
        content: [
          '**تنص صفحة Steam على أن المحادثات والذاكرة والمحادثات المحفوظة وبيانات المشاريع تبقى على جهاز المستخدم، وعلى أنه لا حاجة إلى مفتاح API للمساعد الأساسي.** ويوصف توليد الكلام والتعرف عليه بأنهما يعملان محلياً.',
          'البحث الاختياري على الويب هو الاستثناء: فهو معطَّل ما لم يُهيَّأ، وقد يحتاج إلى حساب لدى مزوّد من اختيار المستخدم أو إلى مفتاح API خاص به. ولأن الكود المصدري غير منشور، لا يمكن التحقق من أي من هذا بمقارنته بالكود، وهذه إعلانات من المطوّر وليست نتائج تدقيق.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تفحص PromptQuorum حركة الشبكة للتطبيق. وعلى من يتعامل مع بيانات سرية أن يتحقق من السلوك مع تعطيل البحث على الويب وفصل الشبكة.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'من صانع التطبيق',
        content: [
          'شارك Randolph Smith، المطوّر المنفرد لتطبيق FriedrichAI، ما يلي عن التطبيق وسبب بنائه واختياره Steam. يُعرض هنا بوصفه كلمات المطور نفسه بعد تحرير طفيف لتسهيل القراءة، وليس تقييمًا تحريريًا مستقلًا من PromptQuorum:',
          '"بدأ FriedrichAI في الواقع بالصدفة تقريبًا. أنا منذ زمن طويل مختص في ضمان جودة البرمجيات، ولست باحثًا في الذكاء الاصطناعي. سُرّحت من عملي في 2022، وحين بدأت أخيرًا أجرّب الذكاء الاصطناعي كنت جديدًا عليه تمامًا. في البداية كنت أستخدم الذكاء الاصطناعي لمساعدتي في بناء لعبة ورق بسيطة إلى حد ما. وقادني ذلك أبعد داخل عالم الذكاء الاصطناعي المحلي، وظللت أصطدم بالمشكلة نفسها: الذكاء الاصطناعي المحلي مثير للاهتمام جدًا، لكن تثبيت كل شيء وإعداده وتشغيله قد يكون مشروعًا بحد ذاته.',
          'فصار FriedrichAI تدريجيًا محاولة لتغليف هذه التجربة في شيء يستطيع الناس العاديون استخدامه فعلًا. وفلسفته الأساسية ما زالت بسيطة إلى حد ما: ثبّته وشغّله وتحدث إليه. لا حساب سحابيًا، ولا اشتراك API مطلوبًا للمنتج الأساسي، ولا تتبع، ولا اعتماد على خوادمي. يمكنك حرفيًا فصل الحاسوب عن الإنترنت ويواصل Friedrich عمله.',
          'وقد نما كثيرًا منذ ذلك الحين. يستطيع Friedrich الآن إجراء دردشة محلية بذاكرة محلية دائمة، وتوليد الصور، وتوليد الفيديو والصوت عبر مكوّنات وسائط اختيارية، وتحويل الكلام إلى نص والنص إلى كلام، واستخدام نماذج GGUF التي يوفّرها المستخدم، والبحث الاختياري على الويب لمن يرغب فيه. كما أعمل على تكامل MCP كي يتمكن Friedrich من التفاعل مع تطبيقات مثل Blender مع إبقاء الإنسان متحكمًا.',
          'أما Steam، فكان ذلك الاختيار مقصودًا جدًا. رأيت أن Steam مغفلة إلى حد بعيد لنوع البرمجيات الذي أبنيه. فهناك ملايين من مستخدمي ويندوز موجودون فيها أصلًا، مع نظام توزيع وتحديث يثقون به، لكن قلة قليلة بدا أنها تنظر إلى Steam بوصفها مكانًا لتوزيع برمجيات ذكاء اصطناعي محلي جادة. وبالنسبة لي بدا ذلك فرصة أكثر منه قيدًا.',
          'وأردت أيضًا أن يبدو FriedrichAI كبرنامج تشتريه وتمتلكه، لا كخدمة ذكاء اصطناعي أخرى تستأجرها كل شهر. فلدى Steam أصلًا التوزيع والتحديثات التلقائية والدفع واسترداد المبالغ ومراجعات المستخدمين وجمهور هائل من مستخدمي ويندوز. والأهم أن الناس يفهمون هذه المعاملة: تشتري شيئًا وتنزّله فيبقى في مكتبتك. إن GitHub رائع للمطورين، لكنني أحاول تحديدًا أن أجعل الذكاء الاصطناعي المحلي في متناول من لا ينبغي أن يحتاجوا إلى معرفة ما هي بيئة Python أو حزمة CUDA أو سطر الأوامر كي يستخدموه.',
          'هناك بالتأكيد مقايضات. فقد صُمّمت Steam للألعاب لا لتطبيقات الذكاء الاصطناعي، لذا اضطررت إلى معالجة بعض مشكلات التوزيع والتغليف غير المعتادة. كما يفرض الذكاء الاصطناعي المحلي تحديات في دعم العتاد لا يواجهها تطبيق سطح مكتب عادي. لكنني ما زلت أرى عمومًا أنه كان الخيار الصحيح.',
          'على المدى البعيد، هدفي ليس مجرد وضع واجهة دردشة حول نموذج محلي. أريد أن يصبح FriedrichAI بيئة ذكاء اصطناعي محلية مفيدة فعلًا، مع الحفاظ على الأشياء التي دفعتني إلى بنائه أصلًا: الملكية المحلية والخصوصية وسهولة الوصول، وألا يُشترط بقاء خوادم المطوّر قائمة إلى الأبد كي يستمر عمل البرنامج الذي اشتريته.',
          'وتصحيح طريف أخير: اسم Friedrich تحية في الواقع لـ Friedrich Nietzsche، لا لـ Frederick the Great. كان الإلهام عبارة Nietzsche عن «التحديق في الهاوية»، وهي تبدو مناسبة جدًا لأن البشرية تبدو الآن وكأنها تحدّق في هاوية الذكاء الاصطناعي."',
        ],
        note: '— Randolph Smith، مطور',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: 'المقايضات: المزايا مقابل القيود',
        columns: [
          'الميزة',
          'المعنى في الاستخدام',
          'القيد / التحفّظ',
        ],
        rows: [
          {
            'الميزة': 'شراء مرة واحدة ودون حساب',
            'المعنى في الاستخدام': 'لا اشتراك ولا تسجيل ولا مفتاح API للمساعد الأساسي.',
            'القيد / التحفّظ': 'مغلق المصدر؛ والترخيص مملوك (proprietary).',
          },
          {
            'الميزة': 'يُثبَّت كاللعبة',
            'المعنى في الاستخدام': 'تتولى Steam الدفع والتحديثات والنسخة التجريبية المجانية.',
            'القيد / التحفّظ': 'لويندوز فقط، ومرتبط بحساب Steam.',
          },
          {
            'الميزة': 'ذاكرة محلية دائمة',
            'المعنى في الاستخدام': 'ينتقل السياق بين الجلسات على حاسوبك.',
            'القيد / التحفّظ': 'جودة الذاكرة لم تُختبر هنا.',
          },
          {
            'الميزة': 'حزم الصور والفيديو والصوت',
            'المعنى في الاستخدام': 'توليد وسائط دون خدمة سحابية.',
            'القيد / التحفّظ': 'تنزيلات كبيرة؛ NVIDIA أولاً وAMD تجريبي (beta).',
          },
          {
            'الميزة': 'إصدار 1.0 الكامل',
            'المعنى في الاستخدام': 'خرج من الوصول المبكر في 18 سبتمبر 2026.',
            'القيد / التحفّظ': '14 مراجعة علنية فقط على Steam حتى الآن.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو ويندوز الذين يريدون مساعداً يعمل دون اتصال وبلا إعداد تقني.** تدفق التثبيت ثم التحدث على Steam هو الهدف الرئيسي للتصميم.',
          '**من يفضّلون الدفع مرة واحدة على الاشتراكات.** لا يحتاج المساعد الأساسي إلى حساب ولا إلى مفتاح API.',
          '**المستخدمون الذين لديهم بطاقة NVIDIA ويريدون توليد وسائط محلياً.** حزم الصور والفيديو والصوت إضافات مجانية لها.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الترخيص والكود المصدري.** لم يُعثر على مستودع عام ولا على ترخيص مفتوح المصدر، لذا لا يمكن التحقق من السلوك بمقارنته بالكود.',
          '**الأداء والجودة عملياً.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم السرعة ولا جودة الذاكرة ولا مخرجات الوسائط.',
          '**قاعدة المستخدمين.** لا تنشر Steam أرقام مبيعات، لذا لم يتأكد بشكل مستقل عدد المستخدمين الذين دفعوا ثمن التطبيق.',
          '**تكامل MCP وBlender.** يقول المطوّر إنه قيد التطوير؛ ولم يُعثر على توثيق عام له.',
          '**ليس لمستخدمي ماك أو لينكس أو الجوال.** المدرج هو ويندوز 10/11 فقط.',
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
            'المنصات': 'macOS وويندوز ولينكس',
            'السعر / الترخيص': 'مجاني / Apache 2.0 (صيغة مختلفة)',
            'الفرق الرئيسي': 'دردشة سطح مكتب مفتوحة المصدر مع MCP وخادم API محلي',
          },
          {
            'التطبيق': '[GPT4All](/ar/power-local-llm/gpt4all-review)',
            'المنصات': 'macOS وويندوز ولينكس',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'تطبيق سطح مكتب مفتوح المصدر مع دردشة على المستندات المحلية',
          },
          {
            'التطبيق': '[LM Studio](/ar/power-local-llm/lm-studio-review)',
            'المنصات': 'macOS وويندوز ولينكس',
            'السعر / الترخيص': 'مجاني / مملوك',
            'الفرق الرئيسي': 'مشغّل يبدأ باكتشاف النماذج مع خادم محلي',
          },
          {
            'التطبيق': '[HilbertRaum](/ar/power-local-llm/hilbertraum-review)',
            'المنصات': 'ويندوز وmacOS ولينكس',
            'السعر / الترخيص': 'مجاني / GPL-3.0',
            'الفرق الرئيسي': 'مساحة عمل محمولة دون تثبيت مع أسئلة وأجوبة على المستندات',
          },
        ],
        note: 'تفاصيل المنافسين تتغير كثيراً؛ تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق من صفحته الخاصة.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل FriedrichAI مفتوح المصدر؟',
            a: 'لا. تعرض Steam إشعار حقوق نشر مملوكاً، ولم يُعثر على مستودع كود مصدري عام.',
          },
          {
            q: 'هل أحتاج إلى اشتراك أو حساب؟',
            a: 'لا. تنص صفحة Steam على أنه لا اشتراك ولا حساب ولا مفتاح API للمساعد الأساسي؛ لكنك تحتاج إلى حساب Steam لشرائه.',
          },
          {
            q: 'هل يمكنني استخدام نماذجي الخاصة؟',
            a: 'نعم، يمكن وضع نماذج GGUF المدعومة في مساحة النماذج المحلية وفحصها والتبديل بينها عبر مدير النماذج (Model Manager). وتختلف احتياجات النماذج من الذاكرة RAM وVRAM اختلافاً كبيراً.',
          },
          {
            q: 'هل يعمل على ماك أو لينكس؟',
            a: 'ليس بحسب صفحة Steam، التي تدرج ويندوز 10/11 (64 بت) فقط.',
          },
          {
            q: 'هل يمكنني تجربته قبل الشراء؟',
            a: 'نعم. توجد نسخة تجريبية مجانية كإدخال منفصل على Steam؛ وهي لقطة ثابتة للتحقق من التوافق وليست فترة تجريبية محدودة الزمن، وقد تعمل أبطأ من النسخة الكاملة.',
          },
          {
            q: 'هل يعمل مع بطاقة رسومات AMD؟',
            a: 'دعم AMD عبارة عن إصدار منفصل متوافق مع Radeon في مرحلة تجريبية (beta)، ويوصف توليد الوسائط على AMD بأنه لا يزال قيد التطوير.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'FriedrichAI محاولة جديرة بالاهتمام لتقديم الذكاء الاصطناعي المحلي كتطبيق ويندوز يُشترى مرة واحدة، مع ذاكرة محلية وصوت وأدوات مشاريع وحزم وسائط اختيارية في تثبيت واحد. في المقابل، الكود مغلق، وقاعدة المراجعات على Steam لا تتجاوز 14 مراجعة، وأفضل مسار للوسائط يقتصر على NVIDIA، ولم يُختبر شيء مما هنا عملياً. وهو يناسب مستخدمي ويندوز الذين يريدون مساعداً جاهزاً يعمل دون اتصال ويقبلون هذه الشروط؛ أما من يريدون كوداً قابلاً للتدقيق فيمكنهم مقارنته بـ[Jan](/ar/power-local-llm/jan-review) أو [GPT4All](/ar/power-local-llm/gpt4all-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[FriedrichAI: Offline AI على Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) — السعر والمتطلبات والميزات واللغات والنسخة التجريبية والمراجعات، جرى التحقق منها في 9 أكتوبر 2026.',
          '[أخبار FriedrichAI على Steam](https://store.steampowered.com/news/app/4111530) — منشور "FriedrichAI 1.0 Is Here" وملاحظات التحديثات اللاحقة، جرى التحقق منها في 9 أكتوبر 2026.',
          '[FriedrichAI Text To Image Pack](https://store.steampowered.com/app/4702720/) و[Video Generation](https://store.steampowered.com/app/4765280/) و[Audio Generation](https://store.steampowered.com/app/4765290/) — حزم الوسائط المجانية.',
          '[FriedrichAI على itch.io](https://rdub77.itch.io/friedrichai) — الإدراج الثانوي للمطوّر.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — تطبيق دردشة مجاني ومفتوح المصدر لسطح المكتب.',
          '[مراجعة GPT4All](/ar/power-local-llm/gpt4all-review) — تطبيق سطح مكتب بترخيص MIT مع دردشة على المستندات.',
          '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review) — مشغّل سطح مكتب يبدأ باكتشاف النماذج.',
          '[مراجعة HilbertRaum](/ar/power-local-llm/hilbertraum-review) — مساحة عمل محمولة دون تثبيت تعمل دون اتصال.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/friedrichai-review-hero-zh.webp',
    title: 'FriedrichAI 评测:在 Steam 上销售的离线 Windows AI 助手',
    seoTitle: 'FriedrichAI 评测:Steam 上的离线 Windows AI',
    intro: 'FriedrichAI 是独立开发者 Randolph Smith 开发的 Windows 桌面应用,在你自己的电脑上运行语言模型,并提供持久的本地记忆、已保存的对话、项目看板、本地文字转语音和语音转文字,以及可选的图像、视频和音频生成包。它通过 [Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) 销售,而不是通过 GitHub 或应用商店,版本 1.0 已于 2026 年 9 月 18 日结束抢先体验。源代码未公开。本评测基于 Steam 商店页面、其新闻动态和 DLC 页面(核实于 2026 年 10 月 9 日)以及开发者的一段留言;PromptQuorum 没有对该应用进行实测。',
    metaDescription: 'FriedrichAI 评测:一款在 Steam 上销售的付费 Windows 离线 AI 助手,含本地记忆、图像/视频/音频包,无需账号。涵盖硬件、隐私与局限。',
    twitterDescription: 'FriedrichAI 评测:一款在 Steam 上一次性购买的 Windows 离线 AI 助手,含本地记忆及可选的图像、视频和音频包。闭源,仅支持 Windows。',
    audience: '希望一次性购买、无需 Python 或命令行设置的离线 AI 助手的 Windows 用户,并且需要了解来源确认了什么、哪些内容无法验证。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'FriedrichAI 评测',
    targetKeywords: [
      'friedrichai 评测',
      'friedrichai 离线 ai',
      'friedrichai steam',
      'steam 上的 windows 离线 ai 助手',
      '无订阅的 windows 本地 ai 应用',
      '带记忆的 windows 本地 ai',
      'friedrichai 与 lm studio 对比',
    ],
    current_models_mentioned: [
      'Qwen',
      'GGUF models',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA RTX',
      'AMD Radeon',
      'Ryzen 7 5700X',
    ],
    leadAnswerBlock: '**FriedrichAI(截至 2026 年 10 月 9 日为版本 1.0)是一款仅支持 Windows 的 AI 助手,在 Steam 上一次性购买,运行本地模型,无需账号、订阅或 API 密钥。** 它面向宁愿安装一个应用、也不想自己搭建本地 AI 环境的用户,并提供可选的图像、视频和音频包。代码为闭源,Steam 上的评价基数仍然很小,支持最完善的媒体生成路径是 NVIDIA。',
    quickAnswerTop: {
      zh: {
        question: 'FriedrichAI 能在没有网络连接的情况下使用吗?',
        answer: '据 Steam 页面和开发者所述,可以:安装完成后,基础助手、记忆、已保存的对话和文字转语音都在本地运行。网页搜索是可选的,除非你自行配置否则保持关闭,可选的媒体包则是单独下载。',
        bullets: [
          '在 Steam 上一次性购买;免费演示版和三个免费媒体包作为单独的 Steam 条目提供。',
          '仅支持 Windows 10/11,聊天可回退到 CPU 运行,推荐使用 NVIDIA GPU。',
          '版本 1.0 于 2026 年 9 月 18 日发布公告,此前的抢先体验始于 2026 年 4 月 30 日。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速解答',
        anchor: 'quick-answer',
      },
      {
        label: 'FriedrichAI 是什么?',
        anchor: 'what-is-friedrichai',
      },
      {
        label: '开发者为何选择 Steam',
        anchor: 'why-steam',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '如何开始使用',
        anchor: 'getting-started',
      },
      {
        label: '来源已确认的功能',
        anchor: 'key-features',
      },
      {
        label: '硬件要求',
        anchor: 'hardware-requirements',
      },
      {
        label: '隐私与联网功能',
        anchor: 'privacy',
      },
      {
        label: '来自开发者',
        anchor: 'from-the-maker',
      },
      {
        label: '权衡:优点与局限',
        anchor: 'tradeoffs',
      },
      {
        label: '适合谁使用',
        anchor: 'who-should-use',
      },
      {
        label: '我们无法验证的内容',
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
            text: 'FriedrichAI 是一款闭源的 Windows AI 助手,由一位独立开发者在 Steam 上销售,运行带有持久记忆的本地模型,并提供可选的图像、视频和音频包,无需账号。',
          },
          {
            type: 'plain-terms',
            text: '你像买游戏一样在 Steam 上购买、安装,然后直接与它对话;关闭网络后,聊天、记忆和语音功能仍可使用,而较重的媒体生成则需要性能强劲的显卡。',
          },
        ],
        items: [
          '开发者:Randolph Smith,在 Steam 上同时列为开发者和发行商;自称是软件 QA 从业者,而非 AI 研究人员。',
          '价格与许可证:Steam 上一次性购买 $9.99 USD,无订阅;专有软件,未找到公开的源代码仓库。',
          '范围:本地聊天、记忆、已保存对话搜索、Todo/Doing/Blocked/Done 项目看板、用于 GGUF 模型的 Model Manager,以及可选的网页搜索。',
          '据 2026 年 10 月 9 日核实的信号:14 条 Steam 用户评价中有 13 条为好评,2026 年 9 月 18 日正式发布,最新补丁发布于 2026 年 10 月 6 日。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 Steam 商店页面、其新闻动态和 DLC 页面(核实于 2026 年 10 月 9 日)以及开发者的一段留言。PromptQuorum 没有对该应用进行实测或基准测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-friedrichai',
        title: 'FriedrichAI 是什么?',
        content: [
          '**FriedrichAI 是一款离线优先的 Windows AI 工作空间,把本地模型运行器、记忆和项目工具打包进一个可安装的应用。** 据其 [Steam 页面](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI),核心助手无需云端账号或 API 密钥,聊天、记忆和项目数据都保存在这台电脑上。',
          '据开发者所述,这个名字是向哲学家 Friedrich Nietzsche 致敬,而不是指腓特烈大帝。Randolph Smith 在下方的开发者留言中说,这款应用面向那些本不该需要知道 Python 环境或 CUDA wheel 是什么的人。',
        ],
      },
      whySteam: {
        id: 'why-steam',
        title: '开发者为何选择 Steam',
        content: [
          '**Randolph Smith 是有意选择 Steam 的:他希望本地 AI 给人的感觉是可以买下并拥有的软件,而 Steam 已经为 Windows 用户提供了他们信任的支付、更新和退款体系。** FriedrichAI 是一个不同寻常的例子:正式的本地 AI 软件在 Steam 而不是 GitHub 上销售。以下是根据下方开发者留言归纳的他的理由:',
        ],
        items: [
          '**一个未被充分利用的用户群。** 数以百万计的 Windows 用户已经在 Steam 上,并信任其分发和更新体系,但很少有开发者把它当作正式本地 AI 软件的发行平台。',
          '**买下并拥有,而不是租用。** 他想要的是一次性购买、永久留在游戏库中的软件,而不是又一个每月租用的 AI 服务。Steam 提供支付、自动更新、退款和用户评价。',
          '**为何不选 GitHub。** 他表示,GitHub 适合开发者,但 FriedrichAI 面向的是不应该需要了解 Python 环境、CUDA wheel 或命令行是什么的人。',
          '**不依赖他的服务器。** 即使开发者的服务器不再运行,软件也应当继续可用。',
        ],
        callouts: [
          {
            type: 'insight',
            text: '开发者自己指出了代价:Steam 是为游戏设计的,因此他不得不绕开一些不同寻常的分发和打包问题,而本地 AI 还带来了普通桌面应用没有的硬件支持挑战。Steam 提供的内容在其上架页面上一目了然:作为单独条目的免费演示版、作为 DLC 的免费附加包,以及公开的用户评价。',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**FriedrichAI 通过 Steam 发布,支持 Windows 10/11(64 位),售价 $9.99 USD;基础应用有免费演示版,媒体包是免费的附加内容。**',
        ],
        columns: [
          '项目',
          '获取途径',
        ],
        rows: [
          {
            '项目': '完整版',
            '获取途径': '[Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI),$9.99 USD',
          },
          {
            '项目': '免费演示版',
            '获取途径': '[Steam 演示版](https://store.steampowered.com/app/4861210/)',
          },
          {
            '项目': '媒体包',
            '获取途径': '免费 Steam 附加内容:图像、视频、音频',
          },
          {
            '项目': '网站',
            '获取途径': '[Steam 商店页面](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI)(未找到独立网站)',
          },
          {
            '项目': '其他上架页面',
            '获取途径': '[itch.io 页面](https://rdub77.itch.io/friedrichai)',
          },
          {
            '项目': '源代码',
            '获取途径': '未公开',
          },
        ],
        note: '本页是该应用在 [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory) 中词条的配套资料。据 2026 年 10 月 9 日核实的版本:1.0,来自 Steam 新闻帖“FriedrichAI 1.0 Is Here”。未找到专门的产品网站或隐私政策页面;Steam 页面是官方上架页面。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用',
        content: [
          '**Steam 页面建议分阶段测试;PromptQuorum 没有执行过这些步骤。**',
        ],
        numberedItems: [
          {
            title: '先试用免费演示版',
            whyItMatters: '演示版是一份固定的兼容性快照,而不是试用版,开发者请求买家在其运行不佳时不要购买完整版。',
          },
          {
            title: '安装基础助手并确认聊天可用',
            whyItMatters: 'Steam 页面建议在添加媒体包或更换模型之前,先确认本地聊天可正常运行。',
          },
          {
            title: '仅在硬件允许时再添加可选包',
            whyItMatters: '图像、视频和音频生成需要大量额外下载,并且比聊天需要强大得多的 GPU 性能。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**下面每一项都来自 Steam 页面、新闻帖或 DLC 列表;均未经独立测试。**',
        ],
        items: [
          '**聊天与记忆。** 带持久记忆的本地聊天、可重新打开和搜索的已保存对话,以及不再需要斜杠命令的纯对话界面。',
          '**项目工具。** 项目看板(Todo、Doing、Blocked、Done)、用于保存项目上下文的 Project Chronicle,以及本地文本和 Markdown 文件的导入。',
          '**模型。** 自带一个默认模型,另有 Model Manager,可扫描并切换用户自行提供的 GGUF 模型。Steam 页面称该应用使用 Apache License 2.0 许可的 Qwen 模型。',
          '**语音。** 可关闭的本地文字转语音,以及通过麦克风按钮实现的本地语音转文字,后者在 2026 年 8 月的一次更新中加入。',
          '**可选媒体。** 图像生成(含变体)、文生视频,以及音频和音乐生成,均为单独的免费包。',
          '**界面。** 八种界面语言:英语、乌克兰语、德语、法语、西班牙语、巴西葡萄牙语、韩语和日语。',
        ],
        note: 'Steam 页面仅列出英语的完整音频支持,因此其他七种语言的语音功能应在演示版中自行确认。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '硬件要求',
        content: [
          '**Steam 列出的最低要求是 Windows 10/11、16 GB 内存和 20 GB 存储空间,推荐使用 NVIDIA GPU,聊天可回退到 CPU。** 推荐配置为 Ryzen 7 5700X 级别的处理器、32 GB 内存,以及显存 10 GB 或更多的 NVIDIA RTX 显卡。',
          '媒体生成比聊天重得多:页面建议视频使用 12 GB 或更多显存,较长的片段使用 16 GB 或更多,并将视频、图生视频和 morph 工作流称为实验性功能。NVIDIA 是支持最完善的媒体路径;AMD 支持是一个单独的、处于测试阶段的 Radeon 兼容版本,2026 年 9 月的一次补丁增加了对较旧 Intel 处理器的支持。页面还提醒 Norton 用户先更新杀毒软件,因为较旧的病毒库可能会误报应用的部分内容。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与联网功能',
        content: [
          '**Steam 页面声明,聊天、记忆、已保存的对话和项目数据都保留在用户的设备上,核心助手无需 API 密钥。** 语音生成和语音识别被描述为在本地运行。',
          '可选的网页搜索是例外:除非配置否则保持关闭,并且可能需要用户自己的服务商账号或 API 密钥。由于源代码未公开,这一切都无法对照代码核查,而且这些是开发者的声明,而非审计结果。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 没有检查该应用的网络流量。处理机密数据的人应在关闭网页搜索并断开网络的情况下核实其行为。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '来自开发者',
        content: [
          'FriedrichAI 背后的独立开发者 Randolph Smith 分享了以下关于这款应用、他为何开发它以及为何选择 Steam 的内容。以下内容以开发者本人的话呈现,为便于阅读略作编辑,并非 PromptQuorum 独立的编辑评估:',
          '"FriedrichAI 其实几乎是个意外。我是一个资深的软件 QA,不是 AI 研究人员。我在 2022 年被裁员,后来开始尝试 AI 时,我对它完全是新手。最初我是用 AI 帮我做一个相当简单的纸牌游戏。这把我带进了本地 AI 这个越陷越深的兔子洞,而我不断遇到同一个问题:本地 AI 非常有意思,但要把一切安装、配置并跑起来,本身就可能是一个项目。',
          '于是 FriedrichAI 逐渐成了一次尝试:把这种体验打包成普通人真正能用的东西。基本理念依然很简单:安装它,运行它,和它对话。不需要云端账号,核心产品不需要 API 订阅,没有追踪,也不依赖我的服务器。你完全可以把电脑从互联网上断开,Friedrich 照样工作。',
          '从那时起它已经成长了很多。Friedrich 现在可以处理带持久本地记忆的本地聊天、图像生成、通过可选媒体组件实现的视频和音频生成、语音转文字和文字转语音、用户自行提供的 GGUF 模型,以及为有需要的人提供的可选网页搜索。我还在开发 MCP 集成,让 Friedrich 能够与 Blender 等应用交互,同时仍由人来掌控。',
          '至于 Steam,这个选择是非常有意为之的。我认为对于我正在做的这类软件,Steam 被严重低估了。那里已经有数百万 Windows 用户,有他们早已信任的分发和更新系统,但似乎很少有人把 Steam 看作发行正式的本地 AI 软件的地方。在我看来,这与其说是限制,不如说是机会。',
          '我也希望 FriedrichAI 给人的感觉是你买下并拥有的软件,而不是又一个每月租用的 AI 服务。Steam 本身就具备分发、自动更新、支付、退款、用户评价和庞大的 Windows 用户群。更重要的是,人们理解这笔交易:你买下它,下载它,它就留在你的游戏库里。GitHub 对开发者来说很棒,但我特别想让那些不应该为了使用本地 AI 而去了解 Python 环境、CUDA wheel 或命令行是什么的人也能用上它。',
          '确实存在一些取舍。Steam 是为游戏而不是 AI 应用设计的,所以我不得不绕开一些不寻常的分发和打包问题。本地 AI 还带来了普通桌面应用没有的硬件支持挑战。但总的来说,我仍然认为这是正确的选择。',
          '长远来看,我的目标不只是给本地模型套一个聊天界面。我希望 FriedrichAI 成为一个真正有用的本地 AI 环境,同时保留当初促使我做它的那些东西:本地所有权、隐私、易用性,以及不要求开发者的服务器必须永远在线,你买下的软件才能继续工作。',
          '还有一个有趣的更正:Friedrich 其实是向 Friedrich Nietzsche 致敬,而不是腓特烈大帝。灵感来自 Nietzsche 的“凝视深渊”,考虑到人类如今似乎正凝视着 AI 这片深渊,这显得格外贴切。"',
        ],
        note: '— Randolph Smith,开发者',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: '权衡:优点与局限',
        columns: [
          '优点',
          '实际使用中的含义',
          '局限 / 注意事项',
        ],
        rows: [
          {
            '优点': '一次购买,无需账号',
            '实际使用中的含义': '核心助手无需订阅、注册或 API 密钥。',
            '局限 / 注意事项': '闭源;许可证为专有。',
          },
          {
            '优点': '像游戏一样安装',
            '实际使用中的含义': 'Steam 负责付款、更新和免费演示版。',
            '局限 / 注意事项': '仅支持 Windows,且绑定 Steam 账号。',
          },
          {
            '优点': '持久的本地记忆',
            '实际使用中的含义': '上下文在你自己的电脑上跨会话保留。',
            '局限 / 注意事项': '记忆质量在此未经测试。',
          },
          {
            '优点': '图像、视频、音频包',
            '实际使用中的含义': '无需云服务即可生成媒体。',
            '局限 / 注意事项': '下载体积大;NVIDIA 优先,AMD 为测试版。',
          },
          {
            '优点': '完整的 1.0 版本',
            '实际使用中的含义': '自 2026 年 9 月 18 日起结束抢先体验。',
            '局限 / 注意事项': '目前 Steam 上仅有 14 条公开评价。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        items: [
          '**希望使用无需技术设置的离线助手的 Windows 用户。** 通过 Steam 安装后直接对话,是其主要设计目标。',
          '**宁愿一次付费也不要订阅的人。** 核心助手无需账号或 API 密钥。',
          '**拥有 NVIDIA GPU 并希望本地生成媒体的用户。** 图像、视频和音频包是为此提供的免费附加内容。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法验证的内容',
        items: [
          '**许可证与源代码。** 未找到公开代码仓库或开源许可证,因此无法对照代码核查其行为。',
          '**实际使用的性能与质量。** PromptQuorum 没有运行该应用,因此速度、记忆质量和媒体输出均未评估。',
          '**安装基数。** Steam 不公布销量数据,因此付费用户数量未经独立确认。',
          '**MCP 与 Blender 集成。** 开发者称其正在开发中;未找到相关的公开文档。',
          '**不适合 Mac、Linux 或移动端用户。** 仅列出 Windows 10/11。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: [
          '应用',
          '平台',
          '价格 / 许可证',
          '主要区别',
        ],
        rows: [
          {
            '应用': '[Jan](/zh/power-local-llm/jan-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / Apache 2.0(变体)',
            '主要区别': '开源桌面聊天,支持 MCP 和本地 API 服务器',
          },
          {
            '应用': '[GPT4All](/zh/power-local-llm/gpt4all-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源桌面应用,支持本地文档聊天',
          },
          {
            '应用': '[LM Studio](/zh/power-local-llm/lm-studio-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / 专有',
            '主要区别': '以模型发现为先的运行器,带本地服务器',
          },
          {
            '应用': '[HilbertRaum](/zh/power-local-llm/hilbertraum-review)',
            '平台': 'Windows、macOS、Linux',
            '价格 / 许可证': '免费 / GPL-3.0',
            '主要区别': '便携免安装的工作空间,支持文档问答',
          },
        ],
        note: '竞品信息经常变化;请在各应用自己的页面上确认其当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'FriedrichAI 是开源的吗?',
            a: '不是。Steam 显示的是专有版权声明,未找到公开的源代码仓库。',
          },
          {
            q: '我需要订阅或账号吗?',
            a: '不需要。Steam 页面称核心助手无需订阅、账号或 API 密钥;但购买时你确实需要一个 Steam 账号。',
          },
          {
            q: '我可以使用自己的模型吗?',
            a: '可以,受支持的 GGUF 模型可以放入本地模型工作区,经扫描后通过 Model Manager 切换。不同模型对内存和显存的需求差异很大。',
          },
          {
            q: '它能在 Mac 或 Linux 上运行吗?',
            a: '据 Steam 页面,不能,该页面仅列出 Windows 10/11(64 位)。',
          },
          {
            q: '购买前可以试用吗?',
            a: '可以。免费演示版作为单独的 Steam 条目提供;它是一份固定的兼容性快照,而不是限时试用版,运行速度可能比完整版慢。',
          },
          {
            q: '它能配合 AMD 显卡使用吗?',
            a: 'AMD 支持是一个单独的、处于测试阶段的 Radeon 兼容版本,AMD 的媒体生成被描述为仍在开发中。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'FriedrichAI 是把本地 AI 做成一次性购买的 Windows 应用的一次值得关注的尝试,一次安装即包含本地记忆、语音、项目工具和可选的媒体包。另一方面,代码为闭源,Steam 评价基数仅有 14 条,最佳媒体路径仅限 NVIDIA,这里的一切也都没有经过实测。它适合希望使用打包好的离线助手并接受这些条件的 Windows 用户;希望使用可审计代码的读者可以对比 [Jan](/zh/power-local-llm/jan-review) 或 [GPT4All](/zh/power-local-llm/gpt4all-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Steam 上的 FriedrichAI: Offline AI](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) — 价格、系统要求、功能、语言、演示版和评价,核实于 2026 年 10 月 9 日。',
          '[FriedrichAI 的 Steam 新闻](https://store.steampowered.com/news/app/4111530) — “FriedrichAI 1.0 Is Here”帖子及后续补丁说明,核实于 2026 年 10 月 9 日。',
          '[FriedrichAI Text To Image Pack](https://store.steampowered.com/app/4702720/)、[Video Generation](https://store.steampowered.com/app/4765280/) 和 [Audio Generation](https://store.steampowered.com/app/4765290/) — 免费媒体包。',
          '[itch.io 上的 FriedrichAI](https://rdub77.itch.io/friedrichai) — 开发者的次要上架页面。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Jan 评测](/zh/power-local-llm/jan-review) — 免费、开源的桌面聊天应用。',
          '[GPT4All 评测](/zh/power-local-llm/gpt4all-review) — 支持文档聊天、MIT 许可的桌面应用。',
          '[LM Studio 评测](/zh/power-local-llm/lm-studio-review) — 以模型发现为先的桌面运行器。',
          '[HilbertRaum 评测](/zh/power-local-llm/hilbertraum-review) — 便携免安装的离线工作空间。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-09',
    dateModified: '2026-10-09',
    next_refresh_due: '2027-04-09',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/friedrichai-review-hero-ko.webp',
    title: 'FriedrichAI 리뷰: Steam에서 판매하는 오프라인 Windows AI 어시스턴트',
    seoTitle: 'FriedrichAI 리뷰: Steam의 오프라인 Windows AI',
    intro: 'FriedrichAI는 1인 개발자 Randolph Smith가 만든 Windows 데스크톱 앱으로, 내 PC에서 언어 모델을 실행하고 지속되는 로컬 메모리, 저장된 대화, 프로젝트 보드, 로컬 텍스트 음성 변환과 음성 텍스트 변환, 그리고 선택형 이미지·영상·오디오 생성 팩을 더했습니다. GitHub나 앱 스토어가 아니라 [Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI)에서 판매되며, 버전 1.0은 2026년 9월 18일에 앞서 해보기(Early Access)를 마쳤습니다. 소스 코드는 공개되어 있지 않습니다. 이 리뷰는 2026년 10월 9일에 확인한 Steam 스토어 페이지, 뉴스 피드, DLC 페이지와 개발자의 코멘트를 근거로 하며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.',
    metaDescription: 'FriedrichAI 리뷰: 로컬 메모리와 이미지·영상·오디오 팩을 갖추고 계정 없이 쓰는, Steam에서 판매하는 유료 오프라인 Windows AI 어시스턴트입니다. 하드웨어, 개인정보, 한계를 정리했습니다.',
    twitterDescription: 'FriedrichAI 리뷰: Steam에서 한 번 구매하는 오프라인 Windows AI 어시스턴트. 로컬 메모리와 선택형 이미지·영상·오디오 팩을 갖췄습니다. 클로즈드 소스이며 Windows 전용입니다.',
    audience: 'Python이나 명령줄 설정 없이 한 번 구매해 쓰는 오프라인 AI 어시스턴트를 원하고, 출처가 무엇을 확인해 주는지와 무엇을 확인하지 못했는지 알아야 하는 Windows 이용자.',
    readTime: '9분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'FriedrichAI 리뷰',
    targetKeywords: [
      'friedrichai 리뷰',
      'friedrichai 오프라인 ai',
      'friedrichai steam',
      'steam 오프라인 ai 어시스턴트 windows',
      '구독 없는 로컬 ai 앱 windows',
      '메모리 기능이 있는 로컬 ai windows',
      'friedrichai lm studio 비교',
    ],
    current_models_mentioned: [
      'Qwen',
      'GGUF models',
    ],
    current_hardware_mentioned: [
      'Windows 10/11',
      'NVIDIA RTX',
      'AMD Radeon',
      'Ryzen 7 5700X',
    ],
    leadAnswerBlock: '**FriedrichAI(2026년 10월 9일 기준 버전 1.0)는 Steam에서 한 번 구매하면 계정, 구독, 필수 API 키 없이 로컬 모델을 실행하는 Windows 전용 AI 어시스턴트입니다.** 로컬 AI 환경을 직접 조립하기보다 앱을 설치하고 싶은 사람을 겨냥하며, 선택형 이미지·영상·오디오 팩을 더했습니다. 코드는 공개되어 있지 않고, Steam의 리뷰 수는 아직 매우 적으며, 미디어 생성은 NVIDIA 경로가 가장 잘 지원됩니다.',
    quickAnswerTop: {
      ko: {
        question: 'FriedrichAI는 인터넷 연결 없이도 작동합니까?',
        answer: 'Steam 페이지와 개발자에 따르면 그렇습니다. 기본 어시스턴트, 메모리, 저장된 대화, 텍스트 음성 변환은 설치 후 로컬에서 실행됩니다. 웹 검색은 선택 사항으로 설정하지 않으면 꺼져 있으며, 선택형 미디어 팩은 별도로 내려받아야 합니다.',
        bullets: [
          'Steam에서 한 번 구매하는 방식으로 판매되며, 무료 데모와 무료 미디어 팩 세 가지는 별도의 Steam 항목으로 있음.',
          'Windows 10/11 전용이며, 채팅은 CPU 대체 실행이 가능하고 NVIDIA GPU를 권장함.',
          '2026년 4월 30일에 시작한 앞서 해보기를 거쳐 2026년 9월 18일에 버전 1.0이 발표됨.',
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
        label: 'FriedrichAI란 무엇인가?',
        anchor: 'what-is-friedrichai',
      },
      {
        label: '개발자가 Steam을 선택한 이유',
        anchor: 'why-steam',
      },
      {
        label: '어디서 받나요?',
        anchor: 'get-it',
      },
      {
        label: '시작하는 방법',
        anchor: 'getting-started',
      },
      {
        label: '출처로 확인되는 기능',
        anchor: 'key-features',
      },
      {
        label: '하드웨어 요구 사항',
        anchor: 'hardware-requirements',
      },
      {
        label: '개인정보와 온라인 기능',
        anchor: 'privacy',
      },
      {
        label: '개발자의 말',
        anchor: 'from-the-maker',
      },
      {
        label: '장단점: 이점과 한계',
        anchor: 'tradeoffs',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 사항',
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
        label: '관련 읽을거리',
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
            text: 'FriedrichAI는 1인 개발자가 Steam에서 판매하는 클로즈드 소스 Windows AI 어시스턴트로, 지속되는 메모리와 선택형 이미지·영상·오디오 팩을 갖춘 로컬 모델을 계정 없이 실행합니다.',
          },
          {
            type: 'plain-terms',
            text: '게임처럼 Steam에서 구매해 설치하고 대화하면 되며, 네트워크를 끈 상태에서도 채팅, 메모리, 음성 기능은 계속 작동하지만 무거운 미디어 생성에는 강력한 그래픽 카드가 필요합니다.',
          },
        ],
        items: [
          '개발자: Randolph Smith로, Steam에는 개발자이자 퍼블리셔로 표기되어 있으며 스스로를 AI 연구자가 아니라 소프트웨어 QA 전문가라고 소개함.',
          '가격과 라이선스: Steam에서 구독 없이 한 번 $9.99 USD이며, 독점 라이선스이고 공개 소스 저장소는 찾지 못함.',
          '범위: 로컬 채팅, 메모리, 저장된 대화 검색, Todo/Doing/Blocked/Done 프로젝트 보드, GGUF 모델용 Model Manager, 선택형 웹 검색.',
          '2026년 10월 9일 확인 기준 지표: Steam 사용자 리뷰 14개 중 13개 긍정, 2026년 9월 18일 정식 출시, 최신 패치는 2026년 10월 6일.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 9일에 확인한 Steam 스토어 페이지, 뉴스 피드, DLC 페이지와 개발자의 코멘트를 근거로 합니다. PromptQuorum은 앱을 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-friedrichai',
        title: 'FriedrichAI란 무엇인가?',
        content: [
          '**FriedrichAI는 로컬 모델 실행기, 메모리, 프로젝트 도구를 설치형 앱 하나로 묶은 Windows용 오프라인 우선 AI 작업 공간입니다.** [Steam 페이지](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI)에 따르면 핵심 어시스턴트는 클라우드 계정이나 API 키가 필요 없고, 대화, 메모리, 프로젝트 데이터는 PC에 남습니다.',
          '이름은 개발자의 설명에 따르면 프리드리히 대왕(Frederick the Great)이 아니라 철학자 Friedrich Nietzsche에게서 따왔습니다. Randolph Smith는 아래의 개발자 코멘트에서 이 앱이 Python 환경이나 CUDA wheel이 무엇인지 몰라도 되는 사람들을 겨냥한다고 설명합니다.',
        ],
      },
      whySteam: {
        id: 'why-steam',
        title: '개발자가 Steam을 선택한 이유',
        content: [
          '**Randolph Smith는 의도적으로 Steam을 골랐습니다. 로컬 AI가 구매해서 소유하는 소프트웨어처럼 느껴지기를 바랐고, Steam에는 이미 Windows 이용자가 신뢰하는 결제·업데이트·환불 체계가 있기 때문입니다.** FriedrichAI는 본격적인 로컬 AI 소프트웨어를 GitHub가 아닌 Steam에서 판매하는 이례적인 사례입니다. 아래 개발자 코멘트를 바탕으로 요약한 그의 이유입니다.',
        ],
        items: [
          '**충분히 활용되지 않은 이용자층.** 이미 수백만 명의 Windows 이용자가 신뢰하는 배포 및 업데이트 체계와 함께 Steam에 있지만, 이곳을 본격적인 로컬 AI 소프트웨어의 터전으로 보는 개발자는 드뭅니다.',
          '**빌리는 것이 아니라 사서 소유하기.** 매달 빌려 쓰는 또 하나의 AI 서비스 대신, 라이브러리에 남는 일회성 구매를 원했습니다. Steam은 결제, 자동 업데이트, 환불, 이용자 리뷰를 제공합니다.',
          '**GitHub를 택하지 않은 이유.** 그는 GitHub가 개발자에게 적합하지만, FriedrichAI는 Python 환경, CUDA wheel, 명령줄이 무엇인지 몰라도 되어야 하는 사람들을 대상으로 한다고 말합니다.',
          '**그의 서버에 의존하지 않음.** 개발자의 서버가 사라지더라도 소프트웨어는 계속 작동해야 한다는 것입니다.',
        ],
        callouts: [
          {
            type: 'insight',
            text: '개발자 스스로 대가를 밝힙니다. Steam은 게임용으로 설계되었기 때문에 특이한 배포 및 패키징 문제를 우회해야 했고, 로컬 AI에는 일반 데스크톱 애플리케이션에는 없는 하드웨어 지원 과제도 따른다고 합니다. Steam이 제공하는 것은 게재 정보에서 확인할 수 있습니다. 별도 항목으로 있는 무료 데모, DLC로 제공되는 무료 추가 팩, 공개 이용자 리뷰입니다.',
          },
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**FriedrichAI는 Windows 10/11(64비트)용으로 Steam에서 $9.99 USD에 배포되며, 기본 앱은 무료 데모가 있고 미디어 팩은 무료 추가 콘텐츠입니다.**',
        ],
        columns: [
          '항목',
          '받는 곳',
        ],
        rows: [
          {
            '항목': '정식 버전',
            '받는 곳': '[Steam](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI), $9.99 USD',
          },
          {
            '항목': '무료 데모',
            '받는 곳': '[Steam 데모](https://store.steampowered.com/app/4861210/)',
          },
          {
            '항목': '미디어 팩',
            '받는 곳': '무료 Steam 추가 콘텐츠: 이미지, 영상, 오디오',
          },
          {
            '항목': '웹사이트',
            '받는 곳': '[Steam 스토어 페이지](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) (별도 사이트 없음)',
          },
          {
            '항목': '기타 게재처',
            '받는 곳': '[itch.io 페이지](https://rdub77.itch.io/friedrichai)',
          },
          {
            '항목': '소스 코드',
            '받는 곳': '공개되지 않음',
          },
        ],
        note: '이 페이지는 [Local LLM Software Directory](https://www.promptquorum.com/power-local-llm/local-llm-software-directory)에 있는 이 앱 항목의 보조 자료입니다. 2026년 10월 9일에 확인한 버전: 1.0 (Steam 뉴스 게시물 "FriedrichAI 1.0 Is Here" 기준). 전용 제품 웹사이트나 개인정보 처리방침 페이지는 찾지 못했으며, Steam 페이지가 공식 게재 정보입니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**Steam 페이지는 단계별로 테스트하라고 권하며, PromptQuorum은 이 단계를 직접 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '먼저 무료 데모를 써 보기',
            whyItMatters: '데모는 체험판이 아니라 고정된 호환성 스냅샷이며, 개발자는 잘 실행되지 않으면 정식 버전을 구매하지 말라고 안내합니다.',
          },
          {
            title: '기본 어시스턴트를 설치하고 채팅이 되는지 확인하기',
            whyItMatters: 'Steam 페이지는 미디어 팩을 추가하거나 모델을 바꾸기 전에 로컬 채팅이 되는지 확인하라고 안내합니다.',
          },
          {
            title: '하드웨어가 허용할 때만 선택형 팩 추가하기',
            whyItMatters: '이미지, 영상, 오디오 생성에는 큰 추가 다운로드와 채팅보다 훨씬 많은 GPU 성능이 필요합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 Steam 페이지, 뉴스 게시물 또는 DLC 목록에서 가져온 것이며, 어느 것도 독립적으로 테스트되지 않았습니다.**',
        ],
        items: [
          '**채팅과 메모리.** 지속되는 메모리를 갖춘 로컬 채팅, 다시 열고 검색할 수 있는 저장된 대화, 더 이상 슬래시 명령이 필요 없는 일반 대화형 인터페이스.',
          '**프로젝트 도구.** Project Board(Todo, Doing, Blocked, Done), 프로젝트 맥락을 보존하는 Project Chronicle, 로컬 텍스트와 Markdown 파일 가져오기.',
          '**모델.** 기본 내장 모델과 함께, 이용자가 제공한 GGUF 모델을 검색하고 전환하는 Model Manager. Steam 페이지는 이 앱이 Apache License 2.0의 Qwen 모델을 쓴다고 밝힙니다.',
          '**음성.** 끌 수 있는 로컬 텍스트 음성 변환과, 2026년 8월 업데이트에서 추가된 마이크 버튼을 통한 로컬 음성 텍스트 변환.',
          '**선택형 미디어.** 별도의 무료 팩으로 제공되는 이미지 생성(변형 포함), 텍스트 투 비디오, 오디오 및 음악 생성.',
          '**인터페이스.** 영어, 우크라이나어, 독일어, 프랑스어, 스페인어, 브라질 포르투갈어, 한국어, 일본어의 8개 인터페이스 언어.',
        ],
        note: 'Steam 페이지는 전체 오디오 지원을 영어에만 표시하므로, 나머지 7개 언어의 음성 기능은 데모에서 확인하는 것이 좋습니다.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '하드웨어 요구 사항',
        content: [
          '**Steam은 최소 사양으로 Windows 10/11, RAM 16 GB, 저장 공간 20 GB를 표시하며, NVIDIA GPU를 권장하고 채팅은 CPU로 대체 실행할 수 있다고 합니다.** 권장 구성은 Ryzen 7 5700X급 프로세서, RAM 32 GB, VRAM 10 GB 이상의 NVIDIA RTX 카드입니다.',
          '미디어 생성은 채팅보다 훨씬 무겁습니다. 페이지는 영상에 VRAM 12 GB 이상, 더 긴 클립에 16 GB 이상을 권하며, 영상, 이미지 투 비디오, 모프 워크플로는 실험적이라고 밝힙니다. 미디어 생성은 NVIDIA 경로가 가장 잘 지원되고, AMD 지원은 별도의 Radeon 호환 빌드가 베타이며, 2026년 9월 패치에서 구형 Intel 프로세서가 추가되었습니다. 또한 구형 바이러스 정의가 앱의 일부를 오탐할 수 있으므로 Norton 이용자는 먼저 백신을 업데이트하라고 경고합니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 온라인 기능',
        content: [
          '**Steam 페이지는 대화, 메모리, 저장된 대화, 프로젝트 데이터가 이용자의 기기에 남고 핵심 어시스턴트에는 API 키가 필요 없다고 밝힙니다.** 음성 생성과 음성 인식은 로컬에서 실행되는 것으로 설명됩니다.',
          '선택형 웹 검색은 예외입니다. 설정하지 않으면 꺼져 있고, 이용자 본인의 제공업체 계정이나 API 키가 필요할 수 있습니다. 소스가 공개되어 있지 않으므로 이 어느 것도 코드와 대조해 확인할 수 없으며, 이는 개발자의 선언이지 감사 결과가 아닙니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 앱의 네트워크 트래픽을 점검하지 않았습니다. 기밀 데이터를 다루는 경우에는 웹 검색을 끈 상태와 네트워크를 끊은 상태에서 동작을 직접 확인해야 합니다.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '개발자의 말',
        content: [
          'FriedrichAI의 1인 개발자 Randolph Smith가 앱과 개발 이유, 그리고 Steam을 선택한 이유에 대해 다음과 같이 전했습니다. 가독성을 위해 가볍게 편집한 개발자 본인의 말로 제시하는 것이며, PromptQuorum의 독립적인 편집 평가가 아닙니다:',
          '"FriedrichAI는 사실 거의 우연히 시작되었습니다. 저는 AI 연구자가 아니라 오래 일한 소프트웨어 QA 담당자입니다. 2022년에 해고되었고, 나중에 AI를 써 보기 시작했을 때는 아주 초보였습니다. 처음에는 꽤 단순한 카드 게임을 만들려고 AI의 도움을 받고 있었습니다. 그게 저를 로컬 AI라는 깊은 토끼굴로 더 끌고 갔고, 계속 같은 문제에 부딪혔습니다. 로컬 AI는 정말 흥미로웠지만, 모든 것을 설치하고 설정해서 작동시키는 일 자체가 하나의 프로젝트가 될 수 있었습니다.',
          '그래서 FriedrichAI는 점차 그 경험을 평범한 사람들이 실제로 쓸 수 있는 형태로 포장하려는 시도가 되었습니다. 기본 철학은 여전히 꽤 단순합니다. 설치하고, 실행하고, 대화하면 됩니다. 클라우드 계정도, 핵심 제품에 필요한 API 구독도, 추적도, 제 서버에 대한 의존도 없습니다. 컴퓨터를 말 그대로 인터넷에서 분리해도 Friedrich는 계속 작동합니다.',
          '거기서 상당히 성장했습니다. 이제 Friedrich는 지속되는 로컬 메모리를 갖춘 로컬 채팅, 이미지 생성, 선택형 미디어 구성 요소를 통한 영상과 오디오 생성, 음성 텍스트 변환과 텍스트 음성 변환, 이용자가 제공한 GGUF 모델, 그리고 원하는 사람을 위한 선택형 웹 검색을 처리할 수 있습니다. 또 Friedrich가 Blender 같은 애플리케이션과 상호작용하면서도 사람이 계속 통제권을 갖도록 MCP 연동을 작업하고 있습니다.',
          'Steam의 경우, 그 선택은 매우 의도적이었습니다. 제가 만드는 종류의 소프트웨어에 Steam이 크게 활용되지 못하고 있다고 생각했습니다. 이미 수백만 명의 Windows 이용자가 있고, 그들이 신뢰하는 배포 및 업데이트 시스템이 있는데도, 본격적인 로컬 AI 소프트웨어를 배포할 곳으로 Steam을 보는 사람은 거의 없는 것 같았습니다. 제게는 그것이 제약이라기보다 기회로 보였습니다.',
          '저는 FriedrichAI가 매달 빌려 쓰는 또 하나의 AI 서비스가 아니라, 구매해서 소유하는 소프트웨어처럼 느껴지기를 바랐습니다. Steam에는 이미 배포, 자동 업데이트, 결제, 환불, 이용자 리뷰, 그리고 엄청난 규모의 Windows 이용자층이 있습니다. 더 중요한 것은 사람들이 이 거래를 이해한다는 점입니다. 무언가를 사서 내려받으면 라이브러리에 남습니다. GitHub는 개발자에게 훌륭하지만, 저는 Python 환경, CUDA wheel, 명령줄이 무엇인지 몰라도 로컬 AI를 쓸 수 있게 하는 것을 특별히 목표로 하고 있습니다.',
          '분명 단점도 있습니다. Steam은 AI 애플리케이션이 아니라 게임을 위해 설계되었기 때문에, 몇 가지 특이한 배포 및 패키징 문제를 우회해야 했습니다. 로컬 AI에는 일반 데스크톱 애플리케이션에는 없는 하드웨어 지원 과제도 따릅니다. 그래도 전체적으로는 여전히 옳은 선택이었다고 생각합니다.',
          '장기적으로 제 목표는 로컬 모델에 채팅 인터페이스를 씌우는 데 그치지 않습니다. 제가 이 앱을 만들게 된 처음의 가치, 즉 로컬 소유, 개인정보 보호, 접근성, 그리고 구매한 소프트웨어가 계속 작동하기 위해 개발자의 서버가 영원히 살아 있어야 할 필요가 없다는 점을 지키면서, FriedrichAI가 진정으로 유용한 로컬 AI 환경이 되기를 바랍니다.',
          '그리고 웃긴 정정 하나: Friedrich는 사실 프리드리히 대왕(Frederick the Great)이 아니라 Friedrich Nietzsche에게 바치는 오마주입니다. 영감은 Nietzsche의 ‘심연을 들여다보라’였는데, 인류가 이제 AI라는 심연을 들여다보고 있는 것처럼 보이는 상황에 특히 잘 어울린다고 생각했습니다."',
        ],
        note: '— Randolph Smith, 1인 개발자',
      },
      tradeOffs: {
        id: 'tradeOffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: [
          '이점',
          '실제 사용에서의 의미',
          '한계 / 유의사항',
        ],
        rows: [
          {
            '이점': '한 번 구매, 계정 불필요',
            '실제 사용에서의 의미': '핵심 어시스턴트에 구독, 가입, API 키가 필요 없음.',
            '한계 / 유의사항': '소스가 공개되어 있지 않고 독점 라이선스임.',
          },
          {
            '이점': '게임처럼 설치',
            '실제 사용에서의 의미': 'Steam이 결제, 업데이트, 무료 데모를 처리함.',
            '한계 / 유의사항': 'Windows 전용이며 Steam 계정이 필요함.',
          },
          {
            '이점': '지속되는 로컬 메모리',
            '실제 사용에서의 의미': '내 PC에서 세션 간에 맥락이 이어짐.',
            '한계 / 유의사항': '메모리 품질은 여기서 테스트하지 않음.',
          },
          {
            '이점': '이미지·영상·오디오 팩',
            '실제 사용에서의 의미': '클라우드 서비스 없이 미디어를 생성함.',
            '한계 / 유의사항': '다운로드가 크고 NVIDIA 우선이며 AMD는 베타임.',
          },
          {
            '이점': '정식 1.0 출시',
            '실제 사용에서의 의미': '2026년 9월 18일부터 앞서 해보기를 벗어남.',
            '한계 / 유의사항': '지금까지 공개된 Steam 리뷰는 14개뿐임.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**기술적인 설정 없이 오프라인 어시스턴트를 원하는 Windows 이용자.** Steam에서 설치하고 바로 대화하는 흐름이 핵심 설계 목표입니다.',
          '**구독보다 한 번 결제하는 방식을 선호하는 분.** 핵심 어시스턴트에는 계정이나 API 키가 필요 없습니다.',
          '**로컬 미디어 생성을 원하는 NVIDIA GPU 이용자.** 이미지, 영상, 오디오 팩은 무료 추가 콘텐츠입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**라이선스와 소스 코드.** 공개 저장소나 오픈 소스 라이선스를 찾지 못했으므로, 동작을 코드와 대조해 확인할 수 없습니다.',
          '**실제 사용 성능과 품질.** PromptQuorum은 앱을 실행하지 않았으므로 속도, 메모리 품질, 미디어 출력은 평가하지 않았습니다.',
          '**설치 기반.** Steam은 판매 수치를 공개하지 않으므로 유료 이용자 수는 독립적으로 확인되지 않았습니다.',
          '**MCP와 Blender 연동.** 개발자는 작업 중이라고 밝히지만, 이에 대한 공개 문서는 찾지 못했습니다.',
          '**Mac, Linux, 모바일 이용자용이 아닙니다.** Windows 10/11만 표시되어 있습니다.',
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
          '핵심 차이',
        ],
        rows: [
          {
            '앱': '[Jan](/ko/power-local-llm/jan-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0 (변형)',
            '핵심 차이': 'MCP와 로컬 API 서버를 갖춘 오픈 소스 데스크톱 채팅',
          },
          {
            '앱': '[GPT4All](/ko/power-local-llm/gpt4all-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '로컬 문서 채팅을 갖춘 오픈 소스 데스크톱 앱',
          },
          {
            '앱': '[LM Studio](/ko/power-local-llm/lm-studio-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / 독점',
            '핵심 차이': '모델 탐색 중심이며 로컬 서버를 갖춘 실행기',
          },
          {
            '앱': '[HilbertRaum](/ko/power-local-llm/hilbertraum-review)',
            '플랫폼': 'Windows, macOS, Linux',
            '가격 / 라이선스': '무료 / GPL-3.0',
            '핵심 차이': '문서 Q&A를 갖춘 설치 불필요한 휴대용 작업 공간',
          },
        ],
        note: '경쟁 앱의 세부 사항은 자주 바뀌므로 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 게재 정보에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'FriedrichAI는 오픈 소스입니까?',
            a: '아닙니다. Steam에는 독점 저작권 표시가 있고, 공개 소스 저장소는 찾지 못했습니다.',
          },
          {
            q: '구독이나 계정이 필요한가요?',
            a: '아닙니다. Steam 페이지는 핵심 어시스턴트에 구독, 계정, API 키가 필요 없다고 밝힙니다. 다만 구매하려면 Steam 계정이 필요합니다.',
          },
          {
            q: '내 모델을 쓸 수 있나요?',
            a: '네, 지원되는 GGUF 모델을 로컬 모델 작업 공간에 넣고 Model Manager로 검색하고 전환할 수 있습니다. 모델마다 필요한 RAM과 VRAM이 크게 다릅니다.',
          },
          {
            q: 'Mac이나 Linux에서도 작동하나요?',
            a: 'Steam 페이지에 따르면 아닙니다. Windows 10/11(64비트)만 표시되어 있습니다.',
          },
          {
            q: '구매하기 전에 써 볼 수 있나요?',
            a: '네. 별도의 Steam 항목으로 무료 데모가 있습니다. 기간 제한이 있는 체험판이 아니라 고정된 호환성 스냅샷이며, 정식 버전보다 느릴 수 있습니다.',
          },
          {
            q: 'AMD 그래픽 카드에서도 작동하나요?',
            a: 'AMD 지원은 별도의 Radeon 호환 빌드가 베타이며, AMD에서의 미디어 생성은 아직 개발 중이라고 설명됩니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'FriedrichAI는 로컬 메모리, 음성, 프로젝트 도구, 선택형 미디어 팩을 하나의 설치에 담아 로컬 AI를 한 번 구매하는 Windows 애플리케이션으로 내놓은 주목할 만한 시도입니다. 반면 코드는 공개되어 있지 않고, Steam 리뷰는 14개뿐이며, 가장 좋은 미디어 경로는 NVIDIA 전용이고, 여기서는 아무것도 직접 테스트하지 않았습니다. 패키지로 된 오프라인 어시스턴트를 원하고 이런 조건을 받아들이는 Windows 이용자에게 적합하며, 감사할 수 있는 코드를 원한다면 [Jan](/ko/power-local-llm/jan-review)이나 [GPT4All](/ko/power-local-llm/gpt4all-review)과 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Steam의 FriedrichAI: Offline AI](https://store.steampowered.com/app/4111530/_FriedrichAI_Offline_AI) — 가격, 요구 사항, 기능, 언어, 데모, 리뷰. 2026년 10월 9일 확인.',
          '[FriedrichAI의 Steam 뉴스](https://store.steampowered.com/news/app/4111530) — "FriedrichAI 1.0 Is Here" 게시물과 이후 패치 노트. 2026년 10월 9일 확인.',
          '[FriedrichAI Text To Image Pack](https://store.steampowered.com/app/4702720/), [Video Generation](https://store.steampowered.com/app/4765280/), [Audio Generation](https://store.steampowered.com/app/4765290/) — 무료 미디어 팩.',
          '[itch.io의 FriedrichAI](https://rdub77.itch.io/friedrichai) — 개발자의 보조 게재 페이지.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 무료 오픈 소스 데스크톱 채팅 앱.',
          '[GPT4All 리뷰](/ko/power-local-llm/gpt4all-review) — 문서 채팅을 갖춘 MIT 라이선스 데스크톱 앱.',
          '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review) — 모델 탐색 중심의 데스크톱 실행기.',
          '[HilbertRaum 리뷰](/ko/power-local-llm/hilbertraum-review) — 설치가 필요 없는 휴대용 오프라인 작업 공간.',
        ],
      },
    },
  },
}
