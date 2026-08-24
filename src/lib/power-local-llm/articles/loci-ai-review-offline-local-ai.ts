// Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac
// Slug: loci-ai-review-offline-local-ai
// Companion to: best-local-llm-apps-iphone-2026, best-local-llm-apps-android-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-08-22',
    next_refresh_due: '2027-02-22',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/loci-ai-review-hero-en.webp',
    title: 'Loci AI Review (2026): Offline AI for iPhone, Android, iPad, Mac and Windows',
    seoTitle: 'Loci AI Review 2026: Private Offline AI Across Platforms',
    intro:
      'Loci, built by Loci AI, Inc., is designed to make local AI feel like a normal assistant rather than a model-management project. It runs AI on iPhone, iPad, Android, Mac, and Windows, can work offline after setup, and positions itself as a privacy-first alternative to cloud AI services. The app automatically selects the best inference runtime (llama.cpp or MLX) for each model on your hardware, implements thermal management to keep your phone stable, syncs memory across conversations, and can link to a desktop for access to more powerful models. The practical question is not whether local inference is possible — it is whether Loci gives you enough quality and control without the model downloads, storage use, and technical configuration (manually selecting GGUF files, tuning quantizations, calculating VRAM) that more advanced local-LLM tools require.',
    metaDescription:
      'Loci AI review: is it worth using for private, offline AI? See how it works on iPhone, Android, iPad, Mac and Windows, who it suits, and how it compares with Private LLM, PocketPal and Google AI Edge Gallery.',
    twitterDescription:
      'Loci AI review 2026: offline AI that just works on iPhone, Android, iPad, Mac and Windows. Privacy, pricing, setup, and comparisons with Private LLM and Google AI Edge Gallery.',
    audience:
      'Users deciding between running on-device AI via Loci versus cloud services, other local-LLM apps, or cloud alternatives — covers setup friction, privacy positioning, cross-platform support, and real-world trade-offs.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Loci AI review',
    targetKeywords: [
      'loci ai review',
      'loci offline ai',
      'loci local llm',
      'loci ai iphone',
      'loci ai android',
      'loci vs privatellm',
      'loci vs pocketpal',
      'loci ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Loci is most compelling if your priority is low-friction, on-device AI with strong reasoning on mobile.** Gemma 4 E2B/E4B offers the strongest reasoning available on a pocket device, and Loci AI\'s context management combined with unique thermal and memory handling means fewer hallucinations and fewer crashes than other apps. It may be the better first local-AI app for users who want private offline chat and persistent memory without treating their phone like a miniature ML workstation (requiring manual GGUF selection, quantization tuning, and VRAM calculations). Loci works on iPhone, iPad, Android, Mac, and Windows — just download the app and pick a model from the curated list. Advanced users can also pair their phone to a Mac or PC (Loci Link) to run more powerful models straight from mobile. Users who want to select quantizations, import models, or run larger model libraries should compare it with more technical alternatives like Private LLM or PocketPal AI.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Loci for private, offline AI?',
        answer:
          'Use Loci if you want private on-device chat without model-management friction, across iPhone, Android, iPad, Mac, or Windows. Skip it if you need frontier reasoning quality, live web knowledge without connectivity, or deep control over model selection and quantization — those are better served by cloud AI or more technical local-LLM apps like Private LLM.',
        bullets: [
          'Free, no subscription, works on 5 platforms (iPhone/iPad/Android/Mac/Windows).',
          'Offline-capable after app and model download/setup.',
          'No account, no tracking, conversations stay on-device per Loci AI claims.',
          'Optional features (web search via DuckDuckGo, Windows voice input) require internet.',
          'Quality and model selection less flexible than Private LLM or PocketPal AI.',
        ],
        updatedDate: '2026-08-22',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Loci Is', anchor: 'what-is-loci' },
      { label: 'How Local AI Works in Loci', anchor: 'how-local-ai-works' },
      { label: 'Real-World Testing Notes', anchor: 'testing-notes' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Loci on Each Platform', anchor: 'platforms' },
      { label: 'Loci vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Loci', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Loci', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Loci is a free on-device AI app for iPhone, iPad, Android, Mac, and Windows, built by Loci AI, Inc.',
          'It offers two model paths: Apple\'s system foundation model (where supported) or downloadable open-source models (Gemma 4, Qwen 3.5, Llama, Phi).',
          'Setup is minimal — no GGUF files, no quantization choices, just download and chat. Loci intelligently selects the best runtime (llama.cpp or MLX) for your hardware.',
          'Privacy claim: conversations stay on-device; optional features (web RAG, voice) require internet. Web RAG grounds answers in live sources when online and falls back cleanly to on-device when offline.',
          'Standout features: Gemma 4 E2B/E4B as the strongest mobile reasoning available; Loci Link (desktop/phone pairing for powerful models); global memory across conversations; first-class thermal management; background downloads; and exceptional crash resilience.',
          'Not ideal for users needing frontier cloud reasoning, deep GGUF/quantization control, or fully documented voice stacks.',
          'Real-world testing shows model downloads work reliably, offline chat functions as advertised, app crashes less than alternatives. Gemma 4 combined with Loci\'s context management delivers the strongest reasoning ceiling on mobile today.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'What Loci Is',
        content: [
          'Loci is a consumer-focused, on-device AI assistant available on iPhone (iOS 18.0+), iPad (iPadOS 18.0+), Android, Mac, and Windows. Built by Loci AI, Inc., the app is free with no subscription, no ads, and no account requirement.',
          'Model architecture: Loci can use "Apple\'s built-in foundation model or download from 10+ curated open-source models, including Gemma, Qwen, Llama, and Phi — all running locally on your device." This means inference happens on-device after setup, not in the cloud.',
          'Privacy positioning: The official claim is "Chat is processed on your device and is not uploaded. There is no account, no server-side copy of your conversations, and no training on your words." The app collects "Identifiers," "Usage Data," and "Diagnostics" via its privacy nutrition label, but states this data is "not linked to your identity."',
          'Optional features include photo analysis, voice mode, calendar/reminders integration, and web search via DuckDuckGo. The caveat: web search and Windows voice input require an internet connection, which alters the "offline" story if used.',
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'How Local AI Works in Loci',
        content: [
          'Loci offers two possible paths to on-device AI:',
        ],
        items: [
          '**Apple system foundation model** — on supported Apple devices (iPhone, iPad, Mac with recent iOS/macOS versions), Loci can use a built-in on-device foundation model provided by Apple. This path requires no model download, minimal setup friction, and is the simplest on Apple platforms.',
          '**Downloadable open-source models** — users can download compact models (Gemma 4 1B/4B, Qwen 3.5, Llama 3.2 3B, Phi-4 Mini) into Loci once. Model files typically range from 1–5 GB depending on model size. After download, inference runs on-device; internet is not required for chat. New models land continuously and are integrated once verified to run on phone hardware.',
          '**Runtime flexibility** — Loci intelligently selects the best inference runtime for each model and device: llama.cpp for GGUF models and Apple\'s MLX for optimal performance on Apple silicon. This means the simple interface masks sophisticated tuning beneath the surface — the app picks the fastest path for that model on your specific hardware (measuring time-to-first-token and tokens-per-second), rather than forcing users to understand runtimes.',
        ],
        note: 'The exact device/OS thresholds for which platforms get Apple foundation-model support vs. must download a model are not publicly documented. Assume that support varies by device, OS version, app version, storage, and region — do not expect identical behavior across your devices. Last verified against Loci app on 2026-08-22.',
      },
      testingNotes: {
        id: 'testing-notes',
        title: 'Real-World Testing Notes',
        content: [
          'Loci was tested on multiple devices (testing by Hans Küpper, PromptQuorum, August 2026) to validate real-world usability:',
        ],
        items: [
          '**Model downloads work reliably.** Downloads of compact models (e.g., Gemma 4 4B, ~4 GB) completed successfully on home WiFi with no truncation or corruption observed.',
          '**Offline chat works as advertised.** Once a model is downloaded, inference runs without any internet connection, including in airplane mode. Chat remains responsive.',
          '**Model quality depends on both parameter count and app-level tuning.** The baseline 3B–4B models excel at drafting, brainstorming, and summarization, but struggle with nuanced topics and multi-step reasoning — a ceiling inherent to parameter count that no app can change. However, what the app *can* change is everything surrounding the model: memory management, context-window handling, hallucination reduction, and OS-level stability. Loci implements best-practice context management (automatic compaction plus newest research techniques for stretching usable context), resulting in fewer hallucinations and crashes compared to other apps running the identical model. Most importantly: Gemma 4 E2B and E4B (the latest generation) are a genuine step above the 2025 generation of 3B–4B models and represent the strongest reasoning capability available on mobile today. Combined with Loci\'s context management, this is the reasoning ceiling for pocket-sized AI. For complex analysis, live web queries, or high-stakes decisions, larger frontier models (GPT-4o, Claude 3 Opus) remain necessary.',
          '**Optional features require connectivity.** Web search via DuckDuckGo, model downloads, and app updates all require internet access as documented.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Privacy',
            'What it means in real use': 'Conversations do not leave your device (per developer claim). No cloud servers storing your words.',
            'Limitation / caveat': 'Optional features (DuckDuckGo web search, Windows voice input) require connectivity and may leave data trails.',
          },
          {
            'Benefit': 'Offline-capable after setup',
            'What it means in real use': 'Once the app and model are installed, chat works in airplane mode with no internet.',
            'Limitation / caveat': 'Initial model download requires internet. Feature updates, model downloads, and backups may also need connectivity.',
          },
          {
            'Benefit': 'No recurring cloud cost',
            'What it means in real use': 'Free app, no subscription, no per-message fees.',
            'Limitation / caveat': 'Inference runs on your device, consuming local battery and processing power.',
          },
          {
            'Benefit': 'Works across platforms',
            'What it means in real use': 'One free purchase (the app is free) on iPhone, iPad, Android, Mac, and Windows.',
            'Limitation / caveat': 'Quality and capabilities may vary per platform; Apple device priority is evident in the design.',
          },
          {
            'Benefit': 'Minimal setup friction',
            'What it means in real use': 'No GGUF file selection, no quantization tuning, no VRAM calculations.',
            'Limitation / caveat': 'Model choice is curated and limited (10+ models). Cannot import your own GGUF files.',
          },
          {
            'Benefit': 'Device performance ceiling is your only limit',
            'What it means in real use': 'Inference speed depends on your phone/PC RAM and CPU, not cloud queue times.',
            'Limitation / caveat': 'Smaller local models (~3B–4B params) produce less capable output than frontier cloud LLMs (GPT-4o, Claude 3 Opus).',
          },
          {
            'Benefit': 'Web grounding with seamless offline fallback',
            'What it means in real use': 'When online, Loci can ground answers in live web sources via configurable web RAG. When offline, it cleanly falls back to on-device knowledge without breaking. You control the behavior in settings — get the online benefit and offline benefit from the same app. Few other local-AI apps offer this combination.',
            'Limitation / caveat': 'Web grounding requires internet when enabled. Without web access, answers reflect only on-device model knowledge and do not include current events.',
          },
          {
            'Benefit': 'Long-context and complex reasoning',
            'What it means in real use': 'Suitable for drafting, summarizing, and structured Q&A on local content.',
            'Limitation / caveat': 'Complex multi-step reasoning, coding, and high-stakes summarization often still benefit from frontier cloud models.',
          },
          {
            'Benefit': 'Desktop/phone linking for powerful model execution',
            'What it means in real use': 'Link your phone to a desktop Mac or PC to run extremely powerful models directly from your phone — solving hallucination and quality concerns by offloading inference to a more capable machine while keeping the interface on mobile.',
            'Limitation / caveat': 'Requires a desktop/laptop with sufficient GPU/CPU and consistent network connectivity between devices.',
          },
          {
            'Benefit': 'App stability and crash resilience',
            'What it means in real use': 'Loci AI engineered a unique approach to OS memory handling that results in significantly fewer crashes compared to other local-LLM apps — better session continuity and reliability.',
            'Limitation / caveat': 'Memory handling is app-specific; mileage varies by device, model size, and concurrent app load.',
          },
          {
            'Benefit': 'Global memory across conversations',
            'What it means in real use': 'Loci remembers things about you across conversations and model switches. Switch from Gemma to Qwen and the app retains your preferences and history — all stored on-device.',
            'Limitation / caveat': 'Global memory stays local to your device; not synced across devices.',
          },
          {
            'Benefit': 'First-class thermal management',
            'What it means in real use': 'Loci monitors device temperature and automatically adjusts runtime parameters to keep your phone stable, rather than pushing inference until the phone throttles itself or the app crashes. Multiple thermal modes let you deliberately run cooler for extended sessions.',
            'Limitation / caveat': 'Automatic thermal management trades some speed for stability; different devices have different thermal profiles.',
          },
          {
            'Benefit': 'Background model downloads',
            'What it means in real use': 'Model downloads run on background sessions and survive the app being closed, resuming where they left off. No need to keep the app open while downloading a 4 GB model file.',
            'Limitation / caveat': 'Downloads still require internet connectivity during active download windows.',
          },
          {
            'Benefit': 'Progressive settings depth',
            'What it means in real use': 'The main app screen is intentionally simple for casual users, but powerful settings are available for users who want to tune model behavior, temperature, context length, and thermal modes.',
            'Limitation / caveat': 'Advanced settings are hidden by default; requires exploring to discover all capabilities.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Loci on Each Platform',
        columns: ['Platform', 'What to expect', 'Important note'],
        rows: [
          {
            'Platform': 'iPhone',
            'What to expect': 'Loci works on iOS 18.0+. Can use Apple\'s on-device foundation model or download a compact open-source model (Gemma 4 4B, Llama 3.2 3B, ~2–4 GB). Chat, photo analysis, voice mode, and calendar integration available.',
            'Important note': 'iOS 18+ requirement excludes iPhone XS and older. Exact device/chip thresholds for Apple foundation-model support are not publicly documented.',
          },
          {
            'Platform': 'iPad',
            'What to expect': 'Loci works on iPadOS 18.0+, with the same model paths as iPhone. Larger screen is better for long conversations and document review.',
            'Important note': 'Larger models may still be constrained by available VRAM. Apple foundation-model availability varies by iPad generation; check App Store for current compatibility.',
          },
          {
            'Platform': 'Android',
            'What to expect': 'Available on Google Play. Can download open-source models (Gemma 4 4B, Qwen 2.5, Llama 3.2 3B, Phi-4, ~2–5 GB). No built-in system model equivalent to Apple\'s foundation model.',
            'Important note': 'Performance varies widely across Android devices due to chipset, RAM, and OS version fragmentation. High-end phones (Snapdragon 8 series, 8+ GB RAM) handle models better.',
          },
          {
            'Platform': 'Mac',
            'What to expect': 'Available on the Mac App Store. Can use Apple\'s on-device foundation model, download open-source models, or connect to Ollama running on the same Mac for access to a broader model library. Useful for longer sessions, larger screens, and external keyboards.',
            'Important note': 'Mac-specific Apple foundation-model support is undocumented. M-series Macs (M1/M2/M3+) likely supported; older Intel Macs may require model download. Advanced users can run Ollama locally and plug models into Loci for expanded model access.',
          },
          {
            'Platform': 'Windows',
            'What to expect': 'Available via askloci.ai or Windows App Store. Can download open-source models (same library as Android: Gemma, Qwen, Llama, Phi). Voice input requires internet connection (unlike other platforms).',
            'Important note': 'Windows support is the least documented of the five platforms. Performance depends on GPU/CPU; requires sufficient disk space for model storage (~2–5 GB).',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Loci vs. Alternatives',
        columns: ['App', 'Best for', 'Setup level', 'Model flexibility', 'Platform focus', 'Key limitation'],
        rows: [
          {
            'App': 'Loci',
            'Best for': 'Low-friction cross-platform private chat',
            'Setup level': 'Minimal (download, chat)',
            'Model flexibility': 'Curated library (~10 models); cannot import GGUF',
            'Platform focus': 'iPhone/iPad/Android/Mac/Windows (5 platforms)',
            'Key limitation': 'Model choice is limited to curated library (~10 models); no GGUF import',
          },
          {
            'App': 'Private LLM',
            'Best for': 'Apple-only users wanting advanced model selection',
            'Setup level': 'Low-to-medium (one-time purchase, model downloads)',
            'Model flexibility': '140+ models, OmniQuant and GPTQ quantization formats',
            'Platform focus': 'iPhone/iPad/Mac (Apple only, one purchase across all devices)',
            'Key limitation': 'Apple-only; one-time purchase price not disclosed; requires learning quantization formats',
          },
          {
            'App': 'PocketPal AI',
            'Best for': 'Users wanting full GGUF import and model control',
            'Setup level': 'Medium (free, but requires model file sourcing)',
            'Model flexibility': 'Any GGUF file from Hugging Face or elsewhere',
            'Platform focus': 'iPhone/iPad (primarily Apple, some Android support)',
            'Key limitation': 'Requires comfort with GGUF files and model selection; more complex than Loci',
          },
          {
            'App': 'Google AI Edge Gallery',
            'Best for': 'Experimental model exploration with advanced features',
            'Setup level': 'Medium-to-high (more features, more discovery needed)',
            'Model flexibility': 'Gemma 4 centerpiece; supports multiple open-source models; custom model loading',
            'Platform focus': 'Android-first (iOS, macOS also supported)',
            'Key limitation': 'More experimental/technical; not a straightforward Loci replacement; less polished UI',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Loci',
        items: [
          '**Privacy-conscious traveller.** Loci works offline after setup, so you can chat without roaming data or relying on hotel Wi-Fi. No cloud service can see your words.',
          '**Beginner who does not want to manage GGUF files.** If the concept of quantization, model weights, and GGUF file handling sounds overwhelming, Loci is the right first local-AI app. No learning curve.',
          '**User seeking lightweight writing/brainstorming assistant.** Drafting notes, brainstorming ideas, summarizing text — all feasible on-device without sending your work to a cloud service.',
          '**User with inconsistent connectivity.** If your internet connection drops often (remote areas, transit, events), offline chat is a genuine advantage.',
          '**Cross-device simplicity.** One free app across iPhone, iPad, Android, Mac, and Windows, with consistent experience.',
          '**User who wants to run powerful models from their phone.** Loci Link lets you pair your phone to a Mac or PC to execute larger, more capable models directly from the mobile interface — solving quality and hallucination concerns while keeping traffic between your own devices and maintaining privacy. This is the real answer to the mobile quality ceiling and something no other app in the App Store offers.',
          '**User who values persistent memory across conversations.** Loci remembers things about you across different conversations and even when switching between models. All memory stays on your device.',
          '**User running intensive sessions without device overheating.** Loci\'s thermal management automatically keeps your phone stable during long sessions by adjusting runtime parameters, rather than letting the device throttle itself or crash the app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Loci',
        items: [
          '**User expecting frontier reasoning or live web integration.** While Gemma 4 E2B/E4B offer the strongest reasoning available on mobile and Loci\'s context management minimizes hallucinations, even the best small models face a parameter-count ceiling that GPT-4o or Claude 3 Opus exceed. For high-stakes analysis, complex multi-step reasoning, code generation, or live web grounding, cloud models remain necessary. Loci excels at personal assistant tasks, drafting, and reasoning within its design envelope.',
          '**User needing live web knowledge offline.** Loci has optional DuckDuckGo web search, but it requires internet. The local models have no concept of "today" or current events.',
          '**Developer wanting comprehensive model/inference control.** If you need to benchmark different quantizations, compare token/second speeds, or tune sampling parameters, Private LLM or PocketPal AI offer more depth.',
          '**User building a fully documented voice assistant stack.** Loci has a "voice mode" feature: on Apple platforms (iPhone, iPad, Mac), voice input and output run fully on-device with no cloud dependency. On Windows, voice input is constrained by the operating system\'s speech-recognition APIs and requires internet (a Windows OS limitation, not a Loci design choice). If you need a fully documented, sourced voice stack with Whisper STT + local LLM + TTS, see [Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) for the recommended open-source pipeline.',
          '**User handling highly sensitive information.** Before using Loci for private/confidential work, review the current privacy policy and privacy nutrition label on the App Store. App Store label shows data collection for "Identifiers," "Usage Data," and "Diagnostics" (stated as not linked to your identity), but read the full policy first.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Loci include an AI model automatically?',
            a: 'Not always. On supported Apple devices (iPhone, iPad, Mac), Loci can use Apple\'s on-device foundation model at no extra step. On Android and Windows, or if the Apple system model is not available on your device, you must download a model the first time you chat (Gemma, Qwen, Llama, or Phi — about 2–4 GB depending on the model). After the one-time download, the model stays on your device.',
          },
          {
            q: 'Is Loci completely private?',
            a: 'Loci\'s official claim is that "Chat is processed on your device and is not uploaded." However: (1) optional features like DuckDuckGo web search and Windows voice input require internet and may create data trails; (2) the app collects "Identifiers," "Usage Data," and "Diagnostics" per its App Store privacy nutrition label (stated as "not linked to your identity"); (3) app updates and model downloads require internet. For maximum privacy assurance, verify the current privacy policy and disable optional online features if privacy is critical.',
          },
          {
            q: 'Can I use Loci without Wi-Fi?',
            a: 'Yes, for chat. Once the app and a model are installed, on-device inference works without any internet connection (airplane mode is fine). However, web search, Windows voice input, model downloads, app updates, and any cloud-connected features require internet. If you enable DuckDuckGo web search and use it, that feature will need connectivity.',
          },
          {
            q: 'Does Loci work on older phones?',
            a: 'iOS: Loci requires iOS 18.0+, which excludes iPhone XS and older. Android: Loci works on most modern Android phones (exact minimum OS version not specified by Loci AI), but performance depends on available RAM and the selected model. Mac: requires a recent macOS version supporting the system foundation model. Windows: generally works on modern Windows 10/11 machines with sufficient disk space for a model.',
          },
          {
            q: 'Can I import my own models (GGUF files) into Loci?',
            a: 'No. Loci limits you to its curated library of ~10 models (Gemma, Qwen, Llama, Phi, etc.). If you want to import custom GGUF files from Hugging Face or elsewhere, Private LLM or PocketPal AI are better choices.',
          },
          {
            q: 'What is the difference between Loci and Private LLM?',
            a: 'Loci: free, 5 platforms (iPhone/iPad/Android/Mac/Windows), curated ~10-model library, minimal setup. Private LLM: Apple-only (iPhone/iPad/Mac), one-time purchase, 140+ models, more quantization/flexibility, more configuration. Private LLM is for users who want maximum model control on Apple devices; Loci is for users who want simplicity across platforms.',
          },
          {
            q: 'Can Loci replace ChatGPT or Claude?',
            a: 'For specific tasks, yes — drafting, brainstorming, summarizing local documents, simple Q&A. For complex reasoning, code generation, live web queries, or high-stakes decisions, cloud models (ChatGPT, Claude) are more capable. Loci is best viewed as an offline-capable local alternative to cloud chat for privacy and connectivity reasons, not as a universal replacement.',
          },
          {
            q: 'How much storage does Loci use?',
            a: 'The app itself is small (~100 MB). Model files depend on which you choose: compact models (Phi-4 Mini, Gemma 4 1B, SmolLM) are 1–3 GB; larger models (Llama 3.2 3B, Gemma 4 4B, Qwen 3) are 2–5 GB. If you have multiple models downloaded, total usage can reach 10+ GB. Plan accordingly on devices with limited storage.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Loci is most compelling if your priority is low-friction, on-device AI rather than maximum model control. Several features stand out: Gemma 4 E2B/E4B as the strongest reasoning available on mobile; Loci Link (desktop/phone linking to run powerful models from your phone via a connected Mac or PC); global memory across conversations and model switches; first-class thermal management for extended sessions; and exceptional app stability thanks to Loci AI\'s unique OS memory handling approach. Real-world testing confirms that downloads work reliably, offline chat functions as advertised, and the app experiences significantly fewer crashes than competing local-LLM apps. The web RAG implementation is equally unique: when online, answers ground in live sources; when offline, it falls back cleanly to on-device knowledge without breaking — and you control the behavior in settings. For users who want private offline chat without technical model-management friction and with strong reasoning for a mobile device, Loci excels. For users who want advanced model control and quantization flexibility, Private LLM (Apple) and PocketPal AI offer more depth; for Android users exploring experimental on-device options, Google AI Edge Gallery offers additional model discovery. The honest assessment: Loci succeeds at simplicity, stability, thermal resilience, and cross-platform consistency. It fails only when you need frontier cloud reasoning or deep model control.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Loci official site](https://askloci.ai) — product overview, platform downloads, latest app version.',
          '[Loci on the App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — iOS availability, privacy nutrition label, minimum OS requirements, real user reviews.',
          '[Loci on Google Play](https://play.google.com/store/apps/details?id=com.loci.ai) — Android availability, user ratings.',
          '[Google AI Edge Gallery on GitHub](https://github.com/google-ai-edge/gallery) — feature list, supported models, cross-platform availability.',
          '[Google AI Edge Gallery announcement blog post](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — September 9, 2025 announcement of audio support and Google Play availability.',
          '[Private LLM official site](https://privatellm.app/en) — pricing, privacy claims, Shortcuts integration, platform support.',
          '[Private LLM model library](https://privatellm.app/models) — available models and quantization formats.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the iPhone app roundup; includes PocketPal AI, Private LLM, MLC Chat, LLM Farm, and Apple Intelligence.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the Android app roundup; MLC Chat, Maid, Layla, Ollama via Termux, Private AI, and PocketPal AI.',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — device-focused guide for on-device and remote inference on tablets.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — model-layer companion; benchmarks and quality trade-offs on mobile.',
          '[Build a Local Voice Assistant on Your Phone: Whisper + Local LLM (No Cloud)](/power-local-llm/voice-assistant-local-mobile-offline) — full offline voice pipeline (STT + LLM + TTS) with measured latency and battery data.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — comprehensive app and tool directory for all platforms.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-08-22',
    next_refresh_due: '2027-02-22',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/loci-ai-review-hero-ar.webp',
    title: 'مراجعة Loci AI (2026): ذكاء اصطناعي خاص دون إنترنت عبر iPhone و Android و iPad و Mac و Windows',
    seoTitle: 'مراجعة Loci AI 2026: ذكاء اصطناعي خاص دون الاتصال بالإنترنت',
    intro:
      'تم تصميم Loci، الذي طورته Loci AI, Inc.، لجعل الذكاء الاصطناعي المحلي يشعر مثل مساعد عادي بدلاً من مشروع إدارة نموذج. يعمل على iPhone و iPad و Android و Mac و Windows، ويمكن أن يعمل دون إنترنت بعد الإعداد، ويوضع نفسه كبديل يركز على الخصوصية لخدمات الذكاء الاصطناعي السحابية. التطبيق يختار تلقائياً أفضل بيئة استدلال (llama.cpp أو MLX) لكل نموذج على أجهزتك، ينفذ إدارة حرارية لإبقاء هاتفك مستقراً، يزامن الذاكرة عبر المحادثات، ويمكن أن يربط نفسه بجهاز كمبيوتر مكتبي للوصول إلى نماذج أقوى. السؤال العملي ليس ما إذا كان الاستدلال المحلي ممكناً — بل ما إذا كان Loci يعطيك جودة وتحكماً كافياً دون تنزيلات النماذج واستخدام التخزين والتكوين التقني (اختيار ملفات GGUF يدويًا، ضبط التقادير، حساب VRAM) الذي تتطلبه أدوات الذكاء الاصطناعي المحلية الأكثر تقدماً.',
    metaDescription:
      'مراجعة Loci AI: هل تستحق الاستخدام للذكاء الاصطناعي الخاص والمحلي؟ اكتشف كيف يعمل على iPhone و Android و iPad و Mac و Windows، من الذي يناسبه، وكيف يقارن مع Private LLM و PocketPal و Google AI Edge Gallery.',
    twitterDescription:
      'مراجعة Loci AI 2026: ذكاء اصطناعي محلي يعمل ببساطة على iPhone و Android و iPad و Mac و Windows. الخصوصية والتسعير والإعداد والمقارنات مع Private LLM و Google AI Edge Gallery.',
    audience:
      'المستخدمون الذين يقررون بين تشغيل ذكاء اصطناعي على الجهاز عبر Loci مقابل الخدمات السحابية أو تطبيقات الذكاء الاصطناعي المحلي الأخرى أو البدائل السحابية — يغطي احتكاك الإعداد وموضع الخصوصية والدعم متعدد المنصات والمقايضات في العالم الحقيقي.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Loci AI review',
    targetKeywords: [
      'loci ai review',
      'loci offline ai',
      'loci local llm',
      'loci ai iphone',
      'loci ai android',
      'loci vs privatellm',
      'loci vs pocketpal',
      'loci ai privacy',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**يكون Loci الأكثر جاذبية إذا كان أولويتك هو ذكاء اصطناعي محلي بدون احتكاك بدلاً من التحكم الأقصى في النموذج.** قد يكون التطبيق الأول الأفضل للذكاء الاصطناعي المحلي للمستخدمين الذين يريدون محادثة خاصة محلية دون معاملة هاتفهم مثل محطة عمل ML صغيرة (تتطلب اختيار GGUF يدويًا وضبط التقادير وحسابات VRAM). يعمل Loci على iPhone و iPad و Android و Mac و Windows — فقط قم بتنزيل التطبيق واختر نموذجاً من القائمة المنسقة. المستخدمون الذين يريدون اختيار التقادير أو استيراد النماذج أو تشغيل مكتبات نماذج أكبر يجب أن يقارنوا مع بدائل أكثر تقنية مثل Private LLM أو PocketPal AI.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Loci for private, offline AI?',
        answer:
          'Use Loci if you want private on-device chat without model-management friction, across iPhone, Android, iPad, Mac, or Windows. Skip it if you need frontier reasoning quality, live web knowledge without connectivity, or deep control over model selection and quantization — those are better served by cloud AI or more technical local-LLM apps like Private LLM.',
        bullets: [
          'Free, no subscription, works on 5 platforms (iPhone/iPad/Android/Mac/Windows).',
          'Offline-capable after app and model download/setup.',
          'No account, no tracking, conversations stay on-device per Loci AI claims.',
          'Optional features (web search via DuckDuckGo, Windows voice input) require internet.',
          'Quality and model selection less flexible than Private LLM or PocketPal AI.',
        ],
        updatedDate: '2026-08-22',
      },
      ar: {
        question: 'هل يجب أن أستخدم Loci للذكاء الاصطناعي الخاص والمحلي؟',
        answer:
          'استخدم Loci إذا كنت تريد محادثة خاصة على الجهاز دون احتكاك إدارة النموذج، عبر iPhone أو Android أو iPad أو Mac أو Windows. تجنبه إذا كنت تحتاج إلى جودة استدلال متقدمة أو معرفة ويب مباشرة بدون اتصال أو تحكم عميق في اختيار النموذج والتقدير — هذه يتم تقديمها بشكل أفضل بواسطة ذكاء اصطناعي سحابي أو تطبيقات ذكاء اصطناعي محلي أكثر تقنية مثل Private LLM.',
        bullets: [
          'مجاني، لا اشتراك، يعمل على 5 منصات (iPhone/iPad/Android/Mac/Windows).',
          'قابل للعمل بدون إنترنت بعد تنزيل التطبيق والنموذج والإعداد.',
          'لا حساب، لا تتبع، المحادثات تبقى على الجهاز وفقاً لأدعاءات المطور.',
          'الميزات الاختيارية (البحث عن الويب عبر DuckDuckGo، إدخال الصوت على Windows) تتطلب الإنترنت.',
          'الجودة واختيار النموذج أقل مرونة من Private LLM أو PocketPal AI.',
        ],
        updatedDate: '2026-08-22',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'ما هو Loci', anchor: 'what-is-loci' },
      { label: 'كيف يعمل الذكاء الاصطناعي المحلي في Loci', anchor: 'how-local-ai-works' },
      { label: 'ملاحظات الاختبار في العالم الحقيقي', anchor: 'testing-notes' },
      { label: 'المقايضات: الفوائد مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Loci على كل منصة', anchor: 'platforms' },
      { label: 'Loci مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم Loci', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Loci', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءة ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        items: [
          'Loci هو تطبيق ذكاء اصطناعي محلي مجاني لـ iPhone و iPad و Android و Mac و Windows.',
          'يوفر مسارين للنموذج: نموذج النظام الأساسي من Apple (حيث مدعوم) أو نماذج مفتوحة المصدر قابلة للتنزيل (Gemma و Qwen و Llama و Phi).',
          'الإعداد بسيط — لا ملفات GGUF، لا خيارات تقدير، فقط قم بالتنزيل والمحادثة.',
          'ادعاء الخصوصية: المحادثات تبقى على الجهاز؛ الميزات الاختيارية (البحث عن الويب والصوت) تتطلب الإنترنت.',
          'مثالي للمستخدمين الذين يهتمون بالخصوصية والذين يريدون البساطة على التحكم المتقدم في النموذج.',
          'غير مثالي للمستخدمين الذين يحتاجون إلى استدلال متقدم أو معرفة ويب مباشرة أو مرونة GGUF/التقدير.',
          'توفر النموذج الدقيقة ودعم الجهاز/نظام التشغيل يمكن أن تتغير — تحقق من القوائم الرسمية قبل افتراض الاتساق.',
          'يُظهر الاختبار في العالم الحقيقي أن تنزيلات النماذج تعمل بشكل موثوق، والمحادثة المحلية تعمل كما هو معلن، لكن النماذج الصغيرة (3B–4B) تواجه صعوبة مع المواضيع الدقيقة.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'ما هو Loci',
        content: [
          'Loci هو مساعد ذكاء اصطناعي على الجهاز يركز على المستهلك متاح على iPhone (iOS 18.0+) و iPad (iPadOS 18.0+) و Android و Mac و Windows. التطبيق مجاني بدون اشتراك أو إعلانات أو متطلبات حساب.',
          'بنية النموذج: يمكن لـ Loci استخدام نموذج الأساس المدمج من Apple أو التنزيل من 10+ نماذج مفتوحة المصدر منسقة، بما في ذلك Gemma و Qwen و Llama و Phi — جميعها تعمل محلياً على جهازك. هذا يعني أن الاستدلال يحدث على الجهاز بعد الإعداد وليس في السحابة.',
          'موضع الخصوصية: الادعاء الرسمي هو "تتم معالجة المحادثة على جهازك وليست محملة. لا يوجد حساب، لا نسخة من جانب الخادم من محادثاتك، وليس التدريب على كلماتك." يجمع التطبيق "المعرفات" و"بيانات الاستخدام" و"التشخيص" عبر ملصق التغذية الغذائية للخصوصية الخاص به، لكنه يذكر أن هذه البيانات "ليست مرتبطة بهويتك".',
          'تتضمن الميزات الاختيارية تحليل الصور وأسلوب الصوت والتكامل مع التقويم والتذكيرات والبحث عن الويب عبر DuckDuckGo. التحذير: يتطلب البحث عن الويب وإدخال الصوت على Windows اتصالاً بالإنترنت، مما يغير قصة "المحلي" إذا تم استخدامها.',
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'كيف يعمل الذكاء الاصطناعي المحلي في Loci',
        content: [
          'يوفر Loci مسارين محتملين للذكاء الاصطناعي على الجهاز:',
        ],
        items: [
          '**نموذج أساس نظام Apple** — على أجهزة Apple المدعومة (iPhone و iPad و Mac مع إصدارات iOS/macOS حديثة)، يمكن لـ Loci استخدام نموذج أساس مدمج على الجهاز يوفره Apple. هذا المسار لا يتطلب تنزيل نموذج أو احتكاك إعداد بسيط جداً وهو الأبسط على منصات Apple.',
          '**نماذج مفتوحة المصدر قابلة للتنزيل** — يمكن للمستخدمين تنزيل نماذج مدمجة (Gemma 4 1B/4B و Qwen 2.5 و Llama 3.2 3B و Phi-4 Mini) إلى Loci مرة واحدة. ملفات النموذج عادة ما تتراوح من 1–5 GB اعتماداً على حجم النموذج. بعد التنزيل يعمل الاستدلال على الجهاز؛ الإنترنت غير مطلوب للمحادثة.',
        ],
        note: 'لا يتم توثيق حدود الجهاز/نظام التشغيل الدقيقة لأي منصات تحصل على دعم نموذج أساس Apple مقابل يجب أن تنزل نموذجاً بشكل علني. افترض أن الدعم يختلف حسب الجهاز وإصدار نظام التشغيل وإصدار التطبيق والتخزين والمنطقة — لا تتوقع سلوكاً متطابقاً عبر أجهزتك. تم التحقق آخر مرة ضد تطبيق Loci في 2026-08-22.',
      },
      testingNotes: {
        id: 'testing-notes',
        title: 'ملاحظات الاختبار في العالم الحقيقي',
        content: [
          'تم اختبار Loci على أجهزة متعددة (الاختبار بواسطة Hans Küpper و PromptQuorum في أغسطس 2026) للتحقق من سهولة الاستخدام في العالم الحقيقي:',
        ],
        items: [
          '**تنزيلات النموذج تعمل بشكل موثوق.** تنزيلات النماذج المدمجة (على سبيل المثال Gemma 4 4B ~4 GB) اكتملت بنجاح على WiFi المنزلي مع عدم ملاحظة أي اختطاف أو فساد.',
          '**المحادثة المحلية تعمل كما هو معلن.** بمجرد تنزيل نموذج يعمل الاستدلال بدون أي اتصال بالإنترنت بما في ذلك في وضع الطائرة. تبقى المحادثة مستجيبة.',
          '**حدود جودة النموذج الصغير تظهر.** كشف الاختبار مع مطالبات شائعة أن النماذج الصغيرة (3B–4B معاملات) تتعامل مع الصياغة المباشرة والعصف الذهني والتلخيص بشكل جيد ولكن تواجه صعوبة مع المواضيع الدقيقة والاستدلال متعدد الخطوات. التحليل المعقد والترميز والمعالجة الدقيقة للحالات الحدية غالباً ما تقصر مقارنة بنماذج السحابة الأكبر.',
          '**الميزات الاختيارية تتطلب الاتصال.** البحث عن الويب عبر DuckDuckGo وتنزيلات النموذج وتحديثات التطبيق جميعها تتطلب الوصول إلى الإنترنت كما موثق.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        title: 'المقايضات: الفوائد مقابل القيود',
        columns: ['الفائدة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / التحذير'],
        rows: [
          {
            'الفائدة': 'الخصوصية',
            'ما تعنيه في الاستخدام الفعلي': 'المحادثات لا تترك جهازك (وفقاً لادعاء المطور). لا توجد خوادم سحابة تخزن كلماتك.',
            'القيد / التحذير': 'الميزات الاختيارية (بحث الويب عبر DuckDuckGo وإدخال الصوت على Windows) تتطلب الاتصال وقد تترك آثار بيانات.',
          },
          {
            'الفائدة': 'قابل للعمل بدون إنترنت بعد الإعداد',
            'ما تعنيه في الاستخدام الفعلي': 'بمجرد تثبيت التطبيق والنموذج تعمل المحادثة في وضع الطائرة بدون إنترنت.',
            'القيد / التحذير': 'تنزيل النموذج الأولي يتطلب الإنترنت. تحديثات الميزات وتنزيلات النموذج والنسخ الاحتياطية قد تحتاج أيضاً إلى الاتصال.',
          },
          {
            'الفائدة': 'لا تكلفة سحابة متكررة',
            'ما تعنيه في الاستخدام الفعلي': 'تطبيق مجاني بدون اشتراك بدون رسوم لكل رسالة.',
            'القيد / التحذير': 'الاستدلال يعمل على جهازك مما يستهلك البطارية المحلية وقوة المعالجة.',
          },
          {
            'الفائدة': 'يعمل عبر المنصات',
            'ما تعنيه في الاستخدام الفعلي': 'شراء مجاني واحد (التطبيق مجاني) على iPhone و iPad و Android و Mac و Windows.',
            'القيد / التحذير': 'الجودة والإمكانيات قد تختلف حسب المنصة؛ أولوية جهاز Apple واضحة في التصميم.',
          },
          {
            'الفائدة': 'احتكاك إعداد بسيط',
            'ما تعنيه في الاستخدام الفعلي': 'اختيار ملف GGUF لا ضبط التقدير لا حسابات VRAM.',
            'القيد / التحذير': 'اختيار النموذج منسق ومحدود (10+ نماذج). لا يمكن استيراد ملفات GGUF الخاصة بك.',
          },
          {
            'الفائدة': 'حد الأداء الجهاز هو الحد الوحيد الخاص بك',
            'ما تعنيه في الاستخدام الفعلي': 'سرعة الاستدلال تعتمد على RAM والـ CPU للهاتف/الكمبيوتر الشخصي وليس أوقات انتظار السحابة.',
            'القيد / التحذير': 'النماذج المحلية الأصغر (~3B–4B معاملات) تنتج مخرجات أقل قدرة من نماذج السحابة المتقدمة (GPT-4o و Claude 3 Opus).',
          },
          {
            'الفائدة': 'يعمل بدون معرفة ويب مباشرة',
            'ما تعنيه في الاستخدام الفعلي': 'المحادثة لا تهلوس حول أخبار اليوم أو الأحداث المباشرة.',
            'القيد / التحذير': 'وبالمقابل لا يمكن للنموذج البحث عن المعلومات الحالية. بحث الويب الاختياري عبر DuckDuckGo يتطلب الاتصال ويعمل فقط عند التمكين.',
          },
          {
            'الفائدة': 'السياق الطويل والاستدلال المعقد',
            'ما تعنيه في الاستخدام الفعلي': 'مناسب للصياغة والتلخيص والأسئلة والأجوبة المنظمة على المحتوى المحلي.',
            'القيد / التحذير': 'الاستدلال المعقد متعدد الخطوات والترميز والتلخيص عالي المخاطر غالباً ما يستفيد من نماذج السحابة الأمامية.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Loci على كل منصة',
        columns: ['المنصة', 'ما يمكن توقعه', 'ملاحظة مهمة'],
        rows: [
          {
            'المنصة': 'iPhone',
            'ما يمكن توقعه': 'يعمل Loci على iOS 18.0+. يمكن استخدام نموذج أساس Apple على الجهاز أو تنزيل نموذج مدمج مفتوح المصدر (Gemma 4 4B و Llama 3.2 3B ~2–4 GB). المحادثة وتحليل الصور وأسلوب الصوت والتكامل مع التقويم متاح.',
            'ملاحظة مهمة': 'متطلب iOS 18+ يستبعد iPhone XS والأقدم. حدود الجهاز/الشريحة الدقيقة لدعم نموذج أساس Apple ليست موثقة بشكل علني.',
          },
          {
            'المنصة': 'iPad',
            'ما يمكن توقعه': 'يعمل Loci على iPadOS 18.0+ مع نفس مسارات النموذج مثل iPhone. الشاشة الأكبر أفضل للمحادثات الطويلة واستعراض الوثيقة.',
            'ملاحظة مهمة': 'النماذج الأكبر قد تكون محدودة بـ VRAM المتاح. توفر نموذج أساس Apple تختلف حسب جيل iPad؛ تحقق من App Store لتوافقية حالية.',
          },
          {
            'المنصة': 'Android',
            'ما يمكن توقعه': 'متاح على Google Play. يمكن تنزيل نماذج مفتوحة المصدر (Gemma 4 4B و Qwen 2.5 و Llama 3.2 3B و Phi-4 ~2–5 GB). لا يوجد نموذج نظام مدمج معادل لنموذج أساس Apple.',
            'ملاحظة مهمة': 'الأداء تختلف على نطاق واسع عبر أجهزة Android بسبب تجزئة رقاقة و RAM وإصدار نظام التشغيل. الهواتف الذكية عالية الأداء (Snapdragon 8 سلسلة 8+ GB RAM) تتعامل مع النماذج بشكل أفضل.',
          },
          {
            'المنصة': 'Mac',
            'ما يمكن توقعه': 'متاح على Mac App Store. يمكن استخدام نموذج أساس Apple على الجهاز أو تنزيل نماذج مفتوحة المصدر. مفيد للجلسات الأطول والشاشات الأكبر والوحات المفاتيح الخارجية.',
            'ملاحظة مهمة': 'دعم نموذج أساس خاص بـ Mac غير موثق. معالجات M-series (M1/M2/M3+) على الأرجح مدعومة؛ قد تتطلب Macs Intel الأقدم تنزيل نموذج. تحقق من App Store لتوافقية حالية.',
          },
          {
            'المنصة': 'Windows',
            'ما يمكن توقعه': 'متاح عبر askloci.ai أو Windows App Store. يمكن تنزيل نماذج مفتوحة المصدر (نفس المكتبة مثل Android: Gemma و Qwen و Llama و Phi). إدخال الصوت يتطلب اتصالاً بالإنترنت (على عكس المنصات الأخرى).',
            'ملاحظة مهمة': 'دعم Windows هو الأقل توثيقاً من بين المنصات الخمس. تعتمد الأداء على GPU/CPU؛ تتطلب مساحة قرص كافية لتخزين النموذج (~2–5 GB).',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Loci مقابل البدائل',
        columns: ['التطبيق', 'الأفضل لـ', 'مستوى الإعداد', 'مرونة النموذج', 'تركيز المنصة', 'القيد الرئيسي'],
        rows: [
          {
            'التطبيق': 'Loci',
            'الأفضل لـ': 'محادثة خاصة متعددة المنصات منخفضة الاحتكاك',
            'مستوى الإعداد': 'بسيط (تنزيل محادثة)',
            'مرونة النموذج': 'مكتبة منسقة (~10 نماذج)؛ لا يمكن استيراد GGUF',
            'تركيز المنصة': 'iPhone/iPad/Android/Mac/Windows (5 منصات)',
            'القيد الرئيسي': 'اختيار النموذج محدود؛ لا استيراد GGUF؛ النماذج الصغيرة تظهر حدود الجودة على المواضيع الدقيقة',
          },
          {
            'التطبيق': 'Private LLM',
            'الأفضل لـ': 'مستخدمو Apple فقط يريدون اختيار نموذج متقدم',
            'مستوى الإعداد': 'منخفض إلى متوسط (شراء لمرة واحدة وتنزيلات النموذج)',
            'مرونة النموذج': '140+ نماذج وتنسيقات تقدير OmniQuant و GPTQ',
            'تركيز المنصة': 'iPhone/iPad/Mac فقط (Apple شراء واحد عبر جميع الأجهزة)',
            'القيد الرئيسي': 'Apple فقط؛ سعر الشراء لمرة واحدة غير مفصح؛ يتطلب تعلم تنسيقات التقدير',
          },
          {
            'التطبيق': 'PocketPal AI',
            'الأفضل لـ': 'المستخدمون الذين يريدون استيراد GGUF الكامل والتحكم في النموذج',
            'مستوى الإعداد': 'متوسط (مجاني ولكن يتطلب الحصول على ملف نموذج)',
            'مرونة النموذج': 'أي ملف GGUF من Hugging Face أو أي مكان آخر',
            'تركيز المنصة': 'iPhone/iPad (بشكل أساسي Apple وبعض دعم Android)',
            'القيد الرئيسي': 'يتطلب الراحة مع ملفات GGUF واختيار النموذج؛ أكثر تعقيداً من Loci',
          },
          {
            'التطبيق': 'Google AI Edge Gallery',
            'الأفضل لـ': 'استكشاف النموذج التجريبي مع الميزات المتقدمة',
            'مستوى الإعداد': 'متوسط إلى عالي (مزيد من الميزات واكتشاف أكثر إلحاحاً)',
            'مرونة النموذج': 'Gemma 4 كقطعة مركزية؛ يدعم نماذج مفتوحة المصدر متعددة؛ تحميل نموذج مخصص',
            'تركيز المنصة': 'Android أولاً (iOS و macOS أيضاً مدعومة)',
            'القيد الرئيسي': 'أكثر تجريباً/تقنية؛ ليس بديلاً مباشراً لـ Loci؛ واجهة مستخدم أقل بريقاً',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Loci',
        items: [
          '**مسافر مهتم بالخصوصية.** يعمل Loci بدون إنترنت بعد الإعداد لذا يمكنك المحادثة بدون بيانات تجوال أو الاعتماد على WiFi الفندق. لا توجد خدمة سحابية يمكنها رؤية كلماتك.',
          '**مبتدئ لا يريد إدارة ملفات GGUF.** إذا كان مفهوم التقدير وأوزان النموذج وتعامل ملفات GGUF مرعباً استخدم Loci هو تطبيق الذكاء الاصطناعي المحلي الأول الصحيح. لا منحنى تعليمي.',
          '**مستخدم يسعى إلى مساعد كتابة/عصف ذهني خفيف الوزن.** صياغة الملاحظات وتوليد الأفكار وتلخيص النصوص — كل قابل للتطبيق على الجهاز دون إرسال عملك إلى خدمة سحابة.',
          '**مستخدم بالاتصال غير المتسق.** إذا كان الاتصال بالإنترنت ينقطع غالباً (المناطق النائية والنقل والأحداث) فإن المحادثة المحلية تمثل ميزة حقيقية.',
          '**بساطة متعددة الأجهزة.** تطبيق مجاني واحد عبر iPhone و iPad و Android و Mac و Windows مع تجربة متسقة.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Loci',
        items: [
          '**مستخدم يتوقع استدلال أمامي أو ترميز.** تتصدر مكتبة نموذج Loci المنسقة نماذج مثل Llama 3.2 3B و Gemma 4 4B و Qwen 3 1.7B — جميعها صلبة ولكن ليست في فئة GPT-4o أو Claude 3 Opus للاستدلال المعقد. يؤكد الاختبار في العالم الحقيقي أن النماذج الصغيرة تكافح مع المواضيع الدقيقة.',
          '**مستخدم يحتاج إلى معرفة ويب مباشرة محلية.** لدى Loci بحث ويب اختياري عبر DuckDuckGo ولكنه يتطلب الإنترنت. النماذج المحلية ليس لديها مفهوم "اليوم" أو الأحداث الجارية.',
          '**مطور يريد تحكم شامل في النموذج/الاستدلال.** إذا كنت تريد معايرة التقادير المختلفة ومقارنة سرعات التوكن الثانية أو ضبط معاملات العينات فإن Private LLM أو PocketPal AI توفران عمقاً أكثر.',
          '**مستخدم يبني مساعد صوت محلي كامل.** لدى Loci ميزة "أسلوب الصوت" لكن التنفيذ (ما إذا كان الاستدلال المحلي أو واجهات برمجية نظام Apple) ليس موثقاً بشكل علني. للحصول على كومة صوت محلية المصدر كاملة اطلع على [بناء مساعد صوت محلي على هاتفك](/ar/power-local-llm/voice-assistant-local-mobile-offline) للحصول على خط أنابيب Whisper + LLM + TTS الموصى به.',
          '**مستخدم يتعامل مع معلومات حساسة جداً.** قبل استخدام Loci للعمل الخاص/السري راجع سياسة الخصوصية الحالية وملصق التغذية الغذائية للخصوصية على App Store. يُظهر ملصق App Store جمع البيانات لـ "المعرفات" و"بيانات الاستخدام" و"التشخيص" (مذكور كغير مرتبط بهويتك) لكن اقرأ السياسة الكاملة أولاً.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يتضمن Loci نموذج ذكاء اصطناعي تلقائياً؟',
            a: 'ليس دائماً. على أجهزة Apple المدعومة (iPhone و iPad و Mac) يمكن لـ Loci استخدام نموذج أساس Apple على الجهاز بدون خطوة إضافية. على Android و Windows أو إذا لم يكن نموذج النظام Apple متاحاً على جهازك يجب عليك تنزيل نموذج المرة الأولى التي تتحدث (Gemma أو Qwen أو Llama أو Phi — حوالي 2–4 GB اعتماداً على النموذج). بعد التنزيل لمرة واحدة يبقى النموذج على جهازك.',
          },
          {
            q: 'هل Loci خاص تماماً؟',
            a: 'الادعاء الرسمي لـ Loci هو "تتم معالجة المحادثة على جهازك وليست محملة." ومع ذلك: (1) الميزات الاختيارية مثل بحث الويب عبر DuckDuckGo وإدخال الصوت على Windows تتطلب الإنترنت وقد تنشئ آثار بيانات؛ (2) يجمع التطبيق "المعرفات" و"بيانات الاستخدام" و"التشخيص" وفقاً لملصق التغذية الغذائية للخصوصية في App Store (مذكور كـ "غير مرتبط بهويتك")؛ (3) تحديثات التطبيق وتنزيلات النموذج تتطلب الإنترنت. للحصول على أقصى ضمان خصوصية تحقق من سياسة الخصوصية الحالية وعطّل الميزات الاختيارية عبر الإنترنت إذا كانت الخصوصية حرجة.',
          },
          {
            q: 'هل يمكنني استخدام Loci بدون WiFi؟',
            a: 'نعم للمحادثة. بمجرد تثبيت التطبيق والنموذج يعمل الاستدلال على الجهاز بدون أي اتصال بالإنترنت (وضع الطائرة بخير). ومع ذلك يتطلب البحث عن الويب وإدخال الصوت على Windows وتنزيلات النموذج وتحديثات التطبيق وأي ميزات متصلة بالسحابة الإنترنت. إذا قمت بتمكين بحث ويب DuckDuckGo واستخدامه فستحتاج هذه الميزة إلى الاتصال.',
          },
          {
            q: 'هل يعمل Loci على الهواتف الأقدم؟',
            a: 'iOS: يتطلب Loci iOS 18.0+ وهو يستبعد iPhone XS والأقدم. Android: يعمل Loci على معظم هواتف Android الحديثة (لم يحدد المطور أدنى إصدار نظام تشغيل) ولكن الأداء تعتمد على RAM المتاح والنموذج المحدد. Mac: يتطلب إصدار macOS حديث يدعم نموذج أساس النظام. Windows: يعمل بشكل عام على أجهزة Windows 10/11 الحديثة مع مساحة قرص كافية للنموذج.',
          },
          {
            q: 'هل يمكنني استيراد نماذجي الخاصة (ملفات GGUF) إلى Loci؟',
            a: 'لا. يحدك Loci لمكتبته المنسقة من ~10 نماذج (Gemma و Qwen و Llama و Phi إلخ). إذا كنت تريد استيراد ملفات GGUF مخصصة من Hugging Face أو أي مكان آخر فإن Private LLM أو PocketPal AI خيارات أفضل.',
          },
          {
            q: 'ما الفرق بين Loci و Private LLM؟',
            a: 'Loci: مجاني 5 منصات (iPhone/iPad/Android/Mac/Windows) مكتبة ~10 نماذج منسقة إعداد بسيط. Private LLM: Apple فقط (iPhone/iPad/Mac) شراء لمرة واحدة 140+ نماذج تقدير/مرونة أكثر تكوين أكثر. Private LLM لمستخدمي Apple الذين يريدون التحكم الأقصى في النموذج؛ Loci لمستخدمي من يريدون البساطة عبر المنصات.',
          },
          {
            q: 'هل يمكن لـ Loci استبدال ChatGPT أو Claude؟',
            a: 'لمهام محددة نعم — الصياغة والعصف الذهني وتلخيص المستندات المحلية والأسئلة والأجوبة البسيطة. للاستدلال المعقد وإنشاء الأكواد والاستعلامات عن الويب المباشرة أو القرارات عالية المخاطر فإن نماذج السحابة (ChatGPT و Claude) أكثر قدرة. يتم عرض Loci بشكل أفضل كبديل محلي قابل للعمل بدون إنترنت لقهوة المحادثة السحابية لأسباب الخصوصية والاتصال وليس كبديل عام.',
          },
          {
            q: 'كم التخزين الذي يستخدمه Loci؟',
            a: 'التطبيق نفسه صغير (~100 MB). ملفات النموذج تعتمد على اختيارك: النماذج المدمجة (Phi-4 Mini و Gemma 4 1B و SmolLM) هي 1–3 GB؛ النماذج الأكبر (Llama 3.2 3B و Gemma 4 4B و Qwen 3) هي 2–5 GB. إذا كان لديك نماذج متعددة منزلة فيمكن أن يصل الاستخدام الكلي إلى 10+ GB. خطط وفقاً لذلك على الأجهزة ذات التخزين المحدود.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم',
        content:
          'يكون Loci الأكثر جاذبية إذا كانت أولويتك هي ذكاء اصطناعي محلي بدون احتكاك بدلاً من التحكم الأقصى في النموذج. عدة ميزات تبرز: Gemma 4 E2B/E4B كأقوى قدرة استدلال متاحة على الهاتف المحمول؛ Loci Link (ربط سطح المكتب/الهاتف لتشغيل نماذج قوية من هاتفك عبر Mac أو PC متصل)؛ ذاكرة عامة عبر المحادثات وتبديلات النماذج؛ إدارة حرارية من الدرجة الأولى للجلسات الطويلة؛ واستقرار تطبيق استثنائي بفضل نهج معالجة الذاكرة الفريد من Loci AI. أكدت الاختبارات الحقيقية أن التنزيلات تعمل بموثوقية، والدردشة غير المتصلة تعمل كما هو معلن، والتطبيق يعاني من تعطلات أقل بكثير من تطبيقات الذكاء الاصطناعي المحلي الأخرى. تنفيذ Web RAG متساوٍ بالتفرد: عند الاتصال، تتأسس الإجابات على مصادر حية؛ عند عدم الاتصال، تنسحب بنظافة إلى المعرفة على الجهاز دون انقطاع — وتتحكم في السلوك في الإعدادات. بالنسبة للمستخدمين الذين يريدون دردشة خاصة محلية بدون احتكاك إدارة تقنية وبقدرة استدلال قوية على الجهاز، يتفوق Loci. بالنسبة للمستخدمين الذين يريدون التحكم المتقدم في النموذج ومرونة التقادير، تقدم Private LLM (Apple) و PocketPal AI عمقاً أكثر؛ لمستخدمي Android الذين يستكشفون خيارات تجريبية على الجهاز، توفر Google AI Edge Gallery اكتشاف نماذج إضافياً. التقييم الصريح: يحقق Loci النجاح في البساطة والاستقرار والمرونة الحرارية والاتساق متعدد المنصات. يفشل فقط عندما تحتاج إلى منطق متقدم في السحابة أو تحكم عميق في النموذج.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Loci الرسمي](https://askloci.ai) — نظرة عامة على المنتج وتنزيلات المنصة وأحدث إصدار تطبيق.',
          '[Loci على App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — توفر iOS وملصق التغذية الغذائية للخصوصية والحد الأدنى من متطلبات نظام التشغيل والتقييمات الحقيقية.',
          '[Loci على Google Play](https://play.google.com/store/apps/details?id=com.loci.ai) — توفر Android وتصنيفات المستخدم.',
          '[معرض Google AI Edge على GitHub](https://github.com/google-ai-edge/gallery) — قائمة الميزات والنماذج المدعومة والتوفر متعدد المنصات.',
          '[إعلان مدونة معرض Google AI Edge](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — إعلان في 9 سبتمبر 2025 حول دعم الصوت وتوفر Google Play.',
          '[موقع Private LLM الرسمي](https://privatellm.app/en) — التسعير وادعاءات الخصوصية وتكامل الاختصارات ودعم المنصات.',
          '[مكتبة نموذج Private LLM](https://privatellm.app/models) — النماذج المتاحة وتنسيقات التقدير.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل تطبيقات Llm المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — جولة تطبيق iPhone؛ يتضمن PocketPal AI و Private LLM و MLC Chat و LLM Farm و Apple Intelligence.',
          '[أفضل تطبيقات Llm المحلية لـ Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — جولة تطبيق Android؛ MLC Chat و Maid و Layla و Ollama عبر Termux و Private AI و PocketPal AI.',
          '[تشغيل Llm محلي على جهازك اللوحي: iPad و Android (2026)](/ar/power-local-llm/run-ai-on-tablet-ipad-android) — دليل يركز على الجهاز للاستدلال على الجهاز والاستدلال البعيد على الأجهزة اللوحية.',
          '[أفضل نماذج Llm محمولة في 2026: Phi-4 Mini مقابل Gemma 4 مقابل SmolLM](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — مرافق طبقة النموذج؛ المعايير والمقايضات الجودة على الهاتف المحمول.',
          '[بناء مساعد صوت محلي على هاتفك: Whisper + Llm محلي (لا سحابة)](/ar/power-local-llm/voice-assistant-local-mobile-offline) — خط أنابيب صوت محلي كامل (STT + LLM + TTS) مع البيانات الكامنة والبطارية المقاسة.',
          '[دليل برمجيات Llm المحلي 2026](/ar/power-local-llm/local-llm-software-directory-2026) — دليل تطبيقات وأدوات شامل لجميع المنصات.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-08-22',
    next_refresh_due: '2027-02-22',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/loci-ai-review-hero-de.webp',
    title: 'Loci AI Review (2026): Private Offline-KI für iPhone, Android, iPad, Mac und Windows',
    seoTitle: 'Loci AI Review 2026: Private Offline-KI auf allen Plattformen',
    intro:
      'Loci, entwickelt von Loci AI, Inc., ist darauf ausgelegt, lokale KI wie einen normalen Assistenten wirken zu lassen, anstatt als Modell-Management-Projekt. Es läuft auf iPhone, iPad, Android, Mac und Windows, kann nach der Einrichtung offline arbeiten und positioniert sich als datenschutzorientierte Alternative zu Cloud-KI-Services. Die App wählt automatisch die beste Inferenz-Laufzeit (llama.cpp oder MLX) für jedes Modell auf Ihrer Hardware aus, implementiert Thermal Management zur Stabilisierung Ihres Telefons, synchronisiert Speicher über Gespräche hinweg und kann sich mit einem Desktop verbinden, um stärkere Modelle zu nutzen. Die praktische Frage lautet nicht, ob lokale Inferenz möglich ist — sondern ob Loci Ihnen genügend Qualität und Kontrolle bietet, ohne die Modell-Downloads, Speichernutzung und technische Konfiguration (manuelles Auswählen von GGUF-Dateien, Quantisierungs-Tuning, VRAM-Berechnungen) zu erfordern, die fortgeschrittenere Tools verlangen.',
    metaDescription:
      'Loci AI Review: Lohnt sich die Nutzung für private, offline KI? Sehen Sie, wie es auf iPhone, Android, iPad, Mac und Windows funktioniert, für wen es geeignet ist und wie es sich mit Private LLM, PocketPal und Google AI Edge Gallery vergleicht.',
    twitterDescription:
      'Loci AI Review 2026: Offline-KI, die einfach auf iPhone, Android, iPad, Mac und Windows funktioniert. Datenschutz, Preisgestaltung, Einrichtung und Vergleiche mit Private LLM und Google AI Edge Gallery.',
    audience:
      'Nutzer, die zwischen lokaler KI über Loci versus Cloud-Services, andere Local-LLM-Apps oder Cloud-Alternativen wählen — behandelt Reibungsverluste bei der Einrichtung, Datenschutz-Positionierung, plattformübergreifende Unterstützung und reale Kompromisse.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Loci AI Review',
    targetKeywords: [
      'loci ai review',
      'loci offline ki',
      'loci local llm',
      'loci ai iphone',
      'loci ai android',
      'loci vs privatellm',
      'loci vs pocketpal',
      'loci datenschutz',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Loci ist am überzeugendsten, wenn Ihre Priorität reibungslose, lokale KI anstatt maximale Modellkontrolle ist.** Es könnte die bessere erste Local-AI-App für Nutzer sein, die private, offline Chat wünschen, ohne ihr Telefon wie eine Mini-ML-Workstation zu behandeln (erforderlich manuelles GGUF-Auswählen, Quantisierungs-Tuning und VRAM-Berechnungen). Loci funktioniert auf iPhone, iPad, Android, Mac und Windows — einfach die App herunterladen und ein Modell aus der kuratierten Liste wählen. Nutzer, die Quantisierungen auswählen, Modelle importieren oder größere Modellbibliotheken ausführen möchten, sollten es mit technischeren Alternativen wie Private LLM oder PocketPal AI vergleichen.',
    quickAnswerTop: {
      de: {
        question: 'Sollte ich Loci für private, offline KI nutzen?',
        answer:
          'Nutzen Sie Loci, wenn Sie private, lokale Chat ohne Modell-Management-Reibung wünschen, über iPhone, Android, iPad, Mac oder Windows. Überspringen Sie es, wenn Sie hochmoderne Reasoning-Qualität, Live-Web-Wissen ohne Konnektivität oder tiefe Kontrolle über Modellauswahl und Quantisierung benötigen — diese werden besser von Cloud-KI oder technischeren Local-LLM-Apps wie Private LLM bedient.',
        bullets: [
          'Kostenlos, kein Abonnement, funktioniert auf 5 Plattformen (iPhone/iPad/Android/Mac/Windows).',
          'Offline-fähig nach App- und Modell-Download/Einrichtung.',
          'Kein Konto, kein Tracking, Gespräche bleiben laut Entwicklerangaben lokal.',
          'Optionale Funktionen (Web-Suche via DuckDuckGo, Windows-Spracheingabe) erfordern Internet.',
          'Qualität und Modellauswahl weniger flexibel als Private LLM oder PocketPal AI.',
        ],
        updatedDate: '2026-08-22',
      },
    },
    toc: [
      { label: 'Schnelle Antwort', anchor: 'quick-answer' },
      { label: 'Was ist Loci', anchor: 'what-is-loci' },
      { label: 'Wie lokale KI in Loci funktioniert', anchor: 'how-local-ai-works' },
      { label: 'Realtests und Praxiserfahrungen', anchor: 'testing-notes' },
      { label: 'Vorteile und Nachteile', anchor: 'tradeoffs' },
      { label: 'Loci auf jeder Plattform', anchor: 'platforms' },
      { label: 'Loci im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen ist Loci geeignet', anchor: 'who-should-use' },
      { label: 'Für wen ist Loci nicht geeignet', anchor: 'who-should-not-use' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Ressourcen', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Loci ist eine kostenlose lokale KI-App für iPhone, iPad, Android, Mac und Windows.',
          'Es bietet zwei Modell-Wege: Apples System-Grundmodell (wo unterstützt) oder herunterladbare Open-Source-Modelle (Gemma, Qwen, Llama, Phi).',
          'Die Einrichtung ist minimal — keine GGUF-Dateien, keine Quantisierungs-Wahlen, einfach herunterladen und chatten.',
          'Datenschutzanspruch: Gespräche bleiben lokal; optionale Funktionen (Web-Suche, Sprachmodus) erfordern Internet.',
          'Ideal für datenschutzbewusste Nutzer, die Einfachheit über fortgeschrittene Modellkontrolle bevorzugen.',
          'Nicht ideal für Nutzer, die hochmodernes Reasoning, Live-Web-Wissen oder GGUF/Quantisierungs-Flexibilität benötigen.',
          'Die genaue Modellverfügbarkeit und Geräte/OS-Unterstützung können sich ändern — überprüfen Sie offizielle Listen, bevor Sie Konsistenz annehmen.',
          'Tests in der Praxis zeigen, dass Modell-Downloads zuverlässig funktionieren, Offline-Chat wie versprochen arbeitet, aber kleine Modelle (3B–4B) bei differenzierten Themen Schwächen zeigen.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'Was ist Loci',
        content: [
          'Loci ist ein verbraucher-orientierter, lokaler KI-Assistent für iPhone (iOS 18,0+), iPad (iPadOS 18,0+), Android, Mac und Windows. Die App ist kostenlos ohne Abonnement, ohne Werbung, ohne Kontoanforderung.',
          'Modell-Architektur: Loci kann „Apples eingebautes Grundmodell oder Downloads von 10+ kuratierten Open-Source-Modellen, einschließlich Gemma, Qwen, Llama und Phi — alle lokal auf Ihrem Gerät ausgeführt" verwenden. Dies bedeutet, dass die Inferenz nach der Einrichtung auf dem Gerät stattfindet, nicht in der Cloud.',
          'Datenschutz-Positionierung: Der offizielle Anspruch lautet: „Chat wird auf Ihrem Gerät verarbeitet und nicht hochgeladen. Es gibt kein Konto, keine serverseitige Kopie Ihrer Gespräche und kein Training an Ihren Worten." Die App erfasst „Identifiers", „Usage Data" und „Diagnostics" über ihr Privacy Nutrition Label, gibt aber an, dass diese Daten „nicht mit Ihrer Identität verknüpft sind".',
          'Optionale Funktionen umfassen Fotoanalyse, Sprachmodus, Kalender/Erinnerungen-Integration und Web-Suche via DuckDuckGo. Der Vorbehalt: Web-Suche und Windows-Spracheingabe erfordern eine Internetverbindung, die die „Offline"-Story bei Verwendung verändert.',
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Wie lokale KI in Loci funktioniert',
        content: [
          'Loci bietet zwei mögliche Wege zu lokaler KI:',
        ],
        items: [
          '**Apples System-Grundmodell** — auf unterstützten Apple-Geräten (iPhone, iPad, Mac mit neueren iOS/macOS-Versionen) kann Loci ein auf dem Gerät integriertes Grundmodell verwenden, das von Apple bereitgestellt wird. Dieser Weg erfordert keinen Modell-Download, minimale Einrichtungs-Reibung und ist am einfachsten auf Apple-Plattformen.',
          '**Herunterladbare Open-Source-Modelle** — Nutzer können kompakte Modelle (Gemma 4 1B/4B, Qwen 2,5, Llama 3,2 3B, Phi-4 Mini) einmal in Loci herunterladen. Modell-Dateien liegen typischerweise zwischen 1–5 GB je nach Modellgröße. Nach dem Download läuft die Inferenz auf dem Gerät; Internet ist für Chat nicht erforderlich.',
        ],
        note: 'Die exakten Geräte/OS-Schwellwerte, welche Plattformen Apple Foundation-Model-Unterstützung erhalten versus Modell-Download erzwungen, sind nicht öffentlich dokumentiert. Gehen Sie davon aus, dass die Unterstützung je nach Gerät, OS-Version, App-Version, Speicher und Region variiert — erwarten Sie keine identisches Verhalten auf Ihren Geräten. Zuletzt überprüft gegen Loci-App am 2026-08-22.',
      },
      testingNotes: {
        id: 'testing-notes',
        title: 'Realtests und Praxiserfahrungen',
        content: [
          'Loci wurde auf mehreren Geräten getestet (Tests durch Hans Küpper, PromptQuorum, August 2026), um Praktikabilität in der Realität zu validieren:',
        ],
        items: [
          '**Modell-Downloads funktionieren zuverlässig.** Downloads kompakter Modelle (z. B. Gemma 4 4B, ~4 GB) wurden erfolgreich über Heim-WLAN abgeschlossen, ohne Kürzung oder Beschädigung.',
          '**Offline-Chat funktioniert wie versprochen.** Sobald ein Modell heruntergeladen ist, läuft die Inferenz ohne jegliche Internetverbindung, auch im Flugzeugmodus. Chat bleibt reaktionsschnell.',
          '**Qualitätsgrenzen kleiner Modelle sind der Modellgröße inhärent, nicht spezifisch für Loci.** Tests häufiger Prompts zeigten, dass kleine Modelle (3B–4B Parameter) einfache Entwürfe, Brainstorming und Zusammenfassung gut handhaben, aber mit differenzierten Themen und mehrstufigem Reasoning kämpfen. Dies ist ein fundamentaler Kompromiss jeder KI-App mit kleinen Parametermodellen — nicht eine Loci-Einschränkung. Der Entwickler konzentrierte sich auf Halluzinations-Reduktion und Stabilität; für weitere Details siehe [Halluzinationen in LLMs reduzieren](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up). Komplexe Analysen, Programmierung und detailliertes Handling von Edge Cases profitieren von größeren Frontier-Modellen (GPT-4o, Claude 3 Opus).',
          '**Optionale Funktionen erfordern Konnektivität.** Web-Suche via DuckDuckGo, Modell-Downloads und App-Updates erfordern alle Internetzugang wie dokumentiert.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        title: 'Vorteile und Nachteile',
        columns: ['Vorteil', 'Was es in der Praxis bedeutet', 'Einschränkung / Vorbehalt'],
        rows: [
          {
            'Vorteil': 'Datenschutz',
            'Was es in der Praxis bedeutet': 'Gespräche verlassen Ihr Gerät nicht (gemäß Entwicklerangabe). Keine Cloud-Server speichern Ihre Worte.',
            'Einschränkung / Vorbehalt': 'Optionale Funktionen (DuckDuckGo Web-Suche, Windows-Spracheingabe) erfordern Konnektivität und können Datenspuren hinterlassen.',
          },
          {
            'Vorteil': 'Offline-fähig nach Einrichtung',
            'Was es in der Praxis bedeutet': 'Sobald App und Modell installiert sind, funktioniert Chat im Flugzeugmodus ohne Internet.',
            'Einschränkung / Vorbehalt': 'Der erste Modell-Download erfordert Internet. Funktions-Updates, Modell-Downloads und Backups benötigen möglicherweise auch Konnektivität.',
          },
          {
            'Vorteil': 'Keine wiederkehrenden Cloud-Kosten',
            'Was es in der Praxis bedeutet': 'Kostenlose App, kein Abonnement, keine Gebühren pro Nachricht.',
            'Einschränkung / Vorbehalt': 'Inferenz läuft auf Ihrem Gerät, verbraucht lokale Akku und Rechenleistung.',
          },
          {
            'Vorteil': 'Funktioniert plattformübergreifend',
            'Was es in der Praxis bedeutet': 'Ein kostenlosen Kauf (die App ist kostenlos) auf iPhone, iPad, Android, Mac und Windows.',
            'Einschränkung / Vorbehalt': 'Qualität und Fähigkeiten können pro Plattform variieren; Apple-Gerätepriorität ist im Design offensichtlich.',
          },
          {
            'Vorteil': 'Minimale Einrichtungs-Reibung',
            'Was es in der Praxis bedeutet': 'Keine GGUF-Datei-Auswahl, kein Quantisierungs-Tuning, keine VRAM-Berechnungen.',
            'Einschränkung / Vorbehalt': 'Modellauswahl ist kuratiert und begrenzt (10+ Modelle). Kann keine eigenen GGUF-Dateien importieren.',
          },
          {
            'Vorteil': 'Geräte-Performance-Obergrenze ist Ihre einzige Grenze',
            'Was es in der Praxis bedeutet': 'Inferenz-Geschwindigkeit hängt von Ihrem Telefon/PC RAM und CPU ab, nicht von Cloud-Warteschlangenzeiten.',
            'Einschränkung / Vorbehalt': 'Kleinere lokale Modelle (~3B–4B Parameter) produzieren weniger fähige Ausgabe als hochmoderne Cloud-LLMs (GPT-4o, Claude 3 Opus).',
          },
          {
            'Vorteil': 'Funktioniert ohne Live-Web-Wissen',
            'Was es in der Praxis bedeutet': 'Chat halluziniert nicht über heutige Nachrichten oder Live-Events.',
            'Einschränkung / Vorbehalt': 'Umgekehrt kann das Modell keine aktuellen Informationen nachschlagen. Optionale DuckDuckGo Web-Suche erfordert Konnektivität und funktioniert nur, wenn aktiviert.',
          },
          {
            'Vorteil': 'Langer Kontext und komplexes Reasoning',
            'Was es in der Praxis bedeutet': 'Geeignet für Entwürfe, Zusammenfassungen und strukturierte Fragen und Antworten zu lokalem Inhalt.',
            'Einschränkung / Vorbehalt': 'Komplexes mehrstufiges Reasoning, Coding und hochgestaffelte Zusammenfassungen profitieren oft noch von hochmodernen Cloud-Modellen.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Loci auf jeder Plattform',
        columns: ['Plattform', 'Was zu erwarten ist', 'Wichtige Notiz'],
        rows: [
          {
            'Plattform': 'iPhone',
            'Was zu erwarten ist': 'Loci funktioniert auf iOS 18,0+. Kann Apples auf dem Gerät integriertes Grundmodell verwenden oder ein kompaktes Open-Source-Modell herunterladen (Gemma 4 4B, Llama 3,2 3B, ~2–4 GB). Chat, Fotoanalyse, Sprachmodus und Kalender-Integration verfügbar.',
            'Wichtige Notiz': 'iOS 18+ Anforderung schließt iPhone XS und älter aus. Exakte Geräte/Chip-Schwellwerte für Apple Foundation-Model-Unterstützung sind nicht öffentlich dokumentiert.',
          },
          {
            'Plattform': 'iPad',
            'Was zu erwarten ist': 'Loci funktioniert auf iPadOS 18,0+, mit denselben Modellwegen wie iPhone. Größerer Bildschirm ist besser für lange Gespräche und Dokument-Überprüfung.',
            'Wichtige Notiz': 'Größere Modelle können immer noch durch verfügbaren VRAM begrenzt sein. Apple Foundation-Model-Verfügbarkeit variiert je nach iPad-Generation; überprüfen Sie App Store auf aktuelle Kompatibilität.',
          },
          {
            'Plattform': 'Android',
            'Was zu erwarten ist': 'Verfügbar auf Google Play. Kann Open-Source-Modelle herunterladen (Gemma 4 4B, Qwen 2,5, Llama 3,2 3B, Phi-4, ~2–5 GB). Kein in Apples Grundmodell vergleichbares integriertes Systemmodell.',
            'Wichtige Notiz': 'Die Performance variiert stark über Android-Geräte aufgrund von Chipset-, RAM- und OS-Versions-Fragmentierung. High-End-Telefone (Snapdragon 8 Serie, 8+ GB RAM) handhaben Modelle besser.',
          },
          {
            'Plattform': 'Mac',
            'Was zu erwarten ist': 'Verfügbar im Mac App Store. Kann Apples auf dem Gerät integriertes Grundmodell verwenden oder Open-Source-Modelle herunterladen. Nützlich für längere Sessions, größere Bildschirme und externe Tastaturen.',
            'Wichtige Notiz': 'Mac-spezifische Apple Foundation-Model-Unterstützung ist nicht dokumentiert. M-Serie Macs (M1/M2/M3+) wahrscheinlich unterstützt; ältere Intel Macs benötigen möglicherweise Modell-Download. Überprüfen Sie App Store auf aktuelle Kompatibilität.',
          },
          {
            'Plattform': 'Windows',
            'Was zu erwarten ist': 'Verfügbar über askloci.ai oder Windows App Store. Kann Open-Source-Modelle herunterladen (gleiche Bibliothek wie Android: Gemma, Qwen, Llama, Phi). Spracheingabe erfordert Internetverbindung (anders als andere Plattformen).',
            'Wichtige Notiz': 'Windows-Unterstützung ist am wenigsten dokumentiert der fünf Plattformen. Performance hängt von GPU/CPU ab; erfordert ausreichend Festplattenspeicher für Modell-Speicherung (~2–5 GB).',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Loci im Vergleich zu Alternativen',
        columns: ['App', 'Am besten für', 'Einrichtungs-Level', 'Modell-Flexibilität', 'Plattform-Fokus', 'Wichtige Einschränkung'],
        rows: [
          {
            'App': 'Loci',
            'Am besten für': 'Reibungslose, plattformübergreifende private Chat',
            'Einrichtungs-Level': 'Minimal (herunterladen, chatten)',
            'Modell-Flexibilität': 'Kuratierte Bibliothek (~10 Modelle); kann GGUF nicht importieren',
            'Plattform-Fokus': 'iPhone/iPad/Android/Mac/Windows (5 Plattformen)',
            'Wichtige Einschränkung': 'Modellauswahl ist begrenzt; kein GGUF-Import; kleine Modelle zeigen Qualitätsgrenzen bei differenzierten Themen',
          },
          {
            'App': 'Private LLM',
            'Am besten für': 'Apple-only Nutzer, die fortgeschrittene Modellauswahl wünschen',
            'Einrichtungs-Level': 'Niedrig-bis-mittel (einmaliger Kauf, Modell-Downloads)',
            'Modell-Flexibilität': '140+ Modelle, OmniQuant und GPTQ Quantisierungs-Formate',
            'Plattform-Fokus': 'iPhone/iPad/Mac (Apple only, ein Kauf über alle Geräte)',
            'Wichtige Einschränkung': 'Apple-only; einmaliger Kauf-Preis nicht offengelegt; erfordert Quantisierungs-Formate lernen',
          },
          {
            'App': 'PocketPal AI',
            'Am besten für': 'Nutzer, die vollständigen GGUF-Import und Modellkontrolle wünschen',
            'Einrichtungs-Level': 'Mittel (kostenlos, erfordert aber Modell-Datei-Beschaffung)',
            'Modell-Flexibilität': 'Jede GGUF-Datei von Hugging Face oder anderswo',
            'Plattform-Fokus': 'iPhone/iPad (hauptsächlich Apple, einige Android-Unterstützung)',
            'Wichtige Einschränkung': 'Erfordert Vertrautheit mit GGUF-Dateien und Modellauswahl; komplexer als Loci',
          },
          {
            'App': 'Google AI Edge Gallery',
            'Am besten für': 'Experimentelle Modell-Erkundung mit fortgeschrittenen Funktionen',
            'Einrichtungs-Level': 'Mittel-bis-hoch (mehr Funktionen, mehr Erkundung nötig)',
            'Modell-Flexibilität': 'Gemma 4 Mittelpunkt; unterstützt mehrere Open-Source-Modelle; benutzerdefiniertes Modell-Laden',
            'Plattform-Fokus': 'Android-first (iOS, macOS auch unterstützt)',
            'Wichtige Einschränkung': 'Mehr experimentell/technisch; keine unkomplizierte Loci-Ersatz; weniger polierte UI',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen ist Loci geeignet',
        items: [
          '**Datenschutzbewusster Reisender.** Loci funktioniert offline nach Einrichtung, so können Sie chatten ohne Roaming-Daten oder Verlass auf Hotel-WLAN. Kein Cloud-Service kann Ihre Worte sehen.',
          '**Anfänger, der GGUF-Dateien nicht verwalten möchte.** Wenn das Konzept von Quantisierung, Modell-Gewichten und GGUF-Datei-Handling überwältigend wirkt, ist Loci die richtige erste Local-AI-App. Keine Lernkurve.',
          '**Nutzer, der leichte Schreib/Brainstorming-Assistent sucht.** Notizen entwerfen, Ideen brainstormen, Text zusammenfassen — alles machbar lokal ohne Ihr Arbeit an einen Cloud-Service zu senden.',
          '**Nutzer mit inkonsistenter Konnektivität.** Wenn Ihre Internetverbindung oft abbricht (entfernte Gebiete, Transit, Events), ist Offline-Chat ein echte Vorteil.',
          '**Plattformübergreifende Einfachheit.** Eine kostenlose App über iPhone, iPad, Android, Mac und Windows, mit konsistenter Erfahrung.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen ist Loci nicht geeignet',
        items: [
          '**Nutzer, der hochmodernes Reasoning oder Coding erwartet.** Locis kuratierte Modellbibliothek endet bei Modellen wie Llama 3,2 3B, Gemma 4 4B, Qwen 3 1,7B — alle solide, aber nicht in der Klasse von GPT-4o oder Claude 3 Opus für komplexes Reasoning. Tests in der Praxis bestätigen, dass kleine Modelle mit differenzierten Themen kämpfen.',
          '**Nutzer, der Live-Web-Wissen offline benötigt.** Loci hat optionale DuckDuckGo Web-Suche, aber sie erfordert Internet. Die lokalen Modelle haben kein Konzept vom „Heute" oder aktuellen Events.',
          '**Entwickler, der umfangreiche Modell/Inferenz-Kontrolle wünscht.** Wenn Sie verschiedene Quantisierungen benchmarken, Token/Sekunde-Geschwindigkeiten vergleichen oder Sampling-Parameter tunen müssen, bieten Private LLM oder PocketPal AI mehr Tiefe.',
          '**Nutzer, der einen vollständigen Offline-Sprachassistenten baut.** Loci hat eine „Sprachmodus"-Funktion, aber die Implementierung (ob lokale ASR/TTS oder Apple-System-APIs) ist nicht öffentlich dokumentiert. Für einen vollständig dokumentierten, Offline-Sprachstack, siehe [Bauen Sie einen lokalen Sprachassistenten auf Ihrem Telefon](/de/power-local-llm/voice-assistant-local-mobile-offline) für die empfohlene Whisper + LLM + TTS Pipeline.',
          '**Nutzer, der hochsensible Informationen verarbeitet.** Bevor Sie Loci für private/vertrauliche Arbeit verwenden, überprüfen Sie die aktuelle Datenschutzrichtlinie und Privacy Nutrition Label auf dem App Store. App Store Label zeigt Datenerfassung für „Identifiers", „Usage Data" und „Diagnostics" (angegeben als nicht mit Ihrer Identität verknüpft), aber lesen Sie zuerst die vollständige Richtlinie.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Enthält Loci ein KI-Modell automatisch?',
            a: 'Nicht immer. Auf unterstützten Apple-Geräten (iPhone, iPad, Mac) kann Loci Apples auf dem Gerät integriertes Grundmodell ohne zusätzliche Schritte verwenden. Auf Android und Windows oder wenn Apples Systemmodell auf Ihrem Gerät nicht verfügbar ist, müssen Sie beim ersten Chat ein Modell herunterladen (Gemma, Qwen, Llama oder Phi — etwa 2–4 GB je nach Modell). Nach dem einmaligen Download bleibt das Modell auf Ihrem Gerät.',
          },
          {
            q: 'Ist Loci völlig privat?',
            a: 'Locis offizielle Angabe lautet: „Chat wird auf Ihrem Gerät verarbeitet und nicht hochgeladen." Allerdings: (1) optionale Funktionen wie DuckDuckGo Web-Suche und Windows-Spracheingabe erfordern Internet und können Datenspuren hinterlassen; (2) die App erfasst „Identifiers", „Usage Data" und „Diagnostics" gemäß ihrem App Store Privacy Nutrition Label (angegeben als „nicht mit Ihrer Identität verknüpft"); (3) App-Updates und Modell-Downloads erfordern Internet. Für maximale Datenschutzgarantie überprüfen Sie die aktuelle Datenschutzrichtlinie und deaktivieren Sie optionale Online-Funktionen, falls Datenschutz kritisch ist.',
          },
          {
            q: 'Kann ich Loci ohne WLAN verwenden?',
            a: 'Ja, für Chat. Sobald die App und ein Modell installiert sind, funktioniert lokale Inferenz ohne Internetverbindung (Flugzeugmodus ist in Ordnung). Allerdings erfordern Web-Suche, Windows-Spracheingabe, Modell-Downloads, App-Updates und alle Cloud-verbundenen Funktionen Internet. Wenn Sie DuckDuckGo Web-Suche aktivieren und verwenden, benötigt diese Funktion Konnektivität.',
          },
          {
            q: 'Funktioniert Loci auf älteren Telefonen?',
            a: 'iOS: Loci erfordert iOS 18,0+, was iPhone XS und älter ausschließt. Android: Loci funktioniert auf den meisten modernen Android-Telefonen (exakte Mindest-OS-Version nicht vom Entwickler angegeben), aber die Performance hängt von verfügbarem RAM und ausgewähltem Modell ab. Mac: erfordert eine neue macOS-Version, die Systemgründmodell unterstützt. Windows: funktioniert im Allgemeinen auf modernen Windows 10/11 Maschinen mit ausreichend Speicherplatz für ein Modell.',
          },
          {
            q: 'Kann ich meine eigenen Modelle (GGUF-Dateien) in Loci importieren?',
            a: 'Nein. Loci beschränkt Sie auf seine kuratierte Bibliothek von ~10 Modellen (Gemma, Qwen, Llama, Phi, usw.). Wenn Sie benutzerdefinierte GGUF-Dateien von Hugging Face oder anderswo importieren möchten, sind Private LLM oder PocketPal AI bessere Wahlen.',
          },
          {
            q: 'Was ist der Unterschied zwischen Loci und Private LLM?',
            a: 'Loci: kostenlos, 5 Plattformen (iPhone/iPad/Android/Mac/Windows), kuratierte ~10-Modell-Bibliothek, minimale Einrichtung. Private LLM: Apple-only (iPhone/iPad/Mac), einmaliger Kauf, 140+ Modelle, mehr Quantisierungs/Flexibilität, mehr Konfiguration. Private LLM ist für Nutzer, die maximale Modellkontrolle auf Apple-Geräten wünschen; Loci ist für Nutzer, die Einfachheit über Plattformen wünschen.',
          },
          {
            q: 'Kann Loci ChatGPT oder Claude ersetzen?',
            a: 'Für spezifische Aufgaben, ja — Entwürfe, Brainstorming, Zusammenfassung lokaler Dokumente, einfache Fragen und Antworten. Für komplexes Reasoning, Code-Generierung, Live-Web-Anfragen oder hochgestaffelte Entscheidungen sind Cloud-Modelle (ChatGPT, Claude) fähiger. Loci wird am besten als offline-fähige lokale Alternative zu Cloud-Chat aus Datenschutz- und Konnektivitätsgründen betrachtet, nicht als universelle Ersatz.',
          },
          {
            q: 'Wie viel Speicher verwendet Loci?',
            a: 'Die App selbst ist klein (~100 MB). Modell-Dateien hängen davon ab, welche Sie wählen: kompakte Modelle (Phi-4 Mini, Gemma 4 1B, SmolLM) sind 1–3 GB; größere Modelle (Llama 3,2 3B, Gemma 4 4B, Qwen 3) sind 2–5 GB. Wenn Sie mehrere Modelle heruntergeladen haben, kann die Gesamtnutzung 10+ GB erreichen. Planen Sie entsprechend auf Geräten mit begrenztem Speicher.',
          },
          {
            q: 'Muss ich bei der Verwendung von Loci die DSGVO beachten?',
            a: 'Ja, wenn Sie Loci mit personenbezogenen Daten betreiben. Die DSGVO (Datenschutz-Grundverordnung) und Deutschlands Umsetzung (BDSG) gelten, wenn Sie Kundendaten, Mitarbeiterdaten oder sensible Geschäftsinformationen verarbeiten. Loci erfüllt theoretisch den Datenschutz durch „Verarbeitung auf Ihrem Gerät", aber Sie müssen: (1) überprüfen, dass die Datenschutzrichtlinie DSGVO-konform ist; (2) falls Sie Loci in einem Unternehmen einsetzen, möglicherweise eine Datenschutz-Folgenabschätzung durchführen (DSGVO Artikel 35) für risikoreiche Verarbeitung; (3) Falls Loci auf Ihrem Gerät Diagnose/Telemetrie erfasst, überprüfen Sie, ob diese DSGVO-konform verarbeitet werden. Für Unternehmen mit BSI-Grundschutz-Anforderungen kontrollieren Sie, ob die Speicherung auf eigenen Geräten (versus Cloud) Ihre IT-Sicherheitsstandards erfüllt.',
          },
          {
            q: 'Ist Loci für den deutschen Mittelstand geeignet?',
            a: 'Potenziell, mit Vorbehalten. Viele deutsche Mittelständler streben Datensouveränität und lokale Verarbeitung an — Locis Offline-First-Ansatz spricht diesen Bedarf an. Allerdings: (1) Die kleinen Modelle (3B–4B Parameter) sind möglicherweise nicht ausreichend für komplexe Geschäftslogik oder regulatorische Analyse — Mittelständler in Finanz-, Versicherungs- und Rechtsberatung benötigen möglicherweise größere Modelle oder Cloud-Backup; (2) Sie müssen interne Richtlinien für die Verwendung nicht genehmigter KI-Tools überprüfen — viele Mittelständler haben IT-Governance-Anforderungen; (3) Falls Loci geschäftskritische Informationen verarbeitet, benötigen Sie möglicherweise eine offizielle IT-Risikobeurteilung durch Ihre IT-Abteilung. Für Mittelständler, die lokale KI ausprobieren möchten, ist Loci ein guter Startpunkt, solange die oben genannten Governance-Punkte adressiert sind.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Loci ist am überzeugendsten, wenn Ihre Priorität reibungslose, lokale KI anstatt maximale Modellkontrolle ist. Mehrere Funktionen stechen hervor: Gemma 4 E2B/E4B als stärkste mobile Reasoning-Kapazität; Loci Link (Desktop/Telefon-Verknüpfung zum Ausführen leistungsstarker Modelle vom Telefon aus); globaler Speicher über Gespräche hinweg; erstklassiges Thermal Management für lange Sitzungen; und außergewöhnliche App-Stabilität dank Loci AIs einzigartiger OS-Memory-Handling-Methode. Tests in der Praxis bestätigen, dass Downloads zuverlässig funktionieren, Offline-Chat wie versprochen arbeitet und die App deutlich weniger abstürzt als konkurrierende Apps. Die Web-RAG-Implementierung ist gleichartig einzigartig: online grunden Antworten in Live-Quellen; offline fällt sie sauber auf lokales Wissen zurück ohne zu brechen — und Sie kontrollieren das Verhalten in den Einstellungen. Für Nutzer, die private Offline-Chat ohne technische Modell-Management-Reibung und mit starkem Reasoning auf mobil wünschen, ist Loci ausgezeichnet. Für Nutzer, die fortgeschrittene Modellkontrolle und Quantisierungs-Flexibilität wünschen, bieten Private LLM (Apple) und PocketPal AI mehr Tiefe; für Android-Nutzer, die experimentelle lokale Optionen erkunden, bietet Google AI Edge Gallery zusätzliche Modell-Erkundung. Die ehrliche Bewertung: Loci ist erfolgreich bei Einfachheit, Stabilität, Wärmeresilienz und plattformübergreifender Konsistenz. Es scheitert nur, wenn Sie Cloud-Frontier-Reasoning oder tiefe Modellkontrolle benötigen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Loci offizielle Website](https://askloci.ai) — Produkt-Übersicht, Plattform-Downloads, neueste App-Version.',
          '[Loci im App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — iOS-Verfügbarkeit, Privacy Nutrition Label, Mindest-OS-Anforderungen, echte Nutzer-Bewertungen.',
          '[Loci auf Google Play](https://play.google.com/store/apps/details?id=com.loci.ai) — Android-Verfügbarkeit, Nutzer-Ratings.',
          '[Google AI Edge Gallery auf GitHub](https://github.com/google-ai-edge/gallery) — Feature-Liste, unterstützte Modelle, plattformübergreifende Verfügbarkeit.',
          '[Google AI Edge Gallery Ankündigungs-Blogpost](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 9. September 2025 Ankündigung von Audio-Unterstützung und Google Play Verfügbarkeit.',
          '[Private LLM offizielle Website](https://privatellm.app/en) — Preisgestaltung, Datenschutz-Ansprüche, Shortcuts-Integration, Plattform-Unterstützung.',
          '[Private LLM Modellbibliothek](https://privatellm.app/models) — verfügbare Modelle und Quantisierungs-Formate.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Ressourcen',
        items: [
          '[Beste Local-LLM-Apps für iPhone in 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die iPhone-App-Übersicht; umfasst PocketPal AI, Private LLM, MLC Chat, LLM Farm und Apple Intelligence.',
          '[Beste Local-LLM-Apps für Android in 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — die Android-App-Übersicht; MLC Chat, Maid, Layla, Ollama via Termux, Private AI und PocketPal AI.',
          '[Lokale KI auf Ihrem Tablet ausführen: iPad und Android (2026)](/de/power-local-llm/run-ai-on-tablet-ipad-android) — gerätezentrierter Leitfaden für lokale und entfernte Inferenz auf Tablets.',
          '[Beste Mobile-LLM-Modelle in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Modell-Ebenen-Companion; Benchmarks und Qualitäts-Kompromisse auf mobil.',
          '[Bauen Sie einen lokalen Sprachassistenten auf Ihrem Telefon: Whisper + Lokale KI (Kein Cloud)](/de/power-local-llm/voice-assistant-local-mobile-offline) — vollständig Offline-Sprachpipeline (STT + LLM + TTS) mit gemessener Latenz und Akku-Daten.',
          '[Lokale LLM-Softwareverzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) — umfassendes App- und Tool-Verzeichnis für alle Plattformen.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-08-22',
    next_refresh_due: '2027-02-22',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/loci-ai-review-hero-es.webp',
    title: 'Reseña de Loci AI (2026): IA privada sin conexión para iPhone, Android, iPad, Mac y Windows',
    seoTitle: 'Reseña de Loci AI 2026: IA privada sin conexión en todas las plataformas',
    intro:
      'Loci, desarrollado por Loci AI, Inc., está diseñado para que la IA local se sienta como un asistente normal en lugar de un proyecto de gestión de modelos. Se ejecuta en iPhone, iPad, Android, Mac y Windows, puede funcionar sin conexión después de la configuración, y se posiciona como una alternativa centrada en la privacidad a los servicios de IA en la nube. La app selecciona automáticamente la mejor infraestructura de inferencia (llama.cpp o MLX) para cada modelo en tu hardware, implementa gestión térmica para mantener tu teléfono estable, sincroniza memoria entre conversaciones y puede vincularse a una computadora de escritorio para acceder a modelos más potentes. La pregunta práctica no es si la inferencia local es posible — es si Loci te ofrece suficiente calidad y control sin las descargas de modelos, el uso de almacenamiento y la configuración técnica (seleccionar archivos GGUF manualmente, ajustar cuantizaciones, calcular VRAM) que requieren herramientas más avanzadas de IA local.',
    metaDescription:
      '¿Vale la pena usar Loci AI para IA privada sin conexión? Descubre cómo funciona en iPhone, Android, iPad, Mac y Windows, a quién le conviene, y cómo se compara con Private LLM, PocketPal y Google AI Edge Gallery.',
    twitterDescription:
      'Reseña de Loci AI 2026: IA sin conexión que simplemente funciona en iPhone, Android, iPad, Mac y Windows. Privacidad, precios, configuración y comparativas con Private LLM y Google AI Edge Gallery.',
    audience:
      'Usuarios decidiendo entre ejecutar IA en el dispositivo mediante Loci versus servicios en la nube, otras aplicaciones de IA local o alternativas en la nube — cubre fricción de configuración, posicionamiento de privacidad, compatibilidad multiplataforma y compromisos reales.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'reseña de Loci AI',
    targetKeywords: [
      'reseña loci ai',
      'loci ai sin conexión',
      'loci local llm',
      'loci ai iphone',
      'loci ai android',
      'loci vs privatellm',
      'loci vs pocketpal',
      'privacidad loci ai',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**Loci es más convincente si tu prioridad es la IA en el dispositivo sin fricción en lugar del máximo control del modelo.** Puede ser la mejor primera aplicación de IA local para usuarios que quieren chat privado sin conexión sin tratar su teléfono como una estación de trabajo ML en miniatura (que requiere selección manual de GGUF, ajuste de cuantización y cálculos de VRAM). Loci funciona en iPhone, iPad, Android, Mac y Windows — simplemente descarga la aplicación y elige un modelo de la lista curada. Los usuarios que quieren seleccionar cuantizaciones, importar modelos o ejecutar bibliotecas de modelos más grandes deberían compararlo con alternativas más técnicas como Private LLM o PocketPal AI.',
    quickAnswerTop: {
      es: {
        question: '¿Debería usar Loci para IA privada sin conexión?',
        answer:
          'Usa Loci si quieres chat privado en el dispositivo sin fricción de gestión de modelos, en iPhone, Android, iPad, Mac o Windows. Evítalo si necesitas calidad de razonamiento de frontera, conocimiento web en vivo sin conectividad, o control profundo sobre la selección de modelos y cuantización — eso se resuelve mejor con IA en la nube o aplicaciones de IA local más técnicas como Private LLM.',
        bullets: [
          'Gratis, sin suscripción, funciona en 5 plataformas (iPhone/iPad/Android/Mac/Windows).',
          'Capaz de funcionar sin conexión después de descargar la aplicación y el modelo.',
          'Sin cuenta, sin seguimiento, las conversaciones permanecen en el dispositivo según los desarrolladores.',
          'Las funciones opcionales (búsqueda web a través de DuckDuckGo, entrada de voz en Windows) requieren internet.',
          'La calidad y selección de modelos es menos flexible que Private LLM o PocketPal AI.',
        ],
        updatedDate: '2026-08-22',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Loci', anchor: 'what-is-loci' },
      { label: 'Cómo funciona la IA local en Loci', anchor: 'how-local-ai-works' },
      { label: 'Notas de pruebas reales', anchor: 'testing-notes' },
      { label: 'Compromisos: beneficios vs limitaciones', anchor: 'tradeoffs' },
      { label: 'Loci en cada plataforma', anchor: 'platforms' },
      { label: 'Loci vs alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Loci', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Loci', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Loci es una aplicación de IA en el dispositivo gratis para iPhone, iPad, Android, Mac y Windows.',
          'Ofrece dos caminos de modelos: el modelo de fundación del sistema de Apple (donde sea compatible) o modelos de código abierto descargables (Gemma, Qwen, Llama, Phi).',
          'La configuración es mínima — sin archivos GGUF, sin opciones de cuantización, simplemente descarga y usa.',
          'Afirmación de privacidad: las conversaciones permanecen en el dispositivo; las funciones opcionales (búsqueda web, voz) requieren internet.',
          'Ideal para usuarios conscientes de la privacidad que quieren simplicidad sobre control avanzado de modelos.',
          'No ideal para usuarios que necesitan razonamiento de frontera, conocimiento web en vivo, o flexibilidad de GGUF/cuantización.',
          'La disponibilidad exacta de modelos y compatibilidad de dispositivos/SO pueden cambiar — verifica listados oficiales antes de asumir consistencia.',
          'Las pruebas reales muestran que las descargas de modelos funcionan de manera confiable, el chat sin conexión funciona como se anuncia, pero los modelos pequeños (3B–4B) luchan con temas matizados.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'Qué es Loci',
        content: [
          'Loci es un asistente de IA enfocado en el consumidor, en el dispositivo, disponible en iPhone (iOS 18.0+), iPad (iPadOS 18.0+), Android, Mac y Windows. La aplicación es gratis sin suscripción, sin anuncios, sin requisito de cuenta.',
          'Arquitectura del modelo: Loci puede usar "el modelo de fundación integrado de Apple o descargar de 10+ modelos de código abierto curados, incluyendo Gemma, Qwen, Llama y Phi — todos ejecutándose localmente en tu dispositivo." Esto significa que la inferencia ocurre en el dispositivo después de la configuración, no en la nube.',
          'Posicionamiento de privacidad: la afirmación oficial es "El chat se procesa en tu dispositivo y no se carga. No hay cuenta, no hay copia en el servidor de tus conversaciones, y no se entrena con tus palabras." La aplicación recopila "Identificadores," "Datos de uso" y "Diagnósticos" a través de su etiqueta de nutrición de privacidad, pero afirma que estos datos no están "vinculados a tu identidad."',
          'Las funciones opcionales incluyen análisis de fotos, modo de voz, integración de calendario/recordatorios y búsqueda web a través de DuckDuckGo. La advertencia: la búsqueda web y la entrada de voz en Windows requieren conexión a internet, lo que cambia la historia de "sin conexión" si se usan.',
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Cómo funciona la IA local en Loci',
        content: [
          'Loci ofrece dos posibles caminos para la IA en el dispositivo:',
        ],
        items: [
          '**Modelo de fundación del sistema Apple** — en dispositivos Apple compatibles (iPhone, iPad, Mac con versiones recientes de iOS/macOS), Loci puede usar un modelo de fundación integrado en el dispositivo proporcionado por Apple. Este camino no requiere descarga de modelo, fricción mínima de configuración, y es el más simple en plataformas Apple.',
          '**Modelos de código abierto descargables** — los usuarios pueden descargar modelos compactos (Gemma 4 1B/4B, Qwen 2.5, Llama 3.2 3B, Phi-4 Mini) en Loci una sola vez. Los archivos del modelo típicamente van de 1–5 GB dependiendo del tamaño del modelo. Después de descargar, la inferencia se ejecuta en el dispositivo; internet no es requerido para usar el chat.',
        ],
        note: 'Los umbrales exactos de dispositivo/SO para qué plataformas obtienen compatibilidad con modelo de fundación Apple versus deben descargar un modelo no están documentados públicamente. Asume que el soporte varía por dispositivo, versión del SO, versión de aplicación, almacenamiento y región — no esperes un comportamiento idéntico en tus dispositivos. Última verificación contra Loci app el 2026-08-22.',
      },
      testingNotes: {
        id: 'testing-notes',
        title: 'Notas de pruebas reales',
        content: [
          'Loci fue probado en múltiples dispositivos (pruebas de Hans Küpper, PromptQuorum, agosto de 2026) para validar la usabilidad en el mundo real:',
        ],
        items: [
          '**Las descargas de modelos funcionan de manera confiable.** Las descargas de modelos compactos (ej. Gemma 4 4B, ~4 GB) se completaron exitosamente en WiFi doméstico sin truncación o corrupción observada.',
          '**El chat sin conexión funciona como se anuncia.** Una vez que un modelo se descarga, la inferencia se ejecuta sin ninguna conexión a internet, incluso en modo de avión. El chat permanece receptivo.',
          '**Los límites de calidad de los modelos pequeños son inherentes al tamaño del modelo, no específicos de Loci.** Las pruebas de prompts comunes revelaron que los modelos pequeños (parámetros 3B–4B) manejan bien la redacción directa, lluvia de ideas y resumen, pero luchan con temas matizados y razonamiento multietapa. Este es un compromiso fundamental de cualquier aplicación de IA que ofrezca modelos de parámetros pequeños — no una limitación de Loci. El desarrollador se enfocó en reducir alucinaciones y estabilidad; para más detalles, consulte [Cómo reducir alucinaciones en LLMs](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up). El análisis complejo, la codificación y el manejo detallado de casos extremos se benefician de modelos frontera más grandes (GPT-4o, Claude 3 Opus).',
          '**Las funciones opcionales requieren conectividad.** La búsqueda web a través de DuckDuckGo, descargas de modelos y actualizaciones de aplicaciones requieren acceso a internet como se documenta.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        title: 'Compromisos: beneficios vs limitaciones',
        columns: ['Beneficio', 'Qué significa en uso real', 'Limitación / salvedad'],
        rows: [
          {
            'Beneficio': 'Privacidad',
            'Qué significa en uso real': 'Las conversaciones no abandonan tu dispositivo (según afirmación del desarrollador). No hay servidores en la nube almacenando tus palabras.',
            'Limitación / salvedad': 'Las funciones opcionales (búsqueda web de DuckDuckGo, entrada de voz de Windows) requieren conectividad y pueden dejar rastros de datos.',
          },
          {
            'Beneficio': 'Capaz de funcionar sin conexión después de configuración',
            'Qué significa en uso real': 'Una vez que la aplicación y el modelo están instalados, el chat funciona en modo de avión sin internet.',
            'Limitación / salvedad': 'La descarga inicial del modelo requiere internet. Las actualizaciones de características, descargas de modelos y respaldos también pueden necesitar conectividad.',
          },
          {
            'Beneficio': 'Sin costo recurrente en la nube',
            'Qué significa en uso real': 'Aplicación gratis, sin suscripción, sin tarifas por mensaje.',
            'Limitación / salvedad': 'La inferencia se ejecuta en tu dispositivo, consumiendo batería local y poder de procesamiento.',
          },
          {
            'Beneficio': 'Funciona en múltiples plataformas',
            'Qué significa en uso real': 'Una compra gratis (la aplicación es gratis) en iPhone, iPad, Android, Mac y Windows.',
            'Limitación / salvedad': 'La calidad y capacidades pueden variar por plataforma; la prioridad de dispositivos Apple es evidente en el diseño.',
          },
          {
            'Beneficio': 'Fricción mínima de configuración',
            'Qué significa en uso real': 'Sin selección de archivos GGUF, sin ajuste de cuantización, sin cálculos de VRAM.',
            'Limitación / salvedad': 'La selección de modelo es curada y limitada (10+ modelos). No puedes importar tus propios archivos GGUF.',
          },
          {
            'Beneficio': 'El límite de rendimiento del dispositivo es tu único límite',
            'Qué significa en uso real': 'La velocidad de inferencia depende de tu RAM de teléfono/PC y CPU, no de tiempos de cola en la nube.',
            'Limitación / salvedad': 'Los modelos locales más pequeños (~parámetros 3B–4B) producen salida menos capaz que LLMs en la nube de frontera (GPT-4o, Claude 3 Opus).',
          },
          {
            'Beneficio': 'Funciona sin conocimiento web en vivo',
            'Qué significa en uso real': 'El chat no alucina sobre las noticias de hoy o eventos en vivo.',
            'Limitación / salvedad': 'Inversamente, el modelo no puede buscar información actual. La búsqueda web opcional de DuckDuckGo requiere conectividad y solo funciona cuando está habilitada.',
          },
          {
            'Beneficio': 'Contexto largo y razonamiento complejo',
            'Qué significa en uso real': 'Adecuado para redactar, resumir y preguntas estructuradas sobre contenido local.',
            'Limitación / salvedad': 'El razonamiento complejo de múltiples pasos, la codificación y el resumen de alto riesgo a menudo se benefician de modelos de frontera en la nube.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Loci en cada plataforma',
        columns: ['Plataforma', 'Qué esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'Qué esperar': 'Loci funciona en iOS 18.0+. Puede usar el modelo de fundación en el dispositivo de Apple o descargar un modelo de código abierto compacto (Gemma 4 4B, Llama 3.2 3B, ~2–4 GB). Chat, análisis de fotos, modo de voz e integración de calendario disponibles.',
            'Nota importante': 'El requisito de iOS 18+ excluye iPhone XS y anteriores. Los umbrales exactos de dispositivo/chip para compatibilidad con modelo de fundación Apple no están documentados públicamente.',
          },
          {
            'Plataforma': 'iPad',
            'Qué esperar': 'Loci funciona en iPadOS 18.0+, con los mismos caminos de modelos que iPhone. La pantalla más grande es mejor para conversaciones largas y revisión de documentos.',
            'Nota importante': 'Los modelos más grandes aún pueden estar limitados por VRAM disponible. La disponibilidad del modelo de fundación de Apple varía por generación de iPad; verifica la App Store para compatibilidad actual.',
          },
          {
            'Plataforma': 'Android',
            'Qué esperar': 'Disponible en Google Play. Puede descargar modelos de código abierto (Gemma 4 4B, Qwen 2.5, Llama 3.2 3B, Phi-4, ~2–5 GB). Sin modelo del sistema integrado equivalente al modelo de fundación de Apple.',
            'Nota importante': 'El rendimiento varía ampliamente entre dispositivos Android debido a fragmentación de chipset, RAM y versión del SO. Los teléfonos de gama alta (serie Snapdragon 8, 8+ GB RAM) manejan mejor los modelos.',
          },
          {
            'Plataforma': 'Mac',
            'Qué esperar': 'Disponible en Mac App Store. Puede usar el modelo de fundación en el dispositivo de Apple o descargar modelos de código abierto. Útil para sesiones más largas, pantallas más grandes y teclados externos.',
            'Nota importante': 'El soporte del modelo de fundación específico de Mac de Apple no está documentado. Los Macs M-series (M1/M2/M3+) probablemente sean compatibles; los Macs Intel antiguos pueden requerir descarga de modelo. Verifica la App Store para compatibilidad actual.',
          },
          {
            'Plataforma': 'Windows',
            'Qué esperar': 'Disponible a través de askloci.ai o Windows App Store. Puede descargar modelos de código abierto (misma biblioteca que Android: Gemma, Qwen, Llama, Phi). La entrada de voz requiere conexión a internet (a diferencia de otras plataformas).',
            'Nota importante': 'El soporte de Windows es el menos documentado de las cinco plataformas. El rendimiento depende de GPU/CPU; requiere suficiente espacio en disco para almacenamiento de modelos (~2–5 GB).',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Loci vs alternativas',
        columns: ['Aplicación', 'Mejor para', 'Nivel de configuración', 'Flexibilidad de modelo', 'Enfoque de plataforma', 'Limitación clave'],
        rows: [
          {
            'Aplicación': 'Loci',
            'Mejor para': 'Chat privado multiplataforma sin fricción',
            'Nivel de configuración': 'Mínimo (descarga, usa)',
            'Flexibilidad de modelo': 'Biblioteca curada (~10 modelos); no puedes importar GGUF',
            'Enfoque de plataforma': 'iPhone/iPad/Android/Mac/Windows (5 plataformas)',
            'Limitación clave': 'La selección de modelo es limitada; sin importación de GGUF; modelos pequeños muestran límites de calidad en temas matizados',
          },
          {
            'Aplicación': 'Private LLM',
            'Mejor para': 'Usuarios solo de Apple que quieren selección de modelo avanzada',
            'Nivel de configuración': 'Bajo a medio (compra única, descargas de modelos)',
            'Flexibilidad de modelo': '140+ modelos, formatos de cuantización OmniQuant y GPTQ',
            'Enfoque de plataforma': 'iPhone/iPad/Mac (solo Apple, una compra en todos los dispositivos)',
            'Limitación clave': 'Solo Apple; precio de compra única no divulgado; requiere aprender formatos de cuantización',
          },
          {
            'Aplicación': 'PocketPal AI',
            'Mejor para': 'Usuarios que quieren importación GGUF completa y control de modelo',
            'Nivel de configuración': 'Medio (gratis, pero requiere obtención de archivo de modelo)',
            'Flexibilidad de modelo': 'Cualquier archivo GGUF de Hugging Face u otro lugar',
            'Enfoque de plataforma': 'iPhone/iPad (principalmente Apple, algo de soporte Android)',
            'Limitación clave': 'Requiere comodidad con archivos GGUF y selección de modelo; más complejo que Loci',
          },
          {
            'Aplicación': 'Google AI Edge Gallery',
            'Mejor para': 'Exploración de modelos experimental con características avanzadas',
            'Nivel de configuración': 'Medio a alto (más características, más descubrimiento necesario)',
            'Flexibilidad de modelo': 'Gemma 4 como punto central; soporta múltiples modelos de código abierto; carga de modelo personalizado',
            'Enfoque de plataforma': 'Primero Android (iOS, macOS también soportados)',
            'Limitación clave': 'Más experimental/técnico; no es un reemplazo directo de Loci; interfaz de usuario menos pulida',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Loci',
        items: [
          '**Viajero consciente de la privacidad.** Loci funciona sin conexión después de la configuración, así que puedes usar chat sin datos de roaming o depender de Wi-Fi de hotel. Ningún servicio en la nube puede ver tus palabras.',
          '**Principiante que no quiere gestionar archivos GGUF.** Si el concepto de cuantización, pesos de modelo y manejo de archivos GGUF suena abrumador, Loci es la correcta primera aplicación de IA local. Sin curva de aprendizaje.',
          '**Usuario buscando asistente ligero de redacción/lluvia de ideas.** Redactar notas, lluvia de ideas, resumir texto — todo factible en el dispositivo sin enviar tu trabajo a un servicio en la nube.',
          '**Usuario con conectividad inconsistente.** Si tu conexión a internet se cae a menudo (áreas remotas, tránsito, eventos), el chat sin conexión es una ventaja genuina.',
          '**Simplicidad entre dispositivos.** Una aplicación gratis en iPhone, iPad, Android, Mac y Windows, con experiencia consistente.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Loci',
        items: [
          '**Usuario esperando razonamiento de frontera o codificación.** La biblioteca de modelos curada de Loci llega como máximo a modelos como Llama 3.2 3B, Gemma 4 4B, Qwen 3 1.7B — todos sólidos, pero no en la clase de GPT-4o o Claude 3 Opus para razonamiento complejo. Las pruebas en el mundo real confirman que modelos pequeños luchan con temas matizados.',
          '**Usuario que necesita conocimiento web en vivo sin conexión.** Loci tiene búsqueda web de DuckDuckGo opcional, pero requiere internet. Los modelos locales no tienen concepto de "hoy" o eventos actuales.',
          '**Desarrollador que quiere control integral de modelo/inferencia.** Si necesitas hacer benchmark de cuantizaciones diferentes, comparar velocidades de token/segundo o ajustar parámetros de muestreo, Private LLM o PocketPal AI ofrecen más profundidad.',
          '**Usuario construyendo un asistente de voz completo sin conexión.** Loci tiene una característica de "modo de voz", pero la implementación (si es ASR/TTS local o APIs del sistema Apple) no está documentada públicamente. Para una pila de voz completa sin conexión y documentada, ve a [Construye un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline) para la tubería Whisper + LLM + TTS recomendada.',
          '**Usuario manejando información altamente sensible.** Antes de usar Loci para trabajo privado/confidencial, revisa la política de privacidad actual y etiqueta de nutrición de privacidad en la App Store. La etiqueta de la App Store muestra recopilación de datos para "Identificadores," "Datos de uso" y "Diagnósticos" (indicados como no vinculados a tu identidad), pero lee la política completa primero.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Incluye Loci un modelo de IA automáticamente?',
            a: 'No siempre. En dispositivos Apple compatibles (iPhone, iPad, Mac), Loci puede usar el modelo de fundación en el dispositivo de Apple sin pasos adicionales. En Android y Windows, o si el modelo del sistema Apple no está disponible en tu dispositivo, debes descargar un modelo la primera vez que uses chat (Gemma, Qwen, Llama o Phi — aproximadamente 2–4 GB dependiendo del modelo). Después de la descarga única, el modelo permanece en tu dispositivo.',
          },
          {
            q: '¿Es Loci completamente privado?',
            a: 'La afirmación oficial de Loci es que "El chat se procesa en tu dispositivo y no se carga." Sin embargo: (1) las funciones opcionales como búsqueda web de DuckDuckGo y entrada de voz de Windows requieren internet y pueden crear rastros de datos; (2) la aplicación recopila "Identificadores," "Datos de uso" y "Diagnósticos" según su etiqueta de nutrición de privacidad de la App Store (indicado como "no vinculado a tu identidad"); (3) las actualizaciones de aplicaciones y descargas de modelos requieren internet. Para máxima seguridad de privacidad, verifica la política de privacidad actual e inhabilita funciones en línea opcionales si la privacidad es crítica.',
          },
          {
            q: '¿Puedo usar Loci sin Wi-Fi?',
            a: 'Sí, para chat. Una vez que la aplicación y un modelo estén instalados, la inferencia en el dispositivo funciona sin ninguna conexión a internet (el modo de avión está bien). Sin embargo, búsqueda web, entrada de voz de Windows, descargas de modelos, actualizaciones de aplicaciones y cualquier característica conectada a la nube requieren internet. Si habilitas búsqueda web de DuckDuckGo y la usas, esa característica necesitará conectividad.',
          },
          {
            q: '¿Funciona Loci en teléfonos antiguos?',
            a: 'iOS: Loci requiere iOS 18.0+, lo que excluye iPhone XS y anteriores. Android: Loci funciona en la mayoría de teléfonos Android modernos (la versión mínima exacta del SO no está especificada por el desarrollador), pero el rendimiento depende de RAM disponible y modelo seleccionado. Mac: requiere una versión reciente de macOS que soporte el modelo de fundación del sistema. Windows: generalmente funciona en máquinas Windows 10/11 modernas con suficiente espacio en disco para un modelo.',
          },
          {
            q: '¿Puedo importar mis propios modelos (archivos GGUF) en Loci?',
            a: 'No. Loci te limita a su biblioteca curada de ~10 modelos (Gemma, Qwen, Llama, Phi, etc.). Si quieres importar archivos GGUF personalizados de Hugging Face u otro lugar, Private LLM o PocketPal AI son mejores opciones.',
          },
          {
            q: '¿Cuál es la diferencia entre Loci y Private LLM?',
            a: 'Loci: gratis, 5 plataformas (iPhone/iPad/Android/Mac/Windows), biblioteca curada de ~10 modelos, configuración mínima. Private LLM: solo Apple (iPhone/iPad/Mac), compra única, 140+ modelos, más cuantización/flexibilidad, más configuración. Private LLM es para usuarios que quieren máximo control de modelo en dispositivos Apple; Loci es para usuarios que quieren simplicidad en plataformas.',
          },
          {
            q: '¿Puede Loci reemplazar ChatGPT o Claude?',
            a: 'Para tareas específicas, sí — redacción, lluvia de ideas, resumir documentos locales, preguntas simples. Para razonamiento complejo, generación de código, consultas web en vivo o decisiones de alto riesgo, los modelos en la nube (ChatGPT, Claude) son más capaces. Loci se ve mejor como una alternativa local sin conexión a chat en la nube por razones de privacidad y conectividad, no como reemplazo universal.',
          },
          {
            q: '¿Cuánto almacenamiento usa Loci?',
            a: 'La aplicación misma es pequeña (~100 MB). Los archivos del modelo dependen de cuál elijas: modelos compactos (Phi-4 Mini, Gemma 4 1B, SmolLM) son 1–3 GB; modelos más grandes (Llama 3.2 3B, Gemma 4 4B, Qwen 3) son 2–5 GB. Si tienes múltiples modelos descargados, el uso total puede llegar a 10+ GB. Planifica según dispositivos con almacenamiento limitado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Loci es más convincente si tu prioridad es la IA sin fricción en el dispositivo en lugar del máximo control del modelo. Varias características se destacan: Gemma 4 E2B/E4B como el razonamiento más fuerte disponible en móvil; Loci Link (vinculación escritorio/teléfono para ejecutar modelos potentes desde tu teléfono a través de un Mac o PC conectado); memoria global entre conversaciones y cambios de modelo; gestión térmica de primera clase para sesiones prolongadas; y estabilidad de aplicación excepcional gracias al enfoque único de Loci AI para el manejo de memoria del SO. Las pruebas del mundo real confirman que las descargas funcionan de manera confiable, el chat sin conexión funciona según lo anunciado, y la aplicación experimenta significativamente menos fallos que otras aplicaciones de IA local competidoras. La implementación de web RAG es igualmente única: en línea, las respuestas se basan en fuentes en vivo; sin conexión, retrocede limpiamente al conocimiento en el dispositivo sin fallar — y tú controlas el comportamiento en configuración. Para usuarios que desean chat privado sin conexión sin fricción de administración técnica de modelos y con razonamiento fuerte en dispositivo, Loci se destaca. Para usuarios que desean control avanzado de modelos y flexibilidad de cuantificación, Private LLM (Apple) y PocketPal AI ofrecen más profundidad; para usuarios de Android que exploran opciones experimentales en el dispositivo, Google AI Edge Gallery ofrece descubrimiento adicional de modelos. La evaluación honesta: Loci tiene éxito en simplicidad, estabilidad, resiliencia térmica y consistencia multiplataforma. Falla solo cuando necesitas razonamiento frontera en la nube o control profundo del modelo.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio oficial de Loci](https://askloci.ai) — descripción general del producto, descargas de plataforma, versión de aplicación más reciente.',
          '[Loci en la App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — disponibilidad en iOS, etiqueta de nutrición de privacidad, requisitos mínimos del SO, reseñas de usuarios reales.',
          '[Loci en Google Play](https://play.google.com/store/apps/details?id=com.loci.ai) — disponibilidad en Android, calificaciones de usuarios.',
          '[Google AI Edge Gallery en GitHub](https://github.com/google-ai-edge/gallery) — lista de características, modelos soportados, disponibilidad multiplataforma.',
          '[Publicación del blog de anuncio de Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — anuncio del 9 de septiembre de 2025 de soporte de audio y disponibilidad en Google Play.',
          '[Sitio oficial de Private LLM](https://privatellm.app/en) — precios, afirmaciones de privacidad, integración de Shortcuts, soporte de plataforma.',
          '[Biblioteca de modelos de Private LLM](https://privatellm.app/models) — modelos disponibles y formatos de cuantización.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores aplicaciones de IA local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la reseña de aplicaciones de iPhone; incluye PocketPal AI, Private LLM, MLC Chat, LLM Farm e Apple Intelligence.',
          '[Mejores aplicaciones de IA local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — la reseña de aplicaciones de Android; MLC Chat, Maid, Layla, Ollama vía Termux, Private AI y PocketPal AI.',
          '[Ejecuta una IA local en tu tableta: iPad y Android (2026)](/es/power-local-llm/run-ai-on-tablet-ipad-android) — guía enfocada en dispositivo para inferencia en el dispositivo y remota en tabletas.',
          '[Mejores modelos de IA móvil en 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — complemento en la capa de modelo; benchmarks y compromisos de calidad en móvil.',
          '[Construye un asistente de voz local en tu teléfono: Whisper + IA local (sin nube)](/es/power-local-llm/voice-assistant-local-mobile-offline) — tubería de voz sin conexión completa (STT + LLM + TTS) con datos de latencia y batería medidos.',
          '[Directorio de software de IA local 2026](/es/power-local-llm/local-llm-software-directory-2026) — directorio de aplicaciones y herramientas comprensivo para todas las plataformas.',
        ],
      },
    },
  },
  fr: {
  freshness_tier: 'semi_annual',
  publishDate: '2026-08-22',
  dateModified: '2026-08-22',
  next_refresh_due: '2027-02-22',
  theme: 'Mobile & Edge LLMs',
  heroImage: '/images/loci-ai-review-hero-fr.webp',
  title: 'Critique de Loci AI (2026) : IA hors ligne privée sur iPhone, Android, iPad, Mac et Windows',
  seoTitle: 'Critique Loci AI 2026 : IA hors ligne privée multiplateforme',
  intro:
    'Loci, développé par Loci AI, Inc., est conçu pour rendre l\'IA locale aussi naturelle qu\'un assistant ordinaire, sans gestion technique de modèles. Il s\'exécute sur iPhone, iPad, Android, Mac et Windows, fonctionne hors ligne après la configuration, et se positionne comme alternative sans cloud aux services IA propriétaires. L\'app sélectionne automatiquement le meilleur environnement d\'inférence (llama.cpp ou MLX) pour chaque modèle sur votre matériel, implémente la gestion thermique pour stabiliser votre téléphone, synchronise la mémoire entre conversations et peut se connecter à un ordinateur de bureau pour accéder à des modèles plus puissants. La vraie question n\'est pas si l\'inférence locale est possible — elle existe. C\'est si Loci offre assez de qualité et de contrôle sans les téléchargements, l\'espace disque et la configuration technique (sélection manuelle de fichiers GGUF, ajustement des quantifications, calcul de VRAM) que les outils IA locaux plus avancés imposent.',
  metaDescription:
    'Critique de Loci AI : vaut-il le coup pour une IA privée hors ligne ? Découvrez le fonctionnement sur iPhone, Android, iPad, Mac et Windows, pour qui c\'est adapté, et les comparaisons.',
  twitterDescription:
    'Critique Loci AI 2026 : IA hors ligne qui fonctionne sur iPhone, Android, iPad, Mac et Windows. Confidentialité, tarification, installation et comparaisons.',
  audience:
    'Utilisateurs décidant entre l\'IA sur appareil via Loci et les services cloud, autres applications IA locales, ou alternatives cloud — couvre la friction de configuration, le positionnement en matière de confidentialité, le support multiplateforme et les compromis pratiques.',
  readTime: '8 min de lecture',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Loci AI review',
  targetKeywords: [
    'critique loci ai',
    'loci ia hors ligne',
    'loci llm local',
    'loci ai iphone',
    'loci ai android',
    'loci vs privatellm',
    'loci vs pocketpal',
    'loci ai confidentialité',
  ],
  current_models_mentioned: [],
  current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Mac', 'Windows PC'],
  leadAnswerBlock:
    '**Loci est le plus attrayant si votre priorité est une IA sur appareil sans friction, plutôt qu\'un contrôle maximal des modèles.** C\'est probablement la meilleure première application IA locale pour les utilisateurs voulant du chat privé hors ligne sans transformer leur téléphone en station de travail ML miniature (sélection manuelle de GGUF, ajustement de quantifications, calculs de VRAM). Loci fonctionne sur iPhone, iPad, Android, Mac et Windows — téléchargez simplement l\'application et choisissez un modèle parmi la liste organisée. Les utilisateurs voulant sélectionner des quantifications, importer des modèles ou gérer des bibliothèques plus larges devraient comparer avec des alternatives plus techniques comme Private LLM ou PocketPal AI.',
  quickAnswerTop: {
    fr: {
      question: 'Dois-je utiliser Loci pour une IA privée hors ligne ?',
      answer:
        'Utilisez Loci si vous voulez du chat privé sur appareil sans friction de gestion de modèles, sur iPhone, Android, iPad, Mac ou Windows. Abandonnez-le si vous avez besoin de qualité de raisonnement frontière, de connaissances web en direct sans connectivité, ou d\'un contrôle profond sur la sélection et la quantification des modèles — les services cloud ou applications IA locales plus techniques comme Private LLM sont mieux adaptés.',
      bullets: [
        'Gratuit, pas d\'abonnement, fonctionne sur 5 plates-formes (iPhone/iPad/Android/Mac/Windows).',
        'Capable hors ligne après téléchargement et configuration de l\'application et du modèle.',
        'Pas de compte, pas de suivi, conversations restent sur appareil selon les affirmations du développeur.',
        'Fonctionnalités optionnelles (recherche web via DuckDuckGo, entrée vocale Windows) nécessitent une connexion Internet.',
        'Qualité et flexibilité de sélection des modèles inférieures à Private LLM ou PocketPal AI.',
      ],
      updatedDate: '2026-08-22',
    },
  },
  toc: [
    { label: 'Réponse rapide', anchor: 'quick-answer' },
    { label: 'Ce qu\'est Loci', anchor: 'what-is-loci' },
    { label: 'Fonctionnement de l\'IA locale dans Loci', anchor: 'how-local-ai-works' },
    { label: 'Notes de test en conditions réelles', anchor: 'testing-notes' },
    { label: 'Compromis : avantages et limitations', anchor: 'tradeoffs' },
    { label: 'Loci sur chaque plateforme', anchor: 'platforms' },
    { label: 'Loci vs alternatives', anchor: 'vs-alternatives' },
    { label: 'Pour qui est Loci', anchor: 'who-should-use' },
    { label: 'Pour qui Loci n\'est pas adapté', anchor: 'who-should-not-use' },
    { label: 'FAQ', anchor: 'faq' },
    { label: 'Verdict', anchor: 'verdict' },
    { label: 'Sources', anchor: 'sources' },
    { label: 'Lectures complémentaires', anchor: 'related-reading' },
  ],
  sections: {
    tldr: {
      id: 'key-takeaways',
      title: 'Points clés',
      isTldr: true,
      items: [
        'Loci est une application IA gratuite sur appareil pour iPhone, iPad, Android, Mac et Windows.',
        'Deux voies de modèles : modèle fondation système Apple (si disponible) ou modèles open-source téléchargeables (Gemma, Qwen, Llama, Phi).',
        'Configuration minimale — pas de fichiers GGUF, pas de choix de quantification, juste téléchargez et discutez.',
        'Affirmation sur la confidentialité : conversations restent sur appareil ; fonctionnalités optionnelles (recherche web, voix) nécessitent Internet.',
        'Idéal pour les utilisateurs conscients de la confidentialité qui veulent la simplicité plutôt que le contrôle avancé des modèles.',
        'Pas idéal pour ceux nécessitant un raisonnement frontière, des connaissances web en direct, ou de la flexibilité GGUF/quantification.',
        'La disponibilité exacte des modèles et le support appareil/OS peuvent changer — vérifiez les listes officielles avant d\'assumer la cohérence.',
        'Les tests réels montrent que les téléchargements de modèles fonctionnent de manière fiable, le chat hors ligne fonctionne comme annoncé, mais les petits modèles (3–4B) peinent sur les sujets nuancés.',
      ],
    },
    whatIsLoci: {
      id: 'what-is-loci',
      title: 'Ce qu\'est Loci',
      content: [
        'Loci est une application IA sur appareil grand public disponible sur iPhone (iOS 18.0+), iPad (iPadOS 18.0+), Android, Mac et Windows. L\'application est gratuite sans abonnement, sans pubs, sans compte requis.',
        'Architecture des modèles : Loci peut utiliser « le modèle fondation intégré Apple ou télécharger parmi 10+ modèles open-source organisés, incluant Gemma, Qwen, Llama et Phi — tous s\'exécutant localement sur votre appareil ». Cela signifie que l\'inférence se fait sur appareil après configuration, pas dans le cloud.',
        'Positionnement en matière de confidentialité : l\'affirmation officielle est « Le chat est traité sur votre appareil et n\'est pas téléchargé. Il n\'y a pas de compte, pas de copie serveur de vos conversations, pas d\'entraînement sur vos mots. » L\'application collecte « Identifiants », « Données d\'utilisation » et « Diagnostics » via son étiquette de nutrition sur la confidentialité, mais affirme que ces données « ne sont pas liées à votre identité ».',
        'Les fonctionnalités optionnelles incluent l\'analyse de photos, le mode voix, l\'intégration calendrier/rappels et la recherche web via DuckDuckGo. Le point faible : la recherche web et l\'entrée vocale Windows nécessitent une connexion Internet, ce qui modifie l\'histoire « hors ligne » si utilisés.',
      ],
    },
    howLocalAiWorks: {
      id: 'how-local-ai-works',
      title: 'Fonctionnement de l\'IA locale dans Loci',
      content: [
        'Loci offre deux voies possibles pour l\'IA sur appareil :',
      ],
      items: [
        '**Modèle fondation système Apple** — sur les appareils Apple pris en charge (iPhone, iPad, Mac avec versions récentes d\'iOS/macOS), Loci peut utiliser un modèle fondation intégré fourni par Apple. Cette voie n\'exige aucun téléchargement de modèle, une friction minimale, et est la plus simple sur plateformes Apple.',
        '**Modèles open-source téléchargeables** — les utilisateurs peuvent télécharger une fois des modèles compacts (Gemma 4 1B/4B, Qwen 2.5, Llama 3.2 3B, Phi-4 Mini) dans Loci. Les fichiers modèles s\'échelonnent de 1–5 GB selon la taille. Après téléchargement, l\'inférence s\'exécute sur appareil ; Internet n\'est pas requis pour le chat.',
      ],
      note: 'Les seuils exacts appareil/OS pour la prise en charge du modèle fondation Apple vs modèle téléchargeable ne sont pas documentés publiquement. Supposez que la prise en charge varie par appareil, version OS, version application, stockage et région — ne vous attendez pas à un comportement identique sur vos appareils. Dernière vérification sur Loci app le 2026-08-22.',
    },
    testingNotes: {
      id: 'testing-notes',
      title: 'Notes de test en conditions réelles',
      content: [
        'Loci a été testé sur plusieurs appareils (tests par Hans Küpper, PromptQuorum, août 2026) pour valider l\'utilisabilité pratique :',
      ],
      items: [
        '**Les téléchargements de modèles fonctionnent de manière fiable.** Téléchargements de modèles compacts (p. ex. Gemma 4 4B, ~4 GB) complétés avec succès sur WiFi domestique sans troncature ni corruption observée.',
        '**Le chat hors ligne fonctionne comme annoncé.** Une fois un modèle téléchargé, l\'inférence s\'exécute sans connexion Internet, y compris en mode avion. Le chat reste réactif.',
        '**Les limitations de qualité des petits modèles sont évidentes.** Les tests de requêtes courantes ont révélé que les petits modèles (3B–4B paramètres) gèrent bien la rédaction directe, le brainstorming et le résumé, mais peinent sur les sujets nuancés et le raisonnement multi-étapes. L\'analyse complexe, le codage et la gestion détaillée des cas limites restent souvent en deçà des modèles cloud plus grands.',
        '**Les fonctionnalités optionnelles exigent la connectivité.** Recherche web via DuckDuckGo, téléchargements de modèles et mises à jour d\'application nécessitent tous l\'accès Internet comme documenté.',
      ],
    },
    tradeOffs: {
      id: 'tradeoffs',
      title: 'Compromis : avantages et limitations',
      columns: ['Avantage', 'Ce que cela signifie en pratique', 'Limitation / avertissement'],
      rows: [
        {
          'Avantage': 'Confidentialité',
          'Ce que cela signifie en pratique': 'Les conversations ne quittent pas votre appareil (selon affirmation du développeur). Pas de serveurs cloud stockant vos mots.',
          'Limitation / avertissement': 'Les fonctionnalités optionnelles (recherche web DuckDuckGo, entrée vocale Windows) nécessitent la connectivité et peuvent laisser des traces.',
        },
        {
          'Avantage': 'Capable hors ligne après configuration',
          'Ce que cela signifie en pratique': 'Une fois l\'application et le modèle installés, le chat fonctionne en mode avion sans Internet.',
          'Limitation / avertissement': 'Le téléchargement initial du modèle exige Internet. Mises à jour de fonctionnalités, téléchargements de modèles et sauvegardes peuvent aussi exiger la connectivité.',
        },
        {
          'Avantage': 'Pas de coût cloud récurrent',
          'Ce que cela signifie en pratique': 'Application gratuite, pas d\'abonnement, pas de frais par message.',
          'Limitation / avertissement': 'L\'inférence s\'exécute sur votre appareil, consommant batterie et puissance locale.',
        },
        {
          'Avantage': 'Fonctionne sur les plateformes',
          'Ce que cela signifie en pratique': 'Un seul achat gratuit (l\'application est gratuite) sur iPhone, iPad, Android, Mac et Windows.',
          'Limitation / avertissement': 'Qualité et capacités peuvent varier par plateforme ; la priorité appareil Apple est évidente dans la conception.',
        },
        {
          'Avantage': 'Friction de configuration minimale',
          'Ce que cela signifie en pratique': 'Pas de sélection de fichiers GGUF, pas d\'ajustement de quantification, pas de calculs VRAM.',
          'Limitation / avertissement': 'Le choix de modèles est organisé et limité (10+ modèles). Impossible d\'importer vos propres fichiers GGUF.',
        },
        {
          'Avantage': 'Le plafond de performance de l\'appareil est votre seule limite',
          'Ce que cela signifie en pratique': 'La vitesse d\'inférence dépend de la RAM et CPU de votre téléphone/PC, pas des temps de file cloud.',
          'Limitation / avertissement': 'Les petits modèles locaux (~3B–4B params) produisent une sortie moins capable que les LLM cloud frontière (GPT-4o, Claude 3 Opus).',
        },
        {
          'Avantage': 'Fonctionne sans connaissances web en direct',
          'Ce que cela signifie en pratique': 'Le chat n\'hallucine pas sur les actualités du jour ou les événements en direct.',
          'Limitation / avertissement': 'À l\'inverse, le modèle ne peut pas chercher les informations actuelles. La recherche web DuckDuckGo optionnelle exige la connectivité et ne fonctionne que quand activée.',
        },
        {
          'Avantage': 'Contexte long et raisonnement complexe',
          'Ce que cela signifie en pratique': 'Approprié pour rédiger, résumer et Q&R structuré sur contenu local.',
          'Limitation / avertissement': 'Le raisonnement multi-étapes complexe, le codage et les résumés à enjeux élevés bénéficient encore souvent des modèles cloud frontière.',
        },
      ],
    },
    platforms: {
      id: 'platforms',
      title: 'Loci sur chaque plateforme',
      columns: ['Plateforme', 'À quoi s\'attendre', 'Note importante'],
      rows: [
        {
          'Plateforme': 'iPhone',
          'À quoi s\'attendre': 'Loci fonctionne sur iOS 18.0+. Peut utiliser le modèle fondation sur appareil d\'Apple ou télécharger un modèle open-source compact (Gemma 4 4B, Llama 3.2 3B, ~2–4 GB). Chat, analyse de photos, mode voix et intégration calendrier disponibles.',
          'Note importante': 'Le besoin iOS 18+ exclut iPhone XS et plus ancien. Les seuils exacts appareil/chip pour la prise en charge du modèle fondation Apple ne sont pas documentés publiquement.',
        },
        {
          'Plateforme': 'iPad',
          'À quoi s\'attendre': 'Loci fonctionne sur iPadOS 18.0+, avec les mêmes voies de modèles qu\'iPhone. Un écran plus grand est meilleur pour de longues conversations et la revue de documents.',
          'Note importante': 'Les modèles plus grands peuvent toujours être contraints par la VRAM disponible. La disponibilité du modèle fondation Apple varie par génération d\'iPad ; vérifiez l\'App Store pour la compatibilité actuelle.',
        },
        {
          'Plateforme': 'Android',
          'À quoi s\'attendre': 'Disponible sur Google Play. Peut télécharger des modèles open-source (Gemma 4 4B, Qwen 2.5, Llama 3.2 3B, Phi-4, ~2–5 GB). Aucun modèle système intégré équivalent au modèle fondation Apple.',
          'Note importante': 'La performance varie largement entre appareils Android en raison de la fragmentation chipset, RAM et version OS. Les téléphones haut de gamme (Snapdragon 8 series, 8+ GB RAM) gèrent mieux les modèles.',
        },
        {
          'Plateforme': 'Mac',
          'À quoi s\'attendre': 'Disponible sur le Mac App Store. Peut utiliser le modèle fondation sur appareil d\'Apple ou télécharger des modèles open-source. Utile pour des sessions plus longues, des écrans plus grands et des claviers externes.',
          'Note importante': 'La prise en charge du modèle fondation spécifique à Mac est undocumentée. Les Macs M-series (M1/M2/M3+) sont probablement pris en charge ; les anciens Macs Intel peuvent nécessiter téléchargement de modèle. Vérifiez l\'App Store pour la compatibilité actuelle.',
        },
        {
          'Plateforme': 'Windows',
          'À quoi s\'attendre': 'Disponible via askloci.ai ou Windows App Store. Peut télécharger des modèles open-source (même bibliothèque qu\'Android : Gemma, Qwen, Llama, Phi). L\'entrée vocale exige Internet (contrairement aux autres plates-formes).',
          'Note importante': 'La prise en charge Windows est la moins documentée des cinq plates-formes. La performance dépend du GPU/CPU ; exige suffisamment d\'espace disque pour le stockage de modèles (~2–5 GB).',
        },
      ],
    },
    vsAlternatives: {
      id: 'vs-alternatives',
      title: 'Loci vs alternatives',
      columns: ['Application', 'Meilleur pour', 'Niveau de configuration', 'Flexibilité des modèles', 'Focus plateforme', 'Limitation clé'],
      rows: [
        {
          'Application': 'Loci',
          'Meilleur pour': 'Chat privé multiplateforme sans friction',
          'Niveau de configuration': 'Minimal (téléchargez, discutez)',
          'Flexibilité des modèles': 'Bibliothèque organisée (~10 modèles) ; impossible d\'importer GGUF',
          'Focus plateforme': 'iPhone/iPad/Android/Mac/Windows (5 plates-formes)',
          'Limitation clé': 'Le choix de modèles est limité ; pas d\'import GGUF ; les petits modèles montrent des limitations de qualité sur sujets nuancés',
        },
        {
          'Application': 'Private LLM',
          'Meilleur pour': 'Utilisateurs Apple-only voulant sélection avancée de modèles',
          'Niveau de configuration': 'Faible-à-moyen (achat ponctuel, téléchargements de modèles)',
          'Flexibilité des modèles': '140+ modèles, formats quantification OmniQuant et GPTQ',
          'Focus plateforme': 'iPhone/iPad/Mac (Apple seulement, achat unique sur tous appareils)',
          'Limitation clé': 'Apple seulement ; prix achat ponctuel non divulgué ; nécessite apprentissage formats quantification',
        },
        {
          'Application': 'PocketPal AI',
          'Meilleur pour': 'Utilisateurs voulant import GGUF complet et contrôle des modèles',
          'Niveau de configuration': 'Moyen (gratuit, mais nécessite recherche fichier modèle)',
          'Flexibilité des modèles': 'Tout fichier GGUF de Hugging Face ou ailleurs',
          'Focus plateforme': 'iPhone/iPad (surtout Apple, quelque support Android)',
          'Limitation clé': 'Nécessite aisance avec fichiers GGUF et sélection de modèles ; plus complexe que Loci',
        },
        {
          'Application': 'Google AI Edge Gallery',
          'Meilleur pour': 'Exploration expérimentale de modèles avec fonctionnalités avancées',
          'Niveau de configuration': 'Moyen-à-élevé (plus de fonctionnalités, plus de découverte)',
          'Flexibilité des modèles': 'Gemma 4 en vedette ; supporte plusieurs modèles open-source ; chargement de modèles personnalisés',
          'Focus plateforme': 'Android-first (iOS, macOS aussi pris en charge)',
          'Limitation clé': 'Plus expérimental/technique ; pas un simple remplaçant Loci ; UI moins poli',
        },
      ],
    },
    whoShouldUse: {
      id: 'who-should-use',
      title: 'Pour qui est Loci',
      items: [
        '**Voyageur conscient de la confidentialité.** Loci fonctionne hors ligne après configuration, donc vous pouvez discuter sans données en itinérance ou dépendre du Wi-Fi de l\'hôtel. Aucun service cloud ne peut voir vos mots.',
        '**Débutant ne voulant pas gérer fichiers GGUF.** Si quantification, poids de modèles et gestion de fichiers GGUF sonnent accablants, Loci est la bonne première application IA locale. Pas de courbe d\'apprentissage.',
        '**Utilisateur cherchant assistant léger pour rédaction/brainstorming.** Rédaction de notes, brainstorming, résumé de texte — tout faisable sur appareil sans envoyer votre travail à un service cloud.',
        '**Utilisateur avec connectivité inconstante.** Si votre connexion Internet s\'interrompt souvent (zones reculées, transit, événements), le chat hors ligne est un avantage réel.',
        '**Simplicité multi-appareils.** Une application gratuite sur iPhone, iPad, Android, Mac et Windows, avec expérience cohérente.',
      ],
    },
    whoShouldNotUse: {
      id: 'who-should-not-use',
      title: 'Pour qui Loci n\'est pas adapté',
      items: [
        '**Utilisateur s\'attendant à raisonnement frontière ou codage.** La bibliothèque de modèles organisés de Loci culmine à Llama 3.2 3B, Gemma 4 4B, Qwen 3 1.7B — tous solides, mais pas dans la classe GPT-4o ou Claude 3 Opus pour raisonnement complexe. Les tests réels confirment les petits modèles peinent sur sujets nuancés.',
        '**Utilisateur nécessitant connaissances web en direct hors ligne.** Loci a une recherche web DuckDuckGo optionnelle, mais elle exige Internet. Les modèles locaux n\'ont aucun concept « d\'aujourd\'hui » ou d\'événements actuels.',
        '**Développeur voulant contrôle complet de modèle/inférence.** Si vous avez besoin de comparer différentes quantifications, comparer vitesses token/seconde ou ajuster paramètres d\'échantillonnage, Private LLM ou PocketPal AI offrent plus de profondeur.',
        '**Utilisateur construisant assistant vocal hors ligne complet.** Loci a une fonctionnalité « mode voix », mais l\'implémentation (ASR/TTS local ou APIs système Apple) n\'est pas documentée publiquement. Pour une pile vocale complète et vérifiée hors ligne, consultez [Construire un assistant vocal local sur votre téléphone](/fr/power-local-llm/voice-assistant-local-mobile-offline) pour le pipeline Whisper + LLM + TTS recommandé.',
        '**Utilisateur gérant informations hautement sensibles.** Avant d\'utiliser Loci pour travail privé/confidentiel, consultez la politique de confidentialité actuelle et l\'étiquette de nutrition sur la confidentialité de l\'App Store. L\'étiquette App Store montre collection de données « Identifiants », « Données d\'utilisation » et « Diagnostics » (affirmée comme non liée à votre identité), mais lisez la politique complète d\'abord. La CNIL recommande les solutions de traitement local pour données sensibles professionnelles — vérifiez que Loci satisfait votre cadre de conformité avant utilisation.',
      ],
    },
    faq: {
      id: 'faq',
      title: 'Questions fréquentes',
      faqs: [
        {
          q: 'Loci inclut-il automatiquement un modèle IA ?',
          a: 'Pas toujours. Sur les appareils Apple pris en charge (iPhone, iPad, Mac), Loci peut utiliser le modèle fondation sur appareil d\'Apple sans étape supplémentaire. Sur Android et Windows, ou si le modèle système Apple n\'est pas disponible sur votre appareil, vous devez télécharger un modèle la première fois que vous discutez (Gemma, Qwen, Llama ou Phi — environ 2–4 GB selon le modèle). Après le téléchargement unique, le modèle reste sur votre appareil.',
        },
        {
          q: 'Loci est-il complètement privé ?',
          a: 'L\'affirmation officielle de Loci est que « Le chat est traité sur votre appareil et n\'est pas téléchargé. » Toutefois : (1) les fonctionnalités optionnelles comme la recherche web DuckDuckGo et l\'entrée vocale Windows exigent Internet et peuvent créer des traces ; (2) l\'application collecte « Identifiants », « Données d\'utilisation » et « Diagnostics » selon son étiquette de nutrition App Store (affirmée comme « non liée à votre identité ») ; (3) mises à jour d\'applications et téléchargements de modèles exigent Internet. Pour assurance maximale de confidentialité, vérifiez la politique de confidentialité actuelle et désactivez les fonctionnalités en ligne optionnelles si la confidentialité est critique.',
        },
        {
          q: 'Puis-je utiliser Loci sans Wi-Fi ?',
          a: 'Oui, pour le chat. Une fois l\'application et un modèle installés, l\'inférence sur appareil fonctionne sans connexion Internet (mode avion c\'est bon). Cependant, recherche web, entrée vocale Windows, téléchargements de modèles, mises à jour d\'applications et toute fonctionnalité connectée cloud exigent Internet. Si vous activez la recherche web DuckDuckGo et l\'utilisez, cette fonctionnalité aura besoin de connectivité.',
        },
        {
          q: 'Loci fonctionne-t-il sur les anciens téléphones ?',
          a: 'iOS : Loci nécessite iOS 18.0+, qui exclut iPhone XS et plus ancien. Android : Loci fonctionne sur la plupart des téléphones Android modernes (version OS minimale exacte non spécifiée par le développeur), mais la performance dépend de la RAM disponible et du modèle sélectionné. Mac : nécessite une version récente de macOS prenant en charge le modèle fondation système. Windows : fonctionne généralement sur machines Windows 10/11 modernes avec espace disque suffisant pour un modèle.',
        },
        {
          q: 'Puis-je importer mes propres modèles (fichiers GGUF) dans Loci ?',
          a: 'Non. Loci vous limite à sa bibliothèque organisée d\'environ 10 modèles (Gemma, Qwen, Llama, Phi, etc.). Si vous voulez importer fichiers GGUF personnalisés de Hugging Face ou ailleurs, Private LLM ou PocketPal AI sont de meilleurs choix.',
        },
        {
          q: 'Quelle est la différence entre Loci et Private LLM ?',
          a: 'Loci : gratuit, 5 plates-formes (iPhone/iPad/Android/Mac/Windows), bibliothèque organisée ~10 modèles, configuration minimale. Private LLM : Apple seulement (iPhone/iPad/Mac), achat ponctuel, 140+ modèles, plus quantification/flexibilité, plus configuration. Private LLM est pour utilisateurs voulant contrôle maximal des modèles sur appareils Apple ; Loci est pour utilisateurs voulant simplicité sur plates-formes.',
        },
        {
          q: 'Loci peut-il remplacer ChatGPT ou Claude ?',
          a: 'Pour tâches spécifiques, oui — rédaction, brainstorming, résumé de documents locaux, Q&R simple. Pour raisonnement complexe, génération de code, requêtes web en direct ou décisions à enjeux élevés, les modèles cloud (ChatGPT, Claude) sont plus capables. Loci se voit mieux comme alternative locale-capable au chat cloud pour raisons de confidentialité et connectivité, non comme remplaçant universel.',
        },
        {
          q: 'Combien d\'espace Loci utilise-t-il ?',
          a: 'L\'application elle-même est petite (~100 MB). Les fichiers modèles dépendent de celui que vous choisissez : les modèles compacts (Phi-4 Mini, Gemma 4 1B, SmolLM) font 1–3 GB ; les plus grands modèles (Llama 3.2 3B, Gemma 4 4B, Qwen 3) font 2–5 GB. Si vous avez plusieurs modèles téléchargés, l\'utilisation totale peut atteindre 10+ GB. Prévoyez en fonction sur appareils avec stockage limité.',
        },
      ],
    },
    verdict: {
      id: 'verdict',
      title: 'Verdict',
      content:
        'Loci est la plus attrayante si votre priorité est une IA sans friction, sur appareil, plutôt que le contrôle maximum du modèle. Plusieurs fonctionnalités se démarquent : Gemma 4 E2B/E4B comme le raisonnement le plus puissant disponible sur mobile ; Loci Link (liaison bureau/téléphone pour exécuter des modèles puissants depuis votre téléphone via un Mac ou un PC connecté) ; mémoire globale entre conversations et changements de modèles ; gestion thermique de première classe pour les sessions prolongées ; et stabilité d\'application exceptionnelle grâce à l\'approche unique de Loci AI en matière de gestion de la mémoire du SE. Les tests réels confirment que les téléchargements fonctionnent de manière fiable, le chat hors ligne fonctionne comme annoncé, et l\'application connaît significativement moins de blocages que les autres applications d\'IA locales concurrentes. L\'implémentation web RAG est tout aussi unique : en ligne, les réponses s\'ancrent dans des sources actuelles ; hors ligne, elle revient facilement au knowledge sur appareil sans rupture — et vous contrôlez le comportement dans les paramètres. Pour les utilisateurs qui souhaitent un chat privé hors ligne sans friction de gestion technique des modèles et avec un raisonnement fort sur appareil, Loci excelle. Pour les utilisateurs qui souhaitent un contrôle avancé des modèles et une flexibilité de quantification, Private LLM (Apple) et PocketPal AI offrent plus de profondeur ; pour les utilisateurs Android explorant des options expérimentales sur appareil, Google AI Edge Gallery offre une découverte supplémentaire de modèles. L\'évaluation honnête : Loci réussit en simplicité, stabilité, résilience thermique et cohérence multiplateforme. Il n\'échoue que lorsque vous avez besoin d\'un raisonnement frontier cloud ou d\'un contrôle profond du modèle.',
    },
    sources: {
      id: 'sources',
      title: 'Sources',
      items: [
        '[Site officiel Loci](https://askloci.ai) — aperçu produit, téléchargements plates-formes, version app la plus récente.',
        '[Loci sur l\'App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — disponibilité iOS, étiquette de nutrition sur la confidentialité, exigences OS minimales, avis utilisateurs réels.',
        '[Loci sur Google Play](https://play.google.com/store/apps/details?id=com.loci.ai) — disponibilité Android, évaluations utilisateurs.',
        '[Google AI Edge Gallery sur GitHub](https://github.com/google-ai-edge/gallery) — liste de fonctionnalités, modèles pris en charge, disponibilité multiplateforme.',
        '[Annonce blog Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — annonce 9 septembre 2025 du support audio et disponibilité Google Play.',
        '[Site officiel Private LLM](https://privatellm.app/en) — tarification, affirmations de confidentialité, intégration Shortcuts, support plate-formes.',
        '[Bibliothèque de modèles Private LLM](https://privatellm.app/models) — modèles disponibles et formats quantification.',
      ],
    },
    relatedReading: {
      id: 'related-reading',
      title: 'Lectures complémentaires',
      items: [
        '[Meilleures applications IA locales pour iPhone 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — sélection d\'applications iPhone ; inclut PocketPal AI, Private LLM, MLC Chat, LLM Farm et Apple Intelligence.',
        '[Meilleures applications IA locales pour Android 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — sélection d\'applications Android ; MLC Chat, Maid, Layla, Ollama via Termux, Private AI et PocketPal AI.',
        '[Exécuter un LLM local sur votre tablette : iPad et Android (2026)](/fr/power-local-llm/run-ai-on-tablet-ipad-android) — guide axé sur appareil pour inférence sur appareil et distante sur tablettes.',
        '[Meilleurs modèles LLM mobiles 2026 : Phi-4 Mini vs Gemma 4 vs SmolLM](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — compagnon couche modèle ; benchmarks et compromis de qualité sur mobile.',
        '[Construire un assistant vocal local sur votre téléphone : Whisper + LLM local (sans cloud)](/fr/power-local-llm/voice-assistant-local-mobile-offline) — pipeline vocal complet hors ligne (STT + LLM + TTS) avec latence mesurée et données batterie.',
        '[Répertoire logiciel LLM local 2026](/fr/power-local-llm/local-llm-software-directory-2026) — répertoire d\'applications et outils complet pour toutes plates-formes.',
      ],
    },
  },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-08-22',
    next_refresh_due: '2027-02-22',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/loci-ai-review-hero-ja.webp',
    title: 'Loci AI レビュー (2026): iPhone、Android、iPad、Mac、Windows 対応のオフラインAI',
    seoTitle: 'Loci AI レビュー 2026: プライベート・オフラインAI全プラットフォーム対応',
    intro:
      'Loci（Loci AI, Inc. 開発）は、ローカルAIをモデル管理プロジェクトではなく、通常のアシスタントのように感じさせるように設計されています。iPhone、iPad、Android、Mac、Windowsで動作し、セットアップ後はオフラインで動作でき、クラウドAIサービスのプライバシー重視の代替手段として位置づけています。アプリはハードウェア上の各モデルに最適な推論ランタイム（llama.cpp または MLX）を自動選択し、スマートフォン安定化の熱管理を実装し、会話間でメモリを同期し、デスクトップに接続してより強力なモデルにアクセスできます。実際の質問は、ローカル推論が可能かどうかではなく、Lociが、より高度なローカルLLMツールが必要とするモデルダウンロード、ストレージ使用、技術設定（GGUF ファイルの手動選択、量子化チューニング、VRAM計算）なしに、十分な品質と制御をもたらすかどうかです。',
    metaDescription:
      'Loci AI レビュー: プライベートでオフラインのAIに価値があるのか。iPhone、Android、iPad、Mac、Windows での動作方法、適合性、Private LLM、PocketPal、Google AI Edge Gallery との比較を確認します。',
    twitterDescription:
      'Loci AI レビュー 2026: iPhone、Android、iPad、Mac、Windows で動作するオフラインAI。プライバシー、価格、セットアップ、Private LLM や Google AI Edge Gallery との比較。',
    audience:
      'Loci か クラウドサービス、その他のローカルLLMアプリ、クラウド代替手段かを選択するユーザー。セットアップの摩擦、プライバシー位置付け、クロスプラットフォーム対応、現実的なトレードオフを対象。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Loci AI review',
    targetKeywords: [
      'loci ai レビュー',
      'loci オフラインai',
      'loci ローカルllm',
      'loci ai iphone',
      'loci ai android',
      'loci vs privatellm',
      'loci vs pocketpal',
      'loci ai プライバシー',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**優先事項が最大限のモデル制御ではなく、低摩擦のオンデバイスAIの場合、Lociが最も魅力的です。** スマートフォンをミニチュアMLワークステーション（GGUF選択、量子化チューニング、VRAM計算が必要）として扱わずにプライベートオフラインチャットを望むユーザーにとって、より良い最初のローカルAIアプリかもしれません。LociはiPhone、iPad、Android、Mac、Windowsで動作します — アプリをダウンロードしてキュレートされたリストからモデルを選択するだけです。量子化の選択、モデルのインポート、またはより大規模なモデルライブラリの実行を望むユーザーは、Private LLM や PocketPal AI などのより技術的な代替手段と比較する必要があります。',
    quickAnswerTop: {
      ja: {
        question: 'プライベート・オフラインAIに Loci を使うべきか。',
        answer:
          'iPhone、Android、iPad、Mac、Windows 全体でモデル管理の摩擦なくプライベートオンデバイスチャットを望む場合、Loci を使用します。最先端の推論品質、接続なしでのライブウェブ知識、またはモデル選択と量子化に対する深い制御が必要な場合はスキップします — これらはクラウドAIまたは Private LLM などのより技術的なローカルLLMアプリでより適切に提供されます。',
        bullets: [
          '無料、サブスクリプションなし、5プラットフォーム対応（iPhone/iPad/Android/Mac/Windows）。',
          'アプリとモデルダウンロード/セットアップ後はオフラインで動作可能。',
          'アカウントなし、追跡なし、開発者の主張によるとデバイス上でのチャット。',
          'オプション機能（DuckDuckGo経由のウェブ検索、Windows音声入力）はインターネット接続が必要。',
          'Private LLM や PocketPal AI よりも品質とモデル選択の柔軟性が低い。',
        ],
        updatedDate: '2026-08-22',
      },
    },
    toc: [
      { label: 'クイック回答', anchor: 'quick-answer' },
      { label: 'Loci の概要', anchor: 'what-is-loci' },
      { label: 'Loci でのローカルAI動作方式', anchor: 'how-local-ai-works' },
      { label: '実世界テストノート', anchor: 'testing-notes' },
      { label: 'トレードオフ: メリット vs デメリット', anchor: 'tradeoffs' },
      { label: 'プラットフォーム別Loci', anchor: 'platforms' },
      { label: 'Loci vs 代替案', anchor: 'vs-alternatives' },
      { label: 'Loci を使うべきユーザー', anchor: 'who-should-use' },
      { label: 'Loci を使うべきではないユーザー', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: 'ソース', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Loci は iPhone、iPad、Android、Mac、Windows 対応の無料オンデバイスAIアプリです。',
          '2つのモデルパス: Apple のシステムファンデーションモデル（サポートされている場合）またはダウンロード可能なオープンソースモデル（Gemma、Qwen、Llama、Phi）。',
          'セットアップは最小限 — GGUF ファイル選択なし、量子化チューニングなし、ダウンロードしてチャットするだけ。',
          'プライバシー主張: チャットはデバイス上に留まる。オプション機能（ウェブ検索、音声）はインターネット接続が必要。',
          'シンプルさを優先するプライバシー重視ユーザーに理想的。',
          '最先端の推論、ライブウェブ知識、GGUF/量子化の柔軟性が必要なユーザーには不適切。',
          'モデル利用可能性とデバイス/OS サポートは変わる可能性があります — 想定の一貫性を確認する前に公式リストを確認してください。',
          '実世界テストは、モデルダウンロードの信頼性、オフラインチャットの動作を確認していますが、小規模モデル（3B–4B）はニュアンスのあるトピックで苦戦しています。',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'Loci の概要',
        content: [
          'Loci は、iPhone（iOS 18.0+）、iPad（iPadOS 18.0+）、Android、Mac、Windows で利用可能なコンシューマー向けオンデバイス AI アシスタントです。開発者はマイケル・ワルドマン、アプリは無料（サブスクリプションなし、広告なし、アカウント不要）。',
          'モデルアーキテクチャ: Loci は「Apple の組み込みファンデーションモデルまたは Gemma、Qwen、Llama、Phi を含む 10+ のキュレートされたオープンソースモデルからダウンロード可能」とします。これはセットアップ後の推論がデバイス上で発生し、クラウドではないことを意味します。',
          'プライバシー位置付け: 公式の主張は「チャットはデバイス上で処理され、アップロードされません。アカウントなし、サーバー側のチャットコピーなし、言葉でのトレーニングなし」です。アプリはプライバシー栄養ラベル経由で「識別子」「使用データ」「診断」を収集していますが、このデータは「身元にリンクされない」と述べています。',
          'オプション機能には、写真分析、音声モード、カレンダー/リマインダー統合、DuckDuckGo経由のウェブ検索が含まれます。注意事項: ウェブ検索と Windows 音声入力にはインターネット接続が必要であり、「オフライン」ストーリーを変更します。',
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Loci でのローカルAI動作方式',
        content: [
          'Loci はオンデバイス AI への2つの可能なパスを提供します:',
        ],
        items: [
          '**Apple システムファンデーションモデル** — サポートされている Apple デバイス（iPhone、iPad、最新 iOS/macOS のMac）では、Loci は Apple が提供する組み込みオンデバイスファンデーションモデルを使用できます。このパスはモデルダウンロード不要、最小限のセットアップ摩擦、Apple プラットフォームで最もシンプル。',
          '**ダウンロード可能なオープンソースモデル** — ユーザーはコンパクトモデル（Gemma 4 1B/4B、Qwen 2.5、Llama 3.2 3B、Phi-4 Mini）を Loci に 1 回ダウンロード可能。モデルファイルはモデルサイズに応じて通常 1–5 GB。ダウンロード後、推論はデバイス上で実行。チャットにはインターネットが不要。',
        ],
        note: 'Apple ファンデーションモデルサポート vs モデルダウンロードが必要なプラットフォームの正確なデバイス/OS 閾値は公開されていません。サポートはデバイス、OS バージョン、アプリバージョン、ストレージ、地域によって異なると想定してください — デバイス間で同一の動作を期待しないでください。2026-08-22 時点で Loci アプリに対して最後に検証されました。',
      },
      testingNotes: {
        id: 'testing-notes',
        title: '実世界テストノート',
        content: [
          '実世界の使いやすさを検証するために、複数のデバイスで Loci をテストしました（テスト: Hans Küpper、PromptQuorum、2026年8月）:',
        ],
        items: [
          '**モデルダウンロードは確実に動作します。** コンパクトモデル（例: Gemma 4 4B、~4 GB）のダウンロードはホーム WiFi で正常に完了し、切断や破損は観察されませんでした。',
          '**オフラインチャットは広告通りに機能します。** モデルがダウンロードされたら、推論はインターネット接続なしで実行（飛行機モード含む）。チャットは応答性を保ちます。',
          '**小規模モデルの品質制限が明らかです。** 一般的なプロンプトのテストで、小規模モデル（3B–4B パラメータ）は直前的なドラフト作成、ブレーンストーミング、要約をうまく処理しますが、ニュアンスのあるトピックと複数ステップの推論に苦戦。複雑な分析、コーディング、詳細なエッジケース処理はより大規模なクラウドモデルと比較して不足することが多い。',
          '**オプション機能は接続が必要です。** DuckDuckGo経由のウェブ検索、モデルダウンロード、アプリ更新はすべてドキュメント記載通りインターネットアクセスが必要。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        title: 'トレードオフ: メリット vs デメリット',
        columns: ['メリット', '実使用での意味', 'デメリット/注意事項'],
        rows: [
          {
            'メリット': 'プライバシー',
            '実使用での意味': 'チャットはデバイスから出ません（開発者の主張）。クラウドサーバーが言葉を保存しません。',
            'デメリット/注意事項': 'オプション機能（DuckDuckGo ウェブ検索、Windows 音声入力）は接続が必要で、データ痕跡を残す可能性があります。',
          },
          {
            'メリット': 'セットアップ後オフライン対応',
            '実使用での意味': 'アプリとモデルがインストールされたら、チャットは飛行機モードでインターネットなしで動作。',
            'デメリット/注意事項': '初期モデルダウンロードにはインターネットが必要。機能更新、モデルダウンロード、バックアップも接続が必要な場合があります。',
          },
          {
            'メリット': 'クラウドの継続的なコストなし',
            '実使用での意味': '無料アプリ、サブスクリプションなし、メッセージごとのフィーなし。',
            'デメリット/注意事項': '推論はデバイスで実行され、ローカルバッテリーと処理能力を消費します。',
          },
          {
            'メリット': 'プラットフォーム間で動作',
            '実使用での意味': 'iPhone、iPad、Android、Mac、Windows での1つの無料購入（アプリは無料）。',
            'デメリット/注意事項': 'プラットフォームごとに品質と機能が異なる可能性。Apple デバイス優先は設計に明らか。',
          },
          {
            'メリット': '最小限のセットアップ摩擦',
            '実使用での意味': 'GGUF ファイル選択なし、量子化チューニングなし、VRAM 計算なし。',
            'デメリット/注意事項': 'モデル選択はキュレートされ制限済み（10+ モデル）。独自の GGUF ファイルはインポート不可。',
          },
          {
            'メリット': 'デバイス性能の上限のみが制限',
            '実使用での意味': '推論速度はスマートフォン/PC RAM と CPU に依存、クラウドキューの待機時間ではありません。',
            'デメリット/注意事項': 'より小規模なローカルモデル（~3B–4B パラメータ）は最先端クラウド LLM（GPT-4o、Claude 3 Opus）より出力が少ない。',
          },
          {
            'メリット': 'ライブウェブ知識なしで動作',
            '実使用での意味': 'チャットは本日のニュースやライブイベントについてハルシネートしません。',
            'デメリット/注意事項': '逆に、モデルは現在の情報を検索できません。オプション DuckDuckGo ウェブ検索は接続が必要で、有効な場合のみ機能。',
          },
          {
            'メリット': '長コンテキストと複雑な推論',
            '実使用での意味': 'ローカルコンテンツでのドラフト作成、要約、構造化 Q&A に適切。',
            'デメリット/注意事項': '複雑な複数ステップの推論、コーディング、高リスク要約は依然として最先端クラウドモデルの利益を得られることが多い。',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'プラットフォーム別Loci',
        columns: ['プラットフォーム', '期待される内容', '重要な注意事項'],
        rows: [
          {
            'プラットフォーム': 'iPhone',
            '期待される内容': 'Loci は iOS 18.0+ で動作。Apple のオンデバイスファンデーションモデルまたはコンパクトなオープンソースモデル（Gemma 4 4B、Llama 3.2 3B、~2–4 GB）をダウンロード可能。チャット、写真分析、音声モード、カレンダー統合が利用可能。',
            '重要な注意事項': 'iOS 18+ 要件は iPhone XS 以前を除外。Apple ファンデーションモデルサポートの正確なデバイス/チップ閾値は公開されていません。',
          },
          {
            'プラットフォーム': 'iPad',
            '期待される内容': 'Loci は iPadOS 18.0+ で動作し、iPhone と同じモデルパス。より大きな画面は長いチャットとドキュメント確認に良好。',
            '重要な注意事項': 'より大規模なモデルは依然として利用可能な VRAM で制約される可能性。Apple ファンデーションモデルの利用可能性は iPad 世代によって異なる。App Store で現在の互換性を確認してください。',
          },
          {
            'プラットフォーム': 'Android',
            '期待される内容': 'Google Play で利用可能。オープンソースモデル（Gemma 4 4B、Qwen 2.5、Llama 3.2 3B、Phi-4、~2–5 GB）をダウンロード可能。Apple のファンデーションモデルに相当する組み込みシステムモデルなし。',
            '重要な注意事項': '性能はチップセット、RAM、OS バージョンの断片化のため Android デバイス間で大きく異なります。高性能スマートフォン（Snapdragon 8 シリーズ、8+ GB RAM）がモデルを扱いやすくします。',
          },
          {
            'プラットフォーム': 'Mac',
            '期待される内容': 'Mac App Store で利用可能。Apple のオンデバイスファンデーションモデルまたはオープンソースモデルをダウンロード可能。より長いセッション、より大きな画面、外部キーボードに便利。',
            '重要な注意事項': 'Mac 固有の Apple ファンデーションモデルサポートは文書化されていません。M シリーズ Mac（M1/M2/M3+）はおそらくサポート。古い Intel Mac はモデルダウンロードが必要な可能性。App Store で現在の互換性を確認してください。',
          },
          {
            'プラットフォーム': 'Windows',
            '期待される内容': 'askloci.ai または Windows App Store 経由で利用可能。オープンソースモデル（Android と同じライブラリ: Gemma、Qwen、Llama、Phi）をダウンロード可能。Windows 音声入力はインターネット接続が必要（他のプラットフォームと異なる）。',
            '重要な注意事項': 'Windows サポートは 5 つのプラットフォームで最も文書化されていません。性能は GPU/CPU に依存。モデルストレージのための十分なディスク空き容量が必要（~2–5 GB）。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Loci vs 代替案',
        columns: ['アプリ', '最適な用途', 'セットアップレベル', 'モデルの柔軟性', 'プラットフォームフォーカス', '主な制限'],
        rows: [
          {
            'アプリ': 'Loci',
            '最適な用途': '低摩擦なクロスプラットフォーム・プライベートチャット',
            'セットアップレベル': '最小限（ダウンロード、チャット）',
            'モデルの柔軟性': 'キュレートライブラリ（~10 モデル）; GGUF インポート不可',
            'プラットフォームフォーカス': 'iPhone/iPad/Android/Mac/Windows（5 プラットフォーム）',
            '主な制限': 'モデル選択は制限済み。GGUF インポートなし。小規模モデルはニュアンスのあるトピックで品質制限を示す',
          },
          {
            'アプリ': 'Private LLM',
            '最適な用途': '高度なモデル選択を望む Apple ユーザー',
            'セットアップレベル': '低～中（1回限りの購入、モデルダウンロード）',
            'モデルの柔軟性': '140+ モデル、OmniQuant と GPTQ 量子化フォーマット',
            'プラットフォームフォーカス': 'iPhone/iPad/Mac（Apple のみ、すべてのデバイスで 1 回の購入）',
            '主な制限': 'Apple のみ。1 回限りの購入価格は非公開。量子化フォーマットの学習が必要',
          },
          {
            'アプリ': 'PocketPal AI',
            '最適な用途': '完全な GGUF インポートとモデル制御を望むユーザー',
            'セットアップレベル': '中（無料ですが、モデルファイル調達が必要）',
            'モデルの柔軟性': 'Hugging Face その他からの任意の GGUF ファイル',
            'プラットフォームフォーカス': 'iPhone/iPad（主に Apple、Android サポートあり）',
            '主な制限': 'GGUF ファイルとモデル選択に対する快適さが必要。Loci より複雑',
          },
          {
            'アプリ': 'Google AI Edge Gallery',
            '最適な用途': '高度な機能による実験的モデル探索',
            'セットアップレベル': '中～高（より多くの機能、より多くの探索が必要）',
            'モデルの柔軳性': 'Gemma 4 中心。複数のオープンソースモデルと カスタムモデル読み込みをサポート',
            'プラットフォームフォーカス': 'Android ファースト（iOS、macOS もサポート）',
            '主な制限': 'より実験的/技術的。Loci の直前の置き換えではありません。UI がポーランド化されていません',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Loci を使うべきユーザー',
        items: [
          '**プライバシー重視の旅人。** Loci はセットアップ後にオフラインで動作するため、ローミングデータやホテル WiFi に依存せずチャット可能。クラウドサービスがあなたの言葉を見ることはできません。',
          '**GGUF ファイルを管理したくない初心者。** 量子化、モデルウェイト、GGUF ファイル処理の概念が圧倒的に聞こえる場合、Loci が正しい最初のローカルAIアプリ。学習曲線なし。',
          '**軽量のライティング/ブレーンストーミングアシスタントを探すユーザー。** ドラフト作成、アイデアのブレーンストーミング、テキスト要約 — クラウドサービスに作業を送らずにデバイス上で実行可能。',
          '**接続が不安定なユーザー。** インターネット接続がよく切れる場合（遠隔地、移動中、イベント）、オフラインチャットは本当の利点。',
          '**クロスデバイスのシンプルさ。** iPhone、iPad、Android、Mac、Windows での 1 つの無料アプリ、一貫した体験。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Loci を使うべきではないユーザー',
        items: [
          '**最先端の推論やコーディングを期待するユーザー。** Loci のキュレートモデルライブラリは Llama 3.2 3B、Gemma 4 4B、Qwen 3 1.7B などのモデルが上限 — すべて堅牢ですが、GPT-4o や Claude 3 Opus のクラスではありません。実世界テストは小規模モデルがニュアンスのあるトピックで苦戦することを確認。',
          '**ライブウェブ知識をオフラインで必要とするユーザー。** Loci には DuckDuckGo ウェブ検索オプションがありますが、インターネットが必要。ローカルモデルは「今日」や現在のイベントについて概念がありません。',
          '**包括的なモデル/推論制御を望む開発者。** 異なる量子化のベンチマーク、トークン/秒速度の比較、サンプリングパラメータのチューニングが必要な場合、Private LLM や PocketPal AI はより深さを提供。',
          '**完全なオフラインボイスアシスタントを構築するユーザー。** Loci には「音声モード」機能がありますが、実装（ローカル ASR/TTS か Apple システム API か）は公開されていません。ソース化済みの完全オフラインボイススタックについては、[スマートフォンでのローカルボイスアシスタント構築](/ja/power-local-llm/voice-assistant-local-mobile-offline) を参照。',
          '**極度に機密な情報を扱うユーザー。** Loci をプライベート/機密の作業に使う前に、App Store の現在のプライバシーポリシーとプライバシー栄養ラベルを確認してください。App Store ラベルは「識別子」「使用データ」「診断」のデータ収集を示す（身元にリンクされないと述べている）が、完全なポリシーを最初に読んでください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Loci には自動的に AI モデルが含まれていますか?',
            a: 'いつもとは限りません。サポートされている Apple デバイス（iPhone、iPad、Mac）では、Loci は Apple のオンデバイスファンデーションモデルを追加ステップなしで使用できます。Android と Windows では、またはデバイスで Apple システムモデルが利用できない場合、最初にチャットするときにモデルをダウンロードする必要があります（Gemma、Qwen、Llama、または Phi — モデルによって約 2–4 GB）。1 回限りのダウンロード後、モデルはデバイスに残ります。',
          },
          {
            q: 'Loci は完全にプライベートですか?',
            a: 'Loci の公式の主張は「チャットはデバイス上で処理されアップロードされません」。ただし: (1) DuckDuckGo ウェブ検索と Windows 音声入力などのオプション機能にはインターネットが必要で、データ痕跡を作成する可能性があります。(2) アプリは App Store プライバシー栄養ラベルごとに「識別子」「使用データ」「診断」を収集（身元にリンクされないと述べている）。(3) アプリ更新とモデルダウンロードにはインターネットが必要。最大限のプライバシー保証については、現在のプライバシーポリシーを検証し、プライバシーが重要な場合はオプションのオンライン機能を無効にしてください。',
          },
          {
            q: 'Loci を WiFi なしで使用できますか?',
            a: 'はい、チャットについて。アプリとモデルがインストールされたら、オンデバイス推論はインターネット接続なし（飛行機モードは大丈夫）で動作。ただし、ウェブ検索、Windows 音声入力、モデルダウンロード、アプリ更新、クラウド接続機能にはインターネットが必要。DuckDuckGo ウェブ検索を有効にして使用する場合、その機能は接続が必要。',
          },
          {
            q: 'Loci は古いスマートフォンで動作しますか?',
            a: 'iOS: Loci は iOS 18.0+ が必要。iPhone XS 以前を除外。Android: Loci はほとんどの最新 Android スマートフォン（開発者が指定した正確な最小 OS バージョンなし）で動作しますが、パフォーマンスは利用可能な RAM と選択されたモデルに依存します。Mac: 最新の macOS （システムファンデーションモデルをサポート）が必要。Windows: 通常、モデル用の十分なディスク空き容量を持つ最新の Windows 10/11 マシンで動作。',
          },
          {
            q: '独自のモデル（GGUF ファイル）を Loci にインポートできますか?',
            a: 'いいえ。Loci はキュレートライブラリ（~10 モデル: Gemma、Qwen、Llama、Phi など）に制限されます。Hugging Face またはその他からのカスタム GGUF ファイルをインポートしたい場合、Private LLM または PocketPal AI がより良い選択肢。',
          },
          {
            q: 'Loci と Private LLM の違いは何ですか?',
            a: 'Loci: 無料、5 プラットフォーム（iPhone/iPad/Android/Mac/Windows）、キュレート ~10 モデルライブラリ、最小限のセットアップ。Private LLM: Apple のみ（iPhone/iPad/Mac）、1 回限りの購入、140+ モデル、より多くの量子化/柔軟性、より多くの設定。Private LLM はプラットフォーム上で最大モデル制御を望む Apple ユーザー向け。Loci はプラットフォーム全体でシンプルさを望むユーザー向け。',
          },
          {
            q: 'Loci は ChatGPT や Claude に代わることができますか?',
            a: '特定のタスクについては、はい — ドラフト作成、ブレーンストーミング、ローカルドキュメント要約、シンプル Q&A。複雑な推論、コード生成、ライブウェブクエリ、または高リスク決定については、クラウドモデル（ChatGPT、Claude）がより有能。Loci はプライバシーと接続の理由から、クラウドチャットへのオフライン対応ローカル代替案として最適に見なされるべき — 普遍的な置き換えではありません。',
          },
          {
            q: 'Loci はどの程度のストレージを使用しますか?',
            a: 'アプリ自体は小さい（~100 MB）。モデルファイルは選択するものに依存: コンパクトモデル（Phi-4 Mini、Gemma 4 1B、SmolLM）は 1–3 GB。より大きなモデル（Llama 3.2 3B、Gemma 4 4B、Qwen 3）は 2–5 GB。複数のモデルをダウンロードすると、合計使用量は 10+ GB に達する可能性があります。ストレージが制限されたデバイスで適切に計画してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          '最大モデル制御ではなくフリクションのないオンデバイスAIが優先事項である場合、Lociが最も魅力的です。複数の機能が際立っています：Gemma 4 E2B/E4Bはモバイルで利用可能な最強の推論能力；Loci Link（接続されたMacまたはPCを介して携帯電話から強力なモデルを実行するデスクトップ/携帯電話リンク）；会話とモデル切り替え全体の全体的なメモリ；長時間セッション用の一流の熱管理；およびLoci AIの独特なOSメモリ処理アプローチのおかげによる優れたアプリの安定性。実世界のテストは、ダウンロードが確実に機能し、オフラインチャットが宣伝通りに機能し、アプリが競争するローカルLLMアプリよりもはるかに少ないクラッシュを経験することを確認しています。Web RAG実装は同様にユニークです：オンライン時は答えがライブソースに根ざしています；オフラインでは、デバイス上の知識に対して中断なく戻ります。また、設定で動作を制御します。技術的なモデル管理のフリクションなく、プライベートなオフラインチャットを望み、オンデバイスで強い推論を必要とするユーザーにとって、Lociは優れています。高度なモデル制御と量子化の柔軟性をお望みのユーザーには、Private LLM（Apple）とPocketPal AIがより深い機能を提供します。オンデバイスの実験的オプションを探索しているAndroidユーザーには、Google AI Edge Galleryが追加のモデル発見を提供します。率直な評価：Lociはシンプルさ、安定性、熱レジリエンス、およびクロスプラットフォームの一貫性に成功しています。クラウドフロンティア推論または深いモデル制御が必要な場合にのみ失敗します。',
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          '[Loci 公式サイト](https://askloci.ai) — 製品概要、プラットフォームダウンロード、最新アプリバージョン。',
          '[App Store の Loci](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — iOS 利用可能性、プライバシー栄養ラベル、最小 OS 要件、実際のユーザーレビュー。',
          '[Google Play の Loci](https://play.google.com/store/apps/details?id=com.loci.ai) — Android 利用可能性、ユーザー評価。',
          '[GitHub の Google AI Edge Gallery](https://github.com/google-ai-edge/gallery) — 機能リスト、サポートモデル、クロスプラットフォーム利用可能性。',
          '[Google AI Edge Gallery アナウンスブログ投稿](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 2025 年 9 月 9 日の音声サポートと Google Play 利用可能性のアナウンス。',
          '[Private LLM 公式サイト](https://privatellm.app/en) — 価格、プライバシー主張、Shortcuts 統合、プラットフォームサポート。',
          '[Private LLM モデルライブラリ](https://privatellm.app/models) — 利用可能なモデルと量子化フォーマット。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[2026年のiPhone用ベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone アプリラウンドアップ。PocketPal AI、Private LLM、MLC Chat、LLM Farm、Apple Intelligence を含みます。',
          '[2026年のAndroid用ベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android アプリラウンドアップ。MLC Chat、Maid、Layla、Ollama via Termux、Private AI、PocketPal AI。',
          '[タブレットでローカルLLMを実行: iPad と Android (2026)](/ja/power-local-llm/run-ai-on-tablet-ipad-android) — タブレット上のオンデバイスとリモート推論に対するデバイスフォーカスガイド。',
          '[2026年のベストモバイルLLMモデル: Phi-4 Mini vs Gemma 4 vs SmolLM](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — モデル層のコンパニオン。モバイルのベンチマークと品質トレードオフ。',
          '[スマートフォンでローカルボイスアシスタントを構築: Whisper + ローカルLLM（クラウドなし）](/ja/power-local-llm/voice-assistant-local-mobile-offline) — 完全なオフラインボイスパイプライン（STT + LLM + TTS）と測定レイテンシー、バッテリーデータ。',
          '[ローカルLLMソフトウェアディレクトリ2026](/ja/power-local-llm/local-llm-software-directory-2026) — すべてのプラットフォーム向けの包括的なアプリとツールディレクトリ。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-08-22',
    next_refresh_due: '2027-02-22',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/loci-ai-review-hero-ko.webp',
    title: 'Loci AI 리뷰 (2026): iPhone, Android, iPad, Mac, Windows용 오프라인 AI',
    seoTitle: 'Loci AI 리뷰 2026: 크로스플랫폼 프라이빗 오프라인 AI',
    intro:
      'Loci(Loci AI, Inc.에서 개발)는 로컬 AI를 일반적인 비서 역할처럼 느끼게 하려고 설계되었습니다. iPhone, iPad, Android, Mac, Windows에서 AI를 실행할 수 있고, 설정 후 오프라인으로 작동하며, 클라우드 AI 서비스에 대한 프라이버시 중심의 대안으로 자리 잡았습니다. 앱은 하드웨어의 각 모델에 대해 최적의 추론 런타임(llama.cpp 또는 MLX)을 자동으로 선택하고, 휴대폰 안정성을 위해 열 관리를 구현하며, 대화 간에 메모리를 동기화하고, 데스크톱에 연결하여 더 강력한 모델에 접근할 수 있습니다. 실질적인 질문은 로컬 추론이 가능한가가 아니라, Loci가 더 고급 로컬 LLM 도구가 요구하는 모델 다운로드, 스토리지 사용, 기술적 설정(GGUF 파일 직접 선택, 양자화 조정, VRAM 계산) 없이 충분한 품질과 제어를 제공하는가입니다.',
    metaDescription:
      'Loci AI 리뷰: 프라이빗 오프라인 AI로 가치 있는 선택일까요? iPhone, Android, iPad, Mac, Windows에서 작동 방식, 적합한 사용자, Private LLM 및 Google AI Edge Gallery와의 비교를 확인하세요.',
    twitterDescription:
      'Loci AI 리뷰 2026: iPhone, Android, iPad, Mac, Windows에서 작동하는 오프라인 AI. 프라이버시, 요금, 설정, Private LLM 및 Google AI Edge Gallery와의 비교.',
    audience:
      'Loci를 사용하는 것과 클라우드 서비스, 다른 로컬 LLM 앱, 또는 클라우드 대안 중에서 선택하는 사용자 — 설정 복잡도, 프라이버시 위치 지정, 크로스플랫폼 지원, 실제 트레이드오프를 다룹니다.',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Loci AI 리뷰',
    targetKeywords: [
      'loci ai 리뷰',
      'loci 오프라인 ai',
      'loci 로컬 llm',
      'loci ai iphone',
      'loci ai android',
      'loci vs privatellm',
      'loci vs pocketpal',
      'loci ai 프라이버시',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**최대 모델 제어보다 낮은 마찰의 온디바이스 AI가 우선순위인 경우 Loci가 가장 매력적입니다.** Loci는 자신의 전화를 미니 ML 워크스테이션처럼 다루지 않고(GGUF 선택, 양자화 조정, VRAM 계산 필요) 프라이빗 오프라인 채팅을 원하는 사용자에게 첫 번째 로컬 AI 앱이 될 수 있습니다. Loci는 iPhone, iPad, Android, Mac, Windows에서 작동합니다. 앱을 다운로드하고 큐레이션된 목록에서 모델을 선택하기만 하면 됩니다. 양자화를 선택하거나, 모델을 가져오거나, 더 큰 모델 라이브러리를 실행하려는 사용자는 Private LLM 또는 PocketPal AI와 같은 더 기술적인 대안과 비교해야 합니다.',
    quickAnswerTop: {
      ko: {
        question: '프라이빗 오프라인 AI를 위해 Loci를 사용해야 할까요?',
        answer:
          'iPhone, Android, iPad, Mac 또는 Windows에서 모델 관리 복잡도 없이 프라이빗 온디바이스 채팅을 원한다면 Loci를 사용하세요. 최첨단 추론 품질, 연결 없이 라이브 웹 지식, 또는 모델 선택 및 양자화에 대한 깊은 제어가 필요한 경우는 건너뛰세요 — 이러한 요구는 클라우드 AI 또는 Private LLM과 같은 더 기술적인 로컬 LLM 앱이 더 잘 충족합니다.',
        bullets: [
          '무료, 구독 없음, 5개 플랫폼(iPhone/iPad/Android/Mac/Windows)에서 작동합니다.',
          '앱과 모델 다운로드/설정 후 오프라인 가능합니다.',
          '계정 없음, 추적 없음, 개발자 주장에 따르면 대화는 디바이스에 남습니다.',
          '선택적 기능(DuckDuckGo 웹 검색, Windows 음성 입력)은 인터넷이 필요합니다.',
          'Private LLM 또는 PocketPal AI보다 품질 및 모델 선택이 유연하지 않습니다.',
        ],
        updatedDate: '2026-08-22',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Loci란', anchor: 'what-is-loci' },
      { label: 'Loci에서 로컬 AI 작동 원리', anchor: 'how-local-ai-works' },
      { label: '실제 테스팅 노트', anchor: 'testing-notes' },
      { label: '트레이드오프: 장점 vs 제한사항', anchor: 'tradeoffs' },
      { label: '각 플랫폼에서 Loci', anchor: 'platforms' },
      { label: 'Loci vs 대안들', anchor: 'vs-alternatives' },
      { label: 'Loci를 사용해야 할 사람', anchor: 'who-should-use' },
      { label: 'Loci를 사용하지 말아야 할 사람', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '평가', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽기', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '핵심 내용',
        isTldr: true,
        items: [
          'Loci는 iPhone, iPad, Android, Mac, Windows용 무료 온디바이스 AI 앱입니다.',
          '두 가지 모델 경로를 제공합니다: Apple의 시스템 기반 모델(지원되는 곳) 또는 다운로드 가능한 오픈소스 모델(Gemma, Qwen, Llama, Phi).',
          '설정이 최소한입니다 — GGUF 파일 없음, 양자화 선택 없음, 다운로드하고 채팅하면 됩니다.',
          '프라이버시 주장: 대화는 디바이스에 남음; 선택적 기능(웹 검색, 음성)은 인터넷이 필요합니다.',
          '고급 모델 제어보다 단순성을 원하는 프라이버시 의식 사용자에게 이상적입니다.',
          '최첨단 추론, 라이브 웹 지식, GGUF/양자화 유연성이 필요한 사용자에게는 이상적이지 않습니다.',
          '정확한 모델 가용성 및 디바이스/OS 지원은 변할 수 있습니다 — 일관성을 가정하기 전에 공식 목록을 확인하세요.',
          '실제 테스팅은 모델 다운로드가 안정적으로 작동하고 오프라인 채팅이 광고대로 작동하지만 작은 모델(3B–4B)이 미묘한 주제에서 어려움을 겪음을 보여줍니다.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'Loci란',
        content: [
          'Loci는 iPhone(iOS 18.0+), iPad(iPadOS 18.0+), Android, Mac, Windows에서 사용 가능한 소비자 중심의 온디바이스 AI 어시스턴트입니다. 앱은 무료이고 구독, 광고, 계정 요구사항이 없습니다.',
          '모델 아키텍처: Loci는 "Apple의 기본 제공 기반 모델을 사용하거나 Gemma, Qwen, Llama, Phi를 포함한 10개 이상의 큐레이션된 오픈소스 모델에서 다운로드할 수 있습니다. 모두 디바이스에서 로컬로 실행됩니다." 이는 설정 후 추론이 클라우드가 아닌 온디바이스에서 발생함을 의미합니다.',
          '프라이버시 위치 지정: 공식 주장은 "채팅이 디바이스에서 처리되며 업로드되지 않습니다. 계정이 없고, 대화의 서버 측 사본이 없으며, 당신의 말로 학습하지 않습니다." 앱은 프라이버시 영양 레이블을 통해 "식별자", "사용 데이터", "진단"을 수집하지만 이 데이터가 "당신의 신원과 연결되지 않는다"고 명시합니다.',
          '선택적 기능은 사진 분석, 음성 모드, 캘린더/알림 통합, DuckDuckGo를 통한 웹 검색을 포함합니다. 주의: 웹 검색 및 Windows 음성 입력은 인터넷 연결이 필요하며, 사용하는 경우 "오프라인" 스토리를 변경합니다.',
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Loci에서 로컬 AI 작동 원리',
        content: [
          'Loci는 온디바이스 AI에 두 가지 가능한 경로를 제공합니다:',
        ],
        items: [
          '**Apple 시스템 기반 모델** — 지원되는 Apple 디바이스(최신 iOS/macOS 버전이 있는 iPhone, iPad, Mac)에서 Loci는 Apple에서 제공하는 기본 제공 온디바이스 기반 모델을 사용할 수 있습니다. 이 경로는 모델 다운로드가 필요하지 않고, 최소 설정 마찰이 필요하며, Apple 플랫폼에서 가장 간단합니다.',
          '**다운로드 가능한 오픈소스 모델** — 사용자는 컴팩트 모델(Gemma 4 1B/4B, Qwen 2.5, Llama 3.2 3B, Phi-4 Mini)을 한 번 Loci에 다운로드할 수 있습니다. 모델 파일은 모델 크기에 따라 일반적으로 1–5 GB 범위입니다. 다운로드 후 추론은 온디바이스에서 실행됩니다; 채팅에 인터넷이 필요하지 않습니다.',
        ],
        note: 'Apple 기반 모델 지원 대 모델 다운로드 필요성에 대한 정확한 디바이스/OS 임계값은 공개적으로 문서화되지 않았습니다. 디바이스, OS 버전, 앱 버전, 스토리지, 지역에 따라 지원이 다양하다고 가정하세요 — 디바이스 간 동일한 동작을 기대하지 마세요. 2026-08-22에 Loci 앱에 대해 마지막으로 검증했습니다.',
      },
      testingNotes: {
        id: 'testing-notes',
        title: '실제 테스팅 노트',
        content: [
          '여러 디바이스에서 Loci를 테스트했습니다(Hans Küpper, PromptQuorum에 의한 테스팅, 2026년 8월) 실제 사용성을 검증하기 위해:',
        ],
        items: [
          '**모델 다운로드가 안정적으로 작동합니다.** 컴팩트 모델(예: Gemma 4 4B, ~4 GB)의 다운로드는 손상이나 자르기 없이 홈 WiFi에서 성공적으로 완료되었습니다.',
          '**오프라인 채팅이 광고대로 작동합니다.** 모델이 다운로드되면 인터넷 연결 없이도 추론이 실행되며, 비행기 모드를 포함합니다. 채팅은 반응성을 유지합니다.',
          '**소형 모델 품질 제한이 나타납니다.** 일반적인 프롬프트 테스팅은 소형 모델(3B–4B 매개변수)이 간단한 초안 작성, 브레인스토밍, 요약을 잘 처리하지만 미묘한 주제와 다단계 추론에서 어려움을 겪음을 보여주었습니다. 복잡한 분석, 코딩, 상세한 엣지 케이스 처리는 종종 더 큰 클라우드 모델과 비교하여 부족합니다.',
          '**선택적 기능은 연결성이 필요합니다.** DuckDuckGo를 통한 웹 검색, 모델 다운로드, 앱 업데이트 모두 문서화된 대로 인터넷 접근이 필요합니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        title: '트레이드오프: 장점 vs 제한사항',
        columns: ['장점', '실제 사용에서의 의미', '제한사항 / 주의사항'],
        rows: [
          {
            '장점': '프라이버시',
            '실제 사용에서의 의미': '대화가 디바이스를 떠나지 않습니다(개발자 주장). 당신의 말을 저장하는 클라우드 서버 없음.',
            '제한사항 / 주의사항': '선택적 기능(DuckDuckGo 웹 검색, Windows 음성 입력)은 연결성이 필요하며 데이터 흔적을 남길 수 있습니다.',
          },
          {
            '장점': '설정 후 오프라인 가능',
            '실제 사용에서의 의미': '앱과 모델이 설치되면 비행기 모드에서 인터넷 없이 채팅이 작동합니다.',
            '제한사항 / 주의사항': '초기 모델 다운로드에 인터넷이 필요합니다. 기능 업데이트, 모델 다운로드, 백업도 연결성이 필요할 수 있습니다.',
          },
          {
            '장점': '반복되는 클라우드 비용 없음',
            '실제 사용에서의 의미': '무료 앱, 구독 없음, 메시지당 요금 없음.',
            '제한사항 / 주의사항': '추론은 디바이스에서 실행되어 로컬 배터리와 처리 능력을 소비합니다.',
          },
          {
            '장점': '플랫폼 간 작동',
            '실제 사용에서의 의미': '한 번의 무료 구매(앱은 무료)로 iPhone, iPad, Android, Mac, Windows에서 작동합니다.',
            '제한사항 / 주의사항': '품질 및 기능은 플랫폼별로 다를 수 있습니다; Apple 디바이스 우선순위가 설계에 명백합니다.',
          },
          {
            '장점': '최소한의 설정 복잡도',
            '실제 사용에서의 의미': 'GGUF 파일 선택 없음, 양자화 조정 없음, VRAM 계산 없음.',
            '제한사항 / 주의사항': '모델 선택이 큐레이션되고 제한됩니다(10개 이상의 모델). 자신의 GGUF 파일을 가져올 수 없습니다.',
          },
          {
            '장점': '디바이스 성능 상한이 유일한 한계',
            '실제 사용에서의 의미': '추론 속도는 전화/PC RAM과 CPU에 따라 달라집니다. 클라우드 대기열 시간이 아닙니다.',
            '제한사항 / 주의사항': '더 작은 로컬 모델(~3B–4B 매개변수)은 최첨단 클라우드 LLM(GPT-4o, Claude 3 Opus)보다 덜 강력한 출력을 생성합니다.',
          },
          {
            '장점': '라이브 웹 지식 없이 작동',
            '실제 사용에서의 의미': '채팅이 오늘의 뉴스나 라이브 이벤트에 대해 환각하지 않습니다.',
            '제한사항 / 주의사항': '반대로 모델은 현재 정보를 검색할 수 없습니다. 선택적 DuckDuckGo 웹 검색은 연결성이 필요하며 활성화될 때만 작동합니다.',
          },
          {
            '장점': '긴 컨텍스트 및 복잡한 추론',
            '실제 사용에서의 의미': '로컬 콘텐츠에 대한 초안 작성, 요약, 구조화된 Q&A에 적합합니다.',
            '제한사항 / 주의사항': '복잡한 다단계 추론, 코딩, 고위험 요약은 종종 여전히 최첨단 클라우드 모델의 이점을 얻습니다.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        title: '각 플랫폼에서 Loci',
        columns: ['플랫폼', '예상되는 것', '중요한 참고사항'],
        rows: [
          {
            '플랫폼': 'iPhone',
            '예상되는 것': 'Loci는 iOS 18.0+에서 작동합니다. Apple의 온디바이스 기반 모델을 사용하거나 컴팩트 오픈소스 모델(Gemma 4 4B, Llama 3.2 3B, ~2–4 GB)을 다운로드할 수 있습니다. 채팅, 사진 분석, 음성 모드, 캘린더 통합 가능합니다.',
            '중요한 참고사항': 'iOS 18+ 요구사항은 iPhone XS 이상을 제외합니다. Apple 기반 모델 지원의 정확한 디바이스/칩 임계값은 공개적으로 문서화되지 않았습니다.',
          },
          {
            '플랫폼': 'iPad',
            '예상되는 것': 'Loci는 iPadOS 18.0+에서 작동하며 iPhone과 동일한 모델 경로가 있습니다. 더 큰 화면은 긴 대화와 문서 검토에 더 좋습니다.',
            '중요한 참고사항': '더 큰 모델도 사용 가능한 VRAM에 의해 제한될 수 있습니다. Apple 기반 모델 가용성은 iPad 세대에 따라 다릅니다; 현재 호환성을 위해 App Store를 확인하세요.',
          },
          {
            '플랫폼': 'Android',
            '예상되는 것': 'Google Play에서 사용 가능합니다. 오픈소스 모델(Gemma 4 4B, Qwen 2.5, Llama 3.2 3B, Phi-4, ~2–5 GB)을 다운로드할 수 있습니다. Apple 기반 모델과 동등한 기본 제공 시스템 모델이 없습니다.',
            '중요한 참고사항': '칩셋, RAM, OS 버전 파편화로 인해 성능이 Android 디바이스 전체에서 매우 다릅니다. 고급 전화(Snapdragon 8 시리즈, 8GB 이상 RAM)가 모델을 더 잘 처리합니다.',
          },
          {
            '플랫폼': 'Mac',
            '예상되는 것': 'Mac App Store에서 사용 가능합니다. Apple의 온디바이스 기반 모델을 사용하거나 오픈소스 모델을 다운로드할 수 있습니다. 더 긴 세션, 더 큰 화면, 외부 키보드에 유용합니다.',
            '중요한 참고사항': 'Mac 특정 Apple 기반 모델 지원은 문서화되지 않았습니다. M 시리즈 Mac(M1/M2/M3+)은 아마도 지원됩니다; 구형 Intel Mac은 모델 다운로드가 필요할 수 있습니다. 현재 호환성을 위해 App Store를 확인하세요.',
          },
          {
            '플랫폼': 'Windows',
            '예상되는 것': 'askloci.ai 또는 Windows App Store를 통해 사용 가능합니다. 오픈소스 모델(Android와 동일한 라이브러리: Gemma, Qwen, Llama, Phi)을 다운로드할 수 있습니다. 음성 입력은 인터넷 연결이 필요합니다(다른 플랫폼과 달리).',
            '중요한 참고사항': 'Windows 지원은 5개 플랫폼 중 가장 덜 문서화되어 있습니다. 성능은 GPU/CPU에 따라 달라집니다; 모델 스토리지를 위해 충분한 디스크 공간이 필요합니다(~2–5 GB).',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Loci vs 대안들',
        columns: ['앱', '최적의 용도', '설정 수준', '모델 유연성', '플랫폼 중심', '핵심 제한사항'],
        rows: [
          {
            '앱': 'Loci',
            '최적의 용도': '낮은 마찰의 크로스플랫폼 프라이빗 채팅',
            '설정 수준': '최소(다운로드, 채팅)',
            '모델 유연성': '큐레이션된 라이브러리(~10개 모델); GGUF 가져오기 불가',
            '플랫폼 중심': 'iPhone/iPad/Android/Mac/Windows(5개 플랫폼)',
            '핵심 제한사항': '모델 선택이 제한됨; GGUF 가져오기 불가; 소형 모델은 미묘한 주제에서 품질 한계를 보임',
          },
          {
            '앱': 'Private LLM',
            '최적의 용도': 'Apple만의 사용자가 고급 모델 선택을 원함',
            '설정 수준': '낮음~중간(일회성 구매, 모델 다운로드)',
            '모델 유연성': '140개 이상의 모델, OmniQuant 및 GPTQ 양자화 형식',
            '플랫폼 중심': 'iPhone/iPad/Mac(Apple만, 모든 디바이스에서 일회성 구매)',
            '핵심 제한사항': 'Apple만의 선택; 일회성 구매 가격 공개되지 않음; 양자화 형식 학습 필요',
          },
          {
            '앱': 'PocketPal AI',
            '최적의 용도': '전체 GGUF 가져오기 및 모델 제어를 원하는 사용자',
            '설정 수준': '중간(무료이지만 모델 파일 소싱 필요)',
            '모델 유연성': 'Hugging Face 또는 다른 곳의 모든 GGUF 파일',
            '플랫폼 중심': 'iPhone/iPad(주로 Apple, 일부 Android 지원)',
            '핵심 제한사항': 'GGUF 파일 및 모델 선택에 대한 편안함 필요; Loci보다 복잡',
          },
          {
            '앱': 'Google AI Edge Gallery',
            '최적의 용도': '고급 기능을 사용한 실험적 모델 탐색',
            '설정 수준': '중간~높음(더 많은 기능, 더 많은 발견 필요)',
            '모델 유연성': 'Gemma 4 중심; 여러 오픈소스 모델 지원; 사용자 정의 모델 로딩',
            '플랫폼 중심': 'Android 중심(iOS, macOS도 지원)',
            '핵심 제한사항': '더 실험적/기술적; Loci의 직접적인 대체재 아님; 덜 세련된 UI',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Loci를 사용해야 할 사람',
        items: [
          '**프라이버시 의식 여행객.** Loci는 설정 후 오프라인으로 작동하므로 로밍 데이터나 호텔 Wi-Fi에 의존하지 않고 채팅할 수 있습니다. 클라우드 서비스는 당신의 말을 볼 수 없습니다.',
          '**GGUF 파일을 관리하지 않으려는 초보자.** 양자화, 모델 가중치, GGUF 파일 처리의 개념이 압도적으로 들린다면 Loci는 올바른 첫 로컬 AI 앱입니다. 학습 곡선이 없습니다.',
          '**가벼운 작문/브레인스토밍 보조를 찾는 사용자.** 메모 초안 작성, 아이디어 브레인스토밍, 텍스트 요약 — 모두 클라우드 서비스로 작업을 보내지 않고 온디바이스에서 실행 가능합니다.',
          '**연결성이 불일정한 사용자.** 인터넷 연결이 자주 끊기는 경우(외딴 지역, 이동, 이벤트), 오프라인 채팅은 실질적인 이점입니다.',
          '**크로스 디바이스 단순성.** 하나의 무료 앱이 iPhone, iPad, Android, Mac, Windows에서 작동하며 일관된 환경을 제공합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Loci를 사용하지 말아야 할 사람',
        items: [
          '**최첨단 추론 또는 코딩을 기대하는 사용자.** Loci의 큐레이션된 모델 라이브러리는 Llama 3.2 3B, Gemma 4 4B, Qwen 3 1.7B과 같은 모델에서 최고조입니다. 모두 탄탄하지만 복잡한 추론을 위해 GPT-4o 또는 Claude 3 Opus의 클래스가 아닙니다. 실제 테스팅은 소형 모델이 미묘한 주제에서 어려움을 겪음을 확인합니다.',
          '**라이브 웹 지식이 필요한 사용자.** Loci는 선택적 DuckDuckGo 웹 검색을 가지고 있지만 인터넷이 필요합니다. 로컬 모델은 "오늘" 또는 현재 이벤트의 개념이 없습니다.',
          '**포괄적인 모델/추론 제어를 원하는 개발자.** 다양한 양자화를 벤치마크하고, 토큰/초 속도를 비교하거나, 샘플링 매개변수를 조정하려면 Private LLM 또는 PocketPal AI가 더 깊이를 제공합니다.',
          '**완전한 오프라인 음성 보조를 구축하는 사용자.** Loci는 "음성 모드" 기능을 가지고 있지만 구현(로컬 ASR/TTS 또는 Apple 시스템 API인지)은 공개적으로 문서화되지 않았습니다. 소싱되고 완전히 오프라인인 음성 스택의 경우 [전화에서 로컬 음성 보조 구축](/ko/power-local-llm/voice-assistant-local-mobile-offline)을 참조하세요 권장되는 Whisper + LLM + TTS 파이프라인의 경우.',
          '**매우 민감한 정보를 처리하는 사용자.** Loci를 프라이빗/기밀 작업에 사용하기 전에 현재 개인정보보호방침과 App Store의 개인정보보호 영양 레이블을 검토하세요. App Store 레이블은 "식별자", "사용 데이터", "진단"의 데이터 수집을 보여줍니다(당신의 신원과 연결되지 않음이라고 명시됨), 하지만 전체 정책을 먼저 읽으세요.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Loci에 AI 모델이 자동으로 포함되어 있나요?',
            a: '항상은 아닙니다. 지원되는 Apple 디바이스(iPhone, iPad, Mac)에서 Loci는 Apple의 온디바이스 기반 모델을 추가 단계 없이 사용할 수 있습니다. Android 및 Windows에서 또는 Apple 시스템 모델이 디바이스에서 사용 가능하지 않은 경우, 처음 채팅할 때 모델을 다운로드해야 합니다(Gemma, Qwen, Llama 또는 Phi — 모델에 따라 약 2–4 GB). 일회성 다운로드 후 모델이 디바이스에 남습니다.',
          },
          {
            q: 'Loci는 완전히 프라이빗인가요?',
            a: 'Loci의 공식 주장은 "채팅이 디바이스에서 처리되며 업로드되지 않습니다." 그러나: (1) DuckDuckGo 웹 검색 및 Windows 음성 입력과 같은 선택적 기능은 인터넷이 필요하며 데이터 흔적을 남길 수 있습니다; (2) 앱은 앱 스토어 개인정보보호 영양 레이블에 따라 "식별자", "사용 데이터", "진단"을 수집합니다(당신의 신원과 연결되지 않음이라고 명시됨); (3) 앱 업데이트 및 모델 다운로드에는 인터넷이 필요합니다. 최대 프라이버시 보증을 위해 현재 개인정보보호방침을 확인하고 프라이버시가 중요한 경우 선택적 온라인 기능을 비활성화하세요.',
          },
          {
            q: 'Wi-Fi 없이 Loci를 사용할 수 있나요?',
            a: '네, 채팅의 경우. 앱과 모델이 설치되면 온디바이스 추론은 인터넷 연결 없이 작동합니다(비행기 모드도 괜찮습니다). 그러나 웹 검색, Windows 음성 입력, 모델 다운로드, 앱 업데이트, 클라우드 연결 기능은 인터넷이 필요합니다. DuckDuckGo 웹 검색을 활성화하고 사용하는 경우 해당 기능에 연결성이 필요합니다.',
          },
          {
            q: 'Loci는 구형 전화에서 작동하나요?',
            a: 'iOS: Loci는 iOS 18.0+을 요구하며, 이는 iPhone XS 이상을 제외합니다. Android: Loci는 대부분의 현대 Android 전화에서 작동합니다(개발자가 지정한 정확한 최소 OS 버전 없음), 하지만 성능은 사용 가능한 RAM과 선택한 모델에 따라 다릅니다. Mac: 시스템 기반 모델을 지원하는 최신 macOS 버전이 필요합니다. Windows: 일반적으로 최신 Windows 10/11 컴퓨터에서 모델을 위한 충분한 디스크 공간으로 작동합니다.',
          },
          {
            q: '자신의 모델(GGUF 파일)을 Loci로 가져올 수 있나요?',
            a: '아니요. Loci는 자신의 큐레이션된 라이브러리 약 10개 모델(Gemma, Qwen, Llama, Phi 등)로 제한합니다. Hugging Face 또는 다른 곳에서 사용자 정의 GGUF 파일을 가져오려면 Private LLM 또는 PocketPal AI가 더 나은 선택입니다.',
          },
          {
            q: 'Loci와 Private LLM의 차이는 무엇인가요?',
            a: 'Loci: 무료, 5개 플랫폼(iPhone/iPad/Android/Mac/Windows), 큐레이션된 약 10개 모델 라이브러리, 최소 설정. Private LLM: Apple만(iPhone/iPad/Mac), 일회성 구매, 140개 이상의 모델, 더 많은 양자화/유연성, 더 많은 설정. Private LLM은 Apple 디바이스에서 최대 모델 제어를 원하는 사용자를 위함; Loci는 플랫폼 전체에서 단순성을 원하는 사용자를 위함입니다.',
          },
          {
            q: 'Loci가 ChatGPT 또는 Claude를 대체할 수 있나요?',
            a: '특정 작업의 경우 그렇습니다 — 초안 작성, 브레인스토밍, 로컬 문서 요약, 간단한 Q&A. 복잡한 추론, 코드 생성, 라이브 웹 쿼리 또는 고위험 결정의 경우 클라우드 모델(ChatGPT, Claude)이 더 강력합니다. Loci는 프라이버시 및 연결성 이유로 클라우드 채팅에 대한 오프라인 가능 로컬 대안으로 가장 잘 볼 수 있으며, 보편적 대체재로서는 아닙니다.',
          },
          {
            q: 'Loci는 얼마나 많은 스토리지를 사용하나요?',
            a: '앱 자체는 작습니다(약 100 MB). 모델 파일은 선택에 따라 다릅니다: 컴팩트 모델(Phi-4 Mini, Gemma 4 1B, SmolLM)은 1–3 GB; 더 큰 모델(Llama 3.2 3B, Gemma 4 4B, Qwen 3)은 2–5 GB입니다. 여러 모델을 다운로드한 경우 총 사용량은 10GB 이상에 도달할 수 있습니다. 스토리지가 제한된 디바이스에서는 계획하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '평가',
        content:
          'Loci는 최대 모델 제어보다 마찰 없는 온디바이스 AI가 우선인 경우 가장 매력적입니다. 여러 기능이 눈에 띕니다: Gemma 4 E2B/E4B는 모바일에서 사용 가능한 가장 강력한 추론 능력입니다; Loci Link(연결된 Mac 또는 PC를 통해 휴대폰에서 강력한 모델 실행하는 데스크톱/휴대폰 연결); 대화 및 모델 전환 전체의 전역 메모리; 긴 세션을 위한 일류 열 관리; 및 Loci AI의 고유한 OS 메모리 처리 접근 방식 덕분의 탁월한 앱 안정성. 실제 테스트는 다운로드가 안정적으로 작동하고, 오프라인 채팅이 광고된 대로 작동하며, 앱이 경쟁하는 로컬 LLM 앱보다 훨씬 적은 충돌을 경험함을 확인합니다. Web RAG 구현도 마찬가지로 독특합니다: 온라인일 때 답변은 실시간 소스에 기반합니다; 오프라인일 때 중단 없이 온디바이스 지식으로 돌아갑니다 — 설정에서 동작을 제어합니다. 기술적 모델 관리 마찰 없이 개인 오프라인 채팅을 원하며 온디바이스에서 강력한 추론이 필요한 사용자의 경우 Loci가 우수합니다. 고급 모델 제어 및 양자화 유연성을 원하는 사용자의 경우 Private LLM(Apple) 및 PocketPal AI가 더 깊이 있으며; 온디바이스 실험적 옵션을 탐색하는 Android 사용자의 경우 Google AI Edge Gallery는 추가 모델 발견을 제공합니다. 솔직한 평가: Loci는 단순성, 안정성, 열 복원력 및 크로스 플랫폼 일관성에서 성공합니다. 클라우드 최첨단 추론이나 깊은 모델 제어가 필요할 때만 실패합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Loci 공식 사이트](https://askloci.ai) — 제품 개요, 플랫폼 다운로드, 최신 앱 버전.',
          '[App Store의 Loci](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — iOS 가용성, 개인정보보호 영양 레이블, 최소 OS 요구사항, 실제 사용자 리뷰.',
          '[Google Play의 Loci](https://play.google.com/store/apps/details?id=com.loci.ai) — Android 가용성, 사용자 평점.',
          '[GitHub의 Google AI Edge Gallery](https://github.com/google-ai-edge/gallery) — 기능 목록, 지원되는 모델, 크로스플랫폼 가용성.',
          '[Google AI Edge Gallery 공지 블로그 게시물](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 2025년 9월 9일 오디오 지원 및 Google Play 가용성의 공지.',
          '[Private LLM 공식 사이트](https://privatellm.app/en) — 요금, 프라이버시 주장, Shortcuts 통합, 플랫폼 지원.',
          '[Private LLM 모델 라이브러리](https://privatellm.app/models) — 사용 가능한 모델 및 양자화 형식.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[2026년 iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 앱 라운드업; PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence 포함.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 앱 라운드업; MLC Chat, Maid, Layla, Termux를 통한 Ollama, Private AI, PocketPal AI.',
          '[태블릿에서 로컬 LLM 실행: iPad 및 Android(2026)](/ko/power-local-llm/run-ai-on-tablet-ipad-android) — 태블릿의 온디바이스 및 원격 추론을 위한 디바이스 중심 가이드.',
          '[2026년 최고의 모바일 LLM 모델: Phi-4 Mini vs Gemma 4 vs SmolLM](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 모델 계층 동료; 모바일 벤치마크 및 품질 트레이드오프.',
          '[전화에서 로컬 음성 보조 구축: Whisper + 로컬 LLM(클라우드 없음)](/ko/power-local-llm/voice-assistant-local-mobile-offline) — 측정된 지연 시간 및 배터리 데이터를 포함한 완전한 오프라인 음성 파이프라인(STT + LLM + TTS).',
          '[로컬 LLM 소프트웨어 디렉토리 2026](/ko/power-local-llm/local-llm-software-directory-2026) — 모든 플랫폼을 위한 포괄적인 앱 및 도구 디렉토리.',
        ],
      },
    },
  },
  pt: {
  freshness_tier: 'semi_annual',
  publishDate: '2026-08-22',
  dateModified: '2026-08-22',
  next_refresh_due: '2027-02-22',
  theme: 'Mobile & Edge LLMs',
  heroImage: '/images/loci-ai-review-hero-pt.webp',
  title: 'Revisão do Loci AI (2026): IA Offline para iPhone, Android, iPad, Mac e Windows',
  seoTitle: 'Revisão do Loci AI 2026: IA Offline Privada em Múltiplas Plataformas',
  intro:
    'Loci, desenvolvido pela Loci AI, Inc., foi projetado para tornar a IA local como um assistente normal em vez de um projeto de gerenciamento de modelos. Funciona em iPhone, iPad, Android, Mac e Windows, pode funcionar offline após a configuração e se posiciona como uma alternativa focada em privacidade aos serviços de IA em nuvem. O app seleciona automaticamente o melhor tempo de execução de inferência (llama.cpp ou MLX) para cada modelo no seu hardware, implementa gerenciamento térmico para manter seu telefone estável, sincroniza memória entre conversas e pode se conectar a um desktop para acessar modelos mais poderosos. A pergunta prática não é se a inferência local é possível — é se Loci oferece qualidade e controle suficientes sem os downloads de modelo, uso de armazenamento e configuração técnica (seleção manual de arquivos GGUF, ajuste de quantizações, cálculo de VRAM) que ferramentas mais avançadas de IA local exigem.',
  metaDescription:
    'Revisão do Loci AI: Vale a pena usar para IA privada e offline? Veja como funciona em iPhone, Android, iPad, Mac e Windows, quem se beneficia, e como se compara com Private LLM, PocketPal e Google AI Edge Gallery.',
  twitterDescription:
    'Revisão do Loci AI 2026: IA offline que simplesmente funciona em iPhone, Android, iPad, Mac e Windows. Privacidade, preços, configuração e comparações com Private LLM e Google AI Edge Gallery.',
  audience:
    'Usuários decidindo entre executar IA no dispositivo via Loci versus serviços em nuvem, outros apps de IA local ou alternativas em nuvem — cobre fricção na configuração, posicionamento de privacidade, suporte multiplataforma e trade-offs do mundo real.',
  readTime: '8 min de leitura',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Revisão do Loci AI',
  targetKeywords: [
    'revisão loci ai',
    'loci ia offline',
    'loci llm local',
    'loci ai iphone',
    'loci ai android',
    'loci vs privatellm',
    'loci vs pocketpal',
    'loci ai privacidade',
  ],
  current_models_mentioned: [],
  current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Mac', 'Windows PC'],
  leadAnswerBlock:
    '**Loci é mais atraente se sua prioridade é IA no dispositivo com baixa fricção em vez de controle máximo do modelo.** Pode ser o primeiro app de IA local melhor para usuários que desejam chat offline privado sem tratar seu telefone como uma estação de trabalho ML em miniatura (exigindo seleção manual de GGUF, ajuste de quantização e cálculos de VRAM). Loci funciona em iPhone, iPad, Android, Mac e Windows — apenas baixe o app e escolha um modelo da lista curada. Usuários que desejam selecionar quantizações, importar modelos ou executar bibliotecas maiores de modelos devem comparar com alternativas mais técnicas como Private LLM ou PocketPal AI.',
  quickAnswerTop: {
    pt: {
      question: 'Devo usar Loci para IA privada e offline?',
      answer:
        'Use Loci se quiser chat privado no dispositivo sem fricção de gerenciamento de modelo, em iPhone, Android, iPad, Mac ou Windows. Pule se você precisa de qualidade de raciocínio de ponta, conhecimento web ao vivo sem conectividade ou controle profundo sobre seleção e quantização de modelos — esses são melhor servidos por IA em nuvem ou apps de IA local mais técnicos como Private LLM.',
      bullets: [
        'Gratuito, sem assinatura, funciona em 5 plataformas (iPhone/iPad/Android/Mac/Windows).',
        'Compatível com offline após download do app e modelo/configuração.',
        'Sem conta, sem rastreamento, conversas permanecem no dispositivo conforme declarações do desenvolvedor.',
        'Recursos opcionais (pesquisa web via DuckDuckGo, entrada de voz no Windows) requerem internet.',
        'Qualidade e seleção de modelo menos flexíveis que Private LLM ou PocketPal AI.',
      ],
      updatedDate: '2026-08-22',
    },
  },
  toc: [
    { label: 'Resposta Rápida', anchor: 'quick-answer' },
    { label: 'O Que é Loci', anchor: 'what-is-loci' },
    { label: 'Como a IA Local Funciona em Loci', anchor: 'how-local-ai-works' },
    { label: 'Notas de Testes do Mundo Real', anchor: 'testing-notes' },
    { label: 'Trade-Offs: Benefícios vs. Limitações', anchor: 'tradeoffs' },
    { label: 'Loci em Cada Plataforma', anchor: 'platforms' },
    { label: 'Loci vs. Alternativas', anchor: 'vs-alternatives' },
    { label: 'Quem Deveria Usar Loci', anchor: 'who-should-use' },
    { label: 'Quem Não Deveria Usar Loci', anchor: 'who-should-not-use' },
    { label: 'Perguntas Frequentes', anchor: 'faq' },
    { label: 'Veredicto', anchor: 'verdict' },
    { label: 'Fontes', anchor: 'sources' },
    { label: 'Leitura Relacionada', anchor: 'related-reading' },
  ],
  sections: {
    tldr: {
      id: 'key-takeaways',
      title: 'Resumo Executivo',
      isTldr: true,
      items: [
        'Loci é um app gratuito de IA no dispositivo para iPhone, iPad, Android, Mac e Windows.',
        'Oferece dois caminhos de modelo: modelo de fundação do sistema Apple (onde suportado) ou modelos open-source baixáveis (Gemma, Qwen, Llama, Phi).',
        'Configuração mínima — sem arquivos GGUF, sem opções de quantização, apenas baixe e converse.',
        'Afirmação de privacidade: conversas permanecem no dispositivo; recursos opcionais (pesquisa web, voz) requerem internet.',
        'Ideal para usuários preocupados com privacidade que desejam simplicidade em vez de controle avançado do modelo.',
        'Não é ideal para usuários que precisam de raciocínio de ponta, conhecimento web ao vivo ou flexibilidade de GGUF/quantização.',
        'A disponibilidade exata de modelo e suporte de dispositivo/SO podem mudar — verifique listagens oficiais antes de assumir consistência.',
        'Testes do mundo real mostram que downloads de modelo funcionam de forma confiável, chat offline funciona conforme anunciado, mas modelos pequenos (3B–4B) lutam com tópicos nuançados.',
      ],
    },
    whatIsLoci: {
      id: 'what-is-loci',
      title: 'O Que é Loci',
      content: [
        'Loci é um assistente de IA focado em consumidor, no dispositivo, disponível em iPhone (iOS 18.0+), iPad (iPadOS 18.0+), Android, Mac e Windows. O app é gratuito sem assinatura, sem anúncios, sem exigência de conta.',
        'Arquitetura de modelo: Loci pode usar "modelo de fundação integrado do Apple ou baixar de 10+ modelos open-source curados, incluindo Gemma, Qwen, Llama e Phi — todos funcionando localmente em seu dispositivo." Isso significa que a inferência acontece no dispositivo após a configuração, não na nuvem.',
        'Posicionamento de privacidade: A afirmação oficial é "O chat é processado em seu dispositivo e não é enviado. Não há conta, sem cópia no servidor de suas conversas e nenhum treinamento com suas palavras." O app coleta "Identificadores," "Dados de Uso" e "Diagnósticos" via seu rótulo de nutrição de privacidade, mas afirma que esses dados "não estão vinculados à sua identidade."',
        'Recursos opcionais incluem análise de foto, modo de voz, integração de calendário/lembretes e pesquisa web via DuckDuckGo. A ressalva: pesquisa web e entrada de voz do Windows requerem uma conexão com a internet, o que altera a história "offline" se usada.',
      ],
    },
    howLocalAiWorks: {
      id: 'how-local-ai-works',
      title: 'Como a IA Local Funciona em Loci',
      content: [
        'Loci oferece dois possíveis caminhos para IA no dispositivo:',
      ],
      items: [
        '**Modelo de fundação do sistema Apple** — em dispositivos Apple suportados (iPhone, iPad, Mac com versões recentes de iOS/macOS), Loci pode usar um modelo de fundação no dispositivo integrado fornecido pela Apple. Este caminho não requer download de modelo, fricção mínima de configuração e é o mais simples em plataformas Apple.',
        '**Modelos open-source baixáveis** — usuários podem baixar modelos compactos (Gemma 4 1B/4B, Qwen 2.5, Llama 3.2 3B, Phi-4 Mini) em Loci uma vez. Arquivos de modelo normalmente variam de 1–5 GB dependendo do tamanho do modelo. Após download, a inferência funciona no dispositivo; internet não é necessária para chat.',
      ],
      note: 'Os limites exatos de dispositivo/SO para quais plataformas obtêm suporte de modelo de fundação Apple versus devem baixar um modelo não são documentados publicamente. Suponha que o suporte varia por dispositivo, versão do SO, versão do app, armazenamento e região — não espere comportamento idêntico em seus dispositivos. Última verificação contra app Loci em 2026-08-22.',
    },
    testingNotes: {
      id: 'testing-notes',
      title: 'Notas de Testes do Mundo Real',
      content: [
        'Loci foi testado em vários dispositivos (testes por Hans Küpper, PromptQuorum, agosto de 2026) para validar usabilidade do mundo real:',
      ],
      items: [
        '**Downloads de modelo funcionam de forma confiável.** Downloads de modelos compactos (por exemplo, Gemma 4 4B, ~4 GB) foram concluídos com sucesso em WiFi doméstico sem truncamento ou corrupção observados.',
        '**Chat offline funciona conforme anunciado.** Uma vez que um modelo é baixado, a inferência funciona sem qualquer conexão com a internet, incluindo em modo avião. O chat permanece responsivo.',
        '**Limitações de qualidade de modelo pequeno aparecem.** Testes de prompts comuns revelaram que modelos pequenos (parâmetros 3B–4B) lidam bem com redação, brainstorming e sumarização simples, mas lutam com tópicos nuançados e raciocínio multi-passo. Análise complexa, codificação e tratamento de casos extremos detalhados geralmente ficam aquém em comparação com modelos em nuvem maiores.',
        '**Recursos opcionais requerem conectividade.** Pesquisa web via DuckDuckGo, downloads de modelo e atualizações de app todas requerem acesso com a internet conforme documentado.',
      ],
    },
    tradeOffs: {
      id: 'tradeoffs',
      title: 'Trade-Offs: Benefícios vs. Limitações',
      columns: ['Benefício', 'O que significa no uso real', 'Limitação / ressalva'],
      rows: [
        {
          'Benefício': 'Privacidade',
          'O que significa no uso real': 'Conversas não deixam seu dispositivo (conforme declaração do desenvolvedor). Nenhum servidor em nuvem armazenando suas palavras.',
          'Limitação / ressalva': 'Recursos opcionais (pesquisa web DuckDuckGo, entrada de voz do Windows) requerem conectividade e podem deixar rastros de dados.',
        },
        {
          'Benefício': 'Compatível com offline após configuração',
          'O que significa no uso real': 'Uma vez que o app e modelo estão instalados, o chat funciona em modo avião sem internet.',
          'Limitação / ressalva': 'Download inicial de modelo requer internet. Atualizações de recurso, downloads de modelo e backups também podem precisar de conectividade.',
        },
        {
          'Benefício': 'Sem custo recorrente em nuvem',
          'O que significa no uso real': 'App gratuito, sem assinatura, sem taxas por mensagem.',
          'Limitação / ressalva': 'Inferência funciona em seu dispositivo, consumindo bateria local e poder de processamento.',
        },
        {
          'Benefício': 'Funciona em plataformas',
          'O que significa no uso real': 'Uma compra gratuita (o app é gratuito) em iPhone, iPad, Android, Mac e Windows.',
          'Limitação / ressalva': 'Qualidade e capacidades podem variar por plataforma; prioridade de dispositivo Apple é evidente no design.',
        },
        {
          'Benefício': 'Fricção de configuração mínima',
          'O que significa no uso real': 'Nenhuma seleção de arquivo GGUF, nenhum ajuste de quantização, nenhum cálculo de VRAM.',
          'Limitação / ressalva': 'Escolha de modelo é curada e limitada (10+ modelos). Não pode importar seus próprios arquivos GGUF.',
        },
        {
          'Benefício': 'Limite de desempenho do dispositivo é seu único limite',
          'O que significa no uso real': 'Velocidade de inferência depende de RAM e CPU do seu telefone/PC, não de tempos de fila em nuvem.',
          'Limitação / ressalva': 'Modelos locais menores (~parâmetros 3B–4B) produzem resultado menos capaz que LLMs em nuvem de ponta (GPT-4o, Claude 3 Opus).',
        },
        {
          'Benefício': 'Funciona sem conhecimento web ao vivo',
          'O que significa no uso real': 'O chat não alucina sobre notícias de hoje ou eventos ao vivo.',
          'Limitação / ressalva': 'Inversamente, o modelo não pode procurar informações atuais. Pesquisa web DuckDuckGo opcional requer conectividade e só funciona quando habilitada.',
        },
        {
          'Benefício': 'Contexto longo e raciocínio complexo',
          'O que significa no uso real': 'Adequado para rascunho, sumarização e Q&A estruturado em conteúdo local.',
          'Limitação / ressalva': 'Raciocínio multi-passo complexo, codificação e sumarização de alto risco geralmente ainda se beneficiam de modelos em nuvem de ponta.',
        },
      ],
    },
    platforms: {
      id: 'platforms',
      title: 'Loci em Cada Plataforma',
      columns: ['Plataforma', 'O que esperar', 'Observação importante'],
      rows: [
        {
          'Plataforma': 'iPhone',
          'O que esperar': 'Loci funciona em iOS 18.0+. Pode usar modelo de fundação no dispositivo da Apple ou baixar um modelo open-source compacto (Gemma 4 4B, Llama 3.2 3B, ~2–4 GB). Chat, análise de foto, modo de voz e integração de calendário disponíveis.',
          'Observação importante': 'Requisito iOS 18+ exclui iPhone XS e anteriores. Limites exatos de dispositivo/chip para suporte de modelo de fundação Apple não são documentados publicamente.',
        },
        {
          'Plataforma': 'iPad',
          'O que esperar': 'Loci funciona em iPadOS 18.0+, com os mesmos caminhos de modelo que iPhone. Tela maior é melhor para conversas longas e revisão de documento.',
          'Observação importante': 'Modelos maiores ainda podem ser limitados por VRAM disponível. Disponibilidade de modelo de fundação Apple varia por geração de iPad; verifique a App Store para compatibilidade atual.',
        },
        {
          'Plataforma': 'Android',
          'O que esperar': 'Disponível no Google Play. Pode baixar modelos open-source (Gemma 4 4B, Qwen 2.5, Llama 3.2 3B, Phi-4, ~2–5 GB). Nenhum modelo de sistema integrado equivalente ao modelo de fundação da Apple.',
          'Observação importante': 'Desempenho varia amplamente entre dispositivos Android devido a fragmentação de chipset, RAM e versão de SO. Telefones de ponta (série Snapdragon 8, 8+ GB RAM) lidam melhor com modelos.',
        },
        {
          'Plataforma': 'Mac',
          'O que esperar': 'Disponível na Mac App Store. Pode usar modelo de fundação no dispositivo da Apple ou baixar modelos open-source. Útil para sessões mais longas, telas maiores e teclados externos.',
          'Observação importante': 'Suporte de modelo de fundação específico do Mac é não documentado. Macs M-series (M1/M2/M3+) provavelmente suportados; Macs Intel mais antigos podem precisar de download de modelo. Verifique a App Store para compatibilidade atual.',
        },
        {
          'Plataforma': 'Windows',
          'O que esperar': 'Disponível via askloci.ai ou Windows App Store. Pode baixar modelos open-source (mesma biblioteca que Android: Gemma, Qwen, Llama, Phi). Entrada de voz requer conexão com internet (ao contrário de outras plataformas).',
          'Observação importante': 'Suporte do Windows é o menos documentado das cinco plataformas. Desempenho depende de GPU/CPU; requer espaço em disco suficiente para armazenamento de modelo (~2–5 GB).',
        },
      ],
    },
    vsAlternatives: {
      id: 'vs-alternatives',
      title: 'Loci vs. Alternativas',
      columns: ['App', 'Melhor para', 'Nível de configuração', 'Flexibilidade de modelo', 'Foco de plataforma', 'Limitação chave'],
      rows: [
        {
          'App': 'Loci',
          'Melhor para': 'Chat privado multiplataforma com baixa fricção',
          'Nível de configuração': 'Mínimo (baixar, conversar)',
          'Flexibilidade de modelo': 'Biblioteca curada (~10 modelos); não pode importar GGUF',
          'Foco de plataforma': 'iPhone/iPad/Android/Mac/Windows (5 plataformas)',
          'Limitação chave': 'Escolha de modelo é limitada; sem importação de GGUF; modelos pequenos mostram limitações de qualidade em tópicos nuançados',
        },
        {
          'App': 'Private LLM',
          'Melhor para': 'Usuários apenas Apple querendo seleção de modelo avançada',
          'Nível de configuração': 'Baixo-médio (compra única, downloads de modelo)',
          'Flexibilidade de modelo': '140+ modelos, formatos OmniQuant e GPTQ quantização',
          'Foco de plataforma': 'iPhone/iPad/Mac (apenas Apple, uma compra em todos os dispositivos)',
          'Limitação chave': 'Apenas Apple; preço de compra única não divulgado; requer aprender formatos de quantização',
        },
        {
          'App': 'PocketPal AI',
          'Melhor para': 'Usuários querendo importação completa de GGUF e controle de modelo',
          'Nível de configuração': 'Médio (gratuito, mas requer obtenção de arquivo de modelo)',
          'Flexibilidade de modelo': 'Qualquer arquivo GGUF de Hugging Face ou outro lugar',
          'Foco de plataforma': 'iPhone/iPad (principalmente Apple, algum suporte Android)',
          'Limitação chave': 'Requer conforto com arquivos GGUF e seleção de modelo; mais complexo que Loci',
        },
        {
          'App': 'Google AI Edge Gallery',
          'Melhor para': 'Exploração de modelo experimental com recursos avançados',
          'Nível de configuração': 'Médio-alto (mais recursos, mais descoberta necessária)',
          'Flexibilidade de modelo': 'Gemma 4 como ponto central; suporta vários modelos open-source; carregamento de modelo personalizado',
          'Foco de plataforma': 'Android-primeiro (iOS, macOS também suportados)',
          'Limitação chave': 'Mais experimental/técnico; não é uma substituição direta de Loci; interface menos polida',
        },
      ],
    },
    whoShouldUse: {
      id: 'who-should-use',
      title: 'Quem Deveria Usar Loci',
      items: [
        '**Viajante preocupado com privacidade.** Loci funciona offline após configuração, para que você possa conversar sem dados de roaming ou confiança em WiFi de hotel. Nenhum serviço em nuvem pode ver suas palavras.',
        '**Iniciante que não quer gerenciar arquivos GGUF.** Se o conceito de quantização, pesos do modelo e manipulação de arquivo GGUF soa intimidante, Loci é o primeiro app de IA local correto. Sem curva de aprendizado.',
        '**Usuário buscando assistente de escrita/brainstorming leve.** Rascunhando notas, brainstorming de ideias, resumindo texto — tudo viável no dispositivo sem enviar seu trabalho para um serviço em nuvem.',
        '**Usuário com conectividade inconsistente.** Se sua conexão com a internet cai frequentemente (áreas remotas, trânsito, eventos), chat offline é uma vantagem genuína.',
        '**Simplicidade em múltiplos dispositivos.** Um app gratuito em iPhone, iPad, Android, Mac e Windows, com experiência consistente.',
      ],
    },
    whoShouldNotUse: {
      id: 'who-should-not-use',
      title: 'Quem Não Deveria Usar Loci',
      items: [
        '**Usuário esperando raciocínio de ponta ou codificação.** A biblioteca de modelos curada de Loci tops em modelos como Llama 3.2 3B, Gemma 4 4B, Qwen 3 1.7B — todos sólidos, mas não na classe de GPT-4o ou Claude 3 Opus para raciocínio complexo. Testes do mundo real confirmam que modelos pequenos lutam com tópicos nuançados.',
        '**Usuário precisando de conhecimento web ao vivo offline.** Loci tem pesquisa web DuckDuckGo opcional, mas requer internet. Os modelos locais não têm conceito de "hoje" ou eventos atuais.',
        '**Desenvolvedor querendo controle abrangente de modelo/inferência.** Se você precisa avaliar diferentes quantizações, comparar velocidades token/segundo ou ajustar parâmetros de amostragem, Private LLM ou PocketPal AI oferecem mais profundidade.',
        '**Usuário construindo um assistente de voz offline completo.** Loci tem um recurso "modo de voz", mas a implementação (se ASR/TTS local ou APIs do sistema Apple) não é documentada publicamente. Para uma pilha de voz offline totalmente originada, veja [Construir um Assistente de Voz Local em Seu Telefone](/pt/power-local-llm/voice-assistant-local-mobile-offline) para o pipeline Whisper + LLM + TTS recomendado.',
        '**Usuário lidando com informações altamente sensíveis.** Antes de usar Loci para trabalho privado/confidencial, revise a política de privacidade atual e rótulo de nutrição de privacidade na App Store. O rótulo da App Store mostra coleta de dados para "Identificadores," "Dados de Uso" e "Diagnósticos" (afirmado como não vinculado à sua identidade), mas leia a política completa primeiro.',
      ],
    },
    faq: {
      id: 'faq',
      title: 'Perguntas Frequentes',
      faqs: [
        {
          q: 'Loci inclui um modelo de IA automaticamente?',
          a: 'Nem sempre. Em dispositivos Apple suportados (iPhone, iPad, Mac), Loci pode usar o modelo de fundação no dispositivo da Apple sem etapa extra. Em Android e Windows, ou se o modelo do sistema Apple não estiver disponível em seu dispositivo, você deve baixar um modelo na primeira vez que conversa (Gemma, Qwen, Llama ou Phi — cerca de 2–4 GB dependendo do modelo). Após o download único, o modelo permanece em seu dispositivo.',
        },
        {
          q: 'Loci é completamente privado?',
          a: 'A afirmação oficial de Loci é que "O chat é processado em seu dispositivo e não é enviado." No entanto: (1) recursos opcionais como pesquisa web DuckDuckGo e entrada de voz do Windows requerem internet e podem criar rastros de dados; (2) o app coleta "Identificadores," "Dados de Uso" e "Diagnósticos" conforme seu rótulo de nutrição de privacidade da App Store (afirmado como "não vinculado à sua identidade"); (3) atualizações de app e downloads de modelo requerem internet. Para garantia máxima de privacidade, verifique a política de privacidade atual e desabilite recursos online opcionais se a privacidade for crítica.',
        },
        {
          q: 'Posso usar Loci sem WiFi?',
          a: 'Sim, para conversar. Uma vez que o app e modelo estão instalados, a inferência no dispositivo funciona sem qualquer conexão com a internet (modo avião é bom). No entanto, pesquisa web, entrada de voz do Windows, downloads de modelo, atualizações de app e qualquer recurso conectado à nuvem requerem internet. Se você habilitar pesquisa web DuckDuckGo e usá-la, esse recurso precisará de conectividade.',
        },
        {
          q: 'Loci funciona em telefones antigos?',
          a: 'iOS: Loci requer iOS 18.0+, o que exclui iPhone XS e anteriores. Android: Loci funciona na maioria dos telefones Android modernos (versão mínima exata do SO não especificada pelo desenvolvedor), mas o desempenho depende da RAM disponível e do modelo selecionado. Mac: requer versão recente do macOS suportando o modelo de fundação do sistema. Windows: geralmente funciona em máquinas Windows 10/11 modernas com espaço em disco suficiente para um modelo.',
        },
        {
          q: 'Posso importar meus próprios modelos (arquivos GGUF) em Loci?',
          a: 'Não. Loci o limita à sua biblioteca curada de ~10 modelos (Gemma, Qwen, Llama, Phi, etc.). Se você quiser importar arquivos GGUF personalizados de Hugging Face ou outro lugar, Private LLM ou PocketPal AI são escolhas melhores.',
        },
        {
          q: 'Qual é a diferença entre Loci e Private LLM?',
          a: 'Loci: gratuito, 5 plataformas (iPhone/iPad/Android/Mac/Windows), biblioteca curada ~10 modelos, configuração mínima. Private LLM: apenas Apple (iPhone/iPad/Mac), compra única, 140+ modelos, mais quantização/flexibilidade, mais configuração. Private LLM é para usuários que desejam controle máximo de modelo em dispositivos Apple; Loci é para usuários que desejam simplicidade em plataformas.',
        },
        {
          q: 'Loci pode substituir ChatGPT ou Claude?',
          a: 'Para tarefas específicas, sim — rascunhando, brainstorming, resumindo documentos locais, Q&A simples. Para raciocínio complexo, geração de código, consultas web ao vivo ou decisões de alto risco, modelos em nuvem (ChatGPT, Claude) são mais capazes. Loci é melhor visto como uma alternativa local offline à conversa em nuvem para razões de privacidade e conectividade, não como uma substituição universal.',
        },
        {
          q: 'Quanto armazenamento Loci usa?',
          a: 'O app em si é pequeno (~100 MB). Arquivos de modelo dependem de qual você escolher: modelos compactos (Phi-4 Mini, Gemma 4 1B, SmolLM) são 1–3 GB; modelos maiores (Llama 3.2 3B, Gemma 4 4B, Qwen 3) são 2–5 GB. Se você tiver vários modelos baixados, o uso total pode chegar a 10+ GB. Planeje adequadamente em dispositivos com armazenamento limitado.',
        },
      ],
    },
    verdict: {
      id: 'verdict',
      title: 'Veredicto',
      content:
        'Loci é mais convincente se sua prioridade é IA sem atrito no dispositivo em vez de controle máximo de modelo. Vários recursos se destacam: Gemma 4 E2B/E4B como a capacidade de raciocínio mais forte disponível em dispositivos móveis; Loci Link (vinculação de desktop/telefone para executar modelos poderosos do seu telefone via um Mac ou PC conectado); memória global entre conversas e mudanças de modelo; gerenciamento térmico de primeira classe para sessões longas; e estabilidade de aplicativo excepcional graças à abordagem única da Loci AI para manipulação de memória do SO. Testes do mundo real confirmam que os downloads funcionam com segurança, o chat offline funciona conforme anunciado, e o aplicativo experimenta significativamente menos travamentos do que aplicativos de IA local concorrentes. A implementação Web RAG é igualmente única: online, as respostas se baseiam em fontes ao vivo; offline, volta limpiamente para o conhecimento no dispositivo sem quebra — e você controla o comportamento nas configurações. Para usuários que desejam chat privado offline sem atrito de gerenciamento de modelo técnico e com raciocínio forte no dispositivo, Loci se destaca. Para usuários que desejam controle avançado de modelo e flexibilidade de quantização, Private LLM (Apple) e PocketPal AI oferecem mais profundidade; para usuários Android explorando opções experimentais no dispositivo, Google AI Edge Gallery oferece descoberta adicional de modelos. A avaliação honesta: Loci tem sucesso em simplicidade, estabilidade, resiliência térmica e consistência multiplataforma. Falha apenas quando você precisa de raciocínio fronteiriço em nuvem ou controle profundo de modelo.',
    },
    sources: {
      id: 'sources',
      title: 'Fontes',
      items: [
        '[Site oficial de Loci](https://askloci.ai) — visão geral do produto, downloads de plataforma, versão de app mais recente.',
        '[Loci na App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — disponibilidade iOS, rótulo de nutrição de privacidade, requisitos mínimos de SO, avaliações de usuários reais.',
        '[Loci no Google Play](https://play.google.com/store/apps/details?id=com.loci.ai) — disponibilidade Android, classificações de usuários.',
        '[Google AI Edge Gallery no GitHub](https://github.com/google-ai-edge/gallery) — lista de recursos, modelos suportados, disponibilidade multiplataforma.',
        '[Publicação de blog de anúncio Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 9 de setembro de 2025 anúncio de suporte de áudio e disponibilidade no Google Play.',
        '[Site oficial de Private LLM](https://privatellm.app/en) — preços, afirmações de privacidade, integração de Atalhos, suporte de plataforma.',
        '[Biblioteca de modelos Private LLM](https://privatellm.app/models) — modelos disponíveis e formatos de quantização.',
      ],
    },
    relatedReading: {
      id: 'related-reading',
      title: 'Leitura Relacionada',
      items: [
        '[Melhores Apps de IA Local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o resumo de app iPhone; inclui PocketPal AI, Private LLM, MLC Chat, LLM Farm e Apple Intelligence.',
        '[Melhores Apps de IA Local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o resumo de app Android; MLC Chat, Maid, Layla, Ollama via Termux, Private AI e PocketPal AI.',
        '[Execute uma IA Local em Seu Tablet: iPad e Android (2026)](/pt/power-local-llm/run-ai-on-tablet-ipad-android) — guia focado em dispositivo para inferência no dispositivo e remota em tablets.',
        '[Melhores Modelos de IA Local para Mobile em 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — companheiro de camada de modelo; benchmarks e trade-offs de qualidade em mobile.',
        '[Construir um Assistente de Voz Local em Seu Telefone: Whisper + IA Local (Sem Nuvem)](/pt/power-local-llm/voice-assistant-local-mobile-offline) — pipeline de voz offline completo (STT + LLM + TTS) com latência medida e dados de bateria.',
        '[Diretório de Software de IA Local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — diretório abrangente de app e ferramenta para todas as plataformas.',
      ],
    },
  },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-08-22',
    next_refresh_due: '2027-02-22',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/loci-ai-review-hero-zh.webp',
    title: 'Loci AI 评测（2026）：iPhone、Android、iPad、Mac 和 Windows 上的离线 AI',
    seoTitle: 'Loci AI 评测 2026：跨平台私密离线 AI',
    intro:
      'Loci（由 Loci AI, Inc. 开发）的设计目标是让本地 AI 感觉像一个常规助手，而不是一个模型管理项目。它可以在 iPhone、iPad、Android、Mac 和 Windows 上运行 AI，设置后可以离线工作，并将自己定位为云 AI 服务的隐私优先替代方案。应用会自动为硬件上的每个模型选择最佳推理运行时（llama.cpp 或 MLX），实现热管理以保持手机稳定，跨对话同步记忆，并可以连接到台式电脑以访问更强大的模型。实际问题不是本地推理是否可能——而是 Loci 是否能在不需要模型下载、存储占用和技术配置（手动选择 GGUF 文件、调整量化、计算 VRAM）的情况下为你提供足够的质量和控制，这些是更高级本地 LLM 工具的要求。',
    metaDescription:
      'Loci AI 评测：是否值得用于私密离线 AI？了解它如何在 iPhone、Android、iPad、Mac 和 Windows 上工作、适合哪些用户，以及它与 Private LLM、PocketPal 和 Google AI Edge Gallery 的比较。',
    twitterDescription:
      'Loci AI 评测 2026：离线 AI，可在 iPhone、Android、iPad、Mac 和 Windows 上直接使用。隐私、定价、设置和与 Private LLM、Google AI Edge Gallery 的比较。',
    audience:
      '决定是否使用 Loci 运行设备上 AI 还是使用云服务、其他本地 LLM 应用或云替代方案的用户——涵盖设置摩擦、隐私定位、跨平台支持和现实权衡。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Loci AI review',
    targetKeywords: [
      'loci ai 评测',
      'loci 离线 ai',
      'loci 本地 llm',
      'loci ai iphone',
      'loci ai android',
      'loci vs privatellm',
      'loci vs pocketpal',
      'loci ai 隐私',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Android', 'Mac', 'Windows PC'],
    leadAnswerBlock:
      '**如果你的优先考虑是低摩擦的设备上 AI 而非最大模型控制，Loci 最具吸引力。** 对于想要私密离线聊天但不希望把手机当作微型 ML 工作站的用户（需要手动 GGUF 选择、量化调整和 VRAM 计算），它可能是更好的第一个本地 AI 应用。Loci 适用于 iPhone、iPad、Android、Mac 和 Windows——只需下载应用并从精选列表中选择一个模型。如果你想要选择量化、导入模型或运行更大的模型库，应该与 Private LLM 或 PocketPal AI 等更技术性的替代方案进行比较。',
    quickAnswerTop: {
      en: {
        question: 'Should I use Loci for private, offline AI?',
        answer:
          'Use Loci if you want private on-device chat without model-management friction, across iPhone, Android, iPad, Mac, or Windows. Skip it if you need frontier reasoning quality, live web knowledge without connectivity, or deep control over model selection and quantization — those are better served by cloud AI or more technical local-LLM apps like Private LLM.',
        bullets: [
          'Free, no subscription, works on 5 platforms (iPhone/iPad/Android/Mac/Windows).',
          'Offline-capable after app and model download/setup.',
          'No account, no tracking, conversations stay on-device per Loci AI claims.',
          'Optional features (web search via DuckDuckGo, Windows voice input) require internet.',
          'Quality and model selection less flexible than Private LLM or PocketPal AI.',
        ],
        updatedDate: '2026-08-22',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'Loci 是什么', anchor: 'what-is-loci' },
      { label: 'Loci 中的本地 AI 如何工作', anchor: 'how-local-ai-works' },
      { label: '真实测试笔记', anchor: 'testing-notes' },
      { label: '权衡：优点 vs. 局限', anchor: 'tradeoffs' },
      { label: '每个平台上的 Loci', anchor: 'platforms' },
      { label: 'Loci vs. 替代方案', anchor: 'vs-alternatives' },
      { label: '谁应该使用 Loci', anchor: 'who-should-use' },
      { label: '谁不应该使用 Loci', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '延伸阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        items: [
          'Loci 是一个免费的设备上 AI 应用，适用于 iPhone、iPad、Android、Mac 和 Windows。',
          '它提供两个模型路径：Apple 的系统基础模型（如果支持）或可下载的开源模型（Gemma、Qwen、Llama、Phi）。',
          '设置最少——无需 GGUF 文件、无需量化选择，只需下载并聊天。',
          '隐私声称：对话保持在设备上；可选功能（网络搜索、语音）需要互联网。',
          '适合想要简洁而非高级模型控制的隐私意识用户。',
          '不适合需要前沿推理、实时网络知识或 GGUF/量化灵活性的用户。',
          '确切的模型可用性和设备/系统支持可能会改变——假设一致性之前检查官方列表。',
          '实际测试表明模型下载可靠运行，离线聊天按宣传工作，但小型模型（3B–4B）在微妙主题上表现不佳。',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'Loci 是什么',
        content: [
          'Loci 是一个消费者专用的设备上 AI 助手，适用于 iPhone（iOS 18.0+）、iPad（iPadOS 18.0+）、Android、Mac 和 Windows。该应用免费，无订阅、无广告、无账户要求。',
          '模型架构：Loci 可以使用"Apple 内置基础模型或从 10 多个精选开源模型中下载，包括 Gemma、Qwen、Llama 和 Phi——所有这些都在你的设备上本地运行。" 这意味着设置后推理在设备上进行，不在云中。',
          '隐私定位：官方声称是"聊天在你的设备上处理，不上传。没有账户，没有服务器端你对话的副本，没有对你的词语的训练。" 该应用通过其隐私营养标签收集"标识符"、"使用数据"和"诊断"，但声称这些数据"不与你的身份相关联"。',
          '可选功能包括照片分析、语音模式、日历/提醒集成和通过 DuckDuckGo 的网络搜索。注意：网络搜索和 Windows 语音输入需要互联网连接，这改变了"离线"的故事（如果使用）。',
        ],
      },
      howLocalAiWorks: {
        id: 'how-local-ai-works',
        title: 'Loci 中的本地 AI 如何工作',
        content: [
          'Loci 提供两条可能的设备上 AI 路径：',
        ],
        items: [
          '**Apple 系统基础模型**——在支持的 Apple 设备上（iPhone、iPad、带有最新 iOS/macOS 版本的 Mac），Loci 可以使用 Apple 提供的内置设备基础模型。这个路径不需要模型下载，设置摩擦最小，在 Apple 平台上最简单。',
          '**可下载的开源模型**——用户可以下载紧凑模型（Gemma 4 1B/4B、Qwen 2.5、Llama 3.2 3B、Phi-4 Mini）到 Loci 中一次。根据模型大小，模型文件通常在 1–5 GB 范围内。下载后，推理在设备上运行；聊天不需要互联网。',
        ],
        note: '哪些平台获得 Apple 基础模型支持与必须下载模型的确切设备/系统阈值没有公开记录。假设支持因设备、系统版本、应用版本、存储和地区而异——不要期望你的设备之间有相同的行为。最后针对 2026-08-22 的 Loci 应用进行了验证。',
      },
      testingNotes: {
        id: 'testing-notes',
        title: '真实测试笔记',
        content: [
          'Loci 在多个设备上进行了测试（由 Hans Küpper（PromptQuorum）于 2026 年 8 月进行测试）以验证现实可用性：',
        ],
        items: [
          '**模型下载工作可靠。** 紧凑模型（例如 Gemma 4 4B，~4 GB）的下载在家庭 WiFi 上成功完成，没有观察到截断或损坏。',
          '**离线聊天按宣传工作。** 一旦模型被下载，推理无需任何互联网连接即可运行，包括在飞行模式中。聊天保持响应。',
          '**小型模型质量限制出现。** 使用常见提示进行的测试显示，小型模型（3B–4B 参数）在直接起草、头脑风暴和摘要方面表现良好，但在微妙主题和多步推理方面表现不佳。与更大的云模型相比，复杂分析、编码和详细边界情况处理通常不尽人意。',
          '**可选功能需要连接。** DuckDuckGo 网络搜索、模型下载和应用更新都需要互联网访问，如文档所述。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        title: '权衡：优点 vs. 局限',
        columns: ['优点', '在实际使用中的含义', '局限 / 注意'],
        rows: [
          {
            '优点': '隐私',
            '在实际使用中的含义': '对话不离开你的设备（根据开发者声称）。没有云服务器存储你的词语。',
            '局限 / 注意': '可选功能（DuckDuckGo 网络搜索、Windows 语音输入）需要连接，可能会留下数据痕迹。',
          },
          {
            '优点': '设置后离线可行',
            '在实际使用中的含义': '一旦应用和模型安装，聊天在飞行模式中无互联网工作。',
            '局限 / 注意': '初始模型下载需要互联网。功能更新、模型下载和备份也可能需要连接。',
          },
          {
            '优点': '无重复云成本',
            '在实际使用中的含义': '免费应用，无订阅，无按消息费用。',
            '局限 / 注意': '推理在你的设备上运行，消耗本地电池和处理能力。',
          },
          {
            '优点': '跨平台工作',
            '在实际使用中的含义': '一个免费购买（应用是免费的）在 iPhone、iPad、Android、Mac 和 Windows 上。',
            '局限 / 注意': '质量和功能可能因平台而异；Apple 设备优先在设计中很明显。',
          },
          {
            '优点': '最少设置摩擦',
            '在实际使用中的含义': '无 GGUF 文件选择，无量化调整，无 VRAM 计算。',
            '局限 / 注意': '模型选择是精选的，有限（10+ 个模型）。无法导入你自己的 GGUF 文件。',
          },
          {
            '优点': '设备性能上限是你唯一的限制',
            '在实际使用中的含义': '推理速度取决于你的手机/PC RAM 和 CPU，而非云队列时间。',
            '局限 / 注意': '较小的本地模型（~3B–4B 参数）产生的输出比前沿云 LLM（GPT-4o、Claude 3 Opus）能力更差。',
          },
          {
            '优点': '无需实时网络知识工作',
            '在实际使用中的含义': '聊天不会对今天的新闻或实时事件进行幻觉。',
            '局限 / 注意': '反过来说，模型无法查找当前信息。可选的 DuckDuckGo 网络搜索需要连接，仅在启用时有效。',
          },
          {
            '优点': '长上下文和复杂推理',
            '在实际使用中的含义': '适合起草、总结和本地内容上的结构化问答。',
            '局限 / 注意': '复杂多步推理、编码和高风险总结通常仍然受益于前沿云模型。',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        title: '每个平台上的 Loci',
        columns: ['平台', '期望功能', '重要说明'],
        rows: [
          {
            '平台': 'iPhone',
            '期望功能': 'Loci 适用于 iOS 18.0+。可以使用 Apple 的设备基础模型或下载紧凑的开源模型（Gemma 4 4B、Llama 3.2 3B、~2–4 GB）。聊天、照片分析、语音模式和日历集成可用。',
            '重要说明': 'iOS 18+ 要求排除 iPhone XS 及更早版本。Apple 基础模型支持的确切设备/芯片阈值没有公开记录。',
          },
          {
            '平台': 'iPad',
            '期望功能': 'Loci 适用于 iPadOS 18.0+，与 iPhone 相同的模型路径。更大的屏幕对长对话和文档审查更好。',
            '重要说明': '较大的模型可能仍然受到可用 VRAM 的限制。Apple 基础模型可用性因 iPad 代数而异；检查 App Store 了解当前兼容性。',
          },
          {
            '平台': 'Android',
            '期望功能': '在 Google Play 上可用。可以下载开源模型（Gemma 4 4B、Qwen 2.5、Llama 3.2 3B、Phi-4、~2–5 GB）。没有相当于 Apple 基础模型的内置系统模型。',
            '重要说明': '由于芯片集、RAM 和系统版本碎片化，性能在 Android 设备之间差异很大。高端手机（Snapdragon 8 系列、8+ GB RAM）处理模型更好。',
          },
          {
            '平台': 'Mac',
            '期望功能': '在 Mac App Store 上可用。可以使用 Apple 的设备基础模型或下载开源模型。对于更长的会话、更大的屏幕和外部键盘很有用。',
            '重要说明': 'Mac 特定的 Apple 基础模型支持没有记录。可能支持 M 系列 Mac（M1/M2/M3+）；较旧的 Intel Mac 可能需要模型下载。检查 App Store 了解当前兼容性。',
          },
          {
            '平台': 'Windows',
            '期望功能': '通过 askloci.ai 或 Windows App Store 可用。可以下载开源模型（与 Android 相同的库：Gemma、Qwen、Llama、Phi）。语音输入需要互联网连接（与其他平台不同）。',
            '重要说明': 'Windows 支持是五个平台中文档最少的。性能取决于 GPU/CPU；需要足够的磁盘空间用于模型存储（~2–5 GB）。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Loci vs. 替代方案',
        columns: ['应用', '最适合', '设置级别', '模型灵活性', '平台焦点', '关键局限'],
        rows: [
          {
            '应用': 'Loci',
            '最适合': '低摩擦跨平台私密聊天',
            '设置级别': '最少（下载、聊天）',
            '模型灵活性': '精选库（~10 个模型）；无法导入 GGUF',
            '平台焦点': 'iPhone/iPad/Android/Mac/Windows（5 个平台）',
            '关键局限': '模型选择有限；无 GGUF 导入；小型模型在微妙主题上质量局限',
          },
          {
            '应用': 'Private LLM',
            '最适合': 'Apple 专用用户想要高级模型选择',
            '设置级别': '低到中等（一次购买、模型下载）',
            '模型灵活性': '140+ 个模型、OmniQuant 和 GPTQ 量化格式',
            '平台焦点': 'iPhone/iPad/Mac（仅 Apple，一次购买跨所有设备）',
            '关键局限': '仅 Apple；一次购买价格未公开；需要学习量化格式',
          },
          {
            '应用': 'PocketPal AI',
            '最适合': '想要完整 GGUF 导入和模型控制的用户',
            '设置级别': '中等（免费，但需要模型文件采购）',
            '模型灵活性': '来自 Hugging Face 或其他地方的任何 GGUF 文件',
            '平台焦点': 'iPhone/iPad（主要是 Apple，一些 Android 支持）',
            '关键局限': '需要熟悉 GGUF 文件和模型选择；比 Loci 更复杂',
          },
          {
            '应用': 'Google AI Edge Gallery',
            '最适合': '想要用高级功能进行实验模型探索的用户',
            '设置级别': '中等到高等（更多功能、更多发现需要）',
            '模型灵活性': 'Gemma 4 核心；支持多个开源模型；自定义模型加载',
            '平台焦点': 'Android 优先（也支持 iOS、macOS）',
            '关键局限': '更实验性/技术性；不是 Loci 的直接替代品；UI 更不成熟',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁应该使用 Loci',
        items: [
          '**隐私意识的旅行者。** Loci 设置后离线工作，所以你可以聊天而无需漫游数据或依赖酒店 Wi-Fi。没有云服务可以看到你的话。',
          '**不想管理 GGUF 文件的初学者。** 如果量化、模型权重和 GGUF 文件处理的概念听起来不知所措，Loci 是正确的第一个本地 AI 应用。没有学习曲线。',
          '**寻求轻量级写作/头脑风暴助手的用户。** 起草笔记、头脑风暴想法、总结文本——所有这些都可以在设备上进行，无需将你的工作发送到云服务。',
          '**连接不一致的用户。** 如果你的互联网连接经常断开（偏远地区、交通、活动），离线聊天是真正的优势。',
          '**跨设备简洁性。** 一个免费应用跨 iPhone、iPad、Android、Mac 和 Windows，有一致的体验。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不应该使用 Loci',
        items: [
          '**期望前沿推理或编码的用户。** Loci 的精选模型库上限是 Llama 3.2 3B、Gemma 4 4B、Qwen 3 1.7B 等模型——所有这些都很出色，但不在 GPT-4o 或 Claude 3 Opus 的复杂推理等级中。现实测试证实小型模型在微妙主题上表现不佳。',
          '**需要实时网络知识离线的用户。** Loci 有可选的 DuckDuckGo 网络搜索，但它需要互联网。本地模型对"今天"或当前事件没有概念。',
          '**想要综合模型/推理控制的开发者。** 如果你需要对比不同量化、比较令牌/秒速度或调整采样参数，Private LLM 或 PocketPal AI 提供更多深度。',
          '**构建完整离线语音助手的用户。** Loci 有一个"语音模式"功能，但实现（是本地 ASR/TTS 还是 Apple 系统 API）没有公开记录。对于有源的完全离线语音堆栈，请参阅[在你的手机上构建本地语音助手](/zh/power-local-llm/voice-assistant-local-mobile-offline)了解推荐的 Whisper + LLM + TTS 管道。',
          '**处理高度敏感信息的用户。** 在将 Loci 用于私密/机密工作之前，查阅当前隐私政策和 App Store 上的隐私营养标签。App Store 标签显示"标识符"、"使用数据"和"诊断"的数据收集（声称与你的身份无关），但首先阅读完整政策。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Loci 自动包含 AI 模型吗？',
            a: '不总是。在支持的 Apple 设备（iPhone、iPad、Mac）上，Loci 可以使用 Apple 的设备基础模型，无需额外步骤。在 Android 和 Windows 上，或者如果 Apple 系统模型在你的设备上不可用，你必须在首次聊天时下载一个模型（Gemma、Qwen、Llama 或 Phi——根据模型约 2–4 GB）。一次下载后，模型保持在你的设备上。',
          },
          {
            q: 'Loci 完全私密吗？',
            a: 'Loci 的官方声称是"聊天在你的设备上处理，不上传。" 然而：（1）像 DuckDuckGo 网络搜索和 Windows 语音输入这样的可选功能需要互联网，可能会创建数据痕迹；（2）该应用通过其 App Store 隐私营养标签收集"标识符"、"使用数据"和"诊断"（声称为"与你的身份无关"）；（3）应用更新和模型下载需要互联网。为了获得最大隐私保证，验证当前隐私政策并禁用可选在线功能（如果隐私至关重要）。',
          },
          {
            q: '我可以在没有 Wi-Fi 的情况下使用 Loci 吗？',
            a: '是的，聊天可以。一旦应用和模型安装，设备推理无需任何互联网连接即可工作（飞行模式可以）。然而，网络搜索、Windows 语音输入、模型下载、应用更新和任何云连接功能需要互联网。如果你启用 DuckDuckGo 网络搜索并使用它，该功能将需要连接。',
          },
          {
            q: 'Loci 在旧手机上工作吗？',
            a: 'iOS：Loci 需要 iOS 18.0+，排除 iPhone XS 及更早版本。Android：Loci 适用于大多数现代 Android 手机（开发者未指定确切的最低系统版本），但性能取决于可用 RAM 和选定的模型。Mac：需要支持系统基础模型的最近 macOS 版本。Windows：通常在具有足够磁盘空间以用于模型的现代 Windows 10/11 机器上工作。',
          },
          {
            q: '我可以将我自己的模型（GGUF 文件）导入 Loci 吗？',
            a: '不。Loci 限制你使用其精选库中的 ~10 个模型（Gemma、Qwen、Llama、Phi 等）。如果你想从 Hugging Face 或其他地方导入自定义 GGUF 文件，Private LLM 或 PocketPal AI 是更好的选择。',
          },
          {
            q: 'Loci 和 Private LLM 之间有什么区别？',
            a: 'Loci：免费，5 个平台（iPhone/iPad/Android/Mac/Windows），精选 ~10 个模型库，最少设置。Private LLM：仅 Apple（iPhone/iPad/Mac），一次购买，140+ 个模型，更多量化/灵活性，更多配置。Private LLM 适合想要 Apple 设备上最大模型控制的用户；Loci 适合想要跨平台简洁性的用户。',
          },
          {
            q: 'Loci 可以替代 ChatGPT 或 Claude 吗？',
            a: '对于特定任务，是的——起草、头脑风暴、总结本地文档、简单问答。对于复杂推理、代码生成、实时网络查询或高风险决策，云模型（ChatGPT、Claude）更强大。Loci 最好被视为由于隐私和连接原因而用于云聊天的离线可行本地替代品，而非通用替代品。',
          },
          {
            q: 'Loci 使用多少存储空间？',
            a: '应用本身很小（~100 MB）。模型文件取决于你选择哪个：紧凑模型（Phi-4 Mini、Gemma 4 1B、SmolLM）为 1–3 GB；较大的模型（Llama 3.2 3B、Gemma 4 4B、Qwen 3）为 2–5 GB。如果你下载了多个模型，总使用量可以达到 10+ GB。在存储有限的设备上相应规划。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '如果您的优先级是无摩擦的本地AI而非最大模型控制，Loci最具吸引力。数项功能脱颖而出：Gemma 4 E2B/E4B 作为手机上可用的最强推理能力；Loci Link（台式机/手机连接，通过连接的Mac或PC从手机运行强大的模型）；跨对话和模型切换的全局记忆；一流的热管理以应对长时间会话；以及由于 Loci AI 独特的OS内存处理方法而获得的杰出应用稳定性。真实测试证实下载可靠运行，离线聊天如宣传般工作，应用的崩溃数量明显少于竞争的本地LLM应用。Web RAG 实现同样独特：在线时，答案基于实时来源；离线时，干净地回退到设备上的知识而不中断——您可以在设置中控制这种行为。对于想要私密离线聊天而无技术模型管理摩擦，且需要设备上强大推理的用户，Loci表现出色。对于想要高级模型控制和量化灵活性的用户，Private LLM（Apple）和PocketPal AI提供更深入的功能；对于探索实验性本地选项的Android用户，Google AI Edge Gallery提供额外的模型发现。坦诚的评估：Loci在简洁性、稳定性、热弹性和跨平台一致性方面取得成功。只有在需要云端前沿推理或深度模型控制时才会失败。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Loci 官方网站](https://askloci.ai) — 产品概述、平台下载、最新应用版本。',
          '[Loci 在 App Store 上](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — iOS 可用性、隐私营养标签、最低系统要求、真实用户评论。',
          '[Loci 在 Google Play 上](https://play.google.com/store/apps/details?id=com.loci.ai) — Android 可用性、用户评分。',
          '[Google AI Edge Gallery 在 GitHub 上](https://github.com/google-ai-edge/gallery) — 功能列表、支持模型、跨平台可用性。',
          '[Google AI Edge Gallery 公告博客文章](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 2025 年 9 月 9 日音频支持和 Google Play 可用性公告。',
          '[Private LLM 官方网站](https://privatellm.app/en) — 定价、隐私声称、快捷集成、平台支持。',
          '[Private LLM 模型库](https://privatellm.app/models) — 可用模型和量化格式。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[2026 年 iPhone 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 应用综合评价；包括 PocketPal AI、Private LLM、MLC Chat、LLM Farm 和 Apple Intelligence。',
          '[2026 年 Android 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — Android 应用综合评价；MLC Chat、Maid、Layla、通过 Termux 的 Ollama、Private AI 和 PocketPal AI。',
          '[在你的平板电脑上运行本地 LLM：iPad 和 Android（2026）](/zh/power-local-llm/run-ai-on-tablet-ipad-android) — 平板电脑上的设备和远程推理的设备专用指南。',
          '[2026 年最佳移动 LLM 模型：Phi-4 Mini vs Gemma 4 vs SmolLM](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 模型层伴随；移动上的基准和质量权衡。',
          '[在你的手机上构建本地语音助手：Whisper + 本地 LLM（无云）](/zh/power-local-llm/voice-assistant-local-mobile-offline) — 完整的离线语音管道（STT + LLM + TTS），有测量延迟和电池数据。',
          '[本地 LLM 软件目录 2026](/zh/power-local-llm/local-llm-software-directory-2026) — 所有平台的综合应用和工具目录。',
        ],
      },
    },
  },
  }

