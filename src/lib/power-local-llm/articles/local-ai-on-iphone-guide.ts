// Power Local LLM: Local AI on iPhone: what is possible, what is not, and the iPhone apps we cover (platform pillar)
// Slug: local-ai-on-iphone-guide

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
        label: 'Start Here: Three Apps to Install',
        anchor: '#start-here',
      },
      {
        label: 'Six Quick Answers Before You Install',
        anchor: '#quick-answers',
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
      startHere: {
        id: 'start-here',
        title: 'Start Here: Three Apps to Install',
        content: [
          '**Short on time? Install one of these three, download a model that fits your iPhone\'s RAM, and test it once in Airplane Mode.** The picks come from this guide\'s own chapters and reviews, not from benchmarks; the rest of the guide explains each choice.',
          '**Other good starting points:** on a 12 GB iPhone, try [Noema](/power-local-llm/noema-review) or [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review) with a Gemma 4 model; on a 4 GB iPhone, use [Reins](/power-local-llm/reins-review) or [Enchanted](/power-local-llm/enchanted-review) (flagged as quiet in the maintenance chapter) with a home server, because that tier is below the practical floor for on-device chat.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Beginners can start with PocketPal AI, advanced users with Locally AI and Apple\'s own model, and developers with the Foundation Models framework or MLX Swift; in every case the model size follows the iPhone\'s RAM.',
          },
          {
            type: 'plain-terms',
            text: 'One app, one model sized to your RAM, one Airplane Mode test.',
          },
        ],
        itemHeadings: true,
        columns: ['Your level', 'Install or use', 'First model', 'Why this pick'],
        rows: [
          {
            'Your level': 'Beginner',
            'Install or use': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'First model': '1-2B on 6 GB; 3-4B on 8 GB',
            'Why this pick': 'Free and open source, and the first-run walkthrough in this guide uses it.',
          },
          {
            'Your level': 'Advanced',
            'Install or use': '[Locally AI](/power-local-llm/locally-ai-review)',
            'First model': '3-4B on 8 GB, or Apple\'s own model with no download',
            'Why this pick': 'Suits Siri and Shortcuts use on an 8 GB iPhone, and can use Apple\'s on-device model on Apple Intelligence iPhones.',
          },
          {
            'Your level': 'Developer',
            'Install or use': 'Foundation Models framework or MLX Swift',
            'First model': 'Apple\'s on-device model, or your own model',
            'Why this pick': 'Foundation Models is Apple\'s native Swift API and needs Apple Intelligence hardware; MLX Swift runs your own model. The Developer Paths chapter covers the rest.',
          },
        ],
      },
      quickAnswers: {
        id: 'quick-answers',
        title: 'Six Quick Answers Before You Install',
        content:
          '**These are the six questions readers ask first; each answer points to the chapter that explains it.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'RAM picks the model size, 3-5 GB of free storage holds a first model, and an Airplane Mode test shows whether the app works offline.',
          },
          {
            type: 'plain-terms',
            text: 'RAM picks the model, storage holds it, and Airplane Mode proves it.',
          },
        ],
        items: [
          '**Which model should I download?** Match your RAM: 1-2B on 6 GB, 3-4B on 8 GB, more headroom on 12 GB, where 7-8B models stay slow. A 4 GB iPhone is below the practical floor. See Phone Tier, App and Model Size at a Glance.',
          '**How much storage do I need?** Free 3-5 GB first, because a model file is 1-4 GB; install one app at a time, since duplicate model files use storage fast. See Your First Local Model in 15 Minutes.',
          '**How fast will it run?** PromptQuorum has not measured speed on any iPhone for this guide, and the indicative speeds in our iPhone roundup are not new measurements. A smaller model answers faster; note the speed on your first test questions, and check the app\'s settings for a tokens-per-second figure if it shows one.',
          '**Which app is private?** None can be assumed private from its App Store label alone, because "runs on your device" and "sends nothing" are different claims. Read the privacy label and policy, run the Airplane Mode test, and later check Settings > Privacy & Security > App Privacy Report; open-source apps such as PocketPal AI can be inspected. See Privacy and Telemetry Reality.',
          '**What can I do without internet?** According to this guide\'s capability map, a recent iPhone can handle chat, camera questions, dictation and transcription, document chat and translation offline once the model is downloaded; 30B+ models, frontier-quality reasoning and always-on background agents are not possible. See Capability Map.',
          '**What do I read next?** Follow Your First Local Model in 15 Minutes, then use the Decision Path if you have a specific job in mind.',
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
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    last_full_refresh: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'Lokale KI auf dem iPhone 2026: Was möglich ist, was nicht und welche iPhone-Apps wir behandeln',
    seoTitle: 'Lokale KI auf dem iPhone 2026: Was geht, was nicht',
    intro:
      'Ein aktuelles iPhone kann ein nützliches Sprachmodell offline ausführen, sobald das Modell heruntergeladen ist, aber nur kleine Modelle: etwa 1–4 Milliarden Parameter bei 6–8 GB RAM. Dieser Leitfaden zeigt, was lokale KI auf dem iPhone leisten kann, was nur teilweise möglich ist und was gar nicht geht, erklärt Apple Intelligence, das Foundation-Models-Framework und die App-Store-Regeln und ordnet die iPhone-Apps, die wir im PromptQuorum-Verzeichnis behandeln, der Aufgabe zu, für die sie passen. Die App-Angaben stammen aus den Reviews von PromptQuorum, die auf öffentlichen Quellen beruhen, sofern ein Review nicht angibt, praktisch getestet worden zu sein; dieser Leitfaden hat keine App erneut getestet.',
    metaDescription:
      'Was lokale KI auf dem iPhone 2026 kann und was nicht: Chip- und RAM-Grenzen, Apple Intelligence, App-Store-Regeln und iPhone-Apps nach Einsatzzweck.',
    heroImage: '/images/local-ai-on-iphone-guide-hero-de.webp',
    twitterDescription:
      'Lokale KI auf dem iPhone 2026: Fähigkeitenübersicht, RAM-Stufen, Apple Intelligence, App-Store-Grenzen, eine Liste des Unmöglichen und iPhone-Apps nach Einsatzzweck.',
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM von Apple nicht veröffentlicht)',
      'iPhone 17 Pro (A19 Pro, laut Berichten 12 GB RAM)',
      'iPhone 16 Pro (A18 Pro, laut Berichten 8 GB RAM)',
      'iPhone 15 Pro (A17 Pro, laut Berichten 8 GB RAM)',
      'iPhone 14 Pro (A16, laut Berichten 6 GB RAM)',
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
      'iPhone- und iPad-Besitzer, datenschutzbewusste Nutzer, Reisende und Entwickler, die wissen möchten, was KI auf dem Gerät kann und was nicht und welche App sie für welche Aufgabe installieren sollten.',
    readTime: '45 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'lokale KI auf dem iPhone',
    targetKeywords: [
      'lokale ki auf dem iphone',
      'ki auf dem iphone offline nutzen',
      'iphone ki auf dem gerät',
      'apple intelligence foundation models framework',
      'lokale llm app iphone',
      'iphone ram llm',
      'ollama auf dem iphone',
      'offline ki iphone',
      'was kann lokale ki auf dem iphone',
    ],
    leadAnswerBlock:
      '**Ein aktuelles iPhone kann nach einem einmaligen Download ein kleines Sprachmodell (etwa 1–4 Milliarden Parameter bei 6–8 GB RAM) offline ausführen und deckt Chat, Zusammenfassungen, Übersetzung, Diktat, Fragen zu Dokumenten und kleine Bildaufgaben ab; es kann keine Modelle ab 30B ausführen, Siri nicht ersetzen und keine Hintergrund-Agenten betreiben.** Apple Intelligence bringt ab dem iPhone 15 Pro ein eingebautes Modell mit, und auf dem iPhone gibt es keinen Ollama- oder Docker-Server.',
    quickAnswerTop: {
      de: {
        question: 'Was kann lokale KI auf einem iPhone leisten?',
        answer:
          'Ein aktuelles iPhone kann Modelle mit 1–4 Milliarden Parametern offline ausführen, für Chat, Zusammenfassungen, Übersetzung, Diktat, Fragen zu Dokumenten und kleine Bildaufgaben. Es kann keine Modelle ab 30B ausführen, Siri nicht ersetzen und keine Agenten im Hintergrund laufen lassen. Apple Intelligence bringt ab dem iPhone 15 Pro ein eingebautes Modell mit.',
        bullets: [
          '6 GB RAM: Modelle mit 1–2B; 8 GB: 3–4B; 12 GB: 4B komfortabel',
          'Apple Intelligence erfordert ein iPhone 15 Pro oder neuer',
          'Kein Ollama, Docker oder Linux-Server auf dem Telefon',
          'Für Modelle mit 7B–70B einen Heimserver im Remote-Modus nutzen',
          'Datenschutz mit Flugmodus und App-Datenschutzbericht prüfen',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'Zusammenfassung',
        anchor: '#key-takeaways',
      },
      {
        label: 'Hier starten: drei Apps zum Installieren',
        anchor: '#start-here',
      },
      {
        label: 'Sechs Kurzantworten vor der Installation',
        anchor: '#quick-answers',
      },
      {
        label: 'Kurzübersicht',
        anchor: '#quick-facts',
      },
      {
        label: 'Fähigkeitenübersicht: Was lokale KI auf dem iPhone leisten kann',
        anchor: '#capability-map',
      },
      {
        label: 'Chip und RAM in der Praxis: Welches iPhone welches Modell ausführt',
        anchor: '#iphone-hardware',
      },
      {
        label: 'Neural Engine, GPU und CPU: Was das Modell tatsächlich ausführt',
        anchor: '#chips-engines',
      },
      {
        label: 'Telefonstufe, App und Modellgröße auf einen Blick',
        anchor: '#tier-app-model',
      },
      {
        label: 'Ihr erstes lokales Modell in 15 Minuten',
        anchor: '#first-run-15-minutes',
      },
      {
        label: 'Apple Intelligence und das Foundation-Models-Framework',
        anchor: '#apple-intelligence',
      },
      {
        label: 'App-Store-Regeln, die lokale KI auf dem iPhone prägen',
        anchor: '#app-store-rules',
      },
      {
        label: 'Was das iPhone besser und schlechter kann als Android',
        anchor: '#iphone-vs-android',
      },
      {
        label: 'Chat-Assistenten: Die wichtigsten On-Device-Apps',
        anchor: '#chat-assistants',
      },
      {
        label: 'Chat-Assistenten: Neuere, Nischen- und Hybrid-Apps',
        anchor: '#chat-more',
      },
      {
        label: 'Ruhende, veraltete oder nicht im App Store verfügbare Apps',
        anchor: '#chat-quiet-apps',
      },
      {
        label: 'Bildverarbeitung und Kamera: Fragen zu Fotos und Screenshots',
        anchor: '#vision-camera',
      },
      {
        label: 'Sprache: Diktat, Transkription, Vorlesen, Offline-Assistenten und Siri',
        anchor: '#voice-speech',
      },
      {
        label: 'Dokumente, PDFs und Retrieval auf dem Telefon',
        anchor: '#documents-rag',
      },
      {
        label: 'Übersetzung auf dem Gerät',
        anchor: '#translation',
      },
      {
        label: 'Bilderzeugung und Fotobearbeitung',
        anchor: '#image-generation-editing',
      },
      {
        label: 'Fotobibliotheken und Galeriesuche',
        anchor: '#photos-gallery-search',
      },
      {
        label: 'Notizen, Wissensdatenbanken und Lesezeichen',
        anchor: '#notes-knowledge',
      },
      {
        label: 'Fragen zu Gesundheit und Wohlbefinden',
        anchor: '#health-wellness',
      },
      {
        label: 'Rollenspiel- und Begleiter-Apps mit Hinweisen zur Inhaltssicherheit',
        anchor: '#roleplay-companions',
      },
      {
        label: 'Smart Home und Agenten',
        anchor: '#smart-home-agents',
      },
      {
        label: 'Remote-Modus: Das iPhone als Thin Client für den eigenen Server',
        anchor: '#remote-mode',
      },
      {
        label:
          'Entwicklerwege: Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch und Foundation Models',
        anchor: '#developer-paths',
      },
      {
        label: 'Datenschutz und Telemetrie in der Praxis',
        anchor: '#privacy-telemetry',
      },
      {
        label: 'Akku, Wärme und Speichergrenzen',
        anchor: '#battery-thermal-memory',
      },
      {
        label: 'Was nur teilweise funktioniert',
        anchor: '#works-partly',
      },
      {
        label: 'Auf dem iPhone nicht oder noch nicht möglich',
        anchor: '#not-possible',
      },
      {
        label: 'Entscheidungshilfe: Ich habe dieses iPhone und möchte Folgendes',
        anchor: '#decision-path',
      },
      {
        label: 'Häufige Fehler',
        anchor: '#common-mistakes',
      },
      {
        label: 'Quellen',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Weiterführende Literatur',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Ein aktuelles iPhone kann ein nützliches Sprachmodell ohne Verbindung ausführen, sobald das Modell heruntergeladen ist.** Die realistische Obergrenze ist ein Modell mit 1B–4B Parametern bei 6–8 GB RAM; Modelle mit 7B–8B in Low-Bit-Form passen nur auf die iPhones mit 12 GB und bleiben langsam. Zu erwarten sind gute Entwürfe, Zusammenfassungen, Übersetzungen und Antworten auf Fragen, aber schwächeres Schlussfolgern, schwächerer Code und weniger Weltwissen als bei Cloud-Modellen der ChatGPT-Klasse.',
          '**Der RAM, nicht der Chipname, bestimmt die Modellgröße.** Apple veröffentlicht den iPhone-RAM nicht; die Angaben in diesem Leitfaden sind weithin berichtete Spezifikationen. Ein iPhone mit 4 GB liegt unter der praktischen Untergrenze, 6 GB bedeuten Modelle mit 1–2B, 8 GB bedeuten 3–4B, 12 GB bringen zusätzlichen Spielraum.',
          '**Apple Intelligence und das Foundation-Models-Framework sind ein zweiter, getrennter Weg.** Apples eigenes On-Device-Modell ist bereits auf dem Telefon (ab iPhone 15 Pro), braucht keinen Download und kann von Drittanbieter-Apps genutzt werden. Es ist allein keine allgemeine Chat-App, und es gelten Sprach- und Regionsgrenzen.',
          '**Der App Store setzt harte Grenzen.** Kein Docker und kein Ollama auf dem Telefon; Apps dürfen keinen Code herunterladen, der ihre Funktionen verändert (Apple-Richtlinie 2.5.2), daher wird jede Engine in der App mitgeliefert und nur Modelldateien werden heruntergeladen. Deshalb bedeutet lokale KI auf dem iPhone, eine App zu installieren, nicht, einen Stack aufzubauen.',
          '**Für das meiste, was iPhone-Besitzer wollen, gibt es in unserem Verzeichnis eine geprüfte App:** Chat, Fragen zur Kamera, Diktat und Transkription, Dokumenten-Chat, Übersetzung, Bilderzeugung, Fotosuche, Notizen, Gesundheitsfragen, Rollenspiel, Smart-Home-Steuerung und Fernzugriff auf einen Heimserver. Dieser Leitfaden verlinkt die meisten iPhone-Apps unseres Verzeichnisses mit der Fähigkeit, zu der sie passen.',
          '**Einiges ist nicht oder nur teilweise möglich:** Modelle ab 30B, Schlussfolgern in Frontier-Qualität, dauerhaft aktive Hintergrund-Agenten, Siri durch ein eigenes Modell zu ersetzen, Fine-Tuning auf dem Telefon und eine Datenschutzgarantie allein durch ein App-Store-Label.',
          '**„Zero Telemetry“ muss man prüfen, nicht glauben.** Mehrere Apps, die angeben, den Chat auf dem Gerät zu halten, senden dennoch Absturzberichte, Nutzungsereignisse oder optionale Webanfragen; das Datenschutzkapitel zeigt, wie Sie das mit dem Flugmodus und dem App-Datenschutzbericht überprüfen.',
          '**Fangen Sie klein an:** Installieren Sie eine App, laden Sie ein 1–2 GB großes Modell per WLAN herunter, schalten Sie den Flugmodus ein und stellen Sie eine Frage. Wenn das klappt, haben Sie den gesamten Offline-Weg in weniger als 15 Minuten überprüft.',
        ],
      },
      startHere: {
        id: 'start-here',
        title: 'Hier starten: drei Apps zum Installieren',
        content: [
          '**Wenig Zeit? Installieren Sie eine dieser drei Apps, laden Sie ein Modell herunter, das zum RAM Ihres iPhones passt, und testen Sie es einmal im Flugmodus.** Die Empfehlungen stammen aus den Kapiteln und Reviews dieses Leitfadens, nicht aus Benchmarks; der Rest des Leitfadens erklärt jede Wahl.',
          '**Weitere gute Einstiegspunkte:** Auf einem iPhone mit 12 GB probieren Sie [Noema](/de/power-local-llm/noema-review) oder [Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review) mit einem Gemma-4-Modell; auf einem iPhone mit 4 GB nutzen Sie [Reins](/de/power-local-llm/reins-review) oder [Enchanted](/de/power-local-llm/enchanted-review) (im Wartungskapitel als ruhig markiert) mit einem Heimserver, denn diese Stufe liegt unter der praktischen Untergrenze für Chat auf dem Gerät.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Einsteiger können mit PocketPal AI beginnen, Fortgeschrittene mit Locally AI und Apples eigenem Modell, Entwickler mit dem Foundation-Models-Framework oder MLX Swift; in jedem Fall richtet sich die Modellgröße nach dem RAM des iPhones.',
          },
          {
            type: 'plain-terms',
            text: 'Eine App, ein zum RAM passendes Modell, ein Test im Flugmodus.',
          },
        ],
        itemHeadings: true,
        columns: ['Ihr Niveau', 'Installieren oder nutzen', 'Erstes Modell', 'Warum diese Wahl'],
        rows: [
          {
            'Ihr Niveau': 'Einsteiger',
            'Installieren oder nutzen': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Erstes Modell': '1–2B bei 6 GB; 3–4B bei 8 GB',
            'Warum diese Wahl': 'Kostenlos und Open Source; die Anleitung zum ersten Start in diesem Leitfaden nutzt diese App.',
          },
          {
            'Ihr Niveau': 'Fortgeschritten',
            'Installieren oder nutzen': '[Locally AI](/de/power-local-llm/locally-ai-review)',
            'Erstes Modell': '3–4B bei 8 GB oder Apples eigenes Modell ohne Download',
            'Warum diese Wahl': 'Passt zu Siri und Kurzbefehlen auf einem iPhone mit 8 GB und kann auf iPhones mit Apple Intelligence Apples On-Device-Modell nutzen.',
          },
          {
            'Ihr Niveau': 'Entwickler',
            'Installieren oder nutzen': 'Foundation-Models-Framework oder MLX Swift',
            'Erstes Modell': 'Apples On-Device-Modell oder ein eigenes Modell',
            'Warum diese Wahl': 'Foundation Models ist Apples native Swift-API und setzt Apple-Intelligence-Hardware voraus; MLX Swift führt ein eigenes Modell aus. Das Kapitel „Entwicklerwege“ behandelt den Rest.',
          },
        ],
      },
      quickAnswers: {
        id: 'quick-answers',
        title: 'Sechs Kurzantworten vor der Installation',
        content:
          '**Das sind die sechs Fragen, die Leser zuerst stellen; jede Antwort verweist auf das Kapitel, das sie erklärt.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Der RAM bestimmt die Modellgröße, 3–5 GB freier Speicher fassen ein erstes Modell, und ein Flugmodus-Test zeigt, ob die App offline funktioniert.',
          },
          {
            type: 'plain-terms',
            text: 'Der RAM wählt das Modell, der Speicher hält es, der Flugmodus beweist es.',
          },
        ],
        items: [
          '**Welches Modell soll ich herunterladen?** Richten Sie sich nach dem RAM: 1–2B bei 6 GB, 3–4B bei 8 GB, mehr Spielraum bei 12 GB, wo Modelle mit 7–8B langsam bleiben. Ein iPhone mit 4 GB liegt unter der praktischen Untergrenze. Siehe „Telefonstufe, App und Modellgröße auf einen Blick“.',
          '**Wie viel Speicherplatz brauche ich?** Schaffen Sie zuerst 3–5 GB frei, denn eine Modelldatei ist 1–4 GB groß; installieren Sie eine App nach der anderen, da doppelte Modelldateien schnell Speicher belegen. Siehe „Ihr erstes lokales Modell in 15 Minuten“.',
          '**Wie schnell läuft es?** PromptQuorum hat für diesen Leitfaden auf keinem iPhone die Geschwindigkeit gemessen, und die Richtwerte in unserer iPhone-Übersicht sind keine neuen Messungen. Ein kleineres Modell antwortet schneller; notieren Sie die Geschwindigkeit bei Ihren ersten Testfragen und prüfen Sie in den App-Einstellungen, ob ein Wert in Tokens pro Sekunde angezeigt wird.',
          '**Welche App ist privat?** Keine kann allein aufgrund ihres App-Store-Labels als privat angenommen werden, denn „läuft auf Ihrem Gerät“ und „sendet nichts“ sind unterschiedliche Aussagen. Lesen Sie das Datenschutzlabel und die Richtlinie, machen Sie den Flugmodus-Test und prüfen Sie später unter Einstellungen > Datenschutz & Sicherheit > App-Datenschutzbericht; Open-Source-Apps wie PocketPal AI lassen sich einsehen. Siehe „Datenschutz und Telemetrie in der Praxis“.',
          '**Was geht ohne Internet?** Laut der Fähigkeitenübersicht dieses Leitfadens kann ein aktuelles iPhone Chat, Fragen zur Kamera, Diktat und Transkription, Dokumenten-Chat und Übersetzung offline bewältigen, sobald das Modell heruntergeladen ist; Modelle ab 30B, Schlussfolgern in Frontier-Qualität und dauerhaft aktive Hintergrund-Agenten sind nicht möglich. Siehe „Fähigkeitenübersicht“.',
          '**Was lese ich als Nächstes?** Folgen Sie „Ihr erstes lokales Modell in 15 Minuten“ und nutzen Sie dann die „Entscheidungshilfe“, wenn Sie eine konkrete Aufgabe im Sinn haben.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzübersicht',
        items: [
          '**Umfang:** zuerst das iPhone, das iPad, wo dieselben Apps laufen. Android behandelt der Schwesterleitfaden [Leitfaden Lokale KI auf Android](/de/power-local-llm/local-ai-on-android-guide).',
          '**iPhones mit Apple Intelligence (laut Apples Liste):** iPhone 15 Pro und 15 Pro Max, die iPhone-16-Familie einschließlich 16e, die iPhone-17-Familie einschließlich 17e und Air sowie das iPhone 18 Pro, 18 Pro Max und iPhone Duo von 2026. Das iPhone 15 und ältere Nicht-Pro-Modelle stehen nicht auf der Liste.',
          '**In diesem Leitfaden verwendete RAM-Stufen (berichtet, nicht von Apple veröffentlicht):** 4 GB (iPhone 12, 13, SE), 6 GB (iPhone 13 Pro, 14, 14 Pro, 15), 8 GB (iPhone 15 Pro, 16-Serie, 16e, 17), 12 GB (iPhone 17 Pro und Pro Max).',
          '**Modellgrößen, die passen:** etwa 1,1 GB für ein 1,7B-Modell bei 4 Bit, etwa 2,5–3,7 GB für Modelle mit 3–4B; die Richtwerte zur Geschwindigkeit stammen aus unserer iPhone-Bestenliste und sind keine neuen Messungen.',
          '**Engines in iPhone-Apps:** llama.cpp (GGUF), Apple MLX, MLC LLM, Google LiteRT-LM, ExecuTorch, Core ML, Apple Foundation Models; einige Apps kombinieren mehrere.',
          '**In diesem Leitfaden verlinkte Apps:** die iOS- und iPadOS-Apps in unserem Verzeichnis, für die ein PromptQuorum-Review vorliegt, sowie iPhone-Begleit-Apps für selbst gehostete Werkzeuge.',
          '**Was PromptQuorum nicht getan hat:** Dieser Leitfaden hat die Apps nicht erneut getestet. Die Angaben stammen aus unseren Reviews, den Store-Einträgen, den Seiten der Hersteller und Apples Dokumentation, und jedes Review nennt, was getestet wurde.',
        ],
      },
      whatIsPossible: {
        id: 'capability-map',
        title: 'Fähigkeitenübersicht: Was lokale KI auf dem iPhone leisten kann',
        content:
          '**Lokale KI auf dem iPhone deckt die meisten alltäglichen Sprachaufgaben und mehrere Medienaufgaben ab, aber nicht alles, was Cloud-Assistenten können.** Die Tabelle ordnet jede Fähigkeit in „Funktioniert“, „Teilweise“ oder „Noch nicht“ ein, und das folgende Kapitel nennt die Apps. „Funktioniert“ bedeutet, dass eine geprüfte iPhone-App die Aufgabe mit dem Modell auf dem Telefon erledigt; „Teilweise“ bedeutet, dass es mit Einschränkungen bei Größe, Geschwindigkeit, Genauigkeit oder Hardware funktioniert; „Noch nicht“ bedeutet, dass keine geprüfte iPhone-App die Aufgabe auf dem Gerät erledigt.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Lokale KI auf dem iPhone kann Chat, Entwürfe, Zusammenfassungen, Übersetzung, Diktat, Fragen zu Dokumenten und kleine Bildaufgaben auf dem Gerät bewältigen, Fotosuche, Bilderzeugung und Agenten nur teilweise, und sie kann noch keine großen Modelle ausführen oder Siri ersetzen.',
          },
          {
            type: 'plain-terms',
            text:
              'Stellen Sie sich ein iPhone als Assistenten für die Hosentasche mit einem kleinen, privaten Gehirn vor. Es beantwortet einfache Fragen, formuliert Texte um, transkribiert Sprache und beschreibt Fotos, ohne etwas wegzuschicken, aber es kennt Fakten nicht, die ein größeres Cloud-Modell kennt, wird bei langen Antworten langsamer und warm. Bei schwierigen Fragen koppeln viele Menschen das Telefon mit einem Computer zu Hause oder einer Cloud-App.',
          },
        ],
        columns: ['Fähigkeit', 'Auf dem iPhone', 'Typische Einrichtung', 'Kapitel'],
        rows: [
          {
            'Fähigkeit': 'Chat, Entwürfe, Zusammenfassungen',
            'Auf dem iPhone': 'Funktioniert',
            'Typische Einrichtung': 'Modell mit 1–4B, GGUF oder MLX',
            'Kapitel': 'Chat-Assistenten',
          },
          {
            'Fähigkeit': 'Fragen zu Foto oder Screenshot',
            'Auf dem iPhone': 'Funktioniert',
            'Typische Einrichtung': 'Kleines Vision-Modell oder OCR',
            'Kapitel': 'Bildverarbeitung und Kamera',
          },
          {
            'Fähigkeit': 'Diktat und Transkription',
            'Auf dem iPhone': 'Funktioniert',
            'Typische Einrichtung': 'Whisper oder Parakeet',
            'Kapitel': 'Sprache',
          },
          {
            'Fähigkeit': 'Vorlesen (Text-to-Speech)',
            'Auf dem iPhone': 'Funktioniert',
            'Typische Einrichtung': 'Systemstimmen oder On-Device-TTS',
            'Kapitel': 'Sprache',
          },
          {
            'Fähigkeit': 'Freihändiger Assistent mit Siri',
            'Auf dem iPhone': 'Teilweise',
            'Typische Einrichtung': 'Kurzbefehle, kein Siri-Ersatz',
            'Kapitel': 'Sprache',
          },
          {
            'Fähigkeit': 'Chat mit eigenen PDFs und Notizen',
            'Auf dem iPhone': 'Funktioniert',
            'Typische Einrichtung': 'Kleines Modell plus lokaler Index',
            'Kapitel': 'Dokumente und RAG',
          },
          {
            'Fähigkeit': 'Übersetzung',
            'Auf dem iPhone': 'Funktioniert',
            'Typische Einrichtung': 'Auf Übersetzung getrimmtes Kleinmodell',
            'Kapitel': 'Übersetzung',
          },
          {
            'Fähigkeit': 'Bilderzeugung',
            'Auf dem iPhone': 'Teilweise',
            'Typische Einrichtung': 'Kleine Diffusionsmodelle, langsam',
            'Kapitel': 'Bilderzeugung',
          },
          {
            'Fähigkeit': 'Fotobearbeitung (Freistellen, Retusche)',
            'Auf dem iPhone': 'Funktioniert',
            'Typische Einrichtung': 'Core-ML-Segmentierungsmodelle',
            'Kapitel': 'Bilderzeugung',
          },
          {
            'Fähigkeit': 'KI-Suche in der Fotobibliothek',
            'Auf dem iPhone': 'Teilweise',
            'Typische Einrichtung': 'Index auf dem Gerät oder eigener Server',
            'Kapitel': 'Fotos und Galerie',
          },
          {
            'Fähigkeit': 'Notizen und Lesezeichen mit KI',
            'Auf dem iPhone': 'Teilweise',
            'Typische Einrichtung': 'KI läuft oft auf einem Server',
            'Kapitel': 'Notizen und Wissen',
          },
          {
            'Fähigkeit': 'Fragen zu Gesundheitsdaten',
            'Auf dem iPhone': 'Teilweise',
            'Typische Einrichtung': 'Apple Intelligence, nicht medizinisch',
            'Kapitel': 'Gesundheit und Wohlbefinden',
          },
          {
            'Fähigkeit': 'Rollenspiel und Begleiter',
            'Auf dem iPhone': 'Funktioniert',
            'Typische Einrichtung': 'Kleines Chat-Modell, Cloud-Varianten gibt es',
            'Kapitel': 'Rollenspiel und Begleiter',
          },
          {
            'Fähigkeit': 'Smart-Home-Steuerung',
            'Auf dem iPhone': 'Teilweise',
            'Typische Einrichtung': 'Heimserver erledigt die Arbeit',
            'Kapitel': 'Smart Home und Agenten',
          },
          {
            'Fähigkeit': 'Dauerhaft aktive autonome Agenten',
            'Auf dem iPhone': 'Noch nicht',
            'Typische Einrichtung': 'iOS begrenzt Hintergrundarbeit',
            'Kapitel': 'Nicht möglich',
          },
          {
            'Fähigkeit': 'Modelle ab 30B ausführen',
            'Auf dem iPhone': 'Noch nicht',
            'Typische Einrichtung': 'Heimserver aus der Ferne nutzen',
            'Kapitel': 'Remote-Modus',
          },
          {
            'Fähigkeit': 'Modell auf dem Telefon feinabstimmen',
            'Auf dem iPhone': 'Noch nicht',
            'Typische Einrichtung': 'Auf Mac oder GPU trainieren',
            'Kapitel': 'Entwicklerwege',
          },
        ],
      },
      hardware: {
        id: 'iphone-hardware',
        title: 'Chip und RAM in der Praxis: Welches iPhone welches Modell ausführt',
        content:
          '**Der RAM bestimmt das größte Modell, das ein iPhone halten kann; der Chip bestimmt, wie schnell es antwortet.** Ein Sprachmodell muss beim Erzeugen im Speicher liegen, daher braucht ein 3B-Modell mit 4 Bit (etwa 2–2,7 GB auf dem Datenträger) ungefähr so viel freien RAM zusätzlich zu dem, was iOS und andere Apps belegen. iOS beendet eine App, die zu viel anfordert, und Apple veröffentlicht den iPhone-RAM nicht; die folgenden Zahlen sind daher weithin berichtete Spezifikationen (auch in unserem [Beste lokale LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) verwendet) und keine Aussagen von Apple.',
        columns: ['iPhone-Stufe', 'RAM (berichtet)', 'Realistische Modellgröße', 'Fazit'],
        rows: [
          {
            'iPhone-Stufe': 'iPhone 12, 13, SE',
            'RAM (berichtet)': '4 GB',
            'Realistische Modellgröße': 'Unter 1B, wenn überhaupt',
            'Fazit': 'Stattdessen den Remote-Modus nutzen',
          },
          {
            'iPhone-Stufe': 'iPhone 13 Pro, 14, 14 Pro, 15',
            'RAM (berichtet)': '6 GB',
            'Realistische Modellgröße': '1–2B (Datei von etwa 1,1 GB)',
            'Fazit': 'Einfacher Chat und Entwürfe',
          },
          {
            'iPhone-Stufe': 'iPhone 15 Pro, 16, 16e, 17',
            'RAM (berichtet)': '8 GB',
            'Realistische Modellgröße': '3–4B (etwa 2,5–3,7 GB)',
            'Fazit': 'Typische 3–4B-Stufe',
          },
          {
            'iPhone-Stufe': 'iPhone 17 Pro, 17 Pro Max',
            'RAM (berichtet)': '12 GB',
            'Realistische Modellgröße': '4B komfortabel, 7–8B Low-Bit',
            'Fazit': 'Höchste RAM-Stufe',
          },
          {
            'iPhone-Stufe': 'iPhone 18 Pro, Pro Max, Duo',
            'RAM (berichtet)': 'Nicht veröffentlicht',
            'Realistische Modellgröße': 'Wie 12 GB behandeln, bis bestätigt',
            'Fazit': 'Keine PromptQuorum-Zahlen',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Ein Modell, das nominell passt, kann von iOS trotzdem beendet werden, wenn Sie die App wechseln. Bleiben Sie auf einem iPhone mit 6 GB bei Modellen mit 1–2B, auch wenn sich eine Datei mit 3–4B fehlerfrei herunterladen lässt; Apples eigene iPhone-Seiten nennen keinen RAM-Wert, die Stufentabelle ist also ein Anhaltspunkt, keine Garantie.',
          },
        ],
      },
      hardwareChips: {
        id: 'chips-engines',
        title: 'Neural Engine, GPU und CPU: Was das Modell tatsächlich ausführt',
        content:
          '**Ein iPhone hat drei Orte, an denen ein Modell laufen kann, und welcher davon genutzt wird, hängt von der Engine der App ab, nicht vom Telefon.** Die CPU ist flexibel, aber langsam, die GPU (angesprochen über Apples Grafik-API Metal) übernimmt die umfangreiche Matrizenrechnung, auf die sich die meisten Chat-Apps stützen, und die Neural Engine ist ein Beschleuniger mit fester Funktion, den Apples Core ML und das neuere Core-AI-Framework ansteuern können. Apple beschreibt Core AI als für Apple Silicon gebaut, mit Unified Memory und der Neural Engine; es ist neu in der iOS-27-Generation, daher nutzen die meisten Apps in diesem Leitfaden es noch nicht.',
        items: [
          '**llama.cpp-Apps (GGUF-Dateien):** [PocketPal AI](/de/power-local-llm/pocketpal-ai-review), [Pocket AI](/de/power-local-llm/pocket-ai-review) und [LLM Farm](/de/power-local-llm/llm-farm-review) nutzen Metal auf der GPU. Unterstützt jede GGUF-Datei, daher können Modelle von Hugging Face funktionieren.',
          '**Apple-MLX-Apps:** [Locally AI](/de/power-local-llm/locally-ai-review), [fullmoon](/de/power-local-llm/fullmoon-review) und [MLXHub](/de/power-local-llm/mlxhub-review) nutzen Apples MLX-Array-Framework, das für Unified Memory auf Apple Silicon gebaut ist.',
          '**Apps mit mehreren Formaten:** [Noema](/de/power-local-llm/noema-review) unterstützt GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models in einer App, weshalb die Hardwarenutzung je nach Modellformat variiert (Herstellerangabe im Review).',
          '**Apps mit kompilierten Modellen:** [MLC Chat](/de/power-local-llm/mlc-chat-review) führt Modelle aus, die mit der MLC-LLM-Toolchain kompiliert wurden; [Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review) nutzt Googles LiteRT-LM-Runtime.',
          '**Apples eigenes Modell:** Apple Intelligence führt Apples Modell über Systemframeworks aus. Apps wie [Compass - Local AI](/de/power-local-llm/compass-local-ai-review) und [Pajdo](/de/power-local-llm/pajdo-review) rufen es auf, statt ein eigenes Modell mitzuliefern.',
          '**Praktische Folge:** Zwei Apps, die dieselbe Modellgröße auf demselben iPhone ausführen, können sich in Geschwindigkeit, Speicherverbrauch und Wärmeentwicklung unterscheiden. Führen Sie denselben Prompt in zwei Apps aus, bevor Sie ein bereits heruntergeladenes Modell löschen.',
        ],
      },
      tierTable: {
        id: 'tier-app-model',
        title: 'Telefonstufe, App und Modellgröße auf einen Blick',
        content:
          '**Wählen Sie zuerst nach RAM-Stufe, dann nach Bedarf.** Die Tabelle gibt einen Ausgangspunkt aus unseren Reviews und unserer Bestenliste; sie ist kein Benchmark. Modelle ändern sich schnell, schauen Sie daher für aktuelle Empfehlungen kleiner Modelle in [Beste mobile LLM-Modelle: Phi-4 Mini vs. Gemma vs. SmolLM](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm).',
        columns: ['Telefonstufe', 'Einstieg mit', 'Modellgröße', 'Hinweis'],
        rows: [
          {
            'Telefonstufe': 'iPhone mit 4 GB',
            'Einstieg mit': 'Remote-Client für einen Heimserver',
            'Modellgröße': 'Keines auf dem Telefon',
            'Hinweis': 'Reins, Enchanted, OpenClient',
          },
          {
            'Telefonstufe': 'iPhone mit 6 GB',
            'Einstieg mit': 'PocketPal AI oder Locally AI',
            'Modellgröße': '1–2B (etwa 1,1 GB)',
            'Hinweis': 'Kleinste Modelle',
          },
          {
            'Telefonstufe': 'iPhone mit 8 GB',
            'Einstieg mit': 'PocketPal AI, Private LLM, Gallery',
            'Modellgröße': '3–4B (2,5–3,7 GB)',
            'Hinweis': 'Mittlere Preisklasse',
          },
          {
            'Telefonstufe': 'iPhone mit 12 GB',
            'Einstieg mit': 'Noema oder Locally AI',
            'Modellgröße': '4B, oder 7–8B langsam',
            'Hinweis': 'Längerer Kontext passt',
          },
          {
            'Telefonstufe': 'Telefon mit Apple Intelligence',
            'Einstieg mit': 'Compass oder Locally AI',
            'Modellgröße': 'Apple-Modell, kein Download',
            'Hinweis': 'Sprachgrenzen gelten',
          },
          {
            'Telefonstufe': 'Jedes Telefon, Diktat',
            'Einstieg mit': 'Whisper Notes oder Aiko',
            'Modellgröße': 'Whisper-Klasse, klein',
            'Hinweis': 'Einmalig bezahlt',
          },
          {
            'Telefonstufe': 'Jedes Telefon, Dokumente',
            'Einstieg mit': 'Private Mind oder MemoryAI',
            'Modellgröße': 'Kleines Chat-Modell plus Index',
            'Hinweis': 'Dateilimits prüfen',
          },
        ],
      },
      firstRun: {
        id: 'first-run-15-minutes',
        title: 'Ihr erstes lokales Modell in 15 Minuten',
        content:
          '**Sie können den gesamten Offline-Weg auf einem iPhone in etwa 15 Minuten überprüfen: eine App installieren, ein kleines Modell per WLAN herunterladen, den Flugmodus einschalten und eine Frage stellen.** Die Schritte nutzen [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) als Beispiel, weil es kostenlos und Open Source ist, aber jede Chat-App aus den nächsten Kapiteln funktioniert auf dieselbe Weise. Die Zeitangaben hängen von Ihrer Verbindung und Ihrem Telefon ab.',
        numberedItems: [
          {
            title: 'Minute 0–2: iPhone-Stufe prüfen',
            whyItMatters:
              'Suchen Sie Ihr Modell in der RAM-Tabelle oben. 6 GB bedeuten ein Modell mit 1–2B, 8 GB bedeuten 3–4B, 12 GB geben Spielraum. Schaffen Sie zuerst 3–5 GB freien Speicherplatz, denn eine Modelldatei ist 1–4 GB groß.',
          },
          {
            title: 'Minute 2–4: Eine App installieren',
            whyItMatters:
              'Installieren Sie eine einzelne App aus dem App Store, zum Beispiel PocketPal AI, Locally AI oder Google AI Edge Gallery. Installieren Sie nicht drei Apps mit je drei Modellen; doppelte Modelldateien belegen schnell Speicherplatz.',
          },
          {
            title: 'Minute 4–9: Ein Modell per WLAN herunterladen',
            whyItMatters:
              'Wählen Sie die Größe für Ihre Stufe, zum Beispiel ein Modell der Klasse Qwen3 1,7B bei 6 GB oder Phi-4 Mini oder Gemma 4 E2B bei 8 GB (siehe Modelle nach Stufe). Der Download ist der einzige Schritt, der Internet braucht. Lassen Sie die App geöffnet und den Bildschirm an, bis er abgeschlossen ist.',
          },
          {
            title: 'Minute 9–10: Flugmodus einschalten',
            whyItMatters:
              'Schalten Sie den Flugmodus ein und lassen Sie das WLAN aus. Das belegt, dass das Modell auf dem Telefon läuft, und zeigt, ob die App versucht, das Internet zu erreichen.',
          },
          {
            title: 'Minute 10–13: Drei Testfragen stellen',
            whyItMatters:
              'Bitten Sie um eine Zusammenfassung eines eingefügten Absatzes in drei Stichpunkten, um das Umschreiben einer E-Mail in einem anderen Ton und stellen Sie eine Sachfrage, deren Antwort Sie kennen. Beachten Sie Geschwindigkeit und ob das Telefon warm wird.',
          },
          {
            title: 'Minute 13–15: Einstellungen prüfen und aufräumen',
            whyItMatters:
              'Öffnen Sie den Benchmark oder die Einstellungen der App, falls vorhanden, notieren Sie die Tokens pro Sekunde und prüfen Sie später unter Einstellungen > Datenschutz & Sicherheit > App-Datenschutzbericht, welche Domains die App kontaktiert hat. Löschen Sie Modelle, die Sie nicht nutzen werden.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Wenn die App bei der ersten Antwort abstürzt oder neu startet, ist das Modell zu groß für das Telefon. Löschen Sie es und wählen Sie die nächstkleinere Größe, statt andere Einstellungen zu verringern.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence und das Foundation-Models-Framework',
        content:
          '**Apple Intelligence gibt jedem unterstützten iPhone ein eingebautes Sprachmodell, das keinen Download braucht, und das Foundation-Models-Framework erlaubt Drittanbieter-Apps, es zu nutzen.** Apples Entwicklerseite beschreibt das Framework als native Swift-API mit direktem Zugriff auf dasselbe On-Device-Modell, das Apple Intelligence antreibt. Es funktioniert nur auf Geräten und in Sprachen, die Apple Intelligence unterstützt.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Apple Intelligence führt ab dem iPhone 15 Pro Apples eigenes On-Device-Modell aus, und das Foundation-Models-Framework erlaubt Drittanbieter-Apps wie Locally AI, Compass und Pajdo, es zu nutzen, ohne ein eigenes Modell mitzuliefern.',
          },
          {
            type: 'plain-terms',
            text:
              'Apple hat bereits ein kleines Sprachmodell in das iPhone eingebaut. Sie laden es nicht herunter, können es aber auch nicht gegen ein anderes austauschen. Apps können es sich ausleihen, um Fragen auf dem Gerät zu beantworten, weshalb mehrere neue Apps ein aktuelles iPhone und ein aktuelles iOS brauchen statt eines großen Modell-Downloads.',
          },
        ],
        items: [
          '**Geräteliste (Apples Apple-Intelligence-Seite):** iPhone 15 Pro und Pro Max (A17 Pro), iPhone 16, 16 Plus, 16e und die 16-Pro-Familie (A18 und A18 Pro), iPhone 17, 17e, 17 Pro, 17 Pro Max und Air (A19 und A19 Pro) sowie iPhone Duo, 18 Pro und 18 Pro Max (A20 Pro).',
          '**Sprachen:** Apple Intelligence setzt voraus, dass Siri und die Gerätesprache auf eine unterstützte Sprache eingestellt sind. Apples Liste umfasst Chinesisch (vereinfacht und traditionell), Dänisch, Niederländisch, Englisch, Französisch, Deutsch, Italienisch, Japanisch, Koreanisch, Norwegisch, Portugiesisch, Spanisch, Schwedisch, Türkisch und Vietnamesisch. Apple ergänzt, dass einige Funktionen nicht in allen Regionen oder Sprachen verfügbar sein könnten.',
          '**Siri AI (iOS-27-Beta):** Apple nennt zum Start Englisch, Französisch, Japanisch, Koreanisch, Portugiesisch und Spanisch, gibt an, dass es unter iOS zunächst nicht in der EU verfügbar sein wird, und gibt an, dass einige serverseitige Funktionen tägliche Nutzungslimits haben. Es ist von den On-Device-Chat-Apps in diesem Leitfaden getrennt.',
          '**Was das Framework bietet (Apple, iOS-27-Leitfaden):** Zugriff auf Apple Foundation Models und, über ein Language-Model-Protokoll, auf Cloud-Modelle wie Claude und Gemini oder jeden Anbieter, der dem Protokoll entspricht; multimodale Prompts, die Bilder mit Text übergeben; Vision-Werkzeuge wie OCR und Barcode-Erkennung, die ein Modell auf dem Gerät aufrufen kann; und Dynamic Profiles zum Austausch von Modellen, Werkzeugen und Anweisungen innerhalb einer Sitzung.',
          '**iOS-26-Basis (in dieser Aktualisierung nicht erneut geprüft):** Das Framework erschien erstmals mit iOS 26. Schlagen Sie in Apples aktueller Dokumentation das Kontextlimit und die unterstützten Funktionen nach, bevor Sie darauf aufbauen.',
          '**Private Cloud Compute:** Apple Intelligence kann größere Anfragen an Apples Server weitergeben. Apple gibt an, dass die Daten nie gespeichert und nur für Ihre Anfrage verwendet werden. Das ist keine Verarbeitung auf dem Gerät, behandeln Sie „Apple Intelligence“ und „offline“ daher als unterschiedliche Aussagen.',
          '**Apps in diesem Leitfaden, die Apples Modell nutzen:** [Locally AI](/de/power-local-llm/locally-ai-review) (Chat-Oberfläche), [Compass - Local AI](/de/power-local-llm/compass-local-ai-review) (Chat und OCR für Screenshots), [Pajdo](/de/power-local-llm/pajdo-review) (Fragen zu Apple Health), [LocalMindAI](/de/power-local-llm/localmindai-review) (Apples Modell oder heruntergeladene Modelle), [Noema](/de/power-local-llm/noema-review) und [Reins](/de/power-local-llm/reins-review) (Apple Foundation Models als ein Backend), [Hillnote](/de/power-local-llm/hillnote-review) (Notizen) und [AI on Device](/de/power-local-llm/ai-on-device-review), das stattdessen ein eigenes 3B-Modell mitliefert, aber ein mit Apple Intelligence kompatibles Gerät voraussetzt.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Wenn Sie nur Umschreiben, Zusammenfassungen von Mitteilungen und Schreibwerkzeuge in Mail, Nachrichten und Notizen möchten, brauchen Sie keine Chat-App. Wenn Sie ein Chat-Fenster, Modellauswahl oder Fragen zu Dokumenten möchten, installieren Sie eine der Apps in diesem Leitfaden; zum Abwägen zwischen Apples Modell und offenen Modellen siehe [Apple On-Device-KI vs. lokale LLMs](/de/local-llms/apple-on-device-ai-vs-local-llms).',
          },
        ],
      },
      appStoreRules: {
        id: 'app-store-rules',
        title: 'App-Store-Regeln, die lokale KI auf dem iPhone prägen',
        content:
          '**Der App Store erklärt die meisten Unterschiede zwischen lokaler KI auf dem iPhone und auf dem Desktop.** Apples App-Review-Richtlinien gelten für jede App, und vier davon sind hier wichtig: eigenständige Apps, Energieverbrauch, Hintergrunddienste und Datenweitergabe. Dieses Kapitel gibt den Regeltext wieder und unsere Lesart; es ist keine Rechtsberatung, und Apple kann die Regeln ändern.',
        items: [
          '**Kein nachgeladener Code, der die App verändert (Richtlinie 2.5.2).** Apples Text (englisches Original, hier übersetzt): Apps „dürfen keinen Code herunterladen, installieren oder ausführen, der Features oder Funktionen der App einführt oder verändert“. Lokale KI-Apps bleiben innerhalb dieser Regel, indem sie die Engine in der App mitliefern und Modellgewichte herunterladen, die Daten sind. Das ist unsere Lesart, keine Aussage von Apple.',
          '**Kein Ollama-Server auf dem Telefon.** Ollama bietet keine iPhone-App an, und die App-Store-Sandbox lässt keinen praktikablen Weg, einen Ollama-Server oder einen Docker-Container auszuführen. Es gibt einige Shell-Apps in einer Sandbox, aber sie bieten keinen Server für lokale Modelle.',
          '**Nur öffentliche APIs (Richtlinie 2.5.1).** Apps dürfen nur öffentliche APIs verwenden, weshalb Foundation Models, Core ML, Metal und MLX die verfügbaren Wege sind und privater Zugriff auf die Neural Engine nicht.',
          '**Energie und Wärme (Richtlinie 2.4.2).** Apple sagt (übersetzt), Apps „sollten den Akku nicht schnell entleeren, keine übermäßige Wärme erzeugen und Geräteressourcen nicht unnötig belasten“. Dauerhaftes Erzeugen stellt diese Zeile auf die Probe, weshalb Apps lange Läufe drosseln oder beenden.',
          '**Hintergrundnutzung ist begrenzt (Richtlinie 2.5.4).** Multitasking-Apps dürfen Hintergrunddienste nur für vorgesehene Zwecke wie Audiowiedergabe, Standort, Abschluss von Aufgaben und lokale Mitteilungen nutzen. Ein Modell kann nicht unbegrenzt weiter erzeugen oder als Agent handeln, sobald Sie die App verlassen; [Reins](/de/power-local-llm/reins-review) merkt an, dass Erzeugung im Hintergrund iOS 26 voraussetzt.',
          '**Speichergrenzen.** iOS begrenzt, wie viel RAM eine App im Vordergrund nutzen darf. Apple veröffentlicht ein Entitlement für ein erhöhtes Speicherlimit (com.apple.developer.kernel.increased-memory-limit), das Entwickler beantragen können; die genaue Zuteilung nennen wir nicht. Sie können nicht sehen, ob eine App es hat, testen Sie ein Modell daher mit dem eigenen Benchmark der App, bevor Sie sich darauf verlassen.',
          '**JIT und Kompilierung zur Laufzeit.** Desktop-Engines kompilieren Code oft zur Laufzeit; iOS-Apps liefern stattdessen vorab kompilierte Engines aus. Das ist allgemeines Plattformverhalten, von mehreren Engine-Projekten vermerkt, und ein Grund, warum iPhone-Engines den Desktop-Engines bei den Funktionen hinterherhinken.',
          '**Datenweitergabe (Richtlinien 5.1.1 und 5.1.2).** Apps müssen eine Datenschutzerklärung verlinken, erklären, welche Daten erhoben werden, vor der Weitergabe personenbezogener Daten an Dritte „auch an Drittanbieter-KI“ (übersetzt) die Erlaubnis einholen und dürfen Daten nicht ohne Einwilligung zweckentfremden. Die Datenschutz-Labels im App Store werden vom Entwickler ausgefüllt, worauf das Datenschutzkapitel zurückkommt.',
          '**Sideloading und alternative Marktplätze.** In der EU gibt es alternative App-Marktplätze nach dem Digital Markets Act, aber jeder Entwickler entscheidet, wo er veröffentlicht. Keine der Apps in diesem Leitfaden braucht einen solchen Marktplatz; [LLM Farm](/de/power-local-llm/llm-farm-review) ist die Ausnahme, die derzeit aus dem Quellcode in Xcode gebaut werden muss.',
          '**TestFlight-Betas.** Mehrere Hersteller bieten TestFlight-Builds an (zum Beispiel [Aiko](/de/power-local-llm/aiko-review) für eine kostenlose Testversion und [fullmoon](/de/power-local-llm/fullmoon-review) für neuere Builds). TestFlight-Builds sind zeitlich begrenzt und unfertig; nutzen Sie sie zum Testen, nicht für Daten, die Sie nicht verlieren dürfen.',
        ],
      },
      iphoneVsAndroid: {
        id: 'iphone-vs-android',
        title: 'Was das iPhone besser und schlechter kann als Android',
        content:
          '**Das iPhone ist leichter zu starten und stärker eingeschränkt beim Erweitern; bei Android ist es umgekehrt.** iPhones gibt es in wenigen bekannten Konfigurationen, sie liefern Apples eigenes Modell mit und führen jede App über einen einzigen Store aus. Android-Telefone unterscheiden sich viel stärker bei RAM und Chip, erlauben Terminal-Apps und Sideloading und haben einen eigenen Stack für On-Device-Modelle. Dies ist ein Plattformvergleich auf Basis öffentlicher Informationen; für Zahlen Hardware für Hardware siehe [Galaxy vs. iPhone On-Device-KI](/de/local-llms/galaxy-vs-iphone-on-device-ai-2026) und den Schwesterleitfaden [Leitfaden Lokale KI auf Android](/de/power-local-llm/local-ai-on-android-guide).',
        columns: ['Thema', 'iPhone', 'Android'],
        rows: [
          {
            'Thema': 'Einrichtungsaufwand',
            'iPhone': 'App Store, ein Tipp',
            'Android': 'Play Store oder APK',
          },
          {
            'Thema': 'Eingebautes Modell',
            'iPhone': 'Apple Foundation Models',
            'Android': 'Modelle von Herstellern und Google',
          },
          {
            'Thema': 'Ollama auf dem Telefon',
            'iPhone': 'Keine Ollama-App für das iPhone',
            'Android': 'Möglich über Termux (siehe Leitfaden)',
          },
          {
            'Thema': 'RAM-Obergrenze',
            'iPhone': 'Etwa 12 GB bei Pro-Modellen',
            'Android': 'Unterschiedlich; jedes Telefon prüfen',
          },
          {
            'Thema': 'Modellformate',
            'iPhone': 'GGUF, MLX, Core ML, LiteRT',
            'Android': 'GGUF, LiteRT, MLC und mehr',
          },
          {
            'Thema': 'Kurzbefehle und Automatisierung',
            'iPhone': 'Kurzbefehle, App Intents',
            'Android': 'Tasker und Intents',
          },
          {
            'Thema': 'Anzahl der Apps',
            'iPhone': 'Weniger Open-Source-Optionen',
            'Android': 'Größere Open-Source-Auswahl',
          },
          {
            'Thema': 'Arbeit im Hintergrund',
            'iPhone': 'Stark begrenzt',
            'Android': 'Lockerer, aber weiter begrenzt',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Viele Apps in diesem Leitfaden laufen auch auf Android ([PocketPal AI](/de/power-local-llm/pocketpal-ai-review), [MLC Chat](/de/power-local-llm/mlc-chat-review), [KernelAI](/de/power-local-llm/kernelai-review), [LLM Hub](/de/power-local-llm/llm-hub-review)), sodass ein Haushalt mit beiden Plattformen oft dieselbe App auf beiden nutzen kann. Android-Besonderheiten vergleichen Sie in [Beste lokale LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026).',
          },
        ],
      },
      chatMain: {
        id: 'chat-assistants',
        title: 'Chat-Assistenten: Die wichtigsten On-Device-Apps',
        content:
          '**Für allgemeinen Chat auf einem iPhone beginnen Sie mit einer der fünf Apps, die unsere iPhone-Bestenliste vergleicht, und schauen Sie sich dann die neueren Apps unten an.** Jede Zeile nennt, was die App leistet, und ihre ehrliche Grenze. Die Angaben stammen aus den verlinkten PromptQuorum-Reviews, den Store-Einträgen und den Seiten der Hersteller; sofern ein Review nicht angibt, die App getestet zu haben, behandeln Sie Geschwindigkeit und Qualität als nicht gemessen. Für Ranglisten und Richtwerte zur Geschwindigkeit siehe [Beste lokale LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026), für die gesamte Chat-Kategorie [Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'PocketPal AI ist der kostenlose Standard, Private LLM die kostenpflichtige Option mit Siri und Kurzbefehlen, Locally AI die kostenlose MLX-App mit Apple Foundation Models und Google AI Edge Gallery die kostenlose Gemma-4-App für das iPhone.',
          },
          {
            type: 'plain-terms',
            text:
              'Wählen Sie eine Chat-App, laden Sie ein Modell herunter, das zu Ihrem iPhone passt, und heben Sie sich die übrigen Apps in diesem Leitfaden für besondere Aufgaben wie Dokumente, Sprache oder einen Heimserver auf. Preise stammen aus den verlinkten Reviews und Store-Seiten und können sich ändern; prüfen Sie den Store vor dem Kauf.',
          },
        ],
        items: [
          '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review): kostenlos, Open Source (MIT), führt jedes GGUF-Modell von Hugging Face aus und hat einen eingebauten Benchmark. Grenze: eigenständiger Chat, ohne erwähnte Kurzbefehl- oder Siri-Aktion; optionale In-App-Käufe für Premium-Voreinstellungen.',
          '[Private LLM](/de/power-local-llm/private-llm-review): 4,99 $ einmalig für iPhone, iPad und Mac, über 140 Modelle, kein Konto. Der Entwickler gibt an, dass es sich in Siri und Kurzbefehle einklinkt. Grenze: Closed Source und eine kuratierte Modellliste, Sie können also keine beliebigen Dateien laden.',
          '[Locally AI](/de/power-local-llm/locally-ai-review): kostenlos, vom LM-Studio-Team, auf Apple MLX aufgebaut, mit einer Kurzbefehl-Aktion, Apple Foundation Models als Chat-Option und einer optionalen Verbindung zu LM Studio auf einem Mac. Grenze: kein Import beliebiger GGUF-Dateien, Closed Source, iOS 18.1 oder neuer.',
          '[Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review): Googles kostenlose App für Gemma 4 mit Denkmodus, Agent-Skills sowie Bild- und Audioeingabe. Grenze: nur LiteRT-LM-Modelle, als experimentelle Beta bezeichnet, und ihr App-Store-Datenschutz-Label zeigt einige Gerätediagnosen.',
          '[Noema](/de/power-local-llm/noema-review): kostenlos, führt GGUF, MLX, ExecuTorch, Core ML und Apple Foundation Models in einer App aus, mit Dokumenten-Chat auf dem Gerät. Grenze: Closed Source, kein veröffentlichtes RAM-Minimum, iOS oder iPadOS 18 oder neuer.',
          '[Off Grid AI](/de/power-local-llm/off-grid-ai-review): kostenlose Open-Source-App (MIT) mit GGUF-Chat, Stable-Diffusion-Bildmodellen und Whisper-Spracherkennung auf dem Gerät, auf iOS, Android, macOS und Windows. Grenze: Eine App mit vielen Aufgaben bedeutet mehr Speicherbedarf und mehr Einstellungen.',
          '[Pocket AI](/de/power-local-llm/pocket-ai-review): kostenlos, llama.cpp mit Metal, 28 Modelle aus den Familien Qwen, Gemma, Llama, Mistral, Phi und DeepSeek (laut Entwickler), iPhone 12 oder neuer. Grenze: Spracheingabe mit Whisper auf dem Gerät erfordert die kostenpflichtige Pro-Freischaltung.',
          '[KernelAI](/de/power-local-llm/kernelai-review): kostenlos, 53 herunterladbare offene Modelle von 112 MB bis 3,11 GB, laut Eintrag mit Dokumenten, Bildverarbeitung und Kurzbefehlen. Grenze: Closed Source, und unser Review beruht auf öffentlichen Quellen, nicht auf einem praktischen Test.',
          '[On Device AI](/de/power-local-llm/on-device-ai-review): über 200 herunterladbare GGUF- und MLX-Modelle, dazu Transkription, Dokument- und RSS-Import, Text-to-Speech auf dem Gerät und Automatisierungs-Schnittstellen. Grenze: eine breite Funktionsliste in einer Closed-Source-App; lesen Sie ihren Datenschutzabschnitt.',
          '[Enclave AI](/de/power-local-llm/enclave-ai-review): kostenlos mit In-App-Käufen, laut Eintrag offline auf iPhone, iPad und Mac, kein Konto, laut unserer Bestenliste mit Dokumenteninteraktion und Kurzbefehlen. Grenze: Closed Source und kostenpflichtige Stufen.',
        ],
      },
      chatMore: {
        id: 'chat-more',
        title: 'Chat-Assistenten: Neuere, Nischen- und Hybrid-Apps',
        content:
          '**Diese Apps decken engere Bedürfnisse ab: Chat zum Einmalpreis, Chat nur mit Apple-Modell, Personas, Open-Source-Datenschutzprojekte und Hybride, die On-Device und Cloud mischen.** Achten Sie besonders auf die Hybrid-Warnungen, denn eine Hybrid-App ist nur lokal, solange Sie im On-Device-Modus bleiben.',
        items: [
          '[Cloak: Local AI](/de/power-local-llm/cloak-local-ai-review): einmalig bezahlt (1,99 $ im US-Store), lädt ein empfohlenes Modell herunter, ergänzt Sprachmemos und eine wöchentliche Zusammenfassung aus Fotos, Standort und Sprachmemos auf dem iPhone. Grenze: keine Modellauswahl, und der Modellname ist nicht veröffentlicht.',
          '[Compass - Local AI](/de/power-local-llm/compass-local-ai-review): kostenlos, antwortet mit Apple Intelligence auf dem Gerät und liest Screenshots mit OCR auf dem Gerät; erfordert iOS oder iPadOS 26. Grenze: Die Websuche ist optional und sendet Ihre Anfrage an DuckDuckGo oder Brave, wenn sie eingeschaltet ist.',
          '[AI on Device](/de/power-local-llm/ai-on-device-review): 4,99 $ einmalig, ein 3B-Modell mit 2 Bit quantisiert, erfordert iOS 26 und ein mit Apple Intelligence kompatibles Gerät. Grenze: kein Update seit dem 13. Oktober 2025, behandeln Sie sie daher als ruhend.',
          '[Haplo AI](/de/power-local-llm/haplo-ai-review): lädt offene Modelle wie Qwen und Phi herunter für Chat, Bildeingabe und Bilderzeugung, kein Konto. Grenze: kostenpflichtige App; unser Review beruht auf öffentlichen Quellen.',
          '[Oscilla](/de/power-local-llm/oscilla-review): kostenlos, über 40 offene Modelle, Echtzeit-Sprache, eingebautes Gedächtnis, Websuche sowie Datei- und Bildanalyse; Apples Label „Daten werden nicht erfasst“. Grenze: iOS 26 oder neuer, Closed Source, und kein Update seit dem 21. Mai 2026.',
          '[Frankly AI](/de/power-local-llm/frankly-ai-review): herunterladbare On-Device-Modelle mit Aufgaben-Personas und ohne Konto; kostenloses Tageslimit, Pro schaltet den Rest frei. Grenze: Nutzungsgrenze in der kostenlosen Stufe.',
          '[LLM Studio Go](/de/power-local-llm/llm-studio-go-review): kostenlos und werbefinanziert, Chat, Sprache, Bilder, Musik und Sprachausgabe mit GGUF- und MLX-Modellen, iOS oder iPadOS 18. Grenze: Werbung, und laut Review hat sie trotz des Namens nichts mit LM Studio zu tun.',
          '[Local AI Chat - pocket](/de/power-local-llm/local-ai-chat-pocket-review): Freemium-Offline-Chat mit Bilderzeugung und laut Tagline Kurzbefehlen, iOS oder iPadOS 18.6 oder neuer. Grenze: kein Update seit dem 27. Mai 2026 und In-App-Käufe im Abo-Stil.',
          '[Loci AI](/de/power-local-llm/loci-ai-review-offline-local-ai): kostenlos auf iPhone, iPad, Android, Mac und Windows, wählt automatisch ein zur Hardware passendes Modell. Grenze: Die Aussagen des Herstellers zur Modellstärke sind von PromptQuorum nicht überprüft.',
          '[Ensu](/de/power-local-llm/ensu-review): kostenlos, Open Source (AGPL), von Ente Labs, mit Bildeingabe und lokalem Sprachdiktat. Grenze: Der Hersteller selbst sagt, sie sei noch nicht so leistungsfähig wie ChatGPT oder Claude Code, und die Version ist noch 0.x.',
          '[MemoryAI](/de/power-local-llm/memoryai-review): kostenloser Offline-Chat mit Fragen zu Dokumenten, einem editierbaren Gedächtnis und einem PIN-gesperrten Kindermodus; iOS 16.4+ und 4 GB+ RAM. Grenze: Ihre Datenschutzerklärung nennt Nutzungsereignisse und Absturzberichte; Closed Source.',
          '[Secret AI](/de/power-local-llm/secret-ai-review): Offline-Chat mit Charakteren, Skills und MCP-Werkzeugen auf GGUF-, MNN- und MLX-Modellen. Grenze: Laut Datenschutzerklärung können MCP-Werkzeugaufrufe und optionale Remote-Server Daten vom Gerät senden, und die Erklärung ist älter als diese Funktionen.',
          '[LocalMindAI](/de/power-local-llm/localmindai-review): Chat, Gedächtnis, Spracherkennung und Dokumentenlesen auf iPhone und iPad, mit Apples Modell oder heruntergeladenen Modellen; iOS 26. Grenze: beim Review erst wenige Tage alt, und unser Review beruht auf öffentlichen Quellen.',
          '[Solair AI](/de/power-local-llm/solair-ai-review): Local-first-Assistent mit optionalem Cloud-Fallback mit eigenem Schlüssel; iOS 26. Grenze: Der Fallback ist Cloud, prüfen Sie daher, welcher Modus antwortet.',
          '[Liquid Apollo](/de/power-local-llm/liquid-apollo-review): kostenlos, führt Liquid-AI-LFM2-Modelle (350M bis 2,6B) offline aus, mit optionalem OpenRouter-Modus und eigenen Backends; iOS 18. Grenze: nicht ausschließlich lokal; der OpenRouter-Modus braucht Ihren eigenen Schlüssel und Internet.',
          '[Kai 9000](/de/power-local-llm/kai-9000-review): Open-Source-Assistent mit persistentem Gedächtnis und Werkzeugen. Grenze: Laut Review sendet er Nachrichten standardmäßig an einen Cloud-Dienst; er läuft erst lokal, nachdem Sie ein On-Device-Modell heruntergeladen haben.',
          '[CompactifAI APP](/de/power-local-llm/compactifai-app-review): kostenlose App von Multiverse Computing, die komprimierte Modelle anbietet. Grenze: Der aktuelle Store-Text beschreibt nur API-Modelle, was auf dem Telefon läuft, ist daher nicht überprüft.',
          '[Atomic Chat](/de/power-local-llm/atomic-chat-review): kostenlose Open-Source-App (Apache 2.0) für macOS, Windows, Linux, iOS und Android mit GGUF-, MLX- und ONNX-Modellen und einer lokalen OpenAI-kompatiblen API. Grenze: Es ist ein plattformübergreifendes Projekt, lesen Sie das Review, was der iPhone-Build enthält.',
          '[LLM Hub](/de/power-local-llm/llm-hub-review): Suite für Android und iPhone mit MCP-fähigem Agenten, Bild- und Musikerzeugung, Übersetzung, Whisper und Sprach-Chat, dazu eine kostenpflichtige Premium-Stufe. Grenze: Ihre Lizenz ist PolyForm Noncommercial, keine Open-Source-Lizenz im üblichen Sinn.',
          '[Llamatik](/de/power-local-llm/llamatik-review): kostenlos, MIT, ein Offline-Chatbot, den der eigene Eintrag als experimentelles Schaufenster des Kotlin-SDK des Entwicklers bezeichnet. Grenze: Ihre Datenschutzerklärung und ihr Store-Label führen Firebase-Analytics und Absturzberichte auf.',
          '[Layla](/de/power-local-llm/layla-review): 19,99 $ einmalig auf Android und iOS, GGUF-Modelle mit persona-gesteuerten Begleitern, Stimmen und Bilderzeugung. Grenze: Android zuerst, und es gibt einen optionalen Layla-Cloud-Modus.',
        ],
      },
      chatQuiet: {
        id: 'chat-quiet-apps',
        title: 'Ruhende, veraltete oder nicht im App Store verfügbare Apps',
        content:
          '**Eine App ohne Update seit mehr als drei Monaten wird möglicherweise nicht mehr gepflegt; prüfen Sie das, bevor Sie sich auf sie verlassen.** Die Daten unten stammen aus den Kacheln des PromptQuorum-Verzeichnisses und aus den einzelnen Reviews. Eine ruhende App kann weiter funktionieren, aber Sie erhalten keine Korrekturen, keine neuen Modelle und kein Anzeichen, ob der Hersteller zurückkehrt.',
        items: [
          '[MLC Chat](/de/power-local-llm/mlc-chat-review): Metal-beschleunigte Referenz-App des Projekts MLC LLM. Laut unserem Review kein App-Store-Update seit dem 27. September 2024. Die Engine dahinter, [MLC LLM](/de/power-local-llm/mlc-llm-explained), ist weiterhin aktiv.',
          '[LLM Farm](/de/power-local-llm/llm-farm-review): letzte Version 1.4.3 im Januar 2025 und letzter Code-Push am 30. Januar 2026. Weder über den App Store noch über TestFlight installierbar (ihre README nennt sie vorübergehend nicht verfügbar); bauen Sie sie aus dem Quellcode in Xcode, wenn Sie ihre Sampling-Steuerung brauchen.',
          '[fullmoon](/de/power-local-llm/fullmoon-review): kostenlos, MIT, führt kleine Modelle auf Apple MLX aus, ohne Release seit dem 28. Januar 2025 und ohne Code-Änderung seit dem 5. Mai 2025.',
          '[Maid](/de/power-local-llm/maid-review): Open-Source-Chat-App, die Android zuerst bedient; ihr iOS-Build war ein Sideload, und unser Review datiert iOS-Releases bis Version 2.0.7 im April 2025, sie ist daher keine App-Store-Option.',
          '[Aiko](/de/power-local-llm/aiko-review): wird weiter verkauft und ist für Transkription nützlich, aber ihr letztes Update war am 27. Juni 2026, also vor mehr als drei Monaten.',
          'Weitere in diesem Leitfaden als ruhend markierte Apps: [Atomic Bot](/de/power-local-llm/atomic-bot-review) (26. Mai 2026), [Chapper](/de/power-local-llm/chapper-review) (6. August 2026), [Enchanted](/de/power-local-llm/enchanted-review) (7. Juli 2026), [AI CutoutWerk](/de/power-local-llm/ai-cutoutwerk-review) (16. Februar 2026) und [pcAI Photo Retouch](/de/power-local-llm/pcai-photo-retouch-review) (20. Februar 2026).',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '„Ruhend“ ist eine datumsbasierte Markierung aus den Verzeichniskacheln, kein Qualitätsurteil. Bevor Sie für eine App in dieser Liste bezahlen, öffnen Sie ihre App-Store-Seite und lesen Sie den Versionsverlauf selbst.',
          },
        ],
      },
      vision: {
        id: 'vision-camera',
        title: 'Bildverarbeitung und Kamera: Fragen zu Fotos und Screenshots',
        content:
          '**Mehrere iPhone-Apps nehmen neben Ihrer Frage ein Bild an und antworten auf dem Gerät, aber kleine Vision-Modelle machen mehr Fehler als Cloud-Modelle.** Es gibt zwei Wege: ein Vision-Sprachmodell, das Sie herunterladen (das Modell liest das Bild selbst), und System-OCR plus Textmodell (das Telefon extrahiert den Text, dann antwortet das Modell). Apples iOS-27-Entwicklerleitfaden sagt, das Foundation-Models-Framework nehme jetzt Bilder mit Text an und lasse ein Modell Vision-Werkzeuge wie OCR und Barcode-Erkennung auf dem Gerät aufrufen.',
        items: [
          '[Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review): Ask Image und Audio Scribe mit Gemma-4-Modellen. Grenze: nur LiteRT-LM-Modelle; Google nennt Speicherwerte des Herstellers, keine Messungen von PromptQuorum.',
          '[Compass - Local AI](/de/power-local-llm/compass-local-ai-review): liest angehängte Screenshots mit OCR auf dem Gerät und antwortet mit Apple Intelligence. Grenze: OCR liest Text, sie beschreibt keine Szene; erfordert iOS oder iPadOS 26.',
          '[Oscilla](/de/power-local-llm/oscilla-review): Datei- und Bildanalyse mit bildfähigen Modellen wie MiniCPM-V laut Eintrag. Grenze: iOS 26 oder neuer und kein Update seit dem 21. Mai 2026.',
          '[Haplo AI](/de/power-local-llm/haplo-ai-review): Bildeingabe und Bilderzeugung in einer App. Grenze: Unser Review beruht auf öffentlichen Quellen, die Modellqualität ist daher nicht gemessen.',
          '[Ensu](/de/power-local-llm/ensu-review): Bildeingabe mit heruntergeladenen Modellen, kostenlos und Open Source. Grenze: Version 0.x; der Hersteller sagt, sie sei noch nicht auf Augenhöhe mit großen Cloud-Werkzeugen.',
          '[KernelAI](/de/power-local-llm/kernelai-review): führt Bildverarbeitung unter ihren Funktionen auf, mit 53 herunterladbaren Modellen. Grenze: Welche Modelle Bilder annehmen, hängt vom Modell ab.',
          '[MemoryAI](/de/power-local-llm/memoryai-review): Bildverständnis mit Vision-Modellen nach einem Modell-Download. Grenze: Sie müssen selbst ein bildfähiges Modell wählen.',
          '[Reins](/de/power-local-llm/reins-review): sendet Bild-, PDF- und CSV-Anhänge an ein Modell auf Ihrem eigenen Server oder an ein lokales MLX-Modell. Grenze: Die Qualität hängt vom gewählten Servermodell ab.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Nutzen Sie ein kleines On-Device-Vision-Modell nicht für etwas, bei dem eine falsche Lesart Folgen hat, etwa Medikamentenetiketten, Rechtsdokumente oder das Bestimmen von Pflanzen oder Pilzen zum Verzehr. Behandeln Sie Antworten als Ausgangspunkt und prüfen Sie die Quelle.',
          },
        ],
      },
      voice: {
        id: 'voice-speech',
        title: 'Sprache: Diktat, Transkription, Vorlesen, Offline-Assistenten und Siri',
        content:
          '**Sprache-zu-Text gehört zu den am besten etablierten On-Device-Aufgaben; Hersteller berichten, dass Modelle der Whisper-Klasse auf aktuellen Telefonen laufen, und mehrere Apps berechnen einmalig statt pro Minute.** Text-to-Speech und freihändige Assistenten sind lückenhafter. Für eine selbstgebaute Pipeline siehe [Lokalen Sprachassistenten auf dem Telefon bauen](/de/power-local-llm/voice-assistant-local-mobile-offline), für die Kategorie [Sprach- und Audio-Apps im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared) und für Engine-Vergleiche [Vergleich lokaler Whisper-STT-Lösungen](/de/power-local-llm/local-whisper-stt-comparison).',
        items: [
          '[Whisper Notes](/de/power-local-llm/whisper-notes-review): 7,99 $ einmalig, führt Whisper, Parakeet und SenseVoice auf iPhone, iPad und Macs mit Apple Silicon aus, mit Sprecherkennzeichnung; laut Datenschutzerklärung verlassen Audio und Transkripte das Gerät nie. Grenze: Closed Source; das Review beruht auf öffentlichen Quellen, nicht auf einem praktischen Test.',
          '[Aiko](/de/power-local-llm/aiko-review): Whisper-Transkription auf dem Gerät für Mac, iPhone und Vision Pro, 100 Sprachen, Unterstützung für Kurzbefehle, ein Kauf für alle Plattformen. Grenze: letztes Update am 27. Juni 2026, also ruhend.',
          '[Lyonesse](/de/power-local-llm/lyonesse-review): Offline-Transkription, Besprechungsnotizen und Dokumenten-Chat für iPhone, iPad und Mac; ihre Apple-Watch-App nimmt eigenständig auf und überträgt an das iPhone, das die Transkription übernimmt. Grenze: Die Angaben des Herstellers zur Verarbeitung sind nicht unabhängig überprüft.',
          '[OpenWhispr](/de/power-local-llm/openwhispr-review): MIT-lizenziertes Diktat und Besprechungsnotizen mit lokalen Whisper- oder Parakeet-Modellen oder einem Cloud-Anbieter Ihrer Wahl. Grenze: Ob Ihre Stimme auf dem Gerät bleibt, hängt vom gewählten Modell ab.',
          '[AquaVoice](/de/power-local-llm/aquavoice-review): Sprachdiktat, das in die aktive App tippt. Grenze: Laut Review ist es ein Cloud-Dienst, hier aufgeführt, damit Sie es nicht mit lokalem Diktat verwechseln.',
          '[Ensu](/de/power-local-llm/ensu-review) und [MemoryAI](/de/power-local-llm/memoryai-review): lokales Sprachdiktat (Ensu) und freihändige Sprache mit Spracheingabe auf dem Gerät und Vorlesen (MemoryAI) innerhalb einer Chat-App. Grenze: Die Sprachqualität folgt dem kleinen Chat-Modell dahinter.',
          '[Oscilla](/de/power-local-llm/oscilla-review), [LLM Studio Go](/de/power-local-llm/llm-studio-go-review) und [Pocket AI](/de/power-local-llm/pocket-ai-review): Echtzeit-Sprache, Sprach-Chat mit Sprachausgabe beziehungsweise Whisper-Eingabe auf dem Gerät (kostenpflichtiges Pro). Grenze: Sprache belastet Speicher und Akku zusätzlich zum Chat-Modell.',
          '[Castmates](/de/power-local-llm/castmates-review): Sprachanrufe mit Charakteren, die laut Hersteller auf dem Telefon laufen. Grenze: Closed Source, die Aussage beruht daher auf dem Entwickler.',
          '[Cloak: Local AI](/de/power-local-llm/cloak-local-ai-review): macht aus Sprachmemos Notizen oder Chats. Grenze: ein festes Modell.',
          '[Home Assistant Assist](/de/power-local-llm/home-assistant-assist-review): der Sprachassistent in Home Assistant, laut Review lokal mit Whisper, Piper und Wyoming; keine eigenständige iPhone-App. Grenze: braucht einen Home-Assistant-Server und einen optionalen LLM-Agenten, der teils experimentell ist.',
          '[Murmur](/de/power-local-llm/murmur-review): komponiert auf dem Gerät instrumentale Musik für Fotos, Videos und Spiele mit einer einmaligen Pro-Freischaltung. Grenze: kein Gesang.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Siri und Kurzbefehle: [Private LLM](/de/power-local-llm/private-llm-review) nennt eine Integration von Siri und Kurzbefehlen, [Locally AI](/de/power-local-llm/locally-ai-review) und [Aiko](/de/power-local-llm/aiko-review) bieten Kurzbefehl-Aktionen, und unsere iPhone-Bestenliste beschreibt die Kurzbefehl-Aktion „Modell verwenden“, die einen Prompt an Apples On-Device-Modell leiten kann. Keine davon ersetzt Siri selbst; Sie bitten Siri, einen Kurzbefehl auszuführen, der die App aufruft.',
          },
        ],
      },
      documents: {
        id: 'documents-rag',
        title: 'Dokumente, PDFs und Retrieval auf dem Telefon',
        content:
          '**Der Chat mit einer Handvoll PDFs oder Notizen funktioniert auf einem iPhone, aber ganze Bibliotheken gehören auf einen Heimserver.** Dokumenten-Chat auf dem Gerät zerlegt Dateien in Abschnitte, indexiert sie mit einem kleinen Embedding-Modell und übergibt die besten Abschnitte an das Chat-Modell. Kleine Modelle haben kurze Kontextfenster, daher können Antworten Inhalte auslassen, und erfundene Quellenangaben sind möglich. Für die Suche in großen Bibliotheken siehe [Wissens- und Retrieval-Apps im Vergleich](/de/power-local-llm/local-llm-knowledge-retrieval-compared).',
        items: [
          '[Private Mind](/de/power-local-llm/private-mind-review): Open-Source-Chat (MIT) von Software Mansion, der Fragen zu Ihren PDF- und Textdateien mit Retrieval auf dem Gerät und Quellenangaben beantwortet, mit React Native ExecuTorch. Grenze: Version 1.3.0 hat einen optionalen Web-Schalter ergänzt, der Seiten abruft, sie ist also standardmäßig offline, aber nicht offline, wenn diese Funktion an ist.',
          '[MemoryAI](/de/power-local-llm/memoryai-review): Fragen zu Dokumenten und ein editierbares Agent-Gedächtnis. Grenze: Closed Source, und Nutzungsereignisse verlassen das Telefon.',
          '[LocalMindAI](/de/power-local-llm/localmindai-review): liest Ihre Dokumente auf dem Gerät mit Apples Modell oder einem heruntergeladenen. Grenze: iOS 26 und beim Review sehr neu.',
          '[Noema](/de/power-local-llm/noema-review): Dokumenten-Chat auf dem Gerät über ihre fünf Modellformate. Grenze: Closed Source; kein veröffentlichter RAM-Wert.',
          '[Lyonesse](/de/power-local-llm/lyonesse-review): Chat mit Ihren eigenen Dokumenten neben Transkripten. Grenze: Der Schwerpunkt liegt auf Apple Watch und Besprechungsfunktionen.',
          '[Arbiter](/de/power-local-llm/arbiter-local-ai-chat-review): hält hochgeladene Dokumente für Zusammenfassungen auf dem Gerät, auf einem iPhone 13 Pro oder neuer (etwa 6 GB RAM oder mehr), und kann für ein größeres Modell LM Studio, Ollama oder den Begleiter Arbiter für Mac erreichen. Grenze: Antworten größerer Modelle verlassen das Telefon in Richtung Ihres Computers.',
          '[KernelAI](/de/power-local-llm/kernelai-review) und [Enclave AI](/de/power-local-llm/enclave-ai-review): beide führen Dokumentenfunktionen in einer allgemeinen Chat-App auf. Grenze: Prüfen Sie Dateigrößen- und Formatgrenzen in der App, bevor Sie sich darauf verlassen.',
          '[Reins](/de/power-local-llm/reins-review): PDF-, CSV- und Text-Anhänge, die an ein Modell auf Ihrem eigenen Server gesendet werden. Grenze: Die Verarbeitung findet auf dem Server statt, nicht auf dem Telefon.',
          '[AnythingLLM Mobile](/de/power-local-llm/anythingllm-mobile-review): Android hat einen eigenständigen On-Device-Modus und die Kopplung mit AnythingLLM Desktop; laut unserem Review ist die iOS-App noch nicht veröffentlicht. Grenze: Bis iOS erscheint, nutzen Sie einen Browser gegen Ihren eigenen AnythingLLM-Server.',
        ],
      },
      translation: {
        id: 'translation',
        title: 'Übersetzung auf dem Gerät',
        content:
          '**Übersetzung passt natürlich zu einem kleinen On-Device-Modell, weil die Aufgabe eng gefasst ist und mehrere Apps auf Übersetzung getrimmte Modelle mitliefern.** PromptQuorum hat die Übersetzungsqualität auf dem iPhone nicht per Benchmark gemessen. Die Qualität dürfte bei seltenen Sprachen, Redewendungen und langen Dokumenten sinken, und jede On-Device-Engine braucht pro Modell oder Sprache einen Download.',
        items: [
          '[On-Device AI Translator](/de/power-local-llm/on-device-ai-translator-review): übersetzt auf dem iPhone mit herunterladbaren Hy-MT2-, TranslateGemma- und Qwen-Modellen und bietet Apples eingebaute Übersetzung als kostenlose Engine; iOS 18.4 oder neuer. Grenze: Die KI-Modelle stehen hinter In-App-Käufen, deren Preise die Quellen nicht zeigen, und die Datenschutzerklärung ist älter als die App.',
          '[LLM Hub](/de/power-local-llm/llm-hub-review): enthält Übersetzung in ihrer Suite für Android und iPhone. Grenze: Übersetzung ist eine Funktion unter vielen, und die Lizenz ist nichtkommerziell.',
          'Allgemeine Chat-Apps wie [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Locally AI](/de/power-local-llm/locally-ai-review) können ebenfalls übersetzen, wenn Sie ein mehrsprachiges Modell wie ein Modell der Familie Qwen oder Gemma laden. Grenze: kein Glossar, kein Dokumentlayout und keine Qualitätsgarantie pro Sprache.',
          'Apples eigene Übersetzen-App und die Systemübersetzung sind von den obigen Apps getrennt und wurden für diesen Leitfaden nicht überprüft; prüfen Sie in der Übersetzen-App, ob Ihr Sprachpaar für die Offline-Nutzung heruntergeladen werden kann.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Für ganze Bücher oder lange Dokumente ist ein Desktop-Weg praktischer; siehe [Bücher mit LLMs übersetzen](/de/power-local-llm/translate-books-with-llms-review). Die Sprachunterstützung von Apple Intelligence ist eine eigene Liste, die im Kapitel zu Apple Intelligence behandelt wird.',
          },
        ],
      },
      images: {
        id: 'image-generation-editing',
        title: 'Bilderzeugung und Fotobearbeitung',
        content:
          '**Ein iPhone kann mit kleinen Diffusionsmodellen Bilder erzeugen und mit Segmentierungsmodellen Fotos bearbeiten, aber die Erzeugung ist langsam, speicherhungrig und erwärmt das Telefon.** Modelldateien sind Downloads im Gigabyte-Bereich, und PromptQuorum hat für keine iPhone-Bild-App Geschwindigkeitswerte. Zum Abwägen zwischen Cloud und lokal siehe [Lokale KI-Bilderzeugung vs. Cloud](/de/power-local-llm/local-ai-image-generation-vs-cloud) und für die Kategorie [Bild- und Video-Apps im Vergleich](/de/power-local-llm/local-llm-images-video-compared).',
        items: [
          '[Draw Things](/de/power-local-llm/draw-things-review): erzeugt Bilder mit Stable Diffusion, SDXL, Flux und weiteren Diffusionsmodellen auf macOS, iOS, iPadOS und visionOS, für die lokale Erzeugung kein Konto, iOS 15.4 oder neuer. Grenze: nicht zu 100 % lokal, da sie auch einen optionalen Cloud-Modus bietet; größere Modelle brauchen mehr RAM.',
          '[Genva](/de/power-local-llm/genva-review): iPhone- und iPad-App, die Text-Prompts und Fotos nach einem einmaligen Modell-Download auf dem Gerät in Bilder verwandelt, mit Hochskalierung. Grenze: am 14. Oktober 2026 als Version 1.0.0 gestartet, also ohne Erfahrungswerte.',
          '[Haplo AI](/de/power-local-llm/haplo-ai-review), [Off Grid AI](/de/power-local-llm/off-grid-ai-review) und [LLM Studio Go](/de/power-local-llm/llm-studio-go-review): Chat-Apps, die auch Bilder auf dem Gerät erzeugen (Haplo AI, Off Grid AI mit Stable-Diffusion-Modellen, LLM Studio Go zusätzlich mit Musik und Sprache). Grenze: Bildqualität und Geschwindigkeit liegen hinter spezialisierten Apps.',
          '[Local AI Chat - pocket](/de/power-local-llm/local-ai-chat-pocket-review) und [Layla](/de/power-local-llm/layla-review): Offline-Chat mit Bilderzeugung, Layla zusätzlich mit Stimmen und Personas. Grenze: Local AI Chat - pocket ist seit dem 27. Mai 2026 ruhend; Layla setzt Android an erste Stelle.',
          '[Tina](/de/power-local-llm/tina-review): erzeugt Bilder über ComfyUI auf einem Server, den Sie selbst betreiben, und kann Modelle auch auf dem Gerät ausführen. Grenze: Der Bildschritt braucht Ihren eigenen Server.',
          '[AI CutoutWerk](/de/power-local-llm/ai-cutoutwerk-review): Offline-Hintergrundentferner und Freisteller-Komposition für iPhone, iPad und Mac mit einem Core-ML-Segmentierungsmodell. Grenze: kein Update seit dem 16. Februar 2026.',
          '[pcAI Photo Retouch](/de/power-local-llm/pcai-photo-retouch-review): restauriert alte Fotos und wendet Kunststile an, mit einer KI, die laut Entwickler vollständig auf dem Gerät läuft. Grenze: Modell nicht genannt, Quellcode nicht veröffentlicht, kein Update seit dem 20. Februar 2026.',
        ],
      },
      photos: {
        id: 'photos-gallery-search',
        title: 'Fotobibliotheken und Galeriesuche',
        content:
          '**KI-Fotosuche auf dem iPhone ist meist ein Client für eine Bibliothek, die das Indexieren anderswo erledigt: entweder auf dem Telefon mit einer Opt-in-Funktion oder auf einem Server, den Sie betreiben.** Die drei Bibliotheken unten verfolgen unterschiedliche Ansätze, und keine ergänzt ein Chat-Modell. Gesichtserkennung verarbeitet biometrische Daten, prüfen Sie daher die Regeln dort, wo Sie und die Menschen auf Ihren Fotos leben, bevor Sie sie einschalten.',
        items: [
          '[Ente Photos](/de/power-local-llm/ente-photos-review): Open-Source-Fotosicherung, die laut Ente Ende-zu-Ende-verschlüsselt ist; Gesichtserkennung und die Magic-Suche in natürlicher Sprache laufen auf Ihrem Gerät und bleiben aus, bis Sie sie einschalten. Grenze: Fotos werden verschlüsselt in Entes Cloud gespeichert, und der erste Indexierungslauf kostet Akku.',
          '[Immich](/de/power-local-llm/immich-review): selbst gehostete Foto- und Videosicherung mit iPhone- und Android-Apps; die smarte Suche und die Gesichtserkennung laufen in einem Machine-Learning-Container, den Sie hosten und mit Docker installieren. Grenze: braucht einen Server, die Datenbank enthält nur Metadaten, die Dateien brauchen also eine eigene Sicherung, und es gibt keine Chat- oder LLM-Funktion.',
          '[Mylio Photos](/de/power-local-llm/mylio-photos-review): Foto-, Video- und Dokumentenbibliothek mit SmartTag-Suche, Gesichts- und Texterkennung, die laut Mylio auf Ihren eigenen Geräten laufen; kostenloser Download, Abo-Tarife. Grenze: Mylio sagt nicht, wo der Hilfe-Chatbot in der App läuft.',
          'Selbst gehostete Web-Galerien, die Sie im iPhone-Browser oder in einer Begleit-App öffnen, etwa [PhotoPrism-Review](/de/power-local-llm/photoprism-review), [Photoview-Review](/de/power-local-llm/photoview-review) und [Home-Gallery-Review](/de/power-local-llm/home-gallery-review), werden separat besprochen; lesen Sie in jedem Review, was wo läuft.',
        ],
      },
      notes: {
        id: 'notes-knowledge',
        title: 'Notizen, Wissensdatenbanken und Lesezeichen',
        content:
          '**Die meisten Notiz- und Lesezeichen-Werkzeuge legen die KI auf einen Server oder einen Modellanbieter Ihrer Wahl, und die iPhone-App ist der Client zum Erfassen und Lesen.** Das kann dennoch vollständig privat sein, wenn der Server Ihnen gehört und das Modell lokal ist, ist aber keine Inferenz auf dem Gerät. Jedes Review nennt, was wo läuft.',
        items: [
          '[Hillnote](/de/power-local-llm/hillnote-review): Local-first-Markdown-Notizen-Arbeitsbereich für Mac, Windows, iPhone und Android mit KI auf dem Gerät über Ollama und Apple Intelligence, dazu optionale Cloud-Modelle und Synchronisierung. Grenze: Ollama läuft auf einem Computer, nicht auf dem Telefon, und Cloud-Modelle sind optional, aber nicht lokal.',
          '[Logseq](/de/power-local-llm/logseq-review): Open-Source-Outliner nach dem Local-first-Prinzip; die Datenbankversion 2.0.2 ist eine Beta, deren README vor möglichem Datenverlust warnt. Grenze: Die KI kommt über einen optionalen MCP-Server, nicht über ein eingebautes Modell.',
          '[SiYuan](/de/power-local-llm/siyuan-review): selbst gehosteter Wissens-Arbeitsbereich unter AGPL für Windows, macOS, Linux, Android, iOS und HarmonyOS, mit optionalen KI-Funktionen, die sich mit einem Modellanbieter Ihrer Wahl verbinden. Grenze: Cloud-Synchronisierung braucht ein Abo oder einen einmaligen PRO-Kauf.',
          '[Karakeep](/de/power-local-llm/karakeep-review): selbst gehostete Lesezeichen- und Notizen-App mit nativen iOS- und Android-Apps und KI-Verschlagwortung über OpenAI oder einen lokalen Ollama-Endpunkt. Grenze: Sie betreiben den Server mit Docker, und die Verschlagwortung ist nur lokal, wenn Sie Ollama wählen.',
          '[Linkwarden](/de/power-local-llm/linkwarden-review): archiviert eine Kopie jeder gespeicherten Seite und kann Links mit einem von Ihnen konfigurierten KI-Modell verschlagworten, selbst gehostet oder in einer kostenpflichtigen Cloud-Edition. Grenze: Die iPhone-App ist ein Client; der KI-Schritt läuft auf dem Server.',
          '[Lyonesse](/de/power-local-llm/lyonesse-review) und [Cloak: Local AI](/de/power-local-llm/cloak-local-ai-review): machen aus Aufnahmen Notizen (Lyonesse) oder aus Fotos, Standort und Sprachmemos eine wöchentliche Zusammenfassung (Cloak). Grenze: beide sind Closed Source.',
        ],
      },
      health: {
        id: 'health-wellness',
        title: 'Fragen zu Gesundheit und Wohlbefinden',
        content:
          '**Eine geprüfte iPhone-App beantwortet Fragen zu Ihren Apple-Health-Daten mit Apple Intelligence auf dem Gerät, und sie ist die einzige Gesundheits-App in unserem iPhone-Bestand.** Gesundheitsdaten sind sensible personenbezogene Daten, und ein kleines Sprachmodell ist kein Arzt.',
        items: [
          '[Pajdo](/de/power-local-llm/pajdo-review): kostenlose App für iPhone, iPad und Apple Watch, die Apple-Health-Daten in eine von acht Stimmungen übersetzt und laut ihrer Website Ihre Fragen zu diesen Daten mit Apple Intelligence auf dem Gerät beantwortet. Der kostenlose Tarif enthält 5 Fragen pro Woche; Pro hebt das Limit auf und ergänzt Trainingsplanung und einen Bericht für Arztbesuche. Grenze: Closed Source, iOS 26 oder neuer, und die Aussage zur Verarbeitung auf dem Gerät beruht auf dem Wort des Entwicklers.',
          'Allgemeine Chat-Apps aus den Chat-Kapiteln können Schlaf, Training oder Ernährung in allgemeinen Worten besprechen. Grenze: Sie haben keinen Zugriff auf Ihre Gesundheitsdaten, es sei denn, eine App fragt nach der Berechtigung, und kleine Modelle können falsche Fakten mit großer Sicherheit behaupten.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Antworten auf dem Gerät sind keine medizinische Beratung und können einen Arzt nicht ersetzen. Nutzen Sie sie nicht, um Symptome, Herzfrequenz-Warnungen oder Medikamentenfragen zu deuten; lesen Sie die Datenschutzerklärung der App, bevor Sie Zugriff auf Apple Health gewähren.',
          },
        ],
      },
      roleplay: {
        id: 'roleplay-companions',
        title: 'Rollenspiel- und Begleiter-Apps mit Hinweisen zur Inhaltssicherheit',
        content:
          '**Rollenspiel- und Begleiter-Chat ist ein großer Teil des iPhone-Marktes für lokale KI-Apps, und die Apps unterscheiden sich stark darin, ob das Modell auf dem Telefon läuft, welche Inhalte sie erlauben und wie sie mit Minderjährigen umgehen.** Lokal heißt nicht moderiert, und Cloud heißt nicht sicherer. Lesen Sie die Altersfreigabe und die Einstellungen für nicht jugendfreie Inhalte, bevor Sie oder jemand in Ihrem Haushalt eine installiert. Für Desktop-Oberflächen siehe [SillyTavern vs. Agnai vs. RisuAI für Rollenspiel](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        items: [
          '[Castmates](/de/power-local-llm/castmates-review): kostenlose iPhone-App mit 35 vorgefertigten Charakteren, eigenen Charakteren und ohne Konto; der Entwickler nennt Impish Llama 3B (Q4_K_M), das nach einem Download von etwa 1,9 GB über llama.cpp läuft. Der Pro-Tarif entfernt das tägliche Nachrichtenlimit und schaltet einen optionalen, nur für Erwachsene bestimmten Mature-Modus frei. Grenze: Closed Source, die Aussage zur Verarbeitung auf dem Gerät beruht daher auf dem Entwickler.',
          '[Frankly AI](/de/power-local-llm/frankly-ai-review): On-Device-Modelle mit Aufgaben-Personas und ohne Konto; kostenloses Tageslimit. Grenze: Die Personas sind aufgabenorientiert, und Pro schaltet den Rest der App frei.',
          '[Layla](/de/power-local-llm/layla-review): persona-gesteuerter KI-Begleiter mit Rollenspiel-Charakteren, Stimmen und Bilderzeugung auf dem Gerät; 19,99 $ einmalig. Grenze: Es gibt einen optionalen, separat zu aktivierenden Layla-Cloud-Modus.',
          '[Secret AI](/de/power-local-llm/secret-ai-review): eigene Charaktere auf GGUF-, MNN- und MLX-Modellen; der Hersteller sagt, Chats, Charaktere und Fotos blieben privat. Grenze: Laut Datenschutzerklärung können MCP-Werkzeuge und Remote-Server Daten vom Gerät senden.',
          '[HiWaifu](/de/power-local-llm/hiwaifu-review): Rollenspiel mit Langzeitgedächtnis, Lorebooks und Gruppenchats, ab 18 Jahren. Grenze: Sie scheint ein Cloud-Dienst zu sein, und ihr Eintrag sagt nicht, wo das Modell läuft.',
          '[Swerve](/de/power-local-llm/swerve-ai-review): Geschichten- und Charakter-Chat mit Community-Charakteren und Verzweigungen. Grenze: Laut Eintrag ist sie ein Online-Dienst, keine KI auf dem Gerät.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Sicherheitshinweise in einfachen Worten. Erstens, das Alter: Mehrere dieser Apps tragen eine App-Store-Freigabe ab 18 oder einen Modus nur für Erwachsene, und ein On-Device-Modell hat keinen serverseitigen Filter, auf den Sie sich verlassen können. Zweitens, die Privatsphäre: Cloud-Rollenspiel-Apps senden Ihre Unterhaltungen an einen Dienst, und auch lokale Apps können Analysedaten senden. Drittens, emotionale Abhängigkeit: Begleiter-Chat kann sich persönlich anfühlen, und das ist ein Designmerkmal, keine Beziehung. Viertens, echte Daten: Geben Sie nie Ihre Adresse, Gesundheitsdetails oder private Informationen anderer Personen in einen Rollenspiel-Chat ein. Nutzen Sie auf dem iPhone eines Kindes die Inhalts- und App-Altersgrenzen der Bildschirmzeit von Apple, statt den eigenen Einstellungen einer App zu vertrauen.',
          },
        ],
      },
      smartHome: {
        id: 'smart-home-agents',
        title: 'Smart Home und Agenten',
        content:
          '**Auf dem iPhone sind Smart-Home-KI und Agenten fast immer Clients für Software, die auf einem Heimserver läuft, weil iOS ein Modell oder einen Agenten nicht im Hintergrund weiterlaufen lässt.** Das Telefon ist Mikrofon, Bildschirm und Fernbedienung; der Heimserver erledigt die lang laufende Arbeit. Für einen ehrlichen Blick darauf, ob autonome lokale Agenten praktikabel sind, siehe [Funktionieren autonome lokale Agenten wirklich?](/de/power-local-llm/autonomous-local-agents-actually-work).',
        items: [
          '[Home Assistant Assist](/de/power-local-llm/home-assistant-assist-review): Sprachassistent in Home Assistant, vollständig lokal mit Whisper, Piper und Wyoming, mit optionalen Cloud- und Ollama-LLM-Agenten. Grenze: keine eigenständige App; die vollständige lokale Pipeline braucht Home Assistant OS.',
          '[Scrypted](/de/power-local-llm/scrypted-review): Open-Source-Plattform für Kameras und NVR, die Kameras an HomeKit, Google Home und Home Assistant streamt, mit optionalen lokalen LLM-Zusammenfassungen über llama.cpp. Grenze: läuft auf Ihrem eigenen Server, und Kameraaufnahmen anderer Personen begründen vielerorts rechtliche Pflichten.',
          '[Nekoni](/de/power-local-llm/nekoni-review): selbst gehosteter persönlicher Agent (Ollama, Dokumente, geplante Skills) auf einem Computer, der Ihnen gehört, mit dem Sie über eine direkte verschlüsselte Verbindung vom iPhone oder Browser aus chatten. Grenze: braucht einen Mac oder Linux-Rechner, der durchgehend läuft.',
          '[Kai 9000](/de/power-local-llm/kai-9000-review) und [LLM Hub](/de/power-local-llm/llm-hub-review): Assistenten mit persistentem Gedächtnis beziehungsweise einem MCP-fähigen Agenten. Grenze: Werkzeugnutzung und Websuche erzeugen Netzwerkaufrufe, sie sind also keine Offline-Funktionen.',
          '[Atomic Bot](/de/power-local-llm/atomic-bot-review): verpackt das Open-Source-Agenten-Framework [OpenClaw-Review](/de/power-local-llm/openclaw-review) für Desktop und Mobilgeräte und kann lokal oder in der Cloud laufen. Grenze: in diesem Leitfaden als ruhend markiert (letztes Update 26. Mai 2026).',
        ],
      },
      remote: {
        id: 'remote-mode',
        title: 'Remote-Modus: Das iPhone als Thin Client für den eigenen Server',
        content:
          '**Wenn Ihr iPhone für das gewünschte Modell zu klein ist, führen Sie das Modell auf einem Mac oder PC zu Hause aus und nutzen Sie das iPhone als Bildschirm.** Das ist der übliche Weg zu Modellen mit 7B–70B von einem iPhone aus. Die Download-Seite von Ollama nennt macOS, Windows und Linux und keine iPhone-App, der Server liegt also woanders (unsere iPhone-Bestenliste hält das fest). Zur Serverseite siehe [Leitfaden zu lokalen LLMs auf Apple Silicon](/de/local-llms/apple-silicon-local-llm-guide-2026), [MLX vs. Ollama vs. llama.cpp auf dem Mac](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) und [Run- und Serve-Werkzeuge im Vergleich](/de/power-local-llm/local-llm-run-serve-compared).',
        columns: ['App', 'Verbindet mit', 'Lokale Modelle am Telefon'],
        rows: [
          {
            'App': '[Reins](/de/power-local-llm/reins-review)',
            'Verbindet mit': 'Ollama, LM Studio, OpenAI-kompatibel',
            'Lokale Modelle am Telefon': 'Ja, MLX-Modelle',
          },
          {
            'App': '[Enchanted](/de/power-local-llm/enchanted-review)',
            'Verbindet mit': 'Nur Ollama',
            'Lokale Modelle am Telefon': 'Nein',
          },
          {
            'App': '[OpenClient](/de/power-local-llm/openclient-review)',
            'Verbindet mit': 'Ollama, LiteLLM, OpenAI-kompatibel',
            'Lokale Modelle am Telefon': 'Nein',
          },
          {
            'App': '[Chapper](/de/power-local-llm/chapper-review)',
            'Verbindet mit': 'LM Studio, Ollama, llama.cpp-Server',
            'Lokale Modelle am Telefon': 'Ja, Zusatzkauf für 4,99 $',
          },
          {
            'App': '[Tina](/de/power-local-llm/tina-review)',
            'Verbindet mit': 'Ollama, llama.cpp, ComfyUI',
            'Lokale Modelle am Telefon': 'Ja',
          },
          {
            'App': '[LM Mini](/de/power-local-llm/lm-mini-review)',
            'Verbindet mit': 'LM Studio, Ollama, Jan AI, oMLX',
            'Lokale Modelle am Telefon': 'Ja',
          },
          {
            'App': '[Arbiter](/de/power-local-llm/arbiter-local-ai-chat-review)',
            'Verbindet mit': 'LM Studio, Ollama, Arbiter für Mac',
            'Lokale Modelle am Telefon': 'Ja',
          },
          {
            'App': '[LocalMind](/de/power-local-llm/localmind-review)',
            'Verbindet mit': 'Ollama, LM Studio, OpenRouter',
            'Lokale Modelle am Telefon': 'Ja',
          },
          {
            'App': '[Liquid Apollo](/de/power-local-llm/liquid-apollo-review)',
            'Verbindet mit': 'LM Studio, Ollama, OpenRouter',
            'Lokale Modelle am Telefon': 'Ja, LFM2',
          },
          {
            'App': '[Locally AI](/de/power-local-llm/locally-ai-review)',
            'Verbindet mit': 'LM Studio auf einem Mac (LM Link)',
            'Lokale Modelle am Telefon': 'Ja',
          },
          {
            'App': '[MLXHub](/de/power-local-llm/mlxhub-review)',
            'Verbindet mit': 'Stellt ein Modell im WLAN bereit (Plus)',
            'Lokale Modelle am Telefon': 'Ja',
          },
          {
            'App': '[Nekoni](/de/power-local-llm/nekoni-review)',
            'Verbindet mit': 'Agent auf Ihrem eigenen Computer',
            'Lokale Modelle am Telefon': 'Nein',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Unterwegs brauchen Sie einen sicheren Weg zum Server. Ein privates Mesh-VPN wie Tailscale ist eine verbreitete Wahl, weil Ollama standardmäßig keine Authentifizierung verlangt und nicht über einen Router-Port dem öffentlichen Internet ausgesetzt werden sollte. Prüfen Sie im Review und in den Einstellungen jedes Clients, ob HTTPS und API-Schlüssel unterstützt werden, bevor Sie sich verbinden.',
          },
          {
            type: 'tip',
            text:
              'Mehrere der obigen Clients können laut eigener Angabe auch Modelle auf dem Telefon laden, was sie zu einer guten Einzel-App macht: kleines Modell offline, großes Modell zu Hause. Lesen Sie [Lokale KI hinter einer Firewall und offline](/de/power-local-llm/local-ai-behind-firewall-offline-2026) für Firewall- und Offline-Setups.',
          },
        ],
      },
      developers: {
        id: 'developer-paths',
        title:
          'Entwicklerwege: Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch und Foundation Models',
        content:
          '**Entwickler, die KI-Funktionen für das iPhone bauen, wählen zwischen Apples eigenem Modell, Apples Runtimes für das eigene Modell und plattformübergreifenden Engines.** Die Wahl entscheidet, welche Telefone, Sprachen und Store-Regeln gelten. Dieses Kapitel dient nur der Orientierung; lesen Sie die Dokumentation jedes Projekts, bevor Sie bauen.',
        items: [
          '**Foundation-Models-Framework:** Apples native Swift-API für das On-Device-Modell, mit Bildern, Vision-Werkzeugen, Dynamic Profiles und, über ein Language-Model-Protokoll, Cloud-Anbietern (Apple, WWDC26-iOS-Leitfaden). Erfordert Hardware mit Apple Intelligence. Doku: [Foundation Models](https://developer.apple.com/documentation/FoundationModels).',
          '**Core ML:** Apples Framework zum Ausführen konvertierter Modelle auf CPU, GPU und Neural Engine; der bewährte Weg für Bildverarbeitung, Audio und kleine Modelle. [AI CutoutWerk](/de/power-local-llm/ai-cutoutwerk-review) liefert ein Core-ML-Segmentierungsmodell mit. Doku: [Core ML](https://developer.apple.com/documentation/coreml).',
          '**Core AI:** ein neues Framework, das Apple mit iOS 27 eingeführt hat, um eigene Modelle auf dem Gerät zu betreiben, mit Unified Memory und der Neural Engine sowie Kompilierung im Voraus. Für die meisten Apps in diesem Leitfaden zu neu; siehe den [WWDC26-iOS-Leitfaden](https://developer.apple.com/wwdc26/guides/ios/).',
          '**MLX Swift:** Apples MLX-Array-Framework für Swift, hinter [Locally AI](/de/power-local-llm/locally-ai-review), [fullmoon](/de/power-local-llm/fullmoon-review) und [MLXHub](/de/power-local-llm/mlxhub-review). [mlx-swift](https://github.com/ml-explore/mlx-swift). Für die Python-Seite siehe [MLX-LM erklärt](/de/power-local-llm/mlx-lm-explained).',
          '**llama.cpp:** die C/C++-Engine mit Metal, die GGUF-Dateien ausführt, hinter [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) und [Pocket AI](/de/power-local-llm/pocket-ai-review). [llama.cpp](https://github.com/ggml-org/llama.cpp).',
          '**MLC LLM:** Compiler-basierte Runtime mit Dokumentation zur iOS-Bereitstellung und der Referenz-App [MLC Chat](/de/power-local-llm/mlc-chat-review). Siehe [MLC LLM](/de/power-local-llm/mlc-llm-explained) und die [MLC-iOS-Dokumentation](https://llm.mlc.ai/docs/deploy/ios.html).',
          '**ExecuTorch:** PyTorchs On-Device-Runtime, genutzt über React Native ExecuTorch in [Private Mind](/de/power-local-llm/private-mind-review) und unterstützt von [Noema](/de/power-local-llm/noema-review). [ExecuTorch](https://github.com/pytorch/executorch).',
          '**LiteRT-LM:** Googles Runtime hinter [Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review) ([LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)).',
          '**SDKs:** [RunAnywhere](/de/power-local-llm/runanywhere-review) (LLM, Sprache-zu-Text, Text-to-Speech und Sprachaktivitätserkennung; eigene Lizenz mit kommerziellen Bedingungen), [Llamatik](/de/power-local-llm/llamatik-review) (Kotlin Multiplatform, MIT) und [SwiftLM](/de/power-local-llm/swiftlm-review) (Swift-MLX-Server für Macs mit Apple Silicon mit der iOS-Begleit-App SwiftBuddy).',
          '**TestFlight-Betas:** ein kostenloser Weg, frühe Builds an Tester zu verteilen; Builds laufen ab, planen Sie das ein. Apples App-Review-Regeln gelten weiterhin für den Release-Build.',
        ],
      },
      privacy: {
        id: 'privacy-telemetry',
        title: 'Datenschutz und Telemetrie in der Praxis',
        content:
          '**„Läuft auf Ihrem Gerät“ und „sendet nichts“ sind verschiedene Aussagen, und nur die zweite ist eine Datenschutzgarantie.** Apples Datenschutz-Labels im App Store werden vom Entwickler ausgefüllt, sie beschreiben also, was der Entwickler über die App sagt. Ein On-Device-Modell kann dennoch in einer App stecken, die Absturzberichte, Nutzungsereignisse, optionale Websuchen oder Modell-Downloads sendet. Alle Datenschutzaussagen zu Apps stammen hier aus der Datenschutzerklärung, dem App-Store-Label oder der Herstellerseite der jeweiligen App, wie im verlinkten Review zusammengefasst, und wurden nicht per Netzwerkanalyse überprüft. Eine ausführlichere Checkliste finden Sie in [Sicherheits- und Datenschutz-Checkliste für lokale LLMs](/de/local-llms/local-llm-security-privacy-checklist).',
        items: [
          '**Was „Zero Telemetry“ bedeuten kann:** kein Analyse-SDK in der App. Es umfasst nicht den Modell-Download (der Host sieht Ihre Anfrage), den App Store, optionale Websuche, Remote-Server, mit denen Sie sich verbinden, oder Backups, die App-Daten enthalten.',
          '**Labels in unseren Reviews:** [Oscilla](/de/power-local-llm/oscilla-review) trägt Apples Label „Daten werden nicht erfasst“; [Google AI Edge Gallery](/de/power-local-llm/google-ai-edge-gallery-review) zeigt auf ihrem Label einige Gerätediagnosen; [MemoryAI](/de/power-local-llm/memoryai-review) und [Llamatik](/de/power-local-llm/llamatik-review) senden laut ihren Erklärungen Nutzungsereignisse oder Analysedaten und Absturzberichte ohne Chat-Inhalte.',
          '**Optionale Funktionen, die „offline“ aufheben:** Websuche in [Compass - Local AI](/de/power-local-llm/compass-local-ai-review) (DuckDuckGo oder Brave), der Web-Schalter in [Private Mind](/de/power-local-llm/private-mind-review), MCP-Werkzeuge in [Secret AI](/de/power-local-llm/secret-ai-review) und der OpenRouter-Modus in [Liquid Apollo](/de/power-local-llm/liquid-apollo-review).',
          '**Standardmäßig Cloud:** [Kai 9000](/de/power-local-llm/kai-9000-review) sendet Nachrichten laut Review standardmäßig an einen Cloud-Dienst und läuft erst lokal, nachdem Sie ein On-Device-Modell heruntergeladen haben; [Swerve](/de/power-local-llm/swerve-ai-review) ist als Online-Dienst dokumentiert, und [HiWaifu](/de/power-local-llm/hiwaifu-review) scheint einer zu sein (ihr Eintrag sagt nicht, wo das Modell läuft); [AquaVoice](/de/power-local-llm/aquavoice-review) ist Cloud-Diktat.',
          '**Abweichung bei Erklärung und Version:** [LM Mini](/de/power-local-llm/lm-mini-review) hat laut Datenschutzerklärung eine Fassung vom August 2025, die nur ihre Verbindung zu LM Studio beschreibt, und [Secret AI](/de/power-local-llm/secret-ai-review) hat eine Erklärung, die zuletzt im Mai 2025 aktualisiert wurde, bevor sie Werkzeuge ergänzte. Prüfen Sie das Datum gegen die App-Version.',
          '**Prüfen Sie es selbst, in drei Schritten:** (1) Laden Sie das Modell per WLAN herunter, schalten Sie dann den Flugmodus ein und testen Sie die App. (2) Nutzen Sie das Telefon eine Woche lang normal und öffnen Sie dann Einstellungen > Datenschutz & Sicherheit > App-Datenschutzbericht, der laut Apple zeigt, wie Apps Berechtigungen nutzen und welche Netzwerkaktivität sie haben. (3) Lesen Sie das Datenschutz-Label und die Erklärung auf Analysedaten, und bevorzugen Sie eine Open-Source-App, wenn Sie den Code einsehen möchten.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Die Reviews von PromptQuorum geben an, was die Quellen der jeweiligen App sagen und ob wir sie getestet haben; wo ein Review „nicht praktisch getestet“ sagt, sind die Datenschutzaussagen die des Entwicklers, nicht unsere. Dieser Leitfaden hat bei keiner App Netzwerkmitschnitte durchgeführt.',
          },
        ],
      },
      batteryThermal: {
        id: 'battery-thermal-memory',
        title: 'Akku, Wärme und Speichergrenzen',
        content:
          '**Das Erzeugen von Text hält den Chip beschäftigt, rechnen Sie daher mit spürbarer Wärme und Akkuverbrauch, solange das Modell läuft; gelegentliche Nutzung kostet wenig.** PromptQuorum hat bei keinem iPhone Leistungsaufnahme oder Akkuverbrauch gemessen, und wir haben keinen veröffentlichten Wert gefunden, den wir zitieren könnten.',
        items: [
          '**Wärme:** Dauerhaftes Erzeugen kann dazu führen, dass iOS Taktraten senkt, sodass die Tokens pro Sekunde fallen. Das Timing hängt von Telefon, Hülle, Laden und Raumtemperatur ab, und wir haben es nicht gemessen.',
          '**Richtlinie 2.4.2:** Apple sagt Entwicklern, Apps sollten den Akku nicht schnell entleeren und keine übermäßige Wärme erzeugen, daher begrenzen gut programmierte Apps die Länge oder pausieren lange Läufe.',
          '**Speicher:** Ein Modell liegt im RAM, solange es geladen ist. Wenn iOS Speicher für eine andere App braucht, kann es die Chat-App beenden, und der Gesprächsstatus kann verloren gehen; schließen Sie andere speicherhungrige Apps, bevor Sie ein Modell laden.',
          '**Laden während des Erzeugens** erzeugt zusätzliche Wärme; pausieren Sie, wenn sich das Telefon heiß anfühlt, und meiden Sie direktes Sonnenlicht oder ein heißes Auto.',
          '**Speicherplatz:** Ein Modell mit 3–4B belegt etwa 2,5–3,7 GB, drei Apps mit je drei Modellen belegen also grob 10 GB. Behalten Sie eine App und ein oder zwei Modelle.',
          '**Der Stromsparmodus** kann das Erzeugen verlangsamen, weil iOS die Leistung senkt, um Akku zu sparen; schalten Sie ihn für lange Sitzungen aus.',
        ],
      },
      partly: {
        id: 'works-partly',
        title: 'Was nur teilweise funktioniert',
        content:
          '**„Teilweise“ bedeutet, dass die Funktion auf dem iPhone existiert, aber mit einer Grenze, die Sie kennen sollten, bevor Sie eine Gewohnheit darauf aufbauen.**',
        items: [
          '**Freihändige Sprache mit Siri:** Kurzbefehle können eine App aufrufen, aber Siri bleibt Siri; Sie können kein lokales Modell zum System-Assistenten machen. Apples Siri AI ist eine eigene iOS-27-Beta, die zunächst nicht in der EU verfügbar ist.',
          '**Bilderzeugung:** möglich mit kleinen Diffusionsmodellen, aber langsam, speicherhungrig und warm; [Draw Things](/de/power-local-llm/draw-things-review) bietet auch einen optionalen Cloud-Modus.',
          '**Fotosuche:** Der KI-Schritt ist auf dem Telefon Opt-in ([Ente Photos](/de/power-local-llm/ente-photos-review)) oder läuft auf einem Server, den Sie hosten ([Immich](/de/power-local-llm/immich-review)).',
          '**Notizen und Lesezeichen:** Die iPhone-App ist ein Client; die Modellarbeit geschieht auf einem Server oder bei einem Anbieter Ihrer Wahl.',
          '**Agenten:** Kurze Aufgaben im Vordergrund funktionieren; lang laufende oder geplante Agenten brauchen einen Heimserver ([Nekoni](/de/power-local-llm/nekoni-review)).',
          '**Gesundheitsfragen:** möglich mit Apples On-Device-Modell ([Pajdo](/de/power-local-llm/pajdo-review)), aber kein Ersatz für medizinischen Rat.',
          '**Lange Dokumente:** Kleine Modelle haben kleine Kontextfenster, große PDFs brauchen daher Aufteilung oder einen Server.',
        ],
      },
      notPossible: {
        id: 'not-possible',
        title: 'Auf dem iPhone nicht oder noch nicht möglich',
        content:
          '**Das sind die Wünsche, die Menschen am häufigsten an lokale KI auf dem iPhone herantragen und die heute keine geprüfte iPhone-App erfüllt.** Manche sind harte Grenzen der Hardware oder der App-Store-Regeln; andere sind Lücken, die sich schließen können, wenn Apple und App-Hersteller neue Frameworks wie Core AI ausliefern.',
        columns: ['Wunsch', 'Status', 'Grund', 'Alternative'],
        rows: [
          {
            'Wunsch': 'Modell mit 30B–70B auf dem Telefon',
            'Status': 'Nicht möglich',
            'Grund': 'Braucht weit mehr RAM als ein iPhone hat',
            'Alternative': 'Remote-Modus zu einem Heimserver',
          },
          {
            'Wunsch': 'Schlussfolgern und Code auf Cloud-Niveau',
            'Status': 'Noch nicht',
            'Grund': 'Kleine Modelle scheitern an mehrstufigen Aufgaben',
            'Alternative': 'Cloud-App für schwierige Fragen',
          },
          {
            'Wunsch': 'Ollama oder Docker auf dem Telefon ausführen',
            'Status': 'Nicht möglich',
            'Grund': 'Keine Ollama- oder Docker-App für das iPhone; Sandbox-Grenzen',
            'Alternative': 'Auf Mac oder PC ausführen',
          },
          {
            'Wunsch': 'Siri durch eigenes Modell ersetzen',
            'Status': 'Nicht möglich',
            'Grund': 'Siri wird vom System kontrolliert',
            'Alternative': 'Kurzbefehle, die eine App aufrufen',
          },
          {
            'Wunsch': 'Dauerhaft aktiver Hintergrund-Agent',
            'Status': 'Nicht möglich',
            'Grund': 'Hintergrunddienste begrenzt (2.5.4)',
            'Alternative': 'Agent auf einem Heimserver',
          },
          {
            'Wunsch': 'Modell auf dem Telefon feinabstimmen',
            'Status': 'Nicht realistisch',
            'Grund': 'Speicher, Wärme, keine App-Werkzeuge',
            'Alternative': 'Auf einem Mac oder einer GPU trainieren',
          },
          {
            'Wunsch': 'Chats mit Mac und iPad synchronisieren',
            'Status': 'Meist nein',
            'Grund': 'Der Verlauf ist in den meisten Apps pro Gerät',
            'Alternative': 'Web-Oberfläche des Servers, z. B. Open WebUI',
          },
          {
            'Wunsch': 'AnythingLLM Mobile auf dem iPhone',
            'Status': 'Noch nicht',
            'Grund': 'iOS-App laut Review unveröffentlicht',
            'Alternative': 'Browser zu Ihrem Server',
          },
          {
            'Wunsch': 'Apple Intelligence auf dem iPhone 14',
            'Status': 'Nicht möglich',
            'Grund': 'Nicht auf Apples Geräteliste',
            'Alternative': 'Modell-Apps von Drittanbietern',
          },
          {
            'Wunsch': 'Musikerzeugung mit Gesang',
            'Status': 'Noch nicht',
            'Grund': 'Murmur erzeugt nur Instrumentalmusik',
            'Alternative': 'Desktop-Werkzeuge',
          },
          {
            'Wunsch': 'Beweis, dass eine App privat ist',
            'Status': 'Nicht durch ein Label',
            'Grund': 'Labels werden vom Entwickler angegeben',
            'Alternative': 'Flugmodus und App-Datenschutzbericht',
          },
        ],
      },
      decision: {
        id: 'decision-path',
        title: 'Entscheidungshilfe: Ich habe dieses iPhone und möchte Folgendes',
        content:
          '**Finden Sie Ihre Zeile nach Telefonstufe und Ziel und öffnen Sie dann das verlinkte Kapitel.** Die Empfehlungen sind Ausgangspunkte aus unseren Reviews, keine Ranglisten; eine App, die im Wartungskapitel als ruhend geführt wird, wird nur genannt, wenn es keine bessere Wahl gibt.',
        columns: ['Wenn Sie haben', 'und möchten', 'Starten Sie hier'],
        rows: [
          {
            'Wenn Sie haben': 'iPhone mit 4 GB (12, 13, SE)',
            'und möchten': 'Allgemeinen Chat',
            'Starten Sie hier': 'Reins oder Enchanted mit einem Heimserver',
          },
          {
            'Wenn Sie haben': 'iPhone mit 6 GB (14, 15)',
            'und möchten': 'Kostenlosen Offline-Chat',
            'Starten Sie hier': 'PocketPal AI mit einem Modell mit 1–2B',
          },
          {
            'Wenn Sie haben': 'iPhone mit 8 GB (16, 17)',
            'und möchten': 'Kostenlosen Offline-Chat',
            'Starten Sie hier': 'PocketPal AI oder Locally AI',
          },
          {
            'Wenn Sie haben': 'iPhone mit 8 GB',
            'und möchten': 'Siri und Kurzbefehle',
            'Starten Sie hier': 'Private LLM oder Locally AI',
          },
          {
            'Wenn Sie haben': 'iPhone mit 12 GB (17 Pro)',
            'und möchten': 'Größtes Modell auf dem Telefon',
            'Starten Sie hier': 'Noema oder Gallery mit Gemma 4',
          },
          {
            'Wenn Sie haben': 'Telefon mit Apple Intelligence',
            'und möchten': 'Keinen Modell-Download',
            'Starten Sie hier': 'Compass oder Locally AI (Apple-Modell)',
          },
          {
            'Wenn Sie haben': 'Beliebiges iPhone',
            'und möchten': 'Besprechungstranskripte',
            'Starten Sie hier': 'Whisper Notes oder Lyonesse',
          },
          {
            'Wenn Sie haben': 'Beliebiges iPhone',
            'und möchten': 'Chat mit ein paar PDFs',
            'Starten Sie hier': 'Private Mind oder MemoryAI',
          },
          {
            'Wenn Sie haben': 'Beliebiges iPhone',
            'und möchten': 'Übersetzung',
            'Starten Sie hier': 'On-Device AI Translator',
          },
          {
            'Wenn Sie haben': 'iPhone mit 8 GB oder mehr',
            'und möchten': 'Bilder aus Text',
            'Starten Sie hier': 'Draw Things',
          },
          {
            'Wenn Sie haben': 'Beliebiges iPhone',
            'und möchten': 'Fotosuche, eigener Server',
            'Starten Sie hier': 'Immich',
          },
          {
            'Wenn Sie haben': 'Beliebiges iPhone, PC zu Hause',
            'und möchten': 'Modelle mit 7B–70B',
            'Starten Sie hier': 'Reins, OpenClient oder LM Mini',
          },
          {
            'Wenn Sie haben': 'Beliebiges iPhone',
            'und möchten': 'Smart-Home-Sprache',
            'Starten Sie hier': 'Home Assistant Assist',
          },
          {
            'Wenn Sie haben': 'Teenager am iPhone',
            'und möchten': 'Sicheren Chat',
            'Starten Sie hier': 'Bildschirmzeit-Limits, dann die Sicherheitshinweise lesen',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Ein Modell nach Dateigröße statt nach RAM-Stufe wählen.** Eine Datei, die sich herunterladen lässt, kann von iOS trotzdem beendet werden; gleichen Sie die Größe mit der Stufentabelle ab und testen Sie mit dem Benchmark der App.',
          '**Cloud-Qualität erwarten.** Nutzen Sie ein kleines Modell für Entwürfe, Zusammenfassungen, Übersetzung und kurze Fragen und ein Cloud- oder Heimserver-Modell für schwieriges Schlussfolgern.',
          '**„Apple Intelligence“ mit „offline“ gleichsetzen.** Apple Intelligence kann Private Cloud Compute nutzen; prüfen Sie, was die Anfrage verarbeitet.',
          '**Einem Datenschutz-Label ohne Test vertrauen.** Führen Sie die Prüfungen mit Flugmodus und App-Datenschutzbericht aus dem Datenschutzkapitel durch.',
          '**Jede App installieren.** Jede App behält eigene Modelldateien im Gigabyte-Bereich; wählen Sie eine App pro Aufgabe.',
          '**Eine App kaufen, die ruhend geworden ist.** Prüfen Sie den Versionsverlauf, besonders bei Apps aus dem Wartungskapitel.',
          '**Einen Heimserver dem Internet aussetzen.** Nutzen Sie ein privates VPN-Mesh; Ollama verlangt standardmäßig keine Authentifizierung.',
          '**Rollenspiel-Apps auf einem gemeinsam genutzten oder Kinder-Telefon ungeprüft lassen.** Lesen Sie zuerst die Altersfreigabe und die Einstellungen für nicht jugendfreie Inhalte.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Geräte, Sprachen, Siri AI und Private Cloud Compute von Apple Intelligence: [Apple Intelligence](https://www.apple.com/apple-intelligence/) (gelesen am 13. November 2026).',
          'App-Review-Richtlinien 2.4.2, 2.5.1, 2.5.2, 2.5.4, 5.1.1 und 5.1.2: [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) (gelesen am 13. November 2026).',
          'Pfad und Inhalt des App-Datenschutzberichts: [Apple Support](https://support.apple.com/en-us/102188).',
          'Engines: [MLX Swift](https://github.com/ml-explore/mlx-swift), [llama.cpp](https://github.com/ggml-org/llama.cpp), [ExecuTorch](https://github.com/pytorch/executorch), [MLC-iOS-Dokumentation](https://llm.mlc.ai/docs/deploy/ios.html), [Core ML](https://developer.apple.com/documentation/coreml), [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM).',
          'iPhone-RAM-Werte und Richtwerte zur Geschwindigkeit sind aus [Beste lokale LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) übernommen; Apple veröffentlicht den iPhone-RAM nicht.',
          'App-Angaben (Preis, Plattform, Version, Herstellerangaben) stammen aus den verlinkten PromptQuorum-Reviews und den Verzeichniskacheln; Update-Daten ruhender Apps stammen aus den Kacheln.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ein iPhone KI vollständig offline ausführen?',
            a:
              'Ja, laut ihren Einträgen und Reviews. Nach einem einmaligen Modell-Download per WLAN beantworten Apps wie PocketPal AI, Private LLM und Locally AI Fragen ohne Verbindung. Apple Intelligence führt ebenfalls ein Modell auf dem Gerät aus, kann aber für größere Anfragen Private Cloud Compute nutzen, ist also nicht garantiert offline. Testen Sie jede App im Flugmodus.',
          },
          {
            q: 'Welches iPhone brauche ich für lokale KI?',
            a:
              'Ein iPhone mit 6 GB RAM oder mehr für kleine Modelle mit 1–2B und mit 8 GB oder mehr für Modelle mit 3–4B. Apple veröffentlicht den RAM nicht, nutzen Sie daher die berichteten Stufen in diesem Leitfaden. Für Apple Intelligence brauchen Sie laut Apples Geräteliste ein iPhone 15 Pro oder neuer.',
          },
          {
            q: 'Ist lokale KI auf dem iPhone wirklich privat?',
            a:
              'Der Chat kann auf dem Gerät bleiben, aber der Datenschutz hängt von der App ab. Labels werden vom Entwickler angegeben, und mehrere geprüfte Apps senden Absturzberichte, Nutzungsereignisse oder optionale Webanfragen. Prüfen Sie das mit dem Flugmodus und unter Einstellungen > Datenschutz & Sicherheit > App-Datenschutzbericht.',
          },
          {
            q: 'Kann ich Ollama auf meinem iPhone ausführen?',
            a:
              'Nein. Ollama bietet Downloads für macOS, Windows und Linux an, und es gibt keinen Ollama- oder Docker-Server für das iPhone. Führen Sie Ollama auf einem Computer aus und verbinden Sie sich von einem iPhone-Client wie Reins, Enchanted oder OpenClient.',
          },
          {
            q: 'Wie groß kann ein Modell auf einem iPhone sein?',
            a:
              'Etwa 3–4B Parameter bei 4 Bit auf Telefonen mit 8 GB, Modelle mit 7–8B in Low-Bit-Form nur auf Telefonen mit 12 GB und langsam. Telefone mit 6 GB eignen sich am besten für Modelle mit 1–2B. Für größere Modelle nutzen Sie den Remote-Modus mit einem Heimserver.',
          },
          {
            q: 'Verbraucht lokale KI den Akku?',
            a:
              'Beim Erzeugen ja: Dauerhaftes Erzeugen hält den Prozessor beschäftigt und entleert den Akku deutlich schneller als der Leerlauf, und das Telefon kann warm werden. PromptQuorum hat den genauen Verbrauch nicht gemessen. Gelegentliche Fragen kosten wenig, und ein geladenes, aber untätiges Modell verbraucht wenig Strom.',
          },
          {
            q: 'Was ist die beste kostenlose lokale KI-App für das iPhone?',
            a:
              'PocketPal AI ist in unserer Bestenliste der kostenlose Open-Source-Standard, mit Locally AI und Google AI Edge Gallery als kostenlosen Alternativen. Die richtige App hängt von Ihrer Aufgabe ab; nutzen Sie die Entscheidungshilfe in diesem Leitfaden.',
          },
          {
            q: 'Wie unterscheidet sich Apple Intelligence von diesen Apps?',
            a:
              'Apple Intelligence ist Apples eingebautes Modell für Systemfunktionen und für Apps, die das Foundation-Models-Framework nutzen; Sie können sein Modell nicht austauschen. Mit den Apps in diesem Leitfaden können Sie Modelle auswählen und herunterladen, und einige, wie Locally AI, können auch Apples Modell vorschalten.',
          },
          {
            q: 'Kann ich auf dem iPhone offline mit meinen PDFs chatten?',
            a:
              'Ja bei wenigen Dateien, laut ihren Einträgen und Reviews, mit Apps wie Private Mind, MemoryAI, Noema oder LocalMindAI. Kleine Modelle haben kurze Kontextfenster, daher können lange Dokumente unvollständig zusammengefasst werden. Für große Bibliotheken nutzen Sie einen Heimserver.',
          },
          {
            q: 'Kann ich meinen Heimserver von außerhalb des Hauses nutzen?',
            a:
              'Ja, über ein privates VPN-Mesh wie Tailscale oder einen anderen sicheren Tunnel, mit einer Client-App, die Ihren Server unterstützt. Öffnen Sie Ollama nicht zum öffentlichen Internet; es verlangt standardmäßig keine Authentifizierung.',
          },
          {
            q: 'Kann ein iPhone offline Bilder erzeugen?',
            a:
              'Ja, laut ihren Einträgen und Reviews, mit Apps wie Draw Things, Genva und Haplo AI, nach dem Download von Modellen im Gigabyte-Bereich. Die Erzeugung ist langsamer als auf einer Desktop-GPU und erwärmt das Telefon; Draw Things bietet auch einen optionalen Cloud-Modus.',
          },
          {
            q: 'Sind Rollenspiel- und Begleiter-Apps für Teenager sicher?',
            a:
              'Nicht automatisch. Mehrere tragen eine Freigabe ab 18 oder Modi nur für Erwachsene, manche sind Cloud-Dienste, die Unterhaltungen speichern, und On-Device-Modelle haben keinen serverseitigen Filter. Nutzen Sie die Bildschirmzeit und die App-Altersgrenzen von Apple und lesen Sie die Sicherheitshinweise in diesem Leitfaden.',
          },
          {
            q: 'Funktioniert lokale KI auf dem iPad?',
            a:
              'Meistens ja. Viele Apps in diesem Leitfaden nennen iPad-Unterstützung, und es gilt dieselbe RAM-Regel. Siehe die iPad-spezifischen Hinweise in [KI auf dem Tablet betreiben](/de/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: 'Wie schneidet das iPhone im Vergleich zu Android bei lokaler KI ab?',
            a:
              'Das iPhone ist einfacher zu starten und stärker eingeschränkt; Android erlaubt Terminal-Apps und bietet mehr Open-Source-Auswahl, unterscheidet sich aber je nach Telefon. Vergleichen Sie in [Leitfaden Lokale KI auf Android](/de/power-local-llm/local-ai-on-android-guide) und [Galaxy vs. iPhone On-Device-KI](/de/local-llms/galaxy-vs-iphone-on-device-ai-2026).',
          },
          {
            q: 'Nutzen Apps Apples Modell auch auf älteren iPhones?',
            a:
              'Nein. Apple Intelligence ist auf die Geräte auf Apples Liste beschränkt, beginnend mit dem iPhone 15 Pro. Nutzen Sie auf älteren iPhones Apps, die eigene Modelle mitbringen, innerhalb der RAM-Grenzen.',
          },
        ],
      },
      related: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Beste lokale LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026): Empfehlungen in Rangfolge, Richtwerte zur Geschwindigkeit und ein RAM-Leitfaden für das iPhone.',
          '[Leitfaden Lokale KI auf Android](/de/power-local-llm/local-ai-on-android-guide): der Schwester-Plattformleitfaden für Android.',
          '[Beste lokale LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026): Android-Apps in Rangfolge.',
          '[Galaxy vs. iPhone On-Device-KI](/de/local-llms/galaxy-vs-iphone-on-device-ai-2026): On-Device-KI von iPhone und Galaxy im Vergleich.',
          '[KI auf dem Tablet betreiben](/de/power-local-llm/run-ai-on-tablet-ipad-android): iPad und Android-Tablets.',
          '[Beste mobile LLM-Modelle: Phi-4 Mini vs. Gemma vs. SmolLM](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm): welche kleinen Modelle sich herunterzuladen lohnen.',
          '[Mobile lokale LLMs](/de/local-llms/mobile-local-llms): Grundlagen mobiler lokaler LLMs.',
          '[Apple On-Device-KI vs. lokale LLMs](/de/local-llms/apple-on-device-ai-vs-local-llms): Apples On-Device-KI gegenüber offenen lokalen Modellen.',
          '[Lokalen Sprachassistenten auf dem Telefon bauen](/de/power-local-llm/voice-assistant-local-mobile-offline): Offline-Sprache auf einem Telefon.',
          '[Chat-Assistenten im Vergleich](/de/power-local-llm/local-llm-chat-assistants-compared), [Sprach- und Audio-Apps im Vergleich](/de/power-local-llm/local-llm-voice-audio-compared), [Bild- und Video-Apps im Vergleich](/de/power-local-llm/local-llm-images-video-compared) und [Wissens- und Retrieval-Apps im Vergleich](/de/power-local-llm/local-llm-knowledge-retrieval-compared): Kategorievergleiche.',
          '[Verzeichnis lokaler KI-Apps](/de/directory): jede lokale KI-App im Verzeichnis.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    last_full_refresh: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'IA locale sur iPhone en 2026 : ce qui est possible, ce qui ne l\'est pas, et les applications iPhone que nous couvrons',
    seoTitle: 'IA locale sur iPhone en 2026 : possibilités et limites',
    intro:
      'Un iPhone récent peut exécuter un modèle de langage utile hors ligne une fois le modèle téléchargé, mais seulement des modèles de petite taille : environ 1 à 4 milliards de paramètres avec 6 à 8 GB de RAM. Ce guide décrit ce que l\'IA locale sur iPhone peut faire, ce qui n\'est possible qu\'en partie et ce qui est tout simplement impossible, explique Apple Intelligence, le framework Foundation Models et les règles de l\'App Store, et associe les applications iPhone que nous couvrons dans le répertoire PromptQuorum à l\'usage qui leur correspond. Les informations sur les applications proviennent des analyses de PromptQuorum, fondées sur des sources publiques sauf mention contraire d\'un test pratique dans l\'article concerné ; ce guide n\'a re-testé aucune application.',
    metaDescription:
      'Ce que l\'IA locale sur iPhone peut et ne peut pas faire en 2026 : limites de puce et de RAM, Apple Intelligence, règles App Store et apps par usage.',
    heroImage: '/images/local-ai-on-iphone-guide-hero-fr.webp',
    twitterDescription:
      'IA locale sur iPhone en 2026 : carte des capacités, niveaux de RAM, Apple Intelligence, limites de l\'App Store, liste de l\'impossible et applications iPhone couvertes par usage.',
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM non publiée par Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB de RAM selon les informations rapportées)',
      'iPhone 16 Pro (A18 Pro, 8 GB de RAM selon les informations rapportées)',
      'iPhone 15 Pro (A17 Pro, 8 GB de RAM selon les informations rapportées)',
      'iPhone 14 Pro (A16, 6 GB de RAM selon les informations rapportées)',
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
      'Propriétaires d\'iPhone et d\'iPad, utilisateurs soucieux de leur vie privée, voyageurs et développeurs qui veulent savoir ce que l\'IA sur l\'appareil peut et ne peut pas faire, et quelle application installer pour chaque usage.',
    readTime: '45 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'IA locale sur iPhone',
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
      '**Un iPhone récent peut exécuter hors ligne un petit modèle de langage (environ 1 à 4 milliards de paramètres avec 6 à 8 GB de RAM) après un téléchargement unique : conversation, résumés, traduction, dictée, questions sur des documents et petites tâches d\'image ; il ne peut ni exécuter des modèles de 30B et plus, ni remplacer Siri, ni faire tourner des agents en arrière-plan.** Apple Intelligence ajoute un modèle intégré sur l\'iPhone 15 Pro et les modèles plus récents, et il n\'existe ni serveur Ollama ni Docker sur l\'iPhone.',
    quickAnswerTop: {
      fr: {
        question: 'Que peut faire l\'IA locale sur un iPhone ?',
        answer:
          'Un iPhone récent peut exécuter hors ligne des modèles de 1 à 4 milliards de paramètres pour la conversation, les résumés, la traduction, la dictée, les questions sur des documents et de petites tâches d\'image. Il ne peut ni exécuter des modèles de 30B et plus, ni remplacer Siri, ni maintenir des agents actifs en arrière-plan. Apple Intelligence ajoute un modèle intégré sur l\'iPhone 15 Pro et les modèles plus récents.',
        bullets: [
          '6 GB de RAM : modèles de 1-2B ; 8 GB : 3-4B ; 12 GB : 4B confortablement',
          'Apple Intelligence exige un iPhone 15 Pro ou plus récent',
          'Ni Ollama, ni Docker, ni serveur Linux sur le téléphone',
          'Utilisez un serveur domestique pour les modèles de 7B à 70B en mode distant',
          'Vérifiez la confidentialité avec le mode Avion et le Rapport de confidentialité des apps',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'Points clés',
        anchor: '#key-takeaways',
      },
      {
        label: 'Par où commencer : trois applications à installer',
        anchor: '#start-here',
      },
      {
        label: 'Six réponses rapides avant d\'installer',
        anchor: '#quick-answers',
      },
      {
        label: 'Faits rapides',
        anchor: '#quick-facts',
      },
      {
        label: 'Carte des capacités : ce que l\'IA locale sur iPhone sait faire',
        anchor: '#capability-map',
      },
      {
        label: 'Puce et RAM en pratique : quel iPhone exécute quel modèle',
        anchor: '#iphone-hardware',
      },
      {
        label: 'Neural Engine, GPU et CPU : ce qui exécute réellement le modèle',
        anchor: '#chips-engines',
      },
      {
        label: 'Niveau de téléphone, application et taille de modèle en un coup d\'œil',
        anchor: '#tier-app-model',
      },
      {
        label: 'Votre premier modèle local en 15 minutes',
        anchor: '#first-run-15-minutes',
      },
      {
        label: 'Apple Intelligence et le framework Foundation Models',
        anchor: '#apple-intelligence',
      },
      {
        label: 'Les règles de l\'App Store qui façonnent l\'IA locale sur iPhone',
        anchor: '#app-store-rules',
      },
      {
        label: 'Ce que l\'iPhone fait mieux et moins bien qu\'Android',
        anchor: '#iphone-vs-android',
      },
      {
        label: 'Assistants de conversation : les principales applications sur l\'appareil',
        anchor: '#chat-assistants',
      },
      {
        label: 'Assistants de conversation : applications récentes, de niche et hybrides',
        anchor: '#chat-more',
      },
      {
        label: 'Applications peu actives, obsolètes ou absentes de l\'App Store',
        anchor: '#chat-quiet-apps',
      },
      {
        label: 'Vision et appareil photo : poser des questions sur des photos et des captures d\'écran',
        anchor: '#vision-camera',
      },
      {
        label: 'Voix : dictée, transcription, lecture à voix haute, assistants hors ligne et Siri',
        anchor: '#voice-speech',
      },
      {
        label: 'Documents, PDF et recherche documentaire sur le téléphone',
        anchor: '#documents-rag',
      },
      {
        label: 'Traduction sur l\'appareil',
        anchor: '#translation',
      },
      {
        label: 'Génération d\'images et retouche photo',
        anchor: '#image-generation-editing',
      },
      {
        label: 'Photothèques et recherche dans la galerie',
        anchor: '#photos-gallery-search',
      },
      {
        label: 'Notes, bases de connaissances et favoris',
        anchor: '#notes-knowledge',
      },
      {
        label: 'Santé et bien-être : questions',
        anchor: '#health-wellness',
      },
      {
        label: 'Jeu de rôle et applications de compagnie, avec notes de sécurité du contenu',
        anchor: '#roleplay-companions',
      },
      {
        label: 'Maison connectée et agents',
        anchor: '#smart-home-agents',
      },
      {
        label: 'Mode distant : l\'iPhone comme client léger de votre propre serveur',
        anchor: '#remote-mode',
      },
      {
        label:
          'Pistes pour les développeurs : Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch et Foundation Models',
        anchor: '#developer-paths',
      },
      {
        label: 'Confidentialité et télémétrie : la réalité',
        anchor: '#privacy-telemetry',
      },
      {
        label: 'Batterie, chaleur et limites de mémoire',
        anchor: '#battery-thermal-memory',
      },
      {
        label: 'Ce qui ne fonctionne qu\'en partie',
        anchor: '#works-partly',
      },
      {
        label: 'Impossible ou pas encore possible sur iPhone',
        anchor: '#not-possible',
      },
      {
        label: 'Arbre de décision : j\'ai cet iPhone et je veux ceci',
        anchor: '#decision-path',
      },
      {
        label: 'Erreurs courantes',
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
        label: 'Lectures connexes',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Un iPhone récent peut exécuter un modèle de langage utile sans connexion, une fois le modèle téléchargé.** Le plafond réaliste est un modèle de 1B à 4B de paramètres avec 6 à 8 GB de RAM ; les modèles de 7B-8B en basse précision ne tiennent que sur les iPhone de 12 GB et restent lents. Attendez-vous à de bons résultats pour la rédaction, les résumés, la traduction et les questions-réponses, et à un raisonnement, un code et des connaissances du monde plus faibles qu\'avec les modèles cloud de type ChatGPT.',
          '**La RAM, et non le nom de la puce, détermine la taille du modèle.** Apple ne publie pas la RAM des iPhone ; les chiffres de ce guide sont des caractéristiques largement rapportées. Un iPhone de 4 GB est en dessous du seuil pratique, 6 GB permettent des modèles de 1-2B, 8 GB des modèles de 3-4B, 12 GB offrent une marge supplémentaire.',
          '**Apple Intelligence et le framework Foundation Models forment une seconde voie, distincte.** Le modèle embarqué d\'Apple est déjà sur le téléphone (iPhone 15 Pro et plus récents), ne demande aucun téléchargement et peut être utilisé par des applications tierces. Ce n\'est pas une application de conversation générale à lui seul, et des limites de langue et de région s\'appliquent.',
          '**L\'App Store impose des limites strictes.** Pas de Docker et pas d\'Ollama sur le téléphone ; les applications ne peuvent pas télécharger de code qui modifie leurs fonctionnalités (directive Apple 2.5.2), si bien que chaque moteur est livré dans l\'application et que seuls les fichiers de modèle sont téléchargés. C\'est pourquoi l\'IA locale sur iPhone consiste à installer une application, pas à monter une pile logicielle.',
          '**La plupart des besoins d\'un propriétaire d\'iPhone ont une application analysée dans notre répertoire :** conversation, questions sur l\'appareil photo, dictée et transcription, dialogue avec des documents, traduction, génération d\'images, recherche de photos, notes, questions de santé, jeu de rôle, contrôle de la maison connectée et accès distant à un serveur domestique. Ce guide associe la plupart des applications iPhone de notre répertoire à la capacité qui leur correspond.',
          '**Plusieurs choses sont impossibles ou seulement partiellement possibles :** les modèles de 30B et plus, le raisonnement de qualité « frontière », les agents permanents en arrière-plan, le remplacement de Siri par votre propre modèle, l\'affinage (fine-tuning) sur le téléphone, et une garantie de confidentialité fondée sur la seule étiquette de l\'App Store.',
          '**« Zéro télémétrie » se vérifie, il ne se croit pas sur parole.** Plusieurs applications qui affirment garder la conversation sur l\'appareil envoient tout de même des rapports de plantage, des événements d\'usage ou des requêtes web optionnelles ; le chapitre sur la confidentialité montre comment vérifier avec le mode Avion et le Rapport de confidentialité des apps.',
          '**Commencez petit :** installez une application, téléchargez un modèle de 1 à 2 GB en Wi-Fi, passez en mode Avion et posez une question. Si cela fonctionne, vous avez vérifié tout le parcours hors ligne en moins de 15 minutes.',
        ],
      },
      startHere: {
        id: 'start-here',
        title: 'Par où commencer : trois applications à installer',
        content: [
          '**Peu de temps ? Installez l\'une de ces trois applications, téléchargez un modèle adapté à la RAM de votre iPhone et testez-le une fois en mode Avion.** Ces choix viennent des chapitres et des analyses de ce guide, pas de benchmarks ; le reste du guide explique chaque choix.',
          '**Autres bons points de départ :** sur un iPhone de 12 GB, essayez [Noema](/fr/power-local-llm/noema-review) ou [Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) avec un modèle Gemma 4 ; sur un iPhone de 4 GB, utilisez [Reins](/fr/power-local-llm/reins-review) ou [Enchanted](/fr/power-local-llm/enchanted-review) (signalée comme peu active dans le chapitre sur la maintenance) avec un serveur domestique, car ce niveau est en dessous du seuil pratique pour une conversation sur l\'appareil.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les débutants peuvent commencer avec PocketPal AI, les utilisateurs avancés avec Locally AI et le modèle d\'Apple, les développeurs avec le framework Foundation Models ou MLX Swift ; dans tous les cas, la taille du modèle suit la RAM de l\'iPhone.',
          },
          {
            type: 'plain-terms',
            text: 'Une application, un modèle adapté à votre RAM, un test en mode Avion.',
          },
        ],
        itemHeadings: true,
        columns: ['Votre niveau', 'À installer ou utiliser', 'Premier modèle', 'Pourquoi ce choix'],
        rows: [
          {
            'Votre niveau': 'Débutant',
            'À installer ou utiliser': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Premier modèle': '1-2B avec 6 GB ; 3-4B avec 8 GB',
            'Pourquoi ce choix': 'Gratuite et open source ; le pas-à-pas du premier lancement de ce guide l\'utilise.',
          },
          {
            'Votre niveau': 'Avancé',
            'À installer ou utiliser': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            'Premier modèle': '3-4B avec 8 GB, ou le modèle d\'Apple sans téléchargement',
            'Pourquoi ce choix': 'Convient à Siri et aux Raccourcis sur un iPhone de 8 GB, et peut utiliser le modèle embarqué d\'Apple sur les iPhone compatibles Apple Intelligence.',
          },
          {
            'Votre niveau': 'Développeur',
            'À installer ou utiliser': 'Framework Foundation Models ou MLX Swift',
            'Premier modèle': 'Le modèle embarqué d\'Apple, ou votre propre modèle',
            'Pourquoi ce choix': 'Foundation Models est l\'API Swift native d\'Apple et exige un matériel compatible Apple Intelligence ; MLX Swift exécute votre propre modèle. Le chapitre « Pistes pour les développeurs » couvre le reste.',
          },
        ],
      },
      quickAnswers: {
        id: 'quick-answers',
        title: 'Six réponses rapides avant d\'installer',
        content:
          '**Voici les six questions que les lecteurs posent en premier ; chaque réponse renvoie au chapitre qui l\'explique.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La RAM détermine la taille du modèle, 3 à 5 GB de stockage libre accueillent un premier modèle, et un test en mode Avion montre si l\'application fonctionne hors ligne.',
          },
          {
            type: 'plain-terms',
            text: 'La RAM choisit le modèle, le stockage le garde, le mode Avion le prouve.',
          },
        ],
        items: [
          '**Quel modèle télécharger ?** Suivez votre RAM : 1-2B avec 6 GB, 3-4B avec 8 GB, plus de marge avec 12 GB, où les modèles de 7-8B restent lents. Un iPhone de 4 GB est en dessous du seuil pratique. Voir « Niveau de téléphone, application et taille de modèle en un coup d\'œil ».',
          '**De quel stockage ai-je besoin ?** Libérez d\'abord 3 à 5 GB, car un fichier de modèle pèse 1 à 4 GB ; installez une application à la fois, car les fichiers de modèle en double consomment vite le stockage. Voir « Votre premier modèle local en 15 minutes ».',
          '**Quelle vitesse attendre ?** PromptQuorum n\'a mesuré la vitesse sur aucun iPhone pour ce guide, et les vitesses indicatives de notre comparatif iPhone ne sont pas de nouvelles mesures. Un modèle plus petit répond plus vite ; notez la vitesse sur vos premières questions de test et consultez les réglages de l\'application pour un chiffre en tokens par seconde si elle en affiche un.',
          '**Quelle application est privée ?** Aucune ne peut être présumée privée d\'après la seule étiquette de l\'App Store, car « fonctionne sur votre appareil » et « n\'envoie rien » sont deux affirmations différentes. Lisez l\'étiquette de confidentialité et la politique, faites le test en mode Avion, puis consultez Réglages > Confidentialité et sécurité > Rapport de confidentialité des apps ; les applications open source comme PocketPal AI peuvent être inspectées. Voir « Confidentialité et télémétrie : la réalité ».',
          '**Que puis-je faire sans internet ?** Selon la carte des capacités de ce guide, un iPhone récent peut gérer la conversation, les questions sur l\'appareil photo, la dictée et la transcription, le dialogue avec des documents et la traduction hors ligne une fois le modèle téléchargé ; les modèles de 30B et plus, le raisonnement de qualité « frontière » et les agents permanents en arrière-plan ne sont pas possibles. Voir « Carte des capacités ».',
          '**Que lire ensuite ?** Suivez « Votre premier modèle local en 15 minutes », puis utilisez l\'« Arbre de décision » si vous avez une tâche précise en tête.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Périmètre :** l\'iPhone d\'abord, l\'iPad lorsque les mêmes applications y fonctionnent. Android est traité dans le guide jumeau [Guide de l\'IA locale sur Android](/fr/power-local-llm/local-ai-on-android-guide).',
          '**iPhone compatibles Apple Intelligence (liste d\'Apple) :** iPhone 15 Pro et 15 Pro Max, la famille iPhone 16 y compris le 16e, la famille iPhone 17 y compris le 17e et l\'Air, ainsi que les iPhone 18 Pro, 18 Pro Max et iPhone Duo de 2026. L\'iPhone 15 et les modèles non Pro plus anciens ne figurent pas dans la liste.',
          '**Niveaux de RAM utilisés dans ce guide (rapportés, non publiés par Apple) :** 4 GB (iPhone 12, 13, SE), 6 GB (iPhone 13 Pro, 14, 14 Pro, 15), 8 GB (iPhone 15 Pro, série 16, 16e, 17), 12 GB (iPhone 17 Pro et Pro Max).',
          '**Tailles de modèle qui tiennent :** environ 1.1 GB pour un modèle de 1.7B en 4 bits, environ 2.5-3.7 GB pour des modèles de 3-4B ; les vitesses indicatives viennent de notre comparatif iPhone et ne sont pas de nouvelles mesures.',
          '**Moteurs présents dans les applications iPhone :** llama.cpp (GGUF), Apple MLX, MLC LLM, Google LiteRT-LM, ExecuTorch, Core ML, Apple Foundation Models ; quelques applications en combinent plusieurs.',
          '**Applications citées dans ce guide :** les applications iOS et iPadOS de notre répertoire qui ont une analyse PromptQuorum, ainsi que des applications iPhone compagnons pour des outils auto-hébergés.',
          '**Ce que PromptQuorum n\'a pas fait :** ce guide n\'a re-testé aucune application. Les informations proviennent de nos analyses, des fiches de store, des sites des éditeurs et de la documentation d\'Apple, et chaque analyse précise ce qui a été essayé.',
        ],
      },
      whatIsPossible: {
        id: 'capability-map',
        title: 'Carte des capacités : ce que l\'IA locale sur iPhone sait faire',
        content:
          '**L\'IA locale sur iPhone couvre la plupart des tâches de langage courantes et plusieurs tâches multimédias, mais pas tout ce que font les assistants cloud.** Le tableau classe chaque capacité en Fonctionne, En partie ou Pas encore, et le chapitre suivant nomme les applications. « Fonctionne » signifie qu\'une application iPhone analysée le fait avec le modèle sur le téléphone ; « En partie » signifie que cela fonctionne avec des limites de taille, de vitesse, de précision ou de matériel ; « Pas encore » signifie qu\'aucune application iPhone analysée ne le fait sur l\'appareil.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'L\'IA locale sur iPhone gère sur l\'appareil la conversation, la rédaction, les résumés, la traduction, la dictée, les questions sur des documents et de petites tâches d\'image, ne gère qu\'en partie la recherche de photos, la génération d\'images et les agents, et ne peut pas encore exécuter de grands modèles ni remplacer Siri.',
          },
          {
            type: 'plain-terms',
            text:
              'Voyez l\'iPhone comme un assistant de poche doté d\'un petit cerveau privé. Il répond à des questions simples, reformule du texte, transcrit la voix et décrit des photos sans rien envoyer ailleurs, mais il ignore des faits qu\'un grand modèle cloud connaît, ralentit sur les longues réponses et chauffe. Pour les questions difficiles, beaucoup de personnes associent le téléphone à un ordinateur domestique ou à une application cloud.',
          },
        ],
        columns: ['Capacité', 'Sur iPhone', 'Configuration type', 'Chapitre'],
        rows: [
          {
            'Capacité': 'Conversation, rédaction, résumés',
            'Sur iPhone': 'Fonctionne',
            'Configuration type': 'Modèle 1-4B, GGUF ou MLX',
            'Chapitre': 'Assistants de conversation',
          },
          {
            'Capacité': 'Questions sur une photo ou une capture',
            'Sur iPhone': 'Fonctionne',
            'Configuration type': 'Petit modèle de vision ou OCR',
            'Chapitre': 'Vision et appareil photo',
          },
          {
            'Capacité': 'Dictée et transcription',
            'Sur iPhone': 'Fonctionne',
            'Configuration type': 'Whisper ou Parakeet',
            'Chapitre': 'Voix et parole',
          },
          {
            'Capacité': 'Lecture à voix haute (synthèse vocale)',
            'Sur iPhone': 'Fonctionne',
            'Configuration type': 'Voix système ou TTS sur l\'appareil',
            'Chapitre': 'Voix et parole',
          },
          {
            'Capacité': 'Assistant mains libres avec Siri',
            'Sur iPhone': 'En partie',
            'Configuration type': 'Raccourcis, pas un remplacement de Siri',
            'Chapitre': 'Voix et parole',
          },
          {
            'Capacité': 'Dialoguer avec vos PDF et notes',
            'Sur iPhone': 'Fonctionne',
            'Configuration type': 'Petit modèle plus index local',
            'Chapitre': 'Documents et RAG',
          },
          {
            'Capacité': 'Traduction',
            'Sur iPhone': 'Fonctionne',
            'Configuration type': 'Petit modèle optimisé pour la traduction',
            'Chapitre': 'Traduction',
          },
          {
            'Capacité': 'Génération d\'images',
            'Sur iPhone': 'En partie',
            'Configuration type': 'Petits modèles de diffusion, lents',
            'Chapitre': 'Génération d\'images',
          },
          {
            'Capacité': 'Retouche photo (détourage, retouche)',
            'Sur iPhone': 'Fonctionne',
            'Configuration type': 'Modèles de segmentation Core ML',
            'Chapitre': 'Génération d\'images',
          },
          {
            'Capacité': 'Recherche IA dans la photothèque',
            'Sur iPhone': 'En partie',
            'Configuration type': 'Index sur l\'appareil ou serveur perso',
            'Chapitre': 'Photos et galerie',
          },
          {
            'Capacité': 'Notes et favoris avec IA',
            'Sur iPhone': 'En partie',
            'Configuration type': 'L\'IA tourne souvent sur un serveur',
            'Chapitre': 'Notes et connaissances',
          },
          {
            'Capacité': 'Questions sur les données de santé',
            'Sur iPhone': 'En partie',
            'Configuration type': 'Apple Intelligence, pas un avis médical',
            'Chapitre': 'Santé et bien-être',
          },
          {
            'Capacité': 'Jeu de rôle et compagnons',
            'Sur iPhone': 'Fonctionne',
            'Configuration type': 'Petit modèle de chat, variantes cloud',
            'Chapitre': 'Jeu de rôle et compagnons',
          },
          {
            'Capacité': 'Contrôle de la maison connectée',
            'Sur iPhone': 'En partie',
            'Configuration type': 'Le serveur domestique fait le travail',
            'Chapitre': 'Maison connectée et agents',
          },
          {
            'Capacité': 'Agents autonomes permanents',
            'Sur iPhone': 'Pas encore',
            'Configuration type': 'iOS limite le travail en arrière-plan',
            'Chapitre': 'Pas possible',
          },
          {
            'Capacité': 'Exécuter des modèles de 30B et plus',
            'Sur iPhone': 'Pas encore',
            'Configuration type': 'Serveur domestique, à distance',
            'Chapitre': 'Mode distant',
          },
          {
            'Capacité': 'Affiner un modèle sur le téléphone',
            'Sur iPhone': 'Pas encore',
            'Configuration type': 'Entraîner sur un Mac ou un GPU',
            'Chapitre': 'Pistes pour développeurs',
          },
        ],
      },
      hardware: {
        id: 'iphone-hardware',
        title: 'Puce et RAM en pratique : quel iPhone exécute quel modèle',
        content:
          '**La RAM fixe le plus grand modèle qu\'un iPhone peut contenir ; la puce fixe la rapidité de ses réponses.** Un modèle de langage doit rester en mémoire pendant qu\'il génère : un modèle de 3B en 4 bits (environ 2-2.7 GB sur disque) demande donc à peu près autant de RAM libre, en plus de ce qu\'utilisent iOS et les autres applications. iOS ferme une application qui en demande trop, et Apple ne publie pas la RAM des iPhone ; les chiffres ci-dessous sont donc des caractéristiques largement rapportées (également utilisées dans notre [Meilleures applications d\'IA locale pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026)) et non des déclarations d\'Apple.',
        columns: ['Niveau d\'iPhone', 'RAM (rapportée)', 'Taille de modèle réaliste', 'Verdict'],
        rows: [
          {
            'Niveau d\'iPhone': 'iPhone 12, 13, SE',
            'RAM (rapportée)': '4 GB',
            'Taille de modèle réaliste': 'Moins de 1B, si tant est que oui',
            'Verdict': 'Utilisez plutôt le mode distant',
          },
          {
            'Niveau d\'iPhone': 'iPhone 13 Pro, 14, 14 Pro, 15',
            'RAM (rapportée)': '6 GB',
            'Taille de modèle réaliste': '1-2B (fichier d\'environ 1.1 GB)',
            'Verdict': 'Conversation et rédaction de base',
          },
          {
            'Niveau d\'iPhone': 'iPhone 15 Pro, 16, 16e, 17',
            'RAM (rapportée)': '8 GB',
            'Taille de modèle réaliste': '3-4B (environ 2.5-3.7 GB)',
            'Verdict': 'Niveau 3-4B typique',
          },
          {
            'Niveau d\'iPhone': 'iPhone 17 Pro, 17 Pro Max',
            'RAM (rapportée)': '12 GB',
            'Taille de modèle réaliste': '4B confortablement, 7-8B en basse précision',
            'Verdict': 'Niveau de RAM le plus élevé',
          },
          {
            'Niveau d\'iPhone': 'iPhone 18 Pro, Pro Max, Duo',
            'RAM (rapportée)': 'Non publiée',
            'Taille de modèle réaliste': 'À traiter comme 12 GB tant que non confirmé',
            'Verdict': 'Aucun chiffre PromptQuorum',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Un modèle qui tient nominalement peut quand même être fermé par iOS lorsque vous changez d\'application. Sur un iPhone de 6 GB, restez sur des modèles de 1-2B même si un fichier de 3-4B se télécharge sans erreur ; les pages iPhone d\'Apple n\'indiquent aucun chiffre de RAM, le tableau des niveaux est donc un repère, pas une garantie.',
          },
        ],
      },
      hardwareChips: {
        id: 'chips-engines',
        title: 'Neural Engine, GPU et CPU : ce qui exécute réellement le modèle',
        content:
          '**Un iPhone offre trois endroits pour exécuter un modèle, et celui qu\'utilise une application dépend de son moteur, pas du téléphone.** Le CPU est flexible mais lent, le GPU (accessible via l\'API graphique Metal d\'Apple) gère les grands calculs matriciels sur lesquels s\'appuient la plupart des applications de conversation, et le Neural Engine est un accélérateur à fonction fixe que Core ML d\'Apple et le nouveau framework Core AI peuvent cibler. Apple décrit Core AI comme conçu pour le silicium Apple, avec mémoire unifiée et Neural Engine ; il est nouveau dans la génération iOS 27, si bien que la plupart des applications de ce guide ne l\'utilisent pas encore.',
        items: [
          '**Applications llama.cpp (fichiers GGUF) :** [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), [Pocket AI](/fr/power-local-llm/pocket-ai-review) et [LLM Farm](/fr/power-local-llm/llm-farm-review) utilisent Metal sur le GPU. Elles acceptent n\'importe quel fichier GGUF, donc des modèles de Hugging Face peuvent fonctionner.',
          '**Applications Apple MLX :** [Locally AI](/fr/power-local-llm/locally-ai-review), [fullmoon](/fr/power-local-llm/fullmoon-review) et [MLXHub](/fr/power-local-llm/mlxhub-review) utilisent le framework de tableaux MLX d\'Apple, conçu pour la mémoire unifiée du silicium Apple.',
          '**Applications multiformats :** [Noema](/fr/power-local-llm/noema-review) prend en charge GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models dans une seule application, ce qui explique que son usage du matériel varie selon le format du modèle (déclaration de l\'éditeur dans l\'analyse).',
          '**Applications à modèles compilés :** [MLC Chat](/fr/power-local-llm/mlc-chat-review) exécute des modèles compilés par la chaîne d\'outils MLC LLM ; [Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) utilise l\'environnement d\'exécution LiteRT-LM de Google.',
          '**Le modèle propre à Apple :** Apple Intelligence exécute le modèle d\'Apple via les frameworks système. Des applications comme [Compass - Local AI](/fr/power-local-llm/compass-local-ai-review) et [Pajdo](/fr/power-local-llm/pajdo-review) l\'appellent au lieu de livrer un modèle.',
          '**Conséquence pratique :** deux applications exécutant un modèle de même taille sur le même iPhone peuvent différer en vitesse, en mémoire utilisée et en chaleur. Lancez la même requête dans deux applications avant de supprimer un modèle déjà téléchargé.',
        ],
      },
      tierTable: {
        id: 'tier-app-model',
        title: 'Niveau de téléphone, application et taille de modèle en un coup d\'œil',
        content:
          '**Choisissez d\'abord selon le niveau de RAM, puis selon le besoin.** Le tableau donne un point de départ tiré de nos analyses et de notre comparatif ; ce n\'est pas un benchmark. Les modèles évoluent vite, consultez donc [Meilleurs modèles mobiles : Phi-4 Mini, Gemma et SmolLM](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) pour les choix actuels de petits modèles.',
        columns: ['Niveau de téléphone', 'Pour commencer', 'Taille de modèle', 'Remarque'],
        rows: [
          {
            'Niveau de téléphone': 'iPhone 4 GB',
            'Pour commencer': 'Client distant vers un serveur domestique',
            'Taille de modèle': 'Aucun sur le téléphone',
            'Remarque': 'Reins, Enchanted, OpenClient',
          },
          {
            'Niveau de téléphone': 'iPhone 6 GB',
            'Pour commencer': 'PocketPal AI ou Locally AI',
            'Taille de modèle': '1-2B (environ 1.1 GB)',
            'Remarque': 'Les plus petits modèles',
          },
          {
            'Niveau de téléphone': 'iPhone 8 GB',
            'Pour commencer': 'PocketPal AI, Private LLM, Gallery',
            'Taille de modèle': '3-4B (2.5-3.7 GB)',
            'Remarque': 'Gamme de prix intermédiaire',
          },
          {
            'Niveau de téléphone': 'iPhone 12 GB',
            'Pour commencer': 'Noema ou Locally AI',
            'Taille de modèle': '4B, ou 7-8B lentement',
            'Remarque': 'Un contexte plus long tient',
          },
          {
            'Niveau de téléphone': 'iPhone compatible Apple Intelligence',
            'Pour commencer': 'Compass ou Locally AI',
            'Taille de modèle': 'Modèle Apple, sans téléchargement',
            'Remarque': 'Limites de langue applicables',
          },
          {
            'Niveau de téléphone': 'Tout téléphone, dictée',
            'Pour commencer': 'Whisper Notes ou Aiko',
            'Taille de modèle': 'Classe Whisper, petit',
            'Remarque': 'Payant une seule fois',
          },
          {
            'Niveau de téléphone': 'Tout téléphone, documents',
            'Pour commencer': 'Private Mind ou MemoryAI',
            'Taille de modèle': 'Petit modèle de chat plus index',
            'Remarque': 'Vérifiez les limites de fichiers',
          },
        ],
      },
      firstRun: {
        id: 'first-run-15-minutes',
        title: 'Votre premier modèle local en 15 minutes',
        content:
          '**Vous pouvez vérifier tout le parcours hors ligne sur un iPhone en 15 minutes environ : installez une application, téléchargez un petit modèle en Wi-Fi, activez le mode Avion et posez une question.** Les étapes prennent [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) comme exemple, car il est gratuit et open source, mais toute application de conversation des chapitres suivants fonctionne de la même façon. Les durées dépendent de votre connexion et de votre téléphone.',
        numberedItems: [
          {
            title: 'Minute 0-2 : vérifiez le niveau de votre iPhone',
            whyItMatters:
              'Cherchez votre modèle dans le tableau de RAM ci-dessus. 6 GB signifient un modèle de 1-2B, 8 GB un modèle de 3-4B, 12 GB offrent de la marge. Libérez d\'abord 3 à 5 GB de stockage, car un fichier de modèle pèse de 1 à 4 GB.',
          },
          {
            title: 'Minute 2-4 : installez une seule application',
            whyItMatters:
              'Installez une seule application depuis l\'App Store, par exemple PocketPal AI, Locally AI ou Google AI Edge Gallery. N\'installez pas trois applications avec trois modèles chacune ; les fichiers de modèle en double consomment vite le stockage.',
          },
          {
            title: 'Minute 4-9 : téléchargez un modèle en Wi-Fi',
            whyItMatters:
              'Choisissez la taille de votre niveau, par exemple un modèle de classe Qwen3 1.7B avec 6 GB, ou Phi-4 Mini ou Gemma 4 E2B avec 8 GB (voir Modèles par niveau). Le téléchargement est la seule étape qui exige Internet. Gardez l\'application ouverte et l\'écran allumé jusqu\'à la fin.',
          },
          {
            title: 'Minute 9-10 : activez le mode Avion',
            whyItMatters:
              'Activez le mode Avion et laissez le Wi-Fi désactivé. Cela prouve que le modèle s\'exécute sur le téléphone et montre si l\'application tente d\'accéder à Internet.',
          },
          {
            title: 'Minute 10-13 : posez trois questions de test',
            whyItMatters:
              'Demandez un résumé en trois points d\'un paragraphe que vous collez, la réécriture d\'un e-mail sur un autre ton, et une question factuelle dont vous connaissez la réponse. Notez la vitesse et si le téléphone chauffe.',
          },
          {
            title: 'Minute 13-15 : vérifiez les réglages et faites le ménage',
            whyItMatters:
              'Ouvrez le benchmark ou les réglages de l\'application s\'il y en a un, notez les tokens par seconde, puis consultez plus tard Réglages > Confidentialité et sécurité > Rapport de confidentialité des apps pour voir quels domaines l\'application a contactés. Supprimez les modèles que vous n\'utiliserez pas.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Si l\'application plante ou redémarre pendant la première réponse, le modèle est trop grand pour le téléphone. Supprimez-le et choisissez la taille inférieure plutôt que de modifier d\'autres réglages.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence et le framework Foundation Models',
        content:
          '**Apple Intelligence donne à chaque iPhone compatible un modèle de langage intégré qui ne demande aucun téléchargement, et le framework Foundation Models permet aux applications tierces de l\'utiliser.** La page développeur d\'Apple décrit le framework comme une API Swift native donnant un accès direct au même modèle sur l\'appareil que celui qui alimente Apple Intelligence. Il ne fonctionne que sur les appareils et dans les langues pris en charge par Apple Intelligence.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Apple Intelligence exécute le modèle propre à Apple sur l\'appareil, sur l\'iPhone 15 Pro et les modèles plus récents, et le framework Foundation Models permet à des applications tierces comme Locally AI, Compass et Pajdo de l\'utiliser sans livrer leur propre modèle.',
          },
          {
            type: 'plain-terms',
            text:
              'Apple a déjà placé un petit modèle de langage dans l\'iPhone. Vous ne le téléchargez pas, mais vous ne pouvez pas non plus le remplacer par un autre. Les applications peuvent l\'emprunter pour répondre à des questions sur l\'appareil, ce qui explique que plusieurs nouvelles applications exigent un iPhone et un iOS récents plutôt que le téléchargement d\'un gros modèle.',
          },
        ],
        items: [
          '**Liste des appareils (page Apple Intelligence d\'Apple) :** iPhone 15 Pro et Pro Max (A17 Pro), famille iPhone 16, 16 Plus, 16e et 16 Pro (A18 et A18 Pro), iPhone 17, 17e, 17 Pro, 17 Pro Max et Air (A19 et A19 Pro), ainsi que iPhone Duo, 18 Pro et 18 Pro Max (A20 Pro).',
          '**Langues :** Apple Intelligence exige que Siri et la langue de l\'appareil soient réglés sur une langue prise en charge. La liste d\'Apple comprend le chinois (simplifié et traditionnel), le danois, le néerlandais, l\'anglais, le français, l\'allemand, l\'italien, le japonais, le coréen, le norvégien, le portugais, l\'espagnol, le suédois, le turc et le vietnamien. Apple précise que certaines fonctions peuvent ne pas être disponibles dans toutes les régions ou langues.',
          '**Siri AI (bêta iOS 27) :** Apple indique d\'abord l\'anglais, le français, le japonais, le coréen, le portugais et l\'espagnol, précise qu\'il ne sera pas disponible initialement dans l\'UE sur iOS, et que certaines fonctions côté serveur ont des limites d\'usage quotidiennes. Il est distinct des applications de conversation sur l\'appareil de ce guide.',
          '**Ce qu\'offre le framework (Apple, guide iOS 27) :** accès aux Apple Foundation Models et, via un protocole Language Model, à des modèles cloud comme Claude et Gemini ou à tout fournisseur qui s\'y conforme ; des invites multimodales qui transmettent des images avec du texte ; des outils Vision comme l\'OCR et la lecture de codes-barres qu\'un modèle peut appeler sur l\'appareil ; et des Dynamic Profiles pour changer de modèles, d\'outils et d\'instructions au sein d\'une même session.',
          '**Référence iOS 26 (non re-vérifiée lors de cette mise à jour) :** le framework est apparu avec iOS 26. Consultez la documentation actuelle d\'Apple pour la limite de contexte et les fonctions prises en charge avant de concevoir quoi que ce soit autour.',
          '**Private Cloud Compute :** Apple Intelligence peut confier des requêtes plus lourdes aux serveurs d\'Apple. Apple indique que les données ne sont jamais conservées et servent uniquement à votre requête. Ce n\'est pas un traitement sur l\'appareil : considérez « Apple Intelligence » et « hors ligne » comme deux affirmations différentes.',
          '**Applications de ce guide qui utilisent le modèle d\'Apple :** [Locally AI](/fr/power-local-llm/locally-ai-review) (interface de conversation), [Compass - Local AI](/fr/power-local-llm/compass-local-ai-review) (conversation et OCR de captures d\'écran), [Pajdo](/fr/power-local-llm/pajdo-review) (questions sur Apple Health), [LocalMindAI](/fr/power-local-llm/localmindai-review) (modèle d\'Apple ou modèles téléchargés), [Noema](/fr/power-local-llm/noema-review) et [Reins](/fr/power-local-llm/reins-review) (Apple Foundation Models comme l\'un des backends), [Hillnote](/fr/power-local-llm/hillnote-review) (notes), et [AI on Device](/fr/power-local-llm/ai-on-device-review), qui livre à la place son propre modèle de 3B mais exige un appareil compatible Apple Intelligence.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Si vous voulez seulement reformuler, résumer des notifications et utiliser les Outils d\'écriture dans Mail, Messages et Notes, vous n\'avez pas besoin d\'une application de conversation. Si vous voulez une fenêtre de conversation, le choix du modèle ou des questions sur des documents, installez l\'une des applications de ce guide ; pour l\'arbitrage entre modèle Apple et modèles ouverts, voir [IA sur l\'appareil d\'Apple et LLM locaux](/fr/local-llms/apple-on-device-ai-vs-local-llms).',
          },
        ],
      },
      appStoreRules: {
        id: 'app-store-rules',
        title: 'Les règles de l\'App Store qui façonnent l\'IA locale sur iPhone',
        content:
          '**L\'App Store explique l\'essentiel des différences entre l\'IA locale sur iPhone et sur ordinateur.** Les App Review Guidelines d\'Apple s\'appliquent à toutes les applications, et quatre d\'entre elles comptent ici : applications autonomes, consommation d\'énergie, services en arrière-plan et partage de données. Ce chapitre cite le texte de la règle et donne notre lecture ; ce n\'est pas un conseil juridique et Apple peut modifier les règles.',
        items: [
          '**Pas de code téléchargé qui modifie l\'application (directive 2.5.2).** Texte d\'Apple (traduction libre) : les applications « ne peuvent pas télécharger, installer ni exécuter de code qui introduit ou modifie des fonctions ou fonctionnalités de l\'application ». Les applications d\'IA locale respectent cette règle en livrant le moteur dans l\'application et en téléchargeant des poids de modèle, qui sont des données. C\'est notre lecture, pas une déclaration d\'Apple.',
          '**Pas de serveur Ollama sur le téléphone.** Ollama ne propose aucune application iPhone, et le bac à sable de l\'App Store ne laisse aucun moyen pratique d\'exécuter un serveur Ollama ou un conteneur Docker. Il existe des applications de shell en bac à sable, mais elles ne fournissent pas de serveur de modèles locaux.',
          '**API publiques uniquement (directive 2.5.1).** Les applications ne peuvent utiliser que des API publiques, c\'est pourquoi Foundation Models, Core ML, Metal et MLX sont les voies disponibles et l\'accès privé au Neural Engine ne l\'est pas.',
          '**Énergie et chaleur (directive 2.4.2).** Apple indique que les applications « ne doivent pas vider rapidement la batterie, générer une chaleur excessive ni solliciter inutilement les ressources de l\'appareil » (traduction libre). Une génération prolongée met cette ligne à l\'épreuve, ce qui explique que les applications ralentissent ou arrêtent les longues exécutions.',
          '**L\'usage en arrière-plan est limité (directive 2.5.4).** Les applications multitâches ne peuvent utiliser des services en arrière-plan que pour des usages prévus comme la lecture audio, la localisation, la finalisation de tâches et les notifications locales. Un modèle ne peut pas continuer à générer ni agir indéfiniment comme agent une fois que vous quittez l\'application ; [Reins](/fr/power-local-llm/reins-review) indique que la génération en arrière-plan exige iOS 26.',
          '**Limites de mémoire.** iOS plafonne la RAM qu\'une application au premier plan peut utiliser. Apple publie une autorisation de limite de mémoire augmentée (com.apple.developer.kernel.increased-memory-limit) que les développeurs peuvent demander ; nous n\'indiquons pas la quantité exacte allouée. Vous ne pouvez pas voir si une application en dispose, testez donc un modèle avec le benchmark de l\'application avant de vous y fier.',
          '**JIT et compilation à l\'exécution.** Les moteurs pour ordinateur compilent souvent du code à l\'exécution ; les applications iOS livrent à la place des moteurs compilés à l\'avance. C\'est un comportement général de la plateforme, relevé par plusieurs projets de moteurs, et l\'une des raisons pour lesquelles les moteurs iPhone sont en retard sur ceux des ordinateurs en fonctionnalités.',
          '**Partage de données (directives 5.1.1 et 5.1.2).** Les applications doivent lier une politique de confidentialité, expliquer quelles données sont collectées, obtenir une autorisation avant de partager des données personnelles avec des tiers « y compris avec une IA tierce » (traduction libre), et ne peuvent pas réutiliser des données sans consentement. Les étiquettes de confidentialité de l\'App Store sont renseignées par le développeur, point sur lequel revient le chapitre sur la confidentialité.',
          '**Sideloading et boutiques alternatives.** Dans l\'UE, des boutiques d\'applications alternatives existent au titre du Digital Markets Act, mais chaque développeur décide où publier. Aucune des applications de ce guide n\'en a besoin ; [LLM Farm](/fr/power-local-llm/llm-farm-review) fait exception : il faut actuellement le compiler depuis les sources dans Xcode.',
          '**Bêtas TestFlight.** Plusieurs éditeurs proposent des versions TestFlight (par exemple [Aiko](/fr/power-local-llm/aiko-review) pour un essai gratuit et [fullmoon](/fr/power-local-llm/fullmoon-review) pour des versions plus récentes). Les versions TestFlight sont limitées dans le temps et inachevées ; utilisez-les pour tester, pas pour des données que vous ne pouvez pas perdre.',
        ],
      },
      iphoneVsAndroid: {
        id: 'iphone-vs-android',
        title: 'Ce que l\'iPhone fait mieux et moins bien qu\'Android',
        content:
          '**L\'iPhone est plus facile à démarrer et plus contraint à étendre ; Android est l\'inverse.** Les iPhone existent en un petit nombre de configurations connues, embarquent le modèle propre à Apple et passent tous par une seule boutique. Les téléphones Android varient beaucoup plus en RAM et en puce, autorisent les applications de terminal et le sideloading, et disposent de leur propre pile de modèles sur l\'appareil. Il s\'agit d\'une comparaison de plateformes à partir d\'informations publiques ; pour des chiffres matériel par matériel, voir [Galaxy vs iPhone : IA sur l\'appareil](/fr/local-llms/galaxy-vs-iphone-on-device-ai-2026) et le guide jumeau [Guide de l\'IA locale sur Android](/fr/power-local-llm/local-ai-on-android-guide).',
        columns: ['Sujet', 'iPhone', 'Android'],
        rows: [
          {
            'Sujet': 'Effort de mise en place',
            'iPhone': 'App Store, un seul toucher',
            'Android': 'Play Store ou APK',
          },
          {
            'Sujet': 'Modèle intégré',
            'iPhone': 'Apple Foundation Models',
            'Android': 'Modèles des constructeurs et de Google',
          },
          {
            'Sujet': 'Exécuter Ollama sur le téléphone',
            'iPhone': 'Pas d\'application Ollama pour iPhone',
            'Android': 'Possible via Termux (voir le guide)',
          },
          {
            'Sujet': 'Plafond de RAM',
            'iPhone': 'Environ 12 GB sur les modèles Pro',
            'Android': 'Variable ; vérifiez chaque téléphone',
          },
          {
            'Sujet': 'Formats de modèle',
            'iPhone': 'GGUF, MLX, Core ML, LiteRT',
            'Android': 'GGUF, LiteRT, MLC et plus',
          },
          {
            'Sujet': 'Raccourcis et automatisation',
            'iPhone': 'Raccourcis, App Intents',
            'Android': 'Tasker et intents',
          },
          {
            'Sujet': 'Nombre d\'applications',
            'iPhone': 'Moins d\'options open source',
            'Android': 'Plus grand choix open source',
          },
          {
            'Sujet': 'Travail en arrière-plan',
            'iPhone': 'Strictement limité',
            'Android': 'Plus souple, toujours limité',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Beaucoup d\'applications de ce guide fonctionnent aussi sur Android ([PocketPal AI](/fr/power-local-llm/pocketpal-ai-review), [MLC Chat](/fr/power-local-llm/mlc-chat-review), [KernelAI](/fr/power-local-llm/kernelai-review), [LLM Hub](/fr/power-local-llm/llm-hub-review)) ; un foyer qui utilise les deux plateformes peut donc souvent employer la même application sur chacune. Comparez les spécificités Android dans [Meilleures applications d\'IA locale pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026).',
          },
        ],
      },
      chatMain: {
        id: 'chat-assistants',
        title: 'Assistants de conversation : les principales applications sur l\'appareil',
        content:
          '**Pour une conversation générale sur iPhone, commencez par l\'une des cinq applications que compare notre comparatif iPhone, puis regardez les applications plus récentes ci-dessous.** Chaque ligne indique ce que fait l\'application et sa limite franche. Les détails proviennent des analyses PromptQuorum liées, des fiches de store et des pages des éditeurs ; sauf si une analyse indique avoir essayé l\'application, considérez la vitesse et la qualité comme non mesurées. Pour des choix classés et des vitesses indicatives, voir [Meilleures applications d\'IA locale pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026), et pour toute la catégorie de la conversation, voir [Assistants de conversation comparés](/fr/power-local-llm/local-llm-chat-assistants-compared).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'PocketPal AI est le choix gratuit par défaut, Private LLM l\'option payante avec Siri et Raccourcis, Locally AI l\'application MLX gratuite avec Apple Foundation Models, et Google AI Edge Gallery l\'application gratuite Gemma 4 pour iPhone.',
          },
          {
            type: 'plain-terms',
            text:
              'Choisissez une application de conversation, téléchargez un modèle adapté à votre iPhone, et gardez les autres applications de ce guide pour des usages particuliers comme les documents, la voix ou un serveur domestique. Les prix proviennent des analyses liées et des pages de store et peuvent changer ; vérifiez le store avant d\'acheter.',
          },
        ],
        items: [
          '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) : gratuit, open source (MIT), exécute tout modèle GGUF de Hugging Face et inclut un benchmark. Limite : conversation autonome sans action Raccourcis ou Siri mentionnée ; achats intégrés optionnels pour des préréglages premium.',
          '[Private LLM](/fr/power-local-llm/private-llm-review) : $4.99 une fois pour iPhone, iPad et Mac, plus de 140 modèles, sans compte. Le développeur indique qu\'il s\'intègre à Siri et à Raccourcis. Limite : code fermé et liste de modèles sélectionnés, vous ne pouvez donc pas charger de fichiers arbitraires.',
          '[Locally AI](/fr/power-local-llm/locally-ai-review) : gratuit, de l\'équipe LM Studio, fondé sur Apple MLX, avec une action Raccourcis, Apple Foundation Models comme option de conversation et un lien optionnel vers LM Studio sur un Mac. Limite : pas d\'import GGUF arbitraire, code fermé, iOS 18.1 ou plus récent.',
          '[Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) : application gratuite de Google pour Gemma 4 avec mode de réflexion, compétences d\'agent et entrée image et audio. Limite : modèles LiteRT-LM uniquement, présentée comme une bêta expérimentale, et son étiquette de confidentialité de l\'App Store indique certains diagnostics de l\'appareil.',
          '[Noema](/fr/power-local-llm/noema-review) : gratuit, exécute GGUF, MLX, ExecuTorch, Core ML et Apple Foundation Models dans une seule application, avec dialogue avec des documents sur l\'appareil. Limite : code fermé, aucun minimum de RAM publié, iOS ou iPadOS 18 ou plus récent.',
          '[Off Grid AI](/fr/power-local-llm/off-grid-ai-review) : application gratuite et open source (MIT) avec conversation GGUF, modèles d\'image Stable Diffusion et reconnaissance vocale Whisper sur l\'appareil, sur iOS, Android, macOS et Windows. Limite : une application qui fait beaucoup de choses demande plus de stockage et plus de réglages.',
          '[Pocket AI](/fr/power-local-llm/pocket-ai-review) : gratuit, llama.cpp avec Metal, 28 modèles des familles Qwen, Gemma, Llama, Mistral, Phi et DeepSeek (selon le développeur), iPhone 12 ou plus récent. Limite : la saisie vocale Whisper sur l\'appareil exige le déverrouillage Pro payant.',
          '[KernelAI](/fr/power-local-llm/kernelai-review) : gratuit, 53 modèles ouverts téléchargeables de 112 MB à 3.11 GB, avec documents, vision et Raccourcis selon la fiche. Limite : code fermé, et notre analyse repose sur des sources publiques, pas sur un test pratique.',
          '[On Device AI](/fr/power-local-llm/on-device-ai-review) : plus de 200 modèles GGUF et MLX téléchargeables, plus transcription, import de documents et de flux RSS, synthèse vocale sur l\'appareil et points d\'accroche d\'automatisation. Limite : une longue liste de fonctions dans une application à code fermé ; lisez sa section sur la confidentialité.',
          '[Enclave AI](/fr/power-local-llm/enclave-ai-review) : gratuit avec achats intégrés, hors ligne sur iPhone, iPad et Mac selon sa fiche, sans compte, avec interaction avec des documents et Raccourcis selon notre comparatif. Limite : code fermé et offres payantes.',
        ],
      },
      chatMore: {
        id: 'chat-more',
        title: 'Assistants de conversation : applications récentes, de niche et hybrides',
        content:
          '**Ces applications répondent à des besoins plus étroits : conversation à prix unique, conversation avec le seul modèle d\'Apple, personnages, projets open source axés sur la confidentialité et hybrides mêlant sur l\'appareil et cloud.** Lisez en particulier les avertissements sur les hybrides, car une application hybride n\'est locale que tant que vous restez dans son mode sur l\'appareil.',
        items: [
          '[Cloak: Local AI](/fr/power-local-llm/cloak-local-ai-review) : payant une fois ($1.99 sur le store américain), télécharge un modèle recommandé, ajoute Notes vocales et un Récap hebdomadaire construit à partir de Photos, Localisation et Notes vocales sur iPhone. Limite : pas de sélecteur de modèle et le nom du modèle n\'est pas publié.',
          '[Compass - Local AI](/fr/power-local-llm/compass-local-ai-review) : gratuit, répond avec Apple Intelligence sur l\'appareil et lit les captures d\'écran par OCR sur l\'appareil ; exige iOS ou iPadOS 26. Limite : la recherche web est optionnelle et envoie votre requête à DuckDuckGo ou Brave lorsqu\'elle est activée.',
          '[AI on Device](/fr/power-local-llm/ai-on-device-review) : $4.99 une fois, un modèle de 3B quantifié sur 2 bits, exige iOS 26 et un appareil compatible Apple Intelligence. Limite : aucune mise à jour depuis le 13 octobre 2025, considérez-la donc comme peu active.',
          '[Haplo AI](/fr/power-local-llm/haplo-ai-review) : télécharge des modèles ouverts comme Qwen et Phi pour la conversation, l\'entrée d\'images et la génération d\'images, sans compte. Limite : application payante ; notre analyse repose sur des sources publiques.',
          '[Oscilla](/fr/power-local-llm/oscilla-review) : gratuit, plus de 40 modèles ouverts, voix en temps réel, mémoire intégrée, recherche web et analyse de fichiers et d\'images ; étiquette « Data Not Collected » d\'Apple. Limite : iOS 26 ou plus récent, code fermé, et aucune mise à jour depuis le 21 mai 2026.',
          '[Frankly AI](/fr/power-local-llm/frankly-ai-review) : modèles téléchargeables sur l\'appareil avec personnages orientés tâches et sans compte ; limite quotidienne gratuite, Pro débloque le reste. Limite : plafond d\'usage dans l\'offre gratuite.',
          '[LLM Studio Go](/fr/power-local-llm/llm-studio-go-review) : gratuit et financé par la publicité, conversation, voix, images, musique et parole avec des modèles GGUF et MLX, iOS ou iPadOS 18. Limite : publicités, et d\'après l\'analyse elle n\'a aucun rapport avec LM Studio malgré son nom.',
          '[Local AI Chat - pocket](/fr/power-local-llm/local-ai-chat-pocket-review) : conversation hors ligne freemium avec génération d\'images et Raccourcis selon son slogan, iOS ou iPadOS 18.6 ou plus récent. Limite : aucune mise à jour depuis le 27 mai 2026 et achats intégrés de type abonnement.',
          '[Loci AI](/fr/power-local-llm/loci-ai-review-offline-local-ai) : gratuit sur iPhone, iPad, Android, Mac et Windows, choisit automatiquement un modèle adapté au matériel. Limite : les affirmations de l\'éditeur sur la puissance des modèles ne sont pas vérifiées par PromptQuorum.',
          '[Ensu](/fr/power-local-llm/ensu-review) : gratuit, open source (AGPL), d\'Ente Labs, avec entrée d\'images et dictée vocale locale. Limite : l\'éditeur indique lui-même qu\'elle n\'est pas encore aussi capable que ChatGPT ou Claude Code, et la version est encore 0.x.',
          '[MemoryAI](/fr/power-local-llm/memoryai-review) : conversation hors ligne gratuite avec questions-réponses sur documents, une mémoire modifiable et un Mode enfant verrouillé par code PIN ; iOS 16.4+ et 4 GB+ de RAM. Limite : sa politique de confidentialité mentionne des événements d\'usage et des rapports de plantage ; code fermé.',
          '[Secret AI](/fr/power-local-llm/secret-ai-review) : conversation hors ligne avec personnages, Skills et outils MCP sur des modèles GGUF, MNN et MLX. Limite : selon sa politique de confidentialité, les appels d\'outils MCP et les serveurs distants optionnels peuvent envoyer des données hors de l\'appareil, et la politique est antérieure à ces fonctions.',
          '[LocalMindAI](/fr/power-local-llm/localmindai-review) : conversation, mémoire, reconnaissance vocale et lecture de documents sur iPhone et iPad, avec le modèle d\'Apple ou des modèles téléchargés ; iOS 26. Limite : vieille de quelques jours lors de l\'analyse, et notre analyse repose sur des sources publiques.',
          '[Solair AI](/fr/power-local-llm/solair-ai-review) : assistant local d\'abord avec un repli cloud optionnel utilisant votre propre clé ; iOS 26. Limite : le repli est dans le cloud, vérifiez donc quel mode répond.',
          '[Liquid Apollo](/fr/power-local-llm/liquid-apollo-review) : gratuit, exécute hors ligne les modèles Liquid AI LFM2 (350M à 2.6B), avec un mode OpenRouter optionnel et des backends personnalisés ; iOS 18. Limite : pas uniquement local ; le mode OpenRouter exige votre propre clé et Internet.',
          '[Kai 9000](/fr/power-local-llm/kai-9000-review) : assistant open source avec mémoire persistante et outils. Limite : d\'après son analyse, il envoie les messages à un service cloud par défaut ; il ne fonctionne en local qu\'après le téléchargement d\'un modèle sur l\'appareil.',
          '[CompactifAI APP](/fr/power-local-llm/compactifai-app-review) : application gratuite de Multiverse Computing qui propose des modèles compressés. Limite : le texte actuel du store ne décrit que des modèles accessibles par API, ce qui s\'exécute sur le téléphone n\'est donc pas vérifié.',
          '[Atomic Chat](/fr/power-local-llm/atomic-chat-review) : application gratuite et open source (Apache 2.0) pour macOS, Windows, Linux, iOS et Android avec des modèles GGUF, MLX et ONNX et une API locale compatible OpenAI. Limite : c\'est un projet multiplateforme, lisez donc l\'analyse pour savoir ce qu\'inclut la version iPhone.',
          '[LLM Hub](/fr/power-local-llm/llm-hub-review) : suite Android et iPhone avec un agent compatible MCP, génération d\'images et de musique, traduction, Whisper et conversation vocale, plus une offre Premium payante. Limite : sa licence est PolyForm Noncommercial, pas une licence open source au sens usuel.',
          '[Llamatik](/fr/power-local-llm/llamatik-review) : gratuit, MIT, un chatbot hors ligne que sa propre fiche qualifie de vitrine expérimentale du SDK Kotlin du développeur. Limite : sa politique de confidentialité et son étiquette de store mentionnent l\'analytique et les rapports de plantage Firebase.',
          '[Layla](/fr/power-local-llm/layla-review) : $19.99 une fois sur Android et iOS, modèles GGUF avec compagnons pilotés par personnage, voix et génération d\'images. Limite : d\'abord pensée pour Android, et un mode Layla Cloud optionnel existe.',
        ],
      },
      chatQuiet: {
        id: 'chat-quiet-apps',
        title: 'Applications peu actives, obsolètes ou absentes de l\'App Store',
        content:
          '**Une application sans mise à jour depuis plus de trois mois peut ne plus être maintenue ; vérifiez avant de vous y fier.** Les dates ci-dessous proviennent des fiches du répertoire PromptQuorum et de chaque analyse. Une application peu active peut encore fonctionner, mais vous n\'avez ni correctifs, ni nouveaux modèles, ni indice sur un éventuel retour de l\'éditeur.',
        items: [
          '[MLC Chat](/fr/power-local-llm/mlc-chat-review) : application de référence accélérée par Metal du projet MLC LLM. Aucune mise à jour sur l\'App Store depuis le 27 septembre 2024, d\'après notre analyse. Le moteur qui la sous-tend, [MLC LLM](/fr/power-local-llm/mlc-llm-explained), est toujours actif.',
          '[LLM Farm](/fr/power-local-llm/llm-farm-review) : dernière version 1.4.3 en janvier 2025 et dernier envoi de code le 30 janvier 2026. Non installable depuis l\'App Store ni TestFlight (son README indique une indisponibilité temporaire) ; compilez depuis les sources dans Xcode si vous avez besoin de ses contrôles d\'échantillonnage.',
          '[fullmoon](/fr/power-local-llm/fullmoon-review) : gratuit, MIT, exécute de petits modèles sur Apple MLX, sans version depuis le 28 janvier 2025 et sans modification du code depuis le 5 mai 2025.',
          '[Maid](/fr/power-local-llm/maid-review) : application de conversation open source d\'abord pensée pour Android ; sa version iOS était à installer en sideload et notre analyse date les versions iOS jusqu\'à la 2.0.7 en avril 2025, ce n\'est donc pas une option App Store.',
          '[Aiko](/fr/power-local-llm/aiko-review) : toujours vendue et utile pour la transcription, mais sa dernière mise à jour date du 27 juin 2026, soit plus de trois mois.',
          'Autres applications signalées comme peu actives dans ce guide : [Atomic Bot](/fr/power-local-llm/atomic-bot-review) (26 mai 2026), [Chapper](/fr/power-local-llm/chapper-review) (6 août 2026), [Enchanted](/fr/power-local-llm/enchanted-review) (7 juillet 2026), [AI CutoutWerk](/fr/power-local-llm/ai-cutoutwerk-review) (16 février 2026) et [pcAI Photo Retouch](/fr/power-local-llm/pcai-photo-retouch-review) (20 février 2026).',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '« Peu active » est un indicateur fondé sur la date, tiré des fiches du répertoire, et non un verdict sur la qualité. Avant de payer une application de cette liste, ouvrez sa page App Store et lisez vous-même l\'historique des versions.',
          },
        ],
      },
      vision: {
        id: 'vision-camera',
        title: 'Vision et appareil photo : poser des questions sur des photos et des captures d\'écran',
        content:
          '**Plusieurs applications iPhone acceptent une image à côté de votre question et répondent sur l\'appareil, mais les petits modèles de vision se trompent davantage que ceux du cloud.** Deux voies existent : un modèle vision-langage que vous téléchargez (le modèle lit lui-même l\'image) et l\'OCR système plus un modèle de texte (le téléphone extrait le texte, puis le modèle répond). Le guide développeur iOS 27 d\'Apple indique que le framework Foundation Models accepte désormais des images avec du texte et permet à un modèle d\'appeler sur l\'appareil des outils Vision comme l\'OCR et la lecture de codes-barres.',
        items: [
          '[Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) : Ask Image et Audio Scribe avec les modèles Gemma 4. Limite : modèles LiteRT-LM uniquement ; Google rapporte des chiffres de mémoire du fournisseur, pas des mesures de PromptQuorum.',
          '[Compass - Local AI](/fr/power-local-llm/compass-local-ai-review) : lit les captures d\'écran jointes par OCR sur l\'appareil et répond avec Apple Intelligence. Limite : l\'OCR lit du texte, il ne décrit pas une scène ; exige iOS ou iPadOS 26.',
          '[Oscilla](/fr/power-local-llm/oscilla-review) : analyse de fichiers et d\'images avec des modèles capables de vision comme MiniCPM-V d\'après sa fiche. Limite : iOS 26 ou plus récent et aucune mise à jour depuis le 21 mai 2026.',
          '[Haplo AI](/fr/power-local-llm/haplo-ai-review) : entrée d\'images et génération d\'images dans une seule application. Limite : notre analyse repose sur des sources publiques, la qualité des modèles n\'est donc pas mesurée.',
          '[Ensu](/fr/power-local-llm/ensu-review) : entrée d\'images avec des modèles téléchargés, gratuit et open source. Limite : version 0.x ; l\'éditeur indique qu\'elle n\'est pas encore au niveau des grands outils cloud.',
          '[KernelAI](/fr/power-local-llm/kernelai-review) : cite la vision parmi ses fonctions avec 53 modèles téléchargeables. Limite : les modèles qui acceptent des images varient selon le modèle.',
          '[MemoryAI](/fr/power-local-llm/memoryai-review) : compréhension d\'images avec des modèles de vision après un téléchargement de modèle. Limite : vous devez choisir vous-même un modèle capable de vision.',
          '[Reins](/fr/power-local-llm/reins-review) : envoie les pièces jointes image, PDF et CSV à un modèle sur votre propre serveur, ou à un modèle MLX local. Limite : la qualité dépend du modèle de serveur que vous choisissez.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'N\'utilisez pas un petit modèle de vision sur l\'appareil pour tout ce qui a un coût en cas de mauvaise lecture, comme des étiquettes de médicaments, des documents juridiques ou l\'identification de plantes ou de champignons à manger. Considérez les réponses comme un point de départ et vérifiez la source.',
          },
        ],
      },
      voice: {
        id: 'voice-speech',
        title: 'Voix : dictée, transcription, lecture à voix haute, assistants hors ligne et Siri',
        content:
          '**La reconnaissance vocale fait partie des tâches sur l\'appareil les plus établies ; les éditeurs indiquent que des modèles de classe Whisper tournent sur les téléphones récents, et plusieurs applications se paient une seule fois au lieu d\'être facturées à la minute.** La synthèse vocale et les assistants mains libres sont plus inégaux. Pour construire vous-même une chaîne complète, voir [Créer un assistant vocal local sur votre téléphone](/fr/power-local-llm/voice-assistant-local-mobile-offline), pour la catégorie voir [Applications voix et audio comparées](/fr/power-local-llm/local-llm-voice-audio-compared) et pour comparer les moteurs voir [Comparatif des STT Whisper locaux](/fr/power-local-llm/local-whisper-stt-comparison).',
        items: [
          '[Whisper Notes](/fr/power-local-llm/whisper-notes-review) : $7.99 une fois, exécute Whisper, Parakeet et SenseVoice sur iPhone, iPad et Mac à silicium Apple, avec étiquettes d\'interlocuteurs ; la politique de confidentialité indique que l\'audio et les transcriptions ne quittent jamais l\'appareil. Limite : code fermé ; l\'analyse repose sur des sources publiques, pas sur un test pratique.',
          '[Aiko](/fr/power-local-llm/aiko-review) : transcription Whisper sur l\'appareil pour Mac, iPhone et Vision Pro, 100 langues, prise en charge de Raccourcis, un seul achat pour toutes les plateformes. Limite : dernière mise à jour le 27 juin 2026, donc peu active.',
          '[Lyonesse](/fr/power-local-llm/lyonesse-review) : transcription hors ligne, notes de réunion et dialogue avec des documents pour iPhone, iPad et Mac ; son application Apple Watch enregistre seule et transfère à l\'iPhone, qui effectue la transcription. Limite : les affirmations de l\'éditeur sur le traitement ne sont pas vérifiées de façon indépendante.',
          '[OpenWhispr](/fr/power-local-llm/openwhispr-review) : dictée et notes de réunion sous licence MIT avec des modèles Whisper ou Parakeet locaux ou un fournisseur cloud de votre choix. Limite : que votre voix reste sur l\'appareil dépend du modèle que vous choisissez.',
          '[AquaVoice](/fr/power-local-llm/aquavoice-review) : dictée vocale qui saisit le texte dans l\'application active. Limite : d\'après l\'analyse, c\'est un service cloud, cité ici pour que vous ne le confondiez pas avec une dictée locale.',
          '[Ensu](/fr/power-local-llm/ensu-review) et [MemoryAI](/fr/power-local-llm/memoryai-review) : dictée vocale locale (Ensu) et voix mains libres avec saisie vocale sur l\'appareil et lecture à voix haute (MemoryAI) au sein d\'une application de conversation. Limite : la qualité vocale suit celle du petit modèle de conversation qui se trouve derrière.',
          '[Oscilla](/fr/power-local-llm/oscilla-review), [LLM Studio Go](/fr/power-local-llm/llm-studio-go-review) et [Pocket AI](/fr/power-local-llm/pocket-ai-review) : respectivement voix en temps réel, conversation vocale avec parole, et saisie Whisper sur l\'appareil (Pro payant). Limite : la voix ajoute de la charge mémoire et batterie au modèle de conversation.',
          '[Castmates](/fr/power-local-llm/castmates-review) : appels vocaux avec des personnages qui, selon l\'éditeur, s\'exécutent sur le téléphone. Limite : code fermé, l\'affirmation repose donc sur le développeur.',
          '[Cloak: Local AI](/fr/power-local-llm/cloak-local-ai-review) : transforme les Notes vocales en notes ou en conversations. Limite : un seul modèle fixe.',
          '[Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review) : l\'assistant vocal de Home Assistant, local avec Whisper, Piper et Wyoming d\'après son analyse ; pas une application iPhone autonome. Limite : exige un serveur Home Assistant et un agent LLM optionnel en partie expérimental.',
          '[Murmur](/fr/power-local-llm/murmur-review) : compose sur l\'appareil de la musique instrumentale pour des photos, des vidéos et des jeux, avec un déverrouillage Pro unique. Limite : pas de voix chantée.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Siri et Raccourcis : [Private LLM](/fr/power-local-llm/private-llm-review) indique une intégration à Siri et à Raccourcis, [Locally AI](/fr/power-local-llm/locally-ai-review) et [Aiko](/fr/power-local-llm/aiko-review) proposent des actions Raccourcis, et notre comparatif iPhone décrit l\'action Raccourcis « Utiliser le modèle » qui peut acheminer une requête vers le modèle d\'Apple sur l\'appareil. Aucune ne remplace Siri lui-même ; vous demandez à Siri de lancer un raccourci qui appelle l\'application.',
          },
        ],
      },
      documents: {
        id: 'documents-rag',
        title: 'Documents, PDF et recherche documentaire sur le téléphone',
        content:
          '**Dialoguer avec une poignée de PDF ou de notes fonctionne sur un iPhone, mais des bibliothèques entières relèvent d\'un serveur domestique.** Le dialogue avec des documents sur l\'appareil découpe les fichiers en morceaux, les indexe avec un petit modèle d\'embeddings et transmet les meilleurs morceaux au modèle de conversation. Les petits modèles ont des fenêtres de contexte courtes, si bien que des réponses peuvent manquer du contenu et que des citations inventées sont possibles. Pour la recherche à l\'échelle d\'une bibliothèque, voir [Applications de connaissances et de recherche comparées](/fr/power-local-llm/local-llm-knowledge-retrieval-compared).',
        items: [
          '[Private Mind](/fr/power-local-llm/private-mind-review) : conversation open source (MIT) de Software Mansion qui répond à des questions sur vos fichiers PDF et texte avec une recherche sur l\'appareil et des citations de sources, via React Native ExecuTorch. Limite : la version 1.3.0 a ajouté une option Web facultative qui récupère des pages ; elle est donc hors ligne par défaut mais pas hors ligne quand cette fonction est activée.',
          '[MemoryAI](/fr/power-local-llm/memoryai-review) : questions-réponses sur documents et une Agent Memory modifiable. Limite : code fermé et des événements d\'usage quittent le téléphone.',
          '[LocalMindAI](/fr/power-local-llm/localmindai-review) : lit vos documents sur l\'appareil avec le modèle d\'Apple ou un modèle téléchargé. Limite : iOS 26 et très récente lors de l\'analyse.',
          '[Noema](/fr/power-local-llm/noema-review) : dialogue avec des documents sur l\'appareil dans ses cinq formats de modèle. Limite : code fermé ; aucun chiffre de RAM publié.',
          '[Lyonesse](/fr/power-local-llm/lyonesse-review) : dialogue avec vos propres documents à côté des transcriptions. Limite : l\'Apple Watch et les fonctions de réunion sont au centre.',
          '[Arbiter](/fr/power-local-llm/arbiter-local-ai-chat-review) : garde les documents importés sur l\'appareil pour des résumés sur un iPhone 13 Pro ou plus récent (environ 6 GB de RAM ou plus), et peut joindre LM Studio, Ollama ou le compagnon Arbiter for Mac pour un modèle plus grand. Limite : les réponses d\'un modèle plus grand quittent le téléphone pour votre ordinateur.',
          '[KernelAI](/fr/power-local-llm/kernelai-review) et [Enclave AI](/fr/power-local-llm/enclave-ai-review) : toutes deux citent des fonctions documentaires dans une application de conversation générale. Limite : vérifiez dans l\'application les limites de taille et de format des fichiers avant de vous y fier.',
          '[Reins](/fr/power-local-llm/reins-review) : pièces jointes PDF, CSV et texte envoyées à un modèle sur votre propre serveur. Limite : le traitement se fait sur le serveur, pas sur le téléphone.',
          '[AnythingLLM Mobile](/fr/power-local-llm/anythingllm-mobile-review) : Android propose un mode autonome sur l\'appareil et un appairage avec AnythingLLM Desktop ; notre analyse indique que l\'application iOS n\'est pas encore sortie. Limite : tant qu\'iOS n\'est pas disponible, utilisez un navigateur sur votre propre serveur AnythingLLM.',
        ],
      },
      translation: {
        id: 'translation',
        title: 'Traduction sur l\'appareil',
        content:
          '**La traduction convient naturellement à un petit modèle sur l\'appareil, car la tâche est étroite et plusieurs applications livrent des modèles optimisés pour la traduction.** PromptQuorum n\'a pas évalué la qualité de traduction sur iPhone. La qualité risque de baisser pour les langues rares, les expressions idiomatiques et les longs documents, et chaque moteur sur l\'appareil exige un téléchargement par modèle ou par langue.',
        items: [
          '[On-Device AI Translator](/fr/power-local-llm/on-device-ai-translator-review) : traduit sur l\'iPhone avec les modèles téléchargeables Hy-MT2, TranslateGemma et Qwen et propose la traduction intégrée d\'Apple comme moteur gratuit ; iOS 18.4 ou plus récent. Limite : les modèles d\'IA sont derrière des achats intégrés dont les sources n\'indiquent pas les prix, et la politique de confidentialité est antérieure à l\'application.',
          '[LLM Hub](/fr/power-local-llm/llm-hub-review) : inclut la traduction dans sa suite Android et iPhone. Limite : la traduction n\'est qu\'une fonction parmi beaucoup d\'autres et la licence est non commerciale.',
          'Des applications de conversation générales comme [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Locally AI](/fr/power-local-llm/locally-ai-review) peuvent aussi traduire si vous chargez un modèle multilingue, par exemple de la famille Qwen ou Gemma. Limite : pas de glossaire, pas de mise en page de document, et aucune garantie de qualité par langue.',
          'L\'application Traduire d\'Apple et la traduction système sont distinctes des applications ci-dessus et n\'ont pas été vérifiées pour ce guide ; vérifiez dans l\'application Traduire si votre paire de langues peut être téléchargée pour un usage hors ligne.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Pour des livres entiers ou de longs documents, une voie sur ordinateur est plus pratique ; voir [Traduire des livres avec des LLM](/fr/power-local-llm/translate-books-with-llms-review). La prise en charge linguistique d\'Apple Intelligence est une liste distincte, traitée dans le chapitre Apple Intelligence.',
          },
        ],
      },
      images: {
        id: 'image-generation-editing',
        title: 'Génération d\'images et retouche photo',
        content:
          '**Un iPhone peut générer des images avec de petits modèles de diffusion et retoucher des photos avec des modèles de segmentation, mais la génération est lente, gourmande en stockage et fait chauffer le téléphone.** Les fichiers de modèle se téléchargent par plusieurs gigaoctets, et PromptQuorum n\'a aucun chiffre de vitesse pour les applications d\'image sur iPhone. Pour l\'arbitrage cloud et local, voir [Génération d\'images par IA locale ou cloud](/fr/power-local-llm/local-ai-image-generation-vs-cloud) et pour la catégorie [Applications d\'image et de vidéo comparées](/fr/power-local-llm/local-llm-images-video-compared).',
        items: [
          '[Draw Things](/fr/power-local-llm/draw-things-review) : génère des images avec Stable Diffusion, SDXL, Flux et d\'autres modèles de diffusion sur macOS, iOS, iPadOS et visionOS, sans compte pour la génération locale, iOS 15.4 ou plus récent. Limite : pas 100 % local car elle propose aussi un mode cloud optionnel ; les modèles plus grands demandent plus de RAM.',
          '[Genva](/fr/power-local-llm/genva-review) : application iPhone et iPad qui transforme des invites texte et des photos en images sur l\'appareil, avec agrandissement après un téléchargement de modèle unique. Limite : lancée en version 1.0.0 le 14 octobre 2026, donc sans historique.',
          '[Haplo AI](/fr/power-local-llm/haplo-ai-review), [Off Grid AI](/fr/power-local-llm/off-grid-ai-review) et [LLM Studio Go](/fr/power-local-llm/llm-studio-go-review) : applications de conversation qui génèrent aussi des images sur l\'appareil (Haplo AI, Off Grid AI avec des modèles Stable Diffusion, LLM Studio Go avec aussi musique et parole). Limite : la qualité et la vitesse des images sont inférieures à celles des applications dédiées.',
          '[Local AI Chat - pocket](/fr/power-local-llm/local-ai-chat-pocket-review) et [Layla](/fr/power-local-llm/layla-review) : conversation hors ligne avec génération d\'images, Layla aussi avec voix et personnages. Limite : Local AI Chat - pocket est peu active depuis le 27 mai 2026 ; Layla est d\'abord pensée pour Android.',
          '[Tina](/fr/power-local-llm/tina-review) : génère des images via ComfyUI sur un serveur que vous hébergez, et peut aussi exécuter des modèles sur l\'appareil. Limite : l\'étape d\'image exige votre propre serveur.',
          '[AI CutoutWerk](/fr/power-local-llm/ai-cutoutwerk-review) : suppression d\'arrière-plan hors ligne et compositeur de détourage pour iPhone, iPad et Mac, avec un modèle de segmentation Core ML. Limite : aucune mise à jour depuis le 16 février 2026.',
          '[pcAI Photo Retouch](/fr/power-local-llm/pcai-photo-retouch-review) : restaure d\'anciennes photos et applique des styles artistiques avec une IA qui, selon le développeur, s\'exécute entièrement sur l\'appareil. Limite : modèle non nommé, source non publiée, aucune mise à jour depuis le 20 février 2026.',
        ],
      },
      photos: {
        id: 'photos-gallery-search',
        title: 'Photothèques et recherche dans la galerie',
        content:
          '**La recherche de photos par IA sur iPhone est généralement un client pour une photothèque qui fait l\'indexation ailleurs : soit sur le téléphone via une fonction à activer, soit sur un serveur que vous gérez.** Les trois photothèques ci-dessous adoptent des approches différentes, et aucune n\'ajoute de modèle de conversation. La reconnaissance faciale traite des données biométriques ; vérifiez donc les règles du lieu où vous vivez et où vivent les personnes de vos photos avant de l\'activer.',
        items: [
          '[Ente Photos](/fr/power-local-llm/ente-photos-review) : sauvegarde de photos open source qui, selon Ente, est chiffrée de bout en bout ; la reconnaissance faciale et la recherche magique en langage naturel s\'exécutent sur votre appareil et restent désactivées tant que vous ne les activez pas. Limite : les photos sont stockées chiffrées dans le cloud d\'Ente, et la première indexation consomme de la batterie.',
          '[Immich](/fr/power-local-llm/immich-review) : sauvegarde de photos et de vidéos auto-hébergée avec des applications iPhone et Android ; la recherche intelligente et la reconnaissance faciale s\'exécutent dans un conteneur d\'apprentissage automatique que vous hébergez, installé avec Docker. Limite : exige un serveur, la base de données ne contient que des métadonnées, les fichiers demandent donc une sauvegarde distincte, et il n\'y a aucune fonction de conversation ou de LLM.',
          '[Mylio Photos](/fr/power-local-llm/mylio-photos-review) : photothèque de photos, vidéos et documents avec recherche SmartTag, reconnaissance des visages et du texte qui, selon Mylio, s\'exécutent sur vos propres appareils ; téléchargement gratuit, formules par abonnement. Limite : Mylio n\'indique pas où s\'exécute le chatbot d\'aide intégré.',
          'Des galeries web auto-hébergées que vous ouvrez dans le navigateur de l\'iPhone ou une application compagnon, comme [Test de PhotoPrism](/fr/power-local-llm/photoprism-review), [Test de Photoview](/fr/power-local-llm/photoview-review) et [Test de Home Gallery](/fr/power-local-llm/home-gallery-review), sont analysées séparément ; lisez chaque analyse pour savoir ce qui s\'exécute où.',
        ],
      },
      notes: {
        id: 'notes-knowledge',
        title: 'Notes, bases de connaissances et favoris',
        content:
          '**La plupart des outils de notes et de favoris placent l\'IA sur un serveur ou un fournisseur de modèles de votre choix, et l\'application iPhone sert à capturer et à lire.** Cela peut rester entièrement privé si le serveur est le vôtre et le modèle local, mais ce n\'est pas de l\'inférence sur l\'appareil. Chaque analyse indique ce qui s\'exécute où.',
        items: [
          '[Hillnote](/fr/power-local-llm/hillnote-review) : espace de notes Markdown local d\'abord pour Mac, Windows, iPhone et Android, avec IA sur l\'appareil via Ollama et Apple Intelligence, plus modèles cloud et synchronisation optionnels. Limite : Ollama s\'exécute sur un ordinateur, pas sur le téléphone, et les modèles cloud sont optionnels mais pas locaux.',
          '[Logseq](/fr/power-local-llm/logseq-review) : outil de plan open source, local d\'abord ; la version à base de données 2.0.2 est une bêta dont le README avertit qu\'une perte de données est possible. Limite : l\'IA passe par un serveur MCP optionnel, pas par un modèle intégré.',
          '[SiYuan](/fr/power-local-llm/siyuan-review) : espace de connaissances auto-hébergé sous licence AGPL sur Windows, macOS, Linux, Android, iOS et HarmonyOS, avec des fonctions d\'IA optionnelles qui se connectent à un fournisseur de modèles de votre choix. Limite : la synchronisation cloud exige un abonnement ou un achat PRO unique.',
          '[Karakeep](/fr/power-local-llm/karakeep-review) : application de favoris et de notes auto-hébergée avec des applications natives iOS et Android et étiquetage par IA via OpenAI ou un point de terminaison Ollama local. Limite : vous exécutez le serveur avec Docker, et l\'étiquetage n\'est local que si vous choisissez Ollama.',
          '[Linkwarden](/fr/power-local-llm/linkwarden-review) : archive une copie de chaque page que vous enregistrez et peut étiqueter les liens avec un modèle d\'IA que vous configurez, en auto-hébergement ou sur une édition Cloud payante. Limite : l\'application iPhone est un client ; l\'étape d\'IA s\'exécute sur le serveur.',
          '[Lyonesse](/fr/power-local-llm/lyonesse-review) et [Cloak: Local AI](/fr/power-local-llm/cloak-local-ai-review) : transforment des enregistrements en notes (Lyonesse) ou en récap hebdomadaire à partir de Photos, Localisation et Notes vocales (Cloak). Limite : toutes deux ont un code fermé.',
        ],
      },
      health: {
        id: 'health-wellness',
        title: 'Santé et bien-être : questions',
        content:
          '**Une application iPhone analysée répond à des questions sur vos données Apple Health avec Apple Intelligence sur l\'appareil, et c\'est la seule application de santé de notre sélection iPhone.** Les données de santé sont des données personnelles sensibles, et un petit modèle de langage n\'est pas un médecin.',
        items: [
          '[Pajdo](/fr/power-local-llm/pajdo-review) : application gratuite pour iPhone, iPad et Apple Watch qui transforme les données Apple Health en l\'une de huit humeurs et, d\'après son site web, répond à vos questions sur ces données avec Apple Intelligence sur l\'appareil. L\'offre gratuite inclut 5 questions par semaine ; Pro lève la limite et ajoute la planification d\'entraînements et un rapport de consultation médicale. Limite : code fermé, iOS 26 ou plus récent, et l\'affirmation du traitement sur l\'appareil repose sur la parole du développeur.',
          'Les applications de conversation générales des chapitres Conversation peuvent aborder le sommeil, l\'entraînement ou la nutrition en termes généraux. Limite : elles n\'ont pas accès à vos données de santé sauf si une application en demande l\'autorisation, et les petits modèles peuvent énoncer des faits erronés avec assurance.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Les réponses sur l\'appareil ne sont pas un avis médical et ne remplacent pas un médecin. Ne les utilisez pas pour interpréter des symptômes, des alertes de fréquence cardiaque ou des questions sur des médicaments ; lisez la politique de confidentialité de l\'application avant de lui accorder l\'accès à Apple Health.',
          },
        ],
      },
      roleplay: {
        id: 'roleplay-companions',
        title: 'Jeu de rôle et applications de compagnie, avec notes de sécurité du contenu',
        content:
          '**Le jeu de rôle et la conversation de compagnie représentent une grande part du marché des applications d\'IA locale sur iPhone, et les applications diffèrent nettement sur le fait que le modèle s\'exécute ou non sur le téléphone, sur les contenus autorisés et sur le traitement des mineurs.** Local ne veut pas dire modéré, et cloud ne veut pas dire plus sûr. Lisez la classification d\'âge et les réglages de contenu mature avant que vous ou quelqu\'un de votre foyer n\'en installe une. Pour les interfaces sur ordinateur, voir [SillyTavern, Agnai et RisuAI pour le jeu de rôle](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        items: [
          '[Castmates](/fr/power-local-llm/castmates-review) : application iPhone gratuite avec 35 personnages prêts à l\'emploi, personnages personnalisés et sans compte ; le développeur nomme Impish Llama 3B (Q4_K_M) exécuté via llama.cpp après un téléchargement d\'environ 1.9 GB. L\'offre Pro supprime la limite quotidienne de messages et débloque un mode Mature optionnel réservé aux adultes. Limite : code fermé, l\'affirmation du traitement sur l\'appareil repose donc sur le développeur.',
          '[Frankly AI](/fr/power-local-llm/frankly-ai-review) : modèles sur l\'appareil avec personnages orientés tâches et sans compte ; limite quotidienne gratuite. Limite : les personnages sont orientés tâches, et Pro débloque le reste de l\'application.',
          '[Layla](/fr/power-local-llm/layla-review) : compagnon d\'IA piloté par personnage avec personnages de jeu de rôle, voix et génération d\'images sur l\'appareil ; $19.99 une fois. Limite : un mode Layla Cloud optionnel, activé séparément, existe.',
          '[Secret AI](/fr/power-local-llm/secret-ai-review) : personnages personnalisés sur des modèles GGUF, MNN et MLX ; l\'éditeur indique que les conversations, personnages et photos restent privés. Limite : selon sa politique de confidentialité, les outils MCP et les serveurs distants peuvent envoyer des données hors de l\'appareil.',
          '[HiWaifu](/fr/power-local-llm/hiwaifu-review) : jeu de rôle avec mémoire à long terme, lorebooks et conversations de groupe, classé 18+. Limite : il semble s\'agir d\'un service cloud, et sa fiche n\'indique pas où s\'exécute le modèle.',
          '[Swerve](/fr/power-local-llm/swerve-ai-review) : conversation d\'histoires et de personnages avec personnages communautaires et ramifications. Limite : d\'après sa fiche, c\'est un service en ligne, pas de l\'IA sur l\'appareil.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Notes de sécurité, en termes simples. D\'abord l\'âge : plusieurs de ces applications ont une classification App Store 18+ ou un mode réservé aux adultes, et un modèle sur l\'appareil n\'a aucun filtre côté serveur sur lequel compter. Ensuite la confidentialité : les applications de jeu de rôle cloud envoient vos conversations à un service, et même des applications locales peuvent envoyer des données d\'analyse. Troisièmement la dépendance affective : la conversation de compagnie peut sembler personnelle, et c\'est une caractéristique de conception, pas une relation. Quatrièmement les données réelles : ne saisissez jamais votre adresse, vos informations de santé ou les informations privées d\'autres personnes dans une conversation de jeu de rôle. Pour l\'iPhone d\'un enfant, utilisez les limites de contenu et de classification des apps de Temps d\'écran d\'Apple plutôt que de vous fier aux réglages propres d\'une application.',
          },
        ],
      },
      smartHome: {
        id: 'smart-home-agents',
        title: 'Maison connectée et agents',
        content:
          '**Sur iPhone, l\'IA de maison connectée et les agents sont presque toujours des clients de logiciels qui s\'exécutent sur un serveur domestique, car iOS ne maintiendra pas un modèle ou un agent actif en arrière-plan.** Le téléphone est le microphone, l\'écran et la télécommande ; le serveur domestique fait le travail de longue durée. Pour un regard honnête sur la possibilité pratique d\'agents locaux autonomes, voir [Les agents locaux autonomes fonctionnent-ils vraiment ?](/fr/power-local-llm/autonomous-local-agents-actually-work).',
        items: [
          '[Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review) : assistant vocal de Home Assistant, entièrement local avec Whisper, Piper et Wyoming, avec agents LLM cloud et Ollama optionnels. Limite : pas une application autonome ; la chaîne locale complète exige Home Assistant OS.',
          '[Scrypted](/fr/power-local-llm/scrypted-review) : plateforme open source de caméras et de NVR qui diffuse les caméras vers HomeKit, Google Home et Home Assistant, avec des résumés LLM locaux optionnels via llama.cpp. Limite : s\'exécute sur votre propre serveur, et les images de caméra montrant d\'autres personnes entraînent des obligations légales dans de nombreux pays.',
          '[Nekoni](/fr/power-local-llm/nekoni-review) : agent personnel auto-hébergé (Ollama, documents, compétences planifiées) sur un ordinateur dont vous êtes propriétaire, avec lequel vous discutez depuis un iPhone ou un navigateur via une liaison chiffrée directe. Limite : exige un Mac ou une machine Linux allumés en permanence.',
          '[Kai 9000](/fr/power-local-llm/kai-9000-review) et [LLM Hub](/fr/power-local-llm/llm-hub-review) : assistants avec respectivement une mémoire persistante et un agent compatible MCP. Limite : l\'usage d\'outils et la recherche web ajoutent des appels réseau, ce ne sont donc pas des fonctions hors ligne.',
          '[Atomic Bot](/fr/power-local-llm/atomic-bot-review) : intègre le framework d\'agents open source [Test d\'OpenClaw](/fr/power-local-llm/openclaw-review) pour ordinateur et mobile et peut s\'exécuter en local ou dans le cloud. Limite : signalée comme peu active dans ce guide (dernière mise à jour le 26 mai 2026).',
        ],
      },
      remote: {
        id: 'remote-mode',
        title: 'Mode distant : l\'iPhone comme client léger de votre propre serveur',
        content:
          '**Si votre iPhone est trop petit pour le modèle voulu, exécutez le modèle sur un Mac ou un PC à la maison et utilisez l\'iPhone comme écran.** C\'est la voie habituelle vers les modèles de 7B à 70B depuis un iPhone. La page de téléchargement d\'Ollama liste macOS, Windows et Linux et aucune application iPhone, le serveur se trouve donc ailleurs (notre comparatif iPhone le consigne). Côté serveur, voir [Guide des LLM locaux sur Apple Silicon](/fr/local-llms/apple-silicon-local-llm-guide-2026), [MLX, Ollama et llama.cpp sur Mac](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) et [Outils d\'exécution et de service comparés](/fr/power-local-llm/local-llm-run-serve-compared).',
        columns: ['Application', 'Se connecte à', 'Modèles aussi sur le téléphone'],
        rows: [
          {
            'Application': '[Reins](/fr/power-local-llm/reins-review)',
            'Se connecte à': 'Ollama, LM Studio, compatible OpenAI',
            'Modèles aussi sur le téléphone': 'Oui, modèles MLX',
          },
          {
            'Application': '[Enchanted](/fr/power-local-llm/enchanted-review)',
            'Se connecte à': 'Ollama uniquement',
            'Modèles aussi sur le téléphone': 'Non',
          },
          {
            'Application': '[OpenClient](/fr/power-local-llm/openclient-review)',
            'Se connecte à': 'Ollama, LiteLLM, compatible OpenAI',
            'Modèles aussi sur le téléphone': 'Non',
          },
          {
            'Application': '[Chapper](/fr/power-local-llm/chapper-review)',
            'Se connecte à': 'LM Studio, Ollama, serveur llama.cpp',
            'Modèles aussi sur le téléphone': 'Oui, module à $4.99',
          },
          {
            'Application': '[Tina](/fr/power-local-llm/tina-review)',
            'Se connecte à': 'Ollama, llama.cpp, ComfyUI',
            'Modèles aussi sur le téléphone': 'Oui',
          },
          {
            'Application': '[LM Mini](/fr/power-local-llm/lm-mini-review)',
            'Se connecte à': 'LM Studio, Ollama, Jan AI, oMLX',
            'Modèles aussi sur le téléphone': 'Oui',
          },
          {
            'Application': '[Arbiter](/fr/power-local-llm/arbiter-local-ai-chat-review)',
            'Se connecte à': 'LM Studio, Ollama, Arbiter for Mac',
            'Modèles aussi sur le téléphone': 'Oui',
          },
          {
            'Application': '[LocalMind](/fr/power-local-llm/localmind-review)',
            'Se connecte à': 'Ollama, LM Studio, OpenRouter',
            'Modèles aussi sur le téléphone': 'Oui',
          },
          {
            'Application': '[Liquid Apollo](/fr/power-local-llm/liquid-apollo-review)',
            'Se connecte à': 'LM Studio, Ollama, OpenRouter',
            'Modèles aussi sur le téléphone': 'Oui, LFM2',
          },
          {
            'Application': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            'Se connecte à': 'LM Studio sur un Mac (LM Link)',
            'Modèles aussi sur le téléphone': 'Oui',
          },
          {
            'Application': '[MLXHub](/fr/power-local-llm/mlxhub-review)',
            'Se connecte à': 'Sert un modèle sur votre Wi-Fi (Plus)',
            'Modèles aussi sur le téléphone': 'Oui',
          },
          {
            'Application': '[Nekoni](/fr/power-local-llm/nekoni-review)',
            'Se connecte à': 'Agent sur votre propre ordinateur',
            'Modèles aussi sur le téléphone': 'Non',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Hors de chez vous, il faut un chemin sécurisé vers le serveur. Un VPN maillé privé comme Tailscale est un choix courant, car Ollama n\'exige pas d\'authentification par défaut et ne doit pas être exposé à l\'Internet public via un port du routeur. Vérifiez dans l\'analyse et les réglages de chaque client la prise en charge de HTTPS et des clés d\'API avant de vous connecter.',
          },
          {
            type: 'tip',
            text:
              'Plusieurs clients ci-dessus disent aussi pouvoir charger des modèles sur le téléphone, ce qui en fait une bonne application unique : petit modèle hors ligne, grand modèle à la maison. Lisez [IA locale derrière un pare-feu et hors ligne](/fr/power-local-llm/local-ai-behind-firewall-offline-2026) pour les configurations avec pare-feu et hors ligne.',
          },
        ],
      },
      developers: {
        id: 'developer-paths',
        title:
          'Pistes pour les développeurs : Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch et Foundation Models',
        content:
          '**Les développeurs qui créent des fonctions d\'IA pour iPhone choisissent entre le modèle propre à Apple, les environnements d\'exécution d\'Apple pour votre propre modèle et des moteurs multiplateformes.** Ce choix détermine quels téléphones, quelles langues et quelles règles de store s\'appliquent. Ce chapitre n\'est qu\'une orientation ; lisez la documentation de chaque projet avant de développer.',
        items: [
          '**Framework Foundation Models :** API Swift native d\'Apple pour le modèle sur l\'appareil, avec images, outils Vision, Dynamic Profiles et, via un protocole Language Model, des fournisseurs cloud (Apple, guide iOS WWDC26). Exige du matériel compatible Apple Intelligence. Documentation : [Foundation Models](https://developer.apple.com/documentation/FoundationModels).',
          '**Core ML :** framework d\'Apple pour exécuter des modèles convertis sur le CPU, le GPU et le Neural Engine ; la voie établie de longue date pour la vision, l\'audio et les petits modèles. [AI CutoutWerk](/fr/power-local-llm/ai-cutoutwerk-review) livre un modèle de segmentation Core ML. Documentation : [Core ML](https://developer.apple.com/documentation/coreml).',
          '**Core AI :** nouveau framework qu\'Apple a introduit avec iOS 27 pour apporter vos propres modèles sur l\'appareil, avec mémoire unifiée et Neural Engine, et compilation anticipée. Trop récent pour la plupart des applications de ce guide ; voir le [guide iOS WWDC26](https://developer.apple.com/wwdc26/guides/ios/).',
          '**MLX Swift :** framework de tableaux MLX d\'Apple pour Swift, derrière [Locally AI](/fr/power-local-llm/locally-ai-review), [fullmoon](/fr/power-local-llm/fullmoon-review) et [MLXHub](/fr/power-local-llm/mlxhub-review). [mlx-swift](https://github.com/ml-explore/mlx-swift). Pour le côté Python, voir [MLX-LM expliqué](/fr/power-local-llm/mlx-lm-explained).',
          '**llama.cpp :** moteur C/C++ avec Metal qui exécute des fichiers GGUF, derrière [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) et [Pocket AI](/fr/power-local-llm/pocket-ai-review). [llama.cpp](https://github.com/ggml-org/llama.cpp).',
          '**MLC LLM :** environnement d\'exécution à base de compilateur avec documentation de déploiement iOS et l\'application de référence [MLC Chat](/fr/power-local-llm/mlc-chat-review). Voir [MLC LLM](/fr/power-local-llm/mlc-llm-explained) et la [documentation MLC iOS](https://llm.mlc.ai/docs/deploy/ios.html).',
          '**ExecuTorch :** environnement d\'exécution sur l\'appareil de PyTorch, utilisé via React Native ExecuTorch dans [Private Mind](/fr/power-local-llm/private-mind-review) et pris en charge par [Noema](/fr/power-local-llm/noema-review). [ExecuTorch](https://github.com/pytorch/executorch).',
          '**LiteRT-LM :** environnement d\'exécution de Google derrière [Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) ([LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)).',
          '**SDK :** [RunAnywhere](/fr/power-local-llm/runanywhere-review) (LLM, reconnaissance vocale, synthèse vocale et détection d\'activité vocale ; licence personnalisée avec conditions commerciales), [Llamatik](/fr/power-local-llm/llamatik-review) (Kotlin Multiplatform, MIT) et [SwiftLM](/fr/power-local-llm/swiftlm-review) (serveur Swift MLX pour Mac à silicium Apple avec l\'application compagnon iOS SwiftBuddy).',
          '**Bêtas TestFlight :** un moyen gratuit de distribuer des versions préliminaires à des testeurs ; les versions expirent, prévoyez-le. Les règles d\'App Review d\'Apple s\'appliquent toujours à la version publiée.',
        ],
      },
      privacy: {
        id: 'privacy-telemetry',
        title: 'Confidentialité et télémétrie : la réalité',
        content:
          '**« S\'exécute sur votre appareil » et « n\'envoie rien » sont deux affirmations différentes, et seule la seconde est une garantie de confidentialité.** Les étiquettes de confidentialité de l\'App Store d\'Apple sont renseignées par le développeur : elles décrivent donc ce que le développeur dit que l\'application fait. Un modèle sur l\'appareil peut quand même se trouver dans une application qui envoie des rapports de plantage, des événements d\'usage, des recherches web optionnelles ou des téléchargements de modèles. Toutes les déclarations de confidentialité au niveau des applications citées ici proviennent de la politique de confidentialité, de l\'étiquette App Store ou de la page de l\'éditeur de chaque application, telles que résumées dans l\'analyse liée, et n\'ont pas été vérifiées par analyse réseau. Pour une liste de contrôle plus complète, voir [Liste de contrôle sécurité et confidentialité des LLM locaux](/fr/local-llms/local-llm-security-privacy-checklist).',
        items: [
          '**Ce que « zéro télémétrie » peut signifier :** aucun SDK d\'analyse dans l\'application. Cela ne couvre pas le téléchargement du modèle (l\'hébergeur voit votre requête), l\'App Store, la recherche web optionnelle, les serveurs distants que vous connectez, ni les sauvegardes qui incluent les données de l\'application.',
          '**Étiquettes dans nos analyses :** [Oscilla](/fr/power-local-llm/oscilla-review) porte l\'étiquette « Data Not Collected » d\'Apple ; [Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) indique certains diagnostics de l\'appareil sur son étiquette ; [MemoryAI](/fr/power-local-llm/memoryai-review) et [Llamatik](/fr/power-local-llm/llamatik-review) envoient des événements d\'usage ou des analyses et des rapports de plantage sans contenu de conversation, d\'après leurs politiques.',
          '**Fonctions optionnelles qui brisent le « hors ligne » :** la recherche web dans [Compass - Local AI](/fr/power-local-llm/compass-local-ai-review) (DuckDuckGo ou Brave), l\'option Web de [Private Mind](/fr/power-local-llm/private-mind-review), les outils MCP de [Secret AI](/fr/power-local-llm/secret-ai-review) et le mode OpenRouter de [Liquid Apollo](/fr/power-local-llm/liquid-apollo-review).',
          '**Cloud par défaut :** [Kai 9000](/fr/power-local-llm/kai-9000-review) envoie les messages à un service cloud par défaut, d\'après son analyse, et ne fonctionne en local qu\'après le téléchargement d\'un modèle sur l\'appareil ; [Swerve](/fr/power-local-llm/swerve-ai-review) est documenté comme un service en ligne, et [HiWaifu](/fr/power-local-llm/hiwaifu-review) semble en être un (sa fiche n\'indique pas où s\'exécute le modèle) ; [AquaVoice](/fr/power-local-llm/aquavoice-review) est une dictée cloud.',
          '**Dérive des politiques et des versions :** [LM Mini](/fr/power-local-llm/lm-mini-review) a, d\'après sa politique de confidentialité, une version datée d\'août 2025 qui ne décrit que sa connexion à LM Studio, et [Secret AI](/fr/power-local-llm/secret-ai-review) a une politique mise à jour pour la dernière fois en mai 2025, avant l\'ajout des outils. Comparez la date à la version de l\'application.',
          '**Vérifiez par vous-même, en trois étapes :** (1) Téléchargez le modèle en Wi-Fi, puis activez le mode Avion et testez l\'application. (2) Utilisez le téléphone normalement pendant une semaine, puis ouvrez Réglages > Confidentialité et sécurité > Rapport de confidentialité des apps, qui, selon Apple, montre comment les applications utilisent les autorisations et leur activité réseau. (3) Lisez l\'étiquette et la politique de confidentialité pour repérer l\'analytique, et préférez une application open source si vous voulez inspecter le code.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Les analyses de PromptQuorum indiquent ce que disent les sources de chaque application et si nous l\'avons testée ; lorsqu\'une analyse indique « non testé en pratique », les déclarations de confidentialité sont celles du développeur, pas les nôtres. Ce guide n\'a effectué aucune capture réseau sur aucune application.',
          },
        ],
      },
      batteryThermal: {
        id: 'battery-thermal-memory',
        title: 'Batterie, chaleur et limites de mémoire',
        content:
          '**Générer du texte occupe la puce, attendez-vous donc à une chaleur et à une décharge de batterie notables pendant que le modèle tourne ; un usage occasionnel coûte peu.** PromptQuorum n\'a mesuré ni la consommation électrique ni l\'usage de la batterie sur aucun iPhone, et nous n\'avons trouvé aucun chiffre publié que nous puissions citer.',
        items: [
          '**Chaleur :** une génération prolongée peut conduire iOS à réduire les fréquences d\'horloge, si bien que les tokens par seconde diminuent. Le moment varie selon le téléphone, la coque, la charge et la température de la pièce, et nous ne l\'avons pas mesuré.',
          '**Directive 2.4.2 :** Apple indique aux développeurs que les applications ne doivent pas vider rapidement la batterie ni générer de chaleur excessive ; les applications bien conçues limitent donc la longueur ou mettent en pause les longues exécutions.',
          '**Mémoire :** un modèle reste en RAM tant qu\'il est chargé. Si iOS a besoin de mémoire pour une autre application, il peut fermer l\'application de conversation et l\'état de la conversation peut être perdu ; fermez les autres applications lourdes avant de charger un modèle.',
          '**Charger pendant la génération** ajoute de la chaleur ; mettez en pause si le téléphone semble chaud, et évitez le soleil direct ou une voiture chaude.',
          '**Stockage :** un modèle de 3-4B pèse environ 2.5-3.7 GB, donc trois applications avec trois modèles chacune occupent environ 10 GB. Gardez une application et un ou deux modèles.',
          '**Le mode Économie d\'énergie** peut ralentir la génération car iOS réduit les performances pour économiser la batterie ; désactivez-le pour les longues sessions.',
        ],
      },
      partly: {
        id: 'works-partly',
        title: 'Ce qui ne fonctionne qu\'en partie',
        content:
          '**« En partie » signifie que la fonction existe sur iPhone, mais avec une limite à connaître avant d\'en faire une habitude.**',
        items: [
          '**Voix mains libres avec Siri :** Raccourcis peut appeler une application, mais Siri reste Siri ; vous ne pouvez pas faire d\'un modèle local l\'assistant du système. Siri AI d\'Apple est une bêta distincte d\'iOS 27 qui n\'est pas disponible initialement dans l\'UE.',
          '**Génération d\'images :** possible avec de petits modèles de diffusion, mais lente, gourmande en stockage et chaude ; [Draw Things](/fr/power-local-llm/draw-things-review) propose aussi un mode cloud optionnel.',
          '**Recherche de photos :** l\'étape d\'IA est à activer sur le téléphone ([Ente Photos](/fr/power-local-llm/ente-photos-review)) ou s\'exécute sur un serveur que vous hébergez ([Immich](/fr/power-local-llm/immich-review)).',
          '**Notes et favoris :** l\'application iPhone est un client ; le travail du modèle se fait sur un serveur ou un fournisseur de votre choix.',
          '**Agents :** les tâches courtes au premier plan fonctionnent ; les agents de longue durée ou planifiés exigent un serveur domestique ([Nekoni](/fr/power-local-llm/nekoni-review)).',
          '**Questions de santé :** possibles avec le modèle d\'Apple sur l\'appareil ([Pajdo](/fr/power-local-llm/pajdo-review)), mais pas un substitut à un avis médical.',
          '**Documents longs :** les petits modèles ont de petites fenêtres de contexte, donc les gros PDF exigent un découpage ou un serveur.',
        ],
      },
      notPossible: {
        id: 'not-possible',
        title: 'Impossible ou pas encore possible sur iPhone',
        content:
          '**Voici les souhaits que l\'on apporte le plus souvent à l\'IA locale sur iPhone et qu\'aucune application iPhone analysée ne satisfait aujourd\'hui.** Certains sont des limites strictes du matériel ou des règles de l\'App Store ; d\'autres sont des lacunes qui pourraient se combler à mesure qu\'Apple et les éditeurs d\'applications livrent de nouveaux frameworks comme Core AI.',
        columns: ['Souhait', 'Statut', 'Pourquoi', 'À la place'],
        rows: [
          {
            'Souhait': 'Modèle de 30B-70B sur le téléphone',
            'Statut': 'Pas possible',
            'Pourquoi': 'Exige bien plus de RAM qu\'un iPhone',
            'À la place': 'Mode distant vers un serveur domestique',
          },
          {
            'Souhait': 'Raisonnement et code de niveau cloud',
            'Statut': 'Pas encore',
            'Pourquoi': 'Les petits modèles échouent sur plusieurs étapes',
            'À la place': 'Application cloud pour les questions difficiles',
          },
          {
            'Souhait': 'Exécuter Ollama ou Docker sur le téléphone',
            'Statut': 'Pas possible',
            'Pourquoi': 'Pas d\'application Ollama ou Docker pour iPhone ; bac à sable',
            'À la place': 'Les exécuter sur Mac ou PC',
          },
          {
            'Souhait': 'Remplacer Siri par votre modèle',
            'Statut': 'Pas possible',
            'Pourquoi': 'Siri est contrôlé par le système',
            'À la place': 'Raccourcis qui appellent une application',
          },
          {
            'Souhait': 'Agent permanent en arrière-plan',
            'Statut': 'Pas possible',
            'Pourquoi': 'Services en arrière-plan limités (2.5.4)',
            'À la place': 'Agent sur un serveur domestique',
          },
          {
            'Souhait': 'Affiner un modèle sur le téléphone',
            'Statut': 'Peu réaliste',
            'Pourquoi': 'Mémoire, chaleur, pas d\'outils d\'application',
            'À la place': 'Entraîner sur un Mac ou un GPU',
          },
          {
            'Souhait': 'Synchroniser les conversations avec Mac et iPad',
            'Statut': 'Plutôt non',
            'Pourquoi': 'L\'historique est propre à chaque appareil dans la plupart des applications',
            'À la place': 'Interface web du serveur, p. ex. Open WebUI',
          },
          {
            'Souhait': 'AnythingLLM Mobile sur iPhone',
            'Statut': 'Pas encore',
            'Pourquoi': 'Application iOS non sortie d\'après l\'analyse',
            'À la place': 'Navigateur vers votre serveur',
          },
          {
            'Souhait': 'Apple Intelligence sur iPhone 14',
            'Statut': 'Pas possible',
            'Pourquoi': 'Absent de la liste d\'appareils d\'Apple',
            'À la place': 'Applications de modèles tierces',
          },
          {
            'Souhait': 'Génération de musique avec voix',
            'Statut': 'Pas encore',
            'Pourquoi': 'Murmur ne fait que de l\'instrumental',
            'À la place': 'Outils sur ordinateur',
          },
          {
            'Souhait': 'Preuve qu\'une application est privée',
            'Statut': 'Pas via une étiquette',
            'Pourquoi': 'Les étiquettes sont déclarées par le développeur',
            'À la place': 'Mode Avion et Rapport de confidentialité des apps',
          },
        ],
      },
      decision: {
        id: 'decision-path',
        title: 'Arbre de décision : j\'ai cet iPhone et je veux ceci',
        content:
          '**Trouvez votre ligne selon le niveau de téléphone et l\'objectif, puis ouvrez le chapitre lié.** Les choix sont des points de départ tirés de nos analyses, pas des classements ; une application peu active au chapitre sur la maintenance n\'est citée que s\'il n\'existe pas de meilleure option.',
        columns: ['Si vous avez', 'Et voulez', 'Commencez ici'],
        rows: [
          {
            'Si vous avez': 'iPhone 4 GB (12, 13, SE)',
            'Et voulez': 'Conversation générale',
            'Commencez ici': 'Reins ou Enchanted avec un serveur domestique',
          },
          {
            'Si vous avez': 'iPhone 6 GB (14, 15)',
            'Et voulez': 'Conversation gratuite hors ligne',
            'Commencez ici': 'PocketPal AI avec un modèle de 1-2B',
          },
          {
            'Si vous avez': 'iPhone 8 GB (16, 17)',
            'Et voulez': 'Conversation gratuite hors ligne',
            'Commencez ici': 'PocketPal AI ou Locally AI',
          },
          {
            'Si vous avez': 'iPhone 8 GB',
            'Et voulez': 'Siri et Raccourcis',
            'Commencez ici': 'Private LLM ou Locally AI',
          },
          {
            'Si vous avez': 'iPhone 12 GB (17 Pro)',
            'Et voulez': 'Le plus gros modèle sur le téléphone',
            'Commencez ici': 'Noema ou Gallery avec Gemma 4',
          },
          {
            'Si vous avez': 'iPhone compatible Apple Intelligence',
            'Et voulez': 'Aucun téléchargement de modèle',
            'Commencez ici': 'Compass ou Locally AI (modèle Apple)',
          },
          {
            'Si vous avez': 'N\'importe quel iPhone',
            'Et voulez': 'Transcriptions de réunions',
            'Commencez ici': 'Whisper Notes ou Lyonesse',
          },
          {
            'Si vous avez': 'N\'importe quel iPhone',
            'Et voulez': 'Dialoguer avec quelques PDF',
            'Commencez ici': 'Private Mind ou MemoryAI',
          },
          {
            'Si vous avez': 'N\'importe quel iPhone',
            'Et voulez': 'Traduction',
            'Commencez ici': 'On-Device AI Translator',
          },
          {
            'Si vous avez': 'iPhone 8 GB+',
            'Et voulez': 'Images à partir de texte',
            'Commencez ici': 'Draw Things',
          },
          {
            'Si vous avez': 'N\'importe quel iPhone',
            'Et voulez': 'Recherche de photos, serveur perso',
            'Commencez ici': 'Immich',
          },
          {
            'Si vous avez': 'N\'importe quel iPhone, PC à la maison',
            'Et voulez': 'Modèles de 7B-70B',
            'Commencez ici': 'Reins, OpenClient ou LM Mini',
          },
          {
            'Si vous avez': 'N\'importe quel iPhone',
            'Et voulez': 'Voix pour la maison connectée',
            'Commencez ici': 'Home Assistant Assist',
          },
          {
            'Si vous avez': 'Adolescent sur l\'iPhone',
            'Et voulez': 'Conversation sûre',
            'Commencez ici': 'Limites Temps d\'écran, puis lire les notes de sécurité',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Choisir un modèle selon la taille du fichier plutôt que selon le niveau de RAM.** Un fichier qui se télécharge peut quand même être fermé par iOS ; faites correspondre la taille au tableau des niveaux et testez avec le benchmark de l\'application.',
          '**Attendre une qualité de cloud.** Utilisez un petit modèle pour la rédaction, les résumés, la traduction et les questions-réponses rapides, et un modèle cloud ou de serveur domestique pour le raisonnement difficile.',
          '**Prendre « Apple Intelligence » pour « hors ligne ».** Apple Intelligence peut utiliser Private Cloud Compute ; vérifiez ce qui traite la requête.',
          '**Se fier à une étiquette de confidentialité sans test.** Effectuez les vérifications avec le mode Avion et le Rapport de confidentialité des apps décrites au chapitre sur la confidentialité.',
          '**Tout installer.** Chaque application conserve ses propres fichiers de modèle de plusieurs gigaoctets ; choisissez une application par usage.',
          '**Acheter une application devenue peu active.** Vérifiez l\'historique des versions, en particulier pour les applications du chapitre sur la maintenance.',
          '**Exposer un serveur domestique à Internet.** Utilisez un VPN maillé privé ; Ollama n\'exige pas d\'authentification par défaut.',
          '**Laisser des applications de jeu de rôle sans examen sur le téléphone partagé ou celui d\'un enfant.** Lisez d\'abord la classification d\'âge et les réglages de contenu mature.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Appareils Apple Intelligence, langues, Siri AI et Private Cloud Compute : [Apple Intelligence](https://www.apple.com/apple-intelligence/) (consulté le 13 novembre 2026).',
          'App Review Guidelines 2.4.2, 2.5.1, 2.5.2, 2.5.4, 5.1.1 et 5.1.2 : [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) (consulté le 13 novembre 2026).',
          'Chemin et contenu du Rapport de confidentialité des apps : [Assistance Apple](https://support.apple.com/en-us/102188).',
          'Moteurs : [MLX Swift](https://github.com/ml-explore/mlx-swift), [llama.cpp](https://github.com/ggml-org/llama.cpp), [ExecuTorch](https://github.com/pytorch/executorch), [documentation MLC iOS](https://llm.mlc.ai/docs/deploy/ios.html), [Core ML](https://developer.apple.com/documentation/coreml), [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM).',
          'Les chiffres de RAM des iPhone et les vitesses indicatives sont repris de [Meilleures applications d\'IA locale pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) ; Apple ne publie pas la RAM des iPhone.',
          'Les informations par application (prix, plateforme, version, déclarations de l\'éditeur) proviennent des analyses PromptQuorum liées et des fiches du répertoire ; les dates de dernière mise à jour des applications signalées comme peu actives proviennent des fiches.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Un iPhone peut-il exécuter de l\'IA entièrement hors ligne ?',
            a:
              'Oui, d\'après leurs fiches et leurs analyses. Après un téléchargement de modèle unique en Wi-Fi, des applications comme PocketPal AI, Private LLM et Locally AI répondent sans connexion. Apple Intelligence exécute aussi un modèle sur l\'appareil, mais il peut recourir à Private Cloud Compute pour des requêtes plus lourdes ; il n\'est donc pas garanti hors ligne. Testez toute application en mode Avion.',
          },
          {
            q: 'De quel iPhone ai-je besoin pour l\'IA locale ?',
            a:
              'Un iPhone avec 6 GB de RAM ou plus pour de petits modèles de 1-2B et 8 GB ou plus pour des modèles de 3-4B. Apple ne publie pas la RAM : utilisez les niveaux rapportés de ce guide. Pour Apple Intelligence, il vous faut un iPhone 15 Pro ou plus récent figurant dans la liste d\'appareils d\'Apple.',
          },
          {
            q: 'L\'IA locale sur iPhone est-elle vraiment privée ?',
            a:
              'La conversation peut rester sur l\'appareil, mais la confidentialité dépend de l\'application. Les étiquettes sont déclarées par le développeur, et plusieurs applications analysées envoient des rapports de plantage, des événements d\'usage ou des requêtes web optionnelles. Vérifiez avec le mode Avion et Réglages > Confidentialité et sécurité > Rapport de confidentialité des apps.',
          },
          {
            q: 'Puis-je exécuter Ollama sur mon iPhone ?',
            a:
              'Non. Ollama propose des téléchargements pour macOS, Windows et Linux, et il n\'existe ni serveur Ollama ni Docker pour l\'iPhone. Exécutez Ollama sur un ordinateur et connectez-vous depuis un client iPhone comme Reins, Enchanted ou OpenClient.',
          },
          {
            q: 'Quelle taille de modèle un iPhone peut-il exécuter ?',
            a:
              'Environ 3-4B de paramètres en 4 bits sur les téléphones de 8 GB, avec des modèles de 7-8B en basse précision uniquement sur les téléphones de 12 GB et lentement. Les téléphones de 6 GB se prêtent mieux aux modèles de 1-2B. Pour des modèles plus grands, utilisez le mode distant avec un serveur domestique.',
          },
          {
            q: 'L\'IA locale vide-t-elle la batterie ?',
            a:
              'Pendant la génération, oui : une génération prolongée occupe le processeur et vide la batterie bien plus vite qu\'au repos, et le téléphone peut chauffer. PromptQuorum n\'a pas mesuré la décharge exacte. Des questions occasionnelles coûtent peu, et un modèle chargé mais inactif consomme peu.',
          },
          {
            q: 'Quelle est la meilleure application d\'IA locale gratuite pour iPhone ?',
            a:
              'PocketPal AI est le choix gratuit open source par défaut dans notre comparatif, avec Locally AI et Google AI Edge Gallery comme alternatives gratuites. La bonne application dépend de votre tâche ; utilisez l\'arbre de décision de ce guide.',
          },
          {
            q: 'En quoi Apple Intelligence diffère-t-il de ces applications ?',
            a:
              'Apple Intelligence est le modèle intégré d\'Apple pour les fonctions système et pour les applications qui utilisent le framework Foundation Models ; vous ne pouvez pas en changer le modèle. Les applications de ce guide vous laissent choisir et télécharger des modèles, et certaines, comme Locally AI, peuvent aussi servir d\'interface au modèle d\'Apple.',
          },
          {
            q: 'Puis-je dialoguer hors ligne avec mes PDF sur iPhone ?',
            a:
              'Oui pour quelques fichiers, d\'après leurs fiches et leurs analyses, avec des applications comme Private Mind, MemoryAI, Noema ou LocalMindAI. Les petits modèles ont des fenêtres de contexte courtes, si bien que de longs documents peuvent être résumés de façon incomplète. Pour de grandes bibliothèques, utilisez un serveur domestique.',
          },
          {
            q: 'Puis-je utiliser mon serveur domestique depuis l\'extérieur ?',
            a:
              'Oui, via un VPN maillé privé comme Tailscale ou un autre tunnel sécurisé, avec une application cliente qui prend en charge votre serveur. N\'ouvrez pas Ollama à l\'Internet public ; il n\'exige pas d\'authentification par défaut.',
          },
          {
            q: 'Un iPhone peut-il générer des images hors ligne ?',
            a:
              'Oui, d\'après leurs fiches et leurs analyses, avec des applications comme Draw Things, Genva et Haplo AI, après le téléchargement de modèles de plusieurs gigaoctets. La génération est plus lente que sur un GPU de bureau et fait chauffer le téléphone ; Draw Things propose aussi un mode cloud optionnel.',
          },
          {
            q: 'Les applications de jeu de rôle et de compagnie sont-elles sûres pour les adolescents ?',
            a:
              'Pas par défaut. Plusieurs portent une classification 18+ ou des modes réservés aux adultes, certaines sont des services cloud qui conservent les conversations, et les modèles sur l\'appareil n\'ont aucun filtre côté serveur. Utilisez les limites de Temps d\'écran et de classification des apps d\'Apple et lisez les notes de sécurité de ce guide.',
          },
          {
            q: 'L\'IA locale fonctionne-t-elle sur iPad ?',
            a:
              'Le plus souvent oui. Beaucoup d\'applications de ce guide indiquent une prise en charge de l\'iPad, et la même règle de RAM s\'applique. Voir les conseils propres à l\'iPad dans [Comment exécuter l\'IA sur une tablette](/fr/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: 'Comment l\'iPhone se compare-t-il à Android pour l\'IA locale ?',
            a:
              'L\'iPhone est plus simple à démarrer et plus restreint ; Android autorise les applications de terminal et offre plus de choix open source mais varie selon le téléphone. Comparez dans [Guide de l\'IA locale sur Android](/fr/power-local-llm/local-ai-on-android-guide) et [Galaxy vs iPhone : IA sur l\'appareil](/fr/local-llms/galaxy-vs-iphone-on-device-ai-2026).',
          },
          {
            q: 'Les applications utiliseront-elles le modèle d\'Apple sur des iPhone plus anciens ?',
            a:
              'Non. Apple Intelligence est limité aux appareils de la liste d\'Apple, à partir de l\'iPhone 15 Pro. Sur des iPhone plus anciens, utilisez des applications qui apportent leurs propres modèles, dans les limites de RAM.',
          },
        ],
      },
      related: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Meilleures applications d\'IA locale pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) : choix classés, vitesses indicatives et guide de RAM pour iPhone.',
          '[Guide de l\'IA locale sur Android](/fr/power-local-llm/local-ai-on-android-guide) : le guide pilier jumeau pour Android.',
          '[Meilleures applications d\'IA locale pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) : applications Android classées.',
          '[Galaxy vs iPhone : IA sur l\'appareil](/fr/local-llms/galaxy-vs-iphone-on-device-ai-2026) : comparaison de l\'IA sur l\'appareil des iPhone et des Galaxy.',
          '[Comment exécuter l\'IA sur une tablette](/fr/power-local-llm/run-ai-on-tablet-ipad-android) : iPad et tablettes Android.',
          '[Meilleurs modèles mobiles : Phi-4 Mini, Gemma et SmolLM](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) : quels petits modèles télécharger.',
          '[LLM locaux sur mobile](/fr/local-llms/mobile-local-llms) : les bases des LLM locaux sur mobile.',
          '[IA sur l\'appareil d\'Apple et LLM locaux](/fr/local-llms/apple-on-device-ai-vs-local-llms) : l\'IA sur l\'appareil d\'Apple face aux modèles locaux ouverts.',
          '[Créer un assistant vocal local sur votre téléphone](/fr/power-local-llm/voice-assistant-local-mobile-offline) : voix hors ligne sur un téléphone.',
          '[Assistants de conversation comparés](/fr/power-local-llm/local-llm-chat-assistants-compared), [Applications voix et audio comparées](/fr/power-local-llm/local-llm-voice-audio-compared), [Applications d\'image et de vidéo comparées](/fr/power-local-llm/local-llm-images-video-compared) et [Applications de connaissances et de recherche comparées](/fr/power-local-llm/local-llm-knowledge-retrieval-compared) : comparatifs par catégorie.',
          '[Répertoire des applications d\'IA locale](/fr/directory) : toutes les applications d\'IA locale du répertoire.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    last_full_refresh: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: '2026年のiPhoneローカルAI：できること、できないこと、当サイトが扱うiPhoneアプリ',
    seoTitle: 'iPhoneのローカルAI 2026年：できること・できないこと',
    intro:
      '最近のiPhoneは、モデルをダウンロードしておけばオフラインで実用的な言語モデルを動かせますが、動くのは小型のものだけです。RAM 6〜8 GBで、パラメータ数は約1〜4Bが目安です。このガイドでは、iPhoneのローカルAIでできること、一部だけできること、まったくできないことを整理し、Apple Intelligence、Foundation Modelsフレームワーク、App Storeの規則を解説します。さらに、PromptQuorumディレクトリで当サイトが扱うiPhoneアプリを、向いている用途ごとに紹介します。アプリに関する事実はPromptQuorumのレビューに基づいており、レビューが実機テストを行ったと明記している場合を除き、公開情報が出典です。このガイドではどのアプリも再テストしていません。',
    metaDescription:
      'iPhoneのローカルAIでできること・できないことを2026年版で解説。チップとRAMの限界、Apple Intelligence、App Storeの規則、用途別のiPhoneアプリを紹介します。',
    heroImage: '/images/local-ai-on-iphone-guide-hero-ja.webp',
    twitterDescription:
      '2026年のiPhoneローカルAI：できることの一覧、RAM別の目安、Apple Intelligence、App Storeの制限、できないことのリスト、用途別のiPhoneアプリ。',
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAMはAppleが非公開)',
      'iPhone 17 Pro (A19 Pro, RAM 12 GBと報じられている)',
      'iPhone 16 Pro (A18 Pro, RAM 8 GBと報じられている)',
      'iPhone 15 Pro (A17 Pro, RAM 8 GBと報じられている)',
      'iPhone 14 Pro (A16, RAM 6 GBと報じられている)',
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
      'iPhoneやiPadをお使いの方、プライバシーを重視する方、旅行者、開発者のうち、オンデバイスAIにできることとできないこと、そして用途ごとにどのアプリを入れるべきかを知りたい方。',
    readTime: '45分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'iPhoneのローカルAI',
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
      '**最近のiPhoneは、一度ダウンロードすれば小型の言語モデル（RAM 6〜8 GBでパラメータ数約1〜4B）をオフラインで動かせ、チャット、要約、翻訳、音声入力、ドキュメントへの質問、小さな画像タスクをこなせます。一方で、30B以上のモデルの実行、Siriの置き換え、バックグラウンドでのエージェント常駐はできません。** Apple Intelligenceは、iPhone 15 Pro以降に内蔵モデルを追加します。iPhoneにはOllamaやDockerのサーバーはありません。',
    quickAnswerTop: {
      ja: {
        question: 'iPhoneのローカルAIでは何ができますか？',
        answer:
          '最近のiPhoneは、パラメータ数1〜4Bのモデルをオフラインで動かし、チャット、要約、翻訳、音声入力、ドキュメントへの質問、小さな画像タスクに使えます。30B以上のモデルの実行、Siriの置き換え、バックグラウンドでのエージェント常駐はできません。Apple Intelligenceは、iPhone 15 Pro以降に内蔵モデルを追加します。',
        bullets: [
          'RAM 6 GB：1〜2Bモデル、8 GB：3〜4B、12 GB：4Bに余裕あり',
          'Apple IntelligenceにはiPhone 15 Pro以降が必要',
          'スマホ上にOllama、Docker、Linuxサーバーはない',
          '7B〜70Bのモデルはリモートモードで自宅サーバーを使う',
          'プライバシーは機内モードとApp Privacy Reportで確認する',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: '重要ポイント',
        anchor: '#key-takeaways',
      },
      {
        label: 'まずここから：インストールする3つのアプリ',
        anchor: '#start-here',
      },
      {
        label: 'インストール前の6つの簡単な答え',
        anchor: '#quick-answers',
      },
      {
        label: '重要な事実',
        anchor: '#quick-facts',
      },
      {
        label: '機能マップ：iPhoneのローカルAIでできること',
        anchor: '#capability-map',
      },
      {
        label: 'チップとRAMの現実：どのiPhoneでどのモデルが動くか',
        anchor: '#iphone-hardware',
      },
      {
        label: 'Neural Engine、GPU、CPU：実際にモデルを動かすのはどれか',
        anchor: '#chips-engines',
      },
      {
        label: '機種ティア、アプリ、モデルサイズの早見表',
        anchor: '#tier-app-model',
      },
      {
        label: '15分で最初のローカルモデルを動かす',
        anchor: '#first-run-15-minutes',
      },
      {
        label: 'Apple IntelligenceとFoundation Modelsフレームワーク',
        anchor: '#apple-intelligence',
      },
      {
        label: 'iPhoneのローカルAIを左右するApp Storeの規則',
        anchor: '#app-store-rules',
      },
      {
        label: 'iPhoneがAndroidより優れている点・劣る点',
        anchor: '#iphone-vs-android',
      },
      {
        label: 'チャットアシスタント：主要なオンデバイスアプリ',
        anchor: '#chat-assistants',
      },
      {
        label: 'チャットアシスタント：新しいアプリ、ニッチなアプリ、ハイブリッド型',
        anchor: '#chat-more',
      },
      {
        label: '更新が止まっているアプリ、古いアプリ、App Storeにないアプリ',
        anchor: '#chat-quiet-apps',
      },
      {
        label: 'ビジョンとカメラ：写真やスクリーンショットについて質問する',
        anchor: '#vision-camera',
      },
      {
        label: '音声：音声入力、文字起こし、読み上げ、オフラインアシスタント、Siri',
        anchor: '#voice-speech',
      },
      {
        label: 'スマホ上のドキュメント、PDF、検索拡張',
        anchor: '#documents-rag',
      },
      {
        label: 'デバイス上の翻訳',
        anchor: '#translation',
      },
      {
        label: '画像生成と写真編集',
        anchor: '#image-generation-editing',
      },
      {
        label: 'フォトライブラリとギャラリー検索',
        anchor: '#photos-gallery-search',
      },
      {
        label: 'ノート、ナレッジベース、ブックマーク',
        anchor: '#notes-knowledge',
      },
      {
        label: '健康とウェルネスに関する質問',
        anchor: '#health-wellness',
      },
      {
        label: 'ロールプレイ・コンパニオンアプリとコンテンツ安全の注意点',
        anchor: '#roleplay-companions',
      },
      {
        label: 'スマートホームとエージェント',
        anchor: '#smart-home-agents',
      },
      {
        label: 'リモートモード：自分のサーバーのシンクライアントとして使うiPhone',
        anchor: '#remote-mode',
      },
      {
        label:
          '開発者向けの道筋：Core ML、Core AI、MLX Swift、llama.cpp、MLC、ExecuTorch、Foundation Models',
        anchor: '#developer-paths',
      },
      {
        label: 'プライバシーとテレメトリーの実態',
        anchor: '#privacy-telemetry',
      },
      {
        label: 'バッテリー、発熱、メモリの制限',
        anchor: '#battery-thermal-memory',
      },
      {
        label: '一部しか使えないもの',
        anchor: '#works-partly',
      },
      {
        label: 'iPhoneでは不可能、またはまだ不可能なこと',
        anchor: '#not-possible',
      },
      {
        label: '選び方：このiPhoneで、これをしたい',
        anchor: '#decision-path',
      },
      {
        label: 'よくある間違い',
        anchor: '#common-mistakes',
      },
      {
        label: 'ソース',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: '関連する読み物',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**最近のiPhoneは、モデルをダウンロードしてしまえば、接続なしで実用的な言語モデルを動かせます。** 現実的な上限は、RAM 6〜8 GBでパラメータ数1B〜4Bのモデルです。7B〜8Bのモデルを低ビットで動かせるのはRAM 12 GBのiPhoneだけで、速度も遅いままです。下書き、要約、翻訳、質問応答は十分にこなせますが、推論、コード、世界知識はChatGPT級のクラウドモデルより弱くなります。',
          '**モデルサイズを決めるのは、チップ名ではなくRAMです。** AppleはiPhoneのRAMを公表していないため、このガイドの数値は広く報じられているスペックです。RAM 4 GBのiPhoneは実用の下限を下回り、6 GBなら1〜2Bモデル、8 GBなら3〜4B、12 GBならさらに余裕があります。',
          '**Apple IntelligenceとFoundation Modelsフレームワークは、もう一つの別ルートです。** Apple独自のオンデバイスモデルはすでにiPhone（iPhone 15 Pro以降）に入っており、ダウンロードは不要で、サードパーティのアプリからも使えます。ただし、それ自体は汎用のチャットアプリではなく、言語と地域の制限があります。',
          '**App Storeには厳しい制限があります。** iPhoneにはDockerもなく、Ollamaを動かすこともできません。アプリは機能を変えるコードをダウンロードしてはならない（Appleガイドライン2.5.2）ため、エンジンはすべてアプリ内に同梱され、ダウンロードされるのはモデルファイルだけです。そのため、iPhoneのローカルAIとは、スタックを組むことではなく、アプリを入れることを意味します。',
          '**iPhoneの持ち主が望むことの大半は、当サイトのディレクトリにレビュー済みのアプリがあります。** チャット、カメラへの質問、音声入力と文字起こし、ドキュメントとのチャット、翻訳、画像生成、写真検索、ノート、健康に関する質問、ロールプレイ、スマートホーム操作、自宅サーバーへのリモートアクセスです。このガイドは、ディレクトリ掲載のiPhoneアプリの大半を、それぞれ向いている機能にひも付けています。',
          '**不可能な、または一部しか可能でないことがいくつかあります。** 30B以上のモデル、最先端クラスの推論、常時稼働のバックグラウンドエージェント、自作モデルによるSiriの置き換え、スマホ上でのファインチューニング、そしてApp Storeのラベルだけでプライバシーを保証することです。',
          '**「テレメトリーなし」は、信じるのではなく確認が必要です。** チャットを端末内に留めると謳うアプリでも、クラッシュレポート、利用イベント、任意のWebリクエストを送るものがいくつかあります。プライバシーの章では、機内モードとApp Privacy Reportで確認する方法を示します。',
          '**まずは小さく始めましょう。** アプリを1つ入れ、Wi-Fiで1〜2 GBのモデルを1つダウンロードし、機内モードに切り替えて質問してみてください。それが動けば、オフラインの経路全体を15分足らずで確認できたことになります。',
        ],
      },
      startHere: {
        id: 'start-here',
        title: 'まずここから：インストールする3つのアプリ',
        content: [
          '**時間がない方は、この3つのうち1つを入れ、お使いのiPhoneのRAMに合うモデルをダウンロードして、機内モードで一度試してください。** この選定は、ベンチマークではなく、このガイドの各章とレビューに基づいています。ほかの部分で、それぞれの選択理由を説明します。',
          '**ほかのおすすめの出発点：** RAM 12 GBのiPhoneでは、[Noema](/ja/power-local-llm/noema-review)か[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)でGemma 4モデルを試してください。RAM 4 GBのiPhoneでは、そのティアは端末上のチャットの実用下限を下回るため、[Reins](/ja/power-local-llm/reins-review)か[Enchanted](/ja/power-local-llm/enchanted-review)（メンテナンスの章で更新が止まっていると指摘）を自宅サーバーと組み合わせて使います。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '初心者はPocketPal AI、上級者はLocally AIとAppleの純正モデル、開発者はFoundation ModelsフレームワークかMLX Swiftから始められます。いずれの場合も、モデルサイズはiPhoneのRAMで決まります。',
          },
          {
            type: 'plain-terms',
            text: 'アプリ1つ、RAMに合うモデル1つ、機内モードでのテスト1回。',
          },
        ],
        itemHeadings: true,
        columns: ['あなたのレベル', '入れる・使うもの', '最初のモデル', 'この選択の理由'],
        rows: [
          {
            'あなたのレベル': '初心者',
            '入れる・使うもの': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            '最初のモデル': '6 GBなら1〜2B、8 GBなら3〜4B',
            'この選択の理由': '無料のオープンソースで、このガイドの初回起動の手順もこのアプリを使っています。',
          },
          {
            'あなたのレベル': '上級者',
            '入れる・使うもの': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
            '最初のモデル': '8 GBなら3〜4B、またはダウンロード不要のAppleの純正モデル',
            'この選択の理由': 'RAM 8 GBのiPhoneでのSiriやショートカットの利用に向き、Apple Intelligence対応のiPhoneではAppleのオンデバイスモデルも使えます。',
          },
          {
            'あなたのレベル': '開発者',
            '入れる・使うもの': 'Foundation ModelsフレームワークまたはMLX Swift',
            '最初のモデル': 'Appleのオンデバイスモデル、または自分のモデル',
            'この選択の理由': 'Foundation ModelsはAppleネイティブのSwift APIで、Apple Intelligence対応ハードウェアが必要です。MLX Swiftは自分のモデルを動かします。残りは「開発者向けの道筋」の章で扱います。',
          },
        ],
      },
      quickAnswers: {
        id: 'quick-answers',
        title: 'インストール前の6つの簡単な答え',
        content:
          '**読者が最初に尋ねる6つの質問です。各答えは、それを説明する章を示しています。**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'RAMがモデルサイズを決め、空き容量3〜5 GBで最初のモデルを保存でき、機内モードのテストでアプリがオフラインで動くかどうかが分かります。',
          },
          {
            type: 'plain-terms',
            text: 'RAMがモデルを決め、ストレージが保存し、機内モードが証明します。',
          },
        ],
        items: [
          '**どのモデルをダウンロードすべきですか？** RAMに合わせます。6 GBなら1〜2B、8 GBなら3〜4B、12 GBならさらに余裕があり、7〜8Bモデルは遅いままです。RAM 4 GBのiPhoneは実用の下限を下回ります。「機種ティア、アプリ、モデルサイズの早見表」を参照してください。',
          '**ストレージはどれくらい必要ですか？** モデルファイルは1〜4 GBなので、まず3〜5 GBを空けてください。モデルファイルが重複するとストレージをすぐに使うため、アプリは1つずつ入れます。「15分で最初のローカルモデルを動かす」を参照してください。',
          '**どれくらいの速さで動きますか？** PromptQuorumはこのガイドのために、どのiPhoneでも速度を測定していません。また、当サイトのiPhoneまとめ記事にある目安の速度は、新たな測定値ではありません。モデルが小さいほど応答は速くなります。最初のテストの質問で速度を記録し、アプリの設定に1秒あたりのトークン数が表示されるなら確認してください。',
          '**プライベートなアプリはどれですか？** App Storeのラベルだけで、プライベートだと見なせるアプリはありません。「端末上で動く」と「何も送信しない」は別の主張だからです。プライバシーラベルとポリシーを読み、機内モードのテストを行い、後で設定 > プライバシーとセキュリティ > App Privacy Reportを確認してください。PocketPal AIのようなオープンソースのアプリは、中身を検証できます。「プライバシーとテレメトリーの実態」を参照してください。',
          '**インターネットなしで何ができますか？** このガイドの機能マップによると、最近のiPhoneは、モデルをダウンロードしたあとなら、チャット、カメラへの質問、音声入力と文字起こし、ドキュメントとのチャット、翻訳をオフラインでこなせます。30B以上のモデル、最先端クラスの推論、常時稼働のバックグラウンドエージェントは不可能です。「機能マップ」を参照してください。',
          '**次に何を読めばよいですか？** 「15分で最初のローカルモデルを動かす」を読み、特定の目的があれば「選び方」を使ってください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '重要な事実',
        items: [
          '**対象範囲：** まずiPhone、同じアプリが動く場合はiPadも含みます。Androidは姉妹ガイドの[Android向けローカルAIガイド](/ja/power-local-llm/local-ai-on-android-guide)で扱っています。',
          '**Apple Intelligence対応のiPhone（Appleの一覧）：** iPhone 15 ProとiPhone 15 Pro Max、16eを含むiPhone 16シリーズ、17eとAirを含むiPhone 17シリーズ、そして2026年のiPhone 18 Pro、18 Pro Max、iPhone Duoです。iPhone 15と、それ以前のPro以外のモデルは一覧に含まれません。',
          '**このガイドで使うRAMティア（Apple公表ではなく報じられた数値）：** 4 GB（iPhone 12、13、SE）、6 GB（iPhone 13 Pro、14、14 Pro、15）、8 GB（iPhone 15 Pro、16シリーズ、16e、17）、12 GB（iPhone 17 ProとPro Max）。',
          '**収まるモデルサイズ：** 1.7Bモデルの4ビット版で約1.1 GB、3〜4Bモデルで約2.5〜3.7 GBです。目安の速度は当サイトのiPhoneランキング記事から引いたもので、新たな測定値ではありません。',
          '**iPhoneアプリ内のエンジン：** llama.cpp（GGUF）、Apple MLX、MLC LLM、Google LiteRT-LM、ExecuTorch、Core ML、Apple Foundation Models。複数を組み合わせるアプリも少数あります。',
          '**このガイドでリンクするアプリ：** 当サイトのディレクトリにあるiOS・iPadOSアプリのうちPromptQuorumのレビューがあるもの、およびセルフホスト型ツール向けのiPhoneコンパニオンアプリです。',
          '**PromptQuorumが行っていないこと：** このガイドではアプリを再テストしていません。事実は、当サイトのレビュー、ストアの掲載情報、開発元のサイト、Appleのドキュメントに基づいており、各レビューには何をテストしたかが明記されています。',
        ],
      },
      whatIsPossible: {
        id: 'capability-map',
        title: '機能マップ：iPhoneのローカルAIでできること',
        content:
          '**iPhoneのローカルAIは、日常的な言語タスクの大半といくつかのメディアタスクをこなせますが、クラウドアシスタントのすべてができるわけではありません。** 表では各機能を「対応」「一部対応」「未対応」に分け、続く章でアプリを挙げます。「対応」は、レビュー済みのiPhoneアプリがスマホ上のモデルでそれを行うことを指します。「一部対応」は、サイズ、速度、精度、ハードウェアのいずれかに制限付きで動くことを、「未対応」は、レビュー済みのiPhoneアプリでデバイス上で行えるものがないことを指します。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'iPhoneのローカルAIは、チャット、下書き、要約、翻訳、音声入力、ドキュメントへの質問、小さな画像タスクをデバイス上で処理でき、写真検索、画像生成、エージェントは一部しか対応せず、大型モデルの実行やSiriの置き換えはまだできません。',
          },
          {
            type: 'plain-terms',
            text:
              'iPhoneは、小さくてプライベートな頭脳を持つポケットサイズのアシスタントだと考えてください。簡単な質問に答え、文章を書き直し、音声を文字にし、写真を説明しますが、何も外部に送りません。その代わり、大きなクラウドモデルが知っている事柄は忘れており、長い回答では遅くなり、熱を持ちます。難しい質問には、自宅のパソコンやクラウドアプリと組み合わせる人も多くいます。',
          },
        ],
        columns: ['機能', 'iPhoneでの状況', '典型的な構成', '対応する章'],
        rows: [
          {
            '機能': 'チャット、下書き、要約',
            'iPhoneでの状況': '対応',
            '典型的な構成': '1〜4Bモデル、GGUFまたはMLX',
            '対応する章': 'チャットアシスタント',
          },
          {
            '機能': '写真やスクリーンショットについて質問',
            'iPhoneでの状況': '対応',
            '典型的な構成': '小型ビジョンモデルまたはOCR',
            '対応する章': 'ビジョンとカメラ',
          },
          {
            '機能': '音声入力と文字起こし',
            'iPhoneでの状況': '対応',
            '典型的な構成': 'WhisperまたはParakeet',
            '対応する章': '音声と音声認識',
          },
          {
            '機能': '読み上げ（テキスト音声変換）',
            'iPhoneでの状況': '対応',
            '典型的な構成': 'システム音声またはオンデバイスTTS',
            '対応する章': '音声と音声認識',
          },
          {
            '機能': 'Siriによるハンズフリーアシスタント',
            'iPhoneでの状況': '一部対応',
            '典型的な構成': 'ショートカット経由、Siriの置き換えではない',
            '対応する章': '音声と音声認識',
          },
          {
            '機能': 'PDFやノートとチャット',
            'iPhoneでの状況': '対応',
            '典型的な構成': '小型モデルとローカルインデックス',
            '対応する章': 'ドキュメントとRAG',
          },
          {
            '機能': '翻訳',
            'iPhoneでの状況': '対応',
            '典型的な構成': '翻訳向けに調整した小型モデル',
            '対応する章': '翻訳',
          },
          {
            '機能': '画像生成',
            'iPhoneでの状況': '一部対応',
            '典型的な構成': '小型の拡散モデル、低速',
            '対応する章': '画像生成',
          },
          {
            '機能': '写真編集（切り抜き、レタッチ）',
            'iPhoneでの状況': '対応',
            '典型的な構成': 'Core MLのセグメンテーションモデル',
            '対応する章': '画像生成',
          },
          {
            '機能': 'フォトライブラリのAI検索',
            'iPhoneでの状況': '一部対応',
            '典型的な構成': 'オンデバイスのインデックスまたは自前サーバー',
            '対応する章': '写真とギャラリー',
          },
          {
            '機能': 'AI付きのノートとブックマーク',
            'iPhoneでの状況': '一部対応',
            '典型的な構成': 'AIはサーバーで動くことが多い',
            '対応する章': 'ノートとナレッジ',
          },
          {
            '機能': '健康データへの質問',
            'iPhoneでの状況': '一部対応',
            '典型的な構成': 'Apple Intelligence、医療用ではない',
            '対応する章': '健康とウェルネス',
          },
          {
            '機能': 'ロールプレイとコンパニオン',
            'iPhoneでの状況': '対応',
            '典型的な構成': '小型チャットモデル、クラウド版もあり',
            '対応する章': 'ロールプレイとコンパニオン',
          },
          {
            '機能': 'スマートホーム操作',
            'iPhoneでの状況': '一部対応',
            '典型的な構成': '処理は自宅サーバーが担当',
            '対応する章': 'スマートホームとエージェント',
          },
          {
            '機能': '常時稼働の自律エージェント',
            'iPhoneでの状況': '未対応',
            '典型的な構成': 'iOSがバックグラウンド処理を制限',
            '対応する章': '不可能なこと',
          },
          {
            '機能': '30B以上のモデルを実行',
            'iPhoneでの状況': '未対応',
            '典型的な構成': '自宅サーバーをリモートで使う',
            '対応する章': 'リモートモード',
          },
          {
            '機能': 'スマホ上でモデルをファインチューニング',
            'iPhoneでの状況': '未対応',
            '典型的な構成': 'MacやGPUで学習する',
            '対応する章': '開発者向けの道筋',
          },
        ],
      },
      hardware: {
        id: 'iphone-hardware',
        title: 'チップとRAMの現実：どのiPhoneでどのモデルが動くか',
        content:
          '**iPhoneが保持できる最大のモデルを決めるのはRAMで、回答の速さを決めるのはチップです。** 言語モデルは生成中ずっとメモリ上に置かれる必要があるため、4ビットの3Bモデル（ディスク上で約2〜2.7 GB）には、iOSや他のアプリが使う分に加えて、およそそれだけの空きRAMが必要です。要求が大きすぎるとiOSがアプリを終了させ、AppleはiPhoneのRAMを公表していません。そのため、以下の数値はAppleの公式見解ではなく、広く報じられているスペックです（当サイトの[2026年 iPhone向けベスト・ローカルAIアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026)でも使用しています）。',
        columns: ['iPhoneのティア', 'RAM（報じられた数値）', '現実的なモデルサイズ', '評価'],
        rows: [
          {
            'iPhoneのティア': 'iPhone 12、13、SE',
            'RAM（報じられた数値）': '4 GB',
            '現実的なモデルサイズ': '1B未満、動くとしても',
            '評価': '代わりにリモートモードを使う',
          },
          {
            'iPhoneのティア': 'iPhone 13 Pro、14、14 Pro、15',
            'RAM（報じられた数値）': '6 GB',
            '現実的なモデルサイズ': '1〜2B（ファイル約1.1 GB）',
            '評価': '基本的なチャットと下書き',
          },
          {
            'iPhoneのティア': 'iPhone 15 Pro、16、16e、17',
            'RAM（報じられた数値）': '8 GB',
            '現実的なモデルサイズ': '3〜4B（約2.5〜3.7 GB）',
            '評価': '標準的な3〜4Bティア',
          },
          {
            'iPhoneのティア': 'iPhone 17 Pro、17 Pro Max',
            'RAM（報じられた数値）': '12 GB',
            '現実的なモデルサイズ': '4Bに余裕あり、7〜8Bは低ビット',
            '評価': '最大RAMのティア',
          },
          {
            'iPhoneのティア': 'iPhone 18 Pro、Pro Max、Duo',
            'RAM（報じられた数値）': '非公表',
            '現実的なモデルサイズ': '確認されるまでは12 GBとして扱う',
            '評価': 'PromptQuorumの数値なし',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '名目上は収まるモデルでも、アプリを切り替えたときにiOSに終了させられることがあります。RAM 6 GBのiPhoneでは、3〜4Bのファイルがエラーなくダウンロードできても、1〜2Bモデルにとどめてください。AppleのiPhone公式ページにもRAMの数値は記載されていないため、ティア表は目安であり、保証ではありません。',
          },
        ],
      },
      hardwareChips: {
        id: 'chips-engines',
        title: 'Neural Engine、GPU、CPU：実際にモデルを動かすのはどれか',
        content:
          '**iPhoneにはモデルを動かす場所が3つあり、どれが使われるかは、スマホ本体ではなくアプリのエンジンで決まります。** CPUは柔軟ですが遅く、GPU（AppleのMetalグラフィックスAPI経由）は大半のチャットアプリが頼る大規模な行列演算を担い、Neural Engineは固定機能のアクセラレータで、AppleのCore MLと新しいCore AIフレームワークが対象にできます。AppleはCore AIを、ユニファイドメモリとNeural Engineを使うApple silicon向けに作られたものと説明しています。iOS 27世代で登場した新しいものなので、このガイドのアプリの大半はまだ使っていません。',
        items: [
          '**llama.cppアプリ（GGUFファイル）：** [PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)、[Pocket AI](/ja/power-local-llm/pocket-ai-review)、[LLM Farm](/ja/power-local-llm/llm-farm-review)は、GPU上のMetalを使います。任意のGGUFファイルに対応するため、Hugging Faceのモデルが動く場合があります。',
          '**Apple MLXアプリ：** [Locally AI](/ja/power-local-llm/locally-ai-review)、[fullmoon](/ja/power-local-llm/fullmoon-review)、[MLXHub](/ja/power-local-llm/mlxhub-review)は、Apple siliconのユニファイドメモリ向けに作られたAppleのMLX配列フレームワークを使います。',
          '**マルチフォーマットのアプリ：** [Noema](/ja/power-local-llm/noema-review)は、GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Modelsを1つのアプリで扱います。そのため、ハードウェアの使われ方はモデル形式によって変わります（レビューにある開発元の説明）。',
          '**コンパイル済みモデルのアプリ：** [MLC Chat](/ja/power-local-llm/mlc-chat-review)は、MLC LLMツールチェーンでコンパイルされたモデルを動かします。[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)は、GoogleのLiteRT-LMランタイムを使います。',
          '**Apple独自のモデル：** Apple Intelligenceは、システムフレームワーク経由でAppleのモデルを動かします。[Compass - Local AI](/ja/power-local-llm/compass-local-ai-review)や[Pajdo](/ja/power-local-llm/pajdo-review)などのアプリは、モデルを同梱せずにこれを呼び出します。',
          '**実際上の帰結：** 同じiPhoneで同じサイズのモデルを動かしても、2つのアプリで速度、メモリ使用量、発熱が違うことがあります。ダウンロード済みのモデルを削除する前に、同じプロンプトを2つのアプリで試してください。',
        ],
      },
      tierTable: {
        id: 'tier-app-model',
        title: '機種ティア、アプリ、モデルサイズの早見表',
        content:
          '**まずRAMティアで選び、次に用途で選びます。** この表は当サイトのレビューとランキング記事に基づく出発点であり、ベンチマークではありません。モデルは変化が速いため、最新の小型モデルの候補は[ベスト・モバイルLLMモデル：Phi-4 Mini、Gemma、SmolLM](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm)で確認してください。',
        columns: ['機種ティア', 'まず試すもの', 'モデルサイズ', '備考'],
        rows: [
          {
            '機種ティア': 'RAM 4 GBのiPhone',
            'まず試すもの': '自宅サーバーへのリモートクライアント',
            'モデルサイズ': 'スマホ上には置かない',
            '備考': 'Reins、Enchanted、OpenClient',
          },
          {
            '機種ティア': 'RAM 6 GBのiPhone',
            'まず試すもの': 'PocketPal AIまたはLocally AI',
            'モデルサイズ': '1〜2B（約1.1 GB）',
            '備考': '最小クラスのモデル',
          },
          {
            '機種ティア': 'RAM 8 GBのiPhone',
            'まず試すもの': 'PocketPal AI、Private LLM、Gallery',
            'モデルサイズ': '3〜4B（2.5〜3.7 GB）',
            '備考': '中位のティア',
          },
          {
            '機種ティア': 'RAM 12 GBのiPhone',
            'まず試すもの': 'NoemaまたはLocally AI',
            'モデルサイズ': '4B、または7〜8Bを低速で',
            '備考': '長めのコンテキストが収まる',
          },
          {
            '機種ティア': 'Apple Intelligence対応のiPhone',
            'まず試すもの': 'CompassまたはLocally AI',
            'モデルサイズ': 'Appleのモデル、ダウンロード不要',
            '備考': '言語の制限あり',
          },
          {
            '機種ティア': '音声入力用、どのiPhoneでも',
            'まず試すもの': 'Whisper NotesまたはAiko',
            'モデルサイズ': 'Whisper級、小型',
            '備考': '買い切り',
          },
          {
            '機種ティア': 'ドキュメント用、どのiPhoneでも',
            'まず試すもの': 'Private MindまたはMemoryAI',
            'モデルサイズ': '小型チャットモデルとインデックス',
            '備考': 'ファイルの制限を確認',
          },
        ],
      },
      firstRun: {
        id: 'first-run-15-minutes',
        title: '15分で最初のローカルモデルを動かす',
        content:
          '**iPhoneでのオフライン経路全体は、約15分で確認できます。アプリを1つ入れ、Wi-Fiで小型モデルを1つダウンロードし、機内モードに切り替えて質問してみてください。** 手順では、無料でオープンソースという理由から[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)を例にしていますが、次の章に出てくるチャットアプリならどれでも同じ要領で動きます。所要時間の目安は、回線と機種によって変わります。',
        numberedItems: [
          {
            title: '0〜2分：iPhoneのティアを確認する',
            whyItMatters:
              '上のRAM表で自分の機種を調べます。6 GBなら1〜2Bモデル、8 GBなら3〜4B、12 GBなら余裕があります。モデルファイルは1〜4 GBあるので、先に3〜5 GBのストレージを空けておいてください。',
          },
          {
            title: '2〜4分：アプリを1つ入れる',
            whyItMatters:
              'App Storeから、たとえばPocketPal AI、Locally AI、Google AI Edge Galleryのうち1つだけを入れます。3つのアプリにそれぞれ3つずつモデルを入れるのは避けてください。重複したモデルファイルはストレージをすぐに圧迫します。',
          },
          {
            title: '4〜9分：Wi-Fiでモデルを1つダウンロードする',
            whyItMatters:
              '自分のティアに合うサイズを選びます。たとえばRAM 6 GBならQwen3 1.7B級のモデル、8 GBならPhi-4 MiniやGemma 4 E2Bです（ティア別のモデルを参照）。ダウンロードは、インターネットが必要な唯一の手順です。完了するまで、アプリを開いたまま画面をつけておいてください。',
          },
          {
            title: '9〜10分：機内モードにする',
            whyItMatters:
              '機内モードをオンにし、Wi-Fiはオフのままにします。これで、モデルがスマホ上で動いていること、そしてアプリがインターネットに接続しようとするかどうかが分かります。',
          },
          {
            title: '10〜13分：テスト用の質問を3つする',
            whyItMatters:
              '貼り付けた段落の3項目の要約、メールを別のトーンで書き直すこと、答えを知っている事実に関する質問の3つを頼みます。速度と、スマホが熱くなるかどうかを記録してください。',
          },
          {
            title: '13〜15分：設定を確認して後片付けをする',
            whyItMatters:
              'アプリにベンチマークや設定画面があれば開き、1秒あたりのトークン数を記録します。その後しばらくしてから、設定 > プライバシーとセキュリティ > App Privacy Reportで、アプリが接続したドメインを確認します。使わないモデルは削除してください。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '最初の回答中にアプリがクラッシュしたり再起動したりする場合、そのモデルはスマホには大きすぎます。他の設定を下げるのではなく、モデルを削除して、一段小さいサイズを選んでください。',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple IntelligenceとFoundation Modelsフレームワーク',
        content:
          '**Apple Intelligenceは、対応するすべてのiPhoneにダウンロード不要の内蔵言語モデルを提供し、Foundation Modelsフレームワークによってサードパーティのアプリがそれを使えます。** Appleのデベロッパーページは、このフレームワークを、Apple Intelligenceを支えるのと同じオンデバイスモデルに直接アクセスできるネイティブのSwift APIと説明しています。動作するのは、Apple Intelligenceが対応するデバイスと言語に限られます。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Apple Intelligenceは、iPhone 15 Pro以降でApple独自のオンデバイスモデルを動かし、Foundation Modelsフレームワークによって、Locally AI、Compass、Pajdoなどのサードパーティアプリが、独自のモデルを同梱せずにそれを利用できます。',
          },
          {
            type: 'plain-terms',
            text:
              'Appleは、小さな言語モデルをすでにiPhoneの中に入れています。ダウンロードは不要ですが、別のモデルに入れ替えることもできません。アプリはそれを借りて、デバイス上で質問に答えられます。新しいアプリの多くが、大きなモデルのダウンロードではなく、新しいiPhoneと新しいiOSを必要とするのはそのためです。',
          },
        ],
        items: [
          '**対応機種（AppleのApple Intelligenceのページ）：** iPhone 15 ProとPro Max（A17 Pro）、iPhone 16、16 Plus、16e、16 Proシリーズ（A18とA18 Pro）、iPhone 17、17e、17 Pro、17 Pro Max、Air（A19とA19 Pro）、そしてiPhone Duo、18 Pro、18 Pro Max（A20 Pro）。',
          '**言語：** Apple Intelligenceでは、Siriとデバイスの言語を対応言語に設定する必要があります。Appleの一覧には、中国語（簡体字・繁体字）、デンマーク語、オランダ語、英語、フランス語、ドイツ語、イタリア語、日本語、韓国語、ノルウェー語、ポルトガル語、スペイン語、スウェーデン語、トルコ語、ベトナム語が含まれます。Appleは、一部の機能がすべての地域や言語で利用できるとは限らないとも述べています。',
          '**Siri AI（iOS 27ベータ）：** Appleは、当初の対応言語として英語、フランス語、日本語、韓国語、ポルトガル語、スペイン語を挙げ、iOSではEUで当初は利用できないとし、一部のサーバー側機能には1日あたりの利用上限があると述べています。このガイドで扱うオンデバイスのチャットアプリとは別物です。',
          '**フレームワークが提供するもの（Apple、iOS 27ガイド）：** Apple Foundation Modelsへのアクセスと、Language Modelプロトコルを通じたClaudeやGeminiなどのクラウドモデル（またはそれに準拠する任意のプロバイダ）。画像とテキストを一緒に渡すマルチモーダルなプロンプト。モデルがデバイス上で呼び出せる、OCRやバーコード読み取りなどのVisionツール。そして、1つのセッションでモデル、ツール、指示を切り替えるためのDynamic Profilesです。',
          '**iOS 26のベースライン（今回の更新では再確認していません）：** このフレームワークは、iOS 26で最初に提供されました。これに合わせて設計する前に、コンテキスト上限と対応機能について、Appleの最新のドキュメントを確認してください。',
          '**Private Cloud Compute：** Apple Intelligenceは、大きなリクエストをAppleのサーバーに引き渡すことがあります。Appleは、データは保存されず、リクエストのためだけに使われると述べています。これはオンデバイス処理ではないため、「Apple Intelligence」と「オフライン」は別々の主張として扱ってください。',
          '**このガイドでAppleのモデルを使うアプリ：** [Locally AI](/ja/power-local-llm/locally-ai-review)（チャットのフロントエンド）、[Compass - Local AI](/ja/power-local-llm/compass-local-ai-review)（チャットとスクリーンショットのOCR）、[Pajdo](/ja/power-local-llm/pajdo-review)（Apple Healthに関する質問）、[LocalMindAI](/ja/power-local-llm/localmindai-review)（Appleのモデルまたはダウンロードしたモデル）、[Noema](/ja/power-local-llm/noema-review)と[Reins](/ja/power-local-llm/reins-review)（バックエンドの1つとしてのApple Foundation Models）、[Hillnote](/ja/power-local-llm/hillnote-review)（ノート）。また[AI on Device](/ja/power-local-llm/ai-on-device-review)は、独自の3Bモデルを同梱していますが、Apple Intelligence対応デバイスを必要とします。',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '書き直し、通知の要約、メール・メッセージ・メモ内のライティングツールだけが目的なら、チャットアプリは不要です。チャット画面、モデルの選択、ドキュメントへの質問が欲しい場合は、このガイドのアプリのどれかを入れてください。Appleのモデルとオープンモデルのトレードオフについては、[Appleのオンデバイス AI vs ローカルLLM](/ja/local-llms/apple-on-device-ai-vs-local-llms)をご覧ください。',
          },
        ],
      },
      appStoreRules: {
        id: 'app-store-rules',
        title: 'iPhoneのローカルAIを左右するApp Storeの規則',
        content:
          '**iPhoneとデスクトップのローカルAIの違いの大半は、App Storeで説明がつきます。** AppleのApp Reviewガイドラインはすべてのアプリに適用され、ここで関係するのは、自己完結型アプリ、電力使用、バックグラウンドサービス、データ共有の4つです。この章では規則の文面を引用し、当サイトの解釈を添えます。法的助言ではなく、Appleが規則を変更することもあります。',
        items: [
          '**アプリを変更するコードのダウンロード禁止（ガイドライン2.5.2）。** Appleの文面は、アプリが「アプリの機能を導入または変更するコードをダウンロード、インストール、実行してはならない」（英語原文：“may not download, install, or execute code which introduces or changes features or functionality of the app”）というものです。ローカルAIアプリは、エンジンをアプリに同梱し、データであるモデルの重みをダウンロードすることで、この規則の範囲内にとどまっています。これは当サイトの解釈であり、Appleの見解ではありません。',
          '**スマホ上のOllamaサーバーはない。** OllamaにはiPhoneアプリがなく、App Storeのサンドボックスでは、Ollamaサーバーやコンテナを動かす現実的な方法がありません。サンドボックス化されたシェルアプリは一部存在しますが、ローカルモデルサーバーとしては使えません。',
          '**公開APIのみ（ガイドライン2.5.1）。** アプリが使えるのは公開APIだけです。そのため、Foundation Models、Core ML、Metal、MLXが利用可能な道筋であり、Neural Engineへの非公開アクセスはその対象外です。',
          '**電力と発熱（ガイドライン2.4.2）。** Appleは、アプリが「バッテリーを急速に消耗させたり、過度の熱を発生させたり、デバイスのリソースに不必要な負荷をかけたりしてはならない」（英語原文：“should not rapidly drain battery, generate excessive heat, or put unnecessary strain on device resources”）と述べています。生成を長く続けると、この線に触れます。アプリが長時間の実行を抑えたり止めたりするのはそのためです。',
          '**バックグラウンドでの利用は制限される（ガイドライン2.5.4）。** マルチタスクのアプリがバックグラウンドサービスを使えるのは、音声再生、位置情報、タスク完了、ローカル通知といった本来の目的に限られます。アプリを離れたあと、モデルが生成を続けたり、エージェントとして無期限に動いたりすることはできません。[Reins](/ja/power-local-llm/reins-review)は、バックグラウンド生成にはiOS 26が必要だと記しています。',
          '**メモリの制限。** iOSは、フォアグラウンドのアプリが使えるRAMの量に上限を設けています。Appleは、開発者が申請できる増加メモリ上限のエンタイトルメント（com.apple.developer.kernel.increased-memory-limit）を公開しており、当サイトでは正確な許容量は記載しません。アプリがそれを持っているかどうかは外から分からないため、頼る前に、アプリ自身のベンチマークでモデルを試してください。',
          '**JITとランタイムコンパイル。** デスクトップのエンジンは実行時にコードをコンパイルすることが多いのに対し、iOSアプリは事前コンパイル済みのエンジンを同梱します。これはプラットフォームの一般的な挙動で、複数のエンジンプロジェクトが指摘しており、iPhoneのエンジンの機能がデスクトップに及ばない理由の1つです。',
          '**データ共有（ガイドライン5.1.1と5.1.2）。** アプリは、プライバシーポリシーをリンクし、収集するデータを説明し、個人データを「サードパーティのAIを含む」（英語原文の訳）第三者と共有する前に許可を得なければならず、同意なく目的外にデータを使うことはできません。App Storeのプライバシーラベルは開発者が記入するもので、これについてはプライバシーの章で改めて触れます。',
          '**サイドローディングと代替マーケットプレイス。** EUでは、デジタル市場法に基づく代替アプリマーケットプレイスがありますが、どこで公開するかは各開発者が決めます。このガイドのアプリで、代替マーケットプレイスを必要とするものはありません。例外は[LLM Farm](/ja/power-local-llm/llm-farm-review)で、現状ではXcodeでソースからビルドする必要があります。',
          '**TestFlightベータ。** 複数の開発元がTestFlightビルドを提供しています（たとえば、無料トライアル用の[Aiko](/ja/power-local-llm/aiko-review)や、新しいビルド用の[fullmoon](/ja/power-local-llm/fullmoon-review)）。TestFlightビルドは期限付きで未完成です。テスト用に使い、失えないデータには使わないでください。',
        ],
      },
      iphoneVsAndroid: {
        id: 'iphone-vs-android',
        title: 'iPhoneがAndroidより優れている点・劣る点',
        content:
          '**iPhoneは始めやすく拡張しにくく、Androidはその逆です。** iPhoneは既知の少数の構成で提供され、Apple独自のモデルを搭載し、すべてのアプリが1つのストアを通ります。Androidのスマホは、RAMとチップのばらつきがはるかに大きく、ターミナルアプリやサイドローディングが使え、独自のオンデバイスモデルのスタックも持っています。これは公開情報に基づくプラットフォームの比較です。機種ごとの数値については、[Galaxy vs iPhone：オンデバイスAI比較](/ja/local-llms/galaxy-vs-iphone-on-device-ai-2026)と、姉妹ガイドの[Android向けローカルAIガイド](/ja/power-local-llm/local-ai-on-android-guide)をご覧ください。',
        columns: ['項目', 'iPhone', 'Android'],
        rows: [
          {
            '項目': 'セットアップの手間',
            'iPhone': 'App Store、ワンタップ',
            'Android': 'Play StoreまたはAPK',
          },
          {
            '項目': '内蔵モデル',
            'iPhone': 'Apple Foundation Models',
            'Android': 'メーカー製とGoogleのモデル',
          },
          {
            '項目': 'スマホ上でOllamaを動かす',
            'iPhone': 'iPhone用のOllamaアプリはない',
            'Android': 'Termuxで可能（ガイド参照）',
          },
          {
            '項目': 'RAMの上限',
            'iPhone': 'Proモデルで約12 GB',
            'Android': '機種により異なる、各機種で確認',
          },
          {
            '項目': 'モデル形式',
            'iPhone': 'GGUF、MLX、Core ML、LiteRT',
            'Android': 'GGUF、LiteRT、MLCなど',
          },
          {
            '項目': 'ショートカットと自動化',
            'iPhone': 'ショートカット、App Intents',
            'Android': 'Taskerとインテント',
          },
          {
            '項目': 'アプリ数',
            'iPhone': 'オープンソースの選択肢は少なめ',
            'Android': 'オープンソースの選択肢が多い',
          },
          {
            '項目': 'バックグラウンド処理',
            'iPhone': '厳しく制限',
            'Android': 'ゆるいが制限はある',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'このガイドのアプリの多くはAndroidでも動くため（[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)、[MLC Chat](/ja/power-local-llm/mlc-chat-review)、[KernelAI](/ja/power-local-llm/kernelai-review)、[LLM Hub](/ja/power-local-llm/llm-hub-review)）、両方のプラットフォームがある家庭では、同じアプリをそれぞれで使えることがよくあります。Androidの詳細は[2026年 Android向けベスト・ローカルAIアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026)で比較しています。',
          },
        ],
      },
      chatMain: {
        id: 'chat-assistants',
        title: 'チャットアシスタント：主要なオンデバイスアプリ',
        content:
          '**iPhoneで一般的なチャットをするなら、当サイトのiPhoneランキング記事が比較する5つのアプリのどれかから始め、そのあと下の新しいアプリを見てください。** 各行に、アプリの機能と正直な制限を書いています。詳細は、リンク先のPromptQuorumのレビュー、ストアの掲載情報、開発元のページに基づいています。レビューがアプリをテストしたと明記していない限り、速度と品質は未測定として扱ってください。ランキングと目安の速度は[2026年 iPhone向けベスト・ローカルAIアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026)、チャットカテゴリ全体は[チャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared)をご覧ください。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'PocketPal AIは無料の定番、Private LLMはSiriとショートカットに対応する有料の選択肢、Locally AIはApple Foundation Modelsに対応する無料のMLXアプリ、Google AI Edge GalleryはGemma 4を使える無料のiPhoneアプリです。',
          },
          {
            type: 'plain-terms',
            text:
              'チャットアプリを1つ選び、自分のiPhoneに合うモデルを1つダウンロードし、このガイドの他のアプリは、ドキュメント、音声、自宅サーバーといった特別な用途のために取っておいてください。価格はリンク先のレビューとストアページに基づくもので、変更されることがあります。購入前にストアで確認してください。',
          },
        ],
        items: [
          '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)：無料、オープンソース（MIT）で、Hugging Faceの任意のGGUFモデルを動かせ、ベンチマーク機能を内蔵しています。制限：単体のチャットで、ショートカットやSiriのアクションは記載されていません。プレミアムのプリセット向けに任意のアプリ内課金があります。',
          '[Private LLM](/ja/power-local-llm/private-llm-review)：iPhone、iPad、Mac共通で一度きり$4.99、140以上のモデル、アカウント不要です。開発元は、Siriとショートカットに連携できると述べています。制限：クローズドソースで、モデルは厳選された一覧のため、任意のファイルは読み込めません。',
          '[Locally AI](/ja/power-local-llm/locally-ai-review)：無料、LM Studioチームによるアプリで、Apple MLXを基盤とし、ショートカットのアクション、チャットの選択肢としてのApple Foundation Models、Mac上のLM Studioへの任意のリンクを備えます。制限：任意のGGUFの読み込みは不可、クローズドソース、iOS 18.1以降。',
          '[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)：Googleの無料アプリで、思考モード、エージェントスキル、画像・音声入力に対応したGemma 4を使えます。制限：LiteRT-LMモデルのみ、実験的ベータと表示されており、App Storeのプライバシーラベルには一部のデバイス診断情報が示されています。',
          '[Noema](/ja/power-local-llm/noema-review)：無料で、GGUF、MLX、ExecuTorch、Core ML、Apple Foundation Modelsを1つのアプリで動かし、オンデバイスのドキュメントチャットも備えます。制限：クローズドソース、RAMの最小要件は非公表、iOSまたはiPadOS 18以降。',
          '[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)：無料のオープンソース（MIT）アプリで、GGUFによるチャット、Stable Diffusionの画像モデル、Whisperの音声認識をデバイス上で動かし、iOS、Android、macOS、Windowsに対応します。制限：1つのアプリで多くの用途をこなすため、ストレージと設定が増えます。',
          '[Pocket AI](/ja/power-local-llm/pocket-ai-review)：無料、Metal対応のllama.cppで、Qwen、Gemma、Llama、Mistral、Phi、DeepSeekの各ファミリーにまたがる28モデル（開発元による）、iPhone 12以降。制限：オンデバイスのWhisper音声入力には、有料のProアンロックが必要です。',
          '[KernelAI](/ja/power-local-llm/kernelai-review)：無料で、112 MBから3.11 GBまでのダウンロード可能なオープンモデル53種を備え、掲載情報によるとドキュメント、ビジョン、ショートカットにも対応します。制限：クローズドソースで、当サイトのレビューは実機テストではなく公開情報に基づいています。',
          '[On Device AI](/ja/power-local-llm/on-device-ai-review)：200以上のダウンロード可能なGGUFとMLXのモデルに加え、文字起こし、ドキュメントとRSSの取り込み、オンデバイスのテキスト音声変換、自動化フックを備えます。制限：クローズドソースのアプリに幅広い機能が載っているため、プライバシーの項目を読んでください。',
          '[Enclave AI](/ja/power-local-llm/enclave-ai-review)：アプリ内課金付きで無料、掲載情報によるとiPhone、iPad、Macでオフライン動作、アカウント不要で、当サイトのランキング記事によるとドキュメント操作とショートカットに対応します。制限：クローズドソースで、有料プランがあります。',
        ],
      },
      chatMore: {
        id: 'chat-more',
        title: 'チャットアシスタント：新しいアプリ、ニッチなアプリ、ハイブリッド型',
        content:
          '**これらのアプリは、より限られたニーズをカバーします。買い切りのチャット、Appleのモデルだけを使うチャット、ペルソナ、オープンソースのプライバシー重視プロジェクト、そしてオンデバイスとクラウドを混ぜたハイブリッド型です。** ハイブリッド型は、オンデバイスのモードにとどまっている間だけローカルなので、特にその警告を確認してください。',
        items: [
          '[Cloak: Local AI](/ja/power-local-llm/cloak-local-ai-review)：買い切り（米国ストアで$1.99）、推奨モデルを1つダウンロードし、iPhoneで、ボイスメモと、写真・位置情報・ボイスメモから作る週次の振り返りを追加します。制限：モデルの選択機能はなく、モデル名は非公開です。',
          '[Compass - Local AI](/ja/power-local-llm/compass-local-ai-review)：無料で、デバイス上のApple Intelligenceで回答し、オンデバイスOCRでスクリーンショットを読み取ります。iOSまたはiPadOS 26が必要です。制限：Web検索は任意で、オンにするとクエリがDuckDuckGoまたはBraveに送信されます。',
          '[AI on Device](/ja/power-local-llm/ai-on-device-review)：買い切り$4.99、2ビットに量子化した3Bモデルで、iOS 26とApple Intelligence対応デバイスが必要です。制限：2025年10月13日以降の更新がないため、更新が止まっているものとして扱ってください。',
          '[Haplo AI](/ja/power-local-llm/haplo-ai-review)：QwenやPhiなどのオープンモデルをダウンロードして、チャット、画像入力、画像生成に使え、アカウント不要です。制限：有料アプリで、当サイトのレビューは公開情報に基づいています。',
          '[Oscilla](/ja/power-local-llm/oscilla-review)：無料、40以上のオープンモデル、リアルタイム音声、内蔵メモリ、Web検索、ファイルと画像の分析に対応し、Appleの「データ収集なし」ラベルが付いています。制限：iOS 26以降、クローズドソースで、2026年5月21日以降の更新がありません。',
          '[Frankly AI](/ja/power-local-llm/frankly-ai-review)：タスク向けのペルソナを持つダウンロード可能なオンデバイスモデルで、アカウント不要です。1日あたりの無料枠があり、Proで残りが使えます。制限：無料版には利用上限があります。',
          '[LLM Studio Go](/ja/power-local-llm/llm-studio-go-review)：無料で広告付き、GGUFとMLXのモデルでチャット、音声、画像、音楽、音声合成に対応し、iOSまたはiPadOS 18が必要です。制限：広告があり、レビューによると名前に反してLM Studioとは無関係です。',
          '[Local AI Chat - pocket](/ja/power-local-llm/local-ai-chat-pocket-review)：フリーミアムのオフラインチャットで、キャッチコピーによると画像生成とショートカットに対応し、iOSまたはiPadOS 18.6以降が必要です。制限：2026年5月27日以降の更新がなく、サブスクリプション型のアプリ内課金があります。',
          '[Loci AI](/ja/power-local-llm/loci-ai-review-offline-local-ai)：iPhone、iPad、Android、Mac、Windowsで無料、ハードウェアに合うモデルを自動で選びます。制限：モデルの性能に関する開発元の主張は、PromptQuorumでは未検証です。',
          '[Ensu](/ja/power-local-llm/ensu-review)：無料のオープンソース（AGPL）で、Ente Labsによるアプリです。画像入力とローカルの音声入力に対応します。制限：開発元自身が、ChatGPTやClaude Codeにはまだ及ばないと述べており、バージョンもまだ0.x台です。',
          '[MemoryAI](/ja/power-local-llm/memoryai-review)：無料のオフラインチャットで、ドキュメントへの質問、編集可能なメモリ、PINロック付きのキッズモードを備え、iOS 16.4以降、RAM 4 GB以上が必要です。制限：プライバシーポリシーには利用イベントとクラッシュレポートが記載されており、クローズドソースです。',
          '[Secret AI](/ja/power-local-llm/secret-ai-review)：GGUF、MNN、MLXのモデルで、キャラクター、スキル、MCPツールを使えるオフラインチャットです。制限：プライバシーポリシーによると、MCPツールの呼び出しと任意のリモートサーバーはデータをデバイスの外に送る可能性があり、そのポリシーはそれらの機能の追加より前のものです。',
          '[LocalMindAI](/ja/power-local-llm/localmindai-review)：iPhoneとiPadで、チャット、メモリ、音声認識、ドキュメント読み取りに対応し、Appleのモデルまたはダウンロードしたモデルを使います。iOS 26が必要です。制限：レビュー時点で公開から数日しか経っておらず、当サイトのレビューは公開情報に基づいています。',
          '[Solair AI](/ja/power-local-llm/solair-ai-review)：ローカル優先のアシスタントで、任意で自分のキーを使うクラウドへのフォールバックがあります。iOS 26が必要です。制限：フォールバックはクラウドなので、どのモードが回答しているかを確認してください。',
          '[Liquid Apollo](/ja/power-local-llm/liquid-apollo-review)：無料で、Liquid AIのLFM2モデル（350Mから2.6B）をオフラインで動かし、任意のOpenRouterモードとカスタムバックエンドに対応します。iOS 18が必要です。制限：ローカル専用ではなく、OpenRouterモードには自分のキーとインターネットが必要です。',
          '[Kai 9000](/ja/power-local-llm/kai-9000-review)：永続メモリとツールを備えたオープンソースのアシスタント。制限：レビューによると、デフォルトではメッセージをクラウドサービスに送信し、オンデバイスモデルをダウンロードして初めてローカルで動きます。',
          '[CompactifAI APP](/ja/power-local-llm/compactifai-app-review)：Multiverse Computingによる無料アプリで、圧縮モデルを提供します。制限：現在のストアの説明文にはAPIモデルしか記載されていないため、スマホ上で何が動くかは未確認です。',
          '[Atomic Chat](/ja/power-local-llm/atomic-chat-review)：macOS、Windows、Linux、iOS、Android向けの無料のオープンソース（Apache 2.0）アプリで、GGUF、MLX、ONNXのモデルとローカルのOpenAI互換APIを備えます。制限：マルチプラットフォームのプロジェクトなので、iPhone版に何が含まれるかはレビューで確認してください。',
          '[LLM Hub](/ja/power-local-llm/llm-hub-review)：AndroidとiPhone向けのスイートで、MCP対応のエージェント、画像・音楽の生成、翻訳、Whisper、音声チャットを備え、有料のPremiumティアもあります。制限：ライセンスはPolyForm Noncommercialで、一般的な意味でのオープンソースライセンスではありません。',
          '[Llamatik](/ja/power-local-llm/llamatik-review)：無料、MITライセンスのオフラインチャットボットで、掲載情報自身が開発者のKotlin SDKの実験的なショーケースと呼んでいます。制限：プライバシーポリシーとストアのラベルに、Firebaseの分析とクラッシュレポートが記載されています。',
          '[Layla](/ja/power-local-llm/layla-review)：AndroidとiOSで買い切り$19.99、ペルソナ主導のコンパニオン、音声、画像生成を備えたGGUFモデルのアプリです。制限：Android優先で、任意のLayla Cloudモードがあります。',
        ],
      },
      chatQuiet: {
        id: 'chat-quiet-apps',
        title: '更新が止まっているアプリ、古いアプリ、App Storeにないアプリ',
        content:
          '**3か月以上更新のないアプリは、メンテナンスされていない可能性があります。頼る前に確認してください。** 以下の日付は、PromptQuorumディレクトリのタイルと各レビューに基づいています。更新が止まったアプリでも動くことはありますが、修正も新しいモデルも提供されず、開発元が戻ってくる兆しも分かりません。',
        items: [
          '[MLC Chat](/ja/power-local-llm/mlc-chat-review)：MLC LLMプロジェクトのMetal高速化リファレンスアプリ。当サイトのレビューによると、2024年9月27日以降、App Storeでの更新はありません。背後のエンジンである[MLC LLM](/ja/power-local-llm/mlc-llm-explained)は、今も活発です。',
          '[LLM Farm](/ja/power-local-llm/llm-farm-review)：最後のリリースは2025年1月の1.4.3で、最後のコードプッシュは2026年1月30日です。App StoreからもTestFlightからもインストールできません（READMEには一時的に利用不可とあります）。サンプリング設定が必要な場合は、Xcodeでソースからビルドしてください。',
          '[fullmoon](/ja/power-local-llm/fullmoon-review)：無料、MITライセンスで、Apple MLX上で小型モデルを動かします。2025年1月28日以降リリースがなく、2025年5月5日以降コードの変更もありません。',
          '[Maid](/ja/power-local-llm/maid-review)：Android優先のオープンソースのチャットアプリで、iOS版はサイドロードでした。当サイトのレビューは、iOSのリリースを2025年4月のバージョン2.0.7としており、App Storeの選択肢ではありません。',
          '[Aiko](/ja/power-local-llm/aiko-review)：今も販売されていて文字起こしに役立ちますが、最後の更新は2026年6月27日で、3か月以上前です。',
          'このガイドで更新が止まっているとフラグを付けた他のアプリ：[Atomic Bot](/ja/power-local-llm/atomic-bot-review)（2026年5月26日）、[Chapper](/ja/power-local-llm/chapper-review)（2026年8月6日）、[Enchanted](/ja/power-local-llm/enchanted-review)（2026年7月7日）、[AI CutoutWerk](/ja/power-local-llm/ai-cutoutwerk-review)（2026年2月16日）、[pcAI Photo Retouch](/ja/power-local-llm/pcai-photo-retouch-review)（2026年2月20日）。',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '更新停止は、ディレクトリのタイルに基づく日付ベースのフラグであり、品質の評価ではありません。この一覧のアプリにお金を払う前に、App Storeのページを開いて、バージョン履歴を自分で確認してください。',
          },
        ],
      },
      vision: {
        id: 'vision-camera',
        title: 'ビジョンとカメラ：写真やスクリーンショットについて質問する',
        content:
          '**質問と一緒に画像を受け付け、デバイス上で回答するiPhoneアプリがいくつかありますが、小型のビジョンモデルはクラウドのモデルよりミスが多くなります。** 方式は2つあります。ダウンロードするビジョン言語モデル（モデル自身が画像を読む）と、システムOCRにテキストモデルを組み合わせる方式（スマホがテキストを抽出し、そのあとモデルが答える）です。AppleのiOS 27デベロッパーガイドによると、Foundation Modelsフレームワークは画像とテキストを受け付けるようになり、モデルがOCRやバーコード読み取りなどのVisionツールをデバイス上で呼び出せます。',
        items: [
          '[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)：Gemma 4モデルによるAsk ImageとAudio Scribe。制限：LiteRT-LMモデルのみで、Googleが報告するメモリの数値は開発元の数値であり、PromptQuorumの測定値ではありません。',
          '[Compass - Local AI](/ja/power-local-llm/compass-local-ai-review)：添付したスクリーンショットをオンデバイスOCRで読み取り、Apple Intelligenceで回答します。制限：OCRが読むのはテキストで、場面は説明しません。iOSまたはiPadOS 26が必要です。',
          '[Oscilla](/ja/power-local-llm/oscilla-review)：掲載情報によると、MiniCPM-Vなどビジョン対応のモデルによるファイルと画像の分析。制限：iOS 26以降で、2026年5月21日以降の更新がありません。',
          '[Haplo AI](/ja/power-local-llm/haplo-ai-review)：画像入力と画像生成を1つのアプリで。制限：当サイトのレビューは公開情報に基づいているため、モデルの品質は未測定です。',
          '[Ensu](/ja/power-local-llm/ensu-review)：ダウンロードしたモデルによる画像入力、無料でオープンソース。制限：バージョン0.x台で、開発元は、大規模なクラウドツールにはまだ及ばないと述べています。',
          '[KernelAI](/ja/power-local-llm/kernelai-review)：ダウンロード可能な53モデルとともに、機能の1つとしてビジョンを挙げています。制限：画像を受け付けるモデルは、モデルごとに異なります。',
          '[MemoryAI](/ja/power-local-llm/memoryai-review)：モデルのダウンロード後、ビジョンモデルによる画像理解。制限：ビジョン対応のモデルは自分で選ぶ必要があります。',
          '[Reins](/ja/power-local-llm/reins-review)：画像、PDF、CSVの添付を、自分のサーバー上のモデル、またはローカルのMLXモデルに送ります。制限：品質は、選んだサーバー側のモデルに左右されます。',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '読み取りを誤るとコストが生じる用途には、小型のオンデバイスビジョンモデルを使わないでください。たとえば、薬のラベル、法的文書、食用にする植物やキノコの識別などです。回答は出発点として扱い、出典を確認してください。',
          },
        ],
      },
      voice: {
        id: 'voice-speech',
        title: '音声：音声入力、文字起こし、読み上げ、オフラインアシスタント、Siri',
        content:
          '**音声認識は、オンデバイスで最も確立したタスクの1つです。開発元は、最近のスマホでWhisper級のモデルが動くと報告しており、分単位の課金ではなく買い切りのアプリもいくつかあります。** テキスト音声変換とハンズフリーのアシスタントは、まだ出来にばらつきがあります。自分で組み立てる場合は[スマホでローカル音声アシスタントを作る](/ja/power-local-llm/voice-assistant-local-mobile-offline)、カテゴリ全体は[音声・オーディオアプリ比較](/ja/power-local-llm/local-llm-voice-audio-compared)、エンジンの比較は[ローカルWhisper音声認識の比較](/ja/power-local-llm/local-whisper-stt-comparison)をご覧ください。',
        items: [
          '[Whisper Notes](/ja/power-local-llm/whisper-notes-review)：買い切り$7.99で、iPhone、iPad、Apple siliconのMacでWhisper、Parakeet、SenseVoiceを動かし、話者ラベルに対応します。プライバシーポリシーには、音声と文字起こしがデバイスの外に出ることはないとあります。制限：クローズドソースで、レビューは実機テストではなく公開情報に基づいています。',
          '[Aiko](/ja/power-local-llm/aiko-review)：Mac、iPhone、Vision Pro向けのオンデバイスWhisper文字起こしで、100言語、ショートカット対応、1回の購入で全プラットフォームに使えます。制限：最後の更新は2026年6月27日で、更新が止まっています。',
          '[Lyonesse](/ja/power-local-llm/lyonesse-review)：iPhone、iPad、Mac向けのオフライン文字起こし、議事録、ドキュメントチャットです。Apple Watchアプリは単独で録音し、文字起こしを行うiPhoneに転送します。制限：開発元の処理に関する主張は、独立した検証を受けていません。',
          '[OpenWhispr](/ja/power-local-llm/openwhispr-review)：MITライセンスの音声入力と議事録ツールで、ローカルのWhisperまたはParakeetモデル、あるいは自分で選ぶクラウドプロバイダを使います。制限：音声がデバイスの外に出るかどうかは、選ぶモデル次第です。',
          '[AquaVoice](/ja/power-local-llm/aquavoice-review)：アクティブなアプリに入力する音声入力です。制限：レビューによるとクラウドサービスで、ローカルの音声入力と取り違えないようにここに挙げています。',
          '[Ensu](/ja/power-local-llm/ensu-review)と[MemoryAI](/ja/power-local-llm/memoryai-review)：チャットアプリの中で、ローカルの音声入力（Ensu）と、オンデバイスの音声入力と読み上げによるハンズフリー音声（MemoryAI）を提供します。制限：音声の品質は、背後にある小型チャットモデルに左右されます。',
          '[Oscilla](/ja/power-local-llm/oscilla-review)、[LLM Studio Go](/ja/power-local-llm/llm-studio-go-review)、[Pocket AI](/ja/power-local-llm/pocket-ai-review)：それぞれ、リアルタイム音声、音声付きの音声チャット、オンデバイスのWhisper入力（有料Pro）です。制限：音声は、チャットモデルの上にメモリとバッテリーの負荷を加えます。',
          '[Castmates](/ja/power-local-llm/castmates-review)：開発元によると、スマホ上で動くキャラクターとの音声通話です。制限：クローズドソースのため、この主張は開発元の言葉に依拠しています。',
          '[Cloak: Local AI](/ja/power-local-llm/cloak-local-ai-review)：ボイスメモをノートやチャットに変えます。制限：モデルは1つに固定されています。',
          '[Home Assistant Assist](/ja/power-local-llm/home-assistant-assist-review)：Home Assistantの中の音声アシスタントで、レビューによるとWhisper、Piper、Wyomingでローカルに動きます。単独のiPhoneアプリではありません。制限：Home Assistantサーバーと、一部が実験的な任意のLLMエージェントが必要です。',
          '[Murmur](/ja/power-local-llm/murmur-review)：写真、動画、ゲーム向けのインストゥルメンタル曲をデバイス上で作曲し、一度きりのProアンロックがあります。制限：ボーカルはありません。',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Siriとショートカット：[Private LLM](/ja/power-local-llm/private-llm-review)はSiriとショートカットとの連携を掲げ、[Locally AI](/ja/power-local-llm/locally-ai-review)と[Aiko](/ja/power-local-llm/aiko-review)はショートカットのアクションを提供し、当サイトのiPhoneランキング記事は、プロンプトをAppleのオンデバイスモデルに回せるショートカットの「Use Model」アクションを説明しています。これらのどれもSiri自体を置き換えるものではありません。Siriにショートカットを実行させ、それがアプリを呼び出す形になります。',
          },
        ],
      },
      documents: {
        id: 'documents-rag',
        title: 'スマホ上のドキュメント、PDF、検索拡張',
        content:
          '**数件のPDFやノートとのチャットはiPhoneでも動きますが、ライブラリ全体は自宅サーバーに任せるべきです。** オンデバイスのドキュメントチャットは、ファイルを断片に分け、小型の埋め込みモデルでインデックスを作り、最良の断片をチャットモデルに渡します。小型モデルはコンテキストウィンドウが短いため、回答が内容を取りこぼしたり、存在しない引用が出たりする可能性があります。ライブラリ規模の検索については、[ナレッジ・検索アプリ比較](/ja/power-local-llm/local-llm-knowledge-retrieval-compared)をご覧ください。',
        items: [
          '[Private Mind](/ja/power-local-llm/private-mind-review)：Software Mansionによるオープンソース（MIT）のチャットで、React Native ExecuTorchを使い、オンデバイスの検索と出典の引用で、PDFやテキストファイルに関する質問に答えます。制限：バージョン1.3.0で、ページを取得する任意のWebトグルが追加されたため、デフォルトではオフラインですが、その機能をオンにしている間はオフラインではありません。',
          '[MemoryAI](/ja/power-local-llm/memoryai-review)：ドキュメントへの質問と、編集可能なAgent Memory。制限：クローズドソースで、利用イベントはスマホの外に出ます。',
          '[LocalMindAI](/ja/power-local-llm/localmindai-review)：Appleのモデル、またはダウンロードしたモデルで、デバイス上でドキュメントを読みます。制限：iOS 26が必要で、レビュー時点ではごく新しいアプリでした。',
          '[Noema](/ja/power-local-llm/noema-review)：5つのモデル形式にまたがるオンデバイスのドキュメントチャット。制限：クローズドソースで、RAMの数値は非公表です。',
          '[Lyonesse](/ja/power-local-llm/lyonesse-review)：文字起こしのそばで、自分のドキュメントとチャットできます。制限：Apple Watchと会議向けの機能が中心です。',
          '[Arbiter](/ja/power-local-llm/arbiter-local-ai-chat-review)：アップロードしたドキュメントをデバイス上に保持して、iPhone 13 Pro以降（RAM約6 GB以上）で要約し、より大きなモデルのためにLM Studio、Ollama、コンパニオンのArbiter for Macにつなげます。制限：大きなモデルによる回答は、スマホからパソコンに出ていきます。',
          '[KernelAI](/ja/power-local-llm/kernelai-review)と[Enclave AI](/ja/power-local-llm/enclave-ai-review)：どちらも、汎用のチャットアプリの中にドキュメント機能を挙げています。制限：頼る前に、アプリ内でファイルサイズと形式の制限を確認してください。',
          '[Reins](/ja/power-local-llm/reins-review)：PDF、CSV、テキストの添付を、自分のサーバー上のモデルに送ります。制限：処理はスマホではなく、サーバーで行われます。',
          '[AnythingLLM Mobile](/ja/power-local-llm/anythingllm-mobile-review)：Androidには単独のオンデバイスモードとAnythingLLM Desktopとのペアリングがあり、当サイトのレビューには、iOSアプリはまだ未リリースと記載されています。制限：iOS版が出るまでは、自分のAnythingLLMサーバーに、ブラウザからアクセスしてください。',
        ],
      },
      translation: {
        id: 'translation',
        title: 'デバイス上の翻訳',
        content:
          '**翻訳は、タスクが限定的で、翻訳向けに調整したモデルを同梱するアプリもいくつかあるため、小型のオンデバイスモデルに向いています。** PromptQuorumは、iPhoneでの翻訳品質をベンチマークしていません。まれな言語、慣用句、長い文書では品質が下がる可能性が高く、どのオンデバイスエンジンも、モデルや言語ごとにダウンロードが必要です。',
        items: [
          '[On-Device AI Translator](/ja/power-local-llm/on-device-ai-translator-review)：ダウンロード可能なHy-MT2、TranslateGemma、Qwenのモデルでスマホ上で翻訳し、無料のエンジンとしてAppleの内蔵翻訳も使えます。iOS 18.4以降が必要です。制限：AIモデルはアプリ内課金の先にあり、その価格は出典に示されておらず、プライバシーポリシーはアプリより前のものです。',
          '[LLM Hub](/ja/power-local-llm/llm-hub-review)：AndroidとiPhone向けのスイートに翻訳を含みます。制限：翻訳は多くの機能のうちの1つで、ライセンスは非商用です。',
          '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)や[Locally AI](/ja/power-local-llm/locally-ai-review)などの汎用チャットアプリも、QwenやGemma系などの多言語モデルを読み込めば翻訳できます。制限：用語集も、文書のレイアウト保持も、言語ごとの品質保証もありません。',
          'Apple自身の翻訳アプリとシステム翻訳は、上のアプリとは別物であり、このガイドでは確認していません。使いたい言語の組み合わせをオフライン用にダウンロードできるかどうかは、翻訳アプリで確認してください。',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '書籍や長い文書全体には、デスクトップの経路のほうが現実的です。[LLMで書籍を翻訳する](/ja/power-local-llm/translate-books-with-llms-review)をご覧ください。Apple Intelligenceの言語対応は別の一覧で、Apple Intelligenceの章で扱っています。',
          },
        ],
      },
      images: {
        id: 'image-generation-editing',
        title: '画像生成と写真編集',
        content:
          '**iPhoneは、小型の拡散モデルで画像を生成し、セグメンテーションモデルで写真を編集できますが、生成は遅く、ストレージを大量に使い、スマホが熱くなります。** モデルファイルは数GB単位のダウンロードで、PromptQuorumにはiPhoneの画像アプリの速度の数値がありません。クラウドとローカルのトレードオフについては[ローカルAI画像生成 vs クラウド](/ja/power-local-llm/local-ai-image-generation-vs-cloud)、カテゴリ全体については[画像・動画アプリ比較](/ja/power-local-llm/local-llm-images-video-compared)をご覧ください。',
        items: [
          '[Draw Things](/ja/power-local-llm/draw-things-review)：macOS、iOS、iPadOS、visionOS上で、Stable Diffusion、SDXL、Fluxなどの拡散モデルで画像を生成します。ローカル生成にアカウントは不要で、iOS 15.4以降が必要です。制限：任意のクラウドモードも備えるため、100%ローカルではなく、大きなモデルほど多くのRAMが必要です。',
          '[Genva](/ja/power-local-llm/genva-review)：テキストのプロンプトと写真から、一度のモデルダウンロード後にデバイス上で画像を作り、アップスケールも行うiPhoneとiPad向けのアプリです。制限：2026年10月14日にバージョン1.0.0として公開されたばかりで、実績はありません。',
          '[Haplo AI](/ja/power-local-llm/haplo-ai-review)、[Off Grid AI](/ja/power-local-llm/off-grid-ai-review)、[LLM Studio Go](/ja/power-local-llm/llm-studio-go-review)：デバイス上で画像も生成するチャットアプリです（Haplo AI、Stable Diffusionモデルを使うOff Grid AI、音楽と音声合成も備えるLLM Studio Go）。制限：画像の品質と速度は、専用アプリに及びません。',
          '[Local AI Chat - pocket](/ja/power-local-llm/local-ai-chat-pocket-review)と[Layla](/ja/power-local-llm/layla-review)：画像生成付きのオフラインチャットで、Laylaは音声とペルソナも備えます。制限：Local AI Chat - pocketは2026年5月27日以降更新が止まっており、LaylaはAndroid優先です。',
          '[Tina](/ja/power-local-llm/tina-review)：自分でホストするサーバー上のComfyUIを通じて画像を生成し、デバイス上でモデルを動かすこともできます。制限：画像の工程には、自分のサーバーが必要です。',
          '[AI CutoutWerk](/ja/power-local-llm/ai-cutoutwerk-review)：Core MLのセグメンテーションモデルを使う、iPhone、iPad、Mac向けのオフライン背景除去と切り抜き合成アプリです。制限：2026年2月16日以降の更新がありません。',
          '[pcAI Photo Retouch](/ja/power-local-llm/pcai-photo-retouch-review)：開発者が完全にデバイス上で動くと述べるAIで、古い写真の修復とアートスタイルの適用を行います。制限：モデル名は非公表、ソースも未公開で、2026年2月20日以降の更新がありません。',
        ],
      },
      photos: {
        id: 'photos-gallery-search',
        title: 'フォトライブラリとギャラリー検索',
        content:
          '**iPhoneのAI写真検索は、多くの場合、インデックス作成を別の場所で行うライブラリのクライアントです。スマホ上でオプトインの機能として行うか、自分で運用するサーバー上で行います。** 以下の3つのライブラリはそれぞれ方式が異なり、どれもチャットモデルは追加しません。顔認識は生体データを処理するため、オンにする前に、自分や写真に写る人々が住む地域のルールを確認してください。',
        items: [
          '[Ente Photos](/ja/power-local-llm/ente-photos-review)：オープンソースの写真バックアップで、Enteによるとエンドツーエンド暗号化されています。顔認識と自然言語のマジック検索はデバイス上で動き、オンにするまでは無効です。制限：写真は暗号化された状態でEnteのクラウドに保存され、最初のインデックス作成はバッテリーを消費します。',
          '[Immich](/ja/power-local-llm/immich-review)：iPhoneとAndroidのアプリを備えたセルフホスト型の写真・動画バックアップです。スマート検索と顔認識は、自分で運用する機械学習コンテナ上で動き、Dockerでインストールします。制限：サーバーが必要で、データベースが保持するのはメタデータだけなので、ファイルには別のバックアップが必要です。チャットやLLMの機能はありません。',
          '[Mylio Photos](/ja/power-local-llm/mylio-photos-review)：写真、動画、ドキュメントのライブラリで、Mylioによると自分のデバイス上で動くSmartTag検索と、顔・テキスト認識を備えます。無料でダウンロードでき、サブスクリプションプランがあります。制限：Mylioは、アプリ内ヘルプのチャットボットがどこで動くかを明らかにしていません。',
          'iPhoneのブラウザやコンパニオンアプリで開くセルフホスト型のWebギャラリー、たとえば[PhotoPrismレビュー](/ja/power-local-llm/photoprism-review)、[Photoviewレビュー](/ja/power-local-llm/photoview-review)、[Home Galleryレビュー](/ja/power-local-llm/home-gallery-review)は、別途レビューしています。何がどこで動くかは、各レビューでご確認ください。',
        ],
      },
      notes: {
        id: 'notes-knowledge',
        title: 'ノート、ナレッジベース、ブックマーク',
        content:
          '**ノートやブックマークのツールの多くは、AIをサーバーか、自分で選ぶモデルプロバイダ上に置き、iPhoneアプリは記録と閲覧のクライアントです。** サーバーが自分のもので、モデルがローカルなら、完全にプライベートにできますが、それはオンデバイス推論ではありません。何がどこで動くかは、各レビューに記載しています。',
        items: [
          '[Hillnote](/ja/power-local-llm/hillnote-review)：Mac、Windows、iPhone、Android向けのローカル優先のMarkdownノートワークスペースで、OllamaとApple IntelligenceによるオンデバイスのAI、さらに任意のクラウドモデルと同期を備えます。制限：Ollamaはスマホではなくパソコンで動き、クラウドモデルは任意ですがローカルではありません。',
          '[Logseq](/ja/power-local-llm/logseq-review)：オープンソースでローカル優先のアウトライナーで、データベース版の2.0.2はベータであり、READMEはデータ損失の可能性を警告しています。制限：AIは内蔵モデルではなく、任意のMCPサーバー経由です。',
          '[SiYuan](/ja/power-local-llm/siyuan-review)：Windows、macOS、Linux、Android、iOS、HarmonyOS向けのセルフホスト型AGPLのナレッジワークスペースで、自分で選ぶモデルプロバイダに接続する任意のAI機能を備えます。制限：クラウド同期にはサブスクリプションか、一度きりのPRO購入が必要です。',
          '[Karakeep](/ja/power-local-llm/karakeep-review)：ネイティブのiOSとAndroidのアプリを備えたセルフホスト型のブックマーク・ノートアプリで、OpenAIまたはローカルのOllamaエンドポイントでAIタグ付けを行います。制限：サーバーはDockerで自分で運用し、タグ付けがローカルになるのはOllamaを選んだ場合だけです。',
          '[Linkwarden](/ja/power-local-llm/linkwarden-review)：保存したすべてのページのコピーをアーカイブし、設定したAIモデルでリンクにタグを付けられます。セルフホスト、または有料のCloud版で利用できます。制限：iPhoneアプリはクライアントで、AIの工程はサーバー上で動きます。',
          '[Lyonesse](/ja/power-local-llm/lyonesse-review)と[Cloak: Local AI](/ja/power-local-llm/cloak-local-ai-review)：録音をノートに変換（Lyonesse）、または写真・位置情報・ボイスメモから週次の振り返りを作成（Cloak）します。制限：どちらもクローズドソースです。',
        ],
      },
      health: {
        id: 'health-wellness',
        title: '健康とウェルネスに関する質問',
        content:
          '**レビュー済みのiPhoneアプリのうち1つが、デバイス上のApple Intelligenceで、Apple Healthのデータに関する質問に答えます。当サイトのiPhoneアプリの中で、健康系はこれだけです。** 健康データは機微な個人データであり、小型の言語モデルは臨床医ではありません。',
        items: [
          '[Pajdo](/ja/power-local-llm/pajdo-review)：Apple Healthのデータを8つのムードのいずれかに変換する、無料のiPhone、iPad、Apple Watchアプリで、ウェブサイトによると、そのデータに関する質問に、デバイス上のApple Intelligenceで答えます。無料プランには週5件の質問が含まれ、Proで上限がなくなり、ワークアウトの計画と診察用レポートが加わります。制限：クローズドソース、iOS 26以降で、オンデバイスという主張は開発者の言葉に依拠しています。',
          'チャットの各章に出てくる汎用チャットアプリでも、睡眠、トレーニング、栄養について一般的な範囲で話せます。制限：アプリが許可を求めない限り、Healthデータにはアクセスできず、小型モデルは誤った事実を自信たっぷりに述べることがあります。',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'オンデバイスの回答は医療上の助言ではなく、医師の代わりにはなりません。症状、心拍数のアラート、薬に関する質問の解釈には使わないでください。Apple Healthへのアクセスを許可する前に、アプリのプライバシーポリシーを読んでください。',
          },
        ],
      },
      roleplay: {
        id: 'roleplay-companions',
        title: 'ロールプレイ・コンパニオンアプリとコンテンツ安全の注意点',
        content:
          '**ロールプレイとコンパニオンのチャットは、iPhoneのローカルAIアプリ市場の大きな部分を占めており、モデルがスマホ上で動くかどうか、どんなコンテンツを許可するか、未成年をどう扱うかは、アプリによって大きく異なります。** ローカルだからモデレーションされているとは限らず、クラウドだから安全とも限りません。自分や家族の誰かが入れる前に、年齢区分と成人向けコンテンツの設定を読んでください。デスクトップのフロントエンドについては、[ロールプレイ向けSillyTavern・Agnai・RisuAI比較](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)をご覧ください。',
        items: [
          '[Castmates](/ja/power-local-llm/castmates-review)：35の用意されたキャラクター、カスタムキャラクターに対応し、アカウント不要の無料iPhoneアプリです。開発者は、約1.9 GBのダウンロード後に、llama.cpp経由でImpish Llama 3B（Q4_K_M）が動くと述べています。Proプランで1日のメッセージ上限がなくなり、任意の成人向けMatureモードが使えるようになります。制限：クローズドソースのため、オンデバイスという主張は開発者に依拠しています。',
          '[Frankly AI](/ja/power-local-llm/frankly-ai-review)：タスク向けのペルソナを持つオンデバイスモデルで、アカウント不要、1日の無料枠があります。制限：ペルソナはタスク志向で、Proでアプリの残りが使えます。',
          '[Layla](/ja/power-local-llm/layla-review)：ロールプレイのキャラクター、音声、画像生成をデバイス上で備える、ペルソナ主導のAIコンパニオンで、買い切り$19.99です。制限：別途有効化する任意のLayla Cloudモードがあります。',
          '[Secret AI](/ja/power-local-llm/secret-ai-review)：GGUF、MNN、MLXのモデルによるカスタムキャラクターで、開発元は、チャット、キャラクター、写真はプライベートに保たれると述べています。制限：プライバシーポリシーによると、MCPツールとリモートサーバーはデータをデバイスの外に送る可能性があります。',
          '[HiWaifu](/ja/power-local-llm/hiwaifu-review)：長期記憶、ロアブック、グループチャットを備えたロールプレイで、18歳以上向けです。制限：クラウドサービスのようで、掲載情報にはモデルがどこで動くか書かれていません。',
          '[Swerve](/ja/power-local-llm/swerve-ai-review)：コミュニティのキャラクターと分岐を備えた、ストーリーとキャラクターのチャットです。制限：掲載情報によると、オンデバイスのAIではなく、オンラインサービスです。',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '安全上の注意を、分かりやすく説明します。第一に年齢：これらのアプリのいくつかは、App Storeで18歳以上の区分、または成人向けモードを持ち、オンデバイスモデルには、頼れるサーバー側のフィルタがありません。第二にプライバシー：クラウドのロールプレイアプリは会話をサービスに送信し、ローカルのアプリでも分析情報を送ることがあります。第三に感情的な依存：コンパニオンチャットは個人的なものに感じられますが、それは設計上の特徴であり、人間関係ではありません。第四に実データ：住所、健康に関する詳細、他人のプライベートな情報は、ロールプレイのチャットに絶対に入力しないでください。お子さまのiPhoneには、アプリ自身の設定に頼るのではなく、Appleのスクリーンタイムのコンテンツ制限とアプリの年齢制限を使ってください。',
          },
        ],
      },
      smartHome: {
        id: 'smart-home-agents',
        title: 'スマートホームとエージェント',
        content:
          '**iPhoneでは、iOSがモデルやエージェントをバックグラウンドで動かし続けないため、スマートホームAIとエージェントは、ほぼ例外なく自宅サーバー上で動くソフトウェアのクライアントです。** スマホはマイク、画面、リモコンの役割で、長時間動く処理は自宅サーバーが担当します。自律型のローカルエージェントが実用的かどうかの率直な検討については、[自律型ローカルエージェントは本当に使えるのか](/ja/power-local-llm/autonomous-local-agents-actually-work)をご覧ください。',
        items: [
          '[Home Assistant Assist](/ja/power-local-llm/home-assistant-assist-review)：Home Assistantの中の音声アシスタントで、Whisper、Piper、Wyomingで完全にローカルに動き、任意のクラウドとOllamaのLLMエージェントも使えます。制限：単独のアプリではなく、完全なローカルのパイプラインにはHome Assistant OSが必要です。',
          '[Scrypted](/ja/power-local-llm/scrypted-review)：カメラをHomeKit、Google Home、Home Assistantにストリーミングする、オープンソースのカメラ・NVRプラットフォームで、llama.cppによる任意のローカルLLM要約があります。制限：自分のサーバーで動き、他人を映したカメラ映像は、多くの地域で法的な義務を伴います。',
          '[Nekoni](/ja/power-local-llm/nekoni-review)：自分のコンピュータ上で動くセルフホスト型のパーソナルエージェント（Ollama、ドキュメント、スケジュール実行のスキル）で、iPhoneまたはブラウザから、直接の暗号化リンク経由でチャットします。制限：常時稼働のMacまたはLinuxマシンが必要です。',
          '[Kai 9000](/ja/power-local-llm/kai-9000-review)と[LLM Hub](/ja/power-local-llm/llm-hub-review)：それぞれ、永続メモリを持つアシスタントと、MCP対応のエージェントです。制限：ツールの利用とWeb検索はネットワーク呼び出しを伴うため、オフライン機能ではありません。',
          '[Atomic Bot](/ja/power-local-llm/atomic-bot-review)：オープンソースの[OpenClawレビュー](/ja/power-local-llm/openclaw-review)のエージェントフレームワークを、デスクトップとモバイル向けにパッケージ化し、ローカルでもクラウドでも動かせます。制限：このガイドで更新停止のフラグを付けています（最後の更新は2026年5月26日）。',
        ],
      },
      remote: {
        id: 'remote-mode',
        title: 'リモートモード：自分のサーバーのシンクライアントとして使うiPhone',
        content:
          '**iPhoneが、使いたいモデルには小さすぎる場合は、自宅のMacやPCでモデルを動かし、iPhoneを画面として使います。** iPhoneから7B〜70Bのモデルを使うときの、通常のルートです。Ollamaのダウンロードページに載っているのはmacOS、Windows、Linuxだけで、iPhoneアプリはないため、サーバーは別の場所に置きます（当サイトのiPhoneランキング記事に記録しています）。サーバー側については、[Apple Silicon向けローカルLLMガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026)、[MacでのMLX vs Ollama vs llama.cpp](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)、[実行・サーブツール比較](/ja/power-local-llm/local-llm-run-serve-compared)をご覧ください。',
        columns: ['アプリ', '接続先', 'スマホ上でもモデルを動かせるか'],
        rows: [
          {
            'アプリ': '[Reins](/ja/power-local-llm/reins-review)',
            '接続先': 'Ollama、LM Studio、OpenAI互換',
            'スマホ上でもモデルを動かせるか': 'はい、MLXモデル',
          },
          {
            'アプリ': '[Enchanted](/ja/power-local-llm/enchanted-review)',
            '接続先': 'Ollamaのみ',
            'スマホ上でもモデルを動かせるか': 'いいえ',
          },
          {
            'アプリ': '[OpenClient](/ja/power-local-llm/openclient-review)',
            '接続先': 'Ollama、LiteLLM、OpenAI互換',
            'スマホ上でもモデルを動かせるか': 'いいえ',
          },
          {
            'アプリ': '[Chapper](/ja/power-local-llm/chapper-review)',
            '接続先': 'LM Studio、Ollama、llama.cppサーバー',
            'スマホ上でもモデルを動かせるか': 'はい、$4.99のアドオン',
          },
          {
            'アプリ': '[Tina](/ja/power-local-llm/tina-review)',
            '接続先': 'Ollama、llama.cpp、ComfyUI',
            'スマホ上でもモデルを動かせるか': 'はい',
          },
          {
            'アプリ': '[LM Mini](/ja/power-local-llm/lm-mini-review)',
            '接続先': 'LM Studio、Ollama、Jan AI、oMLX',
            'スマホ上でもモデルを動かせるか': 'はい',
          },
          {
            'アプリ': '[Arbiter](/ja/power-local-llm/arbiter-local-ai-chat-review)',
            '接続先': 'LM Studio、Ollama、Arbiter for Mac',
            'スマホ上でもモデルを動かせるか': 'はい',
          },
          {
            'アプリ': '[LocalMind](/ja/power-local-llm/localmind-review)',
            '接続先': 'Ollama、LM Studio、OpenRouter',
            'スマホ上でもモデルを動かせるか': 'はい',
          },
          {
            'アプリ': '[Liquid Apollo](/ja/power-local-llm/liquid-apollo-review)',
            '接続先': 'LM Studio、Ollama、OpenRouter',
            'スマホ上でもモデルを動かせるか': 'はい、LFM2',
          },
          {
            'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
            '接続先': 'Mac上のLM Studio（LM Link）',
            'スマホ上でもモデルを動かせるか': 'はい',
          },
          {
            'アプリ': '[MLXHub](/ja/power-local-llm/mlxhub-review)',
            '接続先': 'Wi-Fi上でモデルを提供（Plus）',
            'スマホ上でもモデルを動かせるか': 'はい',
          },
          {
            'アプリ': '[Nekoni](/ja/power-local-llm/nekoni-review)',
            '接続先': '自分のコンピュータ上のエージェント',
            'スマホ上でもモデルを動かせるか': 'いいえ',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '外出先からは、サーバーへの安全な経路が必要です。Ollamaはデフォルトでは認証を必須とせず、ルーターのポート経由で公開インターネットにさらすべきではないため、Tailscaleのようなプライベートなメッシュ型VPNが一般的な選択肢です。接続する前に、各クライアントのレビューと設定で、HTTPSとAPIキーへの対応を確認してください。',
          },
          {
            type: 'tip',
            text:
              '上のクライアントの中には、スマホ上でモデルを読み込めると述べているものもあり、1つのアプリで完結できます。小型モデルはオフライン、大型モデルは自宅で、という使い分けです。ファイアウォールとオフライン環境の構成については、[ファイアウォール内・オフライン環境でのローカルAI](/ja/power-local-llm/local-ai-behind-firewall-offline-2026)をお読みください。',
          },
        ],
      },
      developers: {
        id: 'developer-paths',
        title:
          '開発者向けの道筋：Core ML、Core AI、MLX Swift、llama.cpp、MLC、ExecuTorch、Foundation Models',
        content:
          '**iPhoneのAI機能を作る開発者は、Appleのモデル、自前のモデル向けのAppleのランタイム、クロスプラットフォームのエンジンのいずれかを選びます。** この選択で、どのスマホ、言語、ストアの規則が適用されるかが決まります。この章は概要の紹介にとどまるため、作り始める前に各プロジェクトのドキュメントを読んでください。',
        items: [
          '**Foundation Modelsフレームワーク：** オンデバイスモデル向けのAppleのネイティブSwift APIで、画像、Visionツール、Dynamic Profiles、そしてLanguage Modelプロトコル経由でクラウドプロバイダに対応します（Apple、WWDC26のiOSガイド）。Apple Intelligence対応のハードウェアが必要です。ドキュメント：[Foundation Models](https://developer.apple.com/documentation/FoundationModels)。',
          '**Core ML：** 変換済みモデルをCPU、GPU、Neural Engineで動かすためのAppleのフレームワークで、ビジョン、音声、小型モデルでは昔からの定番ルートです。[AI CutoutWerk](/ja/power-local-llm/ai-cutoutwerk-review)は、Core MLのセグメンテーションモデルを同梱しています。ドキュメント：[Core ML](https://developer.apple.com/documentation/coreml)。',
          '**Core AI：** AppleがiOS 27で導入した、自前のモデルをデバイスに持ち込むための新しいフレームワークで、ユニファイドメモリとNeural Engineを使い、事前コンパイルに対応します。このガイドのアプリの大半には、まだ新しすぎます。[WWDC26のiOSガイド](https://developer.apple.com/wwdc26/guides/ios/)をご覧ください。',
          '**MLX Swift：** Swift向けのAppleのMLX配列フレームワークで、[Locally AI](/ja/power-local-llm/locally-ai-review)、[fullmoon](/ja/power-local-llm/fullmoon-review)、[MLXHub](/ja/power-local-llm/mlxhub-review)の基盤です。[mlx-swift](https://github.com/ml-explore/mlx-swift)。Python側については[MLX-LM解説](/ja/power-local-llm/mlx-lm-explained)をご覧ください。',
          '**llama.cpp：** Metal対応で、GGUFファイルを動かすC/C++のエンジンで、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と[Pocket AI](/ja/power-local-llm/pocket-ai-review)の基盤です。[llama.cpp](https://github.com/ggml-org/llama.cpp)。',
          '**MLC LLM：** iOSへのデプロイ用ドキュメントとリファレンスアプリ[MLC Chat](/ja/power-local-llm/mlc-chat-review)を備える、コンパイラベースのランタイムです。[MLC LLM](/ja/power-local-llm/mlc-llm-explained)と[MLCのiOSドキュメント](https://llm.mlc.ai/docs/deploy/ios.html)をご覧ください。',
          '**ExecuTorch：** PyTorchのオンデバイス向けランタイムで、[Private Mind](/ja/power-local-llm/private-mind-review)ではReact Native ExecuTorch経由で使われ、[Noema](/ja/power-local-llm/noema-review)も対応しています。[ExecuTorch](https://github.com/pytorch/executorch)。',
          '**LiteRT-LM：** [Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)の基盤となるGoogleのランタイムです（[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)）。',
          '**SDK：** [RunAnywhere](/ja/power-local-llm/runanywhere-review)（LLM、音声認識、音声合成、音声区間検出に対応、商用条件付きの独自ライセンス）、[Llamatik](/ja/power-local-llm/llamatik-review)（Kotlin Multiplatform、MIT）、[SwiftLM](/ja/power-local-llm/swiftlm-review)（Apple silicon搭載Mac向けのSwift MLXサーバーで、iOSコンパニオンアプリSwiftBuddyが付属）。',
          '**TestFlightベータ：** 早期ビルドをテスターに配布する無料の手段です。ビルドには有効期限があるため、計画に入れておいてください。リリースビルドには、AppleのApp Review規則が引き続き適用されます。',
        ],
      },
      privacy: {
        id: 'privacy-telemetry',
        title: 'プライバシーとテレメトリーの実態',
        content:
          '**「デバイス上で動く」と「何も送らない」は別の主張であり、プライバシーの保証になるのは後者だけです。** AppleのApp Storeプライバシーラベルは開発者が記入するため、開発者がアプリの動作として述べていることを表しています。オンデバイスモデルを載せたアプリが、クラッシュレポート、利用イベント、任意のWeb検索、モデルのダウンロードを送ることもあります。ここに書いたアプリ単位のプライバシーに関する記述はすべて、リンク先のレビューが要約している各アプリのプライバシーポリシー、App Storeのラベル、開発元のページに基づいており、ネットワーク解析による検証は行っていません。より詳しいチェックリストは[ローカルLLMのセキュリティとプライバシー チェックリスト](/ja/local-llms/local-llm-security-privacy-checklist)をご覧ください。',
        items: [
          '**「テレメトリーなし」が意味しうること：** アプリに分析SDKがないことです。モデルのダウンロード（ホスト側にリクエストが見える）、App Store、任意のWeb検索、接続するリモートサーバー、アプリのデータを含むバックアップは対象外です。',
          '**当サイトのレビューにあるラベル：** [Oscilla](/ja/power-local-llm/oscilla-review)にはAppleの「データ収集なし」ラベルが付いています。[Google AI Edge Gallery](/ja/power-local-llm/google-ai-edge-gallery-review)のラベルには、一部のデバイス診断情報が示されています。[MemoryAI](/ja/power-local-llm/memoryai-review)と[Llamatik](/ja/power-local-llm/llamatik-review)は、各ポリシーによると、チャットの内容を含まない利用イベントや分析情報、クラッシュレポートを送信します。',
          '**「オフライン」を崩す任意機能：** [Compass - Local AI](/ja/power-local-llm/compass-local-ai-review)のWeb検索（DuckDuckGoまたはBrave）、[Private Mind](/ja/power-local-llm/private-mind-review)のWebトグル、[Secret AI](/ja/power-local-llm/secret-ai-review)のMCPツール、[Liquid Apollo](/ja/power-local-llm/liquid-apollo-review)のOpenRouterモードです。',
          '**デフォルトがクラウド：** [Kai 9000](/ja/power-local-llm/kai-9000-review)は、レビューによると、デフォルトでメッセージをクラウドサービスに送り、オンデバイスモデルをダウンロードして初めてローカルで動きます。[Swerve](/ja/power-local-llm/swerve-ai-review)はオンラインサービスと記載されており、[HiWaifu](/ja/power-local-llm/hiwaifu-review)もそのようです（掲載情報には、モデルがどこで動くかが書かれていません）。[AquaVoice](/ja/power-local-llm/aquavoice-review)はクラウドの音声入力です。',
          '**ポリシーとバージョンのずれ：** [LM Mini](/ja/power-local-llm/lm-mini-review)には、プライバシーポリシーによると、LM Studioとの接続だけを説明する2025年8月付けのバージョンがあり、[Secret AI](/ja/power-local-llm/secret-ai-review)のポリシーの最終更新は、ツールが追加される前の2025年5月です。ポリシーの日付を、アプリのバージョンと照らし合わせてください。',
          '**自分で確認する3つの手順：** (1) Wi-Fiでモデルをダウンロードしたあと、機内モードをオンにしてアプリをテストします。(2) スマホを1週間普通に使ってから、設定 > プライバシーとセキュリティ > App Privacy Reportを開きます。Appleによると、ここでアプリの権限の使い方とネットワークアクティビティが分かります。(3) プライバシーラベルとポリシーで分析の記載を読み、コードを確認したい場合はオープンソースのアプリを選んでください。',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'PromptQuorumのレビューは、各アプリの出典が述べていること、そして当サイトがテストしたかどうかを記載しています。レビューに「実機テストなし」とある場合、プライバシーに関する記述は開発者のものであり、当サイトのものではありません。このガイドでは、どのアプリについてもネットワークキャプチャは実施していません。',
          },
        ],
      },
      batteryThermal: {
        id: 'battery-thermal-memory',
        title: 'バッテリー、発熱、メモリの制限',
        content:
          '**テキストの生成中はチップが働き続けるため、目立つ発熱とバッテリー消費が予想されます。たまに使う程度なら負担は小さいです。** PromptQuorumは、どのiPhoneでも消費電力やバッテリー使用量を測定しておらず、引用できる公開数値も見つかっていません。',
        items: [
          '**発熱：** 生成を続けると、iOSがクロック速度を下げることがあり、1秒あたりのトークン数が落ちます。タイミングは、機種、ケース、充電状況、室温によって変わり、当サイトでは測定していません。',
          '**ガイドライン2.4.2：** Appleは、アプリがバッテリーを急速に消耗させたり、過度の熱を発生させたりしてはならないと開発者に伝えているため、行儀のよいアプリは、長さに上限を設けたり、長い実行を一時停止したりします。',
          '**メモリ：** モデルは、読み込まれている間RAMに置かれます。iOSが別のアプリのためにメモリを必要とすると、チャットアプリが閉じられ、会話の状態が失われることがあります。モデルを読み込む前に、他の重いアプリを閉じてください。',
          '**生成中の充電**は発熱を増やします。スマホが熱く感じたら一時停止し、直射日光や高温になった車内を避けてください。',
          '**ストレージ：** 3〜4Bモデル1つが約2.5〜3.7 GBなので、3つのアプリにそれぞれ3つのモデルを入れると、およそ10 GBを使います。アプリは1つ、モデルは1〜2個にとどめてください。',
          '**低電力モード**では、iOSがバッテリー節約のために性能を下げるため、生成が遅くなることがあります。長時間のセッションでは、オフにしてください。',
        ],
      },
      partly: {
        id: 'works-partly',
        title: '一部しか使えないもの',
        content:
          '**「一部対応」とは、その機能はiPhoneにあるものの、習慣にする前に知っておくべき制限があることを意味します。**',
        items: [
          '**Siriによるハンズフリー音声：** ショートカットでアプリを呼び出せますが、SiriはSiriのままで、ローカルモデルをシステムのアシスタントにはできません。AppleのSiri AIは、別のiOS 27ベータで、EUでは当初利用できません。',
          '**画像生成：** 小型の拡散モデルで可能ですが、遅く、ストレージを多く使い、スマホが熱くなります。[Draw Things](/ja/power-local-llm/draw-things-review)は、任意のクラウドモードも備えています。',
          '**写真検索：** AIの工程は、スマホ上でオプトインする形（[Ente Photos](/ja/power-local-llm/ente-photos-review)）か、自分でホストするサーバー上で動きます（[Immich](/ja/power-local-llm/immich-review)）。',
          '**ノートとブックマーク：** iPhoneアプリはクライアントで、モデルの処理はサーバーか、自分で選ぶプロバイダ上で行われます。',
          '**エージェント：** 短いフォアグラウンドのタスクは動きますが、長時間動くものやスケジュール実行のエージェントには、自宅サーバーが必要です（[Nekoni](/ja/power-local-llm/nekoni-review)）。',
          '**健康に関する質問：** Appleのオンデバイスモデルで可能ですが（[Pajdo](/ja/power-local-llm/pajdo-review)）、医療上の助言の代わりにはなりません。',
          '**長いドキュメント：** 小型モデルはコンテキストウィンドウが小さいため、大きなPDFには分割処理かサーバーが必要です。',
        ],
      },
      notPossible: {
        id: 'not-possible',
        title: 'iPhoneでは不可能、またはまだ不可能なこと',
        content:
          '**これらは、iPhoneのローカルAIに最もよく寄せられる要望で、今日、レビュー済みのiPhoneアプリのどれも実現していないものです。** ハードウェアやApp Storeの規則による厳しい制限もあれば、AppleやアプリメーカーがCore AIなどの新しいフレームワークを出すにつれて、埋まるかもしれない空白もあります。',
        columns: ['要望', '状況', '理由', '代わりの手段'],
        rows: [
          {
            '要望': 'スマホ上で30B〜70Bのモデル',
            '状況': '不可能',
            '理由': 'iPhoneよりはるかに多くのRAMが必要',
            '代わりの手段': '自宅サーバーへのリモートモード',
          },
          {
            '要望': 'クラウド級の推論とコード',
            '状況': 'まだ不可能',
            '理由': '小型モデルは複数手順のタスクで失敗する',
            '代わりの手段': '難しい質問にはクラウドアプリ',
          },
          {
            '要望': 'スマホ上でOllamaやDockerを動かす',
            '状況': '不可能',
            '理由': 'iPhone用のOllamaやDockerのアプリがなく、サンドボックスの制限もある',
            '代わりの手段': 'MacやPCで動かす',
          },
          {
            '要望': '自作モデルでSiriを置き換える',
            '状況': '不可能',
            '理由': 'Siriはシステムが管理している',
            '代わりの手段': 'アプリを呼び出すショートカット',
          },
          {
            '要望': '常時稼働のバックグラウンドエージェント',
            '状況': '不可能',
            '理由': 'バックグラウンドサービスが制限されている（2.5.4）',
            '代わりの手段': '自宅サーバー上のエージェント',
          },
          {
            '要望': 'スマホ上でモデルをファインチューニング',
            '状況': '現実的ではない',
            '理由': 'メモリ、発熱、アプリ側のツールがない',
            '代わりの手段': 'MacやGPUで学習する',
          },
          {
            '要望': 'チャットをMacやiPadに同期',
            '状況': 'ほぼ不可',
            '理由': '多くのアプリで履歴は端末ごと',
            '代わりの手段': 'サーバーのWeb UI（例：Open WebUI）',
          },
          {
            '要望': 'iPhoneでAnythingLLM Mobile',
            '状況': 'まだ不可能',
            '理由': 'レビューによるとiOSアプリは未リリース',
            '代わりの手段': 'ブラウザから自分のサーバーへ',
          },
          {
            '要望': 'iPhone 14でApple Intelligence',
            '状況': '不可能',
            '理由': 'Appleの対応機種一覧にない',
            '代わりの手段': 'サードパーティのモデルアプリ',
          },
          {
            '要望': 'ボーカル入りの音楽生成',
            '状況': 'まだ不可能',
            '理由': 'Murmurが作るのはインストゥルメンタルのみ',
            '代わりの手段': 'デスクトップのツール',
          },
          {
            '要望': 'アプリがプライベートである証明',
            '状況': 'ラベルだけでは不可',
            '理由': 'ラベルは開発者が自己申告したもの',
            '代わりの手段': '機内モードとApp Privacy Report',
          },
        ],
      },
      decision: {
        id: 'decision-path',
        title: '選び方：このiPhoneで、これをしたい',
        content:
          '**機種のティアと目的から自分の行を探し、リンク先の章を開いてください。** 挙げているのは当サイトのレビューに基づく出発点であり、ランキングではありません。メンテナンスの章で更新が止まっているとされたアプリは、他により合うものがない場合にだけ挙げています。',
        columns: ['お持ちの機種', 'やりたいこと', 'まず試すもの'],
        rows: [
          {
            'お持ちの機種': 'RAM 4 GBのiPhone（12、13、SE）',
            'やりたいこと': '一般的なチャット',
            'まず試すもの': 'ReinsまたはEnchantedと自宅サーバー',
          },
          {
            'お持ちの機種': 'RAM 6 GBのiPhone（14、15）',
            'やりたいこと': '無料のオフラインチャット',
            'まず試すもの': 'PocketPal AIと1〜2Bモデル',
          },
          {
            'お持ちの機種': 'RAM 8 GBのiPhone（16、17）',
            'やりたいこと': '無料のオフラインチャット',
            'まず試すもの': 'PocketPal AIまたはLocally AI',
          },
          {
            'お持ちの機種': 'RAM 8 GBのiPhone',
            'やりたいこと': 'Siriとショートカット',
            'まず試すもの': 'Private LLMまたはLocally AI',
          },
          {
            'お持ちの機種': 'RAM 12 GBのiPhone（17 Pro）',
            'やりたいこと': 'スマホ上で最大のモデル',
            'まず試すもの': 'NoemaまたはGemma 4を使うGallery',
          },
          {
            'お持ちの機種': 'Apple Intelligence対応のiPhone',
            'やりたいこと': 'モデルのダウンロードなし',
            'まず試すもの': 'CompassまたはLocally AI（Appleのモデル）',
          },
          {
            'お持ちの機種': 'どのiPhoneでも',
            'やりたいこと': '会議の文字起こし',
            'まず試すもの': 'Whisper NotesまたはLyonesse',
          },
          {
            'お持ちの機種': 'どのiPhoneでも',
            'やりたいこと': '数件のPDFとチャット',
            'まず試すもの': 'Private MindまたはMemoryAI',
          },
          {
            'お持ちの機種': 'どのiPhoneでも',
            'やりたいこと': '翻訳',
            'まず試すもの': 'On-Device AI Translator',
          },
          {
            'お持ちの機種': 'RAM 8 GB以上のiPhone',
            'やりたいこと': 'テキストから画像',
            'まず試すもの': 'Draw Things',
          },
          {
            'お持ちの機種': 'どのiPhoneでも',
            'やりたいこと': '写真検索、自前サーバー',
            'まず試すもの': 'Immich',
          },
          {
            'お持ちの機種': 'どのiPhoneでも、自宅にPCあり',
            'やりたいこと': '7B〜70Bのモデル',
            'まず試すもの': 'Reins、OpenClient、LM Mini',
          },
          {
            'お持ちの機種': 'どのiPhoneでも',
            'やりたいこと': 'スマートホームの音声操作',
            'まず試すもの': 'Home Assistant Assist',
          },
          {
            'お持ちの機種': '10代の子どもが使うiPhone',
            'やりたいこと': '安全なチャット',
            'まず試すもの': 'スクリーンタイムの制限、そのあと安全上の注意を読む',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**RAMティアではなく、ファイルサイズでモデルを選ぶ。** ダウンロードできるファイルでも、iOSに閉じられることがあります。サイズはティア表に合わせ、アプリのベンチマークでテストしてください。',
          '**クラウド並みの品質を期待する。** 下書き、要約、翻訳、簡単な質疑応答には小型モデルを、難しい推論にはクラウドか自宅サーバーのモデルを使ってください。',
          '**「Apple Intelligence」を「オフライン」とみなす。** Apple IntelligenceはPrivate Cloud Computeを使うことがあります。リクエストを何が処理するかを確認してください。',
          '**テストなしでプライバシーラベルを信じる。** プライバシーの章にある、機内モードとApp Privacy Reportの確認を行ってください。',
          '**アプリを全部入れる。** 各アプリが数GBのモデルファイルを個別に持ちます。用途ごとにアプリを1つ選んでください。',
          '**更新が止まったアプリを買う。** 特にメンテナンスの章に出てくるアプリは、バージョン履歴を確認してください。',
          '**自宅サーバーをインターネットに公開する。** プライベートなVPNメッシュを使ってください。Ollamaはデフォルトでは認証を必須としません。',
          '**共有端末や子どものスマホで、ロールプレイアプリを確認せずに放置する。** 先に年齢区分と成人向けコンテンツの設定を読んでください。',
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          'Apple Intelligenceの対応機種、言語、Siri AI、Private Cloud Compute：[Apple Intelligence](https://www.apple.com/apple-intelligence/)（2026年11月13日閲覧）。',
          'App Reviewガイドライン2.4.2、2.5.1、2.5.2、2.5.4、5.1.1、5.1.2：[App Storeレビューガイドライン](https://developer.apple.com/app-store/review/guidelines/)（2026年11月13日閲覧）。',
          'App Privacy Reportの場所と内容：[Appleサポート](https://support.apple.com/en-us/102188)。',
          'エンジン：[MLX Swift](https://github.com/ml-explore/mlx-swift)、[llama.cpp](https://github.com/ggml-org/llama.cpp)、[ExecuTorch](https://github.com/pytorch/executorch)、[MLCのiOSドキュメント](https://llm.mlc.ai/docs/deploy/ios.html)、[Core ML](https://developer.apple.com/documentation/coreml)、[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)。',
          'iPhoneのRAMの数値と目安の速度は、[2026年 iPhone向けベスト・ローカルAIアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026)から再利用したものです。AppleはiPhoneのRAMを公表していません。',
          'アプリごとの事実（価格、プラットフォーム、バージョン、開発元の説明）は、リンク先のPromptQuorumのレビューとディレクトリのタイルに基づきます。更新停止とフラグを付けたアプリの最終更新日は、タイルに基づきます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'iPhoneは完全にオフラインでAIを動かせますか？',
            a:
              'はい、各アプリのストア掲載情報とレビューによると可能です。Wi-Fiで一度モデルをダウンロードすれば、PocketPal AI、Private LLM、Locally AIなどのアプリは、接続なしで回答します。Apple Intelligenceもデバイス上でモデルを動かしますが、大きなリクエストにはPrivate Cloud Computeを使うことがあるため、オフラインが保証されているわけではありません。どのアプリも、機内モードでテストしてください。',
          },
          {
            q: 'ローカルAIには、どのiPhoneが必要ですか？',
            a:
              '1〜2Bの小型モデルにはRAM 6 GB以上、3〜4Bモデルには8 GB以上のiPhoneが必要です。AppleはRAMを公表していないため、このガイドの報じられているティアを参考にしてください。Apple Intelligenceには、Appleの対応機種一覧にあるiPhone 15 Pro以降が必要です。',
          },
          {
            q: 'iPhoneのローカルAIは、本当にプライベートですか？',
            a:
              'チャットをデバイス上に留められますが、プライバシーはアプリ次第です。ラベルは開発者の自己申告で、レビュー済みのアプリのいくつかは、クラッシュレポート、利用イベント、任意のWebリクエストを送信します。機内モードと、設定 > プライバシーとセキュリティ > App Privacy Reportで確認してください。',
          },
          {
            q: 'iPhoneでOllamaを動かせますか？',
            a:
              'いいえ。OllamaのダウンロードはmacOS、Windows、Linux向けで、iPhone用のOllamaやDockerのサーバーはありません。パソコンでOllamaを動かし、Reins、Enchanted、OpenClientなどのiPhoneクライアントから接続してください。',
          },
          {
            q: 'iPhoneで、どれくらい大きなモデルを動かせますか？',
            a:
              'RAM 8 GBのスマホでは、4ビットで約3〜4Bのパラメータ数です。7〜8Bの低ビットモデルは12 GBのスマホに限られ、動作も遅くなります。6 GBのスマホには、1〜2Bモデルが最適です。それより大きなモデルには、自宅サーバーのリモートモードを使ってください。',
          },
          {
            q: 'ローカルAIはバッテリーを消耗しますか？',
            a:
              '生成中は消耗します。生成を続けるとプロセッサが働き続け、アイドル時よりはるかに速くバッテリーが減り、スマホが熱くなることもあります。PromptQuorumは、正確な消耗量を測定していません。たまに質問する程度なら負担は小さく、読み込み済みでも使っていないモデルが使う電力はわずかです。',
          },
          {
            q: 'iPhone向けで最良の無料ローカルAIアプリは何ですか？',
            a:
              '当サイトのランキング記事では、無料でオープンソースのPocketPal AIが定番で、無料の代替としてLocally AIとGoogle AI Edge Galleryがあります。最適なアプリは用途次第なので、このガイドの選び方を使ってください。',
          },
          {
            q: 'Apple Intelligenceは、これらのアプリとどう違いますか？',
            a:
              'Apple Intelligenceは、システム機能と、Foundation Modelsフレームワークを使うアプリのためのAppleの内蔵モデルで、そのモデルは入れ替えられません。このガイドのアプリでは、モデルを自分で選んでダウンロードでき、Locally AIのように、Appleのモデルのフロントエンドにもなれるものがあります。',
          },
          {
            q: 'iPhoneで、オフラインでPDFとチャットできますか？',
            a:
              '数件のファイルなら、各アプリのストア掲載情報とレビューによると可能で、Private Mind、MemoryAI、Noema、LocalMindAIなどのアプリが対応します。小型モデルはコンテキストウィンドウが短いため、長いドキュメントは不完全に要約されることがあります。大きなライブラリには、自宅サーバーを使ってください。',
          },
          {
            q: '外出先から、自宅サーバーを使えますか？',
            a:
              'はい、Tailscaleのようなプライベートなメッシュ型VPNや、別の安全なトンネルと、自分のサーバーに対応するクライアントアプリを通じて可能です。Ollamaを公開インターネットに開放しないでください。デフォルトでは認証を必須としません。',
          },
          {
            q: 'iPhoneで、オフラインで画像を生成できますか？',
            a:
              'はい、各アプリのストア掲載情報とレビューによると、数GBのモデルをダウンロードしたうえで、Draw Things、Genva、Haplo AIなどのアプリで可能です。生成はデスクトップGPUより遅く、スマホが熱くなります。Draw Thingsは、任意のクラウドモードも備えています。',
          },
          {
            q: 'ロールプレイやコンパニオンのアプリは、10代にとって安全ですか？',
            a:
              'デフォルトでは安全とは言えません。18歳以上の区分や成人向けモードを持つものがいくつかあり、会話を保存するクラウドサービスもあり、オンデバイスモデルにはサーバー側のフィルタがありません。Appleのスクリーンタイムとアプリの年齢制限を使い、このガイドの安全上の注意を読んでください。',
          },
          {
            q: 'ローカルAIはiPadでも動きますか？',
            a:
              'ほとんどの場合、動きます。このガイドのアプリの多くはiPad対応を掲げており、同じRAMの考え方が当てはまります。iPad向けの助言は、[タブレットでAIを動かす方法](/ja/power-local-llm/run-ai-on-tablet-ipad-android)をご覧ください。',
          },
          {
            q: 'ローカルAIで、iPhoneとAndroidはどう違いますか？',
            a:
              'iPhoneは始めやすく制約が多く、Androidはターミナルアプリが使えてオープンソースの選択肢も多い一方、機種によってばらつきがあります。[Android向けローカルAIガイド](/ja/power-local-llm/local-ai-on-android-guide)と[Galaxy vs iPhone：オンデバイスAI比較](/ja/local-llms/galaxy-vs-iphone-on-device-ai-2026)で比較してください。',
          },
          {
            q: '古いiPhoneでも、アプリはAppleのモデルを使えますか？',
            a:
              'いいえ。Apple Intelligenceは、iPhone 15 Proから始まるAppleの対応機種一覧のデバイスに限られます。古いiPhoneでは、独自のモデルを同梱するアプリを、RAMの制限の範囲内で使ってください。',
          },
        ],
      },
      related: {
        id: 'related-reading',
        title: '関連する読み物',
        items: [
          '[2026年 iPhone向けベスト・ローカルAIアプリ](/ja/power-local-llm/best-local-llm-apps-iphone-2026)：iPhone向けのおすすめ、目安の速度、RAMガイド。',
          '[Android向けローカルAIガイド](/ja/power-local-llm/local-ai-on-android-guide)：Android向けの姉妹プラットフォームガイド。',
          '[2026年 Android向けベスト・ローカルAIアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026)：Androidアプリのランキング。',
          '[Galaxy vs iPhone：オンデバイスAI比較](/ja/local-llms/galaxy-vs-iphone-on-device-ai-2026)：iPhoneとGalaxyのオンデバイスAIの比較。',
          '[タブレットでAIを動かす方法](/ja/power-local-llm/run-ai-on-tablet-ipad-android)：iPadとAndroidタブレット。',
          '[ベスト・モバイルLLMモデル：Phi-4 Mini、Gemma、SmolLM](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm)：ダウンロードすべき小型モデル。',
          '[モバイル向けローカルLLM](/ja/local-llms/mobile-local-llms)：モバイルのローカルLLMの基礎。',
          '[Appleのオンデバイス AI vs ローカルLLM](/ja/local-llms/apple-on-device-ai-vs-local-llms)：AppleのオンデバイスAIとオープンなローカルモデルの比較。',
          '[スマホでローカル音声アシスタントを作る](/ja/power-local-llm/voice-assistant-local-mobile-offline)：スマホでのオフライン音声。',
          '[チャットアシスタント比較](/ja/power-local-llm/local-llm-chat-assistants-compared)、[音声・オーディオアプリ比較](/ja/power-local-llm/local-llm-voice-audio-compared)、[画像・動画アプリ比較](/ja/power-local-llm/local-llm-images-video-compared)、[ナレッジ・検索アプリ比較](/ja/power-local-llm/local-llm-knowledge-retrieval-compared)：カテゴリ別の比較。',
          '[ローカルAIアプリディレクトリ](/ja/directory)：ディレクトリ掲載のすべてのローカルAIアプリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    last_full_refresh: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'iPhone本地AI 2026：能做什么、不能做什么，以及我们收录的iPhone应用',
    seoTitle: 'iPhone本地AI 2026：能做什么、不能做什么与收录应用',
    intro:
      '较新的iPhone在模型下载完成后可以离线运行实用的语言模型，但只能是小模型：在6-8 GB内存上约为10亿-40亿参数。本指南梳理了iPhone本地AI能做什么、哪些只能部分做到、哪些完全做不到，解释了Apple Intelligence、Foundation Models框架和App Store规则，并把PromptQuorum目录中我们收录的iPhone应用与各自适合的用途对应起来。应用信息来自PromptQuorum的评测，这些评测基于公开资料，除非评测中注明为亲手实测；本指南未重新测试任何应用。',
    metaDescription:
      '2026年iPhone本地AI能做什么、不能做什么：芯片与内存限制、Apple Intelligence、App Store规则，以及按用途整理的我们收录的iPhone应用。',
    heroImage: '/images/local-ai-on-iphone-guide-hero-zh.webp',
    twitterDescription:
      '2026年iPhone本地AI：能力图谱、内存档位、Apple Intelligence、App Store限制、做不到的事项清单，以及按用途整理的我们收录的iPhone应用。',
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
      '希望了解设备端AI能做什么、不能做什么，以及每项任务该装哪款应用的iPhone和iPad用户、注重隐私的用户、经常出行的人和开发者。',
    readTime: '阅读约45分钟',
    educationalLevel: 'Beginner',
    primaryTerm: 'iPhone本地AI',
    targetKeywords: [
      'iphone本地ai',
      '在iphone上离线运行ai',
      'iphone设备端ai',
      'apple intelligence foundation models框架',
      'iphone本地llm应用',
      'iphone内存 llm',
      'iphone上的ollama',
      'iphone离线ai',
      'iphone本地ai能做什么',
    ],
    leadAnswerBlock:
      '**较新的iPhone在一次性下载模型后，可以离线运行小型语言模型（在6-8 GB内存上约10亿-40亿参数），覆盖聊天、摘要、翻译、听写、文档问答和小型图像任务；它无法运行30B以上的模型、无法取代Siri，也无法运行后台智能体。** Apple Intelligence在iPhone 15 Pro及更新机型上提供内置模型，而iPhone上没有Ollama或Docker服务器。',
    quickAnswerTop: {
      zh: {
        question: 'iPhone上的本地AI能做什么？',
        answer:
          '较新的iPhone可以离线运行10亿-40亿参数的模型，用于聊天、摘要、翻译、听写、文档问答和小型图像任务。它无法运行30B以上的模型、无法取代Siri，也无法让智能体在后台持续运行。Apple Intelligence在iPhone 15 Pro及更新机型上提供内置模型。',
        bullets: [
          '6 GB内存：1-2B模型；8 GB：3-4B；12 GB：4B运行从容',
          'Apple Intelligence需要iPhone 15 Pro或更新机型',
          '手机上没有Ollama、Docker或Linux服务器',
          '要用7B-70B模型，请在远程模式下连接家中的服务器',
          '用飞行模式和App隐私报告验证隐私',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      { label: '关键要点', anchor: '#key-takeaways' },
      { label: '从这里开始：先装这三款应用', anchor: '#start-here' },
      { label: '安装前的六个快速解答', anchor: '#quick-answers' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '能力图谱：iPhone本地AI能做什么', anchor: '#capability-map' },
      { label: '芯片与内存的现实：哪款iPhone能运行哪种模型', anchor: '#iphone-hardware' },
      { label: 'Neural Engine、GPU与CPU：究竟是谁在运行模型', anchor: '#chips-engines' },
      { label: '手机档位、应用与模型大小一览', anchor: '#tier-app-model' },
      { label: '15分钟跑起你的第一个本地模型', anchor: '#first-run-15-minutes' },
      { label: 'Apple Intelligence与Foundation Models框架', anchor: '#apple-intelligence' },
      { label: '影响iPhone本地AI的App Store规则', anchor: '#app-store-rules' },
      { label: 'iPhone与安卓相比的优势与不足', anchor: '#iphone-vs-android' },
      { label: '聊天助手：主要的设备端应用', anchor: '#chat-assistants' },
      { label: '聊天助手：较新、小众和混合型应用', anchor: '#chat-more' },
      { label: '久未更新、过时或不在App Store上的应用', anchor: '#chat-quiet-apps' },
      { label: '视觉与相机：就照片和截图提问', anchor: '#vision-camera' },
      { label: '语音：听写、转录、朗读、离线助手与Siri', anchor: '#voice-speech' },
      { label: '手机上的文档、PDF与检索', anchor: '#documents-rag' },
      { label: '设备端翻译', anchor: '#translation' },
      { label: '图像生成与照片编辑', anchor: '#image-generation-editing' },
      { label: '相册与图库搜索', anchor: '#photos-gallery-search' },
      { label: '笔记、知识库与书签', anchor: '#notes-knowledge' },
      { label: '健康与身心状态问题', anchor: '#health-wellness' },
      { label: '角色扮演与陪伴类应用（附内容安全提示）', anchor: '#roleplay-companions' },
      { label: '智能家居与智能体', anchor: '#smart-home-agents' },
      { label: '远程模式：把iPhone当作自己服务器的瘦客户端', anchor: '#remote-mode' },
      {
        label: '开发者路径：Core ML、Core AI、MLX Swift、llama.cpp、MLC、ExecuTorch与Foundation Models',
        anchor: '#developer-paths',
      },
      { label: '隐私与遥测的真实情况', anchor: '#privacy-telemetry' },
      { label: '电池、发热与内存限制', anchor: '#battery-thermal-memory' },
      { label: '只能部分做到的事', anchor: '#works-partly' },
      { label: 'iPhone上做不到或暂时做不到的事', anchor: '#not-possible' },
      { label: '决策路径：我有这款iPhone，想要这个功能', anchor: '#decision-path' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**较新的iPhone在模型下载完成后，无需联网即可运行实用的语言模型。** 现实的上限是6-8 GB内存上的1B-4B参数模型；7B-8B的低比特模型只能放进12 GB的iPhone，而且速度依然很慢。可以期待不错的起草、摘要、翻译和问答，但推理、代码和世界知识会弱于ChatGPT级别的云端模型。',
          '**决定模型大小的是内存，而不是芯片名称。** Apple不公布iPhone的内存；本指南中的数字是广泛流传的规格。4 GB的iPhone低于实际可用的下限，6 GB意味着1-2B模型，8 GB意味着3-4B，12 GB则有更多余量。',
          '**Apple Intelligence与Foundation Models框架是另一条独立的路线。** Apple自家的设备端模型已经内置在手机里（iPhone 15 Pro及更新机型），无需下载，第三方应用也可以调用。它本身并不是通用聊天应用，而且有语言和地区限制。',
          '**App Store设有硬性限制。** 手机上不能用Docker，也不能运行Ollama；应用不得下载会改变其功能的代码（Apple准则2.5.2），所以每个引擎都打包在应用内，只有模型文件需要下载。这就是为什么iPhone本地AI意味着安装一个应用，而不是搭建一套技术栈。',
          '**iPhone用户想要的大部分功能，在我们的目录里都有已点评的应用：** 聊天、相机提问、听写与转录、文档对话、翻译、图像生成、照片搜索、笔记、健康问题、角色扮演、智能家居控制，以及远程访问家中服务器。本指南把我们目录中的大多数iPhone应用与其适合的能力对应了起来。',
          '**有几件事做不到，或只能部分做到：** 30B以上的模型、前沿水平的推理、常驻的后台智能体、用自己的模型取代Siri、在手机上微调，以及仅凭App Store标签就能保证隐私。',
          '**“零遥测”需要核实，而不是轻信。** 一些声称把聊天保留在设备上的应用，仍会发送崩溃报告、使用事件或可选的网络请求；隐私一章介绍了如何用飞行模式和App隐私报告来验证。',
          '**从小处开始：** 安装一个应用，在Wi-Fi下下载一个1-2 GB的模型，切换到飞行模式再提一个问题。如果可行，你就在15分钟内验证了整条离线链路。',
        ],
      },
      startHere: {
        id: 'start-here',
        title: '从这里开始：先装这三款应用',
        content: [
          '**时间紧？从这三款中装一款，下载一个与你iPhone内存相符的模型，并在飞行模式下测试一次。** 这些推荐来自本指南的各章和评测，而非基准测试；指南的其余部分会解释每个选择。',
          '**其他不错的起点：** 12 GB的iPhone可以试试[Noema](/zh/power-local-llm/noema-review)或[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)搭配Gemma 4模型；4 GB的iPhone请使用[Reins](/zh/power-local-llm/reins-review)或[Enchanted](/zh/power-local-llm/enchanted-review)（在维护章节中被标为更新缓慢）连接家中服务器，因为这一档低于设备端聊天的实际下限。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '新手可以从PocketPal AI开始，进阶用户用Locally AI和Apple自带的模型，开发者用Foundation Models框架或MLX Swift；无论哪种情况，模型大小都取决于iPhone的内存。',
          },
          {
            type: 'plain-terms',
            text: '一款应用，一个与内存相符的模型，一次飞行模式测试。',
          },
        ],
        itemHeadings: true,
        columns: ['你的水平', '安装或使用', '第一个模型', '为何这样选'],
        rows: [
          {
            '你的水平': '新手',
            '安装或使用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '第一个模型': '6 GB选1-2B；8 GB选3-4B',
            '为何这样选': '免费且开源，本指南的首次运行演示就用它。',
          },
          {
            '你的水平': '进阶',
            '安装或使用': '[Locally AI](/zh/power-local-llm/locally-ai-review)',
            '第一个模型': '8 GB选3-4B，或Apple自带模型（无需下载）',
            '为何这样选': '适合在8 GB的iPhone上配合Siri和Shortcuts使用，在支持Apple Intelligence的iPhone上还能使用Apple的设备端模型。',
          },
          {
            '你的水平': '开发者',
            '安装或使用': 'Foundation Models框架或MLX Swift',
            '第一个模型': 'Apple的设备端模型，或你自己的模型',
            '为何这样选': 'Foundation Models是Apple原生的Swift API，需要支持Apple Intelligence的硬件；MLX Swift运行你自己的模型。其余内容见“开发者路径”一章。',
          },
        ],
      },
      quickAnswers: {
        id: 'quick-answers',
        title: '安装前的六个快速解答',
        content:
          '**这是读者最先问的六个问题；每个解答都指向解释它的章节。**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '内存决定模型大小，3-5 GB的可用存储能放下第一个模型，飞行模式测试能看出应用是否可离线使用。',
          },
          {
            type: 'plain-terms',
            text: '内存定模型，存储放模型，飞行模式来验证。',
          },
        ],
        items: [
          '**该下载哪个模型？** 按内存来选：6 GB选1-2B，8 GB选3-4B，12 GB余量更大，但7-8B模型依然很慢。4 GB的iPhone低于实际下限。参见“手机档位、应用与模型大小一览”。',
          '**需要多少存储空间？** 先腾出3-5 GB，因为一个模型文件有1-4 GB；一次只装一款应用，因为重复的模型文件会很快占满存储。参见“15分钟跑起你的第一个本地模型”。',
          '**运行速度如何？** PromptQuorum没有为本指南在任何iPhone上测过速度，我们iPhone汇总文章中的参考速度也不是新的测量结果。模型越小，响应越快；请在最初几个测试问题上记下速度，并查看应用设置里是否显示每秒token数。',
          '**哪款应用是私密的？** 不能仅凭App Store标签就认定某款应用私密，因为“在你的设备上运行”和“什么都不发送”是两种不同的说法。请阅读隐私标签和政策，做一次飞行模式测试，之后再查看设置 > 隐私与安全性 > App隐私报告；像PocketPal AI这样的开源应用可供检查。参见“隐私与遥测的真实情况”。',
          '**没有网络能做什么？** 根据本指南的能力图谱，较新的iPhone在模型下载完成后，可以离线处理聊天、相机提问、听写与转录、文档聊天和翻译；30B以上的模型、前沿水平的推理和常驻的后台智能体则做不到。参见“能力图谱”。',
          '**接下来读什么？** 先看“15分钟跑起你的第一个本地模型”，如果有具体任务，再用“决策路径”。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**范围：** 以iPhone为主，同样的应用能运行的iPad也包括在内。安卓部分见姊妹指南[安卓本地AI指南](/zh/power-local-llm/local-ai-on-android-guide)。',
          '**支持Apple Intelligence的iPhone（Apple的名单）：** iPhone 15 Pro和15 Pro Max，包括16e在内的iPhone 16系列，包括17e和Air在内的iPhone 17系列，以及2026年的iPhone 18 Pro、18 Pro Max和iPhone Duo。iPhone 15和更早的非Pro机型不在名单上。',
          '**本指南使用的内存档位（为报道所称，并非Apple公布）：** 4 GB（iPhone 12、13、SE），6 GB（iPhone 13 Pro、14、14 Pro、15），8 GB（iPhone 15 Pro、16系列、16e、17），12 GB（iPhone 17 Pro和Pro Max）。',
          '**能放得下的模型大小：** 1.7B模型在4比特下约1.1 GB，3-4B模型约2.5-3.7 GB；参考速度来自我们的iPhone应用盘点，并非新的测量结果。',
          '**iPhone应用内的引擎：** llama.cpp（GGUF）、Apple MLX、MLC LLM、Google LiteRT-LM、ExecuTorch、Core ML、Apple Foundation Models；少数应用同时整合了多种。',
          '**本指南链接的应用：** 我们目录中有PromptQuorum评测的iOS和iPadOS应用，以及自托管工具的iPhone配套应用。',
          '**PromptQuorum没有做的事：** 本指南没有重新测试这些应用。信息来自我们的评测、应用商店页面、开发者网站和Apple文档，每篇评测都会说明它测试了什么。',
        ],
      },
      whatIsPossible: {
        id: 'capability-map',
        title: '能力图谱：iPhone本地AI能做什么',
        content:
          '**iPhone本地AI能覆盖大多数日常语言任务和若干媒体任务，但并非云端助手能做的一切。** 下表把每项能力归入“可用”“部分可用”或“暂不可用”，后面的章节会点名对应的应用。“可用”指某款已点评的iPhone应用在手机上用设备端模型完成该任务；“部分可用”指能做到，但在大小、速度、准确度或硬件上有限制；“暂不可用”指没有已点评的iPhone应用能在设备上完成。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'iPhone本地AI可以在设备上完成聊天、起草、摘要、翻译、听写、文档问答和小型图像任务，照片搜索、图像生成和智能体只能部分做到，目前还无法运行大模型或取代Siri。',
          },
          {
            type: 'plain-terms',
            text:
              '可以把iPhone想象成一个装着小而私密的大脑的口袋助手。它能回答简单问题、改写文字、转录语音、描述照片，而不必把任何内容发送出去；但它不知道更大的云端模型所掌握的一些事实，长回答会变慢，而且会发热。遇到难题时，很多人会把手机和家里的电脑或云端应用搭配使用。',
          },
        ],
        columns: ['能力', '在iPhone上', '典型配置', '章节'],
        rows: [
          { '能力': '聊天、起草、摘要', '在iPhone上': '可用', '典型配置': '1-4B模型，GGUF或MLX', '章节': '聊天助手' },
          { '能力': '就照片或截图提问', '在iPhone上': '可用', '典型配置': '小型视觉模型或OCR', '章节': '视觉与相机' },
          { '能力': '听写与转录', '在iPhone上': '可用', '典型配置': 'Whisper或Parakeet', '章节': '语音' },
          { '能力': '朗读（文字转语音）', '在iPhone上': '可用', '典型配置': '系统语音或设备端TTS', '章节': '语音' },
          { '能力': '搭配Siri的免提助手', '在iPhone上': '部分可用', '典型配置': 'Shortcuts，不能取代Siri', '章节': '语音' },
          { '能力': '与你的PDF和笔记对话', '在iPhone上': '可用', '典型配置': '小模型加本地索引', '章节': '文档与RAG' },
          { '能力': '翻译', '在iPhone上': '可用', '典型配置': '针对翻译调优的小模型', '章节': '翻译' },
          { '能力': '图像生成', '在iPhone上': '部分可用', '典型配置': '小型扩散模型，速度慢', '章节': '图像生成' },
          { '能力': '照片编辑（抠图、修图）', '在iPhone上': '可用', '典型配置': 'Core ML分割模型', '章节': '图像生成' },
          { '能力': '相册中的AI搜索', '在iPhone上': '部分可用', '典型配置': '设备端索引或自有服务器', '章节': '照片与图库' },
          { '能力': '带AI的笔记和书签', '在iPhone上': '部分可用', '典型配置': 'AI往往运行在服务器上', '章节': '笔记与知识库' },
          { '能力': '健康数据提问', '在iPhone上': '部分可用', '典型配置': 'Apple Intelligence，非医疗用途', '章节': '健康与身心状态' },
          { '能力': '角色扮演与陪伴', '在iPhone上': '可用', '典型配置': '小型聊天模型，也有云端版本', '章节': '角色扮演与陪伴' },
          { '能力': '智能家居控制', '在iPhone上': '部分可用', '典型配置': '由家中服务器完成工作', '章节': '智能家居与智能体' },
          { '能力': '常驻的自主智能体', '在iPhone上': '暂不可用', '典型配置': 'iOS限制后台运行', '章节': '做不到的事' },
          { '能力': '运行30B以上模型', '在iPhone上': '暂不可用', '典型配置': '远程使用家中服务器', '章节': '远程模式' },
          { '能力': '在手机上微调模型', '在iPhone上': '暂不可用', '典型配置': '在Mac或GPU上训练', '章节': '开发者路径' },
        ],
      },
      hardware: {
        id: 'iphone-hardware',
        title: '芯片与内存的现实：哪款iPhone能运行哪种模型',
        content:
          '**内存决定iPhone能容纳的最大模型，芯片决定它回答得有多快。** 语言模型在生成时必须驻留在内存中，所以一个4比特的3B模型（磁盘上约2-2.7 GB）除了iOS和其他应用占用的部分外，大约还需要同样多的可用内存。当应用申请的内存过多时，iOS会将其关闭；而Apple不公布iPhone的内存，因此下面的数字是广泛流传的规格（也用于我们的[2026年iPhone最佳本地AI应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026)），而不是Apple的官方说法。',
        columns: ['iPhone档位', '内存（报道所称）', '现实的模型大小', '结论'],
        rows: [
          { 'iPhone档位': 'iPhone 12、13、SE', '内存（报道所称）': '4 GB', '现实的模型大小': '1B以下，甚至不行', '结论': '改用远程模式' },
          { 'iPhone档位': 'iPhone 13 Pro、14、14 Pro、15', '内存（报道所称）': '6 GB', '现实的模型大小': '1-2B（文件约1.1 GB）', '结论': '基础聊天和起草' },
          { 'iPhone档位': 'iPhone 15 Pro、16、16e、17', '内存（报道所称）': '8 GB', '现实的模型大小': '3-4B（约2.5-3.7 GB）', '结论': '典型的3-4B档' },
          { 'iPhone档位': 'iPhone 17 Pro、17 Pro Max', '内存（报道所称）': '12 GB', '现实的模型大小': '4B从容，7-8B低比特', '结论': '最高内存档' },
          { 'iPhone档位': 'iPhone 18 Pro、Pro Max、Duo', '内存（报道所称）': '未公布', '现实的模型大小': '在得到确认前按12 GB对待', '结论': 'PromptQuorum没有相关数据' },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '名义上放得下的模型，在你切换应用时仍可能被iOS终止。在6 GB的iPhone上，即使3-4B的文件能顺利下载，也请坚持使用1-2B模型；Apple自己的iPhone页面没有给出内存数字，因此这张档位表只是参考，而非保证。',
          },
        ],
      },
      hardwareChips: {
        id: 'chips-engines',
        title: 'Neural Engine、GPU与CPU：究竟是谁在运行模型',
        content:
          '**iPhone有三个地方可以运行模型，具体用哪一个取决于应用的引擎，而不是手机。** CPU灵活但慢；GPU（通过Apple的Metal图形API调用）负责大多数聊天应用所依赖的大规模矩阵运算；Neural Engine是固定功能的加速器，Apple的Core ML和较新的Core AI框架可以调用它。Apple将Core AI描述为专为Apple芯片打造，利用统一内存和Neural Engine；它是iOS 27这一代新推出的，因此本指南中的大多数应用尚未使用。',
        items: [
          '**llama.cpp应用（GGUF文件）：** [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)、[Pocket AI](/zh/power-local-llm/pocket-ai-review)和[LLM Farm](/zh/power-local-llm/llm-farm-review)在GPU上使用Metal。支持任意GGUF文件，因此来自Hugging Face的模型可以使用。',
          '**Apple MLX应用：** [Locally AI](/zh/power-local-llm/locally-ai-review)、[fullmoon](/zh/power-local-llm/fullmoon-review)和[MLXHub](/zh/power-local-llm/mlxhub-review)使用Apple的MLX数组框架，该框架是为Apple芯片上的统一内存而设计的。',
          '**多格式应用：** [Noema](/zh/power-local-llm/noema-review)在一个应用里支持GGUF、MLX、ExecuTorch、Core ML和Apple Foundation Models，因此它的硬件使用方式会随模型格式而变化（评测中的开发者说法）。',
          '**编译型模型应用：** [MLC Chat](/zh/power-local-llm/mlc-chat-review)运行由MLC LLM工具链编译的模型；[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)使用Google的LiteRT-LM运行时。',
          '**Apple自己的模型：** Apple Intelligence通过系统框架运行Apple的模型。[Compass - Local AI](/zh/power-local-llm/compass-local-ai-review)和[Pajdo](/zh/power-local-llm/pajdo-review)等应用直接调用它，而不是自带模型。',
          '**实际后果：** 在同一台iPhone上运行相同大小模型的两个应用，在速度、内存占用和发热上可能不同。在删除已下载的模型之前，请先在两个应用里运行同一条提示词。',
        ],
      },
      tierTable: {
        id: 'tier-app-model',
        title: '手机档位、应用与模型大小一览',
        content:
          '**先按内存档位选，再按需求选。** 下表根据我们的评测和盘点给出一个起点，并非基准测试。模型更新很快，当前的小模型推荐请查看[最佳移动端LLM模型：Phi-4 Mini、Gemma与SmolLM对比](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm)。',
        columns: ['手机档位', '从这里开始', '模型大小', '备注'],
        rows: [
          { '手机档位': '4 GB iPhone', '从这里开始': '连接家中服务器的远程客户端', '模型大小': '手机上无', '备注': 'Reins、Enchanted、OpenClient' },
          { '手机档位': '6 GB iPhone', '从这里开始': 'PocketPal AI或Locally AI', '模型大小': '1-2B（约1.1 GB）', '备注': '最小的模型' },
          { '手机档位': '8 GB iPhone', '从这里开始': 'PocketPal AI、Private LLM、Gallery', '模型大小': '3-4B（2.5-3.7 GB）', '备注': '中档' },
          { '手机档位': '12 GB iPhone', '从这里开始': 'Noema或Locally AI', '模型大小': '4B，或7-8B（较慢）', '备注': '可容纳更长的上下文' },
          { '手机档位': '支持Apple Intelligence的手机', '从这里开始': 'Compass或Locally AI', '模型大小': 'Apple模型，无需下载', '备注': '有语言限制' },
          { '手机档位': '任何手机，听写', '从这里开始': 'Whisper Notes或Aiko', '模型大小': 'Whisper级，小型', '备注': '一次性付费' },
          { '手机档位': '任何手机，文档', '从这里开始': 'Private Mind或MemoryAI', '模型大小': '小型聊天模型加索引', '备注': '留意文件限制' },
        ],
      },
      firstRun: {
        id: 'first-run-15-minutes',
        title: '15分钟跑起你的第一个本地模型',
        content:
          '**你可以在大约15分钟内验证iPhone上的整条离线链路：安装一个应用，在Wi-Fi下下载一个小模型，开启飞行模式，然后提一个问题。** 这些步骤以[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)为例，因为它免费且开源，但后面章节里的任何聊天应用用法都一样。时间估计取决于你的网络和手机。',
        numberedItems: [
          {
            title: '第0-2分钟：确认你的iPhone档位',
            whyItMatters:
              '在上面的内存表里查找你的机型。6 GB意味着1-2B模型，8 GB意味着3-4B，12 GB则有余量。先腾出3-5 GB存储空间，因为一个模型文件有1-4 GB。',
          },
          {
            title: '第2-4分钟：安装一个应用',
            whyItMatters:
              '从App Store安装一个应用，例如PocketPal AI、Locally AI或Google AI Edge Gallery。不要装三个应用、各配三个模型；重复的模型文件会很快占满存储。',
          },
          {
            title: '第4-9分钟：在Wi-Fi下下载一个模型',
            whyItMatters:
              '按你的档位选择大小，例如6 GB机型选Qwen3 1.7B级别的模型，8 GB机型选Phi-4 Mini或Gemma 4 E2B（见按档位选模型）。下载是唯一需要联网的步骤。下载完成前请保持应用打开、屏幕常亮。',
          },
          {
            title: '第9-10分钟：开启飞行模式',
            whyItMatters:
              '打开飞行模式并保持Wi-Fi关闭。这能证明模型在手机上运行，也能看出应用是否试图连接互联网。',
          },
          {
            title: '第10-13分钟：提三个测试问题',
            whyItMatters:
              '让它为你粘贴的一段文字写三条要点摘要，用另一种语气改写一封邮件，再问一个你知道答案的事实性问题。留意速度，以及手机是否发热。',
          },
          {
            title: '第13-15分钟：检查设置并清理',
            whyItMatters:
              '如果应用有基准测试或设置页面，打开看看，记下每秒token数，然后稍后到设置 > 隐私与安全性 > App隐私报告中查看该应用联系过哪些域名。删除你不会再用的模型。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '如果应用在第一次回答时崩溃或重启，说明模型对这台手机来说太大了。请删除它，换成再小一档的模型，而不是去调低其他设置。',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence与Foundation Models框架',
        content:
          '**Apple Intelligence为每台受支持的iPhone提供一个无需下载的内置语言模型，而Foundation Models框架让第三方应用可以使用它。** Apple的开发者页面把该框架描述为原生Swift API，可以直接访问驱动Apple Intelligence的同一个设备端模型。它只能在Apple Intelligence支持的设备和语言上使用。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Apple Intelligence在iPhone 15 Pro及更新机型上运行Apple自己的设备端模型，Foundation Models框架让Locally AI、Compass和Pajdo等第三方应用无需自带模型就能使用它。',
          },
          {
            type: 'plain-terms',
            text:
              'Apple已经在iPhone里放了一个小型语言模型。你不需要下载它，但也无法把它换成别的模型。应用可以借用它在设备上回答问题，这就是为什么好几款新应用需要较新的iPhone和较新的iOS，而不是下载一个大模型。',
          },
        ],
        items: [
          '**设备名单（Apple的Apple Intelligence页面）：** iPhone 15 Pro和Pro Max（A17 Pro），iPhone 16、16 Plus、16e和16 Pro系列（A18和A18 Pro），iPhone 17、17e、17 Pro、17 Pro Max和Air（A19和A19 Pro），以及iPhone Duo、18 Pro和18 Pro Max（A20 Pro）。',
          '**语言：** Apple Intelligence要求Siri和设备语言设置为受支持的语言。Apple的名单包括中文（简体和繁体）、丹麦语、荷兰语、英语、法语、德语、意大利语、日语、韩语、挪威语、葡萄牙语、西班牙语、瑞典语、土耳其语和越南语。Apple补充说，部分功能可能并非在所有地区或语言中都可用。',
          '**Siri AI（iOS 27测试版）：** Apple列出的起步语言为英语、法语、日语、韩语、葡萄牙语和西班牙语，并表示在iOS上初期不会在欧盟提供，还表示部分服务器端功能设有每日使用上限。它与本指南中的设备端聊天应用是两回事。',
          '**框架提供什么（Apple，iOS 27指南）：** 可访问Apple Foundation Models，并通过Language Model协议访问Claude和Gemini等云端模型或任何符合该协议的提供方；可同时传入图像和文字的多模态提示；模型可在设备上调用的Vision工具，如OCR和条码识别；以及用于在同一会话中切换模型、工具和指令的Dynamic Profiles。',
          '**iOS 26基线（本次更新未重新核实）：** 该框架最早随iOS 26发布。在围绕它做设计之前，请查阅Apple当前的文档，了解上下文限制和支持的功能。',
          '**Private Cloud Compute：** Apple Intelligence可以把较大的请求交给Apple的服务器处理。Apple表示数据不会被存储，仅用于你的请求。这不是设备端处理，因此请把“Apple Intelligence”和“离线”视为两种不同的说法。',
          '**本指南中使用Apple模型的应用：** [Locally AI](/zh/power-local-llm/locally-ai-review)（聊天前端）、[Compass - Local AI](/zh/power-local-llm/compass-local-ai-review)（聊天和截图OCR）、[Pajdo](/zh/power-local-llm/pajdo-review)（Apple健康问题）、[LocalMindAI](/zh/power-local-llm/localmindai-review)（Apple的模型或下载的模型）、[Noema](/zh/power-local-llm/noema-review)和[Reins](/zh/power-local-llm/reins-review)（Apple Foundation Models作为其中一个后端）、[Hillnote](/zh/power-local-llm/hillnote-review)（笔记），以及[AI on Device](/zh/power-local-llm/ai-on-device-review)——它自带一个3B模型，但要求设备兼容Apple Intelligence。',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '如果你只想要改写、通知摘要，以及邮件、信息和备忘录里的写作工具，就不需要聊天应用。如果你想要聊天窗口、模型选择或文档问答，请安装本指南中的某个应用；关于Apple模型与开放模型的取舍，见[Apple设备端AI与本地LLM对比](/zh/local-llms/apple-on-device-ai-vs-local-llms)。',
          },
        ],
      },
      appStoreRules: {
        id: 'app-store-rules',
        title: '影响iPhone本地AI的App Store规则',
        content:
          '**App Store解释了iPhone与桌面本地AI之间的大部分差异。** Apple的App审核准则适用于每一款应用，其中有四条在这里很重要：自包含应用、功耗、后台服务和数据共享。本章引用规则文本并给出我们的解读；这不是法律意见，而且Apple可能更改规则。',
        items: [
          '**不得下载会改变应用的代码（准则2.5.2）。** Apple的原文大意是：应用“不得下载、安装或执行会引入或更改应用功能的代码”。本地AI应用把引擎打包在应用内、只下载属于数据的模型权重，从而遵守这条规则。这是我们的解读，不是Apple的声明。',
          '**手机上没有Ollama服务器。** Ollama没有提供iPhone应用，而App Store的沙盒也让人几乎没有可行的办法去运行Ollama服务器或Docker容器。存在一些沙盒化的shell应用，但它们无法提供本地模型服务器。',
          '**只能使用公开API（准则2.5.1）。** 应用只能使用公开API，这就是为什么Foundation Models、Core ML、Metal和MLX是可用的路径，而私有的Neural Engine访问则不可用。',
          '**功耗与发热（准则2.4.2）。** Apple表示（译文）应用“不应快速耗电、产生过多热量或对设备资源造成不必要的负担”。持续生成正好考验这条线，这也是应用会降速或中止长时间运行的原因。',
          '**后台使用受限（准则2.5.4）。** 多任务应用只能出于音频播放、位置、任务完成和本地通知等预期用途使用后台服务。一旦你离开应用，模型就无法无限期地继续生成或充当智能体；[Reins](/zh/power-local-llm/reins-review)指出后台生成需要iOS 26。',
          '**内存限制。** iOS会限制前台应用可使用的内存量。Apple发布了开发者可申请的增加内存限制权限（com.apple.developer.kernel.increased-memory-limit）；我们没有给出确切的额度。你无法看出某个应用是否拥有该权限，因此在依赖某个模型之前，请先用应用自带的基准测试试一试。',
          '**JIT与运行时编译。** 桌面引擎常常在运行时编译代码；iOS应用则改为提前编译好引擎再发布。这是一般的平台行为，若干引擎项目都提到过，也是iPhone引擎在功能上落后于桌面引擎的原因之一。',
          '**数据共享（准则5.1.1和5.1.2）。** 应用必须链接隐私政策、说明收集了哪些数据，并在与第三方共享个人数据（“包括与第三方AI共享”，译文）之前获得许可，且未经同意不得挪作他用。App Store的隐私标签由开发者填写，隐私一章会再谈到这一点。',
          '**侧载与替代应用市场。** 在欧盟，依据《数字市场法》存在替代应用市场，但每位开发者自行决定在哪里发布。本指南中没有应用需要它；[LLM Farm](/zh/power-local-llm/llm-farm-review)是例外，目前必须在Xcode中从源码构建。',
          '**TestFlight测试版。** 一些开发者提供TestFlight版本（例如提供免费试用的[Aiko](/zh/power-local-llm/aiko-review)和提供较新构建的[fullmoon](/zh/power-local-llm/fullmoon-review)）。TestFlight版本有时间限制且尚未完成；请用于测试，而不要用于你不能丢失的数据。',
        ],
      },
      iphoneVsAndroid: {
        id: 'iphone-vs-android',
        title: 'iPhone与安卓相比的优势与不足',
        content:
          '**iPhone更容易上手，但扩展受限更多；安卓则相反。** iPhone的配置种类少且已知，自带Apple的模型，所有应用都通过同一个商店安装。安卓手机在内存和芯片上差异大得多，允许终端应用和侧载，并有自己的设备端模型体系。这是一份基于公开信息的平台对比；逐款硬件的数据请见[Galaxy与iPhone设备端AI对比](/zh/local-llms/galaxy-vs-iphone-on-device-ai-2026)和姊妹篇[安卓本地AI指南](/zh/power-local-llm/local-ai-on-android-guide)。',
        columns: ['主题', 'iPhone', '安卓'],
        rows: [
          { '主题': '安装难度', 'iPhone': 'App Store，一键安装', '安卓': 'Play商店或APK' },
          { '主题': '内置模型', 'iPhone': 'Apple Foundation Models', '安卓': '厂商和Google的模型' },
          { '主题': '在手机上运行Ollama', 'iPhone': 'iPhone没有Ollama应用', '安卓': '可通过Termux实现（见指南）' },
          { '主题': '内存上限', 'iPhone': 'Pro机型约12 GB', '安卓': '各不相同；请逐款查看' },
          { '主题': '模型格式', 'iPhone': 'GGUF、MLX、Core ML、LiteRT', '安卓': 'GGUF、LiteRT、MLC等' },
          { '主题': '快捷操作与自动化', 'iPhone': 'Shortcuts、App Intents', '安卓': 'Tasker和intents' },
          { '主题': '应用数量', 'iPhone': '开源选择较少', '安卓': '开源选择更多' },
          { '主题': '后台运行', 'iPhone': '严格受限', '安卓': '较宽松，但仍受限' },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '本指南中的许多应用也能在安卓上运行（[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)、[MLC Chat](/zh/power-local-llm/mlc-chat-review)、[KernelAI](/zh/power-local-llm/kernelai-review)、[LLM Hub](/zh/power-local-llm/llm-hub-review)），所以两种平台并用的家庭常常可以在各自手机上使用同一个应用。安卓方面的细节请对照[2026年安卓最佳本地AI应用](/zh/power-local-llm/best-local-llm-apps-android-2026)。',
          },
        ],
      },
      chatMain: {
        id: 'chat-assistants',
        title: '聊天助手：主要的设备端应用',
        content:
          '**要在iPhone上进行通用聊天，请先从我们的iPhone盘点所比较的五款应用中选一款，再去看下面较新的应用。** 每一行都写明了应用的功能和它的真实局限。详细信息来自所链接的PromptQuorum评测、应用商店页面和开发者页面；除非评测说明它测试过该应用，否则请把速度和质量视为未经测量。排名推荐和参考速度见[2026年iPhone最佳本地AI应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026)，整个聊天类别见[聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared)。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'PocketPal AI是免费的默认之选，Private LLM是付费的Siri与Shortcuts方案，Locally AI是带Apple Foundation Models的免费MLX应用，Google AI Edge Gallery是适用于iPhone的免费Gemma 4应用。',
          },
          {
            type: 'plain-terms',
            text:
              '选一个聊天应用，下载一个适合你iPhone的模型，把本指南中的其余应用留给文档、语音或家中服务器等特殊用途。价格来自所链接的评测和应用商店页面，可能会变；购买前请查看应用商店。',
          },
        ],
        items: [
          '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)：免费、开源（MIT），可运行来自Hugging Face的任意GGUF模型，并内置基准测试。局限：独立的聊天应用，未提及Shortcuts或Siri操作；高级预设有可选的应用内购买。',
          '[Private LLM](/zh/power-local-llm/private-llm-review)：iPhone、iPad和Mac通用，一次性付费$4.99，140多个模型，无需账户。开发者称它可接入Siri和Shortcuts。局限：闭源且模型列表经过精选，因此无法加载任意文件。',
          '[Locally AI](/zh/power-local-llm/locally-ai-review)：免费，出自LM Studio团队，基于Apple MLX构建，带Shortcuts操作，可选用Apple Foundation Models聊天，还可选择连接Mac上的LM Studio。局限：不能导入任意GGUF，闭源，需要iOS 18.1或更新版本。',
          '[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)：Google的免费Gemma 4应用，带思考模式、智能体技能以及图像和音频输入。局限：仅支持LiteRT-LM模型，标注为实验性测试版，其App Store隐私标签显示会收集一些设备诊断信息。',
          '[Noema](/zh/power-local-llm/noema-review)：免费，在一个应用中运行GGUF、MLX、ExecuTorch、Core ML和Apple Foundation Models，带设备端文档对话。局限：闭源，未公布最低内存要求，需要iOS或iPadOS 18或更新版本。',
          '[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)：免费、开源（MIT）应用，在设备上提供GGUF聊天、Stable Diffusion图像模型和Whisper语音转文字，支持iOS、Android、macOS和Windows。局限：一个应用承担多种任务，意味着更多存储和更多设置。',
          '[Pocket AI](/zh/power-local-llm/pocket-ai-review)：免费，采用带Metal的llama.cpp，涵盖Qwen、Gemma、Llama、Mistral、Phi和DeepSeek系列的28个模型（据开发者称），需要iPhone 12或更新机型。局限：设备端Whisper语音输入需要付费的Pro解锁。',
          '[KernelAI](/zh/power-local-llm/kernelai-review)：免费，53个可下载的开放模型，大小从112 MB到3.11 GB，据其页面介绍带文档、视觉和Shortcuts功能。局限：闭源，且我们的评测依据公开资料，而非亲手实测。',
          '[On Device AI](/zh/power-local-llm/on-device-ai-review)：200多个可下载的GGUF和MLX模型，外加转录、文档和RSS导入、设备端文字转语音以及自动化接口。局限：闭源应用中功能列表很广；请阅读其隐私部分。',
          '[Enclave AI](/zh/power-local-llm/enclave-ai-review)：免费，含应用内购买，据其页面介绍可在iPhone、iPad和Mac上离线使用，无需账户，据我们的盘点带文档交互和Shortcuts。局限：闭源且有付费档位。',
        ],
      },
      chatMore: {
        id: 'chat-more',
        title: '聊天助手：较新、小众和混合型应用',
        content:
          '**这些应用满足的是更窄的需求：一次性付费的聊天、仅使用Apple模型的聊天、人设、开源隐私项目，以及混合设备端与云端的混合型应用。** 请特别留意混合型应用的警告，因为只有停留在其设备端模式时，混合型应用才算本地运行。',
        items: [
          '[Cloak: Local AI](/zh/power-local-llm/cloak-local-ai-review)：一次性付费（美国商店$1.99），下载一个推荐模型，在iPhone上增加语音备忘录，以及由照片、位置和语音备忘录生成的每周回顾。局限：没有模型选择器，且模型名称未公布。',
          '[Compass - Local AI](/zh/power-local-llm/compass-local-ai-review)：免费，在设备上用Apple Intelligence作答，并用设备端OCR读取截图；需要iOS或iPadOS 26。局限：网页搜索为可选项，开启后会把你的查询发送给DuckDuckGo或Brave。',
          '[AI on Device](/zh/power-local-llm/ai-on-device-review)：一次性付费$4.99，一个量化到2比特的3B模型，需要iOS 26和兼容Apple Intelligence的设备。局限：自2025年10月13日起没有更新，因此应视为久未更新。',
          '[Haplo AI](/zh/power-local-llm/haplo-ai-review)：下载Qwen和Phi等开放模型，用于聊天、图像输入和图像生成，无需账户。局限：付费应用；我们的评测依据公开资料。',
          '[Oscilla](/zh/power-local-llm/oscilla-review)：免费，40多个开放模型，实时语音、内置记忆、网页搜索以及文件和图像分析；带Apple的“未收集数据”标签。局限：需要iOS 26或更新版本，闭源，自2026年5月21日起没有更新。',
          '[Frankly AI](/zh/power-local-llm/frankly-ai-review)：可下载的设备端模型，带任务型人设，无需账户；每日免费额度有限，Pro解锁其余功能。局限：免费档有使用上限。',
          '[LLM Studio Go](/zh/power-local-llm/llm-studio-go-review)：免费且含广告，提供聊天、语音、图像、音乐和语音功能，使用GGUF和MLX模型，需要iOS或iPadOS 18。局限：有广告，而且据评测，它与LM Studio没有关联，尽管名字相似。',
          '[Local AI Chat - pocket](/zh/power-local-llm/local-ai-chat-pocket-review)：免费增值的离线聊天，据其标语带图像生成和Shortcuts，需要iOS或iPadOS 18.6或更新版本。局限：自2026年5月27日起没有更新，且应用内购买为订阅式。',
          '[Loci AI](/zh/power-local-llm/loci-ai-review-offline-local-ai)：在iPhone、iPad、Android、Mac和Windows上免费，会自动选择适合硬件的模型。局限：开发者关于模型能力的说法未经PromptQuorum验证。',
          '[Ensu](/zh/power-local-llm/ensu-review)：免费、开源（AGPL），出自Ente Labs，带图像输入和本地语音听写。局限：开发者自己表示它还不如ChatGPT或Claude Code强大，且版本仍是0.x。',
          '[MemoryAI](/zh/power-local-llm/memoryai-review)：免费的离线聊天，带文档问答、可编辑的记忆和PIN锁定的儿童模式；iOS 16.4+和4 GB+内存。局限：其隐私政策列出了使用事件和崩溃报告；闭源。',
          '[Secret AI](/zh/power-local-llm/secret-ai-review)：离线聊天，带角色、Skills和MCP工具，使用GGUF、MNN和MLX模型。局限：据其隐私政策，MCP工具调用和可选的远程服务器可能把数据发送到设备之外，而该政策早于这些功能。',
          '[LocalMindAI](/zh/power-local-llm/localmindai-review)：iPhone和iPad上的聊天、记忆、语音识别和文档阅读，使用Apple的模型或下载的模型；iOS 26。局限：评测时才发布几天，且我们的评测依据公开资料。',
          '[Solair AI](/zh/power-local-llm/solair-ai-review)：本地优先的助手，带可选的自带密钥云端备用；iOS 26。局限：备用方案是云端，因此请确认是哪种模式在作答。',
          '[Liquid Apollo](/zh/power-local-llm/liquid-apollo-review)：免费，离线运行Liquid AI的LFM2模型（350M到2.6B），带可选的OpenRouter模式和自定义后端；iOS 18。局限：并非仅限本地；OpenRouter模式需要你自己的密钥和互联网。',
          '[Kai 9000](/zh/power-local-llm/kai-9000-review)：带持久记忆和工具的开源助手。局限：据其评测，它默认把消息发送到云服务；只有下载设备端模型后才在本地运行。',
          '[CompactifAI APP](/zh/power-local-llm/compactifai-app-review)：Multiverse Computing推出的免费应用，提供压缩模型。局限：当前商店文字只描述了API模型，因此手机上实际运行什么尚未核实。',
          '[Atomic Chat](/zh/power-local-llm/atomic-chat-review)：免费、开源（Apache 2.0）应用，支持macOS、Windows、Linux、iOS和Android，带GGUF、MLX和ONNX模型以及本地的OpenAI兼容API。局限：这是一个多平台项目，请阅读评测了解iPhone版本包含什么。',
          '[LLM Hub](/zh/power-local-llm/llm-hub-review)：Android和iPhone套件，带支持MCP的智能体、图像和音乐生成、翻译、Whisper和语音聊天，另有付费的Premium档。局限：其许可证是PolyForm Noncommercial，并非通常意义上的开源许可证。',
          '[Llamatik](/zh/power-local-llm/llamatik-review)：免费，MIT，一款离线聊天机器人，其自身页面称之为开发者Kotlin SDK的实验性展示。局限：其隐私政策和商店标签列出了Firebase分析和崩溃报告。',
          '[Layla](/zh/power-local-llm/layla-review)：Android和iOS一次性付费$19.99，GGUF模型，带人设驱动的陪伴角色、语音和图像生成。局限：安卓优先，另有可选的Layla Cloud模式。',
        ],
      },
      chatQuiet: {
        id: 'chat-quiet-apps',
        title: '久未更新、过时或不在App Store上的应用',
        content:
          '**超过三个月没有更新的应用可能已无人维护；依赖它之前请先核实。** 下面的日期来自PromptQuorum目录的条目和各篇评测。久未更新的应用仍可能正常使用，但你得不到修复、新模型，也看不出开发者是否会回归。',
        items: [
          '[MLC Chat](/zh/power-local-llm/mlc-chat-review)：来自MLC LLM项目、由Metal加速的参考应用。据我们的评测，自2024年9月27日起App Store没有更新。其背后的引擎[MLC LLM](/zh/power-local-llm/mlc-llm-explained)仍然活跃。',
          '[LLM Farm](/zh/power-local-llm/llm-farm-review)：最后一个版本1.4.3发布于2025年1月，最后一次代码提交为2026年1月30日。无法从App Store或TestFlight安装（其README称暂时不可用）；如果需要它的采样控制，请在Xcode中从源码构建。',
          '[fullmoon](/zh/power-local-llm/fullmoon-review)：免费、MIT，在Apple MLX上运行小模型，自2025年1月28日起没有发布新版本，自2025年5月5日起没有代码变更。',
          '[Maid](/zh/power-local-llm/maid-review)：安卓优先的开源聊天应用；它的iOS版本需要侧载，而我们的评测把iOS版本的发布时间定为2025年4月的2.0.7版，因此它不是App Store上的选项。',
          '[Aiko](/zh/power-local-llm/aiko-review)：仍在销售，对转录很有用，但它最后一次更新是2026年6月27日，已超过三个月。',
          '本指南中标记为久未更新的其他应用：[Atomic Bot](/zh/power-local-llm/atomic-bot-review)（2026年5月26日）、[Chapper](/zh/power-local-llm/chapper-review)（2026年8月6日）、[Enchanted](/zh/power-local-llm/enchanted-review)（2026年7月7日）、[AI CutoutWerk](/zh/power-local-llm/ai-cutoutwerk-review)（2026年2月16日）和[pcAI Photo Retouch](/zh/power-local-llm/pcai-photo-retouch-review)（2026年2月20日）。',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '“久未更新”是依据目录条目日期给出的标记，并不是对质量的评判。在为本列表中的应用付费之前，请先打开它的App Store页面，自己查看版本历史。',
          },
        ],
      },
      vision: {
        id: 'vision-camera',
        title: '视觉与相机：就照片和截图提问',
        content:
          '**好几款iPhone应用允许在提问时附带一张图片并在设备上作答，但小型视觉模型比云端模型更容易出错。** 有两条路线：下载视觉语言模型（由模型自己读图），以及系统OCR加文本模型（手机先提取文字，再由模型作答）。Apple的iOS 27开发者指南称，Foundation Models框架现在可以接受图文输入，并允许模型在设备上调用OCR和条码识别等Vision工具。',
        items: [
          '[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)：用Gemma 4模型实现Ask Image和Audio Scribe。局限：仅支持LiteRT-LM模型；Google给出的是厂商的内存数据，而不是PromptQuorum的测量结果。',
          '[Compass - Local AI](/zh/power-local-llm/compass-local-ai-review)：用设备端OCR读取附加的截图，并用Apple Intelligence作答。局限：OCR读取的是文字，不会描述场景；需要iOS或iPadOS 26。',
          '[Oscilla](/zh/power-local-llm/oscilla-review)：据其页面介绍，用MiniCPM-V等支持视觉的模型进行文件和图像分析。局限：需要iOS 26或更新版本，自2026年5月21日起没有更新。',
          '[Haplo AI](/zh/power-local-llm/haplo-ai-review)：在一个应用里同时提供图像输入和图像生成。局限：我们的评测依据公开资料，因此模型质量未经测量。',
          '[Ensu](/zh/power-local-llm/ensu-review)：用下载的模型处理图像输入，免费且开源。局限：版本为0.x；开发者表示它还不能与大型云端工具相提并论。',
          '[KernelAI](/zh/power-local-llm/kernelai-review)：把视觉列入功能，提供53个可下载模型。局限：哪些模型接受图像因模型而异。',
          '[MemoryAI](/zh/power-local-llm/memoryai-review)：下载模型后用视觉模型理解图像。局限：你必须自己选择支持视觉的模型。',
          '[Reins](/zh/power-local-llm/reins-review)：把图像、PDF和CSV附件发送给你自己服务器上的模型，或本地的MLX模型。局限：质量取决于你选择的服务器模型。',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '凡是读错会付出代价的场合，例如药品标签、法律文件，或为了食用而识别植物或蘑菇，都不要使用小型设备端视觉模型。请把答案当作起点，并核对原始来源。',
          },
        ],
      },
      voice: {
        id: 'voice-speech',
        title: '语音：听写、转录、朗读、离线助手与Siri',
        content:
          '**语音转文字是设备端最成熟的任务之一；开发者称Whisper级模型可以在较新的手机上运行，而且有几款应用是一次性收费，而不是按分钟计费。** 文字转语音和免提助手则参差不齐。想自己搭建完整流程，见[在手机上搭建本地语音助手](/zh/power-local-llm/voice-assistant-local-mobile-offline)，类别对比见[语音与音频应用对比](/zh/power-local-llm/local-llm-voice-audio-compared)，引擎对比见[本地Whisper语音转文字对比](/zh/power-local-llm/local-whisper-stt-comparison)。',
        items: [
          '[Whisper Notes](/zh/power-local-llm/whisper-notes-review)：一次性付费$7.99，在iPhone、iPad和Apple芯片Mac上运行Whisper、Parakeet和SenseVoice，带说话人标注；隐私政策称音频和转录文本不会离开设备。局限：闭源；评测基于公开资料，而非亲手实测。',
          '[Aiko](/zh/power-local-llm/aiko-review)：适用于Mac、iPhone和Vision Pro的设备端Whisper转录，100种语言，支持Shortcuts，一次购买所有平台通用。局限：最后一次更新为2026年6月27日，因此久未更新。',
          '[Lyonesse](/zh/power-local-llm/lyonesse-review)：适用于iPhone、iPad和Mac的离线转录、会议笔记和文档对话；其Apple Watch应用可独立录音并传到iPhone，由iPhone完成转录。局限：开发者关于处理方式的说法未经独立验证。',
          '[OpenWhispr](/zh/power-local-llm/openwhispr-review)：MIT许可的听写和会议笔记，使用本地Whisper或Parakeet模型，或你选择的云端提供方。局限：你的语音是否留在设备上，取决于你选哪个模型。',
          '[AquaVoice](/zh/power-local-llm/aquavoice-review)：把语音听写直接输入到当前应用。局限：据评测它是云服务，列在这里是为了避免你把它误认为本地听写。',
          '[Ensu](/zh/power-local-llm/ensu-review)和[MemoryAI](/zh/power-local-llm/memoryai-review)：分别在聊天应用中提供本地语音听写（Ensu）以及带设备端语音输入和朗读的免提语音（MemoryAI）。局限：语音质量取决于背后的小型聊天模型。',
          '[Oscilla](/zh/power-local-llm/oscilla-review)、[LLM Studio Go](/zh/power-local-llm/llm-studio-go-review)和[Pocket AI](/zh/power-local-llm/pocket-ai-review)：分别提供实时语音、带语音的语音聊天，以及设备端Whisper输入（付费Pro）。局限：语音会在聊天模型之外增加内存和电池负担。',
          '[Castmates](/zh/power-local-llm/castmates-review)：与角色进行语音通话，据开发者称在手机上运行。局限：闭源，因此该说法依赖开发者。',
          '[Cloak: Local AI](/zh/power-local-llm/cloak-local-ai-review)：把语音备忘录转成笔记或聊天。局限：只有一个固定模型。',
          '[Home Assistant Assist](/zh/power-local-llm/home-assistant-assist-review)：Home Assistant内的语音助手，据其评测可用Whisper、Piper和Wyoming在本地运行；不是独立的iPhone应用。局限：需要Home Assistant服务器，以及一个部分处于实验阶段的可选LLM智能体。',
          '[Murmur](/zh/power-local-llm/murmur-review)：在设备上为照片、视频和游戏创作器乐，需一次性购买Pro解锁。局限：没有人声。',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Siri与Shortcuts：[Private LLM](/zh/power-local-llm/private-llm-review)列出了Siri和Shortcuts集成，[Locally AI](/zh/power-local-llm/locally-ai-review)和[Aiko](/zh/power-local-llm/aiko-review)提供Shortcuts操作，我们的iPhone盘点还介绍了Shortcuts的“使用模型”操作，它可以把提示词路由到Apple的设备端模型。这些都不能取代Siri本身；你是让Siri去运行一个调用该应用的Shortcut。',
          },
        ],
      },
      documents: {
        id: 'documents-rag',
        title: '手机上的文档、PDF与检索',
        content:
          '**在iPhone上与少量PDF或笔记对话是可行的，但整个文库应放在家中服务器上。** 设备端文档对话会把文件切成片段，用小型嵌入模型建立索引，再把最相关的片段交给聊天模型。小模型的上下文窗口很短，因此回答可能遗漏内容，也可能出现捏造的引用。需要文库级搜索时，见[知识与检索应用对比](/zh/power-local-llm/local-llm-knowledge-retrieval-compared)。',
        items: [
          '[Private Mind](/zh/power-local-llm/private-mind-review)：Software Mansion出品的开源（MIT）聊天应用，用设备端检索回答关于你的PDF和文本文件的问题并附来源引用，使用React Native ExecuTorch。局限：1.3.0版新增了会抓取网页的可选Web开关，因此默认离线，但该功能开启时就不再离线。',
          '[MemoryAI](/zh/power-local-llm/memoryai-review)：文档问答和可编辑的Agent Memory。局限：闭源，且使用事件会离开手机。',
          '[LocalMindAI](/zh/power-local-llm/localmindai-review)：用Apple的模型或下载的模型在设备上读取你的文档。局限：需要iOS 26，且评测时非常新。',
          '[Noema](/zh/power-local-llm/noema-review)：在其五种模型格式上提供设备端文档对话。局限：闭源；未公布内存数据。',
          '[Lyonesse](/zh/power-local-llm/lyonesse-review)：在转录文本旁与你自己的文档对话。局限：重点在Apple Watch和会议功能。',
          '[Arbiter](/zh/power-local-llm/arbiter-local-ai-chat-review)：把上传的文档保留在设备上，用于在iPhone 13 Pro或更新机型（约6 GB或更多内存）上生成摘要，并可连接LM Studio、Ollama或Arbiter for Mac配套应用以使用更大的模型。局限：更大模型的回答会离开手机，前往你的电脑。',
          '[KernelAI](/zh/power-local-llm/kernelai-review)和[Enclave AI](/zh/power-local-llm/enclave-ai-review)：二者都在通用聊天应用中列出了文档功能。局限：在依赖它之前，请先在应用里查看文件大小和格式限制。',
          '[Reins](/zh/power-local-llm/reins-review)：把PDF、CSV和文本附件发送给你自己服务器上的模型。局限：处理发生在服务器上，而不是手机上。',
          '[AnythingLLM Mobile](/zh/power-local-llm/anythingllm-mobile-review)：安卓版有独立的设备端模式，也可与AnythingLLM Desktop配对；我们的评测指出iOS应用尚未发布。局限：在iOS版发布之前，请用浏览器访问你自己的AnythingLLM服务器。',
        ],
      },
      translation: {
        id: 'translation',
        title: '设备端翻译',
        content:
          '**翻译很适合小型设备端模型，因为任务范围窄，而且有几款应用自带针对翻译调优的模型。** PromptQuorum没有在iPhone上对翻译质量做过基准测试。对于冷门语言、习语和长文档，质量很可能下降，而且每个设备端引擎都需要按模型或语言分别下载。',
        items: [
          '[On-Device AI Translator](/zh/power-local-llm/on-device-ai-translator-review)：在iPhone上用可下载的Hy-MT2、TranslateGemma和Qwen模型进行翻译，并提供Apple内置翻译作为免费引擎；需要iOS 18.4或更新版本。局限：AI模型需要应用内购买，其价格在资料中查不到，且隐私政策早于该应用。',
          '[LLM Hub](/zh/power-local-llm/llm-hub-review)：在其Android和iPhone套件中包含翻译。局限：翻译只是众多功能之一，且许可证为非商业用途。',
          '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)或[Locally AI](/zh/power-local-llm/locally-ai-review)等通用聊天应用，只要加载Qwen或Gemma系列等多语言模型，也可以翻译。局限：没有术语表、不保留文档版式，也不保证每种语言的质量。',
          'Apple自己的翻译应用和系统翻译独立于上述应用，本指南没有核实；请在“翻译”应用中确认你的语言对能否下载供离线使用。',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '对于整本书或长文档，走桌面端路线更实用；见[用LLM翻译书籍](/zh/power-local-llm/translate-books-with-llms-review)。Apple Intelligence的语言支持是另一份名单，在Apple Intelligence一章中有介绍。',
          },
        ],
      },
      images: {
        id: 'image-generation-editing',
        title: '图像生成与照片编辑',
        content:
          '**iPhone可以用小型扩散模型生成图像，用分割模型编辑照片，但生成速度慢、占用存储多，还会让手机发热。** 模型文件是数GB的下载，而且PromptQuorum没有任何iPhone图像应用的速度数据。云端与本地的取舍见[本地AI图像生成与云端对比](/zh/power-local-llm/local-ai-image-generation-vs-cloud)，类别对比见[图像与视频应用对比](/zh/power-local-llm/local-llm-images-video-compared)。',
        items: [
          '[Draw Things](/zh/power-local-llm/draw-things-review)：在macOS、iOS、iPadOS和visionOS上用Stable Diffusion、SDXL、Flux等扩散模型生成图像，本地生成无需账户，需要iOS 15.4或更新版本。局限：并非100%本地，因为它还提供可选的云端模式；更大的模型需要更多内存。',
          '[Genva](/zh/power-local-llm/genva-review)：iPhone和iPad应用，在一次性下载模型后，可在设备上把文字提示词和照片变成图像，并带放大功能。局限：于2026年10月14日以1.0.0版发布，因此没有过往记录。',
          '[Haplo AI](/zh/power-local-llm/haplo-ai-review)、[Off Grid AI](/zh/power-local-llm/off-grid-ai-review)和[LLM Studio Go](/zh/power-local-llm/llm-studio-go-review)：同样能在设备上生成图像的聊天应用（Haplo AI；使用Stable Diffusion模型的Off Grid AI；还带音乐和语音的LLM Studio Go）。局限：图像质量和速度不如专门的应用。',
          '[Local AI Chat - pocket](/zh/power-local-llm/local-ai-chat-pocket-review)和[Layla](/zh/power-local-llm/layla-review)：带图像生成的离线聊天，Layla还带语音和人设。局限：Local AI Chat - pocket自2026年5月27日起久未更新；Layla以安卓为先。',
          '[Tina](/zh/power-local-llm/tina-review)：通过你自己托管的服务器上的ComfyUI生成图像，也可以在设备上运行模型。局限：图像这一步需要你自己的服务器。',
          '[AI CutoutWerk](/zh/power-local-llm/ai-cutoutwerk-review)：适用于iPhone、iPad和Mac的离线背景移除与抠图合成工具，使用Core ML分割模型。局限：自2026年2月16日起没有更新。',
          '[pcAI Photo Retouch](/zh/power-local-llm/pcai-photo-retouch-review)：修复老照片并应用艺术风格，开发者称所用AI完全在设备上运行。局限：未说明模型名称，源代码未公开，自2026年2月20日起没有更新。',
        ],
      },
      photos: {
        id: 'photos-gallery-search',
        title: '相册与图库搜索',
        content:
          '**iPhone上的AI照片搜索通常是一个相册库的客户端，索引工作在别处完成：要么通过手机上的可选功能，要么在你自己运行的服务器上。** 下面三个相册库采取不同的做法，而且都没有加入聊天模型。人脸识别会处理生物识别数据，因此在开启之前，请查看你所在地以及照片中人物所在地的规定。',
        items: [
          '[Ente Photos](/zh/power-local-llm/ente-photos-review)：开源的照片备份应用，据Ente称是端到端加密的；人脸识别和自然语言“魔法搜索”在你的设备上运行，开启之前保持关闭。局限：照片以加密形式存储在Ente的云端，首次建立索引会消耗电量。',
          '[Immich](/zh/power-local-llm/immich-review)：自托管的照片和视频备份，带iPhone和Android应用；智能搜索和人脸识别运行在你托管的机器学习容器上，用Docker安装。局限：需要服务器，数据库只保存元数据，因此文件需要另行备份，而且没有聊天或LLM功能。',
          '[Mylio Photos](/zh/power-local-llm/mylio-photos-review)：照片、视频和文档库，带SmartTag搜索、人脸和文字识别，Mylio称这些都在你自己的设备上运行；可免费下载，有订阅方案。局限：Mylio没有说明其应用内帮助聊天机器人在哪里运行。',
          '你可以在iPhone浏览器或配套应用中打开的自托管网页图库，例如[PhotoPrism评测](/zh/power-local-llm/photoprism-review)、[Photoview评测](/zh/power-local-llm/photoview-review)和[Home Gallery评测](/zh/power-local-llm/home-gallery-review)，在别处单独评测；请阅读各篇评测，了解什么在哪里运行。',
        ],
      },
      notes: {
        id: 'notes-knowledge',
        title: '笔记、知识库与书签',
        content:
          '**大多数笔记和书签工具把AI放在服务器或你选择的模型提供方上，iPhone应用只是采集和阅读的客户端。** 只要服务器是你自己的、模型是本地的，这仍然可以完全私密，但它不是设备端推理。每篇评测都会说明什么在哪里运行。',
        items: [
          '[Hillnote](/zh/power-local-llm/hillnote-review)：本地优先的Markdown笔记工作区，适用于Mac、Windows、iPhone和Android，通过Ollama和Apple Intelligence实现设备端AI，另有可选的云端模型和同步。局限：Ollama运行在电脑上，而不是手机上，云端模型是可选的，但不是本地的。',
          '[Logseq](/zh/power-local-llm/logseq-review)：开源、本地优先的大纲笔记；数据库版本2.0.2是测试版，其README警告可能丢失数据。局限：AI通过可选的MCP服务器提供，而不是内置模型。',
          '[SiYuan](/zh/power-local-llm/siyuan-review)：自托管的AGPL知识工作区，支持Windows、macOS、Linux、Android、iOS和HarmonyOS，带可选的AI功能，连接你选择的模型提供方。局限：云端同步需要订阅或一次性购买PRO。',
          '[Karakeep](/zh/power-local-llm/karakeep-review)：自托管的书签和笔记应用，带原生iOS和Android应用，通过OpenAI或本地Ollama端点进行AI标签。局限：你需要用Docker运行服务器，且只有选择Ollama时标签才是本地的。',
          '[Linkwarden](/zh/power-local-llm/linkwarden-review)：为你保存的每个页面存档一份副本，并可用你配置的AI模型给链接打标签，可自托管，也可使用付费的Cloud版。局限：iPhone应用只是客户端；AI这一步在服务器上运行。',
          '[Lyonesse](/zh/power-local-llm/lyonesse-review)和[Cloak: Local AI](/zh/power-local-llm/cloak-local-ai-review)：分别把录音转成笔记（Lyonesse）或由照片、位置和语音备忘录生成每周回顾（Cloak）。局限：二者都是闭源的。',
        ],
      },
      health: {
        id: 'health-wellness',
        title: '健康与身心状态问题',
        content:
          '**有一款已点评的iPhone应用用设备上的Apple Intelligence回答关于你的Apple健康数据的问题，它也是我们的iPhone应用中唯一的健康类应用。** 健康数据是敏感的个人数据，而小型语言模型不是临床医生。',
        items: [
          '[Pajdo](/zh/power-local-llm/pajdo-review)：免费的iPhone、iPad和Apple Watch应用，把Apple健康数据转化为八种心情之一，并据其网站称，用设备上的Apple Intelligence回答你关于这些数据的问题。免费方案每周包含5个问题；Pro取消限制，并增加锻炼计划和就诊报告。局限：闭源，需要iOS 26或更新版本，设备端运行的说法依赖开发者的一面之词。',
          '聊天章节中的通用聊天应用可以笼统地讨论睡眠、训练或营养。局限：除非应用请求权限，否则它们无法访问你的健康数据，而且小模型可能言之凿凿地给出错误事实。',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '设备端的回答不是医疗建议，也不能取代医生。不要用它们来解读症状、心率提醒或用药问题；在授予访问Apple健康的权限之前，请阅读应用的隐私政策。',
          },
        ],
      },
      roleplay: {
        id: 'roleplay-companions',
        title: '角色扮演与陪伴类应用（附内容安全提示）',
        content:
          '**角色扮演和陪伴聊天在iPhone本地AI应用市场中占很大比重，这些应用在模型是否在手机上运行、允许哪些内容以及如何对待未成年人方面差别很大。** 本地不等于有审核，云端也不等于更安全。在你或家中任何人安装之前，请先阅读年龄分级和成人内容设置。桌面端前端见[SillyTavern、Agnai与RisuAI角色扮演对比](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)。',
        items: [
          '[Castmates](/zh/power-local-llm/castmates-review)：免费的iPhone应用，带35个现成角色、自定义角色，无需账户；开发者称下载约1.9 GB后，通过llama.cpp运行Impish Llama 3B（Q4_K_M）。Pro方案取消每日消息上限，并解锁可选的仅限成人的Mature模式。局限：闭源，因此设备端运行的说法依赖开发者。',
          '[Frankly AI](/zh/power-local-llm/frankly-ai-review)：带任务型人设的设备端模型，无需账户；每日免费额度有限。局限：人设以任务为导向，Pro解锁应用的其余部分。',
          '[Layla](/zh/power-local-llm/layla-review)：人设驱动的AI陪伴应用，带角色扮演角色、语音和设备端图像生成；一次性付费$19.99。局限：另有可选的、需单独启用的Layla Cloud模式。',
          '[Secret AI](/zh/power-local-llm/secret-ai-review)：基于GGUF、MNN和MLX模型的自定义角色；开发者称聊天、角色和照片保持私密。局限：据其隐私政策，MCP工具和远程服务器可能把数据发送到设备之外。',
          '[HiWaifu](/zh/power-local-llm/hiwaifu-review)：带长期记忆、设定集和群聊的角色扮演，分级为18+。局限：它似乎是一项云服务，其页面也没有说明模型在哪里运行。',
          '[Swerve](/zh/power-local-llm/swerve-ai-review)：带社区角色和分支剧情的故事与角色聊天。局限：据其页面，它是在线服务，而不是设备端AI。',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '用通俗的话说，安全提示如下。第一，年龄：其中好几款应用的App Store分级为18+或设有仅限成人的模式，而设备端模型没有可以依赖的服务器端过滤。第二，隐私：云端角色扮演应用会把你的对话发送到某项服务，即使本地应用也可能发送分析数据。第三，情感依赖：陪伴式聊天会让人感觉很亲近，但那是一种设计特性，并不是一段关系。第四，真实数据：切勿在角色扮演聊天中输入你的住址、健康细节或他人的私人信息。对于孩子的iPhone，请使用Apple的屏幕使用时间内容和应用分级限制，而不是相信应用自己的设置。',
          },
        ],
      },
      smartHome: {
        id: 'smart-home-agents',
        title: '智能家居与智能体',
        content:
          '**在iPhone上，智能家居AI和智能体几乎总是运行在家中服务器上的软件的客户端，因为iOS不会让模型或智能体在后台持续运行。** 手机是麦克风、屏幕和遥控器；长时间运行的工作由家中服务器完成。想坦率了解自主本地智能体是否实用，见[自主本地智能体真的管用吗？](/zh/power-local-llm/autonomous-local-agents-actually-work)。',
        items: [
          '[Home Assistant Assist](/zh/power-local-llm/home-assistant-assist-review)：Home Assistant内的语音助手，用Whisper、Piper和Wyoming完全本地运行，另有可选的云端和Ollama LLM智能体。局限：不是独立应用；完整的本地流程需要Home Assistant OS。',
          '[Scrypted](/zh/power-local-llm/scrypted-review)：开源的摄像头和NVR平台，把摄像头串流到HomeKit、Google Home和Home Assistant，并可通过llama.cpp提供可选的本地LLM摘要。局限：运行在你自己的服务器上，而且拍摄他人的摄像头画面在许多地方会带来法律义务。',
          '[Nekoni](/zh/power-local-llm/nekoni-review)：运行在你自己电脑上的自托管个人智能体（Ollama、文档、定时技能），你可以通过直连的加密链路，从iPhone或浏览器与它聊天。局限：需要一台始终开机的Mac或Linux机器。',
          '[Kai 9000](/zh/power-local-llm/kai-9000-review)和[LLM Hub](/zh/power-local-llm/llm-hub-review)：分别是带持久记忆的助手和支持MCP的智能体。局限：工具调用和网页搜索会增加网络请求，因此它们不属于离线功能。',
          '[Atomic Bot](/zh/power-local-llm/atomic-bot-review)：把开源的[OpenClaw评测](/zh/power-local-llm/openclaw-review)智能体框架打包用于桌面和移动端，可在本地或云端运行。局限：本指南将其标记为久未更新（最后一次更新为2026年5月26日）。',
        ],
      },
      remote: {
        id: 'remote-mode',
        title: '远程模式：把iPhone当作自己服务器的瘦客户端',
        content:
          '**如果你的iPhone对你想要的模型来说太小，就在家里的Mac或PC上运行模型，把iPhone当作屏幕。** 这是在iPhone上使用7B-70B模型的常见路线。Ollama的下载页面列出的是macOS、Windows和Linux，没有iPhone应用，所以服务器在别处（我们的iPhone盘点记录了这一点）。服务器端见[Apple芯片本地LLM指南](/zh/local-llms/apple-silicon-local-llm-guide-2026)、[Mac上的MLX、Ollama与llama.cpp对比](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)以及[运行与服务工具对比](/zh/power-local-llm/local-llm-run-serve-compared)。',
        columns: ['应用', '连接到', '是否也能在手机上运行模型'],
        rows: [
          { '应用': '[Reins](/zh/power-local-llm/reins-review)', '连接到': 'Ollama、LM Studio、OpenAI兼容接口', '是否也能在手机上运行模型': '能，MLX模型' },
          { '应用': '[Enchanted](/zh/power-local-llm/enchanted-review)', '连接到': '仅Ollama', '是否也能在手机上运行模型': '不能' },
          { '应用': '[OpenClient](/zh/power-local-llm/openclient-review)', '连接到': 'Ollama、LiteLLM、OpenAI兼容接口', '是否也能在手机上运行模型': '不能' },
          { '应用': '[Chapper](/zh/power-local-llm/chapper-review)', '连接到': 'LM Studio、Ollama、llama.cpp服务器', '是否也能在手机上运行模型': '能，$4.99附加包' },
          { '应用': '[Tina](/zh/power-local-llm/tina-review)', '连接到': 'Ollama、llama.cpp、ComfyUI', '是否也能在手机上运行模型': '能' },
          { '应用': '[LM Mini](/zh/power-local-llm/lm-mini-review)', '连接到': 'LM Studio、Ollama、Jan AI、oMLX', '是否也能在手机上运行模型': '能' },
          { '应用': '[Arbiter](/zh/power-local-llm/arbiter-local-ai-chat-review)', '连接到': 'LM Studio、Ollama、Arbiter for Mac', '是否也能在手机上运行模型': '能' },
          { '应用': '[LocalMind](/zh/power-local-llm/localmind-review)', '连接到': 'Ollama、LM Studio、OpenRouter', '是否也能在手机上运行模型': '能' },
          { '应用': '[Liquid Apollo](/zh/power-local-llm/liquid-apollo-review)', '连接到': 'LM Studio、Ollama、OpenRouter', '是否也能在手机上运行模型': '能，LFM2' },
          { '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)', '连接到': 'Mac上的LM Studio（LM Link）', '是否也能在手机上运行模型': '能' },
          { '应用': '[MLXHub](/zh/power-local-llm/mlxhub-review)', '连接到': '在你的Wi-Fi上提供模型服务（Plus）', '是否也能在手机上运行模型': '能' },
          { '应用': '[Nekoni](/zh/power-local-llm/nekoni-review)', '连接到': '你自己电脑上的智能体', '是否也能在手机上运行模型': '不能' },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '离开家后，你需要一条通往服务器的安全通道。Tailscale这类私有网状VPN是常见的选择，因为Ollama默认不要求身份验证，不应通过路由器端口暴露到公共互联网。在连接之前，请查看各客户端的评测和设置，了解是否支持HTTPS和API密钥。',
          },
          {
            type: 'tip',
            text:
              '上面有几款客户端也表示可以在手机上加载模型，这让它们成为很好的单一应用：离线用小模型，在家用大模型。防火墙和离线环境的搭建请阅读[防火墙后与离线的本地AI](/zh/power-local-llm/local-ai-behind-firewall-offline-2026)。',
          },
        ],
      },
      developers: {
        id: 'developer-paths',
        title:
          '开发者路径：Core ML、Core AI、MLX Swift、llama.cpp、MLC、ExecuTorch与Foundation Models',
        content:
          '**构建iPhone AI功能的开发者，需要在Apple自己的模型、用于自有模型的Apple运行时和跨平台引擎之间做选择。** 这个选择决定了适用的手机、语言和商店规则。本章只做导览；在动手构建之前，请阅读各个项目的文档。',
        items: [
          '**Foundation Models框架：** Apple用于设备端模型的原生Swift API，支持图像、Vision工具、Dynamic Profiles，并可通过Language Model协议接入云端提供方（Apple，WWDC26 iOS指南）。需要支持Apple Intelligence的硬件。文档：[Foundation Models](https://developer.apple.com/documentation/FoundationModels)。',
          '**Core ML：** Apple用于在CPU、GPU和Neural Engine上运行转换后模型的框架；长期以来用于视觉、音频和小型模型的路线。[AI CutoutWerk](/zh/power-local-llm/ai-cutoutwerk-review)内置了一个Core ML分割模型。文档：[Core ML](https://developer.apple.com/documentation/coreml)。',
          '**Core AI：** Apple随iOS 27推出的新框架，用于在设备上引入你自己的模型，利用统一内存和Neural Engine，并采用提前编译。对本指南中的大多数应用来说还太新；见[WWDC26 iOS指南](https://developer.apple.com/wwdc26/guides/ios/)。',
          '**MLX Swift：** Apple面向Swift的MLX数组框架，支撑着[Locally AI](/zh/power-local-llm/locally-ai-review)、[fullmoon](/zh/power-local-llm/fullmoon-review)和[MLXHub](/zh/power-local-llm/mlxhub-review)。[mlx-swift](https://github.com/ml-explore/mlx-swift)。Python方面见[MLX-LM详解](/zh/power-local-llm/mlx-lm-explained)。',
          '**llama.cpp：** 带Metal、运行GGUF文件的C/C++引擎，支撑着[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)和[Pocket AI](/zh/power-local-llm/pocket-ai-review)。[llama.cpp](https://github.com/ggml-org/llama.cpp)。',
          '**MLC LLM：** 基于编译器的运行时，带iOS部署文档和参考应用[MLC Chat](/zh/power-local-llm/mlc-chat-review)。见[MLC LLM](/zh/power-local-llm/mlc-llm-explained)和[MLC iOS文档](https://llm.mlc.ai/docs/deploy/ios.html)。',
          '**ExecuTorch：** PyTorch的设备端运行时，通过React Native ExecuTorch用于[Private Mind](/zh/power-local-llm/private-mind-review)，并受到[Noema](/zh/power-local-llm/noema-review)支持。[ExecuTorch](https://github.com/pytorch/executorch)。',
          '**LiteRT-LM：** Google的运行时，支撑着[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)（[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)）。',
          '**SDK：** [RunAnywhere](/zh/power-local-llm/runanywhere-review)（LLM、语音转文字、文字转语音和语音活动检测；自定义许可证，含商业条款）、[Llamatik](/zh/power-local-llm/llamatik-review)（Kotlin Multiplatform，MIT）和[SwiftLM](/zh/power-local-llm/swiftlm-review)（面向Apple芯片Mac的Swift MLX服务器，配有SwiftBuddy iOS配套应用）。',
          '**TestFlight测试版：** 向测试人员分发早期构建的免费方式；构建会过期，请提前规划。Apple的App审核规则仍然适用于正式发布的版本。',
        ],
      },
      privacy: {
        id: 'privacy-telemetry',
        title: '隐私与遥测的真实情况',
        content:
          '**“在你的设备上运行”和“什么都不发送”是两种不同的说法，只有后者才是隐私保证。** Apple的App Store隐私标签由开发者填写，因此它们描述的是开发者所说的应用行为。设备端模型仍然可能存在于会发送崩溃报告、使用事件、可选网页搜索或模型下载请求的应用之中。此处所有应用层面的隐私说法，均取自各应用的隐私政策、App Store标签或开发者页面，并经所链接的评测概括，没有经过网络分析核实。更深入的清单见[本地LLM安全与隐私清单](/zh/local-llms/local-llm-security-privacy-checklist)。',
        items: [
          '**“零遥测”可能的含义：** 应用中没有分析SDK。它并不涵盖模型下载（托管方能看到你的请求）、App Store、可选的网页搜索、你连接的远程服务器，或包含应用数据的备份。',
          '**我们评测中的标签：** [Oscilla](/zh/power-local-llm/oscilla-review)带有Apple的“未收集数据”标签；[Google AI Edge Gallery](/zh/power-local-llm/google-ai-edge-gallery-review)的标签显示会收集一些设备诊断信息；[MemoryAI](/zh/power-local-llm/memoryai-review)和[Llamatik](/zh/power-local-llm/llamatik-review)据其政策会发送使用事件或分析数据以及崩溃报告，但不含聊天内容。',
          '**会破坏“离线”的可选功能：** [Compass - Local AI](/zh/power-local-llm/compass-local-ai-review)中的网页搜索（DuckDuckGo或Brave）、[Private Mind](/zh/power-local-llm/private-mind-review)中的Web开关、[Secret AI](/zh/power-local-llm/secret-ai-review)中的MCP工具，以及[Liquid Apollo](/zh/power-local-llm/liquid-apollo-review)中的OpenRouter模式。',
          '**默认使用云端：** 据其评测，[Kai 9000](/zh/power-local-llm/kai-9000-review)默认把消息发送到云服务，只有下载设备端模型后才在本地运行；[Swerve](/zh/power-local-llm/swerve-ai-review)被记录为在线服务，[HiWaifu](/zh/power-local-llm/hiwaifu-review)似乎也是（其页面没有说明模型在哪里运行）；[AquaVoice](/zh/power-local-llm/aquavoice-review)是云端听写。',
          '**政策与版本脱节：** 据其隐私政策，[LM Mini](/zh/power-local-llm/lm-mini-review)有一个日期为2025年8月的版本，只描述了它与LM Studio的连接；[Secret AI](/zh/power-local-llm/secret-ai-review)的政策最后更新于2025年5月，早于它新增工具的时间。请把日期与应用版本对照。',
          '**自己检查，分三步：** （1）在Wi-Fi下下载模型，然后开启飞行模式并测试应用。（2）正常使用手机一周，然后打开设置 > 隐私与安全性 > App隐私报告，Apple表示它会显示应用如何使用权限及其网络活动。（3）阅读隐私标签和政策，查看是否有分析功能；如果想审查代码，请优先选择开源应用。',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'PromptQuorum的评测会说明各应用的来源怎么说，以及我们是否测试过它；凡是评测写明“未亲手实测”的地方，隐私说法是开发者的，而不是我们的。本指南没有对任何应用进行网络抓包。',
          },
        ],
      },
      batteryThermal: {
        id: 'battery-thermal-memory',
        title: '电池、发热与内存限制',
        content:
          '**生成文字会让芯片持续忙碌，所以模型运行时请预期会有明显的发热和耗电；偶尔使用的代价很小。** PromptQuorum没有测量过任何iPhone的功耗或电池使用情况，我们也没有找到可以引用的已发布数据。',
        items: [
          '**发热：** 持续生成可能让iOS降低时钟频率，每秒token数随之下降。具体情况因手机、保护壳、充电和室温而异，我们没有测量过。',
          '**准则2.4.2：** Apple要求开发者的应用不应快速耗电或产生过多热量，因此表现良好的应用会限制生成长度或暂停长时间运行。',
          '**内存：** 模型加载后驻留在内存中。如果iOS需要把内存留给另一个应用，它可能会关闭聊天应用，对话状态可能丢失；加载模型前请关闭其他占用较大的应用。',
          '**边充电边生成**会增加发热；如果手机感觉很烫，请暂停，并避免阳光直射或放在高温的车里。',
          '**存储：** 一个3-4B模型约为2.5-3.7 GB，所以三个应用各带三个模型大约会占用10 GB。请只保留一个应用和一两个模型。',
          '**低电量模式**可能会降低生成速度，因为iOS会降低性能以节省电量；进行长时间使用时请将其关闭。',
        ],
      },
      partly: {
        id: 'works-partly',
        title: '只能部分做到的事',
        content:
          '**“部分可用”意味着该功能在iPhone上存在，但有一些限制，在你养成习惯之前最好先了解。**',
        items: [
          '**搭配Siri的免提语音：** Shortcuts可以调用应用，但Siri还是Siri；你无法让本地模型成为系统助手。Apple的Siri AI是单独的iOS 27测试版，初期不会在欧盟提供。',
          '**图像生成：** 可以用小型扩散模型实现，但速度慢、占用存储多且发热；[Draw Things](/zh/power-local-llm/draw-things-review)还提供可选的云端模式。',
          '**照片搜索：** AI这一步要么在手机上选择性开启（[Ente Photos](/zh/power-local-llm/ente-photos-review)），要么运行在你托管的服务器上（[Immich](/zh/power-local-llm/immich-review)）。',
          '**笔记和书签：** iPhone应用是客户端；模型工作发生在服务器或你选择的提供方上。',
          '**智能体：** 简短的前台任务可行；长时间运行或定时的智能体需要家中服务器（[Nekoni](/zh/power-local-llm/nekoni-review)）。',
          '**健康问题：** 可以用Apple的设备端模型实现（[Pajdo](/zh/power-local-llm/pajdo-review)），但不能替代医疗建议。',
          '**长文档：** 小模型的上下文窗口小，所以大型PDF需要分块处理或使用服务器。',
        ],
      },
      notPossible: {
        id: 'not-possible',
        title: 'iPhone上做不到或暂时做不到的事',
        content:
          '**这些是人们最常对iPhone本地AI提出、而目前没有已点评的iPhone应用能够实现的愿望。** 有些是硬件或App Store规则的硬性限制；另一些则是随着Apple和应用开发者推出Core AI等新框架，可能会逐步补上的空白。',
        columns: ['愿望', '状态', '原因', '替代方案'],
        rows: [
          { '愿望': '在手机上运行30B-70B模型', '状态': '不可行', '原因': '需要的内存远超iPhone所有', '替代方案': '远程模式连接家中服务器' },
          { '愿望': '云端级别的推理和代码', '状态': '暂不可用', '原因': '小模型在多步任务上会失败', '替代方案': '难题交给云端应用' },
          { '愿望': '在手机上运行Ollama或Docker', '状态': '不可行', '原因': 'iPhone上没有Ollama或Docker应用；沙盒限制', '替代方案': '在Mac或PC上运行' },
          { '愿望': '用你的模型取代Siri', '状态': '不可行', '原因': 'Siri由系统控制', '替代方案': '用Shortcuts调用应用' },
          { '愿望': '常驻的后台智能体', '状态': '不可行', '原因': '后台服务受限（2.5.4）', '替代方案': '在家中服务器上运行智能体' },
          { '愿望': '在手机上微调模型', '状态': '不现实', '原因': '内存、发热、没有应用工具', '替代方案': '在Mac或GPU上训练' },
          { '愿望': '把聊天同步到Mac和iPad', '状态': '基本不行', '原因': '多数应用的历史记录按设备保存', '替代方案': '服务器网页界面，如Open WebUI' },
          { '愿望': 'iPhone上的AnythingLLM Mobile', '状态': '暂不可用', '原因': '据评测iOS应用尚未发布', '替代方案': '用浏览器访问你的服务器' },
          { '愿望': 'iPhone 14上的Apple Intelligence', '状态': '不可行', '原因': '不在Apple的设备名单上', '替代方案': '第三方模型应用' },
          { '愿望': '带人声的音乐生成', '状态': '暂不可用', '原因': 'Murmur只生成器乐', '替代方案': '桌面工具' },
          { '愿望': '证明某个应用是私密的', '状态': '无法仅凭标签', '原因': '标签由开发者自行声明', '替代方案': '飞行模式和App隐私报告' },
        ],
      },
      decision: {
        id: 'decision-path',
        title: '决策路径：我有这款iPhone，想要这个功能',
        content:
          '**按手机档位和目标找到你的那一行，然后打开链接的章节。** 这些推荐是基于我们评测的起点，不是排名；只有在没有更合适的选择时，才会提到在维护章节中被标为久未更新的应用。',
        columns: ['如果你有', '并且想要', '从这里开始'],
        rows: [
          { '如果你有': '4 GB iPhone（12、13、SE）', '并且想要': '通用聊天', '从这里开始': 'Reins或Enchanted，配合家中服务器' },
          { '如果你有': '6 GB iPhone（14、15）', '并且想要': '免费离线聊天', '从这里开始': 'PocketPal AI，使用1-2B模型' },
          { '如果你有': '8 GB iPhone（16、17）', '并且想要': '免费离线聊天', '从这里开始': 'PocketPal AI或Locally AI' },
          { '如果你有': '8 GB iPhone', '并且想要': 'Siri和Shortcuts', '从这里开始': 'Private LLM或Locally AI' },
          { '如果你有': '12 GB iPhone（17 Pro）', '并且想要': '手机上最大的模型', '从这里开始': 'Noema或带Gemma 4的Gallery' },
          { '如果你有': '支持Apple Intelligence的手机', '并且想要': '无需下载模型', '从这里开始': 'Compass或Locally AI（Apple模型）' },
          { '如果你有': '任何iPhone', '并且想要': '会议转录', '从这里开始': 'Whisper Notes或Lyonesse' },
          { '如果你有': '任何iPhone', '并且想要': '与少量PDF对话', '从这里开始': 'Private Mind或MemoryAI' },
          { '如果你有': '任何iPhone', '并且想要': '翻译', '从这里开始': 'On-Device AI Translator' },
          { '如果你有': '8 GB以上的iPhone', '并且想要': '文字生成图像', '从这里开始': 'Draw Things' },
          { '如果你有': '任何iPhone', '并且想要': '照片搜索，自有服务器', '从这里开始': 'Immich' },
          { '如果你有': '任何iPhone，家中有电脑', '并且想要': '7B-70B模型', '从这里开始': 'Reins、OpenClient或LM Mini' },
          { '如果你有': '任何iPhone', '并且想要': '智能家居语音', '从这里开始': 'Home Assistant Assist' },
          { '如果你有': '青少年使用的iPhone', '并且想要': '安全聊天', '从这里开始': '先设置屏幕使用时间限制，再阅读安全提示' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**按文件大小而不是内存档位来选模型。** 能下载下来的文件仍可能被iOS关闭；请按档位表匹配大小，并用应用自带的基准测试试一试。',
          '**期待云端质量。** 小模型用于起草、摘要、翻译和快速问答，难题的推理则交给云端或家中服务器上的模型。',
          '**把“Apple Intelligence”当作“离线”。** Apple Intelligence可能使用Private Cloud Compute；请确认是什么在处理请求。',
          '**不经测试就相信隐私标签。** 请完成隐私一章中的飞行模式和App隐私报告检查。',
          '**把每个应用都装一遍。** 每个应用都会保存自己的数GB模型文件；一项任务选一个应用。',
          '**购买久未更新的应用。** 请查看版本历史，尤其是维护章节中的那些应用。',
          '**把家中服务器暴露到互联网。** 请使用私有VPN网络；Ollama默认不要求身份验证。',
          '**让角色扮演应用在共用手机或孩子的手机上不经审查。** 请先阅读年龄分级和成人内容设置。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          'Apple Intelligence的设备、语言、Siri AI和Private Cloud Compute：[Apple Intelligence](https://www.apple.com/apple-intelligence/)（2026年11月13日查阅）。',
          'App审核准则2.4.2、2.5.1、2.5.2、2.5.4、5.1.1和5.1.2：[App Store审核准则](https://developer.apple.com/app-store/review/guidelines/)（2026年11月13日查阅）。',
          'App隐私报告的路径和内容：[Apple支持](https://support.apple.com/en-us/102188)。',
          '引擎：[MLX Swift](https://github.com/ml-explore/mlx-swift)、[llama.cpp](https://github.com/ggml-org/llama.cpp)、[ExecuTorch](https://github.com/pytorch/executorch)、[MLC iOS文档](https://llm.mlc.ai/docs/deploy/ios.html)、[Core ML](https://developer.apple.com/documentation/coreml)、[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)。',
          'iPhone内存数据和参考速度沿用自[2026年iPhone最佳本地AI应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026)；Apple不公布iPhone内存。',
          '各应用的信息（价格、平台、版本、开发者说法）来自所链接的PromptQuorum评测和目录条目；被标为久未更新的应用的最后更新日期来自这些条目。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'iPhone能完全离线运行AI吗？',
            a:
              '可以，据这些应用的页面和评测所述。在Wi-Fi下一次性下载模型之后，PocketPal AI、Private LLM和Locally AI等应用无需联网即可作答。Apple Intelligence也在设备上运行模型，但较大的请求可能使用Private Cloud Compute，因此不能保证离线。请在飞行模式下测试任何应用。',
          },
          {
            q: '本地AI需要哪款iPhone？',
            a:
              '运行1-2B小模型需要6 GB或更多内存的iPhone，运行3-4B模型需要8 GB或更多。Apple不公布内存，所以请参考本指南中报道所称的档位。要使用Apple Intelligence，你需要Apple设备名单上的iPhone 15 Pro或更新机型。',
          },
          {
            q: 'iPhone上的本地AI真的私密吗？',
            a:
              '聊天可以保留在设备上，但隐私取决于具体应用。标签由开发者自行声明，而且好几款已点评的应用会发送崩溃报告、使用事件或可选的网络请求。请用飞行模式和设置 > 隐私与安全性 > App隐私报告来验证。',
          },
          {
            q: '我能在iPhone上运行Ollama吗？',
            a:
              '不能。Ollama提供macOS、Windows和Linux下载，iPhone上没有Ollama或Docker服务器。请在电脑上运行Ollama，再通过Reins、Enchanted或OpenClient等iPhone客户端连接。',
          },
          {
            q: 'iPhone能运行多大的模型？',
            a:
              '8 GB的手机在4比特下约为3-4B参数，7-8B的低比特模型只能在12 GB的手机上运行，而且很慢。6 GB的手机最好使用1-2B模型。更大的模型请使用连接家中服务器的远程模式。',
          },
          {
            q: '本地AI会耗电吗？',
            a:
              '生成时会：持续生成会让处理器保持忙碌，耗电比空闲时快得多，手机也可能发热。PromptQuorum没有测量过确切的耗电量。偶尔提问的代价很小，已加载但空闲的模型耗电很少。',
          },
          {
            q: 'iPhone上最好的免费本地AI应用是什么？',
            a:
              '在我们的盘点中，PocketPal AI是免费的开源默认之选，Locally AI和Google AI Edge Gallery是免费的备选。合适的应用取决于你的任务；请使用本指南中的决策路径。',
          },
          {
            q: 'Apple Intelligence与这些应用有什么不同？',
            a:
              'Apple Intelligence是Apple为系统功能以及使用Foundation Models框架的应用内置的模型；你无法更换它的模型。本指南中的应用让你自己选择并下载模型，其中一些（如Locally AI）还可以作为Apple模型的前端。',
          },
          {
            q: '我能在iPhone上离线与PDF对话吗？',
            a:
              '少量文件可以，据这些应用的页面和评测所述，可使用Private Mind、MemoryAI、Noema或LocalMindAI等应用。小模型的上下文窗口很短，因此长文档的摘要可能不完整。大型文库请使用家中服务器。',
          },
          {
            q: '我能在家外使用自己的家中服务器吗？',
            a:
              '可以，通过Tailscale等私有VPN网络或其他安全隧道，并使用支持你的服务器的客户端应用。不要把Ollama开放到公共互联网；它默认不要求身份验证。',
          },
          {
            q: 'iPhone能离线生成图像吗？',
            a:
              '可以，据这些应用的页面和评测所述，使用Draw Things、Genva和Haplo AI等应用，下载数GB的模型之后即可。生成速度比桌面GPU慢，还会让手机发热；Draw Things还提供可选的云端模式。',
          },
          {
            q: '角色扮演和陪伴类应用对青少年安全吗？',
            a:
              '默认并不安全。好几款应用分级为18+或设有仅限成人的模式，一些是会保存对话的云服务，而设备端模型没有服务器端过滤。请使用Apple屏幕使用时间和应用分级限制，并阅读本指南中的安全提示。',
          },
          {
            q: '本地AI能在iPad上用吗？',
            a:
              '大多可以。本指南中的许多应用列出了对iPad的支持，同样适用内存规则。iPad方面的具体建议见[如何在平板上运行AI](/zh/power-local-llm/run-ai-on-tablet-ipad-android)。',
          },
          {
            q: 'iPhone与安卓在本地AI上相比如何？',
            a:
              'iPhone上手更简单，但限制更多；安卓允许终端应用，开源选择更多，但因手机而异。对比请见[安卓本地AI指南](/zh/power-local-llm/local-ai-on-android-guide)和[Galaxy与iPhone设备端AI对比](/zh/local-llms/galaxy-vs-iphone-on-device-ai-2026)。',
          },
          {
            q: '应用会在较旧的iPhone上使用Apple的模型吗？',
            a:
              '不会。Apple Intelligence仅限于Apple名单上的设备，从iPhone 15 Pro起。在较旧的iPhone上，请使用自带模型的应用，并遵守内存限制。',
          },
        ],
      },
      related: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[2026年iPhone最佳本地AI应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026)——推荐排名、参考速度和iPhone内存指南。',
          '[安卓本地AI指南](/zh/power-local-llm/local-ai-on-android-guide)——安卓平台的姊妹篇。',
          '[2026年安卓最佳本地AI应用](/zh/power-local-llm/best-local-llm-apps-android-2026)——安卓应用排名。',
          '[Galaxy与iPhone设备端AI对比](/zh/local-llms/galaxy-vs-iphone-on-device-ai-2026)——iPhone与Galaxy的设备端AI对比。',
          '[如何在平板上运行AI](/zh/power-local-llm/run-ai-on-tablet-ipad-android)——iPad和安卓平板。',
          '[最佳移动端LLM模型：Phi-4 Mini、Gemma与SmolLM对比](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm)——该下载哪些小模型。',
          '[移动端本地LLM](/zh/local-llms/mobile-local-llms)——移动端本地LLM基础知识。',
          '[Apple设备端AI与本地LLM对比](/zh/local-llms/apple-on-device-ai-vs-local-llms)——Apple设备端AI与开放本地模型的对比。',
          '[在手机上搭建本地语音助手](/zh/power-local-llm/voice-assistant-local-mobile-offline)——手机上的离线语音。',
          '[聊天助手对比](/zh/power-local-llm/local-llm-chat-assistants-compared)、[语音与音频应用对比](/zh/power-local-llm/local-llm-voice-audio-compared)、[图像与视频应用对比](/zh/power-local-llm/local-llm-images-video-compared)和[知识与检索应用对比](/zh/power-local-llm/local-llm-knowledge-retrieval-compared)——类别对比。',
          '[本地AI应用目录](/zh/directory)——目录中的每一款本地AI应用。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    last_full_refresh: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'IA local en iPhone en 2026: qué es posible, qué no y las apps de iPhone que cubrimos',
    seoTitle: 'IA local en iPhone 2026: qué funciona y qué no funciona',
    intro:
      'Un iPhone reciente puede ejecutar un modelo de lenguaje útil sin conexión una vez descargado el modelo, pero solo modelos pequeños: de 1 a 4 mil millones de parámetros con 6-8 GB de RAM. Esta guía recoge qué puede hacer la IA local en iPhone, qué es posible solo en parte y qué no es posible, explica Apple Intelligence, el framework Foundation Models y las reglas de la App Store, y enlaza las apps de iPhone que cubrimos en el directorio de PromptQuorum con la tarea para la que sirven. Los datos de las apps proceden de las reseñas de PromptQuorum, basadas en fuentes públicas salvo que una reseña indique que se probó en la práctica; esta guía no volvió a probar ninguna app.',
    metaDescription:
      'Qué puede y qué no puede hacer la IA local en iPhone en 2026: límites de chip y RAM, Apple Intelligence, reglas de la App Store y apps según el uso.',
    heroImage: '/images/local-ai-on-iphone-guide-hero-es.webp',
    twitterDescription:
      'IA local en iPhone en 2026: mapa de capacidades, niveles de RAM, Apple Intelligence, límites de la App Store, lista de lo imposible y las apps de iPhone que cubrimos por uso.',
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM no publicada por Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB de RAM según lo informado)',
      'iPhone 16 Pro (A18 Pro, 8 GB de RAM según lo informado)',
      'iPhone 15 Pro (A17 Pro, 8 GB de RAM según lo informado)',
      'iPhone 14 Pro (A16, 6 GB de RAM según lo informado)',
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
      'Propietarios de iPhone y iPad, usuarios preocupados por la privacidad, viajeros y desarrolladores que quieren saber qué puede y qué no puede hacer la IA en el dispositivo y qué app instalar para cada tarea.',
    readTime: '45 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'IA local en iPhone',
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
      '**Un iPhone reciente puede ejecutar un modelo de lenguaje pequeño (de 1 a 4 mil millones de parámetros con 6-8 GB de RAM) sin conexión tras una única descarga, y cubre chat, resúmenes, traducción, dictado, preguntas sobre documentos y tareas de imagen pequeñas; no puede ejecutar modelos de 30B o más, sustituir a Siri ni ejecutar agentes en segundo plano.** Apple Intelligence añade un modelo integrado en el iPhone 15 Pro y posteriores, y en el iPhone no hay un servidor Ollama ni Docker.',
    quickAnswerTop: {
      es: {
        question: '¿Qué puede hacer la IA local en un iPhone?',
        answer:
          'Un iPhone reciente puede ejecutar sin conexión modelos de 1 a 4 mil millones de parámetros para chat, resúmenes, traducción, dictado, preguntas sobre documentos y tareas de imagen pequeñas. No puede ejecutar modelos de 30B o más, sustituir a Siri ni mantener agentes en segundo plano. Apple Intelligence añade un modelo integrado en el iPhone 15 Pro y posteriores.',
        bullets: [
          '6 GB de RAM: modelos de 1-2B; 8 GB: 3-4B; 12 GB: 4B con holgura',
          'Apple Intelligence requiere iPhone 15 Pro o posterior',
          'Sin Ollama, Docker ni servidor Linux en el teléfono',
          'Usa un servidor doméstico para modelos de 7B-70B en modo remoto',
          'Comprueba la privacidad con el modo avión y el Informe de privacidad de apps',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'Puntos clave',
        anchor: '#key-takeaways',
      },
      {
        label: 'Empieza aquí: tres apps para instalar',
        anchor: '#start-here',
      },
      {
        label: 'Seis respuestas rápidas antes de instalar',
        anchor: '#quick-answers',
      },
      {
        label: 'Datos rápidos',
        anchor: '#quick-facts',
      },
      {
        label: 'Mapa de capacidades: qué puede hacer la IA local en iPhone',
        anchor: '#capability-map',
      },
      {
        label: 'Chip y RAM en la práctica: qué modelo ejecuta cada iPhone',
        anchor: '#iphone-hardware',
      },
      {
        label: 'Neural Engine, GPU y CPU: qué ejecuta realmente el modelo',
        anchor: '#chips-engines',
      },
      {
        label: 'Nivel de teléfono, app y tamaño de modelo de un vistazo',
        anchor: '#tier-app-model',
      },
      {
        label: 'Tu primer modelo local en 15 minutos',
        anchor: '#first-run-15-minutes',
      },
      {
        label: 'Apple Intelligence y el framework Foundation Models',
        anchor: '#apple-intelligence',
      },
      {
        label: 'Reglas de la App Store que condicionan la IA local en iPhone',
        anchor: '#app-store-rules',
      },
      {
        label: 'En qué es mejor y peor el iPhone frente a Android',
        anchor: '#iphone-vs-android',
      },
      {
        label: 'Asistentes de chat: las apps principales en el dispositivo',
        anchor: '#chat-assistants',
      },
      {
        label: 'Asistentes de chat: apps nuevas, de nicho e híbridas',
        anchor: '#chat-more',
      },
      {
        label: 'Apps inactivas, obsoletas o fuera de la App Store',
        anchor: '#chat-quiet-apps',
      },
      {
        label: 'Visión y cámara: preguntas sobre fotos y capturas de pantalla',
        anchor: '#vision-camera',
      },
      {
        label: 'Voz: dictado, transcripción, lectura en voz alta, asistentes sin conexión y Siri',
        anchor: '#voice-speech',
      },
      {
        label: 'Documentos, PDF y recuperación en el teléfono',
        anchor: '#documents-rag',
      },
      {
        label: 'Traducción en el dispositivo',
        anchor: '#translation',
      },
      {
        label: 'Generación de imágenes y edición de fotos',
        anchor: '#image-generation-editing',
      },
      {
        label: 'Bibliotecas de fotos y búsqueda en la galería',
        anchor: '#photos-gallery-search',
      },
      {
        label: 'Notas, bases de conocimiento y marcadores',
        anchor: '#notes-knowledge',
      },
      {
        label: 'Preguntas sobre salud y bienestar',
        anchor: '#health-wellness',
      },
      {
        label: 'Apps de roleplay y de compañía, con notas de seguridad de contenido',
        anchor: '#roleplay-companions',
      },
      {
        label: 'Hogar inteligente y agentes',
        anchor: '#smart-home-agents',
      },
      {
        label: 'Modo remoto: el iPhone como cliente ligero de tu propio servidor',
        anchor: '#remote-mode',
      },
      {
        label:
          'Rutas para desarrolladores: Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch y Foundation Models',
        anchor: '#developer-paths',
      },
      {
        label: 'Privacidad y telemetría en la práctica',
        anchor: '#privacy-telemetry',
      },
      {
        label: 'Límites de batería, calor y memoria',
        anchor: '#battery-thermal-memory',
      },
      {
        label: 'Lo que funciona solo en parte',
        anchor: '#works-partly',
      },
      {
        label: 'Imposible o aún no disponible en iPhone',
        anchor: '#not-possible',
      },
      {
        label: 'Ruta de decisión: tengo este iPhone y quiero esto',
        anchor: '#decision-path',
      },
      {
        label: 'Errores comunes',
        anchor: '#common-mistakes',
      },
      {
        label: 'Fuentes',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Un iPhone reciente puede ejecutar un modelo de lenguaje útil sin conexión una vez descargado el modelo.** El techo realista es un modelo de 1B-4B parámetros con 6-8 GB de RAM; los modelos de 7B-8B en formato de pocos bits solo caben en los iPhone de 12 GB y siguen siendo lentos. Espera buenos borradores, resúmenes, traducciones y respuestas a preguntas, y un razonamiento, un código y un conocimiento del mundo más débiles que los de los modelos en la nube de la clase de ChatGPT.',
          '**La RAM, no el nombre del chip, fija el tamaño del modelo.** Apple no publica la RAM de los iPhone; las cifras de esta guía son especificaciones ampliamente difundidas. Un iPhone de 4 GB está por debajo del mínimo práctico, 6 GB significa modelos de 1-2B, 8 GB significa 3-4B y 12 GB añade margen.',
          '**Apple Intelligence y el framework Foundation Models son una segunda vía, independiente.** El modelo propio de Apple ya está en el teléfono (iPhone 15 Pro y posteriores), no requiere descarga y pueden usarlo apps de terceros. Por sí solo no es una app de chat general, y se aplican límites de idioma y región.',
          '**La App Store impone límites estrictos.** No hay Docker ni se puede ejecutar Ollama en el teléfono; las apps no pueden descargar código que cambie sus funciones (guía 2.5.2 de Apple), así que cada motor se incluye dentro de la app y solo se descargan los archivos del modelo. Por eso la IA local en iPhone consiste en instalar una app, no en montar un stack.',
          '**Gran parte de lo que quiere el propietario de un iPhone tiene una app reseñada en nuestro directorio:** chat, preguntas con la cámara, dictado y transcripción, chat con documentos, traducción, generación de imágenes, búsqueda de fotos, notas, preguntas de salud, roleplay, control del hogar inteligente y acceso remoto a un servidor doméstico. Esta guía enlaza la mayoría de las apps de iPhone de nuestro directorio con la capacidad para la que sirven.',
          '**Varias cosas no son posibles o solo lo son en parte:** modelos de 30B o más, razonamiento de calidad frontier, agentes siempre activos en segundo plano, sustituir a Siri por un modelo propio, el ajuste fino (fine-tuning) en el teléfono y una garantía de privacidad basada solo en una etiqueta de la App Store.',
          '**"Cero telemetría" hay que comprobarlo, no darlo por bueno.** Varias apps que dicen mantener el chat en el dispositivo siguen enviando informes de fallos, eventos de uso o solicitudes web opcionales; el capítulo de privacidad muestra cómo verificarlo con el modo avión y el Informe de privacidad de apps.',
          '**Empieza poco a poco:** instala una app, descarga un modelo de 1-2 GB con Wi-Fi, activa el modo avión y haz una pregunta. Si funciona, has verificado toda la ruta sin conexión en menos de 15 minutos.',
        ],
      },
      startHere: {
        id: 'start-here',
        title: 'Empieza aquí: tres apps para instalar',
        content: [
          '**¿Tienes poco tiempo? Instala una de estas tres, descarga un modelo que quepa en la RAM de tu iPhone y pruébalo una vez en modo avión.** Las recomendaciones salen de los capítulos y las reseñas de esta guía, no de benchmarks; el resto de la guía explica cada elección.',
          '**Otros buenos puntos de partida:** en un iPhone de 12 GB, prueba [Noema](/es/power-local-llm/noema-review) o [Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) con un modelo Gemma 4; en un iPhone de 4 GB, usa [Reins](/es/power-local-llm/reins-review) o [Enchanted](/es/power-local-llm/enchanted-review) (marcada como poco activa en el capítulo de mantenimiento) con un servidor doméstico, porque ese nivel está por debajo del mínimo práctico para chatear en el dispositivo.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Los principiantes pueden empezar con PocketPal AI, los usuarios avanzados con Locally AI y el modelo propio de Apple, y los desarrolladores con el framework Foundation Models o MLX Swift; en todos los casos, el tamaño del modelo depende de la RAM del iPhone.',
          },
          {
            type: 'plain-terms',
            text: 'Una app, un modelo acorde con tu RAM, una prueba en modo avión.',
          },
        ],
        itemHeadings: true,
        columns: ['Tu nivel', 'Instalar o usar', 'Primer modelo', 'Por qué esta opción'],
        rows: [
          {
            'Tu nivel': 'Principiante',
            'Instalar o usar': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Primer modelo': '1-2B con 6 GB; 3-4B con 8 GB',
            'Por qué esta opción': 'Gratuita y de código abierto, y el recorrido del primer arranque de esta guía la usa.',
          },
          {
            'Tu nivel': 'Avanzado',
            'Instalar o usar': '[Locally AI](/es/power-local-llm/locally-ai-review)',
            'Primer modelo': '3-4B con 8 GB, o el modelo propio de Apple sin descarga',
            'Por qué esta opción': 'Encaja con Siri y Atajos en un iPhone de 8 GB y puede usar el modelo integrado de Apple en los iPhone con Apple Intelligence.',
          },
          {
            'Tu nivel': 'Desarrollador',
            'Instalar o usar': 'Framework Foundation Models o MLX Swift',
            'Primer modelo': 'El modelo integrado de Apple, o tu propio modelo',
            'Por qué esta opción': 'Foundation Models es la API nativa de Swift de Apple y necesita hardware compatible con Apple Intelligence; MLX Swift ejecuta tu propio modelo. El capítulo "Rutas para desarrolladores" cubre el resto.',
          },
        ],
      },
      quickAnswers: {
        id: 'quick-answers',
        title: 'Seis respuestas rápidas antes de instalar',
        content:
          '**Estas son las seis preguntas que los lectores hacen primero; cada respuesta remite al capítulo que la explica.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La RAM decide el tamaño del modelo, 3-5 GB de almacenamiento libre alojan un primer modelo y una prueba en modo avión muestra si la app funciona sin conexión.',
          },
          {
            type: 'plain-terms',
            text: 'La RAM elige el modelo, el almacenamiento lo guarda y el modo avión lo demuestra.',
          },
        ],
        items: [
          '**¿Qué modelo debo descargar?** Ajústate a tu RAM: 1-2B con 6 GB, 3-4B con 8 GB, más margen con 12 GB, donde los modelos de 7-8B siguen siendo lentos. Un iPhone de 4 GB está por debajo del mínimo práctico. Consulta "Nivel de teléfono, app y tamaño de modelo de un vistazo".',
          '**¿Cuánto almacenamiento necesito?** Libera primero 3-5 GB, porque un archivo de modelo pesa 1-4 GB; instala una app a la vez, ya que los archivos de modelo duplicados consumen almacenamiento rápido. Consulta "Tu primer modelo local en 15 minutos".',
          '**¿Qué tan rápido funcionará?** PromptQuorum no ha medido la velocidad en ningún iPhone para esta guía, y las velocidades orientativas de nuestra comparativa de iPhone no son mediciones nuevas. Un modelo más pequeño responde más rápido; anota la velocidad en tus primeras preguntas de prueba y revisa los ajustes de la app por si muestra una cifra de tokens por segundo.',
          '**¿Qué app es privada?** Ninguna puede darse por privada solo por su etiqueta de la App Store, porque "se ejecuta en tu dispositivo" y "no envía nada" son afirmaciones distintas. Lee la etiqueta de privacidad y la política, haz la prueba del modo avión y comprueba después Ajustes > Privacidad y seguridad > Informe de privacidad de apps; las apps de código abierto como PocketPal AI se pueden inspeccionar. Consulta "Privacidad y telemetría en la práctica".',
          '**¿Qué puedo hacer sin internet?** Según el mapa de capacidades de esta guía, un iPhone reciente puede encargarse sin conexión del chat, las preguntas sobre la cámara, el dictado y la transcripción, el chat con documentos y la traducción una vez descargado el modelo; los modelos de 30B o más, el razonamiento de calidad frontier y los agentes siempre activos en segundo plano no son posibles. Consulta "Mapa de capacidades".',
          '**¿Qué leo después?** Sigue "Tu primer modelo local en 15 minutos" y luego usa la "Ruta de decisión" si tienes una tarea concreta en mente.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Alcance:** primero el iPhone, y el iPad cuando las mismas apps funcionan en él. Android se trata en la guía hermana [Guía de IA local en Android](/es/power-local-llm/local-ai-on-android-guide).',
          '**iPhone compatibles con Apple Intelligence (lista de Apple):** iPhone 15 Pro y 15 Pro Max, la familia iPhone 16 incluido el 16e, la familia iPhone 17 incluidos el 17e y el Air, y los iPhone 18 Pro, 18 Pro Max e iPhone Duo de 2026. El iPhone 15 y los modelos anteriores que no son Pro no figuran en la lista.',
          '**Niveles de RAM usados en esta guía (informados, no publicados por Apple):** 4 GB (iPhone 12, 13, SE), 6 GB (iPhone 13 Pro, 14, 14 Pro, 15), 8 GB (iPhone 15 Pro, serie 16, 16e, 17), 12 GB (iPhone 17 Pro y Pro Max).',
          '**Tamaños de modelo que caben:** unos 1.1 GB para un modelo de 1.7B a 4 bits, unos 2.5-3.7 GB para modelos de 3-4B; las velocidades orientativas proceden de nuestro análisis de apps para iPhone y no son mediciones nuevas.',
          '**Motores dentro de las apps de iPhone:** llama.cpp (GGUF), Apple MLX, MLC LLM, Google LiteRT-LM, ExecuTorch, Core ML, Apple Foundation Models; algunas apps combinan varios.',
          '**Apps enlazadas en esta guía:** las apps de iOS y iPadOS de nuestro directorio que tienen una reseña de PromptQuorum, además de apps complementarias para iPhone de herramientas autoalojadas.',
          '**Lo que PromptQuorum no hizo:** esta guía no volvió a probar las apps. Los datos proceden de nuestras reseñas, las fichas de las tiendas, los sitios de los desarrolladores y la documentación de Apple, y cada reseña indica qué se probó.',
        ],
      },
      whatIsPossible: {
        id: 'capability-map',
        title: 'Mapa de capacidades: qué puede hacer la IA local en iPhone',
        content:
          '**La IA local en iPhone cubre la mayoría de las tareas cotidianas de lenguaje y varias tareas multimedia, pero no todo lo que hacen los asistentes en la nube.** La tabla clasifica cada capacidad como Funciona, Parcial o Aún no, y el capítulo siguiente nombra las apps. "Funciona" significa que una app de iPhone reseñada lo hace con el modelo en el teléfono; "Parcial" significa que funciona con límites de tamaño, velocidad, precisión o hardware; "Aún no" significa que ninguna app de iPhone reseñada lo hace en el dispositivo.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'La IA local en iPhone puede encargarse en el dispositivo de chat, borradores, resúmenes, traducción, dictado, preguntas sobre documentos y tareas de imagen pequeñas, maneja solo en parte la búsqueda de fotos, la generación de imágenes y los agentes, y aún no puede ejecutar modelos grandes ni sustituir a Siri.',
          },
          {
            type: 'plain-terms',
            text:
              'Piensa en un iPhone como un asistente de bolsillo con un cerebro pequeño y privado. Responde preguntas sencillas, reescribe textos, transcribe voz y describe fotos sin enviar nada fuera, pero desconoce datos que sí conoce un modelo grande en la nube, se ralentiza en las respuestas largas y se calienta. Para las preguntas difíciles, mucha gente combina el teléfono con un ordenador en casa o una app en la nube.',
          },
        ],
        columns: ['Capacidad', 'En iPhone', 'Configuración típica', 'Capítulo'],
        rows: [
          {
            'Capacidad': 'Chat, borradores, resúmenes',
            'En iPhone': 'Funciona',
            'Configuración típica': 'Modelo de 1-4B, GGUF o MLX',
            'Capítulo': 'Asistentes de chat',
          },
          {
            'Capacidad': 'Preguntar sobre una foto o captura',
            'En iPhone': 'Funciona',
            'Configuración típica': 'Modelo de visión pequeño u OCR',
            'Capítulo': 'Visión y cámara',
          },
          {
            'Capacidad': 'Dictado y transcripción',
            'En iPhone': 'Funciona',
            'Configuración típica': 'Whisper o Parakeet',
            'Capítulo': 'Voz y habla',
          },
          {
            'Capacidad': 'Lectura en voz alta (texto a voz)',
            'En iPhone': 'Funciona',
            'Configuración típica': 'Voces del sistema o TTS en el dispositivo',
            'Capítulo': 'Voz y habla',
          },
          {
            'Capacidad': 'Asistente manos libres con Siri',
            'En iPhone': 'Parcial',
            'Configuración típica': 'Atajos, no sustituye a Siri',
            'Capítulo': 'Voz y habla',
          },
          {
            'Capacidad': 'Chat con tus PDF y notas',
            'En iPhone': 'Funciona',
            'Configuración típica': 'Modelo pequeño más índice local',
            'Capítulo': 'Documentos y RAG',
          },
          {
            'Capacidad': 'Traducción',
            'En iPhone': 'Funciona',
            'Configuración típica': 'Modelo pequeño ajustado para traducir',
            'Capítulo': 'Traducción',
          },
          {
            'Capacidad': 'Generación de imágenes',
            'En iPhone': 'Parcial',
            'Configuración típica': 'Modelos de difusión pequeños, lento',
            'Capítulo': 'Generación de imágenes',
          },
          {
            'Capacidad': 'Edición de fotos (recorte, retoque)',
            'En iPhone': 'Funciona',
            'Configuración típica': 'Modelos de segmentación Core ML',
            'Capítulo': 'Generación de imágenes',
          },
          {
            'Capacidad': 'Búsqueda con IA en tu fototeca',
            'En iPhone': 'Parcial',
            'Configuración típica': 'Índice en el dispositivo o servidor propio',
            'Capítulo': 'Fotos y galería',
          },
          {
            'Capacidad': 'Notas y marcadores con IA',
            'En iPhone': 'Parcial',
            'Configuración típica': 'La IA suele ejecutarse en un servidor',
            'Capítulo': 'Notas y conocimiento',
          },
          {
            'Capacidad': 'Preguntas sobre datos de salud',
            'En iPhone': 'Parcial',
            'Configuración típica': 'Apple Intelligence, no es médico',
            'Capítulo': 'Salud y bienestar',
          },
          {
            'Capacidad': 'Roleplay y compañía',
            'En iPhone': 'Funciona',
            'Configuración típica': 'Modelo de chat pequeño, existen variantes en la nube',
            'Capítulo': 'Roleplay y compañía',
          },
          {
            'Capacidad': 'Control del hogar inteligente',
            'En iPhone': 'Parcial',
            'Configuración típica': 'El servidor doméstico hace el trabajo',
            'Capítulo': 'Hogar inteligente y agentes',
          },
          {
            'Capacidad': 'Agentes autónomos siempre activos',
            'En iPhone': 'Aún no',
            'Configuración típica': 'iOS limita el trabajo en segundo plano',
            'Capítulo': 'No es posible',
          },
          {
            'Capacidad': 'Ejecutar modelos de 30B o más',
            'En iPhone': 'Aún no',
            'Configuración típica': 'Usa un servidor doméstico en remoto',
            'Capítulo': 'Modo remoto',
          },
          {
            'Capacidad': 'Ajuste fino de un modelo en el teléfono',
            'En iPhone': 'Aún no',
            'Configuración típica': 'Entrena en un Mac o una GPU',
            'Capítulo': 'Rutas para desarrolladores',
          },
        ],
      },
      hardware: {
        id: 'iphone-hardware',
        title: 'Chip y RAM en la práctica: qué modelo ejecuta cada iPhone',
        content:
          '**La RAM fija el modelo más grande que puede alojar un iPhone; el chip fija la rapidez con la que responde.** Un modelo de lenguaje debe estar en memoria mientras genera, así que un modelo de 3B a 4 bits (unos 2-2.7 GB en disco) necesita aproximadamente esa cantidad de RAM libre, además de la que usan iOS y otras apps. iOS cierra una app que pide demasiado, y Apple no publica la RAM de los iPhone, así que las cifras siguientes son especificaciones ampliamente difundidas (también usadas en nuestro artículo [Mejores apps de IA local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026)) y no declaraciones de Apple.',
        columns: ['Nivel de iPhone', 'RAM (informada)', 'Tamaño de modelo realista', 'Veredicto'],
        rows: [
          {
            'Nivel de iPhone': 'iPhone 12, 13, SE',
            'RAM (informada)': '4 GB',
            'Tamaño de modelo realista': 'Menos de 1B, si acaso',
            'Veredicto': 'Usa el modo remoto',
          },
          {
            'Nivel de iPhone': 'iPhone 13 Pro, 14, 14 Pro, 15',
            'RAM (informada)': '6 GB',
            'Tamaño de modelo realista': '1-2B (archivo de unos 1.1 GB)',
            'Veredicto': 'Chat básico y borradores',
          },
          {
            'Nivel de iPhone': 'iPhone 15 Pro, 16, 16e, 17',
            'RAM (informada)': '8 GB',
            'Tamaño de modelo realista': '3-4B (unos 2.5-3.7 GB)',
            'Veredicto': 'Nivel típico de 3-4B',
          },
          {
            'Nivel de iPhone': 'iPhone 17 Pro, 17 Pro Max',
            'RAM (informada)': '12 GB',
            'Tamaño de modelo realista': '4B con holgura, 7-8B de pocos bits',
            'Veredicto': 'Nivel de RAM más alto',
          },
          {
            'Nivel de iPhone': 'iPhone 18 Pro, Pro Max, Duo',
            'RAM (informada)': 'No publicada',
            'Tamaño de modelo realista': 'Trátalo como 12 GB hasta que se confirme',
            'Veredicto': 'PromptQuorum no tiene cifras',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Un modelo que en teoría cabe puede ser cerrado igualmente por iOS al cambiar de app. En un iPhone de 6 GB quédate con modelos de 1-2B aunque un archivo de 3-4B se descargue sin error; las propias páginas de Apple sobre el iPhone no indican cifra de RAM, así que la tabla de niveles es una guía, no una garantía.',
          },
        ],
      },
      hardwareChips: {
        id: 'chips-engines',
        title: 'Neural Engine, GPU y CPU: qué ejecuta realmente el modelo',
        content:
          '**Un iPhone tiene tres lugares donde ejecutar un modelo, y cuál usa una app depende de su motor, no del teléfono.** La CPU es flexible pero lenta, la GPU (a la que se accede mediante la API gráfica Metal de Apple) se encarga de las grandes operaciones matriciales en las que se apoyan la mayoría de las apps de chat, y el Neural Engine es un acelerador de función fija al que pueden dirigirse Core ML de Apple y el nuevo framework Core AI. Apple describe Core AI como diseñado para Apple silicon, con memoria unificada y el Neural Engine; es nuevo en la generación de iOS 27, así que la mayoría de las apps de esta guía todavía no lo usan.',
        items: [
          '**Apps con llama.cpp (archivos GGUF):** [PocketPal AI](/es/power-local-llm/pocketpal-ai-review), [Pocket AI](/es/power-local-llm/pocket-ai-review) y [LLM Farm](/es/power-local-llm/llm-farm-review) usan Metal en la GPU. Admiten cualquier archivo GGUF, así que pueden funcionar modelos de Hugging Face.',
          '**Apps con Apple MLX:** [Locally AI](/es/power-local-llm/locally-ai-review), [fullmoon](/es/power-local-llm/fullmoon-review) y [MLXHub](/es/power-local-llm/mlxhub-review) usan el framework de arrays MLX de Apple, diseñado para la memoria unificada de Apple silicon.',
          '**Apps multiformato:** [Noema](/es/power-local-llm/noema-review) admite GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models en una sola app, por lo que su uso de hardware varía según el formato del modelo (declaración del desarrollador en la reseña).',
          '**Apps con modelos compilados:** [MLC Chat](/es/power-local-llm/mlc-chat-review) ejecuta modelos compilados con la cadena de herramientas de MLC LLM; [Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) usa el runtime LiteRT-LM de Google.',
          '**El modelo propio de Apple:** Apple Intelligence ejecuta el modelo de Apple mediante frameworks del sistema. Apps como [Compass - Local AI](/es/power-local-llm/compass-local-ai-review) y [Pajdo](/es/power-local-llm/pajdo-review) lo llaman en lugar de incluir un modelo propio.',
          '**Consecuencia práctica:** dos apps que ejecutan el mismo tamaño de modelo en el mismo iPhone pueden diferir en velocidad, uso de memoria y calor. Ejecuta el mismo prompt en dos apps antes de borrar un modelo que ya hayas descargado.',
        ],
      },
      tierTable: {
        id: 'tier-app-model',
        title: 'Nivel de teléfono, app y tamaño de modelo de un vistazo',
        content:
          '**Elige primero por nivel de RAM y después por necesidad.** La tabla ofrece un punto de partida basado en nuestras reseñas y nuestro análisis; no es un benchmark. Los modelos cambian rápido, así que consulta [Mejores modelos LLM móviles: Phi-4 Mini, Gemma y SmolLM](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm) para ver las opciones actuales de modelos pequeños.',
        columns: ['Nivel de teléfono', 'Empieza con', 'Tamaño de modelo', 'Nota'],
        rows: [
          {
            'Nivel de teléfono': 'iPhone de 4 GB',
            'Empieza con': 'Cliente remoto de un servidor doméstico',
            'Tamaño de modelo': 'Ninguno en el teléfono',
            'Nota': 'Reins, Enchanted, OpenClient',
          },
          {
            'Nivel de teléfono': 'iPhone de 6 GB',
            'Empieza con': 'PocketPal AI o Locally AI',
            'Tamaño de modelo': '1-2B (unos 1.1 GB)',
            'Nota': 'Los modelos más pequeños',
          },
          {
            'Nivel de teléfono': 'iPhone de 8 GB',
            'Empieza con': 'PocketPal AI, Private LLM, Gallery',
            'Tamaño de modelo': '3-4B (2.5-3.7 GB)',
            'Nota': 'Nivel de precio medio',
          },
          {
            'Nivel de teléfono': 'iPhone de 12 GB',
            'Empieza con': 'Noema o Locally AI',
            'Tamaño de modelo': '4B, o 7-8B con lentitud',
            'Nota': 'Cabe más contexto',
          },
          {
            'Nivel de teléfono': 'Teléfono con Apple Intelligence',
            'Empieza con': 'Compass o Locally AI',
            'Tamaño de modelo': 'Modelo de Apple, sin descarga',
            'Nota': 'Se aplican límites de idioma',
          },
          {
            'Nivel de teléfono': 'Cualquier teléfono, dictado',
            'Empieza con': 'Whisper Notes o Aiko',
            'Tamaño de modelo': 'Clase Whisper, pequeño',
            'Nota': 'Pago único',
          },
          {
            'Nivel de teléfono': 'Cualquier teléfono, documentos',
            'Empieza con': 'Private Mind o MemoryAI',
            'Tamaño de modelo': 'Chat pequeño más índice',
            'Nota': 'Comprueba los límites de archivos',
          },
        ],
      },
      firstRun: {
        id: 'first-run-15-minutes',
        title: 'Tu primer modelo local en 15 minutos',
        content:
          '**Puedes verificar toda la ruta sin conexión en un iPhone en unos 15 minutos: instala una app, descarga un modelo pequeño con Wi-Fi, activa el modo avión y haz una pregunta.** Los pasos usan [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) como ejemplo porque es gratuita y de código abierto, pero cualquier app de chat de los capítulos siguientes funciona igual. Los tiempos son estimaciones y dependen de tu conexión y de tu teléfono.',
        numberedItems: [
          {
            title: 'Minuto 0-2: comprueba el nivel de tu iPhone',
            whyItMatters:
              'Busca tu modelo en la tabla de RAM anterior. 6 GB significa un modelo de 1-2B, 8 GB significa 3-4B y 12 GB da margen. Libera antes 3-5 GB de almacenamiento, porque un archivo de modelo ocupa de 1 a 4 GB.',
          },
          {
            title: 'Minuto 2-4: instala una app',
            whyItMatters:
              'Instala una sola app desde la App Store, por ejemplo PocketPal AI, Locally AI o Google AI Edge Gallery. No instales tres apps con tres modelos cada una; los archivos de modelo duplicados consumen almacenamiento muy rápido.',
          },
          {
            title: 'Minuto 4-9: descarga un modelo con Wi-Fi',
            whyItMatters:
              'Elige el tamaño para tu nivel, por ejemplo un modelo de la clase Qwen3 1.7B en 6 GB o Phi-4 Mini o Gemma 4 E2B en 8 GB (consulta los modelos por nivel). La descarga es el único paso que necesita internet. Mantén la app abierta y la pantalla encendida hasta que termine.',
          },
          {
            title: 'Minuto 9-10: activa el modo avión',
            whyItMatters:
              'Activa el modo avión y deja el Wi-Fi apagado. Así compruebas que el modelo se ejecuta en el teléfono y ves si la app intenta conectarse a internet.',
          },
          {
            title: 'Minuto 10-13: haz tres preguntas de prueba',
            whyItMatters:
              'Pide un resumen en tres puntos de un párrafo que pegues, la reescritura de un correo con otro tono y una pregunta de hechos cuya respuesta conozcas. Anota la velocidad y si el teléfono se calienta.',
          },
          {
            title: 'Minuto 13-15: revisa los ajustes y limpia',
            whyItMatters:
              'Abre el benchmark o los ajustes de la app si los tiene, anota los tokens por segundo y revisa más tarde Ajustes > Privacidad y seguridad > Informe de privacidad de apps para ver con qué dominios contactó la app. Borra los modelos que no vayas a usar.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Si la app se cierra o se reinicia durante la primera respuesta, el modelo es demasiado grande para el teléfono. Bórralo y elige el siguiente tamaño menor en lugar de bajar otros ajustes.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence y el framework Foundation Models',
        content:
          '**Apple Intelligence da a cada iPhone compatible un modelo de lenguaje integrado que no requiere descarga, y el framework Foundation Models permite que apps de terceros lo usen.** La página para desarrolladores de Apple describe el framework como una API nativa de Swift con acceso directo al mismo modelo en el dispositivo que impulsa Apple Intelligence. Solo funciona en los dispositivos y en los idiomas que admite Apple Intelligence.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Apple Intelligence ejecuta el modelo propio de Apple en el dispositivo en el iPhone 15 Pro y posteriores, y el framework Foundation Models permite que apps de terceros como Locally AI, Compass y Pajdo lo usen sin incluir su propio modelo.',
          },
          {
            type: 'plain-terms',
            text:
              'Apple ya incluyó un modelo de lenguaje pequeño dentro del iPhone. No lo descargas, pero tampoco puedes cambiarlo por otro. Las apps pueden tomarlo prestado para responder preguntas en el dispositivo, por eso varias apps nuevas necesitan un iPhone y un iOS recientes en lugar de la descarga de un modelo grande.',
          },
        ],
        items: [
          '**Lista de dispositivos (página de Apple Intelligence de Apple):** iPhone 15 Pro y Pro Max (A17 Pro), iPhone 16, 16 Plus, 16e y la familia 16 Pro (A18 y A18 Pro), iPhone 17, 17e, 17 Pro, 17 Pro Max y Air (A19 y A19 Pro), e iPhone Duo, 18 Pro y 18 Pro Max (A20 Pro).',
          '**Idiomas:** Apple Intelligence requiere que Siri y el idioma del dispositivo estén en un idioma admitido. La lista de Apple incluye chino (simplificado y tradicional), danés, neerlandés, inglés, francés, alemán, italiano, japonés, coreano, noruego, portugués, español, sueco, turco y vietnamita. Apple añade que algunas funciones pueden no estar disponibles en todas las regiones o idiomas.',
          '**Siri AI (beta de iOS 27):** Apple indica inglés, francés, japonés, coreano, portugués y español para empezar, dice que al principio no estará disponible en la UE en iOS y que algunas funciones del lado del servidor tienen límites diarios de uso. Es independiente de las apps de chat en el dispositivo de esta guía.',
          '**Qué ofrece el framework (Apple, guía de iOS 27):** acceso a Apple Foundation Models y, mediante un protocolo Language Model, a modelos en la nube como Claude y Gemini o a cualquier proveedor que lo cumpla; prompts multimodales que pasan imágenes junto con texto; herramientas de Vision como OCR y lectura de códigos de barras que un modelo puede llamar en el dispositivo; y Dynamic Profiles para cambiar modelos, herramientas e instrucciones en una misma sesión.',
          '**Base de iOS 26 (no se volvió a verificar en esta actualización):** el framework se lanzó por primera vez con iOS 26. Consulta la documentación actual de Apple sobre el límite de contexto y las funciones admitidas antes de diseñar en torno a él.',
          '**Private Cloud Compute:** Apple Intelligence puede pasar las solicitudes más grandes a los servidores de Apple. Apple dice que los datos nunca se almacenan y se usan solo para tu solicitud. Eso no es procesamiento en el dispositivo, así que trata "Apple Intelligence" y "sin conexión" como afirmaciones distintas.',
          '**Apps de esta guía que usan el modelo de Apple:** [Locally AI](/es/power-local-llm/locally-ai-review) (interfaz de chat), [Compass - Local AI](/es/power-local-llm/compass-local-ai-review) (chat y OCR de capturas), [Pajdo](/es/power-local-llm/pajdo-review) (preguntas sobre Apple Health), [LocalMindAI](/es/power-local-llm/localmindai-review) (modelo de Apple o modelos descargados), [Noema](/es/power-local-llm/noema-review) y [Reins](/es/power-local-llm/reins-review) (Apple Foundation Models como un backend más), [Hillnote](/es/power-local-llm/hillnote-review) (notas) y [AI on Device](/es/power-local-llm/ai-on-device-review), que en cambio incluye su propio modelo de 3B pero requiere un dispositivo compatible con Apple Intelligence.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Si solo quieres reescribir, resumir notificaciones y usar las Herramientas de escritura en Mail, Mensajes y Notas, no necesitas una app de chat. Si quieres una ventana de chat, elegir modelo o preguntas sobre documentos, instala una de las apps de esta guía; para el equilibrio entre el modelo de Apple y los modelos abiertos consulta [IA en el dispositivo de Apple frente a LLM locales](/es/local-llms/apple-on-device-ai-vs-local-llms).',
          },
        ],
      },
      appStoreRules: {
        id: 'app-store-rules',
        title: 'Reglas de la App Store que condicionan la IA local en iPhone',
        content:
          '**La App Store explica la mayoría de las diferencias entre la IA local en iPhone y en el escritorio.** Las Directrices de Revisión de Apps de Apple se aplican a todas las apps, y cuatro de ellas importan aquí: apps autocontenidas, uso de energía, servicios en segundo plano y uso compartido de datos. Este capítulo cita el texto de la regla y ofrece nuestra lectura; no es asesoramiento jurídico y Apple puede cambiar las reglas.',
        items: [
          '**Sin código descargado que cambie la app (guía 2.5.2).** Texto de Apple (traducido): las apps "no pueden descargar, instalar ni ejecutar código que introduzca o cambie funciones o funcionalidad de la app". Las apps de IA local respetan esta regla incluyendo el motor en la app y descargando pesos de modelo, que son datos. Es nuestra lectura, no una declaración de Apple.',
          '**Sin servidor Ollama en el teléfono.** Ollama no ofrece una app para iPhone, y el sandbox de la App Store no deja una vía práctica para ejecutar un servidor Ollama ni un contenedor Docker. Existen algunas apps de shell en sandbox, pero no te dan un servidor de modelos locales.',
          '**Solo APIs públicas (guía 2.5.1).** Las apps solo pueden usar APIs públicas, por lo que Foundation Models, Core ML, Metal y MLX son las vías disponibles y el acceso privado al Neural Engine no lo es.',
          '**Energía y calor (guía 2.4.2).** Apple dice (traducido) que las apps "no deben agotar rápidamente la batería, generar calor excesivo ni someter a los recursos del dispositivo a un esfuerzo innecesario". La generación sostenida pone a prueba esa línea, por eso las apps limitan o detienen las ejecuciones largas.',
          '**El uso en segundo plano es limitado (guía 2.5.4).** Las apps multitarea solo pueden usar servicios en segundo plano para los fines previstos, como reproducción de audio, ubicación, finalización de tareas y notificaciones locales. Un modelo no puede seguir generando ni actuar como agente indefinidamente cuando sales de la app; [Reins](/es/power-local-llm/reins-review) indica que la generación en segundo plano requiere iOS 26.',
          '**Límites de memoria.** iOS limita cuánta RAM puede usar una app en primer plano. Apple publica un permiso (entitlement) de límite de memoria ampliado (com.apple.developer.kernel.increased-memory-limit) que los desarrolladores pueden solicitar; no indicamos la cantidad exacta que permite. No puedes ver si una app lo tiene, así que prueba un modelo con el benchmark de la propia app antes de depender de él.',
          '**JIT y compilación en tiempo de ejecución.** Los motores de escritorio suelen compilar código en tiempo de ejecución; las apps de iOS incluyen motores compilados de antemano. Es un comportamiento general de la plataforma, señalado por varios proyectos de motores, y una de las razones por las que los motores de iPhone van por detrás de los de escritorio en funciones.',
          '**Uso compartido de datos (guías 5.1.1 y 5.1.2).** Las apps deben enlazar una política de privacidad, explicar qué datos recopilan, obtener permiso antes de compartir datos personales con terceros "incluida la IA de terceros" (traducido) y no pueden reutilizar los datos sin consentimiento. Las etiquetas de privacidad de la App Store las rellena el desarrollador, algo a lo que vuelve el capítulo de privacidad.',
          '**Sideloading y tiendas alternativas.** En la UE existen tiendas de apps alternativas bajo la Ley de Mercados Digitales, pero cada desarrollador decide dónde publicar. Ninguna de las apps de esta guía necesita una; [LLM Farm](/es/power-local-llm/llm-farm-review) es la excepción, que actualmente hay que compilar desde el código fuente en Xcode.',
          '**Betas en TestFlight.** Varios desarrolladores ofrecen compilaciones en TestFlight (por ejemplo [Aiko](/es/power-local-llm/aiko-review) para una prueba gratuita y [fullmoon](/es/power-local-llm/fullmoon-review) para compilaciones más recientes). Las compilaciones de TestFlight tienen duración limitada y están sin terminar; úsalas para probar, no para datos que no puedas perder.',
        ],
      },
      iphoneVsAndroid: {
        id: 'iphone-vs-android',
        title: 'En qué es mejor y peor el iPhone frente a Android',
        content:
          '**El iPhone es más fácil para empezar y más limitado para ampliar; Android es lo contrario.** Los iPhone vienen en pocas configuraciones conocidas, incluyen el modelo propio de Apple y ejecutan todas las apps a través de una sola tienda. Los teléfonos Android varían mucho más en RAM y chip, permiten apps de terminal y sideloading, y tienen su propia pila de modelos en el dispositivo. Es una comparación de plataformas a partir de información pública; para cifras hardware por hardware consulta [Galaxy frente a iPhone en IA en el dispositivo](/es/local-llms/galaxy-vs-iphone-on-device-ai-2026) y la guía hermana [Guía de IA local en Android](/es/power-local-llm/local-ai-on-android-guide).',
        columns: ['Tema', 'iPhone', 'Android'],
        rows: [
          {
            'Tema': 'Esfuerzo de configuración',
            'iPhone': 'App Store, un toque',
            'Android': 'Play Store o APK',
          },
          {
            'Tema': 'Modelo integrado',
            'iPhone': 'Apple Foundation Models',
            'Android': 'Modelos del fabricante y de Google',
          },
          {
            'Tema': 'Ejecutar Ollama en el teléfono',
            'iPhone': 'No hay app de Ollama para iPhone',
            'Android': 'Posible con Termux (ver guía)',
          },
          {
            'Tema': 'Techo de RAM',
            'iPhone': 'Unos 12 GB en los Pro',
            'Android': 'Varía; comprueba cada teléfono',
          },
          {
            'Tema': 'Formatos de modelo',
            'iPhone': 'GGUF, MLX, Core ML, LiteRT',
            'Android': 'GGUF, LiteRT, MLC y más',
          },
          {
            'Tema': 'Atajos y automatización',
            'iPhone': 'Atajos, App Intents',
            'Android': 'Tasker e intents',
          },
          {
            'Tema': 'Número de apps',
            'iPhone': 'Menos opciones de código abierto',
            'Android': 'Más opciones de código abierto',
          },
          {
            'Tema': 'Trabajo en segundo plano',
            'iPhone': 'Muy limitado',
            'Android': 'Más flexible, aun así limitado',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Muchas apps de esta guía también funcionan en Android ([PocketPal AI](/es/power-local-llm/pocketpal-ai-review), [MLC Chat](/es/power-local-llm/mlc-chat-review), [KernelAI](/es/power-local-llm/kernelai-review), [LLM Hub](/es/power-local-llm/llm-hub-review)), por lo que un hogar con las dos plataformas a menudo puede usar la misma app en cada una. Consulta los detalles de Android en [Mejores apps de IA local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026).',
          },
        ],
      },
      chatMain: {
        id: 'chat-assistants',
        title: 'Asistentes de chat: las apps principales en el dispositivo',
        content:
          '**Para el chat general en un iPhone, empieza con una de las cinco apps que compara nuestro análisis de apps para iPhone y después mira las apps más nuevas de abajo.** Cada línea indica qué hace la app y su límite sincero. Los detalles proceden de las reseñas de PromptQuorum enlazadas, las fichas de las tiendas y las páginas de los desarrolladores; salvo que una reseña diga que probó la app, considera que la velocidad y la calidad no están medidas. Para las opciones ordenadas y las velocidades orientativas consulta [Mejores apps de IA local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026), y para toda la categoría de chat consulta [Asistentes de chat comparados](/es/power-local-llm/local-llm-chat-assistants-compared).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'PocketPal AI es la opción gratuita por defecto, Private LLM la opción de pago con Siri y Atajos, Locally AI la app gratuita con MLX y Apple Foundation Models, y Google AI Edge Gallery la app gratuita de Gemma 4 para iPhone.',
          },
          {
            type: 'plain-terms',
            text:
              'Elige una app de chat, descarga un modelo que quepa en tu iPhone y reserva el resto de las apps de esta guía para tareas especiales como documentos, voz o un servidor doméstico. Los precios proceden de las reseñas enlazadas y de las páginas de las tiendas y pueden cambiar; consulta la tienda antes de comprar.',
          },
        ],
        items: [
          '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review): gratuita, de código abierto (MIT), ejecuta cualquier modelo GGUF de Hugging Face y tiene un benchmark integrado. Límite: chat independiente sin acción de Atajos ni de Siri mencionada; compras opcionales dentro de la app para ajustes preestablecidos premium.',
          '[Private LLM](/es/power-local-llm/private-llm-review): $4.99 una sola vez para iPhone, iPad y Mac, más de 140 modelos, sin cuenta. El desarrollador dice que se integra con Siri y Atajos. Límite: código cerrado y lista de modelos curada, así que no puedes cargar archivos arbitrarios.',
          '[Locally AI](/es/power-local-llm/locally-ai-review): gratuita, del equipo de LM Studio, basada en Apple MLX, con una acción de Atajos, Apple Foundation Models como opción de chat y un enlace opcional con LM Studio en un Mac. Límite: sin importación arbitraria de GGUF, código cerrado, iOS 18.1 o posterior.',
          '[Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review): app gratuita de Google para Gemma 4 con modo de razonamiento, habilidades de agente y entrada de imagen y audio. Límite: solo modelos LiteRT-LM, está etiquetada como beta experimental, y su etiqueta de privacidad de la App Store muestra algunos diagnósticos del dispositivo.',
          '[Noema](/es/power-local-llm/noema-review): gratuita, ejecuta GGUF, MLX, ExecuTorch, Core ML y Apple Foundation Models en una sola app, con chat con documentos en el dispositivo. Límite: código cerrado, sin RAM mínima publicada, iOS o iPadOS 18 o posterior.',
          '[Off Grid AI](/es/power-local-llm/off-grid-ai-review): app gratuita y de código abierto (MIT) con chat GGUF, modelos de imagen Stable Diffusion y voz a texto Whisper en el dispositivo, en iOS, Android, macOS y Windows. Límite: una app que hace muchas tareas implica más almacenamiento y más ajustes.',
          '[Pocket AI](/es/power-local-llm/pocket-ai-review): gratuita, llama.cpp con Metal, 28 modelos de las familias Qwen, Gemma, Llama, Mistral, Phi y DeepSeek (según el desarrollador), iPhone 12 o posterior. Límite: la entrada de voz con Whisper en el dispositivo requiere el desbloqueo Pro de pago.',
          '[KernelAI](/es/power-local-llm/kernelai-review): gratuita, 53 modelos abiertos descargables de 112 MB a 3.11 GB, con documentos, visión y Atajos según su ficha. Límite: código cerrado, y nuestra reseña se basa en fuentes públicas, no en una prueba práctica.',
          '[On Device AI](/es/power-local-llm/on-device-ai-review): más de 200 modelos GGUF y MLX descargables, además de transcripción, importación de documentos y RSS, texto a voz en el dispositivo y enlaces de automatización. Límite: una lista amplia de funciones en una app de código cerrado; lee su sección de privacidad.',
          '[Enclave AI](/es/power-local-llm/enclave-ai-review): gratuita con compras dentro de la app, sin conexión en iPhone, iPad y Mac según su ficha, sin cuenta, con interacción con documentos y Atajos según nuestro análisis. Límite: código cerrado y niveles de pago.',
        ],
      },
      chatMore: {
        id: 'chat-more',
        title: 'Asistentes de chat: apps nuevas, de nicho e híbridas',
        content:
          '**Estas apps cubren necesidades más concretas: chat de precio único, chat solo con el modelo de Apple, personajes, proyectos de privacidad de código abierto e híbridas que mezclan el dispositivo y la nube.** Fíjate sobre todo en los avisos de las híbridas, porque una app híbrida solo es local mientras te quedes en su modo en el dispositivo.',
        items: [
          '[Cloak: Local AI](/es/power-local-llm/cloak-local-ai-review): de pago único ($1.99 en la tienda de EE. UU.), descarga un modelo recomendado, añade Notas de voz y un Recap semanal creado a partir de Fotos, Ubicación y Notas de voz en el iPhone. Límite: sin selector de modelo y el nombre del modelo no se publica.',
          '[Compass - Local AI](/es/power-local-llm/compass-local-ai-review): gratuita, responde con Apple Intelligence en el dispositivo y lee capturas de pantalla con OCR en el dispositivo; requiere iOS o iPadOS 26. Límite: la búsqueda web es opcional y envía tu consulta a DuckDuckGo o Brave cuando se activa.',
          '[AI on Device](/es/power-local-llm/ai-on-device-review): $4.99 una sola vez, un modelo de 3B cuantizado a 2 bits, requiere iOS 26 y un dispositivo compatible con Apple Intelligence. Límite: sin actualización desde el 13 de octubre de 2025, así que considérala inactiva.',
          '[Haplo AI](/es/power-local-llm/haplo-ai-review): descarga modelos abiertos como Qwen y Phi para chat, entrada de imagen y generación de imágenes, sin cuenta. Límite: app de pago; nuestra reseña se basa en fuentes públicas.',
          '[Oscilla](/es/power-local-llm/oscilla-review): gratuita, más de 40 modelos abiertos, voz en tiempo real, memoria integrada, búsqueda web y análisis de archivos e imágenes; etiqueta "Data Not Collected" de Apple. Límite: iOS 26 o posterior, código cerrado y sin actualización desde el 21 de mayo de 2026.',
          '[Frankly AI](/es/power-local-llm/frankly-ai-review): modelos descargables en el dispositivo con personajes orientados a tareas y sin cuenta; límite diario gratuito, Pro desbloquea el resto. Límite: tope de uso en el nivel gratuito.',
          '[LLM Studio Go](/es/power-local-llm/llm-studio-go-review): gratuita y con anuncios, chat, voz, imágenes, música y habla con modelos GGUF y MLX, iOS o iPadOS 18. Límite: anuncios y, según la reseña, no tiene relación con LM Studio a pesar del nombre.',
          '[Local AI Chat - pocket](/es/power-local-llm/local-ai-chat-pocket-review): chat sin conexión freemium con generación de imágenes y Atajos según su eslogan, iOS o iPadOS 18.6 o posterior. Límite: sin actualización desde el 27 de mayo de 2026 y compras dentro de la app de tipo suscripción.',
          '[Loci AI](/es/power-local-llm/loci-ai-review-offline-local-ai): gratuita en iPhone, iPad, Android, Mac y Windows, elige automáticamente un modelo que se ajuste al hardware. Límite: PromptQuorum no ha verificado lo que afirma el desarrollador sobre la potencia de los modelos.',
          '[Ensu](/es/power-local-llm/ensu-review): gratuita, de código abierto (AGPL), de Ente Labs, con entrada de imagen y dictado por voz local. Límite: el propio desarrollador dice que aún no es tan capaz como ChatGPT o Claude Code, y la versión sigue siendo 0.x.',
          '[MemoryAI](/es/power-local-llm/memoryai-review): chat gratuito sin conexión con preguntas sobre documentos, una memoria editable y un Modo infantil protegido con PIN; iOS 16.4+ y 4 GB+ de RAM. Límite: su política de privacidad enumera eventos de uso e informes de fallos; código cerrado.',
          '[Secret AI](/es/power-local-llm/secret-ai-review): chat sin conexión con personajes, Skills y herramientas MCP en modelos GGUF, MNN y MLX. Límite: según su política de privacidad, las llamadas a herramientas MCP y los servidores remotos opcionales pueden enviar datos fuera del dispositivo, y la política es anterior a esas funciones.',
          '[LocalMindAI](/es/power-local-llm/localmindai-review): chat para iPhone y iPad, memoria, reconocimiento de voz y lectura de documentos, con el modelo de Apple o modelos descargados; iOS 26. Límite: llevaba pocos días en la tienda cuando se reseñó, y nuestra reseña se basa en fuentes públicas.',
          '[Solair AI](/es/power-local-llm/solair-ai-review): asistente local primero con una alternativa opcional en la nube con tu propia clave; iOS 26. Límite: la alternativa es la nube, así que comprueba qué modo responde.',
          '[Liquid Apollo](/es/power-local-llm/liquid-apollo-review): gratuita, ejecuta modelos Liquid AI LFM2 (de 350M a 2.6B) sin conexión, con un modo opcional de OpenRouter y backends personalizados; iOS 18. Límite: no es solo local; el modo OpenRouter necesita tu propia clave e internet.',
          '[Kai 9000](/es/power-local-llm/kai-9000-review): asistente de código abierto con memoria persistente y herramientas. Límite: según su reseña, envía los mensajes a un servicio en la nube por defecto; solo se ejecuta en local después de descargar un modelo en el dispositivo.',
          '[CompactifAI APP](/es/power-local-llm/compactifai-app-review): app gratuita de Multiverse Computing que ofrece modelos comprimidos. Límite: el texto actual de la tienda describe solo modelos por API, así que no está verificado qué se ejecuta en el teléfono.',
          '[Atomic Chat](/es/power-local-llm/atomic-chat-review): app gratuita y de código abierto (Apache 2.0) para macOS, Windows, Linux, iOS y Android con modelos GGUF, MLX y ONNX y una API local compatible con OpenAI. Límite: es un proyecto multiplataforma, así que lee la reseña para saber qué incluye la versión de iPhone.',
          '[LLM Hub](/es/power-local-llm/llm-hub-review): suite para Android y iPhone con un agente compatible con MCP, generación de imágenes y música, traducción, Whisper y chat de voz, además de un nivel Premium de pago. Límite: su licencia es PolyForm Noncommercial, no una licencia de código abierto en el sentido habitual.',
          '[Llamatik](/es/power-local-llm/llamatik-review): gratuita, MIT, un chatbot sin conexión que su propia ficha describe como una demostración experimental del SDK de Kotlin del desarrollador. Límite: su política de privacidad y su etiqueta de la tienda enumeran analíticas y registro de fallos de Firebase.',
          '[Layla](/es/power-local-llm/layla-review): $19.99 una sola vez en Android e iOS, modelos GGUF con compañeros basados en personajes, voces y generación de imágenes. Límite: prioriza Android, y existe un modo opcional Layla Cloud.',
        ],
      },
      chatQuiet: {
        id: 'chat-quiet-apps',
        title: 'Apps inactivas, obsoletas o fuera de la App Store',
        content:
          '**Una app sin actualizaciones desde hace más de tres meses puede estar abandonada; compruébalo antes de depender de ella.** Las fechas siguientes proceden de las fichas del directorio de PromptQuorum y de cada reseña. Una app inactiva puede seguir funcionando, pero no recibes correcciones ni modelos nuevos ni ninguna señal de si el desarrollador volverá.',
        items: [
          '[MLC Chat](/es/power-local-llm/mlc-chat-review): app de referencia acelerada con Metal del proyecto MLC LLM. Sin actualización en la App Store desde el 27 de septiembre de 2024, según nuestra reseña. El motor que hay detrás, [MLC LLM](/es/power-local-llm/mlc-llm-explained), sigue activo.',
          '[LLM Farm](/es/power-local-llm/llm-farm-review): última versión 1.4.3 en enero de 2025 y último cambio de código el 30 de enero de 2026. No se puede instalar desde la App Store ni desde TestFlight (su README dice que no está disponible temporalmente); compílala desde el código fuente en Xcode si necesitas sus controles de muestreo.',
          '[fullmoon](/es/power-local-llm/fullmoon-review): gratuita, MIT, ejecuta modelos pequeños con Apple MLX, sin versión nueva desde el 28 de enero de 2025 y sin cambios de código desde el 5 de mayo de 2025.',
          '[Maid](/es/power-local-llm/maid-review): app de chat de código abierto que prioriza Android; su versión para iOS era de sideload y nuestra reseña fecha las versiones de iOS en la 2.0.7 de abril de 2025, así que no es una opción de la App Store.',
          '[Aiko](/es/power-local-llm/aiko-review): sigue a la venta y es útil para transcribir, pero su última actualización fue el 27 de junio de 2026, hace más de tres meses.',
          'Otras apps marcadas como inactivas en esta guía: [Atomic Bot](/es/power-local-llm/atomic-bot-review) (26 de mayo de 2026), [Chapper](/es/power-local-llm/chapper-review) (6 de agosto de 2026), [Enchanted](/es/power-local-llm/enchanted-review) (7 de julio de 2026), [AI CutoutWerk](/es/power-local-llm/ai-cutoutwerk-review) (16 de febrero de 2026) y [pcAI Photo Retouch](/es/power-local-llm/pcai-photo-retouch-review) (20 de febrero de 2026).',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Inactiva es una marca basada en la fecha de las fichas del directorio, no un veredicto sobre la calidad. Antes de pagar por una app de esta lista, abre su página de la App Store y lee tú mismo el historial de versiones.',
          },
        ],
      },
      vision: {
        id: 'vision-camera',
        title: 'Visión y cámara: preguntas sobre fotos y capturas de pantalla',
        content:
          '**Varias apps de iPhone aceptan una imagen junto a tu pregunta y responden en el dispositivo, pero los modelos de visión pequeños se equivocan más que los de la nube.** Existen dos vías: un modelo de visión y lenguaje que descargas (el modelo lee la imagen por sí mismo) y el OCR del sistema más un modelo de texto (el teléfono extrae el texto y después el modelo responde). La guía para desarrolladores de iOS 27 de Apple dice que el framework Foundation Models ahora acepta imágenes con texto y permite que un modelo llame en el dispositivo a herramientas de Vision como OCR y lectura de códigos de barras.',
        items: [
          '[Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review): Ask Image y Audio Scribe con modelos Gemma 4. Límite: solo modelos LiteRT-LM; Google informa cifras de memoria del fabricante, no mediciones de PromptQuorum.',
          '[Compass - Local AI](/es/power-local-llm/compass-local-ai-review): lee las capturas adjuntas con OCR en el dispositivo y responde con Apple Intelligence. Límite: el OCR lee texto, no describe una escena; requiere iOS o iPadOS 26.',
          '[Oscilla](/es/power-local-llm/oscilla-review): análisis de archivos e imágenes con modelos con visión como MiniCPM-V según su ficha. Límite: iOS 26 o posterior y sin actualización desde el 21 de mayo de 2026.',
          '[Haplo AI](/es/power-local-llm/haplo-ai-review): entrada de imagen y generación de imágenes en una sola app. Límite: nuestra reseña se basa en fuentes públicas, así que la calidad del modelo no está medida.',
          '[Ensu](/es/power-local-llm/ensu-review): entrada de imagen con modelos descargados, gratuita y de código abierto. Límite: versión 0.x; el desarrollador dice que aún no está al nivel de las grandes herramientas en la nube.',
          '[KernelAI](/es/power-local-llm/kernelai-review): incluye la visión entre sus funciones con 53 modelos descargables. Límite: qué modelos aceptan imágenes varía según el modelo.',
          '[MemoryAI](/es/power-local-llm/memoryai-review): comprensión de imágenes con modelos de visión tras descargar un modelo. Límite: tienes que elegir tú mismo un modelo con capacidad de visión.',
          '[Reins](/es/power-local-llm/reins-review): envía adjuntos de imagen, PDF y CSV a un modelo de tu propio servidor, o a un modelo MLX local. Límite: la calidad depende del modelo de servidor que elijas.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'No uses un modelo de visión pequeño en el dispositivo para nada en lo que una lectura errónea tenga un coste, como etiquetas de medicamentos, documentos legales o identificar plantas o setas para comerlas. Trata las respuestas como un punto de partida y comprueba la fuente.',
          },
        ],
      },
      voice: {
        id: 'voice-speech',
        title: 'Voz: dictado, transcripción, lectura en voz alta, asistentes sin conexión y Siri',
        content:
          '**La voz a texto es una de las tareas más consolidadas en el dispositivo; los desarrolladores informan de modelos de clase Whisper que se ejecutan en teléfonos recientes, y varias apps cobran una sola vez en lugar de por minuto.** El texto a voz y los asistentes manos libres son más irregulares. Para una canalización que construyas tú mismo consulta [Crea un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline), para la categoría [Apps de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared) y para comparar motores [Comparativa de STT Whisper local](/es/power-local-llm/local-whisper-stt-comparison).',
        items: [
          '[Whisper Notes](/es/power-local-llm/whisper-notes-review): $7.99 una sola vez, ejecuta Whisper, Parakeet y SenseVoice en iPhone, iPad y Mac con Apple silicon, con etiquetas de hablante; la política de privacidad dice que el audio y las transcripciones nunca salen del dispositivo. Límite: código cerrado; la reseña se basa en fuentes públicas, no en pruebas prácticas.',
          '[Aiko](/es/power-local-llm/aiko-review): transcripción Whisper en el dispositivo para Mac, iPhone y Vision Pro, 100 idiomas, compatible con Atajos, una compra para todas las plataformas. Límite: última actualización el 27 de junio de 2026, así que inactiva.',
          '[Lyonesse](/es/power-local-llm/lyonesse-review): transcripción sin conexión, notas de reuniones y chat con documentos para iPhone, iPad y Mac; su app para Apple Watch graba por sí sola y transfiere al iPhone, que hace la transcripción. Límite: lo que afirma el desarrollador sobre el procesamiento no está verificado de forma independiente.',
          '[OpenWhispr](/es/power-local-llm/openwhispr-review): dictado y notas de reuniones con licencia MIT, con modelos locales Whisper o Parakeet o un proveedor en la nube que elijas. Límite: que tu voz permanezca en el dispositivo depende del modelo que elijas.',
          '[AquaVoice](/es/power-local-llm/aquavoice-review): dictado por voz que escribe en la app activa. Límite: según la reseña es un servicio en la nube, y se incluye aquí para que no lo confundas con un dictado local.',
          '[Ensu](/es/power-local-llm/ensu-review) y [MemoryAI](/es/power-local-llm/memoryai-review): dictado por voz local (Ensu) y voz manos libres con entrada de voz en el dispositivo y lectura en voz alta (MemoryAI) dentro de una app de chat. Límite: la calidad de la voz sigue la del modelo de chat pequeño que hay detrás.',
          '[Oscilla](/es/power-local-llm/oscilla-review), [LLM Studio Go](/es/power-local-llm/llm-studio-go-review) y [Pocket AI](/es/power-local-llm/pocket-ai-review): voz en tiempo real, chat de voz con habla y entrada Whisper en el dispositivo (Pro de pago), respectivamente. Límite: la voz añade carga de memoria y batería además del modelo de chat.',
          '[Castmates](/es/power-local-llm/castmates-review): llamadas de voz con personajes que, según el desarrollador, se ejecutan en el teléfono. Límite: código cerrado, así que la afirmación depende del desarrollador.',
          '[Cloak: Local AI](/es/power-local-llm/cloak-local-ai-review): convierte las Notas de voz en notas o chats. Límite: un único modelo fijo.',
          '[Home Assistant Assist](/es/power-local-llm/home-assistant-assist-review): el asistente de voz dentro de Home Assistant, local con Whisper, Piper y Wyoming según su reseña; no es una app independiente para iPhone. Límite: necesita un servidor de Home Assistant y un agente LLM opcional que es en parte experimental.',
          '[Murmur](/es/power-local-llm/murmur-review): compone música instrumental para fotos, vídeos y juegos en el dispositivo con un desbloqueo Pro de pago único. Límite: sin voces.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Siri y Atajos: [Private LLM](/es/power-local-llm/private-llm-review) indica integración con Siri y Atajos, [Locally AI](/es/power-local-llm/locally-ai-review) y [Aiko](/es/power-local-llm/aiko-review) ofrecen acciones de Atajos, y nuestro análisis de apps para iPhone describe la acción de Atajos Usar modelo, que puede enviar un prompt al modelo de Apple en el dispositivo. Ninguna de ellas sustituye a la propia Siri; le pides a Siri que ejecute un atajo que llama a la app.',
          },
        ],
      },
      documents: {
        id: 'documents-rag',
        title: 'Documentos, PDF y recuperación en el teléfono',
        content:
          '**Chatear con un puñado de PDF o notas funciona en un iPhone, pero las bibliotecas enteras pertenecen a un servidor doméstico.** El chat con documentos en el dispositivo divide los archivos en fragmentos, los indexa con un modelo de embeddings pequeño y pasa los mejores fragmentos al modelo de chat. Los modelos pequeños tienen ventanas de contexto cortas, así que las respuestas pueden omitir contenido y es posible que se inventen citas. Para la búsqueda a escala de biblioteca consulta [Apps de conocimiento y recuperación comparadas](/es/power-local-llm/local-llm-knowledge-retrieval-compared).',
        items: [
          '[Private Mind](/es/power-local-llm/private-mind-review): chat de código abierto (MIT) de Software Mansion que responde preguntas sobre tus PDF y archivos de texto con recuperación en el dispositivo y citas de las fuentes, con React Native ExecuTorch. Límite: la versión 1.3.0 añadió un interruptor Web opcional que descarga páginas, así que funciona sin conexión por defecto, pero no cuando esa función está activada.',
          '[MemoryAI](/es/power-local-llm/memoryai-review): preguntas sobre documentos y una Agent Memory editable. Límite: código cerrado y los eventos de uso salen del teléfono.',
          '[LocalMindAI](/es/power-local-llm/localmindai-review): lee tus documentos en el dispositivo con el modelo de Apple o uno descargado. Límite: iOS 26 y muy reciente cuando se reseñó.',
          '[Noema](/es/power-local-llm/noema-review): chat con documentos en el dispositivo en sus cinco formatos de modelo. Límite: código cerrado; sin cifra de RAM publicada.',
          '[Lyonesse](/es/power-local-llm/lyonesse-review): chat con tus propios documentos junto a las transcripciones. Límite: el foco está en el Apple Watch y las funciones de reuniones.',
          '[Arbiter](/es/power-local-llm/arbiter-local-ai-chat-review): mantiene los documentos subidos en el dispositivo para hacer resúmenes en un iPhone 13 Pro o posterior (unos 6 GB de RAM o más), y puede conectarse a LM Studio, Ollama o a la app complementaria Arbiter for Mac para usar un modelo más grande. Límite: las respuestas de modelos más grandes salen del teléfono hacia tu ordenador.',
          '[KernelAI](/es/power-local-llm/kernelai-review) y [Enclave AI](/es/power-local-llm/enclave-ai-review): ambas enumeran funciones de documentos en una app de chat general. Límite: comprueba en la app los límites de tamaño y formato de archivo antes de depender de ella.',
          '[Reins](/es/power-local-llm/reins-review): adjuntos PDF, CSV y de texto enviados a un modelo de tu propio servidor. Límite: el procesamiento ocurre en el servidor, no en el teléfono.',
          '[AnythingLLM Mobile](/es/power-local-llm/anythingllm-mobile-review): Android tiene un modo independiente en el dispositivo y emparejamiento con AnythingLLM Desktop; nuestra reseña indica que la app de iOS aún no se ha publicado. Límite: hasta que llegue a iOS, usa un navegador contra tu propio servidor AnythingLLM.',
        ],
      },
      translation: {
        id: 'translation',
        title: 'Traducción en el dispositivo',
        content:
          '**La traducción encaja de forma natural con un modelo pequeño en el dispositivo, porque la tarea es acotada y varias apps incluyen modelos ajustados para traducir.** PromptQuorum no ha medido la calidad de la traducción en iPhone. Es probable que la calidad baje con idiomas poco frecuentes, modismos y documentos largos, y todos los motores en el dispositivo requieren una descarga por modelo o idioma.',
        items: [
          '[On-Device AI Translator](/es/power-local-llm/on-device-ai-translator-review): traduce en el iPhone con los modelos descargables Hy-MT2, TranslateGemma y Qwen y ofrece la traducción integrada de Apple como motor gratuito; iOS 18.4 o posterior. Límite: los modelos de IA están tras compras dentro de la app cuyos precios no muestran las fuentes, y la política de privacidad es anterior a la app.',
          '[LLM Hub](/es/power-local-llm/llm-hub-review): incluye traducción en su suite para Android e iPhone. Límite: la traducción es una función entre muchas y la licencia es no comercial.',
          'Apps de chat generales como [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Locally AI](/es/power-local-llm/locally-ai-review) también pueden traducir si cargas un modelo multilingüe, como uno de la familia Qwen o Gemma. Límite: sin glosario, sin maquetación de documentos y sin garantía de calidad por idioma.',
          'La app Traducir de Apple y la traducción del sistema son independientes de las apps anteriores y no se verificaron para esta guía; comprueba en la app Traducir si tu par de idiomas se puede descargar para usarlo sin conexión.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Para libros enteros o documentos largos, una ruta de escritorio es más práctica; consulta [Traduce libros con LLM](/es/power-local-llm/translate-books-with-llms-review). La compatibilidad de idiomas de Apple Intelligence es una lista aparte que se trata en el capítulo de Apple Intelligence.',
          },
        ],
      },
      images: {
        id: 'image-generation-editing',
        title: 'Generación de imágenes y edición de fotos',
        content:
          '**Un iPhone puede generar imágenes con modelos de difusión pequeños y editar fotos con modelos de segmentación, pero la generación es lenta, ocupa mucho almacenamiento y calienta el teléfono.** Los archivos de modelo son descargas de varios gigabytes, y PromptQuorum no tiene cifras de velocidad de ninguna app de imágenes para iPhone. Para las ventajas e inconvenientes entre nube y local consulta [Generación de imágenes con IA local frente a la nube](/es/power-local-llm/local-ai-image-generation-vs-cloud) y para la categoría [Apps de imagen y vídeo comparadas](/es/power-local-llm/local-llm-images-video-compared).',
        items: [
          '[Draw Things](/es/power-local-llm/draw-things-review): genera imágenes con Stable Diffusion, SDXL, Flux y otros modelos de difusión en macOS, iOS, iPadOS y visionOS, sin cuenta para la generación local, iOS 15.4 o posterior. Límite: no es 100% local porque también ofrece un modo opcional en la nube; los modelos más grandes necesitan más RAM.',
          '[Genva](/es/power-local-llm/genva-review): app para iPhone y iPad que convierte prompts de texto y fotos en imágenes en el dispositivo, con ampliación de resolución tras una descarga única de modelo. Límite: se lanzó como versión 1.0.0 el 14 de octubre de 2026, así que no tiene trayectoria.',
          '[Haplo AI](/es/power-local-llm/haplo-ai-review), [Off Grid AI](/es/power-local-llm/off-grid-ai-review) y [LLM Studio Go](/es/power-local-llm/llm-studio-go-review): apps de chat que también generan imágenes en el dispositivo (Haplo AI, Off Grid AI con modelos Stable Diffusion, LLM Studio Go también con música y habla). Límite: la calidad y la velocidad de las imágenes quedan por detrás de las apps especializadas.',
          '[Local AI Chat - pocket](/es/power-local-llm/local-ai-chat-pocket-review) y [Layla](/es/power-local-llm/layla-review): chat sin conexión con generación de imágenes, y Layla también con voces y personajes. Límite: Local AI Chat - pocket está inactiva desde el 27 de mayo de 2026; Layla prioriza Android.',
          '[Tina](/es/power-local-llm/tina-review): genera imágenes mediante ComfyUI en un servidor que alojas tú, y también puede ejecutar modelos en el dispositivo. Límite: el paso de imagen necesita tu propio servidor.',
          '[AI CutoutWerk](/es/power-local-llm/ai-cutoutwerk-review): eliminador de fondos y compositor de recortes sin conexión para iPhone, iPad y Mac, con un modelo de segmentación Core ML. Límite: sin actualización desde el 16 de febrero de 2026.',
          '[pcAI Photo Retouch](/es/power-local-llm/pcai-photo-retouch-review): restaura fotos antiguas y aplica estilos artísticos con una IA que, según el desarrollador, se ejecuta por completo en el dispositivo. Límite: modelo sin nombre, código fuente no publicado, sin actualización desde el 20 de febrero de 2026.',
        ],
      },
      photos: {
        id: 'photos-gallery-search',
        title: 'Bibliotecas de fotos y búsqueda en la galería',
        content:
          '**La búsqueda de fotos con IA en iPhone suele ser un cliente de una biblioteca que hace la indexación en otro lugar: en el teléfono con una función opcional, o en un servidor que ejecutas tú.** Las tres bibliotecas siguientes adoptan enfoques distintos, y ninguna añade un modelo de chat. El reconocimiento facial trata datos biométricos, así que comprueba las normas del lugar donde vives tú y las personas de tus fotos antes de activarlo.',
        items: [
          '[Ente Photos](/es/power-local-llm/ente-photos-review): copia de seguridad de fotos de código abierto que, según Ente, tiene cifrado de extremo a extremo; el reconocimiento facial y la búsqueda mágica en lenguaje natural se ejecutan en tu dispositivo y siguen desactivados hasta que los activas. Límite: las fotos se almacenan cifradas en la nube de Ente, y la primera indexación consume batería.',
          '[Immich](/es/power-local-llm/immich-review): copia de seguridad autoalojada de fotos y vídeos con apps para iPhone y Android; la búsqueda inteligente y el reconocimiento facial se ejecutan en un contenedor de aprendizaje automático que alojas tú, instalado con Docker. Límite: necesita un servidor, la base de datos solo guarda metadatos, así que los archivos necesitan una copia de seguridad aparte, y no tiene función de chat ni de LLM.',
          '[Mylio Photos](/es/power-local-llm/mylio-photos-review): biblioteca de fotos, vídeos y documentos con búsqueda SmartTag y reconocimiento facial y de texto que, según Mylio, se ejecutan en tus propios dispositivos; descarga gratuita, planes de suscripción. Límite: Mylio no dice dónde se ejecuta el chatbot de ayuda dentro de la app.',
          'Las galerías web autoalojadas que abres en el navegador del iPhone o en una app complementaria, como [Reseña de PhotoPrism](/es/power-local-llm/photoprism-review), [Reseña de Photoview](/es/power-local-llm/photoview-review) y [Reseña de Home Gallery](/es/power-local-llm/home-gallery-review), se reseñan por separado; lee cada reseña para saber qué se ejecuta dónde.',
        ],
      },
      notes: {
        id: 'notes-knowledge',
        title: 'Notas, bases de conocimiento y marcadores',
        content:
          '**La mayoría de las herramientas de notas y marcadores colocan la IA en un servidor o en un proveedor de modelos que eliges, y la app del iPhone es el cliente de captura y lectura.** Eso puede seguir siendo totalmente privado si el servidor es tuyo y el modelo es local, pero no es inferencia en el dispositivo. Cada reseña indica qué se ejecuta dónde.',
        items: [
          '[Hillnote](/es/power-local-llm/hillnote-review): espacio de notas Markdown local primero para Mac, Windows, iPhone y Android con IA en el dispositivo mediante Ollama y Apple Intelligence, además de modelos en la nube y sincronización opcionales. Límite: Ollama se ejecuta en un ordenador, no en el teléfono, y los modelos en la nube son opcionales pero no locales.',
          '[Logseq](/es/power-local-llm/logseq-review): esquematizador de código abierto y local primero; la versión de base de datos 2.0.2 es una beta cuyo README advierte que es posible perder datos. Límite: la IA llega mediante un servidor MCP opcional, no con un modelo integrado.',
          '[SiYuan](/es/power-local-llm/siyuan-review): espacio de conocimiento autoalojado con licencia AGPL en Windows, macOS, Linux, Android, iOS y HarmonyOS, con funciones de IA opcionales que se conectan a un proveedor de modelos que elijas. Límite: la sincronización en la nube necesita una suscripción o una compra PRO única.',
          '[Karakeep](/es/power-local-llm/karakeep-review): app autoalojada de marcadores y notas con apps nativas para iOS y Android y etiquetado con IA mediante OpenAI o un endpoint local de Ollama. Límite: ejecutas el servidor con Docker, y el etiquetado solo es local si eliges Ollama.',
          '[Linkwarden](/es/power-local-llm/linkwarden-review): archiva una copia de cada página que guardas y puede etiquetar enlaces con un modelo de IA que configures, autoalojado o en una edición Cloud de pago. Límite: la app del iPhone es un cliente; el paso de IA se ejecuta en el servidor.',
          '[Lyonesse](/es/power-local-llm/lyonesse-review) y [Cloak: Local AI](/es/power-local-llm/cloak-local-ai-review): convierten grabaciones en notas (Lyonesse) o en un resumen semanal a partir de Fotos, Ubicación y Notas de voz (Cloak). Límite: ambas son de código cerrado.',
        ],
      },
      health: {
        id: 'health-wellness',
        title: 'Preguntas sobre salud y bienestar',
        content:
          '**Una app de iPhone reseñada responde preguntas sobre tus datos de Apple Health con Apple Intelligence en el dispositivo, y es la única app de salud de nuestro conjunto de apps para iPhone.** Los datos de salud son datos personales sensibles, y un modelo de lenguaje pequeño no es un médico.',
        items: [
          '[Pajdo](/es/power-local-llm/pajdo-review): app gratuita para iPhone, iPad y Apple Watch que convierte los datos de Apple Health en uno de ocho estados de ánimo y, según su sitio web, responde tus preguntas sobre esos datos con Apple Intelligence en el dispositivo. El plan gratuito incluye 5 preguntas a la semana; Pro quita el límite y añade planificación de entrenamientos y un informe para la visita al médico. Límite: código cerrado, iOS 26 o posterior, y que se ejecute en el dispositivo depende de lo que dice el desarrollador.',
          'Las apps de chat generales de los capítulos de chat pueden hablar de sueño, entrenamiento o nutrición en términos generales. Límite: no tienen acceso a tus datos de Salud salvo que una app pida permiso, y los modelos pequeños pueden afirmar datos erróneos con seguridad.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Las respuestas en el dispositivo no son consejo médico y no sustituyen a un médico. No las uses para interpretar síntomas, alertas de frecuencia cardíaca ni dudas sobre medicación; lee la política de privacidad de la app antes de darle acceso a Apple Health.',
          },
        ],
      },
      roleplay: {
        id: 'roleplay-companions',
        title: 'Apps de roleplay y de compañía, con notas de seguridad de contenido',
        content:
          '**El chat de roleplay y de compañía es una parte importante del mercado de apps de IA local para iPhone, y las apps difieren mucho en si el modelo se ejecuta en el teléfono, qué contenido permiten y cómo tratan a los menores.** Local no significa moderado y nube no significa más seguro. Lee la clasificación por edades y los ajustes de contenido para adultos antes de que tú o cualquier persona de tu hogar instale una. Para las interfaces de escritorio consulta [SillyTavern frente a Agnai y RisuAI para roleplay](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        items: [
          '[Castmates](/es/power-local-llm/castmates-review): app gratuita para iPhone con 35 personajes ya preparados, personajes propios y sin cuenta; el desarrollador nombra Impish Llama 3B (Q4_K_M) ejecutándose con llama.cpp tras una descarga de unos 1.9 GB. El plan Pro quita el límite diario de mensajes y desbloquea un modo Mature opcional solo para adultos. Límite: código cerrado, así que lo de que se ejecuta en el dispositivo depende del desarrollador.',
          '[Frankly AI](/es/power-local-llm/frankly-ai-review): modelos en el dispositivo con personajes orientados a tareas y sin cuenta; límite diario gratuito. Límite: los personajes están orientados a tareas, y Pro desbloquea el resto de la app.',
          '[Layla](/es/power-local-llm/layla-review): compañero de IA basado en personajes con personajes de roleplay, voces y generación de imágenes en el dispositivo; $19.99 una sola vez. Límite: existe un modo Layla Cloud opcional que se activa por separado.',
          '[Secret AI](/es/power-local-llm/secret-ai-review): personajes propios en modelos GGUF, MNN y MLX; el desarrollador dice que los chats, los personajes y las fotos se mantienen privados. Límite: según su política de privacidad, las herramientas MCP y los servidores remotos pueden enviar datos fuera del dispositivo.',
          '[HiWaifu](/es/power-local-llm/hiwaifu-review): roleplay con memoria a largo plazo, libros de lore y chats grupales, clasificada 18+. Límite: parece ser un servicio en la nube, y su ficha no dice dónde se ejecuta el modelo.',
          '[Swerve](/es/power-local-llm/swerve-ai-review): chat de historias y personajes con personajes de la comunidad y ramificación. Límite: según su ficha es un servicio en línea, no IA en el dispositivo.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Notas de seguridad, en lenguaje llano. Primero, la edad: varias de estas apps tienen una clasificación 18+ en la App Store o un modo solo para adultos, y un modelo en el dispositivo no tiene un filtro del lado del servidor en el que puedas confiar. Segundo, la privacidad: las apps de roleplay en la nube envían tus conversaciones a un servicio, e incluso las apps locales pueden enviar analíticas. Tercero, la dependencia emocional: el chat de compañía puede parecer personal, y eso es una característica de diseño, no una relación. Cuarto, los datos reales: nunca escribas tu dirección, datos de salud ni información privada de otras personas en un chat de roleplay. Para el iPhone de un menor, usa los límites de contenido y de clasificación de apps de Tiempo de uso de Apple en lugar de fiarte de los ajustes de la propia app.',
          },
        ],
      },
      smartHome: {
        id: 'smart-home-agents',
        title: 'Hogar inteligente y agentes',
        content:
          '**En iPhone, la IA del hogar inteligente y los agentes casi siempre son clientes de software que se ejecuta en un servidor doméstico, porque iOS no mantiene un modelo ni un agente en ejecución en segundo plano.** El teléfono es el micrófono, la pantalla y el mando a distancia; el servidor doméstico hace el trabajo de larga duración. Para una mirada sincera sobre si los agentes locales autónomos son prácticos, consulta [¿Funcionan de verdad los agentes locales autónomos?](/es/power-local-llm/autonomous-local-agents-actually-work).',
        items: [
          '[Home Assistant Assist](/es/power-local-llm/home-assistant-assist-review): asistente de voz dentro de Home Assistant, totalmente local con Whisper, Piper y Wyoming, con agentes LLM opcionales en la nube y con Ollama. Límite: no es una app independiente; la canalización local completa necesita Home Assistant OS.',
          '[Scrypted](/es/power-local-llm/scrypted-review): plataforma de cámaras y NVR de código abierto que transmite cámaras a HomeKit, Google Home y Home Assistant, con resúmenes LLM locales opcionales mediante llama.cpp. Límite: se ejecuta en tu propio servidor, y las grabaciones de cámaras de otras personas conllevan obligaciones legales en muchos lugares.',
          '[Nekoni](/es/power-local-llm/nekoni-review): agente personal autoalojado (Ollama, documentos, habilidades programadas) en un ordenador tuyo, con el que chateas desde un iPhone o un navegador mediante un enlace cifrado directo. Límite: necesita un Mac o una máquina Linux encendidos en todo momento.',
          '[Kai 9000](/es/power-local-llm/kai-9000-review) y [LLM Hub](/es/power-local-llm/llm-hub-review): asistentes con memoria persistente y con un agente compatible con MCP, respectivamente. Límite: el uso de herramientas y la búsqueda web añaden llamadas de red, así que no son funciones sin conexión.',
          '[Atomic Bot](/es/power-local-llm/atomic-bot-review): empaqueta el framework de agentes de código abierto [Reseña de OpenClaw](/es/power-local-llm/openclaw-review) para escritorio y móvil y puede ejecutarse en local o en la nube. Límite: marcada como inactiva en esta guía (última actualización el 26 de mayo de 2026).',
        ],
      },
      remote: {
        id: 'remote-mode',
        title: 'Modo remoto: el iPhone como cliente ligero de tu propio servidor',
        content:
          '**Si tu iPhone se queda pequeño para el modelo que quieres, ejecuta el modelo en un Mac o un PC en casa y usa el iPhone como pantalla.** Es la ruta habitual para llegar a modelos de 7B-70B desde un iPhone. La página de descargas de Ollama enumera macOS, Windows y Linux y ninguna app para iPhone, así que el servidor está en otro sitio (nuestro análisis de apps para iPhone lo recoge). Del lado del servidor, consulta [Guía de LLM locales en Apple Silicon](/es/local-llms/apple-silicon-local-llm-guide-2026), [MLX frente a Ollama y llama.cpp en Mac](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) y [Herramientas de ejecución y servicio comparadas](/es/power-local-llm/local-llm-run-serve-compared).',
        columns: ['App', 'Se conecta a', 'También ejecuta modelos en el teléfono'],
        rows: [
          {
            'App': '[Reins](/es/power-local-llm/reins-review)',
            'Se conecta a': 'Ollama, LM Studio, compatible con OpenAI',
            'También ejecuta modelos en el teléfono': 'Sí, modelos MLX',
          },
          {
            'App': '[Enchanted](/es/power-local-llm/enchanted-review)',
            'Se conecta a': 'Solo Ollama',
            'También ejecuta modelos en el teléfono': 'No',
          },
          {
            'App': '[OpenClient](/es/power-local-llm/openclient-review)',
            'Se conecta a': 'Ollama, LiteLLM, compatible con OpenAI',
            'También ejecuta modelos en el teléfono': 'No',
          },
          {
            'App': '[Chapper](/es/power-local-llm/chapper-review)',
            'Se conecta a': 'LM Studio, Ollama, servidor llama.cpp',
            'También ejecuta modelos en el teléfono': 'Sí, complemento de $4.99',
          },
          {
            'App': '[Tina](/es/power-local-llm/tina-review)',
            'Se conecta a': 'Ollama, llama.cpp, ComfyUI',
            'También ejecuta modelos en el teléfono': 'Sí',
          },
          {
            'App': '[LM Mini](/es/power-local-llm/lm-mini-review)',
            'Se conecta a': 'LM Studio, Ollama, Jan AI, oMLX',
            'También ejecuta modelos en el teléfono': 'Sí',
          },
          {
            'App': '[Arbiter](/es/power-local-llm/arbiter-local-ai-chat-review)',
            'Se conecta a': 'LM Studio, Ollama, Arbiter for Mac',
            'También ejecuta modelos en el teléfono': 'Sí',
          },
          {
            'App': '[LocalMind](/es/power-local-llm/localmind-review)',
            'Se conecta a': 'Ollama, LM Studio, OpenRouter',
            'También ejecuta modelos en el teléfono': 'Sí',
          },
          {
            'App': '[Liquid Apollo](/es/power-local-llm/liquid-apollo-review)',
            'Se conecta a': 'LM Studio, Ollama, OpenRouter',
            'También ejecuta modelos en el teléfono': 'Sí, LFM2',
          },
          {
            'App': '[Locally AI](/es/power-local-llm/locally-ai-review)',
            'Se conecta a': 'LM Studio en un Mac (LM Link)',
            'También ejecuta modelos en el teléfono': 'Sí',
          },
          {
            'App': '[MLXHub](/es/power-local-llm/mlxhub-review)',
            'Se conecta a': 'Sirve un modelo en tu Wi-Fi (Plus)',
            'También ejecuta modelos en el teléfono': 'Sí',
          },
          {
            'App': '[Nekoni](/es/power-local-llm/nekoni-review)',
            'Se conecta a': 'Agente en tu propio ordenador',
            'También ejecuta modelos en el teléfono': 'No',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Lejos de casa necesitas una vía segura hacia el servidor. Una VPN en malla privada como Tailscale es una opción habitual, porque Ollama no exige autenticación por defecto y no debe exponerse a internet a través de un puerto del router. Comprueba en la reseña y los ajustes de cada cliente la compatibilidad con HTTPS y claves de API antes de conectarte.',
          },
          {
            type: 'tip',
            text:
              'Varios de los clientes anteriores dicen que también pueden cargar modelos en el teléfono, lo que los convierte en una buena app única: modelo pequeño sin conexión, modelo grande en casa. Lee [IA local detrás de un cortafuegos y sin conexión](/es/power-local-llm/local-ai-behind-firewall-offline-2026) para configuraciones con cortafuegos y sin conexión.',
          },
        ],
      },
      developers: {
        id: 'developer-paths',
        title:
          'Rutas para desarrolladores: Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch y Foundation Models',
        content:
          '**Los desarrolladores que crean funciones de IA para iPhone eligen entre el modelo propio de Apple, los runtimes de Apple para tu propio modelo y los motores multiplataforma.** La elección decide qué teléfonos, idiomas y reglas de la tienda se aplican. Este capítulo es solo una orientación; lee la documentación de cada proyecto antes de construir.',
        items: [
          '**Framework Foundation Models:** API nativa de Swift de Apple para el modelo en el dispositivo, con imágenes, herramientas de Vision, Dynamic Profiles y, mediante un protocolo Language Model, proveedores en la nube (Apple, guía de iOS de WWDC26). Requiere hardware con Apple Intelligence. Documentación: [Foundation Models](https://developer.apple.com/documentation/FoundationModels).',
          '**Core ML:** framework de Apple para ejecutar modelos convertidos en la CPU, la GPU y el Neural Engine; la ruta consolidada para visión, audio y modelos pequeños. [AI CutoutWerk](/es/power-local-llm/ai-cutoutwerk-review) incluye un modelo de segmentación Core ML. Documentación: [Core ML](https://developer.apple.com/documentation/coreml).',
          '**Core AI:** un nuevo framework que Apple presentó con iOS 27 para llevar tus propios modelos al dispositivo, con memoria unificada y el Neural Engine, y con compilación anticipada. Demasiado nuevo para la mayoría de las apps de esta guía; consulta la [guía de iOS de WWDC26](https://developer.apple.com/wwdc26/guides/ios/).',
          '**MLX Swift:** el framework de arrays MLX de Apple para Swift, detrás de [Locally AI](/es/power-local-llm/locally-ai-review), [fullmoon](/es/power-local-llm/fullmoon-review) y [MLXHub](/es/power-local-llm/mlxhub-review). [mlx-swift](https://github.com/ml-explore/mlx-swift). Para la parte de Python consulta [MLX-LM explicado](/es/power-local-llm/mlx-lm-explained).',
          '**llama.cpp:** el motor en C/C++ con Metal que ejecuta archivos GGUF, detrás de [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) y [Pocket AI](/es/power-local-llm/pocket-ai-review). [llama.cpp](https://github.com/ggml-org/llama.cpp).',
          '**MLC LLM:** runtime basado en compilador con documentación de despliegue en iOS y la app de referencia [MLC Chat](/es/power-local-llm/mlc-chat-review). Consulta [MLC LLM](/es/power-local-llm/mlc-llm-explained) y la [documentación de MLC para iOS](https://llm.mlc.ai/docs/deploy/ios.html).',
          '**ExecuTorch:** el runtime en el dispositivo de PyTorch, usado mediante React Native ExecuTorch en [Private Mind](/es/power-local-llm/private-mind-review) y admitido por [Noema](/es/power-local-llm/noema-review). [ExecuTorch](https://github.com/pytorch/executorch).',
          '**LiteRT-LM:** el runtime de Google detrás de [Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) ([LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)).',
          '**SDK:** [RunAnywhere](/es/power-local-llm/runanywhere-review) (LLM, voz a texto, texto a voz y detección de actividad de voz; licencia propia con condiciones comerciales), [Llamatik](/es/power-local-llm/llamatik-review) (Kotlin Multiplatform, MIT) y [SwiftLM](/es/power-local-llm/swiftlm-review) (servidor Swift MLX para Mac con Apple silicon con la app complementaria SwiftBuddy para iOS).',
          '**Betas en TestFlight:** una forma gratuita de distribuir compilaciones tempranas a los probadores; las compilaciones caducan, así que hay que planificarlo. Las reglas de App Review de Apple se siguen aplicando a la compilación de lanzamiento.',
        ],
      },
      privacy: {
        id: 'privacy-telemetry',
        title: 'Privacidad y telemetría en la práctica',
        content:
          '**"Se ejecuta en tu dispositivo" y "no envía nada" son afirmaciones distintas, y solo la segunda es una garantía de privacidad.** Las etiquetas de privacidad de la App Store las rellena el desarrollador, así que describen lo que el desarrollador dice que hace la app. Un modelo en el dispositivo puede estar dentro de una app que envía informes de fallos, eventos de uso, búsquedas web opcionales o descargas de modelos. Todas las afirmaciones de privacidad de las apps aquí se toman de la política de privacidad de cada app, de su etiqueta de la App Store o de la página del desarrollador, tal como se resumen en la reseña enlazada, y no se verificaron mediante análisis de red. Para una lista de comprobación más detallada consulta [Lista de comprobación de seguridad y privacidad de LLM locales](/es/local-llms/local-llm-security-privacy-checklist).',
        items: [
          '**Qué puede significar "cero telemetría":** que la app no incluye ningún SDK de analíticas. No cubre la descarga del modelo (el servidor ve tu solicitud), la App Store, la búsqueda web opcional, los servidores remotos a los que te conectes ni las copias de seguridad que incluyen datos de la app.',
          '**Etiquetas en nuestras reseñas:** [Oscilla](/es/power-local-llm/oscilla-review) lleva la etiqueta "Data Not Collected" de Apple; [Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) muestra algunos diagnósticos del dispositivo en su etiqueta; [MemoryAI](/es/power-local-llm/memoryai-review) y [Llamatik](/es/power-local-llm/llamatik-review) envían eventos de uso o analíticas e informes de fallos sin contenido de chat, según sus políticas.',
          '**Funciones opcionales que rompen el "sin conexión":** la búsqueda web en [Compass - Local AI](/es/power-local-llm/compass-local-ai-review) (DuckDuckGo o Brave), el interruptor Web en [Private Mind](/es/power-local-llm/private-mind-review), las herramientas MCP en [Secret AI](/es/power-local-llm/secret-ai-review) y el modo OpenRouter en [Liquid Apollo](/es/power-local-llm/liquid-apollo-review).',
          '**Nube por defecto:** [Kai 9000](/es/power-local-llm/kai-9000-review) envía los mensajes a un servicio en la nube por defecto, según su reseña, y solo se ejecuta en local después de descargar un modelo en el dispositivo; [Swerve](/es/power-local-llm/swerve-ai-review) está documentada como un servicio en línea, y [HiWaifu](/es/power-local-llm/hiwaifu-review) parece serlo (su ficha no dice dónde se ejecuta el modelo); [AquaVoice](/es/power-local-llm/aquavoice-review) es dictado en la nube.',
          '**Desfase entre política y versión:** [LM Mini](/es/power-local-llm/lm-mini-review) tiene, según su política de privacidad, una versión fechada en agosto de 2025 que solo describe su conexión con LM Studio, y [Secret AI](/es/power-local-llm/secret-ai-review) tiene una política actualizada por última vez en mayo de 2025, antes de que añadiera herramientas. Compara la fecha con la versión de la app.',
          '**Compruébalo tú mismo, en tres pasos:** (1) Descarga el modelo con Wi-Fi, activa después el modo avión y prueba la app. (2) Usa el teléfono con normalidad durante una semana y abre después Ajustes > Privacidad y seguridad > Informe de privacidad de apps, que según Apple muestra cómo usan las apps los permisos y su actividad de red. (3) Lee la etiqueta de privacidad y la política para ver si hay analíticas, y prefiere una app de código abierto si quieres inspeccionar el código.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Las reseñas de PromptQuorum indican lo que dicen las fuentes de cada app y si la probamos; cuando una reseña dice "no probada en la práctica", las afirmaciones de privacidad son del desarrollador, no nuestras. Esta guía no realizó capturas de red en ninguna app.',
          },
        ],
      },
      batteryThermal: {
        id: 'battery-thermal-memory',
        title: 'Límites de batería, calor y memoria',
        content:
          '**Generar texto mantiene el chip ocupado, así que espera un calor y un consumo de batería apreciables mientras el modelo se ejecuta; el uso ocasional cuesta poco.** PromptQuorum no ha medido el consumo de energía ni el uso de batería en ningún iPhone, y no encontramos ninguna cifra publicada que podamos citar.',
        items: [
          '**Calor:** la generación sostenida puede hacer que iOS reduzca las velocidades de reloj, de modo que los tokens por segundo bajan. El momento varía según el teléfono, la funda, la carga y la temperatura ambiente, y no lo hemos medido.',
          '**Guía 2.4.2:** Apple dice a los desarrolladores que las apps no deben agotar rápidamente la batería ni generar calor excesivo, así que las apps bien diseñadas limitan la longitud o pausan las ejecuciones largas.',
          '**Memoria:** un modelo ocupa RAM mientras está cargado. Si iOS necesita memoria para otra app, puede cerrar la app de chat y el estado de la conversación puede perderse; cierra otras apps pesadas antes de cargar un modelo.',
          '**Cargar mientras generas** añade calor; haz una pausa si el teléfono se siente caliente y evita la luz solar directa o un coche caliente.',
          '**Almacenamiento:** un modelo de 3-4B ocupa unos 2.5-3.7 GB, así que tres apps con tres modelos cada una usan aproximadamente 10 GB. Quédate con una app y uno o dos modelos.',
          '**El modo de bajo consumo** puede ralentizar la generación porque iOS reduce el rendimiento para ahorrar batería; desactívalo en las sesiones largas.',
        ],
      },
      partly: {
        id: 'works-partly',
        title: 'Lo que funciona solo en parte',
        content:
          '**"Parcial" significa que la función existe en iPhone, pero con un límite que debes conocer antes de crear un hábito en torno a ella.**',
        items: [
          '**Voz manos libres con Siri:** los Atajos pueden llamar a una app, pero Siri sigue siendo Siri; no puedes convertir un modelo local en el asistente del sistema. Siri AI de Apple es una beta independiente de iOS 27 que al principio no está disponible en la UE.',
          '**Generación de imágenes:** posible con modelos de difusión pequeños, pero lenta, pesada en almacenamiento y caliente; [Draw Things](/es/power-local-llm/draw-things-review) también ofrece un modo opcional en la nube.',
          '**Búsqueda de fotos:** el paso de IA es opcional en el teléfono ([Ente Photos](/es/power-local-llm/ente-photos-review)) o se ejecuta en un servidor que alojas tú ([Immich](/es/power-local-llm/immich-review)).',
          '**Notas y marcadores:** la app del iPhone es un cliente; el trabajo del modelo ocurre en un servidor o en un proveedor que eliges.',
          '**Agentes:** las tareas cortas en primer plano funcionan; los agentes de larga duración o programados necesitan un servidor doméstico ([Nekoni](/es/power-local-llm/nekoni-review)).',
          '**Preguntas de salud:** posibles con el modelo de Apple en el dispositivo ([Pajdo](/es/power-local-llm/pajdo-review)), pero no sustituyen al consejo médico.',
          '**Documentos largos:** los modelos pequeños tienen ventanas de contexto pequeñas, así que los PDF grandes necesitan fragmentación o un servidor.',
        ],
      },
      notPossible: {
        id: 'not-possible',
        title: 'Imposible o aún no disponible en iPhone',
        content:
          '**Estos son los deseos que más a menudo la gente lleva a la IA local en iPhone y que hoy no cumple ninguna app de iPhone reseñada.** Algunos son límites estrictos del hardware o de las reglas de la App Store; otros son carencias que pueden cerrarse cuando Apple y los desarrolladores de apps lancen nuevos frameworks como Core AI.',
        columns: ['Deseo', 'Estado', 'Por qué', 'En su lugar'],
        rows: [
          {
            'Deseo': 'Modelo de 30B-70B en el teléfono',
            'Estado': 'No es posible',
            'Por qué': 'Necesita mucha más RAM de la que tiene un iPhone',
            'En su lugar': 'Modo remoto a un servidor doméstico',
          },
          {
            'Deseo': 'Razonamiento y código a nivel de la nube',
            'Estado': 'Aún no',
            'Por qué': 'Los modelos pequeños fallan en tareas de varios pasos',
            'En su lugar': 'App en la nube para preguntas difíciles',
          },
          {
            'Deseo': 'Ejecutar Ollama o Docker en el teléfono',
            'Estado': 'No es posible',
            'Por qué': 'No hay app de Ollama ni Docker para iPhone; límites del sandbox',
            'En su lugar': 'Ejecútalos en un Mac o PC',
          },
          {
            'Deseo': 'Sustituir a Siri por tu modelo',
            'Estado': 'No es posible',
            'Por qué': 'Siri la controla el sistema',
            'En su lugar': 'Atajos que llaman a una app',
          },
          {
            'Deseo': 'Agente siempre activo en segundo plano',
            'Estado': 'No es posible',
            'Por qué': 'Servicios en segundo plano limitados (2.5.4)',
            'En su lugar': 'Agente en un servidor doméstico',
          },
          {
            'Deseo': 'Ajuste fino de un modelo en el teléfono',
            'Estado': 'No es realista',
            'Por qué': 'Memoria, calor, sin herramientas en las apps',
            'En su lugar': 'Entrena en un Mac o una GPU',
          },
          {
            'Deseo': 'Sincronizar chats con Mac e iPad',
            'Estado': 'Casi siempre no',
            'Por qué': 'El historial es por dispositivo en la mayoría de las apps',
            'En su lugar': 'Interfaz web del servidor, p. ej. Open WebUI',
          },
          {
            'Deseo': 'AnythingLLM Mobile en iPhone',
            'Estado': 'Aún no',
            'Por qué': 'App de iOS sin publicar según la reseña',
            'En su lugar': 'Navegador hacia tu servidor',
          },
          {
            'Deseo': 'Apple Intelligence en el iPhone 14',
            'Estado': 'No es posible',
            'Por qué': 'No está en la lista de dispositivos de Apple',
            'En su lugar': 'Apps de modelos de terceros',
          },
          {
            'Deseo': 'Generación de música con voz',
            'Estado': 'Aún no',
            'Por qué': 'Murmur solo hace música instrumental',
            'En su lugar': 'Herramientas de escritorio',
          },
          {
            'Deseo': 'Prueba de que una app es privada',
            'Estado': 'No con una etiqueta',
            'Por qué': 'Las etiquetas las declara el desarrollador',
            'En su lugar': 'Modo avión e Informe de privacidad de apps',
          },
        ],
      },
      decision: {
        id: 'decision-path',
        title: 'Ruta de decisión: tengo este iPhone y quiero esto',
        content:
          '**Encuentra tu fila por nivel de teléfono y objetivo y abre después el capítulo enlazado.** Las opciones son puntos de partida basados en nuestras reseñas, no clasificaciones; una app que figura como inactiva en el capítulo de mantenimiento solo se menciona cuando no hay una opción mejor.',
        columns: ['Si tienes', 'Y quieres', 'Empieza aquí'],
        rows: [
          {
            'Si tienes': 'iPhone de 4 GB (12, 13, SE)',
            'Y quieres': 'Chat general',
            'Empieza aquí': 'Reins o Enchanted con un servidor doméstico',
          },
          {
            'Si tienes': 'iPhone de 6 GB (14, 15)',
            'Y quieres': 'Chat gratuito sin conexión',
            'Empieza aquí': 'PocketPal AI con un modelo de 1-2B',
          },
          {
            'Si tienes': 'iPhone de 8 GB (16, 17)',
            'Y quieres': 'Chat gratuito sin conexión',
            'Empieza aquí': 'PocketPal AI o Locally AI',
          },
          {
            'Si tienes': 'iPhone de 8 GB',
            'Y quieres': 'Siri y Atajos',
            'Empieza aquí': 'Private LLM o Locally AI',
          },
          {
            'Si tienes': 'iPhone de 12 GB (17 Pro)',
            'Y quieres': 'El modelo más grande en el teléfono',
            'Empieza aquí': 'Noema o Gallery con Gemma 4',
          },
          {
            'Si tienes': 'Teléfono con Apple Intelligence',
            'Y quieres': 'Sin descargar modelos',
            'Empieza aquí': 'Compass o Locally AI (modelo de Apple)',
          },
          {
            'Si tienes': 'Cualquier iPhone',
            'Y quieres': 'Transcripciones de reuniones',
            'Empieza aquí': 'Whisper Notes o Lyonesse',
          },
          {
            'Si tienes': 'Cualquier iPhone',
            'Y quieres': 'Chat con unos pocos PDF',
            'Empieza aquí': 'Private Mind o MemoryAI',
          },
          {
            'Si tienes': 'Cualquier iPhone',
            'Y quieres': 'Traducción',
            'Empieza aquí': 'On-Device AI Translator',
          },
          {
            'Si tienes': 'iPhone de 8 GB o más',
            'Y quieres': 'Imágenes a partir de texto',
            'Empieza aquí': 'Draw Things',
          },
          {
            'Si tienes': 'Cualquier iPhone',
            'Y quieres': 'Búsqueda de fotos, servidor propio',
            'Empieza aquí': 'Immich',
          },
          {
            'Si tienes': 'Cualquier iPhone, PC en casa',
            'Y quieres': 'Modelos de 7B-70B',
            'Empieza aquí': 'Reins, OpenClient o LM Mini',
          },
          {
            'Si tienes': 'Cualquier iPhone',
            'Y quieres': 'Voz para el hogar inteligente',
            'Empieza aquí': 'Home Assistant Assist',
          },
          {
            'Si tienes': 'Un adolescente con el iPhone',
            'Y quieres': 'Chat seguro',
            'Empieza aquí': 'Límites de Tiempo de uso y después lee las notas de seguridad',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Elegir un modelo por el tamaño del archivo en lugar de por el nivel de RAM.** Un archivo que se descarga puede ser cerrado igualmente por iOS; ajusta el tamaño a la tabla de niveles y prueba con el benchmark de la app.',
          '**Esperar calidad de la nube.** Usa un modelo pequeño para borradores, resúmenes, traducción y preguntas rápidas, y un modelo en la nube o de un servidor doméstico para razonamientos difíciles.',
          '**Tratar "Apple Intelligence" como "sin conexión".** Apple Intelligence puede usar Private Cloud Compute; comprueba qué gestiona la solicitud.',
          '**Fiarse de una etiqueta de privacidad sin probarla.** Haz las comprobaciones con el modo avión y el Informe de privacidad de apps del capítulo de privacidad.',
          '**Instalar todas las apps.** Cada app guarda sus propios archivos de modelo de varios gigabytes; elige una app por tarea.',
          '**Comprar una app que se ha quedado inactiva.** Revisa el historial de versiones, sobre todo en las apps del capítulo de mantenimiento.',
          '**Exponer un servidor doméstico a internet.** Usa una malla VPN privada; Ollama no exige autenticación por defecto.',
          '**Dejar sin revisar las apps de roleplay en un teléfono compartido o de un menor.** Lee antes la clasificación por edades y los ajustes de contenido para adultos.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Dispositivos, idiomas, Siri AI y Private Cloud Compute de Apple Intelligence: [Apple Intelligence](https://www.apple.com/apple-intelligence/) (consultado el 13 de noviembre de 2026).',
          'Directrices de App Review 2.4.2, 2.5.1, 2.5.2, 2.5.4, 5.1.1 y 5.1.2: [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) (consultado el 13 de noviembre de 2026).',
          'Ruta y contenido del Informe de privacidad de apps: [Apple Support](https://support.apple.com/en-us/102188).',
          'Motores: [MLX Swift](https://github.com/ml-explore/mlx-swift), [llama.cpp](https://github.com/ggml-org/llama.cpp), [ExecuTorch](https://github.com/pytorch/executorch), [documentación de MLC para iOS](https://llm.mlc.ai/docs/deploy/ios.html), [Core ML](https://developer.apple.com/documentation/coreml), [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM).',
          'Las cifras de RAM de los iPhone y las velocidades orientativas se reutilizan de [Mejores apps de IA local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026); Apple no publica la RAM de los iPhone.',
          'Los datos de cada app (precio, plataforma, versión, declaraciones del desarrollador) proceden de las reseñas de PromptQuorum enlazadas y de las fichas del directorio; las fechas de última actualización de las apps marcadas como inactivas proceden de las fichas.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puede un iPhone ejecutar IA completamente sin conexión?',
            a:
              'Sí, según sus fichas y reseñas. Tras una descarga única del modelo con Wi-Fi, apps como PocketPal AI, Private LLM y Locally AI responden sin conexión. Apple Intelligence también ejecuta un modelo en el dispositivo, pero puede usar Private Cloud Compute para solicitudes más grandes, así que no está garantizado que funcione sin conexión. Prueba cualquier app en modo avión.',
          },
          {
            q: '¿Qué iPhone necesito para la IA local?',
            a:
              'Un iPhone con 6 GB de RAM o más para modelos pequeños de 1-2B y 8 GB o más para modelos de 3-4B. Apple no publica la RAM, así que usa los niveles informados de esta guía. Para Apple Intelligence necesitas un iPhone 15 Pro o posterior de la lista de dispositivos de Apple.',
          },
          {
            q: '¿Es realmente privada la IA local en iPhone?',
            a:
              'El chat puede quedarse en el dispositivo, pero la privacidad depende de la app. Las etiquetas las declara el desarrollador, y varias apps reseñadas envían informes de fallos, eventos de uso o solicitudes web opcionales. Verifícalo con el modo avión y Ajustes > Privacidad y seguridad > Informe de privacidad de apps.',
          },
          {
            q: '¿Puedo ejecutar Ollama en mi iPhone?',
            a:
              'No. Ollama ofrece descargas para macOS, Windows y Linux, y no hay un servidor Ollama ni Docker para el iPhone. Ejecuta Ollama en un ordenador y conéctate desde un cliente de iPhone como Reins, Enchanted u OpenClient.',
          },
          {
            q: '¿Qué tamaño de modelo puede ejecutar un iPhone?',
            a:
              'Unos 3-4B parámetros a 4 bits en teléfonos de 8 GB, con modelos de 7-8B de pocos bits solo en teléfonos de 12 GB y con lentitud. Los teléfonos de 6 GB van mejor con modelos de 1-2B. Para modelos más grandes usa el modo remoto con un servidor doméstico.',
          },
          {
            q: '¿La IA local agota la batería?',
            a:
              'Mientras genera, sí: la generación sostenida mantiene el procesador ocupado y agota la batería mucho más rápido que el uso en reposo, y el teléfono puede calentarse. PromptQuorum no ha medido el consumo exacto. Las preguntas ocasionales cuestan poco, y un modelo cargado pero inactivo consume poca energía.',
          },
          {
            q: '¿Cuál es la mejor app gratuita de IA local para iPhone?',
            a:
              'PocketPal AI es la opción gratuita y de código abierto por defecto en nuestro análisis, con Locally AI y Google AI Edge Gallery como alternativas gratuitas. La app adecuada depende de tu tarea; usa la ruta de decisión de esta guía.',
          },
          {
            q: '¿En qué se diferencia Apple Intelligence de estas apps?',
            a:
              'Apple Intelligence es el modelo integrado de Apple para funciones del sistema y para apps que usan el framework Foundation Models; no puedes cambiar su modelo. Las apps de esta guía te permiten elegir y descargar modelos, y algunas, como Locally AI, también pueden servir de interfaz del modelo de Apple.',
          },
          {
            q: '¿Puedo chatear con mis PDF sin conexión en el iPhone?',
            a:
              'Sí con unos pocos archivos, según sus fichas y reseñas, con apps como Private Mind, MemoryAI, Noema o LocalMindAI. Los modelos pequeños tienen ventanas de contexto cortas, así que los documentos largos pueden resumirse de forma incompleta. Para bibliotecas grandes usa un servidor doméstico.',
          },
          {
            q: '¿Puedo usar mi servidor doméstico desde fuera de casa?',
            a:
              'Sí, mediante una malla VPN privada como Tailscale u otro túnel seguro, con una app cliente compatible con tu servidor. No abras Ollama a internet; no exige autenticación por defecto.',
          },
          {
            q: '¿Puede un iPhone generar imágenes sin conexión?',
            a:
              'Sí, según sus fichas y reseñas, con apps como Draw Things, Genva y Haplo AI, tras descargar modelos de varios gigabytes. La generación es más lenta que en una GPU de escritorio y calienta el teléfono; Draw Things también ofrece un modo opcional en la nube.',
          },
          {
            q: '¿Son seguras las apps de roleplay y de compañía para adolescentes?',
            a:
              'No por defecto. Varias tienen clasificaciones 18+ o modos solo para adultos, algunas son servicios en la nube que almacenan conversaciones, y los modelos en el dispositivo no tienen un filtro del lado del servidor. Usa los límites de Tiempo de uso y de clasificación de apps de Apple y lee las notas de seguridad de esta guía.',
          },
          {
            q: '¿Funciona la IA local en el iPad?',
            a:
              'En su mayoría sí. Muchas apps de esta guía indican compatibilidad con iPad, y se aplica la misma regla de RAM. Consulta los consejos específicos para iPad en [Cómo ejecutar IA en una tableta](/es/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: '¿Cómo se compara el iPhone con Android para la IA local?',
            a:
              'El iPhone es más sencillo para empezar y más restringido; Android permite apps de terminal y tiene más opciones de código abierto, pero varía según el teléfono. Compara en la [Guía de IA local en Android](/es/power-local-llm/local-ai-on-android-guide) y en [Galaxy frente a iPhone en IA en el dispositivo](/es/local-llms/galaxy-vs-iphone-on-device-ai-2026).',
          },
          {
            q: '¿Usarán las apps el modelo de Apple en iPhone más antiguos?',
            a:
              'No. Apple Intelligence se limita a los dispositivos de la lista de Apple, empezando por el iPhone 15 Pro. En iPhone más antiguos, usa apps que traen sus propios modelos, dentro de los límites de RAM.',
          },
        ],
      },
      related: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores apps de IA local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026): opciones ordenadas, velocidades orientativas y una guía de RAM para iPhone.',
          '[Guía de IA local en Android](/es/power-local-llm/local-ai-on-android-guide): la guía hermana de la plataforma Android.',
          '[Mejores apps de IA local para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026): apps de Android ordenadas.',
          '[Galaxy frente a iPhone en IA en el dispositivo](/es/local-llms/galaxy-vs-iphone-on-device-ai-2026): comparación de la IA en el dispositivo del iPhone y del Galaxy.',
          '[Cómo ejecutar IA en una tableta](/es/power-local-llm/run-ai-on-tablet-ipad-android): iPad y tabletas Android.',
          '[Mejores modelos LLM móviles: Phi-4 Mini, Gemma y SmolLM](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm): qué modelos pequeños descargar.',
          '[LLM locales móviles](/es/local-llms/mobile-local-llms): fundamentos de los LLM locales móviles.',
          '[IA en el dispositivo de Apple frente a LLM locales](/es/local-llms/apple-on-device-ai-vs-local-llms): la IA en el dispositivo de Apple frente a los modelos locales abiertos.',
          '[Crea un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline): voz sin conexión en un teléfono.',
          '[Asistentes de chat comparados](/es/power-local-llm/local-llm-chat-assistants-compared), [Apps de voz y audio comparadas](/es/power-local-llm/local-llm-voice-audio-compared), [Apps de imagen y vídeo comparadas](/es/power-local-llm/local-llm-images-video-compared) y [Apps de conocimiento y recuperación comparadas](/es/power-local-llm/local-llm-knowledge-retrieval-compared): comparativas por categoría.',
          '[Directorio de apps de IA local](/es/directory): todas las apps de IA local del directorio.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    last_full_refresh: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'IA local no iPhone em 2026: o que é possível, o que não é e os apps de iPhone que cobrimos',
    seoTitle: 'IA local no iPhone 2026: o que funciona e o que não',
    intro:
      'Um iPhone recente consegue executar um modelo de linguagem útil offline depois que o modelo é baixado, mas apenas modelos pequenos: cerca de 1-4 bilhões de parâmetros com 6-8 GB de RAM. Este guia mapeia o que a IA local no iPhone pode fazer, o que é possível só em parte e o que não é possível, explica o Apple Intelligence, o framework Foundation Models e as regras da App Store, e liga os apps de iPhone que cobrimos no diretório do PromptQuorum à tarefa em que cada um se encaixa. Os fatos sobre os apps vêm das análises do PromptQuorum, baseadas em fontes públicas, a menos que a análise diga que o app foi testado na prática; este guia não voltou a testar nenhum app.',
    metaDescription:
      'O que a IA local no iPhone faz e não faz em 2026: limites de chip e RAM, Apple Intelligence, regras da App Store e os apps de iPhone por caso de uso.',
    heroImage: '/images/local-ai-on-iphone-guide-hero-pt.webp',
    twitterDescription:
      'IA local no iPhone em 2026: mapa de capacidades, faixas de RAM, Apple Intelligence, limites da App Store, lista do que não é possível e os apps de iPhone que cobrimos por caso de uso.',
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM não divulgada pela Apple)',
      'iPhone 17 Pro (A19 Pro, 12 GB de RAM, segundo relatos)',
      'iPhone 16 Pro (A18 Pro, 8 GB de RAM, segundo relatos)',
      'iPhone 15 Pro (A17 Pro, 8 GB de RAM, segundo relatos)',
      'iPhone 14 Pro (A16, 6 GB de RAM, segundo relatos)',
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
      'Donos de iPhone e iPad, usuários que se preocupam com a privacidade, viajantes e desenvolvedores que querem saber o que a IA no dispositivo pode e não pode fazer e qual app instalar para cada tarefa.',
    readTime: '45 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'IA local no iPhone',
    targetKeywords: [
      'ia local no iphone',
      'rodar ia no iphone offline',
      'ia no dispositivo iphone',
      'apple intelligence foundation models framework',
      'app de llm local iphone',
      'ram do iphone llm',
      'ollama no iphone',
      'ia offline iphone',
      'o que a ia local faz no iphone',
    ],
    leadAnswerBlock:
      '**Um iPhone recente consegue executar um modelo de linguagem pequeno (cerca de 1-4 bilhões de parâmetros com 6-8 GB de RAM) offline depois de um download único, cobrindo chat, resumos, tradução, ditado, perguntas sobre documentos e tarefas pequenas com imagens; ele não executa modelos de 30B+, não substitui a Siri e não roda agentes em segundo plano.** O Apple Intelligence adiciona um modelo embutido no iPhone 15 Pro e nos mais novos, e não existe servidor Ollama nem Docker no iPhone.',
    quickAnswerTop: {
      pt: {
        question: 'O que a IA local pode fazer em um iPhone?',
        answer:
          'Um iPhone recente consegue executar modelos de 1-4 bilhões de parâmetros offline para chat, resumos, tradução, ditado, perguntas sobre documentos e tarefas pequenas com imagens. Ele não executa modelos de 30B+, não substitui a Siri e não mantém agentes rodando em segundo plano. O Apple Intelligence adiciona um modelo embutido no iPhone 15 Pro e nos mais novos.',
        bullets: [
          '6 GB de RAM: modelos de 1-2B; 8 GB: 3-4B; 12 GB: 4B com folga',
          'O Apple Intelligence exige iPhone 15 Pro ou mais novo',
          'Sem Ollama, Docker nem servidor Linux no celular',
          'Use um servidor doméstico para modelos de 7B-70B no modo remoto',
          'Verifique a privacidade com o Modo Avião e o Relatório de Privacidade dos Apps',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'Pontos principais',
        anchor: '#key-takeaways',
      },
      {
        label: 'Comece aqui: três apps para instalar',
        anchor: '#start-here',
      },
      {
        label: 'Seis respostas rápidas antes de instalar',
        anchor: '#quick-answers',
      },
      {
        label: 'Fatos rápidos',
        anchor: '#quick-facts',
      },
      {
        label: 'Mapa de capacidades: o que a IA local no iPhone pode fazer',
        anchor: '#capability-map',
      },
      {
        label: 'Chip e RAM na prática: qual iPhone executa qual modelo',
        anchor: '#iphone-hardware',
      },
      {
        label: 'Neural Engine, GPU e CPU: o que realmente executa o modelo',
        anchor: '#chips-engines',
      },
      {
        label: 'Faixa do celular, app e tamanho do modelo num relance',
        anchor: '#tier-app-model',
      },
      {
        label: 'Seu primeiro modelo local em 15 minutos',
        anchor: '#first-run-15-minutes',
      },
      {
        label: 'Apple Intelligence e o framework Foundation Models',
        anchor: '#apple-intelligence',
      },
      {
        label: 'Regras da App Store que moldam a IA local no iPhone',
        anchor: '#app-store-rules',
      },
      {
        label: 'O que o iPhone faz melhor e pior que o Android',
        anchor: '#iphone-vs-android',
      },
      {
        label: 'Assistentes de chat: os principais apps no dispositivo',
        anchor: '#chat-assistants',
      },
      {
        label: 'Assistentes de chat: apps novos, de nicho e híbridos',
        anchor: '#chat-more',
      },
      {
        label: 'Apps parados, desatualizados ou fora da App Store',
        anchor: '#chat-quiet-apps',
      },
      {
        label: 'Visão e câmera: faça perguntas sobre fotos e capturas de tela',
        anchor: '#vision-camera',
      },
      {
        label: 'Voz: ditado, transcrição, leitura em voz alta, assistentes offline e Siri',
        anchor: '#voice-speech',
      },
      {
        label: 'Documentos, PDFs e recuperação no celular',
        anchor: '#documents-rag',
      },
      {
        label: 'Tradução no dispositivo',
        anchor: '#translation',
      },
      {
        label: 'Geração de imagens e edição de fotos',
        anchor: '#image-generation-editing',
      },
      {
        label: 'Bibliotecas de fotos e busca na galeria',
        anchor: '#photos-gallery-search',
      },
      {
        label: 'Notas, bases de conhecimento e favoritos',
        anchor: '#notes-knowledge',
      },
      {
        label: 'Perguntas sobre saúde e bem-estar',
        anchor: '#health-wellness',
      },
      {
        label: 'Apps de roleplay e companhia, com notas de segurança de conteúdo',
        anchor: '#roleplay-companions',
      },
      {
        label: 'Casa inteligente e agentes',
        anchor: '#smart-home-agents',
      },
      {
        label: 'Modo remoto: o iPhone como cliente leve do seu próprio servidor',
        anchor: '#remote-mode',
      },
      {
        label:
          'Caminhos para desenvolvedores: Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch e Foundation Models',
        anchor: '#developer-paths',
      },
      {
        label: 'Privacidade e telemetria na prática',
        anchor: '#privacy-telemetry',
      },
      {
        label: 'Limites de bateria, calor e memória',
        anchor: '#battery-thermal-memory',
      },
      {
        label: 'O que funciona só em parte',
        anchor: '#works-partly',
      },
      {
        label: 'O que não é possível ou ainda não é possível no iPhone',
        anchor: '#not-possible',
      },
      {
        label: 'Caminho de decisão: tenho este iPhone e quero isto',
        anchor: '#decision-path',
      },
      {
        label: 'Erros comuns',
        anchor: '#common-mistakes',
      },
      {
        label: 'Fontes',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Leituras relacionadas',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Um iPhone recente consegue executar um modelo de linguagem útil sem conexão depois que o modelo é baixado.** O teto realista é um modelo de 1B-4B parâmetros com 6-8 GB de RAM; modelos de 7B-8B em forma de poucos bits só cabem nos iPhones de 12 GB e continuam lentos. Espere bons rascunhos, resumos, traduções e respostas a perguntas, e raciocínio, código e conhecimento de mundo mais fracos do que nos modelos de nuvem da classe do ChatGPT.',
          '**A RAM, e não o nome do chip, define o tamanho do modelo.** A Apple não divulga a RAM dos iPhones; os números deste guia são especificações amplamente relatadas. Um iPhone de 4 GB está abaixo do piso prático, 6 GB significam modelos de 1-2B, 8 GB significam 3-4B, 12 GB dão mais folga.',
          '**O Apple Intelligence e o framework Foundation Models são um segundo caminho, separado.** O modelo próprio da Apple no dispositivo já está no celular (iPhone 15 Pro e mais novos), não exige download e pode ser usado por apps de terceiros. Ele não é um app de chat geral por si só, e valem limites de idioma e de região.',
          '**A App Store impõe limites rígidos.** Não há Docker nem como rodar o Ollama no celular; os apps não podem baixar código que altere seus recursos (diretriz 2.5.2 da Apple), então todo motor vem dentro do app e só os arquivos de modelo são baixados. Por isso, IA local no iPhone significa instalar um app, não montar uma pilha.',
          '**A maior parte do que o dono de um iPhone quer tem um app analisado no nosso diretório:** chat, perguntas pela câmera, ditado e transcrição, chat com documentos, tradução, geração de imagens, busca de fotos, notas, perguntas sobre saúde, roleplay, controle da casa inteligente e acesso remoto a um servidor doméstico. Este guia liga a maioria dos apps de iPhone do nosso diretório à capacidade em que cada um se encaixa.',
          '**Várias coisas não são possíveis ou só são possíveis em parte:** modelos de 30B+, raciocínio de qualidade de ponta, agentes sempre ativos em segundo plano, substituir a Siri pelo seu próprio modelo, fazer fine-tuning no celular e uma garantia de privacidade apenas por um rótulo da App Store.',
          '**"Zero telemetria" precisa ser verificado, não aceito na confiança.** Vários apps que dizem manter o chat no dispositivo ainda enviam relatórios de falhas, eventos de uso ou requisições opcionais à web; o capítulo de privacidade mostra como verificar com o Modo Avião e o Relatório de Privacidade dos Apps.',
          '**Comece pequeno:** instale um app, baixe um modelo de 1-2 GB no Wi-Fi, ative o Modo Avião e faça uma pergunta. Se funcionar, você verificou todo o caminho offline em menos de 15 minutos.',
        ],
      },
      startHere: {
        id: 'start-here',
        title: 'Comece aqui: três apps para instalar',
        content: [
          '**Está com pouco tempo? Instale um destes três, baixe um modelo que caiba na RAM do seu iPhone e teste uma vez no Modo Avião.** As indicações vêm dos capítulos e das análises deste guia, não de benchmarks; o resto do guia explica cada escolha.',
          '**Outros bons pontos de partida:** em um iPhone de 12 GB, experimente o [Noema](/pt/power-local-llm/noema-review) ou o [Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) com um modelo Gemma 4; em um iPhone de 4 GB, use o [Reins](/pt/power-local-llm/reins-review) ou o [Enchanted](/pt/power-local-llm/enchanted-review) (sinalizado como pouco ativo no capítulo de manutenção) com um servidor doméstico, porque essa faixa está abaixo do piso prático para chat no dispositivo.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Iniciantes podem começar com o PocketPal AI, usuários avançados com o Locally AI e o modelo próprio da Apple, e desenvolvedores com o framework Foundation Models ou o MLX Swift; em todos os casos, o tamanho do modelo acompanha a RAM do iPhone.',
          },
          {
            type: 'plain-terms',
            text: 'Um app, um modelo do tamanho da sua RAM, um teste no Modo Avião.',
          },
        ],
        itemHeadings: true,
        columns: ['Seu nível', 'Instalar ou usar', 'Primeiro modelo', 'Por que esta escolha'],
        rows: [
          {
            'Seu nível': 'Iniciante',
            'Instalar ou usar': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Primeiro modelo': '1-2B com 6 GB; 3-4B com 8 GB',
            'Por que esta escolha': 'Gratuito e de código aberto, e o passo a passo da primeira execução neste guia usa esse app.',
          },
          {
            'Seu nível': 'Avançado',
            'Instalar ou usar': '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            'Primeiro modelo': '3-4B com 8 GB, ou o modelo próprio da Apple sem download',
            'Por que esta escolha': 'Combina com Siri e Atalhos em um iPhone de 8 GB e pode usar o modelo integrado da Apple em iPhones com Apple Intelligence.',
          },
          {
            'Seu nível': 'Desenvolvedor',
            'Instalar ou usar': 'Framework Foundation Models ou MLX Swift',
            'Primeiro modelo': 'O modelo integrado da Apple, ou o seu próprio modelo',
            'Por que esta escolha': 'O Foundation Models é a API nativa em Swift da Apple e exige hardware compatível com Apple Intelligence; o MLX Swift executa o seu próprio modelo. O capítulo "Caminhos para desenvolvedores" cobre o restante.',
          },
        ],
      },
      quickAnswers: {
        id: 'quick-answers',
        title: 'Seis respostas rápidas antes de instalar',
        content:
          '**Estas são as seis perguntas que os leitores fazem primeiro; cada resposta aponta para o capítulo que a explica.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A RAM define o tamanho do modelo, 3-5 GB de armazenamento livre comportam um primeiro modelo e um teste no Modo Avião mostra se o app funciona offline.',
          },
          {
            type: 'plain-terms',
            text: 'A RAM escolhe o modelo, o armazenamento o guarda e o Modo Avião comprova.',
          },
        ],
        items: [
          '**Qual modelo devo baixar?** Siga a sua RAM: 1-2B com 6 GB, 3-4B com 8 GB, mais folga com 12 GB, onde modelos de 7-8B continuam lentos. Um iPhone de 4 GB está abaixo do piso prático. Veja "Faixa do celular, app e tamanho do modelo num relance".',
          '**De quanto armazenamento preciso?** Libere primeiro 3-5 GB, pois um arquivo de modelo tem 1-4 GB; instale um app por vez, já que arquivos de modelo duplicados consomem armazenamento rápido. Veja "Seu primeiro modelo local em 15 minutos".',
          '**Qual será a velocidade?** A PromptQuorum não mediu a velocidade em nenhum iPhone para este guia, e as velocidades indicativas do nosso comparativo de iPhone não são medições novas. Um modelo menor responde mais rápido; anote a velocidade nas suas primeiras perguntas de teste e veja nos ajustes do app se ele mostra um valor em tokens por segundo.',
          '**Qual app é privado?** Nenhum pode ser presumido privado apenas pelo rótulo da App Store, porque "roda no seu dispositivo" e "não envia nada" são afirmações diferentes. Leia o rótulo de privacidade e a política, faça o teste no Modo Avião e depois confira Ajustes > Privacidade e Segurança > Relatório de Privacidade dos Apps; apps de código aberto como o PocketPal AI podem ser inspecionados. Veja "Privacidade e telemetria na prática".',
          '**O que dá para fazer sem internet?** Segundo o mapa de capacidades deste guia, um iPhone recente consegue lidar offline com chat, perguntas sobre a câmera, ditado e transcrição, chat com documentos e tradução depois que o modelo é baixado; modelos de 30B+, raciocínio de qualidade de ponta e agentes sempre ativos em segundo plano não são possíveis. Veja "Mapa de capacidades".',
          '**O que leio em seguida?** Siga "Seu primeiro modelo local em 15 minutos" e depois use o "Caminho de decisão" se tiver uma tarefa específica em mente.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Escopo:** primeiro o iPhone, e o iPad onde os mesmos apps rodam. O Android é coberto no guia irmão [guia de IA local no Android](/pt/power-local-llm/local-ai-on-android-guide).',
          '**iPhones compatíveis com o Apple Intelligence (lista da Apple):** iPhone 15 Pro e 15 Pro Max, a família iPhone 16 incluindo o 16e, a família iPhone 17 incluindo o 17e e o Air, e os iPhone 18 Pro, 18 Pro Max e iPhone Duo de 2026. O iPhone 15 e os modelos não Pro mais antigos não estão na lista.',
          '**Faixas de RAM usadas neste guia (relatadas, não divulgadas pela Apple):** 4 GB (iPhone 12, 13, SE), 6 GB (iPhone 13 Pro, 14, 14 Pro, 15), 8 GB (iPhone 15 Pro, linha 16, 16e, 17), 12 GB (iPhone 17 Pro e Pro Max).',
          '**Tamanhos de modelo que cabem:** cerca de 1.1 GB para um modelo de 1.7B em 4 bits, cerca de 2.5-3.7 GB para modelos de 3-4B; as velocidades indicativas vêm do nosso comparativo de apps para iPhone e não são medições novas.',
          '**Motores dentro dos apps de iPhone:** llama.cpp (GGUF), Apple MLX, MLC LLM, Google LiteRT-LM, ExecuTorch, Core ML, Apple Foundation Models; alguns apps combinam vários.',
          '**Apps ligados neste guia:** os apps de iOS e iPadOS do nosso diretório que têm uma análise do PromptQuorum, mais apps de iPhone complementares para ferramentas auto-hospedadas.',
          '**O que o PromptQuorum não fez:** este guia não voltou a testar os apps. Os fatos vêm das nossas análises, das fichas das lojas, dos sites dos desenvolvedores e da documentação da Apple, e cada análise informa o que testou.',
        ],
      },
      whatIsPossible: {
        id: 'capability-map',
        title: 'Mapa de capacidades: o que a IA local no iPhone pode fazer',
        content:
          '**A IA local no iPhone cobre a maioria das tarefas cotidianas de linguagem e várias tarefas de mídia, mas não tudo o que os assistentes de nuvem fazem.** A tabela classifica cada capacidade em Funciona, Em parte ou Ainda não, e o capítulo seguinte nomeia os apps. "Funciona" significa que um app de iPhone analisado faz a tarefa com o modelo no celular; "Em parte" significa que funciona com limites de tamanho, velocidade, precisão ou hardware; "Ainda não" significa que nenhum app de iPhone analisado faz isso no dispositivo.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'A IA local no iPhone consegue lidar no dispositivo com chat, rascunhos, resumos, tradução, ditado, perguntas sobre documentos e tarefas pequenas com imagens, lida só em parte com busca de fotos, geração de imagens e agentes, e ainda não consegue executar modelos grandes nem substituir a Siri.',
          },
          {
            type: 'plain-terms',
            text:
              'Pense no iPhone como um assistente de bolso com um cérebro pequeno e privado. Ele responde perguntas simples, reescreve textos, transcreve fala e descreve fotos sem enviar nada para fora, mas esquece fatos que um modelo de nuvem maior conhece, fica lento em respostas longas e esquenta. Para perguntas difíceis, muita gente combina o celular com um computador em casa ou um app de nuvem.',
          },
        ],
        columns: ['Capacidade', 'No iPhone', 'Configuração típica', 'Capítulo'],
        rows: [
          {
            Capacidade: 'Chat, rascunhos, resumos',
            'No iPhone': 'Funciona',
            'Configuração típica': 'Modelo de 1-4B, GGUF ou MLX',
            'Capítulo': 'Assistentes de chat',
          },
          {
            Capacidade: 'Perguntar sobre uma foto ou captura de tela',
            'No iPhone': 'Funciona',
            'Configuração típica': 'Modelo de visão pequeno ou OCR',
            'Capítulo': 'Visão e câmera',
          },
          {
            Capacidade: 'Ditado e transcrição',
            'No iPhone': 'Funciona',
            'Configuração típica': 'Whisper ou Parakeet',
            'Capítulo': 'Voz e fala',
          },
          {
            Capacidade: 'Leitura em voz alta (texto para fala)',
            'No iPhone': 'Funciona',
            'Configuração típica': 'Vozes do sistema ou TTS no dispositivo',
            'Capítulo': 'Voz e fala',
          },
          {
            Capacidade: 'Assistente de mãos livres com a Siri',
            'No iPhone': 'Em parte',
            'Configuração típica': 'Atalhos, não substitui a Siri',
            'Capítulo': 'Voz e fala',
          },
          {
            Capacidade: 'Conversar com seus PDFs e notas',
            'No iPhone': 'Funciona',
            'Configuração típica': 'Modelo pequeno mais índice local',
            'Capítulo': 'Documentos e RAG',
          },
          {
            Capacidade: 'Tradução',
            'No iPhone': 'Funciona',
            'Configuração típica': 'Modelo pequeno ajustado para tradução',
            'Capítulo': 'Tradução',
          },
          {
            Capacidade: 'Geração de imagens',
            'No iPhone': 'Em parte',
            'Configuração típica': 'Modelos de difusão pequenos, lenta',
            'Capítulo': 'Geração de imagens',
          },
          {
            Capacidade: 'Edição de fotos (recorte, retoque)',
            'No iPhone': 'Funciona',
            'Configuração típica': 'Modelos de segmentação Core ML',
            'Capítulo': 'Geração de imagens',
          },
          {
            Capacidade: 'Busca com IA na sua biblioteca de fotos',
            'No iPhone': 'Em parte',
            'Configuração típica': 'Índice no dispositivo ou servidor próprio',
            'Capítulo': 'Fotos e galeria',
          },
          {
            Capacidade: 'Notas e favoritos com IA',
            'No iPhone': 'Em parte',
            'Configuração típica': 'A IA costuma rodar em um servidor',
            'Capítulo': 'Notas e conhecimento',
          },
          {
            Capacidade: 'Perguntas sobre dados de saúde',
            'No iPhone': 'Em parte',
            'Configuração típica': 'Apple Intelligence, não é médico',
            'Capítulo': 'Saúde e bem-estar',
          },
          {
            Capacidade: 'Roleplay e companhia',
            'No iPhone': 'Funciona',
            'Configuração típica': 'Modelo de chat pequeno, há variantes na nuvem',
            'Capítulo': 'Roleplay e companhia',
          },
          {
            Capacidade: 'Controle da casa inteligente',
            'No iPhone': 'Em parte',
            'Configuração típica': 'O servidor doméstico faz o trabalho',
            'Capítulo': 'Casa inteligente e agentes',
          },
          {
            Capacidade: 'Agentes autônomos sempre ativos',
            'No iPhone': 'Ainda não',
            'Configuração típica': 'O iOS limita o trabalho em segundo plano',
            'Capítulo': 'Não é possível',
          },
          {
            Capacidade: 'Executar modelos de 30B+',
            'No iPhone': 'Ainda não',
            'Configuração típica': 'Use um servidor doméstico remotamente',
            'Capítulo': 'Modo remoto',
          },
          {
            Capacidade: 'Fazer fine-tuning de um modelo no celular',
            'No iPhone': 'Ainda não',
            'Configuração típica': 'Treine em um Mac ou GPU',
            'Capítulo': 'Caminhos para desenvolvedores',
          },
        ],
      },
      hardware: {
        id: 'iphone-hardware',
        title: 'Chip e RAM na prática: qual iPhone executa qual modelo',
        content:
          '**A RAM define o maior modelo que um iPhone consegue manter; o chip define a rapidez da resposta.** Um modelo de linguagem precisa ficar na memória enquanto gera texto, então um modelo de 3B em 4 bits (cerca de 2-2.7 GB em disco) precisa de aproximadamente essa quantidade de RAM livre, além do que o iOS e outros apps usam. O iOS encerra um app que pede memória demais, e a Apple não divulga a RAM dos iPhones, então os números abaixo são especificações amplamente relatadas (também usadas em nosso [Melhores apps de IA local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026)) e não declarações da Apple.',
        columns: ['Faixa do iPhone', 'RAM (relatada)', 'Tamanho de modelo realista', 'Veredito'],
        rows: [
          {
            'Faixa do iPhone': 'iPhone 12, 13, SE',
            'RAM (relatada)': '4 GB',
            'Tamanho de modelo realista': 'Abaixo de 1B, se tanto',
            Veredito: 'Use o modo remoto',
          },
          {
            'Faixa do iPhone': 'iPhone 13 Pro, 14, 14 Pro, 15',
            'RAM (relatada)': '6 GB',
            'Tamanho de modelo realista': '1-2B (arquivo de cerca de 1.1 GB)',
            Veredito: 'Chat básico e rascunhos',
          },
          {
            'Faixa do iPhone': 'iPhone 15 Pro, 16, 16e, 17',
            'RAM (relatada)': '8 GB',
            'Tamanho de modelo realista': '3-4B (cerca de 2.5-3.7 GB)',
            Veredito: 'Faixa típica de 3-4B',
          },
          {
            'Faixa do iPhone': 'iPhone 17 Pro, 17 Pro Max',
            'RAM (relatada)': '12 GB',
            'Tamanho de modelo realista': '4B com folga, 7-8B em poucos bits',
            Veredito: 'Maior faixa de RAM',
          },
          {
            'Faixa do iPhone': 'iPhone 18 Pro, Pro Max, Duo',
            'RAM (relatada)': 'Não divulgada',
            'Tamanho de modelo realista': 'Trate como 12 GB até haver confirmação',
            Veredito: 'Sem números do PromptQuorum',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Um modelo que em tese cabe ainda pode ser encerrado pelo iOS quando você troca de app. Em um iPhone de 6 GB, fique com modelos de 1-2B mesmo que um arquivo de 3-4B seja baixado sem erro; as próprias páginas da Apple sobre o iPhone não informam a RAM, então a tabela de faixas é um guia, não uma garantia.',
          },
        ],
      },
      hardwareChips: {
        id: 'chips-engines',
        title: 'Neural Engine, GPU e CPU: o que realmente executa o modelo',
        content:
          '**Um iPhone tem três lugares para executar um modelo, e qual deles um app usa depende do motor do app, não do celular.** A CPU é flexível, mas lenta; a GPU (acessada pela API gráfica Metal da Apple) cuida da matemática de matrizes grandes em que a maioria dos apps de chat se apoia; e o Neural Engine é um acelerador de função fixa que o Core ML da Apple e o novo framework Core AI podem usar. A Apple descreve o Core AI como feito para o Apple silicon, usando memória unificada e o Neural Engine; ele é novo na geração do iOS 27, então a maioria dos apps deste guia ainda não o usa.',
        items: [
          '**Apps com llama.cpp (arquivos GGUF):** [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), [Pocket AI](/pt/power-local-llm/pocket-ai-review) e [LLM Farm](/pt/power-local-llm/llm-farm-review) usam o Metal na GPU. Suportam qualquer arquivo GGUF, então modelos do Hugging Face podem funcionar.',
          '**Apps com Apple MLX:** [Locally AI](/pt/power-local-llm/locally-ai-review), [fullmoon](/pt/power-local-llm/fullmoon-review) e [MLXHub](/pt/power-local-llm/mlxhub-review) usam o framework de arrays MLX da Apple, feito para a memória unificada do Apple silicon.',
          '**Apps multiformato:** o [Noema](/pt/power-local-llm/noema-review) suporta GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models em um só app, e por isso o uso de hardware varia conforme o formato do modelo (declaração do desenvolvedor na análise).',
          '**Apps de modelos compilados:** o [MLC Chat](/pt/power-local-llm/mlc-chat-review) executa modelos compilados pela cadeia de ferramentas do MLC LLM; o [Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) usa o runtime LiteRT-LM do Google.',
          '**O modelo próprio da Apple:** o Apple Intelligence executa o modelo da Apple por meio dos frameworks do sistema. Apps como o [Compass - Local AI](/pt/power-local-llm/compass-local-ai-review) e o [Pajdo](/pt/power-local-llm/pajdo-review) o chamam em vez de trazer um modelo próprio.',
          '**Consequência prática:** dois apps executando o mesmo tamanho de modelo no mesmo iPhone podem diferir em velocidade, uso de memória e calor. Rode o mesmo prompt em dois apps antes de apagar um modelo que você já baixou.',
        ],
      },
      tierTable: {
        id: 'tier-app-model',
        title: 'Faixa do celular, app e tamanho do modelo num relance',
        content:
          '**Escolha primeiro pela faixa de RAM e depois pela necessidade.** A tabela dá um ponto de partida a partir das nossas análises e do nosso comparativo; não é um benchmark. Os modelos mudam rápido, então consulte [Melhores modelos de LLM para celular: Phi-4 Mini vs Gemma vs SmolLM](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm) para as escolhas atuais de modelos pequenos.',
        columns: ['Faixa do celular', 'Comece com', 'Tamanho do modelo', 'Observação'],
        rows: [
          {
            'Faixa do celular': 'iPhone de 4 GB',
            'Comece com': 'Cliente remoto para um servidor doméstico',
            'Tamanho do modelo': 'Nenhum no celular',
            'Observação': 'Reins, Enchanted, OpenClient',
          },
          {
            'Faixa do celular': 'iPhone de 6 GB',
            'Comece com': 'PocketPal AI ou Locally AI',
            'Tamanho do modelo': '1-2B (cerca de 1.1 GB)',
            'Observação': 'Os menores modelos',
          },
          {
            'Faixa do celular': 'iPhone de 8 GB',
            'Comece com': 'PocketPal AI, Private LLM, Gallery',
            'Tamanho do modelo': '3-4B (2.5-3.7 GB)',
            'Observação': 'Faixa intermediária',
          },
          {
            'Faixa do celular': 'iPhone de 12 GB',
            'Comece com': 'Noema ou Locally AI',
            'Tamanho do modelo': '4B, ou 7-8B devagar',
            'Observação': 'Cabe contexto maior',
          },
          {
            'Faixa do celular': 'Celular com Apple Intelligence',
            'Comece com': 'Compass ou Locally AI',
            'Tamanho do modelo': 'Modelo da Apple, sem download',
            'Observação': 'Valem limites de idioma',
          },
          {
            'Faixa do celular': 'Qualquer celular, ditado',
            'Comece com': 'Whisper Notes ou Aiko',
            'Tamanho do modelo': 'Classe Whisper, pequeno',
            'Observação': 'Pago uma vez',
          },
          {
            'Faixa do celular': 'Qualquer celular, documentos',
            'Comece com': 'Private Mind ou MemoryAI',
            'Tamanho do modelo': 'Chat pequeno mais índice',
            'Observação': 'Veja os limites de arquivo',
          },
        ],
      },
      firstRun: {
        id: 'first-run-15-minutes',
        title: 'Seu primeiro modelo local em 15 minutos',
        content:
          '**Você consegue verificar todo o caminho offline em um iPhone em cerca de 15 minutos: instale um app, baixe um modelo pequeno no Wi-Fi, ative o Modo Avião e faça uma pergunta.** Os passos usam o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) como exemplo porque ele é gratuito e de código aberto, mas qualquer app de chat dos próximos capítulos funciona do mesmo jeito. As estimativas de tempo dependem da sua conexão e do celular.',
        numberedItems: [
          {
            title: 'Minuto 0-2: verifique a faixa do seu iPhone',
            whyItMatters:
              'Procure o seu modelo na tabela de RAM acima. 6 GB significam um modelo de 1-2B, 8 GB significam 3-4B, 12 GB dão folga. Libere antes 3-5 GB de armazenamento, porque um arquivo de modelo tem 1-4 GB.',
          },
          {
            title: 'Minuto 2-4: instale um app',
            whyItMatters:
              'Instale um único app da App Store, por exemplo PocketPal AI, Locally AI ou Google AI Edge Gallery. Não instale três apps com três modelos cada; arquivos de modelo duplicados consomem o armazenamento rapidamente.',
          },
          {
            title: 'Minuto 4-9: baixe um modelo no Wi-Fi',
            whyItMatters:
              'Escolha o tamanho da sua faixa, por exemplo um modelo da classe Qwen3 1.7B com 6 GB ou Phi-4 Mini ou Gemma 4 E2B com 8 GB (veja Modelos por faixa). O download é a única etapa que precisa de internet. Mantenha o app aberto e a tela ligada até terminar.',
          },
          {
            title: 'Minuto 9-10: ative o Modo Avião',
            whyItMatters:
              'Ative o Modo Avião e deixe o Wi-Fi desligado. Isso prova que o modelo roda no celular e mostra se o app tenta acessar a internet.',
          },
          {
            title: 'Minuto 10-13: faça três perguntas de teste',
            whyItMatters:
              'Peça um resumo em três tópicos de um parágrafo que você colar, a reescrita de um e-mail em outro tom e uma pergunta factual cuja resposta você conhece. Observe a velocidade e se o celular esquenta.',
          },
          {
            title: 'Minuto 13-15: confira as configurações e faça a limpeza',
            whyItMatters:
              'Abra o benchmark ou as configurações do app, se houver, anote os tokens por segundo e, mais tarde, confira em Ajustes > Privacidade e Segurança > Relatório de Privacidade dos Apps quais domínios o app contatou. Apague os modelos que você não vai usar.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Se o app travar ou reiniciar durante a primeira resposta, o modelo é grande demais para o celular. Apague-o e escolha o próximo tamanho menor, em vez de alterar outras configurações.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence e o framework Foundation Models',
        content:
          '**O Apple Intelligence dá a todo iPhone compatível um modelo de linguagem embutido que não exige download, e o framework Foundation Models permite que apps de terceiros o usem.** A página para desenvolvedores da Apple descreve o framework como uma API nativa em Swift com acesso direto ao mesmo modelo no dispositivo que alimenta o Apple Intelligence. Ele só funciona em dispositivos e idiomas que o Apple Intelligence suporta.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'O Apple Intelligence executa o modelo próprio da Apple no dispositivo no iPhone 15 Pro e nos mais novos, e o framework Foundation Models permite que apps de terceiros como Locally AI, Compass e Pajdo o usem sem trazer um modelo próprio.',
          },
          {
            type: 'plain-terms',
            text:
              'A Apple já colocou um modelo de linguagem pequeno dentro do iPhone. Você não o baixa, mas também não pode trocá-lo por outro. Os apps podem usá-lo para responder perguntas no dispositivo, e por isso vários apps novos exigem um iPhone recente e um iOS recente, em vez de um download de modelo grande.',
          },
        ],
        items: [
          '**Lista de dispositivos (página do Apple Intelligence da Apple):** iPhone 15 Pro e Pro Max (A17 Pro), iPhone 16, 16 Plus, 16e e a família 16 Pro (A18 e A18 Pro), iPhone 17, 17e, 17 Pro, 17 Pro Max e Air (A19 e A19 Pro), e iPhone Duo, 18 Pro e 18 Pro Max (A20 Pro).',
          '**Idiomas:** o Apple Intelligence exige que a Siri e o idioma do dispositivo estejam em um idioma suportado. A lista da Apple inclui chinês (simplificado e tradicional), dinamarquês, holandês, inglês, francês, alemão, italiano, japonês, coreano, norueguês, português, espanhol, sueco, turco e vietnamita. A Apple acrescenta que alguns recursos podem não estar disponíveis em todas as regiões ou idiomas.',
          '**Siri AI (beta do iOS 27):** a Apple lista inglês, francês, japonês, coreano, português e espanhol para começar, diz que não estará inicialmente disponível na UE no iOS e diz que alguns recursos do lado do servidor têm limites diários de uso. Ela é separada dos apps de chat no dispositivo deste guia.',
          '**O que o framework oferece (Apple, guia do iOS 27):** acesso ao Apple Foundation Models e, por meio de um protocolo Language Model, a modelos de nuvem como Claude e Gemini ou a qualquer provedor que o implemente; prompts multimodais que enviam imagens junto com texto; ferramentas Vision, como OCR e leitura de código de barras, que um modelo pode chamar no dispositivo; e Dynamic Profiles para trocar modelos, ferramentas e instruções em uma mesma sessão.',
          '**Base do iOS 26 (não reverificada nesta atualização):** o framework foi lançado com o iOS 26. Consulte a documentação atual da Apple sobre o limite de contexto e os recursos suportados antes de basear um projeto nele.',
          '**Private Cloud Compute:** o Apple Intelligence pode encaminhar pedidos maiores aos servidores da Apple. A Apple diz que os dados nunca são armazenados e são usados apenas para o seu pedido. Isso não é processamento no dispositivo, então trate "Apple Intelligence" e "offline" como afirmações diferentes.',
          '**Apps deste guia que usam o modelo da Apple:** [Locally AI](/pt/power-local-llm/locally-ai-review) (interface de chat), [Compass - Local AI](/pt/power-local-llm/compass-local-ai-review) (chat e OCR de capturas de tela), [Pajdo](/pt/power-local-llm/pajdo-review) (perguntas sobre o Apple Saúde), [LocalMindAI](/pt/power-local-llm/localmindai-review) (modelo da Apple ou modelos baixados), [Noema](/pt/power-local-llm/noema-review) e [Reins](/pt/power-local-llm/reins-review) (Apple Foundation Models como um dos backends), [Hillnote](/pt/power-local-llm/hillnote-review) (notas) e [AI on Device](/pt/power-local-llm/ai-on-device-review), que em vez disso traz o seu próprio modelo de 3B, mas exige um dispositivo compatível com o Apple Intelligence.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Se você só quer reescrita, resumos de notificações e as Ferramentas de Escrita no Mail, nas Mensagens e nas Notas, não precisa de um app de chat. Se quer uma janela de chat, escolha de modelo ou perguntas sobre documentos, instale um dos apps deste guia; para o equilíbrio entre o modelo da Apple e os modelos abertos, veja [IA no dispositivo da Apple vs LLMs locais](/pt/local-llms/apple-on-device-ai-vs-local-llms).',
          },
        ],
      },
      appStoreRules: {
        id: 'app-store-rules',
        title: 'Regras da App Store que moldam a IA local no iPhone',
        content:
          '**A App Store explica a maior parte das diferenças entre a IA local no iPhone e no desktop.** As Diretrizes de Revisão de Apps da Apple valem para todo app, e quatro delas importam aqui: apps autocontidos, consumo de energia, serviços em segundo plano e compartilhamento de dados. Este capítulo cita o texto das regras e dá a nossa leitura; não é aconselhamento jurídico e a Apple pode mudar as regras.',
        items: [
          '**Nada de código baixado que altere o app (diretriz 2.5.2).** Texto da Apple (tradução livre do inglês): os apps "não podem baixar, instalar nem executar código que introduza ou altere recursos ou funcionalidades do app". Os apps de IA local respeitam essa regra trazendo o motor dentro do app e baixando os pesos dos modelos, que são dados. Essa é a nossa leitura, não uma declaração da Apple.',
          '**Sem servidor Ollama no celular.** O Ollama não oferece app para iPhone, e o sandbox da App Store não deixa nenhum meio prático de executar um servidor Ollama ou um contêiner Docker. Existem alguns apps de shell em sandbox, mas eles não dão um servidor de modelos locais.',
          '**Somente APIs públicas (diretriz 2.5.1).** Os apps só podem usar APIs públicas, e é por isso que Foundation Models, Core ML, Metal e MLX são os caminhos disponíveis e o acesso privado ao Neural Engine não é.',
          '**Energia e calor (diretriz 2.4.2).** A Apple diz (tradução livre) que os apps "não devem drenar a bateria rapidamente, gerar calor excessivo nem sobrecarregar desnecessariamente os recursos do dispositivo". A geração prolongada testa esse limite, e é por isso que os apps reduzem a velocidade ou interrompem execuções longas.',
          '**O uso em segundo plano é limitado (diretriz 2.5.4).** Apps com multitarefa só podem usar serviços em segundo plano para fins previstos, como reprodução de áudio, localização, conclusão de tarefas e notificações locais. Um modelo não consegue continuar gerando nem agir como agente indefinidamente depois que você sai do app; o [Reins](/pt/power-local-llm/reins-review) observa que a geração em segundo plano exige o iOS 26.',
          '**Limites de memória.** O iOS limita a RAM que um app em primeiro plano pode usar. A Apple publica um entitlement de limite de memória ampliado (com.apple.developer.kernel.increased-memory-limit) que os desenvolvedores podem solicitar; não informamos o valor exato permitido. Você não consegue ver se um app o tem, então teste um modelo com o benchmark do próprio app antes de confiar nele.',
          '**JIT e compilação em tempo de execução.** Os motores de desktop costumam compilar código em tempo de execução; os apps de iOS trazem motores compilados com antecedência. Esse é um comportamento geral da plataforma, citado por vários projetos de motores, e uma das razões pelas quais os motores de iPhone ficam atrás dos de desktop em recursos.',
          '**Compartilhamento de dados (diretrizes 5.1.1 e 5.1.2).** Os apps devem vincular uma política de privacidade, explicar quais dados coletam, obter permissão antes de compartilhar dados pessoais com terceiros "inclusive com IA de terceiros" (tradução livre) e não podem reutilizar dados sem consentimento. Os rótulos de privacidade da App Store são preenchidos pelo desenvolvedor, ponto a que o capítulo de privacidade volta.',
          '**Sideloading e lojas alternativas.** Na UE, existem lojas de apps alternativas sob a Lei dos Mercados Digitais, mas cada desenvolvedor decide onde publicar. Nenhum dos apps deste guia precisa de uma; o [LLM Farm](/pt/power-local-llm/llm-farm-review) é a exceção que atualmente precisa ser compilado a partir do código-fonte no Xcode.',
          '**Betas no TestFlight.** Vários desenvolvedores oferecem versões no TestFlight (por exemplo o [Aiko](/pt/power-local-llm/aiko-review) para um teste gratuito e o [fullmoon](/pt/power-local-llm/fullmoon-review) para versões mais novas). As versões do TestFlight têm prazo e são inacabadas; use-as para testes, não para dados que você não pode perder.',
        ],
      },
      iphoneVsAndroid: {
        id: 'iphone-vs-android',
        title: 'O que o iPhone faz melhor e pior que o Android',
        content:
          '**O iPhone é mais fácil de começar e mais restrito para ampliar; o Android é o inverso.** Os iPhones vêm em poucas configurações conhecidas, trazem o modelo próprio da Apple e executam todo app por uma única loja. Os celulares Android variam muito mais em RAM e chip, permitem apps de terminal e sideloading e têm a sua própria pilha de modelos no dispositivo. Esta é uma comparação de plataformas a partir de informações públicas; para números hardware a hardware, veja [Galaxy vs iPhone: IA no dispositivo](/pt/local-llms/galaxy-vs-iphone-on-device-ai-2026) e o [guia de IA local no Android](/pt/power-local-llm/local-ai-on-android-guide), o guia irmão.',
        columns: ['Tópico', 'iPhone', 'Android'],
        rows: [
          {
            Tópico: 'Esforço de configuração',
            iPhone: 'App Store, um toque',
            Android: 'Play Store ou APK',
          },
          {
            Tópico: 'Modelo embutido',
            iPhone: 'Apple Foundation Models',
            Android: 'Modelos do fabricante e do Google',
          },
          {
            Tópico: 'Rodar o Ollama no celular',
            iPhone: 'Não há app Ollama para iPhone',
            Android: 'Possível via Termux (veja o guia)',
          },
          {
            Tópico: 'Teto de RAM',
            iPhone: 'Cerca de 12 GB nos modelos Pro',
            Android: 'Varia; confira cada celular',
          },
          {
            Tópico: 'Formatos de modelo',
            iPhone: 'GGUF, MLX, Core ML, LiteRT',
            Android: 'GGUF, LiteRT, MLC e mais',
          },
          {
            Tópico: 'Atalhos e automação',
            iPhone: 'Atalhos, App Intents',
            Android: 'Tasker e intents',
          },
          {
            Tópico: 'Quantidade de apps',
            iPhone: 'Menos opções de código aberto',
            Android: 'Mais opções de código aberto',
          },
          {
            Tópico: 'Trabalho em segundo plano',
            iPhone: 'Muito limitado',
            Android: 'Mais flexível, ainda limitado',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Muitos apps deste guia também rodam no Android ([PocketPal AI](/pt/power-local-llm/pocketpal-ai-review), [MLC Chat](/pt/power-local-llm/mlc-chat-review), [KernelAI](/pt/power-local-llm/kernelai-review), [LLM Hub](/pt/power-local-llm/llm-hub-review)), então uma casa com as duas plataformas muitas vezes pode usar o mesmo app em cada uma. Compare os detalhes do Android em [Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026).',
          },
        ],
      },
      chatMain: {
        id: 'chat-assistants',
        title: 'Assistentes de chat: os principais apps no dispositivo',
        content:
          '**Para chat geral em um iPhone, comece por um dos cinco apps que o nosso comparativo de apps para iPhone compara e depois veja os apps mais novos abaixo.** Cada linha traz o que o app faz e o seu limite, com franqueza. Os detalhes vêm das análises do PromptQuorum ligadas, das fichas das lojas e das páginas dos desenvolvedores; a menos que uma análise diga que testou o app, trate velocidade e qualidade como não medidas. Para as escolhas ranqueadas e as velocidades indicativas, veja [Melhores apps de IA local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) e, para a categoria inteira de chat, [Assistentes de chat comparados](/pt/power-local-llm/local-llm-chat-assistants-compared).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'O PocketPal AI é a opção gratuita padrão, o Private LLM a opção paga com Siri e Atalhos, o Locally AI o app gratuito com MLX e Apple Foundation Models, e o Google AI Edge Gallery o app gratuito com Gemma 4 para iPhone.',
          },
          {
            type: 'plain-terms',
            text:
              'Escolha um app de chat, baixe um modelo que caiba no seu iPhone e reserve os demais apps deste guia para tarefas especiais, como documentos, voz ou um servidor doméstico. Os preços vêm das análises ligadas e das páginas das lojas e podem mudar; confira na loja antes de comprar.',
          },
        ],
        items: [
          '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review): gratuito, de código aberto (MIT), executa qualquer modelo GGUF do Hugging Face e tem um benchmark embutido. Limite: chat isolado, sem ação de Atalhos nem da Siri mencionada; compras opcionais no app para presets premium.',
          '[Private LLM](/pt/power-local-llm/private-llm-review): US$ 4,99 uma vez para iPhone, iPad e Mac, mais de 140 modelos, sem conta. O desenvolvedor diz que ele se integra à Siri e aos Atalhos. Limite: código fechado e lista de modelos curada, então não dá para carregar arquivos arbitrários.',
          '[Locally AI](/pt/power-local-llm/locally-ai-review): gratuito, da equipe do LM Studio, baseado no Apple MLX, com uma ação de Atalhos, o Apple Foundation Models como opção de chat e um vínculo opcional com o LM Studio em um Mac. Limite: sem importação de GGUF arbitrário, código fechado, iOS 18.1 ou posterior.',
          '[Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review): app gratuito do Google para o Gemma 4 com modo de raciocínio, habilidades de agente e entrada de imagem e áudio. Limite: apenas modelos LiteRT-LM, rotulado como beta experimental, e o rótulo de privacidade na App Store mostra alguns diagnósticos do dispositivo.',
          '[Noema](/pt/power-local-llm/noema-review): gratuito, executa GGUF, MLX, ExecuTorch, Core ML e Apple Foundation Models em um só app, com chat com documentos no dispositivo. Limite: código fechado, sem RAM mínima publicada, iOS ou iPadOS 18 ou posterior.',
          '[Off Grid AI](/pt/power-local-llm/off-grid-ai-review): app gratuito de código aberto (MIT) com chat GGUF, modelos de imagem Stable Diffusion e fala para texto com Whisper no dispositivo, em iOS, Android, macOS e Windows. Limite: um app que faz muitas tarefas significa mais armazenamento e mais configurações.',
          '[Pocket AI](/pt/power-local-llm/pocket-ai-review): gratuito, llama.cpp com Metal, 28 modelos das famílias Qwen, Gemma, Llama, Mistral, Phi e DeepSeek (segundo o desenvolvedor), iPhone 12 ou mais novo. Limite: a entrada de voz com Whisper no dispositivo exige o desbloqueio Pro pago.',
          '[KernelAI](/pt/power-local-llm/kernelai-review): gratuito, 53 modelos abertos para baixar, de 112 MB a 3.11 GB, com documentos, visão e Atalhos segundo a ficha. Limite: código fechado, e a nossa análise se baseia em fontes públicas, não em um teste prático.',
          '[On Device AI](/pt/power-local-llm/on-device-ai-review): mais de 200 modelos GGUF e MLX para baixar, além de transcrição, importação de documentos e RSS, texto para fala no dispositivo e ganchos de automação. Limite: uma lista ampla de recursos em um app de código fechado; leia a seção de privacidade.',
          '[Enclave AI](/pt/power-local-llm/enclave-ai-review): gratuito com compras no app, offline no iPhone, iPad e Mac segundo a ficha, sem conta, com interação com documentos e Atalhos segundo o nosso comparativo. Limite: código fechado e planos pagos.',
        ],
      },
      chatMore: {
        id: 'chat-more',
        title: 'Assistentes de chat: apps novos, de nicho e híbridos',
        content:
          '**Estes apps atendem necessidades mais restritas: chat com preço único, chat só com o modelo da Apple, personas, projetos de privacidade de código aberto e híbridos que misturam dispositivo e nuvem.** Preste atenção especial aos avisos sobre híbridos, porque um app híbrido só é local enquanto você fica no modo no dispositivo.',
        items: [
          '[Cloak: Local AI](/pt/power-local-llm/cloak-local-ai-review): pago uma vez (US$ 1,99 na loja dos EUA), baixa um modelo recomendado, adiciona Gravações de Voz e um Recap semanal feito a partir de Fotos, Localização e Gravações de Voz no iPhone. Limite: sem seletor de modelo e o nome do modelo não é publicado.',
          '[Compass - Local AI](/pt/power-local-llm/compass-local-ai-review): gratuito, responde com o Apple Intelligence no dispositivo e lê capturas de tela com OCR no dispositivo; exige iOS ou iPadOS 26. Limite: a busca na web é opcional e, quando ativada, envia a sua consulta ao DuckDuckGo ou ao Brave.',
          '[AI on Device](/pt/power-local-llm/ai-on-device-review): US$ 4,99 uma vez, um modelo de 3B quantizado em 2 bits, exige iOS 26 e um dispositivo compatível com o Apple Intelligence. Limite: sem atualização desde 13 de outubro de 2025, então trate-o como parado.',
          '[Haplo AI](/pt/power-local-llm/haplo-ai-review): baixa modelos abertos como Qwen e Phi para chat, entrada de imagem e geração de imagens, sem conta. Limite: app pago; a nossa análise se baseia em fontes públicas.',
          '[Oscilla](/pt/power-local-llm/oscilla-review): gratuito, mais de 40 modelos abertos, voz em tempo real, memória embutida, busca na web e análise de arquivos e imagens; selo "Dados não coletados" da Apple. Limite: iOS 26 ou posterior, código fechado e sem atualização desde 21 de maio de 2026.',
          '[Frankly AI](/pt/power-local-llm/frankly-ai-review): modelos para baixar no dispositivo com personas por tarefa e sem conta; limite diário gratuito, o Pro libera o restante. Limite: teto de uso na faixa gratuita.',
          '[LLM Studio Go](/pt/power-local-llm/llm-studio-go-review): gratuito e com anúncios, chat, voz, imagens, música e fala com modelos GGUF e MLX, iOS ou iPadOS 18. Limite: anúncios e, segundo a análise, não tem relação com o LM Studio apesar do nome.',
          '[Local AI Chat - pocket](/pt/power-local-llm/local-ai-chat-pocket-review): chat offline freemium com geração de imagens e Atalhos segundo o slogan, iOS ou iPadOS 18.6 ou posterior. Limite: sem atualização desde 27 de maio de 2026 e compras no app em estilo de assinatura.',
          '[Loci AI](/pt/power-local-llm/loci-ai-review-offline-local-ai): gratuito no iPhone, iPad, Android, Mac e Windows, escolhe automaticamente um modelo que caiba no hardware. Limite: as afirmações do desenvolvedor sobre a força do modelo não são verificadas pelo PromptQuorum.',
          '[Ensu](/pt/power-local-llm/ensu-review): gratuito, de código aberto (AGPL), da Ente Labs, com entrada de imagem e ditado de voz local. Limite: o próprio desenvolvedor diz que ele ainda não é tão capaz quanto o ChatGPT ou o Claude Code, e a versão ainda é 0.x.',
          '[MemoryAI](/pt/power-local-llm/memoryai-review): chat offline gratuito com perguntas sobre documentos, uma memória editável e um Modo Criança com bloqueio por PIN; iOS 16.4+ e 4 GB+ de RAM. Limite: a política de privacidade lista eventos de uso e relatórios de falhas; código fechado.',
          '[Secret AI](/pt/power-local-llm/secret-ai-review): chat offline com personagens, Skills e ferramentas MCP em modelos GGUF, MNN e MLX. Limite: segundo a política de privacidade, as chamadas de ferramentas MCP e os servidores remotos opcionais podem enviar dados para fora do dispositivo, e a política é anterior a esses recursos.',
          '[LocalMindAI](/pt/power-local-llm/localmindai-review): chat, memória, reconhecimento de fala e leitura de documentos no iPhone e no iPad, usando o modelo da Apple ou modelos baixados; iOS 26. Limite: tinha poucos dias quando foi analisado, e a nossa análise se baseia em fontes públicas.',
          '[Solair AI](/pt/power-local-llm/solair-ai-review): assistente local-first com um fallback opcional na nuvem usando a sua própria chave; iOS 26. Limite: o fallback é na nuvem, então confira qual modo responde.',
          '[Liquid Apollo](/pt/power-local-llm/liquid-apollo-review): gratuito, executa modelos LFM2 da Liquid AI (350M a 2.6B) offline, com um modo opcional OpenRouter e backends personalizados; iOS 18. Limite: não é somente local; o modo OpenRouter exige a sua própria chave e internet.',
          '[Kai 9000](/pt/power-local-llm/kai-9000-review): assistente de código aberto com memória persistente e ferramentas. Limite: segundo a análise, ele envia mensagens a um serviço na nuvem por padrão; só roda localmente depois que você baixa um modelo no dispositivo.',
          '[CompactifAI APP](/pt/power-local-llm/compactifai-app-review): app gratuito da Multiverse Computing que oferece modelos comprimidos. Limite: o texto atual da loja descreve apenas modelos por API, então o que roda no celular não foi verificado.',
          '[Atomic Chat](/pt/power-local-llm/atomic-chat-review): app gratuito de código aberto (Apache 2.0) para macOS, Windows, Linux, iOS e Android com modelos GGUF, MLX e ONNX e uma API local compatível com a OpenAI. Limite: é um projeto multiplataforma, então leia a análise para saber o que a versão para iPhone inclui.',
          '[LLM Hub](/pt/power-local-llm/llm-hub-review): suíte para Android e iPhone com um agente compatível com MCP, geração de imagens e música, tradução, Whisper e chat por voz, além de uma faixa Premium paga. Limite: a licença é PolyForm Noncommercial, não uma licença de código aberto no sentido usual.',
          '[Llamatik](/pt/power-local-llm/llamatik-review): gratuito, MIT, um chatbot offline que a própria ficha chama de vitrine experimental do SDK Kotlin do desenvolvedor. Limite: a política de privacidade e o rótulo da loja listam análises do Firebase e relatórios de falhas.',
          '[Layla](/pt/power-local-llm/layla-review): US$ 19,99 uma vez no Android e no iOS, modelos GGUF com companheiros guiados por persona, vozes e geração de imagens. Limite: prioriza o Android e existe um modo opcional Layla Cloud.',
        ],
      },
      chatQuiet: {
        id: 'chat-quiet-apps',
        title: 'Apps parados, desatualizados ou fora da App Store',
        content:
          '**Um app sem atualização há mais de três meses pode estar sem manutenção; confira antes de depender dele.** As datas abaixo vêm dos cartões do diretório do PromptQuorum e de cada análise. Um app parado ainda pode funcionar, mas você fica sem correções, sem modelos novos e sem sinal de que o desenvolvedor voltará.',
        items: [
          '[MLC Chat](/pt/power-local-llm/mlc-chat-review): app de referência acelerado por Metal do projeto MLC LLM. Sem atualização na App Store desde 27 de setembro de 2024, segundo a nossa análise. O motor por trás dele, o [MLC LLM](/pt/power-local-llm/mlc-llm-explained), continua ativo.',
          '[LLM Farm](/pt/power-local-llm/llm-farm-review): última versão 1.4.3 em janeiro de 2025 e último envio de código em 30 de janeiro de 2026. Não pode ser instalado pela App Store nem pelo TestFlight (o README diz que está temporariamente indisponível); compile a partir do código-fonte no Xcode se precisar dos seus controles de amostragem.',
          '[fullmoon](/pt/power-local-llm/fullmoon-review): gratuito, MIT, executa modelos pequenos no Apple MLX, sem versão desde 28 de janeiro de 2025 e sem alteração de código desde 5 de maio de 2025.',
          '[Maid](/pt/power-local-llm/maid-review): app de chat de código aberto que prioriza o Android; a versão para iOS era um sideload e a nossa análise data as versões para iOS até a 2.0.7, em abril de 2025, então não é uma opção da App Store.',
          '[Aiko](/pt/power-local-llm/aiko-review): ainda à venda e útil para transcrição, mas a última atualização foi em 27 de junho de 2026, há mais de três meses.',
          'Outros apps sinalizados como parados neste guia: [Atomic Bot](/pt/power-local-llm/atomic-bot-review) (26 de maio de 2026), [Chapper](/pt/power-local-llm/chapper-review) (6 de agosto de 2026), [Enchanted](/pt/power-local-llm/enchanted-review) (7 de julho de 2026), [AI CutoutWerk](/pt/power-local-llm/ai-cutoutwerk-review) (16 de fevereiro de 2026) e [pcAI Photo Retouch](/pt/power-local-llm/pcai-photo-retouch-review) (20 de fevereiro de 2026).',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Parado é um sinal baseado em data, tirado dos cartões do diretório, não um veredito sobre a qualidade. Antes de pagar por um app desta lista, abra a página dele na App Store e leia você mesmo o histórico de versões.',
          },
        ],
      },
      vision: {
        id: 'vision-camera',
        title: 'Visão e câmera: faça perguntas sobre fotos e capturas de tela',
        content:
          '**Vários apps de iPhone aceitam uma imagem junto com a pergunta e respondem no dispositivo, mas modelos de visão pequenos erram mais do que os de nuvem.** Existem dois caminhos: um modelo de visão e linguagem que você baixa (o modelo lê a imagem por conta própria) e o OCR do sistema mais um modelo de texto (o celular extrai o texto e depois o modelo responde). O guia para desenvolvedores do iOS 27 da Apple diz que o framework Foundation Models agora aceita imagens junto com texto e deixa o modelo chamar ferramentas Vision, como OCR e leitura de código de barras, no dispositivo.',
        items: [
          '[Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review): Ask Image e Audio Scribe com modelos Gemma 4. Limite: apenas modelos LiteRT-LM; o Google informa números de memória do fabricante, não medições do PromptQuorum.',
          '[Compass - Local AI](/pt/power-local-llm/compass-local-ai-review): lê capturas de tela anexadas com OCR no dispositivo e responde com o Apple Intelligence. Limite: o OCR lê texto, não descreve uma cena; exige iOS ou iPadOS 26.',
          '[Oscilla](/pt/power-local-llm/oscilla-review): análise de arquivos e imagens com modelos com visão, como o MiniCPM-V, segundo a ficha. Limite: iOS 26 ou posterior e sem atualização desde 21 de maio de 2026.',
          '[Haplo AI](/pt/power-local-llm/haplo-ai-review): entrada de imagem e geração de imagens em um só app. Limite: a nossa análise se baseia em fontes públicas, então a qualidade do modelo não foi medida.',
          '[Ensu](/pt/power-local-llm/ensu-review): entrada de imagem com modelos baixados, gratuito e de código aberto. Limite: versão 0.x; o desenvolvedor diz que ele ainda não está no mesmo nível das grandes ferramentas de nuvem.',
          '[KernelAI](/pt/power-local-llm/kernelai-review): lista visão entre os recursos, com 53 modelos para baixar. Limite: quais modelos aceitam imagens varia de modelo para modelo.',
          '[MemoryAI](/pt/power-local-llm/memoryai-review): compreensão de imagens com modelos de visão depois do download de um modelo. Limite: você mesmo precisa escolher um modelo com capacidade de visão.',
          '[Reins](/pt/power-local-llm/reins-review): envia anexos de imagem, PDF e CSV a um modelo no seu próprio servidor, ou a um modelo MLX local. Limite: a qualidade depende do modelo de servidor que você escolher.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Não use um modelo de visão pequeno no dispositivo para nada em que uma leitura errada tenha custo, como rótulos de remédios, documentos jurídicos ou identificar plantas ou cogumelos para comer. Trate as respostas como ponto de partida e confira a fonte.',
          },
        ],
      },
      voice: {
        id: 'voice-speech',
        title: 'Voz: ditado, transcrição, leitura em voz alta, assistentes offline e Siri',
        content:
          '**A fala para texto está entre as tarefas mais consolidadas no dispositivo; os desenvolvedores relatam modelos da classe Whisper rodando em celulares recentes, e vários apps cobram uma vez em vez de por minuto.** O texto para fala e os assistentes de mãos livres são mais irregulares. Para montar você mesmo um pipeline, veja [Construa um assistente de voz local no seu celular](/pt/power-local-llm/voice-assistant-local-mobile-offline), para a categoria veja [Apps de voz e áudio comparados](/pt/power-local-llm/local-llm-voice-audio-compared) e para comparar motores veja [Comparativo de STT com Whisper local](/pt/power-local-llm/local-whisper-stt-comparison).',
        items: [
          '[Whisper Notes](/pt/power-local-llm/whisper-notes-review): US$ 7,99 uma vez, executa Whisper, Parakeet e SenseVoice no iPhone, no iPad e em Macs com Apple silicon, com identificação de falantes; a política de privacidade diz que o áudio e as transcrições nunca saem do dispositivo. Limite: código fechado; a análise se baseia em fontes públicas, não em testes práticos.',
          '[Aiko](/pt/power-local-llm/aiko-review): transcrição com Whisper no dispositivo para Mac, iPhone e Vision Pro, 100 idiomas, suporte a Atalhos, uma compra para todas as plataformas. Limite: última atualização em 27 de junho de 2026, então parado.',
          '[Lyonesse](/pt/power-local-llm/lyonesse-review): transcrição offline, notas de reuniões e chat com documentos para iPhone, iPad e Mac; o app do Apple Watch grava sozinho e transfere para o iPhone, que faz a transcrição. Limite: as afirmações do desenvolvedor sobre o processamento não são verificadas de forma independente.',
          '[OpenWhispr](/pt/power-local-llm/openwhispr-review): ditado e notas de reuniões sob licença MIT, com modelos Whisper ou Parakeet locais ou um provedor de nuvem à sua escolha. Limite: se a sua voz fica no dispositivo depende do modelo escolhido.',
          '[AquaVoice](/pt/power-local-llm/aquavoice-review): ditado por voz que digita no app ativo. Limite: segundo a análise, é um serviço na nuvem, listado aqui para você não confundi-lo com ditado local.',
          '[Ensu](/pt/power-local-llm/ensu-review) e [MemoryAI](/pt/power-local-llm/memoryai-review): ditado de voz local (Ensu) e voz de mãos livres com entrada de fala no dispositivo e leitura em voz alta (MemoryAI) dentro de um app de chat. Limite: a qualidade da voz acompanha o modelo de chat pequeno por trás.',
          '[Oscilla](/pt/power-local-llm/oscilla-review), [LLM Studio Go](/pt/power-local-llm/llm-studio-go-review) e [Pocket AI](/pt/power-local-llm/pocket-ai-review): voz em tempo real, chat por voz com fala e entrada de Whisper no dispositivo (Pro pago), respectivamente. Limite: a voz acrescenta carga de memória e de bateria sobre o modelo de chat.',
          '[Castmates](/pt/power-local-llm/castmates-review): chamadas de voz com personagens que, segundo o desenvolvedor, rodam no celular. Limite: código fechado, então a afirmação se apoia no desenvolvedor.',
          '[Cloak: Local AI](/pt/power-local-llm/cloak-local-ai-review): transforma Gravações de Voz em notas ou conversas. Limite: um modelo fixo.',
          '[Home Assistant Assist](/pt/power-local-llm/home-assistant-assist-review): o assistente de voz dentro do Home Assistant, local com Whisper, Piper e Wyoming segundo a análise; não é um app de iPhone independente. Limite: exige um servidor Home Assistant e um agente LLM opcional, em parte experimental.',
          '[Murmur](/pt/power-local-llm/murmur-review): compõe música instrumental para fotos, vídeos e jogos no dispositivo, com um desbloqueio Pro único. Limite: sem vocais.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Siri e Atalhos: o [Private LLM](/pt/power-local-llm/private-llm-review) lista integração com a Siri e os Atalhos, o [Locally AI](/pt/power-local-llm/locally-ai-review) e o [Aiko](/pt/power-local-llm/aiko-review) oferecem ações de Atalhos, e o nosso comparativo para iPhone descreve a ação de Atalhos Usar Modelo, que pode encaminhar um prompt ao modelo da Apple no dispositivo. Nenhum deles substitui a própria Siri; você pede à Siri que execute um Atalho que chama o app.',
          },
        ],
      },
      documents: {
        id: 'documents-rag',
        title: 'Documentos, PDFs e recuperação no celular',
        content:
          '**Conversar com alguns PDFs ou notas funciona em um iPhone, mas bibliotecas inteiras pertencem a um servidor doméstico.** O chat com documentos no dispositivo divide os arquivos em pedaços, indexa-os com um modelo de embeddings pequeno e passa os melhores pedaços ao modelo de chat. Os modelos pequenos têm janelas de contexto curtas, então as respostas podem perder conteúdo e citações inventadas são possíveis. Para busca em escala de biblioteca, veja [Apps de conhecimento e recuperação comparados](/pt/power-local-llm/local-llm-knowledge-retrieval-compared).',
        items: [
          '[Private Mind](/pt/power-local-llm/private-mind-review): chat de código aberto (MIT) da Software Mansion que responde a perguntas sobre os seus PDFs e arquivos de texto com recuperação no dispositivo e citação das fontes, usando o React Native ExecuTorch. Limite: a versão 1.3.0 adicionou uma chave opcional Web que busca páginas, então ele é offline por padrão, mas não é offline quando esse recurso está ligado.',
          '[MemoryAI](/pt/power-local-llm/memoryai-review): perguntas sobre documentos e uma Agent Memory editável. Limite: código fechado e eventos de uso saem do celular.',
          '[LocalMindAI](/pt/power-local-llm/localmindai-review): lê os seus documentos no dispositivo com o modelo da Apple ou um modelo baixado. Limite: iOS 26 e muito novo quando foi analisado.',
          '[Noema](/pt/power-local-llm/noema-review): chat com documentos no dispositivo nos seus cinco formatos de modelo. Limite: código fechado; sem número de RAM publicado.',
          '[Lyonesse](/pt/power-local-llm/lyonesse-review): chat com os seus próprios documentos ao lado das transcrições. Limite: o foco são o Apple Watch e os recursos de reuniões.',
          '[Arbiter](/pt/power-local-llm/arbiter-local-ai-chat-review): mantém no dispositivo os documentos enviados para resumos em um iPhone 13 Pro ou mais novo (cerca de 6 GB de RAM ou mais) e pode acessar o LM Studio, o Ollama ou o Arbiter for Mac para usar um modelo maior. Limite: as respostas de modelos maiores saem do celular para o seu computador.',
          '[KernelAI](/pt/power-local-llm/kernelai-review) e [Enclave AI](/pt/power-local-llm/enclave-ai-review): ambos listam recursos de documentos em um app de chat geral. Limite: confira os limites de tamanho e formato de arquivo no app antes de depender dele.',
          '[Reins](/pt/power-local-llm/reins-review): anexos PDF, CSV e de texto enviados a um modelo no seu próprio servidor. Limite: o processamento acontece no servidor, não no celular.',
          '[AnythingLLM Mobile](/pt/power-local-llm/anythingllm-mobile-review): o Android tem um modo autônomo no dispositivo e o pareamento com o AnythingLLM Desktop; a nossa análise informa que o app de iOS ainda não foi lançado. Limite: enquanto o iOS não chega, use um navegador com o seu próprio servidor AnythingLLM.',
        ],
      },
      translation: {
        id: 'translation',
        title: 'Tradução no dispositivo',
        content:
          '**A tradução combina naturalmente com um modelo pequeno no dispositivo, porque a tarefa é estreita e vários apps trazem modelos ajustados para tradução.** O PromptQuorum não fez benchmark da qualidade de tradução no iPhone. É provável que a qualidade caia em idiomas raros, expressões idiomáticas e documentos longos, e todo motor no dispositivo exige um download por modelo ou idioma.',
        items: [
          '[On-Device AI Translator](/pt/power-local-llm/on-device-ai-translator-review): traduz no iPhone com modelos Hy-MT2, TranslateGemma e Qwen para baixar e oferece a tradução embutida da Apple como motor gratuito; iOS 18.4 ou posterior. Limite: os modelos de IA ficam atrás de compras no app cujos preços as fontes não mostram, e a política de privacidade é anterior ao app.',
          '[LLM Hub](/pt/power-local-llm/llm-hub-review): inclui tradução na sua suíte para Android e iPhone. Limite: a tradução é um recurso entre muitos e a licença é não comercial.',
          'Apps de chat gerais como o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou o [Locally AI](/pt/power-local-llm/locally-ai-review) também podem traduzir se você carregar um modelo multilíngue, como um da família Qwen ou Gemma. Limite: sem glossário, sem layout de documento e sem garantia de qualidade por idioma.',
          'O app Tradutor da própria Apple e a tradução do sistema são separados dos apps acima e não foram verificados para este guia; confira no app Tradutor se o seu par de idiomas pode ser baixado para uso offline.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Para livros inteiros ou documentos longos, um caminho pelo desktop é mais prático; veja [Traduzir livros com LLMs](/pt/power-local-llm/translate-books-with-llms-review). O suporte de idiomas do Apple Intelligence é uma lista separada, tratada no capítulo sobre o Apple Intelligence.',
          },
        ],
      },
      images: {
        id: 'image-generation-editing',
        title: 'Geração de imagens e edição de fotos',
        content:
          '**Um iPhone consegue gerar imagens com modelos de difusão pequenos e editar fotos com modelos de segmentação, mas a geração é lenta, ocupa muito armazenamento e esquenta o celular.** Os arquivos de modelo são downloads de vários gigabytes, e o PromptQuorum não tem números de velocidade para nenhum app de imagens para iPhone. Para os prós e contras entre nuvem e local, veja [Geração de imagens com IA local vs nuvem](/pt/power-local-llm/local-ai-image-generation-vs-cloud) e, para a categoria, [Apps de imagem e vídeo comparados](/pt/power-local-llm/local-llm-images-video-compared).',
        items: [
          '[Draw Things](/pt/power-local-llm/draw-things-review): gera imagens com Stable Diffusion, SDXL, Flux e outros modelos de difusão no macOS, iOS, iPadOS e visionOS, sem conta para a geração local, iOS 15.4 ou posterior. Limite: não é 100% local porque também oferece um modo opcional na nuvem; modelos maiores exigem mais RAM.',
          '[Genva](/pt/power-local-llm/genva-review): app para iPhone e iPad que transforma prompts de texto e fotos em imagens no dispositivo, com ampliação, depois de um download único do modelo. Limite: foi lançado como versão 1.0.0 em 14 de outubro de 2026, então não tem histórico.',
          '[Haplo AI](/pt/power-local-llm/haplo-ai-review), [Off Grid AI](/pt/power-local-llm/off-grid-ai-review) e [LLM Studio Go](/pt/power-local-llm/llm-studio-go-review): apps de chat que também geram imagens no dispositivo (Haplo AI, Off Grid AI com modelos Stable Diffusion, LLM Studio Go também com música e fala). Limite: a qualidade e a velocidade das imagens ficam atrás de apps dedicados.',
          '[Local AI Chat - pocket](/pt/power-local-llm/local-ai-chat-pocket-review) e [Layla](/pt/power-local-llm/layla-review): chat offline com geração de imagens, e o Layla também com vozes e personas. Limite: o Local AI Chat - pocket está parado desde 27 de maio de 2026; o Layla prioriza o Android.',
          '[Tina](/pt/power-local-llm/tina-review): gera imagens pelo ComfyUI em um servidor que você hospeda e também pode executar modelos no dispositivo. Limite: a etapa de imagem exige o seu próprio servidor.',
          '[AI CutoutWerk](/pt/power-local-llm/ai-cutoutwerk-review): removedor de fundo offline e compositor de recortes para iPhone, iPad e Mac, usando um modelo de segmentação Core ML. Limite: sem atualização desde 16 de fevereiro de 2026.',
          '[pcAI Photo Retouch](/pt/power-local-llm/pcai-photo-retouch-review): restaura fotos antigas e aplica estilos artísticos com uma IA que, segundo o desenvolvedor, roda inteiramente no dispositivo. Limite: modelo não nomeado, código não publicado, sem atualização desde 20 de fevereiro de 2026.',
        ],
      },
      photos: {
        id: 'photos-gallery-search',
        title: 'Bibliotecas de fotos e busca na galeria',
        content:
          '**A busca de fotos com IA no iPhone costuma ser um cliente de uma biblioteca que faz a indexação em outro lugar: no celular, com um recurso opcional, ou em um servidor que você mantém.** As três bibliotecas abaixo adotam abordagens diferentes, e nenhuma delas adiciona um modelo de chat. O reconhecimento facial processa dados biométricos, então confira as regras do lugar onde você e as pessoas das suas fotos vivem antes de ativá-lo.',
        items: [
          '[Ente Photos](/pt/power-local-llm/ente-photos-review): backup de fotos de código aberto que, segundo a Ente, tem criptografia de ponta a ponta; o reconhecimento facial e a busca mágica em linguagem natural rodam no seu dispositivo e ficam desligados até você ativá-los. Limite: as fotos ficam armazenadas criptografadas na nuvem da Ente, e a primeira indexação consome bateria.',
          '[Immich](/pt/power-local-llm/immich-review): backup auto-hospedado de fotos e vídeos com apps para iPhone e Android; a busca inteligente e o reconhecimento facial rodam em um contêiner de aprendizado de máquina que você hospeda, instalado com Docker. Limite: exige um servidor, o banco de dados guarda apenas metadados, então os arquivos precisam de um backup separado, e não há recurso de chat nem de LLM.',
          '[Mylio Photos](/pt/power-local-llm/mylio-photos-review): biblioteca de fotos, vídeos e documentos com busca SmartTag, reconhecimento facial e de texto que, segundo a Mylio, rodam nos seus próprios dispositivos; download gratuito, planos por assinatura. Limite: a Mylio não diz onde roda o chatbot de ajuda dentro do app.',
          'Galerias web auto-hospedadas que você abre no navegador do iPhone ou em um app complementar, como [análise do PhotoPrism](/pt/power-local-llm/photoprism-review), [análise do Photoview](/pt/power-local-llm/photoview-review) e [análise do Home Gallery](/pt/power-local-llm/home-gallery-review), são analisadas separadamente; leia cada análise para saber o que roda onde.',
        ],
      },
      notes: {
        id: 'notes-knowledge',
        title: 'Notas, bases de conhecimento e favoritos',
        content:
          '**A maioria das ferramentas de notas e favoritos coloca a IA em um servidor ou em um provedor de modelos à sua escolha, e o app de iPhone é o cliente de captura e leitura.** Isso ainda pode ser totalmente privado se o servidor for seu e o modelo for local, mas não é inferência no dispositivo. Cada análise informa o que roda onde.',
        items: [
          '[Hillnote](/pt/power-local-llm/hillnote-review): espaço de notas em Markdown local-first para Mac, Windows, iPhone e Android com IA no dispositivo por meio do Ollama e do Apple Intelligence, além de modelos de nuvem e sincronização opcionais. Limite: o Ollama roda em um computador, não no celular, e os modelos de nuvem são opcionais, mas não são locais.',
          '[Logseq](/pt/power-local-llm/logseq-review): outliner de código aberto e local-first; a versão de banco de dados 2.0.2 é um beta cujo README avisa que é possível perder dados. Limite: a IA vem de um servidor MCP opcional, não de um modelo embutido.',
          '[SiYuan](/pt/power-local-llm/siyuan-review): espaço de conhecimento auto-hospedado, AGPL, para Windows, macOS, Linux, Android, iOS e HarmonyOS, com recursos de IA opcionais que se conectam a um provedor de modelos à sua escolha. Limite: a sincronização na nuvem exige assinatura ou a compra única do PRO.',
          '[Karakeep](/pt/power-local-llm/karakeep-review): app auto-hospedado de favoritos e notas com apps nativos para iOS e Android e marcação por IA via OpenAI ou um endpoint Ollama local. Limite: você executa o servidor com Docker, e a marcação só é local se você escolher o Ollama.',
          '[Linkwarden](/pt/power-local-llm/linkwarden-review): arquiva uma cópia de cada página que você salva e pode marcar links com um modelo de IA que você configura, auto-hospedado ou em uma edição Cloud paga. Limite: o app de iPhone é um cliente; a etapa de IA roda no servidor.',
          '[Lyonesse](/pt/power-local-llm/lyonesse-review) e [Cloak: Local AI](/pt/power-local-llm/cloak-local-ai-review): transformam gravações em notas (Lyonesse) ou em um recap semanal a partir de Fotos, Localização e Gravações de Voz (Cloak). Limite: ambos são de código fechado.',
        ],
      },
      health: {
        id: 'health-wellness',
        title: 'Perguntas sobre saúde e bem-estar',
        content:
          '**Um app de iPhone analisado responde a perguntas sobre os seus dados do Apple Saúde com o Apple Intelligence no dispositivo, e é o único app de saúde do nosso conjunto de iPhone.** Os dados de saúde são dados pessoais sensíveis, e um modelo de linguagem pequeno não é um profissional de saúde.',
        items: [
          '[Pajdo](/pt/power-local-llm/pajdo-review): app gratuito para iPhone, iPad e Apple Watch que transforma os dados do Apple Saúde em um de oito humores e, segundo o site, responde às suas perguntas sobre esses dados com o Apple Intelligence no dispositivo. O plano gratuito inclui 5 perguntas por semana; o Pro remove o limite e adiciona planejamento de treinos e um relatório para consulta médica. Limite: código fechado, iOS 26 ou posterior, e a afirmação de processamento no dispositivo se apoia na palavra do desenvolvedor.',
          'Apps de chat gerais dos capítulos de chat podem discutir sono, treino ou nutrição em termos gerais. Limite: eles não têm acesso aos seus dados do Saúde, a menos que um app peça permissão, e modelos pequenos podem afirmar fatos errados com confiança.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'As respostas no dispositivo não são aconselhamento médico e não substituem um médico. Não as use para interpretar sintomas, alertas de frequência cardíaca nem dúvidas sobre medicamentos; leia a política de privacidade do app antes de conceder acesso ao Apple Saúde.',
          },
        ],
      },
      roleplay: {
        id: 'roleplay-companions',
        title: 'Apps de roleplay e companhia, com notas de segurança de conteúdo',
        content:
          '**O roleplay e o chat de companhia são uma parte grande do mercado de apps de IA local para iPhone, e os apps diferem muito quanto a o modelo rodar no celular, ao conteúdo que permitem e a como tratam menores.** Local não significa moderado, e nuvem não significa mais seguro. Leia a classificação etária e as configurações de conteúdo adulto antes de você, ou qualquer pessoa da sua casa, instalar um. Para interfaces de desktop, veja [SillyTavern vs Agnai vs RisuAI para roleplay](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        items: [
          '[Castmates](/pt/power-local-llm/castmates-review): app gratuito para iPhone com 35 personagens prontos, personagens personalizados e sem conta; o desenvolvedor cita o Impish Llama 3B (Q4_K_M) rodando pelo llama.cpp depois de um download de cerca de 1.9 GB. O plano Pro remove o limite diário de mensagens e libera um modo Mature opcional, só para adultos. Limite: código fechado, então a afirmação de processamento no dispositivo se apoia no desenvolvedor.',
          '[Frankly AI](/pt/power-local-llm/frankly-ai-review): modelos no dispositivo com personas por tarefa e sem conta; limite diário gratuito. Limite: as personas são voltadas a tarefas, e o Pro libera o restante do app.',
          '[Layla](/pt/power-local-llm/layla-review): companheiro de IA guiado por persona, com personagens de roleplay, vozes e geração de imagens no dispositivo; US$ 19,99 uma vez. Limite: existe um modo opcional Layla Cloud, ativado separadamente.',
          '[Secret AI](/pt/power-local-llm/secret-ai-review): personagens personalizados em modelos GGUF, MNN e MLX; o desenvolvedor diz que as conversas, os personagens e as fotos permanecem privados. Limite: segundo a política de privacidade, as ferramentas MCP e os servidores remotos podem enviar dados para fora do dispositivo.',
          '[HiWaifu](/pt/power-local-llm/hiwaifu-review): roleplay com memória de longo prazo, lorebooks e chats em grupo, classificado 18+. Limite: parece ser um serviço na nuvem, e a ficha não diz onde o modelo roda.',
          '[Swerve](/pt/power-local-llm/swerve-ai-review): chat de histórias e personagens com personagens da comunidade e ramificações. Limite: segundo a ficha, é um serviço online, não IA no dispositivo.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Notas de segurança, em linguagem simples. Primeiro, a idade: vários desses apps têm classificação 18+ na App Store ou um modo só para adultos, e um modelo no dispositivo não tem um filtro no servidor em que se possa confiar. Segundo, a privacidade: apps de roleplay na nuvem enviam as suas conversas a um serviço, e até apps locais podem enviar dados analíticos. Terceiro, a dependência emocional: o chat de companhia pode parecer pessoal, e isso é uma característica do design, não um relacionamento. Quarto, dados reais: nunca digite o seu endereço, dados de saúde ou informações privadas de outras pessoas em um chat de roleplay. Para o iPhone de uma criança, use os limites de conteúdo e de classificação de apps do Tempo de Uso da Apple em vez de confiar nas configurações do próprio app.',
          },
        ],
      },
      smartHome: {
        id: 'smart-home-agents',
        title: 'Casa inteligente e agentes',
        content:
          '**No iPhone, a IA da casa inteligente e os agentes são quase sempre clientes de um software que roda em um servidor doméstico, porque o iOS não mantém um modelo ou agente rodando em segundo plano.** O celular é o microfone, a tela e o controle remoto; o servidor doméstico faz o trabalho de longa duração. Para um olhar honesto sobre se os agentes locais autônomos são práticos, veja [Os agentes locais autônomos realmente funcionam?](/pt/power-local-llm/autonomous-local-agents-actually-work).',
        items: [
          '[Home Assistant Assist](/pt/power-local-llm/home-assistant-assist-review): assistente de voz dentro do Home Assistant, totalmente local com Whisper, Piper e Wyoming, com agentes LLM opcionais na nuvem e no Ollama. Limite: não é um app independente; o pipeline local completo exige o Home Assistant OS.',
          '[Scrypted](/pt/power-local-llm/scrypted-review): plataforma de câmeras e NVR de código aberto que transmite câmeras para o HomeKit, o Google Home e o Home Assistant, com resumos opcionais por LLM local via llama.cpp. Limite: roda no seu próprio servidor, e imagens de câmeras com outras pessoas geram deveres legais em muitos lugares.',
          '[Nekoni](/pt/power-local-llm/nekoni-review): agente pessoal auto-hospedado (Ollama, documentos, skills agendadas) em um computador seu, com o qual você conversa a partir de um iPhone ou navegador por um link criptografado direto. Limite: exige um Mac ou uma máquina Linux ligada o tempo todo.',
          '[Kai 9000](/pt/power-local-llm/kai-9000-review) e [LLM Hub](/pt/power-local-llm/llm-hub-review): assistentes com memória persistente e com um agente compatível com MCP, respectivamente. Limite: o uso de ferramentas e a busca na web acrescentam chamadas de rede, então não são recursos offline.',
          '[Atomic Bot](/pt/power-local-llm/atomic-bot-review): empacota o framework de agentes de código aberto [análise do OpenClaw](/pt/power-local-llm/openclaw-review) para desktop e celular e pode rodar localmente ou na nuvem. Limite: sinalizado como parado neste guia (última atualização em 26 de maio de 2026).',
        ],
      },
      remote: {
        id: 'remote-mode',
        title: 'Modo remoto: o iPhone como cliente leve do seu próprio servidor',
        content:
          '**Se o seu iPhone é pequeno demais para o modelo que você quer, execute o modelo em um Mac ou PC em casa e use o iPhone como tela.** Esse é o caminho habitual para modelos de 7B-70B a partir de um iPhone. A página de download do Ollama lista macOS, Windows e Linux e nenhum app para iPhone, então o servidor fica em outro lugar (o nosso comparativo para iPhone registra isso). Do lado do servidor, veja o [Guia de LLM local no Apple Silicon](/pt/local-llms/apple-silicon-local-llm-guide-2026), [MLX vs Ollama vs llama.cpp no Mac](/pt/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) e [Ferramentas de execução e serviço comparadas](/pt/power-local-llm/local-llm-run-serve-compared).',
        columns: ['App', 'Conecta-se a', 'Também roda modelos no celular'],
        rows: [
          {
            App: '[Reins](/pt/power-local-llm/reins-review)',
            'Conecta-se a': 'Ollama, LM Studio, compatível com OpenAI',
            'Também roda modelos no celular': 'Sim, modelos MLX',
          },
          {
            App: '[Enchanted](/pt/power-local-llm/enchanted-review)',
            'Conecta-se a': 'Somente Ollama',
            'Também roda modelos no celular': 'Não',
          },
          {
            App: '[OpenClient](/pt/power-local-llm/openclient-review)',
            'Conecta-se a': 'Ollama, LiteLLM, compatível com OpenAI',
            'Também roda modelos no celular': 'Não',
          },
          {
            App: '[Chapper](/pt/power-local-llm/chapper-review)',
            'Conecta-se a': 'LM Studio, Ollama, servidor llama.cpp',
            'Também roda modelos no celular': 'Sim, complemento de US$ 4,99',
          },
          {
            App: '[Tina](/pt/power-local-llm/tina-review)',
            'Conecta-se a': 'Ollama, llama.cpp, ComfyUI',
            'Também roda modelos no celular': 'Sim',
          },
          {
            App: '[LM Mini](/pt/power-local-llm/lm-mini-review)',
            'Conecta-se a': 'LM Studio, Ollama, Jan AI, oMLX',
            'Também roda modelos no celular': 'Sim',
          },
          {
            App: '[Arbiter](/pt/power-local-llm/arbiter-local-ai-chat-review)',
            'Conecta-se a': 'LM Studio, Ollama, Arbiter for Mac',
            'Também roda modelos no celular': 'Sim',
          },
          {
            App: '[LocalMind](/pt/power-local-llm/localmind-review)',
            'Conecta-se a': 'Ollama, LM Studio, OpenRouter',
            'Também roda modelos no celular': 'Sim',
          },
          {
            App: '[Liquid Apollo](/pt/power-local-llm/liquid-apollo-review)',
            'Conecta-se a': 'LM Studio, Ollama, OpenRouter',
            'Também roda modelos no celular': 'Sim, LFM2',
          },
          {
            App: '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            'Conecta-se a': 'LM Studio em um Mac (LM Link)',
            'Também roda modelos no celular': 'Sim',
          },
          {
            App: '[MLXHub](/pt/power-local-llm/mlxhub-review)',
            'Conecta-se a': 'Serve um modelo no seu Wi-Fi (Plus)',
            'Também roda modelos no celular': 'Sim',
          },
          {
            App: '[Nekoni](/pt/power-local-llm/nekoni-review)',
            'Conecta-se a': 'Agente no seu próprio computador',
            'Também roda modelos no celular': 'Não',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'Fora de casa você precisa de um caminho seguro até o servidor. Uma VPN em malha privada, como o Tailscale, é uma escolha comum, porque o Ollama não exige autenticação por padrão e não deve ser exposto à internet pública por uma porta do roteador. Confira a análise e as configurações de cada cliente quanto a suporte a HTTPS e a chave de API antes de conectar.',
          },
          {
            type: 'tip',
            text:
              'Vários clientes acima também dizem que podem carregar modelos no celular, o que os torna um bom app único: modelo pequeno offline, modelo grande em casa. Leia [IA local atrás de um firewall e offline](/pt/power-local-llm/local-ai-behind-firewall-offline-2026) para configurações com firewall e offline.',
          },
        ],
      },
      developers: {
        id: 'developer-paths',
        title:
          'Caminhos para desenvolvedores: Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch e Foundation Models',
        content:
          '**Quem desenvolve recursos de IA para iPhone escolhe entre o modelo próprio da Apple, os runtimes da Apple para o seu próprio modelo e motores multiplataforma.** A escolha decide quais celulares, idiomas e regras de loja se aplicam. Este capítulo é apenas uma orientação; leia a documentação de cada projeto antes de desenvolver.',
        items: [
          '**Framework Foundation Models:** API nativa em Swift da Apple para o modelo no dispositivo, com imagens, ferramentas Vision, Dynamic Profiles e, por meio de um protocolo Language Model, provedores de nuvem (Apple, guia do iOS da WWDC26). Exige hardware com Apple Intelligence. Documentação: [Foundation Models](https://developer.apple.com/documentation/FoundationModels).',
          '**Core ML:** framework da Apple para executar modelos convertidos na CPU, na GPU e no Neural Engine; o caminho consolidado para visão, áudio e modelos pequenos. O [AI CutoutWerk](/pt/power-local-llm/ai-cutoutwerk-review) traz um modelo de segmentação Core ML. Documentação: [Core ML](https://developer.apple.com/documentation/coreml).',
          '**Core AI:** um novo framework que a Apple introduziu com o iOS 27 para trazer os seus próprios modelos ao dispositivo, usando memória unificada e o Neural Engine, com compilação antecipada. Novo demais para a maioria dos apps deste guia; veja o [guia do iOS da WWDC26](https://developer.apple.com/wwdc26/guides/ios/).',
          '**MLX Swift:** o framework de arrays MLX da Apple para Swift, por trás do [Locally AI](/pt/power-local-llm/locally-ai-review), do [fullmoon](/pt/power-local-llm/fullmoon-review) e do [MLXHub](/pt/power-local-llm/mlxhub-review). [mlx-swift](https://github.com/ml-explore/mlx-swift). Para o lado Python, veja [MLX-LM explicado](/pt/power-local-llm/mlx-lm-explained).',
          '**llama.cpp:** o motor em C/C++ com Metal que executa arquivos GGUF, por trás do [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) e do [Pocket AI](/pt/power-local-llm/pocket-ai-review). [llama.cpp](https://github.com/ggml-org/llama.cpp).',
          '**MLC LLM:** runtime baseado em compilador com documentação de implantação para iOS e o app de referência [MLC Chat](/pt/power-local-llm/mlc-chat-review). Veja [MLC LLM](/pt/power-local-llm/mlc-llm-explained) e a [documentação do MLC para iOS](https://llm.mlc.ai/docs/deploy/ios.html).',
          '**ExecuTorch:** runtime no dispositivo do PyTorch, usado por meio do React Native ExecuTorch no [Private Mind](/pt/power-local-llm/private-mind-review) e suportado pelo [Noema](/pt/power-local-llm/noema-review). [ExecuTorch](https://github.com/pytorch/executorch).',
          '**LiteRT-LM:** runtime do Google por trás do [Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) ([LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)).',
          '**SDKs:** [RunAnywhere](/pt/power-local-llm/runanywhere-review) (LLM, fala para texto, texto para fala e detecção de atividade de voz; licença personalizada com termos comerciais), [Llamatik](/pt/power-local-llm/llamatik-review) (Kotlin Multiplatform, MIT) e [SwiftLM](/pt/power-local-llm/swiftlm-review) (servidor Swift MLX para Macs com Apple silicon, com o app complementar de iOS SwiftBuddy).',
          '**Betas no TestFlight:** uma forma gratuita de distribuir versões iniciais a testadores; as versões expiram, então planeje-se para isso. As regras de revisão de apps da Apple continuam valendo para a versão final.',
        ],
      },
      privacy: {
        id: 'privacy-telemetry',
        title: 'Privacidade e telemetria na prática',
        content:
          '**"Roda no seu dispositivo" e "não envia nada" são afirmações diferentes, e só a segunda é uma garantia de privacidade.** Os rótulos de privacidade da App Store da Apple são preenchidos pelo desenvolvedor, então descrevem o que o desenvolvedor diz que o app faz. Um modelo no dispositivo ainda pode estar dentro de um app que envia relatórios de falhas, eventos de uso, buscas opcionais na web ou downloads de modelos. Todas as declarações de privacidade em nível de app aqui foram tiradas da política de privacidade, do rótulo da App Store ou da página do desenvolvedor de cada app, como resumido na análise ligada, e não foram verificadas por análise de rede. Para uma lista de verificação mais completa, veja [Lista de verificação de segurança e privacidade de LLMs locais](/pt/local-llms/local-llm-security-privacy-checklist).',
        items: [
          '**O que "zero telemetria" pode significar:** nenhum SDK de análise no app. Isso não cobre o download do modelo (o host vê o seu pedido), a App Store, a busca opcional na web, os servidores remotos que você conecta nem os backups que incluem dados do app.',
          '**Rótulos nas nossas análises:** o [Oscilla](/pt/power-local-llm/oscilla-review) tem o selo "Dados não coletados" da Apple; o [Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) mostra alguns diagnósticos do dispositivo no rótulo; o [MemoryAI](/pt/power-local-llm/memoryai-review) e o [Llamatik](/pt/power-local-llm/llamatik-review) enviam eventos de uso ou dados analíticos e relatórios de falhas sem o conteúdo das conversas, segundo as suas políticas.',
          '**Recursos opcionais que quebram o "offline":** a busca na web no [Compass - Local AI](/pt/power-local-llm/compass-local-ai-review) (DuckDuckGo ou Brave), a chave Web no [Private Mind](/pt/power-local-llm/private-mind-review), as ferramentas MCP no [Secret AI](/pt/power-local-llm/secret-ai-review) e o modo OpenRouter no [Liquid Apollo](/pt/power-local-llm/liquid-apollo-review).',
          '**Nuvem por padrão:** o [Kai 9000](/pt/power-local-llm/kai-9000-review) envia mensagens a um serviço na nuvem por padrão, segundo a análise, e só roda localmente depois que você baixa um modelo no dispositivo; o [Swerve](/pt/power-local-llm/swerve-ai-review) está documentado como um serviço online, e o [HiWaifu](/pt/power-local-llm/hiwaifu-review) parece ser um (a ficha não diz onde o modelo roda); o [AquaVoice](/pt/power-local-llm/aquavoice-review) é ditado na nuvem.',
          '**Deriva entre política e versão:** o [LM Mini](/pt/power-local-llm/lm-mini-review) tem, segundo a sua política de privacidade, uma versão datada de agosto de 2025 que descreve apenas a sua conexão com o LM Studio, e o [Secret AI](/pt/power-local-llm/secret-ai-review) tem uma política atualizada pela última vez em maio de 2025, antes de ele adicionar ferramentas. Compare a data com a versão do app.',
          '**Verifique você mesmo, em três passos:** (1) Baixe o modelo no Wi-Fi, depois ative o Modo Avião e teste o app. (2) Use o celular normalmente por uma semana e depois abra Ajustes > Privacidade e Segurança > Relatório de Privacidade dos Apps, que, segundo a Apple, mostra como os apps usam as permissões e a sua atividade de rede. (3) Leia o rótulo de privacidade e a política em busca de análises de uso e prefira um app de código aberto se quiser inspecionar o código.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'As análises do PromptQuorum informam o que as fontes de cada app dizem e se nós o testamos; onde uma análise diz "não testado na prática", as declarações de privacidade são do desenvolvedor, não nossas. Este guia não executou capturas de rede em nenhum app.',
          },
        ],
      },
      batteryThermal: {
        id: 'battery-thermal-memory',
        title: 'Limites de bateria, calor e memória',
        content:
          '**Gerar texto mantém o chip ocupado, então espere calor e consumo de bateria perceptíveis enquanto o modelo roda; o uso ocasional custa pouco.** O PromptQuorum não mediu o consumo de energia nem o uso de bateria em nenhum iPhone, e não encontramos nenhum número publicado que possamos citar.',
        items: [
          '**Calor:** a geração prolongada pode fazer o iOS reduzir as velocidades de clock, e assim os tokens por segundo caem. O tempo varia com o celular, a capinha, o carregamento e a temperatura ambiente, e não o medimos.',
          '**Diretriz 2.4.2:** a Apple diz aos desenvolvedores que os apps não devem drenar a bateria rapidamente nem gerar calor excessivo, então apps bem comportados limitam o tamanho ou pausam execuções longas.',
          '**Memória:** um modelo fica na RAM enquanto está carregado. Se o iOS precisar de memória para outro app, ele pode encerrar o app de chat e o estado da conversa pode se perder; feche os outros apps pesados antes de carregar um modelo.',
          '**Carregar o celular enquanto gera** acrescenta calor; faça uma pausa se o celular estiver quente e evite luz solar direta ou um carro quente.',
          '**Armazenamento:** um modelo de 3-4B ocupa cerca de 2.5-3.7 GB, então três apps com três modelos cada usam aproximadamente 10 GB. Fique com um app e um ou dois modelos.',
          '**O Modo de Pouca Energia** pode deixar a geração mais lenta porque o iOS reduz o desempenho para economizar bateria; desative-o em sessões longas.',
        ],
      },
      partly: {
        id: 'works-partly',
        title: 'O que funciona só em parte',
        content:
          '**"Em parte" significa que o recurso existe no iPhone, mas com um limite que você deve conhecer antes de criar um hábito em torno dele.**',
        items: [
          '**Voz de mãos livres com a Siri:** os Atalhos podem chamar um app, mas a Siri continua sendo a Siri; você não consegue tornar um modelo local o assistente do sistema. A Siri AI da Apple é um beta separado do iOS 27 que não está inicialmente disponível na UE.',
          '**Geração de imagens:** possível com modelos de difusão pequenos, mas lenta, pesada no armazenamento e quente; o [Draw Things](/pt/power-local-llm/draw-things-review) também oferece um modo opcional na nuvem.',
          '**Busca de fotos:** a etapa de IA é opcional no celular ([Ente Photos](/pt/power-local-llm/ente-photos-review)) ou roda em um servidor que você hospeda ([Immich](/pt/power-local-llm/immich-review)).',
          '**Notas e favoritos:** o app de iPhone é um cliente; o trabalho do modelo acontece em um servidor ou em um provedor à sua escolha.',
          '**Agentes:** tarefas curtas em primeiro plano funcionam; agentes de longa duração ou agendados precisam de um servidor doméstico ([Nekoni](/pt/power-local-llm/nekoni-review)).',
          '**Perguntas sobre saúde:** possíveis com o modelo da Apple no dispositivo ([Pajdo](/pt/power-local-llm/pajdo-review)), mas não substituem aconselhamento médico.',
          '**Documentos longos:** modelos pequenos têm janelas de contexto pequenas, então PDFs grandes exigem divisão em pedaços ou um servidor.',
        ],
      },
      notPossible: {
        id: 'not-possible',
        title: 'O que não é possível ou ainda não é possível no iPhone',
        content:
          '**Estes são os desejos que as pessoas mais levam à IA local no iPhone e que nenhum app de iPhone analisado atende hoje.** Alguns são limites rígidos do hardware ou das regras da App Store; outros são lacunas que podem se fechar conforme a Apple e os desenvolvedores de apps lançarem novos frameworks, como o Core AI.',
        columns: ['Desejo', 'Situação', 'Motivo', 'Alternativa'],
        rows: [
          {
            Desejo: 'Modelo de 30B-70B no celular',
            'Situação': 'Não é possível',
            Motivo: 'Exige muito mais RAM do que um iPhone tem',
            Alternativa: 'Modo remoto com um servidor doméstico',
          },
          {
            Desejo: 'Raciocínio e código de nível de nuvem',
            'Situação': 'Ainda não',
            Motivo: 'Modelos pequenos falham em tarefas de vários passos',
            Alternativa: 'App de nuvem para perguntas difíceis',
          },
          {
            Desejo: 'Rodar Ollama ou Docker no celular',
            'Situação': 'Não é possível',
            Motivo: 'Sem app Ollama nem Docker para iPhone; limites do sandbox',
            Alternativa: 'Rode-os em um Mac ou PC',
          },
          {
            Desejo: 'Substituir a Siri pelo seu modelo',
            'Situação': 'Não é possível',
            Motivo: 'A Siri é controlada pelo sistema',
            Alternativa: 'Atalhos que chamam um app',
          },
          {
            Desejo: 'Agente sempre ativo em segundo plano',
            'Situação': 'Não é possível',
            Motivo: 'Serviços em segundo plano limitados (2.5.4)',
            Alternativa: 'Agente em um servidor doméstico',
          },
          {
            Desejo: 'Fazer fine-tuning de um modelo no celular',
            'Situação': 'Não é realista',
            Motivo: 'Memória, calor, sem ferramentas em apps',
            Alternativa: 'Treine em um Mac ou GPU',
          },
          {
            Desejo: 'Sincronizar conversas com Mac e iPad',
            'Situação': 'Quase sempre não',
            Motivo: 'O histórico é por dispositivo na maioria dos apps',
            Alternativa: 'Interface web no servidor, ex.: Open WebUI',
          },
          {
            Desejo: 'AnythingLLM Mobile no iPhone',
            'Situação': 'Ainda não',
            Motivo: 'App de iOS não lançado, segundo a análise',
            Alternativa: 'Navegador com o seu servidor',
          },
          {
            Desejo: 'Apple Intelligence no iPhone 14',
            'Situação': 'Não é possível',
            Motivo: 'Não está na lista de dispositivos da Apple',
            Alternativa: 'Apps de modelos de terceiros',
          },
          {
            Desejo: 'Geração de música com vocais',
            'Situação': 'Ainda não',
            Motivo: 'O Murmur faz apenas música instrumental',
            Alternativa: 'Ferramentas de desktop',
          },
          {
            Desejo: 'Prova de que um app é privado',
            'Situação': 'Não por um rótulo',
            Motivo: 'Os rótulos são declarados pelo desenvolvedor',
            Alternativa: 'Modo Avião e Relatório de Privacidade dos Apps',
          },
        ],
      },
      decision: {
        id: 'decision-path',
        title: 'Caminho de decisão: tenho este iPhone e quero isto',
        content:
          '**Encontre a sua linha pela faixa do celular e pelo objetivo e depois abra o capítulo ligado.** As escolhas são pontos de partida a partir das nossas análises, não rankings; um app que aparece como parado no capítulo de manutenção só é mencionado quando não há opção melhor.',
        columns: ['Se você tem', 'E quer', 'Comece por'],
        rows: [
          {
            'Se você tem': 'iPhone de 4 GB (12, 13, SE)',
            'E quer': 'Chat geral',
            'Comece por': 'Reins ou Enchanted com um servidor doméstico',
          },
          {
            'Se você tem': 'iPhone de 6 GB (14, 15)',
            'E quer': 'Chat offline gratuito',
            'Comece por': 'PocketPal AI com um modelo de 1-2B',
          },
          {
            'Se você tem': 'iPhone de 8 GB (16, 17)',
            'E quer': 'Chat offline gratuito',
            'Comece por': 'PocketPal AI ou Locally AI',
          },
          {
            'Se você tem': 'iPhone de 8 GB',
            'E quer': 'Siri e Atalhos',
            'Comece por': 'Private LLM ou Locally AI',
          },
          {
            'Se você tem': 'iPhone de 12 GB (17 Pro)',
            'E quer': 'O maior modelo no celular',
            'Comece por': 'Noema ou Gallery com Gemma 4',
          },
          {
            'Se você tem': 'Celular com Apple Intelligence',
            'E quer': 'Nenhum download de modelo',
            'Comece por': 'Compass ou Locally AI (modelo da Apple)',
          },
          {
            'Se você tem': 'Qualquer iPhone',
            'E quer': 'Transcrições de reuniões',
            'Comece por': 'Whisper Notes ou Lyonesse',
          },
          {
            'Se você tem': 'Qualquer iPhone',
            'E quer': 'Conversar com alguns PDFs',
            'Comece por': 'Private Mind ou MemoryAI',
          },
          {
            'Se você tem': 'Qualquer iPhone',
            'E quer': 'Tradução',
            'Comece por': 'On-Device AI Translator',
          },
          {
            'Se você tem': 'iPhone de 8 GB ou mais',
            'E quer': 'Imagens a partir de texto',
            'Comece por': 'Draw Things',
          },
          {
            'Se você tem': 'Qualquer iPhone',
            'E quer': 'Busca de fotos, servidor próprio',
            'Comece por': 'Immich',
          },
          {
            'Se você tem': 'Qualquer iPhone, PC em casa',
            'E quer': 'Modelos de 7B-70B',
            'Comece por': 'Reins, OpenClient ou LM Mini',
          },
          {
            'Se você tem': 'Qualquer iPhone',
            'E quer': 'Voz para a casa inteligente',
            'Comece por': 'Home Assistant Assist',
          },
          {
            'Se você tem': 'Adolescente usando o iPhone',
            'E quer': 'Chat seguro',
            'Comece por': 'Limites do Tempo de Uso, depois leia as notas de segurança',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Escolher um modelo pelo tamanho do arquivo em vez da faixa de RAM.** Um arquivo que é baixado ainda pode ser encerrado pelo iOS; combine o tamanho com a tabela de faixas e teste com o benchmark do app.',
          '**Esperar qualidade de nuvem.** Use um modelo pequeno para rascunhos, resumos, tradução e perguntas rápidas, e um modelo de nuvem ou de servidor doméstico para raciocínio difícil.',
          '**Tratar "Apple Intelligence" como "offline".** O Apple Intelligence pode usar o Private Cloud Compute; confira o que processa o pedido.',
          '**Confiar em um rótulo de privacidade sem testar.** Faça as verificações com o Modo Avião e o Relatório de Privacidade dos Apps do capítulo de privacidade.',
          '**Instalar todos os apps.** Cada app mantém os seus próprios arquivos de modelo de vários gigabytes; escolha um app por tarefa.',
          '**Comprar um app que ficou parado.** Confira o histórico de versões, principalmente dos apps do capítulo de manutenção.',
          '**Expor um servidor doméstico à internet.** Use uma malha de VPN privada; o Ollama não exige autenticação por padrão.',
          '**Deixar apps de roleplay sem revisão em um celular compartilhado ou de uma criança.** Leia antes a classificação etária e as configurações de conteúdo adulto.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Dispositivos, idiomas, Siri AI e Private Cloud Compute do Apple Intelligence: [Apple Intelligence](https://www.apple.com/apple-intelligence/) (lido em 13 de novembro de 2026).',
          'Diretrizes de Revisão de Apps 2.4.2, 2.5.1, 2.5.2, 2.5.4, 5.1.1 e 5.1.2: [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) (lido em 13 de novembro de 2026).',
          'Caminho e conteúdo do Relatório de Privacidade dos Apps: [Apple Support](https://support.apple.com/en-us/102188).',
          'Motores: [MLX Swift](https://github.com/ml-explore/mlx-swift), [llama.cpp](https://github.com/ggml-org/llama.cpp), [ExecuTorch](https://github.com/pytorch/executorch), [documentação do MLC para iOS](https://llm.mlc.ai/docs/deploy/ios.html), [Core ML](https://developer.apple.com/documentation/coreml), [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM).',
          'Os números de RAM dos iPhones e as velocidades indicativas foram reaproveitados de [Melhores apps de IA local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026); a Apple não divulga a RAM dos iPhones.',
          'Os fatos por app (preço, plataforma, versão, declarações dos desenvolvedores) vêm das análises do PromptQuorum ligadas e dos cartões do diretório; as datas da última atualização dos apps sinalizados como parados vêm dos cartões.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Um iPhone consegue executar IA totalmente offline?',
            a:
              'Sim, segundo as fichas e as análises. Depois de um download único do modelo por Wi-Fi, apps como PocketPal AI, Private LLM e Locally AI respondem sem conexão. O Apple Intelligence também executa um modelo no dispositivo, mas pode usar o Private Cloud Compute para pedidos maiores, então não é garantido que seja offline. Teste qualquer app no Modo Avião.',
          },
          {
            q: 'De qual iPhone preciso para IA local?',
            a:
              'Um iPhone com 6 GB de RAM ou mais para modelos pequenos de 1-2B e 8 GB ou mais para modelos de 3-4B. A Apple não divulga a RAM, então use as faixas relatadas neste guia. Para o Apple Intelligence você precisa de um iPhone 15 Pro ou mais novo, da lista de dispositivos da Apple.',
          },
          {
            q: 'A IA local no iPhone é realmente privada?',
            a:
              'O chat pode ficar no dispositivo, mas a privacidade depende do app. Os rótulos são declarados pelo desenvolvedor, e vários apps analisados enviam relatórios de falhas, eventos de uso ou requisições opcionais à web. Verifique com o Modo Avião e com Ajustes > Privacidade e Segurança > Relatório de Privacidade dos Apps.',
          },
          {
            q: 'Posso executar o Ollama no meu iPhone?',
            a:
              'Não. O Ollama oferece downloads para macOS, Windows e Linux, e não existe servidor Ollama nem Docker para o iPhone. Execute o Ollama em um computador e conecte-se a partir de um cliente de iPhone como Reins, Enchanted ou OpenClient.',
          },
          {
            q: 'Qual o tamanho de modelo que um iPhone consegue executar?',
            a:
              'Cerca de 3-4B parâmetros em 4 bits em celulares de 8 GB, com modelos de 7-8B em poucos bits apenas em celulares de 12 GB e devagar. Os celulares de 6 GB funcionam melhor com modelos de 1-2B. Para modelos maiores, use o modo remoto com um servidor doméstico.',
          },
          {
            q: 'A IA local consome a bateria?',
            a:
              'Durante a geração, sim: a geração prolongada mantém o processador ocupado e gasta a bateria bem mais rápido do que o uso em repouso, e o celular pode esquentar. O PromptQuorum não mediu o consumo exato. Perguntas ocasionais custam pouco, e um modelo carregado, mas parado, usa pouca energia.',
          },
          {
            q: 'Qual é o melhor app gratuito de IA local para iPhone?',
            a:
              'O PocketPal AI é a opção gratuita padrão e de código aberto no nosso comparativo, com o Locally AI e o Google AI Edge Gallery como alternativas gratuitas. O app certo depende da sua tarefa; use o caminho de decisão deste guia.',
          },
          {
            q: 'Como o Apple Intelligence é diferente destes apps?',
            a:
              'O Apple Intelligence é o modelo embutido da Apple para recursos do sistema e para apps que usam o framework Foundation Models; você não pode trocar o modelo dele. Os apps deste guia permitem escolher e baixar modelos, e alguns, como o Locally AI, também podem servir de interface para o modelo da Apple.',
          },
          {
            q: 'Posso conversar offline com os meus PDFs no iPhone?',
            a:
              'Sim, para alguns arquivos, segundo as fichas e as análises, com apps como Private Mind, MemoryAI, Noema ou LocalMindAI. Os modelos pequenos têm janelas de contexto curtas, então documentos longos podem ser resumidos de forma incompleta. Para bibliotecas grandes, use um servidor doméstico.',
          },
          {
            q: 'Posso usar o meu servidor doméstico fora de casa?',
            a:
              'Sim, por meio de uma VPN em malha privada, como o Tailscale, ou de outro túnel seguro, com um app cliente que suporte o seu servidor. Não abra o Ollama para a internet pública; ele não exige autenticação por padrão.',
          },
          {
            q: 'Um iPhone consegue gerar imagens offline?',
            a:
              'Sim, segundo as fichas e as análises, com apps como Draw Things, Genva e Haplo AI, depois de baixar modelos de vários gigabytes. A geração é mais lenta do que em uma GPU de desktop e esquenta o celular; o Draw Things também oferece um modo opcional na nuvem.',
          },
          {
            q: 'Os apps de roleplay e de companhia são seguros para adolescentes?',
            a:
              'Não por padrão. Vários têm classificação 18+ ou modos só para adultos, alguns são serviços na nuvem que armazenam conversas, e os modelos no dispositivo não têm um filtro no servidor. Use os limites de Tempo de Uso e de classificação de apps da Apple e leia as notas de segurança deste guia.',
          },
          {
            q: 'A IA local funciona no iPad?',
            a:
              'Na maioria dos casos, sim. Muitos apps deste guia listam suporte ao iPad, e a mesma regra de RAM se aplica. Veja os conselhos específicos para iPad em [Como executar IA em um tablet](/pt/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: 'Como o iPhone se compara ao Android para IA local?',
            a:
              'O iPhone é mais simples de começar e mais restrito; o Android permite apps de terminal e tem mais opções de código aberto, mas varia de celular para celular. Compare em [guia de IA local no Android](/pt/power-local-llm/local-ai-on-android-guide) e [Galaxy vs iPhone: IA no dispositivo](/pt/local-llms/galaxy-vs-iphone-on-device-ai-2026).',
          },
          {
            q: 'Os apps usarão o modelo da Apple em iPhones mais antigos?',
            a:
              'Não. O Apple Intelligence se limita aos dispositivos da lista da Apple, a partir do iPhone 15 Pro. Em iPhones mais antigos, use apps que trazem os seus próprios modelos, dentro dos limites de RAM.',
          },
        ],
      },
      related: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhores apps de IA local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026): escolhas ranqueadas, velocidades indicativas e um guia de RAM para iPhone.',
          '[Guia de IA local no Android](/pt/power-local-llm/local-ai-on-android-guide): o guia irmão da plataforma Android.',
          '[Melhores apps de IA local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026): apps de Android ranqueados.',
          '[Galaxy vs iPhone: IA no dispositivo](/pt/local-llms/galaxy-vs-iphone-on-device-ai-2026): IA no dispositivo do iPhone e do Galaxy comparadas.',
          '[Como executar IA em um tablet](/pt/power-local-llm/run-ai-on-tablet-ipad-android): iPad e tablets Android.',
          '[Melhores modelos de LLM para celular: Phi-4 Mini vs Gemma vs SmolLM](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm): quais modelos pequenos baixar.',
          '[LLMs locais móveis](/pt/local-llms/mobile-local-llms): fundamentos de LLMs locais móveis.',
          '[IA no dispositivo da Apple vs LLMs locais](/pt/local-llms/apple-on-device-ai-vs-local-llms): a IA no dispositivo da Apple comparada a modelos locais abertos.',
          '[Construa um assistente de voz local no seu celular](/pt/power-local-llm/voice-assistant-local-mobile-offline): voz offline em um celular.',
          '[Assistentes de chat comparados](/pt/power-local-llm/local-llm-chat-assistants-compared), [Apps de voz e áudio comparados](/pt/power-local-llm/local-llm-voice-audio-compared), [Apps de imagem e vídeo comparados](/pt/power-local-llm/local-llm-images-video-compared) e [Apps de conhecimento e recuperação comparados](/pt/power-local-llm/local-llm-knowledge-retrieval-compared): comparativos por categoria.',
          '[Diretório de apps de IA local](/pt/directory): todos os apps de IA local do diretório.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    last_full_refresh: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: 'الذكاء الاصطناعي المحلي على iPhone في 2026: ما الممكن وما غير الممكن وتطبيقات iPhone التي نغطيها',
    seoTitle: 'ذكاء اصطناعي محلي على iPhone 2026: ما يعمل وما لا يعمل',
    intro:
      'يستطيع هاتف iPhone حديث تشغيل نموذج لغوي مفيد دون اتصال بالإنترنت بعد تنزيل النموذج، لكن النماذج الصغيرة فقط: نحو 1-4 مليارات معامل على ذاكرة RAM بسعة 6-8 غيغابايت. يوضّح هذا الدليل ما يستطيع الذكاء الاصطناعي المحلي على iPhone فعله، وما هو ممكن جزئياً، وما هو غير ممكن إطلاقاً، ويشرح Apple Intelligence وإطار Foundation Models وقواعد App Store، ويربط تطبيقات iPhone التي نغطيها في دليل PromptQuorum بالمهمة التي تناسبها. تستند معلومات التطبيقات إلى مراجعات PromptQuorum المبنية على مصادر عامة ما لم تذكر المراجعة أنها اختُبرت عملياً؛ ولم يُعِد هذا الدليل اختبار أي تطبيق.',
    metaDescription:
      'ما يمكن للذكاء الاصطناعي المحلي على iPhone فعله وما لا يمكنه في 2026: حدود الشريحة وRAM وApple Intelligence وقواعد App Store وتطبيقات حسب الاستخدام.',
    heroImage: '/images/local-ai-on-iphone-guide-hero-ar.webp',
    twitterDescription:
      'الذكاء الاصطناعي المحلي على iPhone في 2026: خريطة القدرات ومستويات RAM وApple Intelligence وحدود App Store وقائمة غير الممكن وتطبيقات iPhone التي نغطيها حسب الاستخدام.',
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro، ذاكرة RAM غير منشورة من Apple)',
      'iPhone 17 Pro (A19 Pro، ذاكرة RAM بسعة 12 GB حسب المتداول)',
      'iPhone 16 Pro (A18 Pro، ذاكرة RAM بسعة 8 GB حسب المتداول)',
      'iPhone 15 Pro (A17 Pro، ذاكرة RAM بسعة 8 GB حسب المتداول)',
      'iPhone 14 Pro (A16، ذاكرة RAM بسعة 6 GB حسب المتداول)',
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
      'مالكو iPhone وiPad والمستخدمون المهتمون بالخصوصية والمسافرون والمطوّرون الذين يريدون معرفة ما يستطيع الذكاء الاصطناعي على الجهاز فعله وما لا يستطيعه، وأي تطبيق يثبّتونه لكل مهمة.',
    readTime: '45 دقيقة قراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'الذكاء الاصطناعي المحلي على iPhone',
    targetKeywords: [
      'الذكاء الاصطناعي المحلي على iPhone',
      'تشغيل الذكاء الاصطناعي على iPhone دون إنترنت',
      'الذكاء الاصطناعي على جهاز iPhone',
      'إطار Apple Intelligence Foundation Models',
      'تطبيق LLM محلي لنظام iPhone',
      'ذاكرة RAM في iPhone ونماذج LLM',
      'Ollama على iPhone',
      'ذكاء اصطناعي دون اتصال على iPhone',
      'ماذا يستطيع الذكاء الاصطناعي المحلي فعله على iPhone',
    ],
    leadAnswerBlock:
      '**يستطيع هاتف iPhone حديث تشغيل نموذج لغوي صغير (نحو 1-4 مليارات معامل على ذاكرة RAM بسعة 6-8 غيغابايت) دون اتصال بعد تنزيل لمرة واحدة، ويغطي الدردشة والتلخيص والترجمة والإملاء والأسئلة عن المستندات ومهام الصور الصغيرة؛ ولا يستطيع تشغيل نماذج 30B فأكثر أو استبدال Siri أو تشغيل وكلاء في الخلفية.** يضيف Apple Intelligence نموذجاً مدمجاً على iPhone 15 Pro وما بعده، ولا يوجد خادم Ollama أو Docker على iPhone.',
    quickAnswerTop: {
      ar: {
        question: 'ماذا يستطيع الذكاء الاصطناعي المحلي فعله على iPhone؟',
        answer:
          'يستطيع هاتف iPhone حديث تشغيل نماذج بحجم 1-4 مليارات معامل دون اتصال للدردشة والتلخيص والترجمة والإملاء والأسئلة عن المستندات ومهام الصور الصغيرة. ولا يستطيع تشغيل نماذج 30B فأكثر أو استبدال Siri أو إبقاء الوكلاء تعمل في الخلفية. يضيف Apple Intelligence نموذجاً مدمجاً على iPhone 15 Pro وما بعده.',
        bullets: [
          'ذاكرة RAM بسعة 6 GB: نماذج 1-2B؛ 8 GB: نماذج 3-4B؛ 12 GB: نموذج 4B بسهولة',
          'يتطلب Apple Intelligence هاتف iPhone 15 Pro أو أحدث',
          'لا يوجد Ollama أو Docker أو خادم Linux على الهاتف',
          'استخدم خادماً منزلياً لنماذج 7B-70B في وضع الاتصال عن بُعد',
          'تحقّق من الخصوصية بوضع الطيران وتقرير خصوصية التطبيقات',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: 'النقاط الرئيسية',
        anchor: '#key-takeaways',
      },
      {
        label: 'ابدأ من هنا: ثلاثة تطبيقات للتثبيت',
        anchor: '#start-here',
      },
      {
        label: 'ست إجابات سريعة قبل التثبيت',
        anchor: '#quick-answers',
      },
      {
        label: 'حقائق سريعة',
        anchor: '#quick-facts',
      },
      {
        label: 'خريطة القدرات: ما يستطيع الذكاء الاصطناعي المحلي على iPhone فعله',
        anchor: '#capability-map',
      },
      {
        label: 'واقع الشريحة وRAM: أي iPhone يشغّل أي نموذج',
        anchor: '#iphone-hardware',
      },
      {
        label: 'Neural Engine وGPU وCPU: ما الذي يشغّل النموذج فعلياً',
        anchor: '#chips-engines',
      },
      {
        label: 'فئة الهاتف والتطبيق وحجم النموذج في لمحة',
        anchor: '#tier-app-model',
      },
      {
        label: 'نموذجك المحلي الأول في 15 دقيقة',
        anchor: '#first-run-15-minutes',
      },
      {
        label: 'Apple Intelligence وإطار Foundation Models',
        anchor: '#apple-intelligence',
      },
      {
        label: 'قواعد App Store التي تشكّل الذكاء الاصطناعي المحلي على iPhone',
        anchor: '#app-store-rules',
      },
      {
        label: 'ما يفعله iPhone بصورة أفضل وأسوأ من Android',
        anchor: '#iphone-vs-android',
      },
      {
        label: 'مساعدو الدردشة: التطبيقات الرئيسية على الجهاز',
        anchor: '#chat-assistants',
      },
      {
        label: 'مساعدو الدردشة: التطبيقات الأحدث والمتخصصة والهجينة',
        anchor: '#chat-more',
      },
      {
        label: 'تطبيقات هادئة أو متوقفة التحديث أو غير موجودة على App Store',
        anchor: '#chat-quiet-apps',
      },
      {
        label: 'الرؤية والكاميرا: اطرح أسئلة عن الصور ولقطات الشاشة',
        anchor: '#vision-camera',
      },
      {
        label: 'الصوت: الإملاء والتفريغ النصي والقراءة بصوت عالٍ والمساعدون دون اتصال وSiri',
        anchor: '#voice-speech',
      },
      {
        label: 'المستندات وملفات PDF والاسترجاع على الهاتف',
        anchor: '#documents-rag',
      },
      {
        label: 'الترجمة على الجهاز',
        anchor: '#translation',
      },
      {
        label: 'توليد الصور وتحرير الصور الفوتوغرافية',
        anchor: '#image-generation-editing',
      },
      {
        label: 'مكتبات الصور والبحث في المعرض',
        anchor: '#photos-gallery-search',
      },
      {
        label: 'الملاحظات وقواعد المعرفة والإشارات المرجعية',
        anchor: '#notes-knowledge',
      },
      {
        label: 'أسئلة الصحة والعافية',
        anchor: '#health-wellness',
      },
      {
        label: 'تطبيقات لعب الأدوار والرفقة مع ملاحظات أمان المحتوى',
        anchor: '#roleplay-companions',
      },
      {
        label: 'المنزل الذكي والوكلاء',
        anchor: '#smart-home-agents',
      },
      {
        label: 'وضع الاتصال عن بُعد: iPhone كعميل خفيف لخادمك الخاص',
        anchor: '#remote-mode',
      },
      {
        label:
          'مسارات المطوّرين: Core ML وCore AI وMLX Swift وllama.cpp وMLC وExecuTorch وFoundation Models',
        anchor: '#developer-paths',
      },
      {
        label: 'واقع الخصوصية والقياس عن بُعد',
        anchor: '#privacy-telemetry',
      },
      {
        label: 'حدود البطارية والحرارة والذاكرة',
        anchor: '#battery-thermal-memory',
      },
      {
        label: 'ما يعمل جزئياً فقط',
        anchor: '#works-partly',
      },
      {
        label: 'غير ممكن أو ليس بعد على iPhone',
        anchor: '#not-possible',
      },
      {
        label: 'مسار القرار: لديّ هذا الـ iPhone وأريد هذا',
        anchor: '#decision-path',
      },
      {
        label: 'الأخطاء الشائعة',
        anchor: '#common-mistakes',
      },
      {
        label: 'المصادر',
        anchor: '#sources',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: '#faq',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**يستطيع هاتف iPhone حديث تشغيل نموذج لغوي مفيد دون اتصال بعد تنزيل النموذج.** السقف الواقعي هو نموذج بحجم 1B-4B معامل على ذاكرة RAM بسعة 6-8 غيغابايت؛ أما نماذج 7B-8B بصيغة منخفضة البتات فلا تتسع إلا على هواتف iPhone ذات 12 غيغابايت وتبقى بطيئة. توقّع أداءً جيداً في الصياغة والتلخيص والترجمة والأسئلة والأجوبة، واستدلالاً وبرمجة ومعرفة بالعالم أضعف من نماذج السحابة من فئة ChatGPT.',
          '**ذاكرة RAM، لا اسم الشريحة، هي التي تحدد حجم النموذج.** لا تنشر Apple ذاكرة RAM في iPhone؛ والأرقام في هذا الدليل مواصفات متداولة على نطاق واسع. هاتف بذاكرة 4 GB دون الحد العملي الأدنى، و6 GB تعني نماذج 1-2B، و8 GB تعني 3-4B، و12 GB تضيف هامشاً أوسع.',
          '**Apple Intelligence وإطار Foundation Models مسار ثانٍ منفصل.** نموذج Apple الخاص موجود أصلاً على الهاتف (iPhone 15 Pro وما بعده)، ولا يحتاج إلى تنزيل، ويمكن لتطبيقات الجهات الخارجية استخدامه. وهو ليس تطبيق دردشة عاماً بذاته، وتنطبق قيود اللغة والمنطقة.',
          '**يضع App Store حدوداً صارمة.** لا Docker ولا تشغيل Ollama على الهاتف؛ ولا يجوز للتطبيقات تنزيل شيفرة تغيّر ميزاتها (إرشاد Apple رقم 2.5.2)، لذا يأتي كل محرك داخل التطبيق ولا تُنزَّل إلا ملفات النماذج. لهذا يعني الذكاء الاصطناعي المحلي على iPhone تثبيت تطبيق، لا بناء منظومة كاملة.',
          '**معظم ما يريده مالك iPhone له تطبيق مُراجَع في دليلنا:** الدردشة وأسئلة الكاميرا والإملاء والتفريغ النصي والدردشة مع المستندات والترجمة وتوليد الصور والبحث في الصور والملاحظات وأسئلة الصحة ولعب الأدوار والتحكم بالمنزل الذكي والوصول عن بُعد إلى خادم منزلي. يربط هذا الدليل معظم تطبيقات iPhone في دليلنا بالقدرة التي تناسبها.',
          '**عدة أمور غير ممكنة أو ممكنة جزئياً فقط:** نماذج 30B فأكثر، والاستدلال بمستوى النماذج الحدودية، والوكلاء الدائمو العمل في الخلفية، واستبدال Siri بنموذجك الخاص، والضبط الدقيق على الهاتف، وضمان الخصوصية من ملصق App Store وحده.',
          '**عبارة "بلا قياس عن بُعد" تحتاج إلى تحقق لا إلى ثقة.** عدة تطبيقات تقول إنها تُبقي الدردشة على الجهاز ما زالت ترسل تقارير الأعطال أو أحداث الاستخدام أو طلبات ويب اختيارية؛ ويبيّن فصل الخصوصية كيف تتحقق بوضع الطيران وتقرير خصوصية التطبيقات.',
          '**ابدأ صغيراً:** ثبّت تطبيقاً واحداً ونزّل نموذجاً واحداً بحجم 1-2 غيغابايت عبر Wi-Fi، ثم فعّل وضع الطيران واطرح سؤالاً. إن نجح ذلك فقد تحققت من مسار العمل دون اتصال كاملاً في أقل من 15 دقيقة.',
        ],
      },
      startHere: {
        id: 'start-here',
        title: 'ابدأ من هنا: ثلاثة تطبيقات للتثبيت',
        content: [
          '**الوقت ضيق؟ ثبّت أحد هذه التطبيقات الثلاثة، ونزّل نموذجاً يناسب ذاكرة RAM في iPhone لديك، واختبره مرة واحدة في وضع الطيران.** الترشيحات مأخوذة من فصول هذا الدليل ومراجعاته، لا من اختبارات الأداء؛ ويشرح بقية الدليل كل اختيار.',
          '**نقاط انطلاق جيدة أخرى:** على iPhone بذاكرة 12 غيغابايت جرّب [Noema](/ar/power-local-llm/noema-review) أو [Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) مع نموذج Gemma 4؛ وعلى iPhone بذاكرة 4 غيغابايت استخدم [Reins](/ar/power-local-llm/reins-review) أو [Enchanted](/ar/power-local-llm/enchanted-review) (مُعلَّم بأنه قليل التحديث في فصل الصيانة) مع خادم منزلي، لأن هذه الفئة أدنى من الحد العملي للدردشة على الجهاز.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يمكن للمبتدئين البدء بـ PocketPal AI، وللمتقدمين بـ Locally AI ونموذج Apple نفسه، وللمطوّرين بإطار Foundation Models أو MLX Swift؛ وفي كل الحالات يتبع حجم النموذج ذاكرة RAM في iPhone.',
          },
          {
            type: 'plain-terms',
            text: 'تطبيق واحد، ونموذج واحد بحجم يناسب ذاكرتك، واختبار واحد في وضع الطيران.',
          },
        ],
        itemHeadings: true,
        columns: ['مستواك', 'التثبيت أو الاستخدام', 'النموذج الأول', 'سبب هذا الاختيار'],
        rows: [
          {
            'مستواك': 'مبتدئ',
            'التثبيت أو الاستخدام': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'النموذج الأول': '1-2B مع 6 غيغابايت؛ 3-4B مع 8 غيغابايت',
            'سبب هذا الاختيار': 'مجاني ومفتوح المصدر، ومرشد التشغيل الأول في هذا الدليل يستخدمه.',
          },
          {
            'مستواك': 'متقدم',
            'التثبيت أو الاستخدام': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
            'النموذج الأول': '3-4B مع 8 غيغابايت، أو نموذج Apple نفسه دون تنزيل',
            'سبب هذا الاختيار': 'يناسب استخدام Siri وShortcuts على iPhone بذاكرة 8 غيغابايت، ويمكنه استخدام نموذج Apple على الجهاز في أجهزة iPhone التي تدعم Apple Intelligence.',
          },
          {
            'مستواك': 'مطوّر',
            'التثبيت أو الاستخدام': 'إطار Foundation Models أو MLX Swift',
            'النموذج الأول': 'نموذج Apple على الجهاز، أو نموذجك الخاص',
            'سبب هذا الاختيار': 'Foundation Models هو واجهة Swift الأصلية من Apple ويحتاج إلى عتاد يدعم Apple Intelligence؛ أما MLX Swift فيشغّل نموذجك الخاص. ويتناول فصل "مسارات المطوّرين" بقية الأمور.',
          },
        ],
      },
      quickAnswers: {
        id: 'quick-answers',
        title: 'ست إجابات سريعة قبل التثبيت',
        content:
          '**هذه هي الأسئلة الستة التي يطرحها القرّاء أولاً؛ وكل إجابة تشير إلى الفصل الذي يشرحها.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تحدد ذاكرة RAM حجم النموذج، وتتسع 3-5 غيغابايت من المساحة الحرة لنموذج أول، ويكشف اختبار وضع الطيران ما إذا كان التطبيق يعمل دون اتصال.',
          },
          {
            type: 'plain-terms',
            text: 'RAM تحدد النموذج، والتخزين يحفظه، ووضع الطيران يثبت ذلك.',
          },
        ],
        items: [
          '**أي نموذج أنزّل؟** اتبع ذاكرة RAM: 1-2B مع 6 غيغابايت، و3-4B مع 8 غيغابايت، ومجال أوسع مع 12 غيغابايت حيث تبقى نماذج 7-8B بطيئة. وiPhone بذاكرة 4 غيغابايت أدنى من الحد العملي. انظر "فئة الهاتف والتطبيق وحجم النموذج في لمحة".',
          '**كم أحتاج من مساحة التخزين؟** وفّر أولاً 3-5 غيغابايت، فملف النموذج يبلغ 1-4 غيغابايت؛ وثبّت تطبيقاً واحداً في كل مرة، لأن ملفات النماذج المكررة تستهلك التخزين بسرعة. انظر "نموذجك المحلي الأول في 15 دقيقة".',
          '**ما سرعة التشغيل؟** لم تقِس PromptQuorum السرعة على أي iPhone لإعداد هذا الدليل، والسرعات الإرشادية في ملخصنا لتطبيقات iPhone ليست قياسات جديدة. النموذج الأصغر يجيب أسرع؛ دوّن السرعة في أسئلة الاختبار الأولى، وتحقق من إعدادات التطبيق إن كان يعرض رقماً لعدد الرموز في الثانية.',
          '**أي تطبيق خاص؟** لا يمكن افتراض أن أي تطبيق خاص بالاعتماد على ملصق App Store وحده، لأن "يعمل على جهازك" و"لا يرسل شيئاً" ادعاءان مختلفان. اقرأ ملصق الخصوصية والسياسة، وأجرِ اختبار وضع الطيران، ثم افحص لاحقاً الإعدادات > الخصوصية والأمان > تقرير خصوصية التطبيقات (App Privacy Report)؛ ويمكن فحص التطبيقات المفتوحة المصدر مثل PocketPal AI. انظر "واقع الخصوصية والقياس عن بُعد".',
          '**ماذا أستطيع أن أفعل دون إنترنت؟** وفق خريطة القدرات في هذا الدليل، يستطيع iPhone حديث التعامل مع الدردشة وأسئلة الكاميرا والإملاء والتفريغ النصي والدردشة مع المستندات والترجمة دون اتصال بعد تنزيل النموذج؛ أما نماذج 30B فأكثر والاستدلال بمستوى النماذج الحدودية والوكلاء الدائمو العمل في الخلفية فغير ممكنة. انظر "خريطة القدرات".',
          '**ماذا أقرأ بعد ذلك؟** تابع "نموذجك المحلي الأول في 15 دقيقة" ثم استخدم "مسار القرار" إن كانت لديك مهمة محددة.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**النطاق:** iPhone أولاً، وiPad حيث تعمل التطبيقات نفسها. يغطي الدليل الشقيق [دليل الذكاء الاصطناعي المحلي على Android](/ar/power-local-llm/local-ai-on-android-guide) نظام Android.',
          '**هواتف iPhone المتوافقة مع Apple Intelligence (قائمة Apple):** iPhone 15 Pro وiPhone 15 Pro Max، وعائلة iPhone 16 بما فيها 16e، وعائلة iPhone 17 بما فيها 17e وAir، وiPhone 18 Pro وiPhone 18 Pro Max وiPhone Duo لعام 2026. أما iPhone 15 وطرازات iPhone الأقدم غير Pro فليست في القائمة.',
          '**مستويات RAM المستخدمة في هذا الدليل (متداولة، لا تنشرها Apple):** 4 GB (iPhone 12 و13 وSE)، 6 GB (iPhone 13 Pro و14 و14 Pro و15)، 8 GB (iPhone 15 Pro وسلسلة 16 و16e و17)، 12 GB (iPhone 17 Pro وPro Max).',
          '**أحجام النماذج التي تتسع:** نحو 1.1 غيغابايت لنموذج 1.7B بدقة 4 بت، ونحو 2.5-3.7 غيغابايت لنماذج 3-4B؛ والسرعات الإرشادية مأخوذة من ملخص iPhone لدينا وليست قياسات جديدة.',
          '**المحركات داخل تطبيقات iPhone:** llama.cpp (GGUF) وApple MLX وMLC LLM وGoogle LiteRT-LM وExecuTorch وCore ML وApple Foundation Models؛ وبعض التطبيقات تجمع عدة محركات.',
          '**التطبيقات المرتبطة في هذا الدليل:** تطبيقات iOS وiPadOS في دليلنا التي لها مراجعة من PromptQuorum، إضافةً إلى تطبيقات iPhone المرافقة للأدوات المستضافة ذاتياً.',
          '**ما لم تفعله PromptQuorum:** لم يُعِد هذا الدليل اختبار التطبيقات. تأتي المعلومات من مراجعاتنا وصفحات المتاجر ومواقع الجهات المطوّرة ووثائق Apple، وتذكر كل مراجعة ما اختبرته.',
        ],
      },
      whatIsPossible: {
        id: 'capability-map',
        title: 'خريطة القدرات: ما يستطيع الذكاء الاصطناعي المحلي على iPhone فعله',
        content:
          '**يغطي الذكاء الاصطناعي المحلي على iPhone معظم مهام اللغة اليومية وعدة مهام وسائط، لكنه لا يفعل كل ما تفعله المساعدات السحابية.** يصنّف الجدول كل قدرة ضمن "يعمل" أو "جزئياً" أو "ليس بعد"، ويسمّي الفصل التالي التطبيقات. "يعمل" يعني أن تطبيق iPhone مُراجَعاً يؤديها والنموذج على الهاتف؛ و"جزئياً" يعني أنها تعمل مع قيود في الحجم أو السرعة أو الدقة أو العتاد؛ و"ليس بعد" يعني أنه لا يوجد تطبيق iPhone مُراجَع يؤديها على الجهاز.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'يستطيع الذكاء الاصطناعي المحلي على iPhone التعامل مع الدردشة والصياغة والتلخيص والترجمة والإملاء والأسئلة عن المستندات ومهام الصور الصغيرة على الجهاز، ويتعامل جزئياً فقط مع البحث في الصور وتوليد الصور والوكلاء، ولا يستطيع بعد تشغيل النماذج الكبيرة أو استبدال Siri.',
          },
          {
            type: 'plain-terms',
            text:
              'تخيّل iPhone مساعداً في الجيب بعقل صغير وخاص. يجيب عن الأسئلة البسيطة، ويعيد صياغة النصوص، ويفرّغ الكلام نصاً، ويصف الصور دون إرسال أي شيء إلى الخارج، لكنه ينسى حقائق يعرفها نموذج سحابي أكبر، ويبطؤ في الإجابات الطويلة ويسخن. وللأسئلة الصعبة يقرن كثيرون الهاتف بحاسوب منزلي أو تطبيق سحابي.',
          },
        ],
        columns: ['القدرة', 'على iPhone', 'الإعداد المعتاد', 'الفصل'],
        rows: [
          {
            'القدرة': 'الدردشة والصياغة والتلخيص',
            'على iPhone': 'يعمل',
            'الإعداد المعتاد': 'نموذج 1-4B بصيغة GGUF أو MLX',
            'الفصل': 'مساعدو الدردشة',
          },
          {
            'القدرة': 'السؤال عن صورة أو لقطة شاشة',
            'على iPhone': 'يعمل',
            'الإعداد المعتاد': 'نموذج رؤية صغير أو OCR',
            'الفصل': 'الرؤية والكاميرا',
          },
          {
            'القدرة': 'الإملاء والتفريغ النصي',
            'على iPhone': 'يعمل',
            'الإعداد المعتاد': 'Whisper أو Parakeet',
            'الفصل': 'الصوت والكلام',
          },
          {
            'القدرة': 'القراءة بصوت عالٍ (تحويل النص إلى كلام)',
            'على iPhone': 'يعمل',
            'الإعداد المعتاد': 'أصوات النظام أو TTS على الجهاز',
            'الفصل': 'الصوت والكلام',
          },
          {
            'القدرة': 'مساعد بلا استخدام اليدين مع Siri',
            'على iPhone': 'جزئياً',
            'الإعداد المعتاد': 'Shortcuts، لا بديل عن Siri',
            'الفصل': 'الصوت والكلام',
          },
          {
            'القدرة': 'الدردشة مع ملفات PDF وملاحظاتك',
            'على iPhone': 'يعمل',
            'الإعداد المعتاد': 'نموذج صغير مع فهرس محلي',
            'الفصل': 'المستندات وRAG',
          },
          {
            'القدرة': 'الترجمة',
            'على iPhone': 'يعمل',
            'الإعداد المعتاد': 'نموذج صغير مضبوط للترجمة',
            'الفصل': 'الترجمة',
          },
          {
            'القدرة': 'توليد الصور',
            'على iPhone': 'جزئياً',
            'الإعداد المعتاد': 'نماذج انتشار صغيرة، بطيئة',
            'الفصل': 'توليد الصور',
          },
          {
            'القدرة': 'تحرير الصور (القص والتنقيح)',
            'على iPhone': 'يعمل',
            'الإعداد المعتاد': 'نماذج تجزئة Core ML',
            'الفصل': 'توليد الصور',
          },
          {
            'القدرة': 'بحث بالذكاء الاصطناعي في مكتبة الصور',
            'على iPhone': 'جزئياً',
            'الإعداد المعتاد': 'فهرس على الجهاز أو خادم خاص',
            'الفصل': 'الصور والمعرض',
          },
          {
            'القدرة': 'ملاحظات وإشارات مرجعية بالذكاء الاصطناعي',
            'على iPhone': 'جزئياً',
            'الإعداد المعتاد': 'يعمل الذكاء الاصطناعي غالباً على خادم',
            'الفصل': 'الملاحظات والمعرفة',
          },
          {
            'القدرة': 'أسئلة عن بيانات الصحة',
            'على iPhone': 'جزئياً',
            'الإعداد المعتاد': 'Apple Intelligence، وليس طبياً',
            'الفصل': 'الصحة والعافية',
          },
          {
            'القدرة': 'لعب الأدوار والرفقة',
            'على iPhone': 'يعمل',
            'الإعداد المعتاد': 'نموذج دردشة صغير، وتوجد نسخ سحابية',
            'الفصل': 'لعب الأدوار والرفقة',
          },
          {
            'القدرة': 'التحكم بالمنزل الذكي',
            'على iPhone': 'جزئياً',
            'الإعداد المعتاد': 'الخادم المنزلي يؤدي العمل',
            'الفصل': 'المنزل الذكي والوكلاء',
          },
          {
            'القدرة': 'وكلاء مستقلون دائمو العمل',
            'على iPhone': 'ليس بعد',
            'الإعداد المعتاد': 'يقيّد iOS العمل في الخلفية',
            'الفصل': 'غير ممكن',
          },
          {
            'القدرة': 'تشغيل نماذج 30B فأكثر',
            'على iPhone': 'ليس بعد',
            'الإعداد المعتاد': 'استخدم خادماً منزلياً عن بُعد',
            'الفصل': 'الاتصال عن بُعد',
          },
          {
            'القدرة': 'ضبط نموذج دقيقاً على الهاتف',
            'على iPhone': 'ليس بعد',
            'الإعداد المعتاد': 'التدريب على Mac أو GPU',
            'الفصل': 'مسارات المطوّرين',
          },
        ],
      },
      hardware: {
        id: 'iphone-hardware',
        title: 'واقع الشريحة وRAM: أي iPhone يشغّل أي نموذج',
        content:
          '**تحدد ذاكرة RAM أكبر نموذج يستطيع iPhone استيعابه؛ وتحدد الشريحة سرعة الإجابة.** يجب أن يبقى النموذج اللغوي في الذاكرة أثناء التوليد، لذا يحتاج نموذج 3B بدقة 4 بت (نحو 2-2.7 غيغابايت على القرص) إلى قدر مماثل تقريباً من الذاكرة الحرة فوق ما يستهلكه iOS والتطبيقات الأخرى. يغلق iOS التطبيق الذي يطلب أكثر مما ينبغي، ولا تنشر Apple ذاكرة RAM في iPhone، لذا فالأرقام أدناه مواصفات متداولة على نطاق واسع (تُستخدم أيضاً في [أفضل تطبيقات الذكاء الاصطناعي المحلي لنظام iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026)) وليست تصريحات من Apple.',
        columns: ['فئة iPhone', 'RAM (متداولة)', 'حجم النموذج الواقعي', 'الحكم'],
        rows: [
          {
            'فئة iPhone': 'iPhone 12 و13 وSE',
            'RAM (متداولة)': '4 GB',
            'حجم النموذج الواقعي': 'أقل من 1B، إن أمكن أصلاً',
            'الحكم': 'استخدم وضع الاتصال عن بُعد بدلاً من ذلك',
          },
          {
            'فئة iPhone': 'iPhone 13 Pro و14 و14 Pro و15',
            'RAM (متداولة)': '6 GB',
            'حجم النموذج الواقعي': '1-2B (ملف بحجم 1.1 GB تقريباً)',
            'الحكم': 'دردشة وصياغة أساسية',
          },
          {
            'فئة iPhone': 'iPhone 15 Pro و16 و16e و17',
            'RAM (متداولة)': '8 GB',
            'حجم النموذج الواقعي': '3-4B (نحو 2.5-3.7 GB)',
            'الحكم': 'فئة 3-4B المعتادة',
          },
          {
            'فئة iPhone': 'iPhone 17 Pro وPro Max',
            'RAM (متداولة)': '12 GB',
            'حجم النموذج الواقعي': '4B بسهولة، و7-8B بصيغة منخفضة البتات',
            'الحكم': 'أعلى فئة RAM',
          },
          {
            'فئة iPhone': 'iPhone 18 Pro وPro Max وDuo',
            'RAM (متداولة)': 'غير منشورة',
            'حجم النموذج الواقعي': 'اعتبرها 12 GB حتى يُؤكَّد خلاف ذلك',
            'الحكم': 'لا أرقام لدى PromptQuorum',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'قد يغلق iOS نموذجاً يتسع اسمياً عند التبديل بين التطبيقات. على iPhone بذاكرة 6 GB التزم بنماذج 1-2B حتى لو نُزّل ملف 3-4B دون خطأ؛ فصفحات Apple الخاصة بـ iPhone لا تذكر أي رقم لذاكرة RAM، لذا فجدول الفئات دليل إرشادي لا ضمان.',
          },
        ],
      },
      hardwareChips: {
        id: 'chips-engines',
        title: 'Neural Engine وGPU وCPU: ما الذي يشغّل النموذج فعلياً',
        content:
          '**في iPhone ثلاثة أماكن لتشغيل النموذج، ويعتمد اختيار التطبيق بينها على محركه لا على الهاتف.** وحدة CPU مرنة لكنها بطيئة، ووحدة GPU (التي يُوصل إليها عبر واجهة Metal الرسومية من Apple) تتولى عمليات المصفوفات الكبيرة التي تعتمد عليها معظم تطبيقات الدردشة، أما Neural Engine فمسرّع بوظيفة ثابتة يمكن لـ Core ML من Apple وإطار Core AI الأحدث استهدافه. تصف Apple إطار Core AI بأنه مبني لشرائح Apple، ويستخدم الذاكرة الموحدة وNeural Engine؛ وهو جديد في جيل iOS 27، لذا لا تستخدمه معظم التطبيقات في هذا الدليل بعد.',
        items: [
          '**تطبيقات llama.cpp (ملفات GGUF):** يستخدم [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) و[Pocket AI](/ar/power-local-llm/pocket-ai-review) و[LLM Farm](/ar/power-local-llm/llm-farm-review) واجهة Metal على GPU. يدعم أي ملف GGUF، لذا قد تعمل النماذج المأخوذة من Hugging Face.',
          '**تطبيقات Apple MLX:** يستخدم [Locally AI](/ar/power-local-llm/locally-ai-review) و[fullmoon](/ar/power-local-llm/fullmoon-review) و[MLXHub](/ar/power-local-llm/mlxhub-review) إطار المصفوفات MLX من Apple المبني للذاكرة الموحدة على شرائح Apple.',
          '**التطبيقات متعددة الصيغ:** يدعم [Noema](/ar/power-local-llm/noema-review) صيغ GGUF وMLX وExecuTorch وCore ML وApple Foundation Models في تطبيق واحد، ولهذا يختلف استخدامه للعتاد باختلاف صيغة النموذج (بيان من الجهة المطوّرة في المراجعة).',
          '**تطبيقات النماذج المُجمَّعة:** يشغّل [MLC Chat](/ar/power-local-llm/mlc-chat-review) نماذج مُجمَّعة بسلسلة أدوات MLC LLM؛ ويستخدم [Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) بيئة تشغيل LiteRT-LM من Google.',
          '**نموذج Apple الخاص:** يشغّل Apple Intelligence نموذج Apple عبر أطر النظام. تستدعيه تطبيقات مثل [Compass - Local AI](/ar/power-local-llm/compass-local-ai-review) و[Pajdo](/ar/power-local-llm/pajdo-review) بدلاً من تضمين نموذج خاص.',
          '**النتيجة العملية:** قد يختلف تطبيقان يشغّلان نموذجاً بالحجم نفسه على iPhone نفسه في السرعة واستهلاك الذاكرة والحرارة. شغّل الأمر نفسه في تطبيقين قبل أن تحذف نموذجاً نزّلته سابقاً.',
        ],
      },
      tierTable: {
        id: 'tier-app-model',
        title: 'فئة الهاتف والتطبيق وحجم النموذج في لمحة',
        content:
          '**اختر بحسب فئة RAM أولاً ثم بحسب حاجتك.** يعطي الجدول نقطة انطلاق من مراجعاتنا وملخصنا؛ وهو ليس اختبار أداء. تتغير النماذج بسرعة، فراجع [أفضل نماذج LLM للهواتف: Phi-4 Mini مقابل Gemma مقابل SmolLM](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm) لأحدث اختيارات النماذج الصغيرة.',
        columns: ['فئة الهاتف', 'ابدأ بـ', 'حجم النموذج', 'ملاحظة'],
        rows: [
          {
            'فئة الهاتف': 'iPhone بذاكرة 4 GB',
            'ابدأ بـ': 'عميل عن بُعد لخادم منزلي',
            'حجم النموذج': 'لا شيء على الهاتف',
            'ملاحظة': 'Reins وEnchanted وOpenClient',
          },
          {
            'فئة الهاتف': 'iPhone بذاكرة 6 GB',
            'ابدأ بـ': 'PocketPal AI أو Locally AI',
            'حجم النموذج': '1-2B (نحو 1.1 GB)',
            'ملاحظة': 'أصغر النماذج',
          },
          {
            'فئة الهاتف': 'iPhone بذاكرة 8 GB',
            'ابدأ بـ': 'PocketPal AI وPrivate LLM وGallery',
            'حجم النموذج': '3-4B (2.5-3.7 GB)',
            'ملاحظة': 'الفئة المتوسطة السعر',
          },
          {
            'فئة الهاتف': 'iPhone بذاكرة 12 GB',
            'ابدأ بـ': 'Noema أو Locally AI',
            'حجم النموذج': '4B، أو 7-8B ببطء',
            'ملاحظة': 'يتسع سياق أطول',
          },
          {
            'فئة الهاتف': 'هاتف يدعم Apple Intelligence',
            'ابدأ بـ': 'Compass أو Locally AI',
            'حجم النموذج': 'نموذج Apple، بلا تنزيل',
            'ملاحظة': 'تنطبق قيود اللغة',
          },
          {
            'فئة الهاتف': 'أي هاتف، للإملاء',
            'ابدأ بـ': 'Whisper Notes أو Aiko',
            'حجم النموذج': 'من فئة Whisper، صغير',
            'ملاحظة': 'دفعة واحدة',
          },
          {
            'فئة الهاتف': 'أي هاتف، للمستندات',
            'ابدأ بـ': 'Private Mind أو MemoryAI',
            'حجم النموذج': 'دردشة صغيرة مع فهرس',
            'ملاحظة': 'تحقق من حدود الملفات',
          },
        ],
      },
      firstRun: {
        id: 'first-run-15-minutes',
        title: 'نموذجك المحلي الأول في 15 دقيقة',
        content:
          '**يمكنك التحقق من مسار العمل دون اتصال كاملاً على iPhone في نحو 15 دقيقة: ثبّت تطبيقاً واحداً، ونزّل نموذجاً صغيراً واحداً عبر Wi-Fi، وفعّل وضع الطيران، واطرح سؤالاً.** تستخدم الخطوات [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) مثالاً لأنه مجاني ومفتوح المصدر، لكن أي تطبيق دردشة في الفصول التالية يعمل بالطريقة نفسها. تعتمد تقديرات الوقت على اتصالك وهاتفك.',
        numberedItems: [
          {
            title: 'الدقيقة 0-2: تحقق من فئة iPhone',
            whyItMatters:
              'ابحث عن طرازك في جدول RAM أعلاه. 6 GB تعني نموذج 1-2B، و8 GB تعني 3-4B، و12 GB تمنح هامشاً أوسع. وفّر أولاً 3-5 غيغابايت من مساحة التخزين، لأن ملف النموذج يتراوح بين 1 و4 غيغابايت.',
          },
          {
            title: 'الدقيقة 2-4: ثبّت تطبيقاً واحداً',
            whyItMatters:
              'ثبّت تطبيقاً واحداً فقط من App Store، مثل PocketPal AI أو Locally AI أو Google AI Edge Gallery. لا تثبّت ثلاثة تطبيقات بثلاثة نماذج لكل منها؛ فملفات النماذج المكررة تستهلك التخزين بسرعة.',
          },
          {
            title: 'الدقيقة 4-9: نزّل نموذجاً واحداً عبر Wi-Fi',
            whyItMatters:
              'اختر الحجم المناسب لفئتك، مثل نموذج من فئة Qwen3 1.7B على 6 GB أو Phi-4 Mini أو Gemma 4 E2B على 8 GB (انظر النماذج حسب الفئة). التنزيل هو الخطوة الوحيدة التي تحتاج إلى الإنترنت. أبقِ التطبيق مفتوحاً والشاشة مضاءة حتى ينتهي.',
          },
          {
            title: 'الدقيقة 9-10: فعّل وضع الطيران',
            whyItMatters:
              'شغّل وضع الطيران واترك Wi-Fi مطفأً. يثبت هذا أن النموذج يعمل على الهاتف، ويُظهر ما إذا كان التطبيق يحاول الوصول إلى الإنترنت.',
          },
          {
            title: 'الدقيقة 10-13: اطرح ثلاثة أسئلة اختبار',
            whyItMatters:
              'اطلب تلخيصاً من ثلاث نقاط لفقرة تلصقها، وإعادة صياغة رسالة بريد إلكتروني بنبرة مختلفة، وسؤالاً واقعياً تعرف إجابته. لاحظ السرعة وهل يسخن الهاتف.',
          },
          {
            title: 'الدقيقة 13-15: افحص الإعدادات ونظّف',
            whyItMatters:
              'افتح اختبار الأداء أو الإعدادات في التطبيق إن وُجدا، ودوّن عدد الرموز في الثانية، ثم افحص لاحقاً الإعدادات > الخصوصية والأمان > تقرير خصوصية التطبيقات (App Privacy Report) لمعرفة النطاقات التي اتصل بها التطبيق. احذف النماذج التي لن تستخدمها.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'إن تعطل التطبيق أو أعاد التشغيل أثناء الإجابة الأولى، فالنموذج أكبر من أن يتسع في الهاتف. احذفه واختر الحجم الأصغر التالي بدلاً من خفض إعدادات أخرى.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence وإطار Foundation Models',
        content:
          '**يمنح Apple Intelligence كل iPhone مدعوم نموذجاً لغوياً مدمجاً لا يحتاج إلى تنزيل، ويتيح إطار Foundation Models لتطبيقات الجهات الخارجية استخدامه.** تصف صفحة المطوّرين لدى Apple الإطار بأنه واجهة Swift أصلية تتيح وصولاً مباشراً إلى نموذج الجهاز نفسه الذي يشغّل Apple Intelligence. ولا يعمل إلا على الأجهزة واللغات التي يدعمها Apple Intelligence.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'يشغّل Apple Intelligence نموذج Apple الخاص على الجهاز في iPhone 15 Pro وما بعده، ويتيح إطار Foundation Models لتطبيقات الجهات الخارجية مثل Locally AI وCompass وPajdo استخدامه دون تضمين نموذج خاص بها.',
          },
          {
            type: 'plain-terms',
            text:
              'وضعت Apple أصلاً نموذجاً لغوياً صغيراً داخل iPhone. لا تنزّله، لكنك لا تستطيع أيضاً استبداله بنموذج آخر. يمكن للتطبيقات استعارته للإجابة عن الأسئلة على الجهاز، ولهذا تحتاج عدة تطبيقات جديدة إلى iPhone حديث وإصدار iOS حديث بدلاً من تنزيل نموذج كبير.',
          },
        ],
        items: [
          '**قائمة الأجهزة (صفحة Apple Intelligence لدى Apple):** iPhone 15 Pro وPro Max (A17 Pro)، وعائلة iPhone 16 وiPhone 16 Plus وiPhone 16e وiPhone 16 Pro (A18 وA18 Pro)، وiPhone 17 وiPhone 17e وiPhone 17 Pro وiPhone 17 Pro Max وAir (A19 وA19 Pro)، وiPhone Duo وiPhone 18 Pro وiPhone 18 Pro Max (A20 Pro).',
          '**اللغات:** يتطلب Apple Intelligence ضبط Siri ولغة الجهاز على لغة مدعومة. تشمل قائمة Apple الصينية (المبسطة والتقليدية) والدنماركية والهولندية والإنجليزية والفرنسية والألمانية والإيطالية واليابانية والكورية والنرويجية والبرتغالية والإسبانية والسويدية والتركية والفيتنامية. وتضيف Apple أن بعض الميزات قد لا تتوفر في جميع المناطق أو اللغات.',
          '**Siri AI (النسخة التجريبية من iOS 27):** تذكر Apple الإنجليزية والفرنسية واليابانية والكورية والبرتغالية والإسبانية للبداية، وتقول إنه لن يتوفر مبدئياً في الاتحاد الأوروبي على iOS، وإن لبعض الميزات من جهة الخادم حدوداً يومية للاستخدام. وهو منفصل عن تطبيقات الدردشة على الجهاز في هذا الدليل.',
          '**ما يقدّمه الإطار (Apple، دليل iOS 27):** الوصول إلى Apple Foundation Models، وعبر بروتوكول Language Model الوصول إلى نماذج سحابية مثل Claude وGemini أو أي مزوّد يتوافق معه؛ وطلبات متعددة الوسائط تمرّر الصور مع النص؛ وأدوات Vision مثل OCR وقراءة الباركود التي يستطيع النموذج استدعاءها على الجهاز؛ وDynamic Profiles لتبديل النماذج والأدوات والتعليمات داخل جلسة واحدة.',
          '**الأساس في iOS 26 (لم يُعَد التحقق منه في هذا التحديث):** صدر الإطار أول مرة مع iOS 26. راجع وثائق Apple الحالية لمعرفة حد السياق والميزات المدعومة قبل أن تبني تصميمك عليه.',
          '**Private Cloud Compute:** يمكن لـ Apple Intelligence تمرير الطلبات الأكبر إلى خوادم Apple. تقول Apple إن البيانات لا تُخزَّن أبداً وتُستخدم لطلبك فقط. وهذا ليس معالجة على الجهاز، لذا اعتبر "Apple Intelligence" و"دون اتصال" ادعاءين مختلفين.',
          '**التطبيقات في هذا الدليل التي تستخدم نموذج Apple:** [Locally AI](/ar/power-local-llm/locally-ai-review) (واجهة دردشة)، [Compass - Local AI](/ar/power-local-llm/compass-local-ai-review) (دردشة وOCR للقطات الشاشة)، [Pajdo](/ar/power-local-llm/pajdo-review) (أسئلة Apple Health)، [LocalMindAI](/ar/power-local-llm/localmindai-review) (نموذج Apple أو نماذج منزَّلة)، [Noema](/ar/power-local-llm/noema-review) و[Reins](/ar/power-local-llm/reins-review) (Apple Foundation Models كواجهة خلفية واحدة)، [Hillnote](/ar/power-local-llm/hillnote-review) (الملاحظات)، و[AI on Device](/ar/power-local-llm/ai-on-device-review) الذي يضمّن بدلاً من ذلك نموذج 3B خاصاً به لكنه يتطلب جهازاً متوافقاً مع Apple Intelligence.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'إن أردت فقط إعادة الصياغة وملخصات الإشعارات وأدوات الكتابة داخل Mail وMessages وNotes فلا حاجة إلى تطبيق دردشة. وإن أردت نافذة دردشة أو اختيار النموذج أو الأسئلة عن المستندات، فثبّت أحد التطبيقات في هذا الدليل؛ وللموازنة بين نموذج Apple والنماذج المفتوحة انظر [الذكاء الاصطناعي على جهاز Apple مقابل نماذج LLM المحلية](/ar/local-llms/apple-on-device-ai-vs-local-llms).',
          },
        ],
      },
      appStoreRules: {
        id: 'app-store-rules',
        title: 'قواعد App Store التي تشكّل الذكاء الاصطناعي المحلي على iPhone',
        content:
          '**يفسّر App Store معظم الفروق بين الذكاء الاصطناعي المحلي على iPhone وعلى سطح المكتب.** تنطبق إرشادات مراجعة التطبيقات لدى Apple على كل تطبيق، وأربعة منها مهمة هنا: التطبيقات المكتفية ذاتياً واستهلاك الطاقة والخدمات في الخلفية ومشاركة البيانات. يقتبس هذا الفصل نص القاعدة ويعرض قراءتنا لها؛ وهو ليس استشارة قانونية، ويمكن لـ Apple تغيير القواعد.',
        items: [
          '**لا شيفرة منزَّلة تغيّر التطبيق (الإرشاد 2.5.2).** نص Apple: لا يجوز للتطبيقات تنزيل أو تثبيت أو تنفيذ شيفرة تُدخل ميزات أو وظائف في التطبيق أو تغيّرها ("may not download, install, or execute code which introduces or changes features or functionality of the app"). تبقى تطبيقات الذكاء الاصطناعي المحلي ضمن هذه القاعدة بتضمين المحرك في التطبيق وتنزيل أوزان النماذج، وهي بيانات. وهذه قراءتنا، لا بيان من Apple.',
          '**لا خادم Ollama على الهاتف.** لا تقدّم Ollama تطبيقاً لـ iPhone، ولا يترك صندوق عزل App Store طريقة عملية لتشغيل خادم Ollama أو حاوية Docker. توجد بعض تطبيقات الصدفة المعزولة، لكنها لا تمنحك خادماً للنماذج المحلية.',
          '**واجهات برمجية عامة فقط (الإرشاد 2.5.1).** يجوز للتطبيقات استخدام الواجهات العامة فقط، ولهذا فإن Foundation Models وCore ML وMetal وMLX هي المسارات المتاحة، أما الوصول الخاص إلى Neural Engine فغير متاح.',
          '**الطاقة والحرارة (الإرشاد 2.4.2).** تقول Apple إن التطبيقات "should not rapidly drain battery, generate excessive heat, or put unnecessary strain on device resources" أي ينبغي ألا تستنزف البطارية بسرعة أو تولّد حرارة مفرطة أو تضع ضغطاً غير ضروري على موارد الجهاز. يختبر التوليد المتواصل هذا الخط، ولهذا تُبطئ التطبيقات الجلسات الطويلة أو توقفها.',
          '**الاستخدام في الخلفية محدود (الإرشاد 2.5.4).** يجوز لتطبيقات تعدد المهام استخدام الخدمات في الخلفية للأغراض المقصودة فقط، مثل تشغيل الصوت والموقع وإكمال المهام والإشعارات المحلية. لا يستطيع النموذج مواصلة التوليد أو العمل وكيلاً إلى أجل غير مسمى بعد مغادرتك التطبيق؛ وتنوّه مراجعة [Reins](/ar/power-local-llm/reins-review) بأن التوليد في الخلفية يتطلب iOS 26.',
          '**حدود الذاكرة.** يضع iOS سقفاً لما يجوز لتطبيق في الواجهة استخدامه من RAM. تنشر Apple استحقاقاً لرفع حد الذاكرة (com.apple.developer.kernel.increased-memory-limit) يمكن للمطوّرين طلبه؛ ولا نذكر المقدار الدقيق المسموح. لا يمكنك معرفة ما إذا كان التطبيق يملكه، فاختبر النموذج بأداة الاختبار المدمجة في التطبيق قبل الاعتماد عليه.',
          '**JIT والتجميع وقت التشغيل.** كثيراً ما تجمّع المحركات المكتبية الشيفرة وقت التشغيل؛ أما تطبيقات iOS فتشحن محركات مُجمَّعة مسبقاً. هذا سلوك عام للمنصة أشارت إليه عدة مشاريع محركات، وهو أحد أسباب تأخر محركات iPhone عن المكتبية في الميزات.',
          '**مشاركة البيانات (الإرشادان 5.1.1 و5.1.2).** يجب على التطبيقات ربط سياسة خصوصية وشرح البيانات التي تجمعها والحصول على إذن قبل مشاركة البيانات الشخصية مع أطراف ثالثة "including with third-party AI" أي بما في ذلك الذكاء الاصطناعي من أطراف ثالثة، ولا يجوز لها إعادة توظيف البيانات دون موافقة. تملأ الجهة المطوّرة ملصقات الخصوصية في App Store، وسيعود إليها فصل الخصوصية.',
          '**التحميل الجانبي والأسواق البديلة.** في الاتحاد الأوروبي توجد أسواق تطبيقات بديلة بموجب قانون الأسواق الرقمية، لكن كل مطوّر يقرر أين ينشر. لا يحتاج أي تطبيق في هذا الدليل إلى سوق بديل؛ و[LLM Farm](/ar/power-local-llm/llm-farm-review) هو الاستثناء الذي يجب حالياً بناؤه من المصدر في Xcode.',
          '**نسخ TestFlight التجريبية.** تقدّم عدة جهات مطوّرة نسخ TestFlight (مثل [Aiko](/ar/power-local-llm/aiko-review) لتجربة مجانية و[fullmoon](/ar/power-local-llm/fullmoon-review) لنسخ أحدث). نسخ TestFlight محدودة المدة وغير مكتملة؛ استخدمها للتجربة لا للبيانات التي لا تحتمل فقدانها.',
        ],
      },
      iphoneVsAndroid: {
        id: 'iphone-vs-android',
        title: 'ما يفعله iPhone بصورة أفضل وأسوأ من Android',
        content:
          '**يسهل البدء على iPhone ويصعب التوسّع؛ ويحدث العكس على Android.** تأتي هواتف iPhone بعدد قليل من التهيئات المعروفة، وتشحن نموذج Apple الخاص، وتشغّل كل تطبيق عبر متجر واحد. أما هواتف Android فتتفاوت كثيراً في RAM والشريحة، وتسمح بتطبيقات الطرفية والتحميل الجانبي، ولها منظومة نماذج خاصة على الجهاز. هذه مقارنة بين المنصتين من معلومات عامة؛ وللأرقام عتاداً بعتاد انظر [الذكاء الاصطناعي على الجهاز: Galaxy مقابل iPhone](/ar/local-llms/galaxy-vs-iphone-on-device-ai-2026) و[دليل الذكاء الاصطناعي المحلي على Android](/ar/power-local-llm/local-ai-on-android-guide) الشقيق.',
        columns: ['الموضوع', 'iPhone', 'Android'],
        rows: [
          {
            'الموضوع': 'جهد الإعداد',
            'iPhone': 'App Store، بنقرة واحدة',
            'Android': 'Play Store أو APK',
          },
          {
            'الموضوع': 'النموذج المدمج',
            'iPhone': 'Apple Foundation Models',
            'Android': 'نماذج الشركات المصنّعة وGoogle',
          },
          {
            'الموضوع': 'تشغيل Ollama على الهاتف',
            'iPhone': 'لا يوجد تطبيق Ollama لـ iPhone',
            'Android': 'ممكن عبر Termux (انظر الدليل)',
          },
          {
            'الموضوع': 'سقف RAM',
            'iPhone': 'نحو 12 GB في هواتف Pro',
            'Android': 'يتفاوت؛ افحص كل هاتف',
          },
          {
            'الموضوع': 'صيغ النماذج',
            'iPhone': 'GGUF وMLX وCore ML وLiteRT',
            'Android': 'GGUF وLiteRT وMLC وغيرها',
          },
          {
            'الموضوع': 'الاختصارات والأتمتة',
            'iPhone': 'Shortcuts وApp Intents',
            'Android': 'Tasker وintents',
          },
          {
            'الموضوع': 'عدد التطبيقات',
            'iPhone': 'خيارات مفتوحة المصدر أقل',
            'Android': 'خيارات مفتوحة المصدر أوسع',
          },
          {
            'الموضوع': 'العمل في الخلفية',
            'iPhone': 'مقيّد بشدة',
            'Android': 'أكثر مرونة، لكنه محدود',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'تعمل تطبيقات كثيرة في هذا الدليل على Android أيضاً ([PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) و[MLC Chat](/ar/power-local-llm/mlc-chat-review) و[KernelAI](/ar/power-local-llm/kernelai-review) و[LLM Hub](/ar/power-local-llm/llm-hub-review))، لذا يستطيع منزل يضم المنصتين غالباً استخدام التطبيق نفسه على كل منهما. قارن تفاصيل Android في [أفضل تطبيقات الذكاء الاصطناعي المحلي لنظام Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026).',
          },
        ],
      },
      chatMain: {
        id: 'chat-assistants',
        title: 'مساعدو الدردشة: التطبيقات الرئيسية على الجهاز',
        content:
          '**للدردشة العامة على iPhone، ابدأ بأحد التطبيقات الخمسة التي يقارنها ملخص iPhone لدينا، ثم انظر إلى التطبيقات الأحدث أدناه.** يذكر كل سطر ما يفعله التطبيق وحدّه الصريح. تأتي التفاصيل من مراجعات PromptQuorum المرتبطة وصفحات المتاجر وصفحات الجهات المطوّرة؛ وما لم تذكر المراجعة أنها اختبرت التطبيق، فاعتبر السرعة والجودة غير مقيستين. وللاختيارات المرتّبة والسرعات الإرشادية انظر [أفضل تطبيقات الذكاء الاصطناعي المحلي لنظام iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026)، ولفئة الدردشة كاملة انظر [مقارنة مساعدي الدردشة](/ar/power-local-llm/local-llm-chat-assistants-compared).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'PocketPal AI هو الخيار المجاني الافتراضي، وPrivate LLM الخيار المدفوع مع Siri وShortcuts، وLocally AI تطبيق MLX المجاني مع Apple Foundation Models، وGoogle AI Edge Gallery تطبيق Gemma 4 المجاني لـ iPhone.',
          },
          {
            type: 'plain-terms',
            text:
              'اختر تطبيق دردشة واحداً، ونزّل نموذجاً واحداً يناسب iPhone لديك، واحتفظ ببقية التطبيقات في هذا الدليل للمهام الخاصة مثل المستندات أو الصوت أو الخادم المنزلي. الأسعار مأخوذة من المراجعات وصفحات المتاجر المرتبطة وقد تتغير؛ تحقق من المتجر قبل الشراء.',
          },
        ],
        items: [
          '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review): مجاني ومفتوح المصدر (MIT)، يشغّل أي نموذج GGUF من Hugging Face وفيه اختبار أداء مدمج. القيد: دردشة مستقلة دون ذكر إجراء Shortcuts أو Siri؛ وتوجد عمليات شراء اختيارية داخل التطبيق لإعدادات مسبقة مميزة.',
          '[Private LLM](/ar/power-local-llm/private-llm-review): 4.99 دولار مرة واحدة لـ iPhone وiPad وMac، أكثر من 140 نموذجاً، بلا حساب. يقول المطوّر إنه يتكامل مع Siri وShortcuts. القيد: مغلق المصدر وقائمة نماذج منتقاة، فلا يمكنك تحميل ملفات اعتباطية.',
          '[Locally AI](/ar/power-local-llm/locally-ai-review): مجاني، من فريق LM Studio، مبني على Apple MLX، مع إجراء Shortcuts وApple Foundation Models كخيار دردشة وربط اختياري بـ LM Studio على Mac. القيد: لا استيراد لملفات GGUF اعتباطية، ومغلق المصدر، ويتطلب iOS 18.1 أو أحدث.',
          '[Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review): تطبيق Google المجاني لـ Gemma 4 مع وضع التفكير ومهارات الوكلاء ومدخلات الصور والصوت. القيد: نماذج LiteRT-LM فقط، ويوصف بأنه نسخة تجريبية، ويُظهر ملصق الخصوصية في App Store بعض تشخيصات الجهاز.',
          '[Noema](/ar/power-local-llm/noema-review): مجاني، يشغّل GGUF وMLX وExecuTorch وCore ML وApple Foundation Models في تطبيق واحد، مع دردشة مستندات على الجهاز. القيد: مغلق المصدر، ولا حد أدنى منشور لـ RAM، ويتطلب iOS أو iPadOS 18 أو أحدث.',
          '[Off Grid AI](/ar/power-local-llm/off-grid-ai-review): تطبيق مجاني ومفتوح المصدر (MIT) مع دردشة GGUF ونماذج صور Stable Diffusion وتحويل الكلام إلى نص عبر Whisper على الجهاز، على iOS وAndroid وmacOS وWindows. القيد: تطبيق واحد بمهام كثيرة يعني تخزيناً وإعدادات أكثر.',
          '[Pocket AI](/ar/power-local-llm/pocket-ai-review): مجاني، llama.cpp مع Metal، و28 نموذجاً من عائلات Qwen وGemma وLlama وMistral وPhi وDeepSeek (بحسب المطوّر)، ويتطلب iPhone 12 أو أحدث. القيد: إدخال الصوت عبر Whisper على الجهاز يتطلب فتح Pro المدفوع.',
          '[KernelAI](/ar/power-local-llm/kernelai-review): مجاني، و53 نموذجاً مفتوحاً قابلاً للتنزيل بأحجام من 112 MB إلى 3.11 GB، مع المستندات والرؤية وShortcuts بحسب القائمة في المتجر. القيد: مغلق المصدر، ومراجعتنا تستند إلى مصادر عامة لا إلى اختبار عملي.',
          '[On Device AI](/ar/power-local-llm/on-device-ai-review): أكثر من 200 نموذج GGUF وMLX قابل للتنزيل، إضافةً إلى التفريغ النصي واستيراد المستندات وRSS وتحويل النص إلى كلام على الجهاز وخطافات الأتمتة. القيد: قائمة ميزات واسعة في تطبيق مغلق المصدر؛ اقرأ قسم الخصوصية فيه.',
          '[Enclave AI](/ar/power-local-llm/enclave-ai-review): مجاني مع عمليات شراء داخل التطبيق، يعمل دون اتصال على iPhone وiPad وMac بحسب قائمته في المتجر، بلا حساب، مع التفاعل مع المستندات وShortcuts بحسب ملخصنا. القيد: مغلق المصدر وفيه فئات مدفوعة.',
        ],
      },
      chatMore: {
        id: 'chat-more',
        title: 'مساعدو الدردشة: التطبيقات الأحدث والمتخصصة والهجينة',
        content:
          '**تغطي هذه التطبيقات احتياجات أضيق: دردشة بسعر لمرة واحدة، ودردشة بنموذج Apple فقط، والشخصيات، ومشاريع الخصوصية مفتوحة المصدر، والتطبيقات الهجينة التي تمزج بين الجهاز والسحابة.** انتبه خصوصاً إلى تحذيرات التطبيقات الهجينة، فالتطبيق الهجين لا يكون محلياً إلا ما دمت في وضعه الذي يعمل على الجهاز.',
        items: [
          '[Cloak: Local AI](/ar/power-local-llm/cloak-local-ai-review): مدفوع مرة واحدة (1.99 دولار في المتجر الأمريكي)، ينزّل نموذجاً واحداً موصى به، ويضيف Voice Memos وملخصاً أسبوعياً مبنياً على Photos وLocation وVoice Memos على iPhone. القيد: لا منتقي للنماذج واسم النموذج غير منشور.',
          '[Compass - Local AI](/ar/power-local-llm/compass-local-ai-review): مجاني، يجيب عبر Apple Intelligence على الجهاز ويقرأ لقطات الشاشة بـ OCR على الجهاز؛ ويتطلب iOS أو iPadOS 26. القيد: البحث على الويب اختياري ويرسل استعلامك إلى DuckDuckGo أو Brave عند تفعيله.',
          '[AI on Device](/ar/power-local-llm/ai-on-device-review): 4.99 دولار مرة واحدة، نموذج 3B مكمَّم بدقة 2 بت، ويتطلب iOS 26 وجهازاً متوافقاً مع Apple Intelligence. القيد: لا تحديث منذ 13 أكتوبر 2025، لذا اعتبره هادئاً.',
          '[Haplo AI](/ar/power-local-llm/haplo-ai-review): ينزّل نماذج مفتوحة مثل Qwen وPhi للدردشة وإدخال الصور وتوليد الصور، بلا حساب. القيد: تطبيق مدفوع؛ ومراجعتنا تستند إلى مصادر عامة.',
          '[Oscilla](/ar/power-local-llm/oscilla-review): مجاني، أكثر من 40 نموذجاً مفتوحاً، وصوت فوري وذاكرة مدمجة وبحث على الويب وتحليل الملفات والصور؛ وملصق Apple "Data Not Collected". القيد: يتطلب iOS 26 أو أحدث، ومغلق المصدر، ولا تحديث منذ 21 مايو 2026.',
          '[Frankly AI](/ar/power-local-llm/frankly-ai-review): نماذج على الجهاز قابلة للتنزيل مع شخصيات للمهام وبلا حساب؛ حد يومي مجاني، ويفتح Pro الباقي. القيد: سقف للاستخدام في الفئة المجانية.',
          '[LLM Studio Go](/ar/power-local-llm/llm-studio-go-review): مجاني وبدعم إعلاني، دردشة وصوت وصور وموسيقى وكلام بنماذج GGUF وMLX، iOS أو iPadOS 18. القيد: إعلانات، وبحسب المراجعة لا صلة له بـ LM Studio رغم الاسم.',
          '[Local AI Chat - pocket](/ar/power-local-llm/local-ai-chat-pocket-review): دردشة دون اتصال بنموذج freemium مع توليد الصور وShortcuts بحسب وصفه التسويقي، iOS أو iPadOS 18.6 أو أحدث. القيد: لا تحديث منذ 27 مايو 2026 وعمليات شراء داخل التطبيق بأسلوب الاشتراك.',
          '[Loci AI](/ar/power-local-llm/loci-ai-review-offline-local-ai): مجاني على iPhone وiPad وAndroid وMac وWindows، ويختار تلقائياً نموذجاً يناسب العتاد. القيد: ادعاءات الجهة المطوّرة عن قوة النموذج لم تتحقق منها PromptQuorum.',
          '[Ensu](/ar/power-local-llm/ensu-review): مجاني ومفتوح المصدر (AGPL)، من Ente Labs، مع إدخال الصور والإملاء الصوتي المحلي. القيد: تقول الجهة المطوّرة نفسها إنه لم يبلغ بعد قدرات ChatGPT أو Claude Code، وما زال الإصدار 0.x.',
          '[MemoryAI](/ar/power-local-llm/memoryai-review): دردشة مجانية دون اتصال مع أسئلة وأجوبة عن المستندات وذاكرة قابلة للتعديل ووضع أطفال مقفل برمز PIN؛ يتطلب iOS 16.4+ وذاكرة RAM بسعة 4 GB+. القيد: تذكر سياسة خصوصيته أحداث الاستخدام وتقارير الأعطال؛ ومغلق المصدر.',
          '[Secret AI](/ar/power-local-llm/secret-ai-review): دردشة دون اتصال مع شخصيات وSkills وأدوات MCP على نماذج GGUF وMNN وMLX. القيد: بحسب سياسة الخصوصية، قد ترسل استدعاءات أدوات MCP والخوادم البعيدة الاختيارية بيانات خارج الجهاز، وتسبق السياسة هذه الميزات.',
          '[LocalMindAI](/ar/power-local-llm/localmindai-review): دردشة على iPhone وiPad مع الذاكرة والتعرف على الكلام وقراءة المستندات، باستخدام نموذج Apple أو نماذج منزَّلة؛ iOS 26. القيد: كان عمره أياماً عند المراجعة، ومراجعتنا تستند إلى مصادر عامة.',
          '[Solair AI](/ar/power-local-llm/solair-ai-review): مساعد يعطي الأولوية للمحلي مع بديل سحابي اختياري بمفتاحك الخاص؛ iOS 26. القيد: البديل سحابي، فتحقق من الوضع الذي يجيب.',
          '[Liquid Apollo](/ar/power-local-llm/liquid-apollo-review): مجاني، يشغّل نماذج Liquid AI LFM2 (من 350M إلى 2.6B) دون اتصال، مع وضع OpenRouter اختياري وخلفيات مخصصة؛ iOS 18. القيد: ليس محلياً بالكامل؛ فوضع OpenRouter يحتاج إلى مفتاحك الخاص والإنترنت.',
          '[Kai 9000](/ar/power-local-llm/kai-9000-review): مساعد مفتوح المصدر بذاكرة دائمة وأدوات. القيد: بحسب مراجعته، يرسل الرسائل إلى خدمة سحابية افتراضياً؛ ولا يعمل محلياً إلا بعد تنزيل نموذج على الجهاز.',
          '[CompactifAI APP](/ar/power-local-llm/compactifai-app-review): تطبيق مجاني من Multiverse Computing يقدّم نماذج مضغوطة. القيد: يصف نص المتجر الحالي نماذج API فقط، لذا فما يعمل على الهاتف غير متحقق منه.',
          '[Atomic Chat](/ar/power-local-llm/atomic-chat-review): تطبيق مجاني ومفتوح المصدر (Apache 2.0) لأنظمة macOS وWindows وLinux وiOS وAndroid بنماذج GGUF وMLX وONNX وواجهة API محلية متوافقة مع OpenAI. القيد: مشروع متعدد المنصات، فاقرأ المراجعة لمعرفة ما تتضمنه نسخة iPhone.',
          '[LLM Hub](/ar/power-local-llm/llm-hub-review): حزمة لـ Android وiPhone مع وكيل يدعم MCP وتوليد الصور والموسيقى والترجمة وWhisper والدردشة الصوتية، إضافةً إلى فئة Premium مدفوعة. القيد: رخصته PolyForm Noncommercial، وليست رخصة مفتوحة المصدر بالمعنى المعتاد.',
          '[Llamatik](/ar/power-local-llm/llamatik-review): مجاني، MIT، روبوت دردشة دون اتصال تصفه قائمته الخاصة بأنه عرض تجريبي لحزمة Kotlin SDK التي طوّرها المطوّر. القيد: تذكر سياسة الخصوصية وملصق المتجر تحليلات Firebase وإبلاغ الأعطال.',
          '[Layla](/ar/power-local-llm/layla-review): 19.99 دولار مرة واحدة على Android وiOS، نماذج GGUF مع رفقاء تحركهم الشخصيات وأصوات وتوليد صور. القيد: يعطي الأولوية لـ Android، ويوجد وضع Layla Cloud اختياري.',
        ],
      },
      chatQuiet: {
        id: 'chat-quiet-apps',
        title: 'تطبيقات هادئة أو متوقفة التحديث أو غير موجودة على App Store',
        content:
          '**قد يكون التطبيق الذي لم يُحدَّث منذ أكثر من ثلاثة أشهر غير مُصان؛ فتحقق قبل الاعتماد عليه.** التواريخ أدناه مأخوذة من بطاقات دليل PromptQuorum ومن كل مراجعة. قد يظل التطبيق الهادئ يعمل، لكنك لا تحصل على إصلاحات ولا نماذج جديدة ولا مؤشر على عودة الجهة المطوّرة.',
        items: [
          '[MLC Chat](/ar/power-local-llm/mlc-chat-review): تطبيق مرجعي مسرَّع بـ Metal من مشروع MLC LLM. لا تحديث على App Store منذ 27 سبتمبر 2024، بحسب مراجعتنا. أما المحرك خلفه، [MLC LLM](/ar/power-local-llm/mlc-llm-explained)، فما زال نشطاً.',
          '[LLM Farm](/ar/power-local-llm/llm-farm-review): آخر إصدار 1.4.3 في يناير 2025 وآخر دفعة شيفرة في 30 يناير 2026. لا يمكن تثبيته من App Store أو TestFlight (يقول ملف README إنه غير متاح مؤقتاً)؛ ابنِه من المصدر في Xcode إن احتجت إلى أدوات التحكم في أخذ العينات.',
          '[fullmoon](/ar/power-local-llm/fullmoon-review): مجاني، MIT، يشغّل نماذج صغيرة على Apple MLX، بلا إصدار منذ 28 يناير 2025 وبلا تغيير في الشيفرة منذ 5 مايو 2025.',
          '[Maid](/ar/power-local-llm/maid-review): تطبيق دردشة مفتوح المصدر يعطي الأولوية لـ Android؛ وكانت نسخة iOS منه تُثبَّت جانبياً وتؤرّخ مراجعتنا إصدارات iOS حتى الإصدار 2.0.7 في أبريل 2025، فهو ليس خياراً على App Store.',
          '[Aiko](/ar/power-local-llm/aiko-review): ما زال يُباع ومفيداً للتفريغ النصي، لكن آخر تحديث له كان في 27 يونيو 2026، أي قبل أكثر من ثلاثة أشهر.',
          'تطبيقات أخرى مصنَّفة هادئة في هذا الدليل: [Atomic Bot](/ar/power-local-llm/atomic-bot-review) (26 مايو 2026)، و[Chapper](/ar/power-local-llm/chapper-review) (6 أغسطس 2026)، و[Enchanted](/ar/power-local-llm/enchanted-review) (7 يوليو 2026)، و[AI CutoutWerk](/ar/power-local-llm/ai-cutoutwerk-review) (16 فبراير 2026)، و[pcAI Photo Retouch](/ar/power-local-llm/pcai-photo-retouch-review) (20 فبراير 2026).',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'الصفة "هادئ" علامة مبنية على التاريخ من بطاقات الدليل، وليست حكماً على الجودة. قبل أن تدفع ثمن تطبيق في هذه القائمة، افتح صفحته على App Store واقرأ سجل الإصدارات بنفسك.',
          },
        ],
      },
      vision: {
        id: 'vision-camera',
        title: 'الرؤية والكاميرا: اطرح أسئلة عن الصور ولقطات الشاشة',
        content:
          '**تقبل عدة تطبيقات iPhone صورة إلى جانب سؤالك وتجيب على الجهاز، لكن نماذج الرؤية الصغيرة ترتكب أخطاء أكثر من نظيراتها السحابية.** يوجد مساران: نموذج رؤية ولغة تنزّله (يقرأ النموذج الصورة بنفسه)، وOCR النظام مع نموذج نصي (يستخرج الهاتف النص ثم يجيب النموذج). يقول دليل المطوّرين لـ iOS 27 من Apple إن إطار Foundation Models صار يقبل الصور مع النص ويتيح للنموذج استدعاء أدوات Vision مثل OCR وقراءة الباركود على الجهاز.',
        items: [
          '[Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review): Ask Image وAudio Scribe مع نماذج Gemma 4. القيد: نماذج LiteRT-LM فقط؛ وتذكر Google أرقام ذاكرة من الجهة المصنّعة وليست قياسات PromptQuorum.',
          '[Compass - Local AI](/ar/power-local-llm/compass-local-ai-review): يقرأ لقطات الشاشة المرفقة بـ OCR على الجهاز ويجيب عبر Apple Intelligence. القيد: يقرأ OCR النص ولا يصف المشهد؛ ويتطلب iOS أو iPadOS 26.',
          '[Oscilla](/ar/power-local-llm/oscilla-review): تحليل الملفات والصور بنماذج قادرة على الرؤية مثل MiniCPM-V بحسب قائمته. القيد: يتطلب iOS 26 أو أحدث ولا تحديث منذ 21 مايو 2026.',
          '[Haplo AI](/ar/power-local-llm/haplo-ai-review): إدخال الصور وتوليدها في تطبيق واحد. القيد: مراجعتنا تستند إلى مصادر عامة، لذا فجودة النموذج غير مقيسة.',
          '[Ensu](/ar/power-local-llm/ensu-review): إدخال الصور بنماذج منزَّلة، مجاني ومفتوح المصدر. القيد: الإصدار 0.x؛ وتقول الجهة المطوّرة إنه لم يبلغ بعد مستوى الأدوات السحابية الكبيرة.',
          '[KernelAI](/ar/power-local-llm/kernelai-review): يدرج الرؤية بين ميزاته مع 53 نموذجاً قابلاً للتنزيل. القيد: يختلف النموذج الذي يقبل الصور من نموذج إلى آخر.',
          '[MemoryAI](/ar/power-local-llm/memoryai-review): فهم الصور بنماذج رؤية بعد تنزيل نموذج. القيد: عليك أن تختار بنفسك نموذجاً قادراً على الرؤية.',
          '[Reins](/ar/power-local-llm/reins-review): يرسل مرفقات الصور وPDF وCSV إلى نموذج على خادمك الخاص، أو إلى نموذج MLX محلي. القيد: تعتمد الجودة على نموذج الخادم الذي تختاره.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'لا تستخدم نموذج رؤية صغيراً على الجهاز في أي أمر تترتب على قراءته الخاطئة كلفة، مثل ملصقات الأدوية أو الوثائق القانونية أو تحديد النباتات أو الفطر للأكل. اعتبر الإجابات نقطة بداية وتحقق من المصدر.',
          },
        ],
      },
      voice: {
        id: 'voice-speech',
        title: 'الصوت: الإملاء والتفريغ النصي والقراءة بصوت عالٍ والمساعدون دون اتصال وSiri',
        content:
          '**تحويل الكلام إلى نص من أكثر المهام رسوخاً على الجهاز؛ إذ تفيد الجهات المطوّرة بأن نماذج من فئة Whisper تعمل على هواتف حديثة، وتتقاضى عدة تطبيقات رسماً لمرة واحدة بدلاً من الرسم بالدقيقة.** أما تحويل النص إلى كلام والمساعدون بلا استخدام اليدين فأقل اتساقاً. وللمسار الذي تبنيه بنفسك انظر [بناء مساعد صوتي محلي على هاتفك](/ar/power-local-llm/voice-assistant-local-mobile-offline)، وللفئة انظر [مقارنة تطبيقات الصوت](/ar/power-local-llm/local-llm-voice-audio-compared)، ولمقارنة المحركات انظر [مقارنة Whisper المحلي لتحويل الكلام إلى نص](/ar/power-local-llm/local-whisper-stt-comparison).',
        items: [
          '[Whisper Notes](/ar/power-local-llm/whisper-notes-review): 7.99 دولار مرة واحدة، يشغّل Whisper وParakeet وSenseVoice على iPhone وiPad وأجهزة Mac بشرائح Apple، مع تسمية المتحدثين؛ وتقول سياسة الخصوصية إن الصوت والنصوص المفرّغة لا تغادر الجهاز. القيد: مغلق المصدر؛ والمراجعة مبنية على مصادر عامة لا على اختبار عملي.',
          '[Aiko](/ar/power-local-llm/aiko-review): تفريغ نصي بـ Whisper على الجهاز لأجهزة Mac وiPhone وVision Pro، 100 لغة، ودعم Shortcuts، وشراء واحد لكل المنصات. القيد: آخر تحديث 27 يونيو 2026، لذا فهو هادئ.',
          '[Lyonesse](/ar/power-local-llm/lyonesse-review): تفريغ نصي دون اتصال وملاحظات اجتماعات ودردشة مع المستندات لـ iPhone وiPad وMac؛ ويسجّل تطبيق Apple Watch فيه بمفرده وينقل التسجيل إلى iPhone الذي يتولى التفريغ. القيد: ادعاءات الجهة المطوّرة عن المعالجة غير مُتحقَّق منها بصورة مستقلة.',
          '[OpenWhispr](/ar/power-local-llm/openwhispr-review): إملاء وملاحظات اجتماعات برخصة MIT مع نماذج Whisper أو Parakeet المحلية أو مزوّد سحابي تختاره. القيد: يتوقف بقاء صوتك على الجهاز على النموذج الذي تختاره.',
          '[AquaVoice](/ar/power-local-llm/aquavoice-review): إملاء صوتي يكتب في التطبيق النشط. القيد: بحسب المراجعة هو خدمة سحابية، وأدرجناه هنا حتى لا تخلط بينه وبين الإملاء المحلي.',
          '[Ensu](/ar/power-local-llm/ensu-review) و[MemoryAI](/ar/power-local-llm/memoryai-review): إملاء صوتي محلي (Ensu) وصوت بلا استخدام اليدين مع إدخال كلام على الجهاز وقراءة بصوت عالٍ (MemoryAI) داخل تطبيق دردشة. القيد: تتبع جودة الصوت نموذج الدردشة الصغير خلفه.',
          '[Oscilla](/ar/power-local-llm/oscilla-review) و[LLM Studio Go](/ar/power-local-llm/llm-studio-go-review) و[Pocket AI](/ar/power-local-llm/pocket-ai-review): صوت فوري، ودردشة صوتية مع الكلام، وإدخال Whisper على الجهاز (Pro المدفوع) على التوالي. القيد: يضيف الصوت حملاً على الذاكرة والبطارية فوق نموذج الدردشة.',
          '[Castmates](/ar/power-local-llm/castmates-review): مكالمات صوتية مع شخصيات تعمل، بحسب الجهة المطوّرة، على الهاتف. القيد: مغلق المصدر، لذا فالادعاء يستند إلى المطوّر.',
          '[Cloak: Local AI](/ar/power-local-llm/cloak-local-ai-review): يحوّل Voice Memos إلى ملاحظات أو دردشات. القيد: نموذج واحد ثابت.',
          '[Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review): المساعد الصوتي داخل Home Assistant، محلي مع Whisper وPiper وWyoming بحسب مراجعته؛ وليس تطبيق iPhone مستقلاً. القيد: يحتاج إلى خادم Home Assistant ووكيل LLM اختياري تجريبي جزئياً.',
          '[Murmur](/ar/power-local-llm/murmur-review): يؤلف موسيقى آلية للصور ومقاطع الفيديو والألعاب على الجهاز مع فتح Pro لمرة واحدة. القيد: بلا غناء.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Siri وShortcuts: يذكر [Private LLM](/ar/power-local-llm/private-llm-review) تكامله مع Siri وShortcuts، ويقدّم [Locally AI](/ar/power-local-llm/locally-ai-review) و[Aiko](/ar/power-local-llm/aiko-review) إجراءات Shortcuts، ويصف ملخص iPhone لدينا إجراء Use Model في Shortcuts الذي يمكنه توجيه أمر إلى نموذج Apple على الجهاز. لا يحل أي منها محل Siri نفسه؛ فأنت تطلب من Siri تشغيل اختصار يستدعي التطبيق.',
          },
        ],
      },
      documents: {
        id: 'documents-rag',
        title: 'المستندات وملفات PDF والاسترجاع على الهاتف',
        content:
          '**تعمل الدردشة مع عدد قليل من ملفات PDF أو الملاحظات على iPhone، لكن المكتبات الكاملة مكانها خادم منزلي.** تقسّم دردشة المستندات على الجهاز الملفات إلى أجزاء وتفهرسها بنموذج تضمين صغير وتمرّر أفضل الأجزاء إلى نموذج الدردشة. للنماذج الصغيرة نوافذ سياق قصيرة، لذا قد تفوّت الإجابات محتوى ويحتمل ظهور اقتباسات مختلقة. وللبحث على مستوى المكتبات انظر [مقارنة تطبيقات المعرفة والاسترجاع](/ar/power-local-llm/local-llm-knowledge-retrieval-compared).',
        items: [
          '[Private Mind](/ar/power-local-llm/private-mind-review): دردشة مفتوحة المصدر (MIT) من Software Mansion تجيب عن أسئلة حول ملفات PDF والملفات النصية باسترجاع على الجهاز واقتباس المصادر، باستخدام React Native ExecuTorch. القيد: أضاف الإصدار 1.3.0 مفتاح Web اختيارياً يجلب الصفحات، فهو دون اتصال افتراضياً لكنه ليس كذلك حين تكون هذه الميزة مفعّلة.',
          '[MemoryAI](/ar/power-local-llm/memoryai-review): أسئلة وأجوبة عن المستندات وذاكرة وكيل قابلة للتعديل. القيد: مغلق المصدر وأحداث الاستخدام تغادر الهاتف.',
          '[LocalMindAI](/ar/power-local-llm/localmindai-review): يقرأ مستنداتك على الجهاز بنموذج Apple أو بنموذج منزَّل. القيد: iOS 26 وكان جديداً جداً عند المراجعة.',
          '[Noema](/ar/power-local-llm/noema-review): دردشة مستندات على الجهاز عبر صيغ النماذج الخمس. القيد: مغلق المصدر؛ ولا رقم منشور لـ RAM.',
          '[Lyonesse](/ar/power-local-llm/lyonesse-review): دردشة مع مستنداتك الخاصة إلى جانب النصوص المفرّغة. القيد: ميزات Apple Watch والاجتماعات هي محور التطبيق.',
          '[Arbiter](/ar/power-local-llm/arbiter-local-ai-chat-review): يُبقي المستندات المرفوعة على الجهاز للتلخيص على iPhone 13 Pro أو أحدث (نحو 6 GB من RAM أو أكثر)، ويستطيع الوصول إلى LM Studio أو Ollama أو تطبيق Arbiter for Mac المرافق لنموذج أكبر. القيد: إجابات النموذج الأكبر تغادر الهاتف إلى حاسوبك.',
          '[KernelAI](/ar/power-local-llm/kernelai-review) و[Enclave AI](/ar/power-local-llm/enclave-ai-review): كلاهما يدرج ميزات المستندات في تطبيق دردشة عام. القيد: افحص حدود حجم الملفات وصيغها في التطبيق قبل أن تعتمد عليه.',
          '[Reins](/ar/power-local-llm/reins-review): مرفقات PDF وCSV والنصوص تُرسل إلى نموذج على خادمك الخاص. القيد: تجري المعالجة على الخادم لا على الهاتف.',
          '[AnythingLLM Mobile](/ar/power-local-llm/anythingllm-mobile-review): يتوفر على Android وضع مستقل على الجهاز وإمكانية الاقتران بـ AnythingLLM Desktop؛ وتذكر مراجعتنا أن تطبيق iOS لم يصدر بعد. القيد: إلى أن يصدر تطبيق iOS، استخدم متصفحاً مع خادم AnythingLLM الخاص بك.',
        ],
      },
      translation: {
        id: 'translation',
        title: 'الترجمة على الجهاز',
        content:
          '**الترجمة مناسبة بطبيعتها لنموذج صغير على الجهاز، لأن المهمة ضيقة وتشحن عدة تطبيقات نماذج مضبوطة للترجمة.** لم تقِس PromptQuorum جودة الترجمة على iPhone. من المرجح أن تنخفض الجودة في اللغات النادرة والتعابير الاصطلاحية والمستندات الطويلة، وكل محرك على الجهاز يحتاج إلى تنزيل لكل نموذج أو لغة.',
        items: [
          '[On-Device AI Translator](/ar/power-local-llm/on-device-ai-translator-review): يترجم على iPhone بنماذج Hy-MT2 وTranslateGemma وQwen القابلة للتنزيل ويقدّم ترجمة Apple المدمجة محركاً مجانياً؛ iOS 18.4 أو أحدث. القيد: نماذج الذكاء الاصطناعي خلف عمليات شراء داخل التطبيق لا تُظهر المصادر أسعارها، وسياسة الخصوصية تسبق التطبيق.',
          '[LLM Hub](/ar/power-local-llm/llm-hub-review): يتضمن الترجمة في حزمته لـ Android وiPhone. القيد: الترجمة ميزة واحدة بين كثير، والرخصة غير تجارية.',
          'يمكن لتطبيقات الدردشة العامة مثل [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Locally AI](/ar/power-local-llm/locally-ai-review) أن تترجم أيضاً إن حمّلت نموذجاً متعدد اللغات مثل نموذج من عائلة Qwen أو Gemma. القيد: لا قاموس مصطلحات ولا مراعاة لتخطيط المستند ولا ضمان لجودة كل لغة.',
          'تطبيق Translate من Apple وترجمة النظام منفصلان عن التطبيقات أعلاه ولم يُتحقق منهما لهذا الدليل؛ افحص في تطبيق Translate ما إذا كان زوج اللغات لديك قابلاً للتنزيل للاستخدام دون اتصال.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'لترجمة كتب كاملة أو مستندات طويلة، يكون مسار سطح المكتب أكثر عملية؛ انظر [ترجمة الكتب بنماذج LLM](/ar/power-local-llm/translate-books-with-llms-review). ودعم لغات Apple Intelligence قائمة منفصلة موضّحة في فصل Apple Intelligence.',
          },
        ],
      },
      images: {
        id: 'image-generation-editing',
        title: 'توليد الصور وتحرير الصور الفوتوغرافية',
        content:
          '**يستطيع iPhone توليد الصور بنماذج انتشار صغيرة وتحرير الصور بنماذج تجزئة، لكن التوليد بطيء ويستهلك التخزين كثيراً ويسخّن الهاتف.** ملفات النماذج تنزيلات بحجم عدة غيغابايت، وليست لدى PromptQuorum أرقام سرعة لأي تطبيق صور على iPhone. وللموازنة بين المحلي والسحابي انظر [توليد الصور بالذكاء الاصطناعي المحلي مقابل السحابة](/ar/power-local-llm/local-ai-image-generation-vs-cloud)، وللفئة انظر [مقارنة تطبيقات الصور والفيديو](/ar/power-local-llm/local-llm-images-video-compared).',
        items: [
          '[Draw Things](/ar/power-local-llm/draw-things-review): يولّد الصور بـ Stable Diffusion وSDXL وFlux ونماذج انتشار أخرى على macOS وiOS وiPadOS وvisionOS، بلا حساب للتوليد المحلي، iOS 15.4 أو أحدث. القيد: ليس محلياً بنسبة 100% لأنه يقدّم أيضاً وضعاً سحابياً اختيارياً؛ والنماذج الأكبر تحتاج إلى RAM أكثر.',
          '[Genva](/ar/power-local-llm/genva-review): تطبيق iPhone وiPad يحوّل الأوامر النصية والصور إلى صور على الجهاز مع رفع الدقة بعد تنزيل نموذج لمرة واحدة. القيد: صدر بالإصدار 1.0.0 في 14 أكتوبر 2026، فلا سجل له بعد.',
          '[Haplo AI](/ar/power-local-llm/haplo-ai-review) و[Off Grid AI](/ar/power-local-llm/off-grid-ai-review) و[LLM Studio Go](/ar/power-local-llm/llm-studio-go-review): تطبيقات دردشة تولّد الصور أيضاً على الجهاز (Haplo AI، وOff Grid AI بنماذج Stable Diffusion، وLLM Studio Go مع الموسيقى والكلام أيضاً). القيد: تتأخر جودة الصور وسرعتها عن التطبيقات المخصصة.',
          '[Local AI Chat - pocket](/ar/power-local-llm/local-ai-chat-pocket-review) و[Layla](/ar/power-local-llm/layla-review): دردشة دون اتصال مع توليد الصور، ولدى Layla أيضاً أصوات وشخصيات. القيد: Local AI Chat - pocket هادئ منذ 27 مايو 2026؛ وLayla يعطي الأولوية لـ Android.',
          '[Tina](/ar/power-local-llm/tina-review): يولّد الصور عبر ComfyUI على خادم تستضيفه، ويستطيع أيضاً تشغيل النماذج على الجهاز. القيد: خطوة الصور تحتاج إلى خادمك الخاص.',
          '[AI CutoutWerk](/ar/power-local-llm/ai-cutoutwerk-review): أداة إزالة الخلفية وتركيب القصاصات دون اتصال لـ iPhone وiPad وMac، باستخدام نموذج تجزئة Core ML. القيد: لا تحديث منذ 16 فبراير 2026.',
          '[pcAI Photo Retouch](/ar/power-local-llm/pcai-photo-retouch-review): يرمّم الصور القديمة ويطبّق أنماطاً فنية بذكاء اصطناعي يقول المطوّر إنه يعمل كلياً على الجهاز. القيد: النموذج غير مسمّى والمصدر غير منشور ولا تحديث منذ 20 فبراير 2026.',
        ],
      },
      photos: {
        id: 'photos-gallery-search',
        title: 'مكتبات الصور والبحث في المعرض',
        content:
          '**البحث في الصور بالذكاء الاصطناعي على iPhone هو عادةً عميل لمكتبة تتولى الفهرسة في مكان آخر: إما على الهاتف بميزة اختيارية، أو على خادم تديره.** تتبع المكتبات الثلاث أدناه مناهج مختلفة، ولا تضيف أي منها نموذج دردشة. يعالج التعرف على الوجوه بيانات بيومترية، فتحقق من القواعد المعمول بها حيث تقيم وحيث يقيم أصحاب الصور قبل تفعيله.',
        items: [
          '[Ente Photos](/ar/power-local-llm/ente-photos-review): نسخ احتياطي مفتوح المصدر للصور، مشفّر من طرف إلى طرف بحسب Ente؛ ويعمل التعرف على الوجوه والبحث السحري باللغة الطبيعية على جهازك ويبقيان مطفأين حتى تفعّلهما. القيد: تُخزَّن الصور مشفّرة في سحابة Ente، وتستهلك أول عملية فهرسة البطارية.',
          '[Immich](/ar/power-local-llm/immich-review): نسخ احتياطي مستضاف ذاتياً للصور والفيديو مع تطبيقي iPhone وAndroid؛ ويعمل البحث الذكي والتعرف على الوجوه على حاوية تعلّم آلي تستضيفها، تُثبَّت بـ Docker. القيد: يحتاج إلى خادم، وقاعدة البيانات تحمل البيانات الوصفية فقط فتحتاج الملفات إلى نسخ احتياطي منفصل، ولا توجد ميزة دردشة أو LLM.',
          '[Mylio Photos](/ar/power-local-llm/mylio-photos-review): مكتبة صور وفيديو ومستندات مع بحث SmartTag وتعرف على الوجوه والنص تقول Mylio إنها تعمل على أجهزتك؛ تنزيل مجاني وخطط اشتراك. القيد: لا تذكر Mylio أين يعمل روبوت المساعدة داخل التطبيق.',
          'المعارض الويب المستضافة ذاتياً التي تفتحها في متصفح iPhone أو تطبيق مرافق، مثل [مراجعة PhotoPrism](/ar/power-local-llm/photoprism-review) و[مراجعة Photoview](/ar/power-local-llm/photoview-review) و[مراجعة Home Gallery](/ar/power-local-llm/home-gallery-review)، مراجَعة بشكل منفصل؛ اقرأ كل مراجعة لمعرفة ما يعمل وأين.',
        ],
      },
      notes: {
        id: 'notes-knowledge',
        title: 'الملاحظات وقواعد المعرفة والإشارات المرجعية',
        content:
          '**تضع معظم أدوات الملاحظات والإشارات المرجعية الذكاء الاصطناعي على خادم أو مزوّد نماذج تختاره، ويكون تطبيق iPhone عميل الالتقاط والقراءة.** قد يظل هذا خاصاً تماماً إن كان الخادم لك والنموذج محلياً، لكنه ليس استدلالاً على الجهاز. تذكر كل مراجعة ما يعمل وأين.',
        items: [
          '[Hillnote](/ar/power-local-llm/hillnote-review): مساحة ملاحظات Markdown تعطي الأولوية للمحلي لأنظمة Mac وWindows وiPhone وAndroid مع ذكاء اصطناعي على الجهاز عبر Ollama وApple Intelligence، إضافةً إلى نماذج سحابية ومزامنة اختياريتين. القيد: يعمل Ollama على حاسوب لا على الهاتف، والنماذج السحابية اختيارية لكنها ليست محلية.',
          '[Logseq](/ar/power-local-llm/logseq-review): مخطِّط هيكلي مفتوح المصدر يعطي الأولوية للمحلي؛ وإصدار قاعدة البيانات 2.0.2 نسخة تجريبية يحذّر ملف README فيها من احتمال فقدان البيانات. القيد: يأتي الذكاء الاصطناعي عبر خادم MCP اختياري لا عبر نموذج مدمج.',
          '[SiYuan](/ar/power-local-llm/siyuan-review): مساحة معرفة مستضافة ذاتياً برخصة AGPL على Windows وmacOS وLinux وAndroid وiOS وHarmonyOS، مع ميزات ذكاء اصطناعي اختيارية تتصل بمزوّد نماذج تختاره. القيد: تتطلب المزامنة السحابية اشتراكاً أو شراء PRO لمرة واحدة.',
          '[Karakeep](/ar/power-local-llm/karakeep-review): تطبيق إشارات مرجعية وملاحظات مستضاف ذاتياً مع تطبيقي iOS وAndroid أصليين ووسم بالذكاء الاصطناعي عبر OpenAI أو نقطة Ollama محلية. القيد: تشغّل الخادم بـ Docker، ولا يكون الوسم محلياً إلا إن اخترت Ollama.',
          '[Linkwarden](/ar/power-local-llm/linkwarden-review): يؤرشف نسخة من كل صفحة تحفظها ويستطيع وسم الروابط بنموذج ذكاء اصطناعي تضبطه، مستضاف ذاتياً أو في إصدار Cloud مدفوع. القيد: تطبيق iPhone عميل؛ وتعمل خطوة الذكاء الاصطناعي على الخادم.',
          '[Lyonesse](/ar/power-local-llm/lyonesse-review) و[Cloak: Local AI](/ar/power-local-llm/cloak-local-ai-review): يحوّلان التسجيلات إلى ملاحظات (Lyonesse) أو ملخصاً أسبوعياً من Photos وLocation وVoice Memos (Cloak). القيد: كلاهما مغلق المصدر.',
        ],
      },
      health: {
        id: 'health-wellness',
        title: 'أسئلة الصحة والعافية',
        content:
          '**يجيب تطبيق iPhone مُراجَع واحد عن أسئلة حول بيانات Apple Health لديك بـ Apple Intelligence على الجهاز، وهو تطبيق الصحة الوحيد في مجموعة iPhone لدينا.** بيانات الصحة بيانات شخصية حساسة، والنموذج اللغوي الصغير ليس طبيباً.',
        items: [
          '[Pajdo](/ar/power-local-llm/pajdo-review): تطبيق مجاني لـ iPhone وiPad وApple Watch يحوّل بيانات Apple Health إلى أحد ثمانية أمزجة، ويجيب بحسب موقعه الإلكتروني عن أسئلتك حول هذه البيانات بـ Apple Intelligence على الجهاز. تشمل الخطة المجانية 5 أسئلة أسبوعياً؛ ويرفع Pro الحد ويضيف تخطيط التمارين وتقرير زيارة الطبيب. القيد: مغلق المصدر، ويتطلب iOS 26 أو أحدث، ويستند ادعاء المعالجة على الجهاز إلى كلام المطوّر.',
          'يمكن لتطبيقات الدردشة العامة من فصول الدردشة مناقشة النوم أو التمرين أو التغذية بعبارات عامة. القيد: لا وصول لها إلى بيانات Health لديك ما لم يطلب التطبيق إذناً، ويمكن للنماذج الصغيرة أن تذكر معلومات خاطئة بثقة.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'الإجابات على الجهاز ليست نصيحة طبية ولا تغني عن الطبيب. لا تستخدمها لتفسير الأعراض أو تنبيهات معدل ضربات القلب أو أسئلة الأدوية؛ واقرأ سياسة خصوصية التطبيق قبل منحه الوصول إلى Apple Health.',
          },
        ],
      },
      roleplay: {
        id: 'roleplay-companions',
        title: 'تطبيقات لعب الأدوار والرفقة مع ملاحظات أمان المحتوى',
        content:
          '**يشكّل لعب الأدوار ودردشة الرفقة جزءاً كبيراً من سوق تطبيقات الذكاء الاصطناعي المحلي على iPhone، وتختلف التطبيقات اختلافاً حاداً في ما إذا كان النموذج يعمل على الهاتف، وما المحتوى الذي تسمح به، وكيف تتعامل مع القاصرين.** المحلي لا يعني خاضعاً للإشراف، والسحابي لا يعني أكثر أماناً. اقرأ التصنيف العمري وإعدادات المحتوى للبالغين قبل أن تثبّت تطبيقاً أنت أو أي فرد في أسرتك. وللواجهات المكتبية انظر [SillyTavern مقابل Agnai مقابل RisuAI للعب الأدوار](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        items: [
          '[Castmates](/ar/power-local-llm/castmates-review): تطبيق iPhone مجاني مع 35 شخصية جاهزة وشخصيات مخصصة وبلا حساب؛ ويسمّي المطوّر Impish Llama 3B (Q4_K_M) يعمل عبر llama.cpp بعد تنزيل نحو 1.9 GB. تزيل خطة Pro الحد اليومي للرسائل وتفتح وضع Mature الاختياري للبالغين فقط. القيد: مغلق المصدر، لذا فادعاء العمل على الجهاز يستند إلى المطوّر.',
          '[Frankly AI](/ar/power-local-llm/frankly-ai-review): نماذج على الجهاز مع شخصيات للمهام وبلا حساب؛ حد يومي مجاني. القيد: الشخصيات موجّهة للمهام، ويفتح Pro بقية التطبيق.',
          '[Layla](/ar/power-local-llm/layla-review): رفيق ذكاء اصطناعي تحركه الشخصيات مع شخصيات للعب الأدوار وأصوات وتوليد صور على الجهاز؛ 19.99 دولار مرة واحدة. القيد: يوجد وضع Layla Cloud اختياري يُفعَّل بصورة منفصلة.',
          '[Secret AI](/ar/power-local-llm/secret-ai-review): شخصيات مخصصة على نماذج GGUF وMNN وMLX؛ وتقول الجهة المطوّرة إن الدردشات والشخصيات والصور تبقى خاصة. القيد: بحسب سياسة الخصوصية، قد ترسل أدوات MCP والخوادم البعيدة بيانات خارج الجهاز.',
          '[HiWaifu](/ar/power-local-llm/hiwaifu-review): لعب أدوار مع ذاكرة طويلة المدى وكتب معرفة (lorebooks) ودردشات جماعية، مصنَّف 18+. القيد: يبدو أنه خدمة سحابية، ولا تذكر قائمته أين يعمل النموذج.',
          '[Swerve](/ar/power-local-llm/swerve-ai-review): دردشة قصص وشخصيات مع شخصيات من المجتمع وتفرعات. القيد: بحسب قائمته هو خدمة عبر الإنترنت لا ذكاء اصطناعي على الجهاز.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'ملاحظات الأمان بعبارات بسيطة. أولاً، العمر: يحمل عدد من هذه التطبيقات تصنيف 18+ في App Store أو وضعاً للبالغين فقط، ولا يملك النموذج على الجهاز مرشّحاً من جهة الخادم يمكن الاعتماد عليه. ثانياً، الخصوصية: تطبيقات لعب الأدوار السحابية ترسل محادثاتك إلى خدمة، وحتى التطبيقات المحلية قد ترسل تحليلات. ثالثاً، الاعتماد العاطفي: قد تبدو دردشة الرفقة شخصية، وهذه ميزة في التصميم وليست علاقة حقيقية. رابعاً، البيانات الحقيقية: لا تكتب عنوانك أو تفاصيلك الصحية أو معلومات الآخرين الخاصة في دردشة لعب أدوار. وفي هاتف الطفل استخدم حدود المحتوى وتصنيف التطبيقات في Screen Time من Apple بدلاً من الوثوق بإعدادات التطبيق نفسه.',
          },
        ],
      },
      smartHome: {
        id: 'smart-home-agents',
        title: 'المنزل الذكي والوكلاء',
        content:
          '**على iPhone، يكون الذكاء الاصطناعي للمنزل الذكي والوكلاء في الغالب عملاء لبرمجيات تعمل على خادم منزلي، لأن iOS لا يُبقي نموذجاً أو وكيلاً يعمل في الخلفية.** الهاتف هو الميكروفون والشاشة وجهاز التحكم عن بُعد؛ والخادم المنزلي يؤدي العمل طويل الأمد. ولنظرة صريحة في مدى عملية الوكلاء المحليين المستقلين انظر [هل تعمل الوكلاء المحليون المستقلون فعلاً؟](/ar/power-local-llm/autonomous-local-agents-actually-work).',
        items: [
          '[Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review): مساعد صوتي داخل Home Assistant، محلي بالكامل مع Whisper وPiper وWyoming، مع وكلاء Ollama LLM وسحابة اختياريين. القيد: ليس تطبيقاً مستقلاً؛ ويحتاج المسار المحلي الكامل إلى Home Assistant OS.',
          '[Scrypted](/ar/power-local-llm/scrypted-review): منصة كاميرات وNVR مفتوحة المصدر تبثّ الكاميرات إلى HomeKit وGoogle Home وHome Assistant، مع ملخصات LLM محلية اختيارية عبر llama.cpp. القيد: تعمل على خادمك الخاص، وتصوير الآخرين بالكاميرات يرتّب التزامات قانونية في أماكن كثيرة.',
          '[Nekoni](/ar/power-local-llm/nekoni-review): وكيل شخصي مستضاف ذاتياً (Ollama ومستندات ومهارات مجدولة) على حاسوب تملكه، تتحدث معه من iPhone أو متصفح عبر رابط مشفّر مباشر. القيد: يحتاج إلى جهاز Mac أو Linux يعمل طوال الوقت.',
          '[Kai 9000](/ar/power-local-llm/kai-9000-review) و[LLM Hub](/ar/power-local-llm/llm-hub-review): مساعدان بذاكرة دائمة ووكيل يدعم MCP على التوالي. القيد: استخدام الأدوات والبحث على الويب يضيفان استدعاءات شبكة، فليسا من ميزات العمل دون اتصال.',
          '[Atomic Bot](/ar/power-local-llm/atomic-bot-review): يحزّم إطار الوكلاء المفتوح المصدر [مراجعة OpenClaw](/ar/power-local-llm/openclaw-review) لسطح المكتب والجوال ويمكنه العمل محلياً أو في السحابة. القيد: مصنَّف هادئاً في هذا الدليل (آخر تحديث 26 مايو 2026).',
        ],
      },
      remote: {
        id: 'remote-mode',
        title: 'وضع الاتصال عن بُعد: iPhone كعميل خفيف لخادمك الخاص',
        content:
          '**إن كان iPhone أصغر من أن يتسع للنموذج الذي تريده، فشغّل النموذج على Mac أو PC في المنزل واستخدم iPhone شاشةً.** هذا هو المسار المعتاد لنماذج 7B-70B من iPhone. تسرد صفحة التنزيل لدى Ollama أنظمة macOS وWindows وLinux ولا تذكر تطبيق iPhone، لذا يقيم الخادم في مكان آخر (يسجّل ملخص iPhone لدينا ذلك). ولجهة الخادم انظر [دليل نماذج LLM المحلية على شرائح Apple](/ar/local-llms/apple-silicon-local-llm-guide-2026) و[MLX مقابل Ollama مقابل llama.cpp على Mac](/ar/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) و[مقارنة أدوات التشغيل والخدمة](/ar/power-local-llm/local-llm-run-serve-compared).',
        columns: ['التطبيق', 'يتصل بـ', 'يشغّل نماذج على الهاتف أيضاً'],
        rows: [
          {
            'التطبيق': '[Reins](/ar/power-local-llm/reins-review)',
            'يتصل بـ': 'Ollama وLM Studio وواجهات متوافقة مع OpenAI',
            'يشغّل نماذج على الهاتف أيضاً': 'نعم، نماذج MLX',
          },
          {
            'التطبيق': '[Enchanted](/ar/power-local-llm/enchanted-review)',
            'يتصل بـ': 'Ollama فقط',
            'يشغّل نماذج على الهاتف أيضاً': 'لا',
          },
          {
            'التطبيق': '[OpenClient](/ar/power-local-llm/openclient-review)',
            'يتصل بـ': 'Ollama وLiteLLM وواجهات متوافقة مع OpenAI',
            'يشغّل نماذج على الهاتف أيضاً': 'لا',
          },
          {
            'التطبيق': '[Chapper](/ar/power-local-llm/chapper-review)',
            'يتصل بـ': 'LM Studio وOllama وخادم llama.cpp',
            'يشغّل نماذج على الهاتف أيضاً': 'نعم، إضافة بـ 4.99 دولار',
          },
          {
            'التطبيق': '[Tina](/ar/power-local-llm/tina-review)',
            'يتصل بـ': 'Ollama وllama.cpp وComfyUI',
            'يشغّل نماذج على الهاتف أيضاً': 'نعم',
          },
          {
            'التطبيق': '[LM Mini](/ar/power-local-llm/lm-mini-review)',
            'يتصل بـ': 'LM Studio وOllama وJan AI وoMLX',
            'يشغّل نماذج على الهاتف أيضاً': 'نعم',
          },
          {
            'التطبيق': '[Arbiter](/ar/power-local-llm/arbiter-local-ai-chat-review)',
            'يتصل بـ': 'LM Studio وOllama وArbiter for Mac',
            'يشغّل نماذج على الهاتف أيضاً': 'نعم',
          },
          {
            'التطبيق': '[LocalMind](/ar/power-local-llm/localmind-review)',
            'يتصل بـ': 'Ollama وLM Studio وOpenRouter',
            'يشغّل نماذج على الهاتف أيضاً': 'نعم',
          },
          {
            'التطبيق': '[Liquid Apollo](/ar/power-local-llm/liquid-apollo-review)',
            'يتصل بـ': 'LM Studio وOllama وOpenRouter',
            'يشغّل نماذج على الهاتف أيضاً': 'نعم، LFM2',
          },
          {
            'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
            'يتصل بـ': 'LM Studio على Mac (LM Link)',
            'يشغّل نماذج على الهاتف أيضاً': 'نعم',
          },
          {
            'التطبيق': '[MLXHub](/ar/power-local-llm/mlxhub-review)',
            'يتصل بـ': 'يخدم نموذجاً على شبكة Wi-Fi لديك (Plus)',
            'يشغّل نماذج على الهاتف أيضاً': 'نعم',
          },
          {
            'التطبيق': '[Nekoni](/ar/power-local-llm/nekoni-review)',
            'يتصل بـ': 'وكيل على حاسوبك الخاص',
            'يشغّل نماذج على الهاتف أيضاً': 'لا',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              'عند الابتعاد عن المنزل تحتاج إلى مسار آمن إلى الخادم. شبكة VPN خاصة شبكية مثل Tailscale خيار شائع، لأن Ollama لا يتطلب مصادقة افتراضياً ولا ينبغي كشفه للإنترنت العام عبر منفذ في الراوتر. افحص مراجعة كل عميل وإعداداته لمعرفة دعم HTTPS ومفاتيح API قبل أن تتصل.',
          },
          {
            type: 'tip',
            text:
              'يقول عدة عملاء أعلاه إنهم يستطيعون أيضاً تحميل نماذج على الهاتف، مما يجعلهم تطبيقاً واحداً جيداً: نموذج صغير دون اتصال ونموذج كبير في المنزل. اقرأ [الذكاء الاصطناعي المحلي خلف جدار حماية ودون اتصال](/ar/power-local-llm/local-ai-behind-firewall-offline-2026) لإعدادات جدران الحماية والعمل دون اتصال.',
          },
        ],
      },
      developers: {
        id: 'developer-paths',
        title:
          'مسارات المطوّرين: Core ML وCore AI وMLX Swift وllama.cpp وMLC وExecuTorch وFoundation Models',
        content:
          '**يختار المطوّرون الذين يبنون ميزات ذكاء اصطناعي لـ iPhone بين نموذج Apple الخاص، وبيئات تشغيل Apple لنموذجك أنت، والمحركات متعددة المنصات.** يحدد الاختيار الهواتف واللغات وقواعد المتجر المنطبقة. هذا الفصل للتوجيه فقط؛ اقرأ وثائق كل مشروع قبل أن تبني.',
        items: [
          '**إطار Foundation Models:** واجهة Swift الأصلية من Apple لنموذج الجهاز، مع الصور وأدوات Vision وDynamic Profiles ومزوّدي السحابة عبر بروتوكول Language Model (Apple، دليل WWDC26 لنظام iOS). يتطلب عتاد Apple Intelligence. الوثائق: [Foundation Models](https://developer.apple.com/documentation/FoundationModels).',
          '**Core ML:** إطار Apple لتشغيل النماذج المحوَّلة على CPU وGPU وNeural Engine؛ وهو المسار القديم للرؤية والصوت والنماذج الصغيرة. يشحن [AI CutoutWerk](/ar/power-local-llm/ai-cutoutwerk-review) نموذج تجزئة Core ML. الوثائق: [Core ML](https://developer.apple.com/documentation/coreml).',
          '**Core AI:** إطار جديد قدّمته Apple مع iOS 27 لجلب نماذجك الخاصة إلى الجهاز، باستخدام الذاكرة الموحدة وNeural Engine، مع تجميع مسبق. جديد جداً لمعظم التطبيقات في هذا الدليل؛ انظر [دليل WWDC26 لنظام iOS](https://developer.apple.com/wwdc26/guides/ios/).',
          '**MLX Swift:** إطار المصفوفات MLX من Apple للغة Swift، وهو خلف [Locally AI](/ar/power-local-llm/locally-ai-review) و[fullmoon](/ar/power-local-llm/fullmoon-review) و[MLXHub](/ar/power-local-llm/mlxhub-review). [mlx-swift](https://github.com/ml-explore/mlx-swift). وللجانب البرمجي بلغة Python انظر [شرح MLX-LM](/ar/power-local-llm/mlx-lm-explained).',
          '**llama.cpp:** محرك C/C++ مع Metal يشغّل ملفات GGUF، وهو خلف [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) و[Pocket AI](/ar/power-local-llm/pocket-ai-review). [llama.cpp](https://github.com/ggml-org/llama.cpp).',
          '**MLC LLM:** بيئة تشغيل قائمة على المترجم مع وثائق نشر على iOS والتطبيق المرجعي [MLC Chat](/ar/power-local-llm/mlc-chat-review). انظر [MLC LLM](/ar/power-local-llm/mlc-llm-explained) و[وثائق MLC لنظام iOS](https://llm.mlc.ai/docs/deploy/ios.html).',
          '**ExecuTorch:** بيئة تشغيل PyTorch على الجهاز، تُستخدم عبر React Native ExecuTorch في [Private Mind](/ar/power-local-llm/private-mind-review) ويدعمها [Noema](/ar/power-local-llm/noema-review). [ExecuTorch](https://github.com/pytorch/executorch).',
          '**LiteRT-LM:** بيئة تشغيل Google خلف [Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) ([LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)).',
          '**حزم SDK:** [RunAnywhere](/ar/power-local-llm/runanywhere-review) (LLM وتحويل الكلام إلى نص وتحويل النص إلى كلام وكشف النشاط الصوتي؛ رخصة مخصصة بشروط تجارية)، و[Llamatik](/ar/power-local-llm/llamatik-review) (Kotlin Multiplatform، MIT)، و[SwiftLM](/ar/power-local-llm/swiftlm-review) (خادم Swift MLX لأجهزة Mac بشرائح Apple مع تطبيق SwiftBuddy المرافق لـ iOS).',
          '**نسخ TestFlight التجريبية:** وسيلة مجانية لتوزيع النسخ المبكرة على المختبرين؛ تنتهي صلاحية النسخ، فخطّط لذلك. وتظل قواعد مراجعة التطبيقات لدى Apple منطبقة على نسخة الإصدار.',
        ],
      },
      privacy: {
        id: 'privacy-telemetry',
        title: 'واقع الخصوصية والقياس عن بُعد',
        content:
          '**"يعمل على جهازك" و"لا يرسل شيئاً" ادعاءان مختلفان، والثاني وحده ضمان للخصوصية.** تملأ الجهة المطوّرة ملصقات خصوصية App Store من Apple، فهي تصف ما تقول الجهة المطوّرة إن التطبيق يفعله. وقد يوجد نموذج على الجهاز داخل تطبيق يرسل تقارير الأعطال أو أحداث الاستخدام أو عمليات بحث ويب اختيارية أو تنزيلات نماذج. كل بيانات الخصوصية على مستوى التطبيقات هنا مأخوذة من سياسة خصوصية كل تطبيق أو ملصقه في App Store أو صفحة جهته المطوّرة كما لخّصتها المراجعة المرتبطة، ولم يُتحقق منها بتحليل الشبكة. وللاطلاع على قائمة تحقق أعمق انظر [قائمة التحقق من أمان وخصوصية نماذج LLM المحلية](/ar/local-llms/local-llm-security-privacy-checklist).',
        items: [
          '**ما قد تعنيه عبارة "بلا قياس عن بُعد":** لا حزمة تحليلات في التطبيق. ولا تشمل تنزيل النموذج (يرى المضيف طلبك)، ولا App Store، ولا البحث على الويب الاختياري، ولا الخوادم البعيدة التي تتصل بها، ولا النسخ الاحتياطية التي تتضمن بيانات التطبيق.',
          '**الملصقات في مراجعاتنا:** يحمل [Oscilla](/ar/power-local-llm/oscilla-review) ملصق Apple "Data Not Collected"؛ ويُظهر [Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) بعض تشخيصات الجهاز على ملصقه؛ ويرسل [MemoryAI](/ar/power-local-llm/memoryai-review) و[Llamatik](/ar/power-local-llm/llamatik-review) أحداث الاستخدام أو التحليلات وتقارير الأعطال دون محتوى الدردشة، بحسب سياسة كل منهما.',
          '**الميزات الاختيارية التي تكسر وصف "دون اتصال":** البحث على الويب في [Compass - Local AI](/ar/power-local-llm/compass-local-ai-review) (DuckDuckGo أو Brave)، ومفتاح Web في [Private Mind](/ar/power-local-llm/private-mind-review)، وأدوات MCP في [Secret AI](/ar/power-local-llm/secret-ai-review)، ووضع OpenRouter في [Liquid Apollo](/ar/power-local-llm/liquid-apollo-review).',
          '**سحابي افتراضياً:** يرسل [Kai 9000](/ar/power-local-llm/kai-9000-review) الرسائل إلى خدمة سحابية افتراضياً، بحسب مراجعته، ولا يعمل محلياً إلا بعد تنزيل نموذج على الجهاز؛ و[Swerve](/ar/power-local-llm/swerve-ai-review) موثَّق بأنه خدمة عبر الإنترنت، ويبدو أن [HiWaifu](/ar/power-local-llm/hiwaifu-review) كذلك (لا تذكر قائمته أين يعمل النموذج)؛ و[AquaVoice](/ar/power-local-llm/aquavoice-review) إملاء سحابي.',
          '**انجراف السياسة والإصدار:** لدى [LM Mini](/ar/power-local-llm/lm-mini-review) بحسب سياسة خصوصيته نسخة مؤرخة في أغسطس 2025 تصف اتصاله بـ LM Studio فقط، ولدى [Secret AI](/ar/power-local-llm/secret-ai-review) سياسة حُدّثت آخر مرة في مايو 2025، قبل أن يضيف الأدوات. قارن التاريخ بإصدار التطبيق.',
          '**تحقق بنفسك في ثلاث خطوات:** (1) نزّل النموذج عبر Wi-Fi، ثم فعّل وضع الطيران واختبر التطبيق. (2) استخدم الهاتف بصورة طبيعية لمدة أسبوع، ثم افتح الإعدادات > الخصوصية والأمان > تقرير خصوصية التطبيقات (App Privacy Report)، الذي تقول Apple إنه يُظهر كيف تستخدم التطبيقات الأذونات ونشاطها على الشبكة. (3) اقرأ ملصق الخصوصية والسياسة بحثاً عن التحليلات، وفضّل تطبيقاً مفتوح المصدر إن أردت فحص الشيفرة.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'تذكر مراجعات PromptQuorum ما تقوله مصادر كل تطبيق وهل اختبرناه؛ وحيث تقول المراجعة "لم يُختبر عملياً"، فبيانات الخصوصية هي بيانات المطوّر لا بياناتنا. ولم يجرِ هذا الدليل أي التقاط للشبكة على أي تطبيق.',
          },
        ],
      },
      batteryThermal: {
        id: 'battery-thermal-memory',
        title: 'حدود البطارية والحرارة والذاكرة',
        content:
          '**يُبقي توليد النص الشريحة مشغولة، فتوقّع حرارة واستنزافاً ملحوظاً للبطارية أثناء تشغيل النموذج؛ أما الاستخدام العرضي فكلفته قليلة.** لم تقِس PromptQuorum استهلاك الطاقة أو البطارية على أي iPhone، ولم نجد رقماً منشوراً يمكننا الاستشهاد به.',
        items: [
          '**الحرارة:** قد يدفع التوليد المتواصل نظام iOS إلى خفض سرعات الساعة، فينخفض عدد الرموز في الثانية. يتفاوت التوقيت بحسب الهاتف والغلاف والشحن ودرجة حرارة الغرفة، ولم نقسه.',
          '**الإرشاد 2.4.2:** تقول Apple للمطوّرين إن التطبيقات ينبغي ألا تستنزف البطارية بسرعة أو تولّد حرارة مفرطة، لذا تحدّ التطبيقات المنضبطة من الطول أو توقف الجلسات الطويلة مؤقتاً.',
          '**الذاكرة:** يبقى النموذج في RAM ما دام محمَّلاً. إن احتاج iOS إلى الذاكرة لتطبيق آخر فقد يغلق تطبيق الدردشة وقد تُفقد حالة المحادثة؛ أغلق التطبيقات الثقيلة الأخرى قبل أن تحمّل نموذجاً.',
          '**الشحن أثناء التوليد** يضيف حرارة؛ أوقف التوليد مؤقتاً إن بدا الهاتف ساخناً، وتجنب أشعة الشمس المباشرة أو السيارة الساخنة.',
          '**التخزين:** نموذج 3-4B واحد نحو 2.5-3.7 غيغابايت، لذا فثلاثة تطبيقات بثلاثة نماذج لكل منها تستخدم نحو 10 غيغابايت. احتفظ بتطبيق واحد ونموذج أو اثنين.',
          '**وضع الطاقة المنخفضة** قد يبطئ التوليد لأن iOS يخفض الأداء لتوفير البطارية؛ أطفئه في الجلسات الطويلة.',
        ],
      },
      partly: {
        id: 'works-partly',
        title: 'ما يعمل جزئياً فقط',
        content:
          '**"جزئياً" تعني أن الميزة موجودة على iPhone لكن بقيد ينبغي أن تعرفه قبل أن تبني عليها عادة.**',
        items: [
          '**صوت بلا استخدام اليدين مع Siri:** يستطيع Shortcuts استدعاء تطبيق، لكن Siri يبقى Siri؛ ولا يمكنك جعل نموذج محلي مساعد النظام. وSiri AI من Apple نسخة تجريبية منفصلة من iOS 27 غير متاحة مبدئياً في الاتحاد الأوروبي.',
          '**توليد الصور:** ممكن بنماذج انتشار صغيرة، لكنه بطيء ويستهلك التخزين كثيراً ويسخّن الهاتف؛ ويقدّم [Draw Things](/ar/power-local-llm/draw-things-review) أيضاً وضعاً سحابياً اختيارياً.',
          '**البحث في الصور:** خطوة الذكاء الاصطناعي اختيارية على الهاتف ([Ente Photos](/ar/power-local-llm/ente-photos-review)) أو تعمل على خادم تستضيفه ([Immich](/ar/power-local-llm/immich-review)).',
          '**الملاحظات والإشارات المرجعية:** تطبيق iPhone عميل؛ ويجري عمل النموذج على خادم أو مزوّد تختاره.',
          '**الوكلاء:** تعمل المهام القصيرة في الواجهة؛ أما الوكلاء طويلو الأمد أو المجدولون فيحتاجون إلى خادم منزلي ([Nekoni](/ar/power-local-llm/nekoni-review)).',
          '**أسئلة الصحة:** ممكنة بنموذج Apple على الجهاز ([Pajdo](/ar/power-local-llm/pajdo-review))، لكنها ليست بديلاً عن النصيحة الطبية.',
          '**المستندات الطويلة:** للنماذج الصغيرة نوافذ سياق صغيرة، لذا تحتاج ملفات PDF الكبيرة إلى تجزئة أو إلى خادم.',
        ],
      },
      notPossible: {
        id: 'not-possible',
        title: 'غير ممكن أو ليس بعد على iPhone',
        content:
          '**هذه هي الأمنيات التي يحملها الناس أكثر إلى الذكاء الاصطناعي المحلي على iPhone ولا يحققها اليوم أي تطبيق iPhone مُراجَع.** بعضها حدود صلبة للعتاد أو لقواعد App Store؛ وبعضها ثغرات قد تُسدّ مع إطلاق Apple ومطوّري التطبيقات أطراً جديدة مثل Core AI.',
        columns: ['الأمنية', 'الحالة', 'السبب', 'البديل'],
        rows: [
          {
            'الأمنية': 'نموذج 30B-70B على الهاتف',
            'الحالة': 'غير ممكن',
            'السبب': 'يحتاج إلى RAM أكثر بكثير مما في iPhone',
            'البديل': 'وضع الاتصال عن بُعد بخادم منزلي',
          },
          {
            'الأمنية': 'استدلال وبرمجة بمستوى السحابة',
            'الحالة': 'ليس بعد',
            'السبب': 'تفشل النماذج الصغيرة في المهام متعددة الخطوات',
            'البديل': 'تطبيق سحابي للأسئلة الصعبة',
          },
          {
            'الأمنية': 'تشغيل Ollama أو Docker على الهاتف',
            'الحالة': 'غير ممكن',
            'السبب': 'لا تطبيق Ollama أو Docker لـ iPhone؛ قيود صندوق العزل',
            'البديل': 'شغّلهما على Mac أو PC',
          },
          {
            'الأمنية': 'استبدال Siri بنموذجك',
            'الحالة': 'غير ممكن',
            'السبب': 'يتحكم النظام في Siri',
            'البديل': 'اختصارات تستدعي تطبيقاً',
          },
          {
            'الأمنية': 'وكيل دائم العمل في الخلفية',
            'الحالة': 'غير ممكن',
            'السبب': 'الخدمات في الخلفية محدودة (2.5.4)',
            'البديل': 'وكيل على خادم منزلي',
          },
          {
            'الأمنية': 'ضبط نموذج دقيقاً على الهاتف',
            'الحالة': 'غير واقعي',
            'السبب': 'الذاكرة والحرارة وغياب أدوات التطبيقات',
            'البديل': 'التدريب على Mac أو GPU',
          },
          {
            'الأمنية': 'مزامنة الدردشات مع Mac وiPad',
            'الحالة': 'لا في الغالب',
            'السبب': 'السجل لكل جهاز في معظم التطبيقات',
            'البديل': 'واجهة ويب على الخادم، مثل Open WebUI',
          },
          {
            'الأمنية': 'AnythingLLM Mobile على iPhone',
            'الحالة': 'ليس بعد',
            'السبب': 'تطبيق iOS لم يصدر بحسب المراجعة',
            'البديل': 'متصفح إلى خادمك',
          },
          {
            'الأمنية': 'Apple Intelligence على iPhone 14',
            'الحالة': 'غير ممكن',
            'السبب': 'ليس في قائمة أجهزة Apple',
            'البديل': 'تطبيقات نماذج من جهات خارجية',
          },
          {
            'الأمنية': 'توليد موسيقى بغناء',
            'الحالة': 'ليس بعد',
            'السبب': 'ينتج Murmur موسيقى آلية فقط',
            'البديل': 'أدوات سطح المكتب',
          },
          {
            'الأمنية': 'دليل على أن التطبيق خاص',
            'الحالة': 'ليس من الملصق',
            'السبب': 'الملصقات يعلنها المطوّر',
            'البديل': 'وضع الطيران وتقرير خصوصية التطبيقات',
          },
        ],
      },
      decision: {
        id: 'decision-path',
        title: 'مسار القرار: لديّ هذا الـ iPhone وأريد هذا',
        content:
          '**ابحث عن صفك بحسب فئة الهاتف والهدف، ثم افتح الفصل المرتبط.** الاختيارات نقاط انطلاق من مراجعاتنا لا ترتيب؛ ولا يُذكر تطبيق هادئ في فصل الصيانة إلا حين لا يوجد خيار أفضل.',
        columns: ['إن كان لديك', 'وتريد', 'ابدأ هنا'],
        rows: [
          {
            'إن كان لديك': 'iPhone بذاكرة 4 GB (12 و13 وSE)',
            'وتريد': 'دردشة عامة',
            'ابدأ هنا': 'Reins أو Enchanted مع خادم منزلي',
          },
          {
            'إن كان لديك': 'iPhone بذاكرة 6 GB (14 و15)',
            'وتريد': 'دردشة مجانية دون اتصال',
            'ابدأ هنا': 'PocketPal AI بنموذج 1-2B',
          },
          {
            'إن كان لديك': 'iPhone بذاكرة 8 GB (16 و17)',
            'وتريد': 'دردشة مجانية دون اتصال',
            'ابدأ هنا': 'PocketPal AI أو Locally AI',
          },
          {
            'إن كان لديك': 'iPhone بذاكرة 8 GB',
            'وتريد': 'Siri وShortcuts',
            'ابدأ هنا': 'Private LLM أو Locally AI',
          },
          {
            'إن كان لديك': 'iPhone بذاكرة 12 GB (17 Pro)',
            'وتريد': 'أكبر نموذج على الهاتف',
            'ابدأ هنا': 'Noema أو Gallery مع Gemma 4',
          },
          {
            'إن كان لديك': 'هاتف يدعم Apple Intelligence',
            'وتريد': 'بلا تنزيل نموذج',
            'ابدأ هنا': 'Compass أو Locally AI (نموذج Apple)',
          },
          {
            'إن كان لديك': 'أي iPhone',
            'وتريد': 'تفريغ نصي للاجتماعات',
            'ابدأ هنا': 'Whisper Notes أو Lyonesse',
          },
          {
            'إن كان لديك': 'أي iPhone',
            'وتريد': 'الدردشة مع بضعة ملفات PDF',
            'ابدأ هنا': 'Private Mind أو MemoryAI',
          },
          {
            'إن كان لديك': 'أي iPhone',
            'وتريد': 'ترجمة',
            'ابدأ هنا': 'On-Device AI Translator',
          },
          {
            'إن كان لديك': 'iPhone بذاكرة 8 GB فأكثر',
            'وتريد': 'صور من نص',
            'ابدأ هنا': 'Draw Things',
          },
          {
            'إن كان لديك': 'أي iPhone',
            'وتريد': 'بحث في الصور، خادم خاص',
            'ابدأ هنا': 'Immich',
          },
          {
            'إن كان لديك': 'أي iPhone، وPC منزلي',
            'وتريد': 'نماذج 7B-70B',
            'ابدأ هنا': 'Reins أو OpenClient أو LM Mini',
          },
          {
            'إن كان لديك': 'أي iPhone',
            'وتريد': 'صوت للمنزل الذكي',
            'ابدأ هنا': 'Home Assistant Assist',
          },
          {
            'إن كان لديك': 'مراهق يستخدم iPhone',
            'وتريد': 'دردشة آمنة',
            'ابدأ هنا': 'حدود Screen Time، ثم اقرأ ملاحظات الأمان',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**اختيار النموذج بحسب حجم الملف بدلاً من فئة RAM.** قد يغلق iOS ملفاً نُزّل بنجاح؛ فطابق الحجم مع جدول الفئات واختبر بأداة الاختبار في التطبيق.',
          '**توقّع جودة السحابة.** استخدم نموذجاً صغيراً للصياغة والتلخيص والترجمة والأسئلة السريعة، ونموذجاً سحابياً أو على خادم منزلي للاستدلال الصعب.',
          '**معاملة "Apple Intelligence" على أنه "دون اتصال".** قد يستخدم Apple Intelligence خدمة Private Cloud Compute؛ فتحقق مما يعالج الطلب.',
          '**الوثوق بملصق الخصوصية دون اختبار.** أجرِ فحصي وضع الطيران وتقرير خصوصية التطبيقات من فصل الخصوصية.',
          '**تثبيت كل التطبيقات.** يحتفظ كل تطبيق بملفات نماذج خاصة به بحجم عدة غيغابايت؛ اختر تطبيقاً واحداً لكل مهمة.',
          '**شراء تطبيق توقف تحديثه.** افحص سجل الإصدارات، خصوصاً للتطبيقات في فصل الصيانة.',
          '**كشف الخادم المنزلي للإنترنت.** استخدم شبكة VPN خاصة؛ فـ Ollama لا يتطلب مصادقة افتراضياً.',
          '**ترك تطبيقات لعب الأدوار دون مراجعة على هاتف مشترك أو هاتف طفل.** اقرأ التصنيف العمري وإعدادات المحتوى للبالغين أولاً.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'أجهزة Apple Intelligence ولغاته وSiri AI وPrivate Cloud Compute: [Apple Intelligence](https://www.apple.com/apple-intelligence/) (اطُّلع عليه في 13 نوفمبر 2026).',
          'إرشادات مراجعة التطبيقات 2.4.2 و2.5.1 و2.5.2 و2.5.4 و5.1.1 و5.1.2: [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) (اطُّلع عليه في 13 نوفمبر 2026).',
          'مسار تقرير خصوصية التطبيقات ومحتواه: [Apple Support](https://support.apple.com/en-us/102188).',
          'المحركات: [MLX Swift](https://github.com/ml-explore/mlx-swift) و[llama.cpp](https://github.com/ggml-org/llama.cpp) و[ExecuTorch](https://github.com/pytorch/executorch) و[وثائق MLC لنظام iOS](https://llm.mlc.ai/docs/deploy/ios.html) و[Core ML](https://developer.apple.com/documentation/coreml) و[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM).',
          'أرقام RAM في iPhone والسرعات الإرشادية معاد استخدامها من [أفضل تطبيقات الذكاء الاصطناعي المحلي لنظام iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026)؛ ولا تنشر Apple ذاكرة RAM في iPhone.',
          'تأتي معلومات كل تطبيق (السعر والمنصة والإصدار وبيانات الجهات المطوّرة) من مراجعات PromptQuorum المرتبطة وبطاقات الدليل؛ وتأتي تواريخ آخر تحديث للتطبيقات المصنَّفة هادئة من البطاقات.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يستطيع iPhone تشغيل الذكاء الاصطناعي دون اتصال كلياً؟',
            a:
              'نعم، بحسب قوائمها في المتجر ومراجعاتها. بعد تنزيل نموذج لمرة واحدة عبر Wi-Fi، تجيب تطبيقات مثل PocketPal AI وPrivate LLM وLocally AI دون اتصال. ويشغّل Apple Intelligence نموذجاً على الجهاز أيضاً، لكنه قد يستخدم Private Cloud Compute للطلبات الأكبر، فلا يُضمن عمله دون اتصال. اختبر أي تطبيق في وضع الطيران.',
          },
          {
            q: 'أي iPhone أحتاج للذكاء الاصطناعي المحلي؟',
            a:
              'iPhone بذاكرة RAM بسعة 6 GB أو أكثر للنماذج الصغيرة 1-2B و8 GB أو أكثر لنماذج 3-4B. لا تنشر Apple ذاكرة RAM، فاستخدم الفئات المتداولة في هذا الدليل. أما Apple Intelligence فتحتاج فيه إلى iPhone 15 Pro أو أحدث من قائمة أجهزة Apple.',
          },
          {
            q: 'هل الذكاء الاصطناعي المحلي على iPhone خاص فعلاً؟',
            a:
              'يمكن أن تبقى الدردشة على الجهاز، لكن الخصوصية تتوقف على التطبيق. الملصقات يعلنها المطوّر، وترسل عدة تطبيقات مُراجَعة تقارير الأعطال أو أحداث الاستخدام أو طلبات ويب اختيارية. تحقق بوضع الطيران وبالإعدادات > الخصوصية والأمان > تقرير خصوصية التطبيقات (App Privacy Report).',
          },
          {
            q: 'هل أستطيع تشغيل Ollama على iPhone؟',
            a:
              'لا. تقدّم Ollama تنزيلات لأنظمة macOS وWindows وLinux، ولا يوجد خادم Ollama أو Docker لـ iPhone. شغّل Ollama على حاسوب واتصل من عميل iPhone مثل Reins أو Enchanted أو OpenClient.',
          },
          {
            q: 'ما أكبر نموذج يستطيع iPhone تشغيله؟',
            a:
              'نحو 3-4B معامل بدقة 4 بت على هواتف 8 GB، ولا تتسع نماذج 7-8B منخفضة البتات إلا على هواتف 12 GB وببطء. وتناسب هواتف 6 GB نماذج 1-2B أكثر. وللنماذج الأكبر استخدم وضع الاتصال عن بُعد مع خادم منزلي.',
          },
          {
            q: 'هل يستنزف الذكاء الاصطناعي المحلي البطارية؟',
            a:
              'أثناء التوليد، نعم: يُبقي التوليد المتواصل المعالج مشغولاً ويستنزف البطارية أسرع بكثير من الاستخدام الخامل، وقد يسخن الهاتف. لم تقِس PromptQuorum الاستنزاف الدقيق. الأسئلة العرضية كلفتها قليلة، والنموذج المحمَّل الخامل يستهلك طاقة قليلة.',
          },
          {
            q: 'ما أفضل تطبيق ذكاء اصطناعي محلي مجاني لـ iPhone؟',
            a:
              'PocketPal AI هو الخيار المجاني المفتوح المصدر الافتراضي في ملخصنا، مع Locally AI وGoogle AI Edge Gallery بديلين مجانيين. يتوقف التطبيق المناسب على مهمتك؛ استخدم مسار القرار في هذا الدليل.',
          },
          {
            q: 'كيف يختلف Apple Intelligence عن هذه التطبيقات؟',
            a:
              'Apple Intelligence هو نموذج Apple المدمج لميزات النظام وللتطبيقات التي تستخدم إطار Foundation Models؛ ولا يمكنك استبدال نموذجه. أما التطبيقات في هذا الدليل فتتيح لك اختيار النماذج وتنزيلها، وبعضها، مثل Locally AI، يستطيع أيضاً أن يكون واجهة لنموذج Apple.',
          },
          {
            q: 'هل أستطيع الدردشة مع ملفات PDF دون اتصال على iPhone؟',
            a:
              'نعم لعدد قليل من الملفات، بحسب قوائمها في المتجر ومراجعاتها، مع تطبيقات مثل Private Mind وMemoryAI وNoema وLocalMindAI. للنماذج الصغيرة نوافذ سياق قصيرة، لذا قد تُلخَّص المستندات الطويلة تلخيصاً ناقصاً. وللمكتبات الكبيرة استخدم خادماً منزلياً.',
          },
          {
            q: 'هل أستطيع استخدام خادمي المنزلي من خارج البيت؟',
            a:
              'نعم، عبر شبكة VPN خاصة مثل Tailscale أو نفق آمن آخر، مع تطبيق عميل يدعم خادمك. لا تفتح Ollama للإنترنت العام؛ فهو لا يتطلب مصادقة افتراضياً.',
          },
          {
            q: 'هل يستطيع iPhone توليد الصور دون اتصال؟',
            a:
              'نعم، بحسب قوائمها في المتجر ومراجعاتها، مع تطبيقات مثل Draw Things وGenva وHaplo AI، بعد تنزيل نماذج بحجم عدة غيغابايت. التوليد أبطأ منه على GPU سطح المكتب ويسخّن الهاتف؛ ويقدّم Draw Things أيضاً وضعاً سحابياً اختيارياً.',
          },
          {
            q: 'هل تطبيقات لعب الأدوار والرفقة آمنة للمراهقين؟',
            a:
              'ليس افتراضياً. يحمل عدد منها تصنيف 18+ أو أوضاعاً للبالغين فقط، وبعضها خدمات سحابية تخزّن المحادثات، ولا يملك النموذج على الجهاز مرشّحاً من جهة الخادم. استخدم حدود Screen Time وتصنيف التطبيقات من Apple واقرأ ملاحظات الأمان في هذا الدليل.',
          },
          {
            q: 'هل يعمل الذكاء الاصطناعي المحلي على iPad؟',
            a:
              'في الغالب نعم. تذكر تطبيقات كثيرة في هذا الدليل دعم iPad، وتنطبق قاعدة RAM نفسها. انظر النصائح الخاصة بـ iPad في [كيفية تشغيل الذكاء الاصطناعي على جهاز لوحي](/ar/power-local-llm/run-ai-on-tablet-ipad-android).',
          },
          {
            q: 'كيف يقارن iPhone بـ Android للذكاء الاصطناعي المحلي؟',
            a:
              'iPhone أبسط في البدء وأكثر تقييداً؛ أما Android فيسمح بتطبيقات الطرفية وفيه خيارات مفتوحة المصدر أكثر لكنه يتفاوت بحسب الهاتف. قارن في [دليل الذكاء الاصطناعي المحلي على Android](/ar/power-local-llm/local-ai-on-android-guide) و[الذكاء الاصطناعي على الجهاز: Galaxy مقابل iPhone](/ar/local-llms/galaxy-vs-iphone-on-device-ai-2026).',
          },
          {
            q: 'هل ستستخدم التطبيقات نموذج Apple على هواتف iPhone الأقدم؟',
            a:
              'لا. يقتصر Apple Intelligence على الأجهزة المذكورة في قائمة Apple، بدءاً من iPhone 15 Pro. وعلى هواتف iPhone الأقدم استخدم التطبيقات التي تجلب نماذجها الخاصة ضمن حدود RAM.',
          },
        ],
      },
      related: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل تطبيقات الذكاء الاصطناعي المحلي لنظام iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026): اختيارات مرتّبة وسرعات إرشادية ودليل RAM لـ iPhone.',
          '[دليل الذكاء الاصطناعي المحلي على Android](/ar/power-local-llm/local-ai-on-android-guide): الدليل المحوري الشقيق لمنصة Android.',
          '[أفضل تطبيقات الذكاء الاصطناعي المحلي لنظام Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026): تطبيقات Android مرتّبة.',
          '[الذكاء الاصطناعي على الجهاز: Galaxy مقابل iPhone](/ar/local-llms/galaxy-vs-iphone-on-device-ai-2026): مقارنة الذكاء الاصطناعي على الجهاز في iPhone وGalaxy.',
          '[كيفية تشغيل الذكاء الاصطناعي على جهاز لوحي](/ar/power-local-llm/run-ai-on-tablet-ipad-android): أجهزة iPad واللوحية العاملة بـ Android.',
          '[أفضل نماذج LLM للهواتف: Phi-4 Mini مقابل Gemma مقابل SmolLM](/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm): أي النماذج الصغيرة تنزّل.',
          '[نماذج LLM المحلية على الجوال](/ar/local-llms/mobile-local-llms): أساسيات نماذج LLM المحلية على الجوال.',
          '[الذكاء الاصطناعي على جهاز Apple مقابل نماذج LLM المحلية](/ar/local-llms/apple-on-device-ai-vs-local-llms): الذكاء الاصطناعي على جهاز Apple مقابل النماذج المحلية المفتوحة.',
          '[بناء مساعد صوتي محلي على هاتفك](/ar/power-local-llm/voice-assistant-local-mobile-offline): الصوت دون اتصال على الهاتف.',
          '[مقارنة مساعدي الدردشة](/ar/power-local-llm/local-llm-chat-assistants-compared) و[مقارنة تطبيقات الصوت](/ar/power-local-llm/local-llm-voice-audio-compared) و[مقارنة تطبيقات الصور والفيديو](/ar/power-local-llm/local-llm-images-video-compared) و[مقارنة تطبيقات المعرفة والاسترجاع](/ar/power-local-llm/local-llm-knowledge-retrieval-compared): مقارنات الفئات.',
          '[دليل تطبيقات الذكاء الاصطناعي المحلي](/ar/directory): كل تطبيق ذكاء اصطناعي محلي في الدليل.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    last_full_refresh: '2026-11-13',
    next_refresh_due: '2027-05-13',
    theme: 'Mobile & Edge LLMs',
    designSkin: 'hub',
    title: '2026년 iPhone 로컬 AI: 가능한 것, 불가능한 것, 그리고 이 가이드가 다루는 iPhone 앱',
    seoTitle: '2026 iPhone 로컬 AI: 되는 것과 안 되는 것',
    intro:
      '최근 iPhone은 모델을 한 번 내려받으면 오프라인에서 쓸 만한 언어 모델을 실행할 수 있지만, 작은 모델에 한합니다. RAM 6-8 GB 기준 약 1-4B(10억-40억) 파라미터입니다. 이 가이드는 iPhone 로컬 AI로 할 수 있는 것, 일부만 가능한 것, 전혀 불가능한 것을 정리하고, Apple Intelligence, Foundation Models 프레임워크, App Store 규정을 설명하며, PromptQuorum 디렉토리에서 다루는 iPhone 앱을 용도별로 연결합니다. 앱 관련 사실은 PromptQuorum 리뷰에서 가져왔으며, 리뷰가 직접 테스트했다고 밝힌 경우가 아니면 공개 자료에 근거합니다. 이 가이드는 어떤 앱도 다시 테스트하지 않았습니다.',
    metaDescription:
      '2026년 iPhone 로컬 AI로 되는 것과 안 되는 것: 칩·RAM 한계, Apple Intelligence, App Store 규정, 용도별 iPhone 앱 정리.',
    heroImage: '/images/local-ai-on-iphone-guide-hero-ko.webp',
    twitterDescription:
      '2026년 iPhone 로컬 AI: 기능 지도, RAM 등급, Apple Intelligence, App Store 제한, 불가능 목록, 용도별 iPhone 앱을 한눈에 정리했습니다.',
    current_hardware_mentioned: [
      'iPhone 18 Pro (A20 Pro, RAM은 Apple이 공개하지 않음)',
      'iPhone 17 Pro (A19 Pro, RAM 12 GB로 알려짐)',
      'iPhone 16 Pro (A18 Pro, RAM 8 GB로 알려짐)',
      'iPhone 15 Pro (A17 Pro, RAM 8 GB로 알려짐)',
      'iPhone 14 Pro (A16, RAM 6 GB로 알려짐)',
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
      '온디바이스 AI로 무엇을 할 수 있고 무엇을 할 수 없는지, 용도별로 어떤 앱을 설치해야 하는지 알고 싶은 iPhone·iPad 사용자, 프라이버시를 중시하는 사용자, 여행자, 개발자.',
    readTime: '45분 읽기',
    educationalLevel: 'Beginner',
    primaryTerm: 'iPhone 로컬 AI',
    targetKeywords: [
      '아이폰 로컬 ai',
      '아이폰 오프라인 ai 실행',
      '아이폰 온디바이스 ai',
      'apple intelligence foundation models 프레임워크',
      '아이폰 로컬 llm 앱',
      '아이폰 ram llm',
      '아이폰 ollama',
      '아이폰 오프라인 ai',
      '아이폰 로컬 ai로 할 수 있는 것',
    ],
    leadAnswerBlock:
      '**최근 iPhone은 한 번 내려받은 뒤 작은 언어 모델(RAM 6-8 GB 기준 약 1-4B 파라미터)을 오프라인에서 실행할 수 있으며, 채팅, 요약, 번역, 받아쓰기, 문서 Q&A, 간단한 이미지 작업을 처리합니다. 30B 이상 모델을 실행하거나, Siri를 대체하거나, 백그라운드 에이전트를 돌릴 수는 없습니다.** Apple Intelligence는 iPhone 15 Pro 이상에 내장 모델을 제공하며, iPhone에는 Ollama나 Docker 서버가 없습니다.',
    quickAnswerTop: {
      ko: {
        question: 'iPhone에서 로컬 AI로 무엇을 할 수 있습니까?',
        answer:
          '최근 iPhone은 1-4B 파라미터 모델을 오프라인으로 실행해 채팅, 요약, 번역, 받아쓰기, 문서 Q&A, 간단한 이미지 작업을 처리할 수 있습니다. 30B 이상 모델을 실행하거나, Siri를 대체하거나, 에이전트를 백그라운드에서 계속 돌릴 수는 없습니다. Apple Intelligence는 iPhone 15 Pro 이상에 내장 모델을 제공합니다.',
        bullets: [
          'RAM 6 GB: 1-2B 모델, 8 GB: 3-4B, 12 GB: 4B 여유 있게',
          'Apple Intelligence는 iPhone 15 Pro 이상 필요',
          '휴대폰에는 Ollama, Docker, Linux 서버가 없음',
          '7B-70B 모델은 원격 모드로 집 서버 사용',
          '에어플레인 모드와 앱 개인정보 보호 리포트로 프라이버시 확인',
        ],
        updatedDate: '2026-11-13',
      },
    },
    toc: [
      {
        label: '핵심 요약',
        anchor: '#key-takeaways',
      },
      {
        label: '여기서 시작: 설치할 앱 세 가지',
        anchor: '#start-here',
      },
      {
        label: '설치 전에 알아 둘 빠른 답변 여섯 가지',
        anchor: '#quick-answers',
      },
      {
        label: '빠른 사실',
        anchor: '#quick-facts',
      },
      {
        label: '기능 지도: iPhone 로컬 AI로 할 수 있는 것',
        anchor: '#capability-map',
      },
      {
        label: '칩과 RAM의 현실: 어떤 iPhone이 어떤 모델을 실행하는가',
        anchor: '#iphone-hardware',
      },
      {
        label: 'Neural Engine, GPU, CPU: 모델은 실제로 무엇이 실행하는가',
        anchor: '#chips-engines',
      },
      {
        label: '폰 등급, 앱, 모델 크기 한눈에 보기',
        anchor: '#tier-app-model',
      },
      {
        label: '15분 만에 첫 로컬 모델 실행하기',
        anchor: '#first-run-15-minutes',
      },
      {
        label: 'Apple Intelligence와 Foundation Models 프레임워크',
        anchor: '#apple-intelligence',
      },
      {
        label: 'iPhone 로컬 AI를 좌우하는 App Store 규정',
        anchor: '#app-store-rules',
      },
      {
        label: 'iPhone이 Android보다 나은 점과 못한 점',
        anchor: '#iphone-vs-android',
      },
      {
        label: '채팅 어시스턴트: 대표적인 온디바이스 앱',
        anchor: '#chat-assistants',
      },
      {
        label: '채팅 어시스턴트: 신규, 틈새, 하이브리드 앱',
        anchor: '#chat-more',
      },
      {
        label: '업데이트가 뜸하거나 오래됐거나 App Store에 없는 앱',
        anchor: '#chat-quiet-apps',
      },
      {
        label: '비전과 카메라: 사진과 스크린샷에 대해 질문하기',
        anchor: '#vision-camera',
      },
      {
        label: '음성: 받아쓰기, 전사, 읽어주기, 오프라인 어시스턴트, Siri',
        anchor: '#voice-speech',
      },
      {
        label: '휴대폰에서 문서, PDF, 검색 활용하기',
        anchor: '#documents-rag',
      },
      {
        label: '기기 내 번역',
        anchor: '#translation',
      },
      {
        label: '이미지 생성과 사진 편집',
        anchor: '#image-generation-editing',
      },
      {
        label: '사진 라이브러리와 갤러리 검색',
        anchor: '#photos-gallery-search',
      },
      {
        label: '노트, 지식 베이스, 북마크',
        anchor: '#notes-knowledge',
      },
      {
        label: '건강과 웰니스 질문',
        anchor: '#health-wellness',
      },
      {
        label: '롤플레이와 컴패니언 앱, 콘텐츠 안전 주의사항',
        anchor: '#roleplay-companions',
      },
      {
        label: '스마트홈과 에이전트',
        anchor: '#smart-home-agents',
      },
      {
        label: '원격 모드: 내 서버를 위한 씬 클라이언트로 쓰는 iPhone',
        anchor: '#remote-mode',
      },
      {
        label:
          '개발자 경로: Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch, Foundation Models',
        anchor: '#developer-paths',
      },
      {
        label: '프라이버시와 텔레메트리의 현실',
        anchor: '#privacy-telemetry',
      },
      {
        label: '배터리, 발열, 메모리 한계',
        anchor: '#battery-thermal-memory',
      },
      {
        label: '일부만 가능한 것',
        anchor: '#works-partly',
      },
      {
        label: 'iPhone에서 불가능하거나 아직 안 되는 것',
        anchor: '#not-possible',
      },
      {
        label: '선택 가이드: 이 iPhone으로 이것을 하고 싶다면',
        anchor: '#decision-path',
      },
      {
        label: '흔한 실수',
        anchor: '#common-mistakes',
      },
      {
        label: '출처',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: '관련 읽을거리',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**최근 iPhone은 모델을 내려받은 뒤에는 연결 없이도 쓸 만한 언어 모델을 실행할 수 있습니다.** 현실적인 상한은 RAM 6-8 GB에서 1B-4B 파라미터 모델이며, 7B-8B 모델은 저비트 형태로 RAM 12 GB iPhone에만 들어가고 속도도 느립니다. 초안 작성, 요약, 번역, Q&A는 잘 처리하지만, 추론, 코드, 세상 지식은 ChatGPT급 클라우드 모델보다 약합니다.',
          '**모델 크기를 정하는 것은 칩 이름이 아니라 RAM입니다.** Apple은 iPhone RAM을 공개하지 않으며, 이 가이드의 수치는 널리 알려진 사양입니다. 4 GB iPhone은 실용 기준선 미만이고, 6 GB는 1-2B 모델, 8 GB는 3-4B, 12 GB는 여유가 더 있습니다.',
          '**Apple Intelligence와 Foundation Models 프레임워크는 별개의 두 번째 경로입니다.** Apple의 자체 온디바이스 모델은 이미 휴대폰에 들어 있고(iPhone 15 Pro 이상), 다운로드가 필요 없으며, 서드파티 앱이 사용할 수 있습니다. 그 자체로 범용 채팅 앱은 아니며, 언어와 지역 제한이 적용됩니다.',
          '**App Store가 엄격한 한계를 정합니다.** 휴대폰에서 Docker는 쓸 수 없고 Ollama도 실행할 수 없습니다. 앱은 기능을 바꾸는 코드를 내려받을 수 없으므로(Apple 가이드라인 2.5.2), 모든 엔진이 앱에 포함되어 배포되고 모델 파일만 내려받습니다. iPhone 로컬 AI가 스택을 구축하는 일이 아니라 앱을 설치하는 일인 이유입니다.',
          '**iPhone 사용자가 원하는 대부분의 기능에는 우리 디렉토리에 리뷰된 앱이 있습니다.** 채팅, 카메라 질문, 받아쓰기와 전사, 문서 채팅, 번역, 이미지 생성, 사진 검색, 노트, 건강 질문, 롤플레이, 스마트홈 제어, 집 서버 원격 접속입니다. 이 가이드는 우리 디렉토리의 iPhone 앱 대부분을 해당 기능에 연결합니다.',
          '**불가능하거나 일부만 가능한 것도 여럿 있습니다.** 30B 이상 모델, 최첨단 수준의 추론, 상시 실행 백그라운드 에이전트, 직접 만든 모델로 Siri 대체, 휴대폰에서의 파인튜닝, App Store 라벨만으로 프라이버시를 보장받는 것입니다.',
          '**"텔레메트리 없음"은 믿을 것이 아니라 확인할 것입니다.** 채팅을 기기에 둔다고 밝힌 여러 앱도 충돌 보고서, 사용 이벤트, 선택적 웹 요청을 보냅니다. 프라이버시 장에서 에어플레인 모드와 앱 개인정보 보호 리포트로 확인하는 방법을 보여 줍니다.',
          '**작게 시작하십시오.** 앱 하나를 설치하고, Wi-Fi에서 1-2 GB 모델 하나를 내려받은 뒤, 에어플레인 모드로 전환하고 질문해 보십시오. 작동하면 15분 안에 오프라인 경로 전체를 확인한 것입니다.',
        ],
      },
      startHere: {
        id: 'start-here',
        title: '여기서 시작: 설치할 앱 세 가지',
        content: [
          '**시간이 없다면 이 세 가지 중 하나를 설치하고, iPhone의 RAM에 맞는 모델을 내려받은 뒤 에어플레인 모드에서 한 번 테스트하십시오.** 이 추천은 벤치마크가 아니라 이 가이드의 각 장과 리뷰에서 나온 것이며, 나머지 부분에서 각 선택의 이유를 설명합니다.',
          '**그 밖의 좋은 출발점:** RAM 12 GB iPhone에서는 [Noema](/ko/power-local-llm/noema-review) 또는 [Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)에 Gemma 4 모델을 써 보십시오. RAM 4 GB iPhone에서는 그 등급이 기기 내 채팅의 실용 하한에 못 미치므로 [Reins](/ko/power-local-llm/reins-review) 또는 [Enchanted](/ko/power-local-llm/enchanted-review) (유지보수 장에서 업데이트가 뜸한 앱으로 표시됨)를 집 서버와 함께 사용하십시오.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '입문자는 PocketPal AI로, 고급 사용자는 Locally AI와 Apple 자체 모델로, 개발자는 Foundation Models 프레임워크나 MLX Swift로 시작할 수 있으며, 어느 경우든 모델 크기는 iPhone의 RAM에 따라 정해집니다.',
          },
          {
            type: 'plain-terms',
            text: '앱 하나, RAM에 맞는 모델 하나, 에어플레인 모드 테스트 한 번.',
          },
        ],
        itemHeadings: true,
        columns: ['내 수준', '설치 또는 사용할 것', '첫 모델', '이 선택의 이유'],
        rows: [
          {
            '내 수준': '입문자',
            '설치 또는 사용할 것': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '첫 모델': 'RAM 6 GB는 1-2B, 8 GB는 3-4B',
            '이 선택의 이유': '무료 오픈소스이며, 이 가이드의 첫 실행 안내도 이 앱을 사용합니다.',
          },
          {
            '내 수준': '고급 사용자',
            '설치 또는 사용할 것': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
            '첫 모델': 'RAM 8 GB는 3-4B, 또는 내려받기 없는 Apple 자체 모델',
            '이 선택의 이유': 'RAM 8 GB iPhone에서 Siri와 단축어를 쓰기에 알맞고, Apple Intelligence 지원 iPhone에서는 Apple의 온디바이스 모델도 사용할 수 있습니다.',
          },
          {
            '내 수준': '개발자',
            '설치 또는 사용할 것': 'Foundation Models 프레임워크 또는 MLX Swift',
            '첫 모델': 'Apple의 온디바이스 모델 또는 직접 준비한 모델',
            '이 선택의 이유': 'Foundation Models는 Apple의 네이티브 Swift API이며 Apple Intelligence 지원 하드웨어가 필요합니다. MLX Swift는 직접 준비한 모델을 실행합니다. 나머지는 "개발자 경로" 장에서 다룹니다.',
          },
        ],
      },
      quickAnswers: {
        id: 'quick-answers',
        title: '설치 전에 알아 둘 빠른 답변 여섯 가지',
        content:
          '**독자가 가장 먼저 묻는 여섯 가지 질문입니다. 각 답변은 그것을 설명하는 장을 가리킵니다.**',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'RAM이 모델 크기를 정하고, 3-5 GB의 여유 저장 공간이 첫 모델을 담으며, 에어플레인 모드 테스트로 앱이 오프라인에서 작동하는지 확인할 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: 'RAM이 모델을 정하고, 저장 공간이 담으며, 에어플레인 모드가 증명합니다.',
          },
        ],
        items: [
          '**어떤 모델을 내려받아야 합니까?** RAM에 맞추십시오. 6 GB는 1-2B, 8 GB는 3-4B, 12 GB는 여유가 더 있지만 7-8B 모델은 여전히 느립니다. RAM 4 GB iPhone은 실용 하한에 못 미칩니다. "폰 등급, 앱, 모델 크기 한눈에 보기"를 참고하십시오.',
          '**저장 공간은 얼마나 필요합니까?** 먼저 3-5 GB를 비우십시오. 모델 파일 하나가 1-4 GB이기 때문입니다. 중복된 모델 파일은 저장 공간을 빠르게 차지하므로 앱은 한 번에 하나씩 설치하십시오. "15분 만에 첫 로컬 모델 실행하기"를 참고하십시오.',
          '**얼마나 빠르게 실행됩니까?** PromptQuorum은 이 가이드를 위해 어떤 iPhone에서도 속도를 측정하지 않았으며, 당사 iPhone 모음 글의 참고용 속도는 새로 측정한 값이 아닙니다. 작은 모델일수록 응답이 빠릅니다. 처음 테스트 질문에서 속도를 기록하고, 앱 설정에 초당 토큰 수가 표시되는지 확인하십시오.',
          '**어떤 앱이 프라이빗합니까?** App Store 라벨만으로 프라이빗하다고 가정할 수 있는 앱은 없습니다. "기기에서 실행됨"과 "아무것도 전송하지 않음"은 서로 다른 주장이기 때문입니다. 개인정보 라벨과 정책을 읽고, 에어플레인 모드 테스트를 한 뒤, 나중에 설정 > 개인정보 보호 및 보안 > 앱 개인정보 보호 리포트를 확인하십시오. PocketPal AI 같은 오픈소스 앱은 직접 검사할 수 있습니다. "프라이버시와 텔레메트리의 현실"를 참고하십시오.',
          '**인터넷 없이 무엇을 할 수 있습니까?** 이 가이드의 기능 지도에 따르면, 최근 iPhone은 모델을 내려받은 뒤에는 채팅, 카메라 질문, 받아쓰기와 전사, 문서 채팅, 번역을 오프라인으로 처리할 수 있습니다. 30B 이상 모델, 최첨단 수준의 추론, 상시 실행 백그라운드 에이전트는 불가능합니다. "기능 지도"를 참고하십시오.',
          '**다음에는 무엇을 읽어야 합니까?** "15분 만에 첫 로컬 모델 실행하기"를 따라 해 본 뒤, 하고 싶은 구체적인 작업이 있으면 "선택 가이드"를 이용하십시오.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**범위:** iPhone을 우선으로 하고, 같은 앱이 실행되는 경우 iPad도 포함합니다. Android는 자매 가이드 [Android 로컬 AI 가이드](/ko/power-local-llm/local-ai-on-android-guide)에서 다룹니다.',
          '**Apple Intelligence를 지원하는 iPhone(Apple 목록 기준):** iPhone 15 Pro와 15 Pro Max, 16e를 포함한 iPhone 16 계열, 17e와 Air를 포함한 iPhone 17 계열, 2026년 iPhone 18 Pro, 18 Pro Max, iPhone Duo. iPhone 15와 그 이전의 비Pro 모델은 목록에 없습니다.',
          '**이 가이드에서 쓰는 RAM 등급(알려진 수치이며 Apple이 공개한 것이 아님):** 4 GB(iPhone 12, 13, SE), 6 GB(iPhone 13 Pro, 14, 14 Pro, 15), 8 GB(iPhone 15 Pro, 16 시리즈, 16e, 17), 12 GB(iPhone 17 Pro와 Pro Max).',
          '**들어가는 모델 크기:** 4비트 1.7B 모델은 약 1.1 GB, 3-4B 모델은 약 2.5-3.7 GB입니다. 참고용 속도는 우리 iPhone 로드업에서 가져온 것이며 새로 측정한 값이 아닙니다.',
          '**iPhone 앱 안의 엔진:** llama.cpp(GGUF), Apple MLX, MLC LLM, Google LiteRT-LM, ExecuTorch, Core ML, Apple Foundation Models. 일부 앱은 여러 엔진을 함께 씁니다.',
          '**이 가이드에서 연결한 앱:** PromptQuorum 리뷰가 있는 우리 디렉토리의 iOS·iPadOS 앱과, 셀프 호스팅 도구용 iPhone 컴패니언 앱입니다.',
          '**PromptQuorum이 하지 않은 일:** 이 가이드는 앱을 다시 테스트하지 않았습니다. 사실은 우리 리뷰, 스토어 목록, 제작사 사이트, Apple 문서에서 가져왔으며, 각 리뷰에 무엇을 테스트했는지 밝혀 두었습니다.',
        ],
      },
      whatIsPossible: {
        id: 'capability-map',
        title: '기능 지도: iPhone 로컬 AI로 할 수 있는 것',
        content:
          '**iPhone 로컬 AI는 일상적인 언어 작업 대부분과 일부 미디어 작업을 처리하지만, 클라우드 어시스턴트가 하는 모든 일을 하지는 못합니다.** 표는 각 기능을 가능, 부분 가능, 아직 불가로 나누고, 이어지는 장에서 앱을 소개합니다. "가능"은 리뷰된 iPhone 앱이 휴대폰 안의 모델로 처리한다는 뜻이고, "부분 가능"은 크기, 속도, 정확도, 하드웨어에 제한이 있다는 뜻이며, "아직 불가"는 리뷰된 iPhone 앱 중 기기 안에서 처리하는 것이 없다는 뜻입니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'iPhone 로컬 AI는 채팅, 초안 작성, 요약, 번역, 받아쓰기, 문서 Q&A, 간단한 이미지 작업을 기기에서 처리하고, 사진 검색, 이미지 생성, 에이전트는 일부만 처리하며, 대형 모델 실행이나 Siri 대체는 아직 할 수 없습니다.',
          },
          {
            type: 'plain-terms',
            text:
              'iPhone을 작지만 비공개인 두뇌를 가진 주머니 속 어시스턴트라고 생각하십시오. 간단한 질문에 답하고, 글을 고쳐 쓰고, 음성을 받아 적고, 사진을 설명하면서 아무것도 밖으로 보내지 않습니다. 대신 더 큰 클라우드 모델이 아는 사실은 모르고, 긴 답변에서는 느려지며, 따뜻해집니다. 어려운 질문에는 집 컴퓨터나 클라우드 앱과 함께 쓰는 사람이 많습니다.',
          },
        ],
        columns: ['기능', 'iPhone에서', '일반적인 구성', '장'],
        rows: [
          {
            '기능': '채팅, 초안 작성, 요약',
            'iPhone에서': '가능',
            '일반적인 구성': '1-4B 모델, GGUF 또는 MLX',
            '장': '채팅 어시스턴트',
          },
          {
            '기능': '사진·스크린샷에 대해 질문',
            'iPhone에서': '가능',
            '일반적인 구성': '소형 비전 모델 또는 OCR',
            '장': '비전과 카메라',
          },
          {
            '기능': '받아쓰기와 전사',
            'iPhone에서': '가능',
            '일반적인 구성': 'Whisper 또는 Parakeet',
            '장': '음성',
          },
          {
            '기능': '읽어주기(텍스트 음성 변환)',
            'iPhone에서': '가능',
            '일반적인 구성': '시스템 음성 또는 온디바이스 TTS',
            '장': '음성',
          },
          {
            '기능': 'Siri로 핸즈프리 어시스턴트',
            'iPhone에서': '부분 가능',
            '일반적인 구성': '단축어이며 Siri 대체 아님',
            '장': '음성',
          },
          {
            '기능': 'PDF·노트와 채팅',
            'iPhone에서': '가능',
            '일반적인 구성': '소형 모델 + 로컬 인덱스',
            '장': '문서와 RAG',
          },
          {
            '기능': '번역',
            'iPhone에서': '가능',
            '일반적인 구성': '번역용으로 조정된 소형 모델',
            '장': '번역',
          },
          {
            '기능': '이미지 생성',
            'iPhone에서': '부분 가능',
            '일반적인 구성': '소형 확산 모델, 느림',
            '장': '이미지 생성',
          },
          {
            '기능': '사진 편집(누끼, 보정)',
            'iPhone에서': '가능',
            '일반적인 구성': 'Core ML 세그멘테이션 모델',
            '장': '이미지 생성',
          },
          {
            '기능': '사진 라이브러리 AI 검색',
            'iPhone에서': '부분 가능',
            '일반적인 구성': '기기 내 인덱스 또는 자체 서버',
            '장': '사진과 갤러리',
          },
          {
            '기능': 'AI를 갖춘 노트와 북마크',
            'iPhone에서': '부분 가능',
            '일반적인 구성': 'AI는 대개 서버에서 실행',
            '장': '노트와 지식',
          },
          {
            '기능': '건강 데이터 질문',
            'iPhone에서': '부분 가능',
            '일반적인 구성': 'Apple Intelligence, 의료용 아님',
            '장': '건강과 웰니스',
          },
          {
            '기능': '롤플레이와 컴패니언',
            'iPhone에서': '가능',
            '일반적인 구성': '소형 채팅 모델, 클라우드 방식도 있음',
            '장': '롤플레이와 컴패니언',
          },
          {
            '기능': '스마트홈 제어',
            'iPhone에서': '부분 가능',
            '일반적인 구성': '집 서버가 실제 작업 수행',
            '장': '스마트홈과 에이전트',
          },
          {
            '기능': '상시 실행 자율 에이전트',
            'iPhone에서': '아직 불가',
            '일반적인 구성': 'iOS가 백그라운드 작업 제한',
            '장': '불가능한 것',
          },
          {
            '기능': '30B 이상 모델 실행',
            'iPhone에서': '아직 불가',
            '일반적인 구성': '집 서버를 원격으로 사용',
            '장': '원격 모드',
          },
          {
            '기능': '휴대폰에서 모델 파인튜닝',
            'iPhone에서': '아직 불가',
            '일반적인 구성': 'Mac이나 GPU에서 학습',
            '장': '개발자 경로',
          },
        ],
      },
      hardware: {
        id: 'iphone-hardware',
        title: '칩과 RAM의 현실: 어떤 iPhone이 어떤 모델을 실행하는가',
        content:
          '**RAM은 iPhone이 담을 수 있는 가장 큰 모델을 정하고, 칩은 답변 속도를 정합니다.** 언어 모델은 생성하는 동안 메모리에 올라가 있어야 하므로, 4비트 3B 모델(디스크에서 약 2-2.7 GB)은 iOS와 다른 앱이 쓰는 양에 더해 그 정도의 여유 RAM이 필요합니다. 앱이 너무 많이 요구하면 iOS가 그 앱을 종료하며, Apple은 iPhone RAM을 공개하지 않으므로 아래 수치는 Apple의 발표가 아니라 널리 알려진 사양입니다([2026년 iPhone용 최고의 로컬 AI 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026)에서도 같은 수치를 씁니다).',
        columns: ['iPhone 등급', 'RAM(알려진 수치)', '현실적인 모델 크기', '평가'],
        rows: [
          {
            'iPhone 등급': 'iPhone 12, 13, SE',
            'RAM(알려진 수치)': '4 GB',
            '현실적인 모델 크기': '1B 미만, 되더라도',
            '평가': '대신 원격 모드 사용',
          },
          {
            'iPhone 등급': 'iPhone 13 Pro, 14, 14 Pro, 15',
            'RAM(알려진 수치)': '6 GB',
            '현실적인 모델 크기': '1-2B(파일 약 1.1 GB)',
            '평가': '기본 채팅과 초안 작성',
          },
          {
            'iPhone 등급': 'iPhone 15 Pro, 16, 16e, 17',
            'RAM(알려진 수치)': '8 GB',
            '현실적인 모델 크기': '3-4B(약 2.5-3.7 GB)',
            '평가': '전형적인 3-4B 등급',
          },
          {
            'iPhone 등급': 'iPhone 17 Pro, 17 Pro Max',
            'RAM(알려진 수치)': '12 GB',
            '현실적인 모델 크기': '4B 여유 있게, 7-8B 저비트',
            '평가': '최고 RAM 등급',
          },
          {
            'iPhone 등급': 'iPhone 18 Pro, Pro Max, Duo',
            'RAM(알려진 수치)': '공개되지 않음',
            '현실적인 모델 크기': '확인 전까지 12 GB로 간주',
            '평가': 'PromptQuorum 수치 없음',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '명목상 들어가는 모델도 앱을 전환할 때 iOS가 종료할 수 있습니다. 6 GB iPhone에서는 3-4B 파일이 오류 없이 내려받아지더라도 1-2B 모델을 쓰십시오. Apple의 iPhone 페이지 자체에 RAM 수치가 없으므로 등급 표는 보증이 아니라 안내입니다.',
          },
        ],
      },
      hardwareChips: {
        id: 'chips-engines',
        title: 'Neural Engine, GPU, CPU: 모델은 실제로 무엇이 실행하는가',
        content:
          '**iPhone에는 모델을 실행할 곳이 세 군데 있으며, 어느 곳을 쓰는지는 휴대폰이 아니라 앱의 엔진이 정합니다.** CPU는 유연하지만 느리고, GPU(Apple의 Metal 그래픽 API를 통해 접근)는 대부분의 채팅 앱이 의존하는 대규모 행렬 연산을 처리하며, Neural Engine은 Apple의 Core ML과 더 새로운 Core AI 프레임워크가 대상으로 삼을 수 있는 고정 기능 가속기입니다. Apple은 Core AI를 Apple silicon용으로 만들어 통합 메모리와 Neural Engine을 사용하는 것으로 설명하며, iOS 27 세대에 새로 나온 것이라 이 가이드의 앱 대부분은 아직 사용하지 않습니다.',
        items: [
          '**llama.cpp 앱(GGUF 파일):** [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review), [Pocket AI](/ko/power-local-llm/pocket-ai-review), [LLM Farm](/ko/power-local-llm/llm-farm-review)은 GPU의 Metal을 사용합니다. 모든 GGUF 파일을 지원하므로 Hugging Face의 모델도 쓸 수 있습니다.',
          '**Apple MLX 앱:** [Locally AI](/ko/power-local-llm/locally-ai-review), [fullmoon](/ko/power-local-llm/fullmoon-review), [MLXHub](/ko/power-local-llm/mlxhub-review)는 Apple silicon의 통합 메모리를 위해 만들어진 Apple의 MLX 배열 프레임워크를 사용합니다.',
          '**멀티 포맷 앱:** [Noema](/ko/power-local-llm/noema-review)는 GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models를 한 앱에서 지원하므로 모델 포맷에 따라 하드웨어 사용 방식이 달라집니다(리뷰에 나온 제작사 설명).',
          '**컴파일된 모델 앱:** [MLC Chat](/ko/power-local-llm/mlc-chat-review)은 MLC LLM 툴체인으로 컴파일한 모델을 실행하고, [Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)는 Google의 LiteRT-LM 런타임을 사용합니다.',
          '**Apple의 자체 모델:** Apple Intelligence는 시스템 프레임워크를 통해 Apple의 모델을 실행합니다. [Compass - Local AI](/ko/power-local-llm/compass-local-ai-review)와 [Pajdo](/ko/power-local-llm/pajdo-review) 같은 앱은 모델을 직접 내장하는 대신 이를 호출합니다.',
          '**실용적인 결론:** 같은 iPhone에서 같은 크기의 모델을 실행하는 두 앱도 속도, 메모리 사용량, 발열이 다를 수 있습니다. 이미 내려받은 모델을 지우기 전에 같은 프롬프트를 두 앱에서 실행해 보십시오.',
        ],
      },
      tierTable: {
        id: 'tier-app-model',
        title: '폰 등급, 앱, 모델 크기 한눈에 보기',
        content:
          '**먼저 RAM 등급으로 고르고, 그다음 필요에 따라 고르십시오.** 표는 우리 리뷰와 로드업에서 가져온 출발점이며 벤치마크가 아닙니다. 모델은 빠르게 바뀌므로 현재의 소형 모델 추천은 [최고의 모바일 LLM 모델: Phi-4 Mini vs Gemma vs SmolLM](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm)에서 확인하십시오.',
        columns: ['폰 등급', '시작할 앱', '모델 크기', '비고'],
        rows: [
          {
            '폰 등급': 'RAM 4 GB iPhone',
            '시작할 앱': '집 서버용 원격 클라이언트',
            '모델 크기': '휴대폰에는 없음',
            '비고': 'Reins, Enchanted, OpenClient',
          },
          {
            '폰 등급': 'RAM 6 GB iPhone',
            '시작할 앱': 'PocketPal AI 또는 Locally AI',
            '모델 크기': '1-2B(약 1.1 GB)',
            '비고': '가장 작은 모델',
          },
          {
            '폰 등급': 'RAM 8 GB iPhone',
            '시작할 앱': 'PocketPal AI, Private LLM, Gallery',
            '모델 크기': '3-4B(2.5-3.7 GB)',
            '비고': '중간 가격대 등급',
          },
          {
            '폰 등급': 'RAM 12 GB iPhone',
            '시작할 앱': 'Noema 또는 Locally AI',
            '모델 크기': '4B, 또는 7-8B를 느리게',
            '비고': '더 긴 컨텍스트 가능',
          },
          {
            '폰 등급': 'Apple Intelligence 지원 폰',
            '시작할 앱': 'Compass 또는 Locally AI',
            '모델 크기': 'Apple 모델, 다운로드 없음',
            '비고': '언어 제한 적용',
          },
          {
            '폰 등급': '모든 폰, 받아쓰기',
            '시작할 앱': 'Whisper Notes 또는 Aiko',
            '모델 크기': 'Whisper급, 소형',
            '비고': '한 번 결제',
          },
          {
            '폰 등급': '모든 폰, 문서',
            '시작할 앱': 'Private Mind 또는 MemoryAI',
            '모델 크기': '소형 채팅 + 인덱스',
            '비고': '파일 제한 확인',
          },
        ],
      },
      firstRun: {
        id: 'first-run-15-minutes',
        title: '15분 만에 첫 로컬 모델 실행하기',
        content:
          '**iPhone에서 오프라인 경로 전체를 약 15분 만에 확인할 수 있습니다. 앱 하나를 설치하고, Wi-Fi에서 작은 모델 하나를 내려받고, 에어플레인 모드를 켠 뒤 질문하면 됩니다.** 예시는 무료이고 오픈소스인 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를 사용하지만, 다음 장들의 채팅 앱은 모두 같은 방식으로 작동합니다. 소요 시간은 연결 상태와 폰에 따라 달라집니다.',
        numberedItems: [
          {
            title: '0-2분: iPhone 등급 확인',
            whyItMatters:
              '위의 RAM 표에서 내 모델을 찾아보십시오. 6 GB는 1-2B 모델, 8 GB는 3-4B, 12 GB는 여유가 있습니다. 모델 파일이 1-4 GB이므로 먼저 저장 공간 3-5 GB를 비워 두십시오.',
          },
          {
            title: '2-4분: 앱 하나 설치',
            whyItMatters:
              'App Store에서 앱을 하나만 설치하십시오(예: PocketPal AI, Locally AI, Google AI Edge Gallery). 앱 세 개에 모델을 세 개씩 설치하지 마십시오. 중복된 모델 파일은 저장 공간을 빠르게 차지합니다.',
          },
          {
            title: '4-9분: Wi-Fi에서 모델 하나 내려받기',
            whyItMatters:
              '등급에 맞는 크기를 고르십시오. 예를 들어 6 GB에서는 Qwen3 1.7B급 모델, 8 GB에서는 Phi-4 Mini 또는 Gemma 4 E2B입니다(등급별 모델 참조). 다운로드는 인터넷이 필요한 유일한 단계입니다. 끝날 때까지 앱을 열어 두고 화면을 켜 두십시오.',
          },
          {
            title: '9-10분: 에어플레인 모드 켜기',
            whyItMatters:
              '에어플레인 모드를 켜고 Wi-Fi는 끈 채로 두십시오. 모델이 휴대폰에서 실행된다는 것이 확인되고, 앱이 인터넷에 접속하려 하는지도 알 수 있습니다.',
          },
          {
            title: '10-13분: 테스트 질문 세 개 하기',
            whyItMatters:
              '붙여 넣은 단락의 세 줄 요약, 다른 어조로 이메일 고쳐 쓰기, 답을 아는 사실 질문을 해 보십시오. 속도와 폰이 따뜻해지는지 기록하십시오.',
          },
          {
            title: '13-15분: 설정 확인과 정리',
            whyItMatters:
              '앱에 벤치마크나 설정이 있으면 열어 초당 토큰 수를 기록한 뒤, 나중에 설정 > 개인정보 보호 및 보안 > 앱 개인정보 보호 리포트에서 앱이 어떤 도메인에 접속했는지 확인하십시오. 쓰지 않을 모델은 삭제하십시오.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '첫 답변 중에 앱이 멈추거나 다시 시작되면 모델이 폰에 비해 너무 큰 것입니다. 다른 설정을 낮추는 대신 모델을 삭제하고 한 단계 작은 크기를 고르십시오.',
          },
        ],
      },
      appleIntelligence: {
        id: 'apple-intelligence',
        title: 'Apple Intelligence와 Foundation Models 프레임워크',
        content:
          '**Apple Intelligence는 지원되는 모든 iPhone에 다운로드가 필요 없는 내장 언어 모델을 제공하며, Foundation Models 프레임워크를 통해 서드파티 앱이 이를 사용할 수 있습니다.** Apple의 개발자 페이지는 이 프레임워크를 Apple Intelligence를 구동하는 것과 같은 온디바이스 모델에 직접 접근하는 네이티브 Swift API로 설명합니다. Apple Intelligence가 지원하는 기기와 언어에서만 작동합니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'Apple Intelligence는 iPhone 15 Pro 이상에서 Apple의 자체 온디바이스 모델을 실행하며, Foundation Models 프레임워크를 통해 Locally AI, Compass, Pajdo 같은 서드파티 앱이 자체 모델을 내장하지 않고도 이를 사용할 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text:
              'Apple은 이미 iPhone 안에 작은 언어 모델을 넣어 두었습니다. 내려받을 필요는 없지만 다른 모델로 바꿀 수도 없습니다. 앱은 이 모델을 빌려 기기에서 질문에 답할 수 있으며, 그래서 여러 신규 앱이 큰 모델 다운로드가 아니라 최신 iPhone과 최신 iOS를 요구합니다.',
          },
        ],
        items: [
          '**기기 목록(Apple의 Apple Intelligence 페이지):** iPhone 15 Pro와 Pro Max(A17 Pro), iPhone 16, 16 Plus, 16e, 16 Pro 계열(A18과 A18 Pro), iPhone 17, 17e, 17 Pro, 17 Pro Max, Air(A19와 A19 Pro), iPhone Duo, 18 Pro, 18 Pro Max(A20 Pro).',
          '**언어:** Apple Intelligence는 Siri와 기기 언어가 지원되는 언어로 설정되어 있어야 합니다. Apple의 목록에는 중국어(간체와 번체), 덴마크어, 네덜란드어, 영어, 프랑스어, 독일어, 이탈리아어, 일본어, 한국어, 노르웨이어, 포르투갈어, 스페인어, 스웨덴어, 튀르키예어, 베트남어가 포함됩니다. Apple은 일부 기능이 모든 지역이나 언어에서 제공되지 않을 수 있다고 덧붙입니다.',
          '**Siri AI(iOS 27 베타):** Apple은 시작 언어로 영어, 프랑스어, 일본어, 한국어, 포르투갈어, 스페인어를 들고, iOS에서는 처음에 EU에서 제공되지 않으며, 일부 서버 측 기능에는 일일 사용 한도가 있다고 밝힙니다. 이 가이드의 온디바이스 채팅 앱과는 별개입니다.',
          '**프레임워크가 제공하는 것(Apple, iOS 27 가이드):** Apple Foundation Models 접근, 그리고 Language Model 프로토콜을 통한 Claude, Gemini 같은 클라우드 모델이나 이 프로토콜을 따르는 모든 제공자 접근. 이미지를 텍스트와 함께 전달하는 멀티모달 프롬프트. 모델이 기기에서 호출할 수 있는 OCR, 바코드 읽기 같은 Vision 도구. 한 세션에서 모델, 도구, 지침을 바꿔 끼우는 Dynamic Profiles.',
          '**iOS 26 기준(이번 갱신에서 다시 확인하지 않음):** 이 프레임워크는 iOS 26에서 처음 출시되었습니다. 이를 바탕으로 설계하기 전에 컨텍스트 한도와 지원 기능은 Apple의 최신 문서에서 확인하십시오.',
          '**Private Cloud Compute:** Apple Intelligence는 더 큰 요청을 Apple의 서버로 넘길 수 있습니다. Apple은 데이터가 저장되지 않고 요청 처리에만 사용된다고 밝힙니다. 이는 온디바이스 처리가 아니므로 "Apple Intelligence"와 "오프라인"은 서로 다른 주장으로 취급하십시오.',
          '**이 가이드에서 Apple의 모델을 사용하는 앱:** [Locally AI](/ko/power-local-llm/locally-ai-review)(채팅 프런트엔드), [Compass - Local AI](/ko/power-local-llm/compass-local-ai-review)(채팅과 스크린샷 OCR), [Pajdo](/ko/power-local-llm/pajdo-review)(Apple 건강 질문), [LocalMindAI](/ko/power-local-llm/localmindai-review)(Apple의 모델 또는 내려받은 모델), [Noema](/ko/power-local-llm/noema-review)와 [Reins](/ko/power-local-llm/reins-review)(Apple Foundation Models를 백엔드 중 하나로 사용), [Hillnote](/ko/power-local-llm/hillnote-review)(노트), 그리고 자체 3B 모델을 내장하지만 Apple Intelligence 호환 기기를 요구하는 [AI on Device](/ko/power-local-llm/ai-on-device-review).',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '메일, 메시지, 메모에서 글 다듬기, 알림 요약, 글쓰기 도구만 원한다면 채팅 앱이 필요 없습니다. 채팅 창, 모델 선택, 문서 Q&A를 원한다면 이 가이드의 앱 중 하나를 설치하십시오. Apple 모델과 오픈 모델의 장단점은 [Apple 온디바이스 AI vs 로컬 LLM](/ko/local-llms/apple-on-device-ai-vs-local-llms)을 참조하십시오.',
          },
        ],
      },
      appStoreRules: {
        id: 'app-store-rules',
        title: 'iPhone 로컬 AI를 좌우하는 App Store 규정',
        content:
          '**App Store는 iPhone과 데스크톱 로컬 AI의 차이 대부분을 설명합니다.** Apple의 App Review 가이드라인은 모든 앱에 적용되며, 이 중 네 가지가 여기서 중요합니다. 독립 실행형 앱, 전력 사용, 백그라운드 서비스, 데이터 공유입니다. 이 장은 규정 문구를 인용하고 우리의 해석을 덧붙이며, 법률 자문이 아니고 Apple은 규정을 바꿀 수 있습니다.',
        items: [
          '**앱을 바꾸는 코드는 내려받을 수 없습니다(가이드라인 2.5.2).** Apple의 문구는 다음과 같습니다. 앱은 "may not download, install, or execute code which introduces or changes features or functionality of the app". 로컬 AI 앱은 엔진을 앱에 포함해 배포하고 데이터인 모델 가중치만 내려받는 방식으로 이 규정을 지킵니다. 이는 우리의 해석이며 Apple의 설명이 아닙니다.',
          '**휴대폰에서 Ollama 서버를 실행할 수 없습니다.** Ollama는 iPhone 앱을 제공하지 않으며, App Store 샌드박스에서는 Ollama 서버나 Docker 컨테이너를 실행할 현실적인 방법이 없습니다. 샌드박스 방식의 셸 앱이 일부 있지만, 로컬 모델 서버를 제공하지는 않습니다.',
          '**공개 API만 사용합니다(가이드라인 2.5.1).** 앱은 공개 API만 사용할 수 있으며, 그래서 Foundation Models, Core ML, Metal, MLX가 쓸 수 있는 경로이고 Neural Engine에 대한 비공개 접근은 그렇지 않습니다.',
          '**전력과 발열(가이드라인 2.4.2).** Apple은 앱이 "should not rapidly drain battery, generate excessive heat, or put unnecessary strain on device resources"라고 밝힙니다. 지속적인 생성은 이 선을 시험하며, 그래서 앱이 긴 실행을 줄이거나 중단합니다.',
          '**백그라운드 사용은 제한됩니다(가이드라인 2.5.4).** 멀티태스킹 앱은 오디오 재생, 위치, 작업 완료, 로컬 알림 같은 의도된 목적에만 백그라운드 서비스를 쓸 수 있습니다. 앱을 떠난 뒤에는 모델이 계속 생성하거나 에이전트로 무기한 동작할 수 없으며, [Reins](/ko/power-local-llm/reins-review)는 백그라운드 생성에 iOS 26이 필요하다고 설명합니다.',
          '**메모리 한계.** iOS는 포그라운드 앱이 쓸 수 있는 RAM을 제한합니다. Apple은 개발자가 신청할 수 있는 확장 메모리 한도 entitlement(com.apple.developer.kernel.increased-memory-limit)를 공개하고 있으며, 정확한 허용량은 밝히지 않습니다. 앱이 이를 가졌는지는 확인할 수 없으므로, 의존하기 전에 앱 자체 벤치마크로 모델을 테스트하십시오.',
          '**JIT와 런타임 컴파일.** 데스크톱 엔진은 흔히 런타임에 코드를 컴파일하지만, iOS 앱은 미리 컴파일된 엔진을 배포합니다. 이는 여러 엔진 프로젝트가 언급하는 일반적인 플랫폼 동작이며, iPhone 엔진이 기능에서 데스크톱 엔진에 뒤처지는 이유 중 하나입니다.',
          '**데이터 공유(가이드라인 5.1.1과 5.1.2).** 앱은 개인정보 처리방침을 링크하고, 수집하는 데이터를 설명하고, 개인 데이터를 제3자와 공유하기 전에("including with third-party AI" 포함) 허락을 받아야 하며, 동의 없이 데이터를 다른 목적으로 쓸 수 없습니다. App Store 개인정보 보호 라벨은 개발자가 작성하며, 이는 프라이버시 장에서 다시 다룹니다.',
          '**사이드로딩과 대체 마켓플레이스.** EU에서는 디지털 시장법에 따라 대체 앱 마켓플레이스가 존재하지만, 어디에 배포할지는 각 개발자가 정합니다. 이 가이드의 앱 중 마켓플레이스가 필요한 것은 없으며, [LLM Farm](/ko/power-local-llm/llm-farm-review)이 예외로 현재 Xcode에서 소스로 빌드해야 합니다.',
          '**TestFlight 베타.** 여러 제작사가 TestFlight 빌드를 제공합니다(예: 무료 체험용 [Aiko](/ko/power-local-llm/aiko-review), 신규 빌드용 [fullmoon](/ko/power-local-llm/fullmoon-review)). TestFlight 빌드는 기간이 제한되고 미완성이므로, 테스트에만 쓰고 잃어서는 안 되는 데이터에는 쓰지 마십시오.',
        ],
      },
      iphoneVsAndroid: {
        id: 'iphone-vs-android',
        title: 'iPhone이 Android보다 나은 점과 못한 점',
        content:
          '**iPhone은 시작하기 쉽고 확장하기는 더 제한적이며, Android는 그 반대입니다.** iPhone은 알려진 소수의 구성으로 나오고, Apple의 자체 모델을 내장하며, 모든 앱이 하나의 스토어를 거칩니다. Android 폰은 RAM과 칩의 편차가 훨씬 크고, 터미널 앱과 사이드로딩을 허용하며, 자체 온디바이스 모델 스택이 있습니다. 공개 정보에 근거한 플랫폼 비교이며, 하드웨어별 수치는 [Galaxy vs iPhone 온디바이스 AI](/ko/local-llms/galaxy-vs-iphone-on-device-ai-2026)와 자매 가이드 [Android 로컬 AI 가이드](/ko/power-local-llm/local-ai-on-android-guide)를 참조하십시오.',
        columns: ['항목', 'iPhone', 'Android'],
        rows: [
          {
            '항목': '설정 난이도',
            'iPhone': 'App Store, 한 번 탭',
            'Android': 'Play 스토어 또는 APK',
          },
          {
            '항목': '내장 모델',
            'iPhone': 'Apple Foundation Models',
            'Android': '제조사와 Google 모델',
          },
          {
            '항목': '휴대폰에서 Ollama 실행',
            'iPhone': 'iPhone용 Ollama 앱 없음',
            'Android': 'Termux로 가능(가이드 참조)',
          },
          {
            '항목': 'RAM 상한',
            'iPhone': 'Pro 폰에서 약 12 GB',
            'Android': '다양함, 폰별로 확인',
          },
          {
            '항목': '모델 포맷',
            'iPhone': 'GGUF, MLX, Core ML, LiteRT',
            'Android': 'GGUF, LiteRT, MLC 등',
          },
          {
            '항목': '단축어와 자동화',
            'iPhone': '단축어, App Intents',
            'Android': 'Tasker와 인텐트',
          },
          {
            '항목': '앱 수',
            'iPhone': '오픈소스 선택지 적음',
            'Android': '오픈소스 선택지 많음',
          },
          {
            '항목': '백그라운드 작업',
            'iPhone': '엄격히 제한',
            'Android': '더 느슨하지만 여전히 제한',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '이 가이드의 많은 앱은 Android에서도 실행되므로([PocketPal AI](/ko/power-local-llm/pocketpal-ai-review), [MLC Chat](/ko/power-local-llm/mlc-chat-review), [KernelAI](/ko/power-local-llm/kernelai-review), [LLM Hub](/ko/power-local-llm/llm-hub-review)), 두 플랫폼을 모두 쓰는 가정에서는 각 플랫폼에서 같은 앱을 쓸 수 있는 경우가 많습니다. Android 관련 내용은 [2026년 Android용 최고의 로컬 AI 앱](/ko/power-local-llm/best-local-llm-apps-android-2026)에서 비교하십시오.',
          },
        ],
      },
      chatMain: {
        id: 'chat-assistants',
        title: '채팅 어시스턴트: 대표적인 온디바이스 앱',
        content:
          '**iPhone에서 일반 채팅을 하려면 우리 iPhone 로드업이 비교하는 다섯 앱 중 하나로 시작한 뒤, 아래의 신규 앱을 살펴보십시오.** 각 줄은 앱이 하는 일과 솔직한 한계를 적었습니다. 세부 내용은 연결된 PromptQuorum 리뷰, 스토어 목록, 제작사 페이지에서 가져왔으며, 리뷰가 앱을 테스트했다고 밝히지 않는 한 속도와 품질은 측정되지 않은 것으로 보십시오. 순위가 매겨진 추천과 참고용 속도는 [2026년 iPhone용 최고의 로컬 AI 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026)을, 채팅 카테고리 전체는 [채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared)를 참조하십시오.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text:
              'PocketPal AI는 무료 기본 선택, Private LLM은 Siri와 단축어를 지원하는 유료 선택, Locally AI는 Apple Foundation Models를 갖춘 무료 MLX 앱, Google AI Edge Gallery는 iPhone용 무료 Gemma 4 앱입니다.',
          },
          {
            type: 'plain-terms',
            text:
              '채팅 앱 하나를 고르고, 내 iPhone에 맞는 모델 하나를 내려받은 뒤, 이 가이드의 나머지 앱은 문서, 음성, 집 서버 같은 특별한 용도에 두십시오. 가격은 연결된 리뷰와 스토어 페이지에서 가져온 것이며 바뀔 수 있습니다. 구매 전에 스토어에서 확인하십시오.',
          },
        ],
        items: [
          '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review): 무료, 오픈소스(MIT), Hugging Face의 모든 GGUF 모델을 실행하며 벤치마크가 내장되어 있습니다. 한계: 단축어나 Siri 동작이 언급되지 않은 독립형 채팅이며, 프리미엄 프리셋은 선택적 인앱 구매입니다.',
          '[Private LLM](/ko/power-local-llm/private-llm-review): iPhone, iPad, Mac용으로 한 번 $4.99, 140개 이상의 모델, 계정 불필요. 개발자는 Siri 및 단축어와 연동된다고 밝힙니다. 한계: 클로즈드 소스에 선별된 모델 목록이라 임의의 파일을 불러올 수 없습니다.',
          '[Locally AI](/ko/power-local-llm/locally-ai-review): 무료, LM Studio 팀 제작, Apple MLX 기반이며, 단축어 동작, 채팅 옵션으로 Apple Foundation Models, Mac의 LM Studio에 대한 선택적 연결이 있습니다. 한계: 임의의 GGUF 가져오기 불가, 클로즈드 소스, iOS 18.1 이상.',
          '[Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review): 사고 모드, 에이전트 스킬, 이미지·오디오 입력을 갖춘 Gemma 4용 Google의 무료 앱. 한계: LiteRT-LM 모델만 지원하고, 실험적 베타로 표시되어 있으며, App Store 개인정보 보호 라벨에 일부 기기 진단 정보가 나옵니다.',
          '[Noema](/ko/power-local-llm/noema-review): 무료, GGUF, MLX, ExecuTorch, Core ML, Apple Foundation Models를 한 앱에서 실행하며 온디바이스 문서 채팅을 제공합니다. 한계: 클로즈드 소스, 공개된 최소 RAM 없음, iOS 또는 iPadOS 18 이상.',
          '[Off Grid AI](/ko/power-local-llm/off-grid-ai-review): 무료 오픈소스(MIT) 앱으로 GGUF 채팅, Stable Diffusion 이미지 모델, Whisper 음성 인식을 기기에서 실행하며 iOS, Android, macOS, Windows를 지원합니다. 한계: 앱 하나가 여러 역할을 하므로 저장 공간과 설정이 더 많아집니다.',
          '[Pocket AI](/ko/power-local-llm/pocket-ai-review): 무료, Metal을 쓰는 llama.cpp, Qwen, Gemma, Llama, Mistral, Phi, DeepSeek 계열의 모델 28개(개발자 설명 기준), iPhone 12 이상. 한계: 온디바이스 Whisper 음성 입력은 유료 Pro 잠금 해제가 필요합니다.',
          '[KernelAI](/ko/power-local-llm/kernelai-review): 무료, 112 MB부터 3.11 GB까지 내려받을 수 있는 오픈 모델 53개, 목록 기준으로 문서, 비전, 단축어를 지원합니다. 한계: 클로즈드 소스이며, 우리 리뷰는 직접 테스트가 아니라 공개 자료에 근거합니다.',
          '[On Device AI](/ko/power-local-llm/on-device-ai-review): 내려받을 수 있는 GGUF·MLX 모델 200개 이상, 그리고 전사, 문서·RSS 가져오기, 온디바이스 텍스트 음성 변환, 자동화 연동. 한계: 클로즈드 소스 앱의 폭넓은 기능 목록이므로 개인정보 섹션을 읽어 보십시오.',
          '[Enclave AI](/ko/power-local-llm/enclave-ai-review): 인앱 구매가 있는 무료 앱으로, 목록 기준 iPhone, iPad, Mac에서 오프라인으로 동작하고 계정이 필요 없으며, 우리 로드업 기준 문서 상호작용과 단축어를 지원합니다. 한계: 클로즈드 소스이며 유료 등급이 있습니다.',
        ],
      },
      chatMore: {
        id: 'chat-more',
        title: '채팅 어시스턴트: 신규, 틈새, 하이브리드 앱',
        content:
          '**이 앱들은 더 좁은 필요를 채웁니다. 1회 결제 채팅, Apple 모델 전용 채팅, 페르소나, 오픈소스 프라이버시 프로젝트, 온디바이스와 클라우드를 섞은 하이브리드입니다.** 하이브리드 앱은 온디바이스 모드에 머무는 동안에만 로컬이므로 하이브리드 관련 경고를 특히 확인하십시오.',
        items: [
          '[Cloak: Local AI](/ko/power-local-llm/cloak-local-ai-review): 한 번 결제(미국 스토어 $1.99), 추천 모델 하나를 내려받고, iPhone에서 음성 메모와 사진, 위치, 음성 메모로 만든 주간 요약을 추가합니다. 한계: 모델 선택기가 없고 모델 이름이 공개되어 있지 않습니다.',
          '[Compass - Local AI](/ko/power-local-llm/compass-local-ai-review): 무료, 기기에서 Apple Intelligence로 답하고 온디바이스 OCR로 스크린샷을 읽으며, iOS 또는 iPadOS 26이 필요합니다. 한계: 웹 검색은 선택 사항이며, 켜면 질의를 DuckDuckGo 또는 Brave로 보냅니다.',
          '[AI on Device](/ko/power-local-llm/ai-on-device-review): 한 번 $4.99, 2비트로 양자화한 3B 모델, iOS 26과 Apple Intelligence 호환 기기가 필요합니다. 한계: 2025년 10월 13일 이후 업데이트가 없으므로 업데이트가 뜸한 앱으로 보십시오.',
          '[Haplo AI](/ko/power-local-llm/haplo-ai-review): Qwen, Phi 같은 오픈 모델을 내려받아 채팅, 이미지 입력, 이미지 생성을 하며 계정이 필요 없습니다. 한계: 유료 앱이며, 우리 리뷰는 공개 자료에 근거합니다.',
          '[Oscilla](/ko/power-local-llm/oscilla-review): 무료, 오픈 모델 40개 이상, 실시간 음성, 내장 메모리, 웹 검색, 파일·이미지 분석 기능이 있으며, Apple의 "Data Not Collected" 라벨이 붙어 있습니다. 한계: iOS 26 이상, 클로즈드 소스이며, 2026년 5월 21일 이후 업데이트가 없습니다.',
          '[Frankly AI](/ko/power-local-llm/frankly-ai-review): 작업별 페르소나를 갖춘 내려받는 온디바이스 모델, 계정 불필요. 무료는 일일 한도가 있고 Pro가 나머지를 엽니다. 한계: 무료 등급의 사용량 상한.',
          '[LLM Studio Go](/ko/power-local-llm/llm-studio-go-review): 무료이며 광고 기반, GGUF·MLX 모델로 채팅, 음성, 이미지, 음악, 음성 기능, iOS 또는 iPadOS 18. 한계: 광고가 있으며, 리뷰에 따르면 이름과 달리 LM Studio와 관련이 없습니다.',
          '[Local AI Chat - pocket](/ko/power-local-llm/local-ai-chat-pocket-review): 부분 유료(freemium) 오프라인 채팅으로, 태그라인 기준 이미지 생성과 단축어를 지원하고 iOS 또는 iPadOS 18.6 이상이 필요합니다. 한계: 2026년 5월 27일 이후 업데이트가 없고 구독형 인앱 구매가 있습니다.',
          '[Loci AI](/ko/power-local-llm/loci-ai-review-offline-local-ai): iPhone, iPad, Android, Mac, Windows에서 무료이며 하드웨어에 맞는 모델을 자동으로 고릅니다. 한계: 모델 성능에 대한 제작사의 주장은 PromptQuorum이 검증하지 않았습니다.',
          '[Ensu](/ko/power-local-llm/ensu-review): 무료, 오픈소스(AGPL), Ente Labs 제작, 이미지 입력과 로컬 음성 받아쓰기를 지원합니다. 한계: 제작사 스스로 아직 ChatGPT나 Claude Code만큼 뛰어나지 않다고 밝히며, 버전도 아직 0.x입니다.',
          '[MemoryAI](/ko/power-local-llm/memoryai-review): 문서 Q&A, 편집 가능한 메모리, PIN 잠금 키즈 모드를 갖춘 무료 오프라인 채팅. iOS 16.4 이상, RAM 4 GB 이상. 한계: 개인정보 처리방침에 사용 이벤트와 충돌 보고서가 명시되어 있으며 클로즈드 소스입니다.',
          '[Secret AI](/ko/power-local-llm/secret-ai-review): GGUF, MNN, MLX 모델로 캐릭터, 스킬, MCP 도구를 지원하는 오프라인 채팅. 한계: 개인정보 처리방침에 따르면 MCP 도구 호출과 선택적 원격 서버가 데이터를 기기 밖으로 보낼 수 있으며, 이 방침은 해당 기능보다 먼저 작성되었습니다.',
          '[LocalMindAI](/ko/power-local-llm/localmindai-review): Apple의 모델이나 내려받은 모델을 사용하는 iPhone·iPad 채팅, 메모리, 음성 인식, 문서 읽기. iOS 26. 한계: 리뷰 시점에 출시된 지 며칠밖에 안 되었으며, 우리 리뷰는 공개 자료에 근거합니다.',
          '[Solair AI](/ko/power-local-llm/solair-ai-review): 선택적으로 자신의 키를 쓰는 클라우드 대체 경로를 둔 로컬 우선 어시스턴트. iOS 26. 한계: 대체 경로는 클라우드이므로 어느 모드가 답하는지 확인하십시오.',
          '[Liquid Apollo](/ko/power-local-llm/liquid-apollo-review): 무료, Liquid AI LFM2 모델(350M-2.6B)을 오프라인으로 실행하며 선택적 OpenRouter 모드와 커스텀 백엔드를 지원합니다. iOS 18. 한계: 로컬 전용이 아니며 OpenRouter 모드에는 자신의 키와 인터넷이 필요합니다.',
          '[Kai 9000](/ko/power-local-llm/kai-9000-review): 영구 메모리와 도구를 갖춘 오픈소스 어시스턴트. 한계: 리뷰에 따르면 기본적으로 메시지를 클라우드 서비스로 보내며, 온디바이스 모델을 내려받은 뒤에만 로컬로 실행됩니다.',
          '[CompactifAI APP](/ko/power-local-llm/compactifai-app-review): 압축 모델을 제공하는 Multiverse Computing의 무료 앱. 한계: 현재 스토어 설명에는 API 모델만 나와 있어 휴대폰에서 무엇이 실행되는지는 확인되지 않았습니다.',
          '[Atomic Chat](/ko/power-local-llm/atomic-chat-review): macOS, Windows, Linux, iOS, Android용 무료 오픈소스(Apache 2.0) 앱으로 GGUF, MLX, ONNX 모델과 로컬 OpenAI 호환 API를 제공합니다. 한계: 멀티 플랫폼 프로젝트이므로 iPhone 빌드에 무엇이 포함되는지는 리뷰를 읽어 보십시오.',
          '[LLM Hub](/ko/power-local-llm/llm-hub-review): MCP를 지원하는 에이전트, 이미지·음악 생성, 번역, Whisper, 음성 채팅을 갖춘 Android·iPhone 스위트이며 유료 Premium 등급이 있습니다. 한계: 라이선스가 PolyForm Noncommercial이어서 일반적인 의미의 오픈소스 라이선스가 아닙니다.',
          '[Llamatik](/ko/power-local-llm/llamatik-review): 무료, MIT, 자체 목록에서 개발자의 Kotlin SDK 실험적 쇼케이스라고 부르는 오프라인 챗봇. 한계: 개인정보 처리방침과 스토어 라벨에 Firebase 분석과 충돌 보고가 명시되어 있습니다.',
          '[Layla](/ko/power-local-llm/layla-review): Android와 iOS에서 한 번 $19.99, 페르소나 중심 컴패니언, 음성, 이미지 생성을 갖춘 GGUF 모델. 한계: Android 우선이며 선택적 Layla Cloud 모드가 있습니다.',
        ],
      },
      chatQuiet: {
        id: 'chat-quiet-apps',
        title: '업데이트가 뜸하거나 오래됐거나 App Store에 없는 앱',
        content:
          '**석 달 넘게 업데이트가 없는 앱은 유지보수되지 않을 수 있으므로 의존하기 전에 확인하십시오.** 아래 날짜는 PromptQuorum 디렉토리 타일과 각 리뷰에서 가져왔습니다. 업데이트가 뜸한 앱도 작동할 수 있지만, 수정도, 새 모델도 없고 제작사가 돌아올지 알 수 있는 신호도 없습니다.',
        items: [
          '[MLC Chat](/ko/power-local-llm/mlc-chat-review): MLC LLM 프로젝트의 Metal 가속 레퍼런스 앱. 우리 리뷰에 따르면 2024년 9월 27일 이후 App Store 업데이트가 없습니다. 그 뒤의 엔진인 [MLC LLM](/ko/power-local-llm/mlc-llm-explained)은 여전히 활발합니다.',
          '[LLM Farm](/ko/power-local-llm/llm-farm-review): 마지막 릴리스는 2025년 1월의 1.4.3이고 마지막 코드 푸시는 2026년 1월 30일입니다. App Store나 TestFlight에서 설치할 수 없으며(README는 일시적으로 이용할 수 없다고 밝힘), 샘플링 제어가 필요하면 Xcode에서 소스로 빌드하십시오.',
          '[fullmoon](/ko/power-local-llm/fullmoon-review): 무료, MIT, Apple MLX에서 소형 모델을 실행하며, 2025년 1월 28일 이후 릴리스가 없고 2025년 5월 5일 이후 코드 변경이 없습니다.',
          '[Maid](/ko/power-local-llm/maid-review): Android 우선인 오픈소스 채팅 앱으로, iOS 빌드는 사이드로드였고 우리 리뷰는 iOS 릴리스를 2025년 4월의 버전 2.0.7로 기록하므로 App Store 선택지가 아닙니다.',
          '[Aiko](/ko/power-local-llm/aiko-review): 여전히 판매 중이며 전사에 유용하지만, 마지막 업데이트가 2026년 6월 27일이라 석 달이 넘었습니다.',
          '이 가이드에서 업데이트가 뜸하다고 표시한 다른 앱: [Atomic Bot](/ko/power-local-llm/atomic-bot-review)(2026년 5월 26일), [Chapper](/ko/power-local-llm/chapper-review)(2026년 8월 6일), [Enchanted](/ko/power-local-llm/enchanted-review)(2026년 7월 7일), [AI CutoutWerk](/ko/power-local-llm/ai-cutoutwerk-review)(2026년 2월 16일), [pcAI Photo Retouch](/ko/power-local-llm/pcai-photo-retouch-review)(2026년 2월 20일).',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '업데이트가 뜸하다는 것은 디렉토리 타일의 날짜 기준 표시일 뿐 품질에 대한 평가가 아닙니다. 이 목록의 앱에 돈을 쓰기 전에 App Store 페이지를 열어 버전 기록을 직접 읽어 보십시오.',
          },
        ],
      },
      vision: {
        id: 'vision-camera',
        title: '비전과 카메라: 사진과 스크린샷에 대해 질문하기',
        content:
          '**여러 iPhone 앱이 질문과 함께 이미지를 받아 기기에서 답하지만, 소형 비전 모델은 클라우드 모델보다 실수가 많습니다.** 경로는 두 가지입니다. 내려받은 비전-언어 모델(모델이 사진을 직접 읽음)과 시스템 OCR에 텍스트 모델을 더하는 방식(폰이 텍스트를 추출하고 모델이 답함)입니다. Apple의 iOS 27 개발자 가이드는 Foundation Models 프레임워크가 이제 이미지를 텍스트와 함께 받으며 모델이 기기에서 OCR, 바코드 읽기 같은 Vision 도구를 호출할 수 있다고 설명합니다.',
        items: [
          '[Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review): Gemma 4 모델로 이미지 질문과 Audio Scribe. 한계: LiteRT-LM 모델만 지원하며, Google이 밝히는 메모리 수치는 제조사 수치이지 PromptQuorum의 측정값이 아닙니다.',
          '[Compass - Local AI](/ko/power-local-llm/compass-local-ai-review): 첨부한 스크린샷을 온디바이스 OCR로 읽고 Apple Intelligence로 답합니다. 한계: OCR은 텍스트를 읽을 뿐 장면을 설명하지 않으며, iOS 또는 iPadOS 26이 필요합니다.',
          '[Oscilla](/ko/power-local-llm/oscilla-review): 목록 기준 MiniCPM-V 같은 비전 지원 모델로 파일·이미지 분석. 한계: iOS 26 이상이며 2026년 5월 21일 이후 업데이트가 없습니다.',
          '[Haplo AI](/ko/power-local-llm/haplo-ai-review): 한 앱에서 이미지 입력과 이미지 생성. 한계: 우리 리뷰는 공개 자료에 근거하므로 모델 품질은 측정되지 않았습니다.',
          '[Ensu](/ko/power-local-llm/ensu-review): 내려받은 모델로 이미지 입력, 무료 오픈소스. 한계: 버전 0.x이며 제작사는 아직 대형 클라우드 도구와 대등하지 않다고 밝힙니다.',
          '[KernelAI](/ko/power-local-llm/kernelai-review): 내려받을 수 있는 모델 53개와 함께 비전을 기능으로 나열합니다. 한계: 이미지를 받는 모델은 모델마다 다릅니다.',
          '[MemoryAI](/ko/power-local-llm/memoryai-review): 모델을 내려받은 뒤 비전 모델로 이미지 이해. 한계: 비전을 지원하는 모델을 직접 골라야 합니다.',
          '[Reins](/ko/power-local-llm/reins-review): 이미지, PDF, CSV 첨부 파일을 내 서버의 모델이나 로컬 MLX 모델로 보냅니다. 한계: 품질은 고른 서버 모델에 따라 달라집니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '약 라벨, 법률 문서, 먹기 위한 식물이나 버섯 식별처럼 잘못 읽으면 대가가 따르는 일에는 소형 온디바이스 비전 모델을 쓰지 마십시오. 답은 출발점으로만 삼고 출처를 확인하십시오.',
          },
        ],
      },
      voice: {
        id: 'voice-speech',
        title: '음성: 받아쓰기, 전사, 읽어주기, 오프라인 어시스턴트, Siri',
        content:
          '**음성을 텍스트로 바꾸는 일은 온디바이스 작업 중 가장 자리 잡은 편이며, 제작사들은 최근 폰에서 Whisper급 모델이 실행된다고 밝히고, 여러 앱이 분 단위 과금 대신 한 번만 결제하게 합니다.** 텍스트 음성 변환과 핸즈프리 어시스턴트는 더 들쭉날쭉합니다. 직접 구축하는 파이프라인은 [휴대폰에서 로컬 음성 어시스턴트 만들기](/ko/power-local-llm/voice-assistant-local-mobile-offline), 카테고리는 [음성·오디오 앱 비교](/ko/power-local-llm/local-llm-voice-audio-compared), 엔진 비교는 [로컬 Whisper STT 비교](/ko/power-local-llm/local-whisper-stt-comparison)를 참조하십시오.',
        items: [
          '[Whisper Notes](/ko/power-local-llm/whisper-notes-review): 한 번 $7.99, iPhone, iPad, Apple silicon Mac에서 Whisper, Parakeet, SenseVoice를 실행하며 화자 라벨을 지원합니다. 개인정보 처리방침은 오디오와 전사 결과가 기기를 떠나지 않는다고 밝힙니다. 한계: 클로즈드 소스이며, 리뷰는 직접 테스트가 아니라 공개 자료에 근거합니다.',
          '[Aiko](/ko/power-local-llm/aiko-review): Mac, iPhone, Vision Pro용 온디바이스 Whisper 전사, 100개 언어, 단축어 지원, 모든 플랫폼에 한 번 구매. 한계: 마지막 업데이트가 2026년 6월 27일이라 업데이트가 뜸합니다.',
          '[Lyonesse](/ko/power-local-llm/lyonesse-review): iPhone, iPad, Mac용 오프라인 전사, 회의록, 문서 채팅. Apple Watch 앱이 단독으로 녹음하고 iPhone으로 전송하면 iPhone이 전사합니다. 한계: 제작사의 처리 방식 주장은 독립적으로 검증되지 않았습니다.',
          '[OpenWhispr](/ko/power-local-llm/openwhispr-review): MIT 라이선스의 받아쓰기와 회의 노트로, 로컬 Whisper 또는 Parakeet 모델이나 직접 고른 클라우드 제공자를 사용합니다. 한계: 내 음성이 기기에 머무는지는 어떤 모델을 고르느냐에 달려 있습니다.',
          '[AquaVoice](/ko/power-local-llm/aquavoice-review): 활성 앱에 입력해 주는 음성 받아쓰기. 한계: 리뷰에 따르면 클라우드 서비스이며, 로컬 받아쓰기로 오해하지 않도록 여기에 넣었습니다.',
          '[Ensu](/ko/power-local-llm/ensu-review)와 [MemoryAI](/ko/power-local-llm/memoryai-review): 채팅 앱 안에서 로컬 음성 받아쓰기(Ensu), 온디바이스 음성 입력과 읽어주기를 갖춘 핸즈프리 음성(MemoryAI). 한계: 음성 품질은 뒤에 있는 소형 채팅 모델을 따릅니다.',
          '[Oscilla](/ko/power-local-llm/oscilla-review), [LLM Studio Go](/ko/power-local-llm/llm-studio-go-review), [Pocket AI](/ko/power-local-llm/pocket-ai-review): 각각 실시간 음성, 음성이 있는 음성 채팅, 온디바이스 Whisper 입력(유료 Pro). 한계: 음성은 채팅 모델 위에 메모리와 배터리 부담을 더합니다.',
          '[Castmates](/ko/power-local-llm/castmates-review): 제작사 설명에 따르면 휴대폰에서 실행되는 캐릭터와의 음성 통화. 한계: 클로즈드 소스이므로 이 주장은 개발자의 말에 의존합니다.',
          '[Cloak: Local AI](/ko/power-local-llm/cloak-local-ai-review): 음성 메모를 노트나 채팅으로 바꿉니다. 한계: 고정된 모델 하나.',
          '[Home Assistant Assist](/ko/power-local-llm/home-assistant-assist-review): Home Assistant 안의 음성 어시스턴트로, 리뷰에 따르면 Whisper, Piper, Wyoming으로 로컬 동작하며 독립형 iPhone 앱은 아닙니다. 한계: Home Assistant 서버와 일부 실험적인 선택적 LLM 에이전트가 필요합니다.',
          '[Murmur](/ko/power-local-llm/murmur-review): 사진, 영상, 게임에 쓸 연주곡을 기기에서 작곡하며 1회성 Pro 잠금 해제가 있습니다. 한계: 보컬 없음.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'Siri와 단축어: [Private LLM](/ko/power-local-llm/private-llm-review)은 Siri와 단축어 연동을 명시하고, [Locally AI](/ko/power-local-llm/locally-ai-review)와 [Aiko](/ko/power-local-llm/aiko-review)는 단축어 동작을 제공하며, 우리 iPhone 로드업은 프롬프트를 Apple의 온디바이스 모델로 보낼 수 있는 단축어의 Use Model 동작을 설명합니다. 이들 중 어느 것도 Siri 자체를 대체하지 않으며, Siri에게 앱을 호출하는 단축어를 실행하라고 요청하는 방식입니다.',
          },
        ],
      },
      documents: {
        id: 'documents-rag',
        title: '휴대폰에서 문서, PDF, 검색 활용하기',
        content:
          '**PDF나 노트 몇 개와 채팅하는 일은 iPhone에서도 되지만, 라이브러리 전체는 집 서버의 몫입니다.** 온디바이스 문서 채팅은 파일을 조각으로 나누고, 소형 임베딩 모델로 인덱싱한 뒤, 가장 알맞은 조각을 채팅 모델에 넘깁니다. 소형 모델은 컨텍스트 창이 짧아 답변이 내용을 놓칠 수 있고 지어낸 인용이 나올 수도 있습니다. 라이브러리 규모의 검색은 [지식·검색 앱 비교](/ko/power-local-llm/local-llm-knowledge-retrieval-compared)를 참조하십시오.',
        items: [
          '[Private Mind](/ko/power-local-llm/private-mind-review): Software Mansion의 오픈소스(MIT) 채팅으로, React Native ExecuTorch를 사용해 온디바이스 검색과 출처 인용으로 PDF·텍스트 파일에 대한 질문에 답합니다. 한계: 버전 1.3.0에 페이지를 가져오는 선택적 Web 토글이 추가되어, 기본은 오프라인이지만 그 기능을 켜면 오프라인이 아닙니다.',
          '[MemoryAI](/ko/power-local-llm/memoryai-review): 문서 Q&A와 편집 가능한 Agent Memory. 한계: 클로즈드 소스이며 사용 이벤트가 폰 밖으로 나갑니다.',
          '[LocalMindAI](/ko/power-local-llm/localmindai-review): Apple의 모델이나 내려받은 모델로 기기에서 문서를 읽습니다. 한계: iOS 26이며 리뷰 시점에 매우 새로웠습니다.',
          '[Noema](/ko/power-local-llm/noema-review): 다섯 가지 모델 포맷 전반에서 온디바이스 문서 채팅. 한계: 클로즈드 소스, 공개된 RAM 수치 없음.',
          '[Lyonesse](/ko/power-local-llm/lyonesse-review): 전사 결과 옆에서 내 문서와 채팅. 한계: Apple Watch와 회의 기능이 중심입니다.',
          '[Arbiter](/ko/power-local-llm/arbiter-local-ai-chat-review): 업로드한 문서를 기기에 보관해 iPhone 13 Pro 이상(RAM 약 6 GB 이상)에서 요약하며, 더 큰 모델을 위해 LM Studio, Ollama, Arbiter for Mac 컴패니언에 연결할 수 있습니다. 한계: 더 큰 모델의 답변은 폰을 떠나 내 컴퓨터로 갑니다.',
          '[KernelAI](/ko/power-local-llm/kernelai-review)와 [Enclave AI](/ko/power-local-llm/enclave-ai-review): 둘 다 범용 채팅 앱에 문서 기능을 나열합니다. 한계: 의존하기 전에 앱에서 파일 크기와 형식 제한을 확인하십시오.',
          '[Reins](/ko/power-local-llm/reins-review): PDF, CSV, 텍스트 첨부 파일을 내 서버의 모델로 전송합니다. 한계: 처리는 폰이 아니라 서버에서 이루어집니다.',
          '[AnythingLLM Mobile](/ko/power-local-llm/anythingllm-mobile-review): Android에는 독립형 온디바이스 모드와 AnythingLLM Desktop과의 페어링이 있으며, 우리 리뷰는 iOS 앱이 아직 출시되지 않았다고 밝힙니다. 한계: iOS가 출시되기 전에는 내 AnythingLLM 서버에 브라우저로 접속하십시오.',
        ],
      },
      translation: {
        id: 'translation',
        title: '기기 내 번역',
        content:
          '**번역은 작업 범위가 좁고 여러 앱이 번역용으로 조정된 모델을 내장하므로 소형 온디바이스 모델에 잘 맞습니다.** PromptQuorum은 iPhone에서의 번역 품질을 벤치마크하지 않았습니다. 희귀 언어, 관용구, 긴 문서에서는 품질이 떨어질 가능성이 높고, 모든 온디바이스 엔진은 모델이나 언어마다 다운로드가 필요합니다.',
        items: [
          '[On-Device AI Translator](/ko/power-local-llm/on-device-ai-translator-review): 내려받을 수 있는 Hy-MT2, TranslateGemma, Qwen 모델로 iPhone에서 번역하며 무료 엔진으로 Apple의 내장 번역도 제공합니다. iOS 18.4 이상. 한계: AI 모델은 인앱 구매 뒤에 있고 그 가격은 자료에 나와 있지 않으며, 개인정보 처리방침이 앱보다 먼저 작성되었습니다.',
          '[LLM Hub](/ko/power-local-llm/llm-hub-review): Android·iPhone 스위트에 번역을 포함합니다. 한계: 번역은 여러 기능 중 하나이며 라이선스는 비상업용입니다.',
          '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Locally AI](/ko/power-local-llm/locally-ai-review) 같은 범용 채팅 앱도 Qwen이나 Gemma 계열 같은 다국어 모델을 불러오면 번역할 수 있습니다. 한계: 용어집, 문서 레이아웃, 언어별 품질 보증이 없습니다.',
          'Apple의 자체 번역 앱과 시스템 번역은 위 앱들과 별개이며 이 가이드에서 검증하지 않았습니다. 내 언어 쌍을 오프라인용으로 내려받을 수 있는지는 번역 앱에서 확인하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              '책 전체나 긴 문서는 데스크톱 경로가 더 현실적입니다. [LLM으로 책 번역하기](/ko/power-local-llm/translate-books-with-llms-review)를 참조하십시오. Apple Intelligence 언어 지원은 별도 목록이며 Apple Intelligence 장에서 다룹니다.',
          },
        ],
      },
      images: {
        id: 'image-generation-editing',
        title: '이미지 생성과 사진 편집',
        content:
          '**iPhone은 소형 확산 모델로 이미지를 생성하고 세그멘테이션 모델로 사진을 편집할 수 있지만, 생성은 느리고 저장 공간을 많이 차지하며 폰이 따뜻해집니다.** 모델 파일은 수 GB 단위의 다운로드이고, PromptQuorum에는 iPhone 이미지 앱의 속도 수치가 없습니다. 클라우드와 로컬의 장단점은 [로컬 AI 이미지 생성 vs 클라우드](/ko/power-local-llm/local-ai-image-generation-vs-cloud), 카테고리는 [이미지·영상 앱 비교](/ko/power-local-llm/local-llm-images-video-compared)를 참조하십시오.',
        items: [
          '[Draw Things](/ko/power-local-llm/draw-things-review): macOS, iOS, iPadOS, visionOS에서 Stable Diffusion, SDXL, Flux 등 확산 모델로 이미지를 생성하며, 로컬 생성에는 계정이 필요 없고 iOS 15.4 이상입니다. 한계: 선택적 클라우드 모드도 제공하므로 100% 로컬은 아니며, 더 큰 모델에는 RAM이 더 필요합니다.',
          '[Genva](/ko/power-local-llm/genva-review): 한 번 모델을 내려받은 뒤 텍스트 프롬프트와 사진을 기기에서 이미지로 바꾸고 업스케일링하는 iPhone·iPad 앱. 한계: 2026년 10월 14일 버전 1.0.0으로 출시되어 이력이 없습니다.',
          '[Haplo AI](/ko/power-local-llm/haplo-ai-review), [Off Grid AI](/ko/power-local-llm/off-grid-ai-review), [LLM Studio Go](/ko/power-local-llm/llm-studio-go-review): 기기에서 이미지도 생성하는 채팅 앱(Haplo AI, Stable Diffusion 모델을 쓰는 Off Grid AI, 음악과 음성도 지원하는 LLM Studio Go). 한계: 이미지 품질과 속도는 전용 앱에 뒤처집니다.',
          '[Local AI Chat - pocket](/ko/power-local-llm/local-ai-chat-pocket-review)과 [Layla](/ko/power-local-llm/layla-review): 이미지 생성을 지원하는 오프라인 채팅이며 Layla는 음성과 페르소나도 있습니다. 한계: Local AI Chat - pocket은 2026년 5월 27일 이후 업데이트가 뜸하고, Layla는 Android 우선입니다.',
          '[Tina](/ko/power-local-llm/tina-review): 내가 호스팅하는 서버의 ComfyUI로 이미지를 생성하며 기기에서도 모델을 실행할 수 있습니다. 한계: 이미지 단계에는 내 서버가 필요합니다.',
          '[AI CutoutWerk](/ko/power-local-llm/ai-cutoutwerk-review): Core ML 세그멘테이션 모델을 사용하는 iPhone, iPad, Mac용 오프라인 배경 제거·누끼 합성 앱. 한계: 2026년 2월 16일 이후 업데이트가 없습니다.',
          '[pcAI Photo Retouch](/ko/power-local-llm/pcai-photo-retouch-review): 개발자가 전부 기기에서 실행된다고 밝히는 AI로 오래된 사진을 복원하고 아트 스타일을 적용합니다. 한계: 모델 이름이 공개되지 않았고 소스가 공개되지 않았으며 2026년 2월 20일 이후 업데이트가 없습니다.',
        ],
      },
      photos: {
        id: 'photos-gallery-search',
        title: '사진 라이브러리와 갤러리 검색',
        content:
          '**iPhone의 AI 사진 검색은 대개 인덱싱을 다른 곳에서 처리하는 라이브러리의 클라이언트입니다. 폰에서 직접 켜는 기능이거나, 내가 운영하는 서버입니다.** 아래 세 라이브러리는 접근 방식이 다르며, 어느 것도 채팅 모델을 추가하지 않습니다. 얼굴 인식은 생체 정보를 처리하므로 켜기 전에 나와 사진 속 사람들이 사는 곳의 규정을 확인하십시오.',
        items: [
          '[Ente Photos](/ko/power-local-llm/ente-photos-review): Ente에 따르면 종단간 암호화되는 오픈소스 사진 백업으로, 얼굴 인식과 자연어 매직 검색은 기기에서 실행되며 켜기 전까지 꺼져 있습니다. 한계: 사진은 암호화된 상태로 Ente의 클라우드에 저장되며, 첫 인덱싱은 배터리를 소모합니다.',
          '[Immich](/ko/power-local-llm/immich-review): iPhone·Android 앱을 갖춘 셀프 호스팅 사진·영상 백업으로, 스마트 검색과 얼굴 인식은 Docker로 설치하는 내가 호스팅하는 머신러닝 컨테이너에서 실행됩니다. 한계: 서버가 필요하고, 데이터베이스는 메타데이터만 담으므로 파일은 별도로 백업해야 하며, 채팅이나 LLM 기능은 없습니다.',
          '[Mylio Photos](/ko/power-local-llm/mylio-photos-review): SmartTag 검색, 얼굴·텍스트 인식을 갖춘 사진·영상·문서 라이브러리로, Mylio는 이것이 내 기기에서 실행된다고 밝힙니다. 무료 다운로드이며 구독 요금제가 있습니다. 한계: Mylio는 앱 내 도움말 챗봇이 어디서 실행되는지 밝히지 않습니다.',
          'iPhone 브라우저나 컴패니언 앱으로 여는 셀프 호스팅 웹 갤러리인 [PhotoPrism 리뷰](/ko/power-local-llm/photoprism-review), [Photoview 리뷰](/ko/power-local-llm/photoview-review), [Home Gallery 리뷰](/ko/power-local-llm/home-gallery-review)는 별도로 리뷰했습니다. 무엇이 어디서 실행되는지는 각 리뷰를 읽어 보십시오.',
        ],
      },
      notes: {
        id: 'notes-knowledge',
        title: '노트, 지식 베이스, 북마크',
        content:
          '**대부분의 노트·북마크 도구는 AI를 서버나 내가 고른 모델 제공자에서 실행하며, iPhone 앱은 캡처와 열람용 클라이언트입니다.** 서버가 내 것이고 모델이 로컬이라면 완전히 비공개일 수 있지만, 온디바이스 추론은 아닙니다. 무엇이 어디서 실행되는지는 각 리뷰에 적혀 있습니다.',
        items: [
          '[Hillnote](/ko/power-local-llm/hillnote-review): Mac, Windows, iPhone, Android용 로컬 우선 Markdown 노트 워크스페이스로, Ollama와 Apple Intelligence를 통한 온디바이스 AI와 선택적 클라우드 모델·동기화를 제공합니다. 한계: Ollama는 휴대폰이 아니라 컴퓨터에서 실행되며, 클라우드 모델은 선택 사항이지만 로컬이 아닙니다.',
          '[Logseq](/ko/power-local-llm/logseq-review): 오픈소스 로컬 우선 아웃라이너로, 데이터베이스 버전 2.0.2는 README가 데이터 손실 가능성을 경고하는 베타입니다. 한계: AI는 내장 모델이 아니라 선택적 MCP 서버를 통해 제공됩니다.',
          '[SiYuan](/ko/power-local-llm/siyuan-review): Windows, macOS, Linux, Android, iOS, HarmonyOS용 셀프 호스팅 AGPL 지식 워크스페이스로, 내가 고른 모델 제공자에 연결하는 선택적 AI 기능이 있습니다. 한계: 클라우드 동기화에는 구독 또는 1회성 PRO 구매가 필요합니다.',
          '[Karakeep](/ko/power-local-llm/karakeep-review): 네이티브 iOS·Android 앱을 갖춘 셀프 호스팅 북마크·노트 앱으로, OpenAI 또는 로컬 Ollama 엔드포인트를 통한 AI 태깅을 제공합니다. 한계: Docker로 서버를 직접 운영해야 하며, 태깅은 Ollama를 고를 때만 로컬입니다.',
          '[Linkwarden](/ko/power-local-llm/linkwarden-review): 저장한 모든 페이지의 사본을 보관하고, 내가 설정한 AI 모델로 링크에 태그를 달 수 있으며, 셀프 호스팅 또는 유료 Cloud 에디션으로 제공됩니다. 한계: iPhone 앱은 클라이언트이며 AI 단계는 서버에서 실행됩니다.',
          '[Lyonesse](/ko/power-local-llm/lyonesse-review)와 [Cloak: Local AI](/ko/power-local-llm/cloak-local-ai-review): 녹음을 노트로 바꾸거나(Lyonesse) 사진, 위치, 음성 메모로 주간 요약을 만듭니다(Cloak). 한계: 둘 다 클로즈드 소스입니다.',
        ],
      },
      health: {
        id: 'health-wellness',
        title: '건강과 웰니스 질문',
        content:
          '**리뷰된 iPhone 앱 중 하나가 기기의 Apple Intelligence로 Apple 건강 데이터에 대한 질문에 답하며, 우리 iPhone 앱 중 유일한 건강 앱입니다.** 건강 데이터는 민감한 개인 데이터이며, 소형 언어 모델은 의사가 아닙니다.',
        items: [
          '[Pajdo](/ko/power-local-llm/pajdo-review): Apple 건강 데이터를 여덟 가지 기분 중 하나로 바꿔 보여 주며, 웹사이트에 따르면 그 데이터에 대한 질문에 기기의 Apple Intelligence로 답하는 무료 iPhone, iPad, Apple Watch 앱. 무료 요금제는 주 5회 질문을 포함하고, Pro는 한도를 없애며 운동 계획과 진료 방문 리포트를 추가합니다. 한계: 클로즈드 소스, iOS 26 이상이며, 온디바이스라는 주장은 개발자의 말에 의존합니다.',
          '채팅 장들의 범용 채팅 앱도 수면, 운동, 영양을 일반적인 수준에서 논의할 수 있습니다. 한계: 앱이 권한을 요청하지 않는 한 건강 데이터에 접근할 수 없으며, 소형 모델은 틀린 사실을 자신 있게 말할 수 있습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '온디바이스 답변은 의학적 조언이 아니며 의사를 대신할 수 없습니다. 증상, 심박수 경고, 약 관련 질문을 해석하는 데 쓰지 마십시오. Apple 건강에 접근 권한을 주기 전에 앱의 개인정보 처리방침을 읽으십시오.',
          },
        ],
      },
      roleplay: {
        id: 'roleplay-companions',
        title: '롤플레이와 컴패니언 앱, 콘텐츠 안전 주의사항',
        content:
          '**롤플레이와 컴패니언 채팅은 iPhone 로컬 AI 앱 시장의 큰 부분을 차지하며, 앱마다 모델이 폰에서 실행되는지, 어떤 콘텐츠를 허용하는지, 미성년자를 어떻게 다루는지가 크게 다릅니다.** 로컬이라고 해서 검열이 있는 것은 아니고, 클라우드라고 해서 더 안전한 것도 아닙니다. 나나 가족이 설치하기 전에 연령 등급과 성인 콘텐츠 설정을 읽으십시오. 데스크톱 프런트엔드는 [롤플레이용 SillyTavern vs Agnai vs RisuAI](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)를 참조하십시오.',
        items: [
          '[Castmates](/ko/power-local-llm/castmates-review): 기성 캐릭터 35개, 커스텀 캐릭터, 계정 불필요의 무료 iPhone 앱. 개발자는 약 1.9 GB를 내려받은 뒤 llama.cpp로 실행되는 Impish Llama 3B(Q4_K_M)를 명시합니다. Pro 요금제는 일일 메시지 한도를 없애고 선택적인 성인 전용 Mature 모드를 엽니다. 한계: 클로즈드 소스이므로 온디바이스라는 주장은 개발자의 말에 의존합니다.',
          '[Frankly AI](/ko/power-local-llm/frankly-ai-review): 작업별 페르소나를 갖춘 온디바이스 모델, 계정 불필요, 무료 일일 한도. 한계: 페르소나는 작업 중심이며 Pro가 앱의 나머지를 엽니다.',
          '[Layla](/ko/power-local-llm/layla-review): 롤플레이 캐릭터, 음성, 기기 내 이미지 생성을 갖춘 페르소나 중심 AI 컴패니언. 한 번 $19.99. 한계: 별도로 활성화하는 선택적 Layla Cloud 모드가 있습니다.',
          '[Secret AI](/ko/power-local-llm/secret-ai-review): GGUF, MNN, MLX 모델의 커스텀 캐릭터. 제작사는 채팅, 캐릭터, 사진이 비공개로 유지된다고 밝힙니다. 한계: 개인정보 처리방침에 따르면 MCP 도구와 원격 서버가 데이터를 기기 밖으로 보낼 수 있습니다.',
          '[HiWaifu](/ko/power-local-llm/hiwaifu-review): 장기 기억, 로어북, 그룹 채팅을 갖춘 롤플레이, 18+ 등급. 한계: 클라우드 서비스로 보이며, 목록에는 모델이 어디서 실행되는지 나와 있지 않습니다.',
          '[Swerve](/ko/power-local-llm/swerve-ai-review): 커뮤니티 캐릭터와 분기를 갖춘 스토리·캐릭터 채팅. 한계: 목록에 따르면 온디바이스 AI가 아니라 온라인 서비스입니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '쉬운 말로 정리한 안전 주의사항입니다. 첫째, 연령: 이 앱들 중 여럿은 App Store 18+ 등급이나 성인 전용 모드가 있으며, 온디바이스 모델에는 믿을 만한 서버 측 필터가 없습니다. 둘째, 프라이버시: 클라우드 롤플레이 앱은 대화를 서비스로 보내고, 로컬 앱도 분석 정보를 보낼 수 있습니다. 셋째, 정서적 의존: 컴패니언 채팅은 개인적으로 느껴질 수 있지만 그것은 설계상의 특징이지 관계가 아닙니다. 넷째, 실제 데이터: 주소, 건강 정보, 다른 사람의 사적인 정보를 롤플레이 채팅에 입력하지 마십시오. 자녀의 iPhone에서는 앱 자체 설정을 믿지 말고 Apple의 스크린 타임 콘텐츠 및 앱 등급 제한을 사용하십시오.',
          },
        ],
      },
      smartHome: {
        id: 'smart-home-agents',
        title: '스마트홈과 에이전트',
        content:
          '**iPhone에서 스마트홈 AI와 에이전트는 거의 항상 집 서버에서 실행되는 소프트웨어의 클라이언트입니다. iOS가 모델이나 에이전트를 백그라운드에서 계속 실행해 주지 않기 때문입니다.** 폰은 마이크, 화면, 리모컨 역할을 하고, 오래 걸리는 작업은 집 서버가 합니다. 자율 로컬 에이전트가 실용적인지에 대한 솔직한 검토는 [자율 로컬 에이전트는 실제로 작동하는가?](/ko/power-local-llm/autonomous-local-agents-actually-work)를 참조하십시오.',
        items: [
          '[Home Assistant Assist](/ko/power-local-llm/home-assistant-assist-review): Home Assistant 안의 음성 어시스턴트로, Whisper, Piper, Wyoming으로 완전히 로컬이며 선택적 클라우드와 Ollama LLM 에이전트를 지원합니다. 한계: 독립형 앱이 아니며, 완전한 로컬 파이프라인에는 Home Assistant OS가 필요합니다.',
          '[Scrypted](/ko/power-local-llm/scrypted-review): 카메라를 HomeKit, Google Home, Home Assistant로 스트리밍하는 오픈소스 카메라·NVR 플랫폼으로, llama.cpp를 통한 선택적 로컬 LLM 요약을 제공합니다. 한계: 내 서버에서 실행되며, 다른 사람이 찍힌 카메라 영상에는 여러 지역에서 법적 의무가 따릅니다.',
          '[Nekoni](/ko/power-local-llm/nekoni-review): 내가 소유한 컴퓨터에서 실행하는 셀프 호스팅 개인 에이전트(Ollama, 문서, 예약 스킬)로, iPhone이나 브라우저에서 직접 암호화 연결로 채팅합니다. 한계: 항상 켜져 있는 Mac 또는 Linux 머신이 필요합니다.',
          '[Kai 9000](/ko/power-local-llm/kai-9000-review)과 [LLM Hub](/ko/power-local-llm/llm-hub-review): 각각 영구 메모리를 갖춘 어시스턴트와 MCP를 지원하는 에이전트. 한계: 도구 사용과 웹 검색은 네트워크 호출을 추가하므로 오프라인 기능이 아닙니다.',
          '[Atomic Bot](/ko/power-local-llm/atomic-bot-review): 오픈소스 [OpenClaw 리뷰](/ko/power-local-llm/openclaw-review) 에이전트 프레임워크를 데스크톱과 모바일용으로 패키징하며 로컬 또는 클라우드에서 실행할 수 있습니다. 한계: 이 가이드에서 업데이트가 뜸하다고 표시됨(마지막 업데이트 2026년 5월 26일).',
        ],
      },
      remote: {
        id: 'remote-mode',
        title: '원격 모드: 내 서버를 위한 씬 클라이언트로 쓰는 iPhone',
        content:
          '**원하는 모델에 비해 iPhone이 너무 작다면, 집의 Mac이나 PC에서 모델을 실행하고 iPhone을 화면으로 쓰십시오.** iPhone에서 7B-70B 모델에 이르는 일반적인 경로입니다. Ollama의 다운로드 페이지에는 macOS, Windows, Linux만 나오고 iPhone 앱은 없으므로 서버는 다른 곳에 둡니다(우리 iPhone 로드업에 기록되어 있습니다). 서버 쪽은 [Apple Silicon 로컬 LLM 가이드](/ko/local-llms/apple-silicon-local-llm-guide-2026), [Mac에서 MLX vs Ollama vs llama.cpp](/ko/local-llms/mlx-vs-ollama-vs-llama-cpp-mac), [실행·서빙 도구 비교](/ko/power-local-llm/local-llm-run-serve-compared)를 참조하십시오.',
        columns: ['앱', '연결 대상', '휴대폰에서도 모델 실행'],
        rows: [
          {
            '앱': '[Reins](/ko/power-local-llm/reins-review)',
            '연결 대상': 'Ollama, LM Studio, OpenAI 호환',
            '휴대폰에서도 모델 실행': '예, MLX 모델',
          },
          {
            '앱': '[Enchanted](/ko/power-local-llm/enchanted-review)',
            '연결 대상': 'Ollama만',
            '휴대폰에서도 모델 실행': '아니요',
          },
          {
            '앱': '[OpenClient](/ko/power-local-llm/openclient-review)',
            '연결 대상': 'Ollama, LiteLLM, OpenAI 호환',
            '휴대폰에서도 모델 실행': '아니요',
          },
          {
            '앱': '[Chapper](/ko/power-local-llm/chapper-review)',
            '연결 대상': 'LM Studio, Ollama, llama.cpp 서버',
            '휴대폰에서도 모델 실행': '예, $4.99 추가 구매',
          },
          {
            '앱': '[Tina](/ko/power-local-llm/tina-review)',
            '연결 대상': 'Ollama, llama.cpp, ComfyUI',
            '휴대폰에서도 모델 실행': '예',
          },
          {
            '앱': '[LM Mini](/ko/power-local-llm/lm-mini-review)',
            '연결 대상': 'LM Studio, Ollama, Jan AI, oMLX',
            '휴대폰에서도 모델 실행': '예',
          },
          {
            '앱': '[Arbiter](/ko/power-local-llm/arbiter-local-ai-chat-review)',
            '연결 대상': 'LM Studio, Ollama, Arbiter for Mac',
            '휴대폰에서도 모델 실행': '예',
          },
          {
            '앱': '[LocalMind](/ko/power-local-llm/localmind-review)',
            '연결 대상': 'Ollama, LM Studio, OpenRouter',
            '휴대폰에서도 모델 실행': '예',
          },
          {
            '앱': '[Liquid Apollo](/ko/power-local-llm/liquid-apollo-review)',
            '연결 대상': 'LM Studio, Ollama, OpenRouter',
            '휴대폰에서도 모델 실행': '예, LFM2',
          },
          {
            '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
            '연결 대상': 'Mac의 LM Studio(LM Link)',
            '휴대폰에서도 모델 실행': '예',
          },
          {
            '앱': '[MLXHub](/ko/power-local-llm/mlxhub-review)',
            '연결 대상': 'Wi-Fi에서 모델 서빙(Plus)',
            '휴대폰에서도 모델 실행': '예',
          },
          {
            '앱': '[Nekoni](/ko/power-local-llm/nekoni-review)',
            '연결 대상': '내 컴퓨터의 에이전트',
            '휴대폰에서도 모델 실행': '아니요',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text:
              '집 밖에서는 서버로 가는 안전한 경로가 필요합니다. Ollama는 기본적으로 인증을 요구하지 않으며 공유기 포트로 공용 인터넷에 노출해서는 안 되므로, Tailscale 같은 비공개 메시 VPN이 흔한 선택입니다. 연결하기 전에 각 클라이언트의 리뷰와 설정에서 HTTPS와 API 키 지원 여부를 확인하십시오.',
          },
          {
            type: 'tip',
            text:
              '위 클라이언트 중 여러 개는 폰에서 모델을 불러올 수도 있다고 밝히므로 앱 하나로 쓰기 좋습니다. 작은 모델은 오프라인으로, 큰 모델은 집에서 쓰는 방식입니다. 방화벽과 오프라인 설정은 [방화벽 뒤와 오프라인에서의 로컬 AI](/ko/power-local-llm/local-ai-behind-firewall-offline-2026)를 읽어 보십시오.',
          },
        ],
      },
      developers: {
        id: 'developer-paths',
        title:
          '개발자 경로: Core ML, Core AI, MLX Swift, llama.cpp, MLC, ExecuTorch, Foundation Models',
        content:
          '**iPhone AI 기능을 만드는 개발자는 Apple의 자체 모델, 내 모델을 위한 Apple의 런타임, 크로스 플랫폼 엔진 중에서 고릅니다.** 이 선택이 적용되는 폰, 언어, 스토어 규정을 결정합니다. 이 장은 방향을 잡는 용도일 뿐이며, 만들기 전에 각 프로젝트의 문서를 읽으십시오.',
        items: [
          '**Foundation Models 프레임워크:** 이미지, Vision 도구, Dynamic Profiles와 Language Model 프로토콜을 통한 클라우드 제공자를 지원하는 온디바이스 모델용 Apple의 네이티브 Swift API(Apple, WWDC26 iOS 가이드). Apple Intelligence 하드웨어가 필요합니다. 문서: [Foundation Models](https://developer.apple.com/documentation/FoundationModels).',
          '**Core ML:** 변환한 모델을 CPU, GPU, Neural Engine에서 실행하는 Apple의 프레임워크로, 비전, 오디오, 소형 모델의 오랜 표준 경로입니다. [AI CutoutWerk](/ko/power-local-llm/ai-cutoutwerk-review)는 Core ML 세그멘테이션 모델을 내장합니다. 문서: [Core ML](https://developer.apple.com/documentation/coreml).',
          '**Core AI:** Apple이 iOS 27과 함께 소개한 새 프레임워크로, 통합 메모리와 Neural Engine을 사용하고 사전 컴파일을 거쳐 내 모델을 기기에 가져옵니다. 이 가이드의 대부분의 앱에는 너무 새롭습니다. [WWDC26 iOS 가이드](https://developer.apple.com/wwdc26/guides/ios/)를 참조하십시오.',
          '**MLX Swift:** [Locally AI](/ko/power-local-llm/locally-ai-review), [fullmoon](/ko/power-local-llm/fullmoon-review), [MLXHub](/ko/power-local-llm/mlxhub-review) 뒤에 있는 Swift용 Apple MLX 배열 프레임워크. [mlx-swift](https://github.com/ml-explore/mlx-swift). Python 쪽은 [MLX-LM 설명](/ko/power-local-llm/mlx-lm-explained)을 참조하십시오.',
          '**llama.cpp:** [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)와 [Pocket AI](/ko/power-local-llm/pocket-ai-review) 뒤에 있는, Metal로 GGUF 파일을 실행하는 C/C++ 엔진. [llama.cpp](https://github.com/ggml-org/llama.cpp).',
          '**MLC LLM:** iOS 배포 문서와 레퍼런스 앱 [MLC Chat](/ko/power-local-llm/mlc-chat-review)을 갖춘 컴파일러 기반 런타임. [MLC LLM](/ko/power-local-llm/mlc-llm-explained)과 [MLC iOS 문서](https://llm.mlc.ai/docs/deploy/ios.html)를 참조하십시오.',
          '**ExecuTorch:** [Private Mind](/ko/power-local-llm/private-mind-review)에서 React Native ExecuTorch를 통해 쓰이고 [Noema](/ko/power-local-llm/noema-review)가 지원하는 PyTorch의 온디바이스 런타임. [ExecuTorch](https://github.com/pytorch/executorch).',
          '**LiteRT-LM:** [Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review) 뒤에 있는 Google의 런타임([LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)).',
          '**SDK:** [RunAnywhere](/ko/power-local-llm/runanywhere-review)(LLM, 음성 인식, 음성 합성, 음성 활동 감지. 상업 조건이 있는 커스텀 라이선스), [Llamatik](/ko/power-local-llm/llamatik-review)(Kotlin Multiplatform, MIT), [SwiftLM](/ko/power-local-llm/swiftlm-review)(SwiftBuddy iOS 컴패니언 앱을 갖춘 Apple silicon Mac용 Swift MLX 서버).',
          '**TestFlight 베타:** 초기 빌드를 테스터에게 무료로 배포하는 방법으로, 빌드는 만료되므로 이를 고려해 계획하십시오. 릴리스 빌드에는 Apple의 App Review 규정이 여전히 적용됩니다.',
        ],
      },
      privacy: {
        id: 'privacy-telemetry',
        title: '프라이버시와 텔레메트리의 현실',
        content:
          '**"기기에서 실행됩니다"와 "아무것도 보내지 않습니다"는 서로 다른 주장이며, 프라이버시 보장이 되는 것은 두 번째뿐입니다.** Apple의 App Store 개인정보 보호 라벨은 개발자가 작성하므로, 개발자가 앱이 한다고 말하는 내용을 설명합니다. 온디바이스 모델도 충돌 보고서, 사용 이벤트, 선택적 웹 검색, 모델 다운로드를 보내는 앱 안에 있을 수 있습니다. 여기의 앱 수준 프라이버시 관련 서술은 모두 연결된 리뷰에 요약된 각 앱의 개인정보 처리방침, App Store 라벨, 제작사 페이지에서 가져왔으며 네트워크 분석으로 검증하지 않았습니다. 더 자세한 체크리스트는 [로컬 LLM 보안·프라이버시 체크리스트](/ko/local-llms/local-llm-security-privacy-checklist)를 참조하십시오.',
        items: [
          '**"텔레메트리 없음"이 뜻할 수 있는 것:** 앱에 분석 SDK가 없다는 것입니다. 모델 다운로드(호스트가 내 요청을 봄), App Store, 선택적 웹 검색, 내가 연결한 원격 서버, 앱 데이터가 포함된 백업은 포함하지 않습니다.',
          '**우리 리뷰의 라벨:** [Oscilla](/ko/power-local-llm/oscilla-review)에는 Apple의 "Data Not Collected" 라벨이 붙어 있고, [Google AI Edge Gallery](/ko/power-local-llm/google-ai-edge-gallery-review)는 라벨에 일부 기기 진단 정보가 나오며, [MemoryAI](/ko/power-local-llm/memoryai-review)와 [Llamatik](/ko/power-local-llm/llamatik-review)은 각 방침에 따르면 채팅 내용 없이 사용 이벤트나 분석 정보와 충돌 보고서를 보냅니다.',
          '**"오프라인"을 깨는 선택 기능:** [Compass - Local AI](/ko/power-local-llm/compass-local-ai-review)의 웹 검색(DuckDuckGo 또는 Brave), [Private Mind](/ko/power-local-llm/private-mind-review)의 Web 토글, [Secret AI](/ko/power-local-llm/secret-ai-review)의 MCP 도구, [Liquid Apollo](/ko/power-local-llm/liquid-apollo-review)의 OpenRouter 모드.',
          '**기본이 클라우드인 앱:** [Kai 9000](/ko/power-local-llm/kai-9000-review)은 리뷰에 따르면 기본적으로 메시지를 클라우드 서비스로 보내며 온디바이스 모델을 내려받은 뒤에만 로컬로 실행됩니다. [Swerve](/ko/power-local-llm/swerve-ai-review)는 온라인 서비스로 문서화되어 있고, [HiWaifu](/ko/power-local-llm/hiwaifu-review)는 그런 서비스로 보이며(목록에는 모델이 어디서 실행되는지 나와 있지 않음), [AquaVoice](/ko/power-local-llm/aquavoice-review)는 클라우드 받아쓰기입니다.',
          '**방침과 버전의 어긋남:** [LM Mini](/ko/power-local-llm/lm-mini-review)에는 개인정보 처리방침에 따르면 LM Studio 연결만 설명하는 2025년 8월자 버전이 있고, [Secret AI](/ko/power-local-llm/secret-ai-review)의 방침은 도구를 추가하기 전인 2025년 5월에 마지막으로 갱신되었습니다. 방침 날짜를 앱 버전과 대조하십시오.',
          '**직접 확인하는 세 단계:** (1) Wi-Fi에서 모델을 내려받은 뒤 에어플레인 모드를 켜고 앱을 테스트합니다. (2) 일주일 동안 평소처럼 폰을 쓴 뒤 설정 > 개인정보 보호 및 보안 > 앱 개인정보 보호 리포트를 엽니다. Apple에 따르면 이 리포트는 앱이 권한을 어떻게 쓰고 네트워크 활동이 어떤지 보여 줍니다. (3) 개인정보 라벨과 방침에서 분석 항목을 읽고, 코드를 직접 살펴보고 싶다면 오픈소스 앱을 선호하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text:
              'PromptQuorum 리뷰는 각 앱의 자료가 말하는 내용과 우리가 테스트했는지 여부를 밝힙니다. 리뷰에 "직접 테스트하지 않음"이라고 되어 있다면 프라이버시 관련 서술은 우리가 아니라 개발자의 것입니다. 이 가이드는 어떤 앱에서도 네트워크 캡처를 실행하지 않았습니다.',
          },
        ],
      },
      batteryThermal: {
        id: 'battery-thermal-memory',
        title: '배터리, 발열, 메모리 한계',
        content:
          '**텍스트를 생성하는 동안 칩이 계속 일하므로 모델이 실행되는 동안 눈에 띄는 발열과 배터리 소모를 예상하십시오. 가끔 쓰는 정도라면 부담이 적습니다.** PromptQuorum은 어떤 iPhone에서도 전력 소모나 배터리 사용량을 측정하지 않았으며, 인용할 수 있는 공개 수치도 찾지 못했습니다.',
        items: [
          '**발열:** 지속적인 생성은 iOS가 클럭 속도를 낮추게 만들 수 있어 초당 토큰 수가 떨어집니다. 시간은 폰, 케이스, 충전 상태, 실온에 따라 다르며 우리는 측정하지 않았습니다.',
          '**가이드라인 2.4.2:** Apple은 개발자에게 앱이 배터리를 빠르게 소모하거나 과도한 열을 내서는 안 된다고 안내하므로, 잘 만든 앱은 길이를 제한하거나 긴 실행을 일시 중지합니다.',
          '**메모리:** 모델은 로드되어 있는 동안 RAM에 올라 있습니다. iOS가 다른 앱에 메모리가 필요하면 채팅 앱을 종료할 수 있고 대화 상태가 사라질 수 있으므로, 모델을 로드하기 전에 다른 무거운 앱을 닫으십시오.',
          '**생성 중 충전**은 열을 더하므로, 폰이 뜨거우면 멈추고 직사광선이나 뜨거운 차 안은 피하십시오.',
          '**저장 공간:** 3-4B 모델 하나는 약 2.5-3.7 GB이므로 앱 세 개에 모델 세 개씩이면 대략 10 GB를 씁니다. 앱 하나와 모델 한두 개만 두십시오.',
          '**저전력 모드**는 iOS가 배터리를 아끼려고 성능을 낮추므로 생성 속도를 늦출 수 있으니, 긴 세션에서는 끄십시오.',
        ],
      },
      partly: {
        id: 'works-partly',
        title: '일부만 가능한 것',
        content:
          '**"부분 가능"은 기능이 iPhone에 있지만, 습관으로 삼기 전에 알아야 할 제한이 있다는 뜻입니다.**',
        items: [
          '**Siri로 핸즈프리 음성:** 단축어가 앱을 호출할 수 있지만 Siri는 Siri로 남으며, 로컬 모델을 시스템 어시스턴트로 만들 수는 없습니다. Apple의 Siri AI는 EU에서 처음에는 제공되지 않는 별도의 iOS 27 베타입니다.',
          '**이미지 생성:** 소형 확산 모델로 가능하지만 느리고 저장 공간을 많이 쓰며 폰이 따뜻해집니다. [Draw Things](/ko/power-local-llm/draw-things-review)는 선택적 클라우드 모드도 제공합니다.',
          '**사진 검색:** AI 단계는 폰에서 직접 켜거나([Ente Photos](/ko/power-local-llm/ente-photos-review)) 내가 호스팅하는 서버에서 실행됩니다([Immich](/ko/power-local-llm/immich-review)).',
          '**노트와 북마크:** iPhone 앱은 클라이언트이며 모델 작업은 서버나 내가 고른 제공자에서 이루어집니다.',
          '**에이전트:** 짧은 포그라운드 작업은 되지만, 오래 실행되거나 예약된 에이전트에는 집 서버가 필요합니다([Nekoni](/ko/power-local-llm/nekoni-review)).',
          '**건강 질문:** Apple의 온디바이스 모델로 가능하지만([Pajdo](/ko/power-local-llm/pajdo-review)) 의학적 조언을 대신할 수는 없습니다.',
          '**긴 문서:** 소형 모델은 컨텍스트 창이 작으므로 큰 PDF는 분할 처리하거나 서버가 필요합니다.',
        ],
      },
      notPossible: {
        id: 'not-possible',
        title: 'iPhone에서 불가능하거나 아직 안 되는 것',
        content:
          '**사람들이 iPhone 로컬 AI에 가장 자주 바라지만 리뷰된 iPhone 앱 중 오늘 그것을 충족하는 것은 없는 바람들입니다.** 일부는 하드웨어나 App Store 규정의 엄격한 한계이고, 일부는 Apple과 앱 제작사가 Core AI 같은 새 프레임워크를 내놓으면서 메워질 수 있는 공백입니다.',
        columns: ['바람', '상태', '이유', '대안'],
        rows: [
          {
            '바람': '폰에서 30B-70B 모델',
            '상태': '불가능',
            '이유': 'iPhone이 가진 것보다 훨씬 많은 RAM 필요',
            '대안': '집 서버로 원격 모드',
          },
          {
            '바람': '클라우드 수준의 추론과 코드',
            '상태': '아직 불가',
            '이유': '소형 모델은 여러 단계 작업에 실패',
            '대안': '어려운 질문은 클라우드 앱',
          },
          {
            '바람': '폰에서 Ollama나 Docker 실행',
            '상태': '불가능',
            '이유': 'iPhone용 Ollama·Docker 앱 없음, 샌드박스 제한',
            '대안': 'Mac이나 PC에서 실행',
          },
          {
            '바람': '내 모델로 Siri 대체',
            '상태': '불가능',
            '이유': 'Siri는 시스템이 제어',
            '대안': '앱을 호출하는 단축어',
          },
          {
            '바람': '상시 실행 백그라운드 에이전트',
            '상태': '불가능',
            '이유': '백그라운드 서비스 제한(2.5.4)',
            '대안': '집 서버의 에이전트',
          },
          {
            '바람': '폰에서 모델 파인튜닝',
            '상태': '비현실적',
            '이유': '메모리, 발열, 앱 도구 없음',
            '대안': 'Mac이나 GPU에서 학습',
          },
          {
            '바람': 'Mac, iPad와 채팅 동기화',
            '상태': '대체로 안 됨',
            '이유': '대부분의 앱에서 기록은 기기별',
            '대안': '서버 웹 UI(예: Open WebUI)',
          },
          {
            '바람': 'iPhone에서 AnythingLLM Mobile',
            '상태': '아직 불가',
            '이유': '리뷰 기준 iOS 앱 미출시',
            '대안': '내 서버에 브라우저로 접속',
          },
          {
            '바람': 'iPhone 14에서 Apple Intelligence',
            '상태': '불가능',
            '이유': 'Apple의 기기 목록에 없음',
            '대안': '서드파티 모델 앱',
          },
          {
            '바람': '보컬이 있는 음악 생성',
            '상태': '아직 불가',
            '이유': 'Murmur는 연주곡만 생성',
            '대안': '데스크톱 도구',
          },
          {
            '바람': '앱이 비공개라는 증명',
            '상태': '라벨로는 불가',
            '이유': '라벨은 개발자가 직접 선언',
            '대안': '에어플레인 모드와 앱 개인정보 보호 리포트',
          },
        ],
      },
      decision: {
        id: 'decision-path',
        title: '선택 가이드: 이 iPhone으로 이것을 하고 싶다면',
        content:
          '**폰 등급과 목표로 내 행을 찾은 뒤 연결된 장을 여십시오.** 추천은 순위가 아니라 우리 리뷰에서 가져온 출발점이며, 유지보수 장에서 업데이트가 뜸한 앱은 더 나은 대안이 없을 때만 언급합니다.',
        columns: ['가지고 있는 기기', '원하는 것', '여기서 시작'],
        rows: [
          {
            '가지고 있는 기기': 'RAM 4 GB iPhone(12, 13, SE)',
            '원하는 것': '일반 채팅',
            '여기서 시작': '집 서버와 Reins 또는 Enchanted',
          },
          {
            '가지고 있는 기기': 'RAM 6 GB iPhone(14, 15)',
            '원하는 것': '무료 오프라인 채팅',
            '여기서 시작': '1-2B 모델로 PocketPal AI',
          },
          {
            '가지고 있는 기기': 'RAM 8 GB iPhone(16, 17)',
            '원하는 것': '무료 오프라인 채팅',
            '여기서 시작': 'PocketPal AI 또는 Locally AI',
          },
          {
            '가지고 있는 기기': 'RAM 8 GB iPhone',
            '원하는 것': 'Siri와 단축어',
            '여기서 시작': 'Private LLM 또는 Locally AI',
          },
          {
            '가지고 있는 기기': 'RAM 12 GB iPhone(17 Pro)',
            '원하는 것': '폰에서 가장 큰 모델',
            '여기서 시작': 'Noema 또는 Gemma 4를 쓰는 Gallery',
          },
          {
            '가지고 있는 기기': 'Apple Intelligence 지원 폰',
            '원하는 것': '모델 다운로드 없이',
            '여기서 시작': 'Compass 또는 Locally AI(Apple 모델)',
          },
          {
            '가지고 있는 기기': '모든 iPhone',
            '원하는 것': '회의 전사',
            '여기서 시작': 'Whisper Notes 또는 Lyonesse',
          },
          {
            '가지고 있는 기기': '모든 iPhone',
            '원하는 것': 'PDF 몇 개와 채팅',
            '여기서 시작': 'Private Mind 또는 MemoryAI',
          },
          {
            '가지고 있는 기기': '모든 iPhone',
            '원하는 것': '번역',
            '여기서 시작': 'On-Device AI Translator',
          },
          {
            '가지고 있는 기기': 'RAM 8 GB 이상 iPhone',
            '원하는 것': '텍스트로 이미지 생성',
            '여기서 시작': 'Draw Things',
          },
          {
            '가지고 있는 기기': '모든 iPhone',
            '원하는 것': '사진 검색, 자체 서버',
            '여기서 시작': 'Immich',
          },
          {
            '가지고 있는 기기': '모든 iPhone, 집 PC',
            '원하는 것': '7B-70B 모델',
            '여기서 시작': 'Reins, OpenClient 또는 LM Mini',
          },
          {
            '가지고 있는 기기': '모든 iPhone',
            '원하는 것': '스마트홈 음성',
            '여기서 시작': 'Home Assistant Assist',
          },
          {
            '가지고 있는 기기': '청소년이 쓰는 iPhone',
            '원하는 것': '안전한 채팅',
            '여기서 시작': '스크린 타임 제한 설정 후 안전 주의사항 읽기',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '**RAM 등급이 아니라 파일 크기로 모델을 고르는 것.** 내려받아지는 파일도 iOS가 종료할 수 있습니다. 크기를 등급 표에 맞추고 앱의 벤치마크로 테스트하십시오.',
          '**클라우드 수준의 품질을 기대하는 것.** 초안 작성, 요약, 번역, 간단한 Q&A에는 소형 모델을, 어려운 추론에는 클라우드나 집 서버 모델을 쓰십시오.',
          '**"Apple Intelligence"를 "오프라인"으로 여기는 것.** Apple Intelligence는 Private Cloud Compute를 쓸 수 있으니 무엇이 요청을 처리하는지 확인하십시오.',
          '**테스트 없이 개인정보 라벨을 믿는 것.** 프라이버시 장의 에어플레인 모드와 앱 개인정보 보호 리포트 확인을 해 보십시오.',
          '**앱을 전부 설치하는 것.** 각 앱은 수 GB의 모델 파일을 따로 보관하므로 용도당 앱 하나만 고르십시오.',
          '**업데이트가 뜸해진 앱을 구매하는 것.** 특히 유지보수 장의 앱은 버전 기록을 확인하십시오.',
          '**집 서버를 인터넷에 노출하는 것.** 비공개 VPN 메시를 쓰십시오. Ollama는 기본적으로 인증을 요구하지 않습니다.',
          '**공용 폰이나 자녀의 폰에서 롤플레이 앱을 검토 없이 두는 것.** 먼저 연령 등급과 성인 콘텐츠 설정을 읽으십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'Apple Intelligence 기기, 언어, Siri AI, Private Cloud Compute: [Apple Intelligence](https://www.apple.com/apple-intelligence/)(2026-11-13 확인).',
          'App Review 가이드라인 2.4.2, 2.5.1, 2.5.2, 2.5.4, 5.1.1, 5.1.2: [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)(2026-11-13 확인).',
          '앱 개인정보 보호 리포트 경로와 내용: [Apple Support](https://support.apple.com/en-us/102188).',
          '엔진: [MLX Swift](https://github.com/ml-explore/mlx-swift), [llama.cpp](https://github.com/ggml-org/llama.cpp), [ExecuTorch](https://github.com/pytorch/executorch), [MLC iOS documentation](https://llm.mlc.ai/docs/deploy/ios.html), [Core ML](https://developer.apple.com/documentation/coreml), [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM).',
          'iPhone RAM 수치와 참고용 속도는 [2026년 iPhone용 최고의 로컬 AI 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026)에서 가져왔으며, Apple은 iPhone RAM을 공개하지 않습니다.',
          '앱별 사실(가격, 플랫폼, 버전, 제작사 설명)은 연결된 PromptQuorum 리뷰와 디렉토리 타일에서 가져왔으며, 업데이트가 뜸하다고 표시한 앱의 마지막 업데이트 날짜는 타일에서 가져왔습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'iPhone이 AI를 완전히 오프라인으로 실행할 수 있습니까?',
            a:
              '예, 각 앱의 목록과 리뷰에 따르면 그렇습니다. Wi-Fi로 모델을 한 번 내려받은 뒤에는 PocketPal AI, Private LLM, Locally AI 같은 앱이 연결 없이 답합니다. Apple Intelligence도 기기에서 모델을 실행하지만 더 큰 요청에는 Private Cloud Compute를 쓸 수 있으므로 오프라인이 보장되지는 않습니다. 어떤 앱이든 에어플레인 모드에서 테스트하십시오.',
          },
          {
            q: '로컬 AI에는 어떤 iPhone이 필요합니까?',
            a:
              '1-2B 소형 모델에는 RAM 6 GB 이상, 3-4B 모델에는 8 GB 이상의 iPhone이 필요합니다. Apple은 RAM을 공개하지 않으므로 이 가이드의 알려진 등급을 쓰십시오. Apple Intelligence에는 Apple의 기기 목록에 있는 iPhone 15 Pro 이상이 필요합니다.',
          },
          {
            q: 'iPhone의 로컬 AI는 정말 비공개입니까?',
            a:
              '채팅은 기기에 머물 수 있지만 프라이버시는 앱에 달려 있습니다. 라벨은 개발자가 직접 선언하며, 리뷰한 여러 앱이 충돌 보고서, 사용 이벤트, 선택적 웹 요청을 보냅니다. 에어플레인 모드와 설정 > 개인정보 보호 및 보안 > 앱 개인정보 보호 리포트로 확인하십시오.',
          },
          {
            q: 'iPhone에서 Ollama를 실행할 수 있습니까?',
            a:
              '아니요. Ollama는 macOS, Windows, Linux 다운로드를 제공하며, iPhone용 Ollama나 Docker 서버는 없습니다. 컴퓨터에서 Ollama를 실행하고 Reins, Enchanted, OpenClient 같은 iPhone 클라이언트로 연결하십시오.',
          },
          {
            q: 'iPhone은 얼마나 큰 모델을 실행할 수 있습니까?',
            a:
              'RAM 8 GB 폰에서는 4비트 기준 약 3-4B 파라미터이고, 7-8B 저비트 모델은 RAM 12 GB 폰에서만 느리게 가능합니다. 6 GB 폰은 1-2B 모델이 가장 알맞습니다. 더 큰 모델은 집 서버로 원격 모드를 쓰십시오.',
          },
          {
            q: '로컬 AI가 배터리를 소모합니까?',
            a:
              '생성하는 동안에는 그렇습니다. 지속적인 생성은 프로세서를 계속 바쁘게 해 유휴 상태보다 배터리를 훨씬 빠르게 소모하고 폰이 따뜻해질 수 있습니다. PromptQuorum은 정확한 소모량을 측정하지 않았습니다. 가끔 하는 질문은 부담이 적고, 로드되어 있지만 유휴 상태인 모델은 전력을 거의 쓰지 않습니다.',
          },
          {
            q: 'iPhone에서 가장 좋은 무료 로컬 AI 앱은 무엇입니까?',
            a:
              '우리 로드업에서 무료 오픈소스 기본 선택은 PocketPal AI이며, Locally AI와 Google AI Edge Gallery가 무료 대안입니다. 알맞은 앱은 작업에 따라 다르므로 이 가이드의 선택 가이드를 이용하십시오.',
          },
          {
            q: 'Apple Intelligence는 이 앱들과 어떻게 다릅니까?',
            a:
              'Apple Intelligence는 시스템 기능과 Foundation Models 프레임워크를 쓰는 앱을 위한 Apple의 내장 모델이며, 그 모델을 바꿀 수는 없습니다. 이 가이드의 앱은 모델을 직접 고르고 내려받게 해 주며, Locally AI처럼 Apple의 모델을 앞에서 연결해 주는 앱도 있습니다.',
          },
          {
            q: 'iPhone에서 PDF와 오프라인으로 채팅할 수 있습니까?',
            a:
              '파일 몇 개라면 가능하며, 각 앱의 목록과 리뷰에 따르면 Private Mind, MemoryAI, Noema, LocalMindAI 같은 앱으로 할 수 있습니다. 소형 모델은 컨텍스트 창이 짧아 긴 문서는 불완전하게 요약될 수 있습니다. 큰 라이브러리에는 집 서버를 쓰십시오.',
          },
          {
            q: '집 밖에서도 내 집 서버를 쓸 수 있습니까?',
            a:
              '예, Tailscale 같은 비공개 VPN 메시나 다른 보안 터널과 내 서버를 지원하는 클라이언트 앱으로 가능합니다. Ollama를 공용 인터넷에 열지 마십시오. 기본적으로 인증을 요구하지 않습니다.',
          },
          {
            q: 'iPhone이 오프라인으로 이미지를 생성할 수 있습니까?',
            a:
              '예, 각 앱의 목록과 리뷰에 따르면 수 GB의 모델을 내려받은 뒤 Draw Things, Genva, Haplo AI 같은 앱으로 가능합니다. 생성은 데스크톱 GPU보다 느리고 폰이 따뜻해지며, Draw Things는 선택적 클라우드 모드도 제공합니다.',
          },
          {
            q: '롤플레이와 컴패니언 앱은 청소년에게 안전합니까?',
            a:
              '기본적으로는 아닙니다. 여럿이 18+ 등급이나 성인 전용 모드를 두고 있고, 일부는 대화를 저장하는 클라우드 서비스이며, 온디바이스 모델에는 서버 측 필터가 없습니다. Apple 스크린 타임과 앱 등급 제한을 쓰고 이 가이드의 안전 주의사항을 읽으십시오.',
          },
          {
            q: 'iPad에서도 로컬 AI가 작동합니까?',
            a:
              '대체로 그렇습니다. 이 가이드의 많은 앱이 iPad 지원을 명시하며 같은 RAM 규칙이 적용됩니다. iPad 관련 조언은 [태블릿에서 AI 실행하는 방법](/ko/power-local-llm/run-ai-on-tablet-ipad-android)을 참조하십시오.',
          },
          {
            q: '로컬 AI에서 iPhone은 Android와 어떻게 비교됩니까?',
            a:
              'iPhone은 시작하기 더 쉽고 더 제한적이며, Android는 터미널 앱을 허용하고 오픈소스 선택지가 더 많지만 폰마다 편차가 있습니다. [Android 로컬 AI 가이드](/ko/power-local-llm/local-ai-on-android-guide)와 [Galaxy vs iPhone 온디바이스 AI](/ko/local-llms/galaxy-vs-iphone-on-device-ai-2026)에서 비교하십시오.',
          },
          {
            q: '앱이 구형 iPhone에서도 Apple의 모델을 쓸 수 있습니까?',
            a:
              '아니요. Apple Intelligence는 iPhone 15 Pro부터 시작하는 Apple의 기기 목록에 있는 기기로 한정됩니다. 구형 iPhone에서는 자체 모델을 가져오는 앱을 RAM 한도 안에서 쓰십시오.',
          },
        ],
      },
      related: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[2026년 iPhone용 최고의 로컬 AI 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026): iPhone용 순위 추천, 참고용 속도, RAM 가이드.',
          '[Android 로컬 AI 가이드](/ko/power-local-llm/local-ai-on-android-guide): Android용 자매 플랫폼 가이드.',
          '[2026년 Android용 최고의 로컬 AI 앱](/ko/power-local-llm/best-local-llm-apps-android-2026): 순위가 매겨진 Android 앱.',
          '[Galaxy vs iPhone 온디바이스 AI](/ko/local-llms/galaxy-vs-iphone-on-device-ai-2026): iPhone과 Galaxy의 온디바이스 AI 비교.',
          '[태블릿에서 AI 실행하는 방법](/ko/power-local-llm/run-ai-on-tablet-ipad-android): iPad와 Android 태블릿.',
          '[최고의 모바일 LLM 모델: Phi-4 Mini vs Gemma vs SmolLM](/ko/power-local-llm/mobile-llm-models-phi4-gemma-smollm): 어떤 소형 모델을 내려받을지.',
          '[모바일 로컬 LLM](/ko/local-llms/mobile-local-llms): 모바일 로컬 LLM 기초.',
          '[Apple 온디바이스 AI vs 로컬 LLM](/ko/local-llms/apple-on-device-ai-vs-local-llms): Apple 온디바이스 AI와 오픈 로컬 모델 비교.',
          '[휴대폰에서 로컬 음성 어시스턴트 만들기](/ko/power-local-llm/voice-assistant-local-mobile-offline): 휴대폰에서의 오프라인 음성.',
          '[채팅 어시스턴트 비교](/ko/power-local-llm/local-llm-chat-assistants-compared), [음성·오디오 앱 비교](/ko/power-local-llm/local-llm-voice-audio-compared), [이미지·영상 앱 비교](/ko/power-local-llm/local-llm-images-video-compared), [지식·검색 앱 비교](/ko/power-local-llm/local-llm-knowledge-retrieval-compared): 카테고리 비교.',
          '[로컬 AI 앱 디렉토리](/ko/directory): 디렉토리에 있는 모든 로컬 AI 앱.',
        ],
      },
    },
  },
}
