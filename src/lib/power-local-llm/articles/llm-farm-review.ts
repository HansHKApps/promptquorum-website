// LLM Farm Review: Open-Source iOS/macOS GGUF Runtime — Currently Off the App Store
// Slug: llm-farm-review
// Companion to: pocketpal-ai-review, private-llm-review, enclave-ai-review, locally-ai-review,
// loci-ai-review-offline-local-ai, best-local-llm-apps-iphone-2026

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-farm-review-hero-en.webp',
    title: 'LLM Farm Review (2026): Open-Source GGUF App, Off the App Store',
    seoTitle: 'LLM Farm Review 2026: Open-Source iOS GGUF Runtime',
    intro:
      'LLM Farm is a free, MIT-licensed, open-source app for iOS and macOS that runs GGUF language models directly on the device via a Swift wrapper around [ggml](https://github.com/ggerganov/ggml) and llama.cpp. It was created by developer Artem Savkin (GitHub handle [guinmoon](https://github.com/guinmoon)) and first launched on the App Store in December 2023. As of this review, LLM Farm is not installable from the App Store or TestFlight — Apple removed the listing in August 2025, and the project\'s own [GitHub README](https://github.com/guinmoon/LLMFarm) still describes the app as "temporarily unavailable" in both channels. This review covers what the app does, its LoRA fine-tuning and merging tools (a feature most mobile local-AI apps do not have), how to build it from source today, and — importantly — why it is not a fit for anyone who is not comfortable compiling an iOS app themselves.',
    metaDescription:
      'LLM Farm review: the open-source, MIT-licensed iOS/macOS GGUF app with on-device LoRA fine-tuning. Currently off the App Store — what that means and how to build it.',
    twitterDescription:
      'LLM Farm review 2026: the open-source iOS/macOS GGUF runtime with on-device LoRA tools — currently pulled from the App Store, buildable from source only.',
    audience:
      'Technically comfortable iOS and macOS users who want an open-source, on-device GGUF runtime with LoRA fine-tuning, and who are willing to build the app from source.',
    readTime: '11 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'LLM Farm review',
    targetKeywords: [
      'llm farm review',
      'llmfarm ios',
      'llm farm app store',
      'llm farm guinmoon',
      'llm farm lora',
      'run gguf models on iphone',
      'open source ios llm app',
      'llm farm alternative',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'Phi', 'LLaMA', 'Mixtral', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**LLM Farm is a free, open-source (MIT license) iOS and macOS app that runs GGUF language models entirely on-device, and it currently cannot be installed from the App Store or TestFlight.** Built by developer Artem Savkin ([guinmoon](https://github.com/guinmoon) on GitHub) and first released in December 2023, the [GitHub repository](https://github.com/guinmoon/LLMFarm) has over 2,000 stars and 180+ forks. Apple removed the App Store listing in August 2025, and the project\'s README still marks both the App Store and TestFlight distribution channels as "temporarily unavailable" as of this review. The source code remains public and MIT-licensed, so the app can be compiled and installed via Xcode, but that requires an Apple developer account and comfort with building iOS apps from source — this is no longer a tap-to-install app for most people.',
    quickAnswerTop: {
      en: {
        question: 'Can I still install LLM Farm, and is it worth it?',
        answer:
          'Not from the App Store — Apple removed the listing in August 2025, and the project\'s own GitHub README still lists both the App Store and TestFlight as "temporarily unavailable." The only current route is to build the open-source app from source in Xcode, which requires an Apple developer account and basic iOS build experience. If you can do that, LLM Farm is one of the few mobile apps with real LoRA fine-tuning and merging tools built in; if you cannot, PocketPal AI or Private LLM are tap-to-install alternatives you can actually get onto your phone today.',
        bullets: [
          'Free and open source under the MIT license, developed by Artem Savkin ([guinmoon](https://github.com/guinmoon/LLMFarm) on GitHub).',
          'Not currently installable from the App Store or TestFlight — Apple delisted it in August 2025; the GitHub README confirms the "temporarily unavailable" status as of this review.',
          'The only current installation path is building from source via Xcode, which needs an Apple developer account.',
          'Supports on-device LoRA adapter loading, fine-tuning, and merging — a feature most competing apps lack.',
          'Runs GGUF models across 16+ architectures (LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek, and more) via its own ggml/llama.cpp-based engine.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is LLM Farm?', anchor: 'what-is-llm-farm' },
      { label: 'Who Built LLM Farm?', anchor: 'history-and-developer' },
      { label: 'Is LLM Farm Still on the App Store?', anchor: 'app-store-status' },
      { label: 'How to Get LLM Farm Today', anchor: 'getting-started' },
      { label: 'Which Models Does LLM Farm Support?', anchor: 'models-supported' },
      { label: 'Is LLM Farm Available on iPhone, iPad, and Mac?', anchor: 'platform-availability' },
      { label: 'How Much Does LLM Farm Cost?', anchor: 'pricing' },
      { label: 'What Features Does LLM Farm Have?', anchor: 'key-features' },
      { label: 'LoRA Fine-Tuning and Merging on-device', anchor: 'lora-finetuning' },
      { label: 'What Hardware Do You Need?', anchor: 'hardware-requirements' },
      { label: 'Who Should Use LLM Farm', anchor: 'who-should-use' },
      { label: 'Who Should Not Use LLM Farm', anchor: 'who-should-not-use' },
      { label: 'LLM Farm vs. Alternatives', anchor: 'vs-alternatives' },
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
            text: 'LLM Farm is a free, open-source (MIT license) iOS and macOS app for running GGUF language models on-device, built by developer Artem Savkin, and it is currently off the App Store and TestFlight — the only way to get it today is to build it from source.',
          },
          {
            type: 'plain-terms',
            text: 'It is an app that would let you chat with an AI model running entirely on your iPhone or Mac, with no cloud server involved and the source code public — but you cannot currently download it from the App Store the normal way; you would have to compile it yourself using Apple\'s Xcode developer tool.',
          },
        ],
        items: [
          'Free and open source (MIT license); source code and issue tracker are public on [GitHub](https://github.com/guinmoon/LLMFarm).',
          'Built by developer Artem Savkin, working under the GitHub handle [guinmoon](https://github.com/guinmoon), first launched on the App Store in December 2023.',
          'Apple removed the App Store listing in August 2025; the project README still describes both App Store and TestFlight distribution as "temporarily unavailable."',
          'Runs GGUF models via its own ggml/llama.cpp-based engine across 16+ model architectures, including LLaMA, Gemma, Qwen, Phi, Mixtral, and DeepSeek.',
          'One of the few mobile local-AI apps with built-in on-device LoRA adapter loading, fine-tuning, and merging tools.',
          'iOS (16+) and macOS (13+) only — no Android, Windows, or Linux release.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the public [GitHub repository](https://github.com/guinmoon/LLMFarm) (README, wiki FAQ, license file, commit and release history) and Apple App Store listing status, checked in September 2026. PromptQuorum has not conducted independent hands-on testing of LLM Farm for this review — performance figures below are general local-LLM hardware guidance, not measurements specific to this app.',
          },
          {
            type: 'warning',
            text: 'At the time of this review, LLM Farm cannot be installed from the App Store or TestFlight. The App Store listing that previously existed at `apps.apple.com/app/llm-farm/id6461209867` no longer resolves. Anyone who wants to run this app must build it from source using Xcode, which requires a paid or free Apple developer account and comfort with iOS build tooling.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-farm',
        title: 'What Is LLM Farm?',
        content: [
          '**LLM Farm is a mobile and desktop app that downloads open-weight language models in the GGUF format and runs them locally on an iPhone, iPad, or Mac, using a Swift wrapper (the developer\'s own [llmfarm_core.swift](https://github.com/guinmoon/llmfarm_core.swift) library) around [ggml](https://github.com/ggerganov/ggml) and llama.cpp as the inference engine.** The app itself is [MIT-licensed](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE), meaning the full source code is public and free to inspect, fork, or modify.',
          'LLM Farm supports a wide range of model architectures beyond the common LLaMA-family models — the repository lists more than 16 supported architectures, including GPT-2, Starcoder, Falcon, MPT, Bloom, StableLM, and RWKV, alongside multimodal vision-language models such as LLaVA and Moondream. It also includes on-device LoRA loading, fine-tuning, and adapter-merging tools, a feature set closer to a local ML experimentation toolkit than a simple chat app.',
        ],
        note: 'GGUF is a file format for packaging quantized open-weight language models so they can run efficiently on consumer hardware via runtimes like llama.cpp and ggml, instead of calling a cloud API for every response.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Who Built LLM Farm?',
        content: [
          '**LLM Farm was created by developer Artem Savkin, who publishes under the GitHub username [guinmoon](https://github.com/guinmoon), and first appeared on the App Store on December 13, 2023.** The [LICENSE file in the repository](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) names Artem Savkin as the copyright holder, dated 2023.',
          'The project is maintained independently rather than by a funded company. The [GitHub repository](https://github.com/guinmoon/LLMFarm) was created in June 2023 and has accumulated over 2,000 stars and more than 180 forks at review time, with 46 open issues on its tracker. Development has continued intermittently since the App Store removal: commit history shows updates to the underlying llama.cpp engine as recently as December 2025 and a README update in January 2026, though the project\'s last tagged release (version 1.4.3) shipped in January 2025 — meaning code changes have continued without a new packaged release in more than a year as of this review.',
        ],
        items: [
          'Developer: Artem Savkin (GitHub: [guinmoon](https://github.com/guinmoon)), working independently rather than as a company.',
          'App Store launch: December 13, 2023. GitHub repository created: June 14, 2023.',
          'License: MIT — permissive open source, free to use, fork, and modify. Copyright holder per the LICENSE file: Artem Savkin, 2023.',
          'Over 2,000 GitHub stars and more than 180 forks at review time, with an active but unresolved issue tracker (46 open issues).',
          'Development pace: intermittent since 2025 — commits updating the llama.cpp dependency and documentation continued into early 2026, but no new tagged release has shipped since version 1.4.3 in January 2025.',
        ],
      },
      appStoreStatus: {
        id: 'app-store-status',
        title: 'Is LLM Farm Still on the App Store?',
        content: [
          '**No. As of this review, LLM Farm is not available for download from the Apple App Store, and its TestFlight beta channel is also closed.** The app was originally published on the App Store on December 13, 2023, and was removed by Apple around August 8, 2025, based on the project\'s release and commit history. The App Store listing that previously existed at `apps.apple.com/app/llm-farm/id6461209867` no longer resolves.',
          'The project\'s own [GitHub README](https://github.com/guinmoon/LLMFarm) states directly: "The app is temporarily unavailable in TestFlight and Appstore." PromptQuorum could not confirm the reason for the removal — the repository does not state one — and cannot confirm whether or when the app might return to either distribution channel. An older wiki FAQ page mentions the developer previously offering to build a manual `.ipa` file for users who emailed if TestFlight access was unavailable; this review could not confirm whether that offer is still honored, since the current README does not repeat it.',
        ],
        items: [
          'App Store status: delisted since approximately August 2025, per the project\'s own commit and release history.',
          'TestFlight status: closed, per the current GitHub README, as of this review.',
          'Reason for removal: not stated by the developer or by Apple in any source PromptQuorum could locate.',
          'Only confirmed current path to install the app: building it from source via Xcode, using the public GitHub repository.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get LLM Farm Today',
        content: [
          '**Because LLM Farm is not currently on the App Store, getting it running means building the open-source project from source code using Xcode — this is a materially higher bar than downloading an app.** The steps below follow the build instructions in the project\'s own [GitHub repository](https://github.com/guinmoon/LLMFarm).',
        ],
        numberedItems: [
          {
            title: 'Install Xcode and an Apple developer account',
            whyItMatters: 'You need a Mac with Xcode installed and a free or paid Apple developer account to compile and sign the app for your own device. This is the main barrier for non-developers.',
          },
          {
            title: 'Clone the repository recursively',
            whyItMatters: 'Run `git clone --recurse-submodules https://github.com/guinmoon/LLMFarm` — the `--recurse-submodules` flag is required because the underlying `llmfarm_core` inference library has been moved to a separate repository and is pulled in as a submodule.',
          },
          {
            title: 'Open the project in Xcode and build it for your device',
            whyItMatters: 'Open the Xcode project file, select your device or the Mac target, set your own developer signing team, and build. This produces an app you can run on your own hardware, but not one you can distribute to others through the App Store.',
          },
          {
            title: 'Download a GGUF model and load it',
            whyItMatters: 'Once the app is running, add a GGUF model file (from Hugging Face or another source) and load it from the app\'s model management screen, then start chatting entirely on-device.',
          },
        ],
        note: 'This process assumes basic familiarity with Xcode and iOS code signing. Users who are not comfortable building an app from source should consider a tap-to-install alternative such as PocketPal AI or Private LLM instead — see the alternatives section below.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Which Models Does LLM Farm Support?',
        itemHeadings: true,
        columns: ['Model family', 'Category', 'Notes'],
        rows: [
          {
            'Model family': 'LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek, Yi, StableLM',
            'Category': 'Text generation',
            'Notes': 'Loaded as GGUF files via the app\'s ggml/llama.cpp-based engine',
          },
          {
            'Model family': 'GPT-2, Starcoder, Falcon, MPT, Bloom, RWKV, Mamba, GPTNeoX, PLaMo',
            'Category': 'Text generation (legacy / niche architectures)',
            'Notes': 'Broader architecture coverage than most competing mobile apps',
          },
          {
            'Model family': 'LLaVA (1.5/1.6), BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL, Moondream',
            'Category': 'Multimodal (vision-language)',
            'Notes': 'Image-plus-text input support, per the project README',
          },
          {
            'Model family': 'Any other GGUF or GGJTv3 model',
            'Category': 'Custom import',
            'Notes': 'GGUF requires the `.gguf` extension; the older GGJTv3 format requires `.bin`, per the project wiki',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'Is LLM Farm Available on iPhone, iPad, and Mac?',
        itemHeadings: true,
        columns: ['Platform', 'Availability', 'Notes'],
        rows: [
          {
            'Platform': 'iPhone / iPad',
            'Availability': 'Requires building from source via Xcode — not installable from the App Store at review time',
            'Notes': 'Minimum iOS version 16, per the project README; Metal acceleration is used for on-device inference.',
          },
          {
            'Platform': 'Mac',
            'Availability': 'Requires building from source via Xcode',
            'Notes': 'Minimum macOS version 13, per the project README; native macOS support alongside iOS/iPadOS is listed in the same codebase.',
          },
          {
            'Platform': 'Android / Windows / Linux',
            'Availability': 'Not supported',
            'Notes': 'LLM Farm has no Android, Windows, or Linux release. Android users should look at RikkaHub, ChatterUI, or Maid instead.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'How Much Does LLM Farm Cost?',
        content: [
          '**LLM Farm itself is free and open source under the MIT license — there is no purchase price and no subscription for the app\'s code or its chat functionality.** PromptQuorum could not find any evidence of an in-app purchase, premium tier, or paid marketplace inside LLM Farm in the repository, wiki, or historical App Store listing text reviewed for this article.',
          'The real cost of using LLM Farm today is indirect: you need a Mac to build the app (Xcode is macOS-only), and depending on your Apple developer account type, either nothing (free personal-team signing, limited to your own devices for a rolling seven-day certificate) or the [Apple Developer Program](https://developer.apple.com/programs/) fee if you want a longer-lived signing certificate. Beyond that, downloaded GGUF model files consume device storage, typically several gigabytes per model, the same as with any other local-LLM app.',
        ],
        items: [
          '**App itself:** Free, MIT-licensed open source — no purchase price found for the code or its functionality.',
          '**In-app purchases:** None found in the sources reviewed for this article.',
          '**Build tooling:** Xcode is free, but requires a Mac; a free Apple ID can sign builds for personal use with a certificate that must be renewed roughly every seven days, or a paid Apple Developer Program membership avoids that renewal cycle.',
          '**Storage cost:** Not monetary, but real — each downloaded GGUF model file consumes device storage, typically several gigabytes per model.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'What Features Does LLM Farm Have?',
        content: [
          '**Beyond running GGUF models locally, LLM Farm\'s feature set leans toward a local ML experimentation toolkit rather than a simple chat client, per its GitHub README and wiki.** These include:',
        ],
        items: [
          '**Broad architecture support.** More than 16 model architectures, including several (Starcoder, Falcon, MPT, Bloom, RWKV, GPTNeoX) not commonly supported by other mobile local-AI apps.',
          '**Multimodal (vision-language) models.** Support for LLaVA, BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL, and Moondream lets the app process image-plus-text prompts, per the README.',
          '**Multiple sampling methods.** Temperature, Tail-Free Sampling (TFS), Locally Typical Sampling, Mirostat, Greedy, and Grammar-constrained sampling are all listed as supported options.',
          '**Grammar-constrained output.** Grammar sampling lets a model\'s output be constrained to a defined structure (such as valid JSON), useful for structured-output use cases.',
          '**Model setting templates and context restoration.** Saved configurations per model, and the ability to restore a conversation\'s context state rather than reprocessing it from scratch.',
          '**Apple Shortcuts integration.** The app can be triggered from Apple\'s Shortcuts automation app, per the README.',
          '**Basic retrieval-augmented generation (RAG).** The README lists RAG capability, though the project\'s documentation does not detail its exact retrieval method or supported document formats in the material reviewed for this article.',
        ],
        note: 'Feature availability can change between builds, and because the app cannot currently be installed from the App Store, the version you build from source may not match every feature described in older App Store listing text. Check the [GitHub repository](https://github.com/guinmoon/LLMFarm) and its commit history for what is present in the current source.',
      },
      loraFinetuning: {
        id: 'lora-finetuning',
        title: 'LoRA Fine-Tuning and Merging On-Device',
        content: [
          '**LLM Farm includes on-device LoRA (Low-Rank Adaptation) tooling — loading adapters, fine-tuning a base model, and merging a trained adapter back into the base model — a combination most mobile local-AI apps do not offer at all.** Per the project\'s [wiki documentation](https://github.com/guinmoon/LLMFarm/wiki/lora):',
          'LoRA adapters can be loaded by placing adapter files in a `lora_adapters` directory, either as a single adapter through the chat settings interface or as multiple adapters configured with individual scale parameters in a configuration file. Fine-tuning is available directly in the app under Settings > FineTune, though the wiki notes this is resource-intensive on mobile hardware — on iOS, the documentation states it is limited to roughly 3B-parameter models using minimal settings. A separate Settings > Merge Lora function lets a trained adapter be merged with its base model and exported, with the wiki recommending Q4_K quantization or smaller for practical iOS performance.',
        ],
        items: [
          'Load one or multiple LoRA adapters, each with its own configurable scale parameter.',
          'Fine-tune a base model on-device via Settings > FineTune — per the wiki, iOS practically supports only around 3B-parameter models at minimal settings for this.',
          'Merge a trained LoRA adapter into its base model and export the result via Settings > Merge Lora.',
          'Trade-off: the wiki states that memory-mapped file loading (mmap) cannot be used while a LoRA adapter is attached, which increases RAM usage compared to running the base model alone.',
        ],
        note: 'This review did not independently fine-tune a model in LLM Farm to verify training speed or output quality — the description above summarizes what the project\'s own documentation states the feature does, not a PromptQuorum benchmark.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'What Hardware Do You Need to Run LLM Farm?',
        content: [
          '**The model you choose, not the app itself, sets your real hardware floor — as general local-LLM sizing guidance, a quantized 2–4B parameter model needs roughly 3–4 GB of free RAM, while a 7–8B parameter model needs 8 GB or more.** This is standard GGUF hardware guidance, not an LLM Farm-specific benchmark; PromptQuorum has not independently measured LLM Farm\'s exact memory usage per model.',
          'On iPhone, iPad, and Mac, LLM Farm uses Metal acceleration for inference, which generally improves speed over CPU-only execution on Apple Silicon hardware. The app requires iOS 16 or macOS 13 as a minimum, per the project README, so older devices that cannot run those OS versions cannot run the app regardless of RAM.',
        ],
        items: [
          'Small models (2–4B parameters, quantized): usable on most recent iPhones and Macs with 4 GB+ of free RAM.',
          'Mid-size models (7–8B parameters, quantized): 8 GB or more of device RAM recommended for acceptable responsiveness.',
          'LoRA fine-tuning specifically: per the project wiki, practically limited to roughly 3B-parameter models on iOS, using minimal settings, due to on-device compute and memory limits.',
          'Minimum OS: iOS 16 or macOS 13, per the GitHub README.',
          'Storage: budget several gigabytes of free device storage per downloaded GGUF model file.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use LLM Farm',
        items: [
          '**Developers comfortable building an app from source in Xcode.** Since the App Store and TestFlight routes are currently closed, this is a hard requirement, not a nice-to-have.',
          '**Users who specifically want on-device LoRA fine-tuning or adapter merging.** This is a feature set most competing mobile local-AI apps do not offer at all.',
          '**Users who want the broadest range of supported model architectures on a mobile device.** Sixteen-plus architectures, including several niche ones (RWKV, Mamba, GPTNeoX), is unusually broad for a phone app.',
          '**Users who want to inspect or modify the code themselves.** The MIT license permits forking and modification, and the codebase is a useful reference for understanding a Swift-based llama.cpp/ggml wrapper.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use LLM Farm',
        items: [
          '**Anyone who cannot or does not want to build an iOS/macOS app from source.** This is the single biggest reason to skip LLM Farm right now: there is no App Store install, and no confirmed TestFlight access, as of this review.',
          '**Users who need Android, Windows, or Linux support.** LLM Farm is Apple-only; Android users should look at RikkaHub, ChatterUI, or Maid, and desktop non-Mac users should look at Ollama, LM Studio, or Jan AI.',
          '**Users who want a guaranteed, currently-installable app today.** PocketPal AI and Private LLM are both installable from the App Store right now without building anything.',
          '**Users who expect frequent, versioned releases.** The project\'s last tagged release shipped in January 2025; while commits have continued intermittently since, there has been no new packaged version in more than a year as of this review.',
          '**Users who need guaranteed support or a defined roadmap.** LLM Farm is maintained independently by one developer, per its repository history, with no stated commitment to restoring App Store availability.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'LLM Farm vs. Alternatives',
        itemHeadings: true,
        columns: ['App', 'License / cost', 'Platforms', 'Current install path'],
        rows: [
          {
            'App': 'LLM Farm',
            'License / cost': 'Free, open source (MIT)',
            'Platforms': 'iPhone/iPad, Mac',
            'Current install path': 'Build from source via Xcode only — App Store and TestFlight are closed',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'License / cost': 'Free, open source (MIT)',
            'Platforms': 'iPhone/iPad, Android',
            'Current install path': 'App Store and Google Play, tap-to-install',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'License / cost': 'Paid, one-time purchase; closed source',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Current install path': 'App Store, tap-to-install',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'License / cost': 'Free with paid tier; closed source',
            'Platforms': 'iPhone/iPad/Mac (Apple only)',
            'Current install path': 'App Store, tap-to-install',
          },
          {
            'App': 'Layla',
            'License / cost': 'Free and paid tiers; closed source',
            'Platforms': 'Android and iOS, per [layla-network.ai](https://www.layla-network.ai)',
            'Current install path': 'Check [layla-network.ai](https://www.layla-network.ai) for current store availability before assuming a free tier exists',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'License / cost': 'Free, open source',
            'Platforms': 'Android',
            'Current install path': 'Google Play or build from source',
          },
          {
            'App': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'License / cost': 'Free, open source (AGPL-3.0)',
            'Platforms': 'Android',
            'Current install path': 'Build from source or sideload a release APK',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'License / cost': 'Free, open source',
            'Platforms': 'Android',
            'Current install path': 'GitHub releases or build from source',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'License / cost': 'Free, open source',
            'Platforms': 'Android; iOS not yet available at review time',
            'Current install path': 'Google Play or the AnythingLLM Mobile site',
          },
        ],
        note: 'Availability status changes frequently in this category — this table reflects what PromptQuorum could confirm in September 2026. Check each project\'s own page before assuming a link is still current.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is LLM Farm still available?',
            a: 'The open-source project is still active on GitHub, but the app is not currently installable from the App Store or TestFlight. Apple removed the App Store listing around August 2025, and the project\'s README still describes both channels as "temporarily unavailable" as of this review. The only current way to run it is to build it from source using Xcode.',
          },
          {
            q: 'Why was LLM Farm removed from the App Store?',
            a: 'PromptQuorum could not find a stated reason from the developer or Apple in any source reviewed for this article. The project\'s GitHub README acknowledges the removal without explaining its cause.',
          },
          {
            q: 'Is LLM Farm free?',
            a: 'Yes. LLM Farm is free and open source under the MIT license, and PromptQuorum found no evidence of an in-app purchase or paid tier in the sources reviewed. The practical cost is a Mac and Xcode to build it, plus an Apple developer account.',
          },
          {
            q: 'Who developed LLM Farm?',
            a: 'LLM Farm was created by developer Artem Savkin, who publishes under the GitHub username [guinmoon](https://github.com/guinmoon). It is maintained independently rather than by a company.',
          },
          {
            q: 'Is LLM Farm open source?',
            a: 'Yes, the full source code is published on [GitHub](https://github.com/guinmoon/LLMFarm) under the MIT license, a permissive license that allows free use, modification, and redistribution.',
          },
          {
            q: 'Can LLM Farm fine-tune models with LoRA?',
            a: 'Yes, per the project\'s wiki documentation. LLM Farm supports loading LoRA adapters, fine-tuning a base model on-device (limited to roughly 3B-parameter models on iOS per the wiki), and merging a trained adapter back into the base model. This is a feature most competing mobile local-AI apps do not offer.',
          },
          {
            q: 'Does LLM Farm work on Android?',
            a: 'No. LLM Farm supports only iOS (16+) and macOS (13+), per its GitHub README. Android users should look at RikkaHub, ChatterUI, or Maid instead.',
          },
          {
            q: 'How do I install LLM Farm without the App Store?',
            a: 'Clone the [GitHub repository](https://github.com/guinmoon/LLMFarm) recursively with `git clone --recurse-submodules`, open the project in Xcode, sign it with your own Apple developer account, and build it for your device. This requires a Mac and basic familiarity with Xcode and iOS code signing.',
          },
          {
            q: 'How does LLM Farm compare to PocketPal AI or Private LLM?',
            a: 'LLM Farm and PocketPal AI are both free and MIT-licensed, but LLM Farm currently requires building from source while PocketPal AI installs directly from the App Store and Google Play. LLM Farm supports more model architectures and includes on-device LoRA fine-tuning, which neither PocketPal AI nor the paid, closed-source Private LLM offers. Choose LLM Farm only if you are comfortable building an app yourself; choose PocketPal AI or Private LLM if you want something installable today. See the comparison table above for details.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LLM Farm remains one of the most technically capable open-source local-AI projects for Apple devices — its architecture coverage and on-device LoRA fine-tuning and merging tools go further than most mobile apps in this category, PocketPal AI and Private LLM included. But as of this review, it is not an app most people can actually install: Apple removed it from the App Store in August 2025, TestFlight access is closed per the project\'s own README, and the only confirmed path to running it is compiling the open-source code yourself in Xcode. That is a reasonable trade for a developer who wants to inspect the code, experiment with LoRA fine-tuning, or run an unusual model architecture. It is not a reasonable ask for someone who just wants to download an app and chat privately today — for that, PocketPal AI (free, open source, tap-to-install) or Private LLM (paid, polished, tap-to-install) are the practical choices covered in the alternatives section above.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LLM Farm on GitHub](https://github.com/guinmoon/LLMFarm) — source code, license (MIT), README, commit history, and star/fork counts referenced in this review.',
          '[LLM Farm LICENSE file](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) — MIT license text and copyright holder (Artem Savkin, 2023).',
          '[LLM Farm wiki: FAQ](https://github.com/guinmoon/LLMFarm/wiki/FAQ) — installation notes and supported file format details.',
          '[LLM Farm wiki: LoRA](https://github.com/guinmoon/LLMFarm/wiki/lora) — LoRA loading, fine-tuning, and merging documentation.',
          '[llmfarm_core.swift on GitHub](https://github.com/guinmoon/llmfarm_core.swift) — the underlying inference library referenced in this review.',
          '[GitHub release history for guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm/releases) — last tagged release (1.4.3, January 2025) referenced in this review.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the iOS roundup, comparing installable alternatives to LLM Farm.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source, tap-to-install alternative for iPhone, iPad, and Android.',
          '[Private LLM Review](/power-local-llm/private-llm-review) — a paid, closed-source, Apple-only alternative with a large curated model catalog.',
          '[Enclave AI Review](/power-local-llm/enclave-ai-review) — an Apple-only alternative with Siri and Shortcuts automation.',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — a paid, closed-source, five-platform alternative with a curated model library.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Farm Review (2026): Open-Source GGUF App, Off the App Store',
      description:
        'LLM Farm review: the open-source, MIT-licensed iOS/macOS GGUF app with on-device LoRA fine-tuning. Currently off the App Store — what that means and how to build it.',
      url: 'https://promptquorum.com/power-local-llm/llm-farm-review',
      inLanguage: 'en',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: 'Technically comfortable iOS and macOS users evaluating open-source local AI apps' },
      about: [
        { '@type': 'Thing', name: 'LLM Farm' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'LoRA fine-tuning' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llm-farm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLM Farm Review (2026)', item: 'https://promptquorum.com/power-local-llm/llm-farm-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-farm-review-hero-de.webp',
    title: 'LLM Farm im Test (2026): Open-Source-GGUF-App, nicht mehr im App Store',
    seoTitle: 'LLM Farm Test 2026: Open-Source iOS GGUF Runtime',
    intro:
      'LLM Farm ist eine kostenlose, unter der MIT-Lizenz quelloffene App für iOS und macOS, die GGUF-Sprachmodelle direkt auf dem Gerät ausführt — über einen Swift-Wrapper rund um [ggml](https://github.com/ggerganov/ggml) und llama.cpp. Entwickelt wurde sie von Artem Savkin (GitHub-Nutzername [guinmoon](https://github.com/guinmoon)), der die App im Dezember 2023 erstmals im App Store veröffentlichte. Zum Zeitpunkt dieses Tests lässt sich LLM Farm weder aus dem App Store noch über TestFlight installieren — Apple entfernte den Eintrag im August 2025, und das [GitHub-README](https://github.com/guinmoon/LLMFarm) des Projekts beschreibt die App weiterhin als „vorübergehend nicht verfügbar" in beiden Kanälen. Dieser Test beschreibt, was die App leistet, ihre LoRA-Finetuning- und Merge-Werkzeuge (eine Funktion, die den meisten mobilen Local-AI-Apps fehlt), wie man sie heute aus dem Quellcode baut — und vor allem, warum sie für alle ungeeignet ist, die keine eigene iOS-App kompilieren möchten.',
    metaDescription:
      'LLM Farm im Test: die quelloffene, MIT-lizenzierte iOS/macOS-GGUF-App mit LoRA-Finetuning auf dem Gerät. Derzeit nicht im App Store — was das bedeutet und wie man sie baut.',
    twitterDescription:
      'LLM Farm Test 2026: die quelloffene iOS/macOS-GGUF-Runtime mit LoRA-Werkzeugen auf dem Gerät — derzeit aus dem App Store entfernt, nur per Quellcode baubar.',
    audience:
      'Technisch versierte iOS- und macOS-Nutzer, die eine quelloffene GGUF-Runtime mit LoRA-Finetuning wollen und bereit sind, die App selbst aus dem Quellcode zu bauen.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'LLM Farm Test',
    targetKeywords: [
      'llm farm test',
      'llmfarm ios',
      'llm farm app store',
      'llm farm guinmoon',
      'llm farm lora',
      'gguf modelle auf dem iphone ausführen',
      'open source ios ki app',
      'llm farm alternative',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'Phi', 'LLaMA', 'Mixtral', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**LLM Farm ist eine kostenlose, quelloffene (MIT-Lizenz) iOS- und macOS-App, die GGUF-Sprachmodelle vollständig auf dem Gerät ausführt — sie lässt sich aktuell weder über den App Store noch über TestFlight installieren.** Entwickelt von Artem Savkin ([guinmoon](https://github.com/guinmoon) auf GitHub) und erstmals im Dezember 2023 veröffentlicht, hat das [GitHub-Repository](https://github.com/guinmoon/LLMFarm) über 2.000 Sterne und mehr als 180 Forks. Apple entfernte den App-Store-Eintrag im August 2025, und das README beschreibt beide Vertriebswege — App Store und TestFlight — zum Zeitpunkt dieses Tests weiterhin als „vorübergehend nicht verfügbar". Der Quellcode bleibt öffentlich und MIT-lizenziert, sodass sich die App per Xcode kompilieren und installieren lässt — dafür braucht es jedoch einen Apple-Entwickler-Account und Erfahrung im Bauen von iOS-Apps aus dem Quellcode. Für die meisten Nutzer ist dies keine App mehr zum Antippen und Installieren.',
    quickAnswerTop: {
      de: {
        question: 'Kann ich LLM Farm noch installieren, und lohnt sich das?',
        answer:
          'Nicht über den App Store — Apple entfernte den Eintrag im August 2025, und das GitHub-README des Projekts listet App Store und TestFlight weiterhin als „vorübergehend nicht verfügbar". Der einzige aktuelle Weg ist, die quelloffene App selbst mit Xcode aus dem Quellcode zu bauen, wofür ein Apple-Entwickler-Account und grundlegende Erfahrung mit iOS-Builds nötig sind. Wer das kann, bekommt mit LLM Farm eine der wenigen mobilen Apps mit echtem LoRA-Finetuning und Merge-Werkzeugen; wer das nicht kann, findet mit PocketPal AI oder Private LLM Alternativen, die sich heute tatsächlich direkt installieren lassen.',
        bullets: [
          'Kostenlos und quelloffen unter der MIT-Lizenz, entwickelt von Artem Savkin ([guinmoon](https://github.com/guinmoon/LLMFarm) auf GitHub).',
          'Aktuell nicht über App Store oder TestFlight installierbar — Apple hat die App im August 2025 aus dem Store entfernt; das GitHub-README bestätigt den Status „vorübergehend nicht verfügbar" zum Zeitpunkt dieses Tests.',
          'Der einzige aktuelle Installationsweg ist der Eigenbau per Xcode, wofür ein Apple-Entwickler-Account nötig ist.',
          'Unterstützt das Laden, Finetuning und Zusammenführen von LoRA-Adaptern direkt auf dem Gerät — eine Funktion, die den meisten konkurrierenden Apps fehlt.',
          'Führt GGUF-Modelle über mehr als 16 Architekturen aus (LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek und weitere) mit einer eigenen ggml/llama.cpp-basierten Engine.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist LLM Farm?', anchor: 'what-is-llm-farm' },
      { label: 'Wer hat LLM Farm entwickelt?', anchor: 'history-and-developer' },
      { label: 'Ist LLM Farm noch im App Store?', anchor: 'app-store-status' },
      { label: 'So bekommen Sie LLM Farm heute', anchor: 'getting-started' },
      { label: 'Welche Modelle unterstützt LLM Farm?', anchor: 'models-supported' },
      { label: 'Ist LLM Farm für iPhone, iPad und Mac verfügbar?', anchor: 'platform-availability' },
      { label: 'Was kostet LLM Farm?', anchor: 'pricing' },
      { label: 'Welche Funktionen bietet LLM Farm?', anchor: 'key-features' },
      { label: 'LoRA-Finetuning und Merging auf dem Gerät', anchor: 'lora-finetuning' },
      { label: 'Welche Hardware brauchen Sie?', anchor: 'hardware-requirements' },
      { label: 'Für wen sich LLM Farm eignet', anchor: 'who-should-use' },
      { label: 'Für wen sich LLM Farm nicht eignet', anchor: 'who-should-not-use' },
      { label: 'LLM Farm im Vergleich zu Alternativen', anchor: 'vs-alternatives' },
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
            text: 'LLM Farm ist eine kostenlose, quelloffene (MIT-Lizenz) iOS- und macOS-App zum lokalen Ausführen von GGUF-Sprachmodellen, entwickelt von Artem Savkin — sie ist aktuell weder im App Store noch bei TestFlight verfügbar; der einzige Weg ist der Eigenbau aus dem Quellcode.',
          },
          {
            type: 'plain-terms',
            text: 'Es handelt sich um eine App, mit der man mit einem KI-Modell chatten könnte, das vollständig auf dem eigenen iPhone oder Mac läuft, ohne Cloud-Server und mit offenem Quellcode — allerdings lässt sie sich derzeit nicht auf normalem Weg aus dem App Store laden; man müsste sie selbst mit Apples Entwicklertool Xcode kompilieren.',
          },
        ],
        items: [
          'Kostenlos und quelloffen (MIT-Lizenz); Quellcode und Issue-Tracker sind öffentlich auf [GitHub](https://github.com/guinmoon/LLMFarm).',
          'Entwickelt von Artem Savkin, der unter dem GitHub-Namen [guinmoon](https://github.com/guinmoon) veröffentlicht — erstmals im Dezember 2023 im App Store erschienen.',
          'Apple entfernte den App-Store-Eintrag im August 2025; das Projekt-README beschreibt sowohl App Store als auch TestFlight weiterhin als „vorübergehend nicht verfügbar".',
          'Führt GGUF-Modelle über eine eigene ggml/llama.cpp-basierte Engine auf mehr als 16 Modellarchitekturen aus, darunter LLaMA, Gemma, Qwen, Phi, Mixtral und DeepSeek.',
          'Eine der wenigen mobilen Local-AI-Apps mit integriertem Laden, Finetuning und Zusammenführen von LoRA-Adaptern direkt auf dem Gerät.',
          'Nur iOS (16+) und macOS (13+) — kein Android, Windows oder Linux.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dieser Test basiert auf dem öffentlichen [GitHub-Repository](https://github.com/guinmoon/LLMFarm) (README, Wiki-FAQ, Lizenzdatei, Commit- und Release-Historie) sowie dem Status im Apple App Store, geprüft im September 2026. PromptQuorum hat für diesen Test keine eigenen praktischen Tests mit LLM Farm durchgeführt — die Hardware-Angaben unten sind allgemeine Richtwerte für lokale LLMs, keine app-spezifischen Messungen.',
          },
          {
            type: 'warning',
            text: 'Zum Zeitpunkt dieses Tests lässt sich LLM Farm weder aus dem App Store noch über TestFlight installieren. Der frühere App-Store-Eintrag unter `apps.apple.com/app/llm-farm/id6461209867` ist nicht mehr erreichbar. Wer die App nutzen möchte, muss sie selbst mit Xcode aus dem Quellcode bauen — dafür ist ein kostenloser oder kostenpflichtiger Apple-Entwickler-Account sowie Erfahrung mit iOS-Build-Tools nötig.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-farm',
        title: 'Was ist LLM Farm?',
        content: [
          '**LLM Farm ist eine Mobil- und Desktop-App, die offene Sprachmodelle im GGUF-Format herunterlädt und lokal auf iPhone, iPad oder Mac ausführt — über einen Swift-Wrapper (die eigene Bibliothek des Entwicklers, [llmfarm_core.swift](https://github.com/guinmoon/llmfarm_core.swift)) rund um [ggml](https://github.com/ggerganov/ggml) und llama.cpp als Inferenz-Engine.** Die App selbst ist [MIT-lizenziert](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE), der vollständige Quellcode ist also öffentlich einsehbar, forkbar und veränderbar.',
          'LLM Farm unterstützt eine breite Palette an Modellarchitekturen jenseits der gängigen LLaMA-Familie — das Repository listet mehr als 16 unterstützte Architekturen, darunter GPT-2, Starcoder, Falcon, MPT, Bloom, StableLM und RWKV, sowie multimodale Vision-Language-Modelle wie LLaVA und Moondream. Hinzu kommen Werkzeuge zum Laden, Finetuning und Zusammenführen von LoRA-Adaptern direkt auf dem Gerät — ein Funktionsumfang, der eher an ein lokales ML-Experimentierwerkzeug als an eine einfache Chat-App erinnert.',
        ],
        note: 'GGUF ist ein Dateiformat zum Verpacken quantisierter, offener Sprachmodelle, damit sie über Runtimes wie llama.cpp und ggml effizient auf Endgeräten laufen — statt für jede Antwort eine Cloud-API aufzurufen.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Wer hat LLM Farm entwickelt?',
        content: [
          '**LLM Farm wurde von Artem Savkin entwickelt, der unter dem GitHub-Namen [guinmoon](https://github.com/guinmoon) veröffentlicht, und erschien erstmals am 13. Dezember 2023 im App Store.** Die [Lizenzdatei im Repository](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) nennt Artem Savkin als Urheberrechtsinhaber, datiert auf 2023.',
          'Das Projekt wird unabhängig gepflegt, nicht von einem finanzierten Unternehmen. Das [GitHub-Repository](https://github.com/guinmoon/LLMFarm) wurde im Juni 2023 angelegt und hat zum Zeitpunkt dieses Tests über 2.000 Sterne und mehr als 180 Forks gesammelt, bei 46 offenen Issues im Tracker. Die Entwicklung ging seit der Entfernung aus dem App Store unregelmäßig weiter: Die Commit-Historie zeigt Aktualisierungen der zugrunde liegenden llama.cpp-Engine bis Dezember 2025 sowie ein README-Update im Januar 2026 — der letzte getaggte Release (Version 1.4.3) erschien jedoch im Januar 2025, sodass seit über einem Jahr Code-Änderungen ohne neues gepacktes Release erfolgen.',
        ],
        items: [
          'Entwickler: Artem Savkin (GitHub: [guinmoon](https://github.com/guinmoon)), arbeitet unabhängig statt als Unternehmen.',
          'App-Store-Start: 13. Dezember 2023. GitHub-Repository angelegt: 14. Juni 2023.',
          'Lizenz: MIT — permissive Open-Source-Lizenz, frei nutzbar, forkbar und veränderbar. Urheberrechtsinhaber laut Lizenzdatei: Artem Savkin, 2023.',
          'Über 2.000 GitHub-Sterne und mehr als 180 Forks zum Zeitpunkt dieses Tests, bei einem aktiven, aber unbearbeiteten Issue-Tracker (46 offene Issues).',
          'Entwicklungstempo: seit 2025 unregelmäßig — Commits zur Aktualisierung der llama.cpp-Abhängigkeit und der Dokumentation liefen bis Anfang 2026 weiter, aber seit Version 1.4.3 im Januar 2025 erschien kein neuer getaggter Release.',
        ],
      },
      appStoreStatus: {
        id: 'app-store-status',
        title: 'Ist LLM Farm noch im App Store?',
        content: [
          '**Nein. Zum Zeitpunkt dieses Tests lässt sich LLM Farm nicht aus dem Apple App Store herunterladen, und auch der TestFlight-Beta-Kanal ist geschlossen.** Die App wurde ursprünglich am 13. Dezember 2023 im App Store veröffentlicht und laut Release- und Commit-Historie des Projekts um den 8. August 2025 von Apple entfernt. Der frühere App-Store-Eintrag unter `apps.apple.com/app/llm-farm/id6461209867` ist nicht mehr erreichbar.',
          'Das [GitHub-README](https://github.com/guinmoon/LLMFarm) des Projekts erklärt direkt: „The app is temporarily unavailable in TestFlight and Appstore" (Die App ist vorübergehend nicht in TestFlight und im App Store verfügbar). PromptQuorum konnte den Grund für die Entfernung nicht ermitteln — das Repository nennt keinen — und kann nicht bestätigen, ob oder wann die App in einen der beiden Vertriebswege zurückkehren könnte. Eine ältere Wiki-FAQ-Seite erwähnt, dass der Entwickler früher angeboten hat, Nutzern per E-Mail eine manuelle `.ipa`-Datei zu bauen, falls TestFlight nicht zugänglich war; dieser Test konnte nicht bestätigen, ob dieses Angebot noch gilt, da das aktuelle README es nicht wiederholt.',
        ],
        items: [
          'App-Store-Status: laut Commit- und Release-Historie des Projekts seit etwa August 2025 entfernt.',
          'TestFlight-Status: laut aktuellem GitHub-README zum Zeitpunkt dieses Tests geschlossen.',
          'Grund für die Entfernung: weder vom Entwickler noch von Apple in einer für PromptQuorum auffindbaren Quelle genannt.',
          'Einziger bestätigter aktueller Weg zur Installation: Eigenbau aus dem Quellcode per Xcode über das öffentliche GitHub-Repository.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So bekommen Sie LLM Farm heute',
        content: [
          '**Da LLM Farm aktuell nicht im App Store verfügbar ist, bedeutet die Nutzung, das quelloffene Projekt selbst mit Xcode aus dem Quellcode zu bauen — eine deutlich höhere Hürde als das Herunterladen einer App.** Die folgenden Schritte folgen der Bauanleitung im [GitHub-Repository](https://github.com/guinmoon/LLMFarm) des Projekts.',
        ],
        numberedItems: [
          {
            title: 'Xcode und einen Apple-Entwickler-Account installieren',
            whyItMatters: 'Sie brauchen einen Mac mit installiertem Xcode sowie einen kostenlosen oder kostenpflichtigen Apple-Entwickler-Account, um die App zu kompilieren und für Ihr eigenes Gerät zu signieren. Das ist die größte Hürde für Nicht-Entwickler.',
          },
          {
            title: 'Repository rekursiv klonen',
            whyItMatters: 'Führen Sie `git clone --recurse-submodules https://github.com/guinmoon/LLMFarm` aus — die Option `--recurse-submodules` ist erforderlich, da die zugrunde liegende Inferenz-Bibliothek `llmfarm_core` in ein separates Repository ausgelagert wurde und als Submodul eingebunden wird.',
          },
          {
            title: 'Projekt in Xcode öffnen und für Ihr Gerät bauen',
            whyItMatters: 'Öffnen Sie die Xcode-Projektdatei, wählen Sie Ihr Gerät oder das Mac-Ziel aus, hinterlegen Sie Ihr eigenes Entwickler-Signierteam und bauen Sie das Projekt. So erhalten Sie eine App, die auf Ihrer eigenen Hardware läuft — jedoch keine, die Sie über den App Store an andere weitergeben können.',
          },
          {
            title: 'GGUF-Modell herunterladen und laden',
            whyItMatters: 'Sobald die App läuft, fügen Sie eine GGUF-Modelldatei (von Hugging Face oder einer anderen Quelle) hinzu und laden sie über die Modellverwaltung der App — danach läuft der Chat vollständig auf dem Gerät.',
          },
        ],
        note: 'Dieser Ablauf setzt Grundkenntnisse in Xcode und iOS-Code-Signierung voraus. Nutzer, die keine App aus dem Quellcode bauen möchten, sollten stattdessen eine direkt installierbare Alternative wie PocketPal AI oder Private LLM in Betracht ziehen — siehe den Abschnitt zu Alternativen unten.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Welche Modelle unterstützt LLM Farm?',
        itemHeadings: true,
        columns: ['Modellfamilie', 'Kategorie', 'Hinweise'],
        rows: [
          {
            'Modellfamilie': 'LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek, Yi, StableLM',
            'Kategorie': 'Textgenerierung',
            'Hinweise': 'Wird als GGUF-Datei über die ggml/llama.cpp-basierte Engine der App geladen',
          },
          {
            'Modellfamilie': 'GPT-2, Starcoder, Falcon, MPT, Bloom, RWKV, Mamba, GPTNeoX, PLaMo',
            'Kategorie': 'Textgenerierung (ältere / Nischen-Architekturen)',
            'Hinweise': 'Breitere Architekturabdeckung als die meisten konkurrierenden Mobil-Apps',
          },
          {
            'Modellfamilie': 'LLaVA (1.5/1.6), BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL, Moondream',
            'Kategorie': 'Multimodal (Vision-Language)',
            'Hinweise': 'Unterstützung für Bild-plus-Text-Eingaben laut Projekt-README',
          },
          {
            'Modellfamilie': 'Jedes andere GGUF- oder GGJTv3-Modell',
            'Kategorie': 'Individueller Import',
            'Hinweise': 'GGUF erfordert die Endung `.gguf`, das ältere GGJTv3-Format die Endung `.bin`, laut Projekt-Wiki',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'Ist LLM Farm für iPhone, iPad und Mac verfügbar?',
        itemHeadings: true,
        columns: ['Plattform', 'Verfügbarkeit', 'Hinweise'],
        rows: [
          {
            'Plattform': 'iPhone / iPad',
            'Verfügbarkeit': 'Erfordert Eigenbau per Xcode — zum Zeitpunkt dieses Tests nicht im App Store installierbar',
            'Hinweise': 'Mindestens iOS 16 laut Projekt-README; für die Inferenz auf dem Gerät wird Metal-Beschleunigung genutzt.',
          },
          {
            'Plattform': 'Mac',
            'Verfügbarkeit': 'Erfordert Eigenbau per Xcode',
            'Hinweise': 'Mindestens macOS 13 laut Projekt-README; native macOS-Unterstützung neben iOS/iPadOS ist in derselben Codebasis vorhanden.',
          },
          {
            'Plattform': 'Android / Windows / Linux',
            'Verfügbarkeit': 'Nicht unterstützt',
            'Hinweise': 'LLM Farm gibt es nicht für Android, Windows oder Linux. Android-Nutzer sollten stattdessen RikkaHub, ChatterUI oder Maid in Betracht ziehen.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Was kostet LLM Farm?',
        content: [
          '**LLM Farm selbst ist kostenlos und quelloffen unter der MIT-Lizenz — es gibt keinen Kaufpreis und kein Abo für den Code oder die Chat-Funktion der App.** PromptQuorum konnte in Repository, Wiki oder dem archivierten App-Store-Text weder einen In-App-Kauf noch eine Premium-Stufe oder einen kostenpflichtigen Marktplatz innerhalb von LLM Farm finden.',
          'Die eigentlichen Kosten für die Nutzung von LLM Farm heute sind indirekt: Sie brauchen einen Mac, um die App zu bauen (Xcode gibt es nur für macOS), und je nach Art Ihres Apple-Entwickler-Accounts entweder gar keine Kosten (kostenloses Personal-Team-Signieren, beschränkt auf eigene Geräte mit einem alle sieben Tage ablaufenden Zertifikat) oder die Gebühr des [Apple Developer Program](https://developer.apple.com/programs/) für ein länger gültiges Signierzertifikat. Darüber hinaus belegen heruntergeladene GGUF-Modelldateien Speicherplatz — typischerweise mehrere Gigabyte pro Modell, wie bei jeder anderen lokalen LLM-App auch.',
        ],
        items: [
          '**Die App selbst:** Kostenlos, MIT-lizenzierte Open-Source-Software — kein Kaufpreis für Code oder Funktionen gefunden.',
          '**In-App-Käufe:** In den für diesen Artikel geprüften Quellen keine gefunden.',
          '**Build-Werkzeuge:** Xcode ist kostenlos, erfordert aber einen Mac; eine kostenlose Apple-ID kann Builds für den persönlichen Gebrauch mit einem Zertifikat signieren, das etwa alle sieben Tage erneuert werden muss — eine kostenpflichtige Apple-Developer-Program-Mitgliedschaft vermeidet diesen Zyklus.',
          '**Speicherkosten:** Nicht monetär, aber real — jede heruntergeladene GGUF-Modelldatei belegt Speicherplatz, typischerweise mehrere Gigabyte pro Modell.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Welche Funktionen bietet LLM Farm?',
        content: [
          '**Über das lokale Ausführen von GGUF-Modellen hinaus ist der Funktionsumfang von LLM Farm laut GitHub-README und Wiki eher der eines lokalen ML-Experimentierwerkzeugs als der eines einfachen Chat-Clients.** Dazu zählen:',
        ],
        items: [
          '**Breite Architekturunterstützung.** Mehr als 16 Modellarchitekturen, darunter einige (Starcoder, Falcon, MPT, Bloom, RWKV, GPTNeoX), die andere mobile Local-AI-Apps meist nicht unterstützen.',
          '**Multimodale (Vision-Language-)Modelle.** Unterstützung für LLaVA, BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL und Moondream ermöglicht laut README die Verarbeitung von Bild-plus-Text-Prompts.',
          '**Mehrere Sampling-Methoden.** Temperature, Tail-Free Sampling (TFS), Locally Typical Sampling, Mirostat, Greedy und grammatikbeschränktes Sampling werden als unterstützte Optionen aufgeführt.',
          '**Grammatikbeschränkte Ausgabe.** Grammar-Sampling erlaubt es, die Ausgabe eines Modells auf eine definierte Struktur (z. B. gültiges JSON) zu beschränken — nützlich für strukturierte Ausgaben.',
          '**Modell-Einstellungsvorlagen und Kontext-Wiederherstellung.** Gespeicherte Konfigurationen pro Modell sowie die Möglichkeit, den Kontextzustand einer Unterhaltung wiederherzustellen, statt ihn neu zu verarbeiten.',
          '**Apple-Shortcuts-Integration.** Die App lässt sich laut README aus Apples Shortcuts-Automatisierungsapp heraus auslösen.',
          '**Einfaches Retrieval-Augmented Generation (RAG).** Das README listet RAG-Fähigkeiten, dokumentiert aber in den für diesen Artikel geprüften Materialien nicht im Detail die genaue Retrieval-Methode oder unterstützte Dokumentformate.',
        ],
        note: 'Der Funktionsumfang kann sich zwischen Builds ändern, und da die App aktuell nicht über den App Store installierbar ist, entspricht die selbst gebaute Version möglicherweise nicht jeder Funktion aus älteren App-Store-Texten. Prüfen Sie das [GitHub-Repository](https://github.com/guinmoon/LLMFarm) und dessen Commit-Historie für den aktuellen Stand.',
      },
      loraFinetuning: {
        id: 'lora-finetuning',
        title: 'LoRA-Finetuning und Merging auf dem Gerät',
        content: [
          '**LLM Farm bietet LoRA-Werkzeuge (Low-Rank Adaptation) direkt auf dem Gerät — Laden von Adaptern, Finetuning eines Basismodells und Zusammenführen eines trainierten Adapters mit dem Basismodell — eine Kombination, die den meisten mobilen Local-AI-Apps komplett fehlt.** Laut [Wiki-Dokumentation](https://github.com/guinmoon/LLMFarm/wiki/lora) des Projekts:',
          'LoRA-Adapter lassen sich laden, indem Adapterdateien in ein Verzeichnis `lora_adapters` gelegt werden — entweder als einzelner Adapter über die Chat-Einstellungen oder als mehrere Adapter mit individuellen Skalierungsparametern in einer Konfigurationsdatei. Finetuning ist direkt in der App unter Settings > FineTune verfügbar, ist laut Wiki auf mobiler Hardware jedoch ressourcenintensiv — auf iOS ist es laut Dokumentation praktisch auf Modelle mit rund 3 Milliarden Parametern bei minimalen Einstellungen begrenzt. Eine separate Funktion unter Settings > Merge Lora erlaubt es, einen trainierten Adapter mit seinem Basismodell zusammenzuführen und zu exportieren, wobei das Wiki für praktikable iOS-Performance eine Quantisierung von Q4_K oder kleiner empfiehlt.',
        ],
        items: [
          'Laden eines oder mehrerer LoRA-Adapter, jeweils mit eigenem konfigurierbarem Skalierungsparameter.',
          'Finetuning eines Basismodells auf dem Gerät über Settings > FineTune — laut Wiki praktisch auf etwa 3B-Parameter-Modelle bei minimalen Einstellungen für iOS begrenzt.',
          'Zusammenführen eines trainierten LoRA-Adapters mit dem Basismodell und Export über Settings > Merge Lora.',
          'Kompromiss: Laut Wiki lässt sich das speicherplatz-schonende mmap-Laden nicht nutzen, solange ein LoRA-Adapter angehängt ist, was den RAM-Bedarf gegenüber dem alleinigen Basismodell erhöht.',
        ],
        note: 'Dieser Test hat kein eigenes Finetuning eines Modells in LLM Farm durchgeführt, um Trainingsgeschwindigkeit oder Ausgabequalität zu prüfen — die obige Beschreibung fasst zusammen, was die Projektdokumentation selbst zur Funktion angibt, keinen PromptQuorum-Benchmark.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Welche Hardware brauchen Sie für LLM Farm?',
        content: [
          '**Das gewählte Modell, nicht die App selbst, bestimmt den tatsächlichen Hardware-Mindestbedarf — als allgemeine Richtwerte für lokale LLMs benötigt ein quantisiertes Modell mit 2–4 Milliarden Parametern etwa 3–4 GB freien Arbeitsspeicher, ein Modell mit 7–8 Milliarden Parametern 8 GB oder mehr.** Das sind allgemeine GGUF-Richtwerte, kein LLM-Farm-spezifischer Benchmark; PromptQuorum hat den genauen Speicherbedarf von LLM Farm pro Modell nicht selbst gemessen.',
          'Auf iPhone, iPad und Mac nutzt LLM Farm Metal-Beschleunigung für die Inferenz, was die Geschwindigkeit gegenüber reiner CPU-Ausführung auf Apple-Silicon-Hardware in der Regel verbessert. Die App benötigt laut Projekt-README mindestens iOS 16 oder macOS 13 — ältere Geräte, die diese Betriebssystemversionen nicht ausführen können, können die App unabhängig vom RAM nicht nutzen.',
        ],
        items: [
          'Kleine Modelle (2–4 Mrd. Parameter, quantisiert): auf den meisten aktuellen iPhones und Macs mit 4 GB+ freiem RAM nutzbar.',
          'Mittelgroße Modelle (7–8 Mrd. Parameter, quantisiert): 8 GB oder mehr Geräte-RAM empfohlen für akzeptable Reaktionsgeschwindigkeit.',
          'LoRA-Finetuning speziell: laut Projekt-Wiki auf iOS praktisch auf rund 3B-Parameter-Modelle bei minimalen Einstellungen begrenzt, wegen der Rechen- und Speichergrenzen auf dem Gerät.',
          'Mindest-Betriebssystem: iOS 16 oder macOS 13, laut GitHub-README.',
          'Speicherplatz: mehrere Gigabyte freier Gerätespeicher pro heruntergeladener GGUF-Modelldatei einplanen.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich LLM Farm eignet',
        items: [
          '**Entwickler, die eine App aus dem Quellcode in Xcode bauen können.** Da App Store und TestFlight derzeit geschlossen sind, ist das eine harte Voraussetzung, kein „nice-to-have".',
          '**Nutzer, die gezielt LoRA-Finetuning oder Adapter-Merging auf dem Gerät wollen.** Diesen Funktionsumfang bieten die meisten konkurrierenden mobilen Local-AI-Apps überhaupt nicht.',
          '**Nutzer, die die größtmögliche Bandbreite an unterstützten Modellarchitekturen auf einem mobilen Gerät wollen.** Über 16 Architekturen, darunter mehrere Nischen-Architekturen (RWKV, Mamba, GPTNeoX), sind für eine Handy-App ungewöhnlich umfangreich.',
          '**Nutzer, die den Code selbst einsehen oder verändern möchten.** Die MIT-Lizenz erlaubt Forken und Verändern, und die Codebasis ist eine nützliche Referenz, um einen Swift-basierten llama.cpp/ggml-Wrapper zu verstehen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Für wen sich LLM Farm nicht eignet',
        items: [
          '**Alle, die keine iOS/macOS-App aus dem Quellcode bauen können oder wollen.** Das ist der größte Grund, LLM Farm derzeit zu meiden: Es gibt keine App-Store-Installation und zum Zeitpunkt dieses Tests keinen bestätigten TestFlight-Zugang.',
          '**Nutzer, die Android-, Windows- oder Linux-Unterstützung brauchen.** LLM Farm ist reine Apple-Software; Android-Nutzer sollten RikkaHub, ChatterUI oder Maid in Betracht ziehen, Desktop-Nutzer ohne Mac Ollama, LM Studio oder Jan AI.',
          '**Nutzer, die heute eine garantiert installierbare App wollen.** PocketPal AI und Private LLM lassen sich beide sofort aus dem App Store installieren, ohne etwas selbst zu bauen.',
          '**Nutzer, die häufige, versionierte Releases erwarten.** Der letzte getaggte Release des Projekts erschien im Januar 2025; obwohl Commits seitdem unregelmäßig weiterliefen, gab es seit über einem Jahr kein neues gepacktes Release.',
          '**Nutzer, die verlässlichen Support oder eine klare Roadmap brauchen.** LLM Farm wird laut Repository-Historie unabhängig von einer einzelnen Person gepflegt, ohne erklärte Zusage, die App-Store-Verfügbarkeit wiederherzustellen.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'LLM Farm im Vergleich zu Alternativen',
        itemHeadings: true,
        columns: ['App', 'Lizenz / Kosten', 'Plattformen', 'Aktueller Installationsweg'],
        rows: [
          {
            'App': 'LLM Farm',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (MIT)',
            'Plattformen': 'iPhone/iPad, Mac',
            'Aktueller Installationsweg': 'Nur Eigenbau per Xcode — App Store und TestFlight sind geschlossen',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (MIT)',
            'Plattformen': 'iPhone/iPad, Android',
            'Aktueller Installationsweg': 'App Store und Google Play, direkt installierbar',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Lizenz / Kosten': 'Kostenpflichtig, einmaliger Kauf; Closed Source',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Aktueller Installationsweg': 'App Store, direkt installierbar',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Lizenz / Kosten': 'Kostenlos mit kostenpflichtiger Stufe; Closed Source',
            'Plattformen': 'iPhone/iPad/Mac (nur Apple)',
            'Aktueller Installationsweg': 'App Store, direkt installierbar',
          },
          {
            'App': 'Layla',
            'Lizenz / Kosten': 'Kostenlose und kostenpflichtige Stufen; Closed Source',
            'Plattformen': 'Android und iOS laut [layla-network.ai](https://www.layla-network.ai)',
            'Aktueller Installationsweg': 'Aktuelle Store-Verfügbarkeit vorab auf [layla-network.ai](https://www.layla-network.ai) prüfen',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Lizenz / Kosten': 'Kostenlos, quelloffen',
            'Plattformen': 'Android',
            'Aktueller Installationsweg': 'Google Play oder Eigenbau',
          },
          {
            'App': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'Lizenz / Kosten': 'Kostenlos, quelloffen (AGPL-3.0)',
            'Plattformen': 'Android',
            'Aktueller Installationsweg': 'Eigenbau oder Sideload einer Release-APK',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Lizenz / Kosten': 'Kostenlos, quelloffen',
            'Plattformen': 'Android',
            'Aktueller Installationsweg': 'GitHub Releases oder Eigenbau',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Lizenz / Kosten': 'Kostenlos, quelloffen',
            'Plattformen': 'Android; iOS zum Zeitpunkt dieses Tests noch nicht verfügbar',
            'Aktueller Installationsweg': 'Google Play oder die AnythingLLM-Mobile-Seite',
          },
        ],
        note: 'Der Verfügbarkeitsstatus ändert sich in dieser Kategorie häufig — diese Tabelle spiegelt wider, was PromptQuorum im September 2026 bestätigen konnte. Prüfen Sie vor Nutzung eines Links die jeweilige Projektseite auf Aktualität.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Gibt es LLM Farm noch?',
            a: 'Das quelloffene Projekt ist auf GitHub weiterhin aktiv, die App lässt sich aber aktuell weder über den App Store noch über TestFlight installieren. Apple entfernte den App-Store-Eintrag etwa im August 2025, und das README des Projekts beschreibt beide Kanäle zum Zeitpunkt dieses Tests weiterhin als „vorübergehend nicht verfügbar". Der einzige aktuelle Weg ist der Eigenbau per Xcode.',
          },
          {
            q: 'Warum wurde LLM Farm aus dem App Store entfernt?',
            a: 'PromptQuorum konnte in keiner für diesen Artikel geprüften Quelle einen genannten Grund von Entwickler oder Apple finden. Das GitHub-README des Projekts bestätigt die Entfernung, ohne die Ursache zu erklären.',
          },
          {
            q: 'Ist LLM Farm kostenlos?',
            a: 'Ja. LLM Farm ist kostenlos und quelloffen unter der MIT-Lizenz, und PromptQuorum fand in den geprüften Quellen keinen Hinweis auf In-App-Käufe oder eine kostenpflichtige Stufe. Die praktischen Kosten sind ein Mac samt Xcode zum Bauen der App sowie ein Apple-Entwickler-Account.',
          },
          {
            q: 'Wer hat LLM Farm entwickelt?',
            a: 'LLM Farm wurde von Artem Savkin entwickelt, der unter dem GitHub-Namen [guinmoon](https://github.com/guinmoon) veröffentlicht. Es wird unabhängig gepflegt, nicht von einem Unternehmen.',
          },
          {
            q: 'Ist LLM Farm quelloffen?',
            a: 'Ja, der vollständige Quellcode ist auf [GitHub](https://github.com/guinmoon/LLMFarm) unter der MIT-Lizenz veröffentlicht — einer permissiven Lizenz, die freie Nutzung, Veränderung und Weitergabe erlaubt.',
          },
          {
            q: 'Kann LLM Farm Modelle mit LoRA feintunen?',
            a: 'Ja, laut Wiki-Dokumentation des Projekts. LLM Farm unterstützt das Laden von LoRA-Adaptern, das Finetuning eines Basismodells auf dem Gerät (laut Wiki auf iOS praktisch auf etwa 3B-Parameter-Modelle begrenzt) sowie das Zusammenführen eines trainierten Adapters mit dem Basismodell. Diesen Funktionsumfang bieten die meisten konkurrierenden mobilen Local-AI-Apps nicht.',
          },
          {
            q: 'Funktioniert LLM Farm auf Android?',
            a: 'Nein. LLM Farm unterstützt laut GitHub-README nur iOS (16+) und macOS (13+). Android-Nutzer sollten stattdessen RikkaHub, ChatterUI oder Maid in Betracht ziehen.',
          },
          {
            q: 'Wie installiere ich LLM Farm ohne den App Store?',
            a: 'Klonen Sie das [GitHub-Repository](https://github.com/guinmoon/LLMFarm) rekursiv mit `git clone --recurse-submodules`, öffnen Sie das Projekt in Xcode, signieren Sie es mit Ihrem eigenen Apple-Entwickler-Account und bauen Sie es für Ihr Gerät. Dafür brauchen Sie einen Mac und Grundkenntnisse in Xcode und iOS-Code-Signierung.',
          },
          {
            q: 'Wie schneidet LLM Farm im Vergleich zu PocketPal AI oder Private LLM ab?',
            a: 'LLM Farm und PocketPal AI sind beide kostenlos und MIT-lizenziert, aber LLM Farm erfordert derzeit den Eigenbau, während PocketPal AI direkt aus App Store und Google Play installierbar ist. LLM Farm unterstützt mehr Modellarchitekturen und bietet LoRA-Finetuning auf dem Gerät, das weder PocketPal AI noch das kostenpflichtige, Closed-Source Private LLM bieten. Wählen Sie LLM Farm nur, wenn Sie bereit sind, eine App selbst zu bauen; wählen Sie PocketPal AI oder Private LLM, wenn Sie etwas heute Installierbares wollen. Details finden Sie in der Vergleichstabelle oben.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'LLM Farm bleibt eines der technisch leistungsfähigsten quelloffenen Local-AI-Projekte für Apple-Geräte — Architekturabdeckung sowie LoRA-Finetuning und -Merging auf dem Gerät gehen weiter als bei den meisten mobilen Apps dieser Kategorie, PocketPal AI und Private LLM eingeschlossen. Doch zum Zeitpunkt dieses Tests ist es keine App, die die meisten Menschen tatsächlich installieren können: Apple hat sie im August 2025 aus dem App Store entfernt, der TestFlight-Zugang ist laut Projekt-README geschlossen, und der einzige bestätigte Weg zur Nutzung ist das eigenständige Kompilieren des quelloffenen Codes in Xcode. Das ist ein vertretbarer Aufwand für Entwickler, die den Code einsehen, mit LoRA-Finetuning experimentieren oder eine ungewöhnliche Modellarchitektur nutzen möchten. Für alle, die heute einfach eine App herunterladen und privat chatten möchten, ist das jedoch keine zumutbare Hürde — dafür sind PocketPal AI (kostenlos, quelloffen, direkt installierbar) oder Private LLM (kostenpflichtig, ausgereift, direkt installierbar) die praktikablen Optionen aus dem Abschnitt zu Alternativen oben.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LLM Farm auf GitHub](https://github.com/guinmoon/LLMFarm) — Quellcode, Lizenz (MIT), README, Commit-Historie sowie Sterne-/Fork-Zahlen aus diesem Test.',
          '[LLM Farm LICENSE-Datei](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) — MIT-Lizenztext und Urheberrechtsinhaber (Artem Savkin, 2023).',
          '[LLM Farm Wiki: FAQ](https://github.com/guinmoon/LLMFarm/wiki/FAQ) — Installationshinweise und unterstützte Dateiformate.',
          '[LLM Farm Wiki: LoRA](https://github.com/guinmoon/LLMFarm/wiki/lora) — Dokumentation zu LoRA-Laden, Finetuning und Merging.',
          '[llmfarm_core.swift auf GitHub](https://github.com/guinmoon/llmfarm_core.swift) — die in diesem Test referenzierte Inferenz-Bibliothek.',
          '[GitHub-Release-Historie für guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm/releases) — letzter getaggter Release (1.4.3, Januar 2025), referenziert in diesem Test.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — die iOS-Übersicht mit direkt installierbaren Alternativen zu LLM Farm.',
          '[PocketPal AI im Test](/power-local-llm/pocketpal-ai-review) — eine kostenlose, quelloffene, direkt installierbare Alternative für iPhone, iPad und Android.',
          '[Private LLM im Test](/power-local-llm/private-llm-review) — eine kostenpflichtige, Closed-Source-Alternative nur für Apple mit großem kuratiertem Modellkatalog.',
          '[Enclave AI im Test](/power-local-llm/enclave-ai-review) — eine reine Apple-Alternative mit Siri- und Shortcuts-Automatisierung.',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — eine kostenpflichtige, Closed-Source-Alternative für fünf Plattformen mit kuratierter Modellbibliothek.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Farm im Test (2026): Open-Source-GGUF-App, nicht mehr im App Store',
      description:
        'LLM Farm im Test: die quelloffene, MIT-lizenzierte iOS/macOS-GGUF-App mit LoRA-Finetuning auf dem Gerät. Derzeit nicht im App Store — was das bedeutet und wie man sie baut.',
      url: 'https://promptquorum.com/power-local-llm/llm-farm-review',
      inLanguage: 'de',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: 'Technisch versierte iOS- und macOS-Nutzer, die quelloffene Local-AI-Apps prüfen' },
      about: [
        { '@type': 'Thing', name: 'LLM Farm' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'LoRA-Finetuning' },
        { '@type': 'Thing', name: 'Lokales LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llm-farm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLM Farm im Test (2026)', item: 'https://promptquorum.com/power-local-llm/llm-farm-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-farm-review-hero-fr.webp',
    title: 'LLM Farm, avis (2026) : app GGUF open source, retirée de l\'App Store',
    seoTitle: 'LLM Farm avis 2026 : runtime GGUF iOS open source',
    intro:
      'LLM Farm est une application gratuite, open source sous licence MIT, pour iOS et macOS, qui exécute des modèles de langage GGUF directement sur l\'appareil via une surcouche Swift autour de [ggml](https://github.com/ggerganov/ggml) et de llama.cpp. Elle a été créée par le développeur Artem Savkin (pseudonyme GitHub [guinmoon](https://github.com/guinmoon)), qui l\'a publiée pour la première fois sur l\'App Store en décembre 2023. Au moment de cet avis, LLM Farm n\'est installable ni depuis l\'App Store ni depuis TestFlight — Apple a retiré la fiche en août 2025, et le [README GitHub](https://github.com/guinmoon/LLMFarm) du projet la décrit toujours comme « temporairement indisponible » sur ces deux canaux. Cet avis détaille ce que fait l\'application, ses outils de fine-tuning et de fusion LoRA sur l\'appareil (une fonctionnalité que la plupart des apps mobiles n\'ont pas), comment la compiler soi-même aujourd\'hui, et surtout pourquoi elle ne convient à personne qui ne soit pas à l\'aise pour compiler une app iOS.',
    metaDescription:
      'Avis LLM Farm : l\'app iOS/macOS GGUF open source sous licence MIT, avec fine-tuning LoRA sur l\'appareil. Actuellement absente de l\'App Store — ce que cela signifie et comment la compiler.',
    twitterDescription:
      'Avis LLM Farm 2026 : le runtime GGUF iOS/macOS open source avec outils LoRA sur l\'appareil — retiré de l\'App Store, à compiler soi-même uniquement.',
    audience:
      'Utilisateurs iOS et macOS à l\'aise techniquement, qui veulent un runtime GGUF open source avec fine-tuning LoRA, et sont prêts à compiler l\'app depuis le code source.',
    readTime: '11 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'LLM Farm avis',
    targetKeywords: [
      'llm farm avis',
      'llmfarm ios',
      'llm farm app store',
      'llm farm guinmoon',
      'llm farm lora',
      'exécuter des modèles gguf sur iphone',
      'app ia locale ios open source',
      'alternative à llm farm',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'Phi', 'LLaMA', 'Mixtral', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**LLM Farm est une application iOS et macOS gratuite et open source (licence MIT) qui exécute des modèles de langage GGUF entièrement sur l\'appareil, et elle ne peut actuellement pas être installée depuis l\'App Store ni TestFlight.** Développée par Artem Savkin ([guinmoon](https://github.com/guinmoon) sur GitHub) et publiée pour la première fois en décembre 2023, le [dépôt GitHub](https://github.com/guinmoon/LLMFarm) compte plus de 2 000 étoiles et plus de 180 forks. Apple a retiré la fiche App Store en août 2025, et le README du projet indique toujours, au moment de cet avis, que l\'App Store et TestFlight sont « temporairement indisponibles ». Le code source reste public et sous licence MIT, l\'app peut donc être compilée et installée via Xcode, mais cela nécessite un compte développeur Apple et une certaine aisance avec la compilation d\'applications iOS depuis le code source — ce n\'est plus une app à installer d\'un simple geste pour la plupart des gens.',
    quickAnswerTop: {
      fr: {
        question: 'Peut-on encore installer LLM Farm, et est-ce que cela en vaut la peine ?',
        answer:
          'Pas depuis l\'App Store — Apple a retiré la fiche en août 2025, et le README GitHub du projet indique toujours que l\'App Store et TestFlight sont « temporairement indisponibles ». La seule voie actuelle consiste à compiler l\'application open source depuis le code source dans Xcode, ce qui nécessite un compte développeur Apple et une expérience de base de la compilation iOS. Si vous en êtes capable, LLM Farm est l\'une des rares apps mobiles à proposer un vrai fine-tuning LoRA et des outils de fusion ; sinon, PocketPal AI ou Private LLM sont des alternatives installables en un geste, dès aujourd\'hui.',
        bullets: [
          'Gratuite et open source sous licence MIT, développée par Artem Savkin ([guinmoon](https://github.com/guinmoon/LLMFarm) sur GitHub).',
          'Actuellement non installable depuis l\'App Store ni TestFlight — Apple l\'a retirée du Store en août 2025 ; le README GitHub confirme le statut « temporairement indisponible » au moment de cet avis.',
          'La seule voie d\'installation actuelle est la compilation depuis le code source via Xcode, qui nécessite un compte développeur Apple.',
          'Prend en charge le chargement, le fine-tuning et la fusion d\'adaptateurs LoRA directement sur l\'appareil — une fonctionnalité absente de la plupart des apps concurrentes.',
          'Exécute des modèles GGUF sur plus de 16 architectures (LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek, et d\'autres) via son propre moteur basé sur ggml/llama.cpp.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que LLM Farm ?', anchor: 'what-is-llm-farm' },
      { label: 'Qui a créé LLM Farm ?', anchor: 'history-and-developer' },
      { label: 'LLM Farm est-elle encore sur l\'App Store ?', anchor: 'app-store-status' },
      { label: 'Comment obtenir LLM Farm aujourd\'hui', anchor: 'getting-started' },
      { label: 'Quels modèles LLM Farm prend-elle en charge ?', anchor: 'models-supported' },
      { label: 'LLM Farm est-elle disponible sur iPhone, iPad et Mac ?', anchor: 'platform-availability' },
      { label: 'Combien coûte LLM Farm ?', anchor: 'pricing' },
      { label: 'Quelles fonctionnalités propose LLM Farm ?', anchor: 'key-features' },
      { label: 'Fine-tuning et fusion LoRA sur l\'appareil', anchor: 'lora-finetuning' },
      { label: 'Quel matériel vous faut-il ?', anchor: 'hardware-requirements' },
      { label: 'À qui s\'adresse LLM Farm', anchor: 'who-should-use' },
      { label: 'À qui LLM Farm ne convient pas', anchor: 'who-should-not-use' },
      { label: 'LLM Farm face aux alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LLM Farm est une application iOS et macOS gratuite et open source (licence MIT) pour exécuter des modèles de langage GGUF sur l\'appareil, créée par le développeur Artem Savkin — elle est actuellement absente de l\'App Store et de TestFlight ; la seule voie est de la compiler soi-même depuis le code source.',
          },
          {
            type: 'plain-terms',
            text: 'C\'est une application qui permettrait de discuter avec un modèle d\'IA fonctionnant entièrement sur votre iPhone ou votre Mac, sans serveur cloud et avec un code source public — mais on ne peut actuellement pas la télécharger normalement depuis l\'App Store ; il faudrait la compiler soi-même avec l\'outil de développement Xcode d\'Apple.',
          },
        ],
        items: [
          'Gratuite et open source (licence MIT) ; code source et suivi des tickets publics sur [GitHub](https://github.com/guinmoon/LLMFarm).',
          'Créée par le développeur Artem Savkin, sous le pseudonyme GitHub [guinmoon](https://github.com/guinmoon), publiée pour la première fois sur l\'App Store en décembre 2023.',
          'Apple a retiré la fiche App Store en août 2025 ; le README du projet décrit toujours l\'App Store et TestFlight comme « temporairement indisponibles ».',
          'Exécute des modèles GGUF via son propre moteur basé sur ggml/llama.cpp sur plus de 16 architectures de modèles, dont LLaMA, Gemma, Qwen, Phi, Mixtral et DeepSeek.',
          'Une des rares apps mobiles de local-AI à intégrer le chargement, le fine-tuning et la fusion d\'adaptateurs LoRA directement sur l\'appareil.',
          'iOS (16+) et macOS (13+) uniquement — aucune version Android, Windows ou Linux.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis s\'appuie sur le [dépôt GitHub](https://github.com/guinmoon/LLMFarm) public (README, FAQ du wiki, fichier de licence, historique des commits et des versions) et sur le statut de la fiche App Store d\'Apple, vérifiés en septembre 2026. PromptQuorum n\'a pas réalisé de test pratique indépendant de LLM Farm pour cet avis — les chiffres matériels ci-dessous sont des repères généraux pour les LLM locaux, pas des mesures spécifiques à cette app.',
          },
          {
            type: 'warning',
            text: 'Au moment de cet avis, LLM Farm ne peut pas être installée depuis l\'App Store ni TestFlight. La fiche App Store qui existait auparavant à l\'adresse `apps.apple.com/app/llm-farm/id6461209867` ne s\'affiche plus. Toute personne souhaitant utiliser cette app doit la compiler depuis le code source avec Xcode, ce qui nécessite un compte développeur Apple (gratuit ou payant) et une certaine aisance avec les outils de compilation iOS.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-farm',
        title: 'Qu\'est-ce que LLM Farm ?',
        content: [
          '**LLM Farm est une application mobile et de bureau qui télécharge des modèles de langage ouverts au format GGUF et les exécute localement sur un iPhone, un iPad ou un Mac, via une surcouche Swift (la bibliothèque maison du développeur, [llmfarm_core.swift](https://github.com/guinmoon/llmfarm_core.swift)) autour de [ggml](https://github.com/ggerganov/ggml) et de llama.cpp comme moteur d\'inférence.** L\'application elle-même est [sous licence MIT](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE), ce qui signifie que le code source complet est public, librement consultable, modifiable et forkable.',
          'LLM Farm prend en charge un large éventail d\'architectures de modèles au-delà de la famille LLaMA courante — le dépôt liste plus de 16 architectures prises en charge, dont GPT-2, Starcoder, Falcon, MPT, Bloom, StableLM et RWKV, ainsi que des modèles multimodaux vision-langage comme LLaVA et Moondream. Elle inclut aussi des outils de chargement, de fine-tuning et de fusion d\'adaptateurs LoRA sur l\'appareil, un ensemble de fonctionnalités plus proche d\'un outil d\'expérimentation ML local que d\'une simple app de chat.',
        ],
        note: 'GGUF est un format de fichier qui empaquette des modèles de langage ouverts quantifiés afin qu\'ils s\'exécutent efficacement sur du matériel grand public via des moteurs comme llama.cpp et ggml, au lieu d\'appeler une API cloud à chaque réponse.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Qui a créé LLM Farm ?',
        content: [
          '**LLM Farm a été créée par le développeur Artem Savkin, qui publie sous le pseudonyme GitHub [guinmoon](https://github.com/guinmoon), et est apparue pour la première fois sur l\'App Store le 13 décembre 2023.** Le [fichier LICENSE du dépôt](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) désigne Artem Savkin comme titulaire des droits d\'auteur, daté de 2023.',
          'Le projet est maintenu de façon indépendante, sans société financée derrière lui. Le [dépôt GitHub](https://github.com/guinmoon/LLMFarm) a été créé en juin 2023 et compte, au moment de cet avis, plus de 2 000 étoiles et plus de 180 forks, avec 46 tickets ouverts. Le développement s\'est poursuivi par intermittence depuis le retrait de l\'App Store : l\'historique des commits montre des mises à jour du moteur llama.cpp sous-jacent jusqu\'en décembre 2025 et une mise à jour du README en janvier 2026, mais la dernière version taguée du projet (1.4.3) date de janvier 2025 — les modifications de code se sont donc poursuivies sans nouvelle version packagée depuis plus d\'un an au moment de cet avis.',
        ],
        items: [
          'Développeur : Artem Savkin (GitHub : [guinmoon](https://github.com/guinmoon)), travaillant de façon indépendante et non pour une société.',
          'Lancement sur l\'App Store : 13 décembre 2023. Dépôt GitHub créé : 14 juin 2023.',
          'Licence : MIT — licence open source permissive, libre d\'utilisation, de fork et de modification. Titulaire des droits selon le fichier LICENSE : Artem Savkin, 2023.',
          'Plus de 2 000 étoiles GitHub et plus de 180 forks au moment de cet avis, avec un suivi de tickets actif mais non résolu (46 tickets ouverts).',
          'Rythme de développement : intermittent depuis 2025 — les commits mettant à jour la dépendance llama.cpp et la documentation se sont poursuivis début 2026, mais aucune nouvelle version taguée n\'est sortie depuis la 1.4.3 en janvier 2025.',
        ],
      },
      appStoreStatus: {
        id: 'app-store-status',
        title: 'LLM Farm est-elle encore sur l\'App Store ?',
        content: [
          '**Non. Au moment de cet avis, LLM Farm ne peut pas être téléchargée depuis l\'Apple App Store, et son canal bêta TestFlight est également fermé.** L\'application a été initialement publiée sur l\'App Store le 13 décembre 2023, et retirée par Apple vers le 8 août 2025, d\'après l\'historique des versions et des commits du projet. La fiche App Store qui existait auparavant à l\'adresse `apps.apple.com/app/llm-farm/id6461209867` ne s\'affiche plus.',
          'Le [README GitHub](https://github.com/guinmoon/LLMFarm) du projet indique directement : « The app is temporarily unavailable in TestFlight and Appstore » (l\'application est temporairement indisponible sur TestFlight et l\'App Store). PromptQuorum n\'a pas pu confirmer la raison de ce retrait — le dépôt n\'en indique aucune — ni confirmer si ou quand l\'app pourrait revenir sur l\'un ou l\'autre canal de distribution. Une ancienne page FAQ du wiki mentionne que le développeur proposait auparavant de compiler manuellement un fichier `.ipa` pour les utilisateurs le contactant par e-mail si TestFlight n\'était pas accessible ; cet avis n\'a pas pu confirmer si cette offre est toujours honorée, le README actuel ne la mentionnant plus.',
        ],
        items: [
          'Statut App Store : retirée depuis environ août 2025, d\'après l\'historique des commits et des versions du projet.',
          'Statut TestFlight : fermé, selon le README GitHub actuel, au moment de cet avis.',
          'Raison du retrait : non indiquée par le développeur ni par Apple dans aucune source que PromptQuorum a pu localiser.',
          'Seule voie confirmée pour installer l\'app actuellement : la compiler depuis le code source via Xcode, à partir du dépôt GitHub public.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Comment obtenir LLM Farm aujourd\'hui',
        content: [
          '**Comme LLM Farm n\'est actuellement pas sur l\'App Store, l\'utiliser suppose de compiler le projet open source depuis le code source avec Xcode — une barrière nettement plus haute que de télécharger une app.** Les étapes ci-dessous suivent les instructions de compilation du [dépôt GitHub](https://github.com/guinmoon/LLMFarm) du projet.',
        ],
        numberedItems: [
          {
            title: 'Installer Xcode et un compte développeur Apple',
            whyItMatters: 'Il vous faut un Mac avec Xcode installé et un compte développeur Apple gratuit ou payant pour compiler et signer l\'application pour votre propre appareil. C\'est le principal obstacle pour les non-développeurs.',
          },
          {
            title: 'Cloner le dépôt de façon récursive',
            whyItMatters: 'Exécutez `git clone --recurse-submodules https://github.com/guinmoon/LLMFarm` — l\'option `--recurse-submodules` est nécessaire car la bibliothèque d\'inférence sous-jacente `llmfarm_core` a été déplacée vers un dépôt séparé et est intégrée comme sous-module.',
          },
          {
            title: 'Ouvrir le projet dans Xcode et le compiler pour votre appareil',
            whyItMatters: 'Ouvrez le fichier de projet Xcode, sélectionnez votre appareil ou la cible Mac, définissez votre propre équipe de signature développeur, puis compilez. Vous obtenez ainsi une app exécutable sur votre propre matériel, mais pas une app distribuable à d\'autres via l\'App Store.',
          },
          {
            title: 'Télécharger un modèle GGUF et le charger',
            whyItMatters: 'Une fois l\'app en fonctionnement, ajoutez un fichier de modèle GGUF (depuis Hugging Face ou une autre source) et chargez-le depuis l\'écran de gestion des modèles de l\'app, puis commencez à discuter entièrement sur l\'appareil.',
          },
        ],
        note: 'Ce processus suppose une familiarité de base avec Xcode et la signature de code iOS. Les utilisateurs peu à l\'aise avec la compilation d\'une app depuis le code source devraient plutôt envisager une alternative installable en un geste, comme PocketPal AI ou Private LLM — voir la section alternatives ci-dessous.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quels modèles LLM Farm prend-elle en charge ?',
        itemHeadings: true,
        columns: ['Famille de modèles', 'Catégorie', 'Remarques'],
        rows: [
          {
            'Famille de modèles': 'LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek, Yi, StableLM',
            'Catégorie': 'Génération de texte',
            'Remarques': 'Chargés en tant que fichiers GGUF via le moteur basé sur ggml/llama.cpp de l\'app',
          },
          {
            'Famille de modèles': 'GPT-2, Starcoder, Falcon, MPT, Bloom, RWKV, Mamba, GPTNeoX, PLaMo',
            'Catégorie': 'Génération de texte (architectures anciennes / de niche)',
            'Remarques': 'Couverture d\'architectures plus large que la plupart des apps mobiles concurrentes',
          },
          {
            'Famille de modèles': 'LLaVA (1.5/1.6), BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL, Moondream',
            'Catégorie': 'Multimodal (vision-langage)',
            'Remarques': 'Prise en charge des entrées image plus texte, selon le README du projet',
          },
          {
            'Famille de modèles': 'Tout autre modèle GGUF ou GGJTv3',
            'Catégorie': 'Import personnalisé',
            'Remarques': 'GGUF nécessite l\'extension `.gguf`, l\'ancien format GGJTv3 l\'extension `.bin`, selon le wiki du projet',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'LLM Farm est-elle disponible sur iPhone, iPad et Mac ?',
        itemHeadings: true,
        columns: ['Plateforme', 'Disponibilité', 'Remarques'],
        rows: [
          {
            'Plateforme': 'iPhone / iPad',
            'Disponibilité': 'Nécessite une compilation via Xcode — non installable depuis l\'App Store au moment de cet avis',
            'Remarques': 'iOS 16 minimum, selon le README du projet ; l\'accélération Metal est utilisée pour l\'inférence sur l\'appareil.',
          },
          {
            'Plateforme': 'Mac',
            'Disponibilité': 'Nécessite une compilation via Xcode',
            'Remarques': 'macOS 13 minimum, selon le README du projet ; une prise en charge native de macOS aux côtés d\'iOS/iPadOS figure dans la même base de code.',
          },
          {
            'Plateforme': 'Android / Windows / Linux',
            'Disponibilité': 'Non pris en charge',
            'Remarques': 'LLM Farm n\'a aucune version Android, Windows ou Linux. Les utilisateurs Android devraient plutôt se tourner vers RikkaHub, ChatterUI ou Maid.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Combien coûte LLM Farm ?',
        content: [
          '**LLM Farm est gratuite et open source sous licence MIT — il n\'y a ni prix d\'achat ni abonnement pour le code ou la fonction de chat de l\'app.** PromptQuorum n\'a trouvé aucune preuve d\'achat intégré, de palier premium ou de place de marché payante au sein de LLM Farm dans le dépôt, le wiki ou le texte historique de la fiche App Store consultés pour cet article.',
          'Le coût réel d\'utilisation de LLM Farm aujourd\'hui est indirect : il faut un Mac pour compiler l\'app (Xcode n\'existe que sur macOS), et selon le type de compte développeur Apple, soit aucun coût (signature en équipe personnelle gratuite, limitée à vos propres appareils avec un certificat renouvelable environ tous les sept jours), soit les frais du [programme développeur Apple](https://developer.apple.com/programs/) pour un certificat de signature plus durable. Au-delà, les fichiers de modèles GGUF téléchargés occupent de l\'espace de stockage, typiquement plusieurs gigaoctets par modèle, comme pour toute autre app de LLM local.',
        ],
        items: [
          '**L\'app elle-même :** Gratuite, open source sous licence MIT — aucun prix d\'achat trouvé pour le code ou ses fonctionnalités.',
          '**Achats intégrés :** Aucun trouvé dans les sources consultées pour cet article.',
          '**Outils de compilation :** Xcode est gratuit mais nécessite un Mac ; un identifiant Apple gratuit peut signer des builds pour un usage personnel avec un certificat à renouveler environ tous les sept jours, tandis qu\'un abonnement payant au programme développeur Apple évite ce cycle de renouvellement.',
          '**Coût de stockage :** Non monétaire, mais réel — chaque fichier de modèle GGUF téléchargé occupe de l\'espace de stockage, typiquement plusieurs gigaoctets par modèle.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Quelles fonctionnalités propose LLM Farm ?',
        content: [
          '**Au-delà de l\'exécution locale de modèles GGUF, l\'ensemble de fonctionnalités de LLM Farm penche, selon son README et son wiki GitHub, davantage vers un outil d\'expérimentation ML local que vers un simple client de chat.** Cela inclut :',
        ],
        items: [
          '**Prise en charge étendue des architectures.** Plus de 16 architectures de modèles, dont plusieurs (Starcoder, Falcon, MPT, Bloom, RWKV, GPTNeoX) que d\'autres apps mobiles de local-AI ne prennent généralement pas en charge.',
          '**Modèles multimodaux (vision-langage).** La prise en charge de LLaVA, BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL et Moondream permet à l\'app de traiter des invites combinant image et texte, selon le README.',
          '**Plusieurs méthodes d\'échantillonnage.** Temperature, Tail-Free Sampling (TFS), Locally Typical Sampling, Mirostat, Greedy et l\'échantillonnage contraint par grammaire figurent parmi les options prises en charge.',
          '**Sortie contrainte par grammaire.** L\'échantillonnage par grammaire permet de contraindre la sortie d\'un modèle à une structure définie (comme du JSON valide), utile pour des cas d\'usage de sortie structurée.',
          '**Modèles de paramètres et restauration de contexte.** Configurations enregistrées par modèle, et possibilité de restaurer l\'état de contexte d\'une conversation plutôt que de le retraiter depuis le début.',
          '**Intégration aux Raccourcis Apple.** L\'app peut être déclenchée depuis l\'app d\'automatisation Raccourcis d\'Apple, selon le README.',
          '**Génération augmentée par récupération (RAG) basique.** Le README mentionne une capacité RAG, sans détailler dans les documents consultés pour cet article sa méthode de récupération exacte ni les formats de documents pris en charge.',
        ],
        note: 'La disponibilité des fonctionnalités peut varier d\'une compilation à l\'autre, et comme l\'app n\'est actuellement pas installable depuis l\'App Store, la version que vous compilez vous-même peut ne pas correspondre à toutes les fonctionnalités décrites dans d\'anciens textes de fiche App Store. Consultez le [dépôt GitHub](https://github.com/guinmoon/LLMFarm) et son historique de commits pour connaître l\'état actuel.',
      },
      loraFinetuning: {
        id: 'lora-finetuning',
        title: 'Fine-tuning et fusion LoRA sur l\'appareil',
        content: [
          '**LLM Farm intègre des outils LoRA (Low-Rank Adaptation) sur l\'appareil — chargement d\'adaptateurs, fine-tuning d\'un modèle de base et fusion d\'un adaptateur entraîné dans le modèle de base — une combinaison que la plupart des apps mobiles de local-AI ne proposent pas du tout.** Selon la [documentation du wiki](https://github.com/guinmoon/LLMFarm/wiki/lora) du projet :',
          'Les adaptateurs LoRA peuvent être chargés en plaçant des fichiers d\'adaptateur dans un dossier `lora_adapters`, soit un seul adaptateur via l\'interface des réglages de chat, soit plusieurs adaptateurs configurés avec des paramètres d\'échelle individuels dans un fichier de configuration. Le fine-tuning est disponible directement dans l\'app sous Settings > FineTune, mais le wiki précise que cela reste gourmand en ressources sur du matériel mobile — sur iOS, la documentation indique que cela se limite en pratique à des modèles d\'environ 3 milliards de paramètres avec des réglages minimaux. Une fonction distincte, Settings > Merge Lora, permet de fusionner un adaptateur entraîné avec son modèle de base et de l\'exporter, le wiki recommandant une quantification Q4_K ou inférieure pour des performances iOS acceptables.',
        ],
        items: [
          'Chargement d\'un ou plusieurs adaptateurs LoRA, chacun avec son propre paramètre d\'échelle configurable.',
          'Fine-tuning d\'un modèle de base sur l\'appareil via Settings > FineTune — selon le wiki, limité en pratique à environ 3 milliards de paramètres avec des réglages minimaux sur iOS.',
          'Fusion d\'un adaptateur LoRA entraîné avec son modèle de base et export via Settings > Merge Lora.',
          'Compromis : le wiki indique que le chargement en mémoire mappée (mmap) ne peut pas être utilisé tant qu\'un adaptateur LoRA est actif, ce qui augmente la consommation de RAM par rapport à l\'exécution du seul modèle de base.',
        ],
        note: 'Cet avis n\'a pas réalisé de fine-tuning indépendant d\'un modèle dans LLM Farm pour vérifier la vitesse d\'entraînement ou la qualité de sortie — la description ci-dessus résume ce que la documentation du projet elle-même indique sur cette fonctionnalité, pas un benchmark PromptQuorum.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Quel matériel vous faut-il pour LLM Farm ?',
        content: [
          '**Le modèle choisi, et non l\'app elle-même, détermine le seuil matériel réel — comme repère général pour les LLM locaux, un modèle quantifié de 2 à 4 milliards de paramètres nécessite environ 3 à 4 Go de RAM libre, tandis qu\'un modèle de 7 à 8 milliards de paramètres en nécessite 8 Go ou plus.** Ce sont des repères matériels GGUF standards, pas un benchmark spécifique à LLM Farm ; PromptQuorum n\'a pas mesuré indépendamment la consommation mémoire exacte de LLM Farm par modèle.',
          'Sur iPhone, iPad et Mac, LLM Farm utilise l\'accélération Metal pour l\'inférence, ce qui améliore généralement la vitesse par rapport à une exécution CPU seule sur du matériel Apple Silicon. L\'app nécessite au minimum iOS 16 ou macOS 13, selon le README du projet ; les appareils plus anciens ne pouvant pas exécuter ces versions d\'OS ne peuvent donc pas faire tourner l\'app, quelle que soit leur RAM.',
        ],
        items: [
          'Petits modèles (2 à 4 Mrd de paramètres, quantifiés) : utilisables sur la plupart des iPhone et Mac récents avec 4 Go+ de RAM libre.',
          'Modèles de taille moyenne (7 à 8 Mrd de paramètres, quantifiés) : 8 Go ou plus de RAM recommandés pour une réactivité acceptable.',
          'Fine-tuning LoRA spécifiquement : selon le wiki du projet, limité en pratique à environ 3 Mrd de paramètres sur iOS avec des réglages minimaux, en raison des contraintes de calcul et de mémoire sur l\'appareil.',
          'OS minimum : iOS 16 ou macOS 13, selon le README GitHub.',
          'Stockage : prévoir plusieurs gigaoctets d\'espace libre par fichier de modèle GGUF téléchargé.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse LLM Farm',
        items: [
          '**Aux développeurs à l\'aise pour compiler une app depuis le code source dans Xcode.** L\'App Store et TestFlight étant actuellement fermés, c\'est une exigence stricte, pas un simple plus.',
          '**Aux utilisateurs qui veulent spécifiquement un fine-tuning ou une fusion d\'adaptateurs LoRA sur l\'appareil.** La plupart des apps mobiles de local-AI concurrentes ne proposent pas du tout cet ensemble de fonctionnalités.',
          '**Aux utilisateurs qui veulent la plus large gamme d\'architectures de modèles prises en charge sur un appareil mobile.** Plus de seize architectures, dont plusieurs de niche (RWKV, Mamba, GPTNeoX), c\'est inhabituellement large pour une app de téléphone.',
          '**Aux utilisateurs qui veulent inspecter ou modifier le code eux-mêmes.** La licence MIT autorise le fork et la modification, et la base de code constitue une référence utile pour comprendre une surcouche llama.cpp/ggml en Swift.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'À qui LLM Farm ne convient pas',
        items: [
          '**À toute personne qui ne peut pas ou ne veut pas compiler une app iOS/macOS depuis le code source.** C\'est la principale raison d\'éviter LLM Farm pour l\'instant : il n\'y a pas d\'installation depuis l\'App Store, ni d\'accès TestFlight confirmé, au moment de cet avis.',
          '**Aux utilisateurs qui ont besoin d\'une prise en charge Android, Windows ou Linux.** LLM Farm est réservée à Apple ; les utilisateurs Android devraient se tourner vers RikkaHub, ChatterUI ou Maid, et les utilisateurs de bureau sans Mac vers Ollama, LM Studio ou Jan AI.',
          '**Aux utilisateurs qui veulent une app installable de façon garantie aujourd\'hui.** PocketPal AI et Private LLM sont toutes deux installables immédiatement depuis l\'App Store, sans rien compiler.',
          '**Aux utilisateurs qui attendent des versions fréquentes et numérotées.** La dernière version taguée du projet est sortie en janvier 2025 ; bien que des commits se soient poursuivis par intermittence depuis, aucune nouvelle version packagée n\'est parue depuis plus d\'un an au moment de cet avis.',
          '**Aux utilisateurs qui ont besoin d\'un support garanti ou d\'une feuille de route définie.** LLM Farm est maintenue de façon indépendante par un seul développeur, selon l\'historique de son dépôt, sans engagement annoncé de rétablir sa disponibilité sur l\'App Store.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'LLM Farm face aux alternatives',
        itemHeadings: true,
        columns: ['App', 'Licence / coût', 'Plateformes', 'Voie d\'installation actuelle'],
        rows: [
          {
            'App': 'LLM Farm',
            'Licence / coût': 'Gratuite, open source (MIT)',
            'Plateformes': 'iPhone/iPad, Mac',
            'Voie d\'installation actuelle': 'Compilation via Xcode uniquement — App Store et TestFlight fermés',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Licence / coût': 'Gratuite, open source (MIT)',
            'Plateformes': 'iPhone/iPad, Android',
            'Voie d\'installation actuelle': 'App Store et Google Play, installation directe',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Licence / coût': 'Payante, achat unique ; closed source',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Voie d\'installation actuelle': 'App Store, installation directe',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Licence / coût': 'Gratuite avec palier payant ; closed source',
            'Plateformes': 'iPhone/iPad/Mac (Apple uniquement)',
            'Voie d\'installation actuelle': 'App Store, installation directe',
          },
          {
            'App': 'Layla',
            'Licence / coût': 'Paliers gratuits et payants ; closed source',
            'Plateformes': 'Android et iOS, selon [layla-network.ai](https://www.layla-network.ai)',
            'Voie d\'installation actuelle': 'Vérifier la disponibilité actuelle sur [layla-network.ai](https://www.layla-network.ai) avant de supposer qu\'un palier gratuit existe',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Licence / coût': 'Gratuite, open source',
            'Plateformes': 'Android',
            'Voie d\'installation actuelle': 'Google Play ou compilation depuis le code source',
          },
          {
            'App': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'Licence / coût': 'Gratuite, open source (AGPL-3.0)',
            'Plateformes': 'Android',
            'Voie d\'installation actuelle': 'Compilation ou installation d\'un APK de version publiée',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Licence / coût': 'Gratuite, open source',
            'Plateformes': 'Android',
            'Voie d\'installation actuelle': 'Versions GitHub ou compilation depuis le code source',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Licence / coût': 'Gratuite, open source',
            'Plateformes': 'Android ; iOS pas encore disponible au moment de cet avis',
            'Voie d\'installation actuelle': 'Google Play ou le site AnythingLLM Mobile',
          },
        ],
        note: 'Le statut de disponibilité change fréquemment dans cette catégorie — ce tableau reflète ce que PromptQuorum a pu confirmer en septembre 2026. Vérifiez la page de chaque projet avant de considérer un lien comme toujours valide.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'LLM Farm existe-t-elle encore ?',
            a: 'Le projet open source reste actif sur GitHub, mais l\'app n\'est actuellement pas installable depuis l\'App Store ni TestFlight. Apple a retiré la fiche App Store vers août 2025, et le README du projet décrit toujours les deux canaux comme « temporairement indisponibles » au moment de cet avis. La seule voie actuelle est de la compiler depuis le code source via Xcode.',
          },
          {
            q: 'Pourquoi LLM Farm a-t-elle été retirée de l\'App Store ?',
            a: 'PromptQuorum n\'a trouvé aucune raison indiquée par le développeur ou par Apple dans les sources consultées pour cet article. Le README GitHub du projet reconnaît le retrait sans en expliquer la cause.',
          },
          {
            q: 'LLM Farm est-elle gratuite ?',
            a: 'Oui. LLM Farm est gratuite et open source sous licence MIT, et PromptQuorum n\'a trouvé aucune preuve d\'achat intégré ou de palier payant dans les sources consultées. Le coût pratique est un Mac et Xcode pour la compiler, plus un compte développeur Apple.',
          },
          {
            q: 'Qui a développé LLM Farm ?',
            a: 'LLM Farm a été créée par le développeur Artem Savkin, qui publie sous le pseudonyme GitHub [guinmoon](https://github.com/guinmoon). Elle est maintenue de façon indépendante, et non par une société.',
          },
          {
            q: 'LLM Farm est-elle open source ?',
            a: 'Oui, le code source complet est publié sur [GitHub](https://github.com/guinmoon/LLMFarm) sous licence MIT, une licence permissive qui autorise l\'utilisation, la modification et la redistribution libres.',
          },
          {
            q: 'LLM Farm peut-elle faire du fine-tuning avec LoRA ?',
            a: 'Oui, selon la documentation du wiki du projet. LLM Farm prend en charge le chargement d\'adaptateurs LoRA, le fine-tuning d\'un modèle de base sur l\'appareil (limité en pratique à environ 3 Mrd de paramètres sur iOS selon le wiki), et la fusion d\'un adaptateur entraîné avec le modèle de base. La plupart des apps mobiles de local-AI concurrentes ne proposent pas cette fonctionnalité.',
          },
          {
            q: 'LLM Farm fonctionne-t-elle sur Android ?',
            a: 'Non. LLM Farm ne prend en charge qu\'iOS (16+) et macOS (13+), selon son README GitHub. Les utilisateurs Android devraient plutôt se tourner vers RikkaHub, ChatterUI ou Maid.',
          },
          {
            q: 'Comment installer LLM Farm sans l\'App Store ?',
            a: 'Clonez le [dépôt GitHub](https://github.com/guinmoon/LLMFarm) de façon récursive avec `git clone --recurse-submodules`, ouvrez le projet dans Xcode, signez-le avec votre propre compte développeur Apple, et compilez-le pour votre appareil. Cela nécessite un Mac et une connaissance de base de Xcode et de la signature de code iOS.',
          },
          {
            q: 'Comment LLM Farm se compare-t-elle à PocketPal AI ou Private LLM ?',
            a: 'LLM Farm et PocketPal AI sont toutes deux gratuites et sous licence MIT, mais LLM Farm nécessite actuellement une compilation depuis le code source, tandis que PocketPal AI s\'installe directement depuis l\'App Store et Google Play. LLM Farm prend en charge davantage d\'architectures de modèles et intègre le fine-tuning LoRA sur l\'appareil, que ni PocketPal AI ni Private LLM (payante, closed source) ne proposent. Choisissez LLM Farm uniquement si vous êtes à l\'aise pour compiler une app vous-même ; choisissez PocketPal AI ou Private LLM si vous voulez quelque chose d\'installable dès aujourd\'hui. Voir le tableau comparatif ci-dessus pour plus de détails.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'LLM Farm reste l\'un des projets open source de local-AI les plus aboutis techniquement pour les appareils Apple — sa couverture d\'architectures ainsi que ses outils de fine-tuning et de fusion LoRA sur l\'appareil vont plus loin que la plupart des apps mobiles de cette catégorie, PocketPal AI et Private LLM incluses. Mais au moment de cet avis, ce n\'est pas une app que la plupart des gens peuvent réellement installer : Apple l\'a retirée de l\'App Store en août 2025, l\'accès TestFlight est fermé selon le README du projet, et la seule voie confirmée pour l\'utiliser est de compiler soi-même le code open source dans Xcode. C\'est un compromis raisonnable pour un développeur qui veut inspecter le code, expérimenter le fine-tuning LoRA ou utiliser une architecture de modèle inhabituelle. Ce n\'est pas une demande raisonnable pour quelqu\'un qui veut simplement télécharger une app et discuter en privé dès aujourd\'hui — pour cela, PocketPal AI (gratuite, open source, installation directe) ou Private LLM (payante, aboutie, installation directe) sont les choix pratiques présentés dans la section alternatives ci-dessus.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LLM Farm sur GitHub](https://github.com/guinmoon/LLMFarm) — code source, licence (MIT), README, historique des commits et nombre d\'étoiles/forks cités dans cet avis.',
          '[Fichier LICENSE de LLM Farm](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) — texte de la licence MIT et titulaire des droits d\'auteur (Artem Savkin, 2023).',
          '[Wiki LLM Farm : FAQ](https://github.com/guinmoon/LLMFarm/wiki/FAQ) — notes d\'installation et détails des formats de fichiers pris en charge.',
          '[Wiki LLM Farm : LoRA](https://github.com/guinmoon/LLMFarm/wiki/lora) — documentation sur le chargement, le fine-tuning et la fusion LoRA.',
          '[llmfarm_core.swift sur GitHub](https://github.com/guinmoon/llmfarm_core.swift) — la bibliothèque d\'inférence sous-jacente citée dans cet avis.',
          '[Historique des versions GitHub pour guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm/releases) — dernière version taguée (1.4.3, janvier 2025) citée dans cet avis.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — le comparatif iOS, avec des alternatives installables à LLM Farm.',
          '[Avis PocketPal AI](/power-local-llm/pocketpal-ai-review) — une alternative gratuite, open source et installable directement pour iPhone, iPad et Android.',
          '[Avis Private LLM](/power-local-llm/private-llm-review) — une alternative payante, closed source, réservée à Apple, avec un large catalogue de modèles.',
          '[Avis Enclave AI](/power-local-llm/enclave-ai-review) — une alternative réservée à Apple avec automatisation Siri et Raccourcis.',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — une alternative payante, closed source, sur cinq plateformes, avec une bibliothèque de modèles organisée.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Farm, avis (2026) : app GGUF open source, retirée de l\'App Store',
      description:
        'Avis LLM Farm : l\'app iOS/macOS GGUF open source sous licence MIT, avec fine-tuning LoRA sur l\'appareil. Actuellement absente de l\'App Store — ce que cela signifie et comment la compiler.',
      url: 'https://promptquorum.com/power-local-llm/llm-farm-review',
      inLanguage: 'fr',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: 'Utilisateurs iOS et macOS à l\'aise techniquement, évaluant des apps de local-AI open source' },
      about: [
        { '@type': 'Thing', name: 'LLM Farm' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Fine-tuning LoRA' },
        { '@type': 'Thing', name: 'LLM local' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llm-farm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLM Farm, avis (2026)', item: 'https://promptquorum.com/power-local-llm/llm-farm-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-farm-review-hero-es.webp',
    title: 'LLM Farm, análisis (2026): app GGUF de código abierto, fuera de la App Store',
    seoTitle: 'LLM Farm análisis 2026: runtime GGUF de código abierto para iOS',
    intro:
      'LLM Farm es una app gratuita y de código abierto (licencia MIT) para iOS y macOS que ejecuta modelos de lenguaje GGUF directamente en el dispositivo mediante una capa en Swift construida sobre [ggml](https://github.com/ggerganov/ggml) y llama.cpp. Fue creada por el desarrollador Artem Savkin (usuario de GitHub [guinmoon](https://github.com/guinmoon)), quien la publicó por primera vez en la App Store en diciembre de 2023. Al momento de este análisis, LLM Farm no se puede instalar desde la App Store ni desde TestFlight: Apple retiró la ficha en agosto de 2025, y el [README de GitHub](https://github.com/guinmoon/LLMFarm) del proyecto sigue describiendo la app como "temporalmente no disponible" en ambos canales. Este análisis cubre lo que hace la app, sus herramientas de ajuste fino (fine-tuning) y fusión de LoRA en el dispositivo (una función que la mayoría de las apps móviles de IA local no tiene), cómo compilarla hoy desde el código fuente y, sobre todo, por qué no es adecuada para nadie que no se sienta cómodo compilando una app de iOS.',
    metaDescription:
      'Análisis de LLM Farm: la app GGUF de código abierto para iOS/macOS, con licencia MIT, con ajuste fino LoRA en el dispositivo. Actualmente fuera de la App Store: qué significa y cómo compilarla.',
    twitterDescription:
      'Análisis de LLM Farm 2026: el runtime GGUF de código abierto para iOS/macOS con herramientas LoRA en el dispositivo, retirado de la App Store, solo compilable desde el código fuente.',
    audience:
      'Usuarios de iOS y macOS con conocimientos técnicos que quieren un runtime GGUF de código abierto con ajuste fino LoRA y están dispuestos a compilar la app desde el código fuente.',
    readTime: '11 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'LLM Farm análisis',
    targetKeywords: [
      'llm farm análisis',
      'llmfarm ios',
      'llm farm app store',
      'llm farm guinmoon',
      'llm farm lora',
      'ejecutar modelos gguf en iphone',
      'app de ia local ios de código abierto',
      'alternativa a llm farm',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'Phi', 'LLaMA', 'Mixtral', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**LLM Farm es una app de iOS y macOS gratuita y de código abierto (licencia MIT) que ejecuta modelos de lenguaje GGUF por completo en el dispositivo, y actualmente no se puede instalar desde la App Store ni TestFlight.** Desarrollada por Artem Savkin ([guinmoon](https://github.com/guinmoon) en GitHub) y publicada por primera vez en diciembre de 2023, el [repositorio de GitHub](https://github.com/guinmoon/LLMFarm) tiene más de 2.000 estrellas y más de 180 forks. Apple retiró la ficha de la App Store en agosto de 2025, y el README del proyecto sigue marcando tanto la App Store como TestFlight como "temporalmente no disponibles" al momento de este análisis. El código fuente sigue siendo público y con licencia MIT, por lo que la app se puede compilar e instalar mediante Xcode, pero eso requiere una cuenta de desarrollador de Apple y familiaridad con la compilación de apps de iOS desde el código fuente: para la mayoría de las personas, ya no es una app de instalación con un solo toque.',
    quickAnswerTop: {
      es: {
        question: '¿Todavía se puede instalar LLM Farm, y vale la pena?',
        answer:
          'No desde la App Store: Apple retiró la ficha en agosto de 2025, y el propio README de GitHub del proyecto sigue indicando que tanto la App Store como TestFlight están "temporalmente no disponibles". La única vía actual es compilar la app de código abierto desde el código fuente en Xcode, lo que requiere una cuenta de desarrollador de Apple y experiencia básica en compilación de apps de iOS. Si puedes hacerlo, LLM Farm es una de las pocas apps móviles con ajuste fino LoRA y herramientas de fusión reales; si no, PocketPal AI o Private LLM son alternativas que hoy mismo se pueden instalar con un solo toque.',
        bullets: [
          'Gratuita y de código abierto bajo licencia MIT, desarrollada por Artem Savkin ([guinmoon](https://github.com/guinmoon/LLMFarm) en GitHub).',
          'Actualmente no se puede instalar desde la App Store ni TestFlight: Apple la retiró de la tienda en agosto de 2025; el README de GitHub confirma el estado "temporalmente no disponible" al momento de este análisis.',
          'La única vía de instalación actual es compilarla desde el código fuente vía Xcode, lo que requiere una cuenta de desarrollador de Apple.',
          'Admite cargar, ajustar (fine-tuning) y fusionar adaptadores LoRA directamente en el dispositivo, una función que la mayoría de las apps competidoras no tiene.',
          'Ejecuta modelos GGUF en más de 16 arquitecturas (LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek y más) mediante su propio motor basado en ggml/llama.cpp.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es LLM Farm?', anchor: 'what-is-llm-farm' },
      { label: '¿Quién creó LLM Farm?', anchor: 'history-and-developer' },
      { label: '¿Sigue LLM Farm en la App Store?', anchor: 'app-store-status' },
      { label: 'Cómo conseguir LLM Farm hoy', anchor: 'getting-started' },
      { label: '¿Qué modelos admite LLM Farm?', anchor: 'models-supported' },
      { label: '¿Está LLM Farm disponible en iPhone, iPad y Mac?', anchor: 'platform-availability' },
      { label: '¿Cuánto cuesta LLM Farm?', anchor: 'pricing' },
      { label: '¿Qué funciones tiene LLM Farm?', anchor: 'key-features' },
      { label: 'Ajuste fino y fusión de LoRA en el dispositivo', anchor: 'lora-finetuning' },
      { label: '¿Qué hardware necesitas?', anchor: 'hardware-requirements' },
      { label: 'A quién le sirve LLM Farm', anchor: 'who-should-use' },
      { label: 'A quién no le sirve LLM Farm', anchor: 'who-should-not-use' },
      { label: 'LLM Farm frente a alternativas', anchor: 'vs-alternatives' },
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
            text: 'LLM Farm es una app de iOS y macOS gratuita y de código abierto (licencia MIT) para ejecutar modelos de lenguaje GGUF en el dispositivo, creada por el desarrollador Artem Savkin; actualmente no está disponible ni en la App Store ni en TestFlight, y la única vía es compilarla uno mismo desde el código fuente.',
          },
          {
            type: 'plain-terms',
            text: 'Es una app que permitiría chatear con un modelo de IA que se ejecuta por completo en tu iPhone o Mac, sin ningún servidor en la nube y con el código fuente público, pero actualmente no se puede descargar de forma normal desde la App Store; habría que compilarla uno mismo con la herramienta de desarrollo Xcode de Apple.',
          },
        ],
        items: [
          'Gratuita y de código abierto (licencia MIT); el código fuente y el registro de incidencias son públicos en [GitHub](https://github.com/guinmoon/LLMFarm).',
          'Creada por el desarrollador Artem Savkin, bajo el nombre de usuario de GitHub [guinmoon](https://github.com/guinmoon), lanzada por primera vez en la App Store en diciembre de 2023.',
          'Apple retiró la ficha de la App Store en agosto de 2025; el README del proyecto sigue describiendo tanto la App Store como TestFlight como "temporalmente no disponibles".',
          'Ejecuta modelos GGUF mediante su propio motor basado en ggml/llama.cpp en más de 16 arquitecturas de modelos, incluidas LLaMA, Gemma, Qwen, Phi, Mixtral y DeepSeek.',
          'Una de las pocas apps móviles de IA local con carga, ajuste fino y fusión de adaptadores LoRA integrados directamente en el dispositivo.',
          'Solo iOS (16+) y macOS (13+); sin versión para Android, Windows o Linux.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en el [repositorio público de GitHub](https://github.com/guinmoon/LLMFarm) (README, FAQ del wiki, archivo de licencia, historial de commits y versiones) y en el estado de la ficha de Apple App Store, verificados en septiembre de 2026. PromptQuorum no ha realizado pruebas prácticas independientes de LLM Farm para este análisis; las cifras de hardware que siguen son orientación general para LLM locales, no mediciones específicas de esta app.',
          },
          {
            type: 'warning',
            text: 'Al momento de este análisis, LLM Farm no se puede instalar desde la App Store ni desde TestFlight. La ficha de la App Store que antes existía en `apps.apple.com/app/llm-farm/id6461209867` ya no se muestra. Cualquiera que quiera usar esta app debe compilarla desde el código fuente con Xcode, lo que requiere una cuenta de desarrollador de Apple (gratuita o de pago) y familiaridad con las herramientas de compilación de iOS.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-farm',
        title: '¿Qué es LLM Farm?',
        content: [
          '**LLM Farm es una app móvil y de escritorio que descarga modelos de lenguaje abiertos en formato GGUF y los ejecuta localmente en un iPhone, iPad o Mac, usando una capa en Swift (la biblioteca propia del desarrollador, [llmfarm_core.swift](https://github.com/guinmoon/llmfarm_core.swift)) sobre [ggml](https://github.com/ggerganov/ggml) y llama.cpp como motor de inferencia.** La app en sí tiene [licencia MIT](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE), lo que significa que el código fuente completo es público y se puede inspeccionar, bifurcar (fork) o modificar libremente.',
          'LLM Farm admite una amplia gama de arquitecturas de modelos más allá de la habitual familia LLaMA: el repositorio enumera más de 16 arquitecturas compatibles, entre ellas GPT-2, Starcoder, Falcon, MPT, Bloom, StableLM y RWKV, además de modelos multimodales de visión y lenguaje como LLaVA y Moondream. También incluye herramientas de carga, ajuste fino y fusión de adaptadores LoRA en el dispositivo, un conjunto de funciones más cercano a una herramienta de experimentación local de ML que a una simple app de chat.',
        ],
        note: 'GGUF es un formato de archivo para empaquetar modelos de lenguaje abiertos cuantizados de forma que se ejecuten eficientemente en hardware de consumo mediante motores como llama.cpp y ggml, en lugar de llamar a una API en la nube en cada respuesta.',
      },
      history: {
        id: 'history-and-developer',
        title: '¿Quién creó LLM Farm?',
        content: [
          '**LLM Farm fue creada por el desarrollador Artem Savkin, que publica bajo el nombre de usuario de GitHub [guinmoon](https://github.com/guinmoon), y apareció por primera vez en la App Store el 13 de diciembre de 2023.** El [archivo LICENSE del repositorio](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) nombra a Artem Savkin como titular de los derechos de autor, con fecha de 2023.',
          'El proyecto se mantiene de forma independiente, no por una empresa financiada. El [repositorio de GitHub](https://github.com/guinmoon/LLMFarm) se creó en junio de 2023 y, al momento de este análisis, acumula más de 2.000 estrellas y más de 180 forks, con 46 incidencias abiertas en su rastreador. El desarrollo ha continuado de forma intermitente desde la retirada de la App Store: el historial de commits muestra actualizaciones del motor llama.cpp subyacente hasta diciembre de 2025 y una actualización del README en enero de 2026, aunque la última versión etiquetada del proyecto (la 1.4.3) se publicó en enero de 2025, es decir, los cambios de código han continuado sin una nueva versión empaquetada durante más de un año al momento de este análisis.',
        ],
        items: [
          'Desarrollador: Artem Savkin (GitHub: [guinmoon](https://github.com/guinmoon)), trabajando de forma independiente y no como empresa.',
          'Lanzamiento en la App Store: 13 de diciembre de 2023. Repositorio de GitHub creado: 14 de junio de 2023.',
          'Licencia: MIT, una licencia de código abierto permisiva, de uso, bifurcación y modificación libres. Titular de los derechos según el archivo LICENSE: Artem Savkin, 2023.',
          'Más de 2.000 estrellas en GitHub y más de 180 forks al momento de este análisis, con un rastreador de incidencias activo pero sin resolver (46 incidencias abiertas).',
          'Ritmo de desarrollo: intermitente desde 2025; los commits que actualizan la dependencia de llama.cpp y la documentación continuaron hasta principios de 2026, pero no se ha publicado ninguna versión etiquetada nueva desde la 1.4.3 en enero de 2025.',
        ],
      },
      appStoreStatus: {
        id: 'app-store-status',
        title: '¿Sigue LLM Farm en la App Store?',
        content: [
          '**No. Al momento de este análisis, LLM Farm no se puede descargar desde la Apple App Store, y su canal beta de TestFlight también está cerrado.** La app se publicó originalmente en la App Store el 13 de diciembre de 2023, y Apple la retiró alrededor del 8 de agosto de 2025, según el historial de versiones y commits del proyecto. La ficha de la App Store que antes existía en `apps.apple.com/app/llm-farm/id6461209867` ya no se muestra.',
          'El propio [README de GitHub](https://github.com/guinmoon/LLMFarm) del proyecto indica directamente: "The app is temporarily unavailable in TestFlight and Appstore" (la app está temporalmente no disponible en TestFlight y en la App Store). PromptQuorum no pudo confirmar el motivo de la retirada (el repositorio no indica ninguno) ni si o cuándo la app podría volver a alguno de los dos canales de distribución. Una página de FAQ más antigua del wiki menciona que el desarrollador ofrecía anteriormente compilar manualmente un archivo `.ipa` para los usuarios que le escribieran por correo si TestFlight no estaba disponible; este análisis no pudo confirmar si esa oferta sigue vigente, ya que el README actual no la repite.',
        ],
        items: [
          'Estado en la App Store: retirada desde aproximadamente agosto de 2025, según el historial de commits y versiones del proyecto.',
          'Estado en TestFlight: cerrado, según el README actual de GitHub, al momento de este análisis.',
          'Motivo de la retirada: no indicado por el desarrollador ni por Apple en ninguna fuente que PromptQuorum haya podido localizar.',
          'Única vía confirmada para instalar la app actualmente: compilarla desde el código fuente mediante Xcode, a partir del repositorio público de GitHub.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo conseguir LLM Farm hoy',
        content: [
          '**Como LLM Farm no está actualmente en la App Store, usarla implica compilar el proyecto de código abierto desde el código fuente con Xcode, una barrera notablemente más alta que descargar una app.** Los pasos siguientes siguen las instrucciones de compilación del propio [repositorio de GitHub](https://github.com/guinmoon/LLMFarm) del proyecto.',
        ],
        numberedItems: [
          {
            title: 'Instalar Xcode y una cuenta de desarrollador de Apple',
            whyItMatters: 'Necesitas un Mac con Xcode instalado y una cuenta de desarrollador de Apple gratuita o de pago para compilar y firmar la app para tu propio dispositivo. Este es el principal obstáculo para quienes no son desarrolladores.',
          },
          {
            title: 'Clonar el repositorio de forma recursiva',
            whyItMatters: 'Ejecuta `git clone --recurse-submodules https://github.com/guinmoon/LLMFarm`; el indicador `--recurse-submodules` es necesario porque la biblioteca de inferencia subyacente `llmfarm_core` se trasladó a un repositorio separado y se incorpora como submódulo.',
          },
          {
            title: 'Abrir el proyecto en Xcode y compilarlo para tu dispositivo',
            whyItMatters: 'Abre el archivo de proyecto de Xcode, selecciona tu dispositivo o el destino Mac, configura tu propio equipo de firma de desarrollador y compila. Esto produce una app que puedes ejecutar en tu propio hardware, pero no una que puedas distribuir a otras personas a través de la App Store.',
          },
          {
            title: 'Descargar un modelo GGUF y cargarlo',
            whyItMatters: 'Una vez que la app esté en funcionamiento, añade un archivo de modelo GGUF (de Hugging Face u otra fuente) y cárgalo desde la pantalla de gestión de modelos de la app; luego empieza a chatear por completo en el dispositivo.',
          },
        ],
        note: 'Este proceso asume familiaridad básica con Xcode y la firma de código de iOS. Los usuarios que no se sientan cómodos compilando una app desde el código fuente deberían considerar una alternativa instalable con un solo toque, como PocketPal AI o Private LLM; consulta la sección de alternativas más abajo.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: '¿Qué modelos admite LLM Farm?',
        itemHeadings: true,
        columns: ['Familia de modelos', 'Categoría', 'Notas'],
        rows: [
          {
            'Familia de modelos': 'LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek, Yi, StableLM',
            'Categoría': 'Generación de texto',
            'Notas': 'Se cargan como archivos GGUF mediante el motor de la app basado en ggml/llama.cpp',
          },
          {
            'Familia de modelos': 'GPT-2, Starcoder, Falcon, MPT, Bloom, RWKV, Mamba, GPTNeoX, PLaMo',
            'Categoría': 'Generación de texto (arquitecturas antiguas o de nicho)',
            'Notas': 'Cobertura de arquitecturas más amplia que la mayoría de las apps móviles competidoras',
          },
          {
            'Familia de modelos': 'LLaVA (1.5/1.6), BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL, Moondream',
            'Categoría': 'Multimodal (visión y lenguaje)',
            'Notas': 'Compatibilidad con entradas de imagen más texto, según el README del proyecto',
          },
          {
            'Familia de modelos': 'Cualquier otro modelo GGUF o GGJTv3',
            'Categoría': 'Importación personalizada',
            'Notas': 'GGUF requiere la extensión `.gguf`; el formato GGJTv3, más antiguo, requiere `.bin`, según el wiki del proyecto',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: '¿Está LLM Farm disponible en iPhone, iPad y Mac?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidad', 'Notas'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Disponibilidad': 'Requiere compilarla mediante Xcode; no se puede instalar desde la App Store al momento de este análisis',
            'Notas': 'iOS 16 como mínimo, según el README del proyecto; se usa aceleración Metal para la inferencia en el dispositivo.',
          },
          {
            'Plataforma': 'Mac',
            'Disponibilidad': 'Requiere compilarla mediante Xcode',
            'Notas': 'macOS 13 como mínimo, según el README del proyecto; hay compatibilidad nativa con macOS junto a iOS/iPadOS en la misma base de código.',
          },
          {
            'Plataforma': 'Android / Windows / Linux',
            'Disponibilidad': 'No compatible',
            'Notas': 'LLM Farm no tiene versión para Android, Windows ni Linux. Los usuarios de Android deberían considerar RikkaHub, ChatterUI o Maid.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: '¿Cuánto cuesta LLM Farm?',
        content: [
          '**LLM Farm en sí es gratuita y de código abierto bajo licencia MIT: no hay precio de compra ni suscripción por el código o la función de chat de la app.** PromptQuorum no encontró evidencia de compras dentro de la app, un nivel premium ni un mercado de pago dentro de LLM Farm en el repositorio, el wiki ni el texto histórico de la ficha de la App Store revisados para este artículo.',
          'El coste real de usar LLM Farm hoy es indirecto: se necesita un Mac para compilar la app (Xcode solo existe en macOS) y, según el tipo de cuenta de desarrollador de Apple, o bien no hay coste alguno (firma con equipo personal gratuito, limitada a los propios dispositivos con un certificado que se renueva aproximadamente cada siete días), o bien la cuota del [Apple Developer Program](https://developer.apple.com/programs/) para un certificado de firma de mayor duración. Más allá de eso, los archivos de modelos GGUF descargados ocupan espacio de almacenamiento, típicamente varios gigabytes por modelo, como con cualquier otra app de LLM local.',
        ],
        items: [
          '**La app en sí:** Gratuita, de código abierto con licencia MIT; no se encontró precio de compra por el código ni por sus funciones.',
          '**Compras dentro de la app:** No se encontró ninguna en las fuentes revisadas para este artículo.',
          '**Herramientas de compilación:** Xcode es gratuito, pero requiere un Mac; un ID de Apple gratuito puede firmar compilaciones para uso personal con un certificado que hay que renovar aproximadamente cada siete días, mientras que una membresía de pago del Apple Developer Program evita ese ciclo de renovación.',
          '**Coste de almacenamiento:** No monetario, pero real: cada archivo de modelo GGUF descargado ocupa espacio de almacenamiento, típicamente varios gigabytes por modelo.',
        ],
      },
      features: {
        id: 'key-features',
        title: '¿Qué funciones tiene LLM Farm?',
        content: [
          '**Más allá de ejecutar modelos GGUF localmente, el conjunto de funciones de LLM Farm se inclina, según su README y su wiki de GitHub, más hacia una herramienta de experimentación local de ML que hacia un simple cliente de chat.** Estas incluyen:',
        ],
        items: [
          '**Amplia compatibilidad de arquitecturas.** Más de 16 arquitecturas de modelos, incluidas varias (Starcoder, Falcon, MPT, Bloom, RWKV, GPTNeoX) que otras apps móviles de IA local no suelen admitir.',
          '**Modelos multimodales (visión y lenguaje).** La compatibilidad con LLaVA, BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL y Moondream permite a la app procesar indicaciones de imagen más texto, según el README.',
          '**Varios métodos de muestreo.** Temperature, Tail-Free Sampling (TFS), Locally Typical Sampling, Mirostat, Greedy y muestreo restringido por gramática figuran entre las opciones compatibles.',
          '**Salida restringida por gramática.** El muestreo por gramática permite restringir la salida de un modelo a una estructura definida (como JSON válido), útil para casos de uso de salida estructurada.',
          '**Plantillas de configuración de modelo y restauración de contexto.** Configuraciones guardadas por modelo, y la posibilidad de restaurar el estado de contexto de una conversación en lugar de reprocesarlo desde cero.',
          '**Integración con Atajos de Apple.** La app se puede activar desde la app de automatización Atajos de Apple, según el README.',
          '**Generación aumentada por recuperación (RAG) básica.** El README menciona capacidad de RAG, aunque la documentación del proyecto no detalla, en el material revisado para este artículo, su método exacto de recuperación ni los formatos de documento compatibles.',
        ],
        note: 'La disponibilidad de funciones puede cambiar entre compilaciones, y como la app actualmente no se puede instalar desde la App Store, la versión que compiles por tu cuenta puede no coincidir con todas las funciones descritas en textos antiguos de la ficha de la App Store. Consulta el [repositorio de GitHub](https://github.com/guinmoon/LLMFarm) y su historial de commits para saber qué hay presente en el código fuente actual.',
      },
      loraFinetuning: {
        id: 'lora-finetuning',
        title: 'Ajuste fino y fusión de LoRA en el dispositivo',
        content: [
          '**LLM Farm incluye herramientas de LoRA (Low-Rank Adaptation) en el dispositivo: carga de adaptadores, ajuste fino de un modelo base y fusión de un adaptador entrenado de nuevo en el modelo base, una combinación que la mayoría de las apps móviles de IA local no ofrecen en absoluto.** Según la [documentación del wiki](https://github.com/guinmoon/LLMFarm/wiki/lora) del proyecto:',
          'Los adaptadores LoRA se pueden cargar colocando archivos de adaptador en un directorio `lora_adapters`, ya sea un único adaptador a través de la interfaz de ajustes de chat, o varios adaptadores configurados con parámetros de escala individuales en un archivo de configuración. El ajuste fino está disponible directamente en la app en Settings > FineTune, aunque el wiki señala que esto consume muchos recursos en hardware móvil: en iOS, la documentación indica que en la práctica se limita a modelos de unos 3.000 millones de parámetros con ajustes mínimos. Una función independiente, Settings > Merge Lora, permite fusionar un adaptador entrenado con su modelo base y exportarlo, y el wiki recomienda cuantización Q4_K o inferior para un rendimiento práctico en iOS.',
        ],
        items: [
          'Carga de uno o varios adaptadores LoRA, cada uno con su propio parámetro de escala configurable.',
          'Ajuste fino de un modelo base en el dispositivo mediante Settings > FineTune; según el wiki, limitado en la práctica a unos 3.000 millones de parámetros con ajustes mínimos en iOS.',
          'Fusión de un adaptador LoRA entrenado con su modelo base y exportación mediante Settings > Merge Lora.',
          'Compensación: el wiki indica que no se puede usar la carga mediante archivos mapeados en memoria (mmap) mientras hay un adaptador LoRA conectado, lo que aumenta el uso de RAM en comparación con ejecutar solo el modelo base.',
        ],
        note: 'Este análisis no realizó un ajuste fino independiente de ningún modelo en LLM Farm para verificar la velocidad de entrenamiento ni la calidad de salida; la descripción anterior resume lo que la propia documentación del proyecto indica sobre la función, no un benchmark de PromptQuorum.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '¿Qué hardware necesitas para LLM Farm?',
        content: [
          '**El modelo que elijas, no la app en sí, determina el umbral real de hardware: como orientación general para LLM locales, un modelo cuantizado de 2 a 4 mil millones de parámetros necesita aproximadamente 3-4 GB de RAM libre, mientras que un modelo de 7 a 8 mil millones de parámetros necesita 8 GB o más.** Esta es una orientación estándar de hardware para GGUF, no un benchmark específico de LLM Farm; PromptQuorum no ha medido de forma independiente el uso exacto de memoria de LLM Farm por modelo.',
          'En iPhone, iPad y Mac, LLM Farm usa aceleración Metal para la inferencia, lo que generalmente mejora la velocidad frente a la ejecución solo en CPU en hardware Apple Silicon. La app requiere como mínimo iOS 16 o macOS 13, según el README del proyecto, por lo que los dispositivos más antiguos que no puedan ejecutar esas versiones de sistema operativo no podrán usar la app, independientemente de la RAM.',
        ],
        items: [
          'Modelos pequeños (2-4 mil millones de parámetros, cuantizados): usables en la mayoría de los iPhone y Mac recientes con 4 GB+ de RAM libre.',
          'Modelos medianos (7-8 mil millones de parámetros, cuantizados): se recomiendan 8 GB o más de RAM del dispositivo para una respuesta aceptable.',
          'Ajuste fino LoRA en concreto: según el wiki del proyecto, limitado en la práctica a unos 3 mil millones de parámetros en iOS, con ajustes mínimos, por las limitaciones de cómputo y memoria en el dispositivo.',
          'Sistema operativo mínimo: iOS 16 o macOS 13, según el README de GitHub.',
          'Almacenamiento: reservar varios gigabytes de espacio libre por cada archivo de modelo GGUF descargado.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'A quién le sirve LLM Farm',
        items: [
          '**Desarrolladores que se sientan cómodos compilando una app desde el código fuente en Xcode.** Como la App Store y TestFlight están actualmente cerrados, este es un requisito estricto, no un extra deseable.',
          '**Usuarios que quieren específicamente ajuste fino o fusión de adaptadores LoRA en el dispositivo.** La mayoría de las apps móviles de IA local competidoras no ofrecen en absoluto este conjunto de funciones.',
          '**Usuarios que quieren la gama más amplia de arquitecturas de modelos compatibles en un dispositivo móvil.** Más de dieciséis arquitecturas, incluidas varias de nicho (RWKV, Mamba, GPTNeoX), es inusualmente amplio para una app de teléfono.',
          '**Usuarios que quieren inspeccionar o modificar el código ellos mismos.** La licencia MIT permite bifurcar y modificar, y la base de código es una referencia útil para entender una capa en Swift sobre llama.cpp/ggml.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'A quién no le sirve LLM Farm',
        items: [
          '**A cualquiera que no pueda o no quiera compilar una app de iOS/macOS desde el código fuente.** Este es el motivo principal para evitar LLM Farm por ahora: no hay instalación desde la App Store ni acceso confirmado a TestFlight al momento de este análisis.',
          '**A usuarios que necesiten compatibilidad con Android, Windows o Linux.** LLM Farm es exclusiva de Apple; los usuarios de Android deberían considerar RikkaHub, ChatterUI o Maid, y los usuarios de escritorio sin Mac, Ollama, LM Studio o Jan AI.',
          '**A usuarios que quieran una app garantizadamente instalable hoy.** Tanto PocketPal AI como Private LLM se pueden instalar de inmediato desde la App Store sin compilar nada.',
          '**A usuarios que esperen versiones frecuentes y numeradas.** La última versión etiquetada del proyecto se publicó en enero de 2025; aunque los commits han continuado de forma intermitente desde entonces, no ha salido ninguna versión empaquetada nueva en más de un año al momento de este análisis.',
          '**A usuarios que necesiten soporte garantizado o una hoja de ruta definida.** LLM Farm la mantiene de forma independiente un solo desarrollador, según el historial de su repositorio, sin ningún compromiso declarado de restablecer la disponibilidad en la App Store.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'LLM Farm frente a alternativas',
        itemHeadings: true,
        columns: ['App', 'Licencia / coste', 'Plataformas', 'Vía de instalación actual'],
        rows: [
          {
            'App': 'LLM Farm',
            'Licencia / coste': 'Gratuita, código abierto (MIT)',
            'Plataformas': 'iPhone/iPad, Mac',
            'Vía de instalación actual': 'Solo compilación mediante Xcode; App Store y TestFlight cerrados',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Licencia / coste': 'Gratuita, código abierto (MIT)',
            'Plataformas': 'iPhone/iPad, Android',
            'Vía de instalación actual': 'App Store y Google Play, instalación directa',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Licencia / coste': 'De pago, compra única; código cerrado',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Vía de instalación actual': 'App Store, instalación directa',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Licencia / coste': 'Gratuita con nivel de pago; código cerrado',
            'Plataformas': 'iPhone/iPad/Mac (solo Apple)',
            'Vía de instalación actual': 'App Store, instalación directa',
          },
          {
            'App': 'Layla',
            'Licencia / coste': 'Niveles gratuitos y de pago; código cerrado',
            'Plataformas': 'Android e iOS, según [layla-network.ai](https://www.layla-network.ai)',
            'Vía de instalación actual': 'Comprobar la disponibilidad actual en [layla-network.ai](https://www.layla-network.ai) antes de asumir que existe un nivel gratuito',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Licencia / coste': 'Gratuita, código abierto',
            'Plataformas': 'Android',
            'Vía de instalación actual': 'Google Play o compilación desde el código fuente',
          },
          {
            'App': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'Licencia / coste': 'Gratuita, código abierto (AGPL-3.0)',
            'Plataformas': 'Android',
            'Vía de instalación actual': 'Compilación o instalación de un APK de una versión publicada',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Licencia / coste': 'Gratuita, código abierto',
            'Plataformas': 'Android',
            'Vía de instalación actual': 'Versiones de GitHub o compilación desde el código fuente',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Licencia / coste': 'Gratuita, código abierto',
            'Plataformas': 'Android; iOS aún no disponible al momento de este análisis',
            'Vía de instalación actual': 'Google Play o el sitio de AnythingLLM Mobile',
          },
        ],
        note: 'El estado de disponibilidad cambia con frecuencia en esta categoría; esta tabla refleja lo que PromptQuorum pudo confirmar en septiembre de 2026. Comprueba la página de cada proyecto antes de dar por hecho que un enlace sigue vigente.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Sigue existiendo LLM Farm?',
            a: 'El proyecto de código abierto sigue activo en GitHub, pero la app actualmente no se puede instalar desde la App Store ni desde TestFlight. Apple retiró la ficha de la App Store hacia agosto de 2025, y el README del proyecto sigue describiendo ambos canales como "temporalmente no disponibles" al momento de este análisis. La única vía actual es compilarla desde el código fuente con Xcode.',
          },
          {
            q: '¿Por qué se retiró LLM Farm de la App Store?',
            a: 'PromptQuorum no encontró ningún motivo indicado por el desarrollador ni por Apple en las fuentes revisadas para este artículo. El README de GitHub del proyecto reconoce la retirada sin explicar su causa.',
          },
          {
            q: '¿Es gratuita LLM Farm?',
            a: 'Sí. LLM Farm es gratuita y de código abierto bajo licencia MIT, y PromptQuorum no encontró evidencia de compras dentro de la app ni de un nivel de pago en las fuentes revisadas. El coste práctico es un Mac y Xcode para compilarla, además de una cuenta de desarrollador de Apple.',
          },
          {
            q: '¿Quién desarrolló LLM Farm?',
            a: 'LLM Farm fue creada por el desarrollador Artem Savkin, que publica bajo el nombre de usuario de GitHub [guinmoon](https://github.com/guinmoon). Se mantiene de forma independiente, no por una empresa.',
          },
          {
            q: '¿Es LLM Farm de código abierto?',
            a: 'Sí, el código fuente completo está publicado en [GitHub](https://github.com/guinmoon/LLMFarm) bajo licencia MIT, una licencia permisiva que permite el uso, la modificación y la redistribución libres.',
          },
          {
            q: '¿Puede LLM Farm hacer ajuste fino de modelos con LoRA?',
            a: 'Sí, según la documentación del wiki del proyecto. LLM Farm admite cargar adaptadores LoRA, hacer ajuste fino de un modelo base en el dispositivo (limitado en la práctica a unos 3.000 millones de parámetros en iOS según el wiki), y fusionar un adaptador entrenado de nuevo en el modelo base. La mayoría de las apps móviles de IA local competidoras no ofrecen esta función.',
          },
          {
            q: '¿Funciona LLM Farm en Android?',
            a: 'No. LLM Farm solo admite iOS (16+) y macOS (13+), según su README de GitHub. Los usuarios de Android deberían considerar RikkaHub, ChatterUI o Maid.',
          },
          {
            q: '¿Cómo instalo LLM Farm sin la App Store?',
            a: 'Clona el [repositorio de GitHub](https://github.com/guinmoon/LLMFarm) de forma recursiva con `git clone --recurse-submodules`, abre el proyecto en Xcode, fírmalo con tu propia cuenta de desarrollador de Apple y compílalo para tu dispositivo. Esto requiere un Mac y familiaridad básica con Xcode y la firma de código de iOS.',
          },
          {
            q: '¿Cómo se compara LLM Farm con PocketPal AI o Private LLM?',
            a: 'LLM Farm y PocketPal AI son ambas gratuitas y con licencia MIT, pero LLM Farm actualmente requiere compilarla desde el código fuente, mientras que PocketPal AI se instala directamente desde la App Store y Google Play. LLM Farm admite más arquitecturas de modelos e incluye ajuste fino LoRA en el dispositivo, algo que ni PocketPal AI ni Private LLM (de pago, código cerrado) ofrecen. Elige LLM Farm solo si te sientes cómodo compilando una app tú mismo; elige PocketPal AI o Private LLM si quieres algo instalable hoy mismo. Consulta la tabla comparativa anterior para más detalles.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'LLM Farm sigue siendo uno de los proyectos de código abierto de IA local técnicamente más capaces para dispositivos Apple: su cobertura de arquitecturas y sus herramientas de ajuste fino y fusión LoRA en el dispositivo van más allá de la mayoría de las apps móviles de esta categoría, incluidas PocketPal AI y Private LLM. Pero al momento de este análisis, no es una app que la mayoría de la gente pueda instalar realmente: Apple la retiró de la App Store en agosto de 2025, el acceso a TestFlight está cerrado según el README del proyecto, y la única vía confirmada para ejecutarla es compilar uno mismo el código abierto en Xcode. Es un compromiso razonable para un desarrollador que quiera inspeccionar el código, experimentar con ajuste fino LoRA o ejecutar una arquitectura de modelo poco habitual. No es una petición razonable para alguien que simplemente quiere descargar una app y chatear en privado hoy mismo; para eso, PocketPal AI (gratuita, código abierto, instalación directa) o Private LLM (de pago, pulida, instalación directa) son las opciones prácticas que se tratan en la sección de alternativas anterior.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[LLM Farm en GitHub](https://github.com/guinmoon/LLMFarm) — código fuente, licencia (MIT), README, historial de commits y número de estrellas/forks citados en este análisis.',
          '[Archivo LICENSE de LLM Farm](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) — texto de la licencia MIT y titular de los derechos de autor (Artem Savkin, 2023).',
          '[Wiki de LLM Farm: FAQ](https://github.com/guinmoon/LLMFarm/wiki/FAQ) — notas de instalación y detalles de los formatos de archivo compatibles.',
          '[Wiki de LLM Farm: LoRA](https://github.com/guinmoon/LLMFarm/wiki/lora) — documentación sobre carga, ajuste fino y fusión de LoRA.',
          '[llmfarm_core.swift en GitHub](https://github.com/guinmoon/llmfarm_core.swift) — la biblioteca de inferencia subyacente citada en este análisis.',
          '[Historial de versiones de GitHub para guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm/releases) — última versión etiquetada (1.4.3, enero de 2025) citada en este análisis.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — el comparativo de iOS, con alternativas instalables a LLM Farm.',
          '[Análisis de PocketPal AI](/power-local-llm/pocketpal-ai-review) — una alternativa gratuita, de código abierto e instalable directamente para iPhone, iPad y Android.',
          '[Análisis de Private LLM](/power-local-llm/private-llm-review) — una alternativa de pago, de código cerrado, exclusiva de Apple, con un amplio catálogo de modelos.',
          '[Análisis de Enclave AI](/power-local-llm/enclave-ai-review) — una alternativa exclusiva de Apple con automatización de Siri y Atajos.',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — una alternativa de pago, de código cerrado, en cinco plataformas, con una biblioteca de modelos seleccionada.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Farm, análisis (2026): app GGUF de código abierto, fuera de la App Store',
      description:
        'Análisis de LLM Farm: la app GGUF de código abierto para iOS/macOS, con licencia MIT, con ajuste fino LoRA en el dispositivo. Actualmente fuera de la App Store: qué significa y cómo compilarla.',
      url: 'https://promptquorum.com/power-local-llm/llm-farm-review',
      inLanguage: 'es',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: 'Usuarios de iOS y macOS con conocimientos técnicos que evalúan apps de IA local de código abierto' },
      about: [
        { '@type': 'Thing', name: 'LLM Farm' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Ajuste fino LoRA' },
        { '@type': 'Thing', name: 'LLM local' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llm-farm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLM Farm, análisis (2026)', item: 'https://promptquorum.com/power-local-llm/llm-farm-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-farm-review-hero-ja.webp',
    title: 'LLM Farmレビュー(2026年):オープンソースのGGUFアプリ、App Storeからは入手不可',
    seoTitle: 'LLM Farmレビュー2026:オープンソースのiOS向けGGUFランタイム',
    intro:
      'LLM Farmは、無料でMITライセンスのオープンソースアプリで、iOSとmacOS上でGGUF形式の言語モデルを端末上で直接実行します。内部では[ggml](https://github.com/ggerganov/ggml)とllama.cppをSwiftでラップした独自エンジンを使用しています。開発者はArtem Savkin氏(GitHubアカウント名[guinmoon](https://github.com/guinmoon))で、2023年12月に初めてApp Storeで公開されました。本レビュー時点では、LLM FarmはApp StoreからもTestFlightからもインストールできません。Appleは2025年8月にApp Storeの掲載を削除し、プロジェクトの[GitHubのREADME](https://github.com/guinmoon/LLMFarm)は今も両チャネルを「一時的に利用できません」と記載しています。本レビューでは、アプリの機能、端末上でのLoRAファインチューニングとマージ機能(ほとんどのモバイルローカルAIアプリにはない機能)、現在ソースコードからビルドする方法、そして何より、自分でiOSアプリをビルドすることに抵抗がある人には向かない理由を解説します。',
    metaDescription:
      'LLM Farmレビュー:端末上でLoRAファインチューニングができる、オープンソースでMITライセンスのiOS/macOS向けGGUFアプリ。現在App Storeにはなく、その意味とビルド方法を解説。',
    twitterDescription:
      'LLM Farmレビュー2026:端末上のLoRAツールを備えたオープンソースのiOS/macOS向けGGUFランタイム。App Storeから削除され、現在はソースコードからのビルドのみ。',
    audience:
      'オープンソースのGGUFランタイムとLoRAファインチューニングを求め、自分でアプリをソースコードからビルドすることをいとわない、技術に強いiOS・macOSユーザー。',
    readTime: '読了時間: 11分',
    educationalLevel: 'Advanced',
    primaryTerm: 'LLM Farm レビュー',
    targetKeywords: [
      'llm farm レビュー',
      'llmfarm ios',
      'llm farm app store',
      'llm farm guinmoon',
      'llm farm lora',
      'iphoneでgguf モデルを実行',
      'オープンソース ios ローカルai アプリ',
      'llm farm 代替',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'Phi', 'LLaMA', 'Mixtral', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**LLM Farmは無料でオープンソース(MITライセンス)のiOS・macOSアプリで、GGUF形式の言語モデルを完全に端末上で実行しますが、現在はApp StoreやTestFlightからインストールできません。** 開発者のArtem Savkin氏(GitHub名[guinmoon](https://github.com/guinmoon))が2023年12月に初めてリリースし、[GitHubリポジトリ](https://github.com/guinmoon/LLMFarm)は2,000以上のスターと180以上のフォークを獲得しています。Appleは2025年8月にApp Storeの掲載を削除し、本レビュー時点でもREADMEはApp StoreとTestFlightの両方を「一時的に利用できません」としています。ソースコードは公開されたままMITライセンスなので、Xcodeを使ってビルド・インストールすることは可能ですが、それにはApple Developerアカウントと、ソースコードからiOSアプリをビルドする知識が必要です。ほとんどの人にとって、もはやワンタップでインストールできるアプリではありません。',
    quickAnswerTop: {
      ja: {
        question: 'LLM Farmはまだインストールできますか?価値はありますか?',
        answer:
          'App Storeからはできません。Appleは2025年8月に掲載を削除し、プロジェクトのGitHub README自体が今もApp StoreとTestFlightの両方を「一時的に利用できません」としています。現在唯一の方法は、Xcodeでオープンソースのアプリをソースコードからビルドすることで、これにはApple Developerアカウントと基本的なiOSビルドの経験が必要です。それができるなら、LLM Farmは本物のLoRAファインチューニングとマージ機能を備えた数少ないモバイルアプリの一つです。できないなら、PocketPal AIやPrivate LLMが今すぐ端末にインストールできる代替アプリです。',
        bullets: [
          'MITライセンスの無料オープンソースで、開発者はArtem Savkin氏([guinmoon](https://github.com/guinmoon/LLMFarm)、GitHub上)。',
          '現在App StoreやTestFlightからインストールできません。Appleは2025年8月にストアから削除し、GitHub READMEは本レビュー時点でも「一時的に利用できません」というステータスを確認しています。',
          '現在唯一のインストール方法はXcodeによるソースコードからのビルドで、Apple Developerアカウントが必要です。',
          '端末上でのLoRAアダプターの読み込み、ファインチューニング、マージに対応しており、これはほとんどの競合アプリにない機能です。',
          '独自のggml/llama.cppベースのエンジンで、LLaMA、Gemma、Qwen、Phi、Mixtral、DeepSeekなど16以上のアーキテクチャのGGUFモデルを実行できます。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'LLM Farmとは?', anchor: 'what-is-llm-farm' },
      { label: 'LLM Farmを開発したのは誰?', anchor: 'history-and-developer' },
      { label: 'LLM FarmはまだApp Storeにありますか?', anchor: 'app-store-status' },
      { label: '今LLM Farmを入手する方法', anchor: 'getting-started' },
      { label: 'LLM Farmが対応するモデルは?', anchor: 'models-supported' },
      { label: 'LLM FarmはiPhone、iPad、Macで使えますか?', anchor: 'platform-availability' },
      { label: 'LLM Farmの料金は?', anchor: 'pricing' },
      { label: 'LLM Farmの機能は?', anchor: 'key-features' },
      { label: '端末上でのLoRAファインチューニングとマージ', anchor: 'lora-finetuning' },
      { label: '必要なハードウェアは?', anchor: 'hardware-requirements' },
      { label: 'LLM Farmが向いている人', anchor: 'who-should-use' },
      { label: 'LLM Farmが向いていない人', anchor: 'who-should-not-use' },
      { label: 'LLM Farmと代替アプリの比較', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LLM Farmは、開発者Artem Savkin氏によるMITライセンスの無料オープンソースのiOS・macOSアプリで、GGUF言語モデルを端末上で実行しますが、現在はApp StoreにもTestFlightにもなく、唯一の入手方法は自分でソースコードからビルドすることです。',
          },
          {
            type: 'plain-terms',
            text: 'クラウドサーバーを使わず、自分のiPhoneやMac上で完全に動作するAIモデルとチャットできるアプリで、ソースコードも公開されていますが、現在はApp Storeから通常の方法でダウンロードすることができず、AppleのXcodeという開発ツールを使って自分でビルドする必要があります。',
          },
        ],
        items: [
          '無料でオープンソース(MITライセンス)。ソースコードと課題トラッカーは[GitHub](https://github.com/guinmoon/LLMFarm)で公開。',
          '開発者はArtem Savkin氏で、GitHubアカウント名は[guinmoon](https://github.com/guinmoon)。2023年12月にApp Storeで初公開。',
          'Appleは2025年8月にApp Storeの掲載を削除。プロジェクトのREADMEは今もApp StoreとTestFlightの両方を「一時的に利用できません」としている。',
          '独自のggml/llama.cppベースのエンジンで、LLaMA、Gemma、Qwen、Phi、Mixtral、DeepSeekを含む16以上のモデルアーキテクチャのGGUFモデルを実行。',
          '端末上でのLoRAアダプター読み込み、ファインチューニング、マージ機能を内蔵する数少ないモバイルローカルAIアプリの一つ。',
          'iOS(16以降)とmacOS(13以降)のみ。Android、Windows、Linux版はなし。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、公開されている[GitHubリポジトリ](https://github.com/guinmoon/LLMFarm)(README、Wiki FAQ、ライセンスファイル、コミットとリリース履歴)およびApp Storeの掲載状況を2026年9月に確認して作成しています。PromptQuorumは本レビューのためにLLM Farmの独自の実機テストは行っていません。以下のハードウェア数値はローカルLLM全般の目安であり、本アプリ固有の実測値ではありません。',
          },
          {
            type: 'warning',
            text: '本レビュー時点で、LLM FarmはApp StoreからもTestFlightからもインストールできません。以前存在した`apps.apple.com/app/llm-farm/id6461209867`のApp Storeページは表示されなくなっています。このアプリを使いたい場合は、Xcodeを使ってソースコードからビルドする必要があり、無料または有料のApple Developerアカウントと、iOSのビルドツールへの習熟が必要です。',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-farm',
        title: 'LLM Farmとは?',
        content: [
          '**LLM Farmは、GGUF形式のオープンウェイト言語モデルをダウンロードし、iPhone、iPad、Mac上でローカルに実行するモバイル・デスクトップアプリで、開発者独自のSwiftラッパー([llmfarm_core.swift](https://github.com/guinmoon/llmfarm_core.swift)ライブラリ)を通じて[ggml](https://github.com/ggerganov/ggml)とllama.cppを推論エンジンとして使用します。** アプリ自体は[MITライセンス](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE)であり、ソースコード全体が公開されていて、自由に閲覧・フォーク・改変できます。',
          'LLM Farmは、一般的なLLaMA系モデル以外にも幅広いモデルアーキテクチャに対応しています。リポジトリには16以上の対応アーキテクチャが記載されており、GPT-2、Starcoder、Falcon、MPT、Bloom、StableLM、RWKVに加え、LLaVAやMoondreamなどのマルチモーダル(視覚言語)モデルも含まれます。また、端末上でのLoRAの読み込み、ファインチューニング、アダプターのマージ機能も備えており、単純なチャットアプリというよりローカルML実験ツールに近い機能構成です。',
        ],
        note: 'GGUFは、量子化されたオープンウェイト言語モデルをパッケージ化するファイル形式で、応答のたびにクラウドAPIを呼び出す代わりに、llama.cppやggmlなどのランタイムを通じて一般的なハードウェア上で効率的に実行できるようにします。',
      },
      history: {
        id: 'history-and-developer',
        title: 'LLM Farmを開発したのは誰?',
        content: [
          '**LLM Farmは、GitHub上で[guinmoon](https://github.com/guinmoon)として公開している開発者Artem Savkin氏によって作られ、2023年12月13日に初めてApp Storeに登場しました。** [リポジトリのLICENSEファイル](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE)には、著作権者としてArtem Savkin氏、2023年と記載されています。',
          'このプロジェクトは、資金提供を受けた企業ではなく独立して維持されています。[GitHubリポジトリ](https://github.com/guinmoon/LLMFarm)は2023年6月に作成され、本レビュー時点で2,000以上のスターと180以上のフォークを獲得し、課題トラッカーには46件の未解決issueがあります。開発はApp Storeからの削除後も断続的に続いており、コミット履歴には2025年12月まで続くllama.cppエンジンの更新や2026年1月のREADME更新が見られますが、プロジェクトの最後にタグ付けされたリリース(バージョン1.4.3)は2025年1月に公開されており、本レビュー時点で1年以上、新しいパッケージ化されたリリースなしでコードの変更が続いていることになります。',
        ],
        items: [
          '開発者:Artem Savkin氏(GitHub:[guinmoon](https://github.com/guinmoon))。企業ではなく個人で開発。',
          'App Storeでの公開:2023年12月13日。GitHubリポジトリの作成:2023年6月14日。',
          'ライセンス:MIT — 自由な利用、フォーク、改変が可能な寛容型オープンソースライセンス。LICENSEファイルによる著作権者:Artem Savkin氏、2023年。',
          '本レビュー時点で2,000以上のGitHubスターと180以上のフォーク。課題トラッカーは活発だが未解決(46件のオープンissue)。',
          '開発ペース:2025年以降は断続的。llama.cpp依存関係とドキュメントを更新するコミットは2026年初頭まで続いたが、2025年1月のバージョン1.4.3以降、新しいタグ付きリリースは出ていない。',
        ],
      },
      appStoreStatus: {
        id: 'app-store-status',
        title: 'LLM FarmはまだApp Storeにありますか?',
        content: [
          '**いいえ。本レビュー時点で、LLM FarmはApple App Storeからダウンロードできず、TestFlightのベータ配信も閉鎖されています。** アプリは元々2023年12月13日にApp Storeで公開され、プロジェクトのリリースおよびコミット履歴によると、2025年8月8日前後にAppleによって削除されました。以前存在した`apps.apple.com/app/llm-farm/id6461209867`のApp Storeページは表示されなくなっています。',
          'プロジェクトの[GitHub README](https://github.com/guinmoon/LLMFarm)には直接、「The app is temporarily unavailable in TestFlight and Appstore」(アプリはTestFlightとApp Storeで一時的に利用できません)と記載されています。PromptQuorumは削除理由を確認できず(リポジトリにも理由の記載はありません)、いずれかの配信チャネルへの復帰時期や可能性についても確認できませんでした。古いWiki FAQページには、TestFlightにアクセスできない場合、メールで連絡した利用者向けに開発者が手動で`.ipa`ファイルをビルドすると以前提案していたことが記載されていますが、現在のREADMEにはこの記載がなく、この提案が今も有効かどうかは本レビューでは確認できませんでした。',
        ],
        items: [
          'App Storeでの状況:プロジェクトのコミットおよびリリース履歴によると、2025年8月頃から掲載削除。',
          'TestFlightの状況:現在のGitHub READMEによると、本レビュー時点で閉鎖中。',
          '削除理由:開発者・Appleいずれからも、PromptQuorumが確認できたソースには記載なし。',
          '現在唯一確認できるインストール方法:公開されているGitHubリポジトリからXcodeでソースコードをビルドすること。',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: '今LLM Farmを入手する方法',
        content: [
          '**LLM Farmは現在App Storeにないため、利用するにはオープンソースプロジェクトをXcodeでソースコードからビルドする必要があり、これはアプリをダウンロードするよりも明らかにハードルが高い作業です。** 以下の手順は、プロジェクト自身の[GitHubリポジトリ](https://github.com/guinmoon/LLMFarm)のビルド手順に沿っています。',
        ],
        numberedItems: [
          {
            title: 'XcodeとApple Developerアカウントを用意する',
            whyItMatters: '自分の端末用にアプリをコンパイル・署名するには、Xcodeがインストールされたmacと、無料または有料のApple Developerアカウントが必要です。これが開発者以外にとって最大の障壁です。',
          },
          {
            title: 'リポジトリを再帰的にクローンする',
            whyItMatters: '`git clone --recurse-submodules https://github.com/guinmoon/LLMFarm`を実行します。`--recurse-submodules`オプションが必要なのは、基盤となる推論ライブラリ`llmfarm_core`が別リポジトリに移管され、サブモジュールとして取り込まれているためです。',
          },
          {
            title: 'Xcodeでプロジェクトを開き、端末向けにビルドする',
            whyItMatters: 'Xcodeのプロジェクトファイルを開き、自分の端末またはMacターゲットを選択し、自分の開発者署名チームを設定してビルドします。これで自分のハードウェア上で動くアプリが得られますが、App Store経由で他人に配布できるものではありません。',
          },
          {
            title: 'GGUFモデルをダウンロードして読み込む',
            whyItMatters: 'アプリが動作したら、Hugging Faceなどからダウンロードしたモデル(GGUF形式)を追加し、アプリのモデル管理画面から読み込みます。以降のチャットはすべて端末上で完結します。',
          },
        ],
        note: 'この手順は、XcodeとiOSのコード署名について基本的な知識があることを前提としています。ソースコードからアプリをビルドすることに抵抗がある方は、代わりにPocketPal AIやPrivate LLMなど、すぐにインストールできる代替アプリを検討してください。詳しくは下記の代替アプリの節を参照してください。',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'LLM Farmが対応するモデルは?',
        itemHeadings: true,
        columns: ['モデルファミリー', 'カテゴリー', '補足'],
        rows: [
          {
            'モデルファミリー': 'LLaMA、Gemma、Qwen、Phi、Mixtral、DeepSeek、Yi、StableLM',
            'カテゴリー': 'テキスト生成',
            '補足': 'アプリ独自のggml/llama.cppベースのエンジンでGGUFファイルとして読み込み',
          },
          {
            'モデルファミリー': 'GPT-2、Starcoder、Falcon、MPT、Bloom、RWKV、Mamba、GPTNeoX、PLaMo',
            'カテゴリー': 'テキスト生成(旧型・ニッチなアーキテクチャ)',
            '補足': 'ほとんどの競合モバイルアプリより幅広いアーキテクチャ対応',
          },
          {
            'モデルファミリー': 'LLaVA(1.5/1.6)、BakLLaVA、Obsidian、ShareGPT4V、MobileVLM、Yi-VL、Moondream',
            'カテゴリー': 'マルチモーダル(視覚言語)',
            '補足': 'READMEによれば画像とテキストを組み合わせた入力に対応',
          },
          {
            'モデルファミリー': 'その他のGGUFまたはGGJTv3モデル',
            'カテゴリー': 'カスタムインポート',
            '補足': 'プロジェクトWikiによると、GGUFは拡張子`.gguf`、旧形式のGGJTv3は`.bin`が必要',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'LLM FarmはiPhone、iPad、Macで使えますか?',
        itemHeadings: true,
        columns: ['プラットフォーム', '利用可否', '補足'],
        rows: [
          {
            'プラットフォーム': 'iPhone / iPad',
            '利用可否': 'Xcodeでのビルドが必要 — 本レビュー時点でApp Storeからインストール不可',
            '補足': 'プロジェクトREADMEによると最低iOS 16が必要。端末上の推論にはMetalアクセラレーションを使用。',
          },
          {
            'プラットフォーム': 'Mac',
            '利用可否': 'Xcodeでのビルドが必要',
            '補足': 'プロジェクトREADMEによると最低macOS 13が必要。同じコードベースにiOS/iPadOSと並んでネイティブのmacOSサポートが含まれる。',
          },
          {
            'プラットフォーム': 'Android / Windows / Linux',
            '利用可否': '非対応',
            '補足': 'LLM FarmにはAndroid、Windows、Linux版が存在しない。Androidユーザーは代わりにRikkaHub、ChatterUI、Maidを検討すべき。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'LLM Farmの料金は?',
        content: [
          '**LLM Farm自体は無料でMITライセンスのオープンソースであり、アプリのコードやチャット機能に購入価格やサブスクリプションはありません。** 本記事のために調べたリポジトリ、Wiki、過去のApp Store掲載文のいずれにも、LLM Farm内でのアプリ内課金やプレミアムプラン、有料マーケットプレイスの証拠は見つかりませんでした。',
          '今LLM Farmを使う際の実質的なコストは間接的なものです。アプリをビルドするにはMacが必要(XcodeはmacOS専用)で、Apple Developerアカウントの種類によっては費用が一切かからない場合(無料のPersonal Teamでの署名で自分の端末に限定され、証明書は約7日ごとに更新が必要)か、より長期間有効な署名証明書を得るための[Apple Developer Program](https://developer.apple.com/programs/)の年会費が必要になります。それ以外に、ダウンロードしたGGUFモデルファイルは、他のローカルLLMアプリと同様、端末のストレージを消費します(通常モデルごとに数GB)。',
        ],
        items: [
          '**アプリ自体:** 無料、MITライセンスのオープンソース — コードや機能に対する購入価格は見つからなかった。',
          '**アプリ内課金:** 本記事で調べた情報源には見当たらなかった。',
          '**ビルドツール:** Xcodeは無料だがMacが必要。無料のApple IDでも約7日ごとに更新が必要な証明書で個人利用向けにビルドを署名できる。有料のApple Developer Programに加入すればこの更新サイクルを回避できる。',
          '**ストレージのコスト:** 金銭的ではないが実質的なコスト — ダウンロードしたGGUFモデルファイルごとに、通常数GBの端末ストレージを消費する。',
        ],
      },
      features: {
        id: 'key-features',
        title: 'LLM Farmの機能は?',
        content: [
          '**GGUFモデルをローカルで実行する以外にも、LLM FarmはそのGitHub READMEとWikiによれば、単純なチャットクライアントというよりローカルML実験ツールに近い機能を備えています。** 具体的には次のとおりです。',
        ],
        items: [
          '**幅広いアーキテクチャ対応。** 16以上のモデルアーキテクチャに対応し、Starcoder、Falcon、MPT、Bloom、RWKV、GPTNeoXなど、他のモバイルローカルAIアプリでは一般的に対応していないものも含まれる。',
          '**マルチモーダル(視覚言語)モデル。** LLaVA、BakLLaVA、Obsidian、ShareGPT4V、MobileVLM、Yi-VL、Moondreamへの対応により、READMEによれば画像とテキストを組み合わせたプロンプトを処理できる。',
          '**複数のサンプリング方式。** Temperature、Tail-Free Sampling(TFS)、Locally Typical Sampling、Mirostat、Greedy、文法制約付きサンプリングが対応オプションとして記載されている。',
          '**文法制約付き出力。** Grammarサンプリングにより、モデルの出力を定義された構造(有効なJSONなど)に制約でき、構造化出力のユースケースに役立つ。',
          '**モデル設定テンプレートとコンテキスト復元。** モデルごとに設定を保存でき、会話のコンテキスト状態を最初から再処理せずに復元できる。',
          '**Apple Shortcuts連携。** READMEによれば、AppleのShortcutsオートメーションアプリからアプリを起動できる。',
          '**基本的な検索拡張生成(RAG)。** READMEにはRAG機能の記載があるが、本記事で確認した資料には、正確な検索方式や対応するドキュメント形式についての詳細な記載はない。',
        ],
        note: '機能の有無はビルドごとに変わる可能性があり、アプリが現在App Storeからインストールできないため、自分でビルドしたバージョンが、過去のApp Store掲載文に記載されたすべての機能と一致するとは限りません。現在のソースコードで何が使えるかは、[GitHubリポジトリ](https://github.com/guinmoon/LLMFarm)とそのコミット履歴を確認してください。',
      },
      loraFinetuning: {
        id: 'lora-finetuning',
        title: '端末上でのLoRAファインチューニングとマージ',
        content: [
          '**LLM Farmは端末上でのLoRA(Low-Rank Adaptation)ツールを備えています。アダプターの読み込み、ベースモデルのファインチューニング、学習済みアダプターをベースモデルにマージすることができ、この組み合わせをまったく提供していないモバイルローカルAIアプリがほとんどです。** プロジェクトの[Wikiドキュメント](https://github.com/guinmoon/LLMFarm/wiki/lora)によると、',
          'LoRAアダプターは、アダプターファイルを`lora_adapters`ディレクトリに配置することで読み込めます。チャット設定画面から単一のアダプターを指定するか、設定ファイルで個別のスケールパラメータを持つ複数のアダプターを構成することができます。ファインチューニングはアプリ内のSettings > FineTuneから直接利用できますが、Wikiによればモバイルハードウェア上ではリソースを多く消費するとされ、iOSでは最小設定でおおよそ30億パラメータ規模のモデルに実質的に限定されるとドキュメントに記載されています。別途Settings > Merge Lora機能により、学習済みアダプターをベースモデルにマージしてエクスポートでき、Wikiでは実用的なiOSでの性能を得るためQ4_K以下の量子化を推奨しています。',
        ],
        items: [
          '1つまたは複数のLoRAアダプターを読み込み可能。それぞれ個別に設定可能なスケールパラメータを持つ。',
          'Settings > FineTuneから端末上でベースモデルをファインチューニング可能 — Wikiによると、iOSでは最小設定でおおよそ30億パラメータ規模に実質的に限定される。',
          '学習済みLoRAアダプターをベースモデルにマージし、Settings > Merge Loraからエクスポート可能。',
          'トレードオフ:Wikiによれば、LoRAアダプターを接続している間はメモリマップドファイル読み込み(mmap)が使用できず、ベースモデル単体で実行する場合よりRAM使用量が増える。',
        ],
        note: '本レビューでは、学習速度や出力品質を検証するためにLLM Farmで独自にモデルをファインチューニングすることは行っていません。上記の説明は、プロジェクト自身のドキュメントがこの機能について述べている内容をまとめたものであり、PromptQuorumによるベンチマークではありません。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'LLM Farmに必要なハードウェアは?',
        content: [
          '**実際のハードウェアの目安を決めるのは選んだモデルであり、アプリ自体ではありません。一般的なローカルLLMの目安として、量子化された20〜40億パラメータのモデルにはおおよそ3〜4GBの空きRAMが、70〜80億パラメータのモデルには8GB以上が必要です。** これはGGUF全般に対する標準的なハードウェア目安であり、LLM Farm固有のベンチマークではありません。PromptQuorumはLLM Farmのモデルごとの正確なメモリ使用量を独自に測定していません。',
          'iPhone、iPad、MacではLLM FarmはMetalアクセラレーションを使って推論を行い、これはApple Silicon搭載機ではCPUのみでの実行より一般的に速度が向上します。プロジェクトREADMEによると、アプリには最低でもiOS 16またはmacOS 13が必要で、それらのOSバージョンを実行できない古い端末は、RAM容量にかかわらずアプリを使用できません。',
        ],
        items: [
          '小型モデル(20〜40億パラメータ、量子化):4GB以上の空きRAMがあれば、ほとんどの最近のiPhoneやMacで使用可能。',
          '中型モデル(70〜80億パラメータ、量子化):快適な応答性のためには8GB以上の端末RAMを推奨。',
          'LoRAファインチューニングに限っては、プロジェクトWikiによると、端末の計算・メモリ制約により、iOSでは最小設定でおおよそ30億パラメータ規模に実質的に限定される。',
          '最低OS:プロジェクトREADMEによるとiOS 16またはmacOS 13。',
          'ストレージ:ダウンロードするGGUFモデルファイルごとに数GBの空き容量を見込んでおく。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'LLM Farmが向いている人',
        items: [
          '**Xcodeでソースコードからアプリをビルドすることに抵抗のない開発者。** App StoreとTestFlightが現在閉鎖されているため、これはあれば望ましい条件ではなく、必須の条件です。',
          '**端末上でのLoRAファインチューニングやアダプターのマージを特に求めるユーザー。** この機能セットは、競合するモバイルローカルAIアプリのほとんどがまったく提供していません。',
          '**モバイル端末上で対応モデルアーキテクチャの幅を最も広く求めるユーザー。** RWKV、Mamba、GPTNeoXなどのニッチなものを含む16以上のアーキテクチャは、スマートフォン向けアプリとしては異例の広さです。',
          '**コード自体を確認したり改変したりしたいユーザー。** MITライセンスによりフォークと改変が許可されており、コードベースはSwiftベースのllama.cpp/ggmlラッパーを理解するための有用な参考資料になる。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'LLM Farmが向いていない人',
        items: [
          '**iOS/macOSアプリをソースコードからビルドできない、またはしたくない人。** これが今LLM Farmを避けるべき最大の理由です。本レビュー時点で、App Storeからのインストールはできず、TestFlightアクセスも確認できていません。',
          '**Android、Windows、Linuxのサポートが必要なユーザー。** LLM FarmはApple専用です。Androidユーザーは代わりにRikkaHub、ChatterUI、Maidを、Mac以外のデスクトップユーザーはOllama、LM Studio、Jan AIを検討すべきです。',
          '**今すぐ確実にインストールできるアプリを求めるユーザー。** PocketPal AIとPrivate LLMはいずれも、何もビルドせずにApp Storeから即座にインストールできます。',
          '**頻繁でバージョン管理されたリリースを期待するユーザー。** プロジェクトの最後にタグ付けされたリリースは2025年1月に公開されており、その後もコミットは断続的に続いていますが、本レビュー時点で1年以上、新しいパッケージ化されたバージョンは出ていません。',
          '**保証されたサポートや明確なロードマップを必要とするユーザー。** リポジトリの履歴によれば、LLM Farmは1人の開発者によって独立して維持されており、App Store掲載の復活についての明言された約束はありません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'LLM Farmと代替アプリの比較',
        itemHeadings: true,
        columns: ['アプリ', 'ライセンス / 料金', 'プラットフォーム', '現在のインストール方法'],
        rows: [
          {
            'アプリ': 'LLM Farm',
            'ライセンス / 料金': '無料、オープンソース(MIT)',
            'プラットフォーム': 'iPhone/iPad、Mac',
            '現在のインストール方法': 'Xcodeでのビルドのみ — App StoreとTestFlightは閉鎖中',
          },
          {
            'アプリ': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'ライセンス / 料金': '無料、オープンソース(MIT)',
            'プラットフォーム': 'iPhone/iPad、Android',
            '現在のインストール方法': 'App StoreとGoogle Playからワンタップでインストール',
          },
          {
            'アプリ': '[Private LLM](/power-local-llm/private-llm-review)',
            'ライセンス / 料金': '有料、買い切り型;クローズドソース',
            'プラットフォーム': 'iPhone/iPad/Mac(Apple専用)',
            '現在のインストール方法': 'App Storeからワンタップでインストール',
          },
          {
            'アプリ': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'ライセンス / 料金': '無料+有料プラン;クローズドソース',
            'プラットフォーム': 'iPhone/iPad/Mac(Apple専用)',
            '現在のインストール方法': 'App Storeからワンタップでインストール',
          },
          {
            'アプリ': 'Layla',
            'ライセンス / 料金': '無料・有料プランあり;クローズドソース',
            'プラットフォーム': '[layla-network.ai](https://www.layla-network.ai)によるとAndroidとiOS',
            '現在のインストール方法': '無料プランがあると決めつける前に[layla-network.ai](https://www.layla-network.ai)で現在の入手可否を確認',
          },
          {
            'アプリ': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'ライセンス / 料金': '無料、オープンソース',
            'プラットフォーム': 'Android',
            '現在のインストール方法': 'Google Playまたはソースコードからのビルド',
          },
          {
            'アプリ': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'ライセンス / 料金': '無料、オープンソース(AGPL-3.0)',
            'プラットフォーム': 'Android',
            '現在のインストール方法': 'ソースコードからのビルド、またはリリースAPKのサイドロード',
          },
          {
            'アプリ': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'ライセンス / 料金': '無料、オープンソース',
            'プラットフォーム': 'Android',
            '現在のインストール方法': 'GitHubのリリースまたはソースコードからのビルド',
          },
          {
            'アプリ': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'ライセンス / 料金': '無料、オープンソース',
            'プラットフォーム': 'Android;本レビュー時点でiOSは未提供',
            '現在のインストール方法': 'Google PlayまたはAnythingLLM Mobileサイト',
          },
        ],
        note: 'このカテゴリーでは入手可否の状況が頻繁に変わります。この表は2026年9月時点でPromptQuorumが確認できた内容を反映しています。リンクが現在も有効かどうかは各プロジェクトのページで確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'LLM Farmはまだ利用できますか?',
            a: 'オープンソースプロジェクトとしてはGitHub上で今も活動していますが、アプリは現在App StoreからもTestFlightからもインストールできません。Appleは2025年8月頃にApp Storeの掲載を削除し、プロジェクトのREADMEは本レビュー時点でも両チャネルを「一時的に利用できません」としています。現在唯一の利用方法は、Xcodeでソースコードからビルドすることです。',
          },
          {
            q: 'なぜLLM FarmはApp Storeから削除されたのですか?',
            a: '本記事のために確認したいずれの情報源にも、開発者またはAppleによる削除理由の明記はPromptQuorumには見つかりませんでした。プロジェクトのGitHub READMEは削除の事実を認めていますが、その原因は説明していません。',
          },
          {
            q: 'LLM Farmは無料ですか?',
            a: 'はい。LLM FarmはMITライセンスの無料オープンソースで、PromptQuorumが確認した情報源にはアプリ内課金や有料プランの証拠は見当たりませんでした。実際にかかるコストは、ビルド用のMacとXcode、そしてApple Developerアカウントです。',
          },
          {
            q: 'LLM Farmを開発したのは誰ですか?',
            a: 'LLM Farmは、GitHub上で[guinmoon](https://github.com/guinmoon)として公開している開発者Artem Savkin氏によって作られました。企業ではなく独立して維持されています。',
          },
          {
            q: 'LLM Farmはオープンソースですか?',
            a: 'はい、ソースコード全体が[GitHub](https://github.com/guinmoon/LLMFarm)上でMITライセンスの下に公開されています。MITライセンスは自由な利用、改変、再配布を認める寛容型ライセンスです。',
          },
          {
            q: 'LLM FarmはLoRAでモデルをファインチューニングできますか?',
            a: 'はい、プロジェクトのWikiドキュメントによればできます。LLM FarmはLoRAアダプターの読み込み、端末上でのベースモデルのファインチューニング(Wikiによるとテスト時点でiOSでは実質的におおよそ30億パラメータ規模に限定)、学習済みアダプターをベースモデルにマージすることに対応しています。この機能は、競合するモバイルローカルAIアプリのほとんどが提供していません。',
          },
          {
            q: 'LLM FarmはAndroidで動きますか?',
            a: 'いいえ。LLM FarmはGitHub READMEによるとiOS(16以降)とmacOS(13以降)のみに対応しています。Androidユーザーは代わりにRikkaHub、ChatterUI、Maidを検討してください。',
          },
          {
            q: 'App StoreなしでLLM Farmをインストールするには?',
            a: '[GitHubリポジトリ](https://github.com/guinmoon/LLMFarm)を`git clone --recurse-submodules`で再帰的にクローンし、Xcodeでプロジェクトを開き、自分のApple Developerアカウントで署名して、自分の端末向けにビルドします。これにはMacと、Xcodeおよびコード署名に関する基本的な知識が必要です。',
          },
          {
            q: 'LLM FarmはPocketPal AIやPrivate LLMと比べてどうですか?',
            a: 'LLM FarmとPocketPal AIはどちらも無料でMITライセンスですが、LLM Farmは現在ソースコードからのビルドが必要な一方、PocketPal AIはApp StoreとGoogle Playから直接インストールできます。LLM Farmはより多くのモデルアーキテクチャに対応し、端末上でのLoRAファインチューニングを備えていますが、これはPocketPal AIにも、有料でクローズドソースのPrivate LLMにもありません。自分でアプリをビルドすることに抵抗がなければLLM Farmを、今すぐインストールできるものが欲しければPocketPal AIかPrivate LLMを選んでください。詳細は上記の比較表を参照してください。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'LLM Farmは今もApple端末向けオープンソースローカルAIプロジェクトの中で技術的に最も高機能なものの一つであり続けています。対応アーキテクチャの幅や端末上でのLoRAファインチューニング・マージ機能は、PocketPal AIやPrivate LLMを含む、このカテゴリーのほとんどのモバイルアプリより踏み込んでいます。しかし本レビュー時点では、ほとんどの人が実際にインストールできるアプリではありません。Appleは2025年8月にApp Storeから削除し、プロジェクトのREADMEによるとTestFlightアクセスも閉鎖されており、実行するための唯一の確認済みの方法は、Xcodeで自分でオープンソースコードをコンパイルすることです。コードを確認したい、LoRAファインチューニングを試したい、あるいは珍しいモデルアーキテクチャを使いたい開発者にとっては妥当なトレードオフです。しかし、今すぐアプリをダウンロードして安心してチャットしたいだけの人にとっては、妥当な要求ではありません。そのような場合には、上記の代替アプリの節で紹介したPocketPal AI(無料、オープンソース、ワンタップインストール)やPrivate LLM(有料、洗練された、ワンタップインストール)が現実的な選択肢です。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[LLM Farm on GitHub](https://github.com/guinmoon/LLMFarm) — 本レビューで参照したソースコード、ライセンス(MIT)、README、コミット履歴、スター・フォーク数。',
          '[LLM Farm LICENSEファイル](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) — MITライセンスの本文と著作権者(Artem Savkin氏、2023年)。',
          '[LLM Farm Wiki: FAQ](https://github.com/guinmoon/LLMFarm/wiki/FAQ) — インストールに関する注意点と対応ファイル形式の詳細。',
          '[LLM Farm Wiki: LoRA](https://github.com/guinmoon/LLMFarm/wiki/lora) — LoRAの読み込み、ファインチューニング、マージに関するドキュメント。',
          '[llmfarm_core.swift on GitHub](https://github.com/guinmoon/llmfarm_core.swift) — 本レビューで言及した基盤となる推論ライブラリ。',
          '[guinmoon/LLMFarmのGitHubリリース履歴](https://github.com/guinmoon/LLMFarm/releases) — 本レビューで言及した最後のタグ付きリリース(1.4.3、2025年1月)。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — LLM Farmのインストール可能な代替アプリを比較したiOS向けまとめ記事。',
          '[PocketPal AIレビュー](/power-local-llm/pocketpal-ai-review) — iPhone、iPad、Android向けの無料でオープンソース、ワンタップインストール可能な代替アプリ。',
          '[Private LLMレビュー](/power-local-llm/private-llm-review) — Apple専用の有料でクローズドソースの代替アプリで、大規模な厳選モデルカタログを持つ。',
          '[Enclave AIレビュー](/power-local-llm/enclave-ai-review) — SiriとShortcutsのオートメーションを備えたApple専用の代替アプリ。',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — 厳選モデルライブラリを持つ、5プラットフォーム対応の有料クローズドソース代替アプリ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Farmレビュー(2026年):オープンソースのGGUFアプリ、App Storeからは入手不可',
      description:
        'LLM Farmレビュー:端末上でLoRAファインチューニングができる、オープンソースでMITライセンスのiOS/macOS向けGGUFアプリ。現在App Storeにはなく、その意味とビルド方法を解説。',
      url: 'https://promptquorum.com/power-local-llm/llm-farm-review',
      inLanguage: 'ja',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: 'オープンソースのローカルAIアプリを検討している、技術に強いiOS・macOSユーザー' },
      about: [
        { '@type': 'Thing', name: 'LLM Farm' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'LoRAファインチューニング' },
        { '@type': 'Thing', name: 'ローカルLLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llm-farm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLM Farmレビュー(2026年)', item: 'https://promptquorum.com/power-local-llm/llm-farm-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-farm-review-hero-pt.webp',
    title: 'LLM Farm, análise (2026): app GGUF de código aberto, fora da App Store',
    seoTitle: 'LLM Farm análise 2026: runtime GGUF de código aberto para iOS',
    intro:
      'LLM Farm é um app gratuito e de código aberto (licença MIT) para iOS e macOS que executa modelos de linguagem GGUF diretamente no dispositivo, usando uma camada em Swift construída sobre o [ggml](https://github.com/ggerganov/ggml) e o llama.cpp. Foi criado pelo desenvolvedor Artem Savkin (usuário do GitHub [guinmoon](https://github.com/guinmoon)), que o publicou pela primeira vez na App Store em dezembro de 2023. No momento desta análise, o LLM Farm não pode ser instalado pela App Store nem pelo TestFlight: a Apple removeu a ficha em agosto de 2025, e o [README no GitHub](https://github.com/guinmoon/LLMFarm) do projeto ainda descreve o app como "temporariamente indisponível" nos dois canais. Esta análise cobre o que o app faz, suas ferramentas de ajuste fino (fine-tuning) e fusão de LoRA no próprio dispositivo (um recurso que a maioria dos apps móveis de IA local não tem), como compilá-lo hoje a partir do código-fonte e, principalmente, por que ele não serve para quem não se sente confortável em compilar um app de iOS.',
    metaDescription:
      'Análise do LLM Farm: o app GGUF de código aberto para iOS/macOS, com licença MIT, com ajuste fino LoRA no dispositivo. Atualmente fora da App Store — o que isso significa e como compilá-lo.',
    twitterDescription:
      'Análise do LLM Farm 2026: o runtime GGUF de código aberto para iOS/macOS com ferramentas LoRA no dispositivo, removido da App Store, só compilável a partir do código-fonte.',
    audience:
      'Usuários de iOS e macOS com conhecimento técnico que querem um runtime GGUF de código aberto com ajuste fino LoRA e estão dispostos a compilar o app a partir do código-fonte.',
    readTime: '11 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'LLM Farm análise',
    targetKeywords: [
      'llm farm análise',
      'llmfarm ios',
      'llm farm app store',
      'llm farm guinmoon',
      'llm farm lora',
      'rodar modelos gguf no iphone',
      'app de ia local ios de código aberto',
      'alternativa ao llm farm',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'Phi', 'LLaMA', 'Mixtral', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**O LLM Farm é um app de iOS e macOS gratuito e de código aberto (licença MIT) que executa modelos de linguagem GGUF inteiramente no dispositivo, e atualmente não pode ser instalado pela App Store nem pelo TestFlight.** Desenvolvido por Artem Savkin ([guinmoon](https://github.com/guinmoon) no GitHub) e lançado pela primeira vez em dezembro de 2023, o [repositório no GitHub](https://github.com/guinmoon/LLMFarm) tem mais de 2.000 estrelas e mais de 180 forks. A Apple removeu a ficha da App Store em agosto de 2025, e o README do projeto ainda marca tanto a App Store quanto o TestFlight como "temporariamente indisponíveis" no momento desta análise. O código-fonte continua público e sob licença MIT, então o app pode ser compilado e instalado via Xcode, mas isso exige uma conta de desenvolvedor Apple e familiaridade com compilação de apps de iOS a partir do código-fonte — para a maioria das pessoas, esse já não é um app de instalação com um toque.',
    quickAnswerTop: {
      pt: {
        question: 'Ainda dá para instalar o LLM Farm, e vale a pena?',
        answer:
          'Não pela App Store — a Apple removeu a ficha em agosto de 2025, e o próprio README do GitHub do projeto ainda lista a App Store e o TestFlight como "temporariamente indisponíveis". A única via atual é compilar o app de código aberto a partir do código-fonte no Xcode, o que exige uma conta de desenvolvedor Apple e experiência básica em compilação de apps iOS. Se você conseguir fazer isso, o LLM Farm é um dos poucos apps móveis com ajuste fino LoRA e ferramentas de fusão de verdade; se não conseguir, PocketPal AI ou Private LLM são alternativas instaláveis com um toque, hoje mesmo.',
        bullets: [
          'Gratuito e de código aberto sob licença MIT, desenvolvido por Artem Savkin ([guinmoon](https://github.com/guinmoon/LLMFarm) no GitHub).',
          'Atualmente não é possível instalar pela App Store nem pelo TestFlight — a Apple o retirou da loja em agosto de 2025; o README do GitHub confirma o status "temporariamente indisponível" no momento desta análise.',
          'A única via de instalação atual é compilar a partir do código-fonte via Xcode, o que exige uma conta de desenvolvedor Apple.',
          'Suporta carregar, ajustar (fine-tuning) e fundir adaptadores LoRA diretamente no dispositivo — um recurso que falta na maioria dos apps concorrentes.',
          'Executa modelos GGUF em mais de 16 arquiteturas (LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek e outras) usando seu próprio motor baseado em ggml/llama.cpp.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o LLM Farm?', anchor: 'what-is-llm-farm' },
      { label: 'Quem criou o LLM Farm?', anchor: 'history-and-developer' },
      { label: 'O LLM Farm ainda está na App Store?', anchor: 'app-store-status' },
      { label: 'Como obter o LLM Farm hoje', anchor: 'getting-started' },
      { label: 'Quais modelos o LLM Farm suporta?', anchor: 'models-supported' },
      { label: 'O LLM Farm está disponível para iPhone, iPad e Mac?', anchor: 'platform-availability' },
      { label: 'Quanto custa o LLM Farm?', anchor: 'pricing' },
      { label: 'Quais recursos o LLM Farm tem?', anchor: 'key-features' },
      { label: 'Ajuste fino e fusão de LoRA no dispositivo', anchor: 'lora-finetuning' },
      { label: 'Que hardware você precisa?', anchor: 'hardware-requirements' },
      { label: 'Para quem o LLM Farm é indicado', anchor: 'who-should-use' },
      { label: 'Para quem o LLM Farm não é indicado', anchor: 'who-should-not-use' },
      { label: 'LLM Farm vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O LLM Farm é um app de iOS e macOS gratuito e de código aberto (licença MIT) para executar modelos de linguagem GGUF no dispositivo, criado pelo desenvolvedor Artem Savkin — atualmente não está disponível na App Store nem no TestFlight, e a única via é compilá-lo você mesmo a partir do código-fonte.',
          },
          {
            type: 'plain-terms',
            text: 'É um app que permitiria conversar com um modelo de IA rodando inteiramente no seu iPhone ou Mac, sem nenhum servidor na nuvem e com código-fonte público — mas atualmente não dá para baixá-lo da forma normal pela App Store; seria preciso compilá-lo você mesmo usando o Xcode, a ferramenta de desenvolvimento da Apple.',
          },
        ],
        items: [
          'Gratuito e de código aberto (licença MIT); código-fonte e rastreador de problemas são públicos no [GitHub](https://github.com/guinmoon/LLMFarm).',
          'Criado pelo desenvolvedor Artem Savkin, sob o nome de usuário do GitHub [guinmoon](https://github.com/guinmoon), lançado pela primeira vez na App Store em dezembro de 2023.',
          'A Apple removeu a ficha da App Store em agosto de 2025; o README do projeto ainda descreve tanto a App Store quanto o TestFlight como "temporariamente indisponíveis".',
          'Executa modelos GGUF usando seu próprio motor baseado em ggml/llama.cpp em mais de 16 arquiteturas de modelos, incluindo LLaMA, Gemma, Qwen, Phi, Mixtral e DeepSeek.',
          'Um dos poucos apps móveis de IA local com carregamento, ajuste fino e fusão de adaptadores LoRA integrados diretamente no dispositivo.',
          'Somente iOS (16+) e macOS (13+) — sem versão para Android, Windows ou Linux.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia no [repositório público do GitHub](https://github.com/guinmoon/LLMFarm) (README, FAQ do wiki, arquivo de licença, histórico de commits e versões) e no status da ficha na Apple App Store, verificados em setembro de 2026. A PromptQuorum não realizou testes práticos independentes do LLM Farm para esta análise — os números de hardware abaixo são orientações gerais para LLMs locais, não medições específicas deste app.',
          },
          {
            type: 'warning',
            text: 'No momento desta análise, o LLM Farm não pode ser instalado pela App Store nem pelo TestFlight. A ficha da App Store que antes existia em `apps.apple.com/app/llm-farm/id6461209867` não é mais exibida. Qualquer pessoa que queira usar este app precisa compilá-lo a partir do código-fonte usando o Xcode, o que exige uma conta de desenvolvedor Apple (gratuita ou paga) e familiaridade com as ferramentas de compilação do iOS.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-farm',
        title: 'O que é o LLM Farm?',
        content: [
          '**O LLM Farm é um app móvel e de desktop que baixa modelos de linguagem abertos no formato GGUF e os executa localmente em um iPhone, iPad ou Mac, usando uma camada em Swift (a biblioteca própria do desenvolvedor, [llmfarm_core.swift](https://github.com/guinmoon/llmfarm_core.swift)) sobre o [ggml](https://github.com/ggerganov/ggml) e o llama.cpp como motor de inferência.** O app em si é [licenciado sob MIT](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE), o que significa que o código-fonte completo é público e livre para inspecionar, bifurcar (fork) ou modificar.',
          'O LLM Farm suporta uma ampla gama de arquiteturas de modelos além da família LLaMA mais comum — o repositório lista mais de 16 arquiteturas suportadas, incluindo GPT-2, Starcoder, Falcon, MPT, Bloom, StableLM e RWKV, além de modelos multimodais de visão e linguagem como LLaVA e Moondream. Ele também inclui ferramentas de carregamento, ajuste fino e fusão de adaptadores LoRA no dispositivo, um conjunto de recursos mais próximo de uma ferramenta local de experimentação em ML do que de um simples app de chat.',
        ],
        note: 'GGUF é um formato de arquivo para empacotar modelos de linguagem abertos quantizados de modo que rodem de forma eficiente em hardware de consumo por meio de runtimes como o llama.cpp e o ggml, em vez de chamar uma API na nuvem a cada resposta.',
      },
      history: {
        id: 'history-and-developer',
        title: 'Quem criou o LLM Farm?',
        content: [
          '**O LLM Farm foi criado pelo desenvolvedor Artem Savkin, que publica sob o nome de usuário do GitHub [guinmoon](https://github.com/guinmoon), e apareceu pela primeira vez na App Store em 13 de dezembro de 2023.** O [arquivo LICENSE no repositório](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) nomeia Artem Savkin como titular dos direitos autorais, datado de 2023.',
          'O projeto é mantido de forma independente, não por uma empresa financiada. O [repositório no GitHub](https://github.com/guinmoon/LLMFarm) foi criado em junho de 2023 e acumula, no momento desta análise, mais de 2.000 estrelas e mais de 180 forks, com 46 issues em aberto no rastreador. O desenvolvimento continuou de forma intermitente desde a remoção da App Store: o histórico de commits mostra atualizações do motor llama.cpp subjacente até dezembro de 2025 e uma atualização do README em janeiro de 2026, mas a última versão marcada (tagged) do projeto (versão 1.4.3) foi lançada em janeiro de 2025 — ou seja, mudanças de código continuaram sem uma nova versão empacotada por mais de um ano até o momento desta análise.',
        ],
        items: [
          'Desenvolvedor: Artem Savkin (GitHub: [guinmoon](https://github.com/guinmoon)), trabalhando de forma independente, não como empresa.',
          'Lançamento na App Store: 13 de dezembro de 2023. Repositório no GitHub criado: 14 de junho de 2023.',
          'Licença: MIT — licença de código aberto permissiva, livre para usar, bifurcar e modificar. Titular dos direitos segundo o arquivo LICENSE: Artem Savkin, 2023.',
          'Mais de 2.000 estrelas no GitHub e mais de 180 forks no momento desta análise, com um rastreador de issues ativo mas não resolvido (46 issues em aberto).',
          'Ritmo de desenvolvimento: intermitente desde 2025 — commits atualizando a dependência do llama.cpp e a documentação continuaram até o início de 2026, mas nenhuma nova versão marcada foi lançada desde a 1.4.3, em janeiro de 2025.',
        ],
      },
      appStoreStatus: {
        id: 'app-store-status',
        title: 'O LLM Farm ainda está na App Store?',
        content: [
          '**Não. No momento desta análise, o LLM Farm não pode ser baixado da Apple App Store, e seu canal beta no TestFlight também está fechado.** O app foi originalmente publicado na App Store em 13 de dezembro de 2023, e removido pela Apple por volta de 8 de agosto de 2025, com base no histórico de versões e commits do projeto. A ficha da App Store que antes existia em `apps.apple.com/app/llm-farm/id6461209867` não é mais exibida.',
          'O próprio [README no GitHub](https://github.com/guinmoon/LLMFarm) do projeto declara diretamente: "The app is temporarily unavailable in TestFlight and Appstore" (o app está temporariamente indisponível no TestFlight e na App Store). A PromptQuorum não conseguiu confirmar o motivo da remoção — o repositório não indica nenhum — nem se ou quando o app poderia voltar a algum dos dois canais de distribuição. Uma página de FAQ mais antiga no wiki menciona que o desenvolvedor oferecia anteriormente compilar manualmente um arquivo `.ipa` para usuários que entrassem em contato por e-mail caso o TestFlight não estivesse acessível; esta análise não conseguiu confirmar se essa oferta ainda vale, já que o README atual não a repete.',
        ],
        items: [
          'Status na App Store: removido desde aproximadamente agosto de 2025, segundo o histórico de commits e versões do projeto.',
          'Status no TestFlight: fechado, segundo o README atual do GitHub, no momento desta análise.',
          'Motivo da remoção: não informado pelo desenvolvedor nem pela Apple em nenhuma fonte que a PromptQuorum conseguiu localizar.',
          'Única via confirmada para instalar o app atualmente: compilá-lo a partir do código-fonte via Xcode, usando o repositório público do GitHub.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como obter o LLM Farm hoje',
        content: [
          '**Como o LLM Farm não está atualmente na App Store, usá-lo significa compilar o projeto de código aberto a partir do código-fonte usando o Xcode — uma barreira significativamente mais alta do que baixar um app.** Os passos abaixo seguem as instruções de compilação do próprio [repositório no GitHub](https://github.com/guinmoon/LLMFarm) do projeto.',
        ],
        numberedItems: [
          {
            title: 'Instale o Xcode e uma conta de desenvolvedor Apple',
            whyItMatters: 'Você precisa de um Mac com o Xcode instalado e de uma conta de desenvolvedor Apple gratuita ou paga para compilar e assinar o app para o seu próprio dispositivo. Essa é a principal barreira para quem não é desenvolvedor.',
          },
          {
            title: 'Clone o repositório de forma recursiva',
            whyItMatters: 'Execute `git clone --recurse-submodules https://github.com/guinmoon/LLMFarm` — a opção `--recurse-submodules` é necessária porque a biblioteca de inferência subjacente `llmfarm_core` foi movida para um repositório separado e é incluída como submódulo.',
          },
          {
            title: 'Abra o projeto no Xcode e compile para o seu dispositivo',
            whyItMatters: 'Abra o arquivo de projeto do Xcode, selecione seu dispositivo ou o destino Mac, defina sua própria equipe de assinatura de desenvolvedor e compile. Isso gera um app que roda no seu próprio hardware, mas não um que você possa distribuir a outras pessoas pela App Store.',
          },
          {
            title: 'Baixe um modelo GGUF e carregue-o',
            whyItMatters: 'Depois que o app estiver rodando, adicione um arquivo de modelo GGUF (do Hugging Face ou de outra fonte) e carregue-o pela tela de gerenciamento de modelos do app; em seguida, comece a conversar inteiramente no dispositivo.',
          },
        ],
        note: 'Este processo pressupõe familiaridade básica com o Xcode e com a assinatura de código do iOS. Usuários que não se sintam confortáveis compilando um app a partir do código-fonte devem considerar uma alternativa instalável com um toque, como o PocketPal AI ou o Private LLM — veja a seção de alternativas abaixo.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'Quais modelos o LLM Farm suporta?',
        itemHeadings: true,
        columns: ['Família de modelos', 'Categoria', 'Observações'],
        rows: [
          {
            'Família de modelos': 'LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek, Yi, StableLM',
            'Categoria': 'Geração de texto',
            'Observações': 'Carregados como arquivos GGUF pelo motor da app baseado em ggml/llama.cpp',
          },
          {
            'Família de modelos': 'GPT-2, Starcoder, Falcon, MPT, Bloom, RWKV, Mamba, GPTNeoX, PLaMo',
            'Categoria': 'Geração de texto (arquiteturas antigas / de nicho)',
            'Observações': 'Cobertura de arquiteturas mais ampla do que a maioria dos apps móveis concorrentes',
          },
          {
            'Família de modelos': 'LLaVA (1.5/1.6), BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL, Moondream',
            'Categoria': 'Multimodal (visão e linguagem)',
            'Observações': 'Suporte a entradas de imagem mais texto, segundo o README do projeto',
          },
          {
            'Família de modelos': 'Qualquer outro modelo GGUF ou GGJTv3',
            'Categoria': 'Importação personalizada',
            'Observações': 'O GGUF exige a extensão `.gguf`; o formato mais antigo GGJTv3 exige `.bin`, segundo o wiki do projeto',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'O LLM Farm está disponível para iPhone, iPad e Mac?',
        itemHeadings: true,
        columns: ['Plataforma', 'Disponibilidade', 'Observações'],
        rows: [
          {
            'Plataforma': 'iPhone / iPad',
            'Disponibilidade': 'Exige compilação via Xcode — não instalável pela App Store no momento desta análise',
            'Observações': 'iOS 16 no mínimo, segundo o README do projeto; a aceleração Metal é usada para inferência no dispositivo.',
          },
          {
            'Plataforma': 'Mac',
            'Disponibilidade': 'Exige compilação via Xcode',
            'Observações': 'macOS 13 no mínimo, segundo o README do projeto; suporte nativo ao macOS junto com iOS/iPadOS está presente na mesma base de código.',
          },
          {
            'Plataforma': 'Android / Windows / Linux',
            'Disponibilidade': 'Não suportado',
            'Observações': 'O LLM Farm não tem versão para Android, Windows ou Linux. Usuários de Android devem considerar RikkaHub, ChatterUI ou Maid.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Quanto custa o LLM Farm?',
        content: [
          '**O LLM Farm em si é gratuito e de código aberto sob licença MIT — não há preço de compra nem assinatura pelo código ou pela função de chat do app.** A PromptQuorum não encontrou evidência de compras dentro do app, de um plano premium ou de um marketplace pago dentro do LLM Farm no repositório, no wiki ou no texto histórico da ficha da App Store revisados para este artigo.',
          'O custo real de usar o LLM Farm hoje é indireto: é preciso um Mac para compilar o app (o Xcode só existe no macOS) e, dependendo do tipo de conta de desenvolvedor Apple, ou nenhum custo (assinatura com equipe pessoal gratuita, limitada aos seus próprios dispositivos com um certificado que precisa ser renovado a cada sete dias, aproximadamente), ou a taxa do [Apple Developer Program](https://developer.apple.com/programs/) para um certificado de assinatura com validade mais longa. Além disso, os arquivos de modelos GGUF baixados ocupam espaço de armazenamento, tipicamente vários gigabytes por modelo, assim como em qualquer outro app de LLM local.',
        ],
        items: [
          '**O app em si:** Gratuito, código aberto sob licença MIT — nenhum preço de compra encontrado para o código ou suas funcionalidades.',
          '**Compras dentro do app:** Nenhuma encontrada nas fontes revisadas para este artigo.',
          '**Ferramentas de compilação:** o Xcode é gratuito, mas exige um Mac; um Apple ID gratuito pode assinar compilações para uso pessoal com um certificado que precisa ser renovado a cada sete dias, aproximadamente, enquanto uma assinatura paga do Apple Developer Program evita esse ciclo de renovação.',
          '**Custo de armazenamento:** Não monetário, mas real — cada arquivo de modelo GGUF baixado ocupa espaço de armazenamento, tipicamente vários gigabytes por modelo.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'Quais recursos o LLM Farm tem?',
        content: [
          '**Além de executar modelos GGUF localmente, o conjunto de recursos do LLM Farm se assemelha, segundo seu README e wiki no GitHub, mais a uma ferramenta local de experimentação em ML do que a um simples cliente de chat.** Incluem-se:',
        ],
        items: [
          '**Amplo suporte a arquiteturas.** Mais de 16 arquiteturas de modelos, incluindo várias (Starcoder, Falcon, MPT, Bloom, RWKV, GPTNeoX) que outros apps móveis de IA local geralmente não suportam.',
          '**Modelos multimodais (visão e linguagem).** O suporte a LLaVA, BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL e Moondream permite ao app processar prompts de imagem mais texto, segundo o README.',
          '**Vários métodos de amostragem.** Temperature, Tail-Free Sampling (TFS), Locally Typical Sampling, Mirostat, Greedy e amostragem com restrição de gramática estão entre as opções suportadas.',
          '**Saída com restrição de gramática.** A amostragem por gramática permite restringir a saída de um modelo a uma estrutura definida (como JSON válido), útil para casos de uso de saída estruturada.',
          '**Modelos de configuração e restauração de contexto.** Configurações salvas por modelo, e a possibilidade de restaurar o estado de contexto de uma conversa em vez de reprocessá-lo do zero.',
          '**Integração com os Atalhos da Apple.** O app pode ser acionado a partir do app de automação Atalhos da Apple, segundo o README.',
          '**Geração aumentada por recuperação (RAG) básica.** O README lista capacidade de RAG, mas a documentação do projeto não detalha, no material revisado para este artigo, seu método exato de recuperação nem os formatos de documento suportados.',
        ],
        note: 'A disponibilidade de recursos pode variar entre compilações, e como o app atualmente não pode ser instalado pela App Store, a versão que você compilar pode não corresponder a todos os recursos descritos em textos antigos da ficha da App Store. Confira o [repositório no GitHub](https://github.com/guinmoon/LLMFarm) e seu histórico de commits para saber o que está presente no código-fonte atual.',
      },
      loraFinetuning: {
        id: 'lora-finetuning',
        title: 'Ajuste fino e fusão de LoRA no dispositivo',
        content: [
          '**O LLM Farm inclui ferramentas de LoRA (Low-Rank Adaptation) no dispositivo — carregar adaptadores, ajustar (fine-tuning) um modelo base e fundir um adaptador treinado de volta no modelo base — uma combinação que a maioria dos apps móveis de IA local não oferece de forma alguma.** Segundo a [documentação do wiki](https://github.com/guinmoon/LLMFarm/wiki/lora) do projeto:',
          'Os adaptadores LoRA podem ser carregados colocando arquivos de adaptador em um diretório `lora_adapters`, seja um único adaptador pela interface de configurações do chat, seja vários adaptadores configurados com parâmetros de escala individuais em um arquivo de configuração. O ajuste fino está disponível diretamente no app em Settings > FineTune, embora o wiki observe que isso é intensivo em recursos em hardware móvel — no iOS, a documentação afirma que, na prática, isso se limita a modelos de cerca de 3 bilhões de parâmetros com configurações mínimas. Uma função separada, Settings > Merge Lora, permite fundir um adaptador treinado com seu modelo base e exportá-lo, e o wiki recomenda quantização Q4_K ou menor para um desempenho prático no iOS.',
        ],
        items: [
          'Carregamento de um ou vários adaptadores LoRA, cada um com seu próprio parâmetro de escala configurável.',
          'Ajuste fino de um modelo base no dispositivo via Settings > FineTune — segundo o wiki, limitado na prática a cerca de 3 bilhões de parâmetros com configurações mínimas no iOS.',
          'Fusão de um adaptador LoRA treinado com seu modelo base e exportação via Settings > Merge Lora.',
          'Contrapartida: o wiki afirma que o carregamento por arquivo mapeado em memória (mmap) não pode ser usado enquanto um adaptador LoRA está conectado, o que aumenta o uso de RAM em comparação com rodar apenas o modelo base.',
        ],
        note: 'Esta análise não realizou um ajuste fino independente de nenhum modelo no LLM Farm para verificar a velocidade de treinamento ou a qualidade da saída — a descrição acima resume o que a própria documentação do projeto afirma sobre o recurso, não um benchmark da PromptQuorum.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'Que hardware você precisa para o LLM Farm?',
        content: [
          '**O modelo escolhido, não o app em si, define o piso real de hardware — como orientação geral para LLMs locais, um modelo quantizado de 2 a 4 bilhões de parâmetros precisa de cerca de 3 a 4 GB de RAM livre, enquanto um modelo de 7 a 8 bilhões de parâmetros precisa de 8 GB ou mais.** Essa é uma orientação padrão de hardware para GGUF, não um benchmark específico do LLM Farm; a PromptQuorum não mediu de forma independente o uso exato de memória do LLM Farm por modelo.',
          'No iPhone, iPad e Mac, o LLM Farm usa aceleração Metal para inferência, o que geralmente melhora a velocidade em relação à execução somente em CPU em hardware Apple Silicon. O app exige, no mínimo, iOS 16 ou macOS 13, segundo o README do projeto, então dispositivos mais antigos que não conseguem rodar essas versões de sistema operacional não conseguem rodar o app, independentemente da RAM.',
        ],
        items: [
          'Modelos pequenos (2 a 4 bilhões de parâmetros, quantizados): usáveis na maioria dos iPhones e Macs recentes com 4 GB+ de RAM livre.',
          'Modelos de porte médio (7 a 8 bilhões de parâmetros, quantizados): 8 GB ou mais de RAM do dispositivo recomendados para uma responsividade aceitável.',
          'Ajuste fino LoRA especificamente: segundo o wiki do projeto, limitado na prática a cerca de 3 bilhões de parâmetros no iOS, com configurações mínimas, devido às limitações de computação e memória no dispositivo.',
          'Sistema operacional mínimo: iOS 16 ou macOS 13, segundo o README do GitHub.',
          'Armazenamento: reserve vários gigabytes de espaço livre por arquivo de modelo GGUF baixado.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem o LLM Farm é indicado',
        items: [
          '**Desenvolvedores confortáveis em compilar um app a partir do código-fonte no Xcode.** Como a App Store e o TestFlight estão atualmente fechados, isso é um requisito rígido, não um diferencial opcional.',
          '**Usuários que querem especificamente ajuste fino ou fusão de adaptadores LoRA no dispositivo.** A maioria dos apps móveis de IA local concorrentes não oferece esse conjunto de recursos de forma alguma.',
          '**Usuários que querem a mais ampla gama de arquiteturas de modelos suportadas em um dispositivo móvel.** Mais de dezesseis arquiteturas, incluindo várias de nicho (RWKV, Mamba, GPTNeoX), é algo incomumente amplo para um app de celular.',
          '**Usuários que querem inspecionar ou modificar o código eles mesmos.** A licença MIT permite bifurcar e modificar, e a base de código é uma referência útil para entender uma camada em Swift sobre o llama.cpp/ggml.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Para quem o LLM Farm não é indicado',
        items: [
          '**Para quem não pode ou não quer compilar um app de iOS/macOS a partir do código-fonte.** Esse é o principal motivo para evitar o LLM Farm por agora: não há instalação pela App Store, nem acesso confirmado ao TestFlight, no momento desta análise.',
          '**Usuários que precisam de suporte a Android, Windows ou Linux.** O LLM Farm é exclusivo da Apple; usuários de Android devem considerar RikkaHub, ChatterUI ou Maid, e usuários de desktop sem Mac devem considerar Ollama, LM Studio ou Jan AI.',
          '**Usuários que querem um app garantidamente instalável hoje.** Tanto o PocketPal AI quanto o Private LLM são instaláveis imediatamente pela App Store, sem compilar nada.',
          '**Usuários que esperam versões frequentes e numeradas.** A última versão marcada do projeto foi lançada em janeiro de 2025; embora os commits tenham continuado de forma intermitente desde então, não houve nenhuma nova versão empacotada em mais de um ano até o momento desta análise.',
          '**Usuários que precisam de suporte garantido ou de um roteiro definido.** O LLM Farm é mantido de forma independente por um único desenvolvedor, segundo o histórico do repositório, sem nenhum compromisso declarado de restabelecer a disponibilidade na App Store.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'LLM Farm vs. alternativas',
        itemHeadings: true,
        columns: ['App', 'Licença / custo', 'Plataformas', 'Via de instalação atual'],
        rows: [
          {
            'App': 'LLM Farm',
            'Licença / custo': 'Gratuito, código aberto (MIT)',
            'Plataformas': 'iPhone/iPad, Mac',
            'Via de instalação atual': 'Apenas compilação via Xcode — App Store e TestFlight fechados',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Licença / custo': 'Gratuito, código aberto (MIT)',
            'Plataformas': 'iPhone/iPad, Android',
            'Via de instalação atual': 'App Store e Google Play, instalação direta',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Licença / custo': 'Pago, compra única; código fechado',
            'Plataformas': 'iPhone/iPad/Mac (somente Apple)',
            'Via de instalação atual': 'App Store, instalação direta',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'Licença / custo': 'Gratuito com plano pago; código fechado',
            'Plataformas': 'iPhone/iPad/Mac (somente Apple)',
            'Via de instalação atual': 'App Store, instalação direta',
          },
          {
            'App': 'Layla',
            'Licença / custo': 'Planos gratuitos e pagos; código fechado',
            'Plataformas': 'Android e iOS, segundo [layla-network.ai](https://www.layla-network.ai)',
            'Via de instalação atual': 'Verifique a disponibilidade atual em [layla-network.ai](https://www.layla-network.ai) antes de presumir que existe um plano gratuito',
          },
          {
            'App': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'Licença / custo': 'Gratuito, código aberto',
            'Plataformas': 'Android',
            'Via de instalação atual': 'Google Play ou compilação a partir do código-fonte',
          },
          {
            'App': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'Licença / custo': 'Gratuito, código aberto (AGPL-3.0)',
            'Plataformas': 'Android',
            'Via de instalação atual': 'Compilação ou instalação de um APK de versão publicada',
          },
          {
            'App': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'Licença / custo': 'Gratuito, código aberto',
            'Plataformas': 'Android',
            'Via de instalação atual': 'Versões no GitHub ou compilação a partir do código-fonte',
          },
          {
            'App': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'Licença / custo': 'Gratuito, código aberto',
            'Plataformas': 'Android; iOS ainda não disponível no momento desta análise',
            'Via de instalação atual': 'Google Play ou o site do AnythingLLM Mobile',
          },
        ],
        note: 'O status de disponibilidade muda com frequência nessa categoria — esta tabela reflete o que a PromptQuorum conseguiu confirmar em setembro de 2026. Verifique a página de cada projeto antes de presumir que um link ainda está atual.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O LLM Farm ainda existe?',
            a: 'O projeto de código aberto continua ativo no GitHub, mas o app atualmente não pode ser instalado pela App Store nem pelo TestFlight. A Apple removeu a ficha da App Store por volta de agosto de 2025, e o README do projeto ainda descreve os dois canais como "temporariamente indisponíveis" no momento desta análise. A única via atual é compilá-lo a partir do código-fonte usando o Xcode.',
          },
          {
            q: 'Por que o LLM Farm foi removido da App Store?',
            a: 'A PromptQuorum não encontrou nenhum motivo declarado pelo desenvolvedor ou pela Apple em nenhuma fonte revisada para este artigo. O README do GitHub do projeto reconhece a remoção sem explicar sua causa.',
          },
          {
            q: 'O LLM Farm é gratuito?',
            a: 'Sim. O LLM Farm é gratuito e de código aberto sob licença MIT, e a PromptQuorum não encontrou evidência de compras dentro do app nem de um plano pago nas fontes revisadas. O custo prático é um Mac e o Xcode para compilá-lo, mais uma conta de desenvolvedor Apple.',
          },
          {
            q: 'Quem desenvolveu o LLM Farm?',
            a: 'O LLM Farm foi criado pelo desenvolvedor Artem Savkin, que publica sob o nome de usuário do GitHub [guinmoon](https://github.com/guinmoon). Ele é mantido de forma independente, não por uma empresa.',
          },
          {
            q: 'O LLM Farm é de código aberto?',
            a: 'Sim, o código-fonte completo é publicado no [GitHub](https://github.com/guinmoon/LLMFarm) sob licença MIT, uma licença permissiva que permite uso, modificação e redistribuição livres.',
          },
          {
            q: 'O LLM Farm consegue ajustar (fine-tuning) modelos com LoRA?',
            a: 'Sim, segundo a documentação do wiki do projeto. O LLM Farm suporta carregar adaptadores LoRA, ajustar um modelo base no dispositivo (limitado na prática a cerca de 3 bilhões de parâmetros no iOS, segundo o wiki) e fundir um adaptador treinado de volta no modelo base. A maioria dos apps móveis de IA local concorrentes não oferece esse recurso.',
          },
          {
            q: 'O LLM Farm funciona no Android?',
            a: 'Não. O LLM Farm suporta apenas iOS (16+) e macOS (13+), segundo seu README no GitHub. Usuários de Android devem considerar RikkaHub, ChatterUI ou Maid.',
          },
          {
            q: 'Como instalo o LLM Farm sem a App Store?',
            a: 'Clone o [repositório no GitHub](https://github.com/guinmoon/LLMFarm) de forma recursiva com `git clone --recurse-submodules`, abra o projeto no Xcode, assine-o com sua própria conta de desenvolvedor Apple e compile para o seu dispositivo. Isso exige um Mac e familiaridade básica com o Xcode e a assinatura de código do iOS.',
          },
          {
            q: 'Como o LLM Farm se compara ao PocketPal AI ou ao Private LLM?',
            a: 'O LLM Farm e o PocketPal AI são ambos gratuitos e sob licença MIT, mas o LLM Farm atualmente exige compilação a partir do código-fonte, enquanto o PocketPal AI se instala diretamente pela App Store e pelo Google Play. O LLM Farm suporta mais arquiteturas de modelos e inclui ajuste fino LoRA no dispositivo, o que nem o PocketPal AI nem o Private LLM (pago, de código fechado) oferecem. Escolha o LLM Farm somente se você se sentir confortável em compilar um app você mesmo; escolha o PocketPal AI ou o Private LLM se quiser algo instalável hoje. Veja a tabela comparativa acima para mais detalhes.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O LLM Farm continua sendo um dos projetos de código aberto de IA local tecnicamente mais capazes para dispositivos Apple — sua cobertura de arquiteturas e suas ferramentas de ajuste fino e fusão de LoRA no dispositivo vão além da maioria dos apps móveis dessa categoria, incluindo PocketPal AI e Private LLM. Mas, no momento desta análise, ele não é um app que a maioria das pessoas consiga realmente instalar: a Apple o removeu da App Store em agosto de 2025, o acesso ao TestFlight está fechado segundo o README do projeto, e a única via confirmada para executá-lo é compilar você mesmo o código aberto no Xcode. Essa é uma troca razoável para um desenvolvedor que queira inspecionar o código, experimentar ajuste fino LoRA ou usar uma arquitetura de modelo incomum. Não é um pedido razoável para alguém que só quer baixar um app e conversar com privacidade hoje — para isso, PocketPal AI (gratuito, código aberto, instalação direta) ou Private LLM (pago, refinado, instalação direta) são as escolhas práticas cobertas na seção de alternativas acima.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[LLM Farm no GitHub](https://github.com/guinmoon/LLMFarm) — código-fonte, licença (MIT), README, histórico de commits e números de estrelas/forks citados nesta análise.',
          '[Arquivo LICENSE do LLM Farm](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) — texto da licença MIT e titular dos direitos autorais (Artem Savkin, 2023).',
          '[Wiki do LLM Farm: FAQ](https://github.com/guinmoon/LLMFarm/wiki/FAQ) — notas de instalação e detalhes dos formatos de arquivo suportados.',
          '[Wiki do LLM Farm: LoRA](https://github.com/guinmoon/LLMFarm/wiki/lora) — documentação sobre carregamento, ajuste fino e fusão de LoRA.',
          '[llmfarm_core.swift no GitHub](https://github.com/guinmoon/llmfarm_core.swift) — a biblioteca de inferência subjacente citada nesta análise.',
          '[Histórico de versões no GitHub para guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm/releases) — última versão marcada (1.4.3, janeiro de 2025) citada nesta análise.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — o comparativo de iOS, com alternativas instaláveis ao LLM Farm.',
          '[Análise do PocketPal AI](/power-local-llm/pocketpal-ai-review) — uma alternativa gratuita, de código aberto e instalável diretamente para iPhone, iPad e Android.',
          '[Análise do Private LLM](/power-local-llm/private-llm-review) — uma alternativa paga, de código fechado, exclusiva da Apple, com um amplo catálogo de modelos.',
          '[Análise do Enclave AI](/power-local-llm/enclave-ai-review) — uma alternativa exclusiva da Apple com automação via Siri e Atalhos.',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — uma alternativa paga, de código fechado, em cinco plataformas, com uma biblioteca de modelos selecionada.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Farm, análise (2026): app GGUF de código aberto, fora da App Store',
      description:
        'Análise do LLM Farm: o app GGUF de código aberto para iOS/macOS, com licença MIT, com ajuste fino LoRA no dispositivo. Atualmente fora da App Store — o que isso significa e como compilá-lo.',
      url: 'https://promptquorum.com/power-local-llm/llm-farm-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: 'Usuários de iOS e macOS com conhecimento técnico avaliando apps de IA local de código aberto' },
      about: [
        { '@type': 'Thing', name: 'LLM Farm' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'Ajuste fino LoRA' },
        { '@type': 'Thing', name: 'LLM local' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llm-farm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLM Farm, análise (2026)', item: 'https://promptquorum.com/power-local-llm/llm-farm-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-farm-review-hero-zh.webp',
    title: 'LLM Farm 评测(2026):开源 GGUF 应用,已从 App Store 下架',
    seoTitle: 'LLM Farm 评测 2026:开源 iOS GGUF 运行时',
    intro:
      'LLM Farm 是一款面向 iOS 和 macOS 的免费开源(MIT 许可证)应用,通过基于 [ggml](https://github.com/ggerganov/ggml) 和 llama.cpp 的 Swift 封装层,在设备本地直接运行 GGUF 格式的语言模型。开发者是 Artem Savkin(GitHub 用户名 [guinmoon](https://github.com/guinmoon)),他于 2023 年 12 月首次将其发布到 App Store。截至本评测时,LLM Farm 既无法从 App Store 安装,也无法通过 TestFlight 安装——苹果于 2025 年 8 月下架了该应用,项目的 [GitHub README](https://github.com/guinmoon/LLMFarm) 仍将 App Store 和 TestFlight 两个渠道都标注为"暂时不可用"。本评测将介绍这款应用的功能、它在设备端进行 LoRA 微调与合并的工具(大多数移动端本地 AI 应用都不具备这一功能)、如何在今天从源代码构建它,以及最重要的一点——为什么它不适合任何不愿意自行编译 iOS 应用的人。',
    metaDescription:
      'LLM Farm 评测:这款开源、MIT 许可证的 iOS/macOS GGUF 应用支持设备端 LoRA 微调。目前已从 App Store 下架——这意味着什么以及如何自行构建。',
    twitterDescription:
      'LLM Farm 评测 2026:带设备端 LoRA 工具的开源 iOS/macOS GGUF 运行时——已从 App Store 下架,目前只能通过源代码构建。',
    audience:
      '愿意自行从源代码构建应用、追求开源 GGUF 运行时和 LoRA 微调功能的技术型 iOS 和 macOS 用户。',
    readTime: '阅读时间:11 分钟',
    educationalLevel: 'Advanced',
    primaryTerm: 'LLM Farm 评测',
    targetKeywords: [
      'llm farm 评测',
      'llmfarm ios',
      'llm farm app store',
      'llm farm guinmoon',
      'llm farm lora',
      '在iphone上运行gguf模型',
      '开源ios本地ai应用',
      'llm farm 替代品',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'Phi', 'LLaMA', 'Mixtral', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**LLM Farm 是一款免费、开源(MIT 许可证)的 iOS 和 macOS 应用,完全在设备本地运行 GGUF 语言模型,目前无法从 App Store 或 TestFlight 安装。** 该应用由开发者 Artem Savkin(GitHub 上的 [guinmoon](https://github.com/guinmoon))开发,于 2023 年 12 月首次发布,[GitHub 仓库](https://github.com/guinmoon/LLMFarm)已获得超过 2,000 个星标和 180 多个复刻(fork)。苹果于 2025 年 8 月下架了该应用在 App Store 的页面,截至本评测,项目的 README 仍将 App Store 和 TestFlight 都标注为"暂时不可用"。源代码依然公开并采用 MIT 许可证,因此可以通过 Xcode 编译和安装该应用,但这需要苹果开发者账号,以及从源代码构建 iOS 应用的相关经验——对大多数人而言,这已不再是一款点一下就能安装的应用。',
    quickAnswerTop: {
      zh: {
        question: '现在还能安装 LLM Farm 吗?值得吗?',
        answer:
          '无法通过 App Store 安装——苹果已于 2025 年 8 月下架该应用,项目自己的 GitHub README 仍将 App Store 和 TestFlight 都列为"暂时不可用"。目前唯一的途径是在 Xcode 中从源代码自行构建这款开源应用,这需要苹果开发者账号和基本的 iOS 构建经验。如果你能做到,LLM Farm 是少数真正具备 LoRA 微调和合并工具的移动应用之一;如果做不到,PocketPal AI 或 Private LLM 是今天就能一键安装的替代方案。',
        bullets: [
          '基于 MIT 许可证的免费开源应用,由 Artem Savkin 开发([guinmoon](https://github.com/guinmoon/LLMFarm),GitHub 上)。',
          '目前无法从 App Store 或 TestFlight 安装——苹果已于 2025 年 8 月将其从商店下架;截至本评测,GitHub README 确认了"暂时不可用"这一状态。',
          '目前唯一的安装途径是通过 Xcode 从源代码构建,这需要苹果开发者账号。',
          '支持在设备端加载、微调和合并 LoRA 适配器——这是大多数竞争应用所缺少的功能。',
          '通过自有的基于 ggml/llama.cpp 的引擎,运行涵盖 16 种以上架构(LLaMA、Gemma、Qwen、Phi、Mixtral、DeepSeek 等)的 GGUF 模型。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: 'LLM Farm 是什么?', anchor: 'what-is-llm-farm' },
      { label: '谁开发了 LLM Farm?', anchor: 'history-and-developer' },
      { label: 'LLM Farm 还在 App Store 上吗?', anchor: 'app-store-status' },
      { label: '今天如何获取 LLM Farm', anchor: 'getting-started' },
      { label: 'LLM Farm 支持哪些模型?', anchor: 'models-supported' },
      { label: 'LLM Farm 支持 iPhone、iPad 和 Mac 吗?', anchor: 'platform-availability' },
      { label: 'LLM Farm 收费吗?', anchor: 'pricing' },
      { label: 'LLM Farm 有哪些功能?', anchor: 'key-features' },
      { label: '设备端 LoRA 微调与合并', anchor: 'lora-finetuning' },
      { label: '需要什么样的硬件?', anchor: 'hardware-requirements' },
      { label: '谁适合使用 LLM Farm', anchor: 'who-should-use' },
      { label: '谁不适合使用 LLM Farm', anchor: 'who-should-not-use' },
      { label: 'LLM Farm 与替代方案对比', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LLM Farm 是由开发者 Artem Savkin 打造的免费开源(MIT 许可证)iOS 和 macOS 应用,用于在设备端运行 GGUF 语言模型,目前既不在 App Store 也不在 TestFlight 上架,唯一的获取方式是自行从源代码构建。',
          },
          {
            type: 'plain-terms',
            text: '这是一款本可以让你与完全运行在自己 iPhone 或 Mac 上的 AI 模型聊天的应用,不涉及任何云端服务器,源代码也是公开的——但目前无法通过 App Store 正常下载,需要使用苹果的开发工具 Xcode 自行编译。',
          },
        ],
        items: [
          '免费开源(MIT 许可证);源代码和问题追踪都公开在 [GitHub](https://github.com/guinmoon/LLMFarm) 上。',
          '由开发者 Artem Savkin 打造,GitHub 用户名为 [guinmoon](https://github.com/guinmoon),于 2023 年 12 月首次在 App Store 发布。',
          '苹果已于 2025 年 8 月下架该应用在 App Store 的页面;项目 README 仍将 App Store 和 TestFlight 都描述为"暂时不可用"。',
          '通过自有的基于 ggml/llama.cpp 的引擎,运行涵盖 LLaMA、Gemma、Qwen、Phi、Mixtral、DeepSeek 在内的 16 种以上模型架构的 GGUF 模型。',
          '是少数在设备端内置 LoRA 适配器加载、微调和合并功能的移动端本地 AI 应用之一。',
          '仅支持 iOS(16 及以上)和 macOS(13 及以上)——没有 Android、Windows 或 Linux 版本。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于公开的 [GitHub 仓库](https://github.com/guinmoon/LLMFarm)(README、Wiki FAQ、许可证文件、提交与发布历史)以及苹果 App Store 的上架状态,核实时间为 2026 年 9 月。PromptQuorum 并未针对本评测对 LLM Farm 进行独立的实机测试——下文的硬件数字是本地 LLM 的通用参考,而非针对该应用的实测数据。',
          },
          {
            type: 'warning',
            text: '截至本评测时,LLM Farm 无法从 App Store 或 TestFlight 安装。此前存在于 `apps.apple.com/app/llm-farm/id6461209867` 的 App Store 页面已无法访问。任何想使用这款应用的人都必须使用 Xcode 从源代码构建,这需要免费或付费的苹果开发者账号,以及对 iOS 构建工具的熟悉程度。',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-farm',
        title: 'LLM Farm 是什么?',
        content: [
          '**LLM Farm 是一款移动端与桌面端应用,下载 GGUF 格式的开放权重语言模型,并在 iPhone、iPad 或 Mac 上本地运行,使用开发者自建的 Swift 封装库([llmfarm_core.swift](https://github.com/guinmoon/llmfarm_core.swift))包装 [ggml](https://github.com/ggerganov/ggml) 和 llama.cpp 作为推理引擎。** 该应用本身采用 [MIT 许可证](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE),意味着完整源代码是公开的,可以自由查看、复刻(fork)或修改。',
          'LLM Farm 支持的模型架构范围远超常见的 LLaMA 系列——仓库中列出了 16 种以上受支持的架构,包括 GPT-2、Starcoder、Falcon、MPT、Bloom、StableLM 和 RWKV,以及 LLaVA、Moondream 等多模态视觉语言模型。它还包含设备端 LoRA 加载、微调和适配器合并工具,这套功能组合更接近本地机器学习实验工具,而不是简单的聊天应用。',
        ],
        note: 'GGUF 是一种文件格式,用于打包量化后的开放权重语言模型,使其能够通过 llama.cpp 和 ggml 等运行时在消费级硬件上高效运行,而不必为每次响应都调用云端 API。',
      },
      history: {
        id: 'history-and-developer',
        title: '谁开发了 LLM Farm?',
        content: [
          '**LLM Farm 由开发者 Artem Savkin 创建,他以 GitHub 用户名 [guinmoon](https://github.com/guinmoon) 发布内容,该应用于 2023 年 12 月 13 日首次登陆 App Store。** [仓库中的 LICENSE 文件](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE)注明版权持有人为 Artem Savkin,时间为 2023 年。',
          '该项目由个人独立维护,而非由某家有资金支持的公司运营。[GitHub 仓库](https://github.com/guinmoon/LLMFarm)创建于 2023 年 6 月,截至本评测时已积累超过 2,000 个星标和 180 多个复刻,问题追踪器中有 46 个未解决的 issue。自从 App Store 下架以来,开发工作断断续续地持续着:提交历史显示,底层 llama.cpp 引擎的更新一直持续到 2025 年 12 月,README 也在 2026 年 1 月有过更新,但项目最后一个打标签的版本(1.4.3)发布于 2025 年 1 月——也就是说,截至本评测时,代码变更已经在一年多的时间里没有产生新的打包版本。',
        ],
        items: [
          '开发者:Artem Savkin(GitHub:[guinmoon](https://github.com/guinmoon)),独立开发,而非公司运营。',
          'App Store 上线时间:2023 年 12 月 13 日。GitHub 仓库创建时间:2023 年 6 月 14 日。',
          '许可证:MIT——宽松的开源许可证,可自由使用、复刻和修改。根据 LICENSE 文件,版权持有人为 Artem Savkin,2023 年。',
          '截至本评测时,GitHub 星标数超过 2,000,复刻数超过 180,问题追踪器活跃但未清空(46 个未解决 issue)。',
          '开发节奏:自 2025 年以来时断时续——更新 llama.cpp 依赖和文档的提交一直持续到 2026 年初,但自 2025 年 1 月发布 1.4.3 版本以来,再未发布过新的打标签版本。',
        ],
      },
      appStoreStatus: {
        id: 'app-store-status',
        title: 'LLM Farm 还在 App Store 上吗?',
        content: [
          '**不在。截至本评测时,LLM Farm 无法从 Apple App Store 下载,其 TestFlight 测试版渠道也已关闭。** 该应用最初于 2023 年 12 月 13 日在 App Store 发布,根据项目的发布和提交历史,苹果大约在 2025 年 8 月 8 日将其下架。此前存在于 `apps.apple.com/app/llm-farm/id6461209867` 的 App Store 页面已无法访问。',
          '项目自己的 [GitHub README](https://github.com/guinmoon/LLMFarm) 中直接写道:"The app is temporarily unavailable in TestFlight and Appstore"(该应用在 TestFlight 和 App Store 中暂时不可用)。PromptQuorum 无法确认下架原因——仓库中也没有说明——也无法确认该应用是否会、或何时会重新上架到这两个分发渠道中的任何一个。一个较旧的 Wiki FAQ 页面提到,如果 TestFlight 无法访问,开发者此前曾表示愿意为发邮件联系他的用户手动构建一个 `.ipa` 文件;本评测无法确认这一提议目前是否仍然有效,因为当前的 README 中并未重复提及此事。',
        ],
        items: [
          'App Store 状态:根据项目的提交和发布历史,大约自 2025 年 8 月起下架。',
          'TestFlight 状态:根据当前的 GitHub README,截至本评测时已关闭。',
          '下架原因:开发者和苹果均未在 PromptQuorum 能够找到的任何来源中说明。',
          '目前唯一确认可行的安装途径:通过公开的 GitHub 仓库,使用 Xcode 从源代码构建。',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: '今天如何获取 LLM Farm',
        content: [
          '**由于 LLM Farm 目前不在 App Store 上,使用它就意味着要用 Xcode 从源代码构建这个开源项目——这比下载一款应用的门槛要高得多。** 以下步骤遵循项目自己 [GitHub 仓库](https://github.com/guinmoon/LLMFarm)中的构建说明。',
        ],
        numberedItems: [
          {
            title: '安装 Xcode 和苹果开发者账号',
            whyItMatters: '你需要一台安装了 Xcode 的 Mac,以及一个免费或付费的苹果开发者账号,才能为自己的设备编译并签名这款应用。这是非开发者面临的主要障碍。',
          },
          {
            title: '递归克隆仓库',
            whyItMatters: '运行 `git clone --recurse-submodules https://github.com/guinmoon/LLMFarm`——需要加上 `--recurse-submodules` 参数,因为底层的推理库 `llmfarm_core` 已被移到一个单独的仓库,并作为子模块引入。',
          },
          {
            title: '在 Xcode 中打开项目并为你的设备构建',
            whyItMatters: '打开 Xcode 项目文件,选择你的设备或 Mac 目标,设置你自己的开发者签名团队,然后进行构建。这样就能得到一个可以在你自己硬件上运行的应用,但不能通过 App Store 分发给其他人。',
          },
          {
            title: '下载 GGUF 模型并加载它',
            whyItMatters: '应用运行起来后,添加一个 GGUF 模型文件(来自 Hugging Face 或其他来源),并从应用的模型管理界面加载它,然后就可以开始完全在设备端进行的聊天。',
          },
        ],
        note: '此流程假定你对 Xcode 和 iOS 代码签名有基本的了解。不愿意从源代码构建应用的用户,应考虑使用可以一键安装的替代方案,如 PocketPal AI 或 Private LLM——参见下方的替代方案部分。',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'LLM Farm 支持哪些模型?',
        itemHeadings: true,
        columns: ['模型系列', '类别', '备注'],
        rows: [
          {
            '模型系列': 'LLaMA、Gemma、Qwen、Phi、Mixtral、DeepSeek、Yi、StableLM',
            '类别': '文本生成',
            '备注': '通过应用基于 ggml/llama.cpp 的引擎以 GGUF 文件形式加载',
          },
          {
            '模型系列': 'GPT-2、Starcoder、Falcon、MPT、Bloom、RWKV、Mamba、GPTNeoX、PLaMo',
            '类别': '文本生成(旧式/小众架构)',
            '备注': '架构覆盖范围比大多数竞争的移动应用更广',
          },
          {
            '模型系列': 'LLaVA(1.5/1.6)、BakLLaVA、Obsidian、ShareGPT4V、MobileVLM、Yi-VL、Moondream',
            '类别': '多模态(视觉语言)',
            '备注': '根据项目 README,支持图片加文本的输入',
          },
          {
            '模型系列': '其他任何 GGUF 或 GGJTv3 模型',
            '类别': '自定义导入',
            '备注': '根据项目 Wiki,GGUF 需要 `.gguf` 扩展名,较旧的 GGJTv3 格式需要 `.bin` 扩展名',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'LLM Farm 支持 iPhone、iPad 和 Mac 吗?',
        itemHeadings: true,
        columns: ['平台', '可用性', '备注'],
        rows: [
          {
            '平台': 'iPhone / iPad',
            '可用性': '需要通过 Xcode 构建——截至本评测时无法从 App Store 安装',
            '备注': '根据项目 README,最低需要 iOS 16;设备端推理使用 Metal 加速。',
          },
          {
            '平台': 'Mac',
            '可用性': '需要通过 Xcode 构建',
            '备注': '根据项目 README,最低需要 macOS 13;同一代码库中包含与 iOS/iPadOS 并列的原生 macOS 支持。',
          },
          {
            '平台': 'Android / Windows / Linux',
            '可用性': '不支持',
            '备注': 'LLM Farm 没有 Android、Windows 或 Linux 版本。Android 用户应改用 RikkaHub、ChatterUI 或 Maid。',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'LLM Farm 收费吗?',
        content: [
          '**LLM Farm 本身是基于 MIT 许可证的免费开源软件——其代码或聊天功能没有购买价格,也没有订阅费用。** 在本文查阅的仓库、Wiki 以及历史 App Store 页面文本中,PromptQuorum 没有发现任何应用内购买、高级套餐或付费市场的证据。',
          '如今使用 LLM Farm 的实际成本是间接的:你需要一台 Mac 来构建这款应用(Xcode 只在 macOS 上存在),而根据苹果开发者账号类型的不同,要么完全免费(使用免费的个人团队签名,仅限自己的设备,证书大约每七天需要续签一次),要么需要缴纳 [Apple Developer Program](https://developer.apple.com/programs/) 的费用以获得有效期更长的签名证书。除此之外,下载的 GGUF 模型文件会占用存储空间,通常每个模型需要几个 GB,这与其他任何本地 LLM 应用相同。',
        ],
        items: [
          '**应用本身:** 免费,基于 MIT 许可证的开源软件——未发现其代码或功能有购买价格。',
          '**应用内购买:** 在本文查阅的资料中未发现任何应用内购买项目。',
          '**构建工具:** Xcode 免费,但需要一台 Mac;免费的 Apple ID 可以用一个大约每七天需要续签一次的证书为个人使用签署构建版本,而付费的 Apple Developer Program 会员资格可以避免这一续签周期。',
          '**存储成本:** 非货币性,但确实存在——每个下载的 GGUF 模型文件都会占用存储空间,通常每个模型需要几个 GB。',
        ],
      },
      features: {
        id: 'key-features',
        title: 'LLM Farm 有哪些功能?',
        content: [
          '**除了在本地运行 GGUF 模型之外,根据其 GitHub README 和 Wiki,LLM Farm 的功能组合更偏向本地机器学习实验工具,而非简单的聊天客户端。** 具体包括:',
        ],
        items: [
          '**广泛的架构支持。** 支持 16 种以上模型架构,其中包括 Starcoder、Falcon、MPT、Bloom、RWKV、GPTNeoX 等其他移动端本地 AI 应用通常不支持的架构。',
          '**多模态(视觉语言)模型。** 根据 README,对 LLaVA、BakLLaVA、Obsidian、ShareGPT4V、MobileVLM、Yi-VL 和 Moondream 的支持让应用能够处理图片加文本的提示。',
          '**多种采样方法。** Temperature、Tail-Free Sampling(TFS)、Locally Typical Sampling、Mirostat、Greedy 以及语法约束采样都在支持的选项之列。',
          '**语法约束输出。** 语法采样可以将模型的输出限制为定义好的结构(如有效的 JSON),对结构化输出的使用场景很有用。',
          '**模型设置模板与上下文恢复。** 可以为每个模型保存配置,并能够恢复对话的上下文状态,而不必从头重新处理。',
          '**苹果快捷指令集成。** 根据 README,该应用可以从苹果的快捷指令自动化应用中触发。',
          '**基础的检索增强生成(RAG)。** README 中列出了 RAG 能力,但在本文查阅的资料中,项目文档并未详细说明其具体的检索方法或支持的文档格式。',
        ],
        note: '功能的可用性可能因构建版本而异,而且由于该应用目前无法从 App Store 安装,你自己构建的版本可能与旧版 App Store 页面文本中描述的所有功能并不完全一致。请查看 [GitHub 仓库](https://github.com/guinmoon/LLMFarm)及其提交历史,了解当前源代码中实际存在的内容。',
      },
      loraFinetuning: {
        id: 'lora-finetuning',
        title: '设备端 LoRA 微调与合并',
        content: [
          '**LLM Farm 包含设备端的 LoRA(低秩适应)工具——加载适配器、对基础模型进行微调,以及将训练好的适配器合并回基础模型——这一组合是大多数移动端本地 AI 应用完全不具备的。** 根据项目的 [Wiki 文档](https://github.com/guinmoon/LLMFarm/wiki/lora):',
          'LoRA 适配器可以通过将适配器文件放入 `lora_adapters` 目录来加载,可以通过聊天设置界面加载单个适配器,也可以在配置文件中配置多个各自带有独立比例参数的适配器。微调功能可直接在应用内的 Settings > FineTune 中使用,但 Wiki 指出,这在移动硬件上资源消耗很大——文档中说明,在 iOS 上实际只能在最低设置下支持约 30 亿参数规模的模型。另一个独立的 Settings > Merge Lora 功能可以将训练好的适配器与其基础模型合并并导出,Wiki 建议使用 Q4_K 或更低的量化方式,以获得在 iOS 上实用的性能。',
        ],
        items: [
          '加载一个或多个 LoRA 适配器,每个都可单独配置比例参数。',
          '通过 Settings > FineTune 在设备端对基础模型进行微调——根据 Wiki,在 iOS 上实际上限于最低设置下约 30 亿参数规模的模型。',
          '将训练好的 LoRA 适配器与其基础模型合并,并通过 Settings > Merge Lora 导出。',
          '权衡取舍:Wiki 指出,连接 LoRA 适配器时无法使用内存映射文件加载(mmap),这会比单独运行基础模型消耗更多的 RAM。',
        ],
        note: '本评测并未在 LLM Farm 中独立进行模型微调,以验证训练速度或输出质量——上文的描述总结了项目自身文档对该功能的说明,而非 PromptQuorum 的基准测试。',
      },
      hardware: {
        id: 'hardware-requirements',
        title: '运行 LLM Farm 需要什么样的硬件?',
        content: [
          '**决定实际硬件门槛的是你选择的模型,而不是应用本身——作为本地 LLM 的通用参考,一个经过量化的 20 亿到 40 亿参数模型大约需要 3-4 GB 的空闲 RAM,而一个 70 亿到 80 亿参数的模型则需要 8 GB 或更多。** 这是 GGUF 的标准硬件参考,不是针对 LLM Farm 的具体基准测试;PromptQuorum 并未独立测量 LLM Farm 每个模型的确切内存占用。',
          '在 iPhone、iPad 和 Mac 上,LLM Farm 使用 Metal 加速进行推理,这在 Apple Silicon 硬件上通常比纯 CPU 执行速度更快。根据项目 README,该应用最低需要 iOS 16 或 macOS 13,因此无法运行这些系统版本的旧设备,无论 RAM 多大都无法运行该应用。',
        ],
        items: [
          '小型模型(20 亿至 40 亿参数,量化):在大多数近年的 iPhone 和 Mac 上,只要有 4 GB 以上的空闲 RAM 即可使用。',
          '中型模型(70 亿至 80 亿参数,量化):建议设备 RAM 达到 8 GB 或更多,以获得可接受的响应速度。',
          '专门针对 LoRA 微调:根据项目 Wiki,由于设备端计算和内存的限制,在 iOS 上实际仅限于最低设置下约 30 亿参数规模的模型。',
          '最低系统版本:根据 GitHub README,为 iOS 16 或 macOS 13。',
          '存储空间:每个下载的 GGUF 模型文件应预留数 GB 的空闲空间。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用 LLM Farm',
        items: [
          '**愿意在 Xcode 中从源代码构建应用的开发者。** 由于 App Store 和 TestFlight 目前都已关闭,这是一项硬性要求,而不是可有可无的加分项。',
          '**特别希望在设备端进行 LoRA 微调或适配器合并的用户。** 大多数竞争的移动端本地 AI 应用完全不提供这套功能。',
          '**希望在移动设备上获得最广泛支持模型架构范围的用户。** 支持超过十六种架构,其中包括 RWKV、Mamba、GPTNeoX 等小众架构,对一款手机应用来说异常广泛。',
          '**希望自己检查或修改代码的用户。** MIT 许可证允许复刻和修改,这个代码库是理解基于 Swift 的 llama.cpp/ggml 封装层的有用参考。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用 LLM Farm',
        items: [
          '**任何无法或不愿意从源代码构建 iOS/macOS 应用的人。** 这是目前应避开 LLM Farm 的最主要原因:截至本评测时,既没有 App Store 安装途径,也没有确认可用的 TestFlight 访问。',
          '**需要 Android、Windows 或 Linux 支持的用户。** LLM Farm 只支持苹果平台;Android 用户应考虑 RikkaHub、ChatterUI 或 Maid,没有 Mac 的桌面用户应考虑 Ollama、LM Studio 或 Jan AI。',
          '**希望今天就能确保可以安装应用的用户。** PocketPal AI 和 Private LLM 都可以立即从 App Store 安装,无需自行构建任何东西。',
          '**期望频繁、有版本号发布的用户。** 该项目最后一个打标签的版本发布于 2025 年 1 月;虽然此后提交断断续续地持续着,但截至本评测时,已经一年多没有发布新的打包版本。',
          '**需要有保障的支持或明确路线图的用户。** 根据仓库历史记录,LLM Farm 由一名开发者独立维护,并没有明确承诺会恢复其在 App Store 的上架状态。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'LLM Farm 与替代方案对比',
        itemHeadings: true,
        columns: ['应用', '许可证/费用', '平台', '当前安装途径'],
        rows: [
          {
            '应用': 'LLM Farm',
            '许可证/费用': '免费,开源(MIT)',
            '平台': 'iPhone/iPad、Mac',
            '当前安装途径': '仅能通过 Xcode 构建——App Store 和 TestFlight 均已关闭',
          },
          {
            '应用': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            '许可证/费用': '免费,开源(MIT)',
            '平台': 'iPhone/iPad、Android',
            '当前安装途径': 'App Store 和 Google Play,直接安装',
          },
          {
            '应用': '[Private LLM](/power-local-llm/private-llm-review)',
            '许可证/费用': '付费,一次性购买;闭源',
            '平台': 'iPhone/iPad/Mac(仅苹果平台)',
            '当前安装途径': 'App Store,直接安装',
          },
          {
            '应用': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            '许可证/费用': '免费带付费套餐;闭源',
            '平台': 'iPhone/iPad/Mac(仅苹果平台)',
            '当前安装途径': 'App Store,直接安装',
          },
          {
            '应用': 'Layla',
            '许可证/费用': '有免费和付费套餐;闭源',
            '平台': '根据 [layla-network.ai](https://www.layla-network.ai),支持 Android 和 iOS',
            '当前安装途径': '在假定存在免费套餐之前,请先访问 [layla-network.ai](https://www.layla-network.ai) 核实当前可用性',
          },
          {
            '应用': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            '许可证/费用': '免费,开源',
            '平台': 'Android',
            '当前安装途径': 'Google Play 或从源代码构建',
          },
          {
            '应用': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            '许可证/费用': '免费,开源(AGPL-3.0)',
            '平台': 'Android',
            '当前安装途径': '自行构建或安装发布版 APK',
          },
          {
            '应用': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            '许可证/费用': '免费,开源',
            '平台': 'Android',
            '当前安装途径': 'GitHub 发布版本或从源代码构建',
          },
          {
            '应用': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            '许可证/费用': '免费,开源',
            '平台': 'Android;截至本评测时 iOS 版尚未推出',
            '当前安装途径': 'Google Play 或 AnythingLLM Mobile 官网',
          },
        ],
        note: '这一类别的可用性状态变化频繁——此表反映的是 PromptQuorum 在 2026 年 9 月能够核实的信息。在假定某个链接仍然有效之前,请先查看各项目自己的页面。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'LLM Farm 还存在吗?',
            a: '这个开源项目在 GitHub 上仍然活跃,但该应用目前既无法从 App Store 安装,也无法通过 TestFlight 安装。苹果大约在 2025 年 8 月下架了 App Store 页面,截至本评测时,项目 README 仍将这两个渠道都描述为"暂时不可用"。目前唯一的途径是使用 Xcode 从源代码构建它。',
          },
          {
            q: 'LLM Farm 为什么被 App Store 下架?',
            a: '在本文查阅的所有资料中,PromptQuorum 都没有找到开发者或苹果给出的明确原因。项目的 GitHub README 承认了下架的事实,但没有说明原因。',
          },
          {
            q: 'LLM Farm 免费吗?',
            a: '是的。LLM Farm 基于 MIT 许可证免费开源,PromptQuorum 在查阅的资料中没有发现任何应用内购买或付费套餐的证据。实际成本是一台 Mac 和 Xcode 用于构建应用,再加上一个苹果开发者账号。',
          },
          {
            q: 'LLM Farm 是谁开发的?',
            a: 'LLM Farm 由开发者 Artem Savkin 创建,他以 GitHub 用户名 [guinmoon](https://github.com/guinmoon) 发布内容。该项目由个人独立维护,而非某家公司。',
          },
          {
            q: 'LLM Farm 是开源的吗?',
            a: '是的,完整源代码发布在 [GitHub](https://github.com/guinmoon/LLMFarm) 上,采用 MIT 许可证——一种允许自由使用、修改和再分发的宽松许可证。',
          },
          {
            q: 'LLM Farm 可以用 LoRA 对模型进行微调吗?',
            a: '可以,根据项目的 Wiki 文档。LLM Farm 支持加载 LoRA 适配器、在设备端对基础模型进行微调(根据 Wiki,在 iOS 上实际限于约 30 亿参数规模),以及将训练好的适配器合并回基础模型。大多数竞争的移动端本地 AI 应用都不提供这一功能。',
          },
          {
            q: 'LLM Farm 支持 Android 吗?',
            a: '不支持。根据其 GitHub README,LLM Farm 仅支持 iOS(16 及以上)和 macOS(13 及以上)。Android 用户应考虑 RikkaHub、ChatterUI 或 Maid。',
          },
          {
            q: '不通过 App Store 如何安装 LLM Farm?',
            a: '使用 `git clone --recurse-submodules` 递归克隆 [GitHub 仓库](https://github.com/guinmoon/LLMFarm),在 Xcode 中打开该项目,用你自己的苹果开发者账号进行签名,然后为你的设备构建。这需要一台 Mac,以及对 Xcode 和 iOS 代码签名的基本了解。',
          },
          {
            q: 'LLM Farm 与 PocketPal AI 或 Private LLM 相比如何?',
            a: 'LLM Farm 和 PocketPal AI 都是免费且基于 MIT 许可证的,但 LLM Farm 目前需要从源代码构建,而 PocketPal AI 可以直接从 App Store 和 Google Play 安装。LLM Farm 支持更多的模型架构,并包含设备端 LoRA 微调功能,这是 PocketPal AI 和付费闭源的 Private LLM 都不具备的。只有当你愿意自己构建应用时,才应该选择 LLM Farm;如果你想要今天就能安装的应用,应该选择 PocketPal AI 或 Private LLM。详情请参见上方的对比表。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'LLM Farm 依然是面向苹果设备最具技术实力的开源本地 AI 项目之一——其架构覆盖范围以及设备端 LoRA 微调和合并工具,比这一类别中包括 PocketPal AI 和 Private LLM 在内的大多数移动应用走得更远。但截至本评测时,它并不是大多数人真正能够安装的应用:苹果已于 2025 年 8 月将其从 App Store 下架,根据项目 README,TestFlight 访问也已关闭,目前唯一确认可行的运行方式是自己在 Xcode 中编译这份开源代码。对于想要检查代码、尝试 LoRA 微调或使用某种不常见模型架构的开发者来说,这是一个合理的取舍。但对于只是想今天就下载一款应用并私密聊天的人来说,这就不是一个合理的要求了——对于这类需求,上文替代方案部分中提到的 PocketPal AI(免费、开源、直接安装)或 Private LLM(付费、精致、直接安装)才是实际可行的选择。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[LLM Farm 的 GitHub 页面](https://github.com/guinmoon/LLMFarm)——本评测中引用的源代码、许可证(MIT)、README、提交历史以及星标/复刻数量。',
          '[LLM Farm 的 LICENSE 文件](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE)——MIT 许可证文本及版权持有人(Artem Savkin,2023 年)。',
          '[LLM Farm Wiki:FAQ](https://github.com/guinmoon/LLMFarm/wiki/FAQ)——安装说明及支持的文件格式详情。',
          '[LLM Farm Wiki:LoRA](https://github.com/guinmoon/LLMFarm/wiki/lora)——关于 LoRA 加载、微调和合并的文档。',
          '[llmfarm_core.swift 的 GitHub 页面](https://github.com/guinmoon/llmfarm_core.swift)——本评测中提到的底层推理库。',
          '[guinmoon/LLMFarm 的 GitHub 发布历史](https://github.com/guinmoon/LLMFarm/releases)——本评测中提到的最后一个打标签版本(1.4.3,2025 年 1 月)。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026)——iOS 应用汇总,比较了 LLM Farm 的可安装替代方案。',
          '[PocketPal AI 评测](/power-local-llm/pocketpal-ai-review)——一款面向 iPhone、iPad 和 Android 的免费、开源、可直接安装的替代方案。',
          '[Private LLM 评测](/power-local-llm/private-llm-review)——一款仅限苹果平台的付费闭源替代方案,拥有庞大的精选模型目录。',
          '[Enclave AI 评测](/power-local-llm/enclave-ai-review)——一款仅限苹果平台的替代方案,具备 Siri 和快捷指令自动化功能。',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai)——一款覆盖五个平台的付费闭源替代方案,拥有精选模型库。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Farm 评测(2026):开源 GGUF 应用,已从 App Store 下架',
      description:
        'LLM Farm 评测:这款开源、MIT 许可证的 iOS/macOS GGUF 应用支持设备端 LoRA 微调。目前已从 App Store 下架——这意味着什么以及如何自行构建。',
      url: 'https://promptquorum.com/power-local-llm/llm-farm-review',
      inLanguage: 'zh',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: '正在评估开源本地 AI 应用的技术型 iOS 和 macOS 用户' },
      about: [
        { '@type': 'Thing', name: 'LLM Farm' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'LoRA 微调' },
        { '@type': 'Thing', name: '本地 LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llm-farm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLM Farm 评测(2026)', item: 'https://promptquorum.com/power-local-llm/llm-farm-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-farm-review-hero-ko.webp',
    title: 'LLM Farm 리뷰(2026): 오픈소스 GGUF 앱, 앱스토어에서는 내려감',
    seoTitle: 'LLM Farm 리뷰 2026: 오픈소스 iOS GGUF 런타임',
    intro:
      'LLM Farm은 [ggml](https://github.com/ggerganov/ggml)과 llama.cpp를 감싼 Swift 래퍼를 통해 GGUF 형식의 언어 모델을 기기에서 직접 실행하는, iOS와 macOS용 무료 오픈소스(MIT 라이선스) 앱입니다. 개발자 Artem Savkin(GitHub 아이디 [guinmoon](https://github.com/guinmoon))이 만들었으며, 2023년 12월 앱스토어에 처음 출시되었습니다. 이 리뷰 시점 기준으로 LLM Farm은 앱스토어나 TestFlight에서 설치할 수 없습니다. 애플은 2025년 8월에 앱스토어 등록을 삭제했고, 프로젝트의 [GitHub README](https://github.com/guinmoon/LLMFarm)는 여전히 두 배포 채널 모두 "일시적으로 이용할 수 없음"이라고 설명하고 있습니다. 이 리뷰에서는 이 앱이 무엇을 하는지, 대부분의 모바일 로컬 AI 앱에는 없는 기기 내 LoRA 파인튜닝 및 병합 도구, 오늘날 소스 코드에서 직접 빌드하는 방법, 그리고 무엇보다 직접 iOS 앱을 컴파일하는 것이 부담스러운 사람에게는 적합하지 않은 이유를 다룹니다.',
    metaDescription:
      'LLM Farm 리뷰: 기기 내 LoRA 파인튜닝을 지원하는 오픈소스, MIT 라이선스 iOS/macOS GGUF 앱. 현재 앱스토어에는 없음 — 그 의미와 빌드 방법을 설명합니다.',
    twitterDescription:
      'LLM Farm 리뷰 2026: 기기 내 LoRA 도구를 갖춘 오픈소스 iOS/macOS GGUF 런타임 — 앱스토어에서 삭제되어 현재는 소스 코드로만 빌드 가능.',
    audience:
      '오픈소스 GGUF 런타임과 LoRA 파인튜닝을 원하며, 직접 소스 코드에서 앱을 빌드할 의향이 있는 기술에 능숙한 iOS 및 macOS 사용자.',
    readTime: '읽는 시간: 11분',
    educationalLevel: 'Advanced',
    primaryTerm: 'LLM Farm 리뷰',
    targetKeywords: [
      'llm farm 리뷰',
      'llmfarm ios',
      'llm farm 앱스토어',
      'llm farm guinmoon',
      'llm farm lora',
      '아이폰에서 gguf 모델 실행',
      '오픈소스 ios 로컬 ai 앱',
      'llm farm 대안',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'Phi', 'LLaMA', 'Mixtral', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**LLM Farm은 GGUF 언어 모델을 완전히 기기 내에서 실행하는 무료 오픈소스(MIT 라이선스) iOS 및 macOS 앱이며, 현재는 앱스토어나 TestFlight에서 설치할 수 없습니다.** 개발자 Artem Savkin(GitHub에서 [guinmoon](https://github.com/guinmoon))이 만들어 2023년 12월에 처음 출시했고, [GitHub 저장소](https://github.com/guinmoon/LLMFarm)는 2,000개 이상의 스타와 180개 이상의 포크를 보유하고 있습니다. 애플은 2025년 8월에 앱스토어 등록을 삭제했으며, 이 리뷰 시점 기준으로 프로젝트의 README는 여전히 앱스토어와 TestFlight를 모두 "일시적으로 이용할 수 없음"으로 표시하고 있습니다. 소스 코드는 여전히 공개되어 있고 MIT 라이선스이므로 Xcode로 컴파일하고 설치할 수는 있지만, 이를 위해서는 Apple 개발자 계정과 소스 코드에서 iOS 앱을 빌드하는 데 익숙함이 필요합니다. 대부분의 사람에게 이는 더 이상 탭 한 번으로 설치할 수 있는 앱이 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'LLM Farm을 지금도 설치할 수 있나요? 그럴 가치가 있나요?',
        answer:
          '앱스토어에서는 불가능합니다. 애플이 2025년 8월에 등록을 삭제했고, 프로젝트 자체의 GitHub README는 여전히 앱스토어와 TestFlight를 모두 "일시적으로 이용할 수 없음"으로 나열하고 있습니다. 현재 유일한 방법은 Xcode에서 오픈소스 앱을 소스 코드로부터 직접 빌드하는 것이며, 여기에는 Apple 개발자 계정과 기본적인 iOS 빌드 경험이 필요합니다. 이를 할 수 있다면 LLM Farm은 실제 LoRA 파인튜닝과 병합 도구를 갖춘 몇 안 되는 모바일 앱 중 하나입니다. 할 수 없다면 PocketPal AI나 Private LLM이 오늘 당장 휴대폰에 설치할 수 있는 대안입니다.',
        bullets: [
          'MIT 라이선스 아래 무료 오픈소스이며, 개발자는 Artem Savkin([guinmoon](https://github.com/guinmoon/LLMFarm), GitHub).',
          '현재 앱스토어나 TestFlight에서 설치할 수 없음 — 애플이 2025년 8월에 스토어에서 삭제했으며, 이 리뷰 시점 기준으로 GitHub README가 "일시적으로 이용할 수 없음" 상태를 확인해 줌.',
          '현재 유일한 설치 경로는 Xcode를 통한 소스 코드 빌드이며, Apple 개발자 계정이 필요함.',
          '기기에서 직접 LoRA 어댑터를 불러오고, 파인튜닝하고, 병합하는 기능을 지원 — 대부분의 경쟁 앱에는 없는 기능.',
          '자체 ggml/llama.cpp 기반 엔진으로 LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek 등 16개 이상의 아키텍처에 걸친 GGUF 모델을 실행.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'LLM Farm이란?', anchor: 'what-is-llm-farm' },
      { label: 'LLM Farm은 누가 만들었나?', anchor: 'history-and-developer' },
      { label: 'LLM Farm은 아직 앱스토어에 있나?', anchor: 'app-store-status' },
      { label: '오늘 LLM Farm을 구하는 방법', anchor: 'getting-started' },
      { label: 'LLM Farm은 어떤 모델을 지원하나?', anchor: 'models-supported' },
      { label: 'LLM Farm은 아이폰, 아이패드, 맥에서 사용 가능한가?', anchor: 'platform-availability' },
      { label: 'LLM Farm의 가격은?', anchor: 'pricing' },
      { label: 'LLM Farm의 기능은?', anchor: 'key-features' },
      { label: '기기 내 LoRA 파인튜닝과 병합', anchor: 'lora-finetuning' },
      { label: '어떤 하드웨어가 필요한가?', anchor: 'hardware-requirements' },
      { label: 'LLM Farm이 적합한 사람', anchor: 'who-should-use' },
      { label: 'LLM Farm이 적합하지 않은 사람', anchor: 'who-should-not-use' },
      { label: 'LLM Farm 대 대안 앱', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LLM Farm은 개발자 Artem Savkin이 만든, GGUF 언어 모델을 기기에서 실행하는 무료 오픈소스(MIT 라이선스) iOS 및 macOS 앱으로, 현재 앱스토어와 TestFlight 어디에도 없으며 유일한 입수 방법은 직접 소스 코드에서 빌드하는 것입니다.',
          },
          {
            type: 'plain-terms',
            text: '클라우드 서버 없이 자신의 아이폰이나 맥에서 완전히 실행되는 AI 모델과 대화할 수 있게 해주고 소스 코드도 공개된 앱이지만, 현재는 앱스토어에서 정상적인 방법으로 다운로드할 수 없고, 애플의 개발자 도구인 Xcode를 사용해 직접 빌드해야 합니다.',
          },
        ],
        items: [
          '무료이며 오픈소스(MIT 라이선스). 소스 코드와 이슈 트래커는 [GitHub](https://github.com/guinmoon/LLMFarm)에 공개되어 있음.',
          '개발자 Artem Savkin이 만들었으며, GitHub 아이디는 [guinmoon](https://github.com/guinmoon). 2023년 12월 앱스토어에 처음 출시.',
          '애플이 2025년 8월에 앱스토어 등록을 삭제; 프로젝트 README는 여전히 앱스토어와 TestFlight 모두를 "일시적으로 이용할 수 없음"으로 설명.',
          '자체 ggml/llama.cpp 기반 엔진으로 LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek를 포함한 16개 이상의 모델 아키텍처의 GGUF 모델을 실행.',
          '기기에서 직접 LoRA 어댑터 불러오기, 파인튜닝, 병합 기능을 내장한 몇 안 되는 모바일 로컬 AI 앱 중 하나.',
          'iOS(16 이상)와 macOS(13 이상)만 지원 — Android, Windows, Linux 버전 없음.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 공개된 [GitHub 저장소](https://github.com/guinmoon/LLMFarm)(README, 위키 FAQ, 라이선스 파일, 커밋 및 릴리스 이력)와 애플 앱스토어 등록 상태를 2026년 9월 기준으로 확인해 작성했습니다. PromptQuorum은 이 리뷰를 위해 LLM Farm에 대한 독자적인 실사용 테스트를 진행하지 않았습니다 — 아래 하드웨어 수치는 이 앱에 특화된 실측치가 아니라 로컬 LLM 전반에 대한 일반적인 가이드입니다.',
          },
          {
            type: 'warning',
            text: '이 리뷰 시점 기준으로 LLM Farm은 앱스토어나 TestFlight에서 설치할 수 없습니다. 이전에 존재했던 `apps.apple.com/app/llm-farm/id6461209867`의 앱스토어 페이지는 더 이상 표시되지 않습니다. 이 앱을 사용하려는 사람은 누구나 Xcode를 사용해 소스 코드에서 직접 빌드해야 하며, 이를 위해서는 무료 또는 유료 Apple 개발자 계정과 iOS 빌드 도구에 대한 익숙함이 필요합니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-farm',
        title: 'LLM Farm이란?',
        content: [
          '**LLM Farm은 GGUF 형식의 오픈웨이트 언어 모델을 다운로드해 아이폰, 아이패드, 맥에서 로컬로 실행하는 모바일·데스크톱 앱으로, 개발자가 직접 만든 Swift 래퍼([llmfarm_core.swift](https://github.com/guinmoon/llmfarm_core.swift) 라이브러리)를 통해 [ggml](https://github.com/ggerganov/ggml)과 llama.cpp를 추론 엔진으로 사용합니다.** 이 앱 자체는 [MIT 라이선스](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE)이며, 전체 소스 코드가 공개되어 있어 자유롭게 확인, 포크, 수정할 수 있습니다.',
          'LLM Farm은 흔한 LLaMA 계열 모델을 넘어 폭넓은 모델 아키텍처를 지원합니다. 저장소에는 GPT-2, Starcoder, Falcon, MPT, Bloom, StableLM, RWKV를 포함해 16개 이상의 지원 아키텍처가 나열되어 있으며, LLaVA와 Moondream 같은 멀티모달 비전-언어 모델도 포함됩니다. 또한 기기에서 LoRA를 불러오고, 파인튜닝하고, 어댑터를 병합하는 도구도 갖추고 있어, 단순한 채팅 앱보다는 로컬 ML 실험 도구에 가까운 기능 구성을 보여줍니다.',
        ],
        note: 'GGUF는 양자화된 오픈웨이트 언어 모델을 패키징하는 파일 형식으로, 매 응답마다 클라우드 API를 호출하는 대신 llama.cpp와 ggml 같은 런타임을 통해 일반 소비자용 하드웨어에서 효율적으로 실행할 수 있도록 해줍니다.',
      },
      history: {
        id: 'history-and-developer',
        title: 'LLM Farm은 누가 만들었나?',
        content: [
          '**LLM Farm은 GitHub에서 [guinmoon](https://github.com/guinmoon)이라는 이름으로 활동하는 개발자 Artem Savkin이 만들었으며, 2023년 12월 13일 앱스토어에 처음 등장했습니다.** [저장소의 LICENSE 파일](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE)에는 저작권자로 Artem Savkin, 연도는 2023년으로 명시되어 있습니다.',
          '이 프로젝트는 자금을 지원받는 회사가 아니라 독립적으로 유지되고 있습니다. [GitHub 저장소](https://github.com/guinmoon/LLMFarm)는 2023년 6월에 만들어졌으며, 이 리뷰 시점 기준으로 2,000개 이상의 스타와 180개 이상의 포크를 모았고, 이슈 트래커에는 46건의 미해결 이슈가 있습니다. 앱스토어에서 삭제된 이후로도 개발은 간헐적으로 이어졌습니다. 커밋 이력을 보면 기반이 되는 llama.cpp 엔진 업데이트가 2025년 12월까지 이어졌고 2026년 1월에는 README 업데이트가 있었지만, 프로젝트의 마지막 태그 버전(1.4.3)은 2025년 1월에 나왔습니다. 즉 이 리뷰 시점 기준으로 1년 넘게 새로운 패키징된 릴리스 없이 코드 변경만 이어지고 있는 상태입니다.',
        ],
        items: [
          '개발자: Artem Savkin(GitHub: [guinmoon](https://github.com/guinmoon)). 회사가 아니라 개인이 독립적으로 개발.',
          '앱스토어 출시: 2023년 12월 13일. GitHub 저장소 생성: 2023년 6월 14일.',
          '라이선스: MIT — 자유로운 사용, 포크, 수정이 가능한 관용적인 오픈소스 라이선스. LICENSE 파일에 따른 저작권자: Artem Savkin, 2023년.',
          '이 리뷰 시점 기준으로 GitHub 스타 2,000개 이상, 포크 180개 이상, 이슈 트래커는 활발하지만 미해결(46건의 오픈 이슈) 상태.',
          '개발 속도: 2025년 이후 간헐적 — llama.cpp 의존성과 문서를 업데이트하는 커밋은 2026년 초까지 이어졌지만, 2025년 1월 1.4.3 버전 이후 새로운 태그 릴리스는 나오지 않음.',
        ],
      },
      appStoreStatus: {
        id: 'app-store-status',
        title: 'LLM Farm은 아직 앱스토어에 있나?',
        content: [
          '**아니요. 이 리뷰 시점 기준으로 LLM Farm은 Apple 앱스토어에서 다운로드할 수 없고, TestFlight 베타 채널도 닫혀 있습니다.** 이 앱은 원래 2023년 12월 13일 앱스토어에 출시되었으며, 프로젝트의 릴리스 및 커밋 이력에 따르면 2025년 8월 8일경 애플에 의해 삭제되었습니다. 이전에 존재했던 `apps.apple.com/app/llm-farm/id6461209867`의 앱스토어 페이지는 더 이상 표시되지 않습니다.',
          '프로젝트 자체의 [GitHub README](https://github.com/guinmoon/LLMFarm)에는 "The app is temporarily unavailable in TestFlight and Appstore"(앱은 TestFlight와 앱스토어에서 일시적으로 이용할 수 없습니다)라고 직접 명시되어 있습니다. PromptQuorum은 삭제 사유를 확인할 수 없었으며(저장소에도 사유가 명시되어 있지 않음), 두 배포 채널 중 어느 쪽이든 다시 복귀할지, 언제 복귀할지도 확인할 수 없었습니다. 오래된 위키 FAQ 페이지에는 TestFlight에 접근할 수 없는 경우 이메일로 연락한 사용자를 위해 개발자가 수동으로 `.ipa` 파일을 빌드해 주겠다고 제안했던 내용이 있지만, 현재 README에는 이 내용이 반복되어 있지 않아 이 제안이 지금도 유효한지는 이 리뷰에서 확인할 수 없었습니다.',
        ],
        items: [
          '앱스토어 상태: 프로젝트의 커밋 및 릴리스 이력에 따르면 2025년 8월경부터 삭제된 상태.',
          'TestFlight 상태: 현재 GitHub README에 따르면 이 리뷰 시점 기준으로 닫혀 있음.',
          '삭제 사유: 개발자나 애플 어느 쪽도, PromptQuorum이 찾을 수 있었던 어떤 출처에서도 밝히지 않음.',
          '현재 확인된 유일한 설치 경로: 공개된 GitHub 저장소를 통해 Xcode로 소스 코드에서 직접 빌드하는 것.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: '오늘 LLM Farm을 구하는 방법',
        content: [
          '**LLM Farm이 현재 앱스토어에 없기 때문에, 이 앱을 사용하려면 Xcode로 오픈소스 프로젝트를 소스 코드에서 직접 빌드해야 하며, 이는 앱을 다운로드하는 것보다 확실히 더 높은 진입 장벽입니다.** 아래 단계는 프로젝트 자체의 [GitHub 저장소](https://github.com/guinmoon/LLMFarm)에 있는 빌드 안내를 따릅니다.',
        ],
        numberedItems: [
          {
            title: 'Xcode와 Apple 개발자 계정 준비하기',
            whyItMatters: '자신의 기기용으로 앱을 컴파일하고 서명하려면 Xcode가 설치된 맥과 무료 또는 유료 Apple 개발자 계정이 필요합니다. 이는 개발자가 아닌 사람에게 가장 큰 장벽입니다.',
          },
          {
            title: '저장소를 재귀적으로 클론하기',
            whyItMatters: '`git clone --recurse-submodules https://github.com/guinmoon/LLMFarm`을 실행합니다. `--recurse-submodules` 옵션이 필요한 이유는 기반이 되는 추론 라이브러리 `llmfarm_core`가 별도 저장소로 옮겨져 서브모듈로 포함되기 때문입니다.',
          },
          {
            title: 'Xcode에서 프로젝트를 열고 기기용으로 빌드하기',
            whyItMatters: 'Xcode 프로젝트 파일을 열고, 자신의 기기 또는 맥 타깃을 선택하고, 자신의 개발자 서명 팀을 설정한 뒤 빌드합니다. 이렇게 하면 자신의 하드웨어에서 실행되는 앱을 얻을 수 있지만, 앱스토어를 통해 다른 사람에게 배포할 수 있는 앱은 아닙니다.',
          },
          {
            title: 'GGUF 모델을 다운로드해 불러오기',
            whyItMatters: '앱이 실행되면 Hugging Face 등에서 GGUF 모델 파일을 추가하고, 앱의 모델 관리 화면에서 불러온 뒤, 이후로는 완전히 기기 내에서 대화를 시작할 수 있습니다.',
          },
        ],
        note: '이 과정은 Xcode와 iOS 코드 서명에 대한 기본적인 이해를 전제로 합니다. 소스 코드에서 앱을 빌드하는 것이 부담스러운 사용자는 대신 PocketPal AI나 Private LLM처럼 탭 한 번으로 설치할 수 있는 대안을 고려해야 합니다 — 아래 대안 앱 섹션을 참고하세요.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'LLM Farm은 어떤 모델을 지원하나?',
        itemHeadings: true,
        columns: ['모델 계열', '분류', '비고'],
        rows: [
          {
            '모델 계열': 'LLaMA, Gemma, Qwen, Phi, Mixtral, DeepSeek, Yi, StableLM',
            '분류': '텍스트 생성',
            '비고': '앱의 ggml/llama.cpp 기반 엔진을 통해 GGUF 파일로 불러옴',
          },
          {
            '모델 계열': 'GPT-2, Starcoder, Falcon, MPT, Bloom, RWKV, Mamba, GPTNeoX, PLaMo',
            '분류': '텍스트 생성(구형/틈새 아키텍처)',
            '비고': '대부분의 경쟁 모바일 앱보다 넓은 아키텍처 커버리지',
          },
          {
            '모델 계열': 'LLaVA(1.5/1.6), BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL, Moondream',
            '분류': '멀티모달(비전-언어)',
            '비고': 'README에 따르면 이미지와 텍스트를 함께 입력하는 방식 지원',
          },
          {
            '모델 계열': '그 외 모든 GGUF 또는 GGJTv3 모델',
            '분류': '사용자 지정 가져오기',
            '비고': '프로젝트 위키에 따르면 GGUF는 `.gguf` 확장자, 구형 GGJTv3 형식은 `.bin` 확장자가 필요',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'LLM Farm은 아이폰, 아이패드, 맥에서 사용 가능한가?',
        itemHeadings: true,
        columns: ['플랫폼', '이용 가능 여부', '비고'],
        rows: [
          {
            '플랫폼': '아이폰 / 아이패드',
            '이용 가능 여부': 'Xcode 빌드 필요 — 이 리뷰 시점 기준으로 앱스토어에서 설치 불가',
            '비고': '프로젝트 README에 따르면 최소 iOS 16 필요; 기기 내 추론에는 Metal 가속을 사용.',
          },
          {
            '플랫폼': '맥',
            '이용 가능 여부': 'Xcode 빌드 필요',
            '비고': '프로젝트 README에 따르면 최소 macOS 13 필요; 동일한 코드베이스에 iOS/iPadOS와 나란히 네이티브 macOS 지원이 포함됨.',
          },
          {
            '플랫폼': '안드로이드 / 윈도우 / 리눅스',
            '이용 가능 여부': '지원하지 않음',
            '비고': 'LLM Farm은 안드로이드, 윈도우, 리눅스 버전이 없습니다. 안드로이드 사용자는 대신 RikkaHub, ChatterUI, Maid를 고려해야 합니다.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'LLM Farm의 가격은?',
        content: [
          '**LLM Farm 자체는 MIT 라이선스 아래 무료 오픈소스이며, 앱의 코드나 채팅 기능에 대한 구매 가격이나 구독료가 없습니다.** 이 글을 위해 검토한 저장소, 위키, 과거 앱스토어 등록 문구 어디에서도 LLM Farm 내부에 인앱 구매, 프리미엄 등급, 유료 마켓플레이스가 있다는 증거는 발견되지 않았습니다.',
          '오늘날 LLM Farm을 사용하는 실제 비용은 간접적입니다. 앱을 빌드하려면 맥이 필요하며(Xcode는 macOS 전용), Apple 개발자 계정 유형에 따라 비용이 전혀 들지 않거나(자신의 기기에 한정되고 인증서를 대략 7일마다 갱신해야 하는 무료 Personal Team 서명), 더 긴 유효기간의 서명 인증서를 원한다면 [Apple Developer Program](https://developer.apple.com/programs/) 비용이 필요합니다. 그 밖에 다운로드한 GGUF 모델 파일은 다른 로컬 LLM 앱과 마찬가지로 보통 모델당 수 기가바이트의 저장 공간을 차지합니다.',
        ],
        items: [
          '**앱 자체:** 무료, MIT 라이선스 오픈소스 — 코드나 기능에 대한 구매 가격은 발견되지 않음.',
          '**인앱 구매:** 이 글을 위해 검토한 자료에서는 발견되지 않음.',
          '**빌드 도구:** Xcode는 무료이지만 맥이 필요함. 무료 Apple ID로도 대략 7일마다 갱신이 필요한 인증서로 개인 용도의 빌드에 서명할 수 있으며, 유료 Apple Developer Program 멤버십을 이용하면 이 갱신 주기를 피할 수 있음.',
          '**저장 공간 비용:** 금전적이지는 않지만 실질적임 — 다운로드한 GGUF 모델 파일마다 보통 모델당 수 기가바이트의 저장 공간을 차지함.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'LLM Farm의 기능은?',
        content: [
          '**GGUF 모델을 로컬에서 실행하는 것 외에도, GitHub README와 위키에 따르면 LLM Farm의 기능 구성은 단순한 채팅 클라이언트보다는 로컬 ML 실험 도구에 더 가깝습니다.** 여기에는 다음이 포함됩니다.',
        ],
        items: [
          '**폭넓은 아키텍처 지원.** Starcoder, Falcon, MPT, Bloom, RWKV, GPTNeoX 등 다른 모바일 로컬 AI 앱들이 보통 지원하지 않는 것을 포함해 16개 이상의 모델 아키텍처를 지원.',
          '**멀티모달(비전-언어) 모델.** README에 따르면 LLaVA, BakLLaVA, Obsidian, ShareGPT4V, MobileVLM, Yi-VL, Moondream 지원을 통해 이미지와 텍스트를 함께 사용하는 프롬프트를 처리할 수 있음.',
          '**여러 샘플링 방식.** Temperature, Tail-Free Sampling(TFS), Locally Typical Sampling, Mirostat, Greedy, 문법 제약 샘플링이 지원 옵션으로 나열되어 있음.',
          '**문법 제약 출력.** Grammar 샘플링을 사용하면 모델의 출력을 정의된 구조(예: 유효한 JSON)로 제한할 수 있어 구조화된 출력이 필요한 사례에 유용함.',
          '**모델 설정 템플릿과 컨텍스트 복원.** 모델별로 설정을 저장할 수 있고, 대화의 컨텍스트 상태를 처음부터 다시 처리하지 않고 복원할 수 있음.',
          '**Apple 단축어 연동.** README에 따르면 애플의 단축어 자동화 앱에서 이 앱을 실행할 수 있음.',
          '**기본적인 검색 증강 생성(RAG).** README에 RAG 기능이 나열되어 있지만, 이 글을 위해 확인한 자료에서 프로젝트 문서가 정확한 검색 방식이나 지원되는 문서 형식을 자세히 설명하지는 않음.',
        ],
        note: '기능의 가용성은 빌드마다 달라질 수 있으며, 이 앱이 현재 앱스토어에서 설치할 수 없기 때문에 직접 빌드한 버전이 예전 앱스토어 등록 문구에 설명된 모든 기능과 일치하지 않을 수 있습니다. 현재 소스 코드에 무엇이 있는지는 [GitHub 저장소](https://github.com/guinmoon/LLMFarm)와 그 커밋 이력을 확인하세요.',
      },
      loraFinetuning: {
        id: 'lora-finetuning',
        title: '기기 내 LoRA 파인튜닝과 병합',
        content: [
          '**LLM Farm은 기기 내 LoRA(Low-Rank Adaptation) 도구를 갖추고 있습니다 — 어댑터 불러오기, 기본 모델 파인튜닝, 학습된 어댑터를 기본 모델에 다시 병합하는 것까지, 대부분의 모바일 로컬 AI 앱은 전혀 제공하지 않는 조합입니다.** 프로젝트의 [위키 문서](https://github.com/guinmoon/LLMFarm/wiki/lora)에 따르면 다음과 같습니다.',
          'LoRA 어댑터는 어댑터 파일을 `lora_adapters` 디렉터리에 넣어 불러올 수 있으며, 채팅 설정 화면에서 단일 어댑터를 지정하거나 설정 파일에서 개별 스케일 파라미터를 가진 여러 어댑터를 구성할 수 있습니다. 파인튜닝은 앱 내 Settings > FineTune에서 직접 사용할 수 있지만, 위키는 이것이 모바일 하드웨어에서 리소스를 많이 소모한다고 언급하며, iOS에서는 최소 설정으로 대략 30억 파라미터 규모의 모델에 실질적으로 제한된다고 문서에 명시하고 있습니다. 별도의 Settings > Merge Lora 기능을 사용하면 학습된 어댑터를 기본 모델에 병합해 내보낼 수 있으며, 위키는 실용적인 iOS 성능을 위해 Q4_K 이하의 양자화를 권장합니다.',
        ],
        items: [
          '하나 또는 여러 개의 LoRA 어댑터를 불러올 수 있으며, 각각 개별적으로 설정 가능한 스케일 파라미터를 가짐.',
          'Settings > FineTune을 통해 기기에서 기본 모델을 파인튜닝 — 위키에 따르면 iOS에서는 최소 설정으로 실질적으로 대략 30억 파라미터 규모에 제한됨.',
          '학습된 LoRA 어댑터를 기본 모델에 병합하고 Settings > Merge Lora를 통해 내보내기.',
          '트레이드오프: 위키에 따르면 LoRA 어댑터가 연결된 동안에는 메모리 매핑 파일 로딩(mmap)을 사용할 수 없어, 기본 모델만 실행할 때보다 RAM 사용량이 늘어남.',
        ],
        note: '이 리뷰에서는 학습 속도나 출력 품질을 확인하기 위해 LLM Farm에서 독자적으로 모델을 파인튜닝하지 않았습니다 — 위 설명은 프로젝트 자체 문서가 이 기능에 대해 밝힌 내용을 요약한 것이며, PromptQuorum의 벤치마크가 아닙니다.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'LLM Farm에 필요한 하드웨어는?',
        content: [
          '**실제 하드웨어 최소 기준을 정하는 것은 앱 자체가 아니라 선택한 모델입니다 — 로컬 LLM 일반적인 가이드로, 양자화된 20억~40억 파라미터 모델은 약 3~4GB의 여유 RAM이 필요하고, 70억~80억 파라미터 모델은 8GB 이상이 필요합니다.** 이는 GGUF 전반에 대한 표준적인 하드웨어 가이드이며, LLM Farm에 특화된 벤치마크가 아닙니다. PromptQuorum은 LLM Farm의 모델별 정확한 메모리 사용량을 독자적으로 측정하지 않았습니다.',
          '아이폰, 아이패드, 맥에서 LLM Farm은 추론에 Metal 가속을 사용하며, 이는 일반적으로 Apple Silicon 하드웨어에서 CPU만 사용하는 실행보다 속도를 향상시킵니다. 프로젝트 README에 따르면 이 앱은 최소 iOS 16 또는 macOS 13이 필요하므로, 이러한 OS 버전을 실행할 수 없는 구형 기기는 RAM과 관계없이 이 앱을 사용할 수 없습니다.',
        ],
        items: [
          '소형 모델(20억~40억 파라미터, 양자화): 4GB 이상의 여유 RAM이 있으면 대부분의 최근 아이폰과 맥에서 사용 가능.',
          '중형 모델(70억~80억 파라미터, 양자화): 적절한 반응성을 위해 8GB 이상의 기기 RAM 권장.',
          'LoRA 파인튜닝의 경우: 프로젝트 위키에 따르면 기기의 연산 및 메모리 제약으로 인해 iOS에서는 최소 설정으로 실질적으로 약 30억 파라미터 규모에 제한됨.',
          '최소 OS: GitHub README에 따르면 iOS 16 또는 macOS 13.',
          '저장 공간: 다운로드하는 GGUF 모델 파일마다 수 기가바이트의 여유 공간을 확보해 둘 것.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'LLM Farm이 적합한 사람',
        items: [
          '**Xcode에서 소스 코드로부터 앱을 빌드하는 데 익숙한 개발자.** 앱스토어와 TestFlight가 현재 닫혀 있으므로, 이는 있으면 좋은 조건이 아니라 필수 조건입니다.',
          '**특히 기기 내 LoRA 파인튜닝이나 어댑터 병합을 원하는 사용자.** 이 기능 세트는 대부분의 경쟁 모바일 로컬 AI 앱에는 전혀 없습니다.',
          '**모바일 기기에서 지원되는 모델 아키텍처의 범위가 가장 넓기를 원하는 사용자.** RWKV, Mamba, GPTNeoX 같은 몇 가지 틈새 아키텍처를 포함해 16개 이상의 아키텍처는 휴대폰 앱치고는 이례적으로 폭넓습니다.',
          '**코드를 직접 확인하거나 수정하고 싶은 사용자.** MIT 라이선스는 포크와 수정을 허용하며, 이 코드베이스는 Swift 기반 llama.cpp/ggml 래퍼를 이해하는 데 유용한 참고 자료가 됩니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'LLM Farm이 적합하지 않은 사람',
        items: [
          '**iOS/macOS 앱을 소스 코드에서 빌드할 수 없거나 하고 싶지 않은 사람.** 이것이 지금 LLM Farm을 피해야 하는 가장 큰 이유입니다 — 이 리뷰 시점 기준으로 앱스토어 설치 방법이 없고, 확인된 TestFlight 접근 방법도 없습니다.',
          '**안드로이드, 윈도우, 리눅스 지원이 필요한 사용자.** LLM Farm은 애플 전용입니다. 안드로이드 사용자는 RikkaHub, ChatterUI, Maid를, 맥이 없는 데스크톱 사용자는 Ollama, LM Studio, Jan AI를 고려해야 합니다.',
          '**오늘 확실히 설치할 수 있는 앱을 원하는 사용자.** PocketPal AI와 Private LLM은 둘 다 아무것도 빌드할 필요 없이 지금 바로 앱스토어에서 설치할 수 있습니다.',
          '**빈번하고 버전이 매겨진 릴리스를 기대하는 사용자.** 이 프로젝트의 마지막 태그 릴리스는 2025년 1월에 나왔으며, 그 이후로 커밋은 간헐적으로 이어졌지만 이 리뷰 시점 기준으로 1년 넘게 새로운 패키징된 버전이 나오지 않았습니다.',
          '**보장된 지원이나 명확한 로드맵이 필요한 사용자.** 저장소 이력에 따르면 LLM Farm은 한 명의 개발자가 독립적으로 유지하고 있으며, 앱스토어 등록을 복원하겠다는 명시적인 약속은 없습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'LLM Farm 대 대안 앱',
        itemHeadings: true,
        columns: ['앱', '라이선스 / 비용', '플랫폼', '현재 설치 경로'],
        rows: [
          {
            '앱': 'LLM Farm',
            '라이선스 / 비용': '무료, 오픈소스(MIT)',
            '플랫폼': '아이폰/아이패드, 맥',
            '현재 설치 경로': 'Xcode 빌드만 가능 — 앱스토어와 TestFlight는 닫혀 있음',
          },
          {
            '앱': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            '라이선스 / 비용': '무료, 오픈소스(MIT)',
            '플랫폼': '아이폰/아이패드, 안드로이드',
            '현재 설치 경로': '앱스토어와 구글 플레이, 탭 한 번으로 설치',
          },
          {
            '앱': '[Private LLM](/power-local-llm/private-llm-review)',
            '라이선스 / 비용': '유료, 일회성 구매; 폐쇄형 소스',
            '플랫폼': '아이폰/아이패드/맥(애플 전용)',
            '현재 설치 경로': '앱스토어, 탭 한 번으로 설치',
          },
          {
            '앱': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            '라이선스 / 비용': '무료 + 유료 등급; 폐쇄형 소스',
            '플랫폼': '아이폰/아이패드/맥(애플 전용)',
            '현재 설치 경로': '앱스토어, 탭 한 번으로 설치',
          },
          {
            '앱': 'Layla',
            '라이선스 / 비용': '무료 및 유료 등급 제공; 폐쇄형 소스',
            '플랫폼': '[layla-network.ai](https://www.layla-network.ai)에 따르면 안드로이드와 iOS',
            '현재 설치 경로': '무료 등급이 있다고 가정하기 전에 [layla-network.ai](https://www.layla-network.ai)에서 현재 이용 가능 여부 확인',
          },
          {
            '앱': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            '라이선스 / 비용': '무료, 오픈소스',
            '플랫폼': '안드로이드',
            '현재 설치 경로': '구글 플레이 또는 소스 코드에서 빌드',
          },
          {
            '앱': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            '라이선스 / 비용': '무료, 오픈소스(AGPL-3.0)',
            '플랫폼': '안드로이드',
            '현재 설치 경로': '소스 빌드 또는 릴리스 APK 사이드로드',
          },
          {
            '앱': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            '라이선스 / 비용': '무료, 오픈소스',
            '플랫폼': '안드로이드',
            '현재 설치 경로': 'GitHub 릴리스 또는 소스 코드에서 빌드',
          },
          {
            '앱': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            '라이선스 / 비용': '무료, 오픈소스',
            '플랫폼': '안드로이드; 이 리뷰 시점 기준으로 iOS는 아직 없음',
            '현재 설치 경로': '구글 플레이 또는 AnythingLLM Mobile 사이트',
          },
        ],
        note: '이 카테고리는 이용 가능 여부 상태가 자주 바뀝니다 — 이 표는 PromptQuorum이 2026년 9월 기준으로 확인할 수 있었던 내용을 반영합니다. 링크가 여전히 유효하다고 가정하기 전에 각 프로젝트의 페이지를 확인하세요.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'LLM Farm은 아직 존재하나요?',
            a: '오픈소스 프로젝트 자체는 GitHub에서 여전히 활발하지만, 이 앱은 현재 앱스토어나 TestFlight에서 설치할 수 없습니다. 애플은 2025년 8월경 앱스토어 등록을 삭제했으며, 이 리뷰 시점 기준으로 프로젝트 README는 여전히 두 채널 모두를 "일시적으로 이용할 수 없음"으로 설명하고 있습니다. 현재 유일한 방법은 Xcode로 소스 코드에서 빌드하는 것입니다.',
          },
          {
            q: 'LLM Farm은 왜 앱스토어에서 삭제되었나요?',
            a: '이 글을 위해 검토한 어떤 자료에서도 개발자나 애플이 밝힌 사유를 PromptQuorum은 찾지 못했습니다. 프로젝트의 GitHub README는 삭제 사실은 인정하지만 그 원인은 설명하지 않습니다.',
          },
          {
            q: 'LLM Farm은 무료인가요?',
            a: '네. LLM Farm은 MIT 라이선스 아래 무료 오픈소스이며, PromptQuorum은 검토한 자료에서 인앱 구매나 유료 등급에 대한 증거를 찾지 못했습니다. 실질적인 비용은 앱을 빌드할 맥과 Xcode, 그리고 Apple 개발자 계정입니다.',
          },
          {
            q: 'LLM Farm은 누가 개발했나요?',
            a: 'LLM Farm은 GitHub에서 [guinmoon](https://github.com/guinmoon)이라는 이름으로 활동하는 개발자 Artem Savkin이 만들었습니다. 회사가 아니라 독립적으로 유지되고 있습니다.',
          },
          {
            q: 'LLM Farm은 오픈소스인가요?',
            a: '네, 전체 소스 코드가 [GitHub](https://github.com/guinmoon/LLMFarm)에 MIT 라이선스로 공개되어 있습니다. MIT 라이선스는 자유로운 사용, 수정, 재배포를 허용하는 관용적인 라이선스입니다.',
          },
          {
            q: 'LLM Farm으로 LoRA를 이용한 모델 파인튜닝이 가능한가요?',
            a: '네, 프로젝트의 위키 문서에 따르면 가능합니다. LLM Farm은 LoRA 어댑터 불러오기, 기기에서의 기본 모델 파인튜닝(위키에 따르면 iOS에서 실질적으로 약 30억 파라미터 규모에 제한), 학습된 어댑터를 기본 모델에 다시 병합하는 것을 지원합니다. 대부분의 경쟁 모바일 로컬 AI 앱은 이 기능을 제공하지 않습니다.',
          },
          {
            q: 'LLM Farm은 안드로이드에서 작동하나요?',
            a: '아니요. GitHub README에 따르면 LLM Farm은 iOS(16 이상)와 macOS(13 이상)만 지원합니다. 안드로이드 사용자는 대신 RikkaHub, ChatterUI, Maid를 고려해야 합니다.',
          },
          {
            q: '앱스토어 없이 LLM Farm을 설치하려면?',
            a: '`git clone --recurse-submodules`로 [GitHub 저장소](https://github.com/guinmoon/LLMFarm)를 재귀적으로 클론하고, Xcode에서 프로젝트를 연 다음, 자신의 Apple 개발자 계정으로 서명하고, 자신의 기기용으로 빌드합니다. 이를 위해서는 맥과 Xcode 및 iOS 코드 서명에 대한 기본적인 이해가 필요합니다.',
          },
          {
            q: 'LLM Farm은 PocketPal AI나 Private LLM과 비교하면 어떤가요?',
            a: 'LLM Farm과 PocketPal AI는 둘 다 무료이고 MIT 라이선스이지만, LLM Farm은 현재 소스 코드에서 빌드해야 하는 반면 PocketPal AI는 앱스토어와 구글 플레이에서 직접 설치할 수 있습니다. LLM Farm은 더 많은 모델 아키텍처를 지원하고 기기 내 LoRA 파인튜닝을 갖추고 있는데, 이는 PocketPal AI에도, 유료 폐쇄형 소스인 Private LLM에도 없습니다. 직접 앱을 빌드하는 데 익숙하다면 LLM Farm을 선택하고, 오늘 당장 설치할 수 있는 것을 원한다면 PocketPal AI나 Private LLM을 선택하세요. 자세한 내용은 위의 비교표를 참고하세요.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'LLM Farm은 여전히 애플 기기용 오픈소스 로컬 AI 프로젝트 중 기술적으로 가장 뛰어난 축에 속합니다 — 아키텍처 커버리지와 기기 내 LoRA 파인튜닝 및 병합 도구는 PocketPal AI와 Private LLM을 포함해 이 카테고리의 대부분의 모바일 앱보다 앞서 있습니다. 하지만 이 리뷰 시점 기준으로, 이는 대부분의 사람이 실제로 설치할 수 있는 앱이 아닙니다. 애플은 2025년 8월에 앱스토어에서 삭제했고, 프로젝트 README에 따르면 TestFlight 접근도 닫혀 있으며, 이를 실행할 수 있는 유일하게 확인된 방법은 Xcode에서 직접 오픈소스 코드를 컴파일하는 것뿐입니다. 코드를 확인하거나, LoRA 파인튜닝을 실험하거나, 흔치 않은 모델 아키텍처를 사용하고 싶은 개발자에게는 합리적인 트레이드오프입니다. 하지만 오늘 그냥 앱을 다운로드해 사적으로 대화하고 싶을 뿐인 사람에게는 합리적인 요구가 아닙니다 — 그런 경우에는 위 대안 앱 섹션에서 다룬 PocketPal AI(무료, 오픈소스, 탭 한 번으로 설치) 또는 Private LLM(유료, 완성도 높음, 탭 한 번으로 설치)이 현실적인 선택지입니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 LLM Farm](https://github.com/guinmoon/LLMFarm) — 이 리뷰에서 인용한 소스 코드, 라이선스(MIT), README, 커밋 이력, 스타/포크 수.',
          '[LLM Farm LICENSE 파일](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) — MIT 라이선스 전문 및 저작권자(Artem Savkin, 2023년).',
          '[LLM Farm 위키: FAQ](https://github.com/guinmoon/LLMFarm/wiki/FAQ) — 설치 안내와 지원되는 파일 형식 세부 정보.',
          '[LLM Farm 위키: LoRA](https://github.com/guinmoon/LLMFarm/wiki/lora) — LoRA 불러오기, 파인튜닝, 병합에 관한 문서.',
          '[GitHub의 llmfarm_core.swift](https://github.com/guinmoon/llmfarm_core.swift) — 이 리뷰에서 언급한 기반 추론 라이브러리.',
          '[guinmoon/LLMFarm의 GitHub 릴리스 이력](https://github.com/guinmoon/LLMFarm/releases) — 이 리뷰에서 언급한 마지막 태그 릴리스(1.4.3, 2025년 1월).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — LLM Farm의 설치 가능한 대안들을 비교한 iOS 앱 모음.',
          '[PocketPal AI 리뷰](/power-local-llm/pocketpal-ai-review) — 아이폰, 아이패드, 안드로이드용 무료, 오픈소스, 탭 한 번으로 설치 가능한 대안.',
          '[Private LLM 리뷰](/power-local-llm/private-llm-review) — 방대한 엄선된 모델 카탈로그를 갖춘, 애플 전용 유료 폐쇄형 소스 대안.',
          '[Enclave AI 리뷰](/power-local-llm/enclave-ai-review) — Siri 및 단축어 자동화를 갖춘 애플 전용 대안.',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — 엄선된 모델 라이브러리를 갖춘, 다섯 개 플랫폼을 지원하는 유료 폐쇄형 소스 대안.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'LLM Farm 리뷰(2026): 오픈소스 GGUF 앱, 앱스토어에서는 내려감',
      description:
        'LLM Farm 리뷰: 기기 내 LoRA 파인튜닝을 지원하는 오픈소스, MIT 라이선스 iOS/macOS GGUF 앱. 현재 앱스토어에는 없음 — 그 의미와 빌드 방법을 설명합니다.',
      url: 'https://promptquorum.com/power-local-llm/llm-farm-review',
      inLanguage: 'ko',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: '오픈소스 로컬 AI 앱을 검토 중인, 기술에 능숙한 iOS 및 macOS 사용자' },
      about: [
        { '@type': 'Thing', name: 'LLM Farm' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'LoRA 파인튜닝' },
        { '@type': 'Thing', name: '로컬 LLM' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llm-farm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'LLM Farm 리뷰(2026)', item: 'https://promptquorum.com/power-local-llm/llm-farm-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-06',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/llm-farm-review-hero-ar.webp',
    title: 'مراجعة LLM Farm (2026): تطبيق GGUF مفتوح المصدر، غير متوفر حاليًا على App Store',
    seoTitle: 'مراجعة LLM Farm 2026: بيئة تشغيل GGUF مفتوحة المصدر لنظام iOS',
    intro:
      'LLM Farm تطبيق مجاني ومفتوح المصدر (برخصة MIT) لنظامي iOS وmacOS، يشغّل نماذج لغوية بصيغة GGUF مباشرة على الجهاز عبر طبقة مكتوبة بلغة Swift تلتف حول [ggml](https://github.com/ggerganov/ggml) وllama.cpp. طوّره المطور Artem Savkin (اسم المستخدم على GitHub هو [guinmoon](https://github.com/guinmoon))، الذي نشره لأول مرة على App Store في ديسمبر 2023. في وقت كتابة هذه المراجعة، لا يمكن تثبيت LLM Farm من App Store ولا من TestFlight — فقد أزالت Apple الإدراج في أغسطس 2025، وما زال [ملف README على GitHub](https://github.com/guinmoon/LLMFarm) الخاص بالمشروع يصف التطبيق بأنه "غير متوفر مؤقتًا" في كلتا القناتين. تغطي هذه المراجعة ما يقدمه التطبيق، وأدواته للضبط الدقيق (LoRA fine-tuning) ودمج المحولات على الجهاز نفسه (وهي ميزة لا تتوفر في معظم تطبيقات الذكاء الاصطناعي المحلية للجوال)، وكيفية بنائه اليوم من الشيفرة المصدرية، والأهم من ذلك، لماذا لا يناسب أي شخص لا يشعر بالارتياح تجاه بناء تطبيق iOS بنفسه.',
    metaDescription:
      'مراجعة LLM Farm: تطبيق GGUF مفتوح المصدر برخصة MIT لنظامي iOS وmacOS، يدعم الضبط الدقيق LoRA على الجهاز. غير متوفر حاليًا على App Store — ماذا يعني ذلك وكيفية بنائه.',
    twitterDescription:
      'مراجعة LLM Farm 2026: بيئة تشغيل GGUF مفتوحة المصدر لنظامي iOS وmacOS مع أدوات LoRA على الجهاز — أُزيل من App Store، ولا يمكن بناؤه حاليًا إلا من الشيفرة المصدرية.',
    audience:
      'مستخدمو iOS وmacOS ذوو الخبرة التقنية الذين يريدون بيئة تشغيل GGUF مفتوحة المصدر مع ضبط دقيق LoRA، ولديهم استعداد لبناء التطبيق بأنفسهم من الشيفرة المصدرية.',
    readTime: 'وقت القراءة: 11 دقيقة',
    educationalLevel: 'Advanced',
    primaryTerm: 'مراجعة LLM Farm',
    targetKeywords: [
      'مراجعة llm farm',
      'llmfarm ios',
      'llm farm app store',
      'llm farm guinmoon',
      'llm farm lora',
      'تشغيل نماذج gguf على الايفون',
      'تطبيق ذكاء اصطناعي محلي مفتوح المصدر ios',
      'بديل llm farm',
    ],
    current_models_mentioned: ['Gemma', 'Qwen', 'Phi', 'LLaMA', 'Mixtral', 'DeepSeek'],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Mac'],
    leadAnswerBlock:
      '**LLM Farm تطبيق مجاني ومفتوح المصدر (برخصة MIT) لنظامي iOS وmacOS يشغّل نماذج لغوية بصيغة GGUF بالكامل على الجهاز، ولا يمكن حاليًا تثبيته من App Store أو TestFlight.** طوّره المطور Artem Savkin ([guinmoon](https://github.com/guinmoon) على GitHub) ونشره لأول مرة في ديسمبر 2023، ويضم [مستودع GitHub](https://github.com/guinmoon/LLMFarm) أكثر من 2000 نجمة وأكثر من 180 نسخة متفرعة (fork). أزالت Apple إدراج App Store في أغسطس 2025، وما زال ملف README الخاص بالمشروع، حتى وقت كتابة هذه المراجعة، يصف كلًا من App Store وTestFlight بأنهما "غير متوفرين مؤقتًا". تبقى الشيفرة المصدرية عامة وبرخصة MIT، لذا يمكن تجميع التطبيق وتثبيته عبر Xcode، لكن ذلك يتطلب حساب مطور من Apple وإلمامًا ببناء تطبيقات iOS من الشيفرة المصدرية — بالنسبة لمعظم الناس، لم يعد هذا تطبيقًا يُثبَّت بلمسة واحدة.',
    quickAnswerTop: {
      ar: {
        question: 'هل ما زال بإمكاني تثبيت LLM Farm، وهل يستحق ذلك؟',
        answer:
          'ليس من App Store — فقد أزالت Apple الإدراج في أغسطس 2025، وما زال ملف README الخاص بالمشروع على GitHub يدرج App Store وTestFlight كليهما ضمن "غير متوفر مؤقتًا". الطريقة الوحيدة المتاحة حاليًا هي بناء التطبيق مفتوح المصدر من الشيفرة المصدرية باستخدام Xcode، وهو ما يتطلب حساب مطور من Apple وخبرة أساسية في بناء تطبيقات iOS. إذا كان بإمكانك فعل ذلك، فإن LLM Farm أحد التطبيقات القليلة على الجوال التي توفر أدوات حقيقية للضبط الدقيق LoRA والدمج؛ وإذا لم يكن بإمكانك ذلك، فإن PocketPal AI أو Private LLM بديلان يمكن تثبيتهما بلمسة واحدة اليوم.',
        bullets: [
          'مجاني ومفتوح المصدر برخصة MIT، طوّره Artem Savkin ([guinmoon](https://github.com/guinmoon/LLMFarm) على GitHub).',
          'لا يمكن تثبيته حاليًا من App Store أو TestFlight — أزالته Apple من المتجر في أغسطس 2025؛ ويؤكد ملف README على GitHub حالة "غير متوفر مؤقتًا" حتى وقت كتابة هذه المراجعة.',
          'الطريقة الوحيدة الحالية للتثبيت هي البناء من الشيفرة المصدرية عبر Xcode، وهو ما يتطلب حساب مطور من Apple.',
          'يدعم تحميل محولات LoRA وضبطها الدقيق ودمجها مباشرة على الجهاز — وهي ميزة تفتقر إليها معظم التطبيقات المنافسة.',
          'يشغّل نماذج GGUF عبر أكثر من 16 معمارية (LLaMA وGemma وQwen وPhi وMixtral وDeepSeek وغيرها) باستخدام محرّكه الخاص المبني على ggml/llama.cpp.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو LLM Farm؟', anchor: 'what-is-llm-farm' },
      { label: 'من طوّر LLM Farm؟', anchor: 'history-and-developer' },
      { label: 'هل LLM Farm ما زال على App Store؟', anchor: 'app-store-status' },
      { label: 'كيفية الحصول على LLM Farm اليوم', anchor: 'getting-started' },
      { label: 'ما النماذج التي يدعمها LLM Farm؟', anchor: 'models-supported' },
      { label: 'هل LLM Farm متوفر على iPhone وiPad وMac؟', anchor: 'platform-availability' },
      { label: 'كم تكلفة LLM Farm؟', anchor: 'pricing' },
      { label: 'ما ميزات LLM Farm؟', anchor: 'key-features' },
      { label: 'الضبط الدقيق LoRA ودمجه على الجهاز', anchor: 'lora-finetuning' },
      { label: 'ما العتاد الذي تحتاجه؟', anchor: 'hardware-requirements' },
      { label: 'لمن يناسب LLM Farm', anchor: 'who-should-use' },
      { label: 'لمن لا يناسب LLM Farm', anchor: 'who-should-not-use' },
      { label: 'LLM Farm مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'LLM Farm تطبيق مجاني ومفتوح المصدر (برخصة MIT) لنظامي iOS وmacOS من تطوير Artem Savkin، لتشغيل نماذج لغوية بصيغة GGUF على الجهاز، وهو غير متوفر حاليًا لا على App Store ولا على TestFlight، والطريقة الوحيدة للحصول عليه هي بناؤه بنفسك من الشيفرة المصدرية.',
          },
          {
            type: 'plain-terms',
            text: 'هو تطبيق كان يمكن أن يتيح لك الدردشة مع نموذج ذكاء اصطناعي يعمل بالكامل على هاتف iPhone أو جهاز Mac الخاص بك، دون أي خادم سحابي وبشيفرة مصدرية عامة — لكن لا يمكن حاليًا تنزيله بالطريقة المعتادة من App Store؛ إذ سيتعين عليك بناؤه بنفسك باستخدام أداة التطوير Xcode من Apple.',
          },
        ],
        items: [
          'مجاني ومفتوح المصدر (برخصة MIT)؛ الشيفرة المصدرية ومتتبع المشكلات متاحان علنًا على [GitHub](https://github.com/guinmoon/LLMFarm).',
          'طوّره المطور Artem Savkin، تحت اسم المستخدم [guinmoon](https://github.com/guinmoon) على GitHub، وصدر لأول مرة على App Store في ديسمبر 2023.',
          'أزالت Apple إدراج App Store في أغسطس 2025؛ وما زال ملف README الخاص بالمشروع يصف App Store وTestFlight كليهما بأنهما "غير متوفرين مؤقتًا".',
          'يشغّل نماذج GGUF عبر محرّكه الخاص المبني على ggml/llama.cpp على أكثر من 16 معمارية نماذج، بما فيها LLaMA وGemma وQwen وPhi وMixtral وDeepSeek.',
          'أحد التطبيقات القليلة للذكاء الاصطناعي المحلي على الجوال التي تتضمن تحميل محولات LoRA وضبطها الدقيق ودمجها مباشرة على الجهاز.',
          'مقتصر على iOS (16 فأعلى) وmacOS (13 فأعلى) — لا توجد نسخة لأندرويد أو ويندوز أو لينكس.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى [مستودع GitHub](https://github.com/guinmoon/LLMFarm) العام (ملف README، أسئلة الويكي الشائعة، ملف الترخيص، سجل الالتزامات والإصدارات) وحالة إدراج التطبيق على متجر Apple، وقد جرى التحقق منها في سبتمبر 2026. لم تُجرِ PromptQuorum اختبارًا عمليًا مستقلًا للتطبيق من أجل هذه المراجعة — الأرقام المتعلقة بالعتاد أدناه إرشادات عامة للنماذج اللغوية المحلية، وليست قياسات خاصة بهذا التطبيق.',
          },
          {
            type: 'warning',
            text: 'في وقت كتابة هذه المراجعة، لا يمكن تثبيت LLM Farm من App Store أو TestFlight. صفحة App Store التي كانت موجودة سابقًا على العنوان `apps.apple.com/app/llm-farm/id6461209867` لم تعد تظهر. أي شخص يريد استخدام هذا التطبيق يجب أن يبنيه من الشيفرة المصدرية باستخدام Xcode، وهو ما يتطلب حساب مطور من Apple (مجاني أو مدفوع) وإلمامًا بأدوات بناء تطبيقات iOS.',
          },
        ],
      },
      overview: {
        id: 'what-is-llm-farm',
        title: 'ما هو LLM Farm؟',
        content: [
          '**LLM Farm تطبيق للجوال وسطح المكتب يقوم بتنزيل نماذج لغوية مفتوحة الأوزان بصيغة GGUF وتشغيلها محليًا على iPhone أو iPad أو Mac، عبر طبقة مكتوبة بلغة Swift (مكتبة المطوّر الخاصة، [llmfarm_core.swift](https://github.com/guinmoon/llmfarm_core.swift)) تلتف حول [ggml](https://github.com/ggerganov/ggml) وllama.cpp كمحرّك استدلال.** التطبيق نفسه [برخصة MIT](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE)، أي أن الشيفرة المصدرية الكاملة عامة وحرة للفحص والتفرّع (fork) والتعديل.',
          'يدعم LLM Farm نطاقًا واسعًا من معماريات النماذج يتجاوز عائلة LLaMA الشائعة — يسرد المستودع أكثر من 16 معمارية مدعومة، منها GPT-2 وStarcoder وFalcon وMPT وBloom وStableLM وRWKV، إضافة إلى نماذج متعددة الوسائط (رؤية-لغة) مثل LLaVA وMoondream. كما يتضمن أدوات لتحميل LoRA وضبطه الدقيق ودمج المحولات على الجهاز، وهي مجموعة ميزات أقرب إلى أداة تجريب محلية للتعلم الآلي منها إلى تطبيق دردشة بسيط.',
        ],
        note: 'GGUF صيغة ملفات لتغليف النماذج اللغوية المفتوحة الأوزان بعد ضغطها كميًا (quantization) بحيث تعمل بكفاءة على العتاد الاستهلاكي عبر بيئات تشغيل مثل llama.cpp وggml، بدلًا من استدعاء واجهة برمجة تطبيقات سحابية مع كل رد.',
      },
      history: {
        id: 'history-and-developer',
        title: 'من طوّر LLM Farm؟',
        content: [
          '**أنشأ LLM Farm المطور Artem Savkin، الذي ينشر تحت اسم المستخدم [guinmoon](https://github.com/guinmoon) على GitHub، وظهر التطبيق لأول مرة على App Store في 13 ديسمبر 2023.** يذكر [ملف LICENSE في المستودع](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) Artem Savkin بصفته صاحب حقوق النشر، بتاريخ 2023.',
          'يُصان المشروع بشكل مستقل وليس من قِبل شركة ممولة. أُنشئ [مستودع GitHub](https://github.com/guinmoon/LLMFarm) في يونيو 2023، وقد جمع حتى وقت كتابة هذه المراجعة أكثر من 2000 نجمة وأكثر من 180 نسخة متفرعة، مع 46 مشكلة مفتوحة في متتبع المشكلات. استمر التطوير بشكل متقطع منذ إزالة التطبيق من App Store: يُظهر سجل الالتزامات تحديثات لمحرّك llama.cpp الأساسي حتى ديسمبر 2025 وتحديثًا لملف README في يناير 2026، إلا أن آخر إصدار مُعلَّم (tagged) للمشروع (الإصدار 1.4.3) صدر في يناير 2025 — أي أن تعديلات الشيفرة استمرت لأكثر من عام دون إصدار جديد مُغلَّف حتى وقت كتابة هذه المراجعة.',
        ],
        items: [
          'المطور: Artem Savkin (على GitHub: [guinmoon](https://github.com/guinmoon))، يعمل بشكل مستقل وليس كشركة.',
          'إطلاق التطبيق على App Store: 13 ديسمبر 2023. إنشاء مستودع GitHub: 14 يونيو 2023.',
          'الترخيص: MIT — رخصة مفتوحة المصدر متساهلة، حرة الاستخدام والتفرّع والتعديل. صاحب حقوق النشر بحسب ملف LICENSE: Artem Savkin، 2023.',
          'أكثر من 2000 نجمة على GitHub وأكثر من 180 نسخة متفرعة حتى وقت كتابة هذه المراجعة، مع متتبع مشكلات نشط لكن غير مغلق (46 مشكلة مفتوحة).',
          'وتيرة التطوير: متقطعة منذ 2025 — استمرت الالتزامات التي تحدّث اعتمادية llama.cpp والوثائق حتى أوائل 2026، لكن لم يصدر أي إصدار مُعلَّم جديد منذ الإصدار 1.4.3 في يناير 2025.',
        ],
      },
      appStoreStatus: {
        id: 'app-store-status',
        title: 'هل LLM Farm ما زال على App Store؟',
        content: [
          '**لا. في وقت كتابة هذه المراجعة، لا يمكن تنزيل LLM Farm من متجر Apple App Store، كما أن قناته التجريبية عبر TestFlight مغلقة أيضًا.** نُشر التطبيق في الأصل على App Store في 13 ديسمبر 2023، وأزالته Apple بحسب سجل إصدارات والتزامات المشروع في نحو 8 أغسطس 2025. صفحة App Store التي كانت موجودة سابقًا على العنوان `apps.apple.com/app/llm-farm/id6461209867` لم تعد تظهر.',
          'يذكر [ملف README على GitHub](https://github.com/guinmoon/LLMFarm) الخاص بالمشروع صراحة: "The app is temporarily unavailable in TestFlight and Appstore" (التطبيق غير متوفر مؤقتًا في TestFlight وApp Store). لم تتمكن PromptQuorum من تأكيد سبب الإزالة — فالمستودع لا يذكر أي سبب — ولا من تأكيد ما إذا كان التطبيق سيعود إلى أي من قناتي التوزيع أو متى قد يحدث ذلك. تذكر صفحة أسئلة شائعة أقدم في الويكي أن المطوّر كان يعرض سابقًا بناء ملف `.ipa` يدويًا للمستخدمين الذين يراسلونه عبر البريد الإلكتروني إذا تعذّر الوصول إلى TestFlight؛ ولم تتمكن هذه المراجعة من تأكيد ما إذا كان هذا العرض ما زال ساريًا، لأن ملف README الحالي لا يكرر ذكره.',
        ],
        items: [
          'حالة App Store: أُزيل منذ نحو أغسطس 2025، بحسب سجل التزامات وإصدارات المشروع.',
          'حالة TestFlight: مغلقة بحسب ملف README الحالي على GitHub، حتى وقت كتابة هذه المراجعة.',
          'سبب الإزالة: لم يذكره المطوّر ولا Apple في أي مصدر تمكنت PromptQuorum من العثور عليه.',
          'الطريقة الوحيدة المؤكدة حاليًا لتثبيت التطبيق: بناؤه من الشيفرة المصدرية عبر Xcode، انطلاقًا من مستودع GitHub العام.',
        ],
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيفية الحصول على LLM Farm اليوم',
        content: [
          '**بما أن LLM Farm غير متوفر حاليًا على App Store، فإن استخدامه يعني بناء المشروع مفتوح المصدر من الشيفرة المصدرية باستخدام Xcode — وهو حاجز أعلى بوضوح من تنزيل تطبيق.** تتبع الخطوات أدناه تعليمات البناء الواردة في [مستودع GitHub](https://github.com/guinmoon/LLMFarm) الخاص بالمشروع نفسه.',
        ],
        numberedItems: [
          {
            title: 'تثبيت Xcode وحساب مطور من Apple',
            whyItMatters: 'تحتاج إلى جهاز Mac مثبَّت عليه Xcode وحساب مطور من Apple، مجاني أو مدفوع، لتجميع التطبيق وتوقيعه لجهازك الخاص. هذا هو العائق الرئيسي لغير المطورين.',
          },
          {
            title: 'استنساخ المستودع بشكل متكرر (recursive)',
            whyItMatters: 'نفّذ الأمر `git clone --recurse-submodules https://github.com/guinmoon/LLMFarm` — خيار `--recurse-submodules` ضروري لأن مكتبة الاستدلال الأساسية `llmfarm_core` نُقلت إلى مستودع منفصل وتُدرج كوحدة فرعية (submodule).',
          },
          {
            title: 'فتح المشروع في Xcode وبناؤه لجهازك',
            whyItMatters: 'افتح ملف مشروع Xcode، واختر جهازك أو هدف Mac، وحدّد فريق التوقيع الخاص بك كمطور، ثم قم بالبناء. ينتج عن ذلك تطبيق يعمل على عتادك الخاص، لكنه ليس تطبيقًا يمكنك توزيعه على آخرين عبر App Store.',
          },
          {
            title: 'تنزيل نموذج GGUF وتحميله',
            whyItMatters: 'بمجرد تشغيل التطبيق، أضف ملف نموذج GGUF (من Hugging Face أو مصدر آخر) وحمّله من شاشة إدارة النماذج في التطبيق، ثم ابدأ الدردشة بالكامل على الجهاز.',
          },
        ],
        note: 'تفترض هذه العملية إلمامًا أساسيًا بـXcode وتوقيع شيفرة iOS. المستخدمون الذين لا يشعرون بالارتياح تجاه بناء تطبيق من الشيفرة المصدرية ينبغي أن يفكروا بدلًا من ذلك في بديل يُثبَّت بلمسة واحدة مثل PocketPal AI أو Private LLM — راجع قسم البدائل أدناه.',
      },
      modelsSupported: {
        id: 'models-supported',
        title: 'ما النماذج التي يدعمها LLM Farm؟',
        itemHeadings: true,
        columns: ['عائلة النماذج', 'الفئة', 'ملاحظات'],
        rows: [
          {
            'عائلة النماذج': 'LLaMA وGemma وQwen وPhi وMixtral وDeepSeek وYi وStableLM',
            'الفئة': 'توليد النصوص',
            'ملاحظات': 'تُحمَّل كملفات GGUF عبر محرّك التطبيق المبني على ggml/llama.cpp',
          },
          {
            'عائلة النماذج': 'GPT-2 وStarcoder وFalcon وMPT وBloom وRWKV وMamba وGPTNeoX وPLaMo',
            'الفئة': 'توليد النصوص (معماريات قديمة / متخصصة)',
            'ملاحظات': 'تغطية معماريات أوسع من معظم تطبيقات الجوال المنافسة',
          },
          {
            'عائلة النماذج': 'LLaVA (1.5/1.6) وBakLLaVA وObsidian وShareGPT4V وMobileVLM وYi-VL وMoondream',
            'الفئة': 'متعدد الوسائط (رؤية-لغة)',
            'ملاحظات': 'دعم إدخال صورة مع نص، بحسب ملف README الخاص بالمشروع',
          },
          {
            'عائلة النماذج': 'أي نموذج آخر بصيغة GGUF أو GGJTv3',
            'الفئة': 'استيراد مخصص',
            'ملاحظات': 'يتطلب GGUF امتداد `.gguf`، بينما تتطلب الصيغة الأقدم GGJTv3 امتداد `.bin`، بحسب ويكي المشروع',
          },
        ],
      },
      platform: {
        id: 'platform-availability',
        title: 'هل LLM Farm متوفر على iPhone وiPad وMac؟',
        itemHeadings: true,
        columns: ['المنصة', 'التوفر', 'ملاحظات'],
        rows: [
          {
            'المنصة': 'iPhone / iPad',
            'التوفر': 'يتطلب البناء عبر Xcode — لا يمكن تثبيته من App Store في وقت كتابة هذه المراجعة',
            'ملاحظات': 'يتطلب iOS 16 كحد أدنى بحسب ملف README الخاص بالمشروع؛ يُستخدم تسريع Metal للاستدلال على الجهاز.',
          },
          {
            'المنصة': 'Mac',
            'التوفر': 'يتطلب البناء عبر Xcode',
            'ملاحظات': 'يتطلب macOS 13 كحد أدنى بحسب ملف README الخاص بالمشروع؛ يوجد دعم أصلي لـmacOS جنبًا إلى جنب مع iOS/iPadOS ضمن قاعدة الشيفرة نفسها.',
          },
          {
            'المنصة': 'Android / Windows / Linux',
            'التوفر': 'غير مدعوم',
            'ملاحظات': 'لا يتوفر LLM Farm لأنظمة Android أو Windows أو Linux. ينبغي على مستخدمي Android البحث عن RikkaHub أو ChatterUI أو Maid بدلًا من ذلك.',
          },
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'كم تكلفة LLM Farm؟',
        content: [
          '**LLM Farm نفسه مجاني ومفتوح المصدر برخصة MIT — لا يوجد سعر شراء ولا اشتراك مقابل الشيفرة أو ميزة الدردشة في التطبيق.** لم تعثر PromptQuorum على أي دليل على وجود مشتريات داخل التطبيق أو خطة مميزة أو سوق مدفوع داخل LLM Farm، سواء في المستودع أو الويكي أو نص إدراج App Store التاريخي الذي جرى مراجعته لهذا المقال.',
          'التكلفة الفعلية لاستخدام LLM Farm اليوم غير مباشرة: تحتاج إلى جهاز Mac لبناء التطبيق (Xcode متاح فقط على macOS)، وحسب نوع حساب المطور من Apple، إما بلا تكلفة على الإطلاق (توقيع بفريق شخصي مجاني، يقتصر على أجهزتك الخاصة بشهادة تحتاج إلى تجديد كل نحو سبعة أيام)، أو رسوم [برنامج مطوري Apple](https://developer.apple.com/programs/) للحصول على شهادة توقيع أطول أمدًا. إلى جانب ذلك، تستهلك ملفات نماذج GGUF التي تُنزَّل مساحة تخزين على الجهاز، عادةً عدة غيغابايتات لكل نموذج، تمامًا مثل أي تطبيق آخر للنماذج اللغوية المحلية.',
        ],
        items: [
          '**التطبيق نفسه:** مجاني ومفتوح المصدر برخصة MIT — لم يُعثر على سعر شراء مقابل الشيفرة أو وظائفها.',
          '**المشتريات داخل التطبيق:** لم يُعثر على أي منها في المصادر التي جرت مراجعتها لهذا المقال.',
          '**أدوات البناء:** Xcode مجاني لكنه يتطلب جهاز Mac؛ يمكن لمعرّف Apple ID مجاني توقيع بنيات للاستخدام الشخصي بشهادة تحتاج إلى تجديد كل نحو سبعة أيام، بينما تتجنب عضوية برنامج مطوري Apple المدفوعة دورة التجديد هذه.',
          '**تكلفة التخزين:** ليست مالية لكنها حقيقية — يستهلك كل ملف نموذج GGUF يُنزَّل مساحة تخزين على الجهاز، عادةً عدة غيغابايتات لكل نموذج.',
        ],
      },
      features: {
        id: 'key-features',
        title: 'ما ميزات LLM Farm؟',
        content: [
          '**إلى جانب تشغيل نماذج GGUF محليًا، تميل مجموعة ميزات LLM Farm، بحسب ملف README والويكي الخاصين به على GitHub، إلى أن تكون أداة تجريب محلية للتعلم الآلي أكثر من كونها عميل دردشة بسيطًا.** وتشمل هذه الميزات:',
        ],
        items: [
          '**دعم واسع للمعماريات.** أكثر من 16 معمارية نماذج، منها عدة معماريات (Starcoder وFalcon وMPT وBloom وRWKV وGPTNeoX) لا تدعمها عادةً تطبيقات الذكاء الاصطناعي المحلية الأخرى للجوال.',
          '**نماذج متعددة الوسائط (رؤية-لغة).** يتيح دعم LLaVA وBakLLaVA وObsidian وShareGPT4V وMobileVLM وYi-VL وMoondream للتطبيق معالجة مطالبات تجمع بين صورة ونص، بحسب ملف README.',
          '**طرق أخذ عينات متعددة.** تُدرَج Temperature وTail-Free Sampling (TFS) وLocally Typical Sampling وMirostat وGreedy وأخذ العينات المقيّد بقواعد نحوية ضمن الخيارات المدعومة.',
          '**مخرجات مقيّدة بقواعد نحوية.** يتيح أخذ العينات بالقواعد النحوية (Grammar) تقييد مخرجات نموذج ما ببنية محددة (مثل JSON صالح)، وهو مفيد لحالات استخدام المخرجات المهيكلة.',
          '**قوالب إعدادات النموذج واستعادة السياق.** إعدادات محفوظة لكل نموذج، وإمكانية استعادة حالة سياق محادثة بدلًا من إعادة معالجتها من الصفر.',
          '**التكامل مع تطبيق الاختصارات من Apple.** يمكن تشغيل التطبيق من تطبيق أتمتة الاختصارات الخاص بـApple، بحسب ملف README.',
          '**توليد معزز بالاسترجاع (RAG) أساسي.** يذكر ملف README قدرة على RAG، لكن وثائق المشروع لا تُفصّل، في المادة التي جرت مراجعتها لهذا المقال، طريقة الاسترجاع الدقيقة أو صيغ المستندات المدعومة.',
        ],
        note: 'قد تتفاوت الميزات المتاحة بين البنيات المختلفة، ولأن التطبيق لا يمكن تثبيته حاليًا من App Store، فقد لا تطابق النسخة التي تبنيها بنفسك كل الميزات الموصوفة في نصوص إدراج App Store القديمة. راجع [مستودع GitHub](https://github.com/guinmoon/LLMFarm) وسجل التزاماته لمعرفة ما هو موجود فعليًا في الشيفرة المصدرية الحالية.',
      },
      loraFinetuning: {
        id: 'lora-finetuning',
        title: 'الضبط الدقيق LoRA ودمجه على الجهاز',
        content: [
          '**يتضمن LLM Farm أدوات LoRA (Low-Rank Adaptation) على الجهاز — تحميل المحولات، وضبط نموذج أساسي دقيقًا، ودمج محول مدرَّب مرة أخرى في النموذج الأساسي — وهو مزيج لا تقدّمه معظم تطبيقات الذكاء الاصطناعي المحلية للجوال على الإطلاق.** وبحسب [وثائق الويكي](https://github.com/guinmoon/LLMFarm/wiki/lora) الخاصة بالمشروع:',
          'يمكن تحميل محولات LoRA بوضع ملفات المحول في مجلد `lora_adapters`، إما كمحول واحد عبر واجهة إعدادات الدردشة، أو كعدة محولات مُهيَّأة بمعاملات مقياس فردية في ملف إعدادات. يتوفر الضبط الدقيق مباشرة داخل التطبيق ضمن Settings > FineTune، لكن الويكي يشير إلى أن ذلك يستهلك موارد كبيرة على عتاد الجوال — وعلى نظام iOS، تذكر الوثائق أن ذلك يقتصر عمليًا على نماذج بحجم نحو 3 مليارات معامل بإعدادات دنيا. تتيح وظيفة منفصلة، Settings > Merge Lora، دمج محول مدرَّب مع نموذجه الأساسي وتصديره، ويوصي الويكي باستخدام ضغط كمي Q4_K أو أقل للحصول على أداء عملي على iOS.',
        ],
        items: [
          'تحميل محول واحد أو عدة محولات LoRA، لكل منها معامل مقياس قابل للتهيئة بشكل مستقل.',
          'ضبط نموذج أساسي دقيقًا على الجهاز عبر Settings > FineTune — بحسب الويكي، يقتصر ذلك عمليًا على نحو 3 مليارات معامل بإعدادات دنيا على iOS.',
          'دمج محول LoRA مدرَّب مع نموذجه الأساسي وتصدير النتيجة عبر Settings > Merge Lora.',
          'المفاضلة: يذكر الويكي أنه لا يمكن استخدام التحميل عبر الملفات المُخطَّطة في الذاكرة (mmap) أثناء اتصال محول LoRA، ما يزيد استهلاك ذاكرة الوصول العشوائي مقارنة بتشغيل النموذج الأساسي وحده.',
        ],
        note: 'لم تُجرِ هذه المراجعة ضبطًا دقيقًا مستقلًا لأي نموذج داخل LLM Farm للتحقق من سرعة التدريب أو جودة المخرجات — يلخّص الوصف أعلاه ما تذكره وثائق المشروع نفسها عن هذه الميزة، وليس اختبار قياس أداء من PromptQuorum.',
      },
      hardware: {
        id: 'hardware-requirements',
        title: 'ما العتاد الذي تحتاجه لتشغيل LLM Farm؟',
        content: [
          '**النموذج الذي تختاره، وليس التطبيق نفسه، هو ما يحدد الحد الأدنى الفعلي من العتاد — وكإرشاد عام للنماذج اللغوية المحلية، يحتاج نموذج مضغوط كميًا بحجم 2 إلى 4 مليارات معامل إلى نحو 3 إلى 4 غيغابايت من ذاكرة الوصول العشوائي المتاحة، بينما يحتاج نموذج بحجم 7 إلى 8 مليارات معامل إلى 8 غيغابايت أو أكثر.** هذا إرشاد عتاد قياسي لصيغة GGUF، وليس اختبار قياس أداء خاصًا بـLLM Farm؛ ولم تقِس PromptQuorum بشكل مستقل استهلاك الذاكرة الدقيق لكل نموذج في LLM Farm.',
          'على iPhone وiPad وMac، يستخدم LLM Farm تسريع Metal للاستدلال، وهو ما يحسّن عمومًا السرعة مقارنة بالتنفيذ على المعالج المركزي وحده على عتاد Apple Silicon. يتطلب التطبيق حدًا أدنى من iOS 16 أو macOS 13، بحسب ملف README الخاص بالمشروع، لذا فإن الأجهزة الأقدم التي لا يمكنها تشغيل هذه الإصدارات من نظام التشغيل لا يمكنها تشغيل التطبيق بغض النظر عن سعة ذاكرة الوصول العشوائي.',
        ],
        items: [
          'النماذج الصغيرة (2 إلى 4 مليارات معامل، مضغوطة كميًا): قابلة للاستخدام على معظم أجهزة iPhone وMac الحديثة مع 4 غيغابايت أو أكثر من ذاكرة وصول عشوائي متاحة.',
          'النماذج متوسطة الحجم (7 إلى 8 مليارات معامل، مضغوطة كميًا): يُوصى بـ8 غيغابايت أو أكثر من ذاكرة الوصول العشوائي للجهاز لاستجابة مقبولة.',
          'الضبط الدقيق LoRA تحديدًا: بحسب ويكي المشروع، يقتصر عمليًا على نحو 3 مليارات معامل على iOS، بإعدادات دنيا، بسبب قيود الحوسبة والذاكرة على الجهاز.',
          'الحد الأدنى لنظام التشغيل: iOS 16 أو macOS 13، بحسب ملف README على GitHub.',
          'التخزين: خصّص عدة غيغابايتات من المساحة الحرة لكل ملف نموذج GGUF يُنزَّل.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب LLM Farm',
        items: [
          '**المطورون الذين يشعرون بالارتياح لبناء تطبيق من الشيفرة المصدرية في Xcode.** بما أن مساري App Store وTestFlight مغلقان حاليًا، فهذا شرط صارم وليس ميزة إضافية.',
          '**المستخدمون الذين يريدون تحديدًا الضبط الدقيق LoRA أو دمج المحولات على الجهاز.** لا تقدّم معظم تطبيقات الذكاء الاصطناعي المحلية المنافسة للجوال هذه المجموعة من الميزات على الإطلاق.',
          '**المستخدمون الذين يريدون أوسع نطاق ممكن من معماريات النماذج المدعومة على جهاز جوال.** أكثر من ست عشرة معمارية، منها عدة معماريات متخصصة (RWKV وMamba وGPTNeoX)، وهو نطاق واسع بشكل غير معتاد لتطبيق هاتف.',
          '**المستخدمون الذين يريدون فحص الشيفرة أو تعديلها بأنفسهم.** تسمح رخصة MIT بالتفرّع والتعديل، وقاعدة الشيفرة مرجع مفيد لفهم طبقة مبنية بلغة Swift تلتف حول llama.cpp/ggml.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'لمن لا يناسب LLM Farm',
        items: [
          '**أي شخص لا يستطيع أو لا يريد بناء تطبيق iOS/macOS من الشيفرة المصدرية.** هذا هو السبب الأكبر لتجنّب LLM Farm حاليًا: لا يوجد تثبيت من App Store، ولا وصول مؤكد إلى TestFlight، حتى وقت كتابة هذه المراجعة.',
          '**المستخدمون الذين يحتاجون إلى دعم Android أو Windows أو Linux.** LLM Farm مقتصر على منتجات Apple؛ ينبغي على مستخدمي Android البحث عن RikkaHub أو ChatterUI أو Maid، وعلى مستخدمي سطح المكتب من غير Mac البحث عن Ollama أو LM Studio أو Jan AI.',
          '**المستخدمون الذين يريدون تطبيقًا مضمون التثبيت اليوم.** كل من PocketPal AI وPrivate LLM قابل للتثبيت فورًا من App Store دون بناء أي شيء.',
          '**المستخدمون الذين يتوقعون إصدارات متكررة ومرقّمة.** صدر آخر إصدار مُعلَّم للمشروع في يناير 2025؛ ورغم استمرار الالتزامات بشكل متقطع منذ ذلك الحين، لم يصدر أي إصدار مُغلَّف جديد منذ أكثر من عام حتى وقت كتابة هذه المراجعة.',
          '**المستخدمون الذين يحتاجون إلى دعم مضمون أو خارطة طريق واضحة.** يُصان LLM Farm بشكل مستقل من قِبل مطوّر واحد، بحسب سجل مستودعه، دون أي التزام مُعلَن باستعادة توفره على App Store.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        title: 'LLM Farm مقابل البدائل',
        itemHeadings: true,
        columns: ['التطبيق', 'الترخيص / التكلفة', 'المنصات', 'طريقة التثبيت الحالية'],
        rows: [
          {
            'التطبيق': 'LLM Farm',
            'الترخيص / التكلفة': 'مجاني، مفتوح المصدر (MIT)',
            'المنصات': 'iPhone/iPad، Mac',
            'طريقة التثبيت الحالية': 'البناء عبر Xcode فقط — App Store وTestFlight مغلقان',
          },
          {
            'التطبيق': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'الترخيص / التكلفة': 'مجاني، مفتوح المصدر (MIT)',
            'المنصات': 'iPhone/iPad، Android',
            'طريقة التثبيت الحالية': 'App Store وGoogle Play، تثبيت مباشر',
          },
          {
            'التطبيق': '[Private LLM](/power-local-llm/private-llm-review)',
            'الترخيص / التكلفة': 'مدفوع، شراء لمرة واحدة؛ مصدر مغلق',
            'المنصات': 'iPhone/iPad/Mac (منتجات Apple فقط)',
            'طريقة التثبيت الحالية': 'App Store، تثبيت مباشر',
          },
          {
            'التطبيق': '[Enclave AI](/power-local-llm/enclave-ai-review)',
            'الترخيص / التكلفة': 'مجاني مع خطة مدفوعة؛ مصدر مغلق',
            'المنصات': 'iPhone/iPad/Mac (منتجات Apple فقط)',
            'طريقة التثبيت الحالية': 'App Store، تثبيت مباشر',
          },
          {
            'التطبيق': 'Layla',
            'الترخيص / التكلفة': 'خطط مجانية ومدفوعة؛ مصدر مغلق',
            'المنصات': 'Android وiOS، بحسب [layla-network.ai](https://www.layla-network.ai)',
            'طريقة التثبيت الحالية': 'تحقق من التوفر الحالي عبر [layla-network.ai](https://www.layla-network.ai) قبل افتراض وجود خطة مجانية',
          },
          {
            'التطبيق': '[Maid](https://github.com/Mobile-Artificial-Intelligence/maid)',
            'الترخيص / التكلفة': 'مجاني، مفتوح المصدر',
            'المنصات': 'Android',
            'طريقة التثبيت الحالية': 'Google Play أو البناء من الشيفرة المصدرية',
          },
          {
            'التطبيق': '[ChatterUI](https://github.com/Vali-98/ChatterUI)',
            'الترخيص / التكلفة': 'مجاني، مفتوح المصدر (AGPL-3.0)',
            'المنصات': 'Android',
            'طريقة التثبيت الحالية': 'البناء من الشيفرة المصدرية أو تثبيت ملف APK جانبيًا من إصدار منشور',
          },
          {
            'التطبيق': '[RikkaHub](https://github.com/rikkahub/rikkahub)',
            'الترخيص / التكلفة': 'مجاني، مفتوح المصدر',
            'المنصات': 'Android',
            'طريقة التثبيت الحالية': 'إصدارات GitHub أو البناء من الشيفرة المصدرية',
          },
          {
            'التطبيق': '[AnythingLLM Mobile](https://anythingllm.com/mobile)',
            'الترخيص / التكلفة': 'مجاني، مفتوح المصدر',
            'المنصات': 'Android؛ نسخة iOS غير متوفرة بعد حتى وقت كتابة هذه المراجعة',
            'طريقة التثبيت الحالية': 'Google Play أو موقع AnythingLLM Mobile',
          },
        ],
        note: 'تتغير حالة التوفر في هذه الفئة بشكل متكرر — يعكس هذا الجدول ما تمكنت PromptQuorum من تأكيده في سبتمبر 2026. تحقق من صفحة كل مشروع بنفسك قبل افتراض أن أي رابط ما زال حديثًا.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل ما زال LLM Farm متاحًا؟',
            a: 'المشروع مفتوح المصدر ما زال نشطًا على GitHub، لكن التطبيق لا يمكن تثبيته حاليًا من App Store أو TestFlight. أزالت Apple إدراج App Store في نحو أغسطس 2025، وما زال ملف README الخاص بالمشروع يصف كلتا القناتين بأنهما "غير متوفرتين مؤقتًا" حتى وقت كتابة هذه المراجعة. الطريقة الوحيدة الحالية هي بناؤه من الشيفرة المصدرية باستخدام Xcode.',
          },
          {
            q: 'لماذا أُزيل LLM Farm من App Store؟',
            a: 'لم تعثر PromptQuorum على أي سبب مُعلَن من المطوّر أو من Apple في أي مصدر جرت مراجعته لهذا المقال. يقرّ ملف README على GitHub الخاص بالمشروع بالإزالة دون تفسير سببها.',
          },
          {
            q: 'هل LLM Farm مجاني؟',
            a: 'نعم. LLM Farm مجاني ومفتوح المصدر برخصة MIT، ولم تجد PromptQuorum أي دليل على وجود مشتريات داخل التطبيق أو خطة مدفوعة في المصادر التي جرت مراجعتها. التكلفة العملية هي جهاز Mac وXcode لبنائه، إضافة إلى حساب مطور من Apple.',
          },
          {
            q: 'من طوّر LLM Farm؟',
            a: 'طوّر LLM Farm المطور Artem Savkin، الذي ينشر تحت اسم المستخدم [guinmoon](https://github.com/guinmoon) على GitHub. يُصان بشكل مستقل وليس من قِبل شركة.',
          },
          {
            q: 'هل LLM Farm مفتوح المصدر؟',
            a: 'نعم، الشيفرة المصدرية الكاملة منشورة على [GitHub](https://github.com/guinmoon/LLMFarm) برخصة MIT، وهي رخصة متساهلة تسمح بالاستخدام والتعديل وإعادة التوزيع بحرية.',
          },
          {
            q: 'هل يمكن لـLLM Farm ضبط النماذج دقيقًا باستخدام LoRA؟',
            a: 'نعم، بحسب وثائق ويكي المشروع. يدعم LLM Farm تحميل محولات LoRA، وضبط نموذج أساسي دقيقًا على الجهاز (يقتصر عمليًا على نحو 3 مليارات معامل على iOS بحسب الويكي)، ودمج محول مدرَّب مرة أخرى في النموذج الأساسي. لا تقدّم معظم تطبيقات الذكاء الاصطناعي المحلية المنافسة للجوال هذه الميزة.',
          },
          {
            q: 'هل يعمل LLM Farm على Android؟',
            a: 'لا. يدعم LLM Farm فقط نظامي iOS (16 فأعلى) وmacOS (13 فأعلى)، بحسب ملف README على GitHub. ينبغي على مستخدمي Android البحث عن RikkaHub أو ChatterUI أو Maid بدلًا من ذلك.',
          },
          {
            q: 'كيف أثبّت LLM Farm دون App Store؟',
            a: 'استنسخ [مستودع GitHub](https://github.com/guinmoon/LLMFarm) بشكل متكرر باستخدام `git clone --recurse-submodules`، وافتح المشروع في Xcode، ووقّعه بحساب المطور الخاص بك من Apple، وابنِه لجهازك. يتطلب ذلك جهاز Mac وإلمامًا أساسيًا بـXcode وتوقيع شيفرة iOS.',
          },
          {
            q: 'كيف يقارَن LLM Farm بـPocketPal AI أو Private LLM؟',
            a: 'كل من LLM Farm وPocketPal AI مجاني وبرخصة MIT، لكن LLM Farm يتطلب حاليًا البناء من الشيفرة المصدرية، بينما يُثبَّت PocketPal AI مباشرة من App Store وGoogle Play. يدعم LLM Farm عددًا أكبر من معماريات النماذج ويتضمن الضبط الدقيق LoRA على الجهاز، وهو ما لا يقدّمه لا PocketPal AI ولا Private LLM (المدفوع ومغلق المصدر). اختر LLM Farm فقط إذا كنت مرتاحًا لبناء تطبيق بنفسك؛ واختر PocketPal AI أو Private LLM إذا كنت تريد شيئًا قابلًا للتثبيت اليوم. راجع جدول المقارنة أعلاه للاطلاع على التفاصيل.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يظل LLM Farm أحد أكثر مشاريع الذكاء الاصطناعي المحلية مفتوحة المصدر قدرة تقنية لأجهزة Apple — إذ تتجاوز تغطيته لمعماريات النماذج وأدواته للضبط الدقيق LoRA ودمج المحولات على الجهاز معظم تطبيقات الجوال في هذه الفئة، بما فيها PocketPal AI وPrivate LLM. لكن حتى وقت كتابة هذه المراجعة، ليس تطبيقًا يستطيع معظم الناس تثبيته فعليًا: فقد أزالته Apple من App Store في أغسطس 2025، والوصول إلى TestFlight مغلق بحسب ملف README الخاص بالمشروع، والطريقة الوحيدة المؤكدة لتشغيله هي تجميع الشيفرة مفتوحة المصدر بنفسك في Xcode. هذه مقايضة معقولة لمطوّر يريد فحص الشيفرة أو تجربة الضبط الدقيق LoRA أو استخدام معمارية نموذج غير مألوفة. لكنه ليس طلبًا معقولًا لشخص يريد ببساطة تنزيل تطبيق والدردشة بخصوصية اليوم — ولهذا الغرض، يمثّل PocketPal AI (مجاني ومفتوح المصدر وقابل للتثبيت بلمسة واحدة) أو Private LLM (مدفوع ومصقول وقابل للتثبيت بلمسة واحدة) الخيارين العمليين اللذين تناولهما قسم البدائل أعلاه.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[LLM Farm على GitHub](https://github.com/guinmoon/LLMFarm) — الشيفرة المصدرية، والترخيص (MIT)، وملف README، وسجل الالتزامات، وأعداد النجوم/النسخ المتفرعة المذكورة في هذه المراجعة.',
          '[ملف LICENSE الخاص بـLLM Farm](https://github.com/guinmoon/LLMFarm/blob/main/LICENSE) — نص رخصة MIT وصاحب حقوق النشر (Artem Savkin، 2023).',
          '[ويكي LLM Farm: الأسئلة الشائعة](https://github.com/guinmoon/LLMFarm/wiki/FAQ) — ملاحظات التثبيت وتفاصيل صيغ الملفات المدعومة.',
          '[ويكي LLM Farm: LoRA](https://github.com/guinmoon/LLMFarm/wiki/lora) — وثائق تحميل LoRA وضبطه الدقيق ودمجه.',
          '[llmfarm_core.swift على GitHub](https://github.com/guinmoon/llmfarm_core.swift) — مكتبة الاستدلال الأساسية المذكورة في هذه المراجعة.',
          '[سجل إصدارات GitHub لمستودع guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm/releases) — آخر إصدار مُعلَّم (1.4.3، يناير 2025) مذكور في هذه المراجعة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — مقارنة تطبيقات iOS، بما فيها بدائل قابلة للتثبيت لـLLM Farm.',
          '[مراجعة PocketPal AI](/power-local-llm/pocketpal-ai-review) — بديل مجاني ومفتوح المصدر وقابل للتثبيت مباشرة لأجهزة iPhone وiPad وAndroid.',
          '[مراجعة Private LLM](/power-local-llm/private-llm-review) — بديل مدفوع ومغلق المصدر مقتصر على منتجات Apple بكتالوج واسع من النماذج المُنتقاة.',
          '[مراجعة Enclave AI](/power-local-llm/enclave-ai-review) — بديل مقتصر على منتجات Apple يتضمن أتمتة عبر Siri والاختصارات.',
          '[Loci AI Review: Offline AI for iPhone, Android, iPad, Mac and Windows](/power-local-llm/loci-ai-review-offline-local-ai) — بديل مدفوع ومغلق المصدر يعمل على خمس منصات بمكتبة نماذج مُنتقاة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة LLM Farm (2026): تطبيق GGUF مفتوح المصدر، غير متوفر حاليًا على App Store',
      description:
        'مراجعة LLM Farm: تطبيق GGUF مفتوح المصدر برخصة MIT لنظامي iOS وmacOS، يدعم الضبط الدقيق LoRA على الجهاز. غير متوفر حاليًا على App Store — ماذا يعني ذلك وكيفية بنائه.',
      url: 'https://promptquorum.com/power-local-llm/llm-farm-review',
      inLanguage: 'ar',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: { '@type': 'Audience', audienceType: 'مستخدمو iOS وmacOS ذوو الخبرة التقنية الذين يقيّمون تطبيقات الذكاء الاصطناعي المحلية مفتوحة المصدر' },
      about: [
        { '@type': 'Thing', name: 'LLM Farm' },
        { '@type': 'Thing', name: 'GGUF' },
        { '@type': 'Thing', name: 'llama.cpp' },
        { '@type': 'Thing', name: 'الضبط الدقيق LoRA' },
        { '@type': 'Thing', name: 'نموذج لغوي محلي' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/llm-farm-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'مراجعة LLM Farm (2026)', item: 'https://promptquorum.com/power-local-llm/llm-farm-review' },
      ],
    },
  },
}
