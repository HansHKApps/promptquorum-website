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
      'Loci is designed to make local AI feel like a normal assistant rather than a model-management project. It runs AI on iPhone, iPad, Android, Mac, and Windows, can work offline after setup, and positions itself as a privacy-first alternative to cloud AI services. The practical question is not whether local inference is possible — it is whether Loci gives you enough quality and control without the model downloads, storage use, and configuration that more technical local-LLM apps require.',
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
      '**Loci is most compelling if your priority is low-friction, on-device AI rather than maximum model control.** It may be the better first local-AI app for users who want private offline chat without treating their phone like a miniature ML workstation. Loci works on iPhone, iPad, Android, Mac, and Windows — no setup of GGUF files, no quantization choices — just download the app and pick a model. Users who want to select quantizations, import models, benchmark performance, or run larger model libraries should compare it with more technical alternatives like Private LLM or PocketPal AI.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Loci for private, offline AI?',
        answer:
          'Use Loci if you want private on-device chat without model-management friction, across iPhone, Android, iPad, Mac, or Windows. Skip it if you need frontier reasoning quality, live web knowledge without connectivity, or deep control over model selection and quantization — those are better served by cloud AI or more technical local-LLM apps like Private LLM.',
        bullets: [
          'Free, no subscription, works on 5 platforms (iPhone/iPad/Android/Mac/Windows).',
          'Offline-capable after app and model download/setup.',
          'No account, no tracking, conversations stay on-device per developer claims.',
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
          'Loci is a free on-device AI app for iPhone, iPad, Android, Mac, and Windows.',
          'It offers two model paths: Apple\'s system foundation model (where supported) or downloadable open-source models (Gemma, Qwen, Llama, Phi).',
          'Setup is minimal — no GGUF files, no quantization choices, just download and chat.',
          'Privacy claim: conversations stay on-device; optional features (web search, voice) require internet.',
          'Ideal for privacy-conscious users who want simplicity over advanced model control.',
          'Not ideal for users needing frontier reasoning, live web knowledge, or GGUF/quantization flexibility.',
          'Exact model availability and device/OS support can change — check official listings before assuming consistency.',
        ],
      },
      whatIsLoci: {
        id: 'what-is-loci',
        title: 'What Loci Is',
        content: [
          'Loci is a consumer-focused, on-device AI assistant available on iPhone (iOS 18.0+), iPad (iPadOS 18.0+), Android, Mac, and Windows. The developer is Michael Waldman; the app is free with no subscription, no ads, no account requirement.',
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
          '**Downloadable open-source models** — users can download compact models (Gemma, Qwen, Llama, Phi) into Loci once. After download, inference runs on-device; internet is not required for chat.',
        ],
        note: 'The exact device/OS thresholds for which platforms get Apple foundation-model support vs. must download a model are not publicly documented. Assume that support varies by device, OS version, app version, storage, and region — do not expect identical behavior across your devices.',
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
            'Benefit': 'Works without live web knowledge',
            'What it means in real use': 'Chat does not hallucinate about today\'s news or live events.',
            'Limitation / caveat': 'Conversely, the model cannot look up current information. Optional DuckDuckGo web search requires connectivity and only works when enabled.',
          },
          {
            'Benefit': 'Long-context and complex reasoning',
            'What it means in real use': 'Suitable for drafting, summarizing, and structured Q&A on local content.',
            'Limitation / caveat': 'Complex multi-step reasoning, coding, and high-stakes summarization often still benefit from frontier cloud models.',
          },
        ],
      },
      platforms: {
        id: 'platforms',
        title: 'Loci on Each Platform',
        columns: ['Platform', 'What to expect', 'Important caveat'],
        rows: [
          {
            'Platform': 'iPhone',
            'What to expect': 'Loci works on iOS 18.0+. Can use Apple\'s on-device foundation model or download a compact open-source model. Chat, photo analysis, voice mode, and calendar integration available.',
            'Important caveat': 'iOS 18+ requirement excludes older iPhones. Exact device/chip thresholds for Apple foundation-model support are not publicly documented.',
          },
          {
            'Platform': 'iPad',
            'What to expect': 'Loci works on iPadOS 18.0+, with the same model paths as iPhone. Larger screen is better for long conversations and document review.',
            'Important caveat': 'Larger models may still be constrained by available VRAM; no performance guarantees per model or device tier.',
          },
          {
            'Platform': 'Android',
            'What to expect': 'Available on Google Play. Can download open-source models (Gemma, Qwen, Llama, Phi). No built-in system model equivalent to Apple\'s foundation model.',
            'Important caveat': 'Performance varies widely across Android devices due to chipset, RAM, and OS version fragmentation.',
          },
          {
            'Platform': 'Mac',
            'What to expect': 'Available on the Mac App Store. Can use Apple\'s on-device foundation model or download open-source models. Useful for longer sessions, larger screens, and external keyboards.',
            'Important caveat': 'Mac-specific Apple model support status is not separately documented; check App Store listing or official site for current compatibility.',
          },
          {
            'Platform': 'Windows',
            'What to expect': 'Available via askloci.ai or a Windows store build. Can download open-source models. Voice input requires internet connection (unlike other platforms).',
            'Important caveat': 'Windows support is the least documented of the five platforms. No built-in system model equivalent.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'Loci vs. Alternatives',
        columns: ['App', 'Best for', 'Setup level', 'Model flexibility', 'Platform focus', 'Important limitation'],
        rows: [
          {
            'App': 'Loci',
            'Best for': 'Low-friction cross-platform private chat',
            'Setup level': 'Minimal (download, chat)',
            'Model flexibility': 'Curated library of ~10 models; cannot import GGUF',
            'Platform focus': 'iPhone/iPad/Android/Mac/Windows (5 platforms)',
            'Important limitation': 'Model choice is limited; no GGUF import; advanced users may find it restrictive',
          },
          {
            'App': 'Private LLM',
            'Best for': 'Apple-only users wanting advanced model selection',
            'Setup level': 'Low-to-medium (one-time purchase, model downloads)',
            'Model flexibility': '140+ models, OmniQuant and GPTQ quantization formats',
            'Platform focus': 'iPhone/iPad/Mac (Apple only, one purchase across all devices)',
            'Important limitation': 'Apple-only; one-time purchase price not disclosed on their site',
          },
          {
            'App': 'PocketPal AI',
            'Best for': 'Users wanting full GGUF import and model control',
            'Setup level': 'Medium (free, but requires model file sourcing)',
            'Model flexibility': 'Any GGUF file from Hugging Face or elsewhere',
            'Platform focus': 'iPhone/iPad (primarily Apple, some Android support)',
            'Important limitation': 'Requires comfort with GGUF files and model selection; more complex setup than Loci',
          },
          {
            'App': 'Google AI Edge Gallery',
            'Best for': 'Experimental model exploration with advanced features',
            'Setup level': 'Medium-to-high (more features, more discovery needed)',
            'Model flexibility': 'Gemma 4 centerpiece; supports multiple open-source models; can load custom models',
            'Platform focus': 'Android-first (iOS, macOS also supported)',
            'Important limitation': 'More experimental/technical than consumer chat app; not a straightforward Loci replacement',
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
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Loci',
        items: [
          '**User expecting frontier reasoning or coding.** Loci\'s curated model library tops out at models like Llama 3.2 3B, Gemma 3 4B, Qwen 3 1.7B — all solid, but not in the class of GPT-4o or Claude 3 Opus for complex reasoning.',
          '**User needing live web knowledge offline.** Loci has optional DuckDuckGo web search, but it requires internet. The local models have no concept of "today" or current events.',
          '**Developer wanting comprehensive model/inference control.** If you need to benchmark different quantizations, compare token/second speeds, or tune sampling parameters, Private LLM or PocketPal AI offer more depth.',
          '**User building a full offline voice assistant.** Loci has a "voice mode" feature, but the implementation (whether local ASR/TTS or Apple system APIs) is not publicly documented. For a sourced, fully offline voice stack, see [Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) for the recommended Whisper + LLM + TTS pipeline.',
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
            a: 'iOS: Loci requires iOS 18.0+, which excludes iPhone XS and older. Android: Loci works on most modern Android phones (exact minimum OS version not specified by the developer), but performance depends on available RAM and the selected model. Mac: requires a recent macOS version supporting the system foundation model. Windows: generally works on modern Windows 10/11 machines with sufficient disk space for a model.',
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
            a: 'The app itself is small (~100 MB). Model files depend on which you choose: compact models (Phi-4 Mini, Gemma 3 1B, SmolLM) are 1–3 GB; larger models (Llama 3.2 3B, Gemma 3 4B, Qwen 3) are 2–5 GB. If you have multiple models downloaded, total usage can reach 10+ GB. Plan accordingly on devices with limited storage.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Loci is most compelling if your priority is low-friction, on-device AI rather than maximum model control. It may be the better first local-AI app for users who want private offline chat without treating their phone like a miniature ML workstation. Users who want to select quantizations, import models, benchmark performance, or run larger model libraries should compare it with more technical alternatives like Private LLM or PocketPal AI. For Apple users specifically, Private LLM offers 140+ models and advanced configuration; for Android users seeking a competitive alternative to Loci, Google AI Edge Gallery offers more experimental on-device model exploration. The honest assessment: Loci succeeds at simplicity. It fails only when simplicity is not what you need.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Loci official site](https://askloci.ai) — product overview, platform downloads.',
          '[Loci on the App Store](https://apps.apple.com/us/app/loci-private-local-ai/id6762100748) — iOS availability, privacy nutrition label, minimum OS requirements.',
          '[Loci on Google Play](https://play.google.com/store/apps/details?id=com.loci.ai) — Android availability.',
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
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 3 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — model-layer companion; benchmarks and quality trade-offs on mobile.',
          '[Build a Local Voice Assistant on Your Phone: Whisper + Local LLM (No Cloud)](/power-local-llm/voice-assistant-local-mobile-offline) — full offline voice pipeline (STT + LLM + TTS) with measured latency and battery data.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — comprehensive app and tool directory for all platforms.',
        ],
      },
    },
  },
}
