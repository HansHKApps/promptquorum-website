// Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac
// Slug: loci-ai-review-offline-local-ai
// Companion to: best-local-llm-apps-iphone-2026, best-local-llm-apps-android-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
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
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visit Loci AI official site →', url: 'https://askloci.ai', productName: 'Loci', productCategory: 'software' },
    ],
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
      '**Loci is most compelling if your priority is low-friction, on-device AI rather than manual model management.** It runs on iPhone, iPad, Android, Mac, and Windows, picks a model that fits your hardware automatically, and lets you download others afterwards. Loci AI describes Gemma 4 E2B/E4B as the strongest reasoning available on a phone, and says desktop is now a first-class platform with much larger models on Mac and Windows (maker-stated, see From the Maker). Advanced users can also pair their phone to a Mac or PC (Loci Link) to run those models from mobile. Users who want to select quantizations, import models, or run larger model libraries should compare it with more technical alternatives like Private LLM or PocketPal AI.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Loci for private, offline AI?',
        answer:
          'Use Loci if you want private on-device chat without model-management friction, across iPhone, Android, iPad, Mac, or Windows. Skip it if you need live web knowledge without connectivity, or deep control over model selection and quantization — those are better served by cloud AI or more technical local-LLM apps like Private LLM.',
        bullets: [
          'Free, no subscription, works on 5 platforms (iPhone/iPad/Android/Mac/Windows).',
          'Offline-capable after app and model download/setup.',
          'No account, no tracking, conversations stay on-device per Loci AI claims.',
          'Optional features (web search via DuckDuckGo, Windows voice input) require internet.',
          'Quality and model selection less flexible than Private LLM or PocketPal AI.',
        ],
        updatedDate: '2026-10-23',
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
      { label: 'From the Maker', anchor: 'from-the-maker' },
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
          'Loci picks a model that fits your hardware automatically, and you can download others afterwards (Gemma, Qwen, Llama, Phi). On Apple devices it can also use Apple\'s system foundation model where supported.',
          'Setup is minimal — no GGUF files, no quantization choices, just download and chat. Loci selects the best runtime (llama.cpp or MLX) for your hardware.',
          'Privacy claim: conversations stay on-device; optional features (web RAG, voice) require internet. Web RAG grounds answers in live sources when online and falls back cleanly to on-device when offline.',
          'Standout features, as described by Loci AI: Loci Link (desktop/phone pairing for powerful models), global memory across conversations, thermal management, background downloads, and crash resilience.',
          'Maker-stated in October 2026 and not verified by PromptQuorum: Mac and Windows now run much larger models, and Loci also works inside messaging apps.',
          'PromptQuorum\'s hands-on testing covered mobile in August 2026; the desktop builds, messaging integrations and current model lineup were not tested.',
          'Not ideal for users needing live web knowledge offline, deep GGUF/quantization control, or fully documented voice stacks.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'What Loci Is',
        content: [
          'Loci is a consumer-focused, on-device AI assistant available on iPhone (iOS 18.0+), iPad (iPadOS 18.0+), Android, Mac, and Windows. Built by Loci AI, Inc., the app is free with no subscription, no ads, and no account requirement. The App Store listing showed version 1.3.31 as updated on October 23, 2026 (the listing gives only a relative time); the [Windows download page](https://askloci.ai/windows/) labels the Windows build beta.',
          'Model architecture: Loci can use "Apple\'s built-in foundation model or download from 10+ curated open-source models, including Gemma, Qwen, Llama, and Phi — all running locally on your device." This means inference happens on-device after setup, not in the cloud.',
          'Privacy positioning: The official claim is "Chat is processed on your device and is not uploaded. There is no account, no server-side copy of your conversations, and no training on your words." The app collects "Identifiers," "Usage Data," and "Diagnostics" via its privacy nutrition label, but states this data is "not linked to your identity." The developer\'s terms are in its [privacy policy](https://askloci.ai/privacy/).',
          'Optional features include photo analysis, voice mode, calendar/reminders integration, and web search via DuckDuckGo. The caveat: web search and Windows voice input require an internet connection, which alters the "offline" story if used.',
          'Messaging apps (maker-stated): Loci AI told PromptQuorum in October 2026 that Loci now also works inside iMessage, Telegram, Discord, and Slack, with WhatsApp coming soon. The [Loci website](https://askloci.ai) did not mention messaging integrations when PromptQuorum checked on October 23, 2026, and PromptQuorum has not tested them.',
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
          '**Downloadable open-source models** — Loci recommends the model that best fits your hardware when you first set up, and you can download others afterwards (Gemma, Qwen, Llama, Phi). Loci AI lists Gemma 4 E2B/E4B and Qwen3.8 in its current lineup (maker-stated). Phone-sized model files typically range from 1–5 GB. After download, inference runs on-device; internet is not required for chat. New models land continuously and are integrated once verified to run on phone hardware.',
          '**Runtime flexibility** — Loci intelligently selects the best inference runtime for each model and device: llama.cpp for GGUF models and Apple\'s MLX for optimal performance on Apple silicon. This means the simple interface masks sophisticated tuning beneath the surface — the app picks the fastest path for that model on your specific hardware (measuring time-to-first-token and tokens-per-second), rather than forcing users to understand runtimes.',
          '**Desktop models (maker-stated)** — Loci AI says Mac and Windows now run much larger models than phones can. Its website cites the [Artificial Analysis](https://artificialanalysis.ai) Intelligence Index v4.3.2 (October 14, 2026): Qwen3.8 27B running on a Mac scores 34, ahead of Claude Opus 4.6 (32) and GPT-5.2 (30), both marked as estimated by Loci AI. PromptQuorum has not independently verified these figures, and an index score does not predict how a model performs on your own tasks.',
        ],
        note:
          'The exact device/OS thresholds for which platforms get Apple foundation-model support vs. must download a model are not publicly documented. Assume that support varies by device, OS version, app version, storage, and region — do not expect identical behavior across your devices. Last verified against the Loci website and App Store listing on 2026-10-23.',
      },
      testingNotes: {
        id: 'testing-notes',
        title: 'Real-World Testing Notes',
        content: [
          'Loci was tested on mobile devices (testing by Hans Küpper, PromptQuorum, August 2026) to validate real-world usability:',
        ],
        items: [
          '**Model downloads work reliably.** Downloads of compact models (e.g., Gemma 4 E4B, ~4 GB) completed successfully on home WiFi with no truncation or corruption observed.',
          '**Offline chat works as advertised.** Once a model is downloaded, inference runs without any internet connection, including in airplane mode. Chat remains responsive.',
          '**Model quality depends on both parameter count and app-level tuning.** In the August test, the baseline 3B–4B models excelled at drafting, brainstorming, and summarization, but struggled with nuanced topics and multi-step reasoning — a ceiling inherent to parameter count that no app can change. What the app can change is everything surrounding the model: memory management, context-window handling, hallucination reduction, and OS-level stability. Loci implements context management (automatic compaction plus techniques for stretching usable context), which produced fewer hallucinations and crashes than other apps running the identical model. Gemma 4 E2B and E4B were a genuine step above the 2025 generation of 3B–4B models. For complex analysis, live web queries, or high-stakes decisions, larger models — cloud-hosted or, per Loci AI, on a desktop — are the better fit.',
          '**Optional features require connectivity.** Web search via DuckDuckGo, model downloads, and app updates all require internet access as documented.',
          '**Not tested.** The Mac and Windows builds, the messaging-app integrations, automatic model selection and the October 2026 model lineup were introduced or described after this test and have not been tested by PromptQuorum.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
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
            'Limitation / caveat': 'Smaller local models (~3B–4B params) produce less capable output than the largest cloud models.',
          },
          {
            'Benefit': 'Web grounding with seamless offline fallback',
            'What it means in real use': 'When online, Loci can ground answers in live web sources via configurable web RAG. When offline, it cleanly falls back to on-device knowledge without breaking. You control the behavior in settings.',
            'Limitation / caveat': 'Web grounding requires internet when enabled. Without web access, answers reflect only on-device model knowledge and do not include current events.',
          },
          {
            'Benefit': 'Long-context and complex reasoning',
            'What it means in real use': 'Suitable for drafting, summarizing, and structured Q&A on local content.',
            'Limitation / caveat': 'Complex multi-step reasoning, coding, and high-stakes summarization often still benefit from larger models, cloud-hosted or on a desktop.',
          },
          {
            'Benefit': 'Desktop/phone linking for larger models',
            'What it means in real use': 'Link your phone to a Mac or PC to run larger models from your phone, offloading inference to a more capable machine while keeping the interface on mobile.',
            'Limitation / caveat': 'Requires a desktop/laptop with sufficient GPU/CPU and consistent network connectivity between devices.',
          },
          {
            'Benefit': 'App stability and crash resilience',
            'What it means in real use': 'Loci AI says its OS memory handling results in fewer crashes than other local-LLM apps and better session continuity (maker-stated; not a controlled comparison).',
            'Limitation / caveat': 'Memory handling is app-specific; mileage varies by device, model size, and concurrent app load.',
          },
          {
            'Benefit': 'Global memory across conversations',
            'What it means in real use': 'Loci remembers things about you across conversations and model switches. Switch from Gemma to Qwen and the app retains your preferences and history — all stored on-device.',
            'Limitation / caveat': 'Global memory stays local to your device; not synced across devices.',
          },
          {
            'Benefit': 'Thermal management',
            'What it means in real use': 'According to Loci AI, Loci monitors device temperature and adjusts runtime parameters to keep your phone stable, rather than pushing inference until the phone throttles itself or the app crashes. Multiple thermal modes let you deliberately run cooler for extended sessions.',
            'Limitation / caveat': 'Thermal management trades some speed for stability; different devices have different thermal profiles.',
          },
          {
            'Benefit': 'Background model downloads',
            'What it means in real use': 'Model downloads run in background sessions and survive the app being closed, resuming where they left off. No need to keep the app open while downloading a 4 GB model file.',
            'Limitation / caveat': 'Downloads still require internet connectivity during active download windows.',
          },
          {
            'Benefit': 'Progressive settings depth',
            'What it means in real use': 'The main app screen is intentionally simple for casual users, but settings are available for users who want to tune model behavior, temperature, context length, and thermal modes.',
            'Limitation / caveat': 'Advanced settings are hidden by default; you have to explore to discover all capabilities.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Loci on Each Platform',
        columns: ['Platform', 'What to expect', 'Important note'],
        rows: [
          {
            'Platform': 'iPhone',
            'What to expect': 'Loci works on iOS 18.0+. Can use Apple\'s on-device foundation model or download a compact open-source model (Gemma 4 E4B, Llama 3.2 3B, ~2–4 GB). Chat, photo analysis, voice mode, and calendar integration available.',
            'Important note': 'iOS 18+ requirement excludes iPhone XS and older. Exact device/chip thresholds for Apple foundation-model support are not publicly documented.',
          },
          {
            'Platform': 'iPad',
            'What to expect': 'Loci works on iPadOS 18.0+, with the same model paths as iPhone. Larger screen is better for long conversations and document review.',
            'Important note': 'Larger models may still be constrained by available VRAM. Apple foundation-model availability varies by iPad generation; check App Store for current compatibility.',
          },
          {
            'Platform': 'Android',
            'What to expect': 'Available on Google Play. Can download open-source models (Gemma 4 E4B, Qwen, Llama 3.2 3B, Phi-4, ~2–5 GB). No built-in system model equivalent to Apple\'s foundation model.',
            'Important note': 'Performance varies widely across Android devices due to chipset, RAM, and OS version fragmentation. High-end phones (Snapdragon 8 series, 8+ GB RAM) handle models better.',
          },
          {
            'Platform': 'Mac',
            'What to expect': 'Download from [askloci.ai](https://askloci.ai). Can use Apple\'s on-device foundation model, download open-source models, or connect to Ollama running on the same Mac for access to a broader model library. Useful for longer sessions, larger screens, and external keyboards.',
            'Important note': 'Mac-specific Apple foundation-model support is undocumented. M-series Macs (M1/M2/M3+) likely supported; older Intel Macs may require model download. Advanced users can run Ollama locally and plug models into Loci for expanded model access.',
          },
          {
            'Platform': 'Windows',
            'What to expect': 'Download from [askloci.ai](https://askloci.ai/windows/); the page labels the build beta and offers x64 and ARM64 installers. Can download open-source models (same families as Android: Gemma, Qwen, Llama, Phi). Voice input requires internet connection (unlike other platforms).',
            'Important note': 'Windows support is the least documented of the five platforms. Performance depends on GPU/CPU; requires sufficient disk space for model storage (~2–5 GB).',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
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
          '**User who wants to run larger models from their phone.** Loci Link lets you pair your phone to a Mac or PC to run larger models from the mobile interface while keeping traffic between your own devices, according to Loci AI. It requires a capable desktop and a stable connection between the devices.',
          '**User who values persistent memory across conversations.** Loci remembers things about you across different conversations and even when switching between models. All memory stays on your device.',
          '**User running long sessions on a phone that tends to overheat.** According to Loci AI, Loci\'s thermal management adjusts runtime parameters to keep your phone stable during long sessions, rather than letting the device throttle itself or crash the app.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Loci',
        items: [
          '**User expecting frontier reasoning on a phone, or live web integration.** Phone-sized models face a parameter-count ceiling that the largest cloud models exceed, even with Loci\'s context management. Loci AI says Mac and Windows can now run much larger models (maker-stated, not tested by PromptQuorum); for high-stakes analysis, complex multi-step reasoning, code generation, or live web grounding, check that claim against your own tasks first. Loci excels at personal assistant tasks, drafting, and reasoning within its design envelope.',
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
            a: 'For specific tasks, yes — drafting, brainstorming, summarizing local documents, simple Q&A. For complex reasoning, code generation, live web queries, or high-stakes decisions, cloud models (ChatGPT, Claude) are more capable than phone-sized local models. Loci AI says that on a Mac it now runs models that score above some cloud models on an independent benchmark; PromptQuorum has not tested this. Loci is best viewed as an offline-capable local alternative to cloud chat for privacy and connectivity reasons, not as a universal replacement.',
          },
          {
            q: 'How much storage does Loci use?',
            a: 'The app itself is small (~100 MB). Model files depend on which you choose: compact models (Phi-4 Mini, Gemma 4 E2B, SmolLM) are 1–3 GB; larger models (Llama 3.2 3B, Gemma 4 E4B, Qwen3) are 2–5 GB. If you have multiple models downloaded, total usage can reach 10+ GB. Plan accordingly on devices with limited storage.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'From the Maker',
        content: [
          'Michael Waldman, Founder & CEO of Loci AI, Inc., supplied the following statement for this review in October 2026. It is presented as the maker\'s own words, lightly split into paragraphs for readability, not as PromptQuorum\'s independent editorial assessment; PromptQuorum has not verified the claims in it:',
          '"We built Loci because we believe capable AI should be a public good, not a subscription that sends every word to a data center. The biggest surprise of the last year is how far open models have come. On a Mac, Loci now runs models that score above frontier cloud models on independent benchmarks, for free and fully offline.',
          'Most of our work goes into making that feel effortless: picking the right model for your hardware, keeping long sessions stable, and letting your phone use your desktop\'s power. We\'re particularly excited about our universal harness, which is focused on increasing performance of smaller models. Most importantly, Loci is working on an inference engine, which gives us full control of local execution and will continue to push the frontier of local AI."',
        ],
        note: '— Michael Waldman, Founder & CEO, Loci AI, Inc.',
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Loci is most compelling if your priority is low-friction, on-device AI rather than maximum model control. Several features stand out: automatic model selection for your hardware; Loci Link (desktop/phone linking to run powerful models from your phone via a connected Mac or PC); global memory across conversations and model switches; thermal management for extended sessions; and app stability that Loci AI attributes to its OS memory handling. PromptQuorum\'s August mobile test confirmed that downloads work reliably, offline chat functions as advertised, and, in the tester\'s experience, the app crashed less than competing local-LLM apps. The web RAG implementation is also distinctive: when online, answers ground in live sources; when offline, it falls back to on-device knowledge — and you control the behavior in settings. For users who want private offline chat without technical model-management friction, Loci excels. For users who want advanced model control and quantization flexibility, Private LLM (Apple) and PocketPal AI offer more depth; for Android users exploring experimental on-device options, Google AI Edge Gallery offers additional model discovery. What changed since August comes from the maker and is untested here: desktop as a first-class platform running larger models, messaging-app integrations, and a benchmark claim for Qwen3.8 27B on a Mac. The honest assessment: Loci succeeds at simplicity, stability, and cross-platform consistency on mobile; whether its desktop claims hold up on your workload is for you to check.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Loci official site](https://askloci.ai) — product overview, platform downloads, model-selection FAQ, and the benchmark claim cited above (read October 23, 2026).',
          '[Loci Windows download page](https://askloci.ai/windows/) — beta label, x64 and ARM64 builds.',
          '[Loci privacy policy](https://askloci.ai/privacy/) — the developer\'s privacy terms.',
          '[Loci on the App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — iOS availability, version 1.3.31, privacy nutrition label, minimum OS requirements.',
          '[Loci on Google Play](https://play.google.com/store/apps/details?id=app.lociai.loci) — Android availability.',
          '[Artificial Analysis](https://artificialanalysis.ai) — publisher of the Intelligence Index that Loci AI cites; PromptQuorum did not independently check the scores.',
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
          '[Local LLM Software Directory 2026](/directory) — comprehensive app and tool directory for all platforms.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
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
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'زيارة الموقع الرسمي لـ Loci AI ←', url: 'https://askloci.ai', productName: 'Loci', productCategory: 'software' },
    ],
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
      '**يكون Loci الأكثر جاذبية إذا كانت أولويتك ذكاءً اصطناعياً على الجهاز بأقل قدر من العناء بدلاً من إدارة النماذج يدوياً.** يعمل على iPhone وiPad وAndroid وMac وWindows، ويختار تلقائياً نموذجاً يناسب عتادك، ويتيح لك تنزيل نماذج أخرى لاحقاً. تصف Loci AI نموذج Gemma 4 E2B/E4B بأنه أقوى استدلال متاح على الهاتف، وتذكر أن سطح المكتب أصبح الآن منصة من الدرجة الأولى مع نماذج أكبر بكثير على Mac وWindows (بحسب المطوّر، انظر «من صانع الأداة»). ويمكن للمستخدمين المتقدمين أيضاً إقران هاتفهم بجهاز Mac أو PC (Loci Link) لتشغيل هذه النماذج من الهاتف. أما من يريد اختيار أنواع التكميم أو استيراد النماذج أو استخدام مكتبات نماذج أكبر، فعليه المقارنة ببدائل أكثر تقنية مثل Private LLM أو PocketPal AI.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Loci for private, offline AI?',
        answer:
          'Use Loci if you want private on-device chat without model-management friction, across iPhone, Android, iPad, Mac, or Windows. Skip it if you need live web knowledge without connectivity, or deep control over model selection and quantization — those are better served by cloud AI or more technical local-LLM apps like Private LLM.',
        bullets: [
          'Free, no subscription, works on 5 platforms (iPhone/iPad/Android/Mac/Windows).',
          'Offline-capable after app and model download/setup.',
          'No account, no tracking, conversations stay on-device per Loci AI claims.',
          'Optional features (web search via DuckDuckGo, Windows voice input) require internet.',
          'Quality and model selection less flexible than Private LLM or PocketPal AI.',
        ],
        updatedDate: '2026-10-23',
      },
      ar: {
        question: 'هل يجب أن أستخدم Loci للذكاء الاصطناعي الخاص والمحلي؟',
        answer:
          'استخدم Loci إذا كنت تريد محادثة خاصة على الجهاز دون عناء إدارة النماذج، عبر iPhone أو Android أو iPad أو Mac أو Windows. تجنّبه إذا كنت تحتاج إلى معرفة ويب حية دون اتصال، أو إلى تحكم عميق في اختيار النموذج والتكميم — فالذكاء الاصطناعي السحابي أو تطبيقات LLM المحلية الأكثر تقنية مثل Private LLM أنسب لذلك.',
        bullets: [
          'مجاني، لا اشتراك، يعمل على 5 منصات (iPhone/iPad/Android/Mac/Windows).',
          'قابل للعمل بدون إنترنت بعد تنزيل التطبيق والنموذج والإعداد.',
          'لا حساب، لا تتبع، المحادثات تبقى على الجهاز وفقاً لأدعاءات المطور.',
          'الميزات الاختيارية (البحث عن الويب عبر DuckDuckGo، إدخال الصوت على Windows) تتطلب الإنترنت.',
          'الجودة واختيار النموذج أقل مرونة من Private LLM أو PocketPal AI.',
        ],
        updatedDate: '2026-10-23',
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
      { label: 'من صانع الأداة', anchor: 'from-the-maker' },
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
          'Loci تطبيق ذكاء اصطناعي مجاني يعمل على الجهاز لأجهزة iPhone وiPad وAndroid وMac وWindows، من تطوير Loci AI, Inc.',
          'يختار Loci تلقائياً نموذجاً يناسب عتادك، ويمكنك تنزيل نماذج أخرى لاحقاً (Gemma وQwen وLlama وPhi). وعلى أجهزة Apple يمكنه أيضاً استخدام النموذج الأساسي للنظام من Apple حيثما كان مدعوماً.',
          'الإعداد بسيط — لا ملفات GGUF ولا خيارات تكميم، فقط نزّل وابدأ المحادثة. يختار Loci أفضل بيئة تشغيل (llama.cpp أو MLX) لعتادك.',
          'ادعاء الخصوصية: تبقى المحادثات على الجهاز؛ والميزات الاختيارية (RAG عبر الويب، الصوت) تتطلب الإنترنت. يستند RAG عبر الويب في إجاباته إلى مصادر حية عند الاتصال، ويعود بسلاسة إلى النموذج المحلي عند عدم الاتصال.',
          'الميزات البارزة كما تصفها Loci AI: Loci Link (إقران سطح المكتب والهاتف لتشغيل نماذج قوية)، وذاكرة عامة عبر المحادثات، وإدارة حرارية، وتنزيلات في الخلفية، ومقاومة للانهيار.',
          'بحسب المطوّر في أكتوبر 2026 ولم تتحقق منه PromptQuorum: يشغّل Mac وWindows الآن نماذج أكبر بكثير، ويعمل Loci أيضاً داخل تطبيقات المراسلة.',
          'شمل اختبار PromptQuorum العملي الهاتف المحمول في أغسطس 2026؛ ولم تُختبر نسخ سطح المكتب وتكاملات المراسلة وتشكيلة النماذج الحالية.',
          'غير مناسب لمن يحتاج إلى معرفة ويب حية دون اتصال، أو تحكم عميق في GGUF/التكميم، أو حزم صوتية موثقة بالكامل.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'ما هو Loci',
        content: [
          'Loci مساعد ذكاء اصطناعي موجّه للمستهلكين يعمل على الجهاز، ومتاح على iPhone (iOS 18.0+) وiPad (iPadOS 18.0+) وAndroid وMac وWindows. طوّرته Loci AI, Inc.، وهو مجاني بلا اشتراك ولا إعلانات ولا حاجة إلى حساب. أظهرت صفحة App Store الإصدار 1.3.31 على أنه حُدّث في 23 أكتوبر 2026 (تعرض الصفحة وقتاً نسبياً فقط)؛ وتصنّف [صفحة تنزيل Windows](https://askloci.ai/windows/) نسخة Windows على أنها تجريبية (Beta). وشروط المطوّر موجودة في [سياسة الخصوصية](https://askloci.ai/privacy/).',
          'بنية النموذج: يمكن لـ Loci استخدام نموذج الأساس المدمج من Apple أو التنزيل من 10+ نماذج مفتوحة المصدر منسقة، بما في ذلك Gemma و Qwen و Llama و Phi — جميعها تعمل محلياً على جهازك. هذا يعني أن الاستدلال يحدث على الجهاز بعد الإعداد وليس في السحابة.',
          'موضع الخصوصية: الادعاء الرسمي هو "تتم معالجة المحادثة على جهازك وليست محملة. لا يوجد حساب، لا نسخة من جانب الخادم من محادثاتك، وليس التدريب على كلماتك." يجمع التطبيق "المعرفات" و"بيانات الاستخدام" و"التشخيص" عبر ملصق التغذية الغذائية للخصوصية الخاص به، لكنه يذكر أن هذه البيانات "ليست مرتبطة بهويتك".',
          'تتضمن الميزات الاختيارية تحليل الصور وأسلوب الصوت والتكامل مع التقويم والتذكيرات والبحث عن الويب عبر DuckDuckGo. التحذير: يتطلب البحث عن الويب وإدخال الصوت على Windows اتصالاً بالإنترنت، مما يغير قصة "المحلي" إذا تم استخدامها.',
          'تطبيقات المراسلة (بحسب المطوّر): أبلغت Loci AI شركة PromptQuorum في أكتوبر 2026 أن Loci يعمل الآن أيضاً داخل iMessage وTelegram وDiscord وSlack، وأن WhatsApp قادم قريباً. ولم يذكر [موقع Loci](https://askloci.ai) أي تكاملات مراسلة عندما راجعته PromptQuorum في 23 أكتوبر 2026، ولم تختبرها PromptQuorum.',
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
          '**نماذج مفتوحة المصدر قابلة للتنزيل** — يوصي Loci بالنموذج الأنسب لعتادك عند الإعداد الأول، ويمكنك تنزيل نماذج أخرى لاحقاً (Gemma وQwen وLlama وPhi). تذكر Loci AI أن تشكيلتها الحالية تشمل Gemma 4 E2B/E4B وQwen3.8 (بحسب المطوّر). وتتراوح ملفات النماذج بحجم الهاتف عادةً بين 1 و5 GB. بعد التنزيل يعمل الاستدلال على الجهاز؛ ولا حاجة إلى الإنترنت للمحادثة. وتُضاف النماذج الجديدة باستمرار بعد التحقق من تشغيلها على عتاد الهاتف.',
          '**مرونة بيئة التشغيل** — يختار Loci أفضل بيئة استدلال لكل نموذج وجهاز: llama.cpp لنماذج GGUF وMLX من Apple لأفضل أداء على Apple silicon. أي أن الواجهة البسيطة تخفي ضبطاً دقيقاً؛ إذ يختار التطبيق أسرع مسار لذلك النموذج على عتادك (بقياس زمن أول رمز وعدد الرموز في الثانية) بدلاً من إجبار المستخدم على فهم بيئات التشغيل.',
          '**نماذج سطح المكتب (بحسب المطوّر)** — تقول Loci AI إن Mac وWindows يشغّلان الآن نماذج أكبر بكثير مما تستطيعه الهواتف. ويستشهد موقعها بمؤشر Intelligence Index الإصدار v4.3.2 من [Artificial Analysis](https://artificialanalysis.ai) (14 أكتوبر 2026): يحقق Qwen3.8 27B على Mac نتيجة 34، متقدماً على Claude Opus 4.6 (32) وGPT-5.2 (30)، وكلتا القيمتين تصفهما Loci AI بأنهما تقديريتان. لم تتحقق PromptQuorum من هذه الأرقام بشكل مستقل، ولا تتنبأ نتيجة المؤشر بأداء النموذج في مهامك أنت.',
        ],
        note:
          'عتبات الجهاز/نظام التشغيل الدقيقة التي تحدد المنصات التي تحصل على دعم النموذج الأساسي من Apple والتي يجب أن تنزّل نموذجاً غير موثقة علناً. افترض أن الدعم يختلف حسب الجهاز وإصدار النظام وإصدار التطبيق والتخزين والمنطقة — ولا تتوقع سلوكاً متطابقاً على جميع أجهزتك. آخر تحقق مقابل موقع Loci وصفحة App Store بتاريخ 2026-10-23.',
      },
      testingNotes: {
        id: 'testing-notes',
        title: 'ملاحظات الاختبار في العالم الحقيقي',
        content: [
          'اختُبر Loci على أجهزة محمولة (اختبار Hans Küpper، PromptQuorum، أغسطس 2026) للتحقق من قابلية الاستخدام في الواقع:',
        ],
        items: [
          '**تنزيلات النموذج تعمل بشكل موثوق.** تنزيلات النماذج المدمجة (على سبيل المثال Gemma 4 E4B ~4 GB) اكتملت بنجاح على WiFi المنزلي مع عدم ملاحظة أي اختطاف أو فساد.',
          '**المحادثة المحلية تعمل كما هو معلن.** بمجرد تنزيل نموذج يعمل الاستدلال بدون أي اتصال بالإنترنت بما في ذلك في وضع الطائرة. تبقى المحادثة مستجيبة.',
          '**تعتمد جودة النموذج على عدد المعاملات وعلى ضبط التطبيق معاً.** في اختبار أغسطس، أجادت النماذج الأساسية بحجم 3B–4B كتابة المسودات والعصف الذهني والتلخيص، لكنها واجهت صعوبة مع المواضيع الدقيقة والاستدلال متعدد الخطوات — وهو سقف مرتبط بعدد المعاملات لا يستطيع أي تطبيق تغييره. أما ما يستطيع التطبيق تغييره فهو كل ما يحيط بالنموذج: إدارة الذاكرة، والتعامل مع نافذة السياق، وتقليل الهلوسة، والاستقرار على مستوى نظام التشغيل. ينفذ Loci إدارة للسياق (ضغطاً تلقائياً مع تقنيات لتوسيع السياق القابل للاستخدام)، مما أنتج هلوسة وانهيارات أقل من تطبيقات أخرى تشغّل النموذج نفسه. وكان Gemma 4 E2B وE4B خطوة حقيقية إلى الأمام مقارنة بجيل 2025 من نماذج 3B–4B. وللتحليلات المعقدة أو استعلامات الويب الحية أو القرارات عالية المخاطر، فالنماذج الأكبر — السحابية أو، بحسب Loci AI، على سطح المكتب — أنسب.',
          '**الميزات الاختيارية تتطلب الاتصال.** البحث عن الويب عبر DuckDuckGo وتنزيلات النموذج وتحديثات التطبيق جميعها تتطلب الوصول إلى الإنترنت كما موثق.',
          '**لم يُختبر.** أُطلقت نسختا Mac وWindows وتكاملات المراسلة والاختيار التلقائي للنموذج وتشكيلة النماذج في أكتوبر 2026 أو وُصفت بعد هذا الاختبار، ولم تختبرها PromptQuorum.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
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
            'القيد / التحذير': 'تنتج النماذج المحلية الأصغر (~3B–4B معاملات) مخرجات أقل قدرة من أكبر النماذج السحابية.',
          },
          {
            'الفائدة': 'الاستناد إلى الويب مع رجوع سلس إلى وضع عدم الاتصال',
            'ما تعنيه في الاستخدام الفعلي': 'عند الاتصال يمكن لـ Loci أن يستند في إجاباته إلى مصادر ويب حية عبر RAG للويب قابل للضبط. وعند عدم الاتصال يعود بسلاسة إلى المعرفة الموجودة على الجهاز دون أن يتعطل. وأنت تتحكم في هذا السلوك من الإعدادات.',
            'القيد / التحذير': 'يتطلب الاستناد إلى الويب الإنترنت عند تفعيله. وبدون الوصول إلى الويب تعكس الإجابات معرفة النموذج على الجهاز فقط ولا تشمل الأحداث الجارية.',
          },
          {
            'الفائدة': 'السياق الطويل والاستدلال المعقد',
            'ما تعنيه في الاستخدام الفعلي': 'مناسب للصياغة والتلخيص والأسئلة والأجوبة المنظمة على المحتوى المحلي.',
            'القيد / التحذير': 'لا يزال الاستدلال المعقد متعدد الخطوات والبرمجة والتلخيص عالي المخاطر يستفيد غالباً من نماذج أكبر، سحابية أو على سطح المكتب.',
          },
          {
            'الفائدة': 'ربط سطح المكتب بالهاتف لتشغيل نماذج أكبر',
            'ما تعنيه في الاستخدام الفعلي': 'اربط هاتفك بجهاز Mac أو PC لتشغيل نماذج أكبر من الهاتف: يُسند الاستدلال إلى جهاز أقدر بينما تبقى الواجهة على الهاتف.',
            'القيد / التحذير': 'يتطلب جهاز سطح مكتب أو لابتوب بمعالج رسومي/مركزي كافٍ واتصال شبكة مستقراً بين الأجهزة.',
          },
          {
            'الفائدة': 'استقرار التطبيق ومقاومة الانهيار',
            'ما تعنيه في الاستخدام الفعلي': 'تذكر Loci AI أن معالجتها لذاكرة نظام التشغيل تؤدي إلى انهيارات أقل من تطبيقات LLM المحلية الأخرى وإلى استمرارية أفضل للجلسات (بحسب المطوّر، وليست مقارنة مضبوطة).',
            'القيد / التحذير': 'معالجة الذاكرة خاصة بكل تطبيق؛ وتختلف النتائج بحسب الجهاز وحجم النموذج وحمل التطبيقات الأخرى.',
          },
          {
            'الفائدة': 'ذاكرة عامة عبر المحادثات',
            'ما تعنيه في الاستخدام الفعلي': 'يتذكر Loci أموراً عنك عبر المحادثات وتبديل النماذج. بدّل من Gemma إلى Qwen فيحتفظ التطبيق بتفضيلاتك وسجلك، وكل ذلك مخزّن على الجهاز.',
            'القيد / التحذير': 'تبقى الذاكرة العامة محلية على جهازك ولا تُزامَن بين الأجهزة.',
          },
          {
            'الفائدة': 'الإدارة الحرارية',
            'ما تعنيه في الاستخدام الفعلي': 'بحسب Loci AI، يراقب Loci حرارة الجهاز ويضبط معاملات التشغيل للحفاظ على استقرار هاتفك، بدلاً من دفع الاستدلال إلى أن يخفض الهاتف أداءه أو ينهار التطبيق. وتتيح أوضاع حرارية متعددة تشغيلاً أبرد عن قصد في الجلسات الطويلة.',
            'القيد / التحذير': 'تضحّي الإدارة الحرارية ببعض السرعة مقابل الاستقرار؛ ولكل جهاز ملف حراري مختلف.',
          },
          {
            'الفائدة': 'تنزيل النماذج في الخلفية',
            'ما تعنيه في الاستخدام الفعلي': 'تعمل تنزيلات النماذج في جلسات خلفية وتستمر بعد إغلاق التطبيق وتُستأنف من حيث توقفت. لا حاجة إلى إبقاء التطبيق مفتوحاً أثناء تنزيل ملف نموذج بحجم 4 GB.',
            'القيد / التحذير': 'لا تزال التنزيلات تتطلب اتصالاً بالإنترنت خلال فترات التنزيل النشطة.',
          },
          {
            'الفائدة': 'إعدادات تزداد عمقاً تدريجياً',
            'ما تعنيه في الاستخدام الفعلي': 'الشاشة الرئيسية بسيطة عمداً للمستخدمين العاديين، لكن تتوفر إعدادات لمن يريد ضبط سلوك النموذج ودرجة الحرارة وطول السياق والأوضاع الحرارية.',
            'القيد / التحذير': 'الإعدادات المتقدمة مخفية افتراضياً؛ وعليك الاستكشاف لاكتشاف كل الإمكانات.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Loci على كل منصة',
        columns: ['المنصة', 'ما يمكن توقعه', 'ملاحظة مهمة'],
        rows: [
          {
            'المنصة': 'iPhone',
            'ما يمكن توقعه': 'يعمل Loci على iOS 18.0+. يمكن استخدام نموذج أساس Apple على الجهاز أو تنزيل نموذج مدمج مفتوح المصدر (Gemma 4 E4B و Llama 3.2 3B ~2–4 GB). المحادثة وتحليل الصور وأسلوب الصوت والتكامل مع التقويم متاح.',
            'ملاحظة مهمة': 'متطلب iOS 18+ يستبعد iPhone XS والأقدم. حدود الجهاز/الشريحة الدقيقة لدعم نموذج أساس Apple ليست موثقة بشكل علني.',
          },
          {
            'المنصة': 'iPad',
            'ما يمكن توقعه': 'يعمل Loci على iPadOS 18.0+ مع نفس مسارات النموذج مثل iPhone. الشاشة الأكبر أفضل للمحادثات الطويلة واستعراض الوثيقة.',
            'ملاحظة مهمة': 'النماذج الأكبر قد تكون محدودة بـ VRAM المتاح. توفر نموذج أساس Apple تختلف حسب جيل iPad؛ تحقق من App Store لتوافقية حالية.',
          },
          {
            'المنصة': 'Android',
            'ما يمكن توقعه': 'متاح على Google Play. يمكن تنزيل نماذج مفتوحة المصدر (Gemma 4 E4B وQwen وLlama 3.2 3B وPhi-4 ~2–5 GB). لا يوجد نموذج نظام مدمج معادل للنموذج الأساسي من Apple.',
            'ملاحظة مهمة': 'الأداء تختلف على نطاق واسع عبر أجهزة Android بسبب تجزئة رقاقة و RAM وإصدار نظام التشغيل. الهواتف الذكية عالية الأداء (Snapdragon 8 سلسلة 8+ GB RAM) تتعامل مع النماذج بشكل أفضل.',
          },
          {
            'المنصة': 'Mac',
            'ما يمكن توقعه': 'التنزيل من [askloci.ai](https://askloci.ai). يمكن استخدام النموذج الأساسي من Apple على الجهاز، أو تنزيل نماذج مفتوحة المصدر، أو الاتصال بـ Ollama على جهاز Mac نفسه للوصول إلى مكتبة نماذج أوسع. مفيد للجلسات الأطول والشاشات الأكبر ولوحات المفاتيح الخارجية.',
            'ملاحظة مهمة': 'دعم نموذج أساس خاص بـ Mac غير موثق. معالجات M-series (M1/M2/M3+) على الأرجح مدعومة؛ قد تتطلب Macs Intel الأقدم تنزيل نموذج. تحقق من App Store لتوافقية حالية.',
          },
          {
            'المنصة': 'Windows',
            'ما يمكن توقعه': 'التنزيل من [askloci.ai](https://askloci.ai/windows/)؛ وتصنّف الصفحة النسخة على أنها تجريبية (Beta) وتوفر مثبّتات x64 وARM64. يمكن تنزيل نماذج مفتوحة المصدر (العائلات نفسها كما في Android: Gemma وQwen وLlama وPhi). إدخال الصوت يتطلب اتصالاً بالإنترنت (على عكس المنصات الأخرى).',
            'ملاحظة مهمة': 'دعم Windows هو الأقل توثيقاً من بين المنصات الخمس. تعتمد الأداء على GPU/CPU؛ تتطلب مساحة قرص كافية لتخزين النموذج (~2–5 GB).',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
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
          '**مستخدم يريد تشغيل نماذج أكبر من هاتفه.** بحسب Loci AI، يتيح Loci Link إقران الهاتف بجهاز Mac أو PC لتشغيل نماذج أكبر عبر واجهة الهاتف مع بقاء حركة البيانات بين أجهزتك أنت. ويتطلب ذلك سطح مكتب قادراً واتصالاً مستقراً بين الجهازين.',
          '**مستخدم يقدّر الذاكرة المستمرة عبر المحادثات.** يتذكر Loci أموراً عنك عبر محادثات مختلفة وحتى عند التبديل بين النماذج. وتبقى كل الذاكرة على جهازك.',
          '**مستخدم يجري جلسات طويلة على هاتف يميل إلى السخونة.** بحسب Loci AI، تضبط الإدارة الحرارية في Loci معاملات التشغيل للحفاظ على استقرار هاتفك أثناء الجلسات الطويلة، بدلاً من ترك الجهاز يخفض أداءه أو ينهار التطبيق.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Loci',
        items: [
          '**مستخدم يتوقع استدلالاً متقدماً على الهاتف أو تكاملاً مع الويب الحي.** تواجه النماذج بحجم الهاتف سقفاً في عدد المعاملات تتجاوزه أكبر النماذج السحابية، حتى مع إدارة السياق في Loci. تقول Loci AI إن Mac وWindows يشغّلان الآن نماذج أكبر بكثير (بحسب المطوّر، ولم تختبره PromptQuorum)؛ وللتحليل عالي المخاطر أو الاستدلال المعقد متعدد الخطوات أو توليد الشيفرة أو الربط بالويب الحي، تحقق أولاً من هذا الادعاء على مهامك الخاصة. يتفوق Loci في مهام المساعد الشخصي وكتابة المسودات والاستدلال ضمن نطاق تصميمه.',
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
            a: 'في مهام محددة نعم — كتابة المسودات والعصف الذهني وتلخيص المستندات المحلية والأسئلة والأجوبة البسيطة. أما للاستدلال المعقد وتوليد الشيفرة واستعلامات الويب الحية والقرارات عالية المخاطر، فالنماذج السحابية (ChatGPT وClaude) أقدر من النماذج المحلية بحجم الهاتف. تقول Loci AI إنه يشغّل الآن على Mac نماذج تتفوق في اختبار أداء مستقل على بعض النماذج السحابية؛ ولم تختبر PromptQuorum ذلك. يُنظر إلى Loci على أفضل وجه بوصفه بديلاً محلياً يعمل دون اتصال للمحادثة السحابية لأسباب تتعلق بالخصوصية والاتصال، وليس بديلاً شاملاً.',
          },
          {
            q: 'كم التخزين الذي يستخدمه Loci؟',
            a: 'التطبيق نفسه صغير (~100 MB). ملفات النموذج تعتمد على اختيارك: النماذج المدمجة (Phi-4 Mini و Gemma 4 E2B و SmolLM) هي 1–3 GB؛ النماذج الأكبر (Llama 3.2 3B و Gemma 4 E4B و Qwen3) هي 2–5 GB. إذا كان لديك نماذج متعددة منزلة فيمكن أن يصل الاستخدام الكلي إلى 10+ GB. خطط وفقاً لذلك على الأجهزة ذات التخزين المحدود.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'من صانع الأداة',
        content: [
          'قدّم Michael Waldman، المؤسس والرئيس التنفيذي لشركة Loci AI, Inc.، البيان التالي إلى PromptQuorum لهذه المراجعة في أكتوبر 2026. يُعرض بوصفه كلام الصانع نفسه، مقسَّماً إلى فقرات لتسهيل القراءة، وليس تقييماً تحريرياً مستقلاً من PromptQuorum؛ ولم تتحقق PromptQuorum من الادعاءات الواردة فيه (مترجم عن الإنجليزية):',
          '«بنينا Loci لأننا نؤمن بأن الذكاء الاصطناعي القادر ينبغي أن يكون منفعة عامة، لا اشتراكاً يرسل كل كلمة إلى مركز بيانات. أكبر مفاجآت العام الماضي هي المدى الذي بلغته النماذج المفتوحة. على Mac، يشغّل Loci الآن نماذج تتفوق نتائجها على نماذج السحابة المتقدمة في اختبارات الأداء المستقلة، مجاناً ودون اتصال بالكامل.',
          'يذهب معظم عملنا إلى جعل ذلك يبدو سهلاً: اختيار النموذج المناسب لعتادك، والحفاظ على استقرار الجلسات الطويلة، وتمكين هاتفك من استخدام قدرة جهاز سطح المكتب. نحن متحمسون بشكل خاص لإطارنا الشامل (universal harness) الذي يركز على رفع أداء النماذج الأصغر. والأهم أن Loci يعمل على محرك استدلال يمنحنا تحكماً كاملاً في التنفيذ المحلي وسيواصل دفع حدود الذكاء الاصطناعي المحلي.»',
        ],
        note: '— Michael Waldman، المؤسس والرئيس التنفيذي، Loci AI, Inc.',
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم',
        content:
          'يكون Loci الأكثر جاذبية إذا كانت أولويتك ذكاءً اصطناعياً على الجهاز بأقل قدر من العناء بدلاً من أقصى تحكم في النماذج. تبرز عدة ميزات: الاختيار التلقائي للنموذج لعتادك؛ وLoci Link (ربط سطح المكتب بالهاتف لتشغيل نماذج قوية من هاتفك عبر Mac أو PC متصل)؛ والذاكرة العامة عبر المحادثات وتبديل النماذج؛ والإدارة الحرارية للجلسات الطويلة؛ واستقرار التطبيق الذي تعزوه Loci AI إلى معالجتها لذاكرة نظام التشغيل. وأكد اختبار PromptQuorum على الهاتف في أغسطس أن التنزيلات تعمل بموثوقية، وأن المحادثة دون اتصال تعمل كما هو معلن، وأن التطبيق، بحسب تجربة المختبِر، انهار أقل من تطبيقات LLM المحلية المنافسة. كما أن تنفيذ RAG عبر الويب مميز: عند الاتصال تستند الإجابات إلى مصادر حية، وعند عدم الاتصال يعود إلى المعرفة المحلية — وأنت تتحكم في هذا السلوك من الإعدادات. لمن يريد محادثة خاصة دون اتصال وبلا عناء تقني في إدارة النماذج، يتفوق Loci. ولمن يريد تحكماً متقدماً في النماذج ومرونة في التكميم، يقدّم Private LLM (لأجهزة Apple) وPocketPal AI عمقاً أكبر؛ ولمستخدمي Android الذين يستكشفون خيارات تجريبية على الجهاز، يقدّم Google AI Edge Gallery اكتشافاً إضافياً للنماذج. ما تغيّر منذ أغسطس جاء من المطوّر ولم يُختبر هنا: سطح المكتب منصةً من الدرجة الأولى بنماذج أكبر، وتكاملات المراسلة، وادعاء اختبار الأداء لـ Qwen3.8 27B على Mac. التقييم الصريح: ينجح Loci في البساطة والاستقرار والاتساق بين المنصات على الهاتف؛ أما صمود ادعاءاته المتعلقة بسطح المكتب مع حمل عملك فعليك التحقق منه بنفسك.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Loci الرسمي](https://askloci.ai) — نظرة عامة على المنتج، وتنزيلات المنصات، والأسئلة الشائعة حول اختيار النموذج، وادعاء اختبار الأداء المذكور أعلاه (اطُّلع عليه في 23 أكتوبر 2026).',
          '[صفحة تنزيل Loci لنظام Windows](https://askloci.ai/windows/) — وسم Beta، ونسختا x64 وARM64.',
          '[سياسة خصوصية Loci](https://askloci.ai/privacy/) — شروط الخصوصية لدى المطوّر.',
          '[Loci على App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — التوفر على iOS، والإصدار 1.3.31، وملصق الخصوصية، والحد الأدنى لمتطلبات النظام.',
          '[Loci على Google Play](https://play.google.com/store/apps/details?id=app.lociai.loci) — التوفر على Android.',
          '[Artificial Analysis](https://artificialanalysis.ai) — ناشر مؤشر Intelligence Index الذي تستشهد به Loci AI؛ ولم تتحقق PromptQuorum من النتائج بشكل مستقل.',
          '[Google AI Edge Gallery على GitHub](https://github.com/google-ai-edge/gallery) — قائمة الميزات، والنماذج المدعومة، والتوفر عبر المنصات.',
          '[مقال إعلان Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — إعلان 9 سبتمبر 2025 عن دعم الصوت والتوفر على Google Play.',
          '[موقع Private LLM الرسمي](https://privatellm.app/en) — الأسعار، وادعاءات الخصوصية، وتكامل الاختصارات، ودعم المنصات.',
          '[مكتبة نماذج Private LLM](https://privatellm.app/models) — النماذج المتاحة وصيغ التكميم.',
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
          '[دليل برمجيات Llm المحلي 2026](/ar/directory) — دليل تطبيقات وأدوات شامل لجميع المنصات.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
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
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Offizielle Loci-AI-Website besuchen →', url: 'https://askloci.ai', productName: 'Loci', productCategory: 'software' },
    ],
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
      '**Loci ist am überzeugendsten, wenn Ihre Priorität reibungslose, lokale KI statt manueller Modellverwaltung ist.** Die App läuft auf iPhone, iPad, Android, Mac und Windows, wählt automatisch ein zu Ihrer Hardware passendes Modell und lässt Sie anschließend weitere Modelle herunterladen. Loci AI bezeichnet Gemma 4 E2B/E4B als das stärkste Reasoning auf einem Smartphone und gibt an, der Desktop sei jetzt eine vollwertige Plattform mit deutlich größeren Modellen auf Mac und Windows (Herstellerangabe, siehe „Vom Entwickler“). Fortgeschrittene Nutzer können ihr Smartphone außerdem mit einem Mac oder PC koppeln (Loci Link), um diese Modelle vom Handy aus zu nutzen. Wer Quantisierungen auswählen, eigene Modelle importieren oder größere Modellbibliotheken nutzen möchte, sollte technischere Alternativen wie Private LLM oder PocketPal AI vergleichen.',
    quickAnswerTop: {
      de: {
        question: 'Sollte ich Loci für private, offline KI nutzen?',
        answer:
          'Nutzen Sie Loci, wenn Sie privaten Chat auf dem Gerät ohne Modellverwaltung wünschen – auf iPhone, Android, iPad, Mac oder Windows. Verzichten Sie darauf, wenn Sie Live-Webwissen ohne Verbindung oder tiefe Kontrolle über Modellauswahl und Quantisierung benötigen – dafür eignen sich Cloud-KI oder technischere lokale LLM-Apps wie Private LLM besser.',
        bullets: [
          'Kostenlos, kein Abonnement, funktioniert auf 5 Plattformen (iPhone/iPad/Android/Mac/Windows).',
          'Offline-fähig nach App- und Modell-Download/Einrichtung.',
          'Kein Konto, kein Tracking, Gespräche bleiben laut Entwicklerangaben lokal.',
          'Optionale Funktionen (Web-Suche via DuckDuckGo, Windows-Spracheingabe) erfordern Internet.',
          'Qualität und Modellauswahl weniger flexibel als Private LLM oder PocketPal AI.',
        ],
        updatedDate: '2026-10-23',
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
      { label: 'Vom Entwickler', anchor: 'from-the-maker' },
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
          'Loci ist eine kostenlose KI-App für iPhone, iPad, Android, Mac und Windows, die auf dem Gerät läuft, entwickelt von Loci AI, Inc.',
          'Loci wählt automatisch ein zu Ihrer Hardware passendes Modell; weitere können Sie anschließend herunterladen (Gemma, Qwen, Llama, Phi). Auf Apple-Geräten kann es zusätzlich Apples System-Foundation-Modell nutzen, sofern unterstützt.',
          'Minimaler Einrichtungsaufwand – keine GGUF-Dateien, keine Quantisierungsauswahl, einfach herunterladen und chatten. Loci wählt die beste Laufzeitumgebung (llama.cpp oder MLX) für Ihre Hardware.',
          'Datenschutzangabe: Gespräche bleiben auf dem Gerät; optionale Funktionen (Web-RAG, Sprache) benötigen Internet. Web-RAG stützt Antworten online auf Live-Quellen und fällt offline sauber auf das lokale Modell zurück.',
          'Herausragende Funktionen laut Loci AI: Loci Link (Desktop-/Handy-Kopplung für leistungsstarke Modelle), globaler Speicher über Gespräche hinweg, Thermal Management, Hintergrund-Downloads und Absturzsicherheit.',
          'Herstellerangabe vom Oktober 2026, von PromptQuorum nicht überprüft: Mac und Windows führen jetzt deutlich größere Modelle aus, und Loci funktioniert auch in Messaging-Apps.',
          'Die praktischen Tests von PromptQuorum betrafen im August 2026 die mobilen Versionen; die Desktop-Versionen, die Messaging-Integrationen und das aktuelle Modellangebot wurden nicht getestet.',
          'Weniger geeignet für Nutzer, die Live-Webwissen offline, tiefe GGUF-/Quantisierungskontrolle oder vollständig dokumentierte Sprach-Stacks benötigen.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'Was ist Loci',
        content: [
          'Loci ist ein verbraucherorientierter KI-Assistent, der auf dem Gerät läuft, für iPhone (iOS 18.0+), iPad (iPadOS 18.0+), Android, Mac und Windows. Die App von Loci AI, Inc. ist kostenlos, ohne Abonnement, ohne Werbung und ohne Kontopflicht. Der App-Store-Eintrag zeigte Version 1.3.31 als am 23. Oktober 2026 aktualisiert (der Eintrag nennt nur eine relative Zeitangabe); die [Windows-Download-Seite](https://askloci.ai/windows/) kennzeichnet die Windows-Version als Beta. Die Bedingungen des Entwicklers stehen in der [Datenschutzerklärung](https://askloci.ai/privacy/).',
          'Modell-Architektur: Loci kann „Apples eingebautes Grundmodell oder Downloads von 10+ kuratierten Open-Source-Modellen, einschließlich Gemma, Qwen, Llama und Phi — alle lokal auf Ihrem Gerät ausgeführt" verwenden. Dies bedeutet, dass die Inferenz nach der Einrichtung auf dem Gerät stattfindet, nicht in der Cloud.',
          'Datenschutz-Positionierung: Der offizielle Anspruch lautet: „Chat wird auf Ihrem Gerät verarbeitet und nicht hochgeladen. Es gibt kein Konto, keine serverseitige Kopie Ihrer Gespräche und kein Training an Ihren Worten." Die App erfasst „Identifiers", „Usage Data" und „Diagnostics" über ihr Privacy Nutrition Label, gibt aber an, dass diese Daten „nicht mit Ihrer Identität verknüpft sind".',
          'Optionale Funktionen umfassen Fotoanalyse, Sprachmodus, Kalender/Erinnerungen-Integration und Web-Suche via DuckDuckGo. Der Vorbehalt: Web-Suche und Windows-Spracheingabe erfordern eine Internetverbindung, die die „Offline"-Story bei Verwendung verändert.',
          'Messaging-Apps (Herstellerangabe): Loci AI teilte PromptQuorum im Oktober 2026 mit, dass Loci jetzt auch in iMessage, Telegram, Discord und Slack funktioniert, WhatsApp folgt in Kürze. Die [Loci-Website](https://askloci.ai) erwähnte keine Messaging-Integrationen, als PromptQuorum am 23. Oktober 2026 nachsah; PromptQuorum hat sie nicht getestet.',
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
          '**Herunterladbare Open-Source-Modelle** – Loci empfiehlt bei der Einrichtung das Modell, das am besten zu Ihrer Hardware passt, und Sie können anschließend weitere herunterladen (Gemma, Qwen, Llama, Phi). Loci AI nennt Gemma 4 E2B/E4B und Qwen3.8 in seinem aktuellen Angebot (Herstellerangabe). Modelldateien für Smartphones liegen typischerweise bei 1–5 GB. Nach dem Download läuft die Inferenz auf dem Gerät; für den Chat ist kein Internet nötig. Neue Modelle kommen laufend hinzu, sobald sie auf Smartphone-Hardware verifiziert sind.',
          '**Flexible Laufzeitumgebung** – Loci wählt für jedes Modell und Gerät die beste Inferenz-Laufzeit: llama.cpp für GGUF-Modelle und Apples MLX für optimale Leistung auf Apple Silicon. Die einfache Oberfläche verbirgt also eine ausgefeilte Abstimmung im Hintergrund – die App wählt den schnellsten Weg für dieses Modell auf Ihrer Hardware (durch Messung von Time-to-First-Token und Tokens pro Sekunde), statt Nutzer zu zwingen, Laufzeiten zu verstehen.',
          '**Desktop-Modelle (Herstellerangabe)** – Loci AI gibt an, dass Mac und Windows jetzt deutlich größere Modelle ausführen als Smartphones. Die Website verweist auf den Intelligence Index v4.3.2 von [Artificial Analysis](https://artificialanalysis.ai) (14. Oktober 2026): Qwen3.8 27B auf einem Mac erreicht 34 Punkte, vor Claude Opus 4.6 (32) und GPT-5.2 (30); beide Werte kennzeichnet Loci AI als Schätzung. PromptQuorum hat diese Zahlen nicht unabhängig überprüft, und ein Indexwert sagt nicht voraus, wie ein Modell bei Ihren eigenen Aufgaben abschneidet.',
        ],
        note:
          'Die genauen Geräte-/OS-Schwellen, ab denen Plattformen Apples Foundation-Modell unterstützen oder ein Modell heruntergeladen werden muss, sind nicht öffentlich dokumentiert. Gehen Sie davon aus, dass die Unterstützung je nach Gerät, OS-Version, App-Version, Speicher und Region variiert – erwarten Sie kein identisches Verhalten auf allen Geräten. Zuletzt geprüft anhand der Loci-Website und des App-Store-Eintrags am 2026-10-23.',
      },
      testingNotes: {
        id: 'testing-notes',
        title: 'Realtests und Praxiserfahrungen',
        content: [
          'Loci wurde auf mobilen Geräten getestet (Tests von Hans Küpper, PromptQuorum, August 2026), um die Praxistauglichkeit zu prüfen:',
        ],
        items: [
          '**Modell-Downloads funktionieren zuverlässig.** Downloads kompakter Modelle (z. B. Gemma 4 E4B, ~4 GB) wurden erfolgreich über Heim-WLAN abgeschlossen, ohne Kürzung oder Beschädigung.',
          '**Offline-Chat funktioniert wie versprochen.** Sobald ein Modell heruntergeladen ist, läuft die Inferenz ohne jegliche Internetverbindung, auch im Flugzeugmodus. Chat bleibt reaktionsschnell.',
          '**Die Modellqualität hängt von Parameterzahl und App-Abstimmung ab.** Im Test im August beherrschten die Basismodelle mit 3B–4B Parametern Entwürfe, Brainstorming und Zusammenfassungen gut, taten sich aber mit differenzierten Themen und mehrstufigem Reasoning schwer – eine Grenze, die an der Parameterzahl hängt und die keine App ändern kann. Was die App beeinflussen kann, ist alles rund um das Modell: Speicherverwaltung, Kontextfenster, Reduktion von Halluzinationen und Stabilität auf Betriebssystemebene. Loci setzt ein Kontextmanagement ein (automatische Verdichtung plus Techniken zur Verlängerung des nutzbaren Kontexts), das bei identischem Modell zu weniger Halluzinationen und Abstürzen führte als bei anderen Apps. Gemma 4 E2B und E4B waren ein echter Schritt über der Modellgeneration von 2025 mit 3B–4B Parametern. Für komplexe Analysen, Live-Web-Abfragen oder folgenreiche Entscheidungen eignen sich größere Modelle besser – in der Cloud oder, laut Loci AI, auf einem Desktop.',
          '**Optionale Funktionen erfordern Konnektivität.** Web-Suche via DuckDuckGo, Modell-Downloads und App-Updates erfordern alle Internetzugang wie dokumentiert.',
          '**Nicht getestet.** Die Mac- und Windows-Versionen, die Messaging-Integrationen, die automatische Modellauswahl und das Modellangebot vom Oktober 2026 wurden nach diesem Test eingeführt oder beschrieben und von PromptQuorum nicht getestet.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
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
            'Einschränkung / Vorbehalt': 'Kleinere lokale Modelle (~3B–4B Parameter) liefern weniger leistungsfähige Ausgaben als die größten Cloud-Modelle.',
          },
          {
            'Vorteil': 'Web-Anbindung mit nahtlosem Offline-Fallback',
            'Was es in der Praxis bedeutet': 'Online kann Loci Antworten über konfigurierbares Web-RAG auf Live-Webquellen stützen. Offline fällt es sauber auf das Wissen auf dem Gerät zurück, ohne zu versagen. Das Verhalten steuern Sie in den Einstellungen.',
            'Einschränkung / Vorbehalt': 'Die Web-Anbindung benötigt bei Aktivierung Internet. Ohne Webzugang spiegeln Antworten nur das Modellwissen auf dem Gerät wider und enthalten keine aktuellen Ereignisse.',
          },
          {
            'Vorteil': 'Langer Kontext und komplexes Reasoning',
            'Was es in der Praxis bedeutet': 'Geeignet für Entwürfe, Zusammenfassungen und strukturierte Fragen und Antworten zu lokalem Inhalt.',
            'Einschränkung / Vorbehalt': 'Komplexes mehrstufiges Reasoning, Programmierung und folgenreiche Zusammenfassungen profitieren oft weiterhin von größeren Modellen, in der Cloud oder auf einem Desktop.',
          },
          {
            'Vorteil': 'Desktop-/Handy-Kopplung für größere Modelle',
            'Was es in der Praxis bedeutet': 'Koppeln Sie Ihr Smartphone mit einem Mac oder PC, um größere Modelle vom Handy aus zu nutzen: Die Inferenz läuft auf dem leistungsfähigeren Rechner, die Oberfläche bleibt mobil.',
            'Einschränkung / Vorbehalt': 'Erfordert einen Desktop bzw. ein Notebook mit ausreichend GPU/CPU und eine stabile Netzwerkverbindung zwischen den Geräten.',
          },
          {
            'Vorteil': 'App-Stabilität und Absturzsicherheit',
            'Was es in der Praxis bedeutet': 'Loci AI gibt an, dass sein Umgang mit dem Betriebssystemspeicher zu weniger Abstürzen als bei anderen lokalen LLM-Apps und zu besserer Sitzungskontinuität führt (Herstellerangabe, kein kontrollierter Vergleich).',
            'Einschränkung / Vorbehalt': 'Der Umgang mit dem Speicher ist app-spezifisch; die Ergebnisse variieren je nach Gerät, Modellgröße und gleichzeitiger App-Last.',
          },
          {
            'Vorteil': 'Globaler Speicher über Gespräche hinweg',
            'Was es in der Praxis bedeutet': 'Loci merkt sich Dinge über Sie über Gespräche und Modellwechsel hinweg. Wechseln Sie von Gemma zu Qwen, behält die App Ihre Vorlieben und Ihren Verlauf – alles auf dem Gerät gespeichert.',
            'Einschränkung / Vorbehalt': 'Der globale Speicher bleibt lokal auf Ihrem Gerät und wird nicht zwischen Geräten synchronisiert.',
          },
          {
            'Vorteil': 'Thermal Management',
            'Was es in der Praxis bedeutet': 'Laut Loci AI überwacht Loci die Gerätetemperatur und passt Laufzeitparameter an, um Ihr Smartphone stabil zu halten, statt die Inferenz so weit zu treiben, dass das Handy drosselt oder die App abstürzt. Mehrere Temperaturmodi erlauben es, bei langen Sitzungen bewusst kühler zu arbeiten.',
            'Einschränkung / Vorbehalt': 'Das Thermal Management tauscht etwas Geschwindigkeit gegen Stabilität; verschiedene Geräte haben unterschiedliche thermische Profile.',
          },
          {
            'Vorteil': 'Modell-Downloads im Hintergrund',
            'Was es in der Praxis bedeutet': 'Modell-Downloads laufen in Hintergrundsitzungen, überstehen das Schließen der App und werden dort fortgesetzt, wo sie aufgehört haben. Die App muss beim Herunterladen einer 4-GB-Modelldatei nicht geöffnet bleiben.',
            'Einschränkung / Vorbehalt': 'Downloads benötigen weiterhin eine Internetverbindung während aktiver Download-Phasen.',
          },
          {
            'Vorteil': 'Einstellungen mit wachsender Tiefe',
            'Was es in der Praxis bedeutet': 'Der Hauptbildschirm ist für Gelegenheitsnutzer bewusst einfach gehalten; für alle, die Modellverhalten, Temperatur, Kontextlänge und Temperaturmodi anpassen möchten, gibt es Einstellungen.',
            'Einschränkung / Vorbehalt': 'Erweiterte Einstellungen sind standardmäßig ausgeblendet; um alle Möglichkeiten zu entdecken, muss man sie erkunden.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Loci auf jeder Plattform',
        columns: ['Plattform', 'Was zu erwarten ist', 'Wichtige Notiz'],
        rows: [
          {
            'Plattform': 'iPhone',
            'Was zu erwarten ist': 'Loci funktioniert auf iOS 18,0+. Kann Apples auf dem Gerät integriertes Grundmodell verwenden oder ein kompaktes Open-Source-Modell herunterladen (Gemma 4 E4B, Llama 3,2 3B, ~2–4 GB). Chat, Fotoanalyse, Sprachmodus und Kalender-Integration verfügbar.',
            'Wichtige Notiz': 'iOS 18+ Anforderung schließt iPhone XS und älter aus. Exakte Geräte/Chip-Schwellwerte für Apple Foundation-Model-Unterstützung sind nicht öffentlich dokumentiert.',
          },
          {
            'Plattform': 'iPad',
            'Was zu erwarten ist': 'Loci funktioniert auf iPadOS 18,0+, mit denselben Modellwegen wie iPhone. Größerer Bildschirm ist besser für lange Gespräche und Dokument-Überprüfung.',
            'Wichtige Notiz': 'Größere Modelle können immer noch durch verfügbaren VRAM begrenzt sein. Apple Foundation-Model-Verfügbarkeit variiert je nach iPad-Generation; überprüfen Sie App Store auf aktuelle Kompatibilität.',
          },
          {
            'Plattform': 'Android',
            'Was zu erwarten ist': 'Verfügbar auf Google Play. Kann Open-Source-Modelle herunterladen (Gemma 4 E4B, Qwen, Llama 3,2 3B, Phi-4, ~2–5 GB). Kein integriertes Systemmodell wie Apples Foundation-Modell.',
            'Wichtige Notiz': 'Die Performance variiert stark über Android-Geräte aufgrund von Chipset-, RAM- und OS-Versions-Fragmentierung. High-End-Telefone (Snapdragon 8 Serie, 8+ GB RAM) handhaben Modelle besser.',
          },
          {
            'Plattform': 'Mac',
            'Was zu erwarten ist': 'Download über [askloci.ai](https://askloci.ai). Kann Apples Foundation-Modell auf dem Gerät nutzen, Open-Source-Modelle herunterladen oder sich mit Ollama auf demselben Mac verbinden, um eine größere Modellbibliothek zu nutzen. Nützlich für längere Sessions, größere Bildschirme und externe Tastaturen.',
            'Wichtige Notiz': 'Mac-spezifische Apple Foundation-Model-Unterstützung ist nicht dokumentiert. M-Serie Macs (M1/M2/M3+) wahrscheinlich unterstützt; ältere Intel Macs benötigen möglicherweise Modell-Download. Überprüfen Sie App Store auf aktuelle Kompatibilität.',
          },
          {
            'Plattform': 'Windows',
            'Was zu erwarten ist': 'Download über [askloci.ai](https://askloci.ai/windows/); die Seite kennzeichnet die Version als Beta und bietet x64- und ARM64-Installer an. Kann Open-Source-Modelle herunterladen (gleiche Familien wie Android: Gemma, Qwen, Llama, Phi). Spracheingabe erfordert Internetverbindung (anders als andere Plattformen).',
            'Wichtige Notiz': 'Windows-Unterstützung ist am wenigsten dokumentiert der fünf Plattformen. Performance hängt von GPU/CPU ab; erfordert ausreichend Festplattenspeicher für Modell-Speicherung (~2–5 GB).',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
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
          '**Nutzer, der größere Modelle vom Smartphone aus nutzen möchte.** Mit Loci Link koppeln Sie Ihr Smartphone laut Loci AI mit einem Mac oder PC, um größere Modelle über die mobile Oberfläche auszuführen, wobei der Datenverkehr zwischen Ihren eigenen Geräten bleibt. Voraussetzung sind ein leistungsfähiger Desktop und eine stabile Verbindung zwischen den Geräten.',
          '**Nutzer, die Wert auf dauerhaftes Gedächtnis über Gespräche hinweg legen.** Loci merkt sich Dinge über Sie über verschiedene Gespräche hinweg und auch beim Wechsel zwischen Modellen. Der gesamte Speicher bleibt auf Ihrem Gerät.',
          '**Nutzer mit langen Sitzungen auf einem Smartphone, das zum Überhitzen neigt.** Laut Loci AI passt das Thermal Management von Loci Laufzeitparameter an, um Ihr Smartphone bei langen Sitzungen stabil zu halten, statt das Gerät drosseln oder die App abstürzen zu lassen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen ist Loci nicht geeignet',
        items: [
          '**Nutzer, der Spitzen-Reasoning auf dem Smartphone oder Live-Web-Anbindung erwartet.** Modelle in Smartphone-Größe stoßen an eine Parameter-Grenze, die die größten Cloud-Modelle übertreffen – auch mit Locis Kontextmanagement. Loci AI gibt an, Mac und Windows führten jetzt deutlich größere Modelle aus (Herstellerangabe, von PromptQuorum nicht getestet); prüfen Sie diese Aussage bei folgenreichen Analysen, komplexem mehrstufigem Reasoning, Code-Generierung oder Live-Web-Anbindung zuerst an Ihren eigenen Aufgaben. Loci glänzt bei Assistenzaufgaben, Entwürfen und Reasoning innerhalb seines Einsatzbereichs.',
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
            a: 'Für bestimmte Aufgaben ja – Entwürfe, Brainstorming, Zusammenfassen lokaler Dokumente, einfache Fragen und Antworten. Für komplexes Reasoning, Code-Generierung, Live-Web-Abfragen oder folgenreiche Entscheidungen sind Cloud-Modelle (ChatGPT, Claude) leistungsfähiger als lokale Modelle in Smartphone-Größe. Loci AI gibt an, auf einem Mac laufe jetzt ein Modell, das in einem unabhängigen Benchmark über einigen Cloud-Modellen liegt; PromptQuorum hat das nicht getestet. Loci ist am besten als offlinefähige lokale Alternative zum Cloud-Chat aus Datenschutz- und Verbindungsgründen zu sehen, nicht als universeller Ersatz.',
          },
          {
            q: 'Wie viel Speicher verwendet Loci?',
            a: 'Die App selbst ist klein (~100 MB). Modell-Dateien hängen davon ab, welche Sie wählen: kompakte Modelle (Phi-4 Mini, Gemma 4 E2B, SmolLM) sind 1–3 GB; größere Modelle (Llama 3,2 3B, Gemma 4 E4B, Qwen3) sind 2–5 GB. Wenn Sie mehrere Modelle heruntergeladen haben, kann die Gesamtnutzung 10+ GB erreichen. Planen Sie entsprechend auf Geräten mit begrenztem Speicher.',
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
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'Vom Entwickler',
        content: [
          'Michael Waldman, Gründer und CEO von Loci AI, Inc., hat PromptQuorum im Oktober 2026 die folgende Stellungnahme für diesen Test übermittelt. Sie wird als Originalton des Herstellers wiedergegeben und zur besseren Lesbarkeit in Absätze unterteilt, nicht als unabhängige redaktionelle Einschätzung von PromptQuorum; PromptQuorum hat die darin enthaltenen Aussagen nicht überprüft (aus dem Englischen übersetzt):',
          '„Wir haben Loci entwickelt, weil wir glauben, dass leistungsfähige KI ein öffentliches Gut sein sollte und kein Abonnement, das jedes Wort an ein Rechenzentrum schickt. Die größte Überraschung des letzten Jahres ist, wie weit offene Modelle gekommen sind. Auf einem Mac führt Loci jetzt Modelle aus, die in unabhängigen Benchmarks über führenden Cloud-Modellen liegen – kostenlos und vollständig offline.',
          'Der größte Teil unserer Arbeit geht darein, dass sich das mühelos anfühlt: das richtige Modell für Ihre Hardware zu wählen, lange Sitzungen stabil zu halten und Ihr Smartphone die Leistung Ihres Desktops nutzen zu lassen. Besonders freuen wir uns über unser Universal Harness, das darauf ausgerichtet ist, die Leistung kleinerer Modelle zu steigern. Am wichtigsten: Loci arbeitet an einer eigenen Inferenz-Engine, die uns die volle Kontrolle über die lokale Ausführung gibt und die Grenzen lokaler KI weiter verschieben wird.“',
        ],
        note: '— Michael Waldman, Gründer und CEO, Loci AI, Inc.',
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Loci ist am überzeugendsten, wenn Ihre Priorität reibungslose, lokale KI statt maximaler Modellkontrolle ist. Mehrere Funktionen stechen hervor: automatische Modellauswahl für Ihre Hardware; Loci Link (Desktop-/Handy-Kopplung, um leistungsstarke Modelle über einen verbundenen Mac oder PC vom Handy aus zu nutzen); globaler Speicher über Gespräche und Modellwechsel hinweg; Thermal Management für lange Sitzungen; und App-Stabilität, die Loci AI seinem OS-Memory-Handling zuschreibt. Der mobile Test von PromptQuorum im August bestätigte, dass Downloads zuverlässig funktionieren, der Offline-Chat wie versprochen arbeitet und die App nach Erfahrung des Testers weniger abstürzte als konkurrierende lokale LLM-Apps. Auch die Web-RAG-Umsetzung ist besonders: online stützen sich Antworten auf Live-Quellen, offline fällt sie auf das lokale Wissen zurück – und Sie steuern das Verhalten in den Einstellungen. Für Nutzer, die privaten Offline-Chat ohne technische Modellverwaltung wollen, überzeugt Loci. Wer fortgeschrittene Modellkontrolle und Quantisierungsflexibilität sucht, findet bei Private LLM (Apple) und PocketPal AI mehr Tiefe; Android-Nutzer, die experimentelle Optionen auf dem Gerät erkunden, finden in Google AI Edge Gallery zusätzliche Modelle. Was sich seit August geändert hat, stammt vom Hersteller und wurde hier nicht getestet: der Desktop als vollwertige Plattform mit größeren Modellen, Messaging-Integrationen und eine Benchmark-Angabe für Qwen3.8 27B auf einem Mac. Das ehrliche Fazit: Loci überzeugt bei Einfachheit, Stabilität und plattformübergreifender Konsistenz auf dem Smartphone; ob die Desktop-Angaben bei Ihrer Arbeitslast halten, müssen Sie selbst prüfen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Offizielle Loci-Website](https://askloci.ai) – Produktübersicht, Plattform-Downloads, FAQ zur Modellauswahl und die oben genannte Benchmark-Angabe (abgerufen am 23. Oktober 2026).',
          '[Loci-Download-Seite für Windows](https://askloci.ai/windows/) – Beta-Kennzeichnung, x64- und ARM64-Versionen.',
          '[Loci-Datenschutzerklärung](https://askloci.ai/privacy/) – die Datenschutzbedingungen des Entwicklers.',
          '[Loci im App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) – iOS-Verfügbarkeit, Version 1.3.31, Datenschutz-Nährwertkennzeichnung, Mindest-OS-Anforderungen.',
          '[Loci bei Google Play](https://play.google.com/store/apps/details?id=app.lociai.loci) – Android-Verfügbarkeit.',
          '[Artificial Analysis](https://artificialanalysis.ai) – Herausgeber des Intelligence Index, den Loci AI zitiert; PromptQuorum hat die Werte nicht unabhängig überprüft.',
          '[Google AI Edge Gallery auf GitHub](https://github.com/google-ai-edge/gallery) – Funktionsliste, unterstützte Modelle, plattformübergreifende Verfügbarkeit.',
          '[Ankündigungs-Blogbeitrag zu Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) – Ankündigung vom 9. September 2025 zu Audio-Unterstützung und Verfügbarkeit bei Google Play.',
          '[Offizielle Private-LLM-Website](https://privatellm.app/en) – Preise, Datenschutzangaben, Shortcuts-Integration, Plattform-Unterstützung.',
          '[Private-LLM-Modellbibliothek](https://privatellm.app/models) – verfügbare Modelle und Quantisierungsformate.',
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
          '[Lokale LLM-Softwareverzeichnis 2026](/de/directory) — umfassendes App- und Tool-Verzeichnis für alle Plattformen.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
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
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visitar el sitio oficial de Loci AI →', url: 'https://askloci.ai', productName: 'Loci', productCategory: 'software' },
    ],
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
      '**Loci es más atractivo si tu prioridad es una IA en el dispositivo con poca fricción en lugar de gestionar modelos a mano.** Funciona en iPhone, iPad, Android, Mac y Windows, elige automáticamente un modelo adecuado para tu hardware y te deja descargar otros después. Loci AI describe Gemma 4 E2B/E4B como el mejor razonamiento disponible en un teléfono y afirma que el escritorio es ahora una plataforma de primera clase, con modelos mucho más grandes en Mac y Windows (declaración del creador, consulta «La voz del creador»). Los usuarios avanzados también pueden vincular su teléfono a un Mac o PC (Loci Link) para ejecutar esos modelos desde el móvil. Quienes quieran elegir cuantizaciones, importar modelos o usar bibliotecas más grandes deberían comparar con alternativas más técnicas como Private LLM o PocketPal AI.',
    quickAnswerTop: {
      es: {
        question: '¿Debería usar Loci para IA privada sin conexión?',
        answer:
          'Usa Loci si quieres chat privado en el dispositivo sin fricción de gestión de modelos, en iPhone, Android, iPad, Mac o Windows. Descártalo si necesitas conocimiento web en vivo sin conexión o un control profundo sobre la selección de modelos y la cuantización: la IA en la nube o apps de IA local más técnicas como Private LLM lo cubren mejor.',
        bullets: [
          'Gratis, sin suscripción, funciona en 5 plataformas (iPhone/iPad/Android/Mac/Windows).',
          'Capaz de funcionar sin conexión después de descargar la aplicación y el modelo.',
          'Sin cuenta, sin seguimiento, las conversaciones permanecen en el dispositivo según los desarrolladores.',
          'Las funciones opcionales (búsqueda web a través de DuckDuckGo, entrada de voz en Windows) requieren internet.',
          'La calidad y selección de modelos es menos flexible que Private LLM o PocketPal AI.',
        ],
        updatedDate: '2026-10-23',
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
      { label: 'La voz del creador', anchor: 'from-the-maker' },
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
          'Loci es una app de IA gratuita que funciona en el dispositivo para iPhone, iPad, Android, Mac y Windows, creada por Loci AI, Inc.',
          'Loci elige automáticamente un modelo adecuado para tu hardware y puedes descargar otros después (Gemma, Qwen, Llama, Phi). En dispositivos Apple también puede usar el modelo fundacional del sistema de Apple donde esté disponible.',
          'Configuración mínima: sin archivos GGUF ni elección de cuantización, solo descarga y chatea. Loci selecciona el mejor entorno de ejecución (llama.cpp o MLX) para tu hardware.',
          'Declaración de privacidad: las conversaciones permanecen en el dispositivo; las funciones opcionales (RAG web, voz) requieren internet. El RAG web fundamenta las respuestas en fuentes en vivo cuando hay conexión y vuelve limpiamente al modelo local sin conexión.',
          'Funciones destacadas según Loci AI: Loci Link (vinculación escritorio/teléfono para modelos potentes), memoria global entre conversaciones, gestión térmica, descargas en segundo plano y resistencia a cierres inesperados.',
          'Declarado por el creador en octubre de 2026 y no verificado por PromptQuorum: Mac y Windows ejecutan ahora modelos mucho más grandes, y Loci también funciona dentro de apps de mensajería.',
          'Las pruebas prácticas de PromptQuorum cubrieron el móvil en agosto de 2026; las versiones de escritorio, las integraciones de mensajería y la gama de modelos actual no se probaron.',
          'No es lo ideal para quienes necesitan conocimiento web en vivo sin conexión, control profundo de GGUF/cuantización o pilas de voz totalmente documentadas.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'Qué es Loci',
        content: [
          'Loci es un asistente de IA orientado al consumidor que funciona en el dispositivo y está disponible en iPhone (iOS 18.0+), iPad (iPadOS 18.0+), Android, Mac y Windows. Creada por Loci AI, Inc., la app es gratuita, sin suscripción, sin anuncios y sin necesidad de cuenta. La ficha de la App Store mostraba la versión 1.3.31 como actualizada el 23 de octubre de 2026 (la ficha solo indica un tiempo relativo); la [página de descarga de Windows](https://askloci.ai/windows/) marca la versión de Windows como beta. Las condiciones del desarrollador están en su [política de privacidad](https://askloci.ai/privacy/).',
          'Arquitectura del modelo: Loci puede usar "el modelo de fundación integrado de Apple o descargar de 10+ modelos de código abierto curados, incluyendo Gemma, Qwen, Llama y Phi — todos ejecutándose localmente en tu dispositivo." Esto significa que la inferencia ocurre en el dispositivo después de la configuración, no en la nube.',
          'Posicionamiento de privacidad: la afirmación oficial es "El chat se procesa en tu dispositivo y no se carga. No hay cuenta, no hay copia en el servidor de tus conversaciones, y no se entrena con tus palabras." La aplicación recopila "Identificadores," "Datos de uso" y "Diagnósticos" a través de su etiqueta de nutrición de privacidad, pero afirma que estos datos no están "vinculados a tu identidad."',
          'Las funciones opcionales incluyen análisis de fotos, modo de voz, integración de calendario/recordatorios y búsqueda web a través de DuckDuckGo. La advertencia: la búsqueda web y la entrada de voz en Windows requieren conexión a internet, lo que cambia la historia de "sin conexión" si se usan.',
          'Apps de mensajería (declaración del creador): Loci AI comunicó a PromptQuorum en octubre de 2026 que Loci ahora también funciona dentro de iMessage, Telegram, Discord y Slack, y que WhatsApp llegará pronto. El [sitio web de Loci](https://askloci.ai) no mencionaba integraciones de mensajería cuando PromptQuorum lo revisó el 23 de octubre de 2026, y PromptQuorum no las ha probado.',
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
          '**Modelos de código abierto descargables**: Loci recomienda el modelo que mejor se ajusta a tu hardware cuando lo configuras por primera vez, y puedes descargar otros después (Gemma, Qwen, Llama, Phi). Loci AI incluye Gemma 4 E2B/E4B y Qwen3.8 en su gama actual (declaración del creador). Los archivos de modelos del tamaño de un teléfono suelen ocupar entre 1 y 5 GB. Tras la descarga, la inferencia se ejecuta en el dispositivo; no hace falta internet para chatear. Llegan modelos nuevos de forma continua, una vez verificados en hardware de teléfono.',
          '**Flexibilidad de entorno de ejecución**: Loci elige el mejor entorno de inferencia para cada modelo y dispositivo: llama.cpp para modelos GGUF y MLX de Apple para un rendimiento óptimo en Apple silicon. Es decir, la interfaz sencilla oculta un ajuste sofisticado: la app elige el camino más rápido para ese modelo en tu hardware (midiendo el tiempo hasta el primer token y los tokens por segundo), en lugar de obligar al usuario a entender los entornos de ejecución.',
          '**Modelos de escritorio (declaración del creador)**: Loci AI afirma que Mac y Windows ejecutan ahora modelos mucho más grandes que los teléfonos. Su sitio web cita el Intelligence Index v4.3.2 de [Artificial Analysis](https://artificialanalysis.ai) (14 de octubre de 2026): Qwen3.8 27B en un Mac obtiene 34, por delante de Claude Opus 4.6 (32) y GPT-5.2 (30), valores que Loci AI marca como estimados. PromptQuorum no ha verificado estas cifras de forma independiente, y la puntuación de un índice no predice cómo rendirá un modelo en tus propias tareas.',
        ],
        note:
          'Los umbrales exactos de dispositivo/SO que determinan qué plataformas reciben el modelo fundacional de Apple y cuáles deben descargar un modelo no están documentados públicamente. Asume que la compatibilidad varía según el dispositivo, la versión del SO, la versión de la app, el almacenamiento y la región; no esperes un comportamiento idéntico en todos tus dispositivos. Última verificación con el sitio web de Loci y la ficha de la App Store el 2026-10-23.',
      },
      testingNotes: {
        id: 'testing-notes',
        title: 'Notas de pruebas reales',
        content: [
          'Loci se probó en dispositivos móviles (pruebas de Hans Küpper, PromptQuorum, agosto de 2026) para validar su uso real:',
        ],
        items: [
          '**Las descargas de modelos funcionan de manera confiable.** Las descargas de modelos compactos (ej. Gemma 4 E4B, ~4 GB) se completaron exitosamente en WiFi doméstico sin truncación o corrupción observada.',
          '**El chat sin conexión funciona como se anuncia.** Una vez que un modelo se descarga, la inferencia se ejecuta sin ninguna conexión a internet, incluso en modo de avión. El chat permanece receptivo.',
          '**La calidad del modelo depende tanto del número de parámetros como del ajuste de la app.** En la prueba de agosto, los modelos base de 3B–4B destacaron en borradores, lluvia de ideas y resúmenes, pero tuvieron dificultades con temas matizados y razonamiento de varios pasos: un techo propio del número de parámetros que ninguna app puede cambiar. Lo que sí puede cambiar la app es todo lo que rodea al modelo: gestión de memoria, ventana de contexto, reducción de alucinaciones y estabilidad a nivel de sistema. Loci aplica una gestión del contexto (compactación automática más técnicas para ampliar el contexto útil), que produjo menos alucinaciones y cierres inesperados que otras apps con el mismo modelo. Gemma 4 E2B y E4B supusieron un salto real respecto a la generación de 2025 de modelos de 3B–4B. Para análisis complejos, consultas web en vivo o decisiones de alto riesgo, los modelos más grandes —en la nube o, según Loci AI, en un escritorio— son más adecuados.',
          '**Las funciones opcionales requieren conectividad.** La búsqueda web a través de DuckDuckGo, descargas de modelos y actualizaciones de aplicaciones requieren acceso a internet como se documenta.',
          '**No probado.** Las versiones de Mac y Windows, las integraciones de mensajería, la selección automática de modelos y la gama de modelos de octubre de 2026 se introdujeron o describieron después de esta prueba y PromptQuorum no las ha probado.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
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
            'Limitación / salvedad': 'Los modelos locales más pequeños (~3B–4B parámetros) producen resultados menos capaces que los modelos más grandes de la nube.',
          },
          {
            'Beneficio': 'Conexión web con respaldo fluido sin conexión',
            'Qué significa en uso real': 'Con conexión, Loci puede basar las respuestas en fuentes web en vivo mediante un RAG web configurable. Sin conexión, vuelve limpiamente al conocimiento del dispositivo sin fallar. Tú controlas ese comportamiento en los ajustes.',
            'Limitación / salvedad': 'La conexión web requiere internet cuando está activada. Sin acceso web, las respuestas reflejan solo el conocimiento del modelo en el dispositivo y no incluyen acontecimientos actuales.',
          },
          {
            'Beneficio': 'Contexto largo y razonamiento complejo',
            'Qué significa en uso real': 'Adecuado para redactar, resumir y preguntas estructuradas sobre contenido local.',
            'Limitación / salvedad': 'El razonamiento complejo de varios pasos, la programación y los resúmenes de alto riesgo suelen beneficiarse aún de modelos más grandes, en la nube o en un escritorio.',
          },
          {
            'Beneficio': 'Vinculación escritorio/teléfono para modelos más grandes',
            'Qué significa en uso real': 'Vincula tu teléfono a un Mac o PC para ejecutar modelos más grandes desde el móvil: la inferencia se delega en una máquina más capaz y la interfaz sigue en el móvil.',
            'Limitación / salvedad': 'Requiere un escritorio o portátil con GPU/CPU suficientes y una conexión de red estable entre los dispositivos.',
          },
          {
            'Beneficio': 'Estabilidad de la app y resistencia a cierres inesperados',
            'Qué significa en uso real': 'Loci AI afirma que su gestión de la memoria del SO provoca menos cierres inesperados que otras apps de IA local y mejor continuidad de sesión (declaración del creador, no una comparación controlada).',
            'Limitación / salvedad': 'La gestión de memoria es propia de cada app; los resultados varían según el dispositivo, el tamaño del modelo y la carga de otras apps.',
          },
          {
            'Beneficio': 'Memoria global entre conversaciones',
            'Qué significa en uso real': 'Loci recuerda cosas sobre ti entre conversaciones y cambios de modelo. Cambia de Gemma a Qwen y la app conserva tus preferencias y tu historial, todo almacenado en el dispositivo.',
            'Limitación / salvedad': 'La memoria global se queda en tu dispositivo; no se sincroniza entre dispositivos.',
          },
          {
            'Beneficio': 'Gestión térmica',
            'Qué significa en uso real': 'Según Loci AI, Loci vigila la temperatura del dispositivo y ajusta los parámetros de ejecución para mantener estable el teléfono, en lugar de forzar la inferencia hasta que el teléfono se ralentiza o la app se cierra. Varios modos térmicos permiten trabajar a propósito más fresco en sesiones largas.',
            'Limitación / salvedad': 'La gestión térmica sacrifica algo de velocidad a cambio de estabilidad; cada dispositivo tiene un perfil térmico distinto.',
          },
          {
            'Beneficio': 'Descargas de modelos en segundo plano',
            'Qué significa en uso real': 'Las descargas de modelos se ejecutan en sesiones en segundo plano, sobreviven al cierre de la app y se reanudan donde se quedaron. No hace falta mantener la app abierta mientras se descarga un archivo de modelo de 4 GB.',
            'Limitación / salvedad': 'Las descargas siguen necesitando conexión a internet durante los periodos de descarga activa.',
          },
          {
            'Beneficio': 'Ajustes con profundidad progresiva',
            'Qué significa en uso real': 'La pantalla principal es deliberadamente sencilla para usuarios ocasionales, pero hay ajustes para quienes quieren afinar el comportamiento del modelo, la temperatura, la longitud de contexto y los modos térmicos.',
            'Limitación / salvedad': 'Los ajustes avanzados están ocultos por defecto; hay que explorar para descubrir todas las capacidades.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'Loci en cada plataforma',
        columns: ['Plataforma', 'Qué esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'Qué esperar': 'Loci funciona en iOS 18.0+. Puede usar el modelo de fundación en el dispositivo de Apple o descargar un modelo de código abierto compacto (Gemma 4 E4B, Llama 3.2 3B, ~2–4 GB). Chat, análisis de fotos, modo de voz e integración de calendario disponibles.',
            'Nota importante': 'El requisito de iOS 18+ excluye iPhone XS y anteriores. Los umbrales exactos de dispositivo/chip para compatibilidad con modelo de fundación Apple no están documentados públicamente.',
          },
          {
            'Plataforma': 'iPad',
            'Qué esperar': 'Loci funciona en iPadOS 18.0+, con los mismos caminos de modelos que iPhone. La pantalla más grande es mejor para conversaciones largas y revisión de documentos.',
            'Nota importante': 'Los modelos más grandes aún pueden estar limitados por VRAM disponible. La disponibilidad del modelo de fundación de Apple varía por generación de iPad; verifica la App Store para compatibilidad actual.',
          },
          {
            'Plataforma': 'Android',
            'Qué esperar': 'Disponible en Google Play. Puede descargar modelos de código abierto (Gemma 4 E4B, Qwen, Llama 3.2 3B, Phi-4, ~2–5 GB). No hay un modelo de sistema integrado equivalente al modelo fundacional de Apple.',
            'Nota importante': 'El rendimiento varía ampliamente entre dispositivos Android debido a fragmentación de chipset, RAM y versión del SO. Los teléfonos de gama alta (serie Snapdragon 8, 8+ GB RAM) manejan mejor los modelos.',
          },
          {
            'Plataforma': 'Mac',
            'Qué esperar': 'Descarga desde [askloci.ai](https://askloci.ai). Puede usar el modelo fundacional de Apple en el dispositivo, descargar modelos de código abierto o conectarse a Ollama en el mismo Mac para acceder a una biblioteca más amplia. Útil para sesiones más largas, pantallas más grandes y teclados externos.',
            'Nota importante': 'El soporte del modelo de fundación específico de Mac de Apple no está documentado. Los Macs M-series (M1/M2/M3+) probablemente sean compatibles; los Macs Intel antiguos pueden requerir descarga de modelo. Verifica la App Store para compatibilidad actual.',
          },
          {
            'Plataforma': 'Windows',
            'Qué esperar': 'Descarga desde [askloci.ai](https://askloci.ai/windows/); la página marca la versión como beta y ofrece instaladores x64 y ARM64. Puede descargar modelos de código abierto (mismas familias que Android: Gemma, Qwen, Llama, Phi). La entrada de voz requiere conexión a internet (a diferencia de otras plataformas).',
            'Nota importante': 'El soporte de Windows es el menos documentado de las cinco plataformas. El rendimiento depende de GPU/CPU; requiere suficiente espacio en disco para almacenamiento de modelos (~2–5 GB).',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
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
          '**Usuario que quiere ejecutar modelos más grandes desde su teléfono.** Según Loci AI, Loci Link permite vincular tu teléfono a un Mac o PC para ejecutar modelos más grandes desde la interfaz móvil, manteniendo el tráfico entre tus propios dispositivos. Requiere un escritorio potente y una conexión estable entre los dispositivos.',
          '**Usuario que valora la memoria persistente entre conversaciones.** Loci recuerda cosas sobre ti entre distintas conversaciones e incluso al cambiar de modelo. Toda la memoria permanece en tu dispositivo.',
          '**Usuario de sesiones largas en un teléfono que tiende a sobrecalentarse.** Según Loci AI, la gestión térmica de Loci ajusta los parámetros de ejecución para mantener estable tu teléfono durante sesiones largas, en lugar de dejar que el dispositivo se ralentice o la app se cierre.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Loci',
        items: [
          '**Usuario que espera razonamiento de frontera en un teléfono o integración web en vivo.** Los modelos del tamaño de un teléfono tienen un techo de parámetros que superan los modelos más grandes de la nube, incluso con la gestión de contexto de Loci. Loci AI afirma que Mac y Windows ejecutan ahora modelos mucho más grandes (declaración del creador, no probada por PromptQuorum); para análisis de alto riesgo, razonamiento complejo de varios pasos, generación de código o conexión web en vivo, comprueba antes esa afirmación con tus propias tareas. Loci destaca en tareas de asistente personal, borradores y razonamiento dentro de su ámbito de diseño.',
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
            a: 'Para tareas concretas, sí: borradores, lluvia de ideas, resumen de documentos locales, preguntas y respuestas sencillas. Para razonamiento complejo, generación de código, consultas web en vivo o decisiones de alto riesgo, los modelos en la nube (ChatGPT, Claude) son más capaces que los modelos locales del tamaño de un teléfono. Loci AI afirma que en un Mac ejecuta ahora modelos que superan a algunos modelos en la nube en un benchmark independiente; PromptQuorum no lo ha probado. Loci se entiende mejor como alternativa local con capacidad sin conexión al chat en la nube, por privacidad y conectividad, no como sustituto universal.',
          },
          {
            q: '¿Cuánto almacenamiento usa Loci?',
            a: 'La aplicación misma es pequeña (~100 MB). Los archivos del modelo dependen de cuál elijas: modelos compactos (Phi-4 Mini, Gemma 4 E2B, SmolLM) son 1–3 GB; modelos más grandes (Llama 3.2 3B, Gemma 4 E4B, Qwen3) son 2–5 GB. Si tienes múltiples modelos descargados, el uso total puede llegar a 10+ GB. Planifica según dispositivos con almacenamiento limitado.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: 'La voz del creador',
        content: [
          'Michael Waldman, fundador y CEO de Loci AI, Inc., envió a PromptQuorum la siguiente declaración para esta reseña en octubre de 2026. Se presenta como palabras del propio creador, divididas en párrafos para facilitar la lectura, y no como valoración editorial independiente de PromptQuorum; PromptQuorum no ha verificado las afirmaciones que contiene (traducido del inglés):',
          '«Creamos Loci porque creemos que una IA capaz debería ser un bien público, no una suscripción que envía cada palabra a un centro de datos. La mayor sorpresa del último año es lo lejos que han llegado los modelos abiertos. En un Mac, Loci ejecuta ahora modelos que puntúan por encima de los modelos de nube de vanguardia en benchmarks independientes, gratis y totalmente sin conexión.',
          'La mayor parte de nuestro trabajo consiste en que eso resulte sencillo: elegir el modelo adecuado para tu hardware, mantener estables las sesiones largas y dejar que tu teléfono use la potencia de tu escritorio. Nos entusiasma especialmente nuestro arnés universal, centrado en mejorar el rendimiento de los modelos más pequeños. Lo más importante: Loci trabaja en un motor de inferencia, que nos da control total de la ejecución local y seguirá empujando la frontera de la IA local.»',
        ],
        note: '— Michael Waldman, fundador y CEO, Loci AI, Inc.',
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Loci es más atractivo si tu prioridad es una IA en el dispositivo con poca fricción en lugar de un control máximo de los modelos. Destacan varias funciones: la selección automática de modelo para tu hardware; Loci Link (vinculación escritorio/teléfono para ejecutar modelos potentes desde tu teléfono mediante un Mac o PC conectado); la memoria global entre conversaciones y cambios de modelo; la gestión térmica para sesiones largas; y una estabilidad que Loci AI atribuye a su gestión de memoria del SO. La prueba móvil de agosto de PromptQuorum confirmó que las descargas funcionan de forma fiable, el chat sin conexión funciona como se anuncia y, según la experiencia del probador, la app se cerró de forma inesperada menos que las apps de IA local de la competencia. La implementación del RAG web también es distintiva: con conexión, las respuestas se apoyan en fuentes en vivo; sin conexión, vuelve al conocimiento local, y controlas ese comportamiento en los ajustes. Para quienes quieren chat privado sin conexión sin la fricción técnica de gestionar modelos, Loci destaca. Para quienes quieren control avanzado de modelos y flexibilidad de cuantización, Private LLM (Apple) y PocketPal AI ofrecen más profundidad; para usuarios de Android que exploran opciones experimentales en el dispositivo, Google AI Edge Gallery ofrece más descubrimiento de modelos. Lo que ha cambiado desde agosto procede del creador y no se ha probado aquí: el escritorio como plataforma de primera clase con modelos más grandes, las integraciones de mensajería y una afirmación de benchmark para Qwen3.8 27B en un Mac. La valoración honesta: Loci acierta en simplicidad, estabilidad y coherencia multiplataforma en móvil; si sus afirmaciones sobre el escritorio se sostienen con tu carga de trabajo, debes comprobarlo tú.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio oficial de Loci](https://askloci.ai): descripción del producto, descargas por plataforma, preguntas frecuentes sobre la selección de modelos y la afirmación de benchmark citada arriba (consultado el 23 de octubre de 2026).',
          '[Página de descarga de Loci para Windows](https://askloci.ai/windows/): indicación de beta, versiones x64 y ARM64.',
          '[Política de privacidad de Loci](https://askloci.ai/privacy/): las condiciones de privacidad del desarrollador.',
          '[Loci en la App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748): disponibilidad en iOS, versión 1.3.31, etiqueta de privacidad, requisitos mínimos de SO.',
          '[Loci en Google Play](https://play.google.com/store/apps/details?id=app.lociai.loci): disponibilidad en Android.',
          '[Artificial Analysis](https://artificialanalysis.ai): editor del Intelligence Index que cita Loci AI; PromptQuorum no verificó las puntuaciones de forma independiente.',
          '[Google AI Edge Gallery en GitHub](https://github.com/google-ai-edge/gallery): lista de funciones, modelos compatibles, disponibilidad multiplataforma.',
          '[Entrada del blog de anuncio de Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/): anuncio del 9 de septiembre de 2025 sobre compatibilidad con audio y disponibilidad en Google Play.',
          '[Sitio oficial de Private LLM](https://privatellm.app/en): precios, declaraciones de privacidad, integración con Atajos, plataformas compatibles.',
          '[Biblioteca de modelos de Private LLM](https://privatellm.app/models): modelos disponibles y formatos de cuantización.',
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
          '[Directorio de software de IA local 2026](/es/directory) — directorio de aplicaciones y herramientas comprensivo para todas las plataformas.',
        ],
      },
    },
  },
  fr: {
  freshness_tier: 'semi_annual',
  publishDate: '2026-08-22',
  dateModified: '2026-10-23',
  next_refresh_due: '2027-04-23',
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
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visiter le site officiel de Loci AI →', url: 'https://askloci.ai', productName: 'Loci', productCategory: 'software' },
    ],
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
    '**Loci est le plus attrayant si votre priorité est une IA sur appareil sans friction plutôt qu\'une gestion manuelle des modèles.** L\'application fonctionne sur iPhone, iPad, Android, Mac et Windows, choisit automatiquement un modèle adapté à votre matériel et vous laisse en télécharger d\'autres ensuite. Loci AI décrit Gemma 4 E2B/E4B comme le meilleur raisonnement disponible sur un téléphone et affirme que le bureau est désormais une plateforme à part entière, avec des modèles bien plus grands sur Mac et Windows (déclaration de l\'éditeur, voir « Le mot du développeur »). Les utilisateurs avancés peuvent aussi associer leur téléphone à un Mac ou un PC (Loci Link) pour exécuter ces modèles depuis le mobile. Ceux qui veulent choisir les quantifications, importer des modèles ou exploiter de plus grandes bibliothèques devraient comparer avec des alternatives plus techniques comme Private LLM ou PocketPal AI.',
  quickAnswerTop: {
    fr: {
      question: 'Dois-je utiliser Loci pour une IA privée hors ligne ?',
      answer:
        'Utilisez Loci si vous voulez du chat privé sur appareil sans friction de gestion de modèles, sur iPhone, Android, iPad, Mac ou Windows. Abandonnez-le si vous avez besoin de connaissances web en direct sans connexion, ou d\'un contrôle poussé sur le choix des modèles et la quantification — le cloud ou des applications d\'IA locale plus techniques comme Private LLM y répondent mieux.',
      bullets: [
        'Gratuit, pas d\'abonnement, fonctionne sur 5 plates-formes (iPhone/iPad/Android/Mac/Windows).',
        'Capable hors ligne après téléchargement et configuration de l\'application et du modèle.',
        'Pas de compte, pas de suivi, conversations restent sur appareil selon les affirmations du développeur.',
        'Fonctionnalités optionnelles (recherche web via DuckDuckGo, entrée vocale Windows) nécessitent une connexion Internet.',
        'Qualité et flexibilité de sélection des modèles inférieures à Private LLM ou PocketPal AI.',
      ],
      updatedDate: '2026-10-23',
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
    { label: 'Le mot du développeur', anchor: 'from-the-maker' },
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
        'Loci est une application d\'IA gratuite fonctionnant sur l\'appareil pour iPhone, iPad, Android, Mac et Windows, développée par Loci AI, Inc.',
        'Loci choisit automatiquement un modèle adapté à votre matériel, et vous pouvez en télécharger d\'autres ensuite (Gemma, Qwen, Llama, Phi). Sur les appareils Apple, elle peut aussi utiliser le modèle de fondation du système Apple lorsqu\'il est pris en charge.',
        'Installation minimale — pas de fichiers GGUF, pas de choix de quantification : téléchargez et discutez. Loci sélectionne le meilleur moteur d\'exécution (llama.cpp ou MLX) pour votre matériel.',
        'Affirmation de confidentialité : les conversations restent sur l\'appareil ; les fonctions optionnelles (RAG web, voix) nécessitent Internet. Le RAG web appuie les réponses sur des sources en direct en ligne et revient proprement au modèle local hors ligne.',
        'Points forts décrits par Loci AI : Loci Link (association bureau/téléphone pour des modèles puissants), mémoire globale entre les conversations, gestion thermique, téléchargements en arrière-plan et résistance aux plantages.',
        'Déclaré par l\'éditeur en octobre 2026 et non vérifié par PromptQuorum : Mac et Windows exécutent désormais des modèles bien plus grands, et Loci fonctionne aussi dans des applications de messagerie.',
        'Les tests pratiques de PromptQuorum ont porté sur le mobile en août 2026 ; les versions de bureau, les intégrations de messagerie et la gamme de modèles actuelle n\'ont pas été testées.',
        'Peu adapté aux utilisateurs qui ont besoin de connaissances web en direct hors ligne, d\'un contrôle poussé de GGUF/quantification ou de piles vocales entièrement documentées.',
      ],
    },
    whatIsLoci: {
      id: 'what-is-loci',
      title: 'Ce qu\'est Loci',
      content: [
        'Loci est un assistant d\'IA grand public fonctionnant sur l\'appareil, disponible sur iPhone (iOS 18.0+), iPad (iPadOS 18.0+), Android, Mac et Windows. Développée par Loci AI, Inc., l\'application est gratuite, sans abonnement, sans publicité et sans compte obligatoire. La fiche de l\'App Store indiquait la version 1.3.31 comme mise à jour le 23 octobre 2026 (la fiche ne donne qu\'une durée relative) ; la [page de téléchargement Windows](https://askloci.ai/windows/) indique que la version Windows est en bêta. Les conditions de l\'éditeur figurent dans sa [politique de confidentialité](https://askloci.ai/privacy/).',
        'Architecture des modèles : Loci peut utiliser « le modèle fondation intégré Apple ou télécharger parmi 10+ modèles open-source organisés, incluant Gemma, Qwen, Llama et Phi — tous s\'exécutant localement sur votre appareil ». Cela signifie que l\'inférence se fait sur appareil après configuration, pas dans le cloud.',
        'Positionnement en matière de confidentialité : l\'affirmation officielle est « Le chat est traité sur votre appareil et n\'est pas téléchargé. Il n\'y a pas de compte, pas de copie serveur de vos conversations, pas d\'entraînement sur vos mots. » L\'application collecte « Identifiants », « Données d\'utilisation » et « Diagnostics » via son étiquette de nutrition sur la confidentialité, mais affirme que ces données « ne sont pas liées à votre identité ».',
        'Les fonctionnalités optionnelles incluent l\'analyse de photos, le mode voix, l\'intégration calendrier/rappels et la recherche web via DuckDuckGo. Le point faible : la recherche web et l\'entrée vocale Windows nécessitent une connexion Internet, ce qui modifie l\'histoire « hors ligne » si utilisés.',
        'Applications de messagerie (déclaration de l\'éditeur) : Loci AI a indiqué à PromptQuorum en octobre 2026 que Loci fonctionne désormais aussi dans iMessage, Telegram, Discord et Slack, WhatsApp arrivant bientôt. Le [site de Loci](https://askloci.ai) ne mentionnait aucune intégration de messagerie lors de la vérification de PromptQuorum le 23 octobre 2026, et PromptQuorum ne les a pas testées.',
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
        '**Modèles open source téléchargeables** — Loci recommande, lors de la configuration, le modèle le mieux adapté à votre matériel, et vous pouvez en télécharger d\'autres ensuite (Gemma, Qwen, Llama, Phi). Loci AI cite Gemma 4 E2B/E4B et Qwen3.8 dans sa gamme actuelle (déclaration de l\'éditeur). Les fichiers de modèles de taille smartphone font en général 1 à 5 Go. Après le téléchargement, l\'inférence s\'exécute sur l\'appareil ; Internet n\'est pas nécessaire pour discuter. De nouveaux modèles arrivent en continu, une fois vérifiés sur du matériel de téléphone.',
        '**Flexibilité du moteur d\'exécution** — Loci choisit pour chaque modèle et chaque appareil le meilleur moteur d\'inférence : llama.cpp pour les modèles GGUF et MLX d\'Apple pour des performances optimales sur Apple silicon. L\'interface simple masque donc un réglage sophistiqué : l\'application retient le chemin le plus rapide pour ce modèle sur votre matériel (en mesurant le temps avant le premier jeton et le nombre de jetons par seconde), au lieu d\'obliger l\'utilisateur à comprendre les moteurs d\'exécution.',
        '**Modèles de bureau (déclaration de l\'éditeur)** — Loci AI affirme que Mac et Windows exécutent désormais des modèles bien plus grands que les téléphones. Son site cite l\'Intelligence Index v4.3.2 d\'[Artificial Analysis](https://artificialanalysis.ai) (14 octobre 2026) : Qwen3.8 27B sur un Mac obtient 34, devant Claude Opus 4.6 (32) et GPT-5.2 (30), deux valeurs que Loci AI qualifie d\'estimées. PromptQuorum n\'a pas vérifié ces chiffres de façon indépendante, et un score d\'indice ne prédit pas les performances d\'un modèle sur vos propres tâches.',
      ],
      note:
        'Les seuils exacts d\'appareil/OS déterminant quelles plateformes bénéficient du modèle de fondation Apple ou doivent télécharger un modèle ne sont pas documentés publiquement. Supposez que la prise en charge varie selon l\'appareil, la version de l\'OS, la version de l\'application, le stockage et la région — n\'attendez pas un comportement identique sur tous vos appareils. Dernière vérification auprès du site de Loci et de la fiche App Store le 2026-10-23.',
    },
    testingNotes: {
      id: 'testing-notes',
      title: 'Notes de test en conditions réelles',
      content: [
        'Loci a été testé sur des appareils mobiles (tests de Hans Küpper, PromptQuorum, août 2026) pour valider l\'usage en conditions réelles :',
      ],
      items: [
        '**Les téléchargements de modèles fonctionnent de manière fiable.** Téléchargements de modèles compacts (p. ex. Gemma 4 E4B, ~4 GB) complétés avec succès sur WiFi domestique sans troncature ni corruption observée.',
        '**Le chat hors ligne fonctionne comme annoncé.** Une fois un modèle téléchargé, l\'inférence s\'exécute sans connexion Internet, y compris en mode avion. Le chat reste réactif.',
        '**La qualité des modèles dépend à la fois du nombre de paramètres et du réglage de l\'application.** Lors du test d\'août, les modèles de base de 3B–4B réussissaient bien la rédaction de brouillons, le brainstorming et les résumés, mais peinaient sur les sujets nuancés et le raisonnement en plusieurs étapes — un plafond lié au nombre de paramètres qu\'aucune application ne peut changer. Ce que l\'application peut modifier, c\'est tout ce qui entoure le modèle : gestion de la mémoire, fenêtre de contexte, réduction des hallucinations et stabilité au niveau du système. Loci met en œuvre une gestion du contexte (compactage automatique et techniques d\'extension du contexte utile), qui a produit moins d\'hallucinations et de plantages que d\'autres applications exécutant le même modèle. Gemma 4 E2B et E4B ont marqué un véritable progrès par rapport à la génération 2025 de modèles 3B–4B. Pour les analyses complexes, les requêtes web en direct ou les décisions à enjeux élevés, des modèles plus grands — dans le cloud ou, selon Loci AI, sur un ordinateur de bureau — conviennent mieux.',
        '**Les fonctionnalités optionnelles exigent la connectivité.** Recherche web via DuckDuckGo, téléchargements de modèles et mises à jour d\'application nécessitent tous l\'accès Internet comme documenté.',
        '**Non testé.** Les versions Mac et Windows, les intégrations de messagerie, la sélection automatique de modèle et la gamme de modèles d\'octobre 2026 ont été introduites ou décrites après ce test et n\'ont pas été testées par PromptQuorum.',
      ],
    },
    tradeOffs: {
      id: 'tradeoffs',
      itemHeadings: true,
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
          'Limitation / avertissement': 'Les petits modèles locaux (~3B–4B paramètres) produisent un résultat moins performant que les plus grands modèles cloud.',
        },
        {
          'Avantage': 'Ancrage web avec repli hors ligne fluide',
          'Ce que cela signifie en pratique': 'En ligne, Loci peut appuyer ses réponses sur des sources web en direct grâce à un RAG web configurable. Hors ligne, il revient proprement aux connaissances de l\'appareil sans dysfonctionnement. Vous contrôlez ce comportement dans les paramètres.',
          'Limitation / avertissement': 'L\'ancrage web nécessite Internet lorsqu\'il est activé. Sans accès web, les réponses ne reflètent que les connaissances du modèle sur l\'appareil et n\'incluent pas l\'actualité.',
        },
        {
          'Avantage': 'Contexte long et raisonnement complexe',
          'Ce que cela signifie en pratique': 'Approprié pour rédiger, résumer et Q&R structuré sur contenu local.',
          'Limitation / avertissement': 'Le raisonnement complexe en plusieurs étapes, la programmation et les résumés à enjeux élevés profitent souvent encore de modèles plus grands, dans le cloud ou sur un ordinateur de bureau.',
        },
        {
          'Avantage': 'Association bureau/téléphone pour des modèles plus grands',
          'Ce que cela signifie en pratique': 'Associez votre téléphone à un Mac ou un PC pour exécuter des modèles plus grands depuis votre téléphone : l\'inférence est déléguée à une machine plus capable, l\'interface reste sur mobile.',
          'Limitation / avertissement': 'Nécessite un ordinateur de bureau ou portable avec un GPU/CPU suffisant et une connexion réseau stable entre les appareils.',
        },
        {
          'Avantage': 'Stabilité de l\'application et résistance aux plantages',
          'Ce que cela signifie en pratique': 'Loci AI affirme que sa gestion de la mémoire de l\'OS entraîne moins de plantages que les autres applications d\'IA locale et une meilleure continuité de session (déclaration de l\'éditeur, sans comparaison contrôlée).',
          'Limitation / avertissement': 'La gestion de la mémoire est propre à l\'application ; les résultats varient selon l\'appareil, la taille du modèle et la charge des autres applications.',
        },
        {
          'Avantage': 'Mémoire globale entre les conversations',
          'Ce que cela signifie en pratique': 'Loci retient des informations sur vous d\'une conversation à l\'autre et d\'un modèle à l\'autre. Passez de Gemma à Qwen et l\'application conserve vos préférences et votre historique — le tout stocké sur l\'appareil.',
          'Limitation / avertissement': 'La mémoire globale reste locale à votre appareil ; elle n\'est pas synchronisée entre appareils.',
        },
        {
          'Avantage': 'Gestion thermique',
          'Ce que cela signifie en pratique': 'Selon Loci AI, Loci surveille la température de l\'appareil et ajuste les paramètres d\'exécution pour garder votre téléphone stable, au lieu de pousser l\'inférence jusqu\'à ce que le téléphone bride ses performances ou que l\'application plante. Plusieurs modes thermiques permettent de fonctionner volontairement plus frais pendant les longues sessions.',
          'Limitation / avertissement': 'La gestion thermique sacrifie un peu de vitesse pour la stabilité ; chaque appareil a un profil thermique différent.',
        },
        {
          'Avantage': 'Téléchargements de modèles en arrière-plan',
          'Ce que cela signifie en pratique': 'Les téléchargements de modèles s\'exécutent en sessions d\'arrière-plan, survivent à la fermeture de l\'application et reprennent là où ils s\'étaient arrêtés. Inutile de garder l\'application ouverte pour télécharger un fichier de modèle de 4 Go.',
          'Limitation / avertissement': 'Les téléchargements nécessitent toujours une connexion Internet pendant les périodes de téléchargement actif.',
        },
        {
          'Avantage': 'Paramètres de plus en plus poussés',
          'Ce que cela signifie en pratique': 'L\'écran principal est volontairement simple pour les utilisateurs occasionnels, mais des paramètres existent pour ceux qui veulent régler le comportement du modèle, la température, la longueur de contexte et les modes thermiques.',
          'Limitation / avertissement': 'Les paramètres avancés sont masqués par défaut ; il faut explorer pour découvrir toutes les possibilités.',
        },
      ],
    },
    platforms: {
      id: 'platforms',
      itemHeadings: true,
      title: 'Loci sur chaque plateforme',
      columns: ['Plateforme', 'À quoi s\'attendre', 'Note importante'],
      rows: [
        {
          'Plateforme': 'iPhone',
          'À quoi s\'attendre': 'Loci fonctionne sur iOS 18.0+. Peut utiliser le modèle fondation sur appareil d\'Apple ou télécharger un modèle open-source compact (Gemma 4 E4B, Llama 3.2 3B, ~2–4 GB). Chat, analyse de photos, mode voix et intégration calendrier disponibles.',
          'Note importante': 'Le besoin iOS 18+ exclut iPhone XS et plus ancien. Les seuils exacts appareil/chip pour la prise en charge du modèle fondation Apple ne sont pas documentés publiquement.',
        },
        {
          'Plateforme': 'iPad',
          'À quoi s\'attendre': 'Loci fonctionne sur iPadOS 18.0+, avec les mêmes voies de modèles qu\'iPhone. Un écran plus grand est meilleur pour de longues conversations et la revue de documents.',
          'Note importante': 'Les modèles plus grands peuvent toujours être contraints par la VRAM disponible. La disponibilité du modèle fondation Apple varie par génération d\'iPad ; vérifiez l\'App Store pour la compatibilité actuelle.',
        },
        {
          'Plateforme': 'Android',
          'À quoi s\'attendre': 'Disponible sur Google Play. Peut télécharger des modèles open source (Gemma 4 E4B, Qwen, Llama 3.2 3B, Phi-4, ~2–5 Go). Pas de modèle système intégré équivalent au modèle de fondation d\'Apple.',
          'Note importante': 'La performance varie largement entre appareils Android en raison de la fragmentation chipset, RAM et version OS. Les téléphones haut de gamme (Snapdragon 8 series, 8+ GB RAM) gèrent mieux les modèles.',
        },
        {
          'Plateforme': 'Mac',
          'À quoi s\'attendre': 'Téléchargement sur [askloci.ai](https://askloci.ai). Peut utiliser le modèle de fondation d\'Apple sur l\'appareil, télécharger des modèles open source ou se connecter à Ollama sur le même Mac pour accéder à une bibliothèque plus large. Utile pour les sessions plus longues, les grands écrans et les claviers externes.',
          'Note importante': 'La prise en charge du modèle fondation spécifique à Mac est undocumentée. Les Macs M-series (M1/M2/M3+) sont probablement pris en charge ; les anciens Macs Intel peuvent nécessiter téléchargement de modèle. Vérifiez l\'App Store pour la compatibilité actuelle.',
        },
        {
          'Plateforme': 'Windows',
          'À quoi s\'attendre': 'Téléchargement sur [askloci.ai](https://askloci.ai/windows/) ; la page indique que la version est en bêta et propose des installateurs x64 et ARM64. Peut télécharger des modèles open source (mêmes familles qu\'Android : Gemma, Qwen, Llama, Phi). La saisie vocale nécessite une connexion Internet (contrairement aux autres plateformes).',
          'Note importante': 'La prise en charge Windows est la moins documentée des cinq plates-formes. La performance dépend du GPU/CPU ; exige suffisamment d\'espace disque pour le stockage de modèles (~2–5 GB).',
        },
      ],
    },
    vsAlternatives: {
      id: 'vs-alternatives',
      itemHeadings: true,
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
        '**Utilisateur qui veut exécuter des modèles plus grands depuis son téléphone.** Selon Loci AI, Loci Link permet d\'associer votre téléphone à un Mac ou un PC pour exécuter des modèles plus grands depuis l\'interface mobile, les échanges restant entre vos propres appareils. Il faut un ordinateur de bureau suffisamment puissant et une connexion stable entre les appareils.',
        '**Utilisateur qui tient à une mémoire persistante entre les conversations.** Loci retient des informations sur vous d\'une conversation à l\'autre, et même quand vous changez de modèle. Toute la mémoire reste sur votre appareil.',
        '**Utilisateur de longues sessions sur un téléphone qui chauffe facilement.** Selon Loci AI, la gestion thermique de Loci ajuste les paramètres d\'exécution pour garder votre téléphone stable pendant les longues sessions, au lieu de laisser l\'appareil brider ses performances ou l\'application planter.',
      ],
    },
    whoShouldNotUse: {
      id: 'who-should-not-use',
      title: 'Pour qui Loci n\'est pas adapté',
      items: [
        '**Utilisateur qui attend un raisonnement de pointe sur téléphone ou une intégration web en direct.** Les modèles de taille smartphone se heurtent à un plafond de paramètres que dépassent les plus grands modèles cloud, même avec la gestion du contexte de Loci. Loci AI affirme que Mac et Windows exécutent désormais des modèles bien plus grands (déclaration de l\'éditeur, non testée par PromptQuorum) ; pour l\'analyse à enjeux élevés, le raisonnement complexe en plusieurs étapes, la génération de code ou l\'ancrage web en direct, vérifiez d\'abord cette affirmation sur vos propres tâches. Loci excelle dans les tâches d\'assistant personnel, la rédaction de brouillons et le raisonnement dans son périmètre de conception.',
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
          a: 'Pour des tâches précises, oui — rédaction de brouillons, brainstorming, résumé de documents locaux, questions-réponses simples. Pour le raisonnement complexe, la génération de code, les requêtes web en direct ou les décisions à enjeux élevés, les modèles cloud (ChatGPT, Claude) sont plus performants que les modèles locaux de taille smartphone. Loci AI affirme que sur un Mac, l\'application exécute désormais des modèles qui dépassent certains modèles cloud sur un benchmark indépendant ; PromptQuorum ne l\'a pas testé. Loci se conçoit surtout comme une alternative locale utilisable hors ligne au chat cloud, pour des raisons de confidentialité et de connectivité, et non comme un remplaçant universel.',
        },
        {
          q: 'Combien d\'espace Loci utilise-t-il ?',
          a: 'L\'application elle-même est petite (~100 MB). Les fichiers modèles dépendent de celui que vous choisissez : les modèles compacts (Phi-4 Mini, Gemma 4 E2B, SmolLM) font 1–3 GB ; les plus grands modèles (Llama 3.2 3B, Gemma 4 E4B, Qwen3) font 2–5 GB. Si vous avez plusieurs modèles téléchargés, l\'utilisation totale peut atteindre 10+ GB. Prévoyez en fonction sur appareils avec stockage limité.',
        },
      ],
    },
    fromTheMaker: {
      id: 'from-the-maker',
      title: 'Le mot du développeur',
      content: [
        'Michael Waldman, fondateur et PDG de Loci AI, Inc., a transmis la déclaration suivante pour ce test en octobre 2026. Elle est présentée comme les propres mots de l\'éditeur, découpés en paragraphes pour la lisibilité, et non comme une évaluation éditoriale indépendante de PromptQuorum ; PromptQuorum n\'a pas vérifié les affirmations qu\'elle contient (traduit de l\'anglais) :',
        '« Nous avons créé Loci parce que nous pensons qu\'une IA performante devrait être un bien public, et non un abonnement qui envoie chaque mot vers un centre de données. La plus grande surprise de l\'année écoulée est la façon dont les modèles ouverts ont progressé. Sur un Mac, Loci exécute désormais des modèles qui obtiennent de meilleurs scores que les modèles cloud de pointe sur des benchmarks indépendants, gratuitement et entièrement hors ligne.',
        'L\'essentiel de notre travail consiste à rendre cela fluide : choisir le bon modèle pour votre matériel, garder les longues sessions stables et permettre à votre téléphone d\'utiliser la puissance de votre ordinateur de bureau. Nous sommes particulièrement enthousiastes à propos de notre harnais universel, qui vise à améliorer les performances des petits modèles. Surtout, Loci travaille sur un moteur d\'inférence, qui nous donne un contrôle total de l\'exécution locale et continuera de repousser les limites de l\'IA locale. »',
      ],
      note: '— Michael Waldman, fondateur et PDG, Loci AI, Inc.',
    },
    verdict: {
      id: 'verdict',
      title: 'Verdict',
      content:
        'Loci est le plus attrayant si votre priorité est une IA sur appareil sans friction plutôt qu\'un contrôle maximal des modèles. Plusieurs fonctions se distinguent : la sélection automatique du modèle pour votre matériel ; Loci Link (association bureau/téléphone pour exécuter des modèles puissants depuis votre téléphone via un Mac ou un PC connecté) ; la mémoire globale entre les conversations et les changements de modèle ; la gestion thermique pour les longues sessions ; et une stabilité que Loci AI attribue à sa gestion de la mémoire de l\'OS. Le test mobile d\'août de PromptQuorum a confirmé que les téléchargements fonctionnent de façon fiable, que le chat hors ligne fonctionne comme annoncé et que, d\'après l\'expérience du testeur, l\'application a moins planté que les applications d\'IA locale concurrentes. L\'implémentation du RAG web est aussi distinctive : en ligne, les réponses s\'appuient sur des sources en direct ; hors ligne, elle revient aux connaissances locales — et vous contrôlez ce comportement dans les paramètres. Pour ceux qui veulent un chat privé hors ligne sans friction technique de gestion de modèles, Loci excelle. Pour ceux qui veulent un contrôle avancé des modèles et de la quantification, Private LLM (Apple) et PocketPal AI offrent plus de profondeur ; pour les utilisateurs Android qui explorent des options expérimentales sur l\'appareil, Google AI Edge Gallery propose une découverte de modèles supplémentaire. Ce qui a changé depuis août vient de l\'éditeur et n\'a pas été testé ici : le bureau comme plateforme à part entière avec des modèles plus grands, les intégrations de messagerie et une affirmation de benchmark pour Qwen3.8 27B sur un Mac. Le bilan honnête : Loci réussit en simplicité, stabilité et cohérence multiplateforme sur mobile ; à vous de vérifier si ses affirmations pour le bureau tiennent sur votre charge de travail.',
    },
    sources: {
      id: 'sources',
      title: 'Sources',
      items: [
        '[Site officiel de Loci](https://askloci.ai) — présentation du produit, téléchargements par plateforme, FAQ sur le choix des modèles et l\'affirmation de benchmark citée ci-dessus (consulté le 23 octobre 2026).',
        '[Page de téléchargement Windows de Loci](https://askloci.ai/windows/) — mention bêta, versions x64 et ARM64.',
        '[Politique de confidentialité de Loci](https://askloci.ai/privacy/) — les conditions de confidentialité de l\'éditeur.',
        '[Loci sur l\'App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — disponibilité iOS, version 1.3.31, étiquette de confidentialité, versions minimales de l\'OS.',
        '[Loci sur Google Play](https://play.google.com/store/apps/details?id=app.lociai.loci) — disponibilité Android.',
        '[Artificial Analysis](https://artificialanalysis.ai) — éditeur de l\'Intelligence Index cité par Loci AI ; PromptQuorum n\'a pas vérifié les scores de façon indépendante.',
        '[Google AI Edge Gallery sur GitHub](https://github.com/google-ai-edge/gallery) — liste des fonctionnalités, modèles pris en charge, disponibilité multiplateforme.',
        '[Annonce blog Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — annonce du 9 septembre 2025 : prise en charge audio et disponibilité sur Google Play.',
        '[Site officiel de Private LLM](https://privatellm.app/en) — tarification, affirmations de confidentialité, intégration Shortcuts, plateformes prises en charge.',
        '[Bibliothèque de modèles Private LLM](https://privatellm.app/models) — modèles disponibles et formats de quantification.',
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
        '[Répertoire logiciel LLM local 2026](/fr/directory) — répertoire d\'applications et outils complet pour toutes plates-formes.',
      ],
    },
  },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
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
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Loci AI 公式サイトを見る →', url: 'https://askloci.ai', productName: 'Loci', productCategory: 'software' },
    ],
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
      '**Lociは、モデルを手動で管理するよりも、手間の少ないオンデバイスAIを重視する方に最も向いています。** iPhone、iPad、Android、Mac、Windowsで動作し、お使いのハードウェアに合ったモデルを自動で選び、あとから他のモデルをダウンロードできます。Loci AIは、Gemma 4 E2B/E4Bをスマートフォンで利用できる最も強力な推論と位置づけ、デスクトップが第一級のプラットフォームになり、MacとWindowsではるかに大きなモデルが動くと述べています(開発元の主張。「開発者から」を参照)。上級ユーザーは、スマートフォンをMacやPCとペアリング(Loci Link)して、それらのモデルをモバイルから使うこともできます。量子化の選択、モデルのインポート、より大きなモデルライブラリを求める方は、Private LLMやPocketPal AIなど、より技術的な代替アプリと比較してください。',
    quickAnswerTop: {
      ja: {
        question: 'プライベート・オフラインAIに Loci を使うべきか。',
        answer:
          'モデル管理の手間なしにプライベートなオンデバイスチャットを使いたい場合は、iPhone、Android、iPad、Mac、WindowsでLociをお使いください。接続なしでのライブWeb情報や、モデル選択・量子化の細かな制御が必要な場合は、クラウドAIやPrivate LLMのようなより技術的なローカルLLMアプリのほうが向いています。',
        bullets: [
          '無料、サブスクリプションなし、5プラットフォーム対応（iPhone/iPad/Android/Mac/Windows）。',
          'アプリとモデルダウンロード/セットアップ後はオフラインで動作可能。',
          'アカウントなし、追跡なし、開発者の主張によるとデバイス上でのチャット。',
          'オプション機能（DuckDuckGo経由のウェブ検索、Windows音声入力）はインターネット接続が必要。',
          'Private LLM や PocketPal AI よりも品質とモデル選択の柔軟性が低い。',
        ],
        updatedDate: '2026-10-23',
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
      { label: '開発者から', anchor: 'from-the-maker' },
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
          'Lociは、Loci AI, Inc.が開発した、iPhone、iPad、Android、Mac、Windows向けの無料のオンデバイスAIアプリです。',
          'Lociはお使いのハードウェアに合ったモデルを自動で選び、あとから他のモデル(Gemma、Qwen、Llama、Phi)をダウンロードできます。Apple端末では、対応していればAppleのシステム基盤モデルも利用できます。',
          'セットアップは最小限です。GGUFファイルも量子化の選択も不要で、ダウンロードしてチャットするだけです。Lociはハードウェアに最適なランタイム(llama.cppまたはMLX)を選びます。',
          'プライバシーに関する主張:会話はデバイス上に留まります。オプション機能(Web RAG、音声)にはインターネットが必要です。Web RAGはオンライン時にライブの情報源で回答を裏付け、オフライン時はローカルモデルにきれいに切り替わります。',
          'Loci AIが説明する主な特長:Loci Link(強力なモデルのためのデスクトップとスマートフォンのペアリング)、会話をまたぐグローバルメモリ、温度管理、バックグラウンドダウンロード、クラッシュへの耐性。',
          '2026年10月に開発元が述べた内容で、PromptQuorumは未検証です:MacとWindowsではるかに大きなモデルが動作し、Lociはメッセージングアプリ内でも動作します。',
          'PromptQuorumの実機テストは2026年8月のモバイルが対象で、デスクトップ版、メッセージング連携、現在のモデルラインアップはテストしていません。',
          'オフラインでのライブWeb情報、GGUF/量子化の細かな制御、十分に文書化された音声スタックが必要な方には向きません。',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'Loci の概要',
        content: [
          'Lociは、iPhone(iOS 18.0以降)、iPad(iPadOS 18.0以降)、Android、Mac、Windowsで利用できる、一般ユーザー向けのオンデバイスAIアシスタントです。Loci AI, Inc.が開発し、無料で、サブスクリプションも広告もアカウント登録も不要です。App Storeの掲載情報では、バージョン1.3.31が2026年10月23日に更新されたと表示されていました(掲載情報は相対的な時間しか示しません)。[Windowsのダウンロードページ](https://askloci.ai/windows/)では、Windows版はベータ版と表示されています。開発元の条件は[プライバシーポリシー](https://askloci.ai/privacy/)に記載されています。',
          'モデルアーキテクチャ: Loci は「Apple の組み込みファンデーションモデルまたは Gemma、Qwen、Llama、Phi を含む 10+ のキュレートされたオープンソースモデルからダウンロード可能」とします。これはセットアップ後の推論がデバイス上で発生し、クラウドではないことを意味します。',
          'プライバシー位置付け: 公式の主張は「チャットはデバイス上で処理され、アップロードされません。アカウントなし、サーバー側のチャットコピーなし、言葉でのトレーニングなし」です。アプリはプライバシー栄養ラベル経由で「識別子」「使用データ」「診断」を収集していますが、このデータは「身元にリンクされない」と述べています。',
          'オプション機能には、写真分析、音声モード、カレンダー/リマインダー統合、DuckDuckGo経由のウェブ検索が含まれます。注意事項: ウェブ検索と Windows 音声入力にはインターネット接続が必要であり、「オフライン」ストーリーを変更します。',
          'メッセージングアプリ(開発元の主張):Loci AIは2026年10月、LociがiMessage、Telegram、Discord、Slack内でも動作するようになり、WhatsAppも近日対応予定であるとPromptQuorumに伝えました。PromptQuorumが2026年10月23日に[Lociのウェブサイト](https://askloci.ai)を確認した時点では、メッセージング連携についての記載はなく、PromptQuorumはこれらをテストしていません。',
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
          '**ダウンロード可能なオープンソースモデル** — 初回セットアップ時に、Lociはハードウェアに最も合うモデルを推奨し、あとから他のモデル(Gemma、Qwen、Llama、Phi)をダウンロードできます。Loci AIは、現在のラインアップにGemma 4 E2B/E4BとQwen3.8を挙げています(開発元の主張)。スマートフォン向けのモデルファイルは通常1〜5 GBです。ダウンロード後はデバイス上で推論が実行され、チャットにインターネットは不要です。新しいモデルは、スマートフォンのハードウェアでの動作が確認され次第、随時追加されます。',
          '**ランタイムの柔軟性** — Lociは、モデルとデバイスごとに最適な推論ランタイムを選びます。GGUFモデルにはllama.cpp、Apple siliconで最高の性能を出すにはAppleのMLXです。シンプルな画面の裏には高度なチューニングがあり、ユーザーにランタイムを理解させるのではなく、お使いのハードウェアでそのモデルが最も速く動く経路を(最初のトークンまでの時間と毎秒トークン数を測定して)アプリが選びます。',
          '**デスクトップ向けモデル(開発元の主張)** — Loci AIは、MacとWindowsでスマートフォンよりはるかに大きなモデルが動作すると述べています。同社のウェブサイトは、[Artificial Analysis](https://artificialanalysis.ai)のIntelligence Index v4.3.2(2026年10月14日)を引用しており、Mac上で動作するQwen3.8 27Bは34で、Claude Opus 4.6(32)とGPT-5.2(30)を上回るとしています。後者2つはLoci AIが推定値と表記しています。PromptQuorumはこれらの数値を独自に検証しておらず、指数のスコアはご自身のタスクでのモデルの性能を予測するものではありません。',
        ],
        note:
          'どのプラットフォームでAppleの基盤モデルが使え、どこでモデルのダウンロードが必要かを分けるデバイス/OSの正確なしきい値は、公開されていません。対応状況はデバイス、OSバージョン、アプリバージョン、ストレージ、地域によって異なると考え、すべてのデバイスで同じ動作を期待しないでください。LociのウェブサイトとApp Storeの掲載情報で2026-10-23に最終確認しました。',
      },
      testingNotes: {
        id: 'testing-notes',
        title: '実世界テストノート',
        content: [
          'Lociは、実際の使い勝手を確認するため、モバイルデバイスでテストしました(Hans Küpper、PromptQuorum、2026年8月):',
        ],
        items: [
          '**モデルダウンロードは確実に動作します。** コンパクトモデル（例: Gemma 4 E4B、~4 GB）のダウンロードはホーム WiFi で正常に完了し、切断や破損は観察されませんでした。',
          '**オフラインチャットは広告通りに機能します。** モデルがダウンロードされたら、推論はインターネット接続なしで実行（飛行機モード含む）。チャットは応答性を保ちます。',
          '**モデルの品質は、パラメータ数とアプリ側のチューニングの両方に左右されます。** 8月のテストでは、3B〜4Bのベースモデルは下書き、ブレインストーミング、要約には優れていましたが、微妙なテーマや複数段階の推論は苦手でした。これはパラメータ数に由来する上限で、どのアプリも変えられません。アプリが変えられるのは、メモリ管理、コンテキストウィンドウの扱い、ハルシネーションの低減、OSレベルの安定性など、モデルを取り巻くすべてです。Lociはコンテキスト管理(自動圧縮と、実効コンテキストを広げる手法)を実装しており、同じモデルを動かす他のアプリよりハルシネーションとクラッシュが少ない結果でした。Gemma 4 E2BとE4Bは、2025年世代の3B〜4Bモデルより確かに一段上でした。複雑な分析、ライブWebクエリ、重大な判断には、より大きなモデル(クラウド、またはLoci AIによればデスクトップ)のほうが適しています。',
          '**オプション機能は接続が必要です。** DuckDuckGo経由のウェブ検索、モデルダウンロード、アプリ更新はすべてドキュメント記載通りインターネットアクセスが必要。',
          '**未テスト。** MacとWindows版、メッセージング連携、自動モデル選択、2026年10月のモデルラインアップは、このテストの後に導入または説明されたもので、PromptQuorumはテストしていません。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
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
            'デメリット/注意事項': '小型のローカルモデル(約3B〜4Bパラメータ)の出力は、最大級のクラウドモデルより劣ります。',
          },
          {
            'メリット': 'Web連携とシームレスなオフラインへの切り替え',
            '実使用での意味': 'オンライン時、Lociは設定可能なWeb RAGでライブのWeb情報源に基づいて回答できます。オフライン時は、問題なくデバイス上の知識にきれいに切り替わります。この動作は設定で制御できます。',
            'デメリット/注意事項': 'Web連携を有効にするとインターネットが必要です。Webにアクセスできない場合、回答はデバイス上のモデルの知識のみを反映し、最新の出来事は含まれません。',
          },
          {
            'メリット': '長コンテキストと複雑な推論',
            '実使用での意味': 'ローカルコンテンツでのドラフト作成、要約、構造化 Q&A に適切。',
            'デメリット/注意事項': '複数段階の複雑な推論、コーディング、重大な要約には、クラウドまたはデスクトップ上のより大きなモデルのほうが有利なことが依然として多くあります。',
          },
          {
            'メリット': 'より大きなモデル向けのデスクトップとスマートフォンのリンク',
            '実使用での意味': 'スマートフォンをMacやPCとリンクして、より大きなモデルをスマートフォンから実行できます。推論は性能の高いマシンに任せ、操作画面はモバイルのままです。',
            'デメリット/注意事項': '十分なGPU/CPUを備えたデスクトップまたはノートPCと、デバイス間の安定したネットワーク接続が必要です。',
          },
          {
            'メリット': 'アプリの安定性とクラッシュへの耐性',
            '実使用での意味': 'Loci AIは、OSメモリの扱いにより、他のローカルLLMアプリよりクラッシュが少なく、セッションの継続性が高いと述べています(開発元の主張で、統制された比較ではありません)。',
            'デメリット/注意事項': 'メモリの扱いはアプリ固有です。結果はデバイス、モデルサイズ、同時に動くアプリの負荷によって異なります。',
          },
          {
            'メリット': '会話をまたぐグローバルメモリ',
            '実使用での意味': 'Lociは、会話やモデルの切り替えをまたいであなたに関する情報を記憶します。GemmaからQwenに切り替えても、アプリは設定や履歴を保持します。すべてデバイス上に保存されます。',
            'デメリット/注意事項': 'グローバルメモリはお使いのデバイス上に留まり、デバイス間では同期されません。',
          },
          {
            'メリット': '温度管理',
            '実使用での意味': 'Loci AIによれば、Lociはデバイスの温度を監視し、スマートフォンが性能を落としたりアプリがクラッシュしたりするまで推論を押し込む代わりに、ランタイムのパラメータを調整して安定を保ちます。複数の温度モードにより、長時間のセッションで意図的に低温で動かすこともできます。',
            'デメリット/注意事項': '温度管理は安定性のために速度を一部犠牲にします。デバイスごとに発熱の特性は異なります。',
          },
          {
            'メリット': 'バックグラウンドでのモデルダウンロード',
            '実使用での意味': 'モデルのダウンロードはバックグラウンドセッションで実行され、アプリを閉じても継続し、中断した位置から再開します。4 GBのモデルファイルをダウンロードする間、アプリを開いたままにする必要はありません。',
            'デメリット/注意事項': 'ダウンロードの実行中は、引き続きインターネット接続が必要です。',
          },
          {
            'メリット': '段階的に深まる設定',
            '実使用での意味': 'メイン画面は一般ユーザー向けにあえてシンプルですが、モデルの挙動、温度、コンテキスト長、温度モードを調整したい方向けの設定が用意されています。',
            'デメリット/注意事項': '高度な設定は既定では隠れており、すべての機能を知るには探して確かめる必要があります。',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: 'プラットフォーム別Loci',
        columns: ['プラットフォーム', '期待される内容', '重要な注意事項'],
        rows: [
          {
            'プラットフォーム': 'iPhone',
            '期待される内容': 'Loci は iOS 18.0+ で動作。Apple のオンデバイスファンデーションモデルまたはコンパクトなオープンソースモデル（Gemma 4 E4B、Llama 3.2 3B、~2–4 GB）をダウンロード可能。チャット、写真分析、音声モード、カレンダー統合が利用可能。',
            '重要な注意事項': 'iOS 18+ 要件は iPhone XS 以前を除外。Apple ファンデーションモデルサポートの正確なデバイス/チップ閾値は公開されていません。',
          },
          {
            'プラットフォーム': 'iPad',
            '期待される内容': 'Loci は iPadOS 18.0+ で動作し、iPhone と同じモデルパス。より大きな画面は長いチャットとドキュメント確認に良好。',
            '重要な注意事項': 'より大規模なモデルは依然として利用可能な VRAM で制約される可能性。Apple ファンデーションモデルの利用可能性は iPad 世代によって異なる。App Store で現在の互換性を確認してください。',
          },
          {
            'プラットフォーム': 'Android',
            '期待される内容': 'Google Playで入手できます。オープンソースモデル(Gemma 4 E4B、Qwen、Llama 3.2 3B、Phi-4、約2〜5 GB)をダウンロードできます。Appleの基盤モデルに相当するシステム内蔵モデルはありません。',
            '重要な注意事項': '性能はチップセット、RAM、OS バージョンの断片化のため Android デバイス間で大きく異なります。高性能スマートフォン（Snapdragon 8 シリーズ、8+ GB RAM）がモデルを扱いやすくします。',
          },
          {
            'プラットフォーム': 'Mac',
            '期待される内容': '[askloci.ai](https://askloci.ai)からダウンロードします。Appleのオンデバイス基盤モデルの利用、オープンソースモデルのダウンロード、同じMac上のOllamaへの接続によるより幅広いモデルライブラリの利用が可能です。長時間のセッション、大きな画面、外付けキーボードで便利です。',
            '重要な注意事項': 'Mac 固有の Apple ファンデーションモデルサポートは文書化されていません。M シリーズ Mac（M1/M2/M3+）はおそらくサポート。古い Intel Mac はモデルダウンロードが必要な可能性。App Store で現在の互換性を確認してください。',
          },
          {
            'プラットフォーム': 'Windows',
            '期待される内容': '[askloci.ai](https://askloci.ai/windows/)からダウンロードします。ページにはベータ版と表示され、x64とARM64のインストーラーが提供されています。オープンソースモデル(Androidと同じ系統:Gemma、Qwen、Llama、Phi)をダウンロードできます。音声入力にはインターネット接続が必要です(他のプラットフォームとは異なります)。',
            '重要な注意事項': 'Windows サポートは 5 つのプラットフォームで最も文書化されていません。性能は GPU/CPU に依存。モデルストレージのための十分なディスク空き容量が必要（~2–5 GB）。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
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
          '**スマートフォンからより大きなモデルを実行したい方。** Loci AIによれば、Loci LinkでスマートフォンとMacやPCをペアリングし、モバイルの画面からより大きなモデルを実行でき、通信は自分のデバイス間に留まります。高性能なデスクトップと、デバイス間の安定した接続が必要です。',
          '**会話をまたぐ持続的なメモリを重視する方。** Lociは、異なる会話の間、さらにはモデルを切り替えたときでも、あなたに関する情報を記憶します。メモリはすべてお使いのデバイス上に留まります。',
          '**発熱しやすいスマートフォンで長時間セッションを行う方。** Loci AIによれば、Lociの温度管理はランタイムのパラメータを調整して、長時間のセッション中もスマートフォンを安定させ、デバイスが性能を落としたりアプリがクラッシュしたりするのを防ぎます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Loci を使うべきではないユーザー',
        items: [
          '**スマートフォンで最先端の推論やライブWeb連携を期待する方。** スマートフォンサイズのモデルには、Lociのコンテキスト管理があっても、最大級のクラウドモデルが上回るパラメータ数の上限があります。Loci AIは、MacとWindowsではるかに大きなモデルが動作すると述べています(開発元の主張で、PromptQuorumは未テスト)。重大な分析、複数段階の複雑な推論、コード生成、ライブWeb連携では、まずご自身のタスクでこの主張を確かめてください。Lociは、パーソナルアシスタント的な作業、下書き、設計の想定範囲内での推論に優れています。',
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
            a: '特定のタスクならできます。下書き、ブレインストーミング、ローカル文書の要約、簡単な質疑応答などです。複雑な推論、コード生成、ライブWebクエリ、重大な判断では、スマートフォンサイズのローカルモデルよりクラウドモデル(ChatGPT、Claude)のほうが高性能です。Loci AIは、Mac上では独立したベンチマークで一部のクラウドモデルを上回るモデルが動作すると述べていますが、PromptQuorumはこれをテストしていません。Lociは、プライバシーと接続性の理由でオフラインでも使えるクラウドチャットのローカル代替と捉えるのが適切で、万能の代替ではありません。',
          },
          {
            q: 'Loci はどの程度のストレージを使用しますか?',
            a: 'アプリ自体は小さい（~100 MB）。モデルファイルは選択するものに依存: コンパクトモデル（Phi-4 Mini、Gemma 4 E2B、SmolLM）は 1–3 GB。より大きなモデル（Llama 3.2 3B、Gemma 4 E4B、Qwen3）は 2–5 GB。複数のモデルをダウンロードすると、合計使用量は 10+ GB に達する可能性があります。ストレージが制限されたデバイスで適切に計画してください。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '開発者から',
        content: [
          'Loci AI, Inc.の創業者兼CEOであるMichael Waldman氏は、2026年10月、このレビューのために以下の声明をPromptQuorumに提供しました。開発元自身の言葉を、読みやすいように段落に分けて掲載するもので、PromptQuorumの独立した編集上の評価ではありません。PromptQuorumは、その中の主張を検証していません(英語からの翻訳):',
          '「私たちがLociを作ったのは、高性能なAIは、すべての言葉をデータセンターに送るサブスクリプションではなく、公共財であるべきだと信じているからです。この1年で最大の驚きは、オープンモデルがどれほど進歩したかです。Macでは、Lociは今や、独立したベンチマークで最先端のクラウドモデルを上回るスコアのモデルを、無料で、完全にオフラインで実行します。',
          '私たちの作業の大半は、それを無理なく感じられるようにすることに費やされています。つまり、お使いのハードウェアに合うモデルを選ぶこと、長いセッションを安定させること、そしてスマートフォンがデスクトップの性能を使えるようにすることです。特に力を入れているのが、小型モデルの性能向上に注力したユニバーサルハーネスです。そして何より、Lociは推論エンジンの開発に取り組んでいます。これによりローカル実行を完全に制御でき、ローカルAIのフロンティアを押し広げ続けます。」',
        ],
        note: '— Michael Waldman、創業者兼CEO、Loci AI, Inc.',
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Lociは、モデルを最大限に制御することよりも、手間の少ないオンデバイスAIを重視する方に最も向いています。際立つ機能は、ハードウェアに合わせた自動モデル選択、Loci Link(接続したMacやPC経由で強力なモデルをスマートフォンから実行するデスクトップとスマートフォンのリンク)、会話やモデルの切り替えをまたぐグローバルメモリ、長時間セッション向けの温度管理、そしてLoci AIがOSメモリ処理によるものとする安定性です。PromptQuorumの8月のモバイルテストでは、ダウンロードが確実に動作し、オフラインチャットが宣伝どおりに機能し、競合するローカルLLMアプリよりクラッシュが少ないことを(テスターの体感として)確認しました。Web RAGの実装も特徴的で、オンラインではライブの情報源に基づいて回答し、オフラインではローカルの知識に戻り、その動作は設定で制御できます。技術的なモデル管理の手間なしにプライベートなオフラインチャットを使いたい方には、Lociが最適です。高度なモデル制御や量子化の柔軟性を求める方には、Private LLM(Apple)とPocketPal AIのほうが奥深く、実験的なオンデバイスの選択肢を探すAndroidユーザーには、Google AI Edge Galleryがモデル探索の幅を広げます。8月以降の変更点は開発元からの情報で、ここではテストしていません。すなわち、より大きなモデルが動く第一級のプラットフォームとしてのデスクトップ、メッセージング連携、そしてMac上のQwen3.8 27Bに関するベンチマークの主張です。率直な評価:Lociはモバイルでのシンプルさ、安定性、プラットフォーム間の一貫性に成功しています。デスクトップに関する主張がご自身の作業負荷で通用するかは、ご自身でご確認ください。',
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          '[Loci公式サイト](https://askloci.ai) — 製品概要、プラットフォーム別ダウンロード、モデル選択に関するFAQ、上記のベンチマークの主張(2026年10月23日に確認)。',
          '[LociのWindowsダウンロードページ](https://askloci.ai/windows/) — ベータ表示、x64とARM64版。',
          '[Lociのプライバシーポリシー](https://askloci.ai/privacy/) — 開発元のプライバシー条件。',
          '[App StoreのLoci](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — iOSでの提供状況、バージョン1.3.31、プライバシー栄養ラベル、最低OS要件。',
          '[Google PlayのLoci](https://play.google.com/store/apps/details?id=app.lociai.loci) — Androidでの提供状況。',
          '[Artificial Analysis](https://artificialanalysis.ai) — Loci AIが引用するIntelligence Indexの発行元。PromptQuorumはスコアを独自に確認していません。',
          '[GitHubのGoogle AI Edge Gallery](https://github.com/google-ai-edge/gallery) — 機能一覧、対応モデル、クロスプラットフォームでの提供状況。',
          '[Google AI Edge Galleryの発表ブログ記事](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 2025年9月9日の音声サポートとGoogle Play提供開始の発表。',
          '[Private LLM公式サイト](https://privatellm.app/en) — 価格、プライバシーに関する主張、ショートカット連携、対応プラットフォーム。',
          '[Private LLMモデルライブラリ](https://privatellm.app/models) — 利用可能なモデルと量子化形式。',
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
          '[ローカルLLMソフトウェアディレクトリ2026](/ja/directory) — すべてのプラットフォーム向けの包括的なアプリとツールディレクトリ。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
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
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Loci AI 공식 사이트 방문 →', url: 'https://askloci.ai', productName: 'Loci', productCategory: 'software' },
    ],
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
      '**Loci는 모델을 직접 관리하기보다 번거로움 없는 온디바이스 AI를 우선하는 분께 가장 잘 맞습니다.** iPhone, iPad, Android, Mac, Windows에서 실행되며, 하드웨어에 맞는 모델을 자동으로 선택하고 이후 다른 모델을 내려받을 수 있습니다. Loci AI는 Gemma 4 E2B/E4B를 휴대폰에서 쓸 수 있는 가장 강력한 추론으로 소개하며, 데스크톱이 이제 일급 플랫폼이 되어 Mac과 Windows에서는 훨씬 큰 모델이 실행된다고 밝힙니다(제작사 주장, \'제작자로부터\' 참조). 고급 사용자는 휴대폰을 Mac이나 PC와 페어링(Loci Link)하여 해당 모델을 모바일에서 사용할 수도 있습니다. 양자화를 직접 고르거나 모델을 가져오거나 더 큰 모델 라이브러리를 쓰려는 분은 Private LLM이나 PocketPal AI 같은 더 기술적인 대안과 비교해 보시기 바랍니다.',
    quickAnswerTop: {
      ko: {
        question: '프라이빗 오프라인 AI를 위해 Loci를 사용해야 할까요?',
        answer:
          '모델 관리의 번거로움 없이 비공개 온디바이스 채팅을 원하신다면 iPhone, Android, iPad, Mac, Windows에서 Loci를 사용하십시오. 연결 없이 실시간 웹 지식이 필요하거나 모델 선택과 양자화를 세밀하게 제어해야 한다면 클라우드 AI나 Private LLM 같은 더 기술적인 로컬 LLM 앱이 더 적합합니다.',
        bullets: [
          '무료, 구독 없음, 5개 플랫폼(iPhone/iPad/Android/Mac/Windows)에서 작동합니다.',
          '앱과 모델 다운로드/설정 후 오프라인 가능합니다.',
          '계정 없음, 추적 없음, 개발자 주장에 따르면 대화는 디바이스에 남습니다.',
          '선택적 기능(DuckDuckGo 웹 검색, Windows 음성 입력)은 인터넷이 필요합니다.',
          'Private LLM 또는 PocketPal AI보다 품질 및 모델 선택이 유연하지 않습니다.',
        ],
        updatedDate: '2026-10-23',
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
      { label: '제작자로부터', anchor: 'from-the-maker' },
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
          'Loci는 Loci AI, Inc.가 만든 iPhone, iPad, Android, Mac, Windows용 무료 온디바이스 AI 앱입니다.',
          'Loci는 하드웨어에 맞는 모델을 자동으로 선택하며, 이후 다른 모델(Gemma, Qwen, Llama, Phi)을 내려받을 수 있습니다. Apple 기기에서는 지원되는 경우 Apple의 시스템 파운데이션 모델도 사용할 수 있습니다.',
          '설정이 최소화되어 있습니다. GGUF 파일도 양자화 선택도 필요 없이 내려받아 채팅하면 됩니다. Loci는 하드웨어에 가장 적합한 런타임(llama.cpp 또는 MLX)을 선택합니다.',
          '개인정보 보호 주장: 대화는 기기에 남아 있으며, 선택 기능(웹 RAG, 음성)은 인터넷이 필요합니다. 웹 RAG는 온라인일 때 실시간 출처로 답변의 근거를 제시하고, 오프라인일 때는 온디바이스 모델로 매끄럽게 전환됩니다.',
          'Loci AI가 설명하는 주요 기능: Loci Link(강력한 모델을 위한 데스크톱/휴대폰 페어링), 대화 전반의 글로벌 메모리, 발열 관리, 백그라운드 다운로드, 비정상 종료 방지.',
          '2026년 10월 제작사가 밝힌 내용으로 PromptQuorum이 검증하지 않았습니다: Mac과 Windows에서 이제 훨씬 큰 모델이 실행되며, Loci는 메시징 앱 안에서도 작동합니다.',
          'PromptQuorum의 실사용 테스트는 2026년 8월 모바일을 대상으로 했으며, 데스크톱 버전, 메시징 연동, 현재 모델 라인업은 테스트하지 않았습니다.',
          '오프라인 실시간 웹 지식, 세밀한 GGUF/양자화 제어, 충분히 문서화된 음성 스택이 필요한 분께는 적합하지 않습니다.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'Loci란',
        content: [
          'Loci는 iPhone(iOS 18.0 이상), iPad(iPadOS 18.0 이상), Android, Mac, Windows에서 사용할 수 있는 일반 사용자용 온디바이스 AI 어시스턴트입니다. Loci AI, Inc.가 만들었으며 무료이고 구독, 광고, 계정이 필요 없습니다. App Store 목록에는 버전 1.3.31이 2026년 10월 23일에 업데이트된 것으로 표시되었습니다(목록은 상대적 시간만 제공합니다). [Windows 다운로드 페이지](https://askloci.ai/windows/)는 Windows 버전을 베타로 표시합니다. 개발사의 약관은 [개인정보 처리방침](https://askloci.ai/privacy/)에 있습니다.',
          '모델 아키텍처: Loci는 "Apple의 기본 제공 기반 모델을 사용하거나 Gemma, Qwen, Llama, Phi를 포함한 10개 이상의 큐레이션된 오픈소스 모델에서 다운로드할 수 있습니다. 모두 디바이스에서 로컬로 실행됩니다." 이는 설정 후 추론이 클라우드가 아닌 온디바이스에서 발생함을 의미합니다.',
          '프라이버시 위치 지정: 공식 주장은 "채팅이 디바이스에서 처리되며 업로드되지 않습니다. 계정이 없고, 대화의 서버 측 사본이 없으며, 당신의 말로 학습하지 않습니다." 앱은 프라이버시 영양 레이블을 통해 "식별자", "사용 데이터", "진단"을 수집하지만 이 데이터가 "당신의 신원과 연결되지 않는다"고 명시합니다.',
          '선택적 기능은 사진 분석, 음성 모드, 캘린더/알림 통합, DuckDuckGo를 통한 웹 검색을 포함합니다. 주의: 웹 검색 및 Windows 음성 입력은 인터넷 연결이 필요하며, 사용하는 경우 "오프라인" 스토리를 변경합니다.',
          '메시징 앱(제작사 주장): Loci AI는 2026년 10월 PromptQuorum에 Loci가 이제 iMessage, Telegram, Discord, Slack 안에서도 작동하며 WhatsApp은 곧 지원된다고 전했습니다. PromptQuorum이 2026년 10월 23일 [Loci 웹사이트](https://askloci.ai)를 확인했을 때는 메시징 연동에 대한 언급이 없었으며, PromptQuorum은 이를 테스트하지 않았습니다.',
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
          '**내려받을 수 있는 오픈소스 모델** — 처음 설정할 때 Loci는 하드웨어에 가장 잘 맞는 모델을 추천하고, 이후 다른 모델(Gemma, Qwen, Llama, Phi)을 내려받을 수 있습니다. Loci AI는 현재 라인업에 Gemma 4 E2B/E4B와 Qwen3.8을 포함한다고 밝힙니다(제작사 주장). 휴대폰 크기의 모델 파일은 보통 1~5 GB입니다. 내려받은 뒤에는 추론이 기기에서 실행되며, 채팅에는 인터넷이 필요하지 않습니다. 새 모델은 휴대폰 하드웨어에서 동작이 확인되는 대로 계속 추가됩니다.',
          '**런타임 유연성** — Loci는 모델과 기기마다 최적의 추론 런타임을 선택합니다. GGUF 모델에는 llama.cpp, Apple silicon에서 최적 성능을 내려면 Apple의 MLX를 사용합니다. 즉 단순한 화면 뒤에는 정교한 튜닝이 있으며, 사용자가 런타임을 이해하도록 요구하는 대신 앱이 해당 모델을 하드웨어에서 가장 빠르게 실행하는 경로를(첫 토큰까지의 시간과 초당 토큰 수를 측정해) 고릅니다.',
          '**데스크톱 모델(제작사 주장)** — Loci AI는 Mac과 Windows에서 이제 휴대폰보다 훨씬 큰 모델이 실행된다고 밝힙니다. 웹사이트는 [Artificial Analysis](https://artificialanalysis.ai)의 Intelligence Index v4.3.2(2026년 10월 14일)를 인용하며, Mac에서 실행되는 Qwen3.8 27B가 34점으로 Claude Opus 4.6(32점)과 GPT-5.2(30점)를 앞선다고 합니다. 후자 두 값은 Loci AI가 추정치로 표시했습니다. PromptQuorum은 이 수치를 독립적으로 검증하지 않았으며, 지수 점수는 사용자의 실제 작업에서 모델이 얼마나 잘 작동할지를 예측하지 못합니다.',
        ],
        note:
          '어떤 플랫폼이 Apple 파운데이션 모델을 지원하고 어디서 모델을 내려받아야 하는지를 가르는 정확한 기기/OS 기준은 공개적으로 문서화되어 있지 않습니다. 지원 여부는 기기, OS 버전, 앱 버전, 저장 공간, 지역에 따라 다를 수 있으므로 모든 기기에서 동일하게 동작하리라고 기대하지 마십시오. 2026-10-23에 Loci 웹사이트와 App Store 목록을 기준으로 마지막으로 확인했습니다.',
      },
      testingNotes: {
        id: 'testing-notes',
        title: '실제 테스팅 노트',
        content: [
          'Loci는 실제 사용성을 확인하기 위해 모바일 기기에서 테스트했습니다(Hans Küpper, PromptQuorum, 2026년 8월):',
        ],
        items: [
          '**모델 다운로드가 안정적으로 작동합니다.** 컴팩트 모델(예: Gemma 4 E4B, ~4 GB)의 다운로드는 손상이나 자르기 없이 홈 WiFi에서 성공적으로 완료되었습니다.',
          '**오프라인 채팅이 광고대로 작동합니다.** 모델이 다운로드되면 인터넷 연결 없이도 추론이 실행되며, 비행기 모드를 포함합니다. 채팅은 반응성을 유지합니다.',
          '**모델 품질은 파라미터 수와 앱 수준의 튜닝에 모두 좌우됩니다.** 8월 테스트에서 3B~4B 기본 모델은 초안 작성, 브레인스토밍, 요약에는 뛰어났지만 미묘한 주제와 다단계 추론에는 어려움을 보였습니다. 이는 파라미터 수에서 오는 한계로, 어떤 앱도 바꿀 수 없습니다. 앱이 바꿀 수 있는 것은 메모리 관리, 컨텍스트 창 처리, 환각 감소, OS 수준의 안정성 등 모델을 둘러싼 모든 것입니다. Loci는 컨텍스트 관리(자동 압축과 사용 가능한 컨텍스트를 늘리는 기법)를 구현했으며, 동일한 모델을 실행하는 다른 앱보다 환각과 비정상 종료가 적었습니다. Gemma 4 E2B와 E4B는 2025년 세대의 3B~4B 모델보다 확실히 한 단계 위였습니다. 복잡한 분석, 실시간 웹 질의, 중대한 결정에는 더 큰 모델(클라우드 또는 Loci AI에 따르면 데스크톱)이 더 적합합니다.',
          '**선택적 기능은 연결성이 필요합니다.** DuckDuckGo를 통한 웹 검색, 모델 다운로드, 앱 업데이트 모두 문서화된 대로 인터넷 접근이 필요합니다.',
          '**테스트하지 않음.** Mac과 Windows 버전, 메시징 앱 연동, 자동 모델 선택, 2026년 10월 모델 라인업은 이 테스트 이후에 도입되었거나 설명된 것이며 PromptQuorum이 테스트하지 않았습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
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
            '제한사항 / 주의사항': '더 작은 로컬 모델(약 3B~4B 파라미터)은 가장 큰 클라우드 모델보다 출력 능력이 낮습니다.',
          },
          {
            '장점': '웹 연동과 매끄러운 오프라인 전환',
            '실제 사용에서의 의미': '온라인일 때 Loci는 설정 가능한 웹 RAG로 실시간 웹 출처를 근거로 답변할 수 있습니다. 오프라인일 때는 문제없이 기기 안의 지식으로 깔끔하게 돌아갑니다. 이 동작은 설정에서 제어할 수 있습니다.',
            '제한사항 / 주의사항': '웹 연동을 켜면 인터넷이 필요합니다. 웹에 접근할 수 없으면 답변은 기기 안의 모델 지식만 반영하며 최신 사건은 포함하지 않습니다.',
          },
          {
            '장점': '긴 컨텍스트 및 복잡한 추론',
            '실제 사용에서의 의미': '로컬 콘텐츠에 대한 초안 작성, 요약, 구조화된 Q&A에 적합합니다.',
            '제한사항 / 주의사항': '복잡한 다단계 추론, 코딩, 중대한 요약에는 클라우드나 데스크톱의 더 큰 모델이 여전히 유리한 경우가 많습니다.',
          },
          {
            '장점': '더 큰 모델을 위한 데스크톱/휴대폰 연결',
            '실제 사용에서의 의미': '휴대폰을 Mac이나 PC와 연결해 휴대폰에서 더 큰 모델을 실행할 수 있습니다. 추론은 더 성능 좋은 기기에 맡기고 화면은 모바일에 그대로 둡니다.',
            '제한사항 / 주의사항': '충분한 GPU/CPU를 갖춘 데스크톱이나 노트북, 그리고 기기 간 안정적인 네트워크 연결이 필요합니다.',
          },
          {
            '장점': '앱 안정성과 비정상 종료 방지',
            '실제 사용에서의 의미': 'Loci AI는 OS 메모리 처리 덕분에 다른 로컬 LLM 앱보다 비정상 종료가 적고 세션 연속성이 더 좋다고 밝힙니다(제작사 주장이며 통제된 비교가 아닙니다).',
            '제한사항 / 주의사항': '메모리 처리는 앱마다 다르며, 결과는 기기, 모델 크기, 동시에 실행되는 앱의 부하에 따라 달라집니다.',
          },
          {
            '장점': '대화 전반의 글로벌 메모리',
            '실제 사용에서의 의미': 'Loci는 여러 대화와 모델 전환에 걸쳐 사용자에 관한 내용을 기억합니다. Gemma에서 Qwen으로 바꿔도 앱은 선호와 기록을 유지하며, 모두 기기에 저장됩니다.',
            '제한사항 / 주의사항': '글로벌 메모리는 사용자의 기기에만 남으며 기기 간에 동기화되지 않습니다.',
          },
          {
            '장점': '발열 관리',
            '실제 사용에서의 의미': 'Loci AI에 따르면 Loci는 기기 온도를 모니터링하고, 휴대폰이 성능을 낮추거나 앱이 종료될 때까지 추론을 밀어붙이는 대신 실행 매개변수를 조정해 휴대폰을 안정적으로 유지합니다. 여러 온도 모드를 통해 긴 세션에서 일부러 더 시원하게 실행할 수도 있습니다.',
            '제한사항 / 주의사항': '발열 관리는 안정성을 위해 속도를 일부 희생하며, 기기마다 발열 특성이 다릅니다.',
          },
          {
            '장점': '백그라운드 모델 다운로드',
            '실제 사용에서의 의미': '모델 다운로드는 백그라운드 세션에서 실행되어 앱을 닫아도 계속되며 중단된 지점부터 다시 시작됩니다. 4 GB 모델 파일을 받는 동안 앱을 열어 둘 필요가 없습니다.',
            '제한사항 / 주의사항': '다운로드가 진행되는 동안에는 여전히 인터넷 연결이 필요합니다.',
          },
          {
            '장점': '점진적으로 깊어지는 설정',
            '실제 사용에서의 의미': '메인 화면은 일반 사용자를 위해 의도적으로 단순하지만, 모델 동작, 온도, 컨텍스트 길이, 온도 모드를 조정하려는 사용자를 위한 설정이 있습니다.',
            '제한사항 / 주의사항': '고급 설정은 기본적으로 숨겨져 있어 모든 기능을 알려면 직접 둘러봐야 합니다.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: '각 플랫폼에서 Loci',
        columns: ['플랫폼', '예상되는 것', '중요한 참고사항'],
        rows: [
          {
            '플랫폼': 'iPhone',
            '예상되는 것': 'Loci는 iOS 18.0+에서 작동합니다. Apple의 온디바이스 기반 모델을 사용하거나 컴팩트 오픈소스 모델(Gemma 4 E4B, Llama 3.2 3B, ~2–4 GB)을 다운로드할 수 있습니다. 채팅, 사진 분석, 음성 모드, 캘린더 통합 가능합니다.',
            '중요한 참고사항': 'iOS 18+ 요구사항은 iPhone XS 이상을 제외합니다. Apple 기반 모델 지원의 정확한 디바이스/칩 임계값은 공개적으로 문서화되지 않았습니다.',
          },
          {
            '플랫폼': 'iPad',
            '예상되는 것': 'Loci는 iPadOS 18.0+에서 작동하며 iPhone과 동일한 모델 경로가 있습니다. 더 큰 화면은 긴 대화와 문서 검토에 더 좋습니다.',
            '중요한 참고사항': '더 큰 모델도 사용 가능한 VRAM에 의해 제한될 수 있습니다. Apple 기반 모델 가용성은 iPad 세대에 따라 다릅니다; 현재 호환성을 위해 App Store를 확인하세요.',
          },
          {
            '플랫폼': 'Android',
            '예상되는 것': 'Google Play에서 받을 수 있습니다. 오픈소스 모델(Gemma 4 E4B, Qwen, Llama 3.2 3B, Phi-4, 약 2~5 GB)을 내려받을 수 있습니다. Apple 파운데이션 모델에 해당하는 내장 시스템 모델은 없습니다.',
            '중요한 참고사항': '칩셋, RAM, OS 버전 파편화로 인해 성능이 Android 디바이스 전체에서 매우 다릅니다. 고급 전화(Snapdragon 8 시리즈, 8GB 이상 RAM)가 모델을 더 잘 처리합니다.',
          },
          {
            '플랫폼': 'Mac',
            '예상되는 것': '[askloci.ai](https://askloci.ai)에서 내려받습니다. Apple의 온디바이스 파운데이션 모델을 쓰거나, 오픈소스 모델을 내려받거나, 같은 Mac에서 실행 중인 Ollama에 연결해 더 넓은 모델 라이브러리를 사용할 수 있습니다. 긴 세션, 큰 화면, 외장 키보드에 유용합니다.',
            '중요한 참고사항': 'Mac 특정 Apple 기반 모델 지원은 문서화되지 않았습니다. M 시리즈 Mac(M1/M2/M3+)은 아마도 지원됩니다; 구형 Intel Mac은 모델 다운로드가 필요할 수 있습니다. 현재 호환성을 위해 App Store를 확인하세요.',
          },
          {
            '플랫폼': 'Windows',
            '예상되는 것': '[askloci.ai](https://askloci.ai/windows/)에서 내려받습니다. 해당 페이지는 이 버전을 베타로 표시하며 x64와 ARM64 설치 프로그램을 제공합니다. 오픈소스 모델(Android와 같은 계열: Gemma, Qwen, Llama, Phi)을 내려받을 수 있습니다. 음성 입력에는 인터넷 연결이 필요합니다(다른 플랫폼과 다릅니다).',
            '중요한 참고사항': 'Windows 지원은 5개 플랫폼 중 가장 덜 문서화되어 있습니다. 성능은 GPU/CPU에 따라 달라집니다; 모델 스토리지를 위해 충분한 디스크 공간이 필요합니다(~2–5 GB).',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
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
          '**휴대폰에서 더 큰 모델을 실행하고 싶은 사용자.** Loci AI에 따르면 Loci Link로 휴대폰을 Mac이나 PC와 페어링해 모바일 화면에서 더 큰 모델을 실행할 수 있으며, 트래픽은 사용자의 기기 사이에 머뭅니다. 성능이 충분한 데스크톱과 기기 간 안정적인 연결이 필요합니다.',
          '**대화 전반에 걸친 지속적인 메모리를 중요하게 여기는 사용자.** Loci는 서로 다른 대화 사이, 심지어 모델을 바꿀 때도 사용자에 관한 내용을 기억합니다. 모든 메모리는 사용자의 기기에 남습니다.',
          '**쉽게 뜨거워지는 휴대폰으로 긴 세션을 진행하는 사용자.** Loci AI에 따르면 Loci의 발열 관리는 실행 매개변수를 조정해 긴 세션 동안 휴대폰을 안정적으로 유지하며, 기기가 성능을 낮추거나 앱이 종료되도록 두지 않습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Loci를 사용하지 말아야 할 사람',
        items: [
          '**휴대폰에서 최첨단 추론이나 실시간 웹 연동을 기대하는 사용자.** 휴대폰 크기의 모델에는 Loci의 컨텍스트 관리를 더해도 가장 큰 클라우드 모델이 넘어서는 파라미터 수의 한계가 있습니다. Loci AI는 Mac과 Windows에서 이제 훨씬 큰 모델이 실행된다고 밝힙니다(제작사 주장이며 PromptQuorum은 테스트하지 않았습니다). 중대한 분석, 복잡한 다단계 추론, 코드 생성, 실시간 웹 연동에는 먼저 이 주장을 직접 하는 작업으로 확인해 보십시오. Loci는 개인 비서형 작업, 초안 작성, 설계 범위 안의 추론에서 뛰어납니다.',
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
            a: '특정 작업에서는 그렇습니다. 초안 작성, 브레인스토밍, 로컬 문서 요약, 간단한 질의응답이 해당합니다. 복잡한 추론, 코드 생성, 실시간 웹 질의, 중대한 결정에서는 휴대폰 크기의 로컬 모델보다 클라우드 모델(ChatGPT, Claude)이 더 뛰어납니다. Loci AI는 Mac에서 이제 독립적인 벤치마크에서 일부 클라우드 모델보다 높은 점수를 받은 모델을 실행한다고 밝히지만, PromptQuorum은 이를 테스트하지 않았습니다. Loci는 개인정보 보호와 연결성 때문에 오프라인으로도 쓸 수 있는 클라우드 채팅의 로컬 대안으로 보는 것이 가장 좋으며, 만능 대체재는 아닙니다.',
          },
          {
            q: 'Loci는 얼마나 많은 스토리지를 사용하나요?',
            a: '앱 자체는 작습니다(약 100 MB). 모델 파일은 선택에 따라 다릅니다: 컴팩트 모델(Phi-4 Mini, Gemma 4 E2B, SmolLM)은 1–3 GB; 더 큰 모델(Llama 3.2 3B, Gemma 4 E4B, Qwen3)은 2–5 GB입니다. 여러 모델을 다운로드한 경우 총 사용량은 10GB 이상에 도달할 수 있습니다. 스토리지가 제한된 디바이스에서는 계획하세요.',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '제작자로부터',
        content: [
          'Loci AI, Inc.의 창업자 겸 CEO인 Michael Waldman은 2026년 10월 이 리뷰를 위해 PromptQuorum에 다음 성명을 제공했습니다. 이는 제작사 본인의 말을 읽기 쉽도록 단락으로 나누어 싣은 것이며, PromptQuorum의 독립적인 편집 평가가 아닙니다. PromptQuorum은 그 안의 주장을 검증하지 않았습니다(영어에서 번역):',
          '"우리는 유능한 AI가 모든 말을 데이터 센터로 보내는 구독 서비스가 아니라 공공재여야 한다고 믿기 때문에 Loci를 만들었습니다. 지난 1년간 가장 놀라웠던 점은 오픈 모델이 얼마나 발전했는가입니다. Mac에서 Loci는 이제 독립적인 벤치마크에서 최첨단 클라우드 모델보다 높은 점수를 받는 모델을 무료로, 완전히 오프라인으로 실행합니다.',
          '우리 작업의 대부분은 이를 힘들이지 않고 쓰게 만드는 데 들어갑니다. 하드웨어에 맞는 모델을 고르고, 긴 세션을 안정적으로 유지하고, 휴대폰이 데스크톱의 성능을 쓸 수 있게 하는 일입니다. 우리는 특히 작은 모델의 성능을 높이는 데 초점을 둔 유니버설 하니스에 기대가 큽니다. 무엇보다 Loci는 추론 엔진을 개발하고 있으며, 이를 통해 로컬 실행을 완전히 제어하고 로컬 AI의 최전선을 계속 넓혀 가겠습니다."',
        ],
        note: '— Michael Waldman, 창업자 겸 CEO, Loci AI, Inc.',
      },
      verdict: {
        id: 'verdict',
        title: '평가',
        content:
          'Loci는 모델을 최대한 제어하기보다 번거로움 없는 온디바이스 AI를 우선하는 분께 가장 잘 맞습니다. 하드웨어에 맞춘 자동 모델 선택, Loci Link(연결된 Mac이나 PC를 통해 휴대폰에서 강력한 모델을 실행하는 데스크톱/휴대폰 연결), 대화와 모델 전환을 가로지르는 글로벌 메모리, 긴 세션을 위한 발열 관리, 그리고 Loci AI가 OS 메모리 처리 덕분이라고 설명하는 앱 안정성이 눈에 띕니다. PromptQuorum의 8월 모바일 테스트에서는 다운로드가 안정적으로 작동하고, 오프라인 채팅이 광고대로 동작하며, 테스터의 경험상 경쟁 로컬 LLM 앱보다 비정상 종료가 적다는 점을 확인했습니다. 웹 RAG 구현도 독특합니다. 온라인일 때는 실시간 출처를 근거로 답하고, 오프라인일 때는 온디바이스 지식으로 돌아가며, 그 동작은 설정에서 제어할 수 있습니다. 기술적인 모델 관리 없이 비공개 오프라인 채팅을 원하는 분께 Loci는 훌륭합니다. 고급 모델 제어와 양자화 유연성을 원한다면 Private LLM(Apple)과 PocketPal AI가 더 깊이가 있고, 실험적인 온디바이스 옵션을 탐색하는 Android 사용자에게는 Google AI Edge Gallery가 더 많은 모델 탐색을 제공합니다. 8월 이후의 변경 사항은 제작사에서 나온 것이며 여기서는 테스트하지 않았습니다. 더 큰 모델을 실행하는 일급 플랫폼으로서의 데스크톱, 메시징 앱 연동, Mac에서의 Qwen3.8 27B 벤치마크 주장입니다. 솔직한 평가: Loci는 모바일에서의 단순함, 안정성, 플랫폼 간 일관성에서 성공합니다. 데스크톱 관련 주장이 사용자의 작업 부하에서도 유지되는지는 직접 확인하셔야 합니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Loci 공식 사이트](https://askloci.ai) — 제품 개요, 플랫폼별 다운로드, 모델 선택 FAQ, 위에서 인용한 벤치마크 주장(2026년 10월 23일 확인).',
          '[Loci Windows 다운로드 페이지](https://askloci.ai/windows/) — 베타 표시, x64 및 ARM64 빌드.',
          '[Loci 개인정보 처리방침](https://askloci.ai/privacy/) — 개발사의 개인정보 약관.',
          '[App Store의 Loci](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — iOS 제공 여부, 버전 1.3.31, 개인정보 보호 라벨, 최소 OS 요구 사항.',
          '[Google Play의 Loci](https://play.google.com/store/apps/details?id=app.lociai.loci) — Android 제공 여부.',
          '[Artificial Analysis](https://artificialanalysis.ai) — Loci AI가 인용하는 Intelligence Index의 발행처. PromptQuorum은 점수를 독립적으로 확인하지 않았습니다.',
          '[GitHub의 Google AI Edge Gallery](https://github.com/google-ai-edge/gallery) — 기능 목록, 지원 모델, 크로스 플랫폼 제공 여부.',
          '[Google AI Edge Gallery 발표 블로그 글](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 2025년 9월 9일 오디오 지원 및 Google Play 제공 발표.',
          '[Private LLM 공식 사이트](https://privatellm.app/en) — 가격, 개인정보 보호 관련 주장, 단축어 연동, 지원 플랫폼.',
          '[Private LLM 모델 라이브러리](https://privatellm.app/models) — 사용 가능한 모델과 양자화 형식.',
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
          '[로컬 LLM 소프트웨어 디렉토리 2026](/ko/directory) — 모든 플랫폼을 위한 포괄적인 앱 및 도구 디렉토리.',
        ],
      },
    },
  },
  pt: {
  freshness_tier: 'semi_annual',
  publishDate: '2026-08-22',
  dateModified: '2026-10-23',
  next_refresh_due: '2027-04-23',
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
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visitar o site oficial do Loci AI →', url: 'https://askloci.ai', productName: 'Loci', productCategory: 'software' },
    ],
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
    '**O Loci é mais atraente se a sua prioridade é uma IA no dispositivo com pouca fricção, em vez de gerenciar modelos manualmente.** Ele roda em iPhone, iPad, Android, Mac e Windows, escolhe automaticamente um modelo adequado ao seu hardware e permite baixar outros depois. A Loci AI descreve o Gemma 4 E2B/E4B como o melhor raciocínio disponível em um celular e afirma que o desktop agora é uma plataforma de primeira classe, com modelos bem maiores no Mac e no Windows (declaração do criador, veja "A palavra do criador"). Usuários avançados também podem parear o celular com um Mac ou PC (Loci Link) para executar esses modelos a partir do celular. Quem quer escolher quantizações, importar modelos ou usar bibliotecas maiores deve comparar com alternativas mais técnicas, como Private LLM ou PocketPal AI.',
  quickAnswerTop: {
    pt: {
      question: 'Devo usar Loci para IA privada e offline?',
      answer:
        'Use o Loci se você quer chat privado no dispositivo, sem a fricção de gerenciar modelos, em iPhone, Android, iPad, Mac ou Windows. Deixe-o de lado se precisa de conhecimento da web em tempo real sem conexão ou de controle profundo sobre a escolha de modelos e a quantização — a IA na nuvem ou apps de IA local mais técnicos, como o Private LLM, atendem melhor.',
      bullets: [
        'Gratuito, sem assinatura, funciona em 5 plataformas (iPhone/iPad/Android/Mac/Windows).',
        'Compatível com offline após download do app e modelo/configuração.',
        'Sem conta, sem rastreamento, conversas permanecem no dispositivo conforme declarações do desenvolvedor.',
        'Recursos opcionais (pesquisa web via DuckDuckGo, entrada de voz no Windows) requerem internet.',
        'Qualidade e seleção de modelo menos flexíveis que Private LLM ou PocketPal AI.',
      ],
      updatedDate: '2026-10-23',
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
    { label: 'A palavra do criador', anchor: 'from-the-maker' },
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
        'O Loci é um app de IA gratuito que roda no dispositivo, para iPhone, iPad, Android, Mac e Windows, criado pela Loci AI, Inc.',
        'O Loci escolhe automaticamente um modelo adequado ao seu hardware, e você pode baixar outros depois (Gemma, Qwen, Llama, Phi). Em dispositivos Apple, ele também pode usar o modelo de fundação do sistema da Apple, onde houver suporte.',
        'Configuração mínima — sem arquivos GGUF, sem escolha de quantização: baixe e converse. O Loci seleciona o melhor ambiente de execução (llama.cpp ou MLX) para o seu hardware.',
        'Declaração de privacidade: as conversas ficam no dispositivo; recursos opcionais (RAG web, voz) exigem internet. O RAG web fundamenta as respostas em fontes ao vivo quando online e volta com segurança ao modelo local quando offline.',
        'Destaques descritos pela Loci AI: Loci Link (pareamento desktop/celular para modelos potentes), memória global entre conversas, gerenciamento térmico, downloads em segundo plano e resistência a travamentos.',
        'Declarado pelo criador em outubro de 2026 e não verificado pela PromptQuorum: Mac e Windows agora executam modelos bem maiores, e o Loci também funciona dentro de apps de mensagens.',
        'Os testes práticos da PromptQuorum cobriram o celular em agosto de 2026; as versões para desktop, as integrações de mensagens e a linha de modelos atual não foram testadas.',
        'Não é ideal para quem precisa de conhecimento da web em tempo real offline, controle profundo de GGUF/quantização ou pilhas de voz totalmente documentadas.',
      ],
    },
    whatIsLoci: {
      id: 'what-is-loci',
      title: 'O Que é Loci',
      content: [
        'O Loci é um assistente de IA voltado ao consumidor, que roda no dispositivo e está disponível para iPhone (iOS 18.0+), iPad (iPadOS 18.0+), Android, Mac e Windows. Criado pela Loci AI, Inc., o app é gratuito, sem assinatura, sem anúncios e sem exigência de conta. A página da App Store mostrava a versão 1.3.31 como atualizada em 23 de outubro de 2026 (a página informa apenas um tempo relativo); a [página de download para Windows](https://askloci.ai/windows/) marca a versão para Windows como beta. Os termos do desenvolvedor estão na [política de privacidade](https://askloci.ai/privacy/).',
        'Arquitetura de modelo: Loci pode usar "modelo de fundação integrado do Apple ou baixar de 10+ modelos open-source curados, incluindo Gemma, Qwen, Llama e Phi — todos funcionando localmente em seu dispositivo." Isso significa que a inferência acontece no dispositivo após a configuração, não na nuvem.',
        'Posicionamento de privacidade: A afirmação oficial é "O chat é processado em seu dispositivo e não é enviado. Não há conta, sem cópia no servidor de suas conversas e nenhum treinamento com suas palavras." O app coleta "Identificadores," "Dados de Uso" e "Diagnósticos" via seu rótulo de nutrição de privacidade, mas afirma que esses dados "não estão vinculados à sua identidade."',
        'Recursos opcionais incluem análise de foto, modo de voz, integração de calendário/lembretes e pesquisa web via DuckDuckGo. A ressalva: pesquisa web e entrada de voz do Windows requerem uma conexão com a internet, o que altera a história "offline" se usada.',
        'Apps de mensagens (declaração do criador): a Loci AI informou à PromptQuorum em outubro de 2026 que o Loci agora também funciona dentro do iMessage, Telegram, Discord e Slack, com o WhatsApp em breve. O [site do Loci](https://askloci.ai) não mencionava integrações de mensagens quando a PromptQuorum o verificou em 23 de outubro de 2026, e a PromptQuorum não as testou.',
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
        '**Modelos de código aberto para download** — o Loci recomenda o modelo que melhor se adapta ao seu hardware na primeira configuração, e você pode baixar outros depois (Gemma, Qwen, Llama, Phi). A Loci AI cita o Gemma 4 E2B/E4B e o Qwen3.8 em sua linha atual (declaração do criador). Os arquivos de modelos do tamanho de um celular costumam ter de 1 a 5 GB. Após o download, a inferência roda no dispositivo; não é preciso internet para conversar. Novos modelos chegam continuamente, depois de verificados em hardware de celular.',
        '**Flexibilidade de ambiente de execução** — o Loci escolhe o melhor ambiente de inferência para cada modelo e dispositivo: llama.cpp para modelos GGUF e MLX da Apple para desempenho ideal em Apple silicon. Ou seja, a interface simples esconde um ajuste sofisticado: o app escolhe o caminho mais rápido para aquele modelo no seu hardware (medindo o tempo até o primeiro token e os tokens por segundo), em vez de obrigar o usuário a entender ambientes de execução.',
        '**Modelos para desktop (declaração do criador)** — a Loci AI afirma que Mac e Windows agora executam modelos bem maiores do que os celulares. O site cita o Intelligence Index v4.3.2 da [Artificial Analysis](https://artificialanalysis.ai) (14 de outubro de 2026): o Qwen3.8 27B rodando em um Mac marca 34, à frente do Claude Opus 4.6 (32) e do GPT-5.2 (30), valores que a Loci AI marca como estimados. A PromptQuorum não verificou esses números de forma independente, e a pontuação de um índice não prevê o desempenho de um modelo nas suas próprias tarefas.',
      ],
      note:
        'Os limites exatos de dispositivo/SO que definem quais plataformas recebem o modelo de fundação da Apple e quais precisam baixar um modelo não são documentados publicamente. Presuma que o suporte varia conforme dispositivo, versão do SO, versão do app, armazenamento e região — não espere comportamento idêntico em todos os seus dispositivos. Última verificação no site do Loci e na página da App Store em 2026-10-23.',
    },
    testingNotes: {
      id: 'testing-notes',
      title: 'Notas de Testes do Mundo Real',
      content: [
        'O Loci foi testado em dispositivos móveis (testes de Hans Küpper, PromptQuorum, agosto de 2026) para validar o uso no mundo real:',
      ],
      items: [
        '**Downloads de modelo funcionam de forma confiável.** Downloads de modelos compactos (por exemplo, Gemma 4 E4B, ~4 GB) foram concluídos com sucesso em WiFi doméstico sem truncamento ou corrupção observados.',
        '**Chat offline funciona conforme anunciado.** Uma vez que um modelo é baixado, a inferência funciona sem qualquer conexão com a internet, incluindo em modo avião. O chat permanece responsivo.',
        '**A qualidade do modelo depende tanto do número de parâmetros quanto do ajuste do app.** No teste de agosto, os modelos básicos de 3B–4B foram bem em rascunhos, brainstorming e resumos, mas tiveram dificuldade com temas sutis e raciocínio em várias etapas — um teto ligado ao número de parâmetros que nenhum app pode mudar. O que o app pode mudar é tudo ao redor do modelo: gerenciamento de memória, janela de contexto, redução de alucinações e estabilidade no nível do sistema. O Loci implementa gerenciamento de contexto (compactação automática mais técnicas para ampliar o contexto útil), que gerou menos alucinações e travamentos do que outros apps com o mesmo modelo. O Gemma 4 E2B e o E4B foram um avanço real em relação à geração de 2025 de modelos de 3B–4B. Para análises complexas, consultas web em tempo real ou decisões de alto risco, modelos maiores — na nuvem ou, segundo a Loci AI, em um desktop — são mais adequados.',
        '**Recursos opcionais requerem conectividade.** Pesquisa web via DuckDuckGo, downloads de modelo e atualizações de app todas requerem acesso com a internet conforme documentado.',
        '**Não testado.** As versões para Mac e Windows, as integrações de mensagens, a seleção automática de modelos e a linha de modelos de outubro de 2026 foram introduzidas ou descritas depois deste teste e não foram testadas pela PromptQuorum.',
      ],
    },
    tradeOffs: {
      id: 'tradeoffs',
      itemHeadings: true,
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
          'Limitação / ressalva': 'Modelos locais menores (~3B–4B parâmetros) geram resultados menos capazes do que os maiores modelos de nuvem.',
        },
        {
          'Benefício': 'Busca na web com retorno suave ao modo offline',
          'O que significa no uso real': 'Online, o Loci pode basear as respostas em fontes da web ao vivo por meio de um RAG web configurável. Offline, ele volta de forma limpa ao conhecimento do dispositivo, sem falhar. Você controla esse comportamento nas configurações.',
          'Limitação / ressalva': 'A busca na web exige internet quando ativada. Sem acesso à web, as respostas refletem apenas o conhecimento do modelo no dispositivo e não incluem acontecimentos atuais.',
        },
        {
          'Benefício': 'Contexto longo e raciocínio complexo',
          'O que significa no uso real': 'Adequado para rascunho, sumarização e Q&A estruturado em conteúdo local.',
          'Limitação / ressalva': 'Raciocínio complexo em várias etapas, programação e resumos de alto risco muitas vezes ainda se beneficiam de modelos maiores, na nuvem ou em um desktop.',
        },
        {
          'Benefício': 'Pareamento desktop/celular para modelos maiores',
          'O que significa no uso real': 'Pareie o celular com um Mac ou PC para executar modelos maiores a partir do celular: a inferência é delegada a uma máquina mais capaz e a interface continua no celular.',
          'Limitação / ressalva': 'Exige um desktop ou notebook com GPU/CPU suficientes e uma conexão de rede estável entre os dispositivos.',
        },
        {
          'Benefício': 'Estabilidade do app e resistência a travamentos',
          'O que significa no uso real': 'A Loci AI afirma que seu tratamento de memória do SO resulta em menos travamentos do que outros apps de IA local e em melhor continuidade de sessão (declaração do criador, sem comparação controlada).',
          'Limitação / ressalva': 'O tratamento de memória é específico de cada app; os resultados variam conforme o dispositivo, o tamanho do modelo e a carga de outros apps.',
        },
        {
          'Benefício': 'Memória global entre conversas',
          'O que significa no uso real': 'O Loci lembra de coisas sobre você entre conversas e trocas de modelo. Troque do Gemma para o Qwen e o app mantém suas preferências e seu histórico — tudo armazenado no dispositivo.',
          'Limitação / ressalva': 'A memória global fica local no seu dispositivo; não é sincronizada entre dispositivos.',
        },
        {
          'Benefício': 'Gerenciamento térmico',
          'O que significa no uso real': 'Segundo a Loci AI, o Loci monitora a temperatura do dispositivo e ajusta parâmetros de execução para manter o celular estável, em vez de forçar a inferência até o celular reduzir o desempenho ou o app travar. Vários modos térmicos permitem rodar de propósito mais frio em sessões longas.',
          'Limitação / ressalva': 'O gerenciamento térmico troca um pouco de velocidade por estabilidade; cada dispositivo tem um perfil térmico diferente.',
        },
        {
          'Benefício': 'Downloads de modelos em segundo plano',
          'O que significa no uso real': 'Os downloads de modelos rodam em sessões em segundo plano, sobrevivem ao fechamento do app e continuam de onde pararam. Não é preciso manter o app aberto ao baixar um arquivo de modelo de 4 GB.',
          'Limitação / ressalva': 'Os downloads ainda exigem conexão com a internet durante as janelas de download ativo.',
        },
        {
          'Benefício': 'Configurações com profundidade progressiva',
          'O que significa no uso real': 'A tela principal é propositalmente simples para usuários casuais, mas há configurações para quem quer ajustar o comportamento do modelo, a temperatura, o tamanho do contexto e os modos térmicos.',
          'Limitação / ressalva': 'As configurações avançadas ficam ocultas por padrão; é preciso explorar para descobrir todos os recursos.',
        },
      ],
    },
    platforms: {
      id: 'platforms',
      itemHeadings: true,
      title: 'Loci em Cada Plataforma',
      columns: ['Plataforma', 'O que esperar', 'Observação importante'],
      rows: [
        {
          'Plataforma': 'iPhone',
          'O que esperar': 'Loci funciona em iOS 18.0+. Pode usar modelo de fundação no dispositivo da Apple ou baixar um modelo open-source compacto (Gemma 4 E4B, Llama 3.2 3B, ~2–4 GB). Chat, análise de foto, modo de voz e integração de calendário disponíveis.',
          'Observação importante': 'Requisito iOS 18+ exclui iPhone XS e anteriores. Limites exatos de dispositivo/chip para suporte de modelo de fundação Apple não são documentados publicamente.',
        },
        {
          'Plataforma': 'iPad',
          'O que esperar': 'Loci funciona em iPadOS 18.0+, com os mesmos caminhos de modelo que iPhone. Tela maior é melhor para conversas longas e revisão de documento.',
          'Observação importante': 'Modelos maiores ainda podem ser limitados por VRAM disponível. Disponibilidade de modelo de fundação Apple varia por geração de iPad; verifique a App Store para compatibilidade atual.',
        },
        {
          'Plataforma': 'Android',
          'O que esperar': 'Disponível no Google Play. Pode baixar modelos de código aberto (Gemma 4 E4B, Qwen, Llama 3.2 3B, Phi-4, ~2–5 GB). Sem modelo de sistema integrado equivalente ao modelo de fundação da Apple.',
          'Observação importante': 'Desempenho varia amplamente entre dispositivos Android devido a fragmentação de chipset, RAM e versão de SO. Telefones de ponta (série Snapdragon 8, 8+ GB RAM) lidam melhor com modelos.',
        },
        {
          'Plataforma': 'Mac',
          'O que esperar': 'Download em [askloci.ai](https://askloci.ai). Pode usar o modelo de fundação da Apple no dispositivo, baixar modelos de código aberto ou se conectar ao Ollama no mesmo Mac para acessar uma biblioteca maior. Útil para sessões mais longas, telas maiores e teclados externos.',
          'Observação importante': 'Suporte de modelo de fundação específico do Mac é não documentado. Macs M-series (M1/M2/M3+) provavelmente suportados; Macs Intel mais antigos podem precisar de download de modelo. Verifique a App Store para compatibilidade atual.',
        },
        {
          'Plataforma': 'Windows',
          'O que esperar': 'Download em [askloci.ai](https://askloci.ai/windows/); a página marca a versão como beta e oferece instaladores x64 e ARM64. Pode baixar modelos de código aberto (mesmas famílias do Android: Gemma, Qwen, Llama, Phi). A entrada de voz exige conexão com a internet (diferente das outras plataformas).',
          'Observação importante': 'Suporte do Windows é o menos documentado das cinco plataformas. Desempenho depende de GPU/CPU; requer espaço em disco suficiente para armazenamento de modelo (~2–5 GB).',
        },
      ],
    },
    vsAlternatives: {
      id: 'vs-alternatives',
      itemHeadings: true,
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
        '**Usuário que quer executar modelos maiores a partir do celular.** Segundo a Loci AI, o Loci Link permite parear o celular com um Mac ou PC para executar modelos maiores pela interface móvel, mantendo o tráfego entre os seus próprios dispositivos. Exige um desktop capaz e uma conexão estável entre os dispositivos.',
        '**Usuário que valoriza memória persistente entre conversas.** O Loci lembra de coisas sobre você entre diferentes conversas e até ao trocar de modelo. Toda a memória fica no seu dispositivo.',
        '**Usuário de sessões longas em um celular que tende a esquentar.** Segundo a Loci AI, o gerenciamento térmico do Loci ajusta parâmetros de execução para manter o celular estável em sessões longas, em vez de deixar o dispositivo reduzir o desempenho ou o app travar.',
      ],
    },
    whoShouldNotUse: {
      id: 'who-should-not-use',
      title: 'Quem Não Deveria Usar Loci',
      items: [
        '**Usuário que espera raciocínio de ponta em um celular ou integração web em tempo real.** Modelos do tamanho de um celular enfrentam um teto de parâmetros que os maiores modelos de nuvem superam, mesmo com o gerenciamento de contexto do Loci. A Loci AI afirma que Mac e Windows agora executam modelos bem maiores (declaração do criador, não testada pela PromptQuorum); para análises de alto risco, raciocínio complexo em várias etapas, geração de código ou busca na web em tempo real, confira antes essa afirmação nas suas próprias tarefas. O Loci vai bem em tarefas de assistente pessoal, rascunhos e raciocínio dentro do seu escopo de projeto.',
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
          a: 'Para tarefas específicas, sim — rascunhos, brainstorming, resumo de documentos locais, perguntas e respostas simples. Para raciocínio complexo, geração de código, consultas web em tempo real ou decisões de alto risco, os modelos de nuvem (ChatGPT, Claude) são mais capazes do que modelos locais do tamanho de um celular. A Loci AI afirma que, em um Mac, o app agora executa modelos que superam alguns modelos de nuvem em um benchmark independente; a PromptQuorum não testou isso. O Loci é melhor visto como uma alternativa local, capaz de funcionar offline, ao chat na nuvem por motivos de privacidade e conectividade, e não como um substituto universal.',
        },
        {
          q: 'Quanto armazenamento Loci usa?',
          a: 'O app em si é pequeno (~100 MB). Arquivos de modelo dependem de qual você escolher: modelos compactos (Phi-4 Mini, Gemma 4 E2B, SmolLM) são 1–3 GB; modelos maiores (Llama 3.2 3B, Gemma 4 E4B, Qwen3) são 2–5 GB. Se você tiver vários modelos baixados, o uso total pode chegar a 10+ GB. Planeje adequadamente em dispositivos com armazenamento limitado.',
        },
      ],
    },
    fromTheMaker: {
      id: 'from-the-maker',
      title: 'A palavra do criador',
      content: [
        'Michael Waldman, fundador e CEO da Loci AI, Inc., enviou à PromptQuorum a declaração a seguir para esta análise em outubro de 2026. Ela é apresentada como palavras do próprio criador, dividida em parágrafos para facilitar a leitura, e não como avaliação editorial independente da PromptQuorum; a PromptQuorum não verificou as afirmações nela contidas (traduzido do inglês):',
        '"Criamos o Loci porque acreditamos que uma IA capaz deve ser um bem público, e não uma assinatura que envia cada palavra a um data center. A maior surpresa do último ano é o quanto os modelos abertos evoluíram. Em um Mac, o Loci agora executa modelos que pontuam acima dos modelos de nuvem de ponta em benchmarks independentes, de graça e totalmente offline.',
        'A maior parte do nosso trabalho é fazer isso parecer natural: escolher o modelo certo para o seu hardware, manter sessões longas estáveis e deixar o seu celular usar o poder do seu desktop. Estamos especialmente animados com o nosso arcabouço universal, voltado a aumentar o desempenho de modelos menores. Mais importante ainda: o Loci está trabalhando em um mecanismo de inferência, que nos dá controle total da execução local e continuará a empurrar a fronteira da IA local."',
      ],
      note: '— Michael Waldman, fundador e CEO, Loci AI, Inc.',
    },
    verdict: {
      id: 'verdict',
      title: 'Veredicto',
      content:
        'O Loci é mais atraente se a sua prioridade é uma IA no dispositivo com pouca fricção, em vez de controle máximo sobre os modelos. Vários recursos se destacam: a seleção automática de modelo para o seu hardware; o Loci Link (pareamento desktop/celular para executar modelos potentes a partir do celular por meio de um Mac ou PC conectado); a memória global entre conversas e trocas de modelo; o gerenciamento térmico para sessões longas; e uma estabilidade que a Loci AI atribui ao seu tratamento de memória do SO. O teste móvel de agosto da PromptQuorum confirmou que os downloads funcionam de forma confiável, o chat offline funciona como anunciado e, na experiência do testador, o app travou menos do que os apps de IA local concorrentes. A implementação do RAG web também é diferenciada: online, as respostas se apoiam em fontes ao vivo; offline, volta ao conhecimento local — e você controla esse comportamento nas configurações. Para quem quer chat privado offline sem a fricção técnica de gerenciar modelos, o Loci se destaca. Para quem quer controle avançado de modelos e flexibilidade de quantização, Private LLM (Apple) e PocketPal AI oferecem mais profundidade; para usuários de Android que exploram opções experimentais no dispositivo, o Google AI Edge Gallery oferece mais descoberta de modelos. O que mudou desde agosto vem do criador e não foi testado aqui: o desktop como plataforma de primeira classe com modelos maiores, as integrações de mensagens e uma afirmação de benchmark para o Qwen3.8 27B em um Mac. A avaliação honesta: o Loci acerta em simplicidade, estabilidade e consistência entre plataformas no celular; se as afirmações sobre o desktop se sustentam na sua carga de trabalho, cabe a você verificar.',
    },
    sources: {
      id: 'sources',
      title: 'Fontes',
      items: [
        '[Site oficial do Loci](https://askloci.ai) — visão geral do produto, downloads por plataforma, FAQ sobre a escolha de modelos e a afirmação de benchmark citada acima (consultado em 23 de outubro de 2026).',
        '[Página de download do Loci para Windows](https://askloci.ai/windows/) — indicação de beta, versões x64 e ARM64.',
        '[Política de privacidade do Loci](https://askloci.ai/privacy/) — os termos de privacidade do desenvolvedor.',
        '[Loci na App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — disponibilidade no iOS, versão 1.3.31, rótulo de privacidade, requisitos mínimos de SO.',
        '[Loci no Google Play](https://play.google.com/store/apps/details?id=app.lociai.loci) — disponibilidade no Android.',
        '[Artificial Analysis](https://artificialanalysis.ai) — editora do Intelligence Index citado pela Loci AI; a PromptQuorum não verificou as pontuações de forma independente.',
        '[Google AI Edge Gallery no GitHub](https://github.com/google-ai-edge/gallery) — lista de recursos, modelos compatíveis, disponibilidade multiplataforma.',
        '[Post de anúncio do Google AI Edge Gallery](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — anúncio de 9 de setembro de 2025 sobre suporte a áudio e disponibilidade no Google Play.',
        '[Site oficial do Private LLM](https://privatellm.app/en) — preços, declarações de privacidade, integração com Atalhos, plataformas compatíveis.',
        '[Biblioteca de modelos do Private LLM](https://privatellm.app/models) — modelos disponíveis e formatos de quantização.',
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
        '[Diretório de Software de IA Local 2026](/pt/directory) — diretório abrangente de app e ferramenta para todas as plataformas.',
      ],
    },
  },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-08-22',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
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
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: '访问 Loci AI 官方网站 →', url: 'https://askloci.ai', productName: 'Loci', productCategory: 'software' },
    ],
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
      '**如果您更看重省心的设备端 AI,而不是手动管理模型,Loci 最值得考虑。** 它可在 iPhone、iPad、Android、Mac 和 Windows 上运行,会自动选择适合您硬件的模型,并允许您之后下载其他模型。Loci AI 称 Gemma 4 E2B/E4B 是手机上可用的最强推理能力,并表示桌面端现已成为一等平台,Mac 和 Windows 可运行大得多的模型(开发者自述,见“来自开发者”)。高级用户还可以将手机与 Mac 或 PC 配对(Loci Link),从手机上使用这些模型。如果您想自行选择量化方式、导入模型或使用更大的模型库,应将其与 Private LLM 或 PocketPal AI 等技术性更强的替代方案进行比较。',
    quickAnswerTop: {
      zh: {
        question: 'Should I use Loci for private, offline AI?',
        answer:
          '如果您想要无需管理模型的私密设备端聊天,可在 iPhone、Android、iPad、Mac 或 Windows 上使用 Loci。如果您需要无网络下的实时网络知识,或对模型选择和量化有深度控制,云端 AI 或 Private LLM 等技术性更强的本地 LLM 应用更合适。',
        bullets: [
          'Free, no subscription, works on 5 platforms (iPhone/iPad/Android/Mac/Windows).',
          'Offline-capable after app and model download/setup.',
          'No account, no tracking, conversations stay on-device per Loci AI claims.',
          'Optional features (web search via DuckDuckGo, Windows voice input) require internet.',
          'Quality and model selection less flexible than Private LLM or PocketPal AI.',
        ],
        updatedDate: '2026-10-23',
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
      { label: '来自开发者', anchor: 'from-the-maker' },
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
          'Loci 是由 Loci AI, Inc. 开发的免费设备端 AI 应用,支持 iPhone、iPad、Android、Mac 和 Windows。',
          'Loci 会自动选择适合您硬件的模型,您之后可下载其他模型(Gemma、Qwen、Llama、Phi)。在 Apple 设备上,它还可在支持时使用 Apple 的系统基础模型。',
          '设置极简:无需 GGUF 文件,无需选择量化,下载即可聊天。Loci 会为您的硬件选择最佳运行时(llama.cpp 或 MLX)。',
          '隐私声明:对话保留在设备上;可选功能(网络 RAG、语音)需要联网。联网时网络 RAG 会以实时来源为回答提供依据,离线时则平稳回退到本地模型。',
          'Loci AI 所述的突出功能:Loci Link(桌面与手机配对以运行强大模型)、跨对话的全局记忆、温控管理、后台下载和抗崩溃能力。',
          '开发者于 2026 年 10 月自述,PromptQuorum 未核实:Mac 和 Windows 现可运行大得多的模型,Loci 也可在消息应用内使用。',
          'PromptQuorum 的实测于 2026 年 8 月覆盖移动端;桌面版、消息集成和当前模型阵容均未测试。',
          '不适合需要离线实时网络知识、深度 GGUF/量化控制或完整文档化语音方案的用户。',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'Loci 是什么',
        content: [
          'Loci 是面向普通用户的设备端 AI 助手,支持 iPhone(iOS 18.0+)、iPad(iPadOS 18.0+)、Android、Mac 和 Windows。该应用由 Loci AI, Inc. 开发,免费,无订阅、无广告,也无需账户。App Store 页面显示 1.3.31 版本于 2026 年 10 月 23 日更新(页面仅给出相对时间);[Windows 下载页面](https://askloci.ai/windows/)将 Windows 版标注为 Beta。开发者的条款见其[隐私政策](https://askloci.ai/privacy/)。',
          '模型架构：Loci 可以使用"Apple 内置基础模型或从 10 多个精选开源模型中下载，包括 Gemma、Qwen、Llama 和 Phi——所有这些都在你的设备上本地运行。" 这意味着设置后推理在设备上进行，不在云中。',
          '隐私定位：官方声称是"聊天在你的设备上处理，不上传。没有账户，没有服务器端你对话的副本，没有对你的词语的训练。" 该应用通过其隐私营养标签收集"标识符"、"使用数据"和"诊断"，但声称这些数据"不与你的身份相关联"。',
          '可选功能包括照片分析、语音模式、日历/提醒集成和通过 DuckDuckGo 的网络搜索。注意：网络搜索和 Windows 语音输入需要互联网连接，这改变了"离线"的故事（如果使用）。',
          '消息应用(开发者自述):Loci AI 于 2026 年 10 月告知 PromptQuorum,Loci 现在也可在 iMessage、Telegram、Discord 和 Slack 内使用,WhatsApp 即将支持。PromptQuorum 于 2026 年 10 月 23 日查看 [Loci 网站](https://askloci.ai)时,其中未提及消息集成,PromptQuorum 也未对其进行测试。',
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
          '**可下载的开源模型** — 首次设置时,Loci 会推荐最适合您硬件的模型,您之后可下载其他模型(Gemma、Qwen、Llama、Phi)。Loci AI 在其当前阵容中列出 Gemma 4 E2B/E4B 和 Qwen3.8(开发者自述)。手机级模型文件通常为 1–5 GB。下载后推理在设备上运行;聊天无需联网。新模型在验证可在手机硬件上运行后会陆续加入。',
          '**运行时灵活性** — Loci 会为每个模型和设备选择最佳推理运行时:GGUF 模型使用 llama.cpp,Apple silicon 上则使用 Apple 的 MLX 以获得最佳性能。也就是说,简洁的界面背后是精细的调优:应用会为该模型在您的硬件上选择最快的路径(测量首个 token 时间和每秒 token 数),而无需用户理解运行时。',
          '**桌面模型(开发者自述)** — Loci AI 称,Mac 和 Windows 现可运行比手机大得多的模型。其网站引用了 [Artificial Analysis](https://artificialanalysis.ai) 的 Intelligence Index v4.3.2(2026 年 10 月 14 日):在 Mac 上运行的 Qwen3.8 27B 得分 34,高于 Claude Opus 4.6(32)和 GPT-5.2(30),后两者均被 Loci AI 标注为估计值。PromptQuorum 未独立核实这些数字,指数得分也无法预测模型在您自己任务上的表现。',
        ],
        note:
          '哪些平台可使用 Apple 基础模型、哪些必须下载模型,其确切的设备/操作系统门槛并未公开记录。请假定支持情况因设备、操作系统版本、应用版本、存储和地区而异,不要期望所有设备行为一致。最后一次对照 Loci 网站和 App Store 页面核实日期为 2026-10-23。',
      },
      testingNotes: {
        id: 'testing-notes',
        title: '真实测试笔记',
        content: [
          'Loci 已在移动设备上测试(测试者 Hans Küpper,PromptQuorum,2026 年 8 月),以验证真实使用情况:',
        ],
        items: [
          '**模型下载工作可靠。** 紧凑模型（例如 Gemma 4 E4B，~4 GB）的下载在家庭 WiFi 上成功完成，没有观察到截断或损坏。',
          '**离线聊天按宣传工作。** 一旦模型被下载，推理无需任何互联网连接即可运行，包括在飞行模式中。聊天保持响应。',
          '**模型质量同时取决于参数量和应用层调优。** 在 8 月的测试中,基础的 3B–4B 模型擅长起草、头脑风暴和摘要,但在细致话题和多步推理上表现吃力——这是参数量决定的上限,任何应用都无法改变。应用能改变的是模型周围的一切:内存管理、上下文窗口处理、减少幻觉以及系统级稳定性。Loci 实现了上下文管理(自动压缩加上扩展可用上下文的技术),在运行相同模型时,其幻觉和崩溃比其他应用更少。Gemma 4 E2B 和 E4B 比 2025 年一代的 3B–4B 模型确实更进一步。对于复杂分析、实时网络查询或高风险决策,更大的模型——云端模型,或按 Loci AI 所说的桌面端模型——更合适。',
          '**可选功能需要连接。** DuckDuckGo 网络搜索、模型下载和应用更新都需要互联网访问，如文档所述。',
          '**未测试。** Mac 和 Windows 版本、消息应用集成、自动模型选择以及 2026 年 10 月的模型阵容,均在此次测试之后推出或说明,PromptQuorum 未对其进行测试。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
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
            '局限 / 注意': '较小的本地模型(约 3B–4B 参数)输出能力不及最大的云端模型。',
          },
          {
            '优点': '联网检索与无缝离线回退',
            '在实际使用中的含义': '联网时,Loci 可通过可配置的网络 RAG 以实时网络来源为回答提供依据。离线时,它会平稳回退到设备上的知识,不会出错。该行为可在设置中控制。',
            '局限 / 注意': '启用联网检索需要互联网。没有网络访问时,回答仅反映设备上模型的知识,不包含时事。',
          },
          {
            '优点': '长上下文和复杂推理',
            '在实际使用中的含义': '适合起草、总结和本地内容上的结构化问答。',
            '局限 / 注意': '复杂的多步推理、编程和高风险摘要,往往仍然更适合使用更大的模型,无论是云端还是桌面端。',
          },
          {
            '优点': '桌面与手机联动以运行更大模型',
            '在实际使用中的含义': '将手机与 Mac 或 PC 关联,即可从手机运行更大的模型:推理交给性能更强的机器,界面仍留在手机上。',
            '局限 / 注意': '需要具备足够 GPU/CPU 的台式机或笔记本,以及设备之间稳定的网络连接。',
          },
          {
            '优点': '应用稳定性与抗崩溃能力',
            '在实际使用中的含义': 'Loci AI 称,其对操作系统内存的处理使崩溃比其他本地 LLM 应用更少,会话连续性也更好(开发者自述,并非受控对比)。',
            '局限 / 注意': '内存处理因应用而异;效果取决于设备、模型大小和同时运行的应用负载。',
          },
          {
            '优点': '跨对话的全局记忆',
            '在实际使用中的含义': 'Loci 会在不同对话和模型切换之间记住关于您的信息。从 Gemma 切换到 Qwen,应用仍会保留您的偏好和历史记录——全部存储在设备上。',
            '局限 / 注意': '全局记忆仅保留在您的设备本地,不会在设备之间同步。',
          },
          {
            '优点': '温控管理',
            '在实际使用中的含义': '据 Loci AI 称,Loci 会监测设备温度并调整运行参数以保持手机稳定,而不是把推理推到手机降频或应用崩溃为止。多种温度模式让您在长时间会话中可以刻意让设备运行得更凉。',
            '局限 / 注意': '温控管理会用部分速度换取稳定性;不同设备的散热特性不同。',
          },
          {
            '优点': '后台模型下载',
            '在实际使用中的含义': '模型下载在后台会话中运行,关闭应用后仍会继续,并从中断处恢复。下载 4 GB 的模型文件时无需保持应用打开。',
            '局限 / 注意': '下载进行期间仍然需要互联网连接。',
          },
          {
            '优点': '逐步深入的设置',
            '在实际使用中的含义': '主界面对普通用户刻意保持简洁,但为想要调整模型行为、温度、上下文长度和温度模式的用户提供了设置项。',
            '局限 / 注意': '高级设置默认隐藏;需要自行探索才能发现全部功能。',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        itemHeadings: true,
        title: '每个平台上的 Loci',
        columns: ['平台', '期望功能', '重要说明'],
        rows: [
          {
            '平台': 'iPhone',
            '期望功能': 'Loci 适用于 iOS 18.0+。可以使用 Apple 的设备基础模型或下载紧凑的开源模型（Gemma 4 E4B、Llama 3.2 3B、~2–4 GB）。聊天、照片分析、语音模式和日历集成可用。',
            '重要说明': 'iOS 18+ 要求排除 iPhone XS 及更早版本。Apple 基础模型支持的确切设备/芯片阈值没有公开记录。',
          },
          {
            '平台': 'iPad',
            '期望功能': 'Loci 适用于 iPadOS 18.0+，与 iPhone 相同的模型路径。更大的屏幕对长对话和文档审查更好。',
            '重要说明': '较大的模型可能仍然受到可用 VRAM 的限制。Apple 基础模型可用性因 iPad 代数而异；检查 App Store 了解当前兼容性。',
          },
          {
            '平台': 'Android',
            '期望功能': '可在 Google Play 获取。可下载开源模型(Gemma 4 E4B、Qwen、Llama 3.2 3B、Phi-4,约 2–5 GB)。没有相当于 Apple 基础模型的内置系统模型。',
            '重要说明': '由于芯片集、RAM 和系统版本碎片化，性能在 Android 设备之间差异很大。高端手机（Snapdragon 8 系列、8+ GB RAM）处理模型更好。',
          },
          {
            '平台': 'Mac',
            '期望功能': '从 [askloci.ai](https://askloci.ai) 下载。可使用 Apple 的设备端基础模型、下载开源模型,或连接同一台 Mac 上运行的 Ollama 以使用更大的模型库。适合更长的会话、更大的屏幕和外接键盘。',
            '重要说明': 'Mac 特定的 Apple 基础模型支持没有记录。可能支持 M 系列 Mac（M1/M2/M3+）；较旧的 Intel Mac 可能需要模型下载。检查 App Store 了解当前兼容性。',
          },
          {
            '平台': 'Windows',
            '期望功能': '从 [askloci.ai](https://askloci.ai/windows/) 下载;该页面将此版本标注为 Beta,并提供 x64 和 ARM64 安装程序。可下载开源模型(与 Android 相同的系列:Gemma、Qwen、Llama、Phi)。语音输入需要联网(与其他平台不同)。',
            '重要说明': 'Windows 支持是五个平台中文档最少的。性能取决于 GPU/CPU；需要足够的磁盘空间用于模型存储（~2–5 GB）。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
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
          '**希望从手机运行更大模型的用户。** 据 Loci AI 称,Loci Link 可将手机与 Mac 或 PC 配对,通过手机界面运行更大的模型,流量保留在您自己的设备之间。这需要性能足够的桌面设备,以及设备之间稳定的连接。',
          '**重视跨对话持久记忆的用户。** Loci 会在不同对话之间,甚至在切换模型时,记住关于您的信息。所有记忆都保留在您的设备上。',
          '**在容易发热的手机上进行长时间会话的用户。** 据 Loci AI 称,Loci 的温控管理会调整运行参数,在长时间会话中保持手机稳定,而不是任由设备降频或应用崩溃。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不应该使用 Loci',
        items: [
          '**期望在手机上获得前沿推理或实时网络集成的用户。** 手机级模型存在参数量上限,即使有 Loci 的上下文管理,最大的云端模型仍会超过它。Loci AI 称 Mac 和 Windows 现可运行大得多的模型(开发者自述,PromptQuorum 未测试);对于高风险分析、复杂多步推理、代码生成或实时网络检索,请先用您自己的任务验证这一说法。Loci 擅长个人助理类任务、起草以及其设计范围内的推理。',
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
            a: '对特定任务可以——起草、头脑风暴、总结本地文档、简单问答。对于复杂推理、代码生成、实时网络查询或高风险决策,云端模型(ChatGPT、Claude)比手机级本地模型更强。Loci AI 称在 Mac 上它现在可运行在独立基准测试中得分高于部分云端模型的模型;PromptQuorum 未测试这一点。Loci 最好被视为出于隐私和连接原因的、可离线使用的云端聊天本地替代方案,而不是通用替代品。',
          },
          {
            q: 'Loci 使用多少存储空间？',
            a: '应用本身很小（~100 MB）。模型文件取决于你选择哪个：紧凑模型（Phi-4 Mini、Gemma 4 E2B、SmolLM）为 1–3 GB；较大的模型（Llama 3.2 3B、Gemma 4 E4B、Qwen3）为 2–5 GB。如果你下载了多个模型，总使用量可以达到 10+ GB。在存储有限的设备上相应规划。',
          },
        ],
      },
      fromTheMaker: {
        id: 'from-the-maker',
        title: '来自开发者',
        content: [
          'Loci AI, Inc. 创始人兼 CEO Michael Waldman 于 2026 年 10 月为本评测向 PromptQuorum 提供了以下声明。内容以开发者本人的原话呈现,仅为便于阅读而分段,并非 PromptQuorum 的独立编辑评估;PromptQuorum 未核实其中的说法(译自英文):',
          '“我们打造 Loci,是因为我们相信强大的 AI 应当是公共产品,而不是把每一句话都发送到数据中心的订阅服务。过去一年最大的惊喜,是开源模型进步得如此之快。在 Mac 上,Loci 现在可以运行在独立基准测试中得分高于前沿云端模型的模型,免费且完全离线。',
          '我们的大部分工作都用于让这一切显得毫不费力:为您的硬件选择合适的模型、让长时间会话保持稳定,并让您的手机使用桌面电脑的算力。我们尤其期待我们的通用框架,它专注于提升小模型的性能。最重要的是,Loci 正在研发推理引擎,这让我们完全掌控本地执行,并将继续推动本地 AI 的前沿。”',
        ],
        note: '— Michael Waldman,创始人兼 CEO,Loci AI, Inc.',
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '如果您更看重省心的设备端 AI,而不是对模型的最大控制,Loci 最值得考虑。几项功能尤为突出:针对您硬件的自动模型选择;Loci Link(桌面与手机联动,通过相连的 Mac 或 PC 在手机上运行强大模型);跨对话和模型切换的全局记忆;适合长时间会话的温控管理;以及 Loci AI 归功于其操作系统内存处理的应用稳定性。PromptQuorum 8 月的移动端测试确认下载可靠、离线聊天如宣传所述,且据测试者的体验,应用崩溃次数少于竞争的本地 LLM 应用。其网络 RAG 实现也很有特色:联网时回答以实时来源为依据,离线时回退到本地知识,并且您可在设置中控制该行为。对于想要私密离线聊天、又不想承担技术性模型管理的用户,Loci 表现出色。对于想要高级模型控制和量化灵活性的用户,Private LLM(Apple)和 PocketPal AI 更深入;对于探索实验性设备端选项的 Android 用户,Google AI Edge Gallery 提供更多模型探索。自 8 月以来的变化来自开发者,在此未经测试:桌面端成为运行更大模型的一等平台、消息应用集成,以及 Qwen3.8 27B 在 Mac 上的基准测试说法。坦率的评价:Loci 在移动端的简洁性、稳定性和跨平台一致性上做得很好;其桌面端说法能否经得起您的工作负载检验,需要您自己验证。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Loci 官方网站](https://askloci.ai) — 产品概述、各平台下载、模型选择常见问题,以及上文引用的基准测试说法(2026 年 10 月 23 日查阅)。',
          '[Loci Windows 下载页面](https://askloci.ai/windows/) — Beta 标注、x64 和 ARM64 版本。',
          '[Loci 隐私政策](https://askloci.ai/privacy/) — 开发者的隐私条款。',
          '[App Store 上的 Loci](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — iOS 可用性、1.3.31 版本、隐私营养标签、最低系统要求。',
          '[Google Play 上的 Loci](https://play.google.com/store/apps/details?id=app.lociai.loci) — Android 可用性。',
          '[Artificial Analysis](https://artificialanalysis.ai) — Loci AI 所引用的 Intelligence Index 的发布方;PromptQuorum 未独立核实这些分数。',
          '[GitHub 上的 Google AI Edge Gallery](https://github.com/google-ai-edge/gallery) — 功能列表、支持的模型、跨平台可用性。',
          '[Google AI Edge Gallery 发布博客文章](https://developers.googleblog.com/google-ai-edge-gallery-now-with-audio-and-on-google-play/) — 2025 年 9 月 9 日关于音频支持和 Google Play 上架的公告。',
          '[Private LLM 官方网站](https://privatellm.app/en) — 定价、隐私说明、快捷指令集成、平台支持。',
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
          '[本地 LLM 软件目录 2026](/zh/directory) — 所有平台的综合应用和工具目录。',
        ],
      },
    },
  },
  }

