// Llama App Review: llama.cpp Desktop App for Mac and Windows
// Slug: llama-app-review
// Companion to: llama-cpp-explained (the engine this app installs), ollama-review, lm-studio-review, jan-review, local-llm-run-serve-compared
// Sources: llama.app (home page, /docs/introduction, /docs/installation, /docs/api, /download/mac, /download/windows), the GitHub repositories
// ggml-org/Llama-macOS (README, release 0.45.0 of 2026-10-18) and ggml-org/Llama-Windows (README, release v0.13.0 of 2026-10-20, last push 2026-10-22),
// the Hugging Face blog post "Introducing Llama Windows" (2026-10-13) and the Homebrew cask API (llama-app 0.45.0: arm64 only, macOS 15+),
// all checked 2026-10-24 — no hands-on testing. llama.app has no privacy-policy page (404); privacy statements come from the two READMEs.
// Model sizes and memory tiers are the site's own examples (screenshots and the "Model recommendations by memory" block), not measurements.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/llama-app-review-hero-en.webp',
    title: 'Llama App Review: llama.cpp Desktop App for Mac and Windows',
    seoTitle: 'Llama App Review: llama.cpp Desktop App for Mac & Windows',
    intro: 'Llama (llama.app) is a free, MIT-licensed menu-bar app for Mac and system-tray app for Windows 11, built by the llama.cpp team and Hugging Face. It installs and manages llama.cpp, recommends models that fit your machine and starts a local OpenAI-compatible server. Both apps are young 0.x releases, so this review sticks to what llama.app, the two GitHub repositories and the Hugging Face announcement say, as checked on 24 October 2026.',
    metaDescription: 'Llama app review: free open-source menu-bar and tray app from the llama.cpp team and Hugging Face. Mac and Windows 11, model picks, local API, privacy.',
    twitterDescription: 'Llama app review: the free llama.cpp desktop app for Mac and Windows 11. Setup, local OpenAI-compatible API, data flow and what is unverified.',
    audience: 'Mac and Windows 11 users, and developers, deciding whether to try the llama.cpp team\'s desktop app, who need to know what it requires, what it costs, what stays on the machine and what the sources do not confirm.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Llama app review',
    targetKeywords: [
      'llama app review',
      'llama.app',
      'llama.cpp desktop app',
      'run local llm on mac',
      'run local llm on windows',
      'local openai compatible api',
    ],
    current_hardware_mentioned: ['Apple silicon Mac', 'Windows 11 PC'],
    leadAnswerBlock: '**Llama (llama.app) is a small Mac and Windows 11 app that runs open models on your own computer through llama.cpp, with one-click model installs, a built-in browser chat and a local API at `localhost:9931`.** It is free and open source. PromptQuorum has not installed or tested it; every statement here comes from llama.app, the project\'s GitHub repositories and the Hugging Face announcement.',
    quickAnswerTop: {
      en: {
        question: 'Is Llama the same thing as llama.cpp?',
        answer: 'No. llama.cpp is the open-source engine; Llama (llama.app) is the desktop app that installs that engine, picks settings for each model and starts the local server for you. Both come from the same team, and models you already use with llama.cpp appear in the app automatically, according to the project.',
        bullets: [
          'On Mac it is a menu-bar app and on Windows 11 a tray app; neither has a normal window.',
          'Chat opens in your browser from the menu, and other apps connect through the OpenAI-compatible API.',
          'Models are stored once in the Hugging Face cache, shared with llama.cpp.',
          'Linux gets the llama command-line tool, not the app.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is Llama?',
        anchor: 'what-is-llama-app',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Requirements',
        anchor: 'requirements',
      },
      {
        label: 'How to Get Started',
        anchor: 'getting-started',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Data Flow and Network Use',
        anchor: 'privacy',
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use',
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Frequently Asked Questions',
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
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama is a free, open-source Mac and Windows 11 app from the llama.cpp team and Hugging Face that runs open models locally and serves them to your other apps.',
          },
          {
            type: 'plain-terms',
            text: 'You install it like any app, pick a recommended model from its menu, and then chat in the browser or point editors and scripts at the local API.',
          },
        ],
        items: [
          'Maintenance: the newest repository activity was on 22 October 2026, so no stale-project warning applies.',
          'Cost: free under the MIT license with no account; a Hugging Face sign-in is optional and only needed for gated models.',
          'Platforms: Apple-silicon Macs on macOS 15 or later, and Windows 11 on x64 or ARM64.',
          'Models: recommendations follow your memory; the site recommends Gemma 4 from 16 GB of Mac memory, GPT-OSS from 24 GB and Qwen 3.8 from 32 GB.',
          'Maturity: both apps are 0.x releases, and the Mac app shipped four releases between 2 September and 18 October.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on llama.app, the two GitHub repositories, the Homebrew cask data and the Hugging Face announcement, checked on 24 October 2026. PromptQuorum has not installed, tested or benchmarked the app.',
          },
        ],
      },
      overview: {
        id: 'what-is-llama-app',
        title: 'What Is Llama?',
        content: [
          '**Llama is a menu-bar app on Mac and a system-tray app on Windows that downloads open models, configures them for your machine and serves them locally.** Click Open chat in the menu to talk to a model in your browser, or point coding agents, editors and your own code at the local OpenAI-compatible API. The docs describe it as a minimalist desktop app built on llama.cpp.',
          'It is not the [llama.cpp](/power-local-llm/llama-cpp-explained) engine itself, which PromptQuorum covers separately, and it is not Meta\'s Llama model family. The Windows app is a WinUI 3 port of the Mac app that Hugging Face announced on 13 October 2026, with native support for Windows on Arm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Llama is a normal download on Mac and Windows 11; Linux users get only the command-line tool.**',
        ],
        columns: ['Item', 'Details'],
        rows: [
          {
            Item: 'Mac',
            Details: '[Llama.dmg](https://llama.app/download/mac): drag to Applications',
          },
          {
            Item: 'Mac (Homebrew)',
            Details: '`brew install --cask llama-app`',
          },
          {
            Item: 'Windows 11',
            Details: '[.msixbundle installer](https://llama.app/download/windows) for x64 and ARM64',
          },
          {
            Item: 'Linux',
            Details: '[llama CLI install script](https://llama.app/install.sh), no app',
          },
          {
            Item: 'Price',
            Details: 'Free, MIT license',
          },
          {
            Item: 'Website',
            Details: '[llama.app](https://llama.app/)',
          },
          {
            Item: 'Source code',
            Details: '[Llama-macOS](https://github.com/ggml-org/Llama-macOS) and [Llama-Windows](https://github.com/ggml-org/Llama-Windows)',
          },
          {
            Item: 'Privacy policy',
            Details: 'No page published on llama.app (checked 24 October 2026)',
          },
        ],
        note: 'Versions reviewed: Mac 0.45.0 / Windows 0.13.0, released on 18 and 20 October 2026 per the [Mac](https://github.com/ggml-org/Llama-macOS/releases) and [Windows](https://github.com/ggml-org/Llama-Windows/releases) release pages; the newest repository activity was on 22 October 2026. The Windows 0.13.0 notes say releases are now submitted to the Microsoft Store and the listing goes live once certification completes, but PromptQuorum found no live Store listing. The Linux command on the site pipes a downloaded script into the shell.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**Llama needs an Apple-silicon Mac on macOS 15 or later, or a Windows 11 PC, plus disk space and memory for whichever model you pick.**',
        ],
        columns: ['Item', 'What the sources say'],
        rows: [
          {
            Item: 'Mac',
            'What the sources say': 'Apple silicon, macOS 15 or later (Homebrew cask)',
          },
          {
            Item: 'Windows',
            'What the sources say': 'Windows 11, x64 or ARM64',
          },
          {
            Item: 'App size',
            'What the sources say': 'Mac 4 MB installed; Windows about 86 MB',
          },
          {
            Item: 'Model size',
            'What the sources say': '4.59 GB (gemma-4 E4B) to 19.0 GB (Qwen3.8 27B)',
          },
          {
            Item: 'Memory advice (Mac)',
            'What the sources say': '16 GB+: Gemma 4; 24 GB+: GPT-OSS; 32 GB+: Qwen 3.8',
          },
        ],
        note: 'The site gives memory guidance only for Macs and publishes no Windows memory or GPU requirement; Windows 0.13.0 adds "will it fit?" badges computed from your machine\'s memory.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow llama.app and the READMEs; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Open Llama.dmg and drag Llama to Applications, or open the .msixbundle on Windows 11 and click Install.',
          },
          {
            title: 'Find it in the menu bar or tray',
            whyItMatters: 'Llama has no window; click its icon in the Mac menu bar or the Windows system tray, where hidden icons sit behind the ^ arrow.',
          },
          {
            title: 'Pick a model',
            whyItMatters: 'Choose one of the models recommended for your machine, or browse the Hugging Face catalog, and let Llama install it.',
          },
          {
            title: 'Open the chat',
            whyItMatters: 'Click Open chat in the menu to talk to the model in your browser.',
          },
          {
            title: 'Connect other apps',
            whyItMatters: 'Point an OpenAI SDK, editor or coding agent at `http://localhost:9931/v1`; the site says no API key or usage bill is involved.',
          },
          {
            title: 'Tune settings if needed',
            whyItMatters: 'On Mac, put overrides in `~/.config/llama/models.user.ini`, which the app merges into the configuration it generates.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from llama.app, the READMEs or the release notes.**',
        ],
        items: [
          '**Automatic setup.** Llama sets quantization, context size, image input and speculative decoding per model, and every llama.cpp setting stays editable in a plain-text file.',
          '**On-demand loading.** Models load when requested and unload after five idle minutes, per the site.',
          '**Shared storage.** Models live in the Hugging Face cache shared with llama.cpp, and models already installed through llama.cpp show up in the app.',
          '**API.** OpenAI- and Anthropic-compatible endpoints with streaming, tool calling, structured output and vision, plus remote access from other devices over Tailscale.',
          '**Recent additions.** Mac 0.45.0 added embedding models through `/v1/embeddings`; Windows adds an Alt+Space chat overlay, and its 0.13.0 release adds fit badges, your own model folders and Share to Llama.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Network Use',
        content: [
          '**The maintainers say prompts and inference stay on your machine: the Mac README calls the app "100% local", and the Windows README says it sends no telemetry, no events, no analytics and no install id.**',
          'The Windows README lists the outbound traffic: model downloads, release-update checks and calls to the local server, each carrying only a User-Agent with the app version, Windows build and processor architecture. The Mac README does not list its network use, and the Homebrew cask marks that app as self-updating. Mac 0.45.0 adds an optional Hugging Face sign-in for gated models, and the site describes remote access over Tailscale, a network path you switch on yourself.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maintainers\' own statements; PromptQuorum has not audited the apps\' network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Mac and Windows 11 users new to local models** who want a free app that picks sensible settings for their machine.',
          '**Developers who want a local OpenAI-compatible endpoint** for editors, agents and scripts without managing llama.cpp by hand.',
          '**llama.cpp users** who want its model cache shared with a menu-bar or tray front end.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run either app, so speed, memory use and model quality are not assessed.',
          '**Security and network behavior.** The apps\' traffic has not been audited, and the sources reviewed do not describe Mac signing or notarization.',
          '**Windows requirements.** The sources name Windows 11 but no memory, GPU or driver floor.',
          '**Roadmap.** Both apps are 0.x releases that change quickly, and the sources give no plan.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[Ollama](/power-local-llm/ollama-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Command-line-first runtime with its own model library',
          },
          {
            App: '[LM Studio](/power-local-llm/lm-studio-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price / license': 'Free / proprietary',
            'Key difference': 'Closed-source desktop app with a built-in model browser',
          },
          {
            App: '[Jan](/power-local-llm/jan-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price / license': 'Free / Apache 2.0 (variant)',
            'Key difference': 'Open-source desktop chat app with a model library',
          },
          {
            App: '[GPT4All](/power-local-llm/gpt4all-review)',
            Platforms: 'Mac, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Desktop chat app that runs models locally',
          },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own page.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is there a Linux app?',
            a: 'Not according to llama.app: Linux users get the llama command-line tool through an install script, and the docs also list package managers, prebuilt binaries, Docker and building from source.',
          },
          {
            q: 'Can it use models I already have?',
            a: 'The Mac README says models installed through llama.cpp show up in the app, and the Windows app shares the same Hugging Face cache; Windows 0.13.0 also lets you add your own model folders. The sources do not say whether models from other tools such as Ollama are picked up.',
          },
          {
            q: 'What does the local server speak?',
            a: 'The docs list OpenAI-compatible endpoints under `/v1`, an Anthropic-compatible `/v1/messages` endpoint and lower-level llama.cpp endpoints on port 9931; an API key is only required if you start the server with one.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Llama (llama.app) is a free, MIT-licensed way for Mac and Windows 11 users to run open models through llama.cpp without a terminal, with recommendations for their hardware and a local API for other apps. Against that, both apps are fast-moving 0.x releases, there is no Linux app and PromptQuorum has not tested either one. It suits newcomers and developers who want llama.cpp behind a small front end; readers who want a fuller model browser can compare [LM Studio](/power-local-llm/lm-studio-review) or [Jan](/power-local-llm/jan-review), and those who prefer a command line can look at [Ollama](/power-local-llm/ollama-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[llama.app](https://llama.app/): home page, download pages and documentation, checked 24 October 2026.',
          '[Llama-macOS on GitHub](https://github.com/ggml-org/Llama-macOS): README and releases (0.45.0, 18 October 2026).',
          '[Llama-Windows on GitHub](https://github.com/ggml-org/Llama-Windows): README and releases (v0.13.0, 20 October 2026).',
          '[Introducing Llama Windows](https://huggingface.co/blog/huggingface/llama-windows): Hugging Face announcement of 13 October 2026.',
          '[Homebrew cask llama-app](https://formulae.brew.sh/cask/llama-app): macOS and architecture requirements for the Mac app.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[llama.cpp Explained](/power-local-llm/llama-cpp-explained): the engine behind the app.',
          '[Ollama Review](/power-local-llm/ollama-review): the command-line-first runtime.',
          '[LM Studio Review](/power-local-llm/lm-studio-review): a closed-source desktop app with a model browser.',
          '[Jan Review](/power-local-llm/jan-review): an open-source desktop chat app.',
          '[Local Inference Engines, Runtimes & Gateways Compared](/power-local-llm/local-llm-run-serve-compared): the category comparison.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Llama App Review: llama.cpp Desktop App for Mac and Windows',
      description: 'Llama app review: the free llama.cpp desktop app for Mac and Windows 11 from the llama.cpp team and Hugging Face. Setup, local API, data flow and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/llama-app-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: {
        '@type': 'Audience',
        audienceType: 'Mac and Windows 11 users and developers evaluating the llama.cpp desktop app',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Llama (llama.app)',
        },
        {
          '@type': 'Thing',
          name: 'llama.cpp',
        },
        {
          '@type': 'Thing',
          name: 'Local LLM desktop app',
        },
        {
          '@type': 'Thing',
          name: 'OpenAI-compatible API',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/llama-app-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Llama App Review',
          item: 'https://www.promptquorum.com/power-local-llm/llama-app-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/llama-app-review-hero-de.webp',
    title: 'Llama-App-Rezension: llama.cpp-Desktop-App für Mac und Windows',
    seoTitle: 'Llama-App-Rezension: llama.cpp-App für Mac und Windows',
    intro: 'Llama (llama.app) ist eine kostenlose, MIT-lizenzierte Menüleisten-App für den Mac und Tray-App für Windows 11 vom llama.cpp-Team und Hugging Face. Sie installiert und verwaltet llama.cpp, empfiehlt Modelle, die zu Ihrem Rechner passen, und startet einen lokalen OpenAI-kompatiblen Server. Beide Apps sind junge 0.x-Versionen; diese Rezension beschränkt sich daher auf das, was llama.app, die beiden GitHub-Repositories und die Ankündigung von Hugging Face aussagen, geprüft am 24. Oktober 2026.',
    metaDescription: 'Llama-App-Rezension: kostenlose Open-Source-App vom llama.cpp-Team und Hugging Face für Mac und Windows 11. Modellauswahl, lokale API, Datenschutz.',
    twitterDescription: 'Llama-App-Rezension: die kostenlose llama.cpp-Desktop-App für Mac und Windows 11. Einrichtung, lokale OpenAI-kompatible API, Datenfluss, Offenes.',
    audience: 'Mac- und Windows-11-Nutzer sowie Entwickler, die entscheiden wollen, ob sie die Desktop-App des llama.cpp-Teams ausprobieren, und wissen müssen, was sie verlangt, was sie kostet, was auf dem Rechner bleibt und was die Quellen nicht bestätigen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Llama App Rezension',
    targetKeywords: [
      'llama app rezension',
      'llama.app',
      'llama.cpp desktop app',
      'lokales llm auf dem mac',
      'lokales llm unter windows',
      'lokale openai-kompatible api',
    ],
    current_hardware_mentioned: ['Apple silicon Mac', 'Windows 11 PC'],
    leadAnswerBlock: '**Llama (llama.app) ist eine kleine App für Mac und Windows 11, die offene Modelle über llama.cpp auf Ihrem eigenen Rechner ausführt – mit Modellinstallation per Klick, eingebautem Browser-Chat und lokaler API unter `localhost:9931`.** Sie ist kostenlos und quelloffen. PromptQuorum hat sie weder installiert noch getestet; jede Angabe stammt von llama.app, den GitHub-Repositories des Projekts und der Ankündigung von Hugging Face.',
    quickAnswerTop: {
      de: {
        question: 'Ist Llama dasselbe wie llama.cpp?',
        answer: 'Nein. llama.cpp ist die quelloffene Engine; Llama (llama.app) ist die Desktop-App, die diese Engine installiert, die Einstellungen je Modell wählt und den lokalen Server für Sie startet. Beides stammt vom selben Team, und Modelle, die Sie schon mit llama.cpp nutzen, erscheinen laut Projekt automatisch in der App.',
        bullets: [
          'Auf dem Mac ist es eine Menüleisten-App, unter Windows 11 eine Tray-App; keine von beiden hat ein normales Fenster.',
          'Der Chat öffnet sich über das Menü im Browser, andere Apps verbinden sich über die OpenAI-kompatible API.',
          'Modelle liegen einmal im Hugging-Face-Cache und werden mit llama.cpp geteilt.',
          'Linux erhält das Kommandozeilenwerkzeug llama, nicht die App.',
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
        label: 'Was ist Llama?',
        anchor: 'what-is-llama-app',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Anforderungen',
        anchor: 'requirements',
      },
      {
        label: 'So starten Sie',
        anchor: 'getting-started',
      },
      {
        label: 'Durch die Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Datenfluss und Netzwerknutzung',
        anchor: 'privacy',
      },
      {
        label: 'Für wen es sich eignet',
        anchor: 'who-should-use',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Alternativen und Mitbewerber',
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
            text: 'Llama ist eine kostenlose, quelloffene App für Mac und Windows 11 vom llama.cpp-Team und Hugging Face, die offene Modelle lokal ausführt und Ihren anderen Apps bereitstellt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren sie wie jede App, wählen im Menü ein empfohlenes Modell und chatten dann im Browser oder richten Editoren und Skripte auf die lokale API aus.',
          },
        ],
        items: [
          'Pflege: Die jüngste Repository-Aktivität war am 22. Oktober 2026; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Kosten: kostenlos unter der MIT-Lizenz ohne Konto; eine Anmeldung bei Hugging Face ist optional und nur für geschützte Modelle nötig.',
          'Plattformen: Macs mit Apple Silicon ab macOS 15 sowie Windows 11 auf x64 oder ARM64.',
          'Modelle: Die Empfehlungen richten sich nach Ihrem Speicher; die Website empfiehlt Gemma 4 ab 16 GB Mac-Speicher, GPT-OSS ab 24 GB und Qwen 3.8 ab 32 GB.',
          'Reife: Beide Apps sind 0.x-Versionen, und die Mac-App brachte zwischen dem 2. September und dem 18. Oktober vier Releases heraus.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension basiert auf llama.app, den beiden GitHub-Repositories, den Homebrew-Cask-Daten und der Ankündigung von Hugging Face, geprüft am 24. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder einem Benchmark unterzogen.',
          },
        ],
      },
      overview: {
        id: 'what-is-llama-app',
        title: 'Was ist Llama?',
        content: [
          '**Llama ist eine Menüleisten-App auf dem Mac und eine Tray-App unter Windows, die offene Modelle herunterlädt, für Ihren Rechner konfiguriert und lokal bereitstellt.** Mit „Open chat“ im Menü sprechen Sie im Browser mit einem Modell, oder Sie richten Coding-Agenten, Editoren und eigenen Code auf die lokale OpenAI-kompatible API aus. Die Dokumentation beschreibt sie als minimalistische Desktop-App auf Basis von llama.cpp.',
          'Sie ist nicht die Engine [llama.cpp](/de/power-local-llm/llama-cpp-explained) selbst, die PromptQuorum gesondert behandelt, und auch nicht die Llama-Modellfamilie von Meta. Die Windows-App ist eine WinUI-3-Portierung der Mac-App, die Hugging Face am 13. Oktober 2026 angekündigt hat, mit nativer Unterstützung für Windows on Arm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Llama ist ein normaler Download für Mac und Windows 11; Linux-Nutzer erhalten nur das Kommandozeilenwerkzeug.**',
        ],
        columns: ['Punkt', 'Details'],
        rows: [
          {
            Punkt: 'Mac',
            Details: '[Llama.dmg](https://llama.app/download/mac): in „Programme“ ziehen',
          },
          {
            Punkt: 'Mac (Homebrew)',
            Details: '`brew install --cask llama-app`',
          },
          {
            Punkt: 'Windows 11',
            Details: '[.msixbundle-Installer](https://llama.app/download/windows) für x64 und ARM64',
          },
          {
            Punkt: 'Linux',
            Details: '[Installationsskript für die llama-CLI](https://llama.app/install.sh), keine App',
          },
          {
            Punkt: 'Preis',
            Details: 'Kostenlos, MIT-Lizenz',
          },
          {
            Punkt: 'Website',
            Details: '[llama.app](https://llama.app/)',
          },
          {
            Punkt: 'Quellcode',
            Details: '[Llama-macOS](https://github.com/ggml-org/Llama-macOS) und [Llama-Windows](https://github.com/ggml-org/Llama-Windows)',
          },
          {
            Punkt: 'Datenschutzerklärung',
            Details: 'Auf llama.app keine Seite veröffentlicht (geprüft am 24. Oktober 2026)',
          },
        ],
        note: 'Geprüfte Versionen: Mac 0.45.0 / Windows 0.13.0, laut den Release-Seiten für [Mac](https://github.com/ggml-org/Llama-macOS/releases) und [Windows](https://github.com/ggml-org/Llama-Windows/releases) am 18. und 20. Oktober 2026 veröffentlicht; die jüngste Repository-Aktivität war am 22. Oktober 2026. Laut den Hinweisen zu Windows 0.13.0 werden Releases nun automatisch beim Microsoft Store eingereicht und der Eintrag geht nach der Zertifizierung online; PromptQuorum fand jedoch keinen aktiven Store-Eintrag. Der Linux-Befehl auf der Website leitet ein heruntergeladenes Skript direkt in die Shell.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Llama benötigt einen Mac mit Apple Silicon ab macOS 15 oder einen Windows-11-PC sowie Speicherplatz und Arbeitsspeicher für das gewählte Modell.**',
        ],
        columns: ['Punkt', 'Laut Quellen'],
        rows: [
          {
            Punkt: 'Mac',
            'Laut Quellen': 'Apple Silicon, ab macOS 15 (Homebrew-Cask)',
          },
          {
            Punkt: 'Windows',
            'Laut Quellen': 'Windows 11, x64 oder ARM64',
          },
          {
            Punkt: 'App-Größe',
            'Laut Quellen': 'Mac 4 MB installiert; Windows etwa 86 MB',
          },
          {
            Punkt: 'Modellgröße',
            'Laut Quellen': '4,59 GB (gemma-4 E4B) bis 19,0 GB (Qwen3.8 27B)',
          },
          {
            Punkt: 'Speicherhinweis (Mac)',
            'Laut Quellen': '16 GB+: Gemma 4; 24 GB+: GPT-OSS; 32 GB+: Qwen 3.8',
          },
        ],
        note: 'Die Website gibt Speicherempfehlungen nur für Macs und nennt keine Windows-Anforderung an Speicher oder GPU; Windows 0.13.0 ergänzt „Passt es?“-Hinweise, die aus dem Speicher Ihres Rechners berechnet werden.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So starten Sie',
        content: [
          '**Die Schritte folgen llama.app und den READMEs; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Öffnen Sie Llama.dmg und ziehen Sie Llama in „Programme“, oder öffnen Sie unter Windows 11 die .msixbundle-Datei und klicken Sie auf Installieren.',
          },
          {
            title: 'In Menüleiste oder Tray finden',
            whyItMatters: 'Llama hat kein Fenster; klicken Sie auf das Symbol in der Mac-Menüleiste bzw. im Windows-Infobereich, wo ausgeblendete Symbole hinter dem ^-Pfeil liegen.',
          },
          {
            title: 'Modell wählen',
            whyItMatters: 'Wählen Sie eines der für Ihren Rechner empfohlenen Modelle oder durchsuchen Sie den Hugging-Face-Katalog und lassen Sie Llama es installieren.',
          },
          {
            title: 'Chat öffnen',
            whyItMatters: 'Klicken Sie im Menü auf „Open chat“, um im Browser mit dem Modell zu sprechen.',
          },
          {
            title: 'Andere Apps verbinden',
            whyItMatters: 'Richten Sie ein OpenAI-SDK, einen Editor oder einen Coding-Agenten auf `http://localhost:9931/v1` aus; laut Website fallen weder API-Schlüssel noch Nutzungsgebühren an.',
          },
          {
            title: 'Einstellungen anpassen',
            whyItMatters: 'Legen Sie auf dem Mac Überschreibungen in `~/.config/llama/models.user.ini` ab; die App führt sie mit der von ihr erzeugten Konfiguration zusammen.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Durch die Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt von llama.app, aus den READMEs oder den Release-Notes.**',
        ],
        items: [
          '**Automatische Einrichtung.** Llama setzt Quantisierung, Kontextgröße, Bildeingabe und spekulatives Decoding je Modell, und jede llama.cpp-Einstellung bleibt in einer Textdatei bearbeitbar.',
          '**Laden bei Bedarf.** Modelle werden bei Anfrage geladen und nach fünf Minuten Leerlauf entladen, so die Website.',
          '**Gemeinsamer Speicher.** Modelle liegen im Hugging-Face-Cache, den sich die App mit llama.cpp teilt, und über llama.cpp installierte Modelle erscheinen in der App.',
          '**API.** OpenAI- und Anthropic-kompatible Endpunkte mit Streaming, Tool-Aufrufen, strukturierter Ausgabe und Vision sowie Fernzugriff von anderen Geräten über Tailscale.',
          '**Neuere Ergänzungen.** Mac 0.45.0 brachte Embedding-Modelle über `/v1/embeddings`; Windows bietet ein Chat-Overlay per Alt+Leertaste, und das Release 0.13.0 ergänzt Passt-es-Hinweise, eigene Modellordner und „Share to Llama“.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Netzwerknutzung',
        content: [
          '**Die Maintainer sagen, dass Prompts und Inferenz auf Ihrem Rechner bleiben: Das Mac-README nennt die App „100 % lokal“, und das Windows-README erklärt, sie sende keine Telemetrie, keine Ereignisse, keine Analysedaten und keine Installations-ID.**',
          'Das Windows-README führt den ausgehenden Datenverkehr auf: Modell-Downloads, Prüfungen auf neue Releases und Aufrufe des lokalen Servers, jeweils nur mit einem User-Agent aus App-Version, Windows-Build und Prozessorarchitektur. Das Mac-README listet seine Netzwerknutzung nicht auf, und der Homebrew-Cask kennzeichnet diese App als selbstaktualisierend. Mac 0.45.0 ergänzt eine optionale Hugging-Face-Anmeldung für geschützte Modelle, und die Website beschreibt Fernzugriff über Tailscale – einen Netzwerkweg, den Sie selbst aktivieren.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Aussagen der Maintainer; PromptQuorum hat den Netzwerkverkehr der Apps nicht geprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen es sich eignet',
        items: [
          '**Mac- und Windows-11-Nutzer, die neu bei lokalen Modellen sind** und eine kostenlose App wollen, die sinnvolle Einstellungen für ihren Rechner wählt.',
          '**Entwickler, die einen lokalen OpenAI-kompatiblen Endpunkt wollen**, für Editoren, Agenten und Skripte, ohne llama.cpp von Hand zu verwalten.',
          '**llama.cpp-Nutzer**, die ihren Modell-Cache mit einem Menüleisten- oder Tray-Frontend teilen möchten.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praxisqualität.** PromptQuorum hat keine der beiden Apps ausgeführt; Geschwindigkeit, Speicherverbrauch und Modellqualität sind daher nicht bewertet.',
          '**Sicherheit und Netzwerkverhalten.** Der Datenverkehr der Apps wurde nicht geprüft, und die ausgewerteten Quellen beschreiben weder Signierung noch Notarisierung der Mac-App.',
          '**Windows-Anforderungen.** Die Quellen nennen Windows 11, aber keine Untergrenze für Speicher, GPU oder Treiber.',
          '**Roadmap.** Beide Apps sind 0.x-Versionen mit schnellen Änderungen, und die Quellen nennen keinen Plan.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Alternativen und Mitbewerber',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Wichtigster Unterschied'],
        rows: [
          {
            App: '[Ollama](/de/power-local-llm/ollama-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Kommandozeilen-orientierte Laufzeit mit eigener Modellbibliothek',
          },
          {
            App: '[LM Studio](/de/power-local-llm/lm-studio-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / proprietär',
            'Wichtigster Unterschied': 'Closed-Source-Desktop-App mit integriertem Modellbrowser',
          },
          {
            App: '[Jan](/de/power-local-llm/jan-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0 (Variante)',
            'Wichtigster Unterschied': 'Quelloffene Desktop-Chat-App mit Modellbibliothek',
          },
          {
            App: '[GPT4All](/de/power-local-llm/gpt4all-review)',
            Plattformen: 'Mac, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Desktop-Chat-App, die Modelle lokal ausführt',
          },
        ],
        note: 'Details der Mitbewerber ändern sich häufig; prüfen Sie aktuellen Preis, Lizenz und Plattformen auf der jeweiligen Seite.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Gibt es eine Linux-App?',
            a: 'Laut llama.app nicht: Linux-Nutzer erhalten das Kommandozeilenwerkzeug llama über ein Installationsskript, und die Dokumentation nennt außerdem Paketmanager, vorkompilierte Binärdateien, Docker und den Bau aus dem Quellcode.',
          },
          {
            q: 'Kann sie Modelle nutzen, die ich schon habe?',
            a: 'Laut Mac-README erscheinen über llama.cpp installierte Modelle in der App, und die Windows-App teilt sich denselben Hugging-Face-Cache; Windows 0.13.0 erlaubt außerdem eigene Modellordner. Ob Modelle anderer Werkzeuge wie Ollama übernommen werden, sagen die Quellen nicht.',
          },
          {
            q: 'Welche Schnittstellen bietet der lokale Server?',
            a: 'Die Dokumentation nennt OpenAI-kompatible Endpunkte unter `/v1`, einen Anthropic-kompatiblen Endpunkt `/v1/messages` und llama.cpp-eigene Endpunkte auf Port 9931; ein API-Schlüssel ist nur nötig, wenn Sie den Server mit einem starten.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Llama (llama.app) ist für Mac- und Windows-11-Nutzer ein kostenloser, MIT-lizenzierter Weg, offene Modelle über llama.cpp ohne Terminal auszuführen, mit Empfehlungen für ihre Hardware und einer lokalen API für andere Apps. Dagegen spricht: Beide Apps sind schnell wechselnde 0.x-Versionen, es gibt keine Linux-App, und PromptQuorum hat keine der beiden getestet. Sie passt zu Einsteigern und Entwicklern, die llama.cpp hinter einem kleinen Frontend wollen; wer einen umfangreicheren Modellbrowser möchte, kann [LM Studio](/de/power-local-llm/lm-studio-review) oder [Jan](/de/power-local-llm/jan-review) vergleichen, und wer die Kommandozeile bevorzugt, [Ollama](/de/power-local-llm/ollama-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[llama.app](https://llama.app/): Startseite, Download-Seiten und Dokumentation, geprüft am 24. Oktober 2026.',
          '[Llama-macOS auf GitHub](https://github.com/ggml-org/Llama-macOS): README und Releases (0.45.0, 18. Oktober 2026).',
          '[Llama-Windows auf GitHub](https://github.com/ggml-org/Llama-Windows): README und Releases (v0.13.0, 20. Oktober 2026).',
          '[Introducing Llama Windows](https://huggingface.co/blog/huggingface/llama-windows): Ankündigung von Hugging Face vom 13. Oktober 2026.',
          '[Homebrew-Cask llama-app](https://formulae.brew.sh/cask/llama-app): macOS- und Architekturanforderungen der Mac-App.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[llama.cpp erklärt](/de/power-local-llm/llama-cpp-explained): die Engine hinter der App.',
          '[Ollama-Rezension](/de/power-local-llm/ollama-review): die kommandozeilenorientierte Laufzeit.',
          '[LM-Studio-Rezension](/de/power-local-llm/lm-studio-review): eine Closed-Source-Desktop-App mit Modellbrowser.',
          '[Jan-Rezension](/de/power-local-llm/jan-review): eine quelloffene Desktop-Chat-App.',
          '[Lokale Inferenz-Engines, Laufzeiten und Gateways im Vergleich](/de/power-local-llm/local-llm-run-serve-compared): der Kategorievergleich.',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/llama-app-review-hero-es.webp',
    title: 'Reseña de la app Llama: aplicación de escritorio de llama.cpp para Mac y Windows',
    seoTitle: 'Reseña de Llama: app de llama.cpp para Mac y Windows',
    intro: 'Llama (llama.app) es una aplicación gratuita con licencia MIT, en la barra de menús en Mac y en la bandeja del sistema en Windows 11, creada por el equipo de llama.cpp y Hugging Face. Instala y gestiona llama.cpp, recomienda modelos que se ajusten a tu equipo y arranca un servidor local compatible con OpenAI. Ambas apps son versiones 0.x recientes, así que esta reseña se limita a lo que dicen llama.app, los dos repositorios de GitHub y el anuncio de Hugging Face, comprobados el 24 de octubre de 2026.',
    metaDescription: 'Reseña de la app Llama: aplicación gratuita y de código abierto del equipo de llama.cpp y Hugging Face para Mac y Windows 11. Modelos, API local, datos.',
    twitterDescription: 'Reseña de la app Llama: la app de escritorio gratuita de llama.cpp para Mac y Windows 11. Instalación, API local compatible con OpenAI, flujo de datos y límites.',
    audience: 'Usuarios de Mac y Windows 11 y desarrolladores que dudan si probar la app de escritorio del equipo de llama.cpp y necesitan saber qué exige, cuánto cuesta, qué se queda en el equipo y qué no confirman las fuentes.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña app Llama',
    targetKeywords: [
      'reseña app llama',
      'llama.app',
      'app de escritorio llama.cpp',
      'llm local en mac',
      'llm local en windows',
      'api local compatible con openai',
    ],
    current_hardware_mentioned: ['Apple silicon Mac', 'Windows 11 PC'],
    leadAnswerBlock: '**Llama (llama.app) es una app pequeña para Mac y Windows 11 que ejecuta modelos abiertos en tu propio equipo mediante llama.cpp, con instalación de modelos en un clic, chat integrado en el navegador y una API local en `localhost:9931`.** Es gratuita y de código abierto. PromptQuorum no la ha instalado ni probado; cada afirmación procede de llama.app, los repositorios de GitHub del proyecto y el anuncio de Hugging Face.',
    quickAnswerTop: {
      es: {
        question: '¿Llama es lo mismo que llama.cpp?',
        answer: 'No. llama.cpp es el motor de código abierto; Llama (llama.app) es la app de escritorio que instala ese motor, elige los ajustes de cada modelo y arranca el servidor local por ti. Ambos vienen del mismo equipo, y los modelos que ya usas con llama.cpp aparecen automáticamente en la app, según el proyecto.',
        bullets: [
          'En Mac es una app de la barra de menús y en Windows 11 una app de la bandeja del sistema; ninguna tiene una ventana normal.',
          'El chat se abre en el navegador desde el menú, y otras apps se conectan mediante la API compatible con OpenAI.',
          'Los modelos se guardan una sola vez en la caché de Hugging Face, compartida con llama.cpp.',
          'Linux recibe la herramienta de línea de comandos llama, no la app.',
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
        label: '¿Qué es Llama?',
        anchor: 'what-is-llama-app',
      },
      {
        label: 'Cómo conseguirla',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
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
        label: 'Flujo de datos y uso de red',
        anchor: 'privacy',
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
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama es una app gratuita y de código abierto para Mac y Windows 11, del equipo de llama.cpp y Hugging Face, que ejecuta modelos abiertos en local y los ofrece a tus otras apps.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas como cualquier app, eliges un modelo recomendado en su menú y luego chateas en el navegador o apuntas editores y scripts a la API local.',
          },
        ],
        items: [
          'Mantenimiento: la actividad más reciente de los repositorios fue el 22 de octubre de 2026, por lo que no se aplica ninguna advertencia de proyecto abandonado.',
          'Coste: gratuita con licencia MIT y sin cuenta; iniciar sesión en Hugging Face es opcional y solo hace falta para modelos con acceso restringido.',
          'Plataformas: Mac con Apple silicon y macOS 15 o posterior, y Windows 11 en x64 o ARM64.',
          'Modelos: las recomendaciones dependen de tu memoria; el sitio recomienda Gemma 4 desde 16 GB de memoria en Mac, GPT-OSS desde 24 GB y Qwen 3.8 desde 32 GB.',
          'Madurez: ambas apps son versiones 0.x, y la app para Mac publicó cuatro versiones entre el 2 de septiembre y el 18 de octubre.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en llama.app, los dos repositorios de GitHub, los datos del cask de Homebrew y el anuncio de Hugging Face, comprobados el 24 de octubre de 2026. PromptQuorum no ha instalado, probado ni medido la app.',
          },
        ],
      },
      overview: {
        id: 'what-is-llama-app',
        title: '¿Qué es Llama?',
        content: [
          '**Llama es una app de la barra de menús en Mac y de la bandeja del sistema en Windows que descarga modelos abiertos, los configura para tu equipo y los sirve en local.** Haz clic en «Open chat» en el menú para hablar con un modelo en el navegador, o apunta agentes de código, editores y tu propio código a la API local compatible con OpenAI. La documentación la describe como una app de escritorio minimalista basada en llama.cpp.',
          'No es el motor [llama.cpp](/es/power-local-llm/llama-cpp-explained) en sí, que PromptQuorum trata por separado, ni la familia de modelos Llama de Meta. La app de Windows es una adaptación a WinUI 3 de la app de Mac que Hugging Face anunció el 13 de octubre de 2026, con compatibilidad nativa con Windows on Arm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Llama se descarga de forma normal en Mac y Windows 11; los usuarios de Linux solo reciben la herramienta de línea de comandos.**',
        ],
        columns: ['Elemento', 'Detalles'],
        rows: [
          {
            Elemento: 'Mac',
            Detalles: '[Llama.dmg](https://llama.app/download/mac): arrástrala a Aplicaciones',
          },
          {
            Elemento: 'Mac (Homebrew)',
            Detalles: '`brew install --cask llama-app`',
          },
          {
            Elemento: 'Windows 11',
            Detalles: '[Instalador .msixbundle](https://llama.app/download/windows) para x64 y ARM64',
          },
          {
            Elemento: 'Linux',
            Detalles: '[Script de instalación de la CLI llama](https://llama.app/install.sh), sin app',
          },
          {
            Elemento: 'Precio',
            Detalles: 'Gratis, licencia MIT',
          },
          {
            Elemento: 'Sitio web',
            Detalles: '[llama.app](https://llama.app/)',
          },
          {
            Elemento: 'Código fuente',
            Detalles: '[Llama-macOS](https://github.com/ggml-org/Llama-macOS) y [Llama-Windows](https://github.com/ggml-org/Llama-Windows)',
          },
          {
            Elemento: 'Política de privacidad',
            Detalles: 'No hay página publicada en llama.app (comprobado el 24 de octubre de 2026)',
          },
        ],
        note: 'Versiones revisadas: Mac 0.45.0 / Windows 0.13.0, publicadas el 18 y el 20 de octubre de 2026 según las páginas de versiones de [Mac](https://github.com/ggml-org/Llama-macOS/releases) y [Windows](https://github.com/ggml-org/Llama-Windows/releases); la actividad más reciente de los repositorios fue el 22 de octubre de 2026. Las notas de Windows 0.13.0 dicen que las versiones ya se envían a Microsoft Store y que la ficha se publicará cuando termine la certificación, pero PromptQuorum no encontró ninguna ficha activa. El comando para Linux del sitio pasa un script descargado directamente al shell.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Llama necesita un Mac con Apple silicon y macOS 15 o posterior, o un PC con Windows 11, además de espacio en disco y memoria para el modelo que elijas.**',
        ],
        columns: ['Elemento', 'Qué dicen las fuentes'],
        rows: [
          {
            Elemento: 'Mac',
            'Qué dicen las fuentes': 'Apple silicon, macOS 15 o posterior (cask de Homebrew)',
          },
          {
            Elemento: 'Windows',
            'Qué dicen las fuentes': 'Windows 11, x64 o ARM64',
          },
          {
            Elemento: 'Tamaño de la app',
            'Qué dicen las fuentes': 'Mac 4 MB instalada; Windows unos 86 MB',
          },
          {
            Elemento: 'Tamaño de modelos',
            'Qué dicen las fuentes': '4.59 GB (gemma-4 E4B) a 19.0 GB (Qwen3.8 27B)',
          },
          {
            Elemento: 'Consejo de memoria (Mac)',
            'Qué dicen las fuentes': '16 GB+: Gemma 4; 24 GB+: GPT-OSS; 32 GB+: Qwen 3.8',
          },
        ],
        note: 'El sitio ofrece orientación de memoria solo para Mac y no publica requisitos de memoria ni de GPU para Windows; Windows 0.13.0 añade indicadores de «¿cabe?» calculados con la memoria de tu equipo.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen llama.app y los README; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Instalar la app',
            whyItMatters: 'Abre Llama.dmg y arrastra Llama a Aplicaciones, o abre el archivo .msixbundle en Windows 11 y haz clic en Instalar.',
          },
          {
            title: 'Encontrarla en la barra de menús o la bandeja',
            whyItMatters: 'Llama no tiene ventana; haz clic en su icono en la barra de menús de Mac o en la bandeja de Windows, donde los iconos ocultos están tras la flecha ^.',
          },
          {
            title: 'Elegir un modelo',
            whyItMatters: 'Elige uno de los modelos recomendados para tu equipo, o explora el catálogo de Hugging Face, y deja que Llama lo instale.',
          },
          {
            title: 'Abrir el chat',
            whyItMatters: 'Haz clic en «Open chat» en el menú para hablar con el modelo en tu navegador.',
          },
          {
            title: 'Conectar otras apps',
            whyItMatters: 'Apunta un SDK de OpenAI, un editor o un agente de código a `http://localhost:9931/v1`; según el sitio, no hacen falta clave de API ni se factura por uso.',
          },
          {
            title: 'Ajustar la configuración si hace falta',
            whyItMatters: 'En Mac, pon tus cambios en `~/.config/llama/models.user.ini`, que la app fusiona con la configuración que genera.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento procede de llama.app, los README o las notas de versión.**',
        ],
        items: [
          '**Configuración automática.** Llama ajusta la cuantización, el tamaño de contexto, la entrada de imágenes y la decodificación especulativa por modelo, y todos los ajustes de llama.cpp siguen siendo editables en un archivo de texto.',
          '**Carga bajo demanda.** Los modelos se cargan cuando se piden y se descargan tras cinco minutos de inactividad, según el sitio.',
          '**Almacenamiento compartido.** Los modelos viven en la caché de Hugging Face compartida con llama.cpp, y los modelos ya instalados con llama.cpp aparecen en la app.',
          '**API.** Endpoints compatibles con OpenAI y Anthropic con streaming, llamadas a herramientas, salida estructurada y visión, además de acceso remoto desde otros dispositivos mediante Tailscale.',
          '**Novedades recientes.** Mac 0.45.0 añadió modelos de embeddings mediante `/v1/embeddings`; Windows ofrece una superposición de chat con Alt+Espacio, y su versión 0.13.0 añade indicadores de ajuste, tus propias carpetas de modelos y «Share to Llama».',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y uso de red',
        content: [
          '**Los responsables dicen que los prompts y la inferencia se quedan en tu equipo: el README de Mac llama a la app «100 % local», y el README de Windows afirma que no envía telemetría, eventos, analíticas ni identificador de instalación.**',
          'El README de Windows enumera el tráfico saliente: descargas de modelos, comprobaciones de nuevas versiones y llamadas al servidor local, cada una con solo un User-Agent con la versión de la app, la compilación de Windows y la arquitectura del procesador. El README de Mac no enumera su uso de red, y el cask de Homebrew marca esa app como autoactualizable. Mac 0.45.0 añade un inicio de sesión opcional en Hugging Face para modelos con acceso restringido, y el sitio describe el acceso remoto mediante Tailscale, una vía de red que activas tú.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son declaraciones de los responsables; PromptQuorum no ha auditado el tráfico de red de las apps.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Mac y Windows 11 nuevos en los modelos locales** que quieren una app gratuita que elija ajustes sensatos para su equipo.',
          '**Desarrolladores que quieren un endpoint local compatible con OpenAI** para editores, agentes y scripts sin gestionar llama.cpp a mano.',
          '**Usuarios de llama.cpp** que quieren compartir su caché de modelos con una interfaz de barra de menús o bandeja.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en uso.** PromptQuorum no ejecutó ninguna de las dos apps, así que no se evalúan la velocidad, el uso de memoria ni la calidad de los modelos.',
          '**Seguridad y comportamiento de red.** El tráfico de las apps no se ha auditado, y las fuentes revisadas no describen la firma ni la notarización de la app de Mac.',
          '**Requisitos de Windows.** Las fuentes nombran Windows 11, pero ningún mínimo de memoria, GPU o controladores.',
          '**Hoja de ruta.** Ambas apps son versiones 0.x que cambian rápido, y las fuentes no indican ningún plan.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          {
            App: '[Ollama](/es/power-local-llm/ollama-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Entorno orientado a la línea de comandos con su propia biblioteca de modelos',
          },
          {
            App: '[LM Studio](/es/power-local-llm/lm-studio-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio / licencia': 'Gratis / propietaria',
            'Diferencia clave': 'App de escritorio cerrada con explorador de modelos integrado',
          },
          {
            App: '[Jan](/es/power-local-llm/jan-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio / licencia': 'Gratis / Apache 2.0 (variante)',
            'Diferencia clave': 'App de chat de escritorio de código abierto con biblioteca de modelos',
          },
          {
            App: '[GPT4All](/es/power-local-llm/gpt4all-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'App de chat de escritorio que ejecuta modelos en local',
          },
        ],
        note: 'Los detalles de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en su propia página.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Hay una app para Linux?',
            a: 'No según llama.app: los usuarios de Linux reciben la herramienta de línea de comandos llama mediante un script de instalación, y la documentación también menciona gestores de paquetes, binarios precompilados, Docker y la compilación desde el código fuente.',
          },
          {
            q: '¿Puede usar modelos que ya tengo?',
            a: 'El README de Mac dice que los modelos instalados con llama.cpp aparecen en la app, y la app de Windows comparte la misma caché de Hugging Face; Windows 0.13.0 también permite añadir tus propias carpetas de modelos. Las fuentes no dicen si se recogen modelos de otras herramientas, como Ollama.',
          },
          {
            q: '¿Qué interfaces ofrece el servidor local?',
            a: 'La documentación menciona endpoints compatibles con OpenAI bajo `/v1`, un endpoint compatible con Anthropic `/v1/messages` y endpoints propios de llama.cpp en el puerto 9931; solo hace falta una clave de API si arrancas el servidor con una.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Llama (llama.app) es para los usuarios de Mac y Windows 11 una forma gratuita y con licencia MIT de ejecutar modelos abiertos mediante llama.cpp sin terminal, con recomendaciones para su hardware y una API local para otras apps. En contra, ambas apps son versiones 0.x que cambian rápido, no hay app para Linux y PromptQuorum no ha probado ninguna. Encaja con principiantes y desarrolladores que quieren llama.cpp tras una interfaz pequeña; quien busque un explorador de modelos más completo puede comparar [LM Studio](/es/power-local-llm/lm-studio-review) o [Jan](/es/power-local-llm/jan-review), y quien prefiera la línea de comandos, [Ollama](/es/power-local-llm/ollama-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[llama.app](https://llama.app/): página principal, páginas de descarga y documentación, comprobadas el 24 de octubre de 2026.',
          '[Llama-macOS en GitHub](https://github.com/ggml-org/Llama-macOS): README y versiones (0.45.0, 18 de octubre de 2026).',
          '[Llama-Windows en GitHub](https://github.com/ggml-org/Llama-Windows): README y versiones (v0.13.0, 20 de octubre de 2026).',
          '[Introducing Llama Windows](https://huggingface.co/blog/huggingface/llama-windows): anuncio de Hugging Face del 13 de octubre de 2026.',
          '[Cask de Homebrew llama-app](https://formulae.brew.sh/cask/llama-app): requisitos de macOS y arquitectura de la app de Mac.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[llama.cpp explicado](/es/power-local-llm/llama-cpp-explained): el motor detrás de la app.',
          '[Reseña de Ollama](/es/power-local-llm/ollama-review): el entorno orientado a la línea de comandos.',
          '[Reseña de LM Studio](/es/power-local-llm/lm-studio-review): una app de escritorio cerrada con explorador de modelos.',
          '[Reseña de Jan](/es/power-local-llm/jan-review): una app de chat de escritorio de código abierto.',
          '[Motores de inferencia, entornos y pasarelas locales comparados](/es/power-local-llm/local-llm-run-serve-compared): la comparativa de la categoría.',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/llama-app-review-hero-fr.webp',
    title: 'Test de l’app Llama : application de bureau llama.cpp pour Mac et Windows',
    seoTitle: 'Test de Llama : application llama.cpp pour Mac et Windows',
    intro: 'Llama (llama.app) est une application gratuite sous licence MIT, dans la barre de menus sur Mac et dans la zone de notification sous Windows 11, conçue par l’équipe llama.cpp et Hugging Face. Elle installe et gère llama.cpp, recommande des modèles adaptés à votre machine et lance un serveur local compatible OpenAI. Les deux applications sont de jeunes versions 0.x ; ce test se limite donc à ce que disent llama.app, les deux dépôts GitHub et l’annonce de Hugging Face, vérifiés le 24 octobre 2026.',
    metaDescription: 'Test de l’app Llama : application gratuite et open source de l’équipe llama.cpp et Hugging Face pour Mac et Windows 11. Modèles, API locale, données.',
    twitterDescription: 'Test de l’app Llama : l’application de bureau llama.cpp gratuite pour Mac et Windows 11. Installation, API locale compatible OpenAI, flux de données, limites.',
    audience: 'Utilisateurs de Mac et de Windows 11 et développeurs qui hésitent à essayer l’application de bureau de l’équipe llama.cpp et veulent savoir ce qu’elle exige, ce qu’elle coûte, ce qui reste sur la machine et ce que les sources ne confirment pas.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test app Llama',
    targetKeywords: [
      'test app llama',
      'llama.app',
      'application de bureau llama.cpp',
      'llm local sur mac',
      'llm local sur windows',
      'api locale compatible openai',
    ],
    current_hardware_mentioned: ['Apple silicon Mac', 'Windows 11 PC'],
    leadAnswerBlock: '**Llama (llama.app) est une petite application pour Mac et Windows 11 qui exécute des modèles ouverts sur votre propre ordinateur via llama.cpp, avec installation de modèles en un clic, chat intégré dans le navigateur et API locale sur `localhost:9931`.** Elle est gratuite et open source. PromptQuorum ne l’a ni installée ni testée ; chaque affirmation provient de llama.app, des dépôts GitHub du projet et de l’annonce de Hugging Face.',
    quickAnswerTop: {
      fr: {
        question: 'Llama, est-ce la même chose que llama.cpp ?',
        answer: 'Non. llama.cpp est le moteur open source ; Llama (llama.app) est l’application de bureau qui installe ce moteur, choisit les réglages de chaque modèle et lance le serveur local à votre place. Les deux viennent de la même équipe, et les modèles que vous utilisez déjà avec llama.cpp apparaissent automatiquement dans l’application, selon le projet.',
        bullets: [
          'Sur Mac, c’est une application de la barre de menus ; sous Windows 11, de la zone de notification ; aucune n’a de fenêtre classique.',
          'Le chat s’ouvre dans le navigateur depuis le menu, et les autres applications se connectent via l’API compatible OpenAI.',
          'Les modèles sont stockés une seule fois dans le cache Hugging Face, partagé avec llama.cpp.',
          'Linux reçoit l’outil en ligne de commande llama, pas l’application.',
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
        label: 'Qu’est-ce que Llama ?',
        anchor: 'what-is-llama-app',
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Configuration requise',
        anchor: 'requirements',
      },
      {
        label: 'Pour démarrer',
        anchor: 'getting-started',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Flux de données et usage du réseau',
        anchor: 'privacy',
      },
      {
        label: 'À qui s’adresse-t-elle',
        anchor: 'who-should-use',
      },
      {
        label: 'Ce que nous n’avons pas pu vérifier',
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
        label: 'Lectures associées',
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
            text: 'Llama est une application gratuite et open source pour Mac et Windows 11, de l’équipe llama.cpp et de Hugging Face, qui exécute des modèles ouverts en local et les met à disposition de vos autres applications.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l’installez comme n’importe quelle application, choisissez un modèle recommandé dans son menu, puis discutez dans le navigateur ou pointez éditeurs et scripts vers l’API locale.',
          },
        ],
        items: [
          'Maintenance : l’activité la plus récente des dépôts date du 22 octobre 2026 ; aucun avertissement de projet délaissé ne s’applique.',
          'Coût : gratuite sous licence MIT, sans compte ; une connexion à Hugging Face est facultative et ne sert que pour les modèles à accès restreint.',
          'Plateformes : Mac Apple silicon sous macOS 15 ou plus récent, et Windows 11 en x64 ou ARM64.',
          'Modèles : les recommandations suivent votre mémoire ; le site recommande Gemma 4 à partir de 16 Go de mémoire Mac, GPT-OSS à partir de 24 Go et Qwen 3.8 à partir de 32 Go.',
          'Maturité : les deux applications sont en version 0.x, et l’application Mac a publié quatre versions entre le 2 septembre et le 18 octobre.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test repose sur llama.app, les deux dépôts GitHub, les données du cask Homebrew et l’annonce de Hugging Face, vérifiés le 24 octobre 2026. PromptQuorum n’a ni installé, ni testé, ni mesuré l’application.',
          },
        ],
      },
      overview: {
        id: 'what-is-llama-app',
        title: 'Qu’est-ce que Llama ?',
        content: [
          '**Llama est une application de la barre de menus sur Mac et de la zone de notification sous Windows, qui télécharge des modèles ouverts, les configure pour votre machine et les sert en local.** Cliquez sur « Open chat » dans le menu pour discuter avec un modèle dans le navigateur, ou pointez agents de code, éditeurs et votre propre code vers l’API locale compatible OpenAI. La documentation la décrit comme une application de bureau minimaliste fondée sur llama.cpp.',
          'Ce n’est pas le moteur [llama.cpp](/fr/power-local-llm/llama-cpp-explained) lui-même, que PromptQuorum traite séparément, ni la famille de modèles Llama de Meta. L’application Windows est un portage WinUI 3 de l’application Mac, annoncé par Hugging Face le 13 octobre 2026, avec prise en charge native de Windows on Arm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Llama se télécharge normalement sur Mac et Windows 11 ; les utilisateurs de Linux n’obtiennent que l’outil en ligne de commande.**',
        ],
        columns: ['Élément', 'Détails'],
        rows: [
          {
            'Élément': 'Mac',
            'Détails': '[Llama.dmg](https://llama.app/download/mac) : à glisser dans Applications',
          },
          {
            'Élément': 'Mac (Homebrew)',
            'Détails': '`brew install --cask llama-app`',
          },
          {
            'Élément': 'Windows 11',
            'Détails': '[Installateur .msixbundle](https://llama.app/download/windows) pour x64 et ARM64',
          },
          {
            'Élément': 'Linux',
            'Détails': '[Script d’installation de la CLI llama](https://llama.app/install.sh), sans application',
          },
          {
            'Élément': 'Prix',
            'Détails': 'Gratuit, licence MIT',
          },
          {
            'Élément': 'Site web',
            'Détails': '[llama.app](https://llama.app/)',
          },
          {
            'Élément': 'Code source',
            'Détails': '[Llama-macOS](https://github.com/ggml-org/Llama-macOS) et [Llama-Windows](https://github.com/ggml-org/Llama-Windows)',
          },
          {
            'Élément': 'Politique de confidentialité',
            'Détails': 'Aucune page publiée sur llama.app (vérifié le 24 octobre 2026)',
          },
        ],
        note: 'Versions testées : Mac 0.45.0 / Windows 0.13.0, publiées les 18 et 20 octobre 2026 selon les pages de versions [Mac](https://github.com/ggml-org/Llama-macOS/releases) et [Windows](https://github.com/ggml-org/Llama-Windows/releases) ; l’activité la plus récente des dépôts date du 22 octobre 2026. Les notes de la version Windows 0.13.0 indiquent que les versions sont désormais soumises au Microsoft Store et que la fiche sera en ligne après certification, mais PromptQuorum n’a trouvé aucune fiche active. La commande Linux du site envoie un script téléchargé directement dans le shell.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**Llama nécessite un Mac Apple silicon sous macOS 15 ou plus récent, ou un PC Windows 11, ainsi que l’espace disque et la mémoire du modèle choisi.**',
        ],
        columns: ['Élément', 'Selon les sources'],
        rows: [
          {
            'Élément': 'Mac',
            'Selon les sources': 'Apple silicon, macOS 15 ou plus (cask Homebrew)',
          },
          {
            'Élément': 'Windows',
            'Selon les sources': 'Windows 11, x64 ou ARM64',
          },
          {
            'Élément': 'Taille de l’app',
            'Selon les sources': 'Mac 4 Mo installée ; Windows environ 86 Mo',
          },
          {
            'Élément': 'Taille des modèles',
            'Selon les sources': '4.59 Go (gemma-4 E4B) à 19.0 Go (Qwen3.8 27B)',
          },
          {
            'Élément': 'Conseil mémoire (Mac)',
            'Selon les sources': '16 Go+ : Gemma 4 ; 24 Go+ : GPT-OSS ; 32 Go+ : Qwen 3.8',
          },
        ],
        note: 'Le site ne donne de conseil de mémoire que pour les Mac et ne publie aucune exigence de mémoire ou de GPU pour Windows ; Windows 0.13.0 ajoute des pastilles « ça tient ? » calculées d’après la mémoire de votre machine.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour démarrer',
        content: [
          '**Ces étapes suivent llama.app et les README ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Installer l’application',
            whyItMatters: 'Ouvrez Llama.dmg et glissez Llama dans Applications, ou ouvrez le fichier .msixbundle sous Windows 11 et cliquez sur Installer.',
          },
          {
            title: 'La trouver dans la barre de menus ou la zone de notification',
            whyItMatters: 'Llama n’a pas de fenêtre ; cliquez sur son icône dans la barre de menus du Mac ou la zone de notification de Windows, où les icônes masquées se cachent derrière la flèche ^.',
          },
          {
            title: 'Choisir un modèle',
            whyItMatters: 'Choisissez l’un des modèles recommandés pour votre machine, ou parcourez le catalogue Hugging Face, et laissez Llama l’installer.',
          },
          {
            title: 'Ouvrir le chat',
            whyItMatters: 'Cliquez sur « Open chat » dans le menu pour discuter avec le modèle dans votre navigateur.',
          },
          {
            title: 'Connecter d’autres applications',
            whyItMatters: 'Pointez un SDK OpenAI, un éditeur ou un agent de code vers `http://localhost:9931/v1` ; selon le site, ni clé d’API ni facturation à l’usage ne sont nécessaires.',
          },
          {
            title: 'Ajuster les réglages si besoin',
            whyItMatters: 'Sur Mac, placez vos surcharges dans `~/.config/llama/models.user.ini`, que l’application fusionne avec la configuration qu’elle génère.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de llama.app, des README ou des notes de version.**',
        ],
        items: [
          '**Configuration automatique.** Llama règle la quantification, la taille de contexte, l’entrée d’images et le décodage spéculatif pour chaque modèle, et tous les réglages de llama.cpp restent modifiables dans un fichier texte.',
          '**Chargement à la demande.** Les modèles se chargent à la demande et se déchargent après cinq minutes d’inactivité, selon le site.',
          '**Stockage partagé.** Les modèles résident dans le cache Hugging Face partagé avec llama.cpp, et les modèles déjà installés via llama.cpp apparaissent dans l’application.',
          '**API.** Points de terminaison compatibles OpenAI et Anthropic, avec streaming, appel d’outils, sortie structurée et vision, ainsi qu’un accès à distance depuis d’autres appareils via Tailscale.',
          '**Ajouts récents.** Mac 0.45.0 a ajouté les modèles d’embeddings via `/v1/embeddings` ; Windows propose une surcouche de chat par Alt+Espace, et sa version 0.13.0 ajoute des pastilles d’adéquation, vos propres dossiers de modèles et « Share to Llama ».',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et usage du réseau',
        content: [
          '**Les mainteneurs affirment que les prompts et l’inférence restent sur votre machine : le README Mac qualifie l’application de « 100 % locale », et le README Windows dit qu’elle n’envoie ni télémétrie, ni événements, ni analyses, ni identifiant d’installation.**',
          'Le README Windows énumère le trafic sortant : téléchargements de modèles, vérifications de nouvelles versions et appels au serveur local, chacun ne transportant qu’un User-Agent avec la version de l’application, la build Windows et l’architecture du processeur. Le README Mac n’énumère pas son usage du réseau, et le cask Homebrew indique que cette application se met à jour seule. Mac 0.45.0 ajoute une connexion facultative à Hugging Face pour les modèles à accès restreint, et le site décrit un accès à distance via Tailscale, une voie réseau que vous activez vous-même.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont les déclarations des mainteneurs ; PromptQuorum n’a pas audité le trafic réseau des applications.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s’adresse-t-elle',
        items: [
          '**Les utilisateurs de Mac et de Windows 11 qui découvrent les modèles locaux** et veulent une application gratuite qui choisit des réglages sensés pour leur machine.',
          '**Les développeurs qui veulent un point de terminaison local compatible OpenAI** pour éditeurs, agents et scripts, sans gérer llama.cpp à la main.',
          '**Les utilisateurs de llama.cpp** qui veulent partager leur cache de modèles avec une interface de barre de menus ou de zone de notification.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité à l’usage.** PromptQuorum n’a exécuté aucune des deux applications ; la vitesse, la consommation de mémoire et la qualité des modèles ne sont donc pas évaluées.',
          '**Sécurité et comportement réseau.** Le trafic des applications n’a pas été audité, et les sources examinées ne décrivent ni la signature ni la notarisation de l’application Mac.',
          '**Exigences Windows.** Les sources citent Windows 11, mais aucun seuil de mémoire, de GPU ou de pilote.',
          '**Feuille de route.** Les deux applications sont en version 0.x et évoluent vite, et les sources n’indiquent aucun plan.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['App', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            App: '[Ollama](/fr/power-local-llm/ollama-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Runtime orienté ligne de commande avec sa propre bibliothèque de modèles',
          },
          {
            App: '[LM Studio](/fr/power-local-llm/lm-studio-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix / licence': 'Gratuit / propriétaire',
            'Différence clé': 'Application de bureau fermée avec explorateur de modèles intégré',
          },
          {
            App: '[Jan](/fr/power-local-llm/jan-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix / licence': 'Gratuit / Apache 2.0 (variante)',
            'Différence clé': 'Application de chat de bureau open source avec bibliothèque de modèles',
          },
          {
            App: '[GPT4All](/fr/power-local-llm/gpt4all-review)',
            Plateformes: 'Mac, Windows, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Application de chat de bureau qui exécute les modèles en local',
          },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur leur propre page.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Existe-t-il une application Linux ?',
            a: 'Pas selon llama.app : les utilisateurs de Linux obtiennent l’outil en ligne de commande llama via un script d’installation, et la documentation cite aussi les gestionnaires de paquets, les binaires précompilés, Docker et la compilation depuis les sources.',
          },
          {
            q: 'Peut-elle utiliser les modèles que j’ai déjà ?',
            a: 'Le README Mac indique que les modèles installés via llama.cpp apparaissent dans l’application, et l’application Windows partage le même cache Hugging Face ; Windows 0.13.0 permet aussi d’ajouter vos propres dossiers de modèles. Les sources ne disent pas si les modèles d’autres outils, comme Ollama, sont repris.',
          },
          {
            q: 'Quelles interfaces le serveur local propose-t-il ?',
            a: 'La documentation cite des points de terminaison compatibles OpenAI sous `/v1`, un point compatible Anthropic `/v1/messages` et des points propres à llama.cpp sur le port 9931 ; une clé d’API n’est requise que si vous lancez le serveur avec une.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Llama (llama.app) est pour les utilisateurs de Mac et de Windows 11 un moyen gratuit, sous licence MIT, d’exécuter des modèles ouverts via llama.cpp sans terminal, avec des recommandations pour leur matériel et une API locale pour d’autres applications. En revanche, les deux applications sont des versions 0.x qui évoluent vite, il n’existe pas d’application Linux et PromptQuorum n’a testé aucune des deux. Elle convient aux débutants et aux développeurs qui veulent llama.cpp derrière une petite interface ; ceux qui veulent un explorateur de modèles plus complet peuvent comparer [LM Studio](/fr/power-local-llm/lm-studio-review) ou [Jan](/fr/power-local-llm/jan-review), et ceux qui préfèrent la ligne de commande [Ollama](/fr/power-local-llm/ollama-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[llama.app](https://llama.app/) : page d’accueil, pages de téléchargement et documentation, vérifiées le 24 octobre 2026.',
          '[Llama-macOS sur GitHub](https://github.com/ggml-org/Llama-macOS) : README et versions (0.45.0, 18 octobre 2026).',
          '[Llama-Windows sur GitHub](https://github.com/ggml-org/Llama-Windows) : README et versions (v0.13.0, 20 octobre 2026).',
          '[Introducing Llama Windows](https://huggingface.co/blog/huggingface/llama-windows) : annonce de Hugging Face du 13 octobre 2026.',
          '[Cask Homebrew llama-app](https://formulae.brew.sh/cask/llama-app) : exigences macOS et architecture de l’application Mac.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[llama.cpp expliqué](/fr/power-local-llm/llama-cpp-explained) : le moteur derrière l’application.',
          '[Test d’Ollama](/fr/power-local-llm/ollama-review) : le runtime orienté ligne de commande.',
          '[Test de LM Studio](/fr/power-local-llm/lm-studio-review) : une application de bureau fermée avec explorateur de modèles.',
          '[Test de Jan](/fr/power-local-llm/jan-review) : une application de chat de bureau open source.',
          '[Moteurs d’inférence, runtimes et passerelles locaux comparés](/fr/power-local-llm/local-llm-run-serve-compared) : la comparaison de la catégorie.',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/llama-app-review-hero-ja.webp',
    title: 'Llamaアプリのレビュー：MacとWindows向けllama.cppデスクトップアプリ',
    seoTitle: 'Llamaアプリのレビュー：llama.cppデスクトップ版',
    intro: 'Llama（llama.app）は、llama.cppチームとHugging Faceが開発した、MITライセンスの無料アプリです。Macではメニューバー、Windows 11ではシステムトレイに常駐します。llama.cppのインストールと管理を行い、お使いのマシンに合うモデルを提案し、OpenAI互換のローカルサーバーを起動します。どちらも登場したばかりの0.x版のため、本レビューはllama.app、2つのGitHubリポジトリ、Hugging Faceの発表の内容に限定しています（2026年10月24日確認）。',
    metaDescription: 'Llamaアプリのレビュー：llama.cppチームとHugging Faceによる無料のオープンソースアプリ。MacとWindows 11対応、モデル提案、ローカルAPI、データの扱いを解説。',
    twitterDescription: 'Llamaアプリのレビュー：MacとWindows 11向けの無料llama.cppデスクトップアプリ。導入手順、OpenAI互換ローカルAPI、データの流れ、未確認事項。',
    audience: 'llama.cppチームのデスクトップアプリを試すか検討しているMac・Windows 11ユーザーと開発者。必要な環境、費用、端末内に残るデータ、情報源が確認していない点を知りたい方向けです。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Llamaアプリ レビュー',
    targetKeywords: [
      'llamaアプリ レビュー',
      'llama.app',
      'llama.cpp デスクトップアプリ',
      'mac ローカルllm',
      'windows ローカルllm',
      'ローカル openai互換 api',
    ],
    current_hardware_mentioned: ['Apple silicon Mac', 'Windows 11 PC'],
    leadAnswerBlock: '**Llama（llama.app）は、llama.cppを通じてオープンモデルを自分のコンピューター上で動かす、MacおよびWindows 11向けの小さなアプリです。ワンクリックのモデル導入、ブラウザ上のチャット、`localhost:9931`のローカルAPIを備えています。** 無料でオープンソースです。PromptQuorumはインストールも動作テストも行っておらず、本稿の記述はすべてllama.app、プロジェクトのGitHubリポジトリ、Hugging Faceの発表に基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'Llamaはllama.cppと同じものですか？',
        answer: 'いいえ。llama.cppはオープンソースのエンジンで、Llama（llama.app）はそのエンジンを導入し、モデルごとの設定を選び、ローカルサーバーを起動するデスクトップアプリです。どちらも同じチームによるもので、プロジェクトによれば、llama.cppで使っているモデルはアプリに自動で表示されます。',
        bullets: [
          'Macではメニューバーアプリ、Windows 11ではトレイアプリで、通常のウィンドウはありません。',
          'チャットはメニューからブラウザで開き、他のアプリはOpenAI互換APIで接続します。',
          'モデルはHugging Faceキャッシュに1回だけ保存され、llama.cppと共有されます。',
          'Linuxにはアプリではなく、コマンドラインツールllamaが提供されます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '簡単な答え',
        anchor: 'quick-answer',
      },
      {
        label: 'Llamaとは',
        anchor: 'what-is-llama-app',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: '動作環境',
        anchor: 'requirements',
      },
      {
        label: '使い始め方',
        anchor: 'getting-started',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'データの流れとネットワーク利用',
        anchor: 'privacy',
      },
      {
        label: '向いている人',
        anchor: 'who-should-use',
      },
      {
        label: '確認できなかったこと',
        anchor: 'who-should-not-use',
      },
      {
        label: '競合と代替',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '総評',
        anchor: 'verdict',
      },
      {
        label: '情報源',
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
            text: 'Llamaは、llama.cppチームとHugging Faceによる、MacとWindows 11向けの無料オープンソースアプリで、オープンモデルをローカルで動かし、他のアプリに提供します。',
          },
          {
            type: 'plain-terms',
            text: '通常のアプリと同様にインストールし、メニューから推奨モデルを選べば、ブラウザでチャットしたり、エディタやスクリプトをローカルAPIにつないだりできます。',
          },
        ],
        items: [
          'メンテナンス：リポジトリの直近の更新は2026年10月22日のため、放置プロジェクトの警告は該当しません。',
          '費用：MITライセンスで無料、アカウント不要。Hugging Faceへのサインインは任意で、アクセス制限付きモデルにのみ必要です。',
          '対応環境：macOS 15以降のApple siliconのMac、およびx64またはARM64のWindows 11。',
          'モデル：推奨はメモリ量に応じて変わり、サイトはMacのメモリ16 GB以上でGemma 4、24 GB以上でGPT-OSS、32 GB以上でQwen 3.8を勧めています。',
          '成熟度：どちらも0.x版で、Mac版は9月2日から10月18日までに4回リリースされました。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、llama.app、2つのGitHubリポジトリ、Homebrew caskのデータ、Hugging Faceの発表に基づき、2026年10月24日に確認しました。PromptQuorumはアプリのインストール、テスト、ベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-llama-app',
        title: 'Llamaとは',
        content: [
          '**Llamaは、Macのメニューバー、Windowsのシステムトレイに常駐し、オープンモデルをダウンロードして、お使いのマシン向けに設定し、ローカルで提供するアプリです。** メニューの「Open chat」でブラウザからモデルと会話するか、コーディングエージェント、エディタ、自作コードをローカルのOpenAI互換APIにつなぎます。ドキュメントでは、llama.cppの上に作られたミニマルなデスクトップアプリと説明されています。',
          'PromptQuorumが別途扱う[llama.cpp](/ja/power-local-llm/llama-cpp-explained)エンジン自体ではなく、Metaの言語モデル群Llamaとも別物です。Windows版はMac版をWinUI 3に移植したもので、Hugging Faceが2026年10月13日に発表し、Windows on Armにネイティブ対応しています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: ['**LlamaはMacとWindows 11では通常のダウンロードで入手でき、Linuxにはコマンドラインツールのみが提供されます。**'],
        columns: ['項目', '詳細'],
        rows: [
          {
            '項目': 'Mac',
            '詳細': '[Llama.dmg](https://llama.app/download/mac)：アプリケーションにドラッグ',
          },
          {
            '項目': 'Mac（Homebrew）',
            '詳細': '`brew install --cask llama-app`',
          },
          {
            '項目': 'Windows 11',
            '詳細': 'x64・ARM64向け[.msixbundleインストーラー](https://llama.app/download/windows)',
          },
          {
            '項目': 'Linux',
            '詳細': '[llama CLIのインストールスクリプト](https://llama.app/install.sh)（アプリなし）',
          },
          {
            '項目': '価格',
            '詳細': '無料、MITライセンス',
          },
          {
            '項目': '公式サイト',
            '詳細': '[llama.app](https://llama.app/)',
          },
          {
            '項目': 'ソースコード',
            '詳細': '[Llama-macOS](https://github.com/ggml-org/Llama-macOS)と[Llama-Windows](https://github.com/ggml-org/Llama-Windows)',
          },
          {
            '項目': 'プライバシーポリシー',
            '詳細': 'llama.appに専用ページなし（2026年10月24日確認）',
          },
        ],
        note: '確認したバージョン：Mac 0.45.0 / Windows 0.13.0。[Mac](https://github.com/ggml-org/Llama-macOS/releases)と[Windows](https://github.com/ggml-org/Llama-Windows/releases)のリリースページによると、それぞれ2026年10月18日と20日の公開で、リポジトリの直近の更新は10月22日です。Windows 0.13.0のリリースノートには、リリースがMicrosoft Storeに自動提出されるようになり、認証完了後にストアページが公開されるとありますが、PromptQuorumは公開中のストアページを確認できませんでした。サイトのLinux用コマンドは、ダウンロードしたスクリプトをそのままシェルに渡します。',
      },
      requirements: {
        id: 'requirements',
        title: '動作環境',
        content: [
          '**Llamaには、macOS 15以降のApple silicon搭載MacまたはWindows 11 PCと、選んだモデルに必要なディスク容量・メモリが要ります。**',
        ],
        columns: ['項目', '情報源の記載'],
        rows: [
          {
            '項目': 'Mac',
            '情報源の記載': 'Apple silicon、macOS 15以降（Homebrew cask）',
          },
          {
            '項目': 'Windows',
            '情報源の記載': 'Windows 11、x64またはARM64',
          },
          {
            '項目': 'アプリのサイズ',
            '情報源の記載': 'Macは導入後4 MB、Windowsは約86 MB',
          },
          {
            '項目': 'モデルのサイズ',
            '情報源の記載': '4.59 GB（gemma-4 E4B）〜19.0 GB（Qwen3.8 27B）',
          },
          {
            '項目': 'メモリの目安（Mac）',
            '情報源の記載': '16 GB以上：Gemma 4、24 GB以上：GPT-OSS、32 GB以上：Qwen 3.8',
          },
        ],
        note: 'サイトのメモリの目安はMacのみで、WindowsのメモリやGPUの要件は公開されていません。Windows 0.13.0では、お使いのマシンのメモリから計算した「収まるか」の表示が加わりました。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '使い始め方',
        content: ['**手順はllama.appとREADMEに沿ったもので、PromptQuorumは実行していません。**'],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: 'Llama.dmgを開いてLlamaをアプリケーションにドラッグするか、Windows 11で.msixbundleを開いてインストールをクリックします。',
          },
          {
            title: 'メニューバーまたはトレイで探す',
            whyItMatters: 'Llamaにはウィンドウがありません。Macのメニューバー、またはWindowsのシステムトレイ（非表示アイコンは^の矢印の奥）にあるアイコンをクリックします。',
          },
          {
            title: 'モデルを選ぶ',
            whyItMatters: 'マシンに合った推奨モデルから選ぶか、Hugging Faceのカタログを閲覧し、Llamaにインストールさせます。',
          },
          {
            title: 'チャットを開く',
            whyItMatters: 'メニューの「Open chat」をクリックすると、ブラウザでモデルと会話できます。',
          },
          {
            title: '他のアプリをつなぐ',
            whyItMatters: 'OpenAI SDK、エディタ、コーディングエージェントを`http://localhost:9931/v1`に向けます。サイトによれば、APIキーも従量課金も不要です。',
          },
          {
            title: '必要なら設定を調整する',
            whyItMatters: 'Macでは、上書きしたい設定を`~/.config/llama/models.user.ini`に書くと、アプリが生成する設定に統合されます。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: ['**以下の項目はすべて、llama.app、README、リリースノートに基づきます。**'],
        items: [
          '**自動設定。** Llamaはモデルごとに量子化、コンテキストサイズ、画像入力、投機的デコードを設定し、llama.cppの設定はすべてテキストファイルで編集できます。',
          '**必要時のロード。** サイトによると、モデルは要求時にロードされ、5分間使われないとアンロードされます。',
          '**共有ストレージ。** モデルはllama.cppと共有するHugging Faceキャッシュに置かれ、llama.cpp経由で導入済みのモデルもアプリに表示されます。',
          '**API。** OpenAI・Anthropic互換のエンドポイントで、ストリーミング、ツール呼び出し、構造化出力、画像入力に対応し、Tailscale経由で他のデバイスからリモートアクセスもできます。',
          '**最近の追加。** Mac 0.45.0では`/v1/embeddings`による埋め込みモデルが加わりました。WindowsにはAlt+Spaceのチャットオーバーレイがあり、0.13.0では収まる可否の表示、独自のモデルフォルダー、Share to Llamaが加わりました。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとネットワーク利用',
        content: [
          '**メンテナーによれば、プロンプトと推論は端末内にとどまります。Mac版READMEは「100%ローカル」と述べ、Windows版READMEはテレメトリー、イベント、分析、インストールIDを送信しないと述べています。**',
          'Windows版READMEは外向き通信として、モデルのダウンロード、新リリースの確認、ローカルサーバーの呼び出しを挙げ、いずれもアプリのバージョン、Windowsのビルド、プロセッサーのアーキテクチャを含むUser-Agentのみを伴うとしています。Mac版READMEはネットワーク利用を列挙しておらず、Homebrew caskはこのアプリを自己更新型としています。Mac 0.45.0にはアクセス制限付きモデル用の任意のHugging Faceサインインが加わり、サイトはTailscale経由のリモートアクセスも説明しています。これは利用者自身が有効にするネットワーク経路です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらはメンテナー自身の記述であり、PromptQuorumはアプリの通信を監査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**ローカルモデルが初めてのMac・Windows 11ユーザー**で、マシンに合った設定を自動で選ぶ無料アプリが欲しい方。',
          '**OpenAI互換のローカルエンドポイントが欲しい開発者**で、エディタ、エージェント、スクリプト用にllama.cppを手動管理したくない方。',
          '**llama.cppユーザー**で、モデルキャッシュをメニューバーやトレイのフロントエンドと共有したい方。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        items: [
          '**実際の品質。** PromptQuorumはどちらのアプリも実行していないため、速度、メモリ使用量、モデル品質は評価していません。',
          '**セキュリティとネットワークの挙動。** アプリの通信は監査されておらず、確認した情報源にはMac版の署名や公証の説明がありません。',
          '**Windowsの要件。** 情報源はWindows 11としか述べておらず、メモリ、GPU、ドライバーの下限は不明です。',
          '**今後の計画。** どちらも変化の速い0.x版で、情報源にロードマップはありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替',
        columns: ['アプリ', '対応OS', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Ollama](/ja/power-local-llm/ollama-review)',
            '対応OS': 'Mac、Windows、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'コマンドライン中心で、独自のモデルライブラリを持つ',
          },
          {
            'アプリ': '[LM Studio](/ja/power-local-llm/lm-studio-review)',
            '対応OS': 'Mac、Windows、Linux',
            '価格／ライセンス': '無料／プロプライエタリ',
            '主な違い': 'クローズドソースのデスクトップアプリ。モデルブラウザ内蔵',
          },
          {
            'アプリ': '[Jan](/ja/power-local-llm/jan-review)',
            '対応OS': 'Mac、Windows、Linux',
            '価格／ライセンス': '無料／Apache 2.0（派生）',
            '主な違い': 'オープンソースのデスクトップチャットアプリ。モデルライブラリあり',
          },
          {
            'アプリ': '[GPT4All](/ja/power-local-llm/gpt4all-review)',
            '対応OS': 'Mac、Windows、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'モデルをローカルで動かすデスクトップチャットアプリ',
          },
        ],
        note: '競合の情報は変わりやすいため、価格、ライセンス、対応OSは各アプリのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Linux用のアプリはありますか？',
            a: 'llama.appによれば、ありません。Linuxにはインストールスクリプトでコマンドラインツールllamaが提供され、ドキュメントにはパッケージマネージャー、ビルド済みバイナリ、Docker、ソースからのビルドも載っています。',
          },
          {
            q: 'すでに持っているモデルは使えますか？',
            a: 'Mac版READMEによれば、llama.cpp経由で導入したモデルはアプリに表示されます。Windows版も同じHugging Faceキャッシュを共有し、Windows 0.13.0では独自のモデルフォルダーも追加できます。Ollamaなど他のツールのモデルが認識されるかは、情報源に記載がありません。',
          },
          {
            q: 'ローカルサーバーはどんなインターフェースを持ちますか？',
            a: 'ドキュメントには、`/v1`配下のOpenAI互換エンドポイント、Anthropic互換の`/v1/messages`、ポート9931のllama.cpp独自エンドポイントが載っています。APIキーが必要になるのは、キー付きでサーバーを起動した場合のみです。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Llama（llama.app）は、MacとWindows 11のユーザーが、ターミナルなしでllama.cpp経由のオープンモデルを動かせる、無料でMITライセンスの手段です。ハードウェアに合わせた推奨と、他のアプリ向けのローカルAPIも備えます。一方、どちらも変化の速い0.x版で、Linux用アプリはなく、PromptQuorumはどちらも試していません。llama.cppを小さなフロントエンドで使いたい初心者や開発者に向いており、より充実したモデルブラウザなら[LM Studio](/ja/power-local-llm/lm-studio-review)や[Jan](/ja/power-local-llm/jan-review)、コマンドライン派なら[Ollama](/ja/power-local-llm/ollama-review)と比べるとよいでしょう。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[llama.app](https://llama.app/)：トップページ、ダウンロードページ、ドキュメント（2026年10月24日確認）。',
          '[GitHubのLlama-macOS](https://github.com/ggml-org/Llama-macOS)：READMEとリリース（0.45.0、2026年10月18日）。',
          '[GitHubのLlama-Windows](https://github.com/ggml-org/Llama-Windows)：READMEとリリース（v0.13.0、2026年10月20日）。',
          '[Introducing Llama Windows](https://huggingface.co/blog/huggingface/llama-windows)：2026年10月13日のHugging Faceの発表。',
          '[Homebrew cask llama-app](https://formulae.brew.sh/cask/llama-app)：Mac版のmacOSとアーキテクチャの要件。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[llama.cppとは](/ja/power-local-llm/llama-cpp-explained)：アプリの土台となるエンジン。',
          '[Ollamaレビュー](/ja/power-local-llm/ollama-review)：コマンドライン中心のランタイム。',
          '[LM Studioレビュー](/ja/power-local-llm/lm-studio-review)：モデルブラウザを備えたクローズドソースのデスクトップアプリ。',
          '[Janレビュー](/ja/power-local-llm/jan-review)：オープンソースのデスクトップチャットアプリ。',
          '[ローカル推論エンジン・ランタイム・ゲートウェイ比較](/ja/power-local-llm/local-llm-run-serve-compared)：カテゴリー比較。',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/llama-app-review-hero-pt.webp',
    title: 'Análise do app Llama: aplicativo de desktop do llama.cpp para Mac e Windows',
    seoTitle: 'Análise do Llama: app do llama.cpp para Mac e Windows',
    intro: 'O Llama (llama.app) é um aplicativo gratuito com licença MIT, na barra de menus no Mac e na bandeja do sistema no Windows 11, criado pela equipe do llama.cpp e pela Hugging Face. Ele instala e gerencia o llama.cpp, recomenda modelos que cabem no seu computador e inicia um servidor local compatível com a OpenAI. Os dois apps são versões 0.x recentes, então esta análise se limita ao que dizem o llama.app, os dois repositórios do GitHub e o anúncio da Hugging Face, verificados em 24 de outubro de 2026.',
    metaDescription: 'Análise do app Llama: aplicativo gratuito e de código aberto da equipe do llama.cpp e da Hugging Face para Mac e Windows 11. Modelos, API local, dados.',
    twitterDescription: 'Análise do app Llama: o app de desktop gratuito do llama.cpp para Mac e Windows 11. Instalação, API local compatível com a OpenAI, fluxo de dados e limites.',
    audience: 'Usuários de Mac e Windows 11 e desenvolvedores que decidem se vão testar o app de desktop da equipe do llama.cpp e precisam saber o que ele exige, quanto custa, o que fica no computador e o que as fontes não confirmam.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise app Llama',
    targetKeywords: [
      'análise app llama',
      'llama.app',
      'app de desktop llama.cpp',
      'llm local no mac',
      'llm local no windows',
      'api local compatível com openai',
    ],
    current_hardware_mentioned: ['Apple silicon Mac', 'Windows 11 PC'],
    leadAnswerBlock: '**O Llama (llama.app) é um app pequeno para Mac e Windows 11 que executa modelos abertos no seu próprio computador por meio do llama.cpp, com instalação de modelos em um clique, chat integrado no navegador e uma API local em `localhost:9931`.** Ele é gratuito e de código aberto. A PromptQuorum não o instalou nem o testou; cada afirmação vem do llama.app, dos repositórios do projeto no GitHub e do anúncio da Hugging Face.',
    quickAnswerTop: {
      pt: {
        question: 'O Llama é a mesma coisa que o llama.cpp?',
        answer: 'Não. O llama.cpp é o motor de código aberto; o Llama (llama.app) é o app de desktop que instala esse motor, escolhe as configurações de cada modelo e inicia o servidor local para você. Os dois vêm da mesma equipe, e os modelos que você já usa com o llama.cpp aparecem automaticamente no app, segundo o projeto.',
        bullets: [
          'No Mac é um app da barra de menus e no Windows 11 um app da bandeja do sistema; nenhum dos dois tem uma janela comum.',
          'O chat abre no navegador a partir do menu, e outros apps se conectam pela API compatível com a OpenAI.',
          'Os modelos ficam guardados uma única vez no cache da Hugging Face, compartilhado com o llama.cpp.',
          'O Linux recebe a ferramenta de linha de comando llama, não o app.',
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
        label: 'O que é o Llama?',
        anchor: 'what-is-llama-app',
      },
      {
        label: 'Como obter',
        anchor: 'get-it',
      },
      {
        label: 'Requisitos',
        anchor: 'requirements',
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
        label: 'Fluxo de dados e uso de rede',
        anchor: 'privacy',
      },
      {
        label: 'Para quem serve',
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
            text: 'O Llama é um app gratuito e de código aberto para Mac e Windows 11, da equipe do llama.cpp e da Hugging Face, que executa modelos abertos localmente e os oferece aos seus outros apps.',
          },
          {
            type: 'plain-terms',
            text: 'Você o instala como qualquer app, escolhe um modelo recomendado no menu e depois conversa no navegador ou aponta editores e scripts para a API local.',
          },
        ],
        items: [
          'Manutenção: a atividade mais recente dos repositórios foi em 22 de outubro de 2026, então não se aplica nenhum aviso de projeto parado.',
          'Custo: gratuito sob a licença MIT e sem conta; entrar na Hugging Face é opcional e só necessário para modelos com acesso restrito.',
          'Plataformas: Macs com Apple silicon e macOS 15 ou superior, e Windows 11 em x64 ou ARM64.',
          'Modelos: as recomendações seguem a sua memória; o site recomenda o Gemma 4 a partir de 16 GB de memória no Mac, o GPT-OSS a partir de 24 GB e o Qwen 3.8 a partir de 32 GB.',
          'Maturidade: os dois apps são versões 0.x, e o app para Mac lançou quatro versões entre 2 de setembro e 18 de outubro.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no llama.app, nos dois repositórios do GitHub, nos dados do cask do Homebrew e no anúncio da Hugging Face, verificados em 24 de outubro de 2026. A PromptQuorum não instalou, testou nem mediu o app.',
          },
        ],
      },
      overview: {
        id: 'what-is-llama-app',
        title: 'O que é o Llama?',
        content: [
          '**O Llama é um app da barra de menus no Mac e da bandeja do sistema no Windows que baixa modelos abertos, configura-os para o seu computador e os serve localmente.** Clique em “Open chat” no menu para conversar com um modelo no navegador, ou aponte agentes de código, editores e o seu próprio código para a API local compatível com a OpenAI. A documentação o descreve como um app de desktop minimalista construído sobre o llama.cpp.',
          'Ele não é o motor [llama.cpp](/pt/power-local-llm/llama-cpp-explained) em si, que a PromptQuorum trata separadamente, nem a família de modelos Llama da Meta. O app do Windows é uma versão em WinUI 3 do app do Mac, anunciada pela Hugging Face em 13 de outubro de 2026, com suporte nativo ao Windows on Arm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Llama é um download comum no Mac e no Windows 11; usuários de Linux recebem apenas a ferramenta de linha de comando.**',
        ],
        columns: ['Item', 'Detalhes'],
        rows: [
          {
            Item: 'Mac',
            Detalhes: '[Llama.dmg](https://llama.app/download/mac): arraste para Aplicativos',
          },
          {
            Item: 'Mac (Homebrew)',
            Detalhes: '`brew install --cask llama-app`',
          },
          {
            Item: 'Windows 11',
            Detalhes: '[Instalador .msixbundle](https://llama.app/download/windows) para x64 e ARM64',
          },
          {
            Item: 'Linux',
            Detalhes: '[Script de instalação da CLI llama](https://llama.app/install.sh), sem app',
          },
          {
            Item: 'Preço',
            Detalhes: 'Gratuito, licença MIT',
          },
          {
            Item: 'Site',
            Detalhes: '[llama.app](https://llama.app/)',
          },
          {
            Item: 'Código-fonte',
            Detalhes: '[Llama-macOS](https://github.com/ggml-org/Llama-macOS) e [Llama-Windows](https://github.com/ggml-org/Llama-Windows)',
          },
          {
            Item: 'Política de privacidade',
            Detalhes: 'Nenhuma página publicada no llama.app (verificado em 24 de outubro de 2026)',
          },
        ],
        note: 'Versões analisadas: Mac 0.45.0 / Windows 0.13.0, lançadas em 18 e 20 de outubro de 2026 segundo as páginas de versões do [Mac](https://github.com/ggml-org/Llama-macOS/releases) e do [Windows](https://github.com/ggml-org/Llama-Windows/releases); a atividade mais recente dos repositórios foi em 22 de outubro de 2026. As notas do Windows 0.13.0 dizem que as versões agora são enviadas à Microsoft Store e que a página entra no ar após a certificação, mas a PromptQuorum não encontrou nenhuma página ativa na loja. O comando para Linux no site passa um script baixado direto para o shell.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**O Llama exige um Mac com Apple silicon e macOS 15 ou superior, ou um PC com Windows 11, além de espaço em disco e memória para o modelo escolhido.**',
        ],
        columns: ['Item', 'O que as fontes dizem'],
        rows: [
          {
            Item: 'Mac',
            'O que as fontes dizem': 'Apple silicon, macOS 15 ou superior (cask do Homebrew)',
          },
          {
            Item: 'Windows',
            'O que as fontes dizem': 'Windows 11, x64 ou ARM64',
          },
          {
            Item: 'Tamanho do app',
            'O que as fontes dizem': 'Mac 4 MB instalado; Windows cerca de 86 MB',
          },
          {
            Item: 'Tamanho dos modelos',
            'O que as fontes dizem': '4.59 GB (gemma-4 E4B) a 19.0 GB (Qwen3.8 27B)',
          },
          {
            Item: 'Dica de memória (Mac)',
            'O que as fontes dizem': '16 GB+: Gemma 4; 24 GB+: GPT-OSS; 32 GB+: Qwen 3.8',
          },
        ],
        note: 'O site dá orientação de memória só para Macs e não publica requisito de memória nem de GPU para Windows; o Windows 0.13.0 adiciona indicadores de “cabe?” calculados com a memória do seu computador.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem o llama.app e os READMEs; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Instalar o app',
            whyItMatters: 'Abra o Llama.dmg e arraste o Llama para Aplicativos, ou abra o arquivo .msixbundle no Windows 11 e clique em Instalar.',
          },
          {
            title: 'Encontrá-lo na barra de menus ou na bandeja',
            whyItMatters: 'O Llama não tem janela; clique no ícone dele na barra de menus do Mac ou na bandeja do Windows, onde os ícones ocultos ficam atrás da seta ^.',
          },
          {
            title: 'Escolher um modelo',
            whyItMatters: 'Escolha um dos modelos recomendados para o seu computador, ou navegue pelo catálogo da Hugging Face, e deixe o Llama instalá-lo.',
          },
          {
            title: 'Abrir o chat',
            whyItMatters: 'Clique em “Open chat” no menu para conversar com o modelo no navegador.',
          },
          {
            title: 'Conectar outros apps',
            whyItMatters: 'Aponte um SDK da OpenAI, um editor ou um agente de código para `http://localhost:9931/v1`; segundo o site, não há chave de API nem cobrança por uso.',
          },
          {
            title: 'Ajustar as configurações, se precisar',
            whyItMatters: 'No Mac, coloque suas substituições em `~/.config/llama/models.user.ini`, que o app mescla com a configuração que ele gera.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do llama.app, dos READMEs ou das notas de versão.**',
        ],
        items: [
          '**Configuração automática.** O Llama define quantização, tamanho de contexto, entrada de imagens e decodificação especulativa por modelo, e todas as configurações do llama.cpp continuam editáveis em um arquivo de texto.',
          '**Carregamento sob demanda.** Os modelos são carregados quando solicitados e descarregados após cinco minutos de inatividade, segundo o site.',
          '**Armazenamento compartilhado.** Os modelos ficam no cache da Hugging Face compartilhado com o llama.cpp, e os modelos já instalados pelo llama.cpp aparecem no app.',
          '**API.** Endpoints compatíveis com OpenAI e Anthropic, com streaming, chamada de ferramentas, saída estruturada e visão, além de acesso remoto de outros dispositivos via Tailscale.',
          '**Novidades recentes.** O Mac 0.45.0 adicionou modelos de embeddings por `/v1/embeddings`; o Windows oferece uma sobreposição de chat com Alt+Espaço, e a versão 0.13.0 acrescenta indicadores de adequação, suas próprias pastas de modelos e “Share to Llama”.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e uso de rede',
        content: [
          '**Os mantenedores dizem que prompts e inferência ficam no seu computador: o README do Mac chama o app de “100% local”, e o README do Windows afirma que ele não envia telemetria, eventos, análises nem identificador de instalação.**',
          'O README do Windows lista o tráfego de saída: downloads de modelos, verificações de novas versões e chamadas ao servidor local, cada uma levando apenas um User-Agent com a versão do app, a compilação do Windows e a arquitetura do processador. O README do Mac não lista o uso de rede, e o cask do Homebrew marca esse app como autoatualizável. O Mac 0.45.0 adiciona um login opcional na Hugging Face para modelos com acesso restrito, e o site descreve o acesso remoto via Tailscale, um caminho de rede que você mesmo ativa.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estas são declarações dos mantenedores; a PromptQuorum não auditou o tráfego de rede dos apps.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Usuários de Mac e Windows 11 novos em modelos locais** que querem um app gratuito que escolha configurações sensatas para o computador deles.',
          '**Desenvolvedores que querem um endpoint local compatível com a OpenAI** para editores, agentes e scripts, sem gerenciar o llama.cpp à mão.',
          '**Usuários do llama.cpp** que querem compartilhar o cache de modelos com um front-end de barra de menus ou bandeja.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade no uso.** A PromptQuorum não executou nenhum dos dois apps, então velocidade, uso de memória e qualidade dos modelos não são avaliados.',
          '**Segurança e comportamento de rede.** O tráfego dos apps não foi auditado, e as fontes analisadas não descrevem assinatura nem notarização do app para Mac.',
          '**Requisitos do Windows.** As fontes citam o Windows 11, mas nenhum mínimo de memória, GPU ou driver.',
          '**Roteiro.** Os dois apps são versões 0.x que mudam rápido, e as fontes não indicam nenhum plano.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Ollama](/pt/power-local-llm/ollama-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Ambiente voltado à linha de comando, com biblioteca de modelos própria',
          },
          {
            App: '[LM Studio](/pt/power-local-llm/lm-studio-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço / licença': 'Grátis / proprietária',
            'Diferença principal': 'App de desktop fechado com navegador de modelos integrado',
          },
          {
            App: '[Jan](/pt/power-local-llm/jan-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço / licença': 'Grátis / Apache 2.0 (variante)',
            'Diferença principal': 'App de chat de desktop de código aberto com biblioteca de modelos',
          },
          {
            App: '[GPT4All](/pt/power-local-llm/gpt4all-review)',
            Plataformas: 'Mac, Windows, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'App de chat de desktop que executa modelos localmente',
          },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada um.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Existe um app para Linux?',
            a: 'Não, segundo o llama.app: usuários de Linux recebem a ferramenta de linha de comando llama por um script de instalação, e a documentação também cita gerenciadores de pacotes, binários pré-compilados, Docker e compilação a partir do código-fonte.',
          },
          {
            q: 'Ele consegue usar modelos que eu já tenho?',
            a: 'O README do Mac diz que os modelos instalados pelo llama.cpp aparecem no app, e o app do Windows compartilha o mesmo cache da Hugging Face; o Windows 0.13.0 também permite adicionar suas próprias pastas de modelos. As fontes não dizem se modelos de outras ferramentas, como o Ollama, são reconhecidos.',
          },
          {
            q: 'Que interfaces o servidor local oferece?',
            a: 'A documentação cita endpoints compatíveis com a OpenAI em `/v1`, um endpoint compatível com a Anthropic `/v1/messages` e endpoints próprios do llama.cpp na porta 9931; uma chave de API só é necessária se você iniciar o servidor com uma.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Llama (llama.app) é, para usuários de Mac e Windows 11, uma forma gratuita e com licença MIT de executar modelos abertos pelo llama.cpp sem terminal, com recomendações para o hardware e uma API local para outros apps. Em contrapartida, os dois apps são versões 0.x que mudam rápido, não há app para Linux e a PromptQuorum não testou nenhum dos dois. Ele serve a iniciantes e desenvolvedores que querem o llama.cpp atrás de um front-end pequeno; quem quer um navegador de modelos mais completo pode comparar o [LM Studio](/pt/power-local-llm/lm-studio-review) ou o [Jan](/pt/power-local-llm/jan-review), e quem prefere a linha de comando, o [Ollama](/pt/power-local-llm/ollama-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[llama.app](https://llama.app/): página inicial, páginas de download e documentação, verificadas em 24 de outubro de 2026.',
          '[Llama-macOS no GitHub](https://github.com/ggml-org/Llama-macOS): README e versões (0.45.0, 18 de outubro de 2026).',
          '[Llama-Windows no GitHub](https://github.com/ggml-org/Llama-Windows): README e versões (v0.13.0, 20 de outubro de 2026).',
          '[Introducing Llama Windows](https://huggingface.co/blog/huggingface/llama-windows): anúncio da Hugging Face de 13 de outubro de 2026.',
          '[Cask do Homebrew llama-app](https://formulae.brew.sh/cask/llama-app): requisitos de macOS e arquitetura do app para Mac.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[llama.cpp explicado](/pt/power-local-llm/llama-cpp-explained): o motor por trás do app.',
          '[Análise do Ollama](/pt/power-local-llm/ollama-review): o ambiente voltado à linha de comando.',
          '[Análise do LM Studio](/pt/power-local-llm/lm-studio-review): um app de desktop fechado com navegador de modelos.',
          '[Análise do Jan](/pt/power-local-llm/jan-review): um app de chat de desktop de código aberto.',
          '[Motores de inferência, runtimes e gateways locais comparados](/pt/power-local-llm/local-llm-run-serve-compared): a comparação da categoria.',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/llama-app-review-hero-ar.webp',
    title: 'مراجعة تطبيق Llama: تطبيق سطح المكتب لـ llama.cpp على Mac وWindows',
    seoTitle: 'مراجعة Llama: تطبيق llama.cpp لنظامي Mac وWindows',
    intro: 'Llama (llama.app) تطبيق مجاني برخصة MIT يعمل من شريط القوائم على Mac ومن علبة النظام على Windows 11، طوّره فريق llama.cpp مع Hugging Face. يثبّت llama.cpp ويديره، ويوصي بنماذج تناسب جهازك، ويشغّل خادمًا محليًا متوافقًا مع OpenAI. التطبيقان إصداران حديثان من سلسلة 0.x، لذا تقتصر هذه المراجعة على ما يقوله llama.app ومستودعا GitHub وإعلان Hugging Face، وقد تحققنا منها في 24 أكتوبر 2026.',
    metaDescription: 'مراجعة تطبيق Llama: تطبيق مجاني ومفتوح المصدر من فريق llama.cpp وHugging Face لنظامي Mac وWindows 11، مع اقتراح النماذج وواجهة API محلية وتدفق البيانات.',
    twitterDescription: 'مراجعة تطبيق Llama: تطبيق llama.cpp المجاني لنظامي Mac وWindows 11. الإعداد وواجهة API محلية متوافقة مع OpenAI وتدفق البيانات وما لم يتأكد.',
    audience: 'مستخدمو Mac وWindows 11 والمطورون الذين يقررون تجربة تطبيق سطح المكتب من فريق llama.cpp ويحتاجون إلى معرفة متطلباته وتكلفته وما يبقى على الجهاز وما لا تؤكده المصادر.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة تطبيق Llama',
    targetKeywords: [
      'مراجعة تطبيق llama',
      'llama.app',
      'تطبيق llama.cpp لسطح المكتب',
      'نموذج لغوي محلي على mac',
      'نموذج لغوي محلي على windows',
      'واجهة api محلية متوافقة مع openai',
    ],
    current_hardware_mentioned: ['Apple silicon Mac', 'Windows 11 PC'],
    leadAnswerBlock: '**Llama (llama.app) تطبيق صغير لنظامي Mac وWindows 11 يشغّل النماذج المفتوحة على حاسوبك عبر llama.cpp، مع تثبيت النماذج بنقرة واحدة ودردشة مدمجة في المتصفح وواجهة API محلية على `localhost:9931`.** وهو مجاني ومفتوح المصدر. لم تثبّته PromptQuorum ولم تختبره؛ وكل عبارة هنا مصدرها llama.app ومستودعات المشروع على GitHub وإعلان Hugging Face.',
    quickAnswerTop: {
      ar: {
        question: 'هل Llama هو نفسه llama.cpp؟',
        answer: 'لا. llama.cpp هو المحرك المفتوح المصدر، أما Llama (llama.app) فهو تطبيق سطح المكتب الذي يثبّت هذا المحرك ويختار إعدادات كل نموذج ويشغّل الخادم المحلي نيابةً عنك. كلاهما من الفريق نفسه، وتظهر في التطبيق تلقائيًا النماذج التي تستخدمها بالفعل مع llama.cpp، بحسب المشروع.',
        bullets: [
          'هو تطبيق شريط القوائم على Mac وتطبيق علبة النظام على Windows 11، ولا نافذة عادية لأي منهما.',
          'تُفتح الدردشة في المتصفح من القائمة، وتتصل التطبيقات الأخرى عبر واجهة API المتوافقة مع OpenAI.',
          'تُخزَّن النماذج مرة واحدة في ذاكرة Hugging Face المؤقتة المشتركة مع llama.cpp.',
          'يحصل Linux على أداة سطر الأوامر llama لا على التطبيق.',
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
        label: 'ما هو Llama؟',
        anchor: 'what-is-llama-app',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'المتطلبات',
        anchor: 'requirements',
      },
      {
        label: 'كيف تبدأ',
        anchor: 'getting-started',
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'تدفق البيانات واستخدام الشبكة',
        anchor: 'privacy',
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
            text: 'Llama تطبيق مجاني ومفتوح المصدر لنظامي Mac وWindows 11 من فريق llama.cpp وHugging Face، يشغّل النماذج المفتوحة محليًا ويوفّرها لتطبيقاتك الأخرى.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته كأي تطبيق، وتختار نموذجًا موصى به من قائمته، ثم تدردش في المتصفح أو توجّه المحررات والنصوص البرمجية إلى واجهة API المحلية.',
          },
        ],
        items: [
          'الصيانة: كان آخر نشاط في المستودعات بتاريخ 22 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.',
          'التكلفة: مجاني برخصة MIT دون حساب؛ تسجيل الدخول إلى Hugging Face اختياري ولا يلزم إلا للنماذج المقيّدة.',
          'المنصات: أجهزة Mac بمعالجات Apple silicon مع macOS 15 أو أحدث، وWindows 11 بمعمارية x64 أو ARM64.',
          'النماذج: تتبع التوصيات حجم ذاكرتك؛ يوصي الموقع بـ Gemma 4 بدءًا من 16 GB من ذاكرة Mac، وGPT-OSS بدءًا من 24 GB، وQwen 3.8 بدءًا من 32 GB.',
          'النضج: التطبيقان إصداران من سلسلة 0.x، وأصدر تطبيق Mac أربعة إصدارات بين 2 سبتمبر و18 أكتوبر.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى llama.app ومستودعي GitHub وبيانات cask في Homebrew وإعلان Hugging Face، وقد تحققنا منها في 24 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تختبره ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-llama-app',
        title: 'ما هو Llama؟',
        content: [
          '**Llama تطبيق في شريط القوائم على Mac وفي علبة النظام على Windows ينزّل النماذج المفتوحة ويضبطها لجهازك ويقدّمها محليًا.** انقر «Open chat» في القائمة لتتحدث إلى نموذج في المتصفح، أو وجّه وكلاء البرمجة والمحررات وشيفرتك الخاصة إلى واجهة API المحلية المتوافقة مع OpenAI. تصفه الوثائق بأنه تطبيق سطح مكتب بسيط مبني على llama.cpp.',
          'وهو ليس محرك [llama.cpp](/ar/power-local-llm/llama-cpp-explained) نفسه الذي تتناوله PromptQuorum على حدة، وليس عائلة نماذج Llama من Meta. أما تطبيق Windows فهو نسخة WinUI 3 من تطبيق Mac أعلنته Hugging Face في 13 أكتوبر 2026، مع دعم أصلي لـ Windows on Arm.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**Llama تنزيل عادي على Mac وWindows 11؛ أما مستخدمو Linux فيحصلون على أداة سطر الأوامر فقط.**',
        ],
        columns: ['البند', 'التفاصيل'],
        rows: [
          {
            'البند': 'Mac',
            'التفاصيل': '[Llama.dmg](https://llama.app/download/mac): اسحبه إلى مجلد التطبيقات',
          },
          {
            'البند': 'Mac (Homebrew)',
            'التفاصيل': '`brew install --cask llama-app`',
          },
          {
            'البند': 'Windows 11',
            'التفاصيل': '[مثبّت .msixbundle](https://llama.app/download/windows) لمعماريتي x64 وARM64',
          },
          {
            'البند': 'Linux',
            'التفاصيل': '[سكربت تثبيت llama CLI](https://llama.app/install.sh)، بلا تطبيق',
          },
          {
            'البند': 'السعر',
            'التفاصيل': 'مجاني، رخصة MIT',
          },
          {
            'البند': 'الموقع',
            'التفاصيل': '[llama.app](https://llama.app/)',
          },
          {
            'البند': 'الشيفرة المصدرية',
            'التفاصيل': '[Llama-macOS](https://github.com/ggml-org/Llama-macOS) و[Llama-Windows](https://github.com/ggml-org/Llama-Windows)',
          },
          {
            'البند': 'سياسة الخصوصية',
            'التفاصيل': 'لا صفحة منشورة على llama.app (تحققنا في 24 أكتوبر 2026)',
          },
        ],
        note: 'الإصداران المراجَعان: Mac 0.45.0 / Windows 0.13.0، صدرا في 18 و20 أكتوبر 2026 بحسب صفحتي الإصدارات لـ[Mac](https://github.com/ggml-org/Llama-macOS/releases) و[Windows](https://github.com/ggml-org/Llama-Windows/releases)؛ وكان آخر نشاط في المستودعات في 22 أكتوبر 2026. تذكر ملاحظات Windows 0.13.0 أن الإصدارات تُقدَّم الآن تلقائيًا إلى Microsoft Store وأن الصفحة ستُنشر بعد اكتمال الاعتماد، لكن PromptQuorum لم تجد صفحة متجر فعّالة. وأمر Linux على الموقع يمرّر سكربتًا منزَّلًا مباشرة إلى الصدفة.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**يحتاج Llama إلى جهاز Mac بمعالج Apple silicon مع macOS 15 أو أحدث، أو حاسوب Windows 11، إضافةً إلى مساحة قرص وذاكرة للنموذج الذي تختاره.**',
        ],
        columns: ['البند', 'ما تقوله المصادر'],
        rows: [
          {
            'البند': 'Mac',
            'ما تقوله المصادر': 'Apple silicon مع macOS 15 أو أحدث (cask في Homebrew)',
          },
          {
            'البند': 'Windows',
            'ما تقوله المصادر': 'Windows 11 بمعمارية x64 أو ARM64',
          },
          {
            'البند': 'حجم التطبيق',
            'ما تقوله المصادر': 'Mac نحو 4 MB بعد التثبيت؛ Windows نحو 86 MB',
          },
          {
            'البند': 'حجم النماذج',
            'ما تقوله المصادر': 'من 4.59 GB (gemma-4 E4B) إلى 19.0 GB (Qwen3.8 27B)',
          },
          {
            'البند': 'نصيحة الذاكرة (Mac)',
            'ما تقوله المصادر': '16 GB+: Gemma 4؛ 24 GB+: GPT-OSS؛ 32 GB+: Qwen 3.8',
          },
        ],
        note: 'يقدّم الموقع إرشادًا للذاكرة لأجهزة Mac فقط ولا ينشر متطلبات للذاكرة أو GPU على Windows؛ ويضيف Windows 0.13.0 مؤشرات «هل يتسع؟» محسوبة من ذاكرة جهازك.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: ['**تتبع الخطوات llama.app وملفات README؛ ولم تنفّذها PromptQuorum.**'],
        numberedItems: [
          {
            title: 'ثبّت التطبيق',
            whyItMatters: 'افتح Llama.dmg واسحب Llama إلى التطبيقات، أو افتح ملف .msixbundle على Windows 11 وانقر «تثبيت».',
          },
          {
            title: 'اعثر عليه في شريط القوائم أو علبة النظام',
            whyItMatters: 'لا نافذة لـ Llama؛ انقر أيقونته في شريط قوائم Mac أو علبة نظام Windows، حيث تقع الأيقونات المخفية خلف السهم ^.',
          },
          {
            title: 'اختر نموذجًا',
            whyItMatters: 'اختر أحد النماذج الموصى بها لجهازك، أو تصفّح فهرس Hugging Face، واترك Llama يثبّته.',
          },
          {
            title: 'افتح الدردشة',
            whyItMatters: 'انقر «Open chat» في القائمة لتتحدث إلى النموذج في المتصفح.',
          },
          {
            title: 'اربط تطبيقات أخرى',
            whyItMatters: 'وجّه حزمة OpenAI SDK أو محررًا أو وكيل برمجة إلى `http://localhost:9931/v1`؛ ويقول الموقع إنه لا حاجة إلى مفتاح API ولا فواتير استخدام.',
          },
          {
            title: 'عدّل الإعدادات عند الحاجة',
            whyItMatters: 'على Mac ضع تعديلاتك في `~/.config/llama/models.user.ini`، ودمجها التطبيق مع الإعدادات التي يولّدها.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: ['**كل بند أدناه مصدره llama.app أو ملفات README أو ملاحظات الإصدار.**'],
        items: [
          '**إعداد تلقائي.** يضبط Llama التكميم وحجم السياق وإدخال الصور وفك الترميز التخميني لكل نموذج، وتبقى كل إعدادات llama.cpp قابلة للتحرير في ملف نصي.',
          '**تحميل عند الطلب.** تُحمَّل النماذج عند طلبها وتُفرَّغ بعد خمس دقائق من الخمول، بحسب الموقع.',
          '**تخزين مشترك.** تقيم النماذج في ذاكرة Hugging Face المؤقتة المشتركة مع llama.cpp، وتظهر في التطبيق النماذج المثبّتة سلفًا عبر llama.cpp.',
          '**واجهة API.** نقاط نهاية متوافقة مع OpenAI وAnthropic تدعم البث واستدعاء الأدوات والمخرجات المنظَّمة والرؤية، إضافةً إلى وصول عن بُعد من أجهزة أخرى عبر Tailscale.',
          '**إضافات حديثة.** أضاف Mac 0.45.0 نماذج التضمين عبر `/v1/embeddings`؛ ويوفّر Windows نافذة دردشة عائمة بالضغط على Alt+Space، وأضاف إصداره 0.13.0 مؤشرات الملاءمة ومجلدات نماذجك الخاصة وميزة Share to Llama.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات واستخدام الشبكة',
        content: [
          '**يقول المشرفون إن الأوامر والاستدلال يبقيان على جهازك: يصف README الخاص بـ Mac التطبيق بأنه «محلي 100%»، ويقول README الخاص بـ Windows إنه لا يرسل أي قياس عن بُعد ولا أحداثًا ولا تحليلات ولا معرّف تثبيت.**',
          'يسرد README الخاص بـ Windows حركة المرور الصادرة: تنزيلات النماذج وفحوص الإصدارات الجديدة واستدعاءات الخادم المحلي، وتحمل كل منها User-Agent فقط يتضمن إصدار التطبيق ورقم بناء Windows ومعمارية المعالج. أما README الخاص بـ Mac فلا يسرد استخدامه للشبكة، ويصنّف cask في Homebrew ذلك التطبيق على أنه يحدّث نفسه. ويضيف Mac 0.45.0 تسجيل دخول اختياريًا إلى Hugging Face للنماذج المقيّدة، ويصف الموقع وصولًا عن بُعد عبر Tailscale، وهو مسار شبكي تفعّله بنفسك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه أقوال المشرفين أنفسهم؛ ولم تدقق PromptQuorum حركة الشبكة للتطبيقين.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Mac وWindows 11 الجدد على النماذج المحلية** الذين يريدون تطبيقًا مجانيًا يختار إعدادات معقولة لأجهزتهم.',
          '**المطورون الذين يريدون نقطة نهاية محلية متوافقة مع OpenAI** للمحررات والوكلاء والنصوص البرمجية دون إدارة llama.cpp يدويًا.',
          '**مستخدمو llama.cpp** الذين يريدون مشاركة ذاكرة النماذج مع واجهة في شريط القوائم أو علبة النظام.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة في الاستخدام الفعلي.** لم تشغّل PromptQuorum أيًّا من التطبيقين، لذا لم تُقيَّم السرعة ولا استهلاك الذاكرة ولا جودة النماذج.',
          '**الأمان وسلوك الشبكة.** لم تُدقَّق حركة الشبكة للتطبيقين، ولا تصف المصادر التي راجعناها توقيع تطبيق Mac أو توثيقه.',
          '**متطلبات Windows.** تذكر المصادر Windows 11 دون حد أدنى للذاكرة أو GPU أو برامج التشغيل.',
          '**خارطة الطريق.** التطبيقان إصداران من سلسلة 0.x يتغيران بسرعة، ولا تقدّم المصادر أي خطة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Ollama](/ar/power-local-llm/ollama-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الرئيسي': 'بيئة تشغيل تعتمد على سطر الأوامر ولها مكتبة نماذج خاصة',
          },
          {
            'التطبيق': '[LM Studio](/ar/power-local-llm/lm-studio-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر / الرخصة': 'مجاني / ملكية خاصة',
            'الفرق الرئيسي': 'تطبيق سطح مكتب مغلق المصدر مع متصفح نماذج مدمج',
          },
          {
            'التطبيق': '[Jan](/ar/power-local-llm/jan-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر / الرخصة': 'مجاني / Apache 2.0 (نسخة معدّلة)',
            'الفرق الرئيسي': 'تطبيق دردشة مفتوح المصدر لسطح المكتب مع مكتبة نماذج',
          },
          {
            'التطبيق': '[GPT4All](/ar/power-local-llm/gpt4all-review)',
            'المنصات': 'Mac وWindows وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الرئيسي': 'تطبيق دردشة لسطح المكتب يشغّل النماذج محليًا',
          },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يوجد تطبيق لنظام Linux؟',
            a: 'ليس بحسب llama.app: يحصل مستخدمو Linux على أداة سطر الأوامر llama عبر سكربت تثبيت، وتذكر الوثائق أيضًا مديري الحزم والملفات التنفيذية الجاهزة وDocker والبناء من المصدر.',
          },
          {
            q: 'هل يستطيع استخدام نماذج أملكها بالفعل؟',
            a: 'يقول README الخاص بـ Mac إن النماذج المثبّتة عبر llama.cpp تظهر في التطبيق، ويشارك تطبيق Windows ذاكرة Hugging Face المؤقتة نفسها؛ ويتيح Windows 0.13.0 أيضًا إضافة مجلدات نماذجك الخاصة. ولا تذكر المصادر ما إذا كانت نماذج أدوات أخرى مثل Ollama تُلتقط.',
          },
          {
            q: 'ما الواجهات التي يوفرها الخادم المحلي؟',
            a: 'تذكر الوثائق نقاط نهاية متوافقة مع OpenAI تحت `/v1`، ونقطة نهاية متوافقة مع Anthropic هي `/v1/messages`، ونقاط نهاية خاصة بـ llama.cpp على المنفذ 9931؛ ولا يلزم مفتاح API إلا إذا شغّلت الخادم بمفتاح.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Llama (llama.app) وسيلة مجانية برخصة MIT لمستخدمي Mac وWindows 11 لتشغيل النماذج المفتوحة عبر llama.cpp دون طرفية، مع توصيات تناسب عتادهم وواجهة API محلية للتطبيقات الأخرى. في المقابل، التطبيقان إصداران سريعا التغير من سلسلة 0.x، ولا يوجد تطبيق لنظام Linux، ولم تختبر PromptQuorum أيًّا منهما. يناسب المبتدئين والمطورين الذين يريدون llama.cpp خلف واجهة صغيرة؛ ومن يريد متصفح نماذج أوسع يمكنه المقارنة مع [LM Studio](/ar/power-local-llm/lm-studio-review) أو [Jan](/ar/power-local-llm/jan-review)، ومن يفضل سطر الأوامر يمكنه النظر في [Ollama](/ar/power-local-llm/ollama-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[llama.app](https://llama.app/): الصفحة الرئيسية وصفحات التنزيل والوثائق، تحققنا منها في 24 أكتوبر 2026.',
          '[Llama-macOS على GitHub](https://github.com/ggml-org/Llama-macOS): README والإصدارات (0.45.0، 18 أكتوبر 2026).',
          '[Llama-Windows على GitHub](https://github.com/ggml-org/Llama-Windows): README والإصدارات (v0.13.0، 20 أكتوبر 2026).',
          '[Introducing Llama Windows](https://huggingface.co/blog/huggingface/llama-windows): إعلان Hugging Face بتاريخ 13 أكتوبر 2026.',
          '[cask في Homebrew باسم llama-app](https://formulae.brew.sh/cask/llama-app): متطلبات macOS والمعمارية لتطبيق Mac.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[شرح llama.cpp](/ar/power-local-llm/llama-cpp-explained): المحرك الذي يقوم عليه التطبيق.',
          '[مراجعة Ollama](/ar/power-local-llm/ollama-review): بيئة التشغيل المعتمدة على سطر الأوامر.',
          '[مراجعة LM Studio](/ar/power-local-llm/lm-studio-review): تطبيق سطح مكتب مغلق المصدر مع متصفح نماذج.',
          '[مراجعة Jan](/ar/power-local-llm/jan-review): تطبيق دردشة مفتوح المصدر لسطح المكتب.',
          '[مقارنة محركات الاستدلال وبيئات التشغيل والبوابات المحلية](/ar/power-local-llm/local-llm-run-serve-compared): مقارنة الفئة.',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/llama-app-review-hero-zh.webp',
    title: 'Llama 应用评测：适用于 Mac 和 Windows 的 llama.cpp 桌面应用',
    seoTitle: 'Llama 应用评测：适用于 Mac 和 Windows 的桌面版',
    intro: 'Llama（llama.app）是 llama.cpp 团队与 Hugging Face 推出的免费应用，采用 MIT 许可证，在 Mac 上常驻菜单栏，在 Windows 11 上常驻系统托盘。它负责安装和管理 llama.cpp，按你的设备推荐合适的模型，并启动本地 OpenAI 兼容服务器。两款应用都是刚发布的 0.x 版本，因此本评测仅依据 llama.app、两个 GitHub 仓库和 Hugging Face 的公告，核查日期为 2026 年 10 月 24 日。',
    metaDescription: 'Llama 应用评测：llama.cpp 团队与 Hugging Face 推出的免费开源菜单栏/托盘应用，支持 Mac 和 Windows 11，含模型推荐、本地 API 与数据说明。',
    twitterDescription: 'Llama 应用评测：适用于 Mac 和 Windows 11 的免费 llama.cpp 桌面应用。安装步骤、本地 OpenAI 兼容 API、数据流向与未核实事项。',
    audience: '正在考虑是否试用 llama.cpp 团队桌面应用的 Mac 和 Windows 11 用户与开发者，需要了解它的要求、费用、哪些数据留在本机，以及哪些信息来源未能证实。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Llama 应用评测',
    targetKeywords: [
      'llama 应用评测',
      'llama.app',
      'llama.cpp 桌面应用',
      'mac 本地大模型',
      'windows 本地大模型',
      '本地 openai 兼容 api',
    ],
    current_hardware_mentioned: ['Apple silicon Mac', 'Windows 11 PC'],
    leadAnswerBlock: '**Llama（llama.app）是一款适用于 Mac 和 Windows 11 的小型应用，通过 llama.cpp 在你自己的电脑上运行开源模型，提供一键安装模型、浏览器内置聊天，以及位于 `localhost:9931` 的本地 API。** 它免费且开源。PromptQuorum 未安装也未测试该应用；本文所有表述均来自 llama.app、项目的 GitHub 仓库和 Hugging Face 的公告。',
    quickAnswerTop: {
      zh: {
        question: 'Llama 和 llama.cpp 是同一个东西吗？',
        answer: '不是。llama.cpp 是开源引擎；Llama（llama.app）是安装该引擎、为每个模型选择设置并替你启动本地服务器的桌面应用。两者出自同一团队，据项目介绍，你已在用 llama.cpp 的模型会自动出现在应用里。',
        bullets: [
          'Mac 上是菜单栏应用，Windows 11 上是托盘应用，都没有常规窗口。',
          '聊天从菜单在浏览器中打开，其他应用通过 OpenAI 兼容 API 连接。',
          '模型只在 Hugging Face 缓存中存放一份，与 llama.cpp 共享。',
          'Linux 提供的是命令行工具 llama，而不是应用。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer',
      },
      {
        label: 'Llama 是什么',
        anchor: 'what-is-llama-app',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '系统要求',
        anchor: 'requirements',
      },
      {
        label: '上手步骤',
        anchor: 'getting-started',
      },
      {
        label: '信息来源确认的功能',
        anchor: 'key-features',
      },
      {
        label: '数据流向与网络使用',
        anchor: 'privacy',
      },
      {
        label: '适合谁用',
        anchor: 'who-should-use',
      },
      {
        label: '我们未能核实的内容',
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
        label: '信息来源',
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
            text: 'Llama 是 llama.cpp 团队与 Hugging Face 推出的免费开源应用，适用于 Mac 和 Windows 11，在本地运行开源模型并提供给你的其他应用使用。',
          },
          {
            type: 'plain-terms',
            text: '像普通应用一样安装，在菜单中选择推荐模型，即可在浏览器里聊天，或让编辑器和脚本连接本地 API。',
          },
        ],
        items: [
          '维护情况：仓库最近一次活动在 2026 年 10 月 22 日，因此不适用停更项目警告。',
          '费用：MIT 许可证，免费且无需账号；登录 Hugging Face 为可选，仅访问受限模型时才需要。',
          '平台：macOS 15 及以上的 Apple 芯片 Mac，以及 x64 或 ARM64 的 Windows 11。',
          '模型：推荐会随内存而变；网站建议 Mac 内存 16 GB 及以上用 Gemma 4，24 GB 及以上用 GPT-OSS，32 GB 及以上用 Qwen 3.8。',
          '成熟度：两款应用都是 0.x 版本，Mac 版在 9 月 2 日至 10 月 18 日之间发布了四个版本。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 llama.app、两个 GitHub 仓库、Homebrew cask 数据和 Hugging Face 的公告，核查日期为 2026 年 10 月 24 日。PromptQuorum 未安装、测试或跑分该应用。',
          },
        ],
      },
      overview: {
        id: 'what-is-llama-app',
        title: 'Llama 是什么',
        content: [
          '**Llama 在 Mac 上是菜单栏应用，在 Windows 上是系统托盘应用，负责下载开源模型、按你的设备配置并在本地提供服务。** 在菜单中点击“Open chat”即可在浏览器里与模型对话，也可让编程智能体、编辑器和你自己的代码连接本地 OpenAI 兼容 API。文档称它是基于 llama.cpp 的极简桌面应用。',
          '它不是 PromptQuorum 另行介绍的 [llama.cpp](/zh/power-local-llm/llama-cpp-explained) 引擎本身，也不是 Meta 的 Llama 模型系列。Windows 版是 Mac 版的 WinUI 3 移植版，由 Hugging Face 于 2026 年 10 月 13 日发布，原生支持 Windows on Arm。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: ['**Llama 在 Mac 和 Windows 11 上可正常下载安装；Linux 用户只能获得命令行工具。**'],
        columns: ['项目', '详情'],
        rows: [
          {
            '项目': 'Mac',
            '详情': '[Llama.dmg](https://llama.app/download/mac)：拖入“应用程序”',
          },
          {
            '项目': 'Mac（Homebrew）',
            '详情': '`brew install --cask llama-app`',
          },
          {
            '项目': 'Windows 11',
            '详情': '适用于 x64 和 ARM64 的 [.msixbundle 安装包](https://llama.app/download/windows)',
          },
          {
            '项目': 'Linux',
            '详情': '[llama CLI 安装脚本](https://llama.app/install.sh)，无应用',
          },
          {
            '项目': '价格',
            '详情': '免费，MIT 许可证',
          },
          {
            '项目': '官网',
            '详情': '[llama.app](https://llama.app/)',
          },
          {
            '项目': '源代码',
            '详情': '[Llama-macOS](https://github.com/ggml-org/Llama-macOS) 和 [Llama-Windows](https://github.com/ggml-org/Llama-Windows)',
          },
          {
            '项目': '隐私政策',
            '详情': 'llama.app 未发布专页（2026 年 10 月 24 日核查）',
          },
        ],
        note: '核查的版本：Mac 0.45.0 / Windows 0.13.0。据 [Mac](https://github.com/ggml-org/Llama-macOS/releases) 和 [Windows](https://github.com/ggml-org/Llama-Windows/releases) 的发布页，它们分别于 2026 年 10 月 18 日和 20 日发布；仓库最近一次活动在 10 月 22 日。Windows 0.13.0 的发布说明称现在会自动向 Microsoft Store 提交版本，认证完成后商店页面才会上线，但 PromptQuorum 未找到已上线的商店页面。网站上的 Linux 命令会把下载的脚本直接交给 shell 执行。',
      },
      requirements: {
        id: 'requirements',
        title: '系统要求',
        content: [
          '**Llama 需要 macOS 15 及以上的 Apple 芯片 Mac 或 Windows 11 电脑，以及所选模型所需的磁盘空间和内存。**',
        ],
        columns: ['项目', '信息来源的说法'],
        rows: [
          {
            '项目': 'Mac',
            '信息来源的说法': 'Apple 芯片，macOS 15 及以上（Homebrew cask）',
          },
          {
            '项目': 'Windows',
            '信息来源的说法': 'Windows 11，x64 或 ARM64',
          },
          {
            '项目': '应用大小',
            '信息来源的说法': 'Mac 安装后 4 MB；Windows 约 86 MB',
          },
          {
            '项目': '模型大小',
            '信息来源的说法': '4.59 GB（gemma-4 E4B）至 19.0 GB（Qwen3.8 27B）',
          },
          {
            '项目': '内存建议（Mac）',
            '信息来源的说法': '16 GB 及以上：Gemma 4；24 GB 及以上：GPT-OSS；32 GB 及以上：Qwen 3.8',
          },
        ],
        note: '网站只给出 Mac 的内存建议，未公布 Windows 的内存或 GPU 要求；Windows 0.13.0 新增了根据你电脑内存计算的“能否装下”标记。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: ['**以下步骤依据 llama.app 和 README，PromptQuorum 未实际执行。**'],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '打开 Llama.dmg 并把 Llama 拖入“应用程序”；在 Windows 11 上打开 .msixbundle 文件并点击安装。',
          },
          {
            title: '在菜单栏或托盘中找到它',
            whyItMatters: 'Llama 没有窗口；点击 Mac 菜单栏或 Windows 系统托盘中的图标（隐藏图标在 ^ 箭头后面）。',
          },
          {
            title: '选择模型',
            whyItMatters: '从为你的电脑推荐的模型中选择，或浏览 Hugging Face 目录，让 Llama 来安装。',
          },
          {
            title: '打开聊天',
            whyItMatters: '点击菜单中的“Open chat”，即可在浏览器里与模型对话。',
          },
          {
            title: '连接其他应用',
            whyItMatters: '让 OpenAI SDK、编辑器或编程智能体指向 `http://localhost:9931/v1`；据网站介绍，无需 API 密钥，也没有按量计费。',
          },
          {
            title: '按需调整设置',
            whyItMatters: '在 Mac 上，把覆盖项写入 `~/.config/llama/models.user.ini`，应用会把它合并到自己生成的配置中。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '信息来源确认的功能',
        content: ['**以下各项均来自 llama.app、README 或发布说明。**'],
        items: [
          '**自动配置。** Llama 为每个模型设置量化、上下文长度、图像输入和推测解码，llama.cpp 的所有设置仍可在纯文本文件中编辑。',
          '**按需加载。** 据网站介绍，模型在被请求时加载，空闲五分钟后卸载。',
          '**共享存储。** 模型存放在与 llama.cpp 共享的 Hugging Face 缓存中，已通过 llama.cpp 安装的模型会出现在应用里。',
          '**API。** 兼容 OpenAI 和 Anthropic 的端点，支持流式输出、工具调用、结构化输出和视觉，并可通过 Tailscale 从其他设备远程访问。',
          '**近期新增。** Mac 0.45.0 通过 `/v1/embeddings` 加入了嵌入模型；Windows 提供 Alt+空格聊天浮层，其 0.13.0 版新增适配标记、自有模型文件夹和 Share to Llama。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与网络使用',
        content: [
          '**维护者称提示词和推理都留在你的电脑上：Mac 版 README 称该应用“100% 本地”，Windows 版 README 称它不发送遥测、事件、分析数据或安装 ID。**',
          'Windows 版 README 列出了出站流量：模型下载、新版本检查和对本地服务器的调用，每次只带有包含应用版本、Windows 版本号和处理器架构的 User-Agent。Mac 版 README 没有列出其网络使用，Homebrew cask 将该应用标为可自动更新。Mac 0.45.0 新增了访问受限模型用的可选 Hugging Face 登录，网站还介绍了通过 Tailscale 的远程访问，这是需要你自己开启的网络通道。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是维护者自己的说法；PromptQuorum 未审计这些应用的网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        items: [
          '**刚接触本地模型的 Mac 和 Windows 11 用户**，想要一款能为自己电脑选择合理设置的免费应用。',
          '**需要本地 OpenAI 兼容端点的开发者**，用于编辑器、智能体和脚本，又不想手动管理 llama.cpp。',
          '**llama.cpp 用户**，希望与菜单栏或托盘前端共享模型缓存。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际体验质量。** PromptQuorum 未运行这两款应用，因此未评估速度、内存占用和模型质量。',
          '**安全与网络行为。** 应用的流量未经审计，所查阅的来源也未说明 Mac 版的签名或公证情况。',
          '**Windows 要求。** 来源只提到 Windows 11，没有给出内存、GPU 或驱动的下限。',
          '**路线图。** 两款应用都是变化很快的 0.x 版本，来源没有给出计划。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可', '主要区别'],
        rows: [
          {
            '应用': '[Ollama](/zh/power-local-llm/ollama-review)',
            '平台': 'Mac、Windows、Linux',
            '价格 / 许可': '免费 / MIT',
            '主要区别': '以命令行为主的运行时，自带模型库',
          },
          {
            '应用': '[LM Studio](/zh/power-local-llm/lm-studio-review)',
            '平台': 'Mac、Windows、Linux',
            '价格 / 许可': '免费 / 专有',
            '主要区别': '闭源桌面应用，内置模型浏览器',
          },
          {
            '应用': '[Jan](/zh/power-local-llm/jan-review)',
            '平台': 'Mac、Windows、Linux',
            '价格 / 许可': '免费 / Apache 2.0（变体）',
            '主要区别': '开源桌面聊天应用，带模型库',
          },
          {
            '应用': '[GPT4All](/zh/power-local-llm/gpt4all-review)',
            '平台': 'Mac、Windows、Linux',
            '价格 / 许可': '免费 / MIT',
            '主要区别': '在本地运行模型的桌面聊天应用',
          },
        ],
        note: '竞品信息变化频繁；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '有 Linux 应用吗？',
            a: '据 llama.app，没有：Linux 用户通过安装脚本获得命令行工具 llama，文档还列出了包管理器、预编译二进制、Docker 和源码构建。',
          },
          {
            q: '能使用我已有的模型吗？',
            a: 'Mac 版 README 称，通过 llama.cpp 安装的模型会出现在应用里；Windows 版共用同一个 Hugging Face 缓存，Windows 0.13.0 还支持添加自己的模型文件夹。来源没有说明是否会识别 Ollama 等其他工具的模型。',
          },
          {
            q: '本地服务器提供哪些接口？',
            a: '文档列出了 `/v1` 下的 OpenAI 兼容端点、兼容 Anthropic 的 `/v1/messages` 端点，以及端口 9931 上 llama.cpp 自带的端点；只有在启动服务器时设置了密钥，才需要 API 密钥。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Llama（llama.app）让 Mac 和 Windows 11 用户无需终端，就能免费、在 MIT 许可证下通过 llama.cpp 运行开源模型，并提供按硬件推荐的模型和供其他应用使用的本地 API。不足之处是：两款应用都是变化很快的 0.x 版本，没有 Linux 应用，PromptQuorum 也未测试过任何一款。它适合想把 llama.cpp 放在小巧前端之后的新手和开发者；想要功能更全的模型浏览器的读者可对比 [LM Studio](/zh/power-local-llm/lm-studio-review) 或 [Jan](/zh/power-local-llm/jan-review)，偏好命令行的读者可看 [Ollama](/zh/power-local-llm/ollama-review)。',
      },
      sources: {
        id: 'sources',
        title: '信息来源',
        items: [
          '[llama.app](https://llama.app/)：首页、下载页和文档，核查于 2026 年 10 月 24 日。',
          '[GitHub 上的 Llama-macOS](https://github.com/ggml-org/Llama-macOS)：README 与发布记录（0.45.0，2026 年 10 月 18 日）。',
          '[GitHub 上的 Llama-Windows](https://github.com/ggml-org/Llama-Windows)：README 与发布记录（v0.13.0，2026 年 10 月 20 日）。',
          '[Introducing Llama Windows](https://huggingface.co/blog/huggingface/llama-windows)：Hugging Face 于 2026 年 10 月 13 日发布的公告。',
          '[Homebrew cask llama-app](https://formulae.brew.sh/cask/llama-app)：Mac 版的 macOS 与架构要求。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[llama.cpp 详解](/zh/power-local-llm/llama-cpp-explained)：应用背后的引擎。',
          '[Ollama 评测](/zh/power-local-llm/ollama-review)：以命令行为主的运行时。',
          '[LM Studio 评测](/zh/power-local-llm/lm-studio-review)：带模型浏览器的闭源桌面应用。',
          '[Jan 评测](/zh/power-local-llm/jan-review)：开源桌面聊天应用。',
          '[本地推理引擎、运行时与网关对比](/zh/power-local-llm/local-llm-run-serve-compared)：该类别的对比文章。',
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
    theme: 'Easiest Desktop Apps',
    heroImage: '/images/llama-app-review-hero-ko.webp',
    title: 'Llama 앱 리뷰: Mac·Windows용 llama.cpp 데스크톱 앱',
    seoTitle: 'Llama 앱 리뷰: llama.cpp 데스크톱 앱',
    intro: 'Llama(llama.app)는 llama.cpp 팀과 Hugging Face가 만든 MIT 라이선스의 무료 앱으로, Mac에서는 메뉴 막대, Windows 11에서는 시스템 트레이에 상주합니다. llama.cpp를 설치·관리하고, 내 기기에 맞는 모델을 추천하며, OpenAI 호환 로컬 서버를 실행합니다. 두 앱 모두 출시된 지 얼마 안 된 0.x 버전이므로, 이 리뷰는 llama.app, 두 GitHub 저장소, Hugging Face의 발표 내용만 다루며 2026년 10월 24일에 확인했습니다.',
    metaDescription: 'Llama 앱 리뷰: llama.cpp 팀과 Hugging Face가 만든 무료 오픈소스 앱. Mac·Windows 11 지원, 모델 추천, 로컬 API, 데이터 처리까지 정리했습니다.',
    twitterDescription: 'Llama 앱 리뷰: Mac·Windows 11용 무료 llama.cpp 데스크톱 앱. 설치, OpenAI 호환 로컬 API, 데이터 흐름, 확인하지 못한 점.',
    audience: 'llama.cpp 팀의 데스크톱 앱을 써 볼지 고민하는 Mac·Windows 11 사용자와 개발자로, 필요한 환경, 비용, 기기에 남는 데이터, 출처가 확인하지 않은 내용을 알고 싶은 분들입니다.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Llama 앱 리뷰',
    targetKeywords: [
      'llama 앱 리뷰',
      'llama.app',
      'llama.cpp 데스크톱 앱',
      'mac 로컬 llm',
      'windows 로컬 llm',
      '로컬 openai 호환 api',
    ],
    current_hardware_mentioned: ['Apple silicon Mac', 'Windows 11 PC'],
    leadAnswerBlock: '**Llama(llama.app)는 llama.cpp를 통해 오픈 모델을 내 컴퓨터에서 실행하는 Mac·Windows 11용 작은 앱으로, 원클릭 모델 설치, 브라우저 채팅, `localhost:9931`의 로컬 API를 제공합니다.** 무료 오픈소스입니다. PromptQuorum은 앱을 설치하거나 테스트하지 않았으며, 이 글의 모든 내용은 llama.app, 프로젝트의 GitHub 저장소, Hugging Face의 발표에서 가져왔습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Llama는 llama.cpp와 같은 것인가요?',
        answer: '아닙니다. llama.cpp는 오픈소스 엔진이고, Llama(llama.app)는 그 엔진을 설치하고 모델별 설정을 고르며 로컬 서버를 대신 실행해 주는 데스크톱 앱입니다. 둘 다 같은 팀에서 만들었으며, 프로젝트에 따르면 이미 llama.cpp로 쓰던 모델은 앱에 자동으로 나타납니다.',
        bullets: [
          'Mac에서는 메뉴 막대 앱, Windows 11에서는 트레이 앱이며 일반 창은 없습니다.',
          '채팅은 메뉴에서 브라우저로 열리고, 다른 앱은 OpenAI 호환 API로 연결합니다.',
          '모델은 Hugging Face 캐시에 한 번만 저장되며 llama.cpp와 공유됩니다.',
          'Linux에는 앱이 아니라 명령줄 도구 llama가 제공됩니다.',
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
        label: 'Llama란 무엇인가',
        anchor: 'what-is-llama-app',
      },
      {
        label: '구하는 방법',
        anchor: 'get-it',
      },
      {
        label: '요구 사항',
        anchor: 'requirements',
      },
      {
        label: '시작하는 방법',
        anchor: 'getting-started',
      },
      {
        label: '출처가 확인한 기능',
        anchor: 'key-features',
      },
      {
        label: '데이터 흐름과 네트워크 사용',
        anchor: 'privacy',
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use',
      },
      {
        label: '확인하지 못한 내용',
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
        label: '관련 글',
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
            text: 'Llama는 llama.cpp 팀과 Hugging Face가 만든 Mac·Windows 11용 무료 오픈소스 앱으로, 오픈 모델을 로컬에서 실행해 다른 앱에 제공합니다.',
          },
          {
            type: 'plain-terms',
            text: '일반 앱처럼 설치하고 메뉴에서 추천 모델을 고르면, 브라우저에서 채팅하거나 편집기와 스크립트를 로컬 API에 연결할 수 있습니다.',
          },
        ],
        items: [
          '유지보수: 저장소의 가장 최근 활동이 2026년 10월 22일이므로 방치 프로젝트 경고는 해당되지 않습니다.',
          '비용: MIT 라이선스로 무료이며 계정이 필요 없습니다. Hugging Face 로그인은 선택이고 접근이 제한된 모델에만 필요합니다.',
          '플랫폼: macOS 15 이상의 Apple silicon Mac, 그리고 x64 또는 ARM64 Windows 11.',
          '모델: 추천은 메모리에 따라 달라지며, 사이트는 Mac 메모리 16 GB 이상에서 Gemma 4, 24 GB 이상에서 GPT-OSS, 32 GB 이상에서 Qwen 3.8을 권합니다.',
          '성숙도: 두 앱 모두 0.x 버전이며, Mac 앱은 9월 2일부터 10월 18일까지 네 번 릴리스되었습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 llama.app, 두 GitHub 저장소, Homebrew cask 데이터, Hugging Face의 발표를 바탕으로 2026년 10월 24일에 확인했습니다. PromptQuorum은 앱을 설치, 테스트, 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-llama-app',
        title: 'Llama란 무엇인가',
        content: [
          '**Llama는 Mac에서는 메뉴 막대, Windows에서는 시스템 트레이에 상주하며 오픈 모델을 내려받아 내 기기에 맞게 설정하고 로컬로 제공하는 앱입니다.** 메뉴의 “Open chat”을 누르면 브라우저에서 모델과 대화할 수 있고, 코딩 에이전트, 편집기, 직접 작성한 코드를 로컬 OpenAI 호환 API에 연결할 수도 있습니다. 문서는 llama.cpp 위에 만든 미니멀한 데스크톱 앱이라고 설명합니다.',
          'PromptQuorum이 따로 다루는 [llama.cpp](/ko/power-local-llm/llama-cpp-explained) 엔진 자체가 아니며, Meta의 Llama 모델 계열도 아닙니다. Windows 앱은 Mac 앱을 WinUI 3으로 옮긴 것으로, Hugging Face가 2026년 10월 13일에 발표했고 Windows on Arm을 기본 지원합니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '구하는 방법',
        content: ['**Llama는 Mac과 Windows 11에서 일반 다운로드로 받을 수 있고, Linux에는 명령줄 도구만 제공됩니다.**'],
        columns: ['항목', '세부 내용'],
        rows: [
          {
            '항목': 'Mac',
            '세부 내용': '[Llama.dmg](https://llama.app/download/mac): 응용 프로그램으로 드래그',
          },
          {
            '항목': 'Mac(Homebrew)',
            '세부 내용': '`brew install --cask llama-app`',
          },
          {
            '항목': 'Windows 11',
            '세부 내용': 'x64·ARM64용 [.msixbundle 설치 파일](https://llama.app/download/windows)',
          },
          {
            '항목': 'Linux',
            '세부 내용': '[llama CLI 설치 스크립트](https://llama.app/install.sh), 앱 없음',
          },
          {
            '항목': '가격',
            '세부 내용': '무료, MIT 라이선스',
          },
          {
            '항목': '웹사이트',
            '세부 내용': '[llama.app](https://llama.app/)',
          },
          {
            '항목': '소스 코드',
            '세부 내용': '[Llama-macOS](https://github.com/ggml-org/Llama-macOS) 및 [Llama-Windows](https://github.com/ggml-org/Llama-Windows)',
          },
          {
            '항목': '개인정보 처리방침',
            '세부 내용': 'llama.app에 게시된 페이지 없음(2026년 10월 24일 확인)',
          },
        ],
        note: '확인한 버전: Mac 0.45.0 / Windows 0.13.0. [Mac](https://github.com/ggml-org/Llama-macOS/releases)과 [Windows](https://github.com/ggml-org/Llama-Windows/releases) 릴리스 페이지에 따르면 각각 2026년 10월 18일과 20일에 공개되었고, 저장소의 가장 최근 활동은 10월 22일입니다. Windows 0.13.0 릴리스 노트는 이제 릴리스가 Microsoft Store에 자동 제출되고 인증이 끝나면 스토어 페이지가 공개된다고 하지만, PromptQuorum은 공개된 스토어 페이지를 찾지 못했습니다. 사이트의 Linux 명령은 내려받은 스크립트를 곧바로 셸에 넘깁니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**Llama에는 macOS 15 이상의 Apple silicon Mac 또는 Windows 11 PC와, 선택한 모델에 필요한 디스크 공간·메모리가 필요합니다.**',
        ],
        columns: ['항목', '출처의 설명'],
        rows: [
          {
            '항목': 'Mac',
            '출처의 설명': 'Apple silicon, macOS 15 이상(Homebrew cask)',
          },
          {
            '항목': 'Windows',
            '출처의 설명': 'Windows 11, x64 또는 ARM64',
          },
          {
            '항목': '앱 크기',
            '출처의 설명': 'Mac 설치 후 4 MB, Windows 약 86 MB',
          },
          {
            '항목': '모델 크기',
            '출처의 설명': '4.59 GB(gemma-4 E4B)~19.0 GB(Qwen3.8 27B)',
          },
          {
            '항목': '메모리 권장(Mac)',
            '출처의 설명': '16 GB 이상: Gemma 4, 24 GB 이상: GPT-OSS, 32 GB 이상: Qwen 3.8',
          },
        ],
        note: '사이트는 Mac에 대해서만 메모리 기준을 제시하고 Windows의 메모리·GPU 요구 사항은 공개하지 않습니다. Windows 0.13.0에는 기기 메모리로 계산한 “들어가는지” 표시가 추가되었습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: ['**아래 단계는 llama.app과 README를 따른 것이며 PromptQuorum이 실행해 보지는 않았습니다.**'],
        numberedItems: [
          {
            title: '앱 설치',
            whyItMatters: 'Llama.dmg를 열어 Llama를 응용 프로그램으로 드래그하거나, Windows 11에서 .msixbundle 파일을 열어 설치를 누릅니다.',
          },
          {
            title: '메뉴 막대 또는 트레이에서 찾기',
            whyItMatters: 'Llama에는 창이 없습니다. Mac 메뉴 막대나 Windows 시스템 트레이의 아이콘을 누르세요. 숨겨진 아이콘은 ^ 화살표 뒤에 있습니다.',
          },
          {
            title: '모델 선택',
            whyItMatters: '내 기기에 추천되는 모델 중에서 고르거나 Hugging Face 카탈로그를 둘러본 뒤 Llama가 설치하게 합니다.',
          },
          {
            title: '채팅 열기',
            whyItMatters: '메뉴의 “Open chat”을 누르면 브라우저에서 모델과 대화할 수 있습니다.',
          },
          {
            title: '다른 앱 연결',
            whyItMatters: 'OpenAI SDK, 편집기, 코딩 에이전트를 `http://localhost:9931/v1`로 지정합니다. 사이트에 따르면 API 키도 사용량 요금도 필요 없습니다.',
          },
          {
            title: '필요하면 설정 조정',
            whyItMatters: 'Mac에서는 덮어쓸 설정을 `~/.config/llama/models.user.ini`에 넣으면 앱이 생성하는 설정에 병합됩니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처가 확인한 기능',
        content: ['**아래 항목은 모두 llama.app, README, 릴리스 노트에서 가져왔습니다.**'],
        items: [
          '**자동 설정.** Llama는 모델별로 양자화, 컨텍스트 크기, 이미지 입력, 추측 디코딩을 설정하며, llama.cpp의 모든 설정은 텍스트 파일에서 계속 편집할 수 있습니다.',
          '**필요할 때 로드.** 사이트에 따르면 모델은 요청 시 로드되고 5분간 유휴 상태이면 언로드됩니다.',
          '**공유 저장소.** 모델은 llama.cpp와 공유하는 Hugging Face 캐시에 저장되며, llama.cpp로 이미 설치한 모델도 앱에 나타납니다.',
          '**API.** OpenAI·Anthropic 호환 엔드포인트가 스트리밍, 도구 호출, 구조화된 출력, 비전을 지원하며, Tailscale을 통해 다른 기기에서 원격으로 접속할 수도 있습니다.',
          '**최근 추가 사항.** Mac 0.45.0에는 `/v1/embeddings`를 통한 임베딩 모델이 추가되었고, Windows에는 Alt+Space 채팅 오버레이가 있으며 0.13.0에서 적합 여부 표시, 사용자 모델 폴더, Share to Llama가 추가되었습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 네트워크 사용',
        content: [
          '**관리자들은 프롬프트와 추론이 내 기기에 머문다고 말합니다. Mac README는 앱을 “100% 로컬”이라고 하고, Windows README는 원격 측정, 이벤트, 분석 데이터, 설치 ID를 보내지 않는다고 밝힙니다.**',
          'Windows README는 외부로 나가는 트래픽으로 모델 다운로드, 새 릴리스 확인, 로컬 서버 호출을 나열하며, 각각 앱 버전, Windows 빌드, 프로세서 아키텍처가 담긴 User-Agent만 포함한다고 합니다. Mac README는 네트워크 사용을 나열하지 않으며, Homebrew cask는 이 앱을 자체 업데이트형으로 표시합니다. Mac 0.45.0에는 접근이 제한된 모델용 선택적 Hugging Face 로그인이 추가되었고, 사이트는 Tailscale을 통한 원격 접속도 설명하는데 이는 사용자가 직접 켜는 네트워크 경로입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 관리자들 자신의 설명이며, PromptQuorum은 앱의 네트워크 트래픽을 감사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**로컬 모델이 처음인 Mac·Windows 11 사용자**로, 내 기기에 맞는 설정을 알아서 골라 주는 무료 앱을 원하는 분.',
          '**로컬 OpenAI 호환 엔드포인트가 필요한 개발자**로, 편집기, 에이전트, 스크립트용으로 llama.cpp를 직접 관리하고 싶지 않은 분.',
          '**llama.cpp 사용자**로, 모델 캐시를 메뉴 막대나 트레이 프런트엔드와 공유하고 싶은 분.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**실제 사용 품질.** PromptQuorum은 두 앱을 실행하지 않았으므로 속도, 메모리 사용량, 모델 품질은 평가하지 않았습니다.',
          '**보안과 네트워크 동작.** 앱의 트래픽은 감사되지 않았고, 검토한 출처에는 Mac 앱의 서명이나 공증에 대한 설명이 없습니다.',
          '**Windows 요구 사항.** 출처는 Windows 11만 언급하며 메모리, GPU, 드라이버의 최소 기준은 없습니다.',
          '**로드맵.** 두 앱은 빠르게 바뀌는 0.x 버전이며 출처에 계획이 나와 있지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '주요 차이점'],
        rows: [
          {
            '앱': '[Ollama](/ko/power-local-llm/ollama-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '주요 차이점': '명령줄 중심 런타임으로 자체 모델 라이브러리 보유',
          },
          {
            '앱': '[LM Studio](/ko/power-local-llm/lm-studio-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격 / 라이선스': '무료 / 독점',
            '주요 차이점': '비공개 소스 데스크톱 앱, 모델 브라우저 내장',
          },
          {
            '앱': '[Jan](/ko/power-local-llm/jan-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0(변형)',
            '주요 차이점': '모델 라이브러리가 있는 오픈소스 데스크톱 채팅 앱',
          },
          {
            '앱': '[GPT4All](/ko/power-local-llm/gpt4all-review)',
            '플랫폼': 'Mac, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '주요 차이점': '모델을 로컬에서 실행하는 데스크톱 채팅 앱',
          },
        ],
        note: '경쟁 앱의 정보는 자주 바뀌므로 현재 가격, 라이선스, 플랫폼은 각 앱의 페이지에서 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Linux용 앱이 있나요?',
            a: 'llama.app에 따르면 없습니다. Linux 사용자는 설치 스크립트로 명령줄 도구 llama를 받으며, 문서에는 패키지 관리자, 빌드된 바이너리, Docker, 소스 빌드도 안내되어 있습니다.',
          },
          {
            q: '이미 가진 모델을 쓸 수 있나요?',
            a: 'Mac README에 따르면 llama.cpp로 설치한 모델은 앱에 나타나고, Windows 앱도 같은 Hugging Face 캐시를 공유하며, Windows 0.13.0에서는 사용자 모델 폴더도 추가할 수 있습니다. Ollama 같은 다른 도구의 모델을 인식하는지는 출처에 나와 있지 않습니다.',
          },
          {
            q: '로컬 서버는 어떤 인터페이스를 제공하나요?',
            a: '문서에는 `/v1` 아래의 OpenAI 호환 엔드포인트, Anthropic 호환 `/v1/messages` 엔드포인트, 포트 9931의 llama.cpp 고유 엔드포인트가 나와 있습니다. API 키는 키를 지정해 서버를 시작한 경우에만 필요합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Llama(llama.app)는 Mac·Windows 11 사용자가 터미널 없이 llama.cpp로 오픈 모델을 실행할 수 있는 무료 MIT 라이선스 방법이며, 하드웨어에 맞는 추천과 다른 앱을 위한 로컬 API를 제공합니다. 반면 두 앱은 빠르게 바뀌는 0.x 버전이고, Linux용 앱이 없으며, PromptQuorum은 어느 쪽도 테스트하지 않았습니다. llama.cpp를 작은 프런트엔드 뒤에서 쓰고 싶은 입문자와 개발자에게 맞고, 더 풍부한 모델 브라우저를 원하면 [LM Studio](/ko/power-local-llm/lm-studio-review)나 [Jan](/ko/power-local-llm/jan-review)을, 명령줄을 선호하면 [Ollama](/ko/power-local-llm/ollama-review)를 비교해 보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[llama.app](https://llama.app/): 홈페이지, 다운로드 페이지, 문서(2026년 10월 24일 확인).',
          '[GitHub의 Llama-macOS](https://github.com/ggml-org/Llama-macOS): README와 릴리스(0.45.0, 2026년 10월 18일).',
          '[GitHub의 Llama-Windows](https://github.com/ggml-org/Llama-Windows): README와 릴리스(v0.13.0, 2026년 10월 20일).',
          '[Introducing Llama Windows](https://huggingface.co/blog/huggingface/llama-windows): 2026년 10월 13일 Hugging Face 발표.',
          '[Homebrew cask llama-app](https://formulae.brew.sh/cask/llama-app): Mac 앱의 macOS 및 아키텍처 요구 사항.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[llama.cpp 설명](/ko/power-local-llm/llama-cpp-explained): 앱의 바탕이 되는 엔진.',
          '[Ollama 리뷰](/ko/power-local-llm/ollama-review): 명령줄 중심 런타임.',
          '[LM Studio 리뷰](/ko/power-local-llm/lm-studio-review): 모델 브라우저를 갖춘 비공개 소스 데스크톱 앱.',
          '[Jan 리뷰](/ko/power-local-llm/jan-review): 오픈소스 데스크톱 채팅 앱.',
          '[로컬 추론 엔진·런타임·게이트웨이 비교](/ko/power-local-llm/local-llm-run-serve-compared): 카테고리 비교 글.',
        ],
      },
    },
  },
}
