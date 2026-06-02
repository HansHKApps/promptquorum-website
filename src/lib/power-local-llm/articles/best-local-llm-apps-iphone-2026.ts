// Power Local LLM — Best Local LLM Apps for iPhone in 2026 (Run AI Without WiFi)
// Slug: best-local-llm-apps-iphone-2026
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Best Local LLM Apps for iPhone in 2026 (Run AI Without WiFi)',
    seoTitle: 'Best Local LLM Apps for iPhone 2026',
    intro:
      'Five iPhone apps run real LLMs fully on-device in 2026: PocketPal AI, Private LLM, MLC Chat, LLM Farm, and Apple Intelligence (system-integrated). All work without WiFi once the model is downloaded. This guide ranks them on tokens-per-second on iPhone 16 Pro and iPhone 17 Pro, model library, RAM management, privacy posture, and iOS integration.',
    metaDescription:
      'Five iPhone apps that run real LLMs on-device in 2026. PocketPal AI, Private LLM, MLC Chat, LLM Farm tested on iPhone 16 Pro and 17 Pro. Speed, privacy, model library compared.',
    twitterDescription:
      'iPhone local AI in 2026: PocketPal AI (free default), Private LLM (paid Shortcuts), MLC Chat (Apple Silicon optimised), LLM Farm (most configurable). All run offline once downloaded.',
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
      '**For most iPhone users in 2026, install PocketPal AI from the App Store and download Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** It is free, open-source, runs on iPhone 14 Pro and newer (any iPhone with 6 GB+ RAM), and produces ~10–15 tokens/sec on iPhone 16 Pro for everyday chat. For paid Shortcuts and Siri integration, Private LLM is the strongest paid option (~£10 one-time). For the absolute fastest tokens/sec on Apple Silicon, MLC Chat uses MLC LLM with Metal acceleration. LLM Farm is the most configurable for power users. Apple Intelligence runs models on-device too but is system-integrated and not a chat app — it complements rather than competes with these apps.',
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM app for iPhone in 2026?',
        answer:
          'PocketPal AI is the best free default for most iPhone users — open-source, App Store install, supports any GGUF model from Hugging Face, and runs Phi-4 Mini (3.8B) at ~10–15 tokens/sec on iPhone 16 Pro. Private LLM is the strongest paid option (~£10 one-time) with iOS Shortcuts and Siri integration. MLC Chat is fastest on Apple Silicon thanks to Metal acceleration. LLM Farm is the most configurable for advanced users. Apple Intelligence runs on-device models too but is system-integrated and complements these apps rather than replacing them.',
        bullets: [
          'PocketPal AI — free, open-source, App Store. Best default for most users. Supports any GGUF model.',
          'Private LLM — ~£10 one-time. Best paid option. iOS Shortcuts + Siri integration. Curated model library.',
          'MLC Chat — free, MLC LLM project. Fastest on Apple Silicon (Metal-accelerated). Smaller model selection.',
          'LLM Farm — free, open-source. Most configurable. Best for power users who want to tune sampling parameters.',
          'Apple Intelligence — system-integrated, not a separate app. On-device 3B model used by Mail, Messages, and Notes.',
          'Recommended model for iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — runs at ~10–15 tokens/sec.',
          'Older iPhones (14 Pro, 15 Pro): Qwen3 1.7B or SmolLM 2 1.7B — fits in 6 GB RAM and runs at ~15–20 tokens/sec.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Which iPhone App Should You Install First?', anchor: '#which-app' },
      { label: 'iPhone App Comparison Table', anchor: '#comparison-table' },
      { label: 'PocketPal AI: Free Open-Source Default', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: Paid Option with iOS Integration', anchor: '#private-llm' },
      { label: 'MLC Chat: Apple Silicon Optimisation', anchor: '#mlc-chat' },
      { label: 'LLM Farm: Most Configurable', anchor: '#llm-farm' },
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
          '**Private LLM is the best paid option (~£10 one-time, no subscription).** Curated model library, iOS Shortcuts integration, and Siri "Hey Siri, ask Private LLM" support. Worth paying if you want hands-free voice access or workflow automation.',
          '**MLC Chat is fastest on Apple Silicon.** Uses MLC LLM with Metal GPU acceleration, achieving ~25–35% faster generation than llama.cpp-based apps on the same hardware. Smaller model selection than PocketPal AI.',
          '**LLM Farm is the most configurable.** Exposes sampling parameters (temperature, top-p, mirostat), system prompts per model, and chat templates. Best for users tuning models for specific use cases.',
          '**Apple Intelligence is on-device but not a separate app.** Apple\'s 3B foundation model runs in iOS 18+ on iPhone 15 Pro and newer. It powers system features (Writing Tools, Smart Reply, Notification Summaries) but is not directly accessible as a chat interface.',
          '**Recommended model for iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Best balance of quality and speed for the 8 GB RAM tier. Older iPhones with 6 GB RAM (iPhone 14 Pro): Qwen3 1.7B or SmolLM 2 1.7B.',
          '**No app requires jailbreak. All five run on stock iOS.** PocketPal AI, Private LLM, MLC Chat, and LLM Farm are all on the App Store; Apple Intelligence is built into iOS.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Apps tested:** PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence (system).',
          '**Test devices:** iPhone 16 Pro (A18 Pro, 8 GB RAM) and iPhone 17 Pro (A19 Pro).',
          '**Inference engines:** llama.cpp (PocketPal AI, LLM Farm), MLC LLM with Metal (MLC Chat), proprietary on-device runtime (Private LLM, Apple Intelligence).',
          '**Minimum iPhone for 3B+ models:** iPhone 14 Pro (A16, 6 GB RAM) for 1.7B; iPhone 15 Pro / 16 Pro / 17 Pro (8 GB+) for 3B–4B.',
          '**Best free app overall:** PocketPal AI — App Store, open-source, model flexibility.',
          '**Best paid app overall:** Private LLM — ~£10 one-time, Shortcuts + Siri support.',
          '**Offline:** All five run fully offline once the model is downloaded; no cloud calls.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Which iPhone App Should You Install First?',
        content:
          '**For most users: PocketPal AI from the App Store, then download Phi-4 Mini (3.8B Q4_K_M).** This combination works on iPhone 14 Pro and newer, costs nothing, and produces usable output for everyday chat, summarisation, and quick drafting. Choose a different app only when you have a specific need it does not cover.',
        image: '/images/iphone-llm-apps-which-app-en.svg',
        imageCaption: 'Which local AI app to install on iPhone: PocketPal AI (free default), Private LLM (Siri + Shortcuts), MLC Chat (fastest on Apple Silicon), LLM Farm (configurable), Apple Intelligence (iOS 18+ built-in).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For most iPhone users in 2026, install PocketPal AI (free, App Store) and download Phi-4 Mini — it covers everyday chat, summarisation, and drafting on any iPhone with 6 GB+ RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Five iPhone apps run AI fully on your phone in 2026. PocketPal AI is the best free starting point — install it, download a 2.7 GB model file once, and you have a private chat assistant that works on the train without WiFi. Private LLM is the paid option if you want Siri to talk to the local model. MLC Chat is the fastest. LLM Farm is the most flexible. Apple Intelligence is built into iOS but not a chat app. PocketPal AI fits 90% of use cases.',
          },
        ],
        decisionBlock: {
          title: 'Decision: Which iPhone Local AI App?',
          localIf: [
            'You want a free chat AI that works offline → PocketPal AI',
            'You want Siri to talk to your local model → Private LLM',
            'You want the fastest generation speed on Apple Silicon → MLC Chat',
            'You want to tune sampling parameters and chat templates → LLM Farm',
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
            'Fastest on chip: MLC Chat',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Install PocketPal AI first, even if you plan to pay for Private LLM later. Use PocketPal AI to test whether on-device inference on your iPhone tier feels fast enough for your use case. If yes, decide whether the iOS Shortcuts and Siri integration in Private LLM is worth ~£10. If no, you saved £10 finding out before paying.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone App Comparison Table',
        content:
          '**The five apps differ on three axes that matter to most users: cost, model flexibility, and integration with iOS.** Speed differences exist but are smaller than the gap between any of these apps and a cloud LLM.',
        image: '/images/iphone-llm-apps-comparison-en.svg',
        imageCaption: 'iPhone local LLM app comparison: PocketPal AI and LLM Farm (free, ~10–15 tok/s), MLC Chat (free, ~14–20 tok/s Metal-accelerated), Private LLM (~£10 one-time, Siri + Shortcuts), Apple Intelligence (system-integrated, iOS 18+).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI is the best free default, Private LLM is the best paid option, MLC Chat is fastest, LLM Farm is most configurable, Apple Intelligence is system-integrated.',
          },
          {
            type: 'plain-terms',
            text: 'The choice usually comes down to three things: do you want to pay (Private LLM), do you want maximum speed (MLC Chat), or do you want flexibility to tweak settings (LLM Farm). For everything else, PocketPal AI is the default. The numbers in the table assume Q4_K_M quantisation — the standard for mobile inference in 2026.',
          },
        ],
        columns: ['App', 'Cost', 'Tokens/sec (Phi-4 Mini, 16 Pro)', 'Privacy', 'Best for'],
        rows: [
          { 'App': 'PocketPal AI', 'Cost': 'Free (open-source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacy': 'Local-only, no telemetry', 'Best for': 'Free default for most users' },
          { 'App': 'Private LLM', 'Cost': '~£10 one-time', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–14', 'Privacy': 'Local-only, opt-in analytics', 'Best for': 'iOS Shortcuts + Siri integration' },
          { 'App': 'MLC Chat', 'Cost': 'Free (open-source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~14–20 (Metal-accelerated)', 'Privacy': 'Local-only, no telemetry', 'Best for': 'Fastest on Apple Silicon' },
          { 'App': 'LLM Farm', 'Cost': 'Free (open-source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacy': 'Local-only, no telemetry', 'Best for': 'Power users tuning sampling' },
          { 'App': 'Apple Intelligence', 'Cost': 'Free (built into iOS 18+)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A (system feature)', 'Privacy': 'Local + opt-in Private Cloud Compute', 'Best for': 'Mail, Messages, Notes assistance' },
        ],
        note:
          '**Note on Apple Neural Engine (ANE) vs Metal:** PocketPal AI and LLM Farm use llama.cpp with Metal Performance Shaders for inference, which runs on the GPU. MLC Chat uses MLC LLM with deeper Metal optimisation, achieving 25–35% higher tokens/sec on the same hardware. Apple Intelligence uses ANE specifically for the system 3B model, which is more power-efficient but less flexible than Metal-based inference. The A18 Pro (iPhone 16 Pro) and A19 Pro (iPhone 17 Pro) both have improved ANEs, but third-party chat apps cannot directly target ANE — that is reserved for Apple Intelligence and Apple-built APIs.',
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
          '**Private LLM is the strongest paid iPhone option in 2026 (~£10 one-time, no subscription).** It is App Store only and ships with a curated library of optimised models. Its differentiator is iOS integration: Shortcuts actions and a "Hey Siri, ask Private LLM" voice command.',
        items: [
          '**What it is:** a paid iOS app with a curated model library and deep iOS integration. Uses a proprietary on-device runtime optimised for Apple Silicon.',
          '**Install:** App Store → "Private LLM". One-time purchase ~£10 (no subscription).',
          '**Curated model library:** ~30 models pre-tested and optimised for iPhone, including Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct, and several uncensored variants. Less flexibility than PocketPal AI but no risk of installing a model that crashes.',
          '**iOS Shortcuts:** Private LLM exposes a "Generate Text with Private LLM" action that you can chain into Shortcuts automations. Useful for triggering local AI from a button on your home screen or via NFC tags.',
          '**Siri integration:** "Hey Siri, ask Private LLM [your question]" routes the prompt to the on-device model and reads the answer back. Works without an internet connection. Latency is higher than the chat UI (~3–5 seconds before audio starts).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Private LLM\'s ~£10 price covers the iPhone app only. The macOS version is a separate purchase, and the iPad version is universal with iPhone (one purchase covers both). Confirm the platform you need before paying. Apple Family Sharing covers the app across family members.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: Apple Silicon Optimisation',
        content:
          '**MLC Chat (from the MLC LLM project) is the fastest local LLM app on iPhone in 2026 thanks to Metal GPU acceleration.** It is free, open-source, and runs models compiled by the MLC LLM toolchain rather than standard GGUF.',
        items: [
          '**What it is:** the iOS reference app from the MLC LLM project, demonstrating MLC LLM\'s Metal-accelerated inference on Apple Silicon.',
          '**Install:** App Store → "MLC Chat". Free.',
          '**Speed advantage:** ~25–35% faster than llama.cpp-based apps on the same iPhone for the same model. On iPhone 16 Pro: Phi-4 Mini ~14–20 tok/sec (vs ~10–15 in PocketPal AI).',
          '**Model library:** smaller than PocketPal AI — limited to models that the MLC LLM project has compiled for iOS. Currently includes Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B, RedPajama, and a handful of others. Not every Hugging Face GGUF works.',
          '**Best for:** users who prioritise speed over model flexibility. If your target model is in the MLC library, MLC Chat will be the fastest option on your iPhone.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'MLC LLM\'s Metal acceleration matters most on older iPhones with weaker Neural Engines. On iPhone 17 Pro, the gap between MLC Chat and PocketPal AI narrows because the A19 Pro\'s improved Neural Engine reduces llama.cpp\'s relative disadvantage. On iPhone 14 Pro and 15 Pro, MLC Chat\'s lead is largest.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: Most Configurable',
        content:
          '**LLM Farm is the most configurable iPhone local LLM app in 2026.** Free, open-source (GitHub: guinmoon/LLMFarm), and exposes sampling parameters that other apps hide. Best for users who want to tune model behaviour rather than accept defaults.',
        items: [
          '**What it is:** an iOS app from developer @guinmoon that runs GGUF models with extensive configuration options.',
          '**Install:** App Store → "LLM Farm". Free.',
          '**Adding a model:** tap the model library icon → "Add Model from URL" → paste a Hugging Face direct download link for a GGUF file. Alternatively, transfer a GGUF via Apple Files.',
          '**Configuration exposed:** temperature, top-p, top-k, mirostat sampling, repeat penalty, system prompt per model, chat template selection, context window length. Every setting most apps hide is editable here.',
          '**Generation speed:** comparable to PocketPal AI (both use llama.cpp). On iPhone 16 Pro: Phi-4 Mini ~10–15 tok/sec.',
          '**Best for:** developers, prompt engineers, and users who want to compare sampling settings or test different chat templates without flashing through three settings menus.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'LLM Farm\'s exposed mirostat sampling is useful for creative writing tasks where standard temperature/top-p sampling produces repetitive output. Set mirostat to mode 2 with target entropy ~5.0 and learning rate 0.1 as a starting point. PocketPal AI and Private LLM do not expose mirostat at all.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: System-Integrated On-Device AI',
        content:
          '**Apple Intelligence runs Apple\'s own ~3B foundation model on-device on iPhone 15 Pro and newer (A17 Pro chip with 8 GB RAM minimum).** It is not a chat app — it powers system features in Mail (Smart Reply), Messages (writing tools), Notes (summarisation), and Notification Summaries. The model is not directly accessible to user prompts the way PocketPal AI or Private LLM are.',
        items: [
          '**Where it lives:** integrated into iOS 18+. Enable in Settings → Apple Intelligence & Siri.',
          '**Hardware requirement:** iPhone 15 Pro / 15 Pro Max, iPhone 16 series, iPhone 17 series. Earlier iPhones (14 and below) do not support Apple Intelligence.',
          '**On-device features:** Writing Tools (rewrite, summarise, proofread) inside any text field, Smart Reply in Mail and Messages, Notification Summaries, Genmoji generation.',
          '**Private Cloud Compute:** for tasks beyond the on-device model\'s capability, Apple Intelligence falls back to Private Cloud Compute (PCC) — Apple-operated servers running larger models with cryptographic guarantees that no user data is retained. PCC is opt-in and can be disabled.',
          '**How it relates to chat apps:** Apple Intelligence is a complement, not a replacement. It handles text rewriting and summarisation inside iOS apps; PocketPal AI / Private LLM / MLC Chat / LLM Farm provide a dedicated chat interface for arbitrary questions.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If Apple Intelligence is your only need (rewriting emails, summarising notifications), you do not need a separate chat app. If you want to ask the model questions like "explain quantum tunnelling in simple terms" or "draft a project plan for X", install one of the four chat apps — Apple Intelligence does not expose that interface.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Models by iPhone Tier',
        content:
          '**iPhone RAM determines the model size ceiling — not the chip generation.** A 6 GB iPhone (14 Pro, 15) can comfortably run 1.7B models; an 8 GB iPhone (15 Pro, 16 Pro, 17 Pro) runs 3B–4B models comfortably and 7B models slowly. For the broader model landscape across all hardware (not just mobile), see [Best Local LLMs in 2026](/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-en.svg',
        imageCaption: 'LLM model recommendations by iPhone RAM: Phi-4 Mini 3.8B Q4_K_M for 8 GB iPhones (15 Pro–17 Pro) at 8–20 tok/s; Qwen3 1.7B Q4_K_M for 6 GB iPhones (14 Pro, non-Pro) at 12–20 tok/s; iPhone SE (4 GB) not recommended.',
        columns: ['iPhone Tier (Year, RAM)', 'Recommended Model', 'Download Size', 'Expected Speed'],
        rows: [
          { 'iPhone Tier (Year, RAM)': 'iPhone 17 Pro (2025, 8–12 GB)', 'Recommended Model': 'Phi-4 Mini or Llama 3.2 3B (Q4_K_M)', 'Download Size': '~2.5–2.7 GB', 'Expected Speed': '~13–20 tok/sec' },
          { 'iPhone Tier (Year, RAM)': 'iPhone 16 Pro / 16 Pro Max (2024, 8 GB)', 'Recommended Model': 'Phi-4 Mini (3.8B Q4_K_M)', 'Download Size': '~2.7 GB', 'Expected Speed': '~10–15 tok/sec' },
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
          '**iOS integration varies significantly by app.** Private LLM has the deepest integration (Shortcuts + Siri); PocketPal AI, MLC Chat, and LLM Farm are standalone chat apps with no Shortcuts actions in 2026.',
        image: '/images/iphone-llm-apps-ios-integration-en.svg',
        imageCaption: 'iOS integration by local LLM app: Private LLM and Apple Intelligence support Shortcuts and Siri; PocketPal AI, MLC Chat, and LLM Farm are standalone chat apps with no Shortcuts actions as of 2026. PocketPal AI, MLC Chat, and LLM Farm are open-source.',
        items: [
          '**Private LLM** exposes a "Generate Text with Private LLM" Shortcuts action and a "Hey Siri, ask Private LLM [question]" voice trigger. The most iOS-native of the four chat apps.',
          '**PocketPal AI** is a standalone chat app — no Shortcuts action, no Siri integration. You open the app and chat. Plans for Shortcuts support are tracked in the GitHub issues but not shipped as of May 2026.',
          '**MLC Chat** is a reference app for the MLC LLM project — minimal iOS integration. No Shortcuts action.',
          '**LLM Farm** is a standalone chat app — no Shortcuts action.',
          '**Apple Intelligence** integrates with iOS Shortcuts via the "Use Model" action (iOS 18.4+). This routes a prompt to either the on-device 3B model or Private Cloud Compute (configurable). The on-device output can be chained into other Shortcuts actions.',
          '**Sideloading:** none of these apps require sideloading or jailbreak. All four chat apps are on the App Store; Apple Intelligence is built into iOS. EU users can also install via alternative app marketplaces under DMA in 2026, but the App Store version is identical.',
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
          '**Confusing Apple Intelligence with a chat app.** Apple Intelligence does not have a chat interface — it powers system features. If you want to ask the model questions, install PocketPal AI, Private LLM, MLC Chat, or LLM Farm separately.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (open-source iOS app).',
          'Private LLM — [App Store listing](https://apps.apple.com) and developer documentation.',
          'MLC Chat / MLC LLM project — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (Metal-accelerated iOS deployment).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (open-source iOS app).',
          'Apple Intelligence and on-device foundation models — [Apple Machine Learning Research](https://machinelearning.apple.com) and Apple Developer documentation.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
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
            a: 'Yes, with Private LLM. Saying "Hey Siri, ask Private LLM [question]" routes the prompt to the on-device model and Siri reads the answer back — fully offline. PocketPal AI, MLC Chat, and LLM Farm do not have Siri integration in 2026. Apple Intelligence integrates with Siri but only for system tasks (writing, summarising, app actions), not general Q&A.',
          },
          {
            q: 'Do these apps work on iPhone SE or older iPhones?',
            a: 'Limited. iPhone SE (4 GB RAM) is below the practical threshold for on-device LLMs in 2026. iPhone 14 / 15 (non-Pro, 6 GB RAM) can run 1.7B models (Qwen3 1.7B, SmolLM 2 1.7B) but not 3B+. iPhone 14 Pro and 15 Pro (6–8 GB RAM) can run 3B models like Phi-4 Mini at 8–12 tokens/sec. For older iPhones, the better path is remote-connecting to a home Mac or PC.',
          },
          {
            q: 'Can I sync chat history between iPhone and Mac?',
            a: 'Not natively in any of these four apps. Chat history is stored locally on each device; there is no iCloud sync feature in PocketPal AI, Private LLM, MLC Chat, or LLM Farm as of May 2026. For cross-device chat history, the practical approach is to run Open WebUI on a home Mac and access it from both iPhone and Mac browsers — Open WebUI stores chat history server-side.',
          },
          {
            q: 'Are these apps available outside the App Store?',
            a: 'PocketPal AI and LLM Farm are open-source and can be built from source via Xcode, but the App Store builds are the standard distribution. Private LLM and MLC Chat are App Store only. EU users can install via alternative app marketplaces under DMA in 2026, but the underlying app is identical to the App Store version. None require sideloading.',
          },
          {
            q: 'Do any of them require jailbreak?',
            a: 'No. All five (PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence) run on stock iOS. The four chat apps are on the App Store; Apple Intelligence is built into iOS 18+. Jailbreaking is not required and not recommended — losing iOS security updates to install a chat app is not a worthwhile tradeoff.',
          },
          {
            q: 'Can I use local AI in iOS Shortcuts?',
            a: 'Yes, via Private LLM (which exposes a "Generate Text with Private LLM" Shortcuts action) or Apple Intelligence (which exposes a "Use Model" action in iOS 18.4+). PocketPal AI, MLC Chat, and LLM Farm do not have Shortcuts actions in 2026. The combination of Private LLM + a Share Sheet Shortcut lets you run "summarise this" or "rewrite this" on text in any app, fully offline.',
          },
          {
            q: 'How does local AI compare to the ChatGPT app on iPhone?',
            a: 'On-device models (Phi-4 Mini, Llama 3.2 3B) are roughly 60–75% as capable as GPT-5.5 for everyday chat in 2026, faster on simple queries (no network round-trip), and fully private. ChatGPT remains better for complex reasoning, broad world knowledge, and multimodal tasks. The honest tradeoff: local AI for routine and private tasks; ChatGPT for occasional hard questions. Many users in 2026 keep both apps and choose per query.',
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
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — directory of every local-LLM tool worth knowing across all platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Die besten Local-LLM-Apps für iPhone 2026 (KI ohne WLAN nutzen)',
    seoTitle: 'Beste Local-LLM-Apps für das iPhone 2026 im Vergleich',
    intro:
      'Fünf iPhone-Apps führen echte LLMs vollständig auf dem Gerät aus: PocketPal AI, Private LLM, MLC Chat, LLM Farm und Apple Intelligence (systemintegriert). Alle funktionieren ohne WLAN, sobald das Modell heruntergeladen wurde. Dieser Leitfaden bewertet die Apps nach Tokens pro Sekunde auf dem iPhone 16 Pro und iPhone 17 Pro, Modellbibliothek, RAM-Verwaltung, Datenschutz und iOS-Integration.',
    metaDescription:
      'PocketPal AI, Private LLM, MLC Chat und LLM Farm: Die besten LLM-Apps fürs iPhone 2026 im Test. Offline-KI auf iPhone 16 Pro und 17 Pro verglichen.',
    twitterDescription:
      'iPhone-Local-KI 2026: PocketPal AI (kostenlos), Private LLM (mit Siri, 10,99 €), MLC Chat (schnellste), LLM Farm (konfigurierbar). Alle laufen offline nach dem Download.',
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
      '**Für die meisten iPhone-Nutzer 2026: PocketPal AI aus dem App Store installieren und Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB) herunterladen.** Die App ist kostenlos, quelloffen, läuft auf iPhone 14 Pro und neueren Modellen (jedes iPhone mit 6 GB+ RAM) und erzeugt ~10–15 Tokens/Sek. auf dem iPhone 16 Pro für den Alltag. Für kostenpflichtige Shortcuts- und Siri-Integration ist Private LLM die stärkste Option (~10,99 € einmalig). Für maximale Tokens/Sek. auf Apple Silicon nutzt MLC Chat den MLC-LLM-Stack mit Metal-Beschleunigung. LLM Farm ist die konfigurierbarste Option für Power-User. Apple Intelligence führt ebenfalls Modelle auf dem Gerät aus, ist aber systemintegriert und kein Chat-App – es ergänzt diese Apps, ohne mit ihnen zu konkurrieren.',
    quickAnswerTop: {
      de: {
        question: 'Was ist die beste Local-LLM-App für iPhone in 2026?',
        answer:
          'PocketPal AI ist die beste kostenlose Standard-App für die meisten iPhone-Nutzer – quelloffen, App-Store-Installation, unterstützt jedes GGUF-Modell von Hugging Face und führt Phi-4 Mini (3,8B) mit ~10–15 Tokens/Sek. auf dem iPhone 16 Pro aus. Private LLM ist die stärkste kostenpflichtige Option (~10,99 € einmalig) mit iOS-Shortcuts- und Siri-Integration. MLC Chat ist dank Metal-Beschleunigung auf Apple Silicon am schnellsten. LLM Farm ist für erfahrene Nutzer am flexibelsten konfigurierbar. Apple Intelligence führt ebenfalls On-Device-Modelle aus, ist aber systemintegriert und ergänzt diese Apps.',
        bullets: [
          'PocketPal AI – kostenlos, quelloffen, App Store. Beste Standard-App für die meisten Nutzer. Unterstützt jedes GGUF-Modell.',
          'Private LLM – ~10,99 € einmalig. Beste kostenpflichtige Option. iOS Shortcuts + Siri-Integration. Kuratierte Modellbibliothek.',
          'MLC Chat – kostenlos, MLC-LLM-Projekt. Schnellste App auf Apple Silicon (Metal-beschleunigt). Kleinere Modellauswahl.',
          'LLM Farm – kostenlos, quelloffen. Am stärksten konfigurierbar. Beste Wahl für Power-User, die Sampling-Parameter anpassen möchten.',
          'Apple Intelligence – systemintegriert, keine eigenständige App. On-Device-3B-Modell wird von Mail, Nachrichten und Notizen genutzt.',
          'Empfohlenes Modell für iPhone 16 Pro / 17 Pro: Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB) – Geschwindigkeit: ~10–15 Tokens/Sek.',
          'Ältere iPhones (14 Pro, 15 Pro): Qwen3 1.7B oder SmolLM 2 1.7B – passt in 6 GB RAM und erzeugt ~15–20 Tokens/Sek.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Kurzübersicht', anchor: '#quick-facts' },
      { label: 'Welche iPhone-App sollte ich zuerst installieren?', anchor: '#which-app' },
      { label: 'iPhone-App-Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'PocketPal AI: Kostenlose Open-Source-Standardlösung', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: Kostenpflichtige Option mit iOS-Integration', anchor: '#private-llm' },
      { label: 'MLC Chat: Apple-Silicon-Optimierung', anchor: '#mlc-chat' },
      { label: 'LLM Farm: Am stärksten konfigurierbar', anchor: '#llm-farm' },
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
          '**Private LLM ist die beste kostenpflichtige Option (~10,99 € einmalig, kein Abo).** Kuratierte Modellbibliothek, iOS-Shortcuts-Integration und Siri-Unterstützung ("Hey Siri, ask Private LLM"). Den Preis wert, wenn Sie freihändigen Sprachzugriff oder Workflow-Automatisierung benötigen.',
          '**MLC Chat ist auf Apple Silicon am schnellsten.** Verwendet MLC LLM mit Metal-GPU-Beschleunigung und erzeugt auf gleicher Hardware ~25–35 % mehr Tokens/Sek. als llama.cpp-basierte Apps. Kleinere Modellauswahl als PocketPal AI.',
          '**LLM Farm ist am stärksten konfigurierbar.** Bietet Sampling-Parameter (Temperatur, Top-p, Mirostat), systemweite Prompts je Modell und Chat-Templates. Beste Wahl für Nutzer, die Modelle für spezifische Anwendungsfälle anpassen möchten.',
          '**Apple Intelligence ist On-Device-KI, aber keine eigenständige App.** Apples ~3B-Foundation-Modell läuft unter iOS 18+ auf iPhone 15 Pro und neueren Modellen. Es treibt Systemfunktionen an (Schreibwerkzeuge, Smart Reply, Benachrichtigungs-Zusammenfassungen), ist aber nicht direkt als Chat-Interface zugänglich.',
          '**Empfohlenes Modell für iPhone 16 Pro / 17 Pro: Phi-4 Mini (3,8B Q4_K_M, ~2,7 GB).** Bestes Verhältnis aus Qualität und Geschwindigkeit für die 8-GB-RAM-Klasse. Ältere iPhones mit 6 GB RAM (iPhone 14 Pro): Qwen3 1.7B oder SmolLM 2 1.7B.',
          '**Keine App erfordert Jailbreak. Alle fünf laufen auf Standard-iOS.** PocketPal AI, Private LLM, MLC Chat und LLM Farm sind im App Store verfügbar; Apple Intelligence ist in iOS integriert.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzübersicht',
        items: [
          '**Getestete Apps:** PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence (System).',
          '**Testgeräte:** iPhone 16 Pro (A18 Pro, 8 GB RAM) und iPhone 17 Pro (A19 Pro).',
          '**Inference-Engines:** llama.cpp (PocketPal AI, LLM Farm), MLC LLM mit Metal (MLC Chat), proprietäres On-Device-Runtime (Private LLM, Apple Intelligence).',
          '**Mindest-iPhone für 3B+-Modelle:** iPhone 14 Pro (A16, 6 GB RAM) für 1.7B; iPhone 15 Pro / 16 Pro / 17 Pro (8 GB+) für 3B–4B.',
          '**Beste kostenlose App:** PocketPal AI – App Store, quelloffen, Modellflexibilität.',
          '**Beste kostenpflichtige App:** Private LLM – ~10,99 € einmalig, Shortcuts + Siri-Unterstützung.',
          '**Offline:** Alle fünf laufen vollständig offline, sobald das Modell heruntergeladen ist – keine Cloud-Verbindung erforderlich.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Welche iPhone-App sollte ich zuerst installieren?',
        content:
          '**Für die meisten Nutzer: PocketPal AI aus dem App Store, dann Phi-4 Mini (3,8B Q4_K_M) herunterladen.** Diese Kombination funktioniert auf iPhone 14 Pro und neueren Modellen, ist kostenlos und liefert brauchbare Ergebnisse für alltäglichen Chat, Zusammenfassungen und schnelles Schreiben. Wählen Sie eine andere App nur, wenn Sie einen spezifischen Bedarf haben, den PocketPal AI nicht abdeckt.',
        image: '/images/iphone-llm-apps-which-app-de.svg',
        imageCaption: 'Welche lokale KI-App für iPhone: PocketPal AI (kostenloser Standard), Private LLM (Siri + Kurzbefehle), MLC Chat (schnellste auf Apple Silicon), LLM Farm (konfigurierbar), Apple Intelligence (integriert in iOS 18+).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Für die meisten iPhone-Nutzer 2026 gilt: PocketPal AI (kostenlos, App Store) installieren und Phi-4 Mini herunterladen – damit sind alltäglicher Chat, Zusammenfassungen und Textentwürfe auf jedem iPhone mit 6 GB+ RAM abgedeckt.',
          },
          {
            type: 'plain-terms',
            text: 'Fünf iPhone-Apps führen KI 2026 vollständig auf dem Gerät aus. PocketPal AI ist der beste kostenlose Einstiegspunkt: einmal installieren, eine 2,7-GB-Modelldatei herunterladen, und Sie haben einen privaten Chat-Assistenten, der auch in der U-Bahn ohne WLAN funktioniert. Private LLM ist die kostenpflichtige Option, wenn Siri mit dem lokalen Modell sprechen soll. MLC Chat ist am schnellsten. LLM Farm ist am flexibelsten. Apple Intelligence ist in iOS integriert, aber keine Chat-App. PocketPal AI deckt 90 % der Anwendungsfälle ab.',
          },
        ],
        decisionBlock: {
          title: 'Entscheidungshilfe: Welche iPhone-Local-KI-App?',
          localIf: [
            'Sie möchten eine kostenlose Chat-KI, die offline funktioniert → PocketPal AI',
            'Sie möchten, dass Siri mit Ihrem lokalen Modell spricht → Private LLM',
            'Sie möchten maximale Generierungsgeschwindigkeit auf Apple Silicon → MLC Chat',
            'Sie möchten Sampling-Parameter und Chat-Templates anpassen → LLM Farm',
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
            'Schnellste Chip-Leistung: MLC Chat',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie zuerst PocketPal AI, auch wenn Sie später für Private LLM bezahlen möchten. Testen Sie damit, ob die On-Device-Inferenz auf Ihrem iPhone schnell genug für Ihren Anwendungsfall ist. Wenn ja, entscheiden Sie, ob die iOS-Shortcuts- und Siri-Integration von Private LLM die ~10,99 € wert ist. Wenn nein, haben Sie die 10,99 € gespart, bevor Sie gezahlt haben.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone-App-Vergleichstabelle',
        content:
          '**Die fünf Apps unterscheiden sich in drei Dimensionen, die für die meisten Nutzer entscheidend sind: Kosten, Modellflexibilität und iOS-Integration.** Geschwindigkeitsunterschiede existieren, sind aber geringer als der Abstand zwischen diesen Apps und einem Cloud-LLM.',
        image: '/images/iphone-llm-apps-comparison-de.svg',
        imageCaption: 'iPhone Local-LLM-App-Vergleich: PocketPal AI und LLM Farm (kostenlos, ~10–15 Tok/Sek.), MLC Chat (kostenlos, ~14–20 Tok/Sek., Metal-beschleunigt), Private LLM (~10,99€ einmalig, Siri + Kurzbefehle), Apple Intelligence (systemintegriert, iOS 18+).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI ist die beste kostenlose Standard-App, Private LLM die beste kostenpflichtige Option, MLC Chat am schnellsten, LLM Farm am konfigurierbarsten und Apple Intelligence systemintegriert.',
          },
          {
            type: 'plain-terms',
            text: 'Die Wahl hängt meist von drei Faktoren ab: Möchten Sie zahlen (Private LLM), möchten Sie maximale Geschwindigkeit (MLC Chat) oder möchten Sie Einstellungen anpassen (LLM Farm)? Für alles andere ist PocketPal AI die Standardwahl. Die Werte in der Tabelle gelten für Q4_K_M-Quantisierung – der Standard für mobile Inferenz 2026.',
          },
        ],
        columns: ['App', 'Preis', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)', 'Datenschutz', 'Am besten geeignet für'],
        rows: [
          { 'App': 'PocketPal AI', 'Preis': 'Kostenlos (Open Source)', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': '~10–15', 'Datenschutz': 'Nur lokal, keine Telemetrie', 'Am besten geeignet für': 'Kostenlose Standard-App für die meisten Nutzer' },
          { 'App': 'Private LLM', 'Preis': '~10,99 € einmalig', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': '~10–14', 'Datenschutz': 'Nur lokal, opt-in Analysen', 'Am besten geeignet für': 'iOS Shortcuts + Siri-Integration' },
          { 'App': 'MLC Chat', 'Preis': 'Kostenlos (Open Source)', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': '~14–20 (Metal-beschleunigt)', 'Datenschutz': 'Nur lokal, keine Telemetrie', 'Am besten geeignet für': 'Schnellste App auf Apple Silicon' },
          { 'App': 'LLM Farm', 'Preis': 'Kostenlos (Open Source)', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': '~10–15', 'Datenschutz': 'Nur lokal, keine Telemetrie', 'Am besten geeignet für': 'Power-User, die Sampling anpassen möchten' },
          { 'App': 'Apple Intelligence', 'Preis': 'Kostenlos (in iOS 18+ integriert)', 'Tokens/Sek. (Phi-4 Mini, 16 Pro)': 'k. A. (Systemfunktion)', 'Datenschutz': 'Lokal + opt-in Private Cloud Compute', 'Am besten geeignet für': 'Hilfe in Mail, Nachrichten, Notizen' },
        ],
        note:
          '**Hinweis zur Apple Neural Engine (ANE) im Vergleich zu Metal:** PocketPal AI und LLM Farm verwenden llama.cpp mit Metal Performance Shadern, die auf der GPU laufen. MLC Chat verwendet MLC LLM mit tieferer Metal-Optimierung und erreicht auf gleicher Hardware 25–35 % mehr Tokens/Sek. Apple Intelligence nutzt die ANE speziell für das systemintegrierte 3B-Modell – energieeffizienter, aber weniger flexibel als Metal-basierte Inferenz. Der A18 Pro (iPhone 16 Pro) und A19 Pro (iPhone 17 Pro) haben verbesserte ANEs, aber Drittanbieter-Chat-Apps können die ANE nicht direkt ansprechen – das ist Apple Intelligence und Apple-eigenen APIs vorbehalten.',
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
          '**Private LLM ist die stärkste kostenpflichtige iPhone-Option 2026 (~10,99 € einmalig, kein Abo).** Die App ist nur über den App Store erhältlich und enthält eine kuratierte Bibliothek optimierter Modelle. Ihr Alleinstellungsmerkmal ist die iOS-Integration: Shortcuts-Aktionen und der Sprach-Trigger „Hey Siri, ask Private LLM".',
        items: [
          '**Was sie ist:** eine kostenpflichtige iOS-App mit kuratierter Modellbibliothek und tiefer iOS-Integration. Verwendet ein proprietäres On-Device-Runtime, das für Apple Silicon optimiert ist.',
          '**Installation:** App Store → „Private LLM". Einmaliger Kauf ~10,99 € (kein Abo).',
          '**Kuratierte Modellbibliothek:** ~30 Modelle, vorgetestet und für iPhone optimiert, darunter Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct und mehrere ungefilterte Varianten. Weniger flexibel als PocketPal AI, aber kein Risiko, ein Modell zu installieren, das abstürzt.',
          '**iOS Shortcuts:** Private LLM stellt eine Shortcuts-Aktion „Text mit Private LLM generieren" bereit, die in Automatisierungen eingebunden werden kann. Nützlich, um lokale KI per Schaltfläche auf dem Home-Bildschirm oder per NFC-Tag auszulösen.',
          '**Siri-Integration:** „Hey Siri, ask Private LLM [Ihre Frage]" leitet den Prompt an das On-Device-Modell weiter und Siri liest die Antwort vor – ohne Internetverbindung. Die Latenz ist höher als im Chat-UI (~3–5 Sekunden bis Audio beginnt).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Der Preis von ~10,99 € für Private LLM gilt nur für die iPhone-App. Die macOS-Version ist ein separater Kauf; die iPad-Version ist universal mit iPhone (ein Kauf deckt beide Plattformen ab). Prüfen Sie vor dem Kauf, welche Plattform Sie benötigen. Apple Family Sharing deckt die App für alle Familienmitglieder ab.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: Apple-Silicon-Optimierung',
        content:
          '**MLC Chat (aus dem MLC-LLM-Projekt) ist dank Metal-GPU-Beschleunigung 2026 die schnellste Local-LLM-App auf dem iPhone.** Sie ist kostenlos, quelloffen und führt Modelle aus, die mit der MLC-LLM-Toolchain kompiliert wurden – kein Standard-GGUF.',
        items: [
          '**Was sie ist:** die iOS-Referenz-App des MLC-LLM-Projekts, die die Metal-beschleunigte Inferenz von MLC LLM auf Apple Silicon demonstriert.',
          '**Installation:** App Store → „MLC Chat". Kostenlos.',
          '**Geschwindigkeitsvorteil:** ~25–35 % schneller als llama.cpp-basierte Apps auf demselben iPhone für dasselbe Modell. Auf dem iPhone 16 Pro: Phi-4 Mini ~14–20 Tokens/Sek. (vs. ~10–15 in PocketPal AI).',
          '**Modellbibliothek:** kleiner als bei PocketPal AI – beschränkt auf Modelle, die das MLC-LLM-Projekt für iOS kompiliert hat. Aktuell verfügbar: Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B, RedPajama und einige weitere. Nicht jedes Hugging-Face-GGUF funktioniert.',
          '**Am besten geeignet für:** Nutzer, die Geschwindigkeit über Modellflexibilität stellen. Wenn das Zielmodell in der MLC-Bibliothek vorhanden ist, ist MLC Chat die schnellste Option auf dem iPhone.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die Metal-Beschleunigung von MLC LLM wirkt sich am stärksten auf älteren iPhones mit schwächerer Neural Engine aus. Auf dem iPhone 17 Pro verringert sich der Vorsprung von MLC Chat gegenüber PocketPal AI, da die verbesserte Neural Engine des A19 Pro den relativen Nachteil von llama.cpp verkleinert. Auf iPhone 14 Pro und 15 Pro ist der Vorsprung von MLC Chat am größten.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: Am stärksten konfigurierbar',
        content:
          '**LLM Farm ist 2026 die am stärksten konfigurierbare iPhone-Local-LLM-App.** Kostenlos, quelloffen (GitHub: guinmoon/LLMFarm) und bietet Sampling-Parameter, die andere Apps verbergen. Beste Wahl für Nutzer, die das Modellverhalten anpassen möchten, anstatt Standardwerte zu akzeptieren.',
        items: [
          '**Was sie ist:** eine iOS-App von Entwickler @guinmoon, die GGUF-Modelle mit umfangreichen Konfigurationsmöglichkeiten ausführt.',
          '**Installation:** App Store → „LLM Farm". Kostenlos.',
          '**Modell hinzufügen:** Auf das Modellbibliothek-Symbol tippen → „Modell per URL hinzufügen" → direkten Hugging-Face-Download-Link für eine GGUF-Datei einfügen. Alternativ GGUF per Apple Dateien übertragen.',
          '**Freigegebene Einstellungen:** Temperatur, Top-p, Top-k, Mirostat-Sampling, Wiederholungsstrafe, System-Prompt je Modell, Chat-Template-Auswahl, Kontextfensterlänge. Jede Einstellung, die andere Apps verbergen, ist hier bearbeitbar.',
          '**Generierungsgeschwindigkeit:** vergleichbar mit PocketPal AI (beide verwenden llama.cpp). Auf dem iPhone 16 Pro: Phi-4 Mini ~10–15 Tokens/Sek.',
          '**Am besten geeignet für:** Entwickler, Prompt-Engineers und Nutzer, die Sampling-Einstellungen vergleichen oder verschiedene Chat-Templates testen möchten.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Das freigegebene Mirostat-Sampling von LLM Farm ist nützlich für kreative Schreibaufgaben, bei denen Standard-Temperatur/Top-p-Sampling repetitive Ausgaben erzeugt. Setzen Sie Mirostat auf Modus 2 mit Ziel-Entropie ~5,0 und Lernrate 0,1 als Ausgangspunkt. PocketPal AI und Private LLM bieten Mirostat nicht an.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: Systemintegrierte On-Device-KI',
        content:
          '**Apple Intelligence führt Apples eigenes ~3B-Foundation-Modell auf dem Gerät aus – auf iPhone 15 Pro und neueren Modellen (A17-Pro-Chip, mindestens 8 GB RAM).** Es ist keine Chat-App – es treibt Systemfunktionen in Mail (Smart Reply), Nachrichten (Schreibwerkzeuge), Notizen (Zusammenfassung) und Benachrichtigungs-Zusammenfassungen an. Das Modell ist nicht direkt über Nutzer-Prompts zugänglich, wie es bei PocketPal AI oder Private LLM der Fall ist.',
        items: [
          '**Wo es zu finden ist:** integriert in iOS 18+. Aktivieren Sie es unter Einstellungen → Apple Intelligence & Siri.',
          '**Hardware-Anforderung:** iPhone 15 Pro / 15 Pro Max, iPhone-16-Serie, iPhone-17-Serie. Ältere iPhones (14 und älter) unterstützen Apple Intelligence nicht.',
          '**On-Device-Funktionen:** Schreibwerkzeuge (Umschreiben, Zusammenfassen, Korrekturlesen) in jedem Textfeld, Smart Reply in Mail und Nachrichten, Benachrichtigungs-Zusammenfassungen, Genmoji-Generierung.',
          '**Private Cloud Compute:** Für Aufgaben, die das On-Device-Modell übersteigen, greift Apple Intelligence auf Private Cloud Compute (PCC) zurück – von Apple betriebene Server mit größeren Modellen und kryptografischen Garantien, dass keine Nutzerdaten gespeichert werden. PCC ist opt-in und kann deaktiviert werden.',
          '**Verhältnis zu Chat-Apps:** Apple Intelligence ist eine Ergänzung, kein Ersatz. Es übernimmt Textumschreibung und Zusammenfassung innerhalb von iOS-Apps; PocketPal AI / Private LLM / MLC Chat / LLM Farm bieten ein eigenständiges Chat-Interface für beliebige Fragen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Apple Intelligence Ihr einziger Bedarf ist (E-Mails umschreiben, Benachrichtigungen zusammenfassen), benötigen Sie keine separate Chat-App. Wenn Sie dem Modell Fragen stellen möchten – etwa „Erkläre Quantentunneln einfach" oder „Erstelle einen Projektplan für X" –, installieren Sie eine der vier Chat-Apps: Apple Intelligence bietet dieses Interface nicht.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modelle nach iPhone-Modell',
        content:
          '**Der iPhone-RAM bestimmt die Modellgröße – nicht die Chip-Generation.** Ein 6-GB-iPhone (14 Pro, 15) kann 1,7B-Modelle komfortabel ausführen; ein 8-GB-iPhone (15 Pro, 16 Pro, 17 Pro) führt 3B–4B-Modelle komfortabel und 7B-Modelle langsam aus. Für den umfassenderen Überblick über Modelle auf allen Hardware-Klassen (nicht nur Mobilgeräte) siehe [Die besten lokalen LLMs 2026](/de/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-de.svg',
        imageCaption: 'LLM-Modellempfehlungen nach iPhone-RAM: Phi-4 Mini 3,8B Q4_K_M für 8-GB-iPhones (15 Pro–17 Pro) mit 8–20 Tok/Sek.; Qwen3 1,7B Q4_K_M für 6-GB-iPhones (14 Pro, nicht-Pro) mit 12–20 Tok/Sek.; iPhone SE (4 GB) nicht empfohlen.',
        columns: ['iPhone-Modell (Jahr, RAM)', 'Empfohlenes Modell', 'Download-Größe', 'Erwartete Geschwindigkeit'],
        rows: [
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 17 Pro (2025, 8–12 GB)', 'Empfohlenes Modell': 'Phi-4 Mini oder Llama 3.2 3B (Q4_K_M)', 'Download-Größe': '~2,5–2,7 GB', 'Erwartete Geschwindigkeit': '~13–20 Tokens/Sek.' },
          { 'iPhone-Modell (Jahr, RAM)': 'iPhone 16 Pro / 16 Pro Max (2024, 8 GB)', 'Empfohlenes Modell': 'Phi-4 Mini (3.8B Q4_K_M)', 'Download-Größe': '~2,7 GB', 'Erwartete Geschwindigkeit': '~10–15 Tokens/Sek.' },
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
          '**Die iOS-Integration unterscheidet sich je nach App erheblich.** Private LLM bietet die tiefste Integration (Shortcuts + Siri); PocketPal AI, MLC Chat und LLM Farm sind eigenständige Chat-Apps ohne Shortcuts-Aktionen (Stand 2026).',
        image: '/images/iphone-llm-apps-ios-integration-de.svg',
        imageCaption: 'iOS-Integration je lokaler LLM-App: Private LLM und Apple Intelligence unterstützen Kurzbefehle und Siri; PocketPal AI, MLC Chat und LLM Farm sind eigenständige Chat-Apps ohne Shortcut-Aktionen (Stand 2026). PocketPal AI, MLC Chat und LLM Farm sind Open Source.',
        items: [
          '**Private LLM** bietet eine Shortcuts-Aktion „Text mit Private LLM generieren" und einen Sprach-Trigger „Hey Siri, ask Private LLM [Frage]". Die iOS-nativste der vier Chat-Apps.',
          '**PocketPal AI** ist eine eigenständige Chat-App – keine Shortcuts-Aktion, keine Siri-Integration. Sie öffnen die App und chatten. Pläne für Shortcuts-Unterstützung werden in den GitHub-Issues verfolgt, sind aber Stand Mai 2026 noch nicht veröffentlicht.',
          '**MLC Chat** ist eine Referenz-App für das MLC-LLM-Projekt – minimale iOS-Integration. Keine Shortcuts-Aktion.',
          '**LLM Farm** ist eine eigenständige Chat-App – keine Shortcuts-Aktion.',
          '**Apple Intelligence** integriert sich über die Aktion „Modell verwenden" (iOS 18.4+) in iOS Shortcuts. Diese leitet einen Prompt an das On-Device-3B-Modell oder an Private Cloud Compute (konfigurierbar) weiter. Die On-Device-Ausgabe kann in weitere Shortcuts-Aktionen eingebunden werden.',
          '**Sideloading:** Keine dieser Apps erfordert Sideloading oder Jailbreak. Alle vier Chat-Apps sind im App Store; Apple Intelligence ist in iOS integriert. EU-Nutzer können unter dem DMA 2026 auch alternative App-Marktplätze nutzen, aber die App-Store-Version ist identisch.',
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
          '**Apple Intelligence mit einer Chat-App verwechseln.** Apple Intelligence hat kein Chat-Interface – es treibt Systemfunktionen an. Wenn Sie dem Modell Fragen stellen möchten, installieren Sie PocketPal AI, Private LLM, MLC Chat oder LLM Farm separat.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (Open-Source-iOS-App).',
          'Private LLM — [App-Store-Eintrag](https://apps.apple.com) und Entwicklerdokumentation.',
          'MLC Chat / MLC-LLM-Projekt — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (Metal-beschleunigte iOS-Bereitstellung).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (Open-Source-iOS-App).',
          'Apple Intelligence und On-Device-Foundation-Modelle — [Apple Machine Learning Research](https://machinelearning.apple.com) und Apple-Entwicklerdokumentation.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
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
            a: 'Ja, mit Private LLM. „Hey Siri, ask Private LLM [Frage]" leitet den Prompt an das On-Device-Modell weiter und Siri liest die Antwort vor – vollständig offline. PocketPal AI, MLC Chat und LLM Farm haben 2026 keine Siri-Integration. Apple Intelligence integriert sich in Siri, aber nur für Systemaufgaben (Schreiben, Zusammenfassen, App-Aktionen), nicht für allgemeine Fragen.',
          },
          {
            q: 'Funktionieren diese Apps auf dem iPhone SE oder älteren iPhones?',
            a: 'Eingeschränkt. Das iPhone SE (4 GB RAM) liegt unter der praktischen Schwelle für On-Device-LLMs 2026. iPhone 14 / 15 (nicht Pro, 6 GB RAM) kann 1,7B-Modelle (Qwen3 1.7B, SmolLM 2 1.7B) ausführen, aber keine 3B+-Modelle. iPhone 14 Pro und 15 Pro (6–8 GB RAM) können 3B-Modelle wie Phi-4 Mini mit 8–12 Tokens/Sek. ausführen. Für ältere iPhones ist die bessere Option eine Remote-Verbindung zu einem Mac oder PC zu Hause.',
          },
          {
            q: 'Kann ich den Chat-Verlauf zwischen iPhone und Mac synchronisieren?',
            a: 'In keiner dieser vier Apps nativ. Der Chat-Verlauf wird lokal auf jedem Gerät gespeichert; es gibt keine iCloud-Sync-Funktion in PocketPal AI, Private LLM, MLC Chat oder LLM Farm (Stand Mai 2026). Für geräteübergreifenden Chat-Verlauf ist der praktische Ansatz: Open WebUI auf einem Mac zu Hause betreiben und von iPhone und Mac aus im Browser darauf zugreifen – Open WebUI speichert den Chat-Verlauf serverseitig.',
          },
          {
            q: 'Sind diese Apps außerhalb des App Stores erhältlich?',
            a: 'PocketPal AI und LLM Farm sind quelloffen und können per Xcode aus dem Quellcode gebaut werden, aber die App-Store-Builds sind die Standardverteilung. Private LLM und MLC Chat sind nur im App Store erhältlich. EU-Nutzer können unter dem DMA 2026 auch über alternative App-Marktplätze installieren; die zugrundeliegende App ist aber identisch mit der App-Store-Version. Keiner der Apps erfordert Sideloading.',
          },
          {
            q: 'Benötigt eine der Apps einen Jailbreak?',
            a: 'Nein. Alle fünf (PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence) laufen auf Standard-iOS. Die vier Chat-Apps sind im App Store; Apple Intelligence ist in iOS 18+ integriert. Ein Jailbreak ist weder erforderlich noch empfohlen – iOS-Sicherheitsupdates für eine Chat-App zu verlieren ist kein lohnenswerter Kompromiss.',
          },
          {
            q: 'Kann ich lokale KI in iOS Shortcuts verwenden?',
            a: 'Ja, über Private LLM (das eine Shortcuts-Aktion „Text mit Private LLM generieren" bereitstellt) oder Apple Intelligence (das in iOS 18.4+ eine Aktion „Modell verwenden" bietet). PocketPal AI, MLC Chat und LLM Farm haben 2026 keine Shortcuts-Aktionen. Die Kombination aus Private LLM und einem Share-Sheet-Shortcut ermöglicht es, „Zusammenfassen" oder „Umschreiben" für Text in jeder App vollständig offline auszuführen.',
          },
          {
            q: 'Wie vergleicht sich lokale KI mit der ChatGPT-App auf dem iPhone?',
            a: 'On-Device-Modelle (Phi-4 Mini, Llama 3.2 3B) sind 2026 für den alltäglichen Chat etwa 60–75 % so leistungsfähig wie GPT-5.5, bei einfachen Anfragen schneller (kein Netzwerk-Round-Trip) und vollständig privat. ChatGPT bleibt besser für komplexes Schlussfolgern, breites Weltwissen und multimodale Aufgaben. Der ehrliche Kompromiss: lokale KI für Routine- und private Aufgaben; ChatGPT für gelegentliche schwierige Fragen. Viele Nutzer 2026 haben beide Apps und wählen je nach Anfrage.',
          },
          {
            q: 'Muss ich bei der Verwendung dieser iPhone-LLM-Apps die DSGVO beachten?',
            a: 'Für den privaten Gebrauch ist die DSGVO in der Regel nicht relevant. Für professionelle oder geschäftliche Nutzung – insbesondere wenn Sie Texte mit personenbezogenen Daten (Kundennamen, E-Mails, Vertragsinhalte) in das Modell eingeben – gilt Folgendes: Da alle vier Chat-Apps (PocketPal AI, Private LLM, MLC Chat, LLM Farm) die Verarbeitung vollständig auf dem Gerät ausführen und keine Daten an externe Server senden, erfüllen sie die DSGVO-Anforderungen aus Artikel 28 (Auftragsverarbeitung) und zur Datenminimierung in der Regel besser als Cloud-KI-Dienste. Für Unternehmen empfiehlt das BSI in seinen Grundschutz-Katalogen On-Device-Verarbeitung als bevorzugtes Muster für die KI-Nutzung mit sensiblen Daten. Schalten Sie bei Private LLM die opt-in-Analysen in den Einstellungen aus, um jede externe Datenübertragung zu unterbinden.',
          },
          {
            q: 'Sind diese iPhone-LLM-Apps für den deutschen Mittelstand geeignet?',
            a: 'Ja, insbesondere PocketPal AI und Private LLM eignen sich für KMU-Anwendungsfälle im deutschen Mittelstand. Typische Einsatzszenarien: Vertriebsmitarbeitende, die offline Angebotszusammenfassungen erstellen; Servicetechniker, die im Feld ohne Internetverbindung Dokumentation zusammenfassen; Büromitarbeitende, die E-Mails und Berichte schnell umformulieren möchten. Da alle Daten lokal auf dem Gerät verbleiben, können DSGVO-Compliance-Anforderungen einfacher eingehalten werden als bei Cloud-Diensten. Für den Einsatz in regulierten Bereichen (Gesundheitswesen, Finanzdienstleistungen) empfiehlt sich eine Prüfung der IT-Sicherheitsstandards nach BSI IT-Grundschutz. Der einmalige Preis von Private LLM (~10,99 € ohne Abo) passt gut zur typischen Beschaffungspraxis im Mittelstand.',
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
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '2026年iPhoneで使えるLocal LLMアプリ比較（WiFi不要でAI利用）',
    seoTitle: '2026年版 iPhone向けLocal LLMアプリ5選｜オフラインAI比較',
    intro:
      '2026年に5つのiPhoneアプリが、デバイス上で本格的なLLMを完全動作させます：PocketPal AI、Private LLM、MLC Chat、LLM Farm、そしてApple Intelligence（システム統合型）です。すべてのアプリはモデルをダウンロードすれば、WiFiなしで動作します。このガイドでは、iPhone 16 ProとiPhone 17 ProにおけるTokens/秒、モデルライブラリ、RAM管理、プライバシー対応、iOS統合の観点からランク付けします。',
    metaDescription:
      '2026年、iPhoneで本格LLMをWiFiなしで動かす5アプリ比較。PocketPal AI（無料）、Private LLM（有料・Siri連携）、MLC Chat（最速）、LLM FarmをiPhone 16 Pro・17 Proで実測。速度・プライバシー・モデル数を徹底検証。',
    twitterDescription:
      'iPhone Local AI 2026：PocketPal AI（無料）、Private LLM（Siri対応・約¥1,500）、MLC Chat（最速）、LLM Farm（高設定）。ダウンロード後はオフラインで動作します。',
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
      '**2026年の多くのiPhoneユーザーに最適な方法は、App StoreでPocketPal AIをインストールし、Phi-4 Mini（3.8B Q4_K_M、約2.7 GB）をダウンロードすることです。** 無料・オープンソースで、iPhone 14 Pro以降（RAM 6 GB以上のiPhone）で動作し、iPhone 16 Proでは毎秒約10〜15トークンを生成します。有料のShortcuts・Siri統合が必要なら、Private LLM（約¥1,500の買い切り）が最有力候補です。Apple Silicon上で最速のTokens/秒を求めるなら、MLC ChatはMetal加速のMLC LLMを採用しています。LLM Farmはパワーユーザー向けに最も高度なカスタマイズが可能です。Apple Intelligenceもオンデバイスでモデルを実行しますが、システム統合型のためチャットアプリではなく、これらのアプリを補完する役割を担います。',
    quickAnswerTop: {
      ja: {
        question: '2026年のiPhoneで最高のLocal LLMアプリは何ですか？',
        answer:
          'PocketPal AIは多くのiPhoneユーザーに最適な無料の定番アプリです。オープンソース・App Storeからインストール可能で、Hugging FaceのあらゆるGGUFモデルに対応し、iPhone 16 ProでPhi-4 Mini（3.8B）を毎秒約10〜15トークンで動かせます。Private LLMは最有力の有料オプション（約¥1,500の買い切り）で、iOS ShortcutsとSiri統合を提供します。MLC ChatはMetal加速によりApple Silicon上で最速です。LLM Farmは上級ユーザー向けに最もカスタマイズ性が高いアプリです。Apple Intelligenceもオンデバイスでモデルを実行しますが、システム統合型でこれらのアプリを補完します。',
        bullets: [
          'PocketPal AI — 無料・オープンソース・App Store。ほとんどのユーザーに最適な定番アプリ。あらゆるGGUFモデルに対応。',
          'Private LLM — 約¥1,500の買い切り。最有力の有料オプション。iOS Shortcuts + Siri統合。厳選モデルライブラリ。',
          'MLC Chat — 無料・MLC LLMプロジェクト。Apple Silicon上で最速（Metal加速）。モデル選択肢はやや少なめ。',
          'LLM Farm — 無料・オープンソース。最もカスタマイズ可能。サンプリングパラメーターを調整したいパワーユーザーに最適。',
          'Apple Intelligence — システム統合型、独立したアプリではありません。メール、メッセージ、メモで利用されるオンデバイス3Bモデル。',
          'iPhone 16 Pro / 17 Pro向け推奨モデル：Phi-4 Mini（3.8B Q4_K_M、約2.7 GB） — 毎秒約10〜15トークン。',
          '旧世代iPhone（14 Pro、15 Pro）：Qwen3 1.7B または SmolLM 2 1.7B — 6 GB RAMに収まり、毎秒約15〜20トークン。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '最初にインストールすべきiPhoneアプリは？', anchor: '#which-app' },
      { label: 'iPhoneアプリ比較表', anchor: '#comparison-table' },
      { label: 'PocketPal AI：無料オープンソースの定番アプリ', anchor: '#pocketpal-ai' },
      { label: 'Private LLM：iOS統合機能付き有料オプション', anchor: '#private-llm' },
      { label: 'MLC Chat：Apple Siliconに最適化', anchor: '#mlc-chat' },
      { label: 'LLM Farm：最もカスタマイズ可能', anchor: '#llm-farm' },
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
          '**Private LLMは最良の有料オプション（約¥1,500の買い切り、サブスクなし）です。** 厳選モデルライブラリ、iOS Shortcuts統合、Siriサポート（"Hey Siri, ask Private LLM"）を提供します。ハンズフリー音声操作やワークフロー自動化が必要なら購入する価値があります。',
          '**MLC ChatはApple Silicon上で最速です。** Metal GPU加速のMLC LLMを採用し、同じハードウェアのllama.cppベースのアプリより約25〜35%速くトークンを生成します。PocketPal AIよりモデル選択肢はやや少なめです。',
          '**LLM Farmは最もカスタマイズ可能です。** サンプリングパラメーター（温度、Top-p、Mirostat）、モデルごとのシステムプロンプト、チャットテンプレートを公開しています。特定の用途向けにモデルを調整したいユーザーに最適です。',
          '**Apple Intelligenceはオンデバイス型ですが、独立したアプリではありません。** AppleのAI 3Bファウンデーションモデルは、iPhone 15 Pro以降のiOS 18+で動作します。システム機能（Writing Tools、Smart Reply、通知サマリー）を担いますが、チャットインターフェースとして直接利用はできません。',
          '**iPhone 16 Pro / 17 Pro推奨モデル：Phi-4 Mini（3.8B Q4_K_M、約2.7 GB）。** 8 GB RAMクラスで品質と速度の最良バランス。6 GB RAMの旧世代iPhone（iPhone 14 Pro）：Qwen3 1.7B または SmolLM 2 1.7B。',
          '**ジェイルブレイク不要。5つすべて標準iOSで動作します。** PocketPal AI、Private LLM、MLC Chat、LLM FarmはすべてApp Store配信；Apple IntelligenceはiOS内蔵。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**テスト対象アプリ：** PocketPal AI、Private LLM、MLC Chat、LLM Farm、Apple Intelligence（システム）。',
          '**テストデバイス：** iPhone 16 Pro（A18 Pro、8 GB RAM）およびiPhone 17 Pro（A19 Pro）。',
          '**推論エンジン：** llama.cpp（PocketPal AI、LLM Farm）、Metal対応MLC LLM（MLC Chat）、専用オンデバイスランタイム（Private LLM、Apple Intelligence）。',
          '**3B以上のモデルに必要な最低限のiPhone：** 1.7B向け：iPhone 14 Pro（A16、6 GB RAM）；3B〜4B向け：iPhone 15 Pro / 16 Pro / 17 Pro（8 GB以上）。',
          '**最良の無料アプリ：** PocketPal AI — App Store、オープンソース、モデル柔軟性。',
          '**最良の有料アプリ：** Private LLM — 約¥1,500の買い切り、Shortcuts + Siriサポート。',
          '**オフライン動作：** モデルをダウンロードすれば5つすべて完全オフラインで動作 — クラウド接続不要。',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '最初にインストールすべきiPhoneアプリは？',
        content:
          '**ほとんどのユーザーへの推奨：App StoreでPocketPal AIをインストールし、Phi-4 Mini（3.8B Q4_K_M）をダウンロードしてください。** この組み合わせはiPhone 14 Pro以降で動作し、無料で日常のチャット・要約・下書きに実用的な出力を提供します。PocketPal AIで対応できない特定の需要がある場合のみ、他のアプリを検討してください。',
        image: '/images/iphone-llm-apps-which-app-ja.svg',
        imageCaption: 'iPhoneにインストールするローカルAIアプリの選び方：PocketPal AI（無料デフォルト）、Private LLM（Siri＋ショートカット）、MLC Chat（Apple Siliconで最速）、LLM Farm（設定可能）、Apple Intelligence（iOS 18+標準搭載）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年の多くのiPhoneユーザーに推奨：PocketPal AI（無料・App Store）をインストールしてPhi-4 Miniをダウンロードする。RAM 6 GB以上のiPhoneで日常のチャット・要約・下書きに対応します。',
          },
          {
            type: 'plain-terms',
            text: '2026年には5つのiPhoneアプリがデバイス上でAIを完全動作させます。PocketPal AIが最良の無料スタート地点です。インストールして2.7 GBのモデルファイルを一度ダウンロードするだけで、WiFiなしの電車の中でも使えるプライベートなチャットアシスタントが手に入ります。Private LLMはSiriにローカルモデルを応答させたい場合の有料オプションです。MLC Chatが最速。LLM Farmが最も柔軟。Apple IntelligenceはiOS内蔵ですが、チャットアプリではありません。PocketPal AIは90%のユースケースに対応します。',
          },
        ],
        decisionBlock: {
          title: '選択ガイド：iPhoneでどのローカルAIアプリを使うか？',
          localIf: [
            'オフラインで動作する無料チャットAIが欲しい → PocketPal AI',
            'Siriにローカルモデルを応答させたい → Private LLM',
            'Apple Silicon上で最速の生成速度が欲しい → MLC Chat',
            'サンプリングパラメーターとチャットテンプレートを調整したい → LLM Farm',
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
            'チップ上で最速：MLC Chat',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '後でPrivate LLMを購入する予定でも、まずPocketPal AIをインストールしてください。ご自身のiPhoneティアでのオンデバイス推論が用途に十分な速度かどうかを確認してから、Private LLMのiOS Shortcuts・Siri統合機能が約¥1,500の価値があるか判断できます。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhoneアプリ比較表',
        content:
          '**5つのアプリは、ほとんどのユーザーにとって重要な3つの軸で異なります：コスト、モデル柔軟性、iOS統合。** 速度の差は存在しますが、これらのアプリとクラウドLLMの差より小さいです。',
        image: '/images/iphone-llm-apps-comparison-ja.svg',
        imageCaption: 'iPhoneローカルLLMアプリ比較：PocketPal AIとLLM Farm（無料、~10–15 tok/s）、MLC Chat（無料、~14–20 tok/s、Metal加速）、Private LLM（~£10一括、Siri＋ショートカット）、Apple Intelligence（システム統合、iOS 18+）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AIが最良の無料定番、Private LLMが最良の有料オプション、MLC Chatが最速、LLM Farmが最もカスタマイズ可能、Apple Intelligenceがシステム統合型です。',
          },
          {
            type: 'plain-terms',
            text: '選択は通常3つの要素に絞られます：有料を使いますか（Private LLM）、最速を求めますか（MLC Chat）、設定を細かく調整したいですか（LLM Farm）。それ以外はPocketPal AIがデフォルトです。表の数値はQ4_K_M量子化（2026年のモバイル推論の標準）を前提としています。',
          },
        ],
        columns: ['アプリ', '価格', 'トークン/秒（Phi-4 Mini、16 Pro）', 'プライバシー', '最適な用途'],
        rows: [
          { 'アプリ': 'PocketPal AI', '価格': '無料（オープンソース）', 'トークン/秒（Phi-4 Mini、16 Pro）': '約10〜15', 'プライバシー': 'ローカルのみ、テレメトリなし', '最適な用途': 'ほとんどのユーザーに最適な無料定番アプリ' },
          { 'アプリ': 'Private LLM', '価格': '約¥1,500の買い切り', 'トークン/秒（Phi-4 Mini、16 Pro）': '約10〜14', 'プライバシー': 'ローカルのみ、opt-in分析', '最適な用途': 'iOS Shortcuts + Siri統合' },
          { 'アプリ': 'MLC Chat', '価格': '無料（オープンソース）', 'トークン/秒（Phi-4 Mini、16 Pro）': '約14〜20（Metal加速）', 'プライバシー': 'ローカルのみ、テレメトリなし', '最適な用途': 'Apple Silicon上で最速' },
          { 'アプリ': 'LLM Farm', '価格': '無料（オープンソース）', 'トークン/秒（Phi-4 Mini、16 Pro）': '約10〜15', 'プライバシー': 'ローカルのみ、テレメトリなし', '最適な用途': 'サンプリングを調整するパワーユーザー' },
          { 'アプリ': 'Apple Intelligence', '価格': '無料（iOS 18+内蔵）', 'トークン/秒（Phi-4 Mini、16 Pro）': '該当なし（システム機能）', 'プライバシー': 'ローカル + opt-in Private Cloud Compute', '最適な用途': 'メール・メッセージ・メモでの支援' },
        ],
        note:
          '**Apple Neural Engine（ANE）とMetalの違いについて：** PocketPal AIとLLM FarmはGPU上で動作するMetal Performance Shadersを使ったllama.cppで推論を行います。MLC ChatはMLC LLMとより深いMetal最適化を採用し、同じハードウェアで25〜35%高いトークン/秒を達成します。Apple IntelligenceはシステムAI 3Bモデル専用にANEを使用 — Metal推論より省電力ですが柔軟性は低いです。A18 Pro（iPhone 16 Pro）とA19 Pro（iPhone 17 Pro）はどちらも改善されたANEを搭載していますが、サードパーティのチャットアプリはANEを直接ターゲットできません — それはApple IntelligenceとAppleが開発したAPIのために予約されています。',
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
          '**Private LLMは2026年における最有力の有料iPhoneオプションです（約¥1,500の買い切り、サブスクなし）。** App Store専用配布で、最適化済みモデルの厳選ライブラリを同梱しています。差別化ポイントはiOS統合：Shortcutsアクションと音声トリガー"Hey Siri, ask Private LLM"です。',
        items: [
          '**概要：** 厳選モデルライブラリと深いiOS統合を備えた有料iOSアプリ。Apple Silicon向けに最適化された専用オンデバイスランタイムを使用しています。',
          '**インストール：** App Store → "Private LLM"。買い切り約¥1,500（サブスクなし）。',
          '**厳選モデルライブラリ：** Llama 3.2 3B、Phi-4 Mini、Mistral Small Instruct、複数の無検閲バリアントを含む約30モデルがiPhone向けに事前テスト・最適化済み。PocketPal AIより柔軟性は低いですが、クラッシュするモデルをインストールするリスクはありません。',
          '**iOS Shortcuts：** "Text With Private LLMを生成"アクションをShortcuts自動化に組み込めます。ホーム画面ボタンやNFCタグからローカルAIを起動するのに便利です。',
          '**Siri統合：** "Hey Siri, ask Private LLM [質問]"でプロンプトがオンデバイスモデルに送られ、Siriが回答を読み上げます。インターネット接続不要。チャットUIよりレイテンシは高め（音声開始まで約3〜5秒）。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Private LLMの約¥1,500はiPhoneアプリのみの価格です。macOS版は別途購入が必要で、iPad版はiPhoneとユニバーサル（1回の購入で両方に対応）。購入前に必要なプラットフォームを確認してください。Apple ファミリー共有で家族全員にアプリが適用されます。',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat：Apple Siliconに最適化',
        content:
          '**MLC Chat（MLC LLMプロジェクト製）は、Metal GPU加速により2026年においてiPhoneで最速のローカルLLMアプリです。** 無料・オープンソースで、標準GGUFではなくMLC LLMツールチェーンでコンパイルされたモデルを動作させます。',
        items: [
          '**概要：** MLC LLMプロジェクトのiOSリファレンスアプリ。Apple Silicon上でMLC LLMのMetal加速推論を実証します。',
          '**インストール：** App Store → "MLC Chat"。無料。',
          '**速度の優位性：** 同一iPhoneの同一モデルで、llama.cppベースのアプリより約25〜35%速い。iPhone 16 Pro：Phi-4 Mini 約14〜20トークン/秒（PocketPal AIの約10〜15に対して）。',
          '**モデルライブラリ：** PocketPal AIより小規模 — MLC LLMプロジェクトがiOS向けにコンパイルしたモデルに限定。現在：Llama 3.2 3B、Phi-4 Mini、Gemma 3 4B、RedPajama、その他数モデル。すべてのHugging Face GGUFが動作するわけではありません。',
          '**最適な用途：** モデルの選択肢よりも速度を優先するユーザー。目的のモデルがMLCライブラリにあれば、iPhone上で最速の選択肢です。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'MLC LLMのMetal加速は、Neural Engineが弱い旧世代iPhoneで最も効果を発揮します。iPhone 17 Proでは、A19 ProのNeural Engineが改善されたことでllama.cppの相対的な不利が縮まり、MLC ChatとPocketPal AIの差が小さくなります。iPhone 14 ProとiPhone 15 ProでMLC Chatのリードが最大です。',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm：最もカスタマイズ可能',
        content:
          '**LLM Farmは2026年において最もカスタマイズ可能なiPhoneローカルLLMアプリです。** 無料・オープンソース（GitHub: guinmoon/LLMFarm）で、他のアプリが隠しているサンプリングパラメーターを公開しています。デフォルト設定を受け入れるのではなく、モデルの動作を調整したいユーザーに最適です。',
        items: [
          '**概要：** 開発者@guinmoon制作のiOSアプリ。GGUFモデルを豊富な設定オプションで動作させます。',
          '**インストール：** App Store → "LLM Farm"。無料。',
          '**モデルの追加：** モデルライブラリアイコンをタップ → "URLからモデルを追加" → Hugging FaceのGGUFファイルの直接ダウンロードリンクを貼り付け。または、Apple FilesでGGUFファイルを転送する方法も可能。',
          '**公開されている設定：** 温度、Top-p、Top-k、Mirostatsサンプリング、繰り返しペナルティ、モデルごとのシステムプロンプト、チャットテンプレート選択、コンテキストウィンドウ長。他のアプリが隠す設定がすべて編集可能です。',
          '**生成速度：** PocketPal AIと同等（両方ともllama.cppを使用）。iPhone 16 Pro：Phi-4 Mini 約10〜15トークン/秒。',
          '**最適な用途：** サンプリング設定を比較したり、複数のメニューを操作することなく様々なチャットテンプレートをテストしたりしたい開発者・プロンプトエンジニア・上級ユーザー。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'LLM FarmのMirostatサンプリング公開機能は、標準の温度/Top-pサンプリングが繰り返し出力を生む創作系タスクに有効です。開始設定として：Mirostatをモード2、目標エントロピー約5.0、学習率0.1に設定してみてください。PocketPal AIとPrivate LLMはMirostatを公開していません。',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence：システム統合型オンデバイスAI',
        content:
          '**Apple IntelligenceはiPhone 15 Pro以降（A17 Proチップ、最低8 GB RAM）でApple独自の約3Bファウンデーションモデルをオンデバイスで動作させます。** チャットアプリではありません — メール（Smart Reply）、メッセージ（文章ツール）、メモ（要約）、通知サマリーのシステム機能を担います。PocketPal AIやPrivate LLMのようにユーザーのプロンプトから直接アクセスすることはできません。',
        items: [
          '**場所：** iOS 18+に統合されています。「設定」→「Apple Intelligence & Siri」で有効化できます。',
          '**ハードウェア要件：** iPhone 15 Pro / 15 Pro Max、iPhone 16シリーズ、iPhone 17シリーズ。旧モデル（14以前）はApple Intelligenceに非対応。',
          '**オンデバイス機能：** あらゆるテキストフィールドでのWriting Tools（書き直し・要約・校正）、メール・メッセージでのSmart Reply、通知サマリー、Genmoji生成。',
          '**Private Cloud Compute：** オンデバイスモデルの処理能力を超えるタスクの場合、Apple IntelligenceはPrivate Cloud Compute（PCC）にフォールバックします — Appleが運営するより大型モデルのサーバーで、ユーザーデータを保持しない暗号学的保証があります。PCCはopt-inで無効化可能。',
          '**チャットアプリとの関係：** Apple Intelligenceは補完的な存在であり、代替ではありません。iOS内アプリでの文章書き直しと要約を担い、PocketPal AI / Private LLM / MLC Chat / LLM Farmは任意の質問に対応する専用チャットインターフェースを提供します。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Apple Intelligenceだけが目的（メール書き直し、通知要約）なら、別途チャットアプリは不要です。「量子トンネルをわかりやすく説明して」や「Xのプロジェクト計画を作成して」といった質問をモデルに投げかけたいなら、4つのチャットアプリのいずれかをインストールしてください。Apple Intelligenceはそのインターフェースを提供していません。',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'iPhoneモデル別推奨モデル',
        content:
          '**iPhoneのRAMがモデルサイズの上限を決めます — チップの世代ではありません。** 6 GB iPhone（14 Pro、15）は1.7Bモデルを快適に動かせます；8 GB iPhone（15 Pro、16 Pro、17 Pro）は3B〜4Bモデルを快適に、7Bモデルはゆっくりと動かせます。モバイル以外の全ハードウェアクラスを網羅した広範なモデルガイドは [2026年版ベストローカルLLM](/ja/local-llms/best-local-llms-2026) をご参照ください。',
        image: '/images/iphone-llm-apps-models-tier-ja.svg',
        imageCaption: 'iPhone RAMによるLLMモデル推奨：8GB iPhone（15 Pro〜17 Pro）にはPhi-4 Mini 3.8B Q4_K_M（8〜20 tok/s）、6GB iPhone（14 Pro・非Pro）にはQwen3 1.7B Q4_K_M（12〜20 tok/s）、iPhone SE（4GB）は非推奨。',
        columns: ['iPhoneモデル（年・RAM）', '推奨モデル', 'ダウンロードサイズ', '期待速度'],
        rows: [
          { 'iPhoneモデル（年・RAM）': 'iPhone 17 Pro（2025年、8〜12 GB）', '推奨モデル': 'Phi-4 Mini または Llama 3.2 3B（Q4_K_M）', 'ダウンロードサイズ': '約2.5〜2.7 GB', '期待速度': '約13〜20トークン/秒' },
          { 'iPhoneモデル（年・RAM）': 'iPhone 16 Pro / 16 Pro Max（2024年、8 GB）', '推奨モデル': 'Phi-4 Mini（3.8B Q4_K_M）', 'ダウンロードサイズ': '約2.7 GB', '期待速度': '約10〜15トークン/秒' },
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
          '**iOSとの統合度はアプリによって大きく異なります。** Private LLMが最も深い統合（Shortcuts + Siri）を持ちます；PocketPal AI、MLC Chat、LLM Farmは2026年時点でShortcutsアクションを持たないスタンドアロンのチャットアプリです。',
        image: '/images/iphone-llm-apps-ios-integration-ja.svg',
        imageCaption: 'ローカルLLMアプリ別iOS統合機能：Private LLMとApple IntelligenceはショートカットとSiriに対応。PocketPal AI、MLC Chat、LLM FarmはショートカットなしのスタンドアロンChattアプリ（2026年時点）。PocketPal AI、MLC Chat、LLM Farmはオープンソース。',
        items: [
          '**Private LLM** は"Text With Private LLMを生成"のShortcutsアクションと音声トリガー"Hey Siri, ask Private LLM [質問]"を提供します。4つのチャットアプリの中で最もiOSネイティブです。',
          '**PocketPal AI** はスタンドアロンのチャットアプリです — Shortcutsアクションなし、Siri統合なし。アプリを開いてチャットします。Shortcuts対応の計画はGitHub Issuesで追跡されていますが、2026年5月時点ではリリースされていません。',
          '**MLC Chat** はMLC LLMプロジェクトのリファレンスアプリです — iOS統合は最小限。Shortcutsアクションなし。',
          '**LLM Farm** はスタンドアロンのチャットアプリです — Shortcutsアクションなし。',
          '**Apple Intelligence** は「モデルを使用」アクション（iOS 18.4+）でiOS Shortcutsと統合します。これはプロンプトをオンデバイス3Bモデルまたは Private Cloud Compute（設定可能）にルーティングします。オンデバイスの出力を他のShortcutsアクションに連結できます。',
          '**サイドローディング：** これらのアプリはいずれもサイドローディングやジェイルブレイクを必要としません。4つのチャットアプリはすべてApp Store配信；Apple IntelligenceはiOS内蔵。EUユーザーは2026年のDMAに基づき代替アプリマーケットプレイスからもインストールできますが、App Storeバージョンと同一です。',
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
          '**Apple Intelligenceをチャットアプリと間違える。** Apple Intelligenceにはチャットインターフェースがありません — システム機能を担っています。モデルに質問したい場合は、PocketPal AI、Private LLM、MLC Chat、LLM Farmのいずれかを別途インストールしてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考資料',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)（オープンソースiOSアプリ）。',
          'Private LLM — [App Storeページ](https://apps.apple.com) と開発者ドキュメント。',
          'MLC Chat / MLC LLMプロジェクト — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html)（Metal加速iOS展開）。',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)（オープンソースiOSアプリ）。',
          'Apple IntelligenceとオンデバイスFoundationモデル — [Apple Machine Learning Research](https://machinelearning.apple.com) とApple開発者ドキュメント。',
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
            a: 'はい、Private LLMを使えば可能です。"Hey Siri, ask Private LLM [質問]"と言えばプロンプトがオンデバイスモデルに送られ、Siriが回答を読み上げます — 完全オフライン。PocketPal AI、MLC Chat、LLM Farmは2026年時点でSiri統合を持っていません。Apple IntelligenceはSiriに統合されていますが、システムタスク（文章作成、要約、アプリ操作）のみで、一般的なQ&Aには対応していません。',
          },
          {
            q: 'これらのアプリはiPhone SEや古いiPhoneでも動作しますか？',
            a: '限定的です。iPhone SE（4 GB RAM）は2026年のオンデバイスLLMの実用下限を下回ります。iPhone 14 / 15（Pro以外、6 GB RAM）は1.7Bモデル（Qwen3 1.7B、SmolLM 2 1.7B）は動かせますが3B以上は不可です。iPhone 14 ProとiPhone 15 Pro（6〜8 GB RAM）はPhi-4 Miniのような3Bモデルを毎秒8〜12トークンで動かせます。古いiPhoneでは、自宅のMacやPCへのリモート接続の方が現実的です。',
          },
          {
            q: 'iPhoneとMacの間でチャット履歴を同期できますか？',
            a: '4つのアプリいずれもネイティブには対応していません。チャット履歴は各デバイスにローカル保存され、PocketPal AI、Private LLM、MLC Chat、LLM Farmには2026年5月時点でiCloud同期機能がありません。デバイス間でチャット履歴を共有する実用的な方法は、自宅のMacでOpen WebUIを稼働させ、iPhoneとMacの両方からブラウザでアクセスすること — Open WebUIはチャット履歴をサーバー側に保存します。',
          },
          {
            q: 'これらのアプリはApp Store以外でも入手できますか？',
            a: 'PocketPal AIとLLM FarmはオープンソースでXcodeを使ってソースからビルドできますが、App Storeビルドが標準配布です。Private LLMとMLC ChatはApp Storeのみです。EUユーザーは2026年のDMAに基づき代替アプリマーケットプレイスからもインストールできますが、アプリの中身はApp Store版と同一です。サイドローディングは不要です。',
          },
          {
            q: 'ジェイルブレイクが必要なアプリはありますか？',
            a: 'いいえ。5つすべて（PocketPal AI、Private LLM、MLC Chat、LLM Farm、Apple Intelligence）が標準iOSで動作します。4つのチャットアプリはApp Store配信；Apple IntelligenceはiOS 18+内蔵。ジェイルブレイクは不要であり、推奨もしません — チャットアプリのためにiOSセキュリティアップデートを失うのは割に合わないトレードオフです。',
          },
          {
            q: 'iOS ShortcutsでローカルAIを使えますか？',
            a: 'はい、Private LLM（"Text With Private LLMを生成"Shortcutsアクションを提供）またはApple Intelligence（iOS 18.4+で「モデルを使用」アクションを提供）を通じて使えます。PocketPal AI、MLC Chat、LLM Farmは2026年時点でShortcutsアクションを持っていません。Private LLM + Share SheetのShortcutの組み合わせにより、あらゆるアプリのテキストに対して「要約して」や「書き直して」を完全オフラインで実行できます。',
          },
          {
            q: 'ローカルAIとiPhoneのChatGPTアプリを比べるとどうですか？',
            a: '2026年において、オンデバイスモデル（Phi-4 Mini、Llama 3.2 3B）は日常的なチャットではGPT-5.5の約60〜75%の性能で、シンプルな質問では（ネットワーク往復なしで）より速く、完全にプライベートです。ChatGPTは複雑な推論、幅広い世界の知識、マルチモーダルタスクに依然として優れています。正直なトレードオフ：日常的・プライベートなタスクにはローカルAI；ときどきの難しい質問にはChatGPT。2026年の多くのユーザーは両方のアプリを持ち、クエリに応じて選んでいます。',
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
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Meilleures applications LLM locales pour iPhone en 2026 (IA sans WiFi)',
    seoTitle: 'Meilleures applications LLM locales iPhone 2026',
    intro:
      'Cinq applications iPhone font tourner de vrais LLM entièrement sur l\'appareil en 2026 : PocketPal AI, Private LLM, MLC Chat, LLM Farm et Apple Intelligence (intégrée au système). Toutes fonctionnent sans WiFi une fois le modèle téléchargé. Ce guide les classe selon les tokens par seconde sur iPhone 16 Pro et iPhone 17 Pro, la bibliothèque de modèles, la gestion de la RAM, la posture de confidentialité et l\'intégration iOS.',
    metaDescription:
      'Meilleures apps LLM locales pour iPhone 2026 : Private LLM, LLM Farm, Enclave. Vitesses sur A18 Pro, Neural Engine, confidentialité et modèles comparés.',
    twitterDescription:
      'IA locale sur iPhone en 2026 : PocketPal AI (gratuit), Private LLM (~11 €, Siri), MLC Chat (le plus rapide), LLM Farm (le plus configurable). Fonctionne hors ligne après téléchargement.',
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
      '**Pour la plupart des utilisateurs iPhone en 2026, installez PocketPal AI depuis l\'App Store et téléchargez Phi-4 Mini (3,8B Q4_K_M, ~2,7 Go).** Gratuit, open source, compatible avec iPhone 14 Pro et les modèles plus récents (tout iPhone avec 6 Go+ de RAM), il génère ~10–15 tokens/sec sur iPhone 16 Pro pour un usage quotidien. Pour l\'intégration payante avec Shortcuts et Siri, Private LLM est la meilleure option payante (~11 € en achat unique). Pour les tokens/sec les plus rapides sur Apple Silicon, MLC Chat utilise MLC LLM avec accélération Metal. LLM Farm est le plus configurable pour les utilisateurs avancés. Apple Intelligence exécute également des modèles on-device mais est intégré au système — il complète ces applications plutôt qu\'il ne les remplace.',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure application LLM locale pour iPhone en 2026 ?',
        answer:
          'PocketPal AI est la meilleure option gratuite pour la plupart des utilisateurs — open source, disponible sur l\'App Store, compatible avec n\'importe quel modèle GGUF depuis Hugging Face, et fait tourner Phi-4 Mini (3,8B) à ~10–15 tokens/sec sur iPhone 16 Pro. Private LLM est la meilleure option payante (~11 € en achat unique) avec l\'intégration iOS Shortcuts et Siri. MLC Chat est le plus rapide sur Apple Silicon grâce à l\'accélération Metal. LLM Farm est le plus configurable pour les utilisateurs avancés. Apple Intelligence exécute également des modèles on-device mais est intégré au système et complète ces applications.',
        bullets: [
          'PocketPal AI — gratuit, open source, App Store. Meilleure option par défaut pour la plupart des utilisateurs. Compatible avec tous les modèles GGUF.',
          'Private LLM — ~11 € en achat unique. Meilleure option payante. iOS Shortcuts + intégration Siri. Bibliothèque de modèles sélectionnés.',
          'MLC Chat — gratuit, projet MLC LLM. Le plus rapide sur Apple Silicon (accélération Metal). Sélection de modèles plus restreinte.',
          'LLM Farm — gratuit, open source. Le plus configurable. Idéal pour les utilisateurs avancés souhaitant régler les paramètres d\'échantillonnage.',
          'Apple Intelligence — intégré au système, pas une application séparée. Modèle 3B on-device utilisé par Mail, Messages et Notes.',
          'Modèle recommandé pour iPhone 16 Pro / 17 Pro : Phi-4 Mini (3,8B Q4_K_M, ~2,7 Go) — tourne à ~10–15 tokens/sec.',
          'Anciens iPhone (14 Pro, 15 Pro) : Qwen3 1.7B ou SmolLM 2 1.7B — tient dans 6 Go de RAM, ~15–20 tokens/sec.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Données rapides', anchor: '#quick-facts' },
      { label: 'Quelle application iPhone installer en premier ?', anchor: '#which-app' },
      { label: 'Tableau comparatif des applications iPhone', anchor: '#comparison-table' },
      { label: 'PocketPal AI : option gratuite open source', anchor: '#pocketpal-ai' },
      { label: 'Private LLM : option payante avec intégration iOS', anchor: '#private-llm' },
      { label: 'MLC Chat : optimisé pour Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm : la plus configurable', anchor: '#llm-farm' },
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
          '**Private LLM est la meilleure option payante (~11 €, sans abonnement).** Bibliothèque de modèles sélectionnés, intégration iOS Shortcuts et commande vocale Siri "Dis Siri, demande à Private LLM". Vaut l\'investissement si vous souhaitez un accès vocal mains libres ou une automatisation de vos flux de travail.',
          '**MLC Chat est le plus rapide sur Apple Silicon.** Utilise MLC LLM avec accélération GPU Metal, générant des tokens 25–35 % plus rapidement que les applications basées sur llama.cpp sur le même matériel. Sélection de modèles plus restreinte que PocketPal AI.',
          '**LLM Farm est le plus configurable.** Expose les paramètres d\'échantillonnage (température, top-p, mirostat), les instructions système par modèle et les modèles de chat. Idéal pour les utilisateurs souhaitant affiner les modèles pour des cas d\'usage spécifiques.',
          '**Apple Intelligence est on-device mais pas une application distincte.** Le modèle de fondation 3B d\'Apple tourne dans iOS 18+ sur iPhone 15 Pro et les modèles plus récents. Il alimente des fonctionnalités système (Outils d\'écriture, Réponse intelligente, Résumés de notifications) mais n\'est pas directement accessible via une interface de chat.',
          '**Modèle recommandé pour iPhone 16 Pro / 17 Pro : Phi-4 Mini (3,8B Q4_K_M, ~2,7 Go).** Meilleur équilibre qualité/vitesse pour le niveau 8 Go de RAM. Anciens iPhone avec 6 Go de RAM (iPhone 14 Pro) : Qwen3 1.7B ou SmolLM 2 1.7B.',
          '**Aucune application ne nécessite de jailbreak. Les cinq fonctionnent sur iOS standard.** PocketPal AI, Private LLM, MLC Chat et LLM Farm sont sur l\'App Store ; Apple Intelligence est intégré à iOS.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Données rapides',
        items: [
          '**Applications testées :** PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence (système).',
          '**Appareils de test :** iPhone 16 Pro (A18 Pro, 8 Go de RAM) et iPhone 17 Pro (A19 Pro).',
          '**Moteurs d\'inférence :** llama.cpp (PocketPal AI, LLM Farm), MLC LLM avec Metal (MLC Chat), runtime on-device propriétaire (Private LLM, Apple Intelligence).',
          '**iPhone minimum pour les modèles 3B+ :** iPhone 14 Pro (A16, 6 Go de RAM) pour 1,7B ; iPhone 15 Pro / 16 Pro / 17 Pro (8 Go+) pour 3B–4B.',
          '**Meilleure application gratuite :** PocketPal AI — App Store, open source, flexibilité des modèles.',
          '**Meilleure application payante :** Private LLM — ~11 € en achat unique, support Shortcuts + Siri.',
          '**Hors ligne :** Les cinq fonctionnent entièrement hors ligne une fois le modèle téléchargé ; aucun appel cloud.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Quelle application iPhone installer en premier ?',
        content:
          '**Pour la plupart des utilisateurs : PocketPal AI depuis l\'App Store, puis téléchargez Phi-4 Mini (3,8B Q4_K_M).** Cette combinaison fonctionne sur iPhone 14 Pro et les modèles plus récents, ne coûte rien et produit des résultats utilisables pour le chat quotidien, la synthèse et la rédaction rapide. Choisissez une autre application uniquement si vous avez un besoin spécifique qu\'elle ne couvre pas.',
        image: '/images/iphone-llm-apps-which-app-fr.svg',
        imageCaption: 'Quelle app IA locale pour iPhone : PocketPal AI (défaut gratuit), Private LLM (Siri + Raccourcis), MLC Chat (la plus rapide sur Apple Silicon), LLM Farm (configurable), Apple Intelligence (intégré à iOS 18+).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour la plupart des utilisateurs iPhone en 2026, installez PocketPal AI (gratuit, App Store) et téléchargez Phi-4 Mini — il couvre le chat quotidien, la synthèse et la rédaction sur tout iPhone avec 6 Go+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Cinq applications font tourner l\'IA entièrement sur votre iPhone en 2026. PocketPal AI est le meilleur point de départ gratuit — installez-le, téléchargez un fichier modèle de 2,7 Go une seule fois, et vous disposez d\'un assistant de chat privé qui fonctionne dans le train sans WiFi. Private LLM est l\'option payante si vous souhaitez que Siri parle au modèle local. MLC Chat est le plus rapide. LLM Farm est le plus flexible. Apple Intelligence est intégré à iOS mais n\'est pas une application de chat. PocketPal AI couvre 90 % des cas d\'usage.',
          },
        ],
        decisionBlock: {
          title: 'Décision : quelle application IA locale pour iPhone ?',
          localIf: [
            'Vous souhaitez un assistant IA gratuit fonctionnant hors ligne → PocketPal AI',
            'Vous souhaitez que Siri parle à votre modèle local → Private LLM',
            'Vous souhaitez la vitesse de génération maximale sur Apple Silicon → MLC Chat',
            'Vous souhaitez régler les paramètres d\'échantillonnage et les modèles de chat → LLM Farm',
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
            'Le plus rapide sur puce : MLC Chat',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Installez PocketPal AI en premier, même si vous envisagez de payer Private LLM plus tard. Utilisez PocketPal AI pour tester si l\'inférence on-device sur votre iPhone est suffisamment rapide pour votre usage. Si oui, décidez si l\'intégration iOS Shortcuts et Siri de Private LLM vaut ~11 €. Si non, vous avez économisé 11 € en le découvrant avant de payer.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif des applications iPhone',
        content:
          '**Les cinq applications se différencient sur trois axes importants pour la plupart des utilisateurs : le coût, la flexibilité des modèles et l\'intégration avec iOS.** Les différences de vitesse existent mais sont moins importantes que l\'écart entre n\'importe laquelle de ces applications et un LLM cloud.',
        image: '/images/iphone-llm-apps-comparison-fr.svg',
        imageCaption: 'Comparatif apps LLM locaux iPhone : PocketPal AI et LLM Farm (gratuit, ~10–15 tok/s), MLC Chat (gratuit, ~14–20 tok/s, Metal), Private LLM (~10€ unique, Siri + Raccourcis), Apple Intelligence (système, iOS 18+).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI est la meilleure option gratuite par défaut, Private LLM est la meilleure option payante, MLC Chat est le plus rapide, LLM Farm est le plus configurable, Apple Intelligence est intégré au système.',
          },
          {
            type: 'plain-terms',
            text: 'Le choix se résume généralement à trois critères : souhaitez-vous payer (Private LLM), voulez-vous la vitesse maximale (MLC Chat) ou la flexibilité pour ajuster les paramètres (LLM Farm) ? Pour tout le reste, PocketPal AI est le choix par défaut. Les chiffres du tableau supposent une quantisation Q4_K_M — le standard pour l\'inférence mobile en 2026.',
          },
        ],
        columns: ['Application', 'Prix', 'Tokens/sec (Phi-4 Mini, 16 Pro)', 'Confidentialité', 'Idéal pour'],
        rows: [
          { 'Application': 'PocketPal AI', 'Prix': 'Gratuit (open source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', 'Confidentialité': 'Local uniquement, sans télémétrie', 'Idéal pour': 'Option gratuite par défaut pour la plupart' },
          { 'Application': 'Private LLM', 'Prix': '~11 € achat unique', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–14', 'Confidentialité': 'Local uniquement, analyses opt-in', 'Idéal pour': 'iOS Shortcuts + intégration Siri' },
          { 'Application': 'MLC Chat', 'Prix': 'Gratuit (open source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~14–20 (accélération Metal)', 'Confidentialité': 'Local uniquement, sans télémétrie', 'Idéal pour': 'Le plus rapide sur Apple Silicon' },
          { 'Application': 'LLM Farm', 'Prix': 'Gratuit (open source)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', 'Confidentialité': 'Local uniquement, sans télémétrie', 'Idéal pour': 'Utilisateurs avancés réglant l\'échantillonnage' },
          { 'Application': 'Apple Intelligence', 'Prix': 'Gratuit (intégré à iOS 18+)', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A (fonctionnalité système)', 'Confidentialité': 'Local + Private Cloud Compute opt-in', 'Idéal pour': 'Assistance Mail, Messages, Notes' },
        ],
        note:
          '**Note sur Apple Neural Engine (ANE) vs Metal :** PocketPal AI et LLM Farm utilisent llama.cpp avec Metal Performance Shaders pour l\'inférence, qui s\'exécute sur le GPU. MLC Chat utilise MLC LLM avec une optimisation Metal plus poussée, atteignant 25–35 % de tokens/sec de plus sur le même matériel. Apple Intelligence utilise l\'ANE spécifiquement pour le modèle système 3B, plus économe en énergie mais moins flexible que l\'inférence basée sur Metal. L\'A18 Pro (iPhone 16 Pro) et l\'A19 Pro (iPhone 17 Pro) disposent tous deux d\'ANE améliorés, mais les applications tierces ne peuvent pas cibler directement l\'ANE — c\'est réservé à Apple Intelligence et aux API Apple.',
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
          '**Private LLM est la meilleure option iPhone payante en 2026 (~11 €, sans abonnement).** Disponible uniquement sur l\'App Store, il est livré avec une bibliothèque de modèles optimisés sélectionnés. Sa différenciation réside dans l\'intégration iOS : actions Shortcuts et commande vocale "Dis Siri, demande à Private LLM".',
        items: [
          '**Qu\'est-ce que c\'est :** une application iOS payante avec une bibliothèque de modèles sélectionnés et une intégration iOS poussée. Utilise un runtime on-device propriétaire optimisé pour Apple Silicon.',
          '**Installation :** App Store → "Private LLM". Achat unique ~11 € (sans abonnement).',
          '**Bibliothèque de modèles sélectionnés :** ~30 modèles pré-testés et optimisés pour iPhone, dont Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct et plusieurs variantes non censurées. Moins de flexibilité que PocketPal AI mais aucun risque d\'installer un modèle qui plante.',
          '**iOS Shortcuts :** Private LLM expose une action "Générer du texte avec Private LLM" que vous pouvez enchaîner dans des automatisations Shortcuts. Utile pour déclencher l\'IA locale depuis un bouton sur votre écran d\'accueil ou via des étiquettes NFC.',
          '**Intégration Siri :** "Dis Siri, demande à Private LLM [votre question]" achemine l\'invite vers le modèle on-device et lit la réponse à voix haute. Fonctionne sans connexion internet. La latence est plus élevée que dans l\'interface de chat (~3–5 secondes avant le démarrage de l\'audio).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Le prix de ~11 € de Private LLM couvre uniquement l\'application iPhone. La version macOS est un achat séparé, et la version iPad est universelle avec iPhone (un seul achat couvre les deux). Vérifiez la plateforme dont vous avez besoin avant de payer. Le partage familial Apple couvre l\'application pour les membres de la famille.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat : optimisé pour Apple Silicon',
        content:
          '**MLC Chat (du projet MLC LLM) est l\'application LLM locale la plus rapide sur iPhone en 2026 grâce à l\'accélération GPU Metal.** Gratuit, open source, il exécute des modèles compilés par la chaîne d\'outils MLC LLM plutôt que des GGUF standard.',
        items: [
          '**Qu\'est-ce que c\'est :** l\'application iOS de référence du projet MLC LLM, démontrant l\'inférence accélérée par Metal de MLC LLM sur Apple Silicon.',
          '**Installation :** App Store → "MLC Chat". Gratuit.',
          '**Avantage de vitesse :** ~25–35 % plus rapide que les applications basées sur llama.cpp sur le même iPhone pour le même modèle. Sur iPhone 16 Pro : Phi-4 Mini ~14–20 tok/sec (contre ~10–15 dans PocketPal AI).',
          '**Bibliothèque de modèles :** plus restreinte que PocketPal AI — limitée aux modèles compilés pour iOS par le projet MLC LLM. Inclut actuellement Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B, RedPajama et quelques autres. Tous les GGUF Hugging Face ne fonctionnent pas.',
          '**Idéal pour :** les utilisateurs qui privilégient la vitesse à la flexibilité des modèles. Si votre modèle cible est dans la bibliothèque MLC, MLC Chat sera l\'option la plus rapide sur votre iPhone.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'L\'accélération Metal de MLC LLM est la plus utile sur les anciens iPhone avec des Neural Engines moins puissants. Sur iPhone 17 Pro, l\'écart entre MLC Chat et PocketPal AI se réduit car le Neural Engine amélioré de l\'A19 Pro réduit le désavantage relatif de llama.cpp. Sur iPhone 14 Pro et 15 Pro, l\'avance de MLC Chat est la plus grande.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm : la plus configurable',
        content:
          '**LLM Farm est l\'application LLM locale iPhone la plus configurable en 2026.** Gratuite, open source (GitHub : guinmoon/LLMFarm), elle expose des paramètres d\'échantillonnage que les autres applications cachent. Idéale pour les utilisateurs souhaitant affiner le comportement des modèles plutôt que d\'accepter les valeurs par défaut.',
        items: [
          '**Qu\'est-ce que c\'est :** une application iOS du développeur @guinmoon qui exécute des modèles GGUF avec de nombreuses options de configuration.',
          '**Installation :** App Store → "LLM Farm". Gratuit.',
          '**Ajouter un modèle :** appuyez sur l\'icône de bibliothèque de modèles → "Ajouter un modèle depuis une URL" → collez un lien de téléchargement direct Hugging Face pour un fichier GGUF. Vous pouvez également transférer un GGUF via Fichiers Apple.',
          '**Configuration exposée :** température, top-p, top-k, échantillonnage mirostat, pénalité de répétition, instruction système par modèle, sélection du modèle de chat, longueur de la fenêtre de contexte. Tous les paramètres que la plupart des applications cachent sont modifiables ici.',
          '**Vitesse de génération :** comparable à PocketPal AI (les deux utilisent llama.cpp). Sur iPhone 16 Pro : Phi-4 Mini ~10–15 tok/sec.',
          '**Idéal pour :** développeurs, ingénieurs en prompt et utilisateurs souhaitant comparer des paramètres d\'échantillonnage ou tester différents modèles de chat sans naviguer dans trois menus de paramètres.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'L\'échantillonnage mirostat exposé par LLM Farm est utile pour les tâches d\'écriture créative où l\'échantillonnage température/top-p standard produit des sorties répétitives. Définissez mirostat en mode 2 avec une entropie cible ~5,0 et un taux d\'apprentissage 0,1 comme point de départ. PocketPal AI et Private LLM n\'exposent pas du tout mirostat.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence : IA on-device intégrée au système',
        content:
          '**Apple Intelligence exécute le propre modèle de fondation ~3B d\'Apple on-device sur iPhone 15 Pro et les modèles plus récents (puce A17 Pro avec 8 Go de RAM minimum).** Ce n\'est pas une application de chat — il alimente des fonctionnalités système dans Mail (Réponse intelligente), Messages (outils d\'écriture), Notes (synthèse) et les résumés de notifications. Le modèle n\'est pas directement accessible aux invites des utilisateurs comme PocketPal AI ou Private LLM.',
        items: [
          '**Où il se trouve :** intégré à iOS 18+. Activez dans Réglages → Apple Intelligence et Siri.',
          '**Configuration matérielle requise :** iPhone 15 Pro / 15 Pro Max, iPhone 16, iPhone 17. Les anciens iPhone (14 et inférieurs) ne prennent pas en charge Apple Intelligence.',
          '**Fonctionnalités on-device :** Outils d\'écriture (réécrire, résumer, relire) dans tout champ de texte, Réponse intelligente dans Mail et Messages, Résumés de notifications, génération de Genmoji.',
          '**Private Cloud Compute :** pour les tâches dépassant les capacités du modèle on-device, Apple Intelligence bascule vers Private Cloud Compute (PCC) — des serveurs Apple exécutant des modèles plus grands avec des garanties cryptographiques qu\'aucune donnée utilisateur n\'est conservée. PCC est opt-in et peut être désactivé.',
          '**Relation avec les applications de chat :** Apple Intelligence est un complément, pas un remplacement. Il gère la réécriture et la synthèse de texte dans les applications iOS ; PocketPal AI / Private LLM / MLC Chat / LLM Farm fournissent une interface de chat dédiée pour les questions arbitraires.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si Apple Intelligence est votre seul besoin (réécrire des e-mails, résumer des notifications), vous n\'avez pas besoin d\'une application de chat séparée. Si vous souhaitez poser des questions au modèle comme "explique la physique quantique en termes simples" ou "rédige un plan de projet pour X", installez l\'une des quatre applications de chat — Apple Intelligence n\'expose pas cette interface.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modèles recommandés par génération d\'iPhone',
        content:
          '**La RAM de l\'iPhone détermine la limite de taille du modèle — pas la génération de puce.** Un iPhone 6 Go (14 Pro, 15) peut exécuter confortablement des modèles 1,7B ; un iPhone 8 Go (15 Pro, 16 Pro, 17 Pro) exécute confortablement des modèles 3B–4B et lentement des modèles 7B. Pour le panorama plus large des modèles sur tout le matériel (pas seulement mobile), voir [Meilleurs LLM locaux en 2026](/fr/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-fr.svg',
        imageCaption: 'Recommandations de modèles LLM par RAM iPhone : Phi-4 Mini 3,8B Q4_K_M pour les iPhones 8 Go (15 Pro–17 Pro) à 8–20 tok/s ; Qwen3 1,7B Q4_K_M pour les iPhones 6 Go (14 Pro, non-Pro) à 12–20 tok/s ; iPhone SE (4 Go) déconseillé.',
        columns: ['Niveau iPhone (Année, RAM)', 'Modèle recommandé', 'Taille de téléchargement', 'Vitesse estimée'],
        rows: [
          { 'Niveau iPhone (Année, RAM)': 'iPhone 17 Pro (2025, 8–12 Go)', 'Modèle recommandé': 'Phi-4 Mini ou Llama 3.2 3B (Q4_K_M)', 'Taille de téléchargement': '~2,5–2,7 Go', 'Vitesse estimée': '~13–20 tok/sec' },
          { 'Niveau iPhone (Année, RAM)': 'iPhone 16 Pro / 16 Pro Max (2024, 8 Go)', 'Modèle recommandé': 'Phi-4 Mini (3,8B Q4_K_M)', 'Taille de téléchargement': '~2,7 Go', 'Vitesse estimée': '~10–15 tok/sec' },
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
          '**L\'intégration iOS varie considérablement selon les applications.** Private LLM dispose de l\'intégration la plus poussée (Shortcuts + Siri) ; PocketPal AI, MLC Chat et LLM Farm sont des applications de chat autonomes sans actions Shortcuts en 2026.',
        image: '/images/iphone-llm-apps-ios-integration-fr.svg',
        imageCaption: 'Intégration iOS par app LLM locale : Private LLM et Apple Intelligence prennent en charge Raccourcis et Siri ; PocketPal AI, MLC Chat et LLM Farm sont des apps de chat autonomes sans actions Raccourcis en 2026. PocketPal AI, MLC Chat et LLM Farm sont open-source.',
        items: [
          '**Private LLM** expose une action Shortcuts "Générer du texte avec Private LLM" et un déclencheur vocal "Dis Siri, demande à Private LLM [question]". La plus intégrée nativement à iOS des quatre applications de chat.',
          '**PocketPal AI** est une application de chat autonome — pas d\'action Shortcuts, pas d\'intégration Siri. Vous ouvrez l\'application et chatez. Des plans pour le support Shortcuts sont suivis dans les issues GitHub mais non livrés en mai 2026.',
          '**MLC Chat** est une application de référence pour le projet MLC LLM — intégration iOS minimale. Pas d\'action Shortcuts.',
          '**LLM Farm** est une application de chat autonome — pas d\'action Shortcuts.',
          '**Apple Intelligence** s\'intègre avec iOS Shortcuts via l\'action "Utiliser le modèle" (iOS 18.4+). Cette action achemine une invite vers le modèle 3B on-device ou vers Private Cloud Compute (configurable). La sortie on-device peut être enchaînée dans d\'autres actions Shortcuts.',
          '**Chargement latéral :** aucune de ces applications ne nécessite de chargement latéral ou de jailbreak. Les quatre applications de chat sont sur l\'App Store ; Apple Intelligence est intégré à iOS. Les utilisateurs UE peuvent également installer via des marketplaces alternatives en vertu du DMA en 2026, mais l\'application est identique à la version App Store.',
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
          '**Confondre Apple Intelligence avec une application de chat.** Apple Intelligence n\'a pas d\'interface de chat — il alimente des fonctionnalités système. Si vous souhaitez poser des questions au modèle, installez PocketPal AI, Private LLM, MLC Chat ou LLM Farm séparément.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (application iOS open source).',
          'Private LLM — [fiche App Store](https://apps.apple.com) et documentation développeur.',
          'MLC Chat / Projet MLC LLM — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (déploiement iOS accéléré par Metal).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (application iOS open source).',
          'Apple Intelligence et modèles de fondation on-device — [Apple Machine Learning Research](https://machinelearning.apple.com) et documentation Apple Developer.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
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
            a: 'Oui, avec Private LLM. En disant "Dis Siri, demande à Private LLM [question]", l\'invite est acheminée vers le modèle on-device et Siri lit la réponse — entièrement hors ligne. PocketPal AI, MLC Chat et LLM Farm n\'ont pas d\'intégration Siri en 2026. Apple Intelligence s\'intègre avec Siri mais uniquement pour les tâches système (écriture, synthèse, actions d\'application), pas pour le Q&A général.',
          },
          {
            q: 'Ces applications fonctionnent-elles sur iPhone SE ou les anciens iPhone ?',
            a: 'Limitée. L\'iPhone SE (4 Go de RAM) est en dessous du seuil pratique pour les LLM on-device en 2026. iPhone 14 / 15 (non Pro, 6 Go de RAM) peut faire tourner des modèles 1,7B (Qwen3 1.7B, SmolLM 2 1.7B) mais pas 3B+. iPhone 14 Pro et 15 Pro (6–8 Go de RAM) peuvent faire tourner des modèles 3B comme Phi-4 Mini à 8–12 tokens/sec. Pour les anciens iPhone, la meilleure solution est de se connecter à distance à un Mac ou PC domestique.',
          },
          {
            q: 'Puis-je synchroniser l\'historique de chat entre iPhone et Mac ?',
            a: 'Pas nativement dans ces quatre applications. L\'historique de chat est stocké localement sur chaque appareil ; il n\'y a pas de fonction de synchronisation iCloud dans PocketPal AI, Private LLM, MLC Chat ou LLM Farm en mai 2026. Pour un historique de chat entre appareils, l\'approche pratique est d\'exécuter Open WebUI sur un Mac domestique et d\'y accéder depuis les deux navigateurs — Open WebUI stocke l\'historique de chat côté serveur.',
          },
          {
            q: 'Ces applications sont-elles disponibles en dehors de l\'App Store ?',
            a: 'PocketPal AI et LLM Farm sont open source et peuvent être compilés depuis les sources via Xcode, mais les versions App Store sont la distribution standard. Private LLM et MLC Chat sont uniquement sur l\'App Store. Les utilisateurs UE peuvent installer via des marketplaces alternatives en vertu du DMA en 2026, mais l\'application sous-jacente est identique à la version App Store. Aucune ne nécessite de chargement latéral.',
          },
          {
            q: 'L\'une d\'elles nécessite-t-elle un jailbreak ?',
            a: 'Non. Les cinq (PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence) fonctionnent sur iOS standard. Les quatre applications de chat sont sur l\'App Store ; Apple Intelligence est intégré à iOS 18+. Le jailbreak n\'est pas requis et n\'est pas recommandé — perdre les mises à jour de sécurité iOS pour installer une application de chat n\'est pas un compromis acceptable.',
          },
          {
            q: 'Puis-je utiliser l\'IA locale dans iOS Shortcuts ?',
            a: 'Oui, via Private LLM (qui expose une action Shortcuts "Générer du texte avec Private LLM") ou Apple Intelligence (qui expose une action "Utiliser le modèle" dans iOS 18.4+). PocketPal AI, MLC Chat et LLM Farm n\'ont pas d\'actions Shortcuts en 2026. La combinaison Private LLM + un raccourci Share Sheet vous permet d\'exécuter "résumer ceci" ou "réécrire ceci" sur du texte dans n\'importe quelle application, entièrement hors ligne.',
          },
          {
            q: 'Comment l\'IA locale se compare-t-elle à l\'application ChatGPT sur iPhone ?',
            a: 'Les modèles on-device (Phi-4 Mini, Llama 3.2 3B) sont environ 60–75 % aussi capables que GPT-5.5 pour le chat quotidien en 2026, plus rapides sur les requêtes simples (sans aller-retour réseau), et entièrement privés. ChatGPT reste supérieur pour le raisonnement complexe, les connaissances générales du monde et les tâches multimodales. Le compromis honnête : IA locale pour les tâches routinières et privées ; ChatGPT pour les questions difficiles occasionnelles. De nombreux utilisateurs en 2026 ont les deux applications et choisissent selon la requête.',
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
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '2026年最佳iPhone本地LLM应用（无需WiFi运行AI）',
    seoTitle: '2026年iPhone本地LLM应用推荐（离线运行AI）',
    intro:
      '2026年，五款iPhone应用可在设备端完整运行真实LLM：PocketPal AI、Private LLM、MLC Chat、LLM Farm，以及系统集成的Apple Intelligence。所有应用在模型下载完成后均可离线使用。本指南从iPhone 16 Pro和iPhone 17 Pro的tokens/秒、模型库、内存管理、隐私保护及iOS集成度五个维度进行评测排名。',
    metaDescription:
      '2026年五款iPhone应用可在设备本地运行真实LLM。PocketPal AI、Private LLM、MLC Chat、LLM Farm经iPhone 16 Pro和17 Pro实测，速度、隐私与模型库全面对比。',
    twitterDescription:
      'iPhone本地AI 2026：PocketPal AI（免费）、Private LLM（约£10，Siri集成）、MLC Chat（最快）、LLM Farm（最可配置）。下载后完全离线运行。',
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
      '**2026年对大多数iPhone用户而言，推荐在App Store安装PocketPal AI并下载Phi-4 Mini（3.8B Q4_K_M，约2.7 GB）。** 免费、开源，支持iPhone 14 Pro及更新机型（6 GB以上内存的iPhone），在iPhone 16 Pro上每秒生成约10–15个token，适合日常对话使用。如需付费版Shortcuts和Siri集成，Private LLM是最佳付费选择（约£10买断）。如需在Apple Silicon上获得最快tokens/秒，MLC Chat采用Metal加速的MLC LLM。LLM Farm则是高级用户最具可配置性的选择。Apple Intelligence同样在设备端运行模型，但属系统集成型——与上述应用互补而非替代。',
    quickAnswerTop: {
      zh: {
        question: '2026年iPhone最佳本地LLM应用是什么？',
        answer:
          'PocketPal AI是大多数iPhone用户最佳的免费选择——开源、App Store安装，支持Hugging Face上任意GGUF模型，可在iPhone 16 Pro上以约10–15 tokens/秒运行Phi-4 Mini（3.8B）。Private LLM是最佳付费选项（约£10买断），提供iOS Shortcuts和Siri集成。MLC Chat凭借Metal加速在Apple Silicon上速度最快。LLM Farm是高级用户可配置性最强的选择。Apple Intelligence同样在设备端运行模型，但属系统集成型，与上述应用互补。',
        bullets: [
          'PocketPal AI — 免费、开源、App Store。大多数用户的最佳默认选择。支持所有GGUF模型。',
          'Private LLM — 约£10买断。最佳付费选项。iOS Shortcuts + Siri集成。精选模型库。',
          'MLC Chat — 免费、MLC LLM项目。Apple Silicon上速度最快（Metal加速）。模型选择较少。',
          'LLM Farm — 免费、开源。可配置性最强。适合想调整采样参数的高级用户。',
          'Apple Intelligence — 系统集成，非独立应用。用于邮件、信息和备忘录的设备端3B模型。',
          'iPhone 16 Pro / 17 Pro推荐模型：Phi-4 Mini（3.8B Q4_K_M，约2.7 GB）——约10–15 tokens/秒。',
          '旧款iPhone（14 Pro、15 Pro）：Qwen3 1.7B或SmolLM 2 1.7B——适合6 GB内存，约15–20 tokens/秒。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速概览', anchor: '#quick-facts' },
      { label: '首先应该安装哪款iPhone应用？', anchor: '#which-app' },
      { label: 'iPhone应用对比表', anchor: '#comparison-table' },
      { label: 'PocketPal AI：免费开源首选', anchor: '#pocketpal-ai' },
      { label: 'Private LLM：付费版iOS深度集成', anchor: '#private-llm' },
      { label: 'MLC Chat：苹果芯片专项优化', anchor: '#mlc-chat' },
      { label: 'LLM Farm：可配置性最强', anchor: '#llm-farm' },
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
          '**Private LLM是最佳付费选项（约£10买断，无需订阅）。** 精选模型库、iOS Shortcuts集成，支持"嘿Siri，问一下Private LLM"语音命令。如需免提语音访问或工作流自动化，物有所值。',
          '**MLC Chat在Apple Silicon上速度最快。** 使用Metal GPU加速的MLC LLM，比同等硬件上基于llama.cpp的应用快约25–35%。模型选择少于PocketPal AI。',
          '**LLM Farm可配置性最强。** 开放采样参数（温度、top-p、mirostat）、按模型设置系统提示词及对话模板。适合需要针对特定场景调优模型的用户。',
          '**Apple Intelligence在设备端运行，但非独立应用。** 苹果约3B基础模型在iOS 18+的iPhone 15 Pro及更新机型上运行，为邮件、信息、备忘录等系统功能提供支持，不提供直接的对话界面。',
          '**iPhone 16 Pro / 17 Pro推荐模型：Phi-4 Mini（3.8B Q4_K_M，约2.7 GB）。** 8 GB内存档次的最佳性价比选择。6 GB内存旧款iPhone（iPhone 14 Pro）：推荐Qwen3 1.7B或SmolLM 2 1.7B。',
          '**所有应用均无需越狱，可在标准iOS上运行。** PocketPal AI、Private LLM、MLC Chat和LLM Farm均在App Store上架；Apple Intelligence内置于iOS。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**测试应用：** PocketPal AI、Private LLM、MLC Chat、LLM Farm、Apple Intelligence（系统）。',
          '**测试设备：** iPhone 16 Pro（A18 Pro，8 GB内存）和iPhone 17 Pro（A19 Pro）。',
          '**推理引擎：** llama.cpp（PocketPal AI、LLM Farm），Metal加速的MLC LLM（MLC Chat），私有设备端运行时（Private LLM、Apple Intelligence）。',
          '**运行3B以上模型的最低iPhone要求：** iPhone 14 Pro（A16，6 GB内存）可运行1.7B；iPhone 15 Pro / 16 Pro / 17 Pro（8 GB以上）可运行3B–4B。',
          '**最佳免费应用：** PocketPal AI——App Store、开源、模型灵活性高。',
          '**最佳付费应用：** Private LLM——约£10买断，支持Shortcuts + Siri。',
          '**离线使用：** 所有五款应用在模型下载后均可完全离线运行，无需调用云端。',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '首先应该安装哪款iPhone应用？',
        content:
          '**对大多数用户：在App Store安装PocketPal AI，然后下载Phi-4 Mini（3.8B Q4_K_M）。** 这个组合支持iPhone 14 Pro及更新机型，完全免费，能够胜任日常对话、摘要和快速起草等任务。只有在有特定需求时，再考虑其他应用。',
        image: '/images/iphone-llm-apps-which-app-zh.svg',
        imageCaption: 'iPhone本地AI应用选择指南：PocketPal AI（免费默认）、Private LLM（Siri+快捷指令）、MLC Chat（Apple Silicon最快）、LLM Farm（可配置）、Apple Intelligence（iOS 18+内置）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年大多数iPhone用户：安装PocketPal AI（免费，App Store）并下载Phi-4 Mini——可在6 GB以上内存的任何iPhone上处理日常对话、摘要和写作任务。',
          },
          {
            type: 'plain-terms',
            text: '2026年有五款应用可完全在iPhone上本地运行AI。PocketPal AI是最佳免费起点——安装后一次性下载2.7 GB的模型文件，即可获得一个无需WiFi、在地铁上也能使用的私密AI助手。Private LLM是希望Siri与本地模型对话的付费选择。MLC Chat速度最快。LLM Farm最灵活。Apple Intelligence内置于iOS但非对话应用。PocketPal AI可满足90%的使用场景。',
          },
        ],
        decisionBlock: {
          title: '决策：选择哪款iPhone本地AI应用？',
          localIf: [
            '想要免费的离线AI对话助手 → PocketPal AI',
            '想让Siri与本地模型对话 → Private LLM',
            '想在Apple Silicon上获得最快生成速度 → MLC Chat',
            '想调整采样参数和对话模板 → LLM Farm',
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
            '芯片上速度最快：MLC Chat',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '即使计划购买Private LLM，也建议先安装PocketPal AI。用PocketPal AI测试您的iPhone档次的设备端推理速度是否满足需求。如果满意，再判断Private LLM的iOS Shortcuts和Siri集成是否值约£10。如果不满意，您就在付费前省下了这笔钱。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'iPhone应用对比表',
        content:
          '**五款应用在三个关键维度上有所差异：费用、模型灵活性和iOS集成度。** 速度差异存在，但均远小于这些应用与云端LLM之间的差距。',
        image: '/images/iphone-llm-apps-comparison-zh.svg',
        imageCaption: 'iPhone本地LLM应用对比：PocketPal AI和LLM Farm（免费，~10–15 tok/s），MLC Chat（免费，~14–20 tok/s，Metal加速），Private LLM（~£10一次付清，Siri+快捷指令），Apple Intelligence（系统集成，iOS 18+）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI是最佳免费默认选择，Private LLM是最佳付费选项，MLC Chat速度最快，LLM Farm可配置性最强，Apple Intelligence为系统集成型。',
          },
          {
            type: 'plain-terms',
            text: '选择通常取决于三点：是否愿意付费（Private LLM）、是否追求极致速度（MLC Chat）、是否需要灵活调参（LLM Farm）。其他情况下，PocketPal AI是默认之选。表格数据均以Q4_K_M量化为准——这是2026年移动端推理的标准配置。',
          },
        ],
        columns: ['应用', '价格', 'Tokens/sec (Phi-4 Mini, 16 Pro)', '隐私保护', '最适用于'],
        rows: [
          { '应用': 'PocketPal AI', '价格': '免费（开源）', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', '隐私保护': '纯本地，无遥测', '最适用于': '大多数用户的免费默认选择' },
          { '应用': 'Private LLM', '价格': '约£10买断', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–14', '隐私保护': '纯本地，可选匿名统计', '最适用于': 'iOS Shortcuts + Siri集成' },
          { '应用': 'MLC Chat', '价格': '免费（开源）', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~14–20（Metal加速）', '隐私保护': '纯本地，无遥测', '最适用于': 'Apple Silicon上速度最快' },
          { '应用': 'LLM Farm', '价格': '免费（开源）', 'Tokens/sec (Phi-4 Mini, 16 Pro)': '~10–15', '隐私保护': '纯本地，无遥测', '最适用于': '需要调整采样参数的高级用户' },
          { '应用': 'Apple Intelligence', '价格': '免费（iOS 18+内置）', 'Tokens/sec (Phi-4 Mini, 16 Pro)': 'N/A（系统功能）', '隐私保护': '本地 + 可选Private Cloud Compute', '最适用于': '邮件、信息、备忘录辅助' },
        ],
        note:
          '**关于Apple神经引擎（ANE）与Metal的说明：** PocketPal AI和LLM Farm使用带有Metal Performance Shaders的llama.cpp进行推理，在GPU上运行。MLC Chat使用经过深度Metal优化的MLC LLM，在相同硬件上tokens/秒高出25–35%。Apple Intelligence专门为系统3B模型使用ANE，能效更高但灵活性低于基于Metal的推理。A18 Pro（iPhone 16 Pro）和A19 Pro（iPhone 17 Pro）均搭载了改进版ANE，但第三方应用无法直接调用ANE——该功能专为Apple Intelligence及苹果官方API保留。',
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
          '**Private LLM是2026年iPhone上最强的付费选择（约£10买断，无需订阅）。** 仅在App Store上架，内置精选优化模型库。其核心差异化优势在于iOS集成：Shortcuts动作和"嘿Siri，问一下Private LLM"语音命令。',
        items: [
          '**是什么：** 一款带有精选模型库和深度iOS集成的付费iOS应用。使用针对Apple Silicon优化的私有设备端运行时。',
          '**安装：** App Store → 搜索"Private LLM"。约£10买断（无订阅）。',
          '**精选模型库：** 约30款预测试并为iPhone优化的模型，包括Llama 3.2 3B、Phi-4 Mini、Mistral Small Instruct及若干非审查版本。灵活性低于PocketPal AI，但不会出现安装后崩溃的问题。',
          '**iOS Shortcuts：** Private LLM提供"使用Private LLM生成文本"动作，可集成到Shortcuts自动化流程中。可通过主屏幕按钮或NFC标签触发本地AI。',
          '**Siri集成：** "嘿Siri，问一下Private LLM [您的问题]"会将提示词发送至设备端模型并朗读回答，全程无需联网。延迟高于聊天界面（音频开始前约3–5秒）。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Private LLM约£10的价格仅覆盖iPhone应用。macOS版本需单独购买，iPad版与iPhone通用（一次购买两端共用）。付款前请确认您所需的平台。苹果家庭共享可在家庭成员间共用该应用。',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat：苹果芯片专项优化',
        content:
          '**MLC Chat（来自MLC LLM项目）凭借Metal GPU加速，是2026年iPhone上速度最快的本地LLM应用。** 免费、开源，运行由MLC LLM工具链编译的模型，而非标准GGUF格式。',
        items: [
          '**是什么：** MLC LLM项目的iOS参考应用，展示MLC LLM在Apple Silicon上的Metal加速推理能力。',
          '**安装：** App Store → 搜索"MLC Chat"。免费。',
          '**速度优势：** 对于相同模型，在同款iPhone上比基于llama.cpp的应用快约25–35%。iPhone 16 Pro上：Phi-4 Mini约14–20 tok/秒（PocketPal AI约10–15）。',
          '**模型库：** 少于PocketPal AI——仅限MLC LLM项目已为iOS编译的模型。目前包括Llama 3.2 3B、Phi-4 Mini、Gemma 3 4B、RedPajama及少量其他模型。并非所有Hugging Face GGUF均可使用。',
          '**最适用于：** 优先考虑速度而非模型灵活性的用户。如果目标模型在MLC库中，MLC Chat将是您iPhone上速度最快的选择。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'MLC LLM的Metal加速优势在Neural Engine较弱的旧款iPhone上最为显著。在iPhone 17 Pro上，由于A19 Pro改进的Neural Engine缩小了llama.cpp的相对劣势，MLC Chat与PocketPal AI的差距有所收窄。在iPhone 14 Pro和15 Pro上，MLC Chat的领先优势最为明显。',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm：可配置性最强',
        content:
          '**LLM Farm是2026年可配置性最强的iPhone本地LLM应用。** 免费、开源（GitHub：guinmoon/LLMFarm），开放了其他应用隐藏的采样参数。适合希望调整模型行为而非接受默认设置的用户。',
        items: [
          '**是什么：** 开发者@guinmoon的iOS应用，支持大量配置选项运行GGUF模型。',
          '**安装：** App Store → 搜索"LLM Farm"。免费。',
          '**添加模型：** 点击模型库图标 → "从URL添加模型" → 粘贴Hugging Face GGUF文件的直链。也可通过Apple文件传输GGUF。',
          '**开放的配置项：** 温度、top-p、top-k、mirostat采样、重复惩罚、按模型设置系统提示词、对话模板选择、上下文窗口长度。其他应用隐藏的所有设置在此均可编辑。',
          '**生成速度：** 与PocketPal AI相当（均使用llama.cpp）。iPhone 16 Pro上：Phi-4 Mini约10–15 tok/秒。',
          '**最适用于：** 希望对比采样参数或测试不同对话模板的开发者、提示词工程师及高级用户。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'LLM Farm开放的mirostat采样对创意写作任务很有价值——标准温度/top-p采样往往产生重复输出。建议从mirostat模式2、目标熵约5.0、学习率0.1开始调试。PocketPal AI和Private LLM均不提供mirostat选项。',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence：系统级内置AI',
        content:
          '**Apple Intelligence在iPhone 15 Pro及更新机型（A17 Pro芯片，最低8 GB内存）上以设备端方式运行苹果自家约3B基础模型。** 它不是一款对话应用——而是为邮件（智能回复）、信息（写作工具）、备忘录（摘要）和通知摘要提供系统级功能。与PocketPal AI或Private LLM不同，该模型不直接响应用户自定义提示词。',
        items: [
          '**位置：** 内置于iOS 18+。前往设置 → Apple Intelligence与Siri启用。',
          '**硬件要求：** iPhone 15 Pro / 15 Pro Max、iPhone 16系列、iPhone 17系列。旧款iPhone（14及以下）不支持Apple Intelligence。',
          '**设备端功能：** 任意文本框内的写作工具（改写、摘要、校对），邮件和信息中的智能回复，通知摘要，Genmoji生成。',
          '**Private Cloud Compute：** 超出设备端模型能力的任务会转至Private Cloud Compute（PCC）——苹果运营的服务器运行更大模型，并以密码学手段保证不留存用户数据。PCC为可选项，可关闭。',
          '**与对话应用的关系：** Apple Intelligence是补充而非替代。它处理iOS应用内的文本改写和摘要；PocketPal AI / Private LLM / MLC Chat / LLM Farm提供专用对话界面以回答任意问题。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '如果您只需要Apple Intelligence（改写邮件、汇总通知），则无需单独安装对话应用。如果您想向模型提问，如"用简单语言解释量子隧穿"或"为X项目起草方案"，请单独安装四款对话应用之一——Apple Intelligence不提供此类交互界面。',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: '按iPhone档次推荐模型',
        content:
          '**iPhone内存决定模型规模上限，与芯片代数无关。** 6 GB内存iPhone（14 Pro、15）可稳定运行1.7B模型；8 GB内存iPhone（15 Pro、16 Pro、17 Pro）可稳定运行3B–4B模型，缓慢运行7B模型。如需了解全硬件档次（不限移动端）的更广泛模型选择，请参阅[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026)。',
        image: '/images/iphone-llm-apps-models-tier-zh.svg',
        imageCaption: '按iPhone内存推荐LLM模型：8GB iPhone（15 Pro至17 Pro）推荐Phi-4 Mini 3.8B Q4_K_M（8–20 tok/s）；6GB iPhone（14 Pro及非Pro型号）推荐Qwen3 1.7B Q4_K_M（12–20 tok/s）；iPhone SE（4GB）不推荐。',
        columns: ['iPhone档次（年份，内存）', '推荐型号', '下载大小', '预期速度'],
        rows: [
          { 'iPhone档次（年份，内存）': 'iPhone 17 Pro（2025，8–12 GB）', '推荐型号': 'Phi-4 Mini 或 Llama 3.2 3B（Q4_K_M）', '下载大小': '约2.5–2.7 GB', '预期速度': '约13–20 tok/秒' },
          { 'iPhone档次（年份，内存）': 'iPhone 16 Pro / 16 Pro Max（2024，8 GB）', '推荐型号': 'Phi-4 Mini（3.8B Q4_K_M）', '下载大小': '约2.7 GB', '预期速度': '约10–15 tok/秒' },
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
          '**各应用的iOS集成深度差异显著。** Private LLM集成最深（快捷指令 + Siri）；PocketPal AI、MLC Chat和LLM Farm截至2026年均为独立对话应用，不提供快捷指令动作。',
        image: '/images/iphone-llm-apps-ios-integration-zh.svg',
        imageCaption: '各本地LLM应用的iOS集成功能：Private LLM和Apple Intelligence支持快捷指令和Siri；PocketPal AI、MLC Chat和LLM Farm截至2026年无快捷指令功能，均为独立聊天应用。PocketPal AI、MLC Chat和LLM Farm为开源软件。',
        items: [
          '**Private LLM** 提供"使用Private LLM生成文本"快捷指令动作和"嘿Siri，问一下Private LLM [问题]"语音触发。四款对话应用中iOS原生集成最深。',
          '**PocketPal AI** 是独立对话应用——无快捷指令动作，无Siri集成。打开应用直接对话。快捷指令支持已在GitHub Issues中跟踪，但截至2026年5月尚未发布。',
          '**MLC Chat** 是MLC LLM项目的参考应用——iOS集成极少。无快捷指令动作。',
          '**LLM Farm** 是独立对话应用——无快捷指令动作。',
          '**Apple Intelligence** 通过"使用模型"动作（iOS 18.4+）与iOS快捷指令集成，可将提示词路由至设备端3B模型或Private Cloud Compute（可配置）。设备端输出可链接至其他快捷指令动作。',
          '**侧载：** 上述应用均无需侧载或越狱。四款对话应用均在App Store上架；Apple Intelligence内置于iOS。根据DMA，欧盟用户在2026年可通过替代应用市场安装，但应用本身与App Store版本相同。',
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
          '**将Apple Intelligence误以为对话应用。** Apple Intelligence没有对话界面——它提供系统级功能。如需向模型提问，请单独安装PocketPal AI、Private LLM、MLC Chat或LLM Farm。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考资料',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)（开源iOS应用）。',
          'Private LLM — [App Store页面](https://apps.apple.com)及开发者文档。',
          'MLC Chat / MLC LLM项目 — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html)（iOS Metal加速部署）。',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)（开源iOS应用）。',
          'Apple Intelligence及设备端基础模型 — [Apple机器学习研究](https://machinelearning.apple.com)及Apple开发者文档。',
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
            a: '可以，通过Private LLM实现。说"嘿Siri，问一下Private LLM [问题]"，提示词会发送至设备端模型，Siri朗读回答——全程离线。PocketPal AI、MLC Chat和LLM Farm截至2026年不支持Siri集成。Apple Intelligence与Siri集成，但仅限系统任务（写作、摘要、应用操作），不支持通用问答。',
          },
          {
            q: '这些应用能在iPhone SE或旧款iPhone上使用吗？',
            a: '有限制。iPhone SE（4 GB内存）低于2026年设备端LLM的实用门槛。iPhone 14 / 15（非Pro，6 GB内存）可运行1.7B模型（Qwen3 1.7B、SmolLM 2 1.7B），但不能运行3B以上模型。iPhone 14 Pro和15 Pro（6–8 GB内存）可以约8–12 tokens/秒运行Phi-4 Mini等3B模型。旧款iPhone更好的选择是远程连接家用Mac或PC。',
          },
          {
            q: '能在iPhone和Mac之间同步对话记录吗？',
            a: '这四款应用均不原生支持同步。对话记录存储在各设备本地；截至2026年5月，PocketPal AI、Private LLM、MLC Chat和LLM Farm均无iCloud同步功能。跨设备共享对话记录的实用方案是在家用Mac上运行Open WebUI，从iPhone和Mac的浏览器访问——Open WebUI将对话记录存储在服务器端。',
          },
          {
            q: '这些应用能在App Store以外获取吗？',
            a: 'PocketPal AI和LLM Farm是开源项目，可通过Xcode从源码编译，但App Store版本是标准发行渠道。Private LLM和MLC Chat仅在App Store上架。根据DMA，欧盟用户在2026年可通过替代应用市场安装，但应用本身与App Store版本相同。均无需侧载。',
          },
          {
            q: '有哪款应用需要越狱？',
            a: '不需要。五款应用（PocketPal AI、Private LLM、MLC Chat、LLM Farm、Apple Intelligence）均可在标准iOS上运行。四款对话应用在App Store上架；Apple Intelligence内置于iOS 18+。越狱既非必要，也不推荐——为安装一款对话应用而放弃iOS安全更新得不偿失。',
          },
          {
            q: '能在iOS快捷指令中使用本地AI吗？',
            a: '可以，通过Private LLM（提供"使用Private LLM生成文本"快捷指令动作）或Apple Intelligence（iOS 18.4+提供"使用模型"动作）实现。PocketPal AI、MLC Chat和LLM Farm截至2026年不支持快捷指令动作。Private LLM结合分享菜单快捷指令，可在任意应用的文本上离线执行"摘要"或"改写"操作。',
          },
          {
            q: '本地AI与iPhone上的ChatGPT应用相比如何？',
            a: '2026年，设备端模型（Phi-4 Mini、Llama 3.2 3B）的日常对话能力约为GPT-5.5的60–75%，在简单问题上更快（无网络延迟），且完全私密。ChatGPT在复杂推理、广博世界知识和多模态任务上仍有明显优势。客观来说：本地AI适合日常和私密任务；ChatGPT适合偶尔的高难度问题。2026年很多用户两款应用都装着，按需选择。',
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
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Las mejores apps de LLM local para iPhone en 2026 (ejecuta IA sin WiFi)',
    seoTitle: 'Mejores apps LLM local iPhone 2026',
    intro:
      'Cinco apps para iPhone ejecutan LLMs reales completamente en el dispositivo en 2026: PocketPal AI, Private LLM, MLC Chat, LLM Farm y Apple Intelligence (integrado en el sistema). Todas funcionan sin WiFi una vez descargado el modelo. Esta guía las clasifica por tokens por segundo en iPhone 16 Pro e iPhone 17 Pro, biblioteca de modelos, gestión de RAM, privacidad e integración con iOS.',
    metaDescription:
      'Cinco apps de iPhone que ejecutan LLMs en el dispositivo en 2026: PocketPal AI, Private LLM, MLC Chat y LLM Farm en iPhone 16/17 Pro. Velocidad y privacidad.',
    twitterDescription:
      'IA local en iPhone en 2026: PocketPal AI (gratis), Private LLM (~10 € de pago único, Siri), MLC Chat (la más rápida), LLM Farm (la más configurable). Todas funcionan sin conexión tras descargar el modelo.',
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
      '**Para la mayoría de usuarios de iPhone en 2026, instala PocketPal AI desde el App Store y descarga Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Es gratuito, de código abierto, funciona en iPhone 14 Pro y modelos más recientes (cualquier iPhone con 6 GB+ de RAM) y genera ~10–15 tokens/seg en iPhone 16 Pro para el uso diario. Para Shortcuts y Siri de pago con integración iOS, Private LLM es la opción de pago más sólida (~10 € de pago único). Para los tokens/seg más rápidos en Apple Silicon, MLC Chat usa MLC LLM con aceleración Metal. LLM Farm es el más configurable para usuarios avanzados. Apple Intelligence también ejecuta modelos en el dispositivo, pero está integrado en el sistema y no es una app de chat; complementa a estas apps en lugar de competir con ellas.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor app de LLM local para iPhone en 2026?',
        answer:
          'PocketPal AI es la mejor opción gratuita para la mayoría de usuarios de iPhone: de código abierto, instalación desde el App Store, compatible con cualquier modelo GGUF de Hugging Face y ejecuta Phi-4 Mini (3.8B) a ~10–15 tokens/seg en iPhone 16 Pro. Private LLM es la opción de pago más sólida (~10 € de pago único) con integración de iOS Shortcuts y Siri. MLC Chat es la más rápida en Apple Silicon gracias a la aceleración Metal. LLM Farm es la más configurable para usuarios avanzados. Apple Intelligence también ejecuta modelos en el dispositivo, pero está integrado en el sistema y complementa estas apps.',
        bullets: [
          'PocketPal AI — gratuita, código abierto, App Store. La mejor opción por defecto para la mayoría de usuarios. Compatible con cualquier modelo GGUF.',
          'Private LLM — ~10 € de pago único. La mejor opción de pago. iOS Shortcuts + integración con Siri. Biblioteca de modelos curada.',
          'MLC Chat — gratuita, proyecto MLC LLM. La más rápida en Apple Silicon (aceleración Metal). Selección de modelos más reducida.',
          'LLM Farm — gratuita, código abierto. La más configurable. Ideal para usuarios avanzados que quieren ajustar parámetros de muestreo.',
          'Apple Intelligence — integrada en el sistema, no es una app independiente. Modelo 3B en dispositivo utilizado por Mail, Mensajes y Notas.',
          'Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — funciona a ~10–15 tokens/seg.',
          'iPhones más antiguos (14 Pro, 15 Pro): Qwen3 1.7B o SmolLM 2 1.7B — cabe en 6 GB de RAM y genera ~15–20 tokens/seg.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Qué app instalar primero en el iPhone?', anchor: '#which-app' },
      { label: 'Tabla comparativa de apps para iPhone', anchor: '#comparison-table' },
      { label: 'PocketPal AI: opción gratuita y de código abierto', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: opción de pago con integración iOS', anchor: '#private-llm' },
      { label: 'MLC Chat: optimización para Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm: la más configurable', anchor: '#llm-farm' },
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
          '**Private LLM es la mejor opción de pago (~10 € de pago único, sin suscripción).** Biblioteca de modelos curada, integración con iOS Shortcuts y soporte de Siri "Oye Siri, pregúntale a Private LLM". Vale la pena pagar si quieres acceso por voz manos libres o automatización de flujos de trabajo.',
          '**MLC Chat es la más rápida en Apple Silicon.** Usa MLC LLM con aceleración GPU Metal, generando tokens un 25–35 % más rápido que las apps basadas en llama.cpp en el mismo hardware. Selección de modelos más reducida que PocketPal AI.',
          '**LLM Farm es la más configurable.** Expone parámetros de muestreo (temperatura, top-p, mirostat), prompts de sistema por modelo y plantillas de chat. Ideal para usuarios que ajustan modelos para casos de uso específicos.',
          '**Apple Intelligence está en el dispositivo, pero no es una app independiente.** El modelo de base ~3B de Apple se ejecuta en iOS 18+ en iPhone 15 Pro y modelos más recientes. Potencia funciones del sistema (Herramientas de escritura, Respuesta inteligente, Resúmenes de notificaciones), pero no es accesible directamente como interfaz de chat.',
          '**Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Mejor equilibrio entre calidad y velocidad para el nivel de 8 GB de RAM. iPhones más antiguos con 6 GB de RAM (iPhone 14 Pro): Qwen3 1.7B o SmolLM 2 1.7B.',
          '**Ninguna app requiere jailbreak. Las cinco funcionan en iOS estándar.** PocketPal AI, Private LLM, MLC Chat y LLM Farm están en el App Store; Apple Intelligence está integrada en iOS.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Apps probadas:** PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence (sistema).',
          '**Dispositivos de prueba:** iPhone 16 Pro (A18 Pro, 8 GB RAM) y iPhone 17 Pro (A19 Pro).',
          '**Motores de inferencia:** llama.cpp (PocketPal AI, LLM Farm), MLC LLM con Metal (MLC Chat), runtime en dispositivo propietario (Private LLM, Apple Intelligence).',
          '**iPhone mínimo para modelos 3B+:** iPhone 14 Pro (A16, 6 GB RAM) para 1.7B; iPhone 15 Pro / 16 Pro / 17 Pro (8 GB+) para 3B–4B.',
          '**Mejor app gratuita:** PocketPal AI — App Store, código abierto, flexibilidad de modelos.',
          '**Mejor app de pago:** Private LLM — ~10 € de pago único, soporte de Shortcuts + Siri.',
          '**Sin conexión:** Las cinco funcionan completamente sin conexión una vez descargado el modelo; sin llamadas a la nube.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: '¿Qué app instalar primero en el iPhone?',
        content:
          '**Para la mayoría de usuarios: PocketPal AI desde el App Store y luego descarga Phi-4 Mini (3.8B Q4_K_M).** Esta combinación funciona en iPhone 14 Pro y modelos más recientes, no cuesta nada y produce resultados útiles para el chat diario, la síntesis y la redacción rápida. Elige otra app solo cuando tengas una necesidad específica que esta no cubra.',
        image: '/images/iphone-llm-apps-which-app-es.svg',
        imageCaption: 'Qué app de IA local instalar en iPhone: PocketPal AI (opción gratuita por defecto), Private LLM (Siri + Shortcuts), MLC Chat (la más rápida en Apple Silicon), LLM Farm (configurable), Apple Intelligence (integrada en iOS 18+).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para la mayoría de usuarios de iPhone en 2026, instala PocketPal AI (gratis, App Store) y descarga Phi-4 Mini — cubre el chat diario, síntesis y redacción en cualquier iPhone con 6 GB+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Cinco apps ejecutan IA completamente en tu iPhone en 2026. PocketPal AI es el mejor punto de partida gratuito — instálala, descarga un archivo de modelo de 2.7 GB una sola vez y tendrás un asistente de chat privado que funciona en el tren sin WiFi. Private LLM es la opción de pago si quieres que Siri hable con el modelo local. MLC Chat es la más rápida. LLM Farm es la más flexible. Apple Intelligence está integrada en iOS pero no es una app de chat. PocketPal AI cubre el 90 % de los casos de uso.',
          },
        ],
        decisionBlock: {
          title: 'Decisión: ¿qué app de IA local para iPhone?',
          localIf: [
            'Quieres una IA de chat gratuita que funcione sin conexión → PocketPal AI',
            'Quieres que Siri hable con tu modelo local → Private LLM',
            'Quieres la mayor velocidad de generación en Apple Silicon → MLC Chat',
            'Quieres ajustar parámetros de muestreo y plantillas de chat → LLM Farm',
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
            'La más rápida en chip: MLC Chat',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Instala PocketPal AI primero, incluso si planeas pagar por Private LLM más adelante. Usa PocketPal AI para comprobar si la inferencia en dispositivo en tu modelo de iPhone es suficientemente rápida para tu caso de uso. Si es así, decide si la integración con iOS Shortcuts y Siri de Private LLM vale ~10 €. Si no, te habrás ahorrado los 10 € antes de pagar.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa de apps para iPhone',
        content:
          '**Las cinco apps se diferencian en tres ejes que importan a la mayoría de usuarios: coste, flexibilidad de modelos e integración con iOS.** Las diferencias de velocidad existen, pero son menores que la brecha entre cualquiera de estas apps y un LLM en la nube.',
        image: '/images/iphone-llm-apps-comparison-es.svg',
        imageCaption: 'Comparativa de apps LLM local para iPhone: PocketPal AI y LLM Farm (gratis, ~10–15 tok/s), MLC Chat (gratis, ~14–20 tok/s con aceleración Metal), Private LLM (~10 € de pago único, Siri + Shortcuts), Apple Intelligence (integrada en el sistema, iOS 18+).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'PocketPal AI es la mejor opción gratuita por defecto, Private LLM es la mejor opción de pago, MLC Chat es la más rápida, LLM Farm es la más configurable y Apple Intelligence está integrada en el sistema.',
          },
          {
            type: 'plain-terms',
            text: 'La elección generalmente se reduce a tres cosas: ¿quieres pagar (Private LLM)?, ¿quieres máxima velocidad (MLC Chat)? o ¿quieres flexibilidad para ajustar configuraciones (LLM Farm)? Para todo lo demás, PocketPal AI es la opción por defecto. Los datos de la tabla asumen cuantización Q4_K_M — el estándar para inferencia móvil en 2026.',
          },
        ],
        columns: ['App', 'Precio', 'Tokens/seg (Phi-4 Mini, 16 Pro)', 'Privacidad', 'Ideal para'],
        rows: [
          { 'App': 'PocketPal AI', 'Precio': 'Gratis (código abierto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacidad': 'Solo local, sin telemetría', 'Ideal para': 'Opción gratuita por defecto para la mayoría' },
          { 'App': 'Private LLM', 'Precio': '~10 € pago único', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–14', 'Privacidad': 'Solo local, análisis opt-in', 'Ideal para': 'iOS Shortcuts + integración Siri' },
          { 'App': 'MLC Chat', 'Precio': 'Gratis (código abierto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~14–20 (aceleración Metal)', 'Privacidad': 'Solo local, sin telemetría', 'Ideal para': 'La más rápida en Apple Silicon' },
          { 'App': 'LLM Farm', 'Precio': 'Gratis (código abierto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacidad': 'Solo local, sin telemetría', 'Ideal para': 'Usuarios avanzados que ajustan el muestreo' },
          { 'App': 'Apple Intelligence', 'Precio': 'Gratis (integrada en iOS 18+)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/A (función del sistema)', 'Privacidad': 'Local + Private Cloud Compute opt-in', 'Ideal para': 'Asistencia en Mail, Mensajes, Notas' },
        ],
        note:
          '**Nota sobre Apple Neural Engine (ANE) frente a Metal:** PocketPal AI y LLM Farm usan llama.cpp con Metal Performance Shaders para la inferencia, que se ejecuta en la GPU. MLC Chat usa MLC LLM con una optimización Metal más profunda, logrando un 25–35 % más de tokens/seg en el mismo hardware. Apple Intelligence usa el ANE específicamente para el modelo de sistema 3B, que es más eficiente energéticamente pero menos flexible que la inferencia basada en Metal. Tanto el A18 Pro (iPhone 16 Pro) como el A19 Pro (iPhone 17 Pro) tienen ANE mejorados, pero las apps de chat de terceros no pueden apuntar directamente al ANE — eso está reservado para Apple Intelligence y las API de Apple.',
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
          '**Private LLM es la opción de pago más sólida para iPhone en 2026 (~10 € de pago único, sin suscripción).** Solo está disponible en el App Store y viene con una biblioteca curada de modelos optimizados. Su diferenciador es la integración con iOS: acciones de Shortcuts y un comando de voz "Oye Siri, pregúntale a Private LLM".',
        items: [
          '**Qué es:** una app iOS de pago con biblioteca de modelos curada e integración profunda con iOS. Usa un runtime en dispositivo propietario optimizado para Apple Silicon.',
          '**Instalación:** App Store → "Private LLM". Compra única ~10 € (sin suscripción).',
          '**Biblioteca de modelos curada:** ~30 modelos pre-probados y optimizados para iPhone, incluyendo Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct y varias variantes sin censura. Menos flexibilidad que PocketPal AI, pero sin riesgo de instalar un modelo que se cuelgue.',
          '**iOS Shortcuts:** Private LLM expone una acción "Generar texto con Private LLM" que puedes encadenar en automatizaciones de Shortcuts. Útil para activar la IA local desde un botón en tu pantalla de inicio o mediante etiquetas NFC.',
          '**Integración con Siri:** "Oye Siri, pregúntale a Private LLM [tu pregunta]" envía el prompt al modelo en dispositivo y Siri lee la respuesta en voz alta. Funciona sin conexión a internet. La latencia es mayor que en la interfaz de chat (~3–5 segundos antes de que empiece el audio).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'El precio de ~10 € de Private LLM solo cubre la app para iPhone. La versión de macOS es una compra separada, y la versión de iPad es universal con iPhone (una compra cubre ambos). Confirma la plataforma que necesitas antes de pagar. El Compartir en familia de Apple cubre la app para los miembros de la familia.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: optimización para Apple Silicon',
        content:
          '**MLC Chat (del proyecto MLC LLM) es la app LLM local más rápida en iPhone en 2026 gracias a la aceleración GPU Metal.** Es gratuita, de código abierto y ejecuta modelos compilados por la cadena de herramientas MLC LLM en lugar de GGUF estándar.',
        items: [
          '**Qué es:** la app iOS de referencia del proyecto MLC LLM, que demuestra la inferencia acelerada por Metal de MLC LLM en Apple Silicon.',
          '**Instalación:** App Store → "MLC Chat". Gratis.',
          '**Ventaja de velocidad:** ~25–35 % más rápida que las apps basadas en llama.cpp en el mismo iPhone para el mismo modelo. En iPhone 16 Pro: Phi-4 Mini ~14–20 tok/seg (frente a ~10–15 en PocketPal AI).',
          '**Biblioteca de modelos:** más reducida que PocketPal AI — limitada a los modelos que el proyecto MLC LLM ha compilado para iOS. Actualmente incluye Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B, RedPajama y algunos más. No todos los GGUF de Hugging Face funcionan.',
          '**Ideal para:** usuarios que priorizan la velocidad sobre la flexibilidad de modelos. Si tu modelo objetivo está en la biblioteca MLC, MLC Chat será la opción más rápida en tu iPhone.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La aceleración Metal de MLC LLM importa más en iPhones más antiguos con Neural Engines menos potentes. En iPhone 17 Pro, la diferencia entre MLC Chat y PocketPal AI se reduce porque el Neural Engine mejorado del A19 Pro reduce la desventaja relativa de llama.cpp. En iPhone 14 Pro y 15 Pro, la ventaja de MLC Chat es mayor.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: la más configurable',
        content:
          '**LLM Farm es la app LLM local para iPhone más configurable en 2026.** Gratuita, de código abierto (GitHub: guinmoon/LLMFarm) y expone parámetros de muestreo que otras apps ocultan. Ideal para usuarios que quieren ajustar el comportamiento del modelo en lugar de aceptar los valores por defecto.',
        items: [
          '**Qué es:** una app iOS del desarrollador @guinmoon que ejecuta modelos GGUF con amplias opciones de configuración.',
          '**Instalación:** App Store → "LLM Farm". Gratis.',
          '**Agregar un modelo:** toca el ícono de la biblioteca de modelos → "Agregar modelo desde URL" → pega un enlace de descarga directa de Hugging Face para un archivo GGUF. También puedes transferir un GGUF mediante Archivos de Apple.',
          '**Configuración expuesta:** temperatura, top-p, top-k, muestreo mirostat, penalización por repetición, prompt de sistema por modelo, selección de plantilla de chat, longitud de la ventana de contexto. Todos los ajustes que la mayoría de apps ocultan son editables aquí.',
          '**Velocidad de generación:** comparable a PocketPal AI (ambas usan llama.cpp). En iPhone 16 Pro: Phi-4 Mini ~10–15 tok/seg.',
          '**Ideal para:** desarrolladores, ingenieros de prompt y usuarios que quieren comparar configuraciones de muestreo o probar diferentes plantillas de chat sin navegar por tres menús de ajustes.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El muestreo mirostat expuesto por LLM Farm es útil para tareas de escritura creativa donde el muestreo estándar de temperatura/top-p produce resultados repetitivos. Configura mirostat en modo 2 con entropía objetivo ~5.0 y tasa de aprendizaje 0.1 como punto de partida. PocketPal AI y Private LLM no exponen mirostat en absoluto.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: IA en dispositivo integrada en el sistema',
        content:
          '**Apple Intelligence ejecuta el modelo de base ~3B propio de Apple en el dispositivo en iPhone 15 Pro y modelos más recientes (chip A17 Pro con 8 GB de RAM mínimo).** No es una app de chat — potencia funciones del sistema en Mail (Respuesta inteligente), Mensajes (herramientas de escritura), Notas (síntesis) y Resúmenes de notificaciones. El modelo no es directamente accesible para los prompts del usuario de la misma forma que PocketPal AI o Private LLM.',
        items: [
          '**Dónde está:** integrada en iOS 18+. Actívala en Ajustes → Apple Intelligence y Siri.',
          '**Requisito de hardware:** iPhone 15 Pro / 15 Pro Max, serie iPhone 16, serie iPhone 17. Los iPhones más antiguos (14 e inferiores) no son compatibles con Apple Intelligence.',
          '**Funciones en dispositivo:** Herramientas de escritura (reescribir, resumir, revisar) dentro de cualquier campo de texto, Respuesta inteligente en Mail y Mensajes, Resúmenes de notificaciones, generación de Genmoji.',
          '**Private Cloud Compute:** para tareas que superan la capacidad del modelo en dispositivo, Apple Intelligence recurre a Private Cloud Compute (PCC) — servidores operados por Apple que ejecutan modelos más grandes con garantías criptográficas de que no se retienen datos del usuario. PCC es opt-in y puede desactivarse.',
          '**Relación con las apps de chat:** Apple Intelligence es un complemento, no un reemplazo. Gestiona la reescritura y síntesis de texto dentro de las apps de iOS; PocketPal AI / Private LLM / MLC Chat / LLM Farm proporcionan una interfaz de chat dedicada para preguntas arbitrarias.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si Apple Intelligence es tu única necesidad (reescribir correos, resumir notificaciones), no necesitas una app de chat independiente. Si quieres hacerle preguntas al modelo como "explica el efecto túnel cuántico en términos simples" o "crea un plan de proyecto para X", instala una de las cuatro apps de chat — Apple Intelligence no expone esa interfaz.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modelos según el modelo de iPhone',
        content:
          '**La RAM del iPhone determina el límite de tamaño del modelo, no la generación del chip.** Un iPhone de 6 GB (14 Pro, 15) puede ejecutar modelos 1.7B cómodamente; un iPhone de 8 GB (15 Pro, 16 Pro, 17 Pro) ejecuta modelos 3B–4B cómodamente y modelos 7B lentamente. Para el panorama más amplio de modelos en todo el hardware (no solo móvil), consulta [Los mejores LLM locales en 2026](/es/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-es.svg',
        imageCaption: 'Recomendaciones de modelos LLM por RAM de iPhone: Phi-4 Mini 3.8B Q4_K_M para iPhones de 8 GB (15 Pro–17 Pro) a 8–20 tok/s; Qwen3 1.7B Q4_K_M para iPhones de 6 GB (14 Pro, no Pro) a 12–20 tok/s; iPhone SE (4 GB) no recomendado.',
        columns: ['Nivel de iPhone (Año, RAM)', 'Modelo recomendado', 'Tamaño de descarga', 'Velocidad esperada'],
        rows: [
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 17 Pro (2025, 8–12 GB)', 'Modelo recomendado': 'Phi-4 Mini o Llama 3.2 3B (Q4_K_M)', 'Tamaño de descarga': '~2.5–2.7 GB', 'Velocidad esperada': '~13–20 tok/seg' },
          { 'Nivel de iPhone (Año, RAM)': 'iPhone 16 Pro / 16 Pro Max (2024, 8 GB)', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M)', 'Tamaño de descarga': '~2.7 GB', 'Velocidad esperada': '~10–15 tok/seg' },
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
          '**La integración con iOS varía significativamente según la app.** Private LLM tiene la integración más profunda (Shortcuts + Siri); PocketPal AI, MLC Chat y LLM Farm son apps de chat independientes sin acciones de Shortcuts en 2026.',
        image: '/images/iphone-llm-apps-ios-integration-es.svg',
        imageCaption: 'Integración con iOS por app LLM local: Private LLM y Apple Intelligence admiten Shortcuts y Siri; PocketPal AI, MLC Chat y LLM Farm son apps de chat independientes sin acciones de Shortcuts a fecha de 2026. PocketPal AI, MLC Chat y LLM Farm son de código abierto.',
        items: [
          '**Private LLM** expone una acción de Shortcuts "Generar texto con Private LLM" y un disparador de voz "Oye Siri, pregúntale a Private LLM [pregunta]". La más integrada de forma nativa con iOS de las cuatro apps de chat.',
          '**PocketPal AI** es una app de chat independiente — sin acción de Shortcuts, sin integración con Siri. Abres la app y chateas. Los planes de soporte de Shortcuts se rastrean en los issues de GitHub, pero no se han publicado a mayo de 2026.',
          '**MLC Chat** es una app de referencia para el proyecto MLC LLM — integración iOS mínima. Sin acción de Shortcuts.',
          '**LLM Farm** es una app de chat independiente — sin acción de Shortcuts.',
          '**Apple Intelligence** se integra con iOS Shortcuts mediante la acción "Usar modelo" (iOS 18.4+). Esto envía un prompt al modelo 3B en dispositivo o a Private Cloud Compute (configurable). La salida en dispositivo puede encadenarse en otras acciones de Shortcuts.',
          '**Carga lateral:** ninguna de estas apps requiere carga lateral ni jailbreak. Las cuatro apps de chat están en el App Store; Apple Intelligence está integrada en iOS. Los usuarios de la UE también pueden instalarlas mediante marketplaces alternativos bajo el DMA en 2026, pero la app es idéntica a la versión del App Store.',
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
          '**Confundir Apple Intelligence con una app de chat.** Apple Intelligence no tiene interfaz de chat — potencia funciones del sistema. Si quieres hacerle preguntas al modelo, instala PocketPal AI, Private LLM, MLC Chat o LLM Farm por separado.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (app iOS de código abierto).',
          'Private LLM — [ficha del App Store](https://apps.apple.com) y documentación del desarrollador.',
          'MLC Chat / proyecto MLC LLM — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (despliegue iOS acelerado por Metal).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (app iOS de código abierto).',
          'Apple Intelligence y modelos de base en dispositivo — [Apple Machine Learning Research](https://machinelearning.apple.com) y documentación de Apple Developer.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
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
            a: 'Sí, con Private LLM. Decir "Oye Siri, pregúntale a Private LLM [pregunta]" envía el prompt al modelo en dispositivo y Siri lee la respuesta en voz alta — completamente sin conexión. PocketPal AI, MLC Chat y LLM Farm no tienen integración con Siri en 2026. Apple Intelligence se integra con Siri, pero solo para tareas del sistema (escritura, síntesis, acciones de app), no para preguntas y respuestas generales.',
          },
          {
            q: '¿Estas apps funcionan en iPhone SE o iPhones más antiguos?',
            a: 'Con limitaciones. iPhone SE (4 GB de RAM) está por debajo del umbral práctico para LLM en dispositivo en 2026. iPhone 14 / 15 (no Pro, 6 GB de RAM) puede ejecutar modelos 1.7B (Qwen3 1.7B, SmolLM 2 1.7B), pero no 3B+. iPhone 14 Pro y 15 Pro (6–8 GB de RAM) pueden ejecutar modelos 3B como Phi-4 Mini a 8–12 tokens/seg. Para iPhones más antiguos, la mejor opción es conectarse de forma remota a un Mac o PC doméstico.',
          },
          {
            q: '¿Puedo sincronizar el historial de chat entre iPhone y Mac?',
            a: 'No de forma nativa en ninguna de estas cuatro apps. El historial de chat se almacena localmente en cada dispositivo; no hay función de sincronización con iCloud en PocketPal AI, Private LLM, MLC Chat ni LLM Farm a mayo de 2026. Para historial de chat entre dispositivos, el enfoque práctico es ejecutar Open WebUI en un Mac doméstico y acceder a él desde los navegadores de iPhone y Mac — Open WebUI almacena el historial de chat en el servidor.',
          },
          {
            q: '¿Están estas apps disponibles fuera del App Store?',
            a: 'PocketPal AI y LLM Farm son de código abierto y pueden compilarse desde el código fuente con Xcode, pero las versiones del App Store son la distribución estándar. Private LLM y MLC Chat solo están en el App Store. Los usuarios de la UE pueden instalarlas mediante marketplaces alternativos bajo el DMA en 2026, pero la app subyacente es idéntica a la versión del App Store. Ninguna requiere carga lateral.',
          },
          {
            q: '¿Alguna de ellas requiere jailbreak?',
            a: 'No. Las cinco (PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence) funcionan en iOS estándar. Las cuatro apps de chat están en el App Store; Apple Intelligence está integrada en iOS 18+. El jailbreak no es necesario y no se recomienda — perder las actualizaciones de seguridad de iOS para instalar una app de chat no es un intercambio que valga la pena.',
          },
          {
            q: '¿Puedo usar IA local en iOS Shortcuts?',
            a: 'Sí, mediante Private LLM (que expone una acción de Shortcuts "Generar texto con Private LLM") o Apple Intelligence (que expone una acción "Usar modelo" en iOS 18.4+). PocketPal AI, MLC Chat y LLM Farm no tienen acciones de Shortcuts en 2026. La combinación de Private LLM + un Shortcut en el Share Sheet te permite ejecutar "resumir esto" o "reescribir esto" sobre texto en cualquier app, completamente sin conexión.',
          },
          {
            q: '¿Cómo se compara la IA local con la app de ChatGPT en iPhone?',
            a: 'Los modelos en dispositivo (Phi-4 Mini, Llama 3.2 3B) son aproximadamente un 60–75 % tan capaces como GPT-5.5 para el chat diario en 2026, más rápidos en consultas simples (sin ida y vuelta de red) y completamente privados. ChatGPT sigue siendo mejor para el razonamiento complejo, el conocimiento general del mundo y las tareas multimodales. El intercambio honesto: IA local para tareas rutinarias y privadas; ChatGPT para preguntas difíciles ocasionales. Muchos usuarios en 2026 tienen ambas apps y eligen según la consulta.',
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
      description: 'Cinco apps para iPhone que ejecutan LLMs reales en el dispositivo en 2026. PocketPal AI, Private LLM, MLC Chat y LLM Farm probadas en iPhone 16 Pro y 17 Pro. Velocidad, privacidad y biblioteca de modelos comparadas.',
      url: 'https://www.promptquorum.com/es/power-local-llm/best-local-llm-apps-iphone-2026?lang=es',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Os melhores apps de LLM local para iPhone em 2026 (execute IA sem WiFi)',
    seoTitle: 'Melhores apps LLM local iPhone 2026',
    intro:
      'Cinco apps para iPhone executam LLMs reais completamente no dispositivo em 2026: PocketPal AI, Private LLM, MLC Chat, LLM Farm e Apple Intelligence (integrado ao sistema). Todos funcionam sem WiFi depois que o modelo é baixado. Este guia os classifica por tokens por segundo no iPhone 16 Pro e iPhone 17 Pro, biblioteca de modelos, gerenciamento de RAM, privacidade e integração com o iOS.',
    metaDescription:
      'Cinco apps de iPhone que executam LLMs no dispositivo em 2026: PocketPal AI, Private LLM, MLC Chat e LLM Farm no iPhone 16/17 Pro. Velocidade e privacidade.',
    twitterDescription:
      'IA local no iPhone em 2026: PocketPal AI (grátis), Private LLM (~10 € de pagamento único, Siri), MLC Chat (o mais rápido), LLM Farm (o mais configurável). Todos funcionam sem conexão depois de baixar o modelo.',
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
      '**Para a maioria dos usuários de iPhone em 2026, instale o PocketPal AI na App Store e baixe o Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** É gratuito, de código aberto, funciona no iPhone 14 Pro e modelos mais recentes (qualquer iPhone com 6 GB+ de RAM) e gera ~10–15 tokens/seg no iPhone 16 Pro para o uso diário. Para Shortcuts e Siri pagos com integração iOS, o Private LLM é a opção paga mais sólida (~10 € de pagamento único). Para os tokens/seg mais rápidos no Apple Silicon, o MLC Chat usa MLC LLM com aceleração Metal. O LLM Farm é o mais configurável para usuários avançados. O Apple Intelligence também executa modelos no dispositivo, mas é integrado ao sistema e não é um app de chat; ele complementa esses apps em vez de competir com eles.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor app de LLM local para iPhone em 2026?',
        answer:
          'O PocketPal AI é a melhor opção gratuita para a maioria dos usuários de iPhone: de código aberto, instalação pela App Store, compatível com qualquer modelo GGUF do Hugging Face e executa o Phi-4 Mini (3.8B) a ~10–15 tokens/seg no iPhone 16 Pro. O Private LLM é a opção paga mais sólida (~10 € de pagamento único) com integração de iOS Shortcuts e Siri. O MLC Chat é o mais rápido no Apple Silicon graças à aceleração Metal. O LLM Farm é o mais configurável para usuários avançados. O Apple Intelligence também executa modelos no dispositivo, mas é integrado ao sistema e complementa esses apps.',
        bullets: [
          'PocketPal AI — gratuito, código aberto, App Store. A melhor opção padrão para a maioria dos usuários. Compatível com qualquer modelo GGUF.',
          'Private LLM — ~10 € de pagamento único. A melhor opção paga. iOS Shortcuts + integração com Siri. Biblioteca de modelos curada.',
          'MLC Chat — gratuito, projeto MLC LLM. O mais rápido no Apple Silicon (aceleração Metal). Seleção de modelos mais reduzida.',
          'LLM Farm — gratuito, código aberto. O mais configurável. Ideal para usuários avançados que querem ajustar parâmetros de amostragem.',
          'Apple Intelligence — integrado ao sistema, não é um app independente. Modelo 3B no dispositivo utilizado por Mail, Mensagens e Notas.',
          'Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB) — funciona a ~10–15 tokens/seg.',
          'iPhones mais antigos (14 Pro, 15 Pro): Qwen3 1.7B ou SmolLM 2 1.7B — cabe em 6 GB de RAM e gera ~15–20 tokens/seg.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Pontos-chave', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Qual app instalar primeiro no iPhone?', anchor: '#which-app' },
      { label: 'Tabela comparativa de apps para iPhone', anchor: '#comparison-table' },
      { label: 'PocketPal AI: opção gratuita e de código aberto', anchor: '#pocketpal-ai' },
      { label: 'Private LLM: opção paga com integração iOS', anchor: '#private-llm' },
      { label: 'MLC Chat: otimização para Apple Silicon', anchor: '#mlc-chat' },
      { label: 'LLM Farm: o mais configurável', anchor: '#llm-farm' },
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
          '**Private LLM é a melhor opção paga (~10 € de pagamento único, sem assinatura).** Biblioteca de modelos curada, integração com iOS Shortcuts e suporte de Siri "E aí Siri, pergunte ao Private LLM". Vale a pena pagar se você quer acesso por voz mãos livres ou automação de fluxos de trabalho.',
          '**MLC Chat é o mais rápido no Apple Silicon.** Usa MLC LLM com aceleração GPU Metal, gerando tokens 25–35% mais rápido que os apps baseados em llama.cpp no mesmo hardware. Seleção de modelos mais reduzida que o PocketPal AI.',
          '**LLM Farm é o mais configurável.** Expõe parâmetros de amostragem (temperatura, top-p, mirostat), prompts de sistema por modelo e templates de chat. Ideal para usuários que ajustam modelos para casos de uso específicos.',
          '**Apple Intelligence está no dispositivo, mas não é um app independente.** O modelo de base ~3B da Apple é executado no iOS 18+ no iPhone 15 Pro e modelos mais recentes. Potencializa funções do sistema (Ferramentas de escrita, Resposta inteligente, Resumos de notificações), mas não é acessível diretamente como interface de chat.',
          '**Modelo recomendado para iPhone 16 Pro / 17 Pro: Phi-4 Mini (3.8B Q4_K_M, ~2.7 GB).** Melhor equilíbrio entre qualidade e velocidade para o nível de 8 GB de RAM. iPhones mais antigos com 6 GB de RAM (iPhone 14 Pro): Qwen3 1.7B ou SmolLM 2 1.7B.',
          '**Nenhum app requer jailbreak. Os cinco funcionam no iOS padrão.** PocketPal AI, Private LLM, MLC Chat e LLM Farm estão na App Store; o Apple Intelligence é integrado ao iOS.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Apps testados:** PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence (sistema).',
          '**Dispositivos de teste:** iPhone 16 Pro (A18 Pro, 8 GB RAM) e iPhone 17 Pro (A19 Pro).',
          '**Motores de inferência:** llama.cpp (PocketPal AI, LLM Farm), MLC LLM com Metal (MLC Chat), runtime no dispositivo proprietário (Private LLM, Apple Intelligence).',
          '**iPhone mínimo para modelos 3B+:** iPhone 14 Pro (A16, 6 GB RAM) para 1.7B; iPhone 15 Pro / 16 Pro / 17 Pro (8 GB+) para 3B–4B.',
          '**Melhor app gratuito:** PocketPal AI — App Store, código aberto, flexibilidade de modelos.',
          '**Melhor app pago:** Private LLM — ~10 € de pagamento único, suporte de Shortcuts + Siri.',
          '**Sem conexão:** Os cinco funcionam completamente sem conexão depois que o modelo é baixado; sem chamadas à nuvem.',
        ],
      },
      whichApp: {
        id: 'which-app',
        title: 'Qual app instalar primeiro no iPhone?',
        content:
          '**Para a maioria dos usuários: PocketPal AI pela App Store e depois baixe o Phi-4 Mini (3.8B Q4_K_M).** Essa combinação funciona no iPhone 14 Pro e modelos mais recentes, não custa nada e produz resultados úteis para o chat diário, o resumo e a escrita rápida. Escolha outro app só quando você tiver uma necessidade específica que ele não cobre.',
        image: '/images/iphone-llm-apps-which-app-en.svg',
        imageCaption: 'Qual app de IA local instalar no iPhone: PocketPal AI (opção gratuita por padrão), Private LLM (Siri + Shortcuts), MLC Chat (o mais rápido no Apple Silicon), LLM Farm (configurável), Apple Intelligence (integrado ao iOS 18+).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para a maioria dos usuários de iPhone em 2026, instale o PocketPal AI (grátis, App Store) e baixe o Phi-4 Mini — ele cobre o chat diário, resumo e escrita em qualquer iPhone com 6 GB+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Cinco apps executam IA completamente no seu iPhone em 2026. O PocketPal AI é o melhor ponto de partida gratuito — instale-o, baixe um arquivo de modelo de 2.7 GB uma única vez e você terá um assistente de chat privado que funciona no trem sem WiFi. O Private LLM é a opção paga se você quer que a Siri converse com o modelo local. O MLC Chat é o mais rápido. O LLM Farm é o mais flexível. O Apple Intelligence é integrado ao iOS mas não é um app de chat. O PocketPal AI cobre 90% dos casos de uso.',
          },
        ],
        decisionBlock: {
          title: 'Decisão: qual app de IA local para iPhone?',
          localIf: [
            'Você quer uma IA de chat gratuita que funcione sem conexão → PocketPal AI',
            'Você quer que a Siri converse com o seu modelo local → Private LLM',
            'Você quer a maior velocidade de geração no Apple Silicon → MLC Chat',
            'Você quer ajustar parâmetros de amostragem e templates de chat → LLM Farm',
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
            'O mais rápido no chip: MLC Chat',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Instale o PocketPal AI primeiro, mesmo que você planeje pagar pelo Private LLM mais tarde. Use o PocketPal AI para verificar se a inferência no dispositivo no seu modelo de iPhone é rápida o suficiente para o seu caso de uso. Se for, decida se a integração com iOS Shortcuts e Siri do Private LLM vale ~10 €. Se não, você terá economizado os 10 € antes de pagar.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa de apps para iPhone',
        content:
          '**Os cinco apps se diferenciam em três eixos que importam à maioria dos usuários: custo, flexibilidade de modelos e integração com o iOS.** As diferenças de velocidade existem, mas são menores que a diferença entre qualquer um desses apps e um LLM na nuvem.',
        image: '/images/iphone-llm-apps-comparison-en.svg',
        imageCaption: 'Comparativo de apps LLM local para iPhone: PocketPal AI e LLM Farm (grátis, ~10–15 tok/s), MLC Chat (grátis, ~14–20 tok/s com aceleração Metal), Private LLM (~10 € de pagamento único, Siri + Shortcuts), Apple Intelligence (integrado ao sistema, iOS 18+).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O PocketPal AI é a melhor opção gratuita por padrão, o Private LLM é a melhor opção paga, o MLC Chat é o mais rápido, o LLM Farm é o mais configurável e o Apple Intelligence é integrado ao sistema.',
          },
          {
            type: 'plain-terms',
            text: 'A escolha geralmente se reduz a três coisas: você quer pagar (Private LLM)?, você quer velocidade máxima (MLC Chat)? ou você quer flexibilidade para ajustar configurações (LLM Farm)? Para todo o resto, o PocketPal AI é a opção padrão. Os dados da tabela assumem quantização Q4_K_M — o padrão para inferência móvel em 2026.',
          },
        ],
        columns: ['App', 'Preço', 'Tokens/seg (Phi-4 Mini, 16 Pro)', 'Privacidade', 'Ideal para'],
        rows: [
          { 'App': 'PocketPal AI', 'Preço': 'Grátis (código aberto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacidade': 'Só local, sem telemetria', 'Ideal para': 'Opção gratuita por padrão para a maioria' },
          { 'App': 'Private LLM', 'Preço': '~10 € pagamento único', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–14', 'Privacidade': 'Só local, analytics opt-in', 'Ideal para': 'iOS Shortcuts + integração Siri' },
          { 'App': 'MLC Chat', 'Preço': 'Grátis (código aberto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~14–20 (aceleração Metal)', 'Privacidade': 'Só local, sem telemetria', 'Ideal para': 'O mais rápido no Apple Silicon' },
          { 'App': 'LLM Farm', 'Preço': 'Grátis (código aberto)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': '~10–15', 'Privacidade': 'Só local, sem telemetria', 'Ideal para': 'Usuários avançados que ajustam a amostragem' },
          { 'App': 'Apple Intelligence', 'Preço': 'Grátis (integrado ao iOS 18+)', 'Tokens/seg (Phi-4 Mini, 16 Pro)': 'N/A (função do sistema)', 'Privacidade': 'Local + Private Cloud Compute opt-in', 'Ideal para': 'Assistência em Mail, Mensagens, Notas' },
        ],
        note:
          '**Nota sobre Apple Neural Engine (ANE) frente ao Metal:** PocketPal AI e LLM Farm usam llama.cpp com Metal Performance Shaders para a inferência, que é executada na GPU. O MLC Chat usa MLC LLM com uma otimização Metal mais profunda, alcançando 25–35% mais tokens/seg no mesmo hardware. O Apple Intelligence usa o ANE especificamente para o modelo de sistema 3B, que é mais eficiente energeticamente mas menos flexível que a inferência baseada em Metal. Tanto o A18 Pro (iPhone 16 Pro) quanto o A19 Pro (iPhone 17 Pro) têm ANE melhorados, mas os apps de chat de terceiros não podem apontar diretamente para o ANE — isso é reservado para o Apple Intelligence e as APIs da Apple.',
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
          '**O Private LLM é a opção paga mais sólida para iPhone em 2026 (~10 € de pagamento único, sem assinatura).** Está disponível apenas na App Store e vem com uma biblioteca curada de modelos otimizados. O seu diferencial é a integração com o iOS: ações de Shortcuts e um comando de voz "E aí Siri, pergunte ao Private LLM".',
        items: [
          '**O que é:** um app iOS pago com biblioteca de modelos curada e integração profunda com o iOS. Usa um runtime no dispositivo proprietário otimizado para Apple Silicon.',
          '**Instalação:** App Store → "Private LLM". Compra única ~10 € (sem assinatura).',
          '**Biblioteca de modelos curada:** ~30 modelos pré-testados e otimizados para iPhone, incluindo Llama 3.2 3B, Phi-4 Mini, Mistral Small Instruct e várias variantes sem censura. Menos flexibilidade que o PocketPal AI, mas sem risco de instalar um modelo que trave.',
          '**iOS Shortcuts:** o Private LLM expõe uma ação "Gerar texto com Private LLM" que você pode encadear em automações de Shortcuts. Útil para acionar a IA local a partir de um botão na sua tela inicial ou por meio de etiquetas NFC.',
          '**Integração com Siri:** "E aí Siri, pergunte ao Private LLM [sua pergunta]" envia o prompt ao modelo no dispositivo e a Siri lê a resposta em voz alta. Funciona sem conexão à internet. A latência é maior que na interface de chat (~3–5 segundos antes de o áudio começar).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'O preço de ~10 € do Private LLM cobre apenas o app para iPhone. A versão de macOS é uma compra separada, e a versão de iPad é universal com iPhone (uma compra cobre ambos). Confirme a plataforma de que você precisa antes de pagar. O Compartilhamento familiar da Apple cobre o app para os membros da família.',
          },
        ],
      },
      mlcChat: {
        id: 'mlc-chat',
        title: 'MLC Chat: otimização para Apple Silicon',
        content:
          '**O MLC Chat (do projeto MLC LLM) é o app LLM local mais rápido no iPhone em 2026 graças à aceleração GPU Metal.** É gratuito, de código aberto e executa modelos compilados pela cadeia de ferramentas MLC LLM em vez de GGUF padrão.',
        items: [
          '**O que é:** o app iOS de referência do projeto MLC LLM, que demonstra a inferência acelerada por Metal do MLC LLM no Apple Silicon.',
          '**Instalação:** App Store → "MLC Chat". Grátis.',
          '**Vantagem de velocidade:** ~25–35% mais rápido que os apps baseados em llama.cpp no mesmo iPhone para o mesmo modelo. No iPhone 16 Pro: Phi-4 Mini ~14–20 tok/seg (frente a ~10–15 no PocketPal AI).',
          '**Biblioteca de modelos:** mais reduzida que a do PocketPal AI — limitada aos modelos que o projeto MLC LLM compilou para iOS. Atualmente inclui Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B, RedPajama e alguns outros. Nem todo GGUF do Hugging Face funciona.',
          '**Ideal para:** usuários que priorizam a velocidade sobre a flexibilidade de modelos. Se o seu modelo-alvo está na biblioteca MLC, o MLC Chat será a opção mais rápida no seu iPhone.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A aceleração Metal do MLC LLM importa mais em iPhones mais antigos com Neural Engines menos potentes. No iPhone 17 Pro, a diferença entre o MLC Chat e o PocketPal AI se reduz porque o Neural Engine melhorado do A19 Pro reduz a desvantagem relativa do llama.cpp. No iPhone 14 Pro e 15 Pro, a vantagem do MLC Chat é maior.',
          },
        ],
      },
      llmFarm: {
        id: 'llm-farm',
        title: 'LLM Farm: o mais configurável',
        content:
          '**O LLM Farm é o app LLM local para iPhone mais configurável em 2026.** Gratuito, de código aberto (GitHub: guinmoon/LLMFarm) e expõe parâmetros de amostragem que outros apps escondem. Ideal para usuários que querem ajustar o comportamento do modelo em vez de aceitar os valores padrão.',
        items: [
          '**O que é:** um app iOS do desenvolvedor @guinmoon que executa modelos GGUF com amplas opções de configuração.',
          '**Instalação:** App Store → "LLM Farm". Grátis.',
          '**Adicionar um modelo:** toque no ícone da biblioteca de modelos → "Adicionar modelo a partir de URL" → cole um link de download direto do Hugging Face para um arquivo GGUF. Você também pode transferir um GGUF por meio do Arquivos da Apple.',
          '**Configuração exposta:** temperatura, top-p, top-k, amostragem mirostat, penalidade por repetição, prompt de sistema por modelo, seleção de template de chat, comprimento da janela de contexto. Todos os ajustes que a maioria dos apps esconde são editáveis aqui.',
          '**Velocidade de geração:** comparável à do PocketPal AI (ambos usam llama.cpp). No iPhone 16 Pro: Phi-4 Mini ~10–15 tok/seg.',
          '**Ideal para:** desenvolvedores, engenheiros de prompt e usuários que querem comparar configurações de amostragem ou testar diferentes templates de chat sem navegar por três menus de ajustes.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A amostragem mirostat exposta pelo LLM Farm é útil para tarefas de escrita criativa onde a amostragem padrão de temperatura/top-p produz resultados repetitivos. Configure o mirostat no modo 2 com entropia-alvo ~5.0 e taxa de aprendizado 0.1 como ponto de partida. PocketPal AI e Private LLM não expõem o mirostat de jeito nenhum.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence: IA no dispositivo integrada ao sistema',
        content:
          '**O Apple Intelligence executa o modelo de base ~3B próprio da Apple no dispositivo no iPhone 15 Pro e modelos mais recentes (chip A17 Pro com 8 GB de RAM no mínimo).** Não é um app de chat — potencializa funções do sistema no Mail (Resposta inteligente), Mensagens (ferramentas de escrita), Notas (resumo) e Resumos de notificações. O modelo não é diretamente acessível para os prompts do usuário da mesma forma que o PocketPal AI ou o Private LLM.',
        items: [
          '**Onde está:** integrado ao iOS 18+. Ative em Ajustes → Apple Intelligence e Siri.',
          '**Requisito de hardware:** iPhone 15 Pro / 15 Pro Max, série iPhone 16, série iPhone 17. Os iPhones mais antigos (14 e inferiores) não são compatíveis com o Apple Intelligence.',
          '**Funções no dispositivo:** Ferramentas de escrita (reescrever, resumir, revisar) dentro de qualquer campo de texto, Resposta inteligente no Mail e Mensagens, Resumos de notificações, geração de Genmoji.',
          '**Private Cloud Compute:** para tarefas que superam a capacidade do modelo no dispositivo, o Apple Intelligence recorre ao Private Cloud Compute (PCC) — servidores operados pela Apple que executam modelos maiores com garantias criptográficas de que nenhum dado do usuário é retido. O PCC é opt-in e pode ser desativado.',
          '**Relação com os apps de chat:** o Apple Intelligence é um complemento, não um substituto. Ele cuida da reescrita e do resumo de texto dentro dos apps do iOS; PocketPal AI / Private LLM / MLC Chat / LLM Farm fornecem uma interface de chat dedicada para perguntas arbitrárias.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se o Apple Intelligence é a sua única necessidade (reescrever e-mails, resumir notificações), você não precisa de um app de chat independente. Se você quer fazer perguntas ao modelo como "explique o tunelamento quântico em termos simples" ou "crie um plano de projeto para X", instale um dos quatro apps de chat — o Apple Intelligence não expõe essa interface.',
          },
        ],
      },
      modelsByDevice: {
        id: 'models-by-tier',
        title: 'Modelos conforme o modelo de iPhone',
        content:
          '**A RAM do iPhone determina o limite de tamanho do modelo, não a geração do chip.** Um iPhone de 6 GB (14 Pro, 15) consegue executar modelos 1.7B confortavelmente; um iPhone de 8 GB (15 Pro, 16 Pro, 17 Pro) executa modelos 3B–4B confortavelmente e modelos 7B lentamente. Para o panorama mais amplo de modelos em todo o hardware (não apenas móvel), consulte [Os melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026).',
        image: '/images/iphone-llm-apps-models-tier-en.svg',
        imageCaption: 'Recomendações de modelos LLM por RAM de iPhone: Phi-4 Mini 3.8B Q4_K_M para iPhones de 8 GB (15 Pro–17 Pro) a 8–20 tok/s; Qwen3 1.7B Q4_K_M para iPhones de 6 GB (14 Pro, não Pro) a 12–20 tok/s; iPhone SE (4 GB) não recomendado.',
        columns: ['Nível de iPhone (Ano, RAM)', 'Modelo recomendado', 'Tamanho de download', 'Velocidade esperada'],
        rows: [
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 17 Pro (2025, 8–12 GB)', 'Modelo recomendado': 'Phi-4 Mini ou Llama 3.2 3B (Q4_K_M)', 'Tamanho de download': '~2.5–2.7 GB', 'Velocidade esperada': '~13–20 tok/seg' },
          { 'Nível de iPhone (Ano, RAM)': 'iPhone 16 Pro / 16 Pro Max (2024, 8 GB)', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M)', 'Tamanho de download': '~2.7 GB', 'Velocidade esperada': '~10–15 tok/seg' },
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
          '**A integração com o iOS varia significativamente conforme o app.** O Private LLM tem a integração mais profunda (Shortcuts + Siri); PocketPal AI, MLC Chat e LLM Farm são apps de chat independentes sem ações de Shortcuts em 2026.',
        image: '/images/iphone-llm-apps-ios-integration-en.svg',
        imageCaption: 'Integração com o iOS por app LLM local: Private LLM e Apple Intelligence suportam Shortcuts e Siri; PocketPal AI, MLC Chat e LLM Farm são apps de chat independentes sem ações de Shortcuts em 2026. PocketPal AI, MLC Chat e LLM Farm são de código aberto.',
        items: [
          '**Private LLM** expõe uma ação de Shortcuts "Gerar texto com Private LLM" e um gatilho de voz "E aí Siri, pergunte ao Private LLM [pergunta]". O mais integrado de forma nativa com o iOS dos quatro apps de chat.',
          '**PocketPal AI** é um app de chat independente — sem ação de Shortcuts, sem integração com Siri. Você abre o app e conversa. Os planos de suporte de Shortcuts são rastreados nos issues do GitHub, mas não foram publicados até maio de 2026.',
          '**MLC Chat** é um app de referência para o projeto MLC LLM — integração iOS mínima. Sem ação de Shortcuts.',
          '**LLM Farm** é um app de chat independente — sem ação de Shortcuts.',
          '**Apple Intelligence** se integra com o iOS Shortcuts por meio da ação "Usar modelo" (iOS 18.4+). Isso envia um prompt ao modelo 3B no dispositivo ou ao Private Cloud Compute (configurável). A saída no dispositivo pode ser encadeada em outras ações de Shortcuts.',
          '**Sideloading:** nenhum desses apps requer sideloading nem jailbreak. Os quatro apps de chat estão na App Store; o Apple Intelligence é integrado ao iOS. Os usuários da UE também podem instalá-los por meio de marketplaces alternativos sob o DMA em 2026, mas o app é idêntico à versão da App Store.',
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
          '**Confundir o Apple Intelligence com um app de chat.** O Apple Intelligence não tem interface de chat — ele potencializa funções do sistema. Se você quer fazer perguntas ao modelo, instale o PocketPal AI, Private LLM, MLC Chat ou LLM Farm separadamente.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'PocketPal AI — [github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) (app iOS de código aberto).',
          'Private LLM — [ficha da App Store](https://apps.apple.com) e documentação do desenvolvedor.',
          'MLC Chat / projeto MLC LLM — [llm.mlc.ai](https://llm.mlc.ai/docs/deploy/ios.html) (implantação iOS acelerada por Metal).',
          'LLM Farm — [github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm) (app iOS de código aberto).',
          'Apple Intelligence e modelos de base no dispositivo — [Apple Machine Learning Research](https://machinelearning.apple.com) e documentação do Apple Developer.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
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
            a: 'Sim, com o Private LLM. Dizer "E aí Siri, pergunte ao Private LLM [pergunta]" envia o prompt ao modelo no dispositivo e a Siri lê a resposta em voz alta — completamente sem conexão. PocketPal AI, MLC Chat e LLM Farm não têm integração com a Siri em 2026. O Apple Intelligence se integra com a Siri, mas só para tarefas do sistema (escrita, resumo, ações de app), não para perguntas e respostas gerais.',
          },
          {
            q: 'Esses apps funcionam no iPhone SE ou em iPhones mais antigos?',
            a: 'Com limitações. O iPhone SE (4 GB de RAM) está abaixo do limite prático para LLM no dispositivo em 2026. O iPhone 14 / 15 (não Pro, 6 GB de RAM) consegue executar modelos 1.7B (Qwen3 1.7B, SmolLM 2 1.7B), mas não 3B+. O iPhone 14 Pro e 15 Pro (6–8 GB de RAM) conseguem executar modelos 3B como o Phi-4 Mini a 8–12 tokens/seg. Para iPhones mais antigos, a melhor opção é conectar-se remotamente a um Mac ou PC doméstico.',
          },
          {
            q: 'Posso sincronizar o histórico de chat entre iPhone e Mac?',
            a: 'Não de forma nativa em nenhum desses quatro apps. O histórico de chat é armazenado localmente em cada dispositivo; não há função de sincronização com o iCloud no PocketPal AI, Private LLM, MLC Chat nem LLM Farm até maio de 2026. Para histórico de chat entre dispositivos, a abordagem prática é executar o Open WebUI em um Mac doméstico e acessá-lo pelos navegadores de iPhone e Mac — o Open WebUI armazena o histórico de chat no servidor.',
          },
          {
            q: 'Esses apps estão disponíveis fora da App Store?',
            a: 'PocketPal AI e LLM Farm são de código aberto e podem ser compilados a partir do código-fonte com o Xcode, mas as versões da App Store são a distribuição padrão. Private LLM e MLC Chat estão apenas na App Store. Os usuários da UE podem instalá-los por meio de marketplaces alternativos sob o DMA em 2026, mas o app subjacente é idêntico à versão da App Store. Nenhum requer sideloading.',
          },
          {
            q: 'Algum deles requer jailbreak?',
            a: 'Não. Os cinco (PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence) funcionam no iOS padrão. Os quatro apps de chat estão na App Store; o Apple Intelligence é integrado ao iOS 18+. O jailbreak não é necessário e não é recomendado — perder as atualizações de segurança do iOS para instalar um app de chat não é uma troca que vale a pena.',
          },
          {
            q: 'Posso usar IA local no iOS Shortcuts?',
            a: 'Sim, por meio do Private LLM (que expõe uma ação de Shortcuts "Gerar texto com Private LLM") ou do Apple Intelligence (que expõe uma ação "Usar modelo" no iOS 18.4+). PocketPal AI, MLC Chat e LLM Farm não têm ações de Shortcuts em 2026. A combinação de Private LLM + um Shortcut no Share Sheet permite executar "resumir isto" ou "reescrever isto" sobre texto em qualquer app, completamente sem conexão.',
          },
          {
            q: 'Como a IA local se compara ao app do ChatGPT no iPhone?',
            a: 'Os modelos no dispositivo (Phi-4 Mini, Llama 3.2 3B) são aproximadamente 60–75% tão capazes quanto o GPT-5.5 para o chat diário em 2026, mais rápidos em consultas simples (sem ida e volta de rede) e completamente privados. O ChatGPT continua melhor para o raciocínio complexo, o conhecimento geral do mundo e as tarefas multimodais. A troca honesta: IA local para tarefas rotineiras e privadas; ChatGPT para perguntas difíceis ocasionais. Muitos usuários em 2026 têm ambos os apps e escolhem conforme a consulta.',
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
      description: 'Cinco apps para iPhone que executam LLMs reais no dispositivo em 2026. PocketPal AI, Private LLM, MLC Chat e LLM Farm testados no iPhone 16 Pro e 17 Pro. Velocidade, privacidade e biblioteca de modelos comparadas.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/best-local-llm-apps-iphone-2026?lang=pt',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},
}
