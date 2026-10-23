// Strata Review: A 125B-Parameter Open Model on a Gaming PC
// Slug: strata-review
// Companion to: ollama-review, llama-cpp-explained, koboldcpp-review, lucebox-review
// Sources: the Niko1221/Strata GitHub repository (README, docs/SAFETY.md, docs/MAC.md, docs/HOW_IT_WORKS.md), its v0.2.2
// release page and asset list, and the Hugging Face page of the model, all checked 2026-10-23 — no hands-on testing.
// No separate product website exists (GitHub homepage field and profile link are empty; a web search found none), so there is no
// Website row. Prices: the app is free and the project lists no other prices, so non-EN blocks carry no currency figures.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Overview & Reference',
    heroImage: '/images/strata-review-hero-en.webp',
    title: 'Strata Review: A 125B-Parameter Open Model on a Gaming PC',
    seoTitle: 'Strata Review: Run a 125B Open Model on a Gaming PC',
    intro:
      'Strata is an MIT-licensed engine, desktop app and Terminal tool that, per its README, runs Qwen3.8-Flash-Next, a 125-billion-parameter open model, on a gaming PC by sharing the work between graphics memory, RAM and the SSD. This review reflects the project\'s README, safety notes and v0.2.2 release page as checked on 23 October 2026.',
    metaDescription:
      'Strata review: free, MIT-licensed engine and app that runs a 125B open model on a gaming PC. Requirements, installers, local API and unverified claims.',
    twitterDescription:
      'Strata review: an MIT-licensed app that runs a 125B open model on a gaming PC, with OpenAI- and Anthropic-style local APIs. Needs, claims, open questions.',
    audience:
      'People with a gaming PC or a high-memory Mac who want to know what Strata needs, what it costs, how it installs and which of its speed and privacy claims the sources leave unconfirmed.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Strata review',
    targetKeywords: [
      'strata review',
      'run 125b model on gaming pc',
      'qwen3.8-flash-next local',
      'strata inference engine',
      'local openai compatible api',
      'strata vs ollama',
    ],
    current_hardware_mentioned: ['NVIDIA RTX GPU', 'AMD Radeon GPU', 'Intel Arc GPU', 'Mac with Apple Silicon', 'Ryzen AI Max'],
    leadAnswerBlock:
      '**Strata (version 0.2.2, released 21 October 2026) is a free, MIT-licensed app and Terminal tool that, per its README, runs one 125-billion-parameter open model on an ordinary gaming PC and serves it to your other programs through a local API.** Every speed, quality and privacy statement in this review comes from the project; PromptQuorum has not installed or tested it.',
    quickAnswerTop: {
      en: {
        question: 'What do I need to run Strata?',
        answer:
          'At least 32 GB of RAM and graphics memory combined, about 80 GB of free disk and a supported graphics card or Apple Silicon Mac, according to the README. The app itself costs nothing.',
        bullets: [
          'Supports NVIDIA RTX 20 to 50 series, AMD Radeon RX 6800 and newer, Intel Arc and Apple Silicon Macs.',
          'Offers an OpenAI-compatible and an Anthropic-compatible API for tools such as Claude Code, Codex CLI and OpenCode.',
          'Reads pictures; the picture reader is on by default for models that support it.',
          'Installs with a double-click app or a one-line Terminal command.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Strata?', anchor: 'what-is-strata' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'What You Need', anchor: 'requirements' },
      { label: 'Pricing', anchor: 'pricing' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Model Sizes by Memory', anchor: 'model-sizes' },
      { label: 'Speed: The Project\'s Numbers', anchor: 'speed' },
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
            text: 'Strata is an MIT-licensed engine and desktop app that runs a single 125-billion-parameter open model on a gaming PC.',
          },
          {
            type: 'plain-terms',
            text: 'It spreads the model across your graphics card, RAM and SSD, then answers in a chat window or through a local API that other tools can call.',
          },
        ],
        items: [
          'Maintenance: the repository was created on 24 September 2026 and versions 0.2.0-beta, 0.2.1 and 0.2.2 appeared between 19 and 21 October 2026, so it is active but only a month old; no stale-project warning applies.',
          'License: MIT for Strata itself; each model file carries its own licence.',
          'Cost: free, with no account; support is voluntary.',
          'Installers: the Windows installer is not code-signed yet, per the README.',
          'Basis: the README, safety notes and release page, read on 23 October 2026, with no hands-on testing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not installed, tested or benchmarked Strata. Speed, quality and privacy statements below are the project\'s own.',
          },
        ],
      },
      overview: {
        id: 'what-is-strata',
        title: 'What Is Strata?',
        content: [
          '**Strata is an inference engine, a desktop app and a Terminal client built around one model, Qwen3.8-Flash-Next, which the README describes as a 125-billion-parameter model that normally needs a server.** The Qwen team publishes the model on [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next); Strata, published under the GitHub account Niko1221, runs it on consumer hardware.',
          'The README explains the trick with a library: the model is a team of 24,576 small specialists ("experts") and each word needs only 10 of them. The graphics card holds the most-used experts, RAM holds all of them and the SSD holds a 29 GB lookup table. A small helper also guesses the next few words, which the big model checks in one pass; the project says this returns the same answer 1.6 to 1.8 times sooner. The engine uses parts of [llama.cpp](https://github.com/ggml-org/llama.cpp), and the code lives at [Niko1221/Strata](https://github.com/Niko1221/Strata).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Strata is downloaded from the Releases page on GitHub, one installer per system and graphics card.**',
        ],
        columns: ['System and card', 'Download'],
        rows: [
          { 'System and card': 'Windows, NVIDIA (driver 580+)', 'Download': '[windows-cuda13.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda13.exe)' },
          { 'System and card': 'Windows, older NVIDIA or driver', 'Download': '[windows-cuda12.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda12.exe)' },
          { 'System and card': 'Windows, AMD RX 9000 / R9700', 'Download': '[windows-hip.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip.exe)' },
          { 'System and card': 'Windows, AMD RX 7000 / Strix Halo', 'Download': '[windows-hip-rdna3.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip-rdna3.exe)' },
          { 'System and card': 'Linux, NVIDIA (driver 580+)', 'Download': '[linux-nvidia-cuda13.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda13.AppImage)' },
          { 'System and card': 'Linux, older NVIDIA or driver', 'Download': '[linux-nvidia-cuda12.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda12.AppImage)' },
          { 'System and card': 'Linux, AMD RX 9000 / R9700', 'Download': '[linux-amd-rx9070.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx9070.AppImage)' },
          { 'System and card': 'Linux, AMD RX 7000', 'Download': '[linux-amd-rx7900.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx7900.AppImage)' },
          { 'System and card': 'Linux, Strix Halo', 'Download': '[linux-amd-strixhalo.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-strixhalo.AppImage)' },
          { 'System and card': 'Mac, Apple Silicon (macOS 15+)', 'Download': '[mac.dmg](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-mac.dmg)' },
          { 'System and card': 'Terminal, Linux and Mac', 'Download': '[install.sh](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.sh) (one line from the README)' },
          { 'System and card': 'Terminal, Windows', 'Download': '[install.ps1](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.ps1) (one line from the README)' },
          { 'System and card': 'Source code', 'Download': '[github.com/Niko1221/Strata](https://github.com/Niko1221/Strata)' },
          { 'System and card': 'Safety and privacy notes', 'Download': '[docs/SAFETY.md](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)' },
        ],
        note: 'Version reviewed: 0.2.2 (engine 0.1.47), published on 21 October 2026 per the GitHub release page, which is the latest upstream update at the time of checking. No separate product website was found: the repository\'s homepage field and the maintainer\'s profile link are empty, and a web search turned up only the repository and third-party write-ups. The README says the Windows installer is not code-signed, so Windows may show "Windows protected your PC", and Linux AppImages need FUSE 2. RX 6000 cards have no installer of their own, and the README says that engine is not yet tested on a real RX 6000 card.',
      },
      requirements: {
        id: 'requirements',
        title: 'What You Need',
        content: [
          '**Strata needs at least 32 GB of RAM and graphics memory (VRAM) combined, about 80 GB of free disk, a current graphics driver and Windows 10/11, Linux or macOS 15 or newer.** On a Mac or a Ryzen AI Max, the unified memory counts for both.',
        ],
        columns: ['Computer', 'Support per the README'],
        rows: [
          { 'Computer': 'NVIDIA', 'Support per the README': 'GeForce RTX 20, 30, 40, 50 series, 12 GB or more' },
          { 'Computer': 'AMD', 'Support per the README': 'Radeon RX 6800 and newer, Radeon AI PRO R9700, 12 GB or more' },
          { 'Computer': 'Intel', 'Support per the README': 'Arc cards; the smallest model is tested on an Arc A750 (Linux) only' },
          { 'Computer': 'Apple Silicon', 'Support per the README': 'M1 or newer, macOS 15 or newer; Intel Macs cannot run it' },
          { 'Computer': 'Ryzen AI Max (Strix Halo)', 'Support per the README': 'Unified-memory systems, own installers for Windows and Linux' },
        ],
        note: 'Per the README, two or three cards of the same make can share a model; Strata never splits a model across NVIDIA and AMD cards. Older cards and processors have separate experimental pages in the repository.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**Strata is free: the README states an MIT license, no account and no cloud.**',
        ],
        columns: ['Item', 'Cost (USD)'],
        rows: [
          { 'Item': 'App, Terminal and engine', 'Cost (USD)': '$0 (MIT license)' },
          { 'Item': 'Model files', 'Cost (USD)': 'No price listed; own licences apply' },
          { 'Item': 'Support the project', 'Cost (USD)': 'Optional, via [Buy Me a Coffee](https://buymeacoffee.com/strataengine)' },
        ],
        note: 'Read from the README on 23 October 2026. It also invites sponsors to make contact through the maintainer\'s [GitHub profile](https://github.com/Niko1221). The model download is the real cost: about 40 to 70 GB per the README.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the README\'s "Option A: the Strata app"; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Compare your PC with the requirements',
            whyItMatters: 'Check memory, free disk and graphics card against the table above before downloading.',
          },
          {
            title: 'Download the installer for your system and card',
            whyItMatters: 'Pick the matching file from the Get It table. Terminal users can run the one-line script instead and then start Strata with `strata launch`.',
          },
          {
            title: 'Install and let the app read your PC',
            whyItMatters: 'The first screen recommends a model that fits; press install. The model download is large and continues where it stopped if interrupted.',
          },
          {
            title: 'Wait through the first load',
            whyItMatters: 'The README says the PC can be slow or stop responding for 1 to 3 minutes while the model loads into RAM, longest the first time. Do not close the window.',
          },
          {
            title: 'Chat, or connect your other tools',
            whyItMatters: 'Use the app\'s Chat page, or run `strata connect` to print settings for OpenCode, Codex CLI, Claude Code and others.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the README or the project\'s docs.**',
        ],
        items: [
          '**Local API.** The server offers an OpenAI-compatible API, an Anthropic-style API on the same port and the OpenAI Responses API for Codex CLI; `strata connect` prints settings for OpenCode, Codex CLI, Claude Code, oh-my-pi, pi, Hermes Agent and OpenClaw.',
          '**Pictures.** Picture input is on by default for models that can read it; the reader runs on the processor when the graphics card has under 24 GB.',
          '**Chat app.** The app has a Chat, a Monitor of model, GPU, CPU and RAM, a Models page and Settings; in Manual mode the chat asks before it changes a file or runs a command.',
          '**Several cards.** Each graphics card can be set to Main, Helper or Off, and a thinking level (off, low, medium or high) can be chosen per chat.',
          '**MCP.** AI tools can install, start and stop Strata through its MCP server.',
          '**Terminal.** `strata launch` asks for model, context, pictures and access one question at a time; flags let scripts and AI agents run it without prompts.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Model Sizes by Memory',
        content: [
          '**Strata ships one model in several compressed sizes; the README says smaller sizes are faster and larger ones a bit smarter.**',
        ],
        columns: ['Memory (RAM + VRAM)', 'Size suggested by the README'],
        rows: [
          { 'Memory (RAM + VRAM)': '32 GB', 'Size suggested by the README': 'Gyro-S, or the Coder for code' },
          { 'Memory (RAM + VRAM)': '40 GB', 'Size suggested by the README': 'Swift 1.5 IQ2_XS, or Gyro-M' },
          { 'Memory (RAM + VRAM)': '48 GB', 'Size suggested by the README': 'IQ3_XXS: slower, better' },
          { 'Memory (RAM + VRAM)': '64 GB', 'Size suggested by the README': 'IQ3_S: slowest, best' },
          { 'Memory (RAM + VRAM)': '96 GB or more', 'Size suggested by the README': 'Unsloth UD-IQ4_XS up to Q8_0' },
        ],
        note: 'The README counts RAM plus VRAM less 5 GB that the system keeps. Gyro-S needs 27.6 GB of that memory for a 58.5 GB download and, per the README, has lower quality than IQ2_XS; Gyro-M needs 35 GB for a 92 GB download. The README says IQ3_S matches the full model on the published tests; PromptQuorum has not checked those tests.',
      },
      speed: {
        id: 'speed',
        title: 'Speed: The Project\'s Numbers',
        content: [
          '**The README reports 94 tokens per second for its fastest size and 53 for IQ3_S on an RTX 5070; PromptQuorum has not reproduced any figure.** A token is about three quarters of a word.',
        ],
        columns: ['Size and card', 'Answers (tok/s)', 'Prompt (tok/s)'],
        rows: [
          { 'Size and card': 'Q2_0, RTX 5070 (12 GB)', 'Answers (tok/s)': '94', 'Prompt (tok/s)': '2,650' },
          { 'Size and card': 'IQ3_S, RTX 5070 (12 GB)', 'Answers (tok/s)': '53', 'Prompt (tok/s)': '1,620' },
          { 'Size and card': 'Coder, RTX 5070 (12 GB)', 'Answers (tok/s)': '55', 'Prompt (tok/s)': '2,180' },
          { 'Size and card': 'Q2_0, RX 9070 XT (16 GB)', 'Answers (tok/s)': '60', 'Prompt (tok/s)': '1,160' },
        ],
        note: 'Source: the README\'s "How fast is it?" tables, measured by the project on a Ryzen 5 7600 with 64 GB RAM (RTX 5070) and a Ryzen 9 3900X with 47 GB RAM (RX 9070 XT). The README adds that Strata reads the first message of a chat in full, at about one minute per 30,000 tokens, and that later messages start in seconds.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**Strata\'s safety notes say chats, prompts, files, pictures and models stay on your PC, that there is no telemetry and no account, and that starting or running a model never downloads anything.** They add that, once a model is downloaded, Strata runs without internet, and that the server listens on your PC only unless you give other devices access with an API key.',
          'Per the same notes, the internet is used only when you ask: model, engine and app-update downloads from Hugging Face and GitHub Releases, the agent\'s web search (DuckDuckGo, with Bing as the second source) and web pages, outside model services you add, and a Cloudflare tunnel if you switch it on. Web search sends the search words off your PC.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The notes say they come from reading the code of this version, but they are the maintainer\'s statements. PromptQuorum has not audited the code or the network traffic.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Owners of a recent gaming PC or a high-memory Mac** who want one very large open model without renting a server.',
          '**Developers who use Claude Code, Codex CLI or OpenCode** and want a local OpenAI- or Anthropic-style endpoint.',
          '**People who want chats kept on their own machine,** per the project\'s safety notes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality and speed.** PromptQuorum did not run Strata, so answer quality, the speed figures and the claim of matching the full model are the project\'s.',
          '**Privacy and download checks.** The no-telemetry, offline and signed-update statements were not checked against the code or network traffic.',
          '**Maturity.** The repository dates from 24 September 2026 and showed 697 open issues on 23 October 2026; the Mac and Intel Arc paths are new in 0.2.2, and the project names few tested machines for them.',
          '**Model choice.** The pages checked describe one model in several sizes plus a few named alternatives, not a general model library.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Ollama](/power-local-llm/ollama-review)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'One-command install and a large model library, not tied to a single model' },
          { 'App': '[llama.cpp](/power-local-llm/llama-cpp-explained)', 'Platforms': 'Windows, macOS, Linux', 'Price / license': 'Free / MIT', 'Key difference': 'The C++ engine behind many tools, including parts of Strata; command line first' },
          { 'App': '[KoboldCpp](/power-local-llm/koboldcpp-review)', 'Platforms': 'Windows, Linux, macOS', 'Price / license': 'Free / AGPL 3.0', 'Key difference': 'Lightweight llama.cpp wrapper with a built-in web UI' },
          { 'App': '[Lucebox](/power-local-llm/lucebox-review)', 'Platforms': 'Linux', 'Price / license': 'Free / Apache-2.0', 'Key difference': 'Hand-tuned kernels and speculative decoding for specific consumer GPUs' },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Strata work without a graphics card?',
            a: 'The README says the CUDA, HIP and SYCL engines need a card to start, so a PC needs a supported one. The Mac engine can run without a separate card.',
          },
          {
            q: 'Can I use Strata with Claude Code?',
            a: 'Per the README, yes, through the Anthropic-style API by setting ANTHROPIC_BASE_URL to the local address. The model that answers is Qwen3.8-Flash-Next, not a Claude model.',
          },
          {
            q: 'Can I reach it from my phone or another PC?',
            a: 'The README names `strata launch --access lan`, which creates an API key by default; `--no-api-key` skips the key and prints a warning.',
          },
          {
            q: 'Is the Windows installer safe to run?',
            a: 'The README says it is not code-signed yet and says the Terminal installer checks a SHA-256 hash. PromptQuorum has not verified either statement.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Strata is a free, MIT-licensed app and Terminal tool that, per its README, makes a 125-billion-parameter open model usable on a gaming PC and exposes it through OpenAI- and Anthropic-style APIs; it shipped three releases in the week before this check and installs by double-click on Windows, Linux and Apple Silicon Macs. Against that, every speed, quality and privacy statement comes from the project, the repository is about a month old, the Windows installer is not code-signed and it is built around one model rather than a library. It suits people with enough combined memory who want that model for chat or coding agents; readers who want many models and a longer track record can compare [Ollama](/power-local-llm/ollama-review) or [llama.cpp](/power-local-llm/llama-cpp-explained).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Strata on GitHub](https://github.com/Niko1221/Strata) — README, MIT license, requirements, install options, speed tables and credits, checked 23 October 2026.',
          '[Strata v0.2.2 release](https://github.com/Niko1221/Strata/releases/tag/v0.2.2) — release date, release notes and the installer file list.',
          '[Strata safety notes](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md) and [Mac guide](https://github.com/Niko1221/Strata/blob/main/docs/MAC.md) — data handling, outbound connections and Mac limits.',
          '[Qwen3.8-Flash-Next on Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — the model page that the README links.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Ollama Review](/power-local-llm/ollama-review) — a one-command local runtime with a large model library.',
          '[llama.cpp Explained](/power-local-llm/llama-cpp-explained) — the C++ inference engine behind many local tools.',
          '[KoboldCpp Review](/power-local-llm/koboldcpp-review) — a single-file llama.cpp wrapper with a built-in web UI.',
          '[Lucebox Review](/power-local-llm/lucebox-review) — hand-tuned local inference for specific consumer GPUs.',
          '[Local LLM Run & Serve Compared](/power-local-llm/local-llm-run-serve-compared) — the category comparison for runtimes and servers.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Strata Review: A 125B-Parameter Open Model on a Gaming PC',
      description:
        'Strata review: a free, MIT-licensed engine and app that runs a 125B open model on a gaming PC. Requirements, installers, local API and what the sources leave unconfirmed.',
      url: 'https://promptquorum.com/power-local-llm/strata-review',
      inLanguage: 'en',
      datePublished: '2026-10-23',
      dateModified: '2026-10-23',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'People evaluating a local inference engine for running a very large open model on a gaming PC' },
      about: [
        { '@type': 'Thing', name: 'Strata' },
        { '@type': 'Thing', name: 'Local LLM inference' },
        { '@type': 'Thing', name: 'Qwen3.8-Flash-Next' },
        { '@type': 'Thing', name: 'OpenAI-compatible API' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/strata-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Strata Review', item: 'https://promptquorum.com/power-local-llm/strata-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Overview & Reference',
    heroImage: '/images/strata-review-hero-de.webp',
    title: 'Strata-Rezension: Ein Open-Modell mit 125B Parametern auf dem Gaming-PC',
    seoTitle: 'Strata-Rezension: 125B-Open-Modell auf dem Gaming-PC',
    intro:
      'Strata ist eine unter MIT lizenzierte Engine, Desktop-App und Terminal-Anwendung, die laut README Qwen3.8-Flash-Next, ein offenes Modell mit 125 Milliarden Parametern, auf einem Gaming-PC ausführt, indem sie die Arbeit auf Grafikspeicher, RAM und SSD verteilt. Diese Rezension gibt README, Sicherheitshinweise und die Release-Seite zu v0.2.2 wieder, wie am 23. Oktober 2026 geprüft.',
    metaDescription:
      'Strata-Rezension: kostenlose MIT-Engine und App, die ein 125B-Open-Modell auf dem Gaming-PC ausführt. Anforderungen, Installer, lokale API, offene Punkte.',
    twitterDescription:
      'Strata-Rezension: MIT-App für ein 125B-Open-Modell auf dem Gaming-PC, mit lokalen APIs im OpenAI- und Anthropic-Stil. Bedarf, Angaben, offene Fragen.',
    audience:
      'Menschen mit einem Gaming-PC oder einem Mac mit viel Speicher, die wissen möchten, was Strata benötigt, was es kostet, wie es sich installiert und welche Geschwindigkeits- und Datenschutzangaben die Quellen unbestätigt lassen.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Strata Rezension',
    targetKeywords: [
      'strata rezension',
      '125b modell auf gaming pc ausführen',
      'qwen3.8-flash-next lokal',
      'strata inferenz engine',
      'lokale openai kompatible api',
      'strata vs ollama',
    ],
    current_hardware_mentioned: ['NVIDIA RTX GPU', 'AMD Radeon GPU', 'Intel Arc GPU', 'Mac with Apple Silicon', 'Ryzen AI Max'],
    leadAnswerBlock:
      '**Strata (Version 0.2.2, veröffentlicht am 21. Oktober 2026) ist eine kostenlose App und Terminal-Anwendung unter MIT-Lizenz, die laut README ein einziges offenes Modell mit 125 Milliarden Parametern auf einem gewöhnlichen Gaming-PC ausführt und es Ihren anderen Programmen über eine lokale API bereitstellt.** Jede Aussage zu Geschwindigkeit, Qualität und Datenschutz in dieser Rezension stammt vom Projekt; PromptQuorum hat Strata weder installiert noch getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was brauche ich, um Strata auszuführen?',
        answer:
          'Laut README mindestens 32 GB RAM und Grafikspeicher zusammen, etwa 80 GB freien Speicherplatz und eine unterstützte Grafikkarte oder einen Mac mit Apple Silicon. Die App selbst kostet nichts.',
        bullets: [
          'Unterstützt NVIDIA-RTX-Karten der Serien 20 bis 50, AMD Radeon RX 6800 und neuer, Intel Arc und Macs mit Apple Silicon.',
          'Bietet eine OpenAI-kompatible und eine Anthropic-kompatible API für Werkzeuge wie Claude Code, Codex CLI und OpenCode.',
          'Liest Bilder; der Bildleser ist für Modelle, die dies unterstützen, standardmäßig aktiv.',
          'Installiert sich per Doppelklick als App oder mit einem einzeiligen Terminal-Befehl.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Strata?', anchor: 'what-is-strata' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Das brauchen Sie', anchor: 'requirements' },
      { label: 'Preise', anchor: 'pricing' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Modellgrößen nach Speicher', anchor: 'model-sizes' },
      { label: 'Geschwindigkeit: Die Zahlen des Projekts', anchor: 'speed' },
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
            text: 'Strata ist eine Engine und Desktop-App unter MIT-Lizenz, die ein einziges offenes Modell mit 125 Milliarden Parametern auf einem Gaming-PC ausführt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie verteilt das Modell auf Grafikkarte, RAM und SSD und antwortet in einem Chatfenster oder über eine lokale API, die andere Werkzeuge aufrufen können.',
          },
        ],
        items: [
          'Pflege: Das Repository wurde am 24. September 2026 angelegt, und zwischen dem 19. und 21. Oktober 2026 erschienen die Versionen 0.2.0-beta, 0.2.1 und 0.2.2; das Projekt ist also aktiv, aber erst einen Monat alt, und eine Warnung vor einem veralteten Projekt gilt nicht.',
          'Lizenz: MIT für Strata selbst; jede Modelldatei trägt ihre eigene Lizenz.',
          'Kosten: kostenlos und ohne Konto; Unterstützung ist freiwillig.',
          'Installer: Der Windows-Installer ist laut README noch nicht code-signiert.',
          'Grundlage: README, Sicherheitshinweise und Release-Seite, gelesen am 23. Oktober 2026, ohne eigenen Praxistest.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat Strata weder installiert noch getestet oder gemessen. Aussagen zu Geschwindigkeit, Qualität und Datenschutz unten sind die des Projekts.',
          },
        ],
      },
      overview: {
        id: 'what-is-strata',
        title: 'Was ist Strata?',
        content: [
          '**Strata ist eine Inferenz-Engine, eine Desktop-App und ein Terminal-Client rund um ein einziges Modell, Qwen3.8-Flash-Next, das die README als Modell mit 125 Milliarden Parametern beschreibt, das normalerweise einen Server braucht.** Das Qwen-Team veröffentlicht das Modell auf [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next); Strata, veröffentlicht unter dem GitHub-Konto Niko1221, führt es auf Verbraucher-Hardware aus.',
          'Die README erklärt den Kniff mit einer Bibliothek: Das Modell ist ein Team aus 24.576 kleinen Spezialisten („Experten“), und jedes Wort braucht nur 10 davon. Die Grafikkarte hält die am häufigsten genutzten Experten, der RAM hält alle, und die SSD hält eine Nachschlagetabelle von 29 GB. Ein kleiner Helfer rät außerdem die nächsten Wörter, die das große Modell in einem Durchgang prüft; das Projekt sagt, so komme dieselbe Antwort 1,6- bis 1,8-mal früher. Die Engine nutzt Teile von [llama.cpp](https://github.com/ggml-org/llama.cpp), und der Code liegt unter [Niko1221/Strata](https://github.com/Niko1221/Strata).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Strata wird von der Releases-Seite auf GitHub heruntergeladen, mit je einem Installer pro System und Grafikkarte.**',
        ],
        columns: ['System und Karte', 'Download'],
        rows: [
          { 'System und Karte': 'Windows, NVIDIA (Treiber 580+)', 'Download': '[windows-cuda13.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda13.exe)' },
          { 'System und Karte': 'Windows, ältere NVIDIA oder Treiber', 'Download': '[windows-cuda12.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda12.exe)' },
          { 'System und Karte': 'Windows, AMD RX 9000 / R9700', 'Download': '[windows-hip.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip.exe)' },
          { 'System und Karte': 'Windows, AMD RX 7000 / Strix Halo', 'Download': '[windows-hip-rdna3.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip-rdna3.exe)' },
          { 'System und Karte': 'Linux, NVIDIA (Treiber 580+)', 'Download': '[linux-nvidia-cuda13.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda13.AppImage)' },
          { 'System und Karte': 'Linux, ältere NVIDIA oder Treiber', 'Download': '[linux-nvidia-cuda12.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda12.AppImage)' },
          { 'System und Karte': 'Linux, AMD RX 9000 / R9700', 'Download': '[linux-amd-rx9070.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx9070.AppImage)' },
          { 'System und Karte': 'Linux, AMD RX 7000', 'Download': '[linux-amd-rx7900.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx7900.AppImage)' },
          { 'System und Karte': 'Linux, Strix Halo', 'Download': '[linux-amd-strixhalo.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-strixhalo.AppImage)' },
          { 'System und Karte': 'Mac, Apple Silicon (macOS 15+)', 'Download': '[mac.dmg](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-mac.dmg)' },
          { 'System und Karte': 'Terminal, Linux und Mac', 'Download': '[install.sh](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.sh) (eine Zeile aus der README)' },
          { 'System und Karte': 'Terminal, Windows', 'Download': '[install.ps1](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.ps1) (eine Zeile aus der README)' },
          { 'System und Karte': 'Quellcode', 'Download': '[github.com/Niko1221/Strata](https://github.com/Niko1221/Strata)' },
          { 'System und Karte': 'Sicherheits- und Datenschutzhinweise', 'Download': '[docs/SAFETY.md](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)' },
        ],
        note: 'Geprüfte Version: 0.2.2 (Engine 0.1.47), laut GitHub-Release-Seite am 21. Oktober 2026 veröffentlicht; das ist das neueste Upstream-Update zum Zeitpunkt der Prüfung. Eine eigene Produktwebsite wurde nicht gefunden: Das Homepage-Feld des Repositorys und der Profillink des Maintainers sind leer, und eine Websuche ergab nur das Repository und Beiträge Dritter. Laut README ist der Windows-Installer nicht code-signiert, daher kann Windows „Der Computer wurde durch Windows geschützt“ anzeigen, und Linux-AppImages brauchen FUSE 2. Für RX-6000-Karten gibt es keinen eigenen Installer, und laut README ist diese Engine noch nicht auf einer echten RX-6000-Karte getestet.',
      },
      requirements: {
        id: 'requirements',
        title: 'Das brauchen Sie',
        content: [
          '**Strata braucht mindestens 32 GB RAM und Grafikspeicher (VRAM) zusammen, etwa 80 GB freien Speicherplatz, einen aktuellen Grafiktreiber und Windows 10/11, Linux oder macOS 15 oder neuer.** Bei einem Mac oder einem Ryzen AI Max zählt der einheitliche Speicher für beides.',
        ],
        columns: ['Rechner', 'Unterstützung laut README'],
        rows: [
          { 'Rechner': 'NVIDIA', 'Unterstützung laut README': 'GeForce RTX 20, 30, 40, 50, ab 12 GB' },
          { 'Rechner': 'AMD', 'Unterstützung laut README': 'Radeon RX 6800 und neuer, Radeon AI PRO R9700, ab 12 GB' },
          { 'Rechner': 'Intel', 'Unterstützung laut README': 'Arc-Karten; das kleinste Modell ist nur auf einer Arc A750 (Linux) getestet' },
          { 'Rechner': 'Apple Silicon', 'Unterstützung laut README': 'M1 oder neuer, macOS 15 oder neuer; Intel-Macs können es nicht ausführen' },
          { 'Rechner': 'Ryzen AI Max (Strix Halo)', 'Unterstützung laut README': 'Systeme mit einheitlichem Speicher, eigene Installer für Windows und Linux' },
        ],
        note: 'Laut README können sich zwei oder drei Karten desselben Herstellers ein Modell teilen; Strata teilt ein Modell nie auf NVIDIA- und AMD-Karten auf. Für ältere Karten und Prozessoren gibt es im Repository eigene experimentelle Seiten.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise',
        content: [
          '**Strata ist kostenlos: Die README nennt eine MIT-Lizenz, kein Konto und keine Cloud.**',
        ],
        columns: ['Posten', 'Kosten (USD)'],
        rows: [
          { 'Posten': 'App, Terminal und Engine', 'Kosten (USD)': '$0 (MIT-Lizenz)' },
          { 'Posten': 'Modelldateien', 'Kosten (USD)': 'Kein Preis genannt; eigene Lizenzen gelten' },
          { 'Posten': 'Das Projekt unterstützen', 'Kosten (USD)': 'Optional, über [Buy Me a Coffee](https://buymeacoffee.com/strataengine)' },
        ],
        note: 'Aus der README gelesen am 23. Oktober 2026. Sie lädt außerdem Sponsoren ein, über das [GitHub-Profil](https://github.com/Niko1221) des Maintainers Kontakt aufzunehmen. Die eigentlichen Kosten verursacht der Modell-Download: laut README etwa 40 bis 70 GB.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen dem README-Abschnitt „Option A: the Strata app“; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Den PC mit den Anforderungen abgleichen',
            whyItMatters: 'Prüfen Sie vor dem Download Speicher, freien Speicherplatz und Grafikkarte anhand der Tabelle oben.',
          },
          {
            title: 'Den Installer für System und Karte herunterladen',
            whyItMatters: 'Wählen Sie die passende Datei aus der Tabelle „Bezugsquelle“. Terminal-Nutzer können stattdessen das einzeilige Skript ausführen und Strata danach mit `strata launch` starten.',
          },
          {
            title: 'Installieren und die App den PC auslesen lassen',
            whyItMatters: 'Der erste Bildschirm empfiehlt ein passendes Modell; klicken Sie auf „Installieren“. Der Modell-Download ist groß und wird nach einer Unterbrechung dort fortgesetzt, wo er stehen blieb.',
          },
          {
            title: 'Das erste Laden abwarten',
            whyItMatters: 'Laut README kann der PC 1 bis 3 Minuten langsam sein oder nicht reagieren, während das Modell in den RAM geladen wird, beim ersten Mal am längsten. Schließen Sie das Fenster nicht.',
          },
          {
            title: 'Chatten oder die anderen Werkzeuge verbinden',
            whyItMatters: 'Nutzen Sie die Chat-Seite der App oder führen Sie `strata connect` aus, um Einstellungen für OpenCode, Codex CLI, Claude Code und andere auszugeben.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus der README oder den Dokumenten des Projekts.**',
        ],
        items: [
          '**Lokale API.** Der Server bietet eine OpenAI-kompatible API, eine API im Anthropic-Stil auf demselben Port und die OpenAI Responses API für Codex CLI; `strata connect` gibt Einstellungen für OpenCode, Codex CLI, Claude Code, oh-my-pi, pi, Hermes Agent und OpenClaw aus.',
          '**Bilder.** Die Bildeingabe ist für Modelle, die Bilder lesen können, standardmäßig aktiv; der Bildleser läuft auf dem Prozessor, wenn die Grafikkarte unter 24 GB hat.',
          '**Chat-App.** Die App hat einen Chat, einen Monitor für Modell, GPU, CPU und RAM, eine Modell-Seite und Einstellungen; im manuellen Modus fragt der Chat nach, bevor er eine Datei ändert oder einen Befehl ausführt.',
          '**Mehrere Karten.** Jede Grafikkarte lässt sich auf „Main“, „Helper“ oder „Off“ setzen, und pro Chat lässt sich eine Denkstufe (aus, niedrig, mittel oder hoch) wählen.',
          '**MCP.** KI-Werkzeuge können Strata über dessen MCP-Server installieren, starten und stoppen.',
          '**Terminal.** `strata launch` fragt Modell, Kontext, Bilder und Zugriff nacheinander ab; mit Flags können Skripte und KI-Agenten es ohne Rückfragen ausführen.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Modellgrößen nach Speicher',
        content: [
          '**Strata liefert ein Modell in mehreren komprimierten Größen; laut README sind kleinere Größen schneller und größere etwas klüger.**',
        ],
        columns: ['Speicher (RAM + VRAM)', 'Größe laut README'],
        rows: [
          { 'Speicher (RAM + VRAM)': '32 GB', 'Größe laut README': 'Gyro-S oder der Coder für Code' },
          { 'Speicher (RAM + VRAM)': '40 GB', 'Größe laut README': 'Swift 1.5 IQ2_XS oder Gyro-M' },
          { 'Speicher (RAM + VRAM)': '48 GB', 'Größe laut README': 'IQ3_XXS: langsamer, besser' },
          { 'Speicher (RAM + VRAM)': '64 GB', 'Größe laut README': 'IQ3_S: am langsamsten, am besten' },
          { 'Speicher (RAM + VRAM)': '96 GB oder mehr', 'Größe laut README': 'Unsloth UD-IQ4_XS bis Q8_0' },
        ],
        note: 'Die README rechnet RAM plus VRAM abzüglich 5 GB, die das System behält. Gyro-S braucht von diesem Speicher 27,6 GB bei einem Download von 58,5 GB und hat laut README eine geringere Qualität als IQ2_XS; Gyro-M braucht 35 GB bei einem Download von 92 GB. Laut README entspricht IQ3_S in den veröffentlichten Tests dem vollständigen Modell; PromptQuorum hat diese Tests nicht geprüft.',
      },
      speed: {
        id: 'speed',
        title: 'Geschwindigkeit: Die Zahlen des Projekts',
        content: [
          '**Die README nennt 94 Tokens pro Sekunde für die schnellste Größe und 53 für IQ3_S auf einer RTX 5070; PromptQuorum hat keine dieser Zahlen nachgemessen.** Ein Token entspricht etwa drei Vierteln eines Wortes.',
        ],
        columns: ['Größe und Karte', 'Antworten (Tok./s)', 'Prompt (Tok./s)'],
        rows: [
          { 'Größe und Karte': 'Q2_0, RTX 5070 (12 GB)', 'Antworten (Tok./s)': '94', 'Prompt (Tok./s)': '2.650' },
          { 'Größe und Karte': 'IQ3_S, RTX 5070 (12 GB)', 'Antworten (Tok./s)': '53', 'Prompt (Tok./s)': '1.620' },
          { 'Größe und Karte': 'Coder, RTX 5070 (12 GB)', 'Antworten (Tok./s)': '55', 'Prompt (Tok./s)': '2.180' },
          { 'Größe und Karte': 'Q2_0, RX 9070 XT (16 GB)', 'Antworten (Tok./s)': '60', 'Prompt (Tok./s)': '1.160' },
        ],
        note: 'Quelle: die Tabellen „How fast is it?“ der README, vom Projekt gemessen auf einem Ryzen 5 7600 mit 64 GB RAM (RTX 5070) und einem Ryzen 9 3900X mit 47 GB RAM (RX 9070 XT). Die README fügt hinzu, dass Strata die erste Nachricht eines Chats vollständig liest, mit etwa einer Minute pro 30.000 Tokens, und dass spätere Nachrichten in Sekunden starten.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Die Sicherheitshinweise von Strata sagen, dass Chats, Prompts, Dateien, Bilder und Modelle auf Ihrem PC bleiben, dass es keine Telemetrie und kein Konto gibt und dass das Starten oder Ausführen eines Modells nie etwas herunterlädt.** Sie ergänzen, dass Strata nach dem Download eines Modells ohne Internet läuft und dass der Server nur auf Ihrem PC lauscht, sofern Sie anderen Geräten nicht per API-Schlüssel Zugriff geben.',
          'Laut denselben Hinweisen wird das Internet nur genutzt, wenn Sie es verlangen: Downloads von Modellen, Engine und App-Updates von Hugging Face und GitHub Releases, die Websuche des Agenten (DuckDuckGo, als zweite Quelle Bing) und Webseiten, außerdem von Ihnen hinzugefügte externe Modelldienste und ein Cloudflare-Tunnel, wenn Sie ihn einschalten. Die Websuche sendet die Suchbegriffe von Ihrem PC weg.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Hinweise sagen, sie beruhten auf dem Lesen des Codes dieser Version, doch es sind Aussagen des Maintainers. PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Besitzer eines aktuellen Gaming-PCs oder eines Macs mit viel Speicher,** die ein sehr großes offenes Modell ohne gemieteten Server nutzen möchten.',
          '**Entwickler, die Claude Code, Codex CLI oder OpenCode nutzen** und einen lokalen Endpunkt im OpenAI- oder Anthropic-Stil wünschen.',
          '**Menschen, die ihre Chats laut den Sicherheitshinweisen des Projekts auf dem eigenen Rechner behalten möchten.**',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität und Geschwindigkeit im Praxistest.** PromptQuorum hat Strata nicht ausgeführt; Antwortqualität, die Geschwindigkeitszahlen und die Aussage, dem vollständigen Modell zu entsprechen, stammen daher vom Projekt.',
          '**Datenschutz- und Download-Prüfungen.** Die Aussagen zu fehlender Telemetrie, Offline-Betrieb und signierten Updates wurden nicht anhand von Code oder Netzwerkverkehr geprüft.',
          '**Reife.** Das Repository stammt vom 24. September 2026 und zeigte am 23. Oktober 2026 697 offene Issues; die Pfade für Mac und Intel Arc sind neu in 0.2.2, und das Projekt nennt dafür nur wenige getestete Rechner.',
          '**Modellauswahl.** Die geprüften Seiten beschreiben ein Modell in mehreren Größen sowie einige benannte Alternativen, keine allgemeine Modellbibliothek.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[Ollama](/de/power-local-llm/ollama-review)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Installation mit einem Befehl und große Modellbibliothek, nicht an ein einzelnes Modell gebunden' },
          { 'App': '[llama.cpp](/de/power-local-llm/llama-cpp-explained)', 'Plattformen': 'Windows, macOS, Linux', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Die C++-Engine hinter vielen Werkzeugen, auch hinter Teilen von Strata; Kommandozeile zuerst' },
          { 'App': '[KoboldCpp](/de/power-local-llm/koboldcpp-review)', 'Plattformen': 'Windows, Linux, macOS', 'Preis / Lizenz': 'Kostenlos / AGPL 3.0', 'Hauptunterschied': 'Schlanker llama.cpp-Wrapper mit eingebauter Web-Oberfläche' },
          { 'App': '[Lucebox](/de/power-local-llm/lucebox-review)', 'Plattformen': 'Linux', 'Preis / Lizenz': 'Kostenlos / Apache-2.0', 'Hauptunterschied': 'Handoptimierte Kernels und spekulatives Decodieren für bestimmte Consumer-GPUs' },
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Strata ohne Grafikkarte?',
            a: 'Laut README brauchen die CUDA-, HIP- und SYCL-Engines eine Karte zum Starten, der PC benötigt also eine unterstützte. Die Mac-Engine kann ohne separate Karte laufen.',
          },
          {
            q: 'Kann ich Strata mit Claude Code nutzen?',
            a: 'Laut README ja, über die API im Anthropic-Stil, indem ANTHROPIC_BASE_URL auf die lokale Adresse gesetzt wird. Das Modell, das antwortet, ist Qwen3.8-Flash-Next, kein Claude-Modell.',
          },
          {
            q: 'Kann ich von meinem Handy oder einem anderen PC darauf zugreifen?',
            a: 'Die README nennt `strata launch --access lan`, das standardmäßig einen API-Schlüssel erzeugt; `--no-api-key` überspringt den Schlüssel und gibt eine Warnung aus.',
          },
          {
            q: 'Ist der Windows-Installer sicher auszuführen?',
            a: 'Laut README ist er noch nicht code-signiert, und der Terminal-Installer prüfe einen SHA-256-Hash. PromptQuorum hat keine der beiden Aussagen überprüft.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Strata ist eine kostenlose App und Terminal-Anwendung unter MIT-Lizenz, die laut README ein offenes Modell mit 125 Milliarden Parametern auf einem Gaming-PC nutzbar macht und über APIs im OpenAI- und Anthropic-Stil bereitstellt; in der Woche vor dieser Prüfung erschienen drei Releases, und die Installation erfolgt per Doppelklick unter Windows, Linux und auf Macs mit Apple Silicon. Dagegen stehen: Jede Aussage zu Geschwindigkeit, Qualität und Datenschutz stammt vom Projekt, das Repository ist etwa einen Monat alt, der Windows-Installer ist nicht code-signiert, und die App ist um ein einziges Modell statt um eine Bibliothek gebaut. Sie eignet sich für Menschen mit genug kombiniertem Speicher, die dieses Modell für Chat oder Coding-Agenten wollen; wer viele Modelle und eine längere Erfolgsbilanz möchte, kann [Ollama](/de/power-local-llm/ollama-review) oder [llama.cpp](/de/power-local-llm/llama-cpp-explained) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Strata auf GitHub](https://github.com/Niko1221/Strata) — README, MIT-Lizenz, Anforderungen, Installationsoptionen, Geschwindigkeitstabellen und Danksagungen, geprüft am 23. Oktober 2026.',
          '[Strata-Release v0.2.2](https://github.com/Niko1221/Strata/releases/tag/v0.2.2) — Veröffentlichungsdatum, Release Notes und die Liste der Installer-Dateien.',
          '[Sicherheitshinweise zu Strata](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md) und [Mac-Anleitung](https://github.com/Niko1221/Strata/blob/main/docs/MAC.md) — Datenverarbeitung, ausgehende Verbindungen und Mac-Einschränkungen.',
          '[Qwen3.8-Flash-Next auf Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — die Modellseite, auf die die README verweist.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Ollama-Rezension](/de/power-local-llm/ollama-review) — eine lokale Laufzeitumgebung mit einem Befehl und großer Modellbibliothek.',
          '[llama.cpp erklärt](/de/power-local-llm/llama-cpp-explained) — die C++-Inferenz-Engine hinter vielen lokalen Werkzeugen.',
          '[KoboldCpp-Rezension](/de/power-local-llm/koboldcpp-review) — ein llama.cpp-Wrapper in einer einzelnen Datei mit eingebauter Web-Oberfläche.',
          '[Lucebox-Rezension](/de/power-local-llm/lucebox-review) — handoptimierte lokale Inferenz für bestimmte Consumer-GPUs.',
          '[Lokale LLM-Laufzeit- und Server-Tools im Vergleich](/de/power-local-llm/local-llm-run-serve-compared) — der Kategorievergleich für Laufzeitumgebungen und Server.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Overview & Reference',
    heroImage: '/images/strata-review-hero-es.webp',
    title: 'Reseña de Strata: un modelo abierto de 125B en un PC gamer',
    seoTitle: 'Reseña de Strata: modelo abierto de 125B en un PC gamer',
    intro:
      'Strata es un motor, una aplicación de escritorio y una herramienta de Terminal con licencia MIT que, según su README, ejecuta Qwen3.8-Flash-Next, un modelo abierto de 125.000 millones de parámetros, en un PC gamer repartiendo el trabajo entre la memoria gráfica, la RAM y el SSD. Esta reseña refleja el README del proyecto, sus notas de seguridad y la página de la versión 0.2.2, según se comprobaron el 23 de octubre de 2026.',
    metaDescription:
      'Reseña de Strata: motor y app gratuitos con licencia MIT que ejecutan un modelo abierto de 125B en un PC gamer. Requisitos, instaladores, API local, dudas.',
    twitterDescription:
      'Reseña de Strata: app MIT que ejecuta un modelo abierto de 125B en un PC gamer, con APIs locales al estilo OpenAI y Anthropic. Requisitos y dudas.',
    audience:
      'Personas con un PC gamer o un Mac con mucha memoria que quieren saber qué necesita Strata, cuánto cuesta, cómo se instala y qué afirmaciones de velocidad y privacidad no confirman las fuentes.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Strata',
    targetKeywords: [
      'reseña strata',
      'ejecutar modelo de 125b en pc gamer',
      'qwen3.8-flash-next en local',
      'motor de inferencia strata',
      'api local compatible con openai',
      'strata frente a ollama',
    ],
    current_hardware_mentioned: ['NVIDIA RTX GPU', 'AMD Radeon GPU', 'Intel Arc GPU', 'Mac with Apple Silicon', 'Ryzen AI Max'],
    leadAnswerBlock:
      '**Strata (versión 0.2.2, publicada el 21 de octubre de 2026) es una aplicación y herramienta de Terminal gratuita, con licencia MIT, que según su README ejecuta un modelo abierto de 125.000 millones de parámetros en un PC gamer corriente y lo ofrece a tus otros programas mediante una API local.** Toda afirmación de velocidad, calidad y privacidad de esta reseña procede del proyecto; PromptQuorum no la ha instalado ni probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué necesito para ejecutar Strata?',
        answer:
          'Según el README, al menos 32 GB de RAM y memoria gráfica combinadas, unos 80 GB de disco libre y una tarjeta gráfica compatible o un Mac con Apple Silicon. La aplicación en sí no cuesta nada.',
        bullets: [
          'Es compatible con NVIDIA RTX series 20 a 50, AMD Radeon RX 6800 y posteriores, Intel Arc y Macs con Apple Silicon.',
          'Ofrece una API compatible con OpenAI y otra compatible con Anthropic para herramientas como Claude Code, Codex CLI y OpenCode.',
          'Lee imágenes; el lector de imágenes está activado por defecto en los modelos que lo admiten.',
          'Se instala con una app de doble clic o con un comando de Terminal de una sola línea.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Strata?', anchor: 'what-is-strata' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Qué necesitas', anchor: 'requirements' },
      { label: 'Precios', anchor: 'pricing' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Tamaños de modelo según la memoria', anchor: 'model-sizes' },
      { label: 'Velocidad: las cifras del proyecto', anchor: 'speed' },
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
            text: 'Strata es un motor y una aplicación de escritorio con licencia MIT que ejecuta un único modelo abierto de 125.000 millones de parámetros en un PC gamer.',
          },
          {
            type: 'plain-terms',
            text: 'Reparte el modelo entre tu tarjeta gráfica, la RAM y el SSD, y responde en una ventana de chat o mediante una API local que otras herramientas pueden llamar.',
          },
        ],
        items: [
          'Mantenimiento: el repositorio se creó el 24 de septiembre de 2026 y las versiones 0.2.0-beta, 0.2.1 y 0.2.2 aparecieron entre el 19 y el 21 de octubre de 2026, así que está activo pero solo tiene un mes; no se aplica ninguna advertencia de proyecto abandonado.',
          'Licencia: MIT para Strata; cada archivo de modelo tiene su propia licencia.',
          'Coste: gratis y sin cuenta; el apoyo es voluntario.',
          'Instaladores: el instalador de Windows aún no está firmado con certificado de código, según el README.',
          'Base: el README, las notas de seguridad y la página de la versión, leídos el 23 de octubre de 2026, sin pruebas prácticas.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha instalado, probado ni medido Strata. Las afirmaciones de velocidad, calidad y privacidad que siguen son del propio proyecto.',
          },
        ],
      },
      overview: {
        id: 'what-is-strata',
        title: '¿Qué es Strata?',
        content: [
          '**Strata es un motor de inferencia, una aplicación de escritorio y un cliente de Terminal construidos en torno a un solo modelo, Qwen3.8-Flash-Next, que el README describe como un modelo de 125.000 millones de parámetros que normalmente necesita un servidor.** El equipo de Qwen publica el modelo en [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next); Strata, publicada bajo la cuenta de GitHub Niko1221, lo ejecuta en hardware de consumo.',
          'El README explica el truco con una analogía de biblioteca: el modelo es un equipo de 24.576 pequeños especialistas («expertos») y cada palabra necesita solo 10 de ellos. La tarjeta gráfica guarda los expertos más usados, la RAM los guarda todos y el SSD guarda una tabla de consulta de 29 GB. Además, un pequeño ayudante adivina las siguientes palabras y el modelo grande las comprueba de una sola pasada; el proyecto afirma que así se obtiene la misma respuesta entre 1,6 y 1,8 veces antes. El motor usa partes de [llama.cpp](https://github.com/ggml-org/llama.cpp) y el código está en [Niko1221/Strata](https://github.com/Niko1221/Strata).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Strata se descarga desde la página de versiones (Releases) de GitHub, con un instalador por sistema y tarjeta gráfica.**',
        ],
        columns: ['Sistema y tarjeta', 'Descarga'],
        rows: [
          { 'Sistema y tarjeta': 'Windows, NVIDIA (driver 580+)', 'Descarga': '[windows-cuda13.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda13.exe)' },
          { 'Sistema y tarjeta': 'Windows, NVIDIA o driver anteriores', 'Descarga': '[windows-cuda12.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda12.exe)' },
          { 'Sistema y tarjeta': 'Windows, AMD RX 9000 / R9700', 'Descarga': '[windows-hip.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip.exe)' },
          { 'Sistema y tarjeta': 'Windows, AMD RX 7000 / Strix Halo', 'Descarga': '[windows-hip-rdna3.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip-rdna3.exe)' },
          { 'Sistema y tarjeta': 'Linux, NVIDIA (driver 580+)', 'Descarga': '[linux-nvidia-cuda13.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda13.AppImage)' },
          { 'Sistema y tarjeta': 'Linux, NVIDIA o driver anteriores', 'Descarga': '[linux-nvidia-cuda12.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda12.AppImage)' },
          { 'Sistema y tarjeta': 'Linux, AMD RX 9000 / R9700', 'Descarga': '[linux-amd-rx9070.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx9070.AppImage)' },
          { 'Sistema y tarjeta': 'Linux, AMD RX 7000', 'Descarga': '[linux-amd-rx7900.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx7900.AppImage)' },
          { 'Sistema y tarjeta': 'Linux, Strix Halo', 'Descarga': '[linux-amd-strixhalo.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-strixhalo.AppImage)' },
          { 'Sistema y tarjeta': 'Mac, Apple Silicon (macOS 15+)', 'Descarga': '[mac.dmg](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-mac.dmg)' },
          { 'Sistema y tarjeta': 'Terminal, Linux y Mac', 'Descarga': '[install.sh](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.sh) (una línea del README)' },
          { 'Sistema y tarjeta': 'Terminal, Windows', 'Descarga': '[install.ps1](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.ps1) (una línea del README)' },
          { 'Sistema y tarjeta': 'Código fuente', 'Descarga': '[github.com/Niko1221/Strata](https://github.com/Niko1221/Strata)' },
          { 'Sistema y tarjeta': 'Notas de seguridad y privacidad', 'Descarga': '[docs/SAFETY.md](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)' },
        ],
        note: 'Versión revisada: 0.2.2 (motor 0.1.47), publicada el 21 de octubre de 2026 según la página de versiones de GitHub, que es la última actualización del proyecto en el momento de la comprobación. No se encontró un sitio web de producto independiente: el campo de página web del repositorio y el enlace del perfil del responsable están vacíos, y una búsqueda web solo mostró el repositorio y artículos de terceros. El README indica que el instalador de Windows no está firmado con certificado de código, por lo que Windows puede mostrar «Windows protegió tu PC», y que los AppImage de Linux necesitan FUSE 2. Las tarjetas RX 6000 no tienen instalador propio, y el README dice que ese motor aún no se ha probado en una tarjeta RX 6000 real.',
      },
      requirements: {
        id: 'requirements',
        title: 'Qué necesitas',
        content: [
          '**Strata necesita al menos 32 GB de RAM y memoria gráfica (VRAM) combinadas, unos 80 GB de disco libre, un driver gráfico actual y Windows 10/11, Linux o macOS 15 o posterior.** En un Mac o un Ryzen AI Max, la memoria unificada cuenta para ambas.',
        ],
        columns: ['Equipo', 'Soporte según el README'],
        rows: [
          { 'Equipo': 'NVIDIA', 'Soporte según el README': 'GeForce RTX series 20, 30, 40 y 50, con 12 GB o más' },
          { 'Equipo': 'AMD', 'Soporte según el README': 'Radeon RX 6800 y posteriores, Radeon AI PRO R9700, 12 GB o más' },
          { 'Equipo': 'Intel', 'Soporte según el README': 'Tarjetas Arc; el modelo más pequeño solo se probó en una Arc A750 (Linux)' },
          { 'Equipo': 'Apple Silicon', 'Soporte según el README': 'M1 o posterior, macOS 15 o posterior; los Mac Intel no pueden ejecutarlo' },
          { 'Equipo': 'Ryzen AI Max (Strix Halo)', 'Soporte según el README': 'Sistemas de memoria unificada, con instaladores propios para Windows y Linux' },
        ],
        note: 'Según el README, dos o tres tarjetas de la misma marca pueden compartir un modelo; Strata nunca reparte un modelo entre tarjetas NVIDIA y AMD. Las tarjetas y procesadores más antiguos tienen páginas experimentales aparte en el repositorio.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios',
        content: [
          '**Strata es gratuita: el README indica licencia MIT, sin cuenta y sin nube.**',
        ],
        columns: ['Elemento', 'Coste (USD)'],
        rows: [
          { 'Elemento': 'App, Terminal y motor', 'Coste (USD)': '$0 (licencia MIT)' },
          { 'Elemento': 'Archivos de modelo', 'Coste (USD)': 'Sin precio indicado; rigen sus licencias' },
          { 'Elemento': 'Apoyar el proyecto', 'Coste (USD)': 'Opcional, vía [Buy Me a Coffee](https://buymeacoffee.com/strataengine)' },
        ],
        note: 'Leído en el README el 23 de octubre de 2026. También invita a los patrocinadores a ponerse en contacto a través del [perfil de GitHub](https://github.com/Niko1221) del responsable. El coste real es la descarga del modelo: de unos 40 a 70 GB según el README.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen la «Opción A: la app Strata» del README; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Compara tu PC con los requisitos',
            whyItMatters: 'Antes de descargar, comprueba la memoria, el disco libre y la tarjeta gráfica con la tabla anterior.',
          },
          {
            title: 'Descarga el instalador de tu sistema y tarjeta',
            whyItMatters: 'Elige el archivo que corresponda en la tabla «Dónde conseguirla». Quien use la Terminal puede ejecutar el script de una línea y luego iniciar Strata con `strata launch`.',
          },
          {
            title: 'Instala y deja que la app lea tu PC',
            whyItMatters: 'La primera pantalla recomienda un modelo que quepa; pulsa instalar. La descarga del modelo es grande y, si se interrumpe, continúa donde se quedó.',
          },
          {
            title: 'Espera durante la primera carga',
            whyItMatters: 'El README dice que el PC puede ir lento o dejar de responder de 1 a 3 minutos mientras el modelo se carga en la RAM, más tiempo la primera vez. No cierres la ventana.',
          },
          {
            title: 'Chatea o conecta tus otras herramientas',
            whyItMatters: 'Usa la página Chat de la app o ejecuta `strata connect` para imprimir los ajustes de OpenCode, Codex CLI, Claude Code y otras.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto siguiente procede del README o de la documentación del proyecto.**',
        ],
        items: [
          '**API local.** El servidor ofrece una API compatible con OpenAI, una API al estilo Anthropic en el mismo puerto y la API Responses de OpenAI para Codex CLI; `strata connect` imprime los ajustes de OpenCode, Codex CLI, Claude Code, oh-my-pi, pi, Hermes Agent y OpenClaw.',
          '**Imágenes.** La entrada de imágenes está activada por defecto en los modelos que pueden leerlas; el lector se ejecuta en el procesador cuando la tarjeta gráfica tiene menos de 24 GB.',
          '**App de chat.** La app tiene un Chat, un Monitor del modelo, la GPU, la CPU y la RAM, una página de Modelos y Ajustes; en modo Manual, el chat pide permiso antes de cambiar un archivo o ejecutar un comando.',
          '**Varias tarjetas.** Cada tarjeta gráfica puede configurarse como Principal, Auxiliar o Desactivada, y se puede elegir un nivel de razonamiento (desactivado, bajo, medio o alto) en cada chat.',
          '**MCP.** Las herramientas de IA pueden instalar, iniciar y detener Strata mediante su servidor MCP.',
          '**Terminal.** `strata launch` pregunta una a una por el modelo, el contexto, las imágenes y el acceso; con parámetros, los scripts y los agentes de IA pueden ejecutarlo sin preguntas.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Tamaños de modelo según la memoria',
        content: [
          '**Strata incluye un solo modelo en varios tamaños comprimidos; el README dice que los tamaños menores son más rápidos y los mayores algo más inteligentes.**',
        ],
        columns: ['Memoria (RAM + VRAM)', 'Tamaño según el README'],
        rows: [
          { 'Memoria (RAM + VRAM)': '32 GB', 'Tamaño según el README': 'Gyro-S, o el Coder para código' },
          { 'Memoria (RAM + VRAM)': '40 GB', 'Tamaño según el README': 'Swift 1.5 IQ2_XS, o Gyro-M' },
          { 'Memoria (RAM + VRAM)': '48 GB', 'Tamaño según el README': 'IQ3_XXS: más lento, mejor' },
          { 'Memoria (RAM + VRAM)': '64 GB', 'Tamaño según el README': 'IQ3_S: el más lento, el mejor' },
          { 'Memoria (RAM + VRAM)': '96 GB o más', 'Tamaño según el README': 'Unsloth UD-IQ4_XS hasta Q8_0' },
        ],
        note: 'El README cuenta la RAM más la VRAM menos 5 GB que se reserva el sistema. Gyro-S necesita 27.6 GB de esa memoria para una descarga de 58.5 GB y, según el README, tiene menor calidad que IQ2_XS; Gyro-M necesita 35 GB para una descarga de 92 GB. El README afirma que IQ3_S iguala al modelo completo en las pruebas publicadas; PromptQuorum no ha comprobado esas pruebas.',
      },
      speed: {
        id: 'speed',
        title: 'Velocidad: las cifras del proyecto',
        content: [
          '**El README indica 94 tokens por segundo para su tamaño más rápido y 53 para IQ3_S en una RTX 5070; PromptQuorum no ha reproducido ninguna cifra.** Un token equivale a unas tres cuartas partes de una palabra.',
        ],
        columns: ['Tamaño y tarjeta', 'Respuestas (tok/s)', 'Prompt (tok/s)'],
        rows: [
          { 'Tamaño y tarjeta': 'Q2_0, RTX 5070 (12 GB)', 'Respuestas (tok/s)': '94', 'Prompt (tok/s)': '2,650' },
          { 'Tamaño y tarjeta': 'IQ3_S, RTX 5070 (12 GB)', 'Respuestas (tok/s)': '53', 'Prompt (tok/s)': '1,620' },
          { 'Tamaño y tarjeta': 'Coder, RTX 5070 (12 GB)', 'Respuestas (tok/s)': '55', 'Prompt (tok/s)': '2,180' },
          { 'Tamaño y tarjeta': 'Q2_0, RX 9070 XT (16 GB)', 'Respuestas (tok/s)': '60', 'Prompt (tok/s)': '1,160' },
        ],
        note: 'Fuente: las tablas de velocidad del README, medidas por el propio proyecto en un Ryzen 5 7600 con 64 GB de RAM (RTX 5070) y en un Ryzen 9 3900X con 47 GB de RAM (RX 9070 XT). El README añade que Strata lee íntegro el primer mensaje de un chat, a unos 30.000 tokens por minuto, y que los mensajes siguientes empiezan en segundos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**Las notas de seguridad de Strata dicen que los chats, los prompts, los archivos, las imágenes y los modelos permanecen en tu PC, que no hay telemetría ni cuenta, y que iniciar o ejecutar un modelo nunca descarga nada.** Añaden que, una vez descargado un modelo, Strata funciona sin internet y que el servidor solo escucha en tu PC, salvo que des acceso a otros dispositivos con una clave de API.',
          'Según las mismas notas, internet se usa solo cuando lo pides: descargas de modelos, del motor y de actualizaciones de la app desde Hugging Face y GitHub Releases, la búsqueda web del agente (DuckDuckGo, con Bing como segunda fuente) y las páginas web, fuera de los servicios de modelos que añadas, y un túnel de Cloudflare si lo activas. La búsqueda web envía los términos de búsqueda fuera de tu PC.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Las notas dicen que proceden de leer el código de esta versión, pero son afirmaciones del responsable. PromptQuorum no ha auditado el código ni el tráfico de red.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Quienes tienen un PC gamer reciente o un Mac con mucha memoria** y quieren un modelo abierto muy grande sin alquilar un servidor.',
          '**Desarrolladores que usan Claude Code, Codex CLI u OpenCode** y quieren un endpoint local al estilo OpenAI o Anthropic.',
          '**Personas que quieren mantener sus chats en su propio equipo,** según las notas de seguridad del proyecto.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad y velocidad en la práctica.** PromptQuorum no ejecutó Strata, así que la calidad de las respuestas, las cifras de velocidad y la afirmación de igualar al modelo completo son del proyecto.',
          '**Comprobaciones de privacidad y descargas.** Las afirmaciones de ausencia de telemetría, funcionamiento sin conexión y actualizaciones firmadas no se contrastaron con el código ni con el tráfico de red.',
          '**Madurez.** El repositorio data del 24 de septiembre de 2026 y mostraba 697 incidencias abiertas el 23 de octubre de 2026; las rutas para Mac e Intel Arc son nuevas en la 0.2.2 y el proyecto nombra pocos equipos probados para ellas.',
          '**Elección de modelo.** Las páginas revisadas describen un modelo en varios tamaños más unas pocas alternativas con nombre, no una biblioteca general de modelos.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Ollama](/es/power-local-llm/ollama-review)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Instalación con un comando y una gran biblioteca de modelos, sin depender de un solo modelo' },
          { 'App': '[llama.cpp](/es/power-local-llm/llama-cpp-explained)', 'Plataformas': 'Windows, macOS, Linux', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'El motor en C++ detrás de muchas herramientas, incluidas partes de Strata; se maneja primero desde la línea de comandos' },
          { 'App': '[KoboldCpp](/es/power-local-llm/koboldcpp-review)', 'Plataformas': 'Windows, Linux, macOS', 'Precio / licencia': 'Gratis / AGPL 3.0', 'Diferencia clave': 'Envoltorio ligero de llama.cpp con interfaz web integrada' },
          { 'App': '[Lucebox](/es/power-local-llm/lucebox-review)', 'Plataformas': 'Linux', 'Precio / licencia': 'Gratis / Apache-2.0', 'Diferencia clave': 'Kernels ajustados a mano y decodificación especulativa para GPU de consumo concretas' },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Strata sin tarjeta gráfica?',
            a: 'El README dice que los motores CUDA, HIP y SYCL necesitan una tarjeta para arrancar, así que el PC debe tener una compatible. El motor para Mac puede funcionar sin una tarjeta aparte.',
          },
          {
            q: '¿Puedo usar Strata con Claude Code?',
            a: 'Según el README, sí, mediante la API al estilo Anthropic, configurando ANTHROPIC_BASE_URL con la dirección local. El modelo que responde es Qwen3.8-Flash-Next, no un modelo de Claude.',
          },
          {
            q: '¿Puedo acceder desde el móvil o desde otro PC?',
            a: 'El README menciona `strata launch --access lan`, que crea una clave de API por defecto; `--no-api-key` omite la clave e imprime una advertencia.',
          },
          {
            q: '¿Es seguro ejecutar el instalador de Windows?',
            a: 'El README dice que aún no está firmado con certificado de código y que el instalador de Terminal comprueba un hash SHA-256. PromptQuorum no ha verificado ninguna de las dos afirmaciones.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Strata es una aplicación y herramienta de Terminal gratuita, con licencia MIT, que según su README hace utilizable un modelo abierto de 125.000 millones de parámetros en un PC gamer y lo expone mediante APIs al estilo OpenAI y Anthropic; publicó tres versiones en la semana previa a esta comprobación y se instala con doble clic en Windows, Linux y Macs con Apple Silicon. En contra, toda afirmación de velocidad, calidad y privacidad procede del proyecto, el repositorio tiene aproximadamente un mes, el instalador de Windows no está firmado con certificado de código y está construida en torno a un solo modelo, no a una biblioteca. Encaja con quien tiene suficiente memoria combinada y quiere ese modelo para chatear o para agentes de programación; quien prefiera muchos modelos y un historial más largo puede comparar [Ollama](/es/power-local-llm/ollama-review) o [llama.cpp](/es/power-local-llm/llama-cpp-explained).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Strata en GitHub](https://github.com/Niko1221/Strata) — README, licencia MIT, requisitos, opciones de instalación, tablas de velocidad y créditos, comprobados el 23 de octubre de 2026.',
          '[Versión v0.2.2 de Strata](https://github.com/Niko1221/Strata/releases/tag/v0.2.2) — fecha de publicación, notas de la versión y lista de archivos de instalación.',
          '[Notas de seguridad de Strata](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md) y [guía para Mac](https://github.com/Niko1221/Strata/blob/main/docs/MAC.md) — tratamiento de datos, conexiones salientes y límites en Mac.',
          '[Qwen3.8-Flash-Next en Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — la página del modelo que enlaza el README.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Ollama](/es/power-local-llm/ollama-review) — un entorno local con un solo comando y una gran biblioteca de modelos.',
          '[llama.cpp explicado](/es/power-local-llm/llama-cpp-explained) — el motor de inferencia en C++ detrás de muchas herramientas locales.',
          '[Reseña de KoboldCpp](/es/power-local-llm/koboldcpp-review) — un envoltorio de llama.cpp en un solo archivo con interfaz web integrada.',
          '[Reseña de Lucebox](/es/power-local-llm/lucebox-review) — inferencia local ajustada a mano para GPU de consumo concretas.',
          '[Ejecución y servicio de LLM locales comparados](/es/power-local-llm/local-llm-run-serve-compared) — la comparativa de la categoría de entornos de ejecución y servidores.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Overview & Reference',
    heroImage: '/images/strata-review-hero-fr.webp',
    title: 'Test de Strata : un modèle ouvert de 125B sur un PC de jeu',
    seoTitle: 'Test de Strata : un modèle ouvert 125B sur un PC de jeu',
    intro:
      'Strata est un moteur, une application de bureau et un outil Terminal sous licence MIT qui, d’après son README, fait tourner Qwen3.8-Flash-Next, un modèle ouvert de 125 milliards de paramètres, sur un PC de jeu en répartissant le travail entre la mémoire graphique, la RAM et le SSD. Ce test reflète le README du projet, ses notes de sécurité et sa page de la version 0.2.2, consultés le 23 octobre 2026.',
    metaDescription:
      'Test de Strata : application gratuite sous licence MIT qui fait tourner un modèle ouvert de 125B sur un PC de jeu. Prérequis, API locale, zones d’ombre.',
    twitterDescription:
      'Test de Strata : une application sous licence MIT qui fait tourner un modèle ouvert de 125B sur un PC de jeu, avec API locales style OpenAI et Anthropic.',
    audience:
      'Les personnes qui possèdent un PC de jeu ou un Mac à grande mémoire et veulent savoir ce que Strata exige, ce qu’il coûte, comment il s’installe et quelles affirmations de vitesse et de confidentialité les sources ne confirment pas.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test Strata',
    targetKeywords: [
      'test strata',
      'faire tourner un modèle 125b sur pc de jeu',
      'qwen3.8-flash-next en local',
      'moteur d’inférence strata',
      'api locale compatible openai',
      'strata contre ollama',
    ],
    current_hardware_mentioned: ['NVIDIA RTX GPU', 'AMD Radeon GPU', 'Intel Arc GPU', 'Mac with Apple Silicon', 'Ryzen AI Max'],
    leadAnswerBlock:
      '**Strata (version 0.2.2, publiée le 21 octobre 2026) est une application et un outil Terminal gratuits, sous licence MIT, qui, d’après son README, font tourner un modèle ouvert de 125 milliards de paramètres sur un PC de jeu ordinaire et le mettent à disposition de vos autres programmes via une API locale.** Toutes les affirmations de ce test sur la vitesse, la qualité et la confidentialité viennent du projet ; PromptQuorum n’a ni installé ni testé Strata.',
    quickAnswerTop: {
      fr: {
        question: 'De quoi ai-je besoin pour faire tourner Strata ?',
        answer:
          'Au moins 32 GB de RAM et de mémoire graphique cumulées, environ 80 GB d’espace disque libre et une carte graphique prise en charge ou un Mac Apple Silicon, selon le README. L’application elle-même est gratuite.',
        bullets: [
          'Prend en charge les NVIDIA RTX séries 20 à 50, les AMD Radeon RX 6800 et plus récentes, les Intel Arc et les Mac Apple Silicon.',
          'Propose une API compatible OpenAI et une API compatible Anthropic pour des outils comme Claude Code, Codex CLI et OpenCode.',
          'Lit les images ; le lecteur d’images est activé par défaut pour les modèles qui le permettent.',
          'S’installe avec une application à double-clic ou une commande Terminal d’une ligne.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce que Strata ?', anchor: 'what-is-strata' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Ce qu’il vous faut', anchor: 'requirements' },
      { label: 'Tarifs', anchor: 'pricing' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Tailles de modèle selon la mémoire', anchor: 'model-sizes' },
      { label: 'Vitesse : les chiffres du projet', anchor: 'speed' },
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
            text: 'Strata est un moteur et une application de bureau sous licence MIT qui font tourner un seul modèle ouvert de 125 milliards de paramètres sur un PC de jeu.',
          },
          {
            type: 'plain-terms',
            text: 'Il répartit le modèle entre votre carte graphique, votre RAM et votre SSD, puis répond dans une fenêtre de discussion ou via une API locale que d’autres outils peuvent appeler.',
          },
        ],
        items: [
          'Maintenance : le dépôt a été créé le 24 septembre 2026 et les versions 0.2.0-beta, 0.2.1 et 0.2.2 sont parues entre le 19 et le 21 octobre 2026 ; le projet est donc actif mais n’a qu’un mois, et aucun avertissement de projet inactif ne s’applique.',
          'Licence : MIT pour Strata lui-même ; chaque fichier de modèle a sa propre licence.',
          'Coût : gratuit, sans compte ; le soutien financier est volontaire.',
          'Installeurs : l’installeur Windows n’est pas encore signé, selon le README.',
          'Base : le README, les notes de sécurité et la page de version, lus le 23 octobre 2026, sans test pratique.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n’a ni installé, ni testé, ni mesuré Strata. Les affirmations de vitesse, de qualité et de confidentialité ci-dessous sont celles du projet.',
          },
        ],
      },
      overview: {
        id: 'what-is-strata',
        title: 'Qu’est-ce que Strata ?',
        content: [
          '**Strata est un moteur d’inférence, une application de bureau et un client Terminal construits autour d’un seul modèle, Qwen3.8-Flash-Next, que le README décrit comme un modèle de 125 milliards de paramètres qui exige normalement un serveur.** L’équipe Qwen publie le modèle sur [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) ; Strata, publié sous le compte GitHub Niko1221, le fait tourner sur du matériel grand public.',
          'Le README explique l’astuce par une image : le modèle est une équipe de 24 576 petits spécialistes (« experts ») et chaque mot n’en sollicite que 10. La carte graphique conserve les experts les plus utilisés, la RAM les conserve tous et le SSD héberge une table de correspondance de 29 GB. Un petit assistant devine aussi les quelques mots suivants, que le grand modèle vérifie en une seule passe ; le projet affirme que cela donne la même réponse de 1,6 à 1,8 fois plus vite. Le moteur reprend des parties de [llama.cpp](https://github.com/ggml-org/llama.cpp), et le code se trouve sur [Niko1221/Strata](https://github.com/Niko1221/Strata).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Strata se télécharge depuis la page Releases de GitHub, avec un installeur par système et par carte graphique.**',
        ],
        columns: ['Système et carte', 'Téléchargement'],
        rows: [
          { 'Système et carte': 'Windows, NVIDIA (pilote 580+)', 'Téléchargement': '[windows-cuda13.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda13.exe)' },
          { 'Système et carte': 'Windows, NVIDIA ou pilote plus ancien', 'Téléchargement': '[windows-cuda12.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda12.exe)' },
          { 'Système et carte': 'Windows, AMD RX 9000 / R9700', 'Téléchargement': '[windows-hip.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip.exe)' },
          { 'Système et carte': 'Windows, AMD RX 7000 / Strix Halo', 'Téléchargement': '[windows-hip-rdna3.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip-rdna3.exe)' },
          { 'Système et carte': 'Linux, NVIDIA (pilote 580+)', 'Téléchargement': '[linux-nvidia-cuda13.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda13.AppImage)' },
          { 'Système et carte': 'Linux, NVIDIA ou pilote plus ancien', 'Téléchargement': '[linux-nvidia-cuda12.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda12.AppImage)' },
          { 'Système et carte': 'Linux, AMD RX 9000 / R9700', 'Téléchargement': '[linux-amd-rx9070.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx9070.AppImage)' },
          { 'Système et carte': 'Linux, AMD RX 7000', 'Téléchargement': '[linux-amd-rx7900.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx7900.AppImage)' },
          { 'Système et carte': 'Linux, Strix Halo', 'Téléchargement': '[linux-amd-strixhalo.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-strixhalo.AppImage)' },
          { 'Système et carte': 'Mac, Apple Silicon (macOS 15+)', 'Téléchargement': '[mac.dmg](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-mac.dmg)' },
          { 'Système et carte': 'Terminal, Linux et Mac', 'Téléchargement': '[install.sh](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.sh) (une ligne du README)' },
          { 'Système et carte': 'Terminal, Windows', 'Téléchargement': '[install.ps1](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.ps1) (une ligne du README)' },
          { 'Système et carte': 'Code source', 'Téléchargement': '[github.com/Niko1221/Strata](https://github.com/Niko1221/Strata)' },
          { 'Système et carte': 'Notes de sécurité et de confidentialité', 'Téléchargement': '[docs/SAFETY.md](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)' },
        ],
        note: 'Version testée : 0.2.2 (moteur 0.1.47), publiée le 21 octobre 2026 selon la page de version GitHub, soit la dernière mise à jour du projet au moment de la vérification. Aucun site de produit distinct n’a été trouvé : le champ « homepage » du dépôt et le lien du profil du mainteneur sont vides, et une recherche web n’a livré que le dépôt et des articles de tiers. Le README précise que l’installeur Windows n’est pas signé, donc Windows peut afficher « Windows a protégé votre ordinateur », et que les AppImage Linux nécessitent FUSE 2. Les cartes RX 6000 n’ont pas d’installeur dédié, et le README indique que ce moteur n’a pas encore été testé sur une vraie carte RX 6000.',
      },
      requirements: {
        id: 'requirements',
        title: 'Ce qu’il vous faut',
        content: [
          '**Strata exige au moins 32 GB de RAM et de mémoire graphique (VRAM) cumulées, environ 80 GB d’espace disque libre, un pilote graphique récent et Windows 10/11, Linux ou macOS 15 ou plus récent.** Sur un Mac ou un Ryzen AI Max, la mémoire unifiée compte pour les deux.',
        ],
        columns: ['Ordinateur', 'Prise en charge (README)'],
        rows: [
          { 'Ordinateur': 'NVIDIA', 'Prise en charge (README)': 'GeForce RTX séries 20, 30, 40, 50, 12 GB ou plus' },
          { 'Ordinateur': 'AMD', 'Prise en charge (README)': 'Radeon RX 6800 et plus récentes, Radeon AI PRO R9700, 12 GB ou plus' },
          { 'Ordinateur': 'Intel', 'Prise en charge (README)': 'Cartes Arc ; le plus petit modèle n’est testé que sur une Arc A750 (Linux)' },
          { 'Ordinateur': 'Apple Silicon', 'Prise en charge (README)': 'M1 ou plus récent, macOS 15 ou plus ; Mac Intel non pris en charge' },
          { 'Ordinateur': 'Ryzen AI Max (Strix Halo)', 'Prise en charge (README)': 'Systèmes à mémoire unifiée, installeurs Windows et Linux dédiés' },
        ],
        note: 'Selon le README, deux ou trois cartes de la même marque peuvent se partager un modèle ; Strata ne répartit jamais un modèle entre des cartes NVIDIA et AMD. Les cartes et processeurs plus anciens ont des pages expérimentales distinctes dans le dépôt.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs',
        content: [
          '**Strata est gratuit : le README indique une licence MIT, aucun compte et aucun cloud.**',
        ],
        columns: ['Élément', 'Coût (USD)'],
        rows: [
          { 'Élément': 'Application, Terminal et moteur', 'Coût (USD)': '$0 (licence MIT)' },
          { 'Élément': 'Fichiers de modèle', 'Coût (USD)': 'Aucun prix indiqué ; licences propres' },
          { 'Élément': 'Soutenir le projet', 'Coût (USD)': 'Facultatif, via [Buy Me a Coffee](https://buymeacoffee.com/strataengine)' },
        ],
        note: 'Relevé dans le README le 23 octobre 2026. Il invite aussi les sponsors à prendre contact via le [profil GitHub](https://github.com/Niko1221) du mainteneur. Le vrai coût est le téléchargement du modèle : environ 40 à 70 GB selon le README.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent l’« Option A : l’application Strata » du README ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Comparer votre PC aux prérequis',
            whyItMatters: 'Vérifiez la mémoire, l’espace disque libre et la carte graphique par rapport au tableau ci-dessus avant de télécharger.',
          },
          {
            title: 'Télécharger l’installeur de votre système et de votre carte',
            whyItMatters: 'Choisissez le fichier correspondant dans le tableau « Où l’obtenir ». Les utilisateurs du Terminal peuvent exécuter le script d’une ligne, puis lancer Strata avec `strata launch`.',
          },
          {
            title: 'Installer et laisser l’application analyser votre PC',
            whyItMatters: 'Le premier écran recommande un modèle adapté ; appuyez sur installer. Le téléchargement du modèle est volumineux et reprend là où il s’est arrêté en cas d’interruption.',
          },
          {
            title: 'Patienter pendant le premier chargement',
            whyItMatters: 'Le README indique que le PC peut être lent ou ne plus répondre pendant 1 à 3 minutes le temps que le modèle se charge en RAM, plus longtemps la première fois. Ne fermez pas la fenêtre.',
          },
          {
            title: 'Discuter, ou connecter vos autres outils',
            whyItMatters: 'Utilisez la page Chat de l’application, ou lancez `strata connect` pour afficher les réglages d’OpenCode, de Codex CLI, de Claude Code et d’autres.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient du README ou de la documentation du projet.**',
        ],
        items: [
          '**API locale.** Le serveur propose une API compatible OpenAI, une API de style Anthropic sur le même port et l’API OpenAI Responses pour Codex CLI ; `strata connect` affiche les réglages d’OpenCode, de Codex CLI, de Claude Code, d’oh-my-pi, de pi, de Hermes Agent et d’OpenClaw.',
          '**Images.** La saisie d’images est activée par défaut pour les modèles qui savent les lire ; le lecteur tourne sur le processeur lorsque la carte graphique a moins de 24 GB.',
          '**Application de discussion.** L’application comprend un Chat, un Monitor du modèle, du GPU, du CPU et de la RAM, une page Models et des Settings ; en mode Manual, le chat demande confirmation avant de modifier un fichier ou d’exécuter une commande.',
          '**Plusieurs cartes.** Chaque carte graphique peut être réglée sur Main, Helper ou Off, et un niveau de réflexion (off, low, medium ou high) peut être choisi pour chaque discussion.',
          '**MCP.** Les outils d’IA peuvent installer, démarrer et arrêter Strata via son serveur MCP.',
          '**Terminal.** `strata launch` demande le modèle, le contexte, les images et l’accès, une question à la fois ; des options permettent aux scripts et aux agents d’IA de l’exécuter sans invite.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Tailles de modèle selon la mémoire',
        content: [
          '**Strata fournit un seul modèle en plusieurs tailles compressées ; selon le README, les petites tailles sont plus rapides et les grandes un peu plus intelligentes.**',
        ],
        columns: ['Mémoire (RAM + VRAM)', 'Taille suggérée (README)'],
        rows: [
          { 'Mémoire (RAM + VRAM)': '32 GB', 'Taille suggérée (README)': 'Gyro-S, ou le Coder pour le code' },
          { 'Mémoire (RAM + VRAM)': '40 GB', 'Taille suggérée (README)': 'Swift 1.5 IQ2_XS, ou Gyro-M' },
          { 'Mémoire (RAM + VRAM)': '48 GB', 'Taille suggérée (README)': 'IQ3_XXS : plus lent, meilleur' },
          { 'Mémoire (RAM + VRAM)': '64 GB', 'Taille suggérée (README)': 'IQ3_S : le plus lent, le meilleur' },
          { 'Mémoire (RAM + VRAM)': '96 GB ou plus', 'Taille suggérée (README)': 'Unsloth UD-IQ4_XS jusqu’à Q8_0' },
        ],
        note: 'Le README compte la RAM plus la VRAM moins 5 GB que le système conserve. Gyro-S exige 27.6 GB de cette mémoire pour un téléchargement de 58.5 GB et, selon le README, offre une qualité inférieure à IQ2_XS ; Gyro-M exige 35 GB pour un téléchargement de 92 GB. Le README affirme qu’IQ3_S égale le modèle complet sur les tests publiés ; PromptQuorum n’a pas vérifié ces tests.',
      },
      speed: {
        id: 'speed',
        title: 'Vitesse : les chiffres du projet',
        content: [
          '**Le README indique 94 tokens par seconde pour sa taille la plus rapide et 53 pour IQ3_S sur une RTX 5070 ; PromptQuorum n’a reproduit aucun de ces chiffres.** Un token représente environ trois quarts de mot.',
        ],
        columns: ['Taille et carte', 'Réponses (tok/s)', 'Prompt (tok/s)'],
        rows: [
          { 'Taille et carte': 'Q2_0, RTX 5070 (12 GB)', 'Réponses (tok/s)': '94', 'Prompt (tok/s)': '2,650' },
          { 'Taille et carte': 'IQ3_S, RTX 5070 (12 GB)', 'Réponses (tok/s)': '53', 'Prompt (tok/s)': '1,620' },
          { 'Taille et carte': 'Coder, RTX 5070 (12 GB)', 'Réponses (tok/s)': '55', 'Prompt (tok/s)': '2,180' },
          { 'Taille et carte': 'Q2_0, RX 9070 XT (16 GB)', 'Réponses (tok/s)': '60', 'Prompt (tok/s)': '1,160' },
        ],
        note: 'Source : les tableaux « How fast is it? » du README, mesurés par le projet sur un Ryzen 5 7600 avec 64 GB de RAM (RTX 5070) et un Ryzen 9 3900X avec 47 GB de RAM (RX 9070 XT). Le README ajoute que Strata lit en entier le premier message d’une discussion, à raison d’environ une minute pour 30 000 tokens, et que les messages suivants démarrent en quelques secondes.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Les notes de sécurité de Strata indiquent que les discussions, prompts, fichiers, images et modèles restent sur votre PC, qu’il n’y a ni télémétrie ni compte, et que démarrer ou exécuter un modèle ne télécharge jamais rien.** Elles ajoutent qu’une fois un modèle téléchargé, Strata fonctionne sans internet, et que le serveur n’écoute que sur votre PC, sauf si vous donnez accès à d’autres appareils avec une clé d’API.',
          'Selon les mêmes notes, internet n’est utilisé que sur votre demande : téléchargements de modèles, de moteurs et de mises à jour de l’application depuis Hugging Face et GitHub Releases, recherche web de l’agent (DuckDuckGo, avec Bing comme seconde source) et pages web, services de modèles externes que vous ajoutez, et un tunnel Cloudflare si vous l’activez. La recherche web envoie les mots recherchés hors de votre PC.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Les notes disent venir de la lecture du code de cette version, mais ce sont des déclarations du mainteneur. PromptQuorum n’a audité ni le code ni le trafic réseau.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Les propriétaires d’un PC de jeu récent ou d’un Mac à grande mémoire** qui veulent un très grand modèle ouvert sans louer de serveur.',
          '**Les développeurs qui utilisent Claude Code, Codex CLI ou OpenCode** et veulent un point d’accès local de style OpenAI ou Anthropic.',
          '**Les personnes qui veulent garder leurs discussions sur leur propre machine,** selon les notes de sécurité du projet.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité et vitesse en pratique.** PromptQuorum n’a pas exécuté Strata ; la qualité des réponses, les chiffres de vitesse et l’affirmation d’égaler le modèle complet sont donc ceux du projet.',
          '**Confidentialité et téléchargements.** Les déclarations d’absence de télémétrie, de fonctionnement hors ligne et de mises à jour signées n’ont été vérifiées ni dans le code ni dans le trafic réseau.',
          '**Maturité.** Le dépôt date du 24 septembre 2026 et affichait 697 tickets ouverts le 23 octobre 2026 ; les voies Mac et Intel Arc sont nouvelles dans la 0.2.2, et le projet cite peu de machines testées pour elles.',
          '**Choix de modèles.** Les pages consultées décrivent un seul modèle en plusieurs tailles, plus quelques alternatives nommées, et non une bibliothèque générale de modèles.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Ollama](/fr/power-local-llm/ollama-review)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Installation en une commande et grande bibliothèque de modèles, sans être lié à un seul modèle' },
          { 'Application': '[llama.cpp](/fr/power-local-llm/llama-cpp-explained)', 'Plateformes': 'Windows, macOS, Linux', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Le moteur C++ derrière de nombreux outils, dont des parties de Strata ; d’abord en ligne de commande' },
          { 'Application': '[KoboldCpp](/fr/power-local-llm/koboldcpp-review)', 'Plateformes': 'Windows, Linux, macOS', 'Prix / licence': 'Gratuit / AGPL 3.0', 'Différence clé': 'Surcouche légère de llama.cpp avec interface web intégrée' },
          { 'Application': '[Lucebox](/fr/power-local-llm/lucebox-review)', 'Plateformes': 'Linux', 'Prix / licence': 'Gratuit / Apache-2.0', 'Différence clé': 'Noyaux optimisés à la main et décodage spéculatif pour des GPU grand public précis' },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez prix, licence et plateformes sur la fiche de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Strata fonctionne-t-il sans carte graphique ?',
            a: 'Le README indique que les moteurs CUDA, HIP et SYCL ont besoin d’une carte pour démarrer ; il faut donc un PC doté d’une carte prise en charge. Le moteur Mac peut fonctionner sans carte séparée.',
          },
          {
            q: 'Puis-je utiliser Strata avec Claude Code ?',
            a: 'Selon le README, oui, via l’API de style Anthropic en définissant ANTHROPIC_BASE_URL sur l’adresse locale. Le modèle qui répond est Qwen3.8-Flash-Next, et non un modèle Claude.',
          },
          {
            q: 'Puis-je y accéder depuis mon téléphone ou un autre PC ?',
            a: 'Le README cite `strata launch --access lan`, qui crée une clé d’API par défaut ; `--no-api-key` supprime la clé et affiche un avertissement.',
          },
          {
            q: 'L’installeur Windows est-il sûr à exécuter ?',
            a: 'Le README indique qu’il n’est pas encore signé et que l’installeur Terminal vérifie une empreinte SHA-256. PromptQuorum n’a vérifié aucune de ces deux déclarations.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Strata est une application et un outil Terminal gratuits, sous licence MIT, qui, d’après son README, rendent un modèle ouvert de 125 milliards de paramètres utilisable sur un PC de jeu et l’exposent via des API de style OpenAI et Anthropic ; il a publié trois versions la semaine précédant cette vérification et s’installe d’un double-clic sur Windows, Linux et les Mac Apple Silicon. En contrepartie, toutes les affirmations de vitesse, de qualité et de confidentialité viennent du projet, le dépôt a environ un mois, l’installeur Windows n’est pas signé et l’outil est bâti autour d’un seul modèle plutôt que d’une bibliothèque. Il convient aux personnes disposant d’assez de mémoire cumulée qui veulent ce modèle pour discuter ou pour des agents de code ; celles qui veulent de nombreux modèles et un historique plus long peuvent comparer [Ollama](/fr/power-local-llm/ollama-review) ou [llama.cpp](/fr/power-local-llm/llama-cpp-explained).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Strata sur GitHub](https://github.com/Niko1221/Strata) — README, licence MIT, prérequis, options d’installation, tableaux de vitesse et crédits, consultés le 23 octobre 2026.',
          '[Version Strata v0.2.2](https://github.com/Niko1221/Strata/releases/tag/v0.2.2) — date de publication, notes de version et liste des fichiers d’installation.',
          '[Notes de sécurité de Strata](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md) et [guide Mac](https://github.com/Niko1221/Strata/blob/main/docs/MAC.md) — traitement des données, connexions sortantes et limites sur Mac.',
          '[Qwen3.8-Flash-Next sur Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — la page du modèle vers laquelle renvoie le README.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test d’Ollama](/fr/power-local-llm/ollama-review) — un environnement local en une commande avec une grande bibliothèque de modèles.',
          '[llama.cpp expliqué](/fr/power-local-llm/llama-cpp-explained) — le moteur d’inférence C++ derrière de nombreux outils locaux.',
          '[Test de KoboldCpp](/fr/power-local-llm/koboldcpp-review) — une surcouche de llama.cpp en un seul fichier avec interface web intégrée.',
          '[Test de Lucebox](/fr/power-local-llm/lucebox-review) — inférence locale optimisée à la main pour des GPU grand public précis.',
          '[Exécuter et servir des LLM locaux : comparatif](/fr/power-local-llm/local-llm-run-serve-compared) — le comparatif de catégorie des environnements d’exécution et serveurs.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Overview & Reference',
    heroImage: '/images/strata-review-hero-ja.webp',
    title: 'Strataレビュー：ゲーミングPCで動く125Bパラメータのオープンモデル',
    seoTitle: 'Strataレビュー：ゲーミングPCで125Bモデルを動かす',
    intro:
      'Strataは、READMEによれば、グラフィックスメモリ、RAM、SSDで処理を分担することで、1250億パラメータのオープンモデルQwen3.8-Flash-NextをゲーミングPCで動かす、MITライセンスのエンジン兼デスクトップアプリ兼Terminalツールです。本レビューは、2026年10月23日に確認したプロジェクトのREADME、安全に関する注意書き、v0.2.2のリリースページに基づきます。',
    metaDescription:
      'Strataのレビュー：125BのオープンモデルをゲーミングPCで動かす無料のMITライセンス製アプリ。必要環境、インストーラー、ローカルAPI、未確認の点を解説します。',
    twitterDescription:
      'Strataのレビュー：125BのオープンモデルをゲーミングPCで動かすMITライセンスのアプリ。OpenAI・Anthropic型のローカルAPI付き。必要環境、主張、未確認の点を解説します。',
    audience:
      'ゲーミングPCまたは大容量メモリのMacをお持ちで、Strataに必要な環境、費用、インストール方法、そして速度やプライバシーに関する主張のうち情報源で確認できない点を知りたい方。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Strata レビュー',
    targetKeywords: [
      'strata レビュー',
      '125b モデル ゲーミングPC 動かす',
      'qwen3.8-flash-next ローカル',
      'strata 推論エンジン',
      'ローカル openai互換 api',
      'strata ollama 比較',
    ],
    current_hardware_mentioned: ['NVIDIA RTX GPU', 'AMD Radeon GPU', 'Intel Arc GPU', 'Mac with Apple Silicon', 'Ryzen AI Max'],
    leadAnswerBlock:
      '**Strata（バージョン0.2.2、2026年10月21日公開）は、READMEによれば、1250億パラメータのオープンモデルを一般的なゲーミングPCで動かし、ローカルAPI経由で他のプログラムに提供する、無料のMITライセンスのアプリ兼Terminalツールです。** 本レビューにある速度、品質、プライバシーに関する記述はすべてプロジェクト側のものであり、PromptQuorumはインストールもテストも行っていません。',
    quickAnswerTop: {
      ja: {
        question: 'Strataを動かすには何が必要ですか？',
        answer:
          'READMEによれば、RAMとグラフィックスメモリの合計で32 GB以上、約80 GBの空きディスク、対応するグラフィックスカードまたはApple Silicon搭載Macが必要です。アプリ自体は無料です。',
        bullets: [
          'NVIDIA RTX 20〜50シリーズ、AMD Radeon RX 6800以降、Intel Arc、Apple Silicon搭載Macに対応しています。',
          'Claude Code、Codex CLI、OpenCodeなどのツール向けに、OpenAI互換とAnthropic互換のAPIを提供します。',
          '画像を読み取れます。対応するモデルでは、画像リーダーが初期状態でオンです。',
          'ダブルクリックで入れるアプリか、Terminalの1行コマンドでインストールできます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Strataとは', anchor: 'what-is-strata' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '必要な環境', anchor: 'requirements' },
      { label: '料金', anchor: 'pricing' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'メモリ別のモデルサイズ', anchor: 'model-sizes' },
      { label: '速度：プロジェクトの数値', anchor: 'speed' },
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
            text: 'Strataは、1250億パラメータのオープンモデル1つをゲーミングPCで動かす、MITライセンスのエンジン兼デスクトップアプリです。',
          },
          {
            type: 'plain-terms',
            text: 'モデルをグラフィックスカード、RAM、SSDに分散して配置し、チャット画面や、他のツールから呼び出せるローカルAPIで応答します。',
          },
        ],
        items: [
          '保守状況：リポジトリは2026年9月24日に作成され、0.2.0-beta、0.2.1、0.2.2が2026年10月19日から21日にかけて公開されています。活発ですが、まだ1か月ほどで、放置プロジェクトの警告は該当しません。',
          'ライセンス：Strata本体はMITで、各モデルファイルには個別のライセンスが付いています。',
          '費用：無料でアカウントも不要で、支援は任意です。',
          'インストーラー：READMEによれば、Windows用インストーラーにはまだコード署名がありません。',
          '根拠：2026年10月23日に読んだREADME、安全に関する注意書き、リリースページで、実機での検証は行っていません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはStrataのインストール、テスト、ベンチマークを行っていません。以下の速度、品質、プライバシーに関する記述はプロジェクト自身のものです。',
          },
        ],
      },
      overview: {
        id: 'what-is-strata',
        title: 'Strataとは',
        content: [
          '**Strataは、1つのモデル、Qwen3.8-Flash-Nextを中心に作られた推論エンジン、デスクトップアプリ、Terminalクライアントです。READMEはこのモデルを、通常はサーバーが必要な1250億パラメータのモデルと説明しています。** このモデルはQwenチームが[Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)で公開しており、GitHubアカウントNiko1221が公開するStrataが、それを一般向けのハードウェアで動かします。',
          'READMEは、その仕組みを図書館にたとえて説明しています。モデルは2万4576人の小さな専門家（「エキスパート」）のチームで、1語ごとに使うのはそのうち10人だけです。グラフィックスカードがよく使うエキスパートを持ち、RAMがすべてを持ち、SSDが29 GBの索引表を持ちます。さらに小さな補助モデルが次の数語を予測し、大きなモデルが1回の処理でそれを検証します。プロジェクトによれば、これで同じ答えが1.6〜1.8倍速く得られます。エンジンには[llama.cpp](https://github.com/ggml-org/llama.cpp)の一部が使われており、コードは[Niko1221/Strata](https://github.com/Niko1221/Strata)にあります。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Strataは、GitHubのReleasesページから、システムとグラフィックスカードごとのインストーラーをダウンロードします。**',
        ],
        columns: ['システムとカード', 'ダウンロード'],
        rows: [
          { 'システムとカード': 'Windows、NVIDIA（ドライバー580以降）', 'ダウンロード': '[windows-cuda13.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda13.exe)' },
          { 'システムとカード': 'Windows、旧世代のNVIDIAまたはドライバー', 'ダウンロード': '[windows-cuda12.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda12.exe)' },
          { 'システムとカード': 'Windows、AMD RX 9000 / R9700', 'ダウンロード': '[windows-hip.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip.exe)' },
          { 'システムとカード': 'Windows、AMD RX 7000 / Strix Halo', 'ダウンロード': '[windows-hip-rdna3.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip-rdna3.exe)' },
          { 'システムとカード': 'Linux、NVIDIA（ドライバー580以降）', 'ダウンロード': '[linux-nvidia-cuda13.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda13.AppImage)' },
          { 'システムとカード': 'Linux、旧世代のNVIDIAまたはドライバー', 'ダウンロード': '[linux-nvidia-cuda12.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda12.AppImage)' },
          { 'システムとカード': 'Linux、AMD RX 9000 / R9700', 'ダウンロード': '[linux-amd-rx9070.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx9070.AppImage)' },
          { 'システムとカード': 'Linux、AMD RX 7000', 'ダウンロード': '[linux-amd-rx7900.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx7900.AppImage)' },
          { 'システムとカード': 'Linux、Strix Halo', 'ダウンロード': '[linux-amd-strixhalo.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-strixhalo.AppImage)' },
          { 'システムとカード': 'Mac、Apple Silicon（macOS 15以降）', 'ダウンロード': '[mac.dmg](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-mac.dmg)' },
          { 'システムとカード': 'Terminal、LinuxとMac', 'ダウンロード': '[install.sh](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.sh)（READMEの1行コマンド）' },
          { 'システムとカード': 'Terminal、Windows', 'ダウンロード': '[install.ps1](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.ps1)（READMEの1行コマンド）' },
          { 'システムとカード': 'ソースコード', 'ダウンロード': '[github.com/Niko1221/Strata](https://github.com/Niko1221/Strata)' },
          { 'システムとカード': '安全とプライバシーの注意書き', 'ダウンロード': '[docs/SAFETY.md](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)' },
        ],
        note: '確認したバージョン：0.2.2（エンジン0.1.47）。GitHubのリリースページによれば2026年10月21日公開で、確認時点での最新の上流アップデートです。独立した製品サイトは見つかりませんでした。リポジトリのホームページ欄とメンテナーのプロフィールのリンクは空で、Web検索で見つかったのはリポジトリとサードパーティの解説記事だけです。READMEによれば、Windows用インストーラーにはコード署名がないため、Windowsに「Windows によってPCが保護されました」と表示されることがあり、LinuxのAppImageにはFUSE 2が必要です。RX 6000シリーズ用の専用インストーラーはなく、READMEはそのエンジンを実際のRX 6000カードではまだテストしていないとしています。',
      },
      requirements: {
        id: 'requirements',
        title: '必要な環境',
        content: [
          '**Strataには、RAMとグラフィックスメモリ（VRAM）の合計で32 GB以上、約80 GBの空きディスク、最新のグラフィックスドライバー、そしてWindows 10/11、Linux、またはmacOS 15以降が必要です。** MacやRyzen AI Maxでは、ユニファイドメモリがその両方として数えられます。',
        ],
        columns: ['PC', 'READMEの対応状況'],
        rows: [
          { 'PC': 'NVIDIA', 'READMEの対応状況': 'GeForce RTX 20、30、40、50シリーズ、12 GB以上' },
          { 'PC': 'AMD', 'READMEの対応状況': 'Radeon RX 6800以降、Radeon AI PRO R9700、12 GB以上' },
          { 'PC': 'Intel', 'READMEの対応状況': 'Arcカード。最小モデルはArc A750（Linux）のみでテスト済み' },
          { 'PC': 'Apple Silicon', 'READMEの対応状況': 'M1以降、macOS 15以降。Intel Macでは動作不可' },
          { 'PC': 'Ryzen AI Max (Strix Halo)', 'READMEの対応状況': 'ユニファイドメモリ搭載機。WindowsとLinux用に専用インストーラー' },
        ],
        note: 'READMEによれば、同じメーカーのカード2〜3枚でモデルを共有できますが、StrataがモデルをNVIDIAとAMDのカードにまたがって分割することはありません。旧世代のカードやプロセッサー向けには、リポジトリに試験的な専用ページがあります。',
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**Strataは無料です。READMEには、MITライセンスで、アカウントもクラウドも不要と記載されています。**',
        ],
        columns: ['項目', '費用（USD）'],
        rows: [
          { '項目': 'アプリ、Terminal、エンジン', '費用（USD）': '$0（MITライセンス）' },
          { '項目': 'モデルファイル', '費用（USD）': '価格の記載なし。個別のライセンスが適用' },
          { '項目': 'プロジェクトを支援する', '費用（USD）': '任意。[Buy Me a Coffee](https://buymeacoffee.com/strataengine)から' },
        ],
        note: '2026年10月23日にREADMEで確認しました。READMEはスポンサーに対し、メンテナーの[GitHubプロフィール](https://github.com/Niko1221)から連絡するよう案内もしています。実質的な負担はモデルのダウンロードで、READMEによれば約40〜70 GBです。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**以下の手順はREADMEの「Option A: the Strata app」に沿ったもので、PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: 'お使いのPCを必要な環境と照らし合わせる',
            whyItMatters: 'ダウンロードの前に、メモリ、空きディスク、グラフィックスカードを上の表と照らし合わせて確認します。',
          },
          {
            title: 'お使いのシステムとカード用のインストーラーをダウンロードする',
            whyItMatters: '「入手方法」の表から合うファイルを選びます。Terminalを使う場合は、代わりに1行のスクリプトを実行し、`strata launch`でStrataを起動できます。',
          },
          {
            title: 'インストールして、アプリにPCを読み取らせる',
            whyItMatters: '最初の画面に収まるモデルが推奨されるので、インストールを押します。モデルのダウンロードは大きく、中断しても途中から再開されます。',
          },
          {
            title: '初回のロードを待つ',
            whyItMatters: 'READMEによれば、モデルがRAMに読み込まれる間、PCが1〜3分ほど遅くなったり応答しなくなったりすることがあり、初回が最も長くなります。ウィンドウは閉じないでください。',
          },
          {
            title: 'チャットするか、他のツールを接続する',
            whyItMatters: 'アプリのChatページを使うか、`strata connect`を実行して、OpenCode、Codex CLI、Claude Codeなどの設定を表示します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて、READMEまたはプロジェクトのドキュメントに基づきます。**',
        ],
        items: [
          '**ローカルAPI。** サーバーは、OpenAI互換API、同じポートのAnthropic型API、Codex CLI用のOpenAI Responses APIを提供します。`strata connect`は、OpenCode、Codex CLI、Claude Code、oh-my-pi、pi、Hermes Agent、OpenClawの設定を表示します。',
          '**画像。** 画像を読み取れるモデルでは、画像入力が初期状態でオンです。グラフィックスカードが24 GB未満の場合、リーダーはプロセッサー上で動作します。',
          '**チャットアプリ。** アプリには、Chat、モデル・GPU・CPU・RAMのMonitor、Modelsページ、Settingsがあります。Manualモードでは、ファイルを変更したりコマンドを実行したりする前にチャットが確認を求めます。',
          '**複数のカード。** 各グラフィックスカードをMain、Helper、Offに設定でき、思考レベル（off、low、medium、high）をチャットごとに選べます。',
          '**MCP。** AIツールは、StrataのMCPサーバーを通じてStrataのインストール、起動、停止を行えます。',
          '**Terminal。** `strata launch`は、モデル、コンテキスト、画像、アクセスを1つずつ質問します。フラグを使うと、スクリプトやAIエージェントが確認なしで実行できます。',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'メモリ別のモデルサイズ',
        content: [
          '**Strataは1つのモデルを、圧縮度の異なる複数のサイズで提供します。READMEによれば、小さいサイズほど高速で、大きいサイズほど少し賢くなります。**',
        ],
        columns: ['メモリ（RAM + VRAM）', 'READMEの推奨サイズ'],
        rows: [
          { 'メモリ（RAM + VRAM）': '32 GB', 'READMEの推奨サイズ': 'Gyro-S、コード向けならCoder' },
          { 'メモリ（RAM + VRAM）': '40 GB', 'READMEの推奨サイズ': 'Swift 1.5 IQ2_XS、またはGyro-M' },
          { 'メモリ（RAM + VRAM）': '48 GB', 'READMEの推奨サイズ': 'IQ3_XXS：より低速、より高品質' },
          { 'メモリ（RAM + VRAM）': '64 GB', 'READMEの推奨サイズ': 'IQ3_S：最も低速、最高品質' },
          { 'メモリ（RAM + VRAM）': '96 GB以上', 'READMEの推奨サイズ': 'Unsloth UD-IQ4_XSからQ8_0まで' },
        ],
        note: 'READMEでは、RAMとVRAMの合計からシステム用の5 GBを引いた量で数えます。Gyro-Sは、58.5 GBのダウンロードに対しそのメモリが27.6 GB必要で、READMEによれば品質はIQ2_XSより低くなります。Gyro-Mは、92 GBのダウンロードに対して35 GB必要です。READMEは、公開されたテストでIQ3_Sがフルモデルに並ぶとしていますが、PromptQuorumはそのテストを確認していません。',
      },
      speed: {
        id: 'speed',
        title: '速度：プロジェクトの数値',
        content: [
          '**READMEは、RTX 5070で最速サイズが毎秒94トークン、IQ3_Sが53トークンと報告しています。PromptQuorumはどの数値も再現していません。** 1トークンは、おおよそ単語の4分の3に相当します。',
        ],
        columns: ['サイズとカード', '回答（tok/s）', 'プロンプト（tok/s）'],
        rows: [
          { 'サイズとカード': 'Q2_0、RTX 5070（12 GB）', '回答（tok/s）': '94', 'プロンプト（tok/s）': '2,650' },
          { 'サイズとカード': 'IQ3_S、RTX 5070（12 GB）', '回答（tok/s）': '53', 'プロンプト（tok/s）': '1,620' },
          { 'サイズとカード': 'Coder、RTX 5070（12 GB）', '回答（tok/s）': '55', 'プロンプト（tok/s）': '2,180' },
          { 'サイズとカード': 'Q2_0、RX 9070 XT（16 GB）', '回答（tok/s）': '60', 'プロンプト（tok/s）': '1,160' },
        ],
        note: '出典：READMEの「How fast is it?」の表で、プロジェクトがRyzen 5 7600とRAM 64 GB（RTX 5070）、およびRyzen 9 3900XとRAM 47 GB（RX 9070 XT）で測定したものです。READMEはさらに、Strataはチャットの最初のメッセージを全文読み込み、30,000トークンあたり約1分かかるが、以降のメッセージは数秒で始まると述べています。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**Strataの安全に関する注意書きによれば、チャット、プロンプト、ファイル、画像、モデルはPC上に残り、テレメトリもアカウントもなく、モデルの起動や実行でダウンロードが行われることはありません。** さらに、モデルをダウンロードしたあとはインターネットなしで動作し、他のデバイスにAPIキー付きでアクセスを許可しない限り、サーバーはそのPCからの接続だけを受け付けるとされています。',
          '同じ注意書きによれば、インターネットが使われるのは求めたときだけです。具体的には、Hugging FaceとGitHub Releasesからのモデル、エンジン、アプリ更新のダウンロード、エージェントのWeb検索（DuckDuckGoで、2番目の情報源はBing）とWebページの取得、追加したモデルサービス、オンにした場合のCloudflareトンネルです。Web検索では、検索語がPCの外へ送信されます。',
        ],
        callouts: [
          {
            type: 'note',
            text: '注意書きは、このバージョンのコードを読んだ上で書かれたとしていますが、メンテナー自身の説明です。PromptQuorumはコードもネットワーク通信も監査していません。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**最近のゲーミングPCや大容量メモリのMacをお持ちで、** サーバーを借りずに非常に大きなオープンモデルを1つ使いたい人。',
          '**Claude Code、Codex CLI、OpenCodeを使っていて、** ローカルのOpenAI型またはAnthropic型のエンドポイントが欲しい開発者。',
          '**チャットを自分のマシンに残したい人。** プロジェクトの安全に関する注意書きによります。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の品質と速度。** PromptQuorumはStrataを実行していないため、回答の質、速度の数値、フルモデルに並ぶという主張はプロジェクト側のものです。',
          '**プライバシーとダウンロードの検証。** テレメトリなし、オフライン動作、署名付き更新という説明は、コードやネットワーク通信と照合していません。',
          '**成熟度。** リポジトリは2026年9月24日に作られ、2026年10月23日時点で未解決のIssueが697件ありました。MacとIntel Arcの対応は0.2.2で加わったばかりで、プロジェクトがテスト済みとして挙げるマシンはわずかです。',
          '**モデルの選択肢。** 確認したページに書かれているのは、複数のサイズで提供される1つのモデルといくつかの名前付きの代替だけで、汎用のモデルライブラリではありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Ollama](/ja/power-local-llm/ollama-review)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': '1コマンドでインストールでき、モデルライブラリが豊富。特定の1モデルに縛られない' },
          { 'アプリ': '[llama.cpp](/ja/power-local-llm/llama-cpp-explained)', '対応プラットフォーム': 'Windows、macOS、Linux', '価格／ライセンス': '無料／MIT', '主な違い': '多くのツールの土台となるC++エンジンで、Strataの一部にも使用。コマンドライン中心' },
          { 'アプリ': '[KoboldCpp](/ja/power-local-llm/koboldcpp-review)', '対応プラットフォーム': 'Windows、Linux、macOS', '価格／ライセンス': '無料／AGPL 3.0', '主な違い': 'Web UI内蔵の軽量なllama.cppラッパー' },
          { 'アプリ': '[Lucebox](/ja/power-local-llm/lucebox-review)', '対応プラットフォーム': 'Linux', '価格／ライセンス': '無料／Apache-2.0', '主な違い': '特定の一般向けGPU向けに手作業で調整したカーネルと投機的デコーディング' },
        ],
        note: '競合の情報は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリの掲載ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Strataはグラフィックスカードなしで動きますか？',
            a: 'READMEによれば、CUDA、HIP、SYCLのエンジンは起動にカードが必要なため、PCには対応するカードが必要です。Mac用エンジンは、別途カードがなくても動作します。',
          },
          {
            q: 'StrataをClaude Codeと使えますか？',
            a: 'READMEによれば、ANTHROPIC_BASE_URLをローカルのアドレスに設定すれば、Anthropic型APIを通じて使えます。応答するモデルはQwen3.8-Flash-Nextで、Claudeのモデルではありません。',
          },
          {
            q: 'スマートフォンや別のPCからアクセスできますか？',
            a: 'READMEは`strata launch --access lan`を挙げており、これは既定でAPIキーを作成します。`--no-api-key`を付けるとキーを省略でき、その際は警告が表示されます。',
          },
          {
            q: 'Windows用インストーラーは安全に実行できますか？',
            a: 'READMEによれば、コード署名はまだなく、Terminal用インストーラーはSHA-256ハッシュを確認します。PromptQuorumは、どちらの説明も検証していません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Strataは、READMEによれば、1250億パラメータのオープンモデルをゲーミングPCで実用的に動かし、OpenAI型とAnthropic型のAPIで提供する、無料のMITライセンスのアプリ兼Terminalツールです。今回の確認の前の1週間に3回リリースされ、Windows、Linux、Apple Silicon搭載Macでダブルクリックでインストールできます。一方で、速度、品質、プライバシーに関する記述はすべてプロジェクト側のものであり、リポジトリはまだ1か月ほどで、Windows用インストーラーにはコード署名がなく、モデルライブラリではなく1つのモデルを中心に作られています。十分な合計メモリがあり、そのモデルをチャットやコーディングエージェントで使いたい人に向きます。多くのモデルや長い実績を求める場合は、[Ollama](/ja/power-local-llm/ollama-review)や[llama.cpp](/ja/power-local-llm/llama-cpp-explained)と比べてみてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[GitHubのStrata](https://github.com/Niko1221/Strata)：README、MITライセンス、必要環境、インストール方法、速度の表、クレジット。2026年10月23日確認。',
          '[Strata v0.2.2リリース](https://github.com/Niko1221/Strata/releases/tag/v0.2.2)：公開日、リリースノート、インストーラーのファイル一覧。',
          '[Strataの安全に関する注意書き](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)と[Macガイド](https://github.com/Niko1221/Strata/blob/main/docs/MAC.md)：データの扱い、外部への接続、Macでの制限。',
          '[Hugging FaceのQwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)：READMEがリンクしているモデルのページ。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Ollamaレビュー](/ja/power-local-llm/ollama-review)：1コマンドで使え、モデルライブラリが豊富なローカルランタイム。',
          '[llama.cpp解説](/ja/power-local-llm/llama-cpp-explained)：多くのローカルツールの土台となるC++推論エンジン。',
          '[KoboldCppレビュー](/ja/power-local-llm/koboldcpp-review)：Web UI内蔵の、単一ファイルのllama.cppラッパー。',
          '[Luceboxレビュー](/ja/power-local-llm/lucebox-review)：特定の一般向けGPU向けに手作業で調整したローカル推論。',
          '[ローカルLLMの実行・サーブ環境比較](/ja/power-local-llm/local-llm-run-serve-compared)：ランタイムとサーバーのカテゴリ比較。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Overview & Reference',
    heroImage: '/images/strata-review-hero-pt.webp',
    title: 'Análise do Strata: um modelo aberto de 125B parâmetros em um PC gamer',
    seoTitle: 'Análise do Strata: modelo aberto de 125B em um PC gamer',
    intro:
      'O Strata é um mecanismo, aplicativo de desktop e ferramenta de Terminal com licença MIT que, segundo o README, executa o Qwen3.8-Flash-Next, um modelo aberto de 125 bilhões de parâmetros, em um PC gamer, dividindo o trabalho entre a memória da placa de vídeo, a RAM e o SSD. Esta análise reflete o README, as notas de segurança e a página da versão 0.2.2 do projeto, conforme verificados em 23 de outubro de 2026.',
    metaDescription:
      'Análise do Strata: app gratuito com licença MIT que roda um modelo aberto de 125B em PC gamer. Requisitos, instaladores, API local e dúvidas em aberto.',
    twitterDescription:
      'Análise do Strata: app MIT que roda um modelo aberto de 125B em PC gamer, com APIs locais no estilo OpenAI e Anthropic. Requisitos e dúvidas.',
    audience:
      'Pessoas com um PC gamer ou um Mac com bastante memória que querem saber o que o Strata exige, quanto custa, como é instalado e quais afirmações de velocidade e privacidade as fontes deixam sem confirmação.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Strata',
    targetKeywords: [
      'análise strata',
      'rodar modelo 125b em pc gamer',
      'qwen3.8-flash-next local',
      'mecanismo de inferência strata',
      'api local compatível com openai',
      'strata vs ollama',
    ],
    current_hardware_mentioned: ['NVIDIA RTX GPU', 'AMD Radeon GPU', 'Intel Arc GPU', 'Mac with Apple Silicon', 'Ryzen AI Max'],
    leadAnswerBlock:
      '**O Strata (versão 0.2.2, lançada em 21 de outubro de 2026) é um aplicativo e uma ferramenta de Terminal gratuitos, com licença MIT, que, segundo o README, executam um modelo aberto de 125 bilhões de parâmetros em um PC gamer comum e o disponibilizam aos seus outros programas por uma API local.** Toda afirmação de velocidade, qualidade e privacidade desta análise vem do projeto; a PromptQuorum não instalou nem testou o Strata.',
    quickAnswerTop: {
      pt: {
        question: 'O que preciso para executar o Strata?',
        answer:
          'No mínimo 32 GB somados de RAM e memória de vídeo, cerca de 80 GB de disco livre e uma placa de vídeo compatível ou um Mac com Apple Silicon, segundo o README. O aplicativo em si não custa nada.',
        bullets: [
          'Aceita placas NVIDIA RTX das séries 20 a 50, AMD Radeon RX 6800 e mais novas, Intel Arc e Macs com Apple Silicon.',
          'Oferece uma API compatível com a OpenAI e outra compatível com a Anthropic para ferramentas como Claude Code, Codex CLI e OpenCode.',
          'Lê imagens; o leitor de imagens vem ativado por padrão nos modelos que o aceitam.',
          'Instala com um aplicativo de duplo clique ou com um comando de uma linha no Terminal.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Strata?', anchor: 'what-is-strata' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'O que você precisa', anchor: 'requirements' },
      { label: 'Preços', anchor: 'pricing' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Tamanhos de modelo por memória', anchor: 'model-sizes' },
      { label: 'Velocidade: os números do projeto', anchor: 'speed' },
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
            text: 'O Strata é um mecanismo e aplicativo de desktop com licença MIT que executa um único modelo aberto de 125 bilhões de parâmetros em um PC gamer.',
          },
          {
            type: 'plain-terms',
            text: 'Ele distribui o modelo entre a placa de vídeo, a RAM e o SSD e responde em uma janela de chat ou por uma API local que outras ferramentas podem chamar.',
          },
        ],
        items: [
          'Manutenção: o repositório foi criado em 24 de setembro de 2026 e as versões 0.2.0-beta, 0.2.1 e 0.2.2 apareceram entre 19 e 21 de outubro de 2026; portanto, o projeto está ativo, mas tem só um mês, e não se aplica aviso de projeto abandonado.',
          'Licença: MIT para o próprio Strata; cada arquivo de modelo traz a sua licença.',
          'Custo: gratuito, sem conta; o apoio é voluntário.',
          'Instaladores: o instalador do Windows ainda não tem assinatura de código, segundo o README.',
          'Base: o README, as notas de segurança e a página de versões, lidos em 23 de outubro de 2026, sem testes na prática.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não instalou, testou nem mediu o Strata. As afirmações de velocidade, qualidade e privacidade abaixo são do próprio projeto.',
          },
        ],
      },
      overview: {
        id: 'what-is-strata',
        title: 'O que é o Strata?',
        content: [
          '**O Strata é um mecanismo de inferência, um aplicativo de desktop e um cliente de Terminal construídos em torno de um único modelo, o Qwen3.8-Flash-Next, que o README descreve como um modelo de 125 bilhões de parâmetros que normalmente exige um servidor.** A equipe do Qwen publica o modelo no [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next); o Strata, publicado na conta do GitHub Niko1221, o executa em hardware de consumo.',
          'O README explica o truque com uma biblioteca: o modelo é uma equipe de 24,576 pequenos especialistas ("experts") e cada palavra usa apenas 10 deles. A placa de vídeo guarda os especialistas mais usados, a RAM guarda todos e o SSD guarda uma tabela de consulta de 29 GB. Um pequeno auxiliar também adivinha as próximas palavras, que o modelo grande confere de uma só vez; o projeto diz que isso devolve a mesma resposta de 1.6 a 1.8 vez mais rápido. O mecanismo usa partes do [llama.cpp](https://github.com/ggml-org/llama.cpp), e o código está em [Niko1221/Strata](https://github.com/Niko1221/Strata).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Strata é baixado na página de versões (Releases) do GitHub, com um instalador para cada sistema e placa de vídeo.**',
        ],
        columns: ['Sistema e placa', 'Download'],
        rows: [
          { 'Sistema e placa': 'Windows, NVIDIA (driver 580+)', 'Download': '[windows-cuda13.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda13.exe)' },
          { 'Sistema e placa': 'Windows, NVIDIA/driver antigo', 'Download': '[windows-cuda12.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda12.exe)' },
          { 'Sistema e placa': 'Windows, AMD RX 9000 / R9700', 'Download': '[windows-hip.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip.exe)' },
          { 'Sistema e placa': 'Windows, AMD RX 7000 / Strix Halo', 'Download': '[windows-hip-rdna3.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip-rdna3.exe)' },
          { 'Sistema e placa': 'Linux, NVIDIA (driver 580+)', 'Download': '[linux-nvidia-cuda13.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda13.AppImage)' },
          { 'Sistema e placa': 'Linux, NVIDIA/driver antigo', 'Download': '[linux-nvidia-cuda12.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda12.AppImage)' },
          { 'Sistema e placa': 'Linux, AMD RX 9000 / R9700', 'Download': '[linux-amd-rx9070.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx9070.AppImage)' },
          { 'Sistema e placa': 'Linux, AMD RX 7000', 'Download': '[linux-amd-rx7900.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx7900.AppImage)' },
          { 'Sistema e placa': 'Linux, Strix Halo', 'Download': '[linux-amd-strixhalo.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-strixhalo.AppImage)' },
          { 'Sistema e placa': 'Mac, Apple Silicon (macOS 15+)', 'Download': '[mac.dmg](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-mac.dmg)' },
          { 'Sistema e placa': 'Terminal, Linux e Mac', 'Download': '[install.sh](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.sh) (uma linha do README)' },
          { 'Sistema e placa': 'Terminal, Windows', 'Download': '[install.ps1](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.ps1) (uma linha do README)' },
          { 'Sistema e placa': 'Código-fonte', 'Download': '[github.com/Niko1221/Strata](https://github.com/Niko1221/Strata)' },
          { 'Sistema e placa': 'Notas de segurança e privacidade', 'Download': '[docs/SAFETY.md](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)' },
        ],
        note: 'Versão analisada: 0.2.2 (mecanismo 0.1.47), publicada em 21 de outubro de 2026 segundo a página de versões do GitHub, que é a atualização mais recente do projeto no momento da verificação. Não foi encontrado um site de produto separado: o campo de página inicial do repositório e o link do perfil do mantenedor estão vazios, e uma busca na web só achou o repositório e textos de terceiros. O README diz que o instalador do Windows não tem assinatura de código, então o Windows pode exibir "O Windows protegeu seu PC", e os AppImages do Linux precisam do FUSE 2. As placas RX 6000 não têm instalador próprio, e o README diz que esse mecanismo ainda não foi testado em uma RX 6000 real.',
      },
      requirements: {
        id: 'requirements',
        title: 'O que você precisa',
        content: [
          '**O Strata exige no mínimo 32 GB somados de RAM e memória de vídeo (VRAM), cerca de 80 GB de disco livre, um driver de vídeo atual e Windows 10/11, Linux ou macOS 15 ou mais novo.** Em um Mac ou em um Ryzen AI Max, a memória unificada conta para os dois.',
        ],
        columns: ['Computador', 'Suporte segundo o README'],
        rows: [
          { 'Computador': 'NVIDIA', 'Suporte segundo o README': 'GeForce RTX séries 20, 30, 40, 50, com 12 GB ou mais' },
          { 'Computador': 'AMD', 'Suporte segundo o README': 'Radeon RX 6800 e mais novas, Radeon AI PRO R9700, com 12 GB ou mais' },
          { 'Computador': 'Intel', 'Suporte segundo o README': 'Placas Arc; o menor modelo foi testado só em uma Arc A750 (Linux)' },
          { 'Computador': 'Apple Silicon', 'Suporte segundo o README': 'M1 ou mais novo, macOS 15 ou mais novo; Macs Intel não conseguem executá-lo' },
          { 'Computador': 'Ryzen AI Max (Strix Halo)', 'Suporte segundo o README': 'Sistemas de memória unificada, com instaladores próprios para Windows e Linux' },
        ],
        note: 'Segundo o README, duas ou três placas da mesma marca podem dividir um modelo; o Strata nunca divide um modelo entre placas NVIDIA e AMD. Placas e processadores mais antigos têm páginas experimentais separadas no repositório.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços',
        content: [
          '**O Strata é gratuito: o README informa licença MIT, sem conta e sem nuvem.**',
        ],
        columns: ['Item', 'Custo (USD)'],
        rows: [
          { 'Item': 'App, Terminal e mecanismo', 'Custo (USD)': '$0 (licença MIT)' },
          { 'Item': 'Arquivos de modelo', 'Custo (USD)': 'Sem preço listado; valem licenças próprias' },
          { 'Item': 'Apoiar o projeto', 'Custo (USD)': 'Opcional, via [Buy Me a Coffee](https://buymeacoffee.com/strataengine)' },
        ],
        note: 'Lido no README em 23 de outubro de 2026. Ele também convida patrocinadores a entrar em contato pelo [perfil no GitHub](https://github.com/Niko1221) do mantenedor. O custo real é o download do modelo: cerca de 40 a 70 GB, segundo o README.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem a "Opção A: o app Strata" do README; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Compare o seu PC com os requisitos',
            whyItMatters: 'Confira memória, disco livre e placa de vídeo com a tabela acima antes de baixar.',
          },
          {
            title: 'Baixe o instalador do seu sistema e da sua placa',
            whyItMatters: 'Escolha o arquivo correspondente na tabela Onde obter. Quem usa o Terminal pode executar o script de uma linha e depois iniciar o Strata com `strata launch`.',
          },
          {
            title: 'Instale e deixe o app ler o seu PC',
            whyItMatters: 'A primeira tela recomenda um modelo que cabe no seu PC; pressione instalar. O download do modelo é grande e continua de onde parou se for interrompido.',
          },
          {
            title: 'Aguarde o primeiro carregamento',
            whyItMatters: 'O README diz que o PC pode ficar lento ou parar de responder por 1 a 3 minutos enquanto o modelo é carregado na RAM, e o primeiro carregamento é o mais demorado. Não feche a janela.',
          },
          {
            title: 'Converse ou conecte as suas outras ferramentas',
            whyItMatters: 'Use a página Chat do app ou execute `strata connect` para exibir as configurações de OpenCode, Codex CLI, Claude Code e outros.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem do README ou da documentação do projeto.**',
        ],
        items: [
          '**API local.** O servidor oferece uma API compatível com a OpenAI, uma API no estilo Anthropic na mesma porta e a API OpenAI Responses para o Codex CLI; `strata connect` exibe as configurações de OpenCode, Codex CLI, Claude Code, oh-my-pi, pi, Hermes Agent e OpenClaw.',
          '**Imagens.** A entrada de imagens vem ativada por padrão nos modelos que conseguem lê-las; o leitor roda no processador quando a placa de vídeo tem menos de 24 GB.',
          '**App de chat.** O app tem um Chat, um Monitor de modelo, GPU, CPU e RAM, uma página Models e Settings; no modo Manual, o chat pergunta antes de alterar um arquivo ou executar um comando.',
          '**Várias placas.** Cada placa de vídeo pode ser definida como Main, Helper ou Off, e um nível de raciocínio (desligado, baixo, médio ou alto) pode ser escolhido por chat.',
          '**MCP.** Ferramentas de IA podem instalar, iniciar e parar o Strata pelo servidor MCP dele.',
          '**Terminal.** `strata launch` pergunta modelo, contexto, imagens e acesso, uma pergunta por vez; com flags, scripts e agentes de IA o executam sem perguntas.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Tamanhos de modelo por memória',
        content: [
          '**O Strata traz um único modelo em vários tamanhos compactados; o README diz que os tamanhos menores são mais rápidos e os maiores, um pouco mais inteligentes.**',
        ],
        columns: ['Memória (RAM + VRAM)', 'Tamanho sugerido'],
        rows: [
          { 'Memória (RAM + VRAM)': '32 GB', 'Tamanho sugerido': 'Gyro-S, ou o Coder para código' },
          { 'Memória (RAM + VRAM)': '40 GB', 'Tamanho sugerido': 'Swift 1.5 IQ2_XS, ou Gyro-M' },
          { 'Memória (RAM + VRAM)': '48 GB', 'Tamanho sugerido': 'IQ3_XXS: mais lento, melhor' },
          { 'Memória (RAM + VRAM)': '64 GB', 'Tamanho sugerido': 'IQ3_S: o mais lento, o melhor' },
          { 'Memória (RAM + VRAM)': '96 GB ou mais', 'Tamanho sugerido': 'Unsloth UD-IQ4_XS até Q8_0' },
        ],
        note: 'O README soma RAM e VRAM e desconta 5 GB que o sistema reserva. O Gyro-S precisa de 27.6 GB dessa memória para um download de 58.5 GB e, segundo o README, tem qualidade menor que o IQ2_XS; o Gyro-M precisa de 35 GB para um download de 92 GB. O README diz que o IQ3_S iguala o modelo completo nos testes publicados; a PromptQuorum não conferiu esses testes.',
      },
      speed: {
        id: 'speed',
        title: 'Velocidade: os números do projeto',
        content: [
          '**O README informa 94 tokens por segundo para o tamanho mais rápido e 53 para o IQ3_S em uma RTX 5070; a PromptQuorum não reproduziu nenhum dos números.** Um token equivale a cerca de três quartos de uma palavra.',
        ],
        columns: ['Tamanho e placa', 'Respostas (tok/s)', 'Prompt (tok/s)'],
        rows: [
          { 'Tamanho e placa': 'Q2_0, RTX 5070 (12 GB)', 'Respostas (tok/s)': '94', 'Prompt (tok/s)': '2,650' },
          { 'Tamanho e placa': 'IQ3_S, RTX 5070 (12 GB)', 'Respostas (tok/s)': '53', 'Prompt (tok/s)': '1,620' },
          { 'Tamanho e placa': 'Coder, RTX 5070 (12 GB)', 'Respostas (tok/s)': '55', 'Prompt (tok/s)': '2,180' },
          { 'Tamanho e placa': 'Q2_0, RX 9070 XT (16 GB)', 'Respostas (tok/s)': '60', 'Prompt (tok/s)': '1,160' },
        ],
        note: 'Fonte: as tabelas "How fast is it?" do README, medidas pelo projeto em um Ryzen 5 7600 com 64 GB de RAM (RTX 5070) e em um Ryzen 9 3900X com 47 GB de RAM (RX 9070 XT). O README acrescenta que o Strata lê a primeira mensagem de um chat por inteiro, a cerca de um minuto para cada 30,000 tokens, e que as mensagens seguintes começam em segundos.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**As notas de segurança do Strata dizem que chats, prompts, arquivos, imagens e modelos ficam no seu PC, que não há telemetria nem conta e que iniciar ou executar um modelo nunca baixa nada.** Elas acrescentam que, depois de baixado o modelo, o Strata funciona sem internet e que o servidor escuta apenas o seu PC, a menos que você libere outros dispositivos com uma chave de API.',
          'Segundo as mesmas notas, a internet só é usada quando você pede: downloads de modelo, mecanismo e atualizações do app pelo Hugging Face e pelo GitHub Releases, a busca na web do agente (DuckDuckGo, com o Bing como segunda fonte) e páginas da web, serviços de modelo externos que você adicionar e um túnel Cloudflare, se você o ativar. A busca na web envia as palavras pesquisadas para fora do seu PC.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'As notas dizem que vêm da leitura do código desta versão, mas são declarações do mantenedor. A PromptQuorum não auditou o código nem o tráfego de rede.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Donos de um PC gamer recente ou de um Mac com bastante memória** que querem um modelo aberto muito grande sem alugar um servidor.',
          '**Desenvolvedores que usam Claude Code, Codex CLI ou OpenCode** e querem um endpoint local no estilo OpenAI ou Anthropic.',
          '**Pessoas que querem os chats guardados na própria máquina,** segundo as notas de segurança do projeto.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade e velocidade na prática.** A PromptQuorum não executou o Strata, então a qualidade das respostas, os números de velocidade e a afirmação de igualar o modelo completo são do projeto.',
          '**Verificações de privacidade e de download.** As afirmações de ausência de telemetria, de uso offline e de atualizações assinadas não foram conferidas com o código nem com o tráfego de rede.',
          '**Maturidade.** O repositório é de 24 de setembro de 2026 e mostrava 697 issues abertas em 23 de outubro de 2026; os caminhos para Mac e Intel Arc são novos na 0.2.2, e o projeto cita poucas máquinas testadas para eles.',
          '**Escolha de modelo.** As páginas consultadas descrevem um modelo em vários tamanhos e algumas alternativas citadas, não uma biblioteca geral de modelos.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Ollama](/pt/power-local-llm/ollama-review)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Instalação com um comando e uma grande biblioteca de modelos, sem depender de um único modelo' },
          { 'App': '[llama.cpp](/pt/power-local-llm/llama-cpp-explained)', 'Plataformas': 'Windows, macOS, Linux', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'O mecanismo em C++ por trás de muitas ferramentas, inclusive de partes do Strata; foco na linha de comando' },
          { 'App': '[KoboldCpp](/pt/power-local-llm/koboldcpp-review)', 'Plataformas': 'Windows, Linux, macOS', 'Preço / licença': 'Grátis / AGPL 3.0', 'Diferença principal': 'Wrapper leve do llama.cpp com interface web integrada' },
          { 'App': '[Lucebox](/pt/power-local-llm/lucebox-review)', 'Plataformas': 'Linux', 'Preço / licença': 'Grátis / Apache-2.0', 'Diferença principal': 'Kernels ajustados à mão e decodificação especulativa para GPUs de consumo específicas' },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Strata funciona sem placa de vídeo?',
            a: 'O README diz que os mecanismos CUDA, HIP e SYCL precisam de uma placa para iniciar, então o PC precisa ter uma compatível. O mecanismo do Mac pode funcionar sem placa separada.',
          },
          {
            q: 'Posso usar o Strata com o Claude Code?',
            a: 'Segundo o README, sim, pela API no estilo Anthropic, definindo ANTHROPIC_BASE_URL com o endereço local. O modelo que responde é o Qwen3.8-Flash-Next, não um modelo Claude.',
          },
          {
            q: 'Posso acessá-lo do celular ou de outro PC?',
            a: 'O README cita `strata launch --access lan`, que cria uma chave de API por padrão; `--no-api-key` dispensa a chave e exibe um aviso.',
          },
          {
            q: 'O instalador do Windows é seguro para executar?',
            a: 'O README diz que ele ainda não tem assinatura de código e que o instalador do Terminal confere um hash SHA-256. A PromptQuorum não verificou nenhuma das duas afirmações.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O Strata é um aplicativo e uma ferramenta de Terminal gratuitos, com licença MIT, que, segundo o README, tornam utilizável em um PC gamer um modelo aberto de 125 bilhões de parâmetros e o expõem por APIs no estilo OpenAI e Anthropic; lançou três versões na semana anterior a esta verificação e instala com duplo clique no Windows, no Linux e em Macs com Apple Silicon. Em contrapartida, toda afirmação de velocidade, qualidade e privacidade vem do projeto, o repositório tem cerca de um mês, o instalador do Windows não tem assinatura de código e ele é construído em torno de um único modelo, não de uma biblioteca. Serve a quem tem memória combinada suficiente e quer esse modelo para chat ou agentes de programação; quem quer vários modelos e um histórico mais longo pode comparar [Ollama](/pt/power-local-llm/ollama-review) ou [llama.cpp](/pt/power-local-llm/llama-cpp-explained).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Strata no GitHub](https://github.com/Niko1221/Strata) — README, licença MIT, requisitos, opções de instalação, tabelas de velocidade e créditos, verificados em 23 de outubro de 2026.',
          '[Versão v0.2.2 do Strata](https://github.com/Niko1221/Strata/releases/tag/v0.2.2) — data da versão, notas da versão e lista de arquivos de instalação.',
          '[Notas de segurança do Strata](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md) e [guia para Mac](https://github.com/Niko1221/Strata/blob/main/docs/MAC.md) — tratamento de dados, conexões de saída e limites no Mac.',
          '[Qwen3.8-Flash-Next no Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — a página do modelo para a qual o README aponta.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Ollama](/pt/power-local-llm/ollama-review) — um runtime local com um comando e uma grande biblioteca de modelos.',
          '[llama.cpp explicado](/pt/power-local-llm/llama-cpp-explained) — o mecanismo de inferência em C++ por trás de muitas ferramentas locais.',
          '[Análise do KoboldCpp](/pt/power-local-llm/koboldcpp-review) — um wrapper do llama.cpp em arquivo único com interface web integrada.',
          '[Análise do Lucebox](/pt/power-local-llm/lucebox-review) — inferência local ajustada à mão para GPUs de consumo específicas.',
          '[Runtimes e servidores de LLM locais comparados](/pt/power-local-llm/local-llm-run-serve-compared) — a comparação da categoria de runtimes e servidores.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Overview & Reference',
    heroImage: '/images/strata-review-hero-ar.webp',
    title: 'مراجعة Strata: نموذج مفتوح بـ 125 مليار معامل على حاسوب ألعاب',
    seoTitle: 'مراجعة Strata: تشغيل نموذج مفتوح بـ 125B على حاسوب ألعاب',
    intro:
      'Strata محرك واستدلال وتطبيق سطح مكتب وأداة للطرفية برخصة MIT، يشغّل بحسب ملف README الخاص به نموذج Qwen3.8-Flash-Next المفتوح ذا 125 مليار معامل على حاسوب ألعاب، بتوزيع العمل بين ذاكرة الرسوميات وذاكرة RAM والقرص SSD. تعكس هذه المراجعة ملف README وملاحظات الأمان وصفحة الإصدار v0.2.2 للمشروع كما جرى التحقق منها في 23 أكتوبر 2026.',
    metaDescription:
      'مراجعة Strata: محرك وتطبيق مجاني برخصة MIT يشغّل نموذجًا مفتوحًا بـ 125B على حاسوب ألعاب. المتطلبات وواجهة API المحلية وادعاءات لم يُتحقق منها.',
    twitterDescription:
      'مراجعة Strata: تطبيق برخصة MIT يشغّل نموذجًا مفتوحًا بـ 125B على حاسوب ألعاب مع واجهتي API محليتين. المتطلبات والادعاءات والأسئلة المفتوحة.',
    audience:
      'من لديهم حاسوب ألعاب أو جهاز Mac بذاكرة كبيرة ويريدون معرفة ما يحتاجه Strata وكلفته وطريقة تثبيته وأي ادعاءات السرعة والخصوصية فيه لا تؤكدها المصادر.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Strata',
    targetKeywords: [
      'مراجعة strata',
      'تشغيل نموذج 125b على حاسوب ألعاب',
      'qwen3.8-flash-next محليًا',
      'محرك استدلال strata',
      'واجهة api محلية متوافقة مع openai',
      'strata مقابل ollama',
    ],
    current_hardware_mentioned: ['NVIDIA RTX GPU', 'AMD Radeon GPU', 'Intel Arc GPU', 'Mac with Apple Silicon', 'Ryzen AI Max'],
    leadAnswerBlock:
      '**Strata (الإصدار 0.2.2، صدر في 21 أكتوبر 2026) تطبيق وأداة للطرفية مجانيان برخصة MIT، يشغّلان بحسب ملف README الخاص بهما نموذجًا مفتوحًا واحدًا ذا 125 مليار معامل على حاسوب ألعاب عادي ويقدّمانه لبرامجك الأخرى عبر واجهة API محلية.** كل ما يخص السرعة والجودة والخصوصية في هذه المراجعة مصدره المشروع؛ ولم تثبّت PromptQuorum التطبيق ولم تختبره.',
    quickAnswerTop: {
      ar: {
        question: 'ماذا أحتاج لتشغيل Strata؟',
        answer:
          'بحسب ملف README: 32 GB على الأقل من RAM وذاكرة الرسوميات معًا، ونحو 80 GB من مساحة القرص الخالية، وبطاقة رسوميات مدعومة أو جهاز Mac بمعالج Apple Silicon. التطبيق نفسه مجاني.',
        bullets: [
          'يدعم بطاقات NVIDIA من الفئات RTX 20 إلى 50 وبطاقات AMD Radeon RX 6800 وما بعدها وبطاقات Intel Arc وأجهزة Mac بمعالج Apple Silicon.',
          'يوفّر واجهتي API متوافقتين مع OpenAI وAnthropic لأدوات مثل Claude Code وCodex CLI وOpenCode.',
          'يقرأ الصور؛ وقارئ الصور مفعّل افتراضيًا للنماذج التي تدعمه.',
          'يُثبَّت بتطبيق بنقرتين أو بأمر واحد في الطرفية.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Strata؟', anchor: 'what-is-strata' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'ما تحتاجه', anchor: 'requirements' },
      { label: 'الأسعار', anchor: 'pricing' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'أحجام النموذج بحسب الذاكرة', anchor: 'model-sizes' },
      { label: 'السرعة: أرقام المشروع', anchor: 'speed' },
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
            text: 'Strata محرك وتطبيق سطح مكتب برخصة MIT يشغّل نموذجًا مفتوحًا واحدًا ذا 125 مليار معامل على حاسوب ألعاب.',
          },
          {
            type: 'plain-terms',
            text: 'يوزّع النموذج على بطاقة الرسوميات وذاكرة RAM والقرص SSD، ثم يجيب في نافذة دردشة أو عبر واجهة API محلية تستطيع أدوات أخرى استدعاءها.',
          },
        ],
        items: [
          'الصيانة: أُنشئ المستودع في 24 سبتمبر 2026 وظهرت الإصدارات 0.2.0-beta و0.2.1 و0.2.2 بين 19 و21 أكتوبر 2026، فهو نشط لكن عمره شهر واحد فقط؛ ولا ينطبق تحذير المشروع المتوقف.',
          'الرخصة: MIT لـ Strata نفسه؛ ولكل ملف نموذج رخصته الخاصة.',
          'التكلفة: مجاني ودون حساب؛ والدعم طوعي.',
          'المثبّتات: مثبّت Windows غير موقّع رقميًا بعد، بحسب ملف README.',
          'الأساس: ملف README وملاحظات الأمان وصفحة الإصدار، قُرئت في 23 أكتوبر 2026، دون اختبار عملي.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تثبّت PromptQuorum تطبيق Strata ولم تختبره ولم تقِس أداءه. ما يرد أدناه عن السرعة والجودة والخصوصية هو من أقوال المشروع نفسه.',
          },
        ],
      },
      overview: {
        id: 'what-is-strata',
        title: 'ما هو Strata؟',
        content: [
          '**Strata محرك استدلال وتطبيق سطح مكتب وعميل للطرفية مبنية حول نموذج واحد هو Qwen3.8-Flash-Next، الذي يصفه ملف README بأنه نموذج ذو 125 مليار معامل يحتاج عادةً إلى خادم.** ينشر فريق Qwen النموذج على [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)؛ أما Strata، المنشور تحت حساب GitHub باسم Niko1221، فيشغّله على عتاد المستهلكين.',
          'يشرح ملف README الفكرة بمثال المكتبة: النموذج فريق من 24,576 متخصصًا صغيرًا («خبراء») وتحتاج كل كلمة إلى 10 منهم فقط. تحتفظ بطاقة الرسوميات بالخبراء الأكثر استخدامًا، وتحتفظ RAM بجميعهم، ويحتفظ القرص SSD بجدول بحث حجمه 29 GB. كما يخمّن مساعد صغير الكلمات القليلة التالية ويتحقق منها النموذج الكبير في تمريرة واحدة؛ ويقول المشروع إن ذلك يعطي الإجابة نفسها أسرع بمقدار 1.6 إلى 1.8 مرة. يستخدم المحرك أجزاء من [llama.cpp](https://github.com/ggml-org/llama.cpp)، والشيفرة المصدرية على [Niko1221/Strata](https://github.com/Niko1221/Strata).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُنزَّل Strata من صفحة الإصدارات على GitHub، بمثبّت واحد لكل نظام وبطاقة رسوميات.**',
        ],
        columns: ['النظام والبطاقة', 'التنزيل'],
        rows: [
          { 'النظام والبطاقة': 'Windows وNVIDIA (برنامج التشغيل 580+)', 'التنزيل': '[windows-cuda13.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda13.exe)' },
          { 'النظام والبطاقة': 'Windows وNVIDIA أقدم أو برنامج تشغيل أقدم', 'التنزيل': '[windows-cuda12.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda12.exe)' },
          { 'النظام والبطاقة': 'Windows وAMD RX 9000 / R9700', 'التنزيل': '[windows-hip.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip.exe)' },
          { 'النظام والبطاقة': 'Windows وAMD RX 7000 / Strix Halo', 'التنزيل': '[windows-hip-rdna3.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip-rdna3.exe)' },
          { 'النظام والبطاقة': 'Linux وNVIDIA (برنامج التشغيل 580+)', 'التنزيل': '[linux-nvidia-cuda13.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda13.AppImage)' },
          { 'النظام والبطاقة': 'Linux وNVIDIA أقدم أو برنامج تشغيل أقدم', 'التنزيل': '[linux-nvidia-cuda12.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda12.AppImage)' },
          { 'النظام والبطاقة': 'Linux وAMD RX 9000 / R9700', 'التنزيل': '[linux-amd-rx9070.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx9070.AppImage)' },
          { 'النظام والبطاقة': 'Linux وAMD RX 7000', 'التنزيل': '[linux-amd-rx7900.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx7900.AppImage)' },
          { 'النظام والبطاقة': 'Linux وStrix Halo', 'التنزيل': '[linux-amd-strixhalo.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-strixhalo.AppImage)' },
          { 'النظام والبطاقة': 'Mac وApple Silicon (macOS 15+)', 'التنزيل': '[mac.dmg](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-mac.dmg)' },
          { 'النظام والبطاقة': 'الطرفية، Linux وMac', 'التنزيل': '[install.sh](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.sh) (سطر واحد من README)' },
          { 'النظام والبطاقة': 'الطرفية، Windows', 'التنزيل': '[install.ps1](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.ps1) (سطر واحد من README)' },
          { 'النظام والبطاقة': 'الشيفرة المصدرية', 'التنزيل': '[github.com/Niko1221/Strata](https://github.com/Niko1221/Strata)' },
          { 'النظام والبطاقة': 'ملاحظات الأمان والخصوصية', 'التنزيل': '[docs/SAFETY.md](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)' },
        ],
        note: 'الإصدار الذي روجع: 0.2.2 (المحرك 0.1.47)، نُشر في 21 أكتوبر 2026 بحسب صفحة الإصدار على GitHub، وهو أحدث تحديث للمشروع وقت التحقق. لم يُعثر على موقع منتج مستقل: حقل الصفحة الرئيسية في المستودع ورابط الملف الشخصي للمشرف فارغان، ولم يُظهر البحث على الويب سوى المستودع ومقالات من أطراف ثالثة. يقول ملف README إن مثبّت Windows غير موقّع رقميًا، لذا قد يعرض Windows الرسالة «Windows protected your PC»، وتحتاج ملفات Linux AppImage إلى FUSE 2. ولا يوجد مثبّت خاص ببطاقات RX 6000، ويقول ملف README إن ذلك المحرك لم يُختبر بعد على بطاقة RX 6000 حقيقية.',
      },
      requirements: {
        id: 'requirements',
        title: 'ما تحتاجه',
        content: [
          '**يحتاج Strata إلى 32 GB على الأقل من RAM وذاكرة الرسوميات (VRAM) معًا، ونحو 80 GB من القرص الخالي، وبرنامج تشغيل حديث للرسوميات، ونظام Windows 10/11 أو Linux أو macOS 15 أو أحدث.** وفي جهاز Mac أو Ryzen AI Max تُحتسب الذاكرة الموحّدة للغرضين معًا.',
        ],
        columns: ['الجهاز', 'الدعم بحسب README'],
        rows: [
          { 'الجهاز': 'NVIDIA', 'الدعم بحسب README': 'GeForce RTX من الفئات 20 و30 و40 و50، بذاكرة 12 GB أو أكثر' },
          { 'الجهاز': 'AMD', 'الدعم بحسب README': 'Radeon RX 6800 وما بعدها وRadeon AI PRO R9700، بذاكرة 12 GB أو أكثر' },
          { 'الجهاز': 'Intel', 'الدعم بحسب README': 'بطاقات Arc؛ اختُبر أصغر نموذج على Arc A750 (Linux) فقط' },
          { 'الجهاز': 'Apple Silicon', 'الدعم بحسب README': 'M1 أو أحدث وmacOS 15 أو أحدث؛ لا تشغّله أجهزة Mac بمعالج Intel' },
          { 'الجهاز': 'Ryzen AI Max (Strix Halo)', 'الدعم بحسب README': 'أنظمة الذاكرة الموحّدة، ومثبّتات خاصة لـ Windows وLinux' },
        ],
        note: 'بحسب README، يمكن لبطاقتين أو ثلاث من الصانع نفسه أن تتشاركا نموذجًا واحدًا؛ ولا يقسّم Strata نموذجًا بين بطاقات NVIDIA وAMD أبدًا. وللبطاقات والمعالجات الأقدم صفحات تجريبية منفصلة في المستودع.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار',
        content: [
          '**Strata مجاني: يذكر ملف README رخصة MIT ودون حساب ودون سحابة.**',
        ],
        columns: ['البند', 'التكلفة (USD)'],
        rows: [
          { 'البند': 'التطبيق والطرفية والمحرك', 'التكلفة (USD)': '$0 (رخصة MIT)' },
          { 'البند': 'ملفات النموذج', 'التكلفة (USD)': 'لا سعر مذكور؛ تسري رخصها الخاصة' },
          { 'البند': 'دعم المشروع', 'التكلفة (USD)': 'اختياري عبر [Buy Me a Coffee](https://buymeacoffee.com/strataengine)' },
        ],
        note: 'قُرئت من ملف README في 23 أكتوبر 2026. ويدعو الملف الرعاة أيضًا إلى التواصل عبر [الملف الشخصي للمشرف على GitHub](https://github.com/Niko1221). والكلفة الحقيقية هي تنزيل النموذج: نحو 40 إلى 70 GB بحسب ملف README.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات «الخيار A: تطبيق Strata» في ملف README؛ ولم تنفذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'قارن حاسوبك بالمتطلبات',
            whyItMatters: 'تحقق من الذاكرة والقرص الخالي وبطاقة الرسوميات مقابل الجدول أعلاه قبل التنزيل.',
          },
          {
            title: 'نزّل المثبّت المناسب لنظامك وبطاقتك',
            whyItMatters: 'اختر الملف المطابق من جدول «كيف تحصل عليه». ويمكن لمستخدمي الطرفية تشغيل السكربت ذي السطر الواحد ثم بدء Strata بالأمر `strata launch`.',
          },
          {
            title: 'ثبّت ودع التطبيق يقرأ حاسوبك',
            whyItMatters: 'تقترح الشاشة الأولى نموذجًا يناسب جهازك؛ اضغط تثبيت. تنزيل النموذج كبير ويُستأنف من حيث توقف إذا انقطع.',
          },
          {
            title: 'انتظر أثناء التحميل الأول',
            whyItMatters: 'يقول ملف README إن الحاسوب قد يبطؤ أو يتوقف عن الاستجابة من دقيقة إلى 3 دقائق أثناء تحميل النموذج في RAM، والمدة أطول في المرة الأولى. لا تغلق النافذة.',
          },
          {
            title: 'تحدّث، أو اربط أدواتك الأخرى',
            whyItMatters: 'استخدم صفحة الدردشة في التطبيق، أو شغّل `strata connect` لطباعة إعدادات OpenCode وCodex CLI وClaude Code وغيرها.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره ملف README أو وثائق المشروع.**',
        ],
        items: [
          '**واجهة API محلية.** يوفّر الخادم واجهة API متوافقة مع OpenAI، وواجهة بأسلوب Anthropic على المنفذ نفسه، وواجهة OpenAI Responses لـ Codex CLI؛ ويطبع `strata connect` إعدادات OpenCode وCodex CLI وClaude Code وoh-my-pi وpi وHermes Agent وOpenClaw.',
          '**الصور.** إدخال الصور مفعّل افتراضيًا للنماذج القادرة على قراءتها؛ ويعمل القارئ على المعالج عندما تقل ذاكرة بطاقة الرسوميات عن 24 GB.',
          '**تطبيق الدردشة.** يضم التطبيق صفحة دردشة، ولوحة مراقبة للنموذج وGPU وCPU وRAM، وصفحة نماذج، وإعدادات؛ وفي الوضع اليدوي تسأل الدردشة قبل أن تغيّر ملفًا أو تشغّل أمرًا.',
          '**عدة بطاقات.** يمكن ضبط كل بطاقة رسوميات على رئيسية أو مساعدة أو متوقفة، واختيار مستوى التفكير (متوقف أو منخفض أو متوسط أو عالٍ) لكل محادثة.',
          '**MCP.** يمكن لأدوات الذكاء الاصطناعي تثبيت Strata وتشغيله وإيقافه عبر خادم MCP الخاص به.',
          '**الطرفية.** يسأل `strata launch` عن النموذج والسياق والصور والوصول سؤالًا واحدًا في كل مرة؛ وتتيح الخيارات للسكربتات ووكلاء الذكاء الاصطناعي تشغيله دون أسئلة.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'أحجام النموذج بحسب الذاكرة',
        content: [
          '**يقدّم Strata نموذجًا واحدًا بعدة أحجام مضغوطة؛ ويقول ملف README إن الأحجام الأصغر أسرع والأكبر أذكى قليلًا.**',
        ],
        columns: ['الذاكرة (RAM + VRAM)', 'الحجم المقترح في README'],
        rows: [
          { 'الذاكرة (RAM + VRAM)': '32 GB', 'الحجم المقترح في README': 'Gyro-S، أو Coder للبرمجة' },
          { 'الذاكرة (RAM + VRAM)': '40 GB', 'الحجم المقترح في README': 'Swift 1.5 IQ2_XS، أو Gyro-M' },
          { 'الذاكرة (RAM + VRAM)': '48 GB', 'الحجم المقترح في README': 'IQ3_XXS: أبطأ وأفضل' },
          { 'الذاكرة (RAM + VRAM)': '64 GB', 'الحجم المقترح في README': 'IQ3_S: الأبطأ والأفضل' },
          { 'الذاكرة (RAM + VRAM)': '96 GB أو أكثر', 'الحجم المقترح في README': 'من Unsloth UD-IQ4_XS إلى Q8_0' },
        ],
        note: 'يحتسب ملف README مجموع RAM وVRAM مطروحًا منه 5 GB يحتفظ بها النظام. يحتاج Gyro-S إلى 27.6 GB من تلك الذاكرة لتنزيل حجمه 58.5 GB وتقل جودته بحسب README عن IQ2_XS؛ ويحتاج Gyro-M إلى 35 GB لتنزيل حجمه 92 GB. ويقول README إن IQ3_S يطابق النموذج الكامل في الاختبارات المنشورة؛ ولم تتحقق PromptQuorum من تلك الاختبارات.',
      },
      speed: {
        id: 'speed',
        title: 'السرعة: أرقام المشروع',
        content: [
          '**يذكر ملف README 94 رمزًا (token) في الثانية لأسرع أحجامه و53 لحجم IQ3_S على بطاقة RTX 5070؛ ولم تعِد PromptQuorum إنتاج أي رقم.** والرمز الواحد يعادل نحو ثلاثة أرباع الكلمة.',
        ],
        columns: ['الحجم والبطاقة', 'الإجابات (tok/s)', 'المطالبة (tok/s)'],
        rows: [
          { 'الحجم والبطاقة': 'Q2_0 وRTX 5070 (12 GB)', 'الإجابات (tok/s)': '94', 'المطالبة (tok/s)': '2,650' },
          { 'الحجم والبطاقة': 'IQ3_S وRTX 5070 (12 GB)', 'الإجابات (tok/s)': '53', 'المطالبة (tok/s)': '1,620' },
          { 'الحجم والبطاقة': 'Coder وRTX 5070 (12 GB)', 'الإجابات (tok/s)': '55', 'المطالبة (tok/s)': '2,180' },
          { 'الحجم والبطاقة': 'Q2_0 وRX 9070 XT (16 GB)', 'الإجابات (tok/s)': '60', 'المطالبة (tok/s)': '1,160' },
        ],
        note: 'المصدر: جداول «How fast is it?» في ملف README، قاسها المشروع على Ryzen 5 7600 مع 64 GB من RAM (RTX 5070) وRyzen 9 3900X مع 47 GB من RAM (RX 9070 XT). ويضيف README أن Strata يقرأ الرسالة الأولى في المحادثة كاملةً بمعدل دقيقة واحدة تقريبًا لكل 30,000 رمز، وأن الرسائل اللاحقة تبدأ في ثوانٍ.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**تقول ملاحظات الأمان في Strata إن المحادثات والمطالبات والملفات والصور والنماذج تبقى على حاسوبك، وإنه لا قياس عن بُعد ولا حساب، وإن بدء النموذج أو تشغيله لا ينزّل أي شيء.** وتضيف أنه بعد تنزيل النموذج يعمل Strata دون إنترنت، وأن الخادم يستمع على حاسوبك فقط ما لم تمنح أجهزة أخرى حق الوصول بمفتاح API.',
          'بحسب الملاحظات نفسها، لا يُستخدم الإنترنت إلا عند طلبك: تنزيلات النموذج والمحرك وتحديثات التطبيق من Hugging Face وGitHub Releases، وبحث الوكيل على الويب (DuckDuckGo ثم Bing مصدرًا ثانيًا) وصفحات الويب، وخدمات النماذج الخارجية التي تضيفها، ونفق Cloudflare إن فعّلته. ويرسل البحث على الويب كلمات البحث خارج حاسوبك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تقول الملاحظات إنها مستمدة من قراءة شيفرة هذا الإصدار، لكنها أقوال المشرف على المشروع. ولم تدقق PromptQuorum الشيفرة ولا حركة الشبكة.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**أصحاب حاسوب ألعاب حديث أو جهاز Mac بذاكرة كبيرة** ممن يريدون نموذجًا مفتوحًا كبيرًا جدًا دون استئجار خادم.',
          '**المطورون الذين يستخدمون Claude Code أو Codex CLI أو OpenCode** ويريدون نقطة وصول محلية بأسلوب OpenAI أو Anthropic.',
          '**من يريدون إبقاء محادثاتهم على أجهزتهم،** بحسب ملاحظات الأمان في المشروع.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة والسرعة عمليًا.** لم تشغّل PromptQuorum تطبيق Strata، لذا فجودة الإجابات وأرقام السرعة وادعاء مطابقة النموذج الكامل كلها من أقوال المشروع.',
          '**فحوص الخصوصية والتنزيل.** لم تُقارن عبارات غياب القياس عن بُعد والعمل دون اتصال والتحديثات الموقّعة بالشيفرة أو بحركة الشبكة.',
          '**النضج.** يعود المستودع إلى 24 سبتمبر 2026 وكان فيه 697 مشكلة مفتوحة في 23 أكتوبر 2026؛ ومسارا Mac وIntel Arc جديدان في الإصدار 0.2.2، ولا يذكر المشروع إلا عددًا قليلًا من الأجهزة المختبرة لهما.',
          '**خيارات النموذج.** تصف الصفحات التي روجعت نموذجًا واحدًا بعدة أحجام مع بعض البدائل المسماة، لا مكتبة نماذج عامة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Ollama](/ar/power-local-llm/ollama-review)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'تثبيت بأمر واحد ومكتبة نماذج كبيرة، غير مرتبط بنموذج واحد' },
          { 'التطبيق': '[llama.cpp](/ar/power-local-llm/llama-cpp-explained)', 'المنصات': 'Windows وmacOS وLinux', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'محرك C++ وراء أدوات كثيرة، منها أجزاء من Strata؛ يعتمد سطر الأوامر أولًا' },
          { 'التطبيق': '[KoboldCpp](/ar/power-local-llm/koboldcpp-review)', 'المنصات': 'Windows وLinux وmacOS', 'السعر / الرخصة': 'مجاني / AGPL 3.0', 'الفرق الأبرز': 'غلاف خفيف لـ llama.cpp مع واجهة ويب مدمجة' },
          { 'التطبيق': '[Lucebox](/ar/power-local-llm/lucebox-review)', 'المنصات': 'Linux', 'السعر / الرخصة': 'مجاني / Apache-2.0', 'الفرق الأبرز': 'نوى مضبوطة يدويًا وفك ترميز استباقي لبطاقات رسوميات استهلاكية محددة' },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Strata دون بطاقة رسوميات؟',
            a: 'يقول ملف README إن محركات CUDA وHIP وSYCL تحتاج إلى بطاقة لتبدأ، لذا يلزم حاسوب ببطاقة مدعومة. أما محرك Mac فيمكنه العمل دون بطاقة منفصلة.',
          },
          {
            q: 'هل يمكنني استخدام Strata مع Claude Code؟',
            a: 'بحسب ملف README نعم، عبر واجهة API بأسلوب Anthropic بضبط ANTHROPIC_BASE_URL على العنوان المحلي. والنموذج الذي يجيب هو Qwen3.8-Flash-Next وليس نموذج Claude.',
          },
          {
            q: 'هل يمكنني الوصول إليه من هاتفي أو من حاسوب آخر؟',
            a: 'يذكر ملف README الأمر `strata launch --access lan`، الذي ينشئ مفتاح API افتراضيًا؛ أما `--no-api-key` فيتخطى المفتاح ويطبع تحذيرًا.',
          },
          {
            q: 'هل مثبّت Windows آمن للتشغيل؟',
            a: 'يقول ملف README إنه غير موقّع رقميًا بعد، وإن مثبّت الطرفية يتحقق من تجزئة SHA-256. ولم تتحقق PromptQuorum من أي من العبارتين.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Strata تطبيق وأداة للطرفية مجانيان برخصة MIT يجعلان، بحسب ملف README الخاص بهما، نموذجًا مفتوحًا ذا 125 مليار معامل قابلًا للاستخدام على حاسوب ألعاب ويعرضانه عبر واجهتي API بأسلوب OpenAI وAnthropic؛ وقد أصدر ثلاثة إصدارات في الأسبوع السابق لهذا التحقق، ويُثبَّت بنقرتين على Windows وLinux وأجهزة Mac بمعالج Apple Silicon. في المقابل، كل ما يخص السرعة والجودة والخصوصية مصدره المشروع، وعمر المستودع نحو شهر، ومثبّت Windows غير موقّع رقميًا، والأداة مبنية حول نموذج واحد لا مكتبة نماذج. يناسب من لديهم ذاكرة مجمّعة كافية ويريدون هذا النموذج للدردشة أو لوكلاء البرمجة؛ ومن يريد نماذج كثيرة وسجلًا أطول يمكنه مقارنة [Ollama](/ar/power-local-llm/ollama-review) أو [llama.cpp](/ar/power-local-llm/llama-cpp-explained).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Strata على GitHub](https://github.com/Niko1221/Strata) — ملف README ورخصة MIT والمتطلبات وخيارات التثبيت وجداول السرعة والإسنادات، جرى التحقق منها في 23 أكتوبر 2026.',
          '[الإصدار Strata v0.2.2](https://github.com/Niko1221/Strata/releases/tag/v0.2.2) — تاريخ الإصدار وملاحظاته وقائمة ملفات المثبّتات.',
          '[ملاحظات الأمان في Strata](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md) و[دليل Mac](https://github.com/Niko1221/Strata/blob/main/docs/MAC.md) — التعامل مع البيانات والاتصالات الصادرة وحدود Mac.',
          '[Qwen3.8-Flash-Next على Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — صفحة النموذج التي يربط بها ملف README.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Ollama](/ar/power-local-llm/ollama-review) — بيئة تشغيل محلية بأمر واحد مع مكتبة نماذج كبيرة.',
          '[شرح llama.cpp](/ar/power-local-llm/llama-cpp-explained) — محرك الاستدلال بلغة C++ وراء أدوات محلية كثيرة.',
          '[مراجعة KoboldCpp](/ar/power-local-llm/koboldcpp-review) — غلاف أحادي الملف لـ llama.cpp مع واجهة ويب مدمجة.',
          '[مراجعة Lucebox](/ar/power-local-llm/lucebox-review) — استدلال محلي مضبوط يدويًا لبطاقات رسوميات استهلاكية محددة.',
          '[مقارنة أدوات التشغيل والخدمة للنماذج المحلية](/ar/power-local-llm/local-llm-run-serve-compared) — مقارنة الفئة لبيئات التشغيل والخوادم.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Overview & Reference',
    heroImage: '/images/strata-review-hero-zh.webp',
    title: 'Strata 评测：在游戏电脑上运行 125B 参数开源模型',
    seoTitle: 'Strata 评测：在游戏电脑上运行 125B 开源模型',
    intro:
      'Strata 是一款采用 MIT 许可的引擎、桌面应用和终端工具，据其 README 介绍，它通过在显存、内存和 SSD 之间分担运算，让游戏电脑运行 1250 亿参数的开源模型 Qwen3.8-Flash-Next。本评测依据 2026 年 10 月 23 日核对的项目 README、安全说明和 v0.2.2 发布页面。',
    metaDescription:
      'Strata 评测：免费、MIT 许可的引擎与应用，可在游戏电脑上运行 125B 开源模型。涵盖配置要求、安装包、本地 API 及未核实的说法。',
    twitterDescription:
      'Strata 评测：采用 MIT 许可的应用，可在游戏电脑上运行 125B 开源模型，并提供 OpenAI 和 Anthropic 风格的本地 API。要求、说法与未解问题。',
    audience:
      '拥有游戏电脑或大内存 Mac，想了解 Strata 的配置要求、费用、安装方式，以及哪些速度和隐私说法在来源中未能证实的读者。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Strata 评测',
    targetKeywords: [
      'strata 评测',
      '游戏电脑运行 125b 模型',
      'qwen3.8-flash-next 本地部署',
      'strata 推理引擎',
      '本地 openai 兼容 api',
      'strata 与 ollama 对比',
    ],
    current_hardware_mentioned: ['NVIDIA RTX GPU', 'AMD Radeon GPU', 'Intel Arc GPU', 'Mac with Apple Silicon', 'Ryzen AI Max'],
    leadAnswerBlock:
      '**Strata（0.2.2 版，2026 年 10 月 21 日发布）是一款免费、采用 MIT 许可的应用和终端工具，据其 README 介绍，它能在普通游戏电脑上运行一个 1250 亿参数的开源模型，并通过本地 API 提供给你的其他程序。** 本评测中所有关于速度、质量和隐私的说法都来自项目方；PromptQuorum 未安装或测试该应用。',
    quickAnswerTop: {
      zh: {
        question: '运行 Strata 需要什么？',
        answer:
          '据 README，内存与显存合计至少 32 GB，约 80 GB 可用磁盘空间，以及受支持的显卡或 Apple Silicon Mac。应用本身免费。',
        bullets: [
          '支持 NVIDIA RTX 20 至 50 系列、AMD Radeon RX 6800 及更新型号、Intel Arc 和 Apple Silicon Mac。',
          '提供兼容 OpenAI 和兼容 Anthropic 的 API，可供 Claude Code、Codex CLI 和 OpenCode 等工具使用。',
          '可读取图片；对支持图片的模型，图片读取器默认开启。',
          '可通过双击安装的应用或一行终端命令安装。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Strata 是什么？', anchor: 'what-is-strata' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '配置要求', anchor: 'requirements' },
      { label: '定价', anchor: 'pricing' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '按内存选择模型大小', anchor: 'model-sizes' },
      { label: '速度：项目方公布的数字', anchor: 'speed' },
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
            text: 'Strata 是一款采用 MIT 许可的引擎和桌面应用，可在游戏电脑上运行一个 1250 亿参数的开源模型。',
          },
          {
            type: 'plain-terms',
            text: '它把模型分摊到你的显卡、内存和 SSD 上，然后通过聊天窗口或其他工具可调用的本地 API 作答。',
          },
        ],
        items: [
          '维护情况：代码仓库创建于 2026 年 9 月 24 日，0.2.0-beta、0.2.1 和 0.2.2 三个版本于 2026 年 10 月 19 日至 21 日陆续发布，因此更新活跃，但项目只有一个月历史；不适用停止维护警告。',
          '许可证：Strata 本身采用 MIT；每个模型文件各有自己的许可证。',
          '费用：免费，无需账号；支持项目属自愿。',
          '安装程序：据 README，Windows 安装程序尚未代码签名。',
          '依据：2026 年 10 月 23 日阅读的 README、安全说明和发布页面，未做实际测试。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 未安装、测试或评测 Strata。下文关于速度、质量和隐私的说法均来自项目方。',
          },
        ],
      },
      overview: {
        id: 'what-is-strata',
        title: 'Strata 是什么？',
        content: [
          '**Strata 是围绕单一模型 Qwen3.8-Flash-Next 构建的推理引擎、桌面应用和终端客户端；README 称该模型为 1250 亿参数，通常需要服务器才能运行。** 该模型由 Qwen 团队发布在 [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) 上；Strata 由 GitHub 账号 Niko1221 发布，让它能在消费级硬件上运行。',
          'README 用图书馆来比喻其原理：该模型由 24,576 位小专家（“experts”）组成，每个词只需调用其中 10 位。显卡存放最常用的专家，内存存放全部专家，SSD 则存放一份 29 GB 的查找表。另有一个小型辅助模型会预测接下来的几个词，由大模型一次性校验；项目方称这样能以 1.6 至 1.8 倍的速度得到相同的答案。该引擎使用了 [llama.cpp](https://github.com/ggml-org/llama.cpp) 的部分代码，源码位于 [Niko1221/Strata](https://github.com/Niko1221/Strata)。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Strata 从 GitHub 的 Releases 页面下载，每种系统和显卡对应一个安装程序。**',
        ],
        columns: ['系统与显卡', '下载'],
        rows: [
          { '系统与显卡': 'Windows，NVIDIA（驱动 580+）', '下载': '[windows-cuda13.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda13.exe)' },
          { '系统与显卡': 'Windows，较旧的 NVIDIA 或驱动', '下载': '[windows-cuda12.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda12.exe)' },
          { '系统与显卡': 'Windows，AMD RX 9000 / R9700', '下载': '[windows-hip.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip.exe)' },
          { '系统与显卡': 'Windows，AMD RX 7000 / Strix Halo', '下载': '[windows-hip-rdna3.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip-rdna3.exe)' },
          { '系统与显卡': 'Linux，NVIDIA（驱动 580+）', '下载': '[linux-nvidia-cuda13.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda13.AppImage)' },
          { '系统与显卡': 'Linux，较旧的 NVIDIA 或驱动', '下载': '[linux-nvidia-cuda12.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda12.AppImage)' },
          { '系统与显卡': 'Linux，AMD RX 9000 / R9700', '下载': '[linux-amd-rx9070.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx9070.AppImage)' },
          { '系统与显卡': 'Linux，AMD RX 7000', '下载': '[linux-amd-rx7900.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx7900.AppImage)' },
          { '系统与显卡': 'Linux，Strix Halo', '下载': '[linux-amd-strixhalo.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-strixhalo.AppImage)' },
          { '系统与显卡': 'Mac，Apple Silicon（macOS 15+）', '下载': '[mac.dmg](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-mac.dmg)' },
          { '系统与显卡': '终端，Linux 和 Mac', '下载': '[install.sh](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.sh)（README 中的单行命令）' },
          { '系统与显卡': '终端，Windows', '下载': '[install.ps1](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.ps1)（README 中的单行命令）' },
          { '系统与显卡': '源代码', '下载': '[github.com/Niko1221/Strata](https://github.com/Niko1221/Strata)' },
          { '系统与显卡': '安全与隐私说明', '下载': '[docs/SAFETY.md](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)' },
        ],
        note: '评测版本：0.2.2（引擎 0.1.47），据 GitHub 发布页面于 2026 年 10 月 21 日发布，是核对时的最新上游更新。未找到独立的产品官网：代码仓库的主页字段和维护者的个人资料链接均为空，网络搜索也只找到代码仓库和第三方文章。README 称 Windows 安装程序未经代码签名，因此 Windows 可能显示“Windows 已保护你的电脑”，Linux 的 AppImage 需要 FUSE 2。RX 6000 显卡没有专用安装程序，README 称该引擎尚未在真实的 RX 6000 显卡上测试。',
      },
      requirements: {
        id: 'requirements',
        title: '配置要求',
        content: [
          '**Strata 要求内存与显存（VRAM）合计至少 32 GB，约 80 GB 可用磁盘空间，较新的显卡驱动，以及 Windows 10/11、Linux 或 macOS 15 及以上版本。** 在 Mac 或 Ryzen AI Max 上，统一内存同时计入两者。',
        ],
        columns: ['电脑', 'README 中的支持情况'],
        rows: [
          { '电脑': 'NVIDIA', 'README 中的支持情况': 'GeForce RTX 20、30、40、50 系列，12 GB 或以上' },
          { '电脑': 'AMD', 'README 中的支持情况': 'Radeon RX 6800 及更新型号、Radeon AI PRO R9700，12 GB 或以上' },
          { '电脑': 'Intel', 'README 中的支持情况': 'Arc 显卡；仅在 Arc A750（Linux）上测试过最小的模型' },
          { '电脑': 'Apple Silicon', 'README 中的支持情况': 'M1 或更新、macOS 15 或更新；Intel Mac 无法运行' },
          { '电脑': 'Ryzen AI Max（Strix Halo）', 'README 中的支持情况': '统一内存系统，Windows 和 Linux 各有专用安装程序' },
        ],
        note: '据 README 介绍，同一品牌的两三张显卡可共同承载一个模型；Strata 绝不会把一个模型拆分到 NVIDIA 和 AMD 显卡上。较旧的显卡和处理器在代码仓库中有单独的实验性页面。',
      },
      pricing: {
        id: 'pricing',
        title: '定价',
        content: [
          '**Strata 免费：README 称其采用 MIT 许可，无需账号，也无需云端。**',
        ],
        columns: ['项目', '费用（USD）'],
        rows: [
          { '项目': '应用、终端和引擎', '费用（USD）': '$0（MIT 许可）' },
          { '项目': '模型文件', '费用（USD）': '未列出价格；适用各自的许可证' },
          { '项目': '支持项目', '费用（USD）': '可选，通过 [Buy Me a Coffee](https://buymeacoffee.com/strataengine)' },
        ],
        note: '读取自 2026 年 10 月 23 日的 README。README 还邀请赞助商通过维护者的 [GitHub 个人主页](https://github.com/Niko1221)联系。真正的成本是模型下载：据 README 约为 40 至 70 GB。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依照 README 的“方案 A：Strata 应用”；PromptQuorum 未实际执行。**',
        ],
        numberedItems: [
          {
            title: '对照配置要求检查你的电脑',
            whyItMatters: '下载前，先对照上表核对内存、可用磁盘空间和显卡。',
          },
          {
            title: '下载适合你的系统和显卡的安装程序',
            whyItMatters: '从“获取方式”表中选择对应的文件。终端用户可改为运行单行脚本，然后用 `strata launch` 启动 Strata。',
          },
          {
            title: '安装，并让应用读取你的电脑配置',
            whyItMatters: '第一个界面会推荐适合的模型，点击安装即可。模型下载量很大，中断后会从断点继续。',
          },
          {
            title: '等待首次加载完成',
            whyItMatters: 'README 称，模型加载到内存期间，电脑可能变慢或停止响应 1 到 3 分钟，首次最久。请不要关闭窗口。',
          },
          {
            title: '开始聊天，或连接你的其他工具',
            whyItMatters: '使用应用的聊天页面，或运行 `strata connect`，为 OpenCode、Codex CLI、Claude Code 等工具打印设置。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下每一项都来自 README 或项目文档。**',
        ],
        items: [
          '**本地 API。** 服务器提供兼容 OpenAI 的 API、同一端口上的 Anthropic 风格 API，以及供 Codex CLI 使用的 OpenAI Responses API；`strata connect` 会为 OpenCode、Codex CLI、Claude Code、oh-my-pi、pi、Hermes Agent 和 OpenClaw 打印设置。',
          '**图片。** 对能读取图片的模型，图片输入默认开启；显卡显存低于 24 GB 时，读取器在处理器上运行。',
          '**聊天应用。** 应用包含聊天、显示模型、GPU、CPU 和内存的监控页、模型页和设置；在手动模式下，聊天在修改文件或运行命令前会先询问。',
          '**多张显卡。** 每张显卡可设为 Main、Helper 或 Off，每次聊天还可选择思考级别（关闭、低、中或高）。',
          '**MCP。** AI 工具可通过其 MCP 服务器安装、启动和停止 Strata。',
          '**终端。** `strata launch` 会逐个询问模型、上下文、图片和访问权限；通过参数，脚本和 AI 智能体可无需提示直接运行。',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: '按内存选择模型大小',
        content: [
          '**Strata 提供同一个模型的多种压缩规格；README 称较小的规格更快，较大的规格略聪明一些。**',
        ],
        columns: ['内存（RAM + VRAM）', 'README 建议的规格'],
        rows: [
          { '内存（RAM + VRAM）': '32 GB', 'README 建议的规格': 'Gyro-S，写代码可选 Coder' },
          { '内存（RAM + VRAM）': '40 GB', 'README 建议的规格': 'Swift 1.5 IQ2_XS，或 Gyro-M' },
          { '内存（RAM + VRAM）': '48 GB', 'README 建议的规格': 'IQ3_XXS：较慢，较好' },
          { '内存（RAM + VRAM）': '64 GB', 'README 建议的规格': 'IQ3_S：最慢，最好' },
          { '内存（RAM + VRAM）': '96 GB 或以上', 'README 建议的规格': 'Unsloth UD-IQ4_XS 至 Q8_0' },
        ],
        note: 'README 的算法是内存加显存，再减去系统保留的 5 GB。Gyro-S 需要其中 27.6 GB 的内存，下载量为 58.5 GB，据 README，其质量低于 IQ2_XS；Gyro-M 需要 35 GB，下载量为 92 GB。README 称 IQ3_S 在已公布的测试中与完整模型相当；PromptQuorum 未核对这些测试。',
      },
      speed: {
        id: 'speed',
        title: '速度：项目方公布的数字',
        content: [
          '**README 报告称，在 RTX 5070 上最快规格为每秒 94 个 token，IQ3_S 为 53 个；PromptQuorum 未复现任何数字。** 一个 token 约相当于四分之三个英文单词。',
        ],
        columns: ['规格与显卡', '回答（tok/s）', '提示词（tok/s）'],
        rows: [
          { '规格与显卡': 'Q2_0，RTX 5070（12 GB）', '回答（tok/s）': '94', '提示词（tok/s）': '2,650' },
          { '规格与显卡': 'IQ3_S，RTX 5070（12 GB）', '回答（tok/s）': '53', '提示词（tok/s）': '1,620' },
          { '规格与显卡': 'Coder，RTX 5070（12 GB）', '回答（tok/s）': '55', '提示词（tok/s）': '2,180' },
          { '规格与显卡': 'Q2_0，RX 9070 XT（16 GB）', '回答（tok/s）': '60', '提示词（tok/s）': '1,160' },
        ],
        note: '来源：README 中“How fast is it?”的表格，由项目方在 Ryzen 5 7600 搭配 64 GB 内存（RTX 5070）和 Ryzen 9 3900X 搭配 47 GB 内存（RX 9070 XT）上测得。README 还称，Strata 会完整读取一次聊天的第一条消息，速度约为每 30,000 个 token 一分钟，之后的消息几秒内即可开始。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**Strata 的安全说明称，聊天、提示词、文件、图片和模型都保留在你的电脑上，没有遥测，没有账号，启动或运行模型时绝不会下载任何内容。** 说明还称，模型下载完成后，Strata 无需联网即可运行；除非你用 API 密钥向其他设备开放访问，否则服务器只监听你自己的电脑。',
          '同一份说明称，只有在你提出要求时才会使用互联网：从 Hugging Face 和 GitHub Releases 下载模型、引擎和应用更新，智能体的网页搜索（DuckDuckGo，Bing 为第二来源）和网页访问，你自行添加的外部模型服务，以及你开启后的 Cloudflare 隧道。网页搜索会把搜索词发送到你的电脑之外。',
        ],
        callouts: [
          {
            type: 'note',
            text: '说明称内容来自对该版本代码的阅读，但这些都是维护者的说法。PromptQuorum 未审计代码或网络流量。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**拥有较新游戏电脑或大内存 Mac 的用户**，想使用一个超大的开源模型，又不想租用服务器。',
          '**使用 Claude Code、Codex CLI 或 OpenCode 的开发者**，想要本地的 OpenAI 或 Anthropic 风格端点。',
          '**希望聊天内容留在自己电脑上的人**，依据项目方的安全说明。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际质量与速度。** PromptQuorum 未运行 Strata，因此回答质量、速度数字以及与完整模型相当的说法均来自项目方。',
          '**隐私与下载核查。** 无遥测、可离线和更新签名的说法，未与代码或网络流量对照核实。',
          '**成熟度。** 代码仓库始于 2026 年 9 月 24 日，2026 年 10 月 23 日显示有 697 个未解决的 issue；Mac 和 Intel Arc 的支持路径是 0.2.2 新增的，项目方列出的已测试机器很少。',
          '**模型选择。** 所查页面介绍的是同一个模型的多种规格，外加几个点名的替代模型，而不是通用的模型库。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Ollama](/zh/power-local-llm/ollama-review)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '一条命令即可安装，模型库庞大，不局限于单一模型' },
          { '应用': '[llama.cpp](/zh/power-local-llm/llama-cpp-explained)', '平台': 'Windows、macOS、Linux', '价格 / 许可证': '免费 / MIT', '主要区别': '众多工具背后的 C++ 引擎，Strata 也使用了其中部分代码；以命令行为主' },
          { '应用': '[KoboldCpp](/zh/power-local-llm/koboldcpp-review)', '平台': 'Windows、Linux、macOS', '价格 / 许可证': '免费 / AGPL 3.0', '主要区别': '轻量的 llama.cpp 封装，内置网页界面' },
          { '应用': '[Lucebox](/zh/power-local-llm/lucebox-review)', '平台': 'Linux', '价格 / 许可证': '免费 / Apache-2.0', '主要区别': '针对特定消费级 GPU 手工调优的内核和推测解码' },
        ],
        note: '竞品信息变化较快；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Strata 没有显卡能用吗？',
            a: 'README 称，CUDA、HIP 和 SYCL 引擎需要显卡才能启动，因此电脑必须配备受支持的显卡。Mac 引擎无需单独的显卡即可运行。',
          },
          {
            q: '能在 Claude Code 中使用 Strata 吗？',
            a: '据 README，可以：通过 Anthropic 风格的 API，把 ANTHROPIC_BASE_URL 设置为本地地址即可。作答的模型是 Qwen3.8-Flash-Next，而不是 Claude 模型。',
          },
          {
            q: '能从手机或另一台电脑访问吗？',
            a: 'README 提到了 `strata launch --access lan`，默认会创建 API 密钥；`--no-api-key` 会跳过密钥并打印警告。',
          },
          {
            q: 'Windows 安装程序运行起来安全吗？',
            a: 'README 称该安装程序尚未代码签名，并称终端安装程序会校验 SHA-256 哈希值。PromptQuorum 未核实这两项说法。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '据其 README，Strata 是一款免费、采用 MIT 许可的应用和终端工具，让游戏电脑也能使用 1250 亿参数的开源模型，并通过 OpenAI 和 Anthropic 风格的 API 对外提供；本次核对前一周内发布了三个版本，在 Windows、Linux 和 Apple Silicon Mac 上可双击安装。不足之处是：所有关于速度、质量和隐私的说法都来自项目方，代码仓库只有大约一个月历史，Windows 安装程序未经代码签名，而且它围绕单一模型构建，而非一个模型库。它适合内存合计足够、想把该模型用于聊天或编程智能体的人；更看重多种模型和更长运行记录的读者，可对比 [Ollama](/zh/power-local-llm/ollama-review) 或 [llama.cpp](/zh/power-local-llm/llama-cpp-explained)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[GitHub 上的 Strata](https://github.com/Niko1221/Strata)：README、MIT 许可证、配置要求、安装方式、速度表和致谢，核对于 2026 年 10 月 23 日。',
          '[Strata v0.2.2 版本](https://github.com/Niko1221/Strata/releases/tag/v0.2.2)：发布日期、发布说明和安装文件列表。',
          '[Strata 安全说明](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)和 [Mac 指南](https://github.com/Niko1221/Strata/blob/main/docs/MAC.md)：数据处理、对外连接和 Mac 限制。',
          '[Hugging Face 上的 Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)：README 所链接的模型页面。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Ollama 评测](/zh/power-local-llm/ollama-review)：一条命令即可使用、模型库庞大的本地运行时。',
          '[llama.cpp 详解](/zh/power-local-llm/llama-cpp-explained)：众多本地工具背后的 C++ 推理引擎。',
          '[KoboldCpp 评测](/zh/power-local-llm/koboldcpp-review)：内置网页界面的单文件 llama.cpp 封装。',
          '[Lucebox 评测](/zh/power-local-llm/lucebox-review)：针对特定消费级 GPU 手工调优的本地推理。',
          '[本地 LLM 运行与服务工具对比](/zh/power-local-llm/local-llm-run-serve-compared)：运行时与服务器的分类对比。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Overview & Reference',
    heroImage: '/images/strata-review-hero-ko.webp',
    title: 'Strata 리뷰: 게이밍 PC에서 125B 파라미터 오픈 모델 실행',
    seoTitle: 'Strata 리뷰: 게이밍 PC에서 125B 모델 실행',
    intro:
      'Strata는 MIT 라이선스의 엔진, 데스크톱 앱, Terminal 도구로, README에 따르면 그래픽 메모리, RAM, SSD가 작업을 나누어 맡는 방식으로 1,250억 파라미터 오픈 모델인 Qwen3.8-Flash-Next를 게이밍 PC에서 실행합니다. 이 리뷰는 2026년 10월 23일에 확인한 프로젝트의 README, 안전 안내, v0.2.2 릴리스 페이지를 기준으로 합니다.',
    metaDescription:
      'Strata 리뷰: 게이밍 PC에서 125B 오픈 모델을 실행하는 무료 MIT 라이선스 앱. 요구 사양, 설치 파일, 로컬 API, 확인하지 못한 주장을 정리했습니다.',
    twitterDescription:
      'Strata 리뷰: 게이밍 PC에서 125B 오픈 모델을 실행하고 OpenAI·Anthropic 방식 로컬 API를 제공하는 MIT 앱. 요구 사양, 주장, 남은 의문점을 정리했습니다.',
    audience:
      '게이밍 PC나 고용량 메모리 Mac을 가진 독자 가운데 Strata에 무엇이 필요한지, 비용은 얼마인지, 어떻게 설치하는지, 속도와 개인정보 보호에 관한 어떤 주장을 출처로 확인할 수 없는지 알고 싶은 분.',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Strata 리뷰',
    targetKeywords: [
      'strata 리뷰',
      '게이밍 pc 125b 모델 실행',
      'qwen3.8-flash-next 로컬',
      'strata 추론 엔진',
      '로컬 openai 호환 api',
      'strata ollama 비교',
    ],
    current_hardware_mentioned: ['NVIDIA RTX GPU', 'AMD Radeon GPU', 'Intel Arc GPU', 'Mac with Apple Silicon', 'Ryzen AI Max'],
    leadAnswerBlock:
      '**Strata(0.2.2 버전, 2026년 10월 21일 출시)는 README에 따르면 1,250억 파라미터 오픈 모델 하나를 일반 게이밍 PC에서 실행하고 로컬 API로 다른 프로그램에 제공하는 무료 MIT 라이선스 앱이자 Terminal 도구입니다.** 이 리뷰의 속도, 품질, 개인정보 보호에 관한 모든 설명은 프로젝트 측에서 나온 것이며, PromptQuorum은 설치하거나 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Strata를 실행하려면 무엇이 필요한가요?',
        answer:
          'README에 따르면 RAM과 그래픽 메모리를 합쳐 최소 32 GB, 여유 디스크 약 80 GB, 지원되는 그래픽카드 또는 Apple Silicon Mac이 필요합니다. 앱 자체는 무료입니다.',
        bullets: [
          'NVIDIA RTX 20~50 시리즈, AMD Radeon RX 6800 이상, Intel Arc, Apple Silicon Mac을 지원합니다.',
          'Claude Code, Codex CLI, OpenCode 같은 도구를 위해 OpenAI 호환 API와 Anthropic 호환 API를 제공합니다.',
          '이미지를 읽을 수 있으며, 이를 지원하는 모델에서는 이미지 리더가 기본으로 켜져 있습니다.',
          '더블클릭으로 설치하는 앱이나 한 줄짜리 Terminal 명령으로 설치합니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Strata란?', anchor: 'what-is-strata' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '필요한 사양', anchor: 'requirements' },
      { label: '요금', anchor: 'pricing' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '메모리별 모델 크기', anchor: 'model-sizes' },
      { label: '속도: 프로젝트가 제시한 수치', anchor: 'speed' },
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
            text: 'Strata는 1,250억 파라미터 오픈 모델 하나를 게이밍 PC에서 실행하는 MIT 라이선스의 엔진 겸 데스크톱 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '모델을 그래픽카드, RAM, SSD에 나누어 올린 뒤 채팅 창이나 다른 도구가 호출할 수 있는 로컬 API로 답변합니다.',
          },
        ],
        items: [
          '유지보수: 저장소는 2026년 9월 24일에 만들어졌고 0.2.0-beta, 0.2.1, 0.2.2 버전이 2026년 10월 19일부터 21일 사이에 나왔습니다. 활발하지만 생긴 지 한 달밖에 되지 않았으며, 방치 프로젝트 경고는 해당되지 않습니다.',
          '라이선스: Strata 자체는 MIT이며, 각 모델 파일에는 자체 라이선스가 있습니다.',
          '비용: 무료이며 계정이 필요 없고, 후원은 자발적입니다.',
          '설치 프로그램: README에 따르면 Windows 설치 프로그램은 아직 코드 서명이 되어 있지 않습니다.',
          '근거: 2026년 10월 23일에 읽은 README, 안전 안내, 릴리스 페이지이며 직접 테스트는 하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 Strata를 설치, 테스트, 벤치마크하지 않았습니다. 아래의 속도, 품질, 개인정보 보호에 관한 설명은 프로젝트 측의 주장입니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-strata',
        title: 'Strata란?',
        content: [
          '**Strata는 모델 하나, 곧 Qwen3.8-Flash-Next를 중심으로 만든 추론 엔진, 데스크톱 앱, Terminal 클라이언트이며, README는 이 모델을 보통은 서버가 필요한 1,250억 파라미터 모델로 설명합니다.** Qwen 팀이 [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)에 모델을 공개했고, GitHub 계정 Niko1221로 공개된 Strata가 이를 일반 소비자용 하드웨어에서 실행합니다.',
          'README는 이 방식을 도서관에 비유해 설명합니다. 모델은 24,576명의 작은 전문가("experts") 팀이고 단어 하나를 만드는 데는 그중 10명만 필요합니다. 그래픽카드는 가장 자주 쓰이는 전문가를 담고, RAM은 전체를 담으며, SSD는 29 GB 조회 테이블을 담습니다. 작은 보조 모델이 다음 몇 단어를 미리 추측하고 큰 모델이 이를 한 번에 검증하는데, 프로젝트는 이렇게 하면 같은 답을 1.6배에서 1.8배 빠르게 얻는다고 밝힙니다. 엔진은 [llama.cpp](https://github.com/ggml-org/llama.cpp)의 일부를 사용하며, 코드는 [Niko1221/Strata](https://github.com/Niko1221/Strata)에 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Strata는 GitHub의 Releases 페이지에서 내려받으며, 시스템과 그래픽카드별로 설치 파일이 따로 있습니다.**',
        ],
        columns: ['시스템과 그래픽카드', '다운로드'],
        rows: [
          { '시스템과 그래픽카드': 'Windows, NVIDIA(드라이버 580+)', '다운로드': '[windows-cuda13.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda13.exe)' },
          { '시스템과 그래픽카드': 'Windows, 이전 NVIDIA 또는 드라이버', '다운로드': '[windows-cuda12.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-cuda12.exe)' },
          { '시스템과 그래픽카드': 'Windows, AMD RX 9000 / R9700', '다운로드': '[windows-hip.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip.exe)' },
          { '시스템과 그래픽카드': 'Windows, AMD RX 7000 / Strix Halo', '다운로드': '[windows-hip-rdna3.exe](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-windows-hip-rdna3.exe)' },
          { '시스템과 그래픽카드': 'Linux, NVIDIA(드라이버 580+)', '다운로드': '[linux-nvidia-cuda13.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda13.AppImage)' },
          { '시스템과 그래픽카드': 'Linux, 이전 NVIDIA 또는 드라이버', '다운로드': '[linux-nvidia-cuda12.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-nvidia-cuda12.AppImage)' },
          { '시스템과 그래픽카드': 'Linux, AMD RX 9000 / R9700', '다운로드': '[linux-amd-rx9070.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx9070.AppImage)' },
          { '시스템과 그래픽카드': 'Linux, AMD RX 7000', '다운로드': '[linux-amd-rx7900.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-rx7900.AppImage)' },
          { '시스템과 그래픽카드': 'Linux, Strix Halo', '다운로드': '[linux-amd-strixhalo.AppImage](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-linux-amd-strixhalo.AppImage)' },
          { '시스템과 그래픽카드': 'Mac, Apple Silicon(macOS 15+)', '다운로드': '[mac.dmg](https://github.com/Niko1221/Strata/releases/download/v0.2.2/Strata-0.2.2-mac.dmg)' },
          { '시스템과 그래픽카드': 'Terminal, Linux 및 Mac', '다운로드': '[install.sh](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.sh)(README의 한 줄 명령)' },
          { '시스템과 그래픽카드': 'Terminal, Windows', '다운로드': '[install.ps1](https://github.com/Niko1221/Strata/releases/download/v0.2.2/install.ps1)(README의 한 줄 명령)' },
          { '시스템과 그래픽카드': '소스 코드', '다운로드': '[github.com/Niko1221/Strata](https://github.com/Niko1221/Strata)' },
          { '시스템과 그래픽카드': '안전 및 개인정보 안내', '다운로드': '[docs/SAFETY.md](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)' },
        ],
        note: '검토한 버전: 0.2.2(엔진 0.1.47). GitHub 릴리스 페이지에 따르면 2026년 10월 21일에 공개되었으며, 확인 시점의 최신 업스트림 업데이트입니다. 별도의 제품 웹사이트는 찾지 못했습니다. 저장소의 홈페이지 항목과 관리자의 프로필 링크가 비어 있고, 웹 검색에서도 저장소와 제3자 글만 나왔습니다. README에 따르면 Windows 설치 프로그램은 코드 서명이 되어 있지 않아 Windows에서 「Windows protected your PC」 경고가 표시될 수 있으며, Linux AppImage에는 FUSE 2가 필요합니다. RX 6000 카드에는 전용 설치 파일이 없고, README는 해당 엔진을 실제 RX 6000 카드에서 아직 테스트하지 않았다고 밝힙니다.',
      },
      requirements: {
        id: 'requirements',
        title: '필요한 사양',
        content: [
          '**Strata에는 RAM과 그래픽 메모리(VRAM)를 합쳐 최소 32 GB, 여유 디스크 약 80 GB, 최신 그래픽 드라이버, 그리고 Windows 10/11, Linux 또는 macOS 15 이상이 필요합니다.** Mac이나 Ryzen AI Max에서는 통합 메모리가 둘 모두로 계산됩니다.',
        ],
        columns: ['컴퓨터', 'README 기준 지원'],
        rows: [
          { '컴퓨터': 'NVIDIA', 'README 기준 지원': 'GeForce RTX 20, 30, 40, 50 시리즈, 12 GB 이상' },
          { '컴퓨터': 'AMD', 'README 기준 지원': 'Radeon RX 6800 이상, Radeon AI PRO R9700, 12 GB 이상' },
          { '컴퓨터': 'Intel', 'README 기준 지원': 'Arc 카드, 가장 작은 모델만 Arc A750(Linux)에서 테스트됨' },
          { '컴퓨터': 'Apple Silicon', 'README 기준 지원': 'M1 이상, macOS 15 이상, Intel Mac은 실행 불가' },
          { '컴퓨터': 'Ryzen AI Max (Strix Halo)', 'README 기준 지원': '통합 메모리 시스템, Windows와 Linux용 전용 설치 파일' },
        ],
        note: 'README에 따르면 같은 제조사의 카드 두세 장이 모델 하나를 나누어 맡을 수 있으며, Strata는 모델을 NVIDIA와 AMD 카드에 걸쳐 나누지 않습니다. 이전 세대 카드와 프로세서에 대해서는 저장소에 별도의 실험적 페이지가 있습니다.',
      },
      pricing: {
        id: 'pricing',
        title: '요금',
        content: [
          '**Strata는 무료이며, README는 MIT 라이선스, 계정 없음, 클라우드 없음을 명시합니다.**',
        ],
        columns: ['항목', '비용(USD)'],
        rows: [
          { '항목': '앱, Terminal, 엔진', '비용(USD)': '$0(MIT 라이선스)' },
          { '항목': '모델 파일', '비용(USD)': '표기된 가격 없음, 자체 라이선스 적용' },
          { '항목': '프로젝트 후원', '비용(USD)': '선택 사항, [Buy Me a Coffee](https://buymeacoffee.com/strataengine)' },
        ],
        note: '2026년 10월 23일에 README에서 확인한 내용입니다. 스폰서는 관리자의 [GitHub 프로필](https://github.com/Niko1221)을 통해 연락해 달라고 안내합니다. 실제 비용은 모델 다운로드이며, README 기준 약 40~70 GB입니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 README의 「Option A: the Strata app」를 따른 것이며 PromptQuorum이 직접 실행하지는 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '내 PC를 요구 사양과 비교',
            whyItMatters: '다운로드하기 전에 메모리, 여유 디스크, 그래픽카드를 위 표와 비교해 확인합니다.',
          },
          {
            title: '내 시스템과 카드에 맞는 설치 파일 다운로드',
            whyItMatters: '입수 방법 표에서 맞는 파일을 고릅니다. Terminal 사용자는 한 줄 스크립트를 실행한 뒤 `strata launch`로 Strata를 시작할 수 있습니다.',
          },
          {
            title: '설치하고 앱이 PC를 읽도록 하기',
            whyItMatters: '첫 화면에서 PC에 맞는 모델을 추천하며, 설치를 누르면 됩니다. 모델 다운로드는 용량이 크고, 중단되면 멈춘 지점부터 이어집니다.',
          },
          {
            title: '첫 로딩이 끝날 때까지 기다리기',
            whyItMatters: 'README에 따르면 모델이 RAM에 올라가는 동안 1~3분 정도 PC가 느려지거나 응답하지 않을 수 있으며, 처음이 가장 오래 걸립니다. 창을 닫지 마십시오.',
          },
          {
            title: '채팅하거나 다른 도구 연결',
            whyItMatters: '앱의 Chat 페이지를 쓰거나, `strata connect`를 실행해 OpenCode, Codex CLI, Claude Code 등의 설정을 출력합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 README나 프로젝트 문서에서 확인한 내용입니다.**',
        ],
        items: [
          '**로컬 API.** 서버는 OpenAI 호환 API, 같은 포트의 Anthropic 방식 API, Codex CLI용 OpenAI Responses API를 제공하며, `strata connect`는 OpenCode, Codex CLI, Claude Code, oh-my-pi, pi, Hermes Agent, OpenClaw의 설정을 출력합니다.',
          '**이미지.** 이미지를 읽을 수 있는 모델에서는 이미지 입력이 기본으로 켜져 있으며, 그래픽카드 메모리가 24 GB 미만이면 이미지 리더는 프로세서에서 실행됩니다.',
          '**채팅 앱.** 앱에는 Chat, 모델·GPU·CPU·RAM을 보여 주는 Monitor, Models 페이지, Settings가 있으며, Manual 모드에서는 파일을 바꾸거나 명령을 실행하기 전에 채팅이 먼저 확인을 요청합니다.',
          '**여러 카드.** 그래픽카드마다 Main, Helper, Off를 지정할 수 있고, 채팅별로 사고 수준(off, low, medium, high)을 고를 수 있습니다.',
          '**MCP.** AI 도구가 MCP 서버를 통해 Strata를 설치, 시작, 중지할 수 있습니다.',
          '**Terminal.** `strata launch`는 모델, 컨텍스트, 이미지, 접근 권한을 한 번에 하나씩 묻고, 플래그를 쓰면 스크립트와 AI 에이전트가 묻지 않고 실행할 수 있습니다.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: '메모리별 모델 크기',
        content: [
          '**Strata는 모델 하나를 여러 압축 크기로 제공하며, README는 작은 크기가 더 빠르고 큰 크기가 조금 더 똑똑하다고 밝힙니다.**',
        ],
        columns: ['메모리(RAM + VRAM)', 'README 권장 크기'],
        rows: [
          { '메모리(RAM + VRAM)': '32 GB', 'README 권장 크기': 'Gyro-S, 코드용은 Coder' },
          { '메모리(RAM + VRAM)': '40 GB', 'README 권장 크기': 'Swift 1.5 IQ2_XS 또는 Gyro-M' },
          { '메모리(RAM + VRAM)': '48 GB', 'README 권장 크기': 'IQ3_XXS: 더 느리지만 더 좋음' },
          { '메모리(RAM + VRAM)': '64 GB', 'README 권장 크기': 'IQ3_S: 가장 느리지만 가장 좋음' },
          { '메모리(RAM + VRAM)': '96 GB 이상', 'README 권장 크기': 'Unsloth UD-IQ4_XS부터 Q8_0까지' },
        ],
        note: 'README는 RAM과 VRAM을 합한 값에서 시스템이 따로 확보하는 5 GB를 뺀 값을 기준으로 합니다. Gyro-S는 58.5 GB 다운로드에 그 메모리 27.6 GB가 필요하며, README에 따르면 IQ2_XS보다 품질이 낮습니다. Gyro-M은 92 GB 다운로드에 35 GB가 필요합니다. README는 IQ3_S가 공개된 테스트에서 전체 모델과 동등하다고 밝히지만, PromptQuorum은 그 테스트를 확인하지 않았습니다.',
      },
      speed: {
        id: 'speed',
        title: '속도: 프로젝트가 제시한 수치',
        content: [
          '**README는 RTX 5070에서 가장 빠른 크기가 초당 토큰 94개, IQ3_S가 53개라고 밝히며, PromptQuorum은 어떤 수치도 재현하지 않았습니다.** 토큰 하나는 단어의 약 4분의 3입니다.',
        ],
        columns: ['크기와 카드', '응답(tok/s)', '프롬프트(tok/s)'],
        rows: [
          { '크기와 카드': 'Q2_0, RTX 5070 (12 GB)', '응답(tok/s)': '94', '프롬프트(tok/s)': '2,650' },
          { '크기와 카드': 'IQ3_S, RTX 5070 (12 GB)', '응답(tok/s)': '53', '프롬프트(tok/s)': '1,620' },
          { '크기와 카드': 'Coder, RTX 5070 (12 GB)', '응답(tok/s)': '55', '프롬프트(tok/s)': '2,180' },
          { '크기와 카드': 'Q2_0, RX 9070 XT (16 GB)', '응답(tok/s)': '60', '프롬프트(tok/s)': '1,160' },
        ],
        note: '출처: README의 「How fast is it?」 표이며, 프로젝트가 Ryzen 5 7600과 RAM 64 GB(RTX 5070), Ryzen 9 3900X와 RAM 47 GB(RX 9070 XT)에서 측정한 값입니다. README는 또한 Strata가 채팅의 첫 메시지를 전부 읽는 데 토큰 30,000개당 약 1분이 걸리고 이후 메시지는 몇 초 만에 시작된다고 덧붙입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 네트워크 사용',
        content: [
          '**Strata의 안전 안내에 따르면 채팅, 프롬프트, 파일, 이미지, 모델은 내 PC에 남고, 원격 측정과 계정이 없으며, 모델을 시작하거나 실행할 때 아무것도 다운로드하지 않습니다.** 안내는 또한 모델을 내려받은 뒤에는 인터넷 없이 실행되며, API 키로 다른 기기에 접근을 허용하지 않는 한 서버는 내 PC에서만 수신한다고 덧붙입니다.',
          '같은 안내에 따르면 인터넷은 사용자가 요청할 때만 쓰입니다. Hugging Face와 GitHub Releases에서 받는 모델, 엔진, 앱 업데이트 다운로드, 에이전트의 웹 검색(DuckDuckGo, 두 번째 출처는 Bing)과 웹 페이지 접근, 사용자가 추가한 외부 모델 서비스, 켜 두었을 때의 Cloudflare 터널이 여기에 해당합니다. 웹 검색은 검색어를 내 PC 밖으로 보냅니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '안내는 이 버전의 코드를 읽고 작성했다고 밝히지만, 이는 관리자의 설명입니다. PromptQuorum은 코드나 네트워크 트래픽을 감사하지 않았습니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**최신 게이밍 PC나 고용량 메모리 Mac을 가진 분.** 서버를 빌리지 않고 매우 큰 오픈 모델 하나를 쓰고 싶은 경우입니다.',
          '**Claude Code, Codex CLI, OpenCode를 쓰는 개발자.** 로컬 OpenAI 방식 또는 Anthropic 방식 엔드포인트가 필요한 경우입니다.',
          '**채팅을 내 컴퓨터에 보관하고 싶은 분.** 프로젝트의 안전 안내에 따른 설명입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실사용 품질과 속도.** PromptQuorum은 Strata를 실행하지 않았으므로 답변 품질, 속도 수치, 전체 모델과 동등하다는 주장은 모두 프로젝트 측의 설명입니다.',
          '**개인정보 보호와 다운로드 검증.** 원격 측정 없음, 오프라인 실행, 서명된 업데이트라는 설명은 코드나 네트워크 트래픽과 대조하지 않았습니다.',
          '**성숙도.** 저장소는 2026년 9월 24일에 만들어졌고 2026년 10월 23일 기준 열린 이슈가 697건이었습니다. Mac과 Intel Arc 경로는 0.2.2에서 새로 추가되었으며, 프로젝트가 밝힌 테스트 완료 기기도 많지 않습니다.',
          '**모델 선택.** 확인한 페이지는 크기가 여러 가지인 모델 하나와 이름이 언급된 몇 가지 대안만 설명할 뿐, 범용 모델 라이브러리가 아닙니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          { '앱': '[Ollama](/ko/power-local-llm/ollama-review)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이': '명령 한 줄로 설치하고 모델 라이브러리가 방대하며 특정 모델에 묶여 있지 않음' },
          { '앱': '[llama.cpp](/ko/power-local-llm/llama-cpp-explained)', '플랫폼': 'Windows, macOS, Linux', '가격 / 라이선스': '무료 / MIT', '핵심 차이': 'Strata의 일부를 포함해 많은 도구의 기반이 되는 C++ 엔진으로, 명령줄 중심' },
          { '앱': '[KoboldCpp](/ko/power-local-llm/koboldcpp-review)', '플랫폼': 'Windows, Linux, macOS', '가격 / 라이선스': '무료 / AGPL 3.0', '핵심 차이': '웹 UI를 내장한 가벼운 llama.cpp 래퍼' },
          { '앱': '[Lucebox](/ko/power-local-llm/lucebox-review)', '플랫폼': 'Linux', '가격 / 라이선스': '무료 / Apache-2.0', '핵심 차이': '특정 소비자용 GPU를 위해 직접 튜닝한 커널과 추측 디코딩' },
        ],
        note: '경쟁 제품의 세부 정보는 자주 바뀝니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Strata는 그래픽카드 없이도 작동하나요?',
            a: 'README에 따르면 CUDA, HIP, SYCL 엔진은 시작하는 데 그래픽카드가 필요하므로 PC에 지원되는 카드가 있어야 합니다. Mac 엔진은 별도의 카드 없이 실행할 수 있습니다.',
          },
          {
            q: 'Strata를 Claude Code와 함께 쓸 수 있나요?',
            a: 'README에 따르면 가능하며, ANTHROPIC_BASE_URL을 로컬 주소로 설정해 Anthropic 방식 API로 연결합니다. 답변하는 모델은 Claude 모델이 아니라 Qwen3.8-Flash-Next입니다.',
          },
          {
            q: '휴대폰이나 다른 PC에서 접속할 수 있나요?',
            a: 'README는 `strata launch --access lan`을 안내하며, 이 명령은 기본으로 API 키를 만듭니다. `--no-api-key`는 키를 생략하고 경고를 출력합니다.',
          },
          {
            q: 'Windows 설치 프로그램을 실행해도 안전한가요?',
            a: 'README에 따르면 아직 코드 서명이 되어 있지 않으며, Terminal 설치 프로그램은 SHA-256 해시를 확인합니다. PromptQuorum은 두 설명 모두 검증하지 않았습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Strata는 README에 따르면 1,250억 파라미터 오픈 모델을 게이밍 PC에서 쓸 수 있게 하고 OpenAI 방식과 Anthropic 방식 API로 제공하는 무료 MIT 라이선스 앱이자 Terminal 도구이며, 이번 확인 직전 한 주에 세 번 릴리스되었고 Windows, Linux, Apple Silicon Mac에서 더블클릭으로 설치됩니다. 반면 속도, 품질, 개인정보 보호에 관한 모든 설명은 프로젝트 측에서 나온 것이고, 저장소는 생긴 지 약 한 달이며, Windows 설치 프로그램은 코드 서명이 되어 있지 않고, 모델 라이브러리가 아니라 모델 하나를 중심으로 만들어졌습니다. 합산 메모리가 충분하고 채팅이나 코딩 에이전트에 그 모델을 쓰고 싶은 분께 적합하며, 다양한 모델과 더 긴 이력을 원한다면 [Ollama](/ko/power-local-llm/ollama-review)나 [llama.cpp](/ko/power-local-llm/llama-cpp-explained)와 비교해 볼 수 있습니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 Strata](https://github.com/Niko1221/Strata) — README, MIT 라이선스, 요구 사양, 설치 옵션, 속도 표, 크레딧. 2026년 10월 23일 확인.',
          '[Strata v0.2.2 릴리스](https://github.com/Niko1221/Strata/releases/tag/v0.2.2) — 릴리스 날짜, 릴리스 노트, 설치 파일 목록.',
          '[Strata 안전 안내](https://github.com/Niko1221/Strata/blob/main/docs/SAFETY.md)와 [Mac 가이드](https://github.com/Niko1221/Strata/blob/main/docs/MAC.md) — 데이터 처리, 외부 연결, Mac 제한 사항.',
          '[Hugging Face의 Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — README가 링크한 모델 페이지.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Ollama 리뷰](/ko/power-local-llm/ollama-review) — 모델 라이브러리가 방대한 명령 한 줄짜리 로컬 런타임.',
          '[llama.cpp 설명](/ko/power-local-llm/llama-cpp-explained) — 많은 로컬 도구의 기반이 되는 C++ 추론 엔진.',
          '[KoboldCpp 리뷰](/ko/power-local-llm/koboldcpp-review) — 웹 UI를 내장한 단일 파일 llama.cpp 래퍼.',
          '[Lucebox 리뷰](/ko/power-local-llm/lucebox-review) — 특정 소비자용 GPU를 위해 직접 튜닝한 로컬 추론.',
          '[로컬 LLM 실행·서빙 도구 비교](/ko/power-local-llm/local-llm-run-serve-compared) — 런타임과 서버 카테고리 비교.',
        ],
      },
    },
  },
}
