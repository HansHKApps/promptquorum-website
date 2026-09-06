// RikkaHub Review: Open-Source, AGPL-3.0 Multi-Provider AI Chat Client for Android
// Slug: rikkahub-review
// Companion to: pocketpal-ai-review, private-llm-review, best-local-llm-apps-android-2026,
// best-local-llm-apps-iphone-2026, mobile-llm-models-phi4-gemma-smollm
//
// FACT CHECK NOTE (2026-09-06): RikkaHub (github.com/rikkahub/rikkahub) is a multi-provider
// CLOUD API chat client. It does NOT run models on-device — confirmed via full repo tree
// search (no llama.cpp / MLC / LiteRT-LM module present), README, and GitHub API metadata.
// It supports connecting to self-hosted OpenAI-compatible endpoints (Ollama, LM Studio) on
// the user's own network, which is the article's honest framing of its "local" angle.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/rikkahub-review-hero-en.webp',
    title: 'RikkaHub Review (2026): Multi-Provider AI Chat for Android',
    seoTitle: 'RikkaHub Review 2026: Free Open-Source Android AI Client',
    intro:
      'RikkaHub is a free, open-source Android app that lets you chat with cloud AI providers — OpenAI, Google Gemini, Anthropic, and any OpenAI-compatible endpoint — from one interface using your own API keys. It does not run language models on the phone itself; it is a client, not an on-device inference engine, though it can connect to a self-hosted Ollama or LM Studio server on your own network through the same custom-endpoint field. Built primarily by developer re-ovo and now maintained under the [rikkahub GitHub organization](https://github.com/rikkahub/rikkahub), the project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0) and has accumulated over 7,400 stars since its repository was created in March 2025. This review covers exactly what RikkaHub does and does not run locally, its real feature set, pricing, and who should — and should not — install it instead of an on-device app like PocketPal AI or Private LLM.',
    metaDescription:
      'RikkaHub review: a free, open-source Android app for chatting with cloud AI providers via your own API keys. Does it run models locally? License, setup, and verdict.',
    twitterDescription:
      'RikkaHub review 2026: the free, AGPL-3.0 Android app for switching between OpenAI, Gemini, Claude, and self-hosted API endpoints. It does not run models on-device — here is what it actually does.',
    audience:
      'Android users who already have API keys for cloud AI providers, or who self-host Ollama or LM Studio and want a mobile front end for it.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RikkaHub review',
    targetKeywords: [
      'rikkahub review',
      'rikkahub android',
      'rikkahub local llm',
      'rikkahub vs pocketpal ai',
      'is rikkahub free',
      'rikkahub license',
      'android ai chat client multiple providers',
      'connect ollama to android app',
    ],
    current_models_mentioned: ['OpenAI GPT models', 'Google Gemini', 'Anthropic Claude'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**RikkaHub does not run AI models on your phone — it is a free, open-source (AGPL-3.0) Android client that connects to cloud AI providers using your own API keys, and can optionally connect to a self-hosted Ollama or LM Studio server over your own network.** Built primarily by developer re-ovo and hosted on [GitHub](https://github.com/rikkahub/rikkahub) (over 7,400 stars at review time), it supports any OpenAI, Google, or Anthropic-compatible API endpoint through a single custom API/URL/model configuration screen. The app is entirely free to download and use; the only ongoing cost is whatever the AI provider you connect it to charges for API usage.',
    quickAnswerTop: {
      en: {
        question: 'Does RikkaHub run AI models locally, and is it worth installing?',
        answer:
          'No — RikkaHub does not include an on-device inference engine, so it cannot run a language model directly on your phone. It is worth installing if you already have API keys for OpenAI, Google Gemini, Anthropic, or a compatible provider and want one polished Android app to switch between them, or if you self-host Ollama or LM Studio and want a mobile front end for your own server. It is not the right choice if you specifically want a model running on the device itself with no network calls — for that, use PocketPal AI or Private LLM instead.',
        bullets: [
          'Free and open source under the AGPL-3.0 license; source code is public on [GitHub](https://github.com/rikkahub/rikkahub).',
          'A multi-provider client, not an on-device runtime — you bring your own API key for OpenAI, Google Gemini, Anthropic, or any OpenAI-compatible service.',
          'Can connect to a self-hosted Ollama or LM Studio server on your own network via its custom API/URL field — the model still runs on that server, not the phone.',
          'Android only, no iOS release; available via the [official website](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub), and direct APK download from [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'Built primarily by one developer (GitHub: [re-ovo](https://github.com/re-ovo)) and now maintained under the rikkahub organization, with over 7,400 stars and near-daily point releases at review time.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is RikkaHub?', anchor: 'what-is-rikkahub' },
      { label: 'Does RikkaHub Run AI Models Locally?', anchor: 'does-rikkahub-run-models-locally' },
      { label: 'Who Built RikkaHub?', anchor: 'history-and-developer' },
      { label: 'How to Get Started with RikkaHub', anchor: 'getting-started' },
      { label: 'Which Providers Does RikkaHub Support?', anchor: 'providers-supported' },
      { label: 'Is RikkaHub Available on iPhone?', anchor: 'platform-availability' },
      { label: 'How Much Does RikkaHub Cost?', anchor: 'pricing' },
      { label: 'What Features Does RikkaHub Have?', anchor: 'key-features' },
      { label: 'Who Should Use RikkaHub', anchor: 'who-should-use' },
      { label: 'Who Should Not Use RikkaHub', anchor: 'who-should-not-use' },
      { label: 'A Note on RikkaHub Forks', anchor: 'fork-warning' },
      { label: 'RikkaHub vs. Alternatives', anchor: 'vs-alternatives' },
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
            text: 'RikkaHub is a free, open-source (AGPL-3.0) Android app that lets you chat with OpenAI, Google Gemini, Anthropic, and other OpenAI-compatible AI providers using your own API keys — it does not run models on the device itself.',
          },
          {
            type: 'plain-terms',
            text: 'It is a remote control for AI models you already pay for, or for a server you run yourself, not an app that puts a model directly on your phone. If you want inference that happens entirely on the device with no network calls, this is not that app — see PocketPal AI or Private LLM instead.',
          },
        ],
        items: [
          'Free and open source (AGPL-3.0); source code and issue tracker are public on [GitHub](https://github.com/rikkahub/rikkahub).',
          'A multi-provider chat client, not an on-device inference engine — no llama.cpp, MLC, or LiteRT-LM component exists in the codebase.',
          'Requires your own API key for OpenAI, Google Gemini, Anthropic, or any OpenAI-compatible provider; can also target a self-hosted Ollama or LM Studio server via a custom URL.',
          'Built primarily by developer re-ovo and now maintained under the rikkahub GitHub organization; over 7,400 stars and 640+ forks at review time.',
          'Android only — available via the [official site](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub), and [GitHub Releases](https://github.com/rikkahub/rikkahub/releases) APK downloads.',
          'The app itself is free with no in-app purchases found at review time; ongoing cost depends entirely on which AI provider you connect it to.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the public [GitHub repository](https://github.com/rikkahub/rikkahub) (source tree, README, releases, and GitHub API metadata), the project website, and the Google Play listing, checked in September 2026. PromptQuorum has not conducted independent hands-on benchmarking of RikkaHub for this review — the local-vs-cloud architecture claims below are based on inspecting the public source tree and documentation, not a black-box test.',
          },
        ],
      },
      overview: {
        id: 'what-is-rikkahub',
        title: 'What Is RikkaHub?',
        content: [
          '**RikkaHub is a native Android chat app for switching between multiple AI providers from one interface, using API keys you supply yourself.** Instead of installing a separate app for each vendor — one for OpenAI, one for Google Gemini, one for Anthropic Claude — RikkaHub gives you a single chat screen with a configurable list of "providers," each pointing at a base URL, an API key, and a model name.',
          'The app is built natively in Kotlin with Jetpack Compose, per its own [technology stack documentation](https://github.com/rikkahub/rikkahub/blob/master/README.md), and supports any endpoint that speaks the OpenAI, Google, or Anthropic API formats — which in practice includes the official providers themselves, third-party API relay/proxy services that resell access to multiple vendors\' models, and self-hosted OpenAI-compatible servers such as Ollama or LM Studio.',
        ],
        note: 'RikkaHub is a chat client, not a model-hosting app: the language model itself always runs somewhere other than the RikkaHub process — on the provider\'s cloud servers, or on a computer you control if you point it at a self-hosted endpoint.',
      },
      localVsCloud: {
        id: 'does-rikkahub-run-models-locally',
        title: 'Does RikkaHub Run AI Models Locally?',
        content: [
          '**No. RikkaHub does not include an on-device inference engine and cannot run a language model directly on your phone\'s CPU, GPU, or NPU.** It is a client: you configure an API key and endpoint for a provider, RikkaHub sends your messages to that endpoint over the network, and it displays the response it gets back.',
          'This is a meaningful distinction from mobile apps such as [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private LLM](/power-local-llm/private-llm-review), which bundle an inference engine (llama.cpp or a similar runtime) and run a downloaded model file directly using the device\'s own RAM and GPU/NPU, with no network connection required after the model is downloaded. RikkaHub\'s own [README](https://github.com/rikkahub/rikkahub) describes it plainly as "an Android APP that supports for multiple LLM providers" — the word "local" does not appear anywhere in its feature list, and a search of the full public source tree (1,900+ files, checked September 2026) turns up no llama.cpp, MLC, LiteRT, or LiteRT-LM component anywhere in the codebase.',
          'The closest RikkaHub gets to "local AI" is pointing its custom API/URL field at a server on your own network rather than a public cloud endpoint — for example, [Ollama](https://ollama.com) or [LM Studio](https://lmstudio.ai) running on a PC in the same house, exposing an OpenAI-compatible API. In that configuration the model still executes on the PC\'s hardware, not the phone\'s; RikkaHub is acting as a mobile front end for a server you control, which keeps your conversation data off third-party cloud infrastructure but is a materially different setup — and a different privacy and hardware story — from an app that runs the model on the device itself.',
        ],
        decisionBlock: {
          title: 'RikkaHub or an On-Device App?',
          localIf: [
            'You want inference happening on the phone itself, with zero network calls once a model is downloaded — use [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private LLM](/power-local-llm/private-llm-review) instead.',
            'You need the app to work with no network route available at all, including to a device on the same Wi-Fi — RikkaHub always needs to reach an API endpoint, even a local one.',
          ],
          cloudIf: [
            'You already have API access to OpenAI, Google Gemini, or Anthropic Claude and want one Android app to switch between them without juggling separate vendor apps.',
            'You self-host Ollama or LM Studio on a home server or PC and want a polished mobile chat interface for it over your own network.',
          ],
          quick: [
            'On-device inference, zero network ever needed: PocketPal AI or Private LLM.',
            'Bring-your-own-key client across many cloud providers: RikkaHub.',
            'Mobile front end for your own self-hosted Ollama/LM Studio server: RikkaHub, pointed at your server\'s local network address.',
          ],
        },
      },
      history: {
        id: 'history-and-developer',
        title: 'Who Built RikkaHub?',
        content: [
          '**RikkaHub was created primarily by a developer using the GitHub handle [re-ovo](https://github.com/re-ovo), who accounts for the large majority of commits in the project\'s history, and the repository is now hosted under the [rikkahub GitHub organization](https://github.com/rikkahub) rather than a personal account.** The repository itself was created on March 11, 2025, and has grown into an actively maintained project with contributions from a small group of additional developers beyond the primary maintainer.',
          'RikkaHub is explicit in its own [contribution guidelines](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) about being an opinionated project: pull requests adding new languages, adding new features, or containing large-scale AI-generated refactoring are rejected outright. The project accepts community sponsorship — its README lists paid sponsors including [aihubmix.com](https://aihubmix.com), an API relay service — and takes voluntary donations via [Patreon](https://patreon.com/rikkahub) and the Chinese platform 爱发电 (afdian.com).',
        ],
        items: [
          'Primary developer: GitHub user [re-ovo](https://github.com/re-ovo), who holds the large majority of commits in the project history.',
          'Repository created on March 11, 2025; now hosted under the [rikkahub organization](https://github.com/rikkahub) rather than a personal account.',
          'License: GNU Affero General Public License v3.0 (AGPL-3.0) — a copyleft license stricter than the MIT license used by some competing apps; it requires anyone who runs a modified version of the app as a network service to release their source changes.',
          'Over 7,400 GitHub stars and more than 640 forks at review time, with an active issue tracker (280+ open issues) and near-daily point releases.',
          'Explicitly rejects pull requests for new languages, new features, and large AI-generated refactors, per its own contribution guidelines — this is a deliberately opinionated project, not one seeking broad community feature contributions.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started with RikkaHub',
        content: [
          '**Getting RikkaHub working requires an existing API key from a provider — the app does not include any free or bundled AI access.** There is no on-device model to download in this flow; you are connecting the app to an account you already have, or to a server you already run.',
        ],
        numberedItems: [
          {
            title: 'Install the app',
            whyItMatters: 'Download RikkaHub from the [official website](https://rikka-ai.com/download) (recommended by the project) or [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub). Technical users can also sideload the APK directly from [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          },
          {
            title: 'Add a provider',
            whyItMatters: 'Open the provider settings and add a new entry: choose an API format (OpenAI, Google, or Anthropic-compatible), then enter the base URL, your API key, and the model name you want to use. This is where you would enter a cloud provider\'s details, an API relay service\'s details, or your self-hosted server\'s local network address.',
          },
          {
            title: 'Select the model and start chatting',
            whyItMatters: 'Once a provider is configured, pick it from the model selector and start a conversation. Every message is sent to the endpoint you configured — there is no offline mode once you leave the app\'s own settings screens.',
          },
          {
            title: 'Optional: connect tools and search',
            whyItMatters: 'Add an MCP (Model Context Protocol) server, or enter your own API key for a web-search provider such as Exa, Tavily, or Brave, to extend what the connected model can do mid-conversation. Both are opt-in and require credentials you supply yourself.',
          },
        ],
      },
      providersSupported: {
        id: 'providers-supported',
        title: 'Which Providers Does RikkaHub Support?',
        itemHeadings: true,
        columns: ['Provider type', 'Examples', 'What you need'],
        rows: [
          {
            'Provider type': 'OpenAI-compatible APIs',
            'Examples': 'OpenAI\'s own API, and any third-party service exposing the same request format',
            'What you need': 'An API key and the provider\'s base URL',
          },
          {
            'Provider type': 'Google-compatible APIs',
            'Examples': 'Google Gemini models',
            'What you need': 'A Google AI API key',
          },
          {
            'Provider type': 'Anthropic-compatible APIs',
            'Examples': 'Anthropic Claude models',
            'What you need': 'An Anthropic API key',
          },
          {
            'Provider type': 'API relay / proxy services',
            'Examples': 'Third-party services that resell access to multiple vendors\' models behind one key, such as the project\'s sponsor [aihubmix.com](https://aihubmix.com)',
            'What you need': 'The relay service\'s own API key and base URL, entered the same way as a direct provider',
          },
          {
            'Provider type': 'Self-hosted local servers',
            'Examples': 'Ollama or LM Studio running on your own PC or home server, exposed via its built-in OpenAI-compatible endpoint',
            'What you need': 'Your server\'s local network address (for example http://192.168.1.50:11434/v1) — no cloud API key required, but the model runs on that machine, not your phone',
          },
        ],
        note: 'RikkaHub does not bundle or resell access to any provider itself. Every connection — cloud or self-hosted — is configured with credentials or a network address you supply.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Is RikkaHub Available on iPhone?',
        itemHeadings: true,
        columns: ['Platform', 'Availability', 'Notes'],
        rows: [
          {
            'Platform': 'Android',
            'Availability': 'Available via the [official website](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub), and direct APK from [GitHub Releases](https://github.com/rikkahub/rikkahub/releases)',
            'Notes': 'The native app; this review covers this version.',
          },
          {
            'Platform': 'iPhone / iPad',
            'Availability': 'No native iOS app found at review time',
            'Notes': 'iPhone users who want a similar multi-provider client should look at a dedicated iOS app instead; RikkaHub does not currently publish one.',
          },
          {
            'Platform': 'Web / browser',
            'Availability': 'A companion web UI exists in the project\'s source repository',
            'Notes': 'Intended as a browser-based counterpart to the Android app rather than a hosted public service — running it requires setting it up yourself from the source.',
          },
          {
            'Platform': 'Desktop (Windows/macOS/Linux)',
            'Availability': 'A separate community project, rikkahub-desktop, exists but is not part of the official rikkahub/rikkahub repository',
            'Notes': 'Not maintained by the same core team; treat it as a third-party fork rather than an official release.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'How Much Does RikkaHub Cost?',
        content: [
          '**RikkaHub itself is free to download and free to use, with no subscription or in-app purchase found in the app or its documentation at review time.** The project accepts optional donations via [Patreon](https://patreon.com/rikkahub) and 爱发电 (afdian.com), and lists paid sponsors in its README, but neither is required to use the app.',
          'The real cost of using RikkaHub is whatever the AI provider you connect charges for API usage — OpenAI, Google Gemini, and Anthropic all bill per token for their APIs, and a self-hosted Ollama or LM Studio server has no per-message fee but requires hardware you already own or pay for separately. RikkaHub does not mark up, meter, or take a cut of any provider\'s API costs; it simply forwards your requests using the key you provided.',
        ],
        items: [
          '**The app:** Free, open source (AGPL-3.0), no subscription.',
          '**Cloud provider usage:** Billed directly by the provider (OpenAI, Google, Anthropic, or a relay service) according to their own pricing — RikkaHub does not add a markup.',
          '**Self-hosted server usage:** No per-message fee, but requires a PC or server capable of running Ollama or LM Studio, which is a separate hardware cost outside RikkaHub itself.',
          '**Optional donations:** Via Patreon or 爱发电, entirely voluntary and unrelated to app functionality.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'What Features Does RikkaHub Have?',
        content: [
          '**Beyond basic multi-provider chat, RikkaHub has accumulated a broad feature set typical of an actively developed, opinionated chat client, per its own [README](https://github.com/rikkahub/rikkahub/blob/master/README.md).** These include:',
        ],
        items: [
          '**Material You design and dark mode.** The interface follows Android\'s dynamic theming system.',
          '**Workspace.** A proot-based Linux agent environment bundled with the app — a sandboxed Linux shell an AI agent can use to run commands, distinct from any language-model inference.',
          '**MCP (Model Context Protocol) support.** The connected model can call tools exposed by an MCP server mid-conversation.',
          '**Multimodal input.** Accepts images, PDFs, and Word documents as chat attachments (support depends on the connected model\'s own capabilities).',
          '**Message branching.** Lets you explore alternative replies from the same point in a conversation rather than only linear history.',
          '**Search integrations.** Optional web search using your own API key for providers including Exa, Tavily, Zhipu, LinkUp, Brave, or Perplexity.',
          '**Markdown rendering.** Code syntax highlighting, LaTeX formulas, tables, and Mermaid diagram rendering in responses.',
          '**QR code import/export.** Provider configurations (including API keys) can be shared between devices via QR code — treat this like sharing a password, since it contains your credentials.',
          '**SillyTavern character card import.** Compatible with a common roleplay-persona file format used by other chat frontends.',
          '**Custom HTTP headers and request bodies.** Advanced users can modify the raw request sent to a provider, useful for providers with non-standard authentication or parameters.',
        ],
        note: 'Feature availability can vary by app version since the project ships near-daily point releases. Check the [GitHub releases page](https://github.com/rikkahub/rikkahub/releases) for what has shipped in your installed version.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use RikkaHub',
        items: [
          '**Users who already pay for cloud AI APIs and want one Android app for all of them.** If you have API keys for OpenAI, Google Gemini, and Anthropic Claude and are tired of switching between separate vendor apps, RikkaHub\'s single interface is a direct fit.',
          '**Users who self-host Ollama or LM Studio and want a mobile client for it.** RikkaHub\'s custom API/URL field works with any OpenAI-compatible server, including one running on your own home network.',
          '**Developers and technically curious users comfortable managing their own API keys.** There is no bundled AI access — every feature requires you to supply credentials yourself, which suits users who already understand how API billing works.',
          '**Users who want an actively maintained, frequently updated app.** The project ships near-daily point releases and has a large, active contributor base relative to similar Android chat clients.',
          '**Users who want tool-calling and agent features on top of a cloud model.** MCP support and the Workspace sandbox extend what a connected model can do beyond plain text chat, for users comfortable configuring these advanced features.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use RikkaHub',
        items: [
          '**Users who want AI running entirely on their device with no network connection.** RikkaHub always needs to reach an API endpoint, local or cloud; users who want a genuinely offline app should use [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Private LLM](/power-local-llm/private-llm-review) instead.',
          '**Users who do not already have an API key and do not want to manage one.** RikkaHub includes no free, bundled AI access — someone who wants to open an app and immediately chat without any setup or account should look at a curated app with built-in models instead.',
          '**iPhone or iPad users.** RikkaHub has no official iOS release at review time; Apple users should look at a dedicated iOS app such as Private LLM or Enclave AI.',
          '**Users who want the lowest possible technical setup burden.** Adding a provider requires entering an API format, base URL, key, and model name correctly — there is no one-tap "download and chat" flow the way there is with on-device apps.',
          '**Users specifically worried about the app modifying and redistributing without releasing source.** The AGPL-3.0 license is a strength for transparency, but it also means anyone forking RikkaHub and running a modified version as a network service is legally required to publish their changes — read the license itself if this affects a deployment you are planning.',
        ],
      },
      forkWarning: {
        id: 'fork-warning',
        title: 'A Note on RikkaHub Forks',
        content: [
          '**RikkaHub\'s own README explicitly warns that "there are many forked versions of RikkaHub" and that issues with forks are unrelated to the official project.** The project asks users "to use forks with caution to avoid privacy leaks or excessive permission requests" — a caution worth repeating here, since a forked app can request different permissions or send data differently than the official release, without the original developer\'s review or endorsement.',
          'Because API keys are entered directly into the app to configure a provider, installing an unofficial fork means trusting that fork\'s code with those credentials. This review covers only the official [rikkahub/rikkahub](https://github.com/rikkahub/rikkahub) project, distributed via its [official website](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) listing under the package name `me.rerere.rikkahub`, and its own GitHub Releases page.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'RikkaHub vs. Alternatives',
        itemHeadings: true,
        columns: ['App', 'License / cost', 'Platforms', 'Runs models locally?'],
        rows: [
          {
            'App': 'RikkaHub',
            'License / cost': 'Free, open source (AGPL-3.0)',
            'Platforms': 'Android',
            'Runs models locally?': 'No — cloud/self-hosted API client only; bring your own key or server',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'License / cost': 'Free, open source (MIT)',
            'Platforms': 'iPhone/iPad, Android',
            'Runs models locally?': 'Yes — downloads and runs GGUF models on-device via llama.cpp',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'License / cost': 'Paid, one-time purchase; closed source',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Runs models locally?': 'Yes — 140+ on-device models with OmniQuant and GPTQ quantization',
          },
          {
            'App': 'LLM Farm',
            'License / cost': 'Free, open source; delisted from the App Store at review time',
            'Platforms': 'iPhone/iPad, Mac (build from source)',
            'Runs models locally?': 'Yes — llama.cpp-based on-device inference, when built from its [GitHub source](https://github.com/guinmoon/LLMFarm)',
          },
          {
            'App': 'Layla',
            'License / cost': 'Freemium; closed source',
            'Platforms': 'Android',
            'Runs models locally?': 'Yes — GGUF, LiteRT-LM, and PTE model formats on-device; check [layla-network.ai](https://www.layla-network.ai) for current tier availability',
          },
          {
            'App': 'Maid',
            'License / cost': 'Free, open source',
            'Platforms': 'Android, Windows, macOS, Linux',
            'Runs models locally?': 'Yes for GGUF/llama.cpp models; can also connect to Ollama or a cloud provider remotely, per its [GitHub repository](https://github.com/Mobile-Artificial-Intelligence/maid)',
          },
          {
            'App': 'AnythingLLM Mobile',
            'License / cost': 'Free; open-source core project',
            'Platforms': 'Android (iOS planned)',
            'Runs models locally?': 'Positioned as on-device/local-first for chat history and document RAG, per its [GitHub repository](https://github.com/Mintplex-Labs/anythingllm-mobile); can also connect to cloud models',
          },
          {
            'App': 'Open WebUI',
            'License / cost': 'Free, open source',
            'Platforms': 'Self-hosted web app (any device with a browser)',
            'Runs models locally?': 'No — like RikkaHub, it is a front end you point at Ollama or another OpenAI-compatible endpoint; the closest architectural comparison to RikkaHub, though it targets desktop/self-hosting rather than a native mobile app, per its [GitHub repository](https://github.com/open-webui/open-webui)',
          },
        ],
        note: 'RikkaHub and Open WebUI are the two entries in this table that do not run models on-device — both are front ends for a cloud API or a self-hosted server you already run. The other apps listed bundle an on-device inference engine, which is the core architectural difference to understand before choosing between them.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does RikkaHub run AI models locally on my phone?',
            a: 'No. RikkaHub is a chat client that connects to cloud AI providers (OpenAI, Google Gemini, Anthropic, or any OpenAI-compatible API) using your own API key. It does not include an on-device inference engine. It can connect to a self-hosted Ollama or LM Studio server on your own network, but the model still runs on that server\'s hardware, not on the phone.',
          },
          {
            q: 'Is RikkaHub free?',
            a: 'Yes, the app itself is free to download and use, with no subscription or in-app purchase found at review time. The only cost is whatever the AI provider you connect it to charges for API usage — RikkaHub does not charge a markup or fee of its own.',
          },
          {
            q: 'Who developed RikkaHub?',
            a: 'RikkaHub was created primarily by a developer using the GitHub handle re-ovo, who holds the large majority of commits in the project\'s history. The repository is now hosted under the rikkahub GitHub organization and has additional contributors.',
          },
          {
            q: 'Is RikkaHub open source, and what license does it use?',
            a: 'Yes. RikkaHub\'s source code is public on GitHub under the GNU Affero General Public License v3.0 (AGPL-3.0). This is a copyleft license: anyone who modifies RikkaHub and runs it as a network service is required to publish their source changes, which is a stricter condition than the MIT license used by some competing apps.',
          },
          {
            q: 'Which AI providers can I use with RikkaHub?',
            a: 'Any provider or service exposing an OpenAI-compatible, Google-compatible, or Anthropic-compatible API — this includes the official OpenAI, Google Gemini, and Anthropic Claude APIs, third-party API relay services, and self-hosted servers such as Ollama or LM Studio.',
          },
          {
            q: 'Can I use RikkaHub without an internet connection?',
            a: 'No, not in the ordinary sense. RikkaHub always needs to reach an API endpoint to generate a response — even a self-hosted Ollama or LM Studio server on your local network requires a network connection between your phone and that server.',
          },
          {
            q: 'Is RikkaHub available on iPhone?',
            a: 'No. RikkaHub had no official iOS release at review time; it is an Android-only app. iPhone users looking for a similar multi-provider chat client should evaluate a dedicated iOS app instead.',
          },
          {
            q: 'Can RikkaHub connect to my own Ollama server?',
            a: 'Yes. RikkaHub\'s custom API/URL field accepts any OpenAI-compatible endpoint, which includes a self-hosted Ollama or LM Studio server exposing its built-in OpenAI-compatible API on your local network. The model still runs on that server\'s hardware, not on the phone.',
          },
          {
            q: 'Are RikkaHub forks safe to use?',
            a: 'RikkaHub\'s own README explicitly warns that forked versions exist and are unrelated to the official project, advising users "to use forks with caution to avoid privacy leaks or excessive permission requests." This review covers only the official rikkahub/rikkahub app, distributed via its official website, Google Play under the package name me.rerere.rikkahub, and its own GitHub Releases page.',
          },
          {
            q: 'How does RikkaHub compare to PocketPal AI or Private LLM?',
            a: 'RikkaHub is a cloud/self-hosted API client with no on-device inference, while PocketPal AI and Private LLM both download and run open-weight models directly on the device using llama.cpp-based engines. Choose RikkaHub if you already have API access or a self-hosted server and want a polished Android front end; choose PocketPal AI or Private LLM if you specifically want a model running on the device with no network dependency after download. See the comparison table above for platform and license details.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'RikkaHub is a well-built, actively maintained Android app for a specific job: giving you one polished interface to talk to whichever AI provider you already pay for, or to a server you already run yourself. It is not, and does not claim to be, an on-device AI app — there is no local inference engine anywhere in its codebase, and every conversation leaves the phone to reach an API endpoint somewhere else. Judged as what it actually is — a free, open-source, AGPL-3.0 multi-provider chat client — it is a strong option for Android users who already manage API keys or self-host Ollama or LM Studio and want a single, frequently updated app instead of several vendor-specific ones. It is the wrong choice for anyone who specifically wants AI running entirely on their device with no server involved; for that, PocketPal AI or Private LLM are the apps to evaluate instead.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[RikkaHub on GitHub](https://github.com/rikkahub/rikkahub) — source code, README, license (AGPL-3.0), release history, and star/fork counts referenced in this review.',
          '[RikkaHub GitHub Releases](https://github.com/rikkahub/rikkahub/releases) — release cadence and APK download.',
          '[RikkaHub CONTRIBUTING.md](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) — contribution policy referenced for the project\'s opinionated stance on PRs.',
          '[RikkaHub official website](https://rikka-ai.com/download) — recommended download source per the project\'s own README.',
          '[RikkaHub on Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) — Android availability.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review (2026)](/power-local-llm/pocketpal-ai-review) — a free, open-source app that actually runs GGUF models on-device, the direct architectural contrast to RikkaHub.',
          '[Private LLM Review](/power-local-llm/private-llm-review) — a paid, closed-source, on-device alternative for iPhone, iPad, and Mac with a 140+ model catalog.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the Android on-device app roundup, for readers who specifically want local inference rather than a cloud client.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the iOS equivalent, for readers who need an Apple-platform on-device option since RikkaHub has none.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — the model-layer companion piece for anyone who decides they want on-device inference instead of a cloud client like RikkaHub.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RikkaHub Review (2026): Multi-Provider AI Chat for Android',
      description:
        'RikkaHub review: a free, open-source Android app for chatting with cloud AI providers via your own API keys. Does it run models locally? License, setup, and verdict.',
      url: 'https://promptquorum.com/power-local-llm/rikkahub-review',
      inLanguage: 'en',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android users evaluating multi-provider AI chat clients and self-hosted LLM front ends' },
      about: [
        { '@type': 'Thing', name: 'RikkaHub' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LM Studio' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/rikkahub-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'RikkaHub Review (2026)', item: 'https://promptquorum.com/power-local-llm/rikkahub-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/rikkahub-review-hero-de.webp',
    title: 'RikkaHub im Test (2026): KI-Chat für Android mit vielen Anbietern',
    seoTitle: 'RikkaHub Test 2026: Open-Source Android KI-Client',
    intro:
      'RikkaHub ist eine kostenlose, quelloffene Android-App, mit der Sie über eine einzige Oberfläche mit Cloud-KI-Anbietern chatten — OpenAI, Google Gemini, Anthropic und jedem OpenAI-kompatiblen Endpunkt — und dabei Ihre eigenen API-Schlüssel verwenden. Die App führt keine Sprachmodelle auf dem Smartphone selbst aus; sie ist ein Client, keine Inferenz-Engine auf dem Gerät, kann sich aber über dasselbe Feld für benutzerdefinierte Endpunkte mit einem selbst gehosteten Ollama- oder LM-Studio-Server im eigenen Netzwerk verbinden. Entwickelt wurde das Projekt hauptsächlich vom Entwickler re-ovo und wird inzwischen unter der [rikkahub-GitHub-Organisation](https://github.com/rikkahub/rikkahub) gepflegt. Es steht unter der GNU Affero General Public License v3.0 (AGPL-3.0) und hat seit der Erstellung des Repositorys im März 2025 über 7.400 Sterne gesammelt. Dieser Test beschreibt genau, was RikkaHub lokal ausführt und was nicht, den tatsächlichen Funktionsumfang, die Preisgestaltung sowie für wen sich die App eignet — und für wen eine On-Device-App wie PocketPal AI oder Private LLM die bessere Wahl ist.',
    metaDescription:
      'RikkaHub im Test: eine kostenlose, quelloffene Android-App für den Chat mit Cloud-KI-Anbietern über eigene API-Schlüssel. Läuft sie lokal? Lizenz, Einrichtung und Fazit.',
    twitterDescription:
      'RikkaHub Test 2026: die kostenlose, AGPL-3.0-lizenzierte Android-App zum Wechseln zwischen OpenAI, Gemini, Claude und selbst gehosteten API-Endpunkten. Sie läuft nicht lokal auf dem Gerät — hier die Fakten.',
    audience:
      'Android-Nutzer, die bereits API-Schlüssel für Cloud-KI-Anbieter besitzen oder Ollama bzw. LM Studio selbst hosten und dafür eine mobile Oberfläche suchen.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RikkaHub Test',
    targetKeywords: [
      'rikkahub test',
      'rikkahub android',
      'rikkahub lokales llm',
      'rikkahub vs pocketpal ai',
      'ist rikkahub kostenlos',
      'rikkahub lizenz',
      'android ki chat app mehrere anbieter',
      'ollama mit android app verbinden',
    ],
    current_models_mentioned: ['OpenAI GPT-Modelle', 'Google Gemini', 'Anthropic Claude'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**RikkaHub führt keine KI-Modelle auf Ihrem Smartphone aus — es ist ein kostenloser, quelloffener (AGPL-3.0) Android-Client, der sich mit Cloud-KI-Anbietern über Ihre eigenen API-Schlüssel verbindet und optional auch mit einem selbst gehosteten Ollama- oder LM-Studio-Server im eigenen Netzwerk kommunizieren kann.** Entwickelt hauptsächlich vom Entwickler re-ovo und gehostet auf [GitHub](https://github.com/rikkahub/rikkahub) (über 7.400 Sterne zum Testzeitpunkt), unterstützt es jeden OpenAI-, Google- oder Anthropic-kompatiblen API-Endpunkt über einen einzigen Konfigurationsbildschirm für benutzerdefinierte API/URL/Modell-Einstellungen. Die App selbst ist komplett kostenlos; die einzigen laufenden Kosten entstehen durch den KI-Anbieter, mit dem Sie sie verbinden.',
    quickAnswerTop: {
      de: {
        question: 'Läuft RikkaHub lokal, und lohnt sich die Installation?',
        answer:
          'Nein — RikkaHub enthält keine On-Device-Inferenz-Engine und kann daher kein Sprachmodell direkt auf Ihrem Smartphone ausführen. Die Installation lohnt sich, wenn Sie bereits API-Schlüssel für OpenAI, Google Gemini, Anthropic oder einen kompatiblen Anbieter besitzen und eine einzige, gut gemachte Android-App zum Wechseln zwischen ihnen möchten, oder wenn Sie Ollama bzw. LM Studio selbst hosten und dafür eine mobile Oberfläche suchen. Sie ist die falsche Wahl, wenn Sie gezielt ein Modell direkt auf dem Gerät ohne jegliche Netzwerkverbindung wollen — dafür eignen sich PocketPal AI oder Private LLM besser.',
        bullets: [
          'Kostenlos und quelloffen unter der AGPL-3.0-Lizenz; der Quellcode ist öffentlich auf [GitHub](https://github.com/rikkahub/rikkahub) einsehbar.',
          'Ein Multi-Provider-Client, keine On-Device-Laufzeitumgebung — Sie bringen Ihren eigenen API-Schlüssel für OpenAI, Google Gemini, Anthropic oder einen beliebigen OpenAI-kompatiblen Dienst mit.',
          'Kann sich über das Feld für benutzerdefinierte API/URL mit einem selbst gehosteten Ollama- oder LM-Studio-Server im eigenen Netzwerk verbinden — das Modell läuft dabei weiterhin auf diesem Server, nicht auf dem Smartphone.',
          'Nur für Android, keine iOS-Version; erhältlich über die [offizielle Website](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) und direkten APK-Download über [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'Hauptsächlich von einem Entwickler gebaut (GitHub: [re-ovo](https://github.com/re-ovo)) und inzwischen unter der rikkahub-Organisation gepflegt, mit über 7.400 Sternen und nahezu täglichen Punktreleases zum Testzeitpunkt.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist RikkaHub?', anchor: 'what-is-rikkahub' },
      { label: 'Läuft RikkaHub lokal auf dem Gerät?', anchor: 'does-rikkahub-run-models-locally' },
      { label: 'Wer hat RikkaHub entwickelt?', anchor: 'history-and-developer' },
      { label: 'Erste Schritte mit RikkaHub', anchor: 'getting-started' },
      { label: 'Welche Anbieter unterstützt RikkaHub?', anchor: 'providers-supported' },
      { label: 'Gibt es RikkaHub für iPhone?', anchor: 'platform-availability' },
      { label: 'Was kostet RikkaHub?', anchor: 'pricing' },
      { label: 'Welche Funktionen bietet RikkaHub?', anchor: 'key-features' },
      { label: 'Für wen eignet sich RikkaHub', anchor: 'who-should-use' },
      { label: 'Für wen eignet sich RikkaHub nicht', anchor: 'who-should-not-use' },
      { label: 'Hinweis zu RikkaHub-Forks', anchor: 'fork-warning' },
      { label: 'RikkaHub im Vergleich', anchor: 'vs-alternatives' },
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
            text: 'RikkaHub ist eine kostenlose, quelloffene (AGPL-3.0) Android-App, mit der Sie über Ihre eigenen API-Schlüssel mit OpenAI, Google Gemini, Anthropic und anderen OpenAI-kompatiblen KI-Anbietern chatten — sie führt keine Modelle auf dem Gerät selbst aus.',
          },
          {
            type: 'plain-terms',
            text: 'Es ist eine Fernbedienung für KI-Modelle, die Sie bereits bezahlen, oder für einen Server, den Sie selbst betreiben — keine App, die ein Modell direkt auf Ihr Smartphone bringt. Wer eine Inferenz will, die vollständig auf dem Gerät ohne Netzwerkverbindung läuft, ist bei PocketPal AI oder Private LLM besser aufgehoben.',
          },
        ],
        items: [
          'Kostenlos und quelloffen (AGPL-3.0); Quellcode und Issue-Tracker sind öffentlich auf [GitHub](https://github.com/rikkahub/rikkahub) einsehbar.',
          'Ein Multi-Provider-Chat-Client, keine On-Device-Inferenz-Engine — im Quellcode gibt es keine llama.cpp-, MLC- oder LiteRT-LM-Komponente.',
          'Erfordert einen eigenen API-Schlüssel für OpenAI, Google Gemini, Anthropic oder einen beliebigen OpenAI-kompatiblen Anbieter; kann auch auf einen selbst gehosteten Ollama- oder LM-Studio-Server über eine benutzerdefinierte URL zeigen.',
          'Hauptsächlich vom Entwickler re-ovo gebaut und inzwischen unter der rikkahub-GitHub-Organisation gepflegt; über 7.400 Sterne und mehr als 640 Forks zum Testzeitpunkt.',
          'Nur für Android — erhältlich über die [offizielle Website](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) und APK-Downloads über [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'Die App selbst ist kostenlos, zum Testzeitpunkt ohne In-App-Käufe; die laufenden Kosten hängen vollständig vom verbundenen KI-Anbieter ab.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test basiert auf dem öffentlichen [GitHub-Repository](https://github.com/rikkahub/rikkahub) (Quellcode, README, Releases und GitHub-API-Metadaten), der Projekt-Website und dem Google-Play-Eintrag, geprüft im September 2026. PromptQuorum hat für diesen Test keine eigenen praktischen Benchmarks von RikkaHub durchgeführt — die Aussagen zur lokalen vs. Cloud-Architektur unten basieren auf der Analyse des öffentlichen Quellcodes und der Dokumentation, nicht auf einem Blackbox-Test.',
          },
        ],
      },
      overview: {
        id: 'what-is-rikkahub',
        title: 'Was ist RikkaHub?',
        content: [
          '**RikkaHub ist eine native Android-Chat-App zum Wechseln zwischen mehreren KI-Anbietern über eine einzige Oberfläche, wobei Sie selbst die API-Schlüssel bereitstellen.** Statt für jeden Anbieter eine eigene App zu installieren — eine für OpenAI, eine für Google Gemini, eine für Anthropic Claude —, bietet RikkaHub einen einzigen Chat-Bildschirm mit einer konfigurierbaren Liste von „Providern", von denen jeder auf eine Basis-URL, einen API-Schlüssel und einen Modellnamen verweist.',
          'Die App ist laut ihrer eigenen [Dokumentation zum Technologie-Stack](https://github.com/rikkahub/rikkahub/blob/master/README.md) nativ in Kotlin mit Jetpack Compose gebaut und unterstützt jeden Endpunkt, der die API-Formate von OpenAI, Google oder Anthropic spricht — in der Praxis umfasst das die offiziellen Anbieter selbst, Dritt-Relay-/Proxy-Dienste, die Zugang zu den Modellen mehrerer Anbieter weiterverkaufen, sowie selbst gehostete OpenAI-kompatible Server wie Ollama oder LM Studio.',
        ],
        note: 'RikkaHub ist ein Chat-Client, keine modellhostende App: Das Sprachmodell selbst läuft immer woanders als im RikkaHub-Prozess — auf den Cloud-Servern des Anbieters oder auf einem Computer, den Sie selbst kontrollieren, wenn Sie auf einen selbst gehosteten Endpunkt verweisen.',
      },
      localVsCloud: {
        id: 'does-rikkahub-run-models-locally',
        title: 'Läuft RikkaHub lokal auf dem Gerät?',
        content: [
          '**Nein. RikkaHub enthält keine On-Device-Inferenz-Engine und kann kein Sprachmodell direkt auf der CPU, GPU oder NPU Ihres Smartphones ausführen.** Es handelt sich um einen Client: Sie konfigurieren einen API-Schlüssel und Endpunkt für einen Anbieter, RikkaHub sendet Ihre Nachrichten über das Netzwerk an diesen Endpunkt und zeigt die zurückgegebene Antwort an.',
          'Das ist ein wesentlicher Unterschied zu mobilen Apps wie [PocketPal AI](/power-local-llm/pocketpal-ai-review) oder [Private LLM](/power-local-llm/private-llm-review), die eine Inferenz-Engine (llama.cpp oder eine ähnliche Laufzeitumgebung) mitbringen und ein heruntergeladenes Modell direkt mit dem RAM und der GPU/NPU des Geräts ausführen, ohne dass nach dem Download eine Netzwerkverbindung nötig wäre. RikkaHubs eigenes [README](https://github.com/rikkahub/rikkahub) beschreibt die App schlicht als „an Android APP that supports for multiple LLM providers" — das Wort „lokal" taucht in der Feature-Liste nirgends auf, und eine Durchsuchung des vollständigen öffentlichen Quellcode-Baums (über 1.900 Dateien, Stand September 2026) findet weder eine llama.cpp-, MLC-, LiteRT- noch LiteRT-LM-Komponente irgendwo im Code.',
          'Am nächsten kommt RikkaHub „lokaler KI", wenn Sie das Feld für benutzerdefinierte API/URL auf einen Server im eigenen Netzwerk statt auf einen öffentlichen Cloud-Endpunkt richten — zum Beispiel [Ollama](https://ollama.com) oder [LM Studio](https://lmstudio.ai), die auf einem PC im selben Haushalt laufen und eine OpenAI-kompatible API bereitstellen. In dieser Konfiguration läuft das Modell weiterhin auf der Hardware des PCs, nicht auf dem Smartphone; RikkaHub fungiert als mobile Oberfläche für einen Server, den Sie selbst kontrollieren. Das hält Ihre Gesprächsdaten von der Cloud-Infrastruktur Dritter fern, ist aber eine grundlegend andere Konfiguration — und eine andere Geschichte in Sachen Datenschutz und Hardware — als eine App, die das Modell direkt auf dem Gerät ausführt.',
        ],
        decisionBlock: {
          title: 'RikkaHub oder eine On-Device-App?',
          localIf: [
            'Sie möchten, dass die Inferenz direkt auf dem Smartphone läuft, mit null Netzwerkaufrufen nach dem Herunterladen eines Modells — nutzen Sie stattdessen [PocketPal AI](/power-local-llm/pocketpal-ai-review) oder [Private LLM](/power-local-llm/private-llm-review).',
            'Sie brauchen eine App, die ganz ohne Netzwerkverbindung funktioniert, auch nicht zu einem Gerät im selben WLAN — RikkaHub muss immer einen API-Endpunkt erreichen, auch einen lokalen.',
          ],
          cloudIf: [
            'Sie haben bereits API-Zugang zu OpenAI, Google Gemini oder Anthropic Claude und möchten eine einzige Android-App zum Wechseln zwischen ihnen, statt mehrere Anbieter-Apps zu jonglieren.',
            'Sie hosten Ollama oder LM Studio selbst auf einem Heimserver oder PC und möchten dafür eine gut gemachte mobile Chat-Oberfläche in Ihrem eigenen Netzwerk.',
          ],
          quick: [
            'On-Device-Inferenz, nie eine Netzwerkverbindung nötig: PocketPal AI oder Private LLM.',
            'Client mit eigenem API-Schlüssel für viele Cloud-Anbieter: RikkaHub.',
            'Mobile Oberfläche für den eigenen selbst gehosteten Ollama-/LM-Studio-Server: RikkaHub, konfiguriert auf die lokale Netzwerkadresse Ihres Servers.',
          ],
        },
      },
      history: {
        id: 'history-and-developer',
        title: 'Wer hat RikkaHub entwickelt?',
        content: [
          '**RikkaHub wurde hauptsächlich von einem Entwickler unter dem GitHub-Namen [re-ovo](https://github.com/re-ovo) erstellt, auf den der Großteil der Commits in der Projekthistorie entfällt; das Repository wird inzwischen unter der [rikkahub-GitHub-Organisation](https://github.com/rikkahub) statt unter einem persönlichen Konto gehostet.** Das Repository selbst wurde am 11. März 2025 erstellt und hat sich zu einem aktiv gepflegten Projekt mit Beiträgen einer kleinen Gruppe weiterer Entwickler neben dem Hauptbetreuer entwickelt.',
          'RikkaHub ist in seinen eigenen [Beitragsrichtlinien](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) ausdrücklich als „opinionated" (meinungsstarkes) Projekt beschrieben: Pull Requests, die neue Sprachen hinzufügen, neue Funktionen ergänzen oder groß angelegtes KI-generiertes Refactoring enthalten, werden grundsätzlich abgelehnt. Das Projekt akzeptiert Community-Sponsoring — im README werden bezahlte Sponsoren wie [aihubmix.com](https://aihubmix.com), ein API-Relay-Dienst, genannt — und nimmt freiwillige Spenden über [Patreon](https://patreon.com/rikkahub) sowie die chinesische Plattform 爱发电 (afdian.com) entgegen.',
        ],
        items: [
          'Hauptentwickler: GitHub-Nutzer [re-ovo](https://github.com/re-ovo), auf den der Großteil der Commits in der Projekthistorie entfällt.',
          'Repository erstellt am 11. März 2025; inzwischen unter der [rikkahub-Organisation](https://github.com/rikkahub) statt unter einem persönlichen Konto gehostet.',
          'Lizenz: GNU Affero General Public License v3.0 (AGPL-3.0) — eine strengere Copyleft-Lizenz als die MIT-Lizenz einiger konkurrierender Apps; sie verpflichtet jeden, der eine modifizierte Version als Netzwerkdienst betreibt, seine Quellcode-Änderungen zu veröffentlichen.',
          'Über 7.400 GitHub-Sterne und mehr als 640 Forks zum Testzeitpunkt, mit einem aktiven Issue-Tracker (über 280 offene Issues) und nahezu täglichen Punktreleases.',
          'Lehnt Pull Requests für neue Sprachen, neue Funktionen und groß angelegte KI-generierte Refactorings laut eigenen Beitragsrichtlinien ausdrücklich ab — ein bewusst meinungsstarkes Projekt, das nicht auf breite Community-Feature-Beiträge abzielt.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Erste Schritte mit RikkaHub',
        content: [
          '**Um RikkaHub nutzen zu können, benötigen Sie einen vorhandenen API-Schlüssel eines Anbieters — die App bringt keinen kostenlosen oder gebündelten KI-Zugang mit.** In diesem Ablauf gibt es kein Modell zum Herunterladen auf das Gerät; Sie verbinden die App mit einem Konto, das Sie bereits besitzen, oder mit einem Server, den Sie bereits betreiben.',
        ],
        numberedItems: [
          {
            title: 'App installieren',
            whyItMatters: 'Laden Sie RikkaHub über die [offizielle Website](https://rikka-ai.com/download) (vom Projekt empfohlen) oder [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) herunter. Technisch versierte Nutzer können die APK auch direkt über [GitHub Releases](https://github.com/rikkahub/rikkahub/releases) sideloaden.',
          },
          {
            title: 'Einen Provider hinzufügen',
            whyItMatters: 'Öffnen Sie die Provider-Einstellungen und legen Sie einen neuen Eintrag an: Wählen Sie ein API-Format (OpenAI-, Google- oder Anthropic-kompatibel), geben Sie dann die Basis-URL, Ihren API-Schlüssel und den gewünschten Modellnamen ein. Hier tragen Sie die Daten eines Cloud-Anbieters, eines API-Relay-Dienstes oder die lokale Netzwerkadresse Ihres selbst gehosteten Servers ein.',
          },
          {
            title: 'Modell auswählen und chatten',
            whyItMatters: 'Sobald ein Provider konfiguriert ist, wählen Sie ihn im Modellauswahlmenü aus und starten eine Unterhaltung. Jede Nachricht wird an den konfigurierten Endpunkt gesendet — außerhalb der Einstellungsbildschirme der App gibt es keinen Offline-Modus.',
          },
          {
            title: 'Optional: Tools und Suche verbinden',
            whyItMatters: 'Fügen Sie einen MCP-Server (Model Context Protocol) hinzu oder tragen Sie Ihren eigenen API-Schlüssel für einen Websuche-Anbieter wie Exa, Tavily oder Brave ein, um zu erweitern, was das verbundene Modell während der Unterhaltung tun kann. Beides ist optional und erfordert Zugangsdaten, die Sie selbst bereitstellen.',
          },
        ],
      },
      providersSupported: {
        id: 'providers-supported',
        title: 'Welche Anbieter unterstützt RikkaHub?',
        itemHeadings: true,
        columns: ['Anbietertyp', 'Beispiele', 'Was Sie brauchen'],
        rows: [
          {
            'Anbietertyp': 'OpenAI-kompatible APIs',
            'Beispiele': 'Die eigene API von OpenAI sowie jeder Drittdienst mit demselben Anfrageformat',
            'Was Sie brauchen': 'Einen API-Schlüssel und die Basis-URL des Anbieters',
          },
          {
            'Anbietertyp': 'Google-kompatible APIs',
            'Beispiele': 'Google-Gemini-Modelle',
            'Was Sie brauchen': 'Einen Google-AI-API-Schlüssel',
          },
          {
            'Anbietertyp': 'Anthropic-kompatible APIs',
            'Beispiele': 'Anthropic-Claude-Modelle',
            'Was Sie brauchen': 'Einen Anthropic-API-Schlüssel',
          },
          {
            'Anbietertyp': 'API-Relay-/Proxy-Dienste',
            'Beispiele': 'Drittdienste, die Zugang zu den Modellen mehrerer Anbieter hinter einem Schlüssel weiterverkaufen, etwa der Projekt-Sponsor [aihubmix.com](https://aihubmix.com)',
            'Was Sie brauchen': 'Den eigenen API-Schlüssel und die Basis-URL des Relay-Dienstes, eingetragen wie bei einem direkten Anbieter',
          },
          {
            'Anbietertyp': 'Selbst gehostete lokale Server',
            'Beispiele': 'Ollama oder LM Studio auf dem eigenen PC oder Heimserver, über deren eingebauten OpenAI-kompatiblen Endpunkt',
            'Was Sie brauchen': 'Die lokale Netzwerkadresse Ihres Servers (z. B. http://192.168.1.50:11434/v1) — kein Cloud-API-Schlüssel nötig, aber das Modell läuft auf diesem Rechner, nicht auf Ihrem Smartphone',
          },
        ],
        note: 'RikkaHub bündelt oder verkauft selbst keinen Zugang zu einem Anbieter weiter. Jede Verbindung — Cloud oder selbst gehostet — wird mit Zugangsdaten oder einer Netzwerkadresse konfiguriert, die Sie selbst bereitstellen.',
      },
      platform: {
        id: 'platform-availability',
        title: 'Gibt es RikkaHub für iPhone?',
        itemHeadings: true,
        columns: ['Plattform', 'Verfügbarkeit', 'Hinweise'],
        rows: [
          {
            'Plattform': 'Android',
            'Verfügbarkeit': 'Erhältlich über die [offizielle Website](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) und direkten APK-Download über [GitHub Releases](https://github.com/rikkahub/rikkahub/releases)',
            'Hinweise': 'Die native App; dieser Test bezieht sich auf diese Version.',
          },
          {
            'Plattform': 'iPhone / iPad',
            'Verfügbarkeit': 'Zum Testzeitpunkt keine native iOS-App gefunden',
            'Hinweise': 'iPhone-Nutzer, die einen ähnlichen Multi-Provider-Client suchen, sollten stattdessen eine dedizierte iOS-App in Betracht ziehen; RikkaHub veröffentlicht derzeit keine.',
          },
          {
            'Plattform': 'Web / Browser',
            'Verfügbarkeit': 'Im Quellcode-Repository des Projekts existiert eine begleitende Web-UI',
            'Hinweise': 'Gedacht als browserbasiertes Gegenstück zur Android-App, nicht als gehosteter öffentlicher Dienst — der Betrieb erfordert eine eigene Einrichtung aus dem Quellcode.',
          },
          {
            'Plattform': 'Desktop (Windows/macOS/Linux)',
            'Verfügbarkeit': 'Ein separates Community-Projekt namens rikkahub-desktop existiert, ist aber nicht Teil des offiziellen rikkahub/rikkahub-Repositorys',
            'Hinweise': 'Wird nicht vom selben Kernteam gepflegt; als Fork eines Dritten behandeln, nicht als offizielles Release.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Was kostet RikkaHub?',
        content: [
          '**RikkaHub selbst ist kostenlos herunterzuladen und zu nutzen; zum Testzeitpunkt wurde weder ein Abo noch ein In-App-Kauf in der App oder ihrer Dokumentation gefunden.** Das Projekt akzeptiert freiwillige Spenden über [Patreon](https://patreon.com/rikkahub) und 爱发电 (afdian.com) und nennt bezahlte Sponsoren im README, beides ist jedoch für die Nutzung der App nicht erforderlich.',
          'Die tatsächlichen Kosten der Nutzung von RikkaHub entstehen durch den KI-Anbieter, mit dem Sie sich verbinden — OpenAI, Google Gemini und Anthropic berechnen ihre APIs alle pro Token, während ein selbst gehosteter Ollama- oder LM-Studio-Server keine Gebühr pro Nachricht verlangt, aber Hardware voraussetzt, die Sie bereits besitzen oder separat bezahlen. RikkaHub schlägt die API-Kosten keines Anbieters auf, misst sie nicht und behält keinen Anteil davon ein — es leitet Ihre Anfragen lediglich mit dem von Ihnen bereitgestellten Schlüssel weiter.',
        ],
        items: [
          '**Die App:** Kostenlos, quelloffen (AGPL-3.0), kein Abo.',
          '**Nutzung von Cloud-Anbietern:** Wird direkt vom Anbieter (OpenAI, Google, Anthropic oder ein Relay-Dienst) nach dessen eigener Preisgestaltung berechnet — RikkaHub schlägt keinen Aufpreis auf.',
          '**Nutzung eines selbst gehosteten Servers:** Keine Gebühr pro Nachricht, aber es wird ein PC oder Server benötigt, der Ollama oder LM Studio ausführen kann — separate Hardwarekosten außerhalb von RikkaHub.',
          '**Optionale Spenden:** Über Patreon oder 爱发电, vollständig freiwillig und unabhängig von der App-Funktionalität.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Welche Funktionen bietet RikkaHub?',
        content: [
          '**Über den grundlegenden Multi-Provider-Chat hinaus hat RikkaHub laut seinem eigenen [README](https://github.com/rikkahub/rikkahub/blob/master/README.md) einen umfangreichen Funktionsumfang angesammelt, wie er für einen aktiv entwickelten, meinungsstarken Chat-Client typisch ist.** Dazu gehören:',
        ],
        items: [
          '**Material-You-Design und Dunkelmodus.** Die Oberfläche folgt Androids dynamischem Theming-System.',
          '**Workspace.** Eine in die App integrierte, proot-basierte Linux-Agenten-Umgebung — eine sandboxed Linux-Shell, die ein KI-Agent zum Ausführen von Befehlen nutzen kann, getrennt von jeder Sprachmodell-Inferenz.',
          '**MCP-Unterstützung (Model Context Protocol).** Das verbundene Modell kann während der Unterhaltung Tools aufrufen, die ein MCP-Server bereitstellt.',
          '**Multimodale Eingabe.** Akzeptiert Bilder, PDFs und Word-Dokumente als Chat-Anhänge (die Unterstützung hängt von den Fähigkeiten des verbundenen Modells ab).',
          '**Nachrichtenverzweigung.** Ermöglicht es, alternative Antworten ab einem bestimmten Punkt einer Unterhaltung zu erkunden, statt nur einem linearen Verlauf zu folgen.',
          '**Suchintegrationen.** Optionale Websuche mit eigenem API-Schlüssel für Anbieter wie Exa, Tavily, Zhipu, LinkUp, Brave oder Perplexity.',
          '**Markdown-Rendering.** Syntaxhervorhebung für Code, LaTeX-Formeln, Tabellen und Mermaid-Diagramme in Antworten.',
          '**QR-Code-Import/-Export.** Provider-Konfigurationen (einschließlich API-Schlüssel) lassen sich per QR-Code zwischen Geräten teilen — behandeln Sie das wie das Teilen eines Passworts, da darin Ihre Zugangsdaten enthalten sind.',
          '**SillyTavern-Charakterkarten-Import.** Kompatibel mit einem gängigen Rollenspiel-Persona-Dateiformat, das auch andere Chat-Frontends verwenden.',
          '**Benutzerdefinierte HTTP-Header und Request-Bodies.** Fortgeschrittene Nutzer können die rohe Anfrage an einen Anbieter anpassen — nützlich für Anbieter mit nicht standardmäßiger Authentifizierung oder Parametern.',
        ],
        note: 'Der Funktionsumfang kann je nach App-Version variieren, da das Projekt nahezu tägliche Punktreleases veröffentlicht. Prüfen Sie die [GitHub-Releases-Seite](https://github.com/rikkahub/rikkahub/releases), was in Ihrer installierten Version bereits enthalten ist.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen eignet sich RikkaHub',
        items: [
          '**Nutzer, die bereits für Cloud-KI-APIs bezahlen und dafür eine einzige Android-App möchten.** Wenn Sie API-Schlüssel für OpenAI, Google Gemini und Anthropic Claude besitzen und es leid sind, zwischen separaten Anbieter-Apps zu wechseln, passt die einheitliche Oberfläche von RikkaHub direkt.',
          '**Nutzer, die Ollama oder LM Studio selbst hosten und dafür einen mobilen Client möchten.** Das Feld für benutzerdefinierte API/URL funktioniert mit jedem OpenAI-kompatiblen Server, auch einem im eigenen Heimnetzwerk.',
          '**Entwickler und technisch versierte Nutzer, die mit der Verwaltung eigener API-Schlüssel vertraut sind.** Es gibt keinen gebündelten KI-Zugang — jede Funktion erfordert eigene Zugangsdaten, was für Nutzer geeignet ist, die bereits verstehen, wie API-Abrechnung funktioniert.',
          '**Nutzer, die eine aktiv gepflegte, häufig aktualisierte App möchten.** Das Projekt veröffentlicht nahezu tägliche Punktreleases und hat im Vergleich zu ähnlichen Android-Chat-Clients eine große, aktive Beitragendenbasis.',
          '**Nutzer, die Tool-Calling- und Agentenfunktionen auf einem Cloud-Modell aufbauen möchten.** MCP-Unterstützung und die Workspace-Sandbox erweitern, was ein verbundenes Modell über reinen Textchat hinaus leisten kann — für Nutzer, die mit der Konfiguration dieser fortgeschrittenen Funktionen vertraut sind.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen eignet sich RikkaHub nicht',
        items: [
          '**Nutzer, die KI vollständig auf ihrem Gerät ohne Netzwerkverbindung ausführen möchten.** RikkaHub muss immer einen API-Endpunkt erreichen, lokal oder in der Cloud; wer eine wirklich offline funktionierende App möchte, sollte stattdessen [PocketPal AI](/power-local-llm/pocketpal-ai-review) oder [Private LLM](/power-local-llm/private-llm-review) nutzen.',
          '**Nutzer, die noch keinen API-Schlüssel besitzen und keinen verwalten möchten.** RikkaHub bringt keinen kostenlosen, gebündelten KI-Zugang mit — wer eine App öffnen und sofort ohne Einrichtung oder Konto chatten möchte, sollte stattdessen eine kuratierte App mit integrierten Modellen wählen.',
          '**iPhone- oder iPad-Nutzer.** RikkaHub hat zum Testzeitpunkt keine offizielle iOS-Version; Apple-Nutzer sollten stattdessen eine dedizierte iOS-App wie Private LLM oder Enclave AI in Betracht ziehen.',
          '**Nutzer, die den geringstmöglichen technischen Einrichtungsaufwand möchten.** Das Hinzufügen eines Providers erfordert die korrekte Eingabe von API-Format, Basis-URL, Schlüssel und Modellname — es gibt keinen Ein-Klick-„Herunterladen-und-Chatten"-Ablauf wie bei On-Device-Apps.',
          '**Nutzer, die sich speziell Sorgen um Änderungen ohne Quellcode-Veröffentlichung machen.** Die AGPL-3.0-Lizenz ist ein Pluspunkt für Transparenz, bedeutet aber auch, dass jeder, der RikkaHub forkt und eine modifizierte Version als Netzwerkdienst betreibt, gesetzlich verpflichtet ist, seine Änderungen zu veröffentlichen — lesen Sie die Lizenz selbst, falls dies für ein geplantes Deployment relevant ist.',
        ],
      },
      forkWarning: {
        id: 'fork-warning',
        title: 'Hinweis zu RikkaHub-Forks',
        content: [
          '**RikkaHubs eigenes README warnt ausdrücklich davor, dass „es viele geforkte Versionen von RikkaHub gibt" und dass Probleme mit Forks nichts mit dem offiziellen Projekt zu tun haben.** Das Projekt bittet Nutzer, „Forks mit Vorsicht zu verwenden, um Datenschutzlecks oder übermäßige Berechtigungsanfragen zu vermeiden" — ein Hinweis, der hier wiederholt sei, da eine geforkte App andere Berechtigungen anfordern oder Daten anders übertragen kann als das offizielle Release, ohne Prüfung oder Billigung durch den ursprünglichen Entwickler.',
          'Da API-Schlüssel direkt in die App eingegeben werden, um einen Provider zu konfigurieren, bedeutet die Installation eines inoffiziellen Forks, dessen Code diese Zugangsdaten anzuvertrauen. Dieser Test bezieht sich ausschließlich auf das offizielle [rikkahub/rikkahub](https://github.com/rikkahub/rikkahub)-Projekt, vertrieben über die [offizielle Website](https://rikka-ai.com/download), den [Google-Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)-Eintrag unter dem Paketnamen `me.rerere.rikkahub` und die eigene GitHub-Releases-Seite.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'RikkaHub im Vergleich',
        itemHeadings: true,
        columns: ['App', 'Lizenz / Kosten', 'Plattformen', 'Läuft lokal?'],
        rows: [
          {
            'App': 'RikkaHub',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (AGPL-3.0)',
            'Plattformen': 'Android',
            'Läuft lokal?': 'Nein — reiner Cloud-/Self-Hosted-API-Client; eigener Schlüssel oder Server nötig',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (MIT)',
            'Plattformen': 'iPhone/iPad, Android',
            'Läuft lokal?': 'Ja — lädt GGUF-Modelle herunter und führt sie per llama.cpp auf dem Gerät aus',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Lizenz / Kosten': 'Kostenpflichtig, Einmalkauf; Closed Source',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Läuft lokal?': 'Ja — über 140 On-Device-Modelle mit OmniQuant- und GPTQ-Quantisierung',
          },
          {
            'App': 'LLM Farm',
            'Lizenz / Kosten': 'Kostenlos, quelloffen; zum Testzeitpunkt aus dem App Store entfernt',
            'Plattformen': 'iPhone/iPad, Mac (aus dem Quellcode bauen)',
            'Läuft lokal?': 'Ja — llama.cpp-basierte On-Device-Inferenz, wenn aus dem [GitHub-Quellcode](https://github.com/guinmoon/LLMFarm) gebaut',
          },
          {
            'App': 'Layla',
            'Lizenz / Kosten': 'Freemium; Closed Source',
            'Plattformen': 'Android',
            'Läuft lokal?': 'Ja — GGUF-, LiteRT-LM- und PTE-Modellformate auf dem Gerät; aktuelle Tarifverfügbarkeit auf [layla-network.ai](https://www.layla-network.ai) prüfen',
          },
          {
            'App': 'Maid',
            'Lizenz / Kosten': 'Kostenlos, quelloffen',
            'Plattformen': 'Android, Windows, macOS, Linux',
            'Läuft lokal?': 'Ja bei GGUF-/llama.cpp-Modellen; kann laut [GitHub-Repository](https://github.com/Mobile-Artificial-Intelligence/maid) auch remote mit Ollama oder einem Cloud-Anbieter verbunden werden',
          },
          {
            'App': 'AnythingLLM Mobile',
            'Lizenz / Kosten': 'Kostenlos; quelloffenes Kernprojekt',
            'Plattformen': 'Android (iOS geplant)',
            'Läuft lokal?': 'Laut [GitHub-Repository](https://github.com/Mintplex-Labs/anythingllm-mobile) auf On-Device/Local-First für Chatverlauf und Dokument-RAG ausgelegt; kann auch Cloud-Modelle anbinden',
          },
          {
            'App': 'Open WebUI',
            'Lizenz / Kosten': 'Kostenlos, quelloffen',
            'Plattformen': 'Selbst gehostete Web-App (jedes Gerät mit Browser)',
            'Läuft lokal?': 'Nein — wie RikkaHub eine Oberfläche, die Sie auf Ollama oder einen anderen OpenAI-kompatiblen Endpunkt richten; architektonisch der nächste Vergleich zu RikkaHub, richtet sich laut [GitHub-Repository](https://github.com/open-webui/open-webui) aber eher an Desktop/Self-Hosting als an eine native mobile App',
          },
        ],
        note: 'RikkaHub und Open WebUI sind die beiden Einträge in dieser Tabelle, die keine Modelle auf dem Gerät ausführen — beide sind Oberflächen für eine Cloud-API oder einen selbst betriebenen Server. Die übrigen aufgeführten Apps bringen eine On-Device-Inferenz-Engine mit, was der zentrale architektonische Unterschied ist, den man vor der Wahl kennen sollte.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Führt RikkaHub KI-Modelle lokal auf meinem Smartphone aus?',
            a: 'Nein. RikkaHub ist ein Chat-Client, der sich mit Cloud-KI-Anbietern (OpenAI, Google Gemini, Anthropic oder einer beliebigen OpenAI-kompatiblen API) über Ihren eigenen API-Schlüssel verbindet. Es enthält keine On-Device-Inferenz-Engine. Es kann sich mit einem selbst gehosteten Ollama- oder LM-Studio-Server im eigenen Netzwerk verbinden, aber das Modell läuft weiterhin auf der Hardware dieses Servers, nicht auf dem Smartphone.',
          },
          {
            q: 'Ist RikkaHub kostenlos?',
            a: 'Ja, die App selbst ist kostenlos herunterzuladen und zu nutzen; zum Testzeitpunkt wurden weder Abo noch In-App-Käufe gefunden. Die einzigen Kosten entstehen durch den KI-Anbieter, mit dem Sie sie verbinden — RikkaHub berechnet selbst keinen Aufpreis oder eine Gebühr.',
          },
          {
            q: 'Wer hat RikkaHub entwickelt?',
            a: 'RikkaHub wurde hauptsächlich von einem Entwickler unter dem GitHub-Namen re-ovo erstellt, auf den der Großteil der Commits in der Projekthistorie entfällt. Das Repository wird inzwischen unter der rikkahub-GitHub-Organisation gehostet und hat weitere Mitwirkende.',
          },
          {
            q: 'Ist RikkaHub quelloffen, und welche Lizenz nutzt es?',
            a: 'Ja. Der Quellcode von RikkaHub ist auf GitHub unter der GNU Affero General Public License v3.0 (AGPL-3.0) öffentlich einsehbar. Das ist eine Copyleft-Lizenz: Wer RikkaHub modifiziert und als Netzwerkdienst betreibt, muss seine Quellcode-Änderungen veröffentlichen — eine strengere Bedingung als bei der MIT-Lizenz mancher konkurrierender Apps.',
          },
          {
            q: 'Welche KI-Anbieter kann ich mit RikkaHub nutzen?',
            a: 'Jeden Anbieter oder Dienst mit einer OpenAI-, Google- oder Anthropic-kompatiblen API — dazu zählen die offiziellen APIs von OpenAI, Google Gemini und Anthropic Claude, Dritt-Relay-Dienste sowie selbst gehostete Server wie Ollama oder LM Studio.',
          },
          {
            q: 'Kann ich RikkaHub ohne Internetverbindung nutzen?',
            a: 'Nein, nicht im üblichen Sinne. RikkaHub muss immer einen API-Endpunkt erreichen, um eine Antwort zu erzeugen — selbst ein selbst gehosteter Ollama- oder LM-Studio-Server im lokalen Netzwerk erfordert eine Netzwerkverbindung zwischen Smartphone und Server.',
          },
          {
            q: 'Gibt es RikkaHub für iPhone?',
            a: 'Nein. RikkaHub hatte zum Testzeitpunkt keine offizielle iOS-Version; es ist eine reine Android-App. iPhone-Nutzer, die einen ähnlichen Multi-Provider-Chat-Client suchen, sollten stattdessen eine dedizierte iOS-App prüfen.',
          },
          {
            q: 'Kann sich RikkaHub mit meinem eigenen Ollama-Server verbinden?',
            a: 'Ja. Das Feld für benutzerdefinierte API/URL akzeptiert jeden OpenAI-kompatiblen Endpunkt, einschließlich eines selbst gehosteten Ollama- oder LM-Studio-Servers, der seine eingebaute OpenAI-kompatible API im lokalen Netzwerk bereitstellt. Das Modell läuft weiterhin auf der Hardware dieses Servers, nicht auf dem Smartphone.',
          },
          {
            q: 'Sind RikkaHub-Forks sicher zu verwenden?',
            a: 'RikkaHubs eigenes README warnt ausdrücklich davor, dass geforkte Versionen existieren und nichts mit dem offiziellen Projekt zu tun haben, und rät Nutzern, „Forks mit Vorsicht zu verwenden, um Datenschutzlecks oder übermäßige Berechtigungsanfragen zu vermeiden". Dieser Test bezieht sich ausschließlich auf die offizielle rikkahub/rikkahub-App, vertrieben über die offizielle Website, Google Play unter dem Paketnamen me.rerere.rikkahub und die eigene GitHub-Releases-Seite.',
          },
          {
            q: 'Wie schneidet RikkaHub im Vergleich zu PocketPal AI oder Private LLM ab?',
            a: 'RikkaHub ist ein Cloud-/Self-Hosted-API-Client ohne On-Device-Inferenz, während PocketPal AI und Private LLM beide offene Modelle direkt auf dem Gerät mit llama.cpp-basierten Engines herunterladen und ausführen. Wählen Sie RikkaHub, wenn Sie bereits API-Zugang oder einen selbst gehosteten Server haben und eine gut gemachte Android-Oberfläche dafür möchten; wählen Sie PocketPal AI oder Private LLM, wenn Sie gezielt ein Modell auf dem Gerät ohne Netzwerkabhängigkeit nach dem Download möchten. Details zu Plattform und Lizenz finden Sie in der Vergleichstabelle oben.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'RikkaHub ist eine gut gebaute, aktiv gepflegte Android-App für eine bestimmte Aufgabe: eine einzige, gut gemachte Oberfläche, um mit dem KI-Anbieter zu sprechen, den Sie bereits bezahlen, oder mit einem Server, den Sie selbst betreiben. Es ist keine On-Device-KI-App und beansprucht auch nicht, eine zu sein — im gesamten Quellcode gibt es keine lokale Inferenz-Engine, und jede Unterhaltung verlässt das Smartphone, um einen API-Endpunkt an anderer Stelle zu erreichen. Bewertet als das, was es tatsächlich ist — ein kostenloser, quelloffener AGPL-3.0-Multi-Provider-Chat-Client — ist es eine starke Option für Android-Nutzer, die bereits API-Schlüssel verwalten oder Ollama bzw. LM Studio selbst hosten und dafür eine einzige, häufig aktualisierte App statt mehrerer anbieterspezifischer Apps möchten. Für alle, die gezielt KI vollständig auf dem eigenen Gerät ohne beteiligten Server möchten, ist es die falsche Wahl — dafür sind PocketPal AI oder Private LLM die zu prüfenden Apps.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[RikkaHub auf GitHub](https://github.com/rikkahub/rikkahub) — Quellcode, README, Lizenz (AGPL-3.0), Release-Historie und in diesem Test genannte Stern-/Fork-Zahlen.',
          '[RikkaHub GitHub Releases](https://github.com/rikkahub/rikkahub/releases) — Release-Rhythmus und APK-Download.',
          '[RikkaHub CONTRIBUTING.md](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) — Beitragsrichtlinie, referenziert für die meinungsstarke Haltung des Projekts zu Pull Requests.',
          '[Offizielle RikkaHub-Website](https://rikka-ai.com/download) — laut eigenem README die empfohlene Download-Quelle.',
          '[RikkaHub bei Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) — Android-Verfügbarkeit.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[PocketPal AI im Test (2026)](/power-local-llm/pocketpal-ai-review) — eine kostenlose, quelloffene App, die GGUF-Modelle tatsächlich auf dem Gerät ausführt, der direkte architektonische Gegensatz zu RikkaHub.',
          '[Private LLM im Test](/power-local-llm/private-llm-review) — eine kostenpflichtige, Closed-Source-On-Device-Alternative für iPhone, iPad und Mac mit über 140 Modellen.',
          '[Die besten Local-LLM-Apps für Android 2026](/power-local-llm/best-local-llm-apps-android-2026) — die Übersicht der On-Device-Android-Apps, für Leser, die gezielt lokale Inferenz statt eines Cloud-Clients suchen.',
          '[Die besten Local-LLM-Apps für iPhone 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — das iOS-Pendant, für Leser, die eine On-Device-Option für Apple-Geräte benötigen, da RikkaHub keine anbietet.',
          '[Die besten mobilen KI-Modelle 2026: Phi-4 Mini vs. Gemma 4 vs. SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — der Modell-Begleitartikel für alle, die sich für On-Device-Inferenz statt eines Cloud-Clients wie RikkaHub entscheiden.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RikkaHub im Test (2026): KI-Chat für Android mit vielen Anbietern',
      description:
        'RikkaHub im Test: eine kostenlose, quelloffene Android-App für den Chat mit Cloud-KI-Anbietern über eigene API-Schlüssel. Läuft sie lokal? Lizenz, Einrichtung und Fazit.',
      url: 'https://promptquorum.com/de/power-local-llm/rikkahub-review',
      inLanguage: 'de',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Android-Nutzer, die Multi-Provider-KI-Chat-Clients und Self-Hosted-LLM-Oberflächen bewerten' },
      about: [
        { '@type': 'Thing', name: 'RikkaHub' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LM Studio' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/rikkahub-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'RikkaHub im Test (2026)', item: 'https://promptquorum.com/de/power-local-llm/rikkahub-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/rikkahub-review-hero-es.webp',
    title: 'RikkaHub: reseña (2026) — chat de IA multiproveedor para Android',
    seoTitle: 'RikkaHub 2026: reseña de app Android de código abierto',
    intro:
      'RikkaHub es una app de Android gratuita y de código abierto que te permite chatear con proveedores de IA en la nube —OpenAI, Google Gemini, Anthropic y cualquier endpoint compatible con OpenAI— desde una sola interfaz, usando tus propias claves API. No ejecuta modelos de lenguaje en el propio teléfono; es un cliente, no un motor de inferencia local, aunque puede conectarse a un servidor Ollama o LM Studio autoalojado en tu propia red mediante ese mismo campo de endpoint personalizado. Desarrollado principalmente por el desarrollador re-ovo y mantenido ahora bajo la [organización de GitHub rikkahub](https://github.com/rikkahub/rikkahub), el proyecto tiene licencia GNU Affero General Public License v3.0 (AGPL-3.0) y ha acumulado más de 7.400 estrellas desde que se creó el repositorio en marzo de 2025. Esta reseña detalla exactamente qué ejecuta RikkaHub localmente y qué no, sus funciones reales, el precio, y para quién es —y para quién no— una mejor opción que una app on-device como PocketPal AI o Private LLM.',
    metaDescription:
      'Reseña de RikkaHub: app Android gratuita y de código abierto para chatear con proveedores de IA en la nube con tus propias claves API. ¿Corre localmente? Licencia, configuración y veredicto.',
    twitterDescription:
      'Reseña de RikkaHub 2026: la app Android gratuita bajo licencia AGPL-3.0 para alternar entre OpenAI, Gemini, Claude y endpoints API autoalojados. No ejecuta modelos en el dispositivo — esto es lo que realmente hace.',
    audience:
      'Usuarios de Android que ya tienen claves API de proveedores de IA en la nube, o que autoalojan Ollama o LM Studio y buscan una interfaz móvil para ello.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'reseña de RikkaHub',
    targetKeywords: [
      'rikkahub reseña',
      'rikkahub android',
      'rikkahub llm local',
      'rikkahub vs pocketpal ai',
      'es gratis rikkahub',
      'licencia de rikkahub',
      'app android chat ia varios proveedores',
      'conectar ollama a app android',
    ],
    current_models_mentioned: ['modelos GPT de OpenAI', 'Google Gemini', 'Anthropic Claude'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**RikkaHub no ejecuta modelos de IA en tu teléfono — es un cliente Android gratuito y de código abierto (AGPL-3.0) que se conecta a proveedores de IA en la nube usando tus propias claves API, y que opcionalmente puede conectarse a un servidor Ollama o LM Studio autoalojado en tu propia red.** Desarrollado principalmente por re-ovo y alojado en [GitHub](https://github.com/rikkahub/rikkahub) (más de 7.400 estrellas al momento de esta reseña), admite cualquier endpoint compatible con las API de OpenAI, Google o Anthropic mediante una única pantalla de configuración de API/URL/modelo personalizada. La app es completamente gratuita; el único costo continuo es lo que cobre el proveedor de IA al que la conectes.',
    quickAnswerTop: {
      es: {
        question: '¿RikkaHub ejecuta modelos de IA localmente, y vale la pena instalarla?',
        answer:
          'No: RikkaHub no incluye un motor de inferencia en el dispositivo, por lo que no puede ejecutar un modelo de lenguaje directamente en tu teléfono. Vale la pena instalarla si ya tienes claves API de OpenAI, Google Gemini, Anthropic o un proveedor compatible y quieres una sola app de Android bien hecha para alternar entre ellos, o si autoalojas Ollama o LM Studio y quieres una interfaz móvil para tu propio servidor. No es la opción correcta si específicamente quieres un modelo que corra en el dispositivo sin ninguna llamada de red — para eso, usa PocketPal AI o Private LLM.',
        bullets: [
          'Gratuita y de código abierto bajo la licencia AGPL-3.0; el código fuente es público en [GitHub](https://github.com/rikkahub/rikkahub).',
          'Un cliente multiproveedor, no un motor de inferencia local — aportas tu propia clave API para OpenAI, Google Gemini, Anthropic o cualquier servicio compatible con OpenAI.',
          'Puede conectarse a un servidor Ollama o LM Studio autoalojado en tu propia red mediante su campo de API/URL personalizada — el modelo sigue corriendo en ese servidor, no en el teléfono.',
          'Solo para Android, sin versión para iOS; disponible en el [sitio oficial](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) y descarga directa del APK desde [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'Desarrollada principalmente por un desarrollador (GitHub: [re-ovo](https://github.com/re-ovo)) y ahora mantenida bajo la organización rikkahub, con más de 7.400 estrellas y lanzamientos casi diarios al momento de esta reseña.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es RikkaHub?', anchor: 'what-is-rikkahub' },
      { label: '¿RikkaHub ejecuta modelos de IA localmente?', anchor: 'does-rikkahub-run-models-locally' },
      { label: '¿Quién creó RikkaHub?', anchor: 'history-and-developer' },
      { label: 'Cómo empezar con RikkaHub', anchor: 'getting-started' },
      { label: '¿Qué proveedores admite RikkaHub?', anchor: 'providers-supported' },
      { label: '¿Existe RikkaHub para iPhone?', anchor: 'platform-availability' },
      { label: '¿Cuánto cuesta RikkaHub?', anchor: 'pricing' },
      { label: '¿Qué funciones tiene RikkaHub?', anchor: 'key-features' },
      { label: 'Para quién es RikkaHub', anchor: 'who-should-use' },
      { label: 'Para quién no es RikkaHub', anchor: 'who-should-not-use' },
      { label: 'Aviso sobre los forks de RikkaHub', anchor: 'fork-warning' },
      { label: 'RikkaHub frente a las alternativas', anchor: 'vs-alternatives' },
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
            text: 'RikkaHub es una app Android gratuita y de código abierto (AGPL-3.0) que te permite chatear con OpenAI, Google Gemini, Anthropic y otros proveedores de IA compatibles con OpenAI usando tus propias claves API — no ejecuta modelos en el propio dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'Es un control remoto para modelos de IA que ya pagas, o para un servidor que tú mismo gestionas, no una app que pone un modelo directamente en tu teléfono. Si quieres inferencia que ocurra por completo en el dispositivo sin llamadas de red, esta no es esa app — mira PocketPal AI o Private LLM en su lugar.',
          },
        ],
        items: [
          'Gratuita y de código abierto (AGPL-3.0); el código fuente y el rastreador de incidencias son públicos en [GitHub](https://github.com/rikkahub/rikkahub).',
          'Un cliente de chat multiproveedor, no un motor de inferencia local — no existe componente llama.cpp, MLC ni LiteRT-LM en el código base.',
          'Requiere tu propia clave API para OpenAI, Google Gemini, Anthropic o cualquier proveedor compatible con OpenAI; también puede apuntar a un servidor Ollama o LM Studio autoalojado mediante una URL personalizada.',
          'Desarrollada principalmente por re-ovo y mantenida ahora bajo la organización de GitHub rikkahub; más de 7.400 estrellas y más de 640 forks al momento de esta reseña.',
          'Solo Android — disponible en el [sitio oficial](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) y descargas de APK en [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'La app en sí es gratuita, sin compras dentro de la app encontradas al momento de la reseña; el costo continuo depende por completo del proveedor de IA al que la conectes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en el [repositorio público de GitHub](https://github.com/rikkahub/rikkahub) (código fuente, README, lanzamientos y metadatos de la API de GitHub), el sitio del proyecto y la ficha de Google Play, revisados en septiembre de 2026. PromptQuorum no ha realizado pruebas prácticas independientes de RikkaHub para esta reseña — las afirmaciones sobre arquitectura local vs. en la nube se basan en inspeccionar el código fuente público y la documentación, no en una prueba de caja negra.',
          },
        ],
      },
      overview: {
        id: 'what-is-rikkahub',
        title: '¿Qué es RikkaHub?',
        content: [
          '**RikkaHub es una app nativa de Android para alternar entre varios proveedores de IA desde una sola interfaz, usando las claves API que tú mismo proporcionas.** En vez de instalar una app distinta para cada proveedor —una para OpenAI, una para Google Gemini, una para Anthropic Claude—, RikkaHub ofrece una única pantalla de chat con una lista configurable de "proveedores", cada uno apuntando a una URL base, una clave API y un nombre de modelo.',
          'La app está construida de forma nativa en Kotlin con Jetpack Compose, según su propia [documentación de la pila tecnológica](https://github.com/rikkahub/rikkahub/blob/master/README.md), y admite cualquier endpoint que hable los formatos de API de OpenAI, Google o Anthropic — lo que en la práctica incluye a los propios proveedores oficiales, servicios de terceros que revenden acceso a los modelos de varios proveedores, y servidores autoalojados compatibles con OpenAI como Ollama o LM Studio.',
        ],
        note: 'RikkaHub es un cliente de chat, no una app que aloja modelos: el modelo de lenguaje siempre corre en algún lugar distinto del proceso de RikkaHub — en los servidores en la nube del proveedor, o en un equipo que tú controlas si apuntas a un endpoint autoalojado.',
      },
      localVsCloud: {
        id: 'does-rikkahub-run-models-locally',
        title: '¿RikkaHub ejecuta modelos de IA localmente?',
        content: [
          '**No. RikkaHub no incluye un motor de inferencia en el dispositivo y no puede ejecutar un modelo de lenguaje directamente en la CPU, GPU o NPU de tu teléfono.** Es un cliente: configuras una clave API y un endpoint para un proveedor, RikkaHub envía tus mensajes a ese endpoint por la red, y muestra la respuesta que recibe.',
          'Esta es una distinción importante frente a apps móviles como [PocketPal AI](/power-local-llm/pocketpal-ai-review) o [Private LLM](/power-local-llm/private-llm-review), que incluyen un motor de inferencia (llama.cpp u otro similar) y ejecutan un archivo de modelo descargado directamente usando la RAM y la GPU/NPU del propio dispositivo, sin necesitar conexión de red una vez descargado el modelo. El propio [README](https://github.com/rikkahub/rikkahub) de RikkaHub la describe llanamente como "an Android APP that supports for multiple LLM providers" — la palabra "local" no aparece en ninguna parte de su lista de funciones, y una búsqueda en todo el árbol de código fuente público (más de 1.900 archivos, revisado en septiembre de 2026) no encuentra ningún componente llama.cpp, MLC, LiteRT ni LiteRT-LM en ninguna parte del código.',
          'Lo más cercano a "IA local" que ofrece RikkaHub es apuntar su campo de API/URL personalizada a un servidor en tu propia red en lugar de un endpoint público en la nube — por ejemplo, [Ollama](https://ollama.com) o [LM Studio](https://lmstudio.ai) corriendo en un PC de tu casa, exponiendo una API compatible con OpenAI. En esa configuración, el modelo sigue ejecutándose en el hardware del PC, no en el del teléfono; RikkaHub actúa como una interfaz móvil para un servidor que tú controlas, lo cual mantiene tus datos de conversación fuera de infraestructura en la nube de terceros, pero es una configuración —y una historia de privacidad y hardware— materialmente distinta a una app que ejecuta el modelo en el propio dispositivo.',
        ],
        decisionBlock: {
          title: '¿RikkaHub o una app on-device?',
          localIf: [
            'Quieres que la inferencia ocurra en el propio teléfono, con cero llamadas de red una vez descargado un modelo — usa [PocketPal AI](/power-local-llm/pocketpal-ai-review) o [Private LLM](/power-local-llm/private-llm-review) en su lugar.',
            'Necesitas que la app funcione sin ninguna ruta de red disponible, ni siquiera a un dispositivo en la misma Wi-Fi — RikkaHub siempre necesita alcanzar un endpoint API, aunque sea local.',
          ],
          cloudIf: [
            'Ya tienes acceso API a OpenAI, Google Gemini o Anthropic Claude y quieres una sola app de Android para alternar entre ellos sin usar apps separadas de cada proveedor.',
            'Autoalojas Ollama o LM Studio en un servidor doméstico o PC y quieres una interfaz móvil de chat bien hecha para ello en tu propia red.',
          ],
          quick: [
            'Inferencia en el dispositivo, sin red jamás: PocketPal AI o Private LLM.',
            'Cliente con tu propia clave para varios proveedores en la nube: RikkaHub.',
            'Interfaz móvil para tu propio servidor Ollama/LM Studio autoalojado: RikkaHub, apuntada a la dirección de red local de tu servidor.',
          ],
        },
      },
      history: {
        id: 'history-and-developer',
        title: '¿Quién creó RikkaHub?',
        content: [
          '**RikkaHub fue creada principalmente por un desarrollador con el usuario de GitHub [re-ovo](https://github.com/re-ovo), responsable de la gran mayoría de los commits en la historia del proyecto; el repositorio se aloja ahora bajo la [organización de GitHub rikkahub](https://github.com/rikkahub) en lugar de una cuenta personal.** El repositorio se creó el 11 de marzo de 2025 y ha crecido hasta convertirse en un proyecto activamente mantenido, con aportes de un pequeño grupo de desarrolladores adicionales además del mantenedor principal.',
          'RikkaHub es explícito en sus propias [pautas de contribución](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) sobre ser un proyecto con criterio propio: las pull requests que añaden nuevos idiomas, nuevas funciones o refactorizaciones a gran escala generadas por IA se rechazan de plano. El proyecto acepta patrocinio de la comunidad —su README lista patrocinadores pagos como [aihubmix.com](https://aihubmix.com), un servicio de reenvío de API— y recibe donaciones voluntarias a través de [Patreon](https://patreon.com/rikkahub) y la plataforma china 爱发电 (afdian.com).',
        ],
        items: [
          'Desarrollador principal: el usuario de GitHub [re-ovo](https://github.com/re-ovo), responsable de la gran mayoría de los commits en la historia del proyecto.',
          'Repositorio creado el 11 de marzo de 2025; alojado ahora bajo la [organización rikkahub](https://github.com/rikkahub) en lugar de una cuenta personal.',
          'Licencia: GNU Affero General Public License v3.0 (AGPL-3.0) — una licencia copyleft más estricta que la licencia MIT usada por algunas apps competidoras; obliga a quien ejecute una versión modificada como servicio de red a publicar sus cambios de código fuente.',
          'Más de 7.400 estrellas en GitHub y más de 640 forks al momento de esta reseña, con un rastreador de incidencias activo (más de 280 abiertas) y lanzamientos casi diarios.',
          'Rechaza explícitamente las pull requests de nuevos idiomas, nuevas funciones y grandes refactorizaciones generadas por IA, según sus propias pautas de contribución — un proyecto deliberadamente con criterio propio, no orientado a recibir amplias contribuciones de funciones de la comunidad.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar con RikkaHub',
        content: [
          '**Para que RikkaHub funcione necesitas una clave API existente de un proveedor — la app no incluye ningún acceso a IA gratuito o incluido.** En este flujo no hay ningún modelo que descargar al dispositivo; estás conectando la app a una cuenta que ya tienes, o a un servidor que ya gestionas.',
        ],
        numberedItems: [
          {
            title: 'Instala la app',
            whyItMatters: 'Descarga RikkaHub desde el [sitio oficial](https://rikka-ai.com/download) (recomendado por el proyecto) o [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub). Los usuarios técnicos también pueden cargar el APK directamente desde [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          },
          {
            title: 'Añade un proveedor',
            whyItMatters: 'Abre los ajustes de proveedores y añade una nueva entrada: elige un formato de API (compatible con OpenAI, Google o Anthropic), luego introduce la URL base, tu clave API y el nombre del modelo que quieres usar. Aquí es donde introducirías los datos de un proveedor en la nube, de un servicio de reenvío de API, o la dirección de red local de tu propio servidor autoalojado.',
          },
          {
            title: 'Selecciona el modelo y empieza a chatear',
            whyItMatters: 'Una vez configurado un proveedor, elígelo en el selector de modelos e inicia una conversación. Cada mensaje se envía al endpoint que configuraste — no hay modo sin conexión fuera de las propias pantallas de ajustes de la app.',
          },
          {
            title: 'Opcional: conecta herramientas y búsqueda',
            whyItMatters: 'Añade un servidor MCP (Model Context Protocol), o introduce tu propia clave API para un proveedor de búsqueda web como Exa, Tavily o Brave, para ampliar lo que el modelo conectado puede hacer durante la conversación. Ambas opciones son opcionales y requieren credenciales que tú mismo proporcionas.',
          },
        ],
      },
      providersSupported: {
        id: 'providers-supported',
        title: '¿Qué proveedores admite RikkaHub?',
        itemHeadings: true,
        columns: ['Tipo de proveedor', 'Ejemplos', 'Qué necesitas'],
        rows: [
          {
            'Tipo de proveedor': 'APIs compatibles con OpenAI',
            'Ejemplos': 'La propia API de OpenAI, y cualquier servicio de terceros que exponga el mismo formato de solicitud',
            'Qué necesitas': 'Una clave API y la URL base del proveedor',
          },
          {
            'Tipo de proveedor': 'APIs compatibles con Google',
            'Ejemplos': 'Modelos Google Gemini',
            'Qué necesitas': 'Una clave API de Google AI',
          },
          {
            'Tipo de proveedor': 'APIs compatibles con Anthropic',
            'Ejemplos': 'Modelos Anthropic Claude',
            'Qué necesitas': 'Una clave API de Anthropic',
          },
          {
            'Tipo de proveedor': 'Servicios de reenvío/proxy de API',
            'Ejemplos': 'Servicios de terceros que revenden acceso a modelos de varios proveedores tras una sola clave, como el patrocinador del proyecto [aihubmix.com](https://aihubmix.com)',
            'Qué necesitas': 'La clave API y la URL base propias del servicio de reenvío, introducidas igual que un proveedor directo',
          },
          {
            'Tipo de proveedor': 'Servidores locales autoalojados',
            'Ejemplos': 'Ollama o LM Studio corriendo en tu propio PC o servidor doméstico, mediante su endpoint compatible con OpenAI integrado',
            'Qué necesitas': 'La dirección de red local de tu servidor (por ejemplo http://192.168.1.50:11434/v1) — no requiere clave API en la nube, pero el modelo corre en esa máquina, no en tu teléfono',
          },
        ],
        note: 'RikkaHub no incluye ni revende acceso a ningún proveedor por sí misma. Cada conexión —en la nube o autoalojada— se configura con credenciales o una dirección de red que tú mismo proporcionas.',
      },
      platform: {
        id: 'platform-availability',
        title: '¿Existe RikkaHub para iPhone?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidad', 'Notas'],
        rows: [
          {
            'Plataforma': 'Android',
            'Disponibilidad': 'Disponible en el [sitio oficial](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) y descarga directa de APK desde [GitHub Releases](https://github.com/rikkahub/rikkahub/releases)',
            'Notas': 'La app nativa; esta reseña cubre esta versión.',
          },
          {
            'Plataforma': 'iPhone / iPad',
            'Disponibilidad': 'No se encontró ninguna app nativa de iOS al momento de la reseña',
            'Notas': 'Los usuarios de iPhone que busquen un cliente multiproveedor similar deberían considerar una app de iOS dedicada; RikkaHub no publica ninguna actualmente.',
          },
          {
            'Plataforma': 'Web / navegador',
            'Disponibilidad': 'Existe una interfaz web complementaria en el repositorio de código fuente del proyecto',
            'Notas': 'Pensada como contraparte basada en navegador de la app de Android, no como un servicio público alojado — usarla requiere configurarla tú mismo desde el código fuente.',
          },
          {
            'Plataforma': 'Escritorio (Windows/macOS/Linux)',
            'Disponibilidad': 'Existe un proyecto comunitario separado, rikkahub-desktop, pero no forma parte del repositorio oficial rikkahub/rikkahub',
            'Notas': 'No lo mantiene el mismo equipo principal; trátalo como un fork de terceros, no como un lanzamiento oficial.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: '¿Cuánto cuesta RikkaHub?',
        content: [
          '**RikkaHub en sí es gratuita de descargar y usar; no se encontró ninguna suscripción ni compra dentro de la app en la app o su documentación al momento de la reseña.** El proyecto acepta donaciones voluntarias a través de [Patreon](https://patreon.com/rikkahub) y 爱发电 (afdian.com), y lista patrocinadores pagos en su README, pero ninguno de los dos es necesario para usar la app.',
          'El costo real de usar RikkaHub es lo que cobre el proveedor de IA al que te conectes — OpenAI, Google Gemini y Anthropic facturan sus API por token, y un servidor Ollama o LM Studio autoalojado no cobra por mensaje pero requiere hardware que ya posees o pagas por separado. RikkaHub no encarece, no mide ni se queda con una parte del costo de la API de ningún proveedor; simplemente reenvía tus solicitudes usando la clave que proporcionaste.',
        ],
        items: [
          '**La app:** Gratuita, de código abierto (AGPL-3.0), sin suscripción.',
          '**Uso de proveedores en la nube:** Facturado directamente por el proveedor (OpenAI, Google, Anthropic o un servicio de reenvío) según su propio precio — RikkaHub no añade margen.',
          '**Uso de un servidor autoalojado:** Sin cargo por mensaje, pero requiere un PC o servidor capaz de ejecutar Ollama o LM Studio, un costo de hardware separado ajeno a RikkaHub.',
          '**Donaciones opcionales:** A través de Patreon o 爱发电, totalmente voluntarias y sin relación con la funcionalidad de la app.',
        ],
      },
      features: {
        id: 'key-features',
        title: '¿Qué funciones tiene RikkaHub?',
        content: [
          '**Más allá del chat básico multiproveedor, RikkaHub ha acumulado un amplio conjunto de funciones típico de un cliente de chat con criterio propio y desarrollo activo, según su propio [README](https://github.com/rikkahub/rikkahub/blob/master/README.md).** Estas incluyen:',
        ],
        items: [
          '**Diseño Material You y modo oscuro.** La interfaz sigue el sistema de temas dinámicos de Android.',
          '**Workspace.** Un entorno de agente Linux basado en proot incluido en la app — una shell de Linux en sandbox que un agente de IA puede usar para ejecutar comandos, distinto de cualquier inferencia de modelo de lenguaje.',
          '**Soporte de MCP (Model Context Protocol).** El modelo conectado puede invocar herramientas expuestas por un servidor MCP durante la conversación.',
          '**Entrada multimodal.** Acepta imágenes, PDFs y documentos de Word como adjuntos del chat (el soporte depende de las capacidades propias del modelo conectado).',
          '**Ramificación de mensajes.** Permite explorar respuestas alternativas desde un mismo punto de la conversación en lugar de un historial solo lineal.',
          '**Integraciones de búsqueda.** Búsqueda web opcional con tu propia clave API para proveedores como Exa, Tavily, Zhipu, LinkUp, Brave o Perplexity.',
          '**Renderizado de Markdown.** Resaltado de sintaxis de código, fórmulas LaTeX, tablas y renderizado de diagramas Mermaid en las respuestas.',
          '**Importación/exportación por código QR.** Las configuraciones de proveedor (incluidas las claves API) se pueden compartir entre dispositivos mediante código QR — trátalo como compartir una contraseña, ya que contiene tus credenciales.',
          '**Importación de tarjetas de personaje de SillyTavern.** Compatible con un formato de archivo de persona de rol común usado por otras interfaces de chat.',
          '**Encabezados HTTP y cuerpos de solicitud personalizados.** Los usuarios avanzados pueden modificar la solicitud sin procesar enviada a un proveedor, útil para proveedores con autenticación o parámetros no estándar.',
        ],
        note: 'La disponibilidad de funciones puede variar según la versión de la app, ya que el proyecto publica lanzamientos casi diarios. Consulta la [página de lanzamientos de GitHub](https://github.com/rikkahub/rikkahub/releases) para ver qué está disponible en tu versión instalada.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es RikkaHub',
        items: [
          '**Usuarios que ya pagan por APIs de IA en la nube y quieren una sola app de Android para todas.** Si tienes claves API de OpenAI, Google Gemini y Anthropic Claude y estás cansado de alternar entre apps separadas de cada proveedor, la interfaz única de RikkaHub encaja directamente.',
          '**Usuarios que autoalojan Ollama o LM Studio y quieren un cliente móvil para ello.** El campo de API/URL personalizada de RikkaHub funciona con cualquier servidor compatible con OpenAI, incluido uno corriendo en tu propia red doméstica.',
          '**Desarrolladores y usuarios técnicamente curiosos cómodos gestionando sus propias claves API.** No hay acceso a IA incluido — cada función requiere que proporciones credenciales tú mismo, lo cual encaja con usuarios que ya entienden cómo funciona la facturación por API.',
          '**Usuarios que quieren una app activamente mantenida y actualizada con frecuencia.** El proyecto publica lanzamientos casi diarios y tiene una base de colaboradores grande y activa en comparación con clientes de chat similares para Android.',
          '**Usuarios que quieren funciones de invocación de herramientas y agentes sobre un modelo en la nube.** El soporte de MCP y el sandbox Workspace amplían lo que un modelo conectado puede hacer más allá del chat de texto plano, para usuarios cómodos configurando estas funciones avanzadas.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quién no es RikkaHub',
        items: [
          '**Usuarios que quieren IA corriendo por completo en su dispositivo sin conexión de red.** RikkaHub siempre necesita alcanzar un endpoint API, local o en la nube; quienes quieran una app genuinamente sin conexión deberían usar [PocketPal AI](/power-local-llm/pocketpal-ai-review) o [Private LLM](/power-local-llm/private-llm-review) en su lugar.',
          '**Usuarios que no tienen ya una clave API y no quieren gestionar una.** RikkaHub no incluye ningún acceso a IA gratuito o incluido — quien quiera abrir una app y chatear de inmediato sin ninguna configuración ni cuenta debería buscar una app curada con modelos incorporados.',
          '**Usuarios de iPhone o iPad.** RikkaHub no tenía ninguna versión oficial de iOS al momento de la reseña; los usuarios de Apple deberían considerar una app de iOS dedicada como Private LLM o Enclave AI.',
          '**Usuarios que quieren la menor carga técnica posible de configuración.** Añadir un proveedor requiere introducir correctamente el formato de API, la URL base, la clave y el nombre del modelo — no hay un flujo de un solo toque de "descargar y chatear" como en las apps on-device.',
          '**Usuarios especialmente preocupados por que se modifique y redistribuya sin publicar el código fuente.** La licencia AGPL-3.0 es una fortaleza para la transparencia, pero también significa que cualquiera que haga un fork de RikkaHub y ejecute una versión modificada como servicio de red está legalmente obligado a publicar sus cambios — lee la propia licencia si esto afecta a un despliegue que estés planeando.',
        ],
      },
      forkWarning: {
        id: 'fork-warning',
        title: 'Aviso sobre los forks de RikkaHub',
        content: [
          '**El propio README de RikkaHub advierte explícitamente que "existen muchas versiones bifurcadas (forks) de RikkaHub" y que los problemas con los forks no están relacionados con el proyecto oficial.** El proyecto pide a los usuarios "usar los forks con precaución para evitar fugas de privacidad o solicitudes de permisos excesivas" — una advertencia que vale la pena repetir aquí, ya que una app bifurcada puede solicitar permisos distintos o enviar datos de forma diferente a la del lanzamiento oficial, sin la revisión ni el aval del desarrollador original.',
          'Como las claves API se introducen directamente en la app para configurar un proveedor, instalar un fork no oficial significa confiar esas credenciales al código de ese fork. Esta reseña cubre únicamente el proyecto oficial [rikkahub/rikkahub](https://github.com/rikkahub/rikkahub), distribuido a través de su [sitio oficial](https://rikka-ai.com/download), su ficha de [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) bajo el nombre de paquete `me.rerere.rikkahub`, y su propia página de GitHub Releases.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'RikkaHub frente a las alternativas',
        itemHeadings: true,
        columns: ['App', 'Licencia / costo', 'Plataformas', '¿Corre localmente?'],
        rows: [
          {
            'App': 'RikkaHub',
            'Licencia / costo': 'Gratuita, código abierto (AGPL-3.0)',
            'Plataformas': 'Android',
            '¿Corre localmente?': 'No — solo cliente de API en la nube/autoalojada; aportas tu propia clave o servidor',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Licencia / costo': 'Gratuita, código abierto (MIT)',
            'Plataformas': 'iPhone/iPad, Android',
            '¿Corre localmente?': 'Sí — descarga y ejecuta modelos GGUF en el dispositivo mediante llama.cpp',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Licencia / costo': 'De pago, compra única; código cerrado',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            '¿Corre localmente?': 'Sí — más de 140 modelos on-device con cuantización OmniQuant y GPTQ',
          },
          {
            'App': 'LLM Farm',
            'Licencia / costo': 'Gratuita, código abierto; retirada de la App Store al momento de la reseña',
            'Plataformas': 'iPhone/iPad, Mac (compilar desde el código fuente)',
            '¿Corre localmente?': 'Sí — inferencia on-device basada en llama.cpp, si se compila desde su [código fuente en GitHub](https://github.com/guinmoon/LLMFarm)',
          },
          {
            'App': 'Layla',
            'Licencia / costo': 'Freemium; código cerrado',
            'Plataformas': 'Android',
            '¿Corre localmente?': 'Sí — formatos de modelo GGUF, LiteRT-LM y PTE en el dispositivo; consulta [layla-network.ai](https://www.layla-network.ai) para la disponibilidad actual de planes',
          },
          {
            'App': 'Maid',
            'Licencia / costo': 'Gratuita, código abierto',
            'Plataformas': 'Android, Windows, macOS, Linux',
            '¿Corre localmente?': 'Sí con modelos GGUF/llama.cpp; también puede conectarse de forma remota a Ollama o a un proveedor en la nube, según su [repositorio de GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)',
          },
          {
            'App': 'AnythingLLM Mobile',
            'Licencia / costo': 'Gratuita; proyecto central de código abierto',
            'Plataformas': 'Android (iOS planeado)',
            '¿Corre localmente?': 'Presentada como on-device/local-first para el historial de chat y RAG de documentos, según su [repositorio de GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile); también puede conectarse a modelos en la nube',
          },
          {
            'App': 'Open WebUI',
            'Licencia / costo': 'Gratuita, código abierto',
            'Plataformas': 'App web autoalojada (cualquier dispositivo con navegador)',
            '¿Corre localmente?': 'No — al igual que RikkaHub, es una interfaz que apuntas a Ollama u otro endpoint compatible con OpenAI; el punto de comparación arquitectónico más cercano a RikkaHub, aunque está orientada a escritorio/autoalojamiento en lugar de una app móvil nativa, según su [repositorio de GitHub](https://github.com/open-webui/open-webui)',
          },
        ],
        note: 'RikkaHub y Open WebUI son las dos entradas de esta tabla que no ejecutan modelos en el dispositivo — ambas son interfaces para una API en la nube o un servidor autoalojado que ya gestionas. El resto de apps listadas incluyen un motor de inferencia on-device, que es la diferencia arquitectónica central a entender antes de elegir entre ellas.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿RikkaHub ejecuta modelos de IA localmente en mi teléfono?',
            a: 'No. RikkaHub es un cliente de chat que se conecta a proveedores de IA en la nube (OpenAI, Google Gemini, Anthropic o cualquier API compatible con OpenAI) usando tu propia clave API. No incluye un motor de inferencia en el dispositivo. Puede conectarse a un servidor Ollama o LM Studio autoalojado en tu propia red, pero el modelo sigue corriendo en el hardware de ese servidor, no en el teléfono.',
          },
          {
            q: '¿Es gratis RikkaHub?',
            a: 'Sí, la app en sí es gratuita de descargar y usar; no se encontró ninguna suscripción ni compra dentro de la app al momento de la reseña. El único costo es lo que cobre el proveedor de IA al que la conectes — RikkaHub no cobra margen ni comisión propia.',
          },
          {
            q: '¿Quién desarrolló RikkaHub?',
            a: 'RikkaHub fue creada principalmente por un desarrollador con el usuario de GitHub re-ovo, responsable de la gran mayoría de los commits en la historia del proyecto. El repositorio se aloja ahora bajo la organización de GitHub rikkahub y cuenta con colaboradores adicionales.',
          },
          {
            q: '¿RikkaHub es de código abierto, y qué licencia usa?',
            a: 'Sí. El código fuente de RikkaHub es público en GitHub bajo la GNU Affero General Public License v3.0 (AGPL-3.0). Es una licencia copyleft: quien modifique RikkaHub y la ejecute como servicio de red está obligado a publicar sus cambios de código fuente, una condición más estricta que la licencia MIT usada por algunas apps competidoras.',
          },
          {
            q: '¿Qué proveedores de IA puedo usar con RikkaHub?',
            a: 'Cualquier proveedor o servicio que exponga una API compatible con OpenAI, Google o Anthropic — esto incluye las API oficiales de OpenAI, Google Gemini y Anthropic Claude, servicios de reenvío de API de terceros, y servidores autoalojados como Ollama o LM Studio.',
          },
          {
            q: '¿Puedo usar RikkaHub sin conexión a internet?',
            a: 'No, no en el sentido habitual. RikkaHub siempre necesita alcanzar un endpoint API para generar una respuesta — incluso un servidor Ollama o LM Studio autoalojado en tu red local requiere una conexión de red entre tu teléfono y ese servidor.',
          },
          {
            q: '¿Existe RikkaHub para iPhone?',
            a: 'No. RikkaHub no tenía ninguna versión oficial de iOS al momento de la reseña; es una app exclusiva de Android. Los usuarios de iPhone que busquen un cliente de chat multiproveedor similar deberían evaluar una app de iOS dedicada.',
          },
          {
            q: '¿Puede RikkaHub conectarse a mi propio servidor Ollama?',
            a: 'Sí. El campo de API/URL personalizada de RikkaHub acepta cualquier endpoint compatible con OpenAI, incluido un servidor Ollama o LM Studio autoalojado que exponga su API compatible con OpenAI integrada en tu red local. El modelo sigue corriendo en el hardware de ese servidor, no en el teléfono.',
          },
          {
            q: '¿Son seguros de usar los forks de RikkaHub?',
            a: 'El propio README de RikkaHub advierte explícitamente que existen versiones bifurcadas y que no están relacionadas con el proyecto oficial, aconsejando a los usuarios "usar los forks con precaución para evitar fugas de privacidad o solicitudes de permisos excesivas". Esta reseña cubre únicamente la app oficial rikkahub/rikkahub, distribuida a través de su sitio oficial, Google Play bajo el nombre de paquete me.rerere.rikkahub, y su propia página de GitHub Releases.',
          },
          {
            q: '¿Cómo se compara RikkaHub con PocketPal AI o Private LLM?',
            a: 'RikkaHub es un cliente de API en la nube/autoalojada sin inferencia en el dispositivo, mientras que PocketPal AI y Private LLM descargan y ejecutan modelos de peso abierto directamente en el dispositivo mediante motores basados en llama.cpp. Elige RikkaHub si ya tienes acceso API o un servidor autoalojado y quieres una interfaz de Android bien hecha para ello; elige PocketPal AI o Private LLM si específicamente quieres un modelo corriendo en el dispositivo sin dependencia de red tras la descarga. Consulta la tabla comparativa anterior para detalles de plataforma y licencia.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'RikkaHub es una app de Android bien construida y activamente mantenida para una tarea específica: darte una única interfaz bien hecha para hablar con el proveedor de IA que ya pagas, o con un servidor que tú mismo gestionas. No es, ni pretende ser, una app de IA on-device — no hay ningún motor de inferencia local en ninguna parte de su código, y cada conversación sale del teléfono para alcanzar un endpoint API en otro lugar. Juzgada por lo que realmente es —un cliente de chat multiproveedor gratuito, de código abierto y bajo AGPL-3.0—, es una opción sólida para usuarios de Android que ya gestionan claves API o autoalojan Ollama o LM Studio y quieren una sola app actualizada con frecuencia en lugar de varias específicas de cada proveedor. Es la elección equivocada para quien quiera específicamente IA corriendo por completo en su propio dispositivo sin ningún servidor involucrado — para eso, PocketPal AI o Private LLM son las apps que hay que evaluar.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[RikkaHub en GitHub](https://github.com/rikkahub/rikkahub) — código fuente, README, licencia (AGPL-3.0), historial de lanzamientos y cifras de estrellas/forks citadas en esta reseña.',
          '[Lanzamientos de RikkaHub en GitHub](https://github.com/rikkahub/rikkahub/releases) — ritmo de lanzamientos y descarga del APK.',
          '[CONTRIBUTING.md de RikkaHub](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) — política de contribución citada para la postura del proyecto sobre las pull requests.',
          '[Sitio oficial de RikkaHub](https://rikka-ai.com/download) — fuente de descarga recomendada según el propio README del proyecto.',
          '[RikkaHub en Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) — disponibilidad en Android.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de PocketPal AI (2026)](/power-local-llm/pocketpal-ai-review) — una app gratuita y de código abierto que sí ejecuta modelos GGUF en el dispositivo, el contraste arquitectónico directo con RikkaHub.',
          '[Reseña de Private LLM](/power-local-llm/private-llm-review) — una alternativa de pago y código cerrado on-device para iPhone, iPad y Mac con un catálogo de más de 140 modelos.',
          '[Las mejores apps de LLM local para Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — el repaso de apps on-device para Android, para lectores que buscan específicamente inferencia local en lugar de un cliente en la nube.',
          '[Las mejores apps de LLM local para iPhone en 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — el equivalente en iOS, para lectores que necesitan una opción on-device para plataformas Apple, ya que RikkaHub no ofrece ninguna.',
          '[Los mejores modelos LLM móviles en 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — el artículo complementario sobre modelos, para quien decida que prefiere inferencia local en vez de un cliente en la nube como RikkaHub.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RikkaHub: reseña (2026) — chat de IA multiproveedor para Android',
      description:
        'Reseña de RikkaHub: app Android gratuita y de código abierto para chatear con proveedores de IA en la nube con tus propias claves API. ¿Corre localmente? Licencia, configuración y veredicto.',
      url: 'https://promptquorum.com/es/power-local-llm/rikkahub-review',
      inLanguage: 'es',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuarios de Android que evalúan clientes de chat de IA multiproveedor e interfaces para LLM autoalojados' },
      about: [
        { '@type': 'Thing', name: 'RikkaHub' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LM Studio' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/rikkahub-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'RikkaHub: reseña (2026)', item: 'https://promptquorum.com/es/power-local-llm/rikkahub-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/rikkahub-review-hero-fr.webp',
    title: 'RikkaHub : test (2026) — chat IA multi-fournisseurs pour Android',
    seoTitle: 'RikkaHub 2026 : test de l\'app Android open source',
    intro:
      'RikkaHub est une application Android gratuite et open source qui permet de dialoguer avec des fournisseurs d\'IA dans le cloud — OpenAI, Google Gemini, Anthropic et tout endpoint compatible OpenAI — depuis une seule interface, avec vos propres clés API. Elle n\'exécute aucun modèle de langage sur le téléphone lui-même : c\'est un client, pas un moteur d\'inférence embarqué, même si elle peut se connecter à un serveur Ollama ou LM Studio auto-hébergé sur votre propre réseau via ce même champ d\'endpoint personnalisé. Développé principalement par le développeur re-ovo et désormais maintenu sous l\'[organisation GitHub rikkahub](https://github.com/rikkahub/rikkahub), le projet est sous licence GNU Affero General Public License v3.0 (AGPL-3.0) et a cumulé plus de 7 400 étoiles depuis la création du dépôt en mars 2025. Ce test détaille précisément ce que RikkaHub exécute localement et ce qu\'elle n\'exécute pas, ses fonctionnalités réelles, son prix, et à qui elle s\'adresse — ou ne s\'adresse pas — par rapport à une application embarquée comme PocketPal AI ou Private LLM.',
    metaDescription:
      'Test de RikkaHub : app Android gratuite et open source pour dialoguer avec des fournisseurs d\'IA cloud via vos propres clés API. Tourne-t-elle en local ? Licence, configuration et verdict.',
    twitterDescription:
      'Test de RikkaHub 2026 : l\'app Android gratuite sous licence AGPL-3.0 pour basculer entre OpenAI, Gemini, Claude et des endpoints API auto-hébergés. Elle n\'exécute pas de modèles sur l\'appareil — voici ce qu\'elle fait réellement.',
    audience:
      'Utilisateurs Android disposant déjà de clés API pour des fournisseurs d\'IA cloud, ou auto-hébergeant Ollama ou LM Studio et cherchant une interface mobile pour cela.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'test de RikkaHub',
    targetKeywords: [
      'rikkahub test',
      'rikkahub android',
      'rikkahub llm local',
      'rikkahub vs pocketpal ai',
      'rikkahub gratuit',
      'licence rikkahub',
      'app android chat ia plusieurs fournisseurs',
      'connecter ollama a une app android',
    ],
    current_models_mentioned: ['modèles GPT d\'OpenAI', 'Google Gemini', 'Anthropic Claude'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**RikkaHub n\'exécute aucun modèle d\'IA sur votre téléphone — c\'est un client Android gratuit et open source (AGPL-3.0) qui se connecte à des fournisseurs d\'IA cloud via vos propres clés API, et qui peut en option se connecter à un serveur Ollama ou LM Studio auto-hébergé sur votre propre réseau.** Développé principalement par re-ovo et hébergé sur [GitHub](https://github.com/rikkahub/rikkahub) (plus de 7 400 étoiles au moment du test), il prend en charge tout endpoint compatible avec les API OpenAI, Google ou Anthropic via un seul écran de configuration API/URL/modèle personnalisé. L\'application est entièrement gratuite ; le seul coût récurrent est celui facturé par le fournisseur d\'IA auquel vous la connectez.',
    quickAnswerTop: {
      fr: {
        question: 'RikkaHub exécute-t-elle des modèles d\'IA en local, et vaut-elle le coup d\'être installée ?',
        answer:
          'Non : RikkaHub n\'intègre aucun moteur d\'inférence embarqué et ne peut donc pas exécuter un modèle de langage directement sur votre téléphone. L\'installation vaut le coup si vous disposez déjà de clés API pour OpenAI, Google Gemini, Anthropic ou un fournisseur compatible et souhaitez une seule application Android soignée pour basculer entre eux, ou si vous auto-hébergez Ollama ou LM Studio et cherchez une interface mobile pour votre propre serveur. Ce n\'est pas le bon choix si vous voulez spécifiquement un modèle tournant sur l\'appareil sans aucun appel réseau — pour cela, utilisez plutôt PocketPal AI ou Private LLM.',
        bullets: [
          'Gratuite et open source sous licence AGPL-3.0 ; le code source est public sur [GitHub](https://github.com/rikkahub/rikkahub).',
          'Un client multi-fournisseurs, pas un moteur d\'exécution embarqué — vous apportez votre propre clé API pour OpenAI, Google Gemini, Anthropic ou tout service compatible OpenAI.',
          'Peut se connecter à un serveur Ollama ou LM Studio auto-hébergé sur votre propre réseau via son champ d\'API/URL personnalisée — le modèle continue de tourner sur ce serveur, pas sur le téléphone.',
          'Android uniquement, pas de version iOS ; disponible sur le [site officiel](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) et en téléchargement direct de l\'APK via [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'Développée principalement par un seul développeur (GitHub : [re-ovo](https://github.com/re-ovo)) et désormais maintenue sous l\'organisation rikkahub, avec plus de 7 400 étoiles et des versions publiées presque quotidiennement au moment du test.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que RikkaHub ?', anchor: 'what-is-rikkahub' },
      { label: 'RikkaHub exécute-t-elle des modèles d\'IA en local ?', anchor: 'does-rikkahub-run-models-locally' },
      { label: 'Qui a créé RikkaHub ?', anchor: 'history-and-developer' },
      { label: 'Comment démarrer avec RikkaHub', anchor: 'getting-started' },
      { label: 'Quels fournisseurs RikkaHub prend-elle en charge ?', anchor: 'providers-supported' },
      { label: 'RikkaHub est-elle disponible sur iPhone ?', anchor: 'platform-availability' },
      { label: 'Combien coûte RikkaHub ?', anchor: 'pricing' },
      { label: 'Quelles fonctionnalités propose RikkaHub ?', anchor: 'key-features' },
      { label: 'À qui s\'adresse RikkaHub', anchor: 'who-should-use' },
      { label: 'À qui RikkaHub ne s\'adresse pas', anchor: 'who-should-not-use' },
      { label: 'Un mot sur les forks de RikkaHub', anchor: 'fork-warning' },
      { label: 'RikkaHub face aux alternatives', anchor: 'vs-alternatives' },
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
            text: 'RikkaHub est une application Android gratuite et open source (AGPL-3.0) qui permet de dialoguer avec OpenAI, Google Gemini, Anthropic et d\'autres fournisseurs d\'IA compatibles OpenAI via vos propres clés API — elle n\'exécute pas de modèles sur l\'appareil lui-même.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est une télécommande pour des modèles d\'IA que vous payez déjà, ou pour un serveur que vous gérez vous-même, pas une application qui place un modèle directement sur votre téléphone. Si vous voulez une inférence se déroulant entièrement sur l\'appareil sans appel réseau, ce n\'est pas cette application — voyez plutôt PocketPal AI ou Private LLM.',
          },
        ],
        items: [
          'Gratuite et open source (AGPL-3.0) ; code source et suivi des tickets publics sur [GitHub](https://github.com/rikkahub/rikkahub).',
          'Un client de chat multi-fournisseurs, pas un moteur d\'inférence embarqué — aucun composant llama.cpp, MLC ou LiteRT-LM dans le code source.',
          'Nécessite votre propre clé API pour OpenAI, Google Gemini, Anthropic ou tout fournisseur compatible OpenAI ; peut aussi cibler un serveur Ollama ou LM Studio auto-hébergé via une URL personnalisée.',
          'Développée principalement par re-ovo et désormais maintenue sous l\'organisation GitHub rikkahub ; plus de 7 400 étoiles et plus de 640 forks au moment du test.',
          'Android uniquement — disponible sur le [site officiel](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) et via les téléchargements APK sur [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'L\'application elle-même est gratuite, sans achat intégré constaté au moment du test ; le coût récurrent dépend entièrement du fournisseur d\'IA auquel vous la connectez.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur le [dépôt public GitHub](https://github.com/rikkahub/rikkahub) (code source, README, releases et métadonnées de l\'API GitHub), le site du projet et la fiche Google Play, vérifiés en septembre 2026. PromptQuorum n\'a pas réalisé de benchmarks pratiques indépendants de RikkaHub pour ce test — les affirmations sur l\'architecture locale/cloud ci-dessous reposent sur l\'inspection du code source public et de la documentation, pas sur un test en boîte noire.',
          },
        ],
      },
      overview: {
        id: 'what-is-rikkahub',
        title: 'Qu\'est-ce que RikkaHub ?',
        content: [
          '**RikkaHub est une application Android native permettant de basculer entre plusieurs fournisseurs d\'IA depuis une seule interface, avec les clés API que vous fournissez vous-même.** Plutôt que d\'installer une application distincte par fournisseur — une pour OpenAI, une pour Google Gemini, une pour Anthropic Claude —, RikkaHub propose un écran de chat unique avec une liste configurable de « fournisseurs », chacun pointant vers une URL de base, une clé API et un nom de modèle.',
          'L\'application est développée nativement en Kotlin avec Jetpack Compose, selon sa propre [documentation de stack technique](https://github.com/rikkahub/rikkahub/blob/master/README.md), et prend en charge tout endpoint parlant les formats d\'API OpenAI, Google ou Anthropic — ce qui inclut en pratique les fournisseurs officiels eux-mêmes, des services de relais/proxy tiers revendant l\'accès aux modèles de plusieurs fournisseurs, et des serveurs auto-hébergés compatibles OpenAI comme Ollama ou LM Studio.',
        ],
        note: 'RikkaHub est un client de chat, pas une application hébergeant des modèles : le modèle de langage lui-même s\'exécute toujours ailleurs que dans le processus de RikkaHub — sur les serveurs cloud du fournisseur, ou sur un ordinateur que vous contrôlez si vous ciblez un endpoint auto-hébergé.',
      },
      localVsCloud: {
        id: 'does-rikkahub-run-models-locally',
        title: 'RikkaHub exécute-t-elle des modèles d\'IA en local ?',
        content: [
          '**Non. RikkaHub n\'intègre aucun moteur d\'inférence embarqué et ne peut pas exécuter un modèle de langage directement sur le CPU, le GPU ou le NPU de votre téléphone.** C\'est un client : vous configurez une clé API et un endpoint pour un fournisseur, RikkaHub envoie vos messages à cet endpoint via le réseau, et affiche la réponse reçue.',
          'C\'est une distinction importante par rapport à des applications mobiles comme [PocketPal AI](/power-local-llm/pocketpal-ai-review) ou [Private LLM](/power-local-llm/private-llm-review), qui embarquent un moteur d\'inférence (llama.cpp ou équivalent) et exécutent un fichier de modèle téléchargé directement avec la RAM et le GPU/NPU de l\'appareil, sans connexion réseau nécessaire une fois le modèle téléchargé. Le [README](https://github.com/rikkahub/rikkahub) de RikkaHub la décrit sobrement comme « an Android APP that supports for multiple LLM providers » — le mot « local » n\'apparaît nulle part dans sa liste de fonctionnalités, et une recherche dans l\'intégralité de l\'arborescence du code source public (plus de 1 900 fichiers, vérifié en septembre 2026) ne révèle aucun composant llama.cpp, MLC, LiteRT ou LiteRT-LM dans le code.',
          'Ce qui se rapproche le plus de « l\'IA locale » chez RikkaHub consiste à pointer son champ d\'API/URL personnalisée vers un serveur de votre propre réseau plutôt qu\'un endpoint cloud public — par exemple [Ollama](https://ollama.com) ou [LM Studio](https://lmstudio.ai) tournant sur un PC du même domicile, exposant une API compatible OpenAI. Dans cette configuration, le modèle s\'exécute toujours sur le matériel du PC, pas sur celui du téléphone ; RikkaHub agit comme une interface mobile pour un serveur que vous contrôlez, ce qui garde vos données de conversation hors des infrastructures cloud tierces, mais constitue une configuration — et une histoire de confidentialité et de matériel — sensiblement différente d\'une application exécutant le modèle directement sur l\'appareil.',
        ],
        decisionBlock: {
          title: 'RikkaHub ou une application embarquée ?',
          localIf: [
            'Vous voulez que l\'inférence se déroule sur le téléphone lui-même, avec zéro appel réseau une fois un modèle téléchargé — utilisez plutôt [PocketPal AI](/power-local-llm/pocketpal-ai-review) ou [Private LLM](/power-local-llm/private-llm-review).',
            'Vous avez besoin d\'une application fonctionnant sans aucune route réseau disponible, même vers un appareil sur le même Wi-Fi — RikkaHub a toujours besoin d\'atteindre un endpoint API, même local.',
          ],
          cloudIf: [
            'Vous avez déjà un accès API à OpenAI, Google Gemini ou Anthropic Claude et voulez une seule application Android pour basculer entre eux sans jongler avec des applications distinctes par fournisseur.',
            'Vous auto-hébergez Ollama ou LM Studio sur un serveur domestique ou un PC et voulez une interface de chat mobile soignée pour cela sur votre propre réseau.',
          ],
          quick: [
            'Inférence embarquée, jamais besoin de réseau : PocketPal AI ou Private LLM.',
            'Client avec votre propre clé pour de nombreux fournisseurs cloud : RikkaHub.',
            'Interface mobile pour votre propre serveur Ollama/LM Studio auto-hébergé : RikkaHub, pointée vers l\'adresse réseau locale de votre serveur.',
          ],
        },
      },
      history: {
        id: 'history-and-developer',
        title: 'Qui a créé RikkaHub ?',
        content: [
          '**RikkaHub a été créée principalement par un développeur utilisant le pseudonyme GitHub [re-ovo](https://github.com/re-ovo), qui totalise la grande majorité des commits de l\'historique du projet ; le dépôt est désormais hébergé sous l\'[organisation GitHub rikkahub](https://github.com/rikkahub) plutôt que sous un compte personnel.** Le dépôt lui-même a été créé le 11 mars 2025 et s\'est développé en un projet activement maintenu, avec des contributions d\'un petit groupe de développeurs supplémentaires en plus du mainteneur principal.',
          'RikkaHub affiche explicitement, dans ses propres [directives de contribution](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md), le fait d\'être un projet à parti pris : les pull requests ajoutant de nouvelles langues, de nouvelles fonctionnalités, ou contenant un refactoring massif généré par IA sont purement et simplement rejetées. Le projet accepte le sponsoring communautaire — son README liste des sponsors payants dont [aihubmix.com](https://aihubmix.com), un service de relais d\'API — et reçoit des dons volontaires via [Patreon](https://patreon.com/rikkahub) et la plateforme chinoise 爱发电 (afdian.com).',
        ],
        items: [
          'Développeur principal : l\'utilisateur GitHub [re-ovo](https://github.com/re-ovo), qui totalise la grande majorité des commits de l\'historique du projet.',
          'Dépôt créé le 11 mars 2025 ; désormais hébergé sous l\'[organisation rikkahub](https://github.com/rikkahub) plutôt que sous un compte personnel.',
          'Licence : GNU Affero General Public License v3.0 (AGPL-3.0) — une licence copyleft plus stricte que la licence MIT utilisée par certaines applications concurrentes ; elle oblige quiconque exécute une version modifiée en tant que service réseau à publier ses modifications de code source.',
          'Plus de 7 400 étoiles GitHub et plus de 640 forks au moment du test, avec un suivi des tickets actif (plus de 280 ouverts) et des versions publiées presque quotidiennement.',
          'Rejette explicitement les pull requests pour de nouvelles langues, de nouvelles fonctionnalités et des refactorings massifs générés par IA, selon ses propres directives de contribution — un projet délibérément à parti pris, qui ne cherche pas de larges contributions communautaires de fonctionnalités.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Comment démarrer avec RikkaHub',
        content: [
          '**Pour faire fonctionner RikkaHub, il faut disposer d\'une clé API existante d\'un fournisseur — l\'application n\'inclut aucun accès IA gratuit ou intégré.** Il n\'y a aucun modèle à télécharger sur l\'appareil dans ce parcours ; vous connectez l\'application à un compte que vous possédez déjà, ou à un serveur que vous gérez déjà.',
        ],
        numberedItems: [
          {
            title: 'Installer l\'application',
            whyItMatters: 'Téléchargez RikkaHub depuis le [site officiel](https://rikka-ai.com/download) (recommandé par le projet) ou [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub). Les utilisateurs techniques peuvent aussi installer l\'APK directement depuis [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          },
          {
            title: 'Ajouter un fournisseur',
            whyItMatters: 'Ouvrez les réglages des fournisseurs et ajoutez une nouvelle entrée : choisissez un format d\'API (compatible OpenAI, Google ou Anthropic), puis saisissez l\'URL de base, votre clé API et le nom du modèle souhaité. C\'est ici que vous saisiriez les informations d\'un fournisseur cloud, d\'un service de relais d\'API, ou l\'adresse réseau locale de votre propre serveur auto-hébergé.',
          },
          {
            title: 'Sélectionner le modèle et commencer à discuter',
            whyItMatters: 'Une fois un fournisseur configuré, sélectionnez-le dans le sélecteur de modèle et démarrez une conversation. Chaque message est envoyé à l\'endpoint configuré — il n\'existe aucun mode hors ligne en dehors des écrans de réglages de l\'application.',
          },
          {
            title: 'Optionnel : connecter des outils et la recherche',
            whyItMatters: 'Ajoutez un serveur MCP (Model Context Protocol), ou saisissez votre propre clé API pour un fournisseur de recherche web comme Exa, Tavily ou Brave, afin d\'étendre ce que le modèle connecté peut faire en cours de conversation. Les deux sont optionnels et nécessitent des identifiants que vous fournissez vous-même.',
          },
        ],
      },
      providersSupported: {
        id: 'providers-supported',
        title: 'Quels fournisseurs RikkaHub prend-elle en charge ?',
        itemHeadings: true,
        columns: ['Type de fournisseur', 'Exemples', 'Ce dont vous avez besoin'],
        rows: [
          {
            'Type de fournisseur': 'API compatibles OpenAI',
            'Exemples': 'L\'API d\'OpenAI elle-même, et tout service tiers exposant le même format de requête',
            'Ce dont vous avez besoin': 'Une clé API et l\'URL de base du fournisseur',
          },
          {
            'Type de fournisseur': 'API compatibles Google',
            'Exemples': 'Modèles Google Gemini',
            'Ce dont vous avez besoin': 'Une clé API Google AI',
          },
          {
            'Type de fournisseur': 'API compatibles Anthropic',
            'Exemples': 'Modèles Anthropic Claude',
            'Ce dont vous avez besoin': 'Une clé API Anthropic',
          },
          {
            'Type de fournisseur': 'Services de relais/proxy d\'API',
            'Exemples': 'Services tiers revendant l\'accès aux modèles de plusieurs fournisseurs derrière une seule clé, comme le sponsor du projet [aihubmix.com](https://aihubmix.com)',
            'Ce dont vous avez besoin': 'La clé API et l\'URL de base propres au service de relais, saisies comme pour un fournisseur direct',
          },
          {
            'Type de fournisseur': 'Serveurs locaux auto-hébergés',
            'Exemples': 'Ollama ou LM Studio tournant sur votre propre PC ou serveur domestique, via son endpoint compatible OpenAI intégré',
            'Ce dont vous avez besoin': 'L\'adresse réseau locale de votre serveur (par exemple http://192.168.1.50:11434/v1) — aucune clé API cloud requise, mais le modèle tourne sur cette machine, pas sur votre téléphone',
          },
        ],
        note: 'RikkaHub n\'intègre ni ne revend elle-même l\'accès à un quelconque fournisseur. Chaque connexion — cloud ou auto-hébergée — est configurée avec des identifiants ou une adresse réseau que vous fournissez vous-même.',
      },
      platform: {
        id: 'platform-availability',
        title: 'RikkaHub est-elle disponible sur iPhone ?',
        itemHeadings: true,
        columns: ['Plateforme', 'Disponibilité', 'Remarques'],
        rows: [
          {
            'Plateforme': 'Android',
            'Disponibilité': 'Disponible sur le [site officiel](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) et en téléchargement direct de l\'APK via [GitHub Releases](https://github.com/rikkahub/rikkahub/releases)',
            'Remarques': 'L\'application native ; ce test porte sur cette version.',
          },
          {
            'Plateforme': 'iPhone / iPad',
            'Disponibilité': 'Aucune application iOS native trouvée au moment du test',
            'Remarques': 'Les utilisateurs d\'iPhone cherchant un client multi-fournisseurs similaire devraient plutôt envisager une application iOS dédiée ; RikkaHub n\'en publie actuellement aucune.',
          },
          {
            'Plateforme': 'Web / navigateur',
            'Disponibilité': 'Une interface web complémentaire existe dans le dépôt de code source du projet',
            'Remarques': 'Conçue comme un pendant navigateur de l\'application Android plutôt qu\'un service public hébergé — son utilisation nécessite de la configurer soi-même à partir du code source.',
          },
          {
            'Plateforme': 'Bureau (Windows/macOS/Linux)',
            'Disponibilité': 'Un projet communautaire distinct, rikkahub-desktop, existe mais ne fait pas partie du dépôt officiel rikkahub/rikkahub',
            'Remarques': 'Non maintenu par la même équipe principale ; à considérer comme un fork tiers, pas comme une version officielle.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Combien coûte RikkaHub ?',
        content: [
          '**RikkaHub elle-même est gratuite à télécharger et à utiliser ; aucun abonnement ni achat intégré n\'a été trouvé dans l\'application ou sa documentation au moment du test.** Le projet accepte des dons volontaires via [Patreon](https://patreon.com/rikkahub) et 爱发电 (afdian.com), et liste des sponsors payants dans son README, mais aucun des deux n\'est requis pour utiliser l\'application.',
          'Le coût réel de l\'utilisation de RikkaHub est celui facturé par le fournisseur d\'IA auquel vous vous connectez — OpenAI, Google Gemini et Anthropic facturent tous leurs API au jeton, et un serveur Ollama ou LM Studio auto-hébergé n\'impose aucun frais par message mais nécessite un matériel que vous possédez déjà ou payez séparément. RikkaHub n\'ajoute aucune marge, ne mesure et ne prélève rien sur le coût de l\'API d\'aucun fournisseur ; elle transmet simplement vos requêtes avec la clé que vous avez fournie.',
        ],
        items: [
          '**L\'application :** Gratuite, open source (AGPL-3.0), sans abonnement.',
          '**Utilisation d\'un fournisseur cloud :** Facturée directement par le fournisseur (OpenAI, Google, Anthropic ou un service de relais) selon son propre tarif — RikkaHub n\'ajoute aucune marge.',
          '**Utilisation d\'un serveur auto-hébergé :** Aucun frais par message, mais nécessite un PC ou un serveur capable d\'exécuter Ollama ou LM Studio, un coût matériel distinct de RikkaHub elle-même.',
          '**Dons optionnels :** Via Patreon ou 爱发电, entièrement volontaires et sans lien avec le fonctionnement de l\'application.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Quelles fonctionnalités propose RikkaHub ?',
        content: [
          '**Au-delà du chat multi-fournisseurs de base, RikkaHub a accumulé un large éventail de fonctionnalités typique d\'un client de chat activement développé et à parti pris, selon son propre [README](https://github.com/rikkahub/rikkahub/blob/master/README.md).** Cela comprend :',
        ],
        items: [
          '**Design Material You et mode sombre.** L\'interface suit le système de thématisation dynamique d\'Android.',
          '**Workspace.** Un environnement d\'agent Linux basé sur proot intégré à l\'application — un shell Linux en bac à sable qu\'un agent IA peut utiliser pour exécuter des commandes, distinct de toute inférence de modèle de langage.',
          '**Prise en charge de MCP (Model Context Protocol).** Le modèle connecté peut invoquer des outils exposés par un serveur MCP en cours de conversation.',
          '**Entrée multimodale.** Accepte images, PDF et documents Word comme pièces jointes de chat (la prise en charge dépend des capacités propres du modèle connecté).',
          '**Ramification des messages.** Permet d\'explorer des réponses alternatives à partir d\'un même point de la conversation plutôt qu\'un historique purement linéaire.',
          '**Intégrations de recherche.** Recherche web optionnelle avec votre propre clé API pour des fournisseurs comme Exa, Tavily, Zhipu, LinkUp, Brave ou Perplexity.',
          '**Rendu Markdown.** Coloration syntaxique du code, formules LaTeX, tableaux et rendu de diagrammes Mermaid dans les réponses.',
          '**Import/export par QR code.** Les configurations de fournisseur (y compris les clés API) peuvent être partagées entre appareils via un QR code — traitez cela comme le partage d\'un mot de passe, puisqu\'il contient vos identifiants.',
          '**Import de cartes de personnage SillyTavern.** Compatible avec un format de fichier de persona de jeu de rôle courant utilisé par d\'autres interfaces de chat.',
          '**En-têtes HTTP et corps de requête personnalisés.** Les utilisateurs avancés peuvent modifier la requête brute envoyée à un fournisseur, utile pour les fournisseurs à authentification ou paramètres non standard.',
        ],
        note: 'La disponibilité des fonctionnalités peut varier selon la version de l\'application, le projet publiant des versions presque quotidiennes. Consultez la [page des releases GitHub](https://github.com/rikkahub/rikkahub/releases) pour savoir ce qui est déjà disponible dans votre version installée.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse RikkaHub',
        items: [
          '**Utilisateurs payant déjà pour des API d\'IA cloud et voulant une seule application Android pour toutes.** Si vous avez des clés API pour OpenAI, Google Gemini et Anthropic Claude et êtes lassé de jongler entre des applications distinctes par fournisseur, l\'interface unique de RikkaHub correspond directement.',
          '**Utilisateurs auto-hébergeant Ollama ou LM Studio et voulant un client mobile pour cela.** Le champ d\'API/URL personnalisée de RikkaHub fonctionne avec tout serveur compatible OpenAI, y compris un serveur tournant sur votre propre réseau domestique.',
          '**Développeurs et utilisateurs techniquement curieux à l\'aise avec la gestion de leurs propres clés API.** Aucun accès IA n\'est intégré — chaque fonctionnalité nécessite que vous fournissiez vous-même des identifiants, ce qui convient aux utilisateurs comprenant déjà le fonctionnement de la facturation API.',
          '**Utilisateurs voulant une application activement maintenue et fréquemment mise à jour.** Le projet publie des versions presque quotidiennes et dispose d\'une base de contributeurs large et active par rapport à des clients de chat Android similaires.',
          '**Utilisateurs voulant des fonctionnalités d\'appel d\'outils et d\'agent en plus d\'un modèle cloud.** La prise en charge de MCP et le bac à sable Workspace étendent ce qu\'un modèle connecté peut faire au-delà du simple chat textuel, pour des utilisateurs à l\'aise avec la configuration de ces fonctionnalités avancées.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui RikkaHub ne s\'adresse pas',
        items: [
          '**Utilisateurs voulant une IA fonctionnant entièrement sur leur appareil sans connexion réseau.** RikkaHub a toujours besoin d\'atteindre un endpoint API, local ou cloud ; ceux qui veulent une application réellement hors ligne devraient utiliser plutôt [PocketPal AI](/power-local-llm/pocketpal-ai-review) ou [Private LLM](/power-local-llm/private-llm-review).',
          '**Utilisateurs ne disposant pas déjà d\'une clé API et ne voulant pas en gérer une.** RikkaHub n\'inclut aucun accès IA gratuit ou intégré — quiconque veut ouvrir une application et discuter immédiatement sans aucune configuration ni compte devrait plutôt se tourner vers une application organisée avec des modèles intégrés.',
          '**Utilisateurs d\'iPhone ou d\'iPad.** RikkaHub n\'avait aucune version iOS officielle au moment du test ; les utilisateurs Apple devraient envisager une application iOS dédiée comme Private LLM ou Enclave AI.',
          '**Utilisateurs voulant la charge technique de configuration la plus faible possible.** Ajouter un fournisseur nécessite de saisir correctement le format d\'API, l\'URL de base, la clé et le nom du modèle — il n\'existe aucun parcours en un clic « télécharger et discuter » comme sur les applications embarquées.',
          '**Utilisateurs particulièrement préoccupés par une modification et une redistribution sans publication du code source.** La licence AGPL-3.0 est un atout de transparence, mais elle signifie aussi que quiconque forke RikkaHub et exécute une version modifiée en tant que service réseau est légalement tenu de publier ses modifications — consultez la licence elle-même si cela concerne un déploiement que vous envisagez.',
        ],
      },
      forkWarning: {
        id: 'fork-warning',
        title: 'Un mot sur les forks de RikkaHub',
        content: [
          '**Le README de RikkaHub avertit explicitement qu\'« il existe de nombreuses versions forkées de RikkaHub » et que les problèmes liés aux forks ne concernent pas le projet officiel.** Le projet demande aux utilisateurs « d\'utiliser les forks avec prudence pour éviter des fuites de confidentialité ou des demandes de permissions excessives » — un avertissement qui mérite d\'être répété ici, car une application forkée peut demander des permissions différentes ou transmettre les données différemment de la version officielle, sans revue ni validation du développeur d\'origine.',
          'Comme les clés API sont saisies directement dans l\'application pour configurer un fournisseur, installer un fork non officiel revient à confier ces identifiants au code de ce fork. Ce test ne couvre que le projet officiel [rikkahub/rikkahub](https://github.com/rikkahub/rikkahub), distribué via son [site officiel](https://rikka-ai.com/download), sa fiche [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) sous le nom de paquet `me.rerere.rikkahub`, et sa propre page GitHub Releases.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'RikkaHub face aux alternatives',
        itemHeadings: true,
        columns: ['App', 'Licence / coût', 'Plateformes', 'Local ?'],
        rows: [
          {
            'App': 'RikkaHub',
            'Licence / coût': 'Gratuite, open source (AGPL-3.0)',
            'Plateformes': 'Android',
            'Local ?': 'Non — client API cloud/auto-hébergé uniquement ; apportez votre propre clé ou serveur',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Licence / coût': 'Gratuite, open source (MIT)',
            'Plateformes': 'iPhone/iPad, Android',
            'Local ?': 'Oui — télécharge et exécute des modèles GGUF sur l\'appareil via llama.cpp',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Licence / coût': 'Payante, achat unique ; source fermée',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Local ?': 'Oui — plus de 140 modèles embarqués avec quantification OmniQuant et GPTQ',
          },
          {
            'App': 'LLM Farm',
            'Licence / coût': 'Gratuite, open source ; retirée de l\'App Store au moment du test',
            'Plateformes': 'iPhone/iPad, Mac (à compiler depuis le code source)',
            'Local ?': 'Oui — inférence embarquée basée sur llama.cpp, si compilée depuis son [code source GitHub](https://github.com/guinmoon/LLMFarm)',
          },
          {
            'App': 'Layla',
            'Licence / coût': 'Freemium ; source fermée',
            'Plateformes': 'Android',
            'Local ?': 'Oui — formats de modèle GGUF, LiteRT-LM et PTE sur l\'appareil ; vérifiez la disponibilité actuelle des offres sur [layla-network.ai](https://www.layla-network.ai)',
          },
          {
            'App': 'Maid',
            'Licence / coût': 'Gratuite, open source',
            'Plateformes': 'Android, Windows, macOS, Linux',
            'Local ?': 'Oui pour les modèles GGUF/llama.cpp ; peut aussi se connecter à distance à Ollama ou à un fournisseur cloud, selon son [dépôt GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)',
          },
          {
            'App': 'AnythingLLM Mobile',
            'Licence / coût': 'Gratuite ; projet central open source',
            'Plateformes': 'Android (iOS prévu)',
            'Local ?': 'Présentée comme embarquée/local-first pour l\'historique de chat et le RAG documentaire, selon son [dépôt GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile) ; peut aussi se connecter à des modèles cloud',
          },
          {
            'App': 'Open WebUI',
            'Licence / coût': 'Gratuite, open source',
            'Plateformes': 'Application web auto-hébergée (tout appareil avec navigateur)',
            'Local ?': 'Non — comme RikkaHub, c\'est une interface que vous pointez vers Ollama ou un autre endpoint compatible OpenAI ; la comparaison architecturale la plus proche de RikkaHub, bien qu\'elle vise le bureau/l\'auto-hébergement plutôt qu\'une application mobile native, selon son [dépôt GitHub](https://github.com/open-webui/open-webui)',
          },
        ],
        note: 'RikkaHub et Open WebUI sont les deux seules entrées de ce tableau qui n\'exécutent pas de modèles sur l\'appareil — les deux sont des interfaces pour une API cloud ou un serveur auto-hébergé que vous gérez déjà. Les autres applications listées embarquent un moteur d\'inférence sur l\'appareil, ce qui constitue la différence architecturale centrale à comprendre avant de choisir entre elles.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'RikkaHub exécute-t-elle des modèles d\'IA en local sur mon téléphone ?',
            a: 'Non. RikkaHub est un client de chat qui se connecte à des fournisseurs d\'IA cloud (OpenAI, Google Gemini, Anthropic ou toute API compatible OpenAI) via votre propre clé API. Elle n\'intègre aucun moteur d\'inférence embarqué. Elle peut se connecter à un serveur Ollama ou LM Studio auto-hébergé sur votre propre réseau, mais le modèle continue de tourner sur le matériel de ce serveur, pas sur le téléphone.',
          },
          {
            q: 'RikkaHub est-elle gratuite ?',
            a: 'Oui, l\'application elle-même est gratuite à télécharger et à utiliser ; aucun abonnement ni achat intégré n\'a été trouvé au moment du test. Le seul coût est celui facturé par le fournisseur d\'IA auquel vous la connectez — RikkaHub ne facture aucune marge ni frais propre.',
          },
          {
            q: 'Qui a développé RikkaHub ?',
            a: 'RikkaHub a été créée principalement par un développeur utilisant le pseudonyme GitHub re-ovo, qui totalise la grande majorité des commits de l\'historique du projet. Le dépôt est désormais hébergé sous l\'organisation GitHub rikkahub et compte des contributeurs supplémentaires.',
          },
          {
            q: 'RikkaHub est-elle open source, et sous quelle licence ?',
            a: 'Oui. Le code source de RikkaHub est public sur GitHub sous la GNU Affero General Public License v3.0 (AGPL-3.0). C\'est une licence copyleft : quiconque modifie RikkaHub et l\'exécute en tant que service réseau est tenu de publier ses modifications de code source, une condition plus stricte que la licence MIT utilisée par certaines applications concurrentes.',
          },
          {
            q: 'Quels fournisseurs d\'IA puis-je utiliser avec RikkaHub ?',
            a: 'Tout fournisseur ou service exposant une API compatible OpenAI, Google ou Anthropic — cela inclut les API officielles d\'OpenAI, Google Gemini et Anthropic Claude, des services de relais d\'API tiers, et des serveurs auto-hébergés comme Ollama ou LM Studio.',
          },
          {
            q: 'Puis-je utiliser RikkaHub sans connexion internet ?',
            a: 'Non, pas au sens habituel. RikkaHub a toujours besoin d\'atteindre un endpoint API pour générer une réponse — même un serveur Ollama ou LM Studio auto-hébergé sur votre réseau local nécessite une connexion réseau entre votre téléphone et ce serveur.',
          },
          {
            q: 'RikkaHub est-elle disponible sur iPhone ?',
            a: 'Non. RikkaHub n\'avait aucune version iOS officielle au moment du test ; c\'est une application exclusivement Android. Les utilisateurs d\'iPhone cherchant un client de chat multi-fournisseurs similaire devraient évaluer une application iOS dédiée.',
          },
          {
            q: 'RikkaHub peut-elle se connecter à mon propre serveur Ollama ?',
            a: 'Oui. Le champ d\'API/URL personnalisée de RikkaHub accepte tout endpoint compatible OpenAI, y compris un serveur Ollama ou LM Studio auto-hébergé exposant son API compatible OpenAI intégrée sur votre réseau local. Le modèle continue de tourner sur le matériel de ce serveur, pas sur le téléphone.',
          },
          {
            q: 'Les forks de RikkaHub sont-ils sûrs à utiliser ?',
            a: 'Le README de RikkaHub avertit explicitement que des versions forkées existent et ne sont pas liées au projet officiel, conseillant aux utilisateurs « d\'utiliser les forks avec prudence pour éviter des fuites de confidentialité ou des demandes de permissions excessives ». Ce test ne couvre que l\'application officielle rikkahub/rikkahub, distribuée via son site officiel, Google Play sous le nom de paquet me.rerere.rikkahub, et sa propre page GitHub Releases.',
          },
          {
            q: 'Comment RikkaHub se compare-t-elle à PocketPal AI ou Private LLM ?',
            a: 'RikkaHub est un client d\'API cloud/auto-hébergé sans inférence embarquée, tandis que PocketPal AI et Private LLM téléchargent et exécutent tous deux des modèles à poids ouverts directement sur l\'appareil via des moteurs basés sur llama.cpp. Choisissez RikkaHub si vous avez déjà un accès API ou un serveur auto-hébergé et voulez une interface Android soignée pour cela ; choisissez PocketPal AI ou Private LLM si vous voulez spécifiquement un modèle tournant sur l\'appareil sans dépendance réseau après le téléchargement. Voir le tableau comparatif ci-dessus pour les détails de plateforme et de licence.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'RikkaHub est une application Android bien construite et activement maintenue pour une tâche précise : offrir une interface unique et soignée pour dialoguer avec le fournisseur d\'IA que vous payez déjà, ou avec un serveur que vous gérez vous-même. Elle n\'est pas, et ne prétend pas être, une application d\'IA embarquée — aucun moteur d\'inférence local n\'existe nulle part dans son code, et chaque conversation quitte le téléphone pour atteindre un endpoint API ailleurs. Jugée pour ce qu\'elle est réellement — un client de chat multi-fournisseurs gratuit, open source et sous licence AGPL-3.0 —, c\'est une option solide pour les utilisateurs Android qui gèrent déjà des clés API ou auto-hébergent Ollama ou LM Studio et veulent une seule application fréquemment mise à jour plutôt que plusieurs applications spécifiques à chaque fournisseur. C\'est le mauvais choix pour quiconque veut spécifiquement une IA tournant entièrement sur son propre appareil sans aucun serveur impliqué — pour cela, PocketPal AI ou Private LLM sont les applications à évaluer.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[RikkaHub sur GitHub](https://github.com/rikkahub/rikkahub) — code source, README, licence (AGPL-3.0), historique des versions et chiffres d\'étoiles/forks cités dans ce test.',
          '[Releases GitHub de RikkaHub](https://github.com/rikkahub/rikkahub/releases) — rythme des versions et téléchargement de l\'APK.',
          '[CONTRIBUTING.md de RikkaHub](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) — politique de contribution citée pour la position à parti pris du projet sur les pull requests.',
          '[Site officiel de RikkaHub](https://rikka-ai.com/download) — source de téléchargement recommandée selon le propre README du projet.',
          '[RikkaHub sur Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) — disponibilité sur Android.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de PocketPal AI (2026)](/power-local-llm/pocketpal-ai-review) — une application gratuite et open source qui exécute réellement des modèles GGUF sur l\'appareil, le contraste architectural direct avec RikkaHub.',
          '[Test de Private LLM](/power-local-llm/private-llm-review) — une alternative payante, à source fermée et embarquée pour iPhone, iPad et Mac avec un catalogue de plus de 140 modèles.',
          '[Les meilleures applications LLM locales pour Android en 2026](/power-local-llm/best-local-llm-apps-android-2026) — le panorama des applications Android embarquées, pour les lecteurs cherchant spécifiquement l\'inférence locale plutôt qu\'un client cloud.',
          '[Les meilleures applications LLM locales pour iPhone en 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — l\'équivalent iOS, pour les lecteurs ayant besoin d\'une option embarquée sur plateforme Apple, puisque RikkaHub n\'en propose aucune.',
          '[Les meilleurs modèles LLM mobiles en 2026 : Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — l\'article complémentaire sur les modèles, pour qui décide de préférer l\'inférence locale à un client cloud comme RikkaHub.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RikkaHub : test (2026) — chat IA multi-fournisseurs pour Android',
      description:
        'Test de RikkaHub : app Android gratuite et open source pour dialoguer avec des fournisseurs d\'IA cloud via vos propres clés API. Tourne-t-elle en local ? Licence, configuration et verdict.',
      url: 'https://promptquorum.com/fr/power-local-llm/rikkahub-review',
      inLanguage: 'fr',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Utilisateurs Android évaluant des clients de chat IA multi-fournisseurs et des interfaces pour LLM auto-hébergés' },
      about: [
        { '@type': 'Thing', name: 'RikkaHub' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LM Studio' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/rikkahub-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'RikkaHub : test (2026)', item: 'https://promptquorum.com/fr/power-local-llm/rikkahub-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/rikkahub-review-hero-ja.webp',
    title: 'RikkaHubレビュー(2026):Android向けマルチプロバイダーAIチャット',
    seoTitle: 'RikkaHub 2026レビュー:無料オープンソースAndroidクライアント',
    intro:
      'RikkaHubは、OpenAI、Google Gemini、Anthropic、その他OpenAI互換エンドポイントなどクラウドAIプロバイダーと、自分のAPIキーを使って1つの画面からチャットできる無料オープンソースのAndroidアプリです。スマートフォン自体で言語モデルを実行するわけではなく、あくまでクライアントであってオンデバイス推論エンジンではありません。同じカスタムエンドポイント欄を使えば、自宅ネットワーク上でセルフホストしたOllamaやLM Studioサーバーに接続することもできます。開発は主にデベロッパーre-ovoによって行われ、現在は[rikkahub GitHub Organization](https://github.com/rikkahub/rikkahub)の下で管理されています。プロジェクトはGNU Affero General Public License v3.0(AGPL-3.0)のもとで公開されており、2025年3月にリポジトリが作成されて以来、7,400以上のスターを獲得しています。このレビューでは、RikkaHubが実際にローカルで実行する部分としない部分、実際の機能セット、価格、そしてPocketPal AIやPrivate LLMのようなオンデバイスアプリの代わりに導入すべき人・すべきでない人を詳しく解説します。',
    metaDescription:
      'RikkaHubレビュー:自分のAPIキーでクラウドAIプロバイダーとチャットできる無料オープンソースのAndroidアプリ。ローカルで動作するのか?ライセンス、設定方法、総評を解説。',
    twitterDescription:
      'RikkaHub 2026レビュー:OpenAI、Gemini、Claude、セルフホストAPIエンドポイントを切り替えられる無料AGPL-3.0 Androidアプリ。デバイス上でモデルは動きません — 実際の仕組みを解説します。',
    audience:
      'クラウドAIプロバイダーのAPIキーをすでに持っている、またはOllamaやLM Studioを自前でホストしていてモバイル用フロントエンドを探しているAndroidユーザー。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RikkaHubレビュー',
    targetKeywords: [
      'rikkahub レビュー',
      'rikkahub android',
      'rikkahub ローカルllm',
      'rikkahub vs pocketpal ai',
      'rikkahub 無料',
      'rikkahub ライセンス',
      'android ai チャット 複数プロバイダー',
      'ollama を android アプリに接続',
    ],
    current_models_mentioned: ['OpenAI GPTモデル', 'Google Gemini', 'Anthropic Claude'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**RikkaHubはスマートフォン上でAIモデルを実行しません — 自分のAPIキーを使ってクラウドAIプロバイダーに接続する無料オープンソース(AGPL-3.0)のAndroidクライアントであり、オプションで自宅ネットワーク上のセルフホストOllamaやLM Studioサーバーにも接続できます。**主にデベロッパーre-ovoによって開発され、[GitHub](https://github.com/rikkahub/rikkahub)でホストされています(レビュー時点で7,400以上のスター)。単一のカスタムAPI/URL/モデル設定画面から、OpenAI・Google・Anthropic互換のあらゆるAPIエンドポイントに対応します。アプリ自体は完全無料で、継続的にかかる費用は接続先のAIプロバイダーが請求する分だけです。',
    quickAnswerTop: {
      ja: {
        question: 'RikkaHubはローカルでAIモデルを実行しますか?インストールする価値はありますか?',
        answer:
          'いいえ — RikkaHubにはオンデバイス推論エンジンが含まれておらず、スマートフォン上で言語モデルを直接実行することはできません。すでにOpenAI、Google Gemini、Anthropic、または互換プロバイダーのAPIキーを持っていて、それらを切り替えられる洗練された1つのAndroidアプリが欲しい場合、あるいはOllamaやLM Studioを自前でホストしていてそのモバイル用フロントエンドが欲しい場合には、インストールする価値があります。ネットワーク通信を一切行わずデバイス上でモデルを動かしたい場合には適していません — その用途にはPocketPal AIやPrivate LLMを使ってください。',
        bullets: [
          'AGPL-3.0ライセンスのもとで無料かつオープンソース。ソースコードは[GitHub](https://github.com/rikkahub/rikkahub)で公開されています。',
          'オンデバイスのランタイムではなくマルチプロバイダークライアントです — OpenAI、Google Gemini、Anthropic、または任意のOpenAI互換サービスの自分のAPIキーを持ち込みます。',
          'カスタムAPI/URL欄を使えば、自宅ネットワーク上のセルフホストOllamaやLM Studioサーバーに接続できますが、モデルはそのサーバー上で動作し続け、スマートフォン上では動きません。',
          'Android専用でiOS版はありません。[公式サイト](https://rikka-ai.com/download)、[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)、[GitHub Releases](https://github.com/rikkahub/rikkahub/releases)からのAPK直接ダウンロードで入手できます。',
          '主に1人の開発者(GitHub:[re-ovo](https://github.com/re-ovo))によって構築され、現在はrikkahub Organizationのもとで管理されています。レビュー時点で7,400以上のスターがあり、ほぼ毎日のペースでポイントリリースが行われています。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'RikkaHubとは?', anchor: 'what-is-rikkahub' },
      { label: 'RikkaHubはローカルでAIモデルを実行しますか?', anchor: 'does-rikkahub-run-models-locally' },
      { label: 'RikkaHubを開発したのは誰?', anchor: 'history-and-developer' },
      { label: 'RikkaHubの始め方', anchor: 'getting-started' },
      { label: 'RikkaHubが対応するプロバイダーは?', anchor: 'providers-supported' },
      { label: 'RikkaHubはiPhoneで使えますか?', anchor: 'platform-availability' },
      { label: 'RikkaHubの料金は?', anchor: 'pricing' },
      { label: 'RikkaHubの機能は?', anchor: 'key-features' },
      { label: 'RikkaHubに向いている人', anchor: 'who-should-use' },
      { label: 'RikkaHubに向いていない人', anchor: 'who-should-not-use' },
      { label: 'RikkaHubのフォークに関する注意', anchor: 'fork-warning' },
      { label: 'RikkaHubと代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
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
            text: 'RikkaHubは、自分のAPIキーを使ってOpenAI、Google Gemini、Anthropicなど他のOpenAI互換AIプロバイダーとチャットできる無料オープンソース(AGPL-3.0)のAndroidアプリであり、デバイス上でモデルを実行するわけではありません。',
          },
          {
            type: 'plain-terms',
            text: 'すでに料金を払っているAIモデル、または自分で運用しているサーバーのためのリモコンのようなものであり、モデルを直接スマートフォンに載せるアプリではありません。ネットワーク通信なしでデバイス上だけで完結する推論を求めているなら、これはそのためのアプリではありません — 代わりにPocketPal AIかPrivate LLMを検討してください。',
          },
        ],
        items: [
          '無料かつオープンソース(AGPL-3.0)。ソースコードとIssueトラッカーは[GitHub](https://github.com/rikkahub/rikkahub)で公開されています。',
          'オンデバイス推論エンジンではなくマルチプロバイダーのチャットクライアントです — コードベースにはllama.cpp、MLC、LiteRT-LMのいずれのコンポーネントも存在しません。',
          'OpenAI、Google Gemini、Anthropic、または任意のOpenAI互換プロバイダーの自分のAPIキーが必要です。カスタムURLを使えば、セルフホストしたOllamaやLM Studioサーバーを指定することもできます。',
          '主にデベロッパーre-ovoによって構築され、現在はrikkahub GitHub Organizationのもとで管理されています。レビュー時点で7,400以上のスターと640以上のフォークがあります。',
          'Android専用 — [公式サイト](https://rikka-ai.com/download)、[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)、[GitHub Releases](https://github.com/rikkahub/rikkahub/releases)のAPKダウンロードから入手できます。',
          'アプリ自体は無料で、レビュー時点でアプリ内課金は見つかりませんでした。継続的な費用は接続したAIプロバイダー次第です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、公開されている[GitHubリポジトリ](https://github.com/rikkahub/rikkahub)(ソースコード、README、リリース、GitHub APIのメタデータ)、プロジェクトのウェブサイト、Google Playの掲載情報をもとに、2026年9月時点で確認したものです。PromptQuorumはこのレビューのためにRikkaHubの独自の実機ベンチマークは実施していません — 以下のローカル対クラウドのアーキテクチャに関する記述は、公開されているソースコードとドキュメントの調査に基づくものであり、ブラックボックステストによるものではありません。',
          },
        ],
      },
      overview: {
        id: 'what-is-rikkahub',
        title: 'RikkaHubとは?',
        content: [
          '**RikkaHubは、自分で用意したAPIキーを使い、1つの画面から複数のAIプロバイダーを切り替えられるネイティブAndroidチャットアプリです。**OpenAI用、Google Gemini用、Anthropic Claude用といった具合にプロバイダーごとに別々のアプリをインストールする代わりに、RikkaHubは設定可能な「プロバイダー」一覧を持つ単一のチャット画面を提供し、それぞれがベースURL・APIキー・モデル名を指定します。',
          'アプリは、[技術スタックのドキュメント](https://github.com/rikkahub/rikkahub/blob/master/README.md)によればKotlinとJetpack Composeでネイティブに構築されており、OpenAI・Google・Anthropicの各API形式を話すあらゆるエンドポイントに対応しています。実際には、公式プロバイダー自体に加え、複数プロバイダーのモデルへのアクセスを転売するサードパーティのAPIリレー/プロキシサービス、OllamaやLM Studioのようなセルフホスト型のOpenAI互換サーバーも含まれます。',
        ],
        note: 'RikkaHubはチャットクライアントであり、モデルをホストするアプリではありません。言語モデル自体は常にRikkaHubのプロセスとは別の場所で実行されます — プロバイダーのクラウドサーバー上、またはセルフホストのエンドポイントを指定した場合は自分が管理するコンピューター上です。',
      },
      localVsCloud: {
        id: 'does-rikkahub-run-models-locally',
        title: 'RikkaHubはローカルでAIモデルを実行しますか?',
        content: [
          '**いいえ。RikkaHubにはオンデバイス推論エンジンが含まれておらず、スマートフォンのCPU・GPU・NPU上で言語モデルを直接実行することはできません。**これはクライアントです。プロバイダー用のAPIキーとエンドポイントを設定すると、RikkaHubはネットワーク経由でそのエンドポイントにメッセージを送信し、返ってきた応答を表示します。',
          'これは、[PocketPal AI](/power-local-llm/pocketpal-ai-review)や[Private LLM](/power-local-llm/private-llm-review)のようなモバイルアプリとの重要な違いです。これらのアプリは推論エンジン(llama.cppなど)を内蔵しており、ダウンロードしたモデルファイルをデバイス自体のRAMとGPU/NPUを使って直接実行し、モデルのダウンロード後はネットワーク接続を必要としません。RikkaHub自身の[README](https://github.com/rikkahub/rikkahub)は、このアプリを単に「an Android APP that supports for multiple LLM providers」と説明しており、機能一覧のどこにも「ローカル」という言葉は登場しません。さらに、公開されているソースコードツリー全体(2026年9月時点で1,900以上のファイル)を検索しても、llama.cpp、MLC、LiteRT、LiteRT-LMのいずれのコンポーネントもコード内に見つかりません。',
          'RikkaHubが「ローカルAI」に最も近づくのは、カスタムAPI/URL欄を、パブリッククラウドのエンドポイントではなく自宅ネットワーク上のサーバーに向ける場合です — 例えば、同じ家の中のPCで動く[Ollama](https://ollama.com)や[LM Studio](https://lmstudio.ai)がOpenAI互換APIを公開している場合です。この構成でも、モデルはスマートフォンではなくPCのハードウェア上で実行され続けます。RikkaHubは、自分が管理するサーバーのためのモバイル用フロントエンドとして機能します。これにより会話データがサードパーティのクラウドインフラの外に留まる一方で、モデル自体をデバイス上で実行するアプリとは、構成としても、プライバシーやハードウェアの観点でも実質的に異なる仕組みになります。',
        ],
        decisionBlock: {
          title: 'RikkaHubかオンデバイスアプリか?',
          localIf: [
            'モデルをダウンロードした後は一切ネットワーク通信を行わず、スマートフォン自体で推論を行いたい場合 — 代わりに[PocketPal AI](/power-local-llm/pocketpal-ai-review)や[Private LLM](/power-local-llm/private-llm-review)を使ってください。',
            '同じWi-Fi上の機器であっても、一切のネットワーク経路がない状態で動作するアプリが必要な場合 — RikkaHubはローカルなものであっても常にAPIエンドポイントに到達する必要があります。',
          ],
          cloudIf: [
            'すでにOpenAI、Google Gemini、Anthropic ClaudeのAPIアクセスを持っていて、プロバイダーごとに別々のアプリを使い分けずに1つのAndroidアプリで切り替えたい場合。',
            '自宅サーバーやPCでOllamaやLM Studioを自前でホストしていて、自分のネットワーク上でそれ用の洗練されたモバイルチャットインターフェースが欲しい場合。',
          ],
          quick: [
            'オンデバイス推論、ネットワーク不要:PocketPal AIまたはPrivate LLM。',
            '多数のクラウドプロバイダーに対応した、自分のキーを持ち込むクライアント:RikkaHub。',
            '自前でセルフホストしたOllama/LM Studioサーバー向けのモバイルフロントエンド:RikkaHubをサーバーのローカルネットワークアドレスに向けて使用。',
          ],
        },
      },
      history: {
        id: 'history-and-developer',
        title: 'RikkaHubを開発したのは誰?',
        content: [
          '**RikkaHubは主にGitHubハンドル[re-ovo](https://github.com/re-ovo)を使うデベロッパーによって作られました。プロジェクト履歴の大部分のコミットはこの人物によるもので、リポジトリは現在、個人アカウントではなく[rikkahub GitHub Organization](https://github.com/rikkahub)の下でホストされています。**リポジトリ自体は2025年3月11日に作成され、メインの保守担当者に加えて少人数の追加の開発者からの貢献を受けながら、活発に保守されるプロジェクトへと成長しました。',
          'RikkaHubは自身の[コントリビューションガイドライン](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md)の中で、はっきりと「opinionated(方針が明確な)」プロジェクトであることを述べています。新しい言語の追加、新機能の追加、大規模なAI生成のリファクタリングを含むプルリクエストは、原則として拒否されます。プロジェクトはコミュニティからのスポンサーシップを受け付けており、READMEにはAPIリレーサービスである[aihubmix.com](https://aihubmix.com)などの有償スポンサーが記載されています。また、[Patreon](https://patreon.com/rikkahub)や中国のプラットフォーム爱发电(afdian.com)経由での任意の寄付も受け付けています。',
        ],
        items: [
          '主要開発者:GitHubユーザー[re-ovo](https://github.com/re-ovo)。プロジェクト履歴の大部分のコミットを占めています。',
          'リポジトリは2025年3月11日に作成され、現在は個人アカウントではなく[rikkahub Organization](https://github.com/rikkahub)の下でホストされています。',
          'ライセンス:GNU Affero General Public License v3.0(AGPL-3.0)— 一部の競合アプリが採用するMITライセンスよりも厳格なコピーレフトライセンスであり、改変版をネットワークサービスとして稼働させる者は、そのソースコードの変更点を公開する義務を負います。',
          'レビュー時点でGitHubスターは7,400以上、フォークは640以上。オープンなIssueは280件以上あり、ほぼ毎日のペースでポイントリリースが行われています。',
          '自身のコントリビューションガイドラインに基づき、新しい言語、新機能、大規模なAI生成リファクタリングのプルリクエストを明確に拒否しています — これは幅広いコミュニティの機能貢献を目指すのではなく、意図的に方針が明確なプロジェクトです。',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'RikkaHubの始め方',
        content: [
          '**RikkaHubを動かすには、プロバイダーの既存のAPIキーが必要です — このアプリには無料や同梱のAIアクセスは含まれていません。**この流れではデバイスにダウンロードするモデルは存在しません。すでに持っているアカウント、またはすでに運用しているサーバーにアプリを接続することになります。',
        ],
        numberedItems: [
          {
            title: 'アプリをインストールする',
            whyItMatters: '[公式サイト](https://rikka-ai.com/download)(プロジェクトが推奨)または[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)からRikkaHubをダウンロードします。技術に詳しいユーザーは、[GitHub Releases](https://github.com/rikkahub/rikkahub/releases)からAPKを直接サイドロードすることもできます。',
          },
          {
            title: 'プロバイダーを追加する',
            whyItMatters: 'プロバイダー設定を開き、新しいエントリを追加します。APIフォーマット(OpenAI・Google・Anthropic互換のいずれか)を選び、ベースURL、APIキー、使用したいモデル名を入力します。ここに、クラウドプロバイダーの情報、APIリレーサービスの情報、あるいは自前のセルフホストサーバーのローカルネットワークアドレスを入力することになります。',
          },
          {
            title: 'モデルを選択してチャットを開始する',
            whyItMatters: 'プロバイダーを設定したら、モデル選択画面からそれを選び、会話を開始します。すべてのメッセージは設定したエンドポイントに送信されます — アプリ自身の設定画面を離れると、オフラインモードは存在しません。',
          },
          {
            title: 'オプション:ツールと検索を接続する',
            whyItMatters: 'MCP(Model Context Protocol)サーバーを追加したり、Exa、Tavily、BraveなどのWeb検索プロバイダー用の自分のAPIキーを入力したりすることで、会話の途中で接続中のモデルができることを拡張できます。どちらもオプションで、自分で用意した認証情報が必要です。',
          },
        ],
      },
      providersSupported: {
        id: 'providers-supported',
        title: 'RikkaHubが対応するプロバイダーは?',
        itemHeadings: true,
        columns: ['プロバイダーの種類', '例', '必要なもの'],
        rows: [
          {
            'プロバイダーの種類': 'OpenAI互換API',
            '例': 'OpenAI自身のAPI、および同じリクエスト形式を公開する任意のサードパーティサービス',
            '必要なもの': 'APIキーとプロバイダーのベースURL',
          },
          {
            'プロバイダーの種類': 'Google互換API',
            '例': 'Google Geminiモデル',
            '必要なもの': 'Google AIのAPIキー',
          },
          {
            'プロバイダーの種類': 'Anthropic互換API',
            '例': 'Anthropic Claudeモデル',
            '必要なもの': 'AnthropicのAPIキー',
          },
          {
            'プロバイダーの種類': 'APIリレー/プロキシサービス',
            '例': 'プロジェクトのスポンサーである[aihubmix.com](https://aihubmix.com)のように、1つのキーで複数プロバイダーのモデルへのアクセスを転売するサードパーティサービス',
            '必要なもの': '直接プロバイダーと同様に入力する、そのリレーサービス独自のAPIキーとベースURL',
          },
          {
            'プロバイダーの種類': 'セルフホストのローカルサーバー',
            '例': '自前のPCやホームサーバーで動作し、組み込みのOpenAI互換エンドポイントを公開しているOllamaやLM Studio',
            '必要なもの': 'サーバーのローカルネットワークアドレス(例:http://192.168.1.50:11434/v1)— クラウドAPIキーは不要ですが、モデルはそのマシン上で動作し、スマートフォン上では動作しません',
          },
        ],
        note: 'RikkaHub自体は、いかなるプロバイダーへのアクセスも同梱したり転売したりしません。クラウド・セルフホストを問わず、すべての接続は自分で用意した認証情報またはネットワークアドレスで設定されます。',
      },
      platform: {
        id: 'platform-availability',
        title: 'RikkaHubはiPhoneで使えますか?',
        itemHeadings: true,
        columns: ['プラットフォーム', '入手可否', '備考'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手可否': '[公式サイト](https://rikka-ai.com/download)、[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)、[GitHub Releases](https://github.com/rikkahub/rikkahub/releases)からのAPK直接ダウンロードで入手可能',
            '備考': 'ネイティブアプリ。このレビューはこのバージョンを対象にしています。',
          },
          {
            'プラットフォーム': 'iPhone / iPad',
            '入手可否': 'レビュー時点でネイティブのiOSアプリは見つかりませんでした',
            '備考': '同様のマルチプロバイダークライアントを求めるiPhoneユーザーは、代わりに専用のiOSアプリを検討すべきです。RikkaHubは現時点でiOS版を提供していません。',
          },
          {
            'プラットフォーム': 'ウェブ / ブラウザ',
            '入手可否': 'プロジェクトのソースコードリポジトリに付属のWeb UIが存在します',
            '備考': 'ホスティングされた公開サービスというより、Androidアプリのブラウザ版という位置づけです — 利用するにはソースコードから自分でセットアップする必要があります。',
          },
          {
            'プラットフォーム': 'デスクトップ(Windows/macOS/Linux)',
            '入手可否': 'rikkahub-desktopという別のコミュニティプロジェクトが存在しますが、公式のrikkahub/rikkahubリポジトリの一部ではありません',
            '備考': '同じコアチームが保守しているわけではありません。公式リリースではなく、サードパーティのフォークとして扱ってください。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'RikkaHubの料金は?',
        content: [
          '**RikkaHub自体は無料でダウンロード・利用でき、レビュー時点でアプリやそのドキュメント内にサブスクリプションやアプリ内課金は見つかりませんでした。**プロジェクトは[Patreon](https://patreon.com/rikkahub)や爱发电(afdian.com)経由での任意の寄付を受け付けており、READMEには有償スポンサーも記載されていますが、どちらもアプリの利用に必須ではありません。',
          'RikkaHubを利用する際の実際のコストは、接続するAIプロバイダーが請求する分だけです — OpenAI、Google Gemini、AnthropicはいずれもAPIをトークン単位で課金しており、セルフホストのOllamaやLM Studioサーバーにはメッセージごとの料金はかかりませんが、すでに所有しているか別途費用を負担するハードウェアが必要です。RikkaHubはどのプロバイダーのAPIコストにも上乗せをせず、計測もせず、手数料を取ることもありません。単に、提供されたキーを使ってリクエストを転送するだけです。',
        ],
        items: [
          '**アプリ自体:** 無料、オープンソース(AGPL-3.0)、サブスクリプションなし。',
          '**クラウドプロバイダーの利用:** OpenAI、Google、Anthropic、またはリレーサービスなど、プロバイダー自身の料金体系に従って直接課金されます — RikkaHubによる上乗せはありません。',
          '**セルフホストサーバーの利用:** メッセージごとの料金はかかりませんが、OllamaやLM Studioを動かせるPCやサーバーが必要で、これはRikkaHub自体とは別のハードウェアコストです。',
          '**任意の寄付:** PatreonまたはPatreonや爱发电経由で、完全に任意でありアプリの機能とは無関係です。',
        ],
      },
      features: {
        id: 'key-features',
        title: 'RikkaHubの機能は?',
        content: [
          '**基本的なマルチプロバイダーチャットに加えて、RikkaHubは自身の[README](https://github.com/rikkahub/rikkahub/blob/master/README.md)によれば、活発に開発されている方針の明確なチャットクライアントらしい幅広い機能セットを積み重ねてきました。**主なものは次のとおりです。',
        ],
        items: [
          '**Material Youデザインとダークモード。** インターフェースはAndroidの動的テーマシステムに従います。',
          '**Workspace。** アプリに同梱されたproot方式のLinuxエージェント環境 — AIエージェントがコマンドを実行するために使えるサンドボックス化されたLinuxシェルであり、言語モデルの推論とは別物です。',
          '**MCP(Model Context Protocol)対応。** 接続中のモデルは、会話の途中でMCPサーバーが公開するツールを呼び出せます。',
          '**マルチモーダル入力。** 画像、PDF、Word文書をチャットの添付ファイルとして受け付けます(対応状況は接続先モデル自体の能力に依存します)。',
          '**メッセージの分岐。** 線形の履歴だけでなく、会話の同じ地点から別の返信を試すことができます。',
          '**検索連携。** Exa、Tavily、Zhipu、LinkUp、Brave、Perplexityなどのプロバイダー向けに、自分のAPIキーを使ったオプションのWeb検索。',
          '**Markdownレンダリング。** 応答内のコードのシンタックスハイライト、LaTeX数式、表、Mermaidダイアグラムの描画。',
          '**QRコードによるインポート/エクスポート。** プロバイダー設定(APIキーを含む)をQRコード経由で端末間で共有できます — 認証情報が含まれるため、パスワードの共有と同じように扱ってください。',
          '**SillyTavernキャラクターカードのインポート。** 他のチャットフロントエンドでも使われる一般的なロールプレイ用ペルソナファイル形式に対応しています。',
          '**カスタムHTTPヘッダーとリクエストボディ。** 上級ユーザーはプロバイダーに送信する生のリクエストを変更でき、認証方式やパラメーターが標準的でないプロバイダーに便利です。',
        ],
        note: 'プロジェクトはほぼ毎日ポイントリリースを行っているため、機能の有無はアプリのバージョンによって異なる場合があります。インストール済みのバージョンで何が利用可能かは、[GitHubのリリースページ](https://github.com/rikkahub/rikkahub/releases)で確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'RikkaHubに向いている人',
        items: [
          '**すでにクラウドAI APIの料金を払っていて、それらすべてを1つのAndroidアプリでまとめたい人。** OpenAI、Google Gemini、Anthropic ClaudeのAPIキーを持っていて、プロバイダーごとの別々のアプリを切り替えるのに疲れている場合、RikkaHubの単一インターフェースはまさに適しています。',
          '**OllamaやLM Studioを自前でホストしていて、それ用のモバイルクライアントが欲しい人。** RikkaHubのカスタムAPI/URL欄は、自宅ネットワーク上で動くものを含め、任意のOpenAI互換サーバーと連携できます。',
          '**自分のAPIキーを自分で管理することに抵抗のない開発者や技術に興味のあるユーザー。** 同梱のAIアクセスはなく、すべての機能に自分で用意した認証情報が必要です。これはAPIの課金の仕組みをすでに理解しているユーザーに向いています。',
          '**活発に保守され、頻繁に更新されるアプリが欲しい人。** プロジェクトはほぼ毎日ポイントリリースを行っており、同種のAndroidチャットクライアントと比べて大規模で活発な貢献者コミュニティを持っています。',
          '**クラウドモデルの上にツール呼び出しやエージェント機能を求める人。** MCP対応とWorkspaceサンドボックスは、接続中のモデルが単なるテキストチャットを超えてできることを広げます。これらの高度な機能を設定できるユーザー向けです。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'RikkaHubに向いていない人',
        items: [
          '**AIをネットワーク接続なしで完全にデバイス上で動かしたい人。** RikkaHubはローカルであれクラウドであれ、常にAPIエンドポイントに到達する必要があります。本当にオフラインで動くアプリが欲しい場合は、代わりに[PocketPal AI](/power-local-llm/pocketpal-ai-review)や[Private LLM](/power-local-llm/private-llm-review)を使うべきです。',
          '**まだAPIキーを持っておらず、それを管理したくない人。** RikkaHubには無料や同梱のAIアクセスは含まれていません。アプリを開いてすぐに設定やアカウントなしでチャットしたい人は、代わりにモデルが組み込まれたキュレーション済みのアプリを検討すべきです。',
          '**iPhoneまたはiPadのユーザー。** RikkaHubはレビュー時点で公式のiOS版がありません。Appleユーザーは、Private LLMやEnclave AIなどの専用iOSアプリを検討すべきです。',
          '**できるだけ技術的な設定の手間を減らしたい人。** プロバイダーを追加するには、APIフォーマット、ベースURL、キー、モデル名を正しく入力する必要があります。オンデバイスアプリのようなワンタップの「ダウンロードしてすぐチャット」というフローはありません。',
          '**ソースコードを公開せずに改変・再配布されることを特に懸念する人。** AGPL-3.0ライセンスは透明性という点では強みですが、同時に、RikkaHubをフォークして改変版をネットワークサービスとして稼働させる者は、法的にその変更点を公開する義務を負うことも意味します。計画しているデプロイに影響がある場合は、ライセンス自体を確認してください。',
        ],
      },
      forkWarning: {
        id: 'fork-warning',
        title: 'RikkaHubのフォークに関する注意',
        content: [
          '**RikkaHub自身のREADMEは、「RikkaHubには多くのフォーク版が存在する」こと、そしてフォークに関する問題は公式プロジェクトとは無関係であることを明確に警告しています。**プロジェクトはユーザーに対し、「プライバシー漏洩や過剰な権限要求を避けるため、フォークの利用には注意する」よう求めています — これはここでも繰り返す価値のある注意事項です。フォークされたアプリは、元の開発者によるレビューや承認なしに、公式リリースとは異なる権限を要求したり、データの送信方法を変えたりする可能性があるためです。',
          'プロバイダーを設定するためにAPIキーをアプリに直接入力する仕組み上、非公式のフォークをインストールすることは、その認証情報をそのフォークのコードに預けることを意味します。このレビューは、公式サイトである[rikkahub/rikkahub](https://github.com/rikkahub/rikkahub)プロジェクトのみを対象としており、[公式サイト](https://rikka-ai.com/download)、パッケージ名`me.rerere.rikkahub`の[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)掲載、および同プロジェクト自身のGitHub Releasesページから配布されています。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'RikkaHubと代替アプリの比較',
        itemHeadings: true,
        columns: ['アプリ', 'ライセンス/料金', 'プラットフォーム', 'ローカル実行?'],
        rows: [
          {
            'アプリ': 'RikkaHub',
            'ライセンス/料金': '無料、オープンソース(AGPL-3.0)',
            'プラットフォーム': 'Android',
            'ローカル実行?': 'いいえ — クラウド/セルフホストAPIクライアントのみ。自分のキーまたはサーバーを持ち込む必要あり',
          },
          {
            'アプリ': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'ライセンス/料金': '無料、オープンソース(MIT)',
            'プラットフォーム': 'iPhone/iPad、Android',
            'ローカル実行?': 'はい — GGUFモデルをダウンロードしてllama.cpp経由でデバイス上で実行',
          },
          {
            'アプリ': '[Private LLM](/power-local-llm/private-llm-review)',
            'ライセンス/料金': '有料、買い切り。クローズドソース',
            'プラットフォーム': 'iPhone/iPad/Mac(Appleのみ)',
            'ローカル実行?': 'はい — OmniQuantとGPTQ量子化を用いた140以上のオンデバイスモデル',
          },
          {
            'アプリ': 'LLM Farm',
            'ライセンス/料金': '無料、オープンソース。レビュー時点でApp Storeから削除',
            'プラットフォーム': 'iPhone/iPad、Mac(ソースからビルド)',
            'ローカル実行?': 'はい — [GitHubのソース](https://github.com/guinmoon/LLMFarm)からビルドした場合、llama.cppベースのオンデバイス推論',
          },
          {
            'アプリ': 'Layla',
            'ライセンス/料金': 'フリーミアム。クローズドソース',
            'プラットフォーム': 'Android',
            'ローカル実行?': 'はい — GGUF、LiteRT-LM、PTE形式のモデルをデバイス上で実行。現在の料金プランの提供状況は[layla-network.ai](https://www.layla-network.ai)で確認してください',
          },
          {
            'アプリ': 'Maid',
            'ライセンス/料金': '無料、オープンソース',
            'プラットフォーム': 'Android、Windows、macOS、Linux',
            'ローカル実行?': 'GGUF/llama.cppモデルではローカル実行、[GitHubリポジトリ](https://github.com/Mobile-Artificial-Intelligence/maid)によればOllamaやクラウドプロバイダーへのリモート接続も可能',
          },
          {
            'アプリ': 'AnythingLLM Mobile',
            'ライセンス/料金': '無料。コアプロジェクトはオープンソース',
            'プラットフォーム': 'Android(iOS対応予定)',
            'ローカル実行?': '[GitHubリポジトリ](https://github.com/Mintplex-Labs/anythingllm-mobile)によれば、チャット履歴とドキュメントRAGについてオンデバイス/ローカルファーストと位置づけられており、クラウドモデルへの接続も可能',
          },
          {
            'アプリ': 'Open WebUI',
            'ライセンス/料金': '無料、オープンソース',
            'プラットフォーム': 'セルフホスト型Webアプリ(ブラウザがあれば任意のデバイス)',
            'ローカル実行?': 'いいえ — RikkaHubと同様、Ollamaや他のOpenAI互換エンドポイントを指定するフロントエンドです。[GitHubリポジトリ](https://github.com/open-webui/open-webui)によればネイティブのモバイルアプリよりもデスクトップ/セルフホスティングを対象としていますが、RikkaHubに最も近いアーキテクチャ上の比較対象です',
          },
        ],
        note: 'RikkaHubとOpen WebUIは、この表の中でデバイス上でモデルを実行しない唯一の2つのエントリです — どちらも、クラウドAPIやすでに運用しているセルフホストサーバーのためのフロントエンドです。それ以外に掲載されているアプリはオンデバイス推論エンジンを内蔵しており、これが選択前に理解しておくべき中心的なアーキテクチャの違いです。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'RikkaHubは私のスマートフォン上でAIモデルをローカル実行しますか?',
            a: 'いいえ。RikkaHubは、自分のAPIキーを使ってクラウドAIプロバイダー(OpenAI、Google Gemini、Anthropic、または任意のOpenAI互換API)に接続するチャットクライアントです。オンデバイス推論エンジンは含まれていません。自宅ネットワーク上のセルフホストOllamaやLM Studioサーバーに接続することはできますが、モデルはそのサーバーのハードウェア上で動作し続け、スマートフォン上では動作しません。',
          },
          {
            q: 'RikkaHubは無料ですか?',
            a: 'はい、アプリ自体は無料でダウンロード・利用でき、レビュー時点でサブスクリプションやアプリ内課金は見つかりませんでした。かかる費用は接続先のAIプロバイダーが請求する分のみで、RikkaHub自体は上乗せ料金や手数料を課しません。',
          },
          {
            q: 'RikkaHubを開発したのは誰ですか?',
            a: 'RikkaHubは主にGitHubハンドルre-ovoを使うデベロッパーによって作られました。この人物がプロジェクト履歴の大部分のコミットを占めています。リポジトリは現在rikkahub GitHub Organizationのもとでホストされており、他の貢献者も加わっています。',
          },
          {
            q: 'RikkaHubはオープンソースですか?どのライセンスを使っていますか?',
            a: 'はい。RikkaHubのソースコードは、GNU Affero General Public License v3.0(AGPL-3.0)のもとでGitHub上に公開されています。これはコピーレフトライセンスであり、RikkaHubを改変してネットワークサービスとして稼働させる者は、そのソースコードの変更点を公開する義務を負います。一部の競合アプリが採用するMITライセンスより厳格な条件です。',
          },
          {
            q: 'RikkaHubで使えるAIプロバイダーは何ですか?',
            a: 'OpenAI互換、Google互換、Anthropic互換のいずれかのAPIを公開しているプロバイダーやサービスであれば利用できます。これには、OpenAI、Google Gemini、Anthropic Claudeの公式API、サードパーティのAPIリレーサービス、OllamaやLM Studioなどのセルフホストサーバーが含まれます。',
          },
          {
            q: 'RikkaHubをインターネット接続なしで使えますか?',
            a: 'いいえ、通常の意味では使えません。RikkaHubは応答を生成するために常にAPIエンドポイントに到達する必要があります — ローカルネットワーク上のセルフホストOllamaやLM Studioサーバーであっても、スマートフォンとそのサーバー間のネットワーク接続が必要です。',
          },
          {
            q: 'RikkaHubはiPhoneで使えますか?',
            a: 'いいえ。RikkaHubはレビュー時点で公式のiOS版がなく、Android専用のアプリです。同様のマルチプロバイダーチャットクライアントを探しているiPhoneユーザーは、代わりに専用のiOSアプリを検討すべきです。',
          },
          {
            q: 'RikkaHubは自分のOllamaサーバーに接続できますか?',
            a: 'はい。RikkaHubのカスタムAPI/URL欄は、ローカルネットワーク上で組み込みのOpenAI互換APIを公開しているセルフホストのOllamaやLM Studioサーバーを含む、任意のOpenAI互換エンドポイントを受け付けます。モデルはそのサーバーのハードウェア上で動作し続け、スマートフォン上では動作しません。',
          },
          {
            q: 'RikkaHubのフォークは安全に使えますか?',
            a: 'RikkaHub自身のREADMEは、フォーク版が存在し、それらは公式プロジェクトとは無関係であることを明確に警告しており、ユーザーに対し「プライバシー漏洩や過剰な権限要求を避けるため、フォークの利用には注意する」よう助言しています。このレビューは、公式サイト、パッケージ名me.rerere.rikkahubのGoogle Play、および同プロジェクト自身のGitHub Releasesページから配布されている公式のrikkahub/rikkahubアプリのみを対象としています。',
          },
          {
            q: 'RikkaHubはPocketPal AIやPrivate LLMと比べてどうですか?',
            a: 'RikkaHubはオンデバイス推論を持たないクラウド/セルフホストAPIクライアントであるのに対し、PocketPal AIとPrivate LLMはどちらもllama.cppベースのエンジンを使ってオープンウェイトモデルを直接デバイス上にダウンロードして実行します。すでにAPIアクセスやセルフホストサーバーを持っていて、それ用の洗練されたAndroidフロントエンドが欲しい場合はRikkaHubを、ダウンロード後はネットワークに依存せずデバイス上でモデルを動かしたい場合はPocketPal AIまたはPrivate LLMを選んでください。プラットフォームやライセンスの詳細は上記の比較表を参照してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'RikkaHubは、すでに料金を払っているAIプロバイダー、または自分で運用しているサーバーと話すための、洗練された1つのインターフェースを提供するという特定の役割に対して、よく作り込まれ、活発に保守されているAndroidアプリです。それはオンデバイスAIアプリではありませんし、そう名乗ってもいません — コードベースのどこにもローカル推論エンジンは存在せず、すべての会話はスマートフォンを離れてどこか別の場所にあるAPIエンドポイントに到達します。実際の姿である「無料でオープンソース、AGPL-3.0ライセンスのマルチプロバイダーチャットクライアント」として評価すれば、すでにAPIキーを管理している、あるいはOllamaやLM Studioを自前でホストしていて、プロバイダーごとの複数のアプリではなく頻繁に更新される1つのアプリが欲しいAndroidユーザーにとって、有力な選択肢です。サーバーを一切介さずAIを完全に自分のデバイス上だけで動かしたい人にとっては、選ぶべきではないアプリです — その用途には、PocketPal AIかPrivate LLMを検討してください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[GitHub上のRikkaHub](https://github.com/rikkahub/rikkahub) — このレビューで参照したソースコード、README、ライセンス(AGPL-3.0)、リリース履歴、スター/フォーク数。',
          '[RikkaHub GitHub Releases](https://github.com/rikkahub/rikkahub/releases) — リリース頻度とAPKのダウンロード。',
          '[RikkaHubのCONTRIBUTING.md](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) — プルリクエストに対するプロジェクトの方針の明確な姿勢について参照したコントリビューションポリシー。',
          '[RikkaHub公式サイト](https://rikka-ai.com/download) — プロジェクト自身のREADMEによる推奨ダウンロード元。',
          '[Google Play上のRikkaHub](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) — Androidでの入手可否。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー(2026)](/power-local-llm/pocketpal-ai-review) — GGUFモデルを実際にデバイス上で実行する無料オープンソースアプリで、RikkaHubとの直接的なアーキテクチャ上の対比。',
          '[Private LLMレビュー](/power-local-llm/private-llm-review) — iPhone、iPad、Mac向けの有料でクローズドソースのオンデバイス代替アプリ。140以上のモデルカタログを持つ。',
          '[2026年版 Android向けベストローカルLLMアプリ](/power-local-llm/best-local-llm-apps-android-2026) — クラウドクライアントではなく特にローカル推論を求める読者向けの、Android向けオンデバイスアプリのまとめ。',
          '[2026年版 iPhone向けベストローカルLLMアプリ](/power-local-llm/best-local-llm-apps-iphone-2026) — RikkaHubがiOS版を提供していないため、Appleプラットフォームでのオンデバイス選択肢が必要な読者向けのiOS版のまとめ。',
          '[2026年版 ベストモバイルLLMモデル:Phi-4 Mini対Gemma 4対SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — RikkaHubのようなクラウドクライアントではなくオンデバイス推論を選ぶことにした人向けの、モデル面の関連記事。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RikkaHubレビュー(2026):Android向けマルチプロバイダーAIチャット',
      description:
        'RikkaHubレビュー:自分のAPIキーでクラウドAIプロバイダーとチャットできる無料オープンソースのAndroidアプリ。ローカルで動作するのか?ライセンス、設定方法、総評を解説。',
      url: 'https://promptquorum.com/ja/power-local-llm/rikkahub-review',
      inLanguage: 'ja',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'マルチプロバイダーAIチャットクライアントとセルフホスト型LLMフロントエンドを検討しているAndroidユーザー' },
      about: [
        { '@type': 'Thing', name: 'RikkaHub' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LM Studio' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/rikkahub-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'RikkaHubレビュー(2026)', item: 'https://promptquorum.com/ja/power-local-llm/rikkahub-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/rikkahub-review-hero-pt.webp',
    title: 'RikkaHub: análise (2026) — chat de IA multiprovedor para Android',
    seoTitle: 'RikkaHub 2026: análise do app Android de código aberto',
    intro:
      'O RikkaHub é um aplicativo Android gratuito e de código aberto que permite conversar com provedores de IA na nuvem — OpenAI, Google Gemini, Anthropic e qualquer endpoint compatível com OpenAI — a partir de uma única interface, usando suas próprias chaves de API. Ele não executa modelos de linguagem no próprio celular; é um cliente, não um mecanismo de inferência no dispositivo, embora possa se conectar a um servidor Ollama ou LM Studio auto-hospedado na sua própria rede pelo mesmo campo de endpoint personalizado. Desenvolvido principalmente pelo desenvolvedor re-ovo e agora mantido sob a [organização rikkahub no GitHub](https://github.com/rikkahub/rikkahub), o projeto tem licença GNU Affero General Public License v3.0 (AGPL-3.0) e acumulou mais de 7.400 estrelas desde que o repositório foi criado em março de 2025. Esta análise detalha exatamente o que o RikkaHub executa localmente e o que não executa, seus recursos reais, o preço e para quem ele é indicado — e para quem não é — em comparação a um app on-device como o PocketPal AI ou o Private LLM.',
    metaDescription:
      'Análise do RikkaHub: app Android gratuito e de código aberto para conversar com provedores de IA na nuvem usando suas próprias chaves de API. Roda localmente? Licença, configuração e veredito.',
    twitterDescription:
      'Análise do RikkaHub 2026: o app Android gratuito sob licença AGPL-3.0 para alternar entre OpenAI, Gemini, Claude e endpoints de API auto-hospedados. Ele não executa modelos no dispositivo — veja o que ele realmente faz.',
    audience:
      'Usuários de Android que já têm chaves de API de provedores de IA na nuvem, ou que hospedam Ollama ou LM Studio e querem uma interface mobile para isso.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'análise do RikkaHub',
    targetKeywords: [
      'rikkahub análise',
      'rikkahub android',
      'rikkahub llm local',
      'rikkahub vs pocketpal ai',
      'rikkahub é gratuito',
      'licença do rikkahub',
      'app android chat ia vários provedores',
      'conectar ollama a app android',
    ],
    current_models_mentioned: ['modelos GPT da OpenAI', 'Google Gemini', 'Anthropic Claude'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**O RikkaHub não executa modelos de IA no seu celular — é um cliente Android gratuito e de código aberto (AGPL-3.0) que se conecta a provedores de IA na nuvem usando suas próprias chaves de API, e que opcionalmente pode se conectar a um servidor Ollama ou LM Studio auto-hospedado na sua própria rede.** Desenvolvido principalmente por re-ovo e hospedado no [GitHub](https://github.com/rikkahub/rikkahub) (mais de 7.400 estrelas no momento desta análise), ele suporta qualquer endpoint compatível com as APIs da OpenAI, Google ou Anthropic por meio de uma única tela de configuração personalizada de API/URL/modelo. O app é totalmente gratuito; o único custo contínuo é o que o provedor de IA ao qual você o conecta cobrar.',
    quickAnswerTop: {
      pt: {
        question: 'O RikkaHub executa modelos de IA localmente, e vale a pena instalar?',
        answer:
          'Não: o RikkaHub não inclui um mecanismo de inferência no dispositivo, portanto não consegue executar um modelo de linguagem diretamente no seu celular. Vale a pena instalar se você já tem chaves de API da OpenAI, Google Gemini, Anthropic ou de um provedor compatível e quer um único app Android bem-feito para alternar entre eles, ou se você hospeda Ollama ou LM Studio e quer uma interface mobile para o seu próprio servidor. Não é a escolha certa se você quer especificamente um modelo rodando no dispositivo sem nenhuma chamada de rede — para isso, use o PocketPal AI ou o Private LLM.',
        bullets: [
          'Gratuito e de código aberto sob a licença AGPL-3.0; o código-fonte é público no [GitHub](https://github.com/rikkahub/rikkahub).',
          'Um cliente multiprovedor, não um mecanismo de execução no dispositivo — você traz sua própria chave de API para OpenAI, Google Gemini, Anthropic ou qualquer serviço compatível com OpenAI.',
          'Pode se conectar a um servidor Ollama ou LM Studio auto-hospedado na sua própria rede por meio do campo de API/URL personalizada — o modelo continua rodando nesse servidor, não no celular.',
          'Somente para Android, sem versão para iOS; disponível pelo [site oficial](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) e download direto do APK pelo [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'Desenvolvido principalmente por um único desenvolvedor (GitHub: [re-ovo](https://github.com/re-ovo)) e agora mantido sob a organização rikkahub, com mais de 7.400 estrelas e lançamentos quase diários no momento desta análise.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o RikkaHub?', anchor: 'what-is-rikkahub' },
      { label: 'O RikkaHub executa modelos de IA localmente?', anchor: 'does-rikkahub-run-models-locally' },
      { label: 'Quem criou o RikkaHub?', anchor: 'history-and-developer' },
      { label: 'Como começar a usar o RikkaHub', anchor: 'getting-started' },
      { label: 'Quais provedores o RikkaHub suporta?', anchor: 'providers-supported' },
      { label: 'O RikkaHub está disponível no iPhone?', anchor: 'platform-availability' },
      { label: 'Quanto custa o RikkaHub?', anchor: 'pricing' },
      { label: 'Quais recursos o RikkaHub tem?', anchor: 'key-features' },
      { label: 'Para quem o RikkaHub é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o RikkaHub não é indicado', anchor: 'who-should-not-use' },
      { label: 'Um aviso sobre forks do RikkaHub', anchor: 'fork-warning' },
      { label: 'RikkaHub vs. alternativas', anchor: 'vs-alternatives' },
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
            text: 'O RikkaHub é um app Android gratuito e de código aberto (AGPL-3.0) que permite conversar com OpenAI, Google Gemini, Anthropic e outros provedores de IA compatíveis com OpenAI usando suas próprias chaves de API — ele não executa modelos no próprio dispositivo.',
          },
          {
            type: 'plain-terms',
            text: 'É um controle remoto para modelos de IA que você já paga, ou para um servidor que você mesmo administra, não um app que coloca um modelo diretamente no seu celular. Se você quer inferência que aconteça inteiramente no dispositivo sem chamadas de rede, este não é o app certo — veja o PocketPal AI ou o Private LLM.',
          },
        ],
        items: [
          'Gratuito e de código aberto (AGPL-3.0); código-fonte e rastreador de issues são públicos no [GitHub](https://github.com/rikkahub/rikkahub).',
          'Um cliente de chat multiprovedor, não um mecanismo de inferência no dispositivo — não existe componente llama.cpp, MLC ou LiteRT-LM no código-fonte.',
          'Requer sua própria chave de API para OpenAI, Google Gemini, Anthropic ou qualquer provedor compatível com OpenAI; também pode apontar para um servidor Ollama ou LM Studio auto-hospedado via URL personalizada.',
          'Desenvolvido principalmente por re-ovo e agora mantido sob a organização rikkahub no GitHub; mais de 7.400 estrelas e mais de 640 forks no momento desta análise.',
          'Somente Android — disponível pelo [site oficial](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) e downloads de APK no [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'O app em si é gratuito, sem compras no aplicativo encontradas no momento da análise; o custo contínuo depende inteiramente do provedor de IA ao qual você o conecta.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no [repositório público do GitHub](https://github.com/rikkahub/rikkahub) (código-fonte, README, lançamentos e metadados da API do GitHub), no site do projeto e na ficha da Google Play, verificados em setembro de 2026. O PromptQuorum não realizou benchmarks práticos independentes do RikkaHub para esta análise — as afirmações sobre arquitetura local vs. nuvem abaixo se baseiam na inspeção do código-fonte público e da documentação, não em um teste de caixa-preta.',
          },
        ],
      },
      overview: {
        id: 'what-is-rikkahub',
        title: 'O que é o RikkaHub?',
        content: [
          '**O RikkaHub é um app nativo de Android para alternar entre vários provedores de IA a partir de uma única interface, usando as chaves de API que você mesmo fornece.** Em vez de instalar um app separado para cada provedor — um para OpenAI, um para Google Gemini, um para Anthropic Claude —, o RikkaHub oferece uma única tela de chat com uma lista configurável de "provedores", cada um apontando para uma URL base, uma chave de API e um nome de modelo.',
          'O app é construído nativamente em Kotlin com Jetpack Compose, segundo sua própria [documentação de stack tecnológica](https://github.com/rikkahub/rikkahub/blob/master/README.md), e suporta qualquer endpoint que fale os formatos de API da OpenAI, Google ou Anthropic — o que na prática inclui os próprios provedores oficiais, serviços de retransmissão/proxy de terceiros que revendem acesso aos modelos de vários provedores, e servidores auto-hospedados compatíveis com OpenAI, como Ollama ou LM Studio.',
        ],
        note: 'O RikkaHub é um cliente de chat, não um app que hospeda modelos: o próprio modelo de linguagem sempre roda em algum lugar diferente do processo do RikkaHub — nos servidores em nuvem do provedor, ou em um computador que você controla, se você apontar para um endpoint auto-hospedado.',
      },
      localVsCloud: {
        id: 'does-rikkahub-run-models-locally',
        title: 'O RikkaHub executa modelos de IA localmente?',
        content: [
          '**Não. O RikkaHub não inclui um mecanismo de inferência no dispositivo e não consegue executar um modelo de linguagem diretamente na CPU, GPU ou NPU do seu celular.** É um cliente: você configura uma chave de API e um endpoint para um provedor, o RikkaHub envia suas mensagens a esse endpoint pela rede, e exibe a resposta recebida.',
          'Essa é uma distinção importante em relação a apps mobile como o [PocketPal AI](/power-local-llm/pocketpal-ai-review) ou o [Private LLM](/power-local-llm/private-llm-review), que incluem um mecanismo de inferência (llama.cpp ou similar) e executam um arquivo de modelo baixado diretamente usando a RAM e a GPU/NPU do próprio dispositivo, sem precisar de conexão de rede depois que o modelo é baixado. O próprio [README](https://github.com/rikkahub/rikkahub) do RikkaHub descreve o app simplesmente como "an Android APP that supports for multiple LLM providers" — a palavra "local" não aparece em nenhum lugar da lista de recursos, e uma busca em toda a árvore de código-fonte pública (mais de 1.900 arquivos, verificado em setembro de 2026) não encontra nenhum componente llama.cpp, MLC, LiteRT ou LiteRT-LM em nenhuma parte do código.',
          'O mais próximo que o RikkaHub chega de "IA local" é apontar seu campo de API/URL personalizada para um servidor na sua própria rede em vez de um endpoint público na nuvem — por exemplo, [Ollama](https://ollama.com) ou [LM Studio](https://lmstudio.ai) rodando em um PC na mesma casa, expondo uma API compatível com OpenAI. Nessa configuração, o modelo continua sendo executado no hardware do PC, não no do celular; o RikkaHub atua como uma interface mobile para um servidor que você controla, o que mantém seus dados de conversa fora da infraestrutura de nuvem de terceiros, mas é uma configuração — e uma história de privacidade e hardware — materialmente diferente de um app que executa o modelo no próprio dispositivo.',
        ],
        decisionBlock: {
          title: 'RikkaHub ou um app on-device?',
          localIf: [
            'Você quer que a inferência aconteça no próprio celular, com zero chamadas de rede depois que um modelo é baixado — use o [PocketPal AI](/power-local-llm/pocketpal-ai-review) ou o [Private LLM](/power-local-llm/private-llm-review) em vez disso.',
            'Você precisa que o app funcione sem nenhuma rota de rede disponível, nem mesmo para um dispositivo na mesma Wi-Fi — o RikkaHub sempre precisa alcançar um endpoint de API, mesmo que local.',
          ],
          cloudIf: [
            'Você já tem acesso à API da OpenAI, Google Gemini ou Anthropic Claude e quer um único app Android para alternar entre eles sem usar apps separados de cada provedor.',
            'Você hospeda Ollama ou LM Studio em um servidor doméstico ou PC e quer uma interface de chat mobile bem-feita para isso na sua própria rede.',
          ],
          quick: [
            'Inferência no dispositivo, nunca precisa de rede: PocketPal AI ou Private LLM.',
            'Cliente com sua própria chave para vários provedores de nuvem: RikkaHub.',
            'Interface mobile para o seu próprio servidor Ollama/LM Studio auto-hospedado: RikkaHub, apontado para o endereço de rede local do seu servidor.',
          ],
        },
      },
      history: {
        id: 'history-and-developer',
        title: 'Quem criou o RikkaHub?',
        content: [
          '**O RikkaHub foi criado principalmente por um desenvolvedor com o usuário do GitHub [re-ovo](https://github.com/re-ovo), responsável pela grande maioria dos commits no histórico do projeto; o repositório agora é hospedado sob a [organização rikkahub no GitHub](https://github.com/rikkahub) em vez de uma conta pessoal.** O repositório em si foi criado em 11 de março de 2025 e cresceu até se tornar um projeto ativamente mantido, com contribuições de um pequeno grupo de desenvolvedores adicionais além do mantenedor principal.',
          'O RikkaHub é explícito, em suas próprias [diretrizes de contribuição](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md), sobre ser um projeto com posição definida: pull requests que adicionam novos idiomas, adicionam novos recursos, ou contêm refatorações em larga escala geradas por IA são rejeitadas de imediato. O projeto aceita patrocínio da comunidade — seu README lista patrocinadores pagos, incluindo o [aihubmix.com](https://aihubmix.com), um serviço de retransmissão de API — e recebe doações voluntárias via [Patreon](https://patreon.com/rikkahub) e a plataforma chinesa 爱发电 (afdian.com).',
        ],
        items: [
          'Desenvolvedor principal: o usuário do GitHub [re-ovo](https://github.com/re-ovo), responsável pela grande maioria dos commits no histórico do projeto.',
          'Repositório criado em 11 de março de 2025; hospedado agora sob a [organização rikkahub](https://github.com/rikkahub) em vez de uma conta pessoal.',
          'Licença: GNU Affero General Public License v3.0 (AGPL-3.0) — uma licença copyleft mais rígida que a licença MIT usada por alguns apps concorrentes; ela exige que qualquer pessoa que execute uma versão modificada como serviço de rede publique suas alterações de código-fonte.',
          'Mais de 7.400 estrelas no GitHub e mais de 640 forks no momento desta análise, com um rastreador de issues ativo (mais de 280 abertas) e lançamentos quase diários.',
          'Rejeita explicitamente pull requests de novos idiomas, novos recursos e refatorações em larga escala geradas por IA, segundo suas próprias diretrizes de contribuição — um projeto deliberadamente com posição definida, que não busca amplas contribuições de recursos da comunidade.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar a usar o RikkaHub',
        content: [
          '**Para fazer o RikkaHub funcionar, é preciso ter uma chave de API já existente de um provedor — o app não inclui nenhum acesso a IA gratuito ou embutido.** Não há nenhum modelo para baixar no dispositivo nesse fluxo; você está conectando o app a uma conta que já possui, ou a um servidor que já administra.',
        ],
        numberedItems: [
          {
            title: 'Instalar o app',
            whyItMatters: 'Baixe o RikkaHub pelo [site oficial](https://rikka-ai.com/download) (recomendado pelo projeto) ou pelo [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub). Usuários técnicos também podem instalar o APK diretamente pelo [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          },
          {
            title: 'Adicionar um provedor',
            whyItMatters: 'Abra as configurações de provedores e adicione uma nova entrada: escolha um formato de API (compatível com OpenAI, Google ou Anthropic), depois informe a URL base, sua chave de API e o nome do modelo que deseja usar. É aqui que você informaria os dados de um provedor de nuvem, de um serviço de retransmissão de API, ou o endereço de rede local do seu próprio servidor auto-hospedado.',
          },
          {
            title: 'Selecionar o modelo e começar a conversar',
            whyItMatters: 'Depois que um provedor estiver configurado, escolha-o no seletor de modelos e inicie uma conversa. Cada mensagem é enviada ao endpoint configurado — não existe modo offline fora das próprias telas de configuração do app.',
          },
          {
            title: 'Opcional: conectar ferramentas e busca',
            whyItMatters: 'Adicione um servidor MCP (Model Context Protocol), ou informe sua própria chave de API para um provedor de busca web como Exa, Tavily ou Brave, para ampliar o que o modelo conectado pode fazer durante a conversa. Ambos são opcionais e exigem credenciais que você mesmo fornece.',
          },
        ],
      },
      providersSupported: {
        id: 'providers-supported',
        title: 'Quais provedores o RikkaHub suporta?',
        itemHeadings: true,
        columns: ['Tipo de provedor', 'Exemplos', 'O que você precisa'],
        rows: [
          {
            'Tipo de provedor': 'APIs compatíveis com OpenAI',
            'Exemplos': 'A própria API da OpenAI, e qualquer serviço de terceiros que exponha o mesmo formato de requisição',
            'O que você precisa': 'Uma chave de API e a URL base do provedor',
          },
          {
            'Tipo de provedor': 'APIs compatíveis com Google',
            'Exemplos': 'Modelos Google Gemini',
            'O que você precisa': 'Uma chave de API do Google AI',
          },
          {
            'Tipo de provedor': 'APIs compatíveis com Anthropic',
            'Exemplos': 'Modelos Anthropic Claude',
            'O que você precisa': 'Uma chave de API da Anthropic',
          },
          {
            'Tipo de provedor': 'Serviços de retransmissão/proxy de API',
            'Exemplos': 'Serviços de terceiros que revendem acesso aos modelos de vários provedores atrás de uma única chave, como o patrocinador do projeto [aihubmix.com](https://aihubmix.com)',
            'O que você precisa': 'A própria chave de API e URL base do serviço de retransmissão, informadas do mesmo jeito que um provedor direto',
          },
          {
            'Tipo de provedor': 'Servidores locais auto-hospedados',
            'Exemplos': 'Ollama ou LM Studio rodando no seu próprio PC ou servidor doméstico, via seu endpoint compatível com OpenAI integrado',
            'O que você precisa': 'O endereço de rede local do seu servidor (por exemplo, http://192.168.1.50:11434/v1) — não precisa de chave de API na nuvem, mas o modelo roda naquela máquina, não no seu celular',
          },
        ],
        note: 'O RikkaHub não inclui nem revende acesso a nenhum provedor por conta própria. Toda conexão — na nuvem ou auto-hospedada — é configurada com credenciais ou um endereço de rede que você mesmo fornece.',
      },
      platform: {
        id: 'platform-availability',
        title: 'O RikkaHub está disponível no iPhone?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidade', 'Observações'],
        rows: [
          {
            'Plataforma': 'Android',
            'Disponibilidade': 'Disponível pelo [site oficial](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) e download direto do APK pelo [GitHub Releases](https://github.com/rikkahub/rikkahub/releases)',
            'Observações': 'O app nativo; esta análise cobre essa versão.',
          },
          {
            'Plataforma': 'iPhone / iPad',
            'Disponibilidade': 'Nenhum app nativo para iOS encontrado no momento da análise',
            'Observações': 'Usuários de iPhone que buscam um cliente multiprovedor semelhante devem considerar um app de iOS dedicado; o RikkaHub atualmente não publica nenhum.',
          },
          {
            'Plataforma': 'Web / navegador',
            'Disponibilidade': 'Existe uma interface web complementar no repositório de código-fonte do projeto',
            'Observações': 'Pensada como uma contraparte baseada em navegador do app Android, não como um serviço público hospedado — usá-la exige configurá-la você mesmo a partir do código-fonte.',
          },
          {
            'Plataforma': 'Desktop (Windows/macOS/Linux)',
            'Disponibilidade': 'Existe um projeto comunitário separado, o rikkahub-desktop, mas ele não faz parte do repositório oficial rikkahub/rikkahub',
            'Observações': 'Não é mantido pela mesma equipe principal; trate-o como um fork de terceiros, não como um lançamento oficial.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Quanto custa o RikkaHub?',
        content: [
          '**O RikkaHub em si é gratuito para baixar e usar; nenhuma assinatura ou compra no aplicativo foi encontrada no app ou em sua documentação no momento da análise.** O projeto aceita doações voluntárias via [Patreon](https://patreon.com/rikkahub) e 爱发电 (afdian.com), e lista patrocinadores pagos em seu README, mas nenhum dos dois é necessário para usar o app.',
          'O custo real de usar o RikkaHub é o que o provedor de IA ao qual você se conecta cobrar — OpenAI, Google Gemini e Anthropic cobram por token em suas APIs, e um servidor Ollama ou LM Studio auto-hospedado não tem cobrança por mensagem, mas exige hardware que você já possui ou paga separadamente. O RikkaHub não adiciona margem, não mede nem fica com uma parte do custo da API de nenhum provedor; ele simplesmente encaminha suas requisições usando a chave que você forneceu.',
        ],
        items: [
          '**O app:** Gratuito, de código aberto (AGPL-3.0), sem assinatura.',
          '**Uso de provedor na nuvem:** Cobrado diretamente pelo provedor (OpenAI, Google, Anthropic ou um serviço de retransmissão) conforme seu próprio preço — o RikkaHub não adiciona margem.',
          '**Uso de servidor auto-hospedado:** Sem cobrança por mensagem, mas exige um PC ou servidor capaz de rodar Ollama ou LM Studio, um custo de hardware separado, fora do RikkaHub em si.',
          '**Doações opcionais:** Via Patreon ou 爱发电, totalmente voluntárias e sem relação com a funcionalidade do app.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Quais recursos o RikkaHub tem?',
        content: [
          '**Além do chat básico multiprovedor, o RikkaHub acumulou um conjunto amplo de recursos, típico de um cliente de chat com posição definida e desenvolvimento ativo, segundo seu próprio [README](https://github.com/rikkahub/rikkahub/blob/master/README.md).** Isso inclui:',
        ],
        items: [
          '**Design Material You e modo escuro.** A interface segue o sistema de temas dinâmicos do Android.',
          '**Workspace.** Um ambiente de agente Linux baseado em proot incluído no app — um shell Linux em sandbox que um agente de IA pode usar para executar comandos, distinto de qualquer inferência de modelo de linguagem.',
          '**Suporte a MCP (Model Context Protocol).** O modelo conectado pode chamar ferramentas expostas por um servidor MCP durante a conversa.',
          '**Entrada multimodal.** Aceita imagens, PDFs e documentos do Word como anexos de chat (o suporte depende das próprias capacidades do modelo conectado).',
          '**Ramificação de mensagens.** Permite explorar respostas alternativas a partir do mesmo ponto de uma conversa, em vez de apenas um histórico linear.',
          '**Integrações de busca.** Busca na web opcional com sua própria chave de API para provedores como Exa, Tavily, Zhipu, LinkUp, Brave ou Perplexity.',
          '**Renderização de Markdown.** Destaque de sintaxe de código, fórmulas LaTeX, tabelas e renderização de diagramas Mermaid nas respostas.',
          '**Importação/exportação por código QR.** As configurações de provedor (incluindo chaves de API) podem ser compartilhadas entre dispositivos via código QR — trate isso como compartilhar uma senha, já que contém suas credenciais.',
          '**Importação de cartões de personagem do SillyTavern.** Compatível com um formato de arquivo de persona de roleplay comum, usado por outras interfaces de chat.',
          '**Cabeçalhos HTTP e corpos de requisição personalizados.** Usuários avançados podem modificar a requisição bruta enviada a um provedor, útil para provedores com autenticação ou parâmetros não padronizados.',
        ],
        note: 'A disponibilidade de recursos pode variar de acordo com a versão do app, já que o projeto lança versões quase diariamente. Consulte a [página de releases do GitHub](https://github.com/rikkahub/rikkahub/releases) para saber o que já está disponível na sua versão instalada.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o RikkaHub é indicado',
        items: [
          '**Usuários que já pagam por APIs de IA na nuvem e querem um único app Android para todas elas.** Se você tem chaves de API da OpenAI, Google Gemini e Anthropic Claude e está cansado de alternar entre apps separados de cada provedor, a interface única do RikkaHub encaixa diretamente.',
          '**Usuários que hospedam Ollama ou LM Studio e querem um cliente mobile para isso.** O campo de API/URL personalizada do RikkaHub funciona com qualquer servidor compatível com OpenAI, incluindo um rodando na sua própria rede doméstica.',
          '**Desenvolvedores e usuários tecnicamente curiosos, confortáveis em gerenciar suas próprias chaves de API.** Não há acesso a IA embutido — cada recurso exige que você forneça credenciais, o que combina com usuários que já entendem como funciona a cobrança por API.',
          '**Usuários que querem um app ativamente mantido e atualizado com frequência.** O projeto lança versões quase diariamente e tem uma base de colaboradores grande e ativa em comparação com clientes de chat Android similares.',
          '**Usuários que querem recursos de chamada de ferramentas e agentes sobre um modelo na nuvem.** O suporte a MCP e o sandbox Workspace ampliam o que um modelo conectado pode fazer além do chat de texto simples, para usuários confortáveis em configurar esses recursos avançados.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o RikkaHub não é indicado',
        items: [
          '**Usuários que querem IA rodando inteiramente no dispositivo, sem conexão de rede.** O RikkaHub sempre precisa alcançar um endpoint de API, local ou na nuvem; quem quer um app genuinamente offline deve usar o [PocketPal AI](/power-local-llm/pocketpal-ai-review) ou o [Private LLM](/power-local-llm/private-llm-review) em vez disso.',
          '**Usuários que ainda não têm uma chave de API e não querem gerenciar uma.** O RikkaHub não inclui nenhum acesso a IA gratuito ou embutido — quem quer abrir um app e conversar imediatamente sem nenhuma configuração ou conta deve procurar um app com curadoria e modelos embutidos.',
          '**Usuários de iPhone ou iPad.** O RikkaHub não tinha nenhuma versão oficial para iOS no momento da análise; usuários da Apple devem considerar um app de iOS dedicado, como o Private LLM ou o Enclave AI.',
          '**Usuários que querem a menor carga técnica de configuração possível.** Adicionar um provedor exige informar corretamente o formato de API, a URL base, a chave e o nome do modelo — não existe um fluxo de "baixar e conversar" em um toque, como nos apps on-device.',
          '**Usuários especialmente preocupados com modificação e redistribuição sem publicação do código-fonte.** A licença AGPL-3.0 é um ponto forte em termos de transparência, mas também significa que qualquer pessoa que faça um fork do RikkaHub e execute uma versão modificada como serviço de rede é legalmente obrigada a publicar suas alterações — leia a própria licença se isso afetar uma implantação que você esteja planejando.',
        ],
      },
      forkWarning: {
        id: 'fork-warning',
        title: 'Um aviso sobre forks do RikkaHub',
        content: [
          '**O próprio README do RikkaHub avisa explicitamente que "existem muitas versões bifurcadas (forks) do RikkaHub" e que problemas com forks não têm relação com o projeto oficial.** O projeto pede aos usuários que "usem forks com cautela para evitar vazamentos de privacidade ou solicitações excessivas de permissões" — um alerta que vale a pena repetir aqui, já que um app bifurcado pode solicitar permissões diferentes ou enviar dados de forma diferente do lançamento oficial, sem revisão ou aval do desenvolvedor original.',
          'Como as chaves de API são inseridas diretamente no app para configurar um provedor, instalar um fork não oficial significa confiar essas credenciais ao código desse fork. Esta análise cobre apenas o projeto oficial [rikkahub/rikkahub](https://github.com/rikkahub/rikkahub), distribuído pelo [site oficial](https://rikka-ai.com/download), pela ficha do [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) sob o nome de pacote `me.rerere.rikkahub`, e por sua própria página do GitHub Releases.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'RikkaHub vs. alternativas',
        itemHeadings: true,
        columns: ['App', 'Licença / custo', 'Plataformas', 'Roda localmente?'],
        rows: [
          {
            'App': 'RikkaHub',
            'Licença / custo': 'Gratuito, código aberto (AGPL-3.0)',
            'Plataformas': 'Android',
            'Roda localmente?': 'Não — apenas cliente de API na nuvem/auto-hospedada; você traz sua própria chave ou servidor',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Licença / custo': 'Gratuito, código aberto (MIT)',
            'Plataformas': 'iPhone/iPad, Android',
            'Roda localmente?': 'Sim — baixa e executa modelos GGUF no dispositivo via llama.cpp',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Licença / custo': 'Pago, compra única; código fechado',
            'Plataformas': 'iPhone/iPad/Mac (somente Apple)',
            'Roda localmente?': 'Sim — mais de 140 modelos on-device com quantização OmniQuant e GPTQ',
          },
          {
            'App': 'LLM Farm',
            'Licença / custo': 'Gratuito, código aberto; removido da App Store no momento da análise',
            'Plataformas': 'iPhone/iPad, Mac (compilar a partir do código-fonte)',
            'Roda localmente?': 'Sim — inferência on-device baseada em llama.cpp, quando compilado a partir do [código-fonte no GitHub](https://github.com/guinmoon/LLMFarm)',
          },
          {
            'App': 'Layla',
            'Licença / custo': 'Freemium; código fechado',
            'Plataformas': 'Android',
            'Roda localmente?': 'Sim — formatos de modelo GGUF, LiteRT-LM e PTE no dispositivo; verifique a disponibilidade atual de planos em [layla-network.ai](https://www.layla-network.ai)',
          },
          {
            'App': 'Maid',
            'Licença / custo': 'Gratuito, código aberto',
            'Plataformas': 'Android, Windows, macOS, Linux',
            'Roda localmente?': 'Sim, com modelos GGUF/llama.cpp; também pode se conectar remotamente ao Ollama ou a um provedor na nuvem, segundo seu [repositório do GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)',
          },
          {
            'App': 'AnythingLLM Mobile',
            'Licença / custo': 'Gratuito; projeto principal de código aberto',
            'Plataformas': 'Android (iOS planejado)',
            'Roda localmente?': 'Posicionado como on-device/local-first para histórico de chat e RAG de documentos, segundo seu [repositório do GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile); também pode se conectar a modelos na nuvem',
          },
          {
            'App': 'Open WebUI',
            'Licença / custo': 'Gratuito, código aberto',
            'Plataformas': 'App web auto-hospedado (qualquer dispositivo com navegador)',
            'Roda localmente?': 'Não — assim como o RikkaHub, é uma interface que você aponta para o Ollama ou outro endpoint compatível com OpenAI; a comparação arquitetônica mais próxima do RikkaHub, embora seja voltada a desktop/auto-hospedagem em vez de um app mobile nativo, segundo seu [repositório do GitHub](https://github.com/open-webui/open-webui)',
          },
        ],
        note: 'RikkaHub e Open WebUI são as duas entradas desta tabela que não executam modelos no dispositivo — ambos são interfaces para uma API na nuvem ou um servidor auto-hospedado que você já administra. Os demais apps listados incluem um mecanismo de inferência on-device, que é a diferença arquitetônica central a entender antes de escolher entre eles.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O RikkaHub executa modelos de IA localmente no meu celular?',
            a: 'Não. O RikkaHub é um cliente de chat que se conecta a provedores de IA na nuvem (OpenAI, Google Gemini, Anthropic ou qualquer API compatível com OpenAI) usando sua própria chave de API. Ele não inclui um mecanismo de inferência no dispositivo. Ele pode se conectar a um servidor Ollama ou LM Studio auto-hospedado na sua própria rede, mas o modelo continua rodando no hardware desse servidor, não no celular.',
          },
          {
            q: 'O RikkaHub é gratuito?',
            a: 'Sim, o app em si é gratuito para baixar e usar; nenhuma assinatura ou compra no aplicativo foi encontrada no momento da análise. O único custo é o que o provedor de IA ao qual você o conecta cobrar — o RikkaHub não cobra margem nem taxa própria.',
          },
          {
            q: 'Quem desenvolveu o RikkaHub?',
            a: 'O RikkaHub foi criado principalmente por um desenvolvedor com o usuário do GitHub re-ovo, responsável pela grande maioria dos commits no histórico do projeto. O repositório agora é hospedado sob a organização rikkahub no GitHub e tem colaboradores adicionais.',
          },
          {
            q: 'O RikkaHub é de código aberto, e qual licença ele usa?',
            a: 'Sim. O código-fonte do RikkaHub é público no GitHub sob a GNU Affero General Public License v3.0 (AGPL-3.0). É uma licença copyleft: quem modificar o RikkaHub e executá-lo como serviço de rede é obrigado a publicar suas alterações de código-fonte, uma condição mais rígida que a licença MIT usada por alguns apps concorrentes.',
          },
          {
            q: 'Quais provedores de IA posso usar com o RikkaHub?',
            a: 'Qualquer provedor ou serviço que exponha uma API compatível com OpenAI, Google ou Anthropic — isso inclui as APIs oficiais da OpenAI, Google Gemini e Anthropic Claude, serviços de retransmissão de API de terceiros, e servidores auto-hospedados como Ollama ou LM Studio.',
          },
          {
            q: 'Posso usar o RikkaHub sem conexão com a internet?',
            a: 'Não, não no sentido usual. O RikkaHub sempre precisa alcançar um endpoint de API para gerar uma resposta — mesmo um servidor Ollama ou LM Studio auto-hospedado na sua rede local exige uma conexão de rede entre seu celular e esse servidor.',
          },
          {
            q: 'O RikkaHub está disponível no iPhone?',
            a: 'Não. O RikkaHub não tinha nenhuma versão oficial para iOS no momento da análise; é um app exclusivo para Android. Usuários de iPhone que buscam um cliente de chat multiprovedor semelhante devem avaliar um app de iOS dedicado.',
          },
          {
            q: 'O RikkaHub pode se conectar ao meu próprio servidor Ollama?',
            a: 'Sim. O campo de API/URL personalizada do RikkaHub aceita qualquer endpoint compatível com OpenAI, incluindo um servidor Ollama ou LM Studio auto-hospedado que exponha sua API compatível com OpenAI integrada na sua rede local. O modelo continua rodando no hardware desse servidor, não no celular.',
          },
          {
            q: 'Os forks do RikkaHub são seguros de usar?',
            a: 'O próprio README do RikkaHub avisa explicitamente que existem versões bifurcadas e que elas não têm relação com o projeto oficial, aconselhando os usuários a "usar forks com cautela para evitar vazamentos de privacidade ou solicitações excessivas de permissões". Esta análise cobre apenas o app oficial rikkahub/rikkahub, distribuído pelo site oficial, pelo Google Play sob o nome de pacote me.rerere.rikkahub, e por sua própria página do GitHub Releases.',
          },
          {
            q: 'Como o RikkaHub se compara ao PocketPal AI ou ao Private LLM?',
            a: 'O RikkaHub é um cliente de API na nuvem/auto-hospedada sem inferência no dispositivo, enquanto o PocketPal AI e o Private LLM baixam e executam modelos de peso aberto diretamente no dispositivo usando mecanismos baseados em llama.cpp. Escolha o RikkaHub se você já tem acesso a API ou um servidor auto-hospedado e quer uma interface Android bem-feita para isso; escolha o PocketPal AI ou o Private LLM se você quer especificamente um modelo rodando no dispositivo sem dependência de rede após o download. Veja a tabela comparativa acima para detalhes de plataforma e licença.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O RikkaHub é um app Android bem construído e ativamente mantido para uma tarefa específica: oferecer uma única interface bem-feita para conversar com o provedor de IA que você já paga, ou com um servidor que você mesmo administra. Ele não é, e não afirma ser, um app de IA on-device — não existe nenhum mecanismo de inferência local em nenhuma parte do seu código, e cada conversa sai do celular para alcançar um endpoint de API em outro lugar. Julgado pelo que ele realmente é — um cliente de chat multiprovedor gratuito, de código aberto e sob a licença AGPL-3.0 —, é uma opção sólida para usuários de Android que já gerenciam chaves de API ou hospedam Ollama ou LM Studio e querem um único app atualizado com frequência em vez de vários apps específicos de cada provedor. É a escolha errada para quem quer especificamente IA rodando inteiramente no próprio dispositivo, sem nenhum servidor envolvido — para isso, o PocketPal AI ou o Private LLM são os apps a avaliar.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[RikkaHub no GitHub](https://github.com/rikkahub/rikkahub) — código-fonte, README, licença (AGPL-3.0), histórico de lançamentos e números de estrelas/forks citados nesta análise.',
          '[GitHub Releases do RikkaHub](https://github.com/rikkahub/rikkahub/releases) — ritmo de lançamentos e download do APK.',
          '[CONTRIBUTING.md do RikkaHub](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) — política de contribuição citada para a postura do projeto sobre pull requests.',
          '[Site oficial do RikkaHub](https://rikka-ai.com/download) — fonte de download recomendada segundo o próprio README do projeto.',
          '[RikkaHub no Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) — disponibilidade no Android.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do PocketPal AI (2026)](/power-local-llm/pocketpal-ai-review) — um app gratuito e de código aberto que realmente executa modelos GGUF no dispositivo, o contraste arquitetônico direto com o RikkaHub.',
          '[Análise do Private LLM](/power-local-llm/private-llm-review) — uma alternativa paga, de código fechado e on-device para iPhone, iPad e Mac, com um catálogo de mais de 140 modelos.',
          '[Os melhores apps de LLM local para Android em 2026](/power-local-llm/best-local-llm-apps-android-2026) — o panorama de apps on-device para Android, para leitores que buscam especificamente inferência local em vez de um cliente na nuvem.',
          '[Os melhores apps de LLM local para iPhone em 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — o equivalente em iOS, para leitores que precisam de uma opção on-device para plataformas Apple, já que o RikkaHub não oferece nenhuma.',
          '[Os melhores modelos LLM mobile em 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — o artigo complementar sobre modelos, para quem decidir que prefere inferência local em vez de um cliente na nuvem como o RikkaHub.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RikkaHub: análise (2026) — chat de IA multiprovedor para Android',
      description:
        'Análise do RikkaHub: app Android gratuito e de código aberto para conversar com provedores de IA na nuvem usando suas próprias chaves de API. Roda localmente? Licença, configuração e veredito.',
      url: 'https://promptquorum.com/pt/power-local-llm/rikkahub-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Usuários de Android avaliando clientes de chat de IA multiprovedor e interfaces para LLMs auto-hospedados' },
      about: [
        { '@type': 'Thing', name: 'RikkaHub' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LM Studio' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/rikkahub-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'RikkaHub: análise (2026)', item: 'https://promptquorum.com/pt/power-local-llm/rikkahub-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/rikkahub-review-hero-ar.webp',
    title: 'مراجعة RikkaHub (2026): محادثة ذكاء اصطناعي متعددة المزودين لأندرويد',
    seoTitle: 'مراجعة RikkaHub 2026: تطبيق أندرويد مفتوح المصدر',
    intro:
      'RikkaHub تطبيق أندرويد مجاني ومفتوح المصدر يتيح لك التحدث مع مزودي الذكاء الاصطناعي السحابي — OpenAI وGoogle Gemini وAnthropic وأي نقطة نهاية متوافقة مع OpenAI — من واجهة واحدة باستخدام مفاتيح API الخاصة بك. لا يقوم التطبيق بتشغيل نماذج اللغة على الهاتف نفسه؛ فهو عميل (client) وليس محرك استدلال محلي على الجهاز، رغم أنه يمكنه الاتصال بخادم Ollama أو LM Studio مستضاف ذاتياً على شبكتك الخاصة عبر نفس حقل نقطة النهاية المخصصة. طوّره بشكل أساسي المطور re-ovo، وهو الآن تحت إشراف [منظمة rikkahub على GitHub](https://github.com/rikkahub/rikkahub)، ويخضع لرخصة GNU Affero General Public License v3.0 (AGPL-3.0)، وقد جمع أكثر من 7,400 نجمة منذ إنشاء المستودع في مارس 2025. تستعرض هذه المراجعة بدقة ما يشغّله RikkaHub محلياً وما لا يشغّله، وميزاته الفعلية وتسعيره، ولمن يناسب — ولمن لا يناسب — مقارنة بتطبيق يعمل على الجهاز مثل PocketPal AI أو Private LLM.',
    metaDescription:
      'مراجعة RikkaHub: تطبيق أندرويد مجاني ومفتوح المصدر للمحادثة مع مزودي الذكاء الاصطناعي السحابي بمفاتيح API الخاصة بك. هل يعمل محلياً؟ الرخصة والإعداد والحكم النهائي.',
    twitterDescription:
      'مراجعة RikkaHub 2026: تطبيق أندرويد مجاني برخصة AGPL-3.0 للتبديل بين OpenAI وGemini وClaude ونقاط نهاية API مستضافة ذاتياً. لا يشغّل نماذج على الجهاز — إليك ما يفعله فعلياً.',
    audience:
      'مستخدمو أندرويد الذين لديهم بالفعل مفاتيح API لمزودي ذكاء اصطناعي سحابي، أو من يستضيفون Ollama أو LM Studio ذاتياً ويبحثون عن واجهة موبايل لذلك.',
    readTime: '11 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مراجعة RikkaHub',
    targetKeywords: [
      'مراجعة rikkahub',
      'rikkahub android',
      'rikkahub نموذج محلي',
      'rikkahub مقابل pocketpal ai',
      'هل rikkahub مجاني',
      'رخصة rikkahub',
      'تطبيق أندرويد محادثة ذكاء اصطناعي عدة مزودين',
      'ربط ollama بتطبيق أندرويد',
    ],
    current_models_mentioned: ['نماذج GPT من OpenAI', 'Google Gemini', 'Anthropic Claude'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**لا يشغّل RikkaHub نماذج الذكاء الاصطناعي على هاتفك — فهو عميل أندرويد مجاني ومفتوح المصدر (AGPL-3.0) يتصل بمزودي الذكاء الاصطناعي السحابي باستخدام مفاتيح API الخاصة بك، ويمكنه اختيارياً الاتصال بخادم Ollama أو LM Studio مستضاف ذاتياً على شبكتك الخاصة.** طوّره بشكل أساسي re-ovo وهو مستضاف على [GitHub](https://github.com/rikkahub/rikkahub) (أكثر من 7,400 نجمة وقت هذه المراجعة)، ويدعم أي نقطة نهاية متوافقة مع واجهات OpenAI أو Google أو Anthropic عبر شاشة إعداد واحدة مخصصة لـ API/URL/النموذج. التطبيق مجاني بالكامل؛ والتكلفة المستمرة الوحيدة هي ما يفرضه مزود الذكاء الاصطناعي الذي تتصل به.',
    quickAnswerTop: {
      ar: {
        question: 'هل يشغّل RikkaHub نماذج الذكاء الاصطناعي محلياً، وهل يستحق التثبيت؟',
        answer:
          'لا — لا يتضمن RikkaHub محرك استدلال على الجهاز، لذا لا يمكنه تشغيل نموذج لغوي مباشرة على هاتفك. يستحق التثبيت إذا كانت لديك بالفعل مفاتيح API لـ OpenAI أو Google Gemini أو Anthropic أو مزود متوافق وتريد تطبيق أندرويد واحد أنيق للتبديل بينها، أو إذا كنت تستضيف Ollama أو LM Studio ذاتياً وتريد واجهة موبايل لخادمك الخاص. إنه ليس الخيار الصحيح إذا كنت تريد تحديداً نموذجاً يعمل على الجهاز دون أي اتصال شبكي — لهذا الغرض استخدم PocketPal AI أو Private LLM بدلاً منه.',
        bullets: [
          'مجاني ومفتوح المصدر بموجب رخصة AGPL-3.0؛ الشيفرة المصدرية عامة على [GitHub](https://github.com/rikkahub/rikkahub).',
          'عميل متعدد المزودين، وليس بيئة تشغيل محلية على الجهاز — تحضر مفتاح API الخاص بك لـ OpenAI أو Google Gemini أو Anthropic أو أي خدمة متوافقة مع OpenAI.',
          'يمكنه الاتصال بخادم Ollama أو LM Studio مستضاف ذاتياً على شبكتك الخاصة عبر حقل API/URL المخصص — يستمر النموذج بالعمل على ذلك الخادم، وليس على الهاتف.',
          'للأندرويد فقط، لا يوجد إصدار iOS؛ متوفر عبر [الموقع الرسمي](https://rikka-ai.com/download) و[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) وتنزيل مباشر لملف APK من [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'بُني بشكل أساسي من قبل مطور واحد (GitHub: [re-ovo](https://github.com/re-ovo)) وهو الآن تحت إشراف منظمة rikkahub، مع أكثر من 7,400 نجمة وإصدارات شبه يومية وقت هذه المراجعة.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو RikkaHub؟', anchor: 'what-is-rikkahub' },
      { label: 'هل يشغّل RikkaHub نماذج الذكاء الاصطناعي محلياً؟', anchor: 'does-rikkahub-run-models-locally' },
      { label: 'من طوّر RikkaHub؟', anchor: 'history-and-developer' },
      { label: 'كيفية البدء مع RikkaHub', anchor: 'getting-started' },
      { label: 'ما المزودون التي يدعمها RikkaHub؟', anchor: 'providers-supported' },
      { label: 'هل RikkaHub متوفر على iPhone؟', anchor: 'platform-availability' },
      { label: 'كم تكلفة RikkaHub؟', anchor: 'pricing' },
      { label: 'ما ميزات RikkaHub؟', anchor: 'key-features' },
      { label: 'لمن يناسب RikkaHub', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب RikkaHub', anchor: 'who-should-not-use' },
      { label: 'ملاحظة حول نسخ RikkaHub المتفرعة', anchor: 'fork-warning' },
      { label: 'RikkaHub مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
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
            text: 'RikkaHub تطبيق أندرويد مجاني ومفتوح المصدر (AGPL-3.0) يتيح لك المحادثة مع OpenAI وGoogle Gemini وAnthropic ومزودي ذكاء اصطناعي آخرين متوافقين مع OpenAI باستخدام مفاتيح API الخاصة بك — لا يشغّل نماذج على الجهاز نفسه.',
          },
          {
            type: 'plain-terms',
            text: 'إنه أشبه بجهاز تحكم عن بُعد لنماذج ذكاء اصطناعي تدفع مقابلها بالفعل، أو لخادم تديره بنفسك، وليس تطبيقاً يضع نموذجاً مباشرة على هاتفك. إن كنت تريد استدلالاً يحدث بالكامل على الجهاز دون أي اتصال شبكي، فهذا ليس ذلك التطبيق — راجع PocketPal AI أو Private LLM بدلاً منه.',
          },
        ],
        items: [
          'مجاني ومفتوح المصدر (AGPL-3.0)؛ الشيفرة المصدرية ومتتبع المشكلات عامان على [GitHub](https://github.com/rikkahub/rikkahub).',
          'عميل محادثة متعدد المزودين، وليس محرك استدلال على الجهاز — لا يوجد أي مكوّن llama.cpp أو MLC أو LiteRT-LM في قاعدة الشيفرة.',
          'يتطلب مفتاح API خاصاً بك لـ OpenAI أو Google Gemini أو Anthropic أو أي مزود متوافق مع OpenAI؛ ويمكنه أيضاً الاتصال بخادم Ollama أو LM Studio مستضاف ذاتياً عبر عنوان URL مخصص.',
          'بُني بشكل أساسي من قبل re-ovo وهو الآن تحت إشراف منظمة rikkahub على GitHub؛ أكثر من 7,400 نجمة وأكثر من 640 نسخة متفرعة (fork) وقت هذه المراجعة.',
          'للأندرويد فقط — متوفر عبر [الموقع الرسمي](https://rikka-ai.com/download) و[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) وتنزيلات APK من [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          'التطبيق نفسه مجاني، دون أي مشتريات داخل التطبيق عُثر عليها وقت المراجعة؛ وتعتمد التكلفة المستمرة كلياً على مزود الذكاء الاصطناعي الذي تتصل به.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [مستودع GitHub العام](https://github.com/rikkahub/rikkahub) (الشيفرة المصدرية وREADME والإصدارات وبيانات واجهة GitHub البرمجية)، وموقع المشروع، وصفحته على Google Play، وقد تم التحقق منها في سبتمبر 2026. لم يُجرِ PromptQuorum اختبارات عملية مستقلة لـ RikkaHub لهذه المراجعة — الادعاءات أدناه حول البنية المحلية مقابل السحابية تستند إلى فحص الشيفرة المصدرية العامة والتوثيق، وليس إلى اختبار الصندوق الأسود.',
          },
        ],
      },
      overview: {
        id: 'what-is-rikkahub',
        title: 'ما هو RikkaHub؟',
        content: [
          '**RikkaHub تطبيق أندرويد أصلي (native) للتبديل بين عدة مزودي ذكاء اصطناعي من واجهة واحدة، باستخدام مفاتيح API التي توفّرها بنفسك.** بدلاً من تثبيت تطبيق منفصل لكل مزود — واحد لـ OpenAI، وآخر لـ Google Gemini، وآخر لـ Anthropic Claude — يوفّر RikkaHub شاشة محادثة واحدة مع قائمة قابلة للتخصيص من "المزودين"، كل منها يشير إلى عنوان URL أساسي، ومفتاح API، واسم نموذج.',
          'بُني التطبيق بشكل أصلي بلغة Kotlin باستخدام Jetpack Compose، وفقاً [لتوثيق حزمة التقنيات](https://github.com/rikkahub/rikkahub/blob/master/README.md) الخاص به، ويدعم أي نقطة نهاية تتحدث بصيغ واجهات OpenAI أو Google أو Anthropic — وهذا يشمل عملياً المزودين الرسميين أنفسهم، وخدمات ترحيل/وسيط (proxy) تابعة لجهات خارجية تعيد بيع الوصول إلى نماذج عدة مزودين، وخوادم مستضافة ذاتياً متوافقة مع OpenAI مثل Ollama أو LM Studio.',
        ],
        note: 'RikkaHub عميل محادثة، وليس تطبيقاً يستضيف نماذج: فالنموذج اللغوي نفسه يعمل دائماً في مكان مختلف عن عملية RikkaHub — على خوادم المزود السحابية، أو على جهاز كمبيوتر تتحكم به إن أشرت إلى نقطة نهاية مستضافة ذاتياً.',
      },
      localVsCloud: {
        id: 'does-rikkahub-run-models-locally',
        title: 'هل يشغّل RikkaHub نماذج الذكاء الاصطناعي محلياً؟',
        content: [
          '**لا. لا يتضمن RikkaHub محرك استدلال على الجهاز ولا يمكنه تشغيل نموذج لغوي مباشرة على وحدة المعالجة المركزية (CPU) أو الرسومية (GPU) أو العصبية (NPU) في هاتفك.** إنه عميل: تقوم بإعداد مفتاح API ونقطة نهاية لمزود ما، ويرسل RikkaHub رسائلك إلى تلك النقطة عبر الشبكة، ويعرض الرد الذي يستلمه.',
          'هذا فرق جوهري عن تطبيقات موبايل مثل [PocketPal AI](/power-local-llm/pocketpal-ai-review) أو [Private LLM](/power-local-llm/private-llm-review)، التي تتضمن محرك استدلال (llama.cpp أو ما شابه) وتشغّل ملف نموذج تم تنزيله مباشرة باستخدام ذاكرة الوصول العشوائي (RAM) ووحدة الرسومات/المعالجة العصبية الخاصة بالجهاز نفسه، دون الحاجة لاتصال شبكي بعد تنزيل النموذج. يصف [ملف README](https://github.com/rikkahub/rikkahub) الخاص بـ RikkaHub التطبيق ببساطة بأنه "an Android APP that supports for multiple LLM providers" — ولا تظهر كلمة "محلي" في أي مكان في قائمة ميزاته، كما أن البحث في كامل شجرة الشيفرة المصدرية العامة (أكثر من 1,900 ملف، تم التحقق في سبتمبر 2026) لا يكشف عن وجود أي مكوّن llama.cpp أو MLC أو LiteRT أو LiteRT-LM في أي مكان بالشيفرة.',
          'أقرب ما يصل إليه RikkaHub لـ"الذكاء الاصطناعي المحلي" هو توجيه حقل API/URL المخصص إلى خادم على شبكتك الخاصة بدلاً من نقطة نهاية سحابية عامة — على سبيل المثال [Ollama](https://ollama.com) أو [LM Studio](https://lmstudio.ai) يعملان على جهاز كمبيوتر في نفس المنزل، ويعرضان واجهة برمجية متوافقة مع OpenAI. في هذا الإعداد، يستمر النموذج بالعمل على عتاد ذلك الكمبيوتر، وليس على الهاتف؛ إذ يعمل RikkaHub كواجهة موبايل لخادم تتحكم به، مما يبقي بيانات محادثتك خارج البنية التحتية السحابية لطرف ثالث، لكنه إعداد مختلف جوهرياً — وقصة مختلفة من حيث الخصوصية والعتاد — عن تطبيق يشغّل النموذج على الجهاز نفسه.',
        ],
        decisionBlock: {
          title: 'RikkaHub أم تطبيق يعمل على الجهاز؟',
          localIf: [
            'تريد أن يحدث الاستدلال على الهاتف نفسه، دون أي اتصال شبكي بعد تنزيل النموذج — استخدم [PocketPal AI](/power-local-llm/pocketpal-ai-review) أو [Private LLM](/power-local-llm/private-llm-review) بدلاً من ذلك.',
            'تحتاج تطبيقاً يعمل دون أي مسار شبكي متاح على الإطلاق، حتى إلى جهاز على نفس شبكة Wi-Fi — يحتاج RikkaHub دائماً للوصول إلى نقطة نهاية API، حتى لو كانت محلية.',
          ],
          cloudIf: [
            'لديك بالفعل وصول عبر API إلى OpenAI أو Google Gemini أو Anthropic Claude وتريد تطبيق أندرويد واحداً للتبديل بينها دون التنقل بين تطبيقات منفصلة لكل مزود.',
            'تستضيف Ollama أو LM Studio ذاتياً على خادم منزلي أو كمبيوتر وتريد واجهة محادثة موبايل أنيقة لذلك على شبكتك الخاصة.',
          ],
          quick: [
            'استدلال على الجهاز، لا حاجة للشبكة أبداً: PocketPal AI أو Private LLM.',
            'عميل تحضر مفتاحك الخاص له للاتصال بمزودين سحابيين كثيرين: RikkaHub.',
            'واجهة موبايل لخادم Ollama/LM Studio المستضاف ذاتياً: RikkaHub، موجّهاً إلى عنوان الشبكة المحلية لخادمك.',
          ],
        },
      },
      history: {
        id: 'history-and-developer',
        title: 'من طوّر RikkaHub؟',
        content: [
          '**أنشأ RikkaHub بشكل أساسي مطور يستخدم اسم المستخدم [re-ovo](https://github.com/re-ovo) على GitHub، وهو مسؤول عن الغالبية العظمى من الالتزامات (commits) في تاريخ المشروع؛ والمستودع الآن مستضاف تحت [منظمة rikkahub على GitHub](https://github.com/rikkahub) بدلاً من حساب شخصي.** أُنشئ المستودع نفسه في 11 مارس 2025 ونما ليصبح مشروعاً يُصان بنشاط، بمساهمات من مجموعة صغيرة من المطورين الإضافيين إلى جانب المشرف الرئيسي.',
          'يُصرّح RikkaHub بوضوح في [إرشادات المساهمة](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) الخاصة به بأنه مشروع ذو موقف واضح: يُرفض تماماً أي طلب سحب (pull request) يضيف لغات جديدة، أو ميزات جديدة، أو يحتوي على إعادة هيكلة واسعة النطاق مولّدة بالذكاء الاصطناعي. يقبل المشروع الرعاية من المجتمع — يُدرج ملف README رعاة مدفوعين منهم [aihubmix.com](https://aihubmix.com)، وهي خدمة ترحيل API — ويتلقى تبرعات طوعية عبر [Patreon](https://patreon.com/rikkahub) والمنصة الصينية 爱发电 (afdian.com).',
        ],
        items: [
          'المطور الرئيسي: مستخدم GitHub [re-ovo](https://github.com/re-ovo)، المسؤول عن الغالبية العظمى من الالتزامات في تاريخ المشروع.',
          'أُنشئ المستودع في 11 مارس 2025؛ وهو الآن مستضاف تحت [منظمة rikkahub](https://github.com/rikkahub) بدلاً من حساب شخصي.',
          'الرخصة: GNU Affero General Public License v3.0 (AGPL-3.0) — رخصة copyleft أكثر صرامة من رخصة MIT التي تستخدمها بعض التطبيقات المنافسة؛ تُلزم كل من يشغّل نسخة معدَّلة كخدمة شبكية بنشر تعديلاته على الشيفرة المصدرية.',
          'أكثر من 7,400 نجمة على GitHub وأكثر من 640 نسخة متفرعة (fork) وقت هذه المراجعة، مع متتبع مشكلات نشط (أكثر من 280 مشكلة مفتوحة) وإصدارات شبه يومية.',
          'يرفض بوضوح طلبات السحب الخاصة باللغات الجديدة والميزات الجديدة وإعادة الهيكلة الواسعة المولّدة بالذكاء الاصطناعي، وفقاً لإرشادات المساهمة الخاصة به — مشروع ذو موقف واضح ومتعمد، لا يسعى لمساهمات ميزات واسعة من المجتمع.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيفية البدء مع RikkaHub',
        content: [
          '**لتشغيل RikkaHub، تحتاج مفتاح API موجوداً مسبقاً من أحد المزودين — لا يتضمن التطبيق أي وصول مجاني أو مدمج للذكاء الاصطناعي.** لا يوجد في هذا المسار أي نموذج يُنزَّل إلى الجهاز؛ أنت تربط التطبيق بحساب تملكه بالفعل، أو بخادم تديره بالفعل.',
        ],
        numberedItems: [
          {
            title: 'تثبيت التطبيق',
            whyItMatters: 'نزّل RikkaHub من [الموقع الرسمي](https://rikka-ai.com/download) (الموصى به من المشروع) أو [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub). يمكن للمستخدمين التقنيين أيضاً تثبيت ملف APK مباشرة من [GitHub Releases](https://github.com/rikkahub/rikkahub/releases).',
          },
          {
            title: 'إضافة مزود',
            whyItMatters: 'افتح إعدادات المزودين وأضف إدخالاً جديداً: اختر صيغة API (متوافقة مع OpenAI أو Google أو Anthropic)، ثم أدخل عنوان URL الأساسي، ومفتاح API الخاص بك، واسم النموذج الذي تريد استخدامه. هنا تُدخل بيانات مزود سحابي، أو بيانات خدمة ترحيل API، أو عنوان الشبكة المحلية لخادمك المستضاف ذاتياً.',
          },
          {
            title: 'اختيار النموذج وبدء المحادثة',
            whyItMatters: 'بمجرد إعداد مزود، اخترْه من محدد النماذج وابدأ محادثة. تُرسَل كل رسالة إلى نقطة النهاية التي أعددتها — لا يوجد وضع عدم اتصال خارج شاشات إعدادات التطبيق نفسها.',
          },
          {
            title: 'اختياري: ربط الأدوات والبحث',
            whyItMatters: 'أضف خادم MCP (Model Context Protocol)، أو أدخل مفتاح API الخاص بك لمزود بحث ويب مثل Exa أو Tavily أو Brave، لتوسيع ما يمكن للنموذج المتصل فعله أثناء المحادثة. كلاهما اختياري ويتطلب بيانات اعتماد توفّرها بنفسك.',
          },
        ],
      },
      providersSupported: {
        id: 'providers-supported',
        title: 'ما المزودون التي يدعمها RikkaHub؟',
        itemHeadings: true,
        columns: ['نوع المزود', 'أمثلة', 'ما تحتاجه'],
        rows: [
          {
            'نوع المزود': 'واجهات متوافقة مع OpenAI',
            'أمثلة': 'واجهة OpenAI نفسها، وأي خدمة تابعة لجهة خارجية تعرض نفس صيغة الطلب',
            'ما تحتاجه': 'مفتاح API وعنوان URL الأساسي للمزود',
          },
          {
            'نوع المزود': 'واجهات متوافقة مع Google',
            'أمثلة': 'نماذج Google Gemini',
            'ما تحتاجه': 'مفتاح API من Google AI',
          },
          {
            'نوع المزود': 'واجهات متوافقة مع Anthropic',
            'أمثلة': 'نماذج Anthropic Claude',
            'ما تحتاجه': 'مفتاح API من Anthropic',
          },
          {
            'نوع المزود': 'خدمات ترحيل/وسيط API',
            'أمثلة': 'خدمات تابعة لجهات خارجية تعيد بيع الوصول إلى نماذج عدة مزودين خلف مفتاح واحد، مثل راعي المشروع [aihubmix.com](https://aihubmix.com)',
            'ما تحتاجه': 'مفتاح API وعنوان URL الأساسي الخاصين بخدمة الترحيل، تُدخَل بنفس طريقة إدخال مزود مباشر',
          },
          {
            'نوع المزود': 'خوادم محلية مستضافة ذاتياً',
            'أمثلة': 'Ollama أو LM Studio يعملان على جهاز الكمبيوتر أو الخادم المنزلي الخاص بك، عبر واجهته المدمجة المتوافقة مع OpenAI',
            'ما تحتاجه': 'عنوان الشبكة المحلية لخادمك (على سبيل المثال http://192.168.1.50:11434/v1) — لا حاجة لمفتاح API سحابي، لكن النموذج يعمل على ذلك الجهاز، وليس على هاتفك',
          },
        ],
        note: 'لا يقدّم RikkaHub نفسه أو يعيد بيع الوصول إلى أي مزود. يُعدّ كل اتصال — سحابي أو مستضاف ذاتياً — ببيانات اعتماد أو عنوان شبكة توفّره بنفسك.',
      },
      platform: {
        id: 'platform-availability',
        title: 'هل RikkaHub متوفر على iPhone؟',
        itemHeadings: true,
        columns: ['المنصة', 'التوفر', 'ملاحظات'],
        rows: [
          {
            'المنصة': 'أندرويد',
            'التوفر': 'متوفر عبر [الموقع الرسمي](https://rikka-ai.com/download) و[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) وتنزيل مباشر لملف APK من [GitHub Releases](https://github.com/rikkahub/rikkahub/releases)',
            'ملاحظات': 'التطبيق الأصلي؛ تغطي هذه المراجعة هذا الإصدار.',
          },
          {
            'المنصة': 'iPhone / iPad',
            'التوفر': 'لم يُعثر على أي تطبيق iOS أصلي وقت المراجعة',
            'ملاحظات': 'على مستخدمي iPhone الباحثين عن عميل مشابه متعدد المزودين النظر في تطبيق iOS مخصص بدلاً من ذلك؛ لا ينشر RikkaHub حالياً أي إصدار كهذا.',
          },
          {
            'المنصة': 'ويب / متصفح',
            'التوفر': 'توجد واجهة ويب مرافقة في مستودع الشيفرة المصدرية للمشروع',
            'ملاحظات': 'مصممة كنظير قائم على المتصفح لتطبيق أندرويد وليس كخدمة عامة مستضافة — يتطلب استخدامها إعدادها بنفسك من الشيفرة المصدرية.',
          },
          {
            'المنصة': 'سطح المكتب (Windows/macOS/Linux)',
            'التوفر': 'يوجد مشروع مجتمعي منفصل باسم rikkahub-desktop لكنه ليس جزءاً من المستودع الرسمي rikkahub/rikkahub',
            'ملاحظات': 'لا يصونه نفس الفريق الأساسي؛ تعامل معه كنسخة متفرعة (fork) من طرف ثالث وليس إصداراً رسمياً.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'كم تكلفة RikkaHub؟',
        content: [
          '**RikkaHub نفسه مجاني للتنزيل والاستخدام؛ لم يُعثر على أي اشتراك أو شراء داخل التطبيق أو في توثيقه وقت المراجعة.** يقبل المشروع تبرعات طوعية عبر [Patreon](https://patreon.com/rikkahub) و爱发电 (afdian.com)، ويُدرج رعاة مدفوعين في ملف README الخاص به، لكن أياً منهما ليس ضرورياً لاستخدام التطبيق.',
          'التكلفة الفعلية لاستخدام RikkaHub هي ما يفرضه مزود الذكاء الاصطناعي الذي تتصل به — تفرض OpenAI وGoogle Gemini وAnthropic جميعها رسوماً على واجهاتها البرمجية بحسب عدد الرموز (tokens)، بينما لا يفرض خادم Ollama أو LM Studio المستضاف ذاتياً أي رسوم لكل رسالة لكنه يتطلب عتاداً تملكه بالفعل أو تدفع ثمنه بشكل منفصل. لا يضيف RikkaHub أي هامش ربح، ولا يقيس، ولا يقتطع جزءاً من تكلفة واجهة أي مزود؛ إنه ببساطة يمرر طلباتك باستخدام المفتاح الذي وفّرته.',
        ],
        items: [
          '**التطبيق:** مجاني، مفتوح المصدر (AGPL-3.0)، بلا اشتراك.',
          '**استخدام مزود سحابي:** يُفرض مباشرة من قِبل المزود (OpenAI أو Google أو Anthropic أو خدمة ترحيل) وفقاً لتسعيره الخاص — لا يضيف RikkaHub أي هامش ربح.',
          '**استخدام خادم مستضاف ذاتياً:** لا رسوم لكل رسالة، لكنه يتطلب جهاز كمبيوتر أو خادماً قادراً على تشغيل Ollama أو LM Studio، وهي تكلفة عتاد منفصلة خارج RikkaHub نفسه.',
          '**التبرعات الاختيارية:** عبر Patreon أو 爱发电، طوعية بالكامل وغير مرتبطة بوظائف التطبيق.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'ما ميزات RikkaHub؟',
        content: [
          '**بعيداً عن المحادثة الأساسية متعددة المزودين، جمّع RikkaHub مجموعة ميزات واسعة نموذجية لعميل محادثة ذي موقف واضح ونشط التطوير، وفقاً [لملف README](https://github.com/rikkahub/rikkahub/blob/master/README.md) الخاص به.** ومنها:',
        ],
        items: [
          '**تصميم Material You والوضع الداكن.** تتبع الواجهة نظام Android الديناميكي للسمات.',
          '**Workspace.** بيئة وكيل لينكس قائمة على proot مدمجة في التطبيق — طرفية لينكس معزولة (sandbox) يمكن لوكيل الذكاء الاصطناعي استخدامها لتنفيذ الأوامر، وهي منفصلة عن أي استدلال لنموذج لغوي.',
          '**دعم MCP (بروتوكول سياق النموذج).** يمكن للنموذج المتصل استدعاء أدوات يعرضها خادم MCP أثناء المحادثة.',
          '**إدخال متعدد الوسائط.** يقبل الصور وملفات PDF ومستندات Word كمرفقات في المحادثة (يعتمد الدعم على قدرات النموذج المتصل نفسه).',
          '**تفرع الرسائل.** يتيح استكشاف ردود بديلة من نفس نقطة في المحادثة بدلاً من سجل خطي فقط.',
          '**تكاملات البحث.** بحث ويب اختياري باستخدام مفتاح API الخاص بك لمزودين مثل Exa وTavily وZhipu وLinkUp وBrave أو Perplexity.',
          '**عرض Markdown.** تمييز صياغة الشيفرة، وصيغ LaTeX، والجداول، وعرض مخططات Mermaid في الردود.',
          '**الاستيراد/التصدير عبر رمز QR.** يمكن مشاركة إعدادات المزود (بما فيها مفاتيح API) بين الأجهزة عبر رمز QR — تعامل مع ذلك كمشاركة كلمة مرور، لأنه يحتوي بيانات اعتمادك.',
          '**استيراد بطاقات شخصيات SillyTavern.** متوافق مع صيغة ملف شخصية لعب أدوار شائعة تستخدمها واجهات محادثة أخرى.',
          '**رؤوس HTTP وأجسام طلبات مخصصة.** يمكن للمستخدمين المتقدمين تعديل الطلب الخام المُرسَل إلى مزود ما، وهو مفيد للمزودين ذوي المصادقة أو المعاملات غير القياسية.',
        ],
        note: 'قد يختلف توفر الميزات حسب إصدار التطبيق، إذ يصدر المشروع إصدارات شبه يومية. راجع [صفحة إصدارات GitHub](https://github.com/rikkahub/rikkahub/releases) لمعرفة ما هو متاح في نسختك المثبتة.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب RikkaHub',
        items: [
          '**المستخدمون الذين يدفعون بالفعل مقابل واجهات ذكاء اصطناعي سحابية ويريدون تطبيق أندرويد واحداً لها جميعاً.** إذا كانت لديك مفاتيح API لـ OpenAI وGoogle Gemini وAnthropic Claude وسئمت التنقل بين تطبيقات منفصلة لكل مزود، تناسبك واجهة RikkaHub الموحدة مباشرة.',
          '**المستخدمون الذين يستضيفون Ollama أو LM Studio ذاتياً ويريدون عميل موبايل لذلك.** يعمل حقل API/URL المخصص في RikkaHub مع أي خادم متوافق مع OpenAI، بما في ذلك خادم يعمل على شبكتك المنزلية الخاصة.',
          '**المطورون والمستخدمون الفضوليون تقنياً المرتاحون لإدارة مفاتيح API الخاصة بهم.** لا يوجد وصول مدمج للذكاء الاصطناعي — تتطلب كل ميزة أن تُوفّر بيانات الاعتماد بنفسك، وهذا يناسب المستخدمين الذين يفهمون بالفعل كيفية عمل الفوترة عبر API.',
          '**المستخدمون الراغبون في تطبيق يُصان بنشاط ويُحدَّث بشكل متكرر.** يصدر المشروع إصدارات شبه يومية ولديه قاعدة مساهمين كبيرة ونشطة مقارنة بعملاء محادثة أندرويد مشابهين.',
          '**المستخدمون الراغبون في ميزات استدعاء الأدوات والوكلاء فوق نموذج سحابي.** يوسّع دعم MCP وبيئة Workspace المعزولة ما يمكن للنموذج المتصل فعله بما يتجاوز المحادثة النصية البسيطة، للمستخدمين المرتاحين بإعداد هذه الميزات المتقدمة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب RikkaHub',
        items: [
          '**المستخدمون الراغبون في تشغيل الذكاء الاصطناعي بالكامل على أجهزتهم دون أي اتصال شبكي.** يحتاج RikkaHub دائماً للوصول إلى نقطة نهاية API، محلية كانت أم سحابية؛ على من يريد تطبيقاً يعمل دون اتصال بالفعل استخدام [PocketPal AI](/power-local-llm/pocketpal-ai-review) أو [Private LLM](/power-local-llm/private-llm-review) بدلاً من ذلك.',
          '**المستخدمون الذين لا يملكون بالفعل مفتاح API ولا يريدون إدارة واحد.** لا يتضمن RikkaHub أي وصول مجاني أو مدمج للذكاء الاصطناعي — على من يريد فتح تطبيق والمحادثة فوراً دون أي إعداد أو حساب البحث عن تطبيق منسّق بنماذج مدمجة بدلاً من ذلك.',
          '**مستخدمو iPhone أو iPad.** لم يكن لدى RikkaHub أي إصدار iOS رسمي وقت المراجعة؛ على مستخدمي Apple النظر في تطبيق iOS مخصص مثل Private LLM أو Enclave AI.',
          '**المستخدمون الراغبون في أقل عبء إعداد تقني ممكن.** تتطلب إضافة مزود إدخال صيغة API وعنوان URL الأساسي والمفتاح واسم النموذج بشكل صحيح — لا يوجد مسار "نزّل وابدأ المحادثة" بلمسة واحدة كما في التطبيقات التي تعمل على الجهاز.',
          '**المستخدمون القلقون تحديداً من التعديل وإعادة التوزيع دون نشر الشيفرة المصدرية.** تُعدّ رخصة AGPL-3.0 نقطة قوة من حيث الشفافية، لكنها تعني أيضاً أن أي شخص يفرّع RikkaHub ويشغّل نسخة معدَّلة كخدمة شبكية ملزَم قانونياً بنشر تعديلاته — راجع الرخصة نفسها إن كان هذا يؤثر على نشر تخطط له.',
        ],
      },
      forkWarning: {
        id: 'fork-warning',
        title: 'ملاحظة حول نسخ RikkaHub المتفرعة',
        content: [
          '**يحذّر ملف README الخاص بـ RikkaHub صراحة من أن "هناك العديد من النسخ المتفرعة (forks) من RikkaHub" وأن المشكلات المرتبطة بالنسخ المتفرعة لا علاقة لها بالمشروع الرسمي.** يطلب المشروع من المستخدمين "استخدام النسخ المتفرعة بحذر لتجنب تسريبات الخصوصية أو طلبات الأذونات المفرطة" — وهو تحذير يستحق التكرار هنا، لأن تطبيقاً متفرعاً قد يطلب أذونات مختلفة أو يرسل البيانات بطريقة مختلفة عن الإصدار الرسمي، دون مراجعة أو موافقة من المطور الأصلي.',
          'وبما أن مفاتيح API تُدخَل مباشرة في التطبيق لإعداد مزود ما، فإن تثبيت نسخة متفرعة غير رسمية يعني الوثوق بشيفرة تلك النسخة ببيانات الاعتماد تلك. تغطي هذه المراجعة فقط المشروع الرسمي [rikkahub/rikkahub](https://github.com/rikkahub/rikkahub)، الموزَّع عبر [موقعه الرسمي](https://rikka-ai.com/download)، وصفحته على [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) تحت اسم الحزمة `me.rerere.rikkahub`، وصفحة GitHub Releases الخاصة به.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'RikkaHub مقابل البدائل',
        itemHeadings: true,
        columns: ['التطبيق', 'الرخصة / التكلفة', 'المنصات', 'هل يعمل محلياً؟'],
        rows: [
          {
            'التطبيق': 'RikkaHub',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر (AGPL-3.0)',
            'المنصات': 'Android',
            'هل يعمل محلياً؟': 'لا — عميل API سحابي/مستضاف ذاتياً فقط؛ تحضر مفتاحك أو خادمك الخاص',
          },
          {
            'التطبيق': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر (MIT)',
            'المنصات': 'iPhone/iPad، Android',
            'هل يعمل محلياً؟': 'نعم — ينزّل ويشغّل نماذج GGUF على الجهاز عبر llama.cpp',
          },
          {
            'التطبيق': '[Private LLM](/power-local-llm/private-llm-review)',
            'الرخصة / التكلفة': 'مدفوع، شراء لمرة واحدة؛ مغلق المصدر',
            'المنصات': 'iPhone/iPad/Mac (Apple فقط)',
            'هل يعمل محلياً؟': 'نعم — أكثر من 140 نموذجاً على الجهاز مع تكميم OmniQuant وGPTQ',
          },
          {
            'التطبيق': 'LLM Farm',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر؛ أُزيل من App Store وقت المراجعة',
            'المنصات': 'iPhone/iPad، Mac (بناء من الشيفرة المصدرية)',
            'هل يعمل محلياً؟': 'نعم — استدلال على الجهاز قائم على llama.cpp، عند البناء من [شيفرته المصدرية على GitHub](https://github.com/guinmoon/LLMFarm)',
          },
          {
            'التطبيق': 'Layla',
            'الرخصة / التكلفة': 'فريميوم؛ مغلق المصدر',
            'المنصات': 'Android',
            'هل يعمل محلياً؟': 'نعم — صيغ نماذج GGUF وLiteRT-LM وPTE على الجهاز؛ تحقق من توفر الخطط الحالية على [layla-network.ai](https://www.layla-network.ai)',
          },
          {
            'التطبيق': 'Maid',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر',
            'المنصات': 'Android وWindows وmacOS وLinux',
            'هل يعمل محلياً؟': 'نعم لنماذج GGUF/llama.cpp؛ ويمكنه أيضاً الاتصال عن بُعد بـ Ollama أو بمزود سحابي، وفقاً [لمستودعه على GitHub](https://github.com/Mobile-Artificial-Intelligence/maid)',
          },
          {
            'التطبيق': 'AnythingLLM Mobile',
            'الرخصة / التكلفة': 'مجاني؛ المشروع الأساسي مفتوح المصدر',
            'المنصات': 'Android (iOS مخطط له)',
            'هل يعمل محلياً؟': 'موضَّع كتطبيق يعمل على الجهاز/محلي أولاً لسجل المحادثة واسترجاع المستندات (RAG)، وفقاً [لمستودعه على GitHub](https://github.com/Mintplex-Labs/anythingllm-mobile)؛ ويمكنه أيضاً الاتصال بنماذج سحابية',
          },
          {
            'التطبيق': 'Open WebUI',
            'الرخصة / التكلفة': 'مجاني، مفتوح المصدر',
            'المنصات': 'تطبيق ويب مستضاف ذاتياً (أي جهاز به متصفح)',
            'هل يعمل محلياً؟': 'لا — مثل RikkaHub تماماً، إنها واجهة تشير بها إلى Ollama أو نقطة نهاية أخرى متوافقة مع OpenAI؛ وهي أقرب مقارنة معمارية لـ RikkaHub، رغم أنها موجّهة لسطح المكتب/الاستضافة الذاتية بدلاً من تطبيق موبايل أصلي، وفقاً [لمستودعها على GitHub](https://github.com/open-webui/open-webui)',
          },
        ],
        note: 'يُعدّ RikkaHub وOpen WebUI الإدخالين الوحيدين في هذا الجدول اللذين لا يشغّلان نماذج على الجهاز — كلاهما واجهة لواجهة سحابية أو خادم مستضاف ذاتياً تديره بالفعل. أما بقية التطبيقات المدرجة فتتضمن محرك استدلال على الجهاز، وهو الفارق المعماري الأساسي الذي يجب فهمه قبل الاختيار بينها.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يشغّل RikkaHub نماذج ذكاء اصطناعي محلياً على هاتفي؟',
            a: 'لا. RikkaHub عميل محادثة يتصل بمزودي ذكاء اصطناعي سحابي (OpenAI أو Google Gemini أو Anthropic أو أي واجهة متوافقة مع OpenAI) باستخدام مفتاح API الخاص بك. لا يتضمن محرك استدلال على الجهاز. يمكنه الاتصال بخادم Ollama أو LM Studio مستضاف ذاتياً على شبكتك الخاصة، لكن النموذج يستمر بالعمل على عتاد ذلك الخادم، وليس على الهاتف.',
          },
          {
            q: 'هل RikkaHub مجاني؟',
            a: 'نعم، التطبيق نفسه مجاني للتنزيل والاستخدام؛ لم يُعثر على أي اشتراك أو شراء داخل التطبيق وقت المراجعة. التكلفة الوحيدة هي ما يفرضه مزود الذكاء الاصطناعي الذي تتصل به — لا يفرض RikkaHub أي هامش أو رسوم خاصة به.',
          },
          {
            q: 'من طوّر RikkaHub؟',
            a: 'أنشأ RikkaHub بشكل أساسي مطور يستخدم اسم المستخدم re-ovo على GitHub، وهو مسؤول عن الغالبية العظمى من الالتزامات في تاريخ المشروع. المستودع الآن مستضاف تحت منظمة rikkahub على GitHub وله مساهمون إضافيون.',
          },
          {
            q: 'هل RikkaHub مفتوح المصدر، وما الرخصة التي يستخدمها؟',
            a: 'نعم. الشيفرة المصدرية لـ RikkaHub عامة على GitHub بموجب رخصة GNU Affero General Public License v3.0 (AGPL-3.0). وهي رخصة copyleft: من يعدّل RikkaHub ويشغّله كخدمة شبكية ملزَم بنشر تعديلاته على الشيفرة المصدرية، وهو شرط أكثر صرامة من رخصة MIT التي تستخدمها بعض التطبيقات المنافسة.',
          },
          {
            q: 'ما مزودو الذكاء الاصطناعي التي يمكنني استخدامها مع RikkaHub؟',
            a: 'أي مزود أو خدمة تعرض واجهة متوافقة مع OpenAI أو Google أو Anthropic — ويشمل ذلك الواجهات الرسمية لـ OpenAI وGoogle Gemini وAnthropic Claude، وخدمات ترحيل API التابعة لجهات خارجية، وخوادم مستضافة ذاتياً مثل Ollama أو LM Studio.',
          },
          {
            q: 'هل يمكنني استخدام RikkaHub دون اتصال بالإنترنت؟',
            a: 'لا، ليس بالمعنى المعتاد. يحتاج RikkaHub دائماً للوصول إلى نقطة نهاية API لتوليد رد — حتى خادم Ollama أو LM Studio مستضاف ذاتياً على شبكتك المحلية يتطلب اتصالاً شبكياً بين هاتفك وذلك الخادم.',
          },
          {
            q: 'هل RikkaHub متوفر على iPhone؟',
            a: 'لا. لم يكن لدى RikkaHub أي إصدار iOS رسمي وقت المراجعة؛ فهو تطبيق حصري لأندرويد. على مستخدمي iPhone الباحثين عن عميل محادثة مشابه متعدد المزودين تقييم تطبيق iOS مخصص بدلاً من ذلك.',
          },
          {
            q: 'هل يمكن لـ RikkaHub الاتصال بخادم Ollama الخاص بي؟',
            a: 'نعم. يقبل حقل API/URL المخصص في RikkaHub أي نقطة نهاية متوافقة مع OpenAI، بما في ذلك خادم Ollama أو LM Studio مستضاف ذاتياً يعرض واجهته المدمجة المتوافقة مع OpenAI على شبكتك المحلية. يستمر النموذج بالعمل على عتاد ذلك الخادم، وليس على الهاتف.',
          },
          {
            q: 'هل من الآمن استخدام النسخ المتفرعة من RikkaHub؟',
            a: 'يحذّر ملف README الخاص بـ RikkaHub صراحة من وجود نسخ متفرعة لا علاقة لها بالمشروع الرسمي، وينصح المستخدمين "باستخدام النسخ المتفرعة بحذر لتجنب تسريبات الخصوصية أو طلبات الأذونات المفرطة". تغطي هذه المراجعة فقط تطبيق rikkahub/rikkahub الرسمي، الموزَّع عبر موقعه الرسمي، وGoogle Play تحت اسم الحزمة me.rerere.rikkahub، وصفحة GitHub Releases الخاصة به.',
          },
          {
            q: 'كيف يقارَن RikkaHub بـ PocketPal AI أو Private LLM؟',
            a: 'RikkaHub عميل واجهة سحابية/مستضافة ذاتياً دون استدلال على الجهاز، بينما ينزّل PocketPal AI وPrivate LLM كلاهما نماذج مفتوحة الأوزان ويشغّلانها مباشرة على الجهاز باستخدام محركات قائمة على llama.cpp. اختر RikkaHub إذا كان لديك بالفعل وصول عبر API أو خادم مستضاف ذاتياً وتريد واجهة أندرويد أنيقة لذلك؛ واختر PocketPal AI أو Private LLM إذا كنت تريد تحديداً نموذجاً يعمل على الجهاز دون اعتماد على الشبكة بعد التنزيل. راجع جدول المقارنة أعلاه لتفاصيل المنصة والرخصة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'RikkaHub تطبيق أندرويد جيد البناء ويُصان بنشاط لمهمة محددة: منحك واجهة واحدة أنيقة للتحدث مع مزود الذكاء الاصطناعي الذي تدفع مقابله بالفعل، أو مع خادم تديره بنفسك. إنه ليس تطبيق ذكاء اصطناعي يعمل على الجهاز، ولا يدّعي ذلك — لا يوجد أي محرك استدلال محلي في أي مكان بشيفرته، وتغادر كل محادثة الهاتف لتصل إلى نقطة نهاية API في مكان آخر. بالحكم عليه بناءً على حقيقته — عميل محادثة مجاني ومفتوح المصدر متعدد المزودين برخصة AGPL-3.0 — فهو خيار قوي لمستخدمي أندرويد الذين يديرون بالفعل مفاتيح API أو يستضيفون Ollama أو LM Studio ذاتياً ويريدون تطبيقاً واحداً يُحدَّث بشكل متكرر بدلاً من عدة تطبيقات خاصة بكل مزود. إنه الخيار الخاطئ لمن يريد تحديداً ذكاءً اصطناعياً يعمل بالكامل على جهازه الخاص دون أي خادم متدخل — لهذا الغرض، PocketPal AI أو Private LLM هما التطبيقان اللذان ينبغي تقييمهما.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[RikkaHub على GitHub](https://github.com/rikkahub/rikkahub) — الشيفرة المصدرية، وREADME، والرخصة (AGPL-3.0)، وتاريخ الإصدارات، وأعداد النجوم/النسخ المتفرعة المذكورة في هذه المراجعة.',
          '[إصدارات RikkaHub على GitHub](https://github.com/rikkahub/rikkahub/releases) — وتيرة الإصدارات وتنزيل APK.',
          '[ملف CONTRIBUTING.md الخاص بـ RikkaHub](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) — سياسة المساهمة المذكورة لموقف المشروع الواضح تجاه طلبات السحب.',
          '[الموقع الرسمي لـ RikkaHub](https://rikka-ai.com/download) — مصدر التنزيل الموصى به وفقاً لملف README الخاص بالمشروع نفسه.',
          '[RikkaHub على Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) — التوفر على أندرويد.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة PocketPal AI (2026)](/power-local-llm/pocketpal-ai-review) — تطبيق مجاني ومفتوح المصدر يشغّل بالفعل نماذج GGUF على الجهاز، وهو التناقض المعماري المباشر مع RikkaHub.',
          '[مراجعة Private LLM](/power-local-llm/private-llm-review) — بديل مدفوع ومغلق المصدر يعمل على الجهاز لـ iPhone وiPad وMac بكتالوج يضم أكثر من 140 نموذجاً.',
          '[أفضل تطبيقات LLM المحلية لأندرويد في 2026](/power-local-llm/best-local-llm-apps-android-2026) — استعراض تطبيقات أندرويد التي تعمل على الجهاز، للقراء الباحثين تحديداً عن استدلال محلي بدلاً من عميل سحابي.',
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — النظير على iOS، للقراء المحتاجين لخيار يعمل على الجهاز لمنصات Apple، إذ لا يقدّم RikkaHub أياً منها.',
          '[أفضل نماذج LLM للموبايل في 2026: Phi-4 Mini مقابل Gemma 4 مقابل SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — المقال المكمّل على مستوى النماذج لمن يقرر تفضيل الاستدلال المحلي على عميل سحابي مثل RikkaHub.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة RikkaHub (2026): محادثة ذكاء اصطناعي متعددة المزودين لأندرويد',
      description:
        'مراجعة RikkaHub: تطبيق أندرويد مجاني ومفتوح المصدر للمحادثة مع مزودي الذكاء الاصطناعي السحابي بمفاتيح API الخاصة بك. هل يعمل محلياً؟ الرخصة والإعداد والحكم النهائي.',
      url: 'https://promptquorum.com/ar/power-local-llm/rikkahub-review',
      inLanguage: 'ar',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مستخدمو أندرويد الذين يقيّمون عملاء محادثة ذكاء اصطناعي متعددي المزودين وواجهات نماذج لغوية مستضافة ذاتياً' },
      about: [
        { '@type': 'Thing', name: 'RikkaHub' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LM Studio' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/rikkahub-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة RikkaHub (2026)', item: 'https://promptquorum.com/ar/power-local-llm/rikkahub-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/rikkahub-review-hero-zh.webp',
    title: 'RikkaHub评测(2026):Android多提供商AI聊天客户端',
    seoTitle: 'RikkaHub 2026评测:免费开源Android AI客户端',
    intro:
      'RikkaHub是一款免费开源的Android应用,让你可以用自己的API密钥,在一个界面里和OpenAI、Google Gemini、Anthropic以及任何兼容OpenAI的接口聊天。它本身并不在手机上运行语言模型——它是一个客户端,而不是设备端推理引擎,不过可以通过同一个自定义端点字段连接到你自己网络上自托管的Ollama或LM Studio服务器。项目主要由开发者re-ovo构建,现在由[rikkahub GitHub组织](https://github.com/rikkahub/rikkahub)维护,采用GNU Affero General Public License v3.0(AGPL-3.0)许可证,自2025年3月仓库创建以来已获得超过7,400颗星标。本文将详细说明RikkaHub究竟在本地运行了什么、没有运行什么,它的真实功能、价格,以及哪些人适合使用它,哪些人更适合选择PocketPal AI或Private LLM这类真正在设备端运行的应用。',
    metaDescription:
      'RikkaHub评测:一款免费开源的Android应用,用你自己的API密钥与云端AI提供商聊天。它真的在本地运行吗?许可证、设置方法与总体评价。',
    twitterDescription:
      'RikkaHub 2026评测:免费的AGPL-3.0许可Android应用,可在OpenAI、Gemini、Claude和自托管API端点之间切换。它并不在设备上运行模型——这里说清楚它实际做了什么。',
    audience:
      '已经拥有云端AI提供商API密钥、或自行搭建了Ollama或LM Studio并寻找移动端前端的Android用户。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RikkaHub评测',
    targetKeywords: [
      'rikkahub 评测',
      'rikkahub android',
      'rikkahub 本地大模型',
      'rikkahub vs pocketpal ai',
      'rikkahub 是否免费',
      'rikkahub 许可证',
      'android ai 聊天 多个提供商',
      '将ollama连接到android应用',
    ],
    current_models_mentioned: ['OpenAI GPT系列模型', 'Google Gemini', 'Anthropic Claude'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**RikkaHub并不在你的手机上运行AI模型——它是一款免费开源(AGPL-3.0)的Android客户端,使用你自己的API密钥连接云端AI提供商,也可以选择连接你自己网络上自托管的Ollama或LM Studio服务器。**项目主要由re-ovo开发,托管在[GitHub](https://github.com/rikkahub/rikkahub)上(评测时已有超过7,400颗星标),通过一个自定义API/URL/模型配置界面,支持任何兼容OpenAI、Google或Anthropic接口的端点。应用本身完全免费;唯一的持续成本是你所连接的AI提供商收取的费用。',
    quickAnswerTop: {
      zh: {
        question: 'RikkaHub会在本地运行AI模型吗?值得安装吗?',
        answer:
          '不会——RikkaHub不包含设备端推理引擎,因此无法在手机上直接运行语言模型。如果你已经拥有OpenAI、Google Gemini、Anthropic或兼容提供商的API密钥,想要一个精致的Android应用在它们之间切换,或者你自行搭建了Ollama或LM Studio并希望有一个移动端前端,那么值得安装。如果你明确想要一个完全在设备上运行、没有任何网络请求的模型,这不是正确的选择——那种情况下应该使用PocketPal AI或Private LLM。',
        bullets: [
          '在AGPL-3.0许可证下免费开源;源代码公开在[GitHub](https://github.com/rikkahub/rikkahub)上。',
          '是一个多提供商客户端,而不是设备端运行环境——你需要自带OpenAI、Google Gemini、Anthropic或任何兼容OpenAI服务的API密钥。',
          '可以通过自定义API/URL字段连接到你自己网络上自托管的Ollama或LM Studio服务器——模型仍在该服务器上运行,而不是在手机上。',
          '仅支持Android,没有iOS版本;可通过[官方网站](https://rikka-ai.com/download)、[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)获取,也可从[GitHub Releases](https://github.com/rikkahub/rikkahub/releases)直接下载APK。',
          '主要由一名开发者构建(GitHub:[re-ovo](https://github.com/re-ovo)),现已由rikkahub组织维护,评测时已有超过7,400颗星标,几乎每天都有新版本发布。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'RikkaHub是什么?', anchor: 'what-is-rikkahub' },
      { label: 'RikkaHub会在本地运行AI模型吗?', anchor: 'does-rikkahub-run-models-locally' },
      { label: 'RikkaHub是谁开发的?', anchor: 'history-and-developer' },
      { label: '如何开始使用RikkaHub', anchor: 'getting-started' },
      { label: 'RikkaHub支持哪些提供商?', anchor: 'providers-supported' },
      { label: 'RikkaHub支持iPhone吗?', anchor: 'platform-availability' },
      { label: 'RikkaHub的价格是多少?', anchor: 'pricing' },
      { label: 'RikkaHub有哪些功能?', anchor: 'key-features' },
      { label: 'RikkaHub适合谁使用', anchor: 'who-should-use' },
      { label: 'RikkaHub不适合谁使用', anchor: 'who-should-not-use' },
      { label: '关于RikkaHub分支版本的说明', anchor: 'fork-warning' },
      { label: 'RikkaHub与其他替代方案对比', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '总体评价', anchor: 'verdict' },
      { label: '参考来源', anchor: 'sources' },
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
            text: 'RikkaHub是一款免费开源(AGPL-3.0)的Android应用,让你用自己的API密钥与OpenAI、Google Gemini、Anthropic及其他兼容OpenAI的AI提供商聊天——它并不在设备本身上运行模型。',
          },
          {
            type: 'plain-terms',
            text: '它更像是一个遥控器,用来操作你已经付费使用的AI模型,或者你自己运营的服务器,而不是把模型直接装进你的手机的应用。如果你想要完全在设备上、没有任何网络请求的推理,这不是那款应用——请转而考虑PocketPal AI或Private LLM。',
          },
        ],
        items: [
          '免费开源(AGPL-3.0);源代码和问题跟踪都公开在[GitHub](https://github.com/rikkahub/rikkahub)上。',
          '是一个多提供商聊天客户端,而不是设备端推理引擎——代码库中不存在llama.cpp、MLC或LiteRT-LM组件。',
          '需要你自己提供OpenAI、Google Gemini、Anthropic或任何兼容OpenAI提供商的API密钥;也可以通过自定义URL指向自托管的Ollama或LM Studio服务器。',
          '主要由re-ovo构建,现已由rikkahub GitHub组织维护;评测时已有超过7,400颗星标和640多个分支(fork)。',
          '仅限Android——可通过[官方网站](https://rikka-ai.com/download)、[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)以及[GitHub Releases](https://github.com/rikkahub/rikkahub/releases)的APK下载获取。',
          '应用本身免费,评测时未发现任何应用内购买;持续成本完全取决于你所连接的AI提供商。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本文基于公开的[GitHub仓库](https://github.com/rikkahub/rikkahub)(源代码、README、发布记录以及GitHub API元数据)、项目官网和Google Play页面撰写,核实时间为2026年9月。PromptQuorum没有为本文对RikkaHub进行独立的实机基准测试——下文关于本地与云端架构的说法基于对公开源代码和文档的检查,而非黑盒测试。',
          },
        ],
      },
      overview: {
        id: 'what-is-rikkahub',
        title: 'RikkaHub是什么?',
        content: [
          '**RikkaHub是一款原生Android聊天应用,可以在一个界面里切换多个AI提供商,使用你自己提供的API密钥。**它不需要为每个提供商单独安装一个应用——一个用于OpenAI,一个用于Google Gemini,一个用于Anthropic Claude——而是提供一个统一的聊天界面,配有一个可配置的"提供商"列表,每一项都指向一个基础URL、一个API密钥和一个模型名称。',
          '根据其[技术栈文档](https://github.com/rikkahub/rikkahub/blob/master/README.md),该应用使用Kotlin和Jetpack Compose原生构建,支持任何使用OpenAI、Google或Anthropic接口格式的端点——实际上这包括官方提供商本身、转售多个供应商模型访问权限的第三方API中转/代理服务,以及Ollama或LM Studio这类自托管的兼容OpenAI服务器。',
        ],
        note: 'RikkaHub是一个聊天客户端,而不是托管模型的应用:语言模型本身始终运行在RikkaHub进程之外的其他地方——要么在提供商的云服务器上,要么在你所控制的电脑上(如果你指向一个自托管端点)。',
      },
      localVsCloud: {
        id: 'does-rikkahub-run-models-locally',
        title: 'RikkaHub会在本地运行AI模型吗?',
        content: [
          '**不会。RikkaHub不包含设备端推理引擎,无法在手机的CPU、GPU或NPU上直接运行语言模型。**它是一个客户端:你为某个提供商配置API密钥和端点,RikkaHub通过网络把你的消息发送到该端点,并显示收到的回复。',
          '这与[PocketPal AI](/power-local-llm/pocketpal-ai-review)或[Private LLM](/power-local-llm/private-llm-review)等移动应用有着本质区别——这些应用内置了推理引擎(llama.cpp或类似的运行环境),使用设备自身的RAM和GPU/NPU直接运行已下载的模型文件,模型下载后无需网络连接。RikkaHub自己的[README](https://github.com/rikkahub/rikkahub)将其描述为"an Android APP that supports for multiple LLM providers"——功能列表中没有任何地方出现"本地"一词,而对完整公开源代码树(截至2026年9月检查,共有1,900多个文件)的搜索也没有发现任何llama.cpp、MLC、LiteRT或LiteRT-LM组件。',
          'RikkaHub最接近"本地AI"的做法,是把自定义API/URL字段指向你自己网络上的服务器,而不是公共云端点——例如同一屋檐下的电脑运行的[Ollama](https://ollama.com)或[LM Studio](https://lmstudio.ai),对外暴露兼容OpenAI的接口。在这种配置下,模型仍然运行在电脑的硬件上,而不是手机上;RikkaHub扮演的是你所控制的服务器的移动端前端角色。这样做能让你的对话数据留在第三方云基础设施之外,但从架构、隐私和硬件角度来看,这与一款直接在设备上运行模型的应用有着实质性差异。',
        ],
        decisionBlock: {
          title: 'RikkaHub还是设备端应用?',
          localIf: [
            '你希望推理发生在手机本身上,模型下载完成后完全不需要任何网络请求——请改用[PocketPal AI](/power-local-llm/pocketpal-ai-review)或[Private LLM](/power-local-llm/private-llm-review)。',
            '你需要应用在完全没有网络路由的情况下工作,即使是连接同一Wi-Fi上的设备也不行——RikkaHub始终需要连接到某个API端点,即使是本地的。',
          ],
          cloudIf: [
            '你已经拥有OpenAI、Google Gemini或Anthropic Claude的API访问权限,希望用一个Android应用在它们之间切换,而不用来回切换各个厂商单独的应用。',
            '你在家庭服务器或电脑上自行搭建了Ollama或LM Studio,希望在自己的网络上有一个精致的移动聊天界面。',
          ],
          quick: [
            '设备端推理,永远不需要联网:PocketPal AI或Private LLM。',
            '自带密钥、连接众多云端提供商的客户端:RikkaHub。',
            '面向自建Ollama/LM Studio服务器的移动端前端:RikkaHub,指向你服务器的局域网地址。',
          ],
        },
      },
      history: {
        id: 'history-and-developer',
        title: 'RikkaHub是谁开发的?',
        content: [
          '**RikkaHub主要由GitHub用户名为[re-ovo](https://github.com/re-ovo)的开发者创建,该开发者贡献了项目历史中绝大多数的提交(commit);仓库目前托管在[rikkahub GitHub组织](https://github.com/rikkahub)之下,而非个人账户。**仓库本身创建于2025年3月11日,如今已发展为一个积极维护的项目,除了主要维护者外,还有一小群额外开发者的贡献。',
          'RikkaHub在其[贡献指南](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md)中明确表示自己是一个"有明确主张"的项目:新增语言、新增功能,或包含大规模AI生成重构的拉取请求(pull request)都会被直接拒绝。项目接受社区赞助——其README列出了包括API中转服务[aihubmix.com](https://aihubmix.com)在内的付费赞助商——并通过[Patreon](https://patreon.com/rikkahub)和中国平台爱发电(afdian.com)接受自愿捐赠。',
        ],
        items: [
          '主要开发者:GitHub用户[re-ovo](https://github.com/re-ovo),贡献了项目历史中绝大多数的提交。',
          '仓库创建于2025年3月11日;目前托管在[rikkahub组织](https://github.com/rikkahub)之下,而非个人账户。',
          '许可证:GNU Affero General Public License v3.0(AGPL-3.0)——比部分竞品应用采用的MIT许可证更为严格的著佐权(copyleft)许可证,要求任何将修改版作为网络服务运行的人公开其源代码修改。',
          '评测时GitHub星标超过7,400颗,分支(fork)超过640个,问题跟踪活跃(超过280个未关闭issue),发布节奏几乎每天一次。',
          '根据其自身的贡献指南,明确拒绝新增语言、新增功能以及大规模AI生成重构的拉取请求——这是一个刻意保持明确主张的项目,并非旨在吸纳广泛的社区功能贡献。',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: '如何开始使用RikkaHub',
        content: [
          '**要让RikkaHub正常工作,你需要一个已有的提供商API密钥——该应用不包含任何免费或内置的AI访问权限。**在这个流程中,不存在需要下载到设备上的模型;你只是把应用连接到你已经拥有的账户,或者你已经在运营的服务器。',
        ],
        numberedItems: [
          {
            title: '安装应用',
            whyItMatters: '从[官方网站](https://rikka-ai.com/download)(项目推荐)或[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)下载RikkaHub。技术用户也可以直接从[GitHub Releases](https://github.com/rikkahub/rikkahub/releases)侧载APK。',
          },
          {
            title: '添加一个提供商',
            whyItMatters: '打开提供商设置并添加一个新条目:选择一种API格式(兼容OpenAI、Google或Anthropic),然后输入基础URL、你的API密钥和想要使用的模型名称。这里就是你输入云端提供商信息、API中转服务信息,或者你自托管服务器局域网地址的地方。',
          },
          {
            title: '选择模型并开始聊天',
            whyItMatters: '提供商配置完成后,在模型选择器中选中它并开始对话。每条消息都会被发送到你配置的端点——离开应用自身的设置界面后,不存在任何离线模式。',
          },
          {
            title: '可选:连接工具和搜索功能',
            whyItMatters: '添加一个MCP(Model Context Protocol)服务器,或为Exa、Tavily、Brave等网络搜索提供商输入你自己的API密钥,以扩展所连接模型在对话过程中能做的事情。这两项都是可选的,需要你自己提供凭据。',
          },
        ],
      },
      providersSupported: {
        id: 'providers-supported',
        title: 'RikkaHub支持哪些提供商?',
        itemHeadings: true,
        columns: ['提供商类型', '示例', '你需要什么'],
        rows: [
          {
            '提供商类型': '兼容OpenAI的接口',
            '示例': 'OpenAI自身的接口,以及任何暴露相同请求格式的第三方服务',
            '你需要什么': '一个API密钥和提供商的基础URL',
          },
          {
            '提供商类型': '兼容Google的接口',
            '示例': 'Google Gemini模型',
            '你需要什么': '一个Google AI API密钥',
          },
          {
            '提供商类型': '兼容Anthropic的接口',
            '示例': 'Anthropic Claude模型',
            '你需要什么': '一个Anthropic API密钥',
          },
          {
            '提供商类型': 'API中转/代理服务',
            '示例': '将多个供应商模型的访问权限打包在一个密钥后转售的第三方服务,例如项目赞助商[aihubmix.com](https://aihubmix.com)',
            '你需要什么': '该中转服务自己的API密钥和基础URL,填写方式与直接对接提供商相同',
          },
          {
            '提供商类型': '自托管的本地服务器',
            '示例': '运行在你自己电脑或家庭服务器上的Ollama或LM Studio,通过其内置的兼容OpenAI端点提供服务',
            '你需要什么': '你服务器的局域网地址(例如http://192.168.1.50:11434/v1)——不需要云端API密钥,但模型运行在那台机器上,而不是你的手机上',
          },
        ],
        note: 'RikkaHub本身不打包也不转售任何提供商的访问权限。无论是云端还是自托管,每一个连接都需要你自己提供凭据或网络地址来配置。',
      },
      platform: {
        id: 'platform-availability',
        title: 'RikkaHub支持iPhone吗?',
        itemHeadings: true,
        columns: ['平台', '可用性', '备注'],
        rows: [
          {
            '平台': 'Android',
            '可用性': '可通过[官方网站](https://rikka-ai.com/download)、[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)获取,也可从[GitHub Releases](https://github.com/rikkahub/rikkahub/releases)直接下载APK',
            '备注': '原生应用;本文评测的正是这个版本。',
          },
          {
            '平台': 'iPhone / iPad',
            '可用性': '评测时未发现原生iOS应用',
            '备注': '寻找类似多提供商客户端的iPhone用户应转而考虑专门的iOS应用;RikkaHub目前没有发布任何iOS版本。',
          },
          {
            '平台': 'Web / 浏览器',
            '可用性': '项目源代码仓库中存在一个配套的Web UI',
            '备注': '定位为Android应用的浏览器版对应物,而非托管的公共服务——使用它需要自己从源代码进行搭建。',
          },
          {
            '平台': '桌面端(Windows/macOS/Linux)',
            '可用性': '存在一个独立的社区项目rikkahub-desktop,但它不属于官方的rikkahub/rikkahub仓库',
            '备注': '并非由同一核心团队维护;应将其视为第三方分支,而非官方发布版本。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'RikkaHub的价格是多少?',
        content: [
          '**RikkaHub本身可免费下载和使用;评测时在应用及其文档中都没有发现任何订阅或应用内购买。**项目接受通过[Patreon](https://patreon.com/rikkahub)和爱发电(afdian.com)进行的自愿捐赠,其README中也列出了付费赞助商,但两者都不是使用该应用的必要条件。',
          'RikkaHub的实际使用成本来自你所连接的AI提供商——OpenAI、Google Gemini和Anthropic的接口都按token计费,而自托管的Ollama或LM Studio服务器没有按消息计费,但需要你已经拥有或单独付费的硬件。RikkaHub不会对任何提供商的API成本加价、计量或抽成;它只是使用你提供的密钥转发你的请求。',
        ],
        items: [
          '**应用本身:** 免费,开源(AGPL-3.0),无订阅。',
          '**云端提供商使用:** 由提供商(OpenAI、Google、Anthropic或某个中转服务)按其自身价格直接计费——RikkaHub不加价。',
          '**自托管服务器使用:** 没有按消息计费,但需要一台能够运行Ollama或LM Studio的电脑或服务器,这是独立于RikkaHub本身的硬件成本。',
          '**自愿捐赠:** 通过Patreon或爱发电进行,完全自愿,与应用的功能无关。',
        ],
      },
      features: {
        id: 'key-features',
        title: 'RikkaHub有哪些功能?',
        content: [
          '**除了基础的多提供商聊天之外,根据其自身的[README](https://github.com/rikkahub/rikkahub/blob/master/README.md),RikkaHub积累了一套典型的、积极开发、主张明确的聊天客户端功能集。**包括:',
        ],
        items: [
          '**Material You设计和深色模式。** 界面遵循Android的动态主题系统。',
          '**Workspace。** 应用内置的基于proot的Linux代理环境——一个沙盒化的Linux Shell,AI代理可以用它来执行命令,与任何语言模型推理都不相关。',
          '**MCP(Model Context Protocol)支持。** 已连接的模型可以在对话过程中调用MCP服务器暴露的工具。',
          '**多模态输入。** 支持将图片、PDF和Word文档作为聊天附件(是否支持取决于所连接模型自身的能力)。',
          '**消息分支。** 允许从对话中的同一个节点探索不同的回复,而不仅仅是线性历史记录。',
          '**搜索集成。** 可选的网络搜索功能,使用你自己的API密钥连接Exa、Tavily、Zhipu、LinkUp、Brave或Perplexity等提供商。',
          '**Markdown渲染。** 回复中支持代码语法高亮、LaTeX公式、表格以及Mermaid图表渲染。',
          '**二维码导入/导出。** 提供商配置(包括API密钥)可以通过二维码在设备之间共享——请像对待密码一样对待它,因为其中包含你的凭据。',
          '**SillyTavern角色卡导入。** 兼容其他聊天前端也在使用的一种常见角色扮演人设文件格式。',
          '**自定义HTTP请求头和请求体。** 高级用户可以修改发送给提供商的原始请求,这对认证方式或参数非标准的提供商很有用。',
        ],
        note: '由于项目几乎每天都会发布新版本,功能的可用性可能因应用版本而异。请查看[GitHub发布页面](https://github.com/rikkahub/rikkahub/releases),了解你安装的版本中已经上线了哪些功能。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'RikkaHub适合谁使用',
        items: [
          '**已经为云端AI接口付费、希望用一个Android应用统一管理的用户。** 如果你拥有OpenAI、Google Gemini和Anthropic Claude的API密钥,厌倦了在各个厂商单独的应用之间切换,RikkaHub的统一界面正好合适。',
          '**自行搭建Ollama或LM Studio、需要移动端客户端的用户。** RikkaHub的自定义API/URL字段可以对接任何兼容OpenAI的服务器,包括运行在你自己家庭网络上的服务器。',
          '**能够自行管理API密钥的开发者和技术爱好者。** 该应用不内置任何AI访问权限——每个功能都需要你自己提供凭据,这适合已经理解API计费方式的用户。',
          '**希望使用一款积极维护、频繁更新的应用的用户。** 项目几乎每天发布新版本,与同类Android聊天客户端相比,拥有一个庞大而活跃的贡献者社区。',
          '**希望在云端模型基础上使用工具调用和代理功能的用户。** MCP支持和Workspace沙盒扩展了已连接模型在纯文本聊天之外能做的事情,适合愿意配置这些高级功能的用户。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'RikkaHub不适合谁使用',
        items: [
          '**希望AI完全在设备上运行、不联网的用户。** RikkaHub始终需要连接到某个API端点,无论是本地还是云端;真正想要离线应用的用户应改用[PocketPal AI](/power-local-llm/pocketpal-ai-review)或[Private LLM](/power-local-llm/private-llm-review)。',
          '**还没有API密钥、也不想管理密钥的用户。** RikkaHub不包含任何免费或内置的AI访问权限——想要打开应用就能立即聊天、不需要任何设置或账号的用户,应改选内置模型的精选应用。',
          '**iPhone或iPad用户。** RikkaHub在评测时没有官方iOS版本;Apple用户应考虑Private LLM或Enclave AI等专门的iOS应用。',
          '**希望技术设置门槛尽可能低的用户。** 添加提供商需要正确输入API格式、基础URL、密钥和模型名称——它没有设备端应用那种一键"下载即聊"的流程。',
          '**特别担心他人修改后不公开源代码进行再分发的用户。** AGPL-3.0许可证在透明度方面是一个优势,但也意味着任何分支(fork)RikkaHub并将修改版作为网络服务运营的人,都有法律义务公开其修改内容——如果这会影响你计划的部署,请自行阅读许可证原文。',
        ],
      },
      forkWarning: {
        id: 'fork-warning',
        title: '关于RikkaHub分支版本的说明',
        content: [
          '**RikkaHub自己的README明确警告,"RikkaHub存在许多分支(fork)版本",分支版本出现的问题与官方项目无关。**项目要求用户"谨慎使用分支版本,以避免隐私泄露或过度的权限请求"——这一提醒值得在此重申,因为分支版本可能会请求与官方版本不同的权限,或以不同方式传输数据,而这一切都未经原开发者的审查或认可。',
          '由于API密钥是直接输入应用来配置提供商的,安装非官方分支意味着将这些凭据托付给该分支的代码。本文仅涵盖官方[rikkahub/rikkahub](https://github.com/rikkahub/rikkahub)项目,可通过其[官方网站](https://rikka-ai.com/download)、包名为`me.rerere.rikkahub`的[Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)页面,以及其自身的GitHub Releases页面获取。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'RikkaHub与其他替代方案对比',
        itemHeadings: true,
        columns: ['应用', '许可证/费用', '平台', '是否本地运行?'],
        rows: [
          {
            '应用': 'RikkaHub',
            '许可证/费用': '免费,开源(AGPL-3.0)',
            '平台': 'Android',
            '是否本地运行?': '否——仅为云端/自托管API客户端;需自带密钥或服务器',
          },
          {
            '应用': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            '许可证/费用': '免费,开源(MIT)',
            '平台': 'iPhone/iPad、Android',
            '是否本地运行?': '是——下载GGUF模型并通过llama.cpp在设备上运行',
          },
          {
            '应用': '[Private LLM](/power-local-llm/private-llm-review)',
            '许可证/费用': '付费,一次性购买;闭源',
            '平台': 'iPhone/iPad/Mac(仅限Apple)',
            '是否本地运行?': '是——140多个设备端模型,支持OmniQuant和GPTQ量化',
          },
          {
            '应用': 'LLM Farm',
            '许可证/费用': '免费,开源;评测时已从App Store下架',
            '平台': 'iPhone/iPad、Mac(需从源代码构建)',
            '是否本地运行?': '是——如果从其[GitHub源代码](https://github.com/guinmoon/LLMFarm)构建,则为基于llama.cpp的设备端推理',
          },
          {
            '应用': 'Layla',
            '许可证/费用': '免费增值;闭源',
            '平台': 'Android',
            '是否本地运行?': '是——支持GGUF、LiteRT-LM和PTE格式的设备端模型;当前套餐可用性请查看[layla-network.ai](https://www.layla-network.ai)',
          },
          {
            '应用': 'Maid',
            '许可证/费用': '免费,开源',
            '平台': 'Android、Windows、macOS、Linux',
            '是否本地运行?': 'GGUF/llama.cpp模型可本地运行;根据其[GitHub仓库](https://github.com/Mobile-Artificial-Intelligence/maid),也可远程连接Ollama或云端提供商',
          },
          {
            '应用': 'AnythingLLM Mobile',
            '许可证/费用': '免费;核心项目开源',
            '平台': 'Android(计划支持iOS)',
            '是否本地运行?': '根据其[GitHub仓库](https://github.com/Mintplex-Labs/anythingllm-mobile),在聊天记录和文档RAG方面定位为设备端/本地优先;也可连接云端模型',
          },
          {
            '应用': 'Open WebUI',
            '许可证/费用': '免费,开源',
            '平台': '自托管Web应用(任何带浏览器的设备)',
            '是否本地运行?': '否——与RikkaHub一样,它是一个指向Ollama或其他兼容OpenAI端点的前端;根据其[GitHub仓库](https://github.com/open-webui/open-webui),这是与RikkaHub架构上最接近的对比对象,不过它面向桌面端/自托管场景,而非原生移动应用',
          },
        ],
        note: 'RikkaHub和Open WebUI是本表中仅有的两个不在设备上运行模型的条目——两者都是面向云端接口或你已经运营的自托管服务器的前端。表中其他应用都内置了设备端推理引擎,这是在它们之间做选择前需要理解的核心架构差异。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'RikkaHub会在我的手机上本地运行AI模型吗?',
            a: '不会。RikkaHub是一个聊天客户端,使用你自己的API密钥连接云端AI提供商(OpenAI、Google Gemini、Anthropic或任何兼容OpenAI的接口)。它不包含设备端推理引擎。它可以连接到你自己网络上自托管的Ollama或LM Studio服务器,但模型仍然运行在该服务器的硬件上,而不是手机上。',
          },
          {
            q: 'RikkaHub是免费的吗?',
            a: '是的,应用本身可免费下载和使用,评测时未发现任何订阅或应用内购买。唯一的成本是你所连接的AI提供商收取的费用——RikkaHub不收取任何加价或自身费用。',
          },
          {
            q: 'RikkaHub是谁开发的?',
            a: 'RikkaHub主要由GitHub用户名为re-ovo的开发者创建,该开发者贡献了项目历史中绝大多数的提交。仓库目前托管在rikkahub GitHub组织之下,并有额外的贡献者。',
          },
          {
            q: 'RikkaHub是开源的吗?使用什么许可证?',
            a: '是的。RikkaHub的源代码在GitHub上公开,采用GNU Affero General Public License v3.0(AGPL-3.0)许可证。这是一种著佐权(copyleft)许可证:任何修改RikkaHub并将其作为网络服务运行的人,都必须公开其源代码修改,这比部分竞品应用采用的MIT许可证条件更严格。',
          },
          {
            q: '我可以在RikkaHub中使用哪些AI提供商?',
            a: '任何暴露兼容OpenAI、Google或Anthropic接口的提供商或服务——这包括OpenAI、Google Gemini和Anthropic Claude的官方接口、第三方API中转服务,以及Ollama或LM Studio等自托管服务器。',
          },
          {
            q: '我可以在没有互联网连接的情况下使用RikkaHub吗?',
            a: '不能,通常意义上不行。RikkaHub始终需要连接到某个API端点才能生成回复——即使是本地网络上自托管的Ollama或LM Studio服务器,也需要手机与该服务器之间的网络连接。',
          },
          {
            q: 'RikkaHub支持iPhone吗?',
            a: '不支持。RikkaHub在评测时没有官方iOS版本;它是一款纯Android应用。寻找类似多提供商聊天客户端的iPhone用户应评估专门的iOS应用。',
          },
          {
            q: 'RikkaHub可以连接我自己的Ollama服务器吗?',
            a: '可以。RikkaHub的自定义API/URL字段接受任何兼容OpenAI的端点,包括在你本地网络上暴露内置兼容OpenAI接口的自托管Ollama或LM Studio服务器。模型仍然运行在该服务器的硬件上,而不是手机上。',
          },
          {
            q: 'RikkaHub的分支版本使用起来安全吗?',
            a: 'RikkaHub自己的README明确警告存在与官方项目无关的分支版本,并建议用户"谨慎使用分支版本,以避免隐私泄露或过度的权限请求"。本文仅涵盖官方的rikkahub/rikkahub应用,可通过其官方网站、包名为me.rerere.rikkahub的Google Play,以及其自身的GitHub Releases页面获取。',
          },
          {
            q: 'RikkaHub与PocketPal AI或Private LLM相比如何?',
            a: 'RikkaHub是一个没有设备端推理能力的云端/自托管API客户端,而PocketPal AI和Private LLM都会使用基于llama.cpp的引擎,将开放权重模型直接下载并运行在设备上。如果你已经拥有API访问权限或自托管服务器,想要一个精致的Android前端,请选择RikkaHub;如果你明确想要一个下载后无需依赖网络、在设备上运行的模型,请选择PocketPal AI或Private LLM。平台和许可证的详细信息请参见上方的对比表。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '总体评价',
        content:
          'RikkaHub是一款构建精良、积极维护的Android应用,专注于一件特定的事情:提供一个统一而精致的界面,让你与已经付费使用的AI提供商对话,或与你自己运营的服务器对话。它不是,也从未声称自己是一款设备端AI应用——其代码库中不存在任何本地推理引擎,每一次对话都会离开手机、到达别处的某个API端点。以它真实的定位来评价——一个免费、开源、采用AGPL-3.0许可证的多提供商聊天客户端——它对于已经在管理API密钥、或自行搭建了Ollama或LM Studio、希望用一个频繁更新的应用取代多个厂商专属应用的Android用户来说,是一个可靠的选择。但对于明确想要AI完全在自己设备上运行、不涉及任何服务器的用户来说,它并不合适——那种情况下,应该评估PocketPal AI或Private LLM。',
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[GitHub上的RikkaHub](https://github.com/rikkahub/rikkahub) —— 本文引用的源代码、README、许可证(AGPL-3.0)、发布历史以及星标/分支数量。',
          '[RikkaHub GitHub Releases](https://github.com/rikkahub/rikkahub/releases) —— 发布节奏与APK下载。',
          '[RikkaHub的CONTRIBUTING.md](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) —— 引用其中关于项目对拉取请求的明确立场的贡献政策。',
          '[RikkaHub官方网站](https://rikka-ai.com/download) —— 根据项目自身README推荐的下载来源。',
          '[Google Play上的RikkaHub](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) —— Android可用性。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[PocketPal AI评测(2026)](/power-local-llm/pocketpal-ai-review) —— 一款真正在设备上运行GGUF模型的免费开源应用,与RikkaHub形成直接的架构对比。',
          '[Private LLM评测](/power-local-llm/private-llm-review) —— 面向iPhone、iPad和Mac的付费闭源设备端替代方案,拥有140多个模型的目录。',
          '[2026年Android最佳本地LLM应用](/power-local-llm/best-local-llm-apps-android-2026) —— Android设备端应用汇总,适合专门寻找本地推理而非云端客户端的读者。',
          '[2026年iPhone最佳本地LLM应用](/power-local-llm/best-local-llm-apps-iphone-2026) —— iOS版对应内容,适合需要Apple平台设备端方案的读者,因为RikkaHub并不提供此类选项。',
          '[2026年最佳移动LLM模型:Phi-4 Mini对比Gemma 4对比SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) —— 面向选择本地推理而非RikkaHub这类云端客户端用户的模型层面补充文章。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RikkaHub评测(2026):Android多提供商AI聊天客户端',
      description:
        'RikkaHub评测:一款免费开源的Android应用,用你自己的API密钥与云端AI提供商聊天。它真的在本地运行吗?许可证、设置方法与总体评价。',
      url: 'https://promptquorum.com/zh/power-local-llm/rikkahub-review',
      inLanguage: 'zh',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在评估多提供商AI聊天客户端和自托管LLM前端的Android用户' },
      about: [
        { '@type': 'Thing', name: 'RikkaHub' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LM Studio' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/rikkahub-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'RikkaHub评测(2026)', item: 'https://promptquorum.com/zh/power-local-llm/rikkahub-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/rikkahub-review-hero-ko.webp',
    title: 'RikkaHub 리뷰(2026): Android용 멀티 프로바이더 AI 채팅',
    seoTitle: 'RikkaHub 2026 리뷰: 무료 오픈소스 Android 클라이언트',
    intro:
      'RikkaHub는 OpenAI, Google Gemini, Anthropic, 그리고 OpenAI 호환 엔드포인트 등 클라우드 AI 프로바이더와 하나의 화면에서 대화할 수 있는 무료 오픈소스 Android 앱으로, 자신의 API 키를 사용합니다. 스마트폰 자체에서 언어 모델을 실행하지는 않으며, 온디바이스 추론 엔진이 아니라 클라이언트입니다. 다만 동일한 커스텀 엔드포인트 필드를 이용해 자체 네트워크에 셀프 호스팅한 Ollama나 LM Studio 서버에 연결할 수도 있습니다. 이 프로젝트는 주로 개발자 re-ovo가 개발했으며, 현재는 [rikkahub GitHub 조직](https://github.com/rikkahub/rikkahub) 아래에서 관리되고 있습니다. GNU Affero General Public License v3.0(AGPL-3.0) 라이선스를 따르며, 2025년 3월 저장소가 생성된 이후 7,400개 이상의 스타를 모았습니다. 이 리뷰에서는 RikkaHub가 실제로 로컬에서 실행하는 부분과 그렇지 않은 부분, 실제 기능, 가격, 그리고 PocketPal AI나 Private LLM 같은 온디바이스 앱 대신 RikkaHub를 선택해야 할 사람과 그렇지 않은 사람을 정확히 설명합니다.',
    metaDescription:
      'RikkaHub 리뷰: 자신의 API 키로 클라우드 AI 프로바이더와 대화할 수 있는 무료 오픈소스 Android 앱. 로컬에서 실행되나요? 라이선스, 설정 방법, 최종 평가를 정리했습니다.',
    twitterDescription:
      'RikkaHub 2026 리뷰: OpenAI, Gemini, Claude, 셀프 호스팅 API 엔드포인트를 전환할 수 있는 무료 AGPL-3.0 Android 앱. 기기에서 모델을 실행하지는 않습니다 — 실제로 무엇을 하는지 정리했습니다.',
    audience:
      '클라우드 AI 프로바이더의 API 키를 이미 보유했거나, Ollama나 LM Studio를 직접 호스팅하고 모바일 프런트엔드를 찾는 Android 사용자.',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'RikkaHub 리뷰',
    targetKeywords: [
      'rikkahub 리뷰',
      'rikkahub android',
      'rikkahub 로컬 llm',
      'rikkahub vs pocketpal ai',
      'rikkahub 무료인가',
      'rikkahub 라이선스',
      'android ai 채팅 여러 프로바이더',
      'ollama를 android 앱에 연결',
    ],
    current_models_mentioned: ['OpenAI GPT 모델', 'Google Gemini', 'Anthropic Claude'],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**RikkaHub는 스마트폰에서 AI 모델을 실행하지 않습니다 — 자신의 API 키로 클라우드 AI 프로바이더에 연결하는 무료 오픈소스(AGPL-3.0) Android 클라이언트이며, 선택적으로 자체 네트워크에 셀프 호스팅한 Ollama나 LM Studio 서버에도 연결할 수 있습니다.** 주로 개발자 re-ovo가 개발했으며 [GitHub](https://github.com/rikkahub/rikkahub)에서 호스팅됩니다(리뷰 시점 기준 7,400개 이상의 스타). 하나의 커스텀 API/URL/모델 설정 화면을 통해 OpenAI, Google, Anthropic 호환 엔드포인트를 모두 지원합니다. 앱 자체는 완전히 무료이며, 지속적으로 발생하는 비용은 연결한 AI 프로바이더가 청구하는 비용뿐입니다.',
    quickAnswerTop: {
      ko: {
        question: 'RikkaHub는 AI 모델을 로컬에서 실행합니까? 설치할 가치가 있습니까?',
        answer:
          '아닙니다 — RikkaHub에는 온디바이스 추론 엔진이 포함되어 있지 않아 스마트폰에서 직접 언어 모델을 실행할 수 없습니다. 이미 OpenAI, Google Gemini, Anthropic 또는 호환 프로바이더의 API 키를 보유하고 있고 이를 전환할 수 있는 잘 만들어진 Android 앱 하나를 원하거나, Ollama나 LM Studio를 직접 호스팅하고 있으며 그에 대한 모바일 프런트엔드를 원한다면 설치할 가치가 있습니다. 네트워크 통신 없이 기기 자체에서 완전히 실행되는 모델을 원한다면 적합하지 않습니다 — 그런 경우에는 PocketPal AI나 Private LLM을 사용해야 합니다.',
        bullets: [
          'AGPL-3.0 라이선스 아래 무료이자 오픈소스입니다. 소스 코드는 [GitHub](https://github.com/rikkahub/rikkahub)에 공개되어 있습니다.',
          '온디바이스 런타임이 아니라 멀티 프로바이더 클라이언트입니다 — OpenAI, Google Gemini, Anthropic 또는 OpenAI 호환 서비스의 자체 API 키를 직접 가져와야 합니다.',
          '커스텀 API/URL 필드를 통해 자체 네트워크에 셀프 호스팅한 Ollama나 LM Studio 서버에 연결할 수 있지만, 모델은 여전히 그 서버에서 실행되며 스마트폰에서는 실행되지 않습니다.',
          'Android 전용이며 iOS 버전은 없습니다. [공식 웹사이트](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub), 그리고 [GitHub Releases](https://github.com/rikkahub/rikkahub/releases)에서 APK를 직접 다운로드할 수 있습니다.',
          '주로 한 명의 개발자(GitHub: [re-ovo](https://github.com/re-ovo))가 만들었으며, 현재는 rikkahub 조직 아래에서 관리되고 있습니다. 리뷰 시점 기준 7,400개 이상의 스타와 거의 매일 이루어지는 포인트 릴리스가 있습니다.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'RikkaHub란 무엇입니까?', anchor: 'what-is-rikkahub' },
      { label: 'RikkaHub는 AI 모델을 로컬에서 실행합니까?', anchor: 'does-rikkahub-run-models-locally' },
      { label: 'RikkaHub는 누가 만들었습니까?', anchor: 'history-and-developer' },
      { label: 'RikkaHub 시작하는 방법', anchor: 'getting-started' },
      { label: 'RikkaHub가 지원하는 프로바이더는 무엇입니까?', anchor: 'providers-supported' },
      { label: 'RikkaHub는 iPhone에서 사용할 수 있습니까?', anchor: 'platform-availability' },
      { label: 'RikkaHub의 가격은 얼마입니까?', anchor: 'pricing' },
      { label: 'RikkaHub는 어떤 기능을 제공합니까?', anchor: 'key-features' },
      { label: 'RikkaHub에 적합한 사용자', anchor: 'who-should-use' },
      { label: 'RikkaHub에 적합하지 않은 사용자', anchor: 'who-should-not-use' },
      { label: 'RikkaHub 포크에 관한 주의사항', anchor: 'fork-warning' },
      { label: 'RikkaHub와 대안 비교', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '최종 평가', anchor: 'verdict' },
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
            text: 'RikkaHub는 자신의 API 키로 OpenAI, Google Gemini, Anthropic 및 기타 OpenAI 호환 AI 프로바이더와 대화할 수 있는 무료 오픈소스(AGPL-3.0) Android 앱이며, 기기 자체에서 모델을 실행하지는 않습니다.',
          },
          {
            type: 'plain-terms',
            text: '이미 비용을 지불하고 있는 AI 모델이나 직접 운영하는 서버를 위한 리모컨과 같은 것이며, 모델을 스마트폰에 직접 탑재하는 앱이 아닙니다. 네트워크 통신 없이 기기에서 완전히 실행되는 추론을 원한다면 이 앱은 그런 용도가 아닙니다 — 대신 PocketPal AI나 Private LLM을 확인해 보십시오.',
          },
        ],
        items: [
          '무료이자 오픈소스(AGPL-3.0)이며, 소스 코드와 이슈 트래커는 [GitHub](https://github.com/rikkahub/rikkahub)에 공개되어 있습니다.',
          '온디바이스 추론 엔진이 아니라 멀티 프로바이더 채팅 클라이언트입니다 — 코드베이스에 llama.cpp, MLC, LiteRT-LM 구성 요소가 전혀 없습니다.',
          'OpenAI, Google Gemini, Anthropic 또는 OpenAI 호환 프로바이더의 자체 API 키가 필요합니다. 커스텀 URL을 통해 셀프 호스팅한 Ollama나 LM Studio 서버를 지정할 수도 있습니다.',
          '주로 re-ovo가 개발했으며, 현재는 rikkahub GitHub 조직 아래에서 관리되고 있습니다. 리뷰 시점 기준 7,400개 이상의 스타와 640개 이상의 포크가 있습니다.',
          'Android 전용입니다 — [공식 웹사이트](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub), [GitHub Releases](https://github.com/rikkahub/rikkahub/releases)의 APK 다운로드를 통해 이용할 수 있습니다.',
          '앱 자체는 무료이며, 리뷰 시점 기준 인앱 결제는 발견되지 않았습니다. 지속적인 비용은 전적으로 연결한 AI 프로바이더에 달려 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 공개된 [GitHub 저장소](https://github.com/rikkahub/rikkahub)(소스 코드, README, 릴리스, GitHub API 메타데이터), 프로젝트 웹사이트, Google Play 목록을 바탕으로 2026년 9월에 확인한 내용입니다. PromptQuorum은 이 리뷰를 위해 RikkaHub에 대한 독자적인 실기 벤치마크를 수행하지 않았습니다 — 아래의 로컬 대 클라우드 아키텍처에 관한 서술은 공개된 소스 코드와 문서를 검토한 결과이며, 블랙박스 테스트에 근거한 것이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-rikkahub',
        title: 'RikkaHub란 무엇입니까?',
        content: [
          '**RikkaHub는 사용자가 직접 제공하는 API 키를 사용해 하나의 화면에서 여러 AI 프로바이더를 전환할 수 있는 네이티브 Android 채팅 앱입니다.** OpenAI용, Google Gemini용, Anthropic Claude용처럼 프로바이더마다 별도의 앱을 설치하는 대신, RikkaHub는 설정 가능한 "프로바이더" 목록을 갖춘 단일 채팅 화면을 제공하며, 각 항목은 기본 URL, API 키, 모델 이름을 지정합니다.',
          '이 앱은 자체 [기술 스택 문서](https://github.com/rikkahub/rikkahub/blob/master/README.md)에 따르면 Kotlin과 Jetpack Compose로 네이티브 개발되었으며, OpenAI·Google·Anthropic API 형식을 사용하는 모든 엔드포인트를 지원합니다 — 실제로는 공식 프로바이더 자체는 물론, 여러 프로바이더의 모델 접근 권한을 재판매하는 서드파티 API 릴레이/프록시 서비스, 그리고 Ollama나 LM Studio 같은 셀프 호스팅 OpenAI 호환 서버까지 포함됩니다.',
        ],
        note: 'RikkaHub는 채팅 클라이언트이며 모델을 호스팅하는 앱이 아닙니다. 언어 모델 자체는 항상 RikkaHub 프로세스가 아닌 다른 곳에서 실행됩니다 — 프로바이더의 클라우드 서버에서, 또는 셀프 호스팅 엔드포인트를 지정한 경우 사용자가 직접 제어하는 컴퓨터에서 실행됩니다.',
      },
      localVsCloud: {
        id: 'does-rikkahub-run-models-locally',
        title: 'RikkaHub는 AI 모델을 로컬에서 실행합니까?',
        content: [
          '**아닙니다. RikkaHub에는 온디바이스 추론 엔진이 포함되어 있지 않으며, 스마트폰의 CPU, GPU, NPU에서 언어 모델을 직접 실행할 수 없습니다.** 이는 클라이언트입니다: 프로바이더에 대한 API 키와 엔드포인트를 설정하면, RikkaHub는 네트워크를 통해 해당 엔드포인트로 메시지를 보내고 돌아온 응답을 표시합니다.',
          '이는 [PocketPal AI](/power-local-llm/pocketpal-ai-review)나 [Private LLM](/power-local-llm/private-llm-review) 같은 모바일 앱과의 중요한 차이입니다. 이 앱들은 추론 엔진(llama.cpp 또는 유사한 런타임)을 내장하고 있으며, 다운로드한 모델 파일을 기기 자체의 RAM과 GPU/NPU를 사용해 직접 실행하므로, 모델을 다운로드한 뒤에는 네트워크 연결이 필요하지 않습니다. RikkaHub 자체 [README](https://github.com/rikkahub/rikkahub)는 이 앱을 단순히 "an Android APP that supports for multiple LLM providers"라고 설명하고 있으며, 기능 목록 어디에도 "로컬"이라는 단어는 등장하지 않습니다. 또한 공개된 전체 소스 코드 트리(2026년 9월 기준 1,900개 이상의 파일)를 검색해도 llama.cpp, MLC, LiteRT, LiteRT-LM 구성 요소는 코드 어디에도 존재하지 않습니다.',
          'RikkaHub가 "로컬 AI"에 가장 가까워지는 경우는 커스텀 API/URL 필드를 공개 클라우드 엔드포인트가 아니라 자체 네트워크의 서버로 지정할 때입니다 — 예를 들어 같은 집 안의 PC에서 실행되며 OpenAI 호환 API를 노출하는 [Ollama](https://ollama.com)나 [LM Studio](https://lmstudio.ai)가 그렇습니다. 이 구성에서도 모델은 여전히 스마트폰이 아니라 PC의 하드웨어에서 실행됩니다. RikkaHub는 사용자가 직접 제어하는 서버를 위한 모바일 프런트엔드 역할을 하며, 이는 대화 데이터를 서드파티 클라우드 인프라 밖에 유지해 주지만, 모델을 기기 자체에서 실행하는 앱과는 구성 면에서도, 그리고 개인정보 보호와 하드웨어 측면에서도 본질적으로 다른 방식입니다.',
        ],
        decisionBlock: {
          title: 'RikkaHub인가, 온디바이스 앱인가?',
          localIf: [
            '모델을 다운로드한 뒤 네트워크 통신이 전혀 없이 스마트폰 자체에서 추론이 이루어지길 원한다면 — 대신 [PocketPal AI](/power-local-llm/pocketpal-ai-review)나 [Private LLM](/power-local-llm/private-llm-review)을 사용하십시오.',
            '같은 Wi-Fi에 있는 기기로의 연결조차 포함해 어떤 네트워크 경로도 없이 작동하는 앱이 필요하다면 — RikkaHub는 로컬 엔드포인트라 하더라도 항상 API 엔드포인트에 도달해야 합니다.',
          ],
          cloudIf: [
            'OpenAI, Google Gemini, Anthropic Claude에 대한 API 접근 권한이 이미 있고, 프로바이더별로 별도 앱을 오가지 않고 하나의 Android 앱으로 전환하고 싶은 경우.',
            '홈 서버나 PC에서 Ollama나 LM Studio를 직접 호스팅하고 있고, 자체 네트워크에서 이를 위한 잘 만들어진 모바일 채팅 인터페이스를 원하는 경우.',
          ],
          quick: [
            '온디바이스 추론, 네트워크가 전혀 필요 없음: PocketPal AI 또는 Private LLM.',
            '여러 클라우드 프로바이더에 자신의 키로 연결하는 클라이언트: RikkaHub.',
            '직접 셀프 호스팅한 Ollama/LM Studio 서버를 위한 모바일 프런트엔드: 서버의 로컬 네트워크 주소를 지정한 RikkaHub.',
          ],
        },
      },
      history: {
        id: 'history-and-developer',
        title: 'RikkaHub는 누가 만들었습니까?',
        content: [
          '**RikkaHub는 주로 GitHub 사용자명 [re-ovo](https://github.com/re-ovo)를 사용하는 개발자가 만들었으며, 이 개발자가 프로젝트 역사에서 대부분의 커밋을 차지하고 있습니다. 저장소는 현재 개인 계정이 아니라 [rikkahub GitHub 조직](https://github.com/rikkahub) 아래에서 호스팅되고 있습니다.** 저장소 자체는 2025년 3월 11일에 생성되었으며, 주 관리자 외에 소수의 추가 개발자들의 기여를 받으며 활발히 관리되는 프로젝트로 성장했습니다.',
          'RikkaHub는 자체 [기여 가이드라인](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md)에서 "명확한 방침을 가진" 프로젝트임을 분명히 밝히고 있습니다: 새로운 언어를 추가하거나, 새로운 기능을 추가하거나, 대규모 AI 생성 리팩터링을 포함하는 풀 리퀘스트는 그대로 거부됩니다. 프로젝트는 커뮤니티 후원을 받아들이고 있으며 — README에는 API 릴레이 서비스인 [aihubmix.com](https://aihubmix.com)을 비롯한 유료 후원사가 나열되어 있습니다 — [Patreon](https://patreon.com/rikkahub)과 중국 플랫폼 爱发电(afdian.com)을 통한 자발적 후원도 받고 있습니다.',
        ],
        items: [
          '주 개발자: GitHub 사용자 [re-ovo](https://github.com/re-ovo)로, 프로젝트 역사에서 대부분의 커밋을 차지하고 있습니다.',
          '저장소는 2025년 3월 11일에 생성되었으며, 현재는 개인 계정이 아니라 [rikkahub 조직](https://github.com/rikkahub) 아래에서 호스팅되고 있습니다.',
          '라이선스: GNU Affero General Public License v3.0(AGPL-3.0) — 일부 경쟁 앱이 사용하는 MIT 라이선스보다 더 엄격한 카피레프트 라이선스로, 수정 버전을 네트워크 서비스로 운영하는 사람은 소스 코드 변경 사항을 공개해야 합니다.',
          '리뷰 시점 기준 GitHub 스타 7,400개 이상, 포크 640개 이상이며, 활발한 이슈 트래커(280개 이상의 열린 이슈)와 거의 매일 이루어지는 포인트 릴리스가 있습니다.',
          '자체 기여 가이드라인에 따라 새로운 언어, 새로운 기능, 대규모 AI 생성 리팩터링에 대한 풀 리퀘스트를 명확히 거부합니다 — 이는 폭넓은 커뮤니티 기능 기여를 지향하지 않는, 의도적으로 명확한 방침을 가진 프로젝트입니다.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'RikkaHub 시작하는 방법',
        content: [
          '**RikkaHub를 작동시키려면 프로바이더의 기존 API 키가 필요합니다 — 이 앱에는 무료나 번들로 제공되는 AI 접근 권한이 포함되어 있지 않습니다.** 이 과정에는 기기에 다운로드할 모델이 전혀 없으며, 이미 보유한 계정이나 이미 운영 중인 서버에 앱을 연결하는 것뿐입니다.',
        ],
        numberedItems: [
          {
            title: '앱 설치하기',
            whyItMatters: '[공식 웹사이트](https://rikka-ai.com/download)(프로젝트에서 권장)나 [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub)에서 RikkaHub를 다운로드하십시오. 기술에 익숙한 사용자는 [GitHub Releases](https://github.com/rikkahub/rikkahub/releases)에서 APK를 직접 사이드로드할 수도 있습니다.',
          },
          {
            title: '프로바이더 추가하기',
            whyItMatters: '프로바이더 설정을 열고 새 항목을 추가합니다: API 형식(OpenAI, Google, Anthropic 호환 중 선택)을 고른 다음, 기본 URL, API 키, 사용하려는 모델 이름을 입력합니다. 여기에 클라우드 프로바이더 정보, API 릴레이 서비스 정보, 또는 직접 셀프 호스팅한 서버의 로컬 네트워크 주소를 입력하게 됩니다.',
          },
          {
            title: '모델 선택 후 대화 시작하기',
            whyItMatters: '프로바이더가 설정되면 모델 선택기에서 이를 선택하고 대화를 시작합니다. 모든 메시지는 설정한 엔드포인트로 전송됩니다 — 앱 자체의 설정 화면을 벗어나면 오프라인 모드는 존재하지 않습니다.',
          },
          {
            title: '선택 사항: 도구 및 검색 연결하기',
            whyItMatters: 'MCP(Model Context Protocol) 서버를 추가하거나, Exa, Tavily, Brave 같은 웹 검색 프로바이더의 자체 API 키를 입력하여 대화 중 연결된 모델이 할 수 있는 일을 확장할 수 있습니다. 둘 다 선택 사항이며 직접 제공하는 인증 정보가 필요합니다.',
          },
        ],
      },
      providersSupported: {
        id: 'providers-supported',
        title: 'RikkaHub가 지원하는 프로바이더는 무엇입니까?',
        itemHeadings: true,
        columns: ['프로바이더 유형', '예시', '필요한 것'],
        rows: [
          {
            '프로바이더 유형': 'OpenAI 호환 API',
            '예시': 'OpenAI 자체 API, 그리고 동일한 요청 형식을 제공하는 모든 서드파티 서비스',
            '필요한 것': 'API 키와 프로바이더의 기본 URL',
          },
          {
            '프로바이더 유형': 'Google 호환 API',
            '예시': 'Google Gemini 모델',
            '필요한 것': 'Google AI API 키',
          },
          {
            '프로바이더 유형': 'Anthropic 호환 API',
            '예시': 'Anthropic Claude 모델',
            '필요한 것': 'Anthropic API 키',
          },
          {
            '프로바이더 유형': 'API 릴레이/프록시 서비스',
            '예시': '프로젝트 후원사인 [aihubmix.com](https://aihubmix.com)처럼, 하나의 키 뒤에서 여러 프로바이더의 모델 접근 권한을 재판매하는 서드파티 서비스',
            '필요한 것': '직접 프로바이더와 동일한 방식으로 입력하는, 해당 릴레이 서비스 고유의 API 키와 기본 URL',
          },
          {
            '프로바이더 유형': '셀프 호스팅 로컬 서버',
            '예시': '내장된 OpenAI 호환 엔드포인트를 통해 자체 PC나 홈 서버에서 실행되는 Ollama나 LM Studio',
            '필요한 것': '서버의 로컬 네트워크 주소(예: http://192.168.1.50:11434/v1) — 클라우드 API 키는 필요 없지만, 모델은 스마트폰이 아니라 그 기기에서 실행됩니다',
          },
        ],
        note: 'RikkaHub 자체는 어떤 프로바이더에 대한 접근 권한도 번들로 제공하거나 재판매하지 않습니다. 클라우드든 셀프 호스팅이든 모든 연결은 사용자가 직접 제공하는 인증 정보나 네트워크 주소로 설정됩니다.',
      },
      platform: {
        id: 'platform-availability',
        title: 'RikkaHub는 iPhone에서 사용할 수 있습니까?',
        itemHeadings: true,
        columns: ['플랫폼', '이용 가능 여부', '비고'],
        rows: [
          {
            '플랫폼': 'Android',
            '이용 가능 여부': '[공식 웹사이트](https://rikka-ai.com/download), [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub), 그리고 [GitHub Releases](https://github.com/rikkahub/rikkahub/releases)의 APK 직접 다운로드로 이용 가능',
            '비고': '네이티브 앱입니다. 이 리뷰는 이 버전을 다룹니다.',
          },
          {
            '플랫폼': 'iPhone / iPad',
            '이용 가능 여부': '리뷰 시점 기준 네이티브 iOS 앱을 찾을 수 없었습니다',
            '비고': '유사한 멀티 프로바이더 클라이언트를 찾는 iPhone 사용자는 대신 전용 iOS 앱을 고려해야 합니다. RikkaHub는 현재 iOS 버전을 출시하지 않고 있습니다.',
          },
          {
            '플랫폼': '웹 / 브라우저',
            '이용 가능 여부': '프로젝트의 소스 코드 저장소에 함께 제공되는 웹 UI가 존재합니다',
            '비고': '호스팅된 공개 서비스라기보다는 Android 앱의 브라우저 버전으로 의도된 것입니다 — 사용하려면 소스 코드에서 직접 설정해야 합니다.',
          },
          {
            '플랫폼': '데스크톱(Windows/macOS/Linux)',
            '이용 가능 여부': 'rikkahub-desktop이라는 별도의 커뮤니티 프로젝트가 존재하지만, 공식 rikkahub/rikkahub 저장소의 일부는 아닙니다',
            '비고': '동일한 핵심 팀이 관리하지 않습니다. 공식 릴리스가 아니라 서드파티 포크로 취급해야 합니다.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'RikkaHub의 가격은 얼마입니까?',
        content: [
          '**RikkaHub 자체는 다운로드와 사용이 무료이며, 리뷰 시점 기준 앱이나 관련 문서에서 구독이나 인앱 결제는 발견되지 않았습니다.** 프로젝트는 [Patreon](https://patreon.com/rikkahub)과 爱发电(afdian.com)을 통한 자발적 후원을 받아들이며, README에 유료 후원사를 나열하고 있지만, 둘 다 앱을 사용하는 데 필수는 아닙니다.',
          'RikkaHub를 사용하는 데 드는 실제 비용은 연결한 AI 프로바이더가 청구하는 비용입니다 — OpenAI, Google Gemini, Anthropic은 모두 API 사용량을 토큰 단위로 청구하며, 셀프 호스팅한 Ollama나 LM Studio 서버는 메시지당 요금이 없지만 이미 보유했거나 별도로 비용을 지불해야 하는 하드웨어가 필요합니다. RikkaHub는 어떤 프로바이더의 API 비용에도 가산금을 붙이거나, 측정하거나, 일부를 가져가지 않습니다. 단지 사용자가 제공한 키를 사용해 요청을 전달할 뿐입니다.',
        ],
        items: [
          '**앱 자체:** 무료, 오픈소스(AGPL-3.0), 구독 없음.',
          '**클라우드 프로바이더 사용:** 프로바이더(OpenAI, Google, Anthropic 또는 릴레이 서비스)가 자체 가격 정책에 따라 직접 청구합니다 — RikkaHub는 가산금을 붙이지 않습니다.',
          '**셀프 호스팅 서버 사용:** 메시지당 요금은 없지만, Ollama나 LM Studio를 실행할 수 있는 PC나 서버가 필요하며, 이는 RikkaHub 자체와는 별개의 하드웨어 비용입니다.',
          '**선택적 후원:** Patreon이나 爱发电을 통해 이루어지며, 전적으로 자발적이고 앱 기능과는 무관합니다.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'RikkaHub는 어떤 기능을 제공합니까?',
        content: [
          '**기본적인 멀티 프로바이더 채팅 외에도, 자체 [README](https://github.com/rikkahub/rikkahub/blob/master/README.md)에 따르면 RikkaHub는 활발히 개발되고 명확한 방침을 가진 채팅 클라이언트에 걸맞은 폭넓은 기능을 축적해 왔습니다.** 여기에는 다음이 포함됩니다:',
        ],
        items: [
          '**Material You 디자인과 다크 모드.** 인터페이스는 Android의 동적 테마 시스템을 따릅니다.',
          '**Workspace.** 앱에 내장된 proot 기반 Linux 에이전트 환경 — AI 에이전트가 명령을 실행하는 데 사용할 수 있는 샌드박스화된 Linux 셸로, 언어 모델 추론과는 별개입니다.',
          '**MCP(Model Context Protocol) 지원.** 연결된 모델은 대화 중 MCP 서버가 제공하는 도구를 호출할 수 있습니다.',
          '**멀티모달 입력.** 이미지, PDF, Word 문서를 채팅 첨부 파일로 받아들입니다(지원 여부는 연결된 모델 자체의 기능에 따라 다릅니다).',
          '**메시지 분기.** 선형 기록뿐 아니라 대화의 같은 지점에서 다른 응답을 탐색할 수 있게 해줍니다.',
          '**검색 통합.** Exa, Tavily, Zhipu, LinkUp, Brave, Perplexity 등의 프로바이더에 대해 자체 API 키를 사용하는 선택적 웹 검색 기능.',
          '**Markdown 렌더링.** 응답에서 코드 구문 강조, LaTeX 수식, 표, Mermaid 다이어그램 렌더링을 지원합니다.',
          '**QR 코드 가져오기/내보내기.** 프로바이더 설정(API 키 포함)은 QR 코드를 통해 기기 간에 공유할 수 있습니다 — 인증 정보가 포함되어 있으므로 비밀번호를 공유하는 것처럼 취급해야 합니다.',
          '**SillyTavern 캐릭터 카드 가져오기.** 다른 채팅 프런트엔드에서도 사용하는 일반적인 롤플레이 페르소나 파일 형식과 호환됩니다.',
          '**커스텀 HTTP 헤더 및 요청 본문.** 고급 사용자는 프로바이더에 전송되는 원시 요청을 수정할 수 있으며, 이는 인증 방식이나 매개변수가 표준적이지 않은 프로바이더에 유용합니다.',
        ],
        note: '프로젝트가 거의 매일 포인트 릴리스를 출시하므로 기능 제공 여부는 앱 버전에 따라 다를 수 있습니다. 설치한 버전에서 무엇이 이미 제공되는지는 [GitHub 릴리스 페이지](https://github.com/rikkahub/rikkahub/releases)에서 확인하십시오.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'RikkaHub에 적합한 사용자',
        items: [
          '**이미 클라우드 AI API에 비용을 지불하고 있으며 이를 하나의 Android 앱으로 통합하고 싶은 사용자.** OpenAI, Google Gemini, Anthropic Claude의 API 키를 보유하고 있고 프로바이더별 별도 앱을 오가는 데 지쳤다면, RikkaHub의 단일 인터페이스가 바로 적합합니다.',
          '**Ollama나 LM Studio를 직접 호스팅하며 이를 위한 모바일 클라이언트를 원하는 사용자.** RikkaHub의 커스텀 API/URL 필드는 자체 홈 네트워크에서 실행되는 서버를 포함해 어떤 OpenAI 호환 서버와도 작동합니다.',
          '**자신의 API 키를 직접 관리하는 데 익숙한 개발자와 기술적으로 호기심 많은 사용자.** 번들로 제공되는 AI 접근 권한은 없으며, 모든 기능마다 직접 인증 정보를 제공해야 합니다. 이는 API 청구 방식을 이미 이해하는 사용자에게 적합합니다.',
          '**활발히 관리되며 자주 업데이트되는 앱을 원하는 사용자.** 프로젝트는 거의 매일 포인트 릴리스를 출시하며, 유사한 Android 채팅 클라이언트에 비해 크고 활발한 기여자 기반을 갖추고 있습니다.',
          '**클라우드 모델 위에 도구 호출 및 에이전트 기능을 원하는 사용자.** MCP 지원과 Workspace 샌드박스는 연결된 모델이 단순한 텍스트 채팅을 넘어 할 수 있는 일을 확장하며, 이러한 고급 기능을 설정하는 데 익숙한 사용자에게 적합합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'RikkaHub에 적합하지 않은 사용자',
        items: [
          '**네트워크 연결 없이 AI가 기기에서 완전히 실행되기를 원하는 사용자.** RikkaHub는 로컬이든 클라우드든 항상 API 엔드포인트에 도달해야 합니다. 진정한 오프라인 앱을 원하는 사용자는 대신 [PocketPal AI](/power-local-llm/pocketpal-ai-review)나 [Private LLM](/power-local-llm/private-llm-review)을 사용해야 합니다.',
          '**아직 API 키가 없고 이를 관리하고 싶지 않은 사용자.** RikkaHub에는 무료나 번들로 제공되는 AI 접근 권한이 없습니다 — 어떤 설정이나 계정 없이 앱을 열고 바로 대화하고 싶은 사용자는 내장 모델을 갖춘 큐레이션된 앱을 대신 찾아야 합니다.',
          '**iPhone이나 iPad 사용자.** RikkaHub는 리뷰 시점 기준 공식 iOS 버전이 없습니다. Apple 사용자는 Private LLM이나 Enclave AI 같은 전용 iOS 앱을 고려해야 합니다.',
          '**가능한 한 낮은 기술적 설정 부담을 원하는 사용자.** 프로바이더를 추가하려면 API 형식, 기본 URL, 키, 모델 이름을 정확히 입력해야 합니다 — 온디바이스 앱처럼 한 번의 탭으로 "다운로드하고 바로 채팅"하는 흐름은 없습니다.',
          '**소스 코드를 공개하지 않고 수정 및 재배포되는 것을 특히 우려하는 사용자.** AGPL-3.0 라이선스는 투명성 측면에서 강점이지만, 동시에 RikkaHub를 포크해 수정 버전을 네트워크 서비스로 운영하는 사람은 법적으로 그 변경 사항을 공개해야 한다는 의미이기도 합니다. 계획 중인 배포에 영향이 있다면 라이선스 원문을 직접 확인하십시오.',
        ],
      },
      forkWarning: {
        id: 'fork-warning',
        title: 'RikkaHub 포크에 관한 주의사항',
        content: [
          '**RikkaHub 자체 README는 "RikkaHub에는 많은 포크 버전이 존재하며" 포크와 관련된 문제는 공식 프로젝트와 무관하다고 명확히 경고하고 있습니다.** 프로젝트는 사용자에게 "개인정보 유출이나 과도한 권한 요청을 피하기 위해 포크를 신중하게 사용할 것"을 요청합니다 — 이는 여기서도 반복할 가치가 있는 주의사항입니다. 포크된 앱은 원래 개발자의 검토나 승인 없이 공식 버전과 다른 권한을 요청하거나 데이터를 다르게 전송할 수 있기 때문입니다.',
          'API 키가 프로바이더 설정을 위해 앱에 직접 입력되는 구조상, 비공식 포크를 설치한다는 것은 그 포크의 코드에 해당 인증 정보를 맡긴다는 의미입니다. 이 리뷰는 공식 [rikkahub/rikkahub](https://github.com/rikkahub/rikkahub) 프로젝트만을 다루며, 이는 [공식 웹사이트](https://rikka-ai.com/download), 패키지명 `me.rerere.rikkahub`의 [Google Play](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) 목록, 그리고 자체 GitHub Releases 페이지를 통해 배포됩니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'RikkaHub와 대안 비교',
        itemHeadings: true,
        columns: ['앱', '라이선스 / 비용', '플랫폼', '로컬 실행 여부'],
        rows: [
          {
            '앱': 'RikkaHub',
            '라이선스 / 비용': '무료, 오픈소스(AGPL-3.0)',
            '플랫폼': 'Android',
            '로컬 실행 여부': '아니오 — 클라우드/셀프 호스팅 API 클라이언트 전용이며, 자체 키나 서버가 필요합니다',
          },
          {
            '앱': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            '라이선스 / 비용': '무료, 오픈소스(MIT)',
            '플랫폼': 'iPhone/iPad, Android',
            '로컬 실행 여부': '예 — GGUF 모델을 다운로드해 llama.cpp를 통해 기기에서 실행',
          },
          {
            '앱': '[Private LLM](/power-local-llm/private-llm-review)',
            '라이선스 / 비용': '유료, 1회 구매; 클로즈드 소스',
            '플랫폼': 'iPhone/iPad/Mac(Apple 전용)',
            '로컬 실행 여부': '예 — OmniQuant 및 GPTQ 양자화를 적용한 140개 이상의 온디바이스 모델',
          },
          {
            '앱': 'LLM Farm',
            '라이선스 / 비용': '무료, 오픈소스; 리뷰 시점 기준 App Store에서 삭제됨',
            '플랫폼': 'iPhone/iPad, Mac(소스에서 직접 빌드)',
            '로컬 실행 여부': '예 — [GitHub 소스](https://github.com/guinmoon/LLMFarm)에서 빌드하는 경우 llama.cpp 기반 온디바이스 추론',
          },
          {
            '앱': 'Layla',
            '라이선스 / 비용': '프리미엄; 클로즈드 소스',
            '플랫폼': 'Android',
            '로컬 실행 여부': '예 — GGUF, LiteRT-LM, PTE 모델 형식을 기기에서 실행; 현재 요금제 제공 여부는 [layla-network.ai](https://www.layla-network.ai)에서 확인하십시오',
          },
          {
            '앱': 'Maid',
            '라이선스 / 비용': '무료, 오픈소스',
            '플랫폼': 'Android, Windows, macOS, Linux',
            '로컬 실행 여부': 'GGUF/llama.cpp 모델은 예; [GitHub 저장소](https://github.com/Mobile-Artificial-Intelligence/maid)에 따르면 Ollama나 클라우드 프로바이더에 원격으로도 연결할 수 있습니다',
          },
          {
            '앱': 'AnythingLLM Mobile',
            '라이선스 / 비용': '무료; 핵심 프로젝트는 오픈소스',
            '플랫폼': 'Android(iOS 계획 중)',
            '로컬 실행 여부': '[GitHub 저장소](https://github.com/Mintplex-Labs/anythingllm-mobile)에 따르면 채팅 기록과 문서 RAG에 대해 온디바이스/로컬 우선으로 자리매김; 클라우드 모델에도 연결 가능',
          },
          {
            '앱': 'Open WebUI',
            '라이선스 / 비용': '무료, 오픈소스',
            '플랫폼': '셀프 호스팅 웹 앱(브라우저가 있는 모든 기기)',
            '로컬 실행 여부': '아니오 — RikkaHub와 마찬가지로 Ollama나 다른 OpenAI 호환 엔드포인트를 지정하는 프런트엔드입니다. [GitHub 저장소](https://github.com/open-webui/open-webui)에 따르면 네이티브 모바일 앱보다는 데스크톱/셀프 호스팅을 대상으로 하지만, RikkaHub와 아키텍처상 가장 가까운 비교 대상입니다',
          },
        ],
        note: 'RikkaHub와 Open WebUI는 이 표에서 기기에서 모델을 실행하지 않는 유일한 두 항목입니다 — 둘 다 클라우드 API나 이미 운영 중인 셀프 호스팅 서버를 위한 프런트엔드입니다. 나열된 다른 앱들은 온디바이스 추론 엔진을 내장하고 있으며, 이는 선택하기 전에 이해해야 할 핵심적인 아키텍처 차이입니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'RikkaHub는 제 스마트폰에서 AI 모델을 로컬로 실행합니까?',
            a: '아닙니다. RikkaHub는 자체 API 키를 사용해 클라우드 AI 프로바이더(OpenAI, Google Gemini, Anthropic 또는 OpenAI 호환 API)에 연결하는 채팅 클라이언트입니다. 온디바이스 추론 엔진은 포함되어 있지 않습니다. 자체 네트워크에 셀프 호스팅한 Ollama나 LM Studio 서버에 연결할 수는 있지만, 모델은 여전히 그 서버의 하드웨어에서 실행되며 스마트폰에서는 실행되지 않습니다.',
          },
          {
            q: 'RikkaHub는 무료입니까?',
            a: '네, 앱 자체는 다운로드와 사용이 무료이며, 리뷰 시점 기준 구독이나 인앱 결제는 발견되지 않았습니다. 유일한 비용은 연결한 AI 프로바이더가 청구하는 비용이며, RikkaHub 자체는 가산금이나 수수료를 부과하지 않습니다.',
          },
          {
            q: 'RikkaHub는 누가 개발했습니까?',
            a: 'RikkaHub는 주로 GitHub 사용자명 re-ovo를 사용하는 개발자가 만들었으며, 이 개발자가 프로젝트 역사에서 대부분의 커밋을 차지하고 있습니다. 저장소는 현재 rikkahub GitHub 조직 아래에서 호스팅되며 추가 기여자들이 있습니다.',
          },
          {
            q: 'RikkaHub는 오픈소스입니까? 어떤 라이선스를 사용합니까?',
            a: '네. RikkaHub의 소스 코드는 GitHub에서 GNU Affero General Public License v3.0(AGPL-3.0) 아래 공개되어 있습니다. 이는 카피레프트 라이선스로, RikkaHub를 수정해 네트워크 서비스로 운영하는 사람은 소스 코드 변경 사항을 공개해야 하며, 이는 일부 경쟁 앱이 사용하는 MIT 라이선스보다 더 엄격한 조건입니다.',
          },
          {
            q: 'RikkaHub에서 어떤 AI 프로바이더를 사용할 수 있습니까?',
            a: 'OpenAI, Google, Anthropic 호환 API를 제공하는 모든 프로바이더나 서비스를 사용할 수 있습니다 — 여기에는 OpenAI, Google Gemini, Anthropic Claude의 공식 API, 서드파티 API 릴레이 서비스, 그리고 Ollama나 LM Studio 같은 셀프 호스팅 서버가 포함됩니다.',
          },
          {
            q: '인터넷 연결 없이 RikkaHub를 사용할 수 있습니까?',
            a: '아닙니다. 일반적인 의미에서는 사용할 수 없습니다. RikkaHub는 응답을 생성하기 위해 항상 API 엔드포인트에 도달해야 합니다 — 로컬 네트워크에 셀프 호스팅한 Ollama나 LM Studio 서버라 하더라도 스마트폰과 그 서버 간의 네트워크 연결이 필요합니다.',
          },
          {
            q: 'RikkaHub는 iPhone에서 사용할 수 있습니까?',
            a: '아닙니다. RikkaHub는 리뷰 시점 기준 공식 iOS 버전이 없으며, Android 전용 앱입니다. 유사한 멀티 프로바이더 채팅 클라이언트를 찾는 iPhone 사용자는 전용 iOS 앱을 평가해야 합니다.',
          },
          {
            q: 'RikkaHub는 제 Ollama 서버에 연결할 수 있습니까?',
            a: '네. RikkaHub의 커스텀 API/URL 필드는 로컬 네트워크에서 내장된 OpenAI 호환 API를 제공하는 셀프 호스팅 Ollama나 LM Studio 서버를 포함해 어떤 OpenAI 호환 엔드포인트도 받아들입니다. 모델은 여전히 그 서버의 하드웨어에서 실행되며 스마트폰에서는 실행되지 않습니다.',
          },
          {
            q: 'RikkaHub의 포크 버전은 안전하게 사용할 수 있습니까?',
            a: 'RikkaHub 자체 README는 공식 프로젝트와 무관한 포크 버전이 존재한다고 명확히 경고하며, 사용자에게 "개인정보 유출이나 과도한 권한 요청을 피하기 위해 포크를 신중하게 사용할 것"을 권고합니다. 이 리뷰는 공식 웹사이트, 패키지명 me.rerere.rikkahub의 Google Play, 그리고 자체 GitHub Releases 페이지를 통해 배포되는 공식 rikkahub/rikkahub 앱만을 다룹니다.',
          },
          {
            q: 'RikkaHub는 PocketPal AI나 Private LLM과 비교해 어떻습니까?',
            a: 'RikkaHub는 온디바이스 추론이 없는 클라우드/셀프 호스팅 API 클라이언트이며, PocketPal AI와 Private LLM은 둘 다 llama.cpp 기반 엔진을 사용해 오픈 웨이트 모델을 기기에 직접 다운로드해 실행합니다. 이미 API 접근 권한이나 셀프 호스팅 서버를 보유하고 있으며 이를 위한 잘 만들어진 Android 프런트엔드를 원한다면 RikkaHub를 선택하십시오. 다운로드 후 네트워크 의존성 없이 기기에서 실행되는 모델을 명확히 원한다면 PocketPal AI나 Private LLM을 선택하십시오. 플랫폼 및 라이선스에 대한 자세한 내용은 위의 비교표를 참조하십시오.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '최종 평가',
        content:
          'RikkaHub는 이미 비용을 지불하는 AI 프로바이더나 직접 운영하는 서버와 대화할 수 있는 하나의 잘 만들어진 인터페이스를 제공한다는 특정한 역할에 충실한, 잘 구축되고 활발히 관리되는 Android 앱입니다. 이는 온디바이스 AI 앱이 아니며 그렇다고 주장하지도 않습니다 — 코드베이스 어디에도 로컬 추론 엔진이 존재하지 않으며, 모든 대화는 스마트폰을 벗어나 다른 곳의 API 엔드포인트에 도달합니다. 실제 모습 그대로 — 무료이고 오픈소스이며 AGPL-3.0 라이선스를 따르는 멀티 프로바이더 채팅 클라이언트로 — 평가하면, 이미 API 키를 관리하고 있거나 Ollama나 LM Studio를 직접 호스팅하고 있으며, 여러 프로바이더 전용 앱 대신 자주 업데이트되는 하나의 앱을 원하는 Android 사용자에게 훌륭한 선택입니다. 서버가 전혀 개입하지 않고 AI가 자신의 기기에서 완전히 실행되기를 명확히 원하는 사용자에게는 잘못된 선택입니다 — 그런 경우에는 PocketPal AI나 Private LLM을 검토해야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 RikkaHub](https://github.com/rikkahub/rikkahub) — 이 리뷰에서 인용한 소스 코드, README, 라이선스(AGPL-3.0), 릴리스 이력, 스타/포크 수.',
          '[RikkaHub GitHub Releases](https://github.com/rikkahub/rikkahub/releases) — 릴리스 주기와 APK 다운로드.',
          '[RikkaHub의 CONTRIBUTING.md](https://github.com/rikkahub/rikkahub/blob/master/CONTRIBUTING.md) — 풀 리퀘스트에 대한 프로젝트의 명확한 방침을 인용한 기여 정책.',
          '[RikkaHub 공식 웹사이트](https://rikka-ai.com/download) — 프로젝트 자체 README에 따른 권장 다운로드 출처.',
          '[Google Play의 RikkaHub](https://play.google.com/store/apps/details?id=me.rerere.rikkahub) — Android 이용 가능 여부.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[PocketPal AI 리뷰(2026)](/power-local-llm/pocketpal-ai-review) — 실제로 GGUF 모델을 기기에서 실행하는 무료 오픈소스 앱으로, RikkaHub와의 직접적인 아키텍처 대비를 보여줍니다.',
          '[Private LLM 리뷰](/power-local-llm/private-llm-review) — iPhone, iPad, Mac을 위한 유료 클로즈드 소스 온디바이스 대안으로, 140개 이상의 모델 카탈로그를 갖추고 있습니다.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/power-local-llm/best-local-llm-apps-android-2026) — 클라우드 클라이언트가 아니라 로컬 추론을 명확히 원하는 독자를 위한 Android 온디바이스 앱 모음.',
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/power-local-llm/best-local-llm-apps-iphone-2026) — RikkaHub가 제공하지 않는, Apple 플랫폼용 온디바이스 옵션이 필요한 독자를 위한 iOS 버전.',
          '[2026년 최고의 모바일 LLM 모델: Phi-4 Mini 대 Gemma 4 대 SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — RikkaHub 같은 클라우드 클라이언트 대신 로컬 추론을 선택하기로 결정한 사람을 위한 모델 차원의 보완 기사.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RikkaHub 리뷰(2026): Android용 멀티 프로바이더 AI 채팅',
      description:
        'RikkaHub 리뷰: 자신의 API 키로 클라우드 AI 프로바이더와 대화할 수 있는 무료 오픈소스 Android 앱. 로컬에서 실행되나요? 라이선스, 설정 방법, 최종 평가를 정리했습니다.',
      url: 'https://promptquorum.com/ko/power-local-llm/rikkahub-review',
      inLanguage: 'ko',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '멀티 프로바이더 AI 채팅 클라이언트와 셀프 호스팅 LLM 프런트엔드를 검토 중인 Android 사용자' },
      about: [
        { '@type': 'Thing', name: 'RikkaHub' },
        { '@type': 'Thing', name: 'Android' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LM Studio' },
        { '@type': 'Thing', name: 'Open source software' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/rikkahub-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'RikkaHub 리뷰(2026)', item: 'https://promptquorum.com/ko/power-local-llm/rikkahub-review' },
      ],
    },
  },
}
