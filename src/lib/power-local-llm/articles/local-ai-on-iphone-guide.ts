// Power Local LLM: Local AI on iPhone: what is possible, what is not, and the iPhone apps we cover (platform pillar)
// Slug: local-ai-on-iphone-guide
// English block only; translations follow from the lead.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    last_full_refresh: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'Local AI on iPhone in 2026: What Is Possible, What Is Not, and the iPhone Apps We Cover',
    seoTitle: 'Local AI on iPhone 2026: What Works, What Does Not',
    intro:
      'A recent iPhone can run a useful language model offline once the model is downloaded, but only small ones: about 1-4 billion parameters on 6-8 GB of RAM. This guide maps what local AI on iPhone can do, what is partly possible and what is not possible at all, explains Apple Intelligence, the Foundation Models framework and App Store rules, and links the iPhone apps we cover in the PromptQuorum directory to the job they fit. App facts come from PromptQuorum\'s reviews, which are based on public sources unless a review says it was hands-on tested; this guide did not re-test any app.',
    metaDescription:
      'What local AI on iPhone can and cannot do in 2026: chip and RAM limits, Apple Intelligence, App Store rules, and the iPhone apps we cover by use case.',
    heroImage: '/images/local-ai-on-iphone-guide-hero-en.webp',
    twitterDescription:
      'Local AI on iPhone in 2026: capability map, RAM tiers, Apple Intelligence, App Store limits, a not-possible list and the iPhone apps we cover by use case.',
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM not published by Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB RAM reported)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM reported)',
      'iPhone 15 Pro (A17 Pro, 8 GB RAM reported)',
      'iPhone 14 Pro (A16, 6 GB RAM reported)',
    ],
    current_models_mentioned: [
      'Phi-4 Mini',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Qwen3 1.7B',
      'Llama 3.2 3B',
      'Apple Foundation Models',
    ],
    audience:
      'iPhone and iPad owners, privacy-conscious users, travellers and developers who want to know what on-device AI can and cannot do and which app to install for each job.',
    readTime: '45 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'local AI on iPhone',
    targetKeywords: [
      'local ai on iphone',
      'run ai on iphone offline',
      'iphone on-device ai',
      'apple intelligence foundation models framework',
      'local llm iphone app',
      'iphone ram llm',
      'ollama on iphone',
      'offline ai iphone',
      'what can local ai do on iphone',
    ],
    leadAnswerBlock:
      '**A recent iPhone can run a small language model (about 1-4 billion parameters on 6-8 GB of RAM) offline after a one-time download, covering chat, summaries, translation, dictation, document Q&A and small image tasks; it cannot run 30B+ models, replace Siri, or run background agents.** Apple Intelligence adds a built-in model on iPhone 15 Pro and newer, and there is no Ollama or Docker server on the iPhone.',
    quickAnswerTop: {
      en: {
        question: 'What can local AI do on an iPhone?',
        answer:
          'A recent iPhone can run 1-4 billion parameter models offline for chat, summaries, translation, dictation, document Q&A and small image tasks. It cannot run 30B+ models, replace Siri, or keep agents running in the background. Apple Intelligence adds a built-in model on iPhone 15 Pro and newer.',
        bullets: [
          '6 GB RAM: 1-2B models; 8 GB: 3-4B; 12 GB: 4B comfortably',
          'Apple Intelligence needs iPhone 15 Pro or newer',
          'No Ollama, Docker or Linux server on the phone',
          'Use a home server for 7B-70B models in remote mode',
          'Verify privacy with Airplane Mode and App Privacy Report',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'Key Takeaways',
        anchor: '#key-takeaways',
      },
      {
        label: 'Quick Facts',
        anchor: '#quick-facts',
      },
      {
        label: 'Capability Map: What Local AI on iPhone Can Do',
        anchor: '#capability-map',
      },
      {
        label: 'Chip and RAM Reality: Which iPhone Runs Which Model',
        anchor: '#iphone-hardware',
      },
      {
        label: 'Neural Engine, GPU and CPU: What Actually Runs the Model',
        anchor: '#chips-engines',
      },
      {
        label: 'Phone Tier, App and Model Size at a Glance',
        anchor: '#tier-app-model',
      },
      {
        label: 'Your First Local Model in 15 Minutes',
        anchor: '#first-run-15-minutes',
      },
      {
        label: 'Apple Intelligence and the Foundation Models Framework',
        anchor: '#apple-intelligence',
      },
      {
        label: 'App Store Rules That Shape Local AI on iPhone',
        anchor: '#app-store-rules',
      },
      {
        label: 'What iPhone Does Better and Worse Than Android',
        anchor: '#iphone-vs-android',
      },
      {
        label: 'Chat Assistants: The Main On-Device Apps',
        anchor: '#chat-assistants',
      },
      {
        label: 'Chat Assistants: Newer, Niche and Hybrid Apps',
        anchor: '#chat-more',
      },
      {
        label: 'Apps That Are Quiet, Stale or Not on the App Store',
        anchor: '#chat-quiet-apps',
      },
      {
        label: 'Vision and Camera: Ask Questions About Photos and Screenshots',
        anchor: '#vision-camera',
      },
      {
        label: 'Voice: Dictation, Transcription, Read-Aloud, Offline Assistants and Siri',
        anchor: '#voice-speech',
      },
      {
        label: 'Documents, PDFs and Retrieval on the Phone',
        anchor: '#documents-rag',
      },
      {
        label: 'Translation on the Device',
        anchor: '#translation',
      },
      {
        label: 'Image Generation and Photo Editing',
        anchor: '#image-generation-editing',
      },
      {
        label: 'Photo Libraries and Gallery Search',
        anchor: '#photos-gallery-search',
      },
      {
        label: 'Notes, Knowledge Bases and Bookmarks',
        anchor: '#notes-knowledge',
      },
      {
        label: 'Health and Wellness Questions',
        anchor: '#health-wellness',
      },
      {
        label: 'Roleplay and Companion Apps, With Content-Safety Notes',
        anchor: '#roleplay-companions',
      },
      {
        label: 'Smart Home and Agents',
        anchor: '#smart-home-agents',
      },
      {
        label: 'Remote Mode: iPhone as a Thin Client for Your Own Server',
        anchor: '#remote-mode',
      },
      {
        label:
          'Developer Paths: Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch and Foundation Models',
        anchor: '#developer-paths',
      },
      {
        label: 'Privacy and Telemetry Reality',
        anchor: '#privacy-telemetry',
      },
      {
        label: 'Battery, Heat and Memory Limits',
        anchor: '#battery-thermal-memory',
      },
      {
        label: 'What Works Only Partly',
        anchor: '#works-partly',
      },
      {
        label: 'Not Possible or Not Yet on iPhone',
        anchor: '#not-possible',
      },
      {
        label: 'Decision Path: I Have This iPhone and Want This',
        anchor: '#decision-path',
      },
      {
        label: 'Common Mistakes',
        anchor: '#common-mistakes',
      },
      {
        label: 'Sources',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Related Reading',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**A recent iPhone can run a useful language model with no connection once the model is downloaded.** The realistic ceiling is a 1B-4B parameter model on 6-8 GB of RAM; 7B-8B models in low-bit form only fit on the 12 GB iPhones and stay slow. Expect good drafting, summaries, translation and Q&A, and weaker reasoning, code and world knowledge than ChatGPT-class cloud models.',
          '**RAM, not the chip name, sets the model size.** Apple does not publish iPhone RAM; the figures in this guide are widely reported specs. A 4 GB iPhone is below the practical floor, 6 GB means 1-2B models, 8 GB means 3-4B, 12 GB adds headroom.',
          '**Apple Intelligence and the Foundation Models framework are a second, separate route.** Apple\'s own on-device model is already on the phone (iPhone 15 Pro and newer), needs no download and can be used by third-party apps. It is not a general chat app on its own, and language and region limits apply.',
          '**The App Store sets hard limits.** No Docker and no running Ollama on the phone; apps may not download code that changes their features (Apple guideline 2.5.2), so every engine ships inside the app and only model files are downloaded. That is why iPhone local AI means installing an app, not building a stack.',
          '**Most of what the owner of an iPhone wants has a reviewed app in our directory:** chat, camera questions, dictation and transcription, document chat, translation, image generation, photo search, notes, health questions, roleplay, smart-home control and remote access to a home server. This guide links most iPhone apps in our directory to the capability they fit.',
          '**Several things are not possible or only partly possible:** 30B+ models, frontier-quality reasoning, always-on background agents, replacing Siri with your own model, fine-tuning on the phone, and a guarantee of privacy from an App Store label alone.',
          '**"Zero telemetry" needs checking, not trusting.** Several apps that say they keep chat on the device still send crash reports, usage events or optional web requests; the privacy chapter shows how to verify with Airplane Mode and the App Privacy Report.',
          '**Start small:** install one app, download one 1-2 GB model on Wi-Fi, switch to Airplane Mode and ask a question. If that works, you have verified the whole offline path in under 15 minutes.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Scope:** iPhone first, iPad where the same apps run. Android is covered in the sister guide [Local AI on Android guide](/power-local-llm/local-ai-on-android-guide).',
          '**Apple Intelligence-capable iPhones (Apple\'s list):** iPhone 15 Pro and 15 Pro Max, the iPhone 16 family including 16e, the iPhone 17 family including 17e and Air, and the 2026 iPhone 18 Pro, 18 Pro Max and iPhone Duo. iPhone 15 and older non-Pro models are not on the list.',
          '**RAM tiers used in this guide (reported, not published by Apple):** 4 GB (iPhone 12, 13, SE), 6 GB (iPhone 13 Pro, 14, 14 Pro, 15), 8 GB (iPhone 15 Pro, 16 series, 16e, 17), 12 GB (iPhone 17 Pro and Pro Max).',
          '**Model sizes that fit:** about 1.1 GB for a 1.7B model at 4-bit, about 2.5-3.7 GB for 3-4B models; indicative speeds come from our iPhone roundup and are not new measurements.',
          '**Engines inside iPhone apps:** llama.cpp (GGUF), Apple MLX, MLC LLM, Google LiteRT-LM, ExecuTorch, Core ML, Apple Foundation Models; a few apps combine several.',
          '**Apps linked in this guide:** the iOS and iPadOS apps in our directory that have a PromptQuorum review, plus iPhone companion apps for self-hosted tools.',
          '**What PromptQuorum did not do:** this guide did not re-test the apps. Facts come from our reviews, the store listings, the makers\' sites and Apple\'s documentation, and each review states what it tested.',
        ],
      },
      whatIsPossible: {
        id: 'capability-map',
        title: 'Capability Map: What Local AI on iPhone Can Do',
        content:
          '**Local AI on iPhone covers most everyday language tasks and several media tasks, but not everything cloud assistants do.** The table sorts each capability into Works, Partly or Not yet, and the chapter that follows names the apps. "Works" means a reviewed iPhone app does it with the model on the phone; "Partly" means it works with limits on size, speed, accuracy or hardware; "Not yet" means no reviewed iPhone app does it on the device.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Local AI on iPhone can handle chat, drafting, summaries, translation, dictation, document Q&A and small image tasks on the device, handles photo search, image generation and agents only partly, and cannot yet run large models or replace Siri.',
          },
          {
            type: 'plain-terms',
            text:
              'Think of an iPhone as a pocket assistant with a small, private brain. It answers simple questions, rewrites text, transcribes speech and describes photos without sending anything away, but it forgets facts a bigger cloud model knows, slows down on long answers and gets warm. For hard questions, many people pair the phone with a home computer or a cloud app.',
          },
        ],
        columns: ['Capability', 'On iPhone', 'Typical setup', 'Chapter'],
        rows: [
          {
            Capability: 'Chat, drafting, summaries',
            'On iPhone': 'Works',
            'Typical setup': '1-4B model, GGUF or MLX',
            Chapter: 'Chat assistants',
          },
          {
            Capability: 'Ask about a photo or screenshot',
            'On iPhone': 'Works',
            'Typical setup': 'Small vision model or OCR',
            Chapter: 'Vision and camera',
          },
          {
            Capability: 'Dictation and transcription',
            'On iPhone': 'Works',
            'Typical setup': 'Whisper or Parakeet',
            Chapter: 'Voice and speech',
          },
          {
            Capability: 'Read-aloud (text to speech)',
            'On iPhone': 'Works',
            'Typical setup': 'System voices or on-device TTS',
            Chapter: 'Voice and speech',
          },
          {
            Capability: 'Hands-free assistant with Siri',
            'On iPhone': 'Partly',
            'Typical setup': 'Shortcuts, not Siri replacement',
            Chapter: 'Voice and speech',
          },
          {
            Capability: 'Chat with your PDFs and notes',
            'On iPhone': 'Works',
            'Typical setup': 'Small model plus local index',
            Chapter: 'Documents and RAG',
          },
          {
            Capability: 'Translation',
            'On iPhone': 'Works',
            'Typical setup': 'Translation-tuned small model',
            Chapter: 'Translation',
          },
          {
            Capability: 'Image generation',
            'On iPhone': 'Partly',
            'Typical setup': 'Small diffusion models, slow',
            Chapter: 'Image generation',
          },
          {
            Capability: 'Photo editing (cutout, retouch)',
            'On iPhone': 'Works',
            'Typical setup': 'Core ML segmentation models',
            Chapter: 'Image generation',
          },
          {
            Capability: 'AI search in your photo library',
            'On iPhone': 'Partly',
            'Typical setup': 'On-device index or own server',
            Chapter: 'Photos and gallery',
          },
          {
            Capability: 'Notes and bookmarks with AI',
            'On iPhone': 'Partly',
            'Typical setup': 'AI often runs on a server',
            Chapter: 'Notes and knowledge',
          },
          {
            Capability: 'Health data questions',
            'On iPhone': 'Partly',
            'Typical setup': 'Apple Intelligence, not medical',
            Chapter: 'Health and wellness',
          },
          {
            Capability: 'Roleplay and companions',
            'On iPhone': 'Works',
            'Typical setup': 'Small chat model, cloud variants exist',
            Chapter: 'Roleplay and companions',
          },
          {
            Capability: 'Smart-home control',
            'On iPhone': 'Partly',
            'Typical setup': 'Home server does the work',
            Chapter: 'Smart home and agents',
          },
          {
            Capability: 'Always-on autonomous agents',
            'On iPhone': 'Not yet',
            'Typical setup': 'iOS limits background work',
            Chapter: 'Not possible',
          },
          {
            Capability: 'Run 30B+ models',
            'On iPhone': 'Not yet',
            'Typical setup': 'Use a home server remotely',
            Chapter: 'Remote mode',
          },
          {
            Capability: 'Fine-tune a model on the phone',
            'On iPhone': 'Not yet',
            'Typical setup': 'Train on a Mac or GPU',
            Chapter: 'Developer paths',
          },
        ],
      },
      hardware: {
        id: 'iphone-hardware',
        title: 'Chip and RAM Reality: Which iPhone Runs Which Model',
        content:
          '**RAM sets the largest model an iPhone can hold; the chip sets how fast it answers.** A language model must sit in memory while it generates, so a 4-bit 3B model (about 2-2.7 GB on disk) needs roughly that much free RAM on top of what iOS and other apps use. iOS closes an app that asks for too much, and Apple does not publish iPhone RAM, so the numbers below are widely reported specs (also used in our [Best Local AI Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026)) rather than Apple statements.',
        columns: ['iPhone tier', 'RAM (reported)', 'Realistic model size', 'Verdict'],
        rows: [
          {
            'iPhone tier': 'iPhone 12, 13, SE',
            'RAM (reported)': '4 GB',
            'Realistic model size': 'Under 1B, if at all',
            Verdict: 'Use remote mode instead',
          },
          {
            'iPhone tier': 'iPhone 13 Pro, 14, 14 Pro, 15',
            'RAM (reported)': '6 GB',
            'Realistic model size': '1-2B (about 1.1 GB file)',
            Verdict: 'Basic chat and drafting',
          },
          {
            'iPhone tier': 'iPhone 15 Pro, 16, 16e, 17',
            'RAM (reported)': '8 GB',
            'Realistic model size': '3-4B (about 2.5-3.7 GB)',
            Verdict: 'Typical 3-4B tier',
          },
          {
            'iPhone tier': 'iPhone 17 Pro, 17 Pro Max',
            'RAM (reported)': '12 GB',
            'Realistic model size': '4B comfortably, 7-8B low-bit',
            Verdict: 'Highest RAM tier',
          },
          {
            'iPhone tier': 'iPhone 18 Pro, Pro Max, Duo',
            'RAM (reported)': 'Not published',
            'Realistic model size': 'Treat as 12 GB until confirmed',
            Verdict: 'No PromptQuorum figures',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'A model that nominally fits can still be killed by iOS when you switch apps. On a 6 GB iPhone stay with 1-2B models even if a 3-4B file downloads without error; Apple\'s own iPhone pages state no RAM figure, so the tier table is a guide, not a guarantee.',
          },
        ],
      },
      hardwareChips: {
        id: 'chips-engines',
        title: 'Neural Engine, GPU and CPU: What Actually Runs the Model',
        content:
          '**An iPhone has three places to run a model, and which one an app uses depends on its engine, not on the phone.** The CPU is flexible but slow, the GPU (reached through Apple\'s Metal graphics API) handles the large matrix maths most chat apps rely on, and the Neural Engine is a fixed-function accelerator that Apple\'s Core ML and the newer Core AI framework can target. Apple describes Core AI as built for Apple silicon, using unified memory and the Neural Engine; it is new in the iOS 27 generation, so most apps in this guide do not use it yet.',
        items: [
          '**llama.cpp apps (GGUF files):** [PocketPal AI](/power-local-llm/pocketpal-ai-review), [Pocket AI](/power-local-llm/pocket-ai-review) and [LLM Farm](/power-local-llm/llm-farm-review) use Metal on the GPU. Supports any GGUF file, so models from Hugging Face can work.',
          '**Apple MLX apps:** [Locally AI](/power-local-llm/locally-ai-review), [fullmoon](/power-local-llm/fullmoon-review) and [MLXHub](/power-local-llm/mlxhub-review) use Apple\'s MLX array framework, built for unified memory on Apple silicon.',
          '**Multi-format apps:** [Noema](/power-local-llm/noema-review) supports GGUF, MLX, ExecuTorch, Core ML and Apple Foundation Models in one app, which is why its hardware use varies by model format (maker statement in the review).',
          '**Compiled-model apps:** [MLC Chat](/power-local-llm/mlc-chat-review) runs models compiled by the MLC LLM toolchain; [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review) uses Google\'s LiteRT-LM runtime.',
          '**Apple\'s own model:** Apple Intelligence runs Apple\'s model through system frameworks. Apps such as [Compass - Local AI](/power-local-llm/compass-local-ai-review) and [Pajdo](/power-local-llm/pajdo-review) call it instead of shipping a model.',
          '**Practical consequence:** two apps running the same model size on the same iPhone can differ in speed, memory use and heat. Run the same prompt in two apps before you delete a model you already downloaded.',
        ],
      },
      tierTable: {
        id: 'tier-app-model',
        title: 'Phone Tier, App and Model Size at a Glance',
        content:
          '**Choose by RAM tier first, then by need.** The table gives a starting point from our reviews and roundup; it is not a benchmark. Models change quickly, so check [Best Mobile LLM Models: Phi-4 Mini vs Gemma vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) for current small-model picks.',
        columns: ['Phone tier', 'Start with', 'Model size', 'Note'],
        rows: [
          {
            'Phone tier': '4 GB iPhone',
            'Start with': 'Remote client to a home server',
            'Model size': 'None on phone',
            Note: 'Reins, Enchanted, OpenClient',
          },
          {
            'Phone tier': '6 GB iPhone',
            'Start with': 'PocketPal AI or Locally AI',
            'Model size': '1-2B (about 1.1 GB)',
            Note: 'Smallest models',
          },
          {
            'Phone tier': '8 GB iPhone',
            'Start with': 'PocketPal AI, Private LLM, Gallery',
            'Model size': '3-4B (2.5-3.7 GB)',
            Note: 'Mid-price tier',
          },
          {
            'Phone tier': '12 GB iPhone',
            'Start with': 'Noema or Locally AI',
            'Model size': '4B, or 7-8B slowly',
            Note: 'Longer context fits',
          },
          {
            'Phone tier': 'Apple Intelligence phone',
            'Start with': 'Compass or Locally AI',
            'Model size': 'Apple model, no download',
            Note: 'Language limits apply',
          },
          {
            'Phone tier': 'Any phone, dictation',
            'Start with': 'Whisper Notes or Aiko',
            'Model size': 'Whisper-class, small',
            Note: 'Paid once',
          },
          {
            'Phone tier': 'Any phone, documents',
            'Start with': 'Private Mind or MemoryAI',
            'Model size': 'Small chat plus index',
            Note: 'Check file limits',
          },
        ],
      },
      firstRun: {
        id: 'first-run-15-minutes',
        title: 'Your First Local Model in 15 Minutes',
        content:
          '**You can verify the full offline path on an iPhone in about 15 minutes: install one app, download one small model on Wi-Fi, switch on Airplane Mode and ask a question.** The steps use [PocketPal AI](/power-local-llm/pocketpal-ai-review) as the example because it is free and open source, but any chat app in the next chapters works the same way. Time estimates depend on your connection and phone.',
        numberedItems: [
          {
            title: 'Minute 0-2: Check your iPhone tier',
            whyItMatters:
              'Look up your model in the RAM table above. 6 GB means a 1-2B model, 8 GB means 3-4B, 12 GB gives headroom. Free 3-5 GB of storage first, because a model file is 1-4 GB.',
          },
          {
            title: 'Minute 2-4: Install one app',
            whyItMatters:
              'Install a single app from the App Store, for example PocketPal AI, Locally AI or Google AI Edge Gallery. Do not install three apps with three models each; duplicate model files use storage fast.',
          },
          {
            title: 'Minute 4-9: Download one model on Wi-Fi',
            whyItMatters:
              'Pick the size for your tier, for example a Qwen3 1.7B class model on 6 GB or Phi-4 Mini or Gemma 4 E2B on 8 GB (see Models by Tier). The download is the only step that needs internet. Keep the app open and the screen on until it finishes.',
          },
          {
            title: 'Minute 9-10: Switch on Airplane Mode',
            whyItMatters:
              'Turn on Airplane Mode and leave Wi-Fi off. This proves the model runs on the phone and shows whether the app tries to reach the internet.',
          },
          {
            title: 'Minute 10-13: Ask three test questions',
            whyItMatters:
              'Ask for a three-bullet summary of a paragraph you paste, a rewrite of an email in a different tone, and a factual question you know the answer to. Note speed and whether the phone gets warm.',
          },
          {
            title: 'Minute 13-15: Check settings and cleanup',
            whyItMatters:
              'Open the app\'s benchmark or settings if it has one, note tokens per second, then check Settings > Privacy & Security > App Privacy Report later to see which domains the app contacted. Delete models you will not use.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'If the app crashes or restarts during the first answer, the model is too large for the phone. Delete it and choose the next smaller size rather than lowering other settings.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence and the Foundation Models Framework',
        content:
          '**Apple Intelligence gives every supported iPhone a built-in language model that needs no download, and the Foundation Models framework lets third-party apps use it.** Apple\'s developer page describes the framework as a native Swift API with direct access to the same on-device model that powers Apple Intelligence. It works only on devices and in languages that Apple Intelligence supports.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Apple Intelligence runs Apple\'s own on-device model on iPhone 15 Pro and newer, and the Foundation Models framework lets third-party apps such as Locally AI, Compass and Pajdo use it without shipping their own model.',
          },
          {
            type: 'plain-terms',
            text:
              'Apple already put a small language model inside the iPhone. You do not download it, but you also cannot swap it for another one. Apps can borrow it to answer questions on the device, which is why several new apps need a recent iPhone and a recent iOS rather than a big model download.',
          },
        ],
        items: [
          '**Device list (Apple\'s Apple Intelligence page):** iPhone 15 Pro and Pro Max (A17 Pro), iPhone 16, 16 Plus, 16e and 16 Pro family (A18 and A18 Pro), iPhone 17, 17e, 17 Pro, 17 Pro Max and Air (A19 and A19 Pro), and iPhone Duo, 18 Pro and 18 Pro Max (A20 Pro).',
          '**Languages:** Apple Intelligence needs Siri and the device language set to a supported language. Apple\'s list includes Chinese (Simplified and Traditional), Danish, Dutch, English, French, German, Italian, Japanese, Korean, Norwegian, Portuguese, Spanish, Swedish, Turkish and Vietnamese. Apple adds that some features may not be available in all regions or languages.',
          '**Siri AI (iOS 27 beta):** Apple lists English, French, Japanese, Korean, Portuguese and Spanish to start, says it will not be initially available in the EU on iOS, and says some server-side features have daily usage limits. It is separate from the on-device chat apps in this guide.',
          '**What the framework offers (Apple, iOS 27 guide):** access to Apple Foundation Models and, through a Language Model protocol, cloud models such as Claude and Gemini or any provider that conforms to it; multimodal prompts that pass images with text; Vision tools such as OCR and barcode reading that a model can call on the device; and Dynamic Profiles for swapping models, tools and instructions in one session.',
          '**iOS 26 baseline (not re-verified in this refresh):** the framework first shipped with iOS 26. Look up Apple\'s current documentation for the context limit and supported features before you design around it.',
          '**Private Cloud Compute:** Apple Intelligence can hand bigger requests to Apple\'s servers. Apple says data is never stored and used only for your request. That is not on-device processing, so treat "Apple Intelligence" and "offline" as different claims.',
          '**Apps in this guide that use Apple\'s model:** [Locally AI](/power-local-llm/locally-ai-review) (chat front end), [Compass - Local AI](/power-local-llm/compass-local-ai-review) (chat and screenshot OCR), [Pajdo](/power-local-llm/pajdo-review) (Apple Health questions), [LocalMindAI](/power-local-llm/localmindai-review) (Apple\'s model or downloaded models), [Noema](/power-local-llm/noema-review) and [Reins](/power-local-llm/reins-review) (Apple Foundation Models as one backend), [Hillnote](/power-local-llm/hillnote-review) (notes), and [AI on Device](/power-local-llm/ai-on-device-review), which instead ships its own 3B model but requires an Apple Intelligence-compatible device.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'If you only want rewriting, summaries of notifications and Writing Tools inside Mail, Messages and Notes, you do not need a chat app. If you want a chat window, model choice or document Q&A, install one of the apps in this guide; for the Apple-versus-open-model trade-off see [Apple on-device AI vs local LLMs](/local-llms/apple-on-device-ai-vs-local-llms).',
          },
        ],
      },
      appStoreRules: {
        id: 'app-store-rules',
        title: 'App Store Rules That Shape Local AI on iPhone',
        content:
          '**The App Store explains most of the differences between iPhone and desktop local AI.** Apple\'s App Review Guidelines apply to every app, and four of them matter here: self-contained apps, power use, background services and data sharing. This chapter quotes the rule text and gives our reading; it is not legal advice and Apple can change the rules.',
        items: [
          '**No downloaded code that changes the app (guideline 2.5.2).** Apple\'s text: apps "may not download, install, or execute code which introduces or changes features or functionality of the app". Local AI apps stay inside this rule by shipping the engine in the app and downloading model weights, which are data. That is our reading, not a statement from Apple.',
          '**No Ollama server on the phone.** Ollama offers no iPhone app, and the App Store sandbox leaves no practical way to run an Ollama server or a Docker container. Some sandboxed shell apps exist, but they do not give you a local-model server.',
          '**Public APIs only (guideline 2.5.1).** Apps may only use public APIs, which is why Foundation Models, Core ML, Metal and MLX are the available paths and private Neural Engine access is not.',
          '**Power and heat (guideline 2.4.2).** Apple says apps "should not rapidly drain battery, generate excessive heat, or put unnecessary strain on device resources". Sustained generation tests that line, which is why apps throttle or stop long runs.',
          '**Background use is limited (guideline 2.5.4).** Multitasking apps may use background services only for intended purposes such as audio playback, location, task completion and local notifications. A model cannot keep generating or acting as an agent indefinitely once you leave the app; [Reins](/power-local-llm/reins-review) notes that background generation needs iOS 26.',
          '**Memory limits.** iOS caps how much RAM a foreground app may use. Apple publishes an increased memory limit entitlement (com.apple.developer.kernel.increased-memory-limit) that developers can request; we do not state the exact allowance. You cannot see whether an app has it, so test a model with the app\'s own benchmark before relying on it.',
          '**JIT and runtime compilation.** Desktop engines often compile code at runtime; iOS apps ship engines compiled ahead of time instead. This is general platform behaviour, noted by several engine projects, and one reason iPhone engines trail desktop ones in features.',
          '**Data sharing (guidelines 5.1.1 and 5.1.2).** Apps must link a privacy policy, explain what data is collected, get permission before sharing personal data with third parties "including with third-party AI", and may not repurpose data without consent. App Store privacy labels are filled in by the developer, which the privacy chapter returns to.',
          '**Sideloading and alternative marketplaces.** In the EU, alternative app marketplaces exist under the Digital Markets Act, but each developer decides where to publish. None of the apps in this guide needs one; [LLM Farm](/power-local-llm/llm-farm-review) is the exception that currently has to be built from source in Xcode.',
          '**TestFlight betas.** Several makers offer TestFlight builds (for example [Aiko](/power-local-llm/aiko-review) for a free trial and [fullmoon](/power-local-llm/fullmoon-review) for newer builds). TestFlight builds are time-limited and unfinished; use them for testing, not for data you cannot lose.',
        ],
      },
      iphoneVsAndroid: {
        id: 'iphone-vs-android',
        title: 'What iPhone Does Better and Worse Than Android',
        content:
          '**iPhone is easier to start and more constrained to extend; Android is the reverse.** iPhones come in a small number of known configurations, ship Apple\'s own model and run every app through one store. Android phones vary much more in RAM and chip, allow terminal apps and sideloading, and have their own on-device model stack. This is a platform comparison from public information; for hardware-by-hardware numbers see [Galaxy vs iPhone on-device AI](/local-llms/galaxy-vs-iphone-on-device-ai-2026) and the sister [Local AI on Android guide](/power-local-llm/local-ai-on-android-guide).',
        columns: ['Topic', 'iPhone', 'Android'],
        rows: [
          {
            Topic: 'Setup effort',
            iPhone: 'App Store, one tap',
            Android: 'Play Store or APK',
          },
          {
            Topic: 'Built-in model',
            iPhone: 'Apple Foundation Models',
            Android: 'Vendor and Google models',
          },
          {
            Topic: 'Run Ollama on the phone',
            iPhone: 'No Ollama app for iPhone',
            Android: 'Possible via Termux (see guide)',
          },
          {
            Topic: 'RAM ceiling',
            iPhone: 'About 12 GB on Pro phones',
            Android: 'Varies; check each phone',
          },
          {
            Topic: 'Model formats',
            iPhone: 'GGUF, MLX, Core ML, LiteRT',
            Android: 'GGUF, LiteRT, MLC and more',
          },
          {
            Topic: 'Shortcuts and automation',
            iPhone: 'Shortcuts, App Intents',
            Android: 'Tasker and intents',
          },
          {
            Topic: 'App count',
            iPhone: 'Fewer open-source options',
            Android: 'Larger open-source choice',
          },
          {
            Topic: 'Background work',
            iPhone: 'Tightly limited',
            Android: 'Looser, still limited',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Many apps in this guide also run on Android ([PocketPal AI](/power-local-llm/pocketpal-ai-review), [MLC Chat](/power-local-llm/mlc-chat-review), [KernelAI](/power-local-llm/kernelai-review), [LLM Hub](/power-local-llm/llm-hub-review)), so a household with both platforms can often use the same app on each. Compare Android specifics in [Best Local AI Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026).',
          },
        ],
      },
      chatMain: {
        id: 'chat-assistants',
        title: 'Chat Assistants: The Main On-Device Apps',
        content:
          '**For general chat on an iPhone, start with one of the five apps that our iPhone roundup compares, then look at the newer apps below.** Each line gives what the app does and its honest limit. Details come from the linked PromptQuorum reviews, store listings and makers\' pages; unless a review says it tested the app, treat speed and quality as unmeasured. For ranked picks and indicative speeds see [Best Local AI Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026), and for the whole chat category see [Chat assistants compared](/power-local-llm/local-llm-chat-assistants-compared).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'PocketPal AI is the free default, Private LLM the paid Siri-and-Shortcuts option, Locally AI the free MLX app with Apple Foundation Models, and Google AI Edge Gallery the free Gemma 4 app for iPhone.',
          },
          {
            type: 'plain-terms',
            text:
              'Pick one chat app, download one model that fits your iPhone, and keep the rest of the apps in this guide for special jobs such as documents, voice or a home server. Prices come from the linked reviews and store pages and can change; check the store before buying.',
          },
        ],
        items: [
          '[PocketPal AI](/power-local-llm/pocketpal-ai-review): free, open source (MIT), runs any GGUF model from Hugging Face and has a built-in benchmark. Limit: standalone chat with no Shortcuts or Siri action mentioned; optional in-app purchases for premium presets.',
          '[Private LLM](/power-local-llm/private-llm-review): $4.99 once for iPhone, iPad and Mac, 140+ models, no account. The developer says it plugs into Siri and Shortcuts. Limit: closed source and a curated model list, so you cannot load arbitrary files.',
          '[Locally AI](/power-local-llm/locally-ai-review): free, from the LM Studio team, built on Apple MLX, with a Shortcuts action, Apple Foundation Models as a chat option and an optional link to LM Studio on a Mac. Limit: no arbitrary GGUF import, closed source, iOS 18.1 or later.',
          '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review): Google\'s free app for Gemma 4 with thinking mode, agent skills and image and audio input. Limit: LiteRT-LM models only, labelled an experimental beta, and its App Store privacy label shows some device diagnostics.',
          '[Noema](/power-local-llm/noema-review): free, runs GGUF, MLX, ExecuTorch, Core ML and Apple Foundation Models in one app, with on-device document chat. Limit: closed source, no published RAM minimum, iOS or iPadOS 18 or later.',
          '[Off Grid AI](/power-local-llm/off-grid-ai-review): free, open source (MIT) app with GGUF chat, Stable Diffusion image models and Whisper speech-to-text on the device, on iOS, Android, macOS and Windows. Limit: one app doing many jobs means more storage and more settings.',
          '[Pocket AI](/power-local-llm/pocket-ai-review): free, llama.cpp with Metal, 28 models across Qwen, Gemma, Llama, Mistral, Phi and DeepSeek families (per the developer), iPhone 12 or newer. Limit: on-device Whisper voice input needs the paid Pro unlock.',
          '[KernelAI](/power-local-llm/kernelai-review): free, 53 downloadable open models from 112 MB to 3.11 GB, with documents, vision and Shortcuts per the listing. Limit: closed source, and our review rests on public sources, not a hands-on test.',
          '[On Device AI](/power-local-llm/on-device-ai-review): 200+ downloadable GGUF and MLX models, plus transcription, document and RSS import, on-device text to speech and automation hooks. Limit: a broad feature list in a closed-source app; read its privacy section.',
          '[Enclave AI](/power-local-llm/enclave-ai-review): free with in-app purchases, offline on iPhone, iPad and Mac per its listing, no account, with document interaction and Shortcuts per our roundup. Limit: closed source and paid tiers.',
        ],
      },
      chatMore: {
        id: 'chat-more',
        title: 'Chat Assistants: Newer, Niche and Hybrid Apps',
        content:
          '**These apps cover narrower needs: one-time-price chat, Apple-model-only chat, personas, open-source privacy projects and hybrids that mix on-device and cloud.** Check the hybrid warnings in particular, because a hybrid app is only local while you stay on its on-device mode.',
        items: [
          '[Cloak: Local AI](/power-local-llm/cloak-local-ai-review): paid once ($1.99 in the US store), downloads one recommended model, adds Voice Memos and a weekly Recap built from Photos, Location and Voice Memos on iPhone. Limit: no model picker and the model name is not published.',
          '[Compass - Local AI](/power-local-llm/compass-local-ai-review): free, answers with Apple Intelligence on the device and reads screenshots with on-device OCR; needs iOS or iPadOS 26. Limit: web search is optional and sends your query to DuckDuckGo or Brave when switched on.',
          '[AI on Device](/power-local-llm/ai-on-device-review): $4.99 once, a 3B model quantized to 2 bits, requires iOS 26 and an Apple Intelligence-compatible device. Limit: no update since 13 October 2025, so treat it as quiet.',
          '[Haplo AI](/power-local-llm/haplo-ai-review): downloads open models such as Qwen and Phi for chat, image input and image generation, no account. Limit: paid app; our review rests on public sources.',
          '[Oscilla](/power-local-llm/oscilla-review): free, 40+ open models, real-time voice, built-in memory, web search and file and image analysis; Apple\'s "Data Not Collected" label. Limit: iOS 26 or later, closed source, and no update since 21 May 2026.',
          '[Frankly AI](/power-local-llm/frankly-ai-review): downloadable on-device models with task personas and no account; free daily limit, Pro unlocks the rest. Limit: usage cap on the free tier.',
          '[LLM Studio Go](/power-local-llm/llm-studio-go-review): free and ad-supported, chat, voice, images, music and speech with GGUF and MLX models, iOS or iPadOS 18. Limit: ads, and per the review it is not related to LM Studio despite the name.',
          '[Local AI Chat - pocket](/power-local-llm/local-ai-chat-pocket-review): freemium offline chat with image generation and Shortcuts per its tagline, iOS or iPadOS 18.6 or later. Limit: no update since 27 May 2026 and subscription-style in-app purchases.',
          '[Loci AI](/power-local-llm/loci-ai-review-offline-local-ai): free on iPhone, iPad, Android, Mac and Windows, picks a model that fits the hardware automatically. Limit: the maker\'s claims about model strength are unverified by PromptQuorum.',
          '[Ensu](/power-local-llm/ensu-review): free, open source (AGPL), from Ente Labs, with image input and local voice dictation. Limit: the maker itself says it is not yet as capable as ChatGPT or Claude Code, and the version is still 0.x.',
          '[MemoryAI](/power-local-llm/memoryai-review): free offline chat with document Q&A, an editable memory and a PIN-locked Kid Mode; iOS 16.4+ and 4 GB+ RAM. Limit: its privacy policy lists usage events and crash reports; closed source.',
          '[Secret AI](/power-local-llm/secret-ai-review): offline chat with characters, Skills and MCP tools on GGUF, MNN and MLX models. Limit: per its privacy policy, MCP tool calls and optional remote servers can send data off the device, and the policy predates those features.',
          '[LocalMindAI](/power-local-llm/localmindai-review): iPhone and iPad chat, memory, speech recognition and document reading, using Apple\'s model or downloaded models; iOS 26. Limit: days old when reviewed, and our review rests on public sources.',
          '[Solair AI](/power-local-llm/solair-ai-review): local-first assistant with an optional bring-your-own-key cloud fallback; iOS 26. Limit: the fallback is cloud, so check which mode answers.',
          '[Liquid Apollo](/power-local-llm/liquid-apollo-review): free, runs Liquid AI LFM2 models (350M to 2.6B) offline, with an optional OpenRouter mode and custom backends; iOS 18. Limit: not local-only; OpenRouter mode needs your own key and internet.',
          '[Kai 9000](/power-local-llm/kai-9000-review): open-source assistant with persistent memory and tools. Limit: per its review, it sends messages to a cloud service by default; it runs locally only after you download an on-device model.',
          '[CompactifAI APP](/power-local-llm/compactifai-app-review): free app from Multiverse Computing that offers compressed models. Limit: the current store text describes only API models, so what runs on the phone is unverified.',
          '[Atomic Chat](/power-local-llm/atomic-chat-review): free, open source (Apache 2.0) app for macOS, Windows, Linux, iOS and Android with GGUF, MLX and ONNX models and a local OpenAI-compatible API. Limit: it is a multi-platform project, so read the review for what the iPhone build includes.',
          '[LLM Hub](/power-local-llm/llm-hub-review): Android and iPhone suite with an MCP-capable agent, image and music generation, translation, Whisper and voice chat, plus a paid Premium tier. Limit: its licence is PolyForm Noncommercial, not an open-source licence in the usual sense.',
          '[Llamatik](/power-local-llm/llamatik-review): free, MIT, an offline chatbot that its own listing calls an experimental showcase of the developer\'s Kotlin SDK. Limit: its privacy policy and store label list Firebase analytics and crash reporting.',
          '[Layla](/power-local-llm/layla-review): $19.99 once on Android and iOS, GGUF models with persona-driven companions, voices and image generation. Limit: Android-first, and an optional Layla Cloud mode exists.',
        ],
      },
      chatQuiet: {
        id: 'chat-quiet-apps',
        title: 'Apps That Are Quiet, Stale or Not on the App Store',
        content:
          '**An app with no update for more than three months may be unmaintained; check before relying on it.** Dates below come from the PromptQuorum directory tiles and each review. A quiet app can still work, but you get no fixes, no new models and no sign of whether the maker will return.',
        items: [
          '[MLC Chat](/power-local-llm/mlc-chat-review): Metal-accelerated reference app from the MLC LLM project. No App Store update since 27 September 2024, per our review. The engine behind it, [MLC LLM](/power-local-llm/mlc-llm-explained), is still active.',
          '[LLM Farm](/power-local-llm/llm-farm-review): last release 1.4.3 in January 2025 and last code push 30 January 2026. Not installable from the App Store or TestFlight (its README says temporarily unavailable); build from source in Xcode if you need its sampling controls.',
          '[fullmoon](/power-local-llm/fullmoon-review): free, MIT, runs small models on Apple MLX, with no release since 28 January 2025 and no code change since 5 May 2025.',
          '[Maid](/power-local-llm/maid-review): open-source chat app that is Android-first; its iOS build was a sideload and our review dates iOS releases to version 2.0.7 in April 2025, so it is not an App Store option.',
          '[Aiko](/power-local-llm/aiko-review): still sold and useful for transcription, but its last update was 27 June 2026, which is over three months ago.',
          'Other apps flagged quiet in this guide: [Atomic Bot](/power-local-llm/atomic-bot-review) (26 May 2026), [Chapper](/power-local-llm/chapper-review) (6 August 2026), [Enchanted](/power-local-llm/enchanted-review) (7 July 2026), [AI CutoutWerk](/power-local-llm/ai-cutoutwerk-review) (16 February 2026) and [pcAI Photo Retouch](/power-local-llm/pcai-photo-retouch-review) (20 February 2026).',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Quiet is a date-based flag from the directory tiles, not a verdict on quality. Before you pay for an app in this list, open its App Store page and read the version history yourself.',
          },
        ],
      },
      vision: {
        id: 'vision-camera',
        title: 'Vision and Camera: Ask Questions About Photos and Screenshots',
        content:
          '**Several iPhone apps accept an image next to your question and answer on the device, but small vision models make more mistakes than cloud ones.** Two routes exist: a vision-language model you download (the model reads the picture itself) and system OCR plus a text model (the phone extracts the text, then the model answers). Apple\'s iOS 27 developer guide says the Foundation Models framework now accepts images with text and lets a model call Vision tools such as OCR and barcode reading on the device.',
        items: [
          '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review): Ask Image and Audio Scribe with Gemma 4 models. Limit: LiteRT-LM models only; Google reports vendor memory figures, not PromptQuorum measurements.',
          '[Compass - Local AI](/power-local-llm/compass-local-ai-review): reads attached screenshots with on-device OCR and answers with Apple Intelligence. Limit: OCR reads text, it does not describe a scene; needs iOS or iPadOS 26.',
          '[Oscilla](/power-local-llm/oscilla-review): file and image analysis with vision-capable models such as MiniCPM-V per its listing. Limit: iOS 26 or later and no update since 21 May 2026.',
          '[Haplo AI](/power-local-llm/haplo-ai-review): image input and image generation in one app. Limit: our review rests on public sources, so model quality is unmeasured.',
          '[Ensu](/power-local-llm/ensu-review): image input with downloaded models, free and open source. Limit: version 0.x; the maker says it is not yet on a par with large cloud tools.',
          '[KernelAI](/power-local-llm/kernelai-review): lists vision among its features with 53 downloadable models. Limit: which models accept images varies by model.',
          '[MemoryAI](/power-local-llm/memoryai-review): image understanding with vision models after a model download. Limit: you must pick a vision-capable model yourself.',
          '[Reins](/power-local-llm/reins-review): sends image, PDF and CSV attachments to a model on your own server, or to a local MLX model. Limit: quality depends on the server model you choose.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Do not use a small on-device vision model for anything where a wrong reading has a cost, such as medicine labels, legal documents or identifying plants or mushrooms for eating. Treat answers as a starting point and check the source.',
          },
        ],
      },
      voice: {
        id: 'voice-speech',
        title: 'Voice: Dictation, Transcription, Read-Aloud, Offline Assistants and Siri',
        content:
          '**Speech to text is among the most established on-device tasks; makers report Whisper-class models running on recent phones, and several apps charge once instead of by the minute.** Text to speech and hands-free assistants are patchier. For a build-it-yourself pipeline see [Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline), for the category see [Voice and audio apps compared](/power-local-llm/local-llm-voice-audio-compared) and for engine comparisons [Local Whisper STT comparison](/power-local-llm/local-whisper-stt-comparison).',
        items: [
          '[Whisper Notes](/power-local-llm/whisper-notes-review): $7.99 once, runs Whisper, Parakeet and SenseVoice on iPhone, iPad and Apple silicon Macs, with speaker labels; the privacy policy says audio and transcripts never leave the device. Limit: closed source; the review is based on public sources, not hands-on testing.',
          '[Aiko](/power-local-llm/aiko-review): on-device Whisper transcription for Mac, iPhone and Vision Pro, 100 languages, Shortcuts support, one purchase for all platforms. Limit: last update 27 June 2026, so quiet.',
          '[Lyonesse](/power-local-llm/lyonesse-review): offline transcription, meeting notes and document chat for iPhone, iPad and Mac; its Apple Watch app records on its own and transfers to the iPhone, which does the transcription. Limit: the maker\'s processing claims are not independently verified.',
          '[OpenWhispr](/power-local-llm/openwhispr-review): MIT-licensed dictation and meeting notes with local Whisper or Parakeet models or a cloud provider you choose. Limit: whether your voice stays on the device depends on which model you pick.',
          '[AquaVoice](/power-local-llm/aquavoice-review): voice dictation that types into the active app. Limit: per the review it is a cloud service, listed here so you do not mistake it for local dictation.',
          '[Ensu](/power-local-llm/ensu-review) and [MemoryAI](/power-local-llm/memoryai-review): local voice dictation (Ensu) and hands-free voice with on-device speech input and read-aloud (MemoryAI) inside a chat app. Limit: voice quality follows the small chat model behind it.',
          '[Oscilla](/power-local-llm/oscilla-review), [LLM Studio Go](/power-local-llm/llm-studio-go-review) and [Pocket AI](/power-local-llm/pocket-ai-review): real-time voice, voice chat with speech, and on-device Whisper input (paid Pro) respectively. Limit: voice adds memory and battery load on top of the chat model.',
          '[Castmates](/power-local-llm/castmates-review): voice calls with characters that, per the maker, run on the phone. Limit: closed source, so the claim rests on the developer.',
          '[Cloak: Local AI](/power-local-llm/cloak-local-ai-review): turns Voice Memos into notes or chats. Limit: one fixed model.',
          '[Home Assistant Assist](/power-local-llm/home-assistant-assist-review): the voice assistant inside Home Assistant, local with Whisper, Piper and Wyoming per its review; not a standalone iPhone app. Limit: needs a Home Assistant server and an optional LLM agent that is partly experimental.',
          '[Murmur](/power-local-llm/murmur-review): composes instrumental music for photos, videos and games on the device with a one-time Pro unlock. Limit: no vocals.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Siri and Shortcuts: [Private LLM](/power-local-llm/private-llm-review) lists Siri and Shortcuts integration, [Locally AI](/power-local-llm/locally-ai-review) and [Aiko](/power-local-llm/aiko-review) offer Shortcuts actions, and our iPhone roundup describes the Shortcuts Use Model action that can route a prompt to Apple\'s on-device model. None of these replaces Siri itself; you ask Siri to run a Shortcut that calls the app.',
          },
        ],
      },
      documents: {
        id: 'documents-rag',
        title: 'Documents, PDFs and Retrieval on the Phone',
        content:
          '**Chatting with a handful of PDFs or notes works on an iPhone, but whole libraries belong on a home server.** On-device document chat splits files into pieces, indexes them with a small embedding model and passes the best pieces to the chat model. Small models have short context windows, so answers can miss content and invented citations are possible. For library-scale search see [Knowledge and retrieval apps compared](/power-local-llm/local-llm-knowledge-retrieval-compared).',
        items: [
          '[Private Mind](/power-local-llm/private-mind-review): open-source (MIT) chat by Software Mansion that answers questions about your PDF and text files with on-device retrieval and source citations, using React Native ExecuTorch. Limit: version 1.3.0 added an optional Web toggle that fetches pages, so it is offline by default but not offline when that feature is on.',
          '[MemoryAI](/power-local-llm/memoryai-review): document Q&A and an editable Agent Memory. Limit: closed source and usage events leave the phone.',
          '[LocalMindAI](/power-local-llm/localmindai-review): reads your documents on the device with Apple\'s model or a downloaded one. Limit: iOS 26 and very new when reviewed.',
          '[Noema](/power-local-llm/noema-review): on-device document chat across its five model formats. Limit: closed source; no published RAM figure.',
          '[Lyonesse](/power-local-llm/lyonesse-review): chat with your own documents next to transcripts. Limit: Apple Watch and meeting features are the focus.',
          '[Arbiter](/power-local-llm/arbiter-local-ai-chat-review): keeps uploaded documents on the device for summaries on an iPhone 13 Pro or later (about 6 GB RAM or more), and can reach LM Studio, Ollama or the Arbiter for Mac companion for a larger model. Limit: bigger-model answers leave the phone for your computer.',
          '[KernelAI](/power-local-llm/kernelai-review) and [Enclave AI](/power-local-llm/enclave-ai-review): both list document features in a general chat app. Limit: check file size and format limits in the app before you rely on it.',
          '[Reins](/power-local-llm/reins-review): PDF, CSV and text attachments sent to a model on your own server. Limit: processing happens on the server, not the phone.',
          '[AnythingLLM Mobile](/power-local-llm/anythingllm-mobile-review): Android has a standalone on-device mode and pairing with AnythingLLM Desktop; our review states the iOS app is not yet released. Limit: until iOS ships, use a browser against your own AnythingLLM server.',
        ],
      },
      translation: {
        id: 'translation',
        title: 'Translation on the Device',
        content:
          '**Translation is a natural fit for a small on-device model, because the task is narrow and several apps ship translation-tuned models.** PromptQuorum has not benchmarked translation quality on iPhone. Quality is likely to drop for rare languages, idioms and long documents, and every on-device engine needs a download per model or language.',
        items: [
          '[On-Device AI Translator](/power-local-llm/on-device-ai-translator-review): translates on the iPhone with downloadable Hy-MT2, TranslateGemma and Qwen models and offers Apple\'s built-in translation as a free engine; iOS 18.4 or later. Limit: the AI models sit behind in-app purchases whose prices the sources do not show, and the privacy policy predates the app.',
          '[LLM Hub](/power-local-llm/llm-hub-review): includes translation in its Android and iPhone suite. Limit: translation is one feature among many and the licence is noncommercial.',
          'General chat apps such as [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Locally AI](/power-local-llm/locally-ai-review) can translate too if you load a multilingual model such as a Qwen or Gemma family model. Limit: no glossary, no document layout, and no per-language quality guarantee.',
          'Apple\'s own Translate app and system translation are separate from the apps above and were not verified for this guide; check in the Translate app whether your language pair can be downloaded for offline use.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'For whole books or long documents, a desktop route is more practical; see [Translate books with LLMs](/power-local-llm/translate-books-with-llms-review). Apple Intelligence language support is a separate list covered in the Apple Intelligence chapter.',
          },
        ],
      },
      images: {
        id: 'image-generation-editing',
        title: 'Image Generation and Photo Editing',
        content:
          '**An iPhone can generate images with small diffusion models and edit photos with segmentation models, but generation is slow, storage-heavy and warms the phone.** Model files are multi-gigabyte downloads, and PromptQuorum has no speed figures for any iPhone image app. For cloud-versus-local trade-offs see [Local AI image generation vs cloud](/power-local-llm/local-ai-image-generation-vs-cloud) and for the category [Image and video apps compared](/power-local-llm/local-llm-images-video-compared).',
        items: [
          '[Draw Things](/power-local-llm/draw-things-review): generates images with Stable Diffusion, SDXL, Flux and other diffusion models on macOS, iOS, iPadOS and visionOS, no account for local generation, iOS 15.4 or later. Limit: not 100% local because it also offers an optional cloud mode; larger models need more RAM.',
          '[Genva](/power-local-llm/genva-review): iPhone and iPad app that turns text prompts and photos into images on the device with upscaling after a one-time model download. Limit: launched as version 1.0.0 on 14 October 2026, so no track record.',
          '[Haplo AI](/power-local-llm/haplo-ai-review), [Off Grid AI](/power-local-llm/off-grid-ai-review) and [LLM Studio Go](/power-local-llm/llm-studio-go-review): chat apps that also generate images on the device (Haplo AI, Off Grid AI with Stable Diffusion models, LLM Studio Go with music and speech too). Limit: image quality and speed trail dedicated apps.',
          '[Local AI Chat - pocket](/power-local-llm/local-ai-chat-pocket-review) and [Layla](/power-local-llm/layla-review): offline chat with image generation, Layla also with voices and personas. Limit: Local AI Chat - pocket is quiet since 27 May 2026; Layla is Android-first.',
          '[Tina](/power-local-llm/tina-review): generates images through ComfyUI on a server you host, and can also run models on the device. Limit: the image step needs your own server.',
          '[AI CutoutWerk](/power-local-llm/ai-cutoutwerk-review): offline background remover and cutout composer for iPhone, iPad and Mac, using a Core ML segmentation model. Limit: no update since 16 February 2026.',
          '[pcAI Photo Retouch](/power-local-llm/pcai-photo-retouch-review): restores old photos and applies art styles with an AI the developer says runs entirely on the device. Limit: model not named, source not published, no update since 20 February 2026.',
        ],
      },
      photos: {
        id: 'photos-gallery-search',
        title: 'Photo Libraries and Gallery Search',
        content:
          '**AI photo search on iPhone is usually a client for a library that does the indexing elsewhere: either on the phone with an opt-in feature, or on a server you run.** The three libraries below take different approaches, and none of them adds a chat model. Face recognition processes biometric data, so check the rules where you and the people in your photos live before switching it on.',
        items: [
          '[Ente Photos](/power-local-llm/ente-photos-review): open-source photo backup that, per Ente, is end-to-end encrypted; face recognition and natural-language magic search run on your device and stay off until you switch them on. Limit: photos are stored encrypted in Ente\'s cloud, and the first indexing run costs battery.',
          '[Immich](/power-local-llm/immich-review): self-hosted photo and video backup with iPhone and Android apps; smart search and face recognition run on a machine-learning container you host, installed with Docker. Limit: needs a server, the database holds only metadata so files need a separate backup, and there is no chat or LLM feature.',
          '[Mylio Photos](/power-local-llm/mylio-photos-review): photo, video and document library with SmartTag search, face and text recognition that Mylio says run on your own devices; free download, subscription plans. Limit: Mylio does not say where its in-app help chatbot runs.',
          'Self-hosted web galleries that you open in the iPhone browser or a companion app, such as [PhotoPrism review](/power-local-llm/photoprism-review), [Photoview review](/power-local-llm/photoview-review) and [Home Gallery review](/power-local-llm/home-gallery-review), are reviewed separately; read each review for what runs where.',
        ],
      },
      notes: {
        id: 'notes-knowledge',
        title: 'Notes, Knowledge Bases and Bookmarks',
        content:
          '**Most note and bookmark tools put the AI on a server or a model provider you choose, and the iPhone app is the capture and reading client.** That can still be fully private if the server is yours and the model is local, but it is not on-device inference. Each review states what runs where.',
        items: [
          '[Hillnote](/power-local-llm/hillnote-review): local-first Markdown notes workspace for Mac, Windows, iPhone and Android with on-device AI through Ollama and Apple Intelligence, plus optional cloud models and sync. Limit: Ollama runs on a computer, not on the phone, and cloud models are optional but not local.',
          '[Logseq](/power-local-llm/logseq-review): open-source, local-first outliner; the database version 2.0.2 is a beta whose README warns data loss is possible. Limit: AI comes through an optional MCP server, not a built-in model.',
          '[SiYuan](/power-local-llm/siyuan-review): self-hosted, AGPL knowledge workspace on Windows, macOS, Linux, Android, iOS and HarmonyOS, with optional AI features that connect to a model provider you choose. Limit: cloud sync needs a subscription or one-time PRO purchase.',
          '[Karakeep](/power-local-llm/karakeep-review): self-hosted bookmark and notes app with native iOS and Android apps and AI tagging through OpenAI or a local Ollama endpoint. Limit: you run the server with Docker, and tagging is only local if you choose Ollama.',
          '[Linkwarden](/power-local-llm/linkwarden-review): archives a copy of every page you save and can tag links with an AI model you configure, self-hosted or on a paid Cloud edition. Limit: the iPhone app is a client; the AI step runs on the server.',
          '[Lyonesse](/power-local-llm/lyonesse-review) and [Cloak: Local AI](/power-local-llm/cloak-local-ai-review): turn recordings into notes (Lyonesse) or a weekly recap from Photos, Location and Voice Memos (Cloak). Limit: both are closed source.',
        ],
      },
      health: {
        id: 'health-wellness',
        title: 'Health and Wellness Questions',
        content:
          '**One reviewed iPhone app answers questions about your Apple Health data with Apple Intelligence on the device, and it is the only health app in our iPhone set.** Health data is sensitive personal data, and a small language model is not a clinician.',
        items: [
          '[Pajdo](/power-local-llm/pajdo-review): free iPhone, iPad and Apple Watch app that turns Apple Health data into one of eight moods and, per its website, answers your questions about that data with Apple Intelligence on the device. The free plan includes 5 questions a week; Pro lifts the limit and adds workout planning and a doctor-visit report. Limit: closed source, iOS 26 or later, and the on-device claim rests on the developer\'s word.',
          'General chat apps from the Chat chapters can discuss sleep, training or nutrition in general terms. Limit: they have no access to your Health data unless an app asks for permission, and small models can state wrong facts with confidence.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'On-device answers are not medical advice and cannot replace a doctor. Do not use them to interpret symptoms, heart-rate alerts or medication questions; read the app\'s privacy policy before granting access to Apple Health.',
          },
        ],
      },
      roleplay: {
        id: 'roleplay-companions',
        title: 'Roleplay and Companion Apps, With Content-Safety Notes',
        content:
          '**Roleplay and companion chat is a large part of the iPhone local-AI app market, and the apps differ sharply in whether the model runs on the phone, what content they allow and how they treat minors.** Local does not mean moderated and cloud does not mean safer. Read the age rating and the mature-content settings before you or anyone in your household installs one. For desktop front ends see [SillyTavern vs Agnai vs RisuAI for roleplay](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        items: [
          '[Castmates](/power-local-llm/castmates-review): free iPhone app with 35 ready-made characters, custom characters and no account; the developer names Impish Llama 3B (Q4_K_M) running through llama.cpp after a download of about 1.9 GB. The Pro plan removes the daily message cap and unlocks an optional adults-only Mature mode. Limit: closed source, so the on-device claim rests on the developer.',
          '[Frankly AI](/power-local-llm/frankly-ai-review): on-device models with task personas and no account; free daily limit. Limit: the personas are task-oriented, and Pro unlocks the rest of the app.',
          '[Layla](/power-local-llm/layla-review): persona-driven AI companion with roleplay characters, voices and image generation on-device; $19.99 once. Limit: an optional, separately activated Layla Cloud mode exists.',
          '[Secret AI](/power-local-llm/secret-ai-review): custom characters on GGUF, MNN and MLX models; the maker says chats, characters and photos stay private. Limit: per its privacy policy, MCP tools and remote servers can send data off the device.',
          '[HiWaifu](/power-local-llm/hiwaifu-review): roleplay with long-term memory, lorebooks and group chats, rated 18+. Limit: it appears to be a cloud service, and its listing does not say where the model runs.',
          '[Swerve](/power-local-llm/swerve-ai-review): story and character chat with community characters and branching. Limit: per its listing it is an online service, not on-device AI.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Safety notes, in plain terms. First, age: several of these apps carry an 18+ App Store rating or an adults-only mode, and an on-device model has no server-side filter you can rely on. Second, privacy: cloud roleplay apps send your conversations to a service, and even local apps may send analytics. Third, emotional reliance: companion chat can feel personal, and that is a design feature, not a relationship. Fourth, real data: never type your address, health details or other people\'s private information into a roleplay chat. For a child\'s iPhone, use Apple\'s Screen Time content and app-rating limits rather than trusting an app\'s own settings.',
          },
        ],
      },
      smartHome: {
        id: 'smart-home-agents',
        title: 'Smart Home and Agents',
        content:
          '**On iPhone, smart-home AI and agents are almost always clients for software that runs on a home server, because iOS will not keep a model or agent running in the background.** The phone is the microphone, screen and remote control; the home server does the long-running work. For an honest look at whether autonomous local agents are practical, see [Do autonomous local agents actually work?](/power-local-llm/autonomous-local-agents-actually-work).',
        items: [
          '[Home Assistant Assist](/power-local-llm/home-assistant-assist-review): voice assistant inside Home Assistant, fully local with Whisper, Piper and Wyoming, with optional cloud and Ollama LLM agents. Limit: not a standalone app; the full local pipeline needs Home Assistant OS.',
          '[Scrypted](/power-local-llm/scrypted-review): open-source camera and NVR platform that streams cameras to HomeKit, Google Home and Home Assistant, with optional local LLM summaries via llama.cpp. Limit: runs on your own server, and camera footage of other people raises legal duties in many places.',
          '[Nekoni](/power-local-llm/nekoni-review): self-hosted personal agent (Ollama, documents, scheduled skills) on a computer you own, which you chat with from an iPhone or browser over a direct encrypted link. Limit: needs a Mac or Linux machine running at all times.',
          '[Kai 9000](/power-local-llm/kai-9000-review) and [LLM Hub](/power-local-llm/llm-hub-review): assistants with persistent memory and an MCP-capable agent respectively. Limit: tool use and web search add network calls, so they are not offline features.',
          '[Atomic Bot](/power-local-llm/atomic-bot-review): packages the open-source [OpenClaw review](/power-local-llm/openclaw-review) agent framework for desktop and mobile and can run locally or in the cloud. Limit: flagged quiet in this guide (last update 26 May 2026).',
        ],
      },
      remote: {
        id: 'remote-mode',
        title: 'Remote Mode: iPhone as a Thin Client for Your Own Server',
        content:
          '**If your iPhone is too small for the model you want, run the model on a Mac or PC at home and use the iPhone as the screen.** This is the usual route to 7B-70B models from an iPhone. Ollama\'s download page lists macOS, Windows and Linux and no iPhone app, so the server lives elsewhere (our iPhone roundup records this). Server side, see [Apple Silicon local LLM guide](/local-llms/apple-silicon-local-llm-guide-2026), [MLX vs Ollama vs llama.cpp on Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) and [Run and serve tools compared](/power-local-llm/local-llm-run-serve-compared).',
        columns: ['App', 'Connects to', 'Also runs models on phone'],
        rows: [
          {
            App: '[Reins](/power-local-llm/reins-review)',
            'Connects to': 'Ollama, LM Studio, OpenAI-compatible',
            'Also runs models on phone': 'Yes, MLX models',
          },
          {
            App: '[Enchanted](/power-local-llm/enchanted-review)',
            'Connects to': 'Ollama only',
            'Also runs models on phone': 'No',
          },
          {
            App: '[OpenClient](/power-local-llm/openclient-review)',
            'Connects to': 'Ollama, LiteLLM, OpenAI-compatible',
            'Also runs models on phone': 'No',
          },
          {
            App: '[Chapper](/power-local-llm/chapper-review)',
            'Connects to': 'LM Studio, Ollama, llama.cpp server',
            'Also runs models on phone': 'Yes, $4.99 add-on',
          },
          {
            App: '[Tina](/power-local-llm/tina-review)',
            'Connects to': 'Ollama, llama.cpp, ComfyUI',
            'Also runs models on phone': 'Yes',
          },
          {
            App: '[LM Mini](/power-local-llm/lm-mini-review)',
            'Connects to': 'LM Studio, Ollama, Jan AI, oMLX',
            'Also runs models on phone': 'Yes',
          },
          {
            App: '[Arbiter](/power-local-llm/arbiter-local-ai-chat-review)',
            'Connects to': 'LM Studio, Ollama, Arbiter for Mac',
            'Also runs models on phone': 'Yes',
          },
          {
            App: '[LocalMind](/power-local-llm/localmind-review)',
            'Connects to': 'Ollama, LM Studio, OpenRouter',
            'Also runs models on phone': 'Yes',
          },
          {
            App: '[Liquid Apollo](/power-local-llm/liquid-apollo-review)',
            'Connects to': 'LM Studio, Ollama, OpenRouter',
            'Also runs models on phone': 'Yes, LFM2',
          },
          {
            App: '[Locally AI](/power-local-llm/locally-ai-review)',
            'Connects to': 'LM Studio on a Mac (LM Link)',
            'Also runs models on phone': 'Yes',
          },
          {
            App: '[MLXHub](/power-local-llm/mlxhub-review)',
            'Connects to': 'Serves a model on your Wi-Fi (Plus)',
            'Also runs models on phone': 'Yes',
          },
          {
            App: '[Nekoni](/power-local-llm/nekoni-review)',
            'Connects to': 'Agent on your own computer',
            'Also runs models on phone': 'No',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Away from home you need a secure path to the server. A private mesh VPN such as Tailscale is a common choice, because Ollama does not require authentication by default and should not be exposed to the public internet through a router port. Check each client\'s review and settings for HTTPS and API-key support before you connect.',
          },
          {
            type: 'tip',
            text:
              'Several clients above also say they can load models on the phone, which makes them a good single app: small model offline, big model at home. Read [Local AI behind a firewall and offline](/power-local-llm/local-ai-behind-firewall-offline-2026) for firewall and offline setups.',
          },
        ],
      },
      developers: {
        id: 'developer-paths',
        title:
          'Developer Paths: Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch and Foundation Models',
        content:
          '**Developers building iPhone AI features choose between Apple\'s own model, Apple\'s runtimes for your own model, and cross-platform engines.** The choice decides which phones, languages and store rules apply. This chapter is orientation only; read each project\'s documentation before you build.',
        items: [
          '**Foundation Models framework:** Apple\'s native Swift API for the on-device model, with images, Vision tools, Dynamic Profiles and, via a Language Model protocol, cloud providers (Apple, WWDC26 iOS guide). Needs Apple Intelligence hardware. Docs: [Foundation Models](https://developer.apple.com/documentation/FoundationModels).',
          '**Core ML:** Apple\'s framework for running converted models on the CPU, GPU and Neural Engine; the long-standing route for vision, audio and small models. [AI CutoutWerk](/power-local-llm/ai-cutoutwerk-review) ships a Core ML segmentation model. Docs: [Core ML](https://developer.apple.com/documentation/coreml).',
          '**Core AI:** a new framework Apple introduced with iOS 27 for bringing your own models on device, using unified memory and the Neural Engine, with ahead-of-time compilation. Too new for most apps in this guide; see the [WWDC26 iOS guide](https://developer.apple.com/wwdc26/guides/ios/).',
          '**MLX Swift:** Apple\'s MLX array framework for Swift, behind [Locally AI](/power-local-llm/locally-ai-review), [fullmoon](/power-local-llm/fullmoon-review) and [MLXHub](/power-local-llm/mlxhub-review). [mlx-swift](https://github.com/ml-explore/mlx-swift). For the Python side see [MLX-LM explained](/power-local-llm/mlx-lm-explained).',
          '**llama.cpp:** the C/C++ engine with Metal that runs GGUF files, behind [PocketPal AI](/power-local-llm/pocketpal-ai-review) and [Pocket AI](/power-local-llm/pocket-ai-review). [llama.cpp](https://github.com/ggml-org/llama.cpp).',
          '**MLC LLM:** compiler-based runtime with iOS deployment docs and the reference app [MLC Chat](/power-local-llm/mlc-chat-review). See [MLC LLM](/power-local-llm/mlc-llm-explained) and the [MLC iOS documentation](https://llm.mlc.ai/docs/deploy/ios.html).',
          '**ExecuTorch:** PyTorch\'s on-device runtime, used through React Native ExecuTorch in [Private Mind](/power-local-llm/private-mind-review) and supported by [Noema](/power-local-llm/noema-review). [ExecuTorch](https://github.com/pytorch/executorch).',
          '**LiteRT-LM:** Google\'s runtime behind [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review) ([LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)).',
          '**SDKs:** [RunAnywhere](/power-local-llm/runanywhere-review) (LLM, speech-to-text, text-to-speech and voice activity detection; custom licence with commercial terms), [Llamatik](/power-local-llm/llamatik-review) (Kotlin Multiplatform, MIT) and [SwiftLM](/power-local-llm/swiftlm-review) (Swift MLX server for Apple silicon Macs with the SwiftBuddy iOS companion app).',
          '**TestFlight betas:** a free way to distribute early builds to testers; builds expire, so plan for it. Apple\'s App Review rules still apply to the release build.',
        ],
      },
      privacy: {
        id: 'privacy-telemetry',
        title: 'Privacy and Telemetry Reality',
        content:
          '**"Runs on your device" and "sends nothing" are different claims, and only the second is a privacy guarantee.** Apple\'s App Store privacy labels are filled in by the developer, so they describe what the developer says the app does. An on-device model can still sit inside an app that sends crash reports, usage events, optional web searches or model downloads. All app-level privacy statements here are taken from each app\'s privacy policy, App Store label or maker page as summarised in the linked review, and were not verified by network analysis. For a deeper checklist see [Local LLM security and privacy checklist](/local-llms/local-llm-security-privacy-checklist).',
        items: [
          '**What "zero telemetry" can mean:** no analytics SDK in the app. It does not cover the model download (the host sees your request), the App Store, optional web search, remote servers you connect, or backups that include app data.',
          '**Labels in our reviews:** [Oscilla](/power-local-llm/oscilla-review) carries Apple\'s "Data Not Collected" label; [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review) shows some device diagnostics on its label; [MemoryAI](/power-local-llm/memoryai-review) and [Llamatik](/power-local-llm/llamatik-review) send usage events or analytics and crash reports without chat content, per their policies.',
          '**Optional features that break "offline":** web search in [Compass - Local AI](/power-local-llm/compass-local-ai-review) (DuckDuckGo or Brave), the Web toggle in [Private Mind](/power-local-llm/private-mind-review), MCP tools in [Secret AI](/power-local-llm/secret-ai-review), and OpenRouter mode in [Liquid Apollo](/power-local-llm/liquid-apollo-review).',
          '**Cloud by default:** [Kai 9000](/power-local-llm/kai-9000-review) sends messages to a cloud service by default, per its review, and runs locally only after you download an on-device model; [Swerve](/power-local-llm/swerve-ai-review) is documented as an online service, and [HiWaifu](/power-local-llm/hiwaifu-review) appears to be one (its listing does not say where the model runs); [AquaVoice](/power-local-llm/aquavoice-review) is cloud dictation.',
          '**Policy and version drift:** [LM Mini](/power-local-llm/lm-mini-review) has, per its privacy policy, a version dated August 2025 that describes only its LM Studio connection, and [Secret AI](/power-local-llm/secret-ai-review) has a policy last updated in May 2025, before it added tools. Check the date against the app version.',
          '**Check it yourself, in three steps:** (1) Download the model on Wi-Fi, then switch on Airplane Mode and test the app. (2) Use the phone normally for a week, then open Settings > Privacy & Security > App Privacy Report, which Apple says shows how apps use permissions and their network activity. (3) Read the privacy label and policy for analytics, and prefer an open-source app if you want to inspect the code.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'PromptQuorum\'s reviews state what each app\'s sources say and whether we tested it; where a review says "not hands-on tested", the privacy statements are the developer\'s, not ours. This guide did not run network captures on any app.',
          },
        ],
      },
      batteryThermal: {
        id: 'battery-thermal-memory',
        title: 'Battery, Heat and Memory Limits',
        content:
          '**Generating text keeps the chip busy, so expect noticeable heat and battery drain while the model runs; occasional use costs little.** PromptQuorum has not measured power draw or battery use on any iPhone, and we found no published figure we can cite.',
        items: [
          '**Heat:** sustained generation can make iOS reduce clock speeds, so tokens per second fall. Timing varies with phone, case, charging and room temperature, and we have not measured it.',
          '**Guideline 2.4.2:** Apple tells developers apps should not rapidly drain battery or generate excessive heat, so well-behaved apps cap length or pause long runs.',
          '**Memory:** a model sits in RAM while loaded. If iOS needs memory for another app, it can close the chat app and the conversation state may be lost; close other heavy apps before you load a model.',
          '**Charging while generating** adds heat; pause if the phone feels hot, and avoid direct sunlight or a hot car.',
          '**Storage:** one 3-4B model is about 2.5-3.7 GB, so three apps with three models each use roughly 10 GB. Keep one app and one or two models.',
          '**Low Power Mode** may slow generation because iOS reduces performance to save battery; turn it off for long sessions.',
        ],
      },
      partly: {
        id: 'works-partly',
        title: 'What Works Only Partly',
        content:
          '**"Partly" means the feature exists on iPhone, but with a limit you should know before you build a habit around it.**',
        items: [
          '**Hands-free voice with Siri:** Shortcuts can call an app, but Siri stays Siri; you cannot make a local model the system assistant. Apple\'s Siri AI is a separate iOS 27 beta that is not initially available in the EU.',
          '**Image generation:** possible with small diffusion models, but slow, heavy on storage and warm; [Draw Things](/power-local-llm/draw-things-review) also offers an optional cloud mode.',
          '**Photo search:** the AI step is opt-in on the phone ([Ente Photos](/power-local-llm/ente-photos-review)) or runs on a server you host ([Immich](/power-local-llm/immich-review)).',
          '**Notes and bookmarks:** the iPhone app is a client; model work happens on a server or a provider you choose.',
          '**Agents:** short, foreground tasks work; long-running or scheduled agents need a home server ([Nekoni](/power-local-llm/nekoni-review)).',
          '**Health questions:** possible with Apple\'s on-device model ([Pajdo](/power-local-llm/pajdo-review)), but not a substitute for medical advice.',
          '**Long documents:** small models have small context windows, so large PDFs need chunking or a server.',
        ],
      },
      notPossible: {
        id: 'not-possible',
        title: 'Not Possible or Not Yet on iPhone',
        content:
          '**These are the wishes that people most often bring to local AI on iPhone and that no reviewed iPhone app fulfils today.** Some are hard limits of the hardware or App Store rules; others are gaps that may close as Apple and app makers ship new frameworks such as Core AI.',
        columns: ['Wish', 'Status', 'Why', 'Instead'],
        rows: [
          {
            Wish: '30B-70B model on the phone',
            Status: 'Not possible',
            Why: 'Needs far more RAM than an iPhone has',
            Instead: 'Remote mode to a home server',
          },
          {
            Wish: 'Cloud-level reasoning and code',
            Status: 'Not yet',
            Why: 'Small models fail multi-step tasks',
            Instead: 'Cloud app for hard questions',
          },
          {
            Wish: 'Run Ollama or Docker on the phone',
            Status: 'Not possible',
            Why: 'No Ollama or Docker app for iPhone; sandbox limits',
            Instead: 'Run them on Mac or PC',
          },
          {
            Wish: 'Replace Siri with your model',
            Status: 'Not possible',
            Why: 'Siri is controlled by the system',
            Instead: 'Shortcuts that call an app',
          },
          {
            Wish: 'Always-on background agent',
            Status: 'Not possible',
            Why: 'Background services limited (2.5.4)',
            Instead: 'Agent on a home server',
          },
          {
            Wish: 'Fine-tune a model on the phone',
            Status: 'Not realistic',
            Why: 'Memory, heat, no app tooling',
            Instead: 'Train on a Mac or GPU',
          },
          {
            Wish: 'Sync chats to Mac and iPad',
            Status: 'Mostly no',
            Why: 'History is per device in most apps',
            Instead: 'Server web UI, e.g. Open WebUI',
          },
          {
            Wish: 'AnythingLLM Mobile on iPhone',
            Status: 'Not yet',
            Why: 'iOS app unreleased per review',
            Instead: 'Browser to your server',
          },
          {
            Wish: 'Apple Intelligence on iPhone 14',
            Status: 'Not possible',
            Why: 'Not on Apple\'s device list',
            Instead: 'Third-party model apps',
          },
          {
            Wish: 'Vocal music generation',
            Status: 'Not yet',
            Why: 'Murmur makes instrumental only',
            Instead: 'Desktop tools',
          },
          {
            Wish: 'Proof an app is private',
            Status: 'Not from a label',
            Why: 'Labels are developer-declared',
            Instead: 'Airplane Mode and App Privacy Report',
          },
        ],
      },
      decision: {
        id: 'decision-path',
        title: 'Decision Path: I Have This iPhone and Want This',
        content:
          '**Find your row by phone tier and goal, then open the linked chapter.** The picks are starting points from our reviews, not rankings; an app that is quiet in the maintenance chapter is mentioned only when no better fit exists.',
        columns: ['If you have', 'And want', 'Start here'],
        rows: [
          {
            'If you have': '4 GB iPhone (12, 13, SE)',
            'And want': 'General chat',
            'Start here': 'Reins or Enchanted with a home server',
          },
          {
            'If you have': '6 GB iPhone (14, 15)',
            'And want': 'Free offline chat',
            'Start here': 'PocketPal AI with a 1-2B model',
          },
          {
            'If you have': '8 GB iPhone (16, 17)',
            'And want': 'Free offline chat',
            'Start here': 'PocketPal AI or Locally AI',
          },
          {
            'If you have': '8 GB iPhone',
            'And want': 'Siri and Shortcuts',
            'Start here': 'Private LLM or Locally AI',
          },
          {
            'If you have': '12 GB iPhone (17 Pro)',
            'And want': 'Biggest model on phone',
            'Start here': 'Noema or Gallery with Gemma 4',
          },
          {
            'If you have': 'Apple Intelligence phone',
            'And want': 'No model download',
            'Start here': 'Compass or Locally AI (Apple model)',
          },
          {
            'If you have': 'Any iPhone',
            'And want': 'Meeting transcripts',
            'Start here': 'Whisper Notes or Lyonesse',
          },
          {
            'If you have': 'Any iPhone',
            'And want': 'Chat with a few PDFs',
            'Start here': 'Private Mind or MemoryAI',
          },
          {
            'If you have': 'Any iPhone',
            'And want': 'Translation',
            'Start here': 'On-Device AI Translator',
          },
          {
            'If you have': '8 GB+ iPhone',
            'And want': 'Images from text',
            'Start here': 'Draw Things',
          },
          {
            'If you have': 'Any iPhone',
            'And want': 'Photo search, own server',
            'Start here': 'Immich',
          },
          {
            'If you have': 'Any iPhone, home PC',
            'And want': '7B-70B models',
            'Start here': 'Reins, OpenClient or LM Mini',
          },
          {
            'If you have': 'Any iPhone',
            'And want': 'Smart-home voice',
            'Start here': 'Home Assistant Assist',
          },
          {
            'If you have': 'Teen on the iPhone',
            'And want': 'Safe chat',
            'Start here': 'Screen Time limits, then read the safety notes',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Choosing a model by file size instead of RAM tier.** A file that downloads can still be closed by iOS; match size to the tier table and test with the app\'s benchmark.',
          '**Expecting cloud quality.** Use a small model for drafting, summaries, translation and quick Q&A, and a cloud or home-server model for hard reasoning.',
          '**Treating "Apple Intelligence" as "offline".** Apple Intelligence can use Private Cloud Compute; check what handles the request.',
          '**Trusting a privacy label without a test.** Do the Airplane Mode and App Privacy Report checks from the privacy chapter.',
          '**Installing every app.** Each app keeps its own multi-gigabyte model files; pick one app per job.',
          '**Buying an app that has gone quiet.** Check the version history, especially for apps in the maintenance chapter.',
          '**Exposing a home server to the internet.** Use a private VPN mesh; Ollama does not require authentication by default.',
          '**Leaving roleplay apps unreviewed on a shared or child\'s phone.** Read the age rating and mature-content settings first.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Apple Intelligence devices, languages, Siri AI and Private Cloud Compute: [Apple Intelligence](https://www.apple.com/apple-intelligence/) (read 2026-11-13).',
          'App Review Guidelines 2.4.2, 2.5.1, 2.5.2, 2.5.4, 5.1.1 and 5.1.2: [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) (read 2026-11-13).',
          'App Privacy Report path and contents: [Apple Support](https://support.apple.com/en-us/102188).',
          'Engines: [MLX Swift](https://github.com/ml-explore/mlx-swift), [llama.cpp](https://github.com/ggml-org/llama.cpp), [ExecuTorch](https://github.com/pytorch/executorch), [MLC iOS documentation](https://llm.mlc.ai/docs/deploy/ios.html), [Core ML](https://developer.apple.com/documentation/coreml), [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM).',
          'iPhone RAM figures and indicative speeds are reused from [Best Local AI Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026); Apple does not publish iPhone RAM.',
          'Per-app facts (price, platform, version, maker statements) come from the linked PromptQuorum reviews and the directory tiles; last-update dates for apps flagged quiet come from the tiles.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can an iPhone run AI completely offline?',
            a:
              'Yes, according to their listings and reviews. After a one-time model download over Wi-Fi, apps such as PocketPal AI, Private LLM and Locally AI answer without a connection. Apple Intelligence also runs a model on the device, but it can use Private Cloud Compute for larger requests, so it is not guaranteed offline. Test any app in Airplane Mode.',
          },
          {
            q: 'Which iPhone do I need for local AI?',
            a:
              'An iPhone with 6 GB of RAM or more for small 1-2B models and 8 GB or more for 3-4B models. Apple does not publish RAM, so use the reported tiers in this guide. For Apple Intelligence you need an iPhone 15 Pro or newer from Apple\'s device list.',
          },
          {
            q: 'Is local AI on iPhone really private?',
            a:
              'Chat can stay on the device, but privacy depends on the app. Labels are developer-declared, and several reviewed apps send crash reports, usage events or optional web requests. Verify with Airplane Mode and Settings > Privacy & Security > App Privacy Report.',
          },
          {
            q: 'Can I run Ollama on my iPhone?',
            a:
              'No. Ollama offers macOS, Windows and Linux downloads, and there is no Ollama or Docker server for the iPhone. Run Ollama on a computer and connect from an iPhone client such as Reins, Enchanted or OpenClient.',
          },
          {
            q: 'How big a model can an iPhone run?',
            a:
              'About 3-4B parameters at 4-bit on 8 GB phones, with 7-8B low-bit models only on 12 GB phones and slowly. 6 GB phones are best with 1-2B models. For larger models use remote mode with a home server.',
          },
          {
            q: 'Does local AI drain the battery?',
            a:
              'While generating, yes: sustained generation keeps the processor busy and drains the battery much faster than idle use, and the phone can warm up. PromptQuorum has not measured the exact drain. Occasional questions cost little, and a loaded but idle model uses little power.',
          },
          {
            q: 'What is the best free local AI app for iPhone?',
            a:
              'PocketPal AI is the free open-source default in our roundup, with Locally AI and Google AI Edge Gallery as free alternatives. The right app depends on your task; use the decision path in this guide.',
          },
          {
            q: 'How is Apple Intelligence different from these apps?',
            a:
              'Apple Intelligence is Apple\'s built-in model for system features and for apps that use the Foundation Models framework; you cannot swap its model. The apps in this guide let you choose and download models, and some, like Locally AI, can also front Apple\'s model.',
          },
          {
            q: 'Can I chat with my PDFs offline on iPhone?',
            a:
              'Yes for a few files, according to their listings and reviews, with apps such as Private Mind, MemoryAI, Noema or LocalMindAI. Small models have short context windows, so long documents can be summarised incompletely. For large libraries use a home server.',
          },
          {
            q: 'Can I use my home server from outside the house?',
            a:
              'Yes, through a private VPN mesh such as Tailscale or another secure tunnel, with a client app that supports your server. Do not open Ollama to the public internet; it does not require authentication by default.',
          },
          {
            q: 'Can an iPhone generate images offline?',
            a:
              'Yes, according to their listings and reviews, with apps such as Draw Things, Genva and Haplo AI, after downloading multi-gigabyte models. Generation is slower than on a desktop GPU and warms the phone; Draw Things also offers an optional cloud mode.',
          },
          {
            q: 'Are roleplay and companion apps safe for teenagers?',
            a:
              'Not by default. Several carry 18+ ratings or adults-only modes, some are cloud services that store conversations, and on-device models have no server-side filter. Use Apple Screen Time and app-rating limits and read the safety notes in this guide.',
          },
          {
            q: 'Does local AI work on iPad?',
            a:
              'Mostly yes. Many apps in this guide list iPad support, and the same RAM rule applies. See the iPad-specific advice in [How to Run AI on a Tablet](/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: 'How does iPhone compare with Android for local AI?',
            a:
              'iPhone is simpler to start and more restricted; Android allows terminal apps and has more open-source choices but varies by phone. Compare in [Local AI on Android guide](/power-local-llm/local-ai-on-android-guide) and [Galaxy vs iPhone on-device AI](/local-llms/galaxy-vs-iphone-on-device-ai-2026).',
          },
          {
            q: 'Will apps use Apple\'s model on older iPhones?',
            a:
              'No. Apple Intelligence is limited to the devices on Apple\'s list, starting with iPhone 15 Pro. On older iPhones, use apps that bring their own models, within the RAM limits.',
          },
        ],
      },
      related: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local AI Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026): ranked picks, indicative speeds and a RAM guide for iPhone.',
          '[Local AI on Android guide](/power-local-llm/local-ai-on-android-guide): the sister platform pillar for Android.',
          '[Best Local AI Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026): ranked Android apps.',
          '[Galaxy vs iPhone on-device AI](/local-llms/galaxy-vs-iphone-on-device-ai-2026): iPhone and Galaxy on-device AI compared.',
          '[How to Run AI on a Tablet](/power-local-llm/run-ai-on-tablet-ipad-android): iPad and Android tablets.',
          '[Best Mobile LLM Models: Phi-4 Mini vs Gemma vs SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm): which small models to download.',
          '[Mobile Local LLMs](/local-llms/mobile-local-llms): mobile local LLM fundamentals.',
          '[Apple on-device AI vs local LLMs](/local-llms/apple-on-device-ai-vs-local-llms): Apple on-device AI versus open local models.',
          '[Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline): offline voice on a phone.',
          '[Chat assistants compared](/power-local-llm/local-llm-chat-assistants-compared), [Voice and audio apps compared](/power-local-llm/local-llm-voice-audio-compared), [Image and video apps compared](/power-local-llm/local-llm-images-video-compared) and [Knowledge and retrieval apps compared](/power-local-llm/local-llm-knowledge-retrieval-compared): category comparisons.',
          '[Local AI App Directory](/directory): every local AI app in the directory.',
        ],
      },
    },
  },
}
