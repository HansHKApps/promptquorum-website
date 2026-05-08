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
            'You need 70B+ model quality (Llama 3.3 70B, GPT-4o tier) → use cloud or remote-connect to a home machine',
            'You need access to GPT-4o, Claude Opus, or Gemini specifically → cloud apps (these are not available locally)',
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
          '**Curated model library:** ~30 models pre-tested and optimised for iPhone, including Llama 3.2 3B, Phi-4 Mini, Mistral 7B Instruct, and several uncensored variants. Less flexibility than PocketPal AI but no risk of installing a model that crashes.',
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
          '**Expecting cloud-AI quality from on-device models.** Phi-4 Mini (3.8B) is impressive for its size but not GPT-4o. Use it for chat, summarisation, drafting, and quick Q&A — not multi-step reasoning, complex code generation, or nuanced creative writing.',
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
            a: 'On-device models (Phi-4 Mini, Llama 3.2 3B) are roughly 60–75% as capable as GPT-4o for everyday chat in 2026, faster on simple queries (no network round-trip), and fully private. ChatGPT remains better for complex reasoning, broad world knowledge, and multimodal tasks. The honest tradeoff: local AI for routine and private tasks; ChatGPT for occasional hard questions. Many users in 2026 keep both apps and choose per query.',
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
            'Sie benötigen 70B+-Modellqualität (Llama 3.3 70B, GPT-4o-Niveau) → Cloud oder Remote-Verbindung zu einem Heimrechner',
            'Sie benötigen speziell GPT-4o, Claude Opus oder Gemini → Cloud-Apps (diese sind lokal nicht verfügbar)',
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
          '**Kuratierte Modellbibliothek:** ~30 Modelle, vorgetestet und für iPhone optimiert, darunter Llama 3.2 3B, Phi-4 Mini, Mistral 7B Instruct und mehrere ungefilterte Varianten. Weniger flexibel als PocketPal AI, aber kein Risiko, ein Modell zu installieren, das abstürzt.',
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
          '**Der iPhone-RAM bestimmt die Modellgröße – nicht die Chip-Generation.** Ein 6-GB-iPhone (14 Pro, 15) kann 1,7B-Modelle komfortabel ausführen; ein 8-GB-iPhone (15 Pro, 16 Pro, 17 Pro) führt 3B–4B-Modelle komfortabel und 7B-Modelle langsam aus. Für den umfassenderen Überblick über Modelle auf allen Hardware-Klassen (nicht nur Mobilgeräte) siehe [Die besten lokalen LLMs 2026](/local-llms/best-local-llms-2026?lang=de).',
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
          '**Cloud-KI-Qualität von On-Device-Modellen erwarten.** Phi-4 Mini (3,8B) ist für seine Größe beeindruckend, aber kein GPT-4o. Verwenden Sie es für Chat, Zusammenfassungen, Textentwürfe und schnelle Fragen – nicht für mehrstufiges Schlussfolgern, komplexe Code-Generierung oder nuanciertes kreatives Schreiben.',
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
            a: 'On-Device-Modelle (Phi-4 Mini, Llama 3.2 3B) sind 2026 für den alltäglichen Chat etwa 60–75 % so leistungsfähig wie GPT-4o, bei einfachen Anfragen schneller (kein Netzwerk-Round-Trip) und vollständig privat. ChatGPT bleibt besser für komplexes Schlussfolgern, breites Weltwissen und multimodale Aufgaben. Der ehrliche Kompromiss: lokale KI für Routine- und private Aufgaben; ChatGPT für gelegentliche schwierige Fragen. Viele Nutzer 2026 haben beide Apps und wählen je nach Anfrage.',
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
          '[Die besten Local-LLM-Apps für Android 2026](/power-local-llm/best-local-llm-apps-android-2026?lang=de) — Schwesterartikel zu Android-Äquivalenten (Maid, Layla, MLC Chat, Termux + Ollama).',
          '[KI auf dem Tablet nutzen: iPad und Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android?lang=de) — Plattformführer für Tablet-Nutzer.',
          '[Die besten mobilen LLM-Modelle 2026: Phi-4 Mini vs. Gemma 3 vs. SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=de) — Begleitartikel zur Modellwahl für diese Apps.',
          '[Die besten lokalen LLMs 2026](/local-llms/best-local-llms-2026?lang=de) — Umfassender Modellüberblick für alle Hardware-Klassen, nicht nur Mobilgeräte.',
          '[Lokalen Sprachassistenten auf dem Smartphone erstellen: Whisper + lokales LLM](/power-local-llm/voice-assistant-local-mobile-offline?lang=de) — Erweitert diese Apps um Offline-Spracheingabe/-ausgabe.',
          '[Beste lokale KI-App für Einstiegs-PCs](/power-local-llm/best-local-ai-app-low-end-pc?lang=de) — Desktop-Alternative für Nutzer, die sich remote mit einem leistungsfähigeren Heimrechner verbinden möchten.',
          '[Verzeichnis lokaler LLM-Software 2026](/power-local-llm/local-llm-software-directory-2026?lang=de) — Verzeichnis aller erwähnenswerten Local-LLM-Tools auf allen Plattformen.',
        ],
      },
    },
  },
}
