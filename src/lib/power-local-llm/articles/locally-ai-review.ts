// Locally AI Review: Private Offline LLMs on iPhone, iPad and Mac
// Slug: locally-ai-review
// Companion to: loci-ai-review-offline-local-ai, best-local-llm-apps-iphone-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/locally-ai-review-hero-en.webp',
    title: 'Locally AI Review (2026): Private Offline LLMs on iPhone, iPad and Mac',
    seoTitle: 'Locally AI Review 2026: Offline LLMs on Apple Devices',
    intro:
      'Locally AI, from developer [Locally AI](https://www.locallyai.app/), is an app for running open-source language models — including Llama, Gemma, Qwen, and DeepSeek — directly on iPhone, iPad, and Mac, optimized for Apple Silicon. Once a model has been downloaded, it runs fully on-device: no internet connection is required to chat, and the developer\'s privacy-first positioning means conversations are not sent to a cloud service for inference. The practical question for anyone considering it is not whether on-device inference on Apple hardware is possible — Apple Silicon has enough neural and GPU throughput to make it work — but whether Locally AI gives you a workable app experience around that inference without needing to hand-pick GGUF files, tune quantization settings, or calculate VRAM headroom yourself.',
    metaDescription:
      'Locally AI review: is it worth using for private, offline LLMs on iPhone, iPad and Mac? How it works with Llama, Gemma, Qwen and DeepSeek, who it suits, and how it compares with Loci and Private LLM.',
    twitterDescription:
      'Locally AI review 2026: run Llama, Gemma, Qwen and DeepSeek fully offline on iPhone, iPad and Mac — optimized for Apple Silicon. Privacy positioning, platform fit, and how it compares with Loci and Private LLM.',
    audience:
      'Apple-device users deciding between running on-device LLMs via Locally AI versus cloud AI services or other local-LLM apps — covers platform fit, privacy positioning, model support, and how it compares with similar offline-first apps.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visit Locally AI official site →', url: 'https://[www.locallyai.app](https://www.locallyai.app/)/', productName: 'Locally AI', productCategory: 'software' },
    ],
    primaryTerm: 'Locally AI review',
    targetKeywords: [
      'locally ai review',
      'locally ai app',
      'locally ai iphone',
      'locally ai mac',
      'offline llm iphone',
      'run llama on iphone',
      'locally ai vs loci',
      'apple silicon local llm app',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Silicon'],
    leadAnswerBlock:
      '**Locally AI is most compelling if you want a straightforward, privacy-first app for chatting with open models like Llama, Gemma, Qwen, and DeepSeek entirely on an Apple device.** It runs on iPhone, iPad, and Mac, is optimized for Apple Silicon, and once a model is downloaded it works fully offline — no cloud calls, no internet connection required to chat. It is built for users who want private, on-device AI without leaving the Apple ecosystem or managing inference infrastructure themselves. Users who need Windows or Android support, want to import arbitrary custom GGUF files, or need frontier-level reasoning beyond what open models in the multi-billion-parameter range can deliver on a phone or tablet should compare it with cross-platform apps like Loci or manage models directly with a tool like Ollama on a Mac.',
    quickAnswerTop: {
      en: {
        question: 'Should I use Locally AI for offline LLMs on iPhone or Mac?',
        answer:
          'Use Locally AI if you want to chat with open models like Llama, Gemma, Qwen, or DeepSeek fully offline on iPhone, iPad, or Mac, with no cloud calls once a model is downloaded. Skip it if you need Windows or Android support, or want to import your own custom GGUF files outside the app\'s supported model set.',
        bullets: [
          'Runs Llama, Gemma, Qwen and DeepSeek fully on-device.',
          'Platforms: iPhone, iPad and Mac — optimized for Apple Silicon.',
          'No internet connection required to chat once a model is downloaded.',
          'Privacy-first positioning: no cloud calls for inference.',
          'Apple-only — no Windows or Android app.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Locally AI Is', anchor: 'what-is-locally-ai' },
      { label: 'Models Locally AI Supports', anchor: 'models-supported' },
      { label: 'Locally AI on Each Platform', anchor: 'platforms-hardware' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Locally AI vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Locally AI', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Locally AI', anchor: 'who-should-not-use' },
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
        snippetBlocks: [
          { type: 'one-sentence', text: 'Locally AI is an app for iPhone, iPad, and Mac that runs open-source language models — Llama, Gemma, Qwen, and DeepSeek among them — fully on-device and optimized for Apple Silicon, so once a model is downloaded no internet connection or cloud call is needed to chat.' },
          { type: 'plain-terms', text: 'Instead of sending your messages to a company\'s servers, Locally AI downloads a compact AI model onto your iPhone, iPad, or Mac and runs it right there. You can turn on airplane mode after the model finishes downloading and it keeps working, because the developer\'s privacy-first design means nothing about the conversation itself needs to leave your device.' },
        ],
        items: [
          'Locally AI runs open-source models — Llama, Gemma, Qwen, and DeepSeek — fully offline, on-device.',
          'Platforms: iPhone, iPad, and Mac, optimized for Apple Silicon.',
          'No internet connection is required once a model has been downloaded.',
          'Privacy-first positioning: the developer states inference happens on-device with no cloud calls.',
          'Apple-only — there is no Windows or Android release, so cross-platform users on other operating systems need a different app.',
          'The core trade-off with any phone- and tablet-class on-device app: model sizes that fit comfortably on mobile hardware trail frontier cloud models on complex, multi-step reasoning tasks.',
        ],
        callouts: [
          { type: 'note', text: 'This review is based on publicly stated facts from [locallyai.app](https://www.locallyai.app/) and the app\'s official listings. Pricing, exact model list, storage sizes, and minimum OS versions were not independently verified at the time of writing — confirm current details on the official site or App Store listing before downloading.' },
        ],
      },
      whatIsLocallyAI: {
        id: 'what-is-locally-ai',
        title: 'What Is Locally AI?',
        content: [
          '**Locally AI is an app that runs open-source language models directly on iPhone, iPad, and Mac, without sending conversations to a cloud service.** It is built and optimized for Apple Silicon, the chip architecture Apple uses across its current iPhone, iPad, and Mac lineup, which means the app is designed to take advantage of the on-device neural and GPU hardware those chips provide rather than treating the phone as a thin client for a remote server.',
          'The core model set includes Llama (Meta\'s open-weight model family), Gemma (Google\'s open-weight model family), Qwen (Alibaba\'s open-weight model family), and DeepSeek (DeepSeek\'s open-weight model family) — all of which are open-source models that can be distributed as standalone files and run without a vendor-controlled API. Locally AI packages access to these models inside a single mobile- and desktop-friendly interface, so the user does not need to source model files independently or run a separate inference server.',
          'Once a model has finished downloading to the device, Locally AI does not require an internet connection to generate responses — inference runs locally using the device\'s own processor and memory. This is the practical meaning of "offline": the app can work in airplane mode, on a flight, or anywhere without connectivity, as long as the model was downloaded beforehand.',
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'What Models Does Locally AI Support?',
        content: [
          '**Locally AI supports several major open-source model families — Llama, Gemma, Qwen, and DeepSeek — plus other open models, all runnable fully on-device.** These four families cover a broad range of use cases and represent some of the most widely used open-weight models available today, each maintained by a different organization (Meta, Google, Alibaba, and DeepSeek respectively).',
        ],
        items: [
          '**Llama** — Meta\'s open-weight model family, widely used as a general-purpose chat and reasoning baseline across the local-LLM ecosystem.',
          '**Gemma** — Google\'s open-weight model family, built from the same research lineage as Google\'s Gemini models and commonly used for on-device and edge deployments.',
          '**Qwen** — Alibaba\'s open-weight model family, known for strong multilingual support and a wide range of model sizes suited to constrained hardware.',
          '**DeepSeek** — DeepSeek\'s open-weight model family, recognized for competitive reasoning performance relative to model size.',
          '**Other open models** — Locally AI states it supports additional open models beyond these four flagship families, broadening the choice of what can run on-device.',
        ],
        note: 'Locally AI does not publish a full changelog of exact model versions, parameter-count variants, or storage sizes on its public marketing pages at the time of writing. Check the app\'s in-app model list or the official site at [locallyai.app](https://www.locallyai.app/) for the current, exact set of downloadable models before choosing one for your device\'s available storage.',
      },
      platformsHardware: {
        id: 'platforms-hardware',
        itemHeadings: true,
        title: 'Locally AI on Each Platform',
        columns: ['Platform', 'What to expect', 'Important note'],
        rows: [
          {
            'Platform': 'iPhone',
            'What to expect': 'Locally AI runs on iPhone, with the app optimized for Apple Silicon\'s on-device neural and GPU hardware. Once a supported model is downloaded, chat works fully offline.',
            'Important note': 'Exact minimum iOS version and per-device performance are not published on the app\'s public marketing pages — check the App Store listing for current device compatibility before downloading.',
          },
          {
            'Platform': 'iPad',
            'What to expect': 'Locally AI runs on iPad, sharing the same on-device model set and offline behavior as iPhone. The larger screen and, on many iPad models, comparable or stronger Apple Silicon performance can make longer sessions more comfortable.',
            'Important note': 'As with iPhone, check current minimum iPadOS version and storage requirements on the App Store before downloading a model.',
          },
          {
            'Platform': 'Mac',
            'What to expect': 'Locally AI runs on Mac, where Apple Silicon (M-series chips) typically offers more unified memory than iPhone or iPad, which can matter for the largest models the app supports.',
            'Important note': 'Locally AI is optimized for Apple Silicon Macs; behavior on Intel-based Macs is not addressed on the app\'s public marketing pages — verify Mac chip compatibility before installing.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Privacy-first, on-device inference',
            'What it means in real use': 'Once a model is downloaded, conversations are processed on-device rather than sent to a cloud service for inference.',
            'Limitation / caveat': 'The initial app install and model download themselves require an internet connection, and any future app updates likely will too.',
          },
          {
            'Benefit': 'Offline-capable after model download',
            'What it means in real use': 'Chat works without an internet connection once setup is complete — useful for flights, travel, or areas with unreliable connectivity.',
            'Limitation / caveat': 'You must plan ahead and download the model you want to use while you still have a connection.',
          },
          {
            'Benefit': 'Optimized for Apple Silicon',
            'What it means in real use': 'The app is built to take advantage of the on-device neural and GPU hardware in current-generation iPhone, iPad, and Mac chips.',
            'Limitation / caveat': 'This also means Locally AI is Apple-only — there is no Windows or Android version for users on those platforms.',
          },
          {
            'Benefit': 'Access to multiple open model families in one app',
            'What it means in real use': 'Llama, Gemma, Qwen, and DeepSeek — plus other open models — are available from a single interface without manually sourcing model files.',
            'Limitation / caveat': 'The exact list of downloadable models and their storage sizes is not published in full on the app\'s public marketing pages; check the app itself for the current selection.',
          },
          {
            'Benefit': 'No recurring cloud inference cost',
            'What it means in real use': 'Because inference runs on your own device, there is no per-message or per-token API bill for chats handled on-device.',
            'Limitation / caveat': 'On-device inference uses your device\'s battery and processing power, and app pricing itself was not independently verified for this review — check the current App Store listing.',
          },
          {
            'Benefit': 'Single ecosystem across iPhone, iPad, and Mac',
            'What it means in real use': 'Apple users can use the same app family across their phone, tablet, and computer.',
            'Limitation / caveat': 'Users who split their work across Windows or Android devices will need a separate app for those platforms.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Locally AI vs. Alternatives',
        columns: ['App', 'Best for', 'Platform focus', 'Model flexibility', 'Key limitation'],
        rows: [
          {
            'App': 'Locally AI',
            'Best for': 'Apple users wanting a straightforward, privacy-first app for major open model families',
            'Platform focus': 'iPhone/iPad/Mac (Apple Silicon-optimized)',
            'Model flexibility': 'Llama, Gemma, Qwen, DeepSeek, plus other open models',
            'Key limitation': 'Apple-only — no Windows or Android app',
          },
          {
            'App': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Best for': 'Cross-platform users wanting low-friction private chat on more devices',
            'Platform focus': 'iPhone/iPad/Android/Mac/Windows (5 platforms)',
            'Model flexibility': 'Curated library including Gemma, Qwen, Llama, and Phi; no custom GGUF import',
            'Key limitation': 'Model choice limited to a curated library; cannot import custom GGUF files',
          },
          {
            'App': 'Private LLM',
            'Best for': 'Apple users wanting deep model and quantization control',
            'Platform focus': 'iPhone/iPad/Mac (Apple only)',
            'Model flexibility': '140+ models with OmniQuant and GPTQ quantization formats',
            'Key limitation': 'More configuration overhead than an app built around simplicity',
          },
          {
            'App': 'Ollama (on Mac)',
            'Best for': 'Developers wanting full command-line control and API access on Mac',
            'Platform focus': 'Mac/Windows/Linux (desktop-only, no native mobile app)',
            'Model flexibility': 'Any model in Ollama\'s library, plus custom GGUF import',
            'Key limitation': 'Command-line-first workflow; no native iPhone or iPad app',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Locally AI',
        items: [
          '**Apple-only users who want a single app across iPhone, iPad, and Mac.** If you are fully in the Apple ecosystem and do not need Windows or Android support, Locally AI covers all three of your device types with one app.',
          '**Privacy-conscious users who want on-device inference by default.** Once a model is downloaded, conversations do not need cloud connectivity to be processed — a straightforward fit for users who prioritize keeping chat content off remote servers.',
          '**Travelers and users with inconsistent connectivity.** Because chat works fully offline after the model download, flights, remote areas, or unreliable networks do not interrupt the app\'s core function.',
          '**Users who want access to several major open model families without sourcing files themselves.** Llama, Gemma, Qwen, and DeepSeek are available from inside the app, without needing to find and manage individual model files.',
          '**Users who want to try leading open-source models on Apple hardware without cloud costs.** Since inference runs on-device, there is no per-message API bill for chats handled locally.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Locally AI',
        items: [
          '**Windows or Android users.** Locally AI is Apple-only (iPhone, iPad, Mac); users on other platforms need a different app, such as [Loci](/power-local-llm/loci-ai-review-offline-local-ai), which covers five platforms including Windows and Android.',
          '**Users who want to import arbitrary custom GGUF files.** If your workflow depends on running a specific fine-tuned or niche model file from Hugging Face rather than choosing from Locally AI\'s supported model families, a more manual tool built around GGUF import will fit better.',
          '**Users expecting frontier-model reasoning quality.** Open models sized to run comfortably on a phone or tablet trade some reasoning depth for that portability; users with high-stakes analysis, complex multi-step reasoning, or coding-heavy workloads may still want a frontier cloud model for those specific tasks.',
          '**Developers who want command-line or API-first control.** Users who want to script inference, integrate with existing tooling, or run models headlessly on a Mac may prefer a developer-first tool like Ollama alongside or instead of a consumer chat app.',
          '**Anyone who has not reviewed the app\'s current privacy policy and pricing for their specific use case.** This review reflects publicly stated facts at the time of writing; confirm current pricing, exact model list, and privacy details on the [official site](https://www.locallyai.app/) or App Store listing before relying on the app for sensitive use cases.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is Locally AI?',
            a: 'Locally AI is an app for iPhone, iPad, and Mac that runs open-source language models — including Llama, Gemma, Qwen, and DeepSeek — directly on the device, optimized for Apple Silicon. Once a model is downloaded, it works fully offline with no internet connection required to chat.',
          },
          {
            q: 'Does Locally AI work without an internet connection?',
            a: 'Yes, for chat. Once the app is installed and a model has been downloaded, inference runs on-device and does not require an internet connection — the app can be used in airplane mode. An internet connection is required to install the app and to download a model initially.',
          },
          {
            q: 'Which models does Locally AI support?',
            a: 'Locally AI supports several major open-source model families: Llama (Meta), Gemma (Google), Qwen (Alibaba), and DeepSeek, plus other open models. The exact list of downloadable models and their storage sizes is available inside the app or on the official site, [locallyai.app](https://www.locallyai.app/).',
          },
          {
            q: 'Is Locally AI available on Android or Windows?',
            a: 'No. Locally AI is built for iPhone, iPad, and Mac and is optimized for Apple Silicon. Users on Android or Windows who want a similar offline-first, privacy-focused app should look at cross-platform alternatives, such as Loci, which supports iPhone, iPad, Android, Mac, and Windows.',
          },
          {
            q: 'Is Locally AI private?',
            a: 'Locally AI is positioned as privacy-first: once a model is downloaded, inference happens on-device rather than through cloud calls. For the current, complete privacy policy — including any data the app itself collects for diagnostics or analytics — check the official site or the app\'s App Store privacy nutrition label, since this review reflects publicly stated facts and was not able to independently verify every technical privacy claim.',
          },
          {
            q: 'How much storage does Locally AI need?',
            a: 'Storage requirements depend on which model or models you download; open model files at the sizes typically used for on-device inference can range from roughly 1 GB to several GB each. Exact current storage sizes for each supported model are not published in full on the app\'s public marketing pages — check the in-app model list before downloading, especially on devices with limited free storage.',
          },
          {
            q: 'Can Locally AI replace ChatGPT or Claude?',
            a: 'For tasks suited to open-source models running on mobile or desktop hardware — drafting, summarizing, general Q&A, private note-taking — Locally AI can work as a private, offline alternative. For frontier-level reasoning, the most complex coding tasks, or live web-grounded answers, cloud models like ChatGPT or Claude remain more capable, since they run much larger models than what fits comfortably on a phone or tablet.',
          },
          {
            q: 'How does Locally AI compare with Loci?',
            a: 'Locally AI is Apple-only (iPhone, iPad, Mac) and optimized specifically for Apple Silicon, supporting Llama, Gemma, Qwen, DeepSeek, and other open models. Loci covers five platforms — iPhone, iPad, Android, Mac, and Windows — with a curated model library. Choose Locally AI if you are fully in the Apple ecosystem; choose Loci if you need Android or Windows support too. See our full [Loci AI review](/power-local-llm/loci-ai-review-offline-local-ai) for more detail.',
          },
          {
            q: 'Do I need a specific iPhone, iPad, or Mac model to use Locally AI?',
            a: 'Locally AI is optimized for Apple Silicon, so devices with an Apple Silicon chip are the intended target. The app\'s public marketing pages do not list an exact minimum device or OS version at the time of writing — check the current App Store listing for Locally AI\'s stated minimum requirements before downloading.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Locally AI is a straightforward choice for Apple users who want a privacy-first, on-device app for chatting with major open-source model families — Llama, Gemma, Qwen, and DeepSeek — without leaving the Apple ecosystem or managing model files manually. Its Apple Silicon optimization and fully offline operation after model download make it well suited to users who prioritize keeping conversations off remote servers and who want an app experience rather than a command-line workflow. The trade-off is platform scope: Locally AI does not cover Windows or Android, so users who need those platforms should look at a cross-platform app like [Loci](/power-local-llm/loci-ai-review-offline-local-ai) instead. Users who want to import arbitrary custom GGUF files or need deeper quantization control should compare it with more configuration-heavy tools like Private LLM or Ollama. For its intended audience — Apple users who want private, offline access to leading open models without technical overhead — Locally AI fills a clear niche.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Locally AI official site](https://www.locallyai.app/) — product overview, supported model families, platform availability.',
          '[Loci official site](https://askloci.ai) — cross-platform comparison reference.',
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — companion review used for the alternatives comparison in this article.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — a cross-platform alternative covering iPhone, iPad, Android, Mac, and Windows.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the iPhone app roundup; includes PocketPal AI, Private LLM, MLC Chat, LLM Farm, and Apple Intelligence.',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — device-focused guide for on-device and remote inference on tablets.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — model-layer companion; benchmarks and quality trade-offs on mobile.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — comprehensive app and tool directory for all platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/locally-ai-review-hero-de.webp',
    title: 'Locally AI Review (2026): Private Offline-LLMs auf iPhone, iPad und Mac',
    seoTitle: 'Locally AI Review 2026: Offline-LLMs auf Apple-Geräten',
    intro:
      'Locally AI vom Entwickler [Locally AI](https://www.locallyai.app/) ist eine App, mit der Open-Source-Sprachmodelle — darunter Llama, Gemma, Qwen und DeepSeek — direkt auf iPhone, iPad und Mac laufen, optimiert für Apple Silicon. Sobald ein Modell heruntergeladen wurde, läuft es vollständig auf dem Gerät: Für den Chat ist keine Internetverbindung nötig, und die Privacy-first-Ausrichtung des Entwicklers bedeutet, dass Unterhaltungen nicht zur Inferenz an einen Cloud-Dienst gesendet werden. Die praktische Frage für alle, die die App in Betracht ziehen, lautet nicht, ob On-Device-Inferenz auf Apple-Hardware möglich ist — Apple Silicon bietet genug Neural- und GPU-Leistung dafür —, sondern ob Locally AI drumherum eine funktionierende App-Erfahrung bietet, ohne dass man selbst GGUF-Dateien auswählen, Quantisierungen einstellen oder VRAM-Bedarf berechnen muss.',
    metaDescription:
      'Locally AI Review: Lohnt sich die App für private, offline laufende LLMs auf iPhone, iPad und Mac? Wie sie mit Llama, Gemma, Qwen und DeepSeek funktioniert, für wen sie geeignet ist und wie sie im Vergleich zu Loci und Private LLM abschneidet.',
    twitterDescription:
      'Locally AI Review 2026: Llama, Gemma, Qwen und DeepSeek vollständig offline auf iPhone, iPad und Mac ausführen — optimiert für Apple Silicon. Privacy-Ausrichtung, Plattform-Eignung und Vergleich mit Loci und Private LLM.',
    audience:
      'Apple-Nutzer, die zwischen On-Device-LLMs über Locally AI und Cloud-KI-Diensten oder anderen lokalen LLM-Apps abwägen — behandelt Plattform-Eignung, Datenschutz-Ausrichtung, Modellunterstützung und den Vergleich mit ähnlichen offline-first Apps.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Zur offiziellen Locally AI-Website →', url: 'https://[www.locallyai.app](https://www.locallyai.app/)/', productName: 'Locally AI', productCategory: 'software' },
    ],
    primaryTerm: 'Locally AI Review',
    targetKeywords: [
      'locally ai review',
      'locally ai app',
      'locally ai iphone',
      'locally ai mac',
      'offline llm iphone',
      'llama auf iphone ausführen',
      'locally ai vs loci',
      'apple silicon local llm app',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Silicon'],
    leadAnswerBlock:
      '**Locally AI überzeugt vor allem, wenn Sie eine unkomplizierte, privacy-first App für den Chat mit offenen Modellen wie Llama, Gemma, Qwen und DeepSeek vollständig auf einem Apple-Gerät suchen.** Die App läuft auf iPhone, iPad und Mac, ist für Apple Silicon optimiert, und sobald ein Modell heruntergeladen ist, funktioniert sie vollständig offline — keine Cloud-Aufrufe, keine Internetverbindung für den Chat nötig. Sie richtet sich an Nutzer, die private, On-Device-KI wollen, ohne das Apple-Ökosystem zu verlassen oder Inferenz-Infrastruktur selbst zu verwalten. Wer Windows- oder Android-Unterstützung braucht, beliebige eigene GGUF-Dateien importieren möchte oder Reasoning auf Frontier-Niveau jenseits dessen benötigt, was offene Modelle im Bereich weniger Milliarden Parameter auf einem Smartphone oder Tablet leisten können, sollte Alternativen wie Loci vergleichen oder Modelle direkt mit einem Tool wie Ollama auf einem Mac verwalten.',
    quickAnswerTop: {
      de: {
        question: 'Sollte ich Locally AI für offline laufende LLMs auf iPhone oder Mac nutzen?',
        answer:
          'Nutzen Sie Locally AI, wenn Sie mit offenen Modellen wie Llama, Gemma, Qwen oder DeepSeek vollständig offline auf iPhone, iPad oder Mac chatten möchten, ohne Cloud-Aufrufe, sobald ein Modell heruntergeladen ist. Verzichten Sie darauf, wenn Sie Windows- oder Android-Unterstützung brauchen oder eigene GGUF-Dateien außerhalb des von der App unterstützten Modell-Sets importieren möchten.',
        bullets: [
          'Führt Llama, Gemma, Qwen und DeepSeek vollständig auf dem Gerät aus.',
          'Plattformen: iPhone, iPad und Mac — optimiert für Apple Silicon.',
          'Keine Internetverbindung für den Chat nötig, sobald ein Modell heruntergeladen ist.',
          'Privacy-first-Ausrichtung: keine Cloud-Aufrufe für die Inferenz.',
          'Nur für Apple-Geräte — keine Windows- oder Android-App.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was Locally AI ist', anchor: 'what-is-locally-ai' },
      { label: 'Welche Modelle Locally AI unterstützt', anchor: 'models-supported' },
      { label: 'Locally AI auf jeder Plattform', anchor: 'platforms-hardware' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Locally AI vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Für wen sich Locally AI eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich Locally AI nicht eignet', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Locally AI ist eine App für iPhone, iPad und Mac, die Open-Source-Sprachmodelle — darunter Llama, Gemma, Qwen und DeepSeek — vollständig auf dem Gerät ausführt und für Apple Silicon optimiert ist, sodass nach dem Herunterladen eines Modells weder Internetverbindung noch Cloud-Aufruf für den Chat nötig sind.' },
          { type: 'plain-terms', text: 'Statt Nachrichten an die Server eines Unternehmens zu senden, lädt Locally AI ein kompaktes KI-Modell auf Ihr iPhone, iPad oder Ihren Mac herunter und führt es dort aus. Sie können nach dem Download den Flugmodus aktivieren, und die App funktioniert weiter — denn dank der Privacy-first-Auslegung des Entwicklers muss nichts an der Unterhaltung selbst Ihr Gerät verlassen.' },
        ],
        items: [
          'Locally AI führt Open-Source-Modelle — Llama, Gemma, Qwen und DeepSeek — vollständig offline auf dem Gerät aus.',
          'Plattformen: iPhone, iPad und Mac, optimiert für Apple Silicon.',
          'Sobald ein Modell heruntergeladen wurde, ist keine Internetverbindung mehr nötig.',
          'Privacy-first-Ausrichtung: Der Entwickler gibt an, dass die Inferenz auf dem Gerät stattfindet, ohne Cloud-Aufrufe.',
          'Nur für Apple-Geräte — es gibt keine Windows- oder Android-Version, plattformübergreifende Nutzer auf anderen Betriebssystemen brauchen eine andere App.',
          'Der zentrale Kompromiss bei jeder On-Device-App für Smartphone und Tablet: Modellgrößen, die bequem auf mobiler Hardware laufen, liegen bei komplexen, mehrstufigen Reasoning-Aufgaben hinter Frontier-Cloud-Modellen zurück.',
        ],
        callouts: [
          { type: 'note', text: 'Diese Bewertung basiert auf öffentlich zugänglichen Angaben von [locallyai.app](https://www.locallyai.app/) und den offiziellen App-Store-Einträgen. Preise, die genaue Modellliste, Speichergrößen und die Mindest-Betriebssystemversion wurden zum Zeitpunkt der Erstellung nicht unabhängig verifiziert — bestätigen Sie aktuelle Details vor dem Download auf der offiziellen Website oder im App-Store-Eintrag.' },
        ],
      },
      whatIsLocallyAI: {
        id: 'what-is-locally-ai',
        title: 'Was ist Locally AI?',
        content: [
          '**Locally AI ist eine App, die Open-Source-Sprachmodelle direkt auf iPhone, iPad und Mac ausführt, ohne Unterhaltungen an einen Cloud-Dienst zu senden.** Sie ist für Apple Silicon gebaut und optimiert — die Chip-Architektur, die Apple aktuell in iPhone, iPad und Mac einsetzt —, das heißt, die App ist darauf ausgelegt, die On-Device-Neural- und GPU-Hardware dieser Chips zu nutzen, statt das Telefon als schlanken Client für einen entfernten Server zu behandeln.',
          'Das Kern-Modellangebot umfasst Llama (Metas Open-Weight-Modellfamilie), Gemma (Googles Open-Weight-Modellfamilie), Qwen (Alibabas Open-Weight-Modellfamilie) und DeepSeek (DeepSeeks Open-Weight-Modellfamilie) — allesamt Open-Source-Modelle, die als eigenständige Dateien verteilt und ohne herstellergebundene API ausgeführt werden können. Locally AI bündelt den Zugriff auf diese Modelle in einer einzigen, für Mobilgeräte und Desktop geeigneten Oberfläche, sodass Nutzer Modelldateien nicht selbst beschaffen oder einen separaten Inferenz-Server betreiben müssen.',
          'Sobald ein Modell fertig auf das Gerät heruntergeladen wurde, benötigt Locally AI keine Internetverbindung, um Antworten zu generieren — die Inferenz läuft lokal über den Prozessor und Speicher des Geräts. Das ist die praktische Bedeutung von „offline": Die App funktioniert im Flugmodus, im Flugzeug oder überall ohne Verbindung, sofern das Modell vorher heruntergeladen wurde.',
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Welche Modelle unterstützt Locally AI?',
        content: [
          '**Locally AI unterstützt mehrere große Open-Source-Modellfamilien — Llama, Gemma, Qwen und DeepSeek — plus weitere offene Modelle, allesamt vollständig auf dem Gerät ausführbar.** Diese vier Familien decken ein breites Spektrum an Anwendungsfällen ab und zählen zu den meistgenutzten offenen Modellen überhaupt, jede von einer anderen Organisation gepflegt (Meta, Google, Alibaba beziehungsweise DeepSeek).',
        ],
        items: [
          '**Llama** — Metas Open-Weight-Modellfamilie, weit verbreitet als universelle Grundlage für Chat und Reasoning im gesamten Local-LLM-Ökosystem.',
          '**Gemma** — Googles Open-Weight-Modellfamilie, aus derselben Forschungslinie wie Googles Gemini-Modelle, häufig für On-Device- und Edge-Einsätze genutzt.',
          '**Qwen** — Alibabas Open-Weight-Modellfamilie, bekannt für starke mehrsprachige Unterstützung und ein breites Spektrum an Modellgrößen für eingeschränkte Hardware.',
          '**DeepSeek** — DeepSeeks Open-Weight-Modellfamilie, anerkannt für konkurrenzfähige Reasoning-Leistung im Verhältnis zur Modellgröße.',
          '**Weitere offene Modelle** — Locally AI gibt an, über diese vier Flaggschiff-Familien hinaus weitere offene Modelle zu unterstützen und erweitert damit die Auswahl dessen, was auf dem Gerät läuft.',
        ],
        note: 'Locally AI veröffentlicht auf seinen öffentlichen Marketing-Seiten zum Zeitpunkt der Erstellung kein vollständiges Änderungsprotokoll mit exakten Modellversionen, Parameter-Varianten oder Speichergrößen. Prüfen Sie die In-App-Modellliste oder die offizielle Website [locallyai.app](https://www.locallyai.app/) auf die aktuelle, genaue Auswahl herunterladbarer Modelle, bevor Sie eines für den verfügbaren Speicher Ihres Geräts wählen.',
      },
      platformsHardware: {
        id: 'platforms-hardware',
        itemHeadings: true,
        title: 'Locally AI auf jeder Plattform',
        columns: ['Plattform', 'Was Sie erwartet', 'Wichtiger Hinweis'],
        rows: [
          {
            'Plattform': 'iPhone',
            'Was Sie erwartet': 'Locally AI läuft auf dem iPhone, wobei die App auf die On-Device-Neural- und GPU-Hardware von Apple Silicon optimiert ist. Sobald ein unterstütztes Modell heruntergeladen ist, funktioniert der Chat vollständig offline.',
            'Wichtiger Hinweis': 'Die genaue Mindest-iOS-Version und die geräteabhängige Leistung sind auf den öffentlichen Marketing-Seiten der App nicht angegeben — prüfen Sie den App-Store-Eintrag auf aktuelle Gerätekompatibilität vor dem Download.',
          },
          {
            'Plattform': 'iPad',
            'Was Sie erwartet': 'Locally AI läuft auf dem iPad mit demselben On-Device-Modellangebot und Offline-Verhalten wie auf dem iPhone. Der größere Bildschirm und, bei vielen iPad-Modellen, vergleichbare oder stärkere Apple-Silicon-Leistung können längere Sitzungen angenehmer machen.',
            'Wichtiger Hinweis': 'Wie beim iPhone sollten Sie die aktuelle Mindest-iPadOS-Version und die Speicheranforderungen im App Store prüfen, bevor Sie ein Modell herunterladen.',
          },
          {
            'Plattform': 'Mac',
            'Was Sie erwartet': 'Locally AI läuft auf dem Mac, wo Apple Silicon (M-Serie-Chips) typischerweise über mehr Unified Memory verfügt als iPhone oder iPad — relevant für die größten Modelle, die die App unterstützt.',
            'Wichtiger Hinweis': 'Locally AI ist für Macs mit Apple Silicon optimiert; das Verhalten auf Intel-basierten Macs wird auf den öffentlichen Marketing-Seiten der App nicht behandelt — prüfen Sie die Chip-Kompatibilität Ihres Macs vor der Installation.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Was das im Alltag bedeutet', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Privacy-first, On-Device-Inferenz',
            'Was das im Alltag bedeutet': 'Sobald ein Modell heruntergeladen ist, werden Unterhaltungen auf dem Gerät verarbeitet, statt zur Inferenz an einen Cloud-Dienst gesendet zu werden.',
            'Einschränkung / Hinweis': 'Die anfängliche App-Installation und der Modell-Download selbst benötigen eine Internetverbindung, künftige App-Updates vermutlich ebenfalls.',
          },
          {
            'Vorteil': 'Offline-fähig nach Modell-Download',
            'Was das im Alltag bedeutet': 'Der Chat funktioniert nach abgeschlossener Einrichtung ohne Internetverbindung — nützlich für Flüge, Reisen oder Gebiete mit unzuverlässiger Verbindung.',
            'Einschränkung / Hinweis': 'Sie müssen vorausplanen und das gewünschte Modell herunterladen, solange noch eine Verbindung besteht.',
          },
          {
            'Vorteil': 'Optimiert für Apple Silicon',
            'Was das im Alltag bedeutet': 'Die App ist darauf ausgelegt, die On-Device-Neural- und GPU-Hardware aktueller iPhone-, iPad- und Mac-Chips zu nutzen.',
            'Einschränkung / Hinweis': 'Das bedeutet auch: Locally AI ist nur für Apple-Geräte verfügbar — es gibt keine Windows- oder Android-Version für Nutzer dieser Plattformen.',
          },
          {
            'Vorteil': 'Zugriff auf mehrere offene Modellfamilien in einer App',
            'Was das im Alltag bedeutet': 'Llama, Gemma, Qwen und DeepSeek — plus weitere offene Modelle — sind über eine einzige Oberfläche verfügbar, ohne Modelldateien manuell beschaffen zu müssen.',
            'Einschränkung / Hinweis': 'Die genaue Liste herunterladbarer Modelle und deren Speichergrößen ist auf den öffentlichen Marketing-Seiten der App nicht vollständig veröffentlicht — prüfen Sie die aktuelle Auswahl in der App selbst.',
          },
          {
            'Vorteil': 'Keine laufenden Cloud-Inferenzkosten',
            'Was das im Alltag bedeutet': 'Da die Inferenz auf dem eigenen Gerät läuft, entstehen für auf dem Gerät verarbeitete Chats keine API-Kosten pro Nachricht oder Token.',
            'Einschränkung / Hinweis': 'On-Device-Inferenz beansprucht Akku und Rechenleistung des Geräts, und die App-Preisgestaltung selbst wurde für diese Bewertung nicht unabhängig verifiziert — prüfen Sie den aktuellen App-Store-Eintrag.',
          },
          {
            'Vorteil': 'Ein Ökosystem für iPhone, iPad und Mac',
            'Was das im Alltag bedeutet': 'Apple-Nutzer können dieselbe App-Familie auf Telefon, Tablet und Computer verwenden.',
            'Einschränkung / Hinweis': 'Nutzer, die ihre Arbeit auf Windows- oder Android-Geräte verteilen, benötigen für diese Plattformen eine separate App.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Locally AI vs. Alternativen',
        columns: ['App', 'Am besten für', 'Plattform-Fokus', 'Modellflexibilität', 'Wichtigste Einschränkung'],
        rows: [
          {
            'App': 'Locally AI',
            'Am besten für': 'Apple-Nutzer, die eine unkomplizierte, privacy-first App für große Open-Modellfamilien wollen',
            'Plattform-Fokus': 'iPhone/iPad/Mac (optimiert für Apple Silicon)',
            'Modellflexibilität': 'Llama, Gemma, Qwen, DeepSeek, plus weitere offene Modelle',
            'Wichtigste Einschränkung': 'Nur für Apple-Geräte — keine Windows- oder Android-App',
          },
          {
            'App': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Am besten für': 'Plattformübergreifende Nutzer, die unkomplizierten privaten Chat auf mehr Geräten wollen',
            'Plattform-Fokus': 'iPhone/iPad/Android/Mac/Windows (5 Plattformen)',
            'Modellflexibilität': 'Kuratierte Bibliothek u. a. mit Gemma, Qwen, Llama und Phi; kein Import eigener GGUF-Dateien',
            'Wichtigste Einschränkung': 'Modellauswahl auf kuratierte Bibliothek begrenzt; keine eigenen GGUF-Dateien importierbar',
          },
          {
            'App': 'Private LLM',
            'Am besten für': 'Apple-Nutzer, die tiefe Modell- und Quantisierungskontrolle wollen',
            'Plattform-Fokus': 'iPhone/iPad/Mac (nur Apple)',
            'Modellflexibilität': '140+ Modelle mit OmniQuant- und GPTQ-Quantisierungsformaten',
            'Wichtigste Einschränkung': 'Mehr Konfigurationsaufwand als eine auf Einfachheit ausgelegte App',
          },
          {
            'App': 'Ollama (auf dem Mac)',
            'Am besten für': 'Entwickler, die volle Kommandozeilen- und API-Kontrolle auf dem Mac wollen',
            'Plattform-Fokus': 'Mac/Windows/Linux (nur Desktop, keine native mobile App)',
            'Modellflexibilität': 'Jedes Modell aus der Ollama-Bibliothek, plus Import eigener GGUF-Dateien',
            'Wichtigste Einschränkung': 'Kommandozeilen-zentrierter Workflow; keine native iPhone- oder iPad-App',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich Locally AI eignet',
        items: [
          '**Reine Apple-Nutzer, die eine einzige App für iPhone, iPad und Mac wollen.** Wer vollständig im Apple-Ökosystem unterwegs ist und keine Windows- oder Android-Unterstützung braucht, deckt mit Locally AI alle drei Gerätetypen mit einer App ab.',
          '**Datenschutzbewusste Nutzer, die standardmäßig On-Device-Inferenz wollen.** Sobald ein Modell heruntergeladen ist, benötigen Unterhaltungen keine Cloud-Verbindung zur Verarbeitung — ein klarer Fall für Nutzer, denen wichtig ist, Chat-Inhalte von entfernten Servern fernzuhalten.',
          '**Reisende und Nutzer mit unzuverlässiger Verbindung.** Da der Chat nach dem Modell-Download vollständig offline funktioniert, unterbrechen Flüge, entlegene Gebiete oder unzuverlässige Netze die Kernfunktion der App nicht.',
          '**Nutzer, die auf mehrere große offene Modellfamilien zugreifen wollen, ohne Dateien selbst zu beschaffen.** Llama, Gemma, Qwen und DeepSeek sind aus der App heraus verfügbar, ohne einzelne Modelldateien suchen und verwalten zu müssen.',
          '**Nutzer, die führende Open-Source-Modelle auf Apple-Hardware ohne Cloud-Kosten ausprobieren wollen.** Da die Inferenz auf dem Gerät läuft, entstehen für lokal verarbeitete Chats keine API-Kosten pro Nachricht.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich Locally AI nicht eignet',
        items: [
          '**Windows- oder Android-Nutzer.** Locally AI ist nur für Apple-Geräte (iPhone, iPad, Mac) verfügbar; Nutzer anderer Plattformen brauchen eine andere App, etwa [Loci](/power-local-llm/loci-ai-review-offline-local-ai), das fünf Plattformen inklusive Windows und Android abdeckt.',
          '**Nutzer, die beliebige eigene GGUF-Dateien importieren wollen.** Wer auf ein bestimmtes feinabgestimmtes oder Nischen-Modell von Hugging Face angewiesen ist, statt aus Locally AIs unterstützten Modellfamilien zu wählen, ist mit einem manuelleren Tool rund um GGUF-Import besser bedient.',
          '**Nutzer, die Reasoning-Qualität auf Frontier-Niveau erwarten.** Offene Modelle, die bequem auf Smartphone oder Tablet laufen, tauschen für diese Portabilität etwas Reasoning-Tiefe ein; Nutzer mit hochsensiblen Analysen, komplexem mehrstufigem Reasoning oder codingintensiven Aufgaben wollen für diese spezifischen Aufgaben möglicherweise weiterhin ein Frontier-Cloud-Modell nutzen.',
          '**Entwickler, die Kommandozeilen- oder API-first-Kontrolle wollen.** Wer Inferenz skripten, in bestehendes Tooling integrieren oder Modelle headless auf einem Mac ausführen möchte, greift eventuell lieber neben oder statt einer Consumer-Chat-App zu einem entwicklerorientierten Tool wie Ollama.',
          '**Alle, die die aktuelle Datenschutzerklärung und Preisgestaltung der App nicht für ihren konkreten Anwendungsfall geprüft haben.** Diese Bewertung spiegelt öffentlich zugängliche Angaben zum Zeitpunkt der Erstellung wider; bestätigen Sie aktuelle Preise, die genaue Modellliste und Datenschutzdetails auf der [offiziellen Website](https://www.locallyai.app/) oder im App-Store-Eintrag, bevor Sie sich für sensible Anwendungsfälle auf die App verlassen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist Locally AI?',
            a: 'Locally AI ist eine App für iPhone, iPad und Mac, die Open-Source-Sprachmodelle — darunter Llama, Gemma, Qwen und DeepSeek — direkt auf dem Gerät ausführt, optimiert für Apple Silicon. Sobald ein Modell heruntergeladen ist, funktioniert sie vollständig offline, ohne Internetverbindung für den Chat.',
          },
          {
            q: 'Funktioniert Locally AI ohne Internetverbindung?',
            a: 'Ja, für den Chat. Sobald die App installiert und ein Modell heruntergeladen wurde, läuft die Inferenz auf dem Gerät und benötigt keine Internetverbindung — die App kann im Flugmodus genutzt werden. Für die Installation der App und den anfänglichen Modell-Download ist eine Internetverbindung erforderlich.',
          },
          {
            q: 'Welche Modelle unterstützt Locally AI?',
            a: 'Locally AI unterstützt mehrere große Open-Source-Modellfamilien: Llama (Meta), Gemma (Google), Qwen (Alibaba) und DeepSeek, plus weitere offene Modelle. Die genaue Liste herunterladbarer Modelle und deren Speichergrößen finden Sie in der App oder auf der offiziellen Website [locallyai.app](https://www.locallyai.app/).',
          },
          {
            q: 'Gibt es Locally AI für Android oder Windows?',
            a: 'Nein. Locally AI ist für iPhone, iPad und Mac gebaut und für Apple Silicon optimiert. Nutzer von Android oder Windows, die eine ähnliche offline-first, datenschutzfokussierte App suchen, sollten sich plattformübergreifende Alternativen wie Loci ansehen, das iPhone, iPad, Android, Mac und Windows unterstützt.',
          },
          {
            q: 'Ist Locally AI privat?',
            a: 'Locally AI positioniert sich als privacy-first: Sobald ein Modell heruntergeladen ist, findet die Inferenz auf dem Gerät statt, statt über Cloud-Aufrufe. Für die aktuelle, vollständige Datenschutzerklärung — einschließlich etwaiger Daten, die die App selbst für Diagnose- oder Analysezwecke sammelt — prüfen Sie die offizielle Website oder das App-Store-Datenschutz-Label, da diese Bewertung öffentlich zugängliche Angaben wiedergibt und nicht jede technische Datenschutzaussage unabhängig verifizieren konnte.',
          },
          {
            q: 'Wie viel Speicherplatz benötigt Locally AI?',
            a: 'Der Speicherbedarf hängt davon ab, welches Modell bzw. welche Modelle Sie herunterladen; offene Modelldateien in den für On-Device-Inferenz üblichen Größen können jeweils grob zwischen 1 GB und mehreren GB liegen. Die genauen aktuellen Speichergrößen für jedes unterstützte Modell sind auf den öffentlichen Marketing-Seiten der App nicht vollständig veröffentlicht — prüfen Sie die In-App-Modellliste vor dem Download, besonders auf Geräten mit wenig freiem Speicher.',
          },
          {
            q: 'Kann Locally AI ChatGPT oder Claude ersetzen?',
            a: 'Für Aufgaben, die zu Open-Source-Modellen auf mobiler oder Desktop-Hardware passen — Entwürfe verfassen, zusammenfassen, allgemeine Fragen, private Notizen —, kann Locally AI als private, offline nutzbare Alternative funktionieren. Für Reasoning auf Frontier-Niveau, besonders komplexe Coding-Aufgaben oder live web-gestützte Antworten bleiben Cloud-Modelle wie ChatGPT oder Claude leistungsfähiger, da sie deutlich größere Modelle einsetzen, als bequem auf ein Smartphone oder Tablet passen.',
          },
          {
            q: 'Wie schneidet Locally AI im Vergleich zu Loci ab?',
            a: 'Locally AI ist nur für Apple-Geräte (iPhone, iPad, Mac) verfügbar und speziell für Apple Silicon optimiert, mit Unterstützung für Llama, Gemma, Qwen, DeepSeek und weitere offene Modelle. Loci deckt fünf Plattformen ab — iPhone, iPad, Android, Mac und Windows — mit einer kuratierten Modellbibliothek. Wählen Sie Locally AI, wenn Sie vollständig im Apple-Ökosystem unterwegs sind; wählen Sie Loci, wenn Sie zusätzlich Android- oder Windows-Unterstützung brauchen. Mehr Details in unserem vollständigen [Loci-AI-Review](/power-local-llm/loci-ai-review-offline-local-ai).',
          },
          {
            q: 'Brauche ich ein bestimmtes iPhone-, iPad- oder Mac-Modell für Locally AI?',
            a: 'Locally AI ist für Apple Silicon optimiert, daher sind Geräte mit Apple-Silicon-Chip die vorgesehene Zielgruppe. Die öffentlichen Marketing-Seiten der App nennen zum Zeitpunkt der Erstellung kein exaktes Mindestgerät oder keine Mindest-Betriebssystemversion — prüfen Sie den aktuellen App-Store-Eintrag auf die von Locally AI angegebenen Mindestanforderungen vor dem Download.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Locally AI ist eine unkomplizierte Wahl für Apple-Nutzer, die eine privacy-first, On-Device-App für den Chat mit großen Open-Source-Modellfamilien — Llama, Gemma, Qwen und DeepSeek — wollen, ohne das Apple-Ökosystem zu verlassen oder Modelldateien manuell zu verwalten. Die Optimierung für Apple Silicon und der vollständig offline funktionierende Betrieb nach dem Modell-Download machen die App gut geeignet für Nutzer, denen wichtig ist, Unterhaltungen von entfernten Servern fernzuhalten, und die eine App-Erfahrung statt eines Kommandozeilen-Workflows bevorzugen. Der Kompromiss liegt im Plattformumfang: Locally AI deckt weder Windows noch Android ab, wer diese Plattformen braucht, sollte stattdessen eine plattformübergreifende App wie [Loci](/power-local-llm/loci-ai-review-offline-local-ai) in Betracht ziehen. Wer beliebige eigene GGUF-Dateien importieren oder tiefere Quantisierungskontrolle braucht, sollte die App mit konfigurationsintensiveren Tools wie Private LLM oder Ollama vergleichen. Für die vorgesehene Zielgruppe — Apple-Nutzer, die privaten, offline verfügbaren Zugang zu führenden offenen Modellen ohne technischen Aufwand wollen — füllt Locally AI eine klare Nische.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Offizielle Locally-AI-Website](https://www.locallyai.app/) — Produktübersicht, unterstützte Modellfamilien, Plattformverfügbarkeit.',
          '[Offizielle Loci-Website](https://askloci.ai) — Vergleichsreferenz für plattformübergreifende Nutzung.',
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — begleitender Review, der für den Alternativenvergleich in diesem Artikel genutzt wurde.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — eine plattformübergreifende Alternative für iPhone, iPad, Android, Mac und Windows.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — der iPhone-App-Überblick; u. a. PocketPal AI, Private LLM, MLC Chat, LLM Farm und Apple Intelligence.',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — geräteorientierter Leitfaden für On-Device- und Remote-Inferenz auf Tablets.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — Modellebene als Ergänzung; Benchmarks und Qualitätsabwägungen auf mobilen Geräten.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — umfassendes App- und Tool-Verzeichnis für alle Plattformen.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/locally-ai-review-hero-fr.webp',
    title: 'Locally AI Review (2026) : LLM privés hors ligne sur iPhone, iPad et Mac',
    seoTitle: 'Locally AI Review 2026 : LLM hors ligne sur appareils Apple',
    intro:
      'Locally AI, développée par [Locally AI](https://www.locallyai.app/), est une application permettant d\'exécuter des modèles de langage open source — dont Llama, Gemma, Qwen et DeepSeek — directement sur iPhone, iPad et Mac, optimisée pour Apple Silicon. Une fois un modèle téléchargé, il fonctionne entièrement sur l\'appareil : aucune connexion internet n\'est nécessaire pour discuter, et le positionnement privacy-first de l\'éditeur signifie que les conversations ne sont pas envoyées à un service cloud pour l\'inférence. La vraie question pour qui envisage cette app n\'est pas de savoir si l\'inférence sur l\'appareil est possible sur du matériel Apple — la puce Apple Silicon a largement la puissance neuronale et GPU nécessaire — mais si Locally AI offre une expérience d\'application fonctionnelle autour de cette inférence, sans avoir à choisir soi-même des fichiers GGUF, régler la quantification ou calculer la VRAM nécessaire.',
    metaDescription:
      'Locally AI review : cette app vaut-elle le coup pour des LLM privés et hors ligne sur iPhone, iPad et Mac ? Fonctionnement avec Llama, Gemma, Qwen et DeepSeek, public visé, comparaison avec Loci et Private LLM.',
    twitterDescription:
      'Locally AI review 2026 : exécutez Llama, Gemma, Qwen et DeepSeek entièrement hors ligne sur iPhone, iPad et Mac — optimisé pour Apple Silicon. Positionnement vie privée, adéquation plateforme, comparaison avec Loci et Private LLM.',
    audience:
      'Utilisateurs d\'appareils Apple hésitant entre des LLM sur l\'appareil via Locally AI et des services d\'IA cloud ou d\'autres applications LLM locales — couvre l\'adéquation plateforme, le positionnement vie privée, les modèles pris en charge et la comparaison avec des applications similaires orientées hors ligne.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visiter le site officiel de Locally AI →', url: 'https://[www.locallyai.app](https://www.locallyai.app/)/', productName: 'Locally AI', productCategory: 'software' },
    ],
    primaryTerm: 'Locally AI review',
    targetKeywords: [
      'locally ai review',
      'locally ai app',
      'locally ai iphone',
      'locally ai mac',
      'llm hors ligne iphone',
      'faire tourner llama sur iphone',
      'locally ai vs loci',
      'application llm local apple silicon',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Silicon'],
    leadAnswerBlock:
      '**Locally AI convainc surtout si vous cherchez une application simple et privacy-first pour discuter avec des modèles ouverts comme Llama, Gemma, Qwen et DeepSeek entièrement sur un appareil Apple.** Elle fonctionne sur iPhone, iPad et Mac, est optimisée pour Apple Silicon, et une fois un modèle téléchargé, elle fonctionne entièrement hors ligne — aucun appel cloud, aucune connexion internet nécessaire pour discuter. Elle s\'adresse aux utilisateurs qui veulent une IA privée sur l\'appareil sans quitter l\'écosystème Apple ni gérer eux-mêmes une infrastructure d\'inférence. Les utilisateurs ayant besoin d\'une prise en charge Windows ou Android, souhaitant importer des fichiers GGUF personnalisés, ou nécessitant un raisonnement de niveau frontière au-delà de ce que des modèles ouverts de quelques milliards de paramètres peuvent offrir sur un téléphone ou une tablette, devraient comparer avec des applications comme Loci ou gérer les modèles directement avec un outil comme Ollama sur Mac.',
    quickAnswerTop: {
      fr: {
        question: 'Dois-je utiliser Locally AI pour des LLM hors ligne sur iPhone ou Mac ?',
        answer:
          'Utilisez Locally AI si vous voulez discuter avec des modèles ouverts comme Llama, Gemma, Qwen ou DeepSeek entièrement hors ligne sur iPhone, iPad ou Mac, sans appel cloud une fois un modèle téléchargé. Passez votre chemin si vous avez besoin d\'une prise en charge Windows ou Android, ou si vous voulez importer vos propres fichiers GGUF en dehors des modèles pris en charge par l\'application.',
        bullets: [
          'Exécute Llama, Gemma, Qwen et DeepSeek entièrement sur l\'appareil.',
          'Plateformes : iPhone, iPad et Mac — optimisée pour Apple Silicon.',
          'Aucune connexion internet nécessaire pour discuter une fois un modèle téléchargé.',
          'Positionnement privacy-first : aucun appel cloud pour l\'inférence.',
          'Apple uniquement — pas d\'application Windows ou Android.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Locally AI', anchor: 'what-is-locally-ai' },
      { label: 'Les modèles pris en charge par Locally AI', anchor: 'models-supported' },
      { label: 'Locally AI sur chaque plateforme', anchor: 'platforms-hardware' },
      { label: 'Compromis : avantages vs limites', anchor: 'tradeoffs' },
      { label: 'Locally AI vs alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser Locally AI', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser Locally AI', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Locally AI est une application pour iPhone, iPad et Mac qui exécute des modèles de langage open source — dont Llama, Gemma, Qwen et DeepSeek — entièrement sur l\'appareil et optimisée pour Apple Silicon, de sorte qu\'une fois un modèle téléchargé, aucune connexion internet ni appel cloud n\'est nécessaire pour discuter.' },
          { type: 'plain-terms', text: 'Plutôt que d\'envoyer vos messages aux serveurs d\'une entreprise, Locally AI télécharge un modèle d\'IA compact sur votre iPhone, iPad ou Mac et l\'exécute directement dessus. Vous pouvez activer le mode avion une fois le téléchargement terminé, et l\'app continue de fonctionner, car la conception privacy-first de l\'éditeur fait que rien de la conversation elle-même n\'a besoin de quitter votre appareil.' },
        ],
        items: [
          'Locally AI exécute des modèles open source — Llama, Gemma, Qwen et DeepSeek — entièrement hors ligne, sur l\'appareil.',
          'Plateformes : iPhone, iPad et Mac, optimisée pour Apple Silicon.',
          'Aucune connexion internet n\'est nécessaire une fois un modèle téléchargé.',
          'Positionnement privacy-first : l\'éditeur indique que l\'inférence se fait sur l\'appareil, sans appel cloud.',
          'Apple uniquement — il n\'existe pas de version Windows ou Android, les utilisateurs de ces systèmes doivent se tourner vers une autre application.',
          'Le compromis central de toute application sur l\'appareil pour smartphone et tablette : les tailles de modèles adaptées au matériel mobile restent en retrait des modèles cloud de pointe sur les tâches de raisonnement complexes et multi-étapes.',
        ],
        callouts: [
          { type: 'note', text: 'Cette évaluation s\'appuie sur des informations publiques de [locallyai.app](https://www.locallyai.app/) et les fiches officielles de l\'application. Le prix, la liste exacte des modèles, la taille de stockage et la version minimale du système d\'exploitation n\'ont pas été vérifiés indépendamment au moment de la rédaction — confirmez les détails actuels sur le site officiel ou la fiche App Store avant de télécharger.' },
        ],
      },
      whatIsLocallyAI: {
        id: 'what-is-locally-ai',
        title: 'Qu\'est-ce que Locally AI ?',
        content: [
          '**Locally AI est une application qui exécute des modèles de langage open source directement sur iPhone, iPad et Mac, sans envoyer les conversations à un service cloud.** Elle est conçue et optimisée pour Apple Silicon, l\'architecture de puce qu\'Apple utilise dans sa gamme actuelle d\'iPhone, iPad et Mac, ce qui signifie que l\'application est pensée pour exploiter le matériel neuronal et GPU embarqué de ces puces plutôt que de traiter le téléphone comme un simple client léger pour un serveur distant.',
          'L\'offre de modèles principale comprend Llama (famille de modèles ouverts de Meta), Gemma (famille de modèles ouverts de Google), Qwen (famille de modèles ouverts d\'Alibaba) et DeepSeek (famille de modèles ouverts de DeepSeek) — tous des modèles open source pouvant être distribués sous forme de fichiers autonomes et exécutés sans API contrôlée par un fournisseur. Locally AI regroupe l\'accès à ces modèles dans une seule interface adaptée au mobile et au bureau, de sorte que l\'utilisateur n\'a pas besoin de se procurer lui-même les fichiers de modèles ni de faire tourner un serveur d\'inférence séparé.',
          'Une fois un modèle entièrement téléchargé sur l\'appareil, Locally AI n\'a pas besoin de connexion internet pour générer des réponses — l\'inférence s\'exécute localement en utilisant le processeur et la mémoire propres de l\'appareil. C\'est le sens pratique de « hors ligne » : l\'application peut fonctionner en mode avion, en vol, ou partout sans connectivité, tant que le modèle a été téléchargé au préalable.',
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quels modèles Locally AI prend-elle en charge ?',
        content: [
          '**Locally AI prend en charge plusieurs grandes familles de modèles open source — Llama, Gemma, Qwen et DeepSeek — plus d\'autres modèles ouverts, tous exécutables entièrement sur l\'appareil.** Ces quatre familles couvrent un large éventail de cas d\'usage et comptent parmi les modèles ouverts les plus utilisés aujourd\'hui, chacune maintenue par une organisation différente (Meta, Google, Alibaba et DeepSeek respectivement).',
        ],
        items: [
          '**Llama** — famille de modèles ouverts de Meta, largement utilisée comme base généraliste de chat et de raisonnement dans tout l\'écosystème des LLM locaux.',
          '**Gemma** — famille de modèles ouverts de Google, issue de la même lignée de recherche que les modèles Gemini de Google, couramment utilisée pour les déploiements sur l\'appareil et en périphérie.',
          '**Qwen** — famille de modèles ouverts d\'Alibaba, reconnue pour son support multilingue solide et une large gamme de tailles de modèles adaptées au matériel contraint.',
          '**DeepSeek** — famille de modèles ouverts de DeepSeek, reconnue pour des performances de raisonnement compétitives par rapport à la taille du modèle.',
          '**Autres modèles ouverts** — Locally AI indique prendre en charge d\'autres modèles ouverts au-delà de ces quatre familles phares, élargissant le choix de ce qui peut tourner sur l\'appareil.',
        ],
        note: 'Locally AI ne publie pas de journal complet des versions exactes des modèles, des variantes de nombre de paramètres, ou des tailles de stockage sur ses pages marketing publiques au moment de la rédaction. Consultez la liste des modèles dans l\'application ou le site officiel [locallyai.app](https://www.locallyai.app/) pour la sélection actuelle et exacte de modèles téléchargeables avant d\'en choisir un en fonction de l\'espace disponible sur votre appareil.',
      },
      platformsHardware: {
        id: 'platforms-hardware',
        itemHeadings: true,
        title: 'Locally AI sur chaque plateforme',
        columns: ['Plateforme', 'À quoi s\'attendre', 'Remarque importante'],
        rows: [
          {
            'Plateforme': 'iPhone',
            'À quoi s\'attendre': 'Locally AI fonctionne sur iPhone, l\'application étant optimisée pour le matériel neuronal et GPU embarqué d\'Apple Silicon. Une fois un modèle pris en charge téléchargé, le chat fonctionne entièrement hors ligne.',
            'Remarque importante': 'La version minimale exacte d\'iOS et les performances selon les appareils ne sont pas publiées sur les pages marketing publiques de l\'application — vérifiez la fiche App Store pour la compatibilité actuelle avant de télécharger.',
          },
          {
            'Plateforme': 'iPad',
            'À quoi s\'attendre': 'Locally AI fonctionne sur iPad, avec la même offre de modèles sur l\'appareil et le même comportement hors ligne que sur iPhone. L\'écran plus grand et, sur de nombreux modèles d\'iPad, des performances Apple Silicon comparables ou supérieures peuvent rendre les sessions longues plus confortables.',
            'Remarque importante': 'Comme pour l\'iPhone, vérifiez la version minimale actuelle d\'iPadOS et les exigences de stockage sur l\'App Store avant de télécharger un modèle.',
          },
          {
            'Plateforme': 'Mac',
            'À quoi s\'attendre': 'Locally AI fonctionne sur Mac, où Apple Silicon (puces série M) offre généralement davantage de mémoire unifiée que l\'iPhone ou l\'iPad, ce qui peut compter pour les plus gros modèles pris en charge par l\'application.',
            'Remarque importante': 'Locally AI est optimisée pour les Mac équipés d\'Apple Silicon ; le comportement sur les Mac à base Intel n\'est pas abordé sur les pages marketing publiques de l\'application — vérifiez la compatibilité de la puce de votre Mac avant l\'installation.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs limites',
        columns: ['Avantage', 'Ce que cela signifie en pratique', 'Limite / remarque'],
        rows: [
          {
            'Avantage': 'Inférence privacy-first, sur l\'appareil',
            'Ce que cela signifie en pratique': 'Une fois un modèle téléchargé, les conversations sont traitées sur l\'appareil plutôt qu\'envoyées à un service cloud pour l\'inférence.',
            'Limite / remarque': 'L\'installation initiale de l\'application et le téléchargement du modèle nécessitent eux-mêmes une connexion internet, tout comme probablement les futures mises à jour de l\'application.',
          },
          {
            'Avantage': 'Fonctionne hors ligne après le téléchargement du modèle',
            'Ce que cela signifie en pratique': 'Le chat fonctionne sans connexion internet une fois la configuration terminée — utile en vol, en voyage ou dans les zones à connectivité peu fiable.',
            'Limite / remarque': 'Vous devez anticiper et télécharger le modèle souhaité pendant que vous disposez encore d\'une connexion.',
          },
          {
            'Avantage': 'Optimisée pour Apple Silicon',
            'Ce que cela signifie en pratique': 'L\'application est conçue pour exploiter le matériel neuronal et GPU embarqué des puces actuelles d\'iPhone, iPad et Mac.',
            'Limite / remarque': 'Cela signifie aussi que Locally AI est exclusivement Apple — il n\'existe pas de version Windows ou Android pour les utilisateurs de ces plateformes.',
          },
          {
            'Avantage': 'Accès à plusieurs familles de modèles ouverts dans une seule app',
            'Ce que cela signifie en pratique': 'Llama, Gemma, Qwen et DeepSeek — plus d\'autres modèles ouverts — sont disponibles depuis une seule interface, sans avoir à se procurer manuellement les fichiers de modèles.',
            'Limite / remarque': 'La liste exacte des modèles téléchargeables et leur taille de stockage n\'est pas publiée intégralement sur les pages marketing publiques de l\'application ; vérifiez la sélection actuelle dans l\'application elle-même.',
          },
          {
            'Avantage': 'Aucun coût d\'inférence cloud récurrent',
            'Ce que cela signifie en pratique': 'Comme l\'inférence s\'exécute sur votre propre appareil, il n\'y a aucune facturation API par message ou par jeton pour les échanges traités sur l\'appareil.',
            'Limite / remarque': 'L\'inférence sur l\'appareil consomme la batterie et la puissance de calcul de votre appareil, et le prix de l\'application lui-même n\'a pas été vérifié indépendamment pour cette évaluation — consultez la fiche App Store actuelle.',
          },
          {
            'Avantage': 'Un seul écosystème pour iPhone, iPad et Mac',
            'Ce que cela signifie en pratique': 'Les utilisateurs Apple peuvent utiliser la même famille d\'applications sur leur téléphone, leur tablette et leur ordinateur.',
            'Limite / remarque': 'Les utilisateurs qui répartissent leur travail entre Windows et Android auront besoin d\'une application séparée pour ces plateformes.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Locally AI vs alternatives',
        columns: ['Application', 'Idéale pour', 'Focus plateforme', 'Flexibilité des modèles', 'Limite principale'],
        rows: [
          {
            'Application': 'Locally AI',
            'Idéale pour': 'Les utilisateurs Apple voulant une application simple et privacy-first pour les grandes familles de modèles ouverts',
            'Focus plateforme': 'iPhone/iPad/Mac (optimisée Apple Silicon)',
            'Flexibilité des modèles': 'Llama, Gemma, Qwen, DeepSeek, plus d\'autres modèles ouverts',
            'Limite principale': 'Apple uniquement — pas d\'application Windows ou Android',
          },
          {
            'Application': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Idéale pour': 'Les utilisateurs multiplateformes voulant un chat privé simple sur davantage d\'appareils',
            'Focus plateforme': 'iPhone/iPad/Android/Mac/Windows (5 plateformes)',
            'Flexibilité des modèles': 'Bibliothèque sélectionnée incluant Gemma, Qwen, Llama et Phi ; pas d\'import de fichiers GGUF personnalisés',
            'Limite principale': 'Choix de modèles limité à une bibliothèque sélectionnée ; impossible d\'importer des fichiers GGUF personnalisés',
          },
          {
            'Application': 'Private LLM',
            'Idéale pour': 'Les utilisateurs Apple voulant un contrôle poussé des modèles et de la quantification',
            'Focus plateforme': 'iPhone/iPad/Mac (Apple uniquement)',
            'Flexibilité des modèles': '140+ modèles avec formats de quantification OmniQuant et GPTQ',
            'Limite principale': 'Davantage de configuration qu\'une application conçue pour la simplicité',
          },
          {
            'Application': 'Ollama (sur Mac)',
            'Idéale pour': 'Les développeurs voulant un contrôle complet en ligne de commande et via API sur Mac',
            'Focus plateforme': 'Mac/Windows/Linux (bureau uniquement, pas d\'application mobile native)',
            'Flexibilité des modèles': 'N\'importe quel modèle de la bibliothèque Ollama, plus import de fichiers GGUF personnalisés',
            'Limite principale': 'Workflow d\'abord orienté ligne de commande ; pas d\'application native pour iPhone ou iPad',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser Locally AI',
        items: [
          '**Les utilisateurs exclusivement Apple voulant une seule application pour iPhone, iPad et Mac.** Si vous êtes entièrement dans l\'écosystème Apple et n\'avez pas besoin de Windows ou Android, Locally AI couvre vos trois types d\'appareils avec une seule application.',
          '**Les utilisateurs soucieux de leur vie privée voulant une inférence sur l\'appareil par défaut.** Une fois un modèle téléchargé, les conversations n\'ont pas besoin de connectivité cloud pour être traitées — une solution évidente pour les utilisateurs qui privilégient le fait de garder le contenu de leurs conversations hors des serveurs distants.',
          '**Les voyageurs et utilisateurs avec une connectivité irrégulière.** Comme le chat fonctionne entièrement hors ligne après le téléchargement du modèle, les vols, zones reculées ou réseaux peu fiables n\'interrompent pas la fonction principale de l\'application.',
          '**Les utilisateurs voulant accéder à plusieurs grandes familles de modèles ouverts sans se procurer eux-mêmes les fichiers.** Llama, Gemma, Qwen et DeepSeek sont disponibles directement dans l\'application, sans devoir chercher et gérer des fichiers de modèles individuels.',
          '**Les utilisateurs voulant essayer les principaux modèles open source sur du matériel Apple sans coûts cloud.** Comme l\'inférence s\'exécute sur l\'appareil, il n\'y a aucune facturation API par message pour les échanges traités localement.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser Locally AI',
        items: [
          '**Les utilisateurs Windows ou Android.** Locally AI est exclusivement Apple (iPhone, iPad, Mac) ; les utilisateurs d\'autres plateformes ont besoin d\'une autre application, comme [Loci](/power-local-llm/loci-ai-review-offline-local-ai), qui couvre cinq plateformes dont Windows et Android.',
          '**Les utilisateurs voulant importer des fichiers GGUF personnalisés quelconques.** Si votre flux de travail dépend de l\'exécution d\'un fichier de modèle spécifique, finement ajusté ou de niche, provenant de Hugging Face, plutôt que de choisir parmi les familles de modèles prises en charge par Locally AI, un outil plus manuel conçu autour de l\'import GGUF conviendra mieux.',
          '**Les utilisateurs attendant une qualité de raisonnement de niveau frontière.** Les modèles ouverts dimensionnés pour tourner confortablement sur un téléphone ou une tablette sacrifient une partie de la profondeur de raisonnement pour cette portabilité ; les utilisateurs ayant des analyses à forts enjeux, un raisonnement complexe multi-étapes ou des charges de travail intensives en code voudront peut-être conserver un modèle cloud de pointe pour ces tâches spécifiques.',
          '**Les développeurs voulant un contrôle d\'abord en ligne de commande ou par API.** Les utilisateurs voulant scripter l\'inférence, l\'intégrer à des outils existants, ou exécuter des modèles sans interface sur un Mac préféreront peut-être un outil orienté développeur comme Ollama, en complément ou à la place d\'une application de chat grand public.',
          '**Toute personne n\'ayant pas vérifié la politique de confidentialité et le prix actuels de l\'application pour son cas d\'usage précis.** Cette évaluation reflète des informations rendues publiques au moment de la rédaction ; confirmez le prix actuel, la liste exacte des modèles et les détails de confidentialité sur le [site officiel](https://www.locallyai.app/) ou la fiche App Store avant de vous y fier pour des usages sensibles.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Qu\'est-ce que Locally AI ?',
            a: 'Locally AI est une application pour iPhone, iPad et Mac qui exécute des modèles de langage open source — dont Llama, Gemma, Qwen et DeepSeek — directement sur l\'appareil, optimisée pour Apple Silicon. Une fois un modèle téléchargé, elle fonctionne entièrement hors ligne, sans connexion internet nécessaire pour discuter.',
          },
          {
            q: 'Locally AI fonctionne-t-elle sans connexion internet ?',
            a: 'Oui, pour le chat. Une fois l\'application installée et un modèle téléchargé, l\'inférence s\'exécute sur l\'appareil et ne nécessite pas de connexion internet — l\'application peut être utilisée en mode avion. Une connexion internet est nécessaire pour installer l\'application et pour le téléchargement initial d\'un modèle.',
          },
          {
            q: 'Quels modèles Locally AI prend-elle en charge ?',
            a: 'Locally AI prend en charge plusieurs grandes familles de modèles open source : Llama (Meta), Gemma (Google), Qwen (Alibaba) et DeepSeek, plus d\'autres modèles ouverts. La liste exacte des modèles téléchargeables et leur taille de stockage est disponible dans l\'application ou sur le site officiel [locallyai.app](https://www.locallyai.app/).',
          },
          {
            q: 'Locally AI est-elle disponible sur Android ou Windows ?',
            a: 'Non. Locally AI est conçue pour iPhone, iPad et Mac et optimisée pour Apple Silicon. Les utilisateurs Android ou Windows recherchant une application similaire, hors ligne et centrée sur la confidentialité, devraient se tourner vers des alternatives multiplateformes comme Loci, qui prend en charge iPhone, iPad, Android, Mac et Windows.',
          },
          {
            q: 'Locally AI est-elle privée ?',
            a: 'Locally AI se positionne comme privacy-first : une fois un modèle téléchargé, l\'inférence se fait sur l\'appareil plutôt que via des appels cloud. Pour la politique de confidentialité actuelle et complète — y compris les données que l\'application collecte elle-même à des fins de diagnostic ou d\'analyse — consultez le site officiel ou l\'étiquette de confidentialité de la fiche App Store, car cette évaluation reflète des informations rendues publiques et n\'a pas pu vérifier indépendamment chaque affirmation technique en matière de confidentialité.',
          },
          {
            q: 'Quel espace de stockage Locally AI nécessite-t-elle ?',
            a: 'Les besoins de stockage dépendent des modèles téléchargés ; les fichiers de modèles ouverts aux tailles couramment utilisées pour l\'inférence sur l\'appareil peuvent aller d\'environ 1 Go à plusieurs Go chacun. Les tailles de stockage exactes et actuelles de chaque modèle pris en charge ne sont pas publiées intégralement sur les pages marketing publiques de l\'application — vérifiez la liste des modèles dans l\'application avant de télécharger, en particulier sur les appareils disposant de peu d\'espace libre.',
          },
          {
            q: 'Locally AI peut-elle remplacer ChatGPT ou Claude ?',
            a: 'Pour les tâches adaptées aux modèles open source tournant sur du matériel mobile ou de bureau — rédaction de brouillons, résumés, questions générales, prise de notes privée —, Locally AI peut servir d\'alternative privée et utilisable hors ligne. Pour un raisonnement de niveau frontière, les tâches de code les plus complexes ou des réponses ancrées dans le web en direct, les modèles cloud comme ChatGPT ou Claude restent plus performants, car ils exploitent des modèles bien plus volumineux que ce qui tient confortablement sur un téléphone ou une tablette.',
          },
          {
            q: 'Comment Locally AI se compare-t-elle à Loci ?',
            a: 'Locally AI est exclusivement Apple (iPhone, iPad, Mac) et spécifiquement optimisée pour Apple Silicon, avec la prise en charge de Llama, Gemma, Qwen, DeepSeek et d\'autres modèles ouverts. Loci couvre cinq plateformes — iPhone, iPad, Android, Mac et Windows — avec une bibliothèque de modèles sélectionnée. Choisissez Locally AI si vous êtes entièrement dans l\'écosystème Apple ; choisissez Loci si vous avez aussi besoin d\'Android ou de Windows. Voir notre [revue complète de Loci AI](/power-local-llm/loci-ai-review-offline-local-ai) pour plus de détails.',
          },
          {
            q: 'Ai-je besoin d\'un modèle spécifique d\'iPhone, d\'iPad ou de Mac pour utiliser Locally AI ?',
            a: 'Locally AI est optimisée pour Apple Silicon, les appareils équipés d\'une puce Apple Silicon constituent donc la cible visée. Les pages marketing publiques de l\'application ne mentionnent pas d\'appareil ou de version de système d\'exploitation minimale exacte au moment de la rédaction — consultez la fiche App Store actuelle pour connaître les exigences minimales indiquées par Locally AI avant de télécharger.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Locally AI est un choix simple pour les utilisateurs Apple voulant une application privacy-first et sur l\'appareil pour discuter avec de grandes familles de modèles open source — Llama, Gemma, Qwen et DeepSeek — sans quitter l\'écosystème Apple ni gérer manuellement les fichiers de modèles. Son optimisation pour Apple Silicon et son fonctionnement entièrement hors ligne après le téléchargement du modèle la rendent bien adaptée aux utilisateurs qui privilégient le fait de garder leurs conversations hors des serveurs distants et qui préfèrent une expérience d\'application plutôt qu\'un flux de travail en ligne de commande. Le compromis se situe dans la portée plateforme : Locally AI ne couvre ni Windows ni Android, les utilisateurs ayant besoin de ces plateformes devraient plutôt se tourner vers une application multiplateforme comme [Loci](/power-local-llm/loci-ai-review-offline-local-ai). Les utilisateurs voulant importer des fichiers GGUF personnalisés quelconques ou nécessitant un contrôle plus poussé de la quantification devraient comparer avec des outils plus exigeants en configuration comme Private LLM ou Ollama. Pour son public visé — des utilisateurs Apple voulant un accès privé et hors ligne aux principaux modèles ouverts sans surcharge technique — Locally AI occupe une niche claire.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site officiel de Locally AI](https://www.locallyai.app/) — présentation du produit, familles de modèles prises en charge, disponibilité par plateforme.',
          '[Site officiel de Loci](https://askloci.ai) — référence de comparaison multiplateforme.',
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — revue compagnon utilisée pour la comparaison des alternatives dans cet article.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — une alternative multiplateforme couvrant iPhone, iPad, Android, Mac et Windows.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — le tour d\'horizon des applications pour iPhone ; inclut PocketPal AI, Private LLM, MLC Chat, LLM Farm et Apple Intelligence.',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — guide centré sur les appareils pour l\'inférence sur l\'appareil et à distance sur tablette.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — complément au niveau des modèles ; benchmarks et compromis de qualité sur mobile.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — répertoire complet d\'applications et d\'outils pour toutes les plateformes.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/locally-ai-review-hero-es.webp',
    title: 'Locally AI Review (2026): LLM privados sin conexión en iPhone, iPad y Mac',
    seoTitle: 'Locally AI Review 2026: LLM sin conexión en dispositivos Apple',
    intro:
      'Locally AI, del desarrollador [Locally AI](https://www.locallyai.app/), es una app para ejecutar modelos de lenguaje de código abierto —entre ellos Llama, Gemma, Qwen y DeepSeek— directamente en iPhone, iPad y Mac, optimizada para Apple Silicon. Una vez descargado un modelo, funciona completamente en el dispositivo: no hace falta conexión a internet para chatear, y el enfoque privacy-first del desarrollador implica que las conversaciones no se envían a un servicio en la nube para la inferencia. La pregunta práctica para quien la considere no es si la inferencia en el dispositivo es posible en hardware Apple —Apple Silicon tiene de sobra potencia neuronal y de GPU para lograrlo—, sino si Locally AI ofrece una experiencia de app funcional en torno a esa inferencia sin necesidad de elegir manualmente archivos GGUF, ajustar la cuantización o calcular la VRAM necesaria.',
    metaDescription:
      'Locally AI review: ¿merece la pena para LLM privados y sin conexión en iPhone, iPad y Mac? Cómo funciona con Llama, Gemma, Qwen y DeepSeek, a quién le conviene y cómo se compara con Loci y Private LLM.',
    twitterDescription:
      'Locally AI review 2026: ejecuta Llama, Gemma, Qwen y DeepSeek totalmente sin conexión en iPhone, iPad y Mac —optimizado para Apple Silicon. Enfoque de privacidad, adecuación por plataforma y comparación con Loci y Private LLM.',
    audience:
      'Usuarios de dispositivos Apple que dudan entre LLM en el dispositivo con Locally AI frente a servicios de IA en la nube u otras apps de LLM local —cubre adecuación por plataforma, enfoque de privacidad, modelos compatibles y comparación con apps similares centradas en el uso sin conexión.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visitar el sitio oficial de Locally AI →', url: 'https://[www.locallyai.app](https://www.locallyai.app/)/', productName: 'Locally AI', productCategory: 'software' },
    ],
    primaryTerm: 'Locally AI review',
    targetKeywords: [
      'locally ai review',
      'locally ai app',
      'locally ai iphone',
      'locally ai mac',
      'llm sin conexión iphone',
      'ejecutar llama en iphone',
      'locally ai vs loci',
      'app de llm local apple silicon',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Silicon'],
    leadAnswerBlock:
      '**Locally AI resulta especialmente atractiva si buscas una app sencilla y privacy-first para chatear con modelos abiertos como Llama, Gemma, Qwen y DeepSeek enteramente en un dispositivo Apple.** Funciona en iPhone, iPad y Mac, está optimizada para Apple Silicon, y una vez descargado un modelo funciona por completo sin conexión —sin llamadas a la nube, sin necesidad de internet para chatear. Está pensada para usuarios que quieren IA privada en el dispositivo sin salir del ecosistema Apple ni gestionar ellos mismos la infraestructura de inferencia. Quienes necesiten compatibilidad con Windows o Android, quieran importar archivos GGUF personalizados, o necesiten un razonamiento de nivel frontera más allá de lo que ofrecen modelos abiertos de pocos miles de millones de parámetros en un teléfono o tablet, deberían comparar con apps como Loci o gestionar modelos directamente con una herramienta como Ollama en un Mac.',
    quickAnswerTop: {
      es: {
        question: '¿Debería usar Locally AI para LLM sin conexión en iPhone o Mac?',
        answer:
          'Usa Locally AI si quieres chatear con modelos abiertos como Llama, Gemma, Qwen o DeepSeek totalmente sin conexión en iPhone, iPad o Mac, sin llamadas a la nube una vez descargado un modelo. Evítala si necesitas compatibilidad con Windows o Android, o quieres importar tus propios archivos GGUF fuera del conjunto de modelos compatibles con la app.',
        bullets: [
          'Ejecuta Llama, Gemma, Qwen y DeepSeek totalmente en el dispositivo.',
          'Plataformas: iPhone, iPad y Mac —optimizada para Apple Silicon.',
          'No requiere conexión a internet para chatear una vez descargado un modelo.',
          'Enfoque privacy-first: sin llamadas a la nube para la inferencia.',
          'Solo Apple —sin app para Windows o Android.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Qué es Locally AI', anchor: 'what-is-locally-ai' },
      { label: 'Qué modelos admite Locally AI', anchor: 'models-supported' },
      { label: 'Locally AI en cada plataforma', anchor: 'platforms-hardware' },
      { label: 'Ventajas y limitaciones', anchor: 'tradeoffs' },
      { label: 'Locally AI frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Locally AI', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Locally AI', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Locally AI es una app para iPhone, iPad y Mac que ejecuta modelos de lenguaje de código abierto —entre ellos Llama, Gemma, Qwen y DeepSeek— por completo en el dispositivo y optimizada para Apple Silicon, de modo que, una vez descargado un modelo, no hace falta ni conexión a internet ni llamada a la nube para chatear.' },
          { type: 'plain-terms', text: 'En lugar de enviar tus mensajes a los servidores de una empresa, Locally AI descarga un modelo de IA compacto en tu iPhone, iPad o Mac y lo ejecuta ahí mismo. Puedes activar el modo avión después de terminar la descarga y sigue funcionando, porque el diseño privacy-first del desarrollador hace que nada de la conversación en sí necesite salir de tu dispositivo.' },
        ],
        items: [
          'Locally AI ejecuta modelos de código abierto —Llama, Gemma, Qwen y DeepSeek— por completo sin conexión, en el dispositivo.',
          'Plataformas: iPhone, iPad y Mac, optimizada para Apple Silicon.',
          'No hace falta conexión a internet una vez descargado un modelo.',
          'Enfoque privacy-first: el desarrollador afirma que la inferencia ocurre en el dispositivo, sin llamadas a la nube.',
          'Solo Apple —no existe versión para Windows o Android, los usuarios de esos sistemas necesitan otra app.',
          'La disyuntiva central de cualquier app en el dispositivo para teléfono y tablet: los tamaños de modelo que caben cómodamente en hardware móvil quedan por detrás de los modelos frontera en la nube en tareas de razonamiento complejo y de varios pasos.',
        ],
        callouts: [
          { type: 'note', text: 'Esta reseña se basa en información pública de [locallyai.app](https://www.locallyai.app/) y las fichas oficiales de la app. El precio, la lista exacta de modelos, el tamaño de almacenamiento y la versión mínima del sistema operativo no se verificaron de forma independiente en el momento de redactar este texto —confirma los detalles actuales en el sitio oficial o en la ficha de la App Store antes de descargar.' },
        ],
      },
      whatIsLocallyAI: {
        id: 'what-is-locally-ai',
        title: '¿Qué es Locally AI?',
        content: [
          '**Locally AI es una app que ejecuta modelos de lenguaje de código abierto directamente en iPhone, iPad y Mac, sin enviar las conversaciones a un servicio en la nube.** Está construida y optimizada para Apple Silicon, la arquitectura de chip que Apple usa en su gama actual de iPhone, iPad y Mac, lo que significa que la app está diseñada para aprovechar el hardware neuronal y de GPU en el dispositivo que ofrecen esos chips, en lugar de tratar el teléfono como un cliente ligero de un servidor remoto.',
          'El conjunto principal de modelos incluye Llama (familia de modelos abiertos de Meta), Gemma (familia de modelos abiertos de Google), Qwen (familia de modelos abiertos de Alibaba) y DeepSeek (familia de modelos abiertos de DeepSeek) —todos modelos de código abierto que pueden distribuirse como archivos independientes y ejecutarse sin una API controlada por el proveedor. Locally AI empaqueta el acceso a estos modelos en una única interfaz apta para móvil y escritorio, así que el usuario no necesita conseguir los archivos de modelo por su cuenta ni ejecutar un servidor de inferencia aparte.',
          'Una vez que un modelo termina de descargarse en el dispositivo, Locally AI no necesita conexión a internet para generar respuestas —la inferencia se ejecuta localmente usando el procesador y la memoria propios del dispositivo. Ese es el significado práctico de "sin conexión": la app puede usarse en modo avión, en un vuelo o en cualquier lugar sin conectividad, siempre que el modelo se haya descargado de antemano.',
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: '¿Qué modelos admite Locally AI?',
        content: [
          '**Locally AI admite varias familias de modelos de código abierto importantes —Llama, Gemma, Qwen y DeepSeek— además de otros modelos abiertos, todos ejecutables por completo en el dispositivo.** Estas cuatro familias cubren un amplio abanico de casos de uso y figuran entre los modelos abiertos más utilizados hoy en día, cada una mantenida por una organización distinta (Meta, Google, Alibaba y DeepSeek respectivamente).',
        ],
        items: [
          '**Llama** —familia de modelos abiertos de Meta, ampliamente usada como base general de chat y razonamiento en todo el ecosistema de LLM locales.',
          '**Gemma** —familia de modelos abiertos de Google, construida sobre la misma línea de investigación que los modelos Gemini de Google, habitual en despliegues en el dispositivo y en el borde (edge).',
          '**Qwen** —familia de modelos abiertos de Alibaba, conocida por su sólido soporte multilingüe y una amplia gama de tamaños de modelo adecuados para hardware limitado.',
          '**DeepSeek** —familia de modelos abiertos de DeepSeek, reconocida por un rendimiento de razonamiento competitivo en relación con el tamaño del modelo.',
          '**Otros modelos abiertos** —Locally AI indica que admite modelos abiertos adicionales más allá de estas cuatro familias principales, ampliando lo que puede ejecutarse en el dispositivo.',
        ],
        note: 'Locally AI no publica un registro completo de versiones exactas de modelos, variantes de número de parámetros ni tamaños de almacenamiento en sus páginas de marketing públicas en el momento de escribir esto. Consulta la lista de modelos dentro de la app o el sitio oficial [locallyai.app](https://www.locallyai.app/) para conocer el conjunto actual y exacto de modelos descargables antes de elegir uno según el almacenamiento disponible en tu dispositivo.',
      },
      platformsHardware: {
        id: 'platforms-hardware',
        itemHeadings: true,
        title: 'Locally AI en cada plataforma',
        columns: ['Plataforma', 'Qué esperar', 'Nota importante'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'Qué esperar': 'Locally AI funciona en iPhone, con la app optimizada para el hardware neuronal y de GPU en el dispositivo de Apple Silicon. Una vez descargado un modelo compatible, el chat funciona por completo sin conexión.',
            'Nota importante': 'La versión mínima exacta de iOS y el rendimiento por dispositivo no están publicados en las páginas de marketing públicas de la app —revisa la ficha de la App Store para conocer la compatibilidad actual antes de descargar.',
          },
          {
            'Plataforma': 'iPad',
            'Qué esperar': 'Locally AI funciona en iPad, con el mismo conjunto de modelos en el dispositivo y comportamiento sin conexión que en iPhone. La pantalla más grande y, en muchos modelos de iPad, un rendimiento de Apple Silicon comparable o superior pueden hacer más cómodas las sesiones largas.',
            'Nota importante': 'Al igual que en iPhone, revisa la versión mínima actual de iPadOS y los requisitos de almacenamiento en la App Store antes de descargar un modelo.',
          },
          {
            'Plataforma': 'Mac',
            'Qué esperar': 'Locally AI funciona en Mac, donde Apple Silicon (chips serie M) suele ofrecer más memoria unificada que iPhone o iPad, algo relevante para los modelos más grandes que admite la app.',
            'Nota importante': 'Locally AI está optimizada para Mac con Apple Silicon; el comportamiento en Mac con chip Intel no se aborda en las páginas de marketing públicas de la app —verifica la compatibilidad del chip de tu Mac antes de instalarla.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Ventajas y limitaciones',
        columns: ['Ventaja', 'Qué significa en la práctica', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Inferencia privacy-first en el dispositivo',
            'Qué significa en la práctica': 'Una vez descargado un modelo, las conversaciones se procesan en el dispositivo en lugar de enviarse a un servicio en la nube para la inferencia.',
            'Limitación / advertencia': 'La instalación inicial de la app y la descarga del modelo sí requieren conexión a internet, y es probable que las futuras actualizaciones de la app también la requieran.',
          },
          {
            'Ventaja': 'Capacidad sin conexión tras descargar el modelo',
            'Qué significa en la práctica': 'El chat funciona sin conexión a internet una vez completada la configuración —útil en vuelos, viajes o zonas con conectividad poco fiable.',
            'Limitación / advertencia': 'Debes planificar con antelación y descargar el modelo que quieras usar mientras aún tengas conexión.',
          },
          {
            'Ventaja': 'Optimizada para Apple Silicon',
            'Qué significa en la práctica': 'La app está diseñada para aprovechar el hardware neuronal y de GPU en el dispositivo de los chips actuales de iPhone, iPad y Mac.',
            'Limitación / advertencia': 'Esto también significa que Locally AI es exclusiva de Apple —no existe versión para Windows o Android para usuarios de esas plataformas.',
          },
          {
            'Ventaja': 'Acceso a varias familias de modelos abiertos en una sola app',
            'Qué significa en la práctica': 'Llama, Gemma, Qwen y DeepSeek —además de otros modelos abiertos— están disponibles desde una única interfaz, sin tener que conseguir manualmente los archivos de modelo.',
            'Limitación / advertencia': 'La lista exacta de modelos descargables y sus tamaños de almacenamiento no está publicada por completo en las páginas de marketing públicas de la app; revisa la selección actual dentro de la propia app.',
          },
          {
            'Ventaja': 'Sin coste recurrente de inferencia en la nube',
            'Qué significa en la práctica': 'Como la inferencia se ejecuta en tu propio dispositivo, no hay factura de API por mensaje ni por token para los chats gestionados en el dispositivo.',
            'Limitación / advertencia': 'La inferencia en el dispositivo consume batería y potencia de procesamiento de tu equipo, y el precio de la app en sí no se verificó de forma independiente para esta reseña —consulta la ficha actual de la App Store.',
          },
          {
            'Ventaja': 'Un solo ecosistema para iPhone, iPad y Mac',
            'Qué significa en la práctica': 'Los usuarios de Apple pueden usar la misma familia de apps en su teléfono, tablet y ordenador.',
            'Limitación / advertencia': 'Los usuarios que reparten su trabajo entre dispositivos Windows o Android necesitarán una app aparte para esas plataformas.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Locally AI frente a alternativas',
        columns: ['App', 'Mejor para', 'Enfoque de plataforma', 'Flexibilidad de modelos', 'Limitación clave'],
        rows: [
          {
            'App': 'Locally AI',
            'Mejor para': 'Usuarios de Apple que quieren una app sencilla y privacy-first para las principales familias de modelos abiertos',
            'Enfoque de plataforma': 'iPhone/iPad/Mac (optimizada para Apple Silicon)',
            'Flexibilidad de modelos': 'Llama, Gemma, Qwen, DeepSeek, además de otros modelos abiertos',
            'Limitación clave': 'Solo Apple —sin app para Windows o Android',
          },
          {
            'App': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Mejor para': 'Usuarios multiplataforma que quieren chat privado sencillo en más dispositivos',
            'Enfoque de plataforma': 'iPhone/iPad/Android/Mac/Windows (5 plataformas)',
            'Flexibilidad de modelos': 'Biblioteca seleccionada que incluye Gemma, Qwen, Llama y Phi; sin importación de archivos GGUF personalizados',
            'Limitación clave': 'Selección de modelos limitada a una biblioteca curada; no se pueden importar archivos GGUF personalizados',
          },
          {
            'App': 'Private LLM',
            'Mejor para': 'Usuarios de Apple que quieren control profundo de modelos y cuantización',
            'Enfoque de plataforma': 'iPhone/iPad/Mac (solo Apple)',
            'Flexibilidad de modelos': 'Más de 140 modelos con formatos de cuantización OmniQuant y GPTQ',
            'Limitación clave': 'Más configuración que una app diseñada para la simplicidad',
          },
          {
            'App': 'Ollama (en Mac)',
            'Mejor para': 'Desarrolladores que quieren control total por línea de comandos y API en Mac',
            'Enfoque de plataforma': 'Mac/Windows/Linux (solo escritorio, sin app móvil nativa)',
            'Flexibilidad de modelos': 'Cualquier modelo de la biblioteca de Ollama, además de importación de archivos GGUF personalizados',
            'Limitación clave': 'Flujo de trabajo centrado en línea de comandos; sin app nativa para iPhone o iPad',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Locally AI',
        items: [
          '**Usuarios exclusivamente de Apple que quieren una sola app para iPhone, iPad y Mac.** Si estás totalmente en el ecosistema Apple y no necesitas compatibilidad con Windows o Android, Locally AI cubre tus tres tipos de dispositivo con una sola app.',
          '**Usuarios preocupados por la privacidad que quieren inferencia en el dispositivo por defecto.** Una vez descargado un modelo, las conversaciones no necesitan conectividad en la nube para procesarse —una opción directa para usuarios que priorizan mantener el contenido de sus chats fuera de servidores remotos.',
          '**Viajeros y usuarios con conectividad irregular.** Como el chat funciona por completo sin conexión tras descargar el modelo, los vuelos, zonas remotas o redes poco fiables no interrumpen la función principal de la app.',
          '**Usuarios que quieren acceder a varias familias de modelos abiertos importantes sin conseguir los archivos por su cuenta.** Llama, Gemma, Qwen y DeepSeek están disponibles desde dentro de la app, sin necesidad de buscar y gestionar archivos de modelo individuales.',
          '**Usuarios que quieren probar los principales modelos de código abierto en hardware Apple sin costes en la nube.** Como la inferencia se ejecuta en el dispositivo, no hay factura de API por mensaje para los chats gestionados localmente.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Locally AI',
        items: [
          '**Usuarios de Windows o Android.** Locally AI es exclusiva de Apple (iPhone, iPad, Mac); los usuarios de otras plataformas necesitan otra app, como [Loci](/power-local-llm/loci-ai-review-offline-local-ai), que cubre cinco plataformas, incluidas Windows y Android.',
          '**Usuarios que quieren importar archivos GGUF personalizados arbitrarios.** Si tu flujo de trabajo depende de ejecutar un archivo de modelo específico, ajustado o de nicho desde Hugging Face en lugar de elegir entre las familias de modelos compatibles con Locally AI, te conviene más una herramienta más manual centrada en la importación de GGUF.',
          '**Usuarios que esperan una calidad de razonamiento de nivel frontera.** Los modelos abiertos con un tamaño que cabe cómodamente en un teléfono o tablet sacrifican algo de profundidad de razonamiento a cambio de esa portabilidad; los usuarios con análisis de alto riesgo, razonamiento complejo de varios pasos o cargas de trabajo intensivas en código pueden seguir necesitando un modelo frontera en la nube para esas tareas concretas.',
          '**Desarrolladores que quieren control centrado en línea de comandos o API.** Los usuarios que quieran automatizar la inferencia con scripts, integrarla con herramientas existentes o ejecutar modelos sin interfaz en un Mac probablemente prefieran una herramienta orientada a desarrolladores como Ollama, junto a o en lugar de una app de chat para el consumidor.',
          '**Cualquiera que no haya revisado la política de privacidad y el precio actuales de la app para su caso de uso concreto.** Esta reseña refleja información pública en el momento de escribirla; confirma el precio actual, la lista exacta de modelos y los detalles de privacidad en el [sitio oficial](https://www.locallyai.app/) o en la ficha de la App Store antes de confiar en la app para casos de uso sensibles.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es Locally AI?',
            a: 'Locally AI es una app para iPhone, iPad y Mac que ejecuta modelos de lenguaje de código abierto —entre ellos Llama, Gemma, Qwen y DeepSeek— directamente en el dispositivo, optimizada para Apple Silicon. Una vez descargado un modelo, funciona por completo sin conexión, sin necesidad de internet para chatear.',
          },
          {
            q: '¿Funciona Locally AI sin conexión a internet?',
            a: 'Sí, para el chat. Una vez instalada la app y descargado un modelo, la inferencia se ejecuta en el dispositivo y no requiere conexión a internet —la app puede usarse en modo avión. Se necesita conexión a internet para instalar la app y para la descarga inicial de un modelo.',
          },
          {
            q: '¿Qué modelos admite Locally AI?',
            a: 'Locally AI admite varias familias importantes de modelos de código abierto: Llama (Meta), Gemma (Google), Qwen (Alibaba) y DeepSeek, además de otros modelos abiertos. La lista exacta de modelos descargables y sus tamaños de almacenamiento está disponible dentro de la app o en el sitio oficial, [locallyai.app](https://www.locallyai.app/).',
          },
          {
            q: '¿Está Locally AI disponible en Android o Windows?',
            a: 'No. Locally AI está construida para iPhone, iPad y Mac y optimizada para Apple Silicon. Los usuarios de Android o Windows que busquen una app similar, sin conexión y centrada en la privacidad, deberían mirar alternativas multiplataforma, como Loci, que admite iPhone, iPad, Android, Mac y Windows.',
          },
          {
            q: '¿Es privada Locally AI?',
            a: 'Locally AI se posiciona como privacy-first: una vez descargado un modelo, la inferencia ocurre en el dispositivo en lugar de mediante llamadas a la nube. Para conocer la política de privacidad actual y completa —incluidos los datos que la propia app recopila con fines de diagnóstico o analítica— consulta el sitio oficial o la etiqueta de privacidad de la App Store, ya que esta reseña refleja información pública y no pudo verificar de forma independiente cada afirmación técnica sobre privacidad.',
          },
          {
            q: '¿Cuánto almacenamiento necesita Locally AI?',
            a: 'Los requisitos de almacenamiento dependen de qué modelo o modelos descargues; los archivos de modelos abiertos en los tamaños habituales para inferencia en el dispositivo pueden rondar desde 1 GB hasta varios GB cada uno. Los tamaños exactos y actuales de almacenamiento para cada modelo compatible no están publicados por completo en las páginas de marketing públicas de la app —revisa la lista de modelos dentro de la app antes de descargar, especialmente en dispositivos con poco espacio libre.',
          },
          {
            q: '¿Puede Locally AI sustituir a ChatGPT o Claude?',
            a: 'Para tareas adecuadas a modelos de código abierto que corren en hardware móvil o de escritorio —redactar borradores, resumir, preguntas generales, notas privadas—, Locally AI puede funcionar como alternativa privada y utilizable sin conexión. Para razonamiento de nivel frontera, las tareas de código más complejas o respuestas basadas en la web en tiempo real, los modelos en la nube como ChatGPT o Claude siguen siendo más capaces, ya que ejecutan modelos mucho más grandes de lo que cabe cómodamente en un teléfono o tablet.',
          },
          {
            q: '¿Cómo se compara Locally AI con Loci?',
            a: 'Locally AI es exclusiva de Apple (iPhone, iPad, Mac) y está optimizada específicamente para Apple Silicon, con soporte para Llama, Gemma, Qwen, DeepSeek y otros modelos abiertos. Loci cubre cinco plataformas —iPhone, iPad, Android, Mac y Windows— con una biblioteca de modelos curada. Elige Locally AI si estás totalmente en el ecosistema Apple; elige Loci si también necesitas compatibilidad con Android o Windows. Consulta nuestra [reseña completa de Loci AI](/power-local-llm/loci-ai-review-offline-local-ai) para más detalles.',
          },
          {
            q: '¿Necesito un modelo específico de iPhone, iPad o Mac para usar Locally AI?',
            a: 'Locally AI está optimizada para Apple Silicon, así que los dispositivos con chip Apple Silicon son el público objetivo previsto. Las páginas de marketing públicas de la app no indican un dispositivo o versión mínima de sistema operativo exacta en el momento de escribir esto —revisa la ficha actual de la App Store para conocer los requisitos mínimos indicados por Locally AI antes de descargar.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Locally AI es una opción sencilla para usuarios de Apple que quieren una app privacy-first y en el dispositivo para chatear con grandes familias de modelos de código abierto —Llama, Gemma, Qwen y DeepSeek— sin salir del ecosistema Apple ni gestionar manualmente los archivos de modelo. Su optimización para Apple Silicon y su funcionamiento totalmente sin conexión tras descargar el modelo la hacen adecuada para usuarios que priorizan mantener sus conversaciones fuera de servidores remotos y que prefieren una experiencia de app en lugar de un flujo de trabajo de línea de comandos. La contrapartida está en el alcance de plataformas: Locally AI no cubre Windows ni Android, así que quienes necesiten esas plataformas deberían mirar una app multiplataforma como [Loci](/power-local-llm/loci-ai-review-offline-local-ai). Quienes quieran importar archivos GGUF personalizados arbitrarios o necesiten un control de cuantización más profundo deberían compararla con herramientas que exigen más configuración, como Private LLM u Ollama. Para su público objetivo —usuarios de Apple que quieren acceso privado y sin conexión a los principales modelos abiertos sin complicaciones técnicas— Locally AI ocupa un nicho claro.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio oficial de Locally AI](https://www.locallyai.app/) —descripción del producto, familias de modelos compatibles, disponibilidad por plataforma.',
          '[Sitio oficial de Loci](https://askloci.ai) —referencia de comparación multiplataforma.',
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) —reseña complementaria usada para la comparación de alternativas en este artículo.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) —una alternativa multiplataforma que cubre iPhone, iPad, Android, Mac y Windows.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) —el repaso de apps para iPhone; incluye PocketPal AI, Private LLM, MLC Chat, LLM Farm y Apple Intelligence.',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) —guía centrada en dispositivos para inferencia local y remota en tablets.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) —complemento a nivel de modelo; benchmarks y compromisos de calidad en móvil.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) —directorio completo de apps y herramientas para todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/locally-ai-review-hero-pt.webp',
    title: 'Locally AI Review (2026): LLMs privados offline no iPhone, iPad e Mac',
    seoTitle: 'Locally AI Review 2026: LLMs offline em dispositivos Apple',
    intro:
      'Locally AI, da desenvolvedora [Locally AI](https://www.locallyai.app/), é um app para rodar modelos de linguagem de código aberto — incluindo Llama, Gemma, Qwen e DeepSeek — diretamente no iPhone, iPad e Mac, otimizado para Apple Silicon. Depois de baixar um modelo, ele funciona totalmente no dispositivo: não é preciso conexão com a internet para conversar, e o posicionamento privacy-first da desenvolvedora significa que as conversas não são enviadas a um serviço em nuvem para inferência. A pergunta prática para quem está avaliando o app não é se a inferência no dispositivo é possível em hardware Apple — o Apple Silicon tem poder neural e de GPU de sobra para isso —, mas sim se o Locally AI oferece uma experiência de app funcional em torno dessa inferência, sem exigir que você escolha manualmente arquivos GGUF, ajuste a quantização ou calcule a VRAM necessária.',
    metaDescription:
      'Locally AI review: vale a pena para LLMs privados e offline no iPhone, iPad e Mac? Como funciona com Llama, Gemma, Qwen e DeepSeek, para quem é indicado e como se compara ao Loci e ao Private LLM.',
    twitterDescription:
      'Locally AI review 2026: rode Llama, Gemma, Qwen e DeepSeek totalmente offline no iPhone, iPad e Mac — otimizado para Apple Silicon. Posicionamento de privacidade, adequação por plataforma e comparação com Loci e Private LLM.',
    audience:
      'Usuários de dispositivos Apple decidindo entre LLMs no dispositivo via Locally AI e serviços de IA em nuvem ou outros apps de LLM local — cobre adequação por plataforma, posicionamento de privacidade, modelos suportados e comparação com apps semelhantes focados em uso offline.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Visitar o site oficial do Locally AI →', url: 'https://[www.locallyai.app](https://www.locallyai.app/)/', productName: 'Locally AI', productCategory: 'software' },
    ],
    primaryTerm: 'Locally AI review',
    targetKeywords: [
      'locally ai review',
      'locally ai app',
      'locally ai iphone',
      'locally ai mac',
      'llm offline iphone',
      'rodar llama no iphone',
      'locally ai vs loci',
      'app de llm local apple silicon',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Silicon'],
    leadAnswerBlock:
      '**O Locally AI é especialmente interessante se você quer um app simples e privacy-first para conversar com modelos abertos como Llama, Gemma, Qwen e DeepSeek totalmente em um dispositivo Apple.** Ele roda no iPhone, iPad e Mac, é otimizado para Apple Silicon e, depois de baixar um modelo, funciona totalmente offline — sem chamadas à nuvem, sem necessidade de internet para conversar. Foi feito para usuários que querem IA privada no dispositivo sem sair do ecossistema Apple nem gerenciar infraestrutura de inferência por conta própria. Quem precisa de suporte a Windows ou Android, quer importar arquivos GGUF personalizados, ou precisa de raciocínio de nível de ponta além do que modelos abertos na faixa de poucos bilhões de parâmetros conseguem entregar em um telefone ou tablet, deve comparar com apps como o Loci ou gerenciar modelos diretamente com uma ferramenta como o Ollama em um Mac.',
    quickAnswerTop: {
      pt: {
        question: 'Devo usar o Locally AI para LLMs offline no iPhone ou Mac?',
        answer:
          'Use o Locally AI se quiser conversar com modelos abertos como Llama, Gemma, Qwen ou DeepSeek totalmente offline no iPhone, iPad ou Mac, sem chamadas à nuvem depois de baixar um modelo. Evite se precisar de suporte a Windows ou Android, ou quiser importar seus próprios arquivos GGUF fora do conjunto de modelos suportados pelo app.',
        bullets: [
          'Roda Llama, Gemma, Qwen e DeepSeek totalmente no dispositivo.',
          'Plataformas: iPhone, iPad e Mac — otimizado para Apple Silicon.',
          'Não exige conexão com a internet para conversar depois de baixar um modelo.',
          'Posicionamento privacy-first: sem chamadas à nuvem para inferência.',
          'Apenas Apple — sem app para Windows ou Android.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Locally AI', anchor: 'what-is-locally-ai' },
      { label: 'Quais modelos o Locally AI suporta', anchor: 'models-supported' },
      { label: 'Locally AI em cada plataforma', anchor: 'platforms-hardware' },
      { label: 'Prós e contras', anchor: 'tradeoffs' },
      { label: 'Locally AI vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deve usar o Locally AI', anchor: 'who-should-use' },
      { label: 'Quem não deve usar o Locally AI', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Locally AI é um app para iPhone, iPad e Mac que roda modelos de linguagem de código aberto — incluindo Llama, Gemma, Qwen e DeepSeek — totalmente no dispositivo, otimizado para Apple Silicon, de forma que, após baixar um modelo, não é preciso conexão com a internet nem chamada à nuvem para conversar.' },
          { type: 'plain-terms', text: 'Em vez de enviar suas mensagens para os servidores de uma empresa, o Locally AI baixa um modelo de IA compacto para o seu iPhone, iPad ou Mac e o executa ali mesmo. Você pode ativar o modo avião depois que o download terminar e o app continua funcionando, porque o design privacy-first da desenvolvedora faz com que nada da conversa em si precise sair do seu dispositivo.' },
        ],
        items: [
          'Locally AI roda modelos de código aberto — Llama, Gemma, Qwen e DeepSeek — totalmente offline, no dispositivo.',
          'Plataformas: iPhone, iPad e Mac, otimizado para Apple Silicon.',
          'Não é preciso conexão com a internet depois de baixar um modelo.',
          'Posicionamento privacy-first: a desenvolvedora afirma que a inferência acontece no dispositivo, sem chamadas à nuvem.',
          'Apenas Apple — não há versão para Windows ou Android; usuários desses sistemas precisam de outro app.',
          'A principal contrapartida de qualquer app no dispositivo para telefone e tablet: tamanhos de modelo que cabem confortavelmente em hardware móvel ficam atrás dos modelos de ponta em nuvem em tarefas de raciocínio complexo e de várias etapas.',
        ],
        callouts: [
          { type: 'note', text: 'Esta avaliação se baseia em informações públicas do [locallyai.app](https://www.locallyai.app/) e das fichas oficiais do app. Preço, lista exata de modelos, tamanho de armazenamento e versão mínima do sistema operacional não foram verificados de forma independente no momento da redação — confirme os detalhes atuais no site oficial ou na ficha da App Store antes de baixar.' },
        ],
      },
      whatIsLocallyAI: {
        id: 'what-is-locally-ai',
        title: 'O que é o Locally AI?',
        content: [
          '**Locally AI é um app que roda modelos de linguagem de código aberto diretamente no iPhone, iPad e Mac, sem enviar as conversas a um serviço em nuvem.** Ele é construído e otimizado para Apple Silicon, a arquitetura de chip que a Apple usa em sua linha atual de iPhone, iPad e Mac, o que significa que o app é projetado para aproveitar o hardware neural e de GPU no dispositivo que esses chips oferecem, em vez de tratar o telefone como um cliente leve para um servidor remoto.',
          'O conjunto principal de modelos inclui Llama (família de modelos abertos da Meta), Gemma (família de modelos abertos do Google), Qwen (família de modelos abertos da Alibaba) e DeepSeek (família de modelos abertos da DeepSeek) — todos modelos de código aberto que podem ser distribuídos como arquivos independentes e executados sem uma API controlada pelo fornecedor. O Locally AI reúne o acesso a esses modelos em uma única interface adequada para mobile e desktop, então o usuário não precisa buscar os arquivos de modelo por conta própria nem rodar um servidor de inferência separado.',
          'Depois que um modelo termina de ser baixado no dispositivo, o Locally AI não precisa de conexão com a internet para gerar respostas — a inferência roda localmente usando o próprio processador e memória do dispositivo. Esse é o significado prático de "offline": o app pode funcionar em modo avião, em um voo, ou em qualquer lugar sem conectividade, desde que o modelo tenha sido baixado antes.',
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quais modelos o Locally AI suporta?',
        content: [
          '**Locally AI suporta várias famílias importantes de modelos de código aberto — Llama, Gemma, Qwen e DeepSeek — além de outros modelos abertos, todos executáveis totalmente no dispositivo.** Essas quatro famílias cobrem uma ampla gama de casos de uso e estão entre os modelos abertos mais usados atualmente, cada uma mantida por uma organização diferente (Meta, Google, Alibaba e DeepSeek, respectivamente).',
        ],
        items: [
          '**Llama** — família de modelos abertos da Meta, amplamente usada como base geral de chat e raciocínio em todo o ecossistema de LLMs locais.',
          '**Gemma** — família de modelos abertos do Google, construída na mesma linhagem de pesquisa dos modelos Gemini do Google, comum em implantações no dispositivo e de borda (edge).',
          '**Qwen** — família de modelos abertos da Alibaba, conhecida pelo forte suporte multilíngue e por uma ampla gama de tamanhos de modelo adequados a hardware limitado.',
          '**DeepSeek** — família de modelos abertos da DeepSeek, reconhecida por desempenho de raciocínio competitivo em relação ao tamanho do modelo.',
          '**Outros modelos abertos** — o Locally AI afirma suportar modelos abertos adicionais além dessas quatro famílias principais, ampliando as opções do que pode rodar no dispositivo.',
        ],
        note: 'O Locally AI não publica um changelog completo com versões exatas de modelos, variantes de contagem de parâmetros ou tamanhos de armazenamento em suas páginas públicas de marketing no momento da redação. Consulte a lista de modelos dentro do app ou o site oficial [locallyai.app](https://www.locallyai.app/) para o conjunto atual e exato de modelos disponíveis para download antes de escolher um de acordo com o armazenamento disponível no seu dispositivo.',
      },
      platformsHardware: {
        id: 'platforms-hardware',
        itemHeadings: true,
        title: 'Locally AI em cada plataforma',
        columns: ['Plataforma', 'O que esperar', 'Observação importante'],
        rows: [
          {
            'Plataforma': 'iPhone',
            'O que esperar': 'O Locally AI roda no iPhone, com o app otimizado para o hardware neural e de GPU no dispositivo do Apple Silicon. Depois de baixar um modelo suportado, o chat funciona totalmente offline.',
            'Observação importante': 'A versão mínima exata do iOS e o desempenho por dispositivo não são publicados nas páginas públicas de marketing do app — verifique a ficha da App Store para a compatibilidade atual antes de baixar.',
          },
          {
            'Plataforma': 'iPad',
            'O que esperar': 'O Locally AI roda no iPad, com o mesmo conjunto de modelos no dispositivo e comportamento offline do iPhone. A tela maior e, em muitos modelos de iPad, desempenho de Apple Silicon comparável ou superior podem tornar sessões mais longas mais confortáveis.',
            'Observação importante': 'Assim como no iPhone, verifique a versão mínima atual do iPadOS e os requisitos de armazenamento na App Store antes de baixar um modelo.',
          },
          {
            'Plataforma': 'Mac',
            'O que esperar': 'O Locally AI roda no Mac, onde o Apple Silicon (chips série M) normalmente oferece mais memória unificada do que iPhone ou iPad, o que pode importar para os maiores modelos suportados pelo app.',
            'Observação importante': 'O Locally AI é otimizado para Macs com Apple Silicon; o comportamento em Macs baseados em Intel não é tratado nas páginas públicas de marketing do app — verifique a compatibilidade do chip do seu Mac antes de instalar.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras',
        columns: ['Benefício', 'O que isso significa na prática', 'Limitação / observação'],
        rows: [
          {
            'Benefício': 'Inferência privacy-first no dispositivo',
            'O que isso significa na prática': 'Depois de baixar um modelo, as conversas são processadas no dispositivo, em vez de enviadas a um serviço em nuvem para inferência.',
            'Limitação / observação': 'A instalação inicial do app e o download do modelo em si exigem conexão com a internet, assim como futuras atualizações do app provavelmente também exigirão.',
          },
          {
            'Benefício': 'Funciona offline após baixar o modelo',
            'O que isso significa na prática': 'O chat funciona sem conexão com a internet depois que a configuração é concluída — útil em voos, viagens ou áreas com conectividade instável.',
            'Limitação / observação': 'Você precisa se planejar com antecedência e baixar o modelo desejado enquanto ainda tem conexão.',
          },
          {
            'Benefício': 'Otimizado para Apple Silicon',
            'O que isso significa na prática': 'O app é feito para aproveitar o hardware neural e de GPU no dispositivo dos chips atuais de iPhone, iPad e Mac.',
            'Limitação / observação': 'Isso também significa que o Locally AI é exclusivo da Apple — não há versão para Windows ou Android para usuários dessas plataformas.',
          },
          {
            'Benefício': 'Acesso a várias famílias de modelos abertos em um único app',
            'O que isso significa na prática': 'Llama, Gemma, Qwen e DeepSeek — além de outros modelos abertos — estão disponíveis em uma única interface, sem precisar buscar arquivos de modelo manualmente.',
            'Limitação / observação': 'A lista exata de modelos disponíveis para download e seus tamanhos de armazenamento não está publicada por completo nas páginas públicas de marketing do app; verifique a seleção atual dentro do próprio app.',
          },
          {
            'Benefício': 'Sem custo recorrente de inferência em nuvem',
            'O que isso significa na prática': 'Como a inferência roda no seu próprio dispositivo, não há cobrança de API por mensagem ou token para conversas processadas no dispositivo.',
            'Limitação / observação': 'A inferência no dispositivo consome bateria e poder de processamento do seu aparelho, e o preço do próprio app não foi verificado de forma independente para esta avaliação — consulte a ficha atual da App Store.',
          },
          {
            'Benefício': 'Um único ecossistema para iPhone, iPad e Mac',
            'O que isso significa na prática': 'Usuários Apple podem usar a mesma família de apps no telefone, tablet e computador.',
            'Limitação / observação': 'Usuários que dividem o trabalho entre dispositivos Windows ou Android precisarão de um app separado para essas plataformas.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Locally AI vs. alternativas',
        columns: ['App', 'Melhor para', 'Foco de plataforma', 'Flexibilidade de modelos', 'Principal limitação'],
        rows: [
          {
            'App': 'Locally AI',
            'Melhor para': 'Usuários Apple que querem um app simples e privacy-first para as principais famílias de modelos abertos',
            'Foco de plataforma': 'iPhone/iPad/Mac (otimizado para Apple Silicon)',
            'Flexibilidade de modelos': 'Llama, Gemma, Qwen, DeepSeek, além de outros modelos abertos',
            'Principal limitação': 'Apenas Apple — sem app para Windows ou Android',
          },
          {
            'App': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'Melhor para': 'Usuários multiplataforma que querem chat privado simples em mais dispositivos',
            'Foco de plataforma': 'iPhone/iPad/Android/Mac/Windows (5 plataformas)',
            'Flexibilidade de modelos': 'Biblioteca curada incluindo Gemma, Qwen, Llama e Phi; sem importação de arquivos GGUF personalizados',
            'Principal limitação': 'Seleção de modelos limitada a uma biblioteca curada; não é possível importar arquivos GGUF personalizados',
          },
          {
            'App': 'Private LLM',
            'Melhor para': 'Usuários Apple que querem controle profundo de modelos e quantização',
            'Foco de plataforma': 'iPhone/iPad/Mac (apenas Apple)',
            'Flexibilidade de modelos': 'Mais de 140 modelos com formatos de quantização OmniQuant e GPTQ',
            'Principal limitação': 'Mais configuração do que um app projetado para simplicidade',
          },
          {
            'App': 'Ollama (no Mac)',
            'Melhor para': 'Desenvolvedores que querem controle total via linha de comando e API no Mac',
            'Foco de plataforma': 'Mac/Windows/Linux (apenas desktop, sem app mobile nativo)',
            'Flexibilidade de modelos': 'Qualquer modelo da biblioteca do Ollama, além de importação de arquivos GGUF personalizados',
            'Principal limitação': 'Fluxo de trabalho voltado para linha de comando; sem app nativo para iPhone ou iPad',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deve usar o Locally AI',
        items: [
          '**Usuários exclusivamente Apple que querem um único app para iPhone, iPad e Mac.** Se você está totalmente dentro do ecossistema Apple e não precisa de suporte a Windows ou Android, o Locally AI cobre seus três tipos de dispositivo com um único app.',
          '**Usuários preocupados com privacidade que querem inferência no dispositivo por padrão.** Depois de baixar um modelo, as conversas não precisam de conectividade em nuvem para serem processadas — uma opção direta para usuários que priorizam manter o conteúdo das conversas fora de servidores remotos.',
          '**Viajantes e usuários com conectividade instável.** Como o chat funciona totalmente offline depois do download do modelo, voos, áreas remotas ou redes pouco confiáveis não interrompem a função principal do app.',
          '**Usuários que querem acesso a várias famílias importantes de modelos abertos sem buscar os arquivos por conta própria.** Llama, Gemma, Qwen e DeepSeek estão disponíveis dentro do app, sem precisar procurar e gerenciar arquivos de modelo individuais.',
          '**Usuários que querem experimentar modelos de código aberto líderes em hardware Apple sem custos de nuvem.** Como a inferência roda no dispositivo, não há cobrança de API por mensagem para conversas processadas localmente.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deve usar o Locally AI',
        items: [
          '**Usuários de Windows ou Android.** O Locally AI é exclusivo da Apple (iPhone, iPad, Mac); usuários de outras plataformas precisam de outro app, como o [Loci](/power-local-llm/loci-ai-review-offline-local-ai), que cobre cinco plataformas, incluindo Windows e Android.',
          '**Usuários que querem importar arquivos GGUF personalizados arbitrários.** Se o seu fluxo de trabalho depende de rodar um arquivo de modelo específico, ajustado ou de nicho vindo do Hugging Face, em vez de escolher entre as famílias de modelos suportadas pelo Locally AI, uma ferramenta mais manual voltada para importação de GGUF é mais adequada.',
          '**Usuários que esperam qualidade de raciocínio de nível de ponta.** Modelos abertos dimensionados para rodar confortavelmente em um telefone ou tablet trocam parte da profundidade de raciocínio por essa portabilidade; usuários com análises de alto risco, raciocínio complexo em várias etapas ou cargas de trabalho intensas em código podem ainda precisar de um modelo de ponta em nuvem para essas tarefas específicas.',
          '**Desenvolvedores que querem controle via linha de comando ou API.** Usuários que querem automatizar a inferência com scripts, integrá-la a ferramentas existentes ou rodar modelos sem interface em um Mac podem preferir uma ferramenta voltada para desenvolvedores, como o Ollama, junto de ou em vez de um app de chat para o consumidor.',
          '**Qualquer pessoa que não tenha revisado a política de privacidade e o preço atuais do app para seu caso de uso específico.** Esta avaliação reflete informações públicas no momento da redação; confirme o preço atual, a lista exata de modelos e os detalhes de privacidade no [site oficial](https://www.locallyai.app/) ou na ficha da App Store antes de confiar no app para casos de uso sensíveis.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é o Locally AI?',
            a: 'Locally AI é um app para iPhone, iPad e Mac que roda modelos de linguagem de código aberto — incluindo Llama, Gemma, Qwen e DeepSeek — diretamente no dispositivo, otimizado para Apple Silicon. Depois de baixar um modelo, ele funciona totalmente offline, sem necessidade de internet para conversar.',
          },
          {
            q: 'O Locally AI funciona sem conexão com a internet?',
            a: 'Sim, para o chat. Depois que o app é instalado e um modelo é baixado, a inferência roda no dispositivo e não exige conexão com a internet — o app pode ser usado em modo avião. É necessária conexão com a internet para instalar o app e para o download inicial de um modelo.',
          },
          {
            q: 'Quais modelos o Locally AI suporta?',
            a: 'O Locally AI suporta várias famílias importantes de modelos de código aberto: Llama (Meta), Gemma (Google), Qwen (Alibaba) e DeepSeek, além de outros modelos abertos. A lista exata de modelos disponíveis para download e seus tamanhos de armazenamento está disponível dentro do app ou no site oficial, [locallyai.app](https://www.locallyai.app/).',
          },
          {
            q: 'O Locally AI está disponível para Android ou Windows?',
            a: 'Não. O Locally AI é feito para iPhone, iPad e Mac e otimizado para Apple Silicon. Usuários de Android ou Windows que buscam um app semelhante, offline-first e focado em privacidade, devem considerar alternativas multiplataforma, como o Loci, que suporta iPhone, iPad, Android, Mac e Windows.',
          },
          {
            q: 'O Locally AI é privado?',
            a: 'O Locally AI se posiciona como privacy-first: depois de baixar um modelo, a inferência acontece no dispositivo, em vez de por meio de chamadas à nuvem. Para a política de privacidade atual e completa — incluindo quaisquer dados que o próprio app coleta para diagnóstico ou análise — consulte o site oficial ou o rótulo de privacidade da App Store, já que esta avaliação reflete informações públicas e não pôde verificar de forma independente cada afirmação técnica de privacidade.',
          },
          {
            q: 'Quanto armazenamento o Locally AI precisa?',
            a: 'Os requisitos de armazenamento dependem de quais modelos você baixa; arquivos de modelos abertos nos tamanhos tipicamente usados para inferência no dispositivo podem variar de aproximadamente 1 GB a vários GB cada. Os tamanhos exatos e atuais de armazenamento para cada modelo suportado não estão publicados por completo nas páginas públicas de marketing do app — verifique a lista de modelos dentro do app antes de baixar, especialmente em dispositivos com pouco espaço livre.',
          },
          {
            q: 'O Locally AI pode substituir o ChatGPT ou o Claude?',
            a: 'Para tarefas adequadas a modelos de código aberto rodando em hardware mobile ou desktop — rascunhos, resumos, perguntas gerais, anotações privadas —, o Locally AI pode funcionar como uma alternativa privada e utilizável offline. Para raciocínio de nível de ponta, as tarefas de código mais complexas ou respostas baseadas em busca ao vivo na web, modelos em nuvem como ChatGPT ou Claude continuam mais capazes, já que rodam modelos muito maiores do que cabe confortavelmente em um telefone ou tablet.',
          },
          {
            q: 'Como o Locally AI se compara ao Loci?',
            a: 'O Locally AI é exclusivo da Apple (iPhone, iPad, Mac) e especificamente otimizado para Apple Silicon, com suporte a Llama, Gemma, Qwen, DeepSeek e outros modelos abertos. O Loci cobre cinco plataformas — iPhone, iPad, Android, Mac e Windows — com uma biblioteca de modelos curada. Escolha o Locally AI se você está totalmente dentro do ecossistema Apple; escolha o Loci se também precisar de suporte a Android ou Windows. Veja nosso [review completo do Loci AI](/power-local-llm/loci-ai-review-offline-local-ai) para mais detalhes.',
          },
          {
            q: 'Preciso de um modelo específico de iPhone, iPad ou Mac para usar o Locally AI?',
            a: 'O Locally AI é otimizado para Apple Silicon, então dispositivos com chip Apple Silicon são o público-alvo pretendido. As páginas públicas de marketing do app não listam um dispositivo mínimo ou versão de sistema operacional exata no momento da redação — verifique a ficha atual da App Store para os requisitos mínimos indicados pelo Locally AI antes de baixar.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Locally AI é uma escolha direta para usuários Apple que querem um app privacy-first e no dispositivo para conversar com grandes famílias de modelos de código aberto — Llama, Gemma, Qwen e DeepSeek — sem sair do ecossistema Apple nem gerenciar arquivos de modelo manualmente. Sua otimização para Apple Silicon e o funcionamento totalmente offline após o download do modelo o tornam adequado para usuários que priorizam manter as conversas fora de servidores remotos e que preferem uma experiência de app em vez de um fluxo de trabalho de linha de comando. A contrapartida está no alcance de plataformas: o Locally AI não cobre Windows nem Android, então usuários que precisam dessas plataformas devem considerar um app multiplataforma como o [Loci](/power-local-llm/loci-ai-review-offline-local-ai). Usuários que querem importar arquivos GGUF personalizados arbitrários ou precisam de controle de quantização mais profundo devem comparar com ferramentas que exigem mais configuração, como Private LLM ou Ollama. Para seu público-alvo — usuários Apple que querem acesso privado e offline aos principais modelos abertos sem complicação técnica — o Locally AI ocupa um nicho claro.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site oficial do Locally AI](https://www.locallyai.app/) — visão geral do produto, famílias de modelos suportadas, disponibilidade por plataforma.',
          '[Site oficial do Loci](https://askloci.ai) — referência de comparação multiplataforma.',
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — review complementar usado para a comparação de alternativas neste artigo.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — uma alternativa multiplataforma cobrindo iPhone, iPad, Android, Mac e Windows.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama de apps para iPhone; inclui PocketPal AI, Private LLM, MLC Chat, LLM Farm e Apple Intelligence.',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — guia focado em dispositivos para inferência local e remota em tablets.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — complemento no nível de modelos; benchmarks e trade-offs de qualidade em mobile.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — diretório completo de apps e ferramentas para todas as plataformas.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/locally-ai-review-hero-ja.webp',
    title: 'Locally AIレビュー(2026):iPhone・iPad・Macで動くプライベートなオフラインLLM',
    seoTitle: 'Locally AIレビュー2026:AppleデバイスのオフラインLLM',
    intro:
      '開発元[Locally AI](https://www.locallyai.app/)が提供するLocally AIは、Llama、Gemma、Qwen、DeepSeekなどのオープンソース言語モデルをiPhone、iPad、Macで直接実行できるアプリで、Apple Siliconに最適化されています。モデルをダウンロードすれば、あとは完全にデバイス上で動作します。チャットにインターネット接続は不要で、開発元のプライバシー重視の設計により、会話が推論のためにクラウドサービスへ送信されることはありません。検討する上で実際に重要なのは、Appleのハードウェアでデバイス上推論が可能かどうかではなく——Apple SiliconにはそのためのNeural EngineとGPU性能が十分にあります——GGUFファイルを自分で選んだり、量子化を調整したり、必要なVRAMを計算したりせずに、Locally AIがその推論の周りに実用的なアプリ体験を提供しているかどうかです。',
    metaDescription:
      'Locally AIレビュー:iPhone・iPad・Macでプライベートかつオフラインに使えるLLMアプリとして価値があるか。Llama、Gemma、Qwen、DeepSeekでの動作、向いているユーザー、LociやPrivate LLMとの比較を解説。',
    twitterDescription:
      'Locally AIレビュー2026:Llama、Gemma、Qwen、DeepSeekをiPhone・iPad・Macで完全オフライン実行——Apple Silicon最適化。プライバシー方針、プラットフォーム適性、LociやPrivate LLMとの比較。',
    audience:
      'Locally AIによるデバイス上LLMと、クラウドAIサービスや他のローカルLLMアプリのどちらを使うか検討しているAppleデバイスユーザー——プラットフォーム適性、プライバシー方針、対応モデル、類似のオフライン重視アプリとの比較を扱う。',
    readTime: '8分で読めます',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Locally AI公式サイトを見る →', url: 'https://[www.locallyai.app](https://www.locallyai.app/)/', productName: 'Locally AI', productCategory: 'software' },
    ],
    primaryTerm: 'Locally AIレビュー',
    targetKeywords: [
      'locally ai レビュー',
      'locally ai アプリ',
      'locally ai iphone',
      'locally ai mac',
      'iphone オフライン llm',
      'iphone llama 実行',
      'locally ai vs loci',
      'apple silicon ローカルllmアプリ',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Silicon'],
    leadAnswerBlock:
      '**Locally AIが特に魅力的なのは、Llama、Gemma、Qwen、DeepSeekといったオープンモデルとAppleデバイス上だけで完結してチャットしたい人にとって、シンプルでプライバシー重視のアプリが欲しい場合です。** iPhone、iPad、Macで動作し、Apple Siliconに最適化されており、モデルをダウンロードすれば完全にオフラインで動作します——クラウド呼び出しなし、チャットにインターネット接続も不要です。Appleのエコシステムを離れず、推論インフラを自分で管理することなく、プライベートなデバイス上AIを求めるユーザー向けに作られています。WindowsやAndroidのサポートが必要な人、任意のカスタムGGUFファイルをインポートしたい人、あるいは数十億パラメータ規模のオープンモデルがスマートフォンやタブレットで発揮できる範囲を超えたフロンティア級の推論が必要な人は、Lociのようなアプリと比較するか、Mac上でOllamaのようなツールを使ってモデルを直接管理することを検討すべきです。',
    quickAnswerTop: {
      ja: {
        question: 'iPhoneやMacでオフラインLLMを使うならLocally AIを選ぶべきか?',
        answer:
          'Llama、Gemma、Qwen、DeepSeekといったオープンモデルとiPhone、iPad、Macで完全オフラインでチャットしたいなら、モデルをダウンロードした後はクラウド呼び出しなしで使えるLocally AIがおすすめです。WindowsやAndroidのサポートが必要な場合や、アプリが対応するモデル以外の独自GGUFファイルをインポートしたい場合は避けましょう。',
        bullets: [
          'Llama、Gemma、Qwen、DeepSeekを完全にデバイス上で実行。',
          '対応プラットフォーム:iPhone、iPad、Mac——Apple Silicon最適化。',
          'モデルダウンロード後はチャットにインターネット接続不要。',
          'プライバシー重視の方針:推論のためのクラウド呼び出しなし。',
          'Apple専用——WindowsやAndroidアプリはなし。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Locally AIとは', anchor: 'what-is-locally-ai' },
      { label: 'Locally AIが対応するモデル', anchor: 'models-supported' },
      { label: '各プラットフォームでのLocally AI', anchor: 'platforms-hardware' },
      { label: 'トレードオフ:メリットと制限', anchor: 'tradeoffs' },
      { label: 'Locally AIと代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'Locally AIが向いている人', anchor: 'who-should-use' },
      { label: 'Locally AIが向いていない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Locally AIはiPhone、iPad、Mac向けのアプリで、Llama、Gemma、Qwen、DeepSeekなどのオープンソース言語モデルを完全にデバイス上で実行し、Apple Siliconに最適化されているため、モデルをダウンロードすればインターネット接続もクラウド呼び出しも不要でチャットできます。' },
          { type: 'plain-terms', text: 'メッセージを企業のサーバーに送る代わりに、Locally AIはコンパクトなAIモデルをiPhoneやiPad、Macにダウンロードして、そこで直接実行します。ダウンロードが終わった後は機内モードにしても動作し続けます。開発元のプライバシー重視の設計により、会話そのものについては何もデバイスの外に出す必要がないからです。' },
        ],
        items: [
          'Locally AIはLlama、Gemma、Qwen、DeepSeekといったオープンソースモデルをデバイス上で完全にオフライン実行する。',
          '対応プラットフォーム:iPhone、iPad、Mac。Apple Silicon最適化。',
          'モデルをダウンロードすれば、以降はインターネット接続不要。',
          'プライバシー重視の方針:開発元は推論がデバイス上で行われ、クラウド呼び出しはないとしている。',
          'Apple専用——WindowsやAndroid版は存在せず、他OSのユーザーは別のアプリが必要。',
          'スマートフォン・タブレット向けのデバイス上アプリに共通する本質的なトレードオフ:モバイルハードウェアに無理なく収まるモデルサイズは、複雑で多段階の推論タスクではフロンティア級のクラウドモデルに劣る。',
        ],
        callouts: [
          { type: 'note', text: '本レビューは[locallyai.app](https://www.locallyai.app/)およびアプリの公式掲載情報に基づく公開情報に基づいています。価格、正確なモデル一覧、ストレージサイズ、最小OSバージョンについては執筆時点で独自に検証していません——ダウンロード前に公式サイトやApp Storeの掲載情報で最新の詳細をご確認ください。' },
        ],
      },
      whatIsLocallyAI: {
        id: 'what-is-locally-ai',
        title: 'Locally AIとは何か?',
        content: [
          '**Locally AIは、会話をクラウドサービスに送信することなく、iPhone、iPad、Mac上で直接オープンソース言語モデルを実行するアプリです。** Apple Silicon向けに構築・最適化されています。Apple Siliconは現行のiPhone、iPad、Macで使われているチップアーキテクチャで、これはこのアプリが電話をリモートサーバーへの薄いクライアントとして扱うのではなく、これらのチップが提供するデバイス上のNeural EngineおよびGPUハードウェアを活用するよう設計されていることを意味します。',
          '中核となるモデル群には、Llama(Metaのオープンウェイトモデルファミリー)、Gemma(Googleのオープンウェイトモデルファミリー)、Qwen(Alibabaのオープンウェイトモデルファミリー)、DeepSeek(DeepSeekのオープンウェイトモデルファミリー)が含まれます——いずれも単体ファイルとして配布でき、ベンダー管理のAPIなしで実行できるオープンソースモデルです。Locally AIはこれらのモデルへのアクセスを、モバイルとデスクトップの両方に対応した単一のインターフェースにまとめているため、ユーザーは自分でモデルファイルを調達したり、別途推論サーバーを運用したりする必要がありません。',
          'モデルがデバイスへのダウンロードを完了すると、Locally AIは応答を生成するためにインターネット接続を必要としません——推論はデバイス自身のプロセッサとメモリを使ってローカルで実行されます。これが「オフライン」の実際的な意味です。あらかじめモデルをダウンロードしておけば、機内モードや飛行機の中、あるいは接続がまったくない場所でもアプリを使用できます。',
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Locally AIはどのモデルに対応しているか?',
        content: [
          '**Locally AIは、Llama、Gemma、Qwen、DeepSeekという主要なオープンソースモデルファミリーに加え、その他のオープンモデルにも対応しており、すべて完全にデバイス上で実行できます。** これら4つのファミリーは幅広いユースケースをカバーし、現在最も広く使われているオープンウェイトモデルの一部を占めています。それぞれ異なる組織(Meta、Google、Alibaba、DeepSeek)によって保守されています。',
        ],
        items: [
          '**Llama** — Metaのオープンウェイトモデルファミリー。ローカルLLMエコシステム全体で汎用的なチャットと推論の基盤として広く使われている。',
          '**Gemma** — Googleのオープンウェイトモデルファミリー。GoogleのGeminiモデルと同じ研究系譜から生まれ、デバイス上およびエッジでの展開によく使われる。',
          '**Qwen** — Alibabaのオープンウェイトモデルファミリー。強力な多言語対応と、制約のあるハードウェアに適した幅広いモデルサイズで知られる。',
          '**DeepSeek** — DeepSeekのオープンウェイトモデルファミリー。モデルサイズに対して競争力のある推論性能で評価されている。',
          '**その他のオープンモデル** — Locally AIは、これら4つの主要ファミリー以外にも追加のオープンモデルに対応しているとしており、デバイス上で実行できるモデルの選択肢を広げている。',
        ],
        note: '執筆時点で、Locally AIは公開マーケティングページ上に、正確なモデルバージョン、パラメータ数バリアント、ストレージサイズの完全な変更履歴を公開していません。デバイスの空き容量に応じてモデルを選ぶ前に、アプリ内のモデル一覧または公式サイト[locallyai.app](https://www.locallyai.app/)で、現在ダウンロード可能な正確なモデル一覧を確認してください。',
      },
      platformsHardware: {
        id: 'platforms-hardware',
        itemHeadings: true,
        title: '各プラットフォームでのLocally AI',
        columns: ['プラットフォーム', '想定される内容', '重要な注意点'],
        rows: [
          {
            'プラットフォーム': 'iPhone',
            '想定される内容': 'Locally AIはiPhoneで動作し、アプリはApple SiliconのデバイスNeural EngineおよびGPUハードウェアを活用するよう最適化されています。対応モデルをダウンロードすれば、チャットは完全にオフラインで機能します。',
            '重要な注意点': '正確な最小iOSバージョンやデバイスごとの性能は、アプリの公開マーケティングページには記載されていません——ダウンロード前にApp Storeの掲載情報で現在の対応機種を確認してください。',
          },
          {
            'プラットフォーム': 'iPad',
            '想定される内容': 'Locally AIはiPadで動作し、iPhoneと同じデバイス上モデル群とオフライン動作を共有します。画面が大きく、多くのiPadモデルではApple Siliconの性能も同等以上であるため、長時間のセッションが快適になる場合があります。',
            '重要な注意点': 'iPhoneと同様、モデルをダウンロードする前にApp Storeで現在の最小iPadOSバージョンとストレージ要件を確認してください。',
          },
          {
            'プラットフォーム': 'Mac',
            '想定される内容': 'Locally AIはMacで動作し、Apple Silicon(Mシリーズチップ)はiPhoneやiPadに比べて統合メモリが多いのが一般的です。これはアプリが対応する最大サイズのモデルにとって重要になり得ます。',
            '重要な注意点': 'Locally AIはApple Silicon搭載Macに最適化されています。Intelベースのmacでの動作についてはアプリの公開マーケティングページで触れられていません——インストール前にMacのチップ互換性を確認してください。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制限',
        columns: ['メリット', '実際の使用で意味すること', '制限・注意点'],
        rows: [
          {
            'メリット': 'プライバシー重視のデバイス上推論',
            '実際の使用で意味すること': 'モデルをダウンロードすれば、会話は推論のためにクラウドサービスへ送られるのではなく、デバイス上で処理される。',
            '制限・注意点': 'アプリの初回インストールとモデルのダウンロード自体はインターネット接続が必要で、今後のアプリアップデートも同様である可能性が高い。',
          },
          {
            'メリット': 'モデルダウンロード後はオフライン利用可能',
            '実際の使用で意味すること': 'セットアップが完了すればインターネット接続なしでチャットが機能する——フライト中や旅行中、接続が不安定な地域で有用。',
            '制限・注意点': 'まだ接続がある間に、使いたいモデルを事前にダウンロードしておく計画が必要。',
          },
          {
            'メリット': 'Apple Siliconに最適化',
            '実際の使用で意味すること': 'アプリは現行のiPhone、iPad、Macチップが備えるデバイス上のNeural EngineおよびGPUハードウェアを活用するよう作られている。',
            '制限・注意点': 'これはLocally AIがApple専用であることも意味する——それらのプラットフォームのユーザー向けにWindowsやAndroid版は存在しない。',
          },
          {
            'メリット': '1つのアプリで複数のオープンモデルファミリーにアクセス',
            '実際の使用で意味すること': 'Llama、Gemma、Qwen、DeepSeekに加えその他のオープンモデルが、モデルファイルを手動で調達することなく単一のインターフェースから利用できる。',
            '制限・注意点': 'ダウンロード可能なモデルの正確な一覧とそのストレージサイズは、アプリの公開マーケティングページには完全には掲載されていない。現在の選択肢はアプリ自体で確認すること。',
          },
          {
            'メリット': 'クラウド推論の継続的なコストがない',
            '実際の使用で意味すること': '推論が自分のデバイス上で実行されるため、デバイス上で処理されたチャットにはメッセージ単位・トークン単位のAPI課金が発生しない。',
            '制限・注意点': 'デバイス上推論はデバイスのバッテリーと処理能力を消費し、アプリ自体の価格は本レビューでは独自に検証していない——現在のApp Store掲載情報を確認すること。',
          },
          {
            'メリット': 'iPhone、iPad、Macで単一のエコシステム',
            '実際の使用で意味すること': 'Appleユーザーは電話、タブレット、コンピュータで同じアプリファミリーを使用できる。',
            '制限・注意点': 'WindowsやAndroidデバイスにも作業を分散させているユーザーは、それらのプラットフォーム向けに別のアプリが必要になる。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Locally AIと代替アプリの比較',
        columns: ['アプリ', '最適な用途', 'プラットフォームの焦点', 'モデルの柔軟性', '主な制限'],
        rows: [
          {
            'アプリ': 'Locally AI',
            '最適な用途': '主要なオープンモデルファミリー向けのシンプルでプライバシー重視のアプリを求めるAppleユーザー',
            'プラットフォームの焦点': 'iPhone/iPad/Mac(Apple Silicon最適化)',
            'モデルの柔軟性': 'Llama、Gemma、Qwen、DeepSeek、その他のオープンモデル',
            '主な制限': 'Apple専用——WindowsやAndroidアプリなし',
          },
          {
            'アプリ': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            '最適な用途': 'より多くのデバイスで手軽なプライベートチャットを求めるクロスプラットフォームユーザー',
            'プラットフォームの焦点': 'iPhone/iPad/Android/Mac/Windows(5プラットフォーム)',
            'モデルの柔軟性': 'Gemma、Qwen、Llama、Phiを含む厳選ライブラリ。カスタムGGUFのインポートなし',
            '主な制限': 'モデルの選択肢が厳選ライブラリに限定され、カスタムGGUFファイルはインポートできない',
          },
          {
            'アプリ': 'Private LLM',
            '最適な用途': 'モデルと量子化を深くコントロールしたいAppleユーザー',
            'プラットフォームの焦点': 'iPhone/iPad/Mac(Apple専用)',
            'モデルの柔軟性': 'OmniQuantおよびGPTQ量子化フォーマットで140以上のモデル',
            '主な制限': 'シンプルさを重視したアプリよりも設定の手間が多い',
          },
          {
            'アプリ': 'Ollama(Mac上)',
            '最適な用途': 'Macでコマンドラインとフルのコントロール・API連携を求める開発者',
            'プラットフォームの焦点': 'Mac/Windows/Linux(デスクトップのみ、ネイティブモバイルアプリなし)',
            'モデルの柔軟性': 'Ollamaライブラリの任意のモデル、加えてカスタムGGUFのインポート',
            '主な制限': 'コマンドライン中心のワークフロー。ネイティブのiPhone/iPadアプリなし',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Locally AIが向いている人',
        items: [
          '**iPhone、iPad、Macで1つのアプリを使いたいApple専用ユーザー。** Appleエコシステムに完全に身を置いていて、WindowsやAndroidのサポートが不要な人にとって、Locally AIは1つのアプリで3種類すべてのデバイスをカバーする。',
          '**デフォルトでデバイス上推論を望むプライバシー重視のユーザー。** モデルをダウンロードすれば、会話の処理にクラウド接続は不要——チャット内容をリモートサーバーから遠ざけることを優先するユーザーに素直に合う。',
          '**接続が不安定な旅行者やユーザー。** モデルダウンロード後はチャットが完全にオフラインで動作するため、フライト中や遠隔地、信頼性の低いネットワークでもアプリの中核機能は中断されない。',
          '**主要なオープンモデルファミリーに、自分でファイルを調達することなくアクセスしたいユーザー。** Llama、Gemma、Qwen、DeepSeekはアプリ内から利用でき、個々のモデルファイルを探して管理する必要がない。',
          '**クラウドコストなしにAppleハードウェアで主要なオープンソースモデルを試したいユーザー。** 推論がデバイス上で実行されるため、ローカルで処理されるチャットにはメッセージ単位のAPI課金が発生しない。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Locally AIが向いていない人',
        items: [
          '**WindowsやAndroidのユーザー。** Locally AIはApple専用(iPhone、iPad、Mac)のため、他のプラットフォームのユーザーは、WindowsとAndroidを含む5プラットフォームをカバーする[Loci](/power-local-llm/loci-ai-review-offline-local-ai)のような別のアプリが必要。',
          '**任意のカスタムGGUFファイルをインポートしたいユーザー。** Locally AIが対応するモデルファミリーから選ぶのではなく、Hugging Faceから特定のファインチューニングされたモデルやニッチなモデルファイルを実行することにワークフローが依存している場合、GGUFインポートを中心とした、より手動操作寄りのツールの方が適している。',
          '**フロンティアモデル級の推論品質を期待するユーザー。** 電話やタブレットで無理なく動作するサイズに調整されたオープンモデルは、その携帯性と引き換えに推論の深さの一部を犠牲にしている。高リスクな分析、複雑な多段階推論、コーディング中心のワークロードを扱うユーザーは、そうした特定のタスクについては依然としてフロンティア級のクラウドモデルを必要とする場合がある。',
          '**コマンドラインやAPI優先のコントロールを求める開発者。** 推論をスクリプト化したい、既存のツール群と統合したい、Mac上でモデルをヘッドレスで実行したいユーザーは、コンシューマー向けチャットアプリの代わりに、あるいは併用して、Ollamaのような開発者向けツールを好む場合がある。',
          '**自分の具体的な用途について、アプリの現在のプライバシーポリシーと価格を確認していない人。** 本レビューは執筆時点で公開されている情報を反映したものです。機密性の高い用途でアプリに頼る前に、[公式サイト](https://www.locallyai.app/)またはApp Storeの掲載情報で、現在の価格、正確なモデル一覧、プライバシーの詳細を確認してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Locally AIとは何ですか?',
            a: 'Locally AIは、Llama、Gemma、Qwen、DeepSeekなどのオープンソース言語モデルをデバイス上で直接実行する、iPhone、iPad、Mac向けのアプリで、Apple Siliconに最適化されています。モデルをダウンロードすれば完全にオフラインで動作し、チャットにインターネット接続は不要です。',
          },
          {
            q: 'Locally AIはインターネット接続なしで動作しますか?',
            a: 'チャットについては、はい。アプリをインストールし、モデルをダウンロードすれば、推論はデバイス上で実行され、インターネット接続は不要です——アプリは機内モードで使用できます。アプリのインストールと、最初のモデルダウンロードにはインターネット接続が必要です。',
          },
          {
            q: 'Locally AIはどのモデルに対応していますか?',
            a: 'Locally AIは、Llama(Meta)、Gemma(Google)、Qwen(Alibaba)、DeepSeekという主要なオープンソースモデルファミリーに加え、その他のオープンモデルに対応しています。ダウンロード可能なモデルの正確な一覧とそのストレージサイズは、アプリ内または公式サイト[locallyai.app](https://www.locallyai.app/)で確認できます。',
          },
          {
            q: 'Locally AIはAndroidやWindowsでも使えますか?',
            a: 'いいえ。Locally AIはiPhone、iPad、Mac向けに構築され、Apple Siliconに最適化されています。AndroidやWindowsで同様のオフライン重視・プライバシー重視のアプリを求めるユーザーは、iPhone、iPad、Android、Mac、Windowsに対応するLociのようなクロスプラットフォームの代替アプリを検討すべきです。',
          },
          {
            q: 'Locally AIはプライベートですか?',
            a: 'Locally AIはプライバシー重視の姿勢を打ち出しています。モデルをダウンロードすれば、推論はクラウド呼び出しではなくデバイス上で行われます。アプリ自体が診断や分析のために収集するデータを含む、現在の完全なプライバシーポリシーについては、公式サイトまたはApp Storeのプライバシーラベルを確認してください。本レビューは公開情報を反映したものであり、技術的なプライバシーに関する主張すべてを独自に検証できたわけではありません。',
          },
          {
            q: 'Locally AIにはどれくらいのストレージが必要ですか?',
            a: 'ストレージ要件は、どのモデルをダウンロードするかによって異なります。デバイス上推論で一般的に使われるサイズのオープンモデルファイルは、おおよそ1GBから数GBの範囲になり得ます。各対応モデルの正確な現在のストレージサイズは、アプリの公開マーケティングページには完全には掲載されていません——特に空き容量が少ないデバイスでは、ダウンロード前にアプリ内のモデル一覧を確認してください。',
          },
          {
            q: 'Locally AIはChatGPTやClaudeの代わりになりますか?',
            a: 'モバイルやデスクトップのハードウェアで動くオープンソースモデルに適したタスク——下書き作成、要約、一般的なQ&A、プライベートなメモ取りなど——であれば、Locally AIはプライベートでオフライン利用可能な代替として機能します。フロンティア級の推論、特に複雑なコーディングタスク、あるいはライブなWeb情報に基づく回答については、ChatGPTやClaudeなどのクラウドモデルの方が依然として能力が高く、これは電話やタブレットに無理なく収まるサイズをはるかに超えるモデルを実行しているためです。',
          },
          {
            q: 'Locally AIはLociと比べてどうですか?',
            a: 'Locally AIはApple専用(iPhone、iPad、Mac)で、Apple Silicon向けに特化して最適化されており、Llama、Gemma、Qwen、DeepSeek、その他のオープンモデルに対応しています。Lociは——iPhone、iPad、Android、Mac、Windowsの5プラットフォームを、厳選されたモデルライブラリでカバーしています。Appleエコシステムに完全に身を置いているならLocally AIを、AndroidやWindowsのサポートも必要ならLociを選んでください。詳しくは[Loci AIレビュー全文](/power-local-llm/loci-ai-review-offline-local-ai)をご覧ください。',
          },
          {
            q: 'Locally AIを使うには特定のiPhone、iPad、Macモデルが必要ですか?',
            a: 'Locally AIはApple Siliconに最適化されているため、Apple Siliconチップを搭載したデバイスが想定対象です。執筆時点で、アプリの公開マーケティングページには正確な最小デバイスやOSバージョンは記載されていません——ダウンロード前に、現在のApp Store掲載情報でLocally AIが示す最小要件を確認してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'Locally AIは、Llama、Gemma、Qwen、DeepSeekといった主要なオープンソースモデルファミリーとチャットするための、プライバシー重視のデバイス上アプリを、Appleエコシステムを離れることなく、モデルファイルを手動で管理することもなく使いたいAppleユーザーにとって、素直に選べる選択肢です。Apple Silicon最適化と、モデルダウンロード後は完全にオフラインで動作する点は、会話をリモートサーバーから遠ざけることを優先し、コマンドラインのワークフローよりもアプリとしての使い勝手を求めるユーザーによく合っています。トレードオフはプラットフォームの範囲にあります。Locally AIはWindowsやAndroidをカバーしていないため、それらのプラットフォームが必要なユーザーは、代わりに[Loci](/power-local-llm/loci-ai-review-offline-local-ai)のようなクロスプラットフォームアプリを検討すべきです。任意のカスタムGGUFファイルをインポートしたい、あるいはより深い量子化コントロールが必要なユーザーは、Private LLMやOllamaのような設定の自由度が高いツールと比較すべきです。想定される対象ユーザー——技術的な手間なく主要なオープンモデルへプライベートかつオフラインでアクセスしたいAppleユーザー——にとって、Locally AIは明確なニッチを埋めています。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Locally AI公式サイト](https://www.locallyai.app/) — 製品概要、対応モデルファミリー、プラットフォーム対応状況。',
          '[Loci公式サイト](https://askloci.ai) — クロスプラットフォーム比較の参照元。',
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — 本記事の代替アプリ比較で使用した関連レビュー。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — iPhone、iPad、Android、Mac、Windowsをカバーするクロスプラットフォームの代替アプリ。',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — iPhoneアプリのまとめ。PocketPal AI、Private LLM、MLC Chat、LLM Farm、Apple Intelligenceを含む。',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — タブレットでのデバイス上・リモート推論に焦点を当てたガイド。',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — モデルレイヤーの関連記事。モバイルでのベンチマークと品質のトレードオフ。',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — 全プラットフォーム向けの包括的なアプリ・ツールディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/locally-ai-review-hero-zh.webp',
    title: 'Locally AI评测(2026):在iPhone、iPad和Mac上运行私密离线LLM',
    seoTitle: 'Locally AI评测2026:Apple设备上的离线LLM',
    intro:
      '由开发者[Locally AI](https://www.locallyai.app/)打造的Locally AI,是一款可以在iPhone、iPad和Mac上直接运行开源语言模型(包括Llama、Gemma、Qwen和DeepSeek)的应用,针对Apple Silicon进行了优化。模型下载完成后,应用完全在设备本地运行:聊天不需要联网,而且开发者的隐私优先定位意味着对话不会被发送到云端服务进行推理。对于考虑使用它的人来说,真正的问题不是Apple硬件上的设备端推理是否可行——Apple Silicon的神经网络和GPU算力完全足够——而是Locally AI能否围绕这种推理提供一个可用的应用体验,让你不必自己挑选GGUF文件、调整量化设置或计算所需显存。',
    metaDescription:
      'Locally AI评测:这款应用是否值得用于在iPhone、iPad和Mac上实现私密、离线的LLM?它如何支持Llama、Gemma、Qwen和DeepSeek,适合哪些人,以及与Loci、Private LLM相比如何。',
    twitterDescription:
      'Locally AI评测2026:在iPhone、iPad和Mac上完全离线运行Llama、Gemma、Qwen和DeepSeek——针对Apple Silicon优化。隐私定位、平台适配情况,以及与Loci、Private LLM的对比。',
    audience:
      '正在纠结是通过Locally AI在设备本地运行LLM,还是使用云端AI服务或其他本地LLM应用的Apple设备用户——涵盖平台适配、隐私定位、支持的模型,以及与同类离线优先应用的对比。',
    readTime: '8分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: '访问Locally AI官网 →', url: 'https://[www.locallyai.app](https://www.locallyai.app/)/', productName: 'Locally AI', productCategory: 'software' },
    ],
    primaryTerm: 'Locally AI评测',
    targetKeywords: [
      'locally ai 评测',
      'locally ai 应用',
      'locally ai iphone',
      'locally ai mac',
      'iphone 离线 llm',
      'iphone 运行 llama',
      'locally ai vs loci',
      'apple silicon 本地llm应用',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Silicon'],
    leadAnswerBlock:
      '**如果你想要一款简单、隐私优先的应用,能完全在Apple设备本地与Llama、Gemma、Qwen、DeepSeek等开源模型对话,那么Locally AI尤其有吸引力。** 它支持iPhone、iPad和Mac,针对Apple Silicon优化,模型下载完成后即可完全离线运行——无云端调用,聊天无需联网。它面向那些希望获得私密的设备端AI、同时不想离开Apple生态系统或自行管理推理基础设施的用户。如果你需要Windows或Android支持、想导入任意自定义GGUF文件,或需要超出手机、平板上数十亿参数级开源模型能力范围的前沿级推理,应比较Loci等应用,或直接在Mac上使用Ollama等工具管理模型。',
    quickAnswerTop: {
      zh: {
        question: '在iPhone或Mac上使用离线LLM应该选Locally AI吗?',
        answer:
          '如果你想在iPhone、iPad或Mac上完全离线与Llama、Gemma、Qwen或DeepSeek等开源模型对话,模型下载后无需任何云端调用,那么Locally AI是合适的选择。如果你需要Windows或Android支持,或想导入应用支持模型集之外的自定义GGUF文件,则不适合使用它。',
        bullets: [
          '完全在设备本地运行Llama、Gemma、Qwen和DeepSeek。',
          '支持平台:iPhone、iPad和Mac——针对Apple Silicon优化。',
          '模型下载完成后聊天无需联网。',
          '隐私优先定位:推理不产生云端调用。',
          '仅限Apple平台——没有Windows或Android应用。',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'Locally AI是什么', anchor: 'what-is-locally-ai' },
      { label: 'Locally AI支持哪些模型', anchor: 'models-supported' },
      { label: 'Locally AI在各平台上的表现', anchor: 'platforms-hardware' },
      { label: '取舍:优势与局限', anchor: 'tradeoffs' },
      { label: 'Locally AI与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用Locally AI', anchor: 'who-should-use' },
      { label: '谁不适合使用Locally AI', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '总评', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Locally AI是一款适用于iPhone、iPad和Mac的应用,可完全在设备本地运行开源语言模型——包括Llama、Gemma、Qwen和DeepSeek——并针对Apple Silicon优化,因此模型下载完成后,聊天既不需要联网也不需要任何云端调用。' },
          { type: 'plain-terms', text: 'Locally AI不会把你的消息发送到某家公司的服务器,而是把一个体积紧凑的AI模型下载到你的iPhone、iPad或Mac上,直接在本地运行。下载完成后,你可以打开飞行模式,应用照样能用,因为开发者秉持隐私优先的设计理念,对话内容本身完全不需要离开你的设备。' },
        ],
        items: [
          'Locally AI可完全离线、在设备本地运行开源模型——Llama、Gemma、Qwen和DeepSeek。',
          '支持平台:iPhone、iPad和Mac,针对Apple Silicon优化。',
          '模型下载完成后即无需联网。',
          '隐私优先定位:开发者表示推理在设备本地进行,不产生云端调用。',
          '仅限Apple平台——没有Windows或Android版本,其他系统的用户需要另选应用。',
          '任何面向手机和平板的设备端应用都存在的核心取舍:能够舒适运行在移动硬件上的模型规模,在复杂、多步骤的推理任务上会落后于前沿级云端模型。',
        ],
        callouts: [
          { type: 'note', text: '本评测基于[locallyai.app](https://www.locallyai.app/)及该应用官方页面公开披露的信息撰写。撰写时未独立验证价格、确切的模型列表、存储大小及最低系统版本要求——下载前请以官网或App Store页面的最新信息为准。' },
        ],
      },
      whatIsLocallyAI: {
        id: 'what-is-locally-ai',
        title: 'Locally AI是什么?',
        content: [
          '**Locally AI是一款直接在iPhone、iPad和Mac上运行开源语言模型的应用,不会将对话发送到云端服务。** 它专为Apple Silicon构建并优化——Apple Silicon是苹果目前在iPhone、iPad和Mac产品线中使用的芯片架构,这意味着该应用被设计为利用这些芯片提供的设备端神经网络和GPU硬件,而不是把手机当作连接远程服务器的瘦客户端。',
          '核心模型阵容包括Llama(Meta的开放权重模型系列)、Gemma(Google的开放权重模型系列)、Qwen(阿里巴巴的开放权重模型系列)以及DeepSeek(DeepSeek的开放权重模型系列)——这些都是可以作为独立文件分发、并且无需厂商控制的API即可运行的开源模型。Locally AI将对这些模型的访问打包进一个同时适用于移动端和桌面端的单一界面,用户无需自行获取模型文件,也无需另外运行推理服务器。',
          '一旦某个模型完成下载到设备,Locally AI生成回复就不再需要联网——推理在本地进行,使用设备自身的处理器和内存。这就是"离线"的实际含义:只要提前下载好模型,应用就可以在飞行模式下、在飞机上,或在任何没有网络连接的地方使用。',
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Locally AI支持哪些模型?',
        content: [
          '**Locally AI支持多个主流开源模型系列——Llama、Gemma、Qwen和DeepSeek——以及其他开源模型,全部可以完全在设备本地运行。** 这四个系列覆盖了广泛的应用场景,是目前使用最广泛的开放权重模型之一,分别由不同的组织维护(Meta、Google、阿里巴巴和DeepSeek)。',
        ],
        items: [
          '**Llama** — Meta的开放权重模型系列,在整个本地LLM生态中被广泛用作通用聊天和推理的基线模型。',
          '**Gemma** — Google的开放权重模型系列,与Google的Gemini模型出自同一研究谱系,常用于设备端和边缘部署。',
          '**Qwen** — 阿里巴巴的开放权重模型系列,以强大的多语言支持和适应受限硬件的多种模型规模而著称。',
          '**DeepSeek** — DeepSeek的开放权重模型系列,以相对模型规模而言具有竞争力的推理性能而受到认可。',
          '**其他开源模型** — Locally AI表示除上述四大旗舰系列外还支持其他开源模型,进一步扩大了可在设备本地运行的模型选择范围。',
        ],
        note: '截至撰写本文时,Locally AI并未在其公开的营销页面上发布完整的模型确切版本、参数量变体或存储大小变更记录。在根据设备可用存储空间选择模型之前,请查看应用内的模型列表或官网[locallyai.app](https://www.locallyai.app/)以获取当前准确的可下载模型集合。',
      },
      platformsHardware: {
        id: 'platforms-hardware',
        itemHeadings: true,
        title: 'Locally AI在各平台上的表现',
        columns: ['平台', '预期表现', '重要提示'],
        rows: [
          {
            '平台': 'iPhone',
            '预期表现': 'Locally AI可在iPhone上运行,应用针对Apple Silicon的设备端神经网络和GPU硬件进行了优化。下载受支持的模型后,聊天可完全离线进行。',
            '重要提示': '应用的公开营销页面并未列出确切的最低iOS版本要求及各机型性能表现——下载前请查看App Store页面了解当前的机型兼容性。',
          },
          {
            '平台': 'iPad',
            '预期表现': 'Locally AI可在iPad上运行,共享与iPhone相同的设备端模型集合和离线行为。更大的屏幕,以及许多iPad机型上相当甚至更强的Apple Silicon性能,可能让长时间的对话会话更舒适。',
            '重要提示': '与iPhone相同,下载模型前请在App Store查看当前的最低iPadOS版本要求及存储空间要求。',
          },
          {
            '平台': 'Mac',
            '预期表现': 'Locally AI可在Mac上运行,Apple Silicon(M系列芯片)通常比iPhone或iPad拥有更多统一内存,这对应用支持的最大模型可能很重要。',
            '重要提示': 'Locally AI针对搭载Apple Silicon的Mac优化;应用的公开营销页面并未说明其在基于Intel芯片的Mac上的表现——安装前请确认你的Mac芯片是否兼容。',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '取舍:优势与局限',
        columns: ['优势', '实际使用中的含义', '局限 / 说明'],
        rows: [
          {
            '优势': '隐私优先的设备端推理',
            '实际使用中的含义': '模型下载完成后,对话在设备本地处理,而不是发送到云端服务进行推理。',
            '局限 / 说明': '应用的初始安装和模型下载本身需要联网,未来的应用更新也很可能需要联网。',
          },
          {
            '优势': '模型下载后可离线使用',
            '实际使用中的含义': '设置完成后,聊天无需联网即可运行——适用于航班、旅行或网络不稳定的地区。',
            '局限 / 说明': '你需要提前规划,在还有网络连接时下载好想使用的模型。',
          },
          {
            '优势': '针对Apple Silicon优化',
            '实际使用中的含义': '应用旨在充分利用当前一代iPhone、iPad和Mac芯片中的设备端神经网络和GPU硬件。',
            '局限 / 说明': '这也意味着Locally AI仅限Apple平台——没有Windows或Android版本供这些平台的用户使用。',
          },
          {
            '优势': '一个应用即可访问多个开源模型系列',
            '实际使用中的含义': 'Llama、Gemma、Qwen和DeepSeek,再加上其他开源模型,都可从同一界面获取,无需手动获取模型文件。',
            '局限 / 说明': '可下载模型的确切列表及其存储大小并未在应用的公开营销页面上完整公布;请在应用内查看当前的选择。',
          },
          {
            '优势': '没有持续的云端推理费用',
            '实际使用中的含义': '由于推理在你自己的设备上运行,设备本地处理的聊天不会产生按消息或按token计费的API账单。',
            '局限 / 说明': '设备端推理会消耗设备的电池和处理能力,且应用本身的定价本次评测未做独立核实——请查看当前的App Store页面。',
          },
          {
            '优势': 'iPhone、iPad和Mac统一生态',
            '实际使用中的含义': 'Apple用户可以在手机、平板和电脑上使用同一系列应用。',
            '局限 / 说明': '将工作分布在Windows或Android设备上的用户,需要为这些平台另选应用。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Locally AI与替代方案对比',
        columns: ['应用', '最适合', '平台重点', '模型灵活性', '主要局限'],
        rows: [
          {
            '应用': 'Locally AI',
            '最适合': '希望为主流开源模型系列使用简单、隐私优先应用的Apple用户',
            '平台重点': 'iPhone/iPad/Mac(针对Apple Silicon优化)',
            '模型灵活性': 'Llama、Gemma、Qwen、DeepSeek,以及其他开源模型',
            '主要局限': '仅限Apple平台——没有Windows或Android应用',
          },
          {
            '应用': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            '最适合': '希望在更多设备上获得低门槛私密聊天体验的跨平台用户',
            '平台重点': 'iPhone/iPad/Android/Mac/Windows(5个平台)',
            '模型灵活性': '精选模型库,包含Gemma、Qwen、Llama和Phi;不支持导入自定义GGUF',
            '主要局限': '模型选择局限于精选库;无法导入自定义GGUF文件',
          },
          {
            '应用': 'Private LLM',
            '最适合': '希望深度掌控模型和量化设置的Apple用户',
            '平台重点': 'iPhone/iPad/Mac(仅限Apple)',
            '模型灵活性': '140多个模型,支持OmniQuant和GPTQ量化格式',
            '主要局限': '相比追求简洁的应用,配置更为繁琐',
          },
          {
            '应用': 'Ollama(在Mac上)',
            '最适合': '希望在Mac上获得完整命令行和API控制权的开发者',
            '平台重点': 'Mac/Windows/Linux(仅桌面端,无原生移动应用)',
            '模型灵活性': 'Ollama模型库中的任意模型,外加自定义GGUF导入',
            '主要局限': '以命令行为主的工作流;没有原生iPhone或iPad应用',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用Locally AI',
        items: [
          '**只用Apple设备、希望一个应用覆盖iPhone、iPad和Mac的用户。** 如果你完全处于Apple生态系统中,不需要Windows或Android支持,Locally AI用一个应用就能覆盖你所有三种设备类型。',
          '**希望默认使用设备端推理的隐私敏感用户。** 模型下载完成后,处理对话无需依赖云端连接——这对优先考虑将聊天内容留在远程服务器之外的用户来说是个直接的选择。',
          '**经常出行、网络不稳定的用户。** 由于模型下载后聊天可完全离线运行,航班、偏远地区或不可靠的网络都不会中断应用的核心功能。',
          '**希望访问多个主流开源模型系列、又不想自己获取文件的用户。** Llama、Gemma、Qwen和DeepSeek都可在应用内直接使用,无需查找和管理各个独立的模型文件。',
          '**希望在Apple硬件上无云端费用地体验主流开源模型的用户。** 由于推理在设备本地运行,本地处理的聊天不会产生按消息计费的API账单。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用Locally AI',
        items: [
          '**Windows或Android用户。** Locally AI仅限Apple平台(iPhone、iPad、Mac);其他平台的用户需要选择别的应用,例如覆盖包括Windows和Android在内五个平台的[Loci](/power-local-llm/loci-ai-review-offline-local-ai)。',
          '**想要导入任意自定义GGUF文件的用户。** 如果你的工作流依赖运行来自Hugging Face的特定微调或小众模型文件,而不是从Locally AI支持的模型系列中选择,那么围绕GGUF导入构建的、操作更手动的工具会更适合你。',
          '**期待前沿模型级推理质量的用户。** 能够舒适运行在手机或平板上的开源模型,为了这种便携性会在推理深度上有所妥协;面对高风险分析、复杂多步骤推理或大量编码工作的用户,针对这些特定任务可能仍需要前沿级的云端模型。',
          '**希望以命令行或API为先获得控制权的开发者。** 想要脚本化推理、与现有工具集成,或在Mac上无界面运行模型的用户,可能更倾向于搭配或替代消费级聊天应用,使用Ollama这类面向开发者的工具。',
          '**尚未针对自己的具体用途查阅应用当前隐私政策和定价的用户。** 本评测反映的是撰写时公开披露的信息;在将该应用用于敏感场景之前,请在[官网](https://www.locallyai.app/)或App Store页面确认当前的定价、确切的模型列表和隐私细节。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Locally AI是什么?',
            a: 'Locally AI是一款适用于iPhone、iPad和Mac的应用,可直接在设备本地运行开源语言模型——包括Llama、Gemma、Qwen和DeepSeek——并针对Apple Silicon优化。模型下载完成后即可完全离线运行,聊天无需联网。',
          },
          {
            q: 'Locally AI在没有网络连接的情况下能用吗?',
            a: '就聊天而言,可以。应用安装并下载好模型后,推理在设备本地进行,不需要联网——应用可以在飞行模式下使用。安装应用以及首次下载模型时需要联网。',
          },
          {
            q: 'Locally AI支持哪些模型?',
            a: 'Locally AI支持多个主流开源模型系列:Llama(Meta)、Gemma(Google)、Qwen(阿里巴巴)和DeepSeek,以及其他开源模型。可下载模型的确切列表及其存储大小可在应用内或官网[locallyai.app](https://www.locallyai.app/)查看。',
          },
          {
            q: 'Locally AI支持Android或Windows吗?',
            a: '不支持。Locally AI专为iPhone、iPad和Mac打造,并针对Apple Silicon优化。如果Android或Windows用户想要类似的离线优先、注重隐私的应用,可以考虑Loci等跨平台替代方案,它支持iPhone、iPad、Android、Mac和Windows。',
          },
          {
            q: 'Locally AI私密吗?',
            a: 'Locally AI以隐私优先作为定位:模型下载完成后,推理在设备本地进行,而不是通过云端调用。至于当前完整的隐私政策——包括应用自身为诊断或分析目的收集的任何数据——请查看官网或App Store的隐私标签,因为本评测反映的是公开披露的信息,并未能独立核实每一项技术层面的隐私声明。',
          },
          {
            q: 'Locally AI需要多少存储空间?',
            a: '存储需求取决于你下载的模型;适用于设备端推理的常见开源模型文件大小大致在1GB到数GB之间不等。截至目前,各支持模型的确切存储大小并未在应用的公开营销页面上完整公布——下载前请查看应用内的模型列表,尤其是在存储空间有限的设备上。',
          },
          {
            q: 'Locally AI能取代ChatGPT或Claude吗?',
            a: '对于适合移动或桌面硬件上运行的开源模型来完成的任务——起草文案、总结、一般性问答、私人笔记等——Locally AI可以作为私密、可离线使用的替代方案。对于前沿级推理、特别复杂的编码任务,或需要实时联网信息支撑的回答,ChatGPT、Claude等云端模型仍然更胜一筹,因为它们运行的模型规模远大于手机或平板所能舒适承载的范围。',
          },
          {
            q: 'Locally AI与Loci相比如何?',
            a: 'Locally AI仅限Apple平台(iPhone、iPad、Mac),并专门针对Apple Silicon优化,支持Llama、Gemma、Qwen、DeepSeek及其他开源模型。Loci覆盖五个平台——iPhone、iPad、Android、Mac和Windows——并提供精选模型库。如果你完全处于Apple生态系统中,选择Locally AI;如果你还需要Android或Windows支持,选择Loci。更多详情请参阅我们完整的[Loci AI评测](/power-local-llm/loci-ai-review-offline-local-ai)。',
          },
          {
            q: '使用Locally AI需要特定的iPhone、iPad或Mac机型吗?',
            a: 'Locally AI针对Apple Silicon优化,因此搭载Apple Silicon芯片的设备是其目标机型。截至撰写本文时,应用的公开营销页面并未列出确切的最低设备或系统版本要求——下载前请查看当前的App Store页面,了解Locally AI所标明的最低要求。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '总评',
        content:
          '对于希望使用隐私优先、设备端应用与Llama、Gemma、Qwen、DeepSeek等主流开源模型系列对话,同时不想离开Apple生态系统或手动管理模型文件的Apple用户来说,Locally AI是一个直接明了的选择。它对Apple Silicon的优化,以及模型下载后完全离线运行的特性,非常适合优先考虑将对话内容留在远程服务器之外、并偏好应用体验而非命令行工作流的用户。它的取舍在于平台覆盖范围:Locally AI不支持Windows或Android,需要这些平台的用户应转而考虑Loci等跨平台应用。想要导入任意自定义GGUF文件,或需要更深入量化控制的用户,应将其与Private LLM、Ollama等配置更繁琐的工具进行比较。对于其目标用户群——希望在没有技术门槛的情况下,私密、离线地使用主流开源模型的Apple用户——Locally AI填补了一个明确的细分需求。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Locally AI官网](https://www.locallyai.app/) — 产品概览、支持的模型系列、平台可用性。',
          '[Loci官网](https://askloci.ai) — 跨平台对比参考。',
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — 本文用于替代方案对比的配套评测。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — 覆盖iPhone、iPad、Android、Mac和Windows的跨平台替代方案。',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone应用汇总,包括PocketPal AI、Private LLM、MLC Chat、LLM Farm和Apple Intelligence。',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — 聚焦设备的平板电脑本地及远程推理指南。',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 模型层面的配套文章,涵盖移动端的基准测试和质量取舍。',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — 覆盖所有平台的综合应用与工具目录。',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/locally-ai-review-hero-ar.webp',
    title: 'مراجعة Locally AI (2026): نماذج لغوية خاصة تعمل دون اتصال على iPhone وiPad وMac',
    seoTitle: 'مراجعة Locally AI 2026: نماذج لغوية دون اتصال على أجهزة Apple',
    intro:
      'تطبيق Locally AI من المطوّر [Locally AI](https://www.locallyai.app/) هو تطبيق يُشغّل نماذج لغوية مفتوحة المصدر — منها Llama وGemma وQwen وDeepSeek — مباشرةً على iPhone وiPad وMac، وهو محسَّن لشريحة Apple Silicon. بعد تنزيل نموذج، يعمل التطبيق بالكامل على الجهاز: لا حاجة لاتصال بالإنترنت للمحادثة، وتوجّه المطوّر نحو الخصوصية أولاً يعني أن المحادثات لا تُرسَل إلى خدمة سحابية لإجراء الاستدلال. السؤال العملي لمن يفكّر في استخدامه ليس ما إذا كان الاستدلال على الجهاز ممكنًا على أجهزة Apple — فشريحة Apple Silicon تملك قدرة عصبية ورسومية كافية لذلك — بل ما إذا كان Locally AI يوفّر تجربة تطبيق عملية حول هذا الاستدلال دون الحاجة لاختيار ملفات GGUF يدويًا، أو ضبط إعدادات الضغط الكمي (quantization)، أو حساب متطلبات الذاكرة اللازمة بنفسك.',
    metaDescription:
      'مراجعة Locally AI: هل يستحق استخدامه لتشغيل نماذج لغوية خاصة ودون اتصال على iPhone وiPad وMac؟ كيف يعمل مع Llama وGemma وQwen وDeepSeek، ولمن يناسب، وكيف يُقارَن بـ Loci وPrivate LLM.',
    twitterDescription:
      'مراجعة Locally AI 2026: شغّل Llama وGemma وQwen وDeepSeek بالكامل دون اتصال على iPhone وiPad وMac — محسَّن لشريحة Apple Silicon. توجّه الخصوصية، ملاءمة المنصّات، ومقارنة مع Loci وPrivate LLM.',
    audience:
      'مستخدمو أجهزة Apple الذين يترددون بين تشغيل نماذج لغوية على الجهاز عبر Locally AI وبين خدمات الذكاء الاصطناعي السحابية أو تطبيقات النماذج اللغوية المحلية الأخرى — يغطي ملاءمة المنصّات، وتوجّه الخصوصية، والنماذج المدعومة، والمقارنة مع تطبيقات مشابهة تركّز على العمل دون اتصال.',
    readTime: '٨ دقائق قراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'زيارة موقع Locally AI الرسمي ←', url: 'https://[www.locallyai.app](https://www.locallyai.app/)/', productName: 'Locally AI', productCategory: 'software' },
    ],
    primaryTerm: 'مراجعة Locally AI',
    targetKeywords: [
      'مراجعة locally ai',
      'تطبيق locally ai',
      'locally ai iphone',
      'locally ai mac',
      'نموذج لغوي دون اتصال iphone',
      'تشغيل llama على iphone',
      'locally ai مقابل loci',
      'تطبيق نموذج لغوي محلي apple silicon',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Silicon'],
    leadAnswerBlock:
      '**يُعدّ Locally AI جذابًا بشكل خاص إذا كنت تريد تطبيقًا بسيطًا يضع الخصوصية أولًا للمحادثة مع نماذج مفتوحة مثل Llama وGemma وQwen وDeepSeek بالكامل على جهاز Apple.** يعمل على iPhone وiPad وMac، وهو محسَّن لشريحة Apple Silicon، وبعد تنزيل نموذج يعمل بالكامل دون اتصال — لا مكالمات سحابية، ولا حاجة لاتصال إنترنت للمحادثة. صُمم لمستخدمين يريدون ذكاءً اصطناعيًا خاصًا على الجهاز دون مغادرة نظام Apple البيئي أو إدارة بنية استدلال بأنفسهم. المستخدمون الذين يحتاجون دعم Windows أو Android، أو يريدون استيراد ملفات GGUF مخصّصة، أو يحتاجون استدلالًا بمستوى النماذج المتقدمة يفوق ما يمكن أن تقدّمه نماذج مفتوحة بحجم بضعة مليارات من المعاملات على هاتف أو جهاز لوحي، عليهم مقارنة بدائل مثل Loci أو إدارة النماذج مباشرةً بأداة مثل Ollama على Mac.',
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أستخدم Locally AI للنماذج اللغوية دون اتصال على iPhone أو Mac؟',
        answer:
          'استخدم Locally AI إذا كنت تريد المحادثة مع نماذج مفتوحة مثل Llama أو Gemma أو Qwen أو DeepSeek بالكامل دون اتصال على iPhone أو iPad أو Mac، دون أي مكالمات سحابية بعد تنزيل نموذج. تجنّبه إذا كنت تحتاج دعم Windows أو Android، أو تريد استيراد ملفات GGUF خاصة بك خارج مجموعة النماذج التي يدعمها التطبيق.',
        bullets: [
          'يشغّل Llama وGemma وQwen وDeepSeek بالكامل على الجهاز.',
          'المنصّات: iPhone وiPad وMac — محسَّن لشريحة Apple Silicon.',
          'لا حاجة لاتصال إنترنت للمحادثة بعد تنزيل نموذج.',
          'توجّه يضع الخصوصية أولًا: لا مكالمات سحابية للاستدلال.',
          'حصري لأجهزة Apple — لا تطبيق لـ Windows أو Android.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Locally AI', anchor: 'what-is-locally-ai' },
      { label: 'النماذج التي يدعمها Locally AI', anchor: 'models-supported' },
      { label: 'Locally AI على كل منصّة', anchor: 'platforms-hardware' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Locally AI مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'لمن يناسب Locally AI', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب Locally AI', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الملخص السريع',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Locally AI تطبيق لأجهزة iPhone وiPad وMac يشغّل نماذج لغوية مفتوحة المصدر — منها Llama وGemma وQwen وDeepSeek — بالكامل على الجهاز، وهو محسَّن لشريحة Apple Silicon، بحيث بعد تنزيل نموذج لا حاجة لاتصال إنترنت ولا لأي مكالمة سحابية للمحادثة.' },
          { type: 'plain-terms', text: 'بدلًا من إرسال رسائلك إلى خوادم شركة ما، يقوم Locally AI بتنزيل نموذج ذكاء اصطناعي مضغوط إلى iPhone أو iPad أو Mac الخاص بك ويشغّله هناك مباشرةً. يمكنك تفعيل وضع الطيران بعد انتهاء التنزيل ويظل التطبيق يعمل، لأن تصميم المطوّر القائم على الخصوصية أولًا يعني أن شيئًا من المحادثة نفسها لا يحتاج لمغادرة جهازك.' },
        ],
        items: [
          'يشغّل Locally AI نماذج مفتوحة المصدر — Llama وGemma وQwen وDeepSeek — بالكامل دون اتصال، على الجهاز.',
          'المنصّات: iPhone وiPad وMac، محسَّن لشريحة Apple Silicon.',
          'لا حاجة لاتصال إنترنت بعد تنزيل نموذج.',
          'توجّه يضع الخصوصية أولًا: يذكر المطوّر أن الاستدلال يتم على الجهاز، دون مكالمات سحابية.',
          'حصري لأجهزة Apple — لا توجد نسخة لـ Windows أو Android، ويحتاج مستخدمو تلك الأنظمة تطبيقًا آخر.',
          'المفاضلة الأساسية في أي تطبيق على الجهاز للهاتف والجهاز اللوحي: أحجام النماذج التي تعمل بشكل مريح على أجهزة محمولة تتراجع أمام النماذج السحابية المتقدمة في مهام الاستدلال المعقدة متعددة الخطوات.',
        ],
        callouts: [
          { type: 'note', text: 'تستند هذه المراجعة إلى معلومات معلنة علنًا من [locallyai.app](https://www.locallyai.app/) وصفحات التطبيق الرسمية. لم يتم التحقق بشكل مستقل من السعر أو قائمة النماذج الدقيقة أو أحجام التخزين أو الحد الأدنى لإصدار نظام التشغيل وقت كتابة هذا المقال — تأكد من التفاصيل الحالية على الموقع الرسمي أو صفحة App Store قبل التنزيل.' },
        ],
      },
      whatIsLocallyAI: {
        id: 'what-is-locally-ai',
        title: 'ما هو Locally AI؟',
        content: [
          '**Locally AI تطبيق يشغّل نماذج لغوية مفتوحة المصدر مباشرةً على iPhone وiPad وMac، دون إرسال المحادثات إلى خدمة سحابية.** وهو مبني ومحسَّن لشريحة Apple Silicon، وهي بنية الشريحة التي تستخدمها Apple في خط إنتاجها الحالي من iPhone وiPad وMac، ما يعني أن التطبيق مصمَّم للاستفادة من عتاد الشبكة العصبية ووحدة الرسوميات الموجودة على الجهاز في هذه الشرائح، بدلًا من معاملة الهاتف كعميل خفيف لخادم بعيد.',
          'تشمل مجموعة النماذج الأساسية Llama (عائلة نماذج Meta مفتوحة الوزن)، وGemma (عائلة نماذج Google مفتوحة الوزن)، وQwen (عائلة نماذج Alibaba مفتوحة الوزن)، وDeepSeek (عائلة نماذج DeepSeek مفتوحة الوزن) — وجميعها نماذج مفتوحة المصدر يمكن توزيعها كملفات مستقلة وتشغيلها دون واجهة برمجية يتحكم بها مزوّد معيّن. يجمع Locally AI الوصول إلى هذه النماذج في واجهة واحدة مناسبة للهواتف وأجهزة سطح المكتب، بحيث لا يحتاج المستخدم للحصول على ملفات النماذج بنفسه أو تشغيل خادم استدلال منفصل.',
          'بمجرد انتهاء تنزيل نموذج إلى الجهاز، لا يحتاج Locally AI لاتصال إنترنت لإنشاء الردود — يعمل الاستدلال محليًا باستخدام معالج الجهاز وذاكرته. هذا هو المعنى العملي لكلمة "دون اتصال": يمكن استخدام التطبيق في وضع الطيران، أو على متن طائرة، أو في أي مكان دون اتصال، طالما تم تنزيل النموذج مسبقًا.',
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'ما النماذج التي يدعمها Locally AI؟',
        content: [
          '**يدعم Locally AI عدة عائلات رئيسية من النماذج مفتوحة المصدر — Llama وGemma وQwen وDeepSeek — إضافة إلى نماذج مفتوحة أخرى، وجميعها قابلة للتشغيل بالكامل على الجهاز.** تغطي هذه العائلات الأربع نطاقًا واسعًا من حالات الاستخدام وتُعدّ من بين أكثر النماذج مفتوحة الوزن استخدامًا اليوم، وتحافظ على كل منها منظمة مختلفة (Meta وGoogle وAlibaba وDeepSeek على التوالي).',
        ],
        items: [
          '**Llama** — عائلة نماذج Meta مفتوحة الوزن، تُستخدم على نطاق واسع كأساس عام للمحادثة والاستدلال في منظومة النماذج اللغوية المحلية.',
          '**Gemma** — عائلة نماذج Google مفتوحة الوزن، مبنية من نفس سلسلة الأبحاث التي أنتجت نماذج Gemini من Google، وتُستخدم عادة في عمليات النشر على الجهاز وعند الحافة.',
          '**Qwen** — عائلة نماذج Alibaba مفتوحة الوزن، معروفة بدعمها القوي متعدد اللغات ونطاقها الواسع من أحجام النماذج المناسبة للعتاد المحدود.',
          '**DeepSeek** — عائلة نماذج DeepSeek مفتوحة الوزن، معروفة بأداء استدلال منافس مقارنة بحجم النموذج.',
          '**نماذج مفتوحة أخرى** — يذكر Locally AI أنه يدعم نماذج مفتوحة إضافية إلى جانب هذه العائلات الرئيسية الأربع، ما يوسّع خيارات ما يمكن تشغيله على الجهاز.',
        ],
        note: 'لا ينشر Locally AI سجلًا كاملًا بإصدارات النماذج الدقيقة، أو متغيرات عدد المعاملات، أو أحجام التخزين على صفحاته التسويقية العامة وقت كتابة هذا المقال. تحقق من قائمة النماذج داخل التطبيق أو الموقع الرسمي [locallyai.app](https://www.locallyai.app/) لمعرفة المجموعة الحالية والدقيقة من النماذج القابلة للتنزيل قبل اختيار أحدها وفق مساحة التخزين المتاحة على جهازك.',
      },
      platformsHardware: {
        id: 'platforms-hardware',
        itemHeadings: true,
        title: 'Locally AI على كل منصّة',
        columns: ['المنصّة', 'ما يمكن توقّعه', 'ملاحظة مهمة'],
        rows: [
          {
            'المنصّة': 'iPhone',
            'ما يمكن توقّعه': 'يعمل Locally AI على iPhone، والتطبيق محسَّن لعتاد الشبكة العصبية ووحدة الرسوميات الموجود على جهاز Apple Silicon. بعد تنزيل نموذج مدعوم، تعمل المحادثة بالكامل دون اتصال.',
            'ملاحظة مهمة': 'الحد الأدنى الدقيق لإصدار iOS والأداء حسب كل جهاز غير منشورَين على الصفحات التسويقية العامة للتطبيق — تحقق من صفحة App Store لمعرفة التوافق الحالي للأجهزة قبل التنزيل.',
          },
          {
            'المنصّة': 'iPad',
            'ما يمكن توقّعه': 'يعمل Locally AI على iPad، بنفس مجموعة النماذج على الجهاز وسلوك العمل دون اتصال الموجود في iPhone. الشاشة الأكبر، وفي العديد من طرازات iPad أداء Apple Silicon مماثل أو أقوى، قد يجعلان الجلسات الطويلة أكثر راحة.',
            'ملاحظة مهمة': 'كما هو الحال مع iPhone، تحقق من الحد الأدنى الحالي لإصدار iPadOS ومتطلبات التخزين على App Store قبل تنزيل نموذج.',
          },
          {
            'المنصّة': 'Mac',
            'ما يمكن توقّعه': 'يعمل Locally AI على Mac، حيث توفّر شريحة Apple Silicon (سلسلة M) عادةً ذاكرة موحدة أكبر من iPhone أو iPad، وهو أمر قد يهم بالنسبة لأكبر النماذج التي يدعمها التطبيق.',
            'ملاحظة مهمة': 'Locally AI محسَّن لأجهزة Mac المزوّدة بشريحة Apple Silicon؛ لا تتناول الصفحات التسويقية العامة للتطبيق سلوكه على أجهزة Mac القائمة على معالجات Intel — تحقق من توافق شريحة جهاز Mac لديك قبل التثبيت.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ماذا تعني في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الميزة': 'استدلال على الجهاز يضع الخصوصية أولًا',
            'ماذا تعني في الاستخدام الفعلي': 'بعد تنزيل نموذج، تُعالَج المحادثات على الجهاز بدلًا من إرسالها إلى خدمة سحابية لإجراء الاستدلال.',
            'القيد / الملاحظة': 'يتطلب تثبيت التطبيق الأولي وتنزيل النموذج نفسه اتصالًا بالإنترنت، وعلى الأرجح ستتطلب تحديثات التطبيق المستقبلية ذلك أيضًا.',
          },
          {
            'الميزة': 'قابل للعمل دون اتصال بعد تنزيل النموذج',
            'ماذا تعني في الاستخدام الفعلي': 'تعمل المحادثة دون اتصال إنترنت بمجرد اكتمال الإعداد — مفيد في الرحلات الجوية أو السفر أو المناطق ذات الاتصال غير الموثوق.',
            'القيد / الملاحظة': 'عليك التخطيط مسبقًا وتنزيل النموذج الذي تريد استخدامه بينما لا يزال لديك اتصال.',
          },
          {
            'الميزة': 'محسَّن لشريحة Apple Silicon',
            'ماذا تعني في الاستخدام الفعلي': 'صُمم التطبيق للاستفادة من عتاد الشبكة العصبية ووحدة الرسوميات على الجهاز في شرائح iPhone وiPad وMac من الجيل الحالي.',
            'القيد / الملاحظة': 'هذا يعني أيضًا أن Locally AI حصري لأجهزة Apple — لا توجد نسخة لـ Windows أو Android لمستخدمي تلك المنصّات.',
          },
          {
            'الميزة': 'الوصول إلى عدة عائلات نماذج مفتوحة في تطبيق واحد',
            'ماذا تعني في الاستخدام الفعلي': 'تتوفر Llama وGemma وQwen وDeepSeek — إضافة إلى نماذج مفتوحة أخرى — من واجهة واحدة دون الحاجة للحصول على ملفات النماذج يدويًا.',
            'القيد / الملاحظة': 'القائمة الدقيقة للنماذج القابلة للتنزيل وأحجام تخزينها غير منشورة بالكامل على الصفحات التسويقية العامة للتطبيق؛ تحقق من الاختيارات الحالية داخل التطبيق نفسه.',
          },
          {
            'الميزة': 'لا تكلفة استدلال سحابية متكررة',
            'ماذا تعني في الاستخدام الفعلي': 'بما أن الاستدلال يعمل على جهازك الخاص، لا توجد فاتورة API لكل رسالة أو رمز مقابل المحادثات المُعالَجة على الجهاز.',
            'القيد / الملاحظة': 'يستهلك الاستدلال على الجهاز بطارية جهازك وقدرته على المعالجة، ولم يتم التحقق بشكل مستقل من تسعير التطبيق نفسه لهذه المراجعة — تحقق من صفحة App Store الحالية.',
          },
          {
            'الميزة': 'نظام بيئي واحد لـ iPhone وiPad وMac',
            'ماذا تعني في الاستخدام الفعلي': 'يمكن لمستخدمي Apple استخدام نفس عائلة التطبيقات على هواتفهم وأجهزتهم اللوحية وحواسيبهم.',
            'القيد / الملاحظة': 'المستخدمون الذين يوزّعون عملهم بين أجهزة Windows أو Android سيحتاجون تطبيقًا منفصلًا لتلك المنصّات.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Locally AI مقابل البدائل',
        columns: ['التطبيق', 'الأفضل لـ', 'تركيز المنصّة', 'مرونة النماذج', 'القيد الرئيسي'],
        rows: [
          {
            'التطبيق': 'Locally AI',
            'الأفضل لـ': 'مستخدمو Apple الراغبون في تطبيق بسيط يضع الخصوصية أولًا لعائلات النماذج المفتوحة الرئيسية',
            'تركيز المنصّة': 'iPhone/iPad/Mac (محسَّن لشريحة Apple Silicon)',
            'مرونة النماذج': 'Llama وGemma وQwen وDeepSeek، إضافة إلى نماذج مفتوحة أخرى',
            'القيد الرئيسي': 'حصري لأجهزة Apple — لا تطبيق لـ Windows أو Android',
          },
          {
            'التطبيق': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            'الأفضل لـ': 'المستخدمون متعدّدو المنصّات الراغبون في محادثة خاصة بسيطة على مزيد من الأجهزة',
            'تركيز المنصّة': 'iPhone/iPad/Android/Mac/Windows (5 منصّات)',
            'مرونة النماذج': 'مكتبة مختارة تضم Gemma وQwen وLlama وPhi؛ لا يوجد استيراد لملفات GGUF مخصّصة',
            'القيد الرئيسي': 'اختيار النماذج محصور بمكتبة مختارة؛ لا يمكن استيراد ملفات GGUF مخصّصة',
          },
          {
            'التطبيق': 'Private LLM',
            'الأفضل لـ': 'مستخدمو Apple الراغبون في تحكّم عميق بالنماذج والضغط الكمي',
            'تركيز المنصّة': 'iPhone/iPad/Mac (حصري لـ Apple)',
            'مرونة النماذج': 'أكثر من 140 نموذجًا بصيغ ضغط كمي OmniQuant وGPTQ',
            'القيد الرئيسي': 'إعداد أكثر تعقيدًا من تطبيق مصمَّم للبساطة',
          },
          {
            'التطبيق': 'Ollama (على Mac)',
            'الأفضل لـ': 'المطوّرون الراغبون في تحكّم كامل عبر سطر الأوامر وواجهة برمجية على Mac',
            'تركيز المنصّة': 'Mac/Windows/Linux (سطح المكتب فقط، بلا تطبيق محمول أصلي)',
            'مرونة النماذج': 'أي نموذج من مكتبة Ollama، إضافة إلى استيراد ملفات GGUF مخصّصة',
            'القيد الرئيسي': 'سير عمل يعتمد أولًا على سطر الأوامر؛ لا تطبيق أصلي لـ iPhone أو iPad',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب Locally AI',
        items: [
          '**مستخدمو Apple الخالصون الراغبون في تطبيق واحد لـ iPhone وiPad وMac.** إذا كنت ضمن نظام Apple البيئي بالكامل ولا تحتاج دعم Windows أو Android، فإن Locally AI يغطي أنواع أجهزتك الثلاثة بتطبيق واحد.',
          '**المستخدمون المهتمّون بالخصوصية الراغبون في استدلال على الجهاز افتراضيًا.** بعد تنزيل نموذج، لا تحتاج المحادثات اتصالًا سحابيًا لمعالجتها — خيار مباشر للمستخدمين الذين يمنحون الأولوية لإبقاء محتوى المحادثات بعيدًا عن الخوادم البعيدة.',
          '**المسافرون والمستخدمون ذوو الاتصال غير المستقر.** بما أن المحادثة تعمل بالكامل دون اتصال بعد تنزيل النموذج، فإن الرحلات الجوية أو المناطق النائية أو الشبكات غير الموثوقة لا تُعطّل الوظيفة الأساسية للتطبيق.',
          '**المستخدمون الراغبون في الوصول لعدة عائلات نماذج مفتوحة رئيسية دون الحصول على الملفات بأنفسهم.** تتوفر Llama وGemma وQwen وDeepSeek من داخل التطبيق، دون الحاجة للبحث عن ملفات نماذج فردية وإدارتها.',
          '**المستخدمون الراغبون في تجربة النماذج مفتوحة المصدر الرائدة على عتاد Apple دون تكاليف سحابية.** بما أن الاستدلال يعمل على الجهاز، لا توجد فاتورة API لكل رسالة مقابل المحادثات المُعالَجة محليًا.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب Locally AI',
        items: [
          '**مستخدمو Windows أو Android.** Locally AI حصري لأجهزة Apple (iPhone وiPad وMac)؛ يحتاج مستخدمو المنصّات الأخرى تطبيقًا آخر، مثل [Loci](/power-local-llm/loci-ai-review-offline-local-ai)، الذي يغطي خمس منصّات بما فيها Windows وAndroid.',
          '**المستخدمون الراغبون في استيراد ملفات GGUF مخصّصة عشوائية.** إذا كان سير عملك يعتمد على تشغيل ملف نموذج معيّن مُعدَّل بدقة أو متخصّص من Hugging Face بدلًا من الاختيار من عائلات النماذج التي يدعمها Locally AI، فأداة أكثر يدوية مبنية حول استيراد GGUF ستكون أنسب.',
          '**المستخدمون الذين يتوقعون جودة استدلال بمستوى النماذج المتقدمة.** النماذج المفتوحة المصمَّمة لتعمل بشكل مريح على هاتف أو جهاز لوحي تتنازل عن بعض عمق الاستدلال مقابل هذه القابلية للتنقل؛ قد يظل المستخدمون الذين يجرون تحليلات عالية المخاطر، أو استدلالًا معقدًا متعدد الخطوات، أو أعباء عمل كثيفة في البرمجة بحاجة إلى نموذج سحابي متقدم لتلك المهام المحددة.',
          '**المطوّرون الراغبون في تحكّم يعتمد أولًا على سطر الأوامر أو واجهة برمجية.** المستخدمون الراغبون في برمجة الاستدلال، أو دمجه مع أدوات موجودة، أو تشغيل نماذج بلا واجهة على Mac قد يفضّلون أداة موجهة للمطوّرين مثل Ollama، إلى جانب تطبيق محادثة استهلاكي أو بدلًا منه.',
          '**أي شخص لم يراجع سياسة الخصوصية والتسعير الحاليين للتطبيق بحسب حالة استخدامه المحددة.** تعكس هذه المراجعة معلومات معلنة علنًا وقت كتابتها؛ تأكد من التسعير الحالي، وقائمة النماذج الدقيقة، وتفاصيل الخصوصية على [الموقع الرسمي](https://www.locallyai.app/) أو صفحة App Store قبل الاعتماد على التطبيق في حالات استخدام حساسة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو Locally AI؟',
            a: 'Locally AI تطبيق لأجهزة iPhone وiPad وMac يشغّل نماذج لغوية مفتوحة المصدر — منها Llama وGemma وQwen وDeepSeek — مباشرةً على الجهاز، وهو محسَّن لشريحة Apple Silicon. بعد تنزيل نموذج، يعمل بالكامل دون اتصال، دون حاجة لإنترنت للمحادثة.',
          },
          {
            q: 'هل يعمل Locally AI دون اتصال بالإنترنت؟',
            a: 'نعم، بالنسبة للمحادثة. بمجرد تثبيت التطبيق وتنزيل نموذج، يعمل الاستدلال على الجهاز ولا يحتاج لاتصال إنترنت — يمكن استخدام التطبيق في وضع الطيران. يلزم اتصال إنترنت لتثبيت التطبيق وللتنزيل الأولي لنموذج.',
          },
          {
            q: 'ما النماذج التي يدعمها Locally AI؟',
            a: 'يدعم Locally AI عدة عائلات رئيسية من النماذج مفتوحة المصدر: Llama (من Meta)، وGemma (من Google)، وQwen (من Alibaba)، وDeepSeek، إضافة إلى نماذج مفتوحة أخرى. تتوفر القائمة الدقيقة للنماذج القابلة للتنزيل وأحجام تخزينها داخل التطبيق أو على الموقع الرسمي [locallyai.app](https://www.locallyai.app/).',
          },
          {
            q: 'هل Locally AI متوفر على Android أو Windows؟',
            a: 'لا. صُمم Locally AI لأجهزة iPhone وiPad وMac وهو محسَّن لشريحة Apple Silicon. مستخدمو Android أو Windows الراغبون في تطبيق مشابه يعمل أولًا دون اتصال ويركّز على الخصوصية عليهم النظر في بدائل متعدّدة المنصّات، مثل Loci، الذي يدعم iPhone وiPad وAndroid وMac وWindows.',
          },
          {
            q: 'هل Locally AI خاص فعلًا؟',
            a: 'يتموضع Locally AI كتطبيق يضع الخصوصية أولًا: بعد تنزيل نموذج، يحدث الاستدلال على الجهاز بدلًا من عبر مكالمات سحابية. للاطلاع على سياسة الخصوصية الحالية والكاملة — بما في ذلك أي بيانات يجمعها التطبيق نفسه لأغراض التشخيص أو التحليل — تحقق من الموقع الرسمي أو ملصق الخصوصية في App Store، إذ تعكس هذه المراجعة معلومات معلنة علنًا ولم تتمكن من التحقق بشكل مستقل من كل ادعاء تقني متعلّق بالخصوصية.',
          },
          {
            q: 'كم مساحة تخزين يحتاجها Locally AI؟',
            a: 'تعتمد متطلبات التخزين على النموذج أو النماذج التي تنزّلها؛ يمكن أن تتراوح ملفات النماذج المفتوحة بالأحجام المعتادة للاستدلال على الجهاز من نحو 1 جيجابايت إلى عدة جيجابايتات لكل منها. لا تُنشر الأحجام الدقيقة والحالية لتخزين كل نموذج مدعوم بالكامل على الصفحات التسويقية العامة للتطبيق — تحقق من قائمة النماذج داخل التطبيق قبل التنزيل، خصوصًا على الأجهزة ذات المساحة الحرة المحدودة.',
          },
          {
            q: 'هل يمكن لـ Locally AI أن يحلّ محل ChatGPT أو Claude؟',
            a: 'بالنسبة للمهام المناسبة للنماذج مفتوحة المصدر التي تعمل على عتاد محمول أو سطح مكتب — كتابة المسودات، والتلخيص، والأسئلة العامة، وتدوين الملاحظات الخاصة — يمكن أن يعمل Locally AI كبديل خاص وقابل للاستخدام دون اتصال. أما بالنسبة للاستدلال بمستوى النماذج المتقدمة، أو أكثر مهام البرمجة تعقيدًا، أو الردود المستندة إلى الويب المباشر، فتظل النماذج السحابية مثل ChatGPT وClaude أكثر قدرة، لأنها تشغّل نماذج أكبر بكثير مما يمكن أن يتسع بشكل مريح على هاتف أو جهاز لوحي.',
          },
          {
            q: 'كيف يُقارَن Locally AI بـ Loci؟',
            a: 'Locally AI حصري لأجهزة Apple (iPhone وiPad وMac) ومحسَّن خصيصًا لشريحة Apple Silicon، مع دعم لـ Llama وGemma وQwen وDeepSeek ونماذج مفتوحة أخرى. يغطي Loci خمس منصّات — iPhone وiPad وAndroid وMac وWindows — بمكتبة نماذج مختارة. اختر Locally AI إذا كنت ضمن نظام Apple البيئي بالكامل؛ واختر Loci إذا كنت تحتاج أيضًا دعم Android أو Windows. راجع [مراجعتنا الكاملة لـ Loci AI](/power-local-llm/loci-ai-review-offline-local-ai) لمزيد من التفاصيل.',
          },
          {
            q: 'هل أحتاج طرازًا معيّنًا من iPhone أو iPad أو Mac لاستخدام Locally AI؟',
            a: 'Locally AI محسَّن لشريحة Apple Silicon، لذا فإن الأجهزة المزوّدة بشريحة Apple Silicon هي الفئة المستهدفة. لا تذكر الصفحات التسويقية العامة للتطبيق حدًّا أدنى دقيقًا للجهاز أو إصدار نظام التشغيل وقت كتابة هذا المقال — تحقق من صفحة App Store الحالية لمعرفة الحد الأدنى من المتطلبات التي يذكرها Locally AI قبل التنزيل.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content:
          'Locally AI خيار مباشر لمستخدمي Apple الراغبين في تطبيق يضع الخصوصية أولًا ويعمل على الجهاز للمحادثة مع عائلات نماذج مفتوحة المصدر رئيسية — Llama وGemma وQwen وDeepSeek — دون مغادرة نظام Apple البيئي أو إدارة ملفات النماذج يدويًا. يجعله تحسينه لشريحة Apple Silicon وعمله بالكامل دون اتصال بعد تنزيل النموذج مناسبًا للمستخدمين الذين يمنحون الأولوية لإبقاء محادثاتهم بعيدة عن الخوادم البعيدة، ويفضّلون تجربة تطبيق على سير عمل عبر سطر الأوامر. تكمن المفاضلة في نطاق المنصّات: لا يغطي Locally AI Windows أو Android، لذا يجب على من يحتاج تلك المنصّات النظر بدلًا من ذلك في تطبيق متعدّد المنصّات مثل [Loci](/power-local-llm/loci-ai-review-offline-local-ai). ينبغي على من يريد استيراد ملفات GGUF مخصّصة عشوائية أو يحتاج تحكّمًا أعمق بالضغط الكمي مقارنته بأدوات أكثر تطلّبًا للإعداد مثل Private LLM أو Ollama. بالنسبة لجمهوره المستهدف — مستخدمو Apple الراغبون في وصول خاص ودون اتصال إلى النماذج المفتوحة الرائدة دون تعقيد تقني — يملأ Locally AI فجوة واضحة.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Locally AI الرسمي](https://www.locallyai.app/) — نظرة عامة على المنتج، عائلات النماذج المدعومة، توفر المنصّات.',
          '[موقع Loci الرسمي](https://askloci.ai) — مرجع للمقارنة متعدّدة المنصّات.',
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — مراجعة مصاحبة استُخدمت لمقارنة البدائل في هذا المقال.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — بديل متعدّد المنصّات يغطي iPhone وiPad وAndroid وMac وWindows.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — استعراض تطبيقات iPhone؛ يشمل PocketPal AI وPrivate LLM وMLC Chat وLLM Farm وApple Intelligence.',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — دليل يركّز على الأجهزة للاستدلال على الجهاز والاستدلال عن بُعد على الأجهزة اللوحية.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — مقال مكمّل على مستوى النماذج؛ معايير أداء ومفاضلات جودة على الهاتف المحمول.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — دليل شامل للتطبيقات والأدوات لجميع المنصّات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-04',
    dateModified: '2026-09-04',
    next_refresh_due: '2027-03-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/locally-ai-review-hero-ko.webp',
    title: 'Locally AI 리뷰(2026): iPhone·iPad·Mac에서 쓰는 프라이빗 오프라인 LLM',
    seoTitle: 'Locally AI 리뷰 2026: Apple 기기용 오프라인 LLM',
    intro:
      '개발사 [Locally AI](https://www.locallyai.app/)가 만든 Locally AI는 Llama, Gemma, Qwen, DeepSeek 등 오픈소스 언어 모델을 iPhone, iPad, Mac에서 직접 실행하는 앱으로, Apple Silicon에 최적화되어 있습니다. 모델을 다운로드하면 완전히 기기 내에서 작동합니다. 채팅에 인터넷 연결이 필요 없으며, 개발사의 프라이버시 우선 방침에 따라 대화가 추론을 위해 클라우드 서비스로 전송되지 않습니다. 이 앱을 고려하는 사람에게 실질적인 질문은 Apple 하드웨어에서 온디바이스 추론이 가능한지가 아닙니다 — Apple Silicon은 이를 위한 신경망 및 GPU 성능을 충분히 갖추고 있습니다 — 오히려 GGUF 파일을 직접 고르거나 양자화를 조정하거나 필요한 VRAM을 계산하지 않고도 Locally AI가 그 추론 주변에 실용적인 앱 경험을 제공하는지입니다.',
    metaDescription:
      'Locally AI 리뷰: iPhone, iPad, Mac에서 프라이빗하고 오프라인으로 작동하는 LLM 앱으로 쓸 만한가? Llama, Gemma, Qwen, DeepSeek와 어떻게 작동하는지, 누구에게 적합한지, Loci·Private LLM과 어떻게 비교되는지 살펴본다.',
    twitterDescription:
      'Locally AI 리뷰 2026: iPhone, iPad, Mac에서 Llama, Gemma, Qwen, DeepSeek를 완전히 오프라인으로 실행 — Apple Silicon 최적화. 프라이버시 방침, 플랫폼 적합성, Loci·Private LLM과의 비교.',
    audience:
      'Locally AI로 기기 내 LLM을 쓸지, 클라우드 AI 서비스나 다른 로컬 LLM 앱을 쓸지 고민하는 Apple 기기 사용자 — 플랫폼 적합성, 프라이버시 방침, 지원 모델, 유사한 오프라인 우선 앱과의 비교를 다룬다.',
    readTime: '8분 소요',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { label: 'Locally AI 공식 사이트 방문 →', url: 'https://[www.locallyai.app](https://www.locallyai.app/)/', productName: 'Locally AI', productCategory: 'software' },
    ],
    primaryTerm: 'Locally AI 리뷰',
    targetKeywords: [
      'locally ai 리뷰',
      'locally ai 앱',
      'locally ai iphone',
      'locally ai mac',
      'iphone 오프라인 llm',
      'iphone llama 실행',
      'locally ai vs loci',
      'apple silicon 로컬 llm 앱',
    ],
    current_models_mentioned: ['Llama', 'Gemma', 'Qwen', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac', 'Apple Silicon'],
    leadAnswerBlock:
      '**Locally AI는 Llama, Gemma, Qwen, DeepSeek 같은 오픈 모델과 Apple 기기 안에서만 대화하고 싶은 사람에게 특히 매력적인, 간단하고 프라이버시 우선인 앱을 찾는 경우 강점이 있습니다.** iPhone, iPad, Mac에서 작동하며 Apple Silicon에 최적화되어 있고, 모델을 다운로드하면 완전히 오프라인으로 작동합니다 — 클라우드 호출 없이, 채팅에 인터넷 연결도 필요 없습니다. Apple 생태계를 벗어나지 않고 추론 인프라를 직접 관리하지 않으면서 프라이빗한 온디바이스 AI를 원하는 사용자를 위해 만들어졌습니다. Windows나 Android 지원이 필요하거나, 임의의 커스텀 GGUF 파일을 가져오고 싶거나, 폰이나 태블릿에서 수십억 파라미터급 오픈 모델이 제공할 수 있는 범위를 넘어서는 최상급 추론이 필요한 사용자는 Loci 같은 앱과 비교하거나 Mac에서 Ollama 같은 도구로 모델을 직접 관리해야 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'iPhone이나 Mac에서 오프라인 LLM을 쓰려면 Locally AI를 써야 할까?',
        answer:
          'Llama, Gemma, Qwen, DeepSeek 같은 오픈 모델과 iPhone, iPad, Mac에서 완전히 오프라인으로 대화하고 싶고, 모델을 다운로드한 뒤에는 클라우드 호출이 전혀 없기를 원한다면 Locally AI를 사용하세요. Windows나 Android 지원이 필요하거나, 앱이 지원하는 모델 집합 밖의 커스텀 GGUF 파일을 가져오고 싶다면 피하세요.',
        bullets: [
          'Llama, Gemma, Qwen, DeepSeek를 완전히 기기 내에서 실행.',
          '지원 플랫폼: iPhone, iPad, Mac — Apple Silicon 최적화.',
          '모델을 다운로드하면 채팅에 인터넷 연결 불필요.',
          '프라이버시 우선 방침: 추론에 클라우드 호출 없음.',
          'Apple 전용 — Windows나 Android 앱 없음.',
        ],
        updatedDate: '2026-09',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Locally AI란', anchor: 'what-is-locally-ai' },
      { label: 'Locally AI가 지원하는 모델', anchor: 'models-supported' },
      { label: '플랫폼별 Locally AI', anchor: 'platforms-hardware' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
      { label: 'Locally AI와 대안 비교', anchor: 'vs-alternatives' },
      { label: 'Locally AI가 적합한 사용자', anchor: 'who-should-use' },
      { label: 'Locally AI가 적합하지 않은 사용자', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          { type: 'one-sentence', text: 'Locally AI는 iPhone, iPad, Mac용 앱으로, Llama, Gemma, Qwen, DeepSeek를 포함한 오픈소스 언어 모델을 완전히 기기 내에서 실행하며 Apple Silicon에 최적화되어 있어, 모델을 다운로드하면 인터넷 연결이나 클라우드 호출 없이 채팅할 수 있습니다.' },
          { type: 'plain-terms', text: '메시지를 기업 서버로 보내는 대신, Locally AI는 소형 AI 모델을 iPhone, iPad, Mac에 다운로드해 그 자리에서 실행합니다. 다운로드가 끝난 뒤 비행기 모드를 켜도 계속 작동하는데, 개발사의 프라이버시 우선 설계 덕분에 대화 내용 자체는 기기를 벗어날 필요가 없기 때문입니다.' },
        ],
        items: [
          'Locally AI는 오픈소스 모델인 Llama, Gemma, Qwen, DeepSeek를 완전히 오프라인으로, 기기 내에서 실행한다.',
          '지원 플랫폼: iPhone, iPad, Mac. Apple Silicon 최적화.',
          '모델을 다운로드하면 이후 인터넷 연결이 필요 없다.',
          '프라이버시 우선 방침: 개발사는 추론이 기기 내에서 이뤄지며 클라우드 호출이 없다고 밝힌다.',
          'Apple 전용 — Windows나 Android 버전이 없어, 다른 OS 사용자는 다른 앱이 필요하다.',
          '폰과 태블릿용 온디바이스 앱이라면 공통적으로 겪는 핵심 트레이드오프: 모바일 하드웨어에 무리 없이 들어가는 모델 크기는 복잡하고 다단계적인 추론 작업에서 최상급 클라우드 모델에 뒤처진다.',
        ],
        callouts: [
          { type: 'note', text: '이 리뷰는 [locallyai.app](https://www.locallyai.app/)과 앱의 공식 게재 정보에 공개된 사실을 바탕으로 작성되었습니다. 가격, 정확한 모델 목록, 저장 용량, 최소 OS 버전은 작성 시점에 독립적으로 검증하지 않았습니다 — 다운로드 전 공식 사이트나 App Store 게재 정보에서 최신 세부 정보를 확인하세요.' },
        ],
      },
      whatIsLocallyAI: {
        id: 'what-is-locally-ai',
        title: 'Locally AI란 무엇인가?',
        content: [
          '**Locally AI는 대화를 클라우드 서비스로 보내지 않고 iPhone, iPad, Mac에서 오픈소스 언어 모델을 직접 실행하는 앱입니다.** Apple이 현재 iPhone, iPad, Mac 라인업 전반에 사용하는 칩 아키텍처인 Apple Silicon을 위해 만들어지고 최적화되어 있습니다. 즉 이 앱은 전화기를 원격 서버를 위한 씬 클라이언트로 취급하는 대신, 해당 칩이 제공하는 기기 내 신경망 및 GPU 하드웨어를 활용하도록 설계되었습니다.',
          '핵심 모델 구성에는 Llama(Meta의 오픈 웨이트 모델 계열), Gemma(Google의 오픈 웨이트 모델 계열), Qwen(Alibaba의 오픈 웨이트 모델 계열), DeepSeek(DeepSeek의 오픈 웨이트 모델 계열)가 포함됩니다 — 모두 독립 파일로 배포되어 벤더가 통제하는 API 없이 실행될 수 있는 오픈소스 모델입니다. Locally AI는 이런 모델에 대한 접근을 모바일과 데스크톱 모두에 적합한 단일 인터페이스로 묶어 제공하므로, 사용자가 모델 파일을 직접 구하거나 별도의 추론 서버를 운영할 필요가 없습니다.',
          '모델이 기기로의 다운로드를 마치면, Locally AI는 응답을 생성하는 데 인터넷 연결이 필요하지 않습니다 — 추론은 기기 자체의 프로세서와 메모리를 사용해 로컬에서 실행됩니다. 이것이 "오프라인"의 실질적 의미입니다. 모델을 미리 다운로드해두면 비행기 모드나 기내, 또는 연결이 전혀 없는 어디서든 앱을 사용할 수 있습니다.',
        ],
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Locally AI는 어떤 모델을 지원하나?',
        content: [
          '**Locally AI는 Llama, Gemma, Qwen, DeepSeek라는 주요 오픈소스 모델 계열 여러 개와 그 외 오픈 모델들을 지원하며, 모두 완전히 기기 내에서 실행할 수 있습니다.** 이 네 계열은 광범위한 사용 사례를 아우르며 오늘날 가장 널리 쓰이는 오픈 웨이트 모델 중 일부에 속합니다. 각각 서로 다른 조직(Meta, Google, Alibaba, DeepSeek)이 관리합니다.',
        ],
        items: [
          '**Llama** — Meta의 오픈 웨이트 모델 계열로, 로컬 LLM 생태계 전반에서 범용 채팅 및 추론의 기준으로 널리 쓰인다.',
          '**Gemma** — Google의 오픈 웨이트 모델 계열로, Google의 Gemini 모델과 같은 연구 계보에서 나왔으며 온디바이스 및 엣지 배포에 흔히 쓰인다.',
          '**Qwen** — Alibaba의 오픈 웨이트 모델 계열로, 강력한 다국어 지원과 제한된 하드웨어에 맞는 다양한 모델 크기로 알려져 있다.',
          '**DeepSeek** — DeepSeek의 오픈 웨이트 모델 계열로, 모델 크기 대비 경쟁력 있는 추론 성능으로 인정받는다.',
          '**그 외 오픈 모델** — Locally AI는 이 4대 주력 계열 외에도 추가 오픈 모델을 지원한다고 밝히고 있어, 기기에서 실행할 수 있는 선택지를 넓힌다.',
        ],
        note: '작성 시점 기준으로 Locally AI는 공개 마케팅 페이지에 정확한 모델 버전, 파라미터 수 변형, 저장 용량에 대한 전체 변경 이력을 게재하지 않습니다. 기기의 사용 가능한 저장 공간에 맞춰 모델을 고르기 전에, 앱 내 모델 목록이나 공식 사이트 [locallyai.app](https://www.locallyai.app/)에서 현재 정확한 다운로드 가능 모델 구성을 확인하세요.',
      },
      platformsHardware: {
        id: 'platforms-hardware',
        itemHeadings: true,
        title: '플랫폼별 Locally AI',
        columns: ['플랫폼', '예상되는 내용', '중요 참고 사항'],
        rows: [
          {
            '플랫폼': 'iPhone',
            '예상되는 내용': 'Locally AI는 iPhone에서 작동하며, 앱은 Apple Silicon의 기기 내 신경망 및 GPU 하드웨어를 활용하도록 최적화되어 있습니다. 지원되는 모델을 다운로드하면 채팅은 완전히 오프라인으로 작동합니다.',
            '중요 참고 사항': '정확한 최소 iOS 버전과 기기별 성능은 앱의 공개 마케팅 페이지에 게재되어 있지 않습니다 — 다운로드 전 App Store 게재 정보에서 현재 기기 호환성을 확인하세요.',
          },
          {
            '플랫폼': 'iPad',
            '예상되는 내용': 'Locally AI는 iPad에서 작동하며, iPhone과 동일한 기기 내 모델 구성과 오프라인 동작을 공유합니다. 더 큰 화면과, 많은 iPad 모델에서 비슷하거나 더 강력한 Apple Silicon 성능은 긴 세션을 더 편하게 만들어 줄 수 있습니다.',
            '중요 참고 사항': 'iPhone과 마찬가지로, 모델을 다운로드하기 전 App Store에서 현재 최소 iPadOS 버전과 저장 공간 요구 사항을 확인하세요.',
          },
          {
            '플랫폼': 'Mac',
            '예상되는 내용': 'Locally AI는 Mac에서 작동하며, Apple Silicon(M 시리즈 칩)은 일반적으로 iPhone이나 iPad보다 더 많은 통합 메모리를 제공하는데, 이는 앱이 지원하는 가장 큰 모델에서 중요할 수 있습니다.',
            '중요 참고 사항': 'Locally AI는 Apple Silicon 탑재 Mac에 최적화되어 있습니다. Intel 기반 Mac에서의 동작은 앱의 공개 마케팅 페이지에서 다뤄지지 않습니다 — 설치 전 Mac 칩 호환성을 확인하세요.',
          },
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 참고 사항'],
        rows: [
          {
            '이점': '프라이버시 우선 온디바이스 추론',
            '실제 사용에서의 의미': '모델을 다운로드하면 대화는 추론을 위해 클라우드 서비스로 보내지는 대신 기기 내에서 처리됩니다.',
            '한계 / 참고 사항': '앱의 초기 설치와 모델 다운로드 자체는 인터넷 연결이 필요하며, 향후 앱 업데이트도 마찬가지일 가능성이 높습니다.',
          },
          {
            '이점': '모델 다운로드 후 오프라인 사용 가능',
            '실제 사용에서의 의미': '설정이 끝나면 인터넷 연결 없이 채팅이 작동합니다 — 비행이나 여행, 연결이 불안정한 지역에서 유용합니다.',
            '한계 / 참고 사항': '아직 연결이 있는 동안 사용하려는 모델을 미리 계획하고 다운로드해야 합니다.',
          },
          {
            '이점': 'Apple Silicon에 최적화',
            '실제 사용에서의 의미': '앱은 현세대 iPhone, iPad, Mac 칩이 제공하는 기기 내 신경망 및 GPU 하드웨어를 활용하도록 만들어졌습니다.',
            '한계 / 참고 사항': '이는 Locally AI가 Apple 전용이라는 뜻이기도 합니다 — 해당 플랫폼 사용자를 위한 Windows나 Android 버전은 없습니다.',
          },
          {
            '이점': '하나의 앱에서 여러 오픈 모델 계열에 접근',
            '실제 사용에서의 의미': 'Llama, Gemma, Qwen, DeepSeek에 더해 다른 오픈 모델들도 모델 파일을 직접 구할 필요 없이 하나의 인터페이스에서 이용할 수 있습니다.',
            '한계 / 참고 사항': '다운로드 가능한 모델의 정확한 목록과 저장 용량은 앱의 공개 마케팅 페이지에 전부 게재되어 있지 않습니다. 현재 구성은 앱 자체에서 확인하세요.',
          },
          {
            '이점': '반복되는 클라우드 추론 비용 없음',
            '실제 사용에서의 의미': '추론이 자신의 기기에서 실행되므로, 기기 내에서 처리된 채팅에는 메시지당 또는 토큰당 API 청구가 발생하지 않습니다.',
            '한계 / 참고 사항': '온디바이스 추론은 기기의 배터리와 처리 능력을 소모하며, 앱 자체의 가격은 이번 리뷰에서 독립적으로 검증하지 않았습니다 — 현재 App Store 게재 정보를 확인하세요.',
          },
          {
            '이점': 'iPhone, iPad, Mac을 아우르는 단일 생태계',
            '실제 사용에서의 의미': 'Apple 사용자는 전화기, 태블릿, 컴퓨터에서 동일한 앱 계열을 사용할 수 있습니다.',
            '한계 / 참고 사항': 'Windows나 Android 기기로 작업을 분산하는 사용자는 해당 플랫폼용으로 별도의 앱이 필요합니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Locally AI와 대안 비교',
        columns: ['앱', '적합한 사용자', '플랫폼 초점', '모델 유연성', '주요 한계'],
        rows: [
          {
            '앱': 'Locally AI',
            '적합한 사용자': '주요 오픈 모델 계열을 위한 간단하고 프라이버시 우선인 앱을 원하는 Apple 사용자',
            '플랫폼 초점': 'iPhone/iPad/Mac(Apple Silicon 최적화)',
            '모델 유연성': 'Llama, Gemma, Qwen, DeepSeek, 그 외 오픈 모델',
            '주요 한계': 'Apple 전용 — Windows나 Android 앱 없음',
          },
          {
            '앱': '[Loci](/power-local-llm/loci-ai-review-offline-local-ai)',
            '적합한 사용자': '더 많은 기기에서 부담 없는 프라이빗 채팅을 원하는 크로스플랫폼 사용자',
            '플랫폼 초점': 'iPhone/iPad/Android/Mac/Windows(5개 플랫폼)',
            '모델 유연성': 'Gemma, Qwen, Llama, Phi를 포함한 큐레이션 라이브러리. 커스텀 GGUF 가져오기 불가',
            '주요 한계': '모델 선택이 큐레이션 라이브러리로 제한되고, 커스텀 GGUF 파일을 가져올 수 없음',
          },
          {
            '앱': 'Private LLM',
            '적합한 사용자': '모델과 양자화를 깊이 제어하고 싶은 Apple 사용자',
            '플랫폼 초점': 'iPhone/iPad/Mac(Apple 전용)',
            '모델 유연성': 'OmniQuant, GPTQ 양자화 형식을 지원하는 140개 이상의 모델',
            '주요 한계': '단순함을 지향하는 앱보다 설정이 더 복잡함',
          },
          {
            '앱': 'Ollama(Mac에서)',
            '적합한 사용자': 'Mac에서 완전한 명령줄 및 API 제어를 원하는 개발자',
            '플랫폼 초점': 'Mac/Windows/Linux(데스크톱 전용, 네이티브 모바일 앱 없음)',
            '모델 유연성': 'Ollama 라이브러리의 모든 모델, 커스텀 GGUF 가져오기 지원',
            '주요 한계': '명령줄 중심 워크플로. iPhone이나 iPad용 네이티브 앱 없음',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Locally AI가 적합한 사용자',
        items: [
          '**iPhone, iPad, Mac 전반에 걸쳐 앱 하나만 쓰고 싶은 Apple 전용 사용자.** Apple 생태계 안에 완전히 머물러 있고 Windows나 Android 지원이 필요 없다면, Locally AI 하나로 세 가지 기기 유형을 모두 커버할 수 있습니다.',
          '**기본적으로 온디바이스 추론을 원하는 프라이버시 중시 사용자.** 모델을 다운로드하면 대화 처리에 클라우드 연결이 필요 없습니다 — 대화 내용을 원격 서버 밖에 두는 것을 우선시하는 사용자에게 직접적으로 맞는 선택입니다.',
          '**여행자, 연결이 불안정한 사용자.** 모델 다운로드 후 채팅이 완전히 오프라인으로 작동하므로 비행, 오지, 신뢰할 수 없는 네트워크가 앱의 핵심 기능을 방해하지 않습니다.',
          '**직접 파일을 구하지 않고도 여러 주요 오픈 모델 계열에 접근하고 싶은 사용자.** Llama, Gemma, Qwen, DeepSeek는 개별 모델 파일을 찾고 관리할 필요 없이 앱 안에서 바로 이용할 수 있습니다.',
          '**클라우드 비용 없이 Apple 하드웨어에서 주요 오픈소스 모델을 써보고 싶은 사용자.** 추론이 기기 내에서 실행되므로 로컬에서 처리된 채팅에는 메시지당 API 청구가 발생하지 않습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Locally AI가 적합하지 않은 사용자',
        items: [
          '**Windows나 Android 사용자.** Locally AI는 Apple 전용(iPhone, iPad, Mac)이므로, 다른 플랫폼 사용자는 Windows와 Android를 포함한 5개 플랫폼을 지원하는 [Loci](/power-local-llm/loci-ai-review-offline-local-ai) 같은 다른 앱이 필요합니다.',
          '**임의의 커스텀 GGUF 파일을 가져오고 싶은 사용자.** Locally AI가 지원하는 모델 계열 중에서 선택하는 대신 Hugging Face에서 가져온 특정 파인튜닝 모델이나 틈새 모델 파일을 실행하는 데 워크플로가 의존한다면, GGUF 가져오기를 중심으로 한 더 수동적인 도구가 더 잘 맞습니다.',
          '**최상급 모델 수준의 추론 품질을 기대하는 사용자.** 폰이나 태블릿에서 무리 없이 작동하도록 크기가 맞춰진 오픈 모델은 그 휴대성과 맞바꿔 추론 깊이를 일부 희생합니다. 고위험 분석, 복잡한 다단계 추론, 코딩 비중이 큰 작업을 하는 사용자는 해당 특정 작업에 대해 여전히 최상급 클라우드 모델이 필요할 수 있습니다.',
          '**명령줄 또는 API 우선 제어를 원하는 개발자.** 추론을 스크립트화하거나 기존 도구와 통합하거나 Mac에서 헤드리스로 모델을 실행하고 싶은 사용자는 소비자용 채팅 앱과 함께, 또는 그 대신 Ollama 같은 개발자 중심 도구를 선호할 수 있습니다.',
          '**자신의 구체적인 사용 사례에 대해 앱의 현재 개인정보 처리방침과 가격을 확인하지 않은 사람.** 이 리뷰는 작성 시점에 공개된 정보를 반영합니다 — 민감한 용도로 앱에 의존하기 전에 [공식 사이트](https://www.locallyai.app/)나 App Store 게재 정보에서 현재 가격, 정확한 모델 목록, 개인정보 세부 사항을 확인하세요.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Locally AI란 무엇인가요?',
            a: 'Locally AI는 iPhone, iPad, Mac용 앱으로, Llama, Gemma, Qwen, DeepSeek를 포함한 오픈소스 언어 모델을 기기 내에서 직접 실행하며 Apple Silicon에 최적화되어 있습니다. 모델을 다운로드하면 완전히 오프라인으로 작동하며, 채팅에 인터넷 연결이 필요 없습니다.',
          },
          {
            q: 'Locally AI는 인터넷 연결 없이 작동하나요?',
            a: '채팅에 한해서는 그렇습니다. 앱을 설치하고 모델을 다운로드하면 추론은 기기 내에서 실행되며 인터넷 연결이 필요 없습니다 — 앱은 비행기 모드에서도 사용할 수 있습니다. 앱을 설치하고 모델을 처음 다운로드할 때는 인터넷 연결이 필요합니다.',
          },
          {
            q: 'Locally AI는 어떤 모델을 지원하나요?',
            a: 'Locally AI는 Llama(Meta), Gemma(Google), Qwen(Alibaba), DeepSeek라는 주요 오픈소스 모델 계열과 그 외 오픈 모델을 지원합니다. 다운로드 가능한 모델의 정확한 목록과 저장 용량은 앱 내부 또는 공식 사이트 [locallyai.app](https://www.locallyai.app/)에서 확인할 수 있습니다.',
          },
          {
            q: 'Locally AI는 Android나 Windows에서도 쓸 수 있나요?',
            a: '아니요. Locally AI는 iPhone, iPad, Mac용으로 만들어졌으며 Apple Silicon에 최적화되어 있습니다. 비슷하게 오프라인 우선이고 프라이버시에 초점을 맞춘 앱을 원하는 Android나 Windows 사용자는 iPhone, iPad, Android, Mac, Windows를 지원하는 Loci 같은 크로스플랫폼 대안을 살펴봐야 합니다.',
          },
          {
            q: 'Locally AI는 정말 프라이빗한가요?',
            a: 'Locally AI는 프라이버시 우선을 표방합니다: 모델을 다운로드하면 클라우드 호출이 아니라 기기 내에서 추론이 이뤄집니다. 앱 자체가 진단이나 분석 목적으로 수집하는 데이터를 포함해 현재의 완전한 개인정보 처리방침을 확인하려면 공식 사이트나 App Store의 개인정보 보호 라벨을 참고하세요. 이 리뷰는 공개된 정보를 반영한 것으로, 모든 기술적 프라이버시 주장을 독립적으로 검증하지는 못했습니다.',
          },
          {
            q: 'Locally AI에는 저장 공간이 얼마나 필요한가요?',
            a: '저장 공간 요구 사항은 다운로드하는 모델에 따라 다릅니다. 온디바이스 추론에 일반적으로 쓰이는 크기의 오픈 모델 파일은 각각 대략 1GB에서 수 GB 사이일 수 있습니다. 지원되는 각 모델의 정확한 현재 저장 용량은 앱의 공개 마케팅 페이지에 전부 게재되어 있지 않습니다 — 특히 여유 저장 공간이 적은 기기에서는 다운로드 전 앱 내 모델 목록을 확인하세요.',
          },
          {
            q: 'Locally AI가 ChatGPT나 Claude를 대체할 수 있나요?',
            a: '모바일이나 데스크톱 하드웨어에서 실행되는 오픈소스 모델에 적합한 작업 — 초안 작성, 요약, 일반적인 질의응답, 개인 메모 작성 등 — 이라면 Locally AI는 프라이빗하고 오프라인으로 쓸 수 있는 대안이 될 수 있습니다. 최상급 추론, 특히 복잡한 코딩 작업이나 실시간 웹 기반 답변에 대해서는 ChatGPT나 Claude 같은 클라우드 모델이 여전히 더 뛰어난데, 이는 폰이나 태블릿에 무리 없이 들어가는 크기를 훨씬 뛰어넘는 모델을 실행하기 때문입니다.',
          },
          {
            q: 'Locally AI는 Loci와 비교하면 어떤가요?',
            a: 'Locally AI는 Apple 전용(iPhone, iPad, Mac)이며 Apple Silicon에 특화되어 최적화되어 있고, Llama, Gemma, Qwen, DeepSeek, 그 외 오픈 모델을 지원합니다. Loci는 iPhone, iPad, Android, Mac, Windows 다섯 개 플랫폼을 큐레이션된 모델 라이브러리로 지원합니다. Apple 생태계 안에 완전히 머무른다면 Locally AI를, Android나 Windows 지원도 필요하다면 Loci를 선택하세요. 자세한 내용은 [Loci AI 전체 리뷰](/power-local-llm/loci-ai-review-offline-local-ai)를 참고하세요.',
          },
          {
            q: 'Locally AI를 쓰려면 특정 iPhone, iPad, Mac 모델이 필요한가요?',
            a: 'Locally AI는 Apple Silicon에 최적화되어 있으므로 Apple Silicon 칩을 탑재한 기기가 대상입니다. 작성 시점 기준으로 앱의 공개 마케팅 페이지에는 정확한 최소 기기나 OS 버전이 나와 있지 않습니다 — 다운로드 전 현재 App Store 게재 정보에서 Locally AI가 명시하는 최소 요구 사항을 확인하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content:
          'Locally AI는 Apple 생태계를 벗어나지 않고 모델 파일을 직접 관리하지 않으면서 Llama, Gemma, Qwen, DeepSeek 같은 대형 오픈소스 모델 계열과 대화할 수 있는 프라이버시 우선 온디바이스 앱을 원하는 Apple 사용자에게 직관적인 선택입니다. Apple Silicon 최적화와 모델 다운로드 후 완전히 오프라인으로 작동한다는 점은 대화를 원격 서버 밖에 두는 것을 우선시하고 명령줄 워크플로보다 앱 경험을 선호하는 사용자에게 잘 맞습니다. 트레이드오프는 플랫폼 범위에 있습니다: Locally AI는 Windows나 Android를 지원하지 않으므로, 해당 플랫폼이 필요한 사용자는 대신 [Loci](/power-local-llm/loci-ai-review-offline-local-ai) 같은 크로스플랫폼 앱을 살펴봐야 합니다. 임의의 커스텀 GGUF 파일을 가져오고 싶거나 더 깊은 양자화 제어가 필요한 사용자는 Private LLM이나 Ollama처럼 설정이 더 복잡한 도구와 비교해야 합니다. 대상 사용자층 — 기술적 부담 없이 주요 오픈 모델에 프라이빗하고 오프라인으로 접근하고 싶은 Apple 사용자 — 에게 Locally AI는 명확한 틈새를 채웁니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Locally AI 공식 사이트](https://www.locallyai.app/) — 제품 개요, 지원 모델 계열, 플랫폼 지원 현황.',
          '[Loci 공식 사이트](https://askloci.ai) — 크로스플랫폼 비교 참고 자료.',
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — 이 글의 대안 비교에 사용된 관련 리뷰.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Loci AI Review: Private Offline AI on iPhone, Android, iPad and Mac](/power-local-llm/loci-ai-review-offline-local-ai) — iPhone, iPad, Android, Mac, Windows를 아우르는 크로스플랫폼 대안.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone 앱 총정리, PocketPal AI, Private LLM, MLC Chat, LLM Farm, Apple Intelligence 포함.',
          '[Run a Local LLM on Your Tablet: iPad and Android (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — 태블릿의 온디바이스 및 원격 추론에 초점을 맞춘 가이드.',
          '[Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 4 vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 모델 계층 관련 글, 모바일에서의 벤치마크와 품질 트레이드오프.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — 모든 플랫폼을 아우르는 종합 앱·도구 디렉터리.',
        ],
      },
    },
  },
}
