// Power Local LLM — Local AI on Android: what is possible, what is not, and the apps we cover
// Slug: local-ai-on-android-guide
// EN-only in this iteration; translations follow. Platform pillar; sibling: local-ai-on-iphone-guide.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { buildOgImageObject } from '@/lib/imageObjectSchema'
import { authorPerson } from '@/lib/author'

const OG_SLUG = 'local-ai-on-android-guide'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-13',
    dateModified: '2026-11-13',
    next_refresh_due: '2027-05-13',
    last_full_refresh: '2026-11-13',
    specific_year: 2026,
    theme: 'Mobile & Edge LLMs',
    title: 'Local AI on Android in 2026: What Is Possible, What Is Not, and the Apps We Cover',
    seoTitle: 'Local AI on Android 2026: What Works, What Does Not',
    intro:
      'Android phones can run local AI offline in 2026: chat, camera questions, dictation, document Q&A and translation all work with models of roughly 1 to 4 billion parameters, and 7 to 8 billion on 12 to 16 GB phones. This guide maps the main capabilities, the hard limits, the chip and RAM reality, and links the Android apps in our directory to the job each does best.',
    metaDescription:
      'Local AI on Android in 2026: what runs offline, what does not, RAM and chip limits, and the apps we cover mapped to chat, voice, vision, documents and more.',
    heroImage: '/images/local-ai-on-android-guide-hero-en.webp',
    twitterDescription:
      'What local AI can and cannot do on an Android phone in 2026: capability map, RAM tiers, chip reality, the Android apps we cover by job, and an honest not-possible list.',
    current_models_mentioned: [
      'Gemini Nano',
      'Gemma 4 E2B',
      'Gemma 4 E4B',
      'Gemma 3n E2B',
      'Gemma 3 1B',
      'Qwen3 0.6B',
      'Qwen3 1.7B',
      'Qwen3 4B',
      'Phi-4 Mini',
      'Llama 3.2 3B',
      'SmolLM2 1.7B',
    ],
    current_hardware_mentioned: [
      'Snapdragon 8 Elite',
      'Snapdragon 8 Elite Gen 5',
      'Google Tensor G5 (Pixel 10)',
      'MediaTek Dimensity 9500',
      'Samsung Exynos 2600',
      'Samsung Galaxy S26',
    ],
    audience:
      'Android owners who want to know what on-device AI can really do on their phone, which app fits which job, and where the hard limits are, from first-time users to developers choosing a runtime.',
    readTime: '45 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI on Android',
    targetKeywords: [
      'local ai on android',
      'run llm on android offline',
      'on-device ai android 2026',
      'offline ai app android',
      'android local llm what is possible',
      'gemini nano ml kit genai',
      'best offline ai apps android',
    ],
    leadAnswerBlock:
      '**Yes: a recent Android phone can run a useful local AI offline, but only small models.** Expect 1 to 4 billion parameters on 6 to 8 GB of RAM and 7 to 8 billion at low-bit quantization on 12 to 16 GB. Chat, camera questions, dictation, document Q&A and translation work; frontier-model quality, long contexts, sustained speed and an always-on background assistant do not. Android adds options that are broader or easier than on iPhone: installing apps outside the store, Termux, and running the phone as a local API server.',
    quickAnswerTop: {
      en: {
        question: 'Can I run local AI offline on my Android phone?',
        answer:
          'Yes. Install an on-device app such as PocketPal AI or Google AI Edge Gallery, download a 1 to 4 billion parameter model on Wi-Fi, then switch to airplane mode. It works for chat, dictation, translation and document questions. Quality sits well below cloud AI, and speed depends on RAM, chip and heat.',
        bullets: [
          '6 to 8 GB RAM: 1 to 4 billion parameter models',
          '12 to 16 GB RAM: 7 to 8 billion at low-bit quantization',
          'Gemini Nano via ML Kit: Pixel 9 and later, Galaxy S25 and later',
          'Most sideloaded apps use CPU or GPU, not the NPU',
          'Phone as thin client to your own Ollama server also works',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'The Capability Map: What Works, Partly Works, Does Not', anchor: '#capability-map' },
      { label: 'How This Guide Was Built', anchor: '#method' },
      { label: 'RAM Tiers: Which Model Size Your Phone Can Hold', anchor: '#ram-tiers' },
      { label: 'Chips: Snapdragon, Tensor, Dimensity, Exynos', anchor: '#chips' },
      { label: 'The Four Main Engines Behind Android AI Apps', anchor: '#engines' },
      { label: 'Where Android Gives You More Room Than iPhone', anchor: '#android-vs-iphone' },
      { label: 'Chat Assistants in Our Directory, by Type', anchor: '#chat-apps' },
      { label: 'Vision and Camera Questions', anchor: '#vision-camera' },
      { label: 'Voice: Dictation, Transcription, Read-Aloud, Assistants', anchor: '#voice' },
      { label: 'Documents, PDFs and RAG', anchor: '#documents-rag' },
      { label: 'Translation', anchor: '#translation' },
      { label: 'Image Generation and Editing', anchor: '#image-generation' },
      { label: 'Photos and Gallery Search', anchor: '#photos-gallery' },
      { label: 'Notes, Knowledge and Bookmarks', anchor: '#notes-knowledge' },
      { label: 'Smart Home and Agents', anchor: '#smart-home-agents' },
      { label: 'Developer Paths', anchor: '#dev-paths' },
      { label: 'Remote Mode: Phone as a Thin Client', anchor: '#remote-mode' },
      { label: 'Privacy and Telemetry Reality', anchor: '#privacy-telemetry' },
      { label: 'Battery, Heat and Background Kills', anchor: '#battery-thermal-background' },
      { label: 'Not Possible, or Not Yet', anchor: '#not-possible' },
      { label: 'Quiet Apps to Check Before You Rely on Them', anchor: '#quiet-apps' },
      { label: 'Decision Path: I Have This Phone and Want This', anchor: '#decision-path' },
      { label: 'First Run in 15 Minutes', anchor: '#first-run' },
      { label: 'Summary: Phone Tier, App, Model Size', anchor: '#phone-tier-summary' },
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
          '**Local AI on Android is real and offline-capable, and it is small-model AI.** Phones with 6 to 8 GB of RAM handle 1 to 4 billion parameter models; 12 to 16 GB phones can hold 7 to 8 billion at low-bit quantization. Cloud-class answers, long documents and fast long replies are out of reach.',
          '**RAM decides what fits; memory bandwidth, heat and the chip decide how fast.** A model must fit in free RAM next to Android itself, and generation speed is capped by how fast the phone can read the model from memory on every token.',
          '**There are four engines behind almost every app:** llama.cpp (GGUF files, CPU and sometimes GPU), Google LiteRT-LM (Gemma and other models, GPU and increasingly NPU), MLC (compiled models, OpenCL GPU) and Google AICore with Gemini Nano (system model, supported phones only, apps call it through ML Kit).',
          '**The NPU is the least reachable part of the phone.** Google, Qualcomm and MediaTek publish NPU paths through LiteRT and Qualcomm GenieX, but they need models compiled per chip. A generic sideloaded GGUF app will usually run on CPU or GPU.',
          '**Android gives more room than iPhone in several ways:** apps can be installed from outside Google Play, Termux gives you a Linux terminal on the phone, phones can serve an OpenAI-compatible API to your laptop, and GGUF model import is a normal feature. The price is fragmentation: results differ by brand, chip and battery settings.',
          '**Most Android apps in our directory are mapped to a job in this guide:** chat, vision, voice, documents, translation, image generation, photos, notes, smart home and agents, developer tools, and remote clients for your own server.',
          '**"Zero telemetry" is a claim, not a guarantee.** On-device inference keeps prompts off servers, but the app can still ship analytics, ads or crash reports. Read the Data safety card and the privacy policy together; they disagree more often than you would expect.',
          '**Not possible today:** frontier-model quality offline, 70 billion parameter models, million-token contexts, an always-on background assistant that Android will not kill, and Gemini Nano access for any app on any phone.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Practical model sizes:** 1 to 2 billion parameters on 4 to 6 GB RAM; 3 to 4 billion on 8 GB; 7 to 8 billion at low-bit quantization on 12 to 16 GB. These are rules of thumb from file-size arithmetic, not benchmark results.',
          '**Gemini Nano via ML Kit GenAI:** the Prompt API takes text and up to 10 images, with input under about 4,000 tokens, and works only while the calling app is in the foreground ([Google](https://developers.google.com/ml-kit/genai)).',
          '**Gemma 4 E2B and E4B:** Google calls them the foundation of Gemini Nano 4 and says E2B is up to 3 times faster than E4B; the AICore Developer Preview opened on 2 April 2026 ([Android Developers Blog](https://developer.android.com/blog/posts/announcing-gemma-4-in-the-ai-core-developer-preview)).',
          '**NPU paths:** LiteRT has Qualcomm and MediaTek NPU accelerators; Google reports Gemma 3n E2B at over 1,600 tokens/sec prefill and 28 tokens/sec decode on a Dimensity 9500 NPU (Vivo X300 Pro, Google figures, 4K context).',
          '**Pixel TPU for developers:** the Tensor SDK reached beta on 19 May 2026 and lists Pixel 10, 10 Pro, 10 Pro XL and 10 Pro Fold.',
          '**Android versions:** Google AI Edge Gallery needs Android 12 or later; the NPU docs for LiteRT require API level 31 or later; AppFunctions needs Android 16 or later.',
          '**Termux:** install it from F-Droid or GitHub; the Google Play build is marked experimental by the Termux maintainers, and mixing sources breaks updates.',
          '**Apps covered:** the Android apps in the PromptQuorum directory that we reviewed from public sources, each linked once to its own review where it fits; see the directory for the full list.',
          '**iPhone reader?** See the sibling guide [Local AI on iPhone](/power-local-llm/local-ai-on-iphone-guide).',
        ],
      },
      capabilityMap: {
        id: 'capability-map',
        title: 'The Capability Map: What Works, Partly Works, Does Not',
        content: [
          '**Most everyday AI jobs work on an Android phone without a connection; the jobs that need scale or constant background activity do not.** The table gives the verdict per capability, one app to start with, and the hard limit. Each chapter below lists the apps we cover for that job.',
          '"Works" means small on-device models do the job acceptably today. "Partly" means it works with a server in the loop, with one app only, or with clear quality limits. "No" means the limit is physical or a platform rule, not a missing app.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'On Android in 2026, chat, camera questions, dictation, translation and short-document Q&A run offline on small models, while large models, long contexts and always-on assistants do not.' },
          { type: 'plain-terms', text: 'Think of an on-device model as a capable intern with a small desk: fast, private and offline, but not able to hold a whole library or match a cloud model on hard questions.' },
        ],
        columns: ['Capability', 'On the phone?', 'Start with', 'Hard limit'],
        rows: [
          { 'Capability': 'Offline chat', 'On the phone?': 'Works', 'Start with': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)', 'Hard limit': 'Small models only' },
          { 'Capability': 'Camera and image questions', 'On the phone?': 'Works', 'Start with': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review)', 'Hard limit': 'Needs a vision-capable model' },
          { 'Capability': 'Dictation (speech to text)', 'On the phone?': 'Works', 'Start with': '[Private Mind](/power-local-llm/private-mind-review)', 'Hard limit': 'Accuracy varies by language' },
          { 'Capability': 'Read-aloud replies', 'On the phone?': 'Works', 'Start with': '[ToolNeuron](/power-local-llm/toolneuron-review)', 'Hard limit': 'Voice quality varies by app' },
          { 'Capability': 'Offline voice assistant', 'On the phone?': 'Partly', 'Start with': '[Home Assistant Assist](/power-local-llm/home-assistant-assist-review)', 'Hard limit': 'Android may kill background listeners' },
          { 'Capability': 'Document and PDF questions', 'On the phone?': 'Works', 'Start with': '[AnythingLLM Mobile](/power-local-llm/anythingllm-mobile-review)', 'Hard limit': 'Context window of small models' },
          { 'Capability': 'Translation', 'On the phone?': 'Works', 'Start with': '[LLM Hub](/power-local-llm/llm-hub-review)', 'Hard limit': 'Weaker on rare languages' },
          { 'Capability': 'Image generation', 'On the phone?': 'Partly', 'Start with': '[TokForge](/power-local-llm/tokforge-review)', 'Hard limit': 'Slower than a desktop GPU' },
          { 'Capability': 'Photo search', 'On the phone?': 'Partly', 'Start with': '[Ente Photos](/power-local-llm/ente-photos-review)', 'Hard limit': 'Often runs on a server or desktop' },
          { 'Capability': 'AI in notes and bookmarks', 'On the phone?': 'Partly', 'Start with': '[Karakeep](/power-local-llm/karakeep-review)', 'Hard limit': 'AI usually runs on your server' },
          { 'Capability': 'Smart-home hub', 'On the phone?': 'Partly', 'Start with': '[Scrypted](/power-local-llm/scrypted-review)', 'Hard limit': 'Phone is a client, not the brain' },
          { 'Capability': 'Agents that drive the phone', 'On the phone?': 'Early', 'Start with': '[Kai 9000](/power-local-llm/kai-9000-review)', 'Hard limit': 'System hooks still in preview' },
          { 'Capability': 'Phone as a thin client', 'On the phone?': 'Works', 'Start with': '[LocalMind](/power-local-llm/localmind-review)', 'Hard limit': 'Your server must be on' },
          { 'Capability': 'Build AI into your own app', 'On the phone?': 'Works', 'Start with': '[RunAnywhere](/power-local-llm/runanywhere-review)', 'Hard limit': 'NPU needs per-chip builds' },
          { 'Capability': '70 billion parameter models', 'On the phone?': 'No', 'Start with': 'Use a server instead', 'Hard limit': 'RAM' },
          { 'Capability': 'Cloud-class answers offline', 'On the phone?': 'No', 'Start with': 'Use a server instead', 'Hard limit': 'Model size' },
        ],
        callouts: [
          { type: 'tip', text: 'If a job says "Partly", the usual fix is the remote pattern: the phone is the screen and microphone, and a computer or home server runs the bigger model. See the remote mode chapter.' },
        ],
      },
      method: {
        id: 'method',
        title: 'How This Guide Was Built',
        content: [
          '**This is a desk-research map, not a benchmark report.** It was written by Hans Kuepper from Google, Qualcomm, MediaTek and Termux documentation read in November 2026, and from the individual PromptQuorum reviews linked in each chapter. PromptQuorum did not run new speed tests for this guide.',
          'Many of the linked reviews state that they rest on store listings, privacy policies and maker documentation and that PromptQuorum has not run the app. Where a claim comes from the maker or from Google, the text says so. Where we could not confirm something against a primary source, the text says "uncertain" or leaves it out.',
          'Speed numbers appear only when a named source published them, with the device named. Model sizes, RAM tiers and the "tokens per second ceiling" are arithmetic, labeled as such.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'This guide combines official platform documentation with PromptQuorum app reviews and runs no new benchmarks, so every number is either sourced or labeled as arithmetic.' },
          { type: 'plain-terms', text: 'If a sentence names a speed, a device and a source, it was published by that source; if it has no source, it is a rule of thumb.' },
        ],
      },
      ramTiers: {
        id: 'ram-tiers',
        title: 'RAM Tiers: Which Model Size Your Phone Can Hold',
        content: [
          '**RAM is the first filter: the model has to fit in free memory next to Android and your other apps.** A 4-bit quantized model needs roughly 0.5 to 0.6 GB per billion parameters for the weights, plus working memory that grows with the context length. Android, the launcher and background services typically hold several gigabytes of a phone\'s RAM, so a 12 GB phone does not give an app 12 GB.',
          'Speed follows memory bandwidth. Generating one token means reading most of the model from memory, so the ceiling is about bandwidth divided by model size. Our [Galaxy S26 on-device AI guide](/local-llms/galaxy-s26-local-ai-on-device-2026) applies this: 85.6 GB/s over a 3.5 GB 4-bit model gives a theoretical ceiling near 24 tokens per second. Real apps land below the ceiling, and a hot phone lands lower still.',
          'Treat the table as a starting point. Several reviewed apps publish no fixed RAM floor and say the need depends on the model you load; others set their own limits. [Ensu](/power-local-llm/ensu-review) disables chat on phones with less than 4 GB of RAM, and [Private Mind](/power-local-llm/private-mind-review)\'s Google Play listing recommends a phone with 4 GB or more for larger models.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A phone with 6 to 8 GB of RAM fits models of about 1 to 4 billion parameters at 4-bit quantization, and 12 to 16 GB phones can hold 7 to 8 billion.' },
          { type: 'plain-terms', text: 'Quantization shrinks a model by storing each weight in fewer bits; a 4-bit model is roughly a quarter the size of a 16-bit one, at a small quality cost.' },
        ],
        columns: ['Phone RAM', 'Model size (4-bit)', 'Example models', 'What to expect'],
        rows: [
          { 'Phone RAM': '4 GB', 'Model size (4-bit)': '0.5 to 1B', 'Example models': 'Qwen3 0.6B, Gemma 3 1B', 'What to expect': 'Short answers, simple tasks' },
          { 'Phone RAM': '6 GB', 'Model size (4-bit)': '1 to 2B', 'Example models': 'Qwen3 1.7B, SmolLM2 1.7B', 'What to expect': 'Usable chat, basic summaries' },
          { 'Phone RAM': '8 GB', 'Model size (4-bit)': '3 to 4B', 'Example models': 'Phi-4 Mini, Qwen3 4B', 'What to expect': 'Best balance on most phones' },
          { 'Phone RAM': '12 GB', 'Model size (4-bit)': '4 to 8B (tight)', 'Example models': 'Gemma 4 E4B, Llama 3.2 3B', 'What to expect': '7 to 8B only with small context' },
          { 'Phone RAM': '16 GB and up', 'Model size (4-bit)': '7 to 8B', 'Example models': '7 to 8B instruct models', 'What to expect': 'Slower, hotter, longer waits' },
        ],
        callouts: [
          { type: 'warning', text: 'Google\'s own pages publish no RAM floor for Gemma 4 E2B or E4B in the sources we read. Treat RAM needs as uncertain and check the app\'s model list on your phone.' },
          { type: 'tip', text: 'When a model will not load, the cause is usually free RAM, not total RAM. Close other apps, restart the phone, and pick the next smaller model before blaming the app.' },
        ],
      },
      chips: {
        id: 'chips',
        title: 'Chips: Snapdragon, Tensor, Dimensity, Exynos',
        content: [
          '**Current flagship chips include an NPU, but a sideloaded chat app rarely gets to use it.** The NPU paths that exist are published by the chip makers and Google, and they need models prepared for that chip. Apps built on generic llama.cpp builds mostly run on the CPU, sometimes on the GPU.',
          '**Snapdragon.** Qualcomm\'s GenieX supports Android on the Snapdragon 8 Elite and 8 Elite Gen 5, runs GGUF models through llama.cpp with a Hexagon backend, and recommends Q4_0 quantization for the NPU path; the page does not state a release status. Google\'s LiteRT Qualcomm accelerator reports FastVLM-0.5B on the Snapdragon 8 Elite Gen 5 NPU at 0.12 seconds to first token and over 100 tokens per second decode (Xiaomi 17 Pro Max, Google figures). These are developer paths today, not buttons in a chat app.',
          '**Google Tensor.** Pixel 9 runs Gemini Nano through AICore and ML Kit; the Pixel 10 with Tensor G5 is listed for Gemini Nano 4 support. For your own models, Google\'s Tensor SDK reached beta on 19 May 2026 for the Pixel 10 family and runs models on the TPU through LiteRT. Whether a given third-party chat app already uses it is something to check per app.',
          '**MediaTek Dimensity.** Google and MediaTek published a LiteRT NeuroPilot accelerator with pre-compiled models (Qwen3 0.6B, Gemma 3 270M, Gemma 3 1B, Gemma 3n E2B, EmbeddingGemma 300M). The benchmark chip is the Dimensity 9500 in a Vivo X300 Pro, where Google reports Gemma 3n E2B at over 1,600 tokens per second prefill and 28 tokens per second decode with a 4K context. Converting a custom Gemma model for the MediaTek NPU was listed as "soon".',
          '**Samsung Exynos.** In our Galaxy S26 article, the S26 and S26+ use the Exynos 2600 in Europe, Korea and most other markets and a Snapdragon in the US, China and Japan, while the S26 Ultra uses the Snapdragon 8 Elite Gen 5 everywhere. We found no primary documentation of an open NPU path for third-party language-model apps on Exynos, so assume CPU or GPU for sideloaded apps. Samsung\'s own EdgeFusion image generation on the Exynos 2600 NPU is a Samsung and Nota AI pipeline, not something a generic app inherits.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Snapdragon, Tensor and Dimensity all have published NPU or TPU routes through LiteRT or vendor SDKs, but a generic sideloaded GGUF app usually runs on CPU or GPU, and Exynos has no documented open path for third-party language models.' },
          { type: 'plain-terms', text: 'The NPU is a fast lane that needs a model rebuilt for each chip; apps that ship one universal model file cannot use it.' },
        ],
        columns: ['Chip family', 'Open NPU or TPU path', 'Where it is documented', 'Status'],
        rows: [
          { 'Chip family': 'Snapdragon 8 Elite / Gen 5', 'Open NPU or TPU path': 'Yes, per-chip builds', 'Where it is documented': 'LiteRT, Qualcomm GenieX', 'Status': 'Developer paths' },
          { 'Chip family': 'Tensor G5 (Pixel 10)', 'Open NPU or TPU path': 'Yes, via Tensor SDK', 'Where it is documented': 'Google Developers Blog', 'Status': 'Beta (May 2026)' },
          { 'Chip family': 'Tensor G4 (Pixel 9)', 'Open NPU or TPU path': 'Gemini Nano via ML Kit', 'Where it is documented': 'ML Kit GenAI', 'Status': 'Supported device' },
          { 'Chip family': 'Dimensity 9500', 'Open NPU or TPU path': 'Yes, NeuroPilot', 'Where it is documented': 'Google Developers Blog', 'Status': 'Pre-compiled models' },
          { 'Chip family': 'Exynos 2600', 'Open NPU or TPU path': 'Not documented for LLMs', 'Where it is documented': 'None found', 'Status': 'Assume CPU or GPU' },
          { 'Chip family': 'Older or mid-range chips', 'Open NPU or TPU path': 'Rarely', 'Where it is documented': 'Varies', 'Status': 'CPU, small models' },
        ],
        callouts: [
          { type: 'warning', text: 'Do not pick a phone for local AI from an NPU "TOPS" number. Peak NPU throughput says little about a chat app that never uses the NPU. RAM size, memory bandwidth and cooling decide most real results.' },
        ],
      },
      engines: {
        id: 'engines',
        title: 'The Four Main Engines Behind Android AI Apps',
        content: [
          '**Nearly every app in this guide is a front end for one of four engines, and the engine explains the app\'s strengths and limits better than its marketing does.** If you know the engine, you know which model files work, whether the NPU can be used, and where your data goes.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Most Android on-device AI apps run on one of four main engines: llama.cpp for GGUF files, LiteRT-LM for Gemma-class models, MLC for compiled models, or Google AICore for the system Gemini Nano model.' },
          { type: 'plain-terms', text: 'The engine decides which model files you can load and how much of the chip gets used; the app decides how pleasant it is to use.' },
        ],
        itemHeadings: true,
        columns: ['Engine', 'Runs', 'Acceleration', 'Example apps'],
        rows: [
          { 'Engine': 'llama.cpp', 'Runs': 'GGUF files from Hugging Face; the widest model choice, and most apps let you import your own file.', 'Acceleration': 'CPU by default; some apps add GPU. A Hexagon backend exists in Qualcomm GenieX.', 'Example apps': '[PocketPal AI](/power-local-llm/pocketpal-ai-review), [Maid](/power-local-llm/maid-review), [LM Playground](/power-local-llm/lm-playground-review), [KernelAI](/power-local-llm/kernelai-review)' },
          { 'Engine': 'LiteRT-LM', 'Runs': 'Google\'s edge runtime for Gemma and other models in .litertlm files, with vision and audio input and function calling. Google lists Gemma 4, Gemma 3n, Llama, Phi-4 and Qwen families.', 'Acceleration': 'GPU and NPU paths; Python, Kotlin and C++ APIs are marked stable.', 'Example apps': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review), [OlliteRT](/power-local-llm/ollitert-review), [MemoryAI](/power-local-llm/memoryai-review)' },
          { 'Engine': 'MLC LLM', 'Runs': 'Models compiled ahead of time for one target; you get a curated library, not any file.', 'Acceleration': 'OpenCL GPU on Android; support is reported to be uneven across phones (see the MLC Chat review).', 'Example apps': '[MLC Chat](/power-local-llm/mlc-chat-review), [MLC LLM](/power-local-llm/mlc-llm-explained)' },
          { 'Engine': 'AICore with Gemini Nano', 'Runs': 'Google\'s system model, managed and updated by Android; apps reach it through ML Kit GenAI, so there is nothing to download inside the app.', 'Acceleration': 'Whatever the supported phone provides; apps cannot pick the hardware.', 'Example apps': '[PAIOS](/power-local-llm/paios-review)' },
        ],
        callouts: [
          { type: 'tip', text: 'Other engines exist. [Private Mind](/power-local-llm/private-mind-review) runs on the React Native ExecuTorch library, and [Ensu](/power-local-llm/ensu-review) and [Atomic Chat](/power-local-llm/atomic-chat-review) bring their own stacks. The four above cover most of what you will install.' },
        ],
      },
      androidVsIphone: {
        id: 'android-vs-iphone',
        title: 'Where Android Gives You More Room Than iPhone',
        content: [
          '**Android is the more open platform for local AI in the sense that apps can load their own models and engines: you can install apps outside the store, run a Linux userland, and turn the phone into a server.** The cost is fragmentation. A recipe that works on a Galaxy flagship may fail on a mid-range phone from another brand, and no single vendor-neutral compatibility list exists that we found.',
          'For the Apple side of every comparison below, read [Local AI on iPhone](/power-local-llm/local-ai-on-iphone-guide). For the two big ecosystems side by side, see [Galaxy vs iPhone On-Device AI](/local-llms/galaxy-vs-iphone-on-device-ai-2026).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Android allows sideloaded APKs, Termux, F-Droid and phone-hosted API servers more freely than iOS, at the price of uneven results across brands and chips.' },
          { type: 'plain-terms', text: 'Android lets you tinker deeper; iPhone gives you more predictable results on fewer devices.' },
        ],
        items: [
          '**Sideloading and alternative stores.** [MLC Chat](/power-local-llm/mlc-chat-review) ships as an APK from the maker\'s GitHub releases, and the Google AI Edge Gallery offers an APK for people without Google Play. The same app can exist in several places, so keep to one source per app.',
          '**Termux.** A real terminal on the phone, installable from F-Droid or GitHub, can build and run llama.cpp without root. It is also where Android\'s background limits bite hardest (see the battery chapter).',
          '**The phone as a server.** [OlliteRT](/power-local-llm/ollitert-review), [Mobile LM Server](/power-local-llm/chaterminal-review), [Ollama Local AI](/power-local-llm/ollama-local-ai-review) and [ToolNeuron](/power-local-llm/toolneuron-review) expose an OpenAI-style endpoint so other devices on your network can use the phone\'s model.',
          '**Model choice.** GGUF import is a normal feature in Android apps, so you can load almost any small open-weight model a developer publishes, not only a curated list.',
          '**Hardware variety.** Gaming phones with 16 GB or more of RAM and active cooling can give more headroom than the iPhones we compare against. The flip side is that cheap phones with 4 GB are common, and they are poor local AI machines.',
          '**Where iPhone is simpler.** One vendor, one memory budget per model class and fewer battery-optimization surprises make iPhone results easier to predict. If predictability matters more than flexibility, the sibling guide may fit you better.',
        ],
      },
      chatApps: {
        id: 'chat-apps',
        title: 'Chat Assistants in Our Directory, by Type',
        content: [
          `**Offline chat is the most widely supported job on Android in our directory, and the choice of app is mostly a choice of trade-offs: open source or closed, any GGUF file or a curated list, free or paid.** Each line below says what the app does and the honest limit. Apps that fit a more specific job appear again in that job's chapter.`,
          `For a speed and setup comparison of the best-known apps, read [Best Local LLM Apps for Android](/power-local-llm/best-local-llm-apps-android-2026). For model choice, read [Mobile LLM Models: Phi-4, Gemma and SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) and the [Mobile Local LLMs](/local-llms/mobile-local-llms) overview. Tablet owners should add [Run AI on a Tablet](/power-local-llm/run-ai-on-tablet-ipad-android).`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Dozens of Android apps run chat models on the phone; open-source GGUF runners give the widest model choice, closed-source apps give guided downloads, and Google AI Edge Gallery is Google's own front end for Gemma-class models.` },
          { type: 'plain-terms', text: `Pick an open-source runner if you want to choose models yourself, and a guided app if you want it to work in five minutes.` },
        ],
        subsections: [
          {
            title: `Open-source and maker-built runners (start here)`,
            list: [
              `[PocketPal AI](/power-local-llm/pocketpal-ai-review): free, MIT-licensed GGUF runner for Android and iPhone, no account needed; an optional community marketplace sells premium presets. Limit: you pick the model, and the app has no fixed RAM floor, so an oversized model simply fails to load.`,
              `[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review): Google's free showcase for on-device models on LiteRT, with chat, image questions, audio transcription and prompt testing. It needs Android 12 or later and is installed from Google Play or as an APK. Limit: Google labels the app an experimental beta. Its App Store privacy label lists some device diagnostics (per our review of the iPhone build); check the Android Data safety card before treating it as zero-telemetry.`,
              `[Maid](/power-local-llm/maid-review): MIT-licensed; runs GGUF models through llama.cpp or connects to remote providers with your own key. The codebase was rewritten in React Native for version 3.0.0 and ships as an Android-only app today. Limit: the older iOS and desktop builds are gone, so old tutorials will not match.`,
              `[Off Grid AI](/power-local-llm/off-grid-ai-review): free, MIT-licensed, account-free, for Android, iOS, macOS and Windows. Limit: the download figures on the maker's site are self-reported, and could not be cross-checked against the app stores.`,
              `[Private Mind](/power-local-llm/private-mind-review): MIT-licensed, from Software Mansion, running models through React Native ExecuTorch, with document Q&A, Whisper dictation and built-in speed benchmarks. Limit: since version 1.3.0 an optional Web toggle fetches pages from the internet, so keep it off for strict offline use.`,
              `[Atomic Chat](/power-local-llm/atomic-chat-review): Apache-2.0; browses over 1,000 Hugging Face models, exposes a local OpenAI-compatible API and supports agents. Limit: optional cloud providers are built in, so confirm none is switched on if you want offline only.`,
              `[Ensu](/power-local-llm/ensu-review): AGPL-3.0, from the Ente Labs team, with image input, local voice dictation and no account. Limit: chat is disabled on phones with less than 4 GB of RAM, and PromptQuorum has not tested it hands-on.`,
              `[Llamatik](/power-local-llm/llamatik-review): MIT-licensed offline chatbot that doubles as the showcase for the developer's Kotlin Multiplatform SDK; the Android version reached Google Play in November 2025. Limit: one independent developer and a young app.`,
              `[LM Playground](/power-local-llm/lm-playground-review): MIT-licensed GGUF runner with document Q&A, photo input for vision models, reasoning display and optional tools. Limit: independent developer; the review rests on the store listing, website and repository.`,
              `[MLC Chat](/power-local-llm/mlc-chat-review): Apache-2.0 app on the MLC compiler, with GPU-accelerated inference. It is an APK from the maker's GitHub releases, not a Google Play listing. Limit: the curated model library, uneven OpenCL support across phones, and a long gap since its last update (see the quiet apps chapter).`,
            ],
          },
          {
            title: `Free consumer apps, closed source`,
            list: [
              `[KernelAI](/power-local-llm/kernelai-review): downloads open models (53, from 112 MB to 3.11 GB per the maker) and runs them through llama.cpp, with documents and vision. Limit: closed source from a single publisher, so claims rest on its own pages.`,
              `[MemoryAI](/power-local-llm/memoryai-review): runs models through llama.cpp and Google LiteRT, with document Q&A, an editable Agent Memory, hands-free voice and a PIN-locked Kid Mode. Limit: closed source, one independent developer.`,
              `[Loci AI](/power-local-llm/loci-ai-review-offline-local-ai): picks llama.cpp or MLX per model, manages phone temperature and syncs memory across chats; can link to a desktop for bigger models. Limit: closed source; the "private" promise can depend on the apps staying offline after setup.`,
              `[On Device LLM](/power-local-llm/on-device-llm-review): free offline chat with GGUF import and an optional local OpenAI-compatible API. Limit: a new app, closed source; Google Play titles it "Local LLM", and it is not the iPhone apps with similar names.`,
              `[LocalAI: Offline AI Chat LLM](/power-local-llm/localai-apexcreator-review): llama.cpp chat with an optional premium tier, document chat, vision and structured output. Limit: closed source and no public repository found.`,
              `[Chatty-mini](/power-local-llm/chatty-mini-review): portrait-first GGUF chat from an indie developer. Limit: sparse public documentation, and the license is unconfirmed.`,
              `[Caelum](/power-local-llm/caelum-review): free chat and document assistant that says it runs on the phone, with optional web search through Brave. Limit: no update since August 2025; see the quiet apps chapter.`,
            ],
          },
          {
            title: `Companions, paid apps and company-backed apps`,
            list: [
              `[Layla](/power-local-llm/layla-review): a paid app (one-time purchase plus in-app tiers) built around a persona-and-roleplay companion running locally. Limit: closed source and a price tag; it is a companion first, a utility second.`,
              `[Laria](/power-local-llm/laria-review): paid Android assistant with downloadable on-device models, custom AI identities, image tools and optional cloud providers. Limit: closed source, and, per our review, the developer's page shows explicit sample content; read the age-rating notes first.`,
              `[Secret AI](/power-local-llm/secret-ai-review): custom characters, Skills and MCP tools, running GGUF, MNN and MLX models. Limit: closed source; other products share the name, so check the publisher before installing.`,
              `[CompactifAI APP](/power-local-llm/compactifai-app-review): from Multiverse Computing, offers compressed models for offline use and larger models through the maker's cloud API. Limit: the cloud path is part of the product, so offline is an option you choose.`,
              `[Liquid Apollo](/power-local-llm/liquid-apollo-review): Liquid AI's app for its small LFM2 models on the device, plus OpenRouter and custom backends. Limit: not local-only; the cloud and custom-server modes send prompts off the phone.`,
              `[TokForge](/power-local-llm/tokforge-review): roleplay characters, image generation, voice and document Q&A, with a speed benchmark that can post to a public leaderboard. Limit: proprietary, and the iPhone version is a public beta.`,
            ],
          },
          {
            title: `The system model: Gemini Nano through AICore`,
            list: [
              `[PAIOS](/power-local-llm/paios-review): a free, open-source chat front end for Gemini Nano, running through AICore with no model download inside the app. Limit: it works only on phones where AICore supports Gemini Nano, with Pixel 9 and 10 as named examples, and the project labels itself alpha.`,
            ],
          },
        ],
        callouts: [
          { type: 'tip', text: `Install two apps, not ten: one open-source GGUF runner for choice (PocketPal AI or Maid) and Google AI Edge Gallery for Gemma-family models. Add others only for a job they do better.` },
          { type: 'warning', text: `Several apps above are new, closed source and reviewed from listings only. Their feature lists are the makers' claims; PromptQuorum's reviews say which were not tested hands-on.` },
        ],
      },
      visionCamera: {
        id: 'vision-camera',
        title: 'Vision and Camera Questions',
        content: [
          `**Pointing the camera at something and asking a question works on-device today, but only with a vision-capable model.** A text-only model silently ignores or rejects images. The apps below load a vision model or one that accepts image input; the model, not the app, sets the quality.`,
          `Google's ML Kit offers system-level options too: the Prompt API accepts text plus up to 10 images, and a dedicated Image Description API produces a short caption of an image. Both run on Gemini Nano on supported phones. Google also says Gemma 4 improves OCR-style tasks such as chart reading and handwriting recognition; we found no independent accuracy figure, so test it on your own documents.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Camera questions run offline on Android through vision-capable models in apps such as Google AI Edge Gallery, LM Playground and Private Mind, and through Gemini Nano on supported phones.` },
          { type: 'plain-terms', text: `A vision model reads the picture itself; a text-only model never sees it, so the model you pick matters more than the app.` },
        ],
        items: [
          `[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review): its Ask Image feature identifies objects, solves visual puzzles and describes images from the camera or gallery. Limit: needs a vision-capable Gemma model, and the README names no accuracy figures.`,
          `[LM Playground](/power-local-llm/lm-playground-review): photo input for vision models in GGUF format. Limit: you must find and download a vision-capable GGUF plus its projector file; the app does not do that for you.`,
          `[Private Mind](/power-local-llm/private-mind-review): lists vision-capable models alongside text models. Limit: larger vision models can need more RAM than the 4 GB its listing recommends for bigger models.`,
          `[LocalAI: Offline AI Chat LLM](/power-local-llm/localai-apexcreator-review): supports vision-capable models according to its Google Play listing. Limit: closed source, and PromptQuorum's review rests on the store listing.`,
          `[KernelAI](/power-local-llm/kernelai-review): lists vision among its features. Limit: its claims rest on the developer's pages.`,
          `[Ensu](/power-local-llm/ensu-review): accepts image input in chat. Limit: image support depends on the model you choose.`,
        ],
        callouts: [
          { type: 'warning', text: `Do not use an on-device vision model for anything where a misread matters: medication labels, legal text, safety signs. Small vision models misread text and numbers, and there is no verified accuracy figure to lean on.` },
        ],
      },
      voice: {
        id: 'voice',
        title: 'Voice: Dictation, Transcription, Read-Aloud, Assistants',
        content: [
          `**Offline dictation and transcription are the most mature voice jobs on Android; an always-listening offline assistant is the least.** The first two run a speech model such as Whisper on the phone and are triggered by you. The last needs a background service that Android is free to kill.`,
          `Google's ML Kit speech recognition has a basic mode that its documentation says is available on most Android devices with API level 31 or later, and an advanced mode on Pixel 10 phones with more devices in development. ML Kit also lists speech translation and text to speech; the overview page does not state device requirements for those, so check the feature pages.`,
          `For the full stack of offline voice, see [Voice Assistants on Mobile, Offline](/power-local-llm/voice-assistant-local-mobile-offline), [Local Whisper STT Compared](/power-local-llm/local-whisper-stt-comparison), [Local Voice and Audio Tools Compared](/power-local-llm/local-llm-voice-audio-compared) and [Build a Local Voice Assistant](/power-local-llm/build-local-voice-assistant-2026).`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Offline dictation and recording transcription work on Android through Whisper-class models in apps like Private Mind, Ensu and LLM Hub, while offline always-on voice assistants remain limited by Android's background rules.` },
          { type: 'plain-terms', text: `Voice you start by tapping works offline; voice that must listen all day runs into battery limits and app killers.` },
        ],
        itemHeadings: true,
        columns: ['App', 'Voice job', 'Honest limit'],
        rows: [
          { 'App': '[Private Mind](/power-local-llm/private-mind-review)', 'Voice job': 'Dictation with Whisper, on the phone', 'Honest limit': 'Language and accuracy depend on the Whisper model you load.' },
          { 'App': '[Ensu](/power-local-llm/ensu-review)', 'Voice job': 'Local voice dictation into chat', 'Honest limit': 'Not tested hands-on by PromptQuorum; no accuracy data.' },
          { 'App': '[LM Playground](/power-local-llm/lm-playground-review)', 'Voice job': 'Voice dictation', 'Honest limit': 'Dictation only; no spoken replies listed.' },
          { 'App': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review)', 'Voice job': 'Chat with speech input and read-aloud replies; Audio Scribe transcribes and translates recordings', 'Honest limit': 'Experimental beta; language coverage depends on the engine you select.' },
          { 'App': '[LLM Hub](/power-local-llm/llm-hub-review)', 'Voice job': 'Whisper transcription alongside chat, image and translation', 'Honest limit': 'Source-available under a noncommercial license; Premium tier is paid.' },
          { 'App': '[MemoryAI](/power-local-llm/memoryai-review)', 'Voice job': 'Hands-free voice conversation', 'Honest limit': 'Closed source; check whether recognition is on-device in the privacy policy.' },
          { 'App': '[ToolNeuron](/power-local-llm/toolneuron-review)', 'Voice job': 'Voice input and output, plus an encrypted store', 'Honest limit': 'No update for more than three months; see quiet apps.' },
          { 'App': '[TokForge](/power-local-llm/tokforge-review)', 'Voice job': 'Text to speech with voice cloning', 'Honest limit': 'Proprietary; voice cloning raises consent and impersonation questions.' },
          { 'App': '[RunAnywhere](/power-local-llm/runanywhere-review)', 'Voice job': 'SDK for speech-to-text, text-to-speech and voice activity detection in your own app', 'Honest limit': 'A library for developers, not an app; commercial terms apply.' },
          { 'App': '[Home Assistant Assist](/power-local-llm/home-assistant-assist-review)', 'Voice job': 'Voice control of your home with Whisper and Piper on your own hardware', 'Honest limit': 'The speech models run on a home server, not on the phone.' },
          { 'App': '[AquaVoice](/power-local-llm/aquavoice-review)', 'Voice job': 'Fast dictation that types into the active app', 'Honest limit': 'Cloud service. It is here so you do not mistake it for local.' },
        ],
        callouts: [
          { type: 'warning', text: `Voice cloning and always-on recording are privacy and consent topics, not only features. Clone only your own voice or one you have written permission to use, and tell people when you record them.` },
        ],
      },
      documentsRag: {
        id: 'documents-rag',
        title: 'Documents, PDFs and RAG',
        content: [
          `**Document Q&A works on Android by splitting a file into chunks, finding the relevant ones and feeding only those to a small model.** This is retrieval-augmented generation (RAG). It beats pasting a whole PDF into a small model, whose context window is too short for it.`,
          `The Gemini Nano Prompt API limits input to under about 4,000 tokens, which is roughly 3,000 English words, so system-level document questions need chunking too. For the method in depth, read [Local RAG on Your PDFs, Step by Step](/power-local-llm/local-rag-on-your-pdfs-step-by-step) and [Best Local RAG Tools](/local-llms/best-local-rag-tools).`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Android apps such as AnythingLLM Mobile, Private Mind, LM Playground and Honey LLM answer questions about your files on the phone by retrieving relevant chunks for a small model.` },
          { type: 'plain-terms', text: `The app searches your document for the right paragraphs and hands only those to the model, so a small model can answer questions about a long file.` },
        ],
        items: [
          `[AnythingLLM Mobile](/power-local-llm/anythingllm-mobile-review): MIT-licensed, Android only. Standalone mode runs a small model and a local vector database on the phone; connected mode pairs by QR code with AnythingLLM Desktop or Cloud for the full feature set. Limit: standalone quality is that of a small model; pairing is how you get more.`,
          `[Private Mind](/power-local-llm/private-mind-review): on-device document Q&A with source citations. Limit: citations show where an answer came from, not that it is right.`,
          `[LM Playground](/power-local-llm/lm-playground-review): on-device document Q&A in a free MIT app. Limit: independent developer; check the review for supported file types before relying on it.`,
          `[Honey LLM](/power-local-llm/honey-llm-review): answers questions about PDF, DOCX, TXT and Markdown files and keeps an encrypted local vault. Limit: young app on Google Play since March 2026; our review is listing-based.`,
          `[LocalAI: Offline AI Chat LLM](/power-local-llm/localai-apexcreator-review): document chat over PDF, Word, Excel and CSV using on-device vector retrieval. Limit: closed source; the review is listing-based.`,
          `[ToolNeuron](/power-local-llm/toolneuron-review): document RAG with encrypted storage, voice, a local HTTP server and plugins. Limit: no update for more than three months.`,
          `[MemoryAI](/power-local-llm/memoryai-review): document Q&A plus an Agent Memory you can edit. Limit: closed source.`,
          `[Caelum](/power-local-llm/caelum-review): document questions with optional web search. Limit: no update since August 2025, and the web search option sends queries online.`,
        ],
        callouts: [
          { type: 'tip', text: `For a large archive, do not index it on the phone. Run the index on a computer or server and use the phone as the client, as the remote mode chapter describes.` },
        ],
      },
      translation: {
        id: 'translation',
        title: 'Translation',
        content: [
          `**Offline translation on Android works for common language pairs with small models, and quality drops for rare languages and long texts.** Google says Gemma 4 natively supports over 140 languages and lists speech translation among the ML Kit GenAI APIs; neither claim comes with an accuracy figure we could verify, so test your own language pair before relying on it.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Android apps like LLM Hub and Google AI Edge Gallery translate text and recordings on the phone, and ML Kit adds speech translation on supported devices.` },
          { type: 'plain-terms', text: `Small models translate everyday sentences well and struggle with rare languages, idioms and legal wording.` },
        ],
        items: [
          `[LLM Hub](/power-local-llm/llm-hub-review): on-device translation next to chat, an agent with MCP servers, image and music generation and Whisper transcription. Limit: source-available under a noncommercial license, and a paid Premium tier.`,
          `[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review): its Audio Scribe feature transcribes and translates voice recordings on-device. Limit: experimental beta.`,
          `[Local AI Mail](/power-local-llm/local-ai-mail-review): an Android email client that summarizes, translates and drafts replies with an on-device model and can switch to Gemini with your own key. Limit: a very early release; the optional Gemini mode sends mail text to Google.`,
        ],
        callouts: [
          { type: 'warning', text: `Do not rely on a small local model for contracts, medical texts or anything where a mistranslation has consequences. Use it for gist and drafts, then verify.` },
        ],
      },
      imageGeneration: {
        id: 'image-generation',
        title: 'Image Generation and Editing',
        content: [
          `**Image generation on a phone is possible but slow compared with a desktop GPU, and it is the job where chip-specific tuning matters most.** Samsung and Nota AI describe EdgeFusion, a Stable Diffusion variant that generates 512 by 512 images in under a second on the Exynos 2600 NPU (Samsung and partner claim, quoted in our [Galaxy S26 guide](/local-llms/galaxy-s26-local-ai-on-device-2026)). That is a vendor-tuned pipeline; we found no verified speed for the sideloaded apps below, so we give none.`,
          `For the cloud-versus-local trade-off in general, see [Local AI Image Generation vs Cloud](/power-local-llm/local-ai-image-generation-vs-cloud). Editing tools such as inpainting are rarer on phones than text-to-image.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Android apps such as TokForge, Local AI by GeetMark, Laria and LLM Hub generate images with on-device models, but no source we found publishes verified generation times for them.` },
          { type: 'plain-terms', text: `Your phone can draw a picture without the internet, but expect to wait much longer than on a computer with a graphics card.` },
        ],
        items: [
          `[Local AI: Offline Chat and Image](/power-local-llm/local-ai-geetmark-review): free, with chat on 20+ models, Stable Diffusion images and 15 prompt toolkits. Limit: contains ads, source code and license not published.`,
          `[TokForge](/power-local-llm/tokforge-review): roleplay characters with on-device image generation, voice and document Q&A. Limit: proprietary; speed results can be posted to a public leaderboard, so check what the benchmark shares.`,
          `[Laria](/power-local-llm/laria-review): image tools alongside local and cloud chat. Limit: paid; some image tools may use cloud providers, so check each tool.`,
          `[LLM Hub](/power-local-llm/llm-hub-review): image and music generation in the same app as chat and translation. Limit: noncommercial source-available license.`,
        ],
        callouts: [
          { type: 'tip', text: `Heat is the practical limit. A few images in a row can warm the phone enough to slow it. Generate in short batches and let it cool.` },
        ],
      },
      photos: {
        id: 'photos-gallery',
        title: 'Photos and Gallery Search',
        content: [
          `**Searching photos by meaning ("beach at sunset", "receipt from May") is the one AI job where the phone is usually not the machine doing the work.** The apps below run the image-recognition model on a server you own, on your computer, or, in two cases, on the devices themselves. Read each review's "where the AI runs" line before you assume the phone does it.`,
          `Android's own gallery and Google Photos search are outside this guide: they are cloud services, not local AI. Google's ML Kit also offers an Embedding API for semantic search with AndroidX AppSearch, which developers can use to build on-device photo or note search; it is a building block, not an app.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Android photo-library apps such as Immich, Ente Photos and Mylio Photos offer natural-language photo search, but the AI runs on your server, your computer or your devices depending on the app.` },
          { type: 'plain-terms', text: `Photo search needs an image-matching model, and the question is always where that model lives: your phone, your computer, or a home server.` },
        ],
        items: [
          `[Immich](/power-local-llm/immich-review): free, AGPL-3.0 photo and video backup with Android and iPhone apps. Smart search and face recognition run in a machine-learning container on your own server, installed with Docker. Limit: it is not a chat or LLM app, and the phone only talks to your server. Face recognition processes biometric data, so check your local data-protection rules before indexing other people's faces.`,
          `[Ente Photos](/power-local-llm/ente-photos-review): open-source, end-to-end encrypted backup whose optional face recognition and natural-language search, per the maker, run on your phone or computer. Limit: free only up to 10 GB, with paid storage above, and PromptQuorum has not tested it hands-on.`,
          `[Mylio Photos](/power-local-llm/mylio-photos-review): closed-source library for Windows, macOS, iOS and Android whose SmartTag search, face recognition and text recognition, according to Mylio, run on your own devices. Limit: a subscription product with free download.`,
        ],
        callouts: [
          { type: 'tip', text: `If privacy is the goal, prefer the setups where the AI runs on hardware you control (Immich on your server, or Ente's on-device mode) and skip any "smart" gallery whose model runs in the vendor's cloud.` },
        ],
      },
      notesKnowledge: {
        id: 'notes-knowledge',
        title: 'Notes, Knowledge and Bookmarks',
        content: [
          `**Notes and bookmark apps give you a mobile client for knowledge that lives on your server or in plain files, and the AI features run wherever you point them.** None of the apps below runs a language model inside the Android app itself. They connect to an AI provider you choose, which can be a local Ollama server on your network or a cloud service. That makes them local-first for storage, not necessarily for inference.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Android clients for Karakeep, Linkwarden, Blinko, Logseq, SiYuan and Hillnote keep notes and bookmarks under your control, while their AI features run on a server or provider you configure.` },
          { type: 'plain-terms', text: `These apps store your knowledge locally; the AI model that tags or summarizes it can be local too, but only if you set it up that way.` },
        ],
        items: [
          `[Karakeep](/power-local-llm/karakeep-review): AGPL-3.0, self-hosted with Docker, saves links, notes, images and PDFs and uses AI to tag, summarize and index them. It has Android and iOS apps and browser extensions. Limit: AI tagging needs a model endpoint you configure.`,
          `[Linkwarden](/power-local-llm/linkwarden-review): AGPL-3.0 bookmark manager that saves a copy of each page and can tag links with a local Ollama model or a cloud provider. Limit: Cloud edition is paid; self-hosting is on you.`,
          `[Blinko](/power-local-llm/blinko-review): GPL-3.0, self-hosted note-taking with RAG-powered natural-language search over your own notes, run as a Docker container. Limit: the RAG search uses an AI provider you connect.`,
          `[Logseq](/power-local-llm/logseq-review): AGPL-3.0, local-first outliner with Android and iOS apps. It has no built-in model; the database-version beta adds an optional MCP server so an external AI client can read and edit a graph. Limit: AI is bring-your-own and the MCP server is in beta.`,
          `[SiYuan](/power-local-llm/siyuan-review): AGPL-3.0 block-level knowledge workspace with Android and iOS apps and built-in AI agent collaboration. Limit: encrypted cloud sync is a paid add-on; check where its AI features run before assuming they are local.`,
          `[Hillnote](/power-local-llm/hillnote-review): Markdown notes workspace for Mac, Windows, iPhone, iPad and Android that stores files on your disk. Its on-device AI is listed as Ollama and Apple Intelligence, neither of which runs on an Android phone, so check which AI features the Android app actually exposes before you buy.`,
        ],
        callouts: [
          { type: 'tip', text: `A good pattern: self-host the notes app and a small Ollama model on a home server, and let the Android app be the capture and search client.` },
        ],
      },
      smartHomeAgents: {
        id: 'smart-home-agents',
        title: 'Smart Home and Agents',
        content: [
          `**For smart homes the phone is a remote control and a microphone; for agents it is both a place to run one and, increasingly, the thing an agent controls.** Smart-home AI belongs on a home server, because a phone sleeps, moves and gets killed. Agents on Android split into three families: assistants that use tools, agents that live on a server and use the phone as a client, and agents that operate the phone itself.`,
          `For the smart-home side in depth, see the PromptQuorum smart-home cluster; this chapter covers what the phone does.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Android phones act as clients for smart-home AI (Home Assistant Assist, Scrypted, EverShelf, LocalGhost) and can run tool-using agents (Kai 9000, PicoClaw, Aori), but system-level control of other apps is still in preview.` },
          { type: 'plain-terms', text: `Let a home server be the brain, and let the phone be the remote and the microphone.` },
        ],
        subsections: [
          {
            title: `Phone as a smart-home client`,
            list: [
              `[Home Assistant Assist](/power-local-llm/home-assistant-assist-review): the voice assistant inside Home Assistant. It can run fully on your hardware with Whisper or Speech-to-Phrase for recognition and Piper for speech over the Wyoming protocol, and can hand requests to an LLM such as one served by Ollama. The Android app is the microphone and screen. Limit: the speech and language models run on your home server, not on the phone.`,
              `[Scrypted](/power-local-llm/scrypted-review): open-source camera and NVR platform with Android and iOS viewer apps, plus optional local LLM summaries through llama.cpp on the server. Limit: the NVR component is paid, and the AI runs where Scrypted runs.`,
              `[EverShelf](/power-local-llm/evershelf-review): self-hosted pantry manager with barcode scanning, expiry tracking and shopping lists; AI features are optional and use Gemini, OpenAI or your own Llama server. Limit: it is not a chat or LLM app, and the optional cloud providers see what you send.`,
              `[LocalGhost](/power-local-llm/localghost-review): MIT-licensed personal AI system on a Debian machine you own, with an Android app as the only client, reading photos, notes, voice notes and health data with local models. Limit: very early (the reviewed release was v0.0.7), and health data is sensitive, so treat it as an experiment.`,
            ],
          },
          {
            title: `Agents that use tools`,
            list: [
              `[Kai 9000](/power-local-llm/kai-9000-review): Apache-2.0 assistant with persistent memory and tools on Android, iOS, desktop and web. It talks to cloud providers by default and can optionally run a downloaded model, including Gemma 4, on the device. Limit: cloud is the default, so switch to on-device deliberately.`,
              `[PicoClaw](/power-local-llm/picoclaw-review): MIT-licensed agent from Sipeed, a single Go program for small boards, Android phones and desktops that forwards requests to a model you configure (a cloud provider, or your Ollama or vLLM server). Limit: the model is not on the phone.`,
              `[Aori](/power-local-llm/aori-ai-personal-agent-review): free beta personal agent with persistent memory, personas and scheduled routines for desktop and Android. Limit: the Android app sends prompts to the provider you connect, and it has been quiet for over three months (see quiet apps).`,
              `[Atomic Bot](/power-local-llm/atomic-bot-review): one-click packaging of the open-source OpenClaw agent stack, local or on the maker's paid cloud. Limit: the directory lists mobile, but our review found no documented Android build on the maker's site, so verify before you plan around it.`,
            ],
          },
          {
            title: `Agents that drive the phone`,
            list: [
              `**Android AppFunctions** lets apps expose functions that an agent such as Gemini can call. Google documents it as a platform API with a Jetpack library for Android 16 and later; sources we read disagree on whether it is in limited or private preview, so treat it as not generally available. It is the on-device counterpart of MCP tools, and it needs the app's developer to opt in.`,
              `**ML Kit AgentRunner** gives developers a multi-step tool-calling loop on top of the Gemini Nano Prompt API, so an app can run a small agent entirely on the phone. It carries the same limits as the Prompt API: foreground only, supported phones only.`,
              `**Open-AutoGLM** is an open-source phone-agent framework from the Zhipu team ([zai-org/Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM)) that runs on a computer and operates an Android phone over ADB, with a vision-language model reading the screen. The model can be a remote API or a locally served model, and the agent itself is not on the phone. Check its license and the model card yourself; our sources disagreed.`,
            ],
          },
        ],
        callouts: [
          { type: 'warning', text: `An agent that can tap, type and read your screen can also leak what it sees. Run phone-driving agents on a test phone or a work profile, never on the phone that holds your banking apps.` },
        ],
      },
      devPaths: {
        id: 'dev-paths',
        title: 'Developer Paths',
        content: [
          `**Android has many routes to on-device AI, and picking one comes down to whether you need system integration, model choice or the NPU.** The table compares the routes; the notes after it give the caveats that cost people the most time.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Developers can target Android with Google ML Kit GenAI and Gemini Nano, LiteRT and LiteRT-LM, llama.cpp through Termux or the NDK, MLC LLM, ExecuTorch, Qualcomm GenieX, or SDKs such as RunAnywhere and Llamatik.` },
          { type: 'plain-terms', text: `Use Google's system model when it is enough, a Google or Qualcomm runtime when you need the NPU, and llama.cpp when you want any GGUF model.` },
        ],
        itemHeadings: true,
        columns: ['Path', 'Best for', 'Main limit'],
        rows: [
          { 'Path': 'ML Kit GenAI and Gemini Nano (AICore)', 'Best for': 'Summaries, rewriting, image description and a Prompt API on a system model that is updated for you. Includes AgentRunner and Embedding APIs. Prompt API input stays under about 4,000 tokens.', 'Main limit': 'Foreground use only; quotas per app; supported phones only; not supported with an unlocked bootloader (Prompt API).' },
          { 'Path': 'AICore Developer Preview with Gemma 4', 'Best for': 'Trying Gemma 4 E2B and E4B through the ML Kit Prompt API; code written now is meant to carry over to Gemini Nano 4 devices.', 'Main limit': 'A preview; Google said tool calling, structured output, system prompts and thinking mode were still being added.' },
          { 'Path': 'LiteRT and LiteRT-LM', 'Best for': 'Your own app with Gemma, Llama, Phi-4 or Qwen families, GPU and NPU acceleration, vision and audio input, function calling.', 'Main limit': 'NPU needs per-chip compiled models; Swift and JavaScript are early previews.' },
          { 'Path': 'Qualcomm AI Hub and GenieX', 'Best for': 'Snapdragon 8 Elite and 8 Elite Gen 5, GGUF through llama.cpp with a Hexagon backend or pre-compiled AI Hub bundles through AI Engine Direct.', 'Main limit': 'Snapdragon only; the Android runtime rejects non-default GPU layer and context settings on the AI Hub path.' },
          { 'Path': 'MediaTek NeuroPilot through LiteRT', 'Best for': 'Dimensity NPUs with pre-compiled Gemma and Qwen3 models.', 'Main limit': 'Custom Gemma conversion for MediaTek was not yet available.' },
          { 'Path': 'Google Tensor SDK', 'Best for': 'Pixel 10 TPU through LiteRT, with a Model Garden of 100+ models.', 'Main limit': 'Beta; Pixel 10 family only.' },
          { 'Path': 'llama.cpp in Termux or the NDK', 'Best for': 'Any GGUF model on the CPU, no root; a one-off prototype or a CLI.', 'Main limit': 'Android process limits and heat; start with a context near 4096 or the terminal can be killed.' },
          { 'Path': 'MLC LLM', 'Best for': 'Compiling a model for one target with GPU acceleration.', 'Main limit': 'Compile toolchain; OpenCL support varies by phone.' },
          { 'Path': 'ExecuTorch', 'Best for': 'PyTorch export to Android, listed as covering LLMs and CPU, GPU, NPU and DSP backends.', 'Main limit': 'We could not confirm the exact backend list or status from the overview page.' },
          { 'Path': 'SDKs: RunAnywhere, Llamatik, Foundry Local', 'Best for': 'Speech, vision and LLM features in your own app (RunAnywhere); Kotlin Multiplatform (Llamatik); Microsoft runtime with C#, JavaScript, Rust and Python SDKs (Foundry Local).', 'Main limit': 'Foundry Local is listed for Android in the directory, but its review documents no Android build; confirm before use.' },
        ],
        callouts: [
          { type: 'tip', text: `Read the maker pages: [ML Kit GenAI overview](https://developers.google.com/ml-kit/genai), [Gemini Nano and AICore](https://developer.android.com/ai/aicore), [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM), [Qualcomm AI Hub](https://aihub.qualcomm.com/), [Termux](https://github.com/termux/termux-app) and the llama.cpp [Android guide](https://github.com/ggml-org/llama.cpp/blob/master/docs/android.md).` },
        ],
        subsections: [
          {
            title: `Reviewed developer tools`,
            list: [
              `[RunAnywhere](/power-local-llm/runanywhere-review): SDK for LLM, speech-to-text, text-to-speech, voice activity detection, vision-language models and embeddings that run on the device, for iOS, Android, Flutter and React Native apps. Limit: Apache-2.0-based license with commercial terms.`,
              `[Llamatik](/power-local-llm/llamatik-review): the Kotlin Multiplatform SDK behind the offline chatbot of the same name. Limit: one independent developer.`,
              `[Foundry Local](/power-local-llm/foundry-local-review): Microsoft's on-device runtime with SDKs for C#, JavaScript, Rust and Python. Limit: the review documents the desktop SDKs and no Android build.`,
              `[MLC LLM](/power-local-llm/mlc-llm-explained): the compiler and runtime behind MLC Chat, targeting iPhone, Android, browser (WebGPU) and desktop GPUs. Limit: a compile step per model and target.`,
              `[OlliteRT](/power-local-llm/ollitert-review): turns an Android phone into an OpenAI-compatible server on Google's LiteRT-LM, with no chat interface of its own. Limit: it needs .litertlm model files, not GGUF.`,
              `[Mobile LM Server](/power-local-llm/chaterminal-review): runs GGUF and LiteRT-LM models and serves them through OpenAI- and Ollama-compatible endpoints. Limit: contains ads and in-app purchases; our review is listing-based and, per that review of the listing, noted that its privacy policy and Data safety card differ on location.`,
              `[Ollama Local AI](/power-local-llm/ollama-local-ai-review): runs GGUF models through an embedded llama.cpp engine and exposes an OpenAI-compatible API on your Wi-Fi so tools such as Cursor can use the phone. Limit: it is not the Ollama project's app, and it is free with in-app purchases.`,
            ],
          },
        ],
      },
      remoteMode: {
        id: 'remote-mode',
        title: 'Remote Mode: Phone as a Thin Client',
        content: [
          `**The most capable "local AI on Android" setup is often a phone that talks to a model on your own computer.** The model runs on your Ollama or LM Studio machine; the phone is the interface. You keep privacy, because traffic stays on your network (or a VPN), and you get 7B to 70B class models without touching your phone's RAM.`,
          `Three cautions. First, the server must be on and reachable, so the setup fails away from home unless you add a VPN such as WireGuard or Tailscale. Second, Ollama listens on the local machine only by default, and exposing it to your network, for example by setting its host address, gives anyone on that network access because it has no built-in login; use a reverse proxy with authentication or a VPN. Third, a cloud API key inside the same app is a different data path, so keep local and cloud profiles clearly separate.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Android apps such as LocalMind, PocketLLM Lite, AnythingLLM Mobile, AnyLLM and RikkaHub let the phone act as a client to your own Ollama or LM Studio server on your network.` },
          { type: 'plain-terms', text: `The phone is the screen and keyboard; the heavy thinking happens on your computer at home.` },
        ],
        items: [
          `[LocalMind](/power-local-llm/localmind-review): free, MIT-licensed chat app for Android and iPhone that sends prompts to a model on the phone or to Ollama, LM Studio, OpenRouter or any OpenAI-compatible endpoint, with MCP tools. Limit: independent developer; the remote path sends text to whichever endpoint you pick.`,
          `[PocketLLM Lite](/power-local-llm/pocketllm-lite-review): MIT-licensed Android app that runs Cactus-format models on the phone or connects to your own Ollama or OpenAI-compatible server. Limit: no named developer, and PromptQuorum has not installed it.`,
          `[AnythingLLM Mobile](/power-local-llm/anythingllm-mobile-review): connected mode pairs with AnythingLLM Desktop or Cloud over the local network by QR code. Limit: Android only.`,
          `[AnyLLM](/power-local-llm/anyllm-review): Android client for your own API keys (OpenAI, Anthropic, Google, Groq) that can also connect an Ollama server, with MCP tools and AI-versus-AI debates. Limit: closed source, and cloud keys mean prompts leave your network.`,
          `[RikkaHub](/power-local-llm/rikkahub-review): open-source Android client for cloud providers that can reach a self-hosted Ollama or LM Studio server through its custom-endpoint field. Limit: it does not run models on the phone, so it is not an offline app by itself.`,
          `[Chapper](/power-local-llm/chapper-review): a polished Ollama and LM Studio client, but Apple only (iPhone, iPad, Mac). Limit: no Android version exists, so Android users should use one of the apps above.`,
        ],
        callouts: [
          { type: 'tip', text: `A phone can also be the server. [OlliteRT](/power-local-llm/ollitert-review), [Mobile LM Server](/power-local-llm/chaterminal-review) and [Ollama Local AI](/power-local-llm/ollama-local-ai-review) serve their model to other devices on your Wi-Fi, which is useful for testing and quick scripts but not a replacement for a real server.` },
        ],
      },
      privacy: {
        id: 'privacy-telemetry',
        title: 'Privacy and Telemetry Reality',
        content: [
          `**On-device inference keeps your prompts off a vendor's inference servers; it does not by itself stop the app from sending data elsewhere.** "Zero telemetry" can mean no analytics SDK, no crash reports, no ads and no network calls after model download, or only some of those. Apps vary, and the claim is the maker's unless you verify it.`,
          `Three places to check. The **Google Play Data safety card** lists what the developer says it collects or shares; it is developer-declared. The **privacy policy** says what the company does with data; the Mobile LM Server review, which is based on the listing, noted the policy and the card differing on location. The **network behavior** itself: a firewall or network monitor that shows connections after the model is downloaded is the most direct test.`,
          `Google's AICore design is a useful reference point: Google documents that AICore has no direct internet access, that model downloads go through the open-source Private Compute Services companion, and that it does not store the input or output after processing. That is Google's description of its own system, not an independent audit. Apps built on other engines make their own promises: [ToolNeuron](/power-local-llm/toolneuron-review), for example, states "no telemetry" as a design goal in its README, while the [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review) review of the iPhone build found diagnostics in the privacy label.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Offline inference keeps prompts on the phone, but "zero telemetry" must be checked in the Data safety card, the privacy policy and the app's actual network traffic.` },
          { type: 'plain-terms', text: `Running the model on your phone protects what you type; it does not promise the app never talks to the internet.` },
        ],
        itemHeadings: true,
        columns: ['What to check', 'Where', 'What it can reveal'],
        rows: [
          { 'What to check': 'Data safety card', 'Where': 'Google Play listing', 'What it can reveal': 'Developer-declared data collection and sharing, which may be incomplete or outdated.' },
          { 'What to check': 'Privacy policy', 'Where': 'Developer website', 'What it can reveal': 'Retention, third parties, jurisdiction, and whether the policy matches the card.' },
          { 'What to check': 'Permissions', 'Where': 'Android settings, App info', 'What it can reveal': 'Microphone, camera, storage or network access that a purely local app should not need.' },
          { 'What to check': 'Optional cloud features', 'Where': 'App settings', 'What it can reveal': 'Web search, cloud providers and sync toggles that quietly widen the data path.' },
          { 'What to check': 'Network traffic', 'Where': 'Airplane mode test or a firewall app', 'What it can reveal': 'Whether chat works with all network access blocked after download.' },
          { 'What to check': 'Source code', 'Where': 'GitHub or F-Droid', 'What it can reveal': 'Whether claims can be audited at all; closed-source claims rest on trust.' },
        ],
        callouts: [
          { type: 'tip', text: `The airplane-mode test is simple and honest: download the model on Wi-Fi, enable airplane mode, then chat. If the app refuses to work, it needs the network. If it works, it still may have sent data earlier, so combine it with the permission and policy checks.` },
          { type: 'warning', text: `[Obscurify](/power-local-llm/obscurify-review) is on Android and markets privacy, but it is a cloud service: it reaches 200+ cloud models behind a random account number, with an optional local mode that runs GGUF models in the browser. Anonymous cloud is not local AI, and [AquaVoice](/power-local-llm/aquavoice-review) is cloud dictation. Know which side of the line each tool is on.` },
        ],
      },
      deviceReality: {
        id: 'battery-thermal-background',
        title: 'Battery, Heat and Background Kills',
        content: [
          `**Three things limit local AI on a phone before the model does: heat, battery and Android's habit of killing background work.** All three get worse with larger models and longer sessions, and none of them shows up in a spec sheet.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `On Android, sustained local inference heats the phone and drains the battery, and the system or the brand's battery manager may kill the app mid-answer unless you exempt it.` },
          { type: 'plain-terms', text: `Running a model is like running a game: the phone warms up, slows down to protect itself, and may close the app if it thinks it is wasting power.` },
        ],
        items: [
          `**Heat.** A phone cannot hold peak speed for long. It slows itself to stay cool, so the first answer is usually faster than the tenth. We have no sourced throttling figure and give none; test with a ten-minute run on your own phone. Remove the case, avoid the charger while generating, and prefer smaller models for long sessions.`,
          `**Battery.** Generation keeps the CPU, GPU or NPU busy, so expect noticeable drain. Google says Gemma 4 on AICore uses up to 60% less battery than previous versions and runs up to 4 times faster (Google's claim for its own models and phones). Those numbers do not transfer to a sideloaded GGUF app.`,
          `**Foreground rules for Google's system model.** Google documents that ML Kit GenAI inference is allowed only when the calling app is the top foreground app, with errors for background use and per-app quotas for rapid or long-running use. Apps that use Gemini Nano cannot summarize in the background.`,
          `**Process limits.** Android 12 introduced a limit on background child processes, which is why Termux can print "signal 9" and stop. The Termux maintainers warn that it may be unstable on Android 12 and later. On recent versions, guides describe a Developer options switch named "Disable child process restrictions" and, on Android 12 to 13, an ADB setting; details differ by brand and version, so verify on your phone before relying on either.`,
          `**Brand battery managers.** Samsung, Xiaomi, OnePlus and others add their own sleeping-app lists. Exempt your AI app from battery optimization, lock it in the recent apps view, and keep the screen on during long answers.`,
          `**Storage.** Models are large files. Store them in the location the app expects, keep several gigabytes free, and delete models you no longer use.`,
          `**Context size.** A larger context window uses more memory. The llama.cpp Android guide suggests starting near 4096 because larger values can spike memory and kill the terminal.`,
        ],
        callouts: [
          { type: 'warning', text: `Do not leave a phone generating images or long answers under a pillow or in a hot car. Heat shortens battery life, and a throttled phone is a slow phone.` },
        ],
      },
      notPossible: {
        id: 'not-possible',
        title: 'Not Possible, or Not Yet',
        content: [
          `**These are the limits that no app can fix today, grouped by why.** Knowing them saves hours of trying settings that will not help.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Local AI on Android cannot match cloud models on hard tasks, cannot hold 70 billion parameter models or very long contexts, and cannot run as an always-on assistant that Android will not kill.` },
          { type: 'plain-terms', text: `A phone has a small memory, a small battery and a hot, sealed case; those three facts set the ceiling.` },
        ],
        itemHeadings: true,
        columns: ['Limit', 'Why', 'What to do instead'],
        rows: [
          { 'Limit': 'Frontier-model quality offline', 'Why': 'Phone models are 1 to 8 billion parameters; cloud flagships are far larger. Small models are weaker at hard reasoning and long, exact answers.', 'What to do instead': 'Use local for private, simple or offline jobs; use a server or cloud for hard ones.' },
          { 'Limit': '70 billion parameter models', 'Why': 'At 4-bit, the weights alone need tens of gigabytes; most phones have 8 to 16 GB in total.', 'What to do instead': 'Run them on a computer and use remote mode.' },
          { 'Limit': 'Very long documents in one go', 'Why': 'Context windows are small and memory grows with context; the Gemini Nano Prompt API stays under about 4,000 tokens.', 'What to do instead': 'Chunk with RAG; index on a server.' },
          { 'Limit': 'Fast replies for long outputs', 'Why': 'Speed is bounded by memory bandwidth, and heat throttles sustained runs.', 'What to do instead': 'Pick a smaller model; ask for short answers.' },
          { 'Limit': 'A reliable always-on background assistant', 'Why': 'Android restricts background work, and brand battery managers kill apps; Google\'s system model is foreground-only.', 'What to do instead': 'Put the assistant on a home server; use the phone as a client.' },
          { 'Limit': 'NPU speed from any sideloaded model', 'Why': 'NPU paths need models compiled per chip; only some operations are supported, and the rest fall back to CPU or GPU.', 'What to do instead': 'Use LiteRT, GenieX or NeuroPilot-ready models, or accept CPU and GPU speed.' },
          { 'Limit': 'Gemini Nano in any app on any phone', 'Why': 'Access depends on AICore, device and chipset support, and a locked bootloader for the Prompt API.', 'What to do instead': 'Use an engine you control, such as llama.cpp or LiteRT-LM.' },
          { 'Limit': 'Training or fine-tuning on the phone', 'Why': 'Memory, compute and thermal budgets are too small for anything beyond tiny experiments.', 'What to do instead': 'Fine-tune on a computer, then load the result.' },
          { 'Limit': 'Verified accuracy for small vision and OCR models', 'Why': 'We found no independent accuracy figures for the models these apps run.', 'What to do instead': 'Test on your own samples; never trust blindly.' },
          { 'Limit': 'Guaranteed zero telemetry', 'Why': 'An app can run locally and still collect analytics; the claim is the maker\'s.', 'What to do instead': 'Check the Data safety card, the policy, permissions and traffic.' },
          { 'Limit': 'One setup that works on every Android phone', 'Why': 'Chips, RAM, OS versions and battery managers differ by brand and model.', 'What to do instead': 'Test one small model first, then scale up.' },
        ],
        callouts: [
          { type: 'tip', text: `Several of these limits are moving. Gemma 4 on Gemini Nano 4, wider LiteRT NPU support and AppFunctions are all in preview or beta in the sources we read. Re-check them at the next refresh rather than assuming today's limits are permanent.` },
        ],
      },
      quietApps: {
        id: 'quiet-apps',
        title: 'Quiet Apps to Check Before You Rely on Them',
        content: [
          `**Some apps in the directory have had no upstream update for more than three months.** This is not a statement that the project is dead or unsafe; it is a prompt to check the maker's page, the store listing and the issue tracker before you build a routine around the app. The dates come from the directory entries, which record the latest release or last substantive commit read from a primary source.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Several Android-listed apps in the directory, including MLC Chat, Caelum, ToolNeuron, PAIOS, Aori and Atomic Bot, had no upstream update for more than three months at the time of writing.` },
          { type: 'plain-terms', text: `A quiet app may still work, but nobody may fix a bug or a security problem soon.` },
        ],
        items: [
          `[MLC Chat](/power-local-llm/mlc-chat-review): the directory's last recorded update is from September 2024; check the maker's GitHub releases for newer builds. The MLC LLM runtime itself keeps moving ([MLC LLM](/power-local-llm/mlc-llm-explained)), so for current work build from the runtime instead.`,
          `[Caelum](/power-local-llm/caelum-review): no update since August 2025, more than a year.`,
          `[ToolNeuron](/power-local-llm/toolneuron-review): a quiet period of several months; a good fit (MIT license, encrypted storage), but check recent activity.`,
          `[PAIOS](/power-local-llm/paios-review): the reviewed release is from spring 2026 and the project labels itself alpha; check that your phone is still supported by AICore.`,
          `[Aori](/power-local-llm/aori-ai-personal-agent-review): a free beta without a recent release; the Android app sends prompts to a cloud provider you connect.`,
          `[Atomic Bot](/power-local-llm/atomic-bot-review): no recent release, and no documented Android build in our review.`,
        ],
      },
      decisionPath: {
        id: 'decision-path',
        title: 'Decision Path: I Have This Phone and Want This',
        content: [
          `**Start from your RAM and your goal, not from an app's popularity.** Find the row that matches your phone, then the goal, then follow the link.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Match your phone's RAM and chip to a model size, then match your goal to a chapter: chat on PocketPal AI, camera and Gemma on Google AI Edge Gallery, documents on AnythingLLM Mobile, and heavy models on a server through a remote client.` },
          { type: 'plain-terms', text: `Small phone, small model; big job, big server.` },
        ],
        items: [
          `**4 to 6 GB, want simple private chat:** [PocketPal AI](/power-local-llm/pocketpal-ai-review) with a model of 1 to 2 billion parameters, or [Ensu](/power-local-llm/ensu-review) if you have at least 4 GB.`,
          `**8 GB, want the best everyday balance:** [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review) with a 3 to 4 billion parameter model.`,
          `**12 to 16 GB, want the biggest model that fits:** a 7 to 8 billion parameter model at low-bit quantization in a GGUF runner such as [Maid](/power-local-llm/maid-review), with a short context.`,
          `**Pixel 9 or Pixel 10:** try Google's system model through [PAIOS](/power-local-llm/paios-review), and use Google AI Edge Gallery for Gemma models.`,
          `**Galaxy S25 or S26:** read [Galaxy S26 On-Device AI](/local-llms/galaxy-s26-local-ai-on-device-2026) first, because Galaxy AI is hybrid and the chip depends on model and region.`,
          `**Snapdragon 8 Elite flagship, want maximum speed:** developers can use LiteRT and GenieX; as a user, start with [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review) and compare it with a llama.cpp app.`,
          `**Want to ask questions about my files:** [AnythingLLM Mobile](/power-local-llm/anythingllm-mobile-review) or [Private Mind](/power-local-llm/private-mind-review) on the phone; a home server for big archives.`,
          `**Want translation or dictation offline:** [LLM Hub](/power-local-llm/llm-hub-review), [Private Mind](/power-local-llm/private-mind-review) or [Ensu](/power-local-llm/ensu-review), after testing your language.`,
          `**Want to draw images:** [Local AI by GeetMark](/power-local-llm/local-ai-geetmark-review) or [TokForge](/power-local-llm/tokforge-review), with patience and a cool phone.`,
          `**Want my home to use it:** [Home Assistant Assist](/power-local-llm/home-assistant-assist-review) with a home server, and the phone as the remote.`,
          `**Own a computer with a GPU:** run Ollama or LM Studio there and use [LocalMind](/power-local-llm/localmind-review) or [AnythingLLM Mobile](/power-local-llm/anythingllm-mobile-review) as the phone client.`,
          `**Developer:** pick from the developer paths table; start with the ML Kit Prompt API if you only need small text tasks, and LiteRT-LM if you need your own model.`,
        ],
      },
      firstRun: {
        id: 'first-run',
        title: 'First Run in 15 Minutes',
        content: [
          `**You can have a working offline assistant in about 15 minutes, and most of that time is the model download.** This walkthrough uses PocketPal AI as the example; the steps are the same in any GGUF runner. Use Wi-Fi and a charger for the download.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Install one app, download a model sized to your RAM on Wi-Fi, run a prompt, then test again in airplane mode to confirm the answer works offline.` },
          { type: 'plain-terms', text: `Download once with internet, then switch the internet off and see if it still answers.` },
        ],
        numberedItems: [
          { title: `Check storage and RAM (1 minute)`, whyItMatters: `Models are gigabytes; free storage of 3 to 6 GB covers a first model, and RAM decides the size. Look under Settings, About phone.` },
          { title: `Install one app (2 minutes)`, whyItMatters: `Use [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review) from Google Play. One app at a time keeps results comparable.` },
          { title: `Join Wi-Fi and plug in (1 minute)`, whyItMatters: `The download is large and heating while charging is acceptable; mobile data may be slow and costly.` },
          { title: `Choose a model by RAM (1 minute)`, whyItMatters: `4 to 6 GB: 1 to 2B. 8 GB: 3 to 4B. 12 to 16 GB: 4 to 8B. When in doubt, pick the smaller one.` },
          { title: `Download and load the model (5 to 7 minutes)`, whyItMatters: `The time depends on your connection and the file size; keep the screen on until it finishes.` },
          { title: `Send a first prompt (1 minute)`, whyItMatters: `Ask something simple. Note how fast the words appear; this is your baseline.` },
          { title: `Test in airplane mode (1 minute)`, whyItMatters: `Turn on airplane mode and ask again. If it answers, inference is local for this model and app.` },
          { title: `Exempt the app from battery optimization (1 minute)`, whyItMatters: `This reduces mid-answer kills on brands with aggressive battery managers.` },
          { title: `Try one job from this guide (as long as you like)`, whyItMatters: `Dictation, a document question or an image question tells you quickly whether the phone is a good fit.` },
        ],
        callouts: [
          { type: 'tip', text: `If the first model feels slow or crashes, go one size down before changing apps. If it feels weak, go one size up or use remote mode.` },
        ],
      },
      phoneTierSummary: {
        id: 'phone-tier-summary',
        title: 'Summary: Phone Tier, App, Model Size',
        content: [
          `**One table to screenshot.** These are starting points based on the RAM arithmetic above and on what each app documents, not benchmark results.`,
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: `Use 1 to 2 billion parameter models on 4 to 6 GB phones, 3 to 4 billion on 8 GB phones, 7 to 8 billion on 12 to 16 GB phones, and a server for anything larger.` },
          { type: 'plain-terms', text: `Match the model to your RAM first, then choose the app for the job.` },
        ],
        columns: ['Phone tier', 'Good first app', 'Model size', 'Best for'],
        rows: [
          { 'Phone tier': '4 to 6 GB, budget', 'Good first app': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)', 'Model size': '1 to 2B', 'Best for': 'Short chat, simple rewriting' },
          { 'Phone tier': '8 GB, mid-range', 'Good first app': '[Google AI Edge Gallery](/power-local-llm/google-ai-edge-gallery-review)', 'Model size': '3 to 4B', 'Best for': 'Everyday chat, camera questions' },
          { 'Phone tier': '12 GB, flagship', 'Good first app': '[Maid](/power-local-llm/maid-review)', 'Model size': '4 to 8B', 'Best for': 'Better answers, short context' },
          { 'Phone tier': '16 GB, gaming phone', 'Good first app': '[LM Playground](/power-local-llm/lm-playground-review)', 'Model size': '7 to 8B', 'Best for': 'Larger local models' },
          { 'Phone tier': 'Pixel 9 or 10', 'Good first app': '[PAIOS](/power-local-llm/paios-review)', 'Model size': 'Gemini Nano', 'Best for': 'System model, no download' },
          { 'Phone tier': 'Any phone + home server', 'Good first app': '[LocalMind](/power-local-llm/localmind-review)', 'Model size': '7 to 70B on server', 'Best for': 'Heavy models, privacy at home' },
          { 'Phone tier': 'Documents on any tier', 'Good first app': '[AnythingLLM Mobile](/power-local-llm/anythingllm-mobile-review)', 'Model size': 'Small model + RAG', 'Best for': 'Questions about your files' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        content: [
          `**Most failed first attempts come from the same handful of mistakes.**`,
        ],
        items: [
          `**Choosing a model too large for free RAM.** The app crashes or the phone freezes. Go one size down.`,
          `**Assuming the NPU is used.** Most sideloaded apps run on the CPU or GPU, so a "50 TOPS" chip does not make them faster.`,
          `**Treating "offline" as "private".** Offline inference is one layer; analytics, ads and cloud toggles are another. Check the Data safety card and policy.`,
          `**Installing Termux from several sources.** Mixing Google Play, F-Droid and GitHub builds breaks signatures and updates. Pick one and stay on it.`,
          `**Using a text-only model for vision.** Images need a vision-capable model and, in some apps, an extra projector file.`,
          `**Expecting a background assistant.** Android and brand battery managers kill idle apps; put always-on jobs on a server.`,
          `**Judging a model by the first answer.** Cold phones are fastest; run a ten-minute test before you decide.`,
          `**Installing an Apple-only app.** [Chapper](/power-local-llm/chapper-review) has no Android version. Use an Android client instead.`,
          `**Trusting small models with high-stakes text.** Translation, OCR and summaries can be wrong; verify before acting.`,
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        content: [
          `Platform and chip facts come from the maker pages below, read in November 2026. Product facts come from the linked PromptQuorum reviews and the directory entries, which cite their own primary sources.`,
        ],
        items: [
          `[Overview of the ML Kit GenAI APIs](https://developers.google.com/ml-kit/genai) — Prompt API, AgentRunner, speech, image and text tasks, device lists and foreground-only limits.`,
          `[Get started with the Prompt API](https://developers.google.com/ml-kit/genai/prompt/android/get-started) — image input, context limit and bootloader requirement.`,
          `[Gemini Nano and AICore](https://developer.android.com/ai/aicore) — architecture, privacy design and hybrid inference.`,
          `[Announcing Gemma 4 in the AICore Developer Preview](https://developer.android.com/blog/posts/announcing-gemma-4-in-the-ai-core-developer-preview) — E2B and E4B, preview scope.`,
          `[Google AI Edge Gallery](https://github.com/google-ai-edge/gallery) — features, install channels and Android version.`,
          `[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) — supported platforms, models and API status.`,
          `[Unlocking peak performance on Qualcomm NPU with LiteRT](https://developers.googleblog.com/en/unlocking-peak-performance-on-qualcomm-npu-with-litert/) — Snapdragon NPU paths and limits.`,
          `[MediaTek NPU and LiteRT](https://developers.googleblog.com/en/mediatek-npu-and-litert-powering-the-next-generation-of-on-device-ai/) — Dimensity 9500 figures and models.`,
          `[Google Tensor SDK beta with LiteRT](https://developers.googleblog.com/en/google-tensor-sdk-beta-with-litert/) — Pixel 10 TPU access.`,
          `[Qualcomm GenieX platforms](https://geniex.aihub.qualcomm.com/en/get-started/platforms) and [Qualcomm AI Hub](https://aihub.qualcomm.com/) — supported Snapdragon chips and runtimes.`,
          `[Android AppFunctions overview](https://developer.android.com/ai/appfunctions) — agent access to app functions on Android 16 and later.`,
          `[Termux](https://github.com/termux/termux-app) and the llama.cpp [Android guide](https://github.com/ggml-org/llama.cpp/blob/master/docs/android.md) — install sources, process limits and build notes.`,
          `[ExecuTorch documentation](https://docs.pytorch.org/executorch/stable/index.html) — platform and model-type overview.`,
          `[Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) — a computer-side phone agent framework; license and model terms should be checked there.`,
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: `Can I run local AI on Android without internet?`, a: `Yes. Download an on-device app such as PocketPal AI or Google AI Edge Gallery and a 1 to 4 billion parameter model on Wi-Fi, then use it in airplane mode. The first download needs a connection; chat, dictation, translation and document questions can work offline afterwards, with quality below cloud AI.` },
          { q: `How much RAM do I need to run an LLM on my Android phone?`, a: `As a rule of thumb, 4 to 6 GB fits 1 to 2 billion parameter models, 8 GB fits 3 to 4 billion, and 12 to 16 GB can hold 7 to 8 billion at low-bit quantization. Android and other apps use several gigabytes, so free RAM matters more than the number on the box. Apps may set their own floors.` },
          { q: `Do Android apps use the NPU for local LLMs?`, a: `Usually not. Generic GGUF apps run on the CPU and sometimes the GPU. NPU paths exist through Google LiteRT, Qualcomm GenieX and MediaTek NeuroPilot, but they need models prepared for a specific chip. Google reports large speed-ups for its own examples, such as Gemma 3n E2B on a Dimensity 9500 NPU, but those are developer paths.` },
          { q: `What is Gemini Nano and can any app use it?`, a: `Gemini Nano is Google's on-device model, managed by Android's AICore service. Apps reach it through ML Kit GenAI on supported phones, such as Pixel 9 and 10 and recent Galaxy and Xiaomi models. Google says it runs only while the app is in the foreground, and the Prompt API is not supported with an unlocked bootloader.` },
          { q: `What is the best local AI app for Android?`, a: `There is no single best. PocketPal AI is a free, open-source GGUF runner with a wide model choice; Google AI Edge Gallery is Google's own app for Gemma-family models; AnythingLLM Mobile fits document questions; LocalMind fits a phone that talks to your own server. Our Android roundup compares the best-known options.` },
          { q: `Is local AI on Android really private?`, a: `When an app runs the model on the phone, prompts are not sent to an AI vendor's inference servers for that step. The app can still collect analytics or use cloud features. Check the Data safety card, the privacy policy, permissions and whether the app works with airplane mode on after the model download.` },
          { q: `Can I run Ollama on an Android phone?`, a: `There is no official Ollama app for Android. A community route runs it in Termux on the CPU, and you can run llama.cpp in Termux directly, or use an Android app that mimics an Ollama-compatible API, such as Mobile LM Server or Ollama Local AI (not made by the Ollama project). Most people get better results by running Ollama on a computer and using a phone client.` },
          { q: `Does Android allow local AI in the background?`, a: `Only partly. Android restricts background processes, brand battery managers add their own limits, and Google's Gemini Nano APIs work only in the foreground. Exempt the app from battery optimization and keep the screen on for long answers; put always-on assistants on a home server.` },
          { q: `Can a phone run a 70 billion parameter model?`, a: `Not realistically. At 4-bit, the weights alone need tens of gigabytes, while phones typically have 8 to 16 GB in total. Run such models on a computer and use your phone as a client through an app such as LocalMind or AnythingLLM Mobile.` },
          { q: `How do I translate text offline on Android with local AI?`, a: `Use an app that includes translation, such as LLM Hub, or Google AI Edge Gallery's Audio Scribe for recordings. Small models handle common language pairs reasonably and struggle with rare languages and legal wording, so test your pair and verify important text.` },
          { q: `Is it safe to use an on-device vision model for documents or labels?`, a: `Not for high-stakes reading. Small vision models can misread text and numbers, and we found no independent accuracy figures for the models these apps run. Use them for gist, then verify against the original.` },
          { q: `What is different on an iPhone?`, a: `Both are capable, but they trade differently. iPhone has one vendor and fewer device variants, so results tend to be more predictable. Android gives you more room to install apps from outside the store and to use Termux, which is an Android app. Apple's rules for installing apps from outside the App Store differ by region and change over time, so check Apple's current policy for your country. Our sibling guide, Local AI on iPhone, covers the Apple side, and Galaxy vs iPhone On-Device AI compares the two ecosystems.` },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          `[Best Local LLM Apps for Android](/power-local-llm/best-local-llm-apps-android-2026) — the speed and setup comparison of the best-known Android apps.`,
          `[Local AI on iPhone](/power-local-llm/local-ai-on-iphone-guide) — the Apple counterpart of this guide.`,
          `[Mobile Local LLMs](/local-llms/mobile-local-llms) — local LLMs on phones, tablets and laptops.`,
          `[Mobile LLM Models: Phi-4, Gemma and SmolLM](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — which small models to run.`,
          `[Run AI on a Tablet](/power-local-llm/run-ai-on-tablet-ipad-android) — iPad and Android tablet options.`,
          `[Voice Assistants on Mobile, Offline](/power-local-llm/voice-assistant-local-mobile-offline) — offline voice stacks.`,
          `[Galaxy S26 On-Device AI](/local-llms/galaxy-s26-local-ai-on-device-2026) — Samsung's chips and Galaxy AI in detail.`,
          `[Galaxy vs iPhone On-Device AI](/local-llms/galaxy-vs-iphone-on-device-ai-2026) — Samsung and Apple compared.`,
          `[Local AI App Directory](/directory) — every app we cover, filterable by platform and category.`,
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local AI on Android in 2026: What Is Possible, What Is Not, and the Apps We Cover',
      description:
        'A platform guide to local and on-device AI on Android: capability map, RAM and chip limits, the apps we cover by job, developer paths and an explicit not-possible list.',
      datePublished: '2026-11-13',
      dateModified: '2026-11-13',
      url: 'https://www.promptquorum.com/power-local-llm/local-ai-on-android-guide',
      inLanguage: 'en',
      image: buildOgImageObject(OG_SLUG, 'en'),
      author: authorPerson(),
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
    },
  },
}
