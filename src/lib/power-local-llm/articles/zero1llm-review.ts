// Zero1LLM Review: A Desktop Chat App for Open Models with Web Search and Browser Control
// Slug: zero1llm-review
// Companion to: jan-review, gpt4all-review, lm-studio-review, msty-review
// Sources: zero1llm.ai (home, /download, /changelog, /pricing, /about, /privacy), all read 2026-10-24 — no hands-on testing.
// The site names no founder, states no licence and links no repository, so there is no Source row and no founder section.
// Prices: the site lists USD only (draft prices), so non-EN blocks keep the USD figures and say so — no conversion.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/zero1llm-review-hero-en.webp',
    title: 'Zero1LLM Review: Local Chat App with Web Search and Browser Control',
    seoTitle: 'Zero1LLM Review: Local AI Chat App with Web Search',
    intro:
      'Zero1LLM is a desktop app that, per its website, runs open models on your own computer and adds web search, permissioned browser control and file reading. This review reflects [zero1llm.ai](https://www.zero1llm.ai/) as checked on 24 October 2026, when the current download was version 0.1.10.',
    metaDescription:
      'Zero1LLM review: free-to-start desktop chat app for open models on Windows and Apple Silicon, with web search, browser control, privacy and open questions.',
    twitterDescription:
      'Zero1LLM review: runs open models locally and adds web search and file reading. Requirements, installers, free plan, unverified claims.',
    audience:
      'People comparing desktop chat apps for open models who want to know what Zero1LLM needs, what it costs, how it installs and what its website leaves unconfirmed.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Zero1LLM review',
    targetKeywords: [
      'zero1llm review',
      'zero1llm',
      'local ai chat app with web search',
      'run open models on windows and mac',
      'local llm browser control',
      'zero1llm vs lm studio',
    ],
    current_hardware_mentioned: ['Apple Silicon Mac', 'NVIDIA GPU', 'AMD GPU'],
    leadAnswerBlock:
      '**Zero1LLM (version 0.1.10) is a chat app for Windows and Apple Silicon Macs that, per its website, keeps your chats and open models on your computer and can search the web or use a browser with your permission.** The Free plan has no time limit; PromptQuorum has not installed or tested the app, so every claim here comes from the website.',
    quickAnswerTop: {
      en: {
        question: 'What do I need to run Zero1LLM?',
        answer:
          'A Windows 10 or 11 PC (64-bit) or a Mac with an M1 chip or newer, at least 8 GB of memory (16 GB recommended) and a free Zero1LLM account, according to the website. A graphics card is optional.',
        bullets: [
          'Runs open models from Hugging Face on llama.cpp, or MLX on Apple Silicon.',
          'Reads documents, spreadsheets and images, and can create files, charts and pictures.',
          'Browser control asks permission for each site.',
          'Installs by double-clicking an unsigned preview installer.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Zero1LLM?', anchor: 'what-is-zero1llm' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'What You Need', anchor: 'requirements' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Listed by the Website', anchor: 'key-features' },
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
            text: 'Zero1LLM is a desktop chat app for open models that adds web search, browser control and file reading.',
          },
          {
            type: 'plain-terms',
            text: 'You download a model, chat with it on your own computer, and can let it search the web or use a browser site by site.',
          },
        ],
        items: [
          'Maintenance: the current download, version 0.1.10, was published on 23 October 2026 and the changelog starts on 30 September 2026, so the project is active but under a month old; no stale-project warning applies.',
          'License: the website states none and links no source repository.',
          'Cost: a Free plan with no time limit; paid plans are drafts and payments are not switched on.',
          'Installers: both builds are unsigned previews, so Windows and macOS show a warning first.',
          'Basis: the maker\'s website, read on 24 October 2026, with no hands-on testing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not installed, tested or benchmarked Zero1LLM. Feature, privacy and price statements below are the maker\'s own.',
          },
        ],
      },
      overview: {
        id: 'what-is-zero1llm',
        title: 'What Is Zero1LLM?',
        content: [
          '**Zero1LLM is a desktop app that runs open models on your own computer, with optional cloud models through your own API keys.** The [website](https://www.zero1llm.ai/) names ERBrains IT Solutions Pvt Ltd as the company behind it and gives no individual founder or country.',
          'The changelog says the app was renamed to Zero1LLM in version 0.1.8 on 21 October 2026, when the website moved to [zero1llm.ai](https://www.zero1llm.ai/), and that the first window appeared on 30 September 2026. The About page adds that the product began as a VS Code extension. Its open models come from Hugging Face (Qwen, Gemma, Llama and Mistral are named) and run on llama.cpp, MLX on Apple Silicon, and whisper.cpp for speech.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Zero1LLM is downloaded from its own website, one installer per system.**',
        ],
        columns: ['System', 'Download'],
        rows: [
          { 'System': 'Windows 10 or 11 (64-bit)', 'Download': '[Zero1LLM_0.1.10_x64-setup.exe](https://www.zero1llm.ai/download) (67 MB)' },
          { 'System': 'Mac with Apple Silicon (M1 or newer)', 'Download': '[Zero1LLM_0.1.10_aarch64.dmg](https://www.zero1llm.ai/download) (72 MB)' },
          { 'System': 'Linux and Intel Macs', 'Download': 'Not available yet, per the download page' },
          { 'System': 'Website', 'Download': '[zero1llm.ai](https://www.zero1llm.ai/)' },
          { 'System': 'Privacy policy', 'Download': '[zero1llm.ai/privacy](https://www.zero1llm.ai/privacy)' },
        ],
        note: 'Version reviewed: 0.1.10, whose installer files were published on 23 October 2026 according to the download server; this is the latest upstream update at the time of checking. The download page calls both builds unsigned previews: Windows may show "protected your PC" (choose More info, then Run anyway) and macOS needs System Settings, Privacy & Security, Open Anyway. The page lists a SHA-256 hash for each file. The download links change with every release, so use the download page rather than a saved file link.',
      },
      requirements: {
        id: 'requirements',
        title: 'What You Need',
        content: [
          '**Zero1LLM needs 8 GB of memory at minimum and recommends 16 GB; a graphics card speeds up answers but is optional.** Memory decides which models are practical.',
        ],
        columns: ['Memory', 'Models the website suggests'],
        rows: [
          { 'Memory': '8 GB', 'Models the website suggests': 'Small models, 1B to 4B parameters' },
          { 'Memory': '16 GB', 'Models the website suggests': '7B to 12B parameters' },
          { 'Memory': '32 GB or more', 'Models the website suggests': 'Larger and mixture-of-experts models, plus image reading' },
        ],
        note: 'On Windows an NVIDIA or AMD graphics card is optional; on a Mac the page asks for 8 GB of unified memory at minimum. A free account is required, and after one sign-in the app works offline except for web search and the browser.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**Zero1LLM has a Free plan with no time limit; the paid plans are drafts, and the site says payments are not switched on.**',
        ],
        columns: ['Plan', 'Price (USD)', 'What the page lists'],
        rows: [
          { 'Plan': 'Free', 'Price (USD)': '$0', 'What the page lists': 'Up to 2 local models, web search, browser control, attachments' },
          { 'Plan': 'Pro', 'Price (USD)': '$20 (draft)', 'What the page lists': 'Up to 10 local models, premium web search, early access' },
          { 'Plan': 'Teams', 'Price (USD)': '$15 per person, minimum 3 (draft)', 'What the page lists': 'Coming soon; admin controls, shared cloud keys, one invoice' },
        ],
        note: 'Read from [zero1llm.ai/pricing](https://www.zero1llm.ai/pricing) on 24 October 2026. The page says prices and limits are drafts during testing and that nobody is charged yet. Cloud models are billed by their provider through your own key, not by Zero1LLM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**These steps follow the download page and the feature list; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Check your computer',
            whyItMatters: 'Compare memory and system with the requirements above; Intel Macs and Linux are not supported yet.',
          },
          {
            title: 'Download and open the installer',
            whyItMatters: 'Take the file for your system from the download page and accept the unsigned-build warning on first launch.',
          },
          {
            title: 'Sign in with a free account',
            whyItMatters: 'The pricing page says a free account is required; after one sign-in the app works offline.',
          },
          {
            title: 'Pick a model that fits your memory',
            whyItMatters: 'The Explore page hides models too large for your computer unless you choose to show them.',
          },
          {
            title: 'Chat, then add web search or files',
            whyItMatters: 'Use the /web command for sourced search, attach documents or images, and allow or deny each AI action when asked.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Listed by the Website',
        content: [
          '**Every item below comes from the website or its changelog.**',
        ],
        items: [
          '**Web search.** The /web command searches with clickable sources, and the model can trigger a search itself; the changelog says you can allow or deny before automatic searches.',
          '**Browser control.** The AI can use a browser only where you allow it, site by site; Settings, Permissions offers allow once, always allow or deny.',
          '**Files and knowledge base.** The app reads documents, spreadsheets and images, answers from a knowledge base with citations, and creates PDF, Word, Excel, CSV and PowerPoint files.',
          '**Pictures and video.** The changelog lists picture and short video creation, with logos placed on generated pictures.',
          '**Voice and memory.** Voice typing runs offline through whisper.cpp, and memory carries across chats.',
          '**Cloud models.** OpenAI, Anthropic, Gemini and OpenRouter can be added with your own key.',
          '**Other.** A /pkg command shows the latest package versions; the app updates itself automatically and has light and dark themes.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The website says local models run on your computer and that chats, memory and the knowledge base are stored there.** Cloud models are optional, and anything sent to them goes to that provider; keys you add are kept in the operating system\'s keychain, according to the privacy page.',
          'The same page says web searches and pages you ask the AI to open are fetched over the internet. For the website account it lists name, email, a hashed password, signed-in devices and usage records (token counts, model names and times, not message text). It is marked as a draft that will be replaced before public launch, and the company named as controller is ERBrains IT Solutions Pvt Ltd, with no postal address.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s statements. PromptQuorum has not audited the app or its network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Windows and Apple Silicon users with 16 GB or more** who want one app for local chat, web search and file reading.',
          '**People who want browser actions approved site by site** instead of an agent with open-ended access.',
          '**Early adopters who accept a preview build** and a free account.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality and speed.** PromptQuorum did not run Zero1LLM, so model performance and the browser-control behaviour are the maker\'s claims.',
          '**License and source.** The website states no licence and links no repository, so whether the code can be inspected is unknown.',
          '**Maker and track record.** Only a company name is given; the changelog starts on 30 September 2026, and the draft privacy policy has no date.',
          '**Release notes.** The changelog page lists releases up to 0.1.8; the changes in 0.1.9 and 0.1.10 are not published there.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[LM Studio](/power-local-llm/lm-studio-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / proprietary', 'Key difference': 'Mature model browser and local server; no built-in browser control' },
          { 'App': '[Jan](/power-local-llm/jan-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / Apache 2.0 variant', 'Key difference': 'Open-source offline chat client with a public repository' },
          { 'App': '[GPT4All](/power-local-llm/gpt4all-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'Simple open-source desktop chat with local document chat' },
          { 'App': '[Msty](/power-local-llm/msty-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Freemium / closed source', 'Key difference': 'Multi-provider chat client with a free tier and paid upgrades' },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Zero1LLM work offline?',
            a: 'The pricing page says yes after one sign-in, once a model is downloaded. Web search and the browser need a connection.',
          },
          {
            q: 'Can I use ChatGPT or Claude models in it?',
            a: 'Optionally: the website lists OpenAI, Anthropic, Gemini and OpenRouter with your own API key, billed by the provider and sent to that provider.',
          },
          {
            q: 'Is Zero1LLM the same product as the VS Code extension?',
            a: 'The About page says the product began as a VS Code extension; the desktop app is a separate download and is described as being in testing.',
          },
          {
            q: 'Why does Windows warn me when I open the installer?',
            a: 'The download page says the preview builds are unsigned. It gives a SHA-256 hash per file, which PromptQuorum has not checked.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Zero1LLM is a free-to-start app that, per its website, pairs local open models with sourced web search, site-by-site browser permissions and file reading, and installs by double-click. Against that, it is a weeks-old preview with unsigned installers, a mandatory account, draft prices and no stated licence or repository, and PromptQuorum has not tested it. It suits readers who want to try that combination early; those who want a longer track record or a public repository can compare [LM Studio](/power-local-llm/lm-studio-review), [Jan](/power-local-llm/jan-review) or [GPT4All](/power-local-llm/gpt4all-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Zero1LLM website](https://www.zero1llm.ai/) — product description, platforms, features and local-versus-cloud notes, checked 24 October 2026.',
          '[Zero1LLM download page](https://www.zero1llm.ai/download) — installer files, version, hashes, signing notes and requirements.',
          '[Zero1LLM changelog](https://www.zero1llm.ai/changelog) — release history from 30 September 2026 and the rename in 0.1.8.',
          '[Zero1LLM pricing](https://www.zero1llm.ai/pricing) and [privacy policy](https://www.zero1llm.ai/privacy) — plans, draft-price notice, account and data statements.',
          '[Zero1LLM About page](https://www.zero1llm.ai/about) — the company name and the VS Code origin.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[LM Studio Review](/power-local-llm/lm-studio-review) — a desktop app for downloading and running local models.',
          '[Jan Review](/power-local-llm/jan-review) — an open-source offline chat client.',
          '[GPT4All Review](/power-local-llm/gpt4all-review) — a simple desktop chat app with local document chat.',
          '[Msty Review](/power-local-llm/msty-review) — a multi-provider chat client with a free tier.',
          '[Local LLM Chat Assistants Compared](/power-local-llm/local-llm-chat-assistants-compared) — the category comparison for chat apps.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Zero1LLM Review: Local Chat App with Web Search and Browser Control',
      description:
        'Zero1LLM review: a free-to-start desktop chat app for open models. Plans, installers, privacy and what the website leaves unconfirmed.',
      url: 'https://promptquorum.com/power-local-llm/zero1llm-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'People evaluating a desktop chat app for running open models locally on Windows or Apple Silicon' },
      about: [
        { '@type': 'Thing', name: 'Zero1LLM' },
        { '@type': 'Thing', name: 'Local LLM chat apps' },
        { '@type': 'Thing', name: 'Web search for local models' },
        { '@type': 'Thing', name: 'Browser control' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/zero1llm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Zero1LLM Review', item: 'https://promptquorum.com/power-local-llm/zero1llm-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/zero1llm-review-hero-de.webp',
    title: 'Zero1LLM-Rezension: Lokale Chat-App mit Websuche und Browsersteuerung',
    seoTitle: 'Zero1LLM-Rezension: Lokale Chat-App mit Websuche',
    intro:
      'Zero1LLM ist eine Desktop-App für Windows und Macs mit Apple Silicon, die laut ihrer Website offene Modelle auf dem eigenen Computer ausführt und Websuche, Browsersteuerung mit Berechtigungen sowie das Lesen von Dateien ergänzt. Diese Rezension gibt [zero1llm.ai](https://www.zero1llm.ai/) wieder, wie am 24. Oktober 2026 geprüft, als der aktuelle Download die Version 0.1.10 war.',
    metaDescription:
      'Zero1LLM-Rezension: kostenlose Desktop-Chat-App für offene Modelle unter Windows und Apple Silicon, mit Websuche, Browsersteuerung und offenen Fragen.',
    twitterDescription:
      'Zero1LLM-Rezension: Desktop-App, die offene Modelle lokal ausführt und Websuche sowie Browsersteuerung ergänzt. Anforderungen, Installer, Gratis-Tarif, offene Punkte.',
    audience:
      'Nutzer von Windows und Apple Silicon, die Desktop-Chat-Apps für offene Modelle vergleichen und wissen möchten, was Zero1LLM benötigt, was es kostet, wie es sich installiert und was die Website unbestätigt lässt.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Zero1LLM Rezension',
    targetKeywords: [
      'zero1llm rezension',
      'zero1llm',
      'lokale ki chat app mit websuche',
      'offene modelle unter windows und mac ausführen',
      'lokales llm browsersteuerung',
      'zero1llm vs lm studio',
    ],
    current_hardware_mentioned: ['Apple Silicon Mac', 'NVIDIA GPU', 'AMD GPU'],
    leadAnswerBlock:
      '**Zero1LLM (Version 0.1.10) ist eine Desktop-App für Windows und Macs mit Apple Silicon, die laut ihrer Website offene Modelle auf Ihrem Computer ausführt und Websuche, Browsersteuerung mit Berechtigungen sowie das Lesen von Dateien ergänzt.** Der Gratis-Tarif hat keine zeitliche Begrenzung; PromptQuorum hat die App weder installiert noch getestet, daher stammt jede Aussage hier von der Website.',
    quickAnswerTop: {
      de: {
        question: 'Was brauche ich, um Zero1LLM auszuführen?',
        answer:
          'Laut Website einen Windows-10- oder -11-PC (64 Bit) oder einen Mac mit M1-Chip oder neuer, mindestens 8 GB Arbeitsspeicher (empfohlen 16 GB) und ein kostenloses Zero1LLM-Konto. Eine Grafikkarte ist optional.',
        bullets: [
          'Führt offene Modelle von Hugging Face mit llama.cpp aus, unter Apple Silicon mit MLX.',
          'Liest Dokumente, Tabellen und Bilder und kann Dateien, Diagramme und Bilder erstellen.',
          'Die Browsersteuerung fragt für jede Website nach der Erlaubnis.',
          'Installiert sich per Doppelklick auf einen unsignierten Vorschau-Installer.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Zero1LLM?', anchor: 'what-is-zero1llm' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Das brauchen Sie', anchor: 'requirements' },
      { label: 'Preise', anchor: 'pricing' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von der Website genannte Funktionen', anchor: 'key-features' },
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
            text: 'Zero1LLM ist eine Desktop-Chat-App, die offene Modelle auf Windows und Macs mit Apple Silicon ausführt und Websuche, Browsersteuerung sowie das Lesen von Dateien ergänzt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie laden ein Modell herunter, chatten damit auf Ihrem eigenen Computer und können es im Web suchen oder einen Browser Website für Website nutzen lassen.',
          },
        ],
        items: [
          'Pflege: Der aktuelle Download, Version 0.1.10, wurde am 23. Oktober 2026 veröffentlicht, und das Änderungsprotokoll beginnt am 30. September 2026; das Projekt ist also aktiv, aber erst wenige Wochen alt, und eine Warnung vor einem veralteten Projekt gilt nicht.',
          'Lizenz: Die Website nennt keine und verlinkt kein Quellcode-Repository.',
          'Kosten: ein Gratis-Tarif ohne zeitliche Begrenzung; die Bezahltarife sind Entwürfe, und Zahlungen sind nicht aktiviert.',
          'Installer: Beide Builds sind unsignierte Vorschauversionen, daher zeigen Windows und macOS zuerst eine Warnung.',
          'Grundlage: die Website des Herstellers, gelesen am 24. Oktober 2026, ohne eigenen Praxistest.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat Zero1LLM weder installiert noch getestet oder gemessen. Aussagen zu Funktionen, Datenschutz und Preisen unten sind die des Herstellers.',
          },
        ],
      },
      overview: {
        id: 'what-is-zero1llm',
        title: 'Was ist Zero1LLM?',
        content: [
          '**Zero1LLM ist eine Desktop-App, die offene Modelle auf Ihrem eigenen Computer ausführt, optional mit Cloud-Modellen über Ihre eigenen API-Schlüssel.** Die [Website](https://www.zero1llm.ai/) nennt ERBrains IT Solutions Pvt Ltd als das Unternehmen dahinter und gibt weder einen einzelnen Gründer noch ein Land an.',
          'Das Änderungsprotokoll besagt, dass die App in Version 0.1.8 am 21. Oktober 2026 in Zero1LLM umbenannt wurde, als die Website zu [zero1llm.ai](https://www.zero1llm.ai/) umzog, und dass das erste Fenster am 30. September 2026 erschien. Die Seite „About“ ergänzt, dass das Produkt als VS-Code-Erweiterung begann. Die offenen Modelle stammen von Hugging Face (genannt werden Qwen, Gemma, Llama und Mistral) und laufen mit llama.cpp, unter Apple Silicon mit MLX, und mit whisper.cpp für Sprache.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Zero1LLM wird von der eigenen Website heruntergeladen, mit je einem Installer pro System.**',
        ],
        columns: ['System', 'Download'],
        rows: [
          { 'System': 'Windows 10 oder 11 (64 Bit)', 'Download': '[Zero1LLM_0.1.10_x64-setup.exe](https://www.zero1llm.ai/download) (67 MB)' },
          { 'System': 'Mac mit Apple Silicon (M1 oder neuer)', 'Download': '[Zero1LLM_0.1.10_aarch64.dmg](https://www.zero1llm.ai/download) (72 MB)' },
          { 'System': 'Linux und Intel-Macs', 'Download': 'Laut Download-Seite noch nicht verfügbar' },
          { 'System': 'Website', 'Download': '[zero1llm.ai](https://www.zero1llm.ai/)' },
          { 'System': 'Datenschutzerklärung', 'Download': '[zero1llm.ai/privacy](https://www.zero1llm.ai/privacy)' },
        ],
        note: 'Geprüfte Version: 0.1.10, deren Installer-Dateien laut Download-Server am 23. Oktober 2026 veröffentlicht wurden; das ist das neueste Upstream-Update zum Zeitpunkt der Prüfung. Die Download-Seite bezeichnet beide Builds als unsignierte Vorschauversionen: Windows kann „Der Computer wurde durch Windows geschützt“ anzeigen (wählen Sie „Weitere Informationen“, dann „Trotzdem ausführen“), und macOS verlangt „Systemeinstellungen“, „Datenschutz & Sicherheit“, „Trotzdem öffnen“. Die Seite nennt für jede Datei einen SHA-256-Hash. Die Download-Links ändern sich mit jedem Release, nutzen Sie also die Download-Seite statt eines gespeicherten Dateilinks.',
      },
      requirements: {
        id: 'requirements',
        title: 'Das brauchen Sie',
        content: [
          '**Zero1LLM braucht mindestens 8 GB Arbeitsspeicher und empfiehlt 16 GB; eine Grafikkarte beschleunigt die Antworten, ist aber optional.** Der Arbeitsspeicher entscheidet, welche Modelle praktikabel sind.',
        ],
        columns: ['Arbeitsspeicher', 'Von der Website empfohlene Modelle'],
        rows: [
          { 'Arbeitsspeicher': '8 GB', 'Von der Website empfohlene Modelle': 'Kleine Modelle mit 1B bis 4B Parametern' },
          { 'Arbeitsspeicher': '16 GB', 'Von der Website empfohlene Modelle': '7B bis 12B Parameter' },
          { 'Arbeitsspeicher': '32 GB oder mehr', 'Von der Website empfohlene Modelle': 'Größere und Mixture-of-Experts-Modelle sowie das Lesen von Bildern' },
        ],
        note: 'Unter Windows ist eine NVIDIA- oder AMD-Grafikkarte optional; bei einem Mac verlangt die Seite mindestens 8 GB einheitlichen Speicher. Ein kostenloses Konto ist erforderlich, und nach einer einmaligen Anmeldung funktioniert die App offline, außer bei Websuche und Browser.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise',
        content: [
          '**Zero1LLM hat einen Gratis-Tarif ohne zeitliche Begrenzung; die Bezahltarife sind Entwürfe, und die Website sagt, dass Zahlungen nicht aktiviert sind.**',
        ],
        columns: ['Tarif', 'Preis (USD)', 'Laut Seite enthalten'],
        rows: [
          { 'Tarif': 'Free', 'Preis (USD)': '$0', 'Laut Seite enthalten': 'Bis zu 2 lokale Modelle, Websuche, Browsersteuerung, Anhänge' },
          { 'Tarif': 'Pro', 'Preis (USD)': '$20 (Entwurf)', 'Laut Seite enthalten': 'Bis zu 10 lokale Modelle, Premium-Websuche, früher Zugang' },
          { 'Tarif': 'Teams', 'Preis (USD)': '$15 pro Person, mindestens 3 (Entwurf)', 'Laut Seite enthalten': 'Demnächst; Admin-Steuerung, gemeinsame Cloud-Schlüssel, eine Rechnung' },
        ],
        note: 'Gelesen auf [zero1llm.ai/pricing](https://www.zero1llm.ai/pricing) am 24. Oktober 2026. Die Seite sagt, Preise und Limits seien während der Testphase Entwürfe und niemandem werde bisher etwas berechnet. Cloud-Modelle rechnet ihr Anbieter über Ihren eigenen Schlüssel ab, nicht Zero1LLM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen der Download-Seite und der Funktionsliste; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Den Computer prüfen',
            whyItMatters: 'Gleichen Sie Arbeitsspeicher und System mit den Anforderungen oben ab; Intel-Macs und Linux werden noch nicht unterstützt.',
          },
          {
            title: 'Den Installer herunterladen und öffnen',
            whyItMatters: 'Nehmen Sie von der Download-Seite die Datei für Ihr System und bestätigen Sie beim ersten Start die Warnung vor unsignierten Builds.',
          },
          {
            title: 'Mit einem kostenlosen Konto anmelden',
            whyItMatters: 'Die Preisseite sagt, ein kostenloses Konto sei erforderlich; nach einer einmaligen Anmeldung funktioniert die App offline.',
          },
          {
            title: 'Ein Modell wählen, das zum Arbeitsspeicher passt',
            whyItMatters: 'Die Seite „Explore“ blendet Modelle aus, die für Ihren Computer zu groß sind, sofern Sie sie nicht einblenden.',
          },
          {
            title: 'Chatten, dann Websuche oder Dateien hinzufügen',
            whyItMatters: 'Nutzen Sie den Befehl /web für eine Suche mit Quellen, hängen Sie Dokumente oder Bilder an, und erlauben oder verweigern Sie jede KI-Aktion, wenn danach gefragt wird.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von der Website genannte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt von der Website oder aus dem Änderungsprotokoll.**',
        ],
        items: [
          '**Websuche.** Der Befehl /web sucht mit anklickbaren Quellen, und das Modell kann eine Suche selbst auslösen; laut Änderungsprotokoll können Sie vor automatischen Suchen erlauben oder verweigern.',
          '**Browsersteuerung.** Die KI darf einen Browser nur dort nutzen, wo Sie es erlauben, Website für Website; unter Einstellungen, Berechtigungen gibt es „einmal erlauben“, „immer erlauben“ oder „verweigern“.',
          '**Dateien und Wissensdatenbank.** Die App liest Dokumente, Tabellen und Bilder, antwortet aus einer Wissensdatenbank mit Quellenangaben und erstellt PDF-, Word-, Excel-, CSV- und PowerPoint-Dateien.',
          '**Bilder und Video.** Das Änderungsprotokoll nennt die Erstellung von Bildern und kurzen Videos, wobei Logos auf erzeugten Bildern platziert werden.',
          '**Sprache und Gedächtnis.** Die Spracheingabe läuft offline über whisper.cpp, und ein Gedächtnis reicht über Chats hinweg.',
          '**Cloud-Modelle.** OpenAI, Anthropic, Gemini und OpenRouter lassen sich mit Ihrem eigenen Schlüssel hinzufügen.',
          '**Sonstiges.** Ein Befehl /pkg zeigt die neuesten Paketversionen an; die App aktualisiert sich automatisch und hat helle und dunkle Designs.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Die Website sagt, dass lokale Modelle auf Ihrem Computer laufen und dass Chats, Gedächtnis und Wissensdatenbank dort gespeichert werden.** Cloud-Modelle sind optional, und alles, was an sie gesendet wird, geht an den jeweiligen Anbieter; Schlüssel, die Sie hinzufügen, werden laut Datenschutzseite im Schlüsselbund des Betriebssystems aufbewahrt.',
          'Dieselbe Seite sagt, dass Websuchen und Seiten, die die KI auf Ihre Bitte öffnet, über das Internet abgerufen werden. Für das Website-Konto nennt sie Name, E-Mail, ein gehashtes Passwort, angemeldete Geräte und Nutzungsdaten (Token-Zahlen, Modellnamen und Zeiten, nicht den Nachrichtentext). Sie ist als Entwurf gekennzeichnet, der vor dem öffentlichen Start ersetzt wird, und als Verantwortlicher ist ERBrains IT Solutions Pvt Ltd ohne Postanschrift genannt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Aussagen des Herstellers. PromptQuorum hat weder die App noch ihren Netzwerkverkehr geprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Nutzer von Windows und Apple Silicon mit 16 GB oder mehr,** die eine App für lokalen Chat, Websuche und das Lesen von Dateien möchten.',
          '**Menschen, die Browseraktionen Website für Website freigeben möchten,** statt einem Agenten mit unbegrenztem Zugriff.',
          '**Early Adopter, die eine Vorschauversion** und ein kostenloses Konto akzeptieren.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität und Geschwindigkeit im Praxistest.** PromptQuorum hat Zero1LLM nicht ausgeführt; Modellleistung und das Verhalten der Browsersteuerung sind daher Aussagen des Herstellers.',
          '**Lizenz und Quellcode.** Die Website nennt keine Lizenz und verlinkt kein Repository; ob sich der Code einsehen lässt, ist daher unbekannt.',
          '**Hersteller und Erfolgsbilanz.** Genannt wird nur ein Firmenname; das Änderungsprotokoll beginnt am 30. September 2026, und die Datenschutzerklärung im Entwurf trägt kein Datum.',
          '**Release Notes.** Die Seite mit dem Änderungsprotokoll listet Releases bis 0.1.8; die Änderungen in 0.1.9 und 0.1.10 sind dort nicht veröffentlicht.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[LM Studio](/de/power-local-llm/lm-studio-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / proprietär', 'Hauptunterschied': 'Ausgereifter Modellbrowser und lokaler Server; keine eingebaute Browsersteuerung' },
          { 'App': '[Jan](/de/power-local-llm/jan-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / Apache-2.0-Variante', 'Hauptunterschied': 'Quelloffener Offline-Chat-Client mit öffentlichem Repository' },
          { 'App': '[GPT4All](/de/power-local-llm/gpt4all-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Einfacher quelloffener Desktop-Chat mit lokalem Dokumenten-Chat' },
          { 'App': '[Msty](/de/power-local-llm/msty-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Freemium / Closed Source', 'Hauptunterschied': 'Chat-Client für mehrere Anbieter mit Gratis-Tarif und kostenpflichtigen Upgrades' },
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag der App.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Zero1LLM offline?',
            a: 'Die Preisseite sagt ja, nach einer einmaligen Anmeldung und sobald ein Modell heruntergeladen ist. Websuche und Browser brauchen eine Verbindung.',
          },
          {
            q: 'Kann ich ChatGPT- oder Claude-Modelle darin nutzen?',
            a: 'Optional: Die Website nennt OpenAI, Anthropic, Gemini und OpenRouter mit Ihrem eigenen API-Schlüssel, vom Anbieter abgerechnet und an diesen Anbieter gesendet.',
          },
          {
            q: 'Ist Zero1LLM dasselbe Produkt wie die VS-Code-Erweiterung?',
            a: 'Die Seite „About“ sagt, das Produkt habe als VS-Code-Erweiterung begonnen; die Desktop-App ist ein eigener Download und wird als in der Testphase beschrieben.',
          },
          {
            q: 'Warum warnt mich Windows beim Öffnen des Installers?',
            a: 'Die Download-Seite sagt, die Vorschau-Builds seien unsigniert. Sie nennt pro Datei einen SHA-256-Hash, den PromptQuorum nicht geprüft hat.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Zero1LLM ist eine Desktop-App mit kostenlosem Einstieg, die laut ihrer Website lokale offene Modelle mit Websuche mit Quellen, Browserberechtigungen Website für Website und dem Lesen von Dateien verbindet und sich unter Windows und auf Macs mit Apple Silicon per Doppelklick installiert. Dagegen stehen: eine wenige Wochen alte Vorschauversion mit unsignierten Installern, ein verpflichtendes Konto, Preise im Entwurf und keine genannte Lizenz oder kein Repository, und PromptQuorum hat sie nicht getestet. Sie eignet sich für Leser, die diese Kombination früh ausprobieren möchten; wer eine längere Erfolgsbilanz oder ein öffentliches Repository will, kann [LM Studio](/de/power-local-llm/lm-studio-review), [Jan](/de/power-local-llm/jan-review) oder [GPT4All](/de/power-local-llm/gpt4all-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Zero1LLM-Website](https://www.zero1llm.ai/) — Produktbeschreibung, Plattformen, Funktionen und Hinweise zu lokal und Cloud, geprüft am 24. Oktober 2026.',
          '[Zero1LLM-Download-Seite](https://www.zero1llm.ai/download) — Installer-Dateien, Version, Hashes, Hinweise zur Signierung und Anforderungen.',
          '[Zero1LLM-Änderungsprotokoll](https://www.zero1llm.ai/changelog) — Release-Verlauf ab dem 30. September 2026 und die Umbenennung in 0.1.8.',
          '[Zero1LLM-Preise](https://www.zero1llm.ai/pricing) und [Datenschutzerklärung](https://www.zero1llm.ai/privacy) — Tarife, Hinweis auf Entwurfspreise, Angaben zu Konto und Daten.',
          '[Zero1LLM-Seite „About“](https://www.zero1llm.ai/about) — der Firmenname und die Herkunft als VS-Code-Erweiterung.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[LM-Studio-Rezension](/de/power-local-llm/lm-studio-review) — eine Desktop-App zum Herunterladen und Ausführen lokaler Modelle.',
          '[Jan-Rezension](/de/power-local-llm/jan-review) — ein quelloffener Offline-Chat-Client.',
          '[GPT4All-Rezension](/de/power-local-llm/gpt4all-review) — eine einfache Desktop-Chat-App mit lokalem Dokumenten-Chat.',
          '[Msty-Rezension](/de/power-local-llm/msty-review) — ein Chat-Client für mehrere Anbieter mit Gratis-Tarif.',
          '[Lokale LLM-Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared) — der Kategorievergleich für Chat-Apps.',
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
    theme: 'Overview & Reference',
    heroImage: '/images/zero1llm-review-hero-es.webp',
    title: 'Reseña de Zero1LLM: chat local con búsqueda web y control del navegador',
    seoTitle: 'Reseña de Zero1LLM: app de chat local con búsqueda web',
    intro:
      'Zero1LLM es una aplicación de escritorio para Windows y Macs con Apple Silicon que, según su sitio web, ejecuta modelos abiertos en tu propio equipo y añade búsqueda web, control del navegador con permisos y lectura de archivos. Esta reseña refleja [zero1llm.ai](https://www.zero1llm.ai/) tal como se comprobó el 24 de octubre de 2026, cuando la descarga vigente era la versión 0.1.10.',
    metaDescription:
      'Reseña de Zero1LLM: app de chat gratuita para modelos abiertos en Windows y Apple Silicon, con búsqueda web, control del navegador y dudas abiertas.',
    twitterDescription:
      'Reseña de Zero1LLM: app de escritorio que ejecuta modelos abiertos en local y añade búsqueda web y control del navegador. Requisitos, instaladores y dudas.',
    audience:
      'Personas con Windows o Apple Silicon que comparan aplicaciones de chat de escritorio para modelos abiertos y quieren saber qué necesita Zero1LLM, cuánto cuesta, cómo se instala y qué deja sin confirmar su sitio web.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Zero1LLM',
    targetKeywords: [
      'reseña zero1llm',
      'zero1llm',
      'app de chat con ia local y búsqueda web',
      'ejecutar modelos abiertos en windows y mac',
      'control del navegador con llm local',
      'zero1llm frente a lm studio',
    ],
    current_hardware_mentioned: ['Apple Silicon Mac', 'NVIDIA GPU', 'AMD GPU'],
    leadAnswerBlock:
      '**Zero1LLM (versión 0.1.10) es una aplicación de escritorio para Windows y Macs con Apple Silicon que, según su sitio web, ejecuta modelos abiertos en tu equipo y añade búsqueda web, control del navegador con permisos y lectura de archivos.** El plan Free no tiene límite de tiempo; PromptQuorum no ha instalado ni probado la aplicación, así que toda afirmación de esta reseña procede del sitio web.',
    quickAnswerTop: {
      es: {
        question: '¿Qué necesito para ejecutar Zero1LLM?',
        answer:
          'Según el sitio web, un PC con Windows 10 u 11 (64 bits) o un Mac con chip M1 o posterior, al menos 8 GB de memoria (se recomiendan 16 GB) y una cuenta gratuita de Zero1LLM. La tarjeta gráfica es opcional.',
        bullets: [
          'Ejecuta modelos abiertos de Hugging Face con llama.cpp, o con MLX en Apple Silicon.',
          'Lee documentos, hojas de cálculo e imágenes, y puede crear archivos, gráficos e imágenes.',
          'El control del navegador pide permiso para cada sitio.',
          'Se instala con doble clic en un instalador de vista previa sin firmar.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Zero1LLM?', anchor: 'what-is-zero1llm' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Qué necesitas', anchor: 'requirements' },
      { label: 'Precios', anchor: 'pricing' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones que indica el sitio web', anchor: 'key-features' },
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
            text: 'Zero1LLM es una aplicación de chat de escritorio que ejecuta modelos abiertos en Windows y Macs con Apple Silicon y añade búsqueda web, control del navegador y lectura de archivos.',
          },
          {
            type: 'plain-terms',
            text: 'Descargas un modelo, chateas con él en tu propio equipo y puedes dejar que busque en la web o use un navegador sitio por sitio.',
          },
        ],
        items: [
          'Mantenimiento: la descarga vigente, la versión 0.1.10, se publicó el 23 de octubre de 2026 y el registro de cambios empieza el 30 de septiembre de 2026, así que el proyecto está activo pero tiene menos de un mes; no se aplica ninguna advertencia de proyecto abandonado.',
          'Licencia: el sitio web no indica ninguna y no enlaza ningún repositorio de código.',
          'Coste: un plan Free sin límite de tiempo; los planes de pago son borradores y los pagos no están activados.',
          'Instaladores: ambas versiones son vistas previas sin firmar, así que Windows y macOS muestran primero una advertencia.',
          'Base: el sitio web del responsable, leído el 24 de octubre de 2026, sin pruebas prácticas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha instalado, probado ni medido Zero1LLM. Las afirmaciones sobre funciones, privacidad y precios que siguen son del propio responsable.',
          },
        ],
      },
      overview: {
        id: 'what-is-zero1llm',
        title: '¿Qué es Zero1LLM?',
        content: [
          '**Zero1LLM es una aplicación de escritorio que ejecuta modelos abiertos en tu propio equipo, con modelos en la nube opcionales mediante tus propias claves de API.** El [sitio web](https://www.zero1llm.ai/) nombra a ERBrains IT Solutions Pvt Ltd como la empresa que está detrás y no indica ningún fundador individual ni país.',
          'El registro de cambios dice que la aplicación pasó a llamarse Zero1LLM en la versión 0.1.8, el 21 de octubre de 2026, cuando el sitio web se trasladó a [zero1llm.ai](https://www.zero1llm.ai/), y que la primera ventana apareció el 30 de septiembre de 2026. La página Acerca de añade que el producto nació como una extensión de VS Code. Sus modelos abiertos proceden de Hugging Face (se nombran Qwen, Gemma, Llama y Mistral) y se ejecutan con llama.cpp, con MLX en Apple Silicon y con whisper.cpp para la voz.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Zero1LLM se descarga desde su propio sitio web, con un instalador por sistema.**',
        ],
        columns: ['Sistema', 'Descarga'],
        rows: [
          { 'Sistema': 'Windows 10 u 11 (64 bits)', 'Descarga': '[Zero1LLM_0.1.10_x64-setup.exe](https://www.zero1llm.ai/download) (67 MB)' },
          { 'Sistema': 'Mac con Apple Silicon (M1 o posterior)', 'Descarga': '[Zero1LLM_0.1.10_aarch64.dmg](https://www.zero1llm.ai/download) (72 MB)' },
          { 'Sistema': 'Linux y Mac con Intel', 'Descarga': 'Aún no disponible, según la página de descarga' },
          { 'Sistema': 'Sitio web', 'Descarga': '[zero1llm.ai](https://www.zero1llm.ai/)' },
          { 'Sistema': 'Política de privacidad', 'Descarga': '[zero1llm.ai/privacy](https://www.zero1llm.ai/privacy)' },
        ],
        note: 'Versión revisada: 0.1.10, cuyos archivos de instalación se publicaron el 23 de octubre de 2026 según el servidor de descargas; es la última actualización del proyecto en el momento de la comprobación. La página de descarga califica ambas versiones de vistas previas sin firmar: Windows puede mostrar «Windows protegió tu PC» (elige «Más información» y después «Ejecutar de todas formas») y macOS requiere Ajustes del Sistema, Privacidad y seguridad, «Abrir igualmente». La página indica un hash SHA-256 por archivo. Los enlaces de descarga cambian con cada versión, así que usa la página de descarga en lugar de un enlace de archivo guardado.',
      },
      requirements: {
        id: 'requirements',
        title: 'Qué necesitas',
        content: [
          '**Zero1LLM necesita 8 GB de memoria como mínimo y recomienda 16 GB; una tarjeta gráfica acelera las respuestas, pero es opcional.** La memoria decide qué modelos resultan prácticos.',
        ],
        columns: ['Memoria', 'Modelos que sugiere el sitio web'],
        rows: [
          { 'Memoria': '8 GB', 'Modelos que sugiere el sitio web': 'Modelos pequeños, de 1B a 4B parámetros' },
          { 'Memoria': '16 GB', 'Modelos que sugiere el sitio web': 'De 7B a 12B parámetros' },
          { 'Memoria': '32 GB o más', 'Modelos que sugiere el sitio web': 'Modelos mayores y de mezcla de expertos, además de lectura de imágenes' },
        ],
        note: 'En Windows, una tarjeta gráfica NVIDIA o AMD es opcional; en un Mac, la página pide 8 GB de memoria unificada como mínimo. Hace falta una cuenta gratuita y, tras iniciar sesión una vez, la aplicación funciona sin conexión salvo para la búsqueda web y el navegador.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios',
        content: [
          '**Zero1LLM tiene un plan Free sin límite de tiempo; los planes de pago son borradores y el sitio dice que los pagos no están activados.**',
        ],
        columns: ['Plan', 'Precio (USD)', 'Qué indica la página'],
        rows: [
          { 'Plan': 'Free', 'Precio (USD)': '$0', 'Qué indica la página': 'Hasta 2 modelos locales, búsqueda web, control del navegador, adjuntos' },
          { 'Plan': 'Pro', 'Precio (USD)': '$20 (borrador)', 'Qué indica la página': 'Hasta 10 modelos locales, búsqueda web premium, acceso anticipado' },
          { 'Plan': 'Teams', 'Precio (USD)': '$15 por persona, mínimo 3 (borrador)', 'Qué indica la página': 'Próximamente; controles de administración, claves de nube compartidas, una sola factura' },
        ],
        note: 'Leído en [zero1llm.ai/pricing](https://www.zero1llm.ai/pricing) el 24 de octubre de 2026. La página dice que los precios y límites son borradores durante las pruebas y que todavía no se cobra a nadie. Los modelos en la nube los factura su proveedor mediante tu propia clave, no Zero1LLM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen la página de descarga y la lista de funciones; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Comprueba tu equipo',
            whyItMatters: 'Compara la memoria y el sistema con los requisitos anteriores; los Mac con Intel y Linux aún no son compatibles.',
          },
          {
            title: 'Descarga y abre el instalador',
            whyItMatters: 'Toma de la página de descarga el archivo de tu sistema y acepta la advertencia de versión sin firmar en el primer inicio.',
          },
          {
            title: 'Inicia sesión con una cuenta gratuita',
            whyItMatters: 'La página de precios dice que hace falta una cuenta gratuita; tras iniciar sesión una vez, la aplicación funciona sin conexión.',
          },
          {
            title: 'Elige un modelo que quepa en tu memoria',
            whyItMatters: 'La página Explorar oculta los modelos demasiado grandes para tu equipo, salvo que decidas mostrarlos.',
          },
          {
            title: 'Chatea y luego añade búsqueda web o archivos',
            whyItMatters: 'Usa el comando /web para una búsqueda con fuentes, adjunta documentos o imágenes y permite o rechaza cada acción de la IA cuando se te pregunte.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones que indica el sitio web',
        content: [
          '**Cada punto siguiente procede del sitio web o de su registro de cambios.**',
        ],
        items: [
          '**Búsqueda web.** El comando /web busca con fuentes en las que se puede hacer clic, y el modelo puede lanzar una búsqueda por sí mismo; el registro de cambios dice que puedes permitir o rechazar antes de las búsquedas automáticas.',
          '**Control del navegador.** La IA solo puede usar un navegador donde tú lo permitas, sitio por sitio; Ajustes, Permisos ofrece permitir una vez, permitir siempre o rechazar.',
          '**Archivos y base de conocimiento.** La aplicación lee documentos, hojas de cálculo e imágenes, responde desde una base de conocimiento con citas y crea archivos PDF, Word, Excel, CSV y PowerPoint.',
          '**Imágenes y vídeo.** El registro de cambios menciona la creación de imágenes y vídeos cortos, con logotipos colocados sobre las imágenes generadas.',
          '**Voz y memoria.** El dictado por voz funciona sin conexión mediante whisper.cpp, y la memoria se mantiene entre chats.',
          '**Modelos en la nube.** Se pueden añadir OpenAI, Anthropic, Gemini y OpenRouter con tu propia clave.',
          '**Otros.** Un comando /pkg muestra las últimas versiones de los paquetes; la aplicación se actualiza sola y tiene temas claro y oscuro.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**El sitio web dice que los modelos locales se ejecutan en tu equipo y que los chats, la memoria y la base de conocimiento se guardan allí.** Los modelos en la nube son opcionales y todo lo que se les envía va a ese proveedor; las claves que añades se guardan en el llavero del sistema operativo, según la página de privacidad.',
          'La misma página dice que las búsquedas web y las páginas que pides a la IA que abra se obtienen por internet. Para la cuenta del sitio web indica nombre, correo electrónico, una contraseña con hash, dispositivos con sesión iniciada y registros de uso (recuentos de tokens, nombres de modelos y horas, no el texto de los mensajes). Está marcada como borrador que se sustituirá antes del lanzamiento público, y la empresa nombrada como responsable es ERBrains IT Solutions Pvt Ltd, sin dirección postal.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas son afirmaciones del responsable. PromptQuorum no ha auditado la aplicación ni su tráfico de red.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes usan Windows o Apple Silicon con 16 GB o más** y quieren una sola aplicación para chat local, búsqueda web y lectura de archivos.',
          '**Personas que quieren aprobar las acciones del navegador sitio por sitio** en lugar de un agente con acceso sin límites.',
          '**Quienes adoptan pronto y aceptan una versión de vista previa** y una cuenta gratuita.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad y velocidad en la práctica.** PromptQuorum no ejecutó Zero1LLM, así que el rendimiento de los modelos y el comportamiento del control del navegador son afirmaciones del responsable.',
          '**Licencia y código.** El sitio web no indica ninguna licencia ni enlaza ningún repositorio, así que se desconoce si el código se puede inspeccionar.',
          '**Responsable y trayectoria.** Solo se da el nombre de una empresa; el registro de cambios empieza el 30 de septiembre de 2026 y la política de privacidad en borrador no tiene fecha.',
          '**Notas de versión.** La página del registro de cambios enumera versiones hasta la 0.1.8; los cambios de la 0.1.9 y la 0.1.10 no se publican allí.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[LM Studio](/es/power-local-llm/lm-studio-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / propietaria', 'Diferencia clave': 'Explorador de modelos maduro y servidor local; sin control del navegador integrado' },
          { 'App': '[Jan](/es/power-local-llm/jan-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / variante de Apache 2.0', 'Diferencia clave': 'Cliente de chat sin conexión y de código abierto, con repositorio público' },
          { 'App': '[GPT4All](/es/power-local-llm/gpt4all-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Chat de escritorio sencillo y de código abierto, con chat con documentos locales' },
          { 'App': '[Msty](/es/power-local-llm/msty-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Freemium / código cerrado', 'Diferencia clave': 'Cliente de chat multiproveedor con nivel gratuito y mejoras de pago' },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Zero1LLM sin conexión?',
            a: 'La página de precios dice que sí, tras iniciar sesión una vez y con un modelo ya descargado. La búsqueda web y el navegador necesitan conexión.',
          },
          {
            q: '¿Puedo usar modelos de ChatGPT o Claude?',
            a: 'De forma opcional: el sitio web menciona OpenAI, Anthropic, Gemini y OpenRouter con tu propia clave de API, facturados por el proveedor y enviados a ese proveedor.',
          },
          {
            q: '¿Es Zero1LLM el mismo producto que la extensión de VS Code?',
            a: 'La página Acerca de dice que el producto nació como una extensión de VS Code; la aplicación de escritorio es una descarga aparte y se describe como en fase de pruebas.',
          },
          {
            q: '¿Por qué me avisa Windows al abrir el instalador?',
            a: 'La página de descarga dice que las versiones de vista previa no están firmadas. Indica un hash SHA-256 por archivo, que PromptQuorum no ha comprobado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Zero1LLM es una aplicación de escritorio gratuita para empezar que, según su sitio web, combina modelos abiertos locales con búsqueda web con fuentes, permisos de navegador sitio por sitio y lectura de archivos, y se instala con doble clic en Windows y en Macs con Apple Silicon. En contra, es una vista previa de hace pocas semanas, con instaladores sin firmar, cuenta obligatoria, precios en borrador y sin licencia ni repositorio indicados, y PromptQuorum no la ha probado. Encaja con quienes quieren probar pronto esa combinación; quienes prefieran una trayectoria más larga o un repositorio público pueden comparar [LM Studio](/es/power-local-llm/lm-studio-review), [Jan](/es/power-local-llm/jan-review) o [GPT4All](/es/power-local-llm/gpt4all-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Zero1LLM](https://www.zero1llm.ai/) — descripción del producto, plataformas, funciones y notas sobre local frente a nube, comprobado el 24 de octubre de 2026.',
          '[Página de descarga de Zero1LLM](https://www.zero1llm.ai/download) — archivos de instalación, versión, hashes, notas de firma y requisitos.',
          '[Registro de cambios de Zero1LLM](https://www.zero1llm.ai/changelog) — historial de versiones desde el 30 de septiembre de 2026 y el cambio de nombre en la 0.1.8.',
          '[Precios de Zero1LLM](https://www.zero1llm.ai/pricing) y [política de privacidad](https://www.zero1llm.ai/privacy) — planes, aviso de precios en borrador, y afirmaciones sobre la cuenta y los datos.',
          '[Página Acerca de de Zero1LLM](https://www.zero1llm.ai/about) — el nombre de la empresa y el origen en VS Code.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de LM Studio](/es/power-local-llm/lm-studio-review) — una aplicación de escritorio para descargar y ejecutar modelos locales.',
          '[Reseña de Jan](/es/power-local-llm/jan-review) — un cliente de chat sin conexión y de código abierto.',
          '[Reseña de GPT4All](/es/power-local-llm/gpt4all-review) — una aplicación de chat de escritorio sencilla con chat con documentos locales.',
          '[Reseña de Msty](/es/power-local-llm/msty-review) — un cliente de chat multiproveedor con nivel gratuito.',
          '[Asistentes de chat con LLM locales comparados](/es/power-local-llm/local-llm-chat-assistants-compared) — la comparativa de la categoría de aplicaciones de chat.',
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
    theme: 'Overview & Reference',
    heroImage: '/images/zero1llm-review-hero-fr.webp',
    title: 'Test de Zero1LLM : chat local avec recherche web et contrôle du navigateur',
    seoTitle: 'Test de Zero1LLM : chat local avec recherche web',
    intro:
      'Zero1LLM est une application de bureau pour Windows et Mac Apple Silicon qui, d’après son site, fait tourner des modèles ouverts sur votre propre ordinateur et ajoute la recherche web, le contrôle du navigateur sous autorisation et la lecture de fichiers. Ce test reflète [zero1llm.ai](https://www.zero1llm.ai/) tel que consulté le 24 octobre 2026, date à laquelle le téléchargement proposé était la version 0.1.10.',
    metaDescription:
      'Test de Zero1LLM : application de bureau gratuite pour modèles ouverts sous Windows et Apple Silicon, avec recherche web et contrôle du navigateur.',
    twitterDescription:
      'Test de Zero1LLM : une application de bureau qui fait tourner des modèles ouverts en local, avec recherche web et contrôle du navigateur. Prérequis, installeurs, offre gratuite.',
    audience:
      'Les utilisateurs de Windows et d’Apple Silicon qui comparent des applications de chat de bureau pour modèles ouverts et veulent savoir ce qu’exige Zero1LLM, ce qu’il coûte, comment il s’installe et ce que son site ne confirme pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Zero1LLM',
    targetKeywords: [
      'test zero1llm',
      'zero1llm',
      'application de chat ia locale avec recherche web',
      'faire tourner des modèles ouverts sur windows et mac',
      'llm local contrôle du navigateur',
      'zero1llm contre lm studio',
    ],
    current_hardware_mentioned: ['Apple Silicon Mac', 'NVIDIA GPU', 'AMD GPU'],
    leadAnswerBlock:
      '**Zero1LLM (version 0.1.10) est une application de bureau pour Windows et Mac Apple Silicon qui, d’après son site, fait tourner des modèles ouverts sur votre ordinateur et ajoute la recherche web, le contrôle du navigateur sous autorisation et la lecture de fichiers.** L’offre Free n’a pas de limite de durée ; PromptQuorum n’a ni installé ni testé l’application, donc toutes les affirmations ici viennent du site.',
    quickAnswerTop: {
      fr: {
        question: 'De quoi ai-je besoin pour faire tourner Zero1LLM ?',
        answer:
          'Un PC Windows 10 ou 11 (64 bits) ou un Mac doté d’une puce M1 ou plus récente, au moins 8 GB de mémoire (16 GB recommandés) et un compte Zero1LLM gratuit, selon le site. Une carte graphique est facultative.',
        bullets: [
          'Fait tourner des modèles ouverts de Hugging Face sur llama.cpp, ou MLX sur Apple Silicon.',
          'Lit les documents, les feuilles de calcul et les images, et peut créer des fichiers, des graphiques et des images.',
          'Le contrôle du navigateur demande l’autorisation pour chaque site.',
          'S’installe d’un double-clic sur un installeur de préversion non signé.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Zero1LLM ?', anchor: 'what-is-zero1llm' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Ce qu’il vous faut', anchor: 'requirements' },
      { label: 'Tarifs', anchor: 'pricing' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions listées par le site', anchor: 'key-features' },
      { label: 'Confidentialité et usage du réseau', anchor: 'privacy' },
      { label: 'À qui il s’adresse', anchor: 'who-should-use' },
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
            text: 'Zero1LLM est une application de chat de bureau qui fait tourner des modèles ouverts sur Windows et Mac Apple Silicon et ajoute la recherche web, le contrôle du navigateur et la lecture de fichiers.',
          },
          {
            type: 'plain-terms',
            text: 'Vous téléchargez un modèle, discutez avec lui sur votre propre ordinateur, et pouvez le laisser chercher sur le web ou utiliser un navigateur site par site.',
          },
        ],
        items: [
          'Maintenance : le téléchargement actuel, version 0.1.10, a été publié le 23 octobre 2026 et le journal des modifications commence le 30 septembre 2026 ; le projet est donc actif mais n’a pas un mois, et aucun avertissement de projet inactif ne s’applique.',
          'Licence : le site n’en indique aucune et ne renvoie vers aucun dépôt de code source.',
          'Coût : une offre Free sans limite de durée ; les offres payantes sont des brouillons et les paiements ne sont pas activés.',
          'Installeurs : les deux versions sont des préversions non signées, donc Windows et macOS affichent d’abord un avertissement.',
          'Base : le site du fabricant, lu le 24 octobre 2026, sans test pratique.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n’a ni installé, ni testé, ni mesuré Zero1LLM. Les déclarations sur les fonctions, la confidentialité et les prix ci-dessous sont celles du fabricant.',
          },
        ],
      },
      overview: {
        id: 'what-is-zero1llm',
        title: 'Qu’est-ce que Zero1LLM ?',
        content: [
          '**Zero1LLM est une application de bureau qui fait tourner des modèles ouverts sur votre propre ordinateur, avec en option des modèles cloud via vos propres clés d’API.** Le [site](https://www.zero1llm.ai/) désigne ERBrains IT Solutions Pvt Ltd comme l’entreprise qui l’édite et ne nomme ni fondateur individuel ni pays.',
          'Le journal des modifications indique que l’application a été renommée Zero1LLM dans la version 0.1.8, le 21 octobre 2026, lorsque le site est passé sur [zero1llm.ai](https://www.zero1llm.ai/), et que la première fenêtre est apparue le 30 septembre 2026. La page À propos ajoute que le produit est né comme extension de VS Code. Ses modèles ouverts viennent de Hugging Face (Qwen, Gemma, Llama et Mistral sont cités) et tournent sur llama.cpp, sur MLX pour Apple Silicon, et sur whisper.cpp pour la parole.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Zero1LLM se télécharge depuis son propre site, avec un installeur par système.**',
        ],
        columns: ['Système', 'Téléchargement'],
        rows: [
          { 'Système': 'Windows 10 ou 11 (64 bits)', 'Téléchargement': '[Zero1LLM_0.1.10_x64-setup.exe](https://www.zero1llm.ai/download) (67 MB)' },
          { 'Système': 'Mac avec Apple Silicon (M1 ou plus récent)', 'Téléchargement': '[Zero1LLM_0.1.10_aarch64.dmg](https://www.zero1llm.ai/download) (72 MB)' },
          { 'Système': 'Linux et Mac Intel', 'Téléchargement': 'Pas encore disponible, selon la page de téléchargement' },
          { 'Système': 'Site web', 'Téléchargement': '[zero1llm.ai](https://www.zero1llm.ai/)' },
          { 'Système': 'Politique de confidentialité', 'Téléchargement': '[zero1llm.ai/privacy](https://www.zero1llm.ai/privacy)' },
        ],
        note: 'Version testée : 0.1.10, dont les fichiers d’installation ont été publiés le 23 octobre 2026 selon le serveur de téléchargement ; c’est la dernière mise à jour du projet au moment de la vérification. La page de téléchargement qualifie les deux versions de préversions non signées : Windows peut afficher « Windows a protégé votre ordinateur » (choisissez « Informations complémentaires », puis « Exécuter quand même ») et macOS exige Réglages Système, Confidentialité et sécurité, « Ouvrir quand même ». La page indique une empreinte SHA-256 pour chaque fichier. Les liens de téléchargement changent à chaque version ; passez donc par la page de téléchargement plutôt que par un lien de fichier enregistré.',
      },
      requirements: {
        id: 'requirements',
        title: 'Ce qu’il vous faut',
        content: [
          '**Zero1LLM exige au moins 8 GB de mémoire et en recommande 16 GB ; une carte graphique accélère les réponses mais reste facultative.** La mémoire détermine quels modèles sont utilisables en pratique.',
        ],
        columns: ['Mémoire', 'Modèles suggérés par le site'],
        rows: [
          { 'Mémoire': '8 GB', 'Modèles suggérés par le site': 'Petits modèles, de 1B à 4B paramètres' },
          { 'Mémoire': '16 GB', 'Modèles suggérés par le site': 'De 7B à 12B paramètres' },
          { 'Mémoire': '32 GB ou plus', 'Modèles suggérés par le site': 'Modèles plus grands et modèles à mélange d’experts, ainsi que la lecture d’images' },
        ],
        note: 'Sous Windows, une carte graphique NVIDIA ou AMD est facultative ; sur Mac, la page demande au moins 8 GB de mémoire unifiée. Un compte gratuit est requis, et après une première connexion l’application fonctionne hors ligne, sauf pour la recherche web et le navigateur.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs',
        content: [
          '**Zero1LLM propose une offre Free sans limite de durée ; les offres payantes sont des brouillons, et le site indique que les paiements ne sont pas activés.**',
        ],
        columns: ['Offre', 'Prix (USD)', 'Ce que la page indique'],
        rows: [
          { 'Offre': 'Free', 'Prix (USD)': '$0', 'Ce que la page indique': 'Jusqu’à 2 modèles locaux, recherche web, contrôle du navigateur, pièces jointes' },
          { 'Offre': 'Pro', 'Prix (USD)': '$20 (brouillon)', 'Ce que la page indique': 'Jusqu’à 10 modèles locaux, recherche web premium, accès anticipé' },
          { 'Offre': 'Teams', 'Prix (USD)': '$15 par personne, minimum 3 (brouillon)', 'Ce que la page indique': 'Bientôt disponible ; contrôles d’administration, clés cloud partagées, une seule facture' },
        ],
        note: 'Lu sur [zero1llm.ai/pricing](https://www.zero1llm.ai/pricing) le 24 octobre 2026. Le site ne liste ses prix qu’en dollars US, et ils sont conservés tels quels, sans conversion. La page précise que les prix et les limites sont des brouillons pendant la phase de test et que personne n’est encore facturé. Les modèles cloud sont facturés par leur fournisseur via votre propre clé, pas par Zero1LLM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Ces étapes suivent la page de téléchargement et la liste des fonctions ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Vérifier votre ordinateur',
            whyItMatters: 'Comparez votre mémoire et votre système aux prérequis ci-dessus ; les Mac Intel et Linux ne sont pas encore pris en charge.',
          },
          {
            title: 'Télécharger et ouvrir l’installeur',
            whyItMatters: 'Prenez le fichier de votre système sur la page de téléchargement et acceptez l’avertissement de version non signée au premier lancement.',
          },
          {
            title: 'Se connecter avec un compte gratuit',
            whyItMatters: 'La page des tarifs indique qu’un compte gratuit est requis ; après une première connexion, l’application fonctionne hors ligne.',
          },
          {
            title: 'Choisir un modèle adapté à votre mémoire',
            whyItMatters: 'La page Explorer masque les modèles trop grands pour votre ordinateur, sauf si vous choisissez de les afficher.',
          },
          {
            title: 'Discuter, puis ajouter la recherche web ou des fichiers',
            whyItMatters: 'Utilisez la commande /web pour une recherche avec sources, joignez des documents ou des images, et autorisez ou refusez chaque action de l’IA lorsqu’elle vous le demande.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions listées par le site',
        content: [
          '**Chaque élément ci-dessous provient du site ou de son journal des modifications.**',
        ],
        items: [
          '**Recherche web.** La commande /web cherche avec des sources cliquables, et le modèle peut lancer une recherche de lui-même ; le journal des modifications indique que vous pouvez autoriser ou refuser avant les recherches automatiques.',
          '**Contrôle du navigateur.** L’IA ne peut utiliser un navigateur que là où vous l’autorisez, site par site ; Réglages, Autorisations propose d’autoriser une fois, d’autoriser toujours ou de refuser.',
          '**Fichiers et base de connaissances.** L’application lit les documents, les feuilles de calcul et les images, répond à partir d’une base de connaissances avec citations, et crée des fichiers PDF, Word, Excel, CSV et PowerPoint.',
          '**Images et vidéo.** Le journal des modifications mentionne la création d’images et de courtes vidéos, avec des logos placés sur les images générées.',
          '**Voix et mémoire.** La saisie vocale fonctionne hors ligne via whisper.cpp, et la mémoire se conserve d’une conversation à l’autre.',
          '**Modèles cloud.** OpenAI, Anthropic, Gemini et OpenRouter peuvent être ajoutés avec votre propre clé.',
          '**Autres.** Une commande /pkg affiche les dernières versions de paquets ; l’application se met à jour automatiquement et propose des thèmes clair et sombre.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Le site indique que les modèles locaux tournent sur votre ordinateur et que les conversations, la mémoire et la base de connaissances y sont stockées.** Les modèles cloud sont facultatifs, et tout ce qui leur est envoyé va chez ce fournisseur ; les clés que vous ajoutez sont conservées dans le trousseau du système d’exploitation, d’après la page de confidentialité.',
          'La même page indique que les recherches web et les pages que vous demandez à l’IA d’ouvrir sont récupérées via Internet. Pour le compte sur le site, elle liste le nom, l’e-mail, un mot de passe haché, les appareils connectés et des relevés d’usage (nombre de jetons, noms de modèles et heures, pas le texte des messages). Elle est présentée comme un brouillon qui sera remplacé avant le lancement public, et l’entreprise désignée comme responsable du traitement est ERBrains IT Solutions Pvt Ltd, sans adresse postale.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont les déclarations du fabricant. PromptQuorum n’a audité ni l’application ni son trafic réseau.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les utilisateurs de Windows et d’Apple Silicon avec 16 GB ou plus** qui veulent une seule application pour le chat local, la recherche web et la lecture de fichiers.',
          '**Les personnes qui veulent valider les actions du navigateur site par site** plutôt que de confier un accès illimité à un agent.',
          '**Les adeptes des nouveautés qui acceptent une préversion** et un compte gratuit.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité et vitesse en pratique.** PromptQuorum n’a pas fait tourner Zero1LLM ; les performances des modèles et le comportement du contrôle du navigateur sont donc des affirmations du fabricant.',
          '**Licence et code source.** Le site n’indique aucune licence et ne renvoie vers aucun dépôt ; on ignore donc si le code peut être inspecté.',
          '**Éditeur et historique.** Seul un nom d’entreprise est donné ; le journal des modifications commence le 30 septembre 2026, et la politique de confidentialité en brouillon n’est pas datée.',
          '**Notes de version.** La page du journal des modifications liste les versions jusqu’à la 0.1.8 ; les changements des versions 0.1.9 et 0.1.10 n’y sont pas publiés.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[LM Studio](/fr/power-local-llm/lm-studio-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / propriétaire', 'Différence clé': 'Navigateur de modèles abouti et serveur local ; pas de contrôle du navigateur intégré' },
          { 'Application': '[Jan](/fr/power-local-llm/jan-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / variante Apache 2.0', 'Différence clé': 'Client de chat hors ligne open source avec un dépôt public' },
          { 'Application': '[GPT4All](/fr/power-local-llm/gpt4all-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Chat de bureau open source simple, avec discussion sur documents locaux' },
          { 'Application': '[Msty](/fr/power-local-llm/msty-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Freemium / code fermé', 'Différence clé': 'Client de chat multifournisseur avec offre gratuite et mises à niveau payantes' },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez prix, licence et plateformes sur la fiche de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Zero1LLM fonctionne-t-il hors ligne ?',
            a: 'La page des tarifs répond oui après une première connexion, une fois un modèle téléchargé. La recherche web et le navigateur exigent une connexion.',
          },
          {
            q: 'Puis-je y utiliser des modèles ChatGPT ou Claude ?',
            a: 'En option : le site cite OpenAI, Anthropic, Gemini et OpenRouter avec votre propre clé d’API ; la facturation est faite par le fournisseur et les données lui sont envoyées.',
          },
          {
            q: 'Zero1LLM est-il le même produit que l’extension VS Code ?',
            a: 'La page À propos indique que le produit est né comme extension de VS Code ; l’application de bureau est un téléchargement distinct et est décrite comme en phase de test.',
          },
          {
            q: 'Pourquoi Windows m’avertit-il à l’ouverture de l’installeur ?',
            a: 'La page de téléchargement indique que les préversions ne sont pas signées. Elle fournit une empreinte SHA-256 par fichier, que PromptQuorum n’a pas vérifiée.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Zero1LLM est une application de bureau gratuite au départ qui, d’après son site, associe des modèles ouverts locaux, une recherche web avec sources, des autorisations de navigateur site par site et la lecture de fichiers, et s’installe d’un double-clic sur Windows et sur les Mac Apple Silicon. En contrepartie, c’est une préversion vieille de quelques semaines, avec des installeurs non signés, un compte obligatoire, des prix en brouillon et ni licence ni dépôt indiqués, et PromptQuorum ne l’a pas testée. Elle convient aux personnes qui veulent essayer tôt cette combinaison ; celles qui veulent un historique plus long ou un dépôt public peuvent comparer [LM Studio](/fr/power-local-llm/lm-studio-review), [Jan](/fr/power-local-llm/jan-review) ou [GPT4All](/fr/power-local-llm/gpt4all-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Zero1LLM](https://www.zero1llm.ai/) — description du produit, plateformes, fonctions et remarques sur le local par rapport au cloud, consultés le 24 octobre 2026.',
          '[Page de téléchargement de Zero1LLM](https://www.zero1llm.ai/download) — fichiers d’installation, version, empreintes, remarques sur la signature et prérequis.',
          '[Journal des modifications de Zero1LLM](https://www.zero1llm.ai/changelog) — historique des versions depuis le 30 septembre 2026 et changement de nom dans la 0.1.8.',
          '[Tarifs de Zero1LLM](https://www.zero1llm.ai/pricing) et [politique de confidentialité](https://www.zero1llm.ai/privacy) — offres, avis sur les prix en brouillon, déclarations sur le compte et les données.',
          '[Page À propos de Zero1LLM](https://www.zero1llm.ai/about) — le nom de l’entreprise et l’origine VS Code.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de LM Studio](/fr/power-local-llm/lm-studio-review) — une application de bureau pour télécharger et exécuter des modèles locaux.',
          '[Test de Jan](/fr/power-local-llm/jan-review) — un client de chat hors ligne open source.',
          '[Test de GPT4All](/fr/power-local-llm/gpt4all-review) — une application de chat de bureau simple avec discussion sur documents locaux.',
          '[Test de Msty](/fr/power-local-llm/msty-review) — un client de chat multifournisseur avec offre gratuite.',
          '[Assistants de chat LLM locaux : comparatif](/fr/power-local-llm/local-llm-chat-assistants-compared) — le comparatif de catégorie des applications de chat.',
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
    theme: 'Overview & Reference',
    heroImage: '/images/zero1llm-review-hero-ja.webp',
    title: 'Zero1LLMレビュー：Web検索とブラウザー操作を備えたローカルチャットアプリ',
    seoTitle: 'Zero1LLMレビュー：Web検索付きのローカルチャットアプリ',
    intro:
      'Zero1LLMは、公式サイトによれば、WindowsとApple Silicon搭載Mac向けのデスクトップアプリで、オープンモデルを自分のPC上で動かし、Web検索、許可制のブラウザー操作、ファイルの読み取りを加えます。本レビューは、2026年10月24日に確認した[zero1llm.ai](https://www.zero1llm.ai/)の内容に基づき、その時点の最新ダウンロードはバージョン0.1.10でした。',
    metaDescription:
      'Zero1LLMのレビュー：WindowsとApple Silicon向けの無料デスクトップチャットアプリ。Web検索、ブラウザー操作、インストーラー、プライバシー、未確認の点を解説します。',
    twitterDescription:
      'Zero1LLMのレビュー：オープンモデルをローカルで動かし、Web検索とブラウザー操作を加えるデスクトップアプリ。必要環境、インストーラー、無料プラン、未確認の主張を解説します。',
    audience:
      'オープンモデル向けのデスクトップチャットアプリを比較しているWindowsまたはApple Siliconのユーザーで、Zero1LLMに必要な環境、費用、インストール方法、そして公式サイトで確認できない点を知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Zero1LLM レビュー',
    targetKeywords: [
      'zero1llm レビュー',
      'zero1llm',
      'web検索付き ローカルai チャットアプリ',
      'windows mac オープンモデル 動かす',
      'ローカルllm ブラウザー操作',
      'zero1llm lm studio 比較',
    ],
    current_hardware_mentioned: ['Apple Silicon Mac', 'NVIDIA GPU', 'AMD GPU'],
    leadAnswerBlock:
      '**Zero1LLM（バージョン0.1.10）は、公式サイトによれば、WindowsとApple Silicon搭載Mac向けのデスクトップアプリで、オープンモデルをPC上で動かし、Web検索、許可制のブラウザー操作、ファイルの読み取りを加えます。** 無料プランに期限はありません。PromptQuorumはこのアプリをインストールもテストもしておらず、本レビューの記述はすべて公式サイトに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'Zero1LLMを動かすには何が必要ですか？',
        answer:
          '公式サイトによれば、Windows 10または11（64ビット）のPC、またはM1以降のチップを搭載したMac、8 GB以上のメモリ（16 GB推奨）、そして無料のZero1LLMアカウントが必要です。グラフィックスカードは必須ではありません。',
        bullets: [
          'Hugging Faceのオープンモデルを、llama.cpp（Apple SiliconではMLX）で動かします。',
          '文書、スプレッドシート、画像を読み取れ、ファイル、グラフ、画像を作成することもできます。',
          'ブラウザー操作は、サイトごとに許可を求めます。',
          '署名のないプレビュー版インストーラーをダブルクリックしてインストールします。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Zero1LLMとは', anchor: 'what-is-zero1llm' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '必要な環境', anchor: 'requirements' },
      { label: '料金', anchor: 'pricing' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '公式サイトに記載された機能', anchor: 'key-features' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
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
            text: 'Zero1LLMは、WindowsとApple Silicon搭載Macでオープンモデルを動かし、Web検索、ブラウザー操作、ファイルの読み取りを加えるデスクトップチャットアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'モデルをダウンロードして自分のPC上でチャットし、必要に応じてWeb検索や、サイトごとのブラウザー操作をAIに許可できます。',
          },
        ],
        items: [
          '保守状況：現在のダウンロードであるバージョン0.1.10は2026年10月23日に公開され、変更履歴は2026年9月30日から始まっています。活発ですが、まだ1か月に満たず、放置プロジェクトの警告は該当しません。',
          'ライセンス：公式サイトに記載はなく、ソースリポジトリへのリンクもありません。',
          '費用：期限のない無料プランがあります。有料プランは草案の段階で、決済はまだ有効になっていません。',
          'インストーラー：どちらのビルドも署名のないプレビュー版のため、WindowsとmacOSで最初に警告が表示されます。',
          '根拠：2026年10月24日に読んだ開発元の公式サイトで、実機での検証は行っていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはZero1LLMのインストール、テスト、ベンチマークを行っていません。以下の機能、プライバシー、料金に関する記述は開発元自身のものです。',
          },
        ],
      },
      overview: {
        id: 'what-is-zero1llm',
        title: 'Zero1LLMとは',
        content: [
          '**Zero1LLMは、オープンモデルを自分のPC上で動かすデスクトップアプリで、自分のAPIキーを使えばクラウドモデルも利用できます。** [公式サイト](https://www.zero1llm.ai/)は、開発元としてERBrains IT Solutions Pvt Ltdを挙げており、個人の創業者や国は記載していません。',
          '変更履歴によれば、アプリは2026年10月21日のバージョン0.1.8でZero1LLMに改名され、同時に公式サイトも[zero1llm.ai](https://www.zero1llm.ai/)に移りました。最初のウィンドウが登場したのは2026年9月30日です。Aboutページには、製品がVS Code拡張機能として始まったとあります。オープンモデルはHugging Faceから取得され（Qwen、Gemma、Llama、Mistralが挙げられています）、llama.cpp、Apple SiliconではMLX、音声認識ではwhisper.cppで動作します。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Zero1LLMは公式サイトからダウンロードします。システムごとにインストーラーが1つあります。**',
        ],
        columns: ['システム', 'ダウンロード'],
        rows: [
          { 'システム': 'Windows 10または11（64ビット）', 'ダウンロード': '[Zero1LLM_0.1.10_x64-setup.exe](https://www.zero1llm.ai/download)（67 MB）' },
          { 'システム': 'Apple Silicon搭載Mac（M1以降）', 'ダウンロード': '[Zero1LLM_0.1.10_aarch64.dmg](https://www.zero1llm.ai/download)（72 MB）' },
          { 'システム': 'LinuxとIntel Mac', 'ダウンロード': 'ダウンロードページによれば、まだ提供されていません' },
          { 'システム': '公式サイト', 'ダウンロード': '[zero1llm.ai](https://www.zero1llm.ai/)' },
          { 'システム': 'プライバシーポリシー', 'ダウンロード': '[zero1llm.ai/privacy](https://www.zero1llm.ai/privacy)' },
        ],
        note: '確認したバージョン：0.1.10。ダウンロードサーバーによれば、インストーラーのファイルは2026年10月23日に公開されており、確認時点での最新の上流アップデートです。ダウンロードページは、どちらのビルドも署名のないプレビュー版としています。Windowsでは「PCを保護しました」と表示されることがあり（「詳細情報」を選んで「実行」を押します）、macOSでは「システム設定」の「プライバシーとセキュリティ」で「このまま開く」を選ぶ必要があります。ページには各ファイルのSHA-256ハッシュが記載されています。ダウンロードのリンクはリリースごとに変わるため、保存したファイルのリンクではなく、ダウンロードページを使ってください。',
      },
      requirements: {
        id: 'requirements',
        title: '必要な環境',
        content: [
          '**Zero1LLMには最低8 GBのメモリが必要で、16 GBが推奨されています。グラフィックスカードは応答を速めますが、必須ではありません。** どのモデルが実用的かは、メモリで決まります。',
        ],
        columns: ['メモリ', '公式サイトが示すモデル'],
        rows: [
          { 'メモリ': '8 GB', '公式サイトが示すモデル': '小型モデル（1B〜4Bパラメータ）' },
          { 'メモリ': '16 GB', '公式サイトが示すモデル': '7B〜12Bパラメータ' },
          { 'メモリ': '32 GB以上', '公式サイトが示すモデル': 'より大きなモデルとMixture-of-Expertsモデル、および画像の読み取り' },
        ],
        note: 'Windowsでは、NVIDIAまたはAMDのグラフィックスカードは必須ではありません。Macでは、ページが最低8 GBのユニファイドメモリを求めています。無料アカウントが必要で、一度サインインすれば、Web検索とブラウザーを除き、アプリはオフラインで動作します。',
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**Zero1LLMには期限のない無料プランがあります。有料プランは草案の段階で、サイトによれば決済はまだ有効になっていません。**',
        ],
        columns: ['プラン', '価格（USD）', 'ページに記載の内容'],
        rows: [
          { 'プラン': 'Free', '価格（USD）': '$0', 'ページに記載の内容': 'ローカルモデル2つまで、Web検索、ブラウザー操作、添付ファイル' },
          { 'プラン': 'Pro', '価格（USD）': '$20（草案）', 'ページに記載の内容': 'ローカルモデル10個まで、プレミアムWeb検索、早期アクセス' },
          { 'プラン': 'Teams', '価格（USD）': '1人あたり$15、最低3人（草案）', 'ページに記載の内容': '近日公開。管理機能、共有クラウドキー、請求書の一本化' },
        ],
        note: '2026年10月24日に[zero1llm.ai/pricing](https://www.zero1llm.ai/pricing)で確認しました。ページには、テスト期間中の価格と上限は草案であり、まだ誰にも課金していないと記載されています。クラウドモデルの料金は、Zero1LLMではなく、自分のキーを通じて各プロバイダーから請求されます。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はダウンロードページと機能一覧に沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'お使いのPCを確認する',
            whyItMatters: '上の必要な環境と、メモリおよびシステムを照らし合わせます。Intel MacとLinuxはまだ対応していません。',
          },
          {
            title: 'インストーラーをダウンロードして開く',
            whyItMatters: 'ダウンロードページからお使いのシステム用のファイルを選び、初回起動時に署名のないビルドの警告を許可します。',
          },
          {
            title: '無料アカウントでサインインする',
            whyItMatters: '料金ページによれば無料アカウントが必要で、一度サインインすればアプリはオフラインで動作します。',
          },
          {
            title: 'メモリに合ったモデルを選ぶ',
            whyItMatters: 'Exploreページでは、お使いのPCには大きすぎるモデルは、表示を選ばない限り非表示になります。',
          },
          {
            title: 'チャットし、Web検索やファイルを追加する',
            whyItMatters: '/webコマンドで出典付きの検索を行い、文書や画像を添付します。AIの操作は、求められるたびに許可または拒否します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '公式サイトに記載された機能',
        content: [
          '**以下の項目はすべて、公式サイトまたはその変更履歴に基づきます。**',
        ],
        items: [
          '**Web検索。** /webコマンドは、クリックできる出典付きで検索します。モデル自身が検索を起動することもでき、変更履歴によれば、自動検索の前に許可または拒否を選べます。',
          '**ブラウザー操作。** AIがブラウザーを使えるのは、許可したサイトに限られます。「設定」の「権限」で、1回だけ許可、常に許可、拒否を選べます。',
          '**ファイルとナレッジベース。** 文書、スプレッドシート、画像を読み取り、ナレッジベースから引用付きで回答し、PDF、Word、Excel、CSV、PowerPointのファイルを作成します。',
          '**画像と動画。** 変更履歴には、画像と短い動画の作成が記載されており、生成した画像にロゴを重ねることもできます。',
          '**音声とメモリ。** 音声入力はwhisper.cppによりオフラインで動作し、メモリはチャットをまたいで引き継がれます。',
          '**クラウドモデル。** OpenAI、Anthropic、Gemini、OpenRouterを、自分のキーで追加できます。',
          '**その他。** /pkgコマンドは最新のパッケージバージョンを表示します。アプリは自動で更新され、ライトテーマとダークテーマがあります。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**公式サイトによれば、ローカルモデルはお使いのPC上で動作し、チャット、メモリ、ナレッジベースもそこに保存されます。** クラウドモデルは任意で、送信した内容はそのプロバイダーに渡ります。プライバシーのページによれば、追加したキーはOSのキーチェーンに保管されます。',
          '同じページによれば、Web検索や、AIに開くよう求めたページは、インターネット経由で取得されます。公式サイトのアカウントについては、名前、メールアドレス、ハッシュ化したパスワード、サインイン中のデバイス、利用記録（トークン数、モデル名、時刻で、メッセージ本文は含まない）が挙げられています。このページは正式公開前に差し替える草案とされており、管理者として記載されている会社はERBrains IT Solutions Pvt Ltdで、郵送先住所はありません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは開発元自身の説明です。PromptQuorumはアプリもそのネットワーク通信も監査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**16 GB以上のメモリを持つWindowsまたはApple Siliconのユーザーで、** ローカルチャット、Web検索、ファイルの読み取りを1つのアプリで使いたい人。',
          '**制限のない権限を持つエージェントではなく、** ブラウザー操作をサイトごとに承認したい人。',
          '**プレビュー版と無料アカウントを受け入れられる、** 新しいものを早く試したい人。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の品質と速度。** PromptQuorumはZero1LLMを実行していないため、モデルの性能やブラウザー操作の挙動は開発元の主張です。',
          '**ライセンスとソース。** 公式サイトにライセンスの記載はなく、リポジトリへのリンクもないため、コードを検証できるかどうかは不明です。',
          '**開発元と実績。** 記載があるのは会社名だけです。変更履歴は2026年9月30日から始まっており、草案のプライバシーポリシーには日付がありません。',
          '**リリースノート。** 変更履歴のページには0.1.8までのリリースが載っており、0.1.9と0.1.10の変更点はそこに公開されていません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[LM Studio](/ja/power-local-llm/lm-studio-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／プロプライエタリ', '主な違い': '成熟したモデルブラウザーとローカルサーバーを備える。ブラウザー操作は内蔵していない' },
          { 'アプリ': '[Jan](/ja/power-local-llm/jan-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／Apache 2.0系', '主な違い': '公開リポジトリのあるオープンソースのオフラインチャットクライアント' },
          { 'アプリ': '[GPT4All](/ja/power-local-llm/gpt4all-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': 'ローカルの文書チャットを備えた、シンプルなオープンソースのデスクトップチャット' },
          { 'アプリ': '[Msty](/ja/power-local-llm/msty-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': 'フリーミアム／クローズドソース', '主な違い': '無料枠と有料アップグレードのある、複数プロバイダー対応のチャットクライアント' },
        ],
        note: '競合の情報は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリの掲載ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Zero1LLMはオフラインで動きますか？',
            a: '料金ページによれば、一度サインインし、モデルをダウンロードしたあとは動作します。Web検索とブラウザーには接続が必要です。',
          },
          {
            q: 'ChatGPTやClaudeのモデルも使えますか？',
            a: '任意で使えます。公式サイトには、自分のAPIキーで使うOpenAI、Anthropic、Gemini、OpenRouterが挙げられており、料金はプロバイダーから請求され、データもそのプロバイダーに送信されます。',
          },
          {
            q: 'Zero1LLMはVS Code拡張機能と同じ製品ですか？',
            a: 'Aboutページによれば、製品はVS Code拡張機能として始まりました。デスクトップアプリは別のダウンロードで、テスト中と説明されています。',
          },
          {
            q: 'インストーラーを開くとWindowsが警告するのはなぜですか？',
            a: 'ダウンロードページによれば、プレビュー版のビルドには署名がありません。ファイルごとにSHA-256ハッシュが記載されていますが、PromptQuorumは確認していません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Zero1LLMは、公式サイトによれば、ローカルのオープンモデル、出典付きのWeb検索、サイトごとのブラウザー権限、ファイルの読み取りを組み合わせた、無料で始められるデスクトップアプリで、WindowsとApple Silicon搭載Macでダブルクリックでインストールできます。一方で、公開から数週間のプレビュー版で、インストーラーに署名がなく、アカウントが必須で、価格は草案であり、ライセンスもリポジトリも示されておらず、PromptQuorumはテストしていません。この組み合わせを早めに試したい人に向きます。長い実績や公開リポジトリを求める場合は、[LM Studio](/ja/power-local-llm/lm-studio-review)、[Jan](/ja/power-local-llm/jan-review)、[GPT4All](/ja/power-local-llm/gpt4all-review)と比べてみてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Zero1LLM公式サイト](https://www.zero1llm.ai/)：製品の説明、対応プラットフォーム、機能、ローカルとクラウドの違い。2026年10月24日確認。',
          '[Zero1LLMのダウンロードページ](https://www.zero1llm.ai/download)：インストーラーのファイル、バージョン、ハッシュ、署名に関する注意、必要環境。',
          '[Zero1LLMの変更履歴](https://www.zero1llm.ai/changelog)：2026年9月30日からのリリース履歴と、0.1.8での改名。',
          '[Zero1LLMの料金](https://www.zero1llm.ai/pricing)と[プライバシーポリシー](https://www.zero1llm.ai/privacy)：プラン、草案価格の告知、アカウントとデータに関する記述。',
          '[Zero1LLMのAboutページ](https://www.zero1llm.ai/about)：会社名とVS Codeでの始まり。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[LM Studioレビュー](/ja/power-local-llm/lm-studio-review)：ローカルモデルのダウンロードと実行ができるデスクトップアプリ。',
          '[Janレビュー](/ja/power-local-llm/jan-review)：オープンソースのオフラインチャットクライアント。',
          '[GPT4Allレビュー](/ja/power-local-llm/gpt4all-review)：ローカルの文書チャットを備えた、シンプルなデスクトップチャットアプリ。',
          '[Mstyレビュー](/ja/power-local-llm/msty-review)：無料枠のある、複数プロバイダー対応のチャットクライアント。',
          '[ローカルLLMチャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared)：チャットアプリのカテゴリ比較。',
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
    theme: 'Overview & Reference',
    heroImage: '/images/zero1llm-review-hero-pt.webp',
    title: 'Análise do Zero1LLM: chat local com busca na web e controle do navegador',
    seoTitle: 'Análise do Zero1LLM: chat local com busca na web',
    intro:
      'O Zero1LLM é um aplicativo de desktop para Windows e Macs com Apple Silicon que, segundo o site, executa modelos abertos no seu computador e acrescenta busca na web, controle do navegador com permissão e leitura de arquivos. Esta análise reflete o [zero1llm.ai](https://www.zero1llm.ai/) como verificado em 24 de outubro de 2026, quando o download atual era a versão 0.1.10.',
    metaDescription:
      'Análise do Zero1LLM: app de chat gratuito para modelos abertos no Windows e Apple Silicon, com busca na web, controle do navegador, instaladores e dúvidas.',
    twitterDescription:
      'Análise do Zero1LLM: app de desktop que executa modelos abertos localmente e acrescenta busca na web e controle do navegador. Requisitos e dúvidas em aberto.',
    audience:
      'Usuários de Windows e Apple Silicon que comparam aplicativos de chat de desktop para modelos abertos e querem saber o que o Zero1LLM exige, quanto custa, como é instalado e o que o site dele deixa sem confirmação.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Zero1LLM',
    targetKeywords: [
      'análise zero1llm',
      'zero1llm',
      'app de chat de ia local com busca na web',
      'rodar modelos abertos no windows e mac',
      'controle de navegador llm local',
      'zero1llm vs lm studio',
    ],
    current_hardware_mentioned: ['Apple Silicon Mac', 'NVIDIA GPU', 'AMD GPU'],
    leadAnswerBlock:
      '**O Zero1LLM (versão 0.1.10) é um aplicativo de desktop para Windows e Macs com Apple Silicon que, segundo o site, executa modelos abertos no seu computador e acrescenta busca na web, controle do navegador com permissão e leitura de arquivos.** O plano Free não tem limite de tempo; a PromptQuorum não instalou nem testou o aplicativo, então todas as afirmações aqui vêm do site.',
    quickAnswerTop: {
      pt: {
        question: 'O que preciso para executar o Zero1LLM?',
        answer:
          'Um PC com Windows 10 ou 11 (64 bits) ou um Mac com chip M1 ou mais novo, no mínimo 8 GB de memória (16 GB recomendados) e uma conta gratuita do Zero1LLM, segundo o site. Uma placa de vídeo é opcional.',
        bullets: [
          'Executa modelos abertos do Hugging Face no llama.cpp ou, no Apple Silicon, no MLX.',
          'Lê documentos, planilhas e imagens e pode criar arquivos, gráficos e imagens.',
          'O controle do navegador pede permissão para cada site.',
          'Instala com um duplo clique em um instalador de pré-lançamento sem assinatura.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Zero1LLM?', anchor: 'what-is-zero1llm' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'O que você precisa', anchor: 'requirements' },
      { label: 'Preços', anchor: 'pricing' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos listados pelo site', anchor: 'key-features' },
      { label: 'Privacidade e uso da rede', anchor: 'privacy' },
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
            text: 'O Zero1LLM é um aplicativo de chat de desktop que executa modelos abertos no Windows e em Macs com Apple Silicon e acrescenta busca na web, controle do navegador e leitura de arquivos.',
          },
          {
            type: 'plain-terms',
            text: 'Você baixa um modelo, conversa com ele no seu próprio computador e pode deixá-lo pesquisar na web ou usar um navegador site a site.',
          },
        ],
        items: [
          'Manutenção: o download atual, versão 0.1.10, foi publicado em 23 de outubro de 2026 e o changelog começa em 30 de setembro de 2026; portanto, o projeto está ativo, mas tem menos de um mês, e não se aplica aviso de projeto abandonado.',
          'Licença: o site não informa nenhuma e não aponta um repositório de código-fonte.',
          'Custo: um plano Free sem limite de tempo; os planos pagos são rascunhos e os pagamentos não estão ativados.',
          'Instaladores: as duas versões são pré-lançamentos sem assinatura, então o Windows e o macOS mostram um aviso primeiro.',
          'Base: o site do fabricante, lido em 24 de outubro de 2026, sem testes na prática.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não instalou, testou nem mediu o Zero1LLM. As afirmações de recursos, privacidade e preço abaixo são do próprio fabricante.',
          },
        ],
      },
      overview: {
        id: 'what-is-zero1llm',
        title: 'O que é o Zero1LLM?',
        content: [
          '**O Zero1LLM é um aplicativo de desktop que executa modelos abertos no seu próprio computador, com modelos de nuvem opcionais por meio das suas próprias chaves de API.** O [site](https://www.zero1llm.ai/) cita a ERBrains IT Solutions Pvt Ltd como a empresa responsável e não informa nenhum fundador individual nem país.',
          'O changelog diz que o aplicativo foi renomeado para Zero1LLM na versão 0.1.8, em 21 de outubro de 2026, quando o site passou para [zero1llm.ai](https://www.zero1llm.ai/), e que a primeira janela apareceu em 30 de setembro de 2026. A página About acrescenta que o produto começou como uma extensão do VS Code. Os modelos abertos vêm do Hugging Face (Qwen, Gemma, Llama e Mistral são citados) e rodam no llama.cpp, no MLX em Apple Silicon e no whisper.cpp para voz.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Zero1LLM é baixado no próprio site, com um instalador para cada sistema.**',
        ],
        columns: ['Sistema', 'Download'],
        rows: [
          { 'Sistema': 'Windows 10 ou 11 (64 bits)', 'Download': '[Zero1LLM_0.1.10_x64-setup.exe](https://www.zero1llm.ai/download) (67 MB)' },
          { 'Sistema': 'Mac com Apple Silicon (M1 ou mais novo)', 'Download': '[Zero1LLM_0.1.10_aarch64.dmg](https://www.zero1llm.ai/download) (72 MB)' },
          { 'Sistema': 'Linux e Macs Intel', 'Download': 'Ainda não disponível, segundo a página de download' },
          { 'Sistema': 'Site', 'Download': '[zero1llm.ai](https://www.zero1llm.ai/)' },
          { 'Sistema': 'Política de privacidade', 'Download': '[zero1llm.ai/privacy](https://www.zero1llm.ai/privacy)' },
        ],
        note: 'Versão analisada: 0.1.10, cujos arquivos de instalação foram publicados em 23 de outubro de 2026, segundo o servidor de download; é a atualização mais recente do projeto no momento da verificação. A página de download chama as duas versões de pré-lançamentos sem assinatura: o Windows pode mostrar "protected your PC" (escolha More info e depois Run anyway) e o macOS exige System Settings, Privacy & Security, Open Anyway. A página lista um hash SHA-256 para cada arquivo. Os links de download mudam a cada versão; por isso, use a página de download em vez de um link de arquivo salvo.',
      },
      requirements: {
        id: 'requirements',
        title: 'O que você precisa',
        content: [
          '**O Zero1LLM exige no mínimo 8 GB de memória e recomenda 16 GB; uma placa de vídeo acelera as respostas, mas é opcional.** A memória decide quais modelos são práticos.',
        ],
        columns: ['Memória', 'Modelos sugeridos pelo site'],
        rows: [
          { 'Memória': '8 GB', 'Modelos sugeridos pelo site': 'Modelos pequenos, de 1B a 4B de parâmetros' },
          { 'Memória': '16 GB', 'Modelos sugeridos pelo site': 'De 7B a 12B de parâmetros' },
          { 'Memória': '32 GB ou mais', 'Modelos sugeridos pelo site': 'Modelos maiores e de mistura de especialistas, além de leitura de imagens' },
        ],
        note: 'No Windows, uma placa de vídeo NVIDIA ou AMD é opcional; no Mac, a página pede no mínimo 8 GB de memória unificada. Uma conta gratuita é necessária e, depois de um login, o aplicativo funciona offline, exceto a busca na web e o navegador.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços',
        content: [
          '**O Zero1LLM tem um plano Free sem limite de tempo; os planos pagos são rascunhos, e o site diz que os pagamentos não estão ativados.**',
        ],
        columns: ['Plano', 'Preço (USD)', 'O que a página lista'],
        rows: [
          { 'Plano': 'Free', 'Preço (USD)': '$0', 'O que a página lista': 'Até 2 modelos locais, busca na web, controle do navegador, anexos' },
          { 'Plano': 'Pro', 'Preço (USD)': '$20 (rascunho)', 'O que a página lista': 'Até 10 modelos locais, busca na web premium, acesso antecipado' },
          { 'Plano': 'Teams', 'Preço (USD)': '$15 por pessoa, mínimo de 3 (rascunho)', 'O que a página lista': 'Em breve; controles de administrador, chaves de nuvem compartilhadas, uma única fatura' },
        ],
        note: 'Lido em [zero1llm.ai/pricing](https://www.zero1llm.ai/pricing) em 24 de outubro de 2026. A página diz que preços e limites são rascunhos durante os testes e que ninguém é cobrado ainda. Os modelos de nuvem são cobrados pelo provedor, por meio da sua própria chave, e não pelo Zero1LLM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem a página de download e a lista de recursos; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Confira o seu computador',
            whyItMatters: 'Compare memória e sistema com os requisitos acima; Macs Intel e Linux ainda não são aceitos.',
          },
          {
            title: 'Baixe e abra o instalador',
            whyItMatters: 'Pegue na página de download o arquivo do seu sistema e aceite o aviso de versão sem assinatura na primeira execução.',
          },
          {
            title: 'Entre com uma conta gratuita',
            whyItMatters: 'A página de preços diz que uma conta gratuita é necessária; depois de um login, o aplicativo funciona offline.',
          },
          {
            title: 'Escolha um modelo que caiba na sua memória',
            whyItMatters: 'A página Explore oculta os modelos grandes demais para o seu computador, a menos que você escolha exibi-los.',
          },
          {
            title: 'Converse e depois acrescente busca na web ou arquivos',
            whyItMatters: 'Use o comando /web para uma busca com fontes, anexe documentos ou imagens e permita ou negue cada ação da IA quando for solicitado.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos listados pelo site',
        content: [
          '**Cada item abaixo vem do site ou do changelog dele.**',
        ],
        items: [
          '**Busca na web.** O comando /web pesquisa com fontes clicáveis, e o modelo pode acionar uma busca por conta própria; o changelog diz que você pode permitir ou negar antes de buscas automáticas.',
          '**Controle do navegador.** A IA só pode usar um navegador onde você permitir, site a site; em Settings, Permissions há as opções permitir uma vez, sempre permitir ou negar.',
          '**Arquivos e base de conhecimento.** O aplicativo lê documentos, planilhas e imagens, responde a partir de uma base de conhecimento com citações e cria arquivos PDF, Word, Excel, CSV e PowerPoint.',
          '**Imagens e vídeo.** O changelog lista a criação de imagens e de vídeos curtos, com logotipos colocados nas imagens geradas.',
          '**Voz e memória.** A digitação por voz roda offline pelo whisper.cpp, e a memória se mantém entre os chats.',
          '**Modelos de nuvem.** OpenAI, Anthropic, Gemini e OpenRouter podem ser adicionados com a sua própria chave.',
          '**Outros.** Um comando /pkg mostra as versões mais recentes dos pacotes; o aplicativo se atualiza sozinho e tem temas claro e escuro.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**O site diz que os modelos locais rodam no seu computador e que chats, memória e base de conhecimento ficam armazenados nele.** Os modelos de nuvem são opcionais, e tudo o que for enviado a eles vai para esse provedor; as chaves que você adiciona ficam no chaveiro do sistema operacional, segundo a página de privacidade.',
          'A mesma página diz que as buscas na web e as páginas que você pede à IA para abrir são obtidas pela internet. Para a conta do site, ela lista nome, e-mail, uma senha com hash, dispositivos conectados e registros de uso (contagem de tokens, nomes de modelos e horários, não o texto das mensagens). A página está marcada como rascunho que será substituído antes do lançamento público, e a empresa indicada como controladora é a ERBrains IT Solutions Pvt Ltd, sem endereço postal.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações do fabricante. A PromptQuorum não auditou o aplicativo nem o tráfego de rede dele.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Usuários de Windows e Apple Silicon com 16 GB ou mais** que querem um único aplicativo para chat local, busca na web e leitura de arquivos.',
          '**Pessoas que querem aprovar as ações do navegador site a site** em vez de um agente com acesso irrestrito.',
          '**Quem gosta de testar novidades e aceita uma versão de pré-lançamento** e uma conta gratuita.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade e velocidade na prática.** A PromptQuorum não executou o Zero1LLM, então o desempenho dos modelos e o comportamento do controle do navegador são afirmações do fabricante.',
          '**Licença e código-fonte.** O site não informa licença nem aponta um repositório, então não se sabe se o código pode ser inspecionado.',
          '**Fabricante e histórico.** Só é informado o nome de uma empresa; o changelog começa em 30 de setembro de 2026, e a política de privacidade em rascunho não tem data.',
          '**Notas de versão.** A página do changelog lista versões até a 0.1.8; as mudanças das versões 0.1.9 e 0.1.10 não estão publicadas lá.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[LM Studio](/pt/power-local-llm/lm-studio-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / proprietário', 'Diferença principal': 'Navegador de modelos maduro e servidor local; sem controle de navegador integrado' },
          { 'App': '[Jan](/pt/power-local-llm/jan-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / variante do Apache 2.0', 'Diferença principal': 'Cliente de chat offline de código aberto com repositório público' },
          { 'App': '[GPT4All](/pt/power-local-llm/gpt4all-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Chat de desktop simples e de código aberto, com chat com documentos locais' },
          { 'App': '[Msty](/pt/power-local-llm/msty-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Freemium / código fechado', 'Diferença principal': 'Cliente de chat com vários provedores, com plano gratuito e upgrades pagos' },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Zero1LLM funciona offline?',
            a: 'A página de preços diz que sim, depois de um login e de baixar um modelo. A busca na web e o navegador precisam de conexão.',
          },
          {
            q: 'Posso usar modelos do ChatGPT ou do Claude nele?',
            a: 'Opcionalmente: o site lista OpenAI, Anthropic, Gemini e OpenRouter com a sua própria chave de API, cobrados pelo provedor e enviados a esse provedor.',
          },
          {
            q: 'O Zero1LLM é o mesmo produto que a extensão do VS Code?',
            a: 'A página About diz que o produto começou como uma extensão do VS Code; o aplicativo de desktop é um download separado e é descrito como estando em testes.',
          },
          {
            q: 'Por que o Windows me avisa ao abrir o instalador?',
            a: 'A página de download diz que as versões de pré-lançamento não têm assinatura. Ela informa um hash SHA-256 por arquivo, que a PromptQuorum não conferiu.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Zero1LLM é um aplicativo de desktop gratuito para começar que, segundo o site, combina modelos abertos locais com busca na web com fontes, permissões de navegador site a site e leitura de arquivos, e instala com um duplo clique no Windows e em Macs com Apple Silicon. Em contrapartida, é um pré-lançamento com poucas semanas, com instaladores sem assinatura, conta obrigatória, preços em rascunho e sem licença nem repositório informados, e a PromptQuorum não o testou. Serve para quem quer experimentar essa combinação cedo; quem prefere um histórico mais longo ou um repositório público pode comparar o [LM Studio](/pt/power-local-llm/lm-studio-review), o [Jan](/pt/power-local-llm/jan-review) ou o [GPT4All](/pt/power-local-llm/gpt4all-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Zero1LLM](https://www.zero1llm.ai/) — descrição do produto, plataformas, recursos e observações sobre local versus nuvem, verificados em 24 de outubro de 2026.',
          '[Página de download do Zero1LLM](https://www.zero1llm.ai/download) — arquivos de instalação, versão, hashes, observações sobre assinatura e requisitos.',
          '[Changelog do Zero1LLM](https://www.zero1llm.ai/changelog) — histórico de versões a partir de 30 de setembro de 2026 e a mudança de nome na 0.1.8.',
          '[Preços do Zero1LLM](https://www.zero1llm.ai/pricing) e [política de privacidade](https://www.zero1llm.ai/privacy) — planos, aviso de preços em rascunho, declarações sobre conta e dados.',
          '[Página About do Zero1LLM](https://www.zero1llm.ai/about) — o nome da empresa e a origem no VS Code.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review) — um aplicativo de desktop para baixar e executar modelos locais.',
          '[Análise do Jan](/pt/power-local-llm/jan-review) — um cliente de chat offline de código aberto.',
          '[Análise do GPT4All](/pt/power-local-llm/gpt4all-review) — um aplicativo de chat de desktop simples, com chat com documentos locais.',
          '[Análise do Msty](/pt/power-local-llm/msty-review) — um cliente de chat com vários provedores e plano gratuito.',
          '[Assistentes de chat de LLM locais comparados](/pt/power-local-llm/local-llm-chat-assistants-compared) — a comparação da categoria de apps de chat.',
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
    theme: 'Overview & Reference',
    heroImage: '/images/zero1llm-review-hero-ar.webp',
    title: 'مراجعة Zero1LLM: تطبيق دردشة محلي مع بحث على الويب وتحكم بالمتصفح',
    seoTitle: 'مراجعة Zero1LLM: تطبيق دردشة محلي مع بحث على الويب',
    intro:
      'Zero1LLM تطبيق سطح مكتب لأجهزة Windows وأجهزة Mac بمعالج Apple Silicon، يشغّل بحسب موقعه نماذج مفتوحة على حاسوبك ويضيف البحث على الويب والتحكم بالمتصفح بإذن والقراءة من الملفات. تعكس هذه المراجعة موقع [zero1llm.ai](https://www.zero1llm.ai/) كما جرى التحقق منه في 24 أكتوبر 2026، حين كان التنزيل الحالي هو الإصدار 0.1.10.',
    metaDescription:
      'مراجعة Zero1LLM: تطبيق دردشة مجاني للنماذج المفتوحة على Windows وApple Silicon مع بحث على الويب وتحكم بالمتصفح. المثبّتات والخصوصية والأسئلة المفتوحة.',
    twitterDescription:
      'مراجعة Zero1LLM: تطبيق سطح مكتب يشغّل نماذج مفتوحة محليًا ويضيف البحث على الويب والتحكم بالمتصفح. المتطلبات والمثبّتات والخطة المجانية وادعاءات لم يُتحقق منها.',
    audience:
      'مستخدمو Windows وApple Silicon الذين يقارنون تطبيقات الدردشة المكتبية للنماذج المفتوحة ويريدون معرفة ما يحتاجه Zero1LLM وكلفته وطريقة تثبيته وما لا يؤكده موقعه.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Zero1LLM',
    targetKeywords: [
      'مراجعة zero1llm',
      'zero1llm',
      'تطبيق دردشة محلي مع بحث على الويب',
      'تشغيل نماذج مفتوحة على windows وmac',
      'تحكم المتصفح بالنماذج المحلية',
      'zero1llm مقابل lm studio',
    ],
    current_hardware_mentioned: ['Apple Silicon Mac', 'NVIDIA GPU', 'AMD GPU'],
    leadAnswerBlock:
      '**Zero1LLM (الإصدار 0.1.10) تطبيق سطح مكتب لأجهزة Windows وأجهزة Mac بمعالج Apple Silicon، يشغّل بحسب موقعه نماذج مفتوحة على حاسوبك ويضيف البحث على الويب والتحكم بالمتصفح بإذن والقراءة من الملفات.** الخطة المجانية بلا مدة محددة؛ ولم تثبّت PromptQuorum التطبيق ولم تختبره، لذا مصدر كل ما هنا هو الموقع.',
    quickAnswerTop: {
      ar: {
        question: 'ماذا أحتاج لتشغيل Zero1LLM؟',
        answer:
          'بحسب الموقع: حاسوب Windows 10 أو 11 (64 بت) أو جهاز Mac بمعالج M1 أو أحدث، وذاكرة لا تقل عن 8 GB (يُوصى بـ 16 GB)، وحساب Zero1LLM مجاني. بطاقة الرسوميات اختيارية.',
        bullets: [
          'يشغّل نماذج مفتوحة من Hugging Face عبر llama.cpp، أو MLX على Apple Silicon.',
          'يقرأ المستندات والجداول والصور، ويمكنه إنشاء ملفات ومخططات وصور.',
          'يطلب التحكم بالمتصفح إذنًا لكل موقع.',
          'يُثبَّت بنقرتين على مثبّت تجريبي غير موقّع.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Zero1LLM؟', anchor: 'what-is-zero1llm' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'ما تحتاجه', anchor: 'requirements' },
      { label: 'الأسعار', anchor: 'pricing' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي يذكرها الموقع', anchor: 'key-features' },
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
            text: 'Zero1LLM تطبيق دردشة مكتبي يشغّل نماذج مفتوحة على Windows وأجهزة Mac بمعالج Apple Silicon ويضيف البحث على الويب والتحكم بالمتصفح والقراءة من الملفات.',
          },
          {
            type: 'plain-terms',
            text: 'تنزّل نموذجًا وتتحدث معه على حاسوبك، ويمكنك السماح له بالبحث على الويب أو باستخدام المتصفح موقعًا بعد موقع.',
          },
        ],
        items: [
          'الصيانة: نُشر التنزيل الحالي، الإصدار 0.1.10، في 23 أكتوبر 2026 ويبدأ سجل التغييرات في 30 سبتمبر 2026، فالمشروع نشط لكن عمره دون شهر؛ ولا ينطبق تحذير المشروع المتوقف.',
          'الرخصة: لا يذكر الموقع أي رخصة ولا يربط بمستودع للشيفرة المصدرية.',
          'الكلفة: خطة مجانية بلا مدة محددة؛ الخطط المدفوعة مسودات والدفع غير مفعّل.',
          'المثبّتات: النسختان تجريبيتان وغير موقّعتين، لذا يعرض Windows وmacOS تحذيرًا أولًا.',
          'الأساس: موقع الصانع كما قُرئ في 24 أكتوبر 2026، دون اختبار عملي.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تثبّت PromptQuorum تطبيق Zero1LLM ولم تختبره ولم تجرِ عليه قياسات أداء. عبارات الميزات والخصوصية والأسعار أدناه هي عبارات الصانع نفسه.',
          },
        ],
      },
      overview: {
        id: 'what-is-zero1llm',
        title: 'ما هو Zero1LLM؟',
        content: [
          '**Zero1LLM تطبيق سطح مكتب يشغّل نماذج مفتوحة على حاسوبك، مع نماذج سحابية اختيارية بمفاتيح API خاصة بك.** يذكر [الموقع](https://www.zero1llm.ai/) شركة ERBrains IT Solutions Pvt Ltd بوصفها الجهة وراءه، ولا يسمّي مؤسسًا فردًا ولا بلدًا.',
          'يقول سجل التغييرات إن التطبيق أُعيدت تسميته إلى Zero1LLM في الإصدار 0.1.8 بتاريخ 21 أكتوبر 2026، حين انتقل الموقع إلى [zero1llm.ai](https://www.zero1llm.ai/)، وإن أول نافذة ظهرت في 30 سبتمبر 2026. وتضيف صفحة About أن المنتج بدأ إضافةً لمحرر VS Code. وتأتي نماذجه المفتوحة من Hugging Face (يذكر الموقع Qwen وGemma وLlama وMistral) وتعمل عبر llama.cpp، وMLX على Apple Silicon، وwhisper.cpp للكلام.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُنزَّل Zero1LLM من موقعه الخاص، بمثبّت واحد لكل نظام.**',
        ],
        columns: ['النظام', 'التنزيل'],
        rows: [
          { 'النظام': 'Windows 10 أو 11 (64 بت)', 'التنزيل': '[Zero1LLM_0.1.10_x64-setup.exe](https://www.zero1llm.ai/download) (67 MB)' },
          { 'النظام': 'Mac بمعالج Apple Silicon (M1 أو أحدث)', 'التنزيل': '[Zero1LLM_0.1.10_aarch64.dmg](https://www.zero1llm.ai/download) (72 MB)' },
          { 'النظام': 'Linux وأجهزة Mac بمعالج Intel', 'التنزيل': 'غير متاح بعد بحسب صفحة التنزيل' },
          { 'النظام': 'الموقع', 'التنزيل': '[zero1llm.ai](https://www.zero1llm.ai/)' },
          { 'النظام': 'سياسة الخصوصية', 'التنزيل': '[zero1llm.ai/privacy](https://www.zero1llm.ai/privacy)' },
        ],
        note: 'الإصدار الذي روجع: 0.1.10، ونُشرت ملفات مثبّته في 23 أكتوبر 2026 بحسب خادم التنزيل؛ وهو أحدث تحديث للمشروع وقت التحقق. تصف صفحة التنزيل النسختين بأنهما تجريبيتان وغير موقّعتين: قد يعرض Windows الرسالة «protected your PC» (اختر More info ثم Run anyway)، ويتطلب macOS الانتقال إلى System Settings ثم Privacy & Security ثم Open Anyway. وتذكر الصفحة تجزئة SHA-256 لكل ملف. وتتغير روابط التنزيل مع كل إصدار، لذا استخدم صفحة التنزيل بدل رابط ملف محفوظ.',
      },
      requirements: {
        id: 'requirements',
        title: 'ما تحتاجه',
        content: [
          '**يحتاج Zero1LLM إلى 8 GB من الذاكرة كحد أدنى ويوصي بـ 16 GB؛ وبطاقة الرسوميات تسرّع الإجابات لكنها اختيارية.** والذاكرة هي التي تحدد النماذج العملية.',
        ],
        columns: ['الذاكرة', 'النماذج التي يقترحها الموقع'],
        rows: [
          { 'الذاكرة': '8 GB', 'النماذج التي يقترحها الموقع': 'نماذج صغيرة، من 1B إلى 4B معامل' },
          { 'الذاكرة': '16 GB', 'النماذج التي يقترحها الموقع': 'من 7B إلى 12B معامل' },
          { 'الذاكرة': '32 GB أو أكثر', 'النماذج التي يقترحها الموقع': 'نماذج أكبر ونماذج خليط الخبراء، مع قراءة الصور' },
        ],
        note: 'على Windows تكون بطاقة NVIDIA أو AMD اختيارية؛ وعلى Mac تطلب الصفحة 8 GB من الذاكرة الموحّدة كحد أدنى. الحساب المجاني مطلوب، وبعد تسجيل دخول واحد يعمل التطبيق دون اتصال باستثناء البحث على الويب والمتصفح.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار',
        content: [
          '**لدى Zero1LLM خطة مجانية بلا مدة محددة؛ أما الخطط المدفوعة فمسودات، ويقول الموقع إن الدفع غير مفعّل.**',
        ],
        columns: ['الخطة', 'السعر (USD)', 'ما تذكره الصفحة'],
        rows: [
          { 'الخطة': 'Free', 'السعر (USD)': '$0', 'ما تذكره الصفحة': 'حتى نموذجين محليين، بحث على الويب، تحكم بالمتصفح، مرفقات' },
          { 'الخطة': 'Pro', 'السعر (USD)': '$20 (مسودة)', 'ما تذكره الصفحة': 'حتى 10 نماذج محلية، بحث ويب متقدم، وصول مبكر' },
          { 'الخطة': 'Teams', 'السعر (USD)': '$15 للفرد، بحد أدنى 3 (مسودة)', 'ما تذكره الصفحة': 'قريبًا؛ ضوابط إدارية، مفاتيح سحابية مشتركة، فاتورة واحدة' },
        ],
        note: 'قُرئت من [zero1llm.ai/pricing](https://www.zero1llm.ai/pricing) في 24 أكتوبر 2026. تقول الصفحة إن الأسعار والحدود مسودات أثناء الاختبار وإن أحدًا لا يُحاسَب بعد. تُحاسب الجهة المزوّدة على النماذج السحابية عبر مفتاحك أنت، لا Zero1LLM.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع هذه الخطوات صفحة التنزيل وقائمة الميزات؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'افحص حاسوبك',
            whyItMatters: 'قارن الذاكرة والنظام بالمتطلبات أعلاه؛ أجهزة Mac بمعالج Intel وLinux غير مدعومة بعد.',
          },
          {
            title: 'نزّل المثبّت وافتحه',
            whyItMatters: 'خذ الملف المناسب لنظامك من صفحة التنزيل واقبل تحذير النسخة غير الموقّعة عند أول تشغيل.',
          },
          {
            title: 'سجّل الدخول بحساب مجاني',
            whyItMatters: 'تقول صفحة الأسعار إن الحساب المجاني مطلوب؛ وبعد تسجيل دخول واحد يعمل التطبيق دون اتصال.',
          },
          {
            title: 'اختر نموذجًا يناسب ذاكرتك',
            whyItMatters: 'تخفي صفحة Explore النماذج الأكبر من حاسوبك ما لم تختر إظهارها.',
          },
          {
            title: 'تحدّث، ثم أضف البحث على الويب أو الملفات',
            whyItMatters: 'استخدم الأمر /web للبحث مع المصادر، وأرفق مستندات أو صورًا، واسمح بكل إجراء للذكاء الاصطناعي أو ارفضه عند السؤال.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي يذكرها الموقع',
        content: [
          '**كل بند أدناه مصدره الموقع أو سجل التغييرات.**',
        ],
        items: [
          '**البحث على الويب.** يبحث الأمر /web مع مصادر قابلة للنقر، ويمكن للنموذج أن يطلق بحثًا بنفسه؛ ويقول سجل التغييرات إنه يمكنك السماح أو الرفض قبل عمليات البحث التلقائية.',
          '**التحكم بالمتصفح.** يستخدم الذكاء الاصطناعي المتصفح حيث تسمح له فقط، موقعًا بعد موقع؛ وتتيح Settings ثم Permissions خيارات السماح مرة واحدة أو السماح دائمًا أو الرفض.',
          '**الملفات وقاعدة المعرفة.** يقرأ التطبيق المستندات والجداول والصور، ويجيب من قاعدة معرفة مع الاستشهادات، وينشئ ملفات PDF وWord وExcel وCSV وPowerPoint.',
          '**الصور والفيديو.** يذكر سجل التغييرات إنشاء الصور ومقاطع الفيديو القصيرة، مع وضع الشعارات على الصور المولَّدة.',
          '**الصوت والذاكرة.** يعمل الإملاء الصوتي دون اتصال عبر whisper.cpp، وتنتقل الذاكرة بين المحادثات.',
          '**النماذج السحابية.** يمكن إضافة OpenAI وAnthropic وGemini وOpenRouter بمفتاحك الخاص.',
          '**أخرى.** يعرض الأمر /pkg أحدث إصدارات الحزم؛ ويحدّث التطبيق نفسه تلقائيًا ويوفّر سمتين فاتحة وداكنة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**يقول الموقع إن النماذج المحلية تعمل على حاسوبك وإن المحادثات والذاكرة وقاعدة المعرفة تُخزَّن هناك.** النماذج السحابية اختيارية، وكل ما يُرسل إليها يذهب إلى تلك الجهة المزوّدة؛ وتُحفظ المفاتيح التي تضيفها في سلسلة مفاتيح نظام التشغيل بحسب صفحة الخصوصية.',
          'وتقول الصفحة نفسها إن عمليات البحث على الويب والصفحات التي تطلب من الذكاء الاصطناعي فتحها تُجلب عبر الإنترنت. وبالنسبة إلى حساب الموقع تذكر الاسم والبريد الإلكتروني وكلمة مرور مجزّأة والأجهزة المسجَّل الدخول منها وسجلات الاستخدام (أعداد الرموز وأسماء النماذج وأوقاتها، لا نص الرسائل). وهي موسومة بأنها مسودة ستُستبدل قبل الإطلاق العام، والشركة المسماة جهةً مسؤولة عن البيانات هي ERBrains IT Solutions Pvt Ltd، دون عنوان بريدي.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه عبارات الصانع. لم تدقق PromptQuorum التطبيق ولا حركة الشبكة فيه.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Windows وApple Silicon بذاكرة 16 GB أو أكثر** ممن يريدون تطبيقًا واحدًا للدردشة المحلية والبحث على الويب وقراءة الملفات.',
          '**من يريدون اعتماد إجراءات المتصفح موقعًا بعد موقع** بدل وكيل بصلاحيات مفتوحة.',
          '**المتبنّون الأوائل الذين يقبلون نسخة تجريبية** وحسابًا مجانيًا.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة والسرعة عمليًا.** لم تشغّل PromptQuorum تطبيق Zero1LLM، لذا فأداء النماذج وسلوك التحكم بالمتصفح ادعاءات الصانع.',
          '**الرخصة والمصدر.** لا يذكر الموقع رخصة ولا يربط بمستودع، فلا يُعرف إن كان يمكن فحص الشيفرة.',
          '**الصانع وسجله.** لا يُذكر سوى اسم شركة؛ ويبدأ سجل التغييرات في 30 سبتمبر 2026، وسياسة الخصوصية المسودة بلا تاريخ.',
          '**ملاحظات الإصدارات.** تسرد صفحة سجل التغييرات الإصدارات حتى 0.1.8؛ ولم تُنشر هناك تغييرات 0.1.9 و0.1.10.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[LM Studio](/ar/power-local-llm/lm-studio-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / مملوك', 'الفرق الأبرز': 'متصفح نماذج ناضج وخادم محلي؛ دون تحكم مدمج بالمتصفح' },
          { 'التطبيق': '[Jan](/ar/power-local-llm/jan-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / صيغة من Apache 2.0', 'الفرق الأبرز': 'عميل دردشة مفتوح المصدر يعمل دون اتصال ومستودعه علني' },
          { 'التطبيق': '[GPT4All](/ar/power-local-llm/gpt4all-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'دردشة مكتبية مفتوحة المصدر بسيطة مع دردشة على المستندات محليًا' },
          { 'التطبيق': '[Msty](/ar/power-local-llm/msty-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني جزئيًا / مغلق المصدر', 'الفرق الأبرز': 'عميل دردشة متعدد المزوّدين بطبقة مجانية وترقيات مدفوعة' },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Zero1LLM دون اتصال؟',
            a: 'تقول صفحة الأسعار نعم بعد تسجيل دخول واحد وبعد تنزيل نموذج. أما البحث على الويب والمتصفح فيحتاجان إلى اتصال.',
          },
          {
            q: 'هل يمكنني استخدام نماذج ChatGPT أو Claude فيه؟',
            a: 'اختياريًا: يذكر الموقع OpenAI وAnthropic وGemini وOpenRouter بمفتاح API الخاص بك، وتحاسب الجهة المزوّدة عليها ويُرسل إليها ما تكتبه.',
          },
          {
            q: 'هل Zero1LLM هو نفسه إضافة VS Code؟',
            a: 'تقول صفحة About إن المنتج بدأ إضافةً لمحرر VS Code؛ وتطبيق سطح المكتب تنزيل منفصل ويوصف بأنه قيد الاختبار.',
          },
          {
            q: 'لماذا يحذّرني Windows عند فتح المثبّت؟',
            a: 'تقول صفحة التنزيل إن النسختين التجريبيتين غير موقّعتين. وتذكر تجزئة SHA-256 لكل ملف، ولم تتحقق PromptQuorum منها.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Zero1LLM تطبيق مكتبي مجاني البداية يجمع، بحسب موقعه، بين نماذج مفتوحة محلية وبحث على الويب بمصادر وأذونات متصفح موقعًا بعد موقع وقراءة الملفات، ويُثبَّت بنقرتين على Windows وأجهزة Mac بمعالج Apple Silicon. في المقابل، هو نسخة تجريبية عمرها أسابيع بمثبّتات غير موقّعة وحساب إلزامي وأسعار مسودة ودون رخصة أو مستودع معلنين، ولم تختبره PromptQuorum. يناسب من يريدون تجربة هذه التركيبة مبكرًا؛ ومن يريد سجلًا أطول أو مستودعًا علنيًا يمكنه مقارنة [LM Studio](/ar/power-local-llm/lm-studio-review) أو [Jan](/ar/power-local-llm/jan-review) أو [GPT4All](/ar/power-local-llm/gpt4all-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Zero1LLM](https://www.zero1llm.ai/) — وصف المنتج والمنصات والميزات وملاحظات المحلي مقابل السحابي، جرى التحقق منه في 24 أكتوبر 2026.',
          '[صفحة تنزيل Zero1LLM](https://www.zero1llm.ai/download) — ملفات المثبّتات والإصدار والتجزئات وملاحظات التوقيع والمتطلبات.',
          '[سجل تغييرات Zero1LLM](https://www.zero1llm.ai/changelog) — تاريخ الإصدارات منذ 30 سبتمبر 2026 وإعادة التسمية في 0.1.8.',
          '[أسعار Zero1LLM](https://www.zero1llm.ai/pricing) و[سياسة الخصوصية](https://www.zero1llm.ai/privacy) — الخطط وإشعار الأسعار المسودة وعبارات الحساب والبيانات.',
          '[صفحة About في Zero1LLM](https://www.zero1llm.ai/about) — اسم الشركة وأصل المنتج في VS Code.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review) — تطبيق مكتبي لتنزيل النماذج المحلية وتشغيلها.',
          '[مراجعة Jan](/ar/power-local-llm/jan-review) — عميل دردشة مفتوح المصدر يعمل دون اتصال.',
          '[مراجعة GPT4All](/ar/power-local-llm/gpt4all-review) — تطبيق دردشة مكتبي بسيط مع دردشة على المستندات محليًا.',
          '[مراجعة Msty](/ar/power-local-llm/msty-review) — عميل دردشة متعدد المزوّدين بطبقة مجانية.',
          '[مقارنة مساعدي الدردشة المحليين](/ar/power-local-llm/local-llm-chat-assistants-compared) — مقارنة الفئة لتطبيقات الدردشة.',
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
    theme: 'Overview & Reference',
    heroImage: '/images/zero1llm-review-hero-zh.webp',
    title: 'Zero1LLM 评测：支持联网搜索和浏览器控制的本地聊天应用',
    seoTitle: 'Zero1LLM 评测：带联网搜索和浏览器控制的聊天应用',
    intro:
      'Zero1LLM 是一款适用于 Windows 和 Apple Silicon Mac 的桌面应用，据其官网介绍，它在你自己的电脑上运行开源模型，并提供联网搜索、需授权的浏览器控制和文件读取功能。本评测依据 2026 年 10 月 24 日核对的 [zero1llm.ai](https://www.zero1llm.ai/)，当时的最新下载版本为 0.1.10。',
    metaDescription:
      'Zero1LLM 评测：免费桌面聊天应用，可在 Windows 和 Apple Silicon 上运行开源模型，支持联网搜索与浏览器控制。涵盖安装包、隐私及未解问题。',
    twitterDescription:
      'Zero1LLM 评测：在本地运行开源模型，并提供联网搜索和浏览器控制的桌面应用。涵盖配置要求、安装包、免费方案及未证实的说法。',
    audience:
      '正在比较开源模型桌面聊天应用的 Windows 和 Apple Silicon 用户，想了解 Zero1LLM 的配置要求、费用、安装方式，以及其官网哪些内容未能证实。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Zero1LLM 评测',
    targetKeywords: [
      'zero1llm 评测',
      'zero1llm',
      '带联网搜索的本地 ai 聊天应用',
      '在 windows 和 mac 上运行开源模型',
      '本地大模型浏览器控制',
      'zero1llm 与 lm studio 对比',
    ],
    current_hardware_mentioned: ['Apple Silicon Mac', 'NVIDIA GPU', 'AMD GPU'],
    leadAnswerBlock:
      '**Zero1LLM（0.1.10 版）是一款适用于 Windows 和 Apple Silicon Mac 的桌面应用，据其官网介绍，它在你的电脑上运行开源模型，并提供联网搜索、需授权的浏览器控制和文件读取功能。** 免费方案没有时间限制；PromptQuorum 未安装或测试该应用，因此本文所有说法均来自其官网。',
    quickAnswerTop: {
      zh: {
        question: '运行 Zero1LLM 需要什么？',
        answer:
          '据官网，需要一台 Windows 10 或 11（64 位）电脑，或搭载 M1 或更新芯片的 Mac，至少 8 GB 内存（建议 16 GB），以及一个免费的 Zero1LLM 账号。显卡为可选项。',
        bullets: [
          '运行来自 Hugging Face 的开源模型，基于 llama.cpp，在 Apple Silicon 上则使用 MLX。',
          '可读取文档、表格和图片，并能创建文件、图表和图片。',
          '浏览器控制会逐个网站征求许可。',
          '双击未签名的预览版安装程序即可安装。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Zero1LLM 是什么？', anchor: 'what-is-zero1llm' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '配置要求', anchor: 'requirements' },
      { label: '定价', anchor: 'pricing' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '官网列出的功能', anchor: 'key-features' },
      { label: '隐私与网络使用', anchor: 'privacy' },
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
            text: 'Zero1LLM 是一款桌面聊天应用，可在 Windows 和 Apple Silicon Mac 上运行开源模型，并提供联网搜索、浏览器控制和文件读取功能。',
          },
          {
            type: 'plain-terms',
            text: '你下载一个模型，在自己的电脑上与它聊天，还可以让它搜索网页，或逐个网站地使用浏览器。',
          },
        ],
        items: [
          '维护情况：当前下载的 0.1.10 版于 2026 年 10 月 23 日发布，更新日志始于 2026 年 9 月 30 日，因此项目更新活跃，但历史不足一个月；不适用停止维护警告。',
          '许可证：官网未说明，也未链接源代码仓库。',
          '费用：免费方案没有时间限制；付费方案仅为草案，付款功能尚未开通。',
          '安装程序：两个版本均为未签名的预览版，因此 Windows 和 macOS 会先显示警告。',
          '依据：2026 年 10 月 24 日阅读的开发方官网，未做实际测试。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 未安装、测试或评测 Zero1LLM。下文关于功能、隐私和价格的说法均来自开发方。',
          },
        ],
      },
      overview: {
        id: 'what-is-zero1llm',
        title: 'Zero1LLM 是什么？',
        content: [
          '**Zero1LLM 是一款在你自己的电脑上运行开源模型的桌面应用，也可通过你自己的 API 密钥使用云端模型。** [官网](https://www.zero1llm.ai/)称其背后的公司为 ERBrains IT Solutions Pvt Ltd，未列出具体创始人，也未说明所在国家。',
          '更新日志称，该应用在 2026 年 10 月 21 日的 0.1.8 版中更名为 Zero1LLM，官网同时迁至 [zero1llm.ai](https://www.zero1llm.ai/)，第一个窗口出现于 2026 年 9 月 30 日。“关于”页面补充说，该产品最初是一个 VS Code 扩展。其开源模型来自 Hugging Face（点名提到 Qwen、Gemma、Llama 和 Mistral），运行于 llama.cpp、Apple Silicon 上的 MLX，语音识别则使用 whisper.cpp。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Zero1LLM 从其官网下载，每种系统对应一个安装程序。**',
        ],
        columns: ['系统', '下载'],
        rows: [
          { '系统': 'Windows 10 或 11（64 位）', '下载': '[Zero1LLM_0.1.10_x64-setup.exe](https://www.zero1llm.ai/download)（67 MB）' },
          { '系统': '搭载 Apple Silicon（M1 或更新）的 Mac', '下载': '[Zero1LLM_0.1.10_aarch64.dmg](https://www.zero1llm.ai/download)（72 MB）' },
          { '系统': 'Linux 和 Intel Mac', '下载': '据下载页面，暂不提供' },
          { '系统': '官网', '下载': '[zero1llm.ai](https://www.zero1llm.ai/)' },
          { '系统': '隐私政策', '下载': '[zero1llm.ai/privacy](https://www.zero1llm.ai/privacy)' },
        ],
        note: '评测版本：0.1.10，据下载服务器显示，其安装文件于 2026 年 10 月 23 日发布，是核对时的最新上游更新。下载页面称两个版本均为未签名的预览版：Windows 可能显示“已保护你的电脑”（选择“更多信息”，再选“仍要运行”），macOS 则需要在“系统设置”的“隐私与安全性”中点击“仍要打开”。页面为每个文件列出了 SHA-256 哈希值。下载链接每次发布都会变化，因此请使用下载页面，而不要使用保存下来的文件链接。',
      },
      requirements: {
        id: 'requirements',
        title: '配置要求',
        content: [
          '**Zero1LLM 要求至少 8 GB 内存，建议 16 GB；显卡可加快回答速度，但并非必需。** 内存大小决定了哪些模型实际可用。',
        ],
        columns: ['内存', '官网建议的模型'],
        rows: [
          { '内存': '8 GB', '官网建议的模型': '小型模型，10 亿至 40 亿参数' },
          { '内存': '16 GB', '官网建议的模型': '70 亿至 120 亿参数' },
          { '内存': '32 GB 或以上', '官网建议的模型': '更大的模型和混合专家模型，以及图片读取' },
        ],
        note: '在 Windows 上，NVIDIA 或 AMD 显卡为可选项；在 Mac 上，页面要求至少 8 GB 统一内存。需要一个免费账号，登录一次之后，除联网搜索和浏览器外，应用可离线使用。',
      },
      pricing: {
        id: 'pricing',
        title: '定价',
        content: [
          '**Zero1LLM 提供没有时间限制的免费方案；付费方案仅为草案，官网称付款功能尚未开通。**',
        ],
        columns: ['方案', '价格（USD）', '页面列出的内容'],
        rows: [
          { '方案': '免费', '价格（USD）': '$0', '页面列出的内容': '最多 2 个本地模型、联网搜索、浏览器控制、附件' },
          { '方案': 'Pro', '价格（USD）': '$20（草案）', '页面列出的内容': '最多 10 个本地模型、高级联网搜索、抢先体验' },
          { '方案': 'Teams', '价格（USD）': '每人 $15，最少 3 人（草案）', '页面列出的内容': '即将推出；管理员控制、共享云端密钥、统一发票' },
        ],
        note: '读取自 2026 年 10 月 24 日的 [zero1llm.ai/pricing](https://www.zero1llm.ai/pricing)。页面称测试期间价格和额度均为草案，目前尚未向任何人收费。云端模型由其提供商通过你自己的密钥计费，而非由 Zero1LLM 计费。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依照下载页面和功能列表；PromptQuorum 未实际执行。**',
        ],
        numberedItems: [
          {
            title: '检查你的电脑',
            whyItMatters: '对照上文的配置要求核对内存和系统；Intel Mac 和 Linux 暂不支持。',
          },
          {
            title: '下载并打开安装程序',
            whyItMatters: '从下载页面选取适合你系统的文件，首次启动时接受未签名版本的警告。',
          },
          {
            title: '使用免费账号登录',
            whyItMatters: '定价页面称需要免费账号；登录一次之后，应用可离线使用。',
          },
          {
            title: '选择与你的内存相匹配的模型',
            whyItMatters: '“探索”页面会隐藏对你的电脑而言过大的模型，除非你选择显示它们。',
          },
          {
            title: '开始聊天，再添加联网搜索或文件',
            whyItMatters: '使用 /web 命令进行带来源的搜索，附加文档或图片，并在系统询问时允许或拒绝 AI 的每一项操作。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '官网列出的功能',
        content: [
          '**以下每一项都来自官网或其更新日志。**',
        ],
        items: [
          '**联网搜索。** /web 命令可搜索并附带可点击的来源，模型也可以自行触发搜索；更新日志称，你可以在自动搜索之前选择允许或拒绝。',
          '**浏览器控制。** AI 只能在你允许的网站上逐个使用浏览器；“设置”中的“权限”提供允许一次、始终允许或拒绝。',
          '**文件与知识库。** 应用可读取文档、表格和图片，带引用地从知识库中作答，并创建 PDF、Word、Excel、CSV 和 PowerPoint 文件。',
          '**图片与视频。** 更新日志列出了图片和短视频的创建功能，并可在生成的图片上添加标志。',
          '**语音与记忆。** 语音输入通过 whisper.cpp 离线运行，记忆可在不同聊天之间延续。',
          '**云端模型。** 可使用你自己的密钥添加 OpenAI、Anthropic、Gemini 和 OpenRouter。',
          '**其他。** /pkg 命令显示最新的软件包版本；应用会自动更新，并提供浅色和深色主题。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**官网称，本地模型在你的电脑上运行，聊天、记忆和知识库也都存储在本地。** 云端模型为可选项，发送给它们的任何内容都会交给该提供商；据隐私页面，你添加的密钥保存在操作系统的钥匙串中。',
          '同一页面称，网页搜索以及你要求 AI 打开的网页都是通过互联网获取的。对于官网账号，页面列出了姓名、电子邮箱、哈希处理后的密码、已登录设备和使用记录（token 数量、模型名称和时间，不含消息文本）。页面标注为草案，将在正式公开发布前替换；被列为数据控制者的公司是 ERBrains IT Solutions Pvt Ltd，未给出邮寄地址。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些都是开发方的说法。PromptQuorum 未审计该应用或其网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**拥有 16 GB 或以上内存的 Windows 和 Apple Silicon 用户**，想用一个应用完成本地聊天、联网搜索和文件读取。',
          '**希望逐个网站批准浏览器操作的人**，而不是给予智能体不受限制的访问权限。',
          '**愿意接受预览版并使用免费账号的尝鲜者。**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际质量与速度。** PromptQuorum 未运行 Zero1LLM，因此模型性能和浏览器控制的表现均为开发方的说法。',
          '**许可证与源代码。** 官网未说明许可证，也未链接代码仓库，因此无法得知代码是否可供审查。',
          '**开发方与过往记录。** 官网只给出了公司名称；更新日志始于 2026 年 9 月 30 日，且隐私政策草案没有日期。',
          '**发布说明。** 更新日志页面列出的版本只到 0.1.8；0.1.9 和 0.1.10 的变更并未在该处公布。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[LM Studio](/zh/power-local-llm/lm-studio-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / 专有', '主要区别': '成熟的模型浏览器和本地服务器；没有内置浏览器控制' },
          { '应用': '[Jan](/zh/power-local-llm/jan-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / Apache 2.0 变体', '主要区别': '开源的离线聊天客户端，有公开代码仓库' },
          { '应用': '[GPT4All](/zh/power-local-llm/gpt4all-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '简单的开源桌面聊天应用，支持本地文档聊天' },
          { '应用': '[Msty](/zh/power-local-llm/msty-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费增值 / 闭源', '主要区别': '多提供商聊天客户端，有免费版和付费升级' },
        ],
        note: '竞品信息变化较快；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Zero1LLM 可以离线使用吗？',
            a: '定价页面称，登录一次并下载模型后可以。联网搜索和浏览器需要网络连接。',
          },
          {
            q: '能在其中使用 ChatGPT 或 Claude 模型吗？',
            a: '可选：官网列出了 OpenAI、Anthropic、Gemini 和 OpenRouter，需使用你自己的 API 密钥，由提供商计费，内容也会发送给该提供商。',
          },
          {
            q: 'Zero1LLM 与那个 VS Code 扩展是同一个产品吗？',
            a: '“关于”页面称该产品最初是一个 VS Code 扩展；桌面应用是单独的下载，并被描述为处于测试阶段。',
          },
          {
            q: '为什么打开安装程序时 Windows 会发出警告？',
            a: '下载页面称预览版未经签名。页面为每个文件提供了 SHA-256 哈希值，PromptQuorum 未核对。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '据其官网，Zero1LLM 是一款可免费起步的桌面应用，将本地开源模型与带来源的联网搜索、逐个网站的浏览器权限和文件读取结合在一起，在 Windows 和 Apple Silicon Mac 上双击即可安装。不足之处是：它只是一个上线数周的预览版，安装程序未签名，必须使用账号，价格仅为草案，也没有说明许可证或代码仓库，而且 PromptQuorum 未对其进行测试。它适合想尽早尝试这种组合的读者；更看重较长运行记录或公开代码仓库的读者，可对比 [LM Studio](/zh/power-local-llm/lm-studio-review)、[Jan](/zh/power-local-llm/jan-review) 或 [GPT4All](/zh/power-local-llm/gpt4all-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Zero1LLM 官网](https://www.zero1llm.ai/)：产品介绍、平台、功能以及本地与云端的说明，核对于 2026 年 10 月 24 日。',
          '[Zero1LLM 下载页面](https://www.zero1llm.ai/download)：安装文件、版本、哈希值、签名说明和配置要求。',
          '[Zero1LLM 更新日志](https://www.zero1llm.ai/changelog)：自 2026 年 9 月 30 日起的发布历史，以及 0.1.8 版中的更名。',
          '[Zero1LLM 定价](https://www.zero1llm.ai/pricing)和[隐私政策](https://www.zero1llm.ai/privacy)：各方案、价格草案声明、账号与数据说明。',
          '[Zero1LLM 关于页面](https://www.zero1llm.ai/about)：公司名称和 VS Code 起源。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[LM Studio 评测](/zh/power-local-llm/lm-studio-review)：用于下载和运行本地模型的桌面应用。',
          '[Jan 评测](/zh/power-local-llm/jan-review)：开源的离线聊天客户端。',
          '[GPT4All 评测](/zh/power-local-llm/gpt4all-review)：支持本地文档聊天的简单桌面聊天应用。',
          '[Msty 评测](/zh/power-local-llm/msty-review)：有免费版的多提供商聊天客户端。',
          '[本地 LLM 聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared)：聊天应用的分类对比。',
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
    theme: 'Overview & Reference',
    heroImage: '/images/zero1llm-review-hero-ko.webp',
    title: 'Zero1LLM 리뷰: 웹 검색과 브라우저 제어를 갖춘 로컬 채팅 앱',
    seoTitle: 'Zero1LLM 리뷰: 웹 검색 지원 로컬 채팅 앱',
    intro:
      'Zero1LLM은 Windows와 Apple Silicon Mac용 데스크톱 앱으로, 웹사이트에 따르면 오픈 모델을 내 컴퓨터에서 실행하고 웹 검색, 권한을 확인하는 브라우저 제어, 파일 읽기를 더합니다. 이 리뷰는 2026년 10월 24일에 확인한 [zero1llm.ai](https://www.zero1llm.ai/)를 기준으로 하며, 당시 최신 다운로드는 0.1.10 버전이었습니다.',
    metaDescription:
      'Zero1LLM 리뷰: Windows와 Apple Silicon에서 오픈 모델을 실행하는 무료 데스크톱 채팅 앱. 웹 검색, 브라우저 제어, 설치 파일, 개인정보를 정리했습니다.',
    twitterDescription:
      'Zero1LLM 리뷰: 오픈 모델을 로컬에서 실행하고 웹 검색과 브라우저 제어를 더하는 데스크톱 앱. 요구 사양, 설치 파일, 무료 요금제, 확인하지 못한 주장을 정리했습니다.',
    audience:
      '오픈 모델용 데스크톱 채팅 앱을 비교하는 Windows 및 Apple Silicon 사용자 가운데 Zero1LLM에 무엇이 필요한지, 비용은 얼마인지, 어떻게 설치하는지, 웹사이트가 무엇을 확인해 주지 않는지 알고 싶은 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Zero1LLM 리뷰',
    targetKeywords: [
      'zero1llm 리뷰',
      'zero1llm',
      '웹 검색 로컬 ai 채팅 앱',
      '윈도우 맥 오픈 모델 실행',
      '로컬 llm 브라우저 제어',
      'zero1llm lm studio 비교',
    ],
    current_hardware_mentioned: ['Apple Silicon Mac', 'NVIDIA GPU', 'AMD GPU'],
    leadAnswerBlock:
      '**Zero1LLM(0.1.10 버전)은 Windows와 Apple Silicon Mac용 데스크톱 앱으로, 웹사이트에 따르면 오픈 모델을 내 컴퓨터에서 실행하고 웹 검색, 권한을 확인하는 브라우저 제어, 파일 읽기를 더합니다.** 무료 요금제에는 기간 제한이 없으며, PromptQuorum은 이 앱을 설치하거나 테스트하지 않았으므로 여기에 적은 모든 주장은 웹사이트에서 나온 것입니다.',
    quickAnswerTop: {
      ko: {
        question: 'Zero1LLM을 실행하려면 무엇이 필요한가요?',
        answer:
          '웹사이트에 따르면 Windows 10 또는 11 PC(64비트)나 M1 칩 이상의 Mac, 최소 8 GB 메모리(16 GB 권장), 무료 Zero1LLM 계정이 필요합니다. 그래픽카드는 선택 사항입니다.',
        bullets: [
          'Hugging Face의 오픈 모델을 llama.cpp로, Apple Silicon에서는 MLX로 실행합니다.',
          '문서, 스프레드시트, 이미지를 읽고 파일, 차트, 그림을 만들 수 있습니다.',
          '브라우저 제어는 사이트마다 권한을 요청합니다.',
          '서명되지 않은 프리뷰 설치 파일을 더블클릭해 설치합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Zero1LLM이란?', anchor: 'what-is-zero1llm' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '필요한 사양', anchor: 'requirements' },
      { label: '요금', anchor: 'pricing' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '웹사이트에 표시된 기능', anchor: 'key-features' },
      { label: '개인정보 보호와 네트워크 사용', anchor: 'privacy' },
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
            text: 'Zero1LLM은 Windows와 Apple Silicon Mac에서 오픈 모델을 실행하고 웹 검색, 브라우저 제어, 파일 읽기를 더하는 데스크톱 채팅 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '모델을 내려받아 내 컴퓨터에서 채팅하고, 웹을 검색하거나 사이트별로 브라우저를 쓰도록 허용할 수 있습니다.',
          },
        ],
        items: [
          '유지보수: 현재 다운로드인 0.1.10 버전은 2026년 10월 23일에 공개되었고 변경 이력은 2026년 9월 30일부터 시작됩니다. 활발하지만 생긴 지 한 달이 되지 않았으며, 방치 프로젝트 경고는 해당되지 않습니다.',
          '라이선스: 웹사이트는 라이선스를 밝히지 않으며 소스 저장소도 링크하지 않습니다.',
          '비용: 기간 제한이 없는 무료 요금제가 있으며, 유료 요금제는 초안 단계이고 결제는 아직 켜져 있지 않습니다.',
          '설치 프로그램: 두 빌드 모두 서명되지 않은 프리뷰이므로 Windows와 macOS에서 먼저 경고가 표시됩니다.',
          '근거: 2026년 10월 24일에 읽은 제작사 웹사이트이며 직접 테스트는 하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 Zero1LLM을 설치, 테스트, 벤치마크하지 않았습니다. 아래의 기능, 개인정보 보호, 가격에 관한 설명은 제작사 측의 설명입니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-zero1llm',
        title: 'Zero1LLM이란?',
        content: [
          '**Zero1LLM은 오픈 모델을 내 컴퓨터에서 실행하는 데스크톱 앱이며, 내 API 키를 사용해 클라우드 모델도 선택적으로 쓸 수 있습니다.** [웹사이트](https://www.zero1llm.ai/)는 개발사로 ERBrains IT Solutions Pvt Ltd를 밝히며, 개인 창업자나 국가는 밝히지 않습니다.',
          '변경 이력에 따르면 앱은 2026년 10월 21일 0.1.8 버전에서 Zero1LLM으로 이름이 바뀌었고 그때 웹사이트도 [zero1llm.ai](https://www.zero1llm.ai/)로 옮겨졌으며, 첫 창은 2026년 9월 30일에 나타났습니다. About 페이지는 이 제품이 VS Code 확장 프로그램으로 시작했다고 덧붙입니다. 오픈 모델은 Hugging Face에서 받고(Qwen, Gemma, Llama, Mistral이 언급됨) llama.cpp, Apple Silicon에서는 MLX, 음성에는 whisper.cpp로 실행됩니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Zero1LLM은 자체 웹사이트에서 내려받으며, 시스템별로 설치 파일이 하나씩 있습니다.**',
        ],
        columns: ['시스템', '다운로드'],
        rows: [
          { '시스템': 'Windows 10 또는 11(64비트)', '다운로드': '[Zero1LLM_0.1.10_x64-setup.exe](https://www.zero1llm.ai/download) (67 MB)' },
          { '시스템': 'Apple Silicon Mac(M1 이상)', '다운로드': '[Zero1LLM_0.1.10_aarch64.dmg](https://www.zero1llm.ai/download) (72 MB)' },
          { '시스템': 'Linux 및 Intel Mac', '다운로드': '다운로드 페이지에 따르면 아직 지원하지 않음' },
          { '시스템': '웹사이트', '다운로드': '[zero1llm.ai](https://www.zero1llm.ai/)' },
          { '시스템': '개인정보 처리방침', '다운로드': '[zero1llm.ai/privacy](https://www.zero1llm.ai/privacy)' },
        ],
        note: '검토한 버전: 0.1.10. 다운로드 서버에 따르면 설치 파일은 2026년 10월 23일에 공개되었으며, 확인 시점의 최신 업스트림 업데이트입니다. 다운로드 페이지는 두 빌드를 모두 서명되지 않은 프리뷰라고 설명합니다. Windows에서는 「protected your PC」 경고가 표시될 수 있으며(More info를 누른 뒤 Run anyway 선택), macOS에서는 System Settings, Privacy & Security에서 Open Anyway를 눌러야 합니다. 페이지에는 파일별 SHA-256 해시가 표시됩니다. 다운로드 링크는 릴리스마다 바뀌므로, 저장해 둔 파일 링크 대신 다운로드 페이지를 이용하십시오.',
      },
      requirements: {
        id: 'requirements',
        title: '필요한 사양',
        content: [
          '**Zero1LLM에는 최소 8 GB 메모리가 필요하고 16 GB를 권장하며, 그래픽카드는 답변 속도를 높여 주지만 선택 사항입니다.** 어떤 모델이 현실적인지는 메모리가 좌우합니다.',
        ],
        columns: ['메모리', '웹사이트가 제안하는 모델'],
        rows: [
          { '메모리': '8 GB', '웹사이트가 제안하는 모델': '소형 모델, 파라미터 1B~4B' },
          { '메모리': '16 GB', '웹사이트가 제안하는 모델': '파라미터 7B~12B' },
          { '메모리': '32 GB 이상', '웹사이트가 제안하는 모델': '더 큰 모델과 mixture-of-experts 모델, 이미지 읽기' },
        ],
        note: 'Windows에서는 NVIDIA 또는 AMD 그래픽카드가 선택 사항이며, Mac에서는 페이지가 최소 8 GB의 통합 메모리를 요구합니다. 무료 계정이 필요하고, 한 번 로그인한 뒤에는 웹 검색과 브라우저를 제외하고 앱이 오프라인에서 작동합니다.',
      },
      pricing: {
        id: 'pricing',
        title: '요금',
        content: [
          '**Zero1LLM에는 기간 제한이 없는 무료 요금제가 있으며, 유료 요금제는 초안이고 사이트는 결제가 아직 켜져 있지 않다고 밝힙니다.**',
        ],
        columns: ['요금제', '가격(USD)', '페이지에 표시된 내용'],
        rows: [
          { '요금제': 'Free', '가격(USD)': '$0', '페이지에 표시된 내용': '로컬 모델 최대 2개, 웹 검색, 브라우저 제어, 첨부 파일' },
          { '요금제': 'Pro', '가격(USD)': '$20(초안)', '페이지에 표시된 내용': '로컬 모델 최대 10개, 프리미엄 웹 검색, 얼리 액세스' },
          { '요금제': 'Teams', '가격(USD)': '1인당 $15, 최소 3명(초안)', '페이지에 표시된 내용': '출시 예정, 관리자 제어, 공유 클라우드 키, 청구서 하나' },
        ],
        note: '2026년 10월 24일에 [zero1llm.ai/pricing](https://www.zero1llm.ai/pricing)에서 확인한 내용입니다. 페이지는 테스트 기간 동안 가격과 한도가 초안이며 아직 누구에게도 요금을 청구하지 않는다고 밝힙니다. 클라우드 모델은 Zero1LLM이 아니라 해당 제공업체가 내 키를 통해 청구합니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 다운로드 페이지와 기능 목록을 따른 것이며 PromptQuorum이 직접 실행하지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '내 컴퓨터 확인',
            whyItMatters: '메모리와 시스템을 위의 요구 사양과 비교합니다. Intel Mac과 Linux는 아직 지원되지 않습니다.',
          },
          {
            title: '설치 파일을 내려받아 열기',
            whyItMatters: '다운로드 페이지에서 내 시스템에 맞는 파일을 받고, 처음 실행할 때 서명되지 않은 빌드 경고를 수락합니다.',
          },
          {
            title: '무료 계정으로 로그인',
            whyItMatters: '요금 페이지에 따르면 무료 계정이 필요하며, 한 번 로그인한 뒤에는 앱이 오프라인에서 작동합니다.',
          },
          {
            title: '메모리에 맞는 모델 고르기',
            whyItMatters: 'Explore 페이지는 내 컴퓨터에 너무 큰 모델을 기본으로 숨기며, 원하면 표시하도록 선택할 수 있습니다.',
          },
          {
            title: '채팅한 뒤 웹 검색이나 파일 추가',
            whyItMatters: '출처가 달린 검색에는 /web 명령을 쓰고, 문서나 이미지를 첨부하며, AI가 어떤 동작을 하려 할 때마다 허용 또는 거부를 선택합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '웹사이트에 표시된 기능',
        content: [
          '**아래 항목은 모두 웹사이트나 변경 이력에서 확인한 내용입니다.**',
        ],
        items: [
          '**웹 검색.** /web 명령은 클릭할 수 있는 출처와 함께 검색하며 모델이 스스로 검색을 시작할 수도 있습니다. 변경 이력에 따르면 자동 검색 전에 허용 또는 거부를 선택할 수 있습니다.',
          '**브라우저 제어.** AI는 사용자가 허용한 사이트에서만 브라우저를 쓸 수 있으며, Settings, Permissions에서 한 번만 허용, 항상 허용, 거부를 고를 수 있습니다.',
          '**파일과 지식 베이스.** 앱은 문서, 스프레드시트, 이미지를 읽고, 지식 베이스에서 인용과 함께 답하며, PDF, Word, Excel, CSV, PowerPoint 파일을 만듭니다.',
          '**그림과 영상.** 변경 이력에는 그림과 짧은 영상 생성이 기재되어 있으며, 생성된 그림에 로고를 넣을 수 있습니다.',
          '**음성과 메모리.** 음성 입력은 whisper.cpp를 통해 오프라인으로 실행되고, 메모리는 채팅 간에 이어집니다.',
          '**클라우드 모델.** OpenAI, Anthropic, Gemini, OpenRouter를 내 키로 추가할 수 있습니다.',
          '**기타.** /pkg 명령은 최신 패키지 버전을 보여 주고, 앱은 자동으로 업데이트되며 라이트 테마와 다크 테마가 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 네트워크 사용',
        content: [
          '**웹사이트에 따르면 로컬 모델은 내 컴퓨터에서 실행되고 채팅, 메모리, 지식 베이스도 그곳에 저장됩니다.** 클라우드 모델은 선택 사항이며 그쪽으로 보낸 내용은 해당 제공업체로 전달됩니다. 개인정보 처리방침 페이지에 따르면 내가 추가한 키는 운영체제의 키체인에 보관됩니다.',
          '같은 페이지에 따르면 웹 검색과 AI에게 열도록 요청한 페이지는 인터넷을 통해 가져옵니다. 웹사이트 계정에 대해서는 이름, 이메일, 해시된 비밀번호, 로그인한 기기, 사용 기록(토큰 수, 모델 이름, 시간이며 메시지 본문은 아님)을 기재합니다. 이 문서는 공개 출시 전에 교체될 초안으로 표시되어 있으며, 관리자로 명시된 회사는 ERBrains IT Solutions Pvt Ltd이고 우편 주소는 없습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 제작사의 설명입니다. PromptQuorum은 앱이나 네트워크 트래픽을 감사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**16 GB 이상의 메모리를 가진 Windows 및 Apple Silicon 사용자.** 로컬 채팅, 웹 검색, 파일 읽기를 앱 하나로 쓰고 싶은 경우입니다.',
          '**브라우저 동작을 사이트별로 승인하고 싶은 분.** 접근 범위에 제한이 없는 에이전트를 원하지 않는 경우입니다.',
          '**프리뷰 빌드와 무료 계정을 감수하는 얼리 어답터.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실사용 품질과 속도.** PromptQuorum은 Zero1LLM을 실행하지 않았으므로 모델 성능과 브라우저 제어 동작은 제작사의 주장입니다.',
          '**라이선스와 소스.** 웹사이트는 라이선스를 밝히지 않고 저장소도 링크하지 않으므로, 코드를 직접 확인할 수 있는지는 알 수 없습니다.',
          '**제작사와 실적.** 회사 이름만 제시되어 있으며, 변경 이력은 2026년 9월 30일에 시작되고 개인정보 처리방침 초안에는 날짜가 없습니다.',
          '**릴리스 노트.** 변경 이력 페이지는 0.1.8까지의 릴리스를 나열하며, 0.1.9와 0.1.10의 변경 사항은 그곳에 게시되어 있지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          { '앱': '[LM Studio](/ko/power-local-llm/lm-studio-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / 독점', '핵심 차이': '성숙한 모델 브라우저와 로컬 서버, 내장 브라우저 제어는 없음' },
          { '앱': '[Jan](/ko/power-local-llm/jan-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / Apache 2.0 변형', '핵심 차이': '공개 저장소가 있는 오픈 소스 오프라인 채팅 클라이언트' },
          { '앱': '[GPT4All](/ko/power-local-llm/gpt4all-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이': '로컬 문서 채팅을 갖춘 간단한 오픈 소스 데스크톱 채팅' },
          { '앱': '[Msty](/ko/power-local-llm/msty-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': 'Freemium / 비공개 소스', '핵심 차이': '무료 티어와 유료 업그레이드가 있는 다중 제공업체 채팅 클라이언트' },
        ],
        note: '경쟁 제품의 세부 정보는 자주 바뀝니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Zero1LLM은 오프라인에서도 작동하나요?',
            a: '요금 페이지에 따르면 한 번 로그인하고 모델을 내려받은 뒤에는 작동합니다. 웹 검색과 브라우저에는 연결이 필요합니다.',
          },
          {
            q: 'ChatGPT나 Claude 모델도 쓸 수 있나요?',
            a: '선택적으로 가능합니다. 웹사이트는 내 API 키로 OpenAI, Anthropic, Gemini, OpenRouter를 쓸 수 있다고 밝히며, 비용은 제공업체가 청구하고 내용은 해당 제공업체로 전송됩니다.',
          },
          {
            q: 'Zero1LLM은 VS Code 확장 프로그램과 같은 제품인가요?',
            a: 'About 페이지는 이 제품이 VS Code 확장 프로그램으로 시작했다고 밝히며, 데스크톱 앱은 별도로 내려받는 것이고 테스트 중이라고 설명합니다.',
          },
          {
            q: '설치 파일을 열 때 Windows가 경고하는 이유는 무엇인가요?',
            a: '다운로드 페이지에 따르면 프리뷰 빌드는 서명되어 있지 않습니다. 파일별 SHA-256 해시가 제공되지만 PromptQuorum은 이를 확인하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Zero1LLM은 웹사이트에 따르면 로컬 오픈 모델, 출처가 달린 웹 검색, 사이트별 브라우저 권한, 파일 읽기를 결합한 무료로 시작할 수 있는 데스크톱 앱이며, Windows와 Apple Silicon Mac에서 더블클릭으로 설치됩니다. 반면 생긴 지 몇 주 된 프리뷰이고, 설치 파일은 서명되어 있지 않으며, 계정이 필수이고, 가격은 초안이며, 라이선스나 저장소가 밝혀져 있지 않고, PromptQuorum은 직접 테스트하지 않았습니다. 이 조합을 일찍 써 보고 싶은 분께 적합하며, 더 긴 이력이나 공개 저장소를 원한다면 [LM Studio](/ko/power-local-llm/lm-studio-review), [Jan](/ko/power-local-llm/jan-review), [GPT4All](/ko/power-local-llm/gpt4all-review)과 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Zero1LLM 웹사이트](https://www.zero1llm.ai/) — 제품 설명, 플랫폼, 기능, 로컬 대 클라우드 안내. 2026년 10월 24일 확인.',
          '[Zero1LLM 다운로드 페이지](https://www.zero1llm.ai/download) — 설치 파일, 버전, 해시, 서명 안내, 요구 사양.',
          '[Zero1LLM 변경 이력](https://www.zero1llm.ai/changelog) — 2026년 9월 30일부터의 릴리스 이력과 0.1.8의 이름 변경.',
          '[Zero1LLM 요금](https://www.zero1llm.ai/pricing)과 [개인정보 처리방침](https://www.zero1llm.ai/privacy) — 요금제, 초안 가격 안내, 계정 및 데이터 관련 설명.',
          '[Zero1LLM About 페이지](https://www.zero1llm.ai/about) — 회사 이름과 VS Code 기원.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review) — 로컬 모델을 내려받아 실행하는 데스크톱 앱.',
          '[Jan 리뷰](/ko/power-local-llm/jan-review) — 오픈 소스 오프라인 채팅 클라이언트.',
          '[GPT4All 리뷰](/ko/power-local-llm/gpt4all-review) — 로컬 문서 채팅을 갖춘 간단한 데스크톱 채팅 앱.',
          '[Msty 리뷰](/ko/power-local-llm/msty-review) — 무료 티어가 있는 다중 제공업체 채팅 클라이언트.',
          '[로컬 LLM 채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared) — 채팅 앱 카테고리 비교.',
        ],
      },
    },
  },
}
