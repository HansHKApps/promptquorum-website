// Power Local LLM — Best Local LLM Apps for Mac in 2026
// Slug: best-local-llm-apps-mac
// All 9 locale blocks authored (en, de, ja, fr, zh, es, ko, pt, ar). Generated from a shared fact sheet so versions,
// dates and requirements stay identical across locales; facts verified from primary sources on 2026-10-31.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    last_full_refresh: '2026-10-31',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    designSkin: 'hub',
    title: 'Best Local LLM Apps for Mac in 2026: LM Studio, Ollama, Jan and 5 More',
    seoTitle: 'Best Local LLM Apps for Mac 2026: 8 Tools Compared',
    intro:
      'Eight apps cover most ways to run an LLM on a Mac in 2026: LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX and Chatbox. This guide compares cost, license, Mac requirements and what each app is best at, with the latest release of each read from its official source.',
    metaDescription:
      'Compare 8 local LLM apps for Mac: LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX and Chatbox. Cost, license, Apple Silicon needs, best use.',
    heroImage: '/images/best-local-llm-apps-mac-hero-en.webp',
    twitterDescription:
      'Best local LLM apps for Mac in 2026: LM Studio (easiest GUI), Ollama (CLI + API), Jan, Msty, AnythingLLM (documents), Open WebUI, oMLX (MLX), Chatbox.',
    audience:
      'Mac users who want to run AI models on their own machine, from beginners picking a first app to developers who want a local API.',
    readTime: '9 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'local LLM app for Mac',
    targetKeywords: [
      'best local ai for mac',
      'local llm apps mac',
      'lm studio alternatives mac',
      'ollama mac',
      'run llm on mac',
      'homebrew llm',
      'local ai software mac',
      'mac llm gui',
    ],
    leadAnswerBlock:
      '**For most Mac users, install LM Studio (free graphical app, Apple Silicon, macOS 14+) and download a small model; choose Ollama if you want a command line and a local API, and Jan if you want an open-source chat app.** AnythingLLM, Open WebUI, Msty, oMLX and Chatbox cover documents, browser access, multi-model chat, Apple MLX and a lightweight client.',
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM app for Mac in 2026?',
        answer:
          'LM Studio is the easiest start: a free graphical app that needs an Apple Silicon Mac and macOS 14 or later, with a built-in model browser. Ollama is the pick for terminal users and developers (MIT, macOS 14+, one-line Homebrew install). Jan is a free open-source chat app. The other five apps cover documents (AnythingLLM), a browser chat UI (Open WebUI), multi-model chat (Msty), Apple MLX speed (oMLX) and a lightweight client (Chatbox).',
        bullets: [
          'LM Studio — free graphical app, Apple Silicon only, macOS 14+. Easiest first install.',
          'Ollama — MIT, macOS 14+, Apple M-series GPU support (Intel Macs run CPU-only). CLI, local API and desktop app.',
          'Jan — free open-source desktop chat app, runs models on your Mac.',
          'AnythingLLM — MIT, desktop installers for Apple Silicon and Intel; chat with your own documents.',
          'Open WebUI — browser-based chat UI that connects to Ollama and other backends; install with Docker or pip.',
          'oMLX — Apache-2.0, Apple Silicon only, macOS 15+; MLX-based inference server with a Mac app.',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Which Mac App Should You Install First?', anchor: '#which-app' },
      { label: 'Mac App Comparison Table', anchor: '#comparison-table' },
      { label: 'LM Studio: Easiest Graphical App', anchor: '#lmstudio' },
      { label: 'Ollama: Command Line, API and Desktop App', anchor: '#ollama' },
      { label: 'Jan: Open-Source Chat App', anchor: '#jan' },
      { label: 'Msty: Multi-Model Chat', anchor: '#msty' },
      { label: 'AnythingLLM: Chat With Your Documents', anchor: '#anythingllm' },
      { label: 'Open WebUI: Browser Chat Interface', anchor: '#openwebui' },
      { label: 'oMLX: MLX Inference Server for Apple Silicon', anchor: '#omlx' },
      { label: 'Chatbox: Lightweight Client', anchor: '#chatbox' },
      { label: 'How Much Mac Memory Do You Need?', anchor: '#memory' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Frequently Asked Questions', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**LM Studio is the easiest start on a Mac.** Free graphical app with a built-in model browser; it needs an Apple Silicon Mac and macOS 14 or later (LM Studio docs).',
          '**Ollama is the standard for terminal users and developers.** MIT license, macOS 14+, runs on Apple M-series GPUs (Intel Macs are CPU-only), and installs with a disk image or `brew install ollama`.',
          '**Jan is the open-source chat app.** Free desktop app that runs models locally; its README lists macOS 13.6 or later.',
          '**AnythingLLM is the pick for your own documents.** MIT license, desktop installers for Apple Silicon and Intel Macs, built-in document chat.',
          '**Open WebUI is a browser interface, not a model runner.** It connects to Ollama or other backends; install with Docker or pip.',
          '**Msty and Chatbox are multi-provider chat clients.** Both can use local models and cloud providers, so check the provider setting if privacy matters.',
          '**oMLX is for Apple-native speed.** Apache-2.0 MLX inference server for Apple Silicon with a Mac app; it requires macOS 15 or later.',
          '**Memory sets the model size, not the app.** Jan\'s README lists about 8 GB of RAM for 3B models and 16 GB for 7B models; any app on this list hits the same limit.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Apps compared:** LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox.',
          '**Latest upstream releases (checked 2026-10-31):** LM Studio 0.4.28 (31 Oct 2026) · Ollama v0.40.13 (28 Oct) · Jan v0.8.8 (28 Oct) · Open WebUI v0.12.5 (29 Oct) · oMLX v0.7.3rc1 (27 Oct) · AnythingLLM v1.19.0 (26 Oct) · Msty Studio 3.0.0 Beta 15 (7 Oct) · Chatbox v1.23.5 (24 Sep 2026). None is more than 3 months old, so no stale warning applies.',
          '**Apple Silicon only:** LM Studio and oMLX. Intel Macs still run Ollama (CPU-only) and AnythingLLM.',
          '**Fully local by design:** LM Studio, Ollama, Jan, oMLX. **Can also use cloud providers:** Msty, Chatbox, Open WebUI, AnythingLLM.',
          '**No benchmarks:** PromptQuorum did not measure tokens per second on Mac for these apps; this guide compares facts from official sources.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Which Mac App Should You Install First?',
        content:
          '**Start with LM Studio if you want a window, a model browser and no terminal; start with Ollama if you are comfortable with the command line or want a local API for other tools.** Both are free and run models on your Mac. Add Open WebUI or AnythingLLM later if you want a browser interface or document chat on top of the same models.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For most Mac users in 2026, install LM Studio (free, Apple Silicon, macOS 14+) and download a small model; use Ollama if you prefer the terminal or need a local API.',
          },
          {
            type: 'plain-terms',
            text: 'LM Studio is a normal Mac app with buttons. Ollama is a background service you drive from the terminal or other apps. Pick the one that matches how you like to work; you can install both.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Mac App Comparison Table',
        content:
          '**The eight apps differ on three things: how you use them (window, terminal or browser), whether they can reach cloud models, and which Macs they support.** Versions and license terms were read from official project pages on 2026-10-31.',
        columns: ['App', 'Cost / license', 'Mac requirement', 'Interface', 'Best for'],
        rows: [
          { 'App': '[LM Studio](https://lmstudio.ai)', 'Cost / license': 'Free (closed source)', 'Mac requirement': 'Apple Silicon, macOS 14+', 'Interface': 'Desktop app', 'Best for': 'Easiest first install' },
          { 'App': '[Ollama](https://ollama.com)', 'Cost / license': 'Free (MIT)', 'Mac requirement': 'macOS 14+; Intel CPU-only', 'Interface': 'CLI, API, app', 'Best for': 'Developers, local API' },
          { 'App': '[Jan](https://jan.ai)', 'Cost / license': 'Free (open source)', 'Mac requirement': 'macOS 13.6+ (README)', 'Interface': 'Desktop app', 'Best for': 'Open-source chat' },
          { 'App': '[Msty](https://msty.ai)', 'Cost / license': 'Freemium (closed source)', 'Mac requirement': 'Not published (check msty.ai)', 'Interface': 'Desktop app', 'Best for': 'Multi-model chat' },
          { 'App': '[AnythingLLM](https://anythingllm.com)', 'Cost / license': 'Free (MIT)', 'Mac requirement': 'Apple Silicon and Intel installers', 'Interface': 'Desktop app, web', 'Best for': 'Chat with documents' },
          { 'App': '[Open WebUI](https://openwebui.com)', 'Cost / license': 'Free (custom BSD-based)', 'Mac requirement': 'Any Mac via browser', 'Interface': 'Browser (Docker/pip)', 'Best for': 'Browser chat UI' },
          { 'App': '[oMLX](https://omlx.ai)', 'Cost / license': 'Free (Apache-2.0)', 'Mac requirement': 'Apple Silicon, macOS 15+', 'Interface': 'Mac app, server', 'Best for': 'MLX inference' },
          { 'App': '[Chatbox](https://chatboxai.app)', 'Cost / license': 'Free (GPL-3.0)', 'Mac requirement': 'macOS app (see chatboxai.app)', 'Interface': 'Desktop app, web', 'Best for': 'Lightweight client' },
        ],
        note:
          'Mac requirements come from each project\'s own documentation. Where a project does not publish one, the table says so instead of guessing.',
      },
      lmstudio: {
        id: 'lmstudio',
        title: 'LM Studio: Easiest Graphical App',
        content:
          '**LM Studio is the easiest way to run a model on a Mac with a normal app window.** It includes a model browser, a chat view and a local server mode. Full review: [LM Studio review](/power-local-llm/lm-studio-review).',
        items: [
          '**What it is:** a free graphical app for running local models; the LM Studio site describes its runtime as MLX and llama.cpp under the hood. It is closed source and free for personal and business use according to the directory record.',
          '**Latest release (checked 31 Oct 2026):** 0.4.28, 31 Oct 2026 ([source](https://lmstudio.ai/changelog/lmstudio)).',
          '**Mac requirement:** Apple Silicon (M1 to M4 listed) and macOS 14 or later, per the LM Studio system requirements page. Intel Macs are not supported.',
          '**Best for:** first-time users who want to browse, download and chat without a terminal.',
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Ollama: Command Line, API and Desktop App',
        content:
          '**Ollama is the default choice for terminal users and for anything that needs a local model API.** It runs as a background service with a command line, an HTTP API and a desktop app. Full review: [Ollama review](/power-local-llm/ollama-review). Setup guide: [Ollama on Mac](/local-llms/ollama-on-mac-apple-silicon-setup-2026).',
        items: [
          '**What it is:** an MIT-licensed runtime. Install by mounting the disk image or with Homebrew (`brew install ollama`; the formula exists in Homebrew).',
          '**Latest release (checked 31 Oct 2026):** v0.40.13, 28 Oct 2026 ([source](https://github.com/ollama/ollama/releases)).',
          '**Mac requirement:** macOS Sonoma (14) or newer; Apple M-series chips get CPU and GPU support, Intel Macs run on the CPU only (Ollama macOS docs).',
          '**Best for:** developers, scripting, and as the backend for Open WebUI or other chat apps.',
        ],
      },
      jan: {
        id: 'jan',
        title: 'Jan: Open-Source Chat App',
        content:
          '**Jan is a free, open-source desktop chat app that runs models locally.** It looks like a chat assistant and downloads models for you. Full review: [Jan review](/power-local-llm/jan-review).',
        items: [
          '**What it is:** an open-source desktop app (the directory lists an Apache 2.0 variant license) with a macOS universal download.',
          '**Latest release (checked 31 Oct 2026):** v0.8.8, 28 Oct 2026 ([source](https://github.com/janhq/jan/releases)).',
          '**Mac requirement:** its README lists macOS 13.6 or later, with about 8 GB of RAM for 3B models and 16 GB for 7B models.',
          '**Best for:** users who want an open-source alternative to a hosted chat assistant.',
        ],
      },
      msty: {
        id: 'msty',
        title: 'Msty: Multi-Model Chat',
        content:
          '**Msty is a polished chat app that can talk to local models and to cloud providers in the same window.** It is closed source with a free tier. Full review: [Msty review](/power-local-llm/msty-review).',
        items: [
          '**What it is:** a desktop chat client by CloudStack, LLC; the changelog is published at msty.ai. The directory lists it as freemium and closed source.',
          '**Latest release (checked 31 Oct 2026):** Msty Studio 3.0.0 Beta 15, 7 Oct 2026 ([source](https://msty.ai/changelog)).',
          '**Mac requirement:** not published on the pages PromptQuorum checked; confirm on msty.ai before installing.',
          '**Best for:** people who want one interface for several providers and models.',
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: 'AnythingLLM: Chat With Your Documents',
        content:
          '**AnythingLLM is the pick when you want to ask questions about your own files.** It bundles a vector store and document chat. Full review: [AnythingLLM review](/power-local-llm/anythingllm-review).',
        items: [
          '**What it is:** an MIT-licensed app with a desktop version and a Docker version; it can use local models or cloud providers.',
          '**Latest release (checked 31 Oct 2026):** v1.19.0, 26 Oct 2026 ([source](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          '**Mac requirement:** the official macOS install page offers separate installers for Apple Silicon and Intel Macs.',
          '**Best for:** private document Q&A on a laptop.',
        ],
      },
      openwebui: {
        id: 'openwebui',
        title: 'Open WebUI: Browser Chat Interface',
        content:
          '**Open WebUI gives you a ChatGPT-style web interface for local models, but it does not run models itself.** Pair it with Ollama. Full review: [Open WebUI review](/local-llms/open-webui-review). Alternatives: [Best local LLM frontends](/local-llms/best-local-llm-frontends).',
        items: [
          '**What it is:** a self-hosted web app, installed with Docker or pip. Since v0.6.6 it uses a modified BSD-3-Clause license with a branding clause, which the project says is not OSI-approved; it stays free to run.',
          '**Latest release (checked 31 Oct 2026):** v0.12.5, 29 Oct 2026 ([source](https://github.com/open-webui/open-webui/releases)).',
          '**Mac requirement:** none beyond Docker or Python; any Mac with a browser can open it, and models run in the backend you connect.',
          '**Best for:** a browser interface for one or several users on top of Ollama.',
        ],
      },
      omlx: {
        id: 'omlx',
        title: 'oMLX: MLX Inference Server for Apple Silicon',
        content:
          '**oMLX is for people who want Apple\'s MLX framework behind a local server and a Mac app.** Full review: [oMLX review](/power-local-llm/omlx-review). Background: [MLX vs Ollama vs llama.cpp on Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        items: [
          '**What it is:** an Apache-2.0 MLX-based inference server with a macOS app that installs a small command-line shim.',
          '**Latest release (checked 31 Oct 2026):** v0.7.3rc1, 27 Oct 2026 ([source](https://github.com/jundot/omlx/releases)).',
          '**Mac requirement:** Apple Silicon (M1 to M5) and macOS 15.0 or later (project README). The latest GitHub tag, v0.7.3rc1, is a release candidate.',
          '**Best for:** Apple-native inference and local coding agents.',
        ],
      },
      chatbox: {
        id: 'chatbox',
        title: 'Chatbox: Lightweight Client',
        content:
          '**Chatbox is a small cross-platform chat client for local and cloud models.** Full review: [Chatbox review](/local-llms/chatbox-review).',
        items: [
          '**What it is:** a desktop and web client; the Community Edition is open-sourced under GPL-3.0.',
          '**Latest release (checked 31 Oct 2026):** v1.23.5, 24 Sep 2026 ([source](https://github.com/chatboxai/chatbox/releases)).',
          '**Mac requirement:** the project provides a macOS download; see chatboxai.app for the current requirement.',
          '**Best for:** a light client that connects to an Ollama or LM Studio server.',
        ],
      },
      memory: {
        id: 'memory',
        title: 'How Much Mac Memory Do You Need?',
        content:
          '**Unified memory is the limit, whichever app you pick.** The app changes the interface, not how much memory a model needs.',
        items: [
          'Jan\'s README gives a starting guide: about 8 GB of RAM for 3B models, 16 GB for 7B models and 32 GB for 13B models.',
          'Larger quantized models need more memory; check the model card before downloading, and leave memory free for macOS.',
          'For hardware advice by Mac model see [Best Mac for Local AI](/power-local-llm/best-mac-for-local-ai-2026) and [Best Ollama models for Apple Silicon](/local-llms/best-models-apple-silicon-2026).',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Installing LM Studio or oMLX on an Intel Mac.** Both require Apple Silicon. Use Ollama (CPU-only on Intel) or AnythingLLM instead.',
          '**Expecting Open WebUI to run models.** It is only the interface; install Ollama or another backend first.',
          '**Assuming every chat app is fully local.** Msty, Chatbox, Open WebUI and AnythingLLM can also connect to cloud providers; check the provider setting before sending private text.',
          '**Downloading a model larger than your memory.** The app will install it, but responses will be slow or fail. Start with a small model and move up.',
          '**Installing five apps with separate model folders.** Each app can store its own copy of the same model; pick one or two apps to save disk space.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'LM Studio — [lmstudio.ai](https://lmstudio.ai) (latest release 0.4.28, 31 Oct 2026; [release notes](https://lmstudio.ai/changelog/lmstudio)).',
          'Ollama — [ollama.com](https://ollama.com) (latest release v0.40.13, 28 Oct 2026; [release notes](https://github.com/ollama/ollama/releases)).',
          'Jan — [jan.ai](https://jan.ai) (latest release v0.8.8, 28 Oct 2026; [release notes](https://github.com/janhq/jan/releases)).',
          'Msty — [msty.ai](https://msty.ai) (latest release Msty Studio 3.0.0 Beta 15, 7 Oct 2026; [release notes](https://msty.ai/changelog)).',
          'AnythingLLM — [anythingllm.com](https://anythingllm.com) (latest release v1.19.0, 26 Oct 2026; [release notes](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          'Open WebUI — [openwebui.com](https://openwebui.com) (latest release v0.12.5, 29 Oct 2026; [release notes](https://github.com/open-webui/open-webui/releases)).',
          'oMLX — [omlx.ai](https://omlx.ai) (latest release v0.7.3rc1, 27 Oct 2026; [release notes](https://github.com/jundot/omlx/releases)).',
          'Chatbox — [chatboxai.app](https://chatboxai.app) (latest release v1.23.5, 24 Sep 2026; [release notes](https://github.com/chatboxai/chatbox/releases)).',
          'LM Studio system requirements — [lmstudio.ai/docs/app/system-requirements](https://lmstudio.ai/docs/app/system-requirements) (Apple Silicon, macOS 14).',
          'Ollama macOS documentation — [github.com/ollama/ollama](https://github.com/ollama/ollama/blob/main/docs/macos.mdx) (macOS 14+, M-series or x86 CPU-only) and the [Homebrew formula](https://formulae.brew.sh/formula/ollama).',
          'Jan README — [github.com/janhq/jan](https://github.com/janhq/jan) (macOS 13.6+, RAM guide).',
          'oMLX README — [github.com/jundot/omlx](https://github.com/jundot/omlx) (macOS 15+, Apple Silicon, Apache-2.0).',
          'AnythingLLM macOS installation — [docs.anythingllm.com](https://docs.anythingllm.com/installation-desktop/macos) (Apple Silicon and Intel installers).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the best local AI app for Mac?',
            a: 'LM Studio is the easiest first app (free, Apple Silicon, macOS 14+). Ollama is the best fit for terminal users and developers. Jan is a good open-source chat app. The best choice depends on whether you want a window, a command line or a browser interface.',
          },
          {
            q: 'What are the best LM Studio alternatives on Mac?',
            a: 'Ollama (command line and API), Jan (open-source chat app), Msty (multi-model chat), AnythingLLM (document chat) and Chatbox (lightweight client). Open WebUI is a browser interface that pairs with Ollama rather than a direct replacement.',
          },
          {
            q: 'Can I install Ollama with Homebrew?',
            a: 'Yes. Homebrew has an ollama formula, so `brew install ollama` works. You can also mount the official disk image and drag Ollama to Applications.',
          },
          {
            q: 'Do these apps work on Intel Macs?',
            a: 'Some do. LM Studio and oMLX require Apple Silicon. Ollama runs on Intel Macs in CPU-only mode, and AnythingLLM publishes an Intel installer. Open WebUI runs in a browser, but the backend you connect still needs to run somewhere.',
          },
          {
            q: 'Are these apps free?',
            a: 'LM Studio, Ollama, Jan, AnythingLLM, Open WebUI, oMLX and Chatbox are free to download; Msty has a free tier and paid options. License terms differ: Ollama and AnythingLLM are MIT, oMLX is Apache-2.0, Chatbox Community Edition is GPL-3.0, LM Studio and Msty are closed source.',
          },
          {
            q: 'Which app should I pick for chatting with my own documents?',
            a: 'AnythingLLM is built for that: a document chat feature with a bundled vector store. Open WebUI also supports document chat once connected to a backend such as Ollama.',
          },
          {
            q: 'Do I need Open WebUI if I already use Ollama?',
            a: 'No. Ollama works from the terminal and from its own desktop app. Open WebUI adds a browser interface, multiple users and extra features on top of Ollama.',
          },
          {
            q: 'Does a local LLM on Mac work offline?',
            a: 'Yes for the models you have downloaded. LM Studio, Ollama, Jan and oMLX run models on your Mac. Features that call cloud providers or web search in Msty, Chatbox, Open WebUI and AnythingLLM need an internet connection.',
          },
          {
            q: 'How much RAM do I need?',
            a: 'It depends on the model, not the app. Jan\'s README suggests about 8 GB of RAM for 3B models and 16 GB for 7B models. Larger models need more; check each model card.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Mac for Local AI](/power-local-llm/best-mac-for-local-ai-2026) — which Mac to buy for local models.',
          '[Ollama on Mac: Apple Silicon Setup](/local-llms/ollama-on-mac-apple-silicon-setup-2026) — install and first model.',
          '[MLX vs Ollama vs llama.cpp on Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — engine comparison.',
          '[Best Ollama Models for Apple Silicon](/local-llms/best-models-apple-silicon-2026) — models by memory size.',
          '[LM Studio vs Jan vs GPT4All](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — desktop app comparison.',
          '[Best Local LLM Frontends](/local-llms/best-local-llm-frontends) — browser and desktop chat interfaces for Ollama.',
          '[Best Local LLM Apps for iPhone](/power-local-llm/best-local-llm-apps-iphone-2026) — the iPhone equivalent.',
          '[Local LLM Software Directory](/directory) — every local LLM app, filterable by Mac.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    last_full_refresh: '2026-10-31',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    designSkin: 'hub',
    title: 'Die besten lokalen LLM-Apps für den Mac 2026: LM Studio, Ollama, Jan und 5 weitere',
    seoTitle: 'Beste lokale LLM-Apps für den Mac 2026: 8 im Vergleich',
    intro:
      'Acht Apps decken 2026 fast alle Wege ab, ein LLM auf dem Mac auszuführen: LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX und Chatbox. Dieser Leitfaden vergleicht Kosten, Lizenz, Mac-Voraussetzungen und Stärken jeder App; die aktuelle Version wurde jeweils aus der offiziellen Quelle gelesen.',
    metaDescription:
      '8 lokale LLM-Apps für den Mac im Vergleich: LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox. Kosten, Lizenz, Apple Silicon, Einsatz.',
    heroImage: '/images/best-local-llm-apps-mac-hero-de.webp',
    twitterDescription:
      'Beste lokale LLM-Apps für den Mac 2026: LM Studio (einfachste Oberfläche), Ollama (CLI + API), Jan, Msty, AnythingLLM (Dokumente), Open WebUI, oMLX (MLX), Chatbox.',
    audience:
      'Mac-Nutzer, die KI-Modelle auf dem eigenen Rechner ausführen möchten, von Einsteigern mit der ersten App bis zu Entwicklern, die eine lokale API brauchen.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'lokale LLM-App für den Mac',
    targetKeywords: [
      'beste lokale ki für mac',
      'lokale llm apps mac',
      'lm studio alternativen mac',
      'ollama mac',
      'llm auf dem mac ausführen',
      'homebrew llm',
      'lokale ki software mac',
      'llm tools mac',
    ],
    leadAnswerBlock:
      '**Für die meisten Mac-Nutzer ist LM Studio (kostenlose grafische App, Apple Silicon, macOS 14+) mit einem kleinen Modell der beste Start; Ollama passt, wenn Sie Kommandozeile und lokale API möchten, Jan als Open-Source-Chat-App.** AnythingLLM, Open WebUI, Msty, oMLX und Chatbox decken Dokumente, Browser-Zugriff, Multi-Modell-Chat, Apple MLX und einen schlanken Client ab.',
    quickAnswerTop: {
      de: {
        question: 'Was ist 2026 die beste lokale LLM-App für den Mac?',
        answer:
          'LM Studio ist der einfachste Einstieg: eine kostenlose grafische App, die einen Apple-Silicon-Mac und macOS 14 oder neuer braucht und einen eingebauten Modellbrowser hat. Ollama ist die Wahl für Terminal-Nutzer und Entwickler (MIT, macOS 14+, Installation per Homebrew in einer Zeile). Jan ist eine kostenlose Open-Source-Chat-App. Die übrigen fünf Apps decken Dokumente (AnythingLLM), eine Browser-Oberfläche (Open WebUI), Multi-Modell-Chat (Msty), Apple-MLX-Tempo (oMLX) und einen schlanken Client (Chatbox) ab.',
        bullets: [
          'LM Studio — kostenlose grafische App, nur Apple Silicon, macOS 14+. Einfachste Erstinstallation.',
          'Ollama — MIT, macOS 14+, GPU-Unterstützung für Apple-M-Chips (Intel-Macs nur CPU). CLI, lokale API und Desktop-App.',
          'Jan — kostenlose Open-Source-Desktop-Chat-App, führt Modelle auf Ihrem Mac aus.',
          'AnythingLLM — MIT, Desktop-Installer für Apple Silicon und Intel; Chat mit eigenen Dokumenten.',
          'Open WebUI — Chat-Oberfläche im Browser, die sich mit Ollama und anderen Backends verbindet; Installation mit Docker oder pip.',
          'oMLX — Apache-2.0, nur Apple Silicon, macOS 15+; MLX-basierter Inferenzserver mit Mac-App.',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Welche Mac-App sollten Sie zuerst installieren?', anchor: '#which-app' },
      { label: 'Vergleichstabelle der Mac-Apps', anchor: '#comparison-table' },
      { label: 'LM Studio: einfachste grafische App', anchor: '#lmstudio' },
      { label: 'Ollama: Kommandozeile, API und Desktop-App', anchor: '#ollama' },
      { label: 'Jan: Open-Source-Chat-App', anchor: '#jan' },
      { label: 'Msty: Chat mit mehreren Modellen', anchor: '#msty' },
      { label: 'AnythingLLM: Chat mit Ihren Dokumenten', anchor: '#anythingllm' },
      { label: 'Open WebUI: Chat-Oberfläche im Browser', anchor: '#openwebui' },
      { label: 'oMLX: MLX-Inferenzserver für Apple Silicon', anchor: '#omlx' },
      { label: 'Chatbox: schlanker Client', anchor: '#chatbox' },
      { label: 'Wie viel Arbeitsspeicher braucht Ihr Mac?', anchor: '#memory' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**LM Studio ist der einfachste Einstieg auf dem Mac.** Kostenlose grafische App mit Modellbrowser; sie braucht einen Apple-Silicon-Mac und macOS 14 oder neuer (LM-Studio-Dokumentation).',
          '**Ollama ist der Standard für Terminal-Nutzer und Entwickler.** MIT-Lizenz, macOS 14+, nutzt die GPU von Apple-M-Chips (Intel-Macs nur CPU) und lässt sich per Disk-Image oder `brew install ollama` installieren.',
          '**Jan ist die Open-Source-Chat-App.** Kostenlose Desktop-App, die Modelle lokal ausführt; laut README ab macOS 13.6.',
          '**AnythingLLM passt für eigene Dokumente.** MIT-Lizenz, Desktop-Installer für Apple Silicon und Intel-Macs, eingebauter Dokumenten-Chat.',
          '**Open WebUI ist eine Browser-Oberfläche, kein Modell-Runner.** Es verbindet sich mit Ollama oder anderen Backends; Installation mit Docker oder pip.',
          '**Msty und Chatbox sind Chat-Clients für mehrere Anbieter.** Beide können lokale Modelle und Cloud-Anbieter nutzen; prüfen Sie die Anbieter-Einstellung, wenn Datenschutz wichtig ist.',
          '**oMLX ist für Apple-natives Tempo.** Apache-2.0-MLX-Inferenzserver für Apple Silicon mit Mac-App; erfordert macOS 15 oder neuer.',
          '**Der Arbeitsspeicher bestimmt die Modellgröße, nicht die App.** Das README von Jan nennt etwa 8 GB RAM für 3B-Modelle und 16 GB für 7B-Modelle; jede App dieser Liste stößt an dieselbe Grenze.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Verglichene Apps:** LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox.',
          '**Aktuelle Upstream-Releases (geprüft am 31. Okt. 2026):** LM Studio 0.4.28 (31. Okt. 2026) · Ollama v0.40.13 (28. Okt.) · Jan v0.8.8 (28. Okt.) · Open WebUI v0.12.5 (29. Okt.) · oMLX v0.7.3rc1 (27. Okt.) · AnythingLLM v1.19.0 (26. Okt.) · Msty Studio 3.0.0 Beta 15 (7. Okt.) · Chatbox v1.23.5 (24. Sept. 2026). Keine App ist älter als 3 Monate, daher gilt keine Veraltet-Warnung.',
          '**Nur Apple Silicon:** LM Studio und oMLX. Intel-Macs führen weiterhin Ollama (nur CPU) und AnythingLLM aus.',
          '**Von Grund auf lokal:** LM Studio, Ollama, Jan, oMLX. **Können auch Cloud-Anbieter nutzen:** Msty, Chatbox, Open WebUI, AnythingLLM.',
          '**Keine Benchmarks:** PromptQuorum hat die Token pro Sekunde dieser Apps auf dem Mac nicht gemessen; dieser Leitfaden vergleicht Fakten aus offiziellen Quellen.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Welche Mac-App sollten Sie zuerst installieren?',
        content:
          '**Beginnen Sie mit LM Studio, wenn Sie ein Fenster, einen Modellbrowser und kein Terminal möchten; beginnen Sie mit Ollama, wenn Sie die Kommandozeile mögen oder eine lokale API für andere Tools brauchen.** Beide sind kostenlos und führen Modelle auf Ihrem Mac aus. Ergänzen Sie später Open WebUI oder AnythingLLM, wenn Sie eine Browser-Oberfläche oder Dokumenten-Chat auf denselben Modellen wünschen.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Für die meisten Mac-Nutzer ist 2026 LM Studio (kostenlos, Apple Silicon, macOS 14+) mit einem kleinen Modell der beste Start; Ollama passt, wenn Sie das Terminal bevorzugen oder eine lokale API brauchen.',
          },
          {
            type: 'plain-terms',
            text: 'LM Studio ist eine normale Mac-App mit Schaltflächen. Ollama ist ein Hintergrunddienst, den Sie über das Terminal oder andere Apps steuern. Wählen Sie, was zu Ihrer Arbeitsweise passt; Sie können auch beide installieren.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Vergleichstabelle der Mac-Apps',
        content:
          '**Die acht Apps unterscheiden sich in drei Punkten: wie Sie sie bedienen (Fenster, Terminal oder Browser), ob sie Cloud-Modelle erreichen können und welche Macs sie unterstützen.** Versionen und Lizenzbedingungen wurden am 31. Okt. 2026 von den offiziellen Projektseiten gelesen.',
        columns: ['App', 'Kosten / Lizenz', 'Mac-Voraussetzung', 'Oberfläche', 'Am besten für'],
        rows: [
          { 'App': '[LM Studio](https://lmstudio.ai)', 'Kosten / Lizenz': 'Kostenlos (Closed Source)', 'Mac-Voraussetzung': 'Apple Silicon, macOS 14+', 'Oberfläche': 'Desktop-App', 'Am besten für': 'Einfachste Erstinstallation' },
          { 'App': '[Ollama](https://ollama.com)', 'Kosten / Lizenz': 'Kostenlos (MIT)', 'Mac-Voraussetzung': 'macOS 14+; Intel nur CPU', 'Oberfläche': 'CLI, API, App', 'Am besten für': 'Entwickler, lokale API' },
          { 'App': '[Jan](https://jan.ai)', 'Kosten / Lizenz': 'Kostenlos (Open Source)', 'Mac-Voraussetzung': 'macOS 13.6+ (README)', 'Oberfläche': 'Desktop-App', 'Am besten für': 'Open-Source-Chat' },
          { 'App': '[Msty](https://msty.ai)', 'Kosten / Lizenz': 'Freemium (Closed Source)', 'Mac-Voraussetzung': 'Nicht veröffentlicht (msty.ai)', 'Oberfläche': 'Desktop-App', 'Am besten für': 'Chat mit mehreren Modellen' },
          { 'App': '[AnythingLLM](https://anythingllm.com)', 'Kosten / Lizenz': 'Kostenlos (MIT)', 'Mac-Voraussetzung': 'Installer für Apple Silicon und Intel', 'Oberfläche': 'Desktop-App, Web', 'Am besten für': 'Chat mit Dokumenten' },
          { 'App': '[Open WebUI](https://openwebui.com)', 'Kosten / Lizenz': 'Kostenlos (BSD-basiert, angepasst)', 'Mac-Voraussetzung': 'Jeder Mac über den Browser', 'Oberfläche': 'Browser (Docker/pip)', 'Am besten für': 'Chat-Oberfläche im Browser' },
          { 'App': '[oMLX](https://omlx.ai)', 'Kosten / Lizenz': 'Kostenlos (Apache-2.0)', 'Mac-Voraussetzung': 'Apple Silicon, macOS 15+', 'Oberfläche': 'Mac-App, Server', 'Am besten für': 'MLX-Inferenz' },
          { 'App': '[Chatbox](https://chatboxai.app)', 'Kosten / Lizenz': 'Kostenlos (GPL-3.0)', 'Mac-Voraussetzung': 'macOS-App (siehe chatboxai.app)', 'Oberfläche': 'Desktop-App, Web', 'Am besten für': 'Schlanker Client' },
        ],
        note:
          'Die Mac-Voraussetzungen stammen aus der Dokumentation des jeweiligen Projekts. Wo ein Projekt keine nennt, steht das in der Tabelle, statt zu raten.',
      },
      lmstudio: {
        id: 'lmstudio',
        title: 'LM Studio: einfachste grafische App',
        content:
          '**LM Studio ist der einfachste Weg, auf dem Mac ein Modell in einem normalen App-Fenster auszuführen.** Es bietet einen Modellbrowser, eine Chat-Ansicht und einen lokalen Servermodus. Vollständiger Test: [LM-Studio-Review](/de/power-local-llm/lm-studio-review).',
        items: [
          '**Was es ist:** eine kostenlose grafische App für lokale Modelle; die LM-Studio-Website beschreibt die Runtime als MLX und llama.cpp unter der Haube. Sie ist Closed Source und laut Verzeichniseintrag für private und geschäftliche Nutzung kostenlos.',
          '**Aktuelle Version (geprüft am 31 Okt. 2026):** 0.4.28, 31 Okt. 2026 ([Quelle](https://lmstudio.ai/changelog/lmstudio)).',
          '**Mac-Voraussetzung:** Apple Silicon (M1 bis M4 genannt) und macOS 14 oder neuer, laut Seite zu den LM-Studio-Systemanforderungen. Intel-Macs werden nicht unterstützt.',
          '**Am besten für:** Einsteiger, die ohne Terminal Modelle suchen, laden und chatten möchten.',
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Ollama: Kommandozeile, API und Desktop-App',
        content:
          '**Ollama ist die Standardwahl für Terminal-Nutzer und für alles, was eine lokale Modell-API braucht.** Es läuft als Hintergrunddienst mit Kommandozeile, HTTP-API und Desktop-App. Vollständiger Test: [Ollama-Review](/de/power-local-llm/ollama-review). Einrichtung: [Ollama auf dem Mac](/de/local-llms/ollama-on-mac-apple-silicon-setup-2026).',
        items: [
          '**Was es ist:** eine Runtime unter MIT-Lizenz. Installation über das Disk-Image oder mit Homebrew (`brew install ollama`; die Formel existiert in Homebrew).',
          '**Aktuelle Version (geprüft am 31 Okt. 2026):** v0.40.13, 28 Okt. 2026 ([Quelle](https://github.com/ollama/ollama/releases)).',
          '**Mac-Voraussetzung:** macOS Sonoma (14) oder neuer; Apple-M-Chips erhalten CPU- und GPU-Unterstützung, Intel-Macs laufen nur auf der CPU (Ollama-macOS-Dokumentation).',
          '**Am besten für:** Entwickler, Skripte und als Backend für Open WebUI oder andere Chat-Apps.',
        ],
      },
      jan: {
        id: 'jan',
        title: 'Jan: Open-Source-Chat-App',
        content:
          '**Jan ist eine kostenlose Open-Source-Desktop-Chat-App, die Modelle lokal ausführt.** Sie wirkt wie ein Chat-Assistent und lädt Modelle für Sie herunter. Vollständiger Test: [Jan-Review](/de/power-local-llm/jan-review).',
        items: [
          '**Was es ist:** eine Open-Source-Desktop-App (das Verzeichnis nennt eine Apache-2.0-Variante als Lizenz) mit einem macOS-Universal-Download.',
          '**Aktuelle Version (geprüft am 31 Okt. 2026):** v0.8.8, 28 Okt. 2026 ([Quelle](https://github.com/janhq/jan/releases)).',
          '**Mac-Voraussetzung:** laut README macOS 13.6 oder neuer, mit etwa 8 GB RAM für 3B-Modelle und 16 GB für 7B-Modelle.',
          '**Am besten für:** Nutzer, die eine Open-Source-Alternative zu einem gehosteten Chat-Assistenten möchten.',
        ],
      },
      msty: {
        id: 'msty',
        title: 'Msty: Chat mit mehreren Modellen',
        content:
          '**Msty ist eine ausgereifte Chat-App, die im selben Fenster mit lokalen Modellen und Cloud-Anbietern spricht.** Sie ist Closed Source mit kostenloser Stufe. Vollständiger Test: [Msty-Review](/de/power-local-llm/msty-review).',
        items: [
          '**Was es ist:** ein Desktop-Chat-Client von CloudStack, LLC; das Changelog steht auf msty.ai. Das Verzeichnis führt ihn als Freemium und Closed Source.',
          '**Aktuelle Version (geprüft am 31 Okt. 2026):** Msty Studio 3.0.0 Beta 15, 7 Okt. 2026 ([Quelle](https://msty.ai/changelog)).',
          '**Mac-Voraussetzung:** auf den von PromptQuorum geprüften Seiten nicht veröffentlicht; bitte vor der Installation auf msty.ai prüfen.',
          '**Am besten für:** Menschen, die eine Oberfläche für mehrere Anbieter und Modelle wünschen.',
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: 'AnythingLLM: Chat mit Ihren Dokumenten',
        content:
          '**AnythingLLM ist die Wahl, wenn Sie Fragen zu Ihren eigenen Dateien stellen möchten.** Es bringt einen Vektorspeicher und Dokumenten-Chat mit. Vollständiger Test: [AnythingLLM-Review](/de/power-local-llm/anythingllm-review).',
        items: [
          '**Was es ist:** eine App unter MIT-Lizenz mit Desktop- und Docker-Version; sie kann lokale Modelle oder Cloud-Anbieter nutzen.',
          '**Aktuelle Version (geprüft am 31 Okt. 2026):** v1.19.0, 26 Okt. 2026 ([Quelle](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          '**Mac-Voraussetzung:** die offizielle macOS-Installationsseite bietet getrennte Installer für Apple Silicon und Intel-Macs.',
          '**Am besten für:** privates Dokumenten-Frage-Antwort auf einem Laptop.',
        ],
      },
      openwebui: {
        id: 'openwebui',
        title: 'Open WebUI: Chat-Oberfläche im Browser',
        content:
          '**Open WebUI bietet eine ChatGPT-ähnliche Weboberfläche für lokale Modelle, führt Modelle aber nicht selbst aus.** Kombinieren Sie es mit Ollama. Vollständiger Test: [Open-WebUI-Review](/de/local-llms/open-webui-review). Alternativen: [Beste lokale LLM-Frontends](/de/local-llms/best-local-llm-frontends).',
        items: [
          '**Was es ist:** eine selbst gehostete Web-App, installiert mit Docker oder pip. Seit v0.6.6 gilt eine angepasste BSD-3-Clause-Lizenz mit Branding-Klausel, die laut Projekt nicht von der OSI anerkannt ist; die Nutzung bleibt kostenlos.',
          '**Aktuelle Version (geprüft am 31 Okt. 2026):** v0.12.5, 29 Okt. 2026 ([Quelle](https://github.com/open-webui/open-webui/releases)).',
          '**Mac-Voraussetzung:** außer Docker oder Python keine; jeder Mac mit Browser kann es öffnen, die Modelle laufen im angebundenen Backend.',
          '**Am besten für:** eine Browser-Oberfläche für einen oder mehrere Nutzer auf Basis von Ollama.',
        ],
      },
      omlx: {
        id: 'omlx',
        title: 'oMLX: MLX-Inferenzserver für Apple Silicon',
        content:
          '**oMLX ist für alle, die Apples MLX-Framework hinter einem lokalen Server und einer Mac-App nutzen möchten.** Vollständiger Test: [oMLX-Review](/de/power-local-llm/omlx-review). Hintergrund: [MLX vs. Ollama vs. llama.cpp auf dem Mac](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        items: [
          '**Was es ist:** ein MLX-basierter Inferenzserver unter Apache-2.0 mit macOS-App, die ein kleines Kommandozeilen-Shim installiert.',
          '**Aktuelle Version (geprüft am 31 Okt. 2026):** v0.7.3rc1, 27 Okt. 2026 ([Quelle](https://github.com/jundot/omlx/releases)).',
          '**Mac-Voraussetzung:** Apple Silicon (M1 bis M5) und macOS 15.0 oder neuer (Projekt-README). Das neueste GitHub-Tag v0.7.3rc1 ist ein Release Candidate.',
          '**Am besten für:** Apple-native Inferenz und lokale Coding-Agenten.',
        ],
      },
      chatbox: {
        id: 'chatbox',
        title: 'Chatbox: schlanker Client',
        content:
          '**Chatbox ist ein kleiner plattformübergreifender Chat-Client für lokale und Cloud-Modelle.** Vollständiger Test: [Chatbox-Review](/de/local-llms/chatbox-review).',
        items: [
          '**Was es ist:** ein Desktop- und Web-Client; die Community Edition ist unter GPL-3.0 als Open Source veröffentlicht.',
          '**Aktuelle Version (geprüft am 31 Okt. 2026):** v1.23.5, 24 Sept. 2026 ([Quelle](https://github.com/chatboxai/chatbox/releases)).',
          '**Mac-Voraussetzung:** das Projekt bietet einen macOS-Download; die aktuelle Voraussetzung steht auf chatboxai.app.',
          '**Am besten für:** einen schlanken Client, der sich mit einem Ollama- oder LM-Studio-Server verbindet.',
        ],
      },
      memory: {
        id: 'memory',
        title: 'Wie viel Arbeitsspeicher braucht Ihr Mac?',
        content:
          '**Der einheitliche Arbeitsspeicher setzt die Grenze, egal welche App Sie wählen.** Die App ändert die Oberfläche, nicht den Speicherbedarf eines Modells.',
        items: [
          'Das README von Jan gibt eine Faustregel: etwa 8 GB RAM für 3B-Modelle, 16 GB für 7B-Modelle und 32 GB für 13B-Modelle.',
          'Größere quantisierte Modelle brauchen mehr Speicher; prüfen Sie die Modellkarte vor dem Download und lassen Sie Speicher für macOS frei.',
          'Hardware-Empfehlungen nach Mac-Modell finden Sie unter [Bester Mac für lokale KI](/de/power-local-llm/best-mac-for-local-ai-2026) und [Beste Ollama-Modelle für Apple Silicon](/de/local-llms/best-models-apple-silicon-2026).',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**LM Studio oder oMLX auf einem Intel-Mac installieren.** Beide setzen Apple Silicon voraus. Nutzen Sie stattdessen Ollama (auf Intel nur CPU) oder AnythingLLM.',
          '**Erwarten, dass Open WebUI Modelle ausführt.** Es ist nur die Oberfläche; installieren Sie zuerst Ollama oder ein anderes Backend.',
          '**Annehmen, dass jede Chat-App vollständig lokal arbeitet.** Msty, Chatbox, Open WebUI und AnythingLLM können sich auch mit Cloud-Anbietern verbinden; prüfen Sie die Anbieter-Einstellung, bevor Sie private Texte senden.',
          '**Ein Modell laden, das größer ist als Ihr Arbeitsspeicher.** Die App installiert es zwar, aber die Antworten werden langsam oder schlagen fehl. Beginnen Sie klein und steigern Sie sich.',
          '**Fünf Apps mit getrennten Modellordnern installieren.** Jede App kann eine eigene Kopie desselben Modells speichern; wählen Sie ein bis zwei Apps, um Speicherplatz zu sparen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'LM Studio — [lmstudio.ai](https://lmstudio.ai) (aktuelle Version 0.4.28, 31 Okt. 2026; [Release Notes](https://lmstudio.ai/changelog/lmstudio)).',
          'Ollama — [ollama.com](https://ollama.com) (aktuelle Version v0.40.13, 28 Okt. 2026; [Release Notes](https://github.com/ollama/ollama/releases)).',
          'Jan — [jan.ai](https://jan.ai) (aktuelle Version v0.8.8, 28 Okt. 2026; [Release Notes](https://github.com/janhq/jan/releases)).',
          'Msty — [msty.ai](https://msty.ai) (aktuelle Version Msty Studio 3.0.0 Beta 15, 7 Okt. 2026; [Release Notes](https://msty.ai/changelog)).',
          'AnythingLLM — [anythingllm.com](https://anythingllm.com) (aktuelle Version v1.19.0, 26 Okt. 2026; [Release Notes](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          'Open WebUI — [openwebui.com](https://openwebui.com) (aktuelle Version v0.12.5, 29 Okt. 2026; [Release Notes](https://github.com/open-webui/open-webui/releases)).',
          'oMLX — [omlx.ai](https://omlx.ai) (aktuelle Version v0.7.3rc1, 27 Okt. 2026; [Release Notes](https://github.com/jundot/omlx/releases)).',
          'Chatbox — [chatboxai.app](https://chatboxai.app) (aktuelle Version v1.23.5, 24 Sept. 2026; [Release Notes](https://github.com/chatboxai/chatbox/releases)).',
          'Systemanforderungen von LM Studio — [lmstudio.ai/docs/app/system-requirements](https://lmstudio.ai/docs/app/system-requirements) (Apple Silicon, macOS 14).',
          'Ollama-macOS-Dokumentation — [github.com/ollama/ollama](https://github.com/ollama/ollama/blob/main/docs/macos.mdx) (macOS 14+, M-Chip oder x86 nur CPU) und die [Homebrew-Formel](https://formulae.brew.sh/formula/ollama).',
          'Jan-README — [github.com/janhq/jan](https://github.com/janhq/jan) (macOS 13.6+, RAM-Richtwerte).',
          'oMLX-README — [github.com/jundot/omlx](https://github.com/jundot/omlx) (macOS 15+, Apple Silicon, Apache-2.0).',
          'AnythingLLM-macOS-Installation — [docs.anythingllm.com](https://docs.anythingllm.com/installation-desktop/macos) (Installer für Apple Silicon und Intel).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist die beste lokale KI-App für den Mac?',
            a: 'LM Studio ist die einfachste erste App (kostenlos, Apple Silicon, macOS 14+). Ollama passt am besten für Terminal-Nutzer und Entwickler. Jan ist eine gute Open-Source-Chat-App. Die beste Wahl hängt davon ab, ob Sie ein Fenster, eine Kommandozeile oder eine Browser-Oberfläche möchten.',
          },
          {
            q: 'Was sind die besten LM-Studio-Alternativen auf dem Mac?',
            a: 'Ollama (Kommandozeile und API), Jan (Open-Source-Chat-App), Msty (Chat mit mehreren Modellen), AnythingLLM (Dokumenten-Chat) und Chatbox (schlanker Client). Open WebUI ist eine Browser-Oberfläche, die zu Ollama passt, und kein direkter Ersatz.',
          },
          {
            q: 'Kann ich Ollama mit Homebrew installieren?',
            a: 'Ja. Homebrew hat eine ollama-Formel, daher funktioniert `brew install ollama`. Sie können auch das offizielle Disk-Image mounten und Ollama in den Programme-Ordner ziehen.',
          },
          {
            q: 'Laufen diese Apps auf Intel-Macs?',
            a: 'Einige. LM Studio und oMLX setzen Apple Silicon voraus. Ollama läuft auf Intel-Macs nur auf der CPU, und AnythingLLM bietet einen Intel-Installer. Open WebUI läuft im Browser, aber das angebundene Backend muss irgendwo laufen.',
          },
          {
            q: 'Sind diese Apps kostenlos?',
            a: 'LM Studio, Ollama, Jan, AnythingLLM, Open WebUI, oMLX und Chatbox sind kostenlos herunterladbar; Msty hat eine kostenlose Stufe und kostenpflichtige Optionen. Die Lizenzen unterscheiden sich: Ollama und AnythingLLM sind MIT, oMLX ist Apache-2.0, die Chatbox Community Edition ist GPL-3.0, LM Studio und Msty sind Closed Source.',
          },
          {
            q: 'Welche App eignet sich für den Chat mit eigenen Dokumenten?',
            a: 'AnythingLLM ist dafür gebaut: ein Dokumenten-Chat mit mitgeliefertem Vektorspeicher. Auch Open WebUI unterstützt Dokumenten-Chat, sobald es mit einem Backend wie Ollama verbunden ist.',
          },
          {
            q: 'Brauche ich Open WebUI, wenn ich schon Ollama nutze?',
            a: 'Nein. Ollama funktioniert im Terminal und mit der eigenen Desktop-App. Open WebUI ergänzt Ollama um eine Browser-Oberfläche, mehrere Nutzer und weitere Funktionen.',
          },
          {
            q: 'Funktioniert ein lokales LLM auf dem Mac offline?',
            a: 'Ja, für die bereits heruntergeladenen Modelle. LM Studio, Ollama, Jan und oMLX führen Modelle auf Ihrem Mac aus. Funktionen, die Cloud-Anbieter oder Websuche in Msty, Chatbox, Open WebUI und AnythingLLM aufrufen, brauchen eine Internetverbindung.',
          },
          {
            q: 'Wie viel RAM brauche ich?',
            a: 'Das hängt vom Modell ab, nicht von der App. Das README von Jan nennt etwa 8 GB RAM für 3B-Modelle und 16 GB für 7B-Modelle. Größere Modelle brauchen mehr; prüfen Sie die jeweilige Modellkarte.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Bester Mac für lokale KI](/de/power-local-llm/best-mac-for-local-ai-2026) — welcher Mac sich für lokale Modelle eignet.',
          '[Ollama auf dem Mac: Einrichtung für Apple Silicon](/de/local-llms/ollama-on-mac-apple-silicon-setup-2026) — Installation und erstes Modell.',
          '[MLX vs. Ollama vs. llama.cpp auf dem Mac](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — Vergleich der Engines.',
          '[Beste Ollama-Modelle für Apple Silicon](/de/local-llms/best-models-apple-silicon-2026) — Modelle nach Speichergröße.',
          '[LM Studio vs. Jan vs. GPT4All](/de/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — Vergleich der Desktop-Apps.',
          '[Beste lokale LLM-Frontends](/de/local-llms/best-local-llm-frontends) — Chat-Oberflächen im Browser und Desktop für Ollama.',
          '[Beste lokale LLM-Apps für das iPhone](/de/power-local-llm/best-local-llm-apps-iphone-2026) — das Gegenstück für das iPhone.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — jede lokale LLM-App, filterbar nach Mac.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    last_full_refresh: '2026-10-31',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    designSkin: 'hub',
    title: 'Mac向けローカルLLMアプリ2026年版：LM Studio、Ollama、Janほか全8本を比較',
    seoTitle: 'Mac向けローカルLLMアプリ2026年版：8本を比較',
    intro:
      '2026年にMacでLLMを動かす方法は、LM Studio、Ollama、Jan、Msty、AnythingLLM、Open WebUI、oMLX、Chatboxの8つのアプリでほぼカバーできます。このガイドでは、費用、ライセンス、Mac側の要件、それぞれの得意分野を比較します。最新リリースは各公式ソースで確認しました。',
    metaDescription:
      'Mac向けローカルLLMアプリ8本を比較：LM Studio、Ollama、Jan、Msty、AnythingLLMほか。費用、ライセンス、Apple Silicon要件、向く用途を整理。',
    heroImage: '/images/best-local-llm-apps-mac-hero-ja.webp',
    twitterDescription:
      '2026年のMac向けローカルLLMアプリ：LM Studio（最も簡単なGUI）、Ollama（CLIとAPI）、Jan、Msty、AnythingLLM（文書）、Open WebUI、oMLX（MLX）、Chatbox。',
    audience:
      '自分のMacでAIモデルを動かしたい方。最初のアプリを選ぶ初心者から、ローカルAPIが必要な開発者まで。',
    readTime: '9分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'Mac向けローカルLLMアプリ',
    targetKeywords: [
      'mac ローカルllm アプリ',
      'mac ローカルai おすすめ',
      'lm studio 代替 mac',
      'ollama mac',
      'mac llm 動かす',
      'homebrew llm',
      'ローカルllm ツール mac',
      'mac llm gui',
    ],
    leadAnswerBlock:
      '**ほとんどのMacユーザーには、LM Studio（無料のGUIアプリ、Apple Silicon、macOS 14以降）に小さなモデルを入れる方法が最適です。コマンドラインとローカルAPIが欲しいならOllama、オープンソースのチャットアプリならJanを選びましょう。** AnythingLLM、Open WebUI、Msty、oMLX、Chatboxは、文書、ブラウザ、複数モデル、Apple MLX、軽量クライアントの用途をカバーします。',
    quickAnswerTop: {
      ja: {
        question: '2026年にMacで使うべき最適なローカルLLMアプリは？',
        answer:
          '最も簡単なのはLM Studioです。無料のGUIアプリで、Apple Silicon搭載MacとmacOS 14以降が必要で、モデルブラウザを内蔵しています。ターミナルを使う方や開発者にはOllama（MIT、macOS 14以降、Homebrewで1行インストール）が向いています。Janは無料のオープンソースのチャットアプリです。残り5本は、文書（AnythingLLM）、ブラウザUI（Open WebUI）、複数モデルのチャット（Msty）、Apple MLXの速度（oMLX）、軽量クライアント（Chatbox）を担います。',
        bullets: [
          'LM Studio — 無料のGUIアプリ、Apple Silicon専用、macOS 14以降。最初のインストールに最適。',
          'Ollama — MIT、macOS 14以降、Apple MシリーズのGPUに対応（Intel MacはCPUのみ）。CLI、ローカルAPI、デスクトップアプリ。',
          'Jan — 無料のオープンソースのデスクトップチャットアプリ。モデルをMac上で実行。',
          'AnythingLLM — MIT、Apple Silicon版とIntel版のデスクトップインストーラー。自分の文書とチャット。',
          'Open WebUI — OllamaなどのバックエンドにつながるブラウザのチャットUI。Dockerまたはpipでインストール。',
          'oMLX — Apache-2.0、Apple Silicon専用、macOS 15以降。MLXベースの推論サーバーとMacアプリ。',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '最初にインストールすべきMacアプリは？', anchor: '#which-app' },
      { label: 'Macアプリ比較表', anchor: '#comparison-table' },
      { label: 'LM Studio：最も簡単なGUIアプリ', anchor: '#lmstudio' },
      { label: 'Ollama：コマンドライン、API、デスクトップアプリ', anchor: '#ollama' },
      { label: 'Jan：オープンソースのチャットアプリ', anchor: '#jan' },
      { label: 'Msty：複数モデルのチャット', anchor: '#msty' },
      { label: 'AnythingLLM：自分の文書とチャット', anchor: '#anythingllm' },
      { label: 'Open WebUI：ブラウザのチャットUI', anchor: '#openwebui' },
      { label: 'oMLX：Apple Silicon向けMLX推論サーバー', anchor: '#omlx' },
      { label: 'Chatbox：軽量クライアント', anchor: '#chatbox' },
      { label: 'Macのメモリはどれだけ必要？', anchor: '#memory' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: '参考資料', anchor: '#sources' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MacではLM Studioが最も始めやすい選択肢です。** モデルブラウザ付きの無料GUIアプリで、Apple Silicon搭載MacとmacOS 14以降が必要です（LM Studioのドキュメント）。',
          '**Ollamaはターミナル利用者と開発者の標準です。** MITライセンス、macOS 14以降、Apple MシリーズのGPUで動作し（IntelはCPUのみ）、ディスクイメージまたは`brew install ollama`で導入できます。',
          '**Janはオープンソースのチャットアプリです。** モデルをローカルで実行する無料のデスクトップアプリで、READMEではmacOS 13.6以降とされています。',
          '**AnythingLLMは自分の文書向けです。** MITライセンスで、Apple SiliconとIntel Mac向けのデスクトップインストーラーがあり、文書チャットを内蔵しています。',
          '**Open WebUIはブラウザのUIで、モデルを実行するものではありません。** OllamaなどのバックエンドにつなぎDockerまたはpipで導入します。',
          '**MstyとChatboxは複数プロバイダー対応のチャットクライアントです。** どちらもローカルモデルとクラウドを使えるため、プライバシーが重要ならプロバイダー設定を確認してください。',
          '**oMLXはApple最適化の速度を求める方向けです。** Apple Silicon向けのApache-2.0のMLX推論サーバーとMacアプリで、macOS 15以降が必要です。',
          '**モデルサイズを決めるのはアプリではなくメモリです。** JanのREADMEでは3Bモデルに約8 GB、7Bモデルに16 GBのRAMが目安とされており、この一覧のどのアプリでも同じ制約があります。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**比較したアプリ：** LM Studio、Ollama、Jan、Msty、AnythingLLM、Open WebUI、oMLX、Chatbox。',
          '**最新の上流リリース（2026年10月31日確認）：** LM Studio 0.4.28（2026年10月31日）・Ollama v0.40.13（10月28日）・Jan v0.8.8（10月28日）・Open WebUI v0.12.5（10月29日）・oMLX v0.7.3rc1（10月27日）・AnythingLLM v1.19.0（10月26日）・Msty Studio 3.0.0 Beta 15（10月7日）・Chatbox v1.23.5（2026年9月24日）。3か月を超えて更新のないアプリはなく、更新停止の警告は不要です。',
          '**Apple Silicon専用：** LM StudioとoMLX。Intel MacではOllama（CPUのみ）とAnythingLLMが動作します。',
          '**設計上ローカルで完結：** LM Studio、Ollama、Jan、oMLX。**クラウドも利用可能：** Msty、Chatbox、Open WebUI、AnythingLLM。',
          '**ベンチマークなし：** PromptQuorumはこれらのアプリのMac上のトークン毎秒を測定していません。このガイドは公式ソースの事実を比較しています。',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '最初にインストールすべきMacアプリは？',
        content:
          '**ウィンドウとモデルブラウザがあり、ターミナルを使いたくないならLM Studio。コマンドラインに慣れている、または他のツール向けにローカルAPIが欲しいならOllamaから始めましょう。** どちらも無料で、モデルはMac上で動きます。同じモデルの上にブラウザUIや文書チャットを足したくなったら、後からOpen WebUIやAnythingLLMを追加できます。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年のほとんどのMacユーザーには、LM Studio（無料、Apple Silicon、macOS 14以降）に小さなモデルを入れる方法が最適で、ターミナル派やローカルAPIが必要ならOllamaが向いています。',
          },
          {
            type: 'plain-terms',
            text: 'LM Studioはボタンで操作する普通のMacアプリです。Ollamaはターミナルや他のアプリから操作するバックグラウンドサービスです。自分の作業スタイルに合う方を選べばよく、両方入れても構いません。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Macアプリ比較表',
        content:
          '**8つのアプリは3点で異なります。操作方法（ウィンドウ、ターミナル、ブラウザ）、クラウドモデルに接続できるか、対応するMacです。** バージョンとライセンス条件は2026年10月31日に公式プロジェクトページで確認しました。',
        columns: ['アプリ', '費用・ライセンス', 'Macの要件', 'インターフェース', '向いている用途'],
        rows: [
          { 'アプリ': '[LM Studio](https://lmstudio.ai)', '費用・ライセンス': '無料（クローズドソース）', 'Macの要件': 'Apple Silicon、macOS 14以降', 'インターフェース': 'デスクトップアプリ', '向いている用途': '最初のインストール' },
          { 'アプリ': '[Ollama](https://ollama.com)', '費用・ライセンス': '無料（MIT）', 'Macの要件': 'macOS 14以降、IntelはCPUのみ', 'インターフェース': 'CLI、API、アプリ', '向いている用途': '開発者、ローカルAPI' },
          { 'アプリ': '[Jan](https://jan.ai)', '費用・ライセンス': '無料（オープンソース）', 'Macの要件': 'macOS 13.6以降（README）', 'インターフェース': 'デスクトップアプリ', '向いている用途': 'オープンソースのチャット' },
          { 'アプリ': '[Msty](https://msty.ai)', '費用・ライセンス': 'フリーミアム（クローズド）', 'Macの要件': '未公開（msty.aiで確認）', 'インターフェース': 'デスクトップアプリ', '向いている用途': '複数モデルのチャット' },
          { 'アプリ': '[AnythingLLM](https://anythingllm.com)', '費用・ライセンス': '無料（MIT）', 'Macの要件': 'Apple Silicon・Intel版あり', 'インターフェース': 'デスクトップ、Web', '向いている用途': '文書とのチャット' },
          { 'アプリ': '[Open WebUI](https://openwebui.com)', '費用・ライセンス': '無料（BSD系の独自）', 'Macの要件': 'ブラウザなら全Mac', 'インターフェース': 'ブラウザ（Docker/pip）', '向いている用途': 'ブラウザのチャットUI' },
          { 'アプリ': '[oMLX](https://omlx.ai)', '費用・ライセンス': '無料（Apache-2.0）', 'Macの要件': 'Apple Silicon、macOS 15以降', 'インターフェース': 'Macアプリ、サーバー', '向いている用途': 'MLX推論' },
          { 'アプリ': '[Chatbox](https://chatboxai.app)', '費用・ライセンス': '無料（GPL-3.0）', 'Macの要件': 'macOSアプリ（chatboxai.app）', 'インターフェース': 'デスクトップ、Web', '向いている用途': '軽量クライアント' },
        ],
        note:
          'Macの要件は各プロジェクト自身のドキュメントによります。公開されていない場合は推測せず、その旨を表に記しています。',
      },
      lmstudio: {
        id: 'lmstudio',
        title: 'LM Studio：最も簡単なGUIアプリ',
        content:
          '**LM Studioは、普通のアプリウィンドウでMac上のモデルを動かす最も簡単な方法です。** モデルブラウザ、チャット画面、ローカルサーバーモードを備えています。詳細レビュー：[LM Studioレビュー](/ja/power-local-llm/lm-studio-review)。',
        items: [
          '**概要：** ローカルモデル向けの無料GUIアプリです。LM Studioのサイトはランタイムを「MLXとllama.cppを内部で使用」と説明しています。クローズドソースで、ディレクトリの記録では個人・業務ともに無料とされています。',
          '**最新リリース（2026年10月31日確認）：** 0.4.28、2026年10月31日（[出典](https://lmstudio.ai/changelog/lmstudio)）。',
          '**Macの要件：** LM Studioのシステム要件ページによると、Apple Silicon（M1〜M4が記載）とmacOS 14以降が必要です。Intel Macは非対応です。',
          '**向いている用途：** ターミナルなしで探して、ダウンロードして、チャットしたい初めての方。',
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Ollama：コマンドライン、API、デスクトップアプリ',
        content:
          '**Ollamaは、ターミナル利用者と、ローカルのモデルAPIが必要なあらゆる用途の標準的な選択肢です。** コマンドライン、HTTP API、デスクトップアプリを備えたバックグラウンドサービスとして動作します。詳細レビュー：[Ollamaレビュー](/ja/power-local-llm/ollama-review)。導入ガイド：[MacでのOllama](/ja/local-llms/ollama-on-mac-apple-silicon-setup-2026)。',
        items: [
          '**概要：** MITライセンスのランタイムです。ディスクイメージをマウントするか、Homebrew（`brew install ollama`、Homebrewにformulaがあります）で導入します。',
          '**最新リリース（2026年10月31日確認）：** v0.40.13、2026年10月28日（[出典](https://github.com/ollama/ollama/releases)）。',
          '**Macの要件：** macOS Sonoma（14）以降。Apple Mシリーズ搭載機はCPUとGPUに対応し、Intel MacはCPUのみで動作します（OllamaのmacOSドキュメント）。',
          '**向いている用途：** 開発者、スクリプト、Open WebUIなどのチャットアプリのバックエンド。',
        ],
      },
      jan: {
        id: 'jan',
        title: 'Jan：オープンソースのチャットアプリ',
        content:
          '**Janは、モデルをローカルで実行する無料のオープンソースのデスクトップチャットアプリです。** チャットアシスタントのように使え、モデルのダウンロードも任せられます。詳細レビュー：[Janレビュー](/ja/power-local-llm/jan-review)。',
        items: [
          '**概要：** オープンソースのデスクトップアプリです（ディレクトリではApache 2.0系のライセンスと記載）。macOS向けにユニバーサル版が配布されています。',
          '**最新リリース（2026年10月31日確認）：** v0.8.8、2026年10月28日（[出典](https://github.com/janhq/jan/releases)）。',
          '**Macの要件：** READMEではmacOS 13.6以降、3Bモデルに約8 GB、7Bモデルに16 GBのRAMが目安です。',
          '**向いている用途：** ホスト型チャットアシスタントのオープンソースの代替が欲しい方。',
        ],
      },
      msty: {
        id: 'msty',
        title: 'Msty：複数モデルのチャット',
        content:
          '**Mstyは、ローカルモデルとクラウドプロバイダーを同じウィンドウで使える洗練されたチャットアプリです。** クローズドソースで無料枠があります。詳細レビュー：[Mstyレビュー](/ja/power-local-llm/msty-review)。',
        items: [
          '**概要：** CloudStack, LLCのデスクトップチャットクライアントで、変更履歴はmsty.aiで公開されています。ディレクトリではフリーミアム・クローズドソースとして掲載しています。',
          '**最新リリース（2026年10月31日確認）：** Msty Studio 3.0.0 Beta 15、2026年10月7日（[出典](https://msty.ai/changelog)）。',
          '**Macの要件：** PromptQuorumが確認したページには記載がありません。インストール前にmsty.aiで確認してください。',
          '**向いている用途：** 複数のプロバイダーとモデルを1つの画面で使いたい方。',
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: 'AnythingLLM：自分の文書とチャット',
        content:
          '**AnythingLLMは、自分のファイルについて質問したいときの選択肢です。** ベクトルストアと文書チャットを同梱しています。詳細レビュー：[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review)。',
        items: [
          '**概要：** MITライセンスのアプリで、デスクトップ版とDocker版があります。ローカルモデルとクラウドプロバイダーのどちらも使えます。',
          '**最新リリース（2026年10月31日確認）：** v1.19.0、2026年10月26日（[出典](https://github.com/Mintplex-Labs/anything-llm/releases)）。',
          '**Macの要件：** 公式のmacOSインストールページに、Apple Silicon用とIntel Mac用の個別のインストーラーがあります。',
          '**向いている用途：** ノートPCでの非公開の文書質問応答。',
        ],
      },
      openwebui: {
        id: 'openwebui',
        title: 'Open WebUI：ブラウザのチャットUI',
        content:
          '**Open WebUIはローカルモデル向けのChatGPT風Webインターフェースですが、モデル自体は実行しません。** Ollamaと組み合わせて使います。詳細レビュー：[Open WebUIレビュー](/ja/local-llms/open-webui-review)。代替：[ローカルLLMのおすすめフロントエンド](/ja/local-llms/best-local-llm-frontends)。',
        items: [
          '**概要：** セルフホスト型のWebアプリで、Dockerまたはpipで導入します。v0.6.6以降はブランディング条項付きの修正BSD-3-Clauseライセンスで、プロジェクト自身はOSI承認ではないとしています。無料で利用できます。',
          '**最新リリース（2026年10月31日確認）：** v0.12.5、2026年10月29日（[出典](https://github.com/open-webui/open-webui/releases)）。',
          '**Macの要件：** DockerまたはPython以外は不要です。ブラウザのあるMacなら開けて、モデルは接続したバックエンドで動きます。',
          '**向いている用途：** Ollamaの上に載せる、1人または複数人向けのブラウザUI。',
        ],
      },
      omlx: {
        id: 'omlx',
        title: 'oMLX：Apple Silicon向けMLX推論サーバー',
        content:
          '**oMLXは、AppleのMLXフレームワークをローカルサーバーとMacアプリで使いたい方向けです。** 詳細レビュー：[oMLXレビュー](/ja/power-local-llm/omlx-review)。背景：[MacでのMLX・Ollama・llama.cpp比較](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)。',
        items: [
          '**概要：** Apache-2.0のMLXベース推論サーバーで、小さなコマンドラインシムをインストールするmacOSアプリがあります。',
          '**最新リリース（2026年10月31日確認）：** v0.7.3rc1、2026年10月27日（[出典](https://github.com/jundot/omlx/releases)）。',
          '**Macの要件：** Apple Silicon（M1〜M5）とmacOS 15.0以降（プロジェクトのREADME）。GitHubの最新タグv0.7.3rc1はリリース候補です。',
          '**向いている用途：** Apple最適化の推論とローカルのコーディングエージェント。',
        ],
      },
      chatbox: {
        id: 'chatbox',
        title: 'Chatbox：軽量クライアント',
        content:
          '**Chatboxは、ローカルモデルとクラウドモデルに使える小さなクロスプラットフォームのチャットクライアントです。** 詳細レビュー：[Chatboxレビュー](/ja/local-llms/chatbox-review)。',
        items: [
          '**概要：** デスクトップ版とWeb版のクライアントで、Community EditionはGPL-3.0でオープンソース化されています。',
          '**最新リリース（2026年10月31日確認）：** v1.23.5、2026年9月24日（[出典](https://github.com/chatboxai/chatbox/releases)）。',
          '**Macの要件：** プロジェクトがmacOS向けのダウンロードを提供しています。最新の要件はchatboxai.appをご確認ください。',
          '**向いている用途：** OllamaやLM Studioのサーバーにつなぐ軽量クライアント。',
        ],
      },
      memory: {
        id: 'memory',
        title: 'Macのメモリはどれだけ必要？',
        content:
          '**どのアプリを選んでも、制約になるのはユニファイドメモリです。** アプリが変えるのは操作画面であって、モデルに必要なメモリではありません。',
        items: [
          'JanのREADMEの目安は、3Bモデルに約8 GB、7Bモデルに16 GB、13Bモデルに32 GBのRAMです。',
          '大きな量子化モデルほどメモリが必要です。ダウンロード前にモデルカードを確認し、macOS用にも空きを残してください。',
          'Mac機種ごとのハードウェアの選び方は[ローカルAIに最適なMac](/ja/power-local-llm/best-mac-for-local-ai-2026)と[Apple Silicon向けOllamaモデルのおすすめ](/ja/local-llms/best-models-apple-silicon-2026)をご覧ください。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**Intel MacにLM StudioやoMLXを入れようとする。** どちらもApple Siliconが必須です。代わりにOllama（IntelではCPUのみ）かAnythingLLMを使いましょう。',
          '**Open WebUIがモデルを動かすと思い込む。** あくまでUIです。先にOllamaなどのバックエンドを入れてください。',
          '**どのチャットアプリも完全にローカルだと思い込む。** Msty、Chatbox、Open WebUI、AnythingLLMはクラウドプロバイダーにも接続できます。個人的な文章を送る前にプロバイダー設定を確認してください。',
          '**メモリより大きなモデルをダウンロードする。** インストールはできても、応答が遅くなったり失敗したりします。小さなモデルから始めて段階的に上げましょう。',
          '**モデルの保存先が別々のアプリを5つ入れる。** アプリごとに同じモデルのコピーを保存することがあります。1〜2本に絞ればディスクを節約できます。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考資料',
        items: [
          'LM Studio — [lmstudio.ai](https://lmstudio.ai)（最新リリース0.4.28、2026年10月31日、[リリースノート](https://lmstudio.ai/changelog/lmstudio)）。',
          'Ollama — [ollama.com](https://ollama.com)（最新リリースv0.40.13、2026年10月28日、[リリースノート](https://github.com/ollama/ollama/releases)）。',
          'Jan — [jan.ai](https://jan.ai)（最新リリースv0.8.8、2026年10月28日、[リリースノート](https://github.com/janhq/jan/releases)）。',
          'Msty — [msty.ai](https://msty.ai)（最新リリースMsty Studio 3.0.0 Beta 15、2026年10月7日、[リリースノート](https://msty.ai/changelog)）。',
          'AnythingLLM — [anythingllm.com](https://anythingllm.com)（最新リリースv1.19.0、2026年10月26日、[リリースノート](https://github.com/Mintplex-Labs/anything-llm/releases)）。',
          'Open WebUI — [openwebui.com](https://openwebui.com)（最新リリースv0.12.5、2026年10月29日、[リリースノート](https://github.com/open-webui/open-webui/releases)）。',
          'oMLX — [omlx.ai](https://omlx.ai)（最新リリースv0.7.3rc1、2026年10月27日、[リリースノート](https://github.com/jundot/omlx/releases)）。',
          'Chatbox — [chatboxai.app](https://chatboxai.app)（最新リリースv1.23.5、2026年9月24日、[リリースノート](https://github.com/chatboxai/chatbox/releases)）。',
          'LM Studioのシステム要件 — [lmstudio.ai/docs/app/system-requirements](https://lmstudio.ai/docs/app/system-requirements)（Apple Silicon、macOS 14）。',
          'OllamaのmacOSドキュメント — [github.com/ollama/ollama](https://github.com/ollama/ollama/blob/main/docs/macos.mdx)（macOS 14以降、MシリーズまたはIntelはCPUのみ）と[Homebrewのformula](https://formulae.brew.sh/formula/ollama)。',
          'Jan README — [github.com/janhq/jan](https://github.com/janhq/jan)（macOS 13.6以降、RAMの目安）。',
          'oMLX README — [github.com/jundot/omlx](https://github.com/jundot/omlx)（macOS 15以降、Apple Silicon、Apache-2.0）。',
          'AnythingLLMのmacOSインストール — [docs.anythingllm.com](https://docs.anythingllm.com/installation-desktop/macos)（Apple SiliconとIntelのインストーラー）。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Macに最適なローカルAIアプリは？',
            a: '最初の1本として最も簡単なのはLM Studio（無料、Apple Silicon、macOS 14以降）です。ターミナル利用者や開発者にはOllamaが最も向いています。Janはオープンソースのチャットアプリとして良い選択です。ウィンドウ、コマンドライン、ブラウザUIのどれが欲しいかで決まります。',
          },
          {
            q: 'MacでのLM Studioの代替は？',
            a: 'Ollama（コマンドラインとAPI）、Jan（オープンソースのチャットアプリ）、Msty（複数モデルのチャット）、AnythingLLM（文書チャット）、Chatbox（軽量クライアント）です。Open WebUIは直接の代替ではなく、Ollamaと組み合わせるブラウザUIです。',
          },
          {
            q: 'OllamaはHomebrewでインストールできますか？',
            a: 'はい。Homebrewにollamaのformulaがあるため、`brew install ollama`で導入できます。公式のディスクイメージをマウントして、アプリケーションフォルダにドラッグする方法もあります。',
          },
          {
            q: 'これらのアプリはIntel Macで動きますか？',
            a: '一部は動きます。LM StudioとoMLXはApple Siliconが必須です。OllamaはIntel MacでCPUのみのモードで動作し、AnythingLLMにはIntel向けインストーラーがあります。Open WebUIはブラウザで動きますが、接続するバックエンドをどこかで動かす必要があります。',
          },
          {
            q: 'これらのアプリは無料ですか？',
            a: 'LM Studio、Ollama、Jan、AnythingLLM、Open WebUI、oMLX、Chatboxは無料でダウンロードできます。Mstyには無料枠と有料オプションがあります。ライセンスは異なり、OllamaとAnythingLLMはMIT、oMLXはApache-2.0、Chatbox Community EditionはGPL-3.0、LM StudioとMstyはクローズドソースです。',
          },
          {
            q: '自分の文書とチャットするならどのアプリ？',
            a: 'AnythingLLMがそのために作られており、ベクトルストア同梱の文書チャット機能があります。Open WebUIも、Ollamaなどのバックエンドに接続すれば文書チャットに対応します。',
          },
          {
            q: 'Ollamaを使っているならOpen WebUIは必要ですか？',
            a: 'いいえ。Ollamaはターミナルと専用のデスクトップアプリで使えます。Open WebUIは、Ollamaにブラウザ画面、複数ユーザー、追加機能を足すものです。',
          },
          {
            q: 'MacのローカルLLMはオフラインで動きますか？',
            a: 'ダウンロード済みのモデルならはい。LM Studio、Ollama、Jan、oMLXはモデルをMac上で実行します。Msty、Chatbox、Open WebUI、AnythingLLMでクラウドプロバイダーやWeb検索を呼び出す機能にはインターネット接続が必要です。',
          },
          {
            q: 'RAMはどれくらい必要ですか？',
            a: 'アプリではなくモデルで決まります。JanのREADMEでは3Bモデルに約8 GB、7Bモデルに16 GBが目安です。大きなモデルほど多く必要になるので、各モデルカードを確認してください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルAIに最適なMac](/ja/power-local-llm/best-mac-for-local-ai-2026) — ローカルモデル向けのMacの選び方。',
          '[MacでのOllama：Apple Siliconの導入](/ja/local-llms/ollama-on-mac-apple-silicon-setup-2026) — インストールと最初のモデル。',
          '[MacでのMLX・Ollama・llama.cpp比較](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — エンジンの比較。',
          '[Apple Silicon向けOllamaモデルのおすすめ](/ja/local-llms/best-models-apple-silicon-2026) — メモリ別のモデル。',
          '[LM Studio・Jan・GPT4All比較](/ja/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — デスクトップアプリの比較。',
          '[ローカルLLMのおすすめフロントエンド](/ja/local-llms/best-local-llm-frontends) — Ollama向けのブラウザ・デスクトップのチャットUI。',
          '[iPhone向けローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone版の同種ガイド。',
          '[ローカルLLMソフトウェア ディレクトリ](/ja/directory) — Macで絞り込めるローカルLLMアプリ一覧。',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    last_full_refresh: '2026-10-31',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    designSkin: 'hub',
    title: 'Meilleures apps LLM locales pour Mac en 2026 : LM Studio, Ollama, Jan et 5 autres',
    seoTitle: 'Meilleures apps LLM locales pour Mac 2026 : 8 comparées',
    intro:
      'Huit apps couvrent la plupart des façons d’exécuter un LLM sur un Mac en 2026 : LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX et Chatbox. Ce guide compare le coût, la licence, la configuration Mac requise et les points forts de chaque app ; la dernière version de chacune a été lue à la source officielle.',
    metaDescription:
      'Comparez 8 apps LLM locales pour Mac : LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox. Coût, licence, Apple Silicon, usages.',
    heroImage: '/images/best-local-llm-apps-mac-hero-fr.webp',
    twitterDescription:
      'Meilleures apps LLM locales pour Mac en 2026 : LM Studio (interface la plus simple), Ollama (CLI + API), Jan, Msty, AnythingLLM (documents), Open WebUI, oMLX (MLX), Chatbox.',
    audience:
      'Utilisateurs de Mac qui veulent exécuter des modèles d’IA sur leur propre machine, du débutant qui choisit sa première app au développeur qui veut une API locale.',
    readTime: '9 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'app LLM locale pour Mac',
    targetKeywords: [
      'meilleure ia locale mac',
      'apps llm locales mac',
      'alternatives lm studio mac',
      'ollama mac',
      'exécuter llm sur mac',
      'homebrew llm',
      'logiciel llm mac',
      'outils llm mac',
    ],
    leadAnswerBlock:
      '**Pour la plupart des utilisateurs de Mac, installez LM Studio (app graphique gratuite, Apple Silicon, macOS 14+) avec un petit modèle ; choisissez Ollama pour la ligne de commande et une API locale, et Jan pour une app de chat open source.** AnythingLLM, Open WebUI, Msty, oMLX et Chatbox couvrent les documents, l’accès par navigateur, le chat multi-modèles, Apple MLX et un client léger.',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure app LLM locale pour Mac en 2026 ?',
        answer:
          'LM Studio est le départ le plus simple : une app graphique gratuite qui exige un Mac Apple Silicon et macOS 14 ou plus récent, avec un navigateur de modèles intégré. Ollama convient aux utilisateurs du terminal et aux développeurs (MIT, macOS 14+, installation d’une ligne avec Homebrew). Jan est une app de chat open source gratuite. Les cinq autres couvrent les documents (AnythingLLM), une interface navigateur (Open WebUI), le chat multi-modèles (Msty), la vitesse Apple MLX (oMLX) et un client léger (Chatbox).',
        bullets: [
          'LM Studio — app graphique gratuite, Apple Silicon uniquement, macOS 14+. Première installation la plus simple.',
          'Ollama — MIT, macOS 14+, GPU des puces Apple M pris en charge (Mac Intel : CPU seul). CLI, API locale et app de bureau.',
          'Jan — app de chat de bureau open source gratuite, exécute les modèles sur votre Mac.',
          'AnythingLLM — MIT, installateurs de bureau pour Apple Silicon et Intel ; chat avec vos propres documents.',
          'Open WebUI — interface de chat dans le navigateur reliée à Ollama et à d’autres backends ; installation avec Docker ou pip.',
          'oMLX — Apache-2.0, Apple Silicon uniquement, macOS 15+ ; serveur d’inférence basé sur MLX avec app Mac.',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Quelle app Mac installer en premier ?', anchor: '#which-app' },
      { label: 'Tableau comparatif des apps Mac', anchor: '#comparison-table' },
      { label: 'LM Studio : l’app graphique la plus simple', anchor: '#lmstudio' },
      { label: 'Ollama : ligne de commande, API et app de bureau', anchor: '#ollama' },
      { label: 'Jan : app de chat open source', anchor: '#jan' },
      { label: 'Msty : chat multi-modèles', anchor: '#msty' },
      { label: 'AnythingLLM : chat avec vos documents', anchor: '#anythingllm' },
      { label: 'Open WebUI : interface de chat dans le navigateur', anchor: '#openwebui' },
      { label: 'oMLX : serveur d’inférence MLX pour Apple Silicon', anchor: '#omlx' },
      { label: 'Chatbox : client léger', anchor: '#chatbox' },
      { label: 'De quelle mémoire votre Mac a-t-il besoin ?', anchor: '#memory' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Questions fréquemment posées', anchor: '#faq' },
      { label: 'Lectures associées', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**LM Studio est le départ le plus simple sur Mac.** App graphique gratuite avec navigateur de modèles ; elle exige un Mac Apple Silicon et macOS 14 ou plus récent (documentation LM Studio).',
          '**Ollama est la référence pour le terminal et les développeurs.** Licence MIT, macOS 14+, utilise le GPU des puces Apple M (Mac Intel : CPU seul) et s’installe via une image disque ou `brew install ollama`.',
          '**Jan est l’app de chat open source.** App de bureau gratuite qui exécute les modèles en local ; son README indique macOS 13.6 ou plus récent.',
          '**AnythingLLM convient à vos propres documents.** Licence MIT, installateurs de bureau pour Apple Silicon et Mac Intel, chat de documents intégré.',
          '**Open WebUI est une interface navigateur, pas un moteur de modèles.** Il se relie à Ollama ou à d’autres backends ; installation avec Docker ou pip.',
          '**Msty et Chatbox sont des clients de chat multi-fournisseurs.** Tous deux peuvent utiliser des modèles locaux et des fournisseurs cloud ; vérifiez le réglage du fournisseur si la confidentialité compte.',
          '**oMLX vise la vitesse native Apple.** Serveur d’inférence MLX Apache-2.0 pour Apple Silicon avec app Mac ; il exige macOS 15 ou plus récent.',
          '**La mémoire fixe la taille du modèle, pas l’app.** Le README de Jan indique environ 8 Go de RAM pour les modèles 3B et 16 Go pour les modèles 7B ; toutes les apps de cette liste butent sur la même limite.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Apps comparées :** LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox.',
          '**Dernières versions amont (vérifiées le 31 oct. 2026) :** LM Studio 0.4.28 (31 oct. 2026) · Ollama v0.40.13 (28 oct.) · Jan v0.8.8 (28 oct.) · Open WebUI v0.12.5 (29 oct.) · oMLX v0.7.3rc1 (27 oct.) · AnythingLLM v1.19.0 (26 oct.) · Msty Studio 3.0.0 Beta 15 (7 oct.) · Chatbox v1.23.5 (24 sept. 2026). Aucune n’a plus de 3 mois, donc aucun avertissement d’inactivité ne s’applique.',
          '**Apple Silicon uniquement :** LM Studio et oMLX. Les Mac Intel exécutent encore Ollama (CPU seul) et AnythingLLM.',
          '**Locales par conception :** LM Studio, Ollama, Jan, oMLX. **Peuvent aussi utiliser le cloud :** Msty, Chatbox, Open WebUI, AnythingLLM.',
          '**Aucun benchmark :** PromptQuorum n’a pas mesuré les tokens par seconde de ces apps sur Mac ; ce guide compare des faits issus de sources officielles.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Quelle app Mac installer en premier ?',
        content:
          '**Commencez par LM Studio si vous voulez une fenêtre, un navigateur de modèles et pas de terminal ; commencez par Ollama si la ligne de commande vous convient ou si vous avez besoin d’une API locale pour d’autres outils.** Les deux sont gratuits et exécutent les modèles sur votre Mac. Ajoutez ensuite Open WebUI ou AnythingLLM si vous voulez une interface navigateur ou un chat de documents sur les mêmes modèles.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour la plupart des utilisateurs de Mac en 2026, installez LM Studio (gratuit, Apple Silicon, macOS 14+) avec un petit modèle ; utilisez Ollama si vous préférez le terminal ou avez besoin d’une API locale.',
          },
          {
            type: 'plain-terms',
            text: 'LM Studio est une app Mac ordinaire avec des boutons. Ollama est un service d’arrière-plan que vous pilotez depuis le terminal ou d’autres apps. Choisissez celle qui correspond à votre façon de travailler ; vous pouvez installer les deux.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif des apps Mac',
        content:
          '**Les huit apps diffèrent sur trois points : la façon de les utiliser (fenêtre, terminal ou navigateur), la possibilité d’accéder à des modèles cloud et les Mac pris en charge.** Les versions et les conditions de licence ont été lues sur les pages officielles des projets le 31 oct. 2026.',
        columns: ['App', 'Coût / licence', 'Configuration Mac', 'Interface', 'Idéal pour'],
        rows: [
          { 'App': '[LM Studio](https://lmstudio.ai)', 'Coût / licence': 'Gratuit (code fermé)', 'Configuration Mac': 'Apple Silicon, macOS 14+', 'Interface': 'App de bureau', 'Idéal pour': 'Première installation' },
          { 'App': '[Ollama](https://ollama.com)', 'Coût / licence': 'Gratuit (MIT)', 'Configuration Mac': 'macOS 14+ ; Intel : CPU seul', 'Interface': 'CLI, API, app', 'Idéal pour': 'Développeurs, API locale' },
          { 'App': '[Jan](https://jan.ai)', 'Coût / licence': 'Gratuit (open source)', 'Configuration Mac': 'macOS 13.6+ (README)', 'Interface': 'App de bureau', 'Idéal pour': 'Chat open source' },
          { 'App': '[Msty](https://msty.ai)', 'Coût / licence': 'Freemium (code fermé)', 'Configuration Mac': 'Non publiée (voir msty.ai)', 'Interface': 'App de bureau', 'Idéal pour': 'Chat multi-modèles' },
          { 'App': '[AnythingLLM](https://anythingllm.com)', 'Coût / licence': 'Gratuit (MIT)', 'Configuration Mac': 'Installateurs Apple Silicon et Intel', 'Interface': 'App de bureau, web', 'Idéal pour': 'Chat avec documents' },
          { 'App': '[Open WebUI](https://openwebui.com)', 'Coût / licence': 'Gratuit (BSD modifiée)', 'Configuration Mac': 'Tout Mac via navigateur', 'Interface': 'Navigateur (Docker/pip)', 'Idéal pour': 'Interface de chat web' },
          { 'App': '[oMLX](https://omlx.ai)', 'Coût / licence': 'Gratuit (Apache-2.0)', 'Configuration Mac': 'Apple Silicon, macOS 15+', 'Interface': 'App Mac, serveur', 'Idéal pour': 'Inférence MLX' },
          { 'App': '[Chatbox](https://chatboxai.app)', 'Coût / licence': 'Gratuit (GPL-3.0)', 'Configuration Mac': 'App macOS (voir chatboxai.app)', 'Interface': 'App de bureau, web', 'Idéal pour': 'Client léger' },
        ],
        note:
          'La configuration Mac requise provient de la documentation de chaque projet. Quand un projet n’en publie pas, le tableau le dit au lieu de deviner.',
      },
      lmstudio: {
        id: 'lmstudio',
        title: 'LM Studio : l’app graphique la plus simple',
        content:
          '**LM Studio est le moyen le plus simple d’exécuter un modèle sur Mac dans une fenêtre d’app normale.** Il inclut un navigateur de modèles, une vue de chat et un mode serveur local. Test complet : [test de LM Studio](/fr/power-local-llm/lm-studio-review).',
        items: [
          '**Ce que c’est :** une app graphique gratuite pour modèles locaux ; le site de LM Studio décrit son runtime comme MLX et llama.cpp sous le capot. Elle est à code fermé et, selon la fiche de l’annuaire, gratuite pour un usage personnel et professionnel.',
          '**Dernière version (vérifiée le 31 oct. 2026) :** 0.4.28, 31 oct. 2026 ([source](https://lmstudio.ai/changelog/lmstudio)).',
          '**Configuration Mac :** Apple Silicon (M1 à M4 cités) et macOS 14 ou plus récent, d’après la page des exigences système de LM Studio. Les Mac Intel ne sont pas pris en charge.',
          '**Idéal pour :** les débutants qui veulent parcourir, télécharger et discuter sans terminal.',
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Ollama : ligne de commande, API et app de bureau',
        content:
          '**Ollama est le choix par défaut des utilisateurs du terminal et de tout ce qui a besoin d’une API de modèles locale.** Il tourne comme service d’arrière-plan avec une ligne de commande, une API HTTP et une app de bureau. Test complet : [test d’Ollama](/fr/power-local-llm/ollama-review). Guide d’installation : [Ollama sur Mac](/fr/local-llms/ollama-on-mac-apple-silicon-setup-2026).',
        items: [
          '**Ce que c’est :** un runtime sous licence MIT. Installation en montant l’image disque ou avec Homebrew (`brew install ollama` ; la formule existe dans Homebrew).',
          '**Dernière version (vérifiée le 31 oct. 2026) :** v0.40.13, 28 oct. 2026 ([source](https://github.com/ollama/ollama/releases)).',
          '**Configuration Mac :** macOS Sonoma (14) ou plus récent ; les puces Apple M bénéficient du CPU et du GPU, les Mac Intel tournent sur le CPU seul (documentation macOS d’Ollama).',
          '**Idéal pour :** les développeurs, les scripts et comme backend d’Open WebUI ou d’autres apps de chat.',
        ],
      },
      jan: {
        id: 'jan',
        title: 'Jan : app de chat open source',
        content:
          '**Jan est une app de chat de bureau gratuite et open source qui exécute les modèles en local.** Elle se présente comme un assistant de chat et télécharge les modèles pour vous. Test complet : [test de Jan](/fr/power-local-llm/jan-review).',
        items: [
          '**Ce que c’est :** une app de bureau open source (l’annuaire indique une variante d’Apache 2.0) avec un téléchargement macOS universel.',
          '**Dernière version (vérifiée le 31 oct. 2026) :** v0.8.8, 28 oct. 2026 ([source](https://github.com/janhq/jan/releases)).',
          '**Configuration Mac :** son README indique macOS 13.6 ou plus récent, avec environ 8 Go de RAM pour les modèles 3B et 16 Go pour les modèles 7B.',
          '**Idéal pour :** ceux qui veulent une alternative open source à un assistant de chat hébergé.',
        ],
      },
      msty: {
        id: 'msty',
        title: 'Msty : chat multi-modèles',
        content:
          '**Msty est une app de chat soignée qui peut dialoguer avec des modèles locaux et des fournisseurs cloud dans la même fenêtre.** Elle est à code fermé avec une offre gratuite. Test complet : [test de Msty](/fr/power-local-llm/msty-review).',
        items: [
          '**Ce que c’est :** un client de chat de bureau de CloudStack, LLC ; le journal des modifications est publié sur msty.ai. L’annuaire la classe en freemium et code fermé.',
          '**Dernière version (vérifiée le 31 oct. 2026) :** Msty Studio 3.0.0 Beta 15, 7 oct. 2026 ([source](https://msty.ai/changelog)).',
          '**Configuration Mac :** non publiée sur les pages vérifiées par PromptQuorum ; confirmez sur msty.ai avant d’installer.',
          '**Idéal pour :** ceux qui veulent une seule interface pour plusieurs fournisseurs et modèles.',
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: 'AnythingLLM : chat avec vos documents',
        content:
          '**AnythingLLM est le bon choix pour poser des questions sur vos propres fichiers.** Il intègre une base vectorielle et un chat de documents. Test complet : [test d’AnythingLLM](/fr/power-local-llm/anythingllm-review).',
        items: [
          '**Ce que c’est :** une app sous licence MIT avec une version de bureau et une version Docker ; elle peut utiliser des modèles locaux ou des fournisseurs cloud.',
          '**Dernière version (vérifiée le 31 oct. 2026) :** v1.19.0, 26 oct. 2026 ([source](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          '**Configuration Mac :** la page d’installation macOS officielle propose des installateurs distincts pour Apple Silicon et pour Mac Intel.',
          '**Idéal pour :** les questions-réponses privées sur documents depuis un portable.',
        ],
      },
      openwebui: {
        id: 'openwebui',
        title: 'Open WebUI : interface de chat dans le navigateur',
        content:
          '**Open WebUI offre une interface web de type ChatGPT pour les modèles locaux, mais il n’exécute pas lui-même les modèles.** Associez-le à Ollama. Test complet : [test d’Open WebUI](/fr/local-llms/open-webui-review). Alternatives : [meilleures interfaces LLM locales](/fr/local-llms/best-local-llm-frontends).',
        items: [
          '**Ce que c’est :** une app web auto-hébergée, installée avec Docker ou pip. Depuis la v0.6.6, elle utilise une licence BSD-3-Clause modifiée avec une clause de marque, que le projet dit non approuvée par l’OSI ; son usage reste gratuit.',
          '**Dernière version (vérifiée le 31 oct. 2026) :** v0.12.5, 29 oct. 2026 ([source](https://github.com/open-webui/open-webui/releases)).',
          '**Configuration Mac :** rien au-delà de Docker ou Python ; tout Mac avec un navigateur peut l’ouvrir, et les modèles tournent dans le backend connecté.',
          '**Idéal pour :** une interface navigateur pour un ou plusieurs utilisateurs au-dessus d’Ollama.',
        ],
      },
      omlx: {
        id: 'omlx',
        title: 'oMLX : serveur d’inférence MLX pour Apple Silicon',
        content:
          '**oMLX s’adresse à ceux qui veulent le framework MLX d’Apple derrière un serveur local et une app Mac.** Test complet : [test d’oMLX](/fr/power-local-llm/omlx-review). Contexte : [MLX, Ollama et llama.cpp sur Mac](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        items: [
          '**Ce que c’est :** un serveur d’inférence basé sur MLX sous Apache-2.0, avec une app macOS qui installe un petit raccourci en ligne de commande.',
          '**Dernière version (vérifiée le 31 oct. 2026) :** v0.7.3rc1, 27 oct. 2026 ([source](https://github.com/jundot/omlx/releases)).',
          '**Configuration Mac :** Apple Silicon (M1 à M5) et macOS 15.0 ou plus récent (README du projet). Le dernier tag GitHub, v0.7.3rc1, est une version candidate.',
          '**Idéal pour :** l’inférence native Apple et les agents de code locaux.',
        ],
      },
      chatbox: {
        id: 'chatbox',
        title: 'Chatbox : client léger',
        content:
          '**Chatbox est un petit client de chat multiplateforme pour modèles locaux et cloud.** Test complet : [test de Chatbox](/fr/local-llms/chatbox-review).',
        items: [
          '**Ce que c’est :** un client de bureau et web ; la Community Edition est publiée en open source sous GPL-3.0.',
          '**Dernière version (vérifiée le 31 oct. 2026) :** v1.23.5, 24 sept. 2026 ([source](https://github.com/chatboxai/chatbox/releases)).',
          '**Configuration Mac :** le projet propose un téléchargement macOS ; consultez chatboxai.app pour la configuration actuelle.',
          '**Idéal pour :** un client léger relié à un serveur Ollama ou LM Studio.',
        ],
      },
      memory: {
        id: 'memory',
        title: 'De quelle mémoire votre Mac a-t-il besoin ?',
        content:
          '**La mémoire unifiée est la limite, quelle que soit l’app choisie.** L’app change l’interface, pas la mémoire dont un modèle a besoin.',
        items: [
          'Le README de Jan donne un repère : environ 8 Go de RAM pour les modèles 3B, 16 Go pour les modèles 7B et 32 Go pour les modèles 13B.',
          'Les grands modèles quantifiés demandent plus de mémoire ; consultez la fiche du modèle avant de le télécharger et laissez de la mémoire à macOS.',
          'Pour choisir le matériel selon le modèle de Mac, voir [Meilleur Mac pour l’IA locale](/fr/power-local-llm/best-mac-for-local-ai-2026) et [Meilleurs modèles Ollama pour Apple Silicon](/fr/local-llms/best-models-apple-silicon-2026).',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Installer LM Studio ou oMLX sur un Mac Intel.** Les deux exigent Apple Silicon. Utilisez plutôt Ollama (CPU seul sur Intel) ou AnythingLLM.',
          '**Croire qu’Open WebUI exécute les modèles.** Ce n’est que l’interface ; installez d’abord Ollama ou un autre backend.',
          '**Supposer que toute app de chat est entièrement locale.** Msty, Chatbox, Open WebUI et AnythingLLM peuvent aussi se connecter à des fournisseurs cloud ; vérifiez le réglage du fournisseur avant d’envoyer du texte privé.',
          '**Télécharger un modèle plus gros que votre mémoire.** L’app l’installera, mais les réponses seront lentes ou échoueront. Commencez petit puis montez.',
          '**Installer cinq apps avec chacune son dossier de modèles.** Chaque app peut stocker sa propre copie du même modèle ; gardez une ou deux apps pour économiser de l’espace disque.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'LM Studio — [lmstudio.ai](https://lmstudio.ai) (dernière version 0.4.28, 31 oct. 2026 ; [notes de version](https://lmstudio.ai/changelog/lmstudio)).',
          'Ollama — [ollama.com](https://ollama.com) (dernière version v0.40.13, 28 oct. 2026 ; [notes de version](https://github.com/ollama/ollama/releases)).',
          'Jan — [jan.ai](https://jan.ai) (dernière version v0.8.8, 28 oct. 2026 ; [notes de version](https://github.com/janhq/jan/releases)).',
          'Msty — [msty.ai](https://msty.ai) (dernière version Msty Studio 3.0.0 Beta 15, 7 oct. 2026 ; [notes de version](https://msty.ai/changelog)).',
          'AnythingLLM — [anythingllm.com](https://anythingllm.com) (dernière version v1.19.0, 26 oct. 2026 ; [notes de version](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          'Open WebUI — [openwebui.com](https://openwebui.com) (dernière version v0.12.5, 29 oct. 2026 ; [notes de version](https://github.com/open-webui/open-webui/releases)).',
          'oMLX — [omlx.ai](https://omlx.ai) (dernière version v0.7.3rc1, 27 oct. 2026 ; [notes de version](https://github.com/jundot/omlx/releases)).',
          'Chatbox — [chatboxai.app](https://chatboxai.app) (dernière version v1.23.5, 24 sept. 2026 ; [notes de version](https://github.com/chatboxai/chatbox/releases)).',
          'Exigences système de LM Studio — [lmstudio.ai/docs/app/system-requirements](https://lmstudio.ai/docs/app/system-requirements) (Apple Silicon, macOS 14).',
          'Documentation macOS d’Ollama — [github.com/ollama/ollama](https://github.com/ollama/ollama/blob/main/docs/macos.mdx) (macOS 14+, puce M ou x86 CPU seul) et la [formule Homebrew](https://formulae.brew.sh/formula/ollama).',
          'README de Jan — [github.com/janhq/jan](https://github.com/janhq/jan) (macOS 13.6+, repères de RAM).',
          'README d’oMLX — [github.com/jundot/omlx](https://github.com/jundot/omlx) (macOS 15+, Apple Silicon, Apache-2.0).',
          'Installation macOS d’AnythingLLM — [docs.anythingllm.com](https://docs.anythingllm.com/installation-desktop/macos) (installateurs Apple Silicon et Intel).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Quelle est la meilleure app d’IA locale pour Mac ?',
            a: 'LM Studio est la première app la plus simple (gratuite, Apple Silicon, macOS 14+). Ollama convient le mieux aux utilisateurs du terminal et aux développeurs. Jan est une bonne app de chat open source. Le meilleur choix dépend de ce que vous voulez : une fenêtre, une ligne de commande ou une interface navigateur.',
          },
          {
            q: 'Quelles sont les meilleures alternatives à LM Studio sur Mac ?',
            a: 'Ollama (ligne de commande et API), Jan (app de chat open source), Msty (chat multi-modèles), AnythingLLM (chat de documents) et Chatbox (client léger). Open WebUI est une interface navigateur qui s’associe à Ollama plutôt qu’un remplacement direct.',
          },
          {
            q: 'Puis-je installer Ollama avec Homebrew ?',
            a: 'Oui. Homebrew propose une formule ollama, donc `brew install ollama` fonctionne. Vous pouvez aussi monter l’image disque officielle et glisser Ollama dans Applications.',
          },
          {
            q: 'Ces apps fonctionnent-elles sur les Mac Intel ?',
            a: 'Certaines oui. LM Studio et oMLX exigent Apple Silicon. Ollama tourne sur les Mac Intel en mode CPU seul, et AnythingLLM publie un installateur Intel. Open WebUI fonctionne dans un navigateur, mais le backend connecté doit tourner quelque part.',
          },
          {
            q: 'Ces apps sont-elles gratuites ?',
            a: 'LM Studio, Ollama, Jan, AnythingLLM, Open WebUI, oMLX et Chatbox sont gratuits à télécharger ; Msty a une offre gratuite et des options payantes. Les licences diffèrent : Ollama et AnythingLLM sont sous MIT, oMLX sous Apache-2.0, Chatbox Community Edition sous GPL-3.0, LM Studio et Msty sont à code fermé.',
          },
          {
            q: 'Quelle app choisir pour discuter avec mes propres documents ?',
            a: 'AnythingLLM est conçu pour cela : un chat de documents avec base vectorielle intégrée. Open WebUI prend aussi en charge le chat de documents une fois relié à un backend comme Ollama.',
          },
          {
            q: 'Ai-je besoin d’Open WebUI si j’utilise déjà Ollama ?',
            a: 'Non. Ollama fonctionne dans le terminal et avec sa propre app de bureau. Open WebUI ajoute à Ollama une interface navigateur, plusieurs utilisateurs et des fonctions supplémentaires.',
          },
          {
            q: 'Un LLM local fonctionne-t-il hors ligne sur Mac ?',
            a: 'Oui pour les modèles déjà téléchargés. LM Studio, Ollama, Jan et oMLX exécutent les modèles sur votre Mac. Les fonctions qui appellent des fournisseurs cloud ou la recherche web dans Msty, Chatbox, Open WebUI et AnythingLLM exigent une connexion internet.',
          },
          {
            q: 'De combien de RAM ai-je besoin ?',
            a: 'Cela dépend du modèle, pas de l’app. Le README de Jan suggère environ 8 Go de RAM pour les modèles 3B et 16 Go pour les modèles 7B. Les modèles plus grands en demandent plus ; consultez chaque fiche de modèle.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Meilleur Mac pour l’IA locale](/fr/power-local-llm/best-mac-for-local-ai-2026) — quel Mac choisir pour les modèles locaux.',
          '[Ollama sur Mac : installation sur Apple Silicon](/fr/local-llms/ollama-on-mac-apple-silicon-setup-2026) — installation et premier modèle.',
          '[MLX, Ollama et llama.cpp sur Mac](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — comparaison des moteurs.',
          '[Meilleurs modèles Ollama pour Apple Silicon](/fr/local-llms/best-models-apple-silicon-2026) — modèles selon la mémoire.',
          '[LM Studio, Jan et GPT4All](/fr/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — comparaison des apps de bureau.',
          '[Meilleures interfaces LLM locales](/fr/local-llms/best-local-llm-frontends) — interfaces de chat navigateur et bureau pour Ollama.',
          '[Meilleures apps LLM locales pour iPhone](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — l’équivalent pour iPhone.',
          '[Annuaire des logiciels LLM locaux](/fr/directory) — toutes les apps LLM locales, filtrables par Mac.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    last_full_refresh: '2026-10-31',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    designSkin: 'hub',
    title: '2026年Mac最佳本地LLM应用：LM Studio、Ollama、Jan等8款对比',
    seoTitle: '2026年Mac本地LLM应用对比：LM Studio等8款',
    intro:
      '2026年在Mac上运行LLM的方式，基本可以由八款应用覆盖：LM Studio、Ollama、Jan、Msty、AnythingLLM、Open WebUI、oMLX和Chatbox。本文对比它们的费用、许可证、Mac系统要求和各自擅长的场景，每款应用的最新版本均取自官方来源。',
    metaDescription:
      '对比8款Mac本地LLM应用：LM Studio、Ollama、Jan、Msty、AnythingLLM、Open WebUI、oMLX、Chatbox。费用、许可证、Apple Silicon要求与适用场景。',
    heroImage: '/images/best-local-llm-apps-mac-hero-zh.webp',
    twitterDescription:
      '2026年Mac本地LLM应用：LM Studio（最简单的图形界面）、Ollama（命令行与API）、Jan、Msty、AnythingLLM（文档）、Open WebUI、oMLX（MLX）、Chatbox。',
    audience:
      '想在自己的Mac上运行AI模型的用户，从挑选第一款应用的新手，到需要本地API的开发者。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Beginner',
    primaryTerm: 'Mac本地LLM应用',
    targetKeywords: [
      'mac 本地ai工具',
      'mac 本地llm应用',
      'lm studio 替代 mac',
      'ollama mac',
      'mac 运行llm',
      'homebrew llm',
      '本地ai软件 mac',
      'mac llm 图形界面',
    ],
    leadAnswerBlock:
      '**对大多数Mac用户来说，先安装LM Studio（免费图形应用，Apple Silicon，macOS 14及以上）并下载一个小模型；想用命令行和本地API就选Ollama，想要开源聊天应用就选Jan。** AnythingLLM、Open WebUI、Msty、oMLX和Chatbox分别覆盖文档、浏览器访问、多模型聊天、Apple MLX和轻量客户端。',
    quickAnswerTop: {
      zh: {
        question: '2026年Mac上最好的本地LLM应用是什么？',
        answer:
          'LM Studio是最容易上手的选择：免费图形应用，需要Apple Silicon的Mac和macOS 14或更高版本，内置模型浏览器。Ollama适合终端用户和开发者（MIT，macOS 14及以上，可用Homebrew一行安装）。Jan是免费的开源聊天应用。其余五款分别面向文档（AnythingLLM）、浏览器界面（Open WebUI）、多模型聊天（Msty）、Apple MLX速度（oMLX）和轻量客户端（Chatbox）。',
        bullets: [
          'LM Studio——免费图形应用，仅限Apple Silicon，macOS 14及以上。最容易的首次安装。',
          'Ollama——MIT，macOS 14及以上，支持Apple M系列芯片的GPU（Intel Mac仅CPU）。命令行、本地API和桌面应用。',
          'Jan——免费开源桌面聊天应用，在Mac上运行模型。',
          'AnythingLLM——MIT，提供Apple Silicon和Intel桌面安装包；可与自己的文档聊天。',
          'Open WebUI——浏览器聊天界面，连接Ollama等后端；用Docker或pip安装。',
          'oMLX——Apache-2.0，仅限Apple Silicon，macOS 15及以上；基于MLX的推理服务器，附Mac应用。',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '应该先安装哪款Mac应用？', anchor: '#which-app' },
      { label: 'Mac应用对比表', anchor: '#comparison-table' },
      { label: 'LM Studio：最简单的图形应用', anchor: '#lmstudio' },
      { label: 'Ollama：命令行、API与桌面应用', anchor: '#ollama' },
      { label: 'Jan：开源聊天应用', anchor: '#jan' },
      { label: 'Msty：多模型聊天', anchor: '#msty' },
      { label: 'AnythingLLM：与你的文档聊天', anchor: '#anythingllm' },
      { label: 'Open WebUI：浏览器聊天界面', anchor: '#openwebui' },
      { label: 'oMLX：面向Apple Silicon的MLX推理服务器', anchor: '#omlx' },
      { label: 'Chatbox：轻量客户端', anchor: '#chatbox' },
      { label: '你的Mac需要多少内存？', anchor: '#memory' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**在Mac上，LM Studio是最容易上手的选择。** 免费图形应用，内置模型浏览器；需要Apple Silicon的Mac和macOS 14或更高版本（LM Studio文档）。',
          '**Ollama是终端用户和开发者的标准选择。** MIT许可证，macOS 14及以上，使用Apple M系列芯片的GPU（Intel Mac仅CPU），可通过磁盘映像或`brew install ollama`安装。',
          '**Jan是开源聊天应用。** 免费桌面应用，在本地运行模型；其README列出macOS 13.6或更高版本。',
          '**AnythingLLM适合处理自己的文档。** MIT许可证，提供Apple Silicon和Intel Mac的桌面安装包，内置文档聊天。',
          '**Open WebUI是浏览器界面，不是模型运行器。** 它连接Ollama等后端；用Docker或pip安装。',
          '**Msty和Chatbox是多服务商聊天客户端。** 两者都能使用本地模型和云服务商；如果在意隐私，请检查服务商设置。',
          '**oMLX面向Apple原生速度。** 面向Apple Silicon的Apache-2.0 MLX推理服务器，附Mac应用；需要macOS 15或更高版本。',
          '**决定模型大小的是内存，不是应用。** Jan的README列出3B模型约需8 GB内存、7B模型约需16 GB；本列表中的任何应用都受同样的限制。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**对比的应用：** LM Studio、Ollama、Jan、Msty、AnythingLLM、Open WebUI、oMLX、Chatbox。',
          '**最新上游版本（2026年10月31日核对）：** LM Studio 0.4.28（2026年10月31日）· Ollama v0.40.13（10月28日）· Jan v0.8.8（10月28日）· Open WebUI v0.12.5（10月29日）· oMLX v0.7.3rc1（10月27日）· AnythingLLM v1.19.0（10月26日）· Msty Studio 3.0.0 Beta 15（10月7日）· Chatbox v1.23.5（2026年9月24日）。没有应用超过3个月未更新，因此无需显示停更警告。',
          '**仅限Apple Silicon：** LM Studio和oMLX。Intel Mac仍可运行Ollama（仅CPU）和AnythingLLM。',
          '**设计上完全本地：** LM Studio、Ollama、Jan、oMLX。**也能使用云服务商：** Msty、Chatbox、Open WebUI、AnythingLLM。',
          '**没有基准测试：** PromptQuorum没有测量这些应用在Mac上的每秒token数；本文对比的是官方来源中的事实。',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '应该先安装哪款Mac应用？',
        content:
          '**想要窗口、模型浏览器又不想用终端，就从LM Studio开始；习惯命令行，或需要给其他工具提供本地API，就从Ollama开始。** 两者都免费，模型都在你的Mac上运行。之后如果想在同一批模型上加浏览器界面或文档聊天，再添加Open WebUI或AnythingLLM。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年对大多数Mac用户来说，先装LM Studio（免费，Apple Silicon，macOS 14及以上）并下载小模型；偏好终端或需要本地API时用Ollama。',
          },
          {
            type: 'plain-terms',
            text: 'LM Studio是带按钮的普通Mac应用。Ollama是后台服务，通过终端或其他应用来操作。选择适合你工作方式的即可，两个也可以都装。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Mac应用对比表',
        content:
          '**这八款应用在三个方面不同：使用方式（窗口、终端还是浏览器）、能否连接云端模型，以及支持哪些Mac。** 版本和许可证条款于2026年10月31日取自各项目官方页面。',
        columns: ['应用', '费用/许可证', 'Mac要求', '界面', '最适合'],
        rows: [
          { '应用': '[LM Studio](https://lmstudio.ai)', '费用/许可证': '免费（闭源）', 'Mac要求': 'Apple Silicon，macOS 14+', '界面': '桌面应用', '最适合': '最容易的首次安装' },
          { '应用': '[Ollama](https://ollama.com)', '费用/许可证': '免费（MIT）', 'Mac要求': 'macOS 14+；Intel仅CPU', '界面': '命令行、API、应用', '最适合': '开发者、本地API' },
          { '应用': '[Jan](https://jan.ai)', '费用/许可证': '免费（开源）', 'Mac要求': 'macOS 13.6+（README）', '界面': '桌面应用', '最适合': '开源聊天' },
          { '应用': '[Msty](https://msty.ai)', '费用/许可证': '免费增值（闭源）', 'Mac要求': '未公布（见msty.ai）', '界面': '桌面应用', '最适合': '多模型聊天' },
          { '应用': '[AnythingLLM](https://anythingllm.com)', '费用/许可证': '免费（MIT）', 'Mac要求': 'Apple Silicon和Intel安装包', '界面': '桌面应用、网页', '最适合': '与文档聊天' },
          { '应用': '[Open WebUI](https://openwebui.com)', '费用/许可证': '免费（修改版BSD）', 'Mac要求': '浏览器即可，任何Mac', '界面': '浏览器（Docker/pip）', '最适合': '浏览器聊天界面' },
          { '应用': '[oMLX](https://omlx.ai)', '费用/许可证': '免费（Apache-2.0）', 'Mac要求': 'Apple Silicon，macOS 15+', '界面': 'Mac应用、服务器', '最适合': 'MLX推理' },
          { '应用': '[Chatbox](https://chatboxai.app)', '费用/许可证': '免费（GPL-3.0）', 'Mac要求': 'macOS应用（见chatboxai.app）', '界面': '桌面应用、网页', '最适合': '轻量客户端' },
        ],
        note:
          'Mac要求来自各项目自己的文档。项目未公布要求时，表中如实注明，不作猜测。',
      },
      lmstudio: {
        id: 'lmstudio',
        title: 'LM Studio：最简单的图形应用',
        content:
          '**LM Studio是在Mac上用普通应用窗口运行模型的最简单方式。** 它包含模型浏览器、聊天视图和本地服务器模式。完整评测：[LM Studio评测](/zh/power-local-llm/lm-studio-review)。',
        items: [
          '**简介：** 面向本地模型的免费图形应用；LM Studio官网称其运行时底层使用MLX和llama.cpp。它是闭源软件，目录记录显示个人和商业使用均免费。',
          '**最新版本（2026年10月31日核对）：** 0.4.28，2026年10月31日（[来源](https://lmstudio.ai/changelog/lmstudio)）。',
          '**Mac要求：** 据LM Studio系统要求页面，需要Apple Silicon（列出M1至M4）和macOS 14或更高版本。不支持Intel Mac。',
          '**最适合：** 想在不使用终端的情况下浏览、下载和聊天的新手。',
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Ollama：命令行、API与桌面应用',
        content:
          '**Ollama是终端用户和一切需要本地模型API场景的默认选择。** 它以后台服务运行，提供命令行、HTTP API和桌面应用。完整评测：[Ollama评测](/zh/power-local-llm/ollama-review)。安装指南：[在Mac上使用Ollama](/zh/local-llms/ollama-on-mac-apple-silicon-setup-2026)。',
        items: [
          '**简介：** MIT许可证的运行时。可挂载磁盘映像安装，或用Homebrew安装（`brew install ollama`；Homebrew中有该formula）。',
          '**最新版本（2026年10月31日核对）：** v0.40.13，2026年10月28日（[来源](https://github.com/ollama/ollama/releases)）。',
          '**Mac要求：** macOS Sonoma（14）或更高版本；Apple M系列芯片支持CPU和GPU，Intel Mac仅使用CPU（Ollama的macOS文档）。',
          '**最适合：** 开发者、脚本，以及作为Open WebUI等聊天应用的后端。',
        ],
      },
      jan: {
        id: 'jan',
        title: 'Jan：开源聊天应用',
        content:
          '**Jan是免费的开源桌面聊天应用，在本地运行模型。** 它像聊天助手一样使用，并为你下载模型。完整评测：[Jan评测](/zh/power-local-llm/jan-review)。',
        items: [
          '**简介：** 开源桌面应用（目录记录的许可证为Apache 2.0变体），提供macOS通用版下载。',
          '**最新版本（2026年10月31日核对）：** v0.8.8，2026年10月28日（[来源](https://github.com/janhq/jan/releases)）。',
          '**Mac要求：** 其README列出macOS 13.6或更高版本，3B模型约需8 GB内存，7B模型约需16 GB。',
          '**最适合：** 想要托管聊天助手的开源替代品的用户。',
        ],
      },
      msty: {
        id: 'msty',
        title: 'Msty：多模型聊天',
        content:
          '**Msty是一款精致的聊天应用，可在同一窗口中与本地模型和云服务商对话。** 它是闭源软件，有免费版。完整评测：[Msty评测](/zh/power-local-llm/msty-review)。',
        items: [
          '**简介：** CloudStack, LLC开发的桌面聊天客户端，更新日志发布在msty.ai。目录将其列为免费增值、闭源。',
          '**最新版本（2026年10月31日核对）：** Msty Studio 3.0.0 Beta 15，2026年10月7日（[来源](https://msty.ai/changelog)）。',
          '**Mac要求：** PromptQuorum查看的页面均未公布；安装前请到msty.ai确认。',
          '**最适合：** 想用一个界面连接多个服务商和模型的人。',
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: 'AnythingLLM：与你的文档聊天',
        content:
          '**想就自己的文件提问时，AnythingLLM是合适的选择。** 它自带向量库和文档聊天。完整评测：[AnythingLLM评测](/zh/power-local-llm/anythingllm-review)。',
        items: [
          '**简介：** MIT许可证的应用，有桌面版和Docker版；可使用本地模型或云服务商。',
          '**最新版本（2026年10月31日核对）：** v1.19.0，2026年10月26日（[来源](https://github.com/Mintplex-Labs/anything-llm/releases)）。',
          '**Mac要求：** 官方macOS安装页面分别提供Apple Silicon和Intel Mac的安装包。',
          '**最适合：** 在笔记本电脑上进行私密的文档问答。',
        ],
      },
      openwebui: {
        id: 'openwebui',
        title: 'Open WebUI：浏览器聊天界面',
        content:
          '**Open WebUI为本地模型提供类似ChatGPT的网页界面，但本身不运行模型。** 请与Ollama搭配使用。完整评测：[Open WebUI评测](/zh/local-llms/open-webui-review)。替代方案：[最佳本地LLM前端](/zh/local-llms/best-local-llm-frontends)。',
        items: [
          '**简介：** 自托管网页应用，用Docker或pip安装。自v0.6.6起采用带品牌条款的修改版BSD-3-Clause许可证，项目自己说明它不是OSI批准的许可证；仍可免费运行。',
          '**最新版本（2026年10月31日核对）：** v0.12.5，2026年10月29日（[来源](https://github.com/open-webui/open-webui/releases)）。',
          '**Mac要求：** 除Docker或Python外没有其他要求；任何有浏览器的Mac都能打开，模型在你连接的后端中运行。',
          '**最适合：** 在Ollama之上为一人或多人提供浏览器界面。',
        ],
      },
      omlx: {
        id: 'omlx',
        title: 'oMLX：面向Apple Silicon的MLX推理服务器',
        content:
          '**oMLX面向想把Apple的MLX框架放在本地服务器和Mac应用背后的用户。** 完整评测：[oMLX评测](/zh/power-local-llm/omlx-review)。背景：[Mac上的MLX、Ollama与llama.cpp对比](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)。',
        items: [
          '**简介：** Apache-2.0的MLX推理服务器，macOS应用会安装一个小型命令行垫片。',
          '**最新版本（2026年10月31日核对）：** v0.7.3rc1，2026年10月27日（[来源](https://github.com/jundot/omlx/releases)）。',
          '**Mac要求：** Apple Silicon（M1至M5）和macOS 15.0或更高版本（项目README）。GitHub上最新的标签v0.7.3rc1是候选版本。',
          '**最适合：** Apple原生推理和本地编程智能体。',
        ],
      },
      chatbox: {
        id: 'chatbox',
        title: 'Chatbox：轻量客户端',
        content:
          '**Chatbox是一款小巧的跨平台聊天客户端，可用于本地和云端模型。** 完整评测：[Chatbox评测](/zh/local-llms/chatbox-review)。',
        items: [
          '**简介：** 桌面和网页客户端；社区版以GPL-3.0开源。',
          '**最新版本（2026年10月31日核对）：** v1.23.5，2026年9月24日（[来源](https://github.com/chatboxai/chatbox/releases)）。',
          '**Mac要求：** 项目提供macOS下载；最新要求请见chatboxai.app。',
          '**最适合：** 连接Ollama或LM Studio服务器的轻量客户端。',
        ],
      },
      memory: {
        id: 'memory',
        title: '你的Mac需要多少内存？',
        content:
          '**无论选哪款应用，限制都来自统一内存。** 应用改变的是界面，而不是模型所需的内存。',
        items: [
          'Jan的README给出了起步参考：3B模型约8 GB内存，7B模型16 GB，13B模型32 GB。',
          '更大的量化模型需要更多内存；下载前请查看模型卡，并为macOS留出内存。',
          '按Mac型号选择硬件，请参阅[适合本地AI的最佳Mac](/zh/power-local-llm/best-mac-for-local-ai-2026)和[Apple Silicon上最佳Ollama模型](/zh/local-llms/best-models-apple-silicon-2026)。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**在Intel Mac上安装LM Studio或oMLX。** 两者都需要Apple Silicon。请改用Ollama（Intel上仅CPU）或AnythingLLM。',
          '**以为Open WebUI会运行模型。** 它只是界面；请先安装Ollama或其他后端。',
          '**以为每个聊天应用都完全在本地运行。** Msty、Chatbox、Open WebUI和AnythingLLM也可以连接云服务商；发送私密文本前请检查服务商设置。',
          '**下载比内存还大的模型。** 应用会安装它，但响应会很慢或失败。先从小模型开始，再逐步升级。',
          '**安装五款应用，各自有独立的模型文件夹。** 每款应用可能各存一份相同的模型；保留一两款即可节省磁盘空间。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          'LM Studio——[lmstudio.ai](https://lmstudio.ai)（最新版本0.4.28，2026年10月31日；[发布说明](https://lmstudio.ai/changelog/lmstudio)）。',
          'Ollama——[ollama.com](https://ollama.com)（最新版本v0.40.13，2026年10月28日；[发布说明](https://github.com/ollama/ollama/releases)）。',
          'Jan——[jan.ai](https://jan.ai)（最新版本v0.8.8，2026年10月28日；[发布说明](https://github.com/janhq/jan/releases)）。',
          'Msty——[msty.ai](https://msty.ai)（最新版本Msty Studio 3.0.0 Beta 15，2026年10月7日；[发布说明](https://msty.ai/changelog)）。',
          'AnythingLLM——[anythingllm.com](https://anythingllm.com)（最新版本v1.19.0，2026年10月26日；[发布说明](https://github.com/Mintplex-Labs/anything-llm/releases)）。',
          'Open WebUI——[openwebui.com](https://openwebui.com)（最新版本v0.12.5，2026年10月29日；[发布说明](https://github.com/open-webui/open-webui/releases)）。',
          'oMLX——[omlx.ai](https://omlx.ai)（最新版本v0.7.3rc1，2026年10月27日；[发布说明](https://github.com/jundot/omlx/releases)）。',
          'Chatbox——[chatboxai.app](https://chatboxai.app)（最新版本v1.23.5，2026年9月24日；[发布说明](https://github.com/chatboxai/chatbox/releases)）。',
          'LM Studio系统要求——[lmstudio.ai/docs/app/system-requirements](https://lmstudio.ai/docs/app/system-requirements)（Apple Silicon，macOS 14）。',
          'Ollama的macOS文档——[github.com/ollama/ollama](https://github.com/ollama/ollama/blob/main/docs/macos.mdx)（macOS 14及以上，M系列芯片或x86仅CPU）及[Homebrew formula](https://formulae.brew.sh/formula/ollama)。',
          'Jan README——[github.com/janhq/jan](https://github.com/janhq/jan)（macOS 13.6及以上，内存参考）。',
          'oMLX README——[github.com/jundot/omlx](https://github.com/jundot/omlx)（macOS 15及以上，Apple Silicon，Apache-2.0）。',
          'AnythingLLM的macOS安装——[docs.anythingllm.com](https://docs.anythingllm.com/installation-desktop/macos)（Apple Silicon和Intel安装包）。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Mac上最好的本地AI应用是什么？',
            a: 'LM Studio是最容易上手的第一款应用（免费，Apple Silicon，macOS 14及以上）。Ollama最适合终端用户和开发者。Jan是不错的开源聊天应用。最佳选择取决于你想要窗口、命令行还是浏览器界面。',
          },
          {
            q: 'Mac上有哪些LM Studio的替代品？',
            a: 'Ollama（命令行和API）、Jan（开源聊天应用）、Msty（多模型聊天）、AnythingLLM（文档聊天）和Chatbox（轻量客户端）。Open WebUI是与Ollama搭配的浏览器界面，并非直接替代品。',
          },
          {
            q: '可以用Homebrew安装Ollama吗？',
            a: '可以。Homebrew有ollama的formula，所以`brew install ollama`可用。你也可以挂载官方磁盘映像，把Ollama拖到“应用程序”文件夹。',
          },
          {
            q: '这些应用能在Intel Mac上运行吗？',
            a: '部分可以。LM Studio和oMLX需要Apple Silicon。Ollama在Intel Mac上以仅CPU模式运行，AnythingLLM提供Intel安装包。Open WebUI在浏览器中运行，但所连接的后端仍需在某处运行。',
          },
          {
            q: '这些应用免费吗？',
            a: 'LM Studio、Ollama、Jan、AnythingLLM、Open WebUI、oMLX和Chatbox可免费下载；Msty有免费版和付费选项。许可证各不相同：Ollama和AnythingLLM为MIT，oMLX为Apache-2.0，Chatbox社区版为GPL-3.0，LM Studio和Msty为闭源。',
          },
          {
            q: '想与自己的文档聊天，应选哪款应用？',
            a: 'AnythingLLM正是为此设计：带内置向量库的文档聊天功能。Open WebUI连接Ollama等后端后也支持文档聊天。',
          },
          {
            q: '已经在用Ollama，还需要Open WebUI吗？',
            a: '不需要。Ollama可在终端和自带桌面应用中使用。Open WebUI在Ollama之上增加浏览器界面、多用户和更多功能。',
          },
          {
            q: 'Mac上的本地LLM能离线使用吗？',
            a: '已下载的模型可以。LM Studio、Ollama、Jan和oMLX在你的Mac上运行模型。Msty、Chatbox、Open WebUI和AnythingLLM中调用云服务商或网页搜索的功能需要联网。',
          },
          {
            q: '我需要多少内存？',
            a: '取决于模型，而不是应用。Jan的README建议3B模型约8 GB内存，7B模型约16 GB。更大的模型需要更多；请查看各模型卡。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[适合本地AI的最佳Mac](/zh/power-local-llm/best-mac-for-local-ai-2026)——选哪款Mac运行本地模型。',
          '[在Mac上使用Ollama：Apple Silicon安装](/zh/local-llms/ollama-on-mac-apple-silicon-setup-2026)——安装与第一个模型。',
          '[Mac上的MLX、Ollama与llama.cpp对比](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)——引擎对比。',
          '[Apple Silicon上最佳Ollama模型](/zh/local-llms/best-models-apple-silicon-2026)——按内存大小选模型。',
          '[LM Studio、Jan与GPT4All对比](/zh/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026)——桌面应用对比。',
          '[最佳本地LLM前端](/zh/local-llms/best-local-llm-frontends)——适用于Ollama的浏览器和桌面聊天界面。',
          '[iPhone最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026)——iPhone版对应指南。',
          '[本地LLM软件目录](/zh/directory)——所有本地LLM应用，可按Mac筛选。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    last_full_refresh: '2026-10-31',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    designSkin: 'hub',
    title: 'Las mejores apps de LLM local para Mac en 2026: LM Studio, Ollama, Jan y 5 más',
    seoTitle: 'Mejores apps de LLM local para Mac 2026: 8 comparadas',
    intro:
      'Ocho apps cubren casi todas las formas de ejecutar un LLM en un Mac en 2026: LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX y Chatbox. Esta guía compara el coste, la licencia, los requisitos de Mac y los puntos fuertes de cada una; la última versión de cada app se leyó en su fuente oficial.',
    metaDescription:
      'Compara 8 apps de LLM local para Mac: LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox. Coste, licencia, Apple Silicon y mejor uso.',
    heroImage: '/images/best-local-llm-apps-mac-hero-es.webp',
    twitterDescription:
      'Mejores apps de LLM local para Mac en 2026: LM Studio (la interfaz más sencilla), Ollama (CLI + API), Jan, Msty, AnythingLLM (documentos), Open WebUI, oMLX (MLX), Chatbox.',
    audience:
      'Usuarios de Mac que quieren ejecutar modelos de IA en su propio equipo, desde principiantes que eligen su primera app hasta desarrolladores que necesitan una API local.',
    readTime: '9 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'app de LLM local para Mac',
    targetKeywords: [
      'mejor ia local para mac',
      'apps llm local mac',
      'alternativas a lm studio mac',
      'ollama mac',
      'ejecutar llm en mac',
      'homebrew llm',
      'software ia local mac',
      'herramientas llm mac',
    ],
    leadAnswerBlock:
      '**Para la mayoría de los usuarios de Mac, instala LM Studio (app gráfica gratuita, Apple Silicon, macOS 14+) y descarga un modelo pequeño; elige Ollama si quieres línea de comandos y una API local, y Jan si quieres una app de chat de código abierto.** AnythingLLM, Open WebUI, Msty, oMLX y Chatbox cubren documentos, acceso desde el navegador, chat multimodelo, Apple MLX y un cliente ligero.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor app de LLM local para Mac en 2026?',
        answer:
          'LM Studio es el inicio más fácil: una app gráfica gratuita que necesita un Mac con Apple Silicon y macOS 14 o posterior, con un explorador de modelos integrado. Ollama es la opción para usuarios de terminal y desarrolladores (MIT, macOS 14+, instalación de una línea con Homebrew). Jan es una app de chat de código abierto y gratuita. Las otras cinco cubren documentos (AnythingLLM), una interfaz de navegador (Open WebUI), chat multimodelo (Msty), velocidad con Apple MLX (oMLX) y un cliente ligero (Chatbox).',
        bullets: [
          'LM Studio — app gráfica gratuita, solo Apple Silicon, macOS 14+. La primera instalación más fácil.',
          'Ollama — MIT, macOS 14+, GPU de los chips Apple serie M (los Mac Intel solo usan CPU). CLI, API local y app de escritorio.',
          'Jan — app de chat de escritorio de código abierto y gratuita; ejecuta modelos en tu Mac.',
          'AnythingLLM — MIT, instaladores de escritorio para Apple Silicon e Intel; chat con tus propios documentos.',
          'Open WebUI — interfaz de chat en el navegador que se conecta a Ollama y otros backends; se instala con Docker o pip.',
          'oMLX — Apache-2.0, solo Apple Silicon, macOS 15+; servidor de inferencia basado en MLX con app para Mac.',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Qué app para Mac instalar primero?', anchor: '#which-app' },
      { label: 'Tabla comparativa de apps para Mac', anchor: '#comparison-table' },
      { label: 'LM Studio: la app gráfica más sencilla', anchor: '#lmstudio' },
      { label: 'Ollama: línea de comandos, API y app de escritorio', anchor: '#ollama' },
      { label: 'Jan: app de chat de código abierto', anchor: '#jan' },
      { label: 'Msty: chat multimodelo', anchor: '#msty' },
      { label: 'AnythingLLM: chat con tus documentos', anchor: '#anythingllm' },
      { label: 'Open WebUI: interfaz de chat en el navegador', anchor: '#openwebui' },
      { label: 'oMLX: servidor de inferencia MLX para Apple Silicon', anchor: '#omlx' },
      { label: 'Chatbox: cliente ligero', anchor: '#chatbox' },
      { label: '¿Cuánta memoria necesita tu Mac?', anchor: '#memory' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**LM Studio es el inicio más fácil en Mac.** App gráfica gratuita con explorador de modelos; necesita un Mac con Apple Silicon y macOS 14 o posterior (documentación de LM Studio).',
          '**Ollama es el estándar para usuarios de terminal y desarrolladores.** Licencia MIT, macOS 14+, usa la GPU de los chips Apple serie M (los Mac Intel solo CPU) y se instala con una imagen de disco o `brew install ollama`.',
          '**Jan es la app de chat de código abierto.** App de escritorio gratuita que ejecuta modelos en local; su README indica macOS 13.6 o posterior.',
          '**AnythingLLM sirve para tus propios documentos.** Licencia MIT, instaladores de escritorio para Apple Silicon y Mac Intel, chat de documentos integrado.',
          '**Open WebUI es una interfaz de navegador, no un ejecutor de modelos.** Se conecta a Ollama u otros backends; se instala con Docker o pip.',
          '**Msty y Chatbox son clientes de chat multiproveedor.** Ambos pueden usar modelos locales y proveedores en la nube; revisa el ajuste del proveedor si la privacidad importa.',
          '**oMLX es para velocidad nativa de Apple.** Servidor de inferencia MLX con licencia Apache-2.0 para Apple Silicon con app para Mac; requiere macOS 15 o posterior.',
          '**La memoria fija el tamaño del modelo, no la app.** El README de Jan indica unos 8 GB de RAM para modelos de 3B y 16 GB para modelos de 7B; cualquier app de esta lista choca con el mismo límite.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Apps comparadas:** LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox.',
          '**Últimas versiones originales (comprobadas el 31 oct 2026):** LM Studio 0.4.28 (31 oct 2026) · Ollama v0.40.13 (28 oct) · Jan v0.8.8 (28 oct) · Open WebUI v0.12.5 (29 oct) · oMLX v0.7.3rc1 (27 oct) · AnythingLLM v1.19.0 (26 oct) · Msty Studio 3.0.0 Beta 15 (7 oct) · Chatbox v1.23.5 (24 sep 2026). Ninguna tiene más de 3 meses, así que no se aplica ningún aviso de abandono.',
          '**Solo Apple Silicon:** LM Studio y oMLX. Los Mac Intel siguen ejecutando Ollama (solo CPU) y AnythingLLM.',
          '**Locales por diseño:** LM Studio, Ollama, Jan, oMLX. **También pueden usar la nube:** Msty, Chatbox, Open WebUI, AnythingLLM.',
          '**Sin benchmarks:** PromptQuorum no midió los tokens por segundo de estas apps en Mac; esta guía compara datos de fuentes oficiales.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '¿Qué app para Mac instalar primero?',
        content:
          '**Empieza por LM Studio si quieres una ventana, un explorador de modelos y nada de terminal; empieza por Ollama si te manejas con la línea de comandos o necesitas una API local para otras herramientas.** Las dos son gratuitas y ejecutan los modelos en tu Mac. Añade Open WebUI o AnythingLLM más adelante si quieres una interfaz de navegador o chat de documentos sobre los mismos modelos.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para la mayoría de los usuarios de Mac en 2026, instala LM Studio (gratuita, Apple Silicon, macOS 14+) y descarga un modelo pequeño; usa Ollama si prefieres la terminal o necesitas una API local.',
          },
          {
            type: 'plain-terms',
            text: 'LM Studio es una app normal de Mac con botones. Ollama es un servicio en segundo plano que manejas desde la terminal u otras apps. Elige la que encaje con tu forma de trabajar; puedes instalar las dos.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa de apps para Mac',
        content:
          '**Las ocho apps se diferencian en tres cosas: cómo se usan (ventana, terminal o navegador), si pueden llegar a modelos en la nube y qué Mac admiten.** Las versiones y las condiciones de licencia se leyeron en las páginas oficiales de cada proyecto el 31 oct 2026.',
        columns: ['App', 'Coste / licencia', 'Requisito de Mac', 'Interfaz', 'Mejor para'],
        rows: [
          { 'App': '[LM Studio](https://lmstudio.ai)', 'Coste / licencia': 'Gratis (código cerrado)', 'Requisito de Mac': 'Apple Silicon, macOS 14+', 'Interfaz': 'App de escritorio', 'Mejor para': 'Primera instalación fácil' },
          { 'App': '[Ollama](https://ollama.com)', 'Coste / licencia': 'Gratis (MIT)', 'Requisito de Mac': 'macOS 14+; Intel solo CPU', 'Interfaz': 'CLI, API, app', 'Mejor para': 'Desarrolladores, API local' },
          { 'App': '[Jan](https://jan.ai)', 'Coste / licencia': 'Gratis (código abierto)', 'Requisito de Mac': 'macOS 13.6+ (README)', 'Interfaz': 'App de escritorio', 'Mejor para': 'Chat de código abierto' },
          { 'App': '[Msty](https://msty.ai)', 'Coste / licencia': 'Freemium (código cerrado)', 'Requisito de Mac': 'No publicado (ver msty.ai)', 'Interfaz': 'App de escritorio', 'Mejor para': 'Chat multimodelo' },
          { 'App': '[AnythingLLM](https://anythingllm.com)', 'Coste / licencia': 'Gratis (MIT)', 'Requisito de Mac': 'Instaladores Apple Silicon e Intel', 'Interfaz': 'App de escritorio, web', 'Mejor para': 'Chat con documentos' },
          { 'App': '[Open WebUI](https://openwebui.com)', 'Coste / licencia': 'Gratis (BSD modificada)', 'Requisito de Mac': 'Cualquier Mac con navegador', 'Interfaz': 'Navegador (Docker/pip)', 'Mejor para': 'Chat en el navegador' },
          { 'App': '[oMLX](https://omlx.ai)', 'Coste / licencia': 'Gratis (Apache-2.0)', 'Requisito de Mac': 'Apple Silicon, macOS 15+', 'Interfaz': 'App Mac, servidor', 'Mejor para': 'Inferencia MLX' },
          { 'App': '[Chatbox](https://chatboxai.app)', 'Coste / licencia': 'Gratis (GPL-3.0)', 'Requisito de Mac': 'App macOS (ver chatboxai.app)', 'Interfaz': 'App de escritorio, web', 'Mejor para': 'Cliente ligero' },
        ],
        note:
          'Los requisitos de Mac proceden de la documentación de cada proyecto. Cuando un proyecto no publica ninguno, la tabla lo dice en lugar de adivinar.',
      },
      lmstudio: {
        id: 'lmstudio',
        title: 'LM Studio: la app gráfica más sencilla',
        content:
          '**LM Studio es la forma más fácil de ejecutar un modelo en Mac con una ventana de app normal.** Incluye un explorador de modelos, una vista de chat y un modo servidor local. Análisis completo: [reseña de LM Studio](/es/power-local-llm/lm-studio-review).',
        items: [
          '**Qué es:** una app gráfica gratuita para modelos locales; el sitio de LM Studio describe su runtime como MLX y llama.cpp por debajo. Es de código cerrado y, según el registro del directorio, gratuita para uso personal y profesional.',
          '**Última versión (comprobada el 31 oct 2026):** 0.4.28, 31 oct 2026 ([fuente](https://lmstudio.ai/changelog/lmstudio)).',
          '**Requisito de Mac:** Apple Silicon (se citan M1 a M4) y macOS 14 o posterior, según la página de requisitos del sistema de LM Studio. Los Mac Intel no son compatibles.',
          '**Mejor para:** quienes empiezan y quieren explorar, descargar y chatear sin terminal.',
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Ollama: línea de comandos, API y app de escritorio',
        content:
          '**Ollama es la opción por defecto para usuarios de terminal y para todo lo que necesite una API de modelos local.** Funciona como servicio en segundo plano con línea de comandos, API HTTP y app de escritorio. Análisis completo: [reseña de Ollama](/es/power-local-llm/ollama-review). Guía de instalación: [Ollama en Mac](/es/local-llms/ollama-on-mac-apple-silicon-setup-2026).',
        items: [
          '**Qué es:** un runtime con licencia MIT. Se instala montando la imagen de disco o con Homebrew (`brew install ollama`; la fórmula existe en Homebrew).',
          '**Última versión (comprobada el 31 oct 2026):** v0.40.13, 28 oct 2026 ([fuente](https://github.com/ollama/ollama/releases)).',
          '**Requisito de Mac:** macOS Sonoma (14) o posterior; los chips Apple serie M tienen soporte de CPU y GPU, los Mac Intel funcionan solo con CPU (documentación de Ollama para macOS).',
          '**Mejor para:** desarrolladores, scripts y como backend de Open WebUI u otras apps de chat.',
        ],
      },
      jan: {
        id: 'jan',
        title: 'Jan: app de chat de código abierto',
        content:
          '**Jan es una app de chat de escritorio gratuita y de código abierto que ejecuta modelos en local.** Se usa como un asistente de chat y descarga los modelos por ti. Análisis completo: [reseña de Jan](/es/power-local-llm/jan-review).',
        items: [
          '**Qué es:** una app de escritorio de código abierto (el directorio indica una variante de Apache 2.0) con descarga universal para macOS.',
          '**Última versión (comprobada el 31 oct 2026):** v0.8.8, 28 oct 2026 ([fuente](https://github.com/janhq/jan/releases)).',
          '**Requisito de Mac:** su README indica macOS 13.6 o posterior, con unos 8 GB de RAM para modelos de 3B y 16 GB para modelos de 7B.',
          '**Mejor para:** quienes quieren una alternativa de código abierto a un asistente de chat alojado.',
        ],
      },
      msty: {
        id: 'msty',
        title: 'Msty: chat multimodelo',
        content:
          '**Msty es una app de chat muy cuidada que puede hablar con modelos locales y con proveedores en la nube en la misma ventana.** Es de código cerrado con nivel gratuito. Análisis completo: [reseña de Msty](/es/power-local-llm/msty-review).',
        items: [
          '**Qué es:** un cliente de chat de escritorio de CloudStack, LLC; el registro de cambios se publica en msty.ai. El directorio la clasifica como freemium y de código cerrado.',
          '**Última versión (comprobada el 31 oct 2026):** Msty Studio 3.0.0 Beta 15, 7 oct 2026 ([fuente](https://msty.ai/changelog)).',
          '**Requisito de Mac:** no figura en las páginas que revisó PromptQuorum; confírmalo en msty.ai antes de instalar.',
          '**Mejor para:** quienes quieren una sola interfaz para varios proveedores y modelos.',
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: 'AnythingLLM: chat con tus documentos',
        content:
          '**AnythingLLM es la opción cuando quieres hacer preguntas sobre tus propios archivos.** Incluye un almacén de vectores y chat de documentos. Análisis completo: [reseña de AnythingLLM](/es/power-local-llm/anythingllm-review).',
        items: [
          '**Qué es:** una app con licencia MIT con versión de escritorio y versión Docker; puede usar modelos locales o proveedores en la nube.',
          '**Última versión (comprobada el 31 oct 2026):** v1.19.0, 26 oct 2026 ([fuente](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          '**Requisito de Mac:** la página oficial de instalación para macOS ofrece instaladores distintos para Apple Silicon y para Mac Intel.',
          '**Mejor para:** preguntas y respuestas privadas sobre documentos en un portátil.',
        ],
      },
      openwebui: {
        id: 'openwebui',
        title: 'Open WebUI: interfaz de chat en el navegador',
        content:
          '**Open WebUI ofrece una interfaz web al estilo ChatGPT para modelos locales, pero no ejecuta los modelos por sí mismo.** Combínalo con Ollama. Análisis completo: [reseña de Open WebUI](/es/local-llms/open-webui-review). Alternativas: [mejores interfaces para LLM local](/es/local-llms/best-local-llm-frontends).',
        items: [
          '**Qué es:** una app web autoalojada que se instala con Docker o pip. Desde la v0.6.6 usa una licencia BSD-3-Clause modificada con una cláusula de marca que el proyecto dice que no está aprobada por la OSI; su uso sigue siendo gratuito.',
          '**Última versión (comprobada el 31 oct 2026):** v0.12.5, 29 oct 2026 ([fuente](https://github.com/open-webui/open-webui/releases)).',
          '**Requisito de Mac:** ninguno más allá de Docker o Python; cualquier Mac con navegador puede abrirla y los modelos se ejecutan en el backend que conectes.',
          '**Mejor para:** una interfaz de navegador para uno o varios usuarios sobre Ollama.',
        ],
      },
      omlx: {
        id: 'omlx',
        title: 'oMLX: servidor de inferencia MLX para Apple Silicon',
        content:
          '**oMLX es para quienes quieren el framework MLX de Apple detrás de un servidor local y una app para Mac.** Análisis completo: [reseña de oMLX](/es/power-local-llm/omlx-review). Contexto: [MLX, Ollama y llama.cpp en Mac](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        items: [
          '**Qué es:** un servidor de inferencia basado en MLX con licencia Apache-2.0 y una app para macOS que instala un pequeño acceso por línea de comandos.',
          '**Última versión (comprobada el 31 oct 2026):** v0.7.3rc1, 27 oct 2026 ([fuente](https://github.com/jundot/omlx/releases)).',
          '**Requisito de Mac:** Apple Silicon (M1 a M5) y macOS 15.0 o posterior (README del proyecto). La última etiqueta de GitHub, v0.7.3rc1, es una versión candidata.',
          '**Mejor para:** inferencia nativa de Apple y agentes de programación locales.',
        ],
      },
      chatbox: {
        id: 'chatbox',
        title: 'Chatbox: cliente ligero',
        content:
          '**Chatbox es un cliente de chat multiplataforma pequeño para modelos locales y en la nube.** Análisis completo: [reseña de Chatbox](/es/local-llms/chatbox-review).',
        items: [
          '**Qué es:** un cliente de escritorio y web; la Community Edition se publica como código abierto bajo GPL-3.0.',
          '**Última versión (comprobada el 31 oct 2026):** v1.23.5, 24 sep 2026 ([fuente](https://github.com/chatboxai/chatbox/releases)).',
          '**Requisito de Mac:** el proyecto ofrece una descarga para macOS; consulta chatboxai.app para el requisito actual.',
          '**Mejor para:** un cliente ligero que se conecta a un servidor de Ollama o LM Studio.',
        ],
      },
      memory: {
        id: 'memory',
        title: '¿Cuánta memoria necesita tu Mac?',
        content:
          '**La memoria unificada es el límite, elijas la app que elijas.** La app cambia la interfaz, no la memoria que necesita un modelo.',
        items: [
          'El README de Jan da una guía inicial: unos 8 GB de RAM para modelos de 3B, 16 GB para modelos de 7B y 32 GB para modelos de 13B.',
          'Los modelos cuantizados más grandes necesitan más memoria; revisa la ficha del modelo antes de descargarlo y deja memoria libre para macOS.',
          'Para elegir hardware según el modelo de Mac, consulta [Mejor Mac para IA local](/es/power-local-llm/best-mac-for-local-ai-2026) y [Mejores modelos de Ollama para Apple Silicon](/es/local-llms/best-models-apple-silicon-2026).',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Instalar LM Studio u oMLX en un Mac Intel.** Ambos requieren Apple Silicon. Usa Ollama (solo CPU en Intel) o AnythingLLM.',
          '**Esperar que Open WebUI ejecute modelos.** Es solo la interfaz; instala antes Ollama u otro backend.',
          '**Suponer que toda app de chat es totalmente local.** Msty, Chatbox, Open WebUI y AnythingLLM también pueden conectarse a proveedores en la nube; revisa el ajuste del proveedor antes de enviar texto privado.',
          '**Descargar un modelo más grande que tu memoria.** La app lo instalará, pero las respuestas serán lentas o fallarán. Empieza con uno pequeño y ve subiendo.',
          '**Instalar cinco apps con carpetas de modelos separadas.** Cada app puede guardar su propia copia del mismo modelo; quédate con una o dos para ahorrar espacio en disco.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'LM Studio — [lmstudio.ai](https://lmstudio.ai) (última versión 0.4.28, 31 oct 2026; [notas de la versión](https://lmstudio.ai/changelog/lmstudio)).',
          'Ollama — [ollama.com](https://ollama.com) (última versión v0.40.13, 28 oct 2026; [notas de la versión](https://github.com/ollama/ollama/releases)).',
          'Jan — [jan.ai](https://jan.ai) (última versión v0.8.8, 28 oct 2026; [notas de la versión](https://github.com/janhq/jan/releases)).',
          'Msty — [msty.ai](https://msty.ai) (última versión Msty Studio 3.0.0 Beta 15, 7 oct 2026; [notas de la versión](https://msty.ai/changelog)).',
          'AnythingLLM — [anythingllm.com](https://anythingllm.com) (última versión v1.19.0, 26 oct 2026; [notas de la versión](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          'Open WebUI — [openwebui.com](https://openwebui.com) (última versión v0.12.5, 29 oct 2026; [notas de la versión](https://github.com/open-webui/open-webui/releases)).',
          'oMLX — [omlx.ai](https://omlx.ai) (última versión v0.7.3rc1, 27 oct 2026; [notas de la versión](https://github.com/jundot/omlx/releases)).',
          'Chatbox — [chatboxai.app](https://chatboxai.app) (última versión v1.23.5, 24 sep 2026; [notas de la versión](https://github.com/chatboxai/chatbox/releases)).',
          'Requisitos del sistema de LM Studio — [lmstudio.ai/docs/app/system-requirements](https://lmstudio.ai/docs/app/system-requirements) (Apple Silicon, macOS 14).',
          'Documentación de Ollama para macOS — [github.com/ollama/ollama](https://github.com/ollama/ollama/blob/main/docs/macos.mdx) (macOS 14+, chip M o x86 solo CPU) y la [fórmula de Homebrew](https://formulae.brew.sh/formula/ollama).',
          'README de Jan — [github.com/janhq/jan](https://github.com/janhq/jan) (macOS 13.6+, guía de RAM).',
          'README de oMLX — [github.com/jundot/omlx](https://github.com/jundot/omlx) (macOS 15+, Apple Silicon, Apache-2.0).',
          'Instalación de AnythingLLM en macOS — [docs.anythingllm.com](https://docs.anythingllm.com/installation-desktop/macos) (instaladores para Apple Silicon e Intel).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuál es la mejor app de IA local para Mac?',
            a: 'LM Studio es la primera app más fácil (gratuita, Apple Silicon, macOS 14+). Ollama encaja mejor con usuarios de terminal y desarrolladores. Jan es una buena app de chat de código abierto. La mejor opción depende de si quieres una ventana, una línea de comandos o una interfaz de navegador.',
          },
          {
            q: '¿Cuáles son las mejores alternativas a LM Studio en Mac?',
            a: 'Ollama (línea de comandos y API), Jan (app de chat de código abierto), Msty (chat multimodelo), AnythingLLM (chat de documentos) y Chatbox (cliente ligero). Open WebUI es una interfaz de navegador que se combina con Ollama, no un sustituto directo.',
          },
          {
            q: '¿Puedo instalar Ollama con Homebrew?',
            a: 'Sí. Homebrew tiene una fórmula de ollama, así que `brew install ollama` funciona. También puedes montar la imagen de disco oficial y arrastrar Ollama a Aplicaciones.',
          },
          {
            q: '¿Funcionan estas apps en Mac Intel?',
            a: 'Algunas sí. LM Studio y oMLX requieren Apple Silicon. Ollama funciona en Mac Intel en modo solo CPU y AnythingLLM publica un instalador para Intel. Open WebUI funciona en un navegador, pero el backend que conectes tiene que ejecutarse en algún sitio.',
          },
          {
            q: '¿Son gratuitas estas apps?',
            a: 'LM Studio, Ollama, Jan, AnythingLLM, Open WebUI, oMLX y Chatbox se descargan gratis; Msty tiene nivel gratuito y opciones de pago. Las licencias difieren: Ollama y AnythingLLM son MIT, oMLX es Apache-2.0, Chatbox Community Edition es GPL-3.0, y LM Studio y Msty son de código cerrado.',
          },
          {
            q: '¿Qué app elijo para chatear con mis propios documentos?',
            a: 'AnythingLLM está pensada para eso: un chat de documentos con almacén de vectores incluido. Open WebUI también admite chat de documentos una vez conectado a un backend como Ollama.',
          },
          {
            q: '¿Necesito Open WebUI si ya uso Ollama?',
            a: 'No. Ollama funciona desde la terminal y con su propia app de escritorio. Open WebUI añade a Ollama una interfaz de navegador, varios usuarios y más funciones.',
          },
          {
            q: '¿Funciona un LLM local en Mac sin conexión?',
            a: 'Sí, con los modelos que ya has descargado. LM Studio, Ollama, Jan y oMLX ejecutan los modelos en tu Mac. Las funciones que llaman a proveedores en la nube o a la búsqueda web en Msty, Chatbox, Open WebUI y AnythingLLM necesitan conexión a internet.',
          },
          {
            q: '¿Cuánta RAM necesito?',
            a: 'Depende del modelo, no de la app. El README de Jan sugiere unos 8 GB de RAM para modelos de 3B y 16 GB para modelos de 7B. Los modelos más grandes necesitan más; revisa la ficha de cada modelo.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejor Mac para IA local](/es/power-local-llm/best-mac-for-local-ai-2026) — qué Mac elegir para modelos locales.',
          '[Ollama en Mac: instalación en Apple Silicon](/es/local-llms/ollama-on-mac-apple-silicon-setup-2026) — instalación y primer modelo.',
          '[MLX, Ollama y llama.cpp en Mac](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — comparación de motores.',
          '[Mejores modelos de Ollama para Apple Silicon](/es/local-llms/best-models-apple-silicon-2026) — modelos según la memoria.',
          '[LM Studio, Jan y GPT4All](/es/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — comparación de apps de escritorio.',
          '[Mejores interfaces para LLM local](/es/local-llms/best-local-llm-frontends) — interfaces de chat de navegador y escritorio para Ollama.',
          '[Mejores apps de LLM local para iPhone](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el equivalente para iPhone.',
          '[Directorio de software de LLM local](/es/directory) — todas las apps de LLM local, filtrables por Mac.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    last_full_refresh: '2026-10-31',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    designSkin: 'hub',
    title: '2026년 Mac용 로컬 LLM 앱 추천: LM Studio, Ollama, Jan 등 8종 비교',
    seoTitle: 'Mac용 로컬 LLM 앱 추천 2026: 8종 비교',
    intro:
      '2026년에 Mac에서 LLM을 실행하는 방법은 LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox 여덟 가지 앱으로 대부분 설명됩니다. 이 가이드는 비용, 라이선스, Mac 요구 사항, 각 앱이 잘하는 분야를 비교하며, 각 앱의 최신 릴리스는 공식 출처에서 확인했습니다.',
    metaDescription:
      'Mac용 로컬 LLM 앱 8종 비교: LM Studio, Ollama, Jan, Msty 등. 비용, 라이선스, Apple Silicon 요건, 추천 용도를 정리했습니다.',
    heroImage: '/images/best-local-llm-apps-mac-hero-ko.webp',
    twitterDescription:
      '2026년 Mac용 로컬 LLM 앱 추천: LM Studio(가장 쉬운 GUI), Ollama(CLI와 API), Jan, Msty, AnythingLLM(문서), Open WebUI, oMLX(MLX), Chatbox.',
    audience:
      '자신의 Mac에서 AI 모델을 실행하려는 사용자. 첫 앱을 고르는 입문자부터 로컬 API가 필요한 개발자까지 대상으로 합니다.',
    readTime: '9분 읽기',
    educationalLevel: 'Beginner',
    primaryTerm: 'Mac용 로컬 LLM 앱',
    targetKeywords: [
      'mac 로컬 llm 추천',
      'mac 로컬 ai 앱',
      'lm studio 대안 mac',
      'ollama mac',
      'mac llm 실행',
      'homebrew llm',
      '로컬 llm 소프트웨어 mac',
      'mac llm gui',
    ],
    leadAnswerBlock:
      '**대부분의 Mac 사용자에게는 LM Studio(무료 GUI 앱, Apple Silicon, macOS 14 이상)에 작은 모델을 내려받는 방법을 추천합니다. 명령줄과 로컬 API가 필요하면 Ollama, 오픈소스 채팅 앱을 원하면 Jan을 선택하세요.** AnythingLLM, Open WebUI, Msty, oMLX, Chatbox는 각각 문서, 브라우저 접속, 다중 모델 채팅, Apple MLX, 가벼운 클라이언트를 맡습니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년 Mac에서 가장 좋은 로컬 LLM 앱은 무엇입니까?',
        answer:
          '가장 쉬운 시작은 LM Studio입니다. Apple Silicon Mac과 macOS 14 이상이 필요한 무료 GUI 앱이며 모델 탐색기가 내장되어 있습니다. 터미널 사용자와 개발자에게는 Ollama(MIT, macOS 14 이상, Homebrew 한 줄 설치)가 맞습니다. Jan은 무료 오픈소스 채팅 앱입니다. 나머지 다섯 앱은 문서(AnythingLLM), 브라우저 인터페이스(Open WebUI), 다중 모델 채팅(Msty), Apple MLX 속도(oMLX), 가벼운 클라이언트(Chatbox)를 담당합니다.',
        bullets: [
          'LM Studio — 무료 GUI 앱, Apple Silicon 전용, macOS 14 이상. 가장 쉬운 첫 설치.',
          'Ollama — MIT, macOS 14 이상, Apple M 시리즈 GPU 지원(Intel Mac은 CPU만). CLI, 로컬 API, 데스크톱 앱.',
          'Jan — 무료 오픈소스 데스크톱 채팅 앱으로 Mac에서 모델을 실행합니다.',
          'AnythingLLM — MIT, Apple Silicon과 Intel용 데스크톱 설치 파일 제공. 내 문서와 채팅.',
          'Open WebUI — Ollama 등 백엔드에 연결하는 브라우저 채팅 UI. Docker 또는 pip로 설치.',
          'oMLX — Apache-2.0, Apple Silicon 전용, macOS 15 이상. MLX 기반 추론 서버와 Mac 앱.',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '어떤 Mac 앱을 먼저 설치해야 합니까?', anchor: '#which-app' },
      { label: 'Mac 앱 비교표', anchor: '#comparison-table' },
      { label: 'LM Studio: 가장 쉬운 GUI 앱', anchor: '#lmstudio' },
      { label: 'Ollama: 명령줄, API, 데스크톱 앱', anchor: '#ollama' },
      { label: 'Jan: 오픈소스 채팅 앱', anchor: '#jan' },
      { label: 'Msty: 다중 모델 채팅', anchor: '#msty' },
      { label: 'AnythingLLM: 내 문서와 채팅', anchor: '#anythingllm' },
      { label: 'Open WebUI: 브라우저 채팅 인터페이스', anchor: '#openwebui' },
      { label: 'oMLX: Apple Silicon용 MLX 추론 서버', anchor: '#omlx' },
      { label: 'Chatbox: 가벼운 클라이언트', anchor: '#chatbox' },
      { label: 'Mac에는 메모리가 얼마나 필요합니까?', anchor: '#memory' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 글', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Mac에서는 LM Studio가 가장 시작하기 쉽습니다.** 모델 탐색기가 있는 무료 GUI 앱이며 Apple Silicon Mac과 macOS 14 이상이 필요합니다(LM Studio 문서).',
          '**Ollama는 터미널 사용자와 개발자의 표준입니다.** MIT 라이선스, macOS 14 이상, Apple M 시리즈 GPU에서 동작하며(Intel Mac은 CPU만) 디스크 이미지 또는 `brew install ollama`로 설치합니다.',
          '**Jan은 오픈소스 채팅 앱입니다.** 모델을 로컬에서 실행하는 무료 데스크톱 앱이며 README에는 macOS 13.6 이상으로 표기되어 있습니다.',
          '**AnythingLLM은 내 문서에 적합합니다.** MIT 라이선스이며 Apple Silicon과 Intel Mac용 데스크톱 설치 파일, 문서 채팅이 내장되어 있습니다.',
          '**Open WebUI는 브라우저 인터페이스이지 모델 실행기가 아닙니다.** Ollama 등 백엔드에 연결하며 Docker 또는 pip로 설치합니다.',
          '**Msty와 Chatbox는 다중 공급자 채팅 클라이언트입니다.** 둘 다 로컬 모델과 클라우드 공급자를 쓸 수 있으므로 개인정보가 중요하다면 공급자 설정을 확인하십시오.',
          '**oMLX는 Apple 네이티브 속도를 원하는 경우에 맞습니다.** Apple Silicon용 Apache-2.0 MLX 추론 서버와 Mac 앱이며 macOS 15 이상이 필요합니다.',
          '**모델 크기를 정하는 것은 앱이 아니라 메모리입니다.** Jan의 README는 3B 모델에 약 8 GB, 7B 모델에 16 GB RAM을 안내하며, 이 목록의 어떤 앱도 같은 한계를 따릅니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**비교한 앱:** LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox.',
          '**최신 업스트림 릴리스(2026년 10월 31일 확인):** LM Studio 0.4.28(2026년 10월 31일) · Ollama v0.40.13(10월 28일) · Jan v0.8.8(10월 28일) · Open WebUI v0.12.5(10월 29일) · oMLX v0.7.3rc1(10월 27일) · AnythingLLM v1.19.0(10월 26일) · Msty Studio 3.0.0 Beta 15(10월 7일) · Chatbox v1.23.5(2026년 9월 24일). 3개월 넘게 업데이트가 없는 앱은 없으므로 업데이트 중단 경고는 해당되지 않습니다.',
          '**Apple Silicon 전용:** LM Studio와 oMLX. Intel Mac에서는 Ollama(CPU만)와 AnythingLLM을 실행할 수 있습니다.',
          '**설계상 로컬 전용:** LM Studio, Ollama, Jan, oMLX. **클라우드도 사용 가능:** Msty, Chatbox, Open WebUI, AnythingLLM.',
          '**벤치마크 없음:** PromptQuorum은 이 앱들의 Mac 초당 토큰 수를 측정하지 않았습니다. 이 가이드는 공식 출처의 사실을 비교합니다.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '어떤 Mac 앱을 먼저 설치해야 합니까?',
        content:
          '**창과 모델 탐색기가 있고 터미널은 쓰고 싶지 않다면 LM Studio로 시작하고, 명령줄이 편하거나 다른 도구용 로컬 API가 필요하다면 Ollama로 시작하십시오.** 둘 다 무료이며 모델은 Mac에서 실행됩니다. 같은 모델 위에 브라우저 인터페이스나 문서 채팅을 얹고 싶다면 나중에 Open WebUI나 AnythingLLM을 추가하면 됩니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 대부분의 Mac 사용자에게는 LM Studio(무료, Apple Silicon, macOS 14 이상)에 작은 모델을 내려받는 방법을 추천하며, 터미널을 선호하거나 로컬 API가 필요하면 Ollama가 맞습니다.',
          },
          {
            type: 'plain-terms',
            text: 'LM Studio는 버튼이 있는 일반적인 Mac 앱입니다. Ollama는 터미널이나 다른 앱에서 다루는 백그라운드 서비스입니다. 작업 방식에 맞는 쪽을 고르면 되고 둘 다 설치해도 됩니다.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Mac 앱 비교표',
        content:
          '**여덟 앱은 세 가지에서 다릅니다. 사용 방식(창, 터미널, 브라우저), 클라우드 모델에 연결할 수 있는지, 지원하는 Mac입니다.** 버전과 라이선스 조건은 2026년 10월 31일에 각 프로젝트의 공식 페이지에서 확인했습니다.',
        columns: ['앱', '비용·라이선스', 'Mac 요구 사항', '인터페이스', '추천 용도'],
        rows: [
          { '앱': '[LM Studio](https://lmstudio.ai)', '비용·라이선스': '무료(비공개 소스)', 'Mac 요구 사항': 'Apple Silicon, macOS 14+', '인터페이스': '데스크톱 앱', '추천 용도': '쉬운 첫 설치' },
          { '앱': '[Ollama](https://ollama.com)', '비용·라이선스': '무료(MIT)', 'Mac 요구 사항': 'macOS 14+, Intel은 CPU만', '인터페이스': 'CLI, API, 앱', '추천 용도': '개발자, 로컬 API' },
          { '앱': '[Jan](https://jan.ai)', '비용·라이선스': '무료(오픈소스)', 'Mac 요구 사항': 'macOS 13.6+(README)', '인터페이스': '데스크톱 앱', '추천 용도': '오픈소스 채팅' },
          { '앱': '[Msty](https://msty.ai)', '비용·라이선스': '프리미엄(비공개 소스)', 'Mac 요구 사항': '미공개(msty.ai 확인)', '인터페이스': '데스크톱 앱', '추천 용도': '다중 모델 채팅' },
          { '앱': '[AnythingLLM](https://anythingllm.com)', '비용·라이선스': '무료(MIT)', 'Mac 요구 사항': 'Apple Silicon·Intel 설치 파일', '인터페이스': '데스크톱 앱, 웹', '추천 용도': '문서와 채팅' },
          { '앱': '[Open WebUI](https://openwebui.com)', '비용·라이선스': '무료(수정된 BSD 계열)', 'Mac 요구 사항': '브라우저가 있는 모든 Mac', '인터페이스': '브라우저(Docker/pip)', '추천 용도': '브라우저 채팅 UI' },
          { '앱': '[oMLX](https://omlx.ai)', '비용·라이선스': '무료(Apache-2.0)', 'Mac 요구 사항': 'Apple Silicon, macOS 15+', '인터페이스': 'Mac 앱, 서버', '추천 용도': 'MLX 추론' },
          { '앱': '[Chatbox](https://chatboxai.app)', '비용·라이선스': '무료(GPL-3.0)', 'Mac 요구 사항': 'macOS 앱(chatboxai.app)', '인터페이스': '데스크톱 앱, 웹', '추천 용도': '가벼운 클라이언트' },
        ],
        note:
          'Mac 요구 사항은 각 프로젝트의 자체 문서에 따랐습니다. 프로젝트가 공개하지 않은 경우 추측하지 않고 표에 그렇게 표기했습니다.',
      },
      lmstudio: {
        id: 'lmstudio',
        title: 'LM Studio: 가장 쉬운 GUI 앱',
        content:
          '**LM Studio는 일반적인 앱 창으로 Mac에서 모델을 실행하는 가장 쉬운 방법입니다.** 모델 탐색기, 채팅 화면, 로컬 서버 모드를 갖추고 있습니다. 전체 리뷰: [LM Studio 리뷰](/ko/power-local-llm/lm-studio-review).',
        items: [
          '**개요:** 로컬 모델용 무료 GUI 앱입니다. LM Studio 사이트는 런타임을 내부적으로 MLX와 llama.cpp를 사용한다고 설명합니다. 비공개 소스이며 디렉토리 기록에는 개인·업무용 모두 무료로 되어 있습니다.',
          '**최신 릴리스(2026년 10월 31일 확인):** 0.4.28, 2026년 10월 31일([출처](https://lmstudio.ai/changelog/lmstudio)).',
          '**Mac 요구 사항:** LM Studio 시스템 요구 사항 페이지에 따르면 Apple Silicon(M1~M4 표기)과 macOS 14 이상이 필요합니다. Intel Mac은 지원하지 않습니다.',
          '**추천 대상:** 터미널 없이 탐색, 다운로드, 채팅을 하려는 처음 사용하는 분.',
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Ollama: 명령줄, API, 데스크톱 앱',
        content:
          '**Ollama는 터미널 사용자와 로컬 모델 API가 필요한 모든 용도의 기본 선택입니다.** 명령줄, HTTP API, 데스크톱 앱을 갖춘 백그라운드 서비스로 동작합니다. 전체 리뷰: [Ollama 리뷰](/ko/power-local-llm/ollama-review). 설치 가이드: [Mac에서 Ollama 사용하기](/ko/local-llms/ollama-on-mac-apple-silicon-setup-2026).',
        items: [
          '**개요:** MIT 라이선스 런타임입니다. 디스크 이미지를 마운트하거나 Homebrew(`brew install ollama`, Homebrew에 formula가 있습니다)로 설치합니다.',
          '**최신 릴리스(2026년 10월 31일 확인):** v0.40.13, 2026년 10월 28일([출처](https://github.com/ollama/ollama/releases)).',
          '**Mac 요구 사항:** macOS Sonoma(14) 이상. Apple M 시리즈 칩은 CPU와 GPU를 지원하고 Intel Mac은 CPU로만 동작합니다(Ollama macOS 문서).',
          '**추천 대상:** 개발자, 스크립트, Open WebUI 등 채팅 앱의 백엔드.',
        ],
      },
      jan: {
        id: 'jan',
        title: 'Jan: 오픈소스 채팅 앱',
        content:
          '**Jan은 모델을 로컬에서 실행하는 무료 오픈소스 데스크톱 채팅 앱입니다.** 채팅 비서처럼 쓰며 모델 다운로드도 대신해 줍니다. 전체 리뷰: [Jan 리뷰](/ko/power-local-llm/jan-review).',
        items: [
          '**개요:** 오픈소스 데스크톱 앱입니다(디렉토리에는 Apache 2.0 변형 라이선스로 기재). macOS 유니버설 다운로드를 제공합니다.',
          '**최신 릴리스(2026년 10월 31일 확인):** v0.8.8, 2026년 10월 28일([출처](https://github.com/janhq/jan/releases)).',
          '**Mac 요구 사항:** README에는 macOS 13.6 이상, 3B 모델에 약 8 GB, 7B 모델에 16 GB RAM이 안내되어 있습니다.',
          '**추천 대상:** 호스팅형 채팅 비서의 오픈소스 대안을 원하는 사용자.',
        ],
      },
      msty: {
        id: 'msty',
        title: 'Msty: 다중 모델 채팅',
        content:
          '**Msty는 같은 창에서 로컬 모델과 클라우드 공급자를 함께 쓸 수 있는 완성도 높은 채팅 앱입니다.** 비공개 소스이며 무료 요금제가 있습니다. 전체 리뷰: [Msty 리뷰](/ko/power-local-llm/msty-review).',
        items: [
          '**개요:** CloudStack, LLC의 데스크톱 채팅 클라이언트로 변경 내역은 msty.ai에 게시됩니다. 디렉토리에는 프리미엄, 비공개 소스로 분류되어 있습니다.',
          '**최신 릴리스(2026년 10월 31일 확인):** Msty Studio 3.0.0 Beta 15, 2026년 10월 7일([출처](https://msty.ai/changelog)).',
          '**Mac 요구 사항:** PromptQuorum이 확인한 페이지에는 공개되어 있지 않습니다. 설치 전에 msty.ai에서 확인하십시오.',
          '**추천 대상:** 여러 공급자와 모델을 하나의 화면에서 쓰고 싶은 사용자.',
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: 'AnythingLLM: 내 문서와 채팅',
        content:
          '**내 파일에 대해 질문하고 싶을 때는 AnythingLLM이 적합합니다.** 벡터 저장소와 문서 채팅이 함께 들어 있습니다. 전체 리뷰: [AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review).',
        items: [
          '**개요:** MIT 라이선스 앱으로 데스크톱 버전과 Docker 버전이 있으며 로컬 모델이나 클라우드 공급자를 사용할 수 있습니다.',
          '**최신 릴리스(2026년 10월 31일 확인):** v1.19.0, 2026년 10월 26일([출처](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          '**Mac 요구 사항:** 공식 macOS 설치 페이지에 Apple Silicon용과 Intel Mac용 설치 파일이 따로 있습니다.',
          '**추천 대상:** 노트북에서 하는 비공개 문서 질의응답.',
        ],
      },
      openwebui: {
        id: 'openwebui',
        title: 'Open WebUI: 브라우저 채팅 인터페이스',
        content:
          '**Open WebUI는 로컬 모델용 ChatGPT 스타일 웹 인터페이스이지만 모델을 직접 실행하지는 않습니다.** Ollama와 함께 쓰십시오. 전체 리뷰: [Open WebUI 리뷰](/ko/local-llms/open-webui-review). 대안: [최고의 로컬 LLM 프론트엔드](/ko/local-llms/best-local-llm-frontends).',
        items: [
          '**개요:** Docker 또는 pip로 설치하는 셀프 호스팅 웹 앱입니다. v0.6.6부터 브랜딩 조항이 있는 수정된 BSD-3-Clause 라이선스를 사용하며, 프로젝트 스스로 OSI 승인 라이선스가 아니라고 밝힙니다. 무료로 실행할 수 있습니다.',
          '**최신 릴리스(2026년 10월 31일 확인):** v0.12.5, 2026년 10월 29일([출처](https://github.com/open-webui/open-webui/releases)).',
          '**Mac 요구 사항:** Docker 또는 Python 외에는 없습니다. 브라우저가 있는 Mac이면 열 수 있고 모델은 연결한 백엔드에서 실행됩니다.',
          '**추천 대상:** Ollama 위에 얹는 1인 또는 다중 사용자용 브라우저 인터페이스.',
        ],
      },
      omlx: {
        id: 'omlx',
        title: 'oMLX: Apple Silicon용 MLX 추론 서버',
        content:
          '**oMLX는 Apple의 MLX 프레임워크를 로컬 서버와 Mac 앱 뒤에서 쓰고 싶은 사용자를 위한 앱입니다.** 전체 리뷰: [oMLX 리뷰](/ko/power-local-llm/omlx-review). 배경: [Mac에서 MLX·Ollama·llama.cpp 비교](/ko/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        items: [
          '**개요:** Apache-2.0 MLX 기반 추론 서버이며, 작은 명령줄 shim을 설치하는 macOS 앱이 있습니다.',
          '**최신 릴리스(2026년 10월 31일 확인):** v0.7.3rc1, 2026년 10월 27일([출처](https://github.com/jundot/omlx/releases)).',
          '**Mac 요구 사항:** Apple Silicon(M1~M5)과 macOS 15.0 이상(프로젝트 README). GitHub의 최신 태그 v0.7.3rc1은 릴리스 후보입니다.',
          '**추천 대상:** Apple 네이티브 추론과 로컬 코딩 에이전트.',
        ],
      },
      chatbox: {
        id: 'chatbox',
        title: 'Chatbox: 가벼운 클라이언트',
        content:
          '**Chatbox는 로컬 및 클라우드 모델용의 작은 크로스 플랫폼 채팅 클라이언트입니다.** 전체 리뷰: [Chatbox 리뷰](/ko/local-llms/chatbox-review).',
        items: [
          '**개요:** 데스크톱 및 웹 클라이언트이며 Community Edition은 GPL-3.0으로 오픈소스로 공개되어 있습니다.',
          '**최신 릴리스(2026년 10월 31일 확인):** v1.23.5, 2026년 9월 24일([출처](https://github.com/chatboxai/chatbox/releases)).',
          '**Mac 요구 사항:** 프로젝트가 macOS 다운로드를 제공합니다. 현재 요구 사항은 chatboxai.app에서 확인하십시오.',
          '**추천 대상:** Ollama나 LM Studio 서버에 연결하는 가벼운 클라이언트.',
        ],
      },
      memory: {
        id: 'memory',
        title: 'Mac에는 메모리가 얼마나 필요합니까?',
        content:
          '**어떤 앱을 고르든 한계는 통합 메모리입니다.** 앱이 바꾸는 것은 인터페이스이지 모델이 필요로 하는 메모리가 아닙니다.',
        items: [
          'Jan의 README가 제시하는 출발 기준은 3B 모델에 약 8 GB, 7B 모델에 16 GB, 13B 모델에 32 GB RAM입니다.',
          '더 큰 양자화 모델은 더 많은 메모리가 필요합니다. 다운로드 전에 모델 카드를 확인하고 macOS를 위한 여유 메모리를 남겨 두십시오.',
          'Mac 모델별 하드웨어 선택은 [로컬 AI에 가장 좋은 Mac](/ko/power-local-llm/best-mac-for-local-ai-2026)과 [Apple Silicon용 최고의 Ollama 모델](/ko/local-llms/best-models-apple-silicon-2026)을 참고하십시오.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '**Intel Mac에 LM Studio나 oMLX를 설치하는 것.** 둘 다 Apple Silicon이 필요합니다. 대신 Ollama(Intel에서는 CPU만)나 AnythingLLM을 쓰십시오.',
          '**Open WebUI가 모델을 실행한다고 기대하는 것.** 인터페이스일 뿐이므로 먼저 Ollama 등 백엔드를 설치하십시오.',
          '**모든 채팅 앱이 완전히 로컬이라고 가정하는 것.** Msty, Chatbox, Open WebUI, AnythingLLM은 클라우드 공급자에도 연결할 수 있습니다. 비공개 텍스트를 보내기 전에 공급자 설정을 확인하십시오.',
          '**메모리보다 큰 모델을 내려받는 것.** 앱은 설치해 주지만 응답이 느리거나 실패합니다. 작은 모델로 시작해 단계적으로 올리십시오.',
          '**모델 폴더가 따로인 앱을 다섯 개 설치하는 것.** 앱마다 같은 모델의 사본을 저장할 수 있습니다. 한두 개만 남기면 디스크를 아낄 수 있습니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'LM Studio — [lmstudio.ai](https://lmstudio.ai)(최신 릴리스 0.4.28, 2026년 10월 31일, [릴리스 노트](https://lmstudio.ai/changelog/lmstudio)).',
          'Ollama — [ollama.com](https://ollama.com)(최신 릴리스 v0.40.13, 2026년 10월 28일, [릴리스 노트](https://github.com/ollama/ollama/releases)).',
          'Jan — [jan.ai](https://jan.ai)(최신 릴리스 v0.8.8, 2026년 10월 28일, [릴리스 노트](https://github.com/janhq/jan/releases)).',
          'Msty — [msty.ai](https://msty.ai)(최신 릴리스 Msty Studio 3.0.0 Beta 15, 2026년 10월 7일, [릴리스 노트](https://msty.ai/changelog)).',
          'AnythingLLM — [anythingllm.com](https://anythingllm.com)(최신 릴리스 v1.19.0, 2026년 10월 26일, [릴리스 노트](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          'Open WebUI — [openwebui.com](https://openwebui.com)(최신 릴리스 v0.12.5, 2026년 10월 29일, [릴리스 노트](https://github.com/open-webui/open-webui/releases)).',
          'oMLX — [omlx.ai](https://omlx.ai)(최신 릴리스 v0.7.3rc1, 2026년 10월 27일, [릴리스 노트](https://github.com/jundot/omlx/releases)).',
          'Chatbox — [chatboxai.app](https://chatboxai.app)(최신 릴리스 v1.23.5, 2026년 9월 24일, [릴리스 노트](https://github.com/chatboxai/chatbox/releases)).',
          'LM Studio 시스템 요구 사항 — [lmstudio.ai/docs/app/system-requirements](https://lmstudio.ai/docs/app/system-requirements)(Apple Silicon, macOS 14).',
          'Ollama macOS 문서 — [github.com/ollama/ollama](https://github.com/ollama/ollama/blob/main/docs/macos.mdx)(macOS 14 이상, M 칩 또는 x86은 CPU만)와 [Homebrew formula](https://formulae.brew.sh/formula/ollama).',
          'Jan README — [github.com/janhq/jan](https://github.com/janhq/jan)(macOS 13.6 이상, RAM 안내).',
          'oMLX README — [github.com/jundot/omlx](https://github.com/jundot/omlx)(macOS 15 이상, Apple Silicon, Apache-2.0).',
          'AnythingLLM macOS 설치 — [docs.anythingllm.com](https://docs.anythingllm.com/installation-desktop/macos)(Apple Silicon 및 Intel 설치 파일).',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Mac에서 가장 좋은 로컬 AI 앱은 무엇입니까?',
            a: '가장 쉬운 첫 앱은 LM Studio(무료, Apple Silicon, macOS 14 이상)입니다. 터미널 사용자와 개발자에게는 Ollama가 가장 잘 맞습니다. Jan은 좋은 오픈소스 채팅 앱입니다. 창, 명령줄, 브라우저 인터페이스 중 무엇을 원하느냐에 따라 최선이 달라집니다.',
          },
          {
            q: 'Mac에서 LM Studio의 대안은 무엇입니까?',
            a: 'Ollama(명령줄과 API), Jan(오픈소스 채팅 앱), Msty(다중 모델 채팅), AnythingLLM(문서 채팅), Chatbox(가벼운 클라이언트)가 있습니다. Open WebUI는 직접적인 대체재가 아니라 Ollama와 함께 쓰는 브라우저 인터페이스입니다.',
          },
          {
            q: 'Homebrew로 Ollama를 설치할 수 있습니까?',
            a: '네. Homebrew에 ollama formula가 있으므로 `brew install ollama`로 설치됩니다. 공식 디스크 이미지를 마운트해 응용 프로그램 폴더로 끌어다 놓아도 됩니다.',
          },
          {
            q: '이 앱들은 Intel Mac에서 동작합니까?',
            a: '일부는 동작합니다. LM Studio와 oMLX는 Apple Silicon이 필요합니다. Ollama는 Intel Mac에서 CPU 전용 모드로 실행되며 AnythingLLM은 Intel용 설치 파일을 제공합니다. Open WebUI는 브라우저에서 동작하지만 연결하는 백엔드는 어딘가에서 실행되어야 합니다.',
          },
          {
            q: '이 앱들은 무료입니까?',
            a: 'LM Studio, Ollama, Jan, AnythingLLM, Open WebUI, oMLX, Chatbox는 무료로 내려받을 수 있고 Msty에는 무료 요금제와 유료 옵션이 있습니다. 라이선스는 다릅니다. Ollama와 AnythingLLM은 MIT, oMLX는 Apache-2.0, Chatbox Community Edition은 GPL-3.0이며 LM Studio와 Msty는 비공개 소스입니다.',
          },
          {
            q: '내 문서와 채팅하려면 어떤 앱을 골라야 합니까?',
            a: 'AnythingLLM이 그 용도로 만들어졌으며 벡터 저장소가 포함된 문서 채팅 기능이 있습니다. Open WebUI도 Ollama 같은 백엔드에 연결하면 문서 채팅을 지원합니다.',
          },
          {
            q: '이미 Ollama를 쓴다면 Open WebUI가 필요합니까?',
            a: '아니요. Ollama는 터미널과 자체 데스크톱 앱에서 동작합니다. Open WebUI는 Ollama 위에 브라우저 인터페이스, 다중 사용자, 추가 기능을 더합니다.',
          },
          {
            q: 'Mac의 로컬 LLM은 오프라인에서 동작합니까?',
            a: '이미 내려받은 모델은 그렇습니다. LM Studio, Ollama, Jan, oMLX는 Mac에서 모델을 실행합니다. Msty, Chatbox, Open WebUI, AnythingLLM에서 클라우드 공급자나 웹 검색을 호출하는 기능은 인터넷 연결이 필요합니다.',
          },
          {
            q: 'RAM은 얼마나 필요합니까?',
            a: '앱이 아니라 모델에 따라 다릅니다. Jan의 README는 3B 모델에 약 8 GB, 7B 모델에 16 GB RAM을 제안합니다. 더 큰 모델은 더 많이 필요하므로 각 모델 카드를 확인하십시오.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 AI에 가장 좋은 Mac](/ko/power-local-llm/best-mac-for-local-ai-2026) — 로컬 모델용으로 어떤 Mac을 살지.',
          '[Mac에서 Ollama: Apple Silicon 설정](/ko/local-llms/ollama-on-mac-apple-silicon-setup-2026) — 설치와 첫 모델.',
          '[Mac에서 MLX·Ollama·llama.cpp 비교](/ko/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — 엔진 비교.',
          '[Apple Silicon용 최고의 Ollama 모델](/ko/local-llms/best-models-apple-silicon-2026) — 메모리 크기별 모델.',
          '[LM Studio·Jan·GPT4All 비교](/ko/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — 데스크톱 앱 비교.',
          '[최고의 로컬 LLM 프론트엔드](/ko/local-llms/best-local-llm-frontends) — Ollama용 브라우저·데스크톱 채팅 인터페이스.',
          '[iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 버전 가이드.',
          '[로컬 LLM 소프트웨어 디렉토리](/ko/directory) — Mac으로 필터링할 수 있는 모든 로컬 LLM 앱.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    last_full_refresh: '2026-10-31',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    designSkin: 'hub',
    title: 'Melhores apps de LLM local para Mac em 2026: LM Studio, Ollama, Jan e mais 5',
    seoTitle: 'Melhores apps de LLM local para Mac 2026: 8 comparados',
    intro:
      'Oito apps cobrem quase todas as formas de executar um LLM em um Mac em 2026: LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX e Chatbox. Este guia compara custo, licença, requisitos de Mac e os pontos fortes de cada app; a versão mais recente de cada um foi lida na fonte oficial.',
    metaDescription:
      'Compare 8 apps de LLM local para Mac: LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox. Custo, licença, Apple Silicon e melhor uso.',
    heroImage: '/images/best-local-llm-apps-mac-hero-pt.webp',
    twitterDescription:
      'Melhores apps de LLM local para Mac em 2026: LM Studio (interface mais simples), Ollama (CLI + API), Jan, Msty, AnythingLLM (documentos), Open WebUI, oMLX (MLX), Chatbox.',
    audience:
      'Usuários de Mac que querem executar modelos de IA na própria máquina, de iniciantes que escolhem o primeiro app a desenvolvedores que precisam de uma API local.',
    readTime: '9 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'app de LLM local para Mac',
    targetKeywords: [
      'melhor ia local para mac',
      'apps llm local mac',
      'alternativas ao lm studio mac',
      'ollama mac',
      'rodar llm no mac',
      'homebrew llm',
      'software de ia local mac',
      'ferramentas llm mac',
    ],
    leadAnswerBlock:
      '**Para a maioria dos usuários de Mac, instale o LM Studio (app gráfico gratuito, Apple Silicon, macOS 14+) e baixe um modelo pequeno; escolha o Ollama se quiser linha de comando e uma API local, e o Jan se quiser um app de chat de código aberto.** AnythingLLM, Open WebUI, Msty, oMLX e Chatbox cobrem documentos, acesso pelo navegador, chat com vários modelos, Apple MLX e um cliente leve.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor app de LLM local para Mac em 2026?',
        answer:
          'O LM Studio é o começo mais fácil: um app gráfico gratuito que exige um Mac com Apple Silicon e macOS 14 ou posterior, com navegador de modelos integrado. O Ollama é a escolha para quem usa o terminal e para desenvolvedores (MIT, macOS 14+, instalação em uma linha com Homebrew). O Jan é um app de chat de código aberto e gratuito. Os outros cinco cobrem documentos (AnythingLLM), interface no navegador (Open WebUI), chat com vários modelos (Msty), velocidade com Apple MLX (oMLX) e um cliente leve (Chatbox).',
        bullets: [
          'LM Studio — app gráfico gratuito, somente Apple Silicon, macOS 14+. A primeira instalação mais fácil.',
          'Ollama — MIT, macOS 14+, GPU dos chips Apple série M (Macs Intel usam só CPU). CLI, API local e app de desktop.',
          'Jan — app de chat de desktop de código aberto e gratuito; executa modelos no seu Mac.',
          'AnythingLLM — MIT, instaladores de desktop para Apple Silicon e Intel; chat com seus próprios documentos.',
          'Open WebUI — interface de chat no navegador que se conecta ao Ollama e a outros backends; instalação com Docker ou pip.',
          'oMLX — Apache-2.0, somente Apple Silicon, macOS 15+; servidor de inferência baseado em MLX com app para Mac.',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Qual app para Mac instalar primeiro?', anchor: '#which-app' },
      { label: 'Tabela comparativa de apps para Mac', anchor: '#comparison-table' },
      { label: 'LM Studio: o app gráfico mais simples', anchor: '#lmstudio' },
      { label: 'Ollama: linha de comando, API e app de desktop', anchor: '#ollama' },
      { label: 'Jan: app de chat de código aberto', anchor: '#jan' },
      { label: 'Msty: chat com vários modelos', anchor: '#msty' },
      { label: 'AnythingLLM: chat com seus documentos', anchor: '#anythingllm' },
      { label: 'Open WebUI: interface de chat no navegador', anchor: '#openwebui' },
      { label: 'oMLX: servidor de inferência MLX para Apple Silicon', anchor: '#omlx' },
      { label: 'Chatbox: cliente leve', anchor: '#chatbox' },
      { label: 'De quanta memória seu Mac precisa?', anchor: '#memory' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O LM Studio é o começo mais fácil no Mac.** App gráfico gratuito com navegador de modelos; exige um Mac com Apple Silicon e macOS 14 ou posterior (documentação do LM Studio).',
          '**O Ollama é o padrão para quem usa o terminal e para desenvolvedores.** Licença MIT, macOS 14+, usa a GPU dos chips Apple série M (Macs Intel só CPU) e instala por imagem de disco ou `brew install ollama`.',
          '**O Jan é o app de chat de código aberto.** App de desktop gratuito que executa modelos localmente; o README indica macOS 13.6 ou posterior.',
          '**O AnythingLLM serve para seus próprios documentos.** Licença MIT, instaladores de desktop para Apple Silicon e Macs Intel, chat de documentos integrado.',
          '**O Open WebUI é uma interface de navegador, não um executor de modelos.** Ele se conecta ao Ollama ou a outros backends; instalação com Docker ou pip.',
          '**Msty e Chatbox são clientes de chat com vários provedores.** Ambos podem usar modelos locais e provedores na nuvem; verifique a configuração do provedor se a privacidade importa.',
          '**O oMLX é para velocidade nativa da Apple.** Servidor de inferência MLX Apache-2.0 para Apple Silicon com app para Mac; exige macOS 15 ou posterior.',
          '**A memória define o tamanho do modelo, não o app.** O README do Jan indica cerca de 8 GB de RAM para modelos de 3B e 16 GB para modelos de 7B; qualquer app desta lista esbarra no mesmo limite.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Apps comparados:** LM Studio, Ollama, Jan, Msty, AnythingLLM, Open WebUI, oMLX, Chatbox.',
          '**Últimas versões originais (verificadas em 31 out. 2026):** LM Studio 0.4.28 (31 out. 2026) · Ollama v0.40.13 (28 out.) · Jan v0.8.8 (28 out.) · Open WebUI v0.12.5 (29 out.) · oMLX v0.7.3rc1 (27 out.) · AnythingLLM v1.19.0 (26 out.) · Msty Studio 3.0.0 Beta 15 (7 out.) · Chatbox v1.23.5 (24 set. 2026). Nenhum tem mais de 3 meses, então nenhum aviso de abandono se aplica.',
          '**Somente Apple Silicon:** LM Studio e oMLX. Macs Intel ainda executam Ollama (só CPU) e AnythingLLM.',
          '**Locais por design:** LM Studio, Ollama, Jan, oMLX. **Também podem usar a nuvem:** Msty, Chatbox, Open WebUI, AnythingLLM.',
          '**Sem benchmarks:** a PromptQuorum não mediu os tokens por segundo desses apps no Mac; este guia compara fatos de fontes oficiais.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Qual app para Mac instalar primeiro?',
        content:
          '**Comece pelo LM Studio se quiser uma janela, um navegador de modelos e nenhum terminal; comece pelo Ollama se você se sente à vontade com a linha de comando ou precisa de uma API local para outras ferramentas.** Os dois são gratuitos e executam os modelos no seu Mac. Adicione Open WebUI ou AnythingLLM depois, se quiser uma interface de navegador ou chat de documentos sobre os mesmos modelos.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para a maioria dos usuários de Mac em 2026, instale o LM Studio (gratuito, Apple Silicon, macOS 14+) e baixe um modelo pequeno; use o Ollama se preferir o terminal ou precisar de uma API local.',
          },
          {
            type: 'plain-terms',
            text: 'O LM Studio é um app comum de Mac, com botões. O Ollama é um serviço em segundo plano que você controla pelo terminal ou por outros apps. Escolha o que combina com seu jeito de trabalhar; dá para instalar os dois.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa de apps para Mac',
        content:
          '**Os oito apps diferem em três pontos: como você os usa (janela, terminal ou navegador), se alcançam modelos na nuvem e quais Macs suportam.** Versões e termos de licença foram lidos nas páginas oficiais dos projetos em 31 out. 2026.',
        columns: ['App', 'Custo / licença', 'Requisito de Mac', 'Interface', 'Melhor para'],
        rows: [
          { 'App': '[LM Studio](https://lmstudio.ai)', 'Custo / licença': 'Grátis (código fechado)', 'Requisito de Mac': 'Apple Silicon, macOS 14+', 'Interface': 'App de desktop', 'Melhor para': 'Primeira instalação fácil' },
          { 'App': '[Ollama](https://ollama.com)', 'Custo / licença': 'Grátis (MIT)', 'Requisito de Mac': 'macOS 14+; Intel só CPU', 'Interface': 'CLI, API, app', 'Melhor para': 'Desenvolvedores, API local' },
          { 'App': '[Jan](https://jan.ai)', 'Custo / licença': 'Grátis (código aberto)', 'Requisito de Mac': 'macOS 13.6+ (README)', 'Interface': 'App de desktop', 'Melhor para': 'Chat de código aberto' },
          { 'App': '[Msty](https://msty.ai)', 'Custo / licença': 'Freemium (código fechado)', 'Requisito de Mac': 'Não publicado (ver msty.ai)', 'Interface': 'App de desktop', 'Melhor para': 'Chat com vários modelos' },
          { 'App': '[AnythingLLM](https://anythingllm.com)', 'Custo / licença': 'Grátis (MIT)', 'Requisito de Mac': 'Instaladores Apple Silicon e Intel', 'Interface': 'App de desktop, web', 'Melhor para': 'Chat com documentos' },
          { 'App': '[Open WebUI](https://openwebui.com)', 'Custo / licença': 'Grátis (BSD modificada)', 'Requisito de Mac': 'Qualquer Mac com navegador', 'Interface': 'Navegador (Docker/pip)', 'Melhor para': 'Chat no navegador' },
          { 'App': '[oMLX](https://omlx.ai)', 'Custo / licença': 'Grátis (Apache-2.0)', 'Requisito de Mac': 'Apple Silicon, macOS 15+', 'Interface': 'App Mac, servidor', 'Melhor para': 'Inferência MLX' },
          { 'App': '[Chatbox](https://chatboxai.app)', 'Custo / licença': 'Grátis (GPL-3.0)', 'Requisito de Mac': 'App macOS (ver chatboxai.app)', 'Interface': 'App de desktop, web', 'Melhor para': 'Cliente leve' },
        ],
        note:
          'Os requisitos de Mac vêm da documentação de cada projeto. Quando um projeto não publica nenhum, a tabela diz isso em vez de adivinhar.',
      },
      lmstudio: {
        id: 'lmstudio',
        title: 'LM Studio: o app gráfico mais simples',
        content:
          '**O LM Studio é a forma mais fácil de executar um modelo no Mac com uma janela de app normal.** Inclui navegador de modelos, tela de chat e modo servidor local. Análise completa: [análise do LM Studio](/pt/power-local-llm/lm-studio-review).',
        items: [
          '**O que é:** um app gráfico gratuito para modelos locais; o site do LM Studio descreve o runtime como MLX e llama.cpp por baixo. É de código fechado e, segundo o registro do diretório, gratuito para uso pessoal e comercial.',
          '**Última versão (verificada em 31 out. 2026):** 0.4.28, 31 out. 2026 ([fonte](https://lmstudio.ai/changelog/lmstudio)).',
          '**Requisito de Mac:** Apple Silicon (M1 a M4 citados) e macOS 14 ou posterior, segundo a página de requisitos de sistema do LM Studio. Macs Intel não são suportados.',
          '**Melhor para:** iniciantes que querem explorar, baixar e conversar sem terminal.',
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Ollama: linha de comando, API e app de desktop',
        content:
          '**O Ollama é a escolha padrão de quem usa o terminal e de tudo que precisa de uma API de modelos local.** Roda como serviço em segundo plano com linha de comando, API HTTP e app de desktop. Análise completa: [análise do Ollama](/pt/power-local-llm/ollama-review). Guia de instalação: [Ollama no Mac](/pt/local-llms/ollama-on-mac-apple-silicon-setup-2026).',
        items: [
          '**O que é:** um runtime com licença MIT. Instale montando a imagem de disco ou com Homebrew (`brew install ollama`; a fórmula existe no Homebrew).',
          '**Última versão (verificada em 31 out. 2026):** v0.40.13, 28 out. 2026 ([fonte](https://github.com/ollama/ollama/releases)).',
          '**Requisito de Mac:** macOS Sonoma (14) ou posterior; chips Apple série M têm suporte a CPU e GPU, Macs Intel rodam só na CPU (documentação do Ollama para macOS).',
          '**Melhor para:** desenvolvedores, scripts e como backend do Open WebUI ou de outros apps de chat.',
        ],
      },
      jan: {
        id: 'jan',
        title: 'Jan: app de chat de código aberto',
        content:
          '**O Jan é um app de chat de desktop gratuito e de código aberto que executa modelos localmente.** Funciona como um assistente de chat e baixa os modelos para você. Análise completa: [análise do Jan](/pt/power-local-llm/jan-review).',
        items: [
          '**O que é:** um app de desktop de código aberto (o diretório indica uma variante da Apache 2.0) com download universal para macOS.',
          '**Última versão (verificada em 31 out. 2026):** v0.8.8, 28 out. 2026 ([fonte](https://github.com/janhq/jan/releases)).',
          '**Requisito de Mac:** o README indica macOS 13.6 ou posterior, com cerca de 8 GB de RAM para modelos de 3B e 16 GB para modelos de 7B.',
          '**Melhor para:** quem quer uma alternativa de código aberto a um assistente de chat hospedado.',
        ],
      },
      msty: {
        id: 'msty',
        title: 'Msty: chat com vários modelos',
        content:
          '**O Msty é um app de chat bem acabado que conversa com modelos locais e provedores na nuvem na mesma janela.** É de código fechado, com nível gratuito. Análise completa: [análise do Msty](/pt/power-local-llm/msty-review).',
        items: [
          '**O que é:** um cliente de chat de desktop da CloudStack, LLC; o changelog é publicado em msty.ai. O diretório o classifica como freemium e de código fechado.',
          '**Última versão (verificada em 31 out. 2026):** Msty Studio 3.0.0 Beta 15, 7 out. 2026 ([fonte](https://msty.ai/changelog)).',
          '**Requisito de Mac:** não consta nas páginas que a PromptQuorum verificou; confirme em msty.ai antes de instalar.',
          '**Melhor para:** quem quer uma única interface para vários provedores e modelos.',
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: 'AnythingLLM: chat com seus documentos',
        content:
          '**O AnythingLLM é a escolha quando você quer fazer perguntas sobre seus próprios arquivos.** Traz um armazenamento de vetores e chat de documentos. Análise completa: [análise do AnythingLLM](/pt/power-local-llm/anythingllm-review).',
        items: [
          '**O que é:** um app com licença MIT com versão de desktop e versão Docker; pode usar modelos locais ou provedores na nuvem.',
          '**Última versão (verificada em 31 out. 2026):** v1.19.0, 26 out. 2026 ([fonte](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          '**Requisito de Mac:** a página oficial de instalação para macOS oferece instaladores separados para Apple Silicon e para Macs Intel.',
          '**Melhor para:** perguntas e respostas privadas sobre documentos em um notebook.',
        ],
      },
      openwebui: {
        id: 'openwebui',
        title: 'Open WebUI: interface de chat no navegador',
        content:
          '**O Open WebUI oferece uma interface web no estilo ChatGPT para modelos locais, mas não executa os modelos por conta própria.** Use-o com o Ollama. Análise completa: [análise do Open WebUI](/pt/local-llms/open-webui-review). Alternativas: [melhores interfaces para LLM local](/pt/local-llms/best-local-llm-frontends).',
        items: [
          '**O que é:** um app web auto-hospedado, instalado com Docker ou pip. Desde a v0.6.6 usa uma licença BSD-3-Clause modificada com cláusula de marca, que o projeto diz não ser aprovada pela OSI; o uso continua gratuito.',
          '**Última versão (verificada em 31 out. 2026):** v0.12.5, 29 out. 2026 ([fonte](https://github.com/open-webui/open-webui/releases)).',
          '**Requisito de Mac:** nenhum além de Docker ou Python; qualquer Mac com navegador pode abri-lo, e os modelos rodam no backend que você conectar.',
          '**Melhor para:** uma interface de navegador para um ou vários usuários sobre o Ollama.',
        ],
      },
      omlx: {
        id: 'omlx',
        title: 'oMLX: servidor de inferência MLX para Apple Silicon',
        content:
          '**O oMLX é para quem quer o framework MLX da Apple atrás de um servidor local e de um app para Mac.** Análise completa: [análise do oMLX](/pt/power-local-llm/omlx-review). Contexto: [MLX, Ollama e llama.cpp no Mac](/pt/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        items: [
          '**O que é:** um servidor de inferência baseado em MLX com licença Apache-2.0 e um app para macOS que instala um pequeno atalho de linha de comando.',
          '**Última versão (verificada em 31 out. 2026):** v0.7.3rc1, 27 out. 2026 ([fonte](https://github.com/jundot/omlx/releases)).',
          '**Requisito de Mac:** Apple Silicon (M1 a M5) e macOS 15.0 ou posterior (README do projeto). A tag mais recente no GitHub, v0.7.3rc1, é uma versão candidata.',
          '**Melhor para:** inferência nativa da Apple e agentes de programação locais.',
        ],
      },
      chatbox: {
        id: 'chatbox',
        title: 'Chatbox: cliente leve',
        content:
          '**O Chatbox é um cliente de chat multiplataforma pequeno, para modelos locais e na nuvem.** Análise completa: [análise do Chatbox](/pt/local-llms/chatbox-review).',
        items: [
          '**O que é:** um cliente de desktop e web; a Community Edition é publicada como código aberto sob GPL-3.0.',
          '**Última versão (verificada em 31 out. 2026):** v1.23.5, 24 set. 2026 ([fonte](https://github.com/chatboxai/chatbox/releases)).',
          '**Requisito de Mac:** o projeto oferece download para macOS; veja chatboxai.app para o requisito atual.',
          '**Melhor para:** um cliente leve que se conecta a um servidor Ollama ou LM Studio.',
        ],
      },
      memory: {
        id: 'memory',
        title: 'De quanta memória seu Mac precisa?',
        content:
          '**A memória unificada é o limite, qualquer que seja o app escolhido.** O app muda a interface, não a memória de que um modelo precisa.',
        items: [
          'O README do Jan dá um ponto de partida: cerca de 8 GB de RAM para modelos de 3B, 16 GB para modelos de 7B e 32 GB para modelos de 13B.',
          'Modelos quantizados maiores precisam de mais memória; confira a ficha do modelo antes de baixar e deixe memória livre para o macOS.',
          'Para escolher hardware por modelo de Mac, veja [Melhor Mac para IA local](/pt/power-local-llm/best-mac-for-local-ai-2026) e [Melhores modelos Ollama para Apple Silicon](/pt/local-llms/best-models-apple-silicon-2026).',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Instalar LM Studio ou oMLX em um Mac Intel.** Ambos exigem Apple Silicon. Use o Ollama (só CPU no Intel) ou o AnythingLLM.',
          '**Esperar que o Open WebUI execute modelos.** Ele é só a interface; instale antes o Ollama ou outro backend.',
          '**Supor que todo app de chat é totalmente local.** Msty, Chatbox, Open WebUI e AnythingLLM também podem se conectar a provedores na nuvem; verifique a configuração do provedor antes de enviar texto privado.',
          '**Baixar um modelo maior que a sua memória.** O app o instala, mas as respostas ficam lentas ou falham. Comece com um modelo pequeno e vá subindo.',
          '**Instalar cinco apps com pastas de modelos separadas.** Cada app pode guardar a própria cópia do mesmo modelo; fique com um ou dois para economizar espaço em disco.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'LM Studio — [lmstudio.ai](https://lmstudio.ai) (última versão 0.4.28, 31 out. 2026; [notas da versão](https://lmstudio.ai/changelog/lmstudio)).',
          'Ollama — [ollama.com](https://ollama.com) (última versão v0.40.13, 28 out. 2026; [notas da versão](https://github.com/ollama/ollama/releases)).',
          'Jan — [jan.ai](https://jan.ai) (última versão v0.8.8, 28 out. 2026; [notas da versão](https://github.com/janhq/jan/releases)).',
          'Msty — [msty.ai](https://msty.ai) (última versão Msty Studio 3.0.0 Beta 15, 7 out. 2026; [notas da versão](https://msty.ai/changelog)).',
          'AnythingLLM — [anythingllm.com](https://anythingllm.com) (última versão v1.19.0, 26 out. 2026; [notas da versão](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          'Open WebUI — [openwebui.com](https://openwebui.com) (última versão v0.12.5, 29 out. 2026; [notas da versão](https://github.com/open-webui/open-webui/releases)).',
          'oMLX — [omlx.ai](https://omlx.ai) (última versão v0.7.3rc1, 27 out. 2026; [notas da versão](https://github.com/jundot/omlx/releases)).',
          'Chatbox — [chatboxai.app](https://chatboxai.app) (última versão v1.23.5, 24 set. 2026; [notas da versão](https://github.com/chatboxai/chatbox/releases)).',
          'Requisitos de sistema do LM Studio — [lmstudio.ai/docs/app/system-requirements](https://lmstudio.ai/docs/app/system-requirements) (Apple Silicon, macOS 14).',
          'Documentação do Ollama para macOS — [github.com/ollama/ollama](https://github.com/ollama/ollama/blob/main/docs/macos.mdx) (macOS 14+, chip M ou x86 só CPU) e a [fórmula do Homebrew](https://formulae.brew.sh/formula/ollama).',
          'README do Jan — [github.com/janhq/jan](https://github.com/janhq/jan) (macOS 13.6+, referência de RAM).',
          'README do oMLX — [github.com/jundot/omlx](https://github.com/jundot/omlx) (macOS 15+, Apple Silicon, Apache-2.0).',
          'Instalação do AnythingLLM no macOS — [docs.anythingllm.com](https://docs.anythingllm.com/installation-desktop/macos) (instaladores para Apple Silicon e Intel).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual é o melhor app de IA local para Mac?',
            a: 'O LM Studio é o primeiro app mais fácil (gratuito, Apple Silicon, macOS 14+). O Ollama é o mais indicado para quem usa o terminal e para desenvolvedores. O Jan é um bom app de chat de código aberto. A melhor escolha depende de você querer uma janela, uma linha de comando ou uma interface de navegador.',
          },
          {
            q: 'Quais são as melhores alternativas ao LM Studio no Mac?',
            a: 'Ollama (linha de comando e API), Jan (app de chat de código aberto), Msty (chat com vários modelos), AnythingLLM (chat de documentos) e Chatbox (cliente leve). O Open WebUI é uma interface de navegador que combina com o Ollama, não um substituto direto.',
          },
          {
            q: 'Posso instalar o Ollama com Homebrew?',
            a: 'Sim. O Homebrew tem uma fórmula do ollama, então `brew install ollama` funciona. Você também pode montar a imagem de disco oficial e arrastar o Ollama para Aplicativos.',
          },
          {
            q: 'Esses apps funcionam em Macs Intel?',
            a: 'Alguns, sim. LM Studio e oMLX exigem Apple Silicon. O Ollama roda em Macs Intel só na CPU, e o AnythingLLM publica um instalador para Intel. O Open WebUI roda no navegador, mas o backend conectado precisa rodar em algum lugar.',
          },
          {
            q: 'Esses apps são gratuitos?',
            a: 'LM Studio, Ollama, Jan, AnythingLLM, Open WebUI, oMLX e Chatbox são gratuitos para baixar; o Msty tem nível gratuito e opções pagas. As licenças diferem: Ollama e AnythingLLM são MIT, oMLX é Apache-2.0, o Chatbox Community Edition é GPL-3.0, e LM Studio e Msty são de código fechado.',
          },
          {
            q: 'Qual app escolher para conversar com meus próprios documentos?',
            a: 'O AnythingLLM foi feito para isso: chat de documentos com armazenamento de vetores incluso. O Open WebUI também oferece chat de documentos quando conectado a um backend como o Ollama.',
          },
          {
            q: 'Preciso do Open WebUI se já uso o Ollama?',
            a: 'Não. O Ollama funciona no terminal e com o próprio app de desktop. O Open WebUI acrescenta ao Ollama uma interface de navegador, vários usuários e mais recursos.',
          },
          {
            q: 'Um LLM local no Mac funciona offline?',
            a: 'Sim, para os modelos que você já baixou. LM Studio, Ollama, Jan e oMLX executam os modelos no seu Mac. Recursos que chamam provedores na nuvem ou busca na web em Msty, Chatbox, Open WebUI e AnythingLLM precisam de internet.',
          },
          {
            q: 'De quanta RAM eu preciso?',
            a: 'Depende do modelo, não do app. O README do Jan sugere cerca de 8 GB de RAM para modelos de 3B e 16 GB para modelos de 7B. Modelos maiores precisam de mais; confira a ficha de cada modelo.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhor Mac para IA local](/pt/power-local-llm/best-mac-for-local-ai-2026) — qual Mac escolher para modelos locais.',
          '[Ollama no Mac: instalação no Apple Silicon](/pt/local-llms/ollama-on-mac-apple-silicon-setup-2026) — instalação e primeiro modelo.',
          '[MLX, Ollama e llama.cpp no Mac](/pt/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — comparação de motores.',
          '[Melhores modelos Ollama para Apple Silicon](/pt/local-llms/best-models-apple-silicon-2026) — modelos por tamanho de memória.',
          '[LM Studio, Jan e GPT4All](/pt/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — comparação de apps de desktop.',
          '[Melhores interfaces para LLM local](/pt/local-llms/best-local-llm-frontends) — interfaces de chat no navegador e no desktop para o Ollama.',
          '[Melhores apps de LLM local para iPhone](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o equivalente para iPhone.',
          '[Diretório de software de LLM local](/pt/directory) — todos os apps de LLM local, filtráveis por Mac.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-31',
    dateModified: '2026-10-31',
    last_full_refresh: '2026-10-31',
    next_refresh_due: '2027-04-30',
    theme: 'Easiest Desktop Apps',
    designSkin: 'hub',
    title: 'أفضل تطبيقات النماذج اللغوية المحلية لنظام Mac في 2026: LM Studio وOllama وJan و5 غيرها',
    seoTitle: 'أفضل تطبيقات LLM المحلية لنظام Mac 2026: مقارنة 8',
    intro:
      'تغطي ثمانية تطبيقات معظم طرق تشغيل نموذج لغوي على جهاز Mac في 2026: LM Studio وOllama وJan وMsty وAnythingLLM وOpen WebUI وoMLX وChatbox. يقارن هذا الدليل التكلفة والترخيص ومتطلبات Mac ونقاط قوة كل تطبيق، وقد قُرئ أحدث إصدار لكل منها من مصدره الرسمي.',
    metaDescription:
      'قارن 8 تطبيقات LLM محلية لنظام Mac: LM Studio وOllama وJan وMsty وAnythingLLM وOpen WebUI وoMLX وChatbox. التكلفة والترخيص ومتطلبات Apple Silicon.',
    heroImage: '/images/best-local-llm-apps-mac-hero-ar.webp',
    twitterDescription:
      'أفضل تطبيقات LLM المحلية لنظام Mac في 2026: LM Studio (أبسط واجهة) وOllama (سطر الأوامر وAPI) وJan وMsty وAnythingLLM (المستندات) وOpen WebUI وoMLX (MLX) وChatbox.',
    audience:
      'مستخدمو Mac الذين يريدون تشغيل نماذج الذكاء الاصطناعي على جهازهم، من المبتدئ الذي يختار تطبيقه الأول إلى المطوّر الذي يحتاج إلى API محلية.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'تطبيق LLM محلي لنظام Mac',
    targetKeywords: [
      'أفضل ذكاء اصطناعي محلي لنظام mac',
      'تطبيقات llm محلية mac',
      'بدائل lm studio على mac',
      'ollama على mac',
      'تشغيل llm على mac',
      'homebrew llm',
      'برامج الذكاء الاصطناعي المحلية mac',
      'أدوات llm لنظام mac',
    ],
    leadAnswerBlock:
      '**لمعظم مستخدمي Mac، ثبّت LM Studio (تطبيق رسومي مجاني، Apple Silicon، macOS 14 فأحدث) ونزّل نموذجاً صغيراً؛ واختر Ollama إن أردت سطر الأوامر وAPI محلية، وJan إن أردت تطبيق دردشة مفتوح المصدر.** أما AnythingLLM وOpen WebUI وMsty وoMLX وChatbox فتغطي المستندات والوصول عبر المتصفح والدردشة بعدة نماذج وApple MLX وعميلاً خفيفاً.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل تطبيق LLM محلي لنظام Mac في 2026؟',
        answer:
          'LM Studio هو أسهل بداية: تطبيق رسومي مجاني يحتاج إلى جهاز Mac بمعالج Apple Silicon ونظام macOS 14 أو أحدث، ويضم متصفحاً للنماذج. أما Ollama فهو خيار مستخدمي الطرفية والمطورين (MIT، macOS 14+، تثبيت بسطر واحد عبر Homebrew). Jan تطبيق دردشة مجاني مفتوح المصدر. وتغطي التطبيقات الخمسة الأخرى المستندات (AnythingLLM) وواجهة المتصفح (Open WebUI) والدردشة بعدة نماذج (Msty) وسرعة Apple MLX (oMLX) وعميلاً خفيفاً (Chatbox).',
        bullets: [
          'LM Studio — تطبيق رسومي مجاني، لـ Apple Silicon فقط، macOS 14+. أسهل تثبيت أول.',
          'Ollama — MIT، macOS 14+، يدعم معالج GPU في شرائح Apple من السلسلة M (أجهزة Intel تعمل بالمعالج المركزي فقط). سطر أوامر وAPI محلية وتطبيق سطح مكتب.',
          'Jan — تطبيق دردشة مجاني مفتوح المصدر لسطح المكتب، يشغّل النماذج على جهاز Mac.',
          'AnythingLLM — MIT، مثبّتات لسطح المكتب لـ Apple Silicon وIntel؛ دردشة مع مستنداتك.',
          'Open WebUI — واجهة دردشة في المتصفح تتصل بـ Ollama وغيره؛ يُثبَّت عبر Docker أو pip.',
          'oMLX — Apache-2.0، لـ Apple Silicon فقط، macOS 15+؛ خادم استدلال مبني على MLX مع تطبيق Mac.',
        ],
        updatedDate: '2026-10-31',
      },
    },
    toc: [
      { label: 'أهم النقاط', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'أي تطبيق Mac تثبّت أولاً؟', anchor: '#which-app' },
      { label: 'جدول مقارنة تطبيقات Mac', anchor: '#comparison-table' },
      { label: 'LM Studio: أسهل تطبيق رسومي', anchor: '#lmstudio' },
      { label: 'Ollama: سطر الأوامر وAPI وتطبيق سطح المكتب', anchor: '#ollama' },
      { label: 'Jan: تطبيق دردشة مفتوح المصدر', anchor: '#jan' },
      { label: 'Msty: دردشة بعدة نماذج', anchor: '#msty' },
      { label: 'AnythingLLM: دردشة مع مستنداتك', anchor: '#anythingllm' },
      { label: 'Open WebUI: واجهة دردشة في المتصفح', anchor: '#openwebui' },
      { label: 'oMLX: خادم استدلال MLX لـ Apple Silicon', anchor: '#omlx' },
      { label: 'Chatbox: عميل خفيف', anchor: '#chatbox' },
      { label: 'كم ذاكرة يحتاج جهاز Mac؟', anchor: '#memory' },
      { label: 'أخطاء شائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**LM Studio هو أسهل بداية على Mac.** تطبيق رسومي مجاني مع متصفح للنماذج؛ يحتاج إلى Apple Silicon وmacOS 14 أو أحدث (وثائق LM Studio).',
          '**Ollama هو المعيار لمستخدمي الطرفية والمطورين.** ترخيص MIT، macOS 14+، يستخدم GPU في شرائح Apple السلسلة M (أجهزة Intel بالمعالج المركزي فقط)، ويُثبَّت عبر صورة قرص أو `brew install ollama`.',
          '**Jan هو تطبيق الدردشة مفتوح المصدر.** تطبيق سطح مكتب مجاني يشغّل النماذج محلياً؛ ويذكر ملف README الخاص به macOS 13.6 أو أحدث.',
          '**AnythingLLM مناسب لمستنداتك.** ترخيص MIT، مثبّتات سطح مكتب لـ Apple Silicon وأجهزة Intel، ودردشة مستندات مدمجة.',
          '**Open WebUI واجهة متصفح، لا مشغّل نماذج.** يتصل بـ Ollama أو غيره؛ ويُثبَّت عبر Docker أو pip.',
          '**Msty وChatbox عميلا دردشة متعددا المزوّدين.** يستطيع كلاهما استخدام نماذج محلية ومزوّدين سحابيين؛ راجع إعداد المزوّد إن كانت الخصوصية مهمة.',
          '**oMLX لمن يريد سرعة أصلية على أجهزة Apple.** خادم استدلال MLX بترخيص Apache-2.0 لـ Apple Silicon مع تطبيق Mac؛ يتطلب macOS 15 أو أحدث.',
          '**الذاكرة هي التي تحدد حجم النموذج، لا التطبيق.** يذكر README الخاص بـ Jan نحو 8 GB من RAM لنماذج 3B و16 GB لنماذج 7B؛ وأي تطبيق في هذه القائمة يواجه الحد نفسه.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**التطبيقات المقارَنة:** LM Studio وOllama وJan وMsty وAnythingLLM وOpen WebUI وoMLX وChatbox.',
          '**أحدث الإصدارات من المصدر (روجعت في 31 أكتوبر 2026):** LM Studio 0.4.28 (31 أكتوبر 2026) · Ollama v0.40.13 (28 أكتوبر) · Jan v0.8.8 (28 أكتوبر) · Open WebUI v0.12.5 (29 أكتوبر) · oMLX v0.7.3rc1 (27 أكتوبر) · AnythingLLM v1.19.0 (26 أكتوبر) · Msty Studio 3.0.0 Beta 15 (7 أكتوبر) · Chatbox v1.23.5 (24 سبتمبر 2026). لا يتجاوز عمر أي منها 3 أشهر، لذا لا ينطبق تحذير التوقف عن التحديث.',
          '**لـ Apple Silicon فقط:** LM Studio وoMLX. أجهزة Intel ما زالت تشغّل Ollama (بالمعالج المركزي فقط) وAnythingLLM.',
          '**محلية بالتصميم:** LM Studio وOllama وJan وoMLX. **يمكنها أيضاً استخدام السحابة:** Msty وChatbox وOpen WebUI وAnythingLLM.',
          '**بلا اختبارات أداء:** لم تقس PromptQuorum عدد الرموز في الثانية لهذه التطبيقات على Mac؛ يقارن هذا الدليل حقائق من مصادر رسمية.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'أي تطبيق Mac تثبّت أولاً؟',
        content:
          '**ابدأ بـ LM Studio إن أردت نافذة ومتصفح نماذج بلا طرفية؛ وابدأ بـ Ollama إن كنت مرتاحاً مع سطر الأوامر أو تحتاج إلى API محلية لأدوات أخرى.** كلاهما مجاني ويشغّل النماذج على جهاز Mac. أضف Open WebUI أو AnythingLLM لاحقاً إن أردت واجهة متصفح أو دردشة مستندات فوق النماذج نفسها.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'لمعظم مستخدمي Mac في 2026، ثبّت LM Studio (مجاني، Apple Silicon، macOS 14+) ونزّل نموذجاً صغيراً؛ واستخدم Ollama إن فضّلت الطرفية أو احتجت إلى API محلية.',
          },
          {
            type: 'plain-terms',
            text: 'LM Studio تطبيق Mac عادي بأزرار. أما Ollama فخدمة في الخلفية تتحكم بها من الطرفية أو من تطبيقات أخرى. اختر ما يناسب طريقة عملك، ويمكنك تثبيت الاثنين.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول مقارنة تطبيقات Mac',
        content:
          '**تختلف التطبيقات الثمانية في ثلاثة أمور: طريقة الاستخدام (نافذة أو طرفية أو متصفح)، وإمكانية الوصول إلى نماذج سحابية، وأجهزة Mac المدعومة.** قُرئت الإصدارات وشروط الترخيص من صفحات المشاريع الرسمية في 31 أكتوبر 2026.',
        columns: ['التطبيق', 'التكلفة / الترخيص', 'متطلبات Mac', 'الواجهة', 'الأنسب لـ'],
        rows: [
          { 'التطبيق': '[LM Studio](https://lmstudio.ai)', 'التكلفة / الترخيص': 'مجاني (مغلق المصدر)', 'متطلبات Mac': 'Apple Silicon، macOS 14+', 'الواجهة': 'تطبيق سطح مكتب', 'الأنسب لـ': 'أسهل تثبيت أول' },
          { 'التطبيق': '[Ollama](https://ollama.com)', 'التكلفة / الترخيص': 'مجاني (MIT)', 'متطلبات Mac': 'macOS 14+؛ Intel بالمعالج فقط', 'الواجهة': 'سطر أوامر، API، تطبيق', 'الأنسب لـ': 'المطورون، API محلية' },
          { 'التطبيق': '[Jan](https://jan.ai)', 'التكلفة / الترخيص': 'مجاني (مفتوح المصدر)', 'متطلبات Mac': 'macOS 13.6+ (README)', 'الواجهة': 'تطبيق سطح مكتب', 'الأنسب لـ': 'دردشة مفتوحة المصدر' },
          { 'التطبيق': '[Msty](https://msty.ai)', 'التكلفة / الترخيص': 'مجاني جزئياً (مغلق المصدر)', 'متطلبات Mac': 'غير منشور (راجع msty.ai)', 'الواجهة': 'تطبيق سطح مكتب', 'الأنسب لـ': 'دردشة بعدة نماذج' },
          { 'التطبيق': '[AnythingLLM](https://anythingllm.com)', 'التكلفة / الترخيص': 'مجاني (MIT)', 'متطلبات Mac': 'مثبّتات Apple Silicon وIntel', 'الواجهة': 'سطح مكتب، ويب', 'الأنسب لـ': 'دردشة مع المستندات' },
          { 'التطبيق': '[Open WebUI](https://openwebui.com)', 'التكلفة / الترخيص': 'مجاني (BSD معدّل)', 'متطلبات Mac': 'أي Mac عبر المتصفح', 'الواجهة': 'المتصفح (Docker/pip)', 'الأنسب لـ': 'واجهة دردشة في المتصفح' },
          { 'التطبيق': '[oMLX](https://omlx.ai)', 'التكلفة / الترخيص': 'مجاني (Apache-2.0)', 'متطلبات Mac': 'Apple Silicon، macOS 15+', 'الواجهة': 'تطبيق Mac، خادم', 'الأنسب لـ': 'استدلال MLX' },
          { 'التطبيق': '[Chatbox](https://chatboxai.app)', 'التكلفة / الترخيص': 'مجاني (GPL-3.0)', 'متطلبات Mac': 'تطبيق macOS (chatboxai.app)', 'الواجهة': 'سطح مكتب، ويب', 'الأنسب لـ': 'عميل خفيف' },
        ],
        note:
          'متطلبات Mac مأخوذة من وثائق كل مشروع. وحيث لا ينشر المشروع متطلباً، يذكر الجدول ذلك بدل التخمين.',
      },
      lmstudio: {
        id: 'lmstudio',
        title: 'LM Studio: أسهل تطبيق رسومي',
        content:
          '**LM Studio أسهل طريقة لتشغيل نموذج على Mac عبر نافذة تطبيق عادية.** يضم متصفحاً للنماذج وواجهة دردشة ووضع خادم محلي. المراجعة الكاملة: [مراجعة LM Studio](/ar/power-local-llm/lm-studio-review).',
        items: [
          '**ما هو:** تطبيق رسومي مجاني للنماذج المحلية؛ ويصف موقع LM Studio بيئة التشغيل بأنها تعتمد على MLX وllama.cpp. وهو مغلق المصدر، ومجاني للاستخدام الشخصي والتجاري بحسب سجل الدليل.',
          '**أحدث إصدار (روجع في 31 أكتوبر 2026):** 0.4.28، 31 أكتوبر 2026 ([المصدر](https://lmstudio.ai/changelog/lmstudio)).',
          '**متطلبات Mac:** Apple Silicon (يُذكر M1 إلى M4) وmacOS 14 أو أحدث، بحسب صفحة متطلبات النظام في LM Studio. أجهزة Intel غير مدعومة.',
          '**الأنسب لـ:** المبتدئين الذين يريدون التصفح والتنزيل والدردشة بلا طرفية.',
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Ollama: سطر الأوامر وAPI وتطبيق سطح المكتب',
        content:
          '**Ollama هو الخيار الافتراضي لمستخدمي الطرفية ولكل ما يحتاج إلى API محلية للنماذج.** يعمل خدمةً في الخلفية مع سطر أوامر وAPI عبر HTTP وتطبيق سطح مكتب. المراجعة الكاملة: [مراجعة Ollama](/ar/power-local-llm/ollama-review). دليل الإعداد: [Ollama على Mac](/ar/local-llms/ollama-on-mac-apple-silicon-setup-2026).',
        items: [
          '**ما هو:** بيئة تشغيل بترخيص MIT. يُثبَّت بتركيب صورة القرص أو عبر Homebrew (`brew install ollama`؛ والصيغة موجودة في Homebrew).',
          '**أحدث إصدار (روجع في 31 أكتوبر 2026):** v0.40.13، 28 أكتوبر 2026 ([المصدر](https://github.com/ollama/ollama/releases)).',
          '**متطلبات Mac:** macOS Sonoma (14) أو أحدث؛ تحصل شرائح Apple السلسلة M على دعم المعالج المركزي والـ GPU، وتعمل أجهزة Intel بالمعالج المركزي فقط (وثائق Ollama لنظام macOS).',
          '**الأنسب لـ:** المطورين والنصوص البرمجية، وكخلفية لـ Open WebUI وتطبيقات الدردشة الأخرى.',
        ],
      },
      jan: {
        id: 'jan',
        title: 'Jan: تطبيق دردشة مفتوح المصدر',
        content:
          '**Jan تطبيق دردشة مجاني مفتوح المصدر لسطح المكتب يشغّل النماذج محلياً.** يُستخدم مثل مساعد دردشة وينزّل النماذج نيابةً عنك. المراجعة الكاملة: [مراجعة Jan](/ar/power-local-llm/jan-review).',
        items: [
          '**ما هو:** تطبيق سطح مكتب مفتوح المصدر (يذكر الدليل نسخة معدّلة من Apache 2.0) مع تنزيل موحّد لنظام macOS.',
          '**أحدث إصدار (روجع في 31 أكتوبر 2026):** v0.8.8، 28 أكتوبر 2026 ([المصدر](https://github.com/janhq/jan/releases)).',
          '**متطلبات Mac:** يذكر README نظام macOS 13.6 أو أحدث، مع نحو 8 GB من RAM لنماذج 3B و16 GB لنماذج 7B.',
          '**الأنسب لـ:** من يريد بديلاً مفتوح المصدر لمساعد دردشة مستضاف.',
        ],
      },
      msty: {
        id: 'msty',
        title: 'Msty: دردشة بعدة نماذج',
        content:
          '**Msty تطبيق دردشة متقن يتحدث مع النماذج المحلية والمزوّدين السحابيين في النافذة نفسها.** وهو مغلق المصدر مع فئة مجانية. المراجعة الكاملة: [مراجعة Msty](/ar/power-local-llm/msty-review).',
        items: [
          '**ما هو:** عميل دردشة لسطح المكتب من CloudStack, LLC؛ وسجل التغييرات منشور على msty.ai. ويصنّفه الدليل مجانياً جزئياً ومغلق المصدر.',
          '**أحدث إصدار (روجع في 31 أكتوبر 2026):** Msty Studio 3.0.0 Beta 15، 7 أكتوبر 2026 ([المصدر](https://msty.ai/changelog)).',
          '**متطلبات Mac:** غير منشورة في الصفحات التي راجعتها PromptQuorum؛ تحقق منها على msty.ai قبل التثبيت.',
          '**الأنسب لـ:** من يريد واجهة واحدة لعدة مزوّدين ونماذج.',
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: 'AnythingLLM: دردشة مع مستنداتك',
        content:
          '**AnythingLLM هو الخيار حين تريد طرح أسئلة عن ملفاتك.** يضم مخزن متجهات ودردشة مستندات. المراجعة الكاملة: [مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review).',
        items: [
          '**ما هو:** تطبيق بترخيص MIT له نسخة سطح مكتب ونسخة Docker؛ ويمكنه استخدام نماذج محلية أو مزوّدين سحابيين.',
          '**أحدث إصدار (روجع في 31 أكتوبر 2026):** v1.19.0، 26 أكتوبر 2026 ([المصدر](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          '**متطلبات Mac:** تقدّم صفحة التثبيت الرسمية لنظام macOS مثبّتات منفصلة لـ Apple Silicon ولأجهزة Intel.',
          '**الأنسب لـ:** الأسئلة والأجوبة الخاصة عن المستندات على حاسوب محمول.',
        ],
      },
      openwebui: {
        id: 'openwebui',
        title: 'Open WebUI: واجهة دردشة في المتصفح',
        content:
          '**يوفّر Open WebUI واجهة ويب شبيهة بـ ChatGPT للنماذج المحلية، لكنه لا يشغّل النماذج بنفسه.** استخدمه مع Ollama. المراجعة الكاملة: [مراجعة Open WebUI](/ar/local-llms/open-webui-review). البدائل: [أفضل واجهات LLM المحلية](/ar/local-llms/best-local-llm-frontends).',
        items: [
          '**ما هو:** تطبيق ويب مستضاف ذاتياً يُثبَّت عبر Docker أو pip. منذ الإصدار v0.6.6 يستخدم ترخيص BSD-3-Clause معدّلاً مع بند علامة تجارية يقول المشروع إنه غير معتمد من OSI؛ ويبقى تشغيله مجانياً.',
          '**أحدث إصدار (روجع في 31 أكتوبر 2026):** v0.12.5، 29 أكتوبر 2026 ([المصدر](https://github.com/open-webui/open-webui/releases)).',
          '**متطلبات Mac:** لا شيء سوى Docker أو Python؛ يستطيع أي Mac فيه متصفح فتحه، وتعمل النماذج في الخلفية التي تتصل بها.',
          '**الأنسب لـ:** واجهة متصفح لمستخدم واحد أو عدة مستخدمين فوق Ollama.',
        ],
      },
      omlx: {
        id: 'omlx',
        title: 'oMLX: خادم استدلال MLX لـ Apple Silicon',
        content:
          '**oMLX لمن يريد إطار MLX من Apple خلف خادم محلي وتطبيق Mac.** المراجعة الكاملة: [مراجعة oMLX](/ar/power-local-llm/omlx-review). الخلفية: [MLX وOllama وllama.cpp على Mac](/ar/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        items: [
          '**ما هو:** خادم استدلال مبني على MLX بترخيص Apache-2.0 مع تطبيق macOS يثبّت اختصاراً صغيراً لسطر الأوامر.',
          '**أحدث إصدار (روجع في 31 أكتوبر 2026):** v0.7.3rc1، 27 أكتوبر 2026 ([المصدر](https://github.com/jundot/omlx/releases)).',
          '**متطلبات Mac:** Apple Silicon (M1 إلى M5) وmacOS 15.0 أو أحدث (README المشروع). وآخر وسم على GitHub، v0.7.3rc1، نسخة مرشحة للإصدار.',
          '**الأنسب لـ:** الاستدلال الأصلي على Apple ووكلاء البرمجة المحليين.',
        ],
      },
      chatbox: {
        id: 'chatbox',
        title: 'Chatbox: عميل خفيف',
        content:
          '**Chatbox عميل دردشة صغير متعدد المنصات للنماذج المحلية والسحابية.** المراجعة الكاملة: [مراجعة Chatbox](/ar/local-llms/chatbox-review).',
        items: [
          '**ما هو:** عميل لسطح المكتب والويب؛ وتُنشر النسخة المجتمعية Community Edition مفتوحة المصدر بترخيص GPL-3.0.',
          '**أحدث إصدار (روجع في 31 أكتوبر 2026):** v1.23.5، 24 سبتمبر 2026 ([المصدر](https://github.com/chatboxai/chatbox/releases)).',
          '**متطلبات Mac:** يوفّر المشروع تنزيلاً لنظام macOS؛ راجع chatboxai.app للمتطلبات الحالية.',
          '**الأنسب لـ:** عميل خفيف يتصل بخادم Ollama أو LM Studio.',
        ],
      },
      memory: {
        id: 'memory',
        title: 'كم ذاكرة يحتاج جهاز Mac؟',
        content:
          '**الذاكرة الموحّدة هي الحد، أياً كان التطبيق الذي تختاره.** التطبيق يغيّر الواجهة، لا الذاكرة التي يحتاجها النموذج.',
        items: [
          'يعطي README الخاص بـ Jan نقطة بداية: نحو 8 GB من RAM لنماذج 3B، و16 GB لنماذج 7B، و32 GB لنماذج 13B.',
          'النماذج المكمّمة الأكبر تحتاج إلى ذاكرة أكثر؛ راجع بطاقة النموذج قبل التنزيل واترك ذاكرة لنظام macOS.',
          'لاختيار العتاد بحسب طراز Mac، راجع [أفضل Mac للذكاء الاصطناعي المحلي](/ar/power-local-llm/best-mac-for-local-ai-2026) و[أفضل نماذج Ollama لـ Apple Silicon](/ar/local-llms/best-models-apple-silicon-2026).',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'أخطاء شائعة',
        items: [
          '**تثبيت LM Studio أو oMLX على جهاز Mac بمعالج Intel.** كلاهما يتطلب Apple Silicon. استخدم Ollama (بالمعالج المركزي فقط على Intel) أو AnythingLLM بدلاً منهما.',
          '**توقّع أن يشغّل Open WebUI النماذج.** هو مجرد واجهة؛ ثبّت Ollama أو خلفية أخرى أولاً.',
          '**افتراض أن كل تطبيق دردشة محلي بالكامل.** يمكن لـ Msty وChatbox وOpen WebUI وAnythingLLM أن تتصل أيضاً بمزوّدين سحابيين؛ راجع إعداد المزوّد قبل إرسال نص خاص.',
          '**تنزيل نموذج أكبر من ذاكرتك.** سيثبّته التطبيق، لكن الردود ستكون بطيئة أو تفشل. ابدأ بنموذج صغير وارتقِ تدريجياً.',
          '**تثبيت خمسة تطبيقات لكل منها مجلد نماذج منفصل.** قد يحتفظ كل تطبيق بنسخته من النموذج نفسه؛ اكتفِ بتطبيق أو اثنين لتوفير مساحة القرص.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'LM Studio — [lmstudio.ai](https://lmstudio.ai) (أحدث إصدار 0.4.28، 31 أكتوبر 2026؛ [ملاحظات الإصدار](https://lmstudio.ai/changelog/lmstudio)).',
          'Ollama — [ollama.com](https://ollama.com) (أحدث إصدار v0.40.13، 28 أكتوبر 2026؛ [ملاحظات الإصدار](https://github.com/ollama/ollama/releases)).',
          'Jan — [jan.ai](https://jan.ai) (أحدث إصدار v0.8.8، 28 أكتوبر 2026؛ [ملاحظات الإصدار](https://github.com/janhq/jan/releases)).',
          'Msty — [msty.ai](https://msty.ai) (أحدث إصدار Msty Studio 3.0.0 Beta 15، 7 أكتوبر 2026؛ [ملاحظات الإصدار](https://msty.ai/changelog)).',
          'AnythingLLM — [anythingllm.com](https://anythingllm.com) (أحدث إصدار v1.19.0، 26 أكتوبر 2026؛ [ملاحظات الإصدار](https://github.com/Mintplex-Labs/anything-llm/releases)).',
          'Open WebUI — [openwebui.com](https://openwebui.com) (أحدث إصدار v0.12.5، 29 أكتوبر 2026؛ [ملاحظات الإصدار](https://github.com/open-webui/open-webui/releases)).',
          'oMLX — [omlx.ai](https://omlx.ai) (أحدث إصدار v0.7.3rc1، 27 أكتوبر 2026؛ [ملاحظات الإصدار](https://github.com/jundot/omlx/releases)).',
          'Chatbox — [chatboxai.app](https://chatboxai.app) (أحدث إصدار v1.23.5، 24 سبتمبر 2026؛ [ملاحظات الإصدار](https://github.com/chatboxai/chatbox/releases)).',
          'متطلبات نظام LM Studio — [lmstudio.ai/docs/app/system-requirements](https://lmstudio.ai/docs/app/system-requirements) (Apple Silicon، macOS 14).',
          'وثائق Ollama لنظام macOS — [github.com/ollama/ollama](https://github.com/ollama/ollama/blob/main/docs/macos.mdx) (macOS 14+، شريحة M أو x86 بالمعالج المركزي فقط) و[صيغة Homebrew](https://formulae.brew.sh/formula/ollama).',
          'README الخاص بـ Jan — [github.com/janhq/jan](https://github.com/janhq/jan) (macOS 13.6+، إرشادات RAM).',
          'README الخاص بـ oMLX — [github.com/jundot/omlx](https://github.com/jundot/omlx) (macOS 15+، Apple Silicon، Apache-2.0).',
          'تثبيت AnythingLLM على macOS — [docs.anythingllm.com](https://docs.anythingllm.com/installation-desktop/macos) (مثبّتات Apple Silicon وIntel).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما أفضل تطبيق ذكاء اصطناعي محلي لنظام Mac؟',
            a: 'LM Studio هو أسهل تطبيق أول (مجاني، Apple Silicon، macOS 14+). وOllama الأنسب لمستخدمي الطرفية والمطورين. وJan تطبيق دردشة مفتوح المصدر جيد. ويعتمد أفضل خيار على رغبتك في نافذة أو سطر أوامر أو واجهة متصفح.',
          },
          {
            q: 'ما أفضل بدائل LM Studio على Mac؟',
            a: 'Ollama (سطر الأوامر وAPI)، وJan (تطبيق دردشة مفتوح المصدر)، وMsty (دردشة بعدة نماذج)، وAnythingLLM (دردشة المستندات)، وChatbox (عميل خفيف). أما Open WebUI فهو واجهة متصفح تقترن بـ Ollama وليس بديلاً مباشراً.',
          },
          {
            q: 'هل يمكنني تثبيت Ollama عبر Homebrew؟',
            a: 'نعم. لدى Homebrew صيغة لـ ollama، لذا يعمل `brew install ollama`. ويمكنك أيضاً تركيب صورة القرص الرسمية وسحب Ollama إلى مجلد التطبيقات.',
          },
          {
            q: 'هل تعمل هذه التطبيقات على أجهزة Mac بمعالج Intel؟',
            a: 'بعضها نعم. يتطلب LM Studio وoMLX معالج Apple Silicon. ويعمل Ollama على أجهزة Intel بوضع المعالج المركزي فقط، وينشر AnythingLLM مثبّتاً لـ Intel. ويعمل Open WebUI في المتصفح، لكن الخلفية التي تتصل بها يجب أن تعمل في مكان ما.',
          },
          {
            q: 'هل هذه التطبيقات مجانية؟',
            a: 'LM Studio وOllama وJan وAnythingLLM وOpen WebUI وoMLX وChatbox مجانية للتنزيل؛ أما Msty ففيه فئة مجانية وخيارات مدفوعة. وتختلف التراخيص: Ollama وAnythingLLM بترخيص MIT، وoMLX بترخيص Apache-2.0، وChatbox Community Edition بترخيص GPL-3.0، أما LM Studio وMsty فمغلقا المصدر.',
          },
          {
            q: 'أي تطبيق أختار للدردشة مع مستنداتي؟',
            a: 'AnythingLLM مصمَّم لذلك: دردشة مستندات مع مخزن متجهات مدمج. ويدعم Open WebUI أيضاً دردشة المستندات عند ربطه بخلفية مثل Ollama.',
          },
          {
            q: 'هل أحتاج إلى Open WebUI إن كنت أستخدم Ollama أصلاً؟',
            a: 'لا. يعمل Ollama من الطرفية ومن تطبيق سطح المكتب الخاص به. ويضيف Open WebUI إلى Ollama واجهة متصفح وتعدد مستخدمين وميزات إضافية.',
          },
          {
            q: 'هل يعمل نموذج لغوي محلي على Mac دون اتصال بالإنترنت؟',
            a: 'نعم للنماذج التي نزّلتها. يشغّل LM Studio وOllama وJan وoMLX النماذج على جهاز Mac. أما الميزات التي تستدعي مزوّدين سحابيين أو البحث على الويب في Msty وChatbox وOpen WebUI وAnythingLLM فتحتاج إلى اتصال بالإنترنت.',
          },
          {
            q: 'كم أحتاج من RAM؟',
            a: 'يعتمد على النموذج لا على التطبيق. يقترح README الخاص بـ Jan نحو 8 GB من RAM لنماذج 3B و16 GB لنماذج 7B. والنماذج الأكبر تحتاج إلى أكثر؛ راجع بطاقة كل نموذج.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل Mac للذكاء الاصطناعي المحلي](/ar/power-local-llm/best-mac-for-local-ai-2026) — أي جهاز Mac تختار للنماذج المحلية.',
          '[Ollama على Mac: الإعداد على Apple Silicon](/ar/local-llms/ollama-on-mac-apple-silicon-setup-2026) — التثبيت وأول نموذج.',
          '[MLX وOllama وllama.cpp على Mac](/ar/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) — مقارنة المحركات.',
          '[أفضل نماذج Ollama لـ Apple Silicon](/ar/local-llms/best-models-apple-silicon-2026) — النماذج بحسب حجم الذاكرة.',
          '[LM Studio وJan وGPT4All](/ar/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — مقارنة تطبيقات سطح المكتب.',
          '[أفضل واجهات LLM المحلية](/ar/local-llms/best-local-llm-frontends) — واجهات الدردشة في المتصفح وسطح المكتب لـ Ollama.',
          '[أفضل تطبيقات LLM المحلية لجهاز iPhone](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — المقابل لجهاز iPhone.',
          '[دليل برامج LLM المحلية](/ar/directory) — كل تطبيقات LLM المحلية، قابلة للتصفية حسب Mac.',
        ],
      },
    },
  },
}
