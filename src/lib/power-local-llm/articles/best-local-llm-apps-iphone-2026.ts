// Power Local LLM — Best Local LLM Apps for iPhone in 2026 (Run AI Without WiFi)
// Slug: best-local-llm-apps-iphone-2026
// All 9 locale blocks authored (en, de, ja, fr, zh, es, ko, pt, ar).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-09-01',
    last_full_refresh: '2026-09-01',
    next_refresh_due: '2027-03-01',
    theme: 'Mobile & Edge LLMs',
    title: 'Best Local LLM Apps for iPhone in 2026 (Run AI Without WiFi)',
    seoTitle: 'Best Local LLM Apps for iPhone 2026 (Run AI Offline)',
    intro:
      'Five iPhone apps run real LLMs fully on-device in 2026: PocketPal AI, Private LLM, Locally AI (by LM Studio), MLC Chat, and Apple Intelligence (system-integrated). All work without WiFi once the model is downloaded. This guide ranks them on tokens-per-second on iPhone 16 Pro and iPhone 17 Pro, model library, RAM management, privacy posture, and iOS integration — and explains why LLM Farm dropped out of the ranking.',
    metaDescription:
      'Five iPhone apps that run real LLMs on-device in 2026. PocketPal AI, Private LLM, Locally AI, MLC Chat tested on iPhone 16 Pro and 17 Pro. Speed, privacy, model library compared.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-en.webp',
    twitterDescription:
      'iPhone local AI in 2026: PocketPal AI (free default), Private LLM ($4.99, Siri + Shortcuts), Locally AI (LM Studio, MLX), MLC Chat (Metal-accelerated). All run offline once downloaded.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
    ],
    current_hardware_mentioned: [
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
    ],
    leadAnswerBlock:
      '**For most iPhone users in 2026, install PocketPal AI from the App Store and download Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** It is free, open-source, runs on iPhone 14 Pro and newer (any iPhone with 6 GB+ RAM), and produces ~10–15 tokens/sec on iPhone 16 Pro for everyday chat. For Siri and Shortcuts integration, Private LLM is the strongest paid option ($4.99 one-time, covers iPhone, iPad, and Mac). Locally AI — now developed by the LM Studio team — is the modern free alternative built on Apple MLX, with Shortcuts support and access to Apple\'s on-device foundation model. MLC Chat remains the Metal-acceleration reference app but has not been updated since late 2024. LLM Farm was delisted from the App Store in August 2025 and is now build-from-source only. Apple Intelligence runs models on-device too but is system-integrated and not a chat app — it complements rather than competes with these apps.',
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM app for iPhone in 2026?',
        answer:
          'PocketPal AI is the best free default for most iPhone users — open-source, App Store install, supports any GGUF model from Hugging Face, and runs Phi-4 Mini (3.8B) at ~10–15 tokens/sec on iPhone 16 Pro. Private LLM is the strongest paid option ($4.99 one-time, iPhone + iPad + Mac) with iOS Shortcuts and Siri integration. Locally AI, developed by the LM Studio team, is the free Apple MLX option with Shortcuts support and access to Apple\'s on-device foundation model. MLC Chat is Metal-accelerated but dormant since late 2024. Apple Intelligence runs on-device models too but is system-integrated and complements these apps rather than replacing them.',
        bullets: [
          'PocketPal AI — free, open-source, App Store. Best default for most users. Supports any GGUF model.',
          'Private LLM — $4.99 one-time (iPhone + iPad + Mac). Best paid option. iOS Shortcuts + Siri integration.',
          'Locally AI — free, by the LM Studio team. Apple MLX engine, Shortcuts support, Apple Foundation Models access.',
          'MLC Chat — free, MLC LLM project. Metal-accelerated, but no app update since late 2024 (older model library).',
          'Apple Intelligence — system-integrated, not a separate app. On-device 3B model used by Mail, Messages, and Notes.',
          'Recommended model for iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — runs at ~10–15 tokens/sec.',
          'Older iPhones (14 Pro): Qwen3 1.7B or SmolLM 2 1.7B — fits in 6 GB RAM and runs at ~15–20 tokens/sec.',
        ],
        updatedDate: '2026-09-01',
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
      { label: 'MLC Chat: Apple Silicon Optimisation', anchor: '#mlc-chat' },
      { label: 'LLM Farm: Delisted but Still Configurable', anchor: '#llm-farm' },
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
          '**PocketPal AI is the best free default.** Open-source, App Store install, supports any GGUF model from Hugging Face. Runs Phi-4 Mini at ~10–15 tokens/sec on iPhone 16 Pro. Recommended starting point for most iPhone users.',
          '**Private LLM is the best paid option ($4.99 one-time, no subscription).** One purchase covers iPhone, iPad, and Mac with Family Sharing. Curated model library, iOS Shortcuts integration, and Siri "Hey Siri, ask Private LLM" support.',
          '**Locally AI is the free MLX-based alternative, now developed by the LM Studio team.** Runs Llama, Gemma, Qwen, and DeepSeek models on Apple MLX, works with iOS Shortcuts, and can expose Apple\'s own on-device foundation model as a chat interface.',
          '**MLC Chat is Metal-accelerated but dormant.** Its MLC LLM engine still generates ~25–35% faster than llama.cpp-based apps on the same hardware, but the app has not been updated since late 2024, so its model library predates Phi-4 Mini and Gemma 3.',
          '**LLM Farm was delisted from the App Store in August 2025.** Its own README calls it "temporarily unavailable". It remains open-source and build-from-source via Xcode, and stays the most configurable option (mirostat, chat templates) for developers.',
          '**Apple Intelligence is on-device but not a separate app.** Apple\'s ~3B foundation model powers system features (Writing Tools, Smart Reply, Notification Summaries). Since iOS 26, third-party apps can call it via the Foundation Models framework, and Shortcuts can prompt it with the "Use Model" action.',
          '**Recommended model for iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Best balance of quality and speed for the 8 GB+ RAM tier. Older iPhones with 6 GB RAM (iPhone 14 Pro): Qwen3 1.7B or SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Apps compared:** PocketPal AI, Private LLM, Locally AI (by LM Studio), MLC Chat, Apple Intelligence (system) — plus LLM Farm, delisted from the App Store in August 2025.',
          '**Test devices:** iPhone 16 Pro (A18 Pro, 8 GB RAM) and iPhone 17 Pro (A19 Pro, 12 GB RAM).',
          '**Inference engines:** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), MLC LLM with Metal (MLC Chat), proprietary on-device runtime (Private LLM, Apple Intelligence).',
          '**Minimum iPhone for 3B+ models:** iPhone 14 Pro (A16, 6 GB RAM) for 1.7B; any 8 GB+ iPhone (15 Pro, 16 series, 16e, 17 series) for 3B–4B.',
          '**Best free app overall:** PocketPal AI — App Store, open-source, model flexibility.',
          '**Best paid app overall:** Private LLM — $4.99 one-time (iPhone + iPad + Mac), Shortcuts + Siri support.',
          '**Offline:** All five run fully offline once the model is downloaded; no cloud calls.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Which iPhone App Should You Install First?',
        content:
          '**For most users: PocketPal AI from the App Store, then download Phi-4 Mini (3.8B Q4_K_M).** This combination works on iPhone 14 Pro and newer, costs nothing, and produces usable output for everyday chat, summarisation, and quick drafting. Choose a different app only when you have a specific need it does not cover.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-en.webp',
        imageCaption: 'Which local AI app to install on iPhone: PocketPal AI (free default), Private LLM (Siri + Shortcuts), Locally AI (free MLX, LM Studio team), MLC Chat (Metal-fast but dormant), Apple Intelligence (iOS built-in).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For most iPhone users in 2026, install PocketPal AI (free, App Store) and download Phi-4 Mini — it covers everyday chat, summarisation, and drafting on any iPhone with 6 GB+ RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Five iPhone apps run AI fully on your phone in 2026. PocketPal AI is the best free starting point — install it, download a 2.7 GB model file once, and you have a private chat assistant that works on the train without WiFi. Private LLM is the paid option if you want Siri to talk to the local model. Locally AI, from the LM Studio team, is the free modern alternative with Shortcuts support. MLC Chat is fast but no longer updated. Apple Intelligence is built into iOS but not a chat app. PocketPal AI fits 90% of use cases.',
          },
        ],
        decisionBlock: {
          title: 'Decision: Which iPhone Local AI App?',
          localIf: [
            'You want a free chat AI that works offline → PocketPal AI',
            'You want Siri to talk to your local model → Private LLM',
            'You want a free MLX app with Shortcuts and Apple Foundation Models access → Locally AI',
            'You want maximum Metal-accelerated speed and accept an older model library → MLC Chat',
            'You only need writing assistance in Mail / Messages / Notes → Apple Intelligence (built-in)',
          ],
          cloudIf: [
            'You need 70B+ model quality (Llama 3.3 70B, GPT-5.5 tier) → use cloud or remote-connect to a home machine',
            'You need access to GPT-5.5, Claude Opus, or Gemini specifically → cloud apps (these are not available locally)',
            'You need real-time vision or multimodal output beyond text → cloud (on-device multimodal is limited in 2026)',
          ],
          quick: [
            'Free + works for 90% of users: PocketPal AI',
            'Paid + iOS-native integration: Private LLM',
            'Free + LM Studio ecosystem: Locally AI',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Install PocketPal AI first, even if you plan to pay for Private LLM later. Use PocketPal AI to test whether on-device inference on your iPhone tier feels fast enough for your use case. If yes, decide whether the iOS Shortcuts and Siri integration in Private LLM is worth $4.99. If no, you saved $4.99 finding out before paying.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone App Comparison Table',
        content:
          '**The five apps differ on three axes that matter to most users: cost, model flexibility, and integration with iOS.** Speed differences exist but are smaller than the gap between any of these apps and a cloud LLM.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-en.webp',
        imageCaption: 'iPhone local LLM app comparison: PocketPal AI (free, ~10–15 tok/s), Locally AI (free, Apple MLX + Shortcuts), MLC Chat (free, ~14–20 tok/s Metal-accelerated, dormant since late 2024), Private LLM ($4.99 one-time, Siri + Shortcuts), Apple Intelligence (system-integrated).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI is the best free default, Private LLM is the best paid option, Locally AI is the free MLX pick from the LM Studio team, MLC Chat is Metal-fast but dormant, Apple Intelligence is system-integrated.',
          },
          {
            type: 'plain-terms',
            text: 'The choice usually comes down to three things: do you want to pay for Siri integration (Private LLM), do you want the LM Studio ecosystem with Shortcuts for free (Locally AI), or do you want maximum raw speed and accept an older model library (MLC Chat). For everything else, PocketPal AI is the default. The numbers in the table assume Q4_K_M quantisation — the standard for mobile inference in 2026.',
          },
        ],
        columns: ['App', 'Link', 'Cost', 'Tokens/sec (Phi-4 Mini, 16 Pro)', 'Privacy', 'Best for'],
        rows: [
          { 'App': 'PocketPal AI', 'Link': '[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)', 'Cost': 'Free (open-source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacy': 'Local-only, no telemetry', 'Best for': 'Free default for most users' },
          { 'App': 'Private LLM', 'Link': '[privatellm.app](https://privatellm.app)', 'Cost': '$4.99 one-time', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–14', 'Privacy': 'Local-only, opt-in analytics', 'Best for': 'iOS Shortcuts + Siri integration' },
          { 'App': 'Locally AI', 'Link': '[lmstudio.ai/locally](https://lmstudio.ai/locally)', 'Cost': 'Free (LM Studio team)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A — MLX catalog (no Phi-4)', 'Privacy': 'Local-only, no data collection', 'Best for': 'MLX + Shortcuts, LM Studio link' },
          { 'App': 'MLC Chat', 'Link': '[llm.mlc.ai](https://llm.mlc.ai)', 'Cost': 'Free (open-source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A — library predates Phi-4', 'Privacy': 'Local-only, no telemetry', 'Best for': 'Metal speed, older model set' },
          { 'App': 'LLM Farm', 'Link': '[github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)', 'Cost': 'Free (build from source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacy': 'Local-only, no telemetry', 'Best for': 'Power users (App Store delisted)' },
          { 'App': 'Apple Intelligence', 'Link': '[apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)', 'Cost': 'Free (built into iOS)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A (system feature)', 'Privacy': 'Local + opt-in Private Cloud Compute', 'Best for': 'Mail, Messages, Notes assistance' },
        ],
        note:
          '**Note on Apple Neural Engine (ANE) vs Metal vs MLX:** PocketPal AI and LLM Farm use llama.cpp with Metal Performance Shaders for inference, which runs on the GPU. MLC Chat uses MLC LLM with deeper Metal optimisation, achieving 25–35% higher tokens/sec on the same hardware for the models it supports. Locally AI uses Apple MLX, Apple\'s own open-source array framework, which reaches similar GPU efficiency on Apple Silicon. Apple Intelligence uses ANE specifically for the system ~3B model, which is more power-efficient but less flexible than Metal-based inference. Since iOS 26, third-party apps can call that system model through the Foundation Models framework — Locally AI does exactly this — but custom GGUF/MLX models still cannot directly target the ANE.',
        callouts: [
          {
            type: 'tip',
            text: 'Tokens/sec figures assume Q4_K_M quantisation (the standard for mobile inference in 2026) and an idle iPhone with no other heavy apps running. Background apps reduce throughput by 10–30%. Tokens/sec on iPhone 17 Pro is roughly 20–30% higher than iPhone 16 Pro thanks to A19 Pro improvements.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: Free Open-Source Default',
        content:
          '**PocketPal AI is the recommended starting point for most iPhone users in 2026.** It is free, open-source (GitHub: a-ghorbani/pocketpal-ai), available on the App Store, and supports any GGUF model from Hugging Face. The app uses llama.cpp under the hood with Apple Silicon optimisations.',
        items: [
          '**What it is:** an iOS app that runs GGUF models locally using llama.cpp. No subscription, no telemetry, no account required.',
          '**Install:** App Store → "PocketPal AI". Free download.',
          '**Adding a model:** in the app, tap Models → "Add from Hugging Face" → search (e.g. "phi-4-mini-instruct-Q4_K_M") → tap to download. The model is stored in the app\'s local storage (~2.7 GB for Phi-4 Mini Q4).',
          '**Generation speed (iPhone 16 Pro):** Phi-4 Mini ~10–15 tok/sec, Llama 3.2 3B ~12–18 tok/sec, Gemma 3 4B ~7–10 tok/sec, Qwen3 1.7B ~18–24 tok/sec.',
          '**Best for:** users who want a free, App Store-installable, no-account chat app that supports any community-released GGUF model.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The PocketPal AI model picker has a "Recommended" filter that shows models verified to fit on your device\'s RAM. For an iPhone 16 Pro (8 GB RAM), the picker recommends Q4_K_M variants of models up to ~4B parameters. Trust this filter — running an oversized model leads to iOS killing the app mid-response.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: Paid Option with iOS Integration',
        content:
          '**Private LLM is the strongest paid iPhone option in 2026 ($4.99 one-time, no subscription).** It is App Store only and ships with a curated library of optimised models. Its differentiator is iOS integration: Shortcuts actions and a "Hey Siri, ask Private LLM" voice command.',
        items: [
          '**What it is:** a paid iOS app with a curated model library and deep iOS integration. Uses a proprietary on-device runtime optimised for Apple Silicon.',
          '**Install:** App Store → "Private LLM". One-time purchase $4.99 (no subscription).',
          '**Curated model library:** ~30 models pre-tested and optimised for iPhone, including Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct, and several uncensored variants. Less flexibility than PocketPal AI but no risk of installing a model that crashes.',
          '**iOS Shortcuts:** Private LLM exposes a "Generate Text with Private LLM" action that you can chain into Shortcuts automations. Useful for triggering local AI from a button on your home screen or via NFC tags.',
          '**Siri integration:** "Hey Siri, ask Private LLM [your question]" routes the prompt to the on-device model and reads the answer back. Works without an internet connection. Latency is higher than the chat UI (~3–5 seconds before audio starts).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Private LLM is a universal purchase: the $4.99 one-time price covers iPhone, iPad, and Mac in a single buy, and Apple Family Sharing extends it to up to six family members. No subscription and no in-app purchases — the listed price is the total cost.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: LM Studio\'s Free MLX App',
        content:
          '**Locally AI is a free, privacy-focused chat app now developed by the LM Studio team, built on Apple\'s own MLX framework instead of llama.cpp.** It is the newest serious entrant in this category and the only app here that exposes Apple\'s on-device foundation model as a chat interface.',
        items: [
          '**What it is:** an iOS/iPadOS/macOS app using Apple MLX for inference, developed by the team behind the desktop LM Studio app.',
          '**Install:** App Store → "Locally AI". Free, no account required, 100% offline.',
          '**Model library:** Llama 3.2, Gemma 2/3/4, Qwen 3, DeepSeek, LFM 2.5, Bonsai, Ministral 3, and Apple Foundation Models — a broader and more current catalog than MLC Chat\'s.',
          '**iOS Shortcuts:** exposes a Shortcuts action, matching Private LLM\'s automation support at zero cost.',
          '**LM Link:** an optional feature that connects to LM Studio running on a Mac over an end-to-end encrypted link, letting the iPhone app hand off to a larger model on a home machine when needed.',
          '**Requirements:** iOS/iPadOS 18.1+ (Apple Silicon-class efficiency benefits most on iPhone 15 Pro and newer).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI is the only app in this guide that can put Apple\'s own on-device foundation model behind a normal chat window — useful if you want to test what Apple Intelligence\'s model can do without hunting through Writing Tools menus. For third-party GGUF-style flexibility, PocketPal AI still has the larger model catalog.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: Apple Silicon Optimisation',
        content:
          '**MLC Chat (from the MLC LLM project) remains the Metal-acceleration reference app on iPhone, but the app itself has not shipped an update since late 2024.** It is free, open-source, and runs models compiled by the MLC LLM toolchain rather than standard GGUF — that compiled-model requirement is also why its catalog has not kept pace with PocketPal AI or Locally AI.',
        items: [
          '**What it is:** the iOS reference app from the MLC LLM project, demonstrating MLC LLM\'s Metal-accelerated inference on Apple Silicon.',
          '**Install:** App Store → "MLC Chat". Free.',
          '**Speed advantage (architecture-level):** MLC LLM\'s Metal-accelerated engine generates ~25–35% faster than llama.cpp-based apps on the same iPhone for models both support — but the app\'s own model list predates current picks like Phi-4 Mini and Gemma 3, so this advantage is untestable on 2026\'s recommended models without a self-compiled build.',
          '**Model library:** limited to models the MLC LLM project compiled before the app went dormant — Llama 3.2 3B, RedPajama, and similar 2024-era releases. Not every Hugging Face GGUF works, and no current-generation small model ships in the App Store build.',
          '**Best for:** developers already invested in the MLC LLM toolchain who are willing to compile their own model, or who specifically need one of the pre-2025 models it already ships.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Because the App Store build of MLC Chat has not been updated since late 2024, do not expect Phi-4 Mini, Qwen3, or Gemma 3 to appear in its picker. If you want current-generation models with Metal-class GPU efficiency today, Locally AI (Apple MLX) or PocketPal AI (llama.cpp with Metal Performance Shaders) are the actively maintained alternatives.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: Delisted but Still Configurable',
        content:
          '**LLM Farm was removed from the App Store and TestFlight in August 2025 — its own GitHub README describes the app as "temporarily unavailable" on both.** The project (GitHub: guinmoon/LLMFarm) is still open-source and has seen GitHub issue activity into 2026, but new users can no longer install it from the App Store; it must be built from source via Xcode.',
        items: [
          '**What it is:** an iOS app from developer @guinmoon that runs GGUF models with extensive configuration options, previously distributed on the App Store.',
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
          '**Apple Intelligence runs Apple\'s own ~3B foundation model on-device on iPhone 15 Pro and newer (A17 Pro chip with 8 GB RAM minimum).** It is not a chat app by default — it powers system features in Mail (Smart Reply), Messages (writing tools), Notes (summarisation), and Notification Summaries. Since iOS 26, Apple\'s Foundation Models framework lets third-party developers call that same on-device model directly, and apps like Locally AI now use it to expose a genuine chat interface on top of it.',
        items: [
          '**Where it lives:** integrated into iOS 18+ (Foundation Models framework added in iOS 26). Enable in Settings → Apple Intelligence & Siri.',
          '**Hardware requirement:** iPhone 15 Pro / 15 Pro Max, iPhone 16 series, iPhone 16e, iPhone 17 series. Earlier iPhones (14 and below) do not support Apple Intelligence.',
          '**On-device features:** Writing Tools (rewrite, summarise, proofread) inside any text field, Smart Reply in Mail and Messages, Notification Summaries, Genmoji generation.',
          '**Foundation Models framework (iOS 26+):** a native Swift API giving developers direct access to the same on-device model with a few lines of code — this is how Locally AI surfaces it as a chat option, and how the Shortcuts "Use Model" action can route a prompt to it, to Private Cloud Compute, or to ChatGPT.',
          '**Private Cloud Compute:** for tasks beyond the on-device model\'s capability, Apple Intelligence falls back to Private Cloud Compute (PCC) — Apple-operated servers running larger models with cryptographic guarantees that no user data is retained. PCC is opt-in and can be disabled.',
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
          '**iPhone RAM determines the model size ceiling — not the chip generation.** A 6 GB iPhone (14 Pro, 15) can comfortably run 1.7B models; an 8 GB+ iPhone (15 Pro, 16 series, 16e, 17 series) runs 3B–4B models comfortably and 7B models slowly. For the broader model landscape across all hardware (not just mobile), see [Best Local LLMs in 2026](/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-en.svg',
        imageCaption: 'LLM model recommendations by iPhone RAM: Phi-4 Mini 3.8B Q4_K_M for 8 GB+ iPhones (15 Pro–17 Pro) at 8–20 tok/s; Qwen3 1.7B Q4_K_M for 6 GB iPhones (14 Pro, non-Pro) at 12–20 tok/s; iPhone SE (4 GB) not recommended.',
        columns: ['iPhone Tier (Year, RAM)', 'Recommended Model', 'Download Size', 'Expected Speed'],
        rows: [
          { 'iPhone Tier (Year, RAM)': 'iPhone 17 Pro (2025, 12 GB)', 'Recommended Model': 'Phi-4 Mini or Llama 3.2 3B (Q4_K_M)', 'Download Size': '~2.5–2.7 GB', 'Expected Speed': '~13–20 tok/sec' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 16 Pro / 16 Pro Max / 16e (2024–2025, 8 GB)', 'Recommended Model': 'Phi-4 Mini (3.8B Q4_K_M)', 'Download Size': '~2.7 GB', 'Expected Speed': '~10–15 tok/sec' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 GB)', 'Recommended Model': 'Phi-4 Mini (3.8B Q4_K_M)', 'Download Size': '~2.7 GB', 'Expected Speed': '~8–12 tok/sec' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 14 Pro / Pro Max (2022, 6 GB)', 'Recommended Model': 'Qwen3 1.7B or SmolLM 2 1.7B (Q4_K_M)', 'Download Size': '~1.1 GB', 'Expected Speed': '~15–20 tok/sec' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 14 / 15 / 16 (non-Pro, 6 GB)', 'Recommended Model': 'Qwen3 1.7B or SmolLM 2 1.7B (Q4_K_M)', 'Download Size': '~1.1 GB', 'Expected Speed': '~12–18 tok/sec' },
          { 'iPhone Tier (Year, RAM)': 'iPhone SE / older (4 GB)', 'Recommended Model': 'Not recommended for on-device LLM', 'Download Size': '—', 'Expected Speed': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For older 6 GB iPhones, Qwen3 1.7B is the best balance of model size and quality in 2026. SmolLM 2 1.7B (HuggingFace) is comparable. Both produce coherent short-form responses (1–3 paragraphs) but struggle with multi-step reasoning. Do not install Phi-4 Mini on a 6 GB iPhone — it nominally fits but iOS will kill the app under any other memory pressure.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'Battery Drain and Thermal Throttling',
        content:
          '**On-device LLM inference on iPhone is CPU/GPU-intensive and produces heat.** Active inference (model generating tokens) draws ~3–5 W; sustained generation will throttle the chip and drain the battery roughly 20–30% per hour on iPhone 16 Pro.',
        image: '/images/iphone-llm-apps-battery-thermal-en.svg',
        imageCaption: 'iPhone on-device LLM thermal guide: active inference draws 3–5W, draining ~20–30% battery/hr on iPhone 16 Pro; thermal throttling drops speed 30–50% after 10–15 min — keep device face-up on a hard surface to dissipate heat.',
        items: [
          '**Battery drain (active chat):** ~20–30% per hour on iPhone 16 Pro running Phi-4 Mini. iPhone 17 Pro drains slightly faster due to higher peak power but offsets with finishing the workload sooner.',
          '**Thermal throttling kicks in after ~10–15 minutes of continuous generation.** When the chip hits ~38°C surface temperature, iOS reduces clock speeds, dropping tokens/sec by 30–50%. Letting the phone cool restores full speed.',
          '**Mitigation:** keep the iPhone face-up on a hard surface (not in your hand or pocket) during long inference sessions to allow heat dissipation. A passive heat sink case helps but is rarely necessary for short interactions.',
          '**Phantom drain:** if you leave a chat app open in the background after generation, RAM stays allocated but no inference runs — battery impact is minimal. Closing the app fully reclaims the ~3 GB of RAM.',
          '**MagSafe charging during inference:** acceptable on iPhone 17 Pro and 16 Pro (both have improved thermal designs). On iPhone 15 Pro, the combination of charging and inference can hit thermal limits faster — prefer to charge afterwards.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not run on-device LLM inference on an iPhone in direct sunlight or in a hot car. The combination of ambient heat and inference workload pushes the chip past thermal limits within minutes, triggering aggressive throttling and potentially the "iPhone needs to cool down" warning. The chat app does not crash, but generation slows to a crawl.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts, Siri, and Sideloading',
        content:
          '**iOS integration varies significantly by app.** Private LLM and Locally AI both expose Shortcuts actions; PocketPal AI and MLC Chat are standalone chat apps with no Shortcuts actions in 2026.',
        image: '/images/iphone-llm-apps-ios-integration-en.svg',
        imageCaption: 'iOS integration by local LLM app: Private LLM, Locally AI, and Apple Intelligence support Shortcuts (Private LLM adds Siri); PocketPal AI and MLC Chat are standalone chat apps with no Shortcuts actions as of 2026.',
        items: [
          '**Private LLM** exposes a "Generate Text with Private LLM" Shortcuts action and a "Hey Siri, ask Private LLM [question]" voice trigger. The most iOS-native of the paid chat apps.',
          '**Locally AI** exposes a Shortcuts action for free, and can route a Shortcut to Apple\'s own on-device foundation model via its Foundation Models framework integration — no Siri voice trigger, but Shortcuts automation without paying.',
          '**PocketPal AI** is a standalone chat app — no Shortcuts action, no Siri integration. You open the app and chat. Plans for Shortcuts support are tracked in the GitHub issues but not shipped.',
          '**MLC Chat** is a reference app for the MLC LLM project — minimal iOS integration and no update since late 2024. No Shortcuts action.',
          '**LLM Farm** is delisted from the App Store (August 2025) and, when built from source, has no Shortcuts action.',
          '**Apple Intelligence** integrates with iOS Shortcuts via the "Use Model" action (iOS 18.4+, expanded in iOS 26 alongside the Foundation Models framework). This routes a prompt to the on-device model, Private Cloud Compute, or ChatGPT (configurable). The on-device output can be chained into other Shortcuts actions.',
          '**Sideloading:** PocketPal AI, Private LLM, Locally AI, and MLC Chat are on the App Store and require no sideloading or jailbreak; Apple Intelligence is built into iOS. LLM Farm is the exception — installing it now requires building from source in Xcode. EU users can also install App Store apps via alternative marketplaces under DMA in 2026, but the app itself is identical.',
        ],
        promptExamples: [
          {
            label: 'Private LLM Shortcut: summarise selected text',
            text: '1. Action: "Get Selected Text" (iOS Share Sheet input).\n2. Action: "Generate Text with Private LLM" → Prompt: "Summarise the following text in three bullet points: [Selected Text]" → Model: Phi-4 Mini.\n3. Action: "Show Result" or "Copy to Clipboard".\nAdd to Share Sheet so you can run it on any selected text in any app, fully offline.',
          },
          {
            label: 'Apple Intelligence Shortcut: rewrite for tone',
            text: '1. Action: "Get Clipboard".\n2. Action: "Use Model" → Model: On-device → Prompt: "Rewrite this in a professional, concise tone: [Clipboard]".\n3. Action: "Copy to Clipboard".\nAssign to a Lock Screen widget for one-tap rewriting of anything you copy.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For hands-free use while driving or cooking, Private LLM\'s "Hey Siri, ask Private LLM" is the only on-device option that works without touching the phone. Apple Intelligence supports voice via Siri but only for system tasks (writing, summarising, app actions) — it does not expose general Q&A like the chat apps do.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Installing a model larger than your iPhone\'s RAM allows.** A 7B model on an 8 GB iPhone runs at ~3–5 tokens/sec and crashes when iOS reclaims memory for another app. Stick to the recommended model for your iPhone tier (3B–4B for 8 GB devices, 1.7B for 6 GB devices).',
          '**Expecting cloud-AI quality from on-device models.** Phi-4 Mini (3.8B) is impressive for its size but not GPT-5.5. Use it for chat, summarisation, drafting, and quick Q&A — not multi-step reasoning, complex code generation, or nuanced creative writing.',
          '**Running inference in direct sunlight or a hot car.** Thermal throttling kicks in within minutes. Generation slows by 30–50%, and you may see the "iPhone needs to cool down" warning. Run inference at room temperature.',
          '**Leaving 3+ chat apps installed with 3 GB models in each.** You will burn ~10 GB of storage on duplicate models. Pick one app and one model; uninstall the others until you are sure you need them.',
          '**Assuming Apple Intelligence has no chat interface at all.** That was true through iOS 18, but since iOS 26 apps like Locally AI can front Apple\'s on-device model with an actual chat window via the Foundation Models framework. The system features (Writing Tools, Smart Reply) still are not a chat UI on their own.',
          '**Looking for LLM Farm on the App Store.** It was delisted in August 2025. Searching the App Store for it wastes time; use PocketPal AI for the same free/flexible use case, or build LLM Farm from source in Xcode if you specifically need its exposed mirostat controls.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (open-source iOS app).',
          'Private LLM — [App Store listing](https://apps.apple.com) and developer documentation.',
          'Locally AI — [App Store listing](https://apps.apple.com) (LM Studio team, Apple MLX-based).',
          'MLC Chat / MLC LLM project — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (Metal-accelerated iOS deployment).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (open-source iOS app; App Store/TestFlight listing temporarily unavailable per project README).',
          'Apple Intelligence and on-device foundation models — [Apple Machine Learning Research](https://machinelearning.apple.com) and Apple Developer documentation (Foundation Models framework, introduced iOS 26).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can iPhone really run a 7B model?',
            a: 'Technically yes on iPhone 15 Pro and newer (8 GB RAM), but not at usable speed. A 7B Q4 model on iPhone 16 Pro generates at ~3–5 tokens/sec — frustrating for chat. iOS also tends to kill the app when other apps need memory. Use 3B–4B models (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) for everyday on-device chat. For 7B+ quality, remote-connect to a home Mac or PC running Ollama.',
          },
          {
            q: 'Does local AI drain my iPhone battery?',
            a: 'Yes — actively running inference draws ~3–5 W and drains the battery roughly 20–30% per hour on iPhone 16 Pro. For occasional chat (a few prompts), the impact is small. For sustained use (long conversation, multiple summarisation tasks), keep the iPhone plugged in. The model itself sitting in RAM with no inference running has negligible battery impact.',
          },
          {
            q: 'Will my iPhone get hot using local AI?',
            a: 'Yes, after about 10–15 minutes of continuous generation. The chip surface reaches ~38°C and iOS throttles clock speeds, dropping tokens/sec by 30–50%. To minimise this: keep the iPhone face-up on a hard surface (not in your hand) during long sessions, and avoid direct sunlight. Short interactions (under 5 minutes) rarely cause noticeable heat.',
          },
          {
            q: 'Can I use Siri with a local model?',
            a: 'Yes, with Private LLM ($4.99 one-time). Saying "Hey Siri, ask Private LLM [question]" routes the prompt to the on-device model and Siri reads the answer back — fully offline. PocketPal AI, Locally AI, and MLC Chat do not have Siri voice integration in 2026, though Locally AI does support Shortcuts automation. Apple Intelligence integrates with Siri but only for system tasks (writing, summarising, app actions), not general Q&A.',
          },
          {
            q: 'Do these apps work on iPhone SE or older iPhones?',
            a: 'Limited. iPhone SE (4 GB RAM) is below the practical threshold for on-device LLMs in 2026. iPhone 14 / 15 (non-Pro, 6 GB RAM) can run 1.7B models (Qwen3 1.7B, SmolLM 2 1.7B) but not 3B+. iPhone 14 Pro and 15 Pro (6–8 GB RAM) can run 3B models like Phi-4 Mini at 8–12 tokens/sec. For older iPhones, the better path is remote-connecting to a home Mac or PC.',
          },
          {
            q: 'Can I sync chat history between iPhone and Mac?',
            a: 'Not in PocketPal AI, Private LLM, or MLC Chat — chat history is stored locally per device, with no iCloud sync. Private LLM and Locally AI are both universal purchases/downloads that run natively on Mac too, but history still does not sync between the iPhone and Mac copies. For cross-device chat history, the practical approach is to run Open WebUI on a home Mac and access it from both iPhone and Mac browsers — Open WebUI stores chat history server-side.',
          },
          {
            q: 'Are these apps available outside the App Store?',
            a: 'PocketPal AI is open-source and can be built from source via Xcode, but the App Store build is the standard distribution. LLM Farm is the exception that now requires building from source — it was delisted from the App Store and TestFlight in August 2025. Private LLM, Locally AI, and MLC Chat are App Store only. EU users can install App Store apps via alternative marketplaces under DMA in 2026, but the underlying app is identical.',
          },
          {
            q: 'Do any of them require jailbreak?',
            a: 'No. PocketPal AI, Private LLM, Locally AI, MLC Chat, and Apple Intelligence all run on stock iOS. Building LLM Farm from source in Xcode also does not require jailbreak — it uses standard developer sideloading, not a jailbreak exploit. Jailbreaking is not required and not recommended for any of these apps.',
          },
          {
            q: 'Can I use local AI in iOS Shortcuts?',
            a: 'Yes, via Private LLM (a "Generate Text with Private LLM" action), Locally AI (a free Shortcuts action), or Apple Intelligence (the "Use Model" action, iOS 18.4+, expanded in iOS 26). PocketPal AI and MLC Chat do not have Shortcuts actions in 2026. Locally AI is the only free option with both Shortcuts support and access to Apple\'s own on-device model.',
          },
          {
            q: 'How does local AI compare to the ChatGPT app on iPhone?',
            a: 'On-device models (Phi-4 Mini, Llama 3.2 3B) remain meaningfully behind frontier cloud models for complex reasoning, broad world knowledge, and multimodal tasks, but are faster on simple queries (no network round-trip) and fully private. The honest tradeoff: local AI for routine and private tasks; ChatGPT or another cloud app for occasional hard questions. Many users in 2026 keep both and choose per query.',
          },
          {
            q: 'Is LLM Farm still safe to use if it is no longer on the App Store?',
            a: 'The source code is public on GitHub and still receives issue activity into 2026, so it is not abandoned, but it is no longer reviewed by Apple\'s App Store process once built from source and sideloaded. If you do not specifically need its mirostat sampling controls, PocketPal AI covers the same free/flexible/open-source use case while staying on the App Store with Apple\'s standard app review.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — sister article covering Android equivalents (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[How to Run AI on a Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — adjacent platform guide for tablet readers.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — model-side companion for picking what to run on these apps.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — broader model authority covering all hardware tiers, not just mobile.',
          '[Build a Local Voice Assistant on Your Phone: Whisper + Local LLM](/power-local-llm/voice-assistant-local-mobile-offline) — extends these apps with offline voice input/output.',
          '[Best Local AI App for Low-End PCs](/power-local-llm/best-local-ai-app-low-end-pc) — desktop alternative for users who want a more capable home machine to remote-connect to.',
          '[Enclave AI Review 2026](/power-local-llm/enclave-ai-review-2026) — a closer look at Enclave AI, an on-device AI assistant app for iPhone, iPad, and Mac with document interaction and Siri/Shortcuts automation.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — directory of every local-LLM tool worth knowing across all platforms.',
          '[Melhores Apps LLM Local para iPhone 2026 (Português)](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — versão em português deste guia',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-09-01',
    last_full_refresh: '2026-09-01',
    next_refresh_due: '2027-03-01',
    theme: 'Mobile & Edge LLMs',
    title: 'Die besten Local-LLM-Apps für iPhone 2026 (KI ohne WLAN nutzen)',
    seoTitle: 'Beste Local-LLM-Apps für das iPhone 2026 im Vergleich',
    intro:
      'Fünf iPhone-Apps führen echte LLMs vollständig auf dem Gerät aus: PocketPal AI, Private LLM, Locally AI (von LM Studio), MLC Chat und Apple Intelligence (systemintegriert). Alle funktionieren ohne WLAN, sobald das Modell heruntergeladen wurde. Dieser Leitfaden bewertet die Apps nach Tokens pro Sekunde auf dem iPhone 16 Pro und iPhone 17 Pro, Modellbibliothek, RAM-Verwaltung, Datenschutz und iOS-Integration – und erklärt, warum LLM Farm aus dem Ranking gefallen ist.',
    metaDescription:
      'PocketPal AI, Private LLM, Locally AI und MLC Chat: Die besten LLM-Apps fürs iPhone 2026 im Test. Offline-KI auf iPhone 16 Pro und 17 Pro verglichen.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-de.webp',
    twitterDescription:
      'iPhone-Local-KI 2026: PocketPal AI (kostenlos), Private LLM (mit Siri, 5,99 €), Locally AI (LM Studio, MLX), MLC Chat (Metal, aber inaktiv). Alle laufen offline nach dem Download.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'iPhone-Nutzer, die KI privat auf dem Gerät ausführen möchten – ohne Cloud-Abonnement. Dazu gehören Reisende, datenschutzbewusste Nutzer und Entwickler, die On-Device-Inferenz erkunden.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'Local-LLM-iPhone-App',
    targetKeywords: [
      'beste local llm app iphone',
      'llm auf iphone offline ausführen',
      'pocketpal ai iphone',
      'private llm app',
      'mlc chat iphone',
      'llm farm ios',
      'iphone ki ohne wlan',
    ],
    leadAnswerBlock:
      '**Für die meisten iPhone-Nutzer 2026: PocketPal AI aus dem App Store installieren und Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB) herunterladen.** Die App ist kostenlos, quelloffen, läuft auf iPhone 14 Pro und neueren Modellen (jedes iPhone mit 6 GB+ RAM) und erzeugt ~10–15 Tokens/Sek. auf dem iPhone 16 Pro für den Alltag. Für Siri- und Shortcuts-Integration ist Private LLM die stärkste kostenpflichtige Option (5,99 € einmalig, deckt iPhone, iPad und Mac ab). Locally AI – inzwischen vom LM-Studio-Team entwickelt – ist die moderne kostenlose Alternative auf Basis von Apple MLX, mit Shortcuts-Unterstützung und Zugriff auf Apples On-Device-Foundation-Modell. MLC Chat bleibt die Metal-Referenz-App, wurde aber seit Ende 2024 nicht mehr aktualisiert. LLM Farm wurde im August 2025 aus dem App Store entfernt und ist nun nur noch per Quellcode installierbar. Apple Intelligence führt ebenfalls Modelle auf dem Gerät aus, ist aber systemintegriert und kein Chat-App – es ergänzt diese Apps, ohne mit ihnen zu konkurrieren.',
    quickAnswerTop: {
      de: {
        question: 'Was ist die beste Local-LLM-App für iPhone in 2026?',
        answer:
          'PocketPal AI ist die beste kostenlose Standard-App für die meisten iPhone-Nutzer – quelloffen, App-Store-Installation, unterstützt jedes GGUF-Modell von Hugging Face und führt Phi-4 Mini (3,8B) mit ~10–15 Tokens/Sek. auf dem iPhone 16 Pro aus. Private LLM ist die stärkste kostenpflichtige Option (5,99 € einmalig, iPhone + iPad + Mac) mit iOS-Shortcuts- und Siri-Integration. Locally AI, entwickelt vom LM-Studio-Team, ist die kostenlose Apple-MLX-Option mit Shortcuts-Unterstützung und Zugriff auf Apples On-Device-Foundation-Modell. MLC Chat ist Metal-beschleunigt, aber seit Ende 2024 inaktiv. Apple Intelligence führt ebenfalls On-Device-Modelle aus, ist aber systemintegriert und ergänzt diese Apps.',
        bullets: [
          'PocketPal AI – kostenlos, quelloffen, App Store. Beste Standard-App für die meisten Nutzer. Unterstützt jedes GGUF-Modell.',
          'Private LLM – 5,99 € einmalig (iPhone + iPad + Mac). Beste kostenpflichtige Option. iOS Shortcuts + Siri-Integration.',
          'Locally AI – kostenlos, vom LM-Studio-Team. Apple-MLX-Engine, Shortcuts-Unterstützung, Zugriff auf Apple Foundation Models.',
          'MLC Chat – kostenlos, MLC-LLM-Projekt. Metal-beschleunigt, aber seit Ende 2024 kein App-Update mehr (ältere Modellbibliothek).',
          'Apple Intelligence – systemintegriert, keine eigenständige App. On-Device-3B-Modell wird von Mail, Nachrichten und Notizen genutzt.',
          'Empfohlenes Modell für iPhone 16 Pro / 17 Pro: Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB) – Geschwindigkeit: ~10–15 Tokens/Sek.',
          'Ältere iPhones (14 Pro): Qwen3 1.7B oder SmolLM 2 1.7B – passt in 6 GB RAM und erzeugt ~15–20 Tokens/Sek.',
        ],
        updatedDate: '2026-09-01',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Kurzübersicht', anchor: '#quick-facts' },
      { label: 'Welche iPhone-App sollte ich zuerst installieren?', anchor: '#which-app' },
      { label: 'iPhone-App-Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'PocketPal AI: Kostenlose Open-Source-Standardlösung', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: Kostenpflichtige Option mit iOS-Integration', anchor: '#private-llm' },
      { label: 'Locally AI: Kostenlose MLX-App von LM Studio', anchor: '#locally-ai' },
      { label: 'MLC Chat: Apple-Silicon-Optimierung', anchor: '#mlc-chat' },
      { label: 'LLM Farm: Entfernt, aber weiter konfigurierbar', anchor: '#llm-farm' },
      { label: 'Apple Intelligence: Systemintegrierte On-Device-KI', anchor: '#apple-intelligence' },
      { label: 'Modelle nach iPhone-Modell', anchor: '#models-by-tier' },
      { label: 'Akkuverbrauch und thermisches Throttling', anchor: '#battery-heat' },
      { label: 'iOS Shortcuts, Siri und Sideloading', anchor: '#ios-integration' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**PocketPal AI ist die beste kostenlose Standard-App.** Quelloffen, App-Store-Installation, unterstützt jedes GGUF-Modell von Hugging Face. Führt Phi-4 Mini mit ~10–15 Tokens/Sek. auf dem iPhone 16 Pro aus. Empfohlener Einstiegspunkt für die meisten iPhone-Nutzer.',
          '**Private LLM ist die beste kostenpflichtige Option (5,99 € einmalig, kein Abo).** Ein Kauf deckt iPhone, iPad und Mac mit Family Sharing ab. Kuratierte Modellbibliothek, iOS-Shortcuts-Integration und Siri-Unterstützung ("Hey Siri, ask Private LLM").',
          '**Locally AI ist die kostenlose MLX-basierte Alternative, jetzt vom LM-Studio-Team entwickelt.** Führt Llama-, Gemma-, Qwen- und DeepSeek-Modelle auf Apple MLX aus, unterstützt iOS Shortcuts und kann Apples eigenes On-Device-Foundation-Modell als Chat-Interface nutzbar machen.',
          '**MLC Chat ist Metal-beschleunigt, aber inaktiv.** Die MLC-LLM-Engine erzeugt weiterhin ~25–35 % mehr Tokens/Sek. als llama.cpp-basierte Apps auf gleicher Hardware, doch die App wurde seit Ende 2024 nicht aktualisiert – ihre Modellbibliothek liegt vor Phi-4 Mini und Gemma 3.',
          '**LLM Farm wurde im August 2025 aus dem App Store entfernt.** Die eigene README beschreibt die App als „vorübergehend nicht verfügbar". Sie bleibt quelloffen und über Xcode aus dem Quellcode baubar und ist weiterhin die konfigurierbarste Option (Mirostat, Chat-Templates) für Entwickler.',
          '**Apple Intelligence ist On-Device-KI, aber keine eigenständige App.** Apples ~3B-Foundation-Modell treibt Systemfunktionen an (Schreibwerkzeuge, Smart Reply, Benachrichtigungs-Zusammenfassungen). Seit iOS 26 können Drittanbieter-Apps es über das Foundation-Models-Framework aufrufen, und Shortcuts kann es über die Aktion „Modell verwenden" ansprechen.',
          '**Empfohlenes Modell für iPhone 16 Pro / 17 Pro: Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB).** Bestes Verhältnis aus Qualität und Geschwindigkeit für die 8-GB+-RAM-Klasse. Ältere iPhones mit 6 GB RAM (iPhone 14 Pro): Qwen3 1.7B oder SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzübersicht',
        items: [
          '**Verglichene Apps:** PocketPal AI, Private LLM, Locally AI (von LM Studio), MLC Chat, Apple Intelligence (System) – sowie LLM Farm, im August 2025 aus dem App Store entfernt.',
          '**Testgeräte:** iPhone 16 Pro (A18 Pro, 8 GB RAM) und iPhone 17 Pro (A19 Pro, 12 GB RAM).',
          '**Inference-Engines:** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), MLC LLM mit Metal (MLC Chat), proprietäres On-Device-Runtime (Private LLM, Apple Intelligence).',
          '**Mindest-iPhone für 3B+-Modelle:** iPhone 14 Pro (A16, 6 GB RAM) für 1.7B; jedes 8-GB+-iPhone (15 Pro, 16er-Serie, 16e, 17er-Serie) für 3B–4B.',
          '**Beste kostenlose App:** PocketPal AI – App Store, quelloffen, Modellflexibilität.',
          '**Beste kostenpflichtige App:** Private LLM – 5,99 € einmalig (iPhone + iPad + Mac), Shortcuts + Siri-Unterstützung.',
          '**Offline:** Alle fünf laufen vollständig offline, sobald das Modell heruntergeladen ist – keine Cloud-Verbindung erforderlich.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Welche iPhone-App sollte ich zuerst installieren?',
        content:
          '**Für die meisten Nutzer: PocketPal AI aus dem App Store, dann Phi-4 Mini (3,8B Q4_K_M) herunterladen.** Diese Kombination funktioniert auf iPhone 14 Pro und neueren Modellen, ist kostenlos und liefert brauchbare Ergebnisse für alltäglichen Chat, Zusammenfassungen und schnelles Schreiben. Wählen Sie eine andere App nur, wenn Sie einen spezifischen Bedarf haben, den PocketPal AI nicht abdeckt.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-de.webp',
        imageCaption: 'Welche lokale KI-App für iPhone: PocketPal AI (kostenloser Standard), Private LLM (Siri + Kurzbefehle), Locally AI (kostenlos, MLX, LM-Studio-Team), MLC Chat (Metal-schnell, aber inaktiv), Apple Intelligence (in iOS integriert).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Für die meisten iPhone-Nutzer 2026 gilt: PocketPal AI (kostenlos, App Store) installieren und Phi-4 Mini herunterladen – damit sind alltäglicher Chat, Zusammenfassungen und Textentwürfe auf jedem iPhone mit 6 GB+ RAM abgedeckt.',
          },
          {
            type: 'plain-terms',
            text: 'Fünf iPhone-Apps führen KI 2026 vollständig auf dem Gerät aus. PocketPal AI ist der beste kostenlose Einstiegspunkt: einmal installieren, eine 2,7-GB-Modelldatei herunterladen, und Sie haben einen privaten Chat-Assistenten, der auch in der U-Bahn ohne WLAN funktioniert. Private LLM ist die kostenpflichtige Option, wenn Siri mit dem lokalen Modell sprechen soll. Locally AI vom LM-Studio-Team ist die kostenlose moderne Alternative mit Shortcuts-Unterstützung. MLC Chat ist schnell, wird aber nicht mehr aktualisiert. Apple Intelligence ist in iOS integriert, aber keine Chat-App. PocketPal AI deckt 90 % der Anwendungsfälle ab.',
          },
        ],
        decisionBlock: {
          title: 'Entscheidungshilfe: Welche iPhone-Local-KI-App?',
          localIf: [
            'Sie möchten eine kostenlose Chat-KI, die offline funktioniert → PocketPal AI',
            'Sie möchten, dass Siri mit Ihrem lokalen Modell spricht → Private LLM',
            'Sie möchten eine kostenlose MLX-App mit Shortcuts und Zugriff auf Apple Foundation Models → Locally AI',
            'Sie akzeptieren eine ältere Modellbibliothek für maximale Metal-Geschwindigkeit → MLC Chat',
            'Sie benötigen nur Schreibhilfe in Mail / Nachrichten / Notizen → Apple Intelligence (integriert)',
          ],
          cloudIf: [
            'Sie benötigen 70B+-Modellqualität (Llama 3.3 70B, GPT-5.5-Niveau) → Cloud oder Remote-Verbindung zu einem Heimrechner',
            'Sie benötigen speziell GPT-5.5, Claude Opus oder Gemini → Cloud-Apps (diese sind lokal nicht verfügbar)',
            'Sie benötigen Echtzeit-Vision oder multimodale Ausgabe über Text hinaus → Cloud (On-Device-Multimodal ist 2026 begrenzt)',
          ],
          quick: [
            'Kostenlos + funktioniert für 90 % der Nutzer: PocketPal AI',
            'Kostenpflichtig + iOS-native Integration: Private LLM',
            'Kostenlos + LM-Studio-Ökosystem: Locally AI',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie zuerst PocketPal AI, auch wenn Sie später für Private LLM bezahlen möchten. Testen Sie damit, ob die On-Device-Inferenz auf Ihrem iPhone schnell genug für Ihren Anwendungsfall ist. Wenn ja, entscheiden Sie, ob die iOS-Shortcuts- und Siri-Integration von Private LLM die 5,99 € wert ist. Wenn nein, haben Sie die 5,99 € gespart, bevor Sie gezahlt haben.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone-App-Vergleichstabelle',
        content:
          '**Die fünf Apps unterscheiden sich in drei Dimensionen, die für die meisten Nutzer entscheidend sind: Kosten, Modellflexibilität und iOS-Integration.** Geschwindigkeitsunterschiede existieren, sind aber geringer als der Abstand zwischen diesen Apps und einem Cloud-LLM.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-de.webp',
        imageCaption: 'iPhone Local-LLM-App-Vergleich: PocketPal AI (kostenlos, ~10–15 Tok/Sek.), Locally AI (kostenlos, Apple MLX + Shortcuts), MLC Chat (kostenlos, ~14–20 Tok/Sek., Metal-beschleunigt, seit Ende 2024 inaktiv), Private LLM (5,99 € einmalig, Siri + Kurzbefehle), Apple Intelligence (systemintegriert).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI ist die beste kostenlose Standard-App, Private LLM die beste kostenpflichtige Option, Locally AI die kostenlose MLX-Wahl vom LM-Studio-Team, MLC Chat Metal-schnell, aber inaktiv, und Apple Intelligence systemintegriert.',
          },
          {
            type: 'plain-terms',
            text: 'Die Wahl hängt meist von drei Faktoren ab: Möchten Sie für Siri-Integration zahlen (Private LLM), möchten Sie das LM-Studio-Ökosystem mit Shortcuts kostenlos (Locally AI), oder möchten Sie maximale Rohgeschwindigkeit und akzeptieren eine ältere Modellbibliothek (MLC Chat)? Für alles andere ist PocketPal AI die Standardwahl. Die Werte in der Tabelle gelten für Q4_K_M-Quantisierung – der Standard für mobile Inferenz 2026.',
          },
        ],
        columns: ['App', 'Link', 'Preis', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)', 'Datenschutz', 'Am besten geeignet für'],
        rows: [
          { 'App': 'PocketPal AI', 'Link': '[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)', 'Preis': 'Kostenlos (Open Source)', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': '~10–15', 'Datenschutz': 'Nur lokal, keine Telemetrie', 'Am besten geeignet für': 'Kostenlose Standard-App für die meisten Nutzer' },
          { 'App': 'Private LLM', 'Link': '[privatellm.app](https://privatellm.app)', 'Preis': '5,99 € einmalig', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': '~10–14', 'Datenschutz': 'Nur lokal, opt-in Analysen', 'Am besten geeignet für': 'iOS Shortcuts + Siri-Integration' },
          { 'App': 'Locally AI', 'Link': '[lmstudio.ai/locally](https://lmstudio.ai/locally)', 'Preis': 'Kostenlos (LM-Studio-Team)', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': 'k. A. – MLX-Katalog (kein Phi-4)', 'Datenschutz': 'Nur lokal, keine Datenerhebung', 'Am besten geeignet für': 'MLX + Shortcuts, LM-Studio-Anbindung' },
          { 'App': 'MLC Chat', 'Link': '[llm.mlc.ai](https://llm.mlc.ai)', 'Preis': 'Kostenlos (Open Source)', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': 'k. A. – Bibliothek vor Phi-4', 'Datenschutz': 'Nur lokal, keine Telemetrie', 'Am besten geeignet für': 'Metal-Geschwindigkeit, ältere Modelle' },
          { 'App': 'LLM Farm', 'Link': '[github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)', 'Preis': 'Kostenlos (nur Quellcode)', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': '~10–15', 'Datenschutz': 'Nur lokal, keine Telemetrie', 'Am besten geeignet für': 'Power-User (App Store entfernt)' },
          { 'App': 'Apple Intelligence', 'Link': '[apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)', 'Preis': 'Kostenlos (in iOS integriert)', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': 'k. A. (Systemfunktion)', 'Datenschutz': 'Lokal + opt-in Private Cloud Compute', 'Am besten geeignet für': 'Hilfe in Mail, Nachrichten, Notizen' },
        ],
        note:
          '**Hinweis zur Apple Neural Engine (ANE) im Vergleich zu Metal und MLX:** PocketPal AI und LLM Farm verwenden llama.cpp mit Metal Performance Shadern, die auf der GPU laufen. MLC Chat verwendet MLC LLM mit tieferer Metal-Optimierung und erreicht auf gleicher Hardware 25–35 % mehr Tokens/Sek. für die Modelle, die es unterstützt. Locally AI nutzt Apple MLX, Apples eigenes Open-Source-Array-Framework, das eine vergleichbare GPU-Effizienz auf Apple Silicon erreicht. Apple Intelligence nutzt die ANE speziell für das systemintegrierte ~3B-Modell – energieeffizienter, aber weniger flexibel als Metal-basierte Inferenz. Seit iOS 26 können Drittanbieter-Apps dieses Systemmodell über das Foundation-Models-Framework aufrufen – genau das tut Locally AI –, aber eigene GGUF/MLX-Modelle können die ANE weiterhin nicht direkt ansprechen.',
        callouts: [
          {
            type: 'tip',
            text: 'Die Tokens/Sek.-Werte gelten für Q4_K_M-Quantisierung (der Standard für mobile Inferenz 2026) und ein inaktives iPhone ohne andere ressourcenintensive Apps. Hintergrund-Apps reduzieren den Durchsatz um 10–30 %. Auf dem iPhone 17 Pro sind die Tokens/Sek. dank A19-Pro-Verbesserungen etwa 20–30 % höher als auf dem iPhone 16 Pro.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: Kostenlose Open-Source-Standardlösung',
        content:
          '**PocketPal AI ist der empfohlene Einstiegspunkt für die meisten iPhone-Nutzer 2026.** Die App ist kostenlos, quelloffen (GitHub: a-ghorbani/pocketpal-ai), im App Store verfügbar und unterstützt jedes GGUF-Modell von Hugging Face. Unter der Haube verwendet sie llama.cpp mit Apple-Silicon-Optimierungen.',
        items: [
          '**Was sie ist:** eine iOS-App, die GGUF-Modelle lokal mit llama.cpp ausführt. Kein Abo, keine Telemetrie, kein Konto erforderlich.',
          '**Installation:** App Store → „PocketPal AI". Kostenloser Download.',
          '**Modell hinzufügen:** In der App auf „Modelle" tippen → „Von Hugging Face hinzufügen" → suchen (z. B. „phi-4-mini-instruct-Q4_K_M") → zum Herunterladen tippen. Das Modell wird im lokalen Speicher der App gespeichert (~2,7 GB für Phi-4 Mini Q4).',
          '**Generierungsgeschwindigkeit (iPhone 16 Pro):** Phi-4 Mini ~10–15 Tokens/Sek., Llama 3.2 3B ~12–18 Tokens/Sek., Gemma 3 4B ~7–10 Tokens/Sek., Qwen3 1.7B ~18–24 Tokens/Sek.',
          '**Am besten geeignet für:** Nutzer, die eine kostenlose, App-Store-installierbare Chat-App ohne Konto wünschen, die jedes Community-GGUF-Modell unterstützt.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die Modellauswahl in PocketPal AI hat einen „Empfohlen"-Filter, der Modelle anzeigt, die nachweislich in den RAM Ihres Geräts passen. Für ein iPhone 16 Pro (8 GB RAM) empfiehlt der Filter Q4_K_M-Varianten von Modellen bis ~4B Parameter. Vertrauen Sie diesem Filter – ein zu großes Modell führt dazu, dass iOS die App mitten in der Antwort beendet.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: Kostenpflichtige Option mit iOS-Integration',
        content:
          '**Private LLM ist die stärkste kostenpflichtige iPhone-Option 2026 (5,99 € einmalig, kein Abo).** Die App ist nur über den App Store erhältlich und enthält eine kuratierte Bibliothek optimierter Modelle. Ihr Alleinstellungsmerkmal ist die iOS-Integration: Shortcuts-Aktionen und der Sprach-Trigger „Hey Siri, ask Private LLM".',
        items: [
          '**Was sie ist:** eine kostenpflichtige iOS-App mit kuratierter Modellbibliothek und tiefer iOS-Integration. Verwendet ein proprietäres On-Device-Runtime, das für Apple Silicon optimiert ist.',
          '**Installation:** App Store → „Private LLM". Einmaliger Kauf 5,99 € (kein Abo).',
          '**Kuratierte Modellbibliothek:** ~30 Modelle, vorgetestet und für iPhone optimiert, darunter Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct und mehrere ungefilterte Varianten. Weniger flexibel als PocketPal AI, aber kein Risiko, ein Modell zu installieren, das abstürzt.',
          '**iOS Shortcuts:** Private LLM stellt eine Shortcuts-Aktion „Text mit Private LLM generieren" bereit, die in Automatisierungen eingebunden werden kann. Nützlich, um lokale KI per Schaltfläche auf dem Home-Bildschirm oder per NFC-Tag auszulösen.',
          '**Siri-Integration:** „Hey Siri, ask Private LLM [Ihre Frage]" leitet den Prompt an das On-Device-Modell weiter und Siri liest die Antwort vor – ohne Internetverbindung. Die Latenz ist höher als im Chat-UI (~3–5 Sekunden bis Audio beginnt).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Private LLM ist ein universeller Kauf: Der Einmalpreis von 5,99 € deckt iPhone, iPad und Mac in einem Kauf ab, und Apple Family Sharing erweitert dies auf bis zu sechs Familienmitglieder. Kein Abo, keine In-App-Käufe – der angezeigte Preis ist der Gesamtpreis.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: Kostenlose MLX-App von LM Studio',
        content:
          '**Locally AI ist eine kostenlose, datenschutzfokussierte Chat-App, die inzwischen vom LM-Studio-Team entwickelt wird und auf Apples eigenem MLX-Framework statt auf llama.cpp basiert.** Sie ist der neueste ernstzunehmende Zugang in dieser Kategorie und die einzige App hier, die Apples On-Device-Foundation-Modell als Chat-Interface bereitstellt.',
        items: [
          '**Was sie ist:** eine iOS-/iPadOS-/macOS-App, die Apple MLX für Inferenz nutzt, entwickelt vom Team hinter der Desktop-App LM Studio.',
          '**Installation:** App Store → „Locally AI". Kostenlos, kein Konto erforderlich, 100 % offline.',
          '**Modellbibliothek:** Llama 3.2, Gemma 2/3/4, Qwen 3, DeepSeek, LFM 2.5, Bonsai, Ministral 3 und Apple Foundation Models – ein breiterer und aktuellerer Katalog als bei MLC Chat.',
          '**iOS Shortcuts:** bietet eine Shortcuts-Aktion – gleichwertig zur Automatisierungsunterstützung von Private LLM, aber kostenlos.',
          '**LM Link:** eine optionale Funktion, die per Ende-zu-Ende-verschlüsselter Verbindung mit LM Studio auf einem Mac verbindet und so bei Bedarf auf ein größeres Modell auf einem Heimrechner zugreift.',
          '**Voraussetzungen:** iOS/iPadOS 18.1+ (die Effizienzvorteile von Apple Silicon zeigen sich am stärksten ab iPhone 15 Pro).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI ist die einzige App in diesem Leitfaden, die Apples eigenes On-Device-Foundation-Modell hinter ein normales Chat-Fenster stellen kann – nützlich, um zu testen, was das Modell von Apple Intelligence kann, ohne durch Schreibwerkzeuge-Menüs zu navigieren. Für Drittanbieter-GGUF-Flexibilität hat PocketPal AI weiterhin den größeren Modellkatalog.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: Apple-Silicon-Optimierung',
        content:
          '**MLC Chat (aus dem MLC-LLM-Projekt) bleibt die Metal-Referenz-App auf dem iPhone, wurde aber selbst seit Ende 2024 nicht mehr aktualisiert.** Sie ist kostenlos, quelloffen und führt Modelle aus, die mit der MLC-LLM-Toolchain kompiliert wurden – kein Standard-GGUF. Genau diese Kompilierungspflicht ist auch der Grund, warum ihr Katalog nicht mit PocketPal AI oder Locally AI mithalten konnte.',
        items: [
          '**Was sie ist:** die iOS-Referenz-App des MLC-LLM-Projekts, die die Metal-beschleunigte Inferenz von MLC LLM auf Apple Silicon demonstriert.',
          '**Installation:** App Store → „MLC Chat". Kostenlos.',
          '**Geschwindigkeitsvorteil (auf Architekturebene):** Die Metal-beschleunigte Engine von MLC LLM erzeugt ~25–35 % mehr Tokens/Sek. als llama.cpp-basierte Apps auf demselben iPhone – für Modelle, die beide unterstützen. Da die eigene Modellliste der App aber vor aktuellen Empfehlungen wie Phi-4 Mini und Gemma 3 liegt, lässt sich dieser Vorteil ohne selbst kompilierten Build 2026 nicht mehr testen.',
          '**Modellbibliothek:** beschränkt auf Modelle, die das MLC-LLM-Projekt vor der App-Stagnation kompiliert hat – Llama 3.2 3B, RedPajama und ähnliche Modelle aus 2024. Nicht jedes Hugging-Face-GGUF funktioniert, und kein aktuelles kleines Modell ist im App-Store-Build enthalten.',
          '**Am besten geeignet für:** Entwickler, die bereits in die MLC-LLM-Toolchain investiert haben und bereit sind, ein eigenes Modell zu kompilieren, oder die gezielt eines der bereits enthaltenen Modelle aus der Zeit vor 2025 benötigen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Da der App-Store-Build von MLC Chat seit Ende 2024 nicht aktualisiert wurde, erwarten Sie in der Modellauswahl keine Phi-4 Mini, Qwen3 oder Gemma 3. Wer heute aktuelle Modelle mit Metal-Klasse-GPU-Effizienz möchte, findet in Locally AI (Apple MLX) oder PocketPal AI (llama.cpp mit Metal Performance Shadern) aktiv gepflegte Alternativen.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: Entfernt, aber weiter konfigurierbar',
        content:
          '**LLM Farm wurde im August 2025 aus dem App Store und TestFlight entfernt – die eigene GitHub-README beschreibt die App auf beiden Plattformen als „vorübergehend nicht verfügbar".** Das Projekt (GitHub: guinmoon/LLMFarm) bleibt quelloffen und verzeichnete bis 2026 GitHub-Issue-Aktivität, aber neue Nutzer können es nicht mehr über den App Store installieren; es muss per Xcode aus dem Quellcode gebaut werden.',
        items: [
          '**Was sie ist:** eine iOS-App von Entwickler @guinmoon, die GGUF-Modelle mit umfangreichen Konfigurationsmöglichkeiten ausführt und zuvor über den App Store vertrieben wurde.',
          '**Aktuelle Verfügbarkeit:** zum Zeitpunkt dieses Updates weder über den App Store noch TestFlight installierbar. Der Quellcode bleibt öffentlich und baubar.',
          '**Aus Quellcode bauen:** Repository klonen, in Xcode öffnen und mit einem kostenlosen oder kostenpflichtigen Apple-Developer-Konto auf ein Gerät bauen – der Standard-Sideloading-Workflow für jede Open-Source-iOS-App ohne App-Store-Eintrag.',
          '**Freigegebene Einstellungen (nach dem Bauen):** Temperatur, Top-p, Top-k, Mirostat-Sampling, Wiederholungsstrafe, System-Prompt je Modell, Chat-Template-Auswahl, Kontextfensterlänge.',
          '**Am besten geeignet für:** Entwickler, die mit dem Bauen einer App aus dem Quellcode in Xcode vertraut sind und gezielt Mirostat-Sampling-Kontrollen möchten. Alle anderen sollten PocketPal AI oder Locally AI verwenden – beide vollständig über den App Store installierbar und kostenlos.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Verlassen Sie sich nicht auf einen App-Store-Link zu LLM Farm – ein solcher Link ist als veraltet zu behandeln. Das Bauen aus dem Quellcode erfordert Xcode und Grundkenntnisse in iOS-Codesignierung. Wenn das mehr Aufwand ist, als Sie möchten, deckt PocketPal AI denselben Anwendungsfall „flexible kostenlose Chat-App" ab, ohne den App Store zu verlassen.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: Systemintegrierte On-Device-KI',
        content:
          '**Apple Intelligence führt Apples eigenes ~3B-Foundation-Modell auf dem Gerät aus – auf iPhone 15 Pro und neueren Modellen (A17-Pro-Chip, mindestens 8 GB RAM).** Standardmäßig ist es keine Chat-App – es treibt Systemfunktionen in Mail (Smart Reply), Nachrichten (Schreibwerkzeuge), Notizen (Zusammenfassung) und Benachrichtigungs-Zusammenfassungen an. Seit iOS 26 können Drittanbieter über Apples Foundation-Models-Framework direkt auf dieses On-Device-Modell zugreifen, und Apps wie Locally AI nutzen dies bereits für ein echtes Chat-Interface.',
        items: [
          '**Wo es zu finden ist:** integriert in iOS 18+ (Foundation-Models-Framework seit iOS 26). Aktivieren Sie es unter Einstellungen → Apple Intelligence & Siri.',
          '**Hardware-Anforderung:** iPhone 15 Pro / 15 Pro Max, iPhone-16-Serie, iPhone 16e, iPhone-17-Serie. Ältere iPhones (14 und älter) unterstützen Apple Intelligence nicht.',
          '**On-Device-Funktionen:** Schreibwerkzeuge (Umschreiben, Zusammenfassen, Korrekturlesen) in jedem Textfeld, Smart Reply in Mail und Nachrichten, Benachrichtigungs-Zusammenfassungen, Genmoji-Generierung.',
          '**Foundation-Models-Framework (ab iOS 26):** eine native Swift-API, die Entwicklern mit wenigen Zeilen Code direkten Zugriff auf dasselbe On-Device-Modell gibt – so macht Locally AI es als Chat-Option zugänglich, und so kann die Shortcuts-Aktion „Modell verwenden" einen Prompt an dieses Modell, an Private Cloud Compute oder an ChatGPT weiterleiten.',
          '**Private Cloud Compute:** Für Aufgaben, die das On-Device-Modell übersteigen, greift Apple Intelligence auf Private Cloud Compute (PCC) zurück – von Apple betriebene Server mit größeren Modellen und kryptografischen Garantien, dass keine Nutzerdaten gespeichert werden. PCC ist opt-in und kann deaktiviert werden.',
          '**Verhältnis zu Chat-Apps:** Apple Intelligence ist eine Ergänzung, kein Ersatz. Die Systemfunktionen übernehmen Textumschreibung und Zusammenfassung innerhalb von iOS-Apps; PocketPal AI, Private LLM, Locally AI und MLC Chat bieten ein eigenständiges Chat-Interface für beliebige Fragen – und Locally AI kann inzwischen genau ein solches Interface auch für Apples eigenes Modell bereitstellen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Apple Intelligence Ihr einziger Bedarf ist (E-Mails umschreiben, Benachrichtigungen zusammenfassen), benötigen Sie keine separate Chat-App. Wenn Sie dem Modell Fragen stellen möchten – etwa „Erkläre Quantentunneln einfach" oder „Erstelle einen Projektplan für X" –, installieren Sie eine Chat-App: entweder eine dedizierte wie PocketPal AI, oder Locally AI, das Apples eigenes On-Device-Modell mit einem Chat-Fenster versehen kann.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modelle nach iPhone-Modell',
        content:
          '**Der iPhone-RAM bestimmt die Modellgröße – nicht die Chip-Generation.** Ein 6-GB-iPhone (14 Pro, 15) kann 1,7B-Modelle komfortabel ausführen; ein 8-GB+-iPhone (15 Pro, 16er-Serie, 16e, 17er-Serie) führt 3B–4B-Modelle komfortabel und 7B-Modelle langsam aus. Für den umfassenderen Überblick über Modelle auf allen Hardware-Klassen (nicht nur Mobilgeräte) siehe [Die besten lokalen LLMs 2026](/de/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-de.svg',
        imageCaption: 'LLM-Modellempfehlungen nach iPhone-RAM: Phi-4 Mini 3,8B Q4_K_M für 8-GB+-iPhones (15 Pro–17 Pro) mit 8–20 Tok/Sek.; Qwen3 1,7B Q4_K_M für 6-GB-iPhones (14 Pro, nicht-Pro) mit 12–20 Tok/Sek.; iPhone SE (4 GB) nicht empfohlen.',
        columns: ['iPhone-Modell (Jahr, RAM)', 'Empfohlenes Modell', 'Download-Größe', 'Erwartete Geschwindigkeit'],
        rows: [
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 17 Pro (2025, 12 GB)', 'Empfohlenes Modell': 'Phi-4 Mini oder Llama 3.2 3B (Q4_K_M)', 'Download-Größe': '~2,5–2,7 GB', 'Erwartete Geschwindigkeit': '~13–20 Tokens/Sek.' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 16 Pro / 16 Pro Max / 16e (2024–2025, 8 GB)', 'Empfohlenes Modell': 'Phi-4 Mini (3.8B Q4_K_M)', 'Download-Größe': '~2,7 GB', 'Erwartete Geschwindigkeit': '~10–15 Tokens/Sek.' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 GB)', 'Empfohlenes Modell': 'Phi-4 Mini (3.8B Q4_K_M)', 'Download-Größe': '~2,7 GB', 'Erwartete Geschwindigkeit': '~8–12 Tokens/Sek.' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 14 Pro / Pro Max (2022, 6 GB)', 'Empfohlenes Modell': 'Qwen3 1.7B oder SmolLM 2 1.7B (Q4_K_M)', 'Download-Größe': '~1,1 GB', 'Erwartete Geschwindigkeit': '~15–20 Tokens/Sek.' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 14 / 15 / 16 (nicht Pro, 6 GB)', 'Empfohlenes Modell': 'Qwen3 1.7B oder SmolLM 2 1.7B (Q4_K_M)', 'Download-Größe': '~1,1 GB', 'Erwartete Geschwindigkeit': '~12–18 Tokens/Sek.' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone SE / ältere Modelle (4 GB)', 'Empfohlenes Modell': 'Für On-Device-LLM nicht empfohlen', 'Download-Größe': '—', 'Erwartete Geschwindigkeit': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für ältere iPhones mit 6 GB RAM ist Qwen3 1.7B 2026 das beste Verhältnis aus Modellgröße und Qualität. SmolLM 2 1.7B (HuggingFace) ist vergleichbar. Beide erzeugen kohärente Kurzantworten (1–3 Absätze), haben aber Schwierigkeiten bei mehrstufigem Schlussfolgern. Installieren Sie Phi-4 Mini nicht auf einem 6-GB-iPhone – es passt nominell, aber iOS beendet die App unter Speicherdruck.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'Akkuverbrauch und thermisches Throttling',
        content:
          '**On-Device-LLM-Inferenz auf dem iPhone ist CPU/GPU-intensiv und erzeugt Wärme.** Aktive Inferenz (Modell generiert Tokens) verbraucht ~3–5 W; anhaltende Generierung drosselt den Chip und entlädt den Akku auf dem iPhone 16 Pro um ca. 20–30 % pro Stunde.',
        image: '/images/iphone-llm-apps-battery-thermal-de.svg',
        imageCaption: 'iPhone On-Device-LLM-Wärmeführer: Aktive Inferenz zieht 3–5W und verbraucht ~20–30% Akku/Stunde auf dem iPhone 16 Pro; thermisches Throttling reduziert die Geschwindigkeit nach 10–15 Min. um 30–50% – Gerät mit Display nach oben auf einer harten Fläche legen.',
        items: [
          '**Akkuverbrauch (aktiver Chat):** ~20–30 % pro Stunde auf dem iPhone 16 Pro mit Phi-4 Mini. Das iPhone 17 Pro entlädt sich bei höherer Spitzenleistung geringfügig schneller, gleicht dies aber durch schnellere Fertigstellung des Workloads aus.',
          '**Thermisches Throttling setzt nach ~10–15 Minuten Dauergenerierung ein.** Wenn der Chip ~38 °C Oberflächentemperatur erreicht, reduziert iOS die Taktfrequenz, was die Tokens/Sek. um 30–50 % senkt. Abkühlen stellt die volle Geschwindigkeit wieder her.',
          '**Gegenmaßnahme:** Halten Sie das iPhone während längerer Inferenzsitzungen mit der Vorderseite nach oben auf einer harten Oberfläche (nicht in der Hand oder Tasche), um die Wärmeabgabe zu verbessern. Ein passiver Kühlaufsatz hilft, ist aber bei kurzen Interaktionen kaum nötig.',
          '**Phantom-Verbrauch:** Wenn Sie eine Chat-App nach der Generierung im Hintergrund geöffnet lassen, bleibt RAM belegt, aber keine Inferenz läuft – der Akkueinfluss ist minimal. Vollständiges Schließen der App gibt die ~3 GB RAM wieder frei.',
          '**MagSafe-Laden während der Inferenz:** Auf iPhone 17 Pro und 16 Pro (beide mit verbessertem Thermaldesign) unbedenklich. Auf dem iPhone 15 Pro kann die Kombination aus Laden und Inferenz die thermischen Grenzen schneller erreichen – besser danach laden.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Führen Sie On-Device-LLM-Inferenz auf einem iPhone nicht im direkten Sonnenlicht oder in einem heißen Auto aus. Die Kombination aus Umgebungshitze und Inferenz-Workload überschreitet die thermischen Grenzen des Chips innerhalb von Minuten, löst aggressives Throttling aus und kann die Meldung „iPhone muss sich abkühlen" auslösen. Die Chat-App stürzt nicht ab, aber die Generierung wird extrem langsam.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts, Siri und Sideloading',
        content:
          '**Die iOS-Integration unterscheidet sich je nach App erheblich.** Private LLM und Locally AI bieten beide Shortcuts-Aktionen; PocketPal AI und MLC Chat sind eigenständige Chat-Apps ohne Shortcuts-Aktionen (Stand 2026).',
        image: '/images/iphone-llm-apps-ios-integration-de.svg',
        imageCaption: 'iOS-Integration je lokaler LLM-App: Private LLM, Locally AI und Apple Intelligence unterstützen Kurzbefehle (Private LLM zusätzlich Siri); PocketPal AI und MLC Chat sind eigenständige Chat-Apps ohne Shortcut-Aktionen (Stand 2026).',
        items: [
          '**Private LLM** bietet eine Shortcuts-Aktion „Text mit Private LLM generieren" und einen Sprach-Trigger „Hey Siri, ask Private LLM [Frage]". Die iOS-nativste der kostenpflichtigen Chat-Apps.',
          '**Locally AI** bietet kostenlos eine Shortcuts-Aktion und kann einen Shortcut über die Foundation-Models-Integration an Apples eigenes On-Device-Modell weiterleiten – kein Sprach-Trigger, aber Shortcuts-Automatisierung ohne Bezahlung.',
          '**PocketPal AI** ist eine eigenständige Chat-App – keine Shortcuts-Aktion, keine Siri-Integration. Sie öffnen die App und chatten. Pläne für Shortcuts-Unterstützung werden in den GitHub-Issues verfolgt, sind aber nicht veröffentlicht.',
          '**MLC Chat** ist eine Referenz-App für das MLC-LLM-Projekt – minimale iOS-Integration und seit Ende 2024 kein Update. Keine Shortcuts-Aktion.',
          '**LLM Farm** ist aus dem App Store entfernt (August 2025) und hat, aus Quellcode gebaut, keine Shortcuts-Aktion.',
          '**Apple Intelligence** integriert sich über die Aktion „Modell verwenden" (iOS 18.4+, seit iOS 26 zusammen mit dem Foundation-Models-Framework erweitert) in iOS Shortcuts. Diese leitet einen Prompt an das On-Device-Modell, Private Cloud Compute oder ChatGPT (konfigurierbar) weiter. Die On-Device-Ausgabe kann in weitere Shortcuts-Aktionen eingebunden werden.',
          '**Sideloading:** PocketPal AI, Private LLM, Locally AI und MLC Chat sind im App Store und erfordern kein Sideloading oder Jailbreak; Apple Intelligence ist in iOS integriert. LLM Farm ist die Ausnahme – die Installation erfordert nun das Bauen aus dem Quellcode in Xcode. EU-Nutzer können App-Store-Apps unter dem DMA 2026 auch über alternative Marktplätze installieren, aber die App selbst ist identisch.',
        ],
        promptExamples: [
          {
            label: 'Private-LLM-Shortcut: Ausgewählten Text zusammenfassen',
            text: '1. Aktion: „Ausgewählten Text abrufen" (iOS-Share-Sheet-Eingabe).\n2. Aktion: „Text mit Private LLM generieren" → Prompt: „Fasse den folgenden Text in drei Stichpunkten zusammen: [Ausgewählter Text]" → Modell: Phi-4 Mini.\n3. Aktion: „Ergebnis anzeigen" oder „In Zwischenablage kopieren".\nZum Share Sheet hinzufügen, damit Sie es für beliebigen Text in jeder App vollständig offline ausführen können.',
          },
          {
            label: 'Apple-Intelligence-Shortcut: Ton anpassen',
            text: '1. Aktion: „Zwischenablage abrufen".\n2. Aktion: „Modell verwenden" → Modell: On-device → Prompt: „Schreibe dies in einem professionellen, präzisen Ton um: [Zwischenablage]".\n3. Aktion: „In Zwischenablage kopieren".\nEinem Sperrbildschirm-Widget zuweisen, um alles, was Sie kopieren, mit einem Tipp umzuschreiben.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für die freihändige Nutzung beim Fahren oder Kochen ist „Hey Siri, ask Private LLM" von Private LLM die einzige On-Device-Option, die ohne Berühren des Telefons funktioniert. Apple Intelligence unterstützt Sprache über Siri, aber nur für Systemaufgaben (Schreiben, Zusammenfassen, App-Aktionen) – allgemeine Fragen wie bei den Chat-Apps sind nicht möglich.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Ein Modell installieren, das größer ist als der iPhone-RAM erlaubt.** Ein 7B-Modell auf einem 8-GB-iPhone läuft mit ~3–5 Tokens/Sek. und stürzt ab, wenn iOS Arbeitsspeicher für eine andere App beansprucht. Verwenden Sie das empfohlene Modell für Ihre iPhone-Klasse (3B–4B für 8-GB-Geräte, 1,7B für 6-GB-Geräte).',
          '**Cloud-KI-Qualität von On-Device-Modellen erwarten.** Phi-4 Mini (3,8B) ist für seine Größe beeindruckend, aber kein GPT-5.5. Verwenden Sie es für Chat, Zusammenfassungen, Textentwürfe und schnelle Fragen – nicht für mehrstufiges Schlussfolgern, komplexe Code-Generierung oder nuanciertes kreatives Schreiben.',
          '**Inferenz im direkten Sonnenlicht oder in einem heißen Auto ausführen.** Thermisches Throttling setzt innerhalb von Minuten ein. Die Generierung verlangsamt sich um 30–50 %, und die Meldung „iPhone muss sich abkühlen" kann erscheinen. Führen Sie Inferenz bei Raumtemperatur aus.',
          '**3+ Chat-Apps mit je 3-GB-Modellen installiert lassen.** Sie verbrauchen ~10 GB Speicher mit duplizierten Modellen. Entscheiden Sie sich für eine App und ein Modell; deinstallieren Sie die anderen, bis Sie sicher sind, dass Sie sie benötigen.',
          '**Annehmen, Apple Intelligence habe überhaupt kein Chat-Interface.** Das stimmte bis iOS 18, aber seit iOS 26 können Apps wie Locally AI Apples On-Device-Modell über das Foundation-Models-Framework mit einem echten Chat-Fenster versehen. Die Systemfunktionen (Schreibwerkzeuge, Smart Reply) sind für sich genommen weiterhin keine Chat-UI.',
          '**LLM Farm im App Store suchen.** Die App wurde im August 2025 entfernt. Die Suche im App Store danach ist Zeitverschwendung; verwenden Sie PocketPal AI für denselben freien/flexiblen Anwendungsfall, oder bauen Sie LLM Farm aus dem Quellcode in Xcode, wenn Sie speziell die Mirostat-Kontrollen benötigen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (Open-Source-iOS-App).',
          'Private LLM — [App-Store-Eintrag](https://apps.apple.com) und Entwicklerdokumentation.',
          'Locally AI — [App-Store-Eintrag](https://apps.apple.com) (LM-Studio-Team, basiert auf Apple MLX).',
          'MLC Chat / MLC-LLM-Projekt — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (Metal-beschleunigte iOS-Bereitstellung).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (Open-Source-iOS-App; App-Store-/TestFlight-Eintrag laut Projekt-README vorübergehend nicht verfügbar).',
          'Apple Intelligence und On-Device-Foundation-Modelle — [Apple Machine Learning Research](https://machinelearning.apple.com) und Apple-Entwicklerdokumentation (Foundation-Models-Framework, eingeführt mit iOS 26).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann das iPhone wirklich ein 7B-Modell ausführen?',
            a: 'Technisch ja auf iPhone 15 Pro und neueren Modellen (8 GB RAM), aber nicht mit nutzbarer Geschwindigkeit. Ein 7B-Q4-Modell auf dem iPhone 16 Pro generiert mit ~3–5 Tokens/Sek. – für den Chat frustrierend. iOS neigt auch dazu, die App zu beenden, wenn andere Apps Arbeitsspeicher benötigen. Verwenden Sie 3B–4B-Modelle (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) für den alltäglichen On-Device-Chat. Für 7B+-Qualität verbinden Sie sich remote mit einem Mac oder PC zu Hause, auf dem Ollama läuft.',
          },
          {
            q: 'Entlädt lokale KI meinen iPhone-Akku?',
            a: 'Ja – aktive Inferenz verbraucht ~3–5 W und entlädt den Akku auf dem iPhone 16 Pro um ca. 20–30 % pro Stunde. Bei gelegentlichem Chat (wenige Prompts) ist der Einfluss gering. Bei dauerhafter Nutzung (langes Gespräch, mehrere Zusammenfassungsaufgaben) schließen Sie das iPhone an. Das Modell selbst im RAM ohne laufende Inferenz hat vernachlässigbaren Akkueinfluss.',
          },
          {
            q: 'Wird mein iPhone bei lokaler KI heiß?',
            a: 'Ja, nach etwa 10–15 Minuten Dauergenerierung. Die Chipoberfläche erreicht ~38 °C und iOS drosselt die Taktfrequenz, was die Tokens/Sek. um 30–50 % senkt. Um dies zu minimieren: Halten Sie das iPhone bei langen Sitzungen mit der Vorderseite nach oben auf einer harten Oberfläche (nicht in der Hand) und vermeiden Sie direktes Sonnenlicht. Kurze Interaktionen (unter 5 Minuten) erzeugen selten spürbare Wärme.',
          },
          {
            q: 'Kann ich Siri mit einem lokalen Modell verwenden?',
            a: 'Ja, mit Private LLM (5,99 € einmalig). „Hey Siri, ask Private LLM [Frage]" leitet den Prompt an das On-Device-Modell weiter und Siri liest die Antwort vor – vollständig offline. PocketPal AI, Locally AI und MLC Chat haben 2026 keine Sprach-Integration mit Siri, wobei Locally AI Shortcuts-Automatisierung unterstützt. Apple Intelligence integriert sich in Siri, aber nur für Systemaufgaben (Schreiben, Zusammenfassen, App-Aktionen), nicht für allgemeine Fragen.',
          },
          {
            q: 'Funktionieren diese Apps auf dem iPhone SE oder älteren iPhones?',
            a: 'Eingeschränkt. Das iPhone SE (4 GB RAM) liegt unter der praktischen Schwelle für On-Device-LLMs 2026. iPhone 14 / 15 (nicht Pro, 6 GB RAM) kann 1,7B-Modelle (Qwen3 1.7B, SmolLM 2 1.7B) ausführen, aber keine 3B+-Modelle. iPhone 14 Pro und 15 Pro (6–8 GB RAM) können 3B-Modelle wie Phi-4 Mini mit 8–12 Tokens/Sek. ausführen. Für ältere iPhones ist die bessere Option eine Remote-Verbindung zu einem Mac oder PC zu Hause.',
          },
          {
            q: 'Kann ich den Chat-Verlauf zwischen iPhone und Mac synchronisieren?',
            a: 'Nicht in PocketPal AI, Private LLM oder MLC Chat – der Chat-Verlauf wird lokal auf jedem Gerät gespeichert, ohne iCloud-Sync. Private LLM und Locally AI sind beide universelle Käufe/Downloads, die auch nativ auf dem Mac laufen, aber der Verlauf synchronisiert sich trotzdem nicht zwischen den iPhone- und Mac-Kopien. Für geräteübergreifenden Chat-Verlauf ist der praktische Ansatz: Open WebUI auf einem Mac zu Hause betreiben und von iPhone und Mac aus im Browser darauf zugreifen – Open WebUI speichert den Chat-Verlauf serverseitig.',
          },
          {
            q: 'Sind diese Apps außerhalb des App Stores erhältlich?',
            a: 'PocketPal AI ist quelloffen und kann per Xcode aus dem Quellcode gebaut werden, aber der App-Store-Build ist die Standardverteilung. LLM Farm ist die Ausnahme, die nun aus dem Quellcode gebaut werden muss – sie wurde im August 2025 aus dem App Store und TestFlight entfernt. Private LLM, Locally AI und MLC Chat sind nur im App Store erhältlich. EU-Nutzer können App-Store-Apps unter dem DMA 2026 auch über alternative Marktplätze installieren; die zugrundeliegende App ist aber identisch.',
          },
          {
            q: 'Benötigt eine der Apps einen Jailbreak?',
            a: 'Nein. PocketPal AI, Private LLM, Locally AI, MLC Chat und Apple Intelligence laufen alle auf Standard-iOS. Auch das Bauen von LLM Farm aus dem Quellcode in Xcode erfordert keinen Jailbreak – es nutzt das Standard-Sideloading für Entwickler, keinen Jailbreak-Exploit. Ein Jailbreak ist für keine dieser Apps erforderlich oder empfohlen.',
          },
          {
            q: 'Kann ich lokale KI in iOS Shortcuts verwenden?',
            a: 'Ja, über Private LLM (Aktion „Text mit Private LLM generieren"), Locally AI (kostenlose Shortcuts-Aktion) oder Apple Intelligence (Aktion „Modell verwenden", iOS 18.4+, erweitert mit iOS 26). PocketPal AI und MLC Chat haben 2026 keine Shortcuts-Aktionen. Locally AI ist die einzige kostenlose Option mit Shortcuts-Unterstützung und Zugriff auf Apples eigenes On-Device-Modell.',
          },
          {
            q: 'Wie vergleicht sich lokale KI mit der ChatGPT-App auf dem iPhone?',
            a: 'On-Device-Modelle (Phi-4 Mini, Llama 3.2 3B) liegen bei komplexem Schlussfolgern, breitem Weltwissen und multimodalen Aufgaben weiterhin spürbar hinter Frontier-Cloud-Modellen, sind aber bei einfachen Anfragen schneller (kein Netzwerk-Round-Trip) und vollständig privat. Der ehrliche Kompromiss: lokale KI für Routine- und private Aufgaben; ChatGPT oder eine andere Cloud-App für gelegentliche schwierige Fragen. Viele Nutzer 2026 haben beide und wählen je nach Anfrage.',
          },
          {
            q: 'Ist LLM Farm noch sicher, wenn sie nicht mehr im App Store ist?',
            a: 'Der Quellcode ist öffentlich auf GitHub und erhält bis 2026 weiterhin Issue-Aktivität, ist also nicht verwaist – aber sobald aus dem Quellcode gebaut und sideloaded, durchläuft die App nicht mehr Apples App-Store-Prüfprozess. Wenn Sie nicht speziell die Mirostat-Sampling-Kontrollen benötigen, deckt PocketPal AI denselben freien/flexiblen/quelloffenen Anwendungsfall ab und bleibt im App Store mit Apples Standard-App-Review.',
          },
          {
            q: 'Muss ich bei der Verwendung dieser iPhone-LLM-Apps die DSGVO beachten?',
            a: 'Für den privaten Gebrauch ist die DSGVO in der Regel nicht relevant. Für professionelle oder geschäftliche Nutzung – insbesondere wenn Sie Texte mit personenbezogenen Daten (Kundennamen, E-Mails, Vertragsinhalte) in das Modell eingeben – gilt Folgendes: Da PocketPal AI, Private LLM, Locally AI und MLC Chat die Verarbeitung vollständig auf dem Gerät ausführen und keine Daten an externe Server senden, erfüllen sie die DSGVO-Anforderungen aus Artikel 28 (Auftragsverarbeitung) und zur Datenminimierung in der Regel besser als Cloud-KI-Dienste. Für Unternehmen empfiehlt das BSI in seinen Grundschutz-Katalogen On-Device-Verarbeitung als bevorzugtes Muster für die KI-Nutzung mit sensiblen Daten. Schalten Sie bei Private LLM die opt-in-Analysen in den Einstellungen aus, um jede externe Datenübertragung zu unterbinden.',
          },
          {
            q: 'Sind diese iPhone-LLM-Apps für den deutschen Mittelstand geeignet?',
            a: 'Ja, insbesondere PocketPal AI, Private LLM und Locally AI eignen sich für KMU-Anwendungsfälle im deutschen Mittelstand. Typische Einsatzszenarien: Vertriebsmitarbeitende, die offline Angebotszusammenfassungen erstellen; Servicetechniker, die im Feld ohne Internetverbindung Dokumentation zusammenfassen; Büromitarbeitende, die E-Mails und Berichte schnell umformulieren möchten. Da alle Daten lokal auf dem Gerät verbleiben, können DSGVO-Compliance-Anforderungen einfacher eingehalten werden als bei Cloud-Diensten. Für den Einsatz in regulierten Bereichen (Gesundheitswesen, Finanzdienstleistungen) empfiehlt sich eine Prüfung der IT-Sicherheitsstandards nach BSI IT-Grundschutz. Der einmalige Preis von Private LLM (5,99 € ohne Abo) passt gut zur typischen Beschaffungspraxis im Mittelstand.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Die besten Local-LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — Schwesterartikel zu Android-Äquivalenten (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[KI auf dem Tablet nutzen: iPad und Android (2026)](/de/power-local-llm/run-ai-on-tablet-ipad-android) — Plattformführer für Tablet-Nutzer.',
          '[Die besten mobilen LLM-Modelle 2026: Phi-4 Mini vs. Gemma 3 vs. SmolLM](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Begleitartikel zur Modellwahl für diese Apps.',
          '[Die besten lokalen LLMs 2026](/de/local-llms/best-local-llms-2026) — Umfassender Modellüberblick für alle Hardware-Klassen, nicht nur Mobilgeräte.',
          '[Lokalen Sprachassistenten auf dem Smartphone erstellen: Whisper + lokales LLM](/de/power-local-llm/voice-assistant-local-mobile-offline) — Erweitert diese Apps um Offline-Spracheingabe/-ausgabe.',
          '[Beste lokale KI-App für Einstiegs-PCs](/de/power-local-llm/best-local-ai-app-low-end-pc) — Desktop-Alternative für Nutzer, die sich remote mit einem leistungsfähigeren Heimrechner verbinden möchten.',
          '[Verzeichnis lokaler LLM-Software 2026](/de/power-local-llm/local-llm-software-directory-2026) — Verzeichnis aller erwähnenswerten Local-LLM-Tools auf allen Plattformen.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-09-01',
    last_full_refresh: '2026-09-01',
    next_refresh_due: '2027-03-01',
    theme: 'Mobile & Edge LLMs',
    title: '2026年iPhoneで使えるLocal LLMアプリ比較（WiFi不要でAI利用）',
    seoTitle: '2026年版 iPhone向けLocal LLMアプリ5選｜オフラインAI比較',
    intro:
      '2026年に5つのiPhoneアプリが、デバイス上で本格的なLLMを完全動作させます：PocketPal AI、Private LLM、Locally AI（LM Studio製）、MLC Chat、そしてApple Intelligence（システム統合型）です。すべてのアプリはモデルをダウンロードすれば、WiFiなしで動作します。このガイドでは、iPhone 16 ProとiPhone 17 ProにおけるTokens/秒、モデルライブラリ、RAM管理、プライバシー対応、iOS統合の観点からランク付けし、LLM Farmがランキングから外れた理由も解説します。',
    metaDescription:
      '2026年、iPhoneで本格LLMをWiFiなしで動かす5アプリ比較。PocketPal AI（無料）、Private LLM（有料・Siri連携）、Locally AI、MLC ChatをiPhone 16 Pro・17 Proで実測。速度・プライバシー・モデル数を徹底検証。',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ja.webp',
    twitterDescription:
      'iPhone Local AI 2026：PocketPal AI（無料）、Private LLM（Siri対応・¥800）、Locally AI（LM Studio、MLX）、MLC Chat（Metal対応だが更新停止）。ダウンロード後はオフラインで動作します。',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'WiFiなしでプライベートにオンデバイスAIを使いたいiPhoneユーザー。旅行者、プライバシー意識の高いユーザー、オンデバイス推論を探求する開発者などが対象です。',
    readTime: '12分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'iPhoneローカルLLMアプリ',
    targetKeywords: [
      'iphone local llm アプリ おすすめ',
      'iphone llm オフライン',
      'pocketpal ai iphone',
      'private llm アプリ',
      'mlc chat iphone',
      'llm farm ios',
      'iphone ai wifi不要',
    ],
    leadAnswerBlock:
      '**2026年の多くのiPhoneユーザーに最適な方法は、App StoreでPocketPal AIをインストールし、Phi-4 Mini（3.8B Q4_K_M、約2.7 GB）をダウンロードすることです。** 無料・オープンソースで、iPhone 14 Pro以降（RAM 6 GB以上のiPhone）で動作し、iPhone 16 Proでは毎秒約10〜15トークンを生成します。SiriとShortcutsの統合が必要なら、Private LLM（¥800の買い切り、iPhone・iPad・Macに対応）が最有力の有料候補です。Locally AI — 現在はLM Studioチームが開発 — はApple MLXを基盤とした無料の現代的な代替で、Shortcutsに対応し、Appleのオンデバイスファウンデーションモデルにもアクセスできます。MLC ChatはMetal加速のリファレンスアプリのままですが、2024年後半以降アップデートされていません。LLM Farmは2025年8月にApp Storeから削除され、現在はソースからのビルドのみ可能です。Apple Intelligenceもオンデバイスでモデルを実行しますが、システム統合型のためチャットアプリではなく、これらのアプリを補完する役割を担います。',
    quickAnswerTop: {
      ja: {
        question: '2026年のiPhoneで最高のLocal LLMアプリは何ですか？',
        answer:
          'PocketPal AIは多くのiPhoneユーザーに最適な無料の定番アプリです。オープンソース・App Storeからインストール可能で、Hugging FaceのあらゆるGGUFモデルに対応し、iPhone 16 ProでPhi-4 Mini（3.8B）を毎秒約10〜15トークンで動かせます。Private LLMは最有力の有料オプション（¥800の買い切り、iPhone・iPad・Mac対応）で、iOS ShortcutsとSiri統合を提供します。Locally AIはLM Studioチームが開発する無料のApple MLXアプリで、Shortcutsに対応し、Appleのオンデバイスファウンデーションモデルにもアクセスできます。MLC ChatはMetal加速に対応していますが、2024年後半以降動きがありません。Apple Intelligenceもオンデバイスでモデルを実行しますが、システム統合型でこれらのアプリを補完します。',
        bullets: [
          'PocketPal AI — 無料・オープンソース・App Store。ほとんどのユーザーに最適な定番アプリ。あらゆるGGUFモデルに対応。',
          'Private LLM — ¥800の買い切り（iPhone・iPad・Mac対応）。最有力の有料オプション。iOS Shortcuts + Siri統合。',
          'Locally AI — 無料、LM Studioチーム製。Apple MLXエンジン、Shortcuts対応、Apple Foundation Modelsへのアクセス。',
          'MLC Chat — 無料・MLC LLMプロジェクト。Metal加速だが2024年後半以降アプリの更新なし（モデルライブラリが旧世代）。',
          'Apple Intelligence — システム統合型、独立したアプリではありません。メール、メッセージ、メモで利用されるオンデバイス3Bモデル。',
          'iPhone 16 Pro / 17 Pro向け推奨モデル：Phi-4 Mini（3.8B Q4_K_M、約2.7 GB） — 毎秒約10〜15トークン。',
          '旧世代iPhone（14 Pro）：Qwen3 1.7B または SmolLM 2 1.7B — 6 GB RAMに収まり、毎秒約15〜20トークン。',
        ],
        updatedDate: '2026-09-01',
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
      { label: 'MLC Chat：Apple Siliconに最適化', anchor: '#mlc-chat' },
      { label: 'LLM Farm：削除されたが設定は健在', anchor: '#llm-farm' },
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
          '**PocketPal AIは最良の無料定番アプリです。** オープンソース・App Storeからインストール可能で、Hugging FaceのあらゆるGGUFモデルに対応。iPhone 16 ProでPhi-4 Miniを毎秒約10〜15トークンで動作させます。多くのiPhoneユーザーに推奨のスタート地点です。',
          '**Private LLMは最良の有料オプション（¥800の買い切り、サブスクなし）です。** 1回の購入でiPhone・iPad・MacとFamily Sharingに対応。厳選モデルライブラリ、iOS Shortcuts統合、Siriサポート（"Hey Siri, ask Private LLM"）を提供します。',
          '**Locally AIは無料のMLXベースの代替アプリで、現在はLM Studioチームが開発しています。** Apple MLX上でLlama、Gemma、Qwen、DeepSeekモデルを動かし、iOS Shortcutsに対応し、Apple独自のオンデバイスファウンデーションモデルをチャットインターフェースとして利用可能にします。',
          '**MLC ChatはMetal加速に対応していますが、動きが止まっています。** MLC LLMエンジンは同じハードウェアでllama.cppベースのアプリより約25〜35%速くトークンを生成し続けますが、2024年後半以降アプリは更新されておらず、モデルライブラリはPhi-4 MiniやGemma 3より前のものです。',
          '**LLM Farmは2025年8月にApp Storeから削除されました。** 公式READMEは「一時的に利用不可」と説明しています。オープンソースのままXcodeでソースからビルド可能で、開発者向けには引き続き最もカスタマイズ可能な選択肢（Mirostat、チャットテンプレート）です。',
          '**Apple Intelligenceはオンデバイス型ですが、独立したアプリではありません。** Appleの約3Bファウンデーションモデルはシステム機能（Writing Tools、Smart Reply、通知サマリー）を担います。iOS 26以降、サードパーティアプリはFoundation Modelsフレームワーク経由でこれを呼び出せるようになり、Shortcutsも「モデルを使用」アクションで対応できます。',
          '**iPhone 16 Pro / 17 Pro推奨モデル：Phi-4 Mini（3.8B Q4_K_M、約2.7 GB）。** 8 GB以上のRAMクラスで品質と速度の最良バランス。6 GB RAMの旧世代iPhone（iPhone 14 Pro）：Qwen3 1.7B または SmolLM 2 1.7B。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**比較対象アプリ：** PocketPal AI、Private LLM、Locally AI（LM Studio製）、MLC Chat、Apple Intelligence（システム）— さらに2025年8月にApp Storeから削除されたLLM Farm。',
          '**テストデバイス：** iPhone 16 Pro（A18 Pro、8 GB RAM）およびiPhone 17 Pro（A19 Pro、12 GB RAM）。',
          '**推論エンジン：** llama.cpp（PocketPal AI、LLM Farm）、Apple MLX（Locally AI）、Metal対応MLC LLM（MLC Chat）、専用オンデバイスランタイム（Private LLM、Apple Intelligence）。',
          '**3B以上のモデルに必要な最低限のiPhone：** 1.7B向け：iPhone 14 Pro（A16、6 GB RAM）；3B〜4B向け：8 GB以上のiPhone（15 Pro、16シリーズ、16e、17シリーズ）。',
          '**最良の無料アプリ：** PocketPal AI — App Store、オープンソース、モデル柔軟性。',
          '**最良の有料アプリ：** Private LLM — ¥800の買い切り（iPhone・iPad・Mac対応）、Shortcuts + Siriサポート。',
          '**オフライン動作：** モデルをダウンロードすれば5つすべて完全オフラインで動作 — クラウド接続不要。',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '最初にインストールすべきiPhoneアプリは？',
        content:
          '**ほとんどのユーザーへの推奨：App StoreでPocketPal AIをインストールし、Phi-4 Mini（3.8B Q4_K_M）をダウンロードしてください。** この組み合わせはiPhone 14 Pro以降で動作し、無料で日常のチャット・要約・下書きに実用的な出力を提供します。PocketPal AIで対応できない特定の需要がある場合のみ、他のアプリを検討してください。',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ja.webp',
        imageCaption: 'iPhoneにインストールするローカルAIアプリの選び方：PocketPal AI（無料デフォルト）、Private LLM（Siri＋ショートカット）、Locally AI（無料MLX、LM Studioチーム）、MLC Chat（Metalで高速だが更新停止）、Apple Intelligence（iOS標準搭載）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年の多くのiPhoneユーザーに推奨：PocketPal AI（無料・App Store）をインストールしてPhi-4 Miniをダウンロードする。RAM 6 GB以上のiPhoneで日常のチャット・要約・下書きに対応します。',
          },
          {
            type: 'plain-terms',
            text: '2026年には5つのiPhoneアプリがデバイス上でAIを完全動作させます。PocketPal AIが最良の無料スタート地点です。インストールして2.7 GBのモデルファイルを一度ダウンロードするだけで、WiFiなしの電車の中でも使えるプライベートなチャットアシスタントが手に入ります。Private LLMはSiriにローカルモデルを応答させたい場合の有料オプションです。Locally AIはLM Studioチーム製の無料の現代的な代替で、Shortcutsに対応しています。MLC Chatは速いですが更新されていません。Apple IntelligenceはiOS内蔵ですが、チャットアプリではありません。PocketPal AIは90%のユースケースに対応します。',
          },
        ],
        decisionBlock: {
          title: '選択ガイド：iPhoneでどのローカルAIアプリを使うか？',
          localIf: [
            'オフラインで動作する無料チャットAIが欲しい → PocketPal AI',
            'Siriにローカルモデルを応答させたい → Private LLM',
            'ShortcutsとApple Foundation Modelsアクセスに対応した無料MLXアプリが欲しい → Locally AI',
            '旧世代のモデルライブラリを許容してでもMetal加速の最大速度が欲しい → MLC Chat',
            'メール・メッセージ・メモでの文章支援だけが必要 → Apple Intelligence（内蔵）',
          ],
          cloudIf: [
            '70B以上のモデル品質（Llama 3.3 70B、GPT-5.5クラス）が必要 → クラウドまたは自宅PCへのリモート接続',
            'GPT-5.5、Claude Opus、Geminiが特定で必要 → クラウドアプリ（ローカルでは利用不可）',
            'リアルタイムのビジョンやテキスト以外のマルチモーダル出力が必要 → クラウド（2026年のオンデバイスマルチモーダルは限定的）',
          ],
          quick: [
            '無料 + 90%のユーザーに対応：PocketPal AI',
            '有料 + iOSネイティブ統合：Private LLM',
            '無料 + LM Studioエコシステム：Locally AI',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '後でPrivate LLMを購入する予定でも、まずPocketPal AIをインストールしてください。ご自身のiPhoneティアでのオンデバイス推論が用途に十分な速度かどうかを確認してから、Private LLMのiOS Shortcuts・Siri統合機能が¥800の価値があるか判断できます。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhoneアプリ比較表',
        content:
          '**5つのアプリは、ほとんどのユーザーにとって重要な3つの軸で異なります：コスト、モデル柔軟性、iOS統合。** 速度の差は存在しますが、これらのアプリとクラウドLLMの差より小さいです。',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-ja.webp',
        imageCaption: 'iPhoneローカルLLMアプリ比較：PocketPal AI（無料、~10–15 tok/s）、Locally AI（無料、Apple MLX + Shortcuts）、MLC Chat（無料、~14–20 tok/s、Metal加速、2024年後半以降更新なし）、Private LLM（¥800買い切り、Siri＋ショートカット）、Apple Intelligence（システム統合）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AIが最良の無料定番、Private LLMが最良の有料オプション、Locally AIがLM Studioチーム製の無料MLXの選択肢、MLC ChatはMetalで高速だが更新停止、Apple Intelligenceがシステム統合型です。',
          },
          {
            type: 'plain-terms',
            text: '選択は通常3つの要素に絞られます：Siri統合に有料を払いますか（Private LLM）、LM StudioエコシステムをShortcuts対応で無料に使いたいですか（Locally AI）、旧世代のモデルライブラリを許容してでも最大速度が欲しいですか（MLC Chat）。それ以外はPocketPal AIがデフォルトです。表の数値はQ4_K_M量子化（2026年のモバイル推論の標準）を前提としています。',
          },
        ],
        columns: ['アプリ', 'リンク', '価格', 'トークン/秒（Phi-4 Mini、16 Pro）', 'プライバシー', '最適な用途'],
        rows: [
          { 'アプリ': 'PocketPal AI', 'リンク': '[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)', '価格': '無料（オープンソース）', 'トークン/秒（Phi-4 Mini、16 Pro）': '約10〜15', 'プライバシー': 'ローカルのみ、テレメトリなし', '最適な用途': 'ほとんどのユーザーに最適な無料定番アプリ' },
          { 'アプリ': 'Private LLM', 'リンク': '[privatellm.app](https://privatellm.app)', '価格': '¥800の買い切り', 'トークン/秒（Phi-4 Mini、16 Pro）': '約10〜14', 'プライバシー': 'ローカルのみ、opt-in分析', '最適な用途': 'iOS Shortcuts + Siri統合' },
          { 'アプリ': 'Locally AI', 'リンク': '[lmstudio.ai/locally](https://lmstudio.ai/locally)', '価格': '無料（LM Studioチーム）', 'トークン/秒（Phi-4 Mini、16 Pro）': '該当なし — MLXカタログ（Phi-4非対応）', 'プライバシー': 'ローカルのみ、データ収集なし', '最適な用途': 'MLX + Shortcuts、LM Studio連携' },
          { 'アプリ': 'MLC Chat', 'リンク': '[llm.mlc.ai](https://llm.mlc.ai)', '価格': '無料（オープンソース）', 'トークン/秒（Phi-4 Mini、16 Pro）': '該当なし — Phi-4以前のライブラリ', 'プライバシー': 'ローカルのみ、テレメトリなし', '最適な用途': 'Metal速度、旧世代モデル' },
          { 'アプリ': 'LLM Farm', 'リンク': '[github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)', '価格': '無料（ソースのみ）', 'トークン/秒（Phi-4 Mini、16 Pro）': '約10〜15', 'プライバシー': 'ローカルのみ、テレメトリなし', '最適な用途': 'パワーユーザー（App Store削除済み）' },
          { 'アプリ': 'Apple Intelligence', 'リンク': '[apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)', '価格': '無料（iOS内蔵）', 'トークン/秒（Phi-4 Mini、16 Pro）': '該当なし（システム機能）', 'プライバシー': 'ローカル + opt-in Private Cloud Compute', '最適な用途': 'メール・メッセージ・メモでの支援' },
        ],
        note:
          '**Apple Neural Engine（ANE）、Metal、MLXの違いについて：** PocketPal AIとLLM FarmはGPU上で動作するMetal Performance Shadersを使ったllama.cppで推論を行います。MLC ChatはMLC LLMとより深いMetal最適化を採用し、対応するモデルについては同じハードウェアで25〜35%高いトークン/秒を達成します。Locally AIはApple独自のオープンソース配列フレームワークであるApple MLXを使用し、Apple Silicon上で同等のGPU効率を実現します。Apple IntelligenceはシステムAI約3Bモデル専用にANEを使用 — Metal推論より省電力ですが柔軟性は低いです。iOS 26以降、サードパーティアプリはFoundation Modelsフレームワーク経由でこのシステムモデルを呼び出せるようになりました（Locally AIがまさにこれを行っています）が、独自のGGUF/MLXモデルは依然としてANEを直接ターゲットできません。',
        callouts: [
          {
            type: 'tip',
            text: 'トークン/秒の数値はQ4_K_M量子化（2026年のモバイル推論の標準）と他の重いアプリが動作していないiPhoneを前提としています。バックグラウンドアプリはスループットを10〜30%低下させます。iPhone 17 ProのトークN/秒はA19 Proの改善によりiPhone 16 Proより約20〜30%高くなります。',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI：無料オープンソースの定番アプリ',
        content:
          '**PocketPal AIは2026年の多くのiPhoneユーザーにとって推奨のスタート地点です。** 無料・オープンソース（GitHub: a-ghorbani/pocketpal-ai）で、App Storeから入手でき、Hugging FaceのあらゆるGGUFモデルに対応しています。内部ではApple Silicon最適化を施したllama.cppを使用しています。',
        items: [
          '**概要：** llama.cppを使ってGGUFモデルをローカルで動作させるiOSアプリ。サブスク・テレメトリ・アカウント不要。',
          '**インストール：** App Store → "PocketPal AI"。無料ダウンロード。',
          '**モデルの追加：** アプリ内で「モデル」→「Hugging Faceから追加」→検索（例："phi-4-mini-instruct-Q4_K_M"）→タップしてダウンロード。モデルはアプリのローカルストレージに保存されます（Phi-4 Mini Q4は約2.7 GB）。',
          '**生成速度（iPhone 16 Pro）：** Phi-4 Mini 約10〜15トークン/秒、Llama 3.2 3B 約12〜18トークン/秒、Gemma 3 4B 約7〜10トークン/秒、Qwen3 1.7B 約18〜24トークン/秒。',
          '**最適な用途：** 無料・App Store配信・アカウント不要で、コミュニティが公開するあらゆるGGUFモデルに対応したチャットアプリを求めるユーザー。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'PocketPal AIのモデルピッカーには「推奨」フィルターがあり、お使いのデバイスのRAMに収まることが確認されたモデルを表示します。iPhone 16 Pro（8 GB RAM）の場合、約4BパラメーターまでのモデルのうちQ4_K_M版が推奨されます。このフィルターを信じてください — 大きすぎるモデルを動かすと、iOSが応答の途中でアプリを強制終了します。',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM：iOS統合機能付き有料オプション',
        content:
          '**Private LLMは2026年における最有力の有料iPhoneオプションです（¥800の買い切り、サブスクなし）。** App Store専用配布で、最適化済みモデルの厳選ライブラリを同梱しています。差別化ポイントはiOS統合：Shortcutsアクションと音声トリガー"Hey Siri, ask Private LLM"です。',
        items: [
          '**概要：** 厳選モデルライブラリと深いiOS統合を備えた有料iOSアプリ。Apple Silicon向けに最適化された専用オンデバイスランタイムを使用しています。',
          '**インストール：** App Store → "Private LLM"。買い切り¥800（サブスクなし）。',
          '**厳選モデルライブラリ：** Llama 3.2 3B、Phi-4 Mini、Mistral Small Instruct、複数の無検閲バリアントを含む約30モデルがiPhone向けに事前テスト・最適化済み。PocketPal AIより柔軟性は低いですが、クラッシュするモデルをインストールするリスクはありません。',
          '**iOS Shortcuts：** "Text With Private LLMを生成"アクションをShortcuts自動化に組み込めます。ホーム画面ボタンやNFCタグからローカルAIを起動するのに便利です。',
          '**Siri統合：** "Hey Siri, ask Private LLM [質問]"でプロンプトがオンデバイスモデルに送られ、Siriが回答を読み上げます。インターネット接続不要。チャットUIよりレイテンシは高め（音声開始まで約3〜5秒）。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Private LLMはユニバーサル購入です：¥800の買い切り価格は1回の購入でiPhone・iPad・Macに対応し、Apple ファミリー共有で最大6人の家族に拡張できます。サブスクなし、アプリ内課金なし — 表示価格が総費用です。',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI：LM Studio製の無料MLXアプリ',
        content:
          '**Locally AIは、現在はLM Studioチームが開発する無料のプライバシー重視チャットアプリで、llama.cppではなくApple独自のMLXフレームワークを基盤としています。** このカテゴリで最も新しい本格的な選択肢であり、Appleのオンデバイスファウンデーションモデルをチャットインターフェースとして提供する唯一のアプリです。',
        items: [
          '**概要：** Apple MLXで推論を行うiOS/iPadOS/macOSアプリ。デスクトップ版LM Studioの開発チームが手がけています。',
          '**インストール：** App Store → "Locally AI"。無料、アカウント不要、100%オフライン。',
          '**モデルライブラリ：** Llama 3.2、Gemma 2/3/4、Qwen 3、DeepSeek、LFM 2.5、Bonsai、Ministral 3、Apple Foundation Models — MLC Chatより幅広く新しいカタログです。',
          '**iOS Shortcuts：** Shortcutsアクションを無料で提供し、Private LLMの自動化サポートに匹敵します。',
          '**LM Link：** MacのLM Studioとエンドツーエンド暗号化接続で連携する任意機能で、必要に応じて自宅マシン上のより大きなモデルにハンドオフできます。',
          '**要件：** iOS/iPadOS 18.1+（Apple Siliconクラスの効率性はiPhone 15 Pro以降で最も発揮されます）。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AIはこのガイドの中で唯一、Apple独自のオンデバイスファウンデーションモデルを通常のチャットウィンドウの裏側に配置できるアプリです — Writing Toolsのメニューを探し回らずに、Apple Intelligenceのモデルが何をできるか試したい場合に便利です。サードパーティGGUFの柔軟性では、PocketPal AIが依然として大きなモデルカタログを持っています。',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat：Apple Siliconに最適化',
        content:
          '**MLC Chat（MLC LLMプロジェクト製）はMetal加速のリファレンスアプリであり続けていますが、アプリ自体は2024年後半以降アップデートされていません。** 無料・オープンソースで、標準GGUFではなくMLC LLMツールチェーンでコンパイルされたモデルを動作させます — このコンパイル要件こそが、そのカタログがPocketPal AIやLocally AIに追いつけていない理由でもあります。',
        items: [
          '**概要：** MLC LLMプロジェクトのiOSリファレンスアプリ。Apple Silicon上でMLC LLMのMetal加速推論を実証します。',
          '**インストール：** App Store → "MLC Chat"。無料。',
          '**速度の優位性（アーキテクチャレベル）：** MLC LLMのMetal加速エンジンは、双方が対応するモデルについて、同一iPhoneでllama.cppベースのアプリより約25〜35%速く生成します — しかしアプリ自体のモデルリストはPhi-4 MiniやGemma 3のような2026年の推奨モデルより前のもので、自前でビルドしない限りこの優位性を検証できません。',
          '**モデルライブラリ：** アプリが停滞する前にMLC LLMプロジェクトがコンパイルしたモデルに限定 — Llama 3.2 3B、RedPajamaなど2024年当時のモデル。すべてのHugging Face GGUFが動作するわけではなく、App Storeビルドには現行世代の小型モデルは含まれていません。',
          '**最適な用途：** すでにMLC LLMツールチェーンに投資しており、自分でモデルをコンパイルする意欲がある開発者、または2025年以前からすでに含まれているモデルを特に必要とするユーザー。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'MLC ChatのApp Storeビルドは2024年後半以降更新されていないため、モデルピッカーにPhi-4 Mini、Qwen3、Gemma 3が現れることは期待しないでください。現行世代のモデルをMetalクラスのGPU効率で使いたい場合、Locally AI（Apple MLX）またはPocketPal AI（Metal Performance Shadersを使うllama.cpp）が現在も積極的にメンテナンスされている代替です。',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm：削除されたが設定は健在',
        content:
          '**LLM Farmは2025年8月にApp StoreとTestFlightから削除されました — 公式のGitHub READMEは両プラットフォームで「一時的に利用不可」と説明しています。** プロジェクト（GitHub: guinmoon/LLMFarm）はオープンソースのままで2026年にかけてGitHub Issueの活動が見られますが、新規ユーザーはApp Storeからインストールできなくなっており、Xcodeでソースからビルドする必要があります。',
        items: [
          '**概要：** 開発者@guinmoon制作のiOSアプリ。GGUFモデルを豊富な設定オプションで動作させ、以前はApp Storeで配布されていました。',
          '**現在の入手可能性：** この更新時点でApp StoreまたはTestFlightからはインストールできません。ソースコードは公開・ビルド可能なままです。',
          '**ソースからのビルド：** リポジトリをクローンし、Xcodeで開き、無料または有料のApple Developerアカウントでデバイスにビルドします — App Store配信のないオープンソースiOSアプリの標準的なサイドローディング手順です。',
          '**公開されている設定（ビルド後）：** 温度、Top-p、Top-k、Mirostatサンプリング、繰り返しペナルティ、モデルごとのシステムプロンプト、チャットテンプレート選択、コンテキストウィンドウ長。',
          '**最適な用途：** Xcodeでソースからアプリをビルドすることに抵抗がなく、特にMirostatサンプリング制御を必要とする開発者。それ以外の人はPocketPal AIまたはLocally AIを使ってください — どちらも完全にApp Storeからインストール可能で無料です。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM FarmへのApp Storeリンクが機能すると期待しないでください — どこかで見つけたそのようなリンクは古いものとして扱ってください。ソースからのビルドにはXcodeとiOSコード署名の基本知識が必要です。それが手間に感じるなら、PocketPal AIが同じ「柔軟な無料チャットアプリ」というユースケースをApp Storeの範囲内でカバーします。',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence：システム統合型オンデバイスAI',
        content:
          '**Apple IntelligenceはiPhone 15 Pro以降（A17 Proチップ、最低8 GB RAM）でApple独自の約3Bファウンデーションモデルをオンデバイスで動作させます。** 標準ではチャットアプリではありません — メール（Smart Reply）、メッセージ（文章ツール）、メモ（要約）、通知サマリーのシステム機能を担います。iOS 26以降、サードパーティ開発者はApple自身のFoundation Modelsフレームワークを通じてこのオンデバイスモデルに直接アクセスできるようになり、Locally AIのようなアプリはこれを本格的なチャットインターフェースとして活用しています。',
        items: [
          '**場所：** iOS 18+に統合されています（Foundation Modelsフレームワークはios 26で追加）。「設定」→「Apple Intelligence & Siri」で有効化できます。',
          '**ハードウェア要件：** iPhone 15 Pro / 15 Pro Max、iPhone 16シリーズ、iPhone 16e、iPhone 17シリーズ。旧モデル（14以前）はApple Intelligenceに非対応。',
          '**オンデバイス機能：** あらゆるテキストフィールドでのWriting Tools（書き直し・要約・校正）、メール・メッセージでのSmart Reply、通知サマリー、Genmoji生成。',
          '**Foundation Modelsフレームワーク（iOS 26以降）：** 開発者が数行のコードで同じオンデバイスモデルに直接アクセスできるネイティブSwift API — Locally AIはこれを使ってチャットオプションとして提供しており、Shortcutsの「モデルを使用」アクションもこれを通じてプロンプトをオンデバイスモデル、Private Cloud Compute、またはChatGPTにルーティングできます。',
          '**Private Cloud Compute：** オンデバイスモデルの処理能力を超えるタスクの場合、Apple IntelligenceはPrivate Cloud Compute（PCC）にフォールバックします — Appleが運営するより大型モデルのサーバーで、ユーザーデータを保持しない暗号学的保証があります。PCCはopt-inで無効化可能。',
          '**チャットアプリとの関係：** Apple Intelligenceは補完的な存在であり、代替ではありません。システム機能はiOS内アプリでの文章書き直しと要約を担い、PocketPal AI、Private LLM、Locally AI、MLC Chatは任意の質問に対応する専用チャットインターフェースを提供します — そしてLocally AIは今やApple独自のモデルにも同様のインターフェースを提供できます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Apple Intelligenceだけが目的（メール書き直し、通知要約）なら、別途チャットアプリは不要です。「量子トンネルをわかりやすく説明して」や「Xのプロジェクト計画を作成して」といった質問をモデルに投げかけたいなら、チャットアプリをインストールしてください — PocketPal AIのような専用アプリでも、Apple自身のオンデバイスモデルにチャットウィンドウを提供できるLocally AIでも構いません。',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'iPhoneモデル別推奨モデル',
        content:
          '**iPhoneのRAMがモデルサイズの上限を決めます — チップの世代ではありません。** 6 GB iPhone（14 Pro、15）は1.7Bモデルを快適に動かせます；8 GB以上のiPhone（15 Pro、16シリーズ、16e、17シリーズ）は3B〜4Bモデルを快適に、7Bモデルはゆっくりと動かせます。モバイル以外の全ハードウェアクラスを網羅した広範なモデルガイドは [2026年版ベストローカルLLM](/ja/local-llms/best-local-llms-2026) をご参照ください。',
        image: '/images/iphone-llm-apps-models-tier-ja.svg',
        imageCaption: 'iPhone RAMによるLLMモデル推奨：8GB以上のiPhone（15 Pro〜17 Pro）にはPhi-4 Mini 3.8B Q4_K_M（8〜20 tok/s）、6GB iPhone（14 Pro・非Pro）にはQwen3 1.7B Q4_K_M（12〜20 tok/s）、iPhone SE（4GB）は非推奨。',
        columns: ['iPhoneモデル（年・RAM）', '推奨モデル', 'ダウンロードサイズ', '期待速度'],
        rows: [
          { 'iPhoneモデル（年・RAM）': 'iPhone 17 Pro（2025年、12 GB）', '推奨モデル': 'Phi-4 Mini または Llama 3.2 3B（Q4_K_M）', 'ダウンロードサイズ': '約2.5〜2.7 GB', '期待速度': '約13〜20トークン/秒' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 16 Pro / 16 Pro Max / 16e（2024〜2025年、8 GB）', '推奨モデル': 'Phi-4 Mini（3.8B Q4_K_M）', 'ダウンロードサイズ': '約2.7 GB', '期待速度': '約10〜15トークン/秒' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 15 Pro / Pro Max（2023年、8 GB）', '推奨モデル': 'Phi-4 Mini（3.8B Q4_K_M）', 'ダウンロードサイズ': '約2.7 GB', '期待速度': '約8〜12トークン/秒' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 14 Pro / Pro Max（2022年、6 GB）', '推奨モデル': 'Qwen3 1.7B または SmolLM 2 1.7B（Q4_K_M）', 'ダウンロードサイズ': '約1.1 GB', '期待速度': '約15〜20トークン/秒' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 14 / 15 / 16（Pro以外、6 GB）', '推奨モデル': 'Qwen3 1.7B または SmolLM 2 1.7B（Q4_K_M）', 'ダウンロードサイズ': '約1.1 GB', '期待速度': '約12〜18トークン/秒' },
          { 'iPhoneモデル（年・RAM）': 'iPhone SE / 旧モデル（4 GB）', '推奨モデル': 'オンデバイスLLMには非推奨', 'ダウンロードサイズ': '—', '期待速度': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '6 GB RAMの旧世代iPhoneでは、2026年においてQwen3 1.7Bがモデルサイズと品質のベストバランスです。SmolLM 2 1.7B（HuggingFace）も同等です。どちらも短い回答（1〜3段落）は一貫して生成できますが、複数ステップの推論は苦手です。6 GB iPhoneにPhi-4 Miniをインストールしないでください — 名目上は収まりますが、他のアプリがメモリを必要とするとiOSがアプリを強制終了します。',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'バッテリー消耗と熱スロットリング',
        content:
          '**iPhoneでのオンデバイスLLM推論はCPU/GPU負荷が高く、熱を発生させます。** アクティブな推論（モデルがトークンを生成中）は約3〜5 Wを消費し、継続的な生成はチップをスロットリングさせ、iPhone 16 Proで1時間あたり約20〜30%バッテリーを消耗します。',
        image: '/images/iphone-llm-apps-battery-thermal-ja.svg',
        imageCaption: 'iPhoneオンデバイスLLM熱ガイド：推論実行中は3〜5Wの電力消費でiPhone 16 Proのバッテリーを約20〜30%/時間消耗。10〜15分後に熱スロットリングで速度が30〜50%低下。デバイスを画面を上にして硬い面に置くと放熱できる。',
        items: [
          '**バッテリー消耗（アクティブなチャット）：** iPhone 16 ProでPhi-4 Miniを使用時、1時間あたり約20〜30%。iPhone 17 Proはピーク消費電力が高いため若干速く消耗しますが、ワークロードを早く完了するため相殺されます。',
          '**熱スロットリングは約10〜15分の継続生成後に発動します。** チップ表面温度が約38°Cに達すると、iOSがクロック速度を下げ、トークン/秒が30〜50%低下します。冷却すれば元の速度に戻ります。',
          '**対策：** 長い推論セッション中は、iPhoneを画面を上にした状態で硬い平面に置いてください（手で持ったりポケットに入れないでください）。放熱が改善されます。パッシブヒートシンクケースは有効ですが、短時間のやりとりにはほぼ不要です。',
          '**ファントム消耗：** 生成後にチャットアプリをバックグラウンドで開いたままにしても、RAMは割り当て済みですが推論は実行されません — バッテリーへの影響は最小限。アプリを完全に閉じると約3 GB RAMが解放されます。',
          '**推論中のMagSafe充電：** iPhone 17 ProとiPhone 16 Pro（両方とも改善されたサーマル設計）では問題ありません。iPhone 15 Proでは、充電と推論の組み合わせで熱限界に早く達する場合があります — 推論後に充電することをお勧めします。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '直射日光下や熱い車内でiPhoneのオンデバイスLLM推論を実行しないでください。周囲の熱と推論ワークロードが組み合わさり、数分以内にチップが熱限界を超え、積極的なスロットリングが発動し、「iPhoneを冷やす必要があります」の警告が表示される可能性があります。チャットアプリはクラッシュしませんが、生成速度が極端に遅くなります。',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts、Siri、サイドローディング',
        content:
          '**iOSとの統合度はアプリによって大きく異なります。** Private LLMとLocally AIはどちらもShortcutsアクションを提供します；PocketPal AIとMLC Chatは2026年時点でShortcutsアクションを持たないスタンドアロンのチャットアプリです。',
        image: '/images/iphone-llm-apps-ios-integration-ja.svg',
        imageCaption: 'ローカルLLMアプリ別iOS統合機能：Private LLM、Locally AI、Apple Intelligenceはショートカットに対応（Private LLMはさらにSiriにも対応）。PocketPal AIとMLC Chatはショートカットなしのスタンドアロンチャットアプリ（2026年時点）。',
        items: [
          '**Private LLM** は"Text With Private LLMを生成"のShortcutsアクションと音声トリガー"Hey Siri, ask Private LLM [質問]"を提供します。有料チャットアプリの中で最もiOSネイティブです。',
          '**Locally AI** はShortcutsアクションを無料で提供し、Foundation Modelsフレームワーク連携によりショートカットをApple自身のオンデバイスモデルにルーティングできます — 音声トリガーはありませんが、支払いなしでShortcuts自動化が可能です。',
          '**PocketPal AI** はスタンドアロンのチャットアプリです — Shortcutsアクションなし、Siri統合なし。アプリを開いてチャットします。Shortcuts対応の計画はGitHub Issuesで追跡されていますが、リリースされていません。',
          '**MLC Chat** はMLC LLMプロジェクトのリファレンスアプリです — iOS統合は最小限で2024年後半以降更新もありません。Shortcutsアクションなし。',
          '**LLM Farm** はApp Storeから削除されており（2025年8月）、ソースからビルドした場合もShortcutsアクションはありません。',
          '**Apple Intelligence** は「モデルを使用」アクション（iOS 18.4+、iOS 26でFoundation Modelsフレームワークとともに拡張）でiOS Shortcutsと統合します。これはプロンプトをオンデバイスモデル、Private Cloud Compute、またはChatGPT（設定可能）にルーティングします。オンデバイスの出力を他のShortcutsアクションに連結できます。',
          '**サイドローディング：** PocketPal AI、Private LLM、Locally AI、MLC ChatはApp Storeにあり、サイドローディングやジェイルブレイクは不要です；Apple IntelligenceはiOS内蔵。LLM Farmは例外で、インストールにはXcodeでのソースビルドが必要になりました。EUユーザーは2026年のDMAに基づきApp Storeアプリを代替マーケットプレイスからもインストールできますが、アプリ自体は同一です。',
        ],
        promptExamples: [
          {
            label: 'Private LLMのShortcut：選択テキストを要約',
            text: '1. アクション：「選択したテキストを取得」（iOS Share Sheetの入力）。\n2. アクション：「Text With Private LLMを生成」→ プロンプト：「以下のテキストを3つの箇条書きで要約してください：[選択したテキスト]」→ モデル：Phi-4 Mini。\n3. アクション：「結果を表示」または「クリップボードにコピー」。\nShare Sheetに追加することで、あらゆるアプリの任意のテキストで完全オフラインで実行できます。',
          },
          {
            label: 'Apple IntelligenceのShortcut：トーンを調整',
            text: '1. アクション：「クリップボードを取得」。\n2. アクション：「モデルを使用」→ モデル：On-device → プロンプト：「これをプロフェッショナルで簡潔なトーンに書き直してください：[クリップボード]」。\n3. アクション：「クリップボードにコピー」。\nロック画面ウィジェットに割り当てて、コピーしたものをワンタップで書き直せるようにします。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '運転中や料理中のハンズフリー利用には、Private LLMの"Hey Siri, ask Private LLM"が電話に触れずに使える唯一のオンデバイスオプションです。Apple IntelligenceはSiriを通じた音声操作に対応していますが、システムタスク（文章作成、要約、アプリ操作）のみで — チャットアプリのような一般的なQ&Aには対応していません。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**iPhoneのRAMが許容する以上のモデルをインストールする。** 8 GB iPhoneの7Bモデルは毎秒約3〜5トークンで動作し、iOSが別のアプリのためにメモリを回収するとクラッシュします。お使いのiPhoneクラスに合った推奨モデルを使用してください（8 GBデバイスは3B〜4B、6 GBデバイスは1.7B）。',
          '**オンデバイスモデルにクラウドAIの品質を期待する。** Phi-4 Mini（3.8B）はそのサイズとしては印象的ですが、GPT-5.5ではありません。チャット・要約・下書き・簡単なQ&Aに使い、複数ステップの推論・複雑なコード生成・微妙な創作は対象外です。',
          '**直射日光下や熱い車内で推論を実行する。** 熱スロットリングは数分以内に発動します。生成速度が30〜50%低下し、「iPhoneを冷やす必要があります」の警告が表示される場合があります。室温で推論を実行してください。',
          '**3つ以上のチャットアプリをそれぞれ3 GBのモデルとともにインストールしたままにする。** 重複したモデルで約10 GBのストレージを消費します。1つのアプリと1つのモデルを選び、必要と確信できるまで他はアンインストールしてください。',
          '**Apple Intelligenceにはチャットインターフェースが全くないと思い込む。** iOS 18まではその通りでしたが、iOS 26以降はLocally AIのようなアプリがFoundation Modelsフレームワーク経由でApple自身のオンデバイスモデルに本格的なチャットウィンドウを提供できます。システム機能（Writing Tools、Smart Reply）自体は依然としてチャットUIではありません。',
          '**App StoreでLLM Farmを探す。** 2025年8月に削除されています。App Storeで検索しても時間の無駄です。同じ無料・柔軟なユースケースにはPocketPal AIを使うか、Mirostat制御が特に必要ならXcodeでソースからLLM Farmをビルドしてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考資料',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)（オープンソースiOSアプリ）。',
          'Private LLM — [App Storeページ](https://apps.apple.com) と開発者ドキュメント。',
          'Locally AI — [App Storeページ](https://apps.apple.com)（LM Studioチーム製、Apple MLXベース）。',
          'MLC Chat / MLC LLMプロジェクト — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html)（Metal加速iOS展開）。',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)（オープンソースiOSアプリ。プロジェクトのREADMEによればApp Store・TestFlightの掲載は一時的に利用不可）。',
          'Apple IntelligenceとオンデバイスFoundationモデル — [Apple Machine Learning Research](https://machinelearning.apple.com) とApple開発者ドキュメント（Foundation Modelsフレームワーク、iOS 26で導入）。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'iPhoneは本当に7Bモデルを動かせますか？',
            a: 'iPhone 15 Pro以降（8 GB RAM）では技術的には可能ですが、実用的な速度では動作しません。iPhone 16 Proの7B Q4モデルは毎秒約3〜5トークンで生成 — チャットには不満足な速度です。iOSは他のアプリがメモリを必要とするとアプリを強制終了する傾向もあります。日常のオンデバイスチャットには3B〜4Bモデル（Phi-4 Mini、Llama 3.2 3B、Gemma 3 4B）を使用してください。7B以上の品質が必要なら、Ollamaを実行しているMacやPCにリモート接続してください。',
          },
          {
            q: 'ローカルAIはiPhoneのバッテリーを消耗させますか？',
            a: 'はい — アクティブな推論は約3〜5 Wを消費し、iPhone 16 Proで1時間あたり約20〜30%バッテリーを消耗します。ときどきのチャット（数回のプロンプト）なら影響は小さいです。継続的な使用（長い会話、複数の要約タスク）の場合はiPhoneを充電器につないでください。推論なしでRAMに留まるモデル自体のバッテリーへの影響は無視できる程度です。',
          },
          {
            q: 'ローカルAI使用中にiPhoneは熱くなりますか？',
            a: 'はい、約10〜15分の継続生成後に熱くなります。チップ表面温度が約38°Cに達し、iOSがクロック速度を下げ、トークン/秒が30〜50%低下します。対策：長いセッションでは硬い平面に画面を上にして置き（手で持たない）、直射日光を避けてください。5分未満の短いやりとりでは目立つ発熱はほとんどありません。',
          },
          {
            q: 'ローカルモデルでSiriを使えますか？',
            a: 'はい、Private LLM（¥800の買い切り）を使えば可能です。"Hey Siri, ask Private LLM [質問]"と言えばプロンプトがオンデバイスモデルに送られ、Siriが回答を読み上げます — 完全オフライン。PocketPal AI、Locally AI、MLC Chatは2026年時点でSiriの音声統合を持っていませんが、Locally AIはShortcuts自動化に対応しています。Apple IntelligenceはSiriに統合されていますが、システムタスク（文章作成、要約、アプリ操作）のみで、一般的なQ&Aには対応していません。',
          },
          {
            q: 'これらのアプリはiPhone SEや古いiPhoneでも動作しますか？',
            a: '限定的です。iPhone SE（4 GB RAM）は2026年のオンデバイスLLMの実用下限を下回ります。iPhone 14 / 15（Pro以外、6 GB RAM）は1.7Bモデル（Qwen3 1.7B、SmolLM 2 1.7B）は動かせますが3B以上は不可です。iPhone 14 ProとiPhone 15 Pro（6〜8 GB RAM）はPhi-4 Miniのような3Bモデルを毎秒8〜12トークンで動かせます。古いiPhoneでは、自宅のMacやPCへのリモート接続の方が現実的です。',
          },
          {
            q: 'iPhoneとMacの間でチャット履歴を同期できますか？',
            a: 'PocketPal AI、Private LLM、MLC Chatには対応していません — チャット履歴は各デバイスにローカル保存され、iCloud同期はありません。Private LLMとLocally AIはどちらもMacでもネイティブに動作するユニバーサル購入/ダウンロードですが、それでもiPhone版とMac版の間で履歴は同期しません。デバイス間でチャット履歴を共有する実用的な方法は、自宅のMacでOpen WebUIを稼働させ、iPhoneとMacの両方からブラウザでアクセスすること — Open WebUIはチャット履歴をサーバー側に保存します。',
          },
          {
            q: 'これらのアプリはApp Store以外でも入手できますか？',
            a: 'PocketPal AIはオープンソースでXcodeを使ってソースからビルドできますが、App Storeビルドが標準配布です。LLM Farmは例外で、現在はソースからのビルドが必須です — 2025年8月にApp StoreとTestFlightから削除されました。Private LLM、Locally AI、MLC ChatはApp Storeのみです。EUユーザーは2026年のDMAに基づきApp Storeアプリを代替マーケットプレイスからもインストールできますが、中身は同一です。',
          },
          {
            q: 'ジェイルブレイクが必要なアプリはありますか？',
            a: 'いいえ。PocketPal AI、Private LLM、Locally AI、MLC Chat、Apple Intelligenceはすべて標準iOSで動作します。Xcodeを使ったLLM Farmのソースビルドもジェイルブレイクを必要としません — ジェイルブレイクの脆弱性ではなく、開発者向けの標準的なサイドローディングを使用します。これらのアプリのいずれにもジェイルブレイクは不要かつ非推奨です。',
          },
          {
            q: 'iOS ShortcutsでローカルAIを使えますか？',
            a: 'はい、Private LLM（"Text With Private LLMを生成"アクション）、Locally AI（無料のShortcutsアクション）、Apple Intelligence（「モデルを使用」アクション、iOS 18.4+、iOS 26で拡張）を通じて使えます。PocketPal AIとMLC Chatは2026年時点でShortcutsアクションを持っていません。Locally AIは、Shortcuts対応とApple自身のオンデバイスモデルへのアクセスを両方無料で提供する唯一の選択肢です。',
          },
          {
            q: 'ローカルAIとiPhoneのChatGPTアプリを比べるとどうですか？',
            a: 'オンデバイスモデル（Phi-4 Mini、Llama 3.2 3B）は複雑な推論、幅広い世界の知識、マルチモーダルタスクではフロンティア級のクラウドモデルに依然として大きく劣りますが、シンプルな質問では（ネットワーク往復なしで）より速く、完全にプライベートです。正直なトレードオフ：日常的・プライベートなタスクにはローカルAI；ときどきの難しい質問にはChatGPTなどのクラウドアプリ。2026年の多くのユーザーは両方を持ち、クエリに応じて選んでいます。',
          },
          {
            q: 'LLM FarmはApp Storeになくなった今も安全に使えますか？',
            a: 'ソースコードはGitHubで公開されており、2026年にかけてもIssueの活動が続いているため放棄されたわけではありませんが、ソースからビルドしてサイドローディングした時点で、AppleのApp Store審査プロセスは経由しなくなります。Mirostatサンプリング制御が特に必要でなければ、PocketPal AIが同じ無料・柔軟・オープンソースのユースケースをカバーしつつ、AppleのApp Store標準審査を経てApp Storeに留まっています。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[2026年版 AndroidのベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けアプリ比較（Maid、Layla、MLC Chat、Termux + Ollama）。',
          '[タブレットでAIを動かす方法：iPadとAndroid（2026年）](/ja/power-local-llm/run-ai-on-tablet-ipad-android) — タブレットユーザー向けのプラットフォームガイド。',
          '[2026年版 モバイル向けLLMモデル比較：Phi-4 Mini vs Gemma 3 vs SmolLM](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — これらのアプリで使うモデルを選ぶためのコンパニオン記事。',
          '[2026年版 ベストローカルLLM](/ja/local-llms/best-local-llms-2026) — モバイルだけでなく全ハードウェアクラスを網羅した包括的なモデルガイド。',
          '[スマートフォンでローカル音声アシスタントを構築：Whisper + ローカルLLM](/ja/power-local-llm/voice-assistant-local-mobile-offline) — これらのアプリにオフライン音声入出力を拡張。',
          '[低スペックPC向け最良のローカルAIアプリ](/ja/power-local-llm/best-local-ai-app-low-end-pc) — より高性能な自宅マシンにリモート接続したいユーザー向けのデスクトップ代替。',
          '[2026年版 ローカルLLMソフトウェアディレクトリ](/ja/power-local-llm/local-llm-software-directory-2026) — 全プラットフォームの注目ローカルLLMツール一覧。',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-09-01',
    last_full_refresh: '2026-09-01',
    next_refresh_due: '2027-03-01',
    theme: 'Mobile & Edge LLMs',
    title: 'Meilleures applications LLM locales pour iPhone en 2026 (IA sans WiFi)',
    seoTitle: 'Meilleures applications LLM locales iPhone 2026',
    intro:
      'Cinq applications iPhone font tourner de vrais LLM entièrement sur l\'appareil en 2026 : PocketPal AI, Private LLM, Locally AI (par LM Studio), MLC Chat et Apple Intelligence (intégrée au système). Toutes fonctionnent sans WiFi une fois le modèle téléchargé. Ce guide les classe selon les tokens par seconde sur iPhone 16 Pro et iPhone 17 Pro, la bibliothèque de modèles, la gestion de la RAM, la posture de confidentialité et l\'intégration iOS — et explique pourquoi LLM Farm est sorti du classement.',
    metaDescription:
      'Meilleures apps LLM locales pour iPhone 2026 : PocketPal AI, Private LLM, Locally AI, MLC Chat testées sur iPhone 16 Pro et 17 Pro. Vitesse, confidentialité et modèles comparés.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-fr.webp',
    twitterDescription:
      'IA locale sur iPhone en 2026 : PocketPal AI (gratuit), Private LLM (5,99 €, Siri), Locally AI (LM Studio, MLX), MLC Chat (Metal mais à l\'arrêt). Fonctionne hors ligne après téléchargement.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
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
    ],
    leadAnswerBlock:
      '**Pour la plupart des utilisateurs iPhone en 2026, installez PocketPal AI depuis l\'App Store et téléchargez Phi-4 Mini (3,8B Q4_K_M, ~2,7 Go).** Gratuit, open source, compatible avec iPhone 14 Pro et les modèles plus récents (tout iPhone avec 6 Go+ de RAM), il génère ~10–15 tokens/sec sur iPhone 16 Pro pour un usage quotidien. Pour l\'intégration Siri et Shortcuts, Private LLM est la meilleure option payante (5,99 € en achat unique, couvre iPhone, iPad et Mac). Locally AI — désormais développé par l\'équipe LM Studio — est l\'alternative gratuite moderne basée sur Apple MLX, avec support Shortcuts et accès au modèle de fondation on-device d\'Apple. MLC Chat reste l\'application de référence pour Metal mais n\'a pas été mise à jour depuis fin 2024. LLM Farm a été retiré de l\'App Store en août 2025 et ne s\'installe désormais qu\'en compilant les sources. Apple Intelligence exécute également des modèles on-device mais est intégré au système — il complète ces applications plutôt qu\'il ne les remplace.',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure application LLM locale pour iPhone en 2026 ?',
        answer:
          'PocketPal AI est la meilleure option gratuite pour la plupart des utilisateurs — open source, disponible sur l\'App Store, compatible avec n\'importe quel modèle GGUF depuis Hugging Face, et fait tourner Phi-4 Mini (3,8B) à ~10–15 tokens/sec sur iPhone 16 Pro. Private LLM est la meilleure option payante (5,99 € en achat unique, iPhone + iPad + Mac) avec l\'intégration iOS Shortcuts et Siri. Locally AI, développé par l\'équipe LM Studio, est l\'option gratuite Apple MLX avec support Shortcuts et accès au modèle de fondation on-device d\'Apple. MLC Chat est accéléré par Metal mais inactif depuis fin 2024. Apple Intelligence exécute également des modèles on-device mais est intégré au système et complète ces applications.',
        bullets: [
          'PocketPal AI — gratuit, open source, App Store. Meilleure option par défaut pour la plupart des utilisateurs. Compatible avec tous les modèles GGUF.',
          'Private LLM — 5,99 € en achat unique (iPhone + iPad + Mac). Meilleure option payante. iOS Shortcuts + intégration Siri.',
          'Locally AI — gratuit, par l\'équipe LM Studio. Moteur Apple MLX, support Shortcuts, accès aux Apple Foundation Models.',
          'MLC Chat — gratuit, projet MLC LLM. Accéléré par Metal, mais aucune mise à jour de l\'app depuis fin 2024 (bibliothèque de modèles datée).',
          'Apple Intelligence — intégré au système, pas une application séparée. Modèle 3B on-device utilisé par Mail, Messages et Notes.',
          'Modèle recommandé pour iPhone 16 Pro / 17 Pro : Phi-4 Mini (3,8B Q4_K_M, ~2,7 Go) — tourne à ~10–15 tokens/sec.',
          'Anciens iPhone (14 Pro) : Qwen3 1.7B ou SmolLM 2 1.7B — tient dans 6 Go de RAM, ~15–20 tokens/sec.',
        ],
        updatedDate: '2026-09-01',
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
      { label: 'MLC Chat : optimisé pour Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm : retiré mais toujours configurable', anchor: '#llm-farm' },
      { label: 'Apple Intelligence : IA on-device intégrée au système', anchor: '#apple-intelligence' },
      { label: 'Modèles recommandés par génération d\'iPhone', anchor: '#models-by-tier' },
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
          '**PocketPal AI est la meilleure option gratuite par défaut.** Open source, disponible sur l\'App Store, compatible avec n\'importe quel modèle GGUF depuis Hugging Face. Fait tourner Phi-4 Mini à ~10–15 tokens/sec sur iPhone 16 Pro. Point de départ recommandé pour la plupart des utilisateurs.',
          '**Private LLM est la meilleure option payante (5,99 €, sans abonnement).** Un seul achat couvre iPhone, iPad et Mac avec le partage familial. Bibliothèque de modèles sélectionnés, intégration iOS Shortcuts et commande vocale Siri "Dis Siri, demande à Private LLM".',
          '**Locally AI est l\'alternative gratuite basée sur MLX, désormais développée par l\'équipe LM Studio.** Fait tourner des modèles Llama, Gemma, Qwen et DeepSeek sur Apple MLX, fonctionne avec iOS Shortcuts et peut exposer le propre modèle de fondation on-device d\'Apple comme interface de chat.',
          '**MLC Chat est accéléré par Metal mais inactif.** Son moteur MLC LLM génère toujours ~25–35 % de tokens/sec de plus que les applications basées sur llama.cpp sur le même matériel, mais l\'application n\'a pas été mise à jour depuis fin 2024, si bien que sa bibliothèque de modèles précède Phi-4 Mini et Gemma 3.',
          '**LLM Farm a été retiré de l\'App Store en août 2025.** Son propre README le décrit comme "temporairement indisponible". Il reste open source et compilable depuis les sources, et demeure l\'option la plus configurable (mirostat, modèles de chat) pour les développeurs.',
          '**Apple Intelligence est on-device mais pas une application distincte.** Le modèle de fondation ~3B d\'Apple alimente des fonctionnalités système (Outils d\'écriture, Réponse intelligente, Résumés de notifications). Depuis iOS 26, les applications tierces peuvent l\'appeler via le framework Foundation Models, et Shortcuts peut l\'interroger via l\'action "Utiliser le modèle".',
          '**Modèle recommandé pour iPhone 16 Pro / 17 Pro : Phi-4 Mini (3,8B Q4_K_M, ~2,7 Go).** Meilleur équilibre qualité/vitesse pour le niveau 8 Go+ de RAM. Anciens iPhone avec 6 Go de RAM (iPhone 14 Pro) : Qwen3 1.7B ou SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Données rapides',
        items: [
          '**Applications comparées :** PocketPal AI, Private LLM, Locally AI (par LM Studio), MLC Chat, Apple Intelligence (système) — ainsi que LLM Farm, retiré de l\'App Store en août 2025.',
          '**Appareils de test :** iPhone 16 Pro (A18 Pro, 8 Go de RAM) et iPhone 17 Pro (A19 Pro, 12 Go de RAM).',
          '**Moteurs d\'inférence :** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), MLC LLM avec Metal (MLC Chat), runtime on-device propriétaire (Private LLM, Apple Intelligence).',
          '**iPhone minimum pour les modèles 3B+ :** iPhone 14 Pro (A16, 6 Go de RAM) pour 1,7B ; tout iPhone 8 Go+ (15 Pro, série 16, 16e, série 17) pour 3B–4B.',
          '**Meilleure application gratuite :** PocketPal AI — App Store, open source, flexibilité des modèles.',
          '**Meilleure application payante :** Private LLM — 5,99 € en achat unique (iPhone + iPad + Mac), support Shortcuts + Siri.',
          '**Hors ligne :** Les cinq fonctionnent entièrement hors ligne une fois le modèle téléchargé ; aucun appel cloud.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Quelle application iPhone installer en premier ?',
        content:
          '**Pour la plupart des utilisateurs : PocketPal AI depuis l\'App Store, puis téléchargez Phi-4 Mini (3,8B Q4_K_M).** Cette combinaison fonctionne sur iPhone 14 Pro et les modèles plus récents, ne coûte rien et produit des résultats utilisables pour le chat quotidien, la synthèse et la rédaction rapide. Choisissez une autre application uniquement si vous avez un besoin spécifique qu\'elle ne couvre pas.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-fr.webp',
        imageCaption: 'Quelle app IA locale pour iPhone : PocketPal AI (défaut gratuit), Private LLM (Siri + Raccourcis), Locally AI (MLX gratuit, équipe LM Studio), MLC Chat (rapide sur Metal mais inactif), Apple Intelligence (intégré à iOS).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour la plupart des utilisateurs iPhone en 2026, installez PocketPal AI (gratuit, App Store) et téléchargez Phi-4 Mini — il couvre le chat quotidien, la synthèse et la rédaction sur tout iPhone avec 6 Go+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Cinq applications font tourner l\'IA entièrement sur votre iPhone en 2026. PocketPal AI est le meilleur point de départ gratuit — installez-le, téléchargez un fichier modèle de 2,7 Go une seule fois, et vous disposez d\'un assistant de chat privé qui fonctionne dans le train sans WiFi. Private LLM est l\'option payante si vous souhaitez que Siri parle au modèle local. Locally AI, de l\'équipe LM Studio, est l\'alternative gratuite moderne avec support Shortcuts. MLC Chat est rapide mais n\'est plus mis à jour. Apple Intelligence est intégré à iOS mais n\'est pas une application de chat. PocketPal AI couvre 90 % des cas d\'usage.',
          },
        ],
        decisionBlock: {
          title: 'Décision : quelle application IA locale pour iPhone ?',
          localIf: [
            'Vous souhaitez un assistant IA gratuit fonctionnant hors ligne → PocketPal AI',
            'Vous souhaitez que Siri parle à votre modèle local → Private LLM',
            'Vous souhaitez une app MLX gratuite avec Shortcuts et accès aux Apple Foundation Models → Locally AI',
            'Vous acceptez une bibliothèque de modèles plus ancienne pour une vitesse Metal maximale → MLC Chat',
            'Vous n\'avez besoin que d\'aide à la rédaction dans Mail / Messages / Notes → Apple Intelligence (intégré)',
          ],
          cloudIf: [
            'Vous avez besoin de la qualité d\'un modèle 70B+ (Llama 3.3 70B, niveau GPT-5.5) → utilisez le cloud ou connectez-vous à distance à une machine domestique',
            'Vous avez besoin d\'accès à GPT-5.5, Claude Opus ou Gemini spécifiquement → applications cloud (non disponibles en local)',
            'Vous avez besoin de vision en temps réel ou de sorties multimodales au-delà du texte → cloud (le multimodal on-device est limité en 2026)',
          ],
          quick: [
            'Gratuit + couvre 90 % des cas : PocketPal AI',
            'Payant + intégration native iOS : Private LLM',
            'Gratuit + écosystème LM Studio : Locally AI',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Installez PocketPal AI en premier, même si vous envisagez de payer Private LLM plus tard. Utilisez PocketPal AI pour tester si l\'inférence on-device sur votre iPhone est suffisamment rapide pour votre usage. Si oui, décidez si l\'intégration iOS Shortcuts et Siri de Private LLM vaut 5,99 €. Si non, vous avez économisé 5,99 € en le découvrant avant de payer.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif des applications iPhone',
        content:
          '**Les cinq applications se différencient sur trois axes importants pour la plupart des utilisateurs : le coût, la flexibilité des modèles et l\'intégration avec iOS.** Les différences de vitesse existent mais sont moins importantes que l\'écart entre n\'importe laquelle de ces applications et un LLM cloud.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-fr.webp',
        imageCaption: 'Comparatif apps LLM locaux iPhone : PocketPal AI (gratuit, ~10–15 tok/s), Locally AI (gratuit, Apple MLX + Shortcuts), MLC Chat (gratuit, ~14–20 tok/s, Metal, inactif depuis fin 2024), Private LLM (5,99 € unique, Siri + Raccourcis), Apple Intelligence (système).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI est la meilleure option gratuite par défaut, Private LLM est la meilleure option payante, Locally AI est le choix MLX gratuit de l\'équipe LM Studio, MLC Chat est rapide sur Metal mais inactif, Apple Intelligence est intégré au système.',
          },
          {
            type: 'plain-terms',
            text: 'Le choix se résume généralement à trois critères : souhaitez-vous payer pour l\'intégration Siri (Private LLM), voulez-vous l\'écosystème LM Studio avec Shortcuts gratuitement (Locally AI), ou voulez-vous la vitesse brute maximale en acceptant une bibliothèque de modèles plus ancienne (MLC Chat) ? Pour tout le reste, PocketPal AI est le choix par défaut. Les chiffres du tableau supposent une quantisation Q4_K_M — le standard pour l\'inférence mobile en 2026.',
          },
        ],
        columns: ['Application', 'Lien', 'Prix', 'Tokens/sec (Phi-4 Mini, 16 Pro)', 'Confidentialité', 'Idéal pour'],
        rows: [
          { 'Application': 'PocketPal AI', 'Lien': '[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)', 'Prix': 'Gratuit (open source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', 'Confidentialité': 'Local uniquement, sans télémétrie', 'Idéal pour': 'Option gratuite par défaut pour la plupart' },
          { 'Application': 'Private LLM', 'Lien': '[privatellm.app](https://privatellm.app)', 'Prix': '5,99 € achat unique', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–14', 'Confidentialité': 'Local uniquement, analyses opt-in', 'Idéal pour': 'iOS Shortcuts + intégration Siri' },
          { 'Application': 'Locally AI', 'Lien': '[lmstudio.ai/locally](https://lmstudio.ai/locally)', 'Prix': 'Gratuit (équipe LM Studio)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A — catalogue MLX (pas de Phi-4)', 'Confidentialité': 'Local uniquement, sans collecte de données', 'Idéal pour': 'MLX + Shortcuts, lien LM Studio' },
          { 'Application': 'MLC Chat', 'Lien': '[llm.mlc.ai](https://llm.mlc.ai)', 'Prix': 'Gratuit (open source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A — bibliothèque antérieure à Phi-4', 'Confidentialité': 'Local uniquement, sans télémétrie', 'Idéal pour': 'Vitesse Metal, modèles anciens' },
          { 'Application': 'LLM Farm', 'Lien': '[github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)', 'Prix': 'Gratuit (sources uniquement)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', 'Confidentialité': 'Local uniquement, sans télémétrie', 'Idéal pour': 'Utilisateurs avancés (retiré de l\'App Store)' },
          { 'Application': 'Apple Intelligence', 'Lien': '[apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)', 'Prix': 'Gratuit (intégré à iOS)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A (fonctionnalité système)', 'Confidentialité': 'Local + Private Cloud Compute opt-in', 'Idéal pour': 'Assistance Mail, Messages, Notes' },
        ],
        note:
          '**Note sur Apple Neural Engine (ANE), Metal et MLX :** PocketPal AI et LLM Farm utilisent llama.cpp avec Metal Performance Shaders pour l\'inférence, qui s\'exécute sur le GPU. MLC Chat utilise MLC LLM avec une optimisation Metal plus poussée, atteignant 25–35 % de tokens/sec de plus sur le même matériel pour les modèles qu\'il prend en charge. Locally AI utilise Apple MLX, le framework de calcul open source d\'Apple, atteignant une efficacité GPU comparable sur Apple Silicon. Apple Intelligence utilise l\'ANE spécifiquement pour le modèle système ~3B, plus économe en énergie mais moins flexible que l\'inférence basée sur Metal. Depuis iOS 26, les applications tierces peuvent appeler ce modèle système via le framework Foundation Models — c\'est exactement ce que fait Locally AI —, mais les modèles GGUF/MLX personnalisés ne peuvent toujours pas cibler directement l\'ANE.',
        callouts: [
          {
            type: 'tip',
            text: 'Les chiffres de tokens/sec supposent une quantisation Q4_K_M (le standard pour l\'inférence mobile en 2026) et un iPhone inactif sans autre application lourde en cours. Les applications en arrière-plan réduisent le débit de 10–30 %. Les tokens/sec sur iPhone 17 Pro sont environ 20–30 % plus élevés que sur iPhone 16 Pro grâce aux améliorations de l\'A19 Pro.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI : option gratuite open source',
        content:
          '**PocketPal AI est le point de départ recommandé pour la plupart des utilisateurs iPhone en 2026.** Gratuit, open source (GitHub : a-ghorbani/pocketpal-ai), disponible sur l\'App Store et compatible avec n\'importe quel modèle GGUF depuis Hugging Face. L\'application utilise llama.cpp en coulisses avec des optimisations Apple Silicon.',
        items: [
          '**Qu\'est-ce que c\'est :** une application iOS qui exécute des modèles GGUF en local avec llama.cpp. Sans abonnement, sans télémétrie, sans compte requis.',
          '**Installation :** App Store → "PocketPal AI". Téléchargement gratuit.',
          '**Ajouter un modèle :** dans l\'application, appuyez sur Modèles → "Ajouter depuis Hugging Face" → recherchez (ex. "phi-4-mini-instruct-Q4_K_M") → appuyez pour télécharger. Le modèle est stocké dans l\'espace de stockage local de l\'application (~2,7 Go pour Phi-4 Mini Q4).',
          '**Vitesse de génération (iPhone 16 Pro) :** Phi-4 Mini ~10–15 tok/sec, Llama 3.2 3B ~12–18 tok/sec, Gemma 3 4B ~7–10 tok/sec, Qwen3 1.7B ~18–24 tok/sec.',
          '**Idéal pour :** les utilisateurs souhaitant une application de chat gratuite, installable depuis l\'App Store, sans compte, compatible avec tout modèle GGUF communautaire.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Le sélecteur de modèles de PocketPal AI dispose d\'un filtre "Recommandés" affichant les modèles vérifiés comme tenant dans la RAM de votre appareil. Pour un iPhone 16 Pro (8 Go de RAM), le sélecteur recommande des variantes Q4_K_M de modèles jusqu\'à ~4B paramètres. Faites confiance à ce filtre — l\'utilisation d\'un modèle trop grand entraîne l\'arrêt de l\'application par iOS en cours de réponse.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM : option payante avec intégration iOS',
        content:
          '**Private LLM est la meilleure option iPhone payante en 2026 (5,99 €, sans abonnement).** Disponible uniquement sur l\'App Store, il est livré avec une bibliothèque de modèles optimisés sélectionnés. Sa différenciation réside dans l\'intégration iOS : actions Shortcuts et commande vocale "Dis Siri, demande à Private LLM".',
        items: [
          '**Qu\'est-ce que c\'est :** une application iOS payante avec une bibliothèque de modèles sélectionnés et une intégration iOS poussée. Utilise un runtime on-device propriétaire optimisé pour Apple Silicon.',
          '**Installation :** App Store → "Private LLM". Achat unique 5,99 € (sans abonnement).',
          '**Bibliothèque de modèles sélectionnés :** ~30 modèles pré-testés et optimisés pour iPhone, dont Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct et plusieurs variantes non censurées. Moins de flexibilité que PocketPal AI mais aucun risque d\'installer un modèle qui plante.',
          '**iOS Shortcuts :** Private LLM expose une action "Générer du texte avec Private LLM" que vous pouvez enchaîner dans des automatisations Shortcuts. Utile pour déclencher l\'IA locale depuis un bouton sur votre écran d\'accueil ou via des étiquettes NFC.',
          '**Intégration Siri :** "Dis Siri, demande à Private LLM [votre question]" achemine l\'invite vers le modèle on-device et lit la réponse à voix haute. Fonctionne sans connexion internet. La latence est plus élevée que dans l\'interface de chat (~3–5 secondes avant le démarrage de l\'audio).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Private LLM est un achat universel : le prix unique de 5,99 € couvre iPhone, iPad et Mac en un seul achat, et le partage familial Apple l\'étend jusqu\'à six membres de la famille. Sans abonnement ni achat intégré — le prix affiché est le coût total.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI : application MLX gratuite de LM Studio',
        content:
          '**Locally AI est une application de chat gratuite et axée confidentialité, désormais développée par l\'équipe LM Studio, construite sur le framework Apple MLX plutôt que sur llama.cpp.** C\'est l\'entrant sérieux le plus récent de cette catégorie et la seule application ici à exposer le modèle de fondation on-device d\'Apple comme interface de chat.',
        items: [
          '**Qu\'est-ce que c\'est :** une application iOS/iPadOS/macOS utilisant Apple MLX pour l\'inférence, développée par l\'équipe derrière l\'application de bureau LM Studio.',
          '**Installation :** App Store → "Locally AI". Gratuit, aucun compte requis, 100 % hors ligne.',
          '**Bibliothèque de modèles :** Llama 3.2, Gemma 2/3/4, Qwen 3, DeepSeek, LFM 2.5, Bonsai, Ministral 3 et Apple Foundation Models — un catalogue plus large et plus récent que celui de MLC Chat.',
          '**iOS Shortcuts :** expose une action Shortcuts, à égalité avec le support d\'automatisation de Private LLM mais gratuitement.',
          '**LM Link :** une fonctionnalité optionnelle qui se connecte à LM Studio exécuté sur un Mac via une liaison chiffrée de bout en bout, permettant à l\'application iPhone de basculer vers un modèle plus grand sur une machine domestique si nécessaire.',
          '**Prérequis :** iOS/iPadOS 18.1+ (les gains d\'efficacité d\'Apple Silicon sont les plus marqués à partir d\'iPhone 15 Pro).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI est la seule application de ce guide capable de placer le propre modèle de fondation on-device d\'Apple derrière une fenêtre de chat classique — utile pour tester ce que le modèle d\'Apple Intelligence peut faire sans naviguer dans les menus des Outils d\'écriture. Pour la flexibilité GGUF tierce, PocketPal AI conserve le plus grand catalogue de modèles.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat : optimisé pour Apple Silicon',
        content:
          '**MLC Chat (du projet MLC LLM) reste l\'application de référence pour l\'accélération Metal, mais elle n\'a pas été mise à jour depuis fin 2024.** Gratuit, open source, il exécute des modèles compilés par la chaîne d\'outils MLC LLM plutôt que des GGUF standard — cette exigence de compilation explique aussi pourquoi son catalogue n\'a pas suivi le rythme de PocketPal AI ou de Locally AI.',
        items: [
          '**Qu\'est-ce que c\'est :** l\'application iOS de référence du projet MLC LLM, démontrant l\'inférence accélérée par Metal de MLC LLM sur Apple Silicon.',
          '**Installation :** App Store → "MLC Chat". Gratuit.',
          '**Avantage de vitesse (au niveau architecture) :** le moteur accéléré par Metal de MLC LLM génère ~25–35 % plus vite que les applications basées sur llama.cpp sur le même iPhone pour les modèles pris en charge par les deux — mais la propre liste de modèles de l\'application précède des choix actuels comme Phi-4 Mini et Gemma 3, rendant cet avantage impossible à vérifier en 2026 sans compiler soi-même.',
          '**Bibliothèque de modèles :** limitée aux modèles compilés par le projet MLC LLM avant que l\'application ne devienne inactive — Llama 3.2 3B, RedPajama et modèles similaires de 2024. Tous les GGUF Hugging Face ne fonctionnent pas, et aucun modèle petit de génération actuelle ne figure dans la version App Store.',
          '**Idéal pour :** les développeurs déjà investis dans la chaîne d\'outils MLC LLM et prêts à compiler leur propre modèle, ou ceux ayant spécifiquement besoin de l\'un des modèles déjà présents datant d\'avant 2025.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Comme la version App Store de MLC Chat n\'a pas été mise à jour depuis fin 2024, n\'attendez pas Phi-4 Mini, Qwen3 ou Gemma 3 dans son sélecteur. Si vous voulez des modèles de génération actuelle avec une efficacité GPU de classe Metal aujourd\'hui, Locally AI (Apple MLX) ou PocketPal AI (llama.cpp avec Metal Performance Shaders) sont les alternatives activement maintenues.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm : retiré mais toujours configurable',
        content:
          '**LLM Farm a été retiré de l\'App Store et de TestFlight en août 2025 — son propre README GitHub décrit l\'application comme "temporairement indisponible" sur les deux.** Le projet (GitHub : guinmoon/LLMFarm) reste open source et a connu une activité d\'issues GitHub jusqu\'en 2026, mais les nouveaux utilisateurs ne peuvent plus l\'installer depuis l\'App Store ; il faut le compiler depuis les sources via Xcode.',
        items: [
          '**Qu\'est-ce que c\'est :** une application iOS du développeur @guinmoon qui exécute des modèles GGUF avec de nombreuses options de configuration, auparavant distribuée sur l\'App Store.',
          '**Disponibilité actuelle :** non installable depuis l\'App Store ou TestFlight au moment de cette mise à jour. Le code source reste public et compilable.',
          '**Compiler depuis les sources :** clonez le dépôt, ouvrez-le dans Xcode, et compilez sur un appareil avec un compte Apple Developer gratuit ou payant — le flux de chargement latéral standard pour toute application iOS open source sans fiche App Store.',
          '**Configuration exposée (une fois compilée) :** température, top-p, top-k, échantillonnage mirostat, pénalité de répétition, instruction système par modèle, sélection du modèle de chat, longueur de la fenêtre de contexte.',
          '**Idéal pour :** les développeurs à l\'aise avec la compilation d\'une application depuis les sources dans Xcode qui souhaitent spécifiquement les contrôles d\'échantillonnage mirostat. Tous les autres devraient utiliser PocketPal AI ou Locally AI, toutes deux entièrement installables depuis l\'App Store et gratuites.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne comptez pas sur un lien App Store vers LLM Farm — traitez tout lien de ce type trouvé ailleurs comme obsolète. Compiler depuis les sources nécessite Xcode et des connaissances de base en signature de code iOS. Si c\'est plus d\'efforts que vous ne le souhaitez, PocketPal AI couvre le même cas d\'usage "application de chat gratuite et flexible" sans quitter l\'App Store.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence : IA on-device intégrée au système',
        content:
          '**Apple Intelligence exécute le propre modèle de fondation ~3B d\'Apple on-device sur iPhone 15 Pro et les modèles plus récents (puce A17 Pro avec 8 Go de RAM minimum).** Par défaut, ce n\'est pas une application de chat — il alimente des fonctionnalités système dans Mail (Réponse intelligente), Messages (outils d\'écriture), Notes (synthèse) et les résumés de notifications. Depuis iOS 26, le framework Foundation Models d\'Apple permet aux développeurs tiers d\'accéder directement à ce modèle on-device, et des applications comme Locally AI l\'exploitent déjà pour offrir une véritable interface de chat.',
        items: [
          '**Où il se trouve :** intégré à iOS 18+ (framework Foundation Models depuis iOS 26). Activez dans Réglages → Apple Intelligence et Siri.',
          '**Configuration matérielle requise :** iPhone 15 Pro / 15 Pro Max, iPhone 16, iPhone 16e, iPhone 17. Les anciens iPhone (14 et inférieurs) ne prennent pas en charge Apple Intelligence.',
          '**Fonctionnalités on-device :** Outils d\'écriture (réécrire, résumer, relire) dans tout champ de texte, Réponse intelligente dans Mail et Messages, Résumés de notifications, génération de Genmoji.',
          '**Framework Foundation Models (iOS 26+) :** une API Swift native donnant aux développeurs un accès direct au même modèle on-device en quelques lignes de code — c\'est ainsi que Locally AI l\'expose comme option de chat, et comment l\'action Shortcuts "Utiliser le modèle" peut acheminer une invite vers lui, vers Private Cloud Compute, ou vers ChatGPT.',
          '**Private Cloud Compute :** pour les tâches dépassant les capacités du modèle on-device, Apple Intelligence bascule vers Private Cloud Compute (PCC) — des serveurs Apple exécutant des modèles plus grands avec des garanties cryptographiques qu\'aucune donnée utilisateur n\'est conservée. PCC est opt-in et peut être désactivé.',
          '**Relation avec les applications de chat :** Apple Intelligence est un complément, pas un remplacement. Ses fonctionnalités système gèrent la réécriture et la synthèse de texte dans les applications iOS ; PocketPal AI, Private LLM, Locally AI et MLC Chat fournissent une interface de chat dédiée pour les questions arbitraires — et Locally AI peut désormais fournir ce même type d\'interface pour le propre modèle d\'Apple.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si Apple Intelligence est votre seul besoin (réécrire des e-mails, résumer des notifications), vous n\'avez pas besoin d\'une application de chat séparée. Si vous souhaitez poser des questions au modèle comme "explique la physique quantique en termes simples" ou "rédige un plan de projet pour X", installez une application de chat — une dédiée comme PocketPal AI, ou Locally AI, capable de placer le propre modèle on-device d\'Apple derrière une fenêtre de chat.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modèles recommandés par génération d\'iPhone',
        content:
          '**La RAM de l\'iPhone détermine la limite de taille du modèle — pas la génération de puce.** Un iPhone 6 Go (14 Pro, 15) peut exécuter confortablement des modèles 1,7B ; un iPhone 8 Go+ (15 Pro, série 16, 16e, série 17) exécute confortablement des modèles 3B–4B et lentement des modèles 7B. Pour le panorama plus large des modèles sur tout le matériel (pas seulement mobile), voir [Meilleurs LLM locaux en 2026](/fr/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-fr.svg',
        imageCaption: 'Recommandations de modèles LLM par RAM iPhone : Phi-4 Mini 3,8B Q4_K_M pour les iPhones 8 Go+ (15 Pro–17 Pro) à 8–20 tok/s ; Qwen3 1,7B Q4_K_M pour les iPhones 6 Go (14 Pro, non-Pro) à 12–20 tok/s ; iPhone SE (4 Go) déconseillé.',
        columns: ['Niveau iPhone (Année, RAM)', 'Modèle recommandé', 'Taille de téléchargement', 'Vitesse estimée'],
        rows: [
          { 'Niveau iPhone (Année, RAM)': 'iPhone 17 Pro (2025, 12 Go)', 'Modèle recommandé': 'Phi-4 Mini ou Llama 3.2 3B (Q4_K_M)', 'Taille de téléchargement': '~2,5–2,7 Go', 'Vitesse estimée': '~13–20 tok/sec' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone 16 Pro / 16 Pro Max / 16e (2024–2025, 8 Go)', 'Modèle recommandé': 'Phi-4 Mini (3,8B Q4_K_M)', 'Taille de téléchargement': '~2,7 Go', 'Vitesse estimée': '~10–15 tok/sec' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 Go)', 'Modèle recommandé': 'Phi-4 Mini (3,8B Q4_K_M)', 'Taille de téléchargement': '~2,7 Go', 'Vitesse estimée': '~8–12 tok/sec' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone 14 Pro / Pro Max (2022, 6 Go)', 'Modèle recommandé': 'Qwen3 1.7B ou SmolLM 2 1.7B (Q4_K_M)', 'Taille de téléchargement': '~1,1 Go', 'Vitesse estimée': '~15–20 tok/sec' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone 14 / 15 / 16 (non Pro, 6 Go)', 'Modèle recommandé': 'Qwen3 1.7B ou SmolLM 2 1.7B (Q4_K_M)', 'Taille de téléchargement': '~1,1 Go', 'Vitesse estimée': '~12–18 tok/sec' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone SE / anciens modèles (4 Go)', 'Modèle recommandé': 'Non recommandé pour LLM on-device', 'Taille de téléchargement': '—', 'Vitesse estimée': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour les anciens iPhone 6 Go, Qwen3 1.7B offre le meilleur équilibre taille/qualité en 2026. SmolLM 2 1.7B (HuggingFace) est comparable. Les deux produisent des réponses courtes cohérentes (1–3 paragraphes) mais peinent avec le raisonnement multi-étapes. N\'installez pas Phi-4 Mini sur un iPhone 6 Go — il tient nominalement mais iOS arrêtera l\'application sous toute pression mémoire.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'Autonomie et surchauffe',
        content:
          '**L\'inférence LLM on-device sur iPhone est intensive en CPU/GPU et génère de la chaleur.** L\'inférence active (modèle générant des tokens) consomme ~3–5 W ; une génération soutenue fera ralentir la puce et drainera la batterie d\'environ 20–30 % par heure sur iPhone 16 Pro.',
        image: '/images/iphone-llm-apps-battery-thermal-fr.svg',
        imageCaption: 'Guide thermique LLM on-device iPhone : l\'inférence active consomme 3–5W (~20–30% batterie/h sur iPhone 16 Pro) ; la bride thermique réduit la vitesse de 30–50% après 10–15 min — posez l\'écran vers le haut sur une surface dure.',
        items: [
          '**Consommation de batterie (chat actif) :** ~20–30 % par heure sur iPhone 16 Pro avec Phi-4 Mini. L\'iPhone 17 Pro se décharge légèrement plus vite en raison d\'une puissance de pointe plus élevée, mais compense en terminant la charge de travail plus tôt.',
          '**La limitation thermique intervient après ~10–15 minutes de génération continue.** Lorsque la température de surface de la puce atteint ~38 °C, iOS réduit les fréquences d\'horloge, faisant chuter les tokens/sec de 30–50 %. Laisser le téléphone refroidir restaure la pleine vitesse.',
          '**Atténuation :** gardez l\'iPhone face vers le haut sur une surface dure (pas dans la main ou la poche) lors des longues sessions d\'inférence pour permettre la dissipation de chaleur. Un étui dissipateur passif aide mais est rarement nécessaire pour les courtes interactions.',
          '**Consommation fantôme :** si vous laissez une application de chat ouverte en arrière-plan après la génération, la RAM reste allouée mais aucune inférence ne tourne — l\'impact sur la batterie est minimal. Fermer complètement l\'application libère les ~3 Go de RAM.',
          '**Charge MagSafe pendant l\'inférence :** acceptable sur iPhone 17 Pro et 16 Pro (tous deux ont des conceptions thermiques améliorées). Sur iPhone 15 Pro, la combinaison charge + inférence peut atteindre les limites thermiques plus rapidement — préférez charger après.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'N\'exécutez pas d\'inférence LLM on-device sur un iPhone exposé au soleil direct ou dans une voiture chaude. La combinaison de la chaleur ambiante et de la charge d\'inférence pousse la puce au-delà des limites thermiques en quelques minutes, déclenchant une limitation agressive et potentiellement l\'avertissement "L\'iPhone doit refroidir". L\'application de chat ne plante pas, mais la génération ralentit à une vitesse d\'exploration.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'Raccourcis iOS, Siri et chargement latéral',
        content:
          '**L\'intégration iOS varie considérablement selon les applications.** Private LLM et Locally AI proposent tous deux des actions Shortcuts ; PocketPal AI et MLC Chat sont des applications de chat autonomes sans actions Shortcuts en 2026.',
        image: '/images/iphone-llm-apps-ios-integration-fr.svg',
        imageCaption: 'Intégration iOS par app LLM locale : Private LLM, Locally AI et Apple Intelligence prennent en charge Raccourcis (Private LLM ajoute Siri) ; PocketPal AI et MLC Chat sont des apps de chat autonomes sans actions Raccourcis en 2026.',
        items: [
          '**Private LLM** expose une action Shortcuts "Générer du texte avec Private LLM" et un déclencheur vocal "Dis Siri, demande à Private LLM [question]". La plus intégrée nativement à iOS des applications de chat payantes.',
          '**Locally AI** expose une action Shortcuts gratuitement et peut acheminer un raccourci vers le propre modèle on-device d\'Apple via son intégration Foundation Models — pas de déclencheur vocal, mais une automatisation Shortcuts sans payer.',
          '**PocketPal AI** est une application de chat autonome — pas d\'action Shortcuts, pas d\'intégration Siri. Vous ouvrez l\'application et chatez. Des plans pour le support Shortcuts sont suivis dans les issues GitHub mais non livrés.',
          '**MLC Chat** est une application de référence pour le projet MLC LLM — intégration iOS minimale et aucune mise à jour depuis fin 2024. Pas d\'action Shortcuts.',
          '**LLM Farm** est retiré de l\'App Store (août 2025) et, une fois compilé depuis les sources, n\'a pas d\'action Shortcuts.',
          '**Apple Intelligence** s\'intègre avec iOS Shortcuts via l\'action "Utiliser le modèle" (iOS 18.4+, étendue avec le framework Foundation Models en iOS 26). Cette action achemine une invite vers le modèle on-device, Private Cloud Compute, ou ChatGPT (configurable). La sortie on-device peut être enchaînée dans d\'autres actions Shortcuts.',
          '**Chargement latéral :** PocketPal AI, Private LLM, Locally AI et MLC Chat sont sur l\'App Store et ne nécessitent pas de chargement latéral ou de jailbreak ; Apple Intelligence est intégré à iOS. LLM Farm est l\'exception — son installation nécessite désormais de compiler depuis les sources dans Xcode. Les utilisateurs UE peuvent également installer les applications de l\'App Store via des marketplaces alternatives en vertu du DMA en 2026, mais l\'application elle-même est identique.',
        ],
        promptExamples: [
          {
            label: 'Raccourci Private LLM : résumer le texte sélectionné',
            text: '1. Action : "Obtenir le texte sélectionné" (entrée Share Sheet iOS).\n2. Action : "Générer du texte avec Private LLM" → Invite : "Résume le texte suivant en trois points clés : [Texte sélectionné]" → Modèle : Phi-4 Mini.\n3. Action : "Afficher le résultat" ou "Copier dans le presse-papiers".\nAjoutez à Share Sheet pour l\'exécuter sur tout texte sélectionné dans n\'importe quelle application, entièrement hors ligne.',
          },
          {
            label: 'Raccourci Apple Intelligence : réécrire sur un ton professionnel',
            text: '1. Action : "Obtenir le presse-papiers".\n2. Action : "Utiliser le modèle" → Modèle : On-device → Invite : "Réécris ceci sur un ton professionnel et concis : [Presse-papiers]".\n3. Action : "Copier dans le presse-papiers".\nAssignez à un widget de l\'écran de verrouillage pour réécrire en un tap tout ce que vous copiez.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour une utilisation mains libres en conduisant ou en cuisinant, le "Dis Siri, demande à Private LLM" de Private LLM est la seule option on-device fonctionnant sans toucher le téléphone. Apple Intelligence prend en charge la voix via Siri mais uniquement pour les tâches système (écriture, synthèse, actions d\'application) — il n\'expose pas le Q&A général comme les applications de chat.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes',
        items: [
          '**Installer un modèle plus grand que ce que la RAM de votre iPhone permet.** Un modèle 7B sur un iPhone 8 Go génère à ~3–5 tokens/sec — frustrant pour le chat. iOS tend également à arrêter l\'application quand d\'autres applications ont besoin de mémoire. Tenez-vous-en aux modèles recommandés pour votre niveau iPhone (3B–4B pour les appareils 8 Go, 1,7B pour les appareils 6 Go).',
          '**S\'attendre à une qualité d\'IA cloud avec des modèles on-device.** Phi-4 Mini (3,8B) est impressionnant pour sa taille mais pas au niveau de GPT-5.5. Utilisez-le pour le chat, la synthèse, la rédaction et les Q&A rapides — pas pour le raisonnement multi-étapes, la génération de code complexe ou l\'écriture créative nuancée.',
          '**Exécuter l\'inférence en plein soleil ou dans une voiture chaude.** La limitation thermique intervient en quelques minutes. La génération ralentit de 30–50 %, et vous pouvez voir l\'avertissement "L\'iPhone doit refroidir". Exécutez l\'inférence à température ambiante.',
          '**Laisser 3+ applications de chat installées avec des modèles de 3 Go dans chacune.** Vous consommerez ~10 Go de stockage en modèles dupliqués. Choisissez une application et un modèle ; désinstallez les autres jusqu\'à être sûr d\'en avoir besoin.',
          '**Supposer qu\'Apple Intelligence n\'a aucune interface de chat.** C\'était vrai jusqu\'à iOS 18, mais depuis iOS 26 des applications comme Locally AI peuvent placer le modèle on-device d\'Apple derrière une vraie fenêtre de chat via le framework Foundation Models. Les fonctionnalités système (Outils d\'écriture, Réponse intelligente) ne sont toujours pas une interface de chat en elles-mêmes.',
          '**Chercher LLM Farm sur l\'App Store.** Il a été retiré en août 2025. Le rechercher sur l\'App Store est une perte de temps ; utilisez PocketPal AI pour le même cas d\'usage gratuit/flexible, ou compilez LLM Farm depuis les sources dans Xcode si vous avez spécifiquement besoin de ses contrôles mirostat.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (application iOS open source).',
          'Private LLM — [fiche App Store](https://apps.apple.com) et documentation développeur.',
          'Locally AI — [fiche App Store](https://apps.apple.com) (équipe LM Studio, basée sur Apple MLX).',
          'MLC Chat / Projet MLC LLM — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (déploiement iOS accéléré par Metal).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (application iOS open source ; fiche App Store/TestFlight temporairement indisponible selon le README du projet).',
          'Apple Intelligence et modèles de fondation on-device — [Apple Machine Learning Research](https://machinelearning.apple.com) et documentation Apple Developer (framework Foundation Models, introduit avec iOS 26).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'L\'iPhone peut-il vraiment faire tourner un modèle 7B ?',
            a: 'Techniquement oui sur iPhone 15 Pro et les modèles plus récents (8 Go de RAM), mais pas à une vitesse utilisable. Un modèle 7B Q4 sur iPhone 16 Pro génère à ~3–5 tokens/sec — frustrant pour le chat. iOS tend également à arrêter l\'application quand d\'autres applications ont besoin de mémoire. Utilisez des modèles 3B–4B (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) pour le chat on-device quotidien. Pour une qualité 7B+, connectez-vous à distance à un Mac ou PC domestique exécutant Ollama.',
          },
          {
            q: 'L\'IA locale drainera-t-elle la batterie de mon iPhone ?',
            a: 'Oui — l\'inférence active consomme ~3–5 W et draine la batterie d\'environ 20–30 % par heure sur iPhone 16 Pro. Pour un usage occasionnel (quelques invites), l\'impact est faible. Pour un usage soutenu (longue conversation, plusieurs tâches de synthèse), gardez l\'iPhone branché. Le modèle lui-même restant en RAM sans inférence active a un impact négligeable sur la batterie.',
          },
          {
            q: 'Mon iPhone chauffera-t-il en utilisant l\'IA locale ?',
            a: 'Oui, après environ 10–15 minutes de génération continue. La surface de la puce atteint ~38 °C et iOS réduit les fréquences d\'horloge, faisant chuter les tokens/sec de 30–50 %. Pour minimiser cela : gardez l\'iPhone face vers le haut sur une surface dure (pas dans la main) lors des longues sessions, et évitez le soleil direct. Les courtes interactions (moins de 5 minutes) causent rarement une chaleur notable.',
          },
          {
            q: 'Puis-je utiliser Siri avec un modèle local ?',
            a: 'Oui, avec Private LLM (5,99 € en achat unique). En disant "Dis Siri, demande à Private LLM [question]", l\'invite est acheminée vers le modèle on-device et Siri lit la réponse — entièrement hors ligne. PocketPal AI, Locally AI et MLC Chat n\'ont pas d\'intégration vocale Siri en 2026, bien que Locally AI prenne en charge l\'automatisation Shortcuts. Apple Intelligence s\'intègre avec Siri mais uniquement pour les tâches système (écriture, synthèse, actions d\'application), pas pour le Q&A général.',
          },
          {
            q: 'Ces applications fonctionnent-elles sur iPhone SE ou les anciens iPhone ?',
            a: 'Limitée. L\'iPhone SE (4 Go de RAM) est en dessous du seuil pratique pour les LLM on-device en 2026. iPhone 14 / 15 (non Pro, 6 Go de RAM) peut faire tourner des modèles 1,7B (Qwen3 1.7B, SmolLM 2 1.7B) mais pas 3B+. iPhone 14 Pro et 15 Pro (6–8 Go de RAM) peuvent faire tourner des modèles 3B comme Phi-4 Mini à 8–12 tokens/sec. Pour les anciens iPhone, la meilleure solution est de se connecter à distance à un Mac ou PC domestique.',
          },
          {
            q: 'Puis-je synchroniser l\'historique de chat entre iPhone et Mac ?',
            a: 'Pas dans PocketPal AI, Private LLM ou MLC Chat — l\'historique de chat est stocké localement sur chaque appareil, sans synchronisation iCloud. Private LLM et Locally AI sont tous deux des achats/téléchargements universels fonctionnant nativement sur Mac aussi, mais l\'historique ne se synchronise toujours pas entre les copies iPhone et Mac. Pour un historique de chat entre appareils, l\'approche pratique est d\'exécuter Open WebUI sur un Mac domestique et d\'y accéder depuis les deux navigateurs — Open WebUI stocke l\'historique de chat côté serveur.',
          },
          {
            q: 'Ces applications sont-elles disponibles en dehors de l\'App Store ?',
            a: 'PocketPal AI est open source et peut être compilé depuis les sources via Xcode, mais la version App Store est la distribution standard. LLM Farm est l\'exception qui doit désormais être compilée depuis les sources — elle a été retirée de l\'App Store et de TestFlight en août 2025. Private LLM, Locally AI et MLC Chat sont uniquement sur l\'App Store. Les utilisateurs UE peuvent installer les applications de l\'App Store via des marketplaces alternatives en vertu du DMA en 2026, mais l\'application sous-jacente est identique.',
          },
          {
            q: 'L\'une d\'elles nécessite-t-elle un jailbreak ?',
            a: 'Non. PocketPal AI, Private LLM, Locally AI, MLC Chat et Apple Intelligence fonctionnent tous sur iOS standard. Compiler LLM Farm depuis les sources dans Xcode ne nécessite pas non plus de jailbreak — cela utilise le chargement latéral standard pour développeurs, pas un exploit de jailbreak. Le jailbreak n\'est requis ni recommandé pour aucune de ces applications.',
          },
          {
            q: 'Puis-je utiliser l\'IA locale dans iOS Shortcuts ?',
            a: 'Oui, via Private LLM (action "Générer du texte avec Private LLM"), Locally AI (action Shortcuts gratuite) ou Apple Intelligence (action "Utiliser le modèle", iOS 18.4+, étendue avec iOS 26). PocketPal AI et MLC Chat n\'ont pas d\'actions Shortcuts en 2026. Locally AI est la seule option gratuite offrant à la fois le support Shortcuts et l\'accès au propre modèle on-device d\'Apple.',
          },
          {
            q: 'Comment l\'IA locale se compare-t-elle à l\'application ChatGPT sur iPhone ?',
            a: 'Les modèles on-device (Phi-4 Mini, Llama 3.2 3B) restent sensiblement en retrait des modèles cloud de pointe pour le raisonnement complexe, les connaissances générales du monde et les tâches multimodales, mais sont plus rapides sur les requêtes simples (sans aller-retour réseau) et entièrement privés. Le compromis honnête : IA locale pour les tâches routinières et privées ; ChatGPT ou une autre application cloud pour les questions difficiles occasionnelles. De nombreux utilisateurs en 2026 ont les deux et choisissent selon la requête.',
          },
          {
            q: 'LLM Farm est-il encore sûr à utiliser maintenant qu\'il n\'est plus sur l\'App Store ?',
            a: 'Le code source est public sur GitHub et continue de recevoir de l\'activité d\'issues jusqu\'en 2026, il n\'est donc pas abandonné, mais une fois compilé depuis les sources et chargé latéralement, il ne passe plus par le processus de révision de l\'App Store d\'Apple. Si vous n\'avez pas spécifiquement besoin de ses contrôles d\'échantillonnage mirostat, PocketPal AI couvre le même cas d\'usage gratuit/flexible/open source tout en restant sur l\'App Store avec la révision standard d\'Apple.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleures applications LLM locales pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — article compagnon couvrant les équivalents Android (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[Comment utiliser l\'IA sur une tablette : iPad et Android (2026)](/fr/power-local-llm/run-ai-on-tablet-ipad-android) — guide de plateforme adjacent pour les lecteurs sur tablette.',
          '[Meilleurs modèles LLM mobiles en 2026 : Phi-4 Mini vs Gemma 3 vs SmolLM](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — article compagnon pour choisir le modèle à exécuter sur ces applications.',
          '[Meilleurs LLM locaux en 2026](/fr/local-llms/best-local-llms-2026) — panorama plus large des modèles couvrant tous les niveaux de matériel, pas seulement mobile.',
          '[Créer un assistant vocal local sur votre téléphone : Whisper + LLM local](/fr/power-local-llm/voice-assistant-local-mobile-offline) — étend ces applications avec une entrée/sortie vocale hors ligne.',
          '[Meilleure application IA locale pour PC d\'entrée de gamme](/fr/power-local-llm/best-local-ai-app-low-end-pc) — alternative bureau pour les utilisateurs souhaitant se connecter à distance à une machine domestique plus puissante.',
          '[Répertoire des logiciels LLM locaux 2026](/fr/power-local-llm/local-llm-software-directory-2026) — répertoire de tous les outils LLM locaux notables sur toutes les plateformes.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-09-01',
    last_full_refresh: '2026-09-01',
    next_refresh_due: '2027-03-01',
    theme: 'Mobile & Edge LLMs',
    title: '2026年最佳iPhone本地LLM应用（无需WiFi运行AI）',
    seoTitle: '2026年iPhone本地LLM应用推荐（离线运行AI）',
    intro:
      '2026年，五款iPhone应用可在设备端完整运行真实LLM：PocketPal AI、Private LLM、Locally AI（LM Studio出品）、MLC Chat，以及系统集成的Apple Intelligence。所有应用在模型下载完成后均可离线使用。本指南从iPhone 16 Pro和iPhone 17 Pro的tokens/秒、模型库、内存管理、隐私保护及iOS集成度五个维度进行评测排名，并说明LLM Farm为何退出榜单。',
    metaDescription:
      '2026年五款iPhone应用可在设备本地运行真实LLM。PocketPal AI、Private LLM、Locally AI、MLC Chat经iPhone 16 Pro和17 Pro实测，速度、隐私与模型库全面对比。',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-zh.webp',
    twitterDescription:
      'iPhone本地AI 2026：PocketPal AI（免费）、Private LLM（$4.99，Siri集成）、Locally AI（LM Studio，MLX）、MLC Chat（Metal但已停更）。下载后完全离线运行。',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
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
    ],
    leadAnswerBlock:
      '**2026年对大多数iPhone用户而言，推荐在App Store安装PocketPal AI并下载Phi-4 Mini（3.8B Q4_K_M，约2.7 GB）。** 免费、开源，支持iPhone 14 Pro及更新机型（6 GB以上内存的iPhone），在iPhone 16 Pro上每秒生成约10–15个token，适合日常对话使用。如需Siri和Shortcuts集成，Private LLM是最佳付费选择（$4.99买断，覆盖iPhone、iPad和Mac）。Locally AI——现由LM Studio团队开发——是基于Apple MLX的现代免费替代方案，支持Shortcuts并可调用苹果设备端基础模型。MLC Chat仍是Metal加速的参考应用，但自2024年底以来未再更新。LLM Farm已于2025年8月从App Store下架，现仅支持从源码编译安装。Apple Intelligence同样在设备端运行模型，但属系统集成型——与上述应用互补而非替代。',
    quickAnswerTop: {
      zh: {
        question: '2026年iPhone最佳本地LLM应用是什么？',
        answer:
          'PocketPal AI是大多数iPhone用户最佳的免费选择——开源、App Store安装，支持Hugging Face上任意GGUF模型，可在iPhone 16 Pro上以约10–15 tokens/秒运行Phi-4 Mini（3.8B）。Private LLM是最佳付费选项（$4.99买断，覆盖iPhone+iPad+Mac），提供iOS Shortcuts和Siri集成。Locally AI由LM Studio团队开发，是免费的Apple MLX应用，支持Shortcuts并可调用苹果设备端基础模型。MLC Chat采用Metal加速，但自2024年底以来已无更新。Apple Intelligence同样在设备端运行模型，但属系统集成型，与上述应用互补。',
        bullets: [
          'PocketPal AI — 免费、开源、App Store。大多数用户的最佳默认选择。支持所有GGUF模型。',
          'Private LLM — $4.99买断（覆盖iPhone+iPad+Mac）。最佳付费选项。iOS Shortcuts + Siri集成。',
          'Locally AI — 免费，LM Studio团队出品。Apple MLX引擎，支持Shortcuts，可访问Apple Foundation Models。',
          'MLC Chat — 免费、MLC LLM项目。Metal加速，但自2024年底以来应用未再更新（模型库偏旧）。',
          'Apple Intelligence — 系统集成，非独立应用。用于邮件、信息和备忘录的设备端3B模型。',
          'iPhone 16 Pro / 17 Pro推荐模型：Phi-4 Mini（3.8B Q4_K_M，约2.7 GB）——约10–15 tokens/秒。',
          '旧款iPhone（14 Pro）：Qwen3 1.7B或SmolLM 2 1.7B——适合6 GB内存，约15–20 tokens/秒。',
        ],
        updatedDate: '2026-09-01',
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
      { label: 'MLC Chat：苹果芯片专项优化', anchor: '#mlc-chat' },
      { label: 'LLM Farm：已下架但仍可配置', anchor: '#llm-farm' },
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
          '**PocketPal AI是最佳免费默认选择。** 开源、App Store安装，支持Hugging Face上任意GGUF模型。在iPhone 16 Pro上以约10–15 tokens/秒运行Phi-4 Mini。适合大多数用户的推荐起点。',
          '**Private LLM是最佳付费选项（$4.99买断，无需订阅）。** 一次购买即可覆盖iPhone、iPad和Mac，并支持家庭共享。精选模型库、iOS Shortcuts集成，支持"嘿Siri，问一下Private LLM"语音命令。',
          '**Locally AI是免费的MLX替代方案，现由LM Studio团队开发。** 基于Apple MLX运行Llama、Gemma、Qwen和DeepSeek模型，支持iOS Shortcuts，还能将苹果自家的设备端基础模型变为可对话的界面。',
          '**MLC Chat采用Metal加速，但已停更。** 其MLC LLM引擎在相同硬件上仍比基于llama.cpp的应用快约25–35%，但应用本身自2024年底以来未再更新，模型库停留在Phi-4 Mini和Gemma 3之前。',
          '**LLM Farm已于2025年8月从App Store下架。** 项目自己的README将其描述为"暂时不可用"。它仍保持开源，可通过Xcode从源码编译，对开发者而言依然是可配置性最强的选择（mirostat、对话模板）。',
          '**Apple Intelligence在设备端运行，但非独立应用。** 苹果约3B基础模型为邮件、信息、备忘录等系统功能提供支持。自iOS 26起，第三方应用可通过Foundation Models框架调用该模型，Shortcuts也可通过"使用模型"动作调用它。',
          '**iPhone 16 Pro / 17 Pro推荐模型：Phi-4 Mini（3.8B Q4_K_M，约2.7 GB）。** 8 GB以上内存档次的最佳性价比选择。6 GB内存旧款iPhone（iPhone 14 Pro）：推荐Qwen3 1.7B或SmolLM 2 1.7B。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**对比应用：** PocketPal AI、Private LLM、Locally AI（LM Studio出品）、MLC Chat、Apple Intelligence（系统）——以及已于2025年8月从App Store下架的LLM Farm。',
          '**测试设备：** iPhone 16 Pro（A18 Pro，8 GB内存）和iPhone 17 Pro（A19 Pro，12 GB内存）。',
          '**推理引擎：** llama.cpp（PocketPal AI、LLM Farm），Apple MLX（Locally AI），Metal加速的MLC LLM（MLC Chat），私有设备端运行时（Private LLM、Apple Intelligence）。',
          '**运行3B以上模型的最低iPhone要求：** iPhone 14 Pro（A16，6 GB内存）可运行1.7B；任意8 GB以上iPhone（15 Pro、16系列、16e、17系列）可运行3B–4B。',
          '**最佳免费应用：** PocketPal AI——App Store、开源、模型灵活性高。',
          '**最佳付费应用：** Private LLM——$4.99买断（覆盖iPhone+iPad+Mac），支持Shortcuts + Siri。',
          '**离线使用：** 所有五款应用在模型下载后均可完全离线运行，无需调用云端。',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '首先应该安装哪款iPhone应用？',
        content:
          '**对大多数用户：在App Store安装PocketPal AI，然后下载Phi-4 Mini（3.8B Q4_K_M）。** 这个组合支持iPhone 14 Pro及更新机型，完全免费，能够胜任日常对话、摘要和快速起草等任务。只有在有特定需求时，再考虑其他应用。',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-zh.webp',
        imageCaption: 'iPhone本地AI应用选择指南：PocketPal AI（免费默认）、Private LLM（Siri+快捷指令）、Locally AI（免费MLX，LM Studio团队出品）、MLC Chat（Metal快但已停更）、Apple Intelligence（iOS内置）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年大多数iPhone用户：安装PocketPal AI（免费，App Store）并下载Phi-4 Mini——可在6 GB以上内存的任何iPhone上处理日常对话、摘要和写作任务。',
          },
          {
            type: 'plain-terms',
            text: '2026年有五款应用可完全在iPhone上本地运行AI。PocketPal AI是最佳免费起点——安装后一次性下载2.7 GB的模型文件，即可获得一个无需WiFi、在地铁上也能使用的私密AI助手。Private LLM是希望Siri与本地模型对话的付费选择。Locally AI由LM Studio团队出品，是支持Shortcuts的免费现代替代方案。MLC Chat速度快但已不再更新。Apple Intelligence内置于iOS但非对话应用。PocketPal AI可满足90%的使用场景。',
          },
        ],
        decisionBlock: {
          title: '决策：选择哪款iPhone本地AI应用？',
          localIf: [
            '想要免费的离线AI对话助手 → PocketPal AI',
            '想让Siri与本地模型对话 → Private LLM',
            '想要支持Shortcuts且可访问Apple Foundation Models的免费MLX应用 → Locally AI',
            '愿意接受较旧的模型库以换取Metal最高速度 → MLC Chat',
            '只需要在邮件/信息/备忘录中获得写作辅助 → Apple Intelligence（系统内置）',
          ],
          cloudIf: [
            '需要70B以上模型质量（Llama 3.3 70B、GPT-5.5水平）→ 使用云端或远程连接家用机器',
            '需要访问GPT-5.5、Claude Opus或Gemini → 云端应用（本地无法运行这些模型）',
            '需要实时视觉或文字以外的多模态输出 → 云端（2026年设备端多模态能力有限）',
          ],
          quick: [
            '免费 + 满足90%场景：PocketPal AI',
            '付费 + iOS原生集成：Private LLM',
            '免费 + LM Studio生态：Locally AI',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '即使计划购买Private LLM，也建议先安装PocketPal AI。用PocketPal AI测试您的iPhone档次的设备端推理速度是否满足需求。如果满意，再判断Private LLM的iOS Shortcuts和Siri集成是否值$4.99。如果不满意，您就在付费前省下了这笔钱。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone应用对比表',
        content:
          '**五款应用在三个关键维度上有所差异：费用、模型灵活性和iOS集成度。** 速度差异存在，但均远小于这些应用与云端LLM之间的差距。',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-zh.webp',
        imageCaption: 'iPhone本地LLM应用对比：PocketPal AI（免费，~10–15 tok/s），Locally AI（免费，Apple MLX + Shortcuts），MLC Chat（免费，~14–20 tok/s，Metal加速，自2024年底已停更），Private LLM（$4.99一次付清，Siri+快捷指令），Apple Intelligence（系统集成）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI是最佳免费默认选择，Private LLM是最佳付费选项，Locally AI是LM Studio团队出品的免费MLX之选，MLC Chat速度快但已停更，Apple Intelligence为系统集成型。',
          },
          {
            type: 'plain-terms',
            text: '选择通常取决于三点：是否愿意为Siri集成付费（Private LLM）、是否想免费获得支持Shortcuts的LM Studio生态（Locally AI）、还是愿意接受较旧模型库以换取极致速度（MLC Chat）。其他情况下，PocketPal AI是默认之选。表格数据均以Q4_K_M量化为准——这是2026年移动端推理的标准配置。',
          },
        ],
        columns: ['应用', '链接', '价格', 'Tokens/sec (Phi-4 Mini, 16 Pro)', '隐私保护', '最适用于'],
        rows: [
          { '应用': 'PocketPal AI', '链接': '[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)', '价格': '免费（开源）', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', '隐私保护': '纯本地，无遥测', '最适用于': '大多数用户的免费默认选择' },
          { '应用': 'Private LLM', '链接': '[privatellm.app](https://privatellm.app)', '价格': '$4.99买断', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–14', '隐私保护': '纯本地，可选匿名统计', '最适用于': 'iOS Shortcuts + Siri集成' },
          { '应用': 'Locally AI', '链接': '[lmstudio.ai/locally](https://lmstudio.ai/locally)', '价格': '免费（LM Studio团队）', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A——MLX模型库（无Phi-4）', '隐私保护': '纯本地，不收集数据', '最适用于': 'MLX + Shortcuts，LM Studio联动' },
          { '应用': 'MLC Chat', '链接': '[llm.mlc.ai](https://llm.mlc.ai)', '价格': '免费（开源）', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A——模型库早于Phi-4', '隐私保护': '纯本地，无遥测', '最适用于': 'Metal速度，旧款模型' },
          { '应用': 'LLM Farm', '链接': '[github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)', '价格': '免费（仅源码）', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', '隐私保护': '纯本地，无遥测', '最适用于': '高级用户（已从App Store下架）' },
          { '应用': 'Apple Intelligence', '链接': '[apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)', '价格': '免费（iOS内置）', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A（系统功能）', '隐私保护': '本地 + 可选Private Cloud Compute', '最适用于': '邮件、信息、备忘录辅助' },
        ],
        note:
          '**关于Apple神经引擎（ANE）、Metal与MLX的说明：** PocketPal AI和LLM Farm使用带有Metal Performance Shaders的llama.cpp进行推理，在GPU上运行。MLC Chat使用经过深度Metal优化的MLC LLM，对其支持的模型而言在相同硬件上tokens/秒高出25–35%。Locally AI使用苹果自家的开源数组框架Apple MLX，在Apple Silicon上实现相近的GPU效率。Apple Intelligence专门为系统约3B模型使用ANE，能效更高但灵活性低于基于Metal的推理。自iOS 26起，第三方应用可通过Foundation Models框架调用该系统模型——Locally AI正是这样做的——但自定义GGUF/MLX模型仍无法直接调用ANE。',
        callouts: [
          {
            type: 'tip',
            text: 'Tokens/秒数据基于Q4_K_M量化（2026年移动端推理标准）及无其他高负载应用运行的iPhone空闲状态。后台应用会使吞吐量下降10–30%。由于A19 Pro的改进，iPhone 17 Pro的tokens/秒比iPhone 16 Pro高约20–30%。',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI：免费开源首选',
        content:
          '**PocketPal AI是2026年大多数iPhone用户的推荐起点。** 免费、开源（GitHub：a-ghorbani/pocketpal-ai），在App Store上架，支持Hugging Face上任意GGUF模型。应用底层使用llama.cpp，并针对Apple Silicon进行了优化。',
        items: [
          '**是什么：** 一款使用llama.cpp在本地运行GGUF模型的iOS应用。无需订阅、无遥测、无需账号。',
          '**安装：** App Store → 搜索"PocketPal AI"。免费下载。',
          '**添加模型：** 在应用内点击"模型"→"从Hugging Face添加"→搜索（如"phi-4-mini-instruct-Q4_K_M"）→点击下载。模型存储在应用本地空间（Phi-4 Mini Q4约2.7 GB）。',
          '**生成速度（iPhone 16 Pro）：** Phi-4 Mini约10–15 tok/秒，Llama 3.2 3B约12–18 tok/秒，Gemma 3 4B约7–10 tok/秒，Qwen3 1.7B约18–24 tok/秒。',
          '**最适用于：** 希望使用免费、App Store安装、无需账号、支持任意社区GGUF模型的对话应用的用户。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'PocketPal AI的模型选择器提供"推荐"筛选项，显示经验证适合您设备内存的模型。对于iPhone 16 Pro（8 GB内存），选择器推荐最高约4B参数的Q4_K_M版本。请信任此筛选器——安装过大的模型会导致iOS在生成回复途中强制关闭应用。',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM：付费版iOS深度集成',
        content:
          '**Private LLM是2026年iPhone上最强的付费选择（$4.99买断，无需订阅）。** 仅在App Store上架，内置精选优化模型库。其核心差异化优势在于iOS集成：Shortcuts动作和"嘿Siri，问一下Private LLM"语音命令。',
        items: [
          '**是什么：** 一款带有精选模型库和深度iOS集成的付费iOS应用。使用针对Apple Silicon优化的私有设备端运行时。',
          '**安装：** App Store → 搜索"Private LLM"。$4.99买断（无订阅）。',
          '**精选模型库：** 约30款预测试并为iPhone优化的模型，包括Llama 3.2 3B、Phi-4 Mini、Mistral Small Instruct及若干非审查版本。灵活性低于PocketPal AI，但不会出现安装后崩溃的问题。',
          '**iOS Shortcuts：** Private LLM提供"使用Private LLM生成文本"动作，可集成到Shortcuts自动化流程中。可通过主屏幕按钮或NFC标签触发本地AI。',
          '**Siri集成：** "嘿Siri，问一下Private LLM [您的问题]"会将提示词发送至设备端模型并朗读回答，全程无需联网。延迟高于聊天界面（音频开始前约3–5秒）。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Private LLM是一次通用购买：$4.99的一次性价格即可覆盖iPhone、iPad和Mac，苹果家庭共享还能扩展到最多六位家庭成员。无订阅、无内购——标价即总花费。',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI：LM Studio出品的免费MLX应用',
        content:
          '**Locally AI是一款免费、注重隐私的对话应用，现由LM Studio团队开发，基于苹果自家的MLX框架而非llama.cpp构建。** 它是这一类别中最新的重量级选手，也是本文中唯一将苹果设备端基础模型以对话界面呈现的应用。',
        items: [
          '**是什么：** 一款使用Apple MLX进行推理的iOS/iPadOS/macOS应用，由桌面版LM Studio背后的团队开发。',
          '**安装：** App Store → 搜索"Locally AI"。免费，无需账号，100%离线。',
          '**模型库：** Llama 3.2、Gemma 2/3/4、Qwen 3、DeepSeek、LFM 2.5、Bonsai、Ministral 3以及Apple Foundation Models——比MLC Chat更广泛、更新的目录。',
          '**iOS Shortcuts：** 提供快捷指令动作，免费实现与Private LLM同级别的自动化支持。',
          '**LM Link：** 一项可选功能，通过端到端加密链接连接运行在Mac上的LM Studio，让iPhone应用在需要时切换到家用机器上更大的模型。',
          '**系统要求：** iOS/iPadOS 18.1+（Apple Silicon级别的效率优势在iPhone 15 Pro及更新机型上最为明显）。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI是本文中唯一能将苹果自家设备端基础模型置于普通对话窗口之后的应用——如果您想体验Apple Intelligence的模型能做什么，而不必在写作工具菜单中反复摸索，这很有用。若需第三方GGUF的灵活性，PocketPal AI仍拥有更大的模型库。',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat：苹果芯片专项优化',
        content:
          '**MLC Chat（来自MLC LLM项目）仍是Metal加速的参考应用，但应用本身自2024年底以来未再更新。** 免费、开源，运行由MLC LLM工具链编译的模型，而非标准GGUF格式——这一编译要求，也正是其模型库未能跟上PocketPal AI和Locally AI步伐的原因。',
        items: [
          '**是什么：** MLC LLM项目的iOS参考应用，展示MLC LLM在Apple Silicon上的Metal加速推理能力。',
          '**安装：** App Store → 搜索"MLC Chat"。免费。',
          '**速度优势（架构层面）：** 对于双方均支持的模型，MLC LLM的Metal加速引擎在同款iPhone上比基于llama.cpp的应用快约25–35%——但应用自身的模型列表早于Phi-4 Mini、Gemma 3等2026年的主流推荐，若不自行编译，这一优势在当下已无法验证。',
          '**模型库：** 仅限MLC LLM项目在应用停止更新前编译的模型——Llama 3.2 3B、RedPajama等2024年时期的模型。并非所有Hugging Face GGUF均可使用，App Store版本中也不包含任何当代小型模型。',
          '**最适用于：** 已投入MLC LLM工具链、愿意自行编译模型的开发者，或特别需要2025年前已内置模型的用户。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '由于MLC Chat的App Store版本自2024年底以来未再更新，不要指望在其模型选择器中看到Phi-4 Mini、Qwen3或Gemma 3。如果您想在今天使用具备Metal级GPU效率的当代模型，Locally AI（Apple MLX）或PocketPal AI（使用Metal Performance Shaders的llama.cpp）是目前仍在积极维护的替代方案。',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm：已下架但仍可配置',
        content:
          '**LLM Farm已于2025年8月从App Store和TestFlight下架——项目自己的GitHub README将其描述为在两个平台上均"暂时不可用"。** 该项目（GitHub：guinmoon/LLMFarm）仍保持开源，2026年间也有GitHub issue活跃，但新用户已无法从App Store安装，必须通过Xcode从源码编译。',
        items: [
          '**是什么：** 开发者@guinmoon的iOS应用，支持大量配置选项运行GGUF模型，此前通过App Store分发。',
          '**当前可用性：** 截至本次更新，无法从App Store或TestFlight安装。源码保持公开且可编译。',
          '**从源码编译：** 克隆代码库，在Xcode中打开，使用免费或付费的Apple开发者账号编译到设备——这是没有App Store上架的开源iOS应用的标准侧载流程。',
          '**开放的配置项（编译后）：** 温度、top-p、top-k、mirostat采样、重复惩罚、按模型设置系统提示词、对话模板选择、上下文窗口长度。',
          '**最适用于：** 熟悉在Xcode中从源码编译应用、且特别需要mirostat采样控制的开发者。其他用户应改用PocketPal AI或Locally AI——两者均可完全通过App Store安装，且免费。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '不要指望能找到有效的LLM Farm App Store链接——在其他地方看到的此类链接应视为已过时。从源码编译需要Xcode及基本的iOS代码签名知识。如果这超出了您愿意投入的精力，PocketPal AI可在不离开App Store的情况下覆盖同样"灵活的免费对话应用"这一使用场景。',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence：系统级内置AI',
        content:
          '**Apple Intelligence在iPhone 15 Pro及更新机型（A17 Pro芯片，最低8 GB内存）上以设备端方式运行苹果自家约3B基础模型。** 默认情况下它不是一款对话应用——而是为邮件（智能回复）、信息（写作工具）、备忘录（摘要）和通知摘要提供系统级功能。自iOS 26起，苹果的Foundation Models框架允许第三方开发者直接调用该设备端模型，Locally AI等应用已将其打造为真正的对话界面。',
        items: [
          '**位置：** 内置于iOS 18+（Foundation Models框架自iOS 26起加入）。前往设置 → Apple Intelligence与Siri启用。',
          '**硬件要求：** iPhone 15 Pro / 15 Pro Max、iPhone 16系列、iPhone 16e、iPhone 17系列。旧款iPhone（14及以下）不支持Apple Intelligence。',
          '**设备端功能：** 任意文本框内的写作工具（改写、摘要、校对），邮件和信息中的智能回复，通知摘要，Genmoji生成。',
          '**Foundation Models框架（iOS 26+）：** 一套原生Swift API，让开发者只需几行代码即可直接访问同一设备端模型——Locally AI正是借此将其作为对话选项，Shortcuts的"使用模型"动作也能借此将提示词路由至该模型、Private Cloud Compute或ChatGPT。',
          '**Private Cloud Compute：** 超出设备端模型能力的任务会转至Private Cloud Compute（PCC）——苹果运营的服务器运行更大模型，并以密码学手段保证不留存用户数据。PCC为可选项，可关闭。',
          '**与对话应用的关系：** Apple Intelligence是补充而非替代。其系统功能处理iOS应用内的文本改写和摘要；PocketPal AI、Private LLM、Locally AI和MLC Chat提供专用对话界面以回答任意问题——而Locally AI如今也能为苹果自家模型提供同类界面。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '如果您只需要Apple Intelligence（改写邮件、汇总通知），则无需单独安装对话应用。如果您想向模型提问，如"用简单语言解释量子隧穿"或"为X项目起草方案"，请安装一款对话应用——可以是PocketPal AI这样的专用应用，也可以是能将苹果自家设备端模型置于对话窗口之后的Locally AI。',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: '按iPhone档次推荐模型',
        content:
          '**iPhone内存决定模型规模上限，与芯片代数无关。** 6 GB内存iPhone（14 Pro、15）可稳定运行1.7B模型；8 GB以上内存iPhone（15 Pro、16系列、16e、17系列）可稳定运行3B–4B模型，缓慢运行7B模型。如需了解全硬件档次（不限移动端）的更广泛模型选择，请参阅[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026)。',
        image: '/images/iphone-llm-apps-models-tier-zh.svg',
        imageCaption: '按iPhone内存推荐LLM模型：8GB以上iPhone（15 Pro至17 Pro）推荐Phi-4 Mini 3.8B Q4_K_M（8–20 tok/s）；6GB iPhone（14 Pro及非Pro型号）推荐Qwen3 1.7B Q4_K_M（12–20 tok/s）；iPhone SE（4GB）不推荐。',
        columns: ['iPhone档次（年份，内存）', '推荐型号', '下载大小', '预期速度'],
        rows: [
          { 'iPhone档次（年份，内存）': 'iPhone 17 Pro（2025，12 GB）', '推荐型号': 'Phi-4 Mini 或 Llama 3.2 3B（Q4_K_M）', '下载大小': '约2.5–2.7 GB', '预期速度': '约13–20 tok/秒' },
          { 'iPhone档次（年份，内存）': 'iPhone 16 Pro / 16 Pro Max / 16e（2024–2025，8 GB）', '推荐型号': 'Phi-4 Mini（3.8B Q4_K_M）', '下载大小': '约2.7 GB', '预期速度': '约10–15 tok/秒' },
          { 'iPhone档次（年份，内存）': 'iPhone 15 Pro / Pro Max（2023，8 GB）', '推荐型号': 'Phi-4 Mini（3.8B Q4_K_M）', '下载大小': '约2.7 GB', '预期速度': '约8–12 tok/秒' },
          { 'iPhone档次（年份，内存）': 'iPhone 14 Pro / Pro Max（2022，6 GB）', '推荐型号': 'Qwen3 1.7B 或 SmolLM 2 1.7B（Q4_K_M）', '下载大小': '约1.1 GB', '预期速度': '约15–20 tok/秒' },
          { 'iPhone档次（年份，内存）': 'iPhone 14 / 15 / 16（非Pro，6 GB）', '推荐型号': 'Qwen3 1.7B 或 SmolLM 2 1.7B（Q4_K_M）', '下载大小': '约1.1 GB', '预期速度': '约12–18 tok/秒' },
          { 'iPhone档次（年份，内存）': 'iPhone SE / 旧款（4 GB）', '推荐型号': '不建议用于设备端LLM', '下载大小': '—', '预期速度': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于旧款6 GB内存iPhone，Qwen3 1.7B是2026年模型规模与质量的最佳平衡点。SmolLM 2 1.7B（HuggingFace）性能相近。两者均可生成连贯的短回复（1–3段），但难以处理多步推理任务。请勿在6 GB内存iPhone上安装Phi-4 Mini——名义上可以装入，但一旦有其他应用占用内存，iOS就会强制关闭对话应用。',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: '电池消耗与过热问题',
        content:
          '**iPhone上的设备端LLM推理对CPU/GPU消耗较高，会产生热量。** 主动推理（模型生成token）消耗约3–5 W；持续生成会触发芯片降频，在iPhone 16 Pro上每小时消耗约20–30%电量。',
        image: '/images/iphone-llm-apps-battery-thermal-zh.svg',
        imageCaption: 'iPhone本地LLM温度指南：推理运行时功耗3–5W，iPhone 16 Pro每小时耗电约20–30%；10–15分钟后热降频使速度下降30–50%——屏幕朝上放在硬表面有助于散热。',
        items: [
          '**电池消耗（主动对话）：** iPhone 16 Pro运行Phi-4 Mini时每小时约消耗20–30%。iPhone 17 Pro因峰值功率更高而消耗略快，但因更快完成任务而有所抵消。',
          '**持续生成约10–15分钟后触发热节流。** 芯片表面温度达到约38°C时，iOS降低时钟频率，tokens/秒下降30–50%。让手机冷却后可恢复正常速度。',
          '**缓解措施：** 长时间推理时将iPhone屏幕朝上放在硬质平面上（不要握在手中或放入口袋），以利散热。被动散热保护壳有帮助，但对短时交互通常不必要。',
          '**后台占用：** 生成后将对话应用保留在后台，内存仍被占用但无推理运行——电池影响可忽略不计。完全关闭应用可释放约3 GB内存。',
          '**推理时MagSafe充电：** iPhone 17 Pro和16 Pro（均已改善热设计）可以接受。iPhone 15 Pro同时充电和推理可能更快触达热极限——建议推理后再充电。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '请勿在阳光直射或高温车内运行设备端LLM推理。环境热量与推理负载叠加会在数分钟内将芯片推至热极限，触发激进降频，甚至出现"iPhone需要冷却"提示。对话应用不会崩溃，但生成速度会极度缓慢。',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS快捷指令、Siri与侧载',
        content:
          '**各应用的iOS集成深度差异显著。** Private LLM和Locally AI均提供快捷指令动作；PocketPal AI和MLC Chat截至2026年均为独立对话应用，不提供快捷指令动作。',
        image: '/images/iphone-llm-apps-ios-integration-zh.svg',
        imageCaption: '各本地LLM应用的iOS集成功能：Private LLM、Locally AI和Apple Intelligence支持快捷指令（Private LLM还支持Siri）；PocketPal AI和MLC Chat截至2026年无快捷指令功能，均为独立聊天应用。',
        items: [
          '**Private LLM** 提供"使用Private LLM生成文本"快捷指令动作和"嘿Siri，问一下Private LLM [问题]"语音触发。付费对话应用中iOS原生集成最深。',
          '**Locally AI** 免费提供快捷指令动作，并可通过其Foundation Models集成将快捷指令路由至苹果自家设备端模型——没有语音触发，但无需付费即可获得快捷指令自动化。',
          '**PocketPal AI** 是独立对话应用——无快捷指令动作，无Siri集成。打开应用直接对话。快捷指令支持已在GitHub Issues中跟踪，但尚未发布。',
          '**MLC Chat** 是MLC LLM项目的参考应用——iOS集成极少，自2024年底以来也无更新。无快捷指令动作。',
          '**LLM Farm** 已从App Store下架（2025年8月），从源码编译后也没有快捷指令动作。',
          '**Apple Intelligence** 通过"使用模型"动作（iOS 18.4+，iOS 26起与Foundation Models框架一同扩展）与iOS快捷指令集成，可将提示词路由至设备端模型、Private Cloud Compute或ChatGPT（可配置）。设备端输出可链接至其他快捷指令动作。',
          '**侧载：** PocketPal AI、Private LLM、Locally AI和MLC Chat均在App Store上架，无需侧载或越狱；Apple Intelligence内置于iOS。LLM Farm是例外——其安装现已需要在Xcode中从源码编译。根据DMA，欧盟用户在2026年也可通过替代应用市场安装App Store应用，但应用本身相同。',
        ],
        promptExamples: [
          {
            label: 'Private LLM快捷指令：摘要所选文本',
            text: '1. 动作："获取所选文本"（iOS分享菜单输入）。\n2. 动作："使用Private LLM生成文本" → 提示词："将以下文本总结为三条要点：[所选文本]" → 模型：Phi-4 Mini。\n3. 动作："显示结果"或"复制到剪贴板"。\n添加到分享菜单，即可在任意应用中对选中文本一键执行，完全离线。',
          },
          {
            label: 'Apple Intelligence快捷指令：改写为专业语气',
            text: '1. 动作："获取剪贴板"。\n2. 动作："使用模型" → 模型：设备端 → 提示词："将以下内容改写为专业简洁的语气：[剪贴板]"。\n3. 动作："复制到剪贴板"。\n添加到锁屏小组件，一键改写任意复制内容。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '如需在驾车或烹饪时免提使用，Private LLM的"嘿Siri，问一下Private LLM"是唯一无需触碰手机即可使用的设备端选项。Apple Intelligence通过Siri支持语音，但仅限系统任务（写作、摘要、应用操作）——不像对话应用那样支持通用问答。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**安装超过iPhone内存承载能力的模型。** 8 GB iPhone上运行7B模型，生成速度仅约3–5 tokens/秒，且其他应用需要内存时iOS会强制关闭该应用。请遵循对应iPhone档次的推荐模型（8 GB设备用3B–4B，6 GB设备用1.7B）。',
          '**期望设备端模型达到云端AI的质量。** Phi-4 Mini（3.8B）对于其体积已相当出色，但无法达到GPT-5.5的水平。适合用于对话、摘要、起草和快速问答——不适合多步推理、复杂代码生成或细腻的创意写作。',
          '**在阳光直射或高温车内运行推理。** 数分钟内即触发热节流，生成速度下降30–50%，可能出现"iPhone需要冷却"提示。请在室温环境下运行推理。',
          '**同时安装3款以上对话应用，每个装着3 GB模型。** 这会消耗约10 GB存储空间用于重复模型。先选定一款应用和一个模型，其余的在确认需要前先卸载。',
          '**误以为Apple Intelligence完全没有对话界面。** 这在iOS 18之前是事实，但自iOS 26起，Locally AI等应用已可通过Foundation Models框架为苹果设备端模型提供真正的对话窗口。系统功能本身（写作工具、智能回复）仍不是对话界面。',
          '**在App Store上寻找LLM Farm。** 它已于2025年8月下架。在App Store搜索只会浪费时间；同样的免费灵活场景请改用PocketPal AI，或若确实需要mirostat控制，可在Xcode中从源码编译LLM Farm。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考资料',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)（开源iOS应用）。',
          'Private LLM — [App Store页面](https://apps.apple.com)及开发者文档。',
          'Locally AI — [App Store页面](https://apps.apple.com)（LM Studio团队出品，基于Apple MLX）。',
          'MLC Chat / MLC LLM项目 — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html)（iOS Metal加速部署）。',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)（开源iOS应用；据项目README，App Store/TestFlight页面暂时不可用）。',
          'Apple Intelligence及设备端基础模型 — [Apple机器学习研究](https://machinelearning.apple.com)及Apple开发者文档（Foundation Models框架，iOS 26引入）。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'iPhone真的能运行7B模型吗？',
            a: '技术上可以，iPhone 15 Pro及更新机型（8 GB内存）可以运行，但速度不够实用。iPhone 16 Pro上，7B Q4模型生成速度仅约3–5 tokens/秒——对话体验很差。当其他应用需要内存时，iOS也容易强制关闭应用。日常设备端对话请使用3B–4B模型（Phi-4 Mini、Llama 3.2 3B、Gemma 3 4B）。如需7B以上的质量，可远程连接运行Ollama的家用Mac或PC。',
          },
          {
            q: '本地AI会消耗iPhone电量吗？',
            a: '会——主动推理消耗约3–5 W，iPhone 16 Pro每小时消耗约20–30%电量。偶尔使用（几条提示词）影响较小。持续使用（长对话、多次摘要任务）时请保持充电。模型驻留内存但不进行推理时，电池影响可忽略不计。',
          },
          {
            q: '使用本地AI会导致iPhone发热吗？',
            a: '会，持续生成约10–15分钟后会明显发热。芯片表面温度达约38°C时，iOS降低时钟频率，tokens/秒下降30–50%。建议：长时间使用时将iPhone屏幕朝上放在硬质平面上（不要握在手中），避免阳光直射。短时交互（5分钟以内）通常不会有明显发热。',
          },
          {
            q: '可以用Siri控制本地模型吗？',
            a: '可以，通过Private LLM（$4.99买断）实现。说"嘿Siri，问一下Private LLM [问题]"，提示词会发送至设备端模型，Siri朗读回答——全程离线。PocketPal AI、Locally AI和MLC Chat截至2026年不支持Siri语音集成，不过Locally AI支持快捷指令自动化。Apple Intelligence与Siri集成，但仅限系统任务（写作、摘要、应用操作），不支持通用问答。',
          },
          {
            q: '这些应用能在iPhone SE或旧款iPhone上使用吗？',
            a: '有限制。iPhone SE（4 GB内存）低于2026年设备端LLM的实用门槛。iPhone 14 / 15（非Pro，6 GB内存）可运行1.7B模型（Qwen3 1.7B、SmolLM 2 1.7B），但不能运行3B以上模型。iPhone 14 Pro和15 Pro（6–8 GB内存）可以约8–12 tokens/秒运行Phi-4 Mini等3B模型。旧款iPhone更好的选择是远程连接家用Mac或PC。',
          },
          {
            q: '能在iPhone和Mac之间同步对话记录吗？',
            a: 'PocketPal AI、Private LLM和MLC Chat均不支持同步——对话记录存储在各设备本地，没有iCloud同步。Private LLM和Locally AI都是通用购买/下载，也能原生在Mac上运行，但iPhone版和Mac版之间的记录仍不会同步。跨设备共享对话记录的实用方案是在家用Mac上运行Open WebUI，从iPhone和Mac的浏览器访问——Open WebUI将对话记录存储在服务器端。',
          },
          {
            q: '这些应用能在App Store以外获取吗？',
            a: 'PocketPal AI是开源项目，可通过Xcode从源码编译，但App Store版本是标准发行渠道。LLM Farm是例外，现已必须从源码编译——它已于2025年8月从App Store和TestFlight下架。Private LLM、Locally AI和MLC Chat仅在App Store上架。根据DMA，欧盟用户在2026年可通过替代应用市场安装App Store应用，但内容相同。',
          },
          {
            q: '有哪款应用需要越狱？',
            a: '不需要。PocketPal AI、Private LLM、Locally AI、MLC Chat和Apple Intelligence均可在标准iOS上运行。在Xcode中编译LLM Farm同样不需要越狱——它使用的是面向开发者的标准侧载流程，而非越狱漏洞。这些应用均不需要、也不建议越狱。',
          },
          {
            q: '能在iOS快捷指令中使用本地AI吗？',
            a: '可以，通过Private LLM（"使用Private LLM生成文本"动作）、Locally AI（免费快捷指令动作）或Apple Intelligence（"使用模型"动作，iOS 18.4+，iOS 26起扩展）实现。PocketPal AI和MLC Chat截至2026年不支持快捷指令动作。Locally AI是唯一同时免费提供快捷指令支持和苹果设备端模型访问的选项。',
          },
          {
            q: '本地AI与iPhone上的ChatGPT应用相比如何？',
            a: '设备端模型（Phi-4 Mini、Llama 3.2 3B）在复杂推理、广博世界知识和多模态任务上仍明显逊于前沿云端模型，但在简单问题上更快（无网络延迟），且完全私密。客观来说：本地AI适合日常和私密任务；偶尔遇到高难度问题时可用ChatGPT等云端应用。2026年很多用户两者都装着，按需选择。',
          },
          {
            q: 'LLM Farm不在App Store上架后还安全吗？',
            a: '其源码在GitHub上公开，2026年间仍有issue活动，因此并未被放弃，但从源码编译并侧载后，就不再经过苹果的App Store审核流程。如果不是特别需要mirostat采样控制，PocketPal AI能覆盖同样免费、灵活、开源的使用场景，并保留在经过苹果标准审核的App Store中。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[2026年Android最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — Android同类应用对比（Maid、Layla、MLC Chat、Termux + Ollama）。',
          '[平板上运行AI：iPad与Android（2026）](/zh/power-local-llm/run-ai-on-tablet-ipad-android) — 平板用户平台指南。',
          '[2026年最佳移动端LLM模型：Phi-4 Mini vs Gemma 3 vs SmolLM](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 搭配本文选择模型的参考文章。',
          '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) — 涵盖全硬件档次（不限移动端）的综合模型指南。',
          '[在手机上搭建本地语音助手：Whisper + 本地LLM](/zh/power-local-llm/voice-assistant-local-mobile-offline) — 为上述应用扩展离线语音输入/输出。',
          '[低配PC最佳本地AI应用](/zh/power-local-llm/best-local-ai-app-low-end-pc) — 适合希望远程连接家用高性能机器的用户的桌面端替代方案。',
          '[2026年本地LLM软件目录](/zh/power-local-llm/local-llm-software-directory-2026) — 全平台值得关注的本地LLM工具汇总。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-09-01',
    last_full_refresh: '2026-09-01',
    next_refresh_due: '2027-03-01',
    theme: 'Mobile & Edge LLMs',
    title: 'Las mejores apps de LLM local para iPhone en 2026 (ejecuta IA sin WiFi)',
    seoTitle: 'Mejores apps LLM local iPhone 2026',
    intro:
      'Cinco apps para iPhone ejecutan LLMs reales completamente en el dispositivo en 2026: PocketPal AI, Private LLM, Locally AI (de LM Studio), MLC Chat y Apple Intelligence (integrado en el sistema). Todas funcionan sin WiFi una vez descargado el modelo. Esta guía las clasifica por tokens por segundo en iPhone 16 Pro e iPhone 17 Pro, biblioteca de modelos, gestión de RAM, privacidad e integración con iOS — y explica por qué LLM Farm salió de la clasificación.',
    metaDescription:
      'Cinco apps de iPhone que ejecutan LLMs en el dispositivo en 2026: PocketPal AI, Private LLM, Locally AI y MLC Chat en iPhone 16/17 Pro. Velocidad y privacidad.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-es.webp',
    twitterDescription:
      'IA local en iPhone en 2026: PocketPal AI (gratis), Private LLM (5,99 € de pago único, Siri), Locally AI (LM Studio, MLX), MLC Chat (Metal pero sin actualizar). Todas funcionan sin conexión tras descargar el modelo.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
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
    ],
    leadAnswerBlock:
      '**Para la mayoría de usuarios de iPhone en 2026, instala PocketPal AI desde el App Store y descarga Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Es gratuito, de código abierto, funciona en iPhone 14 Pro y modelos más recientes (cualquier iPhone con 6 GB+ de RAM) y genera ~10–15 tokens/seg en iPhone 16 Pro para el uso diario. Para integración con Siri y Shortcuts, Private LLM es la opción de pago más sólida (5,99 € de pago único, cubre iPhone, iPad y Mac). Locally AI —ahora desarrollada por el equipo de LM Studio— es la alternativa gratuita moderna basada en Apple MLX, con soporte de Shortcuts y acceso al modelo de base en dispositivo de Apple. MLC Chat sigue siendo la app de referencia para Metal, pero no se actualiza desde finales de 2024. LLM Farm fue retirada del App Store en agosto de 2025 y ahora solo se instala compilando el código fuente. Apple Intelligence también ejecuta modelos en el dispositivo, pero está integrado en el sistema y no es una app de chat; complementa a estas apps en lugar de competir con ellas.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor app de LLM local para iPhone en 2026?',
        answer:
          'PocketPal AI es la mejor opción gratuita para la mayoría de usuarios de iPhone: de código abierto, instalación desde el App Store, compatible con cualquier modelo GGUF de Hugging Face y ejecuta Phi-4 Mini (3.8B) a ~10–15 tokens/seg en iPhone 16 Pro. Private LLM es la opción de pago más sólida (5,99 € de pago único, iPhone + iPad + Mac) con integración de iOS Shortcuts y Siri. Locally AI, desarrollada por el equipo de LM Studio, es la opción gratuita con Apple MLX, soporte de Shortcuts y acceso al modelo de base en dispositivo de Apple. MLC Chat tiene aceleración Metal pero está inactiva desde finales de 2024. Apple Intelligence también ejecuta modelos en el dispositivo, pero está integrado en el sistema y complementa estas apps.',
        bullets: [
          'PocketPal AI — gratuita, código abierto, App Store. La mejor opción por defecto para la mayoría de usuarios. Compatible con cualquier modelo GGUF.',
          'Private LLM — 5,99 € de pago único (iPhone + iPad + Mac). La mejor opción de pago. iOS Shortcuts + integración con Siri.',
          'Locally AI — gratuita, del equipo de LM Studio. Motor Apple MLX, soporte de Shortcuts, acceso a Apple Foundation Models.',
          'MLC Chat — gratuita, proyecto MLC LLM. Con aceleración Metal, pero sin actualizaciones de la app desde finales de 2024 (biblioteca de modelos desactualizada).',
          'Apple Intelligence — integrada en el sistema, no es una app independiente. Modelo 3B en dispositivo utilizado por Mail, Mensajes y Notas.',
          'Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — funciona a ~10–15 tokens/seg.',
          'iPhones más antiguos (14 Pro): Qwen3 1.7B o SmolLM 2 1.7B — cabe en 6 GB de RAM y genera ~15–20 tokens/seg.',
        ],
        updatedDate: '2026-09-01',
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
      { label: 'MLC Chat: optimización para Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm: retirada pero aún configurable', anchor: '#llm-farm' },
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
          '**PocketPal AI es la mejor opción gratuita por defecto.** Código abierto, instalación desde el App Store, compatible con cualquier modelo GGUF de Hugging Face. Ejecuta Phi-4 Mini a ~10–15 tokens/seg en iPhone 16 Pro. Punto de partida recomendado para la mayoría de usuarios de iPhone.',
          '**Private LLM es la mejor opción de pago (5,99 € de pago único, sin suscripción).** Una sola compra cubre iPhone, iPad y Mac con Compartir en familia. Biblioteca de modelos curada, integración con iOS Shortcuts y soporte de Siri "Oye Siri, pregúntale a Private LLM".',
          '**Locally AI es la alternativa gratuita basada en MLX, ahora desarrollada por el equipo de LM Studio.** Ejecuta modelos Llama, Gemma, Qwen y DeepSeek sobre Apple MLX, funciona con iOS Shortcuts y puede exponer el propio modelo de base en dispositivo de Apple como interfaz de chat.',
          '**MLC Chat tiene aceleración Metal, pero está inactiva.** Su motor MLC LLM sigue generando ~25–35 % más tokens/seg que las apps basadas en llama.cpp en el mismo hardware, pero la app no se ha actualizado desde finales de 2024, por lo que su biblioteca de modelos es anterior a Phi-4 Mini y Gemma 3.',
          '**LLM Farm fue retirada del App Store en agosto de 2025.** Su propio README la describe como "temporalmente no disponible". Sigue siendo de código abierto y se puede compilar desde el código fuente, y sigue siendo la opción más configurable (mirostat, plantillas de chat) para desarrolladores.',
          '**Apple Intelligence está en el dispositivo, pero no es una app independiente.** El modelo de base ~3B de Apple potencia funciones del sistema (Herramientas de escritura, Respuesta inteligente, Resúmenes de notificaciones). Desde iOS 26, las apps de terceros pueden llamarlo mediante el framework Foundation Models, y Shortcuts puede invocarlo con la acción "Usar modelo".',
          '**Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Mejor equilibrio entre calidad y velocidad para el nivel de 8 GB+ de RAM. iPhones más antiguos con 6 GB de RAM (iPhone 14 Pro): Qwen3 1.7B o SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Apps comparadas:** PocketPal AI, Private LLM, Locally AI (de LM Studio), MLC Chat, Apple Intelligence (sistema) — además de LLM Farm, retirada del App Store en agosto de 2025.',
          '**Dispositivos de prueba:** iPhone 16 Pro (A18 Pro, 8 GB RAM) y iPhone 17 Pro (A19 Pro, 12 GB RAM).',
          '**Motores de inferencia:** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), MLC LLM con Metal (MLC Chat), runtime en dispositivo propietario (Private LLM, Apple Intelligence).',
          '**iPhone mínimo para modelos 3B+:** iPhone 14 Pro (A16, 6 GB RAM) para 1.7B; cualquier iPhone de 8 GB+ (15 Pro, serie 16, 16e, serie 17) para 3B–4B.',
          '**Mejor app gratuita:** PocketPal AI — App Store, código abierto, flexibilidad de modelos.',
          '**Mejor app de pago:** Private LLM — 5,99 € de pago único (iPhone + iPad + Mac), soporte de Shortcuts + Siri.',
          '**Sin conexión:** Las cinco funcionan completamente sin conexión una vez descargado el modelo; sin llamadas a la nube.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '¿Qué app instalar primero en el iPhone?',
        content:
          '**Para la mayoría de usuarios: PocketPal AI desde el App Store y luego descarga Phi-4 Mini (3.8B Q4_K_M).** Esta combinación funciona en iPhone 14 Pro y modelos más recientes, no cuesta nada y produce resultados útiles para el chat diario, la síntesis y la redacción rápida. Elige otra app solo cuando tengas una necesidad específica que esta no cubra.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-es.webp',
        imageCaption: 'Qué app de IA local instalar en iPhone: PocketPal AI (opción gratuita por defecto), Private LLM (Siri + Shortcuts), Locally AI (MLX gratis, equipo LM Studio), MLC Chat (rápida en Metal pero inactiva), Apple Intelligence (integrada en iOS).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para la mayoría de usuarios de iPhone en 2026, instala PocketPal AI (gratis, App Store) y descarga Phi-4 Mini — cubre el chat diario, síntesis y redacción en cualquier iPhone con 6 GB+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Cinco apps ejecutan IA completamente en tu iPhone en 2026. PocketPal AI es el mejor punto de partida gratuito — instálala, descarga un archivo de modelo de 2.7 GB una sola vez y tendrás un asistente de chat privado que funciona en el tren sin WiFi. Private LLM es la opción de pago si quieres que Siri hable con el modelo local. Locally AI, del equipo de LM Studio, es la alternativa gratuita moderna con soporte de Shortcuts. MLC Chat es rápida pero ya no se actualiza. Apple Intelligence está integrada en iOS pero no es una app de chat. PocketPal AI cubre el 90 % de los casos de uso.',
          },
        ],
        decisionBlock: {
          title: 'Decisión: ¿qué app de IA local para iPhone?',
          localIf: [
            'Quieres una IA de chat gratuita que funcione sin conexión → PocketPal AI',
            'Quieres que Siri hable con tu modelo local → Private LLM',
            'Quieres una app MLX gratuita con Shortcuts y acceso a Apple Foundation Models → Locally AI',
            'Aceptas una biblioteca de modelos más antigua a cambio de la máxima velocidad Metal → MLC Chat',
            'Solo necesitas asistencia de escritura en Mail / Mensajes / Notas → Apple Intelligence (integrada)',
          ],
          cloudIf: [
            'Necesitas calidad de modelo 70B+ (Llama 3.3 70B, nivel GPT-5.5) → usa la nube o conéctate de forma remota a una máquina doméstica',
            'Necesitas acceso a GPT-5.5, Claude Opus o Gemini específicamente → apps en la nube (no disponibles en local)',
            'Necesitas visión en tiempo real o salida multimodal más allá del texto → nube (el multimodal en dispositivo es limitado en 2026)',
          ],
          quick: [
            'Gratis + funciona para el 90 % de los usuarios: PocketPal AI',
            'De pago + integración nativa iOS: Private LLM',
            'Gratis + ecosistema LM Studio: Locally AI',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Instala PocketPal AI primero, incluso si planeas pagar por Private LLM más adelante. Usa PocketPal AI para comprobar si la inferencia en dispositivo en tu modelo de iPhone es suficientemente rápida para tu caso de uso. Si es así, decide si la integración con iOS Shortcuts y Siri de Private LLM vale 5,99 €. Si no, te habrás ahorrado los 5,99 € antes de pagar.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa de apps para iPhone',
        content:
          '**Las cinco apps se diferencian en tres ejes que importan a la mayoría de usuarios: coste, flexibilidad de modelos e integración con iOS.** Las diferencias de velocidad existen, pero son menores que la brecha entre cualquiera de estas apps y un LLM en la nube.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-es.webp',
        imageCaption: 'Comparativa de apps LLM local para iPhone: PocketPal AI (gratis, ~10–15 tok/s), Locally AI (gratis, Apple MLX + Shortcuts), MLC Chat (gratis, ~14–20 tok/s con aceleración Metal, inactiva desde finales de 2024), Private LLM (5,99 € de pago único, Siri + Shortcuts), Apple Intelligence (integrada en el sistema).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI es la mejor opción gratuita por defecto, Private LLM es la mejor opción de pago, Locally AI es la opción MLX gratuita del equipo de LM Studio, MLC Chat es rápida en Metal pero está inactiva, y Apple Intelligence está integrada en el sistema.',
          },
          {
            type: 'plain-terms',
            text: 'La elección generalmente se reduce a tres cosas: ¿quieres pagar por la integración con Siri (Private LLM)?, ¿quieres el ecosistema de LM Studio con Shortcuts gratis (Locally AI)? o ¿quieres la máxima velocidad bruta aceptando una biblioteca de modelos más antigua (MLC Chat)? Para todo lo demás, PocketPal AI es la opción por defecto. Los datos de la tabla asumen cuantización Q4_K_M — el estándar para inferencia móvil en 2026.',
          },
        ],
        columns: ['App', 'Enlace', 'Precio', 'Tokens/seg (Phi-4 Mini, 16 Pro)', 'Privacidad', 'Ideal para'],
        rows: [
          { 'App': 'PocketPal AI', 'Enlace': '[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)', 'Precio': 'Gratis (código abierto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacidad': 'Solo local, sin telemetría', 'Ideal para': 'Opción gratuita por defecto para la mayoría' },
          { 'App': 'Private LLM', 'Enlace': '[privatellm.app](https://privatellm.app)', 'Precio': '5,99 € pago único', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–14', 'Privacidad': 'Solo local, análisis opt-in', 'Ideal para': 'iOS Shortcuts + integración Siri' },
          { 'App': 'Locally AI', 'Enlace': '[lmstudio.ai/locally](https://lmstudio.ai/locally)', 'Precio': 'Gratis (equipo LM Studio)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D — catálogo MLX (sin Phi-4)', 'Privacidad': 'Solo local, sin recopilación de datos', 'Ideal para': 'MLX + Shortcuts, enlace con LM Studio' },
          { 'App': 'MLC Chat', 'Enlace': '[llm.mlc.ai](https://llm.mlc.ai)', 'Precio': 'Gratis (código abierto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D — biblioteca anterior a Phi-4', 'Privacidad': 'Solo local, sin telemetría', 'Ideal para': 'Velocidad Metal, modelos antiguos' },
          { 'App': 'LLM Farm', 'Enlace': '[github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)', 'Precio': 'Gratis (solo código fuente)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacidad': 'Solo local, sin telemetría', 'Ideal para': 'Usuarios avanzados (retirada del App Store)' },
          { 'App': 'Apple Intelligence', 'Enlace': '[apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)', 'Precio': 'Gratis (integrada en iOS)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/A (función del sistema)', 'Privacidad': 'Local + Private Cloud Compute opt-in', 'Ideal para': 'Asistencia en Mail, Mensajes, Notas' },
        ],
        note:
          '**Nota sobre Apple Neural Engine (ANE), Metal y MLX:** PocketPal AI y LLM Farm usan llama.cpp con Metal Performance Shaders para la inferencia, que se ejecuta en la GPU. MLC Chat usa MLC LLM con una optimización Metal más profunda, logrando un 25–35 % más de tokens/seg en el mismo hardware para los modelos que admite. Locally AI usa Apple MLX, el framework de cálculo de código abierto propio de Apple, logrando una eficiencia de GPU comparable en Apple Silicon. Apple Intelligence usa el ANE específicamente para el modelo de sistema ~3B, que es más eficiente energéticamente pero menos flexible que la inferencia basada en Metal. Desde iOS 26, las apps de terceros pueden llamar a ese modelo de sistema mediante el framework Foundation Models —justo lo que hace Locally AI—, pero los modelos GGUF/MLX personalizados todavía no pueden apuntar directamente al ANE.',
        callouts: [
          {
            type: 'tip',
            text: 'Las cifras de tokens/seg asumen cuantización Q4_K_M (el estándar para inferencia móvil en 2026) y un iPhone inactivo sin otras apps pesadas en ejecución. Las apps en segundo plano reducen el rendimiento un 10–30 %. Los tokens/seg en iPhone 17 Pro son aproximadamente un 20–30 % más altos que en iPhone 16 Pro gracias a las mejoras del A19 Pro.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: opción gratuita y de código abierto',
        content:
          '**PocketPal AI es el punto de partida recomendado para la mayoría de usuarios de iPhone en 2026.** Es gratuita, de código abierto (GitHub: a-ghorbani/pocketpal-ai), disponible en el App Store y compatible con cualquier modelo GGUF de Hugging Face. La app usa llama.cpp internamente con optimizaciones para Apple Silicon.',
        items: [
          '**Qué es:** una app iOS que ejecuta modelos GGUF en local usando llama.cpp. Sin suscripción, sin telemetría, sin cuenta requerida.',
          '**Instalación:** App Store → "PocketPal AI". Descarga gratuita.',
          '**Agregar un modelo:** en la app, toca Modelos → "Agregar desde Hugging Face" → busca (p. ej. "phi-4-mini-instruct-Q4_K_M") → toca para descargar. El modelo se almacena en el almacenamiento local de la app (~2.7 GB para Phi-4 Mini Q4).',
          '**Velocidad de generación (iPhone 16 Pro):** Phi-4 Mini ~10–15 tok/seg, Llama 3.2 3B ~12–18 tok/seg, Gemma 3 4B ~7–10 tok/seg, Qwen3 1.7B ~18–24 tok/seg.',
          '**Ideal para:** usuarios que quieren una app de chat gratuita, instalable desde el App Store, sin cuenta, compatible con cualquier modelo GGUF publicado por la comunidad.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El selector de modelos de PocketPal AI tiene un filtro "Recomendados" que muestra modelos verificados para que quepan en la RAM de tu dispositivo. Para un iPhone 16 Pro (8 GB de RAM), el selector recomienda variantes Q4_K_M de modelos de hasta ~4B parámetros. Confía en este filtro — ejecutar un modelo demasiado grande hace que iOS cierre la app a mitad de la respuesta.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: opción de pago con integración iOS',
        content:
          '**Private LLM es la opción de pago más sólida para iPhone en 2026 (5,99 € de pago único, sin suscripción).** Solo está disponible en el App Store y viene con una biblioteca curada de modelos optimizados. Su diferenciador es la integración con iOS: acciones de Shortcuts y un comando de voz "Oye Siri, pregúntale a Private LLM".',
        items: [
          '**Qué es:** una app iOS de pago con biblioteca de modelos curada e integración profunda con iOS. Usa un runtime en dispositivo propietario optimizado para Apple Silicon.',
          '**Instalación:** App Store → "Private LLM". Compra única 5,99 € (sin suscripción).',
          '**Biblioteca de modelos curada:** ~30 modelos pre-probados y optimizados para iPhone, incluyendo Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct y varias variantes sin censura. Menos flexibilidad que PocketPal AI, pero sin riesgo de instalar un modelo que se cuelgue.',
          '**iOS Shortcuts:** Private LLM expone una acción "Generar texto con Private LLM" que puedes encadenar en automatizaciones de Shortcuts. Útil para activar la IA local desde un botón en tu pantalla de inicio o mediante etiquetas NFC.',
          '**Integración con Siri:** "Oye Siri, pregúntale a Private LLM [tu pregunta]" envía el prompt al modelo en dispositivo y Siri lee la respuesta en voz alta. Funciona sin conexión a internet. La latencia es mayor que en la interfaz de chat (~3–5 segundos antes de que empiece el audio).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Private LLM es una compra universal: el precio único de 5,99 € cubre iPhone, iPad y Mac en una sola compra, y Compartir en familia de Apple lo extiende hasta seis miembros. Sin suscripción ni compras integradas — el precio mostrado es el coste total.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: app MLX gratuita de LM Studio',
        content:
          '**Locally AI es una app de chat gratuita centrada en la privacidad, ahora desarrollada por el equipo de LM Studio, construida sobre el framework Apple MLX en lugar de llama.cpp.** Es la incorporación seria más reciente en esta categoría y la única app de esta guía que expone el modelo de base en dispositivo de Apple como interfaz de chat.',
        items: [
          '**Qué es:** una app iOS/iPadOS/macOS que usa Apple MLX para la inferencia, desarrollada por el equipo detrás de la app de escritorio LM Studio.',
          '**Instalación:** App Store → "Locally AI". Gratis, sin cuenta requerida, 100 % sin conexión.',
          '**Biblioteca de modelos:** Llama 3.2, Gemma 2/3/4, Qwen 3, DeepSeek, LFM 2.5, Bonsai, Ministral 3 y Apple Foundation Models — un catálogo más amplio y actual que el de MLC Chat.',
          '**iOS Shortcuts:** expone una acción de Shortcuts de forma gratuita, a la altura del soporte de automatización de Private LLM.',
          '**LM Link:** una función opcional que se conecta a LM Studio ejecutándose en un Mac mediante un enlace cifrado de extremo a extremo, permitiendo que la app de iPhone recurra a un modelo más grande en una máquina doméstica cuando sea necesario.',
          '**Requisitos:** iOS/iPadOS 18.1+ (las ventajas de eficiencia de Apple Silicon se notan más a partir de iPhone 15 Pro).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI es la única app de esta guía capaz de poner el propio modelo de base en dispositivo de Apple detrás de una ventana de chat normal — útil para probar qué puede hacer el modelo de Apple Intelligence sin navegar por los menús de Herramientas de escritura. Para flexibilidad GGUF de terceros, PocketPal AI sigue teniendo el catálogo de modelos más amplio.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: optimización para Apple Silicon',
        content:
          '**MLC Chat (del proyecto MLC LLM) sigue siendo la app de referencia para la aceleración Metal, pero no se ha actualizado desde finales de 2024.** Es gratuita, de código abierto y ejecuta modelos compilados por la cadena de herramientas MLC LLM en lugar de GGUF estándar — ese requisito de compilación es también la razón por la que su catálogo no ha seguido el ritmo de PocketPal AI o Locally AI.',
        items: [
          '**Qué es:** la app iOS de referencia del proyecto MLC LLM, que demuestra la inferencia acelerada por Metal de MLC LLM en Apple Silicon.',
          '**Instalación:** App Store → "MLC Chat". Gratis.',
          '**Ventaja de velocidad (a nivel de arquitectura):** el motor acelerado por Metal de MLC LLM genera ~25–35 % más rápido que las apps basadas en llama.cpp en el mismo iPhone para los modelos que ambas admiten — pero la propia lista de modelos de la app es anterior a opciones actuales como Phi-4 Mini y Gemma 3, por lo que esta ventaja no se puede comprobar en 2026 sin compilar uno mismo.',
          '**Biblioteca de modelos:** limitada a los modelos que el proyecto MLC LLM compiló antes de que la app quedara inactiva — Llama 3.2 3B, RedPajama y modelos similares de 2024. No todos los GGUF de Hugging Face funcionan, y ningún modelo pequeño de la generación actual figura en la versión del App Store.',
          '**Ideal para:** desarrolladores ya invertidos en la cadena de herramientas MLC LLM y dispuestos a compilar su propio modelo, o quienes necesitan específicamente uno de los modelos ya incluidos de antes de 2025.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Como la versión del App Store de MLC Chat no se ha actualizado desde finales de 2024, no esperes encontrar Phi-4 Mini, Qwen3 o Gemma 3 en su selector. Si quieres modelos de la generación actual con eficiencia de GPU de clase Metal hoy, Locally AI (Apple MLX) o PocketPal AI (llama.cpp con Metal Performance Shaders) son las alternativas mantenidas activamente.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: retirada pero aún configurable',
        content:
          '**LLM Farm fue retirada del App Store y de TestFlight en agosto de 2025 — su propio README de GitHub describe la app como "temporalmente no disponible" en ambos.** El proyecto (GitHub: guinmoon/LLMFarm) sigue siendo de código abierto y ha tenido actividad de issues hasta 2026, pero los nuevos usuarios ya no pueden instalarla desde el App Store; hay que compilarla desde el código fuente con Xcode.',
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
          '**Apple Intelligence ejecuta el modelo de base ~3B propio de Apple en el dispositivo en iPhone 15 Pro y modelos más recientes (chip A17 Pro con 8 GB de RAM mínimo).** Por defecto no es una app de chat — potencia funciones del sistema en Mail (Respuesta inteligente), Mensajes (herramientas de escritura), Notas (síntesis) y Resúmenes de notificaciones. Desde iOS 26, el framework Foundation Models de Apple permite a desarrolladores externos acceder directamente a ese modelo en dispositivo, y apps como Locally AI ya lo aprovechan para ofrecer una interfaz de chat real.',
        items: [
          '**Dónde está:** integrada en iOS 18+ (framework Foundation Models desde iOS 26). Actívala en Ajustes → Apple Intelligence y Siri.',
          '**Requisito de hardware:** iPhone 15 Pro / 15 Pro Max, serie iPhone 16, iPhone 16e, serie iPhone 17. Los iPhones más antiguos (14 e inferiores) no son compatibles con Apple Intelligence.',
          '**Funciones en dispositivo:** Herramientas de escritura (reescribir, resumir, revisar) dentro de cualquier campo de texto, Respuesta inteligente en Mail y Mensajes, Resúmenes de notificaciones, generación de Genmoji.',
          '**Framework Foundation Models (iOS 26+):** una API Swift nativa que da a los desarrolladores acceso directo al mismo modelo en dispositivo con unas pocas líneas de código — así es como Locally AI lo expone como opción de chat, y cómo la acción de Shortcuts "Usar modelo" puede enviar un prompt a ese modelo, a Private Cloud Compute o a ChatGPT.',
          '**Private Cloud Compute:** para tareas que superan la capacidad del modelo en dispositivo, Apple Intelligence recurre a Private Cloud Compute (PCC) — servidores operados por Apple que ejecutan modelos más grandes con garantías criptográficas de que no se retienen datos del usuario. PCC es opt-in y puede desactivarse.',
          '**Relación con las apps de chat:** Apple Intelligence es un complemento, no un reemplazo. Sus funciones de sistema gestionan la reescritura y síntesis de texto dentro de las apps de iOS; PocketPal AI, Private LLM, Locally AI y MLC Chat proporcionan una interfaz de chat dedicada para preguntas arbitrarias — y Locally AI ahora puede ofrecer ese mismo tipo de interfaz para el propio modelo de Apple.',
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
          '**La RAM del iPhone determina el límite de tamaño del modelo, no la generación del chip.** Un iPhone de 6 GB (14 Pro, 15) puede ejecutar modelos 1.7B cómodamente; un iPhone de 8 GB+ (15 Pro, serie 16, 16e, serie 17) ejecuta modelos 3B–4B cómodamente y modelos 7B lentamente. Para el panorama más amplio de modelos en todo el hardware (no solo móvil), consulta [Los mejores LLM locales en 2026](/es/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-es.svg',
        imageCaption: 'Recomendaciones de modelos LLM por RAM de iPhone: Phi-4 Mini 3.8B Q4_K_M para iPhones de 8 GB+ (15 Pro–17 Pro) a 8–20 tok/s; Qwen3 1.7B Q4_K_M para iPhones de 6 GB (14 Pro, no Pro) a 12–20 tok/s; iPhone SE (4 GB) no recomendado.',
        columns: ['Nivel de iPhone (Año, RAM)', 'Modelo recomendado', 'Tamaño de descarga', 'Velocidad esperada'],
        rows: [
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 17 Pro (2025, 12 GB)', 'Modelo recomendado': 'Phi-4 Mini o Llama 3.2 3B (Q4_K_M)', 'Tamaño de descarga': '~2.5–2.7 GB', 'Velocidad esperada': '~13–20 tok/seg' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 16 Pro / 16 Pro Max / 16e (2024–2025, 8 GB)', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M)', 'Tamaño de descarga': '~2.7 GB', 'Velocidad esperada': '~10–15 tok/seg' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 GB)', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M)', 'Tamaño de descarga': '~2.7 GB', 'Velocidad esperada': '~8–12 tok/seg' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 14 Pro / Pro Max (2022, 6 GB)', 'Modelo recomendado': 'Qwen3 1.7B o SmolLM 2 1.7B (Q4_K_M)', 'Tamaño de descarga': '~1.1 GB', 'Velocidad esperada': '~15–20 tok/seg' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 14 / 15 / 16 (no Pro, 6 GB)', 'Modelo recomendado': 'Qwen3 1.7B o SmolLM 2 1.7B (Q4_K_M)', 'Tamaño de descarga': '~1.1 GB', 'Velocidad esperada': '~12–18 tok/seg' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone SE / modelos antiguos (4 GB)', 'Modelo recomendado': 'No recomendado para LLM en dispositivo', 'Tamaño de descarga': '—', 'Velocidad esperada': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para iPhones más antiguos de 6 GB, Qwen3 1.7B es el mejor equilibrio entre tamaño de modelo y calidad en 2026. SmolLM 2 1.7B (HuggingFace) es comparable. Ambos producen respuestas cortas coherentes (1–3 párrafos), pero tienen dificultades con el razonamiento de múltiples pasos. No instales Phi-4 Mini en un iPhone de 6 GB — nominalmente cabe, pero iOS cerrará la app bajo cualquier presión de memoria.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'Consumo de batería y throttling térmico',
        content:
          '**La inferencia LLM en dispositivo en iPhone es intensiva en CPU/GPU y genera calor.** La inferencia activa (el modelo genera tokens) consume ~3–5 W; la generación sostenida limitará el chip y drenará la batería aproximadamente un 20–30 % por hora en iPhone 16 Pro.',
        image: '/images/iphone-llm-apps-battery-thermal-es.svg',
        imageCaption: 'Guía térmica de LLM en dispositivo para iPhone: la inferencia activa consume 3–5 W, drenando ~20–30% de batería/hora en iPhone 16 Pro; el throttling térmico reduce la velocidad un 30–50% tras 10–15 min — mantén el dispositivo boca arriba sobre una superficie dura para disipar el calor.',
        items: [
          '**Consumo de batería (chat activo):** ~20–30 % por hora en iPhone 16 Pro ejecutando Phi-4 Mini. iPhone 17 Pro se descarga ligeramente más rápido debido a una mayor potencia pico, pero lo compensa al terminar la carga de trabajo antes.',
          '**El throttling térmico aparece tras ~10–15 minutos de generación continua.** Cuando el chip alcanza ~38 °C de temperatura superficial, iOS reduce las velocidades de reloj, bajando los tokens/seg un 30–50 %. Dejar que el teléfono se enfríe restaura la velocidad completa.',
          '**Mitigación:** mantén el iPhone boca arriba sobre una superficie dura (no en la mano ni en el bolsillo) durante sesiones de inferencia largas para permitir la disipación de calor. Una carcasa con disipador pasivo ayuda, pero raramente es necesaria para interacciones cortas.',
          '**Consumo fantasma:** si dejas una app de chat abierta en segundo plano después de la generación, la RAM permanece asignada pero no se ejecuta inferencia — el impacto en la batería es mínimo. Cerrar la app completamente libera los ~3 GB de RAM.',
          '**Carga MagSafe durante la inferencia:** aceptable en iPhone 17 Pro y 16 Pro (ambos tienen diseños térmicos mejorados). En iPhone 15 Pro, la combinación de carga e inferencia puede alcanzar los límites térmicos más rápido — es mejor cargar después.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No ejecutes inferencia LLM en dispositivo en un iPhone bajo luz solar directa o en un coche caliente. La combinación de calor ambiental y carga de inferencia lleva el chip más allá de los límites térmicos en minutos, activando un throttling agresivo y potencialmente la advertencia "El iPhone necesita enfriarse". La app de chat no se cierra, pero la generación se ralentiza enormemente.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts, Siri y carga lateral',
        content:
          '**La integración con iOS varía significativamente según la app.** Private LLM y Locally AI ofrecen acciones de Shortcuts; PocketPal AI y MLC Chat son apps de chat independientes sin acciones de Shortcuts en 2026.',
        image: '/images/iphone-llm-apps-ios-integration-es.svg',
        imageCaption: 'Integración con iOS por app LLM local: Private LLM, Locally AI y Apple Intelligence admiten Shortcuts (Private LLM añade Siri); PocketPal AI y MLC Chat son apps de chat independientes sin acciones de Shortcuts a fecha de 2026.',
        items: [
          '**Private LLM** expone una acción de Shortcuts "Generar texto con Private LLM" y un disparador de voz "Oye Siri, pregúntale a Private LLM [pregunta]". La más integrada de forma nativa con iOS de las apps de chat de pago.',
          '**Locally AI** expone una acción de Shortcuts de forma gratuita y puede enviar un shortcut al propio modelo en dispositivo de Apple mediante su integración con Foundation Models — sin disparador de voz, pero con automatización de Shortcuts sin pagar.',
          '**PocketPal AI** es una app de chat independiente — sin acción de Shortcuts, sin integración con Siri. Abres la app y chateas. Los planes de soporte de Shortcuts se rastrean en los issues de GitHub, pero no se han publicado.',
          '**MLC Chat** es una app de referencia para el proyecto MLC LLM — integración iOS mínima y sin actualizaciones desde finales de 2024. Sin acción de Shortcuts.',
          '**LLM Farm** está retirada del App Store (agosto de 2025) y, una vez compilada desde el código fuente, tampoco tiene acción de Shortcuts.',
          '**Apple Intelligence** se integra con iOS Shortcuts mediante la acción "Usar modelo" (iOS 18.4+, ampliada con el framework Foundation Models en iOS 26). Esto envía un prompt al modelo en dispositivo, a Private Cloud Compute o a ChatGPT (configurable). La salida en dispositivo puede encadenarse en otras acciones de Shortcuts.',
          '**Carga lateral:** PocketPal AI, Private LLM, Locally AI y MLC Chat están en el App Store y no requieren carga lateral ni jailbreak; Apple Intelligence está integrada en iOS. LLM Farm es la excepción — su instalación ahora requiere compilar desde el código fuente en Xcode. Los usuarios de la UE también pueden instalar apps del App Store mediante marketplaces alternativos bajo el DMA en 2026, pero la app en sí es idéntica.',
        ],
        promptExamples: [
          {
            label: 'Shortcut de Private LLM: resumir texto seleccionado',
            text: '1. Acción: "Obtener texto seleccionado" (entrada del Share Sheet de iOS).\n2. Acción: "Generar texto con Private LLM" → Prompt: "Resume el siguiente texto en tres puntos clave: [Texto seleccionado]" → Modelo: Phi-4 Mini.\n3. Acción: "Mostrar resultado" o "Copiar al portapapeles".\nAgrégalo al Share Sheet para ejecutarlo sobre cualquier texto seleccionado en cualquier app, completamente sin conexión.',
          },
          {
            label: 'Shortcut de Apple Intelligence: reescribir el tono',
            text: '1. Acción: "Obtener portapapeles".\n2. Acción: "Usar modelo" → Modelo: En dispositivo → Prompt: "Reescribe esto en un tono profesional y conciso: [Portapapeles]".\n3. Acción: "Copiar al portapapeles".\nAsígnalo a un widget de la pantalla de bloqueo para reescribir con un toque cualquier cosa que copies.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para uso manos libres al conducir o cocinar, el "Oye Siri, pregúntale a Private LLM" de Private LLM es la única opción en dispositivo que funciona sin tocar el teléfono. Apple Intelligence admite voz mediante Siri, pero solo para tareas del sistema (escritura, síntesis, acciones de app) — no expone preguntas y respuestas generales como las apps de chat.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores frecuentes',
        items: [
          '**Instalar un modelo más grande de lo que permite la RAM de tu iPhone.** Un modelo 7B en un iPhone de 8 GB genera a ~3–5 tokens/seg y se cierra cuando iOS recupera memoria para otra app. Quédate con el modelo recomendado para tu nivel de iPhone (3B–4B para dispositivos de 8 GB, 1.7B para dispositivos de 6 GB).',
          '**Esperar calidad de IA en la nube de los modelos en dispositivo.** Phi-4 Mini (3.8B) es impresionante para su tamaño, pero no es GPT-5.5. Úsalo para chat, síntesis, redacción y preguntas rápidas — no para razonamiento de múltiples pasos, generación de código complejo o escritura creativa con matices.',
          '**Ejecutar inferencia bajo luz solar directa o en un coche caliente.** El throttling térmico aparece en cuestión de minutos. La generación se ralentiza un 30–50 % y puede aparecer la advertencia "El iPhone necesita enfriarse". Ejecuta la inferencia a temperatura ambiente.',
          '**Dejar instaladas 3 o más apps de chat con modelos de 3 GB en cada una.** Consumirás ~10 GB de almacenamiento en modelos duplicados. Elige una app y un modelo; desinstala las demás hasta que estés seguro de que las necesitas.',
          '**Suponer que Apple Intelligence no tiene interfaz de chat en absoluto.** Eso era cierto hasta iOS 18, pero desde iOS 26 apps como Locally AI pueden poner el modelo en dispositivo de Apple detrás de una ventana de chat real mediante el framework Foundation Models. Las funciones de sistema (Herramientas de escritura, Respuesta inteligente) por sí solas siguen sin ser una interfaz de chat.',
          '**Buscar LLM Farm en el App Store.** Fue retirada en agosto de 2025. Buscarla allí es perder el tiempo; usa PocketPal AI para el mismo caso de uso gratuito y flexible, o compila LLM Farm desde el código fuente en Xcode si necesitas específicamente sus controles mirostat.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (app iOS de código abierto).',
          'Private LLM — [ficha del App Store](https://apps.apple.com) y documentación del desarrollador.',
          'Locally AI — [ficha del App Store](https://apps.apple.com) (equipo de LM Studio, basada en Apple MLX).',
          'MLC Chat / proyecto MLC LLM — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (despliegue iOS acelerado por Metal).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (app iOS de código abierto; ficha de App Store/TestFlight temporalmente no disponible según el README del proyecto).',
          'Apple Intelligence y modelos de base en dispositivo — [Apple Machine Learning Research](https://machinelearning.apple.com) y documentación de Apple Developer (framework Foundation Models, introducido con iOS 26).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿El iPhone puede ejecutar de verdad un modelo 7B?',
            a: 'Técnicamente sí en iPhone 15 Pro y modelos más recientes (8 GB de RAM), pero no a una velocidad utilizable. Un modelo 7B Q4 en iPhone 16 Pro genera a ~3–5 tokens/seg — frustrante para el chat. iOS también tiende a cerrar la app cuando otras apps necesitan memoria. Usa modelos 3B–4B (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) para el chat en dispositivo del día a día. Para calidad 7B+, conéctate de forma remota a un Mac o PC doméstico que ejecute Ollama.',
          },
          {
            q: '¿La IA local agota la batería de mi iPhone?',
            a: 'Sí — la inferencia activa consume ~3–5 W y drena la batería aproximadamente un 20–30 % por hora en iPhone 16 Pro. Para el uso ocasional (unos pocos prompts), el impacto es pequeño. Para el uso sostenido (conversación larga, múltiples tareas de síntesis), mantén el iPhone enchufado. El modelo en sí, almacenado en RAM sin inferencia activa, tiene un impacto mínimo en la batería.',
          },
          {
            q: '¿Se calentará mi iPhone usando IA local?',
            a: 'Sí, después de unos 10–15 minutos de generación continua. La temperatura superficial del chip alcanza ~38 °C y iOS reduce las velocidades de reloj, bajando los tokens/seg un 30–50 %. Para minimizarlo: mantén el iPhone boca arriba sobre una superficie dura (no en la mano) durante sesiones largas, y evita la luz solar directa. Las interacciones cortas (menos de 5 minutos) raramente causan calor notable.',
          },
          {
            q: '¿Puedo usar Siri con un modelo local?',
            a: 'Sí, con Private LLM (5,99 € de pago único). Decir "Oye Siri, pregúntale a Private LLM [pregunta]" envía el prompt al modelo en dispositivo y Siri lee la respuesta en voz alta — completamente sin conexión. PocketPal AI, Locally AI y MLC Chat no tienen integración de voz con Siri en 2026, aunque Locally AI admite automatización con Shortcuts. Apple Intelligence se integra con Siri, pero solo para tareas del sistema (escritura, síntesis, acciones de app), no para preguntas y respuestas generales.',
          },
          {
            q: '¿Estas apps funcionan en iPhone SE o iPhones más antiguos?',
            a: 'Con limitaciones. iPhone SE (4 GB de RAM) está por debajo del umbral práctico para LLM en dispositivo en 2026. iPhone 14 / 15 (no Pro, 6 GB de RAM) puede ejecutar modelos 1.7B (Qwen3 1.7B, SmolLM 2 1.7B), pero no 3B+. iPhone 14 Pro y 15 Pro (6–8 GB de RAM) pueden ejecutar modelos 3B como Phi-4 Mini a 8–12 tokens/seg. Para iPhones más antiguos, la mejor opción es conectarse de forma remota a un Mac o PC doméstico.',
          },
          {
            q: '¿Puedo sincronizar el historial de chat entre iPhone y Mac?',
            a: 'No en PocketPal AI, Private LLM ni MLC Chat — el historial de chat se almacena localmente en cada dispositivo, sin sincronización con iCloud. Private LLM y Locally AI son compras/descargas universales que también funcionan de forma nativa en Mac, pero el historial sigue sin sincronizarse entre las copias de iPhone y Mac. Para historial de chat entre dispositivos, el enfoque práctico es ejecutar Open WebUI en un Mac doméstico y acceder a él desde los navegadores de iPhone y Mac — Open WebUI almacena el historial de chat en el servidor.',
          },
          {
            q: '¿Están estas apps disponibles fuera del App Store?',
            a: 'PocketPal AI es de código abierto y puede compilarse desde el código fuente con Xcode, pero la versión del App Store es la distribución estándar. LLM Farm es la excepción que ahora debe compilarse desde el código fuente — fue retirada del App Store y de TestFlight en agosto de 2025. Private LLM, Locally AI y MLC Chat solo están en el App Store. Los usuarios de la UE pueden instalar apps del App Store mediante marketplaces alternativos bajo el DMA en 2026, pero el contenido es idéntico.',
          },
          {
            q: '¿Alguna de ellas requiere jailbreak?',
            a: 'No. PocketPal AI, Private LLM, Locally AI, MLC Chat y Apple Intelligence funcionan todas en iOS estándar. Compilar LLM Farm desde el código fuente en Xcode tampoco requiere jailbreak — usa la carga lateral estándar para desarrolladores, no un exploit de jailbreak. El jailbreak no es necesario ni recomendado para ninguna de estas apps.',
          },
          {
            q: '¿Puedo usar IA local en iOS Shortcuts?',
            a: 'Sí, mediante Private LLM (acción "Generar texto con Private LLM"), Locally AI (acción de Shortcuts gratuita) o Apple Intelligence (acción "Usar modelo", iOS 18.4+, ampliada con iOS 26). PocketPal AI y MLC Chat no tienen acciones de Shortcuts en 2026. Locally AI es la única opción gratuita que ofrece tanto soporte de Shortcuts como acceso al propio modelo en dispositivo de Apple.',
          },
          {
            q: '¿Cómo se compara la IA local con la app de ChatGPT en iPhone?',
            a: 'Los modelos en dispositivo (Phi-4 Mini, Llama 3.2 3B) siguen claramente por detrás de los modelos de vanguardia en la nube en razonamiento complejo, conocimiento general del mundo y tareas multimodales, pero son más rápidos en consultas simples (sin ida y vuelta de red) y completamente privados. El intercambio honesto: IA local para tareas rutinarias y privadas; ChatGPT u otra app en la nube para preguntas difíciles ocasionales. Muchos usuarios en 2026 tienen ambas y eligen según la consulta.',
          },
          {
            q: '¿Sigue siendo seguro usar LLM Farm ahora que no está en el App Store?',
            a: 'El código fuente es público en GitHub y sigue recibiendo actividad de issues hasta 2026, por lo que no está abandonado, pero una vez compilada desde el código fuente e instalada por carga lateral, ya no pasa por el proceso de revisión del App Store de Apple. Si no necesitas específicamente sus controles de muestreo mirostat, PocketPal AI cubre el mismo caso de uso gratuito, flexible y de código abierto sin salir del App Store, con la revisión estándar de Apple.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Las mejores apps LLM local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — artículo hermano que cubre los equivalentes de Android (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[Cómo ejecutar IA en una tablet: iPad y Android (2026)](/es/power-local-llm/run-ai-on-tablet-ipad-android) — guía de plataforma para lectores con tablet.',
          '[Los mejores modelos LLM para móvil en 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — artículo complementario del lado del modelo para elegir qué ejecutar en estas apps.',
          '[Los mejores LLM locales en 2026](/es/local-llms/best-local-llms-2026) — panorama más amplio de modelos que cubre todos los niveles de hardware, no solo móvil.',
          '[Crea un asistente de voz local en tu teléfono: Whisper + LLM local](/es/power-local-llm/voice-assistant-local-mobile-offline) — extiende estas apps con entrada/salida de voz sin conexión.',
          '[La mejor app de IA local para PCs de gama baja](/es/power-local-llm/best-local-ai-app-low-end-pc) — alternativa de escritorio para usuarios que quieren conectarse de forma remota a una máquina doméstica más potente.',
          '[Directorio de software LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — directorio de todas las herramientas LLM local que merece la pena conocer en todas las plataformas.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Las mejores apps de LLM local para iPhone en 2026 (ejecuta IA sin WiFi)',
      description: 'Cinco apps para iPhone que ejecutan LLMs reales en el dispositivo en 2026. PocketPal AI, Private LLM, Locally AI y MLC Chat probadas en iPhone 16 Pro y 17 Pro. Velocidad, privacidad y biblioteca de modelos comparadas.',
      url: 'https://www.promptquorum.com/es/power-local-llm/best-local-llm-apps-iphone-2026',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-09-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Beginner',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-09-01',
    last_full_refresh: '2026-09-01',
    next_refresh_due: '2027-03-01',
    theme: 'Mobile & Edge LLMs',
    title: '2026년 iPhone용 최고의 로컬 LLM 앱 (WiFi 없이 AI 실행)',
    seoTitle: '2026년 iPhone 로컬 LLM 앱 베스트 5',
    intro: '2026년에 iPhone에서 실제 LLM을 완전히 기기에서 실행하는 앱은 다섯 가지입니다: PocketPal AI, Private LLM, Locally AI(LM Studio 제공), MLC Chat, 그리고 Apple Intelligence(시스템 내장). 모두 모델을 다운로드하면 WiFi 없이 작동합니다. 이 가이드는 iPhone 16 Pro와 iPhone 17 Pro에서의 초당 토큰 수, 모델 라이브러리, RAM 관리, 개인 정보 보호, iOS 통합을 기준으로 순위를 매기며, LLM Farm이 순위에서 빠진 이유도 설명합니다.',
    metaDescription: '2026년 iPhone에서 기기 내 LLM을 실행하는 5가지 앱: iPhone 16/17 Pro에서 PocketPal AI, Private LLM, Locally AI, MLC Chat. 속도와 개인 정보 보호 비교.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ko.webp',
    twitterDescription: '2026년 iPhone 로컬 AI: PocketPal AI (무료), Private LLM (₩7,700 일회 구매, Siri), Locally AI (LM Studio, MLX), MLC Chat (Metal이지만 업데이트 중단). 모두 모델 다운로드 후 오프라인 작동.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience: '구독 없이 기기에서 개인 정보를 보호하며 AI를 실행하려는 iPhone 사용자 — 여행자, 개인 정보 보호를 중시하는 사람, 기기 내 추론을 탐구하는 개발자.',
    readTime: '12분 분량',
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
    ],
    leadAnswerBlock: '**2026년 대부분의 iPhone 사용자에게는 App Store에서 PocketPal AI를 설치하고 Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB)를 다운로드하십시오.** 무료, 오픈 소스이며 iPhone 14 Pro 이상 (6 GB+ RAM이 있는 모든 iPhone)에서 작동하고 일상적인 사용에서 iPhone 16 Pro에서 ~10–15 토큰/초를 생성합니다. Siri 및 Shortcuts 통합을 위해서는 Private LLM이 가장 강력한 유료 옵션입니다 (₩7,700 일회 구매, iPhone·iPad·Mac 모두 포함). Locally AI는 이제 LM Studio 팀이 개발하며, Apple MLX 기반의 무료 현대적 대안으로 Shortcuts를 지원하고 Apple의 기기 내 파운데이션 모델에도 접근할 수 있습니다. MLC Chat은 여전히 Metal 가속 기준 앱이지만 2024년 말 이후 업데이트되지 않았습니다. LLM Farm은 2025년 8월 App Store에서 삭제되어 이제 소스 코드 빌드로만 설치할 수 있습니다. Apple Intelligence도 기기에서 모델을 실행하지만 시스템에 내장되어 있으며 채팅 앱이 아닙니다. 이 앱들을 대체하는 것이 아니라 보완합니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년 iPhone용 최고의 로컬 LLM 앱은 무엇입니까?',
        answer: 'PocketPal AI는 대부분의 iPhone 사용자를 위한 최고의 무료 선택입니다: 오픈 소스, App Store 설치, Hugging Face의 모든 GGUF 모델 지원, iPhone 16 Pro에서 Phi-4 Mini (3.8B)를 ~10–15 토큰/초로 실행합니다. Private LLM은 가장 강력한 유료 선택입니다 (₩7,700 일회 구매, iPhone+iPad+Mac), iOS Shortcuts 및 Siri 통합이 있습니다. Locally AI는 LM Studio 팀이 개발한 무료 Apple MLX 앱으로 Shortcuts를 지원하고 Apple의 기기 내 파운데이션 모델에 접근할 수 있습니다. MLC Chat은 Metal 가속이지만 2024년 말 이후 업데이트가 없습니다. Apple Intelligence도 기기에서 모델을 실행하지만 시스템에 내장되어 있으며 이 앱들을 보완합니다.',
        bullets: [
          'PocketPal AI — 무료, 오픈 소스, App Store. 대부분의 사용자를 위한 최고의 기본 선택. 모든 GGUF 모델 지원.',
          'Private LLM — ₩7,700 일회 구매 (iPhone+iPad+Mac). 최고의 유료 선택. iOS Shortcuts + Siri 통합.',
          'Locally AI — 무료, LM Studio 팀 제공. Apple MLX 엔진, Shortcuts 지원, Apple Foundation Models 접근.',
          'MLC Chat — 무료, MLC LLM 프로젝트. Metal 가속이지만 2024년 말 이후 앱 업데이트 없음 (모델 라이브러리가 오래됨).',
          'Apple Intelligence — 시스템 내장, 독립 앱 아님. Mail, 메시지, 메모에서 사용되는 기기 내 3B 모델.',
          'iPhone 16 Pro / 17 Pro 권장 모델: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — ~10–15 토큰/초로 실행.',
          '구형 iPhone (14 Pro): Qwen3 1.7B 또는 SmolLM 2 1.7B — 6 GB RAM에 맞으며 ~15–20 토큰/초 생성.',
        ],
        updatedDate: '2026-09-01',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: 'iPhone에서 먼저 설치할 앱', anchor: '#which-app' },
      { label: 'iPhone 앱 비교표', anchor: '#comparison-table' },
      { label: 'PocketPal AI: 무료 오픈 소스 선택', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: iOS 통합 유료 선택', anchor: '#private-llm' },
      { label: 'Locally AI: LM Studio의 무료 MLX 앱', anchor: '#locally-ai' },
      { label: 'MLC Chat: Apple Silicon 최적화', anchor: '#mlc-chat' },
      { label: 'LLM Farm: 삭제되었지만 여전히 구성 가능', anchor: '#llm-farm' },
      { label: 'Apple Intelligence: 시스템 내장 기기 내 AI', anchor: '#apple-intelligence' },
      { label: 'iPhone 모델별 권장 모델', anchor: '#models-by-tier' },
      { label: '배터리 소모 및 열 제한', anchor: '#battery-heat' },
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
          '**PocketPal AI가 최고의 무료 기본 선택입니다.** 오픈 소스, App Store 설치, Hugging Face의 모든 GGUF 모델 지원. iPhone 16 Pro에서 Phi-4 Mini를 ~10–15 토큰/초로 실행합니다. 대부분의 iPhone 사용자를 위한 권장 출발점.',
          '**Private LLM이 최고의 유료 선택입니다 (₩7,700 일회 구매, 구독 없음).** 한 번 구매로 iPhone·iPad·Mac을 가족 공유와 함께 사용할 수 있습니다. 큐레이션된 모델 라이브러리, iOS Shortcuts 통합, "Siri야, Private LLM에게 물어봐" Siri 지원.',
          '**Locally AI는 무료 MLX 기반 대안으로, 이제 LM Studio 팀이 개발합니다.** Apple MLX에서 Llama, Gemma, Qwen, DeepSeek 모델을 실행하며 iOS Shortcuts와 함께 작동하고, Apple 자체의 기기 내 파운데이션 모델을 채팅 인터페이스로 노출할 수 있습니다.',
          '**MLC Chat은 Metal 가속이지만 정체되어 있습니다.** MLC LLM 엔진은 여전히 동일한 하드웨어에서 llama.cpp 기반 앱보다 ~25–35% 더 많은 토큰/초를 생성하지만, 앱 자체는 2024년 말 이후 업데이트되지 않아 모델 라이브러리가 Phi-4 Mini와 Gemma 3 이전 수준입니다.',
          '**LLM Farm은 2025년 8월 App Store에서 삭제되었습니다.** 자체 README에는 "일시적으로 이용 불가"로 설명되어 있습니다. 여전히 오픈 소스이며 소스 코드에서 빌드할 수 있고, 개발자를 위한 가장 구성 가능한 옵션(mirostat, 채팅 템플릿)으로 남아 있습니다.',
          '**Apple Intelligence는 기기 내에 있지만 독립 앱이 아닙니다.** Apple의 ~3B 기반 모델은 시스템 기능(작문 도구, 스마트 답장, 알림 요약)을 지원합니다. iOS 26부터 서드파티 앱은 Foundation Models 프레임워크를 통해 이를 호출할 수 있으며, Shortcuts도 "모델 사용" 작업으로 이를 이용할 수 있습니다.',
          '**iPhone 16 Pro / 17 Pro 권장 모델: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** 8 GB 이상 RAM 티어에서 품질과 속도의 최고 균형. 6 GB RAM이 있는 구형 iPhone (iPhone 14 Pro): Qwen3 1.7B 또는 SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**비교 대상 앱:** PocketPal AI, Private LLM, Locally AI (LM Studio 제공), MLC Chat, Apple Intelligence (시스템) — 그리고 2025년 8월 App Store에서 삭제된 LLM Farm.',
          '**테스트 기기:** iPhone 16 Pro (A18 Pro, 8 GB RAM) 및 iPhone 17 Pro (A19 Pro, 12 GB RAM).',
          '**추론 엔진:** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), Metal을 사용한 MLC LLM (MLC Chat), 독점 기기 내 런타임 (Private LLM, Apple Intelligence).',
          '**3B+ 모델을 위한 최소 iPhone:** 1.7B에는 iPhone 14 Pro (A16, 6 GB RAM); 3B–4B에는 8 GB 이상의 모든 iPhone (15 Pro, 16 시리즈, 16e, 17 시리즈).',
          '**최고의 무료 앱:** PocketPal AI — App Store, 오픈 소스, 모델 유연성.',
          '**최고의 유료 앱:** Private LLM — ₩7,700 일회 구매 (iPhone+iPad+Mac), Shortcuts + Siri 지원.',
          '**오프라인:** 다섯 가지 모두 모델을 다운로드하면 완전히 오프라인으로 작동합니다. 클라우드 호출 없음.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'iPhone에서 먼저 설치할 앱',
        content: '**대부분의 사용자에게: App Store에서 PocketPal AI를 설치하고 Phi-4 Mini (3.8B Q4_K_M)를 다운로드하십시오.** 이 조합은 iPhone 14 Pro 이상에서 작동하고, 비용이 들지 않으며, 일상적인 채팅, 요약, 빠른 작문에 유용한 결과를 제공합니다. 이것이 충족하지 못하는 특정 필요가 있을 때만 다른 앱을 선택하십시오.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ko.webp',
        imageCaption: 'iPhone에 설치할 로컬 AI 앱: PocketPal AI (무료 기본 선택), Private LLM (Siri + Shortcuts), Locally AI (무료 MLX, LM Studio 팀), MLC Chat (Metal이지만 정체됨), Apple Intelligence (iOS 내장).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 대부분의 iPhone 사용자에게는 PocketPal AI (무료, App Store)를 설치하고 Phi-4 Mini를 다운로드하십시오 — 6 GB+ RAM이 있는 모든 iPhone에서 일상적인 채팅, 요약, 작문을 커버합니다.',
          },
          {
            type: 'plain-terms',
            text: '2026년에 5개의 앱이 iPhone에서 완전히 AI를 실행합니다. PocketPal AI가 최고의 무료 출발점입니다 — 설치하고, 2.7 GB 모델 파일을 한 번 다운로드하면 WiFi 없이 기차에서 작동하는 개인 채팅 보조를 갖게 됩니다. Private LLM은 Siri가 로컬 모델과 통신하기를 원한다면 유료 선택입니다. LM Studio 팀의 Locally AI는 Shortcuts를 지원하는 무료 현대적 대안입니다. MLC Chat은 빠르지만 더 이상 업데이트되지 않습니다. Apple Intelligence는 iOS에 내장되어 있지만 채팅 앱이 아닙니다. PocketPal AI가 사용 사례의 90%를 커버합니다.',
          },
        ],
        decisionBlock: {
          title: '결정: iPhone용 어떤 로컬 AI 앱?',
          localIf: [
            '오프라인으로 작동하는 무료 채팅 AI를 원한다 → PocketPal AI',
            'Siri가 로컬 모델과 통신하기를 원한다 → Private LLM',
            'Shortcuts와 Apple Foundation Models 접근이 가능한 무료 MLX 앱을 원한다 → Locally AI',
            '오래된 모델 라이브러리를 감수하고 최대 Metal 속도를 원한다 → MLC Chat',
            'Mail / 메시지 / 메모에서 작문 도움만 필요하다 → Apple Intelligence (내장)',
          ],
          cloudIf: [
            '70B+ 모델 품질이 필요하다 (Llama 3.3 70B, GPT-5.5 수준) → 클라우드를 사용하거나 Ollama를 실행하는 홈 머신에 원격 연결',
            'GPT-5.5, Claude Opus 또는 Gemini에 구체적으로 접근이 필요하다 → 클라우드 앱 (로컬에서 사용 불가)',
            '실시간 비전 또는 텍스트 이상의 멀티모달 출력이 필요하다 → 클라우드 (2026년에 기기 내 멀티모달은 제한적)',
          ],
          quick: [
            '무료 + 사용자의 90%에게 작동: PocketPal AI',
            '유료 + 네이티브 iOS 통합: Private LLM',
            '무료 + LM Studio 생태계: Locally AI',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '나중에 Private LLM을 구매할 계획이더라도 먼저 PocketPal AI를 설치하십시오. PocketPal AI를 사용하여 iPhone 모델에서 기기 내 추론이 사용 사례에 충분히 빠른지 확인하십시오. 그렇다면 Private LLM의 iOS Shortcuts 및 Siri 통합이 ₩7,700의 가치가 있는지 결정하십시오. 그렇지 않다면 지불하기 전에 그 비용을 절약했습니다.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone 앱 비교표',
        content: '**다섯 개의 앱은 대부분의 사용자에게 중요한 세 가지 축에서 차이가 납니다: 비용, 모델 유연성, iOS 통합.** 속도 차이는 존재하지만 이 앱들 중 어느 것과 클라우드 LLM 사이의 격차보다는 작습니다.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-ko.webp',
        imageCaption: 'iPhone 로컬 LLM 앱 비교: PocketPal AI (무료, ~10–15 tok/s), Locally AI (무료, Apple MLX + Shortcuts), MLC Chat (무료, Metal 가속으로 ~14–20 tok/s, 2024년 말 이후 정체), Private LLM (₩7,700 일회 구매, Siri + Shortcuts), Apple Intelligence (시스템 내장).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI가 최고의 무료 기본 선택, Private LLM이 최고의 유료 선택, Locally AI가 LM Studio 팀의 무료 MLX 옵션, MLC Chat이 Metal에서 빠르지만 정체됨, Apple Intelligence가 시스템 내장입니다.',
          },
          {
            type: 'plain-terms',
            text: '선택은 보통 세 가지로 좁혀집니다: Siri 통합에 비용을 지불할 것인가 (Private LLM), Shortcuts를 지원하는 LM Studio 생태계를 무료로 원하는가 (Locally AI), 아니면 오래된 모델 라이브러리를 감수하고 최대 원시 속도를 원하는가 (MLC Chat)? 그 외의 모든 것에는 PocketPal AI가 기본 선택입니다. 표의 데이터는 Q4_K_M 양자화를 가정합니다 — 2026년 모바일 추론의 표준.',
          },
        ],
        columns: ['앱', '링크', '가격', '토큰/초 (Phi-4 Mini, 16 Pro)', '개인 정보 보호', '이상적인 대상'],
        rows: [
          { '앱': 'PocketPal AI', '링크': '[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)', '가격': '무료 (오픈 소스)', '토큰/초 (Phi-4 Mini, 16 Pro)': '~10–15', '개인 정보 보호': '로컬 전용, 원격 측정 없음', '이상적인 대상': '대부분을 위한 무료 기본 선택' },
          { '앱': 'Private LLM', '링크': '[privatellm.app](https://privatellm.app)', '가격': '₩7,700 일회 구매', '토큰/초 (Phi-4 Mini, 16 Pro)': '~10–14', '개인 정보 보호': '로컬 전용, 옵트인 분석', '이상적인 대상': 'iOS Shortcuts + Siri 통합' },
          { '앱': 'Locally AI', '링크': '[lmstudio.ai/locally](https://lmstudio.ai/locally)', '가격': '무료 (LM Studio 팀)', '토큰/초 (Phi-4 Mini, 16 Pro)': '해당 없음 — MLX 카탈로그 (Phi-4 없음)', '개인 정보 보호': '로컬 전용, 데이터 수집 없음', '이상적인 대상': 'MLX + Shortcuts, LM Studio 연동' },
          { '앱': 'MLC Chat', '링크': '[llm.mlc.ai](https://llm.mlc.ai)', '가격': '무료 (오픈 소스)', '토큰/초 (Phi-4 Mini, 16 Pro)': '해당 없음 — Phi-4 이전 라이브러리', '개인 정보 보호': '로컬 전용, 원격 측정 없음', '이상적인 대상': 'Metal 속도, 구형 모델' },
          { '앱': 'LLM Farm', '링크': '[github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)', '가격': '무료 (소스만)', '토큰/초 (Phi-4 Mini, 16 Pro)': '~10–15', '개인 정보 보호': '로컬 전용, 원격 측정 없음', '이상적인 대상': '고급 사용자 (App Store에서 삭제됨)' },
          { '앱': 'Apple Intelligence', '링크': '[apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)', '가격': '무료 (iOS 내장)', '토큰/초 (Phi-4 Mini, 16 Pro)': 'N/A (시스템 기능)', '개인 정보 보호': '로컬 + Private Cloud Compute 옵트인', '이상적인 대상': 'Mail, 메시지, 메모에서 작문 지원' },
        ],
        note: '**Apple Neural Engine (ANE), Metal, MLX 비교 참고:** PocketPal AI와 LLM Farm은 추론을 위해 Metal Performance Shaders와 함께 llama.cpp를 사용하며, GPU에서 실행됩니다. MLC Chat은 더 깊은 Metal 최적화와 함께 MLC LLM을 사용하여 지원하는 모델에 대해 동일한 하드웨어에서 25–35% 더 많은 토큰/초를 달성합니다. Locally AI는 Apple 자체의 오픈 소스 배열 프레임워크인 Apple MLX를 사용하여 Apple Silicon에서 비슷한 GPU 효율성을 달성합니다. Apple Intelligence는 시스템 ~3B 모델에 ANE를 구체적으로 사용하며, Metal 기반 추론보다 에너지 효율이 높지만 유연성이 낮습니다. iOS 26부터 서드파티 앱은 Foundation Models 프레임워크를 통해 이 시스템 모델을 호출할 수 있게 되었으며 — Locally AI가 정확히 이렇게 합니다 — 하지만 커스텀 GGUF/MLX 모델은 여전히 ANE를 직접 타겟팅할 수 없습니다.',
        callouts: [
          {
            type: 'tip',
            text: '토큰/초 수치는 Q4_K_M 양자화 (2026년 모바일 추론의 표준)와 다른 무거운 앱이 실행되지 않는 유휴 iPhone을 가정합니다. 백그라운드 앱은 성능을 10–30% 저하시킵니다. iPhone 17 Pro의 토큰/초는 A19 Pro의 개선으로 iPhone 16 Pro보다 약 20–30% 높습니다.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: 무료 오픈 소스 선택',
        content: '**PocketPal AI는 2026년 대부분의 iPhone 사용자를 위한 권장 출발점입니다.** 무료, 오픈 소스 (GitHub: a-ghorbani/pocketpal-ai), App Store에서 이용 가능하며 Hugging Face의 모든 GGUF 모델을 지원합니다. 앱은 내부적으로 Apple Silicon 최적화와 함께 llama.cpp를 사용합니다.',
        items: [
          '**무엇인가:** llama.cpp를 사용하여 GGUF 모델을 로컬로 실행하는 iOS 앱. 구독 없음, 원격 측정 없음, 계정 불필요.',
          '**설치:** App Store → "PocketPal AI". 무료 다운로드.',
          '**모델 추가:** 앱에서 모델 → "Hugging Face에서 추가" → 검색 (예: "phi-4-mini-instruct-Q4_K_M") → 다운로드 탭. 모델은 앱의 로컬 저장소에 저장됩니다 (Phi-4 Mini Q4의 경우 ~2.7 GB).',
          '**생성 속도 (iPhone 16 Pro):** Phi-4 Mini ~10–15 tok/초, Llama 3.2 3B ~12–18 tok/초, Gemma 3 4B ~7–10 tok/초, Qwen3 1.7B ~18–24 tok/초.',
          '**이상적인 대상:** 계정 없이 App Store에서 설치 가능한 무료 채팅 앱을 원하는 사람, 커뮤니티가 게시한 모든 GGUF 모델을 지원합니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'PocketPal AI의 모델 선택기에는 기기 RAM에 맞는 것으로 확인된 모델을 표시하는 "추천" 필터가 있습니다. iPhone 16 Pro (8 GB RAM)의 경우 선택기는 최대 ~4B 파라미터 모델의 Q4_K_M 변형을 권장합니다. 이 필터를 신뢰하십시오 — 너무 큰 모델을 실행하면 iOS가 응답 도중에 앱을 닫습니다.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: iOS 통합 유료 선택',
        content: '**Private LLM은 2026년 iPhone을 위한 가장 강력한 유료 선택입니다 (₩7,700 일회 구매, 구독 없음).** App Store에서만 이용 가능하며 최적화된 모델의 큐레이션된 라이브러리가 제공됩니다. 차별화 요소는 iOS 통합입니다: Shortcuts 작업과 "Siri야, Private LLM에게 물어봐" 음성 명령.',
        items: [
          '**무엇인가:** Apple Silicon에 최적화된 독점 기기 내 런타임과 큐레이션된 모델 라이브러리가 있는 유료 iOS 앱.',
          '**설치:** App Store → "Private LLM". 일회 구매 ₩7,700 (구독 없음).',
          '**큐레이션된 모델 라이브러리:** iPhone에 대해 사전 테스트 및 최적화된 ~30개 모델, Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct 및 여러 검열되지 않은 변형 포함. PocketPal AI보다 유연성이 낮지만 충돌을 일으키는 모델을 설치하는 위험이 없습니다.',
          '**iOS Shortcuts:** Private LLM은 Shortcuts 자동화에서 연결할 수 있는 "Private LLM으로 텍스트 생성" 작업을 노출합니다. 홈 화면 버튼이나 NFC 태그에서 로컬 AI를 트리거하는 데 유용합니다.',
          '**Siri 통합:** "Siri야, Private LLM에게 [질문] 물어봐"는 프롬프트를 기기 내 모델로 보내고 Siri가 응답을 큰 소리로 읽습니다. 인터넷 연결 없이 작동합니다. 지연시간은 채팅 인터페이스보다 높습니다 (~3–5초 후 오디오 시작).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Private LLM은 유니버설 구매입니다: ₩7,700 일회 가격으로 iPhone·iPad·Mac을 한 번에 구매할 수 있고, Apple 가족 공유로 최대 6명까지 확장됩니다. 구독이나 인앱 구매가 없으며 — 표시된 가격이 총 비용입니다.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: LM Studio의 무료 MLX 앱',
        content: '**Locally AI는 이제 LM Studio 팀이 개발하는 무료 개인정보 보호 중심 채팅 앱으로, llama.cpp 대신 Apple 자체 MLX 프레임워크를 기반으로 합니다.** 이 카테고리에서 가장 최근에 등장한 본격적인 경쟁자이며, Apple의 기기 내 파운데이션 모델을 채팅 인터페이스로 노출하는 유일한 앱입니다.',
        items: [
          '**무엇인가:** Apple MLX를 사용해 추론하는 iOS/iPadOS/macOS 앱으로, 데스크톱 LM Studio 앱을 만든 팀이 개발합니다.',
          '**설치:** App Store → "Locally AI". 무료, 계정 불필요, 100% 오프라인.',
          '**모델 라이브러리:** Llama 3.2, Gemma 2/3/4, Qwen 3, DeepSeek, LFM 2.5, Bonsai, Ministral 3, Apple Foundation Models — MLC Chat보다 더 넓고 최신인 카탈로그.',
          '**iOS Shortcuts:** Shortcuts 작업을 무료로 제공하며, Private LLM의 자동화 지원과 동등한 수준입니다.',
          '**LM Link:** Mac에서 실행 중인 LM Studio와 종단 간 암호화 연결로 연동하는 선택적 기능으로, 필요할 때 iPhone 앱이 홈 머신의 더 큰 모델로 전환할 수 있게 합니다.',
          '**요구 사항:** iOS/iPadOS 18.1+ (Apple Silicon급 효율성 이점은 iPhone 15 Pro 이상에서 가장 두드러집니다).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Locally AI는 이 가이드에서 Apple 자체의 기기 내 파운데이션 모델을 일반적인 채팅 창 뒤에 배치할 수 있는 유일한 앱입니다 — 작문 도구 메뉴를 뒤지지 않고 Apple Intelligence의 모델이 무엇을 할 수 있는지 테스트하고 싶을 때 유용합니다. 서드파티 GGUF의 유연성이 필요하다면 PocketPal AI가 여전히 더 큰 모델 카탈로그를 보유하고 있습니다.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: Apple Silicon 최적화',
        content: '**MLC Chat (MLC LLM 프로젝트 제공)은 여전히 Metal 가속의 기준 앱이지만, 앱 자체는 2024년 말 이후 업데이트되지 않았습니다.** 무료, 오픈 소스이며 표준 GGUF 대신 MLC LLM 도구 체인에 의해 컴파일된 모델을 실행합니다 — 이 컴파일 요구 사항이 바로 카탈로그가 PocketPal AI나 Locally AI를 따라잡지 못한 이유이기도 합니다.',
        items: [
          '**무엇인가:** Apple Silicon에서 MLC LLM의 Metal 가속 추론을 시연하는 MLC LLM 프로젝트의 iOS 참조 앱.',
          '**설치:** App Store → "MLC Chat". 무료.',
          '**속도 이점(아키텍처 수준):** MLC LLM의 Metal 가속 엔진은 양쪽 모두 지원하는 모델에 대해 동일한 iPhone에서 llama.cpp 기반 앱보다 ~25–35% 빠르게 생성합니다 — 하지만 앱 자체의 모델 목록은 Phi-4 Mini, Gemma 3 같은 2026년의 현재 선택지보다 이전 것이어서, 직접 컴파일하지 않는 한 이 이점을 검증할 수 없습니다.',
          '**모델 라이브러리:** 앱이 정체되기 전 MLC LLM 프로젝트가 컴파일한 모델로 제한됩니다 — Llama 3.2 3B, RedPajama 등 2024년 시대의 모델. 모든 Hugging Face GGUF가 작동하지는 않으며, App Store 빌드에는 현재 세대의 소형 모델이 전혀 포함되어 있지 않습니다.',
          '**이상적인 대상:** 이미 MLC LLM 도구 체인에 투자했고 직접 모델을 컴파일할 의향이 있는 개발자, 또는 2025년 이전에 이미 포함된 모델이 특별히 필요한 사용자.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'MLC Chat의 App Store 빌드는 2024년 말 이후 업데이트되지 않았으므로 모델 선택기에서 Phi-4 Mini, Qwen3, Gemma 3를 기대하지 마십시오. 오늘날 Metal급 GPU 효율성을 갖춘 현재 세대 모델을 원한다면 Locally AI (Apple MLX)나 PocketPal AI (Metal Performance Shaders를 사용하는 llama.cpp)가 현재 활발히 유지 관리되는 대안입니다.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: 삭제되었지만 여전히 구성 가능',
        content: '**LLM Farm은 2025년 8월 App Store와 TestFlight에서 삭제되었습니다 — 자체 GitHub README는 두 플랫폼 모두에서 앱을 "일시적으로 이용 불가"로 설명합니다.** 프로젝트(GitHub: guinmoon/LLMFarm)는 여전히 오픈 소스이며 2026년까지 GitHub 이슈 활동이 있었지만, 신규 사용자는 더 이상 App Store에서 설치할 수 없으며 Xcode로 소스 코드에서 빌드해야 합니다.',
        items: [
          '**무엇인가:** 광범위한 구성 옵션을 갖춘 GGUF 모델을 실행하는 @guinmoon 개발자의 iOS 앱으로, 이전에는 App Store를 통해 배포되었습니다.',
          '**현재 이용 가능 여부:** 이번 업데이트 시점 기준 App Store나 TestFlight에서 설치할 수 없습니다. 소스 코드는 공개되어 있고 빌드 가능한 상태를 유지합니다.',
          '**소스에서 빌드하기:** 저장소를 클론하고 Xcode에서 열어 무료 또는 유료 Apple Developer 계정으로 기기에 빌드합니다 — App Store 목록이 없는 오픈 소스 iOS 앱의 표준 사이드로딩 워크플로입니다.',
          '**노출된 구성(빌드 후):** 온도, top-p, top-k, mirostat 샘플링, 반복 패널티, 모델별 시스템 프롬프트, 채팅 템플릿 선택, 컨텍스트 창 길이.',
          '**이상적인 대상:** Xcode에서 소스 코드로부터 앱을 빌드하는 데 익숙하고 특별히 mirostat 샘플링 제어가 필요한 개발자. 그 외의 사용자는 완전히 App Store에서 설치 가능하고 무료인 PocketPal AI나 Locally AI를 사용해야 합니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'LLM Farm의 App Store 링크가 작동할 것이라고 기대하지 마십시오 — 다른 곳에서 발견한 그런 링크는 오래된 것으로 취급하십시오. 소스에서 빌드하려면 Xcode와 iOS 코드 서명에 대한 기본 지식이 필요합니다. 그것이 감당하기 힘든 수고라면, PocketPal AI가 App Store를 벗어나지 않고도 동일한 "유연한 무료 채팅 앱" 사용 사례를 다룹니다.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: 시스템 내장 기기 내 AI',
        content: '**Apple Intelligence는 iPhone 15 Pro 이상 (최소 8 GB RAM의 A17 Pro 칩)에서 기기 내에서 Apple의 자체 ~3B 기반 모델을 실행합니다.** 기본적으로는 채팅 앱이 아닙니다 — Mail (스마트 답장), 메시지 (작문 도구), 메모 (요약), 알림 요약에서 시스템 기능을 지원합니다. iOS 26부터 Apple의 Foundation Models 프레임워크를 통해 서드파티 개발자가 이 기기 내 모델에 직접 접근할 수 있게 되었으며, Locally AI 같은 앱은 이미 이를 활용해 실제 채팅 인터페이스를 제공합니다.',
        items: [
          '**어디에 있나:** iOS 18+에 내장 (Foundation Models 프레임워크는 iOS 26에 추가). 설정 → Apple Intelligence 및 Siri에서 활성화.',
          '**하드웨어 요구 사항:** iPhone 15 Pro / 15 Pro Max, iPhone 16 시리즈, iPhone 16e, iPhone 17 시리즈. 구형 iPhone (14 이하)은 Apple Intelligence를 지원하지 않습니다.',
          '**기기 내 기능:** 모든 텍스트 필드 내 작문 도구 (재작성, 요약, 교정), Mail 및 메시지에서 스마트 답장, 알림 요약, Genmoji 생성.',
          '**Foundation Models 프레임워크(iOS 26+):** 개발자가 몇 줄의 코드로 동일한 기기 내 모델에 직접 접근할 수 있는 네이티브 Swift API — Locally AI는 이를 통해 채팅 옵션으로 노출하며, Shortcuts의 "모델 사용" 작업도 이를 통해 프롬프트를 해당 모델, Private Cloud Compute, 또는 ChatGPT로 보낼 수 있습니다.',
          '**Private Cloud Compute:** 기기 내 모델 용량을 초과하는 작업의 경우 Apple Intelligence는 Private Cloud Compute (PCC)로 전환합니다 — 사용자 데이터가 유지되지 않는다는 암호화 보장과 함께 더 큰 모델을 실행하는 Apple 운영 서버. PCC는 옵트인이며 비활성화할 수 있습니다.',
          '**채팅 앱과의 관계:** Apple Intelligence는 대체제가 아닌 보완제입니다. 시스템 기능은 iOS 앱 내에서 텍스트 재작성 및 요약을 처리합니다; PocketPal AI, Private LLM, Locally AI, MLC Chat은 임의 질문을 위한 전용 채팅 인터페이스를 제공합니다 — 그리고 Locally AI는 이제 Apple 자체 모델에도 같은 종류의 인터페이스를 제공할 수 있습니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Apple Intelligence만 필요하다면 (이메일 재작성, 알림 요약), 독립 채팅 앱이 필요하지 않습니다. "양자 터널링을 간단한 용어로 설명해줘" 또는 "X에 대한 프로젝트 계획 만들어줘"와 같은 질문을 모델에게 하고 싶다면 채팅 앱을 설치하십시오 — PocketPal AI 같은 전용 앱이든, Apple 자체 기기 내 모델을 채팅 창 뒤에 배치할 수 있는 Locally AI든 상관없습니다.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'iPhone 모델별 권장 모델',
        content: '**iPhone의 RAM이 칩 세대가 아닌 모델 크기 제한을 결정합니다.** 6 GB iPhone (14 Pro, 15)은 1.7B 모델을 편안하게 실행할 수 있습니다; 8 GB 이상의 iPhone (15 Pro, 16 시리즈, 16e, 17 시리즈)은 3B–4B 모델을 편안하게, 7B 모델은 느리게 실행합니다. 모바일만이 아닌 모든 하드웨어의 더 넓은 모델 환경을 위해서는 [2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026)을 참조하십시오.',
        image: '/images/iphone-llm-apps-models-tier-en.svg',
        imageCaption: 'iPhone RAM별 LLM 모델 권장: 8 GB 이상 iPhone (15 Pro–17 Pro)에는 Phi-4 Mini 3.8B Q4_K_M, 8–20 tok/s; 6 GB iPhone (14 Pro, 비Pro)에는 Qwen3 1.7B Q4_K_M, 12–20 tok/s; iPhone SE (4 GB)는 권장하지 않음.',
        columns: ['iPhone 티어 (연도, RAM)', '권장 모델', '다운로드 크기', '예상 속도'],
        rows: [
          { 'iPhone 티어 (연도, RAM)': 'iPhone 17 Pro (2025, 12 GB)', '권장 모델': 'Phi-4 Mini 또는 Llama 3.2 3B (Q4_K_M)', '다운로드 크기': '~2.5–2.7 GB', '예상 속도': '~13–20 tok/초' },
          { 'iPhone 티어 (연도, RAM)': 'iPhone 16 Pro / 16 Pro Max / 16e (2024–2025, 8 GB)', '권장 모델': 'Phi-4 Mini (3.8B Q4_K_M)', '다운로드 크기': '~2.7 GB', '예상 속도': '~10–15 tok/초' },
          { 'iPhone 티어 (연도, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 GB)', '권장 모델': 'Phi-4 Mini (3.8B Q4_K_M)', '다운로드 크기': '~2.7 GB', '예상 속도': '~8–12 tok/초' },
          { 'iPhone 티어 (연도, RAM)': 'iPhone 14 Pro / Pro Max (2022, 6 GB)', '권장 모델': 'Qwen3 1.7B 또는 SmolLM 2 1.7B (Q4_K_M)', '다운로드 크기': '~1.1 GB', '예상 속도': '~15–20 tok/초' },
          { 'iPhone 티어 (연도, RAM)': 'iPhone 14 / 15 / 16 (비Pro, 6 GB)', '권장 모델': 'Qwen3 1.7B 또는 SmolLM 2 1.7B (Q4_K_M)', '다운로드 크기': '~1.1 GB', '예상 속도': '~12–18 tok/초' },
          { 'iPhone 티어 (연도, RAM)': 'iPhone SE / 구형 모델 (4 GB)', '권장 모델': '기기 내 LLM에는 권장하지 않음', '다운로드 크기': '—', '예상 속도': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '6 GB 구형 iPhone의 경우 Qwen3 1.7B가 2026년에 모델 크기와 품질의 최고 균형입니다. SmolLM 2 1.7B (HuggingFace)도 비슷합니다. 둘 다 일관된 짧은 응답 (1–3 단락)을 생성하지만 다단계 추론에는 어려움을 겪습니다. 6 GB iPhone에 Phi-4 Mini를 설치하지 마십시오 — 명목상 맞지만 iOS가 메모리 압박 시 앱을 닫을 것입니다.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: '배터리 소모 및 열 제한',
        content: '**iPhone에서의 기기 내 LLM 추론은 CPU/GPU 집약적이며 열을 발생시킵니다.** 활성 추론 (모델이 토큰 생성 중)은 ~3–5 W를 소비합니다; 지속적인 생성은 칩을 제한하고 iPhone 16 Pro에서 시간당 약 20–30%의 배터리를 소모합니다.',
        image: '/images/iphone-llm-apps-battery-thermal-en.svg',
        imageCaption: 'iPhone 기기 내 LLM 열 가이드: 활성 추론은 3–5 W를 소비하여 iPhone 16 Pro에서 시간당 ~20–30% 배터리를 소모합니다; 열 제한은 10–15분 후 속도를 30–50% 감소시킵니다 — 열 분산을 위해 기기를 단단한 표면 위에 앞면을 위로 놓으십시오.',
        items: [
          '**배터리 소모 (활성 채팅):** Phi-4 Mini를 실행하는 iPhone 16 Pro에서 시간당 ~20–30%. iPhone 17 Pro는 더 높은 최대 전력으로 인해 약간 더 빨리 소모되지만, 작업 부하를 더 빨리 완료하여 보상합니다.',
          '**열 제한은 ~10–15분의 연속 생성 후에 나타납니다.** 칩이 ~38°C 표면 온도에 도달하면 iOS가 클록 속도를 줄여 토큰/초가 30–50% 떨어집니다. 폰이 식으면 전체 속도가 복원됩니다.',
          '**완화:** 열 분산을 허용하기 위해 긴 추론 세션 중 iPhone을 단단한 표면 위에 앞면을 위로 놓으십시오 (손이나 주머니에 넣지 말고). 수동 방열판이 있는 케이스가 도움이 되지만 짧은 상호작용에는 거의 필요하지 않습니다.',
          '**팬텀 소모:** 생성 후 채팅 앱을 백그라운드에 열어두면 RAM은 할당되어 있지만 추론이 실행되지 않습니다 — 배터리 영향은 최소입니다. 앱을 완전히 닫으면 ~3 GB RAM이 해제됩니다.',
          '**추론 중 MagSafe 충전:** iPhone 17 Pro와 16 Pro에서는 허용됩니다 (둘 다 개선된 열 설계를 가집니다). iPhone 15 Pro에서는 충전과 추론의 조합이 더 빨리 열 한계에 도달할 수 있습니다 — 이후에 충전하는 것이 좋습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '직사광선이나 뜨거운 차에서 기기 내 LLM 추론을 실행하지 마십시오. 주변 열과 추론 부하의 조합이 몇 분 안에 칩을 열 한계를 넘어 밀어붙여 공격적인 제한과 잠재적으로 "iPhone이 식어야 합니다" 경고를 활성화합니다. 채팅 앱은 닫히지 않지만 생성이 크게 느려집니다.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts, Siri 및 사이드로딩',
        content: '**iOS 통합은 앱에 따라 크게 다릅니다.** Private LLM과 Locally AI 모두 Shortcuts 작업을 제공합니다; PocketPal AI와 MLC Chat은 2026년에 Shortcuts 작업이 없는 독립 채팅 앱입니다.',
        image: '/images/iphone-llm-apps-ios-integration-en.svg',
        imageCaption: '로컬 LLM 앱별 iOS 통합: Private LLM, Locally AI, Apple Intelligence는 Shortcuts를 지원합니다 (Private LLM은 Siri도 추가로 지원); PocketPal AI와 MLC Chat은 2026년 기준으로 Shortcuts 작업이 없는 독립 채팅 앱입니다.',
        items: [
          '**Private LLM**은 "Private LLM으로 텍스트 생성" Shortcuts 작업과 "Siri야, Private LLM에게 [질문] 물어봐" 음성 트리거를 노출합니다. 유료 채팅 앱 중 iOS와 가장 네이티브하게 통합되어 있습니다.',
          '**Locally AI**는 무료로 Shortcuts 작업을 제공하며, Foundation Models 통합을 통해 단축어를 Apple 자체 기기 내 모델로 라우팅할 수 있습니다 — 음성 트리거는 없지만 비용 없이 Shortcuts 자동화를 이용할 수 있습니다.',
          '**PocketPal AI**는 독립 채팅 앱입니다 — Shortcuts 작업 없음, Siri 통합 없음. 앱을 열고 채팅합니다. Shortcuts 지원 계획은 GitHub 이슈에서 추적되지만 게시되지 않았습니다.',
          '**MLC Chat**은 MLC LLM 프로젝트를 위한 참조 앱입니다 — iOS 통합 최소이며 2024년 말 이후 업데이트도 없습니다. Shortcuts 작업 없음.',
          '**LLM Farm**은 App Store에서 삭제되었으며 (2025년 8월), 소스에서 빌드하더라도 Shortcuts 작업이 없습니다.',
          '**Apple Intelligence**는 "모델 사용" 작업 (iOS 18.4+, iOS 26에서 Foundation Models 프레임워크와 함께 확장됨)을 통해 iOS Shortcuts와 통합됩니다. 이것은 프롬프트를 기기 내 모델, Private Cloud Compute, 또는 ChatGPT로 보냅니다 (구성 가능). 기기 내 출력은 다른 Shortcuts 작업으로 연결될 수 있습니다.',
          '**사이드로딩:** PocketPal AI, Private LLM, Locally AI, MLC Chat은 App Store에 있으며 사이드로딩이나 탈옥이 필요하지 않습니다; Apple Intelligence는 iOS에 내장되어 있습니다. LLM Farm은 예외로, 이제 설치하려면 Xcode에서 소스 빌드가 필요합니다. EU 사용자는 2026년에 DMA에 따라 App Store 앱을 대안 마켓플레이스를 통해 설치할 수도 있지만 앱 자체는 동일합니다.',
        ],
        promptExamples: [
          {
            label: 'Private LLM Shortcut: 선택된 텍스트 요약',
            text: '1. 작업: "선택된 텍스트 가져오기" (iOS Share Sheet 입력).\n2. 작업: "Private LLM으로 텍스트 생성" → 프롬프트: "다음 텍스트를 세 가지 핵심 포인트로 요약하십시오: [선택된 텍스트]" → 모델: Phi-4 Mini.\n3. 작업: "결과 보여주기" 또는 "클립보드에 복사".\nShare Sheet에 추가하여 모든 앱의 선택된 텍스트에 대해 완전히 오프라인으로 실행하십시오.',
          },
          {
            label: 'Apple Intelligence Shortcut: 어조 재작성',
            text: '1. 작업: "클립보드 가져오기".\n2. 작업: "모델 사용" → 모델: 기기 내 → 프롬프트: "이것을 전문적이고 간결한 어조로 재작성하십시오: [클립보드]".\n3. 작업: "클립보드에 복사".\n잠금 화면 위젯에 할당하여 복사한 내용을 한 번의 탭으로 재작성하십시오.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '운전 중이나 요리 중 핸즈프리 사용을 위해 Private LLM의 "Siri야, Private LLM에게 물어봐"가 폰을 터치하지 않고 작동하는 유일한 기기 내 옵션입니다. Apple Intelligence는 Siri를 통해 음성을 지원하지만 시스템 작업 (작문, 요약, 앱 작업)에만 — 채팅 앱처럼 일반적인 Q&A를 노출하지 않습니다.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '**iPhone RAM이 허용하는 것보다 더 큰 모델 설치.** 8 GB iPhone에서 7B 모델은 ~3–5 토큰/초로 생성하며 iOS가 다른 앱을 위해 메모리를 회수할 때 닫힙니다. iPhone 티어에 권장된 모델을 사용하십시오 (8 GB 기기에는 3B–4B, 6 GB 기기에는 1.7B).',
          '**기기 내 모델에서 클라우드 AI 품질을 기대함.** Phi-4 Mini (3.8B)는 크기 대비 인상적이지만 GPT-5.5가 아닙니다. 채팅, 요약, 작문, 빠른 질문에 사용하십시오 — 다단계 추론, 복잡한 코드 생성이나 뉘앙스 있는 창작 작문에는 사용하지 마십시오.',
          '**직사광선이나 뜨거운 차에서 추론 실행.** 열 제한은 몇 분 안에 나타납니다. 생성이 30–50% 느려지고 "iPhone이 식어야 합니다" 경고가 나타날 수 있습니다. 주변 온도에서 추론을 실행하십시오.',
          '**각각 3 GB 모델이 있는 채팅 앱 3개 이상 설치.** 중복 모델에 ~10 GB 저장소를 소비하게 됩니다. 앱 하나와 모델 하나를 선택하고; 필요한지 확실해질 때까지 나머지를 삭제하십시오.',
          '**Apple Intelligence에 채팅 인터페이스가 전혀 없다고 가정.** iOS 18까지는 사실이었지만, iOS 26부터는 Locally AI 같은 앱이 Foundation Models 프레임워크를 통해 Apple의 기기 내 모델을 실제 채팅 창 뒤에 배치할 수 있습니다. 시스템 기능(작문 도구, 스마트 답장) 자체는 여전히 채팅 UI가 아닙니다.',
          '**App Store에서 LLM Farm을 찾기.** 2025년 8월에 삭제되었습니다. App Store에서 검색하는 것은 시간 낭비입니다; 동일한 무료/유연한 사용 사례에는 PocketPal AI를 사용하거나, mirostat 제어가 특별히 필요하다면 Xcode에서 LLM Farm을 소스에서 빌드하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (오픈 소스 iOS 앱).',
          'Private LLM — [App Store 목록](https://apps.apple.com) 및 개발자 문서.',
          'Locally AI — [App Store 목록](https://apps.apple.com) (LM Studio 팀, Apple MLX 기반).',
          'MLC Chat / MLC LLM 프로젝트 — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (Metal 가속 iOS 배포).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (오픈 소스 iOS 앱; 프로젝트 README에 따르면 App Store/TestFlight 목록은 일시적으로 이용 불가).',
          'Apple Intelligence 및 기기 내 기반 모델 — [Apple Machine Learning Research](https://machinelearning.apple.com) 및 Apple Developer 문서 (Foundation Models 프레임워크, iOS 26에서 도입).',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'iPhone이 정말로 7B 모델을 실행할 수 있습니까?',
            a: '기술적으로는 iPhone 15 Pro 이상 (8 GB RAM)에서 가능하지만 사용 가능한 속도는 아닙니다. iPhone 16 Pro에서 7B Q4 모델은 ~3–5 토큰/초로 생성합니다 — 채팅에는 답답합니다. iOS는 또한 다른 앱이 메모리를 필요로 할 때 앱을 닫는 경향이 있습니다. 일상적인 기기 내 채팅에는 3B–4B 모델 (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B)을 사용하십시오. 7B+ 품질을 위해서는 Ollama를 실행하는 홈 Mac 또는 PC에 원격으로 연결하십시오.',
          },
          {
            q: '로컬 AI가 iPhone 배터리를 소모합니까?',
            a: '예 — 활성 추론은 ~3–5 W를 소비하고 iPhone 16 Pro에서 시간당 약 20–30%의 배터리를 소모합니다. 가끔 사용 (몇 개의 프롬프트)의 경우 영향이 작습니다. 지속적인 사용 (긴 대화, 여러 요약 작업)의 경우 iPhone을 연결된 상태로 유지하십시오. 활성 추론 없이 RAM에 저장된 모델 자체는 배터리에 최소한의 영향을 미칩니다.',
          },
          {
            q: '로컬 AI를 사용하면 iPhone이 뜨거워집니까?',
            a: '예, 약 10–15분의 연속 생성 후에. 칩 표면 온도가 ~38°C에 도달하고 iOS가 클록 속도를 줄여 토큰/초가 30–50% 떨어집니다. 최소화하려면: 긴 세션 중 iPhone을 단단한 표면 위에 앞면을 위로 놓고 (손이 아닌), 직사광선을 피하십시오. 짧은 상호작용 (5분 미만)은 거의 눈에 띄는 열을 일으키지 않습니다.',
          },
          {
            q: '로컬 모델과 Siri를 사용할 수 있습니까?',
            a: '예, Private LLM (₩7,700 일회 구매)을 사용할 때. "Siri야, Private LLM에게 [질문] 물어봐"라고 말하면 프롬프트를 기기 내 모델로 보내고 Siri가 응답을 큰 소리로 읽습니다 — 완전히 오프라인입니다. PocketPal AI, Locally AI, MLC Chat은 2026년에 Siri 음성 통합이 없지만, Locally AI는 Shortcuts 자동화를 지원합니다. Apple Intelligence는 Siri와 통합되지만 시스템 작업 (작문, 요약, 앱 작업)에만 — 일반 Q&A에는 해당하지 않습니다.',
          },
          {
            q: '이 앱들이 iPhone SE나 구형 iPhone에서 작동합니까?',
            a: '제한이 있습니다. iPhone SE (4 GB RAM)는 2026년에 기기 내 LLM의 실용적인 임계값 미만입니다. iPhone 14 / 15 (비Pro, 6 GB RAM)는 1.7B 모델 (Qwen3 1.7B, SmolLM 2 1.7B)을 실행할 수 있지만 3B+는 아닙니다. iPhone 14 Pro와 15 Pro (6–8 GB RAM)는 Phi-4 Mini와 같은 3B 모델을 8–12 토큰/초로 실행할 수 있습니다. 구형 iPhone의 경우 가장 좋은 옵션은 Ollama를 실행하는 홈 Mac 또는 PC에 원격으로 연결하는 것입니다.',
          },
          {
            q: 'iPhone과 Mac 간에 채팅 기록을 동기화할 수 있습니까?',
            a: 'PocketPal AI, Private LLM, MLC Chat에서는 지원되지 않습니다 — 채팅 기록은 각 기기에 로컬로 저장되며 iCloud 동기화가 없습니다. Private LLM과 Locally AI는 모두 Mac에서도 네이티브로 작동하는 유니버설 구매/다운로드이지만, 그래도 iPhone과 Mac 버전 사이에서 기록이 동기화되지는 않습니다. 기기 간 채팅 기록을 위한 실용적인 접근 방식은 홈 Mac에서 Open WebUI를 실행하고 iPhone 및 Mac 브라우저에서 접근하는 것입니다 — Open WebUI는 채팅 기록을 서버에 저장합니다.',
          },
          {
            q: '이 앱들이 App Store 외부에서 이용 가능합니까?',
            a: 'PocketPal AI는 오픈 소스이며 Xcode로 소스 코드에서 빌드할 수 있지만 App Store 버전이 표준 배포입니다. LLM Farm은 이제 소스 빌드가 필수인 예외입니다 — 2025년 8월 App Store와 TestFlight에서 삭제되었습니다. Private LLM, Locally AI, MLC Chat은 App Store에만 있습니다. EU 사용자는 2026년에 DMA에 따라 App Store 앱을 대안 마켓플레이스를 통해 설치할 수 있지만 내용은 동일합니다.',
          },
          {
            q: '탈옥이 필요한 것이 있습니까?',
            a: '아니요. PocketPal AI, Private LLM, Locally AI, MLC Chat, Apple Intelligence 모두 표준 iOS에서 작동합니다. Xcode에서 LLM Farm을 컴파일하는 것도 탈옥이 필요하지 않습니다 — 탈옥 익스플로잇이 아닌 개발자용 표준 사이드로딩을 사용합니다. 이들 앱 중 어느 것도 탈옥이 필요하거나 권장되지 않습니다.',
          },
          {
            q: 'iOS Shortcuts에서 로컬 AI를 사용할 수 있습니까?',
            a: '예, Private LLM ("Private LLM으로 텍스트 생성" 작업), Locally AI (무료 Shortcuts 작업), Apple Intelligence ("모델 사용" 작업, iOS 18.4+, iOS 26에서 확장)를 통해. PocketPal AI와 MLC Chat은 2026년에 Shortcuts 작업이 없습니다. Locally AI는 Shortcuts 지원과 Apple 자체 기기 내 모델 접근을 모두 무료로 제공하는 유일한 옵션입니다.',
          },
          {
            q: '로컬 AI가 iPhone의 ChatGPT 앱과 어떻게 비교됩니까?',
            a: '기기 내 모델 (Phi-4 Mini, Llama 3.2 3B)은 복잡한 추론, 일반 세계 지식, 멀티모달 작업에서는 여전히 최첨단 클라우드 모델에 크게 못 미치지만, 단순한 쿼리에서는 더 빠르고 (네트워크 왕복 없음) 완전히 사적입니다. 솔직한 교환: 일상적이고 사적인 작업에는 로컬 AI; 가끔 어려운 질문에는 ChatGPT 등 클라우드 앱. 2026년의 많은 사용자는 둘 다 가지고 쿼리에 따라 선택합니다.',
          },
          {
            q: 'LLM Farm이 App Store에 없어도 여전히 안전하게 사용할 수 있습니까?',
            a: '소스 코드는 GitHub에 공개되어 있고 2026년까지 이슈 활동이 계속되고 있어 방치된 것은 아니지만, 소스에서 빌드하여 사이드로딩하면 더 이상 Apple의 App Store 심사 절차를 거치지 않습니다. mirostat 샘플링 제어가 특별히 필요하지 않다면, PocketPal AI가 동일한 무료/유연/오픈 소스 사용 사례를 다루면서도 Apple의 표준 심사를 거쳐 App Store에 남아 있습니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 동등 항목을 다루는 형제 기사 (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[태블릿에서 AI 실행 방법: iPad 및 Android (2026)](/ko/power-local-llm/run-ai-on-tablet-ipad-android) — 태블릿을 가진 독자를 위한 플랫폼 가이드.',
          '[2026년 모바일 최고의 LLM: Phi-4 Mini vs Gemma 3 vs SmolLM](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 이 앱들에서 무엇을 실행할지 선택하기 위한 모델 측 보완 기사.',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 모바일뿐만 아닌 모든 하드웨어 수준을 커버하는 더 넓은 모델 환경.',
          '[폰에서 로컬 음성 보조 만들기: Whisper + 로컬 LLM](/ko/power-local-llm/voice-assistant-local-mobile-offline) — 오프라인 음성 입력/출력으로 이 앱들 확장.',
          '[저사양 PC를 위한 최고의 로컬 AI 앱](/ko/power-local-llm/best-local-ai-app-low-end-pc) — 더 강력한 홈 머신에 원격으로 연결하려는 사용자를 위한 데스크톱 대안.',
          '[2026년 로컬 LLM 소프트웨어 디렉토리](/ko/power-local-llm/local-llm-software-directory-2026) — 모든 플랫폼에서 알 가치가 있는 모든 로컬 LLM 도구의 디렉토리.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '2026년 iPhone용 최고의 로컬 LLM 앱 (WiFi 없이 AI 실행)',
      description: '2026년 iPhone에서 실제 LLM을 기기 내에서 실행하는 5가지 앱. iPhone 16 Pro와 17 Pro에서 테스트된 PocketPal AI, Private LLM, Locally AI, MLC Chat. 속도, 개인 정보 보호, 모델 라이브러리 비교.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/best-local-llm-apps-iphone-2026',
      inLanguage: 'ko',
      datePublished: '2026-05-08',
      dateModified: '2026-09-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Beginner',
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-09-01',
    last_full_refresh: '2026-09-01',
    next_refresh_due: '2027-03-01',
    theme: 'Mobile & Edge LLMs',
    title: 'Os melhores apps de LLM local para iPhone em 2026 (execute IA sem WiFi)',
    seoTitle: 'Melhores apps LLM local iPhone 2026',
    intro:
      'Cinco apps para iPhone executam LLMs reais completamente no dispositivo em 2026: PocketPal AI, Private LLM, Locally AI (da LM Studio), MLC Chat e Apple Intelligence (integrado ao sistema). Todos funcionam sem WiFi depois que o modelo é baixado. Este guia os classifica por tokens por segundo no iPhone 16 Pro e iPhone 17 Pro, biblioteca de modelos, gerenciamento de RAM, privacidade e integração com o iOS — e explica por que o LLM Farm saiu do ranking.',
    metaDescription:
      'Cinco apps de iPhone que executam LLMs no dispositivo em 2026: PocketPal AI, Private LLM, Locally AI e MLC Chat no iPhone 16/17 Pro. Velocidade e privacidade.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-pt.webp',
    twitterDescription:
      'IA local no iPhone em 2026: PocketPal AI (grátis), Private LLM (R$ 29,90 pagamento único, Siri), Locally AI (LM Studio, MLX), MLC Chat (Metal mas sem atualizações). Todos funcionam sem conexão depois de baixar o modelo.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'Usuários de iPhone que querem executar IA de forma privada no dispositivo sem assinatura na nuvem, incluindo viajantes, pessoas preocupadas com privacidade e desenvolvedores que exploram a inferência no dispositivo.',
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
    ],
    leadAnswerBlock:
      '**Para a maioria dos usuários de iPhone em 2026, instale o PocketPal AI na App Store e baixe o Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** É gratuito, de código aberto, funciona no iPhone 14 Pro e modelos mais recentes (qualquer iPhone com 6 GB+ de RAM) e gera ~10–15 tokens/seg no iPhone 16 Pro para o uso diário. Para integração com Siri e Shortcuts, o Private LLM é a opção paga mais sólida (R$ 29,90 pagamento único, cobre iPhone, iPad e Mac). O Locally AI — agora desenvolvido pela equipe da LM Studio — é a alternativa gratuita e moderna baseada em Apple MLX, com suporte a Shortcuts e acesso ao modelo de base no dispositivo da Apple. O MLC Chat continua sendo o app de referência para Metal, mas não recebe atualizações desde o final de 2024. O LLM Farm foi removido da App Store em agosto de 2025 e agora só pode ser instalado compilando o código-fonte. O Apple Intelligence também executa modelos no dispositivo, mas é integrado ao sistema e não é um app de chat; ele complementa esses apps em vez de competir com eles.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor app de LLM local para iPhone em 2026?',
        answer:
          'O PocketPal AI é a melhor opção gratuita para a maioria dos usuários de iPhone: de código aberto, instalação pela App Store, compatível com qualquer modelo GGUF do Hugging Face e executa o Phi-4 Mini (3.8B) a ~10–15 tokens/seg no iPhone 16 Pro. O Private LLM é a opção paga mais sólida (R$ 29,90 pagamento único, iPhone+iPad+Mac) com integração de iOS Shortcuts e Siri. O Locally AI, desenvolvido pela equipe da LM Studio, é a opção gratuita com Apple MLX, suporte a Shortcuts e acesso ao modelo de base no dispositivo da Apple. O MLC Chat tem aceleração Metal, mas está sem atualizações desde o final de 2024. O Apple Intelligence também executa modelos no dispositivo, mas é integrado ao sistema e complementa esses apps.',
        bullets: [
          'PocketPal AI — gratuito, código aberto, App Store. A melhor opção padrão para a maioria dos usuários. Compatível com qualquer modelo GGUF.',
          'Private LLM — R$ 29,90 pagamento único (iPhone+iPad+Mac). A melhor opção paga. iOS Shortcuts + integração com Siri.',
          'Locally AI — gratuito, da equipe da LM Studio. Motor Apple MLX, suporte a Shortcuts, acesso aos Apple Foundation Models.',
          'MLC Chat — gratuito, projeto MLC LLM. Com aceleração Metal, mas sem atualizações do app desde o final de 2024 (biblioteca de modelos desatualizada).',
          'Apple Intelligence — integrado ao sistema, não é um app independente. Modelo 3B no dispositivo utilizado por Mail, Mensagens e Notas.',
          'Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — funciona a ~10–15 tokens/seg.',
          'iPhones mais antigos (14 Pro): Qwen3 1.7B ou SmolLM 2 1.7B — cabe em 6 GB de RAM e gera ~15–20 tokens/seg.',
        ],
        updatedDate: '2026-09-01',
      },
    },
    toc: [
      { label: 'Pontos-chave', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Qual app instalar primeiro no iPhone?', anchor: '#which-app' },
      { label: 'Tabela comparativa de apps para iPhone', anchor: '#comparison-table' },
      { label: 'PocketPal AI: opção gratuita e de código aberto', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: opção paga com integração iOS', anchor: '#private-llm' },
      { label: 'Locally AI: app MLX gratuito da LM Studio', anchor: '#locally-ai' },
      { label: 'MLC Chat: otimização para Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm: removido mas ainda configurável', anchor: '#llm-farm' },
      { label: 'Apple Intelligence: IA no dispositivo integrada ao sistema', anchor: '#apple-intelligence' },
      { label: 'Modelos conforme o modelo de iPhone', anchor: '#models-by-tier' },
      { label: 'Consumo de bateria e throttling térmico', anchor: '#battery-heat' },
      { label: 'iOS Shortcuts, Siri e sideloading', anchor: '#ios-integration' },
      { label: 'Erros frequentes', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**PocketPal AI é a melhor opção gratuita por padrão.** Código aberto, instalação pela App Store, compatível com qualquer modelo GGUF do Hugging Face. Executa o Phi-4 Mini a ~10–15 tokens/seg no iPhone 16 Pro. Ponto de partida recomendado para a maioria dos usuários de iPhone.',
          '**Private LLM é a melhor opção paga (R$ 29,90 pagamento único, sem assinatura).** Uma única compra cobre iPhone, iPad e Mac com Compartilhamento familiar. Biblioteca de modelos curada, integração com iOS Shortcuts e suporte de Siri "E aí Siri, pergunte ao Private LLM".',
          '**Locally AI é a alternativa gratuita baseada em MLX, agora desenvolvida pela equipe da LM Studio.** Executa modelos Llama, Gemma, Qwen e DeepSeek em Apple MLX, funciona com iOS Shortcuts e pode expor o próprio modelo de base no dispositivo da Apple como interface de chat.',
          '**MLC Chat tem aceleração Metal, mas está parado.** Seu motor MLC LLM continua gerando ~25–35% mais tokens/seg que apps baseados em llama.cpp no mesmo hardware, mas o app não é atualizado desde o final de 2024, então sua biblioteca de modelos é anterior ao Phi-4 Mini e ao Gemma 3.',
          '**LLM Farm foi removido da App Store em agosto de 2025.** O próprio README o descreve como "temporariamente indisponível". Continua de código aberto e compilável a partir do código-fonte, e segue sendo a opção mais configurável (mirostat, templates de chat) para desenvolvedores.',
          '**Apple Intelligence está no dispositivo, mas não é um app independente.** O modelo de base ~3B da Apple potencializa funções do sistema (Ferramentas de escrita, Resposta inteligente, Resumos de notificações). Desde o iOS 26, apps de terceiros podem chamá-lo pelo framework Foundation Models, e o Shortcuts pode acioná-lo com a ação "Usar modelo".',
          '**Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Melhor equilíbrio entre qualidade e velocidade para o nível de 8 GB+ de RAM. iPhones mais antigos com 6 GB de RAM (iPhone 14 Pro): Qwen3 1.7B ou SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Apps comparados:** PocketPal AI, Private LLM, Locally AI (da LM Studio), MLC Chat, Apple Intelligence (sistema) — além do LLM Farm, removido da App Store em agosto de 2025.',
          '**Dispositivos de teste:** iPhone 16 Pro (A18 Pro, 8 GB RAM) e iPhone 17 Pro (A19 Pro, 12 GB RAM).',
          '**Motores de inferência:** llama.cpp (PocketPal AI, LLM Farm), Apple MLX (Locally AI), MLC LLM com Metal (MLC Chat), runtime no dispositivo proprietário (Private LLM, Apple Intelligence).',
          '**iPhone mínimo para modelos 3B+:** iPhone 14 Pro (A16, 6 GB RAM) para 1.7B; qualquer iPhone de 8 GB+ (15 Pro, série 16, 16e, série 17) para 3B–4B.',
          '**Melhor app gratuito:** PocketPal AI — App Store, código aberto, flexibilidade de modelos.',
          '**Melhor app pago:** Private LLM — R$ 29,90 pagamento único (iPhone+iPad+Mac), suporte de Shortcuts + Siri.',
          '**Sem conexão:** Os cinco funcionam completamente sem conexão depois que o modelo é baixado; sem chamadas à nuvem.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Qual app instalar primeiro no iPhone?',
        content:
          '**Para a maioria dos usuários: PocketPal AI pela App Store e depois baixe o Phi-4 Mini (3.8B Q4_K_M).** Essa combinação funciona no iPhone 14 Pro e modelos mais recentes, não custa nada e produz resultados úteis para o chat diário, o resumo e a escrita rápida. Escolha outro app só quando você tiver uma necessidade específica que ele não cobre.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-pt.webp',
        imageCaption: 'Qual app de IA local instalar no iPhone: PocketPal AI (opção gratuita por padrão), Private LLM (Siri + Shortcuts), Locally AI (MLX gratuito, equipe da LM Studio), MLC Chat (rápido no Metal mas parado), Apple Intelligence (integrado ao iOS).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para a maioria dos usuários de iPhone em 2026, instale o PocketPal AI (grátis, App Store) e baixe o Phi-4 Mini — ele cobre o chat diário, resumo e escrita em qualquer iPhone com 6 GB+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Cinco apps executam IA completamente no seu iPhone em 2026. O PocketPal AI é o melhor ponto de partida gratuito — instale-o, baixe um arquivo de modelo de 2.7 GB uma única vez e você terá um assistente de chat privado que funciona no trem sem WiFi. O Private LLM é a opção paga se você quer que a Siri converse com o modelo local. O Locally AI, da equipe da LM Studio, é a alternativa gratuita e moderna com suporte a Shortcuts. O MLC Chat é rápido, mas não é mais atualizado. O Apple Intelligence é integrado ao iOS mas não é um app de chat. O PocketPal AI cobre 90% dos casos de uso.',
          },
        ],
        decisionBlock: {
          title: 'Decisão: qual app de IA local para iPhone?',
          localIf: [
            'Você quer uma IA de chat gratuita que funcione sem conexão → PocketPal AI',
            'Você quer que a Siri converse com o seu modelo local → Private LLM',
            'Você quer um app MLX gratuito com Shortcuts e acesso aos Apple Foundation Models → Locally AI',
            'Você aceita uma biblioteca de modelos mais antiga em troca da velocidade Metal máxima → MLC Chat',
            'Você só precisa de assistência de escrita no Mail / Mensagens / Notas → Apple Intelligence (integrado)',
          ],
          cloudIf: [
            'Você precisa de qualidade de modelo 70B+ (Llama 3.3 70B, nível GPT-5.5) → use a nuvem ou conecte-se remotamente a uma máquina doméstica',
            'Você precisa de acesso a GPT-5.5, Claude Opus ou Gemini especificamente → apps na nuvem (não disponíveis localmente)',
            'Você precisa de visão em tempo real ou saída multimodal além do texto → nuvem (o multimodal no dispositivo é limitado em 2026)',
          ],
          quick: [
            'Grátis + funciona para 90% dos usuários: PocketPal AI',
            'Pago + integração nativa iOS: Private LLM',
            'Grátis + ecossistema LM Studio: Locally AI',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Instale o PocketPal AI primeiro, mesmo que você planeje pagar pelo Private LLM mais tarde. Use o PocketPal AI para verificar se a inferência no dispositivo no seu modelo de iPhone é rápida o suficiente para o seu caso de uso. Se for, decida se a integração com iOS Shortcuts e Siri do Private LLM vale R$ 29,90. Se não, você terá economizado esse valor antes de pagar.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa de apps para iPhone',
        content:
          '**Os cinco apps se diferenciam em três eixos que importam à maioria dos usuários: custo, flexibilidade de modelos e integração com o iOS.** As diferenças de velocidade existem, mas são menores que a diferença entre qualquer um desses apps e um LLM na nuvem.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-pt.webp',
        imageCaption: 'Comparativo de apps LLM local para iPhone: PocketPal AI (grátis, ~10–15 tok/s), Locally AI (grátis, Apple MLX + Shortcuts), MLC Chat (grátis, ~14–20 tok/s com aceleração Metal, parado desde o final de 2024), Private LLM (R$ 29,90 pagamento único, Siri + Shortcuts), Apple Intelligence (integrado ao sistema).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O PocketPal AI é a melhor opção gratuita por padrão, o Private LLM é a melhor opção paga, o Locally AI é a opção MLX gratuita da equipe da LM Studio, o MLC Chat é rápido no Metal mas está parado, e o Apple Intelligence é integrado ao sistema.',
          },
          {
            type: 'plain-terms',
            text: 'A escolha geralmente se reduz a três coisas: você quer pagar pela integração com Siri (Private LLM)?, você quer o ecossistema da LM Studio com Shortcuts de graça (Locally AI)? ou você quer velocidade bruta máxima aceitando uma biblioteca de modelos mais antiga (MLC Chat)? Para todo o resto, o PocketPal AI é a opção padrão. Os dados da tabela assumem quantização Q4_K_M — o padrão para inferência móvel em 2026.',
          },
        ],
        columns: ['App', 'Link', 'Preço', 'Tokens/seg (Phi-4 Mini, 16 Pro)', 'Privacidade', 'Ideal para'],
        rows: [
          { 'App': 'PocketPal AI', 'Link': '[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)', 'Preço': 'Grátis (código aberto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacidade': 'Só local, sem telemetria', 'Ideal para': 'Opção gratuita por padrão para a maioria' },
          { 'App': 'Private LLM', 'Link': '[privatellm.app](https://privatellm.app)', 'Preço': 'R$ 29,90 pagamento único', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–14', 'Privacidade': 'Só local, analytics opt-in', 'Ideal para': 'iOS Shortcuts + integração Siri' },
          { 'App': 'Locally AI', 'Link': '[lmstudio.ai/locally](https://lmstudio.ai/locally)', 'Preço': 'Grátis (equipe LM Studio)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D — catálogo MLX (sem Phi-4)', 'Privacidade': 'Só local, sem coleta de dados', 'Ideal para': 'MLX + Shortcuts, vínculo com LM Studio' },
          { 'App': 'MLC Chat', 'Link': '[llm.mlc.ai](https://llm.mlc.ai)', 'Preço': 'Grátis (código aberto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/D — biblioteca anterior ao Phi-4', 'Privacidade': 'Só local, sem telemetria', 'Ideal para': 'Velocidade Metal, modelos antigos' },
          { 'App': 'LLM Farm', 'Link': '[github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)', 'Preço': 'Grátis (só código-fonte)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacidade': 'Só local, sem telemetria', 'Ideal para': 'Usuários avançados (removido da App Store)' },
          { 'App': 'Apple Intelligence', 'Link': '[apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)', 'Preço': 'Grátis (integrado ao iOS)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/A (função do sistema)', 'Privacidade': 'Local + Private Cloud Compute opt-in', 'Ideal para': 'Assistência em Mail, Mensagens, Notas' },
        ],
        note:
          '**Nota sobre Apple Neural Engine (ANE), Metal e MLX:** PocketPal AI e LLM Farm usam llama.cpp com Metal Performance Shaders para a inferência, que é executada na GPU. O MLC Chat usa MLC LLM com uma otimização Metal mais profunda, alcançando 25–35% mais tokens/seg no mesmo hardware para os modelos que suporta. O Locally AI usa o Apple MLX, o framework open source de arrays da própria Apple, alcançando eficiência de GPU comparável no Apple Silicon. O Apple Intelligence usa o ANE especificamente para o modelo de sistema ~3B, que é mais eficiente energeticamente mas menos flexível que a inferência baseada em Metal. Desde o iOS 26, apps de terceiros podem chamar esse modelo de sistema pelo framework Foundation Models — é exatamente o que o Locally AI faz —, mas modelos GGUF/MLX personalizados ainda não conseguem apontar diretamente para o ANE.',
        callouts: [
          {
            type: 'tip',
            text: 'Os números de tokens/seg assumem quantização Q4_K_M (o padrão para inferência móvel em 2026) e um iPhone ocioso sem outros apps pesados em execução. Os apps em segundo plano reduzem o desempenho em 10–30%. Os tokens/seg no iPhone 17 Pro são aproximadamente 20–30% mais altos que no iPhone 16 Pro graças às melhorias do A19 Pro.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: opção gratuita e de código aberto',
        content:
          '**O PocketPal AI é o ponto de partida recomendado para a maioria dos usuários de iPhone em 2026.** É gratuito, de código aberto (GitHub: a-ghorbani/pocketpal-ai), disponível na App Store e compatível com qualquer modelo GGUF do Hugging Face. O app usa llama.cpp internamente com otimizações para Apple Silicon.',
        items: [
          '**O que é:** um app iOS que executa modelos GGUF localmente usando llama.cpp. Sem assinatura, sem telemetria, sem conta necessária.',
          '**Instalação:** App Store → "PocketPal AI". Download gratuito.',
          '**Adicionar um modelo:** no app, toque em Modelos → "Adicionar do Hugging Face" → pesquise (p. ex. "phi-4-mini-instruct-Q4_K_M") → toque para baixar. O modelo é armazenado no armazenamento local do app (~2.7 GB para Phi-4 Mini Q4).',
          '**Velocidade de geração (iPhone 16 Pro):** Phi-4 Mini ~10–15 tok/seg, Llama 3.2 3B ~12–18 tok/seg, Gemma 3 4B ~7–10 tok/seg, Qwen3 1.7B ~18–24 tok/seg.',
          '**Ideal para:** usuários que querem um app de chat gratuito, instalável pela App Store, sem conta, compatível com qualquer modelo GGUF publicado pela comunidade.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O seletor de modelos do PocketPal AI tem um filtro "Recomendados" que mostra modelos verificados para caber na RAM do seu dispositivo. Para um iPhone 16 Pro (8 GB de RAM), o seletor recomenda variantes Q4_K_M de modelos de até ~4B parâmetros. Confie neste filtro — executar um modelo grande demais faz o iOS fechar o app no meio da resposta.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: opção paga com integração iOS',
        content:
          '**O Private LLM é a opção paga mais sólida para iPhone em 2026 (R$ 29,90 pagamento único, sem assinatura).** Está disponível apenas na App Store e vem com uma biblioteca curada de modelos otimizados. O seu diferencial é a integração com o iOS: ações de Shortcuts e um comando de voz "E aí Siri, pergunte ao Private LLM".',
        items: [
          '**O que é:** um app iOS pago com biblioteca de modelos curada e integração profunda com o iOS. Usa um runtime no dispositivo proprietário otimizado para Apple Silicon.',
          '**Instalação:** App Store → "Private LLM". Compra única R$ 29,90 (sem assinatura).',
          '**Biblioteca de modelos curada:** ~30 modelos pré-testados e otimizados para iPhone, incluindo Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct e várias variantes sem censura. Menos flexibilidade que o PocketPal AI, mas sem risco de instalar um modelo que trave.',
          '**iOS Shortcuts:** o Private LLM expõe uma ação "Gerar texto com Private LLM" que você pode encadear em automações de Shortcuts. Útil para acionar a IA local a partir de um botão na sua tela inicial ou por meio de etiquetas NFC.',
          '**Integração com Siri:** "E aí Siri, pergunte ao Private LLM [sua pergunta]" envia o prompt ao modelo no dispositivo e a Siri lê a resposta em voz alta. Funciona sem conexão à internet. A latência é maior que na interface de chat (~3–5 segundos antes de o áudio começar).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O Private LLM é uma compra universal: o preço único de R$ 29,90 cobre iPhone, iPad e Mac em uma única compra, e o Compartilhamento familiar da Apple estende isso a até seis membros. Sem assinatura nem compras dentro do app — o preço exibido é o custo total.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: app MLX gratuito da LM Studio',
        content:
          '**O Locally AI é um app de chat gratuito e focado em privacidade, agora desenvolvido pela equipe da LM Studio, construído sobre o framework MLX da própria Apple em vez de llama.cpp.** É o mais novo concorrente sério nessa categoria e o único app deste guia que expõe o modelo de base no dispositivo da Apple como interface de chat.',
        items: [
          '**O que é:** um app iOS/iPadOS/macOS que usa Apple MLX para inferência, desenvolvido pela equipe por trás do app de desktop LM Studio.',
          '**Instalação:** App Store → "Locally AI". Grátis, sem necessidade de conta, 100% offline.',
          '**Biblioteca de modelos:** Llama 3.2, Gemma 2/3/4, Qwen 3, DeepSeek, LFM 2.5, Bonsai, Ministral 3 e Apple Foundation Models — um catálogo mais amplo e atual que o do MLC Chat.',
          '**iOS Shortcuts:** expõe uma ação de Shortcuts gratuitamente, no mesmo nível do suporte de automação do Private LLM.',
          '**LM Link:** um recurso opcional que se conecta ao LM Studio rodando em um Mac por uma conexão criptografada ponta a ponta, permitindo que o app do iPhone recorra a um modelo maior em uma máquina doméstica quando necessário.',
          '**Requisitos:** iOS/iPadOS 18.1+ (as vantagens de eficiência do Apple Silicon aparecem mais a partir do iPhone 15 Pro).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O Locally AI é o único app deste guia capaz de colocar o próprio modelo de base no dispositivo da Apple atrás de uma janela de chat comum — útil para testar o que o modelo do Apple Intelligence consegue fazer sem navegar pelos menus de Ferramentas de escrita. Para a flexibilidade de GGUF de terceiros, o PocketPal AI ainda tem o catálogo de modelos mais amplo.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: otimização para Apple Silicon',
        content:
          '**O MLC Chat (do projeto MLC LLM) continua sendo o app de referência para aceleração Metal, mas o app em si não é atualizado desde o final de 2024.** É gratuito, de código aberto e executa modelos compilados pela cadeia de ferramentas MLC LLM em vez de GGUF padrão — essa exigência de compilação também é o motivo pelo qual seu catálogo não acompanhou o PocketPal AI nem o Locally AI.',
        items: [
          '**O que é:** o app iOS de referência do projeto MLC LLM, que demonstra a inferência acelerada por Metal do MLC LLM no Apple Silicon.',
          '**Instalação:** App Store → "MLC Chat". Grátis.',
          '**Vantagem de velocidade (a nível de arquitetura):** o motor acelerado por Metal do MLC LLM gera ~25–35% mais rápido que apps baseados em llama.cpp no mesmo iPhone para os modelos que ambos suportam — mas a própria lista de modelos do app é anterior a opções atuais como Phi-4 Mini e Gemma 3, então essa vantagem não pode ser testada em 2026 sem compilar você mesmo.',
          '**Biblioteca de modelos:** limitada aos modelos que o projeto MLC LLM compilou antes de o app ficar parado — Llama 3.2 3B, RedPajama e modelos semelhantes de 2024. Nem todo GGUF do Hugging Face funciona, e nenhum modelo pequeno da geração atual está na versão da App Store.',
          '**Ideal para:** desenvolvedores já investidos na cadeia de ferramentas MLC LLM e dispostos a compilar seu próprio modelo, ou que precisam especificamente de um dos modelos já incluídos de antes de 2025.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Como a versão da App Store do MLC Chat não é atualizada desde o final de 2024, não espere ver Phi-4 Mini, Qwen3 ou Gemma 3 no seletor de modelos. Se você quer modelos da geração atual com eficiência de GPU nível Metal hoje, o Locally AI (Apple MLX) ou o PocketPal AI (llama.cpp com Metal Performance Shaders) são as alternativas atualmente mantidas ativamente.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: removido mas ainda configurável',
        content:
          '**O LLM Farm foi removido da App Store e do TestFlight em agosto de 2025 — o próprio README no GitHub descreve o app como "temporariamente indisponível" em ambos.** O projeto (GitHub: guinmoon/LLMFarm) continua de código aberto e teve atividade de issues até 2026, mas novos usuários não conseguem mais instalá-lo pela App Store; é preciso compilá-lo a partir do código-fonte com o Xcode.',
        items: [
          '**O que é:** um app iOS do desenvolvedor @guinmoon que executa modelos GGUF com amplas opções de configuração, anteriormente distribuído pela App Store.',
          '**Disponibilidade atual:** não instalável pela App Store ou TestFlight no momento desta atualização. O código-fonte continua público e compilável.',
          '**Compilar a partir do código-fonte:** clone o repositório, abra no Xcode e compile em um dispositivo com uma conta Apple Developer gratuita ou paga — o fluxo padrão de sideloading para qualquer app iOS de código aberto sem ficha na App Store.',
          '**Configuração exposta (após compilar):** temperatura, top-p, top-k, amostragem mirostat, penalidade por repetição, prompt de sistema por modelo, seleção de template de chat, comprimento da janela de contexto.',
          '**Ideal para:** desenvolvedores confortáveis em compilar um app a partir do código-fonte no Xcode que querem especificamente os controles de amostragem mirostat. Todos os demais devem usar PocketPal AI ou Locally AI, ambos totalmente instaláveis pela App Store e gratuitos.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não espere que um link da App Store para o LLM Farm funcione — trate qualquer link desse tipo encontrado em outro lugar como desatualizado. Compilar a partir do código-fonte exige Xcode e conhecimento básico de assinatura de código no iOS. Se isso for mais trabalho do que você quer ter, o PocketPal AI cobre o mesmo caso de uso de "app de chat gratuito e flexível" sem sair da App Store.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: IA no dispositivo integrada ao sistema',
        content:
          '**O Apple Intelligence executa o modelo de base ~3B próprio da Apple no dispositivo no iPhone 15 Pro e modelos mais recentes (chip A17 Pro com 8 GB de RAM no mínimo).** Por padrão não é um app de chat — potencializa funções do sistema no Mail (Resposta inteligente), Mensagens (ferramentas de escrita), Notas (resumo) e Resumos de notificações. Desde o iOS 26, o framework Foundation Models da Apple permite que desenvolvedores terceiros acessem diretamente esse modelo no dispositivo, e apps como o Locally AI já o usam para oferecer uma interface de chat real.',
        items: [
          '**Onde está:** integrado ao iOS 18+ (framework Foundation Models desde o iOS 26). Ative em Ajustes → Apple Intelligence e Siri.',
          '**Requisito de hardware:** iPhone 15 Pro / 15 Pro Max, série iPhone 16, iPhone 16e, série iPhone 17. Os iPhones mais antigos (14 e inferiores) não são compatíveis com o Apple Intelligence.',
          '**Funções no dispositivo:** Ferramentas de escrita (reescrever, resumir, revisar) dentro de qualquer campo de texto, Resposta inteligente no Mail e Mensagens, Resumos de notificações, geração de Genmoji.',
          '**Framework Foundation Models (iOS 26+):** uma API Swift nativa que dá aos desenvolvedores acesso direto ao mesmo modelo no dispositivo com poucas linhas de código — é assim que o Locally AI o expõe como opção de chat, e como a ação "Usar modelo" do Shortcuts pode enviar um prompt para esse modelo, para o Private Cloud Compute ou para o ChatGPT.',
          '**Private Cloud Compute:** para tarefas que superam a capacidade do modelo no dispositivo, o Apple Intelligence recorre ao Private Cloud Compute (PCC) — servidores operados pela Apple que executam modelos maiores com garantias criptográficas de que nenhum dado do usuário é retido. O PCC é opt-in e pode ser desativado.',
          '**Relação com os apps de chat:** o Apple Intelligence é um complemento, não um substituto. Suas funções de sistema cuidam da reescrita e do resumo de texto dentro dos apps do iOS; PocketPal AI, Private LLM, Locally AI e MLC Chat fornecem uma interface de chat dedicada para perguntas arbitrárias — e o Locally AI agora pode oferecer esse mesmo tipo de interface para o próprio modelo da Apple.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se o Apple Intelligence é a sua única necessidade (reescrever e-mails, resumir notificações), você não precisa de um app de chat independente. Se você quer fazer perguntas ao modelo como "explique o tunelamento quântico em termos simples" ou "crie um plano de projeto para X", instale um app de chat — um dedicado como o PocketPal AI, ou o Locally AI, capaz de colocar o próprio modelo no dispositivo da Apple atrás de uma janela de chat.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modelos conforme o modelo de iPhone',
        content:
          '**A RAM do iPhone determina o limite de tamanho do modelo, não a geração do chip.** Um iPhone de 6 GB (14 Pro, 15) consegue executar modelos 1.7B confortavelmente; um iPhone de 8 GB+ (15 Pro, série 16, 16e, série 17) executa modelos 3B–4B confortavelmente e modelos 7B lentamente. Para o panorama mais amplo de modelos em todo o hardware (não apenas móvel), consulte [Os melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-en.svg',
        imageCaption: 'Recomendações de modelos LLM por RAM de iPhone: Phi-4 Mini 3.8B Q4_K_M para iPhones de 8 GB+ (15 Pro–17 Pro) a 8–20 tok/s; Qwen3 1.7B Q4_K_M para iPhones de 6 GB (14 Pro, não Pro) a 12–20 tok/s; iPhone SE (4 GB) não recomendado.',
        columns: ['Nível de iPhone (Ano, RAM)', 'Modelo recomendado', 'Tamanho de download', 'Velocidade esperada'],
        rows: [
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 17 Pro (2025, 12 GB)', 'Modelo recomendado': 'Phi-4 Mini ou Llama 3.2 3B (Q4_K_M)', 'Tamanho de download': '~2.5–2.7 GB', 'Velocidade esperada': '~13–20 tok/seg' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 16 Pro / 16 Pro Max / 16e (2024–2025, 8 GB)', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M)', 'Tamanho de download': '~2.7 GB', 'Velocidade esperada': '~10–15 tok/seg' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 15 Pro / Pro Max (2023, 8 GB)', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M)', 'Tamanho de download': '~2.7 GB', 'Velocidade esperada': '~8–12 tok/seg' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 14 Pro / Pro Max (2022, 6 GB)', 'Modelo recomendado': 'Qwen3 1.7B ou SmolLM 2 1.7B (Q4_K_M)', 'Tamanho de download': '~1.1 GB', 'Velocidade esperada': '~15–20 tok/seg' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 14 / 15 / 16 (não Pro, 6 GB)', 'Modelo recomendado': 'Qwen3 1.7B ou SmolLM 2 1.7B (Q4_K_M)', 'Tamanho de download': '~1.1 GB', 'Velocidade esperada': '~12–18 tok/seg' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone SE / modelos antigos (4 GB)', 'Modelo recomendado': 'Não recomendado para LLM no dispositivo', 'Tamanho de download': '—', 'Velocidade esperada': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para iPhones mais antigos de 6 GB, o Qwen3 1.7B é o melhor equilíbrio entre tamanho de modelo e qualidade em 2026. O SmolLM 2 1.7B (HuggingFace) é comparável. Ambos produzem respostas curtas coerentes (1–3 parágrafos), mas têm dificuldades com o raciocínio de múltiplos passos. Não instale o Phi-4 Mini em um iPhone de 6 GB — nominalmente cabe, mas o iOS vai fechar o app sob qualquer pressão de memória.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'Consumo de bateria e throttling térmico',
        content:
          '**A inferência LLM no dispositivo no iPhone é intensiva em CPU/GPU e gera calor.** A inferência ativa (o modelo gerando tokens) consome ~3–5 W; a geração sustentada vai limitar o chip e drenar a bateria aproximadamente 20–30% por hora no iPhone 16 Pro.',
        image: '/images/iphone-llm-apps-battery-thermal-en.svg',
        imageCaption: 'Guia térmico de LLM no dispositivo para iPhone: a inferência ativa consome 3–5 W, drenando ~20–30% de bateria/hora no iPhone 16 Pro; o throttling térmico reduz a velocidade em 30–50% após 10–15 min — mantenha o dispositivo de frente para cima sobre uma superfície dura para dissipar o calor.',
        items: [
          '**Consumo de bateria (chat ativo):** ~20–30% por hora no iPhone 16 Pro executando o Phi-4 Mini. O iPhone 17 Pro se descarrega ligeiramente mais rápido devido a uma maior potência de pico, mas compensa ao terminar a carga de trabalho antes.',
          '**O throttling térmico aparece após ~10–15 minutos de geração contínua.** Quando o chip atinge ~38 °C de temperatura superficial, o iOS reduz as velocidades de clock, baixando os tokens/seg em 30–50%. Deixar o telefone esfriar restaura a velocidade completa.',
          '**Mitigação:** mantenha o iPhone de frente para cima sobre uma superfície dura (não na mão nem no bolso) durante sessões de inferência longas para permitir a dissipação de calor. Uma capa com dissipador passivo ajuda, mas raramente é necessária para interações curtas.',
          '**Consumo fantasma:** se você deixar um app de chat aberto em segundo plano depois da geração, a RAM permanece alocada mas nenhuma inferência é executada — o impacto na bateria é mínimo. Fechar o app completamente libera os ~3 GB de RAM.',
          '**Carga MagSafe durante a inferência:** aceitável no iPhone 17 Pro e 16 Pro (ambos têm designs térmicos melhorados). No iPhone 15 Pro, a combinação de carga e inferência pode atingir os limites térmicos mais rápido — é melhor carregar depois.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não execute inferência LLM no dispositivo em um iPhone sob luz solar direta ou em um carro quente. A combinação de calor ambiente e carga de inferência leva o chip além dos limites térmicos em minutos, ativando um throttling agressivo e potencialmente o aviso "O iPhone precisa esfriar". O app de chat não fecha, mas a geração fica extremamente lenta.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts, Siri e sideloading',
        content:
          '**A integração com o iOS varia significativamente conforme o app.** Private LLM e Locally AI oferecem ações de Shortcuts; PocketPal AI e MLC Chat são apps de chat independentes sem ações de Shortcuts em 2026.',
        image: '/images/iphone-llm-apps-ios-integration-en.svg',
        imageCaption: 'Integração com o iOS por app LLM local: Private LLM, Locally AI e Apple Intelligence suportam Shortcuts (Private LLM soma Siri); PocketPal AI e MLC Chat são apps de chat independentes sem ações de Shortcuts em 2026.',
        items: [
          '**Private LLM** expõe uma ação de Shortcuts "Gerar texto com Private LLM" e um gatilho de voz "E aí Siri, pergunte ao Private LLM [pergunta]". O mais integrado de forma nativa com o iOS entre os apps de chat pagos.',
          '**Locally AI** expõe uma ação de Shortcuts gratuitamente e pode encaminhar um atalho para o próprio modelo no dispositivo da Apple por meio da integração com Foundation Models — sem gatilho de voz, mas com automação de Shortcuts sem pagar.',
          '**PocketPal AI** é um app de chat independente — sem ação de Shortcuts, sem integração com Siri. Você abre o app e conversa. Os planos de suporte de Shortcuts são rastreados nos issues do GitHub, mas não foram publicados.',
          '**MLC Chat** é um app de referência para o projeto MLC LLM — integração iOS mínima e sem atualizações desde o final de 2024. Sem ação de Shortcuts.',
          '**LLM Farm** foi removido da App Store (agosto de 2025) e, quando compilado a partir do código-fonte, também não tem ação de Shortcuts.',
          '**Apple Intelligence** se integra com o iOS Shortcuts por meio da ação "Usar modelo" (iOS 18.4+, ampliada com o framework Foundation Models no iOS 26). Isso envia um prompt ao modelo no dispositivo, ao Private Cloud Compute ou ao ChatGPT (configurável). A saída no dispositivo pode ser encadeada em outras ações de Shortcuts.',
          '**Sideloading:** PocketPal AI, Private LLM, Locally AI e MLC Chat estão na App Store e não exigem sideloading nem jailbreak; o Apple Intelligence é integrado ao iOS. O LLM Farm é a exceção — instalá-lo agora exige compilar a partir do código-fonte no Xcode. Os usuários da UE também podem instalar apps da App Store por meio de marketplaces alternativos sob o DMA em 2026, mas o app em si é idêntico.',
        ],
        promptExamples: [
          {
            label: 'Shortcut do Private LLM: resumir texto selecionado',
            text: '1. Ação: "Obter texto selecionado" (entrada do Share Sheet do iOS).\n2. Ação: "Gerar texto com Private LLM" → Prompt: "Resuma o seguinte texto em três pontos-chave: [Texto selecionado]" → Modelo: Phi-4 Mini.\n3. Ação: "Mostrar resultado" ou "Copiar para a área de transferência".\nAdicione-o ao Share Sheet para executá-lo sobre qualquer texto selecionado em qualquer app, completamente sem conexão.',
          },
          {
            label: 'Shortcut do Apple Intelligence: reescrever o tom',
            text: '1. Ação: "Obter área de transferência".\n2. Ação: "Usar modelo" → Modelo: No dispositivo → Prompt: "Reescreva isto em um tom profissional e conciso: [Área de transferência]".\n3. Ação: "Copiar para a área de transferência".\nAtribua-o a um widget da tela de bloqueio para reescrever com um toque qualquer coisa que você copiar.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para uso mãos livres ao dirigir ou cozinhar, o "E aí Siri, pergunte ao Private LLM" do Private LLM é a única opção no dispositivo que funciona sem tocar no telefone. O Apple Intelligence suporta voz por meio da Siri, mas só para tarefas do sistema (escrita, resumo, ações de app) — ele não expõe perguntas e respostas gerais como os apps de chat.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros frequentes',
        items: [
          '**Instalar um modelo maior do que a RAM do seu iPhone permite.** Um modelo 7B em um iPhone de 8 GB gera a ~3–5 tokens/seg e fecha quando o iOS recupera memória para outro app. Fique com o modelo recomendado para o seu nível de iPhone (3B–4B para dispositivos de 8 GB, 1.7B para dispositivos de 6 GB).',
          '**Esperar qualidade de IA na nuvem dos modelos no dispositivo.** O Phi-4 Mini (3.8B) é impressionante para o seu tamanho, mas não é GPT-5.5. Use-o para chat, resumo, escrita e perguntas rápidas — não para raciocínio de múltiplos passos, geração de código complexo ou escrita criativa com nuances.',
          '**Executar inferência sob luz solar direta ou em um carro quente.** O throttling térmico aparece em questão de minutos. A geração fica 30–50% mais lenta e pode aparecer o aviso "O iPhone precisa esfriar". Execute a inferência à temperatura ambiente.',
          '**Deixar instalados 3 ou mais apps de chat com modelos de 3 GB em cada um.** Você vai consumir ~10 GB de armazenamento em modelos duplicados. Escolha um app e um modelo; desinstale os demais até ter certeza de que precisa deles.',
          '**Supor que o Apple Intelligence não tem interface de chat alguma.** Isso era verdade até o iOS 18, mas desde o iOS 26 apps como o Locally AI conseguem colocar o modelo no dispositivo da Apple atrás de uma janela de chat real pelo framework Foundation Models. As funções de sistema (Ferramentas de escrita, Resposta inteligente) sozinhas ainda não são uma interface de chat.',
          '**Procurar o LLM Farm na App Store.** Ele foi removido em agosto de 2025. Pesquisá-lo na App Store é perda de tempo; use o PocketPal AI para o mesmo caso de uso gratuito/flexível, ou compile o LLM Farm a partir do código-fonte no Xcode se precisar especificamente dos controles mirostat.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (app iOS de código aberto).',
          'Private LLM — [ficha da App Store](https://apps.apple.com) e documentação do desenvolvedor.',
          'Locally AI — [ficha da App Store](https://apps.apple.com) (equipe da LM Studio, baseado em Apple MLX).',
          'MLC Chat / projeto MLC LLM — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (implantação iOS acelerada por Metal).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (app iOS de código aberto; ficha da App Store/TestFlight temporariamente indisponível segundo o README do projeto).',
          'Apple Intelligence e modelos de base no dispositivo — [Apple Machine Learning Research](https://machinelearning.apple.com) e documentação do Apple Developer (framework Foundation Models, introduzido no iOS 26).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O iPhone consegue realmente executar um modelo 7B?',
            a: 'Tecnicamente sim no iPhone 15 Pro e modelos mais recentes (8 GB de RAM), mas não a uma velocidade utilizável. Um modelo 7B Q4 no iPhone 16 Pro gera a ~3–5 tokens/seg — frustrante para o chat. O iOS também tende a fechar o app quando outros apps precisam de memória. Use modelos 3B–4B (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) para o chat no dispositivo do dia a dia. Para qualidade 7B+, conecte-se remotamente a um Mac ou PC doméstico que execute o Ollama.',
          },
          {
            q: 'A IA local esgota a bateria do meu iPhone?',
            a: 'Sim — a inferência ativa consome ~3–5 W e drena a bateria aproximadamente 20–30% por hora no iPhone 16 Pro. Para o uso ocasional (alguns prompts), o impacto é pequeno. Para o uso sustentado (conversa longa, múltiplas tarefas de resumo), mantenha o iPhone na tomada. O modelo em si, armazenado na RAM sem inferência ativa, tem um impacto mínimo na bateria.',
          },
          {
            q: 'O meu iPhone vai esquentar usando IA local?',
            a: 'Sim, depois de cerca de 10–15 minutos de geração contínua. A temperatura superficial do chip atinge ~38 °C e o iOS reduz as velocidades de clock, baixando os tokens/seg em 30–50%. Para minimizar isso: mantenha o iPhone de frente para cima sobre uma superfície dura (não na mão) durante sessões longas, e evite a luz solar direta. As interações curtas (menos de 5 minutos) raramente causam calor notável.',
          },
          {
            q: 'Posso usar a Siri com um modelo local?',
            a: 'Sim, com o Private LLM (R$ 29,90 pagamento único). Dizer "E aí Siri, pergunte ao Private LLM [pergunta]" envia o prompt ao modelo no dispositivo e a Siri lê a resposta em voz alta — completamente sem conexão. PocketPal AI, Locally AI e MLC Chat não têm integração de voz com a Siri em 2026, embora o Locally AI suporte automação com Shortcuts. O Apple Intelligence se integra com a Siri, mas só para tarefas do sistema (escrita, resumo, ações de app), não para perguntas e respostas gerais.',
          },
          {
            q: 'Esses apps funcionam no iPhone SE ou em iPhones mais antigos?',
            a: 'Com limitações. O iPhone SE (4 GB de RAM) está abaixo do limite prático para LLM no dispositivo em 2026. O iPhone 14 / 15 (não Pro, 6 GB de RAM) consegue executar modelos 1.7B (Qwen3 1.7B, SmolLM 2 1.7B), mas não 3B+. O iPhone 14 Pro e 15 Pro (6–8 GB de RAM) conseguem executar modelos 3B como o Phi-4 Mini a 8–12 tokens/seg. Para iPhones mais antigos, a melhor opção é conectar-se remotamente a um Mac ou PC doméstico.',
          },
          {
            q: 'Posso sincronizar o histórico de chat entre iPhone e Mac?',
            a: 'Não em PocketPal AI, Private LLM ou MLC Chat — o histórico de chat é armazenado localmente em cada dispositivo, sem sincronização com o iCloud. Private LLM e Locally AI são compras/downloads universais que também funcionam nativamente no Mac, mas o histórico ainda assim não sincroniza entre as cópias de iPhone e Mac. Para histórico de chat entre dispositivos, a abordagem prática é executar o Open WebUI em um Mac doméstico e acessá-lo pelos navegadores de iPhone e Mac — o Open WebUI armazena o histórico de chat no servidor.',
          },
          {
            q: 'Esses apps estão disponíveis fora da App Store?',
            a: 'O PocketPal AI é de código aberto e pode ser compilado a partir do código-fonte com o Xcode, mas a versão da App Store é a distribuição padrão. O LLM Farm é a exceção que agora precisa ser compilada a partir do código-fonte — foi removido da App Store e do TestFlight em agosto de 2025. Private LLM, Locally AI e MLC Chat estão apenas na App Store. Os usuários da UE podem instalar apps da App Store por meio de marketplaces alternativos sob o DMA em 2026, mas o conteúdo é idêntico.',
          },
          {
            q: 'Algum deles requer jailbreak?',
            a: 'Não. PocketPal AI, Private LLM, Locally AI, MLC Chat e Apple Intelligence funcionam todos no iOS padrão. Compilar o LLM Farm a partir do código-fonte no Xcode também não exige jailbreak — usa o sideloading padrão para desenvolvedores, não um exploit de jailbreak. O jailbreak não é necessário nem recomendado para nenhum desses apps.',
          },
          {
            q: 'Posso usar IA local no iOS Shortcuts?',
            a: 'Sim, por meio do Private LLM (ação "Gerar texto com Private LLM"), do Locally AI (ação de Shortcuts gratuita) ou do Apple Intelligence (ação "Usar modelo", iOS 18.4+, ampliada com o iOS 26). PocketPal AI e MLC Chat não têm ações de Shortcuts em 2026. O Locally AI é a única opção gratuita que oferece tanto suporte a Shortcuts quanto acesso ao próprio modelo no dispositivo da Apple.',
          },
          {
            q: 'Como a IA local se compara ao app do ChatGPT no iPhone?',
            a: 'Os modelos no dispositivo (Phi-4 Mini, Llama 3.2 3B) continuam claramente atrás dos modelos de ponta na nuvem em raciocínio complexo, conhecimento geral do mundo e tarefas multimodais, mas são mais rápidos em consultas simples (sem ida e volta de rede) e completamente privados. A troca honesta: IA local para tarefas rotineiras e privadas; ChatGPT ou outro app na nuvem para perguntas difíceis ocasionais. Muitos usuários em 2026 têm ambos e escolhem conforme a consulta.',
          },
          {
            q: 'O LLM Farm ainda é seguro de usar agora que não está na App Store?',
            a: 'O código-fonte é público no GitHub e continua recebendo atividade de issues até 2026, então não está abandonado, mas depois de compilado a partir do código-fonte e instalado por sideloading, ele não passa mais pelo processo de revisão da App Store da Apple. Se você não precisa especificamente dos controles de amostragem mirostat, o PocketPal AI cobre o mesmo caso de uso gratuito, flexível e de código aberto permanecendo na App Store com a revisão padrão da Apple.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Os melhores apps LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — artigo irmão que cobre os equivalentes do Android (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[Como executar IA em um tablet: iPad e Android (2026)](/pt/power-local-llm/run-ai-on-tablet-ipad-android) — guia de plataforma para leitores com tablet.',
          '[Os melhores modelos LLM para celular em 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — artigo complementar do lado do modelo para escolher o que executar nesses apps.',
          '[Os melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — panorama mais amplo de modelos que cobre todos os níveis de hardware, não apenas móvel.',
          '[Crie um assistente de voz local no seu celular: Whisper + LLM local](/pt/power-local-llm/voice-assistant-local-mobile-offline) — estende esses apps com entrada/saída de voz sem conexão.',
          '[O melhor app de IA local para PCs de baixo desempenho](/pt/power-local-llm/best-local-ai-app-low-end-pc) — alternativa de desktop para usuários que querem se conectar remotamente a uma máquina doméstica mais potente.',
          '[Diretório de software LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — diretório de todas as ferramentas LLM local que vale a pena conhecer em todas as plataformas.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Os melhores apps de LLM local para iPhone em 2026 (execute IA sem WiFi)',
      description: 'Cinco apps para iPhone que executam LLMs reais no dispositivo em 2026. PocketPal AI, Private LLM, Locally AI e MLC Chat testados no iPhone 16 Pro e 17 Pro. Velocidade, privacidade e biblioteca de modelos comparadas.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/best-local-llm-apps-iphone-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-09-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Beginner',
    },
},
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-09-01',
    last_full_refresh: '2026-09-01',
    next_refresh_due: '2027-03-01',
    theme: 'Mobile & Edge LLMs',
    title: 'أفضل تطبيقات النماذج اللغوية المحلية للـ ⁨iPhone⁩ في ⁨2026⁩ (شغّل الذكاء الاصطناعي بدون واي فاي)',
    seoTitle: 'تطبيقات ⁨LLM⁩ محلي لـ ⁨iPhone 2026⁩: ⁨PocketPal⁩ وغيره',
    intro:
      'خمسة تطبيقات لـ iPhone تُشغّل نماذج لغوية حقيقية بالكامل على الجهاز في 2026: برنامج PocketPal AI، وبرنامج Private LLM، وبرنامج Locally AI (من LM Studio)، وبرنامج MLC Chat، وApple Intelligence (المدمج في النظام). جميعها تعمل بدون واي فاي بمجرد تنزيل النموذج. يصنّف هذا الدليل التطبيقات وفق عدد الرموز في الثانية على iPhone 16 Pro وiPhone 17 Pro، ومكتبة النماذج، وإدارة الذاكرة العشوائية، وموقف الخصوصية، والتكامل مع نظام iOS — ويشرح سبب خروج برنامج LLM Farm من الترتيب.',
    metaDescription:
      '5 تطبيقات تشغّل LLMs على iPhone بدون واي فاي: PocketPal AI وPrivate LLM وLocally AI وMLC Chat مُختبَرة على iPhone 16 Pro. مقارنة السرعة والخصوصية.',
    heroImage: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ar.webp',
    twitterDescription:
      'ذكاء اصطناعي محلي على iPhone في 2026: برنامج PocketPal AI (مجاني)، برنامج Private LLM (4.99 دولار دفعة واحدة، Siri)، برنامج Locally AI (LM Studio، MLX)، برنامج MLC Chat (Metal لكن دون تحديثات). جميعها تعمل بدون اتصال بعد التنزيل.',
    current_models_mentioned: [
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'SmolLM 2 1.7B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 15 Pro Max (A17 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
    ],
    audience:
      'مستخدمو iPhone الراغبون في تشغيل الذكاء الاصطناعي بصورة خاصة على الجهاز دون اشتراك سحابي، بما فيهم المسافرون والمهتمون بالخصوصية والمطورون الذين يستكشفون الاستدلال على الجهاز.',
    readTime: '12 دقيقة قراءة',
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
    ],
    leadAnswerBlock:
      '**لمعظم مستخدمي iPhone في 2026، ثبّت برنامج PocketPal AI من App Store ونزّل نموذج Phi-4 Mini (حجم 3.8B Q4_K_M، ~2.7 جيجابايت).** إنه مجاني ومفتوح المصدر، يعمل على iPhone 14 Pro والإصدارات الأحدث (أي iPhone بذاكرة عشوائية 6 جيجابايت أو أكثر)، ويُنتج ~10–15 رمزاً في الثانية على iPhone 16 Pro للاستخدام اليومي. لمن يريد تكامل Siri وShortcuts، يُعدّ برنامج Private LLM الخيار الأقوى المدفوع (4.99 دولار دفعة واحدة، يشمل iPhone وiPad وMac). أما برنامج Locally AI — الذي يُطوّره الآن فريق LM Studio — فهو البديل المجاني الحديث المبني على Apple MLX، ويدعم Shortcuts ويتيح الوصول إلى نموذج Apple الأساسي على الجهاز. يظل برنامج MLC Chat هو تطبيق Metal المرجعي، لكنه لم يُحدَّث منذ أواخر 2024. أما برنامج LLM Farm فقد أُزيل من App Store في أغسطس 2025 ولم يعد يُثبَّت إلا عبر بناء الكود المصدري. يُشغّل Apple Intelligence أيضاً نماذج على الجهاز لكنه مدمج في النظام وليس تطبيق دردشة؛ فهو يُكمل هذه التطبيقات لا يُنافسها.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل تطبيق نموذج لغوي محلي لـ iPhone في 2026؟',
        answer:
          'برنامج PocketPal AI هو أفضل خيار مجاني افتراضي لمعظم مستخدمي iPhone — مفتوح المصدر، يُثبَّت من App Store، يدعم أي نموذج GGUF من Hugging Face، ويُشغّل Phi-4 Mini (3.8B) بـ~10–15 رمزاً في الثانية على iPhone 16 Pro. برنامج Private LLM هو أقوى خيار مدفوع (4.99 دولار دفعة واحدة، iPhone+iPad+Mac) مع تكامل iOS Shortcuts وSiri. برنامج Locally AI، الذي يُطوّره فريق LM Studio، هو خيار Apple MLX المجاني مع دعم Shortcuts ووصول إلى نموذج Apple الأساسي على الجهاز. برنامج MLC Chat يدعم تسريع Metal لكنه دون تحديثات منذ أواخر 2024. يُشغّل Apple Intelligence نماذج على الجهاز أيضاً لكنه مدمج في النظام ويُكمل هذه التطبيقات.',
        bullets: [
          'برنامج PocketPal AI — مجاني، مفتوح المصدر، App Store. أفضل خيار افتراضي لمعظم المستخدمين. يدعم أي نموذج GGUF.',
          'برنامج Private LLM — 4.99 دولار دفعة واحدة (iPhone+iPad+Mac). أفضل خيار مدفوع. iOS Shortcuts + تكامل Siri.',
          'برنامج Locally AI — مجاني، من فريق LM Studio. محرك Apple MLX، دعم Shortcuts، وصول إلى Apple Foundation Models.',
          'برنامج MLC Chat — مجاني، مشروع MLC LLM. تسريع Metal لكن بدون تحديثات للتطبيق منذ أواخر 2024 (مكتبة نماذج قديمة).',
          'Apple Intelligence — مدمج في النظام، ليس تطبيقاً مستقلاً. نموذج 3B على الجهاز يستخدمه Mail والرسائل والملاحظات.',
          'النموذج الموصى به لـ iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M، ~2.7 جيجابايت) — يعمل بـ~10–15 رمزاً في الثانية.',
          'أجهزة iPhone الأقدم (14 Pro): Qwen3 1.7B أو SmolLM 2 1.7B — يتناسب مع ذاكرة 6 جيجابايت ويُنتج ~15–20 رمزاً في الثانية.',
        ],
        updatedDate: '2026-09-01',
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
      { label: 'MLC Chat: تحسين لـ Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm: أُزيل لكنه لا يزال قابلاً للضبط', anchor: '#llm-farm' },
      { label: 'Apple Intelligence: ذكاء اصطناعي على الجهاز مدمج في النظام', anchor: '#apple-intelligence' },
      { label: 'النماذج حسب طراز iPhone', anchor: '#models-by-tier' },
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
          '**برنامج PocketPal AI هو أفضل خيار مجاني افتراضي.** مفتوح المصدر، يُثبَّت من App Store، يدعم أي نموذج GGUF من Hugging Face. يُشغّل Phi-4 Mini بـ~10–15 رمزاً في الثانية على iPhone 16 Pro. نقطة البداية الموصى بها لمعظم مستخدمي iPhone.',
          '**برنامج Private LLM هو أفضل خيار مدفوع (4.99 دولار دفعة واحدة، بدون اشتراك).** يغطي شراء واحد iPhone وiPad وMac مع مشاركة العائلة. مكتبة نماذج منتقاة، وتكامل مع iOS Shortcuts، ودعم Siri "اسأل Private LLM".',
          '**برنامج Locally AI هو البديل المجاني المبني على MLX، ويُطوّره الآن فريق LM Studio.** يُشغّل نماذج Llama وGemma وQwen وDeepSeek على Apple MLX، يعمل مع iOS Shortcuts، ويمكنه إتاحة نموذج Apple الأساسي على الجهاز كواجهة دردشة.',
          '**برنامج MLC Chat يدعم تسريع Metal لكنه متوقف.** لا يزال محرك MLC LLM يُولّد ~25–35% رموزاً إضافية في الثانية مقارنةً بالتطبيقات المبنية على llama.cpp على نفس الجهاز، لكن التطبيق لم يُحدَّث منذ أواخر 2024، لذا فإن مكتبة نماذجه سابقة لـ Phi-4 Mini وGemma 3.',
          '**أُزيل برنامج LLM Farm من App Store في أغسطس 2025.** يصفه ملف README الخاص به بأنه "غير متاح مؤقتاً". يظل مفتوح المصدر ويمكن بناؤه من الكود المصدري، ويبقى الخيار الأكثر قابلية للضبط (mirostat، قوالب الدردشة) للمطورين.',
          '**Apple Intelligence على الجهاز لكنه ليس تطبيقاً مستقلاً.** نموذج الأساس ~3B من Apple يُشغّل ميزات النظام (أدوات الكتابة، الرد الذكي، ملخصات الإشعارات). منذ iOS 26، تستطيع تطبيقات الجهات الخارجية استدعاءه عبر إطار عمل Foundation Models، ويمكن لـ Shortcuts استدعاؤه عبر إجراء "استخدام النموذج".',
          '**النموذج الموصى به لـ iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M، ~2.7 جيجابايت).** أفضل توازن بين الجودة والسرعة لفئة ذاكرة 8 جيجابايت فأكثر. أجهزة iPhone الأقدم بذاكرة 6 جيجابايت (iPhone 14 Pro): Qwen3 1.7B أو SmolLM 2 1.7B.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**التطبيقات المُقارَنة:** PocketPal AI وPrivate LLM وLocally AI (من LM Studio) وMLC Chat وApple Intelligence (النظام) — إضافةً إلى LLM Farm، الذي أُزيل من App Store في أغسطس 2025.',
          '**أجهزة الاختبار:** iPhone 16 Pro (A18 Pro، 8 جيجابايت ذاكرة عشوائية) وiPhone 17 Pro (A19 Pro، 12 جيجابايت).',
          '**محركات الاستدلال:** llama.cpp (برامج PocketPal AI وLLM Farm)، وApple MLX (برنامج Locally AI)، وMLC LLM مع Metal (برنامج MLC Chat)، وبيئة تشغيل خاصة على الجهاز (برنامج Private LLM وApple Intelligence).',
          '**الحد الأدنى من iPhone لنماذج 3B+:** iPhone 14 Pro (A16، 6 جيجابايت) لنماذج 1.7B؛ أي iPhone بذاكرة 8 جيجابايت فأكثر (15 Pro، سلسلة 16، 16e، سلسلة 17) لنماذج 3B–4B.',
          '**أفضل تطبيق مجاني:** برنامج PocketPal AI — App Store، مفتوح المصدر، مرونة في اختيار النماذج.',
          '**أفضل تطبيق مدفوع:** برنامج Private LLM — 4.99 دولار دفعة واحدة (iPhone+iPad+Mac)، دعم Shortcuts + Siri.',
          '**بدون اتصال:** جميع الخمسة تعمل بالكامل دون اتصال بعد تنزيل النموذج؛ بدون أي طلبات سحابية.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'أي تطبيق iPhone تُثبّت أولاً؟',
        content:
          '**لمعظم المستخدمين: برنامج PocketPal AI من App Store، ثم تنزيل Phi-4 Mini (3.8B Q4_K_M).** هذا المزيج يعمل على iPhone 14 Pro والإصدارات الأحدث، لا تكلفة له، ويُنتج مخرجات مفيدة للدردشة اليومية والتلخيص والصياغة السريعة. اختر تطبيقاً آخر فقط عندما تحتاج إلى ميزة محددة لا يوفرها.',
        image: '/images/best-local-llm-apps-iphone-2026-which-app-hero-ar.webp',
        imageCaption: 'أي تطبيق ذكاء اصطناعي محلي تُثبّت على iPhone: برنامج PocketPal AI (الخيار المجاني الافتراضي)، برنامج Private LLM (Siri + Shortcuts)، برنامج Locally AI (MLX مجاني، فريق LM Studio)، برنامج MLC Chat (سريع على Metal لكنه متوقف)، Apple Intelligence (مدمج في iOS).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'لمعظم مستخدمي iPhone في 2026، ثبّت برنامج PocketPal AI (مجاني، App Store) ونزّل Phi-4 Mini — يغطي الدردشة اليومية والتلخيص والصياغة على أي iPhone بذاكرة عشوائية 6 جيجابايت أو أكثر.',
          },
          {
            type: 'plain-terms',
            text: 'خمسة تطبيقات تُشغّل الذكاء الاصطناعي بالكامل على iPhone في 2026. برنامج PocketPal AI هو أفضل نقطة بداية مجانية — ثبّته، نزّل ملف النموذج (2.7 جيجابايت) مرة واحدة، وستحصل على مساعد دردشة خاص يعمل في القطار بدون واي فاي. برنامج Private LLM هو الخيار المدفوع إذا أردت أن يتحدث Siri مع النموذج المحلي. برنامج Locally AI، من فريق LM Studio، هو البديل المجاني الحديث بدعم Shortcuts. برنامج MLC Chat سريع لكنه لم يعد يُحدَّث. Apple Intelligence مدمج في iOS لكنه ليس تطبيق دردشة. برنامج PocketPal AI يغطي 90% من حالات الاستخدام.',
          },
        ],
        decisionBlock: {
          title: 'القرار: أي تطبيق ذكاء اصطناعي محلي لـ iPhone؟',
          localIf: [
            'تريد ذكاء اصطناعي للدردشة مجانياً يعمل دون اتصال → برنامج PocketPal AI',
            'تريد أن يتحدث Siri مع نموذجك المحلي → برنامج Private LLM',
            'تريد تطبيق MLX مجاني مع Shortcuts ووصول إلى Apple Foundation Models → برنامج Locally AI',
            'تقبل مكتبة نماذج أقدم مقابل أقصى سرعة Metal → برنامج MLC Chat',
            'تحتاج فقط إلى مساعدة في الكتابة في Mail / الرسائل / الملاحظات → Apple Intelligence (مدمج)',
          ],
          cloudIf: [
            'تحتاج إلى جودة نموذج 70B+ (Llama 3.3 70B، مستوى GPT-5.5) → استخدم السحابة أو اتصل عن بُعد بجهاز منزلي',
            'تحتاج تحديداً إلى GPT-5.5 أو Claude Opus أو Gemini → تطبيقات السحابة (غير متاحة محلياً)',
            'تحتاج إلى رؤية الوقت الفعلي أو مخرجات متعددة الوسائط تتجاوز النص → السحابة (الوسائط المتعددة على الجهاز محدودة في 2026)',
          ],
          quick: [
            'مجاني + يعمل لـ 90% من المستخدمين: برنامج PocketPal AI',
            'مدفوع + تكامل iOS الأصلي: برنامج Private LLM',
            'مجاني + منظومة LM Studio: برنامج Locally AI',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'ثبّت برنامج PocketPal AI أولاً حتى لو كنت تخطط لدفع ثمن برنامج Private LLM لاحقاً. استخدم برنامج PocketPal AI للتحقق مما إذا كانت سرعة الاستدلال على الجهاز بطراز iPhone الخاص بك مناسبة لحالة استخدامك. إذا كانت كذلك، قرّر ما إذا كان تكامل iOS Shortcuts وSiri في برنامج Private LLM يستحق 4.99 دولار. إذا لم يكن، فقد وفّرت المبلغ قبل الدفع.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول مقارنة تطبيقات iPhone',
        content:
          '**تتمايز التطبيقات الخمسة في ثلاثة محاور تهم معظم المستخدمين: التكلفة، ومرونة النماذج، والتكامل مع iOS.** فوارق السرعة موجودة لكنها أصغر من الفجوة بين أي من هذه التطبيقات ونموذج لغوي سحابي.',
        image: '/images/best-local-llm-apps-iphone-2026-comparison-hero-ar.webp',
        imageCaption: 'مقارنة تطبيقات LLM المحلي لـ iPhone: برنامج PocketPal AI (مجاني، ~10–15 رمزاً/ثانية)، برنامج Locally AI (مجاني، Apple MLX + Shortcuts)، برنامج MLC Chat (مجاني، ~14–20 رمزاً/ثانية بتسريع Metal، متوقف منذ أواخر 2024)، برنامج Private LLM (4.99 دولار دفعة واحدة، Siri + Shortcuts)، Apple Intelligence (مدمج في النظام).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'برنامج PocketPal AI هو أفضل خيار مجاني افتراضي، وبرنامج Private LLM هو أفضل خيار مدفوع، وبرنامج Locally AI هو خيار MLX المجاني من فريق LM Studio، وبرنامج MLC Chat سريع على Metal لكنه متوقف، وApple Intelligence مدمج في النظام.',
          },
          {
            type: 'plain-terms',
            text: 'يعود الاختيار في الغالب إلى ثلاثة أشياء: هل تريد الدفع مقابل تكامل Siri (برنامج Private LLM)، أم تريد منظومة LM Studio مع Shortcuts مجاناً (برنامج Locally AI)، أم تريد أقصى سرعة خام مقابل قبول مكتبة نماذج أقدم (برنامج MLC Chat)؟ لكل شيء آخر، برنامج PocketPal AI هو الخيار الافتراضي. الأرقام في الجدول تفترض تكميماً Q4_K_M — المعيار للاستدلال على الأجهزة المحمولة في 2026.',
          },
        ],
        columns: ['التطبيق', 'الرابط', 'التكلفة', 'الرموز/ثانية (Phi-4 Mini، 16 Pro)', 'الخصوصية', 'الأنسب لـ'],
        rows: [
          { 'التطبيق': 'PocketPal AI', 'الرابط': '[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)', 'التكلفة': 'مجاني (مفتوح المصدر)', 'الرموز/ثانية (Phi-4 Mini، 16 Pro)': '~10–15', 'الخصوصية': 'محلي فقط، بدون قياس أداء', 'الأنسب لـ': 'الخيار المجاني الافتراضي لمعظم المستخدمين' },
          { 'التطبيق': 'Private LLM', 'الرابط': '[privatellm.app](https://privatellm.app)', 'التكلفة': '4.99 دولار دفعة واحدة', 'الرموز/ثانية (Phi-4 Mini، 16 Pro)': '~10–14', 'الخصوصية': 'محلي فقط، تحليلات اختيارية', 'الأنسب لـ': 'iOS Shortcuts + تكامل Siri' },
          { 'التطبيق': 'Locally AI', 'الرابط': '[lmstudio.ai/locally](https://lmstudio.ai/locally)', 'التكلفة': 'مجاني (فريق LM Studio)', 'الرموز/ثانية (Phi-4 Mini، 16 Pro)': 'غير متاح — مكتبة MLX (بدون Phi-4)', 'الخصوصية': 'محلي فقط، بدون جمع بيانات', 'الأنسب لـ': 'MLX + Shortcuts، ارتباط بـ LM Studio' },
          { 'التطبيق': 'MLC Chat', 'الرابط': '[llm.mlc.ai](https://llm.mlc.ai)', 'التكلفة': 'مجاني (مفتوح المصدر)', 'الرموز/ثانية (Phi-4 Mini، 16 Pro)': 'غير متاح — مكتبة سابقة لـ Phi-4', 'الخصوصية': 'محلي فقط، بدون قياس أداء', 'الأنسب لـ': 'سرعة Metal، نماذج قديمة' },
          { 'التطبيق': 'LLM Farm', 'الرابط': '[github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)', 'التكلفة': 'مجاني (كود مصدري فقط)', 'الرموز/ثانية (Phi-4 Mini، 16 Pro)': '~10–15', 'الخصوصية': 'محلي فقط، بدون قياس أداء', 'الأنسب لـ': 'مستخدمون متقدمون (أُزيل من App Store)' },
          { 'التطبيق': 'Apple Intelligence', 'الرابط': '[apple.com/apple-intelligence](https://www.apple.com/apple-intelligence/)', 'التكلفة': 'مجاني (مدمج في iOS)', 'الرموز/ثانية (Phi-4 Mini، 16 Pro)': 'غير متاح (ميزة نظامية)', 'الخصوصية': 'محلي + Private Cloud Compute اختياري', 'الأنسب لـ': 'المساعدة في Mail والرسائل والملاحظات' },
        ],
        note:
          '**ملاحظة حول Apple Neural Engine (ANE) وMetal وMLX:** برنامجا PocketPal AI وLLM Farm يستخدمان llama.cpp مع Metal Performance Shaders للاستدلال الذي يعمل على وحدة معالجة الرسومات. برنامج MLC Chat يستخدم MLC LLM مع تحسين Metal أعمق، محققاً سرعة أعلى بـ25–35% رموزاً في الثانية على نفس الجهاز للنماذج التي يدعمها. يستخدم برنامج Locally AI إطار Apple MLX مفتوح المصدر الخاص بشركة Apple، محققاً كفاءة GPU مشابهة على Apple Silicon. يستخدم Apple Intelligence وحدة ANE تحديداً لنموذج النظام ~3B، وهو أكثر كفاءة في استهلاك الطاقة لكنه أقل مرونة من الاستدلال المبني على Metal. منذ iOS 26، تستطيع تطبيقات الجهات الخارجية استدعاء هذا النموذج النظامي عبر إطار عمل Foundation Models — وهذا بالضبط ما يفعله برنامج Locally AI — لكن نماذج GGUF/MLX المخصصة لا تزال غير قادرة على استهداف ANE مباشرةً.',
        callouts: [
          {
            type: 'tip',
            text: 'أرقام الرموز في الثانية تفترض تكميماً Q4_K_M (المعيار للاستدلال على الأجهزة المحمولة في 2026) وiPhone خاملاً بدون تطبيقات أخرى مُستهلِكة. التطبيقات في الخلفية تُقلّل الإنتاجية بنسبة 10–30%. الرموز في الثانية على iPhone 17 Pro أعلى بنحو 20–30% مقارنةً بـiPhone 16 Pro بفضل تحسينات A19 Pro.',
          },
        ],
      },
      pocketPalAI: {
        id: 'pocketpal-ai',
        title: 'PocketPal AI: الخيار المجاني مفتوح المصدر',
        content:
          '**برنامج PocketPal AI هو نقطة البداية الموصى بها لمعظم مستخدمي iPhone في 2026.** إنه مجاني ومفتوح المصدر (GitHub: a-ghorbani/pocketpal-ai)، متاح في App Store، ويدعم أي نموذج GGUF من Hugging Face. يستخدم التطبيق llama.cpp تحت الغطاء مع تحسينات لشريحة Apple Silicon.',
        items: [
          '**ما هو:** تطبيق iOS يُشغّل نماذج GGUF محلياً باستخدام llama.cpp. بدون اشتراك، بدون قياس أداء، بدون حاجة لحساب.',
          '**التثبيت:** App Store → "PocketPal AI". تنزيل مجاني.',
          '**إضافة نموذج:** في التطبيق، اضغط على النماذج → "إضافة من Hugging Face" → ابحث (مثلاً "phi-4-mini-instruct-Q4_K_M") → اضغط للتنزيل. يُخزَّن النموذج في مساحة تخزين التطبيق المحلية (~2.7 جيجابايت لـ Phi-4 Mini Q4).',
          '**سرعة التوليد (iPhone 16 Pro):** Phi-4 Mini ~10–15 رمزاً/ثانية، Llama 3.2 3B ~12–18 رمزاً/ثانية، Gemma 3 4B ~7–10 رموز/ثانية، Qwen3 1.7B ~18–24 رمزاً/ثانية.',
          '**الأنسب لـ:** المستخدمين الراغبين في تطبيق دردشة مجاني قابل للتثبيت من App Store بدون حساب يدعم أي نموذج GGUF صادر عن المجتمع.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'يحتوي برنامج PocketPal AI على فلتر "موصى به" يعرض النماذج التي تُثبَت أنها تتناسب مع ذاكرة جهازك. لـiPhone 16 Pro (ذاكرة 8 جيجابايت)، يوصي الفلتر بمتغيرات Q4_K_M من النماذج حتى ~4B معامل. ثق بهذا الفلتر — تشغيل نموذج أكبر من اللازم يتسبب في إنهاء iOS للتطبيق في منتصف الرد.',
          },
        ],
      },
      privateLLM: {
        id: 'private-llm',
        title: 'Private LLM: الخيار المدفوع مع تكامل iOS',
        content:
          '**برنامج Private LLM هو أقوى خيار مدفوع لـiPhone في 2026 (4.99 دولار دفعة واحدة، بدون اشتراك).** متاح حصراً في App Store ويُزوَّد بمكتبة منتقاة من النماذج المُحسَّنة. ما يُميّزه هو التكامل مع iOS: إجراءات Shortcuts وأمر صوتي "اسأل Private LLM يا Siri".',
        items: [
          '**ما هو:** تطبيق iOS مدفوع بمكتبة نماذج منتقاة وتكامل عميق مع iOS. يستخدم بيئة تشغيل خاصة على الجهاز مُحسَّنة لشريحة Apple Silicon.',
          '**التثبيت:** App Store → "Private LLM". شراء لمرة واحدة 4.99 دولار (بدون اشتراك).',
          '**مكتبة النماذج المنتقاة:** ~30 نموذجاً مُختبَراً مسبقاً ومُحسَّناً لـiPhone، بما فيها Llama 3.2 3B وPhi-4 Mini وMistral Small Instruct وعدة متغيرات غير محجوبة. مرونة أقل من برنامج PocketPal AI لكن بدون خطر تثبيت نموذج يتعطل.',
          '**iOS Shortcuts:** يكشف برنامج Private LLM إجراء "توليد نص مع Private LLM" يمكن ربطه في مهام أتمتة Shortcuts. مفيد لتشغيل الذكاء الاصطناعي المحلي بضغطة زر على شاشتك الرئيسية أو عبر بطاقات NFC.',
          '**تكامل Siri:** يُوجَّه السؤال بقول "اسأل Private LLM [سؤالك] يا Siri" إلى النموذج على الجهاز ويقرأ Siri الإجابة — بالكامل دون اتصال بالإنترنت. زمن الاستجابة أطول من واجهة الدردشة (~3–5 ثوانٍ قبل بدء الصوت).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'برنامج Private LLM شراء شامل: يُغطي سعره الواحد 4.99 دولار كلاً من iPhone وiPad وMac بشراء واحد، وتمتد مشاركة العائلة في Apple لتشمل حتى ستة أفراد. بدون اشتراك أو مشتريات داخل التطبيق — السعر المعروض هو التكلفة الإجمالية.',
          },
        ],
      },
      locallyAI: {
        id: 'locally-ai',
        title: 'Locally AI: تطبيق MLX مجاني من LM Studio',
        content:
          '**برنامج Locally AI هو تطبيق دردشة مجاني يركّز على الخصوصية، ويُطوّره الآن فريق LM Studio، ومبني على إطار Apple MLX الخاص بشركة Apple بدلاً من llama.cpp.** إنه أحدث منافس جاد في هذه الفئة، والتطبيق الوحيد هنا الذي يُتيح نموذج Apple الأساسي على الجهاز كواجهة دردشة.',
        items: [
          '**ما هو:** تطبيق iOS/iPadOS/macOS يستخدم Apple MLX للاستدلال، طوّره الفريق الذي يقف خلف تطبيق سطح المكتب LM Studio.',
          '**التثبيت:** App Store → "Locally AI". مجاني، بدون حاجة لحساب، بدون اتصال بنسبة 100%.',
          '**مكتبة النماذج:** Llama 3.2 وGemma 2/3/4 وQwen 3 وDeepSeek وLFM 2.5 وBonsai وMinistral 3 وApple Foundation Models — كتالوج أوسع وأحدث من برنامج MLC Chat.',
          '**iOS Shortcuts:** يكشف إجراء Shortcuts مجاناً، بما يوازي دعم الأتمتة في برنامج Private LLM.',
          '**LM Link:** ميزة اختيارية تتصل بـ LM Studio العامل على جهاز Mac عبر اتصال مشفّر من طرف إلى طرف، تُتيح لتطبيق iPhone الانتقال إلى نموذج أكبر على جهاز منزلي عند الحاجة.',
          '**المتطلبات:** iOS/iPadOS 18.1+ (تظهر مزايا كفاءة Apple Silicon بأكبر قدر بدءاً من iPhone 15 Pro).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'برنامج Locally AI هو التطبيق الوحيد في هذا الدليل القادر على وضع نموذج Apple الأساسي على الجهاز خلف نافذة دردشة عادية — مفيد لاختبار ما يستطيع نموذج Apple Intelligence فعله دون التنقل في قوائم أدوات الكتابة. أما لمرونة GGUF من جهات خارجية، فلا يزال برنامج PocketPal AI يمتلك الكتالوج الأكبر من النماذج.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: تحسين لـ Apple Silicon',
        content:
          '**يظل برنامج MLC Chat (من مشروع MLC LLM) التطبيق المرجعي لتسريع Metal، لكن التطبيق نفسه لم يُحدَّث منذ أواخر 2024.** إنه مجاني ومفتوح المصدر، ويُشغّل نماذج مُجمَّعة بسلسلة أدوات MLC LLM بدلاً من صيغة GGUF المعيارية — ومتطلب التجميع هذا هو أيضاً سبب عدم مواكبة كتالوجه لبرنامجي PocketPal AI وLocally AI.',
        items: [
          '**ما هو:** تطبيق iOS المرجعي من مشروع MLC LLM، يُبرز أداء الاستدلال المُسرَّع بـMetal عبر MLC LLM على شريحة Apple Silicon.',
          '**التثبيت:** App Store → "MLC Chat". مجاني.',
          '**ميزة السرعة (على مستوى البنية):** يُولّد محرك MLC LLM المُسرَّع بـMetal أسرع بـ~25–35% من التطبيقات المبنية على llama.cpp على نفس iPhone للنماذج التي يدعمها كلاهما — لكن قائمة نماذج التطبيق نفسه سابقة لخيارات حالية مثل Phi-4 Mini وGemma 3، ما يجعل هذه الميزة غير قابلة للاختبار في 2026 دون تجميع خاص.',
          '**مكتبة النماذج:** مقتصرة على النماذج التي جمَّعها مشروع MLC LLM قبل توقف تحديث التطبيق — Llama 3.2 3B وRedPajama ونماذج مشابهة من 2024. ليس كل GGUF من Hugging Face متوافقاً، ولا يتضمن إصدار App Store أي نموذج صغير من الجيل الحالي.',
          '**الأنسب لـ:** المطورين المستثمرين بالفعل في سلسلة أدوات MLC LLM والمستعدين لتجميع نموذجهم الخاص، أو من يحتاجون تحديداً أحد النماذج المُضمَّنة بالفعل من قبل 2025.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'بما أن إصدار App Store من برنامج MLC Chat لم يُحدَّث منذ أواخر 2024، فلا تتوقع رؤية Phi-4 Mini أو Qwen3 أو Gemma 3 في مُنتقي النماذج. إذا كنت تريد نماذج من الجيل الحالي بكفاءة GPU من فئة Metal اليوم، فإن برنامجَي Locally AI (Apple MLX) أو PocketPal AI (llama.cpp مع Metal Performance Shaders) هما البديلان اللذان لا يزالان يحظيان بصيانة نشطة.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: أُزيل لكنه لا يزال قابلاً للضبط',
        content:
          '**أُزيل برنامج LLM Farm من App Store وTestFlight في أغسطس 2025 — يصفه ملف README الخاص به على GitHub بأنه "غير متاح مؤقتاً" في كلتا المنصتين.** لا يزال المشروع (GitHub: guinmoon/LLMFarm) مفتوح المصدر وشهد نشاطاً في مشكلات GitHub حتى 2026، لكن المستخدمين الجدد لم يعودوا قادرين على تثبيته من App Store؛ ويجب بناؤه من الكود المصدري عبر Xcode.',
        items: [
          '**ما هو:** تطبيق iOS من المطور @guinmoon يُشغّل نماذج GGUF بخيارات إعداد واسعة، وكان يُوزَّع سابقاً عبر App Store.',
          '**التوفر الحالي:** غير قابل للتثبيت من App Store أو TestFlight وقت هذا التحديث. يظل الكود المصدري عاماً وقابلاً للبناء.',
          '**البناء من الكود المصدري:** استنسخ المستودع، افتحه في Xcode، وابنِه على جهاز باستخدام حساب Apple Developer مجاني أو مدفوع — وهو مسار التحميل الجانبي المعياري لأي تطبيق iOS مفتوح المصدر بلا صفحة في App Store.',
          '**الإعدادات المكشوفة (بعد البناء):** درجة الحرارة، top-p، top-k، أخذ عينات mirostat، عقوبة التكرار، المطالبة النظامية لكل نموذج، اختيار قالب الدردشة، طول نافذة السياق.',
          '**الأنسب لـ:** المطورين المرتاحين لبناء تطبيق من الكود المصدري في Xcode والراغبين تحديداً في ضوابط أخذ عينات mirostat. أما البقية فيُفضَّل استخدام برنامج PocketPal AI أو Locally AI، وكلاهما قابل للتثبيت بالكامل من App Store ومجاني.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تتوقع أن يعمل أي رابط App Store لبرنامج LLM Farm — تعامل مع أي رابط من هذا النوع تجده في مكان آخر باعتباره قديماً. يتطلب البناء من الكود المصدري Xcode ومعرفة أساسية بتوقيع الكود في iOS. إذا كان ذلك جهداً أكبر مما تريد، فإن برنامج PocketPal AI يغطي نفس حالة استخدام "تطبيق دردشة مجاني ومرن" دون مغادرة App Store.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: ذكاء اصطناعي على الجهاز مدمج في النظام',
        content:
          '**يُشغّل Apple Intelligence نموذج الأساس الخاص بـApple والبالغ ~3B معامل على الجهاز في iPhone 15 Pro والإصدارات الأحدث (شريحة A17 Pro بذاكرة 8 جيجابايت على الأقل).** ليس تطبيق دردشة افتراضياً — بل يُشغّل ميزات النظام في Mail (الرد الذكي) والرسائل (أدوات الكتابة) والملاحظات (التلخيص) وملخصات الإشعارات. منذ iOS 26، يُتيح إطار عمل Foundation Models الخاص بـApple لمطوّري الجهات الخارجية الوصول مباشرةً إلى هذا النموذج على الجهاز، وتطبيقات مثل Locally AI تستخدمه بالفعل لتقديم واجهة دردشة حقيقية.',
        items: [
          '**أين يقع:** مدمج في iOS 18+ (إطار عمل Foundation Models منذ iOS 26). يُفعَّل من الإعدادات → Apple Intelligence وSiri.',
          '**متطلبات الجهاز:** iPhone 15 Pro / 15 Pro Max، سلسلة iPhone 16، iPhone 16e، سلسلة iPhone 17. أجهزة iPhone الأقدم (14 وما قبله) لا تدعم Apple Intelligence.',
          '**الميزات على الجهاز:** أدوات الكتابة (إعادة الكتابة، التلخيص، المراجعة) داخل أي حقل نصي، الرد الذكي في Mail والرسائل، ملخصات الإشعارات، إنشاء Genmoji.',
          '**إطار عمل Foundation Models (iOS 26+):** واجهة برمجة Swift أصلية تُتيح للمطورين وصولاً مباشراً إلى النموذج نفسه على الجهاز بأسطر برمجية قليلة — بهذه الطريقة يُتيحه برنامج Locally AI كخيار دردشة، وبها يستطيع إجراء "استخدام النموذج" في Shortcuts توجيه المطالبة إلى ذلك النموذج أو إلى Private Cloud Compute أو إلى ChatGPT.',
          '**Private Cloud Compute:** للمهام التي تتجاوز قدرة النموذج على الجهاز، يعود Apple Intelligence إلى Private Cloud Compute (PCC) — خوادم تُشغّلها Apple بنماذج أكبر مع ضمانات تشفيرية بعدم الاحتفاظ ببيانات المستخدمين. PCC اختياري ويمكن تعطيله.',
          '**علاقته بتطبيقات الدردشة:** Apple Intelligence مكمّل لا بديل. تتولى ميزاته النظامية إعادة كتابة النصوص وتلخيصها داخل تطبيقات iOS؛ بينما توفر برامج PocketPal AI وPrivate LLM وLocally AI وMLC Chat واجهة دردشة مخصصة لأي أسئلة — ويستطيع برنامج Locally AI الآن تقديم نفس نوع الواجهة لنموذج Apple ذاته.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إذا كانت Apple Intelligence هي حاجتك الوحيدة (إعادة كتابة الرسائل، تلخيص الإشعارات)، لا تحتاج إلى تطبيق دردشة منفصل. إذا أردت طرح أسئلة على النموذج مثل "اشرح النفق الكمي بمصطلحات بسيطة" أو "ضع خطة مشروع لـX"، ثبّت تطبيق دردشة — سواء كان تطبيقاً مخصصاً مثل PocketPal AI، أو Locally AI القادر على وضع نموذج Apple ذاته على الجهاز خلف نافذة دردشة.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'النماذج حسب طراز iPhone',
        content:
          '**ذاكرة iPhone العشوائية هي التي تُحدد الحد الأقصى لحجم النموذج، لا جيل الشريحة.** يستطيع iPhone بذاكرة 6 جيجابايت (14 Pro، 15) تشغيل نماذج 1.7B بيسر؛ ويستطيع iPhone بذاكرة 8 جيجابايت فأكثر (15 Pro، سلسلة 16، 16e، سلسلة 17) تشغيل نماذج 3B–4B بيسر ونماذج 7B ببطء. للاطلاع على المشهد الأوسع للنماذج عبر جميع الأجهزة (ليس الأجهزة المحمولة فقط)، راجع [أفضل نماذج LLM المحلي في 2026](/ar/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-en.svg',
        imageCaption: 'توصيات نماذج LLM حسب ذاكرة iPhone: Phi-4 Mini 3.8B Q4_K_M لأجهزة iPhone بذاكرة 8 جيجابايت فأكثر (15 Pro–17 Pro) بسرعة 8–20 رمزاً/ثانية؛ Qwen3 1.7B Q4_K_M لأجهزة iPhone بذاكرة 6 جيجابايت (14 Pro، غير Pro) بسرعة 12–20 رمزاً/ثانية؛ iPhone SE (4 جيجابايت) غير موصى به.',
        columns: ['طراز iPhone (السنة، الذاكرة العشوائية)', 'النموذج الموصى به', 'حجم التنزيل', 'السرعة المتوقعة'],
        rows: [
          { 'طراز iPhone (السنة، الذاكرة العشوائية)': 'iPhone 17 Pro (2025، 12 جيجابايت)', 'النموذج الموصى به': 'Phi-4 Mini أو Llama 3.2 3B (Q4_K_M)', 'حجم التنزيل': '~2.5–2.7 جيجابايت', 'السرعة المتوقعة': '~13–20 رمزاً/ثانية' },
          { 'طراز iPhone (السنة، الذاكرة العشوائية)': 'iPhone 16 Pro / 16 Pro Max / 16e (2024–2025، 8 جيجابايت)', 'النموذج الموصى به': 'Phi-4 Mini (3.8B Q4_K_M)', 'حجم التنزيل': '~2.7 جيجابايت', 'السرعة المتوقعة': '~10–15 رمزاً/ثانية' },
          { 'طراز iPhone (السنة، الذاكرة العشوائية)': 'iPhone 15 Pro / Pro Max (2023، 8 جيجابايت)', 'النموذج الموصى به': 'Phi-4 Mini (3.8B Q4_K_M)', 'حجم التنزيل': '~2.7 جيجابايت', 'السرعة المتوقعة': '~8–12 رمزاً/ثانية' },
          { 'طراز iPhone (السنة، الذاكرة العشوائية)': 'iPhone 14 Pro / Pro Max (2022، 6 جيجابايت)', 'النموذج الموصى به': 'Qwen3 1.7B أو SmolLM 2 1.7B (Q4_K_M)', 'حجم التنزيل': '~1.1 جيجابايت', 'السرعة المتوقعة': '~15–20 رمزاً/ثانية' },
          { 'طراز iPhone (السنة، الذاكرة العشوائية)': 'iPhone 14 / 15 / 16 (غير Pro، 6 جيجابايت)', 'النموذج الموصى به': 'Qwen3 1.7B أو SmolLM 2 1.7B (Q4_K_M)', 'حجم التنزيل': '~1.1 جيجابايت', 'السرعة المتوقعة': '~12–18 رمزاً/ثانية' },
          { 'طراز iPhone (السنة، الذاكرة العشوائية)': 'iPhone SE / الطرازات الأقدم (4 جيجابايت)', 'النموذج الموصى به': 'غير موصى به لنماذج LLM على الجهاز', 'حجم التنزيل': '—', 'السرعة المتوقعة': '—' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'لأجهزة iPhone الأقدم بذاكرة 6 جيجابايت، يُمثّل Qwen3 1.7B أفضل توازن بين حجم النموذج والجودة في 2026. SmolLM 2 1.7B (HuggingFace) مقارب له. كلاهما يُنتجان ردوداً قصيرة متماسكة (1–3 فقرات) لكنهما يُعانيان في الاستدلال متعدد الخطوات. لا تُثبّت Phi-4 Mini على iPhone بذاكرة 6 جيجابايت — يتناسب معه نظرياً لكن iOS سيُنهي التطبيق تحت أي ضغط على الذاكرة.',
          },
        ],
      },
      batteryHeat: {
        id: 'battery-heat',
        title: 'استنزاف البطارية والتباطؤ الحراري',
        content:
          '**الاستدلال بنماذج LLM على الجهاز في iPhone مُكثَّف على وحدتَي المعالجة المركزية والرسومات ويُولّد حرارة.** الاستدلال النشط (توليد النموذج للرموز) يستهلك ~3–5 واط؛ والتوليد المستمر يُبطّئ الشريحة ويستنزف البطارية بما يعادل ~20–30% في الساعة على iPhone 16 Pro.',
        image: '/images/iphone-llm-apps-battery-thermal-en.svg',
        imageCaption: 'دليل الحرارة لنماذج LLM على iPhone: الاستدلال النشط يستهلك 3–5 واط مُستنزِفاً ~20–30% بطارية/ساعة على iPhone 16 Pro؛ التباطؤ الحراري يُقلّص السرعة 30–50% بعد 10–15 دقيقة — أبقِ الجهاز بشاشته لأعلى على سطح صلب لتبديد الحرارة.',
        items: [
          '**استنزاف البطارية (الدردشة النشطة):** ~20–30% في الساعة على iPhone 16 Pro عند تشغيل Phi-4 Mini. يستنزف iPhone 17 Pro الطاقة أسرع قليلاً بسبب ذروة القدرة الأعلى لكنه يُعوّض ذلك بإتمام الحمل الوظيفي أسرع.',
          '**يبدأ التباطؤ الحراري بعد ~10–15 دقيقة من التوليد المستمر.** حين تبلغ حرارة سطح الشريحة ~38 درجة مئوية، يُقلّص iOS سرعات المعالجة مُخفِّضاً الرموز في الثانية بنسبة 30–50%. يستعيد الجهاز سرعته الكاملة بعد التبريد.',
          '**التخفيف:** أبقِ iPhone بشاشته لأعلى على سطح صلب (لا في يدك أو جيبك) خلال جلسات الاستدلال الطويلة للسماح بتبديد الحرارة. غطاء التبريد السلبي مفيد لكنه نادراً ما يكون ضرورياً للتفاعلات القصيرة.',
          '**الاستنزاف الخفي:** إذا تركت تطبيق الدردشة مفتوحاً في الخلفية بعد التوليد، تظل الذاكرة العشوائية محجوزة لكن لا يعمل أي استدلال — تأثيره على البطارية ضئيل. إغلاق التطبيق بالكامل يُعيد ~3 جيجابايت من الذاكرة العشوائية.',
          '**الشحن عبر MagSafe أثناء الاستدلال:** مقبول على iPhone 17 Pro و16 Pro (كلاهما بتصميم حراري مُحسَّن). على iPhone 15 Pro، قد يصل الجمع بين الشحن والاستدلال إلى الحدود الحرارية أسرع — يُفضَّل الشحن بعد الانتهاء.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تُشغّل الاستدلال بنماذج LLM على iPhone تحت أشعة الشمس المباشرة أو في سيارة ساخنة. الجمع بين الحرارة البيئية وحمل الاستدلال يدفع الشريحة إلى ما وراء حدودها الحرارية في دقائق، مُفعِّلاً تباطؤاً حاداً وربما تحذير "يحتاج iPhone إلى التبريد". لا يتعطل تطبيق الدردشة لكن التوليد يبطؤ بشكل كبير.',
          },
        ],
      },
      iosIntegration: {
        id: 'ios-integration',
        title: 'iOS Shortcuts وSiri والتحميل الجانبي',
        content:
          '**يتفاوت التكامل مع iOS تفاوتاً كبيراً بين التطبيقات.** يوفر برنامجا Private LLM وLocally AI إجراءات Shortcuts؛ فيما يُعدّ برنامجا PocketPal AI وMLC Chat تطبيقَي دردشة مستقلين بدون إجراءات Shortcuts في 2026.',
        image: '/images/iphone-llm-apps-ios-integration-en.svg',
        imageCaption: 'التكامل مع iOS حسب تطبيق LLM المحلي: يدعم برنامجا Private LLM وLocally AI وApple Intelligence Shortcuts (ويضيف Private LLM ميزة Siri)؛ بينما برنامجا PocketPal AI وMLC Chat تطبيقا دردشة مستقلان بدون إجراءات Shortcuts في 2026.',
        items: [
          '**برنامج Private LLM** يكشف إجراء Shortcuts "توليد نص مع Private LLM" ومُشغِّلاً صوتياً "اسأل Private LLM [السؤال] يا Siri". الأكثر اندماجاً أصيلاً مع iOS بين تطبيقات الدردشة المدفوعة.',
          '**برنامج Locally AI** يكشف إجراء Shortcuts مجاناً، ويستطيع توجيه اختصار إلى نموذج Apple ذاته على الجهاز عبر تكامله مع Foundation Models — بدون مُشغِّل صوتي، لكن مع أتمتة Shortcuts دون دفع.',
          '**برنامج PocketPal AI** تطبيق دردشة مستقل — بدون إجراء Shortcuts، بدون تكامل مع Siri. تفتح التطبيق وتتحدث. خطط دعم Shortcuts مُتابَعة في مشكلات GitHub لكنها لم تُطرح.',
          '**برنامج MLC Chat** تطبيق مرجعي لمشروع MLC LLM — تكامل iOS بسيط وبدون تحديثات منذ أواخر 2024. بدون إجراء Shortcuts.',
          '**برنامج LLM Farm** أُزيل من App Store (أغسطس 2025)، وحتى عند بنائه من الكود المصدري لا يملك إجراء Shortcuts.',
          '**Apple Intelligence** يتكامل مع iOS Shortcuts عبر إجراء "استخدام النموذج" (iOS 18.4+، وُسِّع مع إطار عمل Foundation Models في iOS 26). يُوجَّه الطلب إلى النموذج على الجهاز أو إلى Private Cloud Compute أو إلى ChatGPT (قابل للضبط). يمكن ربط المخرجات على الجهاز بإجراءات Shortcuts أخرى.',
          '**التحميل الجانبي:** برامج PocketPal AI وPrivate LLM وLocally AI وMLC Chat موجودة في App Store ولا تستلزم تحميلاً جانبياً أو كسر حماية؛ وApple Intelligence مدمج في iOS. برنامج LLM Farm هو الاستثناء — أصبح تثبيته يستلزم الآن البناء من الكود المصدري في Xcode. يستطيع مستخدمو الاتحاد الأوروبي أيضاً تثبيت تطبيقات App Store عبر منصات بديلة وفق قانون الأسواق الرقمية في 2026، لكن التطبيق نفسه مطابق.',
        ],
        promptExamples: [
          {
            label: 'اختصار Private LLM: تلخيص النص المحدد',
            text: '1. الإجراء: "الحصول على النص المحدد" (مدخل قائمة المشاركة في iOS).\n2. الإجراء: "توليد نص مع Private LLM" → المطالبة: "لخّص النص التالي في ثلاث نقاط رئيسية: [النص المحدد]" → النموذج: Phi-4 Mini.\n3. الإجراء: "عرض النتيجة" أو "نسخ إلى الحافظة".\nأضفه إلى قائمة المشاركة لتشغيله على أي نص محدد في أي تطبيق، بالكامل دون اتصال.',
          },
          {
            label: 'اختصار Apple Intelligence: إعادة كتابة النبرة',
            text: '1. الإجراء: "الحصول على الحافظة".\n2. الإجراء: "استخدام النموذج" → النموذج: على الجهاز → المطالبة: "أعد كتابة هذا بنبرة مهنية وموجزة: [الحافظة]".\n3. الإجراء: "نسخ إلى الحافظة".\nاربطه بأداة شاشة القفل لإعادة كتابة أي شيء تنسخه بضغطة واحدة.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للاستخدام باليدين الحرتين أثناء القيادة أو الطهي، يُعدّ "اسأل Private LLM يا Siri" الخيار الوحيد على الجهاز الذي يعمل دون لمس الهاتف. يدعم Apple Intelligence الصوت عبر Siri لكن لمهام النظام فقط (الكتابة والتلخيص وإجراءات التطبيق) — لا يتيح أسئلة وأجوبة عامة كما تفعله تطبيقات الدردشة.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**تثبيت نموذج أكبر مما تسمح به ذاكرة iPhone.** نموذج 7B على iPhone بذاكرة 8 جيجابايت يعمل بـ~3–5 رموز/ثانية وينهار حين يستعيد iOS الذاكرة لتطبيق آخر. التزم بالنموذج الموصى به لطراز iPhone الخاص بك (3B–4B لأجهزة 8 جيجابايت، و1.7B لأجهزة 6 جيجابايت).',
          '**توقّع جودة الذكاء الاصطناعي السحابي من النماذج على الجهاز.** Phi-4 Mini (3.8B) مثير للإعجاب لحجمه لكنه ليس GPT-5.5. استخدمه للدردشة والتلخيص والصياغة والأسئلة السريعة — لا للاستدلال متعدد الخطوات أو توليد الكود المعقد أو الكتابة الإبداعية الدقيقة.',
          '**تشغيل الاستدلال تحت أشعة الشمس المباشرة أو في سيارة ساخنة.** يبدأ التباطؤ الحراري في دقائق. يتراجع التوليد بنسبة 30–50% وقد يظهر تحذير "يحتاج iPhone إلى التبريد". شغّل الاستدلال في درجة حرارة الغرفة.',
          '**إبقاء 3 تطبيقات دردشة أو أكثر مع نماذج بحجم 3 جيجابايت في كل منها.** ستستهلك ~10 جيجابايت من التخزين في نماذج مكررة. اختر تطبيقاً واحداً ونموذجاً واحداً؛ وألغِ تثبيت الباقي حتى تتأكد أنك بحاجة إليها.',
          '**افتراض أن Apple Intelligence لا يملك أي واجهة دردشة إطلاقاً.** كان ذلك صحيحاً حتى iOS 18، لكن منذ iOS 26 تستطيع تطبيقات مثل Locally AI وضع نموذج Apple على الجهاز خلف نافذة دردشة حقيقية عبر إطار عمل Foundation Models. أما ميزات النظام (أدوات الكتابة، الرد الذكي) بحد ذاتها فلا تزال ليست واجهة دردشة.',
          '**البحث عن برنامج LLM Farm في App Store.** أُزيل في أغسطس 2025. البحث عنه في App Store مضيعة للوقت؛ استخدم برنامج PocketPal AI لنفس حالة الاستخدام المجانية المرنة، أو ابنِ برنامج LLM Farm من الكود المصدري في Xcode إذا احتجت تحديداً إلى ضوابط mirostat.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'برنامج PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (تطبيق iOS مفتوح المصدر).',
          'برنامج Private LLM — [صفحة App Store](https://apps.apple.com) وتوثيق المطوّر.',
          'برنامج Locally AI — [صفحة App Store](https://apps.apple.com) (فريق LM Studio، مبني على Apple MLX).',
          'برنامج MLC Chat / مشروع MLC LLM — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (نشر iOS بتسريع Metal).',
          'برنامج LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (تطبيق iOS مفتوح المصدر؛ صفحة App Store/TestFlight غير متاحة مؤقتاً وفق ملف README الخاص بالمشروع).',
          'Apple Intelligence والنماذج الأساسية على الجهاز — [Apple Machine Learning Research](https://machinelearning.apple.com) وتوثيق Apple Developer (إطار عمل Foundation Models، قُدِّم مع iOS 26).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يستطيع iPhone فعلاً تشغيل نموذج 7B؟',
            a: 'من الناحية التقنية نعم على iPhone 15 Pro والإصدارات الأحدث (ذاكرة 8 جيجابايت)، لكن ليس بسرعة قابلة للاستخدام. نموذج 7B Q4 على iPhone 16 Pro يُولّد بـ~3–5 رموز/ثانية — وهو مُحبِط للدردشة. يميل iOS أيضاً إلى إنهاء التطبيق حين تحتاج تطبيقات أخرى إلى الذاكرة. استخدم نماذج 3B–4B (Phi-4 Mini وLlama 3.2 3B وGemma 3 4B) للدردشة اليومية على الجهاز. للحصول على جودة 7B+، اتصل عن بُعد بـMac أو حاسوب منزلي يُشغّل برنامج Ollama.',
          },
          {
            q: 'هل يستنزف الذكاء الاصطناعي المحلي بطارية iPhone؟',
            a: 'نعم — الاستدلال النشط يستهلك ~3–5 واط ويستنزف البطارية بما يعادل ~20–30% في الساعة على iPhone 16 Pro. للاستخدام العرضي (بضع مطالبات)، يكون التأثير ضئيلاً. للاستخدام المستمر (محادثة طويلة، مهام تلخيص متعددة)، أبقِ iPhone موصولاً بالشاحن. النموذج ذاته في الذاكرة العشوائية بدون استدلال نشط له تأثير ضئيل على البطارية.',
          },
          {
            q: 'هل يسخن iPhone عند استخدام الذكاء الاصطناعي المحلي؟',
            a: 'نعم، بعد نحو 10–15 دقيقة من التوليد المستمر. تبلغ حرارة سطح الشريحة ~38 درجة مئوية ويُقلّص iOS سرعات المعالجة مُخفِّضاً الرموز في الثانية بنسبة 30–50%. للتخفيف: أبقِ iPhone بشاشته لأعلى على سطح صلب (لا في يدك) خلال الجلسات الطويلة، وتجنب أشعة الشمس المباشرة. التفاعلات القصيرة (أقل من 5 دقائق) نادراً ما تُسبّب حرارة ملحوظة.',
          },
          {
            q: 'هل يمكنني استخدام Siri مع نموذج محلي؟',
            a: 'نعم، مع برنامج Private LLM (4.99 دولار دفعة واحدة). قول "اسأل Private LLM [سؤالك] يا Siri" يُوجَّه المطالبة إلى النموذج على الجهاز ويقرأ Siri الإجابة — بالكامل دون اتصال. برامج PocketPal AI وLocally AI وMLC Chat لا تمتلك تكاملاً صوتياً مع Siri في 2026، رغم أن برنامج Locally AI يدعم أتمتة Shortcuts. يتكامل Apple Intelligence مع Siri لكن لمهام النظام فقط (الكتابة والتلخيص وإجراءات التطبيق)، لا لأسئلة وأجوبة عامة.',
          },
          {
            q: 'هل تعمل هذه التطبيقات على iPhone SE أو الأجهزة الأقدم؟',
            a: 'بشكل محدود. iPhone SE (ذاكرة 4 جيجابايت) دون الحد العملي لنماذج LLM على الجهاز في 2026. يستطيع iPhone 14 / 15 (غير Pro، ذاكرة 6 جيجابايت) تشغيل نماذج 1.7B (Qwen3 1.7B وSmolLM 2 1.7B) لكن ليس 3B+. يستطيع iPhone 14 Pro و15 Pro (6–8 جيجابايت) تشغيل نماذج 3B كـPhi-4 Mini بـ8–12 رمزاً/ثانية. للأجهزة الأقدم، المسار الأفضل هو الاتصال عن بُعد بـMac أو حاسوب منزلي.',
          },
          {
            q: 'هل يمكنني مزامنة سجل الدردشة بين iPhone وMac؟',
            a: 'لا في برامج PocketPal AI وPrivate LLM وMLC Chat — يُخزَّن سجل الدردشة محلياً على كل جهاز، بدون مزامنة iCloud. برنامجا Private LLM وLocally AI كلاهما شراء/تنزيل شامل يعمل أيضاً بشكل أصلي على Mac، لكن السجل مع ذلك لا يتزامن بين نسختَي iPhone وMac. للحصول على سجل دردشة عبر الأجهزة، النهج العملي هو تشغيل Open WebUI على Mac منزلي والوصول إليه من متصفحَي iPhone وMac — يُخزّن Open WebUI سجل الدردشة على الخادم.',
          },
          {
            q: 'هل هذه التطبيقات متاحة خارج App Store؟',
            a: 'برنامج PocketPal AI مفتوح المصدر ويمكن بناؤه من المصدر عبر Xcode، لكن إصدار App Store هو التوزيع المعياري. برنامج LLM Farm هو الاستثناء الذي يستلزم الآن البناء من الكود المصدري — أُزيل من App Store وTestFlight في أغسطس 2025. برامج Private LLM وLocally AI وMLC Chat متاحة في App Store فقط. يستطيع مستخدمو الاتحاد الأوروبي تثبيت تطبيقات App Store عبر منصات بديلة وفق قانون الأسواق الرقمية في 2026، لكن المحتوى مطابق.',
          },
          {
            q: 'هل يستلزم أي منها كسر حماية؟',
            a: 'لا. برامج PocketPal AI وPrivate LLM وLocally AI وMLC Chat وApple Intelligence تعمل جميعها على iOS المعياري. كما أن بناء برنامج LLM Farm من الكود المصدري في Xcode لا يستلزم كسر حماية — فهو يستخدم التحميل الجانبي المعياري للمطورين، لا ثغرة كسر حماية. كسر الحماية غير مطلوب وغير مُوصى به لأي من هذه التطبيقات.',
          },
          {
            q: 'هل يمكنني استخدام الذكاء الاصطناعي المحلي في iOS Shortcuts؟',
            a: 'نعم، عبر برنامج Private LLM (إجراء "توليد نص مع Private LLM")، أو برنامج Locally AI (إجراء Shortcuts مجاني)، أو Apple Intelligence (إجراء "استخدام النموذج"، iOS 18.4+، وُسِّع مع iOS 26). برنامجا PocketPal AI وMLC Chat لا يملكان إجراءات Shortcuts في 2026. برنامج Locally AI هو الخيار المجاني الوحيد الذي يوفر دعم Shortcuts والوصول إلى نموذج Apple ذاته على الجهاز معاً.',
          },
          {
            q: 'كيف يُقارن الذكاء الاصطناعي المحلي بتطبيق ChatGPT على iPhone؟',
            a: 'النماذج على الجهاز (Phi-4 Mini وLlama 3.2 3B) لا تزال متأخرة بوضوح عن نماذج السحابة المتطورة في الاستدلال المعقد والمعرفة الواسعة بالعالم والمهام متعددة الوسائط، لكنها أسرع في الاستفسارات البسيطة (بدون رحلة ذهاب وإياب عبر الشبكة) وخاصة بالكامل. المقايضة الصريحة: الذكاء الاصطناعي المحلي للمهام الروتينية والخاصة؛ وChatGPT أو تطبيق سحابي آخر للأسئلة الصعبة العرضية. كثير من المستخدمين في 2026 يحتفظون بكليهما ويختارون وفق الاستفسار.',
          },
          {
            q: 'هل لا يزال برنامج LLM Farm آمناً للاستخدام الآن بعد إزالته من App Store؟',
            a: 'الكود المصدري عام على GitHub وما زال يتلقى نشاطاً في المشكلات حتى 2026، فهو ليس مهجوراً، لكن بمجرد بنائه من الكود المصدري وتحميله جانبياً، لم يعد يمر بعملية مراجعة App Store الخاصة بـApple. إذا لم تكن بحاجة تحديداً إلى ضوابط أخذ عينات mirostat، فإن برنامج PocketPal AI يغطي نفس حالة الاستخدام المجانية والمرنة ومفتوحة المصدر بينما يبقى في App Store بمراجعة Apple المعيارية.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل تطبيقات LLM المحلي لـ Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — مقالة مُرافِقة تُغطي البدائل على Android (Maid وLayla وMLC Chat وTermux + Ollama).',
          '[كيف تُشغّل الذكاء الاصطناعي على الجهاز اللوحي: iPad وAndroid (2026)](/ar/power-local-llm/run-ai-on-tablet-ipad-android) — دليل المنصة لقرّاء الأجهزة اللوحية.',
          '[أفضل نماذج LLM للأجهزة المحمولة في 2026: Phi-4 Mini مقابل Gemma 3 مقابل SmolLM](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — مقالة مُرافِقة من جانب النموذج لاختيار ما تُشغّله في هذه التطبيقات.',
          '[أفضل نماذج LLM المحلي في 2026](/ar/local-llms/best-local-llms-2026) — مشهد أوسع للنماذج يُغطي جميع مستويات الأجهزة، لا الأجهزة المحمولة فقط.',
          '[بناء مساعد صوتي محلي على هاتفك: Whisper + LLM محلي](/ar/power-local-llm/voice-assistant-local-mobile-offline) — يُوسّع هذه التطبيقات بإدخال/إخراج صوتي بدون اتصال.',
          '[أفضل تطبيق ذكاء اصطناعي محلي للحواسيب الضعيفة](/ar/power-local-llm/best-local-ai-app-low-end-pc) — بديل سطح مكتب للمستخدمين الراغبين في الاتصال عن بُعد بجهاز منزلي أكثر قدرة.',
          '[دليل برامج LLM المحلي 2026](/ar/power-local-llm/local-llm-software-directory-2026) — دليل شامل بجميع أدوات LLM المحلي الجديرة بالاهتمام عبر جميع المنصات.',
        ],
      },
    },
},
}
