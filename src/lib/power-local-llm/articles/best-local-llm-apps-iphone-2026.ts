// Power Local LLM — Best Local LLM Apps for iPhone in 2026 (Run AI Without WiFi)
// Slug: best-local-llm-apps-iphone-2026
// All 9 locale blocks authored (en, de, ja, fr, zh, es, ko, pt, ar).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-23',
    last_full_refresh: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'Best Local AI Apps for iPhone in 2026 (Run LLMs Without WiFi)',
    seoTitle: 'Best Local AI Apps for iPhone 2026 (Run LLMs Offline)',
    intro:
      'Six iPhone options run real LLMs fully on-device in 2026: PocketPal AI, Private LLM, Locally AI (by LM Studio), Google AI Edge Gallery, MLC Chat, and Apple Intelligence (system-integrated). Chat works without WiFi once the model is downloaded. This guide compares them on cost, model library, iOS integration, privacy posture, and maintenance status — with indicative speeds on iPhone 16 Pro and iPhone 17 Pro and a RAM guide that now includes the iPhone 18 Pro — and explains why LLM Farm dropped out of the ranking.',
    metaDescription:
      'Six ways to run LLMs on iPhone in 2026: PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat. Cost, privacy and RAM guide per iPhone.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-en.webp',
    twitterDescription:
      'iPhone local AI in 2026: PocketPal AI (free default), Private LLM ($4.99, Siri + Shortcuts), Locally AI (LM Studio, MLX), Google AI Edge Gallery (Gemma 4). All run offline once downloaded.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 4B',
    ],
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM not published by Apple)',
      'iPhone Duo (A20 Pro, RAM not published by Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB RAM)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 16e (A18, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'iPhone users who want to run AI privately on-device without a cloud subscription, including travellers, privacy-conscious users, and developers exploring on-device inference.',
    readTime: '12 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'local LLM iPhone app',
    targetKeywords: [
      'best local llm app iphone',
      'run llm on iphone offline',
      'pocketpal ai iphone',
      'private llm app',
      'mlc chat iphone',
      'llm farm ios',
      'iphone ai without wifi',
      'local ai apps iphone',
      'google ai edge gallery ios',
      'locally ai vs pocketpal',
      'ollama for ios',
    ],
    leadAnswerBlock:
      '**For most iPhone users in 2026, install PocketPal AI from the App Store and download a small model such as Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** It is free to use (optional in-app purchases for premium content), open-source (MIT), and runs on iPhone 15 Pro and newer (8 GB+ RAM) at roughly 10–15 tokens/sec (indicative) on iPhone 16 Pro for everyday chat; on a 6 GB iPhone such as the iPhone 14 Pro, use a 1.7B model such as Qwen3 1.7B instead. For Siri and Shortcuts integration, Private LLM is the paid option ($4.99 one-time, iPhone, iPad, and Mac). Locally AI — developed by the LM Studio team — is the free app built on Apple MLX, with Shortcuts support and access to Apple\'s on-device foundation model. Google AI Edge Gallery is Google\'s free app for its Gemma 4 models, with agent skills and a thinking mode. Newer small models — Gemma 4 E2B/E4B and Qwen3.5 — are also available in these apps (see Models by iPhone Tier). MLC Chat remains the Metal-acceleration reference app, but its iPhone build has not been updated since September 2024. LLM Farm is currently not on the App Store or TestFlight (its README says "temporarily unavailable") and is build-from-source only. Apple Intelligence runs models on-device too but is system-integrated, not a chat app — it complements rather than competes with these apps.',
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM app for iPhone in 2026?',
        answer:
          'PocketPal AI is the recommended free default for most iPhone users — open-source (MIT), App Store install, supports any GGUF model from Hugging Face, and runs Phi-4 Mini (3.8B) at roughly 10–15 tokens/sec (indicative) on iPhone 16 Pro. Private LLM is the paid option ($4.99 one-time, iPhone + iPad + Mac) with Shortcuts and Siri integration. Locally AI, developed by the LM Studio team, is the free Apple MLX option with Shortcuts support and access to Apple\'s on-device foundation model. Google AI Edge Gallery is Google\'s free app for Gemma 4. MLC Chat is Metal-accelerated but its iPhone build is dormant since September 2024. Apple Intelligence runs on-device models too but is system-integrated and complements these apps rather than replacing them.',
        bullets: [
          'PocketPal AI — free, open-source (MIT), App Store, v1.20.1 (19 Oct 2026). Recommended default for most users. Supports any GGUF model. Optional in-app purchases for premium content.',
          'Private LLM — $4.99 one-time (iPhone + iPad + Mac), v1.9.16 (14 Sep 2026). Paid option. Shortcuts + Siri integration.',
          'Locally AI — free, by the LM Studio team, v1.66.0 (15 Oct 2026). Apple MLX engine, Shortcuts support, Apple Foundation Models access.',
          'Google AI Edge Gallery — free, by Google, v1.0.13 (8 Oct 2026). Gemma 4, agent skills, thinking mode, image and audio input.',
          'MLC Chat — free, MLC LLM project. Metal-accelerated, but the iPhone app has had no update since v1.6 (27 Sep 2024) — treat as possibly unmaintained.',
          'Apple Intelligence — system-integrated, not a separate app. On-device ~3B model used by Mail, Messages, and Notes.',
          'Recommended model for iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — runs at ~10–15 tokens/sec. Newer options: Gemma 4 E2B/E4B, Qwen3.5 4B.',
          'Older iPhones (14 Pro): Qwen3 1.7B or SmolLM 2 1.7B — fits in 6 GB RAM and runs at ~15–20 tokens/sec.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Which iPhone App Should You Install First?', anchor: '#which-app' },
      { label: 'iPhone App Comparison Table', anchor: '#comparison-table' },
      { label: 'PocketPal AI: Free Open-Source Default', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: Paid Option with iOS Integration', anchor: '#private-llm' },
      { label: 'Locally AI: LM Studio\'s Free MLX App', anchor: '#locally-ai' },
      { label: 'Google AI Edge Gallery: Google\'s Free Gemma 4 App', anchor: '#google-ai-edge-gallery' },
      { label: 'MLC Chat: Apple Silicon Optimisation', anchor: '#mlc-chat' },
      { label: 'LLM Farm: Not on the App Store, Source Still Available', anchor: '#llm-farm' },
      { label: 'Apple Intelligence: System-Integrated On-Device AI', anchor: '#apple-intelligence' },
      { label: 'Models by iPhone Tier', anchor: '#models-by-tier' },
      { label: 'Battery Drain and Thermal Throttling', anchor: '#battery-heat' },
      { label: 'iOS Shortcuts, Siri, and Sideloading', anchor: '#ios-integration' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**PocketPal AI is the recommended free default.** Open-source (MIT), App Store install, supports any GGUF model from Hugging Face. Local chat needs no account (README); premium Pals and "PocketPal Plus" are optional in-app purchases. Runs Phi-4 Mini at ~10–15 tokens/sec on iPhone 16 Pro. Recommended starting point for most iPhone users.',
          '**Private LLM is the paid option in this guide ($4.99 one-time, no subscription).** One purchase covers iPhone, iPad, and Mac, and Family Sharing extends to up to six people. Curated model library; per the developer it plugs into Siri and Shortcuts.',
          '**Locally AI is the free MLX-based alternative, developed by the LM Studio team.** Runs Llama, Gemma (incl. Gemma 4), Qwen, and DeepSeek models on Apple MLX, works with iOS Shortcuts, and can expose Apple\'s own on-device foundation model as a chat interface.',
          '**Google AI Edge Gallery is Google\'s free Gemma 4 app for iPhone.** Thinking mode, agent skills, and image/audio input; models run in the LiteRT-LM format, not GGUF. Google still describes the app as in active development.',
          '**MLC Chat is Metal-accelerated but dormant on iPhone.** Its App Store build has not been updated since v1.6 on 27 September 2024, so its model library predates Phi-4 Mini and Gemma 3. The MLC LLM engine itself is still active on GitHub.',
          '**LLM Farm is currently not on the App Store or TestFlight.** Its own README calls it "temporarily unavailable". It remains open-source and build-from-source via Xcode, but its last release was 1.4.3 in January 2025 and its last code push was 30 January 2026.',
          '**Apple Intelligence is on-device but not a separate app.** Apple\'s ~3B foundation model powers system features (Writing Tools, Smart Reply, Notification Summaries). Since iOS 26, third-party apps can call it via the Foundation Models framework, and Shortcuts can prompt it with the "Use Model" action.',
          '**Recommended model for iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Gemma 4 E2B/E4B and Qwen3.5 4B are newer alternatives with no PromptQuorum speed figures yet. Older iPhones with 6 GB RAM (iPhone 14 Pro): Qwen3 1.7B or SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Apps compared:** PocketPal AI, Private LLM, Locally AI (by LM Studio), Google AI Edge Gallery, MLC Chat, Apple Intelligence (system) — plus LLM Farm, currently not on the App Store (README: "temporarily unavailable").',
          '**Last upstream updates (checked 2026-10-23):** PocketPal AI v1.20.1 (19 Oct 2026) · Locally AI v1.66.0 (15 Oct 2026) · Google AI Edge Gallery v1.0.13 (8 Oct 2026) · Private LLM v1.9.16 (14 Sep 2026) · MLC Chat iPhone app v1.6 (27 Sep 2024 — stale) · LLM Farm release 1.4.3 (27 Jan 2025), last code push 30 Jan 2026 — stale.',
          '**Reference devices for speed figures:** iPhone 16 Pro (A18 Pro, 8 GB RAM) and iPhone 17 Pro (A19 Pro, 12 GB RAM). Speed figures are indicative ranges, not a controlled PromptQuorum benchmark. The iPhone 18 Pro, 18 Pro Max, and iPhone Duo (A20 Pro) have no speed figures here.',
          '**Inference engines:** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), MLC LLM with Metal (MLC Chat), Google LiteRT-LM (Google AI Edge Gallery), proprietary on-device runtime (Private LLM, Apple Intelligence).',
          '**Minimum iPhone for 3B+ models:** iPhone 14 Pro (A16, 6 GB RAM) for 1.7B; any 8 GB+ iPhone (15 Pro, 16 series, 16e, 17 series, 18 Pro) for 3B–4B.',
          '**Recommended free app:** PocketPal AI — App Store, open-source, model flexibility.',
          '**Paid option:** Private LLM — $4.99 one-time (iPhone + iPad + Mac), Shortcuts + Siri support.',
          '**Offline:** After the model is downloaded, on-device chat in all six works without WiFi; features that fetch live data (for example Google AI Edge Gallery\'s Wikipedia and maps skills, or Locally AI\'s optional LM Link) need a connection. Per each app\'s README or listing, on-device chat makes no cloud calls; Apple Intelligence can optionally use Private Cloud Compute.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Which iPhone App Should You Install First?',
        content:
          '**For most users: PocketPal AI from the App Store, then download Phi-4 Mini (3.8B Q4_K_M) — or a newer small model such as Gemma 4 E2B/E4B or Qwen3.5 4B.** This combination works on iPhone 15 Pro and newer (8 GB+ RAM); on a 6 GB iPhone such as the iPhone 14 Pro, download a 1.7B model such as Qwen3 1.7B instead (see Models by iPhone Tier). It costs nothing for chat, and produces usable output for everyday chat, summarisation, and quick drafting. Choose a different app only when you have a specific need it does not cover.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-en.webp',
        imageCaption: 'Which local AI app to install on iPhone: a decision table from free default PocketPal AI to Siri-ready Private LLM',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For most iPhone users in 2026, install PocketPal AI (free, App Store) and download Phi-4 Mini or a newer small model such as Gemma 4 E2B — it covers everyday chat, summarisation, and drafting — with a 3B–4B model on 8 GB+ iPhones and a 1.7B model on 6 GB iPhones.',
          },
          {
            type: 'plain-terms',
            text: 'Six iPhone options run AI fully on your phone in 2026. PocketPal AI is the recommended free starting point — install it, download a 2.7 GB model file once, and you have a private chat assistant that works on the train without WiFi. Private LLM is the paid option if you want Siri to talk to the local model. Locally AI, from the LM Studio team, is the free modern alternative with Shortcuts support, and Google AI Edge Gallery is Google\'s free app for its Gemma 4 models. The iPhone build of MLC Chat is no longer updated. Apple Intelligence is built into iOS but not a chat app. PocketPal AI fits most use cases.',
          },
        ],
        decisionBlock: {
          title: 'Decision: Which iPhone Local AI App?',
          localIf: [
            'You want a free chat AI that works offline → PocketPal AI',
            'You want Siri to talk to your local model → Private LLM',
            'You want a free MLX app with Shortcuts and Apple Foundation Models access → Locally AI',
            'You want Google\'s own Gemma 4 with thinking mode and agent skills → Google AI Edge Gallery',
            'You want to experiment with the MLC LLM toolchain and accept an iPhone build with no update since September 2024 → MLC Chat',
            'You only need writing assistance in Mail / Messages / Notes → Apple Intelligence (built-in)',
          ],
          cloudIf: [
            'You need 70B+ model quality (Llama 3.3 70B, GPT-5.5 tier) → use cloud or remote-connect to a home machine',
            'You need access to GPT-5.5, Claude Opus, or Gemini specifically → cloud apps (these are not available locally)',
            'You need real-time vision or multimodal output beyond text → cloud (on-device multimodal is limited in 2026)',
          ],
          quick: [
            'Free + works for most users: PocketPal AI',
            'Paid + iOS-native integration: Private LLM',
            'Free + LM Studio ecosystem: Locally AI',
            'Free + Google Gemma 4: Google AI Edge Gallery',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Install PocketPal AI first, even if you plan to pay for Private LLM later. Use PocketPal AI to test whether on-device inference on your iPhone tier feels fast enough for your use case. If yes, decide whether the Shortcuts and Siri integration in Private LLM is worth $4.99. If no, you saved $4.99 finding out before paying. PocketPal AI also has a built-in benchmark that reports tokens/sec and memory on your own iPhone — use it instead of trusting any table, including the one below.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone App Comparison Table',
        content:
          '**The six options differ on three axes that matter to most users: cost, model flexibility, and integration with iOS.** Speed differences exist but are smaller than the gap between any of these apps and a cloud LLM. Prices and versions were read from the US App Store listings and project pages on 2026-10-23.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-en.webp',
        imageCaption: 'iPhone local LLM app comparison table: cost, speed and integration for PocketPal AI, Private LLM, Locally AI and more',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI is the recommended free default, Private LLM is the paid option, Locally AI is the free MLX pick from the LM Studio team, Google AI Edge Gallery is Google\'s free Gemma 4 app, MLC Chat is dormant on iPhone, Apple Intelligence is system-integrated.',
          },
          {
            type: 'plain-terms',
            text: 'The choice usually comes down to three things: do you want to pay for Siri integration (Private LLM), do you want the LM Studio ecosystem with Shortcuts for free (Locally AI), or do you want Google\'s own Gemma 4 with a thinking mode (Google AI Edge Gallery). For everything else, PocketPal AI is the default. The speed numbers in the table are indicative ranges for Q4_K_M quantisation — the standard for mobile inference in 2026 — not a controlled benchmark.',
          },
        ],
        columns: ['App', 'Cost', 'Tokens/sec (Phi-4 Mini, 16 Pro)', 'Privacy', 'Best for'],
        rows: [
          { 'App': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)', 'Cost': 'Free (MIT) + optional in-app purchases', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacy': 'On-device chat, no account (README)', 'Best for': 'Free default for most users' },
          { 'App': '[Private LLM](https://privatellm.app)', 'Cost': '$4.99 one-time', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'No figure', 'Privacy': 'On-device; no accounts or tracking (developer)', 'Best for': 'Shortcuts + Siri integration' },
          { 'App': '[Locally AI](https://lmstudio.ai/locally)', 'Cost': 'Free (LM Studio team)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A — MLX catalog (no Phi-4)', 'Privacy': 'On-device; no data collection (listing)', 'Best for': 'MLX + Shortcuts, LM Studio link' },
          { 'App': '[Google AI Edge Gallery](https://apps.apple.com/app/id6749645337)', 'Cost': 'Free (Google)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A — LiteRT-LM, Gemma 4', 'Privacy': 'On-device after model download (listing)', 'Best for': 'Gemma 4, thinking mode, agent skills' },
          { 'App': '[MLC Chat](https://llm.mlc.ai)', 'Cost': 'Free (open-source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A — library predates Phi-4', 'Privacy': 'Local inference (project docs; unverified)', 'Best for': 'MLC LLM toolchain users (iOS app dormant)' },
          { 'App': '[LLM Farm](https://github.com/guinmoon/LLMFarm)', 'Cost': 'Free (build from source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'No figure', 'Privacy': 'Local inference (project docs; unverified)', 'Best for': 'Developers (not on App Store, stale)' },
          { 'App': '[Apple Intelligence](https://www.apple.com/apple-intelligence/)', 'Cost': 'Free (built into iOS)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A (system feature)', 'Privacy': 'Local + opt-in Private Cloud Compute (Apple)', 'Best for': 'Mail, Messages, Notes assistance' },
        ],
        note:
          '**Note on Apple Neural Engine (ANE) vs Metal vs MLX:** PocketPal AI and LLM Farm use llama.cpp with Metal Performance Shaders for inference, which runs on the GPU. MLC Chat uses MLC LLM with deeper Metal optimisation, which the MLC LLM project describes as faster than llama.cpp-based apps on the same hardware (project claim; PromptQuorum has not measured this). Locally AI uses Apple MLX, Apple\'s own open-source array framework, which reaches similar GPU efficiency on Apple Silicon. Google AI Edge Gallery runs Gemma 4 through Google\'s LiteRT-LM runtime. Apple Intelligence uses ANE specifically for the system ~3B model, which is more power-efficient but less flexible than Metal-based inference. Since iOS 26, third-party apps can call that system model through the Foundation Models framework — Locally AI does exactly this — but custom GGUF/MLX models still cannot directly target the ANE. Apple states the A20 Pro in the iPhone 18 Pro has a Dual 16-core Neural Engine with two times the compute of before; that is an Apple claim, and PromptQuorum has not measured what it means for these apps.',
        callouts: [
          {
            type: 'tip',
            text: 'Tokens/sec figures are rough orientation ranges for Q4_K_M models on recent iPhones, not measurements by PromptQuorum and not tied to an app version or test date. They assume Q4_K_M quantisation (the standard for mobile inference in 2026) and an idle iPhone with no other heavy apps running. Background apps can reduce throughput noticeably, and the iPhone 17 Pro typically runs faster than the iPhone 16 Pro. Measure your own phone with PocketPal AI\'s built-in benchmark.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: Free Open-Source Default',
        content:
          '**PocketPal AI is the recommended starting point for most iPhone users in 2026.** It is free to use, open-source (MIT; GitHub: [a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)), available on the App Store, and supports any GGUF model from Hugging Face. The app uses llama.cpp under the hood with Apple Silicon optimisations. Full review: [PocketPal AI Review](/power-local-llm/pocketpal-ai-review).',
        items: [
          '**What it is:** an iOS/iPadOS and Android app that runs GGUF models locally using llama.cpp, published by Gooya UG. The README states prompts, responses, and documents are not uploaded to external servers; chat needs no account.',
          '**Version and last update:** v1.20.1, released 19 October 2026 ([GitHub release](https://github.com/a-ghorbani/pocketpal-ai/releases)); the App Store listing shows the same version. Recent releases: v1.19.0 (4 Oct), v1.20.0 (14 Oct), v1.20.1 (19 Oct 2026) — no stale warning.',
          '**Install:** App Store → "PocketPal AI". Free download with optional in-app purchases (premium Pals and "PocketPal Plus"). Requires iOS/iPadOS 15.1 or later; RAM, not the iOS version, sets the usable model size. Since v1.20.0 the app also offers an optional Sign in with Apple and account deletion.',
          '**Adding a model:** in the app, tap Models → "Add from Hugging Face" → search (e.g. "phi-4-mini-instruct-Q4_K_M") → tap to download. The model is stored in the app\'s local storage (~2.7 GB for Phi-4 Mini Q4).',
          '**Generation speed (iPhone 16 Pro, indicative):** Phi-4 Mini ~10–15 tok/sec, Llama 3.2 3B ~12–18 tok/sec, Gemma 3 4B ~7–10 tok/sec, Qwen3 1.7B ~18–24 tok/sec. These are rough orientation ranges, not measurements by PromptQuorum — use the built-in benchmark, which reports tokens/sec and memory on your own iPhone.',
          '**Other features:** Pals (custom assistants), on-device text-to-speech, Talents (calculator and date/time tools for capable models), and a Hugging Face model browser that supports gated models with an access token.',
          '**Best for:** users who want a free, App Store-installable chat app that needs no account and supports any community-released GGUF model.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The PocketPal AI model picker has a "Recommended" filter that, per the app\'s documentation, shows models that fit your device\'s RAM. Check it against your own phone — an oversized model can lead to iOS closing the app mid-response.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: Paid Option with iOS Integration',
        content:
          '**Private LLM is the paid iPhone option in this guide ($4.99 one-time, no subscription).** It is App Store only and ships with a curated library of optimised models. Its differentiator is iOS integration: the developer states it plugs directly into Siri and the Shortcuts app. Full review: [Private LLM Review](/power-local-llm/private-llm-review).',
        items: [
          '**What it is:** a paid iOS app with a curated model library and deep iOS integration. Uses a proprietary on-device runtime optimised for Apple Silicon.',
          '**Install:** App Store → "Private LLM - Local AI Chat" (Numen Technologies Limited). One-time purchase $4.99 (no subscription; the listing shows no in-app purchases). Requires iOS/iPadOS 17.0 or later on an A12 Bionic chip or newer.',
          '**Version and last update:** v1.9.16, released 14 September 2026 (App Store version history); the previous release was 1.9.15 on 9 July 2026. Releases come every two to three months — under the three-month line, so no stale warning.',
          '**Curated model library:** [privatellm.app](https://privatellm.app) advertises 140+ local models across iPhone, iPad, and Mac, naming families such as Llama, Qwen3, Gemma 3, and Phi 4; the subset that fits an iPhone is smaller. Less flexibility than PocketPal AI, but the models are pre-optimised for the app\'s runtime.',
          '**Shortcuts:** per the developer, Private LLM plugs into the Shortcuts app and can pass responses to other apps that support the x-callback-url specification. Useful for triggering local AI from a button on your home screen or via NFC tags.',
          '**Siri integration:** the developer lists Siri integration; a prompt routed to the on-device model works without an internet connection (internet is only needed for the first model download).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Per privatellm.app, one $4.99 purchase covers iPhone, iPad, and Mac, and the App Store listing says up to six family members can use it with Family Sharing. No subscription and no in-app purchases are listed — the listed price is the total cost. The developer states there are no accounts, tracking, or logs.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: LM Studio\'s Free MLX App',
        content:
          '**Locally AI is a free chat app (its listing says it collects no data) developed by the LM Studio team (listed under Element Labs Inc), built on Apple\'s own MLX framework instead of llama.cpp.** It is the only app here that exposes Apple\'s on-device foundation model as a chat interface. Full review: [Locally AI Review](/power-local-llm/locally-ai-review).',
        items: [
          '**What it is:** an iOS/iPadOS/macOS app using Apple MLX for inference, developed by the team behind the desktop LM Studio app.',
          '**Install:** App Store → "Locally AI". Free, no in-app purchases listed, no account required (per the listing), runs offline.',
          '**Version and last update:** v1.66.0, released 15 October 2026 (App Store version history); about one release a month in 2026 — no stale warning.',
          '**Model library:** Llama 3.2, Gemma 2/3/4, Qwen 3 and 3.5, DeepSeek, LFM 2.5, Bonsai, Ministral 3, and Apple Foundation Models — a broader and more current catalog than MLC Chat\'s.',
          '**iOS Shortcuts:** exposes a Shortcuts action, matching Private LLM\'s automation support at zero cost.',
          '**LM Link:** an optional feature that connects to LM Studio running on a Mac over what LM Studio describes as an end-to-end encrypted link, letting the iPhone app hand off to a larger model on a home machine when needed.',
          '**Requirements:** iOS/iPadOS 18.1 or later (macOS 26.0 or later for the Mac version). Apple Silicon-class efficiency benefits most on iPhone 15 Pro and newer.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI is the only app in this guide that can put Apple\'s own on-device foundation model behind a normal chat window — useful if you want to test what Apple Intelligence\'s model can do without hunting through Writing Tools menus. For third-party GGUF-style flexibility, PocketPal AI still has the larger model catalog.',
          },
        ],
      },
      googleAIEdgeGallery: {
        id: 'google-ai-edge-gallery',
        title: 'Google AI Edge Gallery: Google\'s Free Gemma 4 App',
        content:
          '**Google AI Edge Gallery is Google\'s free app for running its Gemma 4 models on the phone, and it is available on the iPhone App Store.** The listing shows AI Chat with a thinking mode, agent skills, image and audio input, Prompt Lab, and model benchmarking. Google says the app is in active development. Full review: [Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review).',
        items: [
          '**What it is:** Google\'s on-device AI showcase app, built on Google\'s LiteRT-LM runtime. Free; no in-app purchases are listed.',
          '**Install:** App Store → "Google AI Edge Gallery". Requires iOS 17.0 or later. Models download separately inside the app.',
          '**Version and last update:** v1.0.13, released 8 October 2026 (App Store version history). Gemma 4 support arrived in v1.0.2 on 3 April 2026 — no stale warning.',
          '**Models:** the Gemma 4 family (E2B and E4B are the phone-sized variants; Google lists the LiteRT-LM files at about 2.58 GB and 3.65 GB), EmbeddingGemma 2, and FunctionGemma 270M. Models in LiteRT-LM format can also be imported from Hugging Face.',
          '**Features:** Thinking Mode (Gemma 4 models only), Agent Skills (for example Wikipedia lookup and maps, plus community skills), Ask Image, Audio Scribe, Prompt Lab, and model benchmarking.',
          '**Limits:** only LiteRT-LM models, not GGUF or MLX; the listing does not mention Shortcuts or Siri; PromptQuorum has no speed figures for it.',
          '**Best for:** users who want Google\'s own Gemma 4 with a visible reasoning mode and agent tools, at no cost.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Google reports peak memory of about 607 MB on CPU and 1,450 MB on GPU for Gemma 4 E2B on an iPhone 17 Pro (vendor figures, per Google\'s LiteRT-LM Gemma 4 page; not re-measured by PromptQuorum). E2B is the practical starting point for most phones; E4B suits 8 GB+ iPhones.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: Apple Silicon Optimisation',
        content:
          '**Stale warning: the MLC Chat iPhone app has had no update since version 1.6 on 27 September 2024 (more than 13 months), so it may be unmaintained — check before relying on it.** The MLC LLM engine repository itself is still active on GitHub (last activity 6 October 2026). MLC Chat is free, open-source, and runs models compiled by the MLC LLM toolchain rather than standard GGUF, and its catalog has not kept pace with PocketPal AI or Locally AI. Full review: [MLC Chat Review](/power-local-llm/mlc-chat-review).',
        items: [
          '**What it is:** the iOS reference app from the MLC LLM project, demonstrating MLC LLM\'s Metal-accelerated inference on Apple Silicon.',
          '**Install:** App Store → "MLC Chat". Free. Requires iOS/iPadOS 17.0 or later.',
          '**Version and last update:** v1.6, released 27 September 2024 (App Store version history; added Llama 3.2 3B). Earlier: 1.5 added Gemma 2 2B (August 2024), 1.4 added Phi-3, Mistral v3 and Qwen2 (June 2024). Last iPhone update more than 13 months ago — stale warning on.',
          '**Speed (project claim, not measured here):** the MLC LLM project describes its Metal-accelerated engine as faster than llama.cpp-based apps on the same iPhone — but the app\'s own model list predates current picks like Phi-4 Mini and Gemma 3, so this advantage is untestable on 2026\'s recommended models without a self-compiled build.',
          '**Model library:** limited to models the MLC LLM project compiled before the app went dormant — Llama 3.2 3B, Gemma 2 2B, Phi-3, Mistral v3, Qwen2 and similar 2024-era releases. Not every Hugging Face GGUF works, and no current-generation small model ships in the App Store build.',
          '**Best for:** developers already invested in the MLC LLM toolchain who are willing to compile their own model, or who specifically need one of the pre-2025 models it already ships.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Because the App Store build of MLC Chat has had no update since 27 September 2024, do not expect Phi-4 Mini, Qwen3, or Gemma 3 to appear in its picker. If you want current-generation models with Metal-class GPU efficiency today, Locally AI (Apple MLX), PocketPal AI (llama.cpp with Metal Performance Shaders), or Google AI Edge Gallery (Gemma 4) are the actively maintained alternatives.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: Not on the App Store, Source Still Available',
        content:
          '**Stale warning: LLM Farm\'s last release (1.4.3) was on 27 January 2025 and its last code push was on 30 January 2026 — nearly nine months with no update — so it may be unmaintained.** PromptQuorum\'s review of the project dates its removal from the App Store to August 2025; its own GitHub README describes the app as "temporarily unavailable" on both the App Store and TestFlight. The project (GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)) is still open-source and has seen GitHub issue activity into October 2026, but new users can no longer install it from the App Store; it must be built from source via Xcode (README: macOS 13+ and iOS 16+). Full review: [LLM Farm Review](/power-local-llm/llm-farm-review).',
        items: [
          '**What it is:** an iOS app from the project\'s maintainer that runs GGUF models with extensive configuration options, previously distributed on the App Store.',
          '**Current availability:** not installable from the App Store or TestFlight as of this refresh. Source code remains public and buildable.',
          '**Building from source:** clone the repository, open in Xcode, and build to a device with a free or paid Apple Developer account — the standard sideloading workflow for any open-source iOS app without an App Store listing.',
          '**Configuration exposed (when built):** temperature, top-p, top-k, mirostat sampling, repeat penalty, system prompt per model, chat template selection, context window length.',
          '**Best for:** developers comfortable building an app from source in Xcode who specifically want mirostat sampling controls. Everyone else should use PocketPal AI or Locally AI, both fully App-Store-installable and free.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not expect an App Store link for LLM Farm to work — treat any such link found elsewhere as outdated. Building from source requires Xcode and basic familiarity with iOS code signing. If that is more setup than you want, PocketPal AI covers the same "flexible free chat app" use case without leaving the App Store.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: System-Integrated On-Device AI',
        content:
          '**Apple Intelligence runs Apple\'s own ~3B foundation model on-device on iPhone 15 Pro and newer (the iPhone 15 Pro generation, reported at 8 GB RAM; Apple does not state RAM).** It is not a chat app by default — it powers system features in Mail (Smart Reply), Messages (writing tools), Notes (summarisation), and Notification Summaries. Since iOS 26, Apple\'s Foundation Models framework lets third-party developers call that same on-device model directly, and apps like Locally AI now use it to expose a genuine chat interface on top of it. iOS 27 extends the framework: Apple\'s developer guide says apps can use any language model that conforms to its language-model protocol, including Apple\'s own models and cloud models.',
        items: [
          '**Where it lives:** integrated into iOS 18+ (Foundation Models framework added in iOS 26). Enable in Settings → Apple Intelligence & Siri.',
          '**Hardware requirement:** iPhone 15 Pro / 15 Pro Max, iPhone 16 series, iPhone 16e, iPhone 17 series, and the 2026 iPhone 18 Pro, 18 Pro Max, and iPhone Duo (A20 Pro). Earlier iPhones (14 and below) do not support Apple Intelligence. Check Apple\'s current compatibility list for iOS 27 before buying.',
          '**Siri AI (iOS 27):** Apple describes Siri AI as available in beta in iOS 27, rolling out in English first, not initially available in the EU on iOS, and subject to daily usage limits for some server-side features. It is separate from the on-device chat apps in this guide.',
          '**On-device features:** Writing Tools (rewrite, summarise, proofread) inside any text field, Smart Reply in Mail and Messages, Notification Summaries, Genmoji generation.',
          '**Foundation Models framework (iOS 26+):** a native Swift API giving developers direct access to the same on-device model with a few lines of code — this is how Locally AI surfaces it as a chat option, and how the Shortcuts "Use Model" action can route a prompt to it, to Private Cloud Compute, or to ChatGPT.',
          '**Private Cloud Compute:** for tasks beyond the on-device model\'s capability, Apple Intelligence falls back to Private Cloud Compute (PCC) — Apple-operated servers running larger models which Apple states do not retain user data. PCC is opt-in and can be disabled.',
          '**How it relates to chat apps:** Apple Intelligence is a complement, not a replacement. Its system features handle text rewriting and summarisation inside iOS apps; PocketPal AI, Private LLM, Locally AI, and MLC Chat provide a dedicated chat interface for arbitrary questions — and Locally AI can now put Apple\'s own model behind that same kind of interface.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If Apple Intelligence is your only need (rewriting emails, summarising notifications), you do not need a separate chat app. If you want to ask the model questions like "explain quantum tunnelling in simple terms" or "draft a project plan for X", install a chat app — either a dedicated one like PocketPal AI, or Locally AI, which can front Apple\'s own on-device model with a chat window.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Models by iPhone Tier',
        content:
          '**iPhone RAM determines the model size ceiling — not the chip generation.** A 6 GB iPhone (14 Pro, 15) can comfortably run 1.7B models; an 8 GB+ iPhone (15 Pro, 16 series, 16e, 17 series) runs 3B–4B models comfortably and 7B models slowly. Newer small models worth trying alongside Phi-4 Mini: Gemma 4 E2B and E4B (Google, April 2026; about 2.58 GB and 3.65 GB as LiteRT-LM files) and the Qwen3.5 small series (Alibaba, March 2026; 0.8B, 2B, 4B, and 9B, Apache 2.0 per the Artificial Analysis summary). PromptQuorum has no speed figures for them; Locally AI and Google AI Edge Gallery ship them directly. For the broader model landscape across all hardware (not just mobile), see [Best Local LLMs in 2026](/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-en.svg',
        imageCaption: 'Local LLM model recommendations by iPhone RAM tier, from 4 GB iPhones to the 12 GB iPhone 17 Pro',
        columns: ['iPhone Tier (Year, RAM)', 'Recommended Model', 'Download Size', 'Rough speed (indicative)'],
        rows: [
          { 'iPhone Tier (Year, RAM)': 'iPhone 18 Pro / Pro Max (2026, ~12 GB reported)', 'Recommended Model': 'Start as 17 Pro; RAM not published by Apple', 'Download Size': '~2.5–3.7 GB', 'Rough speed (indicative)': 'No figure' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 17 Pro / 17 Pro Max (2025, 12 GB)', 'Recommended Model': 'Phi-4 Mini / Llama 3.2 3B / Gemma 4 E4B', 'Download Size': '~2.5–3.7 GB', 'Rough speed (indicative)': '~13–20 tok/sec (Phi-4 Mini)' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 16 series / 16e / 17 (2024–2025, 8 GB)', 'Recommended Model': 'Phi-4 Mini (3.8B Q4_K_M) or Gemma 4 E2B', 'Download Size': '~2.6–2.7 GB', 'Rough speed (indicative)': '~10–15 tok/sec (Phi-4 Mini)' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 GB)', 'Recommended Model': 'Phi-4 Mini (3.8B Q4_K_M)', 'Download Size': '~2.7 GB', 'Rough speed (indicative)': '~8–12 tok/sec' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 13 Pro / 14 Pro / Pro Max (6 GB)', 'Recommended Model': 'Qwen3 1.7B or SmolLM 2 1.7B (Q4_K_M)', 'Download Size': '~1.1 GB', 'Rough speed (indicative)': '~15–20 tok/sec' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 14 / 14 Plus / 15 / 15 Plus (6 GB)', 'Recommended Model': 'Qwen3 1.7B or SmolLM 2 1.7B (Q4_K_M)', 'Download Size': '~1.1 GB', 'Rough speed (indicative)': '~12–18 tok/sec' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 13 / 12 / SE / older (4 GB)', 'Recommended Model': 'Not recommended for on-device LLM', 'Download Size': '—', 'Rough speed (indicative)': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For older 6 GB iPhones, Qwen3 1.7B or SmolLM 2 1.7B (HuggingFace) are sensible choices in 2026; Qwen3.5 2B and Gemma 4 E2B are newer options in the same size class. Models this small produce coherent short-form responses (1–3 paragraphs) but struggle with multi-step reasoning. Do not install Phi-4 Mini on a 6 GB iPhone — it nominally fits but iOS will kill the app under any other memory pressure. Speed figures in the table are rounded indicative ranges for Phi-4 Mini, Llama 3.2 3B, and Qwen3 1.7B, not tied to an app version or test date; Gemma 4 and Qwen3.5 have no figures here. Apple\'s product pages do not state iPhone RAM: the RAM figures here are widely reported specs, and the ~12 GB for the 18 Pro comes from press reports.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'Battery Drain and Thermal Throttling',
        content:
          '**On-device LLM inference on iPhone is CPU/GPU-intensive and produces heat.** As a rough guide (rough orientation, not a measurement by PromptQuorum), active inference draws ~3–5 W; sustained generation will throttle the chip and can drain the battery roughly 20–30% per hour on iPhone 16 Pro.',
        image: '/images/iphone-llm-apps-battery-thermal-en.svg',
        imageCaption: 'iPhone on-device LLM battery and thermal guide: power draw, thermal throttling and cooling tips',
        items: [
          '**Battery drain (active chat, indicative):** ~20–30% per hour on iPhone 16 Pro running Phi-4 Mini.',
          '**Sustained generation can trigger thermal throttling.** When the chip gets hot, iOS reduces clock speeds and tokens/sec drop. When it starts and how much speed you lose depends on the phone, case, charging, and room temperature; PromptQuorum has not measured this. Letting the phone cool restores speed.',
          '**Mitigation:** keep the iPhone face-up on a hard surface (not in your hand or pocket) during long inference sessions to allow heat dissipation. A passive heat sink case helps but is rarely necessary for short interactions.',
          '**Phantom drain:** if you leave a chat app open in the background after generation, RAM stays allocated but no inference runs — battery impact is minimal. Closing the app fully reclaims the ~3 GB of RAM.',
          '**MagSafe charging during inference:** charging while generating can raise heat; if the phone gets warm, pause charging or generation, or charge afterwards.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not run on-device LLM inference on an iPhone in direct sunlight or in a hot car. In direct sunlight or a hot car the chip can reach its thermal limits sooner, which can trigger throttling and Apple\'s "iPhone needs to cool down" warning. Generation usually slows rather than the app closing.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts, Siri, and Sideloading',
        content:
          '**iOS integration varies significantly by app.** Private LLM and Locally AI both support Shortcuts; PocketPal AI, Google AI Edge Gallery, and MLC Chat are standalone chat apps with no Shortcuts or Siri integration mentioned in their README or App Store listing.',
        image: '/images/iphone-llm-apps-ios-integration-en.svg',
        imageCaption: 'iOS integration of iPhone local LLM apps: which support Shortcuts, Siri, open source and App Store install',
        items: [
          '**Private LLM** plugs into Shortcuts and Siri, per the developer, and can hand responses to apps that support x-callback-url. The most iOS-native of the chat apps here.',
          '**Locally AI** exposes a Shortcuts action for free, and can route a Shortcut to Apple\'s own on-device foundation model via its Foundation Models framework integration — no Siri voice trigger, but Shortcuts automation without paying.',
          '**PocketPal AI** is a standalone chat app — its README mentions no Shortcuts action and no Siri integration. You open the app and chat.',
          '**Google AI Edge Gallery** is a standalone chat and demo app — its App Store listing mentions no Shortcuts action or Siri integration.',
          '**MLC Chat** is a reference app for the MLC LLM project — minimal iOS integration and no iPhone update since September 2024. No Shortcuts action.',
          '**LLM Farm** is currently not on the App Store and, when built from source, has no Shortcuts action.',
          '**Apple Intelligence** integrates with iOS Shortcuts via the "Use Model" action (iOS 18.4+, expanded in iOS 26 alongside the Foundation Models framework). This routes a prompt to the on-device model, Private Cloud Compute, or ChatGPT (configurable). The on-device output can be chained into other Shortcuts actions.',
          '**Sideloading:** PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, and MLC Chat are on the App Store and require no sideloading or jailbreak; Apple Intelligence is built into iOS. LLM Farm is the exception — installing it now requires building from source in Xcode. In the EU, alternative app marketplaces exist under the DMA, but which apps they offer is up to each developer, so install from the developer\'s official channel; none of these apps needs one.',
        ],
        promptExamples: [
          {
            label: 'Private LLM Shortcut: summarise selected text',
            text: '1. Action: "Get Selected Text" (iOS Share Sheet input).\n2. Action: Private LLM text generation (from the Private LLM app\'s Shortcuts actions) → Prompt: "Summarise the following text in three bullet points: [Selected Text]" → pick a model installed in the app.\n3. Action: "Show Result" or "Copy to Clipboard".\nAdd to Share Sheet so you can run it on any selected text in any app, fully offline. Action names follow the developer\'s description and may differ by app version.',
          },
          {
            label: 'Apple Intelligence Shortcut: rewrite for tone',
            text: '1. Action: "Get Clipboard".\n2. Action: "Use Model" → Model: On-device → Prompt: "Rewrite this in a professional, concise tone: [Clipboard]".\n3. Action: "Copy to Clipboard".\nAssign to a Lock Screen widget for one-tap rewriting of anything you copy.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For hands-free use while driving or cooking, Private LLM\'s Siri integration is the only chat app in this guide whose developer lists Siri integration, which lets you use it without touching the phone. Apple Intelligence supports voice via Siri but only for system tasks (writing, summarising, app actions) — it does not expose general Q&A like the chat apps do.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Installing a model larger than your iPhone\'s RAM allows.** A 7B model on an 8 GB iPhone is often too slow for chat and can be closed by iOS when it reclaims memory for another app; measure it with PocketPal AI\'s built-in benchmark first. Stick to the recommended model for your iPhone tier (3B–4B for 8 GB devices, 1.7B for 6 GB devices).',
          '**Expecting cloud-AI quality from on-device models.** Phi-4 Mini (3.8B) is impressive for its size but not GPT-5.5. Use it for chat, summarisation, drafting, and quick Q&A — not multi-step reasoning, complex code generation, or nuanced creative writing.',
          '**Running inference in direct sunlight or a hot car.** Thermal throttling can kick in quickly, generation slows, and you may see the "iPhone needs to cool down" warning. Run inference at room temperature.',
          '**Leaving 3+ chat apps installed with 3 GB models in each.** You will burn ~10 GB of storage on duplicate models. Pick one app and one model; uninstall the others until you are sure you need them.',
          '**Assuming Apple Intelligence has no chat interface at all.** That was true through iOS 18, but since iOS 26 apps like Locally AI can front Apple\'s on-device model with an actual chat window via the Foundation Models framework. The system features (Writing Tools, Smart Reply) still are not a chat UI on their own.',
          '**Looking for LLM Farm on the App Store.** It is currently not on the App Store (PromptQuorum\'s LLM Farm review dates the removal to August 2025). Searching the App Store for it wastes time; use PocketPal AI for the same free/flexible use case, or build LLM Farm from source in Xcode if you specifically need its exposed mirostat controls.',
          '**Assuming "free" means no purchases.** PocketPal AI is free for local chat but sells optional premium content (Pals and "PocketPal Plus"), and Locally AI and Google AI Edge Gallery list no in-app purchases. Check the listing\'s in-app purchase section before you install (PocketPal AI\'s US App Store listing showed an 18+ age rating on 2026-10-23).',
          '**Judging a model from a speed table alone.** The tokens/sec ranges in this guide are indicative, and newer models such as Gemma 4 and Qwen3.5 are not in them. Run the same prompt on two models in PocketPal AI\'s benchmark before you delete the one you already downloaded.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (README, MIT license, release v1.20.1 of 19 Oct 2026) and the [App Store listing](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (version history, in-app purchases, age rating, iOS 15.1+). Read 2026-10-23.',
          'Private LLM — [App Store listing](https://apps.apple.com/app/apple-store/id6448106860) (v1.9.16, $4.99, iOS 17.0+, Family Sharing) and [privatellm.app](https://privatellm.app) (Siri and Shortcuts, model list, one purchase for iPhone, iPad, and Mac). Read 2026-10-23.',
          'Locally AI — [App Store listing](https://apps.apple.com/us/app/locally-ai/id6741426692) (v1.66.0, free, Element Labs Inc, iOS 18.1+; LM Studio team) and [lmstudio.ai/locally](https://lmstudio.ai/locally) (LM Link). Read 2026-10-23.',
          'Google AI Edge Gallery — [App Store listing](https://apps.apple.com/app/id6749645337) (v1.0.13, free, iOS 17.0+, Gemma 4, Agent Skills, Thinking Mode), [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) and Google\'s [LiteRT-LM Gemma 4 page](https://developers.google.com/edge/litert-lm/models/gemma-4) (E2B/E4B file sizes and memory, vendor figures). Read 2026-10-23.',
          'MLC Chat / MLC LLM project — [App Store listing](https://apps.apple.com/us/app/mlc-chat/id6448482937) (v1.6, 27 Sep 2024, version history), [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) and [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) (engine repository). Read 2026-10-23.',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (README: "temporarily unavailable" in TestFlight and App Store; release 1.4.3 of 27 Jan 2025; last push 30 Jan 2026) and the [PromptQuorum LLM Farm review](/power-local-llm/llm-farm-review) for the August 2025 delisting. Read 2026-10-23.',
          'Apple Intelligence and on-device foundation models — [Apple Machine Learning Research](https://machinelearning.apple.com), the [What\'s new in iOS 27 developer guide](https://developer.apple.com/wwdc26/guides/ios/) (Foundation Models framework), and the [iPhone 18 Pro page](https://www.apple.com/iphone-18-pro/) (A20 Pro, Dual 16-core Neural Engine, Siri AI beta, no RAM figure) and [iPhone Duo page](https://www.apple.com/iphone-duo/). Read 2026-10-23.',
          'Qwen3.5 small series (0.8B–9B, March 2026) — [Artificial Analysis summary](https://artificialanalysis.ai/articles/qwen3-5-small-models).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can iPhone really run a 7B model?',
            a: 'Technically yes on iPhone 15 Pro and newer (8 GB RAM), but not at usable speed. A 7B Q4 model on iPhone 16 Pro is often too slow for comfortable chat (indicative). iOS also tends to kill the app when other apps need memory. Use 3B–4B models (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) for everyday on-device chat. For 7B+ quality, remote-connect to a home Mac or PC running Ollama.',
          },
          {
            q: 'Does local AI drain my iPhone battery?',
            a: 'Yes — actively running inference typically draws ~3–5 W and, as a rough indicative guide, can drain the battery roughly 20–30% per hour on iPhone 16 Pro. For occasional chat (a few prompts), the impact is small. For sustained use (long conversation, multiple summarisation tasks), keep the iPhone plugged in. The model itself sitting in RAM with no inference running has negligible battery impact.',
          },
          {
            q: 'Will my iPhone get hot using local AI?',
            a: 'Yes, it can, especially during long continuous generation. iOS throttles clock speeds when the chip gets hot, which lowers tokens/sec; how soon and how much varies with the phone, case, charging, and room temperature, and PromptQuorum has not measured it. To minimise this: keep the iPhone face-up on a hard surface (not in your hand) during long sessions, and avoid direct sunlight. Short interactions usually cause little noticeable heat.',
          },
          {
            q: 'Can I use Siri with a local model?',
            a: 'Yes, with Private LLM ($4.99 one-time). The developer states it plugs directly into Siri and Shortcuts, so a prompt can be routed to the on-device model without an internet connection. PocketPal AI, Locally AI, Google AI Edge Gallery, and MLC Chat do not mention Siri voice integration, though Locally AI does support Shortcuts automation. Apple Intelligence integrates with Siri but only for system tasks (writing, summarising, app actions), not general Q&A; Siri AI is a separate iOS 27 beta feature, English first and not initially in the EU.',
          },
          {
            q: 'Do these apps work on iPhone SE or older iPhones?',
            a: 'Limited. iPhone SE and iPhone 13 / 12 (4 GB RAM) are below the practical threshold for on-device LLMs in 2026. iPhone 14 / 15 (non-Pro, 6 GB RAM) can run 1.7B models (Qwen3 1.7B, SmolLM 2 1.7B) but not 3B+. iPhone 13 Pro and 14 Pro (6 GB RAM) also stay at 1.7B; the iPhone 15 Pro (8 GB RAM) can run 3B models like Phi-4 Mini at roughly 8–12 tokens/sec (indicative). For older iPhones, the better path is remote-connecting to a home Mac or PC.',
          },
          {
            q: 'Can I sync chat history between iPhone and Mac?',
            a: 'Not in PocketPal AI, Private LLM, Google AI Edge Gallery, or MLC Chat — chat history is stored locally per device, with no iCloud sync. Private LLM and Locally AI are both universal purchases/downloads that run natively on Mac too, but history still does not sync between the iPhone and Mac copies. For cross-device chat history, the practical approach is to run Open WebUI on a home Mac and access it from both iPhone and Mac browsers — Open WebUI stores chat history server-side.',
          },
          {
            q: 'Are these apps available outside the App Store?',
            a: 'PocketPal AI is open-source and can be built from source via Xcode, but the App Store build is the standard distribution. LLM Farm is the exception that now requires building from source — it is currently not on the App Store or TestFlight (the README says "temporarily unavailable"). Private LLM, Locally AI, Google AI Edge Gallery, and MLC Chat are App Store only. In the EU, alternative app marketplaces exist under the DMA, but which apps they offer is up to each developer, so install from the developer\'s official channel; none of these apps needs one.',
          },
          {
            q: 'Do any of them require jailbreak?',
            a: 'No. PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat, and Apple Intelligence all run on stock iOS. Building LLM Farm from source in Xcode also does not require jailbreak — it uses standard developer sideloading, not a jailbreak exploit. Jailbreaking is not required and not recommended for any of these apps.',
          },
          {
            q: 'Can I use local AI in iOS Shortcuts?',
            a: 'Yes, via Private LLM (its Shortcuts actions), Locally AI (a free Shortcuts action), or Apple Intelligence (the "Use Model" action, iOS 18.4+, expanded in iOS 26). PocketPal AI, Google AI Edge Gallery, and MLC Chat do not mention Shortcuts actions. Among the apps compared here, Locally AI is the only free option that lists both Shortcuts support and access to Apple\'s own on-device model.',
          },
          {
            q: 'How does local AI compare to the ChatGPT app on iPhone?',
            a: 'On-device models (Phi-4 Mini, Llama 3.2 3B) remain meaningfully behind frontier cloud models for complex reasoning, broad world knowledge, and multimodal tasks, but are faster on simple queries (no network round-trip) and, per each app\'s documentation, keep chat on the device. The honest tradeoff: local AI for routine and private tasks; ChatGPT or another cloud app for occasional hard questions. Many users in 2026 keep both and choose per query.',
          },
          {
            q: 'Is LLM Farm still safe to use if it is no longer on the App Store?',
            a: 'The source code is public on GitHub and still receives issue activity into 2026, but the last release (1.4.3) was on 27 January 2025 and the last code push on 30 January 2026, so it may be unmaintained. Built from source and sideloaded, it is also no longer reviewed by Apple\'s App Store process. If you do not specifically need its mirostat sampling controls, PocketPal AI covers the same free/flexible/open-source use case while staying on the App Store with Apple\'s standard app review.',
          },
          {
            q: 'Which of these iPhone apps are free?',
            a: 'PocketPal AI is free (MIT license) with optional in-app purchases for premium Pals and "PocketPal Plus". Locally AI and Google AI Edge Gallery are free with no in-app purchases listed. MLC Chat is free. LLM Farm is free but must be built from source. Private LLM is $4.99 one-time with no in-app purchases listed. Apple Intelligence is built into iOS. Prices were read from the US App Store on 2026-10-23 and can differ by country.',
          },
          {
            q: 'Can the iPhone Duo or iPhone 18 Pro run a local LLM offline?',
            a: 'In principle yes: both use Apple\'s A20 Pro chip, and the apps in this guide run on any iPhone that meets their iOS minimum. What decides the model size is RAM, and Apple\'s iPhone 18 Pro and iPhone Duo pages do not state a RAM figure; press reports put the iPhone 18 Pro at 12 GB, which is unconfirmed. PromptQuorum has no measured speeds for either phone. Install PocketPal AI and run its built-in benchmark to see what your phone actually does.',
          },
          {
            q: 'Do these apps work on iPad?',
            a: 'Yes for most. PocketPal AI (iPadOS 15.1+, full iPad support per its README), Private LLM (iPadOS 17.0+), and Locally AI (iPadOS 18.1+) list iPad support. The Google AI Edge Gallery listing requires iOS 17.0 or later; check its page for your iPad. As on iPhone, RAM decides which models fit. For iPad-specific advice see [How to Run AI on a Tablet](/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: 'Why did LLM Farm disappear from the App Store?',
            a: 'The project README says: "The app is temporarily unavailable in TestFlight and Appstore." PromptQuorum could not find a public reason for the removal, so any explanation you read elsewhere is unconfirmed (see the [LLM Farm review](/power-local-llm/llm-farm-review)). The source code is still public, but the last release was 1.4.3 on 27 January 2025. For a free, App Store-installable alternative, use PocketPal AI or Locally AI.',
          },
          {
            q: 'Is there an Ollama app for iPhone?',
            a: 'Ollama\'s download page lists macOS, Windows, and Linux, and no iPhone app. To use Ollama or LM Studio models from an iPhone, run the server on a Mac or PC and connect from a client app; Locally AI offers LM Link, which LM Studio describes as an encrypted connection to LM Studio on a Mac. For models that run entirely on the phone, use the apps in this guide.',
          },
          {
            q: 'Should I download Gemma 4 or Phi-4 Mini?',
            a: 'PromptQuorum has no head-to-head benchmark of the two on iPhone. Facts that help: Gemma 4 E2B and E4B are Google\'s phone-sized models (about 2.58 GB and 3.65 GB as LiteRT-LM files in Google AI Edge Gallery; Locally AI also lists Gemma 4), while Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) is the model the speed figures in this guide use. On an 8 GB iPhone try both against your own prompts and compare tokens/sec in PocketPal AI\'s benchmark; on a 6 GB iPhone stay with 1.7B-class models.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — PromptQuorum\'s full review of the free open-source default.',
          '[Private LLM Review](/power-local-llm/private-llm-review) — the paid option with Siri and Shortcuts.',
          '[Locally AI Review](/power-local-llm/locally-ai-review) — the free MLX app from the LM Studio team.',
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s free Gemma 4 app.',
          '[MLC Chat Review](/power-local-llm/mlc-chat-review) and [LLM Farm Review](/power-local-llm/llm-farm-review) — the two apps flagged stale in this guide.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — sister article covering Android equivalents (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[How to Run AI on a Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — adjacent platform guide for tablet readers.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — model-side companion for picking what to run on these apps.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — broader model authority covering all hardware tiers, not just mobile.',
          '[Build a Local Voice Assistant on Your Phone: Whisper + Local LLM](/power-local-llm/voice-assistant-local-mobile-offline) — extends these apps with offline voice input/output.',
          '[Best Local AI App for Low-End PCs](/power-local-llm/best-local-ai-app-low-end-pc) — desktop alternative for users who want a more capable home machine to remote-connect to.',
          '[Enclave AI Review 2026](/power-local-llm/enclave-ai-review) — a closer look at Enclave AI, an on-device AI assistant app for iPhone, iPad, and Mac with document interaction and Siri/Shortcuts automation.',
          '[Local LLM Software Directory 2026](/directory) — directory of every local-LLM tool worth knowing across all platforms.',
          '[Melhores Apps LLM Local para iPhone 2026 (Português)](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — versão em português deste guia',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-23',
    last_full_refresh: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'Lokale KI auf dem iPhone: Die besten Local-LLM-Apps 2026 (ohne WLAN)',
    seoTitle: 'Lokale KI auf dem iPhone: Die besten LLM-Apps 2026',
    intro:
      'Sechs iPhone-Optionen führen 2026 echte LLMs vollständig auf dem Gerät aus: PocketPal AI, Private LLM, Locally AI (von LM Studio), Google AI Edge Gallery, MLC Chat und Apple Intelligence (systemintegriert). Der Chat funktioniert nach dem Download des Modells ohne WLAN. Dieser Leitfaden vergleicht sie nach Kosten, Modellbibliothek, iOS-Integration, Datenschutz und Pflegestand – mit Richtwerten zur Geschwindigkeit auf iPhone 16 Pro und iPhone 17 Pro sowie einer RAM-Übersicht, die jetzt auch das iPhone 18 Pro enthält – und erklärt, warum LLM Farm aus dem Ranking gefallen ist.',
    metaDescription:
      'Lokale KI auf dem iPhone 2026: PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery und MLC Chat im Vergleich. Kosten, Datenschutz, RAM je iPhone.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-de.webp',
    twitterDescription:
      'Lokale KI auf dem iPhone 2026: PocketPal AI (kostenlos), Private LLM ($4.99, Siri + Kurzbefehle), Locally AI (LM Studio, MLX), Google AI Edge Gallery (Gemma 4). Alle laufen offline nach dem Download.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 4B',
    ],
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM von Apple nicht angegeben)',
      'iPhone Duo (A20 Pro, RAM von Apple nicht angegeben)',
      'iPhone 17 Pro (A19 Pro, 12 GB RAM)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 16e (A18, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'iPhone-Nutzer, die KI privat auf dem Gerät ausführen möchten – ohne Cloud-Abonnement. Dazu gehören Reisende, datenschutzbewusste Nutzer und Entwickler, die On-Device-Inferenz erkunden.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'Local-LLM-iPhone-App',
    targetKeywords: [
      'iphone local llm app',
      'llm auf iphone offline ausführen',
      'pocketpal ai iphone',
      'private llm app',
      'welche app für ios',
      'llm farm ios',
      'iphone ki ohne wlan',
      'lokale ki iphone',
      'google ai edge gallery ios',
      'locally ai vs pocketpal',
      'ollama für ios',
    ],
    leadAnswerBlock:
      '**Für die meisten iPhone-Nutzer 2026: PocketPal AI aus dem App Store installieren und ein kleines Modell wie Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB) herunterladen.** Die App ist kostenlos nutzbar (optionale In-App-Käufe für Premium-Inhalte), quelloffen (MIT) und läuft auf dem iPhone 15 Pro und neueren Modellen (8 GB+ RAM) mit grob 10–15 Tokens/Sek. (Richtwert) auf dem iPhone 16 Pro für den Alltag; auf einem iPhone mit 6 GB wie dem iPhone 14 Pro verwenden Sie stattdessen ein 1.7B-Modell wie Qwen3 1.7B. Für Siri- und Kurzbefehle-Integration ist Private LLM die kostenpflichtige Option ($4.99 einmalig, iPhone, iPad und Mac). Locally AI – vom LM-Studio-Team entwickelt – ist die kostenlose App auf Basis von Apple MLX, mit Kurzbefehle-Unterstützung und Zugriff auf Apples On-Device-Foundation-Modell. Google AI Edge Gallery ist Googles kostenlose App für die Gemma-4-Modelle, mit Agent Skills und Denkmodus. Neuere kleine Modelle – Gemma 4 E2B/E4B und Qwen3.5 – gibt es ebenfalls in diesen Apps (siehe Modelle nach iPhone-Modell). MLC Chat bleibt die Metal-Referenz-App, doch der iPhone-Build wurde seit September 2024 nicht aktualisiert. LLM Farm ist derzeit weder im App Store noch über TestFlight verfügbar (die README nennt die App „vorübergehend nicht verfügbar") und nur per Quellcode installierbar. Apple Intelligence führt ebenfalls Modelle auf dem Gerät aus, ist aber systemintegriert und keine Chat-App – es ergänzt diese Apps, statt mit ihnen zu konkurrieren.',
    quickAnswerTop: {
      de: {
        question: 'Was ist die beste Local-LLM-App für das iPhone 2026?',
        answer:
          'PocketPal AI ist die empfohlene kostenlose Standard-App für die meisten iPhone-Nutzer – quelloffen (MIT), Installation über den App Store, unterstützt jedes GGUF-Modell von Hugging Face und führt Phi-4 Mini (3,8B) mit grob 10–15 Tokens/Sek. (Richtwert) auf dem iPhone 16 Pro aus. Private LLM ist die kostenpflichtige Option ($4.99 einmalig, iPhone + iPad + Mac) mit Kurzbefehle- und Siri-Integration. Locally AI, entwickelt vom LM-Studio-Team, ist die kostenlose Apple-MLX-Option mit Kurzbefehle-Unterstützung und Zugriff auf Apples On-Device-Foundation-Modell. Google AI Edge Gallery ist Googles kostenlose App für Gemma 4. MLC Chat ist Metal-beschleunigt, doch der iPhone-Build ruht seit September 2024. Apple Intelligence führt ebenfalls On-Device-Modelle aus, ist aber systemintegriert und ergänzt diese Apps, statt sie zu ersetzen.',
        bullets: [
          'PocketPal AI – kostenlos, quelloffen (MIT), App Store, v1.20.1 (19. Okt. 2026). Empfohlene Standard-App für die meisten Nutzer. Unterstützt jedes GGUF-Modell. Optionale In-App-Käufe für Premium-Inhalte.',
          'Private LLM – $4.99 einmalig (iPhone + iPad + Mac), v1.9.16 (14. Sep. 2026). Kostenpflichtige Option. Kurzbefehle- + Siri-Integration.',
          'Locally AI – kostenlos, vom LM-Studio-Team, v1.66.0 (15. Okt. 2026). Apple-MLX-Engine, Kurzbefehle-Unterstützung, Zugriff auf Apple Foundation Models.',
          'Google AI Edge Gallery – kostenlos, von Google, v1.0.13 (8. Okt. 2026). Gemma 4, Agent Skills, Denkmodus, Bild- und Audioeingabe.',
          'MLC Chat – kostenlos, MLC-LLM-Projekt. Metal-beschleunigt, aber die iPhone-App hat seit v1.6 (27. Sep. 2024) kein Update erhalten – möglicherweise nicht mehr gepflegt.',
          'Apple Intelligence – systemintegriert, keine eigenständige App. Das On-Device-Modell mit ~3B Parametern wird von Mail, Nachrichten und Notizen genutzt.',
          'Empfohlenes Modell für iPhone 16 Pro / 17 Pro: Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB) – läuft mit ~10–15 Tokens/Sek. Neuere Optionen: Gemma 4 E2B/E4B, Qwen3.5 4B.',
          'Ältere iPhones (14 Pro): Qwen3 1.7B oder SmolLM 2 1.7B – passt in 6 GB RAM und erzeugt ~15–20 Tokens/Sek.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Kurzübersicht', anchor: '#quick-facts' },
      { label: 'Welche App für iOS sollten Sie zuerst installieren?', anchor: '#which-app' },
      { label: 'iPhone-App-Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'PocketPal AI: Kostenlose Open-Source-Standardlösung', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: Kostenpflichtige Option mit iOS-Integration', anchor: '#private-llm' },
      { label: 'Locally AI: Kostenlose MLX-App von LM Studio', anchor: '#locally-ai' },
      { label: 'Google AI Edge Gallery: Googles kostenlose Gemma-4-App', anchor: '#google-ai-edge-gallery' },
      { label: 'MLC Chat: Apple-Silicon-Optimierung', anchor: '#mlc-chat' },
      { label: 'LLM Farm: Nicht im App Store, Quellcode weiterhin verfügbar', anchor: '#llm-farm' },
      { label: 'Apple Intelligence: Systemintegrierte On-Device-KI', anchor: '#apple-intelligence' },
      { label: 'Modelle nach iPhone-Modell', anchor: '#models-by-tier' },
      { label: 'Akkuverbrauch und thermisches Throttling', anchor: '#battery-heat' },
      { label: 'iOS Kurzbefehle, Siri und Sideloading', anchor: '#ios-integration' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weitere Apps und ausführliche Tests', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**PocketPal AI ist die empfohlene kostenlose Standard-App.** Quelloffen (MIT), Installation über den App Store, unterstützt jedes GGUF-Modell von Hugging Face. Der lokale Chat braucht kein Konto; Premium-Pals und „PocketPal Plus" sind optionale In-App-Käufe. Führt Phi-4 Mini mit ~10–15 Tokens/Sek. auf dem iPhone 16 Pro aus. Empfohlener Einstiegspunkt für die meisten iPhone-Nutzer.',
          '**Private LLM ist die kostenpflichtige Option ($4.99 einmalig, kein Abo).** Ein Kauf deckt iPhone, iPad und Mac ab, und Family Sharing erstreckt sich auf bis zu sechs Personen. Kuratierte Modellbibliothek; laut Entwickler ist die App in Siri und Kurzbefehle eingebunden.',
          '**Locally AI ist die kostenlose MLX-basierte Alternative, entwickelt vom LM-Studio-Team.** Führt Llama-, Gemma- (inkl. Gemma 4), Qwen- und DeepSeek-Modelle auf Apple MLX aus, arbeitet mit iOS Kurzbefehlen zusammen und kann Apples eigenes On-Device-Foundation-Modell als Chat-Oberfläche bereitstellen.',
          '**Google AI Edge Gallery ist Googles kostenlose Gemma-4-App für das iPhone.** Denkmodus, Agent Skills und Bild-/Audioeingabe; die Modelle laufen im LiteRT-LM-Format, nicht als GGUF. Google beschreibt die App weiterhin als in aktiver Entwicklung.',
          '**MLC Chat ist Metal-beschleunigt, ruht aber auf dem iPhone.** Der App-Store-Build wurde seit v1.6 am 27. September 2024 nicht aktualisiert, daher liegt die Modellbibliothek vor Phi-4 Mini und Gemma 3. Die MLC-LLM-Engine selbst ist auf GitHub weiterhin aktiv.',
          '**LLM Farm ist derzeit weder im App Store noch über TestFlight verfügbar.** Die eigene README nennt die App „vorübergehend nicht verfügbar". Sie bleibt quelloffen und über Xcode aus dem Quellcode baubar, doch der letzte Release war 1.4.3 im Januar 2025 und der letzte Code-Push erfolgte am 30. Januar 2026.',
          '**Apple Intelligence ist On-Device-KI, aber keine eigenständige App.** Apples ~3B-Foundation-Modell treibt Systemfunktionen an (Schreibwerkzeuge, Smart Reply, Benachrichtigungs-Zusammenfassungen). Seit iOS 26 können Drittanbieter-Apps es über das Foundation-Models-Framework aufrufen, und Kurzbefehle können es über die Aktion „Modell verwenden" ansprechen.',
          '**Empfohlenes Modell für iPhone 16 Pro / 17 Pro: Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB).** Gemma 4 E2B/E4B und Qwen3.5 4B sind neuere Alternativen, zu denen PromptQuorum noch keine Geschwindigkeitswerte hat. Ältere iPhones mit 6 GB RAM (iPhone 14 Pro): Qwen3 1.7B oder SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzübersicht',
        items: [
          '**Verglichene Apps:** PocketPal AI, Private LLM, Locally AI (von LM Studio), Google AI Edge Gallery, MLC Chat, Apple Intelligence (System) – sowie LLM Farm, derzeit nicht im App Store (README: „vorübergehend nicht verfügbar").',
          '**Letzte Upstream-Updates (geprüft am 23. Oktober 2026):** PocketPal AI v1.20.1 (19. Okt. 2026) · Locally AI v1.66.0 (15. Okt. 2026) · Google AI Edge Gallery v1.0.13 (8. Okt. 2026) · Private LLM v1.9.16 (14. Sep. 2026) · MLC Chat iPhone-App v1.6 (27. Sep. 2024 – veraltet) · LLM Farm Release 1.4.3 (27. Jan. 2025), letzter Code-Push 30. Jan. 2026 – veraltet.',
          '**Referenzgeräte für die Geschwindigkeitswerte:** iPhone 16 Pro (A18 Pro, 8 GB RAM) und iPhone 17 Pro (A19 Pro, 12 GB RAM). Die Geschwindigkeitswerte sind grobe Orientierungswerte, keine Messungen von PromptQuorum. Für das iPhone 18 Pro, das 18 Pro Max und das iPhone Duo (A20 Pro) gibt es hier keine Geschwindigkeitswerte.',
          '**Inference-Engines:** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), MLC LLM mit Metal (MLC Chat), Google LiteRT-LM (Google AI Edge Gallery), proprietäre On-Device-Runtime (Private LLM, Apple Intelligence).',
          '**Mindest-iPhone für größere Modelle:** iPhone 14 Pro (A16, 6 GB RAM) für 1.7B; jedes 8-GB+-iPhone (15 Pro, 16er-Serie, 16e, 17er-Serie, 18 Pro) für 3B–4B.',
          '**Empfohlene kostenlose App:** PocketPal AI – App Store, quelloffen, Modellflexibilität.',
          '**Kostenpflichtige Option:** Private LLM – $4.99 einmalig (iPhone + iPad + Mac), Kurzbefehle- + Siri-Unterstützung.',
          '**Offline:** Nach dem Download des Modells funktioniert der On-Device-Chat in allen sechs ohne WLAN; Funktionen, die Live-Daten abrufen (zum Beispiel die Wikipedia- und Karten-Skills der Google AI Edge Gallery oder das optionale LM Link von Locally AI), brauchen eine Verbindung. Laut README oder Eintrag der jeweiligen App gibt es für den On-Device-Chat keine Cloud-Aufrufe; Apple Intelligence kann optional Private Cloud Compute nutzen.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Welche App für iOS sollten Sie zuerst installieren?',
        content:
          '**Für die meisten Nutzer: PocketPal AI aus dem App Store, dann Phi-4 Mini (3,8B Q4_K_M) herunterladen – oder ein neueres kleines Modell wie Gemma 4 E2B/E4B oder Qwen3.5 4B.** Diese Kombination funktioniert auf dem iPhone 15 Pro und neueren Modellen (8 GB+ RAM); auf einem iPhone mit 6 GB wie dem iPhone 14 Pro laden Sie stattdessen ein 1.7B-Modell wie Qwen3 1.7B herunter (siehe Modelle nach iPhone-Klasse). Sie kostet für den Chat nichts und liefert brauchbare Ergebnisse für alltäglichen Chat, Zusammenfassungen und schnelles Schreiben. Wählen Sie eine andere App nur, wenn Sie einen spezifischen Bedarf haben, den PocketPal AI nicht abdeckt.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-de.webp',
        imageCaption: 'Welche lokale KI-App für das iPhone: Entscheidungstabelle vom kostenlosen PocketPal AI bis zum Siri-fähigen Private LLM',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Für die meisten iPhone-Nutzer 2026 gilt: PocketPal AI (kostenlos, App Store) installieren und Phi-4 Mini oder ein neueres kleines Modell wie Gemma 4 E2B herunterladen – damit sind alltäglicher Chat, Zusammenfassungen und Textentwürfe abgedeckt – mit einem 3B–4B-Modell auf iPhones mit 8 GB+ und einem 1.7B-Modell auf iPhones mit 6 GB.',
          },
          {
            type: 'plain-terms',
            text: 'Sechs iPhone-Optionen führen KI 2026 vollständig auf Ihrem Telefon aus. PocketPal AI ist der empfohlene kostenlose Einstiegspunkt: einmal installieren, eine 2,7-GB-Modelldatei herunterladen, und Sie haben einen privaten Chat-Assistenten, der auch in der U-Bahn ohne WLAN funktioniert. Private LLM ist die kostenpflichtige Option, wenn Siri mit dem lokalen Modell sprechen soll. Locally AI vom LM-Studio-Team ist die kostenlose moderne Alternative mit Kurzbefehle-Unterstützung, und Google AI Edge Gallery ist Googles kostenlose App für die Gemma-4-Modelle. Der iPhone-Build von MLC Chat wird nicht mehr aktualisiert. Apple Intelligence ist in iOS integriert, aber keine Chat-App. PocketPal AI passt zu den meisten Anwendungsfällen.',
          },
        ],
        decisionBlock: {
          title: 'Entscheidungshilfe: Welche lokale KI-App für das iPhone?',
          localIf: [
            'Sie möchten eine kostenlose Chat-KI, die offline funktioniert → PocketPal AI',
            'Sie möchten, dass Siri mit Ihrem lokalen Modell spricht → Private LLM',
            'Sie möchten eine kostenlose MLX-App mit Kurzbefehlen und Zugriff auf Apple Foundation Models → Locally AI',
            'Sie möchten Googles eigenes Gemma 4 mit Denkmodus und Agent Skills → Google AI Edge Gallery',
            'Sie möchten mit der MLC-LLM-Toolchain experimentieren und akzeptieren einen iPhone-Build ohne Update seit September 2024 → MLC Chat',
            'Sie benötigen nur Schreibhilfe in Mail / Nachrichten / Notizen → Apple Intelligence (integriert)',
          ],
          cloudIf: [
            'Sie benötigen 70B+-Modellqualität (Llama 3.3 70B, GPT-5.5-Niveau) → Cloud oder Remote-Verbindung zu einem Heimrechner',
            'Sie benötigen speziell GPT-5.5, Claude Opus oder Gemini → Cloud-Apps (diese sind lokal nicht verfügbar)',
            'Sie benötigen Echtzeit-Vision oder multimodale Ausgabe über Text hinaus → Cloud (On-Device-Multimodal ist 2026 begrenzt)',
          ],
          quick: [
            'Kostenlos + passt für die meisten Nutzer: PocketPal AI',
            'Kostenpflichtig + iOS-native Integration: Private LLM',
            'Kostenlos + LM-Studio-Ökosystem: Locally AI',
            'Kostenlos + Google Gemma 4: Google AI Edge Gallery',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie zuerst PocketPal AI, auch wenn Sie später für Private LLM bezahlen möchten. Testen Sie damit, ob die On-Device-Inferenz auf Ihrem iPhone schnell genug für Ihren Anwendungsfall ist. Wenn ja, entscheiden Sie, ob die Kurzbefehle- und Siri-Integration von Private LLM die $4.99 wert ist. Wenn nein, haben Sie die $4.99 gespart, bevor Sie gezahlt haben. PocketPal AI hat außerdem einen eingebauten Benchmark, der Tokens/Sek. und Speicherbedarf auf Ihrem eigenen iPhone misst – nutzen Sie ihn, statt irgendeiner Tabelle zu vertrauen, auch der folgenden.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone-App-Vergleichstabelle',
        content:
          '**Die sechs Optionen unterscheiden sich in drei Dimensionen, die für die meisten Nutzer entscheidend sind: Kosten, Modellflexibilität und iOS-Integration.** Geschwindigkeitsunterschiede existieren, sind aber geringer als der Abstand zwischen diesen Apps und einem Cloud-LLM. Preise und Versionen wurden am 23. Oktober 2026 aus den US-App-Store-Einträgen und Projektseiten gelesen.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-de.webp',
        imageCaption: 'Vergleich lokaler LLM-Apps für das iPhone: Kosten, Geschwindigkeit und Integration von PocketPal AI, Private LLM und mehr',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI ist die empfohlene kostenlose Standard-App, Private LLM die kostenpflichtige Option, Locally AI die kostenlose MLX-Wahl vom LM-Studio-Team, Google AI Edge Gallery Googles kostenlose Gemma-4-App, MLC Chat auf dem iPhone inaktiv und Apple Intelligence systemintegriert.',
          },
          {
            type: 'plain-terms',
            text: 'Die Wahl hängt meist von drei Fragen ab: Möchten Sie für Siri-Integration zahlen (Private LLM), möchten Sie das LM-Studio-Ökosystem mit Kurzbefehlen kostenlos (Locally AI), oder möchten Sie Googles eigenes Gemma 4 mit Denkmodus (Google AI Edge Gallery)? Für alles andere ist PocketPal AI die Standardwahl. Die Geschwindigkeitswerte in der Tabelle sind Richtwerte für Q4_K_M-Quantisierung – den Standard für mobile Inferenz 2026 –, keine Messungen von PromptQuorum.',
          },
        ],
        columns: ['App', 'Preis', 'Tok./Sek. (Phi-4 Mini, 16 Pro)', 'Datenschutz', 'Am besten geeignet für'],
        rows: [
          { 'App': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)', 'Preis': 'Kostenlos (MIT) + optionale In-App-Käufe', 'Tok./Sek. (Phi-4 Mini, 16 Pro)': '~10–15', 'Datenschutz': 'On-Device-Chat, kein Konto (README)', 'Am besten geeignet für': 'Kostenlose Standard-App für die meisten' },
          { 'App': '[Private LLM](https://privatellm.app)', 'Preis': '$4.99 einmalig', 'Tok./Sek. (Phi-4 Mini, 16 Pro)': 'Keine Angabe', 'Datenschutz': 'On-Device; keine Konten oder Tracking (Entwickler)', 'Am besten geeignet für': 'Kurzbefehle + Siri-Integration' },
          { 'App': '[Locally AI](https://lmstudio.ai/locally)', 'Preis': 'Kostenlos (LM-Studio-Team)', 'Tok./Sek. (Phi-4 Mini, 16 Pro)': 'k. A. – MLX-Katalog (kein Phi-4)', 'Datenschutz': 'On-Device; keine Datenerhebung (Eintrag)', 'Am besten geeignet für': 'MLX + Kurzbefehle, LM-Studio-Anbindung' },
          { 'App': '[Google AI Edge Gallery](https://apps.apple.com/app/id6749645337)', 'Preis': 'Kostenlos (Google)', 'Tok./Sek. (Phi-4 Mini, 16 Pro)': 'k. A. – LiteRT-LM, Gemma 4', 'Datenschutz': 'On-Device nach Modell-Download (Eintrag)', 'Am besten geeignet für': 'Gemma 4, Denkmodus, Agent Skills' },
          { 'App': '[MLC Chat](https://llm.mlc.ai)', 'Preis': 'Kostenlos (Open Source)', 'Tok./Sek. (Phi-4 Mini, 16 Pro)': 'k. A. – Bibliothek vor Phi-4', 'Datenschutz': 'Lokale Inferenz (Projektdoku; ungeprüft)', 'Am besten geeignet für': 'MLC-LLM-Toolchain (iOS-App inaktiv)' },
          { 'App': '[LLM Farm](https://github.com/guinmoon/LLMFarm)', 'Preis': 'Kostenlos (nur Quellcode)', 'Tok./Sek. (Phi-4 Mini, 16 Pro)': 'Keine Angabe', 'Datenschutz': 'Lokale Inferenz (Projektdoku; ungeprüft)', 'Am besten geeignet für': 'Entwickler (nicht im App Store, veraltet)' },
          { 'App': '[Apple Intelligence](https://www.apple.com/apple-intelligence/)', 'Preis': 'Kostenlos (in iOS integriert)', 'Tok./Sek. (Phi-4 Mini, 16 Pro)': 'k. A. (Systemfunktion)', 'Datenschutz': 'Lokal + opt-in Private Cloud Compute (Apple)', 'Am besten geeignet für': 'Hilfe in Mail, Nachrichten, Notizen' },
        ],
        note:
          '**Hinweis zur Apple Neural Engine (ANE) im Vergleich zu Metal und MLX:** PocketPal AI und LLM Farm verwenden llama.cpp mit Metal Performance Shadern, die auf der GPU laufen. MLC Chat verwendet MLC LLM mit tieferer Metal-Optimierung, die das MLC-LLM-Projekt auf gleicher Hardware als schneller beschreibt als llama.cpp-basierte Apps (Projektangabe; von PromptQuorum nicht nachgemessen). Locally AI nutzt Apple MLX, Apples eigenes Open-Source-Array-Framework, das auf Apple Silicon eine ähnliche GPU-Effizienz erreicht. Google AI Edge Gallery führt Gemma 4 über Googles LiteRT-LM-Runtime aus. Apple Intelligence nutzt die ANE speziell für das systemintegrierte ~3B-Modell – energieeffizienter, aber weniger flexibel als Metal-basierte Inferenz. Seit iOS 26 können Drittanbieter-Apps dieses Systemmodell über das Foundation-Models-Framework aufrufen – genau das tut Locally AI –, aber eigene GGUF/MLX-Modelle können die ANE weiterhin nicht direkt ansprechen. Apple gibt an, der A20 Pro im iPhone 18 Pro habe eine Dual-16-Core-Neural-Engine mit doppelter Rechenleistung wie zuvor; das ist eine Apple-Angabe, und PromptQuorum hat nicht gemessen, was sie für diese Apps bedeutet.',
        callouts: [
          {
            type: 'tip',
            text: 'Die Tokens/Sek.-Werte sind grobe Orientierungswerte für Q4_K_M-Modelle auf aktuellen iPhones, keine Messungen von PromptQuorum und nicht an eine App-Version oder ein Testdatum gebunden. Sie gehen von Q4_K_M-Quantisierung (Standard für mobile Inferenz 2026) und einem inaktiven iPhone ohne andere ressourcenintensive Apps aus. Hintergrund-Apps können den Durchsatz spürbar senken, und das iPhone 17 Pro läuft in der Regel schneller als das iPhone 16 Pro. Messen Sie Ihr eigenes Telefon mit dem eingebauten Benchmark von PocketPal AI.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: Kostenlose Open-Source-Standardlösung',
        content:
          '**PocketPal AI ist der empfohlene Einstiegspunkt für die meisten iPhone-Nutzer 2026.** Die App ist kostenlos nutzbar, quelloffen (MIT; GitHub: [a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)), im App Store verfügbar und unterstützt jedes GGUF-Modell von Hugging Face. Unter der Haube verwendet sie llama.cpp mit Apple-Silicon-Optimierungen. Ausführlicher Test: [PocketPal AI Review](/de/power-local-llm/pocketpal-ai-review).',
        items: [
          '**Was sie ist:** eine iOS-/iPadOS- und Android-App, die GGUF-Modelle lokal mit llama.cpp ausführt, veröffentlicht von Gooya UG. Laut README werden Prompts, Antworten und Dokumente nicht auf externe Server hochgeladen; der Chat braucht kein Konto.',
          '**Version und letztes Update:** v1.20.1, veröffentlicht am 19. Oktober 2026 ([GitHub-Release](https://github.com/a-ghorbani/pocketpal-ai/releases)); der App-Store-Eintrag zeigt dieselbe Version. Letzte Releases: v1.19.0 (4. Okt.), v1.20.0 (14. Okt.), v1.20.1 (19. Okt. 2026) – keine Veraltet-Warnung.',
          '**Installation:** App Store → „PocketPal AI". Kostenloser Download mit optionalen In-App-Käufen (Premium-Pals und „PocketPal Plus"). Erfordert iOS/iPadOS 15.1 oder neuer; nicht die iOS-Version, sondern der RAM bestimmt die nutzbare Modellgröße. Seit v1.20.0 bietet die App außerdem optional „Mit Apple anmelden" und das Löschen des Kontos.',
          '**Modell hinzufügen:** In der App auf „Modelle" tippen → „Von Hugging Face hinzufügen" → suchen (z. B. „phi-4-mini-instruct-Q4_K_M") → zum Herunterladen tippen. Das Modell wird im lokalen Speicher der App gespeichert (~2,7 GB für Phi-4 Mini Q4).',
          '**Generierungsgeschwindigkeit (iPhone 16 Pro, Richtwerte):** Phi-4 Mini ~10–15 Tokens/Sek., Llama 3.2 3B ~12–18 Tokens/Sek., Gemma 3 4B ~7–10 Tokens/Sek., Qwen3 1.7B ~18–24 Tokens/Sek. Das sind grobe Orientierungswerte, keine Messungen von PromptQuorum – nutzen Sie den eingebauten Benchmark, der Tokens/Sek. und Speicher auf Ihrem eigenen iPhone misst.',
          '**Weitere Funktionen:** Pals (eigene Assistenten), Sprachausgabe auf dem Gerät, Talents (Rechner- und Datum-/Uhrzeit-Werkzeuge für leistungsfähige Modelle) und ein Hugging-Face-Modellbrowser, der gesperrte (gated) Modelle mit Zugriffstoken unterstützt.',
          '**Am besten geeignet für:** Nutzer, die eine kostenlose, über den App Store installierbare Chat-App ohne Konto wünschen, die jedes Community-GGUF-Modell unterstützt.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die Modellauswahl in PocketPal AI hat einen Filter „Empfohlen", der laut Dokumentation der App Modelle zeigt, die in den RAM Ihres Geräts passen. Prüfen Sie ihn an Ihrem eigenen Telefon – ein zu großes Modell kann dazu führen, dass iOS die App mitten in der Antwort beendet.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: Kostenpflichtige Option mit iOS-Integration',
        content:
          '**Private LLM ist in diesem Leitfaden die kostenpflichtige iPhone-Option ($4.99 einmalig, kein Abo).** Die App gibt es nur im App Store, sie wird mit einer kuratierten Bibliothek optimierter Modelle ausgeliefert. Ihr Unterscheidungsmerkmal in diesem Leitfaden ist die iOS-Integration: Laut Entwickler ist sie direkt in Siri und die Kurzbefehle-App eingebunden. Ausführlicher Test: [Private LLM Review](/de/power-local-llm/private-llm-review).',
        items: [
          '**Was sie ist:** eine kostenpflichtige iOS-App mit kuratierter Modellbibliothek und tiefer iOS-Integration. Verwendet eine proprietäre, für Apple Silicon optimierte On-Device-Runtime.',
          '**Installation:** App Store → „Private LLM - Local AI Chat" (Numen Technologies Limited). Einmalkauf $4.99 (US-App-Store-Preis, in Deutschland kann der Preis in € abweichen; kein Abo, der Eintrag nennt keine In-App-Käufe). Erfordert iOS/iPadOS 17.0 oder neuer auf einem A12-Bionic-Chip oder neuer.',
          '**Version und letztes Update:** v1.9.16, veröffentlicht am 14. September 2026 (App-Store-Versionsverlauf); die vorherige Version 1.9.15 erschien am 9. Juli 2026. Releases erscheinen alle zwei bis drei Monate – unter der Drei-Monats-Grenze, daher keine Veraltet-Warnung.',
          '**Kuratierte Modellbibliothek:** [privatellm.app](https://privatellm.app) wirbt mit über 140 lokalen Modellen für iPhone, iPad und Mac und nennt Familien wie Llama, Qwen3, Gemma 3 und Phi 4; die Teilmenge, die auf ein iPhone passt, ist kleiner. Weniger flexibel als PocketPal AI, aber die Modelle sind vorab für die Runtime der App optimiert.',
          '**Kurzbefehle:** Laut Entwickler ist Private LLM in die Kurzbefehle-App eingebunden und kann Antworten an andere Apps weiterreichen, die die x-callback-url-Spezifikation unterstützen. Nützlich, um lokale KI per Taste auf dem Home-Bildschirm oder über NFC-Tags auszulösen.',
          '**Siri-Integration:** Der Entwickler führt eine Siri-Integration auf; ein an das On-Device-Modell geleiteter Prompt funktioniert ohne Internetverbindung (Internet wird nur für den ersten Modell-Download gebraucht).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Laut privatellm.app deckt ein Kauf für $4.99 iPhone, iPad und Mac ab, und der App-Store-Eintrag nennt bis zu sechs Familienmitglieder mit Family Sharing. Es sind weder ein Abo noch In-App-Käufe aufgeführt – der angezeigte Preis sind die Gesamtkosten. Der Entwickler gibt an, es gebe keine Konten, kein Tracking und keine Protokolle.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: Kostenlose MLX-App von LM Studio',
        content:
          '**Locally AI ist eine kostenlose Chat-App (laut Eintrag werden keine Daten erhoben) des LM-Studio-Teams (gelistet unter Element Labs Inc), die auf Apples eigenem MLX-Framework statt auf llama.cpp aufbaut.** Es ist die einzige App hier, die Apples On-Device-Foundation-Modell als Chat-Oberfläche bereitstellt. Ausführlicher Test: [Locally AI Review](/de/power-local-llm/locally-ai-review).',
        items: [
          '**Was sie ist:** eine iOS-/iPadOS-/macOS-App, die Apple MLX für die Inferenz nutzt, entwickelt vom Team hinter der Desktop-App LM Studio.',
          '**Installation:** App Store → „Locally AI". Kostenlos, keine In-App-Käufe aufgeführt, kein Konto erforderlich (laut Eintrag), läuft offline.',
          '**Version und letztes Update:** v1.66.0, veröffentlicht am 15. Oktober 2026 (App-Store-Versionsverlauf); 2026 etwa ein Release pro Monat – keine Veraltet-Warnung.',
          '**Modellbibliothek:** Llama 3.2, Gemma 2/3/4, Qwen 3 und 3.5, DeepSeek, LFM 2.5, Bonsai, Ministral 3 und Apple Foundation Models – ein breiterer und aktuellerer Katalog als der von MLC Chat.',
          '**iOS Kurzbefehle:** bietet eine Kurzbefehle-Aktion und entspricht damit der Automatisierungsunterstützung von Private LLM – zum Preis von null.',
          '**LM Link:** eine optionale Funktion, die sich über eine laut LM Studio Ende-zu-Ende-verschlüsselte Verbindung mit LM Studio auf einem Mac verbindet, sodass die iPhone-App bei Bedarf an ein größeres Modell auf einem Heimrechner übergeben kann.',
          '**Voraussetzungen:** iOS/iPadOS 18.1 oder neuer (macOS 26.0 oder neuer für die Mac-Version). Die Effizienzvorteile von Apple Silicon kommen auf dem iPhone 15 Pro und neuer am meisten zum Tragen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI ist die einzige App in diesem Leitfaden, die Apples eigenes On-Device-Foundation-Modell hinter ein normales Chat-Fenster setzt – nützlich, wenn Sie testen möchten, was das Modell von Apple Intelligence kann, ohne sich durch Menüs der Schreibwerkzeuge zu klicken. Für die GGUF-Flexibilität von Drittanbietern hat PocketPal AI weiterhin den größeren Modellkatalog.',
          },
        ],
      },
      googleAIEdgeGallery: {
        id: 'google-ai-edge-gallery',
        title: 'Google AI Edge Gallery: Googles kostenlose Gemma-4-App',
        content:
          '**Google AI Edge Gallery ist Googles kostenlose App, um die Gemma-4-Modelle auf dem Telefon auszuführen, und sie ist im iPhone-App-Store erhältlich.** Der Eintrag zeigt KI-Chat mit Denkmodus, Agent Skills, Bild- und Audioeingabe, Prompt Lab und Modell-Benchmarking. Google gibt an, die App befinde sich in aktiver Entwicklung. Ausführlicher Test: [Google AI Edge Gallery Review](/de/power-local-llm/google-ai-edge-gallery-review).',
        items: [
          '**Was sie ist:** Googles On-Device-KI-Showcase-App, aufgebaut auf Googles LiteRT-LM-Runtime. Kostenlos; es sind keine In-App-Käufe aufgeführt.',
          '**Installation:** App Store → „Google AI Edge Gallery". Erfordert iOS 17.0 oder neuer. Die Modelle werden separat in der App heruntergeladen.',
          '**Version und letztes Update:** v1.0.13, veröffentlicht am 8. Oktober 2026 (App-Store-Versionsverlauf). Die Unterstützung für Gemma 4 kam in v1.0.2 am 3. April 2026 – keine Veraltet-Warnung.',
          '**Modelle:** die Gemma-4-Familie (E2B und E4B sind die Varianten in Telefongröße; Google nennt die LiteRT-LM-Dateien mit etwa 2,58 GB und 3,65 GB), EmbeddingGemma 2 und FunctionGemma 270M. Modelle im LiteRT-LM-Format lassen sich auch von Hugging Face importieren.',
          '**Funktionen:** Denkmodus (nur Gemma-4-Modelle), Agent Skills (zum Beispiel Wikipedia-Abfrage und Karten, dazu Community-Skills), Bild-Fragen, Audio-Transkription, Prompt Lab und Modell-Benchmarking.',
          '**Einschränkungen:** nur LiteRT-LM-Modelle, kein GGUF oder MLX; der Eintrag erwähnt weder Kurzbefehle noch Siri; PromptQuorum hat dafür keine Geschwindigkeitswerte.',
          '**Am besten geeignet für:** Nutzer, die Googles eigenes Gemma 4 mit sichtbarem Denkmodus und Agent-Werkzeugen kostenlos nutzen möchten.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Google nennt für Gemma 4 E2B auf einem iPhone 17 Pro einen Spitzenspeicherbedarf von etwa 607 MB auf der CPU und 1.450 MB auf der GPU (Herstellerangaben laut Googles LiteRT-LM-Gemma-4-Seite; von PromptQuorum nicht nachgemessen). E2B ist der praktische Startpunkt für die meisten Telefone; E4B passt zu iPhones mit 8 GB+.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: Apple-Silicon-Optimierung',
        content:
          '**Veraltet-Warnung: Die iPhone-App MLC Chat hat seit Version 1.6 am 27. September 2024 kein Update erhalten (mehr als 13 Monate) und wird möglicherweise nicht mehr gepflegt – prüfen Sie das, bevor Sie sich darauf verlassen.** Das Repository der MLC-LLM-Engine selbst ist auf GitHub weiterhin aktiv (letzte Aktivität am 6. Oktober 2026). MLC Chat ist kostenlos, quelloffen und führt Modelle aus, die mit der MLC-LLM-Toolchain kompiliert wurden, statt Standard-GGUF, und der Katalog hat nicht mit PocketPal AI oder Locally AI Schritt gehalten. Ausführlicher Test: [MLC Chat Review](/de/power-local-llm/mlc-chat-review).',
        items: [
          '**Was sie ist:** die iOS-Referenz-App des MLC-LLM-Projekts, die die Metal-beschleunigte Inferenz von MLC LLM auf Apple Silicon demonstriert.',
          '**Installation:** App Store → „MLC Chat". Kostenlos. Erfordert iOS/iPadOS 17.0 oder neuer.',
          '**Version und letztes Update:** v1.6, veröffentlicht am 27. September 2024 (App-Store-Versionsverlauf; Llama 3.2 3B hinzugefügt). Davor: 1.5 brachte Gemma 2 2B (August 2024), 1.4 brachte Phi-3, Mistral v3 und Qwen2 (Juni 2024). Letztes iPhone-Update vor mehr als 13 Monaten – Veraltet-Warnung aktiv.',
          '**Geschwindigkeit (Projektangabe, hier nicht gemessen):** Das MLC-LLM-Projekt beschreibt seine Metal-beschleunigte Engine als schneller als llama.cpp-basierte Apps auf demselben iPhone – doch die Modellliste der App liegt vor aktuellen Empfehlungen wie Phi-4 Mini und Gemma 3, sodass sich dieser Vorteil mit den 2026 empfohlenen Modellen ohne selbst kompilierten Build nicht prüfen lässt.',
          '**Modellbibliothek:** beschränkt auf Modelle, die das MLC-LLM-Projekt kompiliert hat, bevor die App einschlief – Llama 3.2 3B, Gemma 2 2B, Phi-3, Mistral v3, Qwen2 und ähnliche Releases aus 2024. Nicht jedes Hugging-Face-GGUF funktioniert, und im App-Store-Build ist kein aktuelles kleines Modell enthalten.',
          '**Am besten geeignet für:** Entwickler, die bereits in die MLC-LLM-Toolchain investiert haben und bereit sind, ein eigenes Modell zu kompilieren, oder die gezielt eines der Modelle aus der Zeit vor 2025 brauchen, die schon enthalten sind.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Da der App-Store-Build von MLC Chat seit dem 27. September 2024 kein Update erhalten hat, sollten Sie nicht erwarten, dass Phi-4 Mini, Qwen3 oder Gemma 3 in der Modellauswahl erscheinen. Wenn Sie heute aktuelle Modelle mit Metal-ähnlicher GPU-Effizienz möchten, sind Locally AI (Apple MLX), PocketPal AI (llama.cpp mit Metal Performance Shaders) oder Google AI Edge Gallery (Gemma 4) die aktiv gepflegten Alternativen.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: Nicht im App Store, Quellcode weiterhin verfügbar',
        content:
          '**Veraltet-Warnung: Der letzte Release von LLM Farm (1.4.3) erschien am 27. Januar 2025 und der letzte Code-Push am 30. Januar 2026 – seit fast neun Monaten gibt es kein Update –, daher wird die App möglicherweise nicht mehr gepflegt.** Die PromptQuorum-Rezension des Projekts datiert die Entfernung aus dem App Store auf August 2025; die eigene GitHub-README beschreibt die App im App Store und auf TestFlight als „vorübergehend nicht verfügbar". Das Projekt (GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)) ist weiterhin quelloffen und verzeichnete bis Oktober 2026 GitHub-Issue-Aktivität, doch neue Nutzer können es nicht mehr über den App Store installieren; es muss über Xcode aus dem Quellcode gebaut werden (README: macOS 13+ und iOS 16+). Ausführlicher Test: [LLM Farm Review](/de/power-local-llm/llm-farm-review).',
        items: [
          '**Was sie ist:** eine iOS-App vom Maintainer des Projekts, die GGUF-Modelle mit umfangreichen Konfigurationsoptionen ausführt und früher über den App Store vertrieben wurde.',
          '**Aktuelle Verfügbarkeit:** Zum Zeitpunkt dieser Aktualisierung weder über den App Store noch über TestFlight installierbar. Der Quellcode bleibt öffentlich und baubar.',
          '**Aus dem Quellcode bauen:** Repository klonen, in Xcode öffnen und mit einem kostenlosen oder kostenpflichtigen Apple-Developer-Konto auf ein Gerät bauen – der übliche Sideloading-Ablauf für jede Open-Source-iOS-App ohne App-Store-Eintrag.',
          '**Verfügbare Konfiguration (nach dem Bauen):** Temperatur, Top-p, Top-k, Mirostat-Sampling, Wiederholungsstrafe, System-Prompt pro Modell, Auswahl der Chat-Vorlage, Länge des Kontextfensters.',
          '**Am besten geeignet für:** Entwickler, die sich mit dem Bauen einer App aus dem Quellcode in Xcode auskennen und gezielt Mirostat-Sampling-Kontrollen wünschen. Alle anderen sollten PocketPal AI oder Locally AI nutzen, beide vollständig über den App Store installierbar und kostenlos.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Erwarten Sie nicht, dass ein App-Store-Link zu LLM Farm funktioniert – betrachten Sie jeden solchen Link an anderer Stelle als veraltet. Das Bauen aus dem Quellcode erfordert Xcode und Grundkenntnisse zum iOS-Code-Signing. Wenn Ihnen das zu viel Aufwand ist, deckt PocketPal AI denselben Anwendungsfall einer flexiblen, kostenlosen Chat-App ab, ohne den App Store zu verlassen.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: Systemintegrierte On-Device-KI',
        content:
          '**Apple Intelligence führt Apples eigenes ~3B-Foundation-Modell auf dem iPhone 15 Pro und neuer aus (die Generation des iPhone 15 Pro, gemeldet mit 8 GB RAM; Apple nennt keine RAM-Größe).** Es ist standardmäßig keine Chat-App – es treibt Systemfunktionen in Mail (Smart Reply), Nachrichten (Schreibwerkzeuge), Notizen (Zusammenfassungen) und Benachrichtigungs-Zusammenfassungen an. Seit iOS 26 erlaubt Apples Foundation-Models-Framework Drittentwicklern, dasselbe On-Device-Modell direkt aufzurufen, und Apps wie Locally AI nutzen es, um darauf eine echte Chat-Oberfläche anzubieten. iOS 27 erweitert das Framework: Laut Apples Entwicklerleitfaden können Apps jedes Sprachmodell nutzen, das dessen Sprachmodell-Protokoll erfüllt, einschließlich Apples eigener Modelle und Cloud-Modelle.',
        items: [
          '**Wo es steckt:** in iOS 18+ integriert (Foundation-Models-Framework seit iOS 26). Aktivieren unter Einstellungen → Apple Intelligence & Siri.',
          '**Hardware-Voraussetzung:** iPhone 15 Pro / 15 Pro Max, iPhone 16er-Serie, iPhone 16e, iPhone 17er-Serie sowie die iPhone 18 Pro, 18 Pro Max und iPhone Duo (A20 Pro) von 2026. Ältere iPhones (14 und früher) unterstützen Apple Intelligence nicht. Prüfen Sie vor dem Kauf Apples aktuelle Kompatibilitätsliste für iOS 27.',
          '**Siri AI (iOS 27):** Apple beschreibt Siri AI als in iOS 27 in der Beta verfügbar, zuerst auf Englisch ausgerollt, unter iOS zunächst nicht in der EU verfügbar und für einige serverseitige Funktionen mit täglichen Nutzungslimits versehen. Es ist von den On-Device-Chat-Apps in diesem Leitfaden getrennt.',
          '**On-Device-Funktionen:** Schreibwerkzeuge (umschreiben, zusammenfassen, Korrektur lesen) in jedem Textfeld, Smart Reply in Mail und Nachrichten, Benachrichtigungs-Zusammenfassungen, Genmoji-Erstellung.',
          '**Foundation-Models-Framework (iOS 26+):** eine native Swift-API, die Entwicklern mit wenigen Codezeilen direkten Zugriff auf dasselbe On-Device-Modell gibt – so stellt Locally AI es als Chat-Option bereit, und so kann die Kurzbefehle-Aktion „Modell verwenden" einen Prompt dorthin, an Private Cloud Compute oder an ChatGPT leiten.',
          '**Private Cloud Compute:** Für Aufgaben jenseits der Fähigkeiten des On-Device-Modells weicht Apple Intelligence auf Private Cloud Compute (PCC) aus – von Apple betriebene Server mit größeren Modellen, die laut Apple keine Nutzerdaten speichern. PCC ist opt-in und lässt sich deaktivieren.',
          '**Verhältnis zu den Chat-Apps:** Apple Intelligence ist eine Ergänzung, kein Ersatz. Die Systemfunktionen übernehmen Textumschreibung und Zusammenfassung in iOS-Apps; PocketPal AI, Private LLM, Locally AI und MLC Chat bieten eine eigene Chat-Oberfläche für beliebige Fragen – und Locally AI kann inzwischen auch Apples eigenes Modell hinter eine solche Oberfläche setzen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Apple Intelligence Ihr einziger Bedarf ist (E-Mails umformulieren, Benachrichtigungen zusammenfassen), brauchen Sie keine separate Chat-App. Wenn Sie dem Modell Fragen wie „erkläre Quantentunneln in einfachen Worten" oder „entwirf einen Projektplan für X" stellen möchten, installieren Sie eine Chat-App – entweder eine eigenständige wie PocketPal AI oder Locally AI, das Apples eigenes On-Device-Modell mit einem Chat-Fenster versehen kann.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modelle nach iPhone-Modell',
        content:
          '**Der iPhone-RAM bestimmt die maximale Modellgröße – nicht die Chip-Generation.** Ein iPhone mit 6 GB (14 Pro, 15) führt 1.7B-Modelle komfortabel aus; ein iPhone mit 8 GB+ (15 Pro, 16er-Serie, 16e, 17er-Serie) führt 3B–4B-Modelle komfortabel und 7B-Modelle langsam aus. Neuere kleine Modelle, die neben Phi-4 Mini einen Versuch wert sind: Gemma 4 E2B und E4B (Google, April 2026; etwa 2,58 GB und 3,65 GB als LiteRT-LM-Dateien) und die kleine Qwen3.5-Serie (Alibaba, März 2026; 0.8B, 2B, 4B und 9B, Apache 2.0 laut der Zusammenfassung von Artificial Analysis). PromptQuorum hat dafür keine Geschwindigkeitswerte; Locally AI und Google AI Edge Gallery liefern sie direkt mit. Den breiteren Modellüberblick für alle Hardware-Klassen (nicht nur mobil) finden Sie unter [Die besten lokalen LLMs 2026](/de/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-de.svg',
        imageCaption: 'Empfehlungen für lokale LLM-Modelle je iPhone-RAM-Stufe, vom iPhone mit 4 GB bis zum iPhone 17 Pro mit 12 GB',
        columns: ['iPhone-Modell (Jahr, RAM)', 'Empfohlenes Modell', 'Download-Größe', 'Grobe Geschwindigkeit (Richtwert)'],
        rows: [
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 18 Pro / Pro Max (2026, ~12 GB gemeldet)', 'Empfohlenes Modell': 'Wie 17 Pro; RAM von Apple nicht angegeben', 'Download-Größe': '~2,5–3,7 GB', 'Grobe Geschwindigkeit (Richtwert)': 'Keine Angabe' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 17 Pro / 17 Pro Max (2025, 12 GB)', 'Empfohlenes Modell': 'Phi-4 Mini / Llama 3.2 3B / Gemma 4 E4B', 'Download-Größe': '~2,5–3,7 GB', 'Grobe Geschwindigkeit (Richtwert)': '~13–20 Tok/Sek. (Phi-4 Mini)' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 16er-Serie / 16e / 17 (2024–2025, 8 GB)', 'Empfohlenes Modell': 'Phi-4 Mini (3,8B Q4_K_M) oder Gemma 4 E2B', 'Download-Größe': '~2,6–2,7 GB', 'Grobe Geschwindigkeit (Richtwert)': '~10–15 Tok/Sek. (Phi-4 Mini)' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 GB)', 'Empfohlenes Modell': 'Phi-4 Mini (3,8B Q4_K_M)', 'Download-Größe': '~2,7 GB', 'Grobe Geschwindigkeit (Richtwert)': '~8–12 Tok/Sek.' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 13 Pro / 14 Pro / Pro Max (6 GB)', 'Empfohlenes Modell': 'Qwen3 1.7B oder SmolLM 2 1.7B (Q4_K_M)', 'Download-Größe': '~1,1 GB', 'Grobe Geschwindigkeit (Richtwert)': '~15–20 Tok/Sek.' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 14 / 14 Plus / 15 / 15 Plus (6 GB)', 'Empfohlenes Modell': 'Qwen3 1.7B oder SmolLM 2 1.7B (Q4_K_M)', 'Download-Größe': '~1,1 GB', 'Grobe Geschwindigkeit (Richtwert)': '~12–18 Tok/Sek.' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 13 / 12 / SE / älter (4 GB)', 'Empfohlenes Modell': 'Für On-Device-LLMs nicht empfohlen', 'Download-Größe': '—', 'Grobe Geschwindigkeit (Richtwert)': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für ältere iPhones mit 6 GB sind Qwen3 1.7B oder SmolLM 2 1.7B (Hugging Face) 2026 sinnvolle Wahlen; Qwen3.5 2B und Gemma 4 E2B sind neuere Optionen derselben Größenklasse. So kleine Modelle liefern kohärente kurze Antworten (1–3 Absätze), tun sich aber mit mehrstufigem Schlussfolgern schwer. Installieren Sie Phi-4 Mini nicht auf einem iPhone mit 6 GB – es passt nominell, doch iOS beendet die App bei jedem weiteren Speicherdruck. Die Geschwindigkeitswerte in der Tabelle sind gerundete Richtwerte für Phi-4 Mini, Llama 3.2 3B und Qwen3 1.7B und nicht an eine App-Version oder ein Testdatum gebunden; für Gemma 4 und Qwen3.5 gibt es hier keine Werte. Apples Produktseiten nennen keinen iPhone-RAM: Die RAM-Angaben hier sind allgemein berichtete Spezifikationen, und die ~12 GB beim 18 Pro stammen aus Pressemeldungen.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'Akkuverbrauch und thermisches Throttling',
        content:
          '**On-Device-LLM-Inferenz auf dem iPhone ist CPU-/GPU-intensiv und erzeugt Wärme.** Als grobe Orientierung (grobe Orientierung, keine Messung von PromptQuorum) zieht aktive Inferenz ~3–5 W; dauerhafte Generierung drosselt den Chip und kann den Akku auf dem iPhone 16 Pro um grob 20–30 % pro Stunde entladen.',
        image: '/images/iphone-llm-apps-battery-thermal-de.svg',
        imageCaption: 'Akku- und Hitze-Leitfaden für lokale LLMs auf dem iPhone: Leistungsaufnahme, thermisches Throttling und Kühltipps',
        items: [
          '**Akkuverbrauch (aktiver Chat, Richtwert):** ~20–30 % pro Stunde auf dem iPhone 16 Pro mit Phi-4 Mini.',
          '**Dauerhafte Generierung kann thermisches Throttling auslösen.** Wird der Chip heiß, senkt iOS die Taktfrequenz, und die Tokens/Sek. sinken. Wann das beginnt und wie viel Geschwindigkeit verloren geht, hängt von Telefon, Hülle, Ladevorgang und Raumtemperatur ab; PromptQuorum hat das nicht gemessen. Lässt man das Telefon abkühlen, kehrt die Geschwindigkeit zurück.',
          '**Gegenmaßnahme:** Halten Sie das iPhone bei langen Inferenz-Sitzungen mit dem Display nach oben auf einer harten Oberfläche (nicht in der Hand oder Tasche), damit die Wärme abgeführt wird. Ein passives Kühlkörper-Case hilft, ist bei kurzen Interaktionen aber selten nötig.',
          '**Verbrauch im Leerlauf:** Wenn Sie nach der Generierung eine Chat-App im Hintergrund geöffnet lassen, bleibt der RAM belegt, aber es läuft keine Inferenz – der Akkueinfluss ist minimal. Das vollständige Schließen der App gibt die ~3 GB RAM wieder frei.',
          '**MagSafe-Laden während der Inferenz:** Laden während der Generierung kann zusätzliche Wärme erzeugen; wird das Telefon warm, pausieren Sie das Laden oder die Generierung, oder laden Sie erst danach.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Führen Sie On-Device-LLM-Inferenz auf dem iPhone nicht in direkter Sonne oder in einem heißen Auto aus. In direkter Sonne oder in einem heißen Auto kann der Chip früher an seine thermischen Grenzen stoßen, was Throttling und Apples Meldung „iPhone muss abkühlen" auslösen kann. Die Generierung wird dann meist langsamer, statt dass sich die App schließt.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Kurzbefehle, Siri und Sideloading',
        content:
          '**Die iOS-Integration unterscheidet sich je nach App erheblich.** Private LLM und Locally AI unterstützen beide Kurzbefehle; PocketPal AI, Google AI Edge Gallery und MLC Chat sind eigenständige Chat-Apps, bei denen in README oder App-Store-Eintrag weder Kurzbefehle noch Siri-Integration erwähnt werden.',
        image: '/images/iphone-llm-apps-ios-integration-de.svg',
        imageCaption: 'iOS-Integration lokaler LLM-Apps für das iPhone: Unterstützung für Shortcuts, Siri, Open Source und App-Store-Installation',
        items: [
          '**Private LLM** ist laut Entwickler in Kurzbefehle und Siri eingebunden und kann Antworten an Apps weiterreichen, die x-callback-url unterstützen. Die iOS-nativste der Chat-Apps hier.',
          '**Locally AI** bietet kostenlos eine Kurzbefehle-Aktion und kann einen Kurzbefehl über die Foundation-Models-Framework-Integration an Apples eigenes On-Device-Foundation-Modell leiten – kein Siri-Sprachbefehl, aber Kurzbefehle-Automatisierung ohne Bezahlung.',
          '**PocketPal AI** ist eine eigenständige Chat-App – die README erwähnt weder eine Kurzbefehle-Aktion noch eine Siri-Integration. Sie öffnen die App und chatten.',
          '**Google AI Edge Gallery** ist eine eigenständige Chat- und Demo-App – ihr App-Store-Eintrag erwähnt weder eine Kurzbefehle-Aktion noch eine Siri-Integration.',
          '**MLC Chat** ist eine Referenz-App für das MLC-LLM-Projekt – minimale iOS-Integration und seit September 2024 kein iPhone-Update. Keine Kurzbefehle-Aktion.',
          '**LLM Farm** ist derzeit nicht im App Store und hat, wenn aus dem Quellcode gebaut, keine Kurzbefehle-Aktion.',
          '**Apple Intelligence** integriert sich über die Aktion „Modell verwenden" in iOS Kurzbefehle (iOS 18.4+, mit iOS 26 zusammen mit dem Foundation-Models-Framework erweitert). Sie leitet einen Prompt an das On-Device-Modell, Private Cloud Compute oder ChatGPT (konfigurierbar). Die On-Device-Ausgabe lässt sich mit anderen Kurzbefehle-Aktionen verketten.',
          '**Sideloading:** PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery und MLC Chat sind im App Store und erfordern weder Sideloading noch Jailbreak; Apple Intelligence ist in iOS integriert. LLM Farm ist die Ausnahme – die Installation erfordert nun das Bauen aus dem Quellcode in Xcode. In der EU gibt es unter dem DMA alternative App-Marktplätze, doch welche Apps sie anbieten, entscheidet jeder Entwickler selbst; installieren Sie daher über den offiziellen Kanal des Entwicklers – keine dieser Apps benötigt einen alternativen Marktplatz.',
        ],
        promptExamples: [
          {
            label: 'Private-LLM-Kurzbefehl: Ausgewählten Text zusammenfassen',
            text: '1. Aktion: „Ausgewählten Text abrufen" (iOS-Share-Sheet-Eingabe).\n2. Aktion: Private-LLM-Textgenerierung (aus den Kurzbefehle-Aktionen der Private-LLM-App) → Prompt: „Fasse den folgenden Text in drei Stichpunkten zusammen: [Ausgewählter Text]" → ein in der App installiertes Modell wählen.\n3. Aktion: „Ergebnis anzeigen" oder „In Zwischenablage kopieren".\nZum Share Sheet hinzufügen, damit Sie es für beliebigen Text in jeder App ohne Internetverbindung ausführen können. Die Aktionsnamen folgen der Beschreibung des Entwicklers und können je nach App-Version abweichen.',
          },
          {
            label: 'Apple-Intelligence-Kurzbefehl: Ton anpassen',
            text: '1. Aktion: „Zwischenablage abrufen".\n2. Aktion: „Modell verwenden" → Modell: On-Device → Prompt: „Schreibe dies in einem professionellen, präzisen Ton um: [Zwischenablage]".\n3. Aktion: „In Zwischenablage kopieren".\nEinem Sperrbildschirm-Widget zuweisen, um alles, was Sie kopieren, mit einem Tipp umzuschreiben.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für die freihändige Nutzung beim Fahren oder Kochen ist Private LLM die einzige Chat-App in diesem Leitfaden, deren Entwickler eine Siri-Integration angibt, sodass sie sich ohne Berühren des Telefons nutzen lässt. Apple Intelligence unterstützt Sprache über Siri, aber nur für Systemaufgaben (Schreiben, Zusammenfassen, App-Aktionen) – allgemeine Fragen wie bei den Chat-Apps sind nicht möglich.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Ein Modell installieren, das größer ist als der iPhone-RAM erlaubt.** Ein 7B-Modell auf einem 8-GB-iPhone ist für den Chat oft zu langsam und kann von iOS beendet werden, wenn es Arbeitsspeicher für eine andere App beansprucht; messen Sie es vorher mit dem eingebauten Benchmark von PocketPal AI. Verwenden Sie das empfohlene Modell für Ihre iPhone-Klasse (3B–4B für 8-GB-Geräte, 1.7B für 6-GB-Geräte).',
          '**Cloud-KI-Qualität von On-Device-Modellen erwarten.** Phi-4 Mini (3,8B) ist für seine Größe beeindruckend, aber kein GPT-5.5. Verwenden Sie es für Chat, Zusammenfassungen, Textentwürfe und schnelle Fragen – nicht für mehrstufiges Schlussfolgern, komplexe Code-Generierung oder nuanciertes kreatives Schreiben.',
          '**Inferenz im direkten Sonnenlicht oder in einem heißen Auto ausführen.** Thermisches Throttling kann schnell einsetzen, die Generierung verlangsamt sich, und die Meldung „iPhone muss abkühlen" kann erscheinen. Führen Sie Inferenz bei Raumtemperatur aus.',
          '**3+ Chat-Apps mit je 3-GB-Modellen installiert lassen.** Sie verbrauchen ~10 GB Speicher mit duplizierten Modellen. Entscheiden Sie sich für eine App und ein Modell; deinstallieren Sie die anderen, bis Sie sicher sind, dass Sie sie benötigen.',
          '**Annehmen, Apple Intelligence habe überhaupt kein Chat-Interface.** Das stimmte bis iOS 18, aber seit iOS 26 können Apps wie Locally AI Apples On-Device-Modell über das Foundation-Models-Framework mit einem echten Chat-Fenster versehen. Die Systemfunktionen (Schreibwerkzeuge, Smart Reply) sind für sich genommen weiterhin keine Chat-Oberfläche.',
          '**LLM Farm im App Store suchen.** Die App ist derzeit nicht im App Store (die LLM-Farm-Rezension von PromptQuorum datiert die Entfernung auf August 2025). Die Suche im App Store danach ist Zeitverschwendung; verwenden Sie PocketPal AI für denselben freien, flexiblen Anwendungsfall, oder bauen Sie LLM Farm aus dem Quellcode in Xcode, wenn Sie speziell die Mirostat-Kontrollen benötigen.',
          '**Annehmen, „kostenlos" bedeute „ohne Käufe".** PocketPal AI ist für den lokalen Chat kostenlos, verkauft aber optionale Premium-Inhalte (Pals und „PocketPal Plus"), während Locally AI und Google AI Edge Gallery keine In-App-Käufe aufführen. Prüfen Sie vor der Installation den Abschnitt zu In-App-Käufen im Eintrag (der US-App-Store-Eintrag von PocketPal AI zeigte am 23.10.2026 eine Altersfreigabe ab 18).',
          '**Ein Modell allein anhand einer Geschwindigkeitstabelle beurteilen.** Die Tokens/Sek.-Bereiche in diesem Leitfaden sind Richtwerte, und neuere Modelle wie Gemma 4 und Qwen3.5 kommen darin nicht vor. Führen Sie denselben Prompt im Benchmark von PocketPal AI auf zwei Modellen aus, bevor Sie das bereits heruntergeladene löschen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (README, MIT-Lizenz, Release v1.20.1 vom 19. Okt. 2026) und der [App-Store-Eintrag](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (Versionsverlauf, In-App-Käufe, Altersfreigabe, iOS 15.1+). Gelesen am 23.10.2026.',
          'Private LLM — [App-Store-Eintrag](https://apps.apple.com/app/apple-store/id6448106860) (v1.9.16, $4.99, iOS 17.0+, Family Sharing) und [privatellm.app](https://privatellm.app) (Siri und Kurzbefehle, Modellliste, ein Kauf für iPhone, iPad und Mac). Gelesen am 23.10.2026.',
          'Locally AI — [App-Store-Eintrag](https://apps.apple.com/us/app/locally-ai/id6741426692) (v1.66.0, kostenlos, Element Labs Inc, iOS 18.1+; LM-Studio-Team) und [lmstudio.ai/locally](https://lmstudio.ai/locally) (LM Link). Gelesen am 23.10.2026.',
          'Google AI Edge Gallery — [App-Store-Eintrag](https://apps.apple.com/app/id6749645337) (v1.0.13, kostenlos, iOS 17.0+, Gemma 4, Agent Skills, Denkmodus), [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) und Googles [LiteRT-LM-Gemma-4-Seite](https://developers.google.com/edge/litert-lm/models/gemma-4) (Dateigrößen und Speicherbedarf von E2B/E4B, Herstellerangaben). Gelesen am 23.10.2026.',
          'MLC Chat / MLC-LLM-Projekt — [App-Store-Eintrag](https://apps.apple.com/us/app/mlc-chat/id6448482937) (v1.6, 27. Sep. 2024, Versionsverlauf), [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) und [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) (Engine-Repository). Gelesen am 23.10.2026.',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (README: in TestFlight und App Store „vorübergehend nicht verfügbar"; Release 1.4.3 vom 27. Jan. 2025; letzter Push 30. Jan. 2026) und der [PromptQuorum-Test zu LLM Farm](/de/power-local-llm/llm-farm-review) zur Entfernung im August 2025. Gelesen am 23.10.2026.',
          'Apple Intelligence und On-Device-Foundation-Modelle — [Apple Machine Learning Research](https://machinelearning.apple.com), der Entwicklerleitfaden [What is new in iOS 27](https://developer.apple.com/wwdc26/guides/ios/) (Foundation-Models-Framework) sowie die [iPhone-18-Pro-Seite](https://www.apple.com/iphone-18-pro/) (A20 Pro, Dual-16-Core-Neural-Engine, Siri-AI-Beta, keine RAM-Angabe) und die [iPhone-Duo-Seite](https://www.apple.com/iphone-duo/). Gelesen am 23.10.2026.',
          'Kleine Qwen3.5-Serie (0.8B–9B, März 2026) — [Zusammenfassung von Artificial Analysis](https://artificialanalysis.ai/articles/qwen3-5-small-models).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann das iPhone wirklich ein 7B-Modell ausführen?',
            a: 'Technisch ja auf dem iPhone 15 Pro und neueren Modellen (8 GB RAM), aber nicht mit nutzbarer Geschwindigkeit. Ein 7B-Q4-Modell auf dem iPhone 16 Pro ist für komfortablen Chat oft zu langsam (Richtwert). iOS neigt auch dazu, die App zu beenden, wenn andere Apps Arbeitsspeicher benötigen. Verwenden Sie 3B–4B-Modelle (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) für den alltäglichen On-Device-Chat. Für 7B+-Qualität verbinden Sie sich remote mit einem Mac oder PC zu Hause, auf dem Ollama läuft.',
          },
          {
            q: 'Entlädt lokale KI meinen iPhone-Akku?',
            a: 'Ja – aktive Inferenz zieht typischerweise ~3–5 W und kann den Akku – als grober Richtwert – auf dem iPhone 16 Pro um etwa 20–30 % pro Stunde entladen. Bei gelegentlichem Chat (wenige Prompts) ist der Einfluss gering. Bei dauerhafter Nutzung (langes Gespräch, mehrere Zusammenfassungsaufgaben) schließen Sie das iPhone an. Das Modell selbst im RAM ohne laufende Inferenz hat vernachlässigbaren Akkueinfluss.',
          },
          {
            q: 'Wird mein iPhone bei lokaler KI heiß?',
            a: 'Ja, das kann passieren, besonders bei langer Dauergenerierung. iOS drosselt die Taktfrequenz, wenn der Chip heiß wird, was die Tokens/Sek. senkt; wann und wie stark, hängt von Telefon, Hülle, Ladevorgang und Raumtemperatur ab und wurde von PromptQuorum nicht gemessen. Um dies zu minimieren: Halten Sie das iPhone bei langen Sitzungen mit dem Display nach oben auf einer harten Oberfläche (nicht in der Hand) und vermeiden Sie direktes Sonnenlicht. Kurze Interaktionen erzeugen meist wenig spürbare Wärme.',
          },
          {
            q: 'Kann ich Siri mit einem lokalen Modell verwenden?',
            a: 'Ja, mit Private LLM ($4.99 einmalig). Laut Entwickler ist die App direkt in Siri und Kurzbefehle eingebunden, sodass ein Prompt ohne Internetverbindung an das On-Device-Modell geleitet werden kann. PocketPal AI, Locally AI, Google AI Edge Gallery und MLC Chat erwähnen keine Siri-Sprachintegration, wobei Locally AI Kurzbefehle-Automatisierung unterstützt. Apple Intelligence integriert sich in Siri, aber nur für Systemaufgaben (Schreiben, Zusammenfassen, App-Aktionen), nicht für allgemeine Fragen; Siri AI ist eine separate Beta-Funktion von iOS 27, zuerst auf Englisch und zunächst nicht in der EU.',
          },
          {
            q: 'Funktionieren diese Apps auf dem iPhone SE oder älteren iPhones?',
            a: 'Eingeschränkt. Das iPhone SE und das iPhone 13 / 12 (4 GB RAM) liegen unter der praktischen Schwelle für On-Device-LLMs 2026. iPhone 14 / 15 (nicht Pro, 6 GB RAM) können 1.7B-Modelle (Qwen3 1.7B, SmolLM 2 1.7B) ausführen, aber keine 3B+-Modelle. Auch das iPhone 13 Pro und 14 Pro (6 GB RAM) bleiben bei 1.7B; das iPhone 15 Pro (8 GB RAM) kann 3B-Modelle wie Phi-4 Mini mit grob 8–12 Tokens/Sek. (Richtwert) ausführen. Für ältere iPhones ist die bessere Option eine Remote-Verbindung zu einem Mac oder PC zu Hause.',
          },
          {
            q: 'Kann ich den Chat-Verlauf zwischen iPhone und Mac synchronisieren?',
            a: 'Nicht in PocketPal AI, Private LLM, Google AI Edge Gallery oder MLC Chat – der Chat-Verlauf wird lokal auf jedem Gerät gespeichert, ohne iCloud-Sync. Private LLM und Locally AI laufen beide auch nativ auf dem Mac, aber der Verlauf synchronisiert sich trotzdem nicht zwischen den iPhone- und Mac-Kopien. Für geräteübergreifenden Chat-Verlauf ist der praktische Ansatz: Open WebUI auf einem Mac zu Hause betreiben und von iPhone und Mac aus im Browser darauf zugreifen – Open WebUI speichert den Chat-Verlauf serverseitig.',
          },
          {
            q: 'Sind diese Apps außerhalb des App Stores erhältlich?',
            a: 'PocketPal AI ist quelloffen und kann per Xcode aus dem Quellcode gebaut werden, aber der App-Store-Build ist die Standardverteilung. LLM Farm ist die Ausnahme, die nun aus dem Quellcode gebaut werden muss – sie ist derzeit weder im App Store noch auf TestFlight verfügbar (die README nennt sie „vorübergehend nicht verfügbar"). Private LLM, Locally AI, Google AI Edge Gallery und MLC Chat sind nur im App Store erhältlich. In der EU gibt es unter dem DMA alternative App-Marktplätze, doch welche Apps sie anbieten, entscheidet jeder Entwickler selbst; installieren Sie daher über den offiziellen Kanal des Entwicklers – keine dieser Apps benötigt einen alternativen Marktplatz.',
          },
          {
            q: 'Benötigt eine der Apps einen Jailbreak?',
            a: 'Nein. PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat und Apple Intelligence laufen alle auf Standard-iOS. Auch das Bauen von LLM Farm aus dem Quellcode in Xcode erfordert keinen Jailbreak – es nutzt das Standard-Sideloading für Entwickler, keinen Jailbreak-Exploit. Ein Jailbreak ist für keine dieser Apps erforderlich oder empfohlen.',
          },
          {
            q: 'Kann ich lokale KI in iOS Kurzbefehlen verwenden?',
            a: 'Ja, über Private LLM (seine Kurzbefehle-Aktionen), Locally AI (eine kostenlose Kurzbefehle-Aktion) oder Apple Intelligence (Aktion „Modell verwenden", iOS 18.4+, mit iOS 26 erweitert). PocketPal AI, Google AI Edge Gallery und MLC Chat erwähnen keine Kurzbefehle-Aktionen. Unter den hier verglichenen Apps ist Locally AI die einzige kostenlose Option, die sowohl Kurzbefehle-Unterstützung als auch Zugriff auf Apples eigenes On-Device-Modell aufführt.',
          },
          {
            q: 'Wie vergleicht sich lokale KI mit der ChatGPT-App auf dem iPhone?',
            a: 'On-Device-Modelle (Phi-4 Mini, Llama 3.2 3B) liegen bei komplexem Schlussfolgern, breitem Weltwissen und multimodalen Aufgaben weiterhin spürbar hinter Frontier-Cloud-Modellen, sind aber bei einfachen Anfragen schneller (kein Netzwerk-Round-Trip) und halten den Chat laut Dokumentation der jeweiligen App auf dem Gerät. Der ehrliche Kompromiss: lokale KI für Routine- und private Aufgaben; ChatGPT oder eine andere Cloud-App für gelegentliche schwierige Fragen. Viele Nutzer haben 2026 beide und wählen je nach Anfrage.',
          },
          {
            q: 'Ist LLM Farm noch sicher, wenn sie nicht mehr im App Store ist?',
            a: 'Der Quellcode ist öffentlich auf GitHub und verzeichnet bis 2026 weiterhin Issue-Aktivität, doch der letzte Release (1.4.3) erschien am 27. Januar 2025 und der letzte Code-Push am 30. Januar 2026, daher wird die App möglicherweise nicht mehr gepflegt. Aus dem Quellcode gebaut und per Sideloading installiert, durchläuft sie zudem nicht mehr Apples App-Store-Prüfprozess. Wenn Sie nicht speziell die Mirostat-Sampling-Kontrollen benötigen, deckt PocketPal AI denselben freien, flexiblen, quelloffenen Anwendungsfall ab und bleibt im App Store mit Apples Standard-App-Review.',
          },
          {
            q: 'Welche dieser iPhone-Apps sind kostenlos?',
            a: 'PocketPal AI ist kostenlos (MIT-Lizenz) mit optionalen In-App-Käufen für Premium-Pals und „PocketPal Plus". Locally AI und Google AI Edge Gallery sind kostenlos, es sind keine In-App-Käufe aufgeführt. MLC Chat ist kostenlos. LLM Farm ist kostenlos, muss aber aus dem Quellcode gebaut werden. Private LLM kostet $4.99 einmalig, es sind keine In-App-Käufe aufgeführt. Apple Intelligence ist in iOS integriert. Die Preise wurden am 23. Oktober 2026 im US-App-Store gelesen und können je nach Land abweichen.',
          },
          {
            q: 'Kann das iPhone Duo ein lokales LLM offline ausführen?',
            a: 'Grundsätzlich ja: Das iPhone Duo und das iPhone 18 Pro nutzen beide Apples A20-Pro-Chip, und die Apps in diesem Leitfaden laufen auf jedem iPhone, das ihre iOS-Mindestversion erfüllt. Über die Modellgröße entscheidet der RAM, und die Seiten von Apple zum iPhone 18 Pro und zum iPhone Duo nennen keine RAM-Angabe; Pressemeldungen sprechen beim iPhone 18 Pro von 12 GB, was unbestätigt ist. PromptQuorum hat für keines der beiden Telefone gemessene Geschwindigkeiten. Installieren Sie PocketPal AI und führen Sie den eingebauten Benchmark aus, um zu sehen, was Ihr Telefon tatsächlich leistet.',
          },
          {
            q: 'Funktionieren diese Apps auch auf dem iPad?',
            a: 'Für die meisten ja. PocketPal AI (iPadOS 15.1+, laut README volle iPad-Unterstützung), Private LLM (iPadOS 17.0+) und Locally AI (iPadOS 18.1+) führen iPad-Unterstützung auf. Der Eintrag von Google AI Edge Gallery verlangt iOS 17.0 oder neuer; prüfen Sie die Seite für Ihr iPad. Wie beim iPhone entscheidet der RAM, welche Modelle passen. Hinweise speziell für das iPad finden Sie unter [KI auf dem Tablet nutzen](/de/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: 'Warum ist LLM Farm aus dem App Store verschwunden?',
            a: 'Die README des Projekts sagt: „The app is temporarily unavailable in TestFlight and Appstore." PromptQuorum konnte keinen öffentlichen Grund für die Entfernung finden, daher ist jede Erklärung, die Sie anderswo lesen, unbestätigt (siehe den [Test zu LLM Farm](/de/power-local-llm/llm-farm-review)). Der Quellcode ist weiterhin öffentlich, doch der letzte Release war 1.4.3 am 27. Januar 2025. Als kostenlose, über den App Store installierbare Alternative nutzen Sie PocketPal AI oder Locally AI.',
          },
          {
            q: 'Gibt es eine Ollama-App für das iPhone?',
            a: 'Die Download-Seite von Ollama listet macOS, Windows und Linux, aber keine iPhone-App. Um Modelle von Ollama oder LM Studio vom iPhone aus zu nutzen, betreiben Sie den Server auf einem Mac oder PC und verbinden sich über eine Client-App; Locally AI bietet mit LM Link eine Verbindung zu LM Studio auf einem Mac, die LM Studio als verschlüsselt beschreibt. Für Modelle, die komplett auf dem Telefon laufen, nutzen Sie die Apps in diesem Leitfaden.',
          },
          {
            q: 'Sollte ich Gemma 4 oder Phi-4 Mini herunterladen?',
            a: 'PromptQuorum hat keinen direkten Benchmark der beiden auf dem iPhone. Hilfreiche Fakten: Gemma 4 E2B und E4B sind Googles Modelle in Telefongröße (etwa 2,58 GB und 3,65 GB als LiteRT-LM-Dateien in Google AI Edge Gallery; auch Locally AI listet Gemma 4), während Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB) das Modell ist, auf das sich die Geschwindigkeitswerte in diesem Leitfaden beziehen. Probieren Sie auf einem iPhone mit 8 GB beide mit Ihren eigenen Prompts aus und vergleichen Sie die Tokens/Sek. im Benchmark von PocketPal AI; auf einem iPhone mit 6 GB bleiben Sie bei Modellen der 1.7B-Klasse.',
          },
          {
            q: 'Muss ich bei der Verwendung dieser iPhone-LLM-Apps die DSGVO beachten?',
            a: 'Für rein private Nutzung greift die DSGVO häufig nicht (Haushaltsausnahme, Art. 2 Abs. 2 lit. c DSGVO). Sobald Sie die Apps beruflich nutzen oder personenbezogene Daten Dritter eingeben, kann sie gelten. Für professionelle oder geschäftliche Nutzung – insbesondere wenn Sie Texte mit personenbezogenen Daten (Kundennamen, E-Mails, Vertragsinhalte) in das Modell eingeben – gilt Folgendes: Läuft die Verarbeitung laut Herstellerangaben vollständig auf dem Gerät, gelangen die Eingaben nach diesen Angaben nicht an einen externen Dienstleister; das kann die Anforderungen aus Artikel 28 DSGVO (Auftragsverarbeitung) und zur Datenminimierung in der Regel leichter erfüllbar machen als bei Cloud-KI-Diensten, ersetzt aber keine eigene Prüfung. Prüfen Sie dennoch App für App: PocketPal AI bietet optionale In-App-Käufe und eine optionale Anmeldung mit Apple (der Chat selbst braucht kein Konto), und der Entwickler von Private LLM gibt an, es gebe keine Konten und kein Tracking – das sind Herstellerangaben, keine von PromptQuorum geprüften Zusicherungen. Modell-Downloads benötigen eine Internetverbindung. Dies ist keine Rechtsberatung; klären Sie den konkreten Einsatz mit Ihrer oder Ihrem Datenschutzbeauftragten.',
          },
          {
            q: 'Sind diese iPhone-LLM-Apps für den deutschen Mittelstand geeignet?',
            a: 'Die Apps können sich für den Einsatz in kleinen und mittleren Unternehmen eignen, etwa zum Zusammenfassen von Texten ohne Internetverbindung oder zum Umformulieren von E-Mails. Denkbare Einsatzszenarien sind Vertriebsmitarbeitende, die offline Angebotszusammenfassungen erstellen, Servicetechniker, die im Feld Dokumentation zusammenfassen, und Büromitarbeitende, die Berichte umformulieren. Laut README bzw. Herstellerangaben bleiben Eingaben beim On-Device-Chat auf dem Gerät, sodass keine Übermittlung an einen externen KI-Dienst stattfindet; ob der Gesamtbetrieb den Datenschutzanforderungen genügt, hängt von Rechtsgrundlage, technisch-organisatorischen Maßnahmen und gegebenenfalls einer Datenschutz-Folgenabschätzung ab. Für regulierte Bereiche (Gesundheitswesen, Finanzdienstleistungen) klären Sie den Einsatz vorab mit Ihrer oder Ihrem Datenschutzbeauftragten. Dies ist keine Rechtsberatung.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weitere Apps und ausführliche Tests',
        items: [
          '[PocketPal AI Review](/de/power-local-llm/pocketpal-ai-review) — der ausführliche PromptQuorum-Test der kostenlosen Open-Source-Standard-App.',
          '[Private LLM Review](/de/power-local-llm/private-llm-review) — die kostenpflichtige Option mit Siri und Kurzbefehlen.',
          '[Locally AI Review](/de/power-local-llm/locally-ai-review) — die kostenlose MLX-App vom LM-Studio-Team.',
          '[Google AI Edge Gallery Review](/de/power-local-llm/google-ai-edge-gallery-review) — Googles kostenlose Gemma-4-App.',
          '[MLC Chat Review](/de/power-local-llm/mlc-chat-review) und [LLM Farm Review](/de/power-local-llm/llm-farm-review) — die beiden in diesem Leitfaden als veraltet markierten Apps.',
          '[Die besten Local-LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — Schwesterartikel zu Android-Äquivalenten (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[KI auf dem Tablet nutzen: iPad und Android (2026)](/de/power-local-llm/run-ai-on-tablet-ipad-android) — Plattformführer für Tablet-Nutzer.',
          '[Die besten mobilen LLM-Modelle 2026: Phi-4 Mini vs. Gemma 3 vs. SmolLM](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Begleitartikel zur Modellwahl für diese Apps.',
          '[Die besten lokalen LLMs 2026](/de/local-llms/best-local-llms-2026) — Umfassender Modellüberblick für alle Hardware-Klassen, nicht nur Mobilgeräte.',
          '[Lokalen Sprachassistenten auf dem Smartphone erstellen: Whisper + lokales LLM](/de/power-local-llm/voice-assistant-local-mobile-offline) — Erweitert diese Apps um Offline-Spracheingabe/-ausgabe.',
          '[Beste lokale KI-App für Einstiegs-PCs](/de/power-local-llm/best-local-ai-app-low-end-pc) — Desktop-Alternative für Nutzer, die sich remote mit einem leistungsfähigeren Heimrechner verbinden möchten.',
          '[Enclave AI Review 2026](/de/power-local-llm/enclave-ai-review) — ein genauerer Blick auf Enclave AI, eine On-Device-KI-Assistenten-App für iPhone, iPad und Mac mit Dokumentinteraktion und Siri-/Kurzbefehle-Automatisierung.',
          '[Verzeichnis lokaler LLM-Software 2026](/de/directory) — Verzeichnis aller erwähnenswerten Local-LLM-Tools auf allen Plattformen.',
          '[Melhores Apps LLM Local para iPhone 2026 (Português)](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — portugiesische Version dieses Leitfadens',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-23',
    last_full_refresh: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: '2026年iPhoneで使えるLocal LLMアプリ比較（WiFi不要でAI利用）',
    seoTitle: 'iPhoneローカルLLMアプリ6選｜2026年版オフライン比較',
    intro:
      '2026年、iPhoneで本格的なLLMを完全オフライン動作させる選択肢は6つあります：PocketPal AI、Private LLM、Locally AI（LM Studio製）、Google AI Edge Gallery、MLC Chat、そしてApple Intelligence（システム統合型）です。どのアプリもモデルをダウンロードすれば、WiFiなしで動作します。このガイドでは、費用、モデルライブラリ、iOS統合、プライバシー、メンテナンス状況を比較します。iPhone 16 ProとiPhone 17 Proでの速度は目安で、RAMガイドにはiPhone 18 Proも加えました。LLM Farmがランキングから外れた理由も解説します。',
    metaDescription:
      'iPhoneでLLMをWiFiなしで動かす6つの方法を2026年版で比較。PocketPal AI、Private LLM、Locally AI、Google AI Edge Galleryほか。費用・RAM別ガイド。',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ja.webp',
    twitterDescription:
      'iPhoneローカルAI 2026：PocketPal AI（無料の定番）、Private LLM（$4.99、Siri＋ショートカット）、Locally AI（LM Studio、MLX）、Google AI Edge Gallery（Gemma 4）。ダウンロード後はすべてオフラインで動作します。',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 4B',
    ],
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM not published by Apple)',
      'iPhone Duo (A20 Pro, RAM not published by Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB RAM)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 16e (A18, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'クラウドの月額課金なしで、プライベートにオンデバイスAIを使いたいiPhoneユーザー。旅行者、プライバシー意識の高いユーザー、オンデバイス推論を探求する開発者などが対象です。',
    readTime: '12分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'iPhoneローカルLLMアプリ',
    targetKeywords: [
      'iphone ローカルllm',
      'iphone ローカルai アプリ',
      'iphone llm オフライン',
      'pocketpal ai iphone',
      'private llm アプリ',
      'mlc chat iphone',
      'llm farm ios',
      'iphone ai wifi不要',
      'ローカルllm アプリ おすすめ',
      'google ai edge gallery ios',
      'locally ai pocketpal 比較',
    ],
    leadAnswerBlock:
      '**2026年の多くのiPhoneユーザーには、App StoreでPocketPal AIをインストールし、Phi-4 Mini（3.8B Q4_K_M、約2.7 GB）のような小型モデルをダウンロードする方法をおすすめします。** 利用は無料（プレミアムコンテンツはアプリ内課金が任意）、オープンソース（MIT）で、iPhone 14 Pro以降（RAM 6 GB以上のiPhone）で動作します。iPhone 16 Proでは日常のチャットで毎秒約10〜15トークン（目安）です。SiriとShortcutsの統合が必要なら、Private LLM（$4.99の買い切り、iPhone・iPad・Mac対応）が有料の選択肢です。Locally AI（LM Studioチーム開発）はApple MLXを基盤とした無料アプリで、Shortcutsに対応し、Appleのオンデバイスファウンデーションモデルにもアクセスできます。Google AI Edge Galleryは、Googleが提供するGemma 4用の無料アプリで、エージェントスキルと思考モードを備えています。Gemma 4 E2B/E4BやQwen3.5といった新しい小型モデルも、これらのアプリで利用できます（「iPhoneモデル別推奨モデル」を参照）。MLC ChatはMetal加速のリファレンスアプリですが、iPhone版は2024年9月以降更新されていません。LLM Farmは現在App StoreにもTestFlightにもありません（READMEには「一時的に利用不可」と記載）。ソースからのビルドのみ可能です。Apple Intelligenceもオンデバイスでモデルを実行しますが、システム統合型でチャットアプリではないため、これらのアプリと競合せず補完する役割を担います。',
    quickAnswerTop: {
      ja: {
        question: '2026年のiPhoneで最高のローカルLLMアプリは何ですか？',
        answer:
          'PocketPal AIは多くのiPhoneユーザーに推奨する無料の定番アプリです。オープンソース（MIT）、App Storeからインストール可能で、Hugging FaceのあらゆるGGUFモデルに対応し、iPhone 16 ProでPhi-4 Mini（3.8B）を毎秒約10〜15トークン（目安）で動かせます。Private LLMは有料オプション（$4.99の買い切り、iPhone・iPad・Mac対応）で、ShortcutsとSiriの統合を備えます。LM Studioチームが開発するLocally AIは、Shortcutsに対応した無料のApple MLXアプリで、Appleのオンデバイスファウンデーションモデルにもアクセスできます。Google AI Edge GalleryはGoogleのGemma 4用無料アプリです。MLC ChatはMetal加速に対応していますが、iPhone版は2024年9月以降動きがありません。Apple Intelligenceもオンデバイスでモデルを実行しますが、システム統合型で、これらのアプリを置き換えるものではなく補完します。',
        bullets: [
          'PocketPal AI — 無料、オープンソース（MIT）、App Store、v1.20.1（2026年10月19日）。ほとんどのユーザーにおすすめの定番アプリ。あらゆるGGUFモデルに対応。プレミアムコンテンツはアプリ内課金が任意。',
          'Private LLM — $4.99の買い切り（iPhone・iPad・Mac対応）、v1.9.16（2026年9月14日）。有料オプション。ShortcutsとSiriの統合。',
          'Locally AI — 無料、LM Studioチーム製、v1.66.0（2026年10月15日）。Apple MLXエンジン、Shortcuts対応、Apple Foundation Modelsへのアクセス。',
          'Google AI Edge Gallery — 無料、Google製、v1.0.13（2026年10月8日）。Gemma 4、エージェントスキル、思考モード、画像・音声入力。',
          'MLC Chat — 無料、MLC LLMプロジェクト。Metal加速だが、iPhoneアプリはv1.6（2024年9月27日）以降更新なし。メンテナンスされていない可能性があります。',
          'Apple Intelligence — システム統合型、独立したアプリではありません。メール、メッセージ、メモで使われるオンデバイスの約3Bモデル。',
          'iPhone 16 Pro / 17 Pro向けの推奨モデル：Phi-4 Mini（3.8B Q4_K_M、約2.7 GB）— 毎秒約10〜15トークン。新しい選択肢：Gemma 4 E2B/E4B、Qwen3.5 4B。',
          '旧世代iPhone（14 Pro）：Qwen3 1.7B または SmolLM 2 1.7B — 6 GB RAMに収まり、毎秒約15〜20トークン。',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '最初にインストールすべきiPhoneアプリは？', anchor: '#which-app' },
      { label: 'iPhoneアプリ比較表', anchor: '#comparison-table' },
      { label: 'PocketPal AI：無料オープンソースの定番アプリ', anchor: '#pocketpal-ai' },
      { label: 'Private LLM：iOS統合機能付き有料オプション', anchor: '#private-llm' },
      { label: 'Locally AI：LM Studio製の無料MLXアプリ', anchor: '#locally-ai' },
      { label: 'Google AI Edge Gallery：Google製の無料Gemma 4アプリ', anchor: '#google-ai-edge-gallery' },
      { label: 'MLC Chat：Apple Siliconに最適化', anchor: '#mlc-chat' },
      { label: 'LLM Farm：App Store非掲載、ソースは入手可能', anchor: '#llm-farm' },
      { label: 'Apple Intelligence：システム統合型オンデバイスAI', anchor: '#apple-intelligence' },
      { label: 'iPhoneモデル別推奨モデル', anchor: '#models-by-tier' },
      { label: 'バッテリー消耗と熱スロットリング', anchor: '#battery-heat' },
      { label: 'iOS Shortcuts、Siri、サイドローディング', anchor: '#ios-integration' },
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
          '**PocketPal AIは推奨する無料の定番アプリです。** オープンソース（MIT）、App Storeからインストール可能で、Hugging FaceのあらゆるGGUFモデルに対応。ローカルチャットにアカウントは不要で、プレミアムPalsと「PocketPal Plus」はアプリ内課金が任意です。iPhone 16 ProでPhi-4 Miniを毎秒約10〜15トークンで動かせます。多くのiPhoneユーザーに推奨のスタート地点です。',
          '**Private LLMは有料オプション（$4.99の買い切り、サブスクなし）です。** 1回の購入でiPhone・iPad・Macに対応し、ファミリー共有で最大6人まで利用できます。厳選モデルライブラリを備え、開発元によるとSiriとShortcutsに連携します。',
          '**Locally AIは、LM Studioチームが開発する無料のMLXベースの代替アプリです。** Apple MLX上でLlama、Gemma（Gemma 4を含む）、Qwen、DeepSeekのモデルを動かし、iOS Shortcutsに対応し、Apple独自のオンデバイスファウンデーションモデルをチャットインターフェースとして利用可能にします。',
          '**Google AI Edge Galleryは、Google製のiPhone向け無料Gemma 4アプリです。** 思考モード、エージェントスキル、画像・音声入力に対応します。モデルはGGUFではなくLiteRT-LM形式で動作します。Googleは引き続き開発中のアプリと説明しています。',
          '**MLC ChatはMetal加速に対応していますが、iPhone版は動きが止まっています。** App Storeビルドは2024年9月27日のv1.6以降更新されておらず、モデルライブラリはPhi-4 MiniやGemma 3より前のものです。MLC LLMエンジン自体はGitHubで活発に開発が続いています。',
          '**LLM Farmは現在App StoreにもTestFlightにもありません。** 公式READMEは「一時的に利用不可」と説明しています。オープンソースのままXcodeでソースからビルド可能ですが、最後のリリースは2025年1月の1.4.3、最後のコードプッシュは2026年1月30日です。',
          '**Apple Intelligenceはオンデバイス型ですが、独立したアプリではありません。** Appleの約3Bファウンデーションモデルがシステム機能（Writing Tools、Smart Reply、通知サマリー）を担います。iOS 26以降、サードパーティアプリはFoundation Modelsフレームワーク経由で呼び出せ、Shortcutsも「モデルを使用」アクションで対応できます。',
          '**iPhone 16 Pro / 17 Pro向けの推奨モデル：Phi-4 Mini（3.8B Q4_K_M、約2.7 GB）。** Gemma 4 E2B/E4BとQwen3.5 4Bは新しい選択肢ですが、PromptQuorumの速度データはまだありません。6 GB RAMの旧世代iPhone（iPhone 14 Pro）：Qwen3 1.7B または SmolLM 2 1.7B。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**比較対象アプリ：** PocketPal AI、Private LLM、Locally AI（LM Studio製）、Google AI Edge Gallery、MLC Chat、Apple Intelligence（システム）— さらに、現在App StoreにないLLM Farm（README：「一時的に利用不可」）。',
          '**最終アップストリーム更新（2026年10月23日確認）：** PocketPal AI v1.20.1（2026年10月19日）· Locally AI v1.66.0（2026年10月15日）· Google AI Edge Gallery v1.0.13（2026年10月8日）· Private LLM v1.9.16（2026年9月14日）· MLC Chat iPhoneアプリ v1.6（2024年9月27日 — 古い）· LLM Farm リリース1.4.3（2025年1月27日）、最後のコードプッシュ2026年1月30日 — 古い。',
          '**速度の基準デバイス：** iPhone 16 Pro（A18 Pro、8 GB RAM）とiPhone 17 Pro（A19 Pro、12 GB RAM）。速度は目安の範囲であり、PromptQuorumの統制されたベンチマークではありません。iPhone 18 Pro、18 Pro Max、iPhone Duo（A20 Pro）の速度データはここにはありません。',
          '**推論エンジン：** llama.cpp（PocketPal AI、LLM Farm）、Apple MLX（Locally AI）、Metal対応MLC LLM（MLC Chat）、Google LiteRT-LM（Google AI Edge Gallery）、独自のオンデバイスランタイム（Private LLM、Apple Intelligence）。',
          '**3B以上のモデルに必要な最低限のiPhone：** 1.7B向け：iPhone 14 Pro（A16、6 GB RAM）；3B〜4B向け：8 GB以上のiPhone（15 Pro、16シリーズ、16e、17シリーズ、18 Pro）。',
          '**推奨の無料アプリ：** PocketPal AI — App Store、オープンソース、モデルの柔軟性。',
          '**有料の選択肢：** Private LLM — $4.99の買い切り（iPhone・iPad・Mac対応）、ShortcutsとSiriのサポート。',
          '**オフライン動作：** 6つすべて、モデルをダウンロードすれば完全オフラインで動作します。各アプリのREADMEまたは掲載情報によると、オンデバイスのチャットにクラウド通信はありません（Apple Intelligenceは任意でPrivate Cloud Computeを使用できます）。',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '最初にインストールすべきiPhoneアプリは？',
        content:
          '**ほとんどのユーザーへの推奨：App StoreでPocketPal AIをインストールし、Phi-4 Mini（3.8B Q4_K_M）、またはGemma 4 E2B/E4BやQwen3.5 4Bのような新しい小型モデルをダウンロードしてください。** この組み合わせはiPhone 14 Pro以降で動作し、チャットは無料で、日常のチャット・要約・簡単な下書きに実用的な出力を提供します。PocketPal AIで対応できない特定の需要がある場合のみ、他のアプリを検討してください。',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ja.webp',
        imageCaption: 'iPhoneで使うローカルAIアプリの選び方：無料のPocketPal AIからSiri対応のPrivate LLMまで',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年の多くのiPhoneユーザーには、PocketPal AI（無料・App Store）をインストールし、Phi-4 MiniやGemma 4 E2Bなどの新しい小型モデルをダウンロードする方法を推奨します。RAM 6 GB以上のiPhoneで日常のチャット・要約・下書きに対応します。',
          },
          {
            type: 'plain-terms',
            text: '2026年には6つのiPhone向け選択肢が、AIを端末上だけで完全に動作させます。PocketPal AIが推奨する無料のスタート地点です。インストールして2.7 GBのモデルファイルを一度ダウンロードするだけで、WiFiなしの電車の中でも使えるプライベートなチャットアシスタントが手に入ります。Private LLMはSiriにローカルモデルを応答させたい場合の有料オプションです。LM Studioチーム製のLocally AIはShortcutsに対応した無料の現代的な代替で、Google AI Edge GalleryはGoogleのGemma 4モデル用の無料アプリです。MLC ChatのiPhone版はすでに更新されていません。Apple IntelligenceはiOSに内蔵されていますが、チャットアプリではありません。PocketPal AIはほとんどのユースケースに対応します。',
          },
        ],
        decisionBlock: {
          title: '選択ガイド：iPhoneでどのローカルAIアプリを使うか？',
          localIf: [
            'オフラインで動作する無料チャットAIが欲しい → PocketPal AI',
            'Siriにローカルモデルを応答させたい → Private LLM',
            'ShortcutsとApple Foundation Modelsへのアクセスに対応した無料MLXアプリが欲しい → Locally AI',
            '思考モードとエージェントスキルを備えたGoogle純正のGemma 4が欲しい → Google AI Edge Gallery',
            'MLC LLMツールチェーンを試したい。2024年9月以降更新のないiPhone版は許容する → MLC Chat',
            'メール・メッセージ・メモでの文章支援だけが必要 → Apple Intelligence（内蔵）',
          ],
          cloudIf: [
            '70B以上のモデル品質（Llama 3.3 70B、GPT-5.5クラス）が必要 → クラウドまたは自宅PCへのリモート接続',
            'GPT-5.5、Claude Opus、Geminiが特定で必要 → クラウドアプリ（ローカルでは利用不可）',
            'リアルタイムのビジョンやテキスト以外のマルチモーダル出力が必要 → クラウド（2026年のオンデバイスマルチモーダルは限定的）',
          ],
          quick: [
            '無料 + ほとんどのユーザーに対応：PocketPal AI',
            '有料 + iOSネイティブ統合：Private LLM',
            '無料 + LM Studioエコシステム：Locally AI',
            '無料 + Google Gemma 4：Google AI Edge Gallery',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '後でPrivate LLMを購入する予定でも、まずPocketPal AIをインストールしてください。ご自身のiPhoneでのオンデバイス推論が用途に十分な速度かどうかを確認してから、Private LLMのShortcuts・Siri統合が$4.99の価値があるか判断できます。不要なら、支払う前に$4.99を節約できます。PocketPal AIには、ご自身のiPhoneでトークン/秒とメモリを報告する内蔵ベンチマークもあります。下の表を含め、どんな表よりもこちらを信頼してください。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhoneアプリ比較表',
        content:
          '**6つの選択肢は、ほとんどのユーザーにとって重要な3つの軸で異なります：費用、モデルの柔軟性、iOS統合。** 速度の差は存在しますが、これらのアプリとクラウドLLMの差より小さいです。価格とバージョンは、2026年10月23日に米国App Storeの掲載情報とプロジェクトページで確認しました。',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-ja.webp',
        imageCaption: 'iPhoneローカルLLMアプリ比較：PocketPal AI、Private LLMなどの費用・速度・連携機能',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AIが推奨する無料の定番、Private LLMが有料オプション、Locally AIがLM Studioチーム製の無料MLXの選択肢、Google AI Edge GalleryはGoogle製の無料Gemma 4アプリ、MLC ChatはiPhone版が更新停止、Apple Intelligenceがシステム統合型です。',
          },
          {
            type: 'plain-terms',
            text: '選択は通常3つの要素に絞られます：Siri統合に料金を払うか（Private LLM）、LM Studioエコシステムを無料でShortcuts対応のまま使いたいか（Locally AI）、思考モード付きのGoogle純正Gemma 4が欲しいか（Google AI Edge Gallery）。それ以外はPocketPal AIがデフォルトです。表の速度は、2026年のモバイル推論の標準であるQ4_K_M量子化を前提とした目安の範囲で、統制されたベンチマークではありません。',
          },
        ],
        columns: ['アプリ', '価格', 'トークン/秒（Phi-4 Mini、16 Pro）', 'プライバシー', '最適な用途'],
        rows: [
          { 'アプリ': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)', '価格': '無料（MIT）＋任意のアプリ内課金', 'トークン/秒（Phi-4 Mini、16 Pro）': '約10〜15', 'プライバシー': 'オンデバイスチャット、アカウント不要（README）', '最適な用途': 'ほとんどのユーザー向けの無料の定番' },
          { 'アプリ': '[Private LLM](https://privatellm.app)', '価格': '$4.99の買い切り', 'トークン/秒（Phi-4 Mini、16 Pro）': '数値なし', 'プライバシー': 'オンデバイス。アカウント・トラッキングなし（開発元）', '最適な用途': 'Shortcuts + Siri統合' },
          { 'アプリ': '[Locally AI](https://lmstudio.ai/locally)', '価格': '無料（LM Studioチーム）', 'トークン/秒（Phi-4 Mini、16 Pro）': '該当なし — MLXカタログ（Phi-4非対応）', 'プライバシー': 'オンデバイス。データ収集なし（掲載情報）', '最適な用途': 'MLX + Shortcuts、LM Studio連携' },
          { 'アプリ': '[Google AI Edge Gallery](https://apps.apple.com/app/id6749645337)', '価格': '無料（Google）', 'トークン/秒（Phi-4 Mini、16 Pro）': '該当なし — LiteRT-LM、Gemma 4', 'プライバシー': 'モデルのダウンロード後はオンデバイス', '最適な用途': 'Gemma 4、思考モード、エージェントスキル' },
          { 'アプリ': '[MLC Chat](https://llm.mlc.ai)', '価格': '無料（オープンソース）', 'トークン/秒（Phi-4 Mini、16 Pro）': '該当なし — Phi-4以前のライブラリ', 'プライバシー': 'ローカル推論（プロジェクト文書。未検証）', '最適な用途': 'MLC LLMツールチェーン利用者（iOSアプリは停滞）' },
          { 'アプリ': '[LLM Farm](https://github.com/guinmoon/LLMFarm)', '価格': '無料（ソースからビルド）', 'トークン/秒（Phi-4 Mini、16 Pro）': '数値なし', 'プライバシー': 'ローカル推論（プロジェクト文書。未検証）', '最適な用途': '開発者向け（App Store非掲載、更新停止）' },
          { 'アプリ': '[Apple Intelligence](https://www.apple.com/apple-intelligence/)', '価格': '無料（iOS内蔵）', 'トークン/秒（Phi-4 Mini、16 Pro）': '該当なし（システム機能）', 'プライバシー': 'ローカル + opt-in Private Cloud Compute', '最適な用途': 'メール・メッセージ・メモでの支援' },
        ],
        note:
          '**Apple Neural Engine（ANE）、Metal、MLXの違いについて：** PocketPal AIとLLM Farmは、GPU上で動作するMetal Performance Shadersを使ったllama.cppで推論を行います。MLC ChatはMLC LLMとより深いMetal最適化を採用しており、MLC LLMプロジェクトは、対応モデルについて同じハードウェア上でllama.cppベースのアプリより高速と説明しています（プロジェクトの主張であり、PromptQuorumは計測していません）。Locally AIはApple独自のオープンソース配列フレームワークであるApple MLXを使用し、Apple Silicon上で同等のGPU効率を実現します。Google AI Edge GalleryはGoogleのLiteRT-LMランタイムでGemma 4を動かします。Apple Intelligenceはシステムの約3Bモデル専用にANEを使用します。Metal推論より省電力ですが、柔軟性は低めです。iOS 26以降、サードパーティアプリはFoundation Modelsフレームワーク経由でこのシステムモデルを呼び出せます（Locally AIがまさにこれを行っています）が、独自のGGUF/MLXモデルは依然としてANEを直接ターゲットできません。AppleはiPhone 18 ProのA20 Proに、従来の2倍の演算性能を持つデュアル16コアNeural Engineが搭載されていると述べています。これはAppleの主張であり、PromptQuorumはこれらのアプリで何を意味するかを計測していません。',
        callouts: [
          {
            type: 'tip',
            text: 'トークン/秒の数値は目安として丸めた範囲であり、PromptQuorumの統制されたベンチマークではなく、アプリのバージョンや検証日にも紐づいていません。2026年のモバイル推論の標準であるQ4_K_M量子化と、他の重いアプリが動作していないiPhoneを前提としています。バックグラウンドアプリはスループットを目に見えて低下させる可能性があり、iPhone 17 Proは通常iPhone 16 Proより高速です。ご自身の端末でPocketPal AIの内蔵ベンチマークを実行して計測してください。',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI：無料オープンソースの定番アプリ',
        content:
          '**PocketPal AIは2026年の多くのiPhoneユーザーにとって推奨のスタート地点です。** 利用は無料、オープンソース（MIT、GitHub: [a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)）で、App Storeから入手でき、Hugging FaceのあらゆるGGUFモデルに対応しています。内部ではApple Silicon最適化を施したllama.cppを使用しています。詳しいレビュー：[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review)。',
        items: [
          '**概要：** Gooya UGが公開する、llama.cppでGGUFモデルをローカル実行するiOS/iPadOS/Androidアプリ。READMEには、プロンプト・応答・ドキュメントは外部サーバーにアップロードされず、チャットにアカウントは不要と記載されています。',
          '**バージョンと最終更新：** v1.20.1、2026年10月19日リリース（[GitHubリリース](https://github.com/a-ghorbani/pocketpal-ai/releases)）。App Storeの掲載も同じバージョンです。更新頻度はおよそ1〜2週間に1回で、古さの警告はありません。',
          '**インストール：** App Store → "PocketPal AI"。無料ダウンロード、アプリ内課金は任意（プレミアムPalsと「PocketPal Plus」）。iOS/iPadOS 15.1以降が必要です。使えるモデルサイズを決めるのはiOSのバージョンではなくRAMです。v1.20.0以降、任意のSign in with Appleとアカウント削除にも対応しています。',
          '**モデルの追加：** アプリ内で「Models」→「Add from Hugging Face」→検索（例："phi-4-mini-instruct-Q4_K_M"）→タップしてダウンロード。モデルはアプリのローカルストレージに保存されます（Phi-4 Mini Q4は約2.7 GB）。',
          '**生成速度（iPhone 16 Pro、目安）：** Phi-4 Mini 約10〜15トークン/秒、Llama 3.2 3B 約12〜18トークン/秒、Gemma 3 4B 約7〜10トークン/秒、Qwen3 1.7B 約18〜24トークン/秒。PromptQuorumが統制して計測した値ではありません。ご自身のiPhoneでトークン/秒とメモリを報告する内蔵ベンチマークを使ってください。',
          '**その他の機能：** Pals（カスタムアシスタント）、オンデバイスの音声読み上げ、Talents（対応モデル向けの電卓・日時ツール）、アクセストークンでゲート付きモデルにも対応するHugging Faceモデルブラウザ。',
          '**最適な用途：** 無料でApp Storeからインストールでき、アカウント不要で、コミュニティが公開するあらゆるGGUFモデルに対応したチャットアプリを求めるユーザー。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'PocketPal AIのモデルピッカーには「Recommended」フィルターがあり、アプリのドキュメントによると、お使いのデバイスのRAMに収まるモデルを表示します。ご自身のiPhoneで確認してください。大きすぎるモデルを動かすと、iOSが応答の途中でアプリを終了することがあります。',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM：iOS統合機能付き有料オプション',
        content:
          '**Private LLMは、このガイドにおける有料のiPhoneオプションです（$4.99の買い切り、サブスクなし）。** App Store専用配布で、最適化済みモデルの厳選ライブラリを同梱しています。差別化ポイントはiOS統合で、開発元はSiriとShortcutsアプリに直接連携すると説明しています。詳しいレビュー：[Private LLMレビュー](/ja/power-local-llm/private-llm-review)。',
        items: [
          '**概要：** 厳選モデルライブラリと深いiOS統合を備えた有料iOSアプリ。Apple Silicon向けに最適化された独自のオンデバイスランタイムを使用しています。',
          '**インストール：** App Store → "Private LLM - Local AI Chat"（Numen Technologies Limited）。買い切り$4.99（サブスクなし。掲載情報にアプリ内課金の記載なし）。A12 Bionic以降のチップを搭載したiOS/iPadOS 17.0以降が必要です。',
          '**バージョンと最終更新：** v1.9.16、2026年9月14日リリース（App Storeのバージョン履歴）。1つ前は2026年7月9日の1.9.15です。リリースは2〜3か月ごとで、3か月のラインの内側にあるため、古さの警告はありません。',
          '**厳選モデルライブラリ：** [privatellm.app](https://privatellm.app)は、iPhone・iPad・Mac全体で140以上のローカルモデルを掲げ、Llama、Qwen3、Gemma 3、Phi 4などのファミリーを挙げています。iPhoneに収まるのはその一部です。PocketPal AIより柔軟性は低めですが、モデルはアプリのランタイム向けに事前最適化されています。',
          '**Shortcuts：** 開発元によると、Private LLMはShortcutsアプリに連携し、x-callback-url仕様に対応する他のアプリへ応答を渡せます。ホーム画面のボタンやNFCタグからローカルAIを起動するのに便利です。',
          '**Siri統合：** 開発元はSiri統合を掲げています。オンデバイスモデルに送ったプロンプトはインターネット接続なしで動作します（接続が必要なのは最初のモデルダウンロード時のみ）。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'privatellm.appによると、$4.99の1回の購入でiPhone・iPad・Macに対応します。App Storeの掲載には、ファミリー共有で最大6人の家族が利用できると記載されています。サブスクもアプリ内課金も記載がなく、表示価格が総費用です。開発元は、アカウント・トラッキング・ログはないと説明しています。',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI：LM Studio製の無料MLXアプリ',
        content:
          '**Locally AIは、LM Studioチームが開発する（掲載上はElement Labs Inc名義）無料のプライバシー重視チャットアプリで、llama.cppではなくApple独自のMLXフレームワークを基盤としています。** Appleのオンデバイスファウンデーションモデルをチャットインターフェースとして提供する、このガイドで唯一のアプリです。詳しいレビュー：[Locally AIレビュー](/ja/power-local-llm/locally-ai-review)。',
        items: [
          '**概要：** Apple MLXで推論を行うiOS/iPadOS/macOSアプリ。デスクトップ版LM Studioの開発チームが手がけています。',
          '**インストール：** App Store → "Locally AI"。無料、アプリ内課金の記載なし、アカウント不要（掲載情報による）、オフラインで動作します。',
          '**バージョンと最終更新：** v1.66.0、2026年10月15日リリース（App Storeのバージョン履歴）。2026年はおよそ月1回のリリースで、古さの警告はありません。',
          '**モデルライブラリ：** Llama 3.2、Gemma 2/3/4、Qwen 3と3.5、DeepSeek、LFM 2.5、Bonsai、Ministral 3、Apple Foundation Models — MLC Chatより幅広く新しいカタログです。',
          '**iOS Shortcuts：** Shortcutsアクションを提供し、Private LLMの自動化サポートに無料で匹敵します。',
          '**LM Link：** MacのLM Studioと、LM Studioがエンドツーエンド暗号化と説明する接続で連携する任意機能で、必要に応じて自宅マシン上のより大きなモデルにハンドオフできます。',
          '**要件：** iOS/iPadOS 18.1以降（Mac版はmacOS 26.0以降）。Apple Siliconクラスの効率性はiPhone 15 Pro以降で最も発揮されます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AIはこのガイドの中で唯一、Apple独自のオンデバイスファウンデーションモデルを通常のチャットウィンドウの裏側に配置できるアプリです。Writing Toolsのメニューを探し回らずに、Apple Intelligenceのモデルが何をできるか試したい場合に便利です。サードパーティGGUFの柔軟性では、PocketPal AIが依然として大きなモデルカタログを持っています。',
          },
        ],
      },
      googleAIEdgeGallery: {
        id: 'google-ai-edge-gallery',
        title: 'Google AI Edge Gallery：Google製の無料Gemma 4アプリ',
        content:
          '**Google AI Edge Galleryは、GoogleのGemma 4モデルを端末上で動かす無料アプリで、iPhoneのApp Storeでも入手できます。** 掲載情報には、思考モード付きのAI Chat、エージェントスキル、画像・音声入力、Prompt Lab、モデルのベンチマークが記載されています。Googleはアプリを開発中と説明しています。詳しいレビュー：[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review)。',
        items: [
          '**概要：** GoogleのLiteRT-LMランタイムを基盤とする、GoogleのオンデバイスAI紹介アプリ。無料で、アプリ内課金の記載はありません。',
          '**インストール：** App Store → "Google AI Edge Gallery"。iOS 17.0以降が必要です。モデルはアプリ内で別途ダウンロードします。',
          '**バージョンと最終更新：** v1.0.13、2026年10月8日リリース（App Storeのバージョン履歴）。Gemma 4対応は2026年4月3日のv1.0.2で追加されました。古さの警告はありません。',
          '**モデル：** Gemma 4ファミリー（E2BとE4Bがスマートフォン向けサイズで、GoogleはLiteRT-LMファイルをそれぞれ約2.58 GBと3.65 GBと記載）、EmbeddingGemma 2、FunctionGemma 270M。LiteRT-LM形式のモデルはHugging Faceからインポートすることもできます。',
          '**機能：** Thinking Mode（Gemma 4モデルのみ）、Agent Skills（例：Wikipedia検索や地図、コミュニティスキルも）、Ask Image、Audio Scribe、Prompt Lab、モデルのベンチマーク。',
          '**制限：** 対応はLiteRT-LMモデルのみで、GGUFやMLXは非対応。掲載情報にShortcutsやSiriの記載はなく、PromptQuorumの速度データもありません。',
          '**最適な用途：** 目に見える推論モードとエージェントツールを備えたGoogle純正のGemma 4を、無料で使いたいユーザー。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Googleは、iPhone 17 ProでのGemma 4 E2Bのピークメモリを、CPUで約607 MB、GPUで約1,450 MBと報告しています（GoogleのLiteRT-LM Gemma 4ページに基づくベンダー値で、PromptQuorumは再計測していません）。ほとんどのスマートフォンではE2Bが現実的な出発点で、E4Bは8 GB以上のiPhone向きです。',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat：Apple Siliconに最適化',
        content:
          '**古さの警告：MLC ChatのiPhoneアプリは、2024年9月27日のバージョン1.6以降（13か月以上）更新されておらず、メンテナンスされていない可能性があります。ご利用前にご確認ください。** MLC LLMエンジンのリポジトリ自体はGitHubで活発です（最終アクティビティは2026年10月6日）。MLC Chatは無料・オープンソースで、標準GGUFではなくMLC LLMツールチェーンでコンパイルされたモデルを動作させ、カタログはPocketPal AIやLocally AIに追いつけていません。詳しいレビュー：[MLC Chatレビュー](/ja/power-local-llm/mlc-chat-review)。',
        items: [
          '**概要：** MLC LLMプロジェクトのiOSリファレンスアプリ。Apple Silicon上でMLC LLMのMetal加速推論を実演します。',
          '**インストール：** App Store → "MLC Chat"。無料。iOS/iPadOS 17.0以降が必要です。',
          '**バージョンと最終更新：** v1.6、2024年9月27日リリース（App Storeのバージョン履歴。Llama 3.2 3Bを追加）。それ以前：1.5でGemma 2 2Bを追加（2024年8月）、1.4でPhi-3、Mistral v3、Qwen2を追加（2024年6月）。iPhone版の最終更新は13か月以上前 — 古さの警告を表示中。',
          '**速度（プロジェクトの主張であり、ここでは計測していません）：** MLC LLMプロジェクトは、Metal加速エンジンが双方の対応モデルについて同一iPhoneでllama.cppベースのアプリより高速と説明しています。しかしアプリ自体のモデルリストはPhi-4 MiniやGemma 3のような現在の推奨モデルより前のもので、自前でコンパイルしない限り、2026年の推奨モデルでこの優位性を検証できません。',
          '**モデルライブラリ：** アプリが停滞する前にMLC LLMプロジェクトがコンパイルしたモデルに限定されます。Llama 3.2 3B、Gemma 2 2B、Phi-3、Mistral v3、Qwen2など2024年当時のモデルです。すべてのHugging Face GGUFが動作するわけではなく、App Storeビルドには現行世代の小型モデルは含まれていません。',
          '**最適な用途：** すでにMLC LLMツールチェーンに投資しており、自分でモデルをコンパイルする意欲がある開発者、または2025年以前のモデルのうち、すでに同梱されているものを特に必要とするユーザー。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'MLC ChatのApp Storeビルドは2024年9月27日以降更新されていないため、モデルピッカーにPhi-4 Mini、Qwen3、Gemma 3が現れることは期待しないでください。現行世代のモデルをMetalクラスのGPU効率で今すぐ使いたい場合、Locally AI（Apple MLX）、PocketPal AI（Metal Performance Shadersを使うllama.cpp）、Google AI Edge Gallery（Gemma 4）が、積極的にメンテナンスされている代替です。',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm：App Store非掲載、ソースは入手可能',
        content:
          '**古さの警告：LLM Farmの最後のリリース（1.4.3）は2025年1月27日、最後のコードプッシュは2026年1月30日で、9か月近く更新がなく、メンテナンスされていない可能性があります。** PromptQuorumのレビューでは、App Storeからの削除は2025年8月とされています。公式のGitHub READMEは、App StoreとTestFlightの両方で「一時的に利用不可」と説明しています。プロジェクト（GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)）はオープンソースのままで、2026年10月までGitHub Issueの活動が見られますが、新規ユーザーはApp Storeからインストールできず、Xcodeでソースからビルドする必要があります（README：macOS 13以降、iOS 16以降）。詳しいレビュー：[LLM Farmレビュー](/ja/power-local-llm/llm-farm-review)。',
        items: [
          '**概要：** 開発者@guinmoon制作のiOSアプリ。GGUFモデルを豊富な設定オプションで動作させ、以前はApp Storeで配布されていました。',
          '**現在の入手可能性：** 今回の更新時点で、App StoreまたはTestFlightからはインストールできません。ソースコードは公開・ビルド可能なままです。',
          '**ソースからのビルド：** リポジトリをクローンし、Xcodeで開き、無料または有料のApple Developerアカウントでデバイスにビルドします。App Store掲載のないオープンソースiOSアプリの標準的なサイドローディング手順です。',
          '**公開されている設定（ビルド後）：** 温度、Top-p、Top-k、Mirostatサンプリング、繰り返しペナルティ、モデルごとのシステムプロンプト、チャットテンプレート選択、コンテキストウィンドウ長。',
          '**最適な用途：** Xcodeでソースからアプリをビルドすることに抵抗がなく、特にMirostatサンプリング制御を必要とする開発者。それ以外の人はPocketPal AIまたはLocally AIを使ってください。どちらも完全にApp Storeからインストール可能で無料です。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM FarmへのApp Storeリンクが機能すると期待しないでください。他所で見つけたそのようなリンクは古いものとして扱ってください。ソースからのビルドにはXcodeとiOSコード署名の基本知識が必要です。それが手間に感じるなら、PocketPal AIが同じ「柔軟な無料チャットアプリ」というユースケースをApp Storeの範囲内でカバーします。',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence：システム統合型オンデバイスAI',
        content:
          '**Apple IntelligenceはiPhone 15 Pro以降（iPhone 15 Pro世代。報道では8 GB RAM、AppleはRAMを公表していません）でApple独自の約3Bファウンデーションモデルをオンデバイスで動作させます。** 標準ではチャットアプリではありません。メール（Smart Reply）、メッセージ（文章ツール）、メモ（要約）、通知サマリーのシステム機能を担います。iOS 26以降、Appleの Foundation Modelsフレームワークにより、サードパーティ開発者が同じオンデバイスモデルを直接呼び出せるようになり、Locally AIのようなアプリはこれを使って本格的なチャットインターフェースを提供しています。iOS 27ではこのフレームワークが拡張されます。Appleの開発者ガイドによると、アプリはApple自身のモデルやクラウドモデルを含め、言語モデルプロトコルに準拠する任意の言語モデルを使用できます。',
        items: [
          '**場所：** iOS 18+に統合されています（Foundation ModelsフレームワークはiOS 26で追加）。「設定」→「Apple Intelligence & Siri」で有効化できます。',
          '**ハードウェア要件：** iPhone 15 Pro / 15 Pro Max、iPhone 16シリーズ、iPhone 16e、iPhone 17シリーズ、そして2026年のiPhone 18 Pro、18 Pro Max、iPhone Duo（A20 Pro）。旧モデル（14以前）はApple Intelligenceに非対応です。購入前に、iOS 27向けのAppleの最新の対応リストを確認してください。',
          '**Siri AI（iOS 27）：** Appleは、Siri AIをiOS 27のベータ版として提供し、英語から先行して展開するとしています。iOSではEUで当初は利用できず、一部のサーバー側機能には1日あたりの利用上限があります。このガイドのオンデバイスのチャットアプリとは別の機能です。',
          '**オンデバイス機能：** あらゆるテキストフィールドでのWriting Tools（書き直し・要約・校正）、メール・メッセージでのSmart Reply、通知サマリー、Genmoji生成。',
          '**Foundation Modelsフレームワーク（iOS 26以降）：** 開発者が数行のコードで同じオンデバイスモデルに直接アクセスできるネイティブSwift API。Locally AIはこれを使ってチャットオプションとして提供しており、Shortcutsの「モデルを使用」アクションもこれを通じて、プロンプトをオンデバイスモデル、Private Cloud Compute、またはChatGPTにルーティングできます。',
          '**Private Cloud Compute：** オンデバイスモデルの処理能力を超えるタスクの場合、Apple IntelligenceはPrivate Cloud Compute（PCC）にフォールバックします。Appleが運営するより大型モデルのサーバーで、Appleはユーザーデータを保持しないと説明しています。PCCはopt-inで無効化可能です。',
          '**チャットアプリとの関係：** Apple Intelligenceは補完的な存在であり、代替ではありません。システム機能はiOS内アプリでの文章書き直しと要約を担い、PocketPal AI、Private LLM、Locally AI、MLC Chatは任意の質問に対応する専用チャットインターフェースを提供します。そしてLocally AIは今やApple独自のモデルにも同様のインターフェースを提供できます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Apple Intelligenceだけが目的（メールの書き直し、通知の要約）なら、別途チャットアプリは不要です。「量子トンネルをわかりやすく説明して」や「Xのプロジェクト計画を作成して」といった質問をモデルに投げかけたいなら、チャットアプリをインストールしてください。PocketPal AIのような専用アプリでも、Apple自身のオンデバイスモデルにチャットウィンドウを提供できるLocally AIでも構いません。',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'iPhoneモデル別推奨モデル',
        content:
          '**iPhoneのRAMがモデルサイズの上限を決めます。チップの世代ではありません。** 6 GB iPhone（14 Pro、15）は1.7Bモデルを快適に動かせます。8 GB以上のiPhone（15 Pro、16シリーズ、16e、17シリーズ）は3B〜4Bモデルを快適に、7Bモデルをゆっくり動かせます。Phi-4 Miniと並んで試す価値のある新しい小型モデルは、Gemma 4 E2BとE4B（Google、2026年4月。LiteRT-LMファイルで約2.58 GBと3.65 GB）、およびQwen3.5小型シリーズ（Alibaba、2026年3月。0.8B、2B、4B、9B、Apache 2.0。Artificial Analysisのまとめによる）です。PromptQuorumにはこれらの速度の数値がありません。Locally AIとGoogle AI Edge Galleryが直接提供しています。モバイル以外の全ハードウェアクラスを網羅した広範なモデルガイドは [2026年版ベストローカルLLM](/ja/local-llms/best-local-llms-2026) をご参照ください。',
        image: '/images/iphone-llm-apps-models-tier-ja.svg',
        imageCaption: 'iPhoneのRAM容量別おすすめローカルLLMモデル：4 GB機種からiPhone 17 Pro（12 GB）まで',
        columns: ['iPhoneモデル（年・RAM）', '推奨モデル', 'ダウンロードサイズ', '目安の速度'],
        rows: [
          { 'iPhoneモデル（年・RAM）': 'iPhone 18 Pro / Pro Max（2026年、報道で約12 GB）', '推奨モデル': '17 Proと同様に開始。RAMはApple未公表', 'ダウンロードサイズ': '約2.5〜3.7 GB', '目安の速度': '数値なし' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 17 Pro / 17 Pro Max（2025年、12 GB）', '推奨モデル': 'Phi-4 Mini / Llama 3.2 3B / Gemma 4 E4B', 'ダウンロードサイズ': '約2.5〜3.7 GB', '目安の速度': '約13〜20トークン/秒（Phi-4 Mini）' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 16シリーズ / 16e / 17（2024〜2025年、8 GB）', '推奨モデル': 'Phi-4 Mini（3.8B Q4_K_M）または Gemma 4 E2B', 'ダウンロードサイズ': '約2.6〜2.7 GB', '目安の速度': '約10〜15トークン/秒（Phi-4 Mini）' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 15 Pro / Pro Max（2023年、8 GB）', '推奨モデル': 'Phi-4 Mini（3.8B Q4_K_M）', 'ダウンロードサイズ': '約2.7 GB', '目安の速度': '約8〜12トークン/秒' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 13 Pro / 14 Pro / Pro Max（6 GB）', '推奨モデル': 'Qwen3 1.7B または SmolLM 2 1.7B（Q4_K_M）', 'ダウンロードサイズ': '約1.1 GB', '目安の速度': '約15〜20トークン/秒' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 14 / 14 Plus / 15 / 15 Plus（6 GB）', '推奨モデル': 'Qwen3 1.7B または SmolLM 2 1.7B（Q4_K_M）', 'ダウンロードサイズ': '約1.1 GB', '目安の速度': '約12〜18トークン/秒' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 13 / 12 / SE / 旧モデル（4 GB）', '推奨モデル': 'オンデバイスLLMには非推奨', 'ダウンロードサイズ': '—', '目安の速度': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '6 GB RAMの旧世代iPhoneでは、2026年においてQwen3 1.7BやSmolLM 2 1.7B（HuggingFace）が妥当な選択です。同じサイズクラスの新しい選択肢として、Qwen3.5 2BとGemma 4 E2Bがあります。これほど小さいモデルは短い回答（1〜3段落）は一貫して生成できますが、複数ステップの推論は苦手です。6 GB iPhoneにPhi-4 Miniをインストールしないでください。名目上は収まりますが、他のアプリがメモリを必要とするとiOSがアプリを強制終了します。表の速度の数値は、Phi-4 Mini、Llama 3.2 3B、Qwen3 1.7Bについて丸めた目安の範囲で、アプリのバージョンや検証日には紐づいていません。Gemma 4とQwen3.5の数値はここにはありません。AppleのiPhone製品ページにはRAMの記載がありません。ここで挙げたRAMの数値は広く報じられている仕様で、18 Proの約12 GBは報道に基づく数値です。',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'バッテリー消耗と熱スロットリング',
        content:
          '**iPhoneでのオンデバイスLLM推論はCPU/GPU負荷が高く、熱を発生させます。** 目安（PromptQuorumの統制された計測ではありません）として、アクティブな推論は約3〜5 Wを消費し、継続的な生成はチップをスロットリングさせ、iPhone 16 Proで1時間あたり約20〜30%バッテリーを消耗することがあります。',
        image: '/images/iphone-llm-apps-battery-thermal-ja.svg',
        imageCaption: 'iPhoneでローカルLLMを動かす際のバッテリーと発熱ガイド：消費電力、熱スロットリング、冷却のコツ',
        items: [
          '**バッテリー消耗（アクティブなチャット、目安）：** iPhone 16 ProでPhi-4 Miniを使用時、1時間あたり約20〜30%。',
          '**継続的な生成は熱スロットリングを引き起こすことがあります。** チップが高温になると、iOSがクロック速度を下げ、トークン/秒が低下します。いつ始まり、どれだけ遅くなるかは、端末、ケース、充電の有無、室温によって異なり、PromptQuorumは計測していません。冷却すれば速度が戻ります。',
          '**対策：** 長い推論セッション中は、iPhoneを画面を上にした状態で硬い平面に置いてください（手で持ったりポケットに入れないでください）。放熱が改善されます。パッシブヒートシンクケースは有効ですが、短時間のやりとりにはほぼ不要です。',
          '**ファントム消耗：** 生成後にチャットアプリをバックグラウンドで開いたままにしても、RAMは割り当て済みですが推論は実行されません。バッテリーへの影響は最小限です。アプリを完全に閉じると約3 GBのRAMが解放されます。',
          '**推論中のMagSafe充電：** 推論中の充電は、どのiPhoneでも発熱が増える場合があり、iPhone 15 Proでは特に増えます。本体が熱くなったら、充電か生成を一時停止するか、推論後に充電してください。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '直射日光下や熱い車内でiPhoneのオンデバイスLLM推論を実行しないでください。直射日光下や熱い車内では、チップが熱限界に早く達することがあり、スロットリングや、Appleの「iPhoneを冷やす必要があります」の警告が出る可能性があります。多くの場合、アプリが終了するのではなく、生成速度が遅くなります。',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts、Siri、サイドローディング',
        content:
          '**iOSとの統合度はアプリによって大きく異なります。** Private LLMとLocally AIはどちらもShortcutsに対応しています。PocketPal AI、Google AI Edge Gallery、MLC Chatはスタンドアロンのチャットアプリで、READMEやApp Storeの掲載情報にShortcutsやSiriの統合は記載されていません。',
        image: '/images/iphone-llm-apps-ios-integration-ja.svg',
        imageCaption: 'iPhoneローカルLLMアプリのiOS連携：ショートカット、Siri、オープンソース、App Store対応の有無',
        items: [
          '**Private LLM** は、開発元によるとShortcutsとSiriに連携し、x-callback-urlに対応するアプリへ応答を渡せます。ここで取り上げるチャットアプリの中で最もiOSネイティブです。',
          '**Locally AI** はShortcutsアクションを無料で提供し、Foundation Modelsフレームワーク連携によりShortcutをApple自身のオンデバイスモデルにルーティングできます。Siriの音声トリガーはありませんが、支払いなしでShortcuts自動化が可能です。',
          '**PocketPal AI** はスタンドアロンのチャットアプリです。READMEにShortcutsアクションやSiri統合の記載はありません。アプリを開いてチャットします。',
          '**Google AI Edge Gallery** はスタンドアロンのチャット兼デモアプリです。App Storeの掲載にShortcutsアクションやSiri統合の記載はありません。',
          '**MLC Chat** はMLC LLMプロジェクトのリファレンスアプリで、iOS統合は最小限、2024年9月以降iPhone版の更新もありません。Shortcutsアクションなし。',
          '**LLM Farm** は現在App Storeになく、ソースからビルドした場合もShortcutsアクションはありません。',
          '**Apple Intelligence** は「モデルを使用」アクション（iOS 18.4+、iOS 26でFoundation Modelsフレームワークとともに拡張）でiOS Shortcutsと統合します。これはプロンプトをオンデバイスモデル、Private Cloud Compute、またはChatGPT（設定可能）にルーティングします。オンデバイスの出力を他のShortcutsアクションに連結できます。',
          '**サイドローディング：** PocketPal AI、Private LLM、Locally AI、Google AI Edge Gallery、MLC ChatはApp Storeにあり、サイドローディングやジェイルブレイクは不要です。Apple IntelligenceはiOS内蔵です。LLM Farmは例外で、インストールにはXcodeでのソースビルドが必要になりました。EUでは、DMAに基づく代替アプリマーケットプレイスがありますが、どのアプリを提供するかは各開発者次第です。開発元の公式な入手経路からインストールしてください。これらのアプリに代替マーケットプレイスは不要です。',
        ],
        promptExamples: [
          {
            label: 'Private LLMのShortcut：選択テキストを要約',
            text: '1. アクション：「選択したテキストを取得」（iOS Share Sheetの入力）。\n2. アクション：Private LLMのテキスト生成（Private LLMアプリのShortcutsアクションから）→ プロンプト：「以下のテキストを3つの箇条書きで要約してください：[選択したテキスト]」→ アプリにインストール済みのモデルを選択。\n3. アクション：「結果を表示」または「クリップボードにコピー」。\nShare Sheetに追加することで、あらゆるアプリの任意のテキストで完全オフラインで実行できます。アクション名は開発元の説明に基づくもので、アプリのバージョンによって異なる場合があります。',
          },
          {
            label: 'Apple IntelligenceのShortcut：トーンを調整',
            text: '1. アクション：「クリップボードを取得」。\n2. アクション：「モデルを使用」→ モデル：On-device → プロンプト：「これをプロフェッショナルで簡潔なトーンに書き直してください：[クリップボード]」。\n3. アクション：「クリップボードにコピー」。\nロック画面ウィジェットに割り当てて、コピーしたものをワンタップで書き直せるようにします。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '運転中や料理中のハンズフリー利用には、Private LLMは、このガイドのチャットアプリの中で開発元がSiri統合を掲げる唯一のアプリで、端末に触れずに使えます。Apple IntelligenceはSiriを通じた音声操作に対応していますが、システムタスク（文章作成、要約、アプリ操作）のみで、チャットアプリのような一般的なQ&Aには対応していません。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**iPhoneのRAMが許容する以上のモデルをインストールする。** 8 GB iPhoneの7Bモデルは、チャットには遅すぎることが多く、iOSが別のアプリのためにメモリを回収すると終了されることがあります。先にPocketPal AIの内蔵ベンチマークで測定してください。お使いのiPhoneクラスに合った推奨モデルを使用してください（8 GBデバイスは3B〜4B、6 GBデバイスは1.7B）。',
          '**オンデバイスモデルにクラウドAIの品質を期待する。** Phi-4 Mini（3.8B）はそのサイズとしては印象的ですが、GPT-5.5ではありません。チャット・要約・下書き・簡単なQ&Aに使い、複数ステップの推論・複雑なコード生成・微妙な創作は対象外です。',
          '**直射日光下や熱い車内で推論を実行する。** 熱スロットリングが早く発動することがあり、生成速度が低下し、「iPhoneを冷やす必要があります」の警告が表示される場合があります。室温で推論を実行してください。',
          '**3つ以上のチャットアプリをそれぞれ3 GBのモデルとともにインストールしたままにする。** 重複したモデルで約10 GBのストレージを消費します。1つのアプリと1つのモデルを選び、必要と確信できるまで他はアンインストールしてください。',
          '**Apple Intelligenceにはチャットインターフェースが全くないと思い込む。** iOS 18まではその通りでしたが、iOS 26以降はLocally AIのようなアプリがFoundation Modelsフレームワーク経由でApple自身のオンデバイスモデルに本格的なチャットウィンドウを提供できます。システム機能（Writing Tools、Smart Reply）自体は依然としてチャットUIではありません。',
          '**App StoreでLLM Farmを探す。** 現在App Storeにはありません（PromptQuorumのLLM Farmレビューでは、削除は2025年8月とされています）。App Storeで検索しても時間の無駄です。同じ無料・柔軟なユースケースにはPocketPal AIを使うか、Mirostat制御が特に必要ならXcodeでソースからLLM Farmをビルドしてください。',
          '**「無料」は課金なしという意味だと思い込む。** PocketPal AIはローカルチャットは無料ですが、任意のプレミアムコンテンツ（Palsと「PocketPal Plus」）を販売しています。Locally AIとGoogle AI Edge Galleryにはアプリ内課金の記載がありません。インストール前に掲載情報のアプリ内課金欄を確認してください（PocketPal AIの米国App Storeの掲載では、2026年10月23日時点で年齢制限18+と表示されていました）。',
          '**速度表だけでモデルを判断する。** このガイドのトークン/秒の範囲は目安で、Gemma 4やQwen3.5のような新しいモデルは含まれていません。すでにダウンロードしたモデルを削除する前に、PocketPal AIのベンチマークで同じプロンプトを2つのモデルで実行してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考資料',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)（README、MITライセンス、2026年10月19日のリリースv1.20.1）および[App Storeの掲載](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)（バージョン履歴、アプリ内課金、年齢制限、iOS 15.1以降）。2026年10月23日に確認。',
          'Private LLM — [App Storeの掲載](https://apps.apple.com/app/apple-store/id6448106860)（v1.9.16、$4.99、iOS 17.0以降、ファミリー共有）および[privatellm.app](https://privatellm.app)（SiriとShortcuts、モデル一覧、iPhone・iPad・Mac対応の1回購入）。2026年10月23日に確認。',
          'Locally AI — [App Storeの掲載](https://apps.apple.com/us/app/locally-ai/id6741426692)（v1.66.0、無料、Element Labs Inc、iOS 18.1以降。LM Studioチーム）および[lmstudio.ai/locally](https://lmstudio.ai/locally)（LM Link）。2026年10月23日に確認。',
          'Google AI Edge Gallery — [App Storeの掲載](https://apps.apple.com/app/id6749645337)（v1.0.13、無料、iOS 17.0以降、Gemma 4、Agent Skills、Thinking Mode）、[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)、およびGoogleの[LiteRT-LM Gemma 4ページ](https://developers.google.com/edge/litert-lm/models/gemma-4)（E2B/E4Bのファイルサイズとメモリ、ベンダー値）。2026年10月23日に確認。',
          'MLC Chat / MLC LLMプロジェクト — [App Storeの掲載](https://apps.apple.com/us/app/mlc-chat/id6448482937)（v1.6、2024年9月27日、バージョン履歴）、[llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html)、[github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)（エンジンのリポジトリ）。2026年10月23日に確認。',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)（README：TestFlightとApp Storeで「一時的に利用不可」。2025年1月27日のリリース1.4.3。最後のプッシュは2026年1月30日）、および2025年8月の削除については[PromptQuorumのLLM Farmレビュー](/ja/power-local-llm/llm-farm-review)。2026年10月23日に確認。',
          'Apple Intelligenceとオンデバイスファウンデーションモデル — [Apple Machine Learning Research](https://machinelearning.apple.com)、[What is new in iOS 27 開発者ガイド](https://developer.apple.com/wwdc26/guides/ios/)（Foundation Modelsフレームワーク）、[iPhone 18 Proのページ](https://www.apple.com/iphone-18-pro/)（A20 Pro、デュアル16コアNeural Engine、Siri AIベータ、RAMの記載なし）、[iPhone Duoのページ](https://www.apple.com/iphone-duo/)。2026年10月23日に確認。',
          'Qwen3.5小型シリーズ（0.8B〜9B、2026年3月）— [Artificial Analysisのまとめ](https://artificialanalysis.ai/articles/qwen3-5-small-models)。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'iPhoneは本当に7Bモデルを動かせますか？',
            a: 'iPhone 15 Pro以降（8 GB RAM）では技術的には可能ですが、実用的な速度では動作しません。iPhone 16 Proの7B Q4モデルは、快適なチャットには遅すぎることが多いです（目安）。iOSは他のアプリがメモリを必要とするとアプリを強制終了する傾向もあります。日常のオンデバイスチャットには3B〜4Bモデル（Phi-4 Mini、Llama 3.2 3B、Gemma 3 4B）を使用してください。7B以上の品質が必要なら、Ollamaを実行しているMacやPCにリモート接続してください。',
          },
          {
            q: 'ローカルAIはiPhoneのバッテリーを消耗させますか？',
            a: 'はい。アクティブな推論は通常約3〜5 Wを消費し、目安として、iPhone 16 Proで1時間あたり約20〜30%バッテリーを消耗することがあります。ときどきのチャット（数回のプロンプト）なら影響は小さいです。継続的な使用（長い会話、複数の要約タスク）の場合はiPhoneを充電器につないでください。推論なしでRAMに留まるモデル自体のバッテリーへの影響は無視できる程度です。',
          },
          {
            q: 'ローカルAI使用中にiPhoneは熱くなりますか？',
            a: 'はい、特に長い連続生成中は熱くなることがあります。チップが高温になるとiOSがクロック速度を下げ、トークン/秒が低下します。いつ、どれだけ下がるかは、端末、ケース、充電の有無、室温によって異なり、PromptQuorumは計測していません。対策：長いセッションでは硬い平面に画面を上にして置き（手で持たない）、直射日光を避けてください。短いやりとりでは、通常は目立つ発熱はほとんどありません。',
          },
          {
            q: 'ローカルモデルでSiriを使えますか？',
            a: 'はい、Private LLM（$4.99の買い切り）を使えば可能です。開発元によると、SiriとShortcutsに直接連携するため、プロンプトをインターネット接続なしでオンデバイスモデルに送れます。PocketPal AI、Locally AI、Google AI Edge Gallery、MLC ChatにはSiriの音声統合の記載がありませんが、Locally AIはShortcuts自動化に対応しています。Apple IntelligenceはSiriに統合されていますが、システムタスク（文章作成、要約、アプリ操作）のみで、一般的なQ&Aには対応していません。Siri AIはiOS 27のベータ機能として別に提供され、英語が先行し、EUでは当初利用できません。',
          },
          {
            q: 'これらのアプリはiPhone SEや古いiPhoneでも動作しますか？',
            a: '限定的です。iPhone SEとiPhone 13 / 12（4 GB RAM）は、2026年のオンデバイスLLMの実用下限を下回ります。iPhone 14 / 15（Pro以外、6 GB RAM）は1.7Bモデル（Qwen3 1.7B、SmolLM 2 1.7B）は動かせますが、3B以上は不可です。iPhone 13 ProとiPhone 14 Pro（6 GB RAM）も1.7Bまでです。iPhone 15 Pro（8 GB RAM）はPhi-4 Miniのような3Bモデルをおおよそ毎秒8〜12トークン（目安）で動かせます。古いiPhoneでは、自宅のMacやPCへのリモート接続の方が現実的です。',
          },
          {
            q: 'iPhoneとMacの間でチャット履歴を同期できますか？',
            a: 'PocketPal AI、Private LLM、Google AI Edge Gallery、MLC Chatには対応していません。チャット履歴は各デバイスにローカル保存され、iCloud同期はありません。Private LLMとLocally AIはどちらもMacでもネイティブに動作するユニバーサル購入/ダウンロードですが、それでもiPhone版とMac版の間で履歴は同期しません。デバイス間でチャット履歴を共有する実用的な方法は、自宅のMacでOpen WebUIを稼働させ、iPhoneとMacの両方からブラウザでアクセスすることです。Open WebUIはチャット履歴をサーバー側に保存します。',
          },
          {
            q: 'これらのアプリはApp Store以外でも入手できますか？',
            a: 'PocketPal AIはオープンソースでXcodeを使ってソースからビルドできますが、App Storeビルドが標準配布です。LLM Farmは例外で、現在はソースからのビルドが必須です。現在App StoreにもTestFlightにもありません（READMEには「一時的に利用不可」と記載）。Private LLM、Locally AI、Google AI Edge Gallery、MLC ChatはApp Storeのみです。EUでは、DMAに基づく代替アプリマーケットプレイスがありますが、どのアプリを提供するかは各開発者次第です。開発元の公式な入手経路からインストールしてください。これらのアプリに代替マーケットプレイスは不要です。',
          },
          {
            q: 'ジェイルブレイクが必要なアプリはありますか？',
            a: 'いいえ。PocketPal AI、Private LLM、Locally AI、Google AI Edge Gallery、MLC Chat、Apple Intelligenceはすべて標準iOSで動作します。Xcodeを使ったLLM Farmのソースビルドもジェイルブレイクを必要としません。ジェイルブレイクの脆弱性ではなく、開発者向けの標準的なサイドローディングを使用します。これらのアプリのいずれにもジェイルブレイクは不要かつ非推奨です。',
          },
          {
            q: 'iOS ShortcutsでローカルAIを使えますか？',
            a: 'はい、Private LLM（Shortcutsアクション）、Locally AI（無料のShortcutsアクション）、Apple Intelligence（「モデルを使用」アクション、iOS 18.4+、iOS 26で拡張）を通じて使えます。PocketPal AI、Google AI Edge Gallery、MLC ChatにはShortcutsアクションの記載がありません。ここで比較したアプリの中では、Locally AIが、Shortcuts対応とApple自身のオンデバイスモデルへのアクセスの両方を掲載する唯一の無料の選択肢です。',
          },
          {
            q: 'ローカルAIとiPhoneのChatGPTアプリを比べるとどうですか？',
            a: 'オンデバイスモデル（Phi-4 Mini、Llama 3.2 3B）は複雑な推論、幅広い世界の知識、マルチモーダルタスクではフロンティア級のクラウドモデルに依然として大きく劣りますが、シンプルな質問では（ネットワーク往復なしで）より速く、各アプリのドキュメントによれば、チャットは端末内に留まります。正直なトレードオフ：日常的・プライベートなタスクにはローカルAI、ときどきの難しい質問にはChatGPTなどのクラウドアプリ。2026年の多くのユーザーは両方を持ち、クエリに応じて選んでいます。',
          },
          {
            q: 'LLM FarmはApp Storeになくなった今も安全に使えますか？',
            a: 'ソースコードはGitHubで公開されており、2026年もIssueの活動が続いていますが、最後のリリース（1.4.3）は2025年1月27日、最後のコードプッシュは2026年1月30日で、メンテナンスされていない可能性があります。ソースからビルドしてサイドローディングした場合、AppleのApp Store審査も経ません。Mirostatサンプリング制御が特に必要でなければ、PocketPal AIが同じ無料・柔軟・オープンソースのユースケースをカバーしつつ、AppleのApp Store標準審査を経てApp Storeに留まっています。',
          },
          {
            q: 'このiPhoneアプリのうち、無料なのはどれですか？',
            a: 'PocketPal AIは無料（MITライセンス）で、プレミアムPalsと「PocketPal Plus」のアプリ内課金が任意です。Locally AIとGoogle AI Edge Galleryは無料で、アプリ内課金の記載はありません。MLC Chatは無料です。LLM Farmは無料ですが、ソースからのビルドが必要です。Private LLMは$4.99の買い切りで、アプリ内課金の記載はありません。Apple IntelligenceはiOSに内蔵されています。価格は2026年10月23日に米国App Storeで確認したもので、国によって異なる場合があります。',
          },
          {
            q: 'iPhone DuoはオフラインでローカルのLLMを動かせますか？iPhone 18 Proはどうですか？',
            a: '原則として可能です。どちらもAppleのA20 Proチップを搭載しており、このガイドのアプリはiOSの最低要件を満たすiPhoneで動作します。モデルサイズを決めるのはRAMですが、AppleのiPhone 18 ProとiPhone Duoのページには、RAMの数値が記載されていません。報道ではiPhone 18 Proは12 GBとされていますが、未確認です。PromptQuorumには、どちらの端末についても計測済みの速度データがありません。PocketPal AIをインストールし、内蔵ベンチマークでご自身の端末の実力を確認してください。',
          },
          {
            q: 'iPadでもこれらのアプリは動きますか？',
            a: 'ほとんどは動作します。PocketPal AI（iPadOS 15.1以降、READMEによるとiPadを完全サポート）、Private LLM（iPadOS 17.0以降）、Locally AI（iPadOS 18.1以降）はiPad対応を掲載しています。Google AI Edge Galleryの掲載にはiOS 17.0以降が必要とあるため、お使いのiPadで対応するかは掲載ページで確認してください。iPhoneと同じく、収まるモデルを決めるのはRAMです。iPad向けの情報は[タブレットでAIを動かす方法](/ja/power-local-llm/run-ai-on-tablet-ipad-android)をご覧ください。',
          },
          {
            q: 'LLM FarmはなぜApp Storeから消えたのですか？',
            a: 'プロジェクトのREADMEには「The app is temporarily unavailable in TestFlight and Appstore.」とあります。PromptQuorumは削除の理由を公に示した情報を見つけられなかったため、他所で読んだ説明は未確認として扱ってください（[LLM Farmレビュー](/ja/power-local-llm/llm-farm-review)を参照）。ソースコードは公開されたままですが、最後のリリースは2025年1月27日の1.4.3です。App Storeからインストールできる無料の代替には、PocketPal AIまたはLocally AIを使ってください。',
          },
          {
            q: 'iPhone向けのOllamaアプリはありますか？',
            a: 'Ollamaのダウンロードページに掲載されているのはmacOS、Windows、Linuxで、iPhoneアプリはありません。iPhoneからOllamaやLM Studioのモデルを使うには、MacやPCでサーバーを動かし、クライアントアプリから接続します。Locally AIには、MacのLM StudioへのLM Link（LM Studioが暗号化接続と説明する機能）があります。端末上だけで完結するモデルには、このガイドのアプリを使ってください。',
          },
          {
            q: 'Gemma 4とPhi-4 Mini、どちらをダウンロードすべきですか？',
            a: 'PromptQuorumには、iPhone上での両者の直接比較ベンチマークはありません。判断材料は次のとおりです。Gemma 4 E2BとE4BはGoogleのスマートフォン向けモデルで（Google AI Edge GalleryではLiteRT-LMファイルで約2.58 GBと3.65 GB。Locally AIもGemma 4を掲載）、Phi-4 Mini（3.8B Q4_K_M、約2.7 GB）はこのガイドの速度の基準モデルです。8 GBのiPhoneでは、ご自身のプロンプトで両方を試し、PocketPal AIのベンチマークでトークン/秒を比べてください。6 GBのiPhoneでは1.7Bクラスのモデルにとどめてください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 無料オープンソースの定番アプリのPromptQuorumによる詳細レビュー。',
          '[Private LLMレビュー](/ja/power-local-llm/private-llm-review) — SiriとShortcuts対応の有料オプション。',
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — LM Studioチーム製の無料MLXアプリ。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Google製の無料Gemma 4アプリ。',
          '[MLC Chatレビュー](/ja/power-local-llm/mlc-chat-review)と[LLM Farmレビュー](/ja/power-local-llm/llm-farm-review) — このガイドで古さの警告を付けた2つのアプリ。',
          '[2026年版 AndroidのベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けアプリ比較（Maid、Layla、MLC Chat、Termux + Ollama）。',
          '[タブレットでAIを動かす方法：iPadとAndroid（2026年）](/ja/power-local-llm/run-ai-on-tablet-ipad-android) — タブレットユーザー向けのプラットフォームガイド。',
          '[2026年版 モバイル向けLLMモデル比較：Phi-4 Mini vs Gemma 3 vs SmolLM](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — これらのアプリで使うモデルを選ぶためのコンパニオン記事。',
          '[2026年版 ベストローカルLLM](/ja/local-llms/best-local-llms-2026) — モバイルだけでなく全ハードウェアクラスを網羅した包括的なモデルガイド。',
          '[スマートフォンでローカル音声アシスタントを構築：Whisper + ローカルLLM](/ja/power-local-llm/voice-assistant-local-mobile-offline) — これらのアプリにオフライン音声入出力を拡張。',
          '[低スペックPC向け最良のローカルAIアプリ](/ja/power-local-llm/best-local-ai-app-low-end-pc) — より高性能な自宅マシンにリモート接続したいユーザー向けのデスクトップ代替。',
          '[Enclave AIレビュー 2026](/ja/power-local-llm/enclave-ai-review) — iPhone・iPad・Mac向けのオンデバイスAIアシスタントアプリEnclave AIの詳細。ドキュメント対話とSiri/Shortcuts自動化に対応。',
          '[2026年版 ローカルLLMソフトウェアディレクトリ](/ja/directory) — 全プラットフォームの注目ローカルLLMツール一覧。',
          '[Melhores Apps LLM Local para iPhone 2026 (Português)](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — このガイドのポルトガル語版',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-23',
    last_full_refresh: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'Meilleures applications d\'IA locale pour iPhone en 2026 (LLM sans WiFi)',
    seoTitle: 'Meilleures applications d\'IA locale pour iPhone 2026',
    intro:
      'Six options iPhone font tourner de vrais LLM entièrement sur l\'appareil en 2026 : PocketPal AI, Private LLM, Locally AI (par LM Studio), Google AI Edge Gallery, MLC Chat et Apple Intelligence (intégrée au système). Toutes fonctionnent sans WiFi une fois le modèle téléchargé. Ce guide les compare sur le coût, la bibliothèque de modèles, l\'intégration iOS, la confidentialité et l\'état de maintenance — avec des vitesses indicatives sur iPhone 16 Pro et iPhone 17 Pro et un guide de RAM incluant désormais l\'iPhone 18 Pro — et explique pourquoi LLM Farm est sorti du classement.',
    metaDescription:
      'Six façons de faire tourner des LLM sur iPhone en 2026 : PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat. Coût, vie privée et RAM.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-fr.webp',
    twitterDescription:
      'IA locale sur iPhone en 2026 : PocketPal AI (défaut gratuit), Private LLM ($4.99, Siri + Shortcuts), Locally AI (LM Studio, MLX), Google AI Edge Gallery (Gemma 4). Hors ligne après téléchargement.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 4B',
    ],
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM non publiée par Apple)',
      'iPhone Duo (A20 Pro, RAM non publiée par Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB RAM)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 16e (A18, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'Utilisateurs iPhone souhaitant faire tourner une IA en local de façon privée, sans abonnement cloud — voyageurs, personnes soucieuses de leur vie privée et développeurs explorant l\'inférence on-device.',
    readTime: '12 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'application LLM locale iPhone',
    targetKeywords: [
      'meilleure application llm locale iphone',
      'llm iphone sans internet',
      'pocketpal ai iphone',
      'private llm application',
      'mlc chat iphone',
      'llm farm ios',
      'iphone ia sans wifi',
      'applications ia locale iphone',
      'google ai edge gallery ios',
      'locally ai vs pocketpal',
      'ollama pour ios',
    ],
    leadAnswerBlock:
      '**Pour la plupart des utilisateurs iPhone en 2026, installez PocketPal AI depuis l\'App Store et téléchargez un petit modèle comme Phi-4 Mini (3.8B Q4_K_M, ~2.7 Go).** Gratuit (achats intégrés optionnels pour du contenu premium), open source (MIT), compatible avec iPhone 14 Pro et les modèles plus récents (tout iPhone avec 6 Go+ de RAM), il génère environ 10–15 tokens/sec (indicatif) sur iPhone 16 Pro pour le chat quotidien. Pour l\'intégration Siri et Shortcuts, Private LLM est l\'option payante ($4.99 en achat unique, iPhone, iPad et Mac). Locally AI — développé par l\'équipe LM Studio — est l\'application gratuite basée sur Apple MLX, avec support Shortcuts et accès au modèle de fondation on-device d\'Apple. Google AI Edge Gallery est l\'application gratuite de Google pour ses modèles Gemma 4, avec agent skills et mode réflexion. Les petits modèles plus récents — Gemma 4 E2B/E4B et Qwen3.5 — sont aussi disponibles dans ces applications (voir Modèles par génération d\'iPhone). MLC Chat reste l\'application de référence pour Metal, mais sa version iPhone n\'a pas été mise à jour depuis septembre 2024. LLM Farm n\'est actuellement ni sur l\'App Store ni sur TestFlight (son README indique « temporairement indisponible ») et ne s\'installe qu\'en compilant les sources. Apple Intelligence exécute aussi des modèles on-device mais est intégré au système, sans être une application de chat — il complète ces applications plutôt qu\'il ne les concurrence.',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure application LLM locale pour iPhone en 2026 ?',
        answer:
          'PocketPal AI est l\'option gratuite par défaut recommandée pour la plupart des utilisateurs — open source (MIT), installation via l\'App Store, compatible avec tout modèle GGUF de Hugging Face, et il fait tourner Phi-4 Mini (3.8B) à environ 10–15 tokens/sec (indicatif) sur iPhone 16 Pro. Private LLM est l\'option payante ($4.99 en achat unique, iPhone + iPad + Mac) avec Shortcuts et Siri. Locally AI, développé par l\'équipe LM Studio, est l\'option gratuite Apple MLX avec support Shortcuts et accès au modèle de fondation on-device d\'Apple. Google AI Edge Gallery est l\'application gratuite de Google pour Gemma 4. MLC Chat est accéléré par Metal, mais sa version iPhone est inactive depuis septembre 2024. Apple Intelligence exécute aussi des modèles on-device mais est intégré au système et complète ces applications plutôt qu\'il ne les remplace.',
        bullets: [
          'PocketPal AI — gratuit, open source (MIT), App Store, v1.20.1 (19 octobre 2026). Option par défaut recommandée pour la plupart des utilisateurs. Compatible avec tout modèle GGUF. Achats intégrés optionnels pour du contenu premium.',
          'Private LLM — $4.99 en achat unique (iPhone + iPad + Mac), v1.9.16 (14 septembre 2026). Option payante. Shortcuts + intégration Siri.',
          'Locally AI — gratuit, par l\'équipe LM Studio, v1.66.0 (15 octobre 2026). Moteur Apple MLX, support Shortcuts, accès aux Apple Foundation Models.',
          'Google AI Edge Gallery — gratuit, par Google, v1.0.13 (8 octobre 2026). Gemma 4, agent skills, mode réflexion, entrée image et audio.',
          'MLC Chat — gratuit, projet MLC LLM. Accéléré par Metal, mais l\'app iPhone n\'a reçu aucune mise à jour depuis la v1.6 (27 septembre 2024) et n\'est peut-être plus maintenue.',
          'Apple Intelligence — intégré au système, pas une application séparée. Modèle on-device d\'environ 3B utilisé par Mail, Messages et Notes.',
          'Modèle recommandé pour iPhone 16 Pro / 17 Pro : Phi-4 Mini (3.8B Q4_K_M, ~2.7 Go) — ~10–15 tokens/sec. Options plus récentes : Gemma 4 E2B/E4B, Qwen3.5 4B.',
          'Anciens iPhone (14 Pro) : Qwen3 1.7B ou SmolLM 2 1.7B — tient dans 6 Go de RAM, ~15–20 tokens/sec.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Données rapides', anchor: '#quick-facts' },
      { label: 'Quelle application iPhone installer en premier ?', anchor: '#which-app' },
      { label: 'Tableau comparatif des applications iPhone', anchor: '#comparison-table' },
      { label: 'PocketPal AI : option gratuite open source', anchor: '#pocketpal-ai' },
      { label: 'Private LLM : option payante avec intégration iOS', anchor: '#private-llm' },
      { label: 'Locally AI : application MLX gratuite de LM Studio', anchor: '#locally-ai' },
      { label: 'Google AI Edge Gallery : l\'application Gemma 4 gratuite de Google', anchor: '#google-ai-edge-gallery' },
      { label: 'MLC Chat : optimisé pour Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm : absent de l\'App Store, sources toujours disponibles', anchor: '#llm-farm' },
      { label: 'Apple Intelligence : IA on-device intégrée au système', anchor: '#apple-intelligence' },
      { label: 'Modèles par génération d\'iPhone', anchor: '#models-by-tier' },
      { label: 'Autonomie et surchauffe', anchor: '#battery-heat' },
      { label: 'Raccourcis iOS, Siri et chargement latéral', anchor: '#ios-integration' },
      { label: 'Erreurs fréquentes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**PocketPal AI est l\'option gratuite par défaut recommandée.** Open source (MIT), installation via l\'App Store, compatible avec tout modèle GGUF de Hugging Face. Le chat local ne demande aucun compte ; les Pals premium et « PocketPal Plus » sont des achats intégrés optionnels. Fait tourner Phi-4 Mini à ~10–15 tokens/sec sur iPhone 16 Pro. Point de départ recommandé pour la plupart des utilisateurs iPhone.',
          '**Private LLM est l\'option payante de ce guide ($4.99 en achat unique, sans abonnement).** Un seul achat couvre iPhone, iPad et Mac, et le partage familial l\'étend à six personnes. Bibliothèque de modèles sélectionnés ; selon le développeur, il s\'intègre à Siri et à Shortcuts.',
          '**Locally AI est l\'alternative gratuite basée sur MLX, développée par l\'équipe LM Studio.** Fait tourner des modèles Llama, Gemma (dont Gemma 4), Qwen et DeepSeek sur Apple MLX, fonctionne avec iOS Shortcuts et peut exposer le propre modèle de fondation on-device d\'Apple comme interface de chat.',
          '**Google AI Edge Gallery est l\'application Gemma 4 gratuite de Google pour iPhone.** Mode réflexion, agent skills et entrée image/audio ; les modèles tournent au format LiteRT-LM, pas GGUF. Google décrit toujours l\'application comme en développement actif.',
          '**MLC Chat est accéléré par Metal mais inactif sur iPhone.** Sa version App Store n\'a pas été mise à jour depuis la v1.6 du 27 septembre 2024 ; sa bibliothèque de modèles précède donc Phi-4 Mini et Gemma 3. Le moteur MLC LLM lui-même reste actif sur GitHub.',
          '**LLM Farm n\'est actuellement ni sur l\'App Store ni sur TestFlight.** Son propre README le décrit comme « temporairement indisponible ». Il reste open source et compilable via Xcode, mais sa dernière version est la 1.4.3 de janvier 2025 et son dernier push de code date du 30 janvier 2026.',
          '**Apple Intelligence est on-device mais n\'est pas une application distincte.** Le modèle de fondation d\'environ 3B d\'Apple alimente des fonctions système (Outils d\'écriture, Réponse intelligente, Résumés de notifications). Depuis iOS 26, les applications tierces peuvent l\'appeler via le framework Foundation Models, et Shortcuts peut l\'interroger avec l\'action « Utiliser le modèle ».',
          '**Modèle recommandé pour iPhone 16 Pro / 17 Pro : Phi-4 Mini (3.8B Q4_K_M, ~2.7 Go).** Gemma 4 E2B/E4B et Qwen3.5 4B sont des alternatives plus récentes, sans chiffres de vitesse PromptQuorum pour l\'instant. Anciens iPhone avec 6 Go de RAM (iPhone 14 Pro) : Qwen3 1.7B ou SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Données rapides',
        items: [
          '**Applications comparées :** PocketPal AI, Private LLM, Locally AI (par LM Studio), Google AI Edge Gallery, MLC Chat, Apple Intelligence (système) — ainsi que LLM Farm, actuellement absent de l\'App Store (README : « temporairement indisponible »).',
          '**Dernières mises à jour amont (vérifiées le 23 octobre 2026) :** PocketPal AI v1.20.1 (19 octobre 2026) · Locally AI v1.66.0 (15 octobre 2026) · Google AI Edge Gallery v1.0.13 (8 octobre 2026) · Private LLM v1.9.16 (14 septembre 2026) · app iPhone MLC Chat v1.6 (27 septembre 2024 — obsolète) · LLM Farm version 1.4.3 (27 janvier 2025), dernier push de code le 30 janvier 2026 — obsolète.',
          '**Appareils de référence pour les vitesses :** iPhone 16 Pro (A18 Pro, 8 Go de RAM) et iPhone 17 Pro (A19 Pro, 12 Go de RAM). Les vitesses sont des plages indicatives, pas un benchmark PromptQuorum contrôlé. L\'iPhone 18 Pro, l\'iPhone 18 Pro Max et l\'iPhone Duo (A20 Pro) n\'ont pas de chiffres de vitesse ici.',
          '**Moteurs d\'inférence :** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), MLC LLM avec Metal (MLC Chat), Google LiteRT-LM (Google AI Edge Gallery), runtime on-device propriétaire (Private LLM, Apple Intelligence).',
          '**iPhone minimum pour les modèles 3B+ :** iPhone 14 Pro (A16, 6 Go de RAM) pour 1.7B ; tout iPhone 8 Go+ (15 Pro, série 16, 16e, série 17, 18 Pro) pour 3B–4B.',
          '**Application gratuite recommandée :** PocketPal AI — App Store, open source, flexibilité des modèles.',
          '**Option payante :** Private LLM — $4.99 en achat unique (iPhone + iPad + Mac), support Shortcuts + Siri.',
          '**Hors ligne :** les six fonctionnent entièrement hors ligne une fois le modèle téléchargé ; selon le README ou la fiche de chaque application, le chat on-device n\'effectue aucun appel cloud (Apple Intelligence peut en option utiliser Private Cloud Compute).',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Quelle application iPhone installer en premier ?',
        content:
          '**Pour la plupart des utilisateurs : PocketPal AI depuis l\'App Store, puis téléchargez Phi-4 Mini (3.8B Q4_K_M) — ou un petit modèle plus récent comme Gemma 4 E2B/E4B ou Qwen3.5 4B.** Cette combinaison fonctionne sur iPhone 14 Pro et les modèles plus récents, ne coûte rien pour le chat et produit des résultats utilisables pour la conversation quotidienne, la synthèse et la rédaction rapide. Ne choisissez une autre application que si vous avez un besoin précis qu\'elle ne couvre pas.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-fr.webp',
        imageCaption: 'Quelle app d\'IA locale installer sur iPhone : tableau de décision de PocketPal AI gratuit à Private LLM avec Siri',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour la plupart des utilisateurs iPhone en 2026, installez PocketPal AI (gratuit, App Store) et téléchargez Phi-4 Mini ou un petit modèle plus récent comme Gemma 4 E2B — il couvre le chat quotidien, la synthèse et la rédaction sur tout iPhone avec 6 Go+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Six options iPhone font tourner l\'IA entièrement sur votre téléphone en 2026. PocketPal AI est le point de départ gratuit recommandé — installez-le, téléchargez une fois un fichier modèle de 2.7 Go, et vous disposez d\'un assistant de chat privé qui fonctionne dans le train sans WiFi. Private LLM est l\'option payante si vous voulez que Siri parle au modèle local. Locally AI, de l\'équipe LM Studio, est l\'alternative gratuite moderne avec support Shortcuts, et Google AI Edge Gallery est l\'application gratuite de Google pour ses modèles Gemma 4. La version iPhone de MLC Chat n\'est plus mise à jour. Apple Intelligence est intégré à iOS mais n\'est pas une application de chat. PocketPal AI convient à la plupart des usages.',
          },
        ],
        decisionBlock: {
          title: 'Décision : quelle application d\'IA locale pour iPhone ?',
          localIf: [
            'Vous voulez une IA de chat gratuite fonctionnant hors ligne → PocketPal AI',
            'Vous voulez que Siri parle à votre modèle local → Private LLM',
            'Vous voulez une app MLX gratuite avec Shortcuts et accès aux Apple Foundation Models → Locally AI',
            'Vous voulez le Gemma 4 de Google avec mode réflexion et agent skills → Google AI Edge Gallery',
            'Vous voulez expérimenter la chaîne d\'outils MLC LLM et acceptez une version iPhone sans mise à jour depuis septembre 2024 → MLC Chat',
            'Vous n\'avez besoin que d\'une aide à la rédaction dans Mail / Messages / Notes → Apple Intelligence (intégré)',
          ],
          cloudIf: [
            'Vous avez besoin de la qualité d\'un modèle 70B+ (Llama 3.3 70B, niveau GPT-5.5) → utilisez le cloud ou connectez-vous à distance à une machine domestique',
            'Vous avez besoin spécifiquement de GPT-5.5, Claude Opus ou Gemini → applications cloud (non disponibles en local)',
            'Vous avez besoin de vision en temps réel ou de sorties multimodales au-delà du texte → cloud (le multimodal on-device reste limité en 2026)',
          ],
          quick: [
            'Gratuit + convient à la plupart : PocketPal AI',
            'Payant + intégration native iOS : Private LLM',
            'Gratuit + écosystème LM Studio : Locally AI',
            'Gratuit + Gemma 4 de Google : Google AI Edge Gallery',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Installez PocketPal AI en premier, même si vous comptez payer Private LLM plus tard. Utilisez-le pour vérifier si l\'inférence on-device sur votre iPhone est assez rapide pour votre usage. Si oui, décidez si l\'intégration Shortcuts et Siri de Private LLM vaut $4.99. Sinon, vous avez économisé $4.99 en le découvrant avant de payer. PocketPal AI intègre aussi un benchmark qui mesure tokens/sec et mémoire sur votre propre iPhone — fiez-vous-y plutôt qu\'à n\'importe quel tableau, y compris celui ci-dessous.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif des applications iPhone',
        content:
          '**Les six options se distinguent sur trois axes importants pour la plupart des utilisateurs : le coût, la flexibilité des modèles et l\'intégration avec iOS.** Les écarts de vitesse existent mais sont plus faibles que l\'écart entre n\'importe laquelle de ces applications et un LLM cloud. Prix et versions relevés sur les fiches App Store US et les pages des projets le 23 octobre 2026.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-fr.webp',
        imageCaption: 'Comparatif des apps LLM locales sur iPhone : coût, vitesse et intégration de PocketPal AI, Private LLM et d\'autres',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI est l\'option gratuite par défaut recommandée, Private LLM l\'option payante, Locally AI le choix MLX gratuit de l\'équipe LM Studio, Google AI Edge Gallery l\'application Gemma 4 gratuite de Google, MLC Chat est inactif sur iPhone et Apple Intelligence est intégré au système.',
          },
          {
            type: 'plain-terms',
            text: 'Le choix se résume généralement à trois critères : voulez-vous payer pour l\'intégration Siri (Private LLM), voulez-vous gratuitement l\'écosystème LM Studio avec Shortcuts (Locally AI), ou le Gemma 4 de Google avec un mode réflexion (Google AI Edge Gallery). Pour tout le reste, PocketPal AI est le choix par défaut. Les vitesses du tableau sont des plages indicatives en quantisation Q4_K_M — le standard de l\'inférence mobile en 2026 — et non un benchmark contrôlé.',
          },
        ],
        columns: ['Application', 'Prix', 'Tokens/sec (Phi-4 Mini, 16 Pro)', 'Confidentialité', 'Idéal pour'],
        rows: [
          { 'Application': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)', 'Prix': 'Gratuit (MIT) + achats intégrés optionnels', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', 'Confidentialité': 'Chat on-device, sans compte (README)', 'Idéal pour': 'Défaut gratuit pour la plupart' },
          { 'Application': '[Private LLM](https://privatellm.app)', 'Prix': '$4.99 achat unique', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'Aucun chiffre', 'Confidentialité': 'On-device ; sans compte ni suivi (développeur)', 'Idéal pour': 'Shortcuts + intégration Siri' },
          { 'Application': '[Locally AI](https://lmstudio.ai/locally)', 'Prix': 'Gratuit (équipe LM Studio)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A — catalogue MLX (pas de Phi-4)', 'Confidentialité': 'On-device ; aucune collecte (fiche)', 'Idéal pour': 'MLX + Shortcuts, lien LM Studio' },
          { 'Application': '[Google AI Edge Gallery](https://apps.apple.com/app/id6749645337)', 'Prix': 'Gratuit (Google)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A — LiteRT-LM, Gemma 4', 'Confidentialité': 'On-device après téléchargement du modèle', 'Idéal pour': 'Gemma 4, mode réflexion, agent skills' },
          { 'Application': '[MLC Chat](https://llm.mlc.ai)', 'Prix': 'Gratuit (open source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A — bibliothèque antérieure à Phi-4', 'Confidentialité': 'Inférence locale (doc projet ; non vérifié)', 'Idéal pour': 'Utilisateurs MLC LLM (app iOS inactive)' },
          { 'Application': '[LLM Farm](https://github.com/guinmoon/LLMFarm)', 'Prix': 'Gratuit (compilation depuis les sources)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'Aucun chiffre', 'Confidentialité': 'Inférence locale (doc projet ; non vérifié)', 'Idéal pour': 'Développeurs (hors App Store, obsolète)' },
          { 'Application': '[Apple Intelligence](https://www.apple.com/apple-intelligence/)', 'Prix': 'Gratuit (intégré à iOS)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A (fonctionnalité système)', 'Confidentialité': 'Local + Private Cloud Compute opt-in', 'Idéal pour': 'Aide Mail, Messages, Notes' },
        ],
        note:
          '**Note sur Apple Neural Engine (ANE), Metal et MLX :** PocketPal AI et LLM Farm utilisent llama.cpp avec Metal Performance Shaders pour l\'inférence, qui s\'exécute sur le GPU. MLC Chat utilise MLC LLM avec une optimisation Metal plus poussée que le projet MLC LLM décrit comme plus rapide que les applications basées sur llama.cpp sur le même matériel (affirmation du projet ; PromptQuorum ne l\'a pas mesurée). Locally AI utilise Apple MLX, le framework de calcul open source d\'Apple, d\'une efficacité GPU comparable sur Apple Silicon. Google AI Edge Gallery exécute Gemma 4 via le runtime LiteRT-LM de Google. Apple Intelligence utilise l\'ANE spécifiquement pour le modèle système d\'environ 3B, plus économe en énergie mais moins flexible que l\'inférence basée sur Metal. Depuis iOS 26, les applications tierces peuvent appeler ce modèle système via le framework Foundation Models — Locally AI le fait déjà —, mais les modèles GGUF/MLX personnalisés ne peuvent toujours pas cibler directement l\'ANE. Apple indique que l\'A20 Pro de l\'iPhone 18 Pro dispose d\'un Neural Engine 16 cœurs double avec deux fois la puissance de calcul précédente ; c\'est une affirmation d\'Apple, et PromptQuorum n\'a pas mesuré ce qu\'elle change pour ces applications.',
        callouts: [
          {
            type: 'tip',
            text: 'Les tokens/sec sont des plages indicatives arrondies, données pour s\'orienter : ni un benchmark PromptQuorum contrôlé, ni rattachées à une version d\'application ou à une date de test. Ils supposent une quantisation Q4_K_M (le standard de l\'inférence mobile en 2026) et un iPhone au repos sans autre application lourde. Les applications en arrière-plan peuvent réduire nettement le débit, et l\'iPhone 17 Pro est généralement plus rapide que l\'iPhone 16 Pro. Mesurez votre propre téléphone avec le benchmark intégré de PocketPal AI.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI : option gratuite open source',
        content:
          '**PocketPal AI est le point de départ recommandé pour la plupart des utilisateurs iPhone en 2026.** Gratuit, open source (MIT ; GitHub : [a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)), disponible sur l\'App Store et compatible avec tout modèle GGUF de Hugging Face. L\'application utilise llama.cpp en coulisses avec des optimisations Apple Silicon. Test complet : [Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
        items: [
          '**Qu\'est-ce que c\'est :** une application iOS/iPadOS et Android qui exécute des modèles GGUF en local avec llama.cpp, publiée par Gooya UG. Le README indique que les invites, réponses et documents ne sont pas envoyés à des serveurs externes ; le chat ne demande aucun compte.',
          '**Version et dernière mise à jour :** v1.20.1, publiée le 19 octobre 2026 ([release GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases)) ; la fiche App Store affiche la même version. Rythme de mise à jour : environ une à deux semaines — pas d\'avertissement d\'obsolescence.',
          '**Installation :** App Store → « PocketPal AI ». Téléchargement gratuit avec achats intégrés optionnels (Pals premium et « PocketPal Plus »). Requiert iOS/iPadOS 15.1 ou plus ; c\'est la RAM, pas la version d\'iOS, qui fixe la taille de modèle utilisable. Depuis la v1.20.0, l\'application propose aussi en option Se connecter avec Apple et la suppression de compte.',
          '**Ajouter un modèle :** dans l\'application, appuyez sur Modèles → « Ajouter depuis Hugging Face » → recherchez (ex. « phi-4-mini-instruct-Q4_K_M ») → appuyez pour télécharger. Le modèle est stocké dans l\'espace local de l\'application (~2.7 Go pour Phi-4 Mini Q4).',
          '**Vitesse de génération (iPhone 16 Pro, indicative) :** Phi-4 Mini ~10–15 tok/sec, Llama 3.2 3B ~12–18 tok/sec, Gemma 3 4B ~7–10 tok/sec, Qwen3 1.7B ~18–24 tok/sec. Ce ne sont pas des mesures PromptQuorum contrôlées — utilisez le benchmark intégré, qui indique tokens/sec et mémoire sur votre propre iPhone.',
          '**Autres fonctions :** Pals (assistants personnalisés), synthèse vocale on-device, Talents (calculatrice et outils date/heure pour les modèles capables) et un navigateur de modèles Hugging Face compatible avec les modèles à accès restreint via un jeton.',
          '**Idéal pour :** les utilisateurs qui veulent une application de chat gratuite, installable depuis l\'App Store, sans compte, compatible avec tout modèle GGUF de la communauté.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Le sélecteur de modèles de PocketPal AI propose un filtre « Recommandés » qui, selon la documentation de l\'application, affiche les modèles tenant dans la RAM de votre appareil. Vérifiez-le sur votre propre téléphone — un modèle trop grand peut conduire iOS à fermer l\'application en pleine réponse.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM : option payante avec intégration iOS',
        content:
          '**Private LLM est l\'option iPhone payante de ce guide ($4.99 en achat unique, sans abonnement).** Disponible uniquement sur l\'App Store, il propose une bibliothèque de modèles optimisés sélectionnés. Sa différence tient à l\'intégration iOS : le développeur indique qu\'il s\'intègre directement à Siri et à l\'application Shortcuts. Test complet : [Test de Private LLM](/fr/power-local-llm/private-llm-review).',
        items: [
          '**Qu\'est-ce que c\'est :** une application iOS payante avec une bibliothèque de modèles sélectionnés et une intégration iOS poussée. Utilise un runtime on-device propriétaire optimisé pour Apple Silicon.',
          '**Installation :** App Store → « Private LLM - Local AI Chat » (Numen Technologies Limited). Achat unique $4.99 (sans abonnement ; la fiche n\'affiche aucun achat intégré). Requiert iOS/iPadOS 17.0 ou plus sur une puce A12 Bionic ou plus récente.',
          '**Version et dernière mise à jour :** v1.9.16, publiée le 14 septembre 2026 (historique des versions App Store) ; la version précédente, 1.9.15, datait du 9 juillet 2026. Les mises à jour arrivent tous les deux à trois mois — sous le seuil de trois mois, donc pas d\'avertissement d\'obsolescence.',
          '**Bibliothèque de modèles sélectionnés :** [privatellm.app](https://privatellm.app) annonce plus de 140 modèles locaux sur iPhone, iPad et Mac, avec des familles comme Llama, Qwen3, Gemma 3 et Phi 4 ; le sous-ensemble compatible iPhone est plus restreint. Moins de flexibilité que PocketPal AI, mais des modèles pré-optimisés pour le runtime de l\'application.',
          '**Shortcuts :** selon le développeur, Private LLM s\'intègre à l\'application Shortcuts et peut transmettre ses réponses à d\'autres applications compatibles avec la spécification x-callback-url. Utile pour déclencher l\'IA locale depuis un bouton de l\'écran d\'accueil ou via des étiquettes NFC.',
          '**Intégration Siri :** le développeur mentionne l\'intégration Siri ; une invite acheminée vers le modèle on-device fonctionne sans connexion internet (internet n\'est requis que pour le premier téléchargement du modèle).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Selon privatellm.app, un seul achat de $4.99 couvre iPhone, iPad et Mac, et la fiche App Store indique que jusqu\'à six membres de la famille peuvent l\'utiliser via le partage familial. Ni abonnement ni achat intégré ne sont affichés — le prix indiqué est le coût total. Le développeur déclare qu\'il n\'y a ni compte, ni suivi, ni journaux.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI : application MLX gratuite de LM Studio',
        content:
          '**Locally AI est une application de chat gratuite, axée sur la confidentialité, développée par l\'équipe LM Studio (listée sous Element Labs Inc) et construite sur le framework Apple MLX plutôt que sur llama.cpp.** C\'est la seule application ici à exposer le modèle de fondation on-device d\'Apple comme interface de chat. Test complet : [Test de Locally AI](/fr/power-local-llm/locally-ai-review).',
        items: [
          '**Qu\'est-ce que c\'est :** une application iOS/iPadOS/macOS utilisant Apple MLX pour l\'inférence, développée par l\'équipe derrière l\'application de bureau LM Studio.',
          '**Installation :** App Store → « Locally AI ». Gratuit, aucun achat intégré affiché, aucun compte requis (selon la fiche), fonctionne hors ligne.',
          '**Version et dernière mise à jour :** v1.66.0, publiée le 15 octobre 2026 (historique des versions App Store) ; environ une version par mois en 2026 — pas d\'avertissement d\'obsolescence.',
          '**Bibliothèque de modèles :** Llama 3.2, Gemma 2/3/4, Qwen 3 et 3.5, DeepSeek, LFM 2.5, Bonsai, Ministral 3 et Apple Foundation Models — un catalogue plus large et plus récent que celui de MLC Chat.',
          '**iOS Shortcuts :** expose une action Shortcuts, à égalité avec l\'automatisation de Private LLM, mais gratuitement.',
          '**LM Link :** une fonction optionnelle qui se connecte à LM Studio sur un Mac via ce que LM Studio décrit comme une liaison chiffrée de bout en bout, permettant à l\'application iPhone de basculer vers un modèle plus grand sur une machine domestique si nécessaire.',
          '**Prérequis :** iOS/iPadOS 18.1 ou plus (macOS 26.0 ou plus pour la version Mac). Les gains d\'efficacité d\'Apple Silicon sont les plus marqués à partir de l\'iPhone 15 Pro.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI est la seule application de ce guide capable de placer le propre modèle de fondation on-device d\'Apple derrière une fenêtre de chat classique — utile pour tester ce que peut faire le modèle d\'Apple Intelligence sans fouiller les menus des Outils d\'écriture. Pour la flexibilité GGUF tierce, PocketPal AI garde le plus grand catalogue de modèles.',
          },
        ],
      },
      googleAIEdgeGallery: {
        id: 'google-ai-edge-gallery',
        title: 'Google AI Edge Gallery : l\'application Gemma 4 gratuite de Google',
        content:
          '**Google AI Edge Gallery est l\'application gratuite de Google pour exécuter ses modèles Gemma 4 sur téléphone, et elle est disponible sur l\'App Store iPhone.** La fiche mentionne un chat IA avec mode réflexion, des agent skills, l\'entrée image et audio, Prompt Lab et le benchmark de modèles. Google indique que l\'application est en développement actif. Test complet : [Test de Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review).',
        items: [
          '**Qu\'est-ce que c\'est :** l\'application vitrine de Google pour l\'IA on-device, construite sur le runtime LiteRT-LM de Google. Gratuite ; aucun achat intégré affiché.',
          '**Installation :** App Store → « Google AI Edge Gallery ». Requiert iOS 17.0 ou plus. Les modèles se téléchargent séparément dans l\'application.',
          '**Version et dernière mise à jour :** v1.0.13, publiée le 8 octobre 2026 (historique des versions App Store). Le support de Gemma 4 est arrivé avec la v1.0.2 le 3 avril 2026 — pas d\'avertissement d\'obsolescence.',
          '**Modèles :** la famille Gemma 4 (E2B et E4B sont les variantes adaptées aux téléphones ; Google indique des fichiers LiteRT-LM d\'environ 2.58 Go et 3.65 Go), EmbeddingGemma 2 et FunctionGemma 270M. Les modèles au format LiteRT-LM peuvent aussi être importés depuis Hugging Face.',
          '**Fonctions :** Thinking Mode (modèles Gemma 4 uniquement), Agent Skills (par exemple recherche Wikipédia et cartes, plus des skills communautaires), Ask Image, Audio Scribe, Prompt Lab et benchmark de modèles.',
          '**Limites :** uniquement des modèles LiteRT-LM, pas GGUF ni MLX ; la fiche ne mentionne ni Shortcuts ni Siri ; PromptQuorum n\'a pas de chiffres de vitesse pour cette application.',
          '**Idéal pour :** les utilisateurs qui veulent le Gemma 4 de Google avec un mode de raisonnement visible et des outils d\'agent, sans frais.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Google indique une mémoire de pointe d\'environ 607 Mo sur CPU et 1 450 Mo sur GPU pour Gemma 4 E2B sur un iPhone 17 Pro (chiffres du fournisseur, d\'après la page LiteRT-LM Gemma 4 de Google ; non remesurés par PromptQuorum). E2B est le point de départ pratique pour la plupart des téléphones ; E4B convient aux iPhone 8 Go+.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat : optimisé pour Apple Silicon',
        content:
          '**Avertissement d\'obsolescence : l\'app iPhone MLC Chat n\'a reçu aucune mise à jour depuis la version 1.6 du 27 septembre 2024 (plus de 13 mois), elle n\'est donc peut-être plus maintenue — vérifiez avant de vous y fier.** Le dépôt du moteur MLC LLM reste actif sur GitHub (dernière activité le 6 octobre 2026). MLC Chat est gratuit, open source, et exécute des modèles compilés par la chaîne d\'outils MLC LLM plutôt que des GGUF standard, et son catalogue n\'a pas suivi celui de PocketPal AI ou de Locally AI. Test complet : [Test de MLC Chat](/fr/power-local-llm/mlc-chat-review).',
        items: [
          '**Qu\'est-ce que c\'est :** l\'application iOS de référence du projet MLC LLM, qui démontre l\'inférence accélérée par Metal de MLC LLM sur Apple Silicon.',
          '**Installation :** App Store → « MLC Chat ». Gratuit. Requiert iOS/iPadOS 17.0 ou plus.',
          '**Version et dernière mise à jour :** v1.6, publiée le 27 septembre 2024 (historique des versions App Store ; ajout de Llama 3.2 3B). Auparavant : la 1.5 a ajouté Gemma 2 2B (août 2024), la 1.4 a ajouté Phi-3, Mistral v3 et Qwen2 (juin 2024). Dernière mise à jour iPhone il y a plus de 13 mois — avertissement d\'obsolescence activé.',
          '**Vitesse (affirmation du projet, non mesurée ici) :** le projet MLC LLM décrit son moteur accéléré par Metal comme plus rapide que les applications basées sur llama.cpp sur le même iPhone — mais la liste de modèles de l\'application précède des choix actuels comme Phi-4 Mini et Gemma 3, si bien que cet avantage est invérifiable sur les modèles recommandés en 2026 sans version compilée soi-même.',
          '**Bibliothèque de modèles :** limitée aux modèles compilés par le projet MLC LLM avant que l\'application ne devienne inactive — Llama 3.2 3B, Gemma 2 2B, Phi-3, Mistral v3, Qwen2 et autres versions de 2024. Tous les GGUF Hugging Face ne fonctionnent pas, et aucun petit modèle de génération actuelle n\'est fourni dans la version App Store.',
          '**Idéal pour :** les développeurs déjà investis dans la chaîne d\'outils MLC LLM, prêts à compiler leur propre modèle, ou ayant spécifiquement besoin de l\'un des modèles d\'avant 2025 qu\'elle fournit déjà.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Comme la version App Store de MLC Chat n\'a reçu aucune mise à jour depuis le 27 septembre 2024, n\'attendez pas Phi-4 Mini, Qwen3 ou Gemma 3 dans son sélecteur. Si vous voulez aujourd\'hui des modèles de génération actuelle avec une efficacité GPU de classe Metal, Locally AI (Apple MLX), PocketPal AI (llama.cpp avec Metal Performance Shaders) ou Google AI Edge Gallery (Gemma 4) sont les alternatives activement maintenues.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm : absent de l\'App Store, sources toujours disponibles',
        content:
          '**Avertissement d\'obsolescence : la dernière version de LLM Farm (1.4.3) date du 27 janvier 2025 et son dernier push de code du 30 janvier 2026 — près de neuf mois sans mise à jour — il n\'est donc peut-être plus maintenu.** Le test PromptQuorum du projet date son retrait de l\'App Store d\'août 2025 ; son propre README GitHub décrit l\'application comme « temporairement indisponible » sur l\'App Store et TestFlight. Le projet (GitHub : [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)) reste open source et a connu une activité d\'issues GitHub jusqu\'en octobre 2026, mais les nouveaux utilisateurs ne peuvent plus l\'installer depuis l\'App Store ; il faut le compiler depuis les sources via Xcode (README : macOS 13+ et iOS 16+). Test complet : [Test de LLM Farm](/fr/power-local-llm/llm-farm-review).',
        items: [
          '**Qu\'est-ce que c\'est :** une application iOS du développeur @guinmoon qui exécute des modèles GGUF avec de nombreuses options de configuration, auparavant distribuée sur l\'App Store.',
          '**Disponibilité actuelle :** non installable depuis l\'App Store ni TestFlight à la date de cette mise à jour. Le code source reste public et compilable.',
          '**Compiler depuis les sources :** clonez le dépôt, ouvrez-le dans Xcode et compilez sur un appareil avec un compte Apple Developer gratuit ou payant — le flux de chargement latéral standard pour toute application iOS open source sans fiche App Store.',
          '**Configuration exposée (une fois compilée) :** température, top-p, top-k, échantillonnage mirostat, pénalité de répétition, invite système par modèle, choix du modèle de chat, longueur de la fenêtre de contexte.',
          '**Idéal pour :** les développeurs à l\'aise avec la compilation d\'une application depuis les sources dans Xcode qui veulent spécifiquement les contrôles d\'échantillonnage mirostat. Tous les autres devraient utiliser PocketPal AI ou Locally AI, toutes deux entièrement installables depuis l\'App Store et gratuites.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne comptez pas sur un lien App Store pour LLM Farm — tout lien de ce type trouvé ailleurs est obsolète. Compiler depuis les sources demande Xcode et des notions de base de signature de code iOS. Si c\'est plus d\'efforts que vous ne le souhaitez, PocketPal AI couvre le même usage d\'application de chat gratuite et flexible sans quitter l\'App Store.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence : IA on-device intégrée au système',
        content:
          '**Apple Intelligence exécute le propre modèle de fondation d\'environ 3B d\'Apple on-device sur iPhone 15 Pro et les modèles plus récents (génération iPhone 15 Pro, 8 Go de RAM selon la presse ; Apple ne communique pas la RAM).** Par défaut, ce n\'est pas une application de chat — il alimente des fonctions système dans Mail (Réponse intelligente), Messages (outils d\'écriture), Notes (synthèse) et les Résumés de notifications. Depuis iOS 26, le framework Foundation Models d\'Apple permet aux développeurs tiers d\'appeler directement ce même modèle on-device, et des applications comme Locally AI l\'utilisent pour offrir une véritable interface de chat. iOS 27 étend le framework : selon le guide développeur d\'Apple, les applications peuvent utiliser tout modèle de langage conforme à son protocole de modèles de langage, y compris les modèles d\'Apple et des modèles cloud.',
        items: [
          '**Où il se trouve :** intégré à iOS 18+ (framework Foundation Models ajouté avec iOS 26). À activer dans Réglages → Apple Intelligence et Siri.',
          '**Matériel requis :** iPhone 15 Pro / 15 Pro Max, série iPhone 16, iPhone 16e, série iPhone 17, et pour 2026 les iPhone 18 Pro, 18 Pro Max et iPhone Duo (A20 Pro). Les iPhone antérieurs (14 et inférieurs) ne prennent pas en charge Apple Intelligence. Consultez la liste de compatibilité actuelle d\'Apple pour iOS 27 avant d\'acheter.',
          '**Siri AI (iOS 27) :** Apple décrit Siri AI comme disponible en bêta dans iOS 27, déployé d\'abord en anglais, non disponible initialement dans l\'UE sur iOS, et soumis à des limites d\'usage quotidiennes pour certaines fonctions côté serveur. Il est distinct des applications de chat on-device de ce guide.',
          '**Fonctions on-device :** Outils d\'écriture (réécrire, résumer, relire) dans tout champ de texte, Réponse intelligente dans Mail et Messages, Résumés de notifications, génération de Genmoji.',
          '**Framework Foundation Models (iOS 26+) :** une API Swift native qui donne aux développeurs un accès direct au même modèle on-device en quelques lignes de code — c\'est ainsi que Locally AI l\'expose comme option de chat, et que l\'action Shortcuts « Utiliser le modèle » peut lui acheminer une invite, ou la diriger vers Private Cloud Compute ou ChatGPT.',
          '**Private Cloud Compute :** pour les tâches qui dépassent le modèle on-device, Apple Intelligence bascule vers Private Cloud Compute (PCC) — des serveurs exploités par Apple qui exécutent des modèles plus grands dont Apple indique qu\'ils ne conservent aucune donnée utilisateur. PCC est opt-in et peut être désactivé.',
          '**Relation avec les applications de chat :** Apple Intelligence est un complément, pas un remplacement. Ses fonctions système gèrent la réécriture et la synthèse de texte dans les applications iOS ; PocketPal AI, Private LLM, Locally AI et MLC Chat offrent une interface de chat dédiée pour des questions libres — et Locally AI peut désormais placer le modèle d\'Apple derrière cette même interface.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si Apple Intelligence est votre seul besoin (réécrire des e-mails, résumer des notifications), vous n\'avez pas besoin d\'une application de chat séparée. Si vous voulez poser au modèle des questions comme « explique l\'effet tunnel en termes simples » ou « rédige un plan de projet pour X », installez une application de chat — une application dédiée comme PocketPal AI, ou Locally AI, qui peut placer le modèle on-device d\'Apple derrière une fenêtre de chat.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modèles par génération d\'iPhone',
        content:
          '**La RAM de l\'iPhone fixe la taille maximale du modèle — pas la génération de puce.** Un iPhone 6 Go (14 Pro, 15) exécute confortablement des modèles 1.7B ; un iPhone 8 Go+ (15 Pro, série 16, 16e, série 17) exécute confortablement des modèles 3B–4B et lentement des modèles 7B. Petits modèles récents à essayer en plus de Phi-4 Mini : Gemma 4 E2B et E4B (Google, avril 2026 ; environ 2.58 Go et 3.65 Go en fichiers LiteRT-LM) et la série Qwen3.5 (Alibaba, mars 2026 ; 0.8B, 2B, 4B et 9B, Apache 2.0 selon la synthèse Artificial Analysis). PromptQuorum n\'a pas de chiffres de vitesse pour eux ; Locally AI et Google AI Edge Gallery les proposent directement. Pour le panorama plus large des modèles sur tout le matériel (pas seulement mobile), voir [Meilleurs LLM locaux en 2026](/fr/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-fr.svg',
        imageCaption: 'Modèles LLM locaux recommandés par palier de RAM d\'iPhone, de 4 Go jusqu\'à l\'iPhone 17 Pro à 12 Go',
        columns: ['Niveau iPhone (Année, RAM)', 'Modèle recommandé', 'Taille de téléchargement', 'Vitesse (indicative)'],
        rows: [
          { 'Niveau iPhone (Année, RAM)': 'iPhone 18 Pro / Pro Max (2026, ~12 Go selon la presse)', 'Modèle recommandé': 'Comme le 17 Pro ; RAM non publiée par Apple', 'Taille de téléchargement': '~2.5–3.7 Go', 'Vitesse (indicative)': 'Aucun chiffre' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone 17 Pro / 17 Pro Max (2025, 12 Go)', 'Modèle recommandé': 'Phi-4 Mini / Llama 3.2 3B / Gemma 4 E4B', 'Taille de téléchargement': '~2.5–3.7 Go', 'Vitesse (indicative)': '~13–20 tok/sec (Phi-4 Mini)' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone série 16 / 16e / 17 (2024–2025, 8 Go)', 'Modèle recommandé': 'Phi-4 Mini (3.8B Q4_K_M) ou Gemma 4 E2B', 'Taille de téléchargement': '~2.6–2.7 Go', 'Vitesse (indicative)': '~10–15 tok/sec (Phi-4 Mini)' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 Go)', 'Modèle recommandé': 'Phi-4 Mini (3.8B Q4_K_M)', 'Taille de téléchargement': '~2.7 Go', 'Vitesse (indicative)': '~8–12 tok/sec' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone 13 Pro / 14 Pro / Pro Max (6 Go)', 'Modèle recommandé': 'Qwen3 1.7B ou SmolLM 2 1.7B (Q4_K_M)', 'Taille de téléchargement': '~1.1 Go', 'Vitesse (indicative)': '~15–20 tok/sec' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone 14 / 14 Plus / 15 / 15 Plus (6 Go)', 'Modèle recommandé': 'Qwen3 1.7B ou SmolLM 2 1.7B (Q4_K_M)', 'Taille de téléchargement': '~1.1 Go', 'Vitesse (indicative)': '~12–18 tok/sec' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone 13 / 12 / SE / anciens (4 Go)', 'Modèle recommandé': 'Non recommandé pour un LLM on-device', 'Taille de téléchargement': '—', 'Vitesse (indicative)': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour les anciens iPhone 6 Go, Qwen3 1.7B ou SmolLM 2 1.7B (HuggingFace) sont des choix raisonnables en 2026 ; Qwen3.5 2B et Gemma 4 E2B sont des options plus récentes de même taille. Ces petits modèles produisent des réponses courtes cohérentes (1–3 paragraphes) mais peinent sur le raisonnement multi-étapes. N\'installez pas Phi-4 Mini sur un iPhone 6 Go — il tient nominalement, mais iOS arrêtera l\'application à la moindre pression mémoire. Les chiffres de vitesse du tableau sont des plages indicatives arrondies pour Phi-4 Mini, Llama 3.2 3B et Qwen3 1.7B, non rattachées à une version d\'application ou à une date de test ; Gemma 4 et Qwen3.5 n\'ont pas de chiffres ici. Les pages produit d\'Apple n\'indiquent pas la RAM des iPhone : les chiffres de RAM ici sont des caractéristiques largement rapportées, et les ~12 Go de l\'iPhone 18 Pro viennent de la presse.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'Autonomie et surchauffe',
        content:
          '**L\'inférence LLM on-device sur iPhone sollicite fortement le CPU/GPU et produit de la chaleur.** À titre indicatif (pas une mesure PromptQuorum contrôlée), l\'inférence active consomme ~3–5 W ; une génération soutenue fait ralentir la puce et peut vider la batterie d\'environ 20–30 % par heure sur iPhone 16 Pro.',
        image: '/images/iphone-llm-apps-battery-thermal-fr.svg',
        imageCaption: 'Guide batterie et chaleur des LLM locaux sur iPhone : consommation, bridage thermique et refroidissement',
        items: [
          '**Consommation de batterie (chat actif, indicative) :** ~20–30 % par heure sur iPhone 16 Pro avec Phi-4 Mini.',
          '**Une génération soutenue peut déclencher une limitation thermique.** Quand la puce chauffe, iOS réduit les fréquences d\'horloge et les tokens/sec baissent. Le moment où cela commence et la perte de vitesse dépendent du téléphone, de l\'étui, de la charge et de la température ambiante ; PromptQuorum ne l\'a pas mesuré. Laisser le téléphone refroidir restaure la vitesse.',
          '**Atténuation :** gardez l\'iPhone écran vers le haut sur une surface dure (pas dans la main ni la poche) pendant les longues sessions pour dissiper la chaleur. Un étui dissipateur passif aide mais est rarement nécessaire pour de courtes interactions.',
          '**Consommation fantôme :** si vous laissez une application de chat ouverte en arrière-plan après la génération, la RAM reste allouée mais aucune inférence ne tourne — l\'impact sur la batterie est minimal. Fermer complètement l\'application libère les ~3 Go de RAM.',
          '**Charge MagSafe pendant l\'inférence :** recharger pendant la génération peut échauffer n\'importe quel iPhone, davantage encore l\'iPhone 15 Pro ; si le téléphone chauffe, interrompez la charge ou la génération, ou chargez après.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'N\'exécutez pas d\'inférence LLM on-device sur un iPhone en plein soleil ou dans une voiture chaude. En plein soleil ou dans une voiture chaude, la puce peut atteindre plus tôt ses limites thermiques, ce qui peut déclencher une limitation et l\'avertissement d\'Apple « L\'iPhone doit refroidir ». En général, la génération ralentit plutôt que l\'application ne se ferme.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'Raccourcis iOS, Siri et chargement latéral',
        content:
          '**L\'intégration iOS varie beaucoup selon les applications.** Private LLM et Locally AI prennent tous deux en charge Shortcuts ; PocketPal AI, Google AI Edge Gallery et MLC Chat sont des applications de chat autonomes sans Shortcuts ni Siri mentionnés dans leur README ou leur fiche App Store.',
        image: '/images/iphone-llm-apps-ios-integration-fr.svg',
        imageCaption: 'Intégration iOS des apps LLM locales sur iPhone : prise en charge de Shortcuts, Siri, open source et installation App Store',
        items: [
          '**Private LLM** s\'intègre à Shortcuts et à Siri, selon le développeur, et peut transmettre ses réponses aux applications compatibles x-callback-url. L\'application de chat la plus native pour iOS ici.',
          '**Locally AI** expose gratuitement une action Shortcuts et peut acheminer un raccourci vers le propre modèle on-device d\'Apple via son intégration du framework Foundation Models — pas de déclencheur vocal Siri, mais une automatisation Shortcuts sans payer.',
          '**PocketPal AI** est une application de chat autonome — son README ne mentionne ni action Shortcuts ni intégration Siri. Vous ouvrez l\'application et vous discutez.',
          '**Google AI Edge Gallery** est une application de chat et de démonstration autonome — sa fiche App Store ne mentionne ni action Shortcuts ni intégration Siri.',
          '**MLC Chat** est une application de référence pour le projet MLC LLM — intégration iOS minimale et aucune mise à jour iPhone depuis septembre 2024. Pas d\'action Shortcuts.',
          '**LLM Farm** n\'est actuellement pas sur l\'App Store et, une fois compilé depuis les sources, n\'a pas d\'action Shortcuts.',
          '**Apple Intelligence** s\'intègre à iOS Shortcuts via l\'action « Utiliser le modèle » (iOS 18.4+, étendue avec le framework Foundation Models dans iOS 26). Elle achemine une invite vers le modèle on-device, Private Cloud Compute ou ChatGPT (configurable). La sortie on-device peut être enchaînée avec d\'autres actions Shortcuts.',
          '**Chargement latéral :** PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery et MLC Chat sont sur l\'App Store et n\'exigent ni chargement latéral ni jailbreak ; Apple Intelligence est intégré à iOS. LLM Farm fait exception — l\'installer exige désormais une compilation depuis les sources dans Xcode. Dans l\'UE, des marketplaces d\'applications alternatives existent en vertu du DMA, mais les applications qu\'elles proposent dépendent de chaque développeur : installez depuis le canal officiel du développeur ; aucune de ces applications n\'en a besoin.',
        ],
        promptExamples: [
          {
            label: 'Raccourci Private LLM : résumer le texte sélectionné',
            text: '1. Action : « Obtenir le texte sélectionné » (entrée Share Sheet iOS).\n2. Action : génération de texte Private LLM (parmi les actions Shortcuts de l\'app Private LLM) → Invite : « Résume le texte suivant en trois points clés : [Texte sélectionné] » → choisissez un modèle installé dans l\'app.\n3. Action : « Afficher le résultat » ou « Copier dans le presse-papiers ».\nAjoutez-le à la Share Sheet pour l\'exécuter sur tout texte sélectionné dans n\'importe quelle application, entièrement hors ligne. Les noms d\'action suivent la description du développeur et peuvent différer selon la version de l\'app.',
          },
          {
            label: 'Raccourci Apple Intelligence : réécrire sur un ton professionnel',
            text: '1. Action : « Obtenir le presse-papiers ».\n2. Action : « Utiliser le modèle » → Modèle : On-device → Invite : « Réécris ceci sur un ton professionnel et concis : [Presse-papiers] ».\n3. Action : « Copier dans le presse-papiers ».\nAssignez-le à un widget de l\'écran verrouillé pour réécrire en un tap tout ce que vous copiez.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour une utilisation mains libres en conduisant ou en cuisinant, l\'intégration Siri de Private LLM est la seule application de chat de ce guide dont le développeur indique une intégration Siri, ce qui permet de l\'utiliser sans toucher le téléphone. Apple Intelligence prend en charge la voix via Siri, mais uniquement pour les tâches système (écriture, synthèse, actions d\'application) — il n\'expose pas de Q&R général comme les applications de chat.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes',
        items: [
          '**Installer un modèle plus grand que ce que la RAM de votre iPhone permet.** Un modèle 7B sur un iPhone 8 Go est souvent trop lent pour le chat et peut être fermé par iOS quand il récupère la mémoire pour une autre application ; mesurez-le d\'abord avec le benchmark intégré de PocketPal AI. Respectez le modèle recommandé pour votre niveau d\'iPhone (3B–4B pour les appareils 8 Go, 1.7B pour les appareils 6 Go).',
          '**Attendre d\'un modèle on-device la qualité d\'une IA cloud.** Phi-4 Mini (3.8B) est impressionnant pour sa taille mais n\'est pas GPT-5.5. Utilisez-le pour le chat, la synthèse, la rédaction et les Q&R rapides — pas pour le raisonnement multi-étapes, la génération de code complexe ou l\'écriture créative nuancée.',
          '**Exécuter l\'inférence en plein soleil ou dans une voiture chaude.** La limitation thermique peut intervenir rapidement, la génération ralentit et l\'avertissement « L\'iPhone doit refroidir » peut apparaître. Exécutez l\'inférence à température ambiante.',
          '**Laisser 3+ applications de chat installées avec des modèles de 3 Go dans chacune.** Vous consommerez ~10 Go de stockage en modèles dupliqués. Choisissez une application et un modèle ; désinstallez les autres tant que vous n\'êtes pas sûr d\'en avoir besoin.',
          '**Supposer qu\'Apple Intelligence n\'a aucune interface de chat.** C\'était vrai jusqu\'à iOS 18, mais depuis iOS 26 des applications comme Locally AI peuvent placer le modèle on-device d\'Apple derrière une vraie fenêtre de chat via le framework Foundation Models. Les fonctions système (Outils d\'écriture, Réponse intelligente) ne sont toujours pas une interface de chat en soi.',
          '**Chercher LLM Farm sur l\'App Store.** Il n\'y est actuellement pas (le test PromptQuorum de LLM Farm date son retrait d\'août 2025). Le chercher sur l\'App Store fait perdre du temps ; utilisez PocketPal AI pour le même usage gratuit et flexible, ou compilez LLM Farm depuis les sources dans Xcode si vous avez spécifiquement besoin de ses contrôles mirostat.',
          '**Croire que « gratuit » signifie « sans achat ».** PocketPal AI est gratuit pour le chat local mais vend du contenu premium optionnel (Pals et « PocketPal Plus »), tandis que Locally AI et Google AI Edge Gallery n\'affichent aucun achat intégré. Consultez la section des achats intégrés de la fiche avant d\'installer (la fiche App Store US de PocketPal AI affichait une classification d\'âge 18+ le 23 octobre 2026).',
          '**Juger un modèle sur un seul tableau de vitesses.** Les plages de tokens/sec de ce guide sont indicatives, et des modèles plus récents comme Gemma 4 et Qwen3.5 n\'y figurent pas. Lancez la même invite sur deux modèles dans le benchmark de PocketPal AI avant de supprimer celui que vous avez déjà téléchargé.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (README, licence MIT, version v1.20.1 du 19 octobre 2026) et [fiche App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (historique des versions, achats intégrés, classification d\'âge, iOS 15.1+). Consulté le 23 octobre 2026.',
          'Private LLM — [fiche App Store](https://apps.apple.com/app/apple-store/id6448106860) (v1.9.16, $4.99, iOS 17.0+, partage familial) et [privatellm.app](https://privatellm.app) (Siri et Shortcuts, liste de modèles, un achat pour iPhone, iPad et Mac). Consulté le 23 octobre 2026.',
          'Locally AI — [fiche App Store](https://apps.apple.com/us/app/locally-ai/id6741426692) (v1.66.0, gratuit, Element Labs Inc, iOS 18.1+ ; équipe LM Studio) et [lmstudio.ai/locally](https://lmstudio.ai/locally) (LM Link). Consulté le 23 octobre 2026.',
          'Google AI Edge Gallery — [fiche App Store](https://apps.apple.com/app/id6749645337) (v1.0.13, gratuit, iOS 17.0+, Gemma 4, Agent Skills, Thinking Mode), [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) et la [page LiteRT-LM Gemma 4](https://developers.google.com/edge/litert-lm/models/gemma-4) de Google (tailles de fichiers et mémoire E2B/E4B, chiffres du fournisseur). Consulté le 23 octobre 2026.',
          'MLC Chat / projet MLC LLM — [fiche App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) (v1.6, 27 sept. 2024, historique des versions), [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) et [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) (dépôt du moteur). Consulté le 23 octobre 2026.',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (README : « temporairement indisponible » sur TestFlight et App Store ; version 1.4.3 du 27 janv. 2025 ; dernier push le 30 janv. 2026) et le [test PromptQuorum de LLM Farm](/fr/power-local-llm/llm-farm-review) pour le retrait d\'août 2025. Consulté le 23 octobre 2026.',
          'Apple Intelligence et modèles de fondation on-device — [Apple Machine Learning Research](https://machinelearning.apple.com), le [guide développeur Nouveautés d\'iOS 27](https://developer.apple.com/wwdc26/guides/ios/) (framework Foundation Models), la [page iPhone 18 Pro](https://www.apple.com/iphone-18-pro/) (A20 Pro, Neural Engine 16 cœurs double, bêta Siri AI, pas de chiffre de RAM) et la [page iPhone Duo](https://www.apple.com/iphone-duo/). Consulté le 23 octobre 2026.',
          'Série Qwen3.5 (0.8B–9B, mars 2026) — [synthèse Artificial Analysis](https://artificialanalysis.ai/articles/qwen3-5-small-models).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'L\'iPhone peut-il vraiment faire tourner un modèle 7B ?',
            a: 'Techniquement oui sur iPhone 15 Pro et les modèles plus récents (8 Go de RAM), mais pas à une vitesse utilisable. Un modèle 7B Q4 sur iPhone 16 Pro est souvent trop lent pour un chat confortable (indicatif). iOS tend aussi à arrêter l\'application quand d\'autres ont besoin de mémoire. Utilisez des modèles 3B–4B (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) pour le chat on-device quotidien. Pour une qualité 7B+, connectez-vous à distance à un Mac ou PC domestique exécutant Ollama.',
          },
          {
            q: 'L\'IA locale vide-t-elle la batterie de mon iPhone ?',
            a: 'Oui — l\'inférence active consomme typiquement ~3–5 W et, à titre de repère indicatif approximatif, peut vider la batterie d\'environ 20–30 % par heure sur iPhone 16 Pro. Pour un usage occasionnel (quelques invites), l\'impact est faible. Pour un usage soutenu (longue conversation, plusieurs synthèses), gardez l\'iPhone branché. Le modèle simplement présent en RAM sans inférence a un impact négligeable sur la batterie.',
          },
          {
            q: 'Mon iPhone va-t-il chauffer avec l\'IA locale ?',
            a: 'Oui, c\'est possible, surtout lors d\'une longue génération continue. iOS réduit les fréquences d\'horloge quand la puce chauffe, ce qui fait baisser les tokens/sec ; le moment et l\'ampleur varient selon le téléphone, l\'étui, la charge et la température ambiante, et PromptQuorum ne les a pas mesurés. Pour limiter cela : gardez l\'iPhone écran vers le haut sur une surface dure (pas dans la main) pendant les longues sessions et évitez le soleil direct. Les courtes interactions provoquent en général peu de chaleur notable.',
          },
          {
            q: 'Puis-je utiliser Siri avec un modèle local ?',
            a: 'Oui, avec Private LLM ($4.99 en achat unique). Le développeur indique qu\'il s\'intègre directement à Siri et à Shortcuts, de sorte qu\'une invite peut être acheminée vers le modèle on-device sans connexion internet. PocketPal AI, Locally AI, Google AI Edge Gallery et MLC Chat ne mentionnent pas d\'intégration vocale Siri, bien que Locally AI prenne en charge l\'automatisation Shortcuts. Apple Intelligence s\'intègre à Siri mais uniquement pour les tâches système (écriture, synthèse, actions d\'application), pas pour le Q&R général ; Siri AI est une fonction bêta distincte d\'iOS 27, d\'abord en anglais et non disponible initialement dans l\'UE.',
          },
          {
            q: 'Ces applications fonctionnent-elles sur iPhone SE ou les anciens iPhone ?',
            a: 'De façon limitée. L\'iPhone SE et les iPhone 13 / 12 (4 Go de RAM) sont sous le seuil pratique pour les LLM on-device en 2026. Les iPhone 14 / 15 (non Pro, 6 Go de RAM) peuvent faire tourner des modèles 1.7B (Qwen3 1.7B, SmolLM 2 1.7B) mais pas 3B+. Les iPhone 13 Pro et 14 Pro (6 Go de RAM) restent aussi à 1.7B ; l\'iPhone 15 Pro (8 Go de RAM) peut faire tourner des modèles 3B comme Phi-4 Mini à environ 8–12 tokens/sec (indicatif). Pour les anciens iPhone, le mieux est de se connecter à distance à un Mac ou PC domestique.',
          },
          {
            q: 'Puis-je synchroniser l\'historique de chat entre iPhone et Mac ?',
            a: 'Pas dans PocketPal AI, Private LLM, Google AI Edge Gallery ni MLC Chat — l\'historique est stocké localement sur chaque appareil, sans synchronisation iCloud. Private LLM et Locally AI fonctionnent aussi nativement sur Mac (avec Private LLM, un seul achat couvre iPhone, iPad et Mac), mais l\'historique ne se synchronise toujours pas entre les copies iPhone et Mac. Pour un historique commun, l\'approche pratique est d\'exécuter Open WebUI sur un Mac domestique et d\'y accéder depuis les navigateurs de l\'iPhone et du Mac — Open WebUI stocke l\'historique côté serveur.',
          },
          {
            q: 'Ces applications sont-elles disponibles en dehors de l\'App Store ?',
            a: 'PocketPal AI est open source et peut être compilé depuis les sources via Xcode, mais la version App Store est la distribution standard. LLM Farm est l\'exception qui doit désormais être compilée depuis les sources — il n\'est actuellement ni sur l\'App Store ni sur TestFlight (le README indique « temporairement indisponible »). Private LLM, Locally AI, Google AI Edge Gallery et MLC Chat sont uniquement sur l\'App Store. Dans l\'UE, des marketplaces d\'applications alternatives existent en vertu du DMA, mais les applications qu\'elles proposent dépendent de chaque développeur : installez depuis le canal officiel du développeur ; aucune de ces applications n\'en a besoin.',
          },
          {
            q: 'L\'une d\'elles nécessite-t-elle un jailbreak ?',
            a: 'Non. PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat et Apple Intelligence fonctionnent tous sur iOS standard. Compiler LLM Farm depuis les sources dans Xcode ne demande pas non plus de jailbreak — c\'est le chargement latéral standard pour développeurs, pas un exploit. Le jailbreak n\'est ni requis ni recommandé pour aucune de ces applications.',
          },
          {
            q: 'Puis-je utiliser l\'IA locale dans iOS Shortcuts ?',
            a: 'Oui, via Private LLM (ses actions Shortcuts), Locally AI (une action Shortcuts gratuite) ou Apple Intelligence (l\'action « Utiliser le modèle », iOS 18.4+, étendue avec iOS 26). PocketPal AI, Google AI Edge Gallery et MLC Chat ne mentionnent pas d\'actions Shortcuts. Parmi les applications comparées ici, Locally AI est la seule option gratuite qui indique à la fois le support Shortcuts et l\'accès au propre modèle on-device d\'Apple.',
          },
          {
            q: 'Comment l\'IA locale se compare-t-elle à l\'application ChatGPT sur iPhone ?',
            a: 'Les modèles on-device (Phi-4 Mini, Llama 3.2 3B) restent nettement en retrait des modèles cloud de pointe pour le raisonnement complexe, les connaissances générales et les tâches multimodales, mais ils sont plus rapides sur les requêtes simples (pas d\'aller-retour réseau) et, selon la documentation de chaque application, gardent la conversation sur l\'appareil. Le compromis honnête : IA locale pour les tâches courantes et privées ; ChatGPT ou une autre application cloud pour les questions difficiles occasionnelles. Beaucoup d\'utilisateurs en 2026 gardent les deux et choisissent selon la requête.',
          },
          {
            q: 'LLM Farm est-il encore sûr à utiliser maintenant qu\'il n\'est plus sur l\'App Store ?',
            a: 'Le code source est public sur GitHub et reçoit encore de l\'activité d\'issues en 2026, mais la dernière version (1.4.3) date du 27 janvier 2025 et le dernier push de code du 30 janvier 2026 : il n\'est peut-être plus maintenu. Compilé depuis les sources et chargé latéralement, il ne passe en outre plus par le processus de révision de l\'App Store d\'Apple. Si vous n\'avez pas spécifiquement besoin de ses contrôles d\'échantillonnage mirostat, PocketPal AI couvre le même usage gratuit, flexible et open source tout en restant sur l\'App Store avec la révision standard d\'Apple.',
          },
          {
            q: 'Lesquelles de ces applications iPhone sont gratuites ?',
            a: 'PocketPal AI est gratuit (licence MIT) avec des achats intégrés optionnels pour les Pals premium et « PocketPal Plus ». Locally AI et Google AI Edge Gallery sont gratuits sans achat intégré affiché. MLC Chat est gratuit. LLM Farm est gratuit mais doit être compilé depuis les sources. Private LLM coûte $4.99 en achat unique, sans achat intégré affiché. Apple Intelligence est intégré à iOS. Les prix ont été relevés sur l\'App Store US le 23 octobre 2026 et peuvent différer selon le pays.',
          },
          {
            q: 'L\'iPhone Duo ou l\'iPhone 18 Pro peuvent-ils faire tourner un LLM local hors ligne ?',
            a: 'En principe oui : les deux utilisent la puce A20 Pro d\'Apple, et les applications de ce guide fonctionnent sur tout iPhone respectant leur version minimale d\'iOS. C\'est la RAM qui détermine la taille du modèle, et les pages iPhone 18 Pro et iPhone Duo d\'Apple n\'indiquent pas de RAM ; la presse évoque 12 Go pour l\'iPhone 18 Pro, ce qui n\'est pas confirmé. PromptQuorum n\'a pas de vitesses mesurées pour ces deux téléphones. Installez PocketPal AI et lancez son benchmark intégré pour voir ce que fait réellement votre téléphone.',
          },
          {
            q: 'Ces applications fonctionnent-elles sur iPad ?',
            a: 'Oui pour la plupart. PocketPal AI (iPadOS 15.1+, support complet de l\'iPad selon son README), Private LLM (iPadOS 17.0+) et Locally AI (iPadOS 18.1+) indiquent un support iPad. La fiche de Google AI Edge Gallery exige iOS 17.0 ou plus ; vérifiez sa page pour votre iPad. Comme sur iPhone, la RAM détermine les modèles qui tiennent. Pour des conseils propres à l\'iPad, voir [Comment utiliser l\'IA sur une tablette](/fr/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: 'Pourquoi LLM Farm a-t-il disparu de l\'App Store ?',
            a: 'Le README du projet indique : « The app is temporarily unavailable in TestFlight and Appstore. » PromptQuorum n\'a pas trouvé de raison publique à ce retrait ; toute explication lue ailleurs n\'est donc pas confirmée (voir le [test de LLM Farm](/fr/power-local-llm/llm-farm-review)). Le code source reste public, mais la dernière version était la 1.4.3 du 27 janvier 2025. Pour une alternative gratuite installable depuis l\'App Store, utilisez PocketPal AI ou Locally AI.',
          },
          {
            q: 'Existe-t-il une application Ollama pour iPhone ?',
            a: 'La page de téléchargement d\'Ollama liste macOS, Windows et Linux, et aucune application iPhone. Pour utiliser des modèles Ollama ou LM Studio depuis un iPhone, exécutez le serveur sur un Mac ou un PC et connectez-vous depuis une application cliente ; Locally AI propose LM Link, que LM Studio décrit comme une connexion chiffrée vers LM Studio sur un Mac. Pour des modèles qui tournent entièrement sur le téléphone, utilisez les applications de ce guide.',
          },
          {
            q: 'Dois-je télécharger Gemma 4 ou Phi-4 Mini ?',
            a: 'PromptQuorum n\'a pas de benchmark comparatif des deux sur iPhone. Faits utiles : Gemma 4 E2B et E4B sont les modèles de Google adaptés aux téléphones (environ 2.58 Go et 3.65 Go en fichiers LiteRT-LM dans Google AI Edge Gallery ; Locally AI liste aussi Gemma 4), tandis que Phi-4 Mini (3.8B Q4_K_M, ~2.7 Go) est le modèle sur lequel reposent les vitesses de ce guide. Sur un iPhone 8 Go, essayez les deux avec vos propres invites et comparez les tokens/sec dans le benchmark de PocketPal AI ; sur un iPhone 6 Go, restez sur des modèles de classe 1.7B.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — le test complet de PromptQuorum sur l\'option gratuite open source par défaut.',
          '[Test de Private LLM](/fr/power-local-llm/private-llm-review) — l\'option payante avec Siri et Shortcuts.',
          '[Test de Locally AI](/fr/power-local-llm/locally-ai-review) — l\'application MLX gratuite de l\'équipe LM Studio.',
          '[Test de Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application Gemma 4 gratuite de Google.',
          '[Test de MLC Chat](/fr/power-local-llm/mlc-chat-review) et [Test de LLM Farm](/fr/power-local-llm/llm-farm-review) — les deux applications signalées comme obsolètes dans ce guide.',
          '[Meilleures applications LLM locales pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — article compagnon couvrant les équivalents Android (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[Comment utiliser l\'IA sur une tablette : iPad et Android (2026)](/fr/power-local-llm/run-ai-on-tablet-ipad-android) — guide de plateforme adjacent pour les lecteurs sur tablette.',
          '[Meilleurs modèles LLM mobiles en 2026 : Phi-4 Mini vs Gemma 3 vs SmolLM](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — article compagnon pour choisir le modèle à exécuter sur ces applications.',
          '[Meilleurs LLM locaux en 2026](/fr/local-llms/best-local-llms-2026) — panorama plus large des modèles couvrant tous les niveaux de matériel, pas seulement mobile.',
          '[Créer un assistant vocal local sur votre téléphone : Whisper + LLM local](/fr/power-local-llm/voice-assistant-local-mobile-offline) — étend ces applications avec une entrée/sortie vocale hors ligne.',
          '[Meilleure application d\'IA locale pour PC d\'entrée de gamme](/fr/power-local-llm/best-local-ai-app-low-end-pc) — alternative bureau pour les utilisateurs souhaitant se connecter à distance à une machine domestique plus puissante.',
          '[Test d\'Enclave AI 2026](/fr/power-local-llm/enclave-ai-review) — un regard détaillé sur Enclave AI, assistant d\'IA on-device pour iPhone, iPad et Mac avec interaction avec des documents et automatisation Siri/Shortcuts.',
          '[Répertoire des logiciels LLM locaux 2026](/fr/directory) — répertoire de tous les outils LLM locaux notables sur toutes les plateformes.',
          '[Melhores Apps LLM Local para iPhone 2026 (Português)](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — version portugaise de ce guide',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-23',
    last_full_refresh: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: '2026年最佳iPhone本地AI应用（无需WiFi运行LLM）',
    seoTitle: '2026年iPhone本地AI应用推荐（离线运行LLM）',
    intro:
      '2026年，六款iPhone方案可在设备端完整运行真实LLM：PocketPal AI、Private LLM、Locally AI（LM Studio出品）、Google AI Edge Gallery、MLC Chat，以及系统集成的Apple Intelligence。模型下载完成后，它们均可在无WiFi时使用。本指南从费用、模型库、iOS集成、隐私和维护状态几个维度逐一对比，给出iPhone 16 Pro和iPhone 17 Pro上的参考速度，以及已涵盖iPhone 18 Pro的内存选型指南，并说明LLM Farm为何退出榜单。',
    metaDescription:
      '2026年在iPhone上运行LLM的六种方式：PocketPal AI、Private LLM、Locally AI、Google AI Edge Gallery、MLC Chat。含费用、隐私对比与内存选型指南。',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-zh.webp',
    twitterDescription:
      'iPhone本地AI 2026：PocketPal AI（免费首选）、Private LLM（$4.99，Siri + 快捷指令）、Locally AI（LM Studio，MLX）、Google AI Edge Gallery（Gemma 4）。模型下载后均可离线运行。',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 4B',
    ],
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM not published by Apple)',
      'iPhone Duo (A20 Pro, RAM not published by Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB RAM)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 16e (A18, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      '希望在无需云端订阅的情况下私密使用AI的iPhone用户，包括旅行者、注重隐私的用户以及探索端侧推理的开发者。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Beginner',
    primaryTerm: 'iPhone本地LLM应用',
    targetKeywords: [
      'iphone本地llm应用推荐',
      'iphone离线运行llm',
      'pocketpal ai iphone',
      'private llm应用',
      'mlc chat iphone',
      'llm farm ios',
      'iphone无网络ai',
      'iphone本地ai应用',
      'google ai edge gallery ios',
      'locally ai 对比 pocketpal',
      'ios版ollama',
    ],
    leadAnswerBlock:
      '**2026年对大多数iPhone用户而言，推荐在App Store安装PocketPal AI，并下载Phi-4 Mini（3.8B Q4_K_M，约2.7 GB）这类小模型。** 它可免费使用（高级内容为可选的应用内购买）、开源（MIT），支持iPhone 14 Pro及更新机型（内存6 GB以上的iPhone），在iPhone 16 Pro上日常对话约为10–15 tokens/秒（参考值）。如需Siri和快捷指令集成，Private LLM是付费选项（$4.99买断，覆盖iPhone、iPad和Mac）。Locally AI由LM Studio团队开发，是基于Apple MLX的免费应用，支持快捷指令，并可访问苹果的设备端基础模型。Google AI Edge Gallery是谷歌面向Gemma 4模型的免费应用，带有智能体技能和思考模式。Gemma 4 E2B/E4B和Qwen3.5等较新的小模型也可在这些应用中使用（见“按iPhone档次推荐模型”）。MLC Chat仍是Metal加速的参考应用，但其iPhone版自2024年9月起未再更新。LLM Farm目前不在App Store或TestFlight上（其README称“暂时不可用”），仅支持从源码编译安装。Apple Intelligence同样在设备端运行模型，但属系统集成型，不是对话应用——与上述应用互补而非竞争。',
    quickAnswerTop: {
      zh: {
        question: '2026年iPhone最佳本地LLM应用是什么？',
        answer:
          'PocketPal AI是大多数iPhone用户推荐的免费默认选择——开源（MIT）、App Store安装，支持Hugging Face上任意GGUF模型，在iPhone 16 Pro上运行Phi-4 Mini（3.8B）约为10–15 tokens/秒（参考值）。Private LLM是付费选项（$4.99买断，覆盖iPhone + iPad + Mac），提供快捷指令和Siri集成。Locally AI由LM Studio团队开发，是免费的Apple MLX应用，支持快捷指令，并可访问苹果的设备端基础模型。Google AI Edge Gallery是谷歌面向Gemma 4的免费应用。MLC Chat采用Metal加速，但其iPhone版自2024年9月起处于停更状态。Apple Intelligence同样在设备端运行模型，但属系统集成型，与上述应用互补而非替代。',
        bullets: [
          'PocketPal AI — 免费、开源（MIT）、App Store，v1.20.1（2026年10月19日）。大多数用户的默认选择。支持所有GGUF模型。高级内容为可选的应用内购买。',
          'Private LLM — $4.99买断（覆盖iPhone + iPad + Mac），v1.9.16（2026年9月14日）。付费选项。快捷指令 + Siri集成。',
          'Locally AI — 免费，LM Studio团队出品，v1.66.0（2026年10月15日）。Apple MLX引擎，支持快捷指令，可访问Apple Foundation Models。',
          'Google AI Edge Gallery — 免费，谷歌出品，v1.0.13（2026年10月8日）。Gemma 4、智能体技能、思考模式、图像和音频输入。',
          'MLC Chat — 免费，MLC LLM项目。Metal加速，但iPhone应用自v1.6（2024年9月27日）起再无更新——请视为可能已无人维护。',
          'Apple Intelligence — 系统集成，非独立应用。邮件、信息和备忘录使用的设备端约3B模型。',
          'iPhone 16 Pro / 17 Pro推荐模型：Phi-4 Mini（3.8B Q4_K_M，约2.7 GB）——约10–15 tokens/秒。较新选择：Gemma 4 E2B/E4B、Qwen3.5 4B。',
          '旧款iPhone（14 Pro）：Qwen3 1.7B或SmolLM 2 1.7B——适合6 GB内存，约15–20 tokens/秒。',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速概览', anchor: '#quick-facts' },
      { label: '首先应该安装哪款iPhone应用？', anchor: '#which-app' },
      { label: 'iPhone应用对比表', anchor: '#comparison-table' },
      { label: 'PocketPal AI：免费开源首选', anchor: '#pocketpal-ai' },
      { label: 'Private LLM：付费版iOS深度集成', anchor: '#private-llm' },
      { label: 'Locally AI：LM Studio出品的免费MLX应用', anchor: '#locally-ai' },
      { label: 'Google AI Edge Gallery：谷歌免费的Gemma 4应用', anchor: '#google-ai-edge-gallery' },
      { label: 'MLC Chat：苹果芯片专项优化', anchor: '#mlc-chat' },
      { label: 'LLM Farm：不在App Store上，源码仍可获取', anchor: '#llm-farm' },
      { label: 'Apple Intelligence：系统级内置AI', anchor: '#apple-intelligence' },
      { label: '按iPhone档次推荐模型', anchor: '#models-by-tier' },
      { label: '电池消耗与过热问题', anchor: '#battery-heat' },
      { label: 'iOS快捷指令、Siri与侧载', anchor: '#ios-integration' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '参考资料', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**PocketPal AI是推荐的免费默认选择。** 开源（MIT）、App Store安装，支持Hugging Face上任意GGUF模型。本地对话无需账号；高级Pals和“PocketPal Plus”为可选的应用内购买。在iPhone 16 Pro上以约10–15 tokens/秒运行Phi-4 Mini。适合大多数iPhone用户的推荐起点。',
          '**Private LLM是付费选项（$4.99买断，无需订阅）。** 一次购买即可覆盖iPhone、iPad和Mac，家庭共享最多可供六人使用。精选模型库；据开发者称，它可接入Siri和快捷指令。',
          '**Locally AI是免费的MLX替代方案，由LM Studio团队开发。** 基于Apple MLX运行Llama、Gemma（含Gemma 4）、Qwen和DeepSeek模型，支持iOS快捷指令，还能将苹果自家的设备端基础模型变为可对话的界面。',
          '**Google AI Edge Gallery是谷歌面向iPhone的免费Gemma 4应用。** 提供思考模式、智能体技能以及图像/音频输入；模型采用LiteRT-LM格式，而非GGUF。谷歌仍称该应用处于积极开发中。',
          '**MLC Chat采用Metal加速，但iPhone版已停更。** 其App Store版本自2024年9月27日的v1.6起未再更新，模型库停留在Phi-4 Mini和Gemma 3之前。MLC LLM引擎本身在GitHub上仍然活跃。',
          '**LLM Farm目前不在App Store或TestFlight上。** 项目自己的README称其“暂时不可用”。它仍保持开源，可通过Xcode从源码编译，但最后一个发布版本是2025年1月的1.4.3，最后一次代码提交是2026年1月30日。',
          '**Apple Intelligence在设备端运行，但非独立应用。** 苹果约3B的基础模型为写作工具、智能回复、通知摘要等系统功能提供支持。自iOS 26起，第三方应用可通过Foundation Models框架调用它，快捷指令也可通过“使用模型”动作向它发送提示。',
          '**iPhone 16 Pro / 17 Pro推荐模型：Phi-4 Mini（3.8B Q4_K_M，约2.7 GB）。** Gemma 4 E2B/E4B和Qwen3.5 4B是较新的备选，PromptQuorum暂无它们的速度数据。6 GB内存的旧款iPhone（iPhone 14 Pro）：推荐Qwen3 1.7B或SmolLM 2 1.7B。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**对比应用：** PocketPal AI、Private LLM、Locally AI（LM Studio出品）、Google AI Edge Gallery、MLC Chat、Apple Intelligence（系统）——以及目前不在App Store上的LLM Farm（README：“暂时不可用”）。',
          '**应用最近一次上游更新（2026-10-23核实）：** PocketPal AI v1.20.1（2026年10月19日）· Locally AI v1.66.0（2026年10月15日）· Google AI Edge Gallery v1.0.13（2026年10月8日）· Private LLM v1.9.16（2026年9月14日）· MLC Chat iPhone版v1.6（2024年9月27日——已过时）· LLM Farm发布版本1.4.3（2025年1月27日），最后一次代码提交2026年1月30日——已过时。',
          '**速度参考设备：** iPhone 16 Pro（A18 Pro，8 GB内存）和iPhone 17 Pro（A19 Pro，12 GB内存）。速度数字为参考区间，并非PromptQuorum的受控基准测试。iPhone 18 Pro、18 Pro Max和iPhone Duo（A20 Pro）在此没有速度数据。',
          '**推理引擎：** llama.cpp（PocketPal AI、LLM Farm），Apple MLX（Locally AI），Metal加速的MLC LLM（MLC Chat），谷歌LiteRT-LM（Google AI Edge Gallery），私有设备端运行时（Private LLM、Apple Intelligence）。',
          '**运行3B以上模型的最低iPhone要求：** iPhone 14 Pro（A16，6 GB内存）可运行1.7B；任意8 GB以上iPhone（15 Pro、16系列、16e、17系列、18 Pro）可运行3B–4B。',
          '**推荐的免费应用：** PocketPal AI——App Store、开源、模型灵活性高。',
          '**付费选项：** Private LLM——$4.99买断（覆盖iPhone + iPad + Mac），支持快捷指令 + Siri。',
          '**离线使用：** 六款方案在模型下载后均可完全离线运行，据各应用的README或商店页面，设备端对话不调用云端（Apple Intelligence可选择使用Private Cloud Compute）。',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '首先应该安装哪款iPhone应用？',
        content:
          '**对大多数用户：在App Store安装PocketPal AI，然后下载Phi-4 Mini（3.8B Q4_K_M），或Gemma 4 E2B/E4B、Qwen3.5 4B等较新的小模型。** 这个组合支持iPhone 14 Pro及更新机型，对话免费，能够胜任日常对话、摘要和快速起草。只有在有它无法满足的特定需求时，再考虑其他应用。',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-zh.webp',
        imageCaption: 'iPhone 本地 AI 应用怎么选：从免费的 PocketPal AI 到支持 Siri 的 Private LLM 的决策表',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年大多数iPhone用户：安装PocketPal AI（免费，App Store）并下载Phi-4 Mini或Gemma 4 E2B等较新的小模型——可在内存6 GB以上的任何iPhone上处理日常对话、摘要和写作任务。',
          },
          {
            type: 'plain-terms',
            text: '2026年有六种方案可让AI完全在iPhone上本地运行。PocketPal AI是推荐的免费起点——安装后一次性下载约2.7 GB的模型文件，即可获得一个无需WiFi、在地铁上也能使用的私密AI助手。Private LLM是希望Siri与本地模型对话的付费选择。Locally AI由LM Studio团队出品，是支持快捷指令的免费现代替代方案，Google AI Edge Gallery则是谷歌面向Gemma 4模型的免费应用。MLC Chat的iPhone版已不再更新。Apple Intelligence内置于iOS，但不是对话应用。PocketPal AI适合大多数使用场景。',
          },
        ],
        decisionBlock: {
          title: '决策：选择哪款iPhone本地AI应用？',
          localIf: [
            '想要免费的离线AI对话助手 → PocketPal AI',
            '想让Siri与本地模型对话 → Private LLM',
            '想要支持快捷指令且可访问Apple Foundation Models的免费MLX应用 → Locally AI',
            '想要谷歌自家的Gemma 4，带思考模式和智能体技能 → Google AI Edge Gallery',
            '想体验MLC LLM工具链，并接受自2024年9月起未再更新的iPhone版本 → MLC Chat',
            '只需要在邮件/信息/备忘录中获得写作辅助 → Apple Intelligence（系统内置）',
          ],
          cloudIf: [
            '需要70B以上模型质量（Llama 3.3 70B、GPT-5.5水平）→ 使用云端或远程连接家用机器',
            '需要访问GPT-5.5、Claude Opus或Gemini → 云端应用（本地无法运行这些模型）',
            '需要实时视觉或文字以外的多模态输出 → 云端（2026年设备端多模态能力有限）',
          ],
          quick: [
            '免费 + 适合大多数用户：PocketPal AI',
            '付费 + iOS原生集成：Private LLM',
            '免费 + LM Studio生态：Locally AI',
            '免费 + 谷歌Gemma 4：Google AI Edge Gallery',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '即使计划购买Private LLM，也建议先安装PocketPal AI。用它测试您的iPhone档次上的设备端推理速度是否满足需求。如果满意，再判断Private LLM的快捷指令和Siri集成是否值$4.99。如果不满意，您就在付费前省下了这笔钱。PocketPal AI还内置基准测试，可在您自己的iPhone上报告tokens/秒和内存占用——请以它为准，而不是轻信任何表格，包括下面这张。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone应用对比表',
        content:
          '**六种方案的差异主要体现在三个对大多数用户重要的维度：费用、模型灵活性和与iOS的集成。** 速度差异存在，但小于其中任何一款应用与云端LLM之间的差距。价格和版本号读取自2026-10-23的美国App Store页面和项目主页。',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-zh.webp',
        imageCaption: 'iPhone 本地 LLM 应用对比：PocketPal AI、Private LLM 等的费用、速度与集成能力',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI是推荐的免费默认选择，Private LLM是付费选项，Locally AI是LM Studio团队的免费MLX之选，Google AI Edge Gallery是谷歌免费的Gemma 4应用，MLC Chat的iPhone版已停更，Apple Intelligence为系统集成。',
          },
          {
            type: 'plain-terms',
            text: '选择通常取决于三点：是否愿意为Siri集成付费（Private LLM），是否想免费获得带快捷指令的LM Studio生态（Locally AI），还是想要谷歌自家带思考模式的Gemma 4（Google AI Edge Gallery）。其余情况下，PocketPal AI是默认选择。表中的速度数字是Q4_K_M量化（2026年移动端推理的标准）下的参考区间，并非受控基准测试。',
          },
        ],
        columns: ['应用', '费用', 'Phi-4 Mini tok/s（16 Pro）', '隐私', '适合人群'],
        rows: [
          { '应用': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)', '费用': '免费（MIT）+ 可选应用内购买', 'Phi-4 Mini tok/s（16 Pro）': '约10–15', '隐私': '设备端对话，无需账号（README）', '适合人群': '大多数用户的免费默认选择' },
          { '应用': '[Private LLM](https://privatellm.app)', '费用': '$4.99买断', 'Phi-4 Mini tok/s（16 Pro）': '无数据', '隐私': '设备端；无账号、无追踪（开发者称）', '适合人群': '快捷指令 + Siri集成' },
          { '应用': '[Locally AI](https://lmstudio.ai/locally)', '费用': '免费（LM Studio团队）', 'Phi-4 Mini tok/s（16 Pro）': '无数据——MLX目录（无Phi-4）', '隐私': '设备端；不收集数据（商店页面）', '适合人群': 'MLX + 快捷指令，LM Studio联动' },
          { '应用': '[Google AI Edge Gallery](https://apps.apple.com/app/id6749645337)', '费用': '免费（谷歌）', 'Phi-4 Mini tok/s（16 Pro）': '无数据——LiteRT-LM，Gemma 4', '隐私': '模型下载后在设备端运行', '适合人群': 'Gemma 4、思考模式、智能体技能' },
          { '应用': '[MLC Chat](https://llm.mlc.ai)', '费用': '免费（开源）', 'Phi-4 Mini tok/s（16 Pro）': '无数据——模型库早于Phi-4', '隐私': '本地推理（项目文档；未核实）', '适合人群': 'MLC LLM工具链用户（iOS版已停更）' },
          { '应用': '[LLM Farm](https://github.com/guinmoon/LLMFarm)', '费用': '免费（从源码编译）', 'Phi-4 Mini tok/s（16 Pro）': '无数据', '隐私': '本地推理（项目文档；未核实）', '适合人群': '开发者（不在App Store，已过时）' },
          { '应用': '[Apple Intelligence](https://www.apple.com/apple-intelligence/)', '费用': '免费（iOS内置）', 'Phi-4 Mini tok/s（16 Pro）': '不适用（系统功能）', '隐私': '本地 + 可选Private Cloud Compute', '适合人群': '邮件、信息、备忘录辅助' },
        ],
        note:
          '**关于Apple神经网络引擎（ANE）、Metal与MLX的说明：** PocketPal AI和LLM Farm使用llama.cpp配合Metal Performance Shaders进行推理，运行在GPU上。MLC Chat使用MLC LLM及更深入的Metal优化，MLC LLM项目称其在同一硬件上快于基于llama.cpp的应用（项目自述；PromptQuorum未对此进行测量）。Locally AI使用苹果自家开源的数组框架Apple MLX，在Apple芯片上可达到相近的GPU效率。Google AI Edge Gallery通过谷歌的LiteRT-LM运行时运行Gemma 4。Apple Intelligence专门使用ANE运行系统约3B模型，能效更高，但灵活性不如基于Metal的推理。自iOS 26起，第三方应用可通过Foundation Models框架调用该系统模型——Locally AI正是这样做的——但自定义的GGUF/MLX模型仍无法直接使用ANE。苹果称iPhone 18 Pro的A20 Pro配备双16核神经网络引擎，算力是此前的两倍；这是苹果的说法，PromptQuorum并未测量它对这些应用意味着什么。',
        callouts: [
          {
            type: 'tip',
            text: 'tokens/秒数字为取整后的参考区间，仅供大致参考，并非PromptQuorum的受控基准测试，也未对应具体的应用版本或测试日期。它们假设采用Q4_K_M量化（2026年移动端推理的标准），且iPhone处于空闲状态、没有其他重负载应用在运行。后台应用会明显拉低吞吐，iPhone 17 Pro通常比iPhone 16 Pro更快。请用PocketPal AI内置的基准测试测量您自己的手机。',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI：免费开源首选',
        content:
          '**PocketPal AI是2026年大多数iPhone用户的推荐起点。** 它可免费使用、开源（MIT；GitHub：[a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)），可在App Store安装，支持Hugging Face上的任意GGUF模型。应用底层使用llama.cpp，并针对苹果芯片做了优化。完整评测：[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review)。',
        items: [
          '**简介：** 一款在iOS/iPadOS和Android上使用llama.cpp本地运行GGUF模型的应用，发布方为Gooya UG。README称提示词、回复和文档不会上传到外部服务器；对话无需账号。',
          '**版本与最近更新：** v1.20.1，2026年10月19日发布（[GitHub发布页](https://github.com/a-ghorbani/pocketpal-ai/releases)）；App Store页面显示相同版本。更新节奏：大约每一到两周一次——无过时警告。',
          '**安装：** App Store → “PocketPal AI”。免费下载，含可选的应用内购买（高级Pals和“PocketPal Plus”）。需要iOS/iPadOS 15.1或更高版本；决定可用模型大小的是内存，而不是iOS版本。自v1.20.0起，应用还提供可选的“通过Apple登录”和账号删除功能。',
          '**添加模型：** 在应用中点击Models → “Add from Hugging Face” → 搜索（如“phi-4-mini-instruct-Q4_K_M”）→ 点击下载。模型保存在应用的本地存储中（Phi-4 Mini Q4约2.7 GB）。',
          '**生成速度（iPhone 16 Pro，参考值）：** Phi-4 Mini约10–15 tok/秒，Llama 3.2 3B约12–18 tok/秒，Gemma 3 4B约7–10 tok/秒，Qwen3 1.7B约18–24 tok/秒。这些并非PromptQuorum的受控测量——请使用内置基准测试，它会在您自己的iPhone上报告tokens/秒和内存占用。',
          '**其他功能：** Pals（自定义助手）、设备端文本转语音、Talents（为能力足够的模型提供计算器和日期/时间工具），以及支持用访问令牌下载受限模型的Hugging Face模型浏览器。',
          '**适合人群：** 想要一款可从App Store安装、无需账号、支持任何社区发布GGUF模型的免费对话应用的用户。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'PocketPal AI的模型选择器带有“Recommended”筛选，据该应用的文档，它会显示适合您设备内存的模型。请对照您自己的手机核实——过大的模型可能导致iOS在回复中途关闭应用。',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM：付费版iOS深度集成',
        content:
          '**Private LLM是本指南中的iPhone付费选项（$4.99买断，无订阅）。** 它仅在App Store提供，内置经过优化的精选模型库。其差异化在于iOS集成：开发者称它可直接接入Siri和快捷指令应用。完整评测：[Private LLM评测](/zh/power-local-llm/private-llm-review)。',
        items: [
          '**简介：** 一款带精选模型库和深度iOS集成的付费iOS应用。使用针对苹果芯片优化的私有设备端运行时。',
          '**安装：** App Store → “Private LLM - Local AI Chat”（Numen Technologies Limited）。一次性购买$4.99（无订阅；商店页面未列出应用内购买）。需要iOS/iPadOS 17.0或更高版本，以及A12 Bionic或更新的芯片。',
          '**版本与最近更新：** v1.9.16，2026年9月14日发布（App Store版本历史）；上一版本1.9.15发布于2026年7月9日。每两到三个月发布一次——未超过三个月线，因此无过时警告。',
          '**精选模型库：** [privatellm.app](https://privatellm.app)宣称在iPhone、iPad和Mac上共有140多个本地模型，并列出Llama、Qwen3、Gemma 3和Phi 4等系列；适合iPhone的只是其中一部分。灵活性不如PocketPal AI，但这些模型已针对应用运行时预先优化。',
          '**快捷指令：** 据开发者称，Private LLM可接入快捷指令应用，并可将回复传给支持x-callback-url规范的其他应用。适合通过主屏幕按钮或NFC标签触发本地AI。',
          '**Siri集成：** 开发者列出了Siri集成；发送给设备端模型的提示在没有网络时也可运行（仅首次下载模型需要联网）。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '据privatellm.app，一次$4.99的购买即可覆盖iPhone、iPad和Mac，App Store页面称通过家庭共享最多可供六位家庭成员使用。页面未列出订阅和应用内购买——所标价格即是总费用。开发者称不设账号、追踪或日志。',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI：LM Studio出品的免费MLX应用',
        content:
          '**Locally AI是由LM Studio团队开发（上架主体为Element Labs Inc）的免费、注重隐私的对话应用，基于苹果自家的MLX框架而非llama.cpp构建。** 它是本文中唯一将苹果设备端基础模型作为对话界面开放的应用。完整评测：[Locally AI评测](/zh/power-local-llm/locally-ai-review)。',
        items: [
          '**简介：** 一款使用Apple MLX推理的iOS/iPadOS/macOS应用，由桌面版LM Studio的开发团队出品。',
          '**安装：** App Store → “Locally AI”。免费，未列出应用内购买，无需账号（据商店页面），可离线运行。',
          '**版本与最近更新：** v1.66.0，2026年10月15日发布（App Store版本历史）；2026年大约每月发布一次——无过时警告。',
          '**模型库：** Llama 3.2、Gemma 2/3/4、Qwen 3和3.5、DeepSeek、LFM 2.5、Bonsai、Ministral 3以及Apple Foundation Models——目录比MLC Chat更广、更新。',
          '**iOS快捷指令：** 提供快捷指令动作，以零成本匹配Private LLM的自动化支持。',
          '**LM Link：** 一项可选功能，通过LM Studio所称的端到端加密链路连接运行在Mac上的LM Studio，让iPhone应用在需要时转交给家用机器上更大的模型。',
          '**系统要求：** iOS/iPadOS 18.1或更高版本（Mac版需macOS 26.0或更高版本）。苹果芯片级的效率在iPhone 15 Pro及更新机型上受益最大。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI是本指南中唯一能把苹果自家设备端基础模型放到普通对话窗口后面的应用——如果想测试Apple Intelligence的模型能做什么，又不想在写作工具菜单里翻找，它很有用。若要第三方GGUF式的灵活性，PocketPal AI的模型目录仍更大。',
          },
        ],
      },
      googleAIEdgeGallery: {
        id: 'google-ai-edge-gallery',
        title: 'Google AI Edge Gallery：谷歌免费的Gemma 4应用',
        content:
          '**Google AI Edge Gallery是谷歌用于在手机上运行其Gemma 4模型的免费应用，可在iPhone App Store获取。** 商店页面列出了带思考模式的AI对话、智能体技能、图像和音频输入、Prompt Lab以及模型基准测试。谷歌称该应用处于积极开发中。完整评测：[Google AI Edge Gallery评测](/zh/power-local-llm/google-ai-edge-gallery-review)。',
        items: [
          '**简介：** 谷歌的设备端AI展示应用，基于谷歌的LiteRT-LM运行时构建。免费；未列出应用内购买。',
          '**安装：** App Store → “Google AI Edge Gallery”。需要iOS 17.0或更高版本。模型在应用内单独下载。',
          '**版本与最近更新：** v1.0.13，2026年10月8日发布（App Store版本历史）。对Gemma 4的支持随2026年4月3日的v1.0.2到来——无过时警告。',
          '**模型：** Gemma 4系列（E2B和E4B是适合手机的版本；谷歌标注的LiteRT-LM文件大小约为2.58 GB和3.65 GB）、EmbeddingGemma 2和FunctionGemma 270M。LiteRT-LM格式的模型也可从Hugging Face导入。',
          '**功能：** 思考模式（仅限Gemma 4模型）、智能体技能（例如维基百科查询和地图，另有社区技能）、Ask Image、Audio Scribe、Prompt Lab以及模型基准测试。',
          '**局限：** 仅支持LiteRT-LM模型，不支持GGUF或MLX；商店页面未提及快捷指令或Siri；PromptQuorum没有它的速度数据。',
          '**适合人群：** 想免费使用谷歌自家Gemma 4、并需要可见推理模式和智能体工具的用户。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '谷歌报告称，在iPhone 17 Pro上运行Gemma 4 E2B时，峰值内存在CPU上约为607 MB，在GPU上约为1,450 MB（厂商数据，来自谷歌LiteRT-LM的Gemma 4页面；未经PromptQuorum重新测量）。E2B是大多数手机的实际起点；E4B适合8 GB以上内存的iPhone。',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat：苹果芯片专项优化',
        content:
          '**过时警告：MLC Chat的iPhone应用自2024年9月27日的1.6版本以来未再更新（已超过13个月），可能已无人维护——使用前请自行核实。** MLC LLM引擎仓库本身在GitHub上仍然活跃（最近活动为2026年10月6日）。MLC Chat免费、开源，运行的是由MLC LLM工具链编译的模型而非标准GGUF，且它的目录没有跟上PocketPal AI或Locally AI。完整评测：[MLC Chat评测](/zh/power-local-llm/mlc-chat-review)。',
        items: [
          '**简介：** MLC LLM项目的iOS参考应用，用于演示MLC LLM在苹果芯片上的Metal加速推理。',
          '**安装：** App Store → “MLC Chat”。免费。需要iOS/iPadOS 17.0或更高版本。',
          '**版本与最近更新：** v1.6，2024年9月27日发布（App Store版本历史；新增Llama 3.2 3B）。此前：1.5新增Gemma 2 2B（2024年8月），1.4新增Phi-3、Mistral v3和Qwen2（2024年6月）。iPhone版最近一次更新已超过13个月——已开启过时警告。',
          '**速度（项目自述，未经本站测量）：** MLC LLM项目称其Metal加速引擎在同一部iPhone上快于基于llama.cpp的应用——但应用自带的模型列表早于Phi-4 Mini和Gemma 3等当前推荐，因此在没有自行编译版本的情况下，无法在2026年的推荐模型上验证这一优势。',
          '**模型库：** 仅限MLC LLM项目在应用停更前编译的模型——Llama 3.2 3B、Gemma 2 2B、Phi-3、Mistral v3、Qwen2以及类似的2024年代版本。并非所有Hugging Face上的GGUF都能运行，App Store版本中也没有任何当代小模型。',
          '**适合人群：** 已深度使用MLC LLM工具链、愿意自行编译模型的开发者，或者明确需要它已内置的某个2025年前模型的用户。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '由于MLC Chat的App Store版本自2024年9月27日起未再更新，请不要指望Phi-4 Mini、Qwen3或Gemma 3出现在它的选择器里。如果现在就想要具备Metal级GPU效率的当代模型，Locally AI（Apple MLX）、PocketPal AI（llama.cpp + Metal Performance Shaders）或Google AI Edge Gallery（Gemma 4）是仍在积极维护的替代方案。',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm：不在App Store上，源码仍可获取',
        content:
          '**过时警告：LLM Farm最后一个发布版本（1.4.3）是2025年1月27日，最后一次代码提交是2026年1月30日——近九个月没有更新——因此可能已无人维护。** PromptQuorum对该项目的评测将其从App Store下架的时间定为2025年8月；其GitHub README称该应用在App Store和TestFlight均“暂时不可用”。项目（GitHub：[guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)）仍然开源，GitHub上到2026年10月仍有issue活动，但新用户已无法从App Store安装；必须通过Xcode从源码编译（README：macOS 13+和iOS 16+）。完整评测：[LLM Farm评测](/zh/power-local-llm/llm-farm-review)。',
        items: [
          '**简介：** 开发者@guinmoon的一款iOS应用，提供丰富的配置选项来运行GGUF模型，此前通过App Store分发。',
          '**当前可用性：** 截至本次更新，无法从App Store或TestFlight安装。源码仍然公开，可自行编译。',
          '**从源码编译：** 克隆仓库，在Xcode中打开，并使用免费或付费的Apple开发者账号编译到设备上——这是任何未在App Store上架的开源iOS应用的标准侧载流程。',
          '**开放的配置项（编译后）：** temperature、top-p、top-k、mirostat采样、重复惩罚、每个模型的系统提示词、对话模板选择、上下文窗口长度。',
          '**适合人群：** 熟悉在Xcode中从源码编译应用、且明确需要mirostat采样控制的开发者。其他人应使用PocketPal AI或Locally AI，二者均可直接从App Store安装且免费。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '不要指望LLM Farm的App Store链接能用——在其他地方看到的此类链接均应视为过时。从源码编译需要Xcode以及对iOS代码签名的基本了解。如果觉得这超出了您想投入的配置工作，PocketPal AI无需离开App Store，就能满足同样的“灵活免费对话应用”需求。',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence：系统级内置AI',
        content:
          '**Apple Intelligence在iPhone 15 Pro及更新机型（即iPhone 15 Pro这一代，据报道为8 GB内存；苹果未公布内存）上，于设备端运行苹果自家约3B的基础模型。** 它默认不是对话应用——而是为邮件（智能回复）、信息（写作工具）、备忘录（摘要）和通知摘要等系统功能提供支持。自iOS 26起，苹果的Foundation Models框架允许第三方开发者直接调用同一个设备端模型，Locally AI等应用现已借此在其上提供真正的对话界面。iOS 27进一步扩展了该框架：苹果的开发者指南称，应用可以使用任何符合其语言模型协议的语言模型，包括苹果自家模型和云端模型。',
        items: [
          '**所在位置：** 集成于iOS 18+（Foundation Models框架自iOS 26加入）。在“设置 → Apple智能与Siri”中启用。',
          '**硬件要求：** iPhone 15 Pro / 15 Pro Max、iPhone 16系列、iPhone 16e、iPhone 17系列，以及2026年的iPhone 18 Pro、18 Pro Max和iPhone Duo（A20 Pro）。更早的iPhone（14及以下）不支持Apple Intelligence。购买前请查看苹果针对iOS 27的最新兼容列表。',
          '**Siri AI（iOS 27）：** 苹果称Siri AI在iOS 27中以测试版提供，先推出英语，iOS上初期不在欧盟提供，部分服务器端功能设有每日使用上限。它与本指南中的设备端对话应用是两回事。',
          '**设备端功能：** 任意文本框内的写作工具（改写、摘要、校对）、邮件和信息中的智能回复、通知摘要、Genmoji生成。',
          '**Foundation Models框架（iOS 26+）：** 一个原生Swift API，只需几行代码即可让开发者直接访问同一设备端模型——Locally AI正是以此提供对话选项，快捷指令的“使用模型”动作也能将提示路由到它、Private Cloud Compute或ChatGPT。',
          '**Private Cloud Compute：** 对于超出设备端模型能力的任务，Apple Intelligence会回退到Private Cloud Compute（PCC）——由苹果运营、运行更大模型的服务器，苹果称这些服务器不会保留用户数据。PCC为可选功能，可以关闭。',
          '**与对话应用的关系：** Apple Intelligence是补充而非替代。其系统功能负责iOS应用内的文本改写和摘要；PocketPal AI、Private LLM、Locally AI和MLC Chat则提供可回答任意问题的专用对话界面——而Locally AI现在也能把苹果自家模型放到同类界面之后。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '如果您只需要Apple Intelligence（改写邮件、总结通知），就不需要另装对话应用。如果想向模型提问，例如“用简单的话解释量子隧穿”或“为X起草一份项目计划”，请安装一款对话应用——可以是PocketPal AI这类专用应用，也可以是能在对话窗口里调用苹果自家设备端模型的Locally AI。',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: '按iPhone档次推荐模型',
        content:
          '**决定模型大小上限的是iPhone的内存，而不是芯片代际。** 6 GB内存的iPhone（14 Pro、15）可流畅运行1.7B模型；8 GB以上的iPhone（15 Pro、16系列、16e、17系列）可流畅运行3B–4B模型，运行7B模型则较慢。除Phi-4 Mini外值得一试的较新小模型有：Gemma 4 E2B和E4B（谷歌，2026年4月；LiteRT-LM文件分别约2.58 GB和3.65 GB），以及Qwen3.5小模型系列（阿里巴巴，2026年3月；0.8B、2B、4B和9B，据Artificial Analysis摘要为Apache 2.0）。PromptQuorum没有它们的速度数据；Locally AI和Google AI Edge Gallery直接内置了它们。关于覆盖所有硬件（不限移动端）的模型全景，请参阅[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026)。',
        image: '/images/iphone-llm-apps-models-tier-zh.svg',
        imageCaption: '按 iPhone 内存档位推荐的本地 LLM 模型：从 4 GB 机型到 12 GB 的 iPhone 17 Pro',
        columns: ['iPhone档次（年份，内存）', '推荐模型', '下载大小', '速度参考（粗略）'],
        rows: [
          { 'iPhone档次（年份，内存）': 'iPhone 18 Pro / Pro Max（2026，据报道约12 GB）', '推荐模型': '参照17 Pro起步；苹果未公布内存', '下载大小': '约2.5–3.7 GB', '速度参考（粗略）': '无数据' },
          { 'iPhone档次（年份，内存）': 'iPhone 17 Pro / 17 Pro Max（2025，12 GB）', '推荐模型': 'Phi-4 Mini / Llama 3.2 3B / Gemma 4 E4B', '下载大小': '约2.5–3.7 GB', '速度参考（粗略）': '约13–20 tok/秒（Phi-4 Mini）' },
          { 'iPhone档次（年份，内存）': 'iPhone 16系列 / 16e / 17（2024–2025，8 GB）', '推荐模型': 'Phi-4 Mini（3.8B Q4_K_M）或Gemma 4 E2B', '下载大小': '约2.6–2.7 GB', '速度参考（粗略）': '约10–15 tok/秒（Phi-4 Mini）' },
          { 'iPhone档次（年份，内存）': 'iPhone 15 Pro / Pro Max（2023，8 GB）', '推荐模型': 'Phi-4 Mini（3.8B Q4_K_M）', '下载大小': '约2.7 GB', '速度参考（粗略）': '约8–12 tok/秒' },
          { 'iPhone档次（年份，内存）': 'iPhone 13 Pro / 14 Pro / Pro Max（6 GB）', '推荐模型': 'Qwen3 1.7B或SmolLM 2 1.7B（Q4_K_M）', '下载大小': '约1.1 GB', '速度参考（粗略）': '约15–20 tok/秒' },
          { 'iPhone档次（年份，内存）': 'iPhone 14 / 14 Plus / 15 / 15 Plus（6 GB）', '推荐模型': 'Qwen3 1.7B或SmolLM 2 1.7B（Q4_K_M）', '下载大小': '约1.1 GB', '速度参考（粗略）': '约12–18 tok/秒' },
          { 'iPhone档次（年份，内存）': 'iPhone 13 / 12 / SE / 更早机型（4 GB）', '推荐模型': '不推荐运行设备端LLM', '下载大小': '—', '速度参考（粗略）': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于较旧的6 GB iPhone，Qwen3 1.7B或SmolLM 2 1.7B（HuggingFace）是2026年的合理选择；Qwen3.5 2B和Gemma 4 E2B是同一体量下较新的选项。这么小的模型能给出连贯的短回复（1–3段），但不擅长多步推理。请勿在6 GB iPhone上安装Phi-4 Mini——它名义上放得下，但只要有其他内存压力，iOS就会终止该应用。表中速度是针对Phi-4 Mini、Llama 3.2 3B和Qwen3 1.7B的取整参考区间，并未对应具体的应用版本或测试日期；Gemma 4和Qwen3.5在此没有数据。苹果的产品页面并未标明iPhone内存：此处的内存数字为广泛流传的规格，iPhone 18 Pro的约12 GB来自媒体报道。',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: '电池消耗与过热问题',
        content:
          '**iPhone上的设备端LLM推理对CPU/GPU负载很高，并会产生热量。** 作为粗略参考（参考值，并非PromptQuorum的受控测量），推理期间功耗约3–5 W；持续生成会使芯片降频，在iPhone 16 Pro上每小时可能消耗约20–30%的电量。',
        image: '/images/iphone-llm-apps-battery-thermal-zh.svg',
        imageCaption: 'iPhone 本地 LLM 耗电与散热指南：功耗、热降频以及降温建议',
        items: [
          '**电池消耗（持续对话，参考值）：** iPhone 16 Pro运行Phi-4 Mini时每小时约20–30%。',
          '**持续生成可能触发热降频。** 芯片发热时，iOS会降低时钟频率，tokens/秒随之下降。何时开始、速度损失多少，取决于手机、保护壳、是否在充电以及室温；PromptQuorum并未测量过这一点。让手机降温即可恢复速度。',
          '**缓解办法：** 长时间推理时，请将iPhone屏幕朝上放在硬质表面上（不要拿在手里或放在口袋里）以利散热。被动散热片手机壳有帮助，但对短时间使用很少有必要。',
          '**后台“幽灵耗电”：** 如果生成结束后让对话应用留在后台，内存仍被占用但并无推理在运行——对电池的影响很小。彻底关闭应用即可回收约3 GB内存。',
          '**推理时使用MagSafe充电：** 充电的同时生成内容，任何iPhone都可能产生更多热量，iPhone 15 Pro尤甚；如果手机变热，请暂停充电或生成，或者事后再充电。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '请勿在阳光直射或高温车内的iPhone上运行设备端LLM推理。在阳光直射或高温车内，芯片可能更早达到热限制，从而触发降频和苹果的“iPhone需要降温”提示。通常是生成速度变慢，而不是应用被关闭。',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS快捷指令、Siri与侧载',
        content:
          '**各应用的iOS集成程度差异很大。** Private LLM和Locally AI都支持快捷指令；PocketPal AI、Google AI Edge Gallery和MLC Chat是独立的对话应用，其README或App Store页面均未提及快捷指令或Siri集成。',
        image: '/images/iphone-llm-apps-ios-integration-zh.svg',
        imageCaption: 'iPhone 本地 LLM 应用的 iOS 集成：是否支持 Shortcuts、Siri、开源与 App Store 安装',
        items: [
          '**Private LLM**据开发者称可接入快捷指令和Siri，并可将回复交给支持x-callback-url的应用。是这里iOS集成最原生的对话应用。',
          '**Locally AI**免费提供快捷指令动作，并可通过其Foundation Models框架集成，将快捷指令路由到苹果自家的设备端基础模型——没有Siri语音触发，但无需付费即可使用快捷指令自动化。',
          '**PocketPal AI**是独立对话应用——其README未提及快捷指令动作，也没有Siri集成。您只需打开应用聊天。',
          '**Google AI Edge Gallery**是独立的对话与演示应用——其App Store页面未提及快捷指令动作或Siri集成。',
          '**MLC Chat**是MLC LLM项目的参考应用——iOS集成极少，且自2024年9月起iPhone版未再更新。没有快捷指令动作。',
          '**LLM Farm**目前不在App Store上，从源码编译后也没有快捷指令动作。',
          '**Apple Intelligence**通过“使用模型”动作与iOS快捷指令集成（iOS 18.4+，随iOS 26的Foundation Models框架扩展）。它可将提示路由到设备端模型、Private Cloud Compute或ChatGPT（可配置）。设备端输出可串联到其他快捷指令动作中。',
          '**侧载：** PocketPal AI、Private LLM、Locally AI、Google AI Edge Gallery和MLC Chat均在App Store上架，无需侧载或越狱；Apple Intelligence内置于iOS。LLM Farm是例外——现在安装它需要在Xcode中从源码编译。在欧盟，依据DMA存在替代应用商店，但它们提供哪些应用由各开发者自行决定，因此请从开发者的官方渠道安装；这些应用都不需要替代应用商店。',
        ],
        promptExamples: [
          {
            label: 'Private LLM快捷指令：总结选中文本',
            text: '1. 动作：“获取所选文本”（iOS共享表单输入）。\n2. 动作：Private LLM文本生成（来自Private LLM应用的快捷指令动作）→ 提示词：“用三个要点总结以下文本：[所选文本]” → 选择应用中已安装的模型。\n3. 动作：“显示结果”或“拷贝到剪贴板”。\n添加到共享表单后，即可在任意应用中对任意选中文本运行，且完全离线。动作名称依据开发者的说明，可能因应用版本而异。',
          },
          {
            label: 'Apple Intelligence快捷指令：调整语气改写',
            text: '1. 动作：“获取剪贴板”。\n2. 动作：“使用模型” → 模型：设备端 → 提示词：“用专业、简洁的语气改写这段文字：[剪贴板]”。\n3. 动作：“拷贝到剪贴板”。\n分配给锁屏小组件，即可一键改写您复制的任何内容。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '开车或做饭时需要免提使用，Private LLM的Siri集成是本指南中唯一由开发者列出Siri集成的对话应用，因此无需触碰手机即可使用。Apple Intelligence通过Siri支持语音，但仅限系统任务（写作、摘要、应用操作）——它不像对话应用那样提供通用问答。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**安装超出iPhone内存承载能力的模型。** 8 GB的iPhone运行7B模型往往慢到不适合对话，且在iOS为其他应用回收内存时可能被系统关闭；请先用PocketPal AI内置的基准测试实测。请遵循您所属iPhone档次的推荐模型（8 GB设备用3B–4B，6 GB设备用1.7B）。',
          '**期待设备端模型有云端AI的质量。** Phi-4 Mini（3.8B）就其体量而言令人印象深刻，但不是GPT-5.5。请将它用于对话、摘要、起草和快速问答——而不是多步推理、复杂代码生成或细腻的创意写作。',
          '**在阳光直射或高温车内运行推理。** 热降频可能很快触发，生成速度会变慢，您还可能看到“iPhone需要降温”的提示。请在室温下运行推理。',
          '**同时装着3个以上对话应用，每个都存3 GB模型。** 重复的模型会白白占用约10 GB存储空间。请选定一个应用和一个模型；在确认需要之前，先卸载其他的。',
          '**以为Apple Intelligence完全没有对话界面。** 到iOS 18为止确实如此，但自iOS 26起，Locally AI等应用可通过Foundation Models框架，为苹果设备端模型提供真正的对话窗口。不过系统功能（写作工具、智能回复）本身仍不是对话界面。',
          '**到App Store里找LLM Farm。** 它目前不在App Store上（PromptQuorum的LLM Farm评测将下架时间定为2025年8月）。在App Store搜索它只是浪费时间；同样的免费/灵活需求请用PocketPal AI，或者如果确实需要它开放的mirostat控制，就在Xcode中从源码编译LLM Farm。',
          '**以为“免费”就是没有任何购买项。** PocketPal AI本地对话免费，但销售可选的高级内容（Pals和“PocketPal Plus”），而Locally AI和Google AI Edge Gallery未列出应用内购买。安装前请查看商店页面的应用内购买部分（PocketPal AI的美国App Store页面在2026-10-23显示年龄分级为18+）。',
          '**只凭速度表来评判模型。** 本指南中的tokens/秒区间只是参考值，Gemma 4和Qwen3.5等较新模型也不在其中。在删除已下载的模型之前，请先在PocketPal AI的基准测试中用同一提示词跑一下两个模型。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考资料',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)（README、MIT许可证、2026年10月19日的v1.20.1发布）以及[App Store页面](https://apps.apple.com/us/app/pocketpal-ai/id6502579498)（版本历史、应用内购买、年龄分级、iOS 15.1+）。读取于2026-10-23。',
          'Private LLM — [App Store页面](https://apps.apple.com/app/apple-store/id6448106860)（v1.9.16、$4.99、iOS 17.0+、家庭共享）和[privatellm.app](https://privatellm.app)（Siri与快捷指令、模型列表、一次购买覆盖iPhone、iPad和Mac）。读取于2026-10-23。',
          'Locally AI — [App Store页面](https://apps.apple.com/us/app/locally-ai/id6741426692)（v1.66.0、免费、Element Labs Inc、iOS 18.1+；LM Studio团队）和[lmstudio.ai/locally](https://lmstudio.ai/locally)（LM Link）。读取于2026-10-23。',
          'Google AI Edge Gallery — [App Store页面](https://apps.apple.com/app/id6749645337)（v1.0.13、免费、iOS 17.0+、Gemma 4、智能体技能、思考模式）、[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)以及谷歌的[LiteRT-LM Gemma 4页面](https://developers.google.com/edge/litert-lm/models/gemma-4)（E2B/E4B文件大小与内存，厂商数据）。读取于2026-10-23。',
          'MLC Chat / MLC LLM项目 — [App Store页面](https://apps.apple.com/us/app/mlc-chat/id6448482937)（v1.6、2024年9月27日、版本历史）、[llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html)以及[github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm)（引擎仓库）。读取于2026-10-23。',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)（README：TestFlight和App Store“暂时不可用”；2025年1月27日的1.4.3发布；2026年1月30日最后一次提交）以及[PromptQuorum的LLM Farm评测](/zh/power-local-llm/llm-farm-review)（2025年8月下架）。读取于2026-10-23。',
          'Apple Intelligence与设备端基础模型 — [Apple Machine Learning Research](https://machinelearning.apple.com)、[What\'s new in iOS 27开发者指南](https://developer.apple.com/wwdc26/guides/ios/)（Foundation Models框架），以及[iPhone 18 Pro页面](https://www.apple.com/iphone-18-pro/)（A20 Pro、双16核神经网络引擎、Siri AI测试版、未标明内存）和[iPhone Duo页面](https://www.apple.com/iphone-duo/)。读取于2026-10-23。',
          'Qwen3.5小模型系列（0.8B–9B，2026年3月）— [Artificial Analysis摘要](https://artificialanalysis.ai/articles/qwen3-5-small-models)。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'iPhone真的能运行7B模型吗？',
            a: '技术上可以，iPhone 15 Pro及更新机型（8 GB内存）能跑，但速度不实用。iPhone 16 Pro上7B Q4模型用于对话往往太慢（参考判断）——会令人沮丧。当其他应用需要内存时，iOS也倾向于终止该应用。日常设备端对话请使用3B–4B模型（Phi-4 Mini、Llama 3.2 3B、Gemma 3 4B）。若需要7B以上的质量，请远程连接家里运行Ollama的Mac或PC。',
          },
          {
            q: '本地AI会消耗iPhone的电量吗？',
            a: '会——持续运行推理时功耗通常约3–5 W，作为粗略的参考值，在iPhone 16 Pro上每小时可能耗电约20–30%。偶尔聊几句（几条提示）影响很小。持续使用（长对话、多个摘要任务）时，请让iPhone保持充电。模型仅驻留在内存中而不进行推理时，对电池的影响可以忽略。',
          },
          {
            q: '使用本地AI时iPhone会发烫吗？',
            a: '会，尤其是在长时间连续生成时。芯片发热时，iOS会降低时钟频率，从而降低tokens/秒；何时开始、降低多少因手机、保护壳、是否在充电和室温而异，PromptQuorum并未测量过。减轻的办法：长时间使用时让iPhone屏幕朝上放在硬质表面上（不要拿在手里），并避开阳光直射。短时间交互通常不会引起明显发热。',
          },
          {
            q: '能用Siri调用本地模型吗？',
            a: '可以，使用Private LLM（$4.99买断）。开发者称它可直接接入Siri和快捷指令，因此提示可在没有网络的情况下路由到设备端模型。PocketPal AI、Locally AI、Google AI Edge Gallery和MLC Chat均未提及Siri语音集成，不过Locally AI确实支持快捷指令自动化。Apple Intelligence与Siri集成，但仅限系统任务（写作、摘要、应用操作），而非通用问答；Siri AI是iOS 27中单独的测试版功能，先推出英语，初期不在欧盟提供。',
          },
          {
            q: '这些应用能在iPhone SE或更旧的iPhone上使用吗？',
            a: '有限。iPhone SE以及iPhone 13 / 12（4 GB内存）低于2026年设备端LLM的实用门槛。iPhone 14 / 15（非Pro，6 GB内存）可运行1.7B模型（Qwen3 1.7B、SmolLM 2 1.7B），但不能运行3B以上。iPhone 13 Pro和14 Pro（6 GB内存）同样停留在1.7B；iPhone 15 Pro（8 GB内存）可以大约8–12 tokens/秒（参考值）运行Phi-4 Mini这类3B模型。对于较旧的iPhone，更好的做法是远程连接家里的Mac或PC。',
          },
          {
            q: '能在iPhone和Mac之间同步聊天记录吗？',
            a: 'PocketPal AI、Private LLM、Google AI Edge Gallery和MLC Chat都不行——聊天记录按设备本地保存，没有iCloud同步。Private LLM和Locally AI也都有可在Mac上原生运行的版本，但iPhone和Mac两份副本之间的聊天记录仍不会同步。若要跨设备同步聊天记录，实用的办法是在家里的Mac上运行Open WebUI，然后用iPhone和Mac的浏览器访问——Open WebUI把聊天记录保存在服务器端。',
          },
          {
            q: '这些应用能在App Store之外获取吗？',
            a: 'PocketPal AI是开源的，可通过Xcode从源码编译，但App Store版本是标准分发方式。LLM Farm是现在必须从源码编译的例外——它目前不在App Store或TestFlight上（README称“暂时不可用”）。Private LLM、Locally AI、Google AI Edge Gallery和MLC Chat仅在App Store提供。在欧盟，依据DMA存在替代应用商店，但它们提供哪些应用由各开发者自行决定，因此请从开发者的官方渠道安装；这些应用都不需要替代应用商店。',
          },
          {
            q: '其中有哪些需要越狱吗？',
            a: '没有。PocketPal AI、Private LLM、Locally AI、Google AI Edge Gallery、MLC Chat和Apple Intelligence都可在原版iOS上运行。在Xcode中从源码编译LLM Farm同样不需要越狱——它使用的是标准的开发者侧载，而不是越狱漏洞。这些应用都不需要越狱，也不建议越狱。',
          },
          {
            q: '能在iOS快捷指令中使用本地AI吗？',
            a: '可以，通过Private LLM（其快捷指令动作）、Locally AI（免费的快捷指令动作）或Apple Intelligence（“使用模型”动作，iOS 18.4+，iOS 26起扩展）实现。PocketPal AI、Google AI Edge Gallery和MLC Chat未提及快捷指令动作。在本文对比的应用中，Locally AI是唯一同时列出快捷指令支持和苹果设备端模型访问的免费选项。',
          },
          {
            q: '本地AI与iPhone上的ChatGPT应用相比如何？',
            a: '设备端模型（Phi-4 Mini、Llama 3.2 3B）在复杂推理、广博世界知识和多模态任务上仍明显逊于前沿云端模型，但在简单问题上更快（无网络延迟），且按各应用的文档说明，对话内容保留在设备上。客观来说：本地AI适合日常和私密任务；偶尔遇到高难度问题时可用ChatGPT等云端应用。2026年很多用户两者都装着，按需选择。',
          },
          {
            q: 'LLM Farm不在App Store上架后还安全吗？',
            a: '其源码在GitHub上公开，到2026年仍有issue活动，但最后一个发布版本（1.4.3）是2025年1月27日，最后一次代码提交是2026年1月30日，因此可能已无人维护。从源码编译并侧载后，它也不再经过苹果的App Store审核流程。如果不是特别需要mirostat采样控制，PocketPal AI能覆盖同样免费、灵活、开源的使用场景，并保留在经过苹果标准审核的App Store中。',
          },
          {
            q: '这些iPhone应用中哪些是免费的？',
            a: 'PocketPal AI免费（MIT许可证），高级Pals和“PocketPal Plus”为可选的应用内购买。Locally AI和Google AI Edge Gallery免费，未列出应用内购买。MLC Chat免费。LLM Farm免费，但必须从源码编译。Private LLM为$4.99买断，未列出应用内购买。Apple Intelligence内置于iOS。价格读取自2026-10-23的美国App Store，各国可能不同。',
          },
          {
            q: 'iPhone Duo或iPhone 18 Pro能离线运行本地LLM吗？',
            a: '原则上可以：两者都使用苹果的A20 Pro芯片，本指南中的应用可在任何满足其iOS最低版本要求的iPhone上运行。决定模型大小的是内存，而苹果的iPhone 18 Pro和iPhone Duo页面均未标明内存；媒体报道称iPhone 18 Pro为12 GB，尚未得到证实。PromptQuorum没有这两款手机的实测速度。请安装PocketPal AI并运行其内置基准测试，看看您的手机实际表现如何。',
          },
          {
            q: '这些应用能在iPad上使用吗？',
            a: '大多数可以。PocketPal AI（iPadOS 15.1+，其README称完整支持iPad）、Private LLM（iPadOS 17.0+）和Locally AI（iPadOS 18.1+）都列出了iPad支持。Google AI Edge Gallery的商店页面要求iOS 17.0或更高版本；请查看其页面确认您的iPad是否适用。与iPhone一样，由内存决定能放下哪些模型。iPad方面的专门建议请参阅[平板上运行AI：iPad与Android](/zh/power-local-llm/run-ai-on-tablet-ipad-android)。',
          },
          {
            q: 'LLM Farm为什么从App Store消失了？',
            a: '项目README写道：“The app is temporarily unavailable in TestFlight and Appstore.”（该应用在TestFlight和App Store暂时不可用。）PromptQuorum没有找到下架的公开原因，因此您在其他地方读到的任何解释都未经证实（参见[LLM Farm评测](/zh/power-local-llm/llm-farm-review)）。源码仍然公开，但最后一个发布版本是2025年1月27日的1.4.3。若想要可从App Store安装的免费替代品，请使用PocketPal AI或Locally AI。',
          },
          {
            q: 'iPhone上有Ollama应用吗？',
            a: 'Ollama的下载页面列出了macOS、Windows和Linux，没有iPhone应用。要在iPhone上使用Ollama或LM Studio的模型，请在Mac或PC上运行服务器，再从客户端应用连接；Locally AI提供LM Link，即LM Studio所称的连接到Mac上LM Studio的加密链路。若要模型完全在手机上运行，请使用本指南中的应用。',
          },
          {
            q: '应该下载Gemma 4还是Phi-4 Mini？',
            a: 'PromptQuorum没有两者在iPhone上的直接对比基准。有帮助的事实：Gemma 4 E2B和E4B是谷歌面向手机的模型（在Google AI Edge Gallery中作为LiteRT-LM文件分别约2.58 GB和3.65 GB；Locally AI也列出了Gemma 4），而Phi-4 Mini（3.8B Q4_K_M，约2.7 GB）是本指南速度数据所使用的模型。在8 GB内存的iPhone上，请用您自己的提示词两者都试试，并在PocketPal AI的基准测试中比较tokens/秒；在6 GB内存的iPhone上请坚持使用1.7B级别的模型。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review) — PromptQuorum对这款免费开源默认选择的完整评测。',
          '[Private LLM评测](/zh/power-local-llm/private-llm-review) — 支持Siri和快捷指令的付费选项。',
          '[Locally AI评测](/zh/power-local-llm/locally-ai-review) — LM Studio团队出品的免费MLX应用。',
          '[Google AI Edge Gallery评测](/zh/power-local-llm/google-ai-edge-gallery-review) — 谷歌免费的Gemma 4应用。',
          '[MLC Chat评测](/zh/power-local-llm/mlc-chat-review)和[LLM Farm评测](/zh/power-local-llm/llm-farm-review) — 本指南中被标记为过时的两款应用。',
          '[2026年Android最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — Android同类应用对比（Maid、Layla、MLC Chat、Termux + Ollama）。',
          '[平板上运行AI：iPad与Android（2026）](/zh/power-local-llm/run-ai-on-tablet-ipad-android) — 平板用户平台指南。',
          '[2026年最佳移动端LLM模型：Phi-4 Mini vs Gemma 3 vs SmolLM](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 搭配本文选择模型的参考文章。',
          '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) — 涵盖全硬件档次（不限移动端）的综合模型指南。',
          '[在手机上搭建本地语音助手：Whisper + 本地LLM](/zh/power-local-llm/voice-assistant-local-mobile-offline) — 为上述应用扩展离线语音输入/输出。',
          '[低配PC最佳本地AI应用](/zh/power-local-llm/best-local-ai-app-low-end-pc) — 适合希望远程连接家用高性能机器的用户的桌面端替代方案。',
          '[2026年Enclave AI评测](/zh/power-local-llm/enclave-ai-review) — 深入了解Enclave AI，一款适用于iPhone、iPad和Mac的设备端AI助手应用，支持文档交互及Siri/快捷指令自动化。',
          '[2026年本地LLM软件目录](/zh/directory) — 全平台值得关注的本地LLM工具汇总。',
          '[Melhores Apps LLM Local para iPhone 2026（葡萄牙语）](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — 本指南的葡萄牙语版本',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-23',
    last_full_refresh: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'Las mejores apps de IA local para iPhone en 2026 (ejecuta LLMs sin WiFi)',
    seoTitle: 'Mejores apps de IA local para iPhone 2026 (sin conexión)',
    intro:
      'Seis opciones para iPhone ejecutan LLMs reales por completo en el dispositivo en 2026: PocketPal AI, Private LLM, Locally AI (de LM Studio), Google AI Edge Gallery, MLC Chat y Apple Intelligence (integrado en el sistema). Todas funcionan sin WiFi una vez descargado el modelo. Esta guía las compara por coste, biblioteca de modelos, integración con iOS, privacidad y estado de mantenimiento — con velocidades orientativas en iPhone 16 Pro e iPhone 17 Pro y una guía de RAM que ahora incluye el iPhone 18 Pro — y explica por qué LLM Farm salió de la clasificación.',
    metaDescription:
      'Seis formas de ejecutar LLMs en iPhone en 2026: PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery y MLC Chat. Coste, privacidad y guía de RAM.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-es.webp',
    twitterDescription:
      'IA local en iPhone en 2026: PocketPal AI (opción gratuita), Private LLM ($4.99, Siri + Shortcuts), Locally AI (LM Studio, MLX), Google AI Edge Gallery (Gemma 4). Todas funcionan sin conexión tras la descarga.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 4B',
    ],
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM no publicada por Apple)',
      'iPhone Duo (A20 Pro, RAM no publicada por Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB RAM)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 16e (A18, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'Usuarios de iPhone que quieren ejecutar IA de forma privada en el dispositivo sin suscripción a la nube, incluyendo viajeros, personas con conciencia de privacidad y desarrolladores que exploran la inferencia en dispositivo.',
    readTime: '12 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'app LLM local iPhone',
    targetKeywords: [
      'mejor app llm local iphone',
      'ejecutar llm en iphone sin internet',
      'pocketpal ai iphone',
      'private llm app',
      'mlc chat iphone',
      'llm farm ios',
      'iphone ia sin wifi',
      'apps de ia local iphone',
      'google ai edge gallery ios',
      'locally ai vs pocketpal',
      'ollama para ios',
    ],
    leadAnswerBlock:
      '**Para la mayoría de usuarios de iPhone en 2026, instala PocketPal AI desde el App Store y descarga un modelo pequeño como Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Se puede usar gratis (con compras integradas opcionales para contenido premium), es de código abierto (MIT) y funciona en iPhone 14 Pro y modelos más recientes (cualquier iPhone con 6 GB+ de RAM) a unos 10–15 tokens/seg (orientativo) en iPhone 16 Pro para el chat diario. Para integración con Siri y Shortcuts, Private LLM es la opción de pago ($4.99 de pago único, iPhone, iPad y Mac). Locally AI —desarrollada por el equipo de LM Studio— es la app gratuita basada en Apple MLX, con soporte de Shortcuts y acceso al modelo de base en dispositivo de Apple. Google AI Edge Gallery es la app gratuita de Google para sus modelos Gemma 4, con habilidades de agente y modo de razonamiento. Modelos pequeños más nuevos —Gemma 4 E2B/E4B y Qwen3.5— también están disponibles en estas apps (consulta Modelos según el modelo de iPhone). MLC Chat sigue siendo la app de referencia para la aceleración Metal, pero su versión para iPhone no se actualiza desde septiembre de 2024. LLM Farm no está disponible actualmente en el App Store ni en TestFlight (su README dice "temporalmente no disponible") y solo se instala compilando el código fuente. Apple Intelligence también ejecuta modelos en el dispositivo, pero está integrado en el sistema y no es una app de chat; complementa a estas apps en lugar de competir con ellas.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor app de LLM local para iPhone en 2026?',
        answer:
          'PocketPal AI es la opción gratuita recomendada para la mayoría de usuarios de iPhone: de código abierto (MIT), instalación desde el App Store, compatible con cualquier modelo GGUF de Hugging Face y ejecuta Phi-4 Mini (3.8B) a unos ~10–15 tokens/seg (orientativo) en iPhone 16 Pro. Private LLM es la opción de pago ($4.99 de pago único, iPhone + iPad + Mac) con integración de Shortcuts y Siri. Locally AI, desarrollada por el equipo de LM Studio, es la opción gratuita con Apple MLX, soporte de Shortcuts y acceso al modelo de base en dispositivo de Apple. Google AI Edge Gallery es la app gratuita de Google para Gemma 4. MLC Chat tiene aceleración Metal, pero su versión para iPhone está inactiva desde septiembre de 2024. Apple Intelligence también ejecuta modelos en el dispositivo, pero está integrado en el sistema y complementa estas apps en lugar de sustituirlas.',
        bullets: [
          'PocketPal AI — gratuita, código abierto (MIT), App Store, v1.20.1 (19 oct 2026). Opción por defecto recomendada para la mayoría de usuarios. Compatible con cualquier modelo GGUF. Compras integradas opcionales para contenido premium.',
          'Private LLM — $4.99 de pago único (iPhone + iPad + Mac), v1.9.16 (14 sep 2026). Opción de pago. Shortcuts + integración con Siri.',
          'Locally AI — gratuita, del equipo de LM Studio, v1.66.0 (15 oct 2026). Motor Apple MLX, soporte de Shortcuts, acceso a Apple Foundation Models.',
          'Google AI Edge Gallery — gratuita, de Google, v1.0.13 (8 oct 2026). Gemma 4, habilidades de agente, modo de razonamiento, entrada de imagen y audio.',
          'MLC Chat — gratuita, proyecto MLC LLM. Con aceleración Metal, pero la app para iPhone no se actualiza desde la v1.6 (27 sep 2024): considérala posiblemente sin mantenimiento.',
          'Apple Intelligence — integrada en el sistema, no es una app independiente. Modelo de ~3B en dispositivo utilizado por Mail, Mensajes y Notas.',
          'Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — funciona a ~10–15 tokens/seg. Opciones más nuevas: Gemma 4 E2B/E4B, Qwen3.5 4B.',
          'iPhones más antiguos (14 Pro): Qwen3 1.7B o SmolLM 2 1.7B — cabe en 6 GB de RAM y genera ~15–20 tokens/seg.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Qué app instalar primero en el iPhone?', anchor: '#which-app' },
      { label: 'Tabla comparativa de apps para iPhone', anchor: '#comparison-table' },
      { label: 'PocketPal AI: opción gratuita y de código abierto', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: opción de pago con integración iOS', anchor: '#private-llm' },
      { label: 'Locally AI: app MLX gratuita de LM Studio', anchor: '#locally-ai' },
      { label: 'Google AI Edge Gallery: la app gratuita de Google con Gemma 4', anchor: '#google-ai-edge-gallery' },
      { label: 'MLC Chat: optimización para Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm: fuera del App Store, código fuente aún disponible', anchor: '#llm-farm' },
      { label: 'Apple Intelligence: IA en dispositivo integrada en el sistema', anchor: '#apple-intelligence' },
      { label: 'Modelos según el modelo de iPhone', anchor: '#models-by-tier' },
      { label: 'Consumo de batería y throttling térmico', anchor: '#battery-heat' },
      { label: 'iOS Shortcuts, Siri y carga lateral', anchor: '#ios-integration' },
      { label: 'Errores frecuentes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**PocketPal AI es la opción gratuita recomendada por defecto.** Código abierto (MIT), instalación desde el App Store, compatible con cualquier modelo GGUF de Hugging Face. El chat local no requiere cuenta; los Pals premium y "PocketPal Plus" son compras integradas opcionales. Ejecuta Phi-4 Mini a ~10–15 tokens/seg en iPhone 16 Pro. Punto de partida recomendado para la mayoría de usuarios de iPhone.',
          '**Private LLM es la opción de pago ($4.99 de pago único, sin suscripción).** Una sola compra cubre iPhone, iPad y Mac, y Compartir en familia lo extiende hasta seis personas. Biblioteca de modelos curada; según el desarrollador, se integra con Siri y Shortcuts.',
          '**Locally AI es la alternativa gratuita basada en MLX, desarrollada por el equipo de LM Studio.** Ejecuta modelos Llama, Gemma (incluido Gemma 4), Qwen y DeepSeek sobre Apple MLX, funciona con iOS Shortcuts y puede exponer el propio modelo de base en dispositivo de Apple como interfaz de chat.',
          '**Google AI Edge Gallery es la app gratuita de Google con Gemma 4 para iPhone.** Modo de razonamiento, habilidades de agente y entrada de imagen/audio; los modelos se ejecutan en formato LiteRT-LM, no GGUF. Google sigue describiendo la app como en desarrollo activo.',
          '**MLC Chat tiene aceleración Metal, pero está inactiva en iPhone.** Su versión del App Store no se actualiza desde la v1.6 del 27 de septiembre de 2024, por lo que su biblioteca de modelos es anterior a Phi-4 Mini y Gemma 3. El motor MLC LLM en sí sigue activo en GitHub.',
          '**LLM Farm no está disponible actualmente en el App Store ni en TestFlight.** Su propio README la describe como "temporalmente no disponible". Sigue siendo de código abierto y se puede compilar desde el código fuente con Xcode, pero su última versión fue la 1.4.3 en enero de 2025 y su último cambio de código fue el 30 de enero de 2026.',
          '**Apple Intelligence está en el dispositivo, pero no es una app independiente.** El modelo de base de ~3B de Apple potencia funciones del sistema (Herramientas de escritura, Respuesta inteligente, Resúmenes de notificaciones). Desde iOS 26, las apps de terceros pueden llamarlo mediante el framework Foundation Models, y Shortcuts puede invocarlo con la acción "Usar modelo".',
          '**Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Gemma 4 E2B/E4B y Qwen3.5 4B son alternativas más nuevas, aún sin cifras de velocidad de PromptQuorum. iPhones más antiguos con 6 GB de RAM (iPhone 14 Pro): Qwen3 1.7B o SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Apps comparadas:** PocketPal AI, Private LLM, Locally AI (de LM Studio), Google AI Edge Gallery, MLC Chat, Apple Intelligence (sistema) — además de LLM Farm, actualmente fuera del App Store (README: "temporalmente no disponible").',
          '**Últimas actualizaciones upstream (comprobadas el 2026-10-23):** PocketPal AI v1.20.1 (19 oct 2026) · Locally AI v1.66.0 (15 oct 2026) · Google AI Edge Gallery v1.0.13 (8 oct 2026) · Private LLM v1.9.16 (14 sep 2026) · app de MLC Chat para iPhone v1.6 (27 sep 2024 — desactualizada) · LLM Farm versión 1.4.3 (27 ene 2025), último cambio de código 30 ene 2026 — desactualizada.',
          '**Dispositivos de referencia para las cifras de velocidad:** iPhone 16 Pro (A18 Pro, 8 GB RAM) y iPhone 17 Pro (A19 Pro, 12 GB RAM). Las cifras de velocidad son rangos orientativos, no un benchmark controlado de PromptQuorum. El iPhone 18 Pro, el 18 Pro Max y el iPhone Duo (A20 Pro) no tienen cifras de velocidad aquí.',
          '**Motores de inferencia:** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), MLC LLM con Metal (MLC Chat), Google LiteRT-LM (Google AI Edge Gallery), runtime en dispositivo propietario (Private LLM, Apple Intelligence).',
          '**iPhone mínimo para modelos 3B+:** iPhone 14 Pro (A16, 6 GB RAM) para 1.7B; cualquier iPhone de 8 GB+ (15 Pro, serie 16, 16e, serie 17, 18 Pro) para 3B–4B.',
          '**App gratuita recomendada:** PocketPal AI — App Store, código abierto, flexibilidad de modelos.',
          '**Opción de pago:** Private LLM — $4.99 de pago único (iPhone + iPad + Mac), soporte de Shortcuts + Siri.',
          '**Sin conexión:** Las seis funcionan completamente sin conexión una vez descargado el modelo; según el README o la ficha de cada app, el chat en dispositivo no hace llamadas a la nube (Apple Intelligence puede usar Private Cloud Compute de forma opcional).',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '¿Qué app instalar primero en el iPhone?',
        content:
          '**Para la mayoría de usuarios: PocketPal AI desde el App Store y luego descarga Phi-4 Mini (3.8B Q4_K_M) — o un modelo pequeño más nuevo como Gemma 4 E2B/E4B o Qwen3.5 4B.** Esta combinación funciona en iPhone 14 Pro y modelos más recientes, no cuesta nada para chatear y produce resultados útiles para el chat diario, los resúmenes y la redacción rápida. Elige otra app solo cuando tengas una necesidad específica que esta no cubra.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-es.webp',
        imageCaption: 'Qué app de IA local instalar en iPhone: tabla de decisión desde PocketPal AI gratis hasta Private LLM con Siri',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para la mayoría de usuarios de iPhone en 2026, instala PocketPal AI (gratis, App Store) y descarga Phi-4 Mini o un modelo pequeño más nuevo como Gemma 4 E2B — cubre el chat diario, los resúmenes y la redacción en cualquier iPhone con 6 GB+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Seis opciones para iPhone ejecutan IA completamente en tu teléfono en 2026. PocketPal AI es el punto de partida gratuito recomendado — instálala, descarga un archivo de modelo de 2.7 GB una sola vez y tendrás un asistente de chat privado que funciona en el tren sin WiFi. Private LLM es la opción de pago si quieres que Siri hable con el modelo local. Locally AI, del equipo de LM Studio, es la alternativa gratuita moderna con soporte de Shortcuts, y Google AI Edge Gallery es la app gratuita de Google para sus modelos Gemma 4. La versión de MLC Chat para iPhone ya no se actualiza. Apple Intelligence está integrada en iOS, pero no es una app de chat. PocketPal AI encaja en la mayoría de los casos de uso.',
          },
        ],
        decisionBlock: {
          title: 'Decisión: ¿qué app de IA local para iPhone?',
          localIf: [
            'Quieres una IA de chat gratuita que funcione sin conexión → PocketPal AI',
            'Quieres que Siri hable con tu modelo local → Private LLM',
            'Quieres una app MLX gratuita con Shortcuts y acceso a Apple Foundation Models → Locally AI',
            'Quieres el Gemma 4 de Google con modo de razonamiento y habilidades de agente → Google AI Edge Gallery',
            'Quieres experimentar con la cadena de herramientas MLC LLM y aceptas una versión para iPhone sin actualizaciones desde septiembre de 2024 → MLC Chat',
            'Solo necesitas asistencia de escritura en Mail / Mensajes / Notas → Apple Intelligence (integrada)',
          ],
          cloudIf: [
            'Necesitas calidad de modelo 70B+ (Llama 3.3 70B, nivel GPT-5.5) → usa la nube o conéctate de forma remota a una máquina doméstica',
            'Necesitas acceso a GPT-5.5, Claude Opus o Gemini específicamente → apps en la nube (no disponibles en local)',
            'Necesitas visión en tiempo real o salida multimodal más allá del texto → nube (el multimodal en dispositivo es limitado en 2026)',
          ],
          quick: [
            'Gratis + sirve para la mayoría de usuarios: PocketPal AI',
            'De pago + integración nativa iOS: Private LLM',
            'Gratis + ecosistema LM Studio: Locally AI',
            'Gratis + Gemma 4 de Google: Google AI Edge Gallery',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Instala PocketPal AI primero, incluso si planeas pagar por Private LLM más adelante. Usa PocketPal AI para comprobar si la inferencia en dispositivo en tu modelo de iPhone es suficientemente rápida para tu caso de uso. Si es así, decide si la integración con Shortcuts y Siri de Private LLM vale $4.99. Si no, te habrás ahorrado los $4.99 al averiguarlo antes de pagar. PocketPal AI también incluye un benchmark integrado que muestra tokens/seg y memoria en tu propio iPhone — úsalo en lugar de fiarte de cualquier tabla, incluida la de abajo.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa de apps para iPhone',
        content:
          '**Las seis opciones se diferencian en tres ejes que importan a la mayoría de usuarios: coste, flexibilidad de modelos e integración con iOS.** Las diferencias de velocidad existen, pero son menores que la brecha entre cualquiera de estas apps y un LLM en la nube. Los precios y las versiones se leyeron en las fichas del App Store de EE. UU. y en las páginas de los proyectos el 2026-10-23.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-es.webp',
        imageCaption: 'Comparativa de apps de LLM local para iPhone: coste, velocidad e integración de PocketPal AI, Private LLM y más',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI es la opción gratuita recomendada por defecto, Private LLM es la opción de pago, Locally AI es la opción MLX gratuita del equipo de LM Studio, Google AI Edge Gallery es la app gratuita de Google con Gemma 4, MLC Chat está inactiva en iPhone y Apple Intelligence está integrada en el sistema.',
          },
          {
            type: 'plain-terms',
            text: 'La elección generalmente se reduce a tres cosas: ¿quieres pagar por la integración con Siri (Private LLM)?, ¿quieres el ecosistema de LM Studio con Shortcuts gratis (Locally AI)? o ¿quieres el Gemma 4 de Google con modo de razonamiento (Google AI Edge Gallery)? Para todo lo demás, PocketPal AI es la opción por defecto. Las cifras de velocidad de la tabla son rangos orientativos para cuantización Q4_K_M — el estándar para inferencia móvil en 2026 —, no un benchmark controlado.',
          },
        ],
        columns: ['App', 'Precio', 'Tokens/seg (Phi-4 Mini, 16 Pro)', 'Privacidad', 'Ideal para'],
        rows: [
          { 'App': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)', 'Precio': 'Gratis (MIT) + compras integradas opcionales', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacidad': 'Chat en dispositivo, sin cuenta (README)', 'Ideal para': 'Opción gratuita por defecto para la mayoría' },
          { 'App': '[Private LLM](https://privatellm.app)', 'Precio': '$4.99 pago único', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'Sin cifra', 'Privacidad': 'En dispositivo; sin cuentas ni rastreo (según el desarrollador)', 'Ideal para': 'Shortcuts + integración con Siri' },
          { 'App': '[Locally AI](https://lmstudio.ai/locally)', 'Precio': 'Gratis (equipo LM Studio)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D — catálogo MLX (sin Phi-4)', 'Privacidad': 'En dispositivo; sin recopilación de datos (según la ficha)', 'Ideal para': 'MLX + Shortcuts, enlace con LM Studio' },
          { 'App': '[Google AI Edge Gallery](https://apps.apple.com/app/id6749645337)', 'Precio': 'Gratis (Google)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D — LiteRT-LM, Gemma 4', 'Privacidad': 'En dispositivo tras descargar el modelo', 'Ideal para': 'Gemma 4, modo de razonamiento, habilidades de agente' },
          { 'App': '[MLC Chat](https://llm.mlc.ai)', 'Precio': 'Gratis (código abierto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D — biblioteca anterior a Phi-4', 'Privacidad': 'Inferencia local (doc. del proyecto; sin verificar)', 'Ideal para': 'Usuarios de la cadena MLC LLM (app iOS inactiva)' },
          { 'App': '[LLM Farm](https://github.com/guinmoon/LLMFarm)', 'Precio': 'Gratis (compilar desde el código)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'Sin cifra', 'Privacidad': 'Inferencia local (doc. del proyecto; sin verificar)', 'Ideal para': 'Desarrolladores (fuera del App Store, desactualizada)' },
          { 'App': '[Apple Intelligence](https://www.apple.com/apple-intelligence/)', 'Precio': 'Gratis (integrada en iOS)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D (función del sistema)', 'Privacidad': 'Local + Private Cloud Compute opcional', 'Ideal para': 'Asistencia en Mail, Mensajes, Notas' },
        ],
        note:
          '**Nota sobre Apple Neural Engine (ANE), Metal y MLX:** PocketPal AI y LLM Farm usan llama.cpp con Metal Performance Shaders para la inferencia, que se ejecuta en la GPU. MLC Chat usa MLC LLM con una optimización Metal más profunda, que el proyecto MLC LLM describe como más rápida que las apps basadas en llama.cpp en el mismo hardware (afirmación del proyecto; PromptQuorum no lo ha medido). Locally AI usa Apple MLX, el framework de cálculo de código abierto propio de Apple, que alcanza una eficiencia de GPU comparable en Apple Silicon. Google AI Edge Gallery ejecuta Gemma 4 mediante el runtime LiteRT-LM de Google. Apple Intelligence usa el ANE específicamente para el modelo de sistema de ~3B, que es más eficiente energéticamente pero menos flexible que la inferencia basada en Metal. Desde iOS 26, las apps de terceros pueden llamar a ese modelo de sistema mediante el framework Foundation Models —justo lo que hace Locally AI—, pero los modelos GGUF/MLX personalizados todavía no pueden apuntar directamente al ANE. Apple afirma que el A20 Pro del iPhone 18 Pro tiene un Neural Engine de 16 núcleos dual con el doble de capacidad de cálculo que antes; es una afirmación de Apple y PromptQuorum no ha medido qué supone para estas apps.',
        callouts: [
          {
            type: 'tip',
            text: 'Las cifras de tokens/seg son rangos orientativos redondeados, solo para orientarse: no son un benchmark controlado de PromptQuorum ni están vinculadas a una versión de la app o a una fecha de prueba. Asumen cuantización Q4_K_M (el estándar para inferencia móvil en 2026) y un iPhone inactivo sin otras apps pesadas en ejecución. Las apps en segundo plano pueden reducir el rendimiento de forma notable, y el iPhone 17 Pro suele ir más rápido que el iPhone 16 Pro. Mide tu propio teléfono con el benchmark integrado de PocketPal AI.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: opción gratuita y de código abierto',
        content:
          '**PocketPal AI es el punto de partida recomendado para la mayoría de usuarios de iPhone en 2026.** Se puede usar gratis, es de código abierto (MIT; GitHub: [a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)), está disponible en el App Store y es compatible con cualquier modelo GGUF de Hugging Face. La app usa llama.cpp internamente con optimizaciones para Apple Silicon. Reseña completa: [Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
        items: [
          '**Qué es:** una app iOS/iPadOS y Android que ejecuta modelos GGUF en local usando llama.cpp, publicada por Gooya UG. El README indica que los prompts, las respuestas y los documentos no se suben a servidores externos; el chat no requiere cuenta.',
          '**Versión y última actualización:** v1.20.1, publicada el 19 de octubre de 2026 ([versión en GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases)); la ficha del App Store muestra la misma versión. Ritmo de actualización: aproximadamente cada una o dos semanas — sin aviso de falta de actualizaciones.',
          '**Instalación:** App Store → "PocketPal AI". Descarga gratuita con compras integradas opcionales (Pals premium y "PocketPal Plus"). Requiere iOS/iPadOS 15.1 o posterior; la RAM, no la versión de iOS, marca el tamaño de modelo utilizable. Desde la v1.20.0 la app también ofrece Iniciar sesión con Apple de forma opcional y eliminación de cuenta.',
          '**Agregar un modelo:** en la app, toca Modelos → "Agregar desde Hugging Face" → busca (p. ej. "phi-4-mini-instruct-Q4_K_M") → toca para descargar. El modelo se almacena en el almacenamiento local de la app (~2.7 GB para Phi-4 Mini Q4).',
          '**Velocidad de generación (iPhone 16 Pro, orientativa):** Phi-4 Mini ~10–15 tok/seg, Llama 3.2 3B ~12–18 tok/seg, Gemma 3 4B ~7–10 tok/seg, Qwen3 1.7B ~18–24 tok/seg. No son mediciones controladas de PromptQuorum — usa el benchmark integrado, que muestra tokens/seg y memoria en tu propio iPhone.',
          '**Otras funciones:** Pals (asistentes personalizados), texto a voz en el dispositivo, Talents (herramientas de calculadora y de fecha/hora para modelos capaces) y un explorador de modelos de Hugging Face que admite modelos con acceso restringido mediante un token.',
          '**Ideal para:** usuarios que quieren una app de chat gratuita, instalable desde el App Store, sin cuenta, compatible con cualquier modelo GGUF publicado por la comunidad.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El selector de modelos de PocketPal AI tiene un filtro "Recomendados" que, según la documentación de la app, muestra los modelos que caben en la RAM de tu dispositivo. Compruébalo con tu propio teléfono — un modelo demasiado grande puede hacer que iOS cierre la app a mitad de la respuesta.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: opción de pago con integración iOS',
        content:
          '**Private LLM es la opción de pago para iPhone en esta guía ($4.99 de pago único, sin suscripción).** Solo está disponible en el App Store y viene con una biblioteca curada de modelos optimizados. Su diferenciador es la integración con iOS: el desarrollador afirma que se integra directamente con Siri y con la app Shortcuts. Reseña completa: [Reseña de Private LLM](/es/power-local-llm/private-llm-review).',
        items: [
          '**Qué es:** una app iOS de pago con biblioteca de modelos curada e integración profunda con iOS. Usa un runtime en dispositivo propietario optimizado para Apple Silicon.',
          '**Instalación:** App Store → "Private LLM - Local AI Chat" (Numen Technologies Limited). Compra única de $4.99 (sin suscripción; la ficha no muestra compras integradas). Requiere iOS/iPadOS 17.0 o posterior con un chip A12 Bionic o más reciente.',
          '**Versión y última actualización:** v1.9.16, publicada el 14 de septiembre de 2026 (historial de versiones del App Store); la versión anterior, la 1.9.15, salió el 9 de julio de 2026. Las versiones llegan cada dos o tres meses — por debajo del límite de tres meses, así que sin aviso de falta de actualizaciones.',
          '**Biblioteca de modelos curada:** [privatellm.app](https://privatellm.app) anuncia más de 140 modelos locales entre iPhone, iPad y Mac, con familias como Llama, Qwen3, Gemma 3 y Phi 4; el subconjunto que cabe en un iPhone es menor. Menos flexibilidad que PocketPal AI, pero los modelos están preoptimizados para el runtime de la app.',
          '**Shortcuts:** según el desarrollador, Private LLM se integra con la app Shortcuts y puede pasar respuestas a otras apps compatibles con la especificación x-callback-url. Útil para activar la IA local desde un botón en tu pantalla de inicio o mediante etiquetas NFC.',
          '**Integración con Siri:** el desarrollador indica que hay integración con Siri; un prompt enviado al modelo en dispositivo funciona sin conexión a internet (solo se necesita internet para la primera descarga del modelo).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Según privatellm.app, una sola compra de $4.99 cubre iPhone, iPad y Mac, y la ficha del App Store indica que hasta seis miembros de la familia pueden usarla con Compartir en familia. No se indican suscripción ni compras integradas — el precio mostrado es el coste total. El desarrollador afirma que no hay cuentas, rastreo ni registros.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: app MLX gratuita de LM Studio',
        content:
          '**Locally AI es una app de chat gratuita centrada en la privacidad, desarrollada por el equipo de LM Studio (figura bajo Element Labs Inc) y construida sobre el framework Apple MLX en lugar de llama.cpp.** Es la única app de esta guía que expone el modelo de base en dispositivo de Apple como interfaz de chat. Reseña completa: [Reseña de Locally AI](/es/power-local-llm/locally-ai-review).',
        items: [
          '**Qué es:** una app iOS/iPadOS/macOS que usa Apple MLX para la inferencia, desarrollada por el equipo detrás de la app de escritorio LM Studio.',
          '**Instalación:** App Store → "Locally AI". Gratis, sin compras integradas en la ficha, sin cuenta requerida (según la ficha), funciona sin conexión.',
          '**Versión y última actualización:** v1.66.0, publicada el 15 de octubre de 2026 (historial de versiones del App Store); aproximadamente una versión al mes en 2026 — sin aviso de falta de actualizaciones.',
          '**Biblioteca de modelos:** Llama 3.2, Gemma 2/3/4, Qwen 3 y 3.5, DeepSeek, LFM 2.5, Bonsai, Ministral 3 y Apple Foundation Models — un catálogo más amplio y actual que el de MLC Chat.',
          '**iOS Shortcuts:** expone una acción de Shortcuts, a la altura del soporte de automatización de Private LLM y sin coste.',
          '**LM Link:** una función opcional que se conecta a LM Studio ejecutándose en un Mac mediante lo que LM Studio describe como un enlace cifrado de extremo a extremo, permitiendo que la app de iPhone recurra a un modelo más grande en una máquina doméstica cuando sea necesario.',
          '**Requisitos:** iOS/iPadOS 18.1 o posterior (macOS 26.0 o posterior para la versión de Mac). Las ventajas de eficiencia de la clase Apple Silicon se notan más a partir de iPhone 15 Pro.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI es la única app de esta guía capaz de poner el propio modelo de base en dispositivo de Apple detrás de una ventana de chat normal — útil para probar qué puede hacer el modelo de Apple Intelligence sin navegar por los menús de Herramientas de escritura. Para flexibilidad GGUF de terceros, PocketPal AI sigue teniendo el catálogo de modelos más amplio.',
          },
        ],
      },
      googleAIEdgeGallery: {
        id: 'google-ai-edge-gallery',
        title: 'Google AI Edge Gallery: la app gratuita de Google con Gemma 4',
        content:
          '**Google AI Edge Gallery es la app gratuita de Google para ejecutar sus modelos Gemma 4 en el teléfono, y está disponible en el App Store de iPhone.** La ficha muestra AI Chat con modo de razonamiento, habilidades de agente, entrada de imagen y audio, Prompt Lab y benchmarking de modelos. Google indica que la app está en desarrollo activo. Reseña completa: [Reseña de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review).',
        items: [
          '**Qué es:** la app de Google para mostrar la IA en dispositivo, construida sobre el runtime LiteRT-LM de Google. Gratis; la ficha no muestra compras integradas.',
          '**Instalación:** App Store → "Google AI Edge Gallery". Requiere iOS 17.0 o posterior. Los modelos se descargan por separado dentro de la app.',
          '**Versión y última actualización:** v1.0.13, publicada el 8 de octubre de 2026 (historial de versiones del App Store). El soporte de Gemma 4 llegó en la v1.0.2 el 3 de abril de 2026 — sin aviso de falta de actualizaciones.',
          '**Modelos:** la familia Gemma 4 (E2B y E4B son las variantes pensadas para teléfonos; Google indica que los archivos LiteRT-LM pesan unos 2.58 GB y 3.65 GB), EmbeddingGemma 2 y FunctionGemma 270M. También se pueden importar desde Hugging Face modelos en formato LiteRT-LM.',
          '**Funciones:** Modo de razonamiento (solo modelos Gemma 4), Habilidades de agente (por ejemplo, consulta de Wikipedia y mapas, además de habilidades de la comunidad), Ask Image, Audio Scribe, Prompt Lab y benchmarking de modelos.',
          '**Límites:** solo modelos LiteRT-LM, no GGUF ni MLX; la ficha no menciona Shortcuts ni Siri; PromptQuorum no tiene cifras de velocidad para esta app.',
          '**Ideal para:** usuarios que quieren el Gemma 4 de Google con un modo de razonamiento visible y herramientas de agente, sin coste.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Google informa de un pico de memoria de unos 607 MB en CPU y 1,450 MB en GPU para Gemma 4 E2B en un iPhone 17 Pro (cifras del fabricante, según la página de Google sobre LiteRT-LM y Gemma 4; PromptQuorum no las ha vuelto a medir). E2B es el punto de partida práctico para la mayoría de teléfonos; E4B encaja en iPhones de 8 GB+.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: optimización para Apple Silicon',
        content:
          '**Aviso de falta de actualizaciones: la app MLC Chat para iPhone no se ha actualizado desde la versión 1.6 del 27 de septiembre de 2024 (hace más de 13 meses), por lo que puede estar sin mantenimiento — compruébalo antes de depender de ella.** El repositorio del motor MLC LLM sigue activo en GitHub (última actividad el 6 de octubre de 2026). MLC Chat es gratuita, de código abierto y ejecuta modelos compilados por la cadena de herramientas MLC LLM en lugar de GGUF estándar, y su catálogo no ha seguido el ritmo de PocketPal AI o Locally AI. Reseña completa: [Reseña de MLC Chat](/es/power-local-llm/mlc-chat-review).',
        items: [
          '**Qué es:** la app iOS de referencia del proyecto MLC LLM, que demuestra la inferencia acelerada por Metal de MLC LLM en Apple Silicon.',
          '**Instalación:** App Store → "MLC Chat". Gratis. Requiere iOS/iPadOS 17.0 o posterior.',
          '**Versión y última actualización:** v1.6, publicada el 27 de septiembre de 2024 (historial de versiones del App Store; añadió Llama 3.2 3B). Antes: la 1.5 añadió Gemma 2 2B (agosto de 2024) y la 1.4 añadió Phi-3, Mistral v3 y Qwen2 (junio de 2024). Última actualización para iPhone hace más de 13 meses — aviso de falta de actualizaciones activado.',
          '**Velocidad (afirmación del proyecto, no medida aquí):** el proyecto MLC LLM describe su motor acelerado por Metal como más rápido que las apps basadas en llama.cpp en el mismo iPhone — pero la propia lista de modelos de la app es anterior a opciones actuales como Phi-4 Mini y Gemma 3, por lo que esta ventaja no se puede comprobar con los modelos recomendados de 2026 sin una compilación propia.',
          '**Biblioteca de modelos:** limitada a los modelos que el proyecto MLC LLM compiló antes de que la app quedara inactiva — Llama 3.2 3B, Gemma 2 2B, Phi-3, Mistral v3, Qwen2 y lanzamientos similares de 2024. No todos los GGUF de Hugging Face funcionan, y ningún modelo pequeño de la generación actual figura en la versión del App Store.',
          '**Ideal para:** desarrolladores ya invertidos en la cadena de herramientas MLC LLM y dispuestos a compilar su propio modelo, o quienes necesitan específicamente uno de los modelos ya incluidos de antes de 2025.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Como la versión del App Store de MLC Chat no se ha actualizado desde el 27 de septiembre de 2024, no esperes encontrar Phi-4 Mini, Qwen3 o Gemma 3 en su selector. Si quieres modelos de la generación actual con eficiencia de GPU de clase Metal hoy, Locally AI (Apple MLX), PocketPal AI (llama.cpp con Metal Performance Shaders) o Google AI Edge Gallery (Gemma 4) son las alternativas mantenidas activamente.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: fuera del App Store, código fuente aún disponible',
        content:
          '**Aviso de falta de actualizaciones: la última versión de LLM Farm (1.4.3) salió el 27 de enero de 2025 y su último cambio de código fue el 30 de enero de 2026 — casi nueve meses sin actualización —, por lo que puede estar sin mantenimiento.** La reseña de PromptQuorum sobre el proyecto sitúa su retirada del App Store en agosto de 2025; su propio README de GitHub describe la app como "temporalmente no disponible" tanto en el App Store como en TestFlight. El proyecto (GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)) sigue siendo de código abierto y ha tenido actividad de issues hasta octubre de 2026, pero los nuevos usuarios ya no pueden instalarla desde el App Store; hay que compilarla desde el código fuente con Xcode (README: macOS 13+ e iOS 16+). Reseña completa: [Reseña de LLM Farm](/es/power-local-llm/llm-farm-review).',
        items: [
          '**Qué es:** una app iOS del desarrollador @guinmoon que ejecuta modelos GGUF con amplias opciones de configuración, anteriormente distribuida en el App Store.',
          '**Disponibilidad actual:** no instalable desde el App Store ni TestFlight en el momento de esta actualización. El código fuente sigue siendo público y compilable.',
          '**Compilar desde el código fuente:** clona el repositorio, ábrelo en Xcode y compílalo en un dispositivo con una cuenta de Apple Developer gratuita o de pago — el flujo estándar de carga lateral para cualquier app iOS de código abierto sin ficha en el App Store.',
          '**Configuración expuesta (tras compilar):** temperatura, top-p, top-k, muestreo mirostat, penalización por repetición, prompt de sistema por modelo, selección de plantilla de chat, longitud de la ventana de contexto.',
          '**Ideal para:** desarrolladores cómodos compilando una app desde el código fuente en Xcode que quieren específicamente los controles de muestreo mirostat. El resto debería usar PocketPal AI o Locally AI, ambas instalables por completo desde el App Store y gratuitas.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No esperes que funcione un enlace del App Store para LLM Farm — trata cualquier enlace de ese tipo que encuentres en otro sitio como obsoleto. Compilar desde el código fuente requiere Xcode y conocimientos básicos de firma de código en iOS. Si eso supone más esfuerzo del que quieres invertir, PocketPal AI cubre el mismo caso de uso de "app de chat gratuita y flexible" sin salir del App Store.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: IA en dispositivo integrada en el sistema',
        content:
          '**Apple Intelligence ejecuta el modelo de base de ~3B propio de Apple en el dispositivo en iPhone 15 Pro y modelos más recientes (la generación del iPhone 15 Pro, con 8 GB de RAM según se informa; Apple no indica la RAM).** Por defecto no es una app de chat — potencia funciones del sistema en Mail (Respuesta inteligente), Mensajes (herramientas de escritura), Notas (resúmenes) y Resúmenes de notificaciones. Desde iOS 26, el framework Foundation Models de Apple permite a desarrolladores externos acceder directamente a ese mismo modelo en dispositivo, y apps como Locally AI ya lo aprovechan para ofrecer una interfaz de chat real. iOS 27 amplía el framework: la guía para desarrolladores de Apple indica que las apps pueden usar cualquier modelo de lenguaje que cumpla su protocolo de modelos de lenguaje, incluidos los modelos propios de Apple y modelos en la nube.',
        items: [
          '**Dónde está:** integrada en iOS 18+ (framework Foundation Models desde iOS 26). Actívala en Ajustes → Apple Intelligence y Siri.',
          '**Requisito de hardware:** iPhone 15 Pro / 15 Pro Max, serie iPhone 16, iPhone 16e, serie iPhone 17 y, en 2026, iPhone 18 Pro, 18 Pro Max e iPhone Duo (A20 Pro). Los iPhones más antiguos (14 e inferiores) no son compatibles con Apple Intelligence. Consulta la lista de compatibilidad actual de Apple para iOS 27 antes de comprar.',
          '**Siri AI (iOS 27):** Apple describe Siri AI como disponible en beta en iOS 27, con despliegue primero en inglés, sin disponibilidad inicial en la UE en iOS y con límites diarios de uso en algunas funciones del lado del servidor. Es independiente de las apps de chat en dispositivo de esta guía.',
          '**Funciones en dispositivo:** Herramientas de escritura (reescribir, resumir, revisar) dentro de cualquier campo de texto, Respuesta inteligente en Mail y Mensajes, Resúmenes de notificaciones, generación de Genmoji.',
          '**Framework Foundation Models (iOS 26+):** una API Swift nativa que da a los desarrolladores acceso directo al mismo modelo en dispositivo con unas pocas líneas de código — así es como Locally AI lo expone como opción de chat, y cómo la acción de Shortcuts "Usar modelo" puede enviar un prompt a ese modelo, a Private Cloud Compute o a ChatGPT.',
          '**Private Cloud Compute:** para tareas que superan la capacidad del modelo en dispositivo, Apple Intelligence recurre a Private Cloud Compute (PCC) — servidores operados por Apple que ejecutan modelos más grandes y que, según Apple, no retienen datos del usuario. PCC es opcional y puede desactivarse.',
          '**Relación con las apps de chat:** Apple Intelligence es un complemento, no un reemplazo. Sus funciones de sistema gestionan la reescritura y los resúmenes de texto dentro de las apps de iOS; PocketPal AI, Private LLM, Locally AI y MLC Chat proporcionan una interfaz de chat dedicada para preguntas arbitrarias — y Locally AI ahora puede ofrecer ese mismo tipo de interfaz para el propio modelo de Apple.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si Apple Intelligence es tu única necesidad (reescribir correos, resumir notificaciones), no necesitas una app de chat independiente. Si quieres hacerle preguntas al modelo como "explica el efecto túnel cuántico en términos simples" o "crea un plan de proyecto para X", instala una app de chat — una dedicada como PocketPal AI, o Locally AI, capaz de poner el propio modelo en dispositivo de Apple detrás de una ventana de chat.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modelos según el modelo de iPhone',
        content:
          '**La RAM del iPhone determina el límite de tamaño del modelo, no la generación del chip.** Un iPhone de 6 GB (14 Pro, 15) puede ejecutar modelos 1.7B cómodamente; un iPhone de 8 GB+ (15 Pro, serie 16, 16e, serie 17) ejecuta modelos 3B–4B cómodamente y modelos 7B lentamente. Modelos pequeños más nuevos que merece la pena probar junto a Phi-4 Mini: Gemma 4 E2B y E4B (Google, abril de 2026; unos 2.58 GB y 3.65 GB como archivos LiteRT-LM) y la serie pequeña Qwen3.5 (Alibaba, marzo de 2026; 0.8B, 2B, 4B y 9B, Apache 2.0 según el resumen de Artificial Analysis). PromptQuorum no tiene cifras de velocidad para ellos; Locally AI y Google AI Edge Gallery los incluyen directamente. Para el panorama más amplio de modelos en todo el hardware (no solo móvil), consulta [Los mejores LLM locales en 2026](/es/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-es.svg',
        imageCaption: 'Modelos de LLM local recomendados por nivel de RAM del iPhone, desde 4 GB hasta el iPhone 17 Pro con 12 GB',
        columns: ['Nivel de iPhone (Año, RAM)', 'Modelo recomendado', 'Tamaño de descarga', 'Velocidad (orientativa)'],
        rows: [
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 18 Pro / Pro Max (2026, ~12 GB según prensa)', 'Modelo recomendado': 'Empieza como con el 17 Pro; Apple no publica la RAM', 'Tamaño de descarga': '~2.5–3.7 GB', 'Velocidad (orientativa)': 'Sin cifra' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 17 Pro / 17 Pro Max (2025, 12 GB)', 'Modelo recomendado': 'Phi-4 Mini / Llama 3.2 3B / Gemma 4 E4B', 'Tamaño de descarga': '~2.5–3.7 GB', 'Velocidad (orientativa)': '~13–20 tok/seg (Phi-4 Mini)' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone serie 16 / 16e / 17 (2024–2025, 8 GB)', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M) o Gemma 4 E2B', 'Tamaño de descarga': '~2.6–2.7 GB', 'Velocidad (orientativa)': '~10–15 tok/seg (Phi-4 Mini)' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 GB)', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M)', 'Tamaño de descarga': '~2.7 GB', 'Velocidad (orientativa)': '~8–12 tok/seg' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 13 Pro / 14 Pro / Pro Max (6 GB)', 'Modelo recomendado': 'Qwen3 1.7B o SmolLM 2 1.7B (Q4_K_M)', 'Tamaño de descarga': '~1.1 GB', 'Velocidad (orientativa)': '~15–20 tok/seg' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 14 / 14 Plus / 15 / 15 Plus (6 GB)', 'Modelo recomendado': 'Qwen3 1.7B o SmolLM 2 1.7B (Q4_K_M)', 'Tamaño de descarga': '~1.1 GB', 'Velocidad (orientativa)': '~12–18 tok/seg' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 13 / 12 / SE / anteriores (4 GB)', 'Modelo recomendado': 'No recomendado para LLM en dispositivo', 'Tamaño de descarga': '—', 'Velocidad (orientativa)': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para iPhones más antiguos de 6 GB, Qwen3 1.7B o SmolLM 2 1.7B (HuggingFace) son opciones sensatas en 2026; Qwen3.5 2B y Gemma 4 E2B son opciones más nuevas de la misma clase de tamaño. Modelos tan pequeños producen respuestas cortas coherentes (1–3 párrafos), pero tienen dificultades con el razonamiento de múltiples pasos. No instales Phi-4 Mini en un iPhone de 6 GB — nominalmente cabe, pero iOS cerrará la app bajo cualquier presión de memoria. Las cifras de velocidad de la tabla son rangos orientativos redondeados para Phi-4 Mini, Llama 3.2 3B y Qwen3 1.7B, no vinculados a una versión de la app ni a una fecha de prueba; Gemma 4 y Qwen3.5 no tienen cifras aquí. Las páginas de producto de Apple no indican la RAM del iPhone: las cifras de RAM de aquí son especificaciones ampliamente difundidas, y los ~12 GB del 18 Pro proceden de informaciones de prensa.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'Consumo de batería y throttling térmico',
        content:
          '**La inferencia LLM en dispositivo en iPhone es intensiva en CPU/GPU y genera calor.** Como guía aproximada (orientativa, no una medición controlada de PromptQuorum), la inferencia activa consume ~3–5 W; la generación sostenida limitará el chip y puede drenar la batería aproximadamente un 20–30 % por hora en iPhone 16 Pro.',
        image: '/images/iphone-llm-apps-battery-thermal-es.svg',
        imageCaption: 'Guía de batería y calor para LLM locales en iPhone: consumo, limitación térmica y consejos de refrigeración',
        items: [
          '**Consumo de batería (chat activo, orientativo):** ~20–30 % por hora en iPhone 16 Pro ejecutando Phi-4 Mini.',
          '**La generación sostenida puede provocar throttling térmico.** Cuando el chip se calienta, iOS reduce las velocidades de reloj y bajan los tokens/seg. Cuándo empieza y cuánta velocidad se pierde depende del teléfono, la carcasa, la carga y la temperatura ambiente; PromptQuorum no lo ha medido. Dejar que el teléfono se enfríe restaura la velocidad.',
          '**Mitigación:** mantén el iPhone boca arriba sobre una superficie dura (no en la mano ni en el bolsillo) durante sesiones de inferencia largas para permitir la disipación de calor. Una carcasa con disipador pasivo ayuda, pero raramente es necesaria para interacciones cortas.',
          '**Consumo fantasma:** si dejas una app de chat abierta en segundo plano después de la generación, la RAM permanece asignada pero no se ejecuta inferencia — el impacto en la batería es mínimo. Cerrar la app completamente libera los ~3 GB de RAM.',
          '**Carga MagSafe durante la inferencia:** cargar mientras se genera puede aumentar el calor en cualquier iPhone, y más en el iPhone 15 Pro; si el teléfono se calienta, pausa la carga o la generación, o carga después.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No ejecutes inferencia LLM en dispositivo en un iPhone bajo luz solar directa o en un coche caliente. Bajo luz solar directa o en un coche caliente, el chip puede alcanzar sus límites térmicos antes, lo que puede activar throttling y la advertencia "El iPhone necesita enfriarse" de Apple. Normalmente la generación se ralentiza en lugar de cerrarse la app.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts, Siri y carga lateral',
        content:
          '**La integración con iOS varía significativamente según la app.** Private LLM y Locally AI ofrecen Shortcuts; PocketPal AI, Google AI Edge Gallery y MLC Chat son apps de chat independientes sin integración con Shortcuts ni Siri mencionada en su README o en su ficha del App Store.',
        image: '/images/iphone-llm-apps-ios-integration-es.svg',
        imageCaption: 'Integración con iOS de las apps de LLM local para iPhone: compatibilidad con Shortcuts, Siri, código abierto y App Store',
        items: [
          '**Private LLM** se integra con Shortcuts y Siri, según el desarrollador, y puede pasar respuestas a apps compatibles con x-callback-url. La más integrada de forma nativa con iOS de las apps de chat de esta guía.',
          '**Locally AI** expone una acción de Shortcuts de forma gratuita y puede enviar un shortcut al propio modelo en dispositivo de Apple mediante su integración con el framework Foundation Models — sin disparador de voz de Siri, pero con automatización de Shortcuts sin pagar.',
          '**PocketPal AI** es una app de chat independiente — su README no menciona ninguna acción de Shortcuts ni integración con Siri. Abres la app y chateas.',
          '**Google AI Edge Gallery** es una app independiente de chat y demostración — su ficha del App Store no menciona ninguna acción de Shortcuts ni integración con Siri.',
          '**MLC Chat** es una app de referencia para el proyecto MLC LLM — integración iOS mínima y sin actualizaciones para iPhone desde septiembre de 2024. Sin acción de Shortcuts.',
          '**LLM Farm** no está disponible actualmente en el App Store y, una vez compilada desde el código fuente, tampoco tiene acción de Shortcuts.',
          '**Apple Intelligence** se integra con iOS Shortcuts mediante la acción "Usar modelo" (iOS 18.4+, ampliada con el framework Foundation Models en iOS 26). Esto envía un prompt al modelo en dispositivo, a Private Cloud Compute o a ChatGPT (configurable). La salida en dispositivo puede encadenarse en otras acciones de Shortcuts.',
          '**Carga lateral:** PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery y MLC Chat están en el App Store y no requieren carga lateral ni jailbreak; Apple Intelligence está integrada en iOS. LLM Farm es la excepción — su instalación ahora requiere compilar desde el código fuente en Xcode. En la UE existen marketplaces de apps alternativos bajo el DMA, pero qué apps ofrecen depende de cada desarrollador, así que instala desde el canal oficial del desarrollador; ninguna de estas apps necesita uno.',
        ],
        promptExamples: [
          {
            label: 'Shortcut de Private LLM: resumir texto seleccionado',
            text: '1. Acción: "Obtener texto seleccionado" (entrada del Share Sheet de iOS).\n2. Acción: generación de texto de Private LLM (de las acciones de Shortcuts de la app Private LLM) → Prompt: "Resume el siguiente texto en tres puntos clave: [Texto seleccionado]" → elige un modelo instalado en la app.\n3. Acción: "Mostrar resultado" o "Copiar al portapapeles".\nAgrégalo al Share Sheet para ejecutarlo sobre cualquier texto seleccionado en cualquier app, completamente sin conexión. Los nombres de las acciones siguen la descripción del desarrollador y pueden variar según la versión de la app.',
          },
          {
            label: 'Shortcut de Apple Intelligence: reescribir el tono',
            text: '1. Acción: "Obtener portapapeles".\n2. Acción: "Usar modelo" → Modelo: En dispositivo → Prompt: "Reescribe esto en un tono profesional y conciso: [Portapapeles]".\n3. Acción: "Copiar al portapapeles".\nAsígnalo a un widget de la pantalla de bloqueo para reescribir con un toque cualquier cosa que copies.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para uso manos libres al conducir o cocinar, la integración con Siri de Private LLM es la única app de chat de esta guía cuyo desarrollador indica integración con Siri, lo que permite usarla sin tocar el teléfono. Apple Intelligence admite voz mediante Siri, pero solo para tareas del sistema (escritura, resúmenes, acciones de app) — no expone preguntas y respuestas generales como las apps de chat.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores frecuentes',
        items: [
          '**Instalar un modelo más grande de lo que permite la RAM de tu iPhone.** Un modelo 7B en un iPhone de 8 GB suele ser demasiado lento para chatear y iOS puede cerrarlo cuando recupera memoria para otra app; mídelo antes con el benchmark integrado de PocketPal AI. Quédate con el modelo recomendado para tu nivel de iPhone (3B–4B para dispositivos de 8 GB, 1.7B para dispositivos de 6 GB).',
          '**Esperar calidad de IA en la nube de los modelos en dispositivo.** Phi-4 Mini (3.8B) es impresionante para su tamaño, pero no es GPT-5.5. Úsalo para chat, resúmenes, redacción y preguntas rápidas — no para razonamiento de múltiples pasos, generación de código complejo o escritura creativa con matices.',
          '**Ejecutar inferencia bajo luz solar directa o en un coche caliente.** El throttling térmico puede aparecer enseguida, la generación se ralentiza y puede aparecer la advertencia "El iPhone necesita enfriarse". Ejecuta la inferencia a temperatura ambiente.',
          '**Dejar instaladas 3 o más apps de chat con modelos de 3 GB en cada una.** Consumirás ~10 GB de almacenamiento en modelos duplicados. Elige una app y un modelo; desinstala las demás hasta que estés seguro de que las necesitas.',
          '**Suponer que Apple Intelligence no tiene interfaz de chat en absoluto.** Eso era cierto hasta iOS 18, pero desde iOS 26 apps como Locally AI pueden poner el modelo en dispositivo de Apple detrás de una ventana de chat real mediante el framework Foundation Models. Las funciones de sistema (Herramientas de escritura, Respuesta inteligente) por sí solas siguen sin ser una interfaz de chat.',
          '**Buscar LLM Farm en el App Store.** Actualmente no está en el App Store (la reseña de LLM Farm de PromptQuorum sitúa la retirada en agosto de 2025). Buscarla allí es perder el tiempo; usa PocketPal AI para el mismo caso de uso gratuito y flexible, o compila LLM Farm desde el código fuente en Xcode si necesitas específicamente sus controles mirostat.',
          '**Suponer que "gratis" significa sin compras.** PocketPal AI es gratuita para el chat local, pero vende contenido premium opcional (Pals y "PocketPal Plus"), mientras que Locally AI y Google AI Edge Gallery no indican compras integradas. Revisa la sección de compras integradas de la ficha antes de instalar (la ficha de PocketPal AI en el App Store de EE. UU. mostraba una clasificación de edad 18+ el 2026-10-23).',
          '**Juzgar un modelo solo por una tabla de velocidades.** Los rangos de tokens/seg de esta guía son orientativos, y modelos más nuevos como Gemma 4 y Qwen3.5 no figuran en ellos. Ejecuta el mismo prompt en dos modelos con el benchmark de PocketPal AI antes de borrar el que ya habías descargado.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (README, licencia MIT, versión v1.20.1 del 19 oct 2026) y la [ficha del App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (historial de versiones, compras integradas, clasificación de edad, iOS 15.1+). Consultado el 2026-10-23.',
          'Private LLM — [ficha del App Store](https://apps.apple.com/app/apple-store/id6448106860) (v1.9.16, $4.99, iOS 17.0+, Compartir en familia) y [privatellm.app](https://privatellm.app) (Siri y Shortcuts, lista de modelos, una sola compra para iPhone, iPad y Mac). Consultado el 2026-10-23.',
          'Locally AI — [ficha del App Store](https://apps.apple.com/us/app/locally-ai/id6741426692) (v1.66.0, gratis, Element Labs Inc, iOS 18.1+; equipo de LM Studio) y [lmstudio.ai/locally](https://lmstudio.ai/locally) (LM Link). Consultado el 2026-10-23.',
          'Google AI Edge Gallery — [ficha del App Store](https://apps.apple.com/app/id6749645337) (v1.0.13, gratis, iOS 17.0+, Gemma 4, habilidades de agente, modo de razonamiento), [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) y la [página de Google sobre LiteRT-LM y Gemma 4](https://developers.google.com/edge/litert-lm/models/gemma-4) (tamaños de archivo y memoria de E2B/E4B, cifras del fabricante). Consultado el 2026-10-23.',
          'MLC Chat / proyecto MLC LLM — [ficha del App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) (v1.6, 27 sep 2024, historial de versiones), [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) y [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) (repositorio del motor). Consultado el 2026-10-23.',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (README: "temporalmente no disponible" en TestFlight y App Store; versión 1.4.3 del 27 ene 2025; último push el 30 ene 2026) y la [reseña de LLM Farm de PromptQuorum](/es/power-local-llm/llm-farm-review) sobre la retirada de agosto de 2025. Consultado el 2026-10-23.',
          'Apple Intelligence y modelos de base en dispositivo — [Apple Machine Learning Research](https://machinelearning.apple.com), la [guía para desarrolladores Novedades de iOS 27](https://developer.apple.com/wwdc26/guides/ios/) (framework Foundation Models) y la [página del iPhone 18 Pro](https://www.apple.com/iphone-18-pro/) (A20 Pro, Neural Engine de 16 núcleos dual, beta de Siri AI, sin cifra de RAM) y la [página del iPhone Duo](https://www.apple.com/iphone-duo/). Consultado el 2026-10-23.',
          'Serie pequeña Qwen3.5 (0.8B–9B, marzo de 2026) — [resumen de Artificial Analysis](https://artificialanalysis.ai/articles/qwen3-5-small-models).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿El iPhone puede ejecutar de verdad un modelo 7B?',
            a: 'Técnicamente sí en iPhone 15 Pro y modelos más recientes (8 GB de RAM), pero no a una velocidad utilizable. Un modelo 7B Q4 en iPhone 16 Pro suele ser demasiado lento para chatear con comodidad (orientativo). iOS también tiende a cerrar la app cuando otras apps necesitan memoria. Usa modelos 3B–4B (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) para el chat en dispositivo del día a día. Para calidad 7B+, conéctate de forma remota a un Mac o PC doméstico que ejecute Ollama.',
          },
          {
            q: '¿La IA local agota la batería de mi iPhone?',
            a: 'Sí — la inferencia activa suele consumir ~3–5 W y, como guía aproximada y orientativa, puede drenar la batería un 20–30 % por hora en iPhone 16 Pro. Para el uso ocasional (unos pocos prompts), el impacto es pequeño. Para el uso sostenido (conversación larga, múltiples tareas de resumen), mantén el iPhone enchufado. El modelo en sí, almacenado en RAM sin inferencia activa, tiene un impacto mínimo en la batería.',
          },
          {
            q: '¿Se calentará mi iPhone usando IA local?',
            a: 'Sí, puede, sobre todo durante la generación continua prolongada. iOS reduce las velocidades de reloj cuando el chip se calienta, lo que baja los tokens/seg; cuándo y cuánto varía según el teléfono, la carcasa, la carga y la temperatura ambiente, y PromptQuorum no lo ha medido. Para minimizarlo: mantén el iPhone boca arriba sobre una superficie dura (no en la mano) durante sesiones largas, y evita la luz solar directa. Las interacciones cortas suelen causar poco calor perceptible.',
          },
          {
            q: '¿Puedo usar Siri con un modelo local?',
            a: 'Sí, con Private LLM ($4.99 de pago único). El desarrollador afirma que se integra directamente con Siri y Shortcuts, de modo que un prompt puede enviarse al modelo en dispositivo sin conexión a internet. PocketPal AI, Locally AI, Google AI Edge Gallery y MLC Chat no mencionan integración de voz con Siri, aunque Locally AI sí admite automatización con Shortcuts. Apple Intelligence se integra con Siri, pero solo para tareas del sistema (escritura, resúmenes, acciones de app), no para preguntas y respuestas generales; Siri AI es una función beta independiente de iOS 27, primero en inglés y sin disponibilidad inicial en la UE.',
          },
          {
            q: '¿Estas apps funcionan en iPhone SE o iPhones más antiguos?',
            a: 'Con limitaciones. Si tienes un iPhone SE, 13 o 12 (4 GB de RAM), estás por debajo del umbral práctico para LLM en dispositivo en 2026. iPhone 14 / 15 (no Pro, 6 GB de RAM) puede ejecutar modelos 1.7B (Qwen3 1.7B, SmolLM 2 1.7B), pero no 3B+. iPhone 13 Pro y 14 Pro (6 GB de RAM) también se quedan en 1.7B; el iPhone 15 Pro (8 GB de RAM) puede ejecutar modelos 3B como Phi-4 Mini a unos 8–12 tokens/seg (orientativo). Para iPhones más antiguos, la mejor opción es conectarse de forma remota a un Mac o PC doméstico.',
          },
          {
            q: '¿Puedo sincronizar el historial de chat entre iPhone y Mac?',
            a: 'No en PocketPal AI, Private LLM, Google AI Edge Gallery ni MLC Chat — el historial de chat se almacena localmente en cada dispositivo, sin sincronización con iCloud. Private LLM y Locally AI son compras/descargas universales que también funcionan de forma nativa en Mac, pero el historial sigue sin sincronizarse entre las copias de iPhone y Mac. Para historial de chat entre dispositivos, el enfoque práctico es ejecutar Open WebUI en un Mac doméstico y acceder a él desde los navegadores de iPhone y Mac — Open WebUI almacena el historial de chat en el servidor.',
          },
          {
            q: '¿Están estas apps disponibles fuera del App Store?',
            a: 'PocketPal AI es de código abierto y puede compilarse desde el código fuente con Xcode, pero la versión del App Store es la distribución estándar. LLM Farm es la excepción que ahora debe compilarse desde el código fuente — actualmente no está en el App Store ni en TestFlight (el README dice "temporalmente no disponible"). Private LLM, Locally AI, Google AI Edge Gallery y MLC Chat solo están en el App Store. En la UE existen marketplaces de apps alternativos bajo el DMA, pero qué apps ofrecen depende de cada desarrollador, así que instala desde el canal oficial del desarrollador; ninguna de estas apps necesita uno.',
          },
          {
            q: '¿Alguna de ellas requiere jailbreak?',
            a: 'No. PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat y Apple Intelligence funcionan todas en iOS estándar. Compilar LLM Farm desde el código fuente en Xcode tampoco requiere jailbreak — usa la carga lateral estándar para desarrolladores, no un exploit de jailbreak. El jailbreak no es necesario ni recomendado para ninguna de estas apps.',
          },
          {
            q: '¿Puedo usar IA local en iOS Shortcuts?',
            a: 'Sí, mediante Private LLM (sus acciones de Shortcuts), Locally AI (una acción de Shortcuts gratuita) o Apple Intelligence (acción "Usar modelo", iOS 18.4+, ampliada en iOS 26). PocketPal AI, Google AI Edge Gallery y MLC Chat no mencionan acciones de Shortcuts. Entre las apps comparadas aquí, Locally AI es la única opción gratuita que indica tanto soporte de Shortcuts como acceso al propio modelo en dispositivo de Apple.',
          },
          {
            q: '¿Cómo se compara la IA local con la app de ChatGPT en iPhone?',
            a: 'Los modelos en dispositivo (Phi-4 Mini, Llama 3.2 3B) siguen claramente por detrás de los modelos de vanguardia en la nube en razonamiento complejo, conocimiento general del mundo y tareas multimodales, pero son más rápidos en consultas simples (sin ida y vuelta de red) y, según la documentación de cada app, mantienen el chat en el dispositivo. El intercambio honesto: IA local para tareas rutinarias y privadas; ChatGPT u otra app en la nube para preguntas difíciles ocasionales. Muchos usuarios en 2026 tienen ambas y eligen según la consulta.',
          },
          {
            q: '¿Sigue siendo seguro usar LLM Farm ahora que no está en el App Store?',
            a: 'El código fuente es público en GitHub y sigue recibiendo actividad de issues hasta 2026, pero la última versión (1.4.3) salió el 27 de enero de 2025 y el último cambio de código fue el 30 de enero de 2026, por lo que puede estar sin mantenimiento. Una vez compilada desde el código fuente e instalada por carga lateral, además, ya no pasa por el proceso de revisión del App Store de Apple. Si no necesitas específicamente sus controles de muestreo mirostat, PocketPal AI cubre el mismo caso de uso gratuito, flexible y de código abierto sin salir del App Store, con la revisión estándar de Apple.',
          },
          {
            q: '¿Qué apps de iPhone de esta guía son gratuitas?',
            a: 'PocketPal AI es gratuita (licencia MIT) con compras integradas opcionales para Pals premium y "PocketPal Plus". Locally AI y Google AI Edge Gallery son gratuitas y no indican compras integradas. MLC Chat es gratuita. LLM Farm es gratuita, pero hay que compilarla desde el código fuente. Private LLM cuesta $4.99 de pago único y no indica compras integradas. Apple Intelligence está integrada en iOS. Los precios se leyeron en el App Store de EE. UU. el 2026-10-23 y pueden variar según el país.',
          },
          {
            q: '¿Puede el iPhone Duo o el iPhone 18 Pro ejecutar un LLM local sin conexión?',
            a: 'En principio sí: ambos usan el chip A20 Pro de Apple, y las apps de esta guía funcionan en cualquier iPhone que cumpla su versión mínima de iOS. Lo que decide el tamaño del modelo es la RAM, y las páginas del iPhone 18 Pro y del iPhone Duo de Apple no indican una cifra de RAM; informaciones de prensa sitúan el iPhone 18 Pro en 12 GB, algo que no está confirmado. PromptQuorum no tiene velocidades medidas para ninguno de los dos teléfonos. Instala PocketPal AI y ejecuta su benchmark integrado para ver lo que realmente hace tu teléfono.',
          },
          {
            q: '¿Funcionan estas apps en el iPad?',
            a: 'Sí, la mayoría. PocketPal AI (iPadOS 15.1+, compatibilidad completa con iPad según su README), Private LLM (iPadOS 17.0+) y Locally AI (iPadOS 18.1+) indican compatibilidad con iPad. La ficha de Google AI Edge Gallery exige iOS 17.0 o posterior; consulta su página para tu iPad. Igual que en el iPhone, la RAM decide qué modelos caben. Para consejos específicos sobre iPad, consulta [Cómo ejecutar IA en una tablet](/es/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: '¿Por qué desapareció LLM Farm del App Store?',
            a: 'El README del proyecto dice: "The app is temporarily unavailable in TestFlight and Appstore." PromptQuorum no encontró ningún motivo público de la retirada, así que cualquier explicación que leas en otro sitio no está confirmada (consulta la [reseña de LLM Farm](/es/power-local-llm/llm-farm-review)). El código fuente sigue siendo público, pero la última versión fue la 1.4.3 del 27 de enero de 2025. Como alternativa gratuita e instalable desde el App Store, usa PocketPal AI o Locally AI.',
          },
          {
            q: '¿Hay una app de Ollama para iPhone?',
            a: 'La página de descargas de Ollama indica macOS, Windows y Linux, y ninguna app para iPhone. Para usar modelos de Ollama o LM Studio desde un iPhone, ejecuta el servidor en un Mac o PC y conéctate desde una app cliente; Locally AI ofrece LM Link, que LM Studio describe como una conexión cifrada con LM Studio en un Mac. Para modelos que se ejecutan por completo en el teléfono, usa las apps de esta guía.',
          },
          {
            q: '¿Debería descargar Gemma 4 o Phi-4 Mini?',
            a: 'PromptQuorum no tiene una comparativa directa de ambos en iPhone. Datos que ayudan: Gemma 4 E2B y E4B son los modelos de Google pensados para teléfonos (unos 2.58 GB y 3.65 GB como archivos LiteRT-LM en Google AI Edge Gallery; Locally AI también incluye Gemma 4), mientras que Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) es el modelo que usan las cifras de velocidad de esta guía. En un iPhone de 8 GB prueba ambos con tus propios prompts y compara los tokens/seg en el benchmark de PocketPal AI; en un iPhone de 6 GB quédate con modelos de clase 1.7B.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — la reseña completa de PromptQuorum de la opción gratuita y de código abierto por defecto.',
          '[Reseña de Private LLM](/es/power-local-llm/private-llm-review) — la opción de pago con Siri y Shortcuts.',
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — la app MLX gratuita del equipo de LM Studio.',
          '[Reseña de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app gratuita de Google con Gemma 4.',
          '[Reseña de MLC Chat](/es/power-local-llm/mlc-chat-review) y [Reseña de LLM Farm](/es/power-local-llm/llm-farm-review) — las dos apps señaladas como desactualizadas en esta guía.',
          '[Las mejores apps LLM local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — artículo hermano que cubre los equivalentes de Android (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[Cómo ejecutar IA en una tablet: iPad y Android (2026)](/es/power-local-llm/run-ai-on-tablet-ipad-android) — guía de plataforma para lectores con tablet.',
          '[Los mejores modelos LLM para móvil en 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — artículo complementario del lado del modelo para elegir qué ejecutar en estas apps.',
          '[Los mejores LLM locales en 2026](/es/local-llms/best-local-llms-2026) — panorama más amplio de modelos que cubre todos los niveles de hardware, no solo móvil.',
          '[Crea un asistente de voz local en tu teléfono: Whisper + LLM local](/es/power-local-llm/voice-assistant-local-mobile-offline) — extiende estas apps con entrada/salida de voz sin conexión.',
          '[La mejor app de IA local para PCs de gama baja](/es/power-local-llm/best-local-ai-app-low-end-pc) — alternativa de escritorio para usuarios que quieren conectarse de forma remota a una máquina doméstica más potente.',
          '[Reseña de Enclave AI 2026](/es/power-local-llm/enclave-ai-review) — un análisis más detallado de Enclave AI, una app de asistente de IA en dispositivo para iPhone, iPad y Mac con interacción con documentos y automatización con Siri/Shortcuts.',
          '[Directorio de software LLM local 2026](/es/directory) — directorio de todas las herramientas LLM local que merece la pena conocer en todas las plataformas.',
          '[Melhores Apps LLM Local para iPhone 2026 (Português)](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — versión en portugués de esta guía',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-23',
    last_full_refresh: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: '2026년 iPhone용 최고의 로컬 AI 앱 (WiFi 없이 LLM 실행)',
    seoTitle: '2026년 iPhone 로컬 AI 앱 비교 (오프라인 LLM)',
    intro:
      '2026년에 iPhone에서 실제 LLM을 완전히 기기 안에서 실행하는 선택지는 여섯 가지입니다: PocketPal AI, Private LLM, Locally AI(LM Studio 제공), Google AI Edge Gallery, MLC Chat, 그리고 Apple Intelligence(시스템 내장). 모두 모델을 한 번 다운로드하면 WiFi 없이 작동합니다. 이 가이드는 비용, 모델 라이브러리, iOS 통합, 개인 정보 보호 수준, 유지보수 상태를 기준으로 비교하며, iPhone 16 Pro와 iPhone 17 Pro의 참고용 속도 범위와 iPhone 18 Pro를 포함한 RAM 가이드를 제공하고, LLM Farm이 순위에서 빠진 이유도 설명합니다.',
    metaDescription:
      '2026년 iPhone 로컬 LLM 앱 6종: PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat 비교.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ko.webp',
    twitterDescription:
      '2026년 iPhone 로컬 AI: PocketPal AI (무료 기본 선택), Private LLM ($4.99, Siri + Shortcuts), Locally AI (LM Studio, MLX), Google AI Edge Gallery (Gemma 4). 모델 다운로드 후 모두 오프라인 작동.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 4B',
    ],
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, Apple이 RAM 미공개)',
      'iPhone Duo (A20 Pro, Apple이 RAM 미공개)',
      'iPhone 17 Pro (A19 Pro, 12 GB RAM)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 16e (A18, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      '클라우드 구독 없이 기기 안에서 개인 정보를 보호하며 AI를 실행하려는 iPhone 사용자 — 여행자, 개인 정보 보호를 중시하는 사용자, 기기 내 추론을 탐구하는 개발자.',
    readTime: '12분 읽기',
    educationalLevel: 'Beginner',
    primaryTerm: 'iPhone 로컬 LLM 앱',
    targetKeywords: [
      'iPhone 최고의 로컬 LLM 앱',
      'iPhone에서 인터넷 없이 LLM 실행',
      'PocketPal AI iPhone',
      'Private LLM 앱',
      'MLC Chat iPhone',
      'LLM Farm iOS',
      'iPhone WiFi 없는 AI',
      'iPhone 로컬 AI 앱',
      'Google AI Edge Gallery iOS',
      'Locally AI vs PocketPal',
      'iOS용 Ollama',
    ],
    leadAnswerBlock:
      '**2026년 대부분의 iPhone 사용자에게는 App Store에서 PocketPal AI를 설치하고 Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) 같은 작은 모델을 다운로드하십시오.** 무료로 사용할 수 있고(프리미엄 콘텐츠는 선택적 인앱 구매), 오픈 소스(MIT)이며, iPhone 14 Pro 이상(6 GB 이상 RAM을 갖춘 모든 iPhone)에서 작동하고, iPhone 16 Pro에서 일상적인 채팅 기준 대략 10–15 토큰/초(참고용)를 생성합니다. Siri 및 Shortcuts 통합을 원한다면 Private LLM이 이 가이드의 유료 선택입니다 ($4.99 일회 구매, iPhone·iPad·Mac). LM Studio 팀이 개발한 Locally AI는 Apple MLX 기반의 무료 앱으로 Shortcuts를 지원하고 Apple의 기기 내 파운데이션 모델에도 접근할 수 있습니다. Google AI Edge Gallery는 Gemma 4 모델을 위한 Google의 무료 앱으로, 에이전트 스킬과 사고 모드를 제공합니다. 더 새로운 소형 모델인 Gemma 4 E2B/E4B와 Qwen3.5도 이 앱들에서 사용할 수 있습니다(iPhone 등급별 모델 참조). MLC Chat은 여전히 Metal 가속의 기준 앱이지만 iPhone 빌드는 2024년 9월 이후 업데이트되지 않았습니다. LLM Farm은 현재 App Store와 TestFlight에 없으며(README: "일시적으로 이용 불가") 소스 코드 빌드로만 설치할 수 있습니다. Apple Intelligence도 기기에서 모델을 실행하지만 시스템에 내장되어 있고 채팅 앱이 아니므로, 이 앱들과 경쟁하기보다 보완합니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년 iPhone용 최고의 로컬 LLM 앱은 무엇입니까?',
        answer:
          'PocketPal AI는 대부분의 iPhone 사용자에게 권장하는 무료 기본 선택입니다 — 오픈 소스(MIT), App Store 설치, Hugging Face의 모든 GGUF 모델 지원, iPhone 16 Pro에서 Phi-4 Mini (3.8B)를 대략 10–15 토큰/초(참고용)로 실행합니다. Private LLM은 유료 선택입니다 ($4.99 일회 구매, iPhone + iPad + Mac). Shortcuts 및 Siri 통합이 있습니다. LM Studio 팀이 개발한 Locally AI는 Shortcuts를 지원하고 Apple의 기기 내 파운데이션 모델에 접근할 수 있는 무료 Apple MLX 옵션입니다. Google AI Edge Gallery는 Gemma 4를 위한 Google의 무료 앱입니다. MLC Chat은 Metal 가속을 지원하지만, iPhone 앱은 2024년 9월 27일의 v1.6 이후 업데이트가 없습니다. Apple Intelligence도 기기에서 모델을 실행하지만 시스템에 내장되어 있어 이 앱들을 대체하지 않고 보완합니다.',
        bullets: [
          'PocketPal AI — 무료, 오픈 소스(MIT), App Store, v1.20.1 (2026년 10월 19일). 대부분의 사용자에게 권장하는 기본 선택. 모든 GGUF 모델 지원. 프리미엄 콘텐츠는 선택적 인앱 구매.',
          'Private LLM — $4.99 일회 구매 (iPhone + iPad + Mac), v1.9.16 (2026년 9월 14일). 유료 선택. Shortcuts + Siri 통합.',
          'Locally AI — 무료, LM Studio 팀 제공, v1.66.0 (2026년 10월 15일). Apple MLX 엔진, Shortcuts 지원, Apple Foundation Models 접근.',
          'Google AI Edge Gallery — 무료, Google 제공, v1.0.13 (2026년 10월 8일). Gemma 4, 에이전트 스킬, 사고 모드, 이미지 및 오디오 입력.',
          'MLC Chat — 무료, MLC LLM 프로젝트. Metal 가속이지만 iPhone 앱은 v1.6 (2024년 9월 27일) 이후 업데이트가 없으므로 유지보수되지 않을 수 있다고 보십시오.',
          'Apple Intelligence — 시스템 내장, 독립 앱 아님. Mail, 메시지, 메모에서 사용되는 기기 내 ~3B 모델.',
          'iPhone 16 Pro / 17 Pro 권장 모델: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — ~10–15 토큰/초로 실행. 더 새로운 선택지: Gemma 4 E2B/E4B, Qwen3.5 4B.',
          '구형 iPhone (14 Pro): Qwen3 1.7B 또는 SmolLM 2 1.7B — 6 GB RAM에 맞으며 ~15–20 토큰/초로 실행.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: 'iPhone에서 먼저 설치할 앱은 무엇입니까?', anchor: '#which-app' },
      { label: 'iPhone 앱 비교표', anchor: '#comparison-table' },
      { label: 'PocketPal AI: 무료 오픈 소스 기본 선택', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: iOS 통합이 있는 유료 선택', anchor: '#private-llm' },
      { label: 'Locally AI: LM Studio의 무료 MLX 앱', anchor: '#locally-ai' },
      { label: 'Google AI Edge Gallery: Google의 무료 Gemma 4 앱', anchor: '#google-ai-edge-gallery' },
      { label: 'MLC Chat: Apple Silicon 최적화', anchor: '#mlc-chat' },
      { label: 'LLM Farm: App Store에는 없지만 소스는 계속 제공됩니다', anchor: '#llm-farm' },
      { label: 'Apple Intelligence: 시스템 내장 기기 내 AI', anchor: '#apple-intelligence' },
      { label: 'iPhone 등급별 모델', anchor: '#models-by-tier' },
      { label: '배터리 소모와 열 제한', anchor: '#battery-heat' },
      { label: 'iOS Shortcuts, Siri 및 사이드로딩', anchor: '#ios-integration' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽기', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**PocketPal AI가 권장하는 무료 기본 선택입니다.** 오픈 소스(MIT), App Store 설치, Hugging Face의 모든 GGUF 모델 지원. 로컬 채팅에는 계정이 필요 없으며, 프리미엄 Pals와 "PocketPal Plus"는 선택적 인앱 구매입니다. iPhone 16 Pro에서 Phi-4 Mini를 ~10–15 토큰/초로 실행합니다. 대부분의 iPhone 사용자에게 권장하는 출발점입니다.',
          '**Private LLM은 유료 선택입니다 ($4.99 일회 구매, 구독 없음).** 한 번 구매로 iPhone, iPad, Mac을 모두 사용할 수 있고 가족 공유는 최대 6명까지 확장됩니다. 큐레이션된 모델 라이브러리를 갖추었으며, 개발사에 따르면 Siri 및 Shortcuts와 연동됩니다.',
          '**Locally AI는 LM Studio 팀이 개발한 무료 MLX 기반 대안입니다.** Apple MLX에서 Llama, Gemma(Gemma 4 포함), Qwen, DeepSeek 모델을 실행하고, iOS Shortcuts와 함께 작동하며, Apple 자체의 기기 내 파운데이션 모델을 채팅 인터페이스로 노출할 수 있습니다.',
          '**Google AI Edge Gallery는 iPhone용 Google의 무료 Gemma 4 앱입니다.** 사고 모드, 에이전트 스킬, 이미지·오디오 입력을 제공하며, 모델은 GGUF가 아닌 LiteRT-LM 형식으로 실행됩니다. Google은 이 앱을 여전히 활발히 개발 중이라고 설명합니다.',
          '**MLC Chat은 Metal 가속이지만 iPhone에서는 정체되어 있습니다.** App Store 빌드는 2024년 9월 27일의 v1.6 이후 업데이트되지 않았으므로 모델 라이브러리가 Phi-4 Mini와 Gemma 3 이전 수준입니다. MLC LLM 엔진 자체는 GitHub에서 여전히 활발합니다.',
          '**LLM Farm은 현재 App Store와 TestFlight에 없습니다.** 자체 README는 "일시적으로 이용 불가"라고 설명합니다. 여전히 오픈 소스이며 Xcode로 소스 코드에서 빌드할 수 있지만, 마지막 릴리스는 2025년 1월의 1.4.3이고 마지막 코드 푸시는 2026년 1월 30일입니다.',
          '**Apple Intelligence는 기기 내에 있지만 독립 앱이 아닙니다.** Apple의 ~3B 파운데이션 모델이 시스템 기능(작문 도구, 스마트 답장, 알림 요약)을 지원합니다. iOS 26부터 서드파티 앱은 Foundation Models 프레임워크로 이를 호출할 수 있고, Shortcuts는 "모델 사용" 작업으로 프롬프트를 보낼 수 있습니다.',
          '**iPhone 16 Pro / 17 Pro 권장 모델: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Gemma 4 E2B/E4B와 Qwen3.5 4B는 더 새로운 대안이지만 PromptQuorum의 속도 수치는 아직 없습니다. 6 GB RAM의 구형 iPhone(iPhone 14 Pro): Qwen3 1.7B 또는 SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**비교 대상 앱:** PocketPal AI, Private LLM, Locally AI (LM Studio 제공), Google AI Edge Gallery, MLC Chat, Apple Intelligence (시스템) — 그리고 현재 App Store에 없는 LLM Farm (README: "일시적으로 이용 불가").',
          '**마지막 업스트림 업데이트 (2026-10-23 확인):** PocketPal AI v1.20.1 (2026년 10월 19일) · Locally AI v1.66.0 (2026년 10월 15일) · Google AI Edge Gallery v1.0.13 (2026년 10월 8일) · Private LLM v1.9.16 (2026년 9월 14일) · MLC Chat iPhone 앱 v1.6 (2024년 9월 27일 — 오래됨) · LLM Farm 릴리스 1.4.3 (2025년 1월 27일), 마지막 코드 푸시 2026년 1월 30일 — 오래됨.',
          '**속도 수치의 기준 기기:** iPhone 16 Pro (A18 Pro, 8 GB RAM) 및 iPhone 17 Pro (A19 Pro, 12 GB RAM). 속도 수치는 참고용 범위이며 PromptQuorum의 통제된 벤치마크가 아닙니다. iPhone 18 Pro, 18 Pro Max, iPhone Duo (A20 Pro)에 대한 속도 수치는 여기에 없습니다.',
          '**추론 엔진:** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), Metal을 사용한 MLC LLM (MLC Chat), Google LiteRT-LM (Google AI Edge Gallery), 독점 기기 내 런타임 (Private LLM, Apple Intelligence).',
          '**3B+ 모델을 위한 최소 iPhone:** 1.7B에는 iPhone 14 Pro (A16, 6 GB RAM); 3B–4B에는 8 GB 이상의 모든 iPhone (15 Pro, 16 시리즈, 16e, 17 시리즈, 18 Pro).',
          '**권장 무료 앱:** PocketPal AI — App Store, 오픈 소스, 모델 유연성.',
          '**유료 선택:** Private LLM — $4.99 일회 구매 (iPhone + iPad + Mac), Shortcuts + Siri 지원.',
          '**오프라인:** 여섯 가지 모두 모델을 다운로드하면 완전히 오프라인으로 작동하며, 각 앱의 README 또는 목록에 따르면 기기 내 채팅에는 클라우드 호출이 없습니다 (Apple Intelligence는 선택적으로 Private Cloud Compute를 사용할 수 있습니다).',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'iPhone에서 먼저 설치할 앱은 무엇입니까?',
        content:
          '**대부분의 사용자에게: App Store에서 PocketPal AI를 설치하고 Phi-4 Mini (3.8B Q4_K_M)를 다운로드하십시오 — 또는 Gemma 4 E2B/E4B, Qwen3.5 4B 같은 더 새로운 소형 모델을 선택하십시오.** 이 조합은 iPhone 14 Pro 이상에서 작동하고, 채팅에는 비용이 들지 않으며, 일상적인 채팅, 요약, 간단한 초안 작성에 쓸 만한 결과를 제공합니다. 이것이 충족하지 못하는 특정 필요가 있을 때만 다른 앱을 선택하십시오.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ko.webp',
        imageCaption:
          'iPhone 로컬 AI 앱 선택 가이드: 무료 PocketPal AI부터 Siri 지원 Private LLM까지의 결정표',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 대부분의 iPhone 사용자에게는 PocketPal AI (무료, App Store)를 설치하고 Phi-4 Mini 또는 Gemma 4 E2B 같은 더 새로운 소형 모델을 다운로드하십시오 — 6 GB 이상 RAM의 모든 iPhone에서 일상적인 채팅, 요약, 초안 작성을 다룹니다.',
          },
          {
            type: 'plain-terms',
            text: '2026년에 iPhone에서 AI를 완전히 폰 안에서 실행하는 선택지는 여섯 가지입니다. PocketPal AI가 권장하는 무료 출발점입니다 — 설치하고 2.7 GB 모델 파일을 한 번 다운로드하면 WiFi 없이 기차에서도 작동하는 개인 채팅 비서를 갖게 됩니다. Private LLM은 Siri가 로컬 모델과 통신하기를 원할 때의 유료 선택입니다. LM Studio 팀의 Locally AI는 Shortcuts를 지원하는 무료 현대적 대안이고, Google AI Edge Gallery는 Gemma 4 모델을 위한 Google의 무료 앱입니다. MLC Chat의 iPhone 빌드는 더 이상 업데이트되지 않습니다. Apple Intelligence는 iOS에 내장되어 있지만 채팅 앱이 아닙니다. 대부분의 사용 사례에는 PocketPal AI가 맞습니다.',
          },
        ],
        decisionBlock: {
          title: '결정: iPhone용 어떤 로컬 AI 앱?',
          localIf: [
            '오프라인으로 작동하는 무료 채팅 AI를 원한다 → PocketPal AI',
            'Siri가 로컬 모델과 통신하기를 원한다 → Private LLM',
            'Shortcuts와 Apple Foundation Models 접근이 가능한 무료 MLX 앱을 원한다 → Locally AI',
            '사고 모드와 에이전트 스킬을 갖춘 Google 자체의 Gemma 4를 원한다 → Google AI Edge Gallery',
            'MLC LLM 도구 체인을 실험해 보고 싶고 2024년 9월 이후 업데이트가 없는 iPhone 빌드를 감수할 수 있다 → MLC Chat',
            'Mail / 메시지 / 메모에서 작문 도움만 필요하다 → Apple Intelligence (내장)',
          ],
          cloudIf: [
            '70B+ 모델 품질이 필요하다 (Llama 3.3 70B, GPT-5.5 수준) → 클라우드를 사용하거나 홈 머신에 원격 연결',
            'GPT-5.5, Claude Opus 또는 Gemini에 구체적으로 접근해야 한다 → 클라우드 앱 (로컬에서 사용 불가)',
            '텍스트를 넘어선 실시간 비전 또는 멀티모달 출력이 필요하다 → 클라우드 (2026년에 기기 내 멀티모달은 제한적)',
          ],
          quick: [
            '무료 + 대부분의 사용자에게 적합: PocketPal AI',
            '유료 + 네이티브 iOS 통합: Private LLM',
            '무료 + LM Studio 생태계: Locally AI',
            '무료 + Google Gemma 4: Google AI Edge Gallery',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '나중에 Private LLM을 구매할 계획이더라도 먼저 PocketPal AI를 설치하십시오. PocketPal AI로 사용 중인 iPhone 등급에서 기기 내 추론이 용도에 충분히 빠른지 확인하십시오. 충분하다면 Private LLM의 Shortcuts 및 Siri 통합이 $4.99의 가치가 있는지 결정하십시오. 그렇지 않다면 결제 전에 확인함으로써 $4.99를 절약한 것입니다. PocketPal AI에는 사용 중인 iPhone의 토큰/초와 메모리를 보고하는 내장 벤치마크도 있으니, 아래 표를 포함한 어떤 표보다 이것을 신뢰하십시오.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone 앱 비교표',
        content:
          '**여섯 가지 선택지는 대부분의 사용자에게 중요한 세 가지 축에서 차이가 납니다: 비용, 모델 유연성, iOS 통합.** 속도 차이는 존재하지만 이 앱들 중 어느 것과 클라우드 LLM 사이의 격차보다는 작습니다. 가격과 버전은 2026-10-23에 미국 App Store 목록과 프로젝트 페이지에서 확인했습니다.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-ko.webp',
        imageCaption:
          'iPhone 로컬 LLM 앱 비교: PocketPal AI, Private LLM 등의 비용, 속도, 연동 기능',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI가 권장하는 무료 기본 선택, Private LLM이 유료 선택, Locally AI가 LM Studio 팀의 무료 MLX 선택, Google AI Edge Gallery가 Google의 무료 Gemma 4 앱이며, MLC Chat은 iPhone에서 정체되었고 Apple Intelligence는 시스템에 내장되어 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '선택은 보통 세 가지로 좁혀집니다: Siri 통합에 비용을 지불할 것인가 (Private LLM), Shortcuts를 지원하는 LM Studio 생태계를 무료로 원하는가 (Locally AI), 아니면 사고 모드를 갖춘 Google 자체의 Gemma 4를 원하는가 (Google AI Edge Gallery). 그 외의 모든 경우에는 PocketPal AI가 기본 선택입니다. 표의 속도 수치는 Q4_K_M 양자화 기준의 참고용 범위이며 — 2026년 모바일 추론의 표준입니다 — 통제된 벤치마크가 아닙니다.',
          },
        ],
        columns: ['앱', '비용', '토큰/초 (Phi-4 Mini, 16 Pro)', '개인 정보 보호', '이상적인 대상'],
        rows: [
          { '앱': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)', '비용': '무료 (MIT) + 선택적 인앱 구매', '토큰/초 (Phi-4 Mini, 16 Pro)': '~10–15', '개인 정보 보호': '기기 내 채팅, 계정 불필요 (README)', '이상적인 대상': '대부분을 위한 무료 기본 선택' },
          { '앱': '[Private LLM](https://privatellm.app)', '비용': '$4.99 일회 구매', '토큰/초 (Phi-4 Mini, 16 Pro)': '수치 없음', '개인 정보 보호': '기기 내 처리, 계정·추적 없음 (개발사)', '이상적인 대상': 'Shortcuts + Siri 통합' },
          { '앱': '[Locally AI](https://lmstudio.ai/locally)', '비용': '무료 (LM Studio 팀)', '토큰/초 (Phi-4 Mini, 16 Pro)': '해당 없음 — MLX 카탈로그 (Phi-4 없음)', '개인 정보 보호': '기기 내 처리, 데이터 수집 없음 (스토어 목록)', '이상적인 대상': 'MLX + Shortcuts, LM Studio 연동' },
          { '앱': '[Google AI Edge Gallery](https://apps.apple.com/app/id6749645337)', '비용': '무료 (Google)', '토큰/초 (Phi-4 Mini, 16 Pro)': '해당 없음 — LiteRT-LM, Gemma 4', '개인 정보 보호': '모델 다운로드 후 기기 내 처리', '이상적인 대상': 'Gemma 4, 사고 모드, 에이전트 스킬' },
          { '앱': '[MLC Chat](https://llm.mlc.ai)', '비용': '무료 (오픈 소스)', '토큰/초 (Phi-4 Mini, 16 Pro)': '해당 없음 — Phi-4 이전 라이브러리', '개인 정보 보호': '로컬 추론 (프로젝트 문서, 미검증)', '이상적인 대상': 'MLC LLM 도구 체인 사용자 (iOS 앱 정체)' },
          { '앱': '[LLM Farm](https://github.com/guinmoon/LLMFarm)', '비용': '무료 (소스 빌드)', '토큰/초 (Phi-4 Mini, 16 Pro)': '수치 없음', '개인 정보 보호': '로컬 추론 (프로젝트 문서, 미검증)', '이상적인 대상': '개발자 (App Store 없음, 오래됨)' },
          { '앱': '[Apple Intelligence](https://www.apple.com/apple-intelligence/)', '비용': '무료 (iOS 내장)', '토큰/초 (Phi-4 Mini, 16 Pro)': '해당 없음 (시스템 기능)', '개인 정보 보호': '로컬 + 옵트인 Private Cloud Compute', '이상적인 대상': 'Mail, 메시지, 메모 작문 지원' },
        ],
        note:
          '**Apple Neural Engine (ANE), Metal, MLX 비교 참고:** PocketPal AI와 LLM Farm은 추론에 Metal Performance Shaders와 함께 llama.cpp를 사용하며, 이는 GPU에서 실행됩니다. MLC Chat은 더 깊은 Metal 최적화를 적용한 MLC LLM을 사용하는데, MLC LLM 프로젝트는 동일한 하드웨어에서 llama.cpp 기반 앱보다 빠르다고 설명합니다 (프로젝트의 주장이며 PromptQuorum은 이를 측정하지 않았습니다). Locally AI는 Apple 자체의 오픈 소스 배열 프레임워크인 Apple MLX를 사용하여 Apple Silicon에서 비슷한 GPU 효율에 도달합니다. Google AI Edge Gallery는 Google의 LiteRT-LM 런타임으로 Gemma 4를 실행합니다. Apple Intelligence는 시스템 ~3B 모델에 ANE를 구체적으로 사용하며, 이는 Metal 기반 추론보다 전력 효율이 높지만 유연성이 낮습니다. iOS 26부터 서드파티 앱은 Foundation Models 프레임워크를 통해 이 시스템 모델을 호출할 수 있고 — Locally AI가 정확히 그렇게 합니다 — 커스텀 GGUF/MLX 모델은 여전히 ANE를 직접 대상으로 할 수 없습니다. Apple은 iPhone 18 Pro의 A20 Pro가 이전 대비 두 배의 연산 성능을 갖춘 듀얼 16코어 Neural Engine을 탑재했다고 밝히고 있으나, 이는 Apple의 주장이며 PromptQuorum은 이것이 이 앱들에 어떤 의미인지 측정하지 않았습니다.',
        callouts: [
          {
            type: 'tip',
            text: '토큰/초 수치는 방향을 가늠하기 위한 반올림된 참고용 범위이며, PromptQuorum의 통제된 벤치마크가 아니고 앱 버전이나 테스트 날짜에 연결되어 있지 않습니다. Q4_K_M 양자화 (2026년 모바일 추론의 표준)와 다른 무거운 앱이 실행되지 않는 유휴 iPhone을 가정합니다. 백그라운드 앱은 처리량을 눈에 띄게 낮출 수 있으며, iPhone 17 Pro는 보통 iPhone 16 Pro보다 빠르게 실행됩니다. PocketPal AI의 내장 벤치마크로 직접 사용 중인 폰을 측정하십시오.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: 무료 오픈 소스 기본 선택',
        content:
          '**PocketPal AI는 2026년 대부분의 iPhone 사용자에게 권장하는 출발점입니다.** 무료로 사용할 수 있고, 오픈 소스(MIT, GitHub: [a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai))이며, App Store에서 이용할 수 있고, Hugging Face의 모든 GGUF 모델을 지원합니다. 앱은 내부적으로 Apple Silicon 최적화를 적용한 llama.cpp를 사용합니다. 전체 리뷰: [PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review).',
        items: [
          '**무엇인가:** llama.cpp를 사용하여 GGUF 모델을 로컬로 실행하는 iOS/iPadOS 및 Android 앱으로, Gooya UG가 배포합니다. README에 따르면 프롬프트, 응답, 문서는 외부 서버로 업로드되지 않으며 채팅에는 계정이 필요 없습니다.',
          '**버전과 마지막 업데이트:** v1.20.1, 2026년 10월 19일 릴리스 ([GitHub 릴리스](https://github.com/a-ghorbani/pocketpal-ai/releases)). App Store 목록도 같은 버전을 표시합니다. 업데이트 주기는 대략 1~2주 간격이며 오래됨 경고는 없습니다.',
          '**설치:** App Store → "PocketPal AI". 무료 다운로드이며 선택적 인앱 구매(프리미엄 Pals와 "PocketPal Plus")가 있습니다. iOS/iPadOS 15.1 이상이 필요하며, 사용 가능한 모델 크기를 정하는 것은 iOS 버전이 아니라 RAM입니다. v1.20.0부터 선택적 Apple로 로그인과 계정 삭제도 제공합니다.',
          '**모델 추가:** 앱에서 모델 → "Hugging Face에서 추가" → 검색 (예: "phi-4-mini-instruct-Q4_K_M") → 탭하여 다운로드. 모델은 앱의 로컬 저장소에 저장됩니다 (Phi-4 Mini Q4의 경우 ~2.7 GB).',
          '**생성 속도 (iPhone 16 Pro, 참고용):** Phi-4 Mini ~10–15 tok/초, Llama 3.2 3B ~12–18 tok/초, Gemma 3 4B ~7–10 tok/초, Qwen3 1.7B ~18–24 tok/초. PromptQuorum의 통제된 측정이 아니므로, 사용 중인 iPhone의 토큰/초와 메모리를 보고하는 내장 벤치마크를 사용하십시오.',
          '**기타 기능:** Pals(맞춤형 어시스턴트), 기기 내 텍스트 음성 변환, Talents(성능이 충분한 모델을 위한 계산기 및 날짜/시간 도구), 접근 토큰으로 제한 모델(gated model)을 지원하는 Hugging Face 모델 브라우저.',
          '**이상적인 대상:** 계정이 필요 없고 커뮤니티가 공개한 모든 GGUF 모델을 지원하는, App Store에서 설치 가능한 무료 채팅 앱을 원하는 사용자.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'PocketPal AI의 모델 선택기에는 앱 문서에 따르면 기기 RAM에 맞는 모델을 보여 주는 "추천" 필터가 있습니다. 사용 중인 폰에서 직접 확인하십시오 — 너무 큰 모델은 iOS가 응답 도중에 앱을 종료하게 만들 수 있습니다.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: iOS 통합이 있는 유료 선택',
        content:
          '**Private LLM은 이 가이드의 iPhone용 유료 선택입니다 ($4.99 일회 구매, 구독 없음).** App Store에서만 이용할 수 있으며 최적화된 모델의 큐레이션된 라이브러리가 함께 제공됩니다. 차별화 요소는 iOS 통합입니다: 개발사에 따르면 Siri 및 Shortcuts 앱과 직접 연동됩니다. 전체 리뷰: [Private LLM 리뷰](/ko/power-local-llm/private-llm-review).',
        items: [
          '**무엇인가:** 큐레이션된 모델 라이브러리와 깊은 iOS 통합을 갖춘 유료 iOS 앱. Apple Silicon에 최적화된 독점 기기 내 런타임을 사용합니다.',
          '**설치:** App Store → "Private LLM - Local AI Chat" (Numen Technologies Limited). 일회 구매 $4.99 (구독 없음, 목록에 인앱 구매 없음). A12 Bionic 칩 이상의 iOS/iPadOS 17.0 이상이 필요합니다.',
          '**버전과 마지막 업데이트:** v1.9.16, 2026년 9월 14일 릴리스 (App Store 버전 기록). 이전 릴리스는 2026년 7월 9일의 1.9.15였습니다. 릴리스는 2~3개월 간격으로 나오며 3개월 기준선 안이므로 오래됨 경고는 없습니다.',
          '**큐레이션된 모델 라이브러리:** [privatellm.app](https://privatellm.app)은 iPhone, iPad, Mac 전반에서 140개 이상의 로컬 모델을 제공한다고 밝히며 Llama, Qwen3, Gemma 3, Phi 4 같은 계열을 언급합니다. iPhone에 맞는 모델은 그 일부입니다. PocketPal AI보다 유연성은 낮지만 모델이 앱의 런타임에 맞게 사전 최적화되어 있습니다.',
          '**Shortcuts:** 개발사에 따르면 Private LLM은 Shortcuts 앱과 연동되며 x-callback-url 사양을 지원하는 다른 앱으로 응답을 전달할 수 있습니다. 홈 화면 버튼이나 NFC 태그에서 로컬 AI를 실행하는 데 유용합니다.',
          '**Siri 통합:** 개발사는 Siri 통합을 명시하며, 기기 내 모델로 전달된 프롬프트는 인터넷 연결 없이 작동합니다 (인터넷은 첫 모델 다운로드에만 필요).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'privatellm.app에 따르면 $4.99 한 번 구매로 iPhone, iPad, Mac을 모두 사용할 수 있으며, App Store 목록은 가족 공유로 최대 6명의 가족 구성원이 사용할 수 있다고 안내합니다. 구독과 인앱 구매는 표시되어 있지 않아 — 표시된 가격이 총 비용입니다. 개발사는 계정, 추적, 로그가 없다고 밝힙니다.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: LM Studio의 무료 MLX 앱',
        content:
          '**Locally AI는 LM Studio 팀이 개발한 (Element Labs Inc 명의로 등록) 무료 개인 정보 보호 중심 채팅 앱으로, llama.cpp 대신 Apple 자체의 MLX 프레임워크를 기반으로 합니다.** Apple의 기기 내 파운데이션 모델을 채팅 인터페이스로 노출하는 이 가이드의 유일한 앱입니다. 전체 리뷰: [Locally AI 리뷰](/ko/power-local-llm/locally-ai-review).',
        items: [
          '**무엇인가:** 추론에 Apple MLX를 사용하는 iOS/iPadOS/macOS 앱으로, 데스크톱 LM Studio 앱을 만든 팀이 개발합니다.',
          '**설치:** App Store → "Locally AI". 무료, 인앱 구매 없음(목록 기준), 계정 불필요(목록 기준), 오프라인 실행.',
          '**버전과 마지막 업데이트:** v1.66.0, 2026년 10월 15일 릴리스 (App Store 버전 기록). 2026년에는 한 달에 약 한 번 릴리스되며 오래됨 경고는 없습니다.',
          '**모델 라이브러리:** Llama 3.2, Gemma 2/3/4, Qwen 3 및 3.5, DeepSeek, LFM 2.5, Bonsai, Ministral 3, Apple Foundation Models — MLC Chat보다 더 넓고 최신인 카탈로그.',
          '**iOS Shortcuts:** Shortcuts 작업을 제공하며, Private LLM의 자동화 지원과 동등한 수준을 무료로 제공합니다.',
          '**LM Link:** Mac에서 실행 중인 LM Studio가 종단 간 암호화 연결이라고 설명하는 방식으로 연동하는 선택적 기능으로, 필요할 때 iPhone 앱이 홈 머신의 더 큰 모델로 작업을 넘길 수 있게 합니다.',
          '**요구 사항:** iOS/iPadOS 18.1 이상 (Mac 버전은 macOS 26.0 이상). Apple Silicon급 효율의 이점은 iPhone 15 Pro 이상에서 가장 큽니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI는 이 가이드에서 Apple 자체의 기기 내 파운데이션 모델을 일반적인 채팅 창 뒤에 배치할 수 있는 유일한 앱입니다 — 작문 도구 메뉴를 뒤지지 않고 Apple Intelligence의 모델이 무엇을 할 수 있는지 테스트하고 싶을 때 유용합니다. 서드파티 GGUF 수준의 유연성이 필요하다면 PocketPal AI가 여전히 더 큰 모델 카탈로그를 보유하고 있습니다.',
          },
        ],
      },
      googleAIEdgeGallery: {
        id: 'google-ai-edge-gallery',
        title: 'Google AI Edge Gallery: Google의 무료 Gemma 4 앱',
        content:
          '**Google AI Edge Gallery는 Gemma 4 모델을 폰에서 실행하기 위한 Google의 무료 앱이며, iPhone App Store에서 이용할 수 있습니다.** 스토어 목록에는 사고 모드를 갖춘 AI 채팅, 에이전트 스킬, 이미지 및 오디오 입력, Prompt Lab, 모델 벤치마킹이 표시됩니다. Google은 이 앱이 활발히 개발 중이라고 밝힙니다. 전체 리뷰: [Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review).',
        items: [
          '**무엇인가:** Google의 LiteRT-LM 런타임 기반의 Google 기기 내 AI 쇼케이스 앱. 무료이며 인앱 구매는 목록에 없습니다.',
          '**설치:** App Store → "Google AI Edge Gallery". iOS 17.0 이상이 필요합니다. 모델은 앱 안에서 별도로 다운로드합니다.',
          '**버전과 마지막 업데이트:** v1.0.13, 2026년 10월 8일 릴리스 (App Store 버전 기록). Gemma 4 지원은 2026년 4월 3일 v1.0.2에서 추가되었으며 오래됨 경고는 없습니다.',
          '**모델:** Gemma 4 계열 (E2B와 E4B가 폰 크기 변형이며, Google은 LiteRT-LM 파일을 약 2.58 GB와 3.65 GB로 안내), EmbeddingGemma 2, FunctionGemma 270M. LiteRT-LM 형식의 모델은 Hugging Face에서 가져올 수도 있습니다.',
          '**기능:** 사고 모드(Gemma 4 모델 한정), 에이전트 스킬(예: Wikipedia 검색과 지도, 커뮤니티 스킬 포함), 이미지 질문, 오디오 받아쓰기, Prompt Lab, 모델 벤치마킹.',
          '**제한:** LiteRT-LM 모델만 지원하며 GGUF나 MLX는 지원하지 않습니다. 목록에는 Shortcuts나 Siri 언급이 없으며, PromptQuorum에는 이 앱의 속도 수치가 없습니다.',
          '**이상적인 대상:** 눈에 보이는 추론 모드와 에이전트 도구를 갖춘 Google 자체의 Gemma 4를 무료로 사용하려는 사용자.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Google은 iPhone 17 Pro에서 Gemma 4 E2B의 최대 메모리를 CPU 기준 약 607 MB, GPU 기준 약 1,450 MB로 보고합니다 (Google LiteRT-LM Gemma 4 페이지의 벤더 수치이며 PromptQuorum이 다시 측정한 값은 아닙니다). E2B는 대부분의 폰에서 현실적인 출발점이고, E4B는 8 GB 이상 iPhone에 적합합니다.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: Apple Silicon 최적화',
        content:
          '**오래됨 경고: MLC Chat iPhone 앱은 2024년 9월 27일의 버전 1.6 이후 업데이트가 없으며 (13개월 이상), 유지보수되지 않을 수 있으니 의존하기 전에 확인하십시오.** MLC LLM 엔진 저장소 자체는 GitHub에서 여전히 활발합니다 (마지막 활동 2026년 10월 6일). MLC Chat은 무료, 오픈 소스이며 표준 GGUF 대신 MLC LLM 도구 체인으로 컴파일된 모델을 실행하며, 카탈로그는 PocketPal AI나 Locally AI를 따라잡지 못했습니다. 전체 리뷰: [MLC Chat 리뷰](/ko/power-local-llm/mlc-chat-review).',
        items: [
          '**무엇인가:** Apple Silicon에서 MLC LLM의 Metal 가속 추론을 시연하는 MLC LLM 프로젝트의 iOS 참조 앱.',
          '**설치:** App Store → "MLC Chat". 무료. iOS/iPadOS 17.0 이상이 필요합니다.',
          '**버전과 마지막 업데이트:** v1.6, 2024년 9월 27일 릴리스 (App Store 버전 기록, Llama 3.2 3B 추가). 이전: 1.5에서 Gemma 2 2B 추가 (2024년 8월), 1.4에서 Phi-3, Mistral v3, Qwen2 추가 (2024년 6월). 마지막 iPhone 업데이트가 13개월 이상 전이므로 오래됨 경고가 켜져 있습니다.',
          '**속도 (프로젝트의 주장, 여기서 측정하지 않음):** MLC LLM 프로젝트는 Metal 가속 엔진이 같은 iPhone의 llama.cpp 기반 앱보다 빠르다고 설명합니다. 그러나 앱 자체의 모델 목록이 Phi-4 Mini, Gemma 3 같은 현재 권장 모델보다 앞선 시기의 것이어서, 직접 컴파일한 빌드 없이는 2026년 권장 모델로 이 이점을 검증할 수 없습니다.',
          '**모델 라이브러리:** 앱이 정체되기 전에 MLC LLM 프로젝트가 컴파일한 모델로 한정됩니다 — Llama 3.2 3B, Gemma 2 2B, Phi-3, Mistral v3, Qwen2 및 유사한 2024년대 릴리스. 모든 Hugging Face GGUF가 작동하는 것은 아니며, App Store 빌드에는 현세대 소형 모델이 들어 있지 않습니다.',
          '**이상적인 대상:** 이미 MLC LLM 도구 체인에 투자했고 직접 모델을 컴파일할 의향이 있는 개발자, 또는 앱에 이미 들어 있는 2025년 이전 모델이 꼭 필요한 사용자.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'MLC Chat의 App Store 빌드가 2024년 9월 27일 이후 업데이트되지 않았으므로, 선택기에 Phi-4 Mini, Qwen3, Gemma 3이 나타나리라고 기대하지 마십시오. 지금 Metal급 GPU 효율로 현세대 모델을 원한다면, Locally AI (Apple MLX), PocketPal AI (Metal Performance Shaders를 쓰는 llama.cpp), Google AI Edge Gallery (Gemma 4)가 활발히 유지되는 대안입니다.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: App Store에는 없지만 소스는 계속 제공됩니다',
        content:
          '**오래됨 경고: LLM Farm의 마지막 릴리스(1.4.3)는 2025년 1월 27일이었고 마지막 코드 푸시는 2026년 1월 30일로, 거의 9개월 동안 업데이트가 없어 유지보수되지 않을 수 있습니다.** PromptQuorum의 해당 프로젝트 리뷰는 App Store에서의 삭제 시점을 2025년 8월로 봅니다. GitHub README는 App Store와 TestFlight 두 곳 모두에서 앱이 "일시적으로 이용 불가"라고 설명합니다. 프로젝트 (GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm))는 여전히 오픈 소스이며 2026년 10월까지 GitHub 이슈 활동이 있었지만, 신규 사용자는 더 이상 App Store에서 설치할 수 없고 Xcode로 소스 코드에서 빌드해야 합니다 (README: macOS 13+ 및 iOS 16+). 전체 리뷰: [LLM Farm 리뷰](/ko/power-local-llm/llm-farm-review).',
        items: [
          '**무엇인가:** 개발자 @guinmoon의 iOS 앱으로, 폭넓은 구성 옵션과 함께 GGUF 모델을 실행하며 이전에는 App Store에서 배포되었습니다.',
          '**현재 이용 가능 여부:** 이번 갱신 시점 기준으로 App Store나 TestFlight에서 설치할 수 없습니다. 소스 코드는 계속 공개되어 있으며 빌드할 수 있습니다.',
          '**소스에서 빌드:** 저장소를 클론하고 Xcode에서 열어 무료 또는 유료 Apple 개발자 계정으로 기기에 빌드합니다 — App Store 목록이 없는 오픈 소스 iOS 앱의 표준 사이드로딩 방식입니다.',
          '**노출되는 구성 (빌드 시):** temperature, top-p, top-k, mirostat 샘플링, 반복 페널티, 모델별 시스템 프롬프트, 채팅 템플릿 선택, 컨텍스트 윈도우 길이.',
          '**이상적인 대상:** Xcode에서 앱을 소스로 빌드하는 데 익숙하고 mirostat 샘플링 제어가 특별히 필요한 개발자. 그 외의 모든 사용자는 App Store에서 완전히 설치할 수 있고 무료인 PocketPal AI나 Locally AI를 사용하십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM Farm의 App Store 링크가 작동하리라고 기대하지 마십시오 — 다른 곳에서 발견한 그런 링크는 오래된 것으로 보십시오. 소스 빌드에는 Xcode와 iOS 코드 서명에 대한 기본 지식이 필요합니다. 그것이 원하는 것보다 설정 부담이 크다면, PocketPal AI가 App Store를 벗어나지 않고도 동일한 "유연한 무료 채팅 앱" 용도를 다룹니다.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: 시스템 내장 기기 내 AI',
        content:
          '**Apple Intelligence는 iPhone 15 Pro 이상 (iPhone 15 Pro 세대, 보도상 8 GB RAM이며 Apple은 RAM을 공개하지 않음)에서 Apple 자체의 ~3B 파운데이션 모델을 기기 내에서 실행합니다.** 기본적으로 채팅 앱이 아니며, Mail(스마트 답장), 메시지(작문 도구), 메모(요약), 알림 요약의 시스템 기능을 지원합니다. iOS 26부터 Apple의 Foundation Models 프레임워크로 서드파티 개발자가 같은 기기 내 모델을 직접 호출할 수 있으며, Locally AI 같은 앱은 이를 이용해 그 위에 실제 채팅 인터페이스를 제공합니다. iOS 27은 프레임워크를 확장합니다: Apple의 개발자 가이드에 따르면 앱은 Apple 자체 모델과 클라우드 모델을 포함해 언어 모델 프로토콜을 따르는 모든 언어 모델을 사용할 수 있습니다.',
        items: [
          '**위치:** iOS 18+에 통합 (Foundation Models 프레임워크는 iOS 26에서 추가). 설정 → Apple Intelligence 및 Siri에서 활성화합니다.',
          '**하드웨어 요구 사항:** iPhone 15 Pro / 15 Pro Max, iPhone 16 시리즈, iPhone 16e, iPhone 17 시리즈, 그리고 2026년 iPhone 18 Pro, 18 Pro Max, iPhone Duo (A20 Pro). 이전 iPhone (14 이하)은 Apple Intelligence를 지원하지 않습니다. 구매 전에 iOS 27의 Apple 최신 호환 목록을 확인하십시오.',
          '**Siri AI (iOS 27):** Apple은 Siri AI가 iOS 27에서 베타로 제공되며, 영어를 먼저 지원하고, iOS에서는 처음에 EU에서 이용할 수 없으며, 일부 서버 측 기능에는 일일 사용 한도가 적용된다고 설명합니다. 이 가이드의 기기 내 채팅 앱과는 별개입니다.',
          '**기기 내 기능:** 모든 텍스트 입력란의 작문 도구(다시 쓰기, 요약, 교정), Mail과 메시지의 스마트 답장, 알림 요약, Genmoji 생성.',
          '**Foundation Models 프레임워크 (iOS 26+):** 몇 줄의 코드로 같은 기기 내 모델에 직접 접근하게 해 주는 네이티브 Swift API — Locally AI가 이를 채팅 옵션으로 제공하는 방식이며, Shortcuts의 "모델 사용" 작업이 프롬프트를 이 모델, Private Cloud Compute, 또는 ChatGPT로 보낼 수 있는 방식이기도 합니다.',
          '**Private Cloud Compute:** 기기 내 모델의 능력을 넘는 작업의 경우 Apple Intelligence는 Private Cloud Compute (PCC)로 전환합니다 — Apple이 사용자 데이터를 보관하지 않는다고 밝히는 더 큰 모델을 실행하는 Apple 운영 서버입니다. PCC는 옵트인이며 비활성화할 수 있습니다.',
          '**채팅 앱과의 관계:** Apple Intelligence는 대체가 아니라 보완입니다. 시스템 기능은 iOS 앱 안에서의 텍스트 다시 쓰기와 요약을 처리하고, PocketPal AI, Private LLM, Locally AI, MLC Chat은 임의의 질문을 위한 전용 채팅 인터페이스를 제공합니다 — 이제 Locally AI는 같은 종류의 인터페이스 뒤에 Apple 자체 모델을 둘 수 있습니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Apple Intelligence만 필요하다면 (이메일 다시 쓰기, 알림 요약) 별도의 채팅 앱이 필요하지 않습니다. "양자 터널링을 쉽게 설명해 줘"나 "X에 대한 프로젝트 계획 초안을 써 줘" 같은 질문을 모델에 하고 싶다면 채팅 앱을 설치하십시오 — PocketPal AI 같은 전용 앱이나, Apple 자체의 기기 내 모델 앞에 채팅 창을 둘 수 있는 Locally AI가 있습니다.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'iPhone 등급별 모델',
        content:
          '**모델 크기의 상한을 정하는 것은 칩 세대가 아니라 iPhone의 RAM입니다.** 6 GB iPhone (14 Pro, 15)은 1.7B 모델을 무리 없이 실행할 수 있고, 8 GB 이상 iPhone (15 Pro, 16 시리즈, 16e, 17 시리즈)은 3B–4B 모델을 무리 없이, 7B 모델을 느리게 실행합니다. Phi-4 Mini와 함께 시도해 볼 만한 더 새로운 소형 모델: Gemma 4 E2B와 E4B (Google, 2026년 4월; LiteRT-LM 파일로 약 2.58 GB와 3.65 GB), 그리고 Qwen3.5 소형 시리즈 (Alibaba, 2026년 3월; 0.8B, 2B, 4B, 9B, Artificial Analysis 요약에 따르면 Apache 2.0). PromptQuorum에는 이 모델들의 속도 수치가 없으며, Locally AI와 Google AI Edge Gallery가 직접 제공합니다. 모바일에 국한되지 않은 모든 하드웨어의 모델 현황은 [2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026)을 참조하십시오.',
        image: '/images/iphone-llm-apps-models-tier-en.svg',
        imageCaption:
          'iPhone RAM 구간별 추천 로컬 LLM 모델: 4 GB 기기부터 12 GB iPhone 17 Pro까지',
        columns: ['iPhone 등급 (연도, RAM)', '권장 모델', '다운로드 크기', '대략적 속도(참고용)'],
        rows: [
          { 'iPhone 등급 (연도, RAM)': 'iPhone 18 Pro / Pro Max (2026, 보도상 ~12 GB)', '권장 모델': '17 Pro와 동일하게 시작. Apple이 RAM 미공개', '다운로드 크기': '~2.5–3.7 GB', '대략적 속도(참고용)': '수치 없음' },
          { 'iPhone 등급 (연도, RAM)': 'iPhone 17 Pro / 17 Pro Max (2025, 12 GB)', '권장 모델': 'Phi-4 Mini / Llama 3.2 3B / Gemma 4 E4B', '다운로드 크기': '~2.5–3.7 GB', '대략적 속도(참고용)': '~13–20 tok/초 (Phi-4 Mini)' },
          { 'iPhone 등급 (연도, RAM)': 'iPhone 16 시리즈 / 16e / 17 (2024–2025, 8 GB)', '권장 모델': 'Phi-4 Mini (3.8B Q4_K_M) 또는 Gemma 4 E2B', '다운로드 크기': '~2.6–2.7 GB', '대략적 속도(참고용)': '~10–15 tok/초 (Phi-4 Mini)' },
          { 'iPhone 등급 (연도, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 GB)', '권장 모델': 'Phi-4 Mini (3.8B Q4_K_M)', '다운로드 크기': '~2.7 GB', '대략적 속도(참고용)': '~8–12 tok/초' },
          { 'iPhone 등급 (연도, RAM)': 'iPhone 13 Pro / 14 Pro / Pro Max (6 GB)', '권장 모델': 'Qwen3 1.7B 또는 SmolLM 2 1.7B (Q4_K_M)', '다운로드 크기': '~1.1 GB', '대략적 속도(참고용)': '~15–20 tok/초' },
          { 'iPhone 등급 (연도, RAM)': 'iPhone 14 / 14 Plus / 15 / 15 Plus (6 GB)', '권장 모델': 'Qwen3 1.7B 또는 SmolLM 2 1.7B (Q4_K_M)', '다운로드 크기': '~1.1 GB', '대략적 속도(참고용)': '~12–18 tok/초' },
          { 'iPhone 등급 (연도, RAM)': 'iPhone 13 / 12 / SE / 이전 (4 GB)', '권장 모델': '기기 내 LLM에 권장하지 않음', '다운로드 크기': '—', '대략적 속도(참고용)': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '6 GB의 구형 iPhone에는 Qwen3 1.7B 또는 SmolLM 2 1.7B (HuggingFace)가 2026년에 합리적인 선택이며, Qwen3.5 2B와 Gemma 4 E2B는 같은 크기 등급의 더 새로운 옵션입니다. 이 정도로 작은 모델은 일관성 있는 짧은 응답(1–3 단락)을 만들지만 다단계 추론에는 어려움을 겪습니다. 6 GB iPhone에는 Phi-4 Mini를 설치하지 마십시오 — 이론상 들어가지만 다른 메모리 압박이 생기면 iOS가 앱을 종료합니다. 표의 속도 수치는 Phi-4 Mini, Llama 3.2 3B, Qwen3 1.7B에 대한 반올림된 참고용 범위이며 앱 버전이나 테스트 날짜에 연결되어 있지 않고, Gemma 4와 Qwen3.5는 여기에 수치가 없습니다. Apple 제품 페이지에는 iPhone RAM이 명시되어 있지 않습니다. 여기의 RAM 수치는 널리 알려진 사양이며, 18 Pro의 ~12 GB는 언론 보도에서 가져온 수치입니다.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: '배터리 소모와 열 제한',
        content:
          '**iPhone의 기기 내 LLM 추론은 CPU/GPU 부하가 크고 열을 발생시킵니다.** 대략적인 기준(참고용이며 PromptQuorum의 통제된 측정이 아님)으로, 활성 추론은 ~3–5 W를 소비하며, 지속적인 생성은 칩을 제한하고 iPhone 16 Pro에서 시간당 대략 20–30%의 배터리를 소모할 수 있습니다.',
        image: '/images/iphone-llm-apps-battery-thermal-en.svg',
        imageCaption:
          'iPhone 로컬 LLM 배터리·발열 가이드: 전력 소모, 열 제한, 냉각 팁',
        items: [
          '**배터리 소모 (활성 채팅, 참고용):** Phi-4 Mini를 실행하는 iPhone 16 Pro에서 시간당 ~20–30%.',
          '**지속적인 생성은 열 제한을 유발할 수 있습니다.** 칩이 뜨거워지면 iOS가 클록 속도를 낮추어 토큰/초가 떨어집니다. 시작 시점과 속도 저하 폭은 폰, 케이스, 충전 여부, 실내 온도에 따라 달라지며 PromptQuorum은 이를 측정하지 않았습니다. 폰을 식히면 속도가 복원됩니다.',
          '**완화 방법:** 긴 추론 세션 중에는 열 방출을 위해 iPhone을 (손이나 주머니가 아니라) 단단한 표면 위에 앞면을 위로 놓으십시오. 패시브 방열 케이스가 도움이 되지만 짧은 상호작용에는 거의 필요하지 않습니다.',
          '**유휴 소모:** 생성 후 채팅 앱을 백그라운드에 열어 두면 RAM은 할당된 채로 남지만 추론은 실행되지 않으므로 배터리 영향은 미미합니다. 앱을 완전히 종료하면 ~3 GB의 RAM이 회수됩니다.',
          '**추론 중 MagSafe 충전:** 생성 중 충전은 어떤 iPhone에서든 발열을 높일 수 있으며 iPhone 15 Pro에서 특히 그렇습니다. 기기가 따뜻해지면 충전이나 생성을 멈추거나 충전은 나중에 하십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '직사광선 아래나 뜨거운 차 안에서 iPhone의 기기 내 LLM 추론을 실행하지 마십시오. 직사광선 아래나 뜨거운 차 안에서는 칩이 열 한계에 더 빨리 도달해 제한이 걸리고 Apple의 "iPhone을 식혀야 합니다" 경고가 나타날 수 있습니다. 보통 앱이 종료되기보다 생성 속도가 느려집니다.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts, Siri 및 사이드로딩',
        content:
          '**iOS 통합은 앱마다 크게 다릅니다.** Private LLM과 Locally AI는 모두 Shortcuts를 지원합니다. PocketPal AI, Google AI Edge Gallery, MLC Chat은 README나 App Store 목록에 Shortcuts나 Siri 통합이 언급되지 않은 독립형 채팅 앱입니다.',
        image: '/images/iphone-llm-apps-ios-integration-en.svg',
        imageCaption:
          'iPhone 로컬 LLM 앱의 iOS 연동: Shortcuts, Siri, 오픈소스, App Store 지원 여부',
        items: [
          '**Private LLM**은 개발사에 따르면 Shortcuts 및 Siri와 연동되며 x-callback-url을 지원하는 앱으로 응답을 전달할 수 있습니다. 여기 있는 채팅 앱 중 가장 iOS 네이티브합니다.',
          '**Locally AI**는 무료로 Shortcuts 작업을 제공하며, Foundation Models 프레임워크 통합을 통해 Shortcut을 Apple 자체의 기기 내 파운데이션 모델로 보낼 수 있습니다 — Siri 음성 트리거는 없지만 비용 없이 Shortcuts 자동화를 사용할 수 있습니다.',
          '**PocketPal AI**는 독립형 채팅 앱입니다 — README에 Shortcuts 작업이나 Siri 통합이 언급되어 있지 않습니다. 앱을 열어 채팅합니다.',
          '**Google AI Edge Gallery**는 독립형 채팅 및 데모 앱입니다 — App Store 목록에 Shortcuts 작업이나 Siri 통합이 언급되어 있지 않습니다.',
          '**MLC Chat**은 MLC LLM 프로젝트의 참조 앱입니다 — iOS 통합은 최소한이고 2024년 9월 이후 iPhone 업데이트가 없습니다. Shortcuts 작업이 없습니다.',
          '**LLM Farm**은 현재 App Store에 없으며, 소스에서 빌드해도 Shortcuts 작업이 없습니다.',
          '**Apple Intelligence**는 "모델 사용" 작업 (iOS 18.4+, iOS 26에서 Foundation Models 프레임워크와 함께 확장)으로 iOS Shortcuts와 통합됩니다. 이는 프롬프트를 기기 내 모델, Private Cloud Compute, 또는 ChatGPT(설정 가능)로 보냅니다. 기기 내 출력은 다른 Shortcuts 작업에 연결할 수 있습니다.',
          '**사이드로딩:** PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat은 App Store에 있으며 사이드로딩이나 탈옥이 필요 없습니다. Apple Intelligence는 iOS에 내장되어 있습니다. LLM Farm만 예외로, 이제 설치하려면 Xcode에서 소스로 빌드해야 합니다. EU에는 DMA에 따른 대안 앱 마켓플레이스가 있지만 어떤 앱을 제공할지는 각 개발자가 정하므로, 개발자의 공식 채널에서 설치하십시오. 이 앱들 중 대안 마켓플레이스가 필요한 것은 없습니다.',
        ],
        promptExamples: [
          {
            label: 'Private LLM Shortcut: 선택한 텍스트 요약',
            text: '1. 작업: "선택한 텍스트 가져오기" (iOS 공유 시트 입력).\n2. 작업: Private LLM 텍스트 생성 (Private LLM 앱의 Shortcuts 작업에서) → 프롬프트: "다음 텍스트를 세 개의 글머리 기호로 요약해 줘: [선택한 텍스트]" → 앱에 설치된 모델을 선택.\n3. 작업: "결과 보기" 또는 "클립보드에 복사".\n공유 시트에 추가하면 모든 앱의 선택한 텍스트에서 완전히 오프라인으로 실행할 수 있습니다. 작업 이름은 개발사의 설명을 따른 것이며 앱 버전에 따라 다를 수 있습니다.',
          },
          {
            label: 'Apple Intelligence Shortcut: 어조에 맞게 다시 쓰기',
            text: '1. 작업: "클립보드 가져오기".\n2. 작업: "모델 사용" → 모델: 기기 내 → 프롬프트: "이것을 전문적이고 간결한 어조로 다시 써 줘: [클립보드]".\n3. 작업: "클립보드에 복사".\n잠금 화면 위젯에 지정하면 복사한 모든 내용을 한 번의 탭으로 다시 쓸 수 있습니다.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '운전이나 요리 중 핸즈프리로 사용하려면, Private LLM은 개발사가 Siri 통합을 명시하는 이 가이드의 유일한 채팅 앱이며, 이를 통해 폰을 만지지 않고 사용할 수 있습니다. Apple Intelligence는 Siri를 통한 음성을 지원하지만 시스템 작업 (작문, 요약, 앱 작업)에만 해당하며 채팅 앱처럼 일반 Q&A를 제공하지는 않습니다.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '**iPhone의 RAM이 허용하는 것보다 큰 모델을 설치하는 것.** 8 GB iPhone에서 7B 모델은 채팅에 쓰기에는 너무 느린 경우가 많고 iOS가 다른 앱을 위해 메모리를 회수할 때 종료될 수 있습니다. 먼저 PocketPal AI의 내장 벤치마크로 측정해 보십시오. iPhone 등급에 권장되는 모델을 따르십시오 (8 GB 기기에는 3B–4B, 6 GB 기기에는 1.7B).',
          '**기기 내 모델에 클라우드 AI 수준의 품질을 기대하는 것.** Phi-4 Mini (3.8B)는 크기에 비해 인상적이지만 GPT-5.5는 아닙니다. 채팅, 요약, 초안 작성, 간단한 Q&A에 사용하고, 다단계 추론, 복잡한 코드 생성, 섬세한 창작 글쓰기에는 사용하지 마십시오.',
          '**직사광선이나 뜨거운 차 안에서 추론을 실행하는 것.** 열 제한이 빠르게 시작될 수 있고, 생성이 느려지며 "iPhone을 식혀야 합니다" 경고가 나타날 수 있습니다. 실온에서 추론을 실행하십시오.',
          '**각각 3 GB 모델이 있는 채팅 앱을 3개 이상 설치해 두는 것.** 중복 모델로 ~10 GB의 저장 공간을 소모하게 됩니다. 앱 하나와 모델 하나를 고르고, 필요하다고 확신할 때까지 나머지는 삭제하십시오.',
          '**Apple Intelligence에는 채팅 인터페이스가 전혀 없다고 가정하는 것.** iOS 18까지는 맞았지만, iOS 26부터 Locally AI 같은 앱은 Foundation Models 프레임워크를 통해 Apple의 기기 내 모델 앞에 실제 채팅 창을 둘 수 있습니다. 시스템 기능 (작문 도구, 스마트 답장)은 여전히 그 자체로 채팅 UI가 아닙니다.',
          '**App Store에서 LLM Farm을 찾는 것.** 현재 App Store에 없습니다 (PromptQuorum의 LLM Farm 리뷰는 삭제 시점을 2025년 8월로 봅니다). App Store에서 검색하면 시간만 낭비하게 됩니다. 같은 무료/유연 용도에는 PocketPal AI를 사용하고, 노출된 mirostat 제어가 꼭 필요하다면 Xcode에서 LLM Farm을 소스로 빌드하십시오.',
          '**"무료"가 결제가 없다는 뜻이라고 가정하는 것.** PocketPal AI는 로컬 채팅은 무료이지만 선택적 프리미엄 콘텐츠(Pals와 "PocketPal Plus")를 판매하고, Locally AI와 Google AI Edge Gallery는 인앱 구매가 없다고 표시되어 있습니다. 설치 전에 목록의 인앱 구매 항목을 확인하십시오 (PocketPal AI의 미국 App Store 목록은 2026-10-23에 18세 이상 등급으로 표시되었습니다).',
          '**속도 표만 보고 모델을 판단하는 것.** 이 가이드의 토큰/초 범위는 참고용이며 Gemma 4, Qwen3.5 같은 더 새로운 모델은 포함되어 있지 않습니다. 이미 다운로드한 모델을 삭제하기 전에 PocketPal AI의 벤치마크에서 두 모델에 같은 프롬프트를 실행해 보십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (README, MIT 라이선스, 2026년 10월 19일 릴리스 v1.20.1) 및 [App Store 목록](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (버전 기록, 인앱 구매, 연령 등급, iOS 15.1+). 2026-10-23 확인.',
          'Private LLM — [App Store 목록](https://apps.apple.com/app/apple-store/id6448106860) (v1.9.16, $4.99, iOS 17.0+, 가족 공유) 및 [privatellm.app](https://privatellm.app) (Siri 및 Shortcuts, 모델 목록, iPhone·iPad·Mac 한 번 구매). 2026-10-23 확인.',
          'Locally AI — [App Store 목록](https://apps.apple.com/us/app/locally-ai/id6741426692) (v1.66.0, 무료, Element Labs Inc, iOS 18.1+; LM Studio 팀) 및 [lmstudio.ai/locally](https://lmstudio.ai/locally) (LM Link). 2026-10-23 확인.',
          'Google AI Edge Gallery — [App Store 목록](https://apps.apple.com/app/id6749645337) (v1.0.13, 무료, iOS 17.0+, Gemma 4, 에이전트 스킬, 사고 모드), [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) 및 Google의 [LiteRT-LM Gemma 4 페이지](https://developers.google.com/edge/litert-lm/models/gemma-4) (E2B/E4B 파일 크기와 메모리, 벤더 수치). 2026-10-23 확인.',
          'MLC Chat / MLC LLM 프로젝트 — [App Store 목록](https://apps.apple.com/us/app/mlc-chat/id6448482937) (v1.6, 2024년 9월 27일, 버전 기록), [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) 및 [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) (엔진 저장소). 2026-10-23 확인.',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (README: TestFlight와 App Store에서 "일시적으로 이용 불가"; 2025년 1월 27일 릴리스 1.4.3; 2026년 1월 30일 마지막 푸시) 및 2025년 8월 삭제에 관한 [PromptQuorum LLM Farm 리뷰](/ko/power-local-llm/llm-farm-review). 2026-10-23 확인.',
          'Apple Intelligence 및 기기 내 파운데이션 모델 — [Apple Machine Learning Research](https://machinelearning.apple.com), [What\'s new in iOS 27 개발자 가이드](https://developer.apple.com/wwdc26/guides/ios/) (Foundation Models 프레임워크), [iPhone 18 Pro 페이지](https://www.apple.com/iphone-18-pro/) (A20 Pro, 듀얼 16코어 Neural Engine, Siri AI 베타, RAM 수치 없음) 및 [iPhone Duo 페이지](https://www.apple.com/iphone-duo/). 2026-10-23 확인.',
          'Qwen3.5 소형 시리즈 (0.8B–9B, 2026년 3월) — [Artificial Analysis 요약](https://artificialanalysis.ai/articles/qwen3-5-small-models).',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'iPhone이 정말 7B 모델을 실행할 수 있습니까?',
            a: '기술적으로는 iPhone 15 Pro 이상 (8 GB RAM)에서 가능하지만 쓸 만한 속도는 아닙니다. iPhone 16 Pro에서 7B Q4 모델은 편안한 채팅에 쓰기에는 너무 느린 경우가 많습니다(참고용). 또한 다른 앱이 메모리를 필요로 하면 iOS가 앱을 종료하는 경향이 있습니다. 일상적인 기기 내 채팅에는 3B–4B 모델 (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B)을 사용하십시오. 7B 이상의 품질이 필요하다면 Ollama를 실행하는 홈 Mac이나 PC에 원격으로 연결하십시오.',
          },
          {
            q: '로컬 AI가 iPhone 배터리를 소모합니까?',
            a: '예 — 추론을 활발히 실행하면 보통 ~3–5 W를 소비하며, 대략적인 참고 기준으로 iPhone 16 Pro에서 시간당 약 20–30%의 배터리를 소모할 수 있습니다. 가끔 채팅하는 정도(프롬프트 몇 개)라면 영향이 작습니다. 장시간 사용(긴 대화, 여러 요약 작업)에는 iPhone을 충전기에 연결해 두십시오. 추론이 실행되지 않고 모델이 RAM에만 있을 때의 배터리 영향은 무시할 만합니다.',
          },
          {
            q: '로컬 AI를 사용하면 iPhone이 뜨거워집니까?',
            a: '예, 특히 긴 연속 생성 중에 그럴 수 있습니다. 칩이 뜨거워지면 iOS가 클록 속도를 제한하여 토큰/초가 떨어집니다. 시작 시점과 폭은 폰, 케이스, 충전 여부, 실내 온도에 따라 다르며 PromptQuorum은 이를 측정하지 않았습니다. 줄이려면: 긴 세션 중 iPhone을 (손이 아닌) 단단한 표면 위에 앞면을 위로 놓고, 직사광선을 피하십시오. 짧은 상호작용에서는 보통 눈에 띄는 열이 거의 없습니다.',
          },
          {
            q: '로컬 모델과 Siri를 사용할 수 있습니까?',
            a: '예, Private LLM ($4.99 일회 구매)을 사용하면 됩니다. 개발사에 따르면 Siri 및 Shortcuts와 직접 연동되어, 프롬프트를 인터넷 연결 없이 기기 내 모델로 보낼 수 있습니다. PocketPal AI, Locally AI, Google AI Edge Gallery, MLC Chat은 Siri 음성 통합을 언급하지 않지만, Locally AI는 Shortcuts 자동화를 지원합니다. Apple Intelligence는 Siri와 통합되지만 시스템 작업 (작문, 요약, 앱 작업)에만 해당하며 일반 Q&A에는 해당하지 않습니다. Siri AI는 별도의 iOS 27 베타 기능으로, 영어를 먼저 지원하며 처음에는 EU에서 이용할 수 없습니다.',
          },
          {
            q: '이 앱들이 iPhone SE나 구형 iPhone에서 작동합니까?',
            a: '제한적입니다. iPhone SE와 iPhone 13 / 12 (4 GB RAM)는 2026년 기기 내 LLM의 실용적 기준 미만입니다. iPhone 14 / 15 (비Pro, 6 GB RAM)는 1.7B 모델 (Qwen3 1.7B, SmolLM 2 1.7B)을 실행할 수 있지만 3B 이상은 아닙니다. iPhone 13 Pro와 14 Pro (6 GB RAM)도 1.7B에 머물며, iPhone 15 Pro (8 GB RAM)는 Phi-4 Mini 같은 3B 모델을 대략 8–12 토큰/초(참고용)로 실행할 수 있습니다. 구형 iPhone에는 홈 Mac이나 PC에 원격으로 연결하는 것이 더 나은 방법입니다.',
          },
          {
            q: 'iPhone과 Mac 사이에 채팅 기록을 동기화할 수 있습니까?',
            a: 'PocketPal AI, Private LLM, Google AI Edge Gallery, MLC Chat에서는 안 됩니다 — 채팅 기록은 기기별로 로컬에 저장되며 iCloud 동기화가 없습니다. Private LLM과 Locally AI는 Mac에서도 네이티브로 실행되지만, iPhone과 Mac 사본 사이에 기록이 동기화되지는 않습니다. 기기 간 채팅 기록을 위한 실용적인 방법은 홈 Mac에서 Open WebUI를 실행하고 iPhone과 Mac 브라우저에서 접속하는 것입니다 — Open WebUI는 채팅 기록을 서버 측에 저장합니다.',
          },
          {
            q: '이 앱들을 App Store 밖에서도 이용할 수 있습니까?',
            a: 'PocketPal AI는 오픈 소스이며 Xcode로 소스에서 빌드할 수 있지만 App Store 빌드가 표준 배포입니다. LLM Farm은 이제 소스 빌드가 필요한 예외로, 현재 App Store와 TestFlight에 없습니다 (README: "일시적으로 이용 불가"). Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat은 App Store에서만 제공됩니다. EU에는 DMA에 따른 대안 앱 마켓플레이스가 있지만 어떤 앱을 제공할지는 각 개발자가 정하므로, 개발자의 공식 채널에서 설치하십시오. 이 앱들 중 대안 마켓플레이스가 필요한 것은 없습니다.',
          },
          {
            q: '탈옥이 필요한 앱이 있습니까?',
            a: '아니요. PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat, Apple Intelligence 모두 기본 iOS에서 실행됩니다. Xcode에서 LLM Farm을 소스로 빌드하는 것도 탈옥이 필요 없습니다 — 탈옥 익스플로잇이 아니라 표준 개발자 사이드로딩을 사용합니다. 이 앱들 중 어느 것에도 탈옥은 필요하지 않으며 권장하지도 않습니다.',
          },
          {
            q: 'iOS Shortcuts에서 로컬 AI를 사용할 수 있습니까?',
            a: '예, Private LLM (Shortcuts 작업), Locally AI (무료 Shortcuts 작업), 또는 Apple Intelligence ("모델 사용" 작업, iOS 18.4+, iOS 26에서 확장)를 통해 가능합니다. PocketPal AI, Google AI Edge Gallery, MLC Chat은 Shortcuts 작업을 언급하지 않습니다. 여기서 비교한 앱 중 Locally AI는 Shortcuts 지원과 Apple 자체 기기 내 모델 접근을 모두 명시하는 유일한 무료 옵션입니다.',
          },
          {
            q: '로컬 AI는 iPhone의 ChatGPT 앱과 어떻게 비교됩니까?',
            a: '기기 내 모델 (Phi-4 Mini, Llama 3.2 3B)은 복잡한 추론, 폭넓은 세계 지식, 멀티모달 작업에서는 여전히 최첨단 클라우드 모델에 크게 뒤처지지만, 단순한 질의에서는 (네트워크 왕복이 없어) 더 빠르며 각 앱의 문서에 따르면 채팅 내용이 기기에 머뭅니다. 솔직한 절충안은 이렇습니다: 일상적이고 비공개적인 작업에는 로컬 AI, 가끔의 어려운 질문에는 ChatGPT 같은 클라우드 앱. 2026년에는 많은 사용자가 둘 다 두고 질의마다 선택합니다.',
          },
          {
            q: 'LLM Farm이 App Store에 없어도 여전히 안전하게 사용할 수 있습니까?',
            a: '소스 코드는 GitHub에 공개되어 있고 2026년까지 이슈 활동이 있지만, 마지막 릴리스(1.4.3)는 2025년 1월 27일이고 마지막 코드 푸시는 2026년 1월 30일이므로 유지보수되지 않을 수 있습니다. 소스에서 빌드하여 사이드로딩하면 Apple의 App Store 심사 절차도 더 이상 거치지 않습니다. mirostat 샘플링 제어가 꼭 필요하지 않다면, PocketPal AI가 Apple의 표준 앱 심사를 받으며 App Store에 남아 동일한 무료/유연/오픈 소스 용도를 다룹니다.',
          },
          {
            q: '이 iPhone 앱 중 무료인 것은 무엇입니까?',
            a: 'PocketPal AI는 무료(MIT 라이선스)이며 프리미엄 Pals와 "PocketPal Plus"는 선택적 인앱 구매입니다. Locally AI와 Google AI Edge Gallery는 무료이며 인앱 구매가 표시되어 있지 않습니다. MLC Chat은 무료입니다. LLM Farm은 무료이지만 소스에서 빌드해야 합니다. Private LLM은 $4.99 일회 구매이며 인앱 구매가 표시되어 있지 않습니다. Apple Intelligence는 iOS에 내장되어 있습니다. 가격은 2026-10-23에 미국 App Store에서 확인했으며 국가에 따라 다를 수 있습니다.',
          },
          {
            q: 'iPhone Duo나 iPhone 18 Pro도 로컬 LLM을 오프라인으로 실행할 수 있습니까?',
            a: '원칙적으로 가능합니다: 둘 다 Apple의 A20 Pro 칩을 사용하며, 이 가이드의 앱은 iOS 최소 요구 사항을 충족하는 모든 iPhone에서 실행됩니다. 모델 크기를 정하는 것은 RAM인데, Apple의 iPhone 18 Pro와 iPhone Duo 페이지에는 RAM 수치가 명시되어 있지 않으며, 언론 보도는 iPhone 18 Pro를 12 GB로 보지만 확인되지 않았습니다. PromptQuorum에는 두 폰 모두 측정된 속도가 없습니다. PocketPal AI를 설치하고 내장 벤치마크를 실행하면 사용 중인 폰이 실제로 어떻게 동작하는지 확인할 수 있습니다.',
          },
          {
            q: '이 앱들이 iPad에서도 작동합니까?',
            a: '대부분 그렇습니다. PocketPal AI (iPadOS 15.1+, README 기준 완전한 iPad 지원), Private LLM (iPadOS 17.0+), Locally AI (iPadOS 18.1+)는 iPad 지원을 표시합니다. Google AI Edge Gallery 목록은 iOS 17.0 이상을 요구하므로 사용 중인 iPad는 해당 페이지에서 확인하십시오. iPhone과 마찬가지로 어떤 모델이 들어가는지는 RAM이 결정합니다. iPad 관련 조언은 [태블릿에서 AI 실행 방법](/ko/power-local-llm/run-ai-on-tablet-ipad-android)을 참조하십시오.',
          },
          {
            q: 'LLM Farm은 왜 App Store에서 사라졌습니까?',
            a: '프로젝트 README는 "앱은 TestFlight와 App Store에서 일시적으로 이용할 수 없습니다"라고 밝힙니다. PromptQuorum은 삭제에 대한 공개된 이유를 찾지 못했으므로, 다른 곳에서 읽은 설명은 확인되지 않은 것입니다 ([LLM Farm 리뷰](/ko/power-local-llm/llm-farm-review) 참조). 소스 코드는 여전히 공개되어 있지만 마지막 릴리스는 2025년 1월 27일의 1.4.3입니다. App Store에서 설치할 수 있는 무료 대안으로는 PocketPal AI나 Locally AI를 사용하십시오.',
          },
          {
            q: 'iPhone용 Ollama 앱이 있습니까?',
            a: 'Ollama의 다운로드 페이지에는 macOS, Windows, Linux가 나열되어 있고 iPhone 앱은 없습니다. iPhone에서 Ollama나 LM Studio 모델을 사용하려면 Mac이나 PC에서 서버를 실행하고 클라이언트 앱에서 연결하십시오. Locally AI는 LM Studio가 종단 간 암호화 연결이라고 설명하는 LM Link로 Mac의 LM Studio에 연결할 수 있습니다. 폰 안에서 완전히 실행되는 모델에는 이 가이드의 앱을 사용하십시오.',
          },
          {
            q: 'Gemma 4와 Phi-4 Mini 중 무엇을 다운로드해야 합니까?',
            a: 'PromptQuorum에는 iPhone에서 두 모델을 직접 비교한 벤치마크가 없습니다. 도움이 되는 사실: Gemma 4 E2B와 E4B는 Google의 폰 크기 모델이며 (Google AI Edge Gallery에서 LiteRT-LM 파일로 약 2.58 GB와 3.65 GB; Locally AI도 Gemma 4를 제공), Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB)는 이 가이드의 속도 수치에 사용된 모델입니다. 8 GB iPhone에서는 둘 다 직접 쓰는 프롬프트로 시도해 보고 PocketPal AI 벤치마크에서 토큰/초를 비교하십시오. 6 GB iPhone에서는 1.7B급 모델을 유지하십시오.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 무료 오픈 소스 기본 선택에 대한 PromptQuorum의 전체 리뷰.',
          '[Private LLM 리뷰](/ko/power-local-llm/private-llm-review) — Siri와 Shortcuts를 지원하는 유료 선택.',
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — LM Studio 팀의 무료 MLX 앱.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — Google의 무료 Gemma 4 앱.',
          '[MLC Chat 리뷰](/ko/power-local-llm/mlc-chat-review) 및 [LLM Farm 리뷰](/ko/power-local-llm/llm-farm-review) — 이 가이드에서 오래됨으로 표시한 두 앱.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 동등 항목을 다루는 형제 기사 (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[태블릿에서 AI 실행 방법: iPad 및 Android (2026)](/ko/power-local-llm/run-ai-on-tablet-ipad-android) — 태블릿을 가진 독자를 위한 인접 플랫폼 가이드.',
          '[2026년 모바일 최고의 LLM: Phi-4 Mini vs Gemma 3 vs SmolLM](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 이 앱들에서 무엇을 실행할지 고르기 위한 모델 측 보완 기사.',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 모바일뿐 아니라 모든 하드웨어 수준을 다루는 더 넓은 모델 가이드.',
          '[폰에서 로컬 음성 비서 만들기: Whisper + 로컬 LLM](/ko/power-local-llm/voice-assistant-local-mobile-offline) — 오프라인 음성 입력/출력으로 이 앱들을 확장.',
          '[저사양 PC를 위한 최고의 로컬 AI 앱](/ko/power-local-llm/best-local-ai-app-low-end-pc) — 더 강력한 홈 머신에 원격으로 연결하려는 사용자를 위한 데스크톱 대안.',
          '[Enclave AI 리뷰 2026](/ko/power-local-llm/enclave-ai-review) — 문서 상호작용과 Siri/Shortcuts 자동화를 갖춘 iPhone, iPad, Mac용 기기 내 AI 비서 앱 Enclave AI를 자세히 살펴봅니다.',
          '[2026년 로컬 LLM 소프트웨어 디렉토리](/ko/directory) — 모든 플랫폼에서 알 가치가 있는 모든 로컬 LLM 도구의 디렉토리.',
          '[Melhores Apps LLM Local para iPhone 2026 (Português)](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — 이 가이드의 포르투갈어 버전',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-23',
    last_full_refresh: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'Os melhores apps de IA local para iPhone em 2026 (execute LLMs sem WiFi)',
    seoTitle: 'Melhores apps de IA local para iPhone em 2026 (offline)',
    intro:
      'Seis opções para iPhone executam LLMs reais totalmente no aparelho em 2026: PocketPal AI, Private LLM, Locally AI (da LM Studio), Google AI Edge Gallery, MLC Chat e Apple Intelligence (integrado ao sistema). Todas funcionam sem WiFi depois que o modelo é baixado. Este guia compara as opções por custo, biblioteca de modelos, integração com o iOS, privacidade e situação de manutenção — com velocidades indicativas no iPhone 16 Pro e no iPhone 17 Pro e um guia de RAM que agora inclui o iPhone 18 Pro — e explica por que o LLM Farm saiu do ranking.',
    metaDescription:
      'Seis jeitos de rodar LLMs no iPhone em 2026: PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery e MLC Chat. Custo, privacidade e guia de RAM.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-pt.webp',
    twitterDescription:
      'IA local no iPhone em 2026: PocketPal AI (padrão gratuito), Private LLM ($4.99, Siri + Shortcuts), Locally AI (LM Studio, MLX), Google AI Edge Gallery (Gemma 4). Todos funcionam offline depois do download.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 4B',
    ],
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM não divulgada pela Apple)',
      'iPhone Duo (A20 Pro, RAM não divulgada pela Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB RAM)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 16e (A18, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'Usuários de iPhone que querem executar IA de forma privada no aparelho sem assinatura na nuvem, incluindo viajantes, pessoas preocupadas com privacidade e desenvolvedores que exploram a inferência no dispositivo.',
    readTime: '12 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'app LLM local iPhone',
    targetKeywords: [
      'melhor app llm local iphone',
      'executar llm no iphone sem internet',
      'pocketpal ai iphone',
      'private llm app',
      'mlc chat iphone',
      'llm farm ios',
      'iphone ia sem wifi',
      'apps de ia local pra iphone',
      'google ai edge gallery ios',
      'locally ai vs pocketpal',
      'ollama pra ios',
    ],
    leadAnswerBlock:
      '**Para a maioria dos usuários de iPhone em 2026, instale o PocketPal AI pela App Store e baixe um modelo pequeno como o Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Ele é gratuito (com compras opcionais dentro do app para conteúdo premium), de código aberto (MIT) e funciona no iPhone 14 Pro e modelos mais recentes (qualquer iPhone com 6 GB+ de RAM), gerando cerca de 10–15 tokens/seg (indicativo) no iPhone 16 Pro no chat do dia a dia. Para integração com a Siri e o Shortcuts, o Private LLM é a opção paga ($4.99 pagamento único, iPhone, iPad e Mac). O Locally AI — desenvolvido pela equipe da LM Studio — é o app gratuito baseado em Apple MLX, com suporte a Shortcuts e acesso ao modelo de base no dispositivo da Apple. O Google AI Edge Gallery é o app gratuito do Google para os modelos Gemma 4, com agent skills e modo de raciocínio. Modelos pequenos mais novos — Gemma 4 E2B/E4B e Qwen3.5 — também estão disponíveis nesses apps (veja Modelos conforme o modelo de iPhone). O MLC Chat continua sendo o app de referência para aceleração Metal, mas a versão para iPhone não é atualizada desde setembro de 2024. O LLM Farm atualmente não está na App Store nem no TestFlight (o README diz "temporariamente indisponível") e só pode ser instalado compilando o código-fonte. O Apple Intelligence também executa modelos no aparelho, mas é integrado ao sistema e não é um app de chat — ele complementa esses apps em vez de competir com eles.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor app de LLM local para iPhone em 2026?',
        answer:
          'O PocketPal AI é a opção gratuita recomendada para a maioria dos usuários de iPhone: de código aberto (MIT), instalação pela App Store, compatível com qualquer modelo GGUF do Hugging Face, e executa o Phi-4 Mini (3.8B) a cerca de 10–15 tokens/seg (indicativo) no iPhone 16 Pro. O Private LLM é a opção paga ($4.99 pagamento único, iPhone + iPad + Mac) com integração com Shortcuts e Siri. O Locally AI, desenvolvido pela equipe da LM Studio, é a opção gratuita com Apple MLX, suporte a Shortcuts e acesso ao modelo de base no dispositivo da Apple. O Google AI Edge Gallery é o app gratuito do Google para o Gemma 4. O MLC Chat tem aceleração Metal, mas a versão para iPhone está parada desde setembro de 2024. O Apple Intelligence também executa modelos no aparelho, mas é integrado ao sistema e complementa esses apps em vez de substituí-los.',
        bullets: [
          'PocketPal AI — gratuito, código aberto (MIT), App Store, v1.20.1 (19 out 2026). A opção padrão recomendada para a maioria dos usuários. Compatível com qualquer modelo GGUF. Compras opcionais dentro do app para conteúdo premium.',
          'Private LLM — $4.99 pagamento único (iPhone + iPad + Mac), v1.9.16 (14 set 2026). Opção paga. Integração com Shortcuts + Siri.',
          'Locally AI — gratuito, da equipe da LM Studio, v1.66.0 (15 out 2026). Motor Apple MLX, suporte a Shortcuts, acesso aos Apple Foundation Models.',
          'Google AI Edge Gallery — gratuito, do Google, v1.0.13 (8 out 2026). Gemma 4, agent skills, modo de raciocínio, entrada de imagem e áudio.',
          'MLC Chat — gratuito, projeto MLC LLM. Com aceleração Metal, mas o app para iPhone não recebe atualização desde a v1.6 (27 set 2024) — trate como possivelmente sem manutenção.',
          'Apple Intelligence — integrado ao sistema, não é um app independente. Modelo de ~3B no aparelho usado pelo Mail, Mensagens e Notas.',
          'Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — funciona a ~10–15 tokens/seg. Opções mais novas: Gemma 4 E2B/E4B, Qwen3.5 4B.',
          'iPhones mais antigos (14 Pro): Qwen3 1.7B ou SmolLM 2 1.7B — cabe em 6 GB de RAM e gera ~15–20 tokens/seg.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Qual app instalar primeiro no iPhone?', anchor: '#which-app' },
      { label: 'Tabela comparativa de apps para iPhone', anchor: '#comparison-table' },
      { label: 'PocketPal AI: opção gratuita e de código aberto', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: opção paga com integração ao iOS', anchor: '#private-llm' },
      { label: 'Locally AI: app MLX gratuito da LM Studio', anchor: '#locally-ai' },
      { label: 'Google AI Edge Gallery: app gratuito do Google com Gemma 4', anchor: '#google-ai-edge-gallery' },
      { label: 'MLC Chat: otimização para Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm: fora da App Store, código-fonte ainda disponível', anchor: '#llm-farm' },
      { label: 'Apple Intelligence: IA no aparelho integrada ao sistema', anchor: '#apple-intelligence' },
      { label: 'Modelos conforme o modelo de iPhone', anchor: '#models-by-tier' },
      { label: 'Consumo de bateria e limitação térmica', anchor: '#battery-heat' },
      { label: 'iOS Shortcuts, Siri e sideloading', anchor: '#ios-integration' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O PocketPal AI é a opção gratuita padrão recomendada.** Código aberto (MIT), instalação pela App Store, compatível com qualquer modelo GGUF do Hugging Face. O chat local não exige conta; os Pals premium e o "PocketPal Plus" são compras opcionais dentro do app. Executa o Phi-4 Mini a ~10–15 tokens/seg no iPhone 16 Pro. Ponto de partida recomendado para a maioria dos usuários de iPhone.',
          '**O Private LLM é a opção paga deste guia ($4.99 pagamento único, sem assinatura).** Uma única compra cobre iPhone, iPad e Mac, e o Compartilhamento em Família se estende a até seis pessoas. Biblioteca de modelos curada; segundo o desenvolvedor, ele se integra à Siri e ao Shortcuts.',
          '**O Locally AI é a alternativa gratuita baseada em MLX, desenvolvida pela equipe da LM Studio.** Executa modelos Llama, Gemma (incluindo o Gemma 4), Qwen e DeepSeek em Apple MLX, funciona com o iOS Shortcuts e pode expor o próprio modelo de base no dispositivo da Apple como interface de chat.',
          '**O Google AI Edge Gallery é o app gratuito do Google para o Gemma 4 no iPhone.** Modo de raciocínio, agent skills e entrada de imagem/áudio; os modelos rodam no formato LiteRT-LM, não em GGUF. O Google ainda descreve o app como em desenvolvimento ativo.',
          '**O MLC Chat tem aceleração Metal, mas está parado no iPhone.** A versão da App Store não é atualizada desde a v1.6, de 27 de setembro de 2024, então sua biblioteca de modelos é anterior ao Phi-4 Mini e ao Gemma 3. O motor MLC LLM em si continua ativo no GitHub.',
          '**O LLM Farm atualmente não está na App Store nem no TestFlight.** O próprio README o descreve como "temporariamente indisponível". Continua de código aberto e pode ser compilado pelo Xcode, mas a última versão foi a 1.4.3, em janeiro de 2025, e o último envio de código foi em 30 de janeiro de 2026.',
          '**O Apple Intelligence está no aparelho, mas não é um app independente.** O modelo de base de ~3B da Apple alimenta funções do sistema (Ferramentas de Escrita, Resposta Inteligente, Resumos de Notificações). Desde o iOS 26, apps de terceiros podem chamá-lo pelo framework Foundation Models, e o Shortcuts pode acioná-lo com a ação "Usar Modelo".',
          '**Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Gemma 4 E2B/E4B e Qwen3.5 4B são alternativas mais novas, ainda sem números de velocidade do PromptQuorum. iPhones mais antigos com 6 GB de RAM (iPhone 14 Pro): Qwen3 1.7B ou SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Apps comparados:** PocketPal AI, Private LLM, Locally AI (da LM Studio), Google AI Edge Gallery, MLC Chat, Apple Intelligence (sistema) — além do LLM Farm, atualmente fora da App Store (README: "temporariamente indisponível").',
          '**Últimas atualizações upstream (verificadas em 2026-10-23):** PocketPal AI v1.20.1 (19 out 2026) · Locally AI v1.66.0 (15 out 2026) · Google AI Edge Gallery v1.0.13 (8 out 2026) · Private LLM v1.9.16 (14 set 2026) · app MLC Chat para iPhone v1.6 (27 set 2024 — desatualizado) · LLM Farm versão 1.4.3 (27 jan 2025), último envio de código em 30 jan 2026 — desatualizado.',
          '**Aparelhos de referência para as velocidades:** iPhone 16 Pro (A18 Pro, 8 GB RAM) e iPhone 17 Pro (A19 Pro, 12 GB RAM). As velocidades são faixas indicativas, não um benchmark controlado do PromptQuorum. O iPhone 18 Pro, o 18 Pro Max e o iPhone Duo (A20 Pro) não têm números de velocidade aqui.',
          '**Motores de inferência:** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), MLC LLM com Metal (MLC Chat), Google LiteRT-LM (Google AI Edge Gallery), runtime proprietário no aparelho (Private LLM, Apple Intelligence).',
          '**iPhone mínimo para modelos 3B+:** iPhone 14 Pro (A16, 6 GB RAM) para 1.7B; qualquer iPhone de 8 GB+ (15 Pro, série 16, 16e, série 17, 18 Pro) para 3B–4B.',
          '**App gratuito recomendado:** PocketPal AI — App Store, código aberto, flexibilidade de modelos.',
          '**Opção paga:** Private LLM — $4.99 pagamento único (iPhone + iPad + Mac), suporte a Shortcuts + Siri.',
          '**Offline:** Os seis funcionam totalmente offline depois que o modelo é baixado; segundo o README ou a ficha de cada app, o chat no aparelho não faz chamadas à nuvem (o Apple Intelligence pode usar o Private Cloud Compute, se você ativar).',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Qual app instalar primeiro no iPhone?',
        content:
          '**Para a maioria dos usuários: PocketPal AI pela App Store e depois baixe o Phi-4 Mini (3.8B Q4_K_M) — ou um modelo pequeno mais novo, como o Gemma 4 E2B/E4B ou o Qwen3.5 4B.** Essa combinação funciona no iPhone 14 Pro e modelos mais recentes, não custa nada para conversar e dá resultados úteis para o chat do dia a dia, resumos e rascunhos rápidos. Escolha outro app só quando tiver uma necessidade específica que ele não cobre.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-pt.webp',
        imageCaption: 'Qual app de IA local instalar no iPhone: tabela de decisão do PocketPal AI gratuito ao Private LLM com Siri',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para a maioria dos usuários de iPhone em 2026, instale o PocketPal AI (grátis, App Store) e baixe o Phi-4 Mini ou um modelo pequeno mais novo, como o Gemma 4 E2B — ele cobre chat do dia a dia, resumos e rascunhos em qualquer iPhone com 6 GB+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Seis opções executam IA totalmente no seu iPhone em 2026. O PocketPal AI é o ponto de partida gratuito recomendado — instale, baixe uma única vez um arquivo de modelo de 2.7 GB e pronto: você tem um assistente de chat privado que funciona no trem sem WiFi. O Private LLM é a opção paga se você quer que a Siri converse com o modelo local. O Locally AI, da equipe da LM Studio, é a alternativa gratuita e moderna com suporte a Shortcuts, e o Google AI Edge Gallery é o app gratuito do Google para os modelos Gemma 4. A versão do MLC Chat para iPhone não é mais atualizada. O Apple Intelligence é integrado ao iOS, mas não é um app de chat. O PocketPal AI atende à maioria dos casos de uso.',
          },
        ],
        decisionBlock: {
          title: 'Decisão: qual app de IA local para iPhone?',
          localIf: [
            'Você quer uma IA de chat gratuita que funcione offline → PocketPal AI',
            'Você quer que a Siri converse com o seu modelo local → Private LLM',
            'Você quer um app MLX gratuito com Shortcuts e acesso aos Apple Foundation Models → Locally AI',
            'Você quer o Gemma 4 do próprio Google, com modo de raciocínio e agent skills → Google AI Edge Gallery',
            'Você quer experimentar a cadeia de ferramentas do MLC LLM e aceita uma versão para iPhone sem atualização desde setembro de 2024 → MLC Chat',
            'Você só precisa de ajuda de escrita no Mail / Mensagens / Notas → Apple Intelligence (integrado)',
          ],
          cloudIf: [
            'Você precisa de qualidade de modelo 70B+ (Llama 3.3 70B, nível GPT-5.5) → use a nuvem ou conecte-se remotamente a uma máquina em casa',
            'Você precisa especificamente de GPT-5.5, Claude Opus ou Gemini → apps na nuvem (não estão disponíveis localmente)',
            'Você precisa de visão em tempo real ou saída multimodal além de texto → nuvem (o multimodal no aparelho é limitado em 2026)',
          ],
          quick: [
            'Grátis + serve para a maioria: PocketPal AI',
            'Pago + integração nativa com o iOS: Private LLM',
            'Grátis + ecossistema LM Studio: Locally AI',
            'Grátis + Gemma 4 do Google: Google AI Edge Gallery',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Instale o PocketPal AI primeiro, mesmo que você pretenda pagar pelo Private LLM mais tarde. Use o PocketPal AI para testar se a inferência no aparelho, no seu modelo de iPhone, é rápida o bastante para o seu uso. Se for, decida se a integração com Shortcuts e Siri do Private LLM vale $4.99. Se não for, você descobriu isso sem gastar $4.99. O PocketPal AI também tem um benchmark integrado que mostra tokens/seg e memória no seu próprio iPhone — use-o em vez de confiar em qualquer tabela, inclusive a abaixo.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa de apps para iPhone',
        content:
          '**As seis opções se diferenciam em três eixos que importam à maioria dos usuários: custo, flexibilidade de modelos e integração com o iOS.** As diferenças de velocidade existem, mas são menores que a distância entre qualquer um desses apps e um LLM na nuvem. Preços e versões foram lidos nas fichas da App Store dos EUA e nas páginas dos projetos em 2026-10-23.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-pt.webp',
        imageCaption: 'Comparação de apps de LLM local para iPhone: custo, velocidade e integração do PocketPal AI, Private LLM e outros',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O PocketPal AI é a opção gratuita padrão recomendada, o Private LLM é a opção paga, o Locally AI é a opção MLX gratuita da equipe da LM Studio, o Google AI Edge Gallery é o app gratuito do Google para o Gemma 4, o MLC Chat está parado no iPhone e o Apple Intelligence é integrado ao sistema.',
          },
          {
            type: 'plain-terms',
            text: 'A escolha geralmente se resume a três perguntas: você quer pagar pela integração com a Siri (Private LLM), quer o ecossistema da LM Studio com Shortcuts de graça (Locally AI) ou quer o próprio Gemma 4 do Google, com modo de raciocínio (Google AI Edge Gallery)? Para todo o resto, o PocketPal AI é a opção padrão. Os números de velocidade da tabela são faixas indicativas para a quantização Q4_K_M — o padrão para inferência móvel em 2026 —, não um benchmark controlado.',
          },
        ],
        columns: ['App', 'Preço', 'Tokens/seg (Phi-4 Mini, 16 Pro)', 'Privacidade', 'Ideal para'],
        rows: [
          { 'App': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)', 'Preço': 'Grátis (MIT) + compras opcionais no app', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacidade': 'Chat no aparelho, sem conta (README)', 'Ideal para': 'Opção gratuita padrão para a maioria' },
          { 'App': '[Private LLM](https://privatellm.app)', 'Preço': '$4.99 pagamento único', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'Sem número', 'Privacidade': 'No aparelho; sem contas nem rastreamento (desenvolvedor)', 'Ideal para': 'Shortcuts + integração com a Siri' },
          { 'App': '[Locally AI](https://lmstudio.ai/locally)', 'Preço': 'Grátis (equipe LM Studio)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D — catálogo MLX (sem Phi-4)', 'Privacidade': 'No aparelho; sem coleta de dados (ficha)', 'Ideal para': 'MLX + Shortcuts, vínculo com LM Studio' },
          { 'App': '[Google AI Edge Gallery](https://apps.apple.com/app/id6749645337)', 'Preço': 'Grátis (Google)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D — LiteRT-LM, Gemma 4', 'Privacidade': 'No aparelho após baixar o modelo', 'Ideal para': 'Gemma 4, modo de raciocínio, agent skills' },
          { 'App': '[MLC Chat](https://llm.mlc.ai)', 'Preço': 'Grátis (código aberto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D — biblioteca anterior ao Phi-4', 'Privacidade': 'Inferência local (doc. do projeto; não verificado)', 'Ideal para': 'Quem usa o MLC LLM (app iOS parado)' },
          { 'App': '[LLM Farm](https://github.com/guinmoon/LLMFarm)', 'Preço': 'Grátis (compilar o código-fonte)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'Sem número', 'Privacidade': 'Inferência local (doc. do projeto; não verificado)', 'Ideal para': 'Desenvolvedores (fora da App Store, desatualizado)' },
          { 'App': '[Apple Intelligence](https://www.apple.com/apple-intelligence/)', 'Preço': 'Grátis (integrado ao iOS)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/A (função do sistema)', 'Privacidade': 'Local + Private Cloud Compute opcional', 'Ideal para': 'Ajuda no Mail, Mensagens, Notas' },
        ],
        note:
          '**Nota sobre Apple Neural Engine (ANE), Metal e MLX:** o PocketPal AI e o LLM Farm usam llama.cpp com Metal Performance Shaders para a inferência, que roda na GPU. O MLC Chat usa o MLC LLM com uma otimização Metal mais profunda, que o projeto MLC LLM descreve como mais rápida que os apps baseados em llama.cpp no mesmo hardware (afirmação do projeto; o PromptQuorum não mediu isso). O Locally AI usa o Apple MLX, o framework open source de arrays da própria Apple, que alcança eficiência de GPU semelhante no Apple Silicon. O Google AI Edge Gallery executa o Gemma 4 pelo runtime LiteRT-LM do Google. O Apple Intelligence usa o ANE especificamente para o modelo de sistema de ~3B, que é mais eficiente em energia, mas menos flexível que a inferência baseada em Metal. Desde o iOS 26, apps de terceiros podem chamar esse modelo de sistema pelo framework Foundation Models — o Locally AI faz exatamente isso —, mas modelos GGUF/MLX personalizados ainda não conseguem usar o ANE diretamente. A Apple afirma que o A20 Pro do iPhone 18 Pro tem um Neural Engine de 16 núcleos duplo, com o dobro do poder de computação de antes; essa é uma afirmação da Apple, e o PromptQuorum não mediu o que isso significa para esses apps.',
        callouts: [
          {
            type: 'tip',
            text: 'Os números de tokens/seg são faixas indicativas arredondadas, para orientação, não um benchmark controlado do PromptQuorum nem vinculados a uma versão do app ou a uma data de teste. Eles assumem a quantização Q4_K_M (o padrão para inferência móvel em 2026) e um iPhone ocioso, sem outros apps pesados abertos. Apps em segundo plano podem reduzir bastante o desempenho, e o iPhone 17 Pro normalmente é mais rápido que o iPhone 16 Pro. Meça o seu próprio aparelho com o benchmark integrado do PocketPal AI.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: opção gratuita e de código aberto',
        content:
          '**O PocketPal AI é o ponto de partida recomendado para a maioria dos usuários de iPhone em 2026.** É gratuito, de código aberto (MIT; GitHub: [a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)), está na App Store e é compatível com qualquer modelo GGUF do Hugging Face. O app usa llama.cpp por baixo, com otimizações para Apple Silicon. Análise completa: [Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
        items: [
          '**O que é:** um app para iOS/iPadOS e Android que executa modelos GGUF localmente com llama.cpp, publicado pela Gooya UG. O README informa que prompts, respostas e documentos não são enviados a servidores externos; o chat não exige conta.',
          '**Versão e última atualização:** v1.20.1, lançada em 19 de outubro de 2026 ([release no GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases)); a ficha da App Store mostra a mesma versão. Ritmo de atualização: aproximadamente a cada uma ou duas semanas — sem aviso de inatividade.',
          '**Instalação:** App Store → "PocketPal AI". Download gratuito com compras opcionais dentro do app (Pals premium e "PocketPal Plus"). Exige iOS/iPadOS 15.1 ou superior; é a RAM, e não a versão do iOS, que define o tamanho de modelo utilizável. Desde a v1.20.0 o app também oferece Entrar com a Apple (opcional) e exclusão de conta.',
          '**Adicionar um modelo:** no app, toque em Modelos → "Adicionar do Hugging Face" → pesquise (p. ex. "phi-4-mini-instruct-Q4_K_M") → toque para baixar. O modelo fica no armazenamento local do app (~2.7 GB para o Phi-4 Mini Q4).',
          '**Velocidade de geração (iPhone 16 Pro, indicativa):** Phi-4 Mini ~10–15 tok/seg, Llama 3.2 3B ~12–18 tok/seg, Gemma 3 4B ~7–10 tok/seg, Qwen3 1.7B ~18–24 tok/seg. Não são medições controladas do PromptQuorum — use o benchmark integrado, que mostra tokens/seg e memória no seu próprio iPhone.',
          '**Outros recursos:** Pals (assistentes personalizados), texto para fala no aparelho, Talents (calculadora e ferramentas de data/hora para modelos capazes) e um navegador de modelos do Hugging Face que aceita modelos restritos com token de acesso.',
          '**Ideal para:** quem quer um app de chat gratuito, instalável pela App Store, sem conta e compatível com qualquer modelo GGUF publicado pela comunidade.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O seletor de modelos do PocketPal AI tem um filtro "Recomendados" que, segundo a documentação do app, mostra os modelos que cabem na RAM do seu aparelho. Confira-o no seu próprio iPhone — um modelo grande demais pode fazer o iOS encerrar o app no meio da resposta.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: opção paga com integração ao iOS',
        content:
          '**O Private LLM é a opção paga deste guia para iPhone ($4.99 pagamento único, sem assinatura).** Está disponível só na App Store e vem com uma biblioteca curada de modelos otimizados. Seu diferencial é a integração com o iOS: o desenvolvedor afirma que ele se conecta diretamente à Siri e ao app Shortcuts. Análise completa: [Análise do Private LLM](/pt/power-local-llm/private-llm-review).',
        items: [
          '**O que é:** um app iOS pago com biblioteca de modelos curada e integração profunda com o iOS. Usa um runtime proprietário no aparelho, otimizado para Apple Silicon.',
          '**Instalação:** App Store → "Private LLM - Local AI Chat" (Numen Technologies Limited). Compra única de $4.99 (sem assinatura; a ficha não mostra compras dentro do app). Exige iOS/iPadOS 17.0 ou superior em um chip A12 Bionic ou mais novo.',
          '**Versão e última atualização:** v1.9.16, lançada em 14 de setembro de 2026 (histórico de versões da App Store); a versão anterior foi a 1.9.15, de 9 de julho de 2026. As versões saem a cada dois ou três meses — dentro do limite de três meses, então sem aviso de inatividade.',
          '**Biblioteca de modelos curada:** o [privatellm.app](https://privatellm.app) anuncia mais de 140 modelos locais para iPhone, iPad e Mac, citando famílias como Llama, Qwen3, Gemma 3 e Phi 4; o subconjunto que cabe em um iPhone é menor. Menos flexibilidade que o PocketPal AI, mas os modelos já vêm otimizados para o runtime do app.',
          '**Shortcuts:** segundo o desenvolvedor, o Private LLM se conecta ao app Shortcuts e pode repassar respostas a outros apps que suportam a especificação x-callback-url. Útil para acionar a IA local por um botão na tela de início ou por etiquetas NFC.',
          '**Integração com a Siri:** o desenvolvedor lista a integração com a Siri; um prompt encaminhado ao modelo no aparelho funciona sem conexão à internet (a internet só é necessária para o primeiro download do modelo).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Segundo o privatellm.app, uma única compra de $4.99 cobre iPhone, iPad e Mac, e a ficha da App Store diz que até seis familiares podem usar com o Compartilhamento em Família. Não há assinatura nem compras dentro do app listadas — o preço exibido é o custo total. O desenvolvedor afirma que não há contas, rastreamento nem logs. O preço está em dólares, conforme a App Store dos EUA; o valor em reais na sua loja pode ser diferente.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: app MLX gratuito da LM Studio',
        content:
          '**O Locally AI é um app de chat gratuito e focado em privacidade, desenvolvido pela equipe da LM Studio (listado em nome da Element Labs Inc) e construído sobre o framework MLX da própria Apple, em vez de llama.cpp.** É o único app aqui que expõe o modelo de base no dispositivo da Apple como interface de chat. Análise completa: [Análise do Locally AI](/pt/power-local-llm/locally-ai-review).',
        items: [
          '**O que é:** um app iOS/iPadOS/macOS que usa o Apple MLX para a inferência, desenvolvido pela equipe por trás do app de desktop LM Studio.',
          '**Instalação:** App Store → "Locally AI". Grátis, sem compras dentro do app listadas, sem conta (segundo a ficha), funciona offline.',
          '**Versão e última atualização:** v1.66.0, lançada em 15 de outubro de 2026 (histórico de versões da App Store); cerca de uma versão por mês em 2026 — sem aviso de inatividade.',
          '**Biblioteca de modelos:** Llama 3.2, Gemma 2/3/4, Qwen 3 e 3.5, DeepSeek, LFM 2.5, Bonsai, Ministral 3 e Apple Foundation Models — um catálogo mais amplo e atual que o do MLC Chat.',
          '**iOS Shortcuts:** expõe uma ação de Shortcuts, igualando de graça o suporte de automação do Private LLM.',
          '**LM Link:** um recurso opcional que se conecta ao LM Studio rodando em um Mac pelo que a LM Studio descreve como um link criptografado de ponta a ponta, permitindo que o app do iPhone recorra a um modelo maior em uma máquina em casa quando necessário.',
          '**Requisitos:** iOS/iPadOS 18.1 ou superior (macOS 26.0 ou superior para a versão de Mac). Os ganhos de eficiência do Apple Silicon aparecem mais a partir do iPhone 15 Pro.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O Locally AI é o único app deste guia que consegue colocar o próprio modelo de base no dispositivo da Apple atrás de uma janela de chat comum — útil para testar o que o modelo do Apple Intelligence faz sem procurar nos menus das Ferramentas de Escrita. Para a flexibilidade de modelos de terceiros em GGUF, o PocketPal AI ainda tem o catálogo maior.',
          },
        ],
      },
      googleAIEdgeGallery: {
        id: 'google-ai-edge-gallery',
        title: 'Google AI Edge Gallery: app gratuito do Google com Gemma 4',
        content:
          '**O Google AI Edge Gallery é o app gratuito do Google para executar os modelos Gemma 4 no celular, e está disponível na App Store do iPhone.** A ficha mostra chat com IA com modo de raciocínio, agent skills, entrada de imagem e áudio, Prompt Lab e benchmark de modelos. O Google diz que o app está em desenvolvimento ativo. Análise completa: [Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review).',
        items: [
          '**O que é:** o app de demonstração de IA no aparelho do Google, construído sobre o runtime LiteRT-LM do Google. Gratuito; sem compras dentro do app listadas.',
          '**Instalação:** App Store → "Google AI Edge Gallery". Exige iOS 17.0 ou superior. Os modelos são baixados separadamente dentro do app.',
          '**Versão e última atualização:** v1.0.13, lançada em 8 de outubro de 2026 (histórico de versões da App Store). O suporte ao Gemma 4 chegou na v1.0.2, em 3 de abril de 2026 — sem aviso de inatividade.',
          '**Modelos:** a família Gemma 4 (E2B e E4B são as variantes do tamanho de um celular; o Google lista os arquivos LiteRT-LM em cerca de 2.58 GB e 3.65 GB), EmbeddingGemma 2 e FunctionGemma 270M. Modelos no formato LiteRT-LM também podem ser importados do Hugging Face.',
          '**Recursos:** Modo de Raciocínio (só nos modelos Gemma 4), Agent Skills (por exemplo, consulta à Wikipédia e mapas, além de skills da comunidade), Ask Image, Audio Scribe, Prompt Lab e benchmark de modelos.',
          '**Limites:** só modelos LiteRT-LM, não GGUF nem MLX; a ficha não menciona Shortcuts nem Siri; o PromptQuorum não tem números de velocidade para ele.',
          '**Ideal para:** quem quer o próprio Gemma 4 do Google, com modo de raciocínio visível e ferramentas de agente, sem custo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O Google informa um pico de memória de cerca de 607 MB na CPU e 1,450 MB na GPU para o Gemma 4 E2B em um iPhone 17 Pro (números do fabricante, segundo a página do Google sobre o Gemma 4 no LiteRT-LM; não remedidos pelo PromptQuorum). O E2B é o ponto de partida prático para a maioria dos celulares; o E4B serve para iPhones de 8 GB+.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: otimização para Apple Silicon',
        content:
          '**Aviso de inatividade: o app MLC Chat para iPhone não recebe atualização desde a versão 1.6, de 27 de setembro de 2024 (mais de 13 meses), então pode estar sem manutenção — verifique antes de depender dele.** O repositório do motor MLC LLM continua ativo no GitHub (última atividade em 6 de outubro de 2026). O MLC Chat é gratuito, de código aberto e executa modelos compilados pela cadeia de ferramentas do MLC LLM em vez de GGUF padrão, e seu catálogo não acompanhou o do PocketPal AI nem o do Locally AI. Análise completa: [Análise do MLC Chat](/pt/power-local-llm/mlc-chat-review).',
        items: [
          '**O que é:** o app iOS de referência do projeto MLC LLM, que demonstra a inferência acelerada por Metal do MLC LLM no Apple Silicon.',
          '**Instalação:** App Store → "MLC Chat". Grátis. Exige iOS/iPadOS 17.0 ou superior.',
          '**Versão e última atualização:** v1.6, lançada em 27 de setembro de 2024 (histórico de versões da App Store; adicionou o Llama 3.2 3B). Antes: a 1.5 adicionou o Gemma 2 2B (agosto de 2024) e a 1.4 adicionou Phi-3, Mistral v3 e Qwen2 (junho de 2024). Última atualização para iPhone há mais de 13 meses — aviso de inatividade ativado.',
          '**Velocidade (afirmação do projeto, não medida aqui):** o projeto MLC LLM descreve seu motor acelerado por Metal como mais rápido que apps baseados em llama.cpp no mesmo iPhone — mas a lista de modelos do próprio app é anterior às escolhas atuais, como o Phi-4 Mini e o Gemma 3, então essa vantagem não pode ser testada com os modelos recomendados de 2026 sem uma versão compilada por você.',
          '**Biblioteca de modelos:** limitada aos modelos que o projeto MLC LLM compilou antes de o app ficar parado — Llama 3.2 3B, Gemma 2 2B, Phi-3, Mistral v3, Qwen2 e outros lançamentos semelhantes de 2024. Nem todo GGUF do Hugging Face funciona, e nenhum modelo pequeno da geração atual vem na versão da App Store.',
          '**Ideal para:** desenvolvedores que já investiram na cadeia de ferramentas do MLC LLM e aceitam compilar o próprio modelo, ou que precisam especificamente de um dos modelos de antes de 2025 que ele já traz.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Como a versão da App Store do MLC Chat não recebe atualização desde 27 de setembro de 2024, não espere ver Phi-4 Mini, Qwen3 ou Gemma 3 no seletor. Se você quer modelos da geração atual com eficiência de GPU no nível do Metal hoje, o Locally AI (Apple MLX), o PocketPal AI (llama.cpp com Metal Performance Shaders) ou o Google AI Edge Gallery (Gemma 4) são as alternativas com manutenção ativa.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: fora da App Store, código-fonte ainda disponível',
        content:
          '**Aviso de inatividade: a última versão do LLM Farm (1.4.3) foi lançada em 27 de janeiro de 2025 e o último envio de código foi em 30 de janeiro de 2026 — quase nove meses sem atualização —, então ele pode estar sem manutenção.** A análise do PromptQuorum sobre o projeto data a remoção da App Store de agosto de 2025; o próprio README no GitHub descreve o app como "temporariamente indisponível" na App Store e no TestFlight. O projeto (GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)) continua de código aberto e teve atividade de issues no GitHub até outubro de 2026, mas novos usuários não conseguem mais instalá-lo pela App Store; é preciso compilá-lo a partir do código-fonte pelo Xcode (README: macOS 13+ e iOS 16+). Análise completa: [Análise do LLM Farm](/pt/power-local-llm/llm-farm-review).',
        items: [
          '**O que é:** um app iOS do desenvolvedor @guinmoon que executa modelos GGUF com amplas opções de configuração, antes distribuído pela App Store.',
          '**Disponibilidade atual:** não pode ser instalado pela App Store nem pelo TestFlight na data desta atualização. O código-fonte continua público e compilável.',
          '**Compilar a partir do código-fonte:** clone o repositório, abra no Xcode e compile para um aparelho com uma conta Apple Developer gratuita ou paga — o fluxo padrão de sideloading para qualquer app iOS de código aberto sem ficha na App Store.',
          '**Configuração exposta (depois de compilar):** temperatura, top-p, top-k, amostragem mirostat, penalidade de repetição, prompt de sistema por modelo, escolha do template de chat, tamanho da janela de contexto.',
          '**Ideal para:** desenvolvedores à vontade para compilar um app a partir do código-fonte no Xcode e que querem especificamente os controles de amostragem mirostat. Todos os demais devem usar o PocketPal AI ou o Locally AI, ambos totalmente instaláveis pela App Store e gratuitos.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não espere que um link da App Store para o LLM Farm funcione — trate qualquer link desse tipo encontrado em outro lugar como desatualizado. Compilar a partir do código-fonte exige o Xcode e noções básicas de assinatura de código no iOS. Se isso for mais trabalho do que você quer ter, o PocketPal AI cobre o mesmo caso de uso de "app de chat gratuito e flexível" sem sair da App Store.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: IA no aparelho integrada ao sistema',
        content:
          '**O Apple Intelligence executa o modelo de base de ~3B da própria Apple no aparelho, no iPhone 15 Pro e modelos mais recentes (a geração do iPhone 15 Pro, com 8 GB de RAM segundo a imprensa; a Apple não divulga a RAM).** Por padrão ele não é um app de chat — alimenta funções do sistema no Mail (Resposta Inteligente), Mensagens (ferramentas de escrita), Notas (resumos) e Resumos de Notificações. Desde o iOS 26, o framework Foundation Models da Apple permite que desenvolvedores terceiros chamem esse mesmo modelo no aparelho diretamente, e apps como o Locally AI o usam para oferecer uma interface de chat de verdade. O iOS 27 amplia o framework: o guia para desenvolvedores da Apple diz que os apps podem usar qualquer modelo de linguagem que siga o protocolo de modelos de linguagem do framework, incluindo os modelos da própria Apple e modelos na nuvem.',
        items: [
          '**Onde está:** integrado ao iOS 18+ (framework Foundation Models adicionado no iOS 26). Ative em Ajustes → Apple Intelligence e Siri.',
          '**Requisito de hardware:** iPhone 15 Pro / 15 Pro Max, série iPhone 16, iPhone 16e, série iPhone 17 e, em 2026, iPhone 18 Pro, 18 Pro Max e iPhone Duo (A20 Pro). Os iPhones anteriores (14 e abaixo) não suportam o Apple Intelligence. Confira a lista de compatibilidade atual da Apple para o iOS 27 antes de comprar.',
          '**Siri AI (iOS 27):** a Apple descreve a Siri AI como disponível em beta no iOS 27, com lançamento primeiro em inglês, inicialmente indisponível na UE no iOS e sujeita a limites diários de uso em alguns recursos que rodam em servidor. Ela é separada dos apps de chat no aparelho deste guia.',
          '**Funções no aparelho:** Ferramentas de Escrita (reescrever, resumir, revisar) em qualquer campo de texto, Resposta Inteligente no Mail e no Mensagens, Resumos de Notificações, geração de Genmoji.',
          '**Framework Foundation Models (iOS 26+):** uma API Swift nativa que dá aos desenvolvedores acesso direto ao mesmo modelo no aparelho com poucas linhas de código — é assim que o Locally AI o oferece como opção de chat, e como a ação "Usar Modelo" do Shortcuts pode encaminhar um prompt a ele, ao Private Cloud Compute ou ao ChatGPT.',
          '**Private Cloud Compute:** para tarefas além da capacidade do modelo no aparelho, o Apple Intelligence recorre ao Private Cloud Compute (PCC) — servidores operados pela Apple que executam modelos maiores, que, segundo a Apple, não retêm dados do usuário. O PCC é opcional e pode ser desativado.',
          '**Relação com os apps de chat:** o Apple Intelligence é um complemento, não um substituto. Suas funções de sistema cuidam de reescrever e resumir textos dentro dos apps do iOS; PocketPal AI, Private LLM, Locally AI e MLC Chat oferecem uma interface de chat dedicada para perguntas livres — e o Locally AI agora pode colocar o modelo da própria Apple atrás desse mesmo tipo de interface.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se o Apple Intelligence é a sua única necessidade (reescrever e-mails, resumir notificações), você não precisa de um app de chat à parte. Se você quer fazer ao modelo perguntas como "explique o tunelamento quântico em termos simples" ou "monte um plano de projeto para X", instale um app de chat — um dedicado como o PocketPal AI, ou o Locally AI, que pode colocar o modelo da própria Apple atrás de uma janela de chat.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modelos conforme o modelo de iPhone',
        content:
          '**É a RAM do iPhone que define o limite de tamanho do modelo, e não a geração do chip.** Um iPhone de 6 GB (14 Pro, 15) executa modelos 1.7B com folga; um iPhone de 8 GB+ (15 Pro, série 16, 16e, série 17) executa modelos 3B–4B com folga e modelos 7B devagar. Modelos pequenos mais novos que valem o teste ao lado do Phi-4 Mini: Gemma 4 E2B e E4B (Google, abril de 2026; cerca de 2.58 GB e 3.65 GB como arquivos LiteRT-LM) e a série pequena Qwen3.5 (Alibaba, março de 2026; 0.8B, 2B, 4B e 9B, Apache 2.0 segundo o resumo da Artificial Analysis). O PromptQuorum não tem números de velocidade para eles; o Locally AI e o Google AI Edge Gallery já os trazem. Para o panorama mais amplo de modelos em todo tipo de hardware (não só celular), veja [Os melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-en.svg',
        imageCaption: 'Modelos de LLM local recomendados por faixa de RAM do iPhone, de 4 GB até o iPhone 17 Pro com 12 GB',
        columns: ['Nível de iPhone (Ano, RAM)', 'Modelo recomendado', 'Tamanho de download', 'Velocidade (indicativa)'],
        rows: [
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 18 Pro / Pro Max (2026, ~12 GB segundo a imprensa)', 'Modelo recomendado': 'Comece como no 17 Pro; RAM não divulgada pela Apple', 'Tamanho de download': '~2.5–3.7 GB', 'Velocidade (indicativa)': 'Sem número' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 17 Pro / 17 Pro Max (2025, 12 GB)', 'Modelo recomendado': 'Phi-4 Mini / Llama 3.2 3B / Gemma 4 E4B', 'Tamanho de download': '~2.5–3.7 GB', 'Velocidade (indicativa)': '~13–20 tok/seg (Phi-4 Mini)' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone série 16 / 16e / 17 (2024–2025, 8 GB)', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M) ou Gemma 4 E2B', 'Tamanho de download': '~2.6–2.7 GB', 'Velocidade (indicativa)': '~10–15 tok/seg (Phi-4 Mini)' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 GB)', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M)', 'Tamanho de download': '~2.7 GB', 'Velocidade (indicativa)': '~8–12 tok/seg' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 13 Pro / 14 Pro / Pro Max (6 GB)', 'Modelo recomendado': 'Qwen3 1.7B ou SmolLM 2 1.7B (Q4_K_M)', 'Tamanho de download': '~1.1 GB', 'Velocidade (indicativa)': '~15–20 tok/seg' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 14 / 14 Plus / 15 / 15 Plus (6 GB)', 'Modelo recomendado': 'Qwen3 1.7B ou SmolLM 2 1.7B (Q4_K_M)', 'Tamanho de download': '~1.1 GB', 'Velocidade (indicativa)': '~12–18 tok/seg' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 13 / 12 / SE / anteriores (4 GB)', 'Modelo recomendado': 'Não recomendado para LLM no aparelho', 'Tamanho de download': '—', 'Velocidade (indicativa)': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para iPhones mais antigos de 6 GB, o Qwen3 1.7B ou o SmolLM 2 1.7B (HuggingFace) são escolhas sensatas em 2026; o Qwen3.5 2B e o Gemma 4 E2B são opções mais novas na mesma faixa de tamanho. Modelos tão pequenos geram respostas curtas coerentes (1–3 parágrafos), mas têm dificuldade com raciocínio em várias etapas. Não instale o Phi-4 Mini em um iPhone de 6 GB — nominalmente ele cabe, mas o iOS vai encerrar o app com qualquer pressão de memória. Os números de velocidade da tabela são faixas indicativas arredondadas para o Phi-4 Mini, o Llama 3.2 3B e o Qwen3 1.7B, sem vínculo com uma versão do app ou data de teste; Gemma 4 e Qwen3.5 não têm números aqui. As páginas de produto da Apple não informam a RAM dos iPhones: os valores de RAM aqui são especificações amplamente divulgadas, e os ~12 GB do 18 Pro vêm de reportagens da imprensa.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'Consumo de bateria e limitação térmica',
        content:
          '**A inferência de LLM no iPhone exige muito da CPU/GPU e gera calor.** Como referência aproximada (indicativa, não uma medição controlada do PromptQuorum), a inferência ativa consome ~3–5 W; a geração contínua limita o desempenho do chip e pode esgotar a bateria em cerca de 20–30% por hora no iPhone 16 Pro.',
        image: '/images/iphone-llm-apps-battery-thermal-en.svg',
        imageCaption: 'Guia de bateria e calor para LLMs locais no iPhone: consumo, limitação térmica e dicas de resfriamento',
        items: [
          '**Consumo de bateria (chat ativo, indicativo):** ~20–30% por hora no iPhone 16 Pro executando o Phi-4 Mini.',
          '**A geração contínua pode acionar a limitação térmica.** Quando o chip esquenta, o iOS reduz o clock e os tokens/seg caem. Quando isso começa e quanta velocidade você perde depende do aparelho, da capinha, do carregamento e da temperatura ambiente; o PromptQuorum não mediu isso. Deixar o celular esfriar restaura a velocidade.',
          '**Como reduzir:** deixe o iPhone com a tela para cima sobre uma superfície dura (não na mão nem no bolso) durante sessões longas de inferência para facilitar a dissipação do calor. Uma capinha com dissipador passivo ajuda, mas raramente é necessária em interações curtas.',
          '**Consumo fantasma:** se você deixar um app de chat aberto em segundo plano depois da geração, a RAM continua alocada, mas nenhuma inferência roda — o impacto na bateria é mínimo. Fechar o app por completo libera os ~3 GB de RAM.',
          '**Carregamento MagSafe durante a inferência:** carregar o aparelho durante a geração pode aumentar o calor em qualquer iPhone, e mais ainda no iPhone 15 Pro; se o celular esquentar, pause o carregamento ou a geração, ou carregue depois.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não rode inferência de LLM no iPhone sob sol direto nem dentro de um carro quente. Sob sol direto ou dentro de um carro quente, o chip pode atingir os limites térmicos mais cedo, o que pode ativar a limitação de desempenho e o aviso "O iPhone precisa esfriar" da Apple. Normalmente a geração fica mais lenta, em vez de o app fechar.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts, Siri e sideloading',
        content:
          '**A integração com o iOS varia bastante conforme o app.** O Private LLM e o Locally AI suportam o Shortcuts; o PocketPal AI, o Google AI Edge Gallery e o MLC Chat são apps de chat independentes, sem integração com Shortcuts ou Siri mencionada no README ou na ficha da App Store.',
        image: '/images/iphone-llm-apps-ios-integration-en.svg',
        imageCaption: 'Integração com o iOS dos apps de LLM local para iPhone: suporte a Shortcuts, Siri, código aberto e instalação pela App Store',
        items: [
          '**O Private LLM** se conecta ao Shortcuts e à Siri, segundo o desenvolvedor, e pode repassar respostas a apps que suportam x-callback-url. É o mais nativo do iOS entre os apps de chat aqui.',
          '**O Locally AI** expõe uma ação de Shortcuts de graça e pode encaminhar um atalho ao modelo de base no dispositivo da Apple por meio da integração com o framework Foundation Models — sem comando de voz pela Siri, mas com automação por Shortcuts sem pagar.',
          '**O PocketPal AI** é um app de chat independente — o README não menciona ação de Shortcuts nem integração com a Siri. Você abre o app e conversa.',
          '**O Google AI Edge Gallery** é um app independente de chat e demonstração — a ficha da App Store não menciona ação de Shortcuts nem integração com a Siri.',
          '**O MLC Chat** é um app de referência do projeto MLC LLM — integração mínima com o iOS e nenhuma atualização para iPhone desde setembro de 2024. Sem ação de Shortcuts.',
          '**O LLM Farm** atualmente não está na App Store e, quando compilado a partir do código-fonte, também não tem ação de Shortcuts.',
          '**O Apple Intelligence** se integra ao iOS Shortcuts pela ação "Usar Modelo" (iOS 18.4+, ampliada no iOS 26 junto com o framework Foundation Models). Ela encaminha um prompt ao modelo no aparelho, ao Private Cloud Compute ou ao ChatGPT (configurável). A saída no aparelho pode ser encadeada em outras ações do Shortcuts.',
          '**Sideloading:** PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery e MLC Chat estão na App Store e não exigem sideloading nem jailbreak; o Apple Intelligence é integrado ao iOS. O LLM Farm é a exceção — instalá-lo agora exige compilar o código-fonte no Xcode. Na UE existem lojas de apps alternativas sob o DMA, mas quais apps elas oferecem fica a critério de cada desenvolvedor; por isso, instale pelo canal oficial do desenvolvedor — nenhum desses apps exige uma loja alternativa.',
        ],
        promptExamples: [
          {
            label: 'Atalho do Private LLM: resumir o texto selecionado',
            text: '1. Ação: "Obter Texto Selecionado" (entrada pela Folha de Compartilhamento do iOS).\n2. Ação: geração de texto do Private LLM (nas ações de Shortcuts do app Private LLM) → Prompt: "Resuma o texto a seguir em três tópicos: [Texto Selecionado]" → escolha um modelo instalado no app.\n3. Ação: "Mostrar Resultado" ou "Copiar para a Área de Transferência".\nAdicione à Folha de Compartilhamento para rodar sobre qualquer texto selecionado em qualquer app, totalmente offline. Os nomes das ações seguem a descrição do desenvolvedor e podem variar conforme a versão do app.',
          },
          {
            label: 'Atalho do Apple Intelligence: reescrever o tom',
            text: '1. Ação: "Obter Área de Transferência".\n2. Ação: "Usar Modelo" → Modelo: No Aparelho → Prompt: "Reescreva isto em um tom profissional e conciso: [Área de Transferência]".\n3. Ação: "Copiar para a Área de Transferência".\nAtribua a um widget da Tela Bloqueada para reescrever com um toque qualquer coisa que você copiar.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para uso com as mãos livres ao dirigir ou cozinhar, a integração com a Siri do Private LLM é o único app de chat deste guia cujo desenvolvedor lista integração com a Siri, o que permite usá-lo sem tocar no celular. O Apple Intelligence suporta voz pela Siri, mas só para tarefas do sistema (escrever, resumir, ações de app) — ele não oferece perguntas e respostas gerais como os apps de chat.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Instalar um modelo maior do que a RAM do seu iPhone aguenta.** Um modelo 7B em um iPhone de 8 GB costuma ser lento demais para chat e pode ser encerrado pelo iOS quando ele retoma a memória para outro app; meça antes com o benchmark integrado do PocketPal AI. Fique com o modelo recomendado para o seu nível de iPhone (3B–4B para aparelhos de 8 GB, 1.7B para os de 6 GB).',
          '**Esperar a qualidade da IA na nuvem dos modelos no aparelho.** O Phi-4 Mini (3.8B) impressiona para o tamanho, mas não é o GPT-5.5. Use-o para chat, resumos, rascunhos e perguntas rápidas — não para raciocínio em várias etapas, geração de código complexo ou escrita criativa cheia de nuances.',
          '**Rodar inferência sob sol direto ou dentro de um carro quente.** A limitação térmica pode entrar rapidamente, a geração fica mais lenta e pode aparecer o aviso "O iPhone precisa esfriar". Rode a inferência em temperatura ambiente.',
          '**Deixar 3 ou mais apps de chat instalados, cada um com modelos de 3 GB.** Você vai gastar ~10 GB de armazenamento com modelos duplicados. Escolha um app e um modelo; desinstale os outros até ter certeza de que precisa deles.',
          '**Achar que o Apple Intelligence não tem interface de chat nenhuma.** Isso valia até o iOS 18, mas desde o iOS 26 apps como o Locally AI conseguem colocar o modelo no aparelho da Apple atrás de uma janela de chat de verdade, pelo framework Foundation Models. As funções de sistema (Ferramentas de Escrita, Resposta Inteligente) continuam não sendo uma interface de chat por si só.',
          '**Procurar o LLM Farm na App Store.** Ele atualmente não está na App Store (a análise do LLM Farm do PromptQuorum data a remoção de agosto de 2025). Procurar por ele na App Store é perda de tempo; use o PocketPal AI para o mesmo uso gratuito e flexível, ou compile o LLM Farm a partir do código-fonte no Xcode se precisar especificamente dos controles de mirostat.',
          '**Achar que "grátis" significa sem compras.** O PocketPal AI é gratuito para chat local, mas vende conteúdo premium opcional (Pals e "PocketPal Plus"), enquanto o Locally AI e o Google AI Edge Gallery não listam compras dentro do app. Confira a seção de compras dentro do app na ficha antes de instalar (a ficha do PocketPal AI na App Store dos EUA mostrava classificação etária 18+ em 2026-10-23).',
          '**Julgar um modelo só por uma tabela de velocidade.** As faixas de tokens/seg deste guia são indicativas, e modelos mais novos, como o Gemma 4 e o Qwen3.5, não estão nelas. Rode o mesmo prompt em dois modelos no benchmark do PocketPal AI antes de apagar o que você já baixou.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (README, licença MIT, release v1.20.1 de 19 out 2026) e a [ficha da App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (histórico de versões, compras dentro do app, classificação etária, iOS 15.1+). Lido em 2026-10-23.',
          'Private LLM — [ficha da App Store](https://apps.apple.com/app/apple-store/id6448106860) (v1.9.16, $4.99, iOS 17.0+, Compartilhamento em Família) e [privatellm.app](https://privatellm.app) (Siri e Shortcuts, lista de modelos, uma compra para iPhone, iPad e Mac). Lido em 2026-10-23.',
          'Locally AI — [ficha da App Store](https://apps.apple.com/us/app/locally-ai/id6741426692) (v1.66.0, grátis, Element Labs Inc, iOS 18.1+; equipe da LM Studio) e [lmstudio.ai/locally](https://lmstudio.ai/locally) (LM Link). Lido em 2026-10-23.',
          'Google AI Edge Gallery — [ficha da App Store](https://apps.apple.com/app/id6749645337) (v1.0.13, grátis, iOS 17.0+, Gemma 4, Agent Skills, Modo de Raciocínio), [github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) e a [página do Google sobre o Gemma 4 no LiteRT-LM](https://developers.google.com/edge/litert-lm/models/gemma-4) (tamanhos de arquivo e memória do E2B/E4B, números do fabricante). Lido em 2026-10-23.',
          'MLC Chat / projeto MLC LLM — [ficha da App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) (v1.6, 27 set 2024, histórico de versões), [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) e [github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) (repositório do motor). Lido em 2026-10-23.',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (README: "temporariamente indisponível" no TestFlight e na App Store; release 1.4.3 de 27 jan 2025; último envio em 30 jan 2026) e a [análise do LLM Farm pelo PromptQuorum](/pt/power-local-llm/llm-farm-review) sobre a remoção em agosto de 2025. Lido em 2026-10-23.',
          'Apple Intelligence e modelos de base no aparelho — [Apple Machine Learning Research](https://machinelearning.apple.com), o [guia de novidades do iOS 27 para desenvolvedores](https://developer.apple.com/wwdc26/guides/ios/) (framework Foundation Models) e a [página do iPhone 18 Pro](https://www.apple.com/iphone-18-pro/) (A20 Pro, Neural Engine de 16 núcleos duplo, beta da Siri AI, sem valor de RAM) e a [página do iPhone Duo](https://www.apple.com/iphone-duo/). Lido em 2026-10-23.',
          'Série pequena Qwen3.5 (0.8B–9B, março de 2026) — [resumo da Artificial Analysis](https://artificialanalysis.ai/articles/qwen3-5-small-models).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O iPhone consegue mesmo rodar um modelo 7B?',
            a: 'Tecnicamente sim, no iPhone 15 Pro e modelos mais recentes (8 GB de RAM), mas não a uma velocidade utilizável. Um modelo 7B Q4 no iPhone 16 Pro costuma ser lento demais para um chat confortável (indicativo). O iOS também tende a encerrar o app quando outros apps precisam de memória. Use modelos 3B–4B (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) para o chat no aparelho do dia a dia. Para qualidade de 7B+, conecte-se remotamente a um Mac ou PC em casa rodando o Ollama.',
          },
          {
            q: 'A IA local gasta a bateria do meu iPhone?',
            a: 'Sim — a inferência ativa normalmente consome ~3–5 W e, como referência aproximada e indicativa, pode esgotar a bateria em cerca de 20–30% por hora no iPhone 16 Pro. Para uso ocasional (alguns prompts), o impacto é pequeno. Para uso contínuo (conversa longa, várias tarefas de resumo), deixe o iPhone na tomada. O modelo parado na RAM, sem inferência rodando, tem impacto desprezível na bateria.',
          },
          {
            q: 'Meu iPhone vai esquentar usando IA local?',
            a: 'Sim, pode esquentar, principalmente em geração contínua longa. O iOS reduz o clock quando o chip esquenta, o que diminui os tokens/seg; quando e quanto isso acontece varia conforme o aparelho, a capinha, o carregamento e a temperatura ambiente, e o PromptQuorum não mediu isso. Para minimizar isso: deixe o iPhone com a tela para cima sobre uma superfície dura (não na mão) em sessões longas e evite o sol direto. Interações curtas costumam causar pouco calor perceptível.',
          },
          {
            q: 'Dá para usar a Siri com um modelo local?',
            a: 'Sim, com o Private LLM ($4.99 pagamento único). O desenvolvedor afirma que ele se conecta diretamente à Siri e ao Shortcuts, então um prompt pode ser encaminhado ao modelo no aparelho sem conexão à internet. PocketPal AI, Locally AI, Google AI Edge Gallery e MLC Chat não mencionam integração de voz com a Siri, embora o Locally AI suporte automação por Shortcuts. O Apple Intelligence se integra à Siri, mas só para tarefas do sistema (escrever, resumir, ações de app), não para perguntas e respostas gerais; a Siri AI é um recurso beta separado do iOS 27, primeiro em inglês e inicialmente fora da UE.',
          },
          {
            q: 'Esses apps funcionam no iPhone SE ou em iPhones mais antigos?',
            a: 'Com limitações. O iPhone SE e o iPhone 13 / 12 (4 GB de RAM) estão abaixo do limite prático para LLMs no aparelho em 2026. O iPhone 14 / 15 (não Pro, 6 GB de RAM) consegue rodar modelos 1.7B (Qwen3 1.7B, SmolLM 2 1.7B), mas não 3B+. O iPhone 13 Pro e o 14 Pro (6 GB de RAM) também ficam nos 1.7B; o iPhone 15 Pro (8 GB de RAM) roda modelos 3B como o Phi-4 Mini a cerca de 8–12 tokens/seg (indicativo). Para iPhones mais antigos, o melhor caminho é se conectar remotamente a um Mac ou PC em casa.',
          },
          {
            q: 'Dá para sincronizar o histórico de chat entre o iPhone e o Mac?',
            a: 'Não no PocketPal AI, no Private LLM, no Google AI Edge Gallery nem no MLC Chat — o histórico de chat fica guardado localmente em cada aparelho, sem sincronização pelo iCloud. O Private LLM e o Locally AI também rodam nativamente no Mac, mas o histórico continua sem sincronizar entre as cópias do iPhone e do Mac. Para ter o histórico de chat entre aparelhos, o caminho prático é rodar o Open WebUI em um Mac em casa e acessá-lo pelos navegadores do iPhone e do Mac — o Open WebUI guarda o histórico de chat no servidor.',
          },
          {
            q: 'Esses apps estão disponíveis fora da App Store?',
            a: 'O PocketPal AI é de código aberto e pode ser compilado a partir do código-fonte pelo Xcode, mas a versão da App Store é a distribuição padrão. O LLM Farm é a exceção que agora exige compilar o código-fonte — ele atualmente não está na App Store nem no TestFlight (o README diz "temporariamente indisponível"). Private LLM, Locally AI, Google AI Edge Gallery e MLC Chat estão só na App Store. Na UE existem lojas de apps alternativas sob o DMA, mas quais apps elas oferecem fica a critério de cada desenvolvedor; por isso, instale pelo canal oficial do desenvolvedor — nenhum desses apps exige uma loja alternativa.',
          },
          {
            q: 'Algum deles exige jailbreak?',
            a: 'Não. PocketPal AI, Private LLM, Locally AI, Google AI Edge Gallery, MLC Chat e Apple Intelligence rodam todos no iOS original. Compilar o LLM Farm a partir do código-fonte no Xcode também não exige jailbreak — usa o sideloading padrão de desenvolvedor, não uma exploração de jailbreak. O jailbreak não é necessário nem recomendado para nenhum desses apps.',
          },
          {
            q: 'Dá para usar IA local no iOS Shortcuts?',
            a: 'Sim, pelo Private LLM (suas ações de Shortcuts), pelo Locally AI (uma ação de Shortcuts gratuita) ou pelo Apple Intelligence (a ação "Usar Modelo", iOS 18.4+, ampliada no iOS 26). PocketPal AI, Google AI Edge Gallery e MLC Chat não mencionam ações de Shortcuts. Entre os apps comparados aqui, o Locally AI é a única opção gratuita que lista suporte a Shortcuts e acesso ao modelo no aparelho da própria Apple.',
          },
          {
            q: 'Como a IA local se compara ao app do ChatGPT no iPhone?',
            a: 'Os modelos no aparelho (Phi-4 Mini, Llama 3.2 3B) continuam bem atrás dos modelos de ponta na nuvem em raciocínio complexo, conhecimento geral do mundo e tarefas multimodais, mas são mais rápidos em consultas simples (sem ida e volta pela rede) e, segundo a documentação de cada app, mantêm o chat no aparelho. A troca honesta: IA local para tarefas rotineiras e privadas; ChatGPT ou outro app na nuvem para as perguntas difíceis de vez em quando. Muitos usuários em 2026 mantêm os dois e escolhem a cada consulta.',
          },
          {
            q: 'O LLM Farm ainda é seguro de usar se não está mais na App Store?',
            a: 'O código-fonte é público no GitHub e ainda recebe atividade de issues em 2026, mas a última versão (1.4.3) saiu em 27 de janeiro de 2025 e o último envio de código foi em 30 de janeiro de 2026, então ele pode estar sem manutenção. Compilado a partir do código-fonte e instalado por sideloading, ele também deixa de passar pela revisão da App Store da Apple. Se você não precisa especificamente dos controles de amostragem mirostat, o PocketPal AI cobre o mesmo uso gratuito, flexível e de código aberto, continuando na App Store com a revisão padrão da Apple.',
          },
          {
            q: 'Quais desses apps de iPhone são gratuitos?',
            a: 'O PocketPal AI é gratuito (licença MIT), com compras opcionais dentro do app para Pals premium e "PocketPal Plus". O Locally AI e o Google AI Edge Gallery são gratuitos, sem compras dentro do app listadas. O MLC Chat é gratuito. O LLM Farm é gratuito, mas precisa ser compilado a partir do código-fonte. O Private LLM custa $4.99 pagamento único, sem compras dentro do app listadas. O Apple Intelligence é integrado ao iOS. Os preços foram lidos na App Store dos EUA em 2026-10-23 e podem variar conforme o país.',
          },
          {
            q: 'O iPhone Duo ou o iPhone 18 Pro roda um LLM local offline?',
            a: 'Em princípio sim: os dois usam o chip A20 Pro da Apple, e os apps deste guia rodam em qualquer iPhone que atenda ao iOS mínimo deles. O que define o tamanho do modelo é a RAM, e as páginas do iPhone 18 Pro e do iPhone Duo da Apple não informam a RAM; reportagens da imprensa falam em 12 GB no iPhone 18 Pro, o que não está confirmado. O PromptQuorum não tem velocidades medidas para nenhum dos dois. Instale o PocketPal AI e rode o benchmark integrado para ver o que o seu aparelho realmente faz.',
          },
          {
            q: 'Esses apps funcionam no iPad?',
            a: 'Sim, a maioria. PocketPal AI (iPadOS 15.1+, suporte completo a iPad segundo o README), Private LLM (iPadOS 17.0+) e Locally AI (iPadOS 18.1+) listam suporte a iPad. A ficha do Google AI Edge Gallery exige iOS 17.0 ou superior; confira a página para o seu iPad. Como no iPhone, é a RAM que define quais modelos cabem. Para dicas específicas de iPad, veja [Como executar IA em um tablet](/pt/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: 'Por que o LLM Farm sumiu da App Store?',
            a: 'O README do projeto diz: "The app is temporarily unavailable in TestFlight and Appstore." O PromptQuorum não encontrou um motivo público para a remoção, então qualquer explicação que você leia por aí não está confirmada (veja a [análise do LLM Farm](/pt/power-local-llm/llm-farm-review)). O código-fonte continua público, mas a última versão foi a 1.4.3, de 27 de janeiro de 2025. Para uma alternativa gratuita e instalável pela App Store, use o PocketPal AI ou o Locally AI.',
          },
          {
            q: 'Existe um app do Ollama para iPhone?',
            a: 'A página de download do Ollama lista macOS, Windows e Linux, e nenhum app para iPhone. Para usar modelos do Ollama ou do LM Studio a partir de um iPhone, rode o servidor em um Mac ou PC e conecte-se por um app cliente; o Locally AI oferece o LM Link, que a LM Studio descreve como uma conexão criptografada com o LM Studio em um Mac. Para modelos que rodam inteiramente no celular, use os apps deste guia.',
          },
          {
            q: 'Devo baixar o Gemma 4 ou o Phi-4 Mini?',
            a: 'O PromptQuorum não tem um benchmark direto entre os dois no iPhone. Fatos que ajudam: o Gemma 4 E2B e o E4B são os modelos do Google do tamanho de um celular (cerca de 2.58 GB e 3.65 GB como arquivos LiteRT-LM no Google AI Edge Gallery; o Locally AI também lista o Gemma 4), enquanto o Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) é o modelo que as velocidades deste guia usam. Em um iPhone de 8 GB, teste os dois com os seus próprios prompts e compare os tokens/seg no benchmark do PocketPal AI; em um iPhone de 6 GB, fique nos modelos da faixa de 1.7B.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — a análise completa do PromptQuorum sobre a opção gratuita e de código aberto.',
          '[Análise do Private LLM](/pt/power-local-llm/private-llm-review) — a opção paga com Siri e Shortcuts.',
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — o app MLX gratuito da equipe da LM Studio.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app gratuito do Google com Gemma 4.',
          '[Análise do MLC Chat](/pt/power-local-llm/mlc-chat-review) e [Análise do LLM Farm](/pt/power-local-llm/llm-farm-review) — os dois apps marcados como desatualizados neste guia.',
          '[Os melhores apps LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — artigo irmão que cobre os equivalentes do Android (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[Como executar IA em um tablet: iPad e Android (2026)](/pt/power-local-llm/run-ai-on-tablet-ipad-android) — guia de plataforma para leitores com tablet.',
          '[Os melhores modelos LLM para celular em 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — artigo complementar do lado do modelo para escolher o que executar nesses apps.',
          '[Os melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — panorama mais amplo de modelos que cobre todos os níveis de hardware, não apenas móvel.',
          '[Crie um assistente de voz local no seu celular: Whisper + LLM local](/pt/power-local-llm/voice-assistant-local-mobile-offline) — estende esses apps com entrada/saída de voz sem conexão.',
          '[O melhor app de IA local para PCs de baixo desempenho](/pt/power-local-llm/best-local-ai-app-low-end-pc) — alternativa de desktop para usuários que querem se conectar remotamente a uma máquina mais potente em casa.',
          '[Análise do Enclave AI 2026](/pt/power-local-llm/enclave-ai-review) — um olhar mais de perto sobre o Enclave AI, um assistente de IA no aparelho para iPhone, iPad e Mac, com interação com documentos e automação por Siri/Shortcuts.',
          '[Diretório de software LLM local 2026](/pt/directory) — diretório de todas as ferramentas de LLM local que vale a pena conhecer em todas as plataformas.',
          '[Best Local LLM Apps for iPhone 2026 (English)](/power-local-llm/best-local-llm-apps-iphone-2026) — versão em inglês deste guia',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-23',
    last_full_refresh: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'أفضل تطبيقات الذكاء الاصطناعي المحلي لـ iPhone في 2026 (شغّل النماذج اللغوية بدون واي فاي)',
    seoTitle: 'أفضل تطبيقات الذكاء الاصطناعي المحلي لـ iPhone 2026',
    intro:
      'ست خيارات على iPhone تُشغّل نماذج لغوية حقيقية بالكامل على الجهاز في 2026: PocketPal AI وPrivate LLM وLocally AI (من LM Studio) وGoogle AI Edge Gallery وMLC Chat وApple Intelligence (المدمج في النظام). جميعها تعمل بدون واي فاي بمجرد تنزيل النموذج. يقارن هذا الدليل بينها من حيث التكلفة ومكتبة النماذج والتكامل مع iOS وموقف الخصوصية وحالة الصيانة — مع سرعات إرشادية على iPhone 16 Pro وiPhone 17 Pro ودليل للذاكرة العشوائية يشمل الآن iPhone 18 Pro — ويشرح سبب خروج LLM Farm من الترتيب.',
    metaDescription:
      'ست طرق لتشغيل LLMs على iPhone في 2026: PocketPal AI وPrivate LLM وLocally AI وGoogle AI Edge Gallery وMLC Chat. التكلفة والخصوصية ودليل الذاكرة.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ar.webp',
    twitterDescription:
      'ذكاء اصطناعي محلي على iPhone في 2026: PocketPal AI (الخيار المجاني الافتراضي)، Private LLM (4.99 دولار، Siri وShortcuts)، Locally AI (LM Studio، MLX)، Google AI Edge Gallery (Gemma 4). جميعها تعمل دون اتصال بعد التنزيل.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3.5 4B',
    ],
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM not published by Apple)',
      'iPhone Duo (A20 Pro, RAM not published by Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB RAM)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 16e (A18, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'مستخدمو iPhone الراغبون في تشغيل الذكاء الاصطناعي بصورة خاصة على الجهاز دون اشتراك سحابي، بما فيهم المسافرون والمهتمون بالخصوصية والمطورون الذين يستكشفون الاستدلال على الجهاز.',
    readTime: '12 دقائق للقراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'تطبيق LLM محلي للـ iPhone',
    targetKeywords: [
      'أفضل تطبيق نموذج لغوي محلي للـ iPhone',
      'تشغيل LLM على iPhone بدون إنترنت',
      'برنامج PocketPal AI للـ iPhone',
      'تطبيق Private LLM',
      'برنامج MLC Chat للـ iPhone',
      'برنامج LLM Farm لنظام iOS',
      'ذكاء اصطناعي على iPhone بدون واي فاي',
      'تطبيقات ذكاء اصطناعي محلي للـ iPhone',
      'Google AI Edge Gallery على iOS',
      'Locally AI مقابل PocketPal',
      'Ollama لنظام iOS',
    ],
    leadAnswerBlock:
      '**لمعظم مستخدمي iPhone في 2026، ثبّت برنامج PocketPal AI من App Store ونزّل نموذجاً صغيراً مثل Phi-4 Mini (حجم 3.8B Q4_K_M، ~2.7 جيجابايت).** التطبيق مجاني الاستخدام (مع مشتريات اختيارية داخل التطبيق للمحتوى المتقدم) ومفتوح المصدر (MIT)، ويعمل على iPhone 14 Pro والإصدارات الأحدث (أي iPhone بذاكرة عشوائية 6 جيجابايت أو أكثر) بنحو 10–15 رمزاً في الثانية (إرشادي) على iPhone 16 Pro للدردشة اليومية. لمن يريد تكامل Siri وShortcuts، يُعدّ Private LLM الخيار المدفوع (4.99 دولار دفعة واحدة، يشمل iPhone وiPad وMac). أما Locally AI — الذي يُطوّره فريق LM Studio — فهو التطبيق المجاني المبني على Apple MLX، مع دعم Shortcuts ووصول إلى نموذج Apple الأساسي على الجهاز. وGoogle AI Edge Gallery هو تطبيق Google المجاني لنماذج Gemma 4، مع مهارات الوكيل ووضع التفكير. تتوفر أيضاً نماذج صغيرة أحدث — Gemma 4 E2B/E4B وQwen3.5 — في هذه التطبيقات (راجع النماذج حسب فئة iPhone). يظل MLC Chat تطبيق Metal المرجعي، لكن إصدار iPhone منه لم يُحدَّث منذ سبتمبر 2024. أما LLM Farm فهو غير متوفر حالياً على App Store أو TestFlight (يذكر ملف README الخاص به أنه "غير متاح مؤقتاً") ولا يُثبَّت إلا عبر بناء الكود المصدري. يُشغّل Apple Intelligence أيضاً نماذج على الجهاز لكنه مدمج في النظام وليس تطبيق دردشة؛ فهو يُكمل هذه التطبيقات لا يُنافسها.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل تطبيق نموذج لغوي محلي لـ iPhone في 2026؟',
        answer:
          'PocketPal AI هو الخيار المجاني الافتراضي الموصى به لمعظم مستخدمي iPhone — مفتوح المصدر (MIT)، يُثبَّت من App Store، يدعم أي نموذج GGUF من Hugging Face، ويُشغّل Phi-4 Mini (3.8B) بنحو 10–15 رمزاً في الثانية (إرشادي) على iPhone 16 Pro. Private LLM هو الخيار المدفوع (4.99 دولار دفعة واحدة، iPhone وiPad وMac) مع تكامل Shortcuts وSiri. Locally AI، الذي يُطوّره فريق LM Studio، هو خيار Apple MLX المجاني مع دعم Shortcuts ووصول إلى نموذج Apple الأساسي على الجهاز. Google AI Edge Gallery هو تطبيق Google المجاني لنماذج Gemma 4. MLC Chat يدعم تسريع Metal لكن إصدار iPhone منه متوقف منذ سبتمبر 2024. يُشغّل Apple Intelligence نماذج على الجهاز أيضاً لكنه مدمج في النظام ويُكمل هذه التطبيقات بدلاً من أن يحل محلها.',
        bullets: [
          'PocketPal AI — مجاني، مفتوح المصدر (MIT)، App Store، الإصدار v1.20.1 (19 أكتوبر 2026). الخيار الافتراضي الموصى به لمعظم المستخدمين. يدعم أي نموذج GGUF. مشتريات اختيارية داخل التطبيق للمحتوى المتقدم.',
          'Private LLM — 4.99 دولار دفعة واحدة (iPhone وiPad وMac)، الإصدار v1.9.16 (14 سبتمبر 2026). الخيار المدفوع. تكامل Shortcuts وSiri.',
          'Locally AI — مجاني، من فريق LM Studio، الإصدار v1.66.0 (15 أكتوبر 2026). محرك Apple MLX، دعم Shortcuts، وصول إلى Apple Foundation Models.',
          'Google AI Edge Gallery — مجاني، من Google، الإصدار v1.0.13 (8 أكتوبر 2026). Gemma 4، مهارات الوكيل، وضع التفكير، إدخال الصور والصوت.',
          'MLC Chat — مجاني، مشروع MLC LLM. تسريع Metal، لكن تطبيق iPhone لم يتلقَّ أي تحديث منذ الإصدار v1.6 (27 سبتمبر 2024) — تعامل معه على أنه ربما غير مُصان.',
          'Apple Intelligence — مدمج في النظام، ليس تطبيقاً مستقلاً. نموذج ~3B على الجهاز يستخدمه Mail والرسائل والملاحظات.',
          'النموذج الموصى به لـ iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M، ~2.7 جيجابايت) — يعمل بنحو 10–15 رمزاً في الثانية. خيارات أحدث: Gemma 4 E2B/E4B وQwen3.5 4B.',
          'أجهزة iPhone الأقدم (14 Pro): Qwen3 1.7B أو SmolLM 2 1.7B — يتناسب مع ذاكرة 6 جيجابايت ويعمل بنحو 15–20 رمزاً في الثانية.',
        ],
        updatedDate: '2026-10-23',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'أي تطبيق iPhone تُثبّت أولاً؟', anchor: '#which-app' },
      { label: 'جدول مقارنة تطبيقات iPhone', anchor: '#comparison-table' },
      { label: 'PocketPal AI: الخيار المجاني مفتوح المصدر', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: الخيار المدفوع مع تكامل iOS', anchor: '#private-llm' },
      { label: 'Locally AI: تطبيق MLX مجاني من LM Studio', anchor: '#locally-ai' },
      { label: 'Google AI Edge Gallery: تطبيق Gemma 4 المجاني من Google', anchor: '#google-ai-edge-gallery' },
      { label: 'MLC Chat: تحسين لـ Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm: خارج App Store والمصدر لا يزال متاحاً', anchor: '#llm-farm' },
      { label: 'Apple Intelligence: ذكاء اصطناعي على الجهاز مدمج في النظام', anchor: '#apple-intelligence' },
      { label: 'النماذج حسب فئة iPhone', anchor: '#models-by-tier' },
      { label: 'استنزاف البطارية والتباطؤ الحراري', anchor: '#battery-heat' },
      { label: 'iOS Shortcuts وSiri والتحميل الجانبي', anchor: '#ios-integration' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**PocketPal AI هو الخيار المجاني الافتراضي الموصى به.** مفتوح المصدر (MIT)، يُثبَّت من App Store، يدعم أي نموذج GGUF من Hugging Face. الدردشة المحلية لا تتطلب حساباً؛ أما Pals المتقدمة و"PocketPal Plus" فهي مشتريات اختيارية داخل التطبيق. يُشغّل Phi-4 Mini بنحو 10–15 رمزاً في الثانية على iPhone 16 Pro. نقطة البداية الموصى بها لمعظم مستخدمي iPhone.',
          '**Private LLM هو الخيار المدفوع في هذا الدليل (4.99 دولار دفعة واحدة، بدون اشتراك).** يغطي شراء واحد iPhone وiPad وMac، وتمتد مشاركة العائلة إلى ستة أشخاص. مكتبة نماذج منتقاة؛ ووفق المطوّر يتكامل مع Siri وShortcuts.',
          '**Locally AI هو البديل المجاني المبني على MLX، ويُطوّره فريق LM Studio.** يُشغّل نماذج Llama وGemma (بما فيها Gemma 4) وQwen وDeepSeek على Apple MLX، يعمل مع iOS Shortcuts، ويمكنه إتاحة نموذج Apple الأساسي على الجهاز كواجهة دردشة.',
          '**Google AI Edge Gallery هو تطبيق Google المجاني لنماذج Gemma 4 على iPhone.** وضع تفكير ومهارات وكيل وإدخال صور وصوت؛ وتعمل النماذج بصيغة LiteRT-LM لا GGUF. ولا تزال Google تصف التطبيق بأنه قيد التطوير النشط.',
          '**MLC Chat يدعم تسريع Metal لكنه متوقف على iPhone.** لم يُحدَّث إصدار App Store منه منذ v1.6 في 27 سبتمبر 2024، لذا فإن مكتبة نماذجه سابقة لـ Phi-4 Mini وGemma 3. أما محرك MLC LLM نفسه فلا يزال نشطاً على GitHub.',
          '**LLM Farm غير متوفر حالياً على App Store أو TestFlight.** يصفه ملف README الخاص به بأنه "غير متاح مؤقتاً". يظل مفتوح المصدر ويمكن بناؤه من الكود المصدري عبر Xcode، لكن آخر إصدار له كان 1.4.3 في يناير 2025 وآخر دفعة كود في 30 يناير 2026.',
          '**Apple Intelligence على الجهاز لكنه ليس تطبيقاً مستقلاً.** نموذج الأساس ~3B من Apple يُشغّل ميزات النظام (أدوات الكتابة، الرد الذكي، ملخصات الإشعارات). منذ iOS 26، تستطيع تطبيقات الجهات الخارجية استدعاءه عبر إطار عمل Foundation Models، ويمكن لـ Shortcuts استدعاؤه عبر إجراء "Use Model".',
          '**النموذج الموصى به لـ iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M، ~2.7 جيجابايت).** نموذجا Gemma 4 E2B/E4B وQwen3.5 4B بديلان أحدث ولا توجد لهما أرقام سرعة من PromptQuorum بعد. أجهزة iPhone الأقدم بذاكرة 6 جيجابايت (iPhone 14 Pro): Qwen3 1.7B أو SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**التطبيقات المُقارَنة:** PocketPal AI وPrivate LLM وLocally AI (من LM Studio) وGoogle AI Edge Gallery وMLC Chat وApple Intelligence (النظام) — إضافةً إلى LLM Farm، غير المتوفر حالياً على App Store (README: "غير متاح مؤقتاً").',
          '**آخر تحديثات المشاريع (روجعت في 23 أكتوبر 2026):** PocketPal AI v1.20.1 (19 أكتوبر 2026) · Locally AI v1.66.0 (15 أكتوبر 2026) · Google AI Edge Gallery v1.0.13 (8 أكتوبر 2026) · Private LLM v1.9.16 (14 سبتمبر 2026) · تطبيق MLC Chat لـ iPhone v1.6 (27 سبتمبر 2024 — قديم) · LLM Farm الإصدار 1.4.3 (27 يناير 2025)، وآخر دفعة كود 30 يناير 2026 — قديم.',
          '**أجهزة المرجع لأرقام السرعة:** iPhone 16 Pro (A18 Pro، 8 جيجابايت ذاكرة عشوائية) وiPhone 17 Pro (A19 Pro، 12 جيجابايت). أرقام السرعة نطاقات إرشادية وليست اختباراً مضبوطاً من PromptQuorum. لا توجد هنا أرقام سرعة لأجهزة iPhone 18 Pro وiPhone 18 Pro Max وiPhone Duo (A20 Pro).',
          '**محركات الاستدلال:** llama.cpp (PocketPal AI وLLM Farm)، وApple MLX (Locally AI)، وMLC LLM مع Metal (MLC Chat)، وGoogle LiteRT-LM (Google AI Edge Gallery)، وبيئة تشغيل خاصة على الجهاز (Private LLM وApple Intelligence).',
          '**الحد الأدنى من iPhone لنماذج 3B+:** iPhone 14 Pro (A16، 6 جيجابايت) لنماذج 1.7B؛ أي iPhone بذاكرة 8 جيجابايت فأكثر (15 Pro، سلسلة 16، 16e، سلسلة 17، 18 Pro) لنماذج 3B–4B.',
          '**التطبيق المجاني الموصى به:** PocketPal AI — App Store، مفتوح المصدر، مرونة في اختيار النماذج.',
          '**الخيار المدفوع:** Private LLM — 4.99 دولار دفعة واحدة (iPhone وiPad وMac)، دعم Shortcuts وSiri.',
          '**بدون اتصال:** جميع الستة تعمل بالكامل دون اتصال بعد تنزيل النموذج؛ وفق README أو صفحة كل تطبيق، لا تُجري الدردشة على الجهاز أي طلبات سحابية (ويمكن لـ Apple Intelligence استخدام Private Cloud Compute اختيارياً).',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'أي تطبيق iPhone تُثبّت أولاً؟',
        content:
          '**لمعظم المستخدمين: PocketPal AI من App Store، ثم تنزيل Phi-4 Mini (3.8B Q4_K_M) — أو نموذج صغير أحدث مثل Gemma 4 E2B/E4B أو Qwen3.5 4B.** هذا المزيج يعمل على iPhone 14 Pro والإصدارات الأحدث، ولا تكلفة له للدردشة، ويُنتج مخرجات مفيدة للدردشة اليومية والتلخيص والصياغة السريعة. اختر تطبيقاً آخر فقط عندما تحتاج إلى ميزة محددة لا يوفرها.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ar.webp',
        imageCaption: 'أي تطبيق ذكاء اصطناعي محلي تثبّته على iPhone: جدول قرار من PocketPal AI المجاني إلى Private LLM مع Siri',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'لمعظم مستخدمي iPhone في 2026، ثبّت PocketPal AI (مجاني، App Store) ونزّل Phi-4 Mini أو نموذجاً صغيراً أحدث مثل Gemma 4 E2B — يغطي الدردشة اليومية والتلخيص والصياغة على أي iPhone بذاكرة عشوائية 6 جيجابايت أو أكثر.',
          },
          {
            type: 'plain-terms',
            text: 'ست خيارات على iPhone تُشغّل الذكاء الاصطناعي بالكامل على هاتفك في 2026. PocketPal AI هو نقطة البداية المجانية الموصى بها — ثبّته، نزّل ملف النموذج (2.7 جيجابايت) مرة واحدة، وستحصل على مساعد دردشة خاص يعمل في القطار بدون واي فاي. Private LLM هو الخيار المدفوع إذا أردت أن يتحدث Siri مع النموذج المحلي. Locally AI، من فريق LM Studio، هو البديل المجاني الحديث بدعم Shortcuts، وGoogle AI Edge Gallery هو تطبيق Google المجاني لنماذج Gemma 4. أما إصدار iPhone من MLC Chat فلم يعد يُحدَّث. Apple Intelligence مدمج في iOS لكنه ليس تطبيق دردشة. PocketPal AI يناسب معظم حالات الاستخدام.',
          },
        ],
        decisionBlock: {
          title: 'القرار: أي تطبيق ذكاء اصطناعي محلي لـ iPhone؟',
          localIf: [
            'تريد ذكاء اصطناعي للدردشة مجانياً يعمل دون اتصال → PocketPal AI',
            'تريد أن يتحدث Siri مع نموذجك المحلي → Private LLM',
            'تريد تطبيق MLX مجاني مع Shortcuts ووصول إلى Apple Foundation Models → Locally AI',
            'تريد نماذج Gemma 4 من Google مع وضع التفكير ومهارات الوكيل → Google AI Edge Gallery',
            'تريد تجربة سلسلة أدوات MLC LLM وتقبل نسخة iPhone لم تتلقَّ أي تحديث منذ سبتمبر 2024 → MLC Chat',
            'تحتاج فقط إلى مساعدة في الكتابة في Mail / الرسائل / الملاحظات → Apple Intelligence (مدمج)',
          ],
          cloudIf: [
            'تحتاج إلى جودة نموذج 70B+ (Llama 3.3 70B، مستوى GPT-5.5) → استخدم السحابة أو اتصل عن بُعد بجهاز منزلي',
            'تحتاج تحديداً إلى GPT-5.5 أو Claude Opus أو Gemini → تطبيقات السحابة (غير متاحة محلياً)',
            'تحتاج إلى رؤية فورية أو مخرجات متعددة الوسائط تتجاوز النص → السحابة (الوسائط المتعددة على الجهاز محدودة في 2026)',
          ],
          quick: [
            'مجاني ويناسب معظم المستخدمين: PocketPal AI',
            'مدفوع + تكامل iOS الأصلي: Private LLM',
            'مجاني + منظومة LM Studio: Locally AI',
            'مجاني + Gemma 4 من Google: Google AI Edge Gallery',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'ثبّت PocketPal AI أولاً حتى لو كنت تخطط لشراء Private LLM لاحقاً. استخدم PocketPal AI للتحقق مما إذا كانت سرعة الاستدلال على الجهاز بفئة iPhone الخاصة بك مناسبة لحالة استخدامك. إذا كانت كذلك، قرّر ما إذا كان تكامل Shortcuts وSiri في Private LLM يستحق 4.99 دولار. وإن لم تكن، فقد وفّرت المبلغ بعد أن عرفت ذلك قبل الدفع. ويتضمن PocketPal AI أيضاً اختبار أداء مدمجاً يعرض الرموز في الثانية والذاكرة على iPhone الخاص بك — استخدمه بدلاً من الاعتماد على أي جدول، بما في ذلك الجدول أدناه.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول مقارنة تطبيقات iPhone',
        content:
          '**تتمايز الخيارات الستة في ثلاثة محاور تهم معظم المستخدمين: التكلفة، ومرونة النماذج، والتكامل مع iOS.** فوارق السرعة موجودة لكنها أصغر من الفجوة بين أي من هذه التطبيقات ونموذج لغوي سحابي. أعمدة السرعة تخص Phi-4 Mini على iPhone 16 Pro. قُرئت الأسعار والإصدارات من صفحات App Store الأمريكية وصفحات المشاريع في 23 أكتوبر 2026.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-ar.webp',
        imageCaption: 'مقارنة تطبيقات LLM المحلية على iPhone: التكلفة والسرعة والتكامل لـ PocketPal AI وPrivate LLM وغيرهما',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI هو الخيار المجاني الافتراضي الموصى به، وPrivate LLM هو الخيار المدفوع، وLocally AI هو خيار MLX المجاني من فريق LM Studio، وGoogle AI Edge Gallery هو تطبيق Gemma 4 المجاني من Google، وMLC Chat متوقف على iPhone، وApple Intelligence مدمج في النظام.',
          },
          {
            type: 'plain-terms',
            text: 'يعود الاختيار في الغالب إلى ثلاثة أشياء: هل تريد الدفع مقابل تكامل Siri (Private LLM)، أم تريد منظومة LM Studio مع Shortcuts مجاناً (Locally AI)، أم تريد نماذج Gemma 4 من Google مع وضع تفكير (Google AI Edge Gallery). لكل شيء آخر، PocketPal AI هو الخيار الافتراضي. أرقام السرعة في الجدول نطاقات إرشادية لتكميم Q4_K_M — المعيار للاستدلال على الأجهزة المحمولة في 2026 — وليست اختباراً مضبوطاً.',
          },
        ],
        columns: ['التطبيق', 'التكلفة', 'رموز/ث (Phi-4 Mini)', 'الخصوصية', 'الأنسب لـ'],
        rows: [
          { 'التطبيق': '[PocketPal AI](https://github.com/a-ghorbani/pocketpal-ai)', 'التكلفة': 'مجاني (MIT) + مشتريات اختيارية', 'رموز/ث (Phi-4 Mini)': '~10–15', 'الخصوصية': 'دردشة على الجهاز، بدون حساب (README)', 'الأنسب لـ': 'الخيار المجاني الافتراضي لمعظم المستخدمين' },
          { 'التطبيق': '[Private LLM](https://privatellm.app)', 'التكلفة': '4.99 دولار دفعة واحدة', 'رموز/ث (Phi-4 Mini)': 'لا يوجد رقم', 'الخصوصية': 'على الجهاز؛ بلا حسابات أو تتبع (المطوّر)', 'الأنسب لـ': 'تكامل Shortcuts وSiri' },
          { 'التطبيق': '[Locally AI](https://lmstudio.ai/locally)', 'التكلفة': 'مجاني (فريق LM Studio)', 'رموز/ث (Phi-4 Mini)': 'غير متاح — مكتبة MLX (بدون Phi-4)', 'الخصوصية': 'على الجهاز؛ بلا جمع بيانات (الصفحة)', 'الأنسب لـ': 'MLX وShortcuts، ارتباط بـ LM Studio' },
          { 'التطبيق': '[Google AI Edge Gallery](https://apps.apple.com/app/id6749645337)', 'التكلفة': 'مجاني (Google)', 'رموز/ث (Phi-4 Mini)': 'غير متاح — LiteRT-LM، Gemma 4', 'الخصوصية': 'على الجهاز بعد تنزيل النموذج', 'الأنسب لـ': 'Gemma 4، وضع التفكير، مهارات الوكيل' },
          { 'التطبيق': '[MLC Chat](https://llm.mlc.ai)', 'التكلفة': 'مجاني (مفتوح المصدر)', 'رموز/ث (Phi-4 Mini)': 'غير متاح — مكتبة سابقة لـ Phi-4', 'الخصوصية': 'استدلال محلي (وثائق المشروع؛ غير متحقق منه)', 'الأنسب لـ': 'مستخدمو سلسلة MLC LLM (تطبيق iOS متوقف)' },
          { 'التطبيق': '[LLM Farm](https://github.com/guinmoon/LLMFarm)', 'التكلفة': 'مجاني (بناء من المصدر)', 'رموز/ث (Phi-4 Mini)': 'لا يوجد رقم', 'الخصوصية': 'استدلال محلي (وثائق المشروع؛ غير متحقق منه)', 'الأنسب لـ': 'المطورون (خارج App Store، قديم)' },
          { 'التطبيق': '[Apple Intelligence](https://www.apple.com/apple-intelligence/)', 'التكلفة': 'مجاني (مدمج في iOS)', 'رموز/ث (Phi-4 Mini)': 'غير متاح (ميزة نظامية)', 'الخصوصية': 'محلي + Private Cloud Compute اختياري', 'الأنسب لـ': 'المساعدة في Mail والرسائل والملاحظات' },
        ],
        note:
          '**ملاحظة حول Apple Neural Engine (ANE) وMetal وMLX:** يستخدم PocketPal AI وLLM Farm مكتبة llama.cpp مع Metal Performance Shaders للاستدلال الذي يعمل على وحدة معالجة الرسومات. يستخدم MLC Chat مكتبة MLC LLM مع تحسين Metal أعمق، ويصفه مشروع MLC LLM بأنه أسرع من التطبيقات المبنية على llama.cpp على نفس الجهاز (ادعاء من المشروع؛ ولم يقس PromptQuorum ذلك). يستخدم Locally AI إطار Apple MLX مفتوح المصدر الخاص بشركة Apple، ويحقق كفاءة GPU مشابهة على Apple Silicon. يُشغّل Google AI Edge Gallery نماذج Gemma 4 عبر بيئة LiteRT-LM من Google. يستخدم Apple Intelligence وحدة ANE تحديداً لنموذج النظام ~3B، وهو أكثر كفاءة في استهلاك الطاقة لكنه أقل مرونة من الاستدلال المبني على Metal. منذ iOS 26، تستطيع تطبيقات الجهات الخارجية استدعاء هذا النموذج النظامي عبر إطار عمل Foundation Models — وهذا بالضبط ما يفعله Locally AI — لكن نماذج GGUF/MLX المخصصة لا تزال غير قادرة على استهداف ANE مباشرةً. تذكر Apple أن شريحة A20 Pro في iPhone 18 Pro تحتوي على Neural Engine مزدوج بـ16 نواة بضعف القدرة الحسابية السابقة؛ وهذا ادعاء من Apple، ولم يقس PromptQuorum ما يعنيه ذلك لهذه التطبيقات.',
        callouts: [
          {
            type: 'tip',
            text: 'أرقام الرموز في الثانية نطاقات إرشادية مقرَّبة للاستئناس فقط، وليست اختباراً مضبوطاً من PromptQuorum، وغير مرتبطة بإصدار تطبيق أو بتاريخ اختبار. تفترض تكميماً Q4_K_M (المعيار للاستدلال على الأجهزة المحمولة في 2026) وiPhone خاملاً بدون تطبيقات ثقيلة أخرى. التطبيقات في الخلفية قد تُقلّل الإنتاجية بوضوح، ويعمل iPhone 17 Pro عادةً أسرع من iPhone 16 Pro. قِس هاتفك بنفسك عبر اختبار الأداء المدمج في PocketPal AI.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: الخيار المجاني مفتوح المصدر',
        content:
          '**PocketPal AI هو نقطة البداية الموصى بها لمعظم مستخدمي iPhone في 2026.** استخدامه مجاني، ومفتوح المصدر (MIT؛ GitHub: [a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai))، ومتاح في App Store، ويدعم أي نموذج GGUF من Hugging Face. يستخدم التطبيق llama.cpp تحت الغطاء مع تحسينات لشريحة Apple Silicon. المراجعة الكاملة: [مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
        items: [
          '**ما هو:** تطبيق iOS/iPadOS وAndroid يُشغّل نماذج GGUF محلياً باستخدام llama.cpp، وناشره Gooya UG. يذكر ملف README أن المطالبات والردود والمستندات لا تُرفع إلى خوادم خارجية؛ والدردشة لا تتطلب حساباً.',
          '**الإصدار وآخر تحديث:** v1.20.1، صدر في 19 أكتوبر 2026 ([إصدار GitHub](https://github.com/a-ghorbani/pocketpal-ai/releases))؛ وتعرض صفحة App Store الإصدار نفسه. وتيرة التحديث: نحو كل أسبوع إلى أسبوعين — بلا تحذير قِدم.',
          '**التثبيت:** App Store → "PocketPal AI". تنزيل مجاني مع مشتريات اختيارية داخل التطبيق (Pals المتقدمة و"PocketPal Plus"). يتطلب iOS/iPadOS 15.1 أو أحدث؛ والذاكرة العشوائية، لا إصدار iOS، هي التي تحدد حجم النموذج القابل للاستخدام. ومنذ v1.20.0 يوفر التطبيق أيضاً تسجيل الدخول باستخدام Apple اختيارياً وحذف الحساب.',
          '**إضافة نموذج:** في التطبيق، اضغط على Models → "Add from Hugging Face" → ابحث (مثلاً "phi-4-mini-instruct-Q4_K_M") → اضغط للتنزيل. يُخزَّن النموذج في مساحة تخزين التطبيق المحلية (~2.7 جيجابايت لـ Phi-4 Mini Q4).',
          '**سرعة التوليد (iPhone 16 Pro، إرشادية):** Phi-4 Mini ~10–15 رمزاً/ثانية، Llama 3.2 3B ~12–18 رمزاً/ثانية، Gemma 3 4B ~7–10 رموز/ثانية، Qwen3 1.7B ~18–24 رمزاً/ثانية. هذه ليست قياسات مضبوطة من PromptQuorum — استخدم اختبار الأداء المدمج الذي يعرض الرموز في الثانية والذاكرة على iPhone الخاص بك.',
          '**ميزات أخرى:** Pals (مساعدون مخصصون)، تحويل النص إلى كلام على الجهاز، Talents (أدوات الآلة الحاسبة والتاريخ/الوقت للنماذج القادرة)، ومتصفح نماذج Hugging Face يدعم النماذج المقيّدة برمز وصول.',
          '**الأنسب لـ:** المستخدمين الراغبين في تطبيق دردشة مجاني قابل للتثبيت من App Store لا يتطلب حساباً ويدعم أي نموذج GGUF صادر عن المجتمع.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'يحتوي منتقي النماذج في PocketPal AI على فلتر "Recommended" يعرض، وفق وثائق التطبيق، النماذج التي تناسب ذاكرة جهازك العشوائية. تحقق منه على هاتفك أنت — فقد يؤدي نموذج أكبر من اللازم إلى إغلاق iOS للتطبيق في منتصف الرد.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: الخيار المدفوع مع تكامل iOS',
        content:
          '**Private LLM هو الخيار المدفوع لـ iPhone في هذا الدليل (4.99 دولار دفعة واحدة، بدون اشتراك).** متاح في App Store فقط ويأتي بمكتبة منتقاة من النماذج المُحسَّنة. ما يُميّزه هو التكامل مع iOS: يذكر المطوّر أنه يتصل مباشرةً بـ Siri وتطبيق Shortcuts. المراجعة الكاملة: [مراجعة Private LLM](/ar/power-local-llm/private-llm-review).',
        items: [
          '**ما هو:** تطبيق iOS مدفوع بمكتبة نماذج منتقاة وتكامل عميق مع iOS. يستخدم بيئة تشغيل خاصة على الجهاز مُحسَّنة لشريحة Apple Silicon.',
          '**التثبيت:** App Store → "Private LLM - Local AI Chat" (Numen Technologies Limited). شراء لمرة واحدة بسعر 4.99 دولار (بدون اشتراك؛ ولا تعرض الصفحة أي مشتريات داخل التطبيق). يتطلب iOS/iPadOS 17.0 أو أحدث على شريحة A12 Bionic أو أحدث.',
          '**الإصدار وآخر تحديث:** v1.9.16، صدر في 14 سبتمبر 2026 (سجل إصدارات App Store)؛ وكان الإصدار السابق 1.9.15 في 9 يوليو 2026. تصدر التحديثات كل شهرين إلى ثلاثة أشهر — أي دون حد الأشهر الثلاثة، فلا تحذير قِدم.',
          '**مكتبة النماذج المنتقاة:** يعلن [privatellm.app](https://privatellm.app) عن أكثر من 140 نموذجاً محلياً عبر iPhone وiPad وMac، ويذكر عائلات مثل Llama وQwen3 وGemma 3 وPhi 4؛ والمجموعة الفرعية التي تناسب iPhone أصغر. مرونة أقل من PocketPal AI، لكن النماذج مُحسَّنة مسبقاً لبيئة تشغيل التطبيق.',
          '**Shortcuts:** وفق المطوّر، يتصل Private LLM بتطبيق Shortcuts ويمكنه تمرير الردود إلى تطبيقات أخرى تدعم مواصفة x-callback-url. مفيد لتشغيل الذكاء الاصطناعي المحلي بضغطة زر على شاشتك الرئيسية أو عبر بطاقات NFC.',
          '**تكامل Siri:** يذكر المطوّر تكامل Siri؛ والمطالبة الموجَّهة إلى النموذج على الجهاز تعمل دون اتصال بالإنترنت (الإنترنت مطلوب فقط لتنزيل النموذج الأول).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'وفق privatellm.app، يغطي شراء واحد بسعر 4.99 دولار كلاً من iPhone وiPad وMac، وتذكر صفحة App Store أن حتى ستة من أفراد العائلة يمكنهم استخدامه عبر مشاركة العائلة. لا يُعرض اشتراك ولا مشتريات داخل التطبيق — السعر المعروض هو التكلفة الإجمالية. ويذكر المطوّر أنه لا توجد حسابات أو تتبع أو سجلات.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: تطبيق MLX مجاني من LM Studio',
        content:
          '**Locally AI هو تطبيق دردشة مجاني يركّز على الخصوصية، يُطوّره فريق LM Studio (مدرج باسم Element Labs Inc)، ومبني على إطار Apple MLX الخاص بشركة Apple بدلاً من llama.cpp.** وهو التطبيق الوحيد هنا الذي يُتيح نموذج Apple الأساسي على الجهاز كواجهة دردشة. المراجعة الكاملة: [مراجعة Locally AI](/ar/power-local-llm/locally-ai-review).',
        items: [
          '**ما هو:** تطبيق iOS/iPadOS/macOS يستخدم Apple MLX للاستدلال، طوّره الفريق الذي يقف خلف تطبيق سطح المكتب LM Studio.',
          '**التثبيت:** App Store → "Locally AI". مجاني، بدون مشتريات داخل التطبيق في الصفحة، بدون حاجة لحساب (وفق الصفحة)، ويعمل دون اتصال.',
          '**الإصدار وآخر تحديث:** v1.66.0، صدر في 15 أكتوبر 2026 (سجل إصدارات App Store)؛ نحو إصدار واحد كل شهر في 2026 — بلا تحذير قِدم.',
          '**مكتبة النماذج:** Llama 3.2 وGemma 2/3/4 وQwen 3 و3.5 وDeepSeek وLFM 2.5 وBonsai وMinistral 3 وApple Foundation Models — كتالوج أوسع وأحدث من كتالوج MLC Chat.',
          '**iOS Shortcuts:** يوفر إجراء Shortcuts، بما يوازي دعم الأتمتة في Private LLM بتكلفة صفر.',
          '**LM Link:** ميزة اختيارية تتصل بـ LM Studio العامل على جهاز Mac عبر ما يصفه LM Studio بأنه اتصال مشفّر من طرف إلى طرف، تُتيح لتطبيق iPhone الانتقال إلى نموذج أكبر على جهاز منزلي عند الحاجة.',
          '**المتطلبات:** iOS/iPadOS 18.1 أو أحدث (وmacOS 26.0 أو أحدث لنسخة Mac). تظهر مزايا كفاءة Apple Silicon بأكبر قدر بدءاً من iPhone 15 Pro.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI هو التطبيق الوحيد في هذا الدليل القادر على وضع نموذج Apple الأساسي على الجهاز خلف نافذة دردشة عادية — مفيد لاختبار ما يستطيع نموذج Apple Intelligence فعله دون التنقل في قوائم أدوات الكتابة. أما لمرونة نماذج GGUF من جهات خارجية، فلا يزال PocketPal AI يمتلك الكتالوج الأكبر من النماذج.',
          },
        ],
      },
      googleAIEdgeGallery: {
        id: 'google-ai-edge-gallery',
        title: 'Google AI Edge Gallery: تطبيق Gemma 4 المجاني من Google',
        content:
          '**Google AI Edge Gallery هو تطبيق Google المجاني لتشغيل نماذج Gemma 4 على الهاتف، وهو متاح في App Store لـ iPhone.** تعرض الصفحة دردشة ذكاء اصطناعي مع وضع تفكير، ومهارات الوكيل، وإدخال الصور والصوت، وPrompt Lab، وقياس أداء النماذج. تقول Google إن التطبيق قيد التطوير النشط. المراجعة الكاملة: [مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review).',
        items: [
          '**ما هو:** تطبيق Google لعرض الذكاء الاصطناعي على الجهاز، مبني على بيئة LiteRT-LM من Google. مجاني؛ ولا تُعرض مشتريات داخل التطبيق.',
          '**التثبيت:** App Store → "Google AI Edge Gallery". يتطلب iOS 17.0 أو أحدث. تُنزَّل النماذج بشكل منفصل داخل التطبيق.',
          '**الإصدار وآخر تحديث:** v1.0.13، صدر في 8 أكتوبر 2026 (سجل إصدارات App Store). وصل دعم Gemma 4 في v1.0.2 بتاريخ 3 أبريل 2026 — بلا تحذير قِدم.',
          '**النماذج:** عائلة Gemma 4 (E2B وE4B هما المتغيران المناسبان للهاتف؛ وتذكر Google ملفات LiteRT-LM بحجم نحو 2.58 جيجابايت و3.65 جيجابايت)، وEmbeddingGemma 2، وFunctionGemma 270M. ويمكن أيضاً استيراد نماذج بصيغة LiteRT-LM من Hugging Face.',
          '**الميزات:** وضع التفكير (Thinking Mode، لنماذج Gemma 4 فقط)، ومهارات الوكيل (Agent Skills، مثل البحث في ويكيبيديا والخرائط، إضافةً إلى مهارات المجتمع)، وAsk Image، وAudio Scribe، وPrompt Lab، وقياس أداء النماذج.',
          '**القيود:** نماذج LiteRT-LM فقط، لا GGUF ولا MLX؛ ولا تذكر الصفحة Shortcuts أو Siri؛ ولا توجد لدى PromptQuorum أرقام سرعة له.',
          '**الأنسب لـ:** المستخدمين الراغبين في نماذج Gemma 4 من Google مع وضع تفكير مرئي وأدوات وكيل، دون تكلفة.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'تفيد Google بأن ذروة استهلاك الذاكرة نحو 607 ميجابايت على المعالج المركزي و1,450 ميجابايت على وحدة الرسومات لنموذج Gemma 4 E2B على iPhone 17 Pro (أرقام من الشركة المصنِّعة وفق صفحة Gemma 4 في LiteRT-LM من Google؛ ولم يُعِد PromptQuorum قياسها). E2B هو نقطة البداية العملية لمعظم الهواتف؛ أما E4B فيناسب أجهزة iPhone بذاكرة 8 جيجابايت فأكثر.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: تحسين لـ Apple Silicon',
        content:
          '**تحذير قِدم: لم يتلقَّ تطبيق MLC Chat لـ iPhone أي تحديث منذ الإصدار 1.6 في 27 سبتمبر 2024 (أكثر من 13 شهراً)، لذا قد يكون غير مُصان — تحقّق قبل الاعتماد عليه.** ولا يزال مستودع محرك MLC LLM نفسه نشطاً على GitHub (آخر نشاط في 6 أكتوبر 2026). MLC Chat مجاني ومفتوح المصدر، ويُشغّل نماذج مُجمَّعة بسلسلة أدوات MLC LLM بدلاً من صيغة GGUF المعيارية، ولم يواكب كتالوجه PocketPal AI أو Locally AI. المراجعة الكاملة: [مراجعة MLC Chat](/ar/power-local-llm/mlc-chat-review).',
        items: [
          '**ما هو:** تطبيق iOS المرجعي من مشروع MLC LLM، يُبرز الاستدلال المُسرَّع بـ Metal عبر MLC LLM على شريحة Apple Silicon.',
          '**التثبيت:** App Store → "MLC Chat". مجاني. يتطلب iOS/iPadOS 17.0 أو أحدث.',
          '**الإصدار وآخر تحديث:** v1.6، صدر في 27 سبتمبر 2024 (سجل إصدارات App Store؛ أضاف Llama 3.2 3B). قبله: أضاف 1.5 نموذج Gemma 2 2B (أغسطس 2024)، وأضاف 1.4 نماذج Phi-3 وMistral v3 وQwen2 (يونيو 2024). آخر تحديث لـ iPhone قبل أكثر من 13 شهراً — تحذير القِدم مفعّل.',
          '**السرعة (ادعاء من المشروع، لم تُقَس هنا):** يصف مشروع MLC LLM محركه المُسرَّع بـ Metal بأنه أسرع من التطبيقات المبنية على llama.cpp على نفس iPhone — لكن قائمة نماذج التطبيق نفسه سابقة لخيارات حالية مثل Phi-4 Mini وGemma 3، ما يجعل هذه الميزة غير قابلة للاختبار على النماذج الموصى بها في 2026 دون إصدار مُجمَّع ذاتياً.',
          '**مكتبة النماذج:** مقتصرة على النماذج التي جمَّعها مشروع MLC LLM قبل توقف التطبيق — Llama 3.2 3B وGemma 2 2B وPhi-3 وMistral v3 وQwen2 وإصدارات مشابهة من 2024. ليس كل GGUF من Hugging Face متوافقاً، ولا يتضمن إصدار App Store أي نموذج صغير من الجيل الحالي.',
          '**الأنسب لـ:** المطورين المستثمرين بالفعل في سلسلة أدوات MLC LLM والمستعدين لتجميع نموذجهم الخاص، أو من يحتاجون تحديداً أحد النماذج السابقة لعام 2025 المُضمَّنة فيه.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'بما أن إصدار App Store من MLC Chat لم يتلقَّ أي تحديث منذ 27 سبتمبر 2024، فلا تتوقع ظهور Phi-4 Mini أو Qwen3 أو Gemma 3 في منتقي النماذج. إذا كنت تريد نماذج من الجيل الحالي بكفاءة GPU من فئة Metal اليوم، فإن Locally AI (Apple MLX) أو PocketPal AI (llama.cpp مع Metal Performance Shaders) أو Google AI Edge Gallery (Gemma 4) هي البدائل التي لا تزال تحظى بصيانة نشطة.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: خارج App Store والمصدر لا يزال متاحاً',
        content:
          '**تحذير قِدم: آخر إصدار لـ LLM Farm (1.4.3) كان في 27 يناير 2025 وآخر دفعة كود في 30 يناير 2026 — قرابة تسعة أشهر دون تحديث — لذا قد يكون غير مُصان.** وتؤرّخ مراجعة PromptQuorum للمشروع إزالته من App Store بأغسطس 2025؛ ويصف ملف README الخاص به على GitHub التطبيق بأنه "غير متاح مؤقتاً" في App Store وTestFlight كليهما. لا يزال المشروع (GitHub: [guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)) مفتوح المصدر وشهد نشاطاً في مشكلات GitHub حتى أكتوبر 2026، لكن المستخدمين الجدد لم يعودوا قادرين على تثبيته من App Store؛ ويجب بناؤه من الكود المصدري عبر Xcode (وفق README: macOS 13+ وiOS 16+). المراجعة الكاملة: [مراجعة LLM Farm](/ar/power-local-llm/llm-farm-review).',
        items: [
          '**ما هو:** تطبيق iOS من المطور @guinmoon يُشغّل نماذج GGUF بخيارات إعداد واسعة، وكان يُوزَّع سابقاً عبر App Store.',
          '**التوفر الحالي:** غير قابل للتثبيت من App Store أو TestFlight وقت هذا التحديث. يظل الكود المصدري عاماً وقابلاً للبناء.',
          '**البناء من الكود المصدري:** استنسخ المستودع، افتحه في Xcode، وابنِه على جهاز باستخدام حساب Apple Developer مجاني أو مدفوع — وهو مسار التحميل الجانبي المعياري لأي تطبيق iOS مفتوح المصدر بلا صفحة في App Store.',
          '**الإعدادات المكشوفة (بعد البناء):** درجة الحرارة، top-p، top-k، أخذ عينات mirostat، عقوبة التكرار، موجّه النظام لكل نموذج، اختيار قالب الدردشة، طول نافذة السياق.',
          '**الأنسب لـ:** المطورين المرتاحين لبناء تطبيق من الكود المصدري في Xcode والراغبين تحديداً في ضوابط أخذ عينات mirostat. أما البقية فيُفضَّل استخدام PocketPal AI أو Locally AI، وكلاهما قابل للتثبيت بالكامل من App Store ومجاني.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تتوقع أن يعمل أي رابط App Store لـ LLM Farm — تعامل مع أي رابط من هذا النوع تجده في مكان آخر باعتباره قديماً. يتطلب البناء من الكود المصدري Xcode ومعرفة أساسية بتوقيع الكود في iOS. إذا كان ذلك جهداً أكبر مما تريد، فإن PocketPal AI يغطي نفس حالة استخدام "تطبيق دردشة مجاني ومرن" دون مغادرة App Store.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: ذكاء اصطناعي على الجهاز مدمج في النظام',
        content:
          '**يُشغّل Apple Intelligence نموذج الأساس الخاص بـ Apple والبالغ ~3B معامل على الجهاز في iPhone 15 Pro والإصدارات الأحدث (جيل iPhone 15 Pro، وتفيد التقارير بذاكرة 8 جيجابايت؛ ولا تعلن Apple حجم الذاكرة).** ليس تطبيق دردشة افتراضياً — بل يُشغّل ميزات النظام في Mail (الرد الذكي) والرسائل (أدوات الكتابة) والملاحظات (التلخيص) وملخصات الإشعارات. منذ iOS 26، يُتيح إطار عمل Foundation Models الخاص بـ Apple لمطوّري الجهات الخارجية استدعاء هذا النموذج نفسه على الجهاز مباشرةً، وتطبيقات مثل Locally AI تستخدمه الآن لتقديم واجهة دردشة حقيقية فوقه. ويوسّع iOS 27 هذا الإطار: يذكر دليل المطورين من Apple أن التطبيقات تستطيع استخدام أي نموذج لغوي يتوافق مع بروتوكول النماذج اللغوية فيه، بما في ذلك نماذج Apple نفسها والنماذج السحابية.',
        items: [
          '**أين يقع:** مدمج في iOS 18+ (أُضيف إطار عمل Foundation Models في iOS 26). يُفعَّل من الإعدادات → Apple Intelligence وSiri.',
          '**متطلبات الجهاز:** iPhone 15 Pro / 15 Pro Max، وسلسلة iPhone 16، وiPhone 16e، وسلسلة iPhone 17، وأجهزة 2026: iPhone 18 Pro وiPhone 18 Pro Max وiPhone Duo (A20 Pro). أجهزة iPhone الأقدم (14 وما قبله) لا تدعم Apple Intelligence. راجع قائمة التوافق الحالية من Apple لنظام iOS 27 قبل الشراء.',
          '**Siri AI (iOS 27):** تصف Apple ميزة Siri AI بأنها متاحة بنسخة تجريبية في iOS 27، وتُطرح بالإنجليزية أولاً، وليست متاحة مبدئياً في الاتحاد الأوروبي على iOS، وتخضع لحدود استخدام يومية في بعض الميزات المعتمدة على الخوادم. وهي منفصلة عن تطبيقات الدردشة على الجهاز في هذا الدليل.',
          '**الميزات على الجهاز:** أدوات الكتابة (إعادة الكتابة، التلخيص، المراجعة اللغوية) داخل أي حقل نصي، الرد الذكي في Mail والرسائل، ملخصات الإشعارات، إنشاء Genmoji.',
          '**إطار عمل Foundation Models (iOS 26+):** واجهة برمجة Swift أصلية تُتيح للمطورين وصولاً مباشراً إلى النموذج نفسه على الجهاز بأسطر برمجية قليلة — بهذه الطريقة يُتيحه Locally AI كخيار دردشة، وبها يستطيع إجراء "Use Model" في Shortcuts توجيه المطالبة إليه أو إلى Private Cloud Compute أو إلى ChatGPT.',
          '**Private Cloud Compute:** للمهام التي تتجاوز قدرة النموذج على الجهاز، يعود Apple Intelligence إلى Private Cloud Compute (PCC) — خوادم تُشغّلها Apple بنماذج أكبر تذكر Apple أنها لا تحتفظ ببيانات المستخدمين. PCC اختياري ويمكن تعطيله.',
          '**علاقته بتطبيقات الدردشة:** Apple Intelligence مكمّل لا بديل. تتولى ميزاته النظامية إعادة كتابة النصوص وتلخيصها داخل تطبيقات iOS؛ بينما توفر PocketPal AI وPrivate LLM وLocally AI وMLC Chat واجهة دردشة مخصصة لأي أسئلة — ويستطيع Locally AI الآن تقديم نوع الواجهة نفسه لنموذج Apple ذاته.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إذا كان Apple Intelligence هو حاجتك الوحيدة (إعادة كتابة الرسائل، تلخيص الإشعارات)، فلا تحتاج إلى تطبيق دردشة منفصل. وإذا أردت طرح أسئلة على النموذج مثل "اشرح النفق الكمي بمصطلحات بسيطة" أو "ضع خطة مشروع لـ X"، فثبّت تطبيق دردشة — سواء كان تطبيقاً مخصصاً مثل PocketPal AI، أو Locally AI القادر على وضع نموذج Apple ذاته على الجهاز خلف نافذة دردشة.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'النماذج حسب فئة iPhone',
        content:
          '**ذاكرة iPhone العشوائية هي التي تُحدد الحد الأقصى لحجم النموذج، لا جيل الشريحة.** يستطيع iPhone بذاكرة 6 جيجابايت (14 Pro، 15) تشغيل نماذج 1.7B بيسر؛ ويستطيع iPhone بذاكرة 8 جيجابايت فأكثر (15 Pro، سلسلة 16، 16e، سلسلة 17) تشغيل نماذج 3B–4B بيسر ونماذج 7B ببطء. نماذج صغيرة أحدث تستحق التجربة إلى جانب Phi-4 Mini: Gemma 4 E2B وE4B (من Google، أبريل 2026؛ نحو 2.58 جيجابايت و3.65 جيجابايت كملفات LiteRT-LM) وسلسلة Qwen3.5 الصغيرة (من Alibaba، مارس 2026؛ بأحجام 0.8B و2B و4B و9B، بترخيص Apache 2.0 وفق ملخص Artificial Analysis). لا توجد لدى PromptQuorum أرقام سرعة لها؛ ويوفرها Locally AI وGoogle AI Edge Gallery مباشرةً. للاطلاع على المشهد الأوسع للنماذج عبر جميع الأجهزة (ليس الأجهزة المحمولة فقط)، راجع [أفضل نماذج LLM المحلي في 2026](/ar/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-en.svg',
        imageCaption: 'نماذج LLM محلية موصى بها حسب فئة ذاكرة RAM في iPhone، من 4 GB حتى iPhone 17 Pro بذاكرة 12 GB',
        columns: ['الطراز (السنة، الذاكرة)', 'النموذج الموصى به', 'حجم التنزيل', 'سرعة تقريبية (إرشادية)'],
        rows: [
          { 'الطراز (السنة، الذاكرة)': 'iPhone 18 Pro / Pro Max (2026، ~12 جيجابايت وفق تقارير)', 'النموذج الموصى به': 'ابدأ كما في 17 Pro؛ لم تنشر Apple حجم الذاكرة', 'حجم التنزيل': '~2.5–3.7 جيجابايت', 'سرعة تقريبية (إرشادية)': 'لا يوجد رقم' },
          { 'الطراز (السنة، الذاكرة)': 'iPhone 17 Pro / 17 Pro Max (2025، 12 جيجابايت)', 'النموذج الموصى به': 'Phi-4 Mini / Llama 3.2 3B / Gemma 4 E4B', 'حجم التنزيل': '~2.5–3.7 جيجابايت', 'سرعة تقريبية (إرشادية)': '~13–20 رمزاً/ثانية (Phi-4 Mini)' },
          { 'الطراز (السنة، الذاكرة)': 'سلسلة iPhone 16 / 16e / 17 (2024–2025، 8 جيجابايت)', 'النموذج الموصى به': 'Phi-4 Mini (3.8B Q4_K_M) أو Gemma 4 E2B', 'حجم التنزيل': '~2.6–2.7 جيجابايت', 'سرعة تقريبية (إرشادية)': '~10–15 رمزاً/ثانية (Phi-4 Mini)' },
          { 'الطراز (السنة، الذاكرة)': 'iPhone 15 Pro / Pro Max (2023، 8 جيجابايت)', 'النموذج الموصى به': 'Phi-4 Mini (3.8B Q4_K_M)', 'حجم التنزيل': '~2.7 جيجابايت', 'سرعة تقريبية (إرشادية)': '~8–12 رمزاً/ثانية' },
          { 'الطراز (السنة، الذاكرة)': 'iPhone 13 Pro / 14 Pro / Pro Max (6 جيجابايت)', 'النموذج الموصى به': 'Qwen3 1.7B أو SmolLM 2 1.7B (Q4_K_M)', 'حجم التنزيل': '~1.1 جيجابايت', 'سرعة تقريبية (إرشادية)': '~15–20 رمزاً/ثانية' },
          { 'الطراز (السنة، الذاكرة)': 'iPhone 14 / 14 Plus / 15 / 15 Plus (6 جيجابايت)', 'النموذج الموصى به': 'Qwen3 1.7B أو SmolLM 2 1.7B (Q4_K_M)', 'حجم التنزيل': '~1.1 جيجابايت', 'سرعة تقريبية (إرشادية)': '~12–18 رمزاً/ثانية' },
          { 'الطراز (السنة، الذاكرة)': 'iPhone 13 / 12 / SE / الأقدم (4 جيجابايت)', 'النموذج الموصى به': 'غير موصى به لنماذج LLM على الجهاز', 'حجم التنزيل': '—', 'سرعة تقريبية (إرشادية)': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'لأجهزة iPhone الأقدم بذاكرة 6 جيجابايت، يُعدّ Qwen3 1.7B أو SmolLM 2 1.7B (Hugging Face) خيارين معقولين في 2026؛ وتُعدّ Qwen3.5 2B وGemma 4 E2B خيارين أحدث من الفئة الحجمية نفسها. تُنتج النماذج بهذا الحجم ردوداً قصيرة متماسكة (1–3 فقرات) لكنها تُعاني في الاستدلال متعدد الخطوات. لا تُثبّت Phi-4 Mini على iPhone بذاكرة 6 جيجابايت — فهو يتسع له نظرياً لكن iOS سيُنهي التطبيق تحت أي ضغط على الذاكرة. أرقام السرعة في الجدول نطاقات إرشادية مقرَّبة لنماذج Phi-4 Mini وLlama 3.2 3B وQwen3 1.7B، وغير مرتبطة بإصدار تطبيق أو بتاريخ اختبار؛ أما Gemma 4 وQwen3.5 فلا أرقام لهما هنا. لا تذكر صفحات منتجات Apple حجم ذاكرة iPhone: أرقام الذاكرة هنا مواصفات متداولة على نطاق واسع، ورقم ~12 جيجابايت لـ iPhone 18 Pro مصدره تقارير صحفية.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'استنزاف البطارية والتباطؤ الحراري',
        content:
          '**الاستدلال بنماذج LLM على الجهاز في iPhone مُكثَّف على المعالج المركزي ووحدة الرسومات ويُولّد حرارة.** وكدليل تقريبي (إرشادي، وليس قياساً مضبوطاً من PromptQuorum)، يستهلك الاستدلال النشط نحو 3–5 واط؛ والتوليد المستمر يُبطّئ الشريحة وقد يستنزف البطارية بنحو 20–30% في الساعة على iPhone 16 Pro.',
        image: '/images/iphone-llm-apps-battery-thermal-en.svg',
        imageCaption: 'دليل البطارية والحرارة لنماذج LLM المحلية على iPhone: استهلاك الطاقة والتقييد الحراري ونصائح التبريد',
        items: [
          '**استنزاف البطارية (الدردشة النشطة، إرشادي):** ~20–30% في الساعة على iPhone 16 Pro عند تشغيل Phi-4 Mini.',
          '**قد يؤدي التوليد المستمر إلى التباطؤ الحراري.** حين تسخن الشريحة، يُقلّص iOS سرعات المعالجة فتنخفض الرموز في الثانية. ويتوقف موعد بدء ذلك ومقدار الانخفاض على الهاتف والغطاء والشحن ودرجة حرارة الغرفة؛ ولم يقس PromptQuorum ذلك. يستعيد الجهاز سرعته بعد التبريد.',
          '**التخفيف:** أبقِ iPhone بشاشته لأعلى على سطح صلب (لا في يدك أو جيبك) خلال جلسات الاستدلال الطويلة للسماح بتبديد الحرارة. غطاء التبريد السلبي مفيد لكنه نادراً ما يكون ضرورياً للتفاعلات القصيرة.',
          '**الاستنزاف الخفي:** إذا تركت تطبيق الدردشة مفتوحاً في الخلفية بعد التوليد، تظل الذاكرة العشوائية محجوزة لكن لا يعمل أي استدلال — وتأثيره على البطارية ضئيل. إغلاق التطبيق بالكامل يُعيد ~3 جيجابايت من الذاكرة العشوائية.',
          '**الشحن عبر MagSafe أثناء الاستدلال:** قد يرفع الشحن أثناء التوليد الحرارة في أي iPhone، وبدرجة أكبر في iPhone 15 Pro؛ إذا سخن الهاتف فأوقف الشحن أو التوليد مؤقتاً، أو اشحن بعد الانتهاء.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تُشغّل الاستدلال بنماذج LLM على iPhone تحت أشعة الشمس المباشرة أو في سيارة ساخنة. في أشعة الشمس المباشرة أو السيارة الساخنة قد تبلغ الشريحة حدودها الحرارية في وقت أبكر، مما قد يُفعّل التباطؤ الحراري وتحذير Apple "يحتاج iPhone إلى التبريد". يبطؤ التوليد عادةً بدلاً من أن يُغلق التطبيق.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts وSiri والتحميل الجانبي',
        content:
          '**يتفاوت التكامل مع iOS تفاوتاً كبيراً بين التطبيقات.** يدعم Private LLM وLocally AI كلاهما Shortcuts؛ أما PocketPal AI وGoogle AI Edge Gallery وMLC Chat فهي تطبيقات دردشة مستقلة ولا يُذكر فيها تكامل مع Shortcuts أو Siri في ملف README أو صفحة App Store.',
        image: '/images/iphone-llm-apps-ios-integration-en.svg',
        imageCaption: 'تكامل iOS لتطبيقات LLM المحلية على iPhone: دعم Shortcuts وSiri والمصدر المفتوح والتثبيت من App Store',
        items: [
          '**Private LLM** يتصل بـ Shortcuts وSiri وفق المطوّر، ويمكنه تمرير الردود إلى تطبيقات تدعم x-callback-url. وهو الأكثر اندماجاً أصيلاً مع iOS بين تطبيقات الدردشة هنا.',
          '**Locally AI** يوفر إجراء Shortcuts مجاناً، ويستطيع توجيه اختصار إلى نموذج Apple الأساسي على الجهاز عبر تكامله مع إطار Foundation Models — بدون مُشغِّل صوتي عبر Siri، لكن مع أتمتة Shortcuts دون دفع.',
          '**PocketPal AI** تطبيق دردشة مستقل — لا يذكر ملف README الخاص به إجراء Shortcuts ولا تكاملاً مع Siri. تفتح التطبيق وتتحدث.',
          '**Google AI Edge Gallery** تطبيق دردشة وعرض مستقل — ولا تذكر صفحته في App Store إجراء Shortcuts ولا تكاملاً مع Siri.',
          '**MLC Chat** تطبيق مرجعي لمشروع MLC LLM — تكامل iOS بسيط وبدون تحديث لـ iPhone منذ سبتمبر 2024. بدون إجراء Shortcuts.',
          '**LLM Farm** غير متوفر حالياً على App Store، وحتى عند بنائه من الكود المصدري لا يملك إجراء Shortcuts.',
          '**Apple Intelligence** يتكامل مع iOS Shortcuts عبر إجراء "Use Model" (iOS 18.4+، وُسِّع في iOS 26 مع إطار عمل Foundation Models). يُوجَّه الطلب إلى النموذج على الجهاز أو إلى Private Cloud Compute أو إلى ChatGPT (قابل للضبط). ويمكن ربط المخرجات على الجهاز بإجراءات Shortcuts أخرى.',
          '**التحميل الجانبي:** PocketPal AI وPrivate LLM وLocally AI وGoogle AI Edge Gallery وMLC Chat موجودة في App Store ولا تستلزم تحميلاً جانبياً أو كسر حماية؛ وApple Intelligence مدمج في iOS. LLM Farm هو الاستثناء — أصبح تثبيته يستلزم الآن البناء من الكود المصدري في Xcode. في الاتحاد الأوروبي توجد منصات توزيع تطبيقات بديلة بموجب قانون الأسواق الرقمية (DMA)، لكن التطبيقات التي تعرضها يقررها كل مطوّر، لذا ثبّت من القناة الرسمية للمطوّر؛ ولا يحتاج أي من هذه التطبيقات إلى منصة بديلة.',
        ],
        promptExamples: [
          {
            label: 'اختصار Private LLM: تلخيص النص المحدد',
            text: '1. الإجراء: "Get Selected Text" (مدخل قائمة المشاركة في iOS).\n2. الإجراء: إجراء توليد النص في Private LLM (من إجراءات Shortcuts الخاصة بتطبيق Private LLM) → المطالبة: "لخّص النص التالي في ثلاث نقاط رئيسية: [النص المحدد]" → اختر نموذجاً مثبتاً في التطبيق.\n3. الإجراء: "Show Result" أو "Copy to Clipboard".\nأضفه إلى قائمة المشاركة لتشغيله على أي نص محدد في أي تطبيق، بالكامل دون اتصال. أسماء الإجراءات تتبع وصف المطوّر وقد تختلف باختلاف إصدار التطبيق.',
          },
          {
            label: 'اختصار Apple Intelligence: إعادة كتابة النبرة',
            text: '1. الإجراء: "Get Clipboard".\n2. الإجراء: "Use Model" → النموذج: On-device → المطالبة: "أعد كتابة هذا بنبرة مهنية وموجزة: [الحافظة]".\n3. الإجراء: "Copy to Clipboard".\nاربطه بأداة شاشة القفل لإعادة كتابة أي شيء تنسخه بضغطة واحدة.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للاستخدام بدون لمس الهاتف أثناء القيادة أو الطهي، يُعدّ Private LLM تطبيق الدردشة الوحيد في هذا الدليل الذي يذكر مطوّره تكامل Siri، مما يتيح استخدامه دون لمس الهاتف. يدعم Apple Intelligence الصوت عبر Siri لكن لمهام النظام فقط (الكتابة والتلخيص وإجراءات التطبيق) — ولا يتيح أسئلة وأجوبة عامة كما تفعل تطبيقات الدردشة.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**تثبيت نموذج أكبر مما تسمح به ذاكرة iPhone.** نموذج 7B على iPhone بذاكرة 8 جيجابايت غالباً ما يكون بطيئاً جداً للدردشة وقد يُغلقه iOS حين يستعيد الذاكرة لتطبيق آخر؛ قِس سرعته أولاً بأداة الأداء المدمجة في PocketPal AI. التزم بالنموذج الموصى به لفئة iPhone الخاصة بك (3B–4B لأجهزة 8 جيجابايت، و1.7B لأجهزة 6 جيجابايت).',
          '**توقّع جودة الذكاء الاصطناعي السحابي من النماذج على الجهاز.** Phi-4 Mini (3.8B) مثير للإعجاب لحجمه لكنه ليس GPT-5.5. استخدمه للدردشة والتلخيص والصياغة والأسئلة السريعة — لا للاستدلال متعدد الخطوات أو توليد الكود المعقد أو الكتابة الإبداعية الدقيقة.',
          '**تشغيل الاستدلال تحت أشعة الشمس المباشرة أو في سيارة ساخنة.** قد يبدأ التباطؤ الحراري سريعاً، ويتباطأ التوليد، وقد يظهر تحذير "يحتاج iPhone إلى التبريد". شغّل الاستدلال في درجة حرارة الغرفة.',
          '**إبقاء 3 تطبيقات دردشة أو أكثر مع نماذج بحجم 3 جيجابايت في كل منها.** ستستهلك ~10 جيجابايت من التخزين في نماذج مكررة. اختر تطبيقاً واحداً ونموذجاً واحداً؛ وألغِ تثبيت الباقي حتى تتأكد أنك بحاجة إليها.',
          '**افتراض أن Apple Intelligence لا يملك أي واجهة دردشة إطلاقاً.** كان ذلك صحيحاً حتى iOS 18، لكن منذ iOS 26 تستطيع تطبيقات مثل Locally AI وضع نموذج Apple على الجهاز خلف نافذة دردشة حقيقية عبر إطار عمل Foundation Models. أما ميزات النظام (أدوات الكتابة، الرد الذكي) بحد ذاتها فلا تزال ليست واجهة دردشة.',
          '**البحث عن LLM Farm في App Store.** هو غير متوفر حالياً على App Store (وتؤرّخ مراجعة PromptQuorum لـ LLM Farm إزالته بأغسطس 2025). البحث عنه في App Store مضيعة للوقت؛ استخدم PocketPal AI لنفس حالة الاستخدام المجانية المرنة، أو ابنِ LLM Farm من الكود المصدري في Xcode إذا احتجت تحديداً إلى ضوابط mirostat المكشوفة فيه.',
          '**افتراض أن "مجاني" يعني بلا مشتريات.** PocketPal AI مجاني للدردشة المحلية لكنه يبيع محتوى متقدماً اختيارياً (Pals و"PocketPal Plus")، بينما لا يعرض Locally AI وGoogle AI Edge Gallery أي مشتريات داخل التطبيق. تحقق من قسم المشتريات داخل التطبيق في الصفحة قبل التثبيت (أظهرت صفحة PocketPal AI في App Store الأمريكية تصنيفاً عمرياً +18 في 23 أكتوبر 2026).',
          '**الحكم على نموذج من جدول سرعة وحده.** نطاقات الرموز في الثانية في هذا الدليل إرشادية، والنماذج الأحدث مثل Gemma 4 وQwen3.5 ليست ضمنها. شغّل المطالبة نفسها على نموذجين في اختبار الأداء بتطبيق PocketPal AI قبل حذف النموذج الذي نزّلته بالفعل.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (README، ترخيص MIT، الإصدار v1.20.1 في 19 أكتوبر 2026) و[صفحة App Store](https://apps.apple.com/us/app/pocketpal-ai/id6502579498) (سجل الإصدارات، المشتريات داخل التطبيق، التصنيف العمري، iOS 15.1+). قُرئت في 23 أكتوبر 2026.',
          'Private LLM — [صفحة App Store](https://apps.apple.com/app/apple-store/id6448106860) (v1.9.16، 4.99 دولار، iOS 17.0+، مشاركة العائلة) و[privatellm.app](https://privatellm.app) (Siri وShortcuts، قائمة النماذج، شراء واحد لـ iPhone وiPad وMac). قُرئت في 23 أكتوبر 2026.',
          'Locally AI — [صفحة App Store](https://apps.apple.com/us/app/locally-ai/id6741426692) (v1.66.0، مجاني، Element Labs Inc، iOS 18.1+؛ فريق LM Studio) و[lmstudio.ai/locally](https://lmstudio.ai/locally) (LM Link). قُرئت في 23 أكتوبر 2026.',
          'Google AI Edge Gallery — [صفحة App Store](https://apps.apple.com/app/id6749645337) (v1.0.13، مجاني، iOS 17.0+، Gemma 4، Agent Skills، Thinking Mode) و[github.com/google-ai-edge/gallery](https://github.com/google-ai-edge/gallery) و[صفحة Gemma 4 في LiteRT-LM](https://developers.google.com/edge/litert-lm/models/gemma-4) من Google (أحجام ملفات E2B/E4B واستهلاك الذاكرة، أرقام الشركة المصنِّعة). قُرئت في 23 أكتوبر 2026.',
          'MLC Chat / مشروع MLC LLM — [صفحة App Store](https://apps.apple.com/us/app/mlc-chat/id6448482937) (v1.6، 27 سبتمبر 2024، سجل الإصدارات) و[llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) و[github.com/mlc-ai/mlc-llm](https://github.com/mlc-ai/mlc-llm) (مستودع المحرك). قُرئت في 23 أكتوبر 2026.',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (README: "غير متاح مؤقتاً" في TestFlight وApp Store؛ الإصدار 1.4.3 في 27 يناير 2025؛ آخر دفعة كود في 30 يناير 2026) و[مراجعة LLM Farm من PromptQuorum](/ar/power-local-llm/llm-farm-review) لمعرفة إزالته في أغسطس 2025. قُرئت في 23 أكتوبر 2026.',
          'Apple Intelligence والنماذج الأساسية على الجهاز — [Apple Machine Learning Research](https://machinelearning.apple.com) و[دليل ما الجديد في iOS 27 للمطورين](https://developer.apple.com/wwdc26/guides/ios/) (إطار عمل Foundation Models) و[صفحة iPhone 18 Pro](https://www.apple.com/iphone-18-pro/) (A20 Pro، Neural Engine مزدوج بـ16 نواة، Siri AI بنسخة تجريبية، بلا رقم للذاكرة) و[صفحة iPhone Duo](https://www.apple.com/iphone-duo/). قُرئت في 23 أكتوبر 2026.',
          'سلسلة Qwen3.5 الصغيرة (0.8B–9B، مارس 2026) — [ملخص Artificial Analysis](https://artificialanalysis.ai/articles/qwen3-5-small-models).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يستطيع iPhone فعلاً تشغيل نموذج 7B؟',
            a: 'من الناحية التقنية نعم على iPhone 15 Pro والإصدارات الأحدث (ذاكرة 8 جيجابايت)، لكن ليس بسرعة قابلة للاستخدام. نموذج 7B Q4 على iPhone 16 Pro غالباً ما يكون بطيئاً جداً للدردشة المريحة (إرشادي). يميل iOS أيضاً إلى إنهاء التطبيق حين تحتاج تطبيقات أخرى إلى الذاكرة. استخدم نماذج 3B–4B (Phi-4 Mini وLlama 3.2 3B وGemma 3 4B) للدردشة اليومية على الجهاز. للحصول على جودة 7B+، اتصل عن بُعد بجهاز Mac أو حاسوب منزلي يُشغّل Ollama.',
          },
          {
            q: 'هل يستنزف الذكاء الاصطناعي المحلي بطارية iPhone؟',
            a: 'نعم — الاستدلال النشط يستهلك عادةً نحو 3–5 واط، وكدليل تقريبي إرشادي قد يستنزف البطارية بنحو 20–30% في الساعة على iPhone 16 Pro. للاستخدام العرضي (بضع مطالبات)، يكون التأثير ضئيلاً. للاستخدام المستمر (محادثة طويلة، مهام تلخيص متعددة)، أبقِ iPhone موصولاً بالشاحن. النموذج ذاته في الذاكرة العشوائية بدون استدلال نشط له تأثير ضئيل على البطارية.',
          },
          {
            q: 'هل يسخن iPhone عند استخدام الذكاء الاصطناعي المحلي؟',
            a: 'نعم، قد يحدث ذلك، خاصةً أثناء التوليد المستمر الطويل. يُقلّص iOS سرعات المعالجة حين تسخن الشريحة، مما يخفض الرموز في الثانية؛ ويتفاوت موعد ذلك ومقداره بحسب الهاتف والغطاء والشحن ودرجة حرارة الغرفة، ولم يقس PromptQuorum ذلك. للتخفيف: أبقِ iPhone بشاشته لأعلى على سطح صلب (لا في يدك) خلال الجلسات الطويلة، وتجنب أشعة الشمس المباشرة. التفاعلات القصيرة لا تُسبّب عادةً حرارة ملحوظة.',
          },
          {
            q: 'هل يمكنني استخدام Siri مع نموذج محلي؟',
            a: 'نعم، مع Private LLM (4.99 دولار دفعة واحدة). يذكر المطوّر أنه يتصل مباشرةً بـ Siri وShortcuts، بحيث يمكن توجيه المطالبة إلى النموذج على الجهاز دون اتصال بالإنترنت. أما PocketPal AI وLocally AI وGoogle AI Edge Gallery وMLC Chat فلا تذكر تكاملاً صوتياً مع Siri، رغم أن Locally AI يدعم أتمتة Shortcuts. يتكامل Apple Intelligence مع Siri لكن لمهام النظام فقط (الكتابة والتلخيص وإجراءات التطبيق)، لا لأسئلة وأجوبة عامة؛ وSiri AI ميزة منفصلة بنسخة تجريبية في iOS 27، بالإنجليزية أولاً وغير متاحة مبدئياً في الاتحاد الأوروبي.',
          },
          {
            q: 'هل تعمل هذه التطبيقات على iPhone SE أو الأجهزة الأقدم؟',
            a: 'بشكل محدود. iPhone SE وiPhone 13 / 12 (ذاكرة 4 جيجابايت) دون الحد العملي لنماذج LLM على الجهاز في 2026. يستطيع iPhone 14 / 15 (غير Pro، ذاكرة 6 جيجابايت) تشغيل نماذج 1.7B (Qwen3 1.7B وSmolLM 2 1.7B) لكن ليس 3B+. ويبقى iPhone 13 Pro وiPhone 14 Pro (ذاكرة 6 جيجابايت) أيضاً عند 1.7B؛ أما iPhone 15 Pro (ذاكرة 8 جيجابايت) فيستطيع تشغيل نماذج 3B كـ Phi-4 Mini بنحو 8–12 رمزاً/ثانية تقريباً (إرشادي). للأجهزة الأقدم، المسار الأفضل هو الاتصال عن بُعد بجهاز Mac أو حاسوب منزلي.',
          },
          {
            q: 'هل يمكنني مزامنة سجل الدردشة بين iPhone وMac؟',
            a: 'لا في PocketPal AI وPrivate LLM وGoogle AI Edge Gallery وMLC Chat — يُخزَّن سجل الدردشة محلياً على كل جهاز، بدون مزامنة iCloud. يعمل Private LLM وLocally AI أيضاً بشكل أصلي على Mac، لكن السجل مع ذلك لا يتزامن بين نسختَي iPhone وMac. للحصول على سجل دردشة عبر الأجهزة، النهج العملي هو تشغيل Open WebUI على جهاز Mac منزلي والوصول إليه من متصفحَي iPhone وMac — يُخزّن Open WebUI سجل الدردشة على الخادم.',
          },
          {
            q: 'هل هذه التطبيقات متاحة خارج App Store؟',
            a: 'PocketPal AI مفتوح المصدر ويمكن بناؤه من المصدر عبر Xcode، لكن إصدار App Store هو التوزيع المعياري. LLM Farm هو الاستثناء الذي يستلزم الآن البناء من الكود المصدري — وهو غير متوفر حالياً على App Store أو TestFlight (يقول README: "غير متاح مؤقتاً"). أما Private LLM وLocally AI وGoogle AI Edge Gallery وMLC Chat فمتاحة في App Store فقط. في الاتحاد الأوروبي توجد منصات توزيع تطبيقات بديلة بموجب قانون الأسواق الرقمية (DMA)، لكن التطبيقات التي تعرضها يقررها كل مطوّر، لذا ثبّت من القناة الرسمية للمطوّر؛ ولا يحتاج أي من هذه التطبيقات إلى منصة بديلة.',
          },
          {
            q: 'هل يستلزم أي منها كسر حماية؟',
            a: 'لا. PocketPal AI وPrivate LLM وLocally AI وGoogle AI Edge Gallery وMLC Chat وApple Intelligence تعمل جميعها على iOS المعياري. كما أن بناء LLM Farm من الكود المصدري في Xcode لا يستلزم كسر حماية — فهو يستخدم التحميل الجانبي المعياري للمطورين، لا ثغرة كسر حماية. كسر الحماية غير مطلوب وغير مُوصى به لأي من هذه التطبيقات.',
          },
          {
            q: 'هل يمكنني استخدام الذكاء الاصطناعي المحلي في iOS Shortcuts؟',
            a: 'نعم، عبر Private LLM (إجراءات Shortcuts الخاصة به)، أو Locally AI (إجراء Shortcuts مجاني)، أو Apple Intelligence (إجراء "Use Model"، iOS 18.4+، وُسِّع في iOS 26). أما PocketPal AI وGoogle AI Edge Gallery وMLC Chat فلا تذكر إجراءات Shortcuts. من بين التطبيقات المقارَنة هنا، يُعدّ Locally AI الخيار المجاني الوحيد الذي يذكر دعم Shortcuts والوصول إلى نموذج Apple ذاته على الجهاز معاً.',
          },
          {
            q: 'كيف يُقارن الذكاء الاصطناعي المحلي بتطبيق ChatGPT على iPhone؟',
            a: 'النماذج على الجهاز (Phi-4 Mini وLlama 3.2 3B) لا تزال متأخرة بوضوح عن نماذج السحابة المتطورة في الاستدلال المعقد والمعرفة الواسعة بالعالم والمهام متعددة الوسائط، لكنها أسرع في الاستفسارات البسيطة (بدون رحلة ذهاب وإياب عبر الشبكة) ووفق وثائق كل تطبيق تُبقي الدردشة على الجهاز. المقايضة الصريحة: الذكاء الاصطناعي المحلي للمهام الروتينية والخاصة؛ وChatGPT أو تطبيق سحابي آخر للأسئلة الصعبة العرضية. كثير من المستخدمين في 2026 يحتفظون بكليهما ويختارون وفق الاستفسار.',
          },
          {
            q: 'هل لا يزال LLM Farm آمناً للاستخدام بعد إزالته من App Store؟',
            a: 'الكود المصدري عام على GitHub وما زال يتلقى نشاطاً في المشكلات حتى 2026، لكن آخر إصدار (1.4.3) كان في 27 يناير 2025 وآخر دفعة كود في 30 يناير 2026، لذا قد يكون غير مُصان. وبعد بنائه من الكود المصدري وتحميله جانبياً، لم يعد يمر بعملية مراجعة App Store الخاصة بـ Apple. إذا لم تكن بحاجة تحديداً إلى ضوابط أخذ عينات mirostat، فإن PocketPal AI يغطي نفس حالة الاستخدام المجانية والمرنة ومفتوحة المصدر بينما يبقى في App Store بمراجعة Apple المعيارية.',
          },
          {
            q: 'أي من تطبيقات iPhone هذه مجاني؟',
            a: 'PocketPal AI مجاني (ترخيص MIT) مع مشتريات اختيارية داخل التطبيق لـ Pals المتقدمة و"PocketPal Plus". Locally AI وGoogle AI Edge Gallery مجانيان ولا تُعرض لهما مشتريات داخل التطبيق. MLC Chat مجاني. LLM Farm مجاني لكن يجب بناؤه من الكود المصدري. Private LLM بسعر 4.99 دولار دفعة واحدة بلا مشتريات داخل التطبيق معروضة. Apple Intelligence مدمج في iOS. قُرئت الأسعار من App Store الأمريكي في 23 أكتوبر 2026 وقد تختلف حسب البلد.',
          },
          {
            q: 'هل يستطيع iPhone Duo أو iPhone 18 Pro تشغيل نموذج لغوي محلي دون اتصال؟',
            a: 'من حيث المبدأ نعم: كلاهما يستخدم شريحة A20 Pro من Apple، وتعمل التطبيقات في هذا الدليل على أي iPhone يستوفي الحد الأدنى لنظام iOS الخاص بها. ما يحدد حجم النموذج هو الذاكرة العشوائية، ولا تذكر صفحتا iPhone 18 Pro وiPhone Duo لدى Apple رقماً للذاكرة؛ وتضع تقارير صحفية iPhone 18 Pro عند 12 جيجابايت، وهو غير مؤكد. لا توجد لدى PromptQuorum سرعات مقاسة للهاتفين. ثبّت PocketPal AI وشغّل اختبار الأداء المدمج فيه لترى ما يفعله هاتفك فعلياً.',
          },
          {
            q: 'هل تعمل هذه التطبيقات على iPad؟',
            a: 'نعم لمعظمها. يذكر PocketPal AI (iPadOS 15.1+، دعم كامل لـ iPad وفق README) وPrivate LLM (iPadOS 17.0+) وLocally AI (iPadOS 18.1+) دعم iPad. أما صفحة Google AI Edge Gallery فتتطلب iOS 17.0 أو أحدث؛ راجع صفحته لمعرفة توافقه مع iPad الخاص بك. وكما في iPhone، تحدد الذاكرة العشوائية النماذج التي تتسع للجهاز. للاطلاع على نصائح خاصة بـ iPad راجع [كيف تُشغّل الذكاء الاصطناعي على جهاز لوحي](/ar/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: 'لماذا اختفى LLM Farm من App Store؟',
            a: 'يقول README الخاص بالمشروع: "The app is temporarily unavailable in TestFlight and Appstore." لم يجد PromptQuorum سبباً علنياً للإزالة، لذا فإن أي تفسير تقرأه في مكان آخر غير مؤكد (راجع [مراجعة LLM Farm](/ar/power-local-llm/llm-farm-review)). لا يزال الكود المصدري عاماً، لكن آخر إصدار كان 1.4.3 في 27 يناير 2025. للحصول على بديل مجاني قابل للتثبيت من App Store، استخدم PocketPal AI أو Locally AI.',
          },
          {
            q: 'هل يوجد تطبيق Ollama لـ iPhone؟',
            a: 'تدرج صفحة التنزيل الخاصة بـ Ollama أنظمة macOS وWindows وLinux، ولا تدرج تطبيق iPhone. لاستخدام نماذج Ollama أو LM Studio من iPhone، شغّل الخادم على Mac أو حاسوب واتصل من تطبيق عميل؛ ويوفر Locally AI ميزة LM Link، وهي اتصال بـ LM Studio على جهاز Mac يصفه LM Studio بأنه مشفّر. أما للنماذج التي تعمل بالكامل على الهاتف، فاستخدم التطبيقات في هذا الدليل.',
          },
          {
            q: 'هل أنزّل Gemma 4 أم Phi-4 Mini؟',
            a: 'لا يملك PromptQuorum اختباراً مباشراً للمقارنة بين النموذجين على iPhone. حقائق قد تفيدك: نموذجا Gemma 4 E2B وE4B هما نموذجا Google المناسبان للهاتف (نحو 2.58 جيجابايت و3.65 جيجابايت كملفات LiteRT-LM في Google AI Edge Gallery؛ ويدرج Locally AI أيضاً Gemma 4)، بينما Phi-4 Mini (3.8B Q4_K_M، ~2.7 جيجابايت) هو النموذج الذي تستند إليه أرقام السرعة في هذا الدليل. على iPhone بذاكرة 8 جيجابايت جرّب كليهما على مطالباتك الخاصة وقارن الرموز في الثانية في اختبار الأداء بتطبيق PocketPal AI؛ وعلى iPhone بذاكرة 6 جيجابايت ابقَ مع النماذج من فئة 1.7B.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — مراجعة PromptQuorum الكاملة للخيار المجاني مفتوح المصدر الافتراضي.',
          '[مراجعة Private LLM](/ar/power-local-llm/private-llm-review) — الخيار المدفوع مع Siri وShortcuts.',
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — تطبيق MLX المجاني من فريق LM Studio.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق Gemma 4 المجاني من Google.',
          '[مراجعة MLC Chat](/ar/power-local-llm/mlc-chat-review) و[مراجعة LLM Farm](/ar/power-local-llm/llm-farm-review) — التطبيقان المصنّفان قديمين في هذا الدليل.',
          '[أفضل تطبيقات LLM المحلي لـ Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — مقالة مُرافِقة تُغطي البدائل على Android (Maid وLayla وMLC Chat وTermux + Ollama).',
          '[كيف تُشغّل الذكاء الاصطناعي على الجهاز اللوحي: iPad وAndroid (2026)](/ar/power-local-llm/run-ai-on-tablet-ipad-android) — دليل المنصة لقرّاء الأجهزة اللوحية.',
          '[أفضل نماذج LLM للأجهزة المحمولة في 2026: Phi-4 Mini مقابل Gemma 3 مقابل SmolLM](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — مقالة مُرافِقة من جانب النموذج لاختيار ما تُشغّله في هذه التطبيقات.',
          '[أفضل نماذج LLM المحلي في 2026](/ar/local-llms/best-local-llms-2026) — مشهد أوسع للنماذج يُغطي جميع مستويات الأجهزة، لا الأجهزة المحمولة فقط.',
          '[بناء مساعد صوتي محلي على هاتفك: Whisper + LLM محلي](/ar/power-local-llm/voice-assistant-local-mobile-offline) — يُوسّع هذه التطبيقات بإدخال/إخراج صوتي بدون اتصال.',
          '[أفضل تطبيق ذكاء اصطناعي محلي للحواسيب الضعيفة](/ar/power-local-llm/best-local-ai-app-low-end-pc) — بديل سطح مكتب للمستخدمين الراغبين في الاتصال عن بُعد بجهاز منزلي أكثر قدرة.',
          '[مراجعة Enclave AI](/ar/power-local-llm/enclave-ai-review) — نظرة أقرب على Enclave AI، وهو مساعد ذكاء اصطناعي على الجهاز لأجهزة iPhone وiPad وMac مع التفاعل مع المستندات وأتمتة Siri وShortcuts.',
          '[دليل برامج LLM المحلي 2026](/ar/directory) — دليل شامل بجميع أدوات LLM المحلي الجديرة بالاهتمام عبر جميع المنصات.',
          '[النسخة البرتغالية: Melhores Apps LLM Local para iPhone 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — النسخة البرتغالية من هذا الدليل',
        ],
      },
    },
},
}
